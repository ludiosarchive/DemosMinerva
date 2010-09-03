import jinja2
import simplejson

from twisted.python.filepath import FilePath

from cwtools.htmltools import getTestPageCSS

from webmagic.untwist import BetterResource
from minerva.newlink import (
	BasicMinervaProtocol, BasicMinervaFactory, getRandomSubdomain)
from brequire import requireFile


requireFile(FilePath(__file__).parent().child('forum_dev.html').path)

class ForumIndex(BetterResource):
	isLeaf = True

	def __init__(self, csrfStopper, cookieInstaller, domain):
		BetterResource.__init__(self)
		self._csrfStopper = csrfStopper
		self._cookieInstaller = cookieInstaller
		self._domain = domain

		self._jinja2Env = jinja2.Environment()
		self._basePath = FilePath(__file__).parent() # this is minerva/chatapp/

		self._fileName = 'forum_dev.html'


	def render_GET(self, request):
		cookie = self._cookieInstaller.getSet(request)
		token = self._csrfStopper.makeToken(cookie)

		sub1 = getRandomSubdomain('ml', 20)
		sub2 = getRandomSubdomain('ml', 20)

		# This jinja2 stuff is for the html page, not the JavaScript
		template = self._basePath.child(self._fileName).getContent().decode('utf-8')
		dictionary = dict(
			getTestPageCSS=getTestPageCSS,
			token=token,
			domain=self._domain,
			sub1=sub1,
			sub2=sub2,
			dumps=simplejson.dumps)
		rendered = self._jinja2Env.from_string(template).render(dictionary)
		return rendered.encode('utf-8')



class ForumDevResource(BetterResource):

	def __init__(self, csrfStopper, cookieInstaller, domain):
		BetterResource.__init__(self)

		self.putChild('', ForumIndex(csrfStopper, cookieInstaller, domain))



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
