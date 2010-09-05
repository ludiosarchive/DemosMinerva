goog.provide('forum');

goog.require('cw.autoTitle');
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
	var endpointD = cw.net.demo.getEndpoint(forum.callQueue, true, false, '/httpface/');
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


forum.setupDebug = function() {
	var debugWindow = new goog.debug.FancyWindow('main');
	debugWindow.setEnabled(true);
	debugWindow.init();

	forum.logger.info('Logger works.');
};


/**
 * @param {goog.dom.DomHelper=} opt_domHelper DOM helper to use.
 *
 * @constructor
 * @extends {goog.ui.Component}
 */
forum.ForumComponent = function(opt_domHelper) {
	goog.ui.Component.call(this, opt_domHelper);

	/**
	 * @type {goog.editor.Field}
	 */
	this.field = null;
};
goog.inherits(forum.ForumComponent, goog.ui.Component);

/**
 * @enum {string}
 */
forum.ForumComponent.IdFragment = {
	FIELD: 'field'
};

/**
 * Decorates an existing HTML DIV element as a ForumComponent.
 *
 * @param {HTMLElement} element The DIV element to decorate. The element's
 *    text, if any will be used as the component's label.
 */
forum.ForumComponent.prototype.decorateInternal = function(element) {
	forum.ForumComponent.superClass_.decorateInternal.call(this, element);

	this.createField(element);
};

/**
 * Creates an initial DOM representation for the component.
 */
forum.ForumComponent.prototype.createDom = function() {
	this.decorateInternal(/** @type {!HTMLElement} */(
		this.dom_.createElement('div')));
};

/**
 * @param {HTMLElement} parentElement
 */
forum.ForumComponent.prototype.createField = function(parentElement) {
	this.domHelper = goog.dom.getDomHelper(parentElement);
	this.fieldId = this.makeId(forum.ForumComponent.IdFragment.FIELD);
	var myDiv = this.domHelper.createDom(goog.dom.TagName.DIV, {'id': this.fieldId});
	parentElement.appendChild(myDiv);
};

/**
 */
forum.ForumComponent.prototype.enterDocument = function() {
	forum.ForumComponent.superClass_.enterDocument.call(this);

	this.field = new goog.editor.Field(this.fieldId, this.domHelper.getDocument());
	this.field.makeEditable();
};

/**
 */
forum.ForumComponent.prototype.exitDocument = function() {
	forum.ForumComponent.superClass_.exitDocument.call(this);

	this.field.makeUneditable();
};





/**
 * @constructor
 */
forum.Forum = function() {

};


/**
 * @type {!forum.ForumComponent}
 */
forum.Forum.prototype.component;


forum.Forum.prototype.setup = function() {
	this.component = new forum.ForumComponent();
	this.component.render(goog.dom.getElement('forum-container'));
};



forum.init = function() {
	goog.debug.LogManager.getRoot().setLevel(goog.debug.Logger.Level.ALL);
	forum.setupDebug();

	var myForum = new forum.Forum();
	myForum.setup();

	forum.startStream();
};


goog.exportSymbol('__forum_init', forum.init);
goog.exportSymbol('__forum_sendText', forum.sendText);
