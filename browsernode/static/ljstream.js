(function(){function f(a) {
  throw a;
}
var i = void 0, l = null;
function aa(a) {
  return function(b) {
    this[a] = b
  }
}
function m(a) {
  return function() {
    return this[a]
  }
}
function p(a) {
  return function() {
    return a
  }
}
var q, ba = ba || {}, r = this;
function ca(a) {
  for(var a = a.split("."), b = r, c;c = a.shift();) {
    if(b[c] != l) {
      b = b[c]
    }else {
      return l
    }
  }
  return b
}
function s() {
}
function da(a) {
  a.Ua = function() {
    return a.rf || (a.rf = new a)
  }
}
function ea(a) {
  var b = typeof a;
  if(b == "object") {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }else {
        if(a instanceof Object) {
          return b
        }
      }
      var c = Object.prototype.toString.call(a);
      if(c == "[object Window]") {
        return"object"
      }
      if(c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(b == "function" && typeof a.call == "undefined") {
      return"object"
    }
  }
  return b
}
function t(a) {
  return a !== i
}
function u(a) {
  return ea(a) == "array"
}
function fa(a) {
  var b = ea(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function ga(a) {
  return ha(a) && typeof a.getFullYear == "function"
}
function w(a) {
  return typeof a == "string"
}
function x(a) {
  return ea(a) == "function"
}
function ha(a) {
  a = ea(a);
  return a == "object" || a == "array" || a == "function"
}
function y(a) {
  return a[ia] || (a[ia] = ++ja)
}
var ia = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), ja = 0;
function ka(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function la(a, b, c) {
  var d = b || r;
  if(arguments.length > 2) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var b = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(b, e);
      return a.apply(d, b)
    }
  }else {
    return function() {
      return a.apply(d, arguments)
    }
  }
}
function A(a, b, c) {
  A = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ka : la;
  return A.apply(l, arguments)
}
function ma(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var C = Date.now || function() {
  return+new Date
};
function D(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.d = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;/*

 linkify - v0.3 - 6/27/2009
 http://benalman.com/code/test/js-linkify/

 Copyright (c) 2009 "Cowboy" Ben Alman
 Licensed under the MIT license
 http://benalman.com/about/license/

 Some regexps adapted from http://userscripts.org/scripts/review/7122
*/
var na, oa, pa, qa;
na = RegExp("(?:\\b[a-z\\d.-]+://[^<>\\s]+|\\b(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:[;/][^#?<>\\s]*)?(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w)|(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w))", 
"ig");
oa = /^[a-z\d.-]+:\/\//i;
pa = {"'":"`", ">":"<", ")":"(", "]":"[", "}":"{", "\u00bb":"\u00ab", "\u203a":"\u2039"};
qa = {pb:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, Ae:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
function ra(a) {
  var b;
  b = b || {};
  var c = [], d, e;
  for(e in qa) {
    t(b[e]) || (b[e] = qa[e])
  }
  for(;e = na.exec(a);) {
    e = e[0];
    var g = na.lastIndex, h = g - e.length;
    if(!/[\/:]/.test(a.charAt(h - 1))) {
      do {
        var j = e, k = e.substr(-1), n = pa[k];
        if(n && (n = e.match(RegExp("\\" + n + "(?!$)", "g")), k = e.match(RegExp("\\" + k, "g")), (n ? n.length : 0) < (k ? k.length : 0))) {
          e = e.substr(0, e.length - 1), g--
        }
        b.Ae && (e = e.replace(b.Ae, function(a) {
          g -= a.length;
          return""
        }))
      }while(e.length && e !== j);
      j = e;
      oa.test(j) || (j = (j.indexOf("@") !== -1 ? !j.indexOf("mailto:") ? "" : "mailto:" : !j.indexOf("irc.") ? "irc://" : !j.indexOf("ftp.") ? "ftp://" : "http://") + j);
      d != h && (c.push([a.slice(d, h)]), d = g);
      c.push([e, j])
    }
  }
  c.push([a.substr(d)]);
  d = "";
  for(e = 0;e < c.length;e++) {
    d += b.pb.apply(r, c[e])
  }
  return d || a
}
;function sa(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = String(a)
  }
}
D(sa, Error);
sa.prototype.name = "CustomError";
function ta(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
function ua(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
var va = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function wa(a) {
  a = String(a);
  return!va.test(a) ? encodeURIComponent(a) : a
}
function xa(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function ya(a) {
  if(!za.test(a)) {
    return a
  }
  a.indexOf("&") != -1 && (a = a.replace(Aa, "&amp;"));
  a.indexOf("<") != -1 && (a = a.replace(Ba, "&lt;"));
  a.indexOf(">") != -1 && (a = a.replace(Ca, "&gt;"));
  a.indexOf('"') != -1 && (a = a.replace(Da, "&quot;"));
  return a
}
var Aa = /&/g, Ba = /</g, Ca = />/g, Da = /\"/g, za = /[&<>\"]/;
function Ea(a) {
  return xa(a.replace(/  /g, " &#160;"), i)
}
function Fa(a, b) {
  for(var c = 0, d = ua(String(a)).split("."), e = ua(String(b)).split("."), g = Math.max(d.length, e.length), h = 0;c == 0 && h < g;h++) {
    var j = d[h] || "", k = e[h] || "", n = RegExp("(\\d*)(\\D*)", "g"), B = RegExp("(\\d*)(\\D*)", "g");
    do {
      var o = n.exec(j) || ["", "", ""], v = B.exec(k) || ["", "", ""];
      if(o[0].length == 0 && v[0].length == 0) {
        break
      }
      c = Ga(o[1].length == 0 ? 0 : parseInt(o[1], 10), v[1].length == 0 ? 0 : parseInt(v[1], 10)) || Ga(o[2].length == 0, v[2].length == 0) || Ga(o[2], v[2])
    }while(c == 0)
  }
  return c
}
function Ga(a, b) {
  if(a < b) {
    return-1
  }else {
    if(a > b) {
      return 1
    }
  }
  return 0
}
;function Ha(a, b) {
  b.unshift(a);
  sa.call(this, ta.apply(l, b));
  b.shift();
  this.dg = a
}
D(Ha, sa);
Ha.prototype.name = "AssertionError";
function Ia(a, b) {
  f(new Ha("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ja(a, b, c) {
  this.L = a;
  this.A = b;
  this.dd = c.name;
  this.Ya = !!c.eg;
  this.bg = !!c.required;
  this.wb = c.Sa;
  this.qe = c.type;
  this.Nd = !1;
  switch(this.wb) {
    case Ka:
    ;
    case La:
    ;
    case Ma:
    ;
    case Na:
    ;
    case Oa:
      this.Nd = !0
  }
  this.Zf = c.defaultValue
}
var Ka = 3, La = 4, Ma = 6, Na = 16, Oa = 18;
function Pa(a) {
  return a.wb == 11 || a.wb == 10
}
;function Qa(a, b) {
  for(var c in a) {
    b.call(i, a[c], c, a)
  }
}
function Ra(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Sa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Ta = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
function Ua(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < Ta.length;g++) {
      c = Ta[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var E = Array.prototype, Va = E.indexOf ? function(a, b, c) {
  return E.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == l ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(w(a)) {
    return!w(b) || b.length != 1 ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Wa = E.forEach ? function(a, b, c) {
  E.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
}, Xa = E.map ? function(a, b, c) {
  return E.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), g = w(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (e[h] = b.call(c, g[h], h, a))
  }
  return e
}, Ya = E.some ? function(a, b, c) {
  return E.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && b.call(c, e[g], g, a)) {
      return!0
    }
  }
  return!1
}, Za = E.every ? function(a, b, c) {
  return E.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && !b.call(c, e[g], g, a)) {
      return!1
    }
  }
  return!0
};
function $a(a, b) {
  return Va(a, b) >= 0
}
function ab(a, b) {
  var c = Va(a, b);
  c >= 0 && E.splice.call(a, c, 1)
}
function bb(a) {
  return E.concat.apply(E, arguments)
}
function cb(a) {
  if(u(a)) {
    return bb(a)
  }else {
    for(var b = [], c = 0, d = a.length;c < d;c++) {
      b[c] = a[c]
    }
    return b
  }
}
function db(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], e;
    if(u(d) || (e = fa(d)) && d.hasOwnProperty("callee")) {
      a.push.apply(a, d)
    }else {
      if(e) {
        for(var g = a.length, h = d.length, j = 0;j < h;j++) {
          a[g + j] = d[j]
        }
      }else {
        a.push(d)
      }
    }
  }
}
function eb(a, b, c, d) {
  E.splice.apply(a, fb(arguments, 1))
}
function fb(a, b, c) {
  return arguments.length <= 2 ? E.slice.call(a, b) : E.slice.call(a, b, c)
}
function gb(a, b) {
  E.sort.call(a, b || hb)
}
function hb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function ib(a, b, c) {
  this.oe = a;
  this.dd = b.name || l;
  this.ag = b.Qd || l;
  this.Yf = b.Xf;
  this.oa = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.oa[b.A] = b
  }
}
function jb(a) {
  a = Ra(a.oa);
  gb(a, function(a, c) {
    return a.A - c.A
  });
  return a
}
;function kb() {
  this.q = {};
  this.Qa = this.constructor.Qa;
  var a = this.Qa.oa, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.oa = b;
  this.Lc = this.$c = l
}
function lb(a, b) {
  for(var c in a.q) {
    a.oa[c] || b.call(a, c, a.q[c])
  }
}
q = kb.prototype;
q.yb = m("Qa");
q.get = function(a, b) {
  return mb(this, a.A, b)
};
q.set = function(a, b) {
  this.q[a.A] = b
};
q.add = function(a, b) {
  var c = a.A;
  this.q[c] || (this.q[c] = []);
  this.q[c].push(b)
};
q.clear = function(a) {
  delete this.q[a.A]
};
q.k = function(a) {
  if(!a || this.constructor != a.constructor) {
    return!1
  }
  for(var b = jb(this.yb()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(nb(this, d.A) != nb(a, d.A)) {
      return!1
    }
    if(nb(this, d.A)) {
      var e = Pa(d), g = d.A, h = this.q[g], g = a.q[g];
      if(d.Ya) {
        if(h.length != g.length) {
          return!1
        }
        for(d = 0;d < h.length;d++) {
          if(!(e ? h[d].k(g[d]) : h[d] == g[d])) {
            return!1
          }
        }
      }else {
        if(!(e ? h.k(g) : h == g)) {
          return!1
        }
      }
    }
  }
  return!0
};
q.N = function() {
  for(var a = new this.constructor, b = jb(a.yb()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete a.q[d.A];
    if(nb(this, d.A)) {
      var e = Pa(d);
      if(d.Ya) {
        var g;
        g = d.A;
        ob(this, this.oa[g]);
        g = this.q[g] || [];
        for(var h = 0;h < g.length;h++) {
          a.add(d, e ? g[h].N() : g[h])
        }
      }else {
        g = this.get(d), a.set(d, e ? g.N() : g)
      }
    }
  }
  return a
};
function nb(a, b) {
  return b in a.q && t(a.q[b])
}
function ob(a, b) {
  if(a.$c) {
    var c = b.A;
    if(!(c in a.Lc)) {
      var d = a.q, e;
      e = a.$c;
      var g = a.q[c];
      if(g == l) {
        e = g
      }else {
        if(b.Ya) {
          var h = [];
          u(g);
          for(var j = 0;j < g.length;j++) {
            h[j] = e.ac(b, g[j])
          }
          e = h
        }else {
          e = e.ac(b, g)
        }
      }
      d[c] = e;
      a.Lc[c] = !0
    }
  }
}
function mb(a, b, c) {
  var d = a.oa[b];
  ob(a, d);
  return d.Ya ? (c = c || 0, pb(a, b), a.q[b][c]) : (u(a.q[b]), a.q[b])
}
function pb(a, b) {
  return a.oa[b].Ya ? (nb(a, b) && u(a.q[b]), nb(a, b) ? a.q[b].length : 0) : nb(a, b) ? 1 : 0
}
function qb(a, b) {
  var c = [], d, e;
  for(e in b) {
    b.hasOwnProperty(e) && (e == 0 ? d = b[0] : c.push(new Ja(a, e, b[e])))
  }
  a.Qa = new ib(a, d, c);
  a.yb = function() {
    return a.Qa
  }
}
;function rb() {
}
rb.prototype.bc = function(a, b) {
  return Pa(a) ? this.Ob(b) : b
};
rb.prototype.Kc = function(a) {
  new a.oe;
  f(Error("Unimplemented"))
};
rb.prototype.ac = function(a, b) {
  if(Pa(a)) {
    return this.Kc(a.qe.Qa, b)
  }
  if(!a.Nd) {
    return b
  }
  var c = a.qe;
  if(c === String) {
    if(typeof b === "number") {
      return String(b)
    }
  }else {
    if(c === Number && typeof b === "string" && /^-?[0-9]+$/.test(b)) {
      return Number(b)
    }
  }
  return b
};
function sb() {
}
D(sb, rb);
sb.prototype.Kc = function(a, b) {
  var c = new a.oe;
  c.$c = this;
  c.q = b;
  c.Lc = {};
  return c
};
function tb() {
}
D(tb, sb);
tb.prototype.Ob = function(a) {
  for(var b = jb(a.yb()), c = [], d = 0;d < b.length;d++) {
    var e = b[d];
    if(nb(a, e.A)) {
      var g = e.A;
      if(e.Ya) {
        c[g] = [];
        for(var h = 0;h < pb(a, e.A);h++) {
          c[g][h] = this.bc(e, a.get(e, h))
        }
      }else {
        c[g] = this.bc(e, a.get(e))
      }
    }
  }
  lb(a, function(a, b) {
    c[a] = b
  });
  return c
};
tb.prototype.bc = function(a, b) {
  return a.wb == 8 ? b ? 1 : 0 : rb.prototype.bc.apply(this, arguments)
};
tb.prototype.ac = function(a, b) {
  return a.wb == 8 ? b === 1 : rb.prototype.ac.apply(this, arguments)
};
function ub(a) {
  return x(a) || typeof a == "object" && x(a.call) && x(a.apply)
}
;function vb(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  f(Error("Invalid JSON string: " + a))
}
function wb() {
}
wb.prototype.Ob = function(a) {
  var b = [];
  xb(this, a, b);
  return b.join("")
};
function xb(a, b, c) {
  switch(typeof b) {
    case "string":
      yb(b, c);
      break;
    case "number":
      c.push(isFinite(b) && !isNaN(b) ? b : "null");
      break;
    case "boolean":
      c.push(b);
      break;
    case "undefined":
      c.push("null");
      break;
    case "object":
      if(b == l) {
        c.push("null");
        break
      }
      if(u(b)) {
        var d = b.length;
        c.push("[");
        for(var e = "", g = 0;g < d;g++) {
          c.push(e), xb(a, b[g], c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(e in b) {
        Object.prototype.hasOwnProperty.call(b, e) && (g = b[e], typeof g != "function" && (c.push(d), yb(e, c), c.push(":"), xb(a, g, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      f(Error("Unknown type: " + typeof b))
  }
}
var zb = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\u000b"}, Ab = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function yb(a, b) {
  b.push('"', a.replace(Ab, function(a) {
    if(a in zb) {
      return zb[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    b < 16 ? e += "000" : b < 256 ? e += "00" : b < 4096 && (e += "0");
    return zb[a] = e + b.toString(16)
  }), '"')
}
;function Bb(a, b, c) {
  var d = Va(c, a);
  if(d != -1) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = ea(a);
    if(d == "boolean" || d == "number" || d == "null" || d == "undefined") {
      b.push(String(a))
    }else {
      if(d == "string") {
        yb(a, b)
      }else {
        if(ub(a.B)) {
          a.B(b, c)
        }else {
          if(ub(a.We)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if(d == "array") {
                d = a.length;
                b.push("[");
                for(var e = "", g = 0;g < d;g++) {
                  b.push(e), Bb(a[g], b, c), e = ", "
                }
                b.push("]")
              }else {
                if(d == "object") {
                  if(ga(a) && typeof a.valueOf == "function") {
                    b.push("new Date(", String(a.valueOf()), ")")
                  }else {
                    for(var d = Sa(a).concat(Ta), e = {}, h = g = 0;h < d.length;) {
                      var j = d[h++], k = ha(j) ? "o" + y(j) : (typeof j).charAt(0) + j;
                      Object.prototype.hasOwnProperty.call(e, k) || (e[k] = !0, d[g++] = j)
                    }
                    d.length = g;
                    b.push("{");
                    e = "";
                    for(h = 0;h < d.length;h++) {
                      g = d[h], Object.prototype.hasOwnProperty.call(a, g) && (j = a[g], b.push(e), yb(g, b), b.push(": "), Bb(j, b, c), e = ", ")
                    }
                    b.push("}")
                  }
                }else {
                  b.push(a.toString())
                }
              }
            }
          }
        }
      }
    }
    c.pop()
  }
}
function F(a, b, c) {
  c || (c = []);
  Bb(a, b, c)
}
function G(a) {
  var b = [];
  F(a, b, i);
  return b.join("")
}
;function Cb(a) {
  if(typeof a.s == "function") {
    a = a.s()
  }else {
    if(fa(a) || w(a)) {
      a = a.length
    }else {
      var b = 0, c;
      for(c in a) {
        b++
      }
      a = b
    }
  }
  return a
}
function Db(a) {
  if(typeof a.F == "function") {
    return a.F()
  }
  if(w(a)) {
    return a.split("")
  }
  if(fa(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Ra(a)
}
function Eb(a) {
  if(typeof a.ga == "function") {
    return a.ga()
  }
  if(typeof a.F != "function") {
    if(fa(a) || w(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return Sa(a)
  }
}
function Fb(a, b, c) {
  if(typeof a.forEach == "function") {
    a.forEach(b, c)
  }else {
    if(fa(a) || w(a)) {
      Wa(a, b, c)
    }else {
      for(var d = Eb(a), e = Db(a), g = e.length, h = 0;h < g;h++) {
        b.call(c, e[h], d && d[h], a)
      }
    }
  }
}
function Gb(a, b) {
  if(typeof a.every == "function") {
    return a.every(b, i)
  }
  if(fa(a) || w(a)) {
    return Za(a, b, i)
  }
  for(var c = Eb(a), d = Db(a), e = d.length, g = 0;g < e;g++) {
    if(!b.call(i, d[g], c && c[g], a)) {
      return!1
    }
  }
  return!0
}
;function Hb(a, b) {
  this.m = {};
  this.c = [];
  var c = arguments.length;
  if(c > 1) {
    c % 2 && f(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.Ec(a)
  }
}
q = Hb.prototype;
q.g = 0;
q.xd = 0;
q.s = m("g");
q.F = function() {
  Ib(this);
  for(var a = [], b = 0;b < this.c.length;b++) {
    a.push(this.m[this.c[b]])
  }
  return a
};
q.ga = function() {
  Ib(this);
  return this.c.concat()
};
q.J = function(a) {
  return Jb(this.m, a)
};
q.sb = function(a) {
  for(var b = 0;b < this.c.length;b++) {
    var c = this.c[b];
    if(Jb(this.m, c) && this.m[c] == a) {
      return!0
    }
  }
  return!1
};
q.k = function(a, b) {
  if(this === a) {
    return!0
  }
  if(this.g != a.s()) {
    return!1
  }
  var c = b || Kb;
  Ib(this);
  for(var d, e = 0;d = this.c[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return!1
    }
  }
  return!0
};
function Kb(a, b) {
  return a === b
}
q.sa = function() {
  return this.g == 0
};
q.clear = function() {
  this.m = {};
  this.xd = this.g = this.c.length = 0
};
q.remove = function(a) {
  return Jb(this.m, a) ? (delete this.m[a], this.g--, this.xd++, this.c.length > 2 * this.g && Ib(this), !0) : !1
};
function Ib(a) {
  if(a.g != a.c.length) {
    for(var b = 0, c = 0;b < a.c.length;) {
      var d = a.c[b];
      Jb(a.m, d) && (a.c[c++] = d);
      b++
    }
    a.c.length = c
  }
  if(a.g != a.c.length) {
    for(var e = {}, c = b = 0;b < a.c.length;) {
      d = a.c[b], Jb(e, d) || (a.c[c++] = d, e[d] = 1), b++
    }
    a.c.length = c
  }
}
q.get = function(a, b) {
  return Jb(this.m, a) ? this.m[a] : b
};
q.set = function(a, b) {
  Jb(this.m, a) || (this.g++, this.c.push(a), this.xd++);
  this.m[a] = b
};
q.Ec = function(a) {
  var b;
  a instanceof Hb ? (b = a.ga(), a = a.F()) : (b = Sa(a), a = Ra(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
q.N = function() {
  return new Hb(this)
};
function Lb(a) {
  Ib(a);
  for(var b = {}, c = 0;c < a.c.length;c++) {
    var d = a.c[c];
    b[d] = a.m[d]
  }
  return b
}
function Jb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function Mb(a) {
  var b = ea(a);
  if(b == "string") {
    return 21 + 2 * a.length
  }else {
    if(b == "number") {
      return 16
    }else {
      if(b == "boolean") {
        return 12
      }else {
        if(b == "null" || b == "undefined") {
          return 8
        }else {
          f(Error("cannot determine size of object type " + b))
        }
      }
    }
  }
}
;function Nb(a, b) {
  this.Na = a;
  this.Ka = b
}
Nb.prototype.k = function(a) {
  return a instanceof Nb && this.Na == a.Na && this.Ka.join(",") == a.Ka
};
Nb.prototype.B = function(a, b) {
  a.push("new SACK(", String(this.Na), ", ");
  F(this.Ka, a, b);
  a.push(")")
};
function Ob() {
  this.H = new Hb
}
q = Ob.prototype;
q.Pa = -1;
q.ya = 0;
q.append = function(a) {
  var b = Mb(a);
  this.H.set(this.Pa + 1, [a, b]);
  this.Pa += 1;
  this.ya += b
};
q.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
q.B = function(a) {
  a.push("<Queue with ", String(this.H.s()), " item(s), counter=#", String(this.Pa), ", size=", String(this.ya), ">")
};
function Pb(a) {
  Ib(a.H);
  gb(a.H.c);
  return a.H.c
}
function Qb() {
  this.za = new Hb
}
Qb.prototype.$a = -1;
Qb.prototype.ya = 0;
function Rb(a) {
  var b = a.za.ga();
  gb(b);
  return new Nb(a.$a, b)
}
var Sb = {};
function Tb() {
  return!0
}
;var Ub, Vb, Wb, Xb, Yb;
function Zb() {
  return r.navigator ? r.navigator.userAgent : l
}
Yb = Xb = Wb = Vb = Ub = !1;
var $b;
if($b = Zb()) {
  var ac = r.navigator;
  Ub = $b.indexOf("Opera") == 0;
  Vb = !Ub && $b.indexOf("MSIE") != -1;
  Xb = (Wb = !Ub && $b.indexOf("WebKit") != -1) && $b.indexOf("Mobile") != -1;
  Yb = !Ub && !Wb && ac.product == "Gecko"
}
var bc = Ub, H = Vb, cc = Yb, I = Wb, dc = Xb, ec = r.navigator, fc = (ec && ec.platform || "").indexOf("Mac") != -1, gc;
a: {
  var hc = "", ic;
  if(bc && r.opera) {
    var jc = r.opera.version, hc = typeof jc == "function" ? jc() : jc
  }else {
    if(cc ? ic = /rv\:([^\);]+)(\)|;)/ : H ? ic = /MSIE\s+([^\);]+)(\)|;)/ : I && (ic = /WebKit\/(\S+)/), ic) {
      var kc = ic.exec(Zb()), hc = kc ? kc[1] : ""
    }
  }
  if(H) {
    var lc, mc = r.document;
    lc = mc ? mc.documentMode : i;
    if(lc > parseFloat(hc)) {
      gc = String(lc);
      break a
    }
  }
  gc = hc
}
var nc = {};
function J(a) {
  return nc[a] || (nc[a] = Fa(gc, a) >= 0)
}
;var oc;
var pc = !H || J("9"), qc = H && !J("8");
function K() {
}
K.prototype.X = !1;
K.prototype.e = function() {
  if(!this.X) {
    this.X = !0, this.b()
  }
};
K.prototype.b = function() {
};
function rc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
D(rc, K);
q = rc.prototype;
q.b = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
q.Ja = !1;
q.Lb = !0;
q.stopPropagation = function() {
  this.Ja = !0
};
q.preventDefault = function() {
  this.Lb = !1
};
var sc = new Function("a", "return a");
function tc(a, b) {
  a && this.Ha(a, b)
}
D(tc, rc);
var uc = [1, 4, 2];
q = tc.prototype;
q.target = l;
q.relatedTarget = l;
q.offsetX = 0;
q.offsetY = 0;
q.clientX = 0;
q.clientY = 0;
q.screenX = 0;
q.screenY = 0;
q.button = 0;
q.keyCode = 0;
q.charCode = 0;
q.ctrlKey = !1;
q.altKey = !1;
q.shiftKey = !1;
q.metaKey = !1;
q.Bf = !1;
q.ea = l;
q.Ha = function(a, b) {
  var c = this.type = a.type;
  rc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(cc) {
      var e;
      a: {
        try {
          sc(d.nodeName);
          e = !0;
          break a
        }catch(g) {
        }
        e = !1
      }
      e || (d = l)
    }
  }else {
    if(c == "mouseover") {
      d = a.fromElement
    }else {
      if(c == "mouseout") {
        d = a.toElement
      }
    }
  }
  this.relatedTarget = d;
  this.offsetX = a.offsetX !== i ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== i ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== i ? a.clientX : a.pageX;
  this.clientY = a.clientY !== i ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.Bf = fc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ea = a;
  delete this.Lb;
  delete this.Ja
};
function vc(a) {
  return pc ? a.ea.button == 0 : a.type == "click" ? !0 : !!(a.ea.button & uc[0])
}
q.stopPropagation = function() {
  tc.d.stopPropagation.call(this);
  this.ea.stopPropagation ? this.ea.stopPropagation() : this.ea.cancelBubble = !0
};
q.preventDefault = function() {
  tc.d.preventDefault.call(this);
  var a = this.ea;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, qc) {
      try {
        if(a.ctrlKey || a.keyCode >= 112 && a.keyCode <= 123) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
q.b = function() {
  tc.d.b.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ea = l
};
function wc() {
}
var xc = 0;
q = wc.prototype;
q.key = 0;
q.gb = !1;
q.Hc = !1;
q.Ha = function(a, b, c, d, e, g) {
  x(a) ? this.fe = !0 : a && a.handleEvent && x(a.handleEvent) ? this.fe = !1 : f(Error("Invalid listener argument"));
  this.bb = a;
  this.ze = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.gc = g;
  this.Hc = !1;
  this.key = ++xc;
  this.gb = !1
};
q.handleEvent = function(a) {
  return this.fe ? this.bb.call(this.gc || this.src, a) : this.bb.handleEvent.call(this.bb, a)
};
var yc, zc = (yc = "ScriptEngine" in r && r.ScriptEngine() == "JScript") ? r.ScriptEngineMajorVersion() + "." + r.ScriptEngineMinorVersion() + "." + r.ScriptEngineBuildVersion() : "0";
function L(a, b) {
  this.ke = b;
  this.Da = [];
  a > this.ke && f(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.Da.push(this.ba ? this.ba() : {})
  }
}
D(L, K);
L.prototype.ba = l;
L.prototype.Od = l;
L.prototype.getObject = function() {
  return this.Da.length ? this.Da.pop() : this.ba ? this.ba() : {}
};
function Ac(a, b) {
  a.Da.length < a.ke ? a.Da.push(b) : Bc(a, b)
}
function Bc(a, b) {
  if(a.Od) {
    a.Od(b)
  }else {
    if(ha(b)) {
      if(x(b.e)) {
        b.e()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
L.prototype.b = function() {
  L.d.b.call(this);
  for(var a = this.Da;a.length;) {
    Bc(this, a.pop())
  }
  delete this.Da
};
var Cc, Dc, Ec, Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc;
(function() {
  function a() {
    return{g:0, T:0}
  }
  function b() {
    return[]
  }
  function c() {
    function a(b) {
      return h.call(a.src, a.key, b)
    }
    return a
  }
  function d() {
    return new wc
  }
  function e() {
    return new tc
  }
  var g = yc && !(Fa(zc, "5.7") >= 0), h;
  Hc = function(a) {
    h = a
  };
  if(g) {
    Cc = function() {
      return j.getObject()
    };
    Dc = function(a) {
      Ac(j, a)
    };
    Ec = function() {
      return k.getObject()
    };
    Fc = function(a) {
      Ac(k, a)
    };
    Gc = function() {
      return n.getObject()
    };
    Ic = function() {
      Ac(n, c())
    };
    Jc = function() {
      return B.getObject()
    };
    Kc = function(a) {
      Ac(B, a)
    };
    Lc = function() {
      return o.getObject()
    };
    Mc = function(a) {
      Ac(o, a)
    };
    var j = new L(0, 600);
    j.ba = a;
    var k = new L(0, 600);
    k.ba = b;
    var n = new L(0, 600);
    n.ba = c;
    var B = new L(0, 600);
    B.ba = d;
    var o = new L(0, 600);
    o.ba = e
  }else {
    Cc = a, Dc = s, Ec = b, Fc = s, Gc = c, Ic = s, Jc = d, Kc = s, Lc = e, Mc = s
  }
})();
var Nc = {}, M = {}, Oc = {}, Pc = {};
function N(a, b, c, d, e) {
  if(b) {
    if(u(b)) {
      for(var g = 0;g < b.length;g++) {
        N(a, b[g], c, d, e)
      }
      return l
    }else {
      var d = !!d, h = M;
      b in h || (h[b] = Cc());
      h = h[b];
      d in h || (h[d] = Cc(), h.g++);
      var h = h[d], j = y(a), k;
      h.T++;
      if(h[j]) {
        k = h[j];
        for(g = 0;g < k.length;g++) {
          if(h = k[g], h.bb == c && h.gc == e) {
            if(h.gb) {
              break
            }
            return k[g].key
          }
        }
      }else {
        k = h[j] = Ec(), h.g++
      }
      g = Gc();
      g.src = a;
      h = Jc();
      h.Ha(c, g, a, b, d, e);
      c = h.key;
      g.key = c;
      k.push(h);
      Nc[c] = h;
      Oc[j] || (Oc[j] = Ec());
      Oc[j].push(h);
      a.addEventListener ? (a == r || !a.Kd) && a.addEventListener(b, g, d) : a.attachEvent(b in Pc ? Pc[b] : Pc[b] = "on" + b, g);
      return c
    }
  }else {
    f(Error("Invalid event type"))
  }
}
function Qc(a, b, c, d, e) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      Qc(a, b[g], c, d, e)
    }
    return l
  }
  a = N(a, b, c, d, e);
  Nc[a].Hc = !0;
  return a
}
function Rc(a, b, c, d, e) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      Rc(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = Sc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].bb == c && a[g].capture == d && a[g].gc == e) {
          O(a[g].key);
          break
        }
      }
    }
  }
}
function O(a) {
  if(Nc[a]) {
    var b = Nc[a];
    if(!b.gb) {
      var c = b.src, d = b.type, e = b.ze, g = b.capture;
      c.removeEventListener ? (c == r || !c.Kd) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in Pc ? Pc[d] : Pc[d] = "on" + d, e);
      c = y(c);
      e = M[d][g][c];
      if(Oc[c]) {
        var h = Oc[c];
        ab(h, b);
        h.length == 0 && delete Oc[c]
      }
      b.gb = !0;
      e.se = !0;
      Tc(d, g, c, e);
      delete Nc[a]
    }
  }
}
function Tc(a, b, c, d) {
  if(!d.lc && d.se) {
    for(var e = 0, g = 0;e < d.length;e++) {
      if(d[e].gb) {
        var h = d[e].ze;
        h.src = l;
        Ic(h);
        Kc(d[e])
      }else {
        e != g && (d[g] = d[e]), g++
      }
    }
    d.length = g;
    d.se = !1;
    g == 0 && (Fc(d), delete M[a][b][c], M[a][b].g--, M[a][b].g == 0 && (Dc(M[a][b]), delete M[a][b], M[a].g--), M[a].g == 0 && (Dc(M[a]), delete M[a]))
  }
}
function Uc(a) {
  var b, c = 0, d = b == l;
  b = !!b;
  if(a == l) {
    Qa(Oc, function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          O(g.key), c++
        }
      }
    })
  }else {
    if(a = y(a), Oc[a]) {
      for(var a = Oc[a], e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          O(g.key), c++
        }
      }
    }
  }
}
function Sc(a, b, c) {
  var d = M;
  return b in d && (d = d[b], c in d && (d = d[c], a = y(a), d[a])) ? d[a] : l
}
function Vc(a, b, c, d, e) {
  var g = 1, b = y(b);
  if(a[b]) {
    a.T--;
    a = a[b];
    a.lc ? a.lc++ : a.lc = 1;
    try {
      for(var h = a.length, j = 0;j < h;j++) {
        var k = a[j];
        k && !k.gb && (g &= Wc(k, e) !== !1)
      }
    }finally {
      a.lc--, Tc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Wc(a, b) {
  var c = a.handleEvent(b);
  a.Hc && O(a.key);
  return c
}
Hc(function(a, b) {
  if(!Nc[a]) {
    return!0
  }
  var c = Nc[a], d = c.type, e = M;
  if(!(d in e)) {
    return!0
  }
  var e = e[d], g, h;
  oc === i && (oc = H && !r.addEventListener);
  if(oc) {
    g = b || ca("window.event");
    var j = !0 in e, k = !1 in e;
    if(j) {
      if(g.keyCode < 0 || g.returnValue != i) {
        return!0
      }
      a: {
        var n = !1;
        if(g.keyCode == 0) {
          try {
            g.keyCode = -1;
            break a
          }catch(B) {
            n = !0
          }
        }
        if(n || g.returnValue == i) {
          g.returnValue = !0
        }
      }
    }
    n = Lc();
    n.Ha(g, this);
    g = !0;
    try {
      if(j) {
        for(var o = Ec(), v = n.currentTarget;v;v = v.parentNode) {
          o.push(v)
        }
        h = e[!0];
        h.T = h.g;
        for(var z = o.length - 1;!n.Ja && z >= 0 && h.T;z--) {
          n.currentTarget = o[z], g &= Vc(h, o[z], d, !0, n)
        }
        if(k) {
          h = e[!1];
          h.T = h.g;
          for(z = 0;!n.Ja && z < o.length && h.T;z++) {
            n.currentTarget = o[z], g &= Vc(h, o[z], d, !1, n)
          }
        }
      }else {
        g = Wc(c, n)
      }
    }finally {
      if(o) {
        o.length = 0, Fc(o)
      }
      n.e();
      Mc(n)
    }
    return g
  }
  d = new tc(b, this);
  try {
    g = Wc(c, d)
  }finally {
    d.e()
  }
  return g
});
var Xc = 0;
function Yc() {
}
D(Yc, K);
q = Yc.prototype;
q.Kd = !0;
q.nc = l;
q.nd = aa("nc");
q.addEventListener = function(a, b, c, d) {
  N(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Rc(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = M;
  if(b in c) {
    if(w(a)) {
      a = new rc(a, this)
    }else {
      if(a instanceof rc) {
        a.target = a.target || this
      }else {
        var d = a, a = new rc(b, this);
        Ua(a, d)
      }
    }
    var d = 1, e, c = c[b], b = !0 in c, g;
    if(b) {
      e = [];
      for(g = this;g;g = g.nc) {
        e.push(g)
      }
      g = c[!0];
      g.T = g.g;
      for(var h = e.length - 1;!a.Ja && h >= 0 && g.T;h--) {
        a.currentTarget = e[h], d &= Vc(g, e[h], a.type, !0, a) && a.Lb != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.T = g.g, b) {
        for(h = 0;!a.Ja && h < e.length && g.T;h++) {
          a.currentTarget = e[h], d &= Vc(g, e[h], a.type, !1, a) && a.Lb != !1
        }
      }else {
        for(e = this;!a.Ja && e && g.T;e = e.nc) {
          a.currentTarget = e, d &= Vc(g, e, a.type, !1, a) && a.Lb != !1
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
q.b = function() {
  Yc.d.b.call(this);
  Uc(this);
  this.nc = l
};
var Zc = r.window;
Xc++;
Xc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function $c(a, b) {
  this.Yb = [];
  this.Wf = a;
  this.bf = b || l
}
q = $c.prototype;
q.Ta = !1;
q.Wa = !1;
q.Hb = 0;
q.Ie = !1;
q.Ze = !1;
q.Gd = function(a, b) {
  this.Ta = !0;
  this.rc = b;
  this.Wa = !a;
  ad(this);
  this.Hb--;
  this.Hb == 0 && this.Ta && ad(this)
};
q.pb = function(a) {
  if(this.Ta) {
    this.Ie || f(new bd(this)), this.Ie = !1
  }
  this.Ta = !0;
  this.rc = a;
  this.Wa = !1;
  ad(this)
};
function cd(a, b) {
  dd(a, b, l, i)
}
function dd(a, b, c, d) {
  a.Yb.push([b, c, d]);
  a.Ta && ad(a)
}
function ed(a) {
  return Ya(a.Yb, function(a) {
    return x(a[1])
  })
}
function ad(a) {
  a.vd && a.Ta && ed(a) && (r.clearTimeout(a.vd), delete a.vd);
  for(var b = a.rc, c = !1, d = !1;a.Yb.length && a.Hb == 0;) {
    var e = a.Yb.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.Wa ? h : g) {
      try {
        var j = g.call(e || a.bf, b);
        if(t(j)) {
          a.Wa = a.Wa && (j == b || j instanceof Error), a.rc = b = j
        }
        b instanceof $c && (d = !0, a.Hb++)
      }catch(k) {
        b = k, a.Wa = !0, ed(a) || (c = !0)
      }
    }
  }
  a.rc = b;
  if(d && a.Hb) {
    dd(b, A(a.Gd, a, !0), A(a.Gd, a, !1)), b.Ze = !0
  }
  if(c) {
    a.vd = r.setTimeout(function() {
      f(b)
    }, 0)
  }
}
function bd(a) {
  sa.call(this);
  this.$f = a
}
D(bd, sa);
bd.prototype.message = "Already called";
function fd(a) {
  this.I = a;
  this.Nc = [];
  this.Pd = [];
  this.Vf = A(this.Qf, this)
}
fd.prototype.Pf = l;
fd.prototype.Qf = function() {
  this.Pf = l;
  var a = this.Nc;
  this.Nc = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], e = c[1], c = c[2];
    try {
      d.apply(e, c)
    }catch(g) {
      this.I.setTimeout(function() {
        f(g)
      }, 0)
    }
  }
  if(this.Nc.length == 0) {
    a = this.Pd;
    this.Pd = [];
    for(b = 0;b < a.length;b++) {
      a[b].pb(l)
    }
  }
};
new fd(r.window);
function gd() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ C()).toString(36)
}
function hd(a) {
  return a.substr(0, a.length - 1)
}
var id = /^(0|[1-9]\d*)$/, jd = /^(0|\-?[1-9]\d*)$/;
function kd(a) {
  var b = ld;
  return id.test(a) && (a = parseInt(a, 10), a <= b) ? a : l
}
;function md(a) {
  this.m = new Hb;
  a && this.Ec(a)
}
function nd(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + y(a) : b.substr(0, 1) + a
}
q = md.prototype;
q.s = function() {
  return this.m.s()
};
q.add = function(a) {
  this.m.set(nd(a), a)
};
q.Ec = function(a) {
  for(var a = Db(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
q.ld = function(a) {
  for(var a = Db(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
q.remove = function(a) {
  return this.m.remove(nd(a))
};
q.clear = function() {
  this.m.clear()
};
q.sa = function() {
  return this.m.sa()
};
q.contains = function(a) {
  return this.m.J(nd(a))
};
q.F = function() {
  return this.m.F()
};
q.N = function() {
  return new md(this)
};
q.k = function(a) {
  return this.s() == Cb(a) && od(this, a)
};
function od(a, b) {
  var c = Cb(b);
  if(a.s() > c) {
    return!1
  }
  !(b instanceof md) && c > 5 && (b = new md(b));
  return Gb(a, function(a) {
    if(typeof b.contains == "function") {
      a = b.contains(a)
    }else {
      if(typeof b.sb == "function") {
        a = b.sb(a)
      }else {
        if(fa(b) || w(b)) {
          a = $a(b, a)
        }else {
          a: {
            for(var c in b) {
              if(b[c] == a) {
                a = !0;
                break a
              }
            }
            a = !1
          }
        }
      }
    }
    return a
  })
}
;function pd(a) {
  return qd(a || arguments.callee.caller, [])
}
function qd(a, b) {
  var c = [];
  if($a(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(rd(a) + "(");
      for(var d = a.arguments, e = 0;e < d.length;e++) {
        e > 0 && c.push(", ");
        var g;
        g = d[e];
        switch(typeof g) {
          case "object":
            g = g ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            g = String(g);
            break;
          case "boolean":
            g = g ? "true" : "false";
            break;
          case "function":
            g = (g = rd(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g
        }
        g.length > 40 && (g = g.substr(0, 40) + "...");
        c.push(g)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(qd(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function rd(a) {
  a = String(a);
  if(!sd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    sd[a] = b ? b[1] : "[Anonymous]"
  }
  return sd[a]
}
var sd = {};
function td(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
td.prototype.Gf = 0;
td.prototype.Pc = l;
td.prototype.Oc = l;
var ud = 0;
td.prototype.reset = function(a, b, c, d, e) {
  this.Gf = typeof e == "number" ? e : ud++;
  this.Le = d || C();
  this.R = a;
  this.pe = b;
  this.je = c;
  delete this.Pc;
  delete this.Oc
};
td.prototype.jb = aa("R");
function vd(a) {
  this.dd = a
}
vd.prototype.L = l;
vd.prototype.R = l;
vd.prototype.ma = l;
vd.prototype.Bb = l;
function P(a, b) {
  this.name = a;
  this.value = b
}
P.prototype.toString = m("name");
var wd = new P("SHOUT", 1200), xd = new P("SEVERE", 1E3), yd = new P("WARNING", 900), zd = new P("INFO", 800), Ad = new P("CONFIG", 700), Cd = new P("FINE", 500), Dd = new P("FINEST", 300), Ed = new P("ALL", 0), Fd = [new P("OFF", Infinity), wd, xd, yd, zd, Ad, Cd, new P("FINER", 400), Dd, Ed], Gd = l;
function Hd(a) {
  if(!Gd) {
    Gd = {};
    for(var b = 0, c;c = Fd[b];b++) {
      Gd[c.value] = c, Gd[c.name] = c
    }
  }
  return Gd[a] || l
}
q = vd.prototype;
q.getParent = m("L");
q.jb = aa("R");
function Id(a) {
  if(a.R) {
    return a.R
  }
  if(a.L) {
    return Id(a.L)
  }
  Ia("Root logger has no level set.");
  return l
}
q.log = function(a, b, c) {
  if(a.value >= Id(this).value) {
    a = this.hf(a, b, c);
    r.console && r.console.markTimeline && r.console.markTimeline("log:" + a.pe);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.Bb) {
        for(var e = 0, g = i;g = c.Bb[e];e++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
q.hf = function(a, b, c) {
  var d = new td(a, String(b), this.dd);
  if(c) {
    d.Pc = c;
    var e;
    var g = arguments.callee.caller;
    try {
      var h;
      var j = ca("window.location.href");
      if(w(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var k, n, B = !1;
        try {
          k = c.lineNumber || c.cg || "Not available"
        }catch(o) {
          k = "Not available", B = !0
        }
        try {
          n = c.fileName || c.filename || c.sourceURL || j
        }catch(v) {
          n = "Not available", B = !0
        }
        h = B || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:k, fileName:n, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + ya(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + ya(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ya(pd(g) + "-> ")
    }catch(z) {
      e = "Exception trying to expose exception! You win, we lose. " + z
    }
    d.Oc = e
  }
  return d
};
function Jd(a, b) {
  a.log(xd, b, i)
}
function Kd(a, b) {
  a.log(yd, b, i)
}
q.info = function(a, b) {
  this.log(zd, a, b)
};
function Q(a, b) {
  a.log(Cd, b, i)
}
function R(a, b) {
  a.log(Dd, b, i)
}
var Ld = {}, Md = l;
function Nd() {
  Md || (Md = new vd(""), Ld[""] = Md, Md.jb(Ad))
}
function Od() {
  Nd();
  return Md
}
function S(a) {
  Nd();
  var b;
  if(!(b = Ld[a])) {
    b = new vd(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = S(a.substr(0, c));
    if(!c.ma) {
      c.ma = {}
    }
    c.ma[d] = b;
    b.L = c;
    Ld[a] = b
  }
  return b
}
;S("cw.net.FlashSocket");
S("cw.net.FlashSocketTracker");
function Pd(a) {
  this.na = a;
  this.Gc = []
}
D(Pd, K);
Pd.prototype.a = S("cw.net.FlashSocketConduit");
Pd.prototype.Ad = function(a) {
  this.Gc ? (R(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Gc.push.apply(this.Gc, a)) : (R(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.qd.Ad(a))
};
Pd.prototype.Ed = function(a, b) {
  this.qd.Ed(a, b)
};
Pd.prototype.b = function() {
  this.a.info("in disposeInternal.");
  Pd.d.b.call(this);
  this.qd.e();
  delete this.na
};
var ld = Math.pow(2, 53);
var Qd = {We:p("<cw.eq.Wildcard>")};
function Rd(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function Sd(a, b, c) {
  var d = ea(a), e = ea(b);
  if(a == Qd || b == Qd) {
    return!0
  }else {
    if(a != l && typeof a.k == "function") {
      return c && c.push("running custom equals function on left object"), a.k(b, c)
    }else {
      if(b != l && typeof b.k == "function") {
        return c && c.push("running custom equals function on right object"), b.k(a, c)
      }else {
        if(Rd(d) || Rd(e)) {
          a = a === b
        }else {
          if(a instanceof RegExp && b instanceof RegExp) {
            a = a.toString() === b.toString()
          }else {
            if(ga(a) && ga(b)) {
              a = a.valueOf() === b.valueOf()
            }else {
              if(d == "array" && e == "array") {
                a: {
                  if(c && c.push("descending into array"), a.length != b.length) {
                    c && c.push("array length mismatch: " + a.length + ", " + b.length), a = !1
                  }else {
                    d = 0;
                    for(e = a.length;d < e;d++) {
                      if(!Sd(a[d], b[d], c)) {
                        c && c.push("earlier comparisons indicate mismatch at array item #" + d);
                        a = !1;
                        break a
                      }
                    }
                    c && c.push("ascending from array");
                    a = !0
                  }
                }
              }else {
                if(a.Ve == Tb && b.Ve == Tb) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = !1;
                        break a
                      }
                      if(!Sd(a[g], b[g], c)) {
                        c && c.push("earlier comparisons indicate mismatch at property " + g);
                        a = !1;
                        break a
                      }
                    }
                    for(g in b) {
                      if(!(g in a)) {
                        c && c.push("property " + g + " missing on left object");
                        a = !1;
                        break a
                      }
                    }
                    c && c.push("ascending from object");
                    a = !0
                  }
                }else {
                  a = a === b
                }
              }
            }
          }
        }
        return a
      }
    }
  }
}
;function T(a) {
  sa.call(this, a)
}
D(T, sa);
T.prototype.name = "cw.net.InvalidFrame";
function U() {
  var a = [];
  this.Q(a);
  return a.join("")
}
function Td() {
}
Td.prototype.k = function(a, b) {
  return!(a instanceof Td) ? !1 : Sd(Ud(this), Ud(a), b)
};
Td.prototype.B = function(a, b) {
  a.push("<HelloFrame properties=");
  F(Ud(this), a, b);
  a.push(">")
};
function Ud(a) {
  return[a.mb, a.xe, a.$d, a.Ce, a.Sb, a.Jd, a.td, a.re, a.ne, a.bd, a.le, a.Qe, a.Ke, a.V, a.kc]
}
Td.prototype.O = U;
Td.prototype.Q = function(a) {
  var b = {};
  b.tnum = this.mb;
  b.ver = this.xe;
  b.format = this.$d;
  b["new"] = this.Ce;
  b.id = this.Sb;
  b.cred = this.Jd;
  b.ming = this.td;
  b.pad = this.re;
  b.maxb = this.ne;
  if(t(this.bd)) {
    b.maxt = this.bd
  }
  b.maxia = this.le;
  b.tcpack = this.Qe;
  b.eeds = this.Ke;
  b.sack = this.V instanceof Nb ? hd((new V(this.V)).O()) : this.V;
  b.seenack = this.kc instanceof Nb ? hd((new V(this.kc)).O()) : this.kc;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new wb).Ob(b), "H")
};
function Vd(a) {
  this.lb = a
}
Vd.prototype.k = function(a) {
  return a instanceof Vd && this.lb == a.lb
};
Vd.prototype.B = function(a, b) {
  a.push("new StringFrame(");
  F(this.lb, a, b);
  a.push(")")
};
Vd.prototype.O = U;
Vd.prototype.Q = function(a) {
  a.push(this.lb, " ")
};
function Wd(a) {
  this.Zb = a
}
Wd.prototype.k = function(a) {
  return a instanceof Wd && this.Zb == a.Zb
};
Wd.prototype.B = function(a, b) {
  a.push("new CommentFrame(");
  F(this.Zb, a, b);
  a.push(")")
};
Wd.prototype.O = U;
Wd.prototype.Q = function(a) {
  a.push(this.Zb, "^")
};
function Xd(a) {
  this.Nb = a
}
Xd.prototype.k = function(a) {
  return a instanceof Xd && this.Nb == a.Nb
};
Xd.prototype.B = function(a) {
  a.push("new SeqNumFrame(", String(this.Nb), ")")
};
Xd.prototype.O = U;
Xd.prototype.Q = function(a) {
  a.push(String(this.Nb), "N")
};
function Yd(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return l
  }
  a: {
    var c = b[1], a = ld;
    if(jd.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
      a = c;
      break a
    }
    a = l
  }
  if(a == l) {
    return l
  }
  c = [];
  if(b[0]) {
    for(var b = b[0].split(","), d = 0, e = b.length;d < e;d++) {
      var g = kd(b[d]);
      if(g == l) {
        return l
      }
      c.push(g)
    }
  }
  return new Nb(a, c)
}
function V(a) {
  this.V = a
}
V.prototype.k = function(a, b) {
  return a instanceof V && this.V.k(a.V, b)
};
V.prototype.B = function(a, b) {
  a.push("new SackFrame(");
  F(this.V, a, b);
  a.push(")")
};
V.prototype.O = U;
V.prototype.Q = function(a) {
  var b = this.V;
  a.push(b.Ka.join(","), "|", String(b.Na));
  a.push("A")
};
function Zd(a) {
  this.Eb = a
}
Zd.prototype.k = function(a, b) {
  return a instanceof Zd && this.Eb.k(a.Eb, b)
};
Zd.prototype.B = function(a, b) {
  a.push("new StreamStatusFrame(");
  F(this.Eb, a, b);
  a.push(")")
};
Zd.prototype.O = U;
Zd.prototype.Q = function(a) {
  var b = this.Eb;
  a.push(b.Ka.join(","), "|", String(b.Na));
  a.push("T")
};
function $d() {
}
$d.prototype.B = function(a) {
  a.push("new StreamCreatedFrame()")
};
$d.prototype.k = function(a) {
  return a instanceof $d
};
$d.prototype.O = U;
$d.prototype.Q = function(a) {
  a.push("C")
};
function ae() {
}
ae.prototype.B = function(a) {
  a.push("new YouCloseItFrame()")
};
ae.prototype.k = function(a) {
  return a instanceof ae
};
ae.prototype.O = U;
ae.prototype.Q = function(a) {
  a.push("Y")
};
function be(a, b) {
  this.Jb = a;
  this.ob = b
}
be.prototype.k = function(a) {
  return a instanceof be && this.Jb == a.Jb && this.ob == a.ob
};
be.prototype.B = function(a, b) {
  a.push("new ResetFrame(");
  F(this.Jb, a, b);
  a.push(", ", String(this.ob), ")")
};
be.prototype.O = U;
be.prototype.Q = function(a) {
  a.push(this.Jb, "|", String(Number(this.ob)), "!")
};
var ce = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function de(a) {
  this.reason = a
}
de.prototype.k = function(a) {
  return a instanceof de && this.reason == a.reason
};
de.prototype.B = function(a, b) {
  a.push("new TransportKillFrame(");
  F(this.reason, a, b);
  a.push(")")
};
de.prototype.O = U;
de.prototype.Q = function(a) {
  a.push(this.reason, "K")
};
function ee(a) {
  a || f(new T("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new Vd(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = Yd(hd(a)), a == l && f(new T("bad sack")), new V(a)
    }else {
      if(b == "N") {
        return a = kd(hd(a)), a == l && f(new T("bad seqNum")), new Xd(a)
      }else {
        if(b == "T") {
          return a = Yd(hd(a)), a == l && f(new T("bad lastSackSeen")), new Zd(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && f(new T("leading garbage")), new ae
          }else {
            if(b == "^") {
              return new Wd(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && f(new T("leading garbage")), new $d
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && f(new T("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == l && f(new T("bad applicationLevel")), new be(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = ce[a], a == l && f(new T("unknown kill reason: " + a)), new de(a)
                  }else {
                    f(new T("Invalid frame type " + b))
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
;var fe;
fe = !1;
var ge = Zb();
ge && (ge.indexOf("Firefox") != -1 || ge.indexOf("Camino") != -1 || ge.indexOf("iPhone") != -1 || ge.indexOf("iPod") != -1 || ge.indexOf("iPad") != -1 || ge.indexOf("Android") != -1 || ge.indexOf("Chrome") != -1 && (fe = !0));
var he = fe;
var ie = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function je(a, b) {
  var c = a.match(ie), d = b.match(ie);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function ke() {
  if(cc) {
    this.Aa = {}, this.Cc = {}, this.yc = []
  }
}
ke.prototype.a = S("goog.net.xhrMonitor");
ke.prototype.P = cc;
ke.prototype.Pb = function(a) {
  this.P = cc && a
};
function le(a) {
  var b = me;
  if(b.P) {
    var c = w(a) ? a : ha(a) ? y(a) : "";
    R(b.a, "Pushing context: " + a + " (" + c + ")");
    b.yc.push(c)
  }
}
function ne() {
  var a = me;
  if(a.P) {
    var b = a.yc.pop();
    R(a.a, "Popping context: " + b);
    oe(a, b)
  }
}
function pe(a) {
  var b = me;
  if(b.P) {
    a = y(a);
    Q(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.yc.length;c++) {
      var d = b.yc[c];
      qe(b.Aa, d, a);
      qe(b.Cc, a, d)
    }
  }
}
function oe(a, b) {
  var c = a.Cc[b], d = a.Aa[b];
  c && d && (R(a.a, "Updating dependent contexts"), Wa(c, function(a) {
    Wa(d, function(b) {
      qe(this.Aa, a, b);
      qe(this.Cc, b, a)
    }, this)
  }, a))
}
function qe(a, b, c) {
  a[b] || (a[b] = []);
  $a(a[b], c) || a[b].push(c)
}
var me = new ke;
function re() {
}
re.prototype.Xb = l;
function se() {
  return te(ue)
}
var ue;
function ve() {
}
D(ve, re);
function te(a) {
  return(a = we(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function xe(a) {
  var b = {};
  we(a) && (b[0] = !0, b[1] = !0);
  return b
}
ve.prototype.Uc = l;
function we(a) {
  if(!a.Uc && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Uc = d
      }catch(e) {
      }
    }
    f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Uc
}
ue = new ve;
function ye(a) {
  this.headers = new Hb;
  this.nb = a || l
}
D(ye, Yc);
ye.prototype.a = S("goog.net.XhrIo");
var ze = /^https?:?$/i;
q = ye.prototype;
q.ka = !1;
q.f = l;
q.Bc = l;
q.Fb = "";
q.ge = "";
q.Cb = 0;
q.Db = "";
q.Mc = !1;
q.hc = !1;
q.Vc = !1;
q.Ga = !1;
q.zc = 0;
q.La = l;
q.Ee = "";
q.Sf = !1;
q.send = function(a, b, c, d) {
  this.f && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Fb = a;
  this.Db = "";
  this.Cb = 0;
  this.ge = b;
  this.Mc = !1;
  this.ka = !0;
  this.f = this.nb ? te(this.nb) : new se;
  this.Bc = this.nb ? this.nb.Xb || (this.nb.Xb = xe(this.nb)) : ue.Xb || (ue.Xb = xe(ue));
  pe(this.f);
  this.f.onreadystatechange = A(this.te, this);
  try {
    Q(this.a, Ae(this, "Opening Xhr")), this.Vc = !0, this.f.open(b, a, !0), this.Vc = !1
  }catch(e) {
    Q(this.a, Ae(this, "Error opening Xhr: " + e.message));
    Be(this, e);
    return
  }
  var a = c || "", g = this.headers.N();
  d && Fb(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.J("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Fb(g, function(a, b) {
    this.f.setRequestHeader(b, a)
  }, this);
  if(this.Ee) {
    this.f.responseType = this.Ee
  }
  if("withCredentials" in this.f) {
    this.f.withCredentials = this.Sf
  }
  try {
    if(this.La) {
      Zc.clearTimeout(this.La), this.La = l
    }
    if(this.zc > 0) {
      Q(this.a, Ae(this, "Will abort after " + this.zc + "ms if incomplete")), this.La = Zc.setTimeout(A(this.Of, this), this.zc)
    }
    Q(this.a, Ae(this, "Sending request"));
    this.hc = !0;
    this.f.send(a);
    this.hc = !1
  }catch(h) {
    Q(this.a, Ae(this, "Send error: " + h.message)), Be(this, h)
  }
};
q.dispatchEvent = function(a) {
  if(this.f) {
    le(this.f);
    try {
      return ye.d.dispatchEvent.call(this, a)
    }finally {
      ne()
    }
  }else {
    return ye.d.dispatchEvent.call(this, a)
  }
};
q.Of = function() {
  if(typeof ba != "undefined" && this.f) {
    this.Db = "Timed out after " + this.zc + "ms, aborting", this.Cb = 8, Q(this.a, Ae(this, this.Db)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function Be(a, b) {
  a.ka = !1;
  if(a.f) {
    a.Ga = !0, a.f.abort(), a.Ga = !1
  }
  a.Db = b;
  a.Cb = 5;
  Ce(a);
  De(a)
}
function Ce(a) {
  if(!a.Mc) {
    a.Mc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
q.abort = function(a) {
  if(this.f && this.ka) {
    Q(this.a, Ae(this, "Aborting")), this.ka = !1, this.Ga = !0, this.f.abort(), this.Ga = !1, this.Cb = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), De(this)
  }
};
q.b = function() {
  if(this.f) {
    if(this.ka) {
      this.ka = !1, this.Ga = !0, this.f.abort(), this.Ga = !1
    }
    De(this, !0)
  }
  ye.d.b.call(this)
};
q.te = function() {
  !this.Vc && !this.hc && !this.Ga ? this.yf() : Ee(this)
};
q.yf = function() {
  Ee(this)
};
function Ee(a) {
  if(a.ka && typeof ba != "undefined") {
    if(a.Bc[1] && a.qa() == 4 && Fe(a) == 2) {
      Q(a.a, Ae(a, "Local request error detected and ignored"))
    }else {
      if(a.hc && a.qa() == 4) {
        Zc.setTimeout(A(a.te, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.qa() == 4) {
          Q(a.a, Ae(a, "Request complete"));
          a.ka = !1;
          var b;
          a: {
            switch(Fe(a)) {
              case 0:
                b = w(a.Fb) ? a.Fb.match(ie)[1] || l : a.Fb.ia;
                b = !(b ? ze.test(b) : self.location ? ze.test(self.location.protocol) : 1);
                break a;
              case 200:
              ;
              case 204:
              ;
              case 304:
              ;
              case 1223:
                b = !0;
                break a;
              default:
                b = !1
            }
          }
          if(b) {
            a.dispatchEvent("complete"), a.dispatchEvent("success")
          }else {
            a.Cb = 6;
            var c;
            try {
              c = a.qa() > 2 ? a.f.statusText : ""
            }catch(d) {
              Q(a.a, "Can not get status: " + d.message), c = ""
            }
            a.Db = c + " [" + Fe(a) + "]";
            Ce(a)
          }
          De(a)
        }
      }
    }
  }
}
function De(a, b) {
  if(a.f) {
    var c = a.f, d = a.Bc[0] ? s : l;
    a.f = l;
    a.Bc = l;
    if(a.La) {
      Zc.clearTimeout(a.La), a.La = l
    }
    b || (le(c), a.dispatchEvent("ready"), ne());
    var e = me;
    if(e.P) {
      var g = y(c);
      Q(e.a, "Closing XHR : " + g);
      delete e.Cc[g];
      for(var h in e.Aa) {
        ab(e.Aa[h], g), e.Aa[h].length == 0 && delete e.Aa[h]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(j) {
      Jd(a.a, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
q.ce = function() {
  return!!this.f
};
q.qa = function() {
  return this.f ? this.f.readyState : 0
};
function Fe(a) {
  try {
    return a.qa() > 2 ? a.f.status : -1
  }catch(b) {
    return Kd(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.f && this.qa() == 4 ? this.f.getResponseHeader(a) : i
};
function Ae(a, b) {
  return b + " [" + a.ge + " " + a.Fb + " " + Fe(a) + "]"
}
;function Ge(a, b, c) {
  this.na = b;
  this.U = a;
  this.Ic = c
}
D(Ge, K);
q = Ge.prototype;
q.a = S("cw.net.XHRMaster");
q.xa = -1;
q.ad = function(a, b, c) {
  this.Ic.__XHRSlave_makeRequest(this.U, a, b, c)
};
q.qa = m("xa");
q.fd = function(a, b) {
  b != He && Jd(this.a, G(this.U) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Ie(this.na);
  a: {
    var c = this.na;
    c.xc = !0;
    try {
      for(var d = !1, e = [], g = 0, h = a.length;g < h;g++) {
        if(c.X) {
          c.a.info(c.p() + " returning from loop because we're disposed.");
          break a
        }
        if(d = Je(c, a[g], e)) {
          break
        }
      }
      e.length && Ke(c, e);
      c.xc = !1;
      c.z.length && c.fa();
      d && (R(c.a, c.p() + " closeSoon is true.  Frames were: " + G(a)), c.e())
    }finally {
      c.xc = !1
    }
  }
};
q.gd = function(a) {
  Q(this.a, "ongotheaders_: " + G(a));
  var b = l;
  "Content-Length" in a && (b = kd(a["Content-Length"]));
  a = this.na;
  Q(a.a, a.p() + " got Content-Length: " + b);
  a.aa == Le && (b == l && (Kd(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Me(a, 2E3 + b / 3072 * 1E3))
};
q.hd = function(a) {
  a != 1 && Q(this.a, this.na.p() + "'s XHR's readyState is " + a);
  this.xa = a;
  this.xa >= 2 && Ie(this.na)
};
q.ed = function() {
  this.na.e()
};
q.b = function() {
  Ge.d.b.call(this);
  delete W.ha[this.U];
  this.Ic.__XHRSlave_dispose(this.U);
  delete this.Ic
};
function Ne() {
  this.ha = {}
}
D(Ne, K);
q = Ne.prototype;
q.a = S("cw.net.XHRMasterTracker");
q.Id = function(a, b) {
  var c = "_" + gd(), d = new Ge(c, a, b);
  return this.ha[c] = d
};
q.fd = function(a, b, c) {
  var b = bb(b), d = this.ha[a];
  d ? d.fd(b, c) : Jd(this.a, "onframes_: no master for " + G(a))
};
q.gd = function(a, b) {
  var c = this.ha[a];
  c ? c.gd(b) : Jd(this.a, "ongotheaders_: no master for " + G(a))
};
q.hd = function(a, b) {
  var c = this.ha[a];
  c ? c.hd(b) : Jd(this.a, "onreadystatechange_: no master for " + G(a))
};
q.ed = function(a) {
  var b = this.ha[a];
  b ? (delete this.ha[b.U], b.ed()) : Jd(this.a, "oncomplete_: no master for " + G(a))
};
q.b = function() {
  Ne.d.b.call(this);
  for(var a = Ra(this.ha);a.length;) {
    a.pop().e()
  }
  delete this.ha
};
var W = new Ne;
r.__XHRMaster_onframes = A(W.fd, W);
r.__XHRMaster_oncomplete = A(W.ed, W);
r.__XHRMaster_ongotheaders = A(W.gd, W);
r.__XHRMaster_onreadystatechange = A(W.hd, W);
function Oe() {
  Pe.info("Waiting for XDRFrames (may take a while)...");
  var a = new $c, b = r.__XDRSetup.done.length, c;
  r.__XDRSetup.done = {push:function() {
    b += 1;
    c = 2 - b;
    c || (Pe.info("Got XDRFrames after waiting."), a.pb(l))
  }};
  c = 2 - b;
  c || (Pe.info("Already had all XDRFrames."), a.pb(l));
  return a
}
var Pe = S("cw.net.waitForXDRFrames");
function Qe(a, b, c, d) {
  this.pc = a;
  this.we = b;
  this.tc = c;
  this.Ge = d;
  (!(this.pc.indexOf("http://") == 0 || this.pc.indexOf("https://") == 0) || !(this.tc.indexOf("http://") == 0 || this.tc.indexOf("https://") == 0)) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.we.location.href;
  je(this.pc, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Ge.location.href;
  je(this.tc, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
var Re = new Wd(";)]}"), Se = "disconnected_" + Xc++;
function Te(a, b, c, d) {
  this.D = a;
  this.ye = b;
  this.da = c;
  this.Je = d;
  this.Tb = new md;
  this.Sb = gd() + gd();
  this.wa = new Ob;
  this.Wc = new Qb;
  this.Wb = l;
  if(I) {
    this.Wb = Qc(r, "load", this.Ef, !1, this)
  }
}
D(Te, Yc);
q = Te.prototype;
q.a = S("cw.net.Stream");
q.he = new Nb(-1, []);
q.ie = new Nb(-1, []);
q.vf = 50;
q.uf = 1048576;
q.rd = !1;
q.md = !1;
q.j = 1;
q.Oe = -1;
q.i = l;
q.w = l;
q.Kb = l;
q.sd = 0;
q.ve = 0;
q.Fe = 0;
q.Af = !0;
q.B = function(a, b) {
  a.push("<Stream id=");
  F(this.Sb, a, b);
  a.push(", state=", String(this.j));
  a.push(", primary=");
  F(this.i, a, b);
  a.push(", secondary=");
  F(this.w, a, b);
  a.push(", resetting=");
  F(this.Kb, a, b)
};
function Ue(a) {
  var b = [-1];
  a.i && b.push(a.i.cb);
  a.w && b.push(a.w.cb);
  return Math.max.apply(Math.max, b)
}
function Ve(a) {
  if(a.j != 1) {
    var b = a.wa.H.s() != 0, c = Rb(a.Wc), d = !c.k(a.ie) && !(a.i && c.k(a.i.ab) || a.w && c.k(a.w.ab)), e = Ue(a);
    if((b = b && e < a.wa.Pa) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.i.qb) {
        R(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.i, c != d.ab)) {
          !d.ja && !d.z.length && We(d), d.z.push(new V(c)), d.ab = c
        }
        b && Xe(a.i, a.wa, e + 1);
        a.i.fa()
      }else {
        a.w == l ? a.rd ? (R(a.a, "tryToSend_: creating secondary to send " + g), a.w = Ye(a, !1), b && Xe(a.w, a.wa, e + 1), a.w.fa()) : (R(a.a, "tryToSend_: not creating a secondary because Stream might not exist on server"), a.md = !0) : R(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
q.Ef = function() {
  this.Wb = l;
  if(this.i && this.i.Xa()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.i;
    a.Dc = !0;
    a.e()
  }
  if(this.w && this.w.Xa()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.w, a.Dc = !0, a.e()
  }
};
function Ze(a, b) {
  a.j > 2 && f(Error("sendStrings: Can't send strings in state " + a.j));
  if(b.length) {
    if(a.Af) {
      for(var c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || f(Error("sendStrings: string #" + c + " has illegal chars: " + G(d)))
      }
    }
    a.wa.extend(b);
    Ve(a)
  }
}
function Ye(a, b) {
  var c;
  a.da instanceof Qe ? c = (Boolean(Number((new $e(document.location)).S.get("httpStreaming", "0"))) ? 2 : 1) == 1 ? Le : af : f(Error("Don't support endpoint " + G(a.da)));
  a.Oe += 1;
  c = new bf(a.D, a, a.Oe, c, a.da, b);
  R(a.a, "Created: " + c.p());
  a.Tb.add(c);
  return c
}
function cf(a, b, c) {
  var d = new df(a.D, a, b, c);
  R(a.a, "Created: " + d.p() + ", delay=" + b + ", times=" + c);
  a.Tb.add(d);
  return d
}
function ef(a, b) {
  a.Tb.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  Q(a.a, "Offline: " + b.p());
  b.oc ? a.sd += b.oc : a.sd = 0;
  a.sd >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), ff("stream penalty reached limit", !1), a.e());
  if(a.j > 2) {
    a.j == 3 && b.Ue ? (Q(a.a, "Disposing because resettingTransport_ is done."), a.e()) : Q(a.a, "Not creating a transport because Stream is in state " + a.j)
  }else {
    var c;
    var d;
    c = b instanceof df;
    if(!c && b.Dc) {
      var e = I ? he ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      R(a.a, "getDelayForNextTransport_: " + G({delay:c, times:d}))
    }else {
      d = b.Fd();
      if(b == a.i) {
        if(d) {
          e = ++a.ve
        }else {
          if(!c) {
            e = a.ve = 0
          }
        }
      }else {
        if(d) {
          e = ++a.Fe
        }else {
          if(!c) {
            e = a.Fe = 0
          }
        }
      }
      if(c || !e) {
        d = c = 0, R(a.a, "getDelayForNextTransport_: " + G({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(Math.random() * 4E3) - 2E3, j = Math.max(0, b.Pe - b.ud);
        d = (c = Math.max(0, g + h - j)) ? 1 : 0;
        R(a.a, "getDelayForNextTransport_: " + G({count:e, base:g, variance:h, oldDuration:j, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    if(b == a.i) {
      a.i = l, c ? a.i = cf(a, e, c) : (e = Ue(a), a.i = Ye(a, !0), Xe(a.i, a.wa, e + 1)), a.i.fa()
    }else {
      if(b == a.w) {
        a.w = l, c ? (a.w = cf(a, e, c), a.w.fa()) : Ve(a)
      }
    }
  }
}
q.reset = function(a) {
  this.j > 2 && f(Error("reset: Can't send reset in state " + this.j));
  this.j = 3;
  this.i && this.i.qb ? (this.a.info("reset: Sending ResetFrame over existing primary."), gf(this.i, a), this.i.fa()) : (this.i && (Q(this.a, "reset: Disposing primary before sending ResetFrame."), this.i.e()), this.w && (Q(this.a, "reset: Disposing secondary before sending ResetFrame."), this.w.e()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Kb = Ye(this, !1), gf(this.Kb, a), this.Kb.fa());
  ff(a, !0)
};
function hf(a, b, c, d) {
  var e;
  e = a.Wc;
  for(var g = a.vf, h = a.uf, j = [], k = !1, n = 0, B = c.length;n < B;n++) {
    var o = c[n], v = o[0], o = o[1];
    if(v == e.$a + 1) {
      e.$a += 1;
      for(j.push(o);;) {
        v = e.$a + 1;
        o = e.za.get(v, Sb);
        if(o === Sb) {
          break
        }
        j.push(o[0]);
        e.za.remove(v);
        e.ya -= o[1];
        e.$a = v
      }
    }else {
      if(!(v <= e.$a)) {
        if(g != l && e.za.s() >= g) {
          k = !0;
          break
        }
        var z = Mb(o);
        if(h != l && e.ya + z > h) {
          k = !0;
          break
        }
        e.za.set(v, [o, z]);
        e.ya += z
      }
    }
  }
  e.za.sa() && e.za.clear();
  e = [j, k];
  c = e[0];
  e = e[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      h = a.ye;
      j = vb(c[g]);
      k = j[1];
      if(j[0] == 1) {
        k = h.ue.Kc(jf.yb(), k);
        h = mb(k, 1);
        j = mb(k, 2);
        k = mb(k, 3);
        (h = ua(h)) || (h = "[No title]");
        n = ra(ya(k));
        B = document;
        k = B.createElement("div");
        H ? (k.innerHTML = "<br>" + n, k.removeChild(k.firstChild)) : k.innerHTML = n;
        if(k.childNodes.length == 1) {
          k = k.removeChild(k.firstChild)
        }else {
          for(n = B.createDocumentFragment();k.firstChild;) {
            n.appendChild(k.firstChild)
          }
          k = n
        }
        h = kf("span", {}, kf("a", {href:j, "class":"ljpost-title-link"}, h), kf("span", {}, "\u00a0"), k);
        lf(h)
      }
      if(a.j == 3 || a.X) {
        return
      }
    }
  }
  d || Ve(a);
  if(!(a.j == 3 || a.X) && e) {
    Jd(b.a, b.p() + "'s peer caused rwin overflow."), b.e()
  }
}
q.start = function() {
  this.j = 2;
  this.i = Ye(this, !0);
  Xe(this.i, this.wa, l);
  this.i.fa()
};
q.b = function() {
  this.a.info(G(this) + " in disposeInternal.");
  this.j = 4;
  for(var a = this.Tb.F(), b = 0;b < a.length;b++) {
    a[b].e()
  }
  this.dispatchEvent({type:Se});
  if(I && this.Wb) {
    O(this.Wb), this.Wb = l
  }
  delete this.Tb;
  delete this.i;
  delete this.w;
  delete this.Kb;
  delete this.ye;
  Te.d.b.call(this)
};
var Le = 1, af = 2, mf = 3;
function bf(a, b, c, d, e, g) {
  this.D = a;
  this.t = b;
  this.mb = c;
  this.aa = d;
  this.da = e;
  this.z = [];
  this.Oa = g;
  this.qb = !this.Xa();
  this.hb = this.aa != Le;
  this.Ye = A(this.Nf, this)
}
D(bf, K);
q = bf.prototype;
q.a = S("cw.net.ClientTransport");
q.n = l;
q.ud = l;
q.Pe = l;
q.qc = l;
q.ja = !1;
q.xc = !1;
q.ab = l;
q.Rc = 0;
q.cb = -1;
q.jd = -1;
q.Ue = !1;
q.Dc = !1;
q.oc = 0;
q.Ab = !1;
q.B = function(a) {
  a.push("<ClientTransport #", String(this.mb), ", becomePrimary=", String(this.Oa), ">")
};
q.p = function() {
  return(this.Oa ? "Prim. T#" : "Sec. T#") + this.mb
};
q.Fd = function() {
  return!(!this.Ab && this.Rc)
};
q.Xa = function() {
  return this.aa == Le || this.aa == af
};
function Ke(a, b) {
  gb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  hf(a.t, a, b, !a.hb)
}
function Je(a, b, c) {
  try {
    var d = ee(b);
    a.Rc += 1;
    Q(a.a, a.p() + " RECV " + G(d));
    var e;
    a.Rc == 1 && !d.k(Re) && a.Xa() ? (Kd(a.a, a.p() + " is closing soon because got bad preamble: " + G(d)), e = !0) : e = !1;
    if(e) {
      return!0
    }
    if(d instanceof Vd) {
      if(!/^([ -~]*)$/.test(d.lb)) {
        return a.Ab = !0
      }
      a.jd += 1;
      c.push([a.jd, d.lb])
    }else {
      if(d instanceof V) {
        var g = a.t, h = d.V;
        g.he = h;
        var j = g.wa, k = h.Na, c = !1;
        k > j.Pa && (c = !0);
        for(var n = Pb(j).concat(), d = 0;d < n.length;d++) {
          var B = n[d];
          if(B > k) {
            break
          }
          var o = j.H.m[B][1];
          j.H.remove(B);
          j.ya -= o
        }
        for(d = 0;d < h.Ka.length;d++) {
          var v = h.Ka[d];
          v > j.Pa && (c = !0);
          j.H.J(v) && (o = j.H.m[v][1], j.H.remove(v), j.ya -= o)
        }
        j.H.sa() && j.H.clear();
        if(c) {
          return Kd(a.a, a.p() + " is closing soon because got bad SackFrame"), a.Ab = !0
        }
      }else {
        if(d instanceof Xd) {
          a.jd = d.Nb - 1
        }else {
          if(d instanceof Zd) {
            a.t.ie = d.Eb
          }else {
            if(d instanceof ae) {
              return R(a.a, a.p() + " is closing soon because got YouCloseItFrame"), !0
            }else {
              if(d instanceof de) {
                return a.Ab = !0, d.reason == "stream_attach_failure" ? a.oc += 1 : d.reason == "acked_unsent_strings" && (a.oc += 0.5), R(a.a, a.p() + " is closing soon because got " + G(d)), !0
              }else {
                if(!(d instanceof Wd)) {
                  if(d instanceof $d) {
                    var z = a.t, ph = !a.hb;
                    R(z.a, "Stream is now confirmed to exist at server.");
                    z.rd = !0;
                    if(z.md && !ph) {
                      z.md = !1, Ve(z)
                    }
                  }else {
                    if(c.length) {
                      Ke(a, c);
                      if(!u(c)) {
                        for(var Bd = c.length - 1;Bd >= 0;Bd--) {
                          delete c[Bd]
                        }
                      }
                      c.length = 0
                    }
                    if(d instanceof be) {
                      var qh = a.t;
                      ff(d.Jb, d.ob);
                      qh.e();
                      return!0
                    }else {
                      f(Error(a.p() + " had unexpected state in framesReceived_."))
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }catch(zf) {
    return zf instanceof T || f(zf), Kd(a.a, a.p() + " is closing soon because got InvalidFrame: " + G(b)), a.Ab = !0
  }
  return!1
}
q.Nf = function() {
  Kd(this.a, this.p() + " timed out due to lack of connection or no data being received.");
  this.e()
};
function nf(a) {
  if(a.qc != l) {
    a.D.I.clearTimeout(a.qc), a.qc = l
  }
}
function Me(a, b) {
  nf(a);
  b = Math.round(b);
  a.qc = a.D.I.setTimeout(a.Ye, b);
  Q(a.a, a.p() + "'s receive timeout set to " + b + " ms.")
}
function Ie(a) {
  a.aa != Le && (a.aa == mf || a.aa == af ? Me(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.aa)))
}
function We(a) {
  var b = new Td;
  b.mb = a.mb;
  b.xe = 2;
  b.$d = 2;
  if(!a.t.rd) {
    b.Ce = !0;
    var c = of.get(window.location.protocol == "https:" ? a.t.Je.pf : a.t.Je.nf);
    b.Jd = (t(c) ? c : l) + "|" + r.CSRF_TOKEN
  }
  b.Sb = a.t.Sb;
  b.td = a.hb;
  if(b.td) {
    b.re = 4096
  }
  b.ne = 3E5;
  b.le = a.hb ? Math.floor(10) : 0;
  b.Qe = !1;
  if(a.Oa) {
    b.Ke = l, b.bd = Math.floor((a.hb ? 358E4 : 25E3) / 1E3)
  }
  b.V = Rb(a.t.Wc);
  b.kc = a.t.he;
  a.z.push(b);
  a.ab = b.V
}
q.fa = function() {
  this.ja && !this.qb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.xc) {
    R(this.a, this.p() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.ja;
    this.ja = !0;
    !a && !this.z.length && We(this);
    for(a = 0;a < this.z.length;a++) {
      Q(this.a, this.p() + " SEND " + G(this.z[a]))
    }
    if(this.Xa()) {
      for(var a = [], b = 0, c = this.z.length;b < c;b++) {
        this.z[b].Q(a), a.push("\n")
      }
      this.z = [];
      a = a.join("");
      b = this.Oa ? this.da.pc : this.da.tc;
      this.n = W.Id(this, this.Oa ? this.da.we : this.da.Ge);
      this.ud = this.D.I === Zc ? C() : this.D.I.getTime();
      this.n.ad(b, "POST", a);
      Me(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.hb ? 0 : this.Oa ? 25E3 : 2))
    }else {
      if(this.aa == mf) {
        a = [];
        b = 0;
        for(c = this.z.length;b < c;b++) {
          a.push(this.z[b].O())
        }
        this.z = [];
        this.n ? this.n.Ad(a) : (b = this.da, this.n = new Pd(this), this.n.qd = b.gg.Id(this.n), this.ud = this.D.I === Zc ? C() : this.D.I.getTime(), this.n.Ed(b.host, b.port), this.n.X || (this.n.Ad(a), this.n.X || Me(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.aa))
      }
    }
  }
};
function Xe(a, b, c) {
  !a.ja && !a.z.length && We(a);
  for(var d = Math.max(c, a.cb + 1), e = Pb(b), c = [], g = 0;g < e.length;g++) {
    var h = e[g];
    (d == l || h >= d) && c.push([h, b.H.m[h][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], e = g[0], g = g[1], (a.cb == -1 || a.cb + 1 != e) && a.z.push(new Xd(e)), a.z.push(new Vd(g)), a.cb = e
  }
}
q.b = function() {
  this.a.info(this.p() + " in disposeInternal.");
  bf.d.b.call(this);
  this.Pe = this.D.I === Zc ? C() : this.D.I.getTime();
  this.z = [];
  nf(this);
  this.n && this.n.e();
  var a = this.t;
  this.t = l;
  ef(a, this)
};
function gf(a, b) {
  !a.ja && !a.z.length && We(a);
  a.z.push(new be(b, !0));
  a.Ue = !0
}
function df(a, b, c, d) {
  this.D = a;
  this.t = b;
  this.Md = c;
  this.Hd = d
}
D(df, K);
q = df.prototype;
q.ja = !1;
q.qb = !1;
q.fc = l;
q.ab = l;
q.a = S("cw.net.DoNothingTransport");
function pf(a) {
  a.fc = a.D.I.setTimeout(function() {
    a.fc = l;
    a.Hd--;
    a.Hd ? pf(a) : a.e()
  }, a.Md)
}
q.fa = function() {
  this.ja && !this.qb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.ja = !0;
  pf(this)
};
q.B = function(a) {
  a.push("<DoNothingTransport delay=", String(this.Md), ">")
};
q.Xa = p(!1);
q.p = p("Wast. T");
q.Fd = p(!1);
q.b = function() {
  this.a.info(this.p() + " in disposeInternal.");
  df.d.b.call(this);
  this.fc != l && this.D.I.clearTimeout(this.fc);
  var a = this.t;
  this.t = l;
  ef(a, this)
};
function $e(a, b) {
  var c;
  a instanceof $e ? (this.ib(b == l ? a.Z : b), qf(this, a.ia), rf(this, a.Vb), sf(this, a.Ca), tf(this, a.fb), uf(this, a.Ia), vf(this, a.S.N()), wf(this, a.xb)) : a && (c = String(a).match(ie)) ? (this.ib(!!b), qf(this, c[1] || "", !0), rf(this, c[2] || "", !0), sf(this, c[3] || "", !0), tf(this, c[4]), uf(this, c[5] || "", !0), vf(this, c[6] || "", !0), wf(this, c[7] || "", !0)) : (this.ib(!!b), this.S = new xf(l, this, this.Z))
}
q = $e.prototype;
q.ia = "";
q.Vb = "";
q.Ca = "";
q.fb = l;
q.Ia = "";
q.xb = "";
q.sf = !1;
q.Z = !1;
q.toString = function() {
  if(this.W) {
    return this.W
  }
  var a = [];
  this.ia && a.push(yf(this.ia, Af), ":");
  this.Ca && (a.push("//"), this.Vb && a.push(yf(this.Vb, Af), "@"), a.push(w(this.Ca) ? encodeURIComponent(this.Ca) : l), this.fb != l && a.push(":", String(this.fb)));
  this.Ia && (this.Ca && this.Ia.charAt(0) != "/" && a.push("/"), a.push(yf(this.Ia, this.Ia.charAt(0) == "/" ? Bf : Cf)));
  var b = String(this.S);
  b && a.push("?", b);
  this.xb && a.push("#", yf(this.xb, Df));
  return this.W = a.join("")
};
q.N = function() {
  var a = this.ia, b = this.Vb, c = this.Ca, d = this.fb, e = this.Ia, g = this.S.N(), h = this.xb, j = new $e(l, this.Z);
  a && qf(j, a);
  b && rf(j, b);
  c && sf(j, c);
  d && tf(j, d);
  e && uf(j, e);
  g && vf(j, g);
  h && wf(j, h);
  return j
};
function qf(a, b, c) {
  Ef(a);
  delete a.W;
  a.ia = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.ia) {
    a.ia = a.ia.replace(/:$/, "")
  }
}
function rf(a, b, c) {
  Ef(a);
  delete a.W;
  a.Vb = c ? b ? decodeURIComponent(b) : "" : b
}
function sf(a, b, c) {
  Ef(a);
  delete a.W;
  a.Ca = c ? b ? decodeURIComponent(b) : "" : b
}
function tf(a, b) {
  Ef(a);
  delete a.W;
  b ? (b = Number(b), (isNaN(b) || b < 0) && f(Error("Bad port number " + b)), a.fb = b) : a.fb = l
}
function uf(a, b, c) {
  Ef(a);
  delete a.W;
  a.Ia = c ? b ? decodeURIComponent(b) : "" : b
}
function vf(a, b, c) {
  Ef(a);
  delete a.W;
  b instanceof xf ? (a.S = b, a.S.wd = a, a.S.ib(a.Z)) : (c || (b = yf(b, Ff)), a.S = new xf(b, a, a.Z))
}
function wf(a, b, c) {
  Ef(a);
  delete a.W;
  a.xb = c ? b ? decodeURIComponent(b) : "" : b
}
function Ef(a) {
  a.sf && f(Error("Tried to modify a read-only Uri"))
}
q.ib = function(a) {
  this.Z = a;
  this.S && this.S.ib(a);
  return this
};
var Gf = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function yf(a, b) {
  var c = l;
  w(a) && (c = a, Gf.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, Hf)));
  return c
}
function Hf(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Af = /[#\/\?@]/g, Cf = /[\#\?:]/g, Bf = /[\#\?]/g, Ff = /[\#\?@]/g, Df = /#/g;
function xf(a, b, c) {
  this.ca = a || l;
  this.wd = b || l;
  this.Z = !!c
}
function If(a) {
  if(!a.l && (a.l = new Hb, a.ca)) {
    for(var b = a.ca.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = l, g = l;
      d >= 0 ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = Jf(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
q = xf.prototype;
q.l = l;
q.g = l;
q.s = function() {
  If(this);
  return this.g
};
q.add = function(a, b) {
  If(this);
  Kf(this);
  a = Jf(this, a);
  if(this.J(a)) {
    var c = this.l.get(a);
    u(c) ? c.push(b) : this.l.set(a, [c, b])
  }else {
    this.l.set(a, b)
  }
  this.g++;
  return this
};
q.remove = function(a) {
  If(this);
  a = Jf(this, a);
  if(this.l.J(a)) {
    Kf(this);
    var b = this.l.get(a);
    u(b) ? this.g -= b.length : this.g--;
    return this.l.remove(a)
  }
  return!1
};
q.clear = function() {
  Kf(this);
  this.l && this.l.clear();
  this.g = 0
};
q.sa = function() {
  If(this);
  return this.g == 0
};
q.J = function(a) {
  If(this);
  a = Jf(this, a);
  return this.l.J(a)
};
q.sb = function(a) {
  var b = this.F();
  return $a(b, a)
};
q.ga = function() {
  If(this);
  for(var a = this.l.F(), b = this.l.ga(), c = [], d = 0;d < b.length;d++) {
    var e = a[d];
    if(u(e)) {
      for(var g = 0;g < e.length;g++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
q.F = function(a) {
  If(this);
  if(a) {
    if(a = Jf(this, a), this.J(a)) {
      var b = this.l.get(a);
      if(u(b)) {
        return b
      }else {
        a = [], a.push(b)
      }
    }else {
      a = []
    }
  }else {
    for(var b = this.l.F(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      u(d) ? db(a, d) : a.push(d)
    }
  }
  return a
};
q.set = function(a, b) {
  If(this);
  Kf(this);
  a = Jf(this, a);
  if(this.J(a)) {
    var c = this.l.get(a);
    u(c) ? this.g -= c.length : this.g--
  }
  this.l.set(a, b);
  this.g++;
  return this
};
q.get = function(a, b) {
  If(this);
  a = Jf(this, a);
  if(this.J(a)) {
    var c = this.l.get(a);
    return u(c) ? c[0] : c
  }else {
    return b
  }
};
q.toString = function() {
  if(this.ca) {
    return this.ca
  }
  if(!this.l) {
    return""
  }
  for(var a = [], b = 0, c = this.l.ga(), d = 0;d < c.length;d++) {
    var e = c[d], g = wa(e), e = this.l.get(e);
    if(u(e)) {
      for(var h = 0;h < e.length;h++) {
        b > 0 && a.push("&"), a.push(g), e[h] !== "" && a.push("=", wa(e[h])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(g), e !== "" && a.push("=", wa(e)), b++
    }
  }
  return this.ca = a.join("")
};
function Kf(a) {
  delete a.Jc;
  delete a.ca;
  a.wd && delete a.wd.W
}
q.N = function() {
  var a = new xf;
  if(this.Jc) {
    a.Jc = this.Jc
  }
  if(this.ca) {
    a.ca = this.ca
  }
  if(this.l) {
    a.l = this.l.N()
  }
  return a
};
function Jf(a, b) {
  var c = String(b);
  a.Z && (c = c.toLowerCase());
  return c
}
q.ib = function(a) {
  a && !this.Z && (If(this), Kf(this), Fb(this.l, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.Z = a
};
q.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Fb(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
(function() {
  function a(a) {
    a.match(/[\d]+/g).length = 3
  }
  var b = !1;
  if(navigator.plugins && navigator.plugins.length) {
    var c = navigator.plugins["Shockwave Flash"];
    c && (b = !0, c.description && a(c.description));
    navigator.plugins["Shockwave Flash 2.0"] && (b = !0)
  }else {
    if(navigator.mimeTypes && navigator.mimeTypes.length) {
      (b = (c = navigator.mimeTypes["application/x-shockwave-flash"]) && c.enabledPlugin) && a(c.enabledPlugin.description)
    }else {
      try {
        c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), b = !0, a(c.GetVariable("$version"))
      }catch(d) {
        try {
          c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = !0
        }catch(e) {
          try {
            c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = !0, a(c.GetVariable("$version"))
          }catch(g) {
          }
        }
      }
    }
  }
})();
function Lf(a, b) {
  this.x = t(a) ? a : 0;
  this.y = t(b) ? b : 0
}
Lf.prototype.N = function() {
  return new Lf(this.x, this.y)
};
Lf.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function Mf(a, b) {
  this.width = a;
  this.height = b
}
q = Mf.prototype;
q.N = function() {
  return new Mf(this.width, this.height)
};
q.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
q.sa = function() {
  return!(this.width * this.height)
};
q.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
q.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
var Nf;
function Of(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function Pf(a, b) {
  var c = Of(a), d = fb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    $a(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function Qf(a, b) {
  var c = Of(a), d = fb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < e.length;h++) {
    $a(d, e[h]) && (eb(e, h--, 1), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
;var Rf = !H || J("9");
!cc && !H || H && J("9") || cc && J("1.9.1");
var Sf = H && !J("9");
function Tf(a) {
  return a ? new Uf(Vf(a)) : Nf || (Nf = new Uf)
}
function X(a) {
  return w(a) ? document.getElementById(a) : a
}
function Wf(a, b) {
  Qa(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in Xf ? a.setAttribute(Xf[d], b) : a[d] = b
  })
}
var Xf = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Yf() {
  var a = Zf.C.parentWindow || Zf.C.defaultView || window, b = a.document;
  if(I && !J("500") && !dc) {
    typeof a.innerHeight == "undefined" && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new Mf(a.innerWidth, b)
  }
  a = b.compatMode == "CSS1Compat" ? b.documentElement : b.body;
  return new Mf(a.clientWidth, a.clientHeight)
}
function kf(a, b, c) {
  return $f(document, arguments)
}
function $f(a, b) {
  var c = b[0], d = b[1];
  if(!Rf && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', ya(d.name), '"');
    if(d.type) {
      c.push(' type="', ya(d.type), '"');
      var e = {};
      Ua(e, d);
      d = e;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  if(d) {
    w(d) ? c.className = d : u(d) ? Pf.apply(l, [c].concat(d)) : Wf(c, d)
  }
  b.length > 2 && ag(a, c, b, 2);
  return c
}
function ag(a, b, c, d) {
  function e(c) {
    c && b.appendChild(w(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    fa(g) && !(ha(g) && g.nodeType > 0) ? Wa(bg(g) ? cb(g) : g, e) : e(g)
  }
}
function cg(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function dg(a, b) {
  if(a.contains && b.nodeType == 1) {
    return a == b || a.contains(b)
  }
  if(typeof a.compareDocumentPosition != "undefined") {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
}
function Vf(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
var eg = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, fg = {IMG:" ", BR:"\n"};
function gg(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, typeof a == "number" && a >= 0) : !1
}
function hg(a) {
  var b = [];
  ig(a, b, !1);
  return b.join("")
}
function ig(a, b, c) {
  if(!(a.nodeName in eg)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in fg) {
        b.push(fg[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          ig(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function bg(a) {
  if(a && typeof a.length == "number") {
    if(ha(a)) {
      return typeof a.item == "function" || typeof a.item == "string"
    }else {
      if(x(a)) {
        return typeof a.item == "function"
      }
    }
  }
  return!1
}
function Uf(a) {
  this.C = a || r.document || document
}
q = Uf.prototype;
q.zb = Tf;
q.h = function(a) {
  return w(a) ? this.C.getElementById(a) : a
};
q.r = function(a, b, c) {
  return $f(this.C, arguments)
};
q.createElement = function(a) {
  return this.C.createElement(a)
};
q.createTextNode = function(a) {
  return this.C.createTextNode(a)
};
q.appendChild = function(a, b) {
  a.appendChild(b)
};
q.append = function(a, b) {
  ag(Vf(a), a, arguments, 1)
};
q.contains = dg;
var jg = cc ? "MozUserSelect" : I ? "WebkitUserSelect" : l;
function kg(a) {
  this.Yd = a
}
D(kg, K);
var lg = new L(0, 100), mg = [];
function ng(a, b, c, d) {
  u(c) || (mg[0] = c, c = mg);
  for(var e = 0;e < c.length;e++) {
    var g = a, h = N(b, c[e], d || a, !1, a.Yd || a);
    g.c ? g.c[h] = !0 : g.ua ? (g.c = lg.getObject(), g.c[g.ua] = !0, g.ua = l, g.c[h] = !0) : g.ua = h
  }
  return a
}
function og(a, b, c, d, e, g) {
  if(a.ua || a.c) {
    if(u(c)) {
      for(var h = 0;h < c.length;h++) {
        og(a, b, c[h], d, e, g)
      }
    }else {
      a: {
        d = d || a;
        g = g || a.Yd || a;
        e = !!e;
        if(b = Sc(b, c, e)) {
          for(c = 0;c < b.length;c++) {
            if(b[c].bb == d && b[c].capture == e && b[c].gc == g) {
              b = b[c];
              break a
            }
          }
        }
        b = l
      }
      if(b) {
        if(b = b.key, O(b), a.c) {
          c = a.c, b in c && delete c[b]
        }else {
          if(a.ua == b) {
            a.ua = l
          }
        }
      }
    }
  }
  return a
}
kg.prototype.ld = function() {
  if(this.c) {
    for(var a in this.c) {
      O(a), delete this.c[a]
    }
    Ac(lg, this.c);
    this.c = l
  }else {
    this.ua && O(this.ua)
  }
};
kg.prototype.b = function() {
  kg.d.b.call(this);
  this.ld()
};
kg.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function pg() {
}
da(pg);
pg.prototype.xf = 0;
pg.Ua();
function qg(a) {
  this.Ba = a || Tf();
  this.Mb = rg
}
D(qg, Yc);
qg.prototype.qf = pg.Ua();
var rg = l;
function sg(a, b) {
  switch(a) {
    case 1:
      return b ? "disable" : "enable";
    case 2:
      return b ? "highlight" : "unhighlight";
    case 4:
      return b ? "activate" : "deactivate";
    case 8:
      return b ? "select" : "unselect";
    case 16:
      return b ? "check" : "uncheck";
    case 32:
      return b ? "focus" : "blur";
    case 64:
      return b ? "open" : "close"
  }
  f(Error("Invalid component state"))
}
q = qg.prototype;
q.ae = l;
q.G = !1;
q.o = l;
q.Mb = l;
q.wf = l;
q.L = l;
q.ma = l;
q.rb = l;
q.Rf = !1;
q.h = m("o");
function tg(a) {
  return a.Va || (a.Va = new kg(a))
}
q.getParent = m("L");
q.nd = function(a) {
  this.L && this.L != a && f(Error("Method not supported"));
  qg.d.nd.call(this, a)
};
q.zb = m("Ba");
q.r = function() {
  this.o = this.Ba.createElement("div")
};
function ug(a) {
  var b = X("prefs");
  a.G && f(Error("Component already rendered"));
  a.o || a.r();
  b ? b.insertBefore(a.o, l) : a.Ba.C.body.appendChild(a.o);
  (!a.L || a.L.G) && a.Ra()
}
q.Ra = function() {
  this.G = !0;
  vg(this, function(a) {
    !a.G && a.h() && a.Ra()
  })
};
q.vb = function() {
  vg(this, function(a) {
    a.G && a.vb()
  });
  this.Va && this.Va.ld();
  this.G = !1
};
q.b = function() {
  qg.d.b.call(this);
  this.G && this.vb();
  this.Va && (this.Va.e(), delete this.Va);
  vg(this, function(a) {
    a.e()
  });
  !this.Rf && this.o && cg(this.o);
  this.L = this.wf = this.o = this.rb = this.ma = l
};
q.kb = function(a) {
  this.G && f(Error("Component already rendered"));
  this.Mb = a
};
function vg(a, b) {
  a.ma && Wa(a.ma, b, i)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = w(a) ? a : a.ae || (a.ae = ":" + (a.qf.xf++).toString(36)), a = this.rb && c ? (c in this.rb ? this.rb[c] : i) || l : l;
    if(c && a) {
      var d = this.rb;
      c in d && delete d[c];
      ab(this.ma, a);
      b && (a.vb(), a.o && cg(a.o));
      c = a;
      c == l && f(Error("Unable to set parent component"));
      c.L = l;
      qg.d.nd.call(c, l)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
S("goog.ui.media.FlashObject");
r.__loadFlashObject_callbacks = {};
var He = 1;
function wg(a, b) {
  this.Tf = a;
  this.me = b
}
wg.prototype.Yc = 0;
wg.prototype.mc = 0;
wg.prototype.Qc = !1;
function xg(a) {
  var b = [];
  if(a.Qc) {
    return[b, 2]
  }
  var c = a.Yc, d = a.Tf.responseText;
  for(a.Yc = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var e = d.substr(a.mc, c - a.mc), e = e.replace(/\r$/, "");
    if(e.length > a.me) {
      return a.Qc = !0, [b, 2]
    }
    b.push(e);
    a.mc = c += 1
  }
  return a.Yc - a.mc - 1 > a.me ? (a.Qc = !0, [b, 2]) : [b, He]
}
;var yg = !(H || I && !J("420+"));
function zg(a, b) {
  this.Ne = a;
  this.U = b
}
D(zg, K);
q = zg.prototype;
q.n = l;
q.xa = -1;
q.Rd = !1;
q.Zd = ["Content-Length", "Server", "Date", "Expires", "Keep-Alive", "Content-Type", "Transfer-Encoding", "Cache-Control"];
function Ag(a) {
  var b = xg(a.Ld), c = b[0], b = b[1], d = r.parent;
  d ? (d.__XHRMaster_onframes(a.U, c, b), b != He && a.e()) : a.e()
}
q.of = function() {
  Ag(this);
  if(!this.X) {
    var a = r.parent;
    a && a.__XHRMaster_oncomplete(this.U);
    this.e()
  }
};
q.Df = function() {
  var a = r.parent;
  if(a) {
    this.xa = this.n.qa();
    if(this.xa >= 2 && !this.Rd) {
      for(var b = new Hb, c = this.Zd.length;c--;) {
        var d = this.Zd[c];
        try {
          b.set(d, this.n.f.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.s() && (this.Rd = !0, a.__XHRMaster_ongotheaders(this.U, Lb(b)), this.X)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.U, this.xa);
    yg && this.xa == 3 && Ag(this)
  }else {
    this.e()
  }
};
q.ad = function(a, b, c) {
  this.n = new ye;
  N(this.n, "readystatechange", A(this.Df, this));
  N(this.n, "complete", A(this.of, this));
  this.n.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.Ld = new wg(this.n.f, 1048576)
};
q.b = function() {
  zg.d.b.call(this);
  delete this.Ld;
  this.n && this.n.e();
  delete this.Ne.Rb[this.U];
  delete this.Ne
};
function Bg() {
  this.Rb = {}
}
D(Bg, K);
Bg.prototype.tf = function(a, b, c, d) {
  var e = new zg(this, a);
  this.Rb[a] = e;
  e.ad(b, c, d)
};
Bg.prototype.cf = function(a) {
  (a = this.Rb[a]) && a.e()
};
Bg.prototype.b = function() {
  Bg.d.b.call(this);
  for(var a = Ra(this.Rb);a.length;) {
    a.pop().e()
  }
  delete this.Rb
};
var Cg = new Bg;
r.__XHRSlave_makeRequest = A(Cg.tf, Cg);
r.__XHRSlave_dispose = A(Cg.cf, Cg);
function Dg(a) {
  this.C = a
}
var Eg = /\s*;\s*/;
q = Dg.prototype;
q.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && I) {
    var b = "COOKIES_TEST_" + C();
    of.set(b, "1");
    if(!this.get(b)) {
      return!1
    }
    this.remove(b)
  }
  return a
};
q.set = function(a, b, c, d, e, g) {
  /[;=\s]/.test(a) && f(Error('Invalid cookie name "' + a + '"'));
  /[;\r\n]/.test(b) && f(Error('Invalid cookie value "' + b + '"'));
  t(c) || (c = -1);
  e = e ? ";domain=" + e : "";
  d = d ? ";path=" + d : "";
  g = g ? ";secure" : "";
  c = c < 0 ? "" : c == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(C() + c * 1E3)).toUTCString();
  this.vc(a + "=" + b + e + d + c + g)
};
q.get = function(a, b) {
  for(var c = a + "=", d = (this.Ea() || "").split(Eg), e = 0, g;g = d[e];e++) {
    if(g.indexOf(c) == 0) {
      return g.substr(c.length)
    }
  }
  return b
};
q.remove = function(a, b, c) {
  var d = this.J(a);
  this.set(a, "", 0, b, c);
  return d
};
q.ga = function() {
  return Fg(this).keys
};
q.F = function() {
  return Fg(this).Se
};
q.sa = function() {
  return!this.Ea()
};
q.s = function() {
  return!this.Ea() ? 0 : (this.Ea() || "").split(Eg).length
};
q.J = function(a) {
  return t(this.get(a))
};
q.sb = function(a) {
  for(var b = Fg(this).Se, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return!0
    }
  }
  return!1
};
q.clear = function() {
  for(var a = Fg(this).keys, b = a.length - 1;b >= 0;b--) {
    this.remove(a[b])
  }
};
q.vc = function(a) {
  this.C.cookie = a
};
q.Ea = function() {
  return this.C.cookie
};
function Fg(a) {
  for(var a = (a.Ea() || "").split(Eg), b = [], c = [], d, e, g = 0;e = a[g];g++) {
    d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)))
  }
  return{keys:b, Se:c}
}
var of = new Dg(document);
of.Uf = 3950;
function Gg() {
  this.nf = "browsernode_site_uaid";
  this.pf = "browsernode_site_uaid_secure"
}
function Hg() {
  new $e(document.location);
  var a = Oe();
  cd(a, function() {
    var a = X("xdrframe-1").contentWindow || (I ? X("xdrframe-1").document || X("xdrframe-1").contentWindow.document : X("xdrframe-1").contentDocument || X("xdrframe-1").contentWindow.document).parentWindow || (I ? X("xdrframe-1").document || X("xdrframe-1").contentWindow.document : X("xdrframe-1").contentDocument || X("xdrframe-1").contentWindow.document).defaultView, c = X("xdrframe-2").contentWindow || (I ? X("xdrframe-2").document || X("xdrframe-2").contentWindow.document : X("xdrframe-2").contentDocument || 
    X("xdrframe-2").contentWindow.document).parentWindow || (I ? X("xdrframe-2").document || X("xdrframe-2").contentWindow.document : X("xdrframe-2").contentDocument || X("xdrframe-2").contentWindow.document).defaultView;
    a || f(Error("could not get primaryWindow xdrframe"));
    c || f(Error("could not get secondaryWindow xdrframe"));
    var d = new $e(r.__XDRSetup.baseurl1);
    uf(d, "/httpface/");
    var e = new $e(r.__XDRSetup.baseurl2);
    uf(e, "/httpface/");
    return new Qe(d.toString(), a, e.toString(), c)
  });
  return a
}
;var Ig;
function jf() {
  kb.apply(this)
}
D(jf, kb);
function Jg() {
  kb.apply(this)
}
D(Jg, kb);
qb(jf, {0:{name:"NewPost", Qd:"browsernode.ljstream_messages.NewPost"}, 1:{name:"title", Sa:9, type:String}, 2:{name:"url", Sa:9, type:String}, 3:{name:"body", Sa:9, type:String}, 4:{name:"num_images", Sa:5, type:Number}, 5:{name:"lang", Sa:9, type:String}});
qb(Jg, {0:{name:"SetPreferences", Qd:"browsernode.ljstream_messages.SetPreferences"}, 1:{name:"include_russian_posts", Sa:8, type:Boolean}});
function Kg() {
  this.Be = C()
}
var Lg = new Kg;
Kg.prototype.set = aa("Be");
Kg.prototype.reset = function() {
  this.set(C())
};
Kg.prototype.get = m("Be");
function Mg(a) {
  this.kd = a || "";
  this.Lf = Lg
}
Mg.prototype.Hf = !0;
Mg.prototype.Jf = !0;
Mg.prototype.If = !0;
Mg.prototype.He = !1;
function Ng(a) {
  return a < 10 ? "0" + a : String(a)
}
function Og(a, b) {
  var c = (a.Le - b) / 1E3, d = c.toFixed(3), e = 0;
  if(c < 1) {
    e = 2
  }else {
    for(;c < 100;) {
      e++, c *= 10
    }
  }
  for(;e-- > 0;) {
    d = " " + d
  }
  return d
}
function Pg(a) {
  Mg.call(this, a)
}
D(Pg, Mg);
Pg.prototype.He = !0;
function Qg(a) {
  this.cd = a || 100;
  this.la = []
}
q = Qg.prototype;
q.Gb = 0;
q.add = function(a) {
  this.la[this.Gb] = a;
  this.Gb = (this.Gb + 1) % this.cd
};
q.get = function(a) {
  a = Rg(this, a);
  return this.la[a]
};
q.set = function(a, b) {
  a = Rg(this, a);
  this.la[a] = b
};
q.s = function() {
  return this.la.length
};
q.sa = function() {
  return this.la.length == 0
};
q.clear = function() {
  this.Gb = this.la.length = 0
};
q.F = function() {
  for(var a = this.s(), b = this.s(), c = [], a = this.s() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
q.ga = function() {
  for(var a = [], b = this.s(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
q.J = function(a) {
  return a < this.s()
};
q.sb = function(a) {
  for(var b = this.s(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return!0
    }
  }
  return!1
};
function Rg(a, b) {
  b >= a.la.length && f(Error("Out of bounds exception"));
  return a.la.length < a.cd ? b : (a.Gb + Number(b)) % a.cd
}
;function Sg(a, b) {
  this.ra = a || "";
  this.kd = b || "";
  this.eb = [];
  this.sc = new Qg(Tg);
  this.Cf = A(this.Xe, this);
  this.gf = new Pg(this.kd);
  this.ff = {};
  if(!0 != this.de) {
    this.de = !0;
    var c = Od(), d = this.Cf;
    if(!c.Bb) {
      c.Bb = []
    }
    c.Bb.push(d)
  }
  this.P = Ug(this.ra, "enabled") == "1";
  r.setInterval(A(this.Ff, this), 7500)
}
var Tg = 500;
q = Sg.prototype;
q.Te = "LOGGING";
q.df = !1;
q.u = l;
q.yd = !1;
q.de = !1;
q.Cd = l;
q.Zc = C();
q.Ha = function() {
  this.P && Vg(this)
};
q.isEnabled = m("P");
q.Pb = function(a) {
  if(this.P = a) {
    Vg(this), this.u && this.Ac()
  }
  this.vc("enabled", a ? "1" : "0")
};
function Wg(a) {
  return!!a.u && !a.u.closed
}
q.$e = function() {
  this.sc.clear();
  Wg(this) && this.Ac()
};
q.Xe = function(a) {
  if(!this.ff[a.je]) {
    var b = this.gf, c;
    switch(a.R.value) {
      case wd.value:
        c = "dbg-sh";
        break;
      case xd.value:
        c = "dbg-sev";
        break;
      case yd.value:
        c = "dbg-w";
        break;
      case zd.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.kd, " ");
    if(b.Hf) {
      var e = new Date(a.Le);
      d.push("[", Ng(e.getFullYear() - 2E3) + Ng(e.getMonth() + 1) + Ng(e.getDate()) + " " + Ng(e.getHours()) + ":" + Ng(e.getMinutes()) + ":" + Ng(e.getSeconds()) + "." + Ng(Math.floor(e.getMilliseconds() / 10)), "] ")
    }
    b.Jf && d.push("[", Ea(Og(a, b.Lf.get())), "s] ");
    b.If && d.push("[", ya(a.je), "] ");
    d.push('<span class="', c, '">', xa(Ea(ya(a.pe))));
    b.He && a.Pc && d.push("<br>", xa(Ea(a.Oc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.P ? (Vg(this), this.sc.add(b), Xg(this, b)) : this.sc.add(b);
    this.df && a.R.value >= xd.value && this.Pb(!0)
  }
};
function Xg(a, b) {
  a.eb.push(b);
  r.clearTimeout(a.Cd);
  C() - a.Zc > 750 ? a.zd() : a.Cd = r.setTimeout(A(a.zd, a), 250)
}
q.zd = function() {
  this.Zc = C();
  if(Wg(this)) {
    var a = this.u.document.body, a = a && a.scrollHeight - (a.scrollTop + a.clientHeight) <= 100;
    this.u.document.write(this.eb.join(""));
    this.eb.length = 0;
    a && this.u.scrollTo(0, 1E6)
  }
};
function Yg(a) {
  for(var b = a.sc.F(), c = 0;c < b.length;c++) {
    Xg(a, b[c])
  }
}
function Vg(a) {
  if(!Wg(a) && !a.yd) {
    var b = a.Ea("dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), e = Number(b[2]), b = Number(b[3]);
    a.yd = !0;
    a.u = window.open("", H ? a.ra.replace(/[\s\-\.\,]/g, "_") : a.ra, "width=" + e + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    if(!a.u && !a.Kf) {
      alert("Logger popup was blocked"), a.Kf = !0
    }
    a.yd = !1;
    a.u && a.Ac()
  }
}
q.cc = p("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
q.Ac = function() {
  Wg(this) || (this.u.document.open(), Xg(this, "<style>" + this.cc() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.Te + "<br><small>Logger: " + this.ra + "</small></div><hr>"), Yg(this))
};
q.vc = function(a, b) {
  a += this.ra;
  document.cookie = a + "=" + encodeURIComponent(b) + ";path=/;expires=" + (new Date(C() + 2592E6)).toUTCString()
};
q.Ea = function(a, b) {
  return Ug(this.ra, a, b)
};
function Ug(a, b, c) {
  var a = b + a, b = String(document.cookie), d = b.indexOf(a + "=");
  return d != -1 ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, c == -1 ? b.length : c))) : c || ""
}
q.Ff = function() {
  Wg(this) && this.vc("dbg", (this.u.screenX || this.u.screenLeft || 0) + "," + (this.u.screenY || this.u.screenTop || 0) + "," + (this.u.outerWidth || 800) + "," + (this.u.outerHeight || 500))
};
function Zg(a, b) {
  if($g) {
    var c = ah(), d;
    for(d in c) {
      var e = d.replace("fancywindow.sel.", ""), e = S(e), g = e.R, h = window.localStorage.getItem(d).toString();
      (!g || g.toString() != h) && e.jb(Hd(h))
    }
  }
  Sg.call(this, a, b)
}
D(Zg, Sg);
var $g;
a: {
  try {
    $g = !!window.localStorage.getItem;
    break a
  }catch(bh) {
  }
  $g = !1
}
q = Zg.prototype;
q.zd = function() {
  this.Zc = C();
  if(Wg(this)) {
    for(var a = this.K.h("log"), b = a.scrollHeight - (a.scrollTop + a.offsetHeight) <= 100, c = 0;c < this.eb.length;c++) {
      var d = this.K.r("div", "logmsg");
      d.innerHTML = this.eb[c];
      a.appendChild(d)
    }
    this.eb.length = 0;
    this.De();
    if(b) {
      a.scrollTop = a.scrollHeight
    }
  }
};
q.Ac = function() {
  if(Wg(this)) {
    var a = this.u.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.ra + "</title><style>" + this.cc() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.ra + "</b></p><p>" + this.Te + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (H ? a.body : this.u).onresize = A(this.De, this);
    this.K = new Uf(a);
    this.K.h("openbutton").onclick = A(this.zf, this);
    this.K.h("closebutton").onclick = A(this.af, this);
    this.K.h("clearbutton").onclick = A(this.$e, this);
    this.K.h("exitbutton").onclick = A(this.ef, this);
    Yg(this)
  }
};
q.zf = function() {
  var a = this.K.h("optionsarea");
  a.innerHTML = "";
  for(var b = ch(), c = this.K, d = 0;d < b.length;d++) {
    var e = S(b[d]), e = c.r("div", {}, dh(this, "sel" + b[d], e.R ? e.R.name : "INHERIT"), c.r("span", {}, b[d] || "(root)"));
    a.appendChild(e)
  }
  this.K.h("options").style.display = "block";
  return!1
};
function dh(a, b, c) {
  for(var a = a.K, b = a.r("select", {id:b}), d = 0;d < Fd.length;d++) {
    var e = Fd[d], g = a.r("option", {}, e.name);
    if(c == e.name) {
      g.selected = !0
    }
    b.appendChild(g)
  }
  b.appendChild(a.r("option", {selected:c == "INHERIT"}, "INHERIT"));
  return b
}
q.af = function() {
  this.K.h("options").style.display = "none";
  for(var a = ch(), b = this.K, c = 0;c < a.length;c++) {
    var d = S(a[c]), e = b.h("sel" + a[c]), e = e.options[e.selectedIndex].text;
    e == "INHERIT" ? d.jb(l) : d.jb(Hd(e))
  }
  if($g) {
    a = ch();
    b = ah();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], e = S(a[c]).R, d in b ? e ? window.localStorage.getItem(d) != e.name && window.localStorage.setItem(d, e.name) : window.localStorage.removeItem(d) : e && window.localStorage.setItem(d, e.name)
    }
  }
  return!1
};
q.De = function() {
  var a = this.K, b = a.h("log"), c = a.h("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.C.body.offsetHeight - c.offsetHeight - (H ? 4 : 0) + "px"
};
q.ef = function() {
  this.Pb(!1);
  this.u && this.u.close()
};
q.cc = function() {
  return Zg.d.cc.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function ah() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    a[window.localStorage.key(b)] = !0
  }
  return a
}
function ch() {
  var a = Sa(Ld);
  a.sort();
  return a
}
;function eh() {
}
var fh;
da(eh);
q = eh.prototype;
q.$b = function() {
};
q.r = function(a) {
  return a.zb().r("div", gh(this, a).join(" "), a.tb)
};
q.ub = function(a, b, c) {
  if(a = a.h ? a.h() : a) {
    if(H && !J("7")) {
      var d = hh(Of(a), b);
      d.push(b);
      ma(c ? Pf : Qf, a).apply(l, d)
    }else {
      c ? Pf(a, b) : Qf(a, b)
    }
  }
};
q.be = function(a) {
  if(a.Mb == l) {
    var b;
    a: {
      b = a.G ? a.o : a.Ba.C.body;
      var c = Vf(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (b = c.defaultView.getComputedStyle(b, l))) {
        b = b.direction || b.getPropertyValue("direction");
        break a
      }
      b = ""
    }
    a.Mb = "rtl" == (b || ((a.G ? a.o : a.Ba.C.body).currentStyle ? (a.G ? a.o : a.Ba.C.body).currentStyle.direction : l) || (a.G ? a.o : a.Ba.C.body).style.direction)
  }
  a.Mb && this.kb(a.h(), !0);
  a.isEnabled() && this.Qb(a, a.Ma)
};
q.uc = function(a, b) {
  var c = !b, d = H || bc ? a.getElementsByTagName("*") : l;
  if(jg) {
    if(c = c ? "none" : "", a.style[jg] = c, d) {
      for(var e = 0, g;g = d[e];e++) {
        g.style[jg] = c
      }
    }
  }else {
    if(H || bc) {
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for(e = 0;g = d[e];e++) {
          g.setAttribute("unselectable", c)
        }
      }
    }
  }
};
q.kb = function(a, b) {
  this.ub(a, this.pa() + "-rtl", b)
};
q.ee = function(a) {
  var b;
  return a.$ & 32 && (b = a.Fa()) ? gg(b) : !1
};
q.Qb = function(a, b) {
  var c;
  if(a.$ & 32 && (c = a.Fa())) {
    if(!b && a.j & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.j & 32 && a.Sd()
    }
    if(gg(c) != b) {
      b ? c.tabIndex = 0 : c.removeAttribute("tabIndex")
    }
  }
};
q.pd = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.M = function(a, b, c) {
  var d = a.h();
  if(d) {
    var e = ih(this, b);
    e && this.ub(a, e, c);
    this.Ub(d, b, c)
  }
};
q.Ub = function(a, b, c) {
  fh || (fh = {1:"disabled", 4:"pressed", 8:"selected", 16:"checked", 64:"expanded"});
  (b = fh[b]) && a.setAttribute("aria-" + b, c)
};
q.Fa = function(a) {
  return a.h()
};
q.pa = p("goog-control");
function gh(a, b) {
  var c = a.pa(), d = [c], e = a.pa();
  e != c && d.push(e);
  c = b.j;
  for(e = [];c;) {
    var g = c & -c;
    e.push(ih(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.Y) && d.push.apply(d, c);
  H && !J("7") && d.push.apply(d, hh(d));
  return d
}
function hh(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Wa([], function(d) {
    Za(d, ma($a, a)) && (!b || $a(d, b)) && c.push(d.join("_"))
  });
  return c
}
function ih(a, b) {
  if(!a.Dd) {
    var c = a.pa();
    a.Dd = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Dd[b]
}
;function jh(a, b) {
  a || f(Error("Invalid class name " + a));
  x(b) || f(Error("Invalid decorator function " + b))
}
var kh = {};
function lh(a, b, c, d, e) {
  if(!H && (!I || !J("525"))) {
    return!0
  }
  if(fc && e) {
    return mh(a)
  }
  if(e && !d) {
    return!1
  }
  if(!c && (b == 17 || b == 18)) {
    return!1
  }
  if(H && d && b == a) {
    return!1
  }
  switch(a) {
    case 13:
      return!(H && J("9"));
    case 27:
      return!I
  }
  return mh(a)
}
function mh(a) {
  if(a >= 48 && a <= 57) {
    return!0
  }
  if(a >= 96 && a <= 106) {
    return!0
  }
  if(a >= 65 && a <= 90) {
    return!0
  }
  if(I && a == 0) {
    return!0
  }
  switch(a) {
    case 32:
    ;
    case 63:
    ;
    case 107:
    ;
    case 109:
    ;
    case 110:
    ;
    case 111:
    ;
    case 186:
    ;
    case 189:
    ;
    case 187:
    ;
    case 188:
    ;
    case 190:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return!0;
    default:
      return!1
  }
}
;function nh(a, b) {
  a && oh(this, a, b)
}
D(nh, Yc);
q = nh.prototype;
q.o = l;
q.ic = l;
q.Xc = l;
q.jc = l;
q.va = -1;
q.ta = -1;
var rh = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, sh = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, th = {61:187, 
59:186}, uh = H || I && J("525");
q = nh.prototype;
q.kf = function(a) {
  if(I && (this.va == 17 && !a.ctrlKey || this.va == 18 && !a.altKey)) {
    this.ta = this.va = -1
  }
  uh && !lh(a.keyCode, this.va, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.ta = cc && a.keyCode in th ? th[a.keyCode] : a.keyCode
};
q.mf = function() {
  this.ta = this.va = -1
};
q.handleEvent = function(a) {
  var b = a.ea, c, d;
  H && a.type == "keypress" ? (c = this.ta, d = c != 13 && c != 27 ? b.keyCode : 0) : I && a.type == "keypress" ? (c = this.ta, d = b.charCode >= 0 && b.charCode < 63232 && mh(c) ? b.charCode : 0) : bc ? (c = this.ta, d = mh(c) ? b.keyCode : 0) : (c = b.keyCode || this.ta, d = b.charCode || 0, fc && d == 63 && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in rh ? e = rh[c] : c == 25 && a.shiftKey && (e = 9) : g && g in sh && (e = sh[g]);
  a = e == this.va;
  this.va = e;
  b = new vh(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.e()
  }
};
q.h = m("o");
function oh(a, b, c) {
  a.jc && a.detach();
  a.o = b;
  a.ic = N(a.o, "keypress", a, c);
  a.Xc = N(a.o, "keydown", a.kf, c, a);
  a.jc = N(a.o, "keyup", a.mf, c, a)
}
q.detach = function() {
  if(this.ic) {
    O(this.ic), O(this.Xc), O(this.jc), this.jc = this.Xc = this.ic = l
  }
  this.o = l;
  this.ta = this.va = -1
};
q.b = function() {
  nh.d.b.call(this);
  this.detach()
};
function vh(a, b, c, d) {
  d && this.Ha(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
D(vh, tc);
function Y(a, b, c) {
  qg.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = y(b);
      if(d = kh[d]) {
        break
      }
      b = b.d ? b.d.constructor : l
    }
    b = d ? x(d.Ua) ? d.Ua() : new d : l
  }
  this.v = b;
  this.tb = a
}
D(Y, qg);
q = Y.prototype;
q.tb = l;
q.j = 0;
q.$ = 39;
q.Bd = 255;
q.Mf = 0;
q.Ma = !0;
q.Y = l;
q.Tc = !0;
q.Fc = !1;
q.Fa = function() {
  return this.v.Fa(this)
};
function wh(a, b) {
  if(b) {
    a.Y ? $a(a.Y, b) || a.Y.push(b) : a.Y = [b], a.v.ub(a, b, !0)
  }
}
q.ub = function(a, b) {
  if(b) {
    wh(this, a)
  }else {
    if(a && this.Y) {
      ab(this.Y, a);
      if(this.Y.length == 0) {
        this.Y = l
      }
      this.v.ub(this, a, !1)
    }
  }
};
q.r = function() {
  var a = this.v.r(this);
  this.o = a;
  var b = this.v.$b();
  if(b) {
    a.setAttribute("role", b), a.fg = b
  }
  this.Fc || this.v.uc(a, !1);
  this.Ma || this.v.pd(a, !1)
};
q.Ra = function() {
  Y.d.Ra.call(this);
  this.v.be(this);
  if(this.$ & -2 && (this.Tc && xh(this, !0), this.$ & 32)) {
    var a = this.Fa();
    if(a) {
      var b = this.Za || (this.Za = new nh);
      oh(b, a);
      ng(ng(ng(tg(this), b, "key", this.lf), a, "focus", this.jf), a, "blur", this.Sd)
    }
  }
};
function xh(a, b) {
  var c = tg(a), d = a.h();
  b ? (ng(ng(ng(ng(c, d, "mouseover", a.Wd), d, "mousedown", a.Ud), d, "mouseup", a.Xd), d, "mouseout", a.Vd), H && ng(c, d, "dblclick", a.Td)) : (og(og(og(og(c, d, "mouseover", a.Wd), d, "mousedown", a.Ud), d, "mouseup", a.Xd), d, "mouseout", a.Vd), H && og(c, d, "dblclick", a.Td))
}
q.vb = function() {
  Y.d.vb.call(this);
  this.Za && this.Za.detach();
  this.Ma && this.isEnabled() && this.v.Qb(this, !1)
};
q.b = function() {
  Y.d.b.call(this);
  this.Za && (this.Za.e(), delete this.Za);
  delete this.v;
  this.Y = this.tb = l
};
function yh(a) {
  a = a.tb;
  if(!a) {
    return""
  }
  if(!w(a)) {
    if(u(a)) {
      a = Xa(a, hg).join("")
    }else {
      if(Sf && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        ig(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      H || (a = a.replace(/ +/g, " "));
      a != " " && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
q.kb = function(a) {
  Y.d.kb.call(this, a);
  var b = this.h();
  b && this.v.kb(b, a)
};
q.uc = function(a) {
  this.Fc = a;
  var b = this.h();
  b && this.v.uc(b, a)
};
q.pd = function(a, b) {
  if(b || this.Ma != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.h();
    c && this.v.pd(c, a);
    this.isEnabled() && this.v.Qb(this, a);
    this.Ma = a;
    return!0
  }
  return!1
};
q.isEnabled = function() {
  return!(this.j & 1)
};
q.Pb = function(a) {
  var b = this.getParent();
  if((!b || typeof b.isEnabled != "function" || b.isEnabled()) && zh(this, 1, !a)) {
    a || (this.setActive(!1), Ah(this, !1)), this.Ma && this.v.Qb(this, a), this.M(1, !a)
  }
};
function Ah(a, b) {
  zh(a, 2, b) && a.M(2, b)
}
q.ce = function() {
  return!!(this.j & 4)
};
q.setActive = function(a) {
  zh(this, 4, a) && this.M(4, a)
};
q.M = function(a, b) {
  if(this.$ & a && b != !!(this.j & a)) {
    this.v.M(this, a, b), this.j = b ? this.j | a : this.j & ~a
  }
};
function Z(a, b) {
  return!!(a.Bd & b) && !!(a.$ & b)
}
function zh(a, b, c) {
  return!!(a.$ & b) && !!(a.j & b) != c && (!(a.Mf & b) || a.dispatchEvent(sg(b, c))) && !a.X
}
q.Wd = function(a) {
  (!a.relatedTarget || !dg(this.h(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Z(this, 2) && Ah(this, !0)
};
q.Vd = function(a) {
  if((!a.relatedTarget || !dg(this.h(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    Z(this, 4) && this.setActive(!1), Z(this, 2) && Ah(this, !1)
  }
};
q.Ud = function(a) {
  if(this.isEnabled() && (Z(this, 2) && Ah(this, !0), vc(a) && (!I || !fc || !a.ctrlKey))) {
    Z(this, 4) && this.setActive(!0), this.v.ee(this) && this.Fa().focus()
  }
  !this.Fc && vc(a) && (!I || !fc || !a.ctrlKey) && a.preventDefault()
};
q.Xd = function(a) {
  this.isEnabled() && (Z(this, 2) && Ah(this, !0), this.ce() && this.Ib(a) && Z(this, 4) && this.setActive(!1))
};
q.Td = function(a) {
  this.isEnabled() && this.Ib(a)
};
q.Ib = function(a) {
  if(Z(this, 16)) {
    var b = !(this.j & 16);
    zh(this, 16, b) && this.M(16, b)
  }
  Z(this, 8) && zh(this, 8, !0) && this.M(8, !0);
  Z(this, 64) && (b = !(this.j & 64), zh(this, 64, b) && this.M(64, b));
  b = new rc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, e = 0;d = c[e];e++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
q.jf = function() {
  Z(this, 32) && zh(this, 32, !0) && this.M(32, !0)
};
q.Sd = function() {
  Z(this, 4) && this.setActive(!1);
  Z(this, 32) && zh(this, 32, !1) && this.M(32, !1)
};
q.lf = function(a) {
  return this.Ma && this.isEnabled() && this.Sc(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
q.Sc = function(a) {
  return a.keyCode == 13 && this.Ib(a)
};
x(Y) || f(Error("Invalid component class " + Y));
x(eh) || f(Error("Invalid renderer class " + eh));
var Bh = y(Y);
kh[Bh] = eh;
jh("goog-control", function() {
  return new Y(l)
});
function Ch() {
}
D(Ch, eh);
da(Ch);
q = Ch.prototype;
q.$b = p("button");
q.Ub = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : Ch.d.Ub.call(this, a, b, c)
};
q.r = function(a) {
  var b = Ch.d.r.call(this, a), c = a.dc();
  c && this.od(b, c);
  (c = a.ec()) && this.wc(b, c);
  a.$ & 16 && this.Ub(b, 16, !1);
  return b
};
q.ec = s;
q.wc = s;
q.dc = function(a) {
  return a.title
};
q.od = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
q.pa = p("goog-button");
function Dh() {
}
D(Dh, Ch);
da(Dh);
q = Dh.prototype;
q.$b = function() {
};
q.r = function(a) {
  a.G && !1 != a.Tc && xh(a, !1);
  a.Tc = !1;
  a.Bd &= -256;
  a.G && a.j & 32 && f(Error("Component already rendered"));
  a.j & 32 && a.M(32, !1);
  a.$ &= -33;
  return a.zb().r("button", {"class":gh(this, a).join(" "), disabled:!a.isEnabled(), title:a.dc() || "", value:a.ec() || ""}, yh(a) || "")
};
q.be = function(a) {
  ng(tg(a), a.h(), "click", a.Ib)
};
q.uc = s;
q.kb = s;
q.ee = function(a) {
  return a.isEnabled()
};
q.Qb = s;
q.M = function(a, b, c) {
  Dh.d.M.call(this, a, b, c);
  if((a = a.h()) && b == 1) {
    a.disabled = c
  }
};
q.ec = function(a) {
  return a.value
};
q.wc = function(a, b) {
  if(a) {
    a.value = b
  }
};
q.Ub = s;
function Eh(a, b, c) {
  Y.call(this, a, b || Dh.Ua(), c)
}
D(Eh, Y);
q = Eh.prototype;
q.ec = m("Re");
q.wc = function(a) {
  this.Re = a;
  this.v.wc(this.h(), a)
};
q.dc = m("Me");
q.od = function(a) {
  this.Me = a;
  this.v.od(this.h(), a)
};
q.b = function() {
  Eh.d.b.call(this);
  delete this.Re;
  delete this.Me
};
q.Ra = function() {
  Eh.d.Ra.call(this);
  if(this.$ & 32) {
    var a = this.Fa();
    a && ng(tg(this), a, "keyup", this.Sc)
  }
};
q.Sc = function(a) {
  return a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup" ? this.Ib(a) : a.keyCode == 32
};
jh("goog-button", function() {
  return new Eh(l)
});
function Fh() {
}
D(Fh, Ch);
da(Fh);
Fh.prototype.r = function(a) {
  var b = {"class":"goog-inline-block " + gh(this, a).join(" "), title:a.dc() || ""};
  return a.zb().r("div", b, Gh(this, a.tb, a.zb()))
};
Fh.prototype.$b = p("button");
function Gh(a, b, c) {
  return c.r("div", "goog-inline-block " + (a.pa() + "-outer-box"), c.r("div", "goog-inline-block " + (a.pa() + "-inner-box"), b))
}
Fh.prototype.pa = p("goog-custom-button");
function Hh(a, b, c) {
  Eh.call(this, a, b || Fh.Ua(), c)
}
D(Hh, Eh);
jh("goog-custom-button", function() {
  return new Hh(l)
});
var Ih = S("ljstream.logger");
window.onerror = function(a, b, c) {
  Jd(Ih, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Jh() {
  this.ue = new tb
}
function ff(a, b) {
  Ih.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  Kh("Disconnected from server.  Try reloading this page.");
  $ = l
}
function Lh(a) {
  Ih.info("Sending preferences to server");
  var b;
  b = new Jg;
  b.q[1] = X("include_russian_posts").checked;
  b = a.ue.Ob(b);
  Ze(a.t, [(new wb).Ob([2, b])])
}
Jh.prototype.reset = function(a) {
  Ih.info("resetting with reason: " + a);
  this.t.reset(a)
};
var $ = l, Mh = new fd(r.window);
function Kh(a) {
  a = kf("span", {"class":"important-message"}, a);
  lf(a)
}
function Nh() {
  $ && ($.reset("idle timeout fired"), $ = l, Kh("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var Oh = l;
function Ph() {
  Oh != l && Mh.I.clearTimeout(Oh);
  $ && (Oh = Mh.I.setTimeout(Nh, 6E5))
}
N(window, ["click", "focus", "keydown", "keypress"], Ph, !0);
var Zf = new Uf, Qh = 0;
function lf(a) {
  a = kf("div", {"class":"row-" + (Qh % 2 == 0 ? "even" : "odd")}, kf("nobr", {}, a));
  X("ljstream-container-inner").appendChild(a);
  Qh += 1;
  var b;
  if(b = Ig) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !I && d.compatMode == "CSS1Compat" ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new Lf(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = Yf().height;
    b = !(a + b <= c + d)
  }
  if(b) {
    a = Yf().height, window.scrollBy(0, Math.round(a / 2) + 80)
  }
}
function Rh() {
  var a = new Gg;
  $ = new Jh;
  Ph();
  cd(Hg(), function(b) {
    $ || f(Error("lastProto falsy?"));
    b = new Te(Mh, $, b, a);
    $.t = b;
    var c = $;
    Ze(c.t, ["subprotocol:ljstream"]);
    Lh(c);
    b.start();
    return l
  })
}
function Sh() {
  N(r, "load", function() {
    window.scrollTo(0, 0)
  });
  N(X("include_russian_posts"), "click", function() {
    Lh($)
  });
  Ig = !0;
  N(X("automatic_scroll"), "click", function(a) {
    Ig = a.target.checked
  });
  var a = new Hh("Clear posts");
  wh(a, "clear-posts-button");
  ug(a);
  N(a, "action", function() {
    X("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = X("ljstream-container");
  a.style.marginTop = X("demo-header").offsetHeight + "px";
  X("demo-header").style.width = "9000px";
  var b = kf("div", {id:"ljstream-container-inner"});
  a.appendChild(b)
}
function Th() {
  Od().jb(Ed);
  if((new $e(document.location)).S.get("logging") == "1") {
    var a = new Zg("main");
    a.Pb(!0);
    a.Ha()
  }
  Ih.info("Logger works.");
  Sh();
  Rh()
}
var Uh = "__ljstream_init".split("."), Vh = r;
!(Uh[0] in Vh) && Vh.execScript && Vh.execScript("var " + Uh[0]);
for(var Wh;Uh.length && (Wh = Uh.shift());) {
  !Uh.length && t(Th) ? Vh[Wh] = Th : Vh = Vh[Wh] ? Vh[Wh] : Vh[Wh] = {}
}
;})();
