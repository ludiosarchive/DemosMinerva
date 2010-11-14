goog.provide('ljstream');

goog.require('goog.debug');
goog.require('goog.debug.FancyWindow');
goog.require('goog.debug.Logger');
goog.require('goog.debug.LogManager');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.json');
goog.require('goog.string');
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
goog.require('cw.linkify');

goog.require('ljstream.NewPost');
goog.require('ljstream.SetPreferences');


ljstream.logger = goog.debug.Logger.getLogger('ljstream.logger');


window.onerror = function(msg, url, lineNumber) {
	ljstream.logger.severe('window.onerror: message: ' + cw.repr.repr(msg) +
		'\nURL: ' + url + '\nLine Number: ' + lineNumber);
};

/**
 * @implements {cw.net.IMinervaProtocol}
 * @constructor
 */
ljstream.ChatProtocol = function() {
	this.pbLiteSerializer_ = new goog.proto2.PbLiteSerializer();
};

ljstream.ChatProtocol.prototype.setStream = function(stream) {
	this.stream_ = stream;
};

ljstream.ChatProtocol.prototype.sendInitialStrings = function() {
	this.stream_.sendStrings(['subprotocol:ljstream']);
	this.sendPreferences();
};

ljstream.ChatProtocol.prototype.streamReset = function(reasonString, applicationLevel) {
	ljstream.logger.info(
		'streamReset: reasonString=' + cw.repr.repr(reasonString) +
		', applicationLevel=' + applicationLevel);
	ljstream.appendImportantMessage('Disconnected from server.  Try reloading this page.');
	ljstream.lastProto = null;
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
 * @param {boolean} includeRussianPosts
 * @return {!Array}
 */
ljstream.ChatProtocol.prototype.makePreferences_ = function(includeRussianPosts) {
	var prefs = new ljstream.SetPreferences();
	prefs.setIncludeRussianPosts(includeRussianPosts);
	return this.pbLiteSerializer_.serialize(prefs);
};

ljstream.ChatProtocol.prototype.sendPreferences = function() {
	ljstream.logger.info('Sending preferences to server');
	var includeRussianPosts = ljstream.getIncludeRussianPosts();
	var prefsArray = this.makePreferences_(includeRussianPosts);
	this.stream_.sendStrings([goog.json.serialize([2, prefsArray])]);
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
	ljstream.lastProto = new ljstream.ChatProtocol();
	ljstream.activityDetected(null);
	var endpointD = cw.net.demo.getEndpoint(ljstream.callQueue, true, false, '/httpface/');
	endpointD.addCallback(function(endpoint) {
		if(!ljstream.lastProto) {
			throw Error("lastProto falsy?");
		}
		var stream = new cw.net.Stream(
			ljstream.callQueue, ljstream.lastProto, endpoint, streamPolicy);
		ljstream.lastProto.setStream(stream);
		ljstream.lastProto.sendInitialStrings();
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
