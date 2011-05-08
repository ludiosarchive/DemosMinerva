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

from browsernode.whiteboard import WhiteboardResource, WhiteboardDevResource, WhiteboardFactory
from browsernode.ljstream import LjStreamResource, LjStreamDevResource, LjStreamFactory

from webmagic.untwist import (
	ResponseCacheOptions, CookieInstaller, BetterResource, BetterFile,
	ConnectionTrackingSite)

import googstyle

from brequire import requireFile, requireFiles


requireFiles([f.path for f in FilePath(googstyle.__file__).sibling('goog-images').children()])
requireFile(FilePath(__file__).sibling('index.html').path)

class BrowserNodeRoot(BetterResource):

	def __init__(self, reactor, httpFace, fileCache, csrfStopper, cookieInstaller, domain, closureLibrary):
		import cwtools
		import minerva
		import browsernode

		import js_coreweb
		import js_minerva
		import js_browsernode

		BetterResource.__init__(self)

		self._reactor = reactor

		# Cache for just two days so that corrupt cached copies don't break
		# users for a long time.
		responseCacheOptions = ResponseCacheOptions(
			cacheTime=60*60*24*2,
			httpCachePublic=False,
			httpsCachePublic=True)

		minervaPath = FilePath(minerva.__path__[0])
		browsernodePath = FilePath(browsernode.__path__[0])
		self.putChild('', BetterFile(browsernodePath.child('index.html').path))
		self.putChild('closure-library', BetterFile(closureLibrary.path))
		self.putChild('js_coreweb', BetterFile(FilePath(js_coreweb.__file__).parent().path))
		self.putChild('js_minerva', BetterFile(FilePath(js_coreweb.__file__).parent().path))
		self.putChild('js_browsernode', BetterFile(FilePath(js_coreweb.__file__).parent().path))
		self.putChild('compiled_client', BetterFile(
			minervaPath.child('compiled_client').path,
			responseCacheOptions=responseCacheOptions))

		# testres_Coreweb always needed for running tests.
		testres_Coreweb = FilePath(cwtools.__path__[0]).child('testres').path
		self.putChild('@testres_Coreweb', BetterFile(testres_Coreweb))

		self.putChild('browsernode_static', BetterFile(
			FilePath(__file__).sibling('static').path,
			fileCache=fileCache,
			rewriteCss=True,
			responseCacheOptions=responseCacheOptions))
		self.putChild('goog-images', BetterFile(
			FilePath(googstyle.__file__).sibling('goog-images').path,
			responseCacheOptions=responseCacheOptions))
		self.putChild('httpface', httpFace)
		commonArgs = (fileCache, csrfStopper, cookieInstaller, domain,
			responseCacheOptions)
		self.putChild('whiteboard', WhiteboardResource(*commonArgs))
		self.putChild('whiteboard_dev', WhiteboardDevResource(*commonArgs))
		self.putChild('livejournal-stream', LjStreamResource(*commonArgs))
		self.putChild('livejournal-stream_dev', LjStreamDevResource(*commonArgs))
		self.putChild('xdrframe', XDRFrame(fileCache, domain))
		self.putChild('xdrframe_dev', XDRFrameDev(fileCache, domain))



def makeMinervaAndHttp(reactor, fileCache, csrfSecret, domain, closureLibrary):
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
			'whiteboard': WhiteboardFactory(clock),
			'ljstream': LjStreamFactory(reactor, clock),
		}))

	httpFace = HttpFace(clock, tracker, firewall)
	socketFace = SocketFace(clock, tracker, firewall, policyString=policyString)

	root = BrowserNodeRoot(reactor, httpFace, fileCache, csrfStopper,
		cookieInstaller, domain, closureLibrary)
	httpSite = ConnectionTrackingSite(root, timeout=75)

	return (socketFace, httpSite)
