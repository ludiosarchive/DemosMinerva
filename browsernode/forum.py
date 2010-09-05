import jinja2
import simplejson

from twisted.python.filepath import FilePath

from cwtools.htmltools import getTestPageCSS

from webmagic.untwist import BetterResource, BetterFile
import minerva
from minerva.newlink import (
	BasicMinervaProtocol, BasicMinervaFactory, getRandomSubdomain)
from brequire import requireFile, requireFiles


class ForumIndex(BetterResource):
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



requireFile(FilePath(__file__).parent().child('forum.html').path)
requireFiles([f.path for f in FilePath(__file__).parent().child('static').children()])
requireFile(FilePath(__file__).parent().child('compiled').child('forum.js').path)

class ForumResource(BetterResource):
	templateFilename = 'forum.html'

	def __init__(self, csrfStopper, cookieInstaller, domain):
		BetterResource.__init__(self)

		self.putChild('', ForumIndex(
			csrfStopper, cookieInstaller, domain, self.templateFilename))
		self.putChild('static', BetterFile(FilePath(__file__).parent().child('static').path))



requireFile(FilePath(__file__).parent().child('forum_dev.html').path)

class ForumDevResource(ForumResource):
	templateFilename = 'forum_dev.html'



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
