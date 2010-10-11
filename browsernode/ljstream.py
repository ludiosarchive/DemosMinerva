import sys

from BeautifulSoup import BeautifulStoneSoup

from twisted.internet import endpoints, protocol
from twisted.python import log


class LjProtocol(protocol.Protocol):
	"""
	I parse the LiveJournal Atom stream.  Connect me to
	C{atom.services.livejournal.com:80}.
	"""
	_START_FEED = "<feed "
	_END_FEED = "</feed>"

	def __init__(self):
		self.buffer = ""


	def connectionMade(self):
		self.transport.write("""\
GET /atom-stream.xml HTTP/1.1\r
Host: atom.services.livejournal.com\r
\r
""")


	def feedStringReceived(self, feedString):
		try:
			soup = BeautifulStoneSoup(feedString)
		except Exception, e:
			log.err(e, "Problem parsing %r" % (feedString,))
		# We want the <title>, not the <title type="text"> (because that's just the journal title)
		htmlTitle = soup.findAll(lambda tag: tag.name == u'title' and not tag.attrs)[0].string

		# name, attrs looks like this:
		# u'link', [(u'href', u'http://aksnbs.livejournal.com/15282.html')]
		twoLinks = soup.findAll(lambda tag: tag.name == u'link' and len(tag.attrs) == 1 and tag.attrs[0][0] == u'href')
		# The second link is the correct one.
		postHref = twoLinks[1].attrs[0][1]

		htmlContent = soup.findAll('content')[0].string

		print 'title:', repr(htmlTitle)
		print 'href:', repr(postHref)
		#print repr(htmlContent)

	def dataReceived(self, data):
		self.buffer += data
		if len(self.buffer) > 1024 * 1024:
			log.msg("buffer was over 1MB; clearing it.")
			self.buffer = ""

		while True:
			feedPos = self.buffer.find(self._START_FEED)
			if feedPos == -1:
				break

			endFeedPos = self.buffer.find(self._END_FEED)
			if endFeedPos == -1:
				break

			to = endFeedPos + len(self._END_FEED)
			feedString = self.buffer[feedPos:to]
			# This is inefficient in case we get a ton of feeds at once, but
			# that doesn't happen often in practice.
			self.buffer = self.buffer[to:]
			self.feedStringReceived(feedString)



class LjFactory(protocol.Factory):
	protocol = LjProtocol



def main():
	log.startLogging(sys.stdout)
	from twisted.internet import reactor
	ep = endpoints.TCP4ClientEndpoint(reactor, 'atom.services.livejournal.com', 80)
	factory = LjFactory()
	ep.connect(factory)
	reactor.run()



if __name__ == '__main__':
	main()
