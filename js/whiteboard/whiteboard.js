/**
 * @fileoverview Whiteboard demo
 */

goog.provide('whiteboard');

goog.require('cw.autoTitle');
goog.require('goog.asserts');
goog.require('goog.debug.DivConsole');
goog.require('goog.debug.Logger');
goog.require('goog.debug.LogManager');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.events.BrowserEvent');
goog.require('goog.graphics');
goog.require('goog.json');
goog.require('goog.proto2.PbLiteSerializer');
goog.require('goog.Uri');
goog.require('cw.eventual');
goog.require('cw.string');
goog.require('cw.net.Stream');
goog.require('cw.net.IMinervaProtocol');
goog.require('cw.net.HttpStreamingMode');
goog.require('cw.net.demo.getEndpoint');
goog.require('cw.net.demo.makeCredentialsData');
goog.require('cw.repr');
goog.require('cw.string');
goog.require('whiteboard.Point');


whiteboard._queryData = new goog.Uri(document.location).getQueryData();
whiteboard.useLogging = Boolean(Number(whiteboard._queryData.get('logging', '0')));

if(whiteboard.useLogging) {
	goog.debug.LogManager.getRoot().setLevel(goog.debug.Logger.Level.ALL);
	var logDiv = document.getElementById('log');
	var divConsole = new goog.debug.DivConsole(logDiv);
	divConsole.setCapturing(true);
} else {
	goog.debug.LogManager.getRoot().setLevel(goog.debug.Logger.Level.OFF);
}

whiteboard.logger = goog.debug.Logger.getLogger('whiteboard.logger');
whiteboard.logger.info('Logger works.');


window.onerror = function(msg, url, lineNumber) {
	whiteboard.logger.severe('window.onerror: message: ' + cw.repr.repr(msg) +
		'\nURL: ' + url + '\nLine Number: ' + lineNumber)
};


function byId(o) {
	return document.getElementById(o);
}

/**
 * @implements {cw.net.IMinervaProtocol}
 * @constructor
 */
whiteboard.WhiteboardProtocol = function() {
	this.pbLiteSerializer_ = new goog.proto2.PbLiteSerializer();
};

whiteboard.WhiteboardProtocol.prototype.streamStarted = function(stream) {
	this.stream_ = stream;
	whiteboard.logger.info('streamStarted');
	this.stream_.sendStrings(['subprotocol:whiteboard']);
};

whiteboard.WhiteboardProtocol.prototype.streamReset = function(reasonString, applicationLevel) {
	whiteboard.logger.info(
		'streamReset: reasonString=' + cw.repr.repr(reasonString) +
		', applicationLevel=' + applicationLevel);
	// TODO: use goog.dom instead
	document.getElementById('demo-header').innerHTML +=
		' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
};

/**
 * @param {string} s
 */
whiteboard.WhiteboardProtocol.prototype.handleString_ = function(s) {
	function fail() {
		whiteboard.logger.severe('Could not handle string: ' + cw.repr.repr(s));
	}

	var payload = goog.json.parse(s);
	var msgType = payload[0];
	var body = payload[1];

	if(msgType == 1) { // Point
		// Deserialize.
		var point = this.pbLiteSerializer_.deserialize(
			whiteboard.Point.getDescriptor(), body);
		whiteboard.drawCircleAt(point.getX(), point.getY());
	}
};

/**
 * @param {!Array.<string>} strings
 */
whiteboard.WhiteboardProtocol.prototype.stringsReceived = function(strings) {
	for(var i=0; i < strings.length; i++) {
		var s = strings[i];
		this.handleString_(s);
	}
};

/**
 * @param {string} reason
 */
whiteboard.WhiteboardProtocol.prototype.reset = function(reason) {
	whiteboard.logger.info('resetting with reason: ' + reason);
	this.stream_.reset(reason);
};

/**
 * @param {number} x
 * @param {number} y
 */
