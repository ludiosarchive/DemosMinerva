goog.provide('ljstream');

goog.require('goog.debug');
goog.require('goog.debug.FancyWindow');
goog.require('goog.debug.Logger');
goog.require('goog.debug.LogManager');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.string');
goog.require('goog.ui.CustomButton');
goog.require('goog.Uri');
goog.require('cw.eventual');
goog.require('cw.string');
goog.require('cw.json');
goog.require('cw.net.ClientStream');
goog.require('cw.net.IStringProtocol');
goog.require('cw.net.HttpStreamingMode');
goog.require('cw.net.demo.getEndpointByQueryArgs');
goog.require('cw.repr');
goog.require('cw.string');
goog.require('cw.linkify');



ljstream.logger = goog.debug.Logger.getLogger('ljstream.logger');


window.onerror = function(msg, url, lineNumber) {
	ljstream.logger.severe('window.onerror: message: ' + cw.repr.repr(msg) +
		'\nURL: ' + url + '\nLine Number: ' + lineNumber);
};

/**
 * @implements {cw.net.IStringProtocol}
 * @constructor
 */
ljstream.LjClientProtocol = function() {
};

ljstream.LjClientProtocol.prototype.streamStarted = function(stream) {
	this.stream_ = stream;
	this.stream_.sendString('subprotocol:ljstream');
	this.sendPreferences();
};

ljstream.LjClientProtocol.prototype.streamReset = function(reasonString, applicationLevel) {
	ljstream.logger.info(
		'streamReset: reasonString=' + cw.repr.repr(reasonString) +
		', applicationLevel=' + applicationLevel);
	ljstream.appendImportantMessage('Disconnected from server.  Try reloading this page.');
	ljstream.lastProto = null;
};

/**
 * @param {string} s
 */
ljstream.LjClientProtocol.prototype.handleString_ = function(s) {
	function fail() {
		ljstream.logger.severe('Could not handle string: ' + cw.repr.repr(s));
	}

	// TODO: handle errors?
	var payload = cw.json.parse(s);
	var msgType = payload[0];
	var body = payload[1];

	if(msgType == "NewPost") {
		// TODO: handle errors?
		var post = body;
		ljstream.appendPost(post['title'], post['url'], post['body']);
	}
};

ljstream.LjClientProtocol.prototype.sendPreferences = function() {
	ljstream.logger.info('Sending preferences to server');
	var includeRussianPosts = ljstream.getIncludeRussianPosts();
	this.stream_.sendString(cw.json.asciify(
		["SetPreferences", {"include_russian_posts": includeRussianPosts}]
	));
};

/**
 * @param {string} s
 */
ljstream.LjClientProtocol.prototype.stringReceived = function(s) {
	this.handleString_(s);
};

/**
 * @param {string} reason
 */
ljstream.LjClientProtocol.prototype.reset = function(reason) {
	ljstream.logger.info('resetting with reason: ' + reason);
	this.stream_.reset(reason);
};

/**
 * @type {?ljstream.LjClientProtocol}
 */
ljstream.lastProto = null;


ljstream.callQueue = new cw.eventual.CallQueue(goog.global['window']);


/**
 * @param {string} message
 */
ljstream.appendImportantMessage = function(message) {
	var d = goog.dom.createDom;
	var messageSpan =
		d('span', {'class': 'important-message'}, message);
	ljstream.appendRow(messageSpan);
};


