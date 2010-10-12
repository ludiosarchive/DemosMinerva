goog.provide('ljstream');

goog.require('goog.debug');
goog.require('goog.debug.FancyWindow');
goog.require('goog.debug.Logger');
goog.require('goog.debug.LogManager');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.json');
goog.require('goog.proto2.PbLiteSerializer');
goog.require('goog.ui.CustomButton');
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

goog.require('ljstream.NewPost');


ljstream.logger = goog.debug.Logger.getLogger('ljstream.logger');


window.onerror = function(msg, url, lineNumber) {
	ljstream.logger.severe('window.onerror: message: ' + cw.repr.repr(msg) +
		'\nURL: ' + url + '\nLine Number: ' + lineNumber)
};

/**
 * @implements {cw.net.IMinervaProtocol}
 * @constructor
 */
ljstream.ChatProtocol = function() {
	this.pbLiteSerializer_ = new goog.proto2.PbLiteSerializer();
};

ljstream.ChatProtocol.prototype.streamStarted = function(stream) {
	this.stream_ = stream;
	ljstream.logger.info('streamStarted');
	this.stream_.sendStrings(['subprotocol:ljstream']);
};

ljstream.ChatProtocol.prototype.streamReset = function(reasonString, applicationLevel) {
	ljstream.logger.info(
		'streamReset: reasonString=' + cw.repr.repr(reasonString) +
		', applicationLevel=' + applicationLevel);
};

/**
 * @param {string} s
 */
ljstream.ChatProtocol.prototype.handleString_ = function(s) {
	function fail() {
		ljstream.logger.severe('Could not handle string: ' + cw.repr.repr(s));
	}

	// TODO: handle error?
	var payload = goog.json.parse(s);
	var msgType = payload[0];
	var body = payload[1];

	if(msgType == 1) { // NewPost
		// TODO: handle error?
		var post = this.pbLiteSerializer_.deserialize(
			ljstream.NewPost.getDescriptor(), body);
		ljstream.appendPost(post.getTitle(), post.getUrl(), post.getBody());
	}
};

/**
 * @param {!Array.<string>} strings
 */
ljstream.ChatProtocol.prototype.stringsReceived = function(strings) {
	for(var i=0; i < strings.length; i++) {
		var s = strings[i];
		this.handleString_(s);
	}
};

/**
 * @param {string} reason
 */
ljstream.ChatProtocol.prototype.reset = function(reason) {
	ljstream.logger.info('resetting with reason: ' + reason);
	this.stream_.reset(reason);
};

/**
 * @type {?ljstream.ChatProtocol}
 */
ljstream.lastProto = null;


ljstream.callQueue = new cw.eventual.CallQueue(goog.global['window']);


ljstream.idleFired = function() {
	ljstream.resetStream("idle timeout fired");
	ljstream.lastProto = null;
};


ljstream.idleTimeout = null;

/**
 * @param {*} ev
 */
ljstream.activityDetected = function(ev) {
	if(ljstream.idleTimeout != null) {
		ljstream.callQueue.clock.clearTimeout(ljstream.idleTimeout);
	}

	// Only need a timeout if we have an active Stream
	if(ljstream.lastProto) {
		ljstream.idleTimeout = ljstream.callQueue.clock.setTimeout(
			ljstream.idleFired, 600 * 1000);
	}
};


/**
 * @type {!Array.<!goog.events.EventType>}
 */
ljstream.activityEvents = [
	goog.events.EventType.CLICK,
	goog.events.EventType.FOCUS,
	goog.events.EventType.KEYDOWN,
	goog.events.EventType.KEYPRESS];
ljstream.clickListen = goog.events.listen(
	window, ljstream.activityEvents, ljstream.activityDetected, true);


/**
 * @param {string} title
 * @param {string} url
 * @param {string} body
 */
ljstream.appendPost = function(title, url, body) {
	var d = goog.dom.createDom;
	// TODO: we have XSS here, probably
	var postDiv = d('div', {'class': 'ljpost'}, d('a', {'href': url}, title), body);
	var container = goog.dom.getElement('ljstream-container');
	container.appendChild(postDiv);
};


ljstream.startStream = function() {
	var streamPolicy = new cw.net.demo.DemoStreamPolicy();
	ljstream.lastProto = new ljstream.ChatProtocol();
	ljstream.activityDetected(null);
	var endpointD = cw.net.demo.getEndpoint(ljstream.callQueue, true, false, '/httpface/');
	endpointD.addCallback(function(endpoint) {
		if(!ljstream.lastProto) {
			throw Error("lastProto falsy?");
		}
		var stream = new cw.net.Stream(
			ljstream.callQueue, ljstream.lastProto, endpoint, streamPolicy);
		stream.start();
	});
};


/**
 * @param {string} reason
 */
ljstream.resetStream = function(reason) {
	ljstream.lastProto.reset(reason);
};


ljstream.reconnectStream = function() {
	if(ljstream.lastProto) {
		ljstream.lastProto.reset('because user clicked reconnect button');
	}
	ljstream.startStream();
};



ljstream.setupDebug = function() {
	var debugWindow = new goog.debug.FancyWindow('main');
	debugWindow.setEnabled(true);
	debugWindow.init();

	ljstream.logger.info('Logger works.');
};




/**
 * @constructor
 */
ljstream.LjView = function() {

};



ljstream.LjView.prototype.setup = function() {

};



ljstream.init = function() {
	goog.debug.LogManager.getRoot().setLevel(goog.debug.Logger.Level.ALL);
	ljstream.setupDebug();

	var myForum = new ljstream.LjView();
	myForum.setup();

	ljstream.startStream();
};


goog.exportSymbol('__ljstream_init', ljstream.init);