whiteboard.WhiteboardProtocol.prototype.sendCircle = function(x, y) {
	whiteboard.logger.info('telling server about circle at: ' + x + ', ' + y);
	this.stream_.sendStrings([goog.json.serialize([1, [x, y]])]);
};


/**
 * @type {?whiteboard.WhiteboardProtocol}
 */
whiteboard.lastProto = null;


whiteboard.callQueue = new cw.eventual.CallQueue(goog.global['window']);


whiteboard.idleFired = function() {
	whiteboard.resetStream("idle timeout fired");
	whiteboard.lastProto = null;
};


whiteboard.idleTimeout = null;


whiteboard.activityDetected = function(ev) {
	if(whiteboard.idleTimeout != null) {
		whiteboard.callQueue.clock.clearTimeout(whiteboard.idleTimeout);
	}

	// Only need a timeout if we have an active Stream
	if(whiteboard.lastProto) {
		whiteboard.idleTimeout = whiteboard.callQueue.clock.setTimeout(
			whiteboard.idleFired, 3600 * 24 * 3 * 1000);
	}
};


/**
 * @type {!Array.<!goog.events.EventType>}
 */
whiteboard.activityEvents = [
	goog.events.EventType.CLICK,
	goog.events.EventType.FOCUS,
	goog.events.EventType.KEYDOWN,
	goog.events.EventType.KEYPRESS];
whiteboard.clickListen = goog.events.listen(
	window, whiteboard.activityEvents, whiteboard.activityDetected, true);


whiteboard.startStream = function() {
	var streamPolicy = new cw.net.demo.DemoStreamPolicy();
	whiteboard.lastProto = new whiteboard.WhiteboardProtocol();
	whiteboard.activityDetected();
	var endpointD = cw.net.demo.getEndpoint(whiteboard.callQueue);
	endpointD.addCallback(function(endpoint) {
		goog.asserts.assert(whiteboard.lastProto, 'lastProto falsy?');
		var stream = new cw.net.Stream(
			whiteboard.callQueue, whiteboard.lastProto, endpoint, streamPolicy);
		stream.start();
	});
};


/**
 * @param {string} reason
 */
whiteboard.resetStream = function(reason) {
	whiteboard.lastProto.reset(reason);
};


whiteboard.reconnectStream = function() {
	if(whiteboard.lastProto) {
		whiteboard.lastProto.reset('because user clicked reconnect button');
	}
	whiteboard.startStream();
};


whiteboard.drawRandomStuff = function() {
	var fill = new goog.graphics.SolidFill('yellow');
	var stroke = new goog.graphics.Stroke(2, 'green');
	var rectElement = whiteboard.lastDrawArea.drawRect(30, 10, 100, 80, stroke, fill);
};


whiteboard.drawCircleAt = function(x, y) {
	var fill = new goog.graphics.SolidFill('yellow');
	var stroke = new goog.graphics.Stroke(2, 'green');
	var circleElement = whiteboard.lastDrawArea.drawCircle(x, y, 5, stroke, fill);
};


whiteboard.handleClick = function(ev) {
	var patchedEv = new goog.events.BrowserEvent(ev);
	var x = patchedEv.offsetX;
	var y = patchedEv.offsetY;
	whiteboard.drawCircleAt(x, y);
	whiteboard.lastProto.sendCircle(x, y);
};


whiteboard.setupDrawArea = function() {
	var graphics = goog.graphics.createGraphics(800, 600);
	whiteboard._drawAreaDiv = goog.dom.getElement('drawArea');
	graphics.render(whiteboard._drawAreaDiv);
	goog.events.listen(whiteboard._drawAreaDiv, goog.events.EventType.CLICK, whiteboard.handleClick, false);
	whiteboard.lastDrawArea = graphics;
};


whiteboard.init = function() {
	whiteboard.setupDrawArea();
	whiteboard.drawRandomStuff();
	whiteboard.startStream();
};


goog.exportSymbol('__whiteboard_init', whiteboard.init);
