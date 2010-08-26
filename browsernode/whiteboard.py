import jinja2
import simplejson

from twisted.python import log
from twisted.python.filepath import FilePath

from cwtools.htmltools import getTestPageCSS
from webmagic.untwist import BetterResource, BetterFile

import minerva
from minerva.newlink import (
	BasicMinervaProtocol, BasicMinervaFactory, getRandomSubdomain)
from minerva.decoders import strictDecodeOne

from protojson.pbliteserializer import PbLiteSerializer
from protojson.error import PbDecodeError

from brequire import requireFile, requireFiles

from browsernode import whiteboard_messages_pb2 as wm


class WhiteboardIndex(BetterResource):
	isLeaf = True

	def __init__(self, csrfStopper, cookieInstaller, domain, filename):
		BetterResource.__init__(self)
		self._csrfStopper = csrfStopper
		self._cookieInstaller = cookieInstaller
		self._domain = domain
		self._filename = filename

		self._jinja2Env = jinja2.Environment()
		self._basePath = FilePath(__file__).parent()


	def render_GET(self, request):
		cookie = self._cookieInstaller.getSet(request)
		token = self._csrfStopper.makeToken(cookie)

		sub1 = getRandomSubdomain('ml', 20)
		sub2 = getRandomSubdomain('ml', 20)

		# Allow the template to include the contents in the page, so
		# that the client doesn't have to make another HTTP request.
		bootstrap_XDRSetup_contents = FilePath(minerva.__file__).parent().\
			child('compiled_client').child('bootstrap_XDRSetup.js').getContent()

		def getWhiteboardCSS():
			return FilePath(__file__).parent().child('whiteboard.css').getContent()

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



requireFile(FilePath(__file__).parent().child('whiteboard.html').path)
requireFiles([f.path for f in FilePath(__file__).parent().child('static').children()])
requireFile(FilePath(__file__).parent().child('compiled').child('whiteboard.js').path)

class WhiteboardResource(BetterResource):
	templateFilename = 'whiteboard.html'

	def __init__(self, csrfStopper, cookieInstaller, domain):
		BetterResource.__init__(self)

		self.putChild('', WhiteboardIndex(
			csrfStopper, cookieInstaller, domain, self.templateFilename))
		self.putChild('static', BetterFile(FilePath(__file__).parent().child('static').path))



requireFile(FilePath(__file__).parent().child('whiteboard_dev.html').path)

class WhiteboardDevResource(WhiteboardResource):
	templateFilename = 'whiteboard_dev.html'



class WhiteboardProtocol(BasicMinervaProtocol):

	def __init__(self, clock):
		self._clock = clock
		self._serializer = PbLiteSerializer()


	def _sendAllCircles(self):
		"""
		Send all existing circles to the client.
		"""
		strings = []
		for x, y, color in self.factory.circles:
			strings.append(simplejson.dumps(
				[1, self._serializer.serialize(wm.Point(
					x=x, y=y, color=color))]))
		self.stream.sendStrings(strings)


	def streamStarted(self, stream):
		self.factory.counter += 1
		self._id = self.factory.counter
		self.stream = stream
		self.factory.protos.add(self)
		self._sendAllCircles()


	def streamReset(self, reasonString, applicationLevel):
		self.factory.protos.remove(self)
		del self.stream


	def _handleNewCircle(self, body):
		try:
			point = wm.Point()
			self._serializer.deserialize(point, body)
		except PbDecodeError:
			1/0 # TODO
		self.factory.circles.add((point.x, point.y, point.color))
		for proto in self.factory.protos:
			if proto == self:
				# Client who told us about this circle already drew it,
				# no need to echo it back to them.
				continue
			proto.stream.sendStrings([simplejson.dumps(
				[1, self._serializer.serialize(wm.Point(
					x=point.x, y=point.y, color=point.color))])])


	def _clearBoard(self):
		self.factory.circles.clear()
		for proto in self.factory.protos:
			if proto == self:
				# Client who told us to reset has already cleared its board.
				continue
			proto.stream.sendStrings([simplejson.dumps(
				[2, self._serializer.serialize(wm.ClearBoard())])])


	def stringsReceived(self, strings):
		"""
		Note: C{strings} may be a mix of C{str}s and C{StringFragment}s.
		"""
		try:
			for s in strings:
				s = str(s) # maybe StringFragment -> str
				payload = strictDecodeOne(s)
				if len(payload) == 2:
					msgType = payload[0]
					body = payload[1]
					if msgType == 1: # new circle
						self._handleNewCircle(body)
					elif msgType == 2: # reset
						self._clearBoard()
		except:
			log.err()



class WhiteboardFactory(BasicMinervaFactory):
	protocol = WhiteboardProtocol

	def __init__(self, clock):
		self._clock = clock
		self.counter = 0
		self.protos = set()
		self.circles = set()


	def buildProtocol(self):
		stream = self.protocol(self._clock)
		stream.factory = self
		return stream
