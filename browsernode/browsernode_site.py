import os

from twisted.python.filepath import FilePath
from twisted.internet.task import LoopingCall

from cwtools import testing
from mypy import randgen

from minerva.newlink import (
	SuperFactory, StreamTracker, HttpFace, SocketFace)

from minerva.website import (
	CsrfTransportFirewall, NoopTransportFirewall, CsrfStopper, XDRFrame,
	XDRFrameDev)

from browsernode.forum import ForumResource, ForumDevResource, ForumFactory
from browsernode.whiteboard import WhiteboardResource, WhiteboardDevResource, WhiteboardFactory
from browsernode.ljstream import LjStreamResource, LjStreamDevResource, LjStreamFactory

from webmagic.untwist import (
	CookieInstaller, BetterResource, BetterFile, ConnectionTrackingSite)

from brequire import requireFile


requireFile(FilePath(__file__).parent().child('index.html').path)

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
		self.putChild('compiled', BetterFile(browsernodePath.child('compiled').path))
		self.putChild('JSPATH', BetterFile(JSPATH.path))
		self.putChild('compiled_client', BetterFile(minervaPath.child('compiled_client').path))
		self.putChild('@tests', testing.TestPage(['browsernode'], JSPATH))

		# testres_Coreweb always needed for running tests.
		testres_Coreweb = FilePath(cwtools.__path__[0]).child('testres').path
		self.putChild('@testres_Coreweb', BetterFile(testres_Coreweb))

		self.putChild('httpface', httpFace)
		self.putChild('forum', ForumResource(csrfStopper, cookieInstaller, domain))
		self.putChild('forum_dev', ForumDevResource(csrfStopper, cookieInstaller, domain))
		self.putChild('whiteboard', WhiteboardResource(csrfStopper, cookieInstaller, domain))
		self.putChild('whiteboard_dev', WhiteboardDevResource(csrfStopper, cookieInstaller, domain))
		self.putChild('ljstream', LjStreamResource(csrfStopper, cookieInstaller, domain))
		self.putChild('ljstream_dev', LjStreamDevResource(csrfStopper, cookieInstaller, domain))
		self.putChild('xdrframe', XDRFrame(domain))
		self.putChild('xdrframe_dev', XDRFrameDev(domain))



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
	tracker = StreamTracker(reactor, clock, SuperFactory(
		clock, subfactories={
			'forum': ForumFactory(clock),
			'whiteboard': WhiteboardFactory(clock),
			'ljstream': LjStreamFactory(reactor, clock),
		}))

	httpFace = HttpFace(clock, tracker, firewall)
	socketFace = SocketFace(clock, tracker, firewall, policyString=policyString)

	root = BrowserNodeRoot(reactor, httpFace, csrfStopper, cookieInstaller, domain)

	def _disconnectInactive():
		"""
		Disconnect idle HTTP channels (applies to Twisted z9trunk), and
		disconnect inactive Streams.
		"""
		# Twisted z9trunk does not disconnect idle HTTP connections,
		# but provides a function to disconnect all idle-for-too-long
		# connections.
		httpDisconnectIdle = getattr(httpSite, 'disconnectIdle', None)
		if httpDisconnectIdle:
			httpDisconnectIdle()

		tracker.disconnectInactive()

	try:
		# Twisted z9trunk can take a clock argument
		httpSite = ConnectionTrackingSite(root, clock=clock)
	except TypeError:
		# Twisted trunk cannot take a clock argument
		httpSite = ConnectionTrackingSite(root)

	idleKiller = LoopingCall(_disconnectInactive)
	idleKiller.clock = clock
	idleKiller.start(60, now=True) # `now` to exercise the code early.

	return (socketFace, httpSite)
