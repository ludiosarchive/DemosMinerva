# -*- coding: utf-8 -*-

import sys
import jinja2
import simplejson
import html2text

from twisted.python.filepath import FilePath
from twisted.internet import protocol
from twisted.python import log

from cwtools.htmltools import getTestPageCSS

from webmagic.untwist import BetterResource, BetterFile
import minerva
from minerva.newlink import (
	BasicMinervaProtocol, BasicMinervaFactory, getRandomSubdomain)
from minerva.decoders import strictDecodeOne
from brequire import requireFile, requireFiles

from protojson.pbliteserializer import PbLiteSerializer
from protojson.error import PbDecodeError

from BeautifulSoup import BeautifulSoup, BeautifulStoneSoup

from browsernode import ljstream_messages_pb2 as ljm


def unescapeXhtml(s):
	htmlInput = '<html>' + s
	# Livejournal stream has &apos; so we must use XHTML_ENTITIES
	unescaped = BeautifulSoup(
		htmlInput, convertEntities=BeautifulSoup.XHTML_ENTITIES
	).contents[0].string
	if not unescaped:
		unescaped = ""
	return unescaped


def containsRussianVowels(s):
	russianVowels = u"АаЕеЁёИиЙйОоУуЭэЮюЯя"
	for vowel in russianVowels:
		if vowel in s:
			return True
	return False


class DownloaderProtocol(protocol.Protocol):
	"""
	I parse the LiveJournal Atom stream.  Connect me to
	C{atom.services.livejournal.com:80}.
	"""
	_START_FEED = "<feed "
	_END_FEED = "</feed>"

	def __init__(self):
		self._buffer = ""


	def connectionMade(self):
		self.factory.resetActivityTimeout()
		self.factory.protos.append(self)
		self.transport.write("""\
GET /atom-stream.xml HTTP/1.1\r
Host: atom.services.livejournal.com\r
\r
""")


	def connectionLost(self, reason):
		self.factory.stopActivityTimeout()
		self.factory.protos.pop(0)


	def feedStringReceived(self, feedString):
		try:
			soup = BeautifulStoneSoup(feedString)
		except Exception, e:
			log.err(e, "Problem parsing %r" % (feedString,))
		# We want the <title>, not the <title type="text"> (because that's just the journal title)
		htmlTitle = soup.findAll(lambda tag: tag.name == u'title' and not tag.attrs)[0].string
		if not htmlTitle: # it might be None
			htmlTitle = u""

		# name, attrs looks like this:
		# u'link', [(u'href', u'http://aksnbs.livejournal.com/15282.html')]
		twoLinks = soup.findAll(lambda tag:
			tag.name == u'link' and
			len(tag.attrs) == 1 and
			tag.attrs[0][0] == u'href')
		# The second link is the correct one.
		postHref = twoLinks[1].attrs[0][1]

		# The .string gives us over-escaped "HTML"; we turn it into
		# a real HTML string with unescapeXhtml.
		htmlContent = unescapeXhtml(soup.findAll('content')[0].string)
		numImages = htmlContent.count('<img ')

		htmlTitle = unescapeXhtml(htmlTitle)

		try:
			origBodyWidth = html2text.BODY_WIDTH
			# Disable wrapping, because we don't need it.
			html2text.BODY_WIDTH = 0
			shortTextContent = html2text.html2text(htmlContent)[:400]
		finally:
			html2text.BODY_WIDTH = origBodyWidth

		if containsRussianVowels(htmlTitle):
			lang = "ru"
		elif containsRussianVowels(shortTextContent):
			lang = "ru"
		else:
			lang = "?"

		self.factory._feedReceivedCallable({
			"url": postHref,
			"title": htmlTitle,
			"body": shortTextContent,
			"num_images": numImages,
			"lang": lang
		})


	def dataReceived(self, data):
		self.factory.resetActivityTimeout()
		self._buffer += data
		if len(self._buffer) > 1024 * 1024:
			log.msg("_buffer was over 1MB; clearing it.")
			self._buffer = ""

		while True:
			feedPos = self._buffer.find(self._START_FEED)
			if feedPos == -1:
				break

			endFeedPos = self._buffer.find(self._END_FEED)
			if endFeedPos == -1:
				break

			to = endFeedPos + len(self._END_FEED)
			feedString = self._buffer[feedPos:to]
			# This is inefficient in case we get a ton of feeds at once, but
			# that doesn't happen often in practice.
			self._buffer = self._buffer[to:]
			self.feedStringReceived(feedString)



class NoProtocol(Exception):
	pass



class DownloaderFactory(protocol.ReconnectingClientFactory):
	protocol = DownloaderProtocol
	maxDelay = 5 * 60

	def __init__(self, clock, feedReceivedCallable):
		self._clock = clock
		self._feedReceivedCallable = feedReceivedCallable
		self._activityDc = None
		self.protos = []


	def _noActivity(self):
		log.msg("LiveJournal connection is not receiving any data; disconnecting.")
		self.abortLatestProtocol()


	def stopActivityTimeout(self):
		if self._activityDc:
			if self._activityDc.active():
				self._activityDc.cancel()


	def resetActivityTimeout(self):
		self.stopActivityTimeout()
		self._activityDc = self._clock.callLater(10, self._noActivity)


	def startedConnecting(self, connector):
		log.msg('Started to connect to LiveJournal.')


	def buildProtocol(self, addr):
		log.msg('Connected to LiveJournal.')
		self.resetDelay()
		return protocol.ReconnectingClientFactory.buildProtocol(self, addr)


	def clientConnectionLost(self, connector, reason):
		log.msg('Lost connection.  Reason: ' + repr(reason))
		protocol.ReconnectingClientFactory.clientConnectionLost(self, connector, reason)


	def clientConnectionFailed(self, connector, reason):
		log.msg('Connection failed.  Reason: ' + repr(reason))
		protocol.ReconnectingClientFactory.clientConnectionFailed(self, connector, reason)


	def _getLatestProtocol(self):
		try:
			return self.protos[-1]
		except IndexError:
			raise NoProtocol()


	def abortLatestProtocol(self):
		self._getLatestProtocol().transport.abortConnection()



