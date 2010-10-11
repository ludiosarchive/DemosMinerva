from twisted.internet import endpoints, protocol
from twisted.python import log


class LjProtocol(protocol.Protocol):
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
		print feedString


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
	from twisted.internet import reactor
	ep = endpoints.TCP4ClientEndpoint(reactor, 'atom.services.livejournal.com', 80)
	factory = LjFactory()
	ep.connect(factory)
	reactor.run()



if __name__ == '__main__':
	main()
