goog.provide('ljstream');

goog.require('goog.debug');
goog.require('goog.debug.FancyWindow');
goog.require('goog.debug.Logger');
goog.require('goog.debug.LogManager');
goog.require('goog.dom');
goog.require('goog.editor.Field');
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
	ljstream.logger.info(cw.string.format('<{0}> {1}', uaId, text));
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

ljstream.ChatProtocol.prototype.sendText = function(text) {
	ljstream.logger.info('sendText: ' + text);
	this.stream_.sendStrings(["broadcast:" + text]);
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

/**
 * @param {string} text
 */
ljstream.sendText = function(text) {
	ljstream.lastProto.sendText(text);
};


ljstream.setupDebug = function() {
	var debugWindow = new goog.debug.FancyWindow('main');
	debugWindow.setEnabled(true);
	debugWindow.init();

	ljstream.logger.info('Logger works.');
};


/**
 * @param {goog.dom.DomHelper=} opt_domHelper DOM helper to use.
 *
 * @constructor
 * @extends {goog.ui.Component}
 */
ljstream.ForumComponent = function(opt_domHelper) {
	goog.ui.Component.call(this, opt_domHelper);

	/**
	 * @type {goog.editor.Field}
	 */
	this.field = null;
};
goog.inherits(ljstream.ForumComponent, goog.ui.Component);

/**
 * @enum {string}
 */
ljstream.ForumComponent.IdFragment = {
	FIELD: 'field'
};

/**
 * Decorates an existing HTML DIV element as a ForumComponent.
 *
 * @param {HTMLElement} element The DIV element to decorate. The element's
 *    text, if any will be used as the component's label.
 */
ljstream.ForumComponent.prototype.decorateInternal = function(element) {
	ljstream.ForumComponent.superClass_.decorateInternal.call(this, element);

	this.createField(element);

	var submitButton = new goog.ui.CustomButton('Submit');
	submitButton.addClassName('ljstream-submit-button');
	this.addChild(submitButton, true);
};

/**
 * Creates an initial DOM representation for the component.
 */
ljstream.ForumComponent.prototype.createDom = function() {
	this.decorateInternal(/** @type {!HTMLElement} */(
		this.dom_.createElement('div')));
};

/**
 * @param {HTMLElement} parentElement
 */
ljstream.ForumComponent.prototype.createField = function(parentElement) {
	this.domHelper = goog.dom.getDomHelper(parentElement);
	this.fieldId = this.makeId(ljstream.ForumComponent.IdFragment.FIELD);
	var myDiv = this.domHelper.createDom(goog.dom.TagName.DIV, {'id': this.fieldId});
	parentElement.appendChild(myDiv);
};

/**
 */
ljstream.ForumComponent.prototype.enterDocument = function() {
	ljstream.ForumComponent.superClass_.enterDocument.call(this);

	this.field = new goog.editor.Field(this.fieldId, this.domHelper.getDocument());
	this.field.makeEditable();
};

/**
 */
ljstream.ForumComponent.prototype.exitDocument = function() {
	this.field.makeUneditable();

	ljstream.ForumComponent.superClass_.exitDocument.call(this);
};





/**
 * @constructor
 */
ljstream.Forum = function() {

};


/**
 * @type {!ljstream.ForumComponent}
 */
ljstream.Forum.prototype.component;


ljstream.Forum.prototype.setup = function() {
	this.component = new ljstream.ForumComponent();
	this.component.render(goog.dom.getElement('ljstream-container'));
};



ljstream.init = function() {
	goog.debug.LogManager.getRoot().setLevel(goog.debug.Logger.Level.ALL);
	ljstream.setupDebug();

	var myForum = new ljstream.Forum();
	myForum.setup();

	ljstream.startStream();
};


goog.exportSymbol('__ljstream_init', ljstream.init);
goog.exportSymbol('__ljstream_sendText', ljstream.sendText);