class LjStreamIndex(BetterResource):
	isLeaf = True

	def __init__(self, csrfStopper, cookieInstaller, domain, filename):
		BetterResource.__init__(self)
		self._csrfStopper = csrfStopper
		self._cookieInstaller = cookieInstaller
		self._domain = domain
		self._filename = filename

		self._jinja2Env = jinja2.Environment()
		self._basePath = FilePath(__file__).parent() # this is minerva/chatapp/


	def render_GET(self, request):
		cookie = self._cookieInstaller.getSet(request)
		token = self._csrfStopper.makeToken(cookie)

		sub1 = getRandomSubdomain('ml', 20)
		sub2 = getRandomSubdomain('ml', 20)

		# Allow the template to include the contents in the page, so
		# that the client doesn't have to make another HTTP request.
		bootstrap_XDRSetup_contents = FilePath(minerva.__file__).parent().\
			child('compiled_client').child('bootstrap_XDRSetup.js').getContent()

		# This jinja2 stuff is for the html page, not the JavaScript
		template = self._basePath.child(self._filename).getContent().decode('utf-8')
		dictionary = dict(
			getTestPageCSS=getTestPageCSS,
			token=token,
			bootstrap_XDRSetup_contents=bootstrap_XDRSetup_contents,
			domain=self._domain,
			sub1=sub1,
			sub2=sub2,
			dumps=simplejson.dumps)
		rendered = self._jinja2Env.from_string(template).render(dictionary)
		return rendered.encode('utf-8')



requireFile(FilePath(__file__).parent().child('ljstream.html').path)
requireFiles([f.path for f in FilePath(__file__).parent().child('static').children()])
requireFile(FilePath(__file__).parent().child('compiled').child('ljstream.js').path)

class LjStreamResource(BetterResource):
	templateFilename = 'ljstream.html'

	def __init__(self, csrfStopper, cookieInstaller, domain):
		BetterResource.__init__(self)

		self.putChild('', LjStreamIndex(
			csrfStopper, cookieInstaller, domain, self.templateFilename))
		self.putChild('static', BetterFile(FilePath(__file__).parent().child('static').path))



requireFile(FilePath(__file__).parent().child('forum_dev.html').path)

class LjStreamDevResource(LjStreamResource):
	templateFilename = 'ljstream_dev.html'



class LjStreamProtocol(BasicMinervaProtocol):

	def __init__(self, clock):
		self._clock = clock
		self.includeRussianPosts = True


	def streamStarted(self, stream):
		self.stream = stream
		self.factory.addViewer(self)


	def streamReset(self, reasonString, applicationLevel):
		self.factory.removeViewer(self)
		del self.stream


	def _setPreferences(self, body):
		try:
			sp = ljm.SetPreferences()
			self.factory.serializer.deserialize(sp, body)
		except PbDecodeError:
			1/0 # TODO
		self.includeRussianPosts = sp.include_russian_posts


	def stringsReceived(self, strings):
		"""
		Note: C{strings} may be a mix of C{str}s and C{StringFragment}s.
		"""
		try:
			for s in strings:
				s = str(s) # maybe StringFragment -> str
				payload = strictDecodeOne(s)
				if len(payload) == 2:
					msgType = payload[0]
					body = payload[1]
					if msgType == 2: # SetPreferences
						self._setPreferences(body)
		except:
			log.err()


class LjStreamFactory(BasicMinervaFactory):
	protocol = LjStreamProtocol

	def __init__(self, reactor, clock):
		self._reactor = reactor
		self._clock = clock
		self.protos = set()
		self.serializer = PbLiteSerializer()
		self.dlFactory = DownloaderFactory(self._clock, self.broadcastPost)


	def startDownloading(self):
		"""
		Start downloading data from the LiveJournal stream.  To save
		bandwidth, we don't do this when there are no viewers.
		"""
		self._reactor.connectTCP(
			'atom.services.livejournal.com', 80, self.dlFactory, timeout=10)


	def stopDownloading(self):
		"""
		Stop downloading data from the LiveJournal stream.
		"""
		log.msg("Disconnecting from LiveJournal")
		self.dlFactory.abortLatestProtocol()


	def addViewer(self, proto):
		needToStartDownloading = not self.protos
		self.protos.add(proto)
		if needToStartDownloading:
			self.startDownloading()


	def removeViewer(self, proto):
		self.protos.remove(proto)
		if not self.protos:
			self.stopDownloading()


	def broadcastPost(self, post):
		##print "POST", post
		for proto in self.protos:
			if post['lang'] == 'ru' and not proto.includeRussianPosts:
				continue
			if proto.stream.queue.getMaxConsumption() > 2 * 1024 * 1024:
				proto.stream.reset("> 2MB outgoing")
				continue
			proto.stream.sendStrings([simplejson.dumps(
				[1, self.serializer.serialize(ljm.NewPost(**post))])])


	def buildProtocol(self):
		stream = self.protocol(self._clock)
		stream.factory = self
		return stream



def main():
	log.startLogging(sys.stdout)
	from twisted.internet import reactor
	def feedReceived(feed):
		print feed
	clock = reactor
	factory = DownloaderFactory(clock, feedReceived)
	reactor.connectTCP('atom.services.livejournal.com', 80, factory, timeout=10)
	reactor.run()



if __name__ == '__main__':
	main()
