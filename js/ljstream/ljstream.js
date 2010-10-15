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

goog.require('ljstream.NewPost');
goog.require('ljstream.SetPreferences');


/**
 * @license
 * linkify - v0.3 - 6/27/2009
 * http://benalman.com/code/test/js-linkify/
 *
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Licensed under the MIT license
 * http://benalman.com/about/license/
 *
 * Some regexps adapted from http://userscripts.org/scripts/review/7122
 */

// Turn text into linkified html.
//
// var html = ljstream.linkify( text, options );
//
// options:
//
//  callback (Function) - default: undefined - if defined, this will be called
//    for each link- or non-link-chunk with two arguments, text and href. If the
//    chunk is non-link, href will be omitted.
//
//  punct_regexp (RegExp | Boolean) - a RegExp that can be used to trim trailing
//    punctuation from links, instead of the default.
//
// This is a work in progress, please let me know if (and how) it fails!

ljstream.linkify = (function() {
	var
		SCHEME = "[a-z\\d.-]+://",
		IPV4 = "(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])",
		HOSTNAME = "(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+",
		TLD = "(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)",
		HOST_OR_IP = "(?:" + HOSTNAME + TLD + "|" + IPV4 + ")",
		PATH = "(?:[;/][^#?<>\\s]*)?",
		QUERY_FRAG = "(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?",
		URI1 = "\\b" + SCHEME + "[^<>\\s]+",
		URI2 = "\\b" + HOST_OR_IP + PATH + QUERY_FRAG + "(?!\\w)",

		MAILTO = "mailto:",
		EMAIL = "(?:" + MAILTO + ")?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@" + HOST_OR_IP + QUERY_FRAG + "(?!\\w)",

		URI_RE = new RegExp("(?:" + URI1 + "|" + URI2 + "|" + EMAIL + ")", "ig"),
		SCHEME_RE = new RegExp("^" + SCHEME, "i"),

		quotes = {
			"'": "`",
			'>': '<',
			')': '(',
			']': '[',
			'}': '{',
			'»': '«',
			'›': '‹'
		},

		default_options = {
			callback: function(text, href) {
				return href ? '<a href="' + href + '" title="' + href + '">' + text + '<\/a>' : text;
			},
			punct_regexp: /(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/
		};

	return function(txt, options) {
		options = options || {};

		// Temp variables.
		var arr,
			i,
			link,
			href,

			// Output HTML.
			html = '',

			// Store text / link parts, in order, for re-combination.
			parts = [],

			// Used for keeping track of indices in the text.
			idx_prev,
			idx_last,
			idx,
			link_last,

			// Used for trimming trailing punctuation and quotes from links.
			matches_begin,
			matches_end,
			quote_begin,
			quote_end;

		// Initialize options.
		for (i in default_options) {
			if (options[ i ] === undefined) {
				options[ i ] = default_options[ i ];
			}
		}

		// Find links.
		while (arr = URI_RE.exec(txt)) {

			link = arr[0];
			idx_last = URI_RE.lastIndex;
			idx = idx_last - link.length;

			// Not a link if preceded by certain characters.
			if (/[\/:]/.test(txt.charAt(idx - 1))) {
				continue;
			}

			// Trim trailing punctuation.
			do {
				// If no changes are made, we don't want to loop forever!
				link_last = link;

				quote_end = link.substr(-1)
				quote_begin = quotes[ quote_end ];

				// Ending quote character?
				if (quote_begin) {
					matches_begin = link.match(new RegExp('\\' + quote_begin + '(?!$)', 'g'));
					matches_end = link.match(new RegExp('\\' + quote_end, 'g'));

					// If quotes are unbalanced, remove trailing quote character.
					if (( matches_begin ? matches_begin.length : 0 ) < ( matches_end ? matches_end.length : 0 )) {
						link = link.substr(0, link.length - 1);
						idx_last--;
					}
				}

				// Ending non-quote punctuation character?
				if (options.punct_regexp) {
					link = link.replace(options.punct_regexp, function(a) {
						idx_last -= a.length;
						return '';
					});
				}
			} while (link.length && link !== link_last);

			href = link;

			// Add appropriate protocol to naked links.
			if (!SCHEME_RE.test(href)) {
				href = ( href.indexOf('@') !== -1 ? ( !href.indexOf(MAILTO) ? '' : MAILTO )
					: !href.indexOf('irc.') ? 'irc://'
					: !href.indexOf('ftp.') ? 'ftp://'
					: 'http://' )
					+ href;
			}

			// Push preceding non-link text onto the array.
			if (idx_prev != idx) {
				parts.push([ txt.slice(idx_prev, idx) ]);
				idx_prev = idx_last;
			}

			// Push massaged link onto the array
			parts.push([ link, href ]);
		}
		;

		// Push remaining non-link text onto the array.
		parts.push([ txt.substr(idx_prev) ]);

		// Process the array items.
		for (i = 0; i < parts.length; i++) {
			html += options.callback.apply(goog.global, parts[i]);
		}

		// In case of catastrophic failure, return the original text;
		return html || txt;
	};

})();



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

ljstream.ChatProtocol.prototype.streamStarted = function(stream) {
	this.stream_ = stream;
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
	var message =
		d('span', {'class': 'important-message'}, message);
	ljstream.appendRow(message);
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
	var linkifiedBody = ljstream.linkify(goog.string.htmlEscape(body));
	var linkifiedBodyFrag = goog.dom.htmlToDocumentFragment(linkifiedBody);
	// TODO: security: we have XSS here, probably

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

		// assign it early because sendPreferences expects stream_ to exist
		ljstream.lastProto.stream_ = stream;
		stream.sendStrings(['subprotocol:ljstream']);
		ljstream.lastProto.sendPreferences();
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
	goog.events.listen(goog.dom.getElement('include_russian_posts'),
		goog.events.EventType.CLICK,
		function(e) {
			ljstream.lastProto.sendPreferences();
		}
	);

	var container = goog.dom.getElement('ljstream-container');
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
