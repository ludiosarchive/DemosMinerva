goog.provide('forum');

goog.require('cw.autoTitle');
goog.require('goog.debug.DivConsole');
goog.require('goog.debug.Logger');
goog.require('goog.debug.LogManager');
goog.require('goog.events');
goog.require('goog.events.EventType');
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


forum.logger = goog.debug.Logger.getLogger('forum.logger');


window.onerror = function(msg, url, lineNumber) {
	forum.logger.severe('window.onerror: message: ' + cw.repr.repr(msg) +
		'\nURL: ' + url + '\nLine Number: ' + lineNumber)
};

/**
 * @implements {cw.net.IMinervaProtocol}
 * @constructor
 */
forum.ChatProtocol = function() {

};

forum.ChatProtocol.prototype.streamStarted = function(stream) {
	this.stream_ = stream;
	forum.logger.info('streamStarted');
	this.stream_.sendStrings(['subprotocol:forum']);
};

forum.ChatProtocol.prototype.streamReset = function(reasonString, applicationLevel) {
	forum.logger.info(
		'streamReset: reasonString=' + cw.repr.repr(reasonString) +
		', applicationLevel=' + applicationLevel);
};

/**
 * @param {string} s
 */
forum.ChatProtocol.prototype.handleString_ = function(s) {
	function fail() {
		forum.logger.severe('Could not handle string: ' + cw.repr.repr(s));
	}

	var splitted = cw.string.split(s, '|', 2);
	if(splitted.length != 3) {
		return fail();
	}
	var type = splitted[0];
	var uaId = splitted[1];
	var text = splitted[2];
	if(type != "TEXT") {
		return fail();
	}

	// TODO: add timestamp
	forum.logger.info(cw.string.format('<{0}> {1}', uaId, text));
};

/**
 * @param {!Array.<string>} strings
 */
forum.ChatProtocol.prototype.stringsReceived = function(strings) {
	for(var i=0; i < strings.length; i++) {
		var s = strings[i];
		this.handleString_(s);
	}
};

/**
 * @param {string} reason
 */
forum.ChatProtocol.prototype.reset = function(reason) {
	forum.logger.info('resetting with reason: ' + reason);
	this.stream_.reset(reason);
};

forum.ChatProtocol.prototype.sendText = function(text) {
	forum.logger.info('sendText: ' + text);
	this.stream_.sendStrings(["broadcast:" + text]);
};


/**
 * @type {?forum.ChatProtocol}
 */
forum.lastProto = null;


forum.callQueue = new cw.eventual.CallQueue(goog.global['window']);


forum.idleFired = function() {
	forum.resetStream("idle timeout fired");
	forum.lastProto = null;
};


forum.idleTimeout = null;

/**
 * @param {*} ev
 */
forum.activityDetected = function(ev) {
	if(forum.idleTimeout != null) {
		forum.callQueue.clock.clearTimeout(forum.idleTimeout);
	}

	// Only need a timeout if we have an active Stream
	if(forum.lastProto) {
		forum.idleTimeout = forum.callQueue.clock.setTimeout(
			forum.idleFired, 600 * 1000);
	}
};


/**
 * @type {!Array.<!goog.events.EventType>}
 */
forum.activityEvents = [
	goog.events.EventType.CLICK,
	goog.events.EventType.FOCUS,
	goog.events.EventType.KEYDOWN,
	goog.events.EventType.KEYPRESS];
forum.clickListen = goog.events.listen(
	window, forum.activityEvents, forum.activityDetected, true);


forum.startStream = function() {
	var streamPolicy = new cw.net.demo.DemoStreamPolicy();
	forum.lastProto = new forum.ChatProtocol();
	forum.activityDetected(null);
	var endpointD = cw.net.demo.getEndpoint(forum.callQueue);
	endpointD.addCallback(function(endpoint) {
		if(!forum.lastProto) {
			throw Error("lastProto falsy?");
		}
		var stream = new cw.net.Stream(
			forum.callQueue, forum.lastProto, endpoint, streamPolicy);
		stream.start();
	});
};


/**
 * @param {string} reason
 */
forum.resetStream = function(reason) {
	forum.lastProto.reset(reason);
};


forum.reconnectStream = function() {
	if(forum.lastProto) {
		forum.lastProto.reset('because user clicked reconnect button');
	}
	forum.startStream();
};

/**
 * @param {string} text
 */
forum.sendText = function(text) {
	forum.lastProto.sendText(text);
};


forum.init = function() {
	goog.debug.LogManager.getRoot().setLevel(goog.debug.Logger.Level.ALL);

	var logDiv = document.getElementById('log');
	var divConsole = new goog.debug.DivConsole(logDiv);
	divConsole.setCapturing(true);

	forum.logger.info('Logger works.');

	forum.startStream();
};


goog.exportSymbol('__forum_init', forum.init);
goog.exportSymbol('__forum_sendText', forum.sendText);
