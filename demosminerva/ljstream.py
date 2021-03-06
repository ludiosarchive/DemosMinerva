# -*- coding: utf-8 -*-

import re
import sys
import HTMLParser

import simplejson

from twisted.python.filepath import FilePath
from twisted.internet import protocol
from twisted.python import log

from webmagic.untwist import BetterResource
from minerva.mutils import (
	MinervaBootstrap, strictSecureDecodeJson, StrictDecodeError)

from BeautifulSoup import BeautifulSoup, BeautifulStoneSoup

try:
	from brequire import requireFile, requireFiles
except ImportError:
	requireFile = requireFiles = lambda _: None


htmlParser = HTMLParser.HTMLParser()

RE_P = re.compile('(<p.*?>)|(<tr.*?>)', re.I)
RE_COMMENTS = re.compile('<!--.*?-->', re.M)
RE_TAGS = re.compile('<.*?>', re.M)

def _htmlToTextHack(s):
	# This function is really terrible; it loses href= and img src=
	# information.
	s = s.replace("\r\n", " ").replace("\n", " ")
	s = RE_P.sub('\n', s)
	s = RE_COMMENTS.sub('', s)
	s = RE_TAGS.sub(' ', s)
	return s


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
		try:
			self.factory.protos.remove(self)
		except ValueError:
			log.msg("I wasn't in factory.protos?")
			pass


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
		try:
			htmlContent = unescapeXhtml(soup.findAll('content')[0].string)
		except ValueError:
			# BeautifulSoup raises tons of errors like this:
			# exceptions.ValueError: invalid literal for int() with base 10: 'x192'
			return # We can't continue processing.  Maybe someone should fix BS?

		numImages = htmlContent.count('<img ')

		try:
			htmlTitle = unescapeXhtml(htmlTitle)
		except ValueError:
			return

		shortTextContent = _htmlToTextHack(
			htmlParser.unescape(htmlContent))[:400]

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
	maxDelay = 60
	factor = 1.8

	def __init__(self, clock, feedReceivedCallable):
		# Note: ReconnectingClientFactory also uses self.clock
		self.clock = clock
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
		self._activityDc = self.clock.callLater(10, self._noActivity)


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
		latestTransport = self._getLatestProtocol().transport
		if hasattr(latestTransport, 'abortConnection'):
			latestTransport.abortConnection()
		else:
			latestTransport.loseConnection()



requireFile(FilePath(__file__).sibling('ljstream.html').path)
requireFiles([f.path for f in FilePath(__file__).sibling('static').children() if not f.isdir()])

class LjStreamResource(BetterResource):
	templateFile = FilePath(__file__).sibling('ljstream.html')
	dictionary = {'dev_mode': False}

	def __init__(self, fileCache, mainSocketPort, domain,
	responseCacheOptions):
		BetterResource.__init__(self)

		self.putChild('', MinervaBootstrap(fileCache, self.templateFile,
			dict(domain=domain, mainSocketPort=mainSocketPort, **self.dictionary)))



class LjStreamDevResource(LjStreamResource):
	dictionary = {'dev_mode': True}



class LjStreamProtocol(object):

	def __init__(self, clock):
		self._clock = clock
		self.includeRussianPosts = True


	def streamStarted(self, stream):
		self.stream = stream
		self.factory.addViewer(self)


	def streamReset(self, reasonString, applicationLevel):
		self.factory.removeViewer(self)
		del self.stream


	def _setPreferences(self, preferences):
		# TODO: use json-schema validation
		if not isinstance(preferences, dict):
			raise ValueError("preferences was a %r; should be a dict" % (type(preferences),))
		if not isinstance(preferences['include_russian_posts'], bool):
			raise ValueError("preferences['include_russian_posts'] "
				"was a %r, should be a bool" % (type(preferences['include_russian_posts']),))

		self.includeRussianPosts = preferences['include_russian_posts']


	def stringReceived(self, s):
		msgType, body = strictSecureDecodeJson(s)
		if msgType == "SetPreferences":
			self._setPreferences(body)



class LjStreamFactory(object):

	def __init__(self, reactor, clock):
		self._reactor = reactor
		self._clock = clock
		self.protos = set()
		self.dlFactory = DownloaderFactory(self._clock, self.broadcastPost)


	def startDownloading(self):
		"""
		Start downloading data from the LiveJournal stream.  To save
		bandwidth, we don't do this when there are no viewers.
		"""
		self.dlFactory.continueTrying = 1
		self._reactor.connectTCP(
			'atom.services.livejournal.com', 80, self.dlFactory, timeout=10)


	def stopDownloading(self):
		"""
		Stop downloading data from the LiveJournal stream.
		"""
		log.msg("Disconnecting from LiveJournal")
		self.dlFactory.continueTrying = 0
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
		for proto in list(self.protos): # Make a copy
			if post['lang'] == 'ru' and not proto.includeRussianPosts:
				continue
			if proto.stream.queue.getMaxConsumption() > 2 * 1024 * 1024:
				proto.stream.reset("> 2MB outgoing")
				continue
			proto.stream.sendString(simplejson.dumps(["NewPost", post]))


	def buildProtocol(self):
		stream = LjStreamProtocol(self._clock)
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