ljstream.idleFired = function() {
	if(!ljstream.lastProto) {
		return;
	}
	ljstream.resetStream("idle timeout fired");
	ljstream.lastProto = null;

	ljstream.appendImportantMessage(
		"No key/mouse activity, stopping stream to save " +
		"everyone's bandwidth.");
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
 * @type {!goog.dom.DomHelper}
 */
ljstream.domHelper = new goog.dom.DomHelper();


/**
 * Based on http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
 *
 * @param {!Element} el
 * @return {boolean}
 */
ljstream.elementBelowViewport = function(el) {
	// TODO: should this be using some goog. stuff?
	var top = el.offsetTop;
	var height = el.offsetHeight;

	while(el.offsetParent) {
		el = el.offsetParent;
		top += el.offsetTop;
	}

	var scrollY = goog.dom.getDocumentScroll().y;
	var viewportHeight = ljstream.domHelper.getViewportSize().height;
	return (top + height) <= (scrollY + viewportHeight);
};


/**
 * @type {number}
 */
ljstream.rowsOnPage = 0;


/**
 * @param {!Element} element
 */
ljstream.appendRow = function(element) {
	var className = 'row-' + (ljstream.rowsOnPage % 2 == 0 ? 'even' : 'odd');
	var d = goog.dom.createDom;
	var rowDiv =
		d('div', {'class': className},
			d('nobr', {}, element));

	var container = goog.dom.getElement('ljstream-container-inner');
	container.appendChild(rowDiv);
	ljstream.rowsOnPage += 1;

	if(ljstream.automaticScroll) {
		if(!ljstream.elementBelowViewport(rowDiv)) {
			var viewportHeight = ljstream.domHelper.getViewportSize().height;
			window.scrollBy(0, Math.round(viewportHeight / 2) + 80)
		}
	}
};


ljstream.clearRows = function() {
	// TODO: find out if this has memory leaks, especially in IE.
	goog.dom.getElement('ljstream-container-inner').innerHTML = "";
};


/**
 * @param {string} title
 * @param {string} url
 * @param {string} body
 */
ljstream.appendPost = function(title, url, body) {
	var d = goog.dom.createDom;
	title = goog.string.trim(title);
	if(!title) {
		title = '[No title]';
	}
	var linkifiedBody = cw.linkify.linkify(goog.string.htmlEscape(body));
	var linkifiedBodyFrag = goog.dom.htmlToDocumentFragment(linkifiedBody);
	// TODO: security: we have XSS here, probably
	// maybe sanitize URL a bit more?
	// maybe ban RTL toggle and other strange unicode chars?

	var post =
		d('span', {},
			d('a', {'href': url, 'class': 'ljpost-title-link'}, title),
			d('span', {}, '\u00a0' /* nbsp */),
			linkifiedBodyFrag);
	ljstream.appendRow(post);
};


ljstream.startStream = function() {
	var streamPolicy = new cw.net.demo.DemoStreamPolicy();
	ljstream.lastProto = new ljstream.LjClientProtocol();
	ljstream.activityDetected(null);
	var endpoint = cw.net.demo.getEndpointByQueryArgs(ljstream.callQueue);
	var stream = new cw.net.ClientStream(
		endpoint, streamPolicy, ljstream.callQueue);
	stream.bindToProtocol(ljstream.lastProto);
	stream.start();
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
};


/**
 * @return {boolean}
 */
ljstream.getIncludeRussianPosts = function() {
	return goog.dom.getElement('include_russian_posts').checked;
};


/**
 * @constructor
 */
ljstream.LjView = function() {
};

ljstream.LjView.prototype.setup = function() {
	// Scroll to the top because we might be scroll down after page reload,
	// but there's no real content below anyway.
	// A synchronous scrollTo(...) doesn't work in at least Firefox, so
	// do this instead.
	goog.events.listen(goog.global, goog.events.EventType.LOAD,
		function() {
			window.scrollTo(0, 0);
		}
	);

	goog.events.listen(goog.dom.getElement('include_russian_posts'),
		goog.events.EventType.CLICK,
		function(e) {
			ljstream.lastProto.sendPreferences();
		}
	);

	ljstream.automaticScroll = true;
	goog.events.listen(goog.dom.getElement('automatic_scroll'),
		goog.events.EventType.CLICK,
		function(e) {
			ljstream.automaticScroll = e.target.checked;
		}
	);

	var clearPostsButton = new goog.ui.CustomButton('Clear posts');
	clearPostsButton.addClassName('clear-posts-button');
	clearPostsButton.render(goog.dom.getElement('prefs'));
	goog.events.listen(clearPostsButton, goog.ui.Component.EventType.ACTION,
		function() {
			ljstream.clearRows();
			window.scrollTo(0, 0);
		});

	var container = goog.dom.getElement('ljstream-container');
	container.style.marginTop = goog.dom.getElement('demo-header').offsetHeight + 'px';
	goog.dom.getElement('demo-header').style.width = '9000px';
	var d = goog.dom.createDom;
	var inner = d('div', {'id': 'ljstream-container-inner'});
	container.appendChild(inner);
};



ljstream.init = function() {
	goog.debug.LogManager.getRoot().setLevel(goog.debug.Logger.Level.ALL);
	if(cw.net.demo.isLoggingEnabled()) {
		ljstream.setupDebug();
	}
	ljstream.logger.info('Logger works.');

	var view = new ljstream.LjView();
	view.setup();

	ljstream.startStream();
};


goog.exportSymbol('__ljstream_init', ljstream.init);
