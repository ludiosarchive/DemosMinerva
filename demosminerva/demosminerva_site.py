import os

from twisted.python.filepath import FilePath

from minerva.newlink import (
	SubprotocolFactory, StreamTracker, HttpFace, SocketFace)

from demosminerva.whiteboard import WhiteboardResource, WhiteboardDevResource, WhiteboardFactory
from demosminerva.ljstream import LjStreamResource, LjStreamDevResource, LjStreamFactory

from webmagic.untwist import (
	ResponseCacheOptions, CookieInstaller, BetterResource, BetterFile,
	ConnectionTrackingSite)

import googstyle

try:
	from brequire import requireFile, requireFiles
except ImportError:
	requireFile = requireFiles = lambda _: None



requireFiles([f.path for f in FilePath(googstyle.__file__).sibling('goog-images').children()])
requireFile(FilePath(__file__).sibling('index.html').path)
requireFiles([f.path for f in FilePath(__file__).sibling('static').child('thumbnails').children()])

class DemosMinervaRoot(BetterResource):

	def __init__(self, httpFace, fileCache, mainSocketPort, domain, closureLibrary):
		import coreweb
		import minerva
		import demosminerva

		import js_coreweb
		import js_minerva
		import js_demosminerva

		BetterResource.__init__(self)

		# Cache for just two days so that corrupt cached copies don't break
		# users for a long time.
		responseCacheOptions = ResponseCacheOptions(
			cacheTime=60*60*24*2,
			httpCachePublic=False,
			httpsCachePublic=True)

		minervaPath = FilePath(minerva.__path__[0])
		demosminervaPath = FilePath(demosminerva.__path__[0])
		self.putChild('', BetterFile(demosminervaPath.child('index.html').path))
		self.putChild('closure-library', BetterFile(closureLibrary.path))
		self.putChild('js_coreweb', BetterFile(FilePath(js_coreweb.__file__).parent().path))
		self.putChild('js_minerva', BetterFile(FilePath(js_minerva.__file__).parent().path))
		self.putChild('js_demosminerva', BetterFile(FilePath(js_demosminerva.__file__).parent().path))
		self.putChild('compiled_client', BetterFile(
			minervaPath.child('compiled_client').path,
			responseCacheOptions=responseCacheOptions))

		# testres_Coreweb always needed for running tests.
		testres_Coreweb = FilePath(coreweb.__path__[0]).child('testres').path
		self.putChild('@testres_Coreweb', BetterFile(testres_Coreweb))

		self.putChild('demosminerva_static', BetterFile(
			FilePath(__file__).sibling('static').path,
			fileCache=fileCache,
			rewriteCss=True,
			responseCacheOptions=responseCacheOptions))
		self.putChild('goog-images', BetterFile(
			FilePath(googstyle.__file__).sibling('goog-images').path,
			responseCacheOptions=responseCacheOptions))
		self.putChild('httpface', httpFace)
		commonArgs = (fileCache, mainSocketPort, domain, responseCacheOptions)
		self.putChild('whiteboard', WhiteboardResource(*commonArgs))
		self.putChild('whiteboard_dev', WhiteboardDevResource(*commonArgs))
		self.putChild('livejournal-stream', LjStreamResource(*commonArgs))
		self.putChild('livejournal-stream_dev', LjStreamDevResource(*commonArgs))



def makeMinervaAndHttp(reactor, fileCache, socketPorts, domain, closureLibrary):
	clock = reactor

	toPorts = ",".join(str(p) for p in socketPorts)

	# TODO: what if there's no domain?
	policyString = '''\
<cross-domain-policy>
<allow-access-from domain="%s" to-ports="%s"/>
<allow-access-from domain="*.%s" to-ports="%s"/>
</cross-domain-policy>'''.strip() % (domain, toPorts, domain, toPorts)

	tracker = StreamTracker(clock, SubprotocolFactory(
		clock, subfactories={
			'whiteboard': WhiteboardFactory(clock),
			'ljstream': LjStreamFactory(reactor, clock),
		}))

	allowedDomains = []
	if domain:
		allowedDomains.append(domain)

	httpFace = HttpFace(clock, tracker, fileCache, allowedDomains)
	socketFace = SocketFace(clock, tracker, policyString=policyString)

	mainSocketPort = socketPorts[0]
	root = DemosMinervaRoot(httpFace, fileCache, mainSocketPort, domain, closureLibrary)
	httpSite = ConnectionTrackingSite(root, timeout=75)

	return (socketFace, httpSite)
