import simplejson

from twisted.python.filepath import FilePath

from webmagic.untwist import BetterResource, BetterFile
from minerva.newlink import BasicMinervaProtocol, BasicMinervaFactory
from minerva.website import MinervaBootstrap
from brequire import requireFile, requireFiles


requireFile(FilePath(__file__).parent().child('forum.html').path)
requireFiles([f.path for f in FilePath(__file__).parent().child('static').children()])
requireFile(FilePath(__file__).parent().child('compiled').child('forum.js').path)

class ForumResource(BetterResource):
	templateFile = FilePath(__file__).parent().child('forum.html')

	def __init__(self, csrfStopper, cookieInstaller, domain):
		BetterResource.__init__(self)

		self.putChild('', MinervaBootstrap(
			csrfStopper, cookieInstaller, self.templateFile, dict(domain=domain)))
		self.putChild('static', BetterFile(FilePath(__file__).parent().child('static').path))



requireFile(FilePath(__file__).parent().child('forum_dev.html').path)

class ForumDevResource(ForumResource):
	templateFile = FilePath(__file__).parent().child('forum_dev.html')



class ForumProtocol(BasicMinervaProtocol):

	def __init__(self, clock):
		self._clock = clock


	def streamStarted(self, stream):
		self.factory.counter += 1
		self._id = self.factory.counter
		self.stream = stream
		self.factory.chatters.add(self)


	def streamReset(self, reasonString, applicationLevel):
		self.factory.chatters.remove(self)
		del self.stream


	def stringsReceived(self, strings):
		"""
		Note: C{strings} may be a mix of C{str}s and C{StringFragment}s.
		"""
		for s in strings:
			s = str(s) # maybe StringFragment -> str
			if s.startswith('broadcast:'):
				text = s.split(':', 1)[1]
				for c in self.factory.chatters:
					# We assume text contains only characters in the " " - "~" range.
					c.stream.sendStrings(["TEXT|" + str(self._id) + '|' + text])

			else:
				c.stream.sendStrings(["unknown_message_type"])



class ForumFactory(BasicMinervaFactory):
	protocol = ForumProtocol

	def __init__(self, clock):
		self._clock = clock
		self.counter = 0
		self.chatters = set()


	def buildProtocol(self):
		stream = self.protocol(self._clock)
		stream.factory = self
		return stream
