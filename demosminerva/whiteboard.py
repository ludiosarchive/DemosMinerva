import simplejson

from twisted.python import log
from twisted.python.filepath import FilePath

from webmagic.untwist import BetterResource

from minerva.mutils import (
	MinervaBootstrap, strictSecureDecodeJson, StrictDecodeError)

from protojson.pbliteserializer import PbLiteSerializer
from protojson.error import PbDecodeError

from demosminerva import whiteboard_messages_pb2 as wm

try:
	from brequire import requireFile, requireFiles
except ImportError:
	requireFile = requireFiles = lambda _: None



requireFile(FilePath(__file__).sibling('whiteboard.html').path)
requireFiles([f.path for f in FilePath(__file__).sibling('static').children() if not f.isdir()])

class WhiteboardResource(BetterResource):
	templateFile = FilePath(__file__).sibling('whiteboard.html')
	dictionary = {'dev_mode': False}

	def __init__(self, fileCache, mainSocketPort, domain,
	responseCacheOptions):
		BetterResource.__init__(self)

		self.putChild('', MinervaBootstrap(fileCache, self.templateFile,
			dict(domain=domain, mainSocketPort=mainSocketPort, **self.dictionary)))



class WhiteboardDevResource(WhiteboardResource):
	dictionary = {'dev_mode': True}



class WhiteboardProtocol(object):

	def __init__(self, clock):
		self._clock = clock


	def _sendAllCircles(self):
		"""
		Send all existing circles to the client.
		"""
		strings = []
		for x, y, color in self.factory.circles:
			strings.append(simplejson.dumps(
				[1, self.factory.serializer.serialize(wm.Point(
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
			self.factory.serializer.deserialize(point, body)
		except PbDecodeError:
			1/0 # TODO
		self.factory.addCircle(point.x, point.y, point.color, dontTell=(self,))


	def stringReceived(self, s):
		try:
			payload = strictSecureDecodeJson(s)
			if len(payload) == 2:
				msgType = payload[0]
				body = payload[1]
				if msgType == 1: # new circle
					self._handleNewCircle(body)
				elif msgType == 2: # reset
					self.factory.clearBoard(dontTell=(self,))
		except:
			log.err()



class WhiteboardFactory(object):
	maxInactivity = 20 * 60

	def __init__(self, clock):
		self._clock = clock
		self.counter = 0
		self.protos = set()
		self.circles = set()
		self.serializer = PbLiteSerializer()
		self._idleDc = None
		self.resetIdle()


	def addCircle(self, x, y, color, dontTell=()):
		self.resetIdle()
		self.circles.add((x, y, color))
		for proto in self.protos:
			if proto in dontTell:
				# Client who told us about this circle already drew it,
				# no need to echo it back to them.
				continue
			proto.stream.sendStrings([simplejson.dumps(
				[1, self.serializer.serialize(wm.Point(
					x=x, y=y, color=color))])])


	def clearBoard(self, dontTell=()):
		self.resetIdle()
		self.circles.clear()
		for proto in self.protos:
			if proto in dontTell:
				continue
			if proto.stream.queue.getMaxConsumption() > 2 * 1024 * 1024:
				proto.stream.reset("> 2MB outgoing")
				continue
			proto.stream.sendStrings([simplejson.dumps(
				[2, self.serializer.serialize(wm.ClearBoard())])])


	def _cancelIdleDc(self):
		if self._idleDc is not None:
			if self._idleDc.active():
				self._idleDc.cancel()
			self._idleDc = None


	def resetIdle(self):
		self._cancelIdleDc()
		self._idleDc = self._clock.callLater(self.maxInactivity, self.clearBoard)


	def buildProtocol(self):
		stream = WhiteboardProtocol(self._clock)
		stream.factory = self
		return stream
