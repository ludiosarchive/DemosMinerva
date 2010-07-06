import os
import cgi
import simplejson

from twisted.python import log
from twisted.python.filepath import FilePath
from twisted.web import resource, static, http, server
from twisted.internet.task import LoopingCall

from zope.interface import implements

from cwtools import testing, jsimp
from mypy import randgen
from mypy.objops import strToNonNegLimit

from minerva.newlink import (
	BasicMinervaProtocol, BasicMinervaFactory, StreamTracker, HttpFace, SocketFace)

from minerva.website import (
	CsrfTransportFirewall, NoopTransportFirewall, CsrfStopper)

from browsernode.rtsgame import RTSGame

from webmagic.untwist import (
	CookieInstaller, BetterResource, BetterFile, HelpfulNoResource,
	ConnectionTrackingSite, DisplayConnections)



class DemoProtocol(BasicMinervaProtocol):

	counter = 0

	def __init__(self, clock):
		self._clock = clock
		self._reset = False
		self._chatting = False
		self._id = DemoProtocol.counter
		self.chatting = False
		DemoProtocol.counter += 1


	def stringsReceived(self, strings):
		# Remember, we cannot raise an exception here.
		##print "stringsReceived", strings

		send = []
		for s in strings:
			s = str(s) # StringFragment -> str
			if s.startswith('echo:'):
				send.append(s.replace('echo:', '', 1))

			elif s.startswith('echo_twice:'):
				payload = s.split(':', 1)[1]
				send.append(payload)
				self._clock.callLater(0, lambda: self.stream.sendStrings([payload]))

			elif s.startswith('reset_me:'):
				reasonString = s.split(':', 1)[1]
				self.stream.reset(reasonString)

			elif s.startswith('string_then_reset_me:'):
				reasonString = s.split(':', 1)[1]
				# Send a string which will effectively close a long-polling
				# primary transport. In this case, the client will usually
				# not see a ResetFrame.
				self.stream.sendStrings(["about to reset with reasonString " + reasonString])
				self.stream.reset(reasonString)

			elif s == 'begin_chat':
				self.chatting = True
				self.factory.chatters.add(self)

			elif s.startswith('broadcast:'):
				text = s.split(':', 1)[1]
				for c in self.factory.chatters:
					# We assume text contains only characters in the " " - "~" range.
					c.stream.sendStrings(["TEXT|" + str(self._id) + '|' + text])

			else:
				send.append('unknown_message_type')

			# else ignore other boxes

		if send:
			self.stream.sendStrings(send)


	def streamReset(self, reasonString, applicationLevel):
		self._reset = True
		log.msg("Stream reset: %r, %r" % (reasonString, applicationLevel))
		if self.chatting:
			self.factory.chatters.remove(self)



class DemoFactory(BasicMinervaFactory):
	protocol = DemoProtocol

	def __init__(self, clock):
		self._clock = clock
		self.chatters = set()


	def buildProtocol(self):
		stream = self.protocol(self._clock)
		stream.factory = self
		return stream



class XDRFrame(BetterResource):
	"""
	A page suitable for loading into an iframe.  It sets a document.domain
	so that it can communicate with the parent page (which must also set
	document.domain).  It is capable of making XHR requests.

	Note: in production code, this could be a static page with static JavaScript
	(maybe even the same .js file as the main page.)  Client-side code can
	extract ?id= instead of the server.
	"""
	isLeaf = True

	def __init__(self, domain):
		self.domain = domain


	def render_GET(self, request):
		frameIdStr = request.args['id'][0]
		# 2**53 is the largest integral number that can be represented
		# in JavaScript.
		frameId = strToNonNegLimit(frameIdStr, 2**53)

		# Note: for the __XDRFrame_loaded call to work, document.domain
		# on parent page must be set *before* the browser starts executing
		# code in the iframe.
		return """\
<!doctype html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>XDRFrame</title>
</head>
<body>
<script src="/JSPATH/closure/goog/base.js"></script>
<script src="/JSPATH/nongoog_deps.js"></script>
<script>
goog.require('cw.net.XHRSlave');
</script>
<script>
	document.domain = %s;
	function notifyParent() {
		try {
			parent.__XDRFrame_loaded(%s);
		} catch(err) {
			throw Error("could not call __XDRFrame_loaded on parent, " +
				"perhaps document.domain not set? err: " + err.message);
		}
	}
	window.onload = notifyParent;
</script>
</body>
</html>
""" % (simplejson.dumps(self.domain), frameId)



class BrowserNodeRoot(BetterResource):

	def __init__(self, reactor, httpFace, csrfStopper, cookieInstaller, domain):
		import cwtools
		import minerva
		import browsernode

		BetterResource.__init__(self)

		self._reactor = reactor

		JSPATH = FilePath(os.environ['JSPATH'])

		minervaPath = FilePath(minerva.__path__[0])
		browsernodePath = FilePath(browsernode.__path__[0])
		self.putChild('', BetterFile(browsernodePath.child('index.html').path))
		self.putChild('JSPATH', BetterFile(JSPATH.path))
		self.putChild('compiled_client', BetterFile(minervaPath.child('compiled_client').path))
		self.putChild('@tests', testing.TestPage(['browsernode'], JSPATH))

		# testres_Coreweb always needed for running tests.
		testres_Coreweb = FilePath(cwtools.__path__[0]).child('testres').path
		self.putChild('@testres_Coreweb', BetterFile(testres_Coreweb))

		self.putChild('httpface', httpFace)
		self.putChild('rtsgame', RTSGame(csrfStopper, cookieInstaller, domain))
		self.putChild('xdrframe', XDRFrame(domain))



def makeMinervaAndHttp(reactor, csrfSecret, domain):
	clock = reactor

	cookieInstaller = CookieInstaller(randgen.secureRandom)

	# In the real world, you might want this to be more restrictive.
	# Minerva has its own CSRF protection, so it's not critical.
	policyString = '''\
<cross-domain-policy>
<allow-access-from domain="%s" to-ports="843"/>
<allow-access-from domain="*.%s" to-ports="843"/>
</cross-domain-policy>'''.strip() % (domain, domain)

	csrfStopper = CsrfStopper(csrfSecret)
	firewall = CsrfTransportFirewall(NoopTransportFirewall(), csrfStopper)
	tracker = StreamTracker(reactor, clock, DemoFactory(clock))

	httpFace = HttpFace(clock, tracker, firewall)
	socketFace = SocketFace(clock, tracker, firewall, policyString=policyString)

	root = BrowserNodeRoot(reactor, httpFace, csrfStopper, cookieInstaller, domain)

	try:
		# Twisted z9trunk can take a clock argument
		httpSite = ConnectionTrackingSite(root, clock=clock)
	except TypeError:
		# Twisted trunk cannot take a clock argument
		httpSite = ConnectionTrackingSite(root)
	else:
		# Twisted z9trunk does not disconnect idle HTTP connections,
		# but provides a function to disconnect all idle-for-too-long connections.
		idleKiller = LoopingCall(httpSite.disconnectIdle)
		idleKiller.clock = clock
		idleKiller.start(60, now=True) # `now` to exercise the code early.

	return (socketFace, httpSite)
