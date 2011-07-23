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
function o(a) {
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
  a.Va = function() {
    return a.Af || (a.Af = new a)
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
function fa(a) {
  return a !== i
}
function t(a) {
  return ea(a) == "array"
}
function ga(a) {
  var b = ea(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function ha(a) {
  return ia(a) && typeof a.getFullYear == "function"
}
function u(a) {
  return typeof a == "string"
}
function w(a) {
  return ea(a) == "function"
}
function ia(a) {
  a = ea(a);
  return a == "object" || a == "array" || a == "function"
}
function x(a) {
  return a[ja] || (a[ja] = ++ka)
}
var ja = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), ka = 0;
function la(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ma(a, b, c) {
  a || f(Error());
  if(arguments.length > 2) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }else {
    return function() {
      return a.apply(b, arguments)
    }
  }
}
function A(a, b, c) {
  A = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? la : ma;
  return A.apply(l, arguments)
}
function na(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var B = Date.now || function() {
  return+new Date
};
function C(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.c = b.prototype;
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
var oa, pa, qa, ra;
oa = RegExp("(?:\\b[a-z\\d.-]+://[^<>\\s]+|\\b(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:[;/][^#?<>\\s]*)?(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w)|(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w))", 
"ig");
pa = /^[a-z\d.-]+:\/\//i;
qa = {"'":"`", ">":"<", ")":"(", "]":"[", "}":"{", "\u00bb":"\u00ab", "\u203a":"\u2039"};
ra = {la:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, Je:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
function sa(a) {
  var b;
  b = b || {};
  var c = [], d, e;
  for(e in ra) {
    fa(b[e]) || (b[e] = ra[e])
  }
  for(;e = oa.exec(a);) {
    e = e[0];
    var g = oa.lastIndex, h = g - e.length;
    if(!/[\/:]/.test(a.charAt(h - 1))) {
      do {
        var j = e, k = e.substr(-1), n = qa[k];
        if(n && (n = e.match(RegExp("\\" + n + "(?!$)", "g")), k = e.match(RegExp("\\" + k, "g")), (n ? n.length : 0) < (k ? k.length : 0))) {
          e = e.substr(0, e.length - 1), g--
        }
        b.Je && (e = e.replace(b.Je, function(a) {
          g -= a.length;
          return""
        }))
      }while(e.length && e !== j);
      j = e;
      pa.test(j) || (j = (j.indexOf("@") !== -1 ? !j.indexOf("mailto:") ? "" : "mailto:" : !j.indexOf("irc.") ? "irc://" : !j.indexOf("ftp.") ? "ftp://" : "http://") + j);
      d != h && (c.push([a.slice(d, h)]), d = g);
      c.push([e, j])
    }
  }
  c.push([a.substr(d)]);
  d = "";
  for(e = 0;e < c.length;e++) {
    d += b.la.apply(r, c[e])
  }
  return d || a
}
;function D(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = String(a)
  }
}
C(D, Error);
D.prototype.name = "CustomError";
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
    var j = d[h] || "", k = e[h] || "", n = RegExp("(\\d*)(\\D*)", "g"), z = RegExp("(\\d*)(\\D*)", "g");
    do {
      var p = n.exec(j) || ["", "", ""], v = z.exec(k) || ["", "", ""];
      if(p[0].length == 0 && v[0].length == 0) {
        break
      }
      c = Ga(p[1].length == 0 ? 0 : parseInt(p[1], 10), v[1].length == 0 ? 0 : parseInt(v[1], 10)) || Ga(p[2].length == 0, v[2].length == 0) || Ga(p[2], v[2])
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
  D.call(this, ta.apply(l, b));
  b.shift();
  this.lg = a
}
C(Ha, D);
Ha.prototype.name = "AssertionError";
function Ia(a, b) {
  f(new Ha("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ja(a, b, c) {
  this.L = a;
  this.A = b;
  this.fd = c.name;
  this.Ya = !!c.mg;
  this.jg = !!c.required;
  this.vb = c.Ua;
  this.ye = c.type;
  this.Sd = !1;
  switch(this.vb) {
    case Ka:
    ;
    case La:
    ;
    case Ma:
    ;
    case Na:
    ;
    case Oa:
      this.Sd = !0
  }
  this.fg = c.defaultValue
}
var Ka = 3, La = 4, Ma = 6, Na = 16, Oa = 18;
function Pa(a) {
  return a.vb == 11 || a.vb == 10
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
var Ta = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
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
  if(u(a)) {
    return!u(b) || b.length != 1 ? -1 : a.indexOf(b, c)
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
  for(var d = a.length, e = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
}, Xa = E.map ? function(a, b, c) {
  return E.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), g = u(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (e[h] = b.call(c, g[h], h, a))
  }
  return e
}, Ya = E.some ? function(a, b, c) {
  return E.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && b.call(c, e[g], g, a)) {
      return!0
    }
  }
  return!1
}, Za = E.every ? function(a, b, c) {
  return E.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = u(a) ? a.split("") : a, g = 0;g < d;g++) {
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
  if(t(a)) {
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
    if(t(d) || (e = ga(d)) && d.hasOwnProperty("callee")) {
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
  this.we = a;
  this.fd = b.name || l;
  this.gg = b.Wd || l;
  this.eg = b.dg;
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
  this.o = {};
  this.Sa = this.constructor.Sa;
  var a = this.Sa.oa, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.oa = b;
  this.Ba = this.ad = l
}
function lb(a, b) {
  for(var c in a.o) {
    a.oa[c] || b.call(a, c, a.o[c])
  }
}
q = kb.prototype;
q.xb = m("Sa");
q.get = function(a, b) {
  return mb(this, a.A, b)
};
q.set = function(a, b) {
  var c = a.A;
  this.o[c] = b;
  this.Ba && (this.Ba[c] = !0)
};
q.add = function(a, b) {
  var c = a.A;
  this.o[c] || (this.o[c] = []);
  this.o[c].push(b)
};
q.clear = function(a) {
  delete this.o[a.A]
};
q.k = function(a) {
  if(!a || this.constructor != a.constructor) {
    return!1
  }
  for(var b = jb(this.xb()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(nb(this, d.A) != nb(a, d.A)) {
      return!1
    }
    if(nb(this, d.A)) {
      var e = Pa(d), g = d.A, h = this.o[g], g = a.o[g];
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
q.H = function() {
  for(var a = new this.constructor, b = jb(a.xb()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete a.o[d.A];
    if(nb(this, d.A)) {
      var e = Pa(d);
      if(d.Ya) {
        var g;
        g = d.A;
        ob(this, this.oa[g]);
        g = this.o[g] || [];
        for(var h = 0;h < g.length;h++) {
          a.add(d, e ? g[h].H() : g[h])
        }
      }else {
        g = this.get(d), a.set(d, e ? g.H() : g)
      }
    }
  }
  return a
};
function nb(a, b) {
  return b in a.o && fa(a.o[b])
}
function ob(a, b) {
  if(a.ad) {
    var c = b.A;
    if(!(c in a.Ba)) {
      var d = a.o, e;
      e = a.ad;
      var g = a.o[c];
      if(g == l) {
        e = g
      }else {
        if(b.Ya) {
          var h = [];
          t(g);
          for(var j = 0;j < g.length;j++) {
            h[j] = e.ec(b, g[j])
          }
          e = h
        }else {
          e = e.ec(b, g)
        }
      }
      d[c] = e;
      a.Ba[c] = !0
    }
  }
}
function mb(a, b, c) {
  var d = a.oa[b];
  ob(a, d);
  return d.Ya ? (c = c || 0, c >= 0 && pb(a, b), a.o[b][c]) : (t(a.o[b]), b in a.o ? a.o[b] : l)
}
function pb(a, b) {
  return a.oa[b].Ya ? (nb(a, b) && t(a.o[b]), nb(a, b) ? a.o[b].length : 0) : nb(a, b) ? 1 : 0
}
function qb(a, b) {
  var c = [], d, e;
  for(e in b) {
    b.hasOwnProperty(e) && (e == 0 ? d = b[0] : c.push(new Ja(a, e, b[e])))
  }
  a.Sa = new ib(a, d, c);
  a.xb = function() {
    return a.Sa
  }
}
;function rb() {
}
rb.prototype.fc = function(a, b) {
  return Pa(a) ? this.Pb(b) : b
};
rb.prototype.Mc = function(a) {
  new a.we;
  f(Error("Unimplemented"))
};
rb.prototype.ec = function(a, b) {
  if(Pa(a)) {
    return this.Mc(a.ye.Sa, b)
  }
  if(!a.Sd) {
    return b
  }
  var c = a.ye;
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
C(sb, rb);
sb.prototype.Mc = function(a, b) {
  var c = new a.we;
  c.ad = this;
  c.o = b;
  c.Ba = {};
  return c
};
function tb() {
}
C(tb, sb);
tb.prototype.Pb = function(a) {
  for(var b = jb(a.xb()), c = [], d = 0;d < b.length;d++) {
    var e = b[d];
    if(nb(a, e.A)) {
      var g = e.A;
      if(e.Ya) {
        c[g] = [];
        for(var h = 0;h < pb(a, e.A);h++) {
          c[g][h] = this.fc(e, a.get(e, h))
        }
      }else {
        c[g] = this.fc(e, a.get(e))
      }
    }
  }
  lb(a, function(a, b) {
    c[a] = b
  });
  return c
};
tb.prototype.fc = function(a, b) {
  return a.vb == 8 ? b ? 1 : 0 : rb.prototype.fc.apply(this, arguments)
};
tb.prototype.ec = function(a, b) {
  return a.vb == 8 ? b === 1 : rb.prototype.ec.apply(this, arguments)
};
function ub(a) {
  return w(a) || typeof a == "object" && w(a.call) && w(a.apply)
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
wb.prototype.Pb = function(a) {
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
      if(t(b)) {
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
          if(ub(a.bf)) {
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
                  if(ha(a) && typeof a.valueOf == "function") {
                    b.push("new Date(", String(a.valueOf()), ")")
                  }else {
                    for(var d = Sa(a).concat(Ta), e = {}, h = g = 0;h < d.length;) {
                      var j = d[h++], k = ia(j) ? "o" + x(j) : (typeof j).charAt(0) + j;
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
  if(typeof a.t == "function") {
    a = a.t()
  }else {
    if(ga(a) || u(a)) {
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
  if(typeof a.K == "function") {
    return a.K()
  }
  if(u(a)) {
    return a.split("")
  }
  if(ga(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Ra(a)
}
function Eb(a) {
  if(typeof a.ra == "function") {
    return a.ra()
  }
  if(typeof a.K != "function") {
    if(ga(a) || u(a)) {
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
    if(ga(a) || u(a)) {
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
  if(ga(a) || u(a)) {
    return Za(a, b, i)
  }
  for(var c = Eb(a), d = Db(a), e = d.length, g = 0;g < e;g++) {
    if(!b.call(i, d[g], c && c[g], a)) {
      return!1
    }
  }
  return!0
}
;function H(a, b) {
  this.m = {};
  this.j = [];
  var c = arguments.length;
  if(c > 1) {
    c % 2 && f(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.Fc(a)
  }
}
q = H.prototype;
q.e = 0;
q.Bd = 0;
q.t = m("e");
q.K = function() {
  Hb(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.m[this.j[b]])
  }
  return a
};
q.ra = function() {
  Hb(this);
  return this.j.concat()
};
q.P = function(a) {
  return Ib(this.m, a)
};
q.ac = function(a) {
  for(var b = 0;b < this.j.length;b++) {
    var c = this.j[b];
    if(Ib(this.m, c) && this.m[c] == a) {
      return!0
    }
  }
  return!1
};
q.k = function(a, b) {
  if(this === a) {
    return!0
  }
  if(this.e != a.t()) {
    return!1
  }
  var c = b || Jb;
  Hb(this);
  for(var d, e = 0;d = this.j[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return!1
    }
  }
  return!0
};
function Jb(a, b) {
  return a === b
}
q.Ia = function() {
  return this.e == 0
};
q.clear = function() {
  this.m = {};
  this.Bd = this.e = this.j.length = 0
};
q.remove = function(a) {
  return Ib(this.m, a) ? (delete this.m[a], this.e--, this.Bd++, this.j.length > 2 * this.e && Hb(this), !0) : !1
};
function Hb(a) {
  if(a.e != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      Ib(a.m, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.e != a.j.length) {
    for(var e = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], Ib(e, d) || (a.j[c++] = d, e[d] = 1), b++
    }
    a.j.length = c
  }
}
q.get = function(a, b) {
  return Ib(this.m, a) ? this.m[a] : b
};
q.set = function(a, b) {
  Ib(this.m, a) || (this.e++, this.j.push(a), this.Bd++);
  this.m[a] = b
};
q.Fc = function(a) {
  var b;
  a instanceof H ? (b = a.ra(), a = a.K()) : (b = Sa(a), a = Ra(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
q.H = function() {
  return new H(this)
};
function Kb(a) {
  Hb(a);
  for(var b = {}, c = 0;c < a.j.length;c++) {
    var d = a.j[c];
    b[d] = a.m[d]
  }
  return b
}
function Ib(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function Lb(a) {
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
;function Mb(a, b) {
  this.Pa = a;
  this.Ma = b
}
Mb.prototype.k = function(a) {
  return a instanceof Mb && this.Pa == a.Pa && this.Ma.join(",") == a.Ma
};
Mb.prototype.B = function(a, b) {
  a.push("new SACK(", String(this.Pa), ", ");
  F(this.Ma, a, b);
  a.push(")")
};
function Nb() {
  this.F = new H
}
q = Nb.prototype;
q.Ra = -1;
q.ya = 0;
q.append = function(a) {
  var b = Lb(a);
  this.F.set(this.Ra + 1, [a, b]);
  this.Ra += 1;
  this.ya += b
};
q.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
q.B = function(a) {
  a.push("<Queue with ", String(this.F.t()), " item(s), counter=#", String(this.Ra), ", size=", String(this.ya), ">")
};
function Ob(a) {
  Hb(a.F);
  gb(a.F.j);
  return a.F.j
}
function Pb() {
  this.za = new H
}
Pb.prototype.$a = -1;
Pb.prototype.ya = 0;
function Qb(a) {
  var b = a.za.ra();
  gb(b);
  return new Mb(a.$a, b)
}
var Rb = {};
function Sb() {
  return!0
}
;var Tb, Ub, Vb, Wb, Xb;
function Yb() {
  return r.navigator ? r.navigator.userAgent : l
}
Xb = Wb = Vb = Ub = Tb = !1;
var Zb;
if(Zb = Yb()) {
  var $b = r.navigator;
  Tb = Zb.indexOf("Opera") == 0;
  Ub = !Tb && Zb.indexOf("MSIE") != -1;
  Wb = (Vb = !Tb && Zb.indexOf("WebKit") != -1) && Zb.indexOf("Mobile") != -1;
  Xb = !Tb && !Vb && $b.product == "Gecko"
}
var ac = Tb, I = Ub, bc = Xb, J = Vb, cc = Wb, dc = r.navigator, ec = (dc && dc.platform || "").indexOf("Mac") != -1, fc;
a: {
  var gc = "", hc;
  if(ac && r.opera) {
    var ic = r.opera.version, gc = typeof ic == "function" ? ic() : ic
  }else {
    if(bc ? hc = /rv\:([^\);]+)(\)|;)/ : I ? hc = /MSIE\s+([^\);]+)(\)|;)/ : J && (hc = /WebKit\/(\S+)/), hc) {
      var jc = hc.exec(Yb()), gc = jc ? jc[1] : ""
    }
  }
  if(I) {
    var kc, lc = r.document;
    kc = lc ? lc.documentMode : i;
    if(kc > parseFloat(gc)) {
      fc = String(kc);
      break a
    }
  }
  fc = gc
}
var mc = {};
function nc(a) {
  return mc[a] || (mc[a] = Fa(fc, a) >= 0)
}
var oc = {};
function pc() {
  return oc[9] || (oc[9] = I && document.documentMode && document.documentMode >= 9)
}
;var qc;
var rc = !I || pc(), sc = I && !nc("8");
function K() {
}
K.prototype.Y = !1;
K.prototype.d = function() {
  if(!this.Y) {
    this.Y = !0, this.b()
  }
};
K.prototype.b = function() {
  this.kf && tc.apply(l, this.kf)
};
function tc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ga(d) ? tc.apply(l, d) : d && typeof d.d == "function" && d.d()
  }
}
;function uc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
C(uc, K);
q = uc.prototype;
q.b = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
q.Ka = !1;
q.Mb = !0;
q.stopPropagation = function() {
  this.Ka = !0
};
q.preventDefault = function() {
  this.Mb = !1
};
var vc = new Function("a", "return a");
function wc(a, b) {
  a && this.Ha(a, b)
}
C(wc, uc);
var xc = [1, 4, 2];
q = wc.prototype;
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
q.Jf = !1;
q.ea = l;
q.Ha = function(a, b) {
  var c = this.type = a.type;
  uc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(bc) {
      var e;
      a: {
        try {
          vc(d.nodeName);
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
  this.Jf = ec ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ea = a;
  delete this.Mb;
  delete this.Ka
};
function yc(a) {
  return rc ? a.ea.button == 0 : a.type == "click" ? !0 : !!(a.ea.button & xc[0])
}
q.stopPropagation = function() {
  wc.c.stopPropagation.call(this);
  this.ea.stopPropagation ? this.ea.stopPropagation() : this.ea.cancelBubble = !0
};
q.preventDefault = function() {
  wc.c.preventDefault.call(this);
  var a = this.ea;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, sc) {
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
  wc.c.b.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ea = l
};
function zc() {
}
var Ac = 0;
q = zc.prototype;
q.key = 0;
q.La = !1;
q.Ic = !1;
q.Ha = function(a, b, c, d, e, g) {
  w(a) ? this.me = !0 : a && a.handleEvent && w(a.handleEvent) ? this.me = !1 : f(Error("Invalid listener argument"));
  this.bb = a;
  this.Ie = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.kc = g;
  this.Ic = !1;
  this.key = ++Ac;
  this.La = !1
};
q.handleEvent = function(a) {
  return this.me ? this.bb.call(this.kc || this.src, a) : this.bb.handleEvent.call(this.bb, a)
};
var Bc, Cc = (Bc = "ScriptEngine" in r && r.ScriptEngine() == "JScript") ? r.ScriptEngineMajorVersion() + "." + r.ScriptEngineMinorVersion() + "." + r.ScriptEngineBuildVersion() : "0";
function L(a, b) {
  this.se = b;
  this.Ea = [];
  a > this.se && f(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.Ea.push(this.ca ? this.ca() : {})
  }
}
C(L, K);
L.prototype.ca = l;
L.prototype.Td = l;
L.prototype.getObject = function() {
  return this.Ea.length ? this.Ea.pop() : this.ca ? this.ca() : {}
};
function Dc(a, b) {
  a.Ea.length < a.se ? a.Ea.push(b) : Ec(a, b)
}
function Ec(a, b) {
  if(a.Td) {
    a.Td(b)
  }else {
    if(ia(b)) {
      if(w(b.d)) {
        b.d()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
L.prototype.b = function() {
  L.c.b.call(this);
  for(var a = this.Ea;a.length;) {
    Ec(this, a.pop())
  }
  delete this.Ea
};
var Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc;
(function() {
  function a() {
    return{e:0, U:0}
  }
  function b() {
    return[]
  }
  function c() {
    function a(b) {
      b = h.call(a.src, a.key, b);
      if(!b) {
        return b
      }
    }
    return a
  }
  function d() {
    return new zc
  }
  function e() {
    return new wc
  }
  var g = Bc && !(Fa(Cc, "5.7") >= 0), h;
  Kc = function(a) {
    h = a
  };
  if(g) {
    Fc = function() {
      return j.getObject()
    };
    Gc = function(a) {
      Dc(j, a)
    };
    Hc = function() {
      return k.getObject()
    };
    Ic = function(a) {
      Dc(k, a)
    };
    Jc = function() {
      return n.getObject()
    };
    Lc = function() {
      Dc(n, c())
    };
    Mc = function() {
      return z.getObject()
    };
    Nc = function(a) {
      Dc(z, a)
    };
    Oc = function() {
      return p.getObject()
    };
    Pc = function(a) {
      Dc(p, a)
    };
    var j = new L(0, 600);
    j.ca = a;
    var k = new L(0, 600);
    k.ca = b;
    var n = new L(0, 600);
    n.ca = c;
    var z = new L(0, 600);
    z.ca = d;
    var p = new L(0, 600);
    p.ca = e
  }else {
    Fc = a, Gc = s, Hc = b, Ic = s, Jc = c, Lc = s, Mc = d, Nc = s, Oc = e, Pc = s
  }
})();
var Qc = {}, M = {}, Rc = {}, Sc = {};
function N(a, b, c, d, e) {
  if(b) {
    if(t(b)) {
      for(var g = 0;g < b.length;g++) {
        N(a, b[g], c, d, e)
      }
      return l
    }else {
      var d = !!d, h = M;
      b in h || (h[b] = Fc());
      h = h[b];
      d in h || (h[d] = Fc(), h.e++);
      var h = h[d], j = x(a), k;
      h.U++;
      if(h[j]) {
        k = h[j];
        for(g = 0;g < k.length;g++) {
          if(h = k[g], h.bb == c && h.kc == e) {
            if(h.La) {
              break
            }
            return k[g].key
          }
        }
      }else {
        k = h[j] = Hc(), h.e++
      }
      g = Jc();
      g.src = a;
      h = Mc();
      h.Ha(c, g, a, b, d, e);
      c = h.key;
      g.key = c;
      k.push(h);
      Qc[c] = h;
      Rc[j] || (Rc[j] = Hc());
      Rc[j].push(h);
      a.addEventListener ? (a == r || !a.Od) && a.addEventListener(b, g, d) : a.attachEvent(b in Sc ? Sc[b] : Sc[b] = "on" + b, g);
      return c
    }
  }else {
    f(Error("Invalid event type"))
  }
}
function Tc(a, b, c, d, e) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      Tc(a, b[g], c, d, e)
    }
    return l
  }
  a = N(a, b, c, d, e);
  Qc[a].Ic = !0;
  return a
}
function Uc(a, b, c, d, e) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      Uc(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = Vc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].bb == c && a[g].capture == d && a[g].kc == e) {
          O(a[g].key);
          break
        }
      }
    }
  }
}
function O(a) {
  if(!Qc[a]) {
    return!1
  }
  var b = Qc[a];
  if(b.La) {
    return!1
  }
  var c = b.src, d = b.type, e = b.Ie, g = b.capture;
  c.removeEventListener ? (c == r || !c.Od) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in Sc ? Sc[d] : Sc[d] = "on" + d, e);
  c = x(c);
  e = M[d][g][c];
  if(Rc[c]) {
    var h = Rc[c];
    ab(h, b);
    h.length == 0 && delete Rc[c]
  }
  b.La = !0;
  e.Ae = !0;
  Wc(d, g, c, e);
  delete Qc[a];
  return!0
}
function Wc(a, b, c, d) {
  if(!d.pc && d.Ae) {
    for(var e = 0, g = 0;e < d.length;e++) {
      if(d[e].La) {
        var h = d[e].Ie;
        h.src = l;
        Lc(h);
        Nc(d[e])
      }else {
        e != g && (d[g] = d[e]), g++
      }
    }
    d.length = g;
    d.Ae = !1;
    g == 0 && (Ic(d), delete M[a][b][c], M[a][b].e--, M[a][b].e == 0 && (Gc(M[a][b]), delete M[a][b], M[a].e--), M[a].e == 0 && (Gc(M[a]), delete M[a]))
  }
}
function Xc(a) {
  var b, c = 0, d = b == l;
  b = !!b;
  if(a == l) {
    Qa(Rc, function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          O(g.key), c++
        }
      }
    })
  }else {
    if(a = x(a), Rc[a]) {
      for(var a = Rc[a], e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          O(g.key), c++
        }
      }
    }
  }
}
function Vc(a, b, c) {
  var d = M;
  return b in d && (d = d[b], c in d && (d = d[c], a = x(a), d[a])) ? d[a] : l
}
function Yc(a, b, c, d, e) {
  var g = 1, b = x(b);
  if(a[b]) {
    a.U--;
    a = a[b];
    a.pc ? a.pc++ : a.pc = 1;
    try {
      for(var h = a.length, j = 0;j < h;j++) {
        var k = a[j];
        k && !k.La && (g &= Zc(k, e) !== !1)
      }
    }finally {
      a.pc--, Wc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Zc(a, b) {
  var c = a.handleEvent(b);
  a.Ic && O(a.key);
  return c
}
Kc(function(a, b) {
  if(!Qc[a]) {
    return!0
  }
  var c = Qc[a], d = c.type, e = M;
  if(!(d in e)) {
    return!0
  }
  var e = e[d], g, h;
  qc === i && (qc = I && !r.addEventListener);
  if(qc) {
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
          }catch(z) {
            n = !0
          }
        }
        if(n || g.returnValue == i) {
          g.returnValue = !0
        }
      }
    }
    n = Oc();
    n.Ha(g, this);
    g = !0;
    try {
      if(j) {
        for(var p = Hc(), v = n.currentTarget;v;v = v.parentNode) {
          p.push(v)
        }
        h = e[!0];
        h.U = h.e;
        for(var y = p.length - 1;!n.Ka && y >= 0 && h.U;y--) {
          n.currentTarget = p[y], g &= Yc(h, p[y], d, !0, n)
        }
        if(k) {
          h = e[!1];
          h.U = h.e;
          for(y = 0;!n.Ka && y < p.length && h.U;y++) {
            n.currentTarget = p[y], g &= Yc(h, p[y], d, !1, n)
          }
        }
      }else {
        g = Zc(c, n)
      }
    }finally {
      if(p) {
        p.length = 0, Ic(p)
      }
      n.d();
      Pc(n)
    }
    return g
  }
  d = new wc(b, this);
  try {
    g = Zc(c, d)
  }finally {
    d.d()
  }
  return g
});
var $c = 0;
function ad() {
}
C(ad, K);
q = ad.prototype;
q.Od = !0;
q.rc = l;
q.pd = aa("rc");
q.addEventListener = function(a, b, c, d) {
  N(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Uc(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = M;
  if(b in c) {
    if(u(a)) {
      a = new uc(a, this)
    }else {
      if(a instanceof uc) {
        a.target = a.target || this
      }else {
        var d = a, a = new uc(b, this);
        Ua(a, d)
      }
    }
    var d = 1, e, c = c[b], b = !0 in c, g;
    if(b) {
      e = [];
      for(g = this;g;g = g.rc) {
        e.push(g)
      }
      g = c[!0];
      g.U = g.e;
      for(var h = e.length - 1;!a.Ka && h >= 0 && g.U;h--) {
        a.currentTarget = e[h], d &= Yc(g, e[h], a.type, !0, a) && a.Mb != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.U = g.e, b) {
        for(h = 0;!a.Ka && h < e.length && g.U;h++) {
          a.currentTarget = e[h], d &= Yc(g, e[h], a.type, !1, a) && a.Mb != !1
        }
      }else {
        for(e = this;!a.Ka && e && g.U;e = e.rc) {
          a.currentTarget = e, d &= Yc(g, e, a.type, !1, a) && a.Mb != !1
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
  ad.c.b.call(this);
  Xc(this);
  this.rc = l
};
var bd = r.window;
$c++;
$c++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function cd(a, b) {
  this.Zb = [];
  this.Hd = a;
  this.Qd = b || l
}
q = cd.prototype;
q.pa = !1;
q.zb = !1;
q.Hb = 0;
q.sd = !1;
q.ef = !1;
q.cancel = function() {
  this.pa ? this.Lb instanceof cd && this.Lb.cancel() : (this.Hd ? this.Hd.call(this.Qd, this) : this.sd = !0, this.pa || this.bc(new dd(this)))
};
q.Ld = function(a, b) {
  ed(this, a, b);
  this.Hb--;
  this.Hb == 0 && this.pa && fd(this)
};
function ed(a, b, c) {
  a.pa = !0;
  a.Lb = c;
  a.zb = !b;
  fd(a)
}
function gd(a) {
  if(a.pa) {
    a.sd || f(new hd(a)), a.sd = !1
  }
}
q.la = function(a) {
  gd(this);
  ed(this, !0, a)
};
q.bc = function(a) {
  gd(this);
  ed(this, !1, a)
};
function id(a, b) {
  jd(a, b, l, i)
}
function jd(a, b, c, d) {
  a.Zb.push([b, c, d]);
  a.pa && fd(a)
}
function kd(a) {
  return Ya(a.Zb, function(a) {
    return w(a[1])
  })
}
function fd(a) {
  a.zd && a.pa && kd(a) && (r.clearTimeout(a.zd), delete a.zd);
  for(var b = a.Lb, c = !1, d = !1;a.Zb.length && a.Hb == 0;) {
    var e = a.Zb.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.zb ? h : g) {
      try {
        var j = g.call(e || a.Qd, b);
        if(fa(j)) {
          a.zb = a.zb && (j == b || j instanceof Error), a.Lb = b = j
        }
        b instanceof cd && (d = !0, a.Hb++)
      }catch(k) {
        b = k, a.zb = !0, kd(a) || (c = !0)
      }
    }
  }
  a.Lb = b;
  if(d && a.Hb) {
    jd(b, A(a.Ld, a, !0), A(a.Ld, a, !1)), b.ef = !0
  }
  if(c) {
    a.zd = r.setTimeout(function() {
      f(b)
    }, 0)
  }
}
function ld(a) {
  var b = new cd;
  b.la(a);
  return b
}
function hd(a) {
  D.call(this);
  this.jf = a
}
C(hd, D);
hd.prototype.message = "Already called";
function dd(a) {
  D.call(this);
  this.jf = a
}
C(dd, D);
dd.prototype.message = "Deferred was cancelled";
function md(a) {
  this.G = a;
  this.Oc = [];
  this.Ud = [];
  this.cg = A(this.Yf, this)
}
md.prototype.Xf = l;
md.prototype.Yf = function() {
  this.Xf = l;
  var a = this.Oc;
  this.Oc = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], e = c[1], c = c[2];
    try {
      d.apply(e, c)
    }catch(g) {
      this.G.setTimeout(function() {
        f(g)
      }, 0)
    }
  }
  if(this.Oc.length == 0) {
    a = this.Ud;
    this.Ud = [];
    for(b = 0;b < a.length;b++) {
      a[b].la(l)
    }
  }
};
new md(r.window);
function nd() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ B()).toString(36)
}
function od(a) {
  return a.substr(0, a.length - 1)
}
var pd = /^(0|[1-9]\d*)$/, qd = /^(0|\-?[1-9]\d*)$/;
function rd(a) {
  var b = sd;
  return pd.test(a) && (a = parseInt(a, 10), a <= b) ? a : l
}
;function td(a) {
  this.m = new H;
  a && this.Fc(a)
}
function ud(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + x(a) : b.substr(0, 1) + a
}
q = td.prototype;
q.t = function() {
  return this.m.t()
};
q.add = function(a) {
  this.m.set(ud(a), a)
};
q.Fc = function(a) {
  for(var a = Db(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
q.nd = function(a) {
  for(var a = Db(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
q.remove = function(a) {
  return this.m.remove(ud(a))
};
q.clear = function() {
  this.m.clear()
};
q.Ia = function() {
  return this.m.Ia()
};
q.contains = function(a) {
  return this.m.P(ud(a))
};
q.K = function() {
  return this.m.K()
};
q.H = function() {
  return new td(this)
};
q.k = function(a) {
  return this.t() == Cb(a) && vd(this, a)
};
function vd(a, b) {
  var c = Cb(b);
  if(a.t() > c) {
    return!1
  }
  !(b instanceof td) && c > 5 && (b = new td(b));
  return Gb(a, function(a) {
    if(typeof b.contains == "function") {
      a = b.contains(a)
    }else {
      if(typeof b.ac == "function") {
        a = b.ac(a)
      }else {
        if(ga(b) || u(b)) {
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
;function wd(a) {
  return xd(a || arguments.callee.caller, [])
}
function xd(a, b) {
  var c = [];
  if($a(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(yd(a) + "(");
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
            g = (g = yd(g)) ? g : "[fn]";
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
        c.push(xd(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function yd(a) {
  if(zd[a]) {
    return zd[a]
  }
  a = String(a);
  if(!zd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    zd[a] = b ? b[1] : "[Anonymous]"
  }
  return zd[a]
}
var zd = {};
function Ad(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Ad.prototype.Of = 0;
Ad.prototype.Qc = l;
Ad.prototype.Pc = l;
var Bd = 0;
Ad.prototype.reset = function(a, b, c, d, e) {
  this.Of = typeof e == "number" ? e : Bd++;
  this.Se = d || B();
  this.S = a;
  this.xe = b;
  this.re = c;
  delete this.Qc;
  delete this.Pc
};
Ad.prototype.kb = aa("S");
function Cd(a) {
  this.fd = a
}
Cd.prototype.L = l;
Cd.prototype.S = l;
Cd.prototype.ma = l;
Cd.prototype.Bb = l;
function P(a, b) {
  this.name = a;
  this.value = b
}
P.prototype.toString = m("name");
var Dd = new P("SHOUT", 1200), Ed = new P("SEVERE", 1E3), Fd = new P("WARNING", 900), Gd = new P("INFO", 800), Hd = new P("CONFIG", 700), Id = new P("FINE", 500), Jd = new P("FINEST", 300), Kd = new P("ALL", 0), Ld = [new P("OFF", Infinity), Dd, Ed, Fd, Gd, Hd, Id, new P("FINER", 400), Jd, Kd], Md = l;
function Nd(a) {
  if(!Md) {
    Md = {};
    for(var b = 0, c;c = Ld[b];b++) {
      Md[c.value] = c, Md[c.name] = c
    }
  }
  return Md[a] || l
}
q = Cd.prototype;
q.getParent = m("L");
q.kb = aa("S");
function Od(a) {
  if(a.S) {
    return a.S
  }
  if(a.L) {
    return Od(a.L)
  }
  Ia("Root logger has no level set.");
  return l
}
q.log = function(a, b, c) {
  if(a.value >= Od(this).value) {
    a = this.tf(a, b, c);
    r.console && r.console.markTimeline && r.console.markTimeline("log:" + a.xe);
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
q.tf = function(a, b, c) {
  var d = new Ad(a, String(b), this.fd);
  if(c) {
    d.Qc = c;
    var e;
    var g = arguments.callee.caller;
    try {
      var h;
      var j = ca("window.location.href");
      if(u(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var k, n, z = !1;
        try {
          k = c.lineNumber || c.kg || "Not available"
        }catch(p) {
          k = "Not available", z = !0
        }
        try {
          n = c.fileName || c.filename || c.sourceURL || j
        }catch(v) {
          n = "Not available", z = !0
        }
        h = z || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:k, fileName:n, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + ya(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + ya(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ya(wd(g) + "-> ")
    }catch(y) {
      e = "Exception trying to expose exception! You win, we lose. " + y
    }
    d.Pc = e
  }
  return d
};
function Pd(a, b) {
  a.log(Ed, b, i)
}
function Rd(a, b) {
  a.log(Fd, b, i)
}
q.info = function(a, b) {
  this.log(Gd, a, b)
};
function Q(a, b) {
  a.log(Id, b, i)
}
function R(a, b) {
  a.log(Jd, b, i)
}
var Sd = {}, Td = l;
function Ud() {
  Td || (Td = new Cd(""), Sd[""] = Td, Td.kb(Hd))
}
function Vd() {
  Ud();
  return Td
}
function S(a) {
  Ud();
  var b;
  if(!(b = Sd[a])) {
    b = new Cd(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = S(a.substr(0, c));
    if(!c.ma) {
      c.ma = {}
    }
    c.ma[d] = b;
    b.L = c;
    Sd[a] = b
  }
  return b
}
;S("cw.net.FlashSocket");
S("cw.net.FlashSocketTracker");
function Wd(a) {
  this.na = a;
  this.Hc = []
}
C(Wd, K);
Wd.prototype.a = S("cw.net.FlashSocketConduit");
Wd.prototype.Ed = function(a) {
  this.Hc ? (R(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Hc.push.apply(this.Hc, a)) : (R(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.td.Ed(a))
};
Wd.prototype.Jd = function(a, b) {
  this.td.Jd(a, b)
};
Wd.prototype.b = function() {
  this.a.info("in disposeInternal.");
  Wd.c.b.call(this);
  this.td.d();
  delete this.na
};
function Xd() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;var sd = Math.pow(2, 53);
var Yd = {bf:o("<cw.eq.Wildcard>")};
function Zd(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function $d(a, b, c) {
  var d = ea(a), e = ea(b);
  if(a == Yd || b == Yd) {
    return!0
  }else {
    if(a != l && typeof a.k == "function") {
      return c && c.push("running custom equals function on left object"), a.k(b, c)
    }else {
      if(b != l && typeof b.k == "function") {
        return c && c.push("running custom equals function on right object"), b.k(a, c)
      }else {
        if(Zd(d) || Zd(e)) {
          a = a === b
        }else {
          if(a instanceof RegExp && b instanceof RegExp) {
            a = a.toString() === b.toString()
          }else {
            if(ha(a) && ha(b)) {
              a = a.valueOf() === b.valueOf()
            }else {
              if(d == "array" && e == "array") {
                a: {
                  if(c && c.push("descending into array"), a.length != b.length) {
                    c && c.push("array length mismatch: " + a.length + ", " + b.length), a = !1
                  }else {
                    d = 0;
                    for(e = a.length;d < e;d++) {
                      if(!$d(a[d], b[d], c)) {
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
                if(a.af == Sb && b.af == Sb) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = !1;
                        break a
                      }
                      if(!$d(a[g], b[g], c)) {
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
  D.call(this, a)
}
C(T, D);
T.prototype.name = "cw.net.InvalidFrame";
function U() {
  var a = [];
  this.R(a);
  return a.join("")
}
function ae() {
}
ae.prototype.k = function(a, b) {
  return!(a instanceof ae) ? !1 : $d(be(this), be(a), b)
};
ae.prototype.B = function(a, b) {
  a.push("<HelloFrame properties=");
  F(be(this), a, b);
  a.push(">")
};
function be(a) {
  return[a.nb, a.Ge, a.ge, a.Le, a.Tb, a.wd, a.ze, a.ve, a.dd, a.te, a.Xe, a.Re, a.W, a.oc]
}
ae.prototype.O = U;
ae.prototype.R = function(a) {
  var b = {};
  b.tnum = this.nb;
  b.ver = this.Ge;
  b.format = this.ge;
  b["new"] = this.Le;
  b.id = this.Tb;
  b.ming = this.wd;
  b.pad = this.ze;
  b.maxb = this.ve;
  if(fa(this.dd)) {
    b.maxt = this.dd
  }
  b.maxia = this.te;
  b.tcpack = this.Xe;
  b.eeds = this.Re;
  b.sack = this.W instanceof Mb ? od((new V(this.W)).O()) : this.W;
  b.seenack = this.oc instanceof Mb ? od((new V(this.oc)).O()) : this.oc;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new wb).Pb(b), "H")
};
function ce(a) {
  this.mb = a
}
ce.prototype.k = function(a) {
  return a instanceof ce && this.mb == a.mb
};
ce.prototype.B = function(a, b) {
  a.push("new StringFrame(");
  F(this.mb, a, b);
  a.push(")")
};
ce.prototype.O = U;
ce.prototype.R = function(a) {
  a.push(this.mb, " ")
};
function de(a) {
  this.$b = a
}
de.prototype.k = function(a) {
  return a instanceof de && this.$b == a.$b
};
de.prototype.B = function(a, b) {
  a.push("new CommentFrame(");
  F(this.$b, a, b);
  a.push(")")
};
de.prototype.O = U;
de.prototype.R = function(a) {
  a.push(this.$b, "^")
};
function ee(a) {
  this.Ob = a
}
ee.prototype.k = function(a) {
  return a instanceof ee && this.Ob == a.Ob
};
ee.prototype.B = function(a) {
  a.push("new SeqNumFrame(", String(this.Ob), ")")
};
ee.prototype.O = U;
ee.prototype.R = function(a) {
  a.push(String(this.Ob), "N")
};
function fe(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return l
  }
  a: {
    var c = b[1], a = sd;
    if(qd.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
      var g = rd(b[d]);
      if(g == l) {
        return l
      }
      c.push(g)
    }
  }
  return new Mb(a, c)
}
function V(a) {
  this.W = a
}
V.prototype.k = function(a, b) {
  return a instanceof V && this.W.k(a.W, b)
};
V.prototype.B = function(a, b) {
  a.push("new SackFrame(");
  F(this.W, a, b);
  a.push(")")
};
V.prototype.O = U;
V.prototype.R = function(a) {
  var b = this.W;
  a.push(b.Ma.join(","), "|", String(b.Pa));
  a.push("A")
};
function ge(a) {
  this.Eb = a
}
ge.prototype.k = function(a, b) {
  return a instanceof ge && this.Eb.k(a.Eb, b)
};
ge.prototype.B = function(a, b) {
  a.push("new StreamStatusFrame(");
  F(this.Eb, a, b);
  a.push(")")
};
ge.prototype.O = U;
ge.prototype.R = function(a) {
  var b = this.Eb;
  a.push(b.Ma.join(","), "|", String(b.Pa));
  a.push("T")
};
function he() {
}
he.prototype.B = function(a) {
  a.push("new StreamCreatedFrame()")
};
he.prototype.k = function(a) {
  return a instanceof he
};
he.prototype.O = U;
he.prototype.R = function(a) {
  a.push("C")
};
function ie() {
}
ie.prototype.B = function(a) {
  a.push("new YouCloseItFrame()")
};
ie.prototype.k = function(a) {
  return a instanceof ie
};
ie.prototype.O = U;
ie.prototype.R = function(a) {
  a.push("Y")
};
function je(a, b) {
  this.Jb = a;
  this.pb = b
}
je.prototype.k = function(a) {
  return a instanceof je && this.Jb == a.Jb && this.pb == a.pb
};
je.prototype.B = function(a, b) {
  a.push("new ResetFrame(");
  F(this.Jb, a, b);
  a.push(", ", String(this.pb), ")")
};
je.prototype.O = U;
je.prototype.R = function(a) {
  a.push(this.Jb, "|", String(Number(this.pb)), "!")
};
var ke = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function le(a) {
  this.reason = a
}
le.prototype.k = function(a) {
  return a instanceof le && this.reason == a.reason
};
le.prototype.B = function(a, b) {
  a.push("new TransportKillFrame(");
  F(this.reason, a, b);
  a.push(")")
};
le.prototype.O = U;
le.prototype.R = function(a) {
  a.push(this.reason, "K")
};
function me(a) {
  a || f(new T("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new ce(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = fe(od(a)), a == l && f(new T("bad sack")), new V(a)
    }else {
      if(b == "N") {
        return a = rd(od(a)), a == l && f(new T("bad seqNum")), new ee(a)
      }else {
        if(b == "T") {
          return a = fe(od(a)), a == l && f(new T("bad lastSackSeen")), new ge(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && f(new T("leading garbage")), new ie
          }else {
            if(b == "^") {
              return new de(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && f(new T("leading garbage")), new he
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && f(new T("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == l && f(new T("bad applicationLevel")), new je(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = ke[a], a == l && f(new T("unknown kill reason: " + a)), new le(a)
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
;var ne = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function oe(a, b) {
  var c = a.match(ne), d = b.match(ne);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;var pe;
function qe(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function re(a, b) {
  var c = qe(a), d = fb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    $a(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function se(a, b) {
  var c = qe(a), d = fb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < e.length;h++) {
    $a(d, e[h]) && (eb(e, h--, 1), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
;function te(a, b) {
  this.width = a;
  this.height = b
}
q = te.prototype;
q.H = function() {
  return new te(this.width, this.height)
};
q.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
q.Ia = function() {
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
var ue = !I || pc();
!bc && !I || I && pc() || bc && nc("1.9.1");
var ve = I && !nc("9");
function we(a, b) {
  this.x = fa(a) ? a : 0;
  this.y = fa(b) ? b : 0
}
we.prototype.H = function() {
  return new we(this.x, this.y)
};
we.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function xe(a) {
  return a ? new ye(ze(a)) : pe || (pe = new ye)
}
function W(a) {
  return u(a) ? document.getElementById(a) : a
}
function Ae(a, b) {
  Qa(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in Be ? a.setAttribute(Be[d], b) : d.lastIndexOf("aria-", 0) == 0 ? a.setAttribute(d, b) : a[d] = b
  })
}
var Be = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Ce() {
  var a = De.N.parentWindow || De.N.defaultView || window, b = a.document;
  if(J && !nc("500") && !cc) {
    typeof a.innerHeight == "undefined" && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new te(a.innerWidth, b)
  }
  a = b.compatMode == "CSS1Compat" ? b.documentElement : b.body;
  return new te(a.clientWidth, a.clientHeight)
}
function Ee(a, b, c) {
  return Fe(document, arguments)
}
function Fe(a, b) {
  var c = b[0], d = b[1];
  if(!ue && d && (d.name || d.type)) {
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
    u(d) ? c.className = d : t(d) ? re.apply(l, [c].concat(d)) : Ae(c, d)
  }
  b.length > 2 && Ge(a, c, b, 2);
  return c
}
function Ge(a, b, c, d) {
  function e(c) {
    c && b.appendChild(u(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && g.nodeType > 0) ? Wa(He(g) ? cb(g) : g, e) : e(g)
  }
}
function Ie(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Je(a, b) {
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
function ze(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
var Ke = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Le = {IMG:" ", BR:"\n"};
function Me(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, typeof a == "number" && a >= 0 && a < 32768) : !1
}
function Ne(a) {
  var b = [];
  Oe(a, b, !1);
  return b.join("")
}
function Oe(a, b, c) {
  if(!(a.nodeName in Ke)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Le) {
        b.push(Le[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Oe(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function He(a) {
  if(a && typeof a.length == "number") {
    if(ia(a)) {
      return typeof a.item == "function" || typeof a.item == "string"
    }else {
      if(w(a)) {
        return typeof a.item == "function"
      }
    }
  }
  return!1
}
function ye(a) {
  this.N = a || r.document || document
}
q = ye.prototype;
q.yb = xe;
q.h = function(a) {
  return u(a) ? this.N.getElementById(a) : a
};
q.r = function(a, b, c) {
  return Fe(this.N, arguments)
};
q.createElement = function(a) {
  return this.N.createElement(a)
};
q.createTextNode = function(a) {
  return this.N.createTextNode(a)
};
q.appendChild = function(a, b) {
  a.appendChild(b)
};
q.append = function(a, b) {
  Ge(ze(a), a, arguments, 1)
};
q.contains = Je;
function Pe(a, b, c, d) {
  this.contentWindow = a;
  this.cc = b;
  this.xd = c;
  this.sf = d
}
Pe.prototype.B = function(a, b) {
  a.push("<XDRFrame frameId=");
  F(this.sf, a, b);
  a.push(", expandedUrl=");
  F(this.cc, a, b);
  a.push(", streams=");
  F(this.xd, a, b);
  a.push(">")
};
function Qe() {
  this.frames = [];
  this.bd = new H
}
Qe.prototype.a = S("cw.net.XDRTracker");
function Re(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + String(Math.floor(Xd())) + String(Math.floor(Xd()))
  })
}
function Se(a, b) {
  for(var c = Te, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = e.xd.length == 0) {
      g = e.cc;
      var h = String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + G(b) + " existing frame " + G(e)), ld(e)
    }
  }
  d = nd() + nd();
  e = Re(a);
  h = String(window.location).match(ne)[3] || l;
  g = e.match(ne)[3] || l;
  if(h == g) {
    c.a.info("No need to make a real XDRFrame for " + G(b)), c = ld(new Pe(r, e, [b], l))
  }else {
    g = g.split(".");
    h = h.split(".");
    if(h.length > g.length) {
      var j = h, h = g;
      g = j
    }
    for(g.splice(0, g.length - h.length);g.join(".") != h.join(".");) {
      g.splice(0, 1), h.splice(0, 1)
    }
    g = g.join(".");
    c.a.info("Creating new XDRFrame " + G(d) + "for " + G(b));
    document.domain != g && f(Error("document.domain needs to be " + G(g) + "; was " + G(document.domain) + ".  To avoid problems in IE, set document.domain very early, before loading any scripts or creating any JavaScript objects."));
    g = W("minerva-xdrframes");
    h = new cd;
    c.bd.set(d, [h, e, b]);
    c = Ee("iframe", {id:"minerva-xdrframe-" + d, width:16, height:16, src:e + "xdrframe/?domain=" + document.domain + "&id=" + d});
    g.appendChild(c);
    c = h
  }
  return c
}
Qe.prototype.bg = function(a) {
  var b = this.bd.get(a);
  b || f(Error("Unknown frameId " + G(a)));
  this.bd.remove(b);
  var c = b[0], a = new Pe(W("minerva-xdrframe-" + a).contentWindow || (J ? W("minerva-xdrframe-" + a).document || W("minerva-xdrframe-" + a).contentWindow.document : W("minerva-xdrframe-" + a).contentDocument || W("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (J ? W("minerva-xdrframe-" + a).document || W("minerva-xdrframe-" + a).contentWindow.document : W("minerva-xdrframe-" + a).contentDocument || W("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.la(a)
};
var Te = new Qe;
r.__XHRTracker_xdrFrameLoaded = A(Te.bg, Te);
var Ue;
Ue = !1;
var Ve = Yb();
Ve && (Ve.indexOf("Firefox") != -1 || Ve.indexOf("Camino") != -1 || Ve.indexOf("iPhone") != -1 || Ve.indexOf("iPod") != -1 || Ve.indexOf("iPad") != -1 || Ve.indexOf("Android") != -1 || Ve.indexOf("Chrome") != -1 && (Ue = !0));
var We = Ue;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function Xe(a, b, c, d, e, g) {
  cd.call(this, e, g);
  this.qe = a;
  this.Lc = [];
  this.Vd = !!b;
  this.qf = !!c;
  this.hf = !!d;
  for(b = 0;b < a.length;b++) {
    jd(a[b], A(this.Zd, this, b, !0), A(this.Zd, this, b, !1))
  }
  a.length == 0 && !this.Vd && this.la(this.Lc)
}
C(Xe, cd);
Xe.prototype.Be = 0;
Xe.prototype.Zd = function(a, b, c) {
  this.Be++;
  this.Lc[a] = [b, c];
  this.pa || (this.Vd && b ? this.la([a, c]) : this.qf && !b ? this.bc(c) : this.Be == this.qe.length && this.la(this.Lc));
  this.hf && !b && (c = l);
  return c
};
Xe.prototype.bc = function(a) {
  Xe.c.bc.call(this, a);
  Wa(this.qe, function(a) {
    a.cancel()
  })
};
function Ye(a) {
  a = new Xe(a, !1, !0);
  id(a, function(a) {
    return Xa(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function Ze() {
  if(bc) {
    this.Aa = {}, this.Dc = {}, this.yc = []
  }
}
Ze.prototype.a = S("goog.net.xhrMonitor");
Ze.prototype.Q = bc;
Ze.prototype.Qb = function(a) {
  this.Q = bc && a
};
function $e(a) {
  var b = af;
  if(b.Q) {
    var c = u(a) ? a : ia(a) ? x(a) : "";
    R(b.a, "Pushing context: " + a + " (" + c + ")");
    b.yc.push(c)
  }
}
function bf() {
  var a = af;
  if(a.Q) {
    var b = a.yc.pop();
    R(a.a, "Popping context: " + b);
    cf(a, b)
  }
}
function df(a) {
  var b = af;
  if(b.Q) {
    a = x(a);
    Q(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.yc.length;c++) {
      var d = b.yc[c];
      ef(b.Aa, d, a);
      ef(b.Dc, a, d)
    }
  }
}
function cf(a, b) {
  var c = a.Dc[b], d = a.Aa[b];
  c && d && (R(a.a, "Updating dependent contexts"), Wa(c, function(a) {
    Wa(d, function(b) {
      ef(this.Aa, a, b);
      ef(this.Dc, b, a)
    }, this)
  }, a))
}
function ef(a, b, c) {
  a[b] || (a[b] = []);
  $a(a[b], c) || a[b].push(c)
}
var af = new Ze;
function ff() {
}
ff.prototype.Yb = l;
function gf() {
  return hf(jf)
}
var jf;
function kf() {
}
C(kf, ff);
function hf(a) {
  return(a = lf(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function mf(a) {
  var b = {};
  lf(a) && (b[0] = !0, b[1] = !0);
  return b
}
kf.prototype.Vc = l;
function lf(a) {
  if(!a.Vc && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Vc = d
      }catch(e) {
      }
    }
    f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Vc
}
jf = new kf;
function nf(a) {
  this.headers = new H;
  this.ob = a || l
}
C(nf, ad);
nf.prototype.a = S("goog.net.XhrIo");
var of = /^https?:?$/i;
q = nf.prototype;
q.ja = !1;
q.g = l;
q.Cc = l;
q.Fb = "";
q.ne = "";
q.Cb = 0;
q.Db = "";
q.Nc = !1;
q.lc = !1;
q.Wc = !1;
q.Ga = !1;
q.zc = 0;
q.Na = l;
q.Ne = "";
q.$f = !1;
q.send = function(a, b, c, d) {
  this.g && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Fb = a;
  this.Db = "";
  this.Cb = 0;
  this.ne = b;
  this.Nc = !1;
  this.ja = !0;
  this.g = this.ob ? hf(this.ob) : new gf;
  this.Cc = this.ob ? this.ob.Yb || (this.ob.Yb = mf(this.ob)) : jf.Yb || (jf.Yb = mf(jf));
  df(this.g);
  this.g.onreadystatechange = A(this.Ce, this);
  try {
    Q(this.a, pf(this, "Opening Xhr")), this.Wc = !0, this.g.open(b, a, !0), this.Wc = !1
  }catch(e) {
    Q(this.a, pf(this, "Error opening Xhr: " + e.message));
    qf(this, e);
    return
  }
  var a = c || "", g = this.headers.H();
  d && Fb(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.P("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Fb(g, function(a, b) {
    this.g.setRequestHeader(b, a)
  }, this);
  if(this.Ne) {
    this.g.responseType = this.Ne
  }
  if("withCredentials" in this.g) {
    this.g.withCredentials = this.$f
  }
  try {
    if(this.Na) {
      bd.clearTimeout(this.Na), this.Na = l
    }
    if(this.zc > 0) {
      Q(this.a, pf(this, "Will abort after " + this.zc + "ms if incomplete")), this.Na = bd.setTimeout(A(this.Wf, this), this.zc)
    }
    Q(this.a, pf(this, "Sending request"));
    this.lc = !0;
    this.g.send(a);
    this.lc = !1
  }catch(h) {
    Q(this.a, pf(this, "Send error: " + h.message)), qf(this, h)
  }
};
q.dispatchEvent = function(a) {
  if(this.g) {
    $e(this.g);
    try {
      return nf.c.dispatchEvent.call(this, a)
    }finally {
      bf()
    }
  }else {
    return nf.c.dispatchEvent.call(this, a)
  }
};
q.Wf = function() {
  if(typeof ba != "undefined" && this.g) {
    this.Db = "Timed out after " + this.zc + "ms, aborting", this.Cb = 8, Q(this.a, pf(this, this.Db)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function qf(a, b) {
  a.ja = !1;
  if(a.g) {
    a.Ga = !0, a.g.abort(), a.Ga = !1
  }
  a.Db = b;
  a.Cb = 5;
  rf(a);
  sf(a)
}
function rf(a) {
  if(!a.Nc) {
    a.Nc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
q.abort = function(a) {
  if(this.g && this.ja) {
    Q(this.a, pf(this, "Aborting")), this.ja = !1, this.Ga = !0, this.g.abort(), this.Ga = !1, this.Cb = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), sf(this)
  }
};
q.b = function() {
  if(this.g) {
    if(this.ja) {
      this.ja = !1, this.Ga = !0, this.g.abort(), this.Ga = !1
    }
    sf(this, !0)
  }
  nf.c.b.call(this)
};
q.Ce = function() {
  !this.Wc && !this.lc && !this.Ga ? this.Hf() : tf(this)
};
q.Hf = function() {
  tf(this)
};
function tf(a) {
  if(a.ja && typeof ba != "undefined") {
    if(a.Cc[1] && a.sa() == 4 && uf(a) == 2) {
      Q(a.a, pf(a, "Local request error detected and ignored"))
    }else {
      if(a.lc && a.sa() == 4) {
        bd.setTimeout(A(a.Ce, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.sa() == 4) {
          Q(a.a, pf(a, "Request complete"));
          a.ja = !1;
          var b;
          a: {
            switch(uf(a)) {
              case 0:
                b = u(a.Fb) ? a.Fb.match(ne)[1] || l : a.Fb.ha;
                b = !(b ? of.test(b) : self.location ? of.test(self.location.protocol) : 1);
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
              c = a.sa() > 2 ? a.g.statusText : ""
            }catch(d) {
              Q(a.a, "Can not get status: " + d.message), c = ""
            }
            a.Db = c + " [" + uf(a) + "]";
            rf(a)
          }
          sf(a)
        }
      }
    }
  }
}
function sf(a, b) {
  if(a.g) {
    var c = a.g, d = a.Cc[0] ? s : l;
    a.g = l;
    a.Cc = l;
    if(a.Na) {
      bd.clearTimeout(a.Na), a.Na = l
    }
    b || ($e(c), a.dispatchEvent("ready"), bf());
    var e = af;
    if(e.Q) {
      var g = x(c);
      Q(e.a, "Closing XHR : " + g);
      delete e.Dc[g];
      for(var h in e.Aa) {
        ab(e.Aa[h], g), e.Aa[h].length == 0 && delete e.Aa[h]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(j) {
      Pd(a.a, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
q.je = function() {
  return!!this.g
};
q.sa = function() {
  return this.g ? this.g.readyState : 0
};
function uf(a) {
  try {
    return a.sa() > 2 ? a.g.status : -1
  }catch(b) {
    return Rd(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.g && this.sa() == 4 ? this.g.getResponseHeader(a) : i
};
function pf(a, b) {
  return b + " [" + a.ne + " " + a.Fb + " " + uf(a) + "]"
}
;function vf(a, b, c) {
  this.na = b;
  this.V = a;
  this.Jc = c
}
C(vf, K);
q = vf.prototype;
q.a = S("cw.net.XHRMaster");
q.xa = -1;
q.cd = function(a, b, c) {
  this.Jc.__XHRSlave_makeRequest(this.V, a, b, c)
};
q.sa = m("xa");
q.hd = function(a, b) {
  b != wf && Pd(this.a, G(this.V) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  xf(this.na);
  a: {
    var c = this.na;
    c.xc = !0;
    try {
      for(var d = !1, e = [], g = 0, h = a.length;g < h;g++) {
        if(c.Y) {
          c.a.info(c.q() + " returning from loop because we're disposed.");
          break a
        }
        if(d = yf(c, a[g], e)) {
          break
        }
      }
      e.length && zf(c, e);
      c.xc = !1;
      c.w.length && c.fa();
      d && (R(c.a, c.q() + " closeSoon is true.  Frames were: " + G(a)), c.d())
    }finally {
      c.xc = !1
    }
  }
};
q.jd = function(a) {
  Q(this.a, "ongotheaders_: " + G(a));
  var b = l;
  "Content-Length" in a && (b = rd(a["Content-Length"]));
  a = this.na;
  Q(a.a, a.q() + " got Content-Length: " + b);
  a.ba == Af && (b == l && (Rd(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Bf(a, 2E3 + b / 3072 * 1E3))
};
q.kd = function(a) {
  a != 1 && Q(this.a, this.na.q() + "'s XHR's readyState is " + a);
  this.xa = a;
  this.xa >= 2 && xf(this.na)
};
q.gd = function() {
  this.na.d()
};
q.b = function() {
  vf.c.b.call(this);
  delete X.ga[this.V];
  this.Jc.__XHRSlave_dispose(this.V);
  delete this.Jc
};
function Cf() {
  this.ga = {}
}
C(Cf, K);
q = Cf.prototype;
q.a = S("cw.net.XHRMasterTracker");
q.Nd = function(a, b) {
  var c = "_" + nd(), d = new vf(c, a, b);
  return this.ga[c] = d
};
q.hd = function(a, b, c) {
  var b = bb(b), d = this.ga[a];
  d ? d.hd(b, c) : Pd(this.a, "onframes_: no master for " + G(a))
};
q.jd = function(a, b) {
  var c = this.ga[a];
  c ? c.jd(b) : Pd(this.a, "ongotheaders_: no master for " + G(a))
};
q.kd = function(a, b) {
  var c = this.ga[a];
  c ? c.kd(b) : Pd(this.a, "onreadystatechange_: no master for " + G(a))
};
q.gd = function(a) {
  var b = this.ga[a];
  b ? (delete this.ga[b.V], b.gd()) : Pd(this.a, "oncomplete_: no master for " + G(a))
};
q.b = function() {
  Cf.c.b.call(this);
  for(var a = Ra(this.ga);a.length;) {
    a.pop().d()
  }
  delete this.ga
};
var X = new Cf;
r.__XHRMaster_onframes = A(X.hd, X);
r.__XHRMaster_oncomplete = A(X.gd, X);
r.__XHRMaster_ongotheaders = A(X.jd, X);
r.__XHRMaster_onreadystatechange = A(X.kd, X);
function Df(a, b) {
  b || (b = a);
  this.gb = a;
  this.ib = b
}
function Ef(a, b, c, d) {
  this.gb = a;
  this.Fe = b;
  this.ib = c;
  this.Pe = d;
  (!(this.gb.indexOf("http://") == 0 || this.gb.indexOf("https://") == 0) || !(this.ib.indexOf("http://") == 0 || this.ib.indexOf("https://") == 0)) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Fe.location.href;
  oe(this.gb, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Pe.location.href;
  oe(this.ib, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
var Ff = new de(";)]}"), Gf = "disconnected_" + $c++;
function Hf(a, b, c, d) {
  this.C = a;
  this.He = b;
  this.J = c;
  this.og = d;
  this.Ub = new td;
  this.Tb = nd() + nd();
  this.wa = new Nb;
  this.Xc = new Pb;
  this.Xb = l;
  this.Bc = [];
  if(J) {
    this.Xb = Tc(r, "load", this.Mf, !1, this)
  }
}
C(Hf, ad);
q = Hf.prototype;
q.a = S("cw.net.Stream");
q.oe = new Mb(-1, []);
q.pe = new Mb(-1, []);
q.Ef = 50;
q.Df = 1048576;
q.ud = !1;
q.od = !1;
q.f = 1;
q.Ve = -1;
q.i = l;
q.v = l;
q.Kb = l;
q.vd = 0;
q.Ee = 0;
q.Oe = 0;
q.B = function(a, b) {
  a.push("<Stream id=");
  F(this.Tb, a, b);
  a.push(", state=", String(this.f));
  a.push(", primary=");
  F(this.i, a, b);
  a.push(", secondary=");
  F(this.v, a, b);
  a.push(", resetting=");
  F(this.Kb, a, b);
  a.push(">")
};
function If(a) {
  var b = [-1];
  a.i && b.push(a.i.cb);
  a.v && b.push(a.v.cb);
  return Math.max.apply(Math.max, b)
}
function Jf(a) {
  if(a.f != 1) {
    var b = a.wa.F.t() != 0, c = Qb(a.Xc), d = !c.k(a.pe) && !(a.i && c.k(a.i.ab) || a.v && c.k(a.v.ab)), e = If(a);
    if((b = b && e < a.wa.Ra) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.i.qb) {
        R(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.i, c != d.ab)) {
          !d.ia && !d.w.length && Kf(d), d.w.push(new V(c)), d.ab = c
        }
        b && Lf(a.i, a.wa, e + 1);
        a.i.fa()
      }else {
        a.v == l ? a.ud ? (R(a.a, "tryToSend_: creating secondary to send " + g), a.v = Mf(a, !1), b && Lf(a.v, a.wa, e + 1), a.v.fa()) : (R(a.a, "tryToSend_: not creating a secondary because Stream might not exist on server"), a.od = !0) : R(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
q.Mf = function() {
  this.Xb = l;
  if(this.i && this.i.Xa()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.i;
    a.Ec = !0;
    a.d()
  }
  if(this.v && this.v.Xa()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.v, a.Ec = !0, a.d()
  }
};
function Nf(a, b) {
  var c;
  fa(c) || (c = !0);
  a.f > 3 && f(Error("sendStrings: Can't send strings in state " + a.f));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || f(Error("sendStrings: string #" + c + " has illegal chars: " + G(d)))
      }
    }
    a.wa.extend(b);
    Jf(a)
  }
}
function Mf(a, b) {
  var c;
  a.J instanceof Ef ? c = (Boolean(Number((new Of(document.location)).T.get("httpStreaming", "0"))) ? 2 : 1) == 1 ? Af : Pf : f(Error("Don't support endpoint " + G(a.J)));
  a.Ve += 1;
  c = new Qf(a.C, a, a.Ve, c, a.J, b);
  R(a.a, "Created: " + c.q());
  a.Ub.add(c);
  return c
}
function Rf(a, b, c) {
  var d = new Sf(a.C, a, b, c);
  R(a.a, "Created: " + d.q() + ", delay=" + b + ", times=" + c);
  a.Ub.add(d);
  return d
}
function Tf(a, b) {
  a.Ub.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  Q(a.a, "Offline: " + b.q());
  b.sc ? a.vd += b.sc : a.vd = 0;
  a.vd >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), Uf("stream penalty reached limit", !1), a.d());
  if(a.f > 3) {
    a.f == 4 && b.$e ? (Q(a.a, "Disposing because resettingTransport_ is done."), a.d()) : Q(a.a, "Not creating a transport because Stream is in state " + a.f)
  }else {
    var c;
    var d;
    c = b instanceof Sf;
    if(!c && b.Ec) {
      var e = J ? We ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      R(a.a, "getDelayForNextTransport_: " + G({delay:c, times:d}))
    }else {
      d = b.Kd();
      if(b == a.i) {
        if(d) {
          e = ++a.Ee
        }else {
          if(!c) {
            e = a.Ee = 0
          }
        }
      }else {
        if(d) {
          e = ++a.Oe
        }else {
          if(!c) {
            e = a.Oe = 0
          }
        }
      }
      if(c || !e) {
        d = c = 0, R(a.a, "getDelayForNextTransport_: " + G({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(Math.random() * 4E3) - 2E3, j = Math.max(0, b.We - b.yd);
        d = (c = Math.max(0, g + h - j)) ? 1 : 0;
        R(a.a, "getDelayForNextTransport_: " + G({count:e, base:g, variance:h, oldDuration:j, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    if(b == a.i) {
      a.i = l, c ? a.i = Rf(a, e, c) : (e = If(a), a.i = Mf(a, !0), Lf(a.i, a.wa, e + 1)), a.i.fa()
    }else {
      if(b == a.v) {
        a.v = l, c ? (a.v = Rf(a, e, c), a.v.fa()) : Jf(a)
      }
    }
  }
}
q.reset = function(a) {
  this.f > 3 && f(Error("reset: Can't send reset in state " + this.f));
  this.f = 4;
  this.i && this.i.qb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Vf(this.i, a), this.i.fa()) : (this.i && (Q(this.a, "reset: Disposing primary before sending ResetFrame."), this.i.d()), this.v && (Q(this.a, "reset: Disposing secondary before sending ResetFrame."), this.v.d()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Kb = Mf(this, !1), Vf(this.Kb, a), this.Kb.fa());
  Uf(a, !0)
};
function Wf(a, b, c, d) {
  var e;
  e = a.Xc;
  for(var g = a.Ef, h = a.Df, j = [], k = !1, n = 0, z = c.length;n < z;n++) {
    var p = c[n], v = p[0], p = p[1];
    if(v == e.$a + 1) {
      e.$a += 1;
      for(j.push(p);;) {
        v = e.$a + 1;
        p = e.za.get(v, Rb);
        if(p === Rb) {
          break
        }
        j.push(p[0]);
        e.za.remove(v);
        e.ya -= p[1];
        e.$a = v
      }
    }else {
      if(!(v <= e.$a)) {
        if(g != l && e.za.t() >= g) {
          k = !0;
          break
        }
        var y = Lb(p);
        if(h != l && e.ya + y > h) {
          k = !0;
          break
        }
        e.za.set(v, [p, y]);
        e.ya += y
      }
    }
  }
  e.za.Ia() && e.za.clear();
  e = [j, k];
  c = e[0];
  e = e[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      h = a.He;
      j = vb(c[g]);
      k = j[1];
      if(j[0] == 1) {
        k = h.De.Mc(Yf.xb(), k);
        h = mb(k, 1);
        j = mb(k, 2);
        k = mb(k, 3);
        (h = ua(h)) || (h = "[No title]");
        n = sa(ya(k));
        z = document;
        k = z.createElement("div");
        I ? (k.innerHTML = "<br>" + n, k.removeChild(k.firstChild)) : k.innerHTML = n;
        if(k.childNodes.length == 1) {
          k = k.removeChild(k.firstChild)
        }else {
          for(n = z.createDocumentFragment();k.firstChild;) {
            n.appendChild(k.firstChild)
          }
          k = n
        }
        h = Ee("span", {}, Ee("a", {href:j, "class":"ljpost-title-link"}, h), Ee("span", {}, "\u00a0"), k);
        Zf(h)
      }
      if(a.f == 4 || a.Y) {
        return
      }
    }
  }
  d || Jf(a);
  if(!(a.f == 4 || a.Y) && e) {
    Pd(b.a, b.q() + "'s peer caused rwin overflow."), b.d()
  }
}
q.start = function() {
  this.f != 1 && f(Error("Stream.start: " + G(this) + " already started"));
  this.f = 2;
  if(this.J instanceof Df) {
    var a = Se(this.J.gb, this), b = Se(this.J.ib, this);
    id(Ye([a, b]), A(this.of, this))
  }else {
    $f(this)
  }
};
q.of = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].cc, e = a[1].cc;
  this.Bc.push(a[0]);
  this.Bc.push(a[1]);
  this.J = new Ef(d, b, e, c);
  $f(this)
};
function $f(a) {
  a.f = 3;
  a.i = Mf(a, !0);
  Lf(a.i, a.wa, l);
  a.i.fa()
}
q.b = function() {
  this.a.info(G(this) + " in disposeInternal.");
  this.f = 5;
  for(var a = this.Ub.K(), b = 0;b < a.length;b++) {
    a[b].d()
  }
  for(a = 0;a < this.Bc.length;a++) {
    ab(this.Bc[a].xd, this)
  }
  if(J && this.Xb) {
    O(this.Xb), this.Xb = l
  }
  this.dispatchEvent({type:Gf});
  delete this.Ub;
  delete this.i;
  delete this.v;
  delete this.Kb;
  delete this.He;
  Hf.c.b.call(this)
};
var Af = 1, Pf = 2, ag = 3;
function Qf(a, b, c, d, e, g) {
  this.C = a;
  this.z = b;
  this.nb = c;
  this.ba = d;
  this.J = e;
  this.w = [];
  this.Qa = g;
  this.qb = !this.Xa();
  this.hb = this.ba != Af;
  this.df = A(this.Vf, this)
}
C(Qf, K);
q = Qf.prototype;
q.a = S("cw.net.ClientTransport");
q.n = l;
q.yd = l;
q.We = l;
q.tc = l;
q.ia = !1;
q.xc = !1;
q.ab = l;
q.Sc = 0;
q.cb = -1;
q.ld = -1;
q.$e = !1;
q.Ec = !1;
q.sc = 0;
q.Ab = !1;
q.B = function(a) {
  a.push("<ClientTransport #", String(this.nb), ", becomePrimary=", String(this.Qa), ">")
};
q.q = function() {
  return(this.Qa ? "Prim. T#" : "Sec. T#") + this.nb
};
q.Kd = function() {
  return!(!this.Ab && this.Sc)
};
q.Xa = function() {
  return this.ba == Af || this.ba == Pf
};
function zf(a, b) {
  gb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Wf(a.z, a, b, !a.hb)
}
function yf(a, b, c) {
  try {
    var d = me(b);
    a.Sc += 1;
    Q(a.a, a.q() + " RECV " + G(d));
    var e;
    a.Sc == 1 && !d.k(Ff) && a.Xa() ? (Rd(a.a, a.q() + " is closing soon because got bad preamble: " + G(d)), e = !0) : e = !1;
    if(e) {
      return!0
    }
    if(d instanceof ce) {
      if(!/^([ -~]*)$/.test(d.mb)) {
        return a.Ab = !0
      }
      a.ld += 1;
      c.push([a.ld, d.mb])
    }else {
      if(d instanceof V) {
        var g = a.z, h = d.W;
        g.oe = h;
        var j = g.wa, k = h.Pa, c = !1;
        k > j.Ra && (c = !0);
        for(var n = Ob(j).concat(), d = 0;d < n.length;d++) {
          var z = n[d];
          if(z > k) {
            break
          }
          var p = j.F.m[z][1];
          j.F.remove(z);
          j.ya -= p
        }
        for(d = 0;d < h.Ma.length;d++) {
          var v = h.Ma[d];
          v > j.Ra && (c = !0);
          j.F.P(v) && (p = j.F.m[v][1], j.F.remove(v), j.ya -= p)
        }
        j.F.Ia() && j.F.clear();
        if(c) {
          return Rd(a.a, a.q() + " is closing soon because got bad SackFrame"), a.Ab = !0
        }
      }else {
        if(d instanceof ee) {
          a.ld = d.Ob - 1
        }else {
          if(d instanceof ge) {
            a.z.pe = d.Eb
          }else {
            if(d instanceof ie) {
              return R(a.a, a.q() + " is closing soon because got YouCloseItFrame"), !0
            }else {
              if(d instanceof le) {
                return a.Ab = !0, d.reason == "stream_attach_failure" ? a.sc += 1 : d.reason == "acked_unsent_strings" && (a.sc += 0.5), R(a.a, a.q() + " is closing soon because got " + G(d)), !0
              }else {
                if(!(d instanceof de)) {
                  if(d instanceof he) {
                    var y = a.z, Gh = !a.hb;
                    R(y.a, "Stream is now confirmed to exist at server.");
                    y.ud = !0;
                    if(y.od && !Gh) {
                      y.od = !1, Jf(y)
                    }
                  }else {
                    if(c.length) {
                      zf(a, c);
                      if(!t(c)) {
                        for(var Qd = c.length - 1;Qd >= 0;Qd--) {
                          delete c[Qd]
                        }
                      }
                      c.length = 0
                    }
                    if(d instanceof je) {
                      var Hh = a.z;
                      Uf(d.Jb, d.pb);
                      Hh.d();
                      return!0
                    }else {
                      f(Error(a.q() + " had unexpected state in framesReceived_."))
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }catch(Xf) {
    return Xf instanceof T || f(Xf), Rd(a.a, a.q() + " is closing soon because got InvalidFrame: " + G(b)), a.Ab = !0
  }
  return!1
}
q.Vf = function() {
  Rd(this.a, this.q() + " timed out due to lack of connection or no data being received.");
  this.d()
};
function bg(a) {
  if(a.tc != l) {
    a.C.G.clearTimeout(a.tc), a.tc = l
  }
}
function Bf(a, b) {
  bg(a);
  b = Math.round(b);
  a.tc = a.C.G.setTimeout(a.df, b);
  Q(a.a, a.q() + "'s receive timeout set to " + b + " ms.")
}
function xf(a) {
  a.ba != Af && (a.ba == ag || a.ba == Pf ? Bf(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ba)))
}
function Kf(a) {
  var b = new ae;
  b.nb = a.nb;
  b.Ge = 2;
  b.ge = 2;
  if(!a.z.ud) {
    b.Le = !0
  }
  b.Tb = a.z.Tb;
  b.wd = a.hb;
  if(b.wd) {
    b.ze = 4096
  }
  b.ve = 3E5;
  b.te = a.hb ? Math.floor(10) : 0;
  b.Xe = !1;
  if(a.Qa) {
    b.Re = l, b.dd = Math.floor((a.hb ? 358E4 : 25E3) / 1E3)
  }
  b.W = Qb(a.z.Xc);
  b.oc = a.z.oe;
  a.w.push(b);
  a.ab = b.W
}
q.fa = function() {
  this.ia && !this.qb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.xc) {
    R(this.a, this.q() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.ia;
    this.ia = !0;
    !a && !this.w.length && Kf(this);
    for(a = 0;a < this.w.length;a++) {
      Q(this.a, this.q() + " SEND " + G(this.w[a]))
    }
    if(this.Xa()) {
      for(var a = [], b = 0, c = this.w.length;b < c;b++) {
        this.w[b].R(a), a.push("\n")
      }
      this.w = [];
      a = a.join("");
      b = this.Qa ? this.J.gb : this.J.ib;
      this.n = X.Nd(this, this.Qa ? this.J.Fe : this.J.Pe);
      this.yd = this.C.G === bd ? B() : this.C.G.getTime();
      this.n.cd(b, "POST", a);
      Bf(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.hb ? 0 : this.Qa ? 25E3 : 0))
    }else {
      if(this.ba == ag) {
        a = [];
        b = 0;
        for(c = this.w.length;b < c;b++) {
          a.push(this.w[b].O())
        }
        this.w = [];
        this.n ? this.n.Ed(a) : (b = this.J, this.n = new Wd(this), this.n.td = b.pg.Nd(this.n), this.yd = this.C.G === bd ? B() : this.C.G.getTime(), this.n.Jd(b.host, b.port), this.n.Y || (this.n.Ed(a), this.n.Y || Bf(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.ba))
      }
    }
  }
};
function Lf(a, b, c) {
  !a.ia && !a.w.length && Kf(a);
  for(var d = Math.max(c, a.cb + 1), e = Ob(b), c = [], g = 0;g < e.length;g++) {
    var h = e[g];
    (d == l || h >= d) && c.push([h, b.F.m[h][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], e = g[0], g = g[1], (a.cb == -1 || a.cb + 1 != e) && a.w.push(new ee(e)), a.w.push(new ce(g)), a.cb = e
  }
}
q.b = function() {
  this.a.info(this.q() + " in disposeInternal.");
  Qf.c.b.call(this);
  this.We = this.C.G === bd ? B() : this.C.G.getTime();
  this.w = [];
  bg(this);
  this.n && this.n.d();
  var a = this.z;
  this.z = l;
  Tf(a, this)
};
function Vf(a, b) {
  !a.ia && !a.w.length && Kf(a);
  a.w.push(new je(b, !0));
  a.$e = !0
}
function Sf(a, b, c, d) {
  this.C = a;
  this.z = b;
  this.Rd = c;
  this.Md = d
}
C(Sf, K);
q = Sf.prototype;
q.ia = !1;
q.qb = !1;
q.jc = l;
q.ab = l;
q.a = S("cw.net.DoNothingTransport");
function cg(a) {
  a.jc = a.C.G.setTimeout(function() {
    a.jc = l;
    a.Md--;
    a.Md ? cg(a) : a.d()
  }, a.Rd)
}
q.fa = function() {
  this.ia && !this.qb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.ia = !0;
  cg(this)
};
q.B = function(a) {
  a.push("<DoNothingTransport delay=", String(this.Rd), ">")
};
q.Xa = o(!1);
q.q = o("Wast. T");
q.Kd = o(!1);
q.b = function() {
  this.a.info(this.q() + " in disposeInternal.");
  Sf.c.b.call(this);
  this.jc != l && this.C.G.clearTimeout(this.jc);
  var a = this.z;
  this.z = l;
  Tf(a, this)
};
var dg;
function Yf() {
  kb.apply(this)
}
C(Yf, kb);
function eg() {
  kb.apply(this)
}
C(eg, kb);
qb(Yf, {0:{name:"NewPost", Wd:"demosminerva.ljstream_messages.NewPost"}, 1:{name:"title", Ua:9, type:String}, 2:{name:"url", Ua:9, type:String}, 3:{name:"body", Ua:9, type:String}, 4:{name:"num_images", Ua:5, type:Number}, 5:{name:"lang", Ua:9, type:String}});
qb(eg, {0:{name:"SetPreferences", Wd:"demosminerva.ljstream_messages.SetPreferences"}, 1:{name:"include_russian_posts", Ua:8, type:Boolean}});
function fg() {
  this.Ke = B()
}
var gg = new fg;
fg.prototype.set = aa("Ke");
fg.prototype.reset = function() {
  this.set(B())
};
fg.prototype.get = m("Ke");
function hg(a) {
  this.md = a || "";
  this.Tf = gg
}
hg.prototype.Pf = !0;
hg.prototype.Rf = !0;
hg.prototype.Qf = !0;
hg.prototype.Qe = !1;
function ig(a) {
  return a < 10 ? "0" + a : String(a)
}
function jg(a, b) {
  var c = (a.Se - b) / 1E3, d = c.toFixed(3), e = 0;
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
function kg(a) {
  hg.call(this, a)
}
C(kg, hg);
kg.prototype.Qe = !0;
function lg(a) {
  this.ed = a || 100;
  this.ka = []
}
q = lg.prototype;
q.Gb = 0;
q.add = function(a) {
  this.ka[this.Gb] = a;
  this.Gb = (this.Gb + 1) % this.ed
};
q.get = function(a) {
  a = mg(this, a);
  return this.ka[a]
};
q.set = function(a, b) {
  a = mg(this, a);
  this.ka[a] = b
};
q.t = function() {
  return this.ka.length
};
q.Ia = function() {
  return this.ka.length == 0
};
q.clear = function() {
  this.Gb = this.ka.length = 0
};
q.K = function() {
  for(var a = this.t(), b = this.t(), c = [], a = this.t() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
q.ra = function() {
  for(var a = [], b = this.t(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
q.P = function(a) {
  return a < this.t()
};
q.ac = function(a) {
  for(var b = this.t(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return!0
    }
  }
  return!1
};
function mg(a, b) {
  b >= a.ka.length && f(Error("Out of bounds exception"));
  return a.ka.length < a.ed ? b : (a.Gb + Number(b)) % a.ed
}
;function ng(a, b) {
  this.ta = a || "";
  this.md = b || "";
  this.eb = [];
  this.uc = new lg(og);
  this.Kf = A(this.cf, this);
  this.rf = new kg(this.md);
  this.pf = {};
  if(!0 != this.ke) {
    this.ke = !0;
    var c = Vd(), d = this.Kf;
    if(!c.Bb) {
      c.Bb = []
    }
    c.Bb.push(d)
  }
  this.Q = pg(this.ta, "enabled") == "1";
  r.setInterval(A(this.Nf, this), 7500)
}
var og = 500;
q = ng.prototype;
q.Ze = "LOGGING";
q.mf = !1;
q.s = l;
q.Cd = !1;
q.ke = !1;
q.Gd = l;
q.$c = B();
q.Ha = function() {
  this.Q && qg(this)
};
q.isEnabled = m("Q");
q.Qb = function(a) {
  if(this.Q = a) {
    qg(this), this.s && this.Ac()
  }
  rg(this, "enabled", a ? "1" : "0")
};
function sg(a) {
  return!!a.s && !a.s.closed
}
q.ff = function() {
  this.uc.clear();
  sg(this) && this.Ac()
};
q.cf = function(a) {
  if(!this.pf[a.re]) {
    var b = this.rf, c;
    switch(a.S.value) {
      case Dd.value:
        c = "dbg-sh";
        break;
      case Ed.value:
        c = "dbg-sev";
        break;
      case Fd.value:
        c = "dbg-w";
        break;
      case Gd.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.md, " ");
    if(b.Pf) {
      var e = new Date(a.Se);
      d.push("[", ig(e.getFullYear() - 2E3) + ig(e.getMonth() + 1) + ig(e.getDate()) + " " + ig(e.getHours()) + ":" + ig(e.getMinutes()) + ":" + ig(e.getSeconds()) + "." + ig(Math.floor(e.getMilliseconds() / 10)), "] ")
    }
    b.Rf && d.push("[", Ea(jg(a, b.Tf.get())), "s] ");
    b.Qf && d.push("[", ya(a.re), "] ");
    d.push('<span class="', c, '">', xa(Ea(ya(a.xe))));
    b.Qe && a.Qc && d.push("<br>", xa(Ea(a.Pc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.Q ? (qg(this), this.uc.add(b), tg(this, b)) : this.uc.add(b);
    this.mf && a.S.value >= Ed.value && this.Qb(!0)
  }
};
function tg(a, b) {
  a.eb.push(b);
  r.clearTimeout(a.Gd);
  B() - a.$c > 750 ? a.Dd() : a.Gd = r.setTimeout(A(a.Dd, a), 250)
}
q.Dd = function() {
  this.$c = B();
  if(sg(this)) {
    var a = this.s.document.body, a = a && a.scrollHeight - (a.scrollTop + a.clientHeight) <= 100;
    this.s.document.write(this.eb.join(""));
    this.eb.length = 0;
    a && this.s.scrollTo(0, 1E6)
  }
};
function ug(a) {
  for(var b = a.uc.K(), c = 0;c < b.length;c++) {
    tg(a, b[c])
  }
}
function qg(a) {
  if(!sg(a) && !a.Cd) {
    var b = pg(a.ta, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), e = Number(b[2]), b = Number(b[3]);
    a.Cd = !0;
    a.s = window.open("", I ? a.ta.replace(/[\s\-\.\,]/g, "_") : a.ta, "width=" + e + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    if(!a.s && !a.Sf) {
      alert("Logger popup was blocked"), a.Sf = !0
    }
    a.Cd = !1;
    a.s && a.Ac()
  }
}
q.gc = o("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
q.Ac = function() {
  sg(this) || (this.s.document.open(), tg(this, "<style>" + this.gc() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.Ze + "<br><small>Logger: " + this.ta + "</small></div><hr>"), ug(this))
};
function rg(a, b, c) {
  b += a.ta;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(B() + 2592E6)).toUTCString()
}
function pg(a, b, c) {
  var a = b + a, b = String(document.cookie), d = b.indexOf(a + "=");
  return d != -1 ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, c == -1 ? b.length : c))) : c || ""
}
q.Nf = function() {
  sg(this) && rg(this, "dbg", (this.s.screenX || this.s.screenLeft || 0) + "," + (this.s.screenY || this.s.screenTop || 0) + "," + (this.s.outerWidth || 800) + "," + (this.s.outerHeight || 500))
};
function vg(a, b) {
  if(wg) {
    var c = xg(), d;
    for(d in c) {
      var e = d.replace("fancywindow.sel.", ""), e = S(e), g = e.S, h = window.localStorage.getItem(d).toString();
      (!g || g.toString() != h) && e.kb(Nd(h))
    }
  }
  ng.call(this, a, b)
}
C(vg, ng);
var wg;
a: {
  try {
    wg = !!window.localStorage.getItem;
    break a
  }catch(yg) {
  }
  wg = !1
}
q = vg.prototype;
q.Dd = function() {
  this.$c = B();
  if(sg(this)) {
    for(var a = this.I.h("log"), b = a.scrollHeight - (a.scrollTop + a.offsetHeight) <= 100, c = 0;c < this.eb.length;c++) {
      var d = this.I.r("div", "logmsg");
      d.innerHTML = this.eb[c];
      a.appendChild(d)
    }
    this.eb.length = 0;
    this.Me();
    if(b) {
      a.scrollTop = a.scrollHeight
    }
  }
};
q.Ac = function() {
  if(sg(this)) {
    var a = this.s.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.ta + "</title><style>" + this.gc() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.ta + "</b></p><p>" + this.Ze + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (I ? a.body : this.s).onresize = A(this.Me, this);
    this.I = new ye(a);
    this.I.h("openbutton").onclick = A(this.If, this);
    this.I.h("closebutton").onclick = A(this.gf, this);
    this.I.h("clearbutton").onclick = A(this.ff, this);
    this.I.h("exitbutton").onclick = A(this.nf, this);
    ug(this)
  }
};
q.If = function() {
  var a = this.I.h("optionsarea");
  a.innerHTML = "";
  for(var b = zg(), c = this.I, d = 0;d < b.length;d++) {
    var e = S(b[d]), e = c.r("div", {}, Ag(this, "sel" + b[d], e.S ? e.S.name : "INHERIT"), c.r("span", {}, b[d] || "(root)"));
    a.appendChild(e)
  }
  this.I.h("options").style.display = "block";
  return!1
};
function Ag(a, b, c) {
  for(var a = a.I, b = a.r("select", {id:b}), d = 0;d < Ld.length;d++) {
    var e = Ld[d], g = a.r("option", {}, e.name);
    if(c == e.name) {
      g.selected = !0
    }
    b.appendChild(g)
  }
  b.appendChild(a.r("option", {selected:c == "INHERIT"}, "INHERIT"));
  return b
}
q.gf = function() {
  this.I.h("options").style.display = "none";
  for(var a = zg(), b = this.I, c = 0;c < a.length;c++) {
    var d = S(a[c]), e = b.h("sel" + a[c]), e = e.options[e.selectedIndex].text;
    e == "INHERIT" ? d.kb(l) : d.kb(Nd(e))
  }
  if(wg) {
    a = zg();
    b = xg();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], e = S(a[c]).S, d in b ? e ? window.localStorage.getItem(d) != e.name && window.localStorage.setItem(d, e.name) : window.localStorage.removeItem(d) : e && window.localStorage.setItem(d, e.name)
    }
  }
  return!1
};
q.Me = function() {
  var a = this.I, b = a.h("log"), c = a.h("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.N.body.offsetHeight - c.offsetHeight - (I ? 4 : 0) + "px"
};
q.nf = function() {
  this.Qb(!1);
  this.s && this.s.close()
};
q.gc = function() {
  return vg.c.gc.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function xg() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != l && d.lastIndexOf("fancywindow.sel.", 0) == 0 && (a[d] = !0)
  }
  return a
}
function zg() {
  var a = Sa(Sd);
  a.sort();
  return a
}
;var Bg = bc ? "MozUserSelect" : J ? "WebkitUserSelect" : l;
function Cg(a) {
  this.ee = a;
  this.j = []
}
C(Cg, K);
var Dg = [];
function Eg(a, b, c, d) {
  t(c) || (Dg[0] = c, c = Dg);
  for(var e = 0;e < c.length;e++) {
    a.j.push(N(b, c[e], d || a, !1, a.ee || a))
  }
  return a
}
function Fg(a, b, c, d, e, g) {
  if(t(c)) {
    for(var h = 0;h < c.length;h++) {
      Fg(a, b, c[h], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.ee || a;
      e = !!e;
      if(b = Vc(b, c, e)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].La && b[c].bb == d && b[c].capture == e && b[c].kc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = l
    }
    if(b) {
      b = b.key, O(b), ab(a.j, b)
    }
  }
  return a
}
Cg.prototype.nd = function() {
  Wa(this.j, O);
  this.j.length = 0
};
Cg.prototype.b = function() {
  Cg.c.b.call(this);
  this.nd()
};
Cg.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Gg() {
}
da(Gg);
Gg.prototype.Gf = 0;
Gg.Va();
function Hg(a) {
  this.Ca = a || xe();
  this.Nb = Ig
}
C(Hg, ad);
Hg.prototype.zf = Gg.Va();
var Ig = l;
function Jg(a, b) {
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
q = Hg.prototype;
q.he = l;
q.D = !1;
q.p = l;
q.Nb = l;
q.Ff = l;
q.L = l;
q.ma = l;
q.rb = l;
q.Zf = !1;
q.h = m("p");
function Kg(a) {
  return a.Wa || (a.Wa = new Cg(a))
}
q.getParent = m("L");
q.pd = function(a) {
  this.L && this.L != a && f(Error("Method not supported"));
  Hg.c.pd.call(this, a)
};
q.yb = m("Ca");
q.r = function() {
  this.p = this.Ca.createElement("div")
};
function Lg(a) {
  var b = W("prefs");
  a.D && f(Error("Component already rendered"));
  a.p || a.r();
  b ? b.insertBefore(a.p, l) : a.Ca.N.body.appendChild(a.p);
  (!a.L || a.L.D) && a.Ta()
}
q.Ta = function() {
  this.D = !0;
  Mg(this, function(a) {
    !a.D && a.h() && a.Ta()
  })
};
q.ub = function() {
  Mg(this, function(a) {
    a.D && a.ub()
  });
  this.Wa && this.Wa.nd();
  this.D = !1
};
q.b = function() {
  Hg.c.b.call(this);
  this.D && this.ub();
  this.Wa && (this.Wa.d(), delete this.Wa);
  Mg(this, function(a) {
    a.d()
  });
  !this.Zf && this.p && Ie(this.p);
  this.L = this.Ff = this.p = this.rb = this.ma = l
};
q.lb = function(a) {
  this.D && f(Error("Component already rendered"));
  this.Nb = a
};
function Mg(a, b) {
  a.ma && Wa(a.ma, b, i)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = u(a) ? a : a.he || (a.he = ":" + (a.zf.Gf++).toString(36)), a = this.rb && c ? (c in this.rb ? this.rb[c] : i) || l : l;
    if(c && a) {
      var d = this.rb;
      c in d && delete d[c];
      ab(this.ma, a);
      b && (a.ub(), a.p && Ie(a.p));
      c = a;
      c == l && f(Error("Unable to set parent component"));
      c.L = l;
      Hg.c.pd.call(c, l)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function Ng() {
}
var Og;
da(Ng);
q = Ng.prototype;
q.dc = function() {
};
q.r = function(a) {
  return a.yb().r("div", Pg(this, a).join(" "), a.sb)
};
q.tb = function(a, b, c) {
  if(a = a.h ? a.h() : a) {
    if(I && !nc("7")) {
      var d = Qg(qe(a), b);
      d.push(b);
      na(c ? re : se, a).apply(l, d)
    }else {
      c ? re(a, b) : se(a, b)
    }
  }
};
q.ie = function(a) {
  if(a.Nb == l) {
    var b;
    a: {
      b = a.D ? a.p : a.Ca.N.body;
      var c = ze(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (b = c.defaultView.getComputedStyle(b, l))) {
        b = b.direction || b.getPropertyValue("direction");
        break a
      }
      b = ""
    }
    a.Nb = "rtl" == (b || ((a.D ? a.p : a.Ca.N.body).currentStyle ? (a.D ? a.p : a.Ca.N.body).currentStyle.direction : l) || (a.D ? a.p : a.Ca.N.body).style.direction)
  }
  a.Nb && this.lb(a.h(), !0);
  a.isEnabled() && this.Rb(a, a.Oa)
};
q.vc = function(a, b) {
  var c = !b, d = I || ac ? a.getElementsByTagName("*") : l;
  if(Bg) {
    if(c = c ? "none" : "", a.style[Bg] = c, d) {
      for(var e = 0, g;g = d[e];e++) {
        g.style[Bg] = c
      }
    }
  }else {
    if(I || ac) {
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for(e = 0;g = d[e];e++) {
          g.setAttribute("unselectable", c)
        }
      }
    }
  }
};
q.lb = function(a, b) {
  this.tb(a, this.qa() + "-rtl", b)
};
q.le = function(a) {
  var b;
  return a.aa & 32 && (b = a.Fa()) ? Me(b) : !1
};
q.Rb = function(a, b) {
  var c;
  if(a.aa & 32 && (c = a.Fa())) {
    if(!b && a.f & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.f & 32 && a.Yd()
    }
    if(Me(c) != b) {
      b ? c.tabIndex = 0 : c.removeAttribute("tabIndex")
    }
  }
};
q.rd = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.M = function(a, b, c) {
  var d = a.h();
  if(d) {
    var e = Rg(this, b);
    e && this.tb(a, e, c);
    this.Vb(d, b, c)
  }
};
q.Vb = function(a, b, c) {
  Og || (Og = {1:"disabled", 4:"pressed", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Og[b]) && a.setAttribute("aria-" + b, c)
};
q.Fa = function(a) {
  return a.h()
};
q.qa = o("goog-control");
function Pg(a, b) {
  var c = a.qa(), d = [c], e = a.qa();
  e != c && d.push(e);
  c = b.f;
  for(e = [];c;) {
    var g = c & -c;
    e.push(Rg(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.Z) && d.push.apply(d, c);
  I && !nc("7") && d.push.apply(d, Qg(d));
  return d
}
function Qg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Wa([], function(d) {
    Za(d, na($a, a)) && (!b || $a(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Rg(a, b) {
  if(!a.Id) {
    var c = a.qa();
    a.Id = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Id[b]
}
;function Sg(a, b) {
  a || f(Error("Invalid class name " + a));
  w(b) || f(Error("Invalid decorator function " + b))
}
var Tg = {};
function Ug(a, b, c, d, e) {
  if(!I && (!J || !nc("525"))) {
    return!0
  }
  if(ec && e) {
    return Vg(a)
  }
  if(e && !d) {
    return!1
  }
  if(!c && (b == 17 || b == 18)) {
    return!1
  }
  if(I && d && b == a) {
    return!1
  }
  switch(a) {
    case 13:
      return!(I && pc());
    case 27:
      return!J
  }
  return Vg(a)
}
function Vg(a) {
  if(a >= 48 && a <= 57) {
    return!0
  }
  if(a >= 96 && a <= 106) {
    return!0
  }
  if(a >= 65 && a <= 90) {
    return!0
  }
  if(J && a == 0) {
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
;function Wg(a, b) {
  a && Xg(this, a, b)
}
C(Wg, ad);
q = Wg.prototype;
q.p = l;
q.mc = l;
q.Yc = l;
q.nc = l;
q.va = -1;
q.ua = -1;
var Yg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Zg = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, $g = {61:187, 
59:186}, ah = I || J && nc("525");
q = Wg.prototype;
q.vf = function(a) {
  if(J && (this.va == 17 && !a.ctrlKey || this.va == 18 && !a.altKey)) {
    this.ua = this.va = -1
  }
  ah && !Ug(a.keyCode, this.va, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.ua = bc && a.keyCode in $g ? $g[a.keyCode] : a.keyCode
};
q.xf = function() {
  this.ua = this.va = -1
};
q.handleEvent = function(a) {
  var b = a.ea, c, d;
  I && a.type == "keypress" ? (c = this.ua, d = c != 13 && c != 27 ? b.keyCode : 0) : J && a.type == "keypress" ? (c = this.ua, d = b.charCode >= 0 && b.charCode < 63232 && Vg(c) ? b.charCode : 0) : ac ? (c = this.ua, d = Vg(c) ? b.keyCode : 0) : (c = b.keyCode || this.ua, d = b.charCode || 0, ec && d == 63 && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in Yg ? e = Yg[c] : c == 25 && a.shiftKey && (e = 9) : g && g in Zg && (e = Zg[g]);
  a = e == this.va;
  this.va = e;
  b = new bh(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.d()
  }
};
q.h = m("p");
function Xg(a, b, c) {
  a.nc && a.detach();
  a.p = b;
  a.mc = N(a.p, "keypress", a, c);
  a.Yc = N(a.p, "keydown", a.vf, c, a);
  a.nc = N(a.p, "keyup", a.xf, c, a)
}
q.detach = function() {
  if(this.mc) {
    O(this.mc), O(this.Yc), O(this.nc), this.nc = this.Yc = this.mc = l
  }
  this.p = l;
  this.ua = this.va = -1
};
q.b = function() {
  Wg.c.b.call(this);
  this.detach()
};
function bh(a, b, c, d) {
  d && this.Ha(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(bh, wc);
function Y(a, b, c) {
  Hg.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = x(b);
      if(d = Tg[d]) {
        break
      }
      b = b.c ? b.c.constructor : l
    }
    b = d ? w(d.Va) ? d.Va() : new d : l
  }
  this.u = b;
  this.sb = a
}
C(Y, Hg);
q = Y.prototype;
q.sb = l;
q.f = 0;
q.aa = 39;
q.Fd = 255;
q.Uf = 0;
q.Oa = !0;
q.Z = l;
q.Uc = !0;
q.Gc = !1;
q.Fa = function() {
  return this.u.Fa(this)
};
function ch(a, b) {
  if(b) {
    a.Z ? $a(a.Z, b) || a.Z.push(b) : a.Z = [b], a.u.tb(a, b, !0)
  }
}
q.tb = function(a, b) {
  if(b) {
    ch(this, a)
  }else {
    if(a && this.Z) {
      ab(this.Z, a);
      if(this.Z.length == 0) {
        this.Z = l
      }
      this.u.tb(this, a, !1)
    }
  }
};
q.r = function() {
  var a = this.u.r(this);
  this.p = a;
  var b = this.u.dc();
  if(b) {
    a.setAttribute("role", b), a.ng = b
  }
  this.Gc || this.u.vc(a, !1);
  this.Oa || this.u.rd(a, !1)
};
q.Ta = function() {
  Y.c.Ta.call(this);
  this.u.ie(this);
  if(this.aa & -2 && (this.Uc && dh(this, !0), this.aa & 32)) {
    var a = this.Fa();
    if(a) {
      var b = this.Za || (this.Za = new Wg);
      Xg(b, a);
      Eg(Eg(Eg(Kg(this), b, "key", this.wf), a, "focus", this.uf), a, "blur", this.Yd)
    }
  }
};
function dh(a, b) {
  var c = Kg(a), d = a.h();
  b ? (Eg(Eg(Eg(Eg(c, d, "mouseover", a.ce), d, "mousedown", a.ae), d, "mouseup", a.de), d, "mouseout", a.be), I && Eg(c, d, "dblclick", a.$d)) : (Fg(Fg(Fg(Fg(c, d, "mouseover", a.ce), d, "mousedown", a.ae), d, "mouseup", a.de), d, "mouseout", a.be), I && Fg(c, d, "dblclick", a.$d))
}
q.ub = function() {
  Y.c.ub.call(this);
  this.Za && this.Za.detach();
  this.Oa && this.isEnabled() && this.u.Rb(this, !1)
};
q.b = function() {
  Y.c.b.call(this);
  this.Za && (this.Za.d(), delete this.Za);
  delete this.u;
  this.Z = this.sb = l
};
function eh(a) {
  a = a.sb;
  if(!a) {
    return""
  }
  if(!u(a)) {
    if(t(a)) {
      a = Xa(a, Ne).join("")
    }else {
      if(ve && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Oe(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      ve || (a = a.replace(/ +/g, " "));
      a != " " && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
q.lb = function(a) {
  Y.c.lb.call(this, a);
  var b = this.h();
  b && this.u.lb(b, a)
};
q.vc = function(a) {
  this.Gc = a;
  var b = this.h();
  b && this.u.vc(b, a)
};
q.rd = function(a, b) {
  if(b || this.Oa != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.h();
    c && this.u.rd(c, a);
    this.isEnabled() && this.u.Rb(this, a);
    this.Oa = a;
    return!0
  }
  return!1
};
q.isEnabled = function() {
  return!(this.f & 1)
};
q.Qb = function(a) {
  var b = this.getParent();
  if((!b || typeof b.isEnabled != "function" || b.isEnabled()) && fh(this, 1, !a)) {
    a || (this.setActive(!1), gh(this, !1)), this.Oa && this.u.Rb(this, a), this.M(1, !a)
  }
};
function gh(a, b) {
  fh(a, 2, b) && a.M(2, b)
}
q.je = function() {
  return!!(this.f & 4)
};
q.setActive = function(a) {
  fh(this, 4, a) && this.M(4, a)
};
q.M = function(a, b) {
  if(this.aa & a && b != !!(this.f & a)) {
    this.u.M(this, a, b), this.f = b ? this.f | a : this.f & ~a
  }
};
function Z(a, b) {
  return!!(a.Fd & b) && !!(a.aa & b)
}
function fh(a, b, c) {
  return!!(a.aa & b) && !!(a.f & b) != c && (!(a.Uf & b) || a.dispatchEvent(Jg(b, c))) && !a.Y
}
q.ce = function(a) {
  (!a.relatedTarget || !Je(this.h(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Z(this, 2) && gh(this, !0)
};
q.be = function(a) {
  if((!a.relatedTarget || !Je(this.h(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    Z(this, 4) && this.setActive(!1), Z(this, 2) && gh(this, !1)
  }
};
q.ae = function(a) {
  if(this.isEnabled() && (Z(this, 2) && gh(this, !0), yc(a) && (!J || !ec || !a.ctrlKey))) {
    Z(this, 4) && this.setActive(!0), this.u.le(this) && this.Fa().focus()
  }
  !this.Gc && yc(a) && (!J || !ec || !a.ctrlKey) && a.preventDefault()
};
q.de = function(a) {
  this.isEnabled() && (Z(this, 2) && gh(this, !0), this.je() && this.Ib(a) && Z(this, 4) && this.setActive(!1))
};
q.$d = function(a) {
  this.isEnabled() && this.Ib(a)
};
q.Ib = function(a) {
  if(Z(this, 16)) {
    var b = !(this.f & 16);
    fh(this, 16, b) && this.M(16, b)
  }
  Z(this, 8) && fh(this, 8, !0) && this.M(8, !0);
  Z(this, 64) && (b = !(this.f & 64), fh(this, 64, b) && this.M(64, b));
  b = new uc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, e = 0;d = c[e];e++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
q.uf = function() {
  Z(this, 32) && fh(this, 32, !0) && this.M(32, !0)
};
q.Yd = function() {
  Z(this, 4) && this.setActive(!1);
  Z(this, 32) && fh(this, 32, !1) && this.M(32, !1)
};
q.wf = function(a) {
  return this.Oa && this.isEnabled() && this.Tc(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
q.Tc = function(a) {
  return a.keyCode == 13 && this.Ib(a)
};
w(Y) || f(Error("Invalid component class " + Y));
w(Ng) || f(Error("Invalid renderer class " + Ng));
var hh = x(Y);
Tg[hh] = Ng;
Sg("goog-control", function() {
  return new Y(l)
});
function ih() {
}
C(ih, Ng);
da(ih);
q = ih.prototype;
q.dc = o("button");
q.Vb = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : ih.c.Vb.call(this, a, b, c)
};
q.r = function(a) {
  var b = ih.c.r.call(this, a), c = a.hc();
  c && this.qd(b, c);
  (c = a.ic()) && this.wc(b, c);
  a.aa & 16 && this.Vb(b, 16, !1);
  return b
};
q.ic = s;
q.wc = s;
q.hc = function(a) {
  return a.title
};
q.qd = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
q.qa = o("goog-button");
function jh() {
}
C(jh, ih);
da(jh);
q = jh.prototype;
q.dc = function() {
};
q.r = function(a) {
  a.D && !1 != a.Uc && dh(a, !1);
  a.Uc = !1;
  a.Fd &= -256;
  a.D && a.f & 32 && f(Error("Component already rendered"));
  a.f & 32 && a.M(32, !1);
  a.aa &= -33;
  return a.yb().r("button", {"class":Pg(this, a).join(" "), disabled:!a.isEnabled(), title:a.hc() || "", value:a.ic() || ""}, eh(a) || "")
};
q.ie = function(a) {
  Eg(Kg(a), a.h(), "click", a.Ib)
};
q.vc = s;
q.lb = s;
q.le = function(a) {
  return a.isEnabled()
};
q.Rb = s;
q.M = function(a, b, c) {
  jh.c.M.call(this, a, b, c);
  if((a = a.h()) && b == 1) {
    a.disabled = c
  }
};
q.ic = function(a) {
  return a.value
};
q.wc = function(a, b) {
  if(a) {
    a.value = b
  }
};
q.Vb = s;
function kh(a, b, c) {
  Y.call(this, a, b || jh.Va(), c)
}
C(kh, Y);
q = kh.prototype;
q.ic = m("Ye");
q.wc = function(a) {
  this.Ye = a;
  this.u.wc(this.h(), a)
};
q.hc = m("Te");
q.qd = function(a) {
  this.Te = a;
  this.u.qd(this.h(), a)
};
q.b = function() {
  kh.c.b.call(this);
  delete this.Ye;
  delete this.Te
};
q.Ta = function() {
  kh.c.Ta.call(this);
  if(this.aa & 32) {
    var a = this.Fa();
    a && Eg(Kg(this), a, "keyup", this.Tc)
  }
};
q.Tc = function(a) {
  return a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup" ? this.Ib(a) : a.keyCode == 32
};
Sg("goog-button", function() {
  return new kh(l)
});
function lh() {
}
C(lh, ih);
da(lh);
lh.prototype.r = function(a) {
  var b = {"class":"goog-inline-block " + Pg(this, a).join(" "), title:a.hc() || ""};
  return a.yb().r("div", b, mh(this, a.sb, a.yb()))
};
lh.prototype.dc = o("button");
function mh(a, b, c) {
  return c.r("div", "goog-inline-block " + (a.qa() + "-outer-box"), c.r("div", "goog-inline-block " + (a.qa() + "-inner-box"), b))
}
lh.prototype.qa = o("goog-custom-button");
function nh(a, b, c) {
  kh.call(this, a, b || lh.Va(), c)
}
C(nh, kh);
Sg("goog-custom-button", function() {
  return new nh(l)
});
function Of(a, b) {
  var c;
  a instanceof Of ? (this.jb(b == l ? a.$ : b), oh(this, a.ha), ph(this, a.Wb), qh(this, a.Da), rh(this, a.fb), sh(this, a.Ja), th(this, a.T.H()), uh(this, a.wb)) : a && (c = String(a).match(ne)) ? (this.jb(!!b), oh(this, c[1] || "", !0), ph(this, c[2] || "", !0), qh(this, c[3] || "", !0), rh(this, c[4]), sh(this, c[5] || "", !0), th(this, c[6] || "", !0), uh(this, c[7] || "", !0)) : (this.jb(!!b), this.T = new vh(l, this, this.$))
}
q = Of.prototype;
q.ha = "";
q.Wb = "";
q.Da = "";
q.fb = l;
q.Ja = "";
q.wb = "";
q.Bf = !1;
q.$ = !1;
q.toString = function() {
  if(this.X) {
    return this.X
  }
  var a = [];
  this.ha && a.push(wh(this.ha, xh), ":");
  this.Da && (a.push("//"), this.Wb && a.push(wh(this.Wb, xh), "@"), a.push(u(this.Da) ? encodeURIComponent(this.Da) : l), this.fb != l && a.push(":", String(this.fb)));
  this.Ja && (this.Da && this.Ja.charAt(0) != "/" && a.push("/"), a.push(wh(this.Ja, this.Ja.charAt(0) == "/" ? yh : zh)));
  var b = String(this.T);
  b && a.push("?", b);
  this.wb && a.push("#", wh(this.wb, Ah));
  return this.X = a.join("")
};
q.H = function() {
  var a = this.ha, b = this.Wb, c = this.Da, d = this.fb, e = this.Ja, g = this.T.H(), h = this.wb, j = new Of(l, this.$);
  a && oh(j, a);
  b && ph(j, b);
  c && qh(j, c);
  d && rh(j, d);
  e && sh(j, e);
  g && th(j, g);
  h && uh(j, h);
  return j
};
function oh(a, b, c) {
  Bh(a);
  delete a.X;
  a.ha = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.ha) {
    a.ha = a.ha.replace(/:$/, "")
  }
}
function ph(a, b, c) {
  Bh(a);
  delete a.X;
  a.Wb = c ? b ? decodeURIComponent(b) : "" : b
}
function qh(a, b, c) {
  Bh(a);
  delete a.X;
  a.Da = c ? b ? decodeURIComponent(b) : "" : b
}
function rh(a, b) {
  Bh(a);
  delete a.X;
  b ? (b = Number(b), (isNaN(b) || b < 0) && f(Error("Bad port number " + b)), a.fb = b) : a.fb = l
}
function sh(a, b, c) {
  Bh(a);
  delete a.X;
  a.Ja = c ? b ? decodeURIComponent(b) : "" : b
}
function th(a, b, c) {
  Bh(a);
  delete a.X;
  b instanceof vh ? (a.T = b, a.T.Ad = a, a.T.jb(a.$)) : (c || (b = wh(b, Ch)), a.T = new vh(b, a, a.$))
}
function uh(a, b, c) {
  Bh(a);
  delete a.X;
  a.wb = c ? b ? decodeURIComponent(b) : "" : b
}
function Bh(a) {
  a.Bf && f(Error("Tried to modify a read-only Uri"))
}
q.jb = function(a) {
  this.$ = a;
  this.T && this.T.jb(a);
  return this
};
var Dh = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function wh(a, b) {
  var c = l;
  u(a) && (c = a, Dh.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, Eh)));
  return c
}
function Eh(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var xh = /[#\/\?@]/g, zh = /[\#\?:]/g, yh = /[\#\?]/g, Ch = /[\#\?@]/g, Ah = /#/g;
function vh(a, b, c) {
  this.da = a || l;
  this.Ad = b || l;
  this.$ = !!c
}
function Fh(a) {
  if(!a.l && (a.l = new H, a.e = 0, a.da)) {
    for(var b = a.da.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = l, g = l;
      d >= 0 ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = Ih(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
q = vh.prototype;
q.l = l;
q.e = l;
q.t = function() {
  Fh(this);
  return this.e
};
q.add = function(a, b) {
  Fh(this);
  Jh(this);
  a = Ih(this, a);
  if(this.P(a)) {
    var c = this.l.get(a);
    t(c) ? c.push(b) : this.l.set(a, [c, b])
  }else {
    this.l.set(a, b)
  }
  this.e++;
  return this
};
q.remove = function(a) {
  Fh(this);
  a = Ih(this, a);
  if(this.l.P(a)) {
    Jh(this);
    var b = this.l.get(a);
    t(b) ? this.e -= b.length : this.e--;
    return this.l.remove(a)
  }
  return!1
};
q.clear = function() {
  Jh(this);
  this.l && this.l.clear();
  this.e = 0
};
q.Ia = function() {
  Fh(this);
  return this.e == 0
};
q.P = function(a) {
  Fh(this);
  a = Ih(this, a);
  return this.l.P(a)
};
q.ac = function(a) {
  var b = this.K();
  return $a(b, a)
};
q.ra = function() {
  Fh(this);
  for(var a = this.l.K(), b = this.l.ra(), c = [], d = 0;d < b.length;d++) {
    var e = a[d];
    if(t(e)) {
      for(var g = 0;g < e.length;g++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
q.K = function(a) {
  Fh(this);
  if(a) {
    if(a = Ih(this, a), this.P(a)) {
      var b = this.l.get(a);
      if(t(b)) {
        return b
      }else {
        a = [], a.push(b)
      }
    }else {
      a = []
    }
  }else {
    for(var b = this.l.K(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      t(d) ? db(a, d) : a.push(d)
    }
  }
  return a
};
q.set = function(a, b) {
  Fh(this);
  Jh(this);
  a = Ih(this, a);
  if(this.P(a)) {
    var c = this.l.get(a);
    t(c) ? this.e -= c.length : this.e--
  }
  this.l.set(a, b);
  this.e++;
  return this
};
q.get = function(a, b) {
  Fh(this);
  a = Ih(this, a);
  if(this.P(a)) {
    var c = this.l.get(a);
    return t(c) ? c[0] : c
  }else {
    return b
  }
};
q.toString = function() {
  if(this.da) {
    return this.da
  }
  if(!this.l) {
    return""
  }
  for(var a = [], b = 0, c = this.l.ra(), d = 0;d < c.length;d++) {
    var e = c[d], g = wa(e), e = this.l.get(e);
    if(t(e)) {
      for(var h = 0;h < e.length;h++) {
        b > 0 && a.push("&"), a.push(g), e[h] !== "" && a.push("=", wa(e[h])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(g), e !== "" && a.push("=", wa(e)), b++
    }
  }
  return this.da = a.join("")
};
function Jh(a) {
  delete a.Kc;
  delete a.da;
  a.Ad && delete a.Ad.X
}
q.H = function() {
  var a = new vh;
  if(this.Kc) {
    a.Kc = this.Kc
  }
  if(this.da) {
    a.da = this.da
  }
  if(this.l) {
    a.l = this.l.H()
  }
  return a
};
function Ih(a, b) {
  var c = String(b);
  a.$ && (c = c.toLowerCase());
  return c
}
q.jb = function(a) {
  a && !this.$ && (Fh(this), Jh(this), Fb(this.l, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.$ = a
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
S("goog.ui.media.FlashObject");
r.__loadFlashObject_callbacks = {};
var wf = 1;
function Kh(a, b) {
  this.ag = a;
  this.ue = b
}
Kh.prototype.Zc = 0;
Kh.prototype.qc = 0;
Kh.prototype.Rc = !1;
function Lh(a) {
  var b = [];
  if(a.Rc) {
    return[b, 2]
  }
  var c = a.Zc, d = a.ag.responseText;
  for(a.Zc = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var e = d.substr(a.qc, c - a.qc), e = e.replace(/\r$/, "");
    if(e.length > a.ue) {
      return a.Rc = !0, [b, 2]
    }
    b.push(e);
    a.qc = c += 1
  }
  return a.Zc - a.qc - 1 > a.ue ? (a.Rc = !0, [b, 2]) : [b, wf]
}
;var Mh = !(I || J && !nc("420+"));
function Nh(a, b) {
  this.Ue = a;
  this.V = b
}
C(Nh, K);
q = Nh.prototype;
q.n = l;
q.xa = -1;
q.Xd = !1;
q.fe = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Oh(a) {
  var b = Lh(a.Pd), c = b[0], b = b[1], d = r.parent;
  d ? (d.__XHRMaster_onframes(a.V, c, b), b != wf && a.d()) : a.d()
}
q.yf = function() {
  Oh(this);
  if(!this.Y) {
    var a = r.parent;
    a && a.__XHRMaster_oncomplete(this.V);
    this.d()
  }
};
q.Lf = function() {
  var a = r.parent;
  if(a) {
    this.xa = this.n.sa();
    if(this.xa >= 2 && !this.Xd) {
      for(var b = new H, c = this.fe.length;c--;) {
        var d = this.fe[c];
        try {
          b.set(d, this.n.g.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.t() && (this.Xd = !0, a.__XHRMaster_ongotheaders(this.V, Kb(b)), this.Y)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.V, this.xa);
    Mh && this.xa == 3 && Oh(this)
  }else {
    this.d()
  }
};
q.cd = function(a, b, c) {
  this.n = new nf;
  N(this.n, "readystatechange", A(this.Lf, this));
  N(this.n, "complete", A(this.yf, this));
  this.n.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.Pd = new Kh(this.n.g, 1048576)
};
q.b = function() {
  Nh.c.b.call(this);
  delete this.Pd;
  this.n && this.n.d();
  delete this.Ue.Sb[this.V];
  delete this.Ue
};
function Ph() {
  this.Sb = {}
}
C(Ph, K);
Ph.prototype.Cf = function(a, b, c, d) {
  var e = new Nh(this, a);
  this.Sb[a] = e;
  e.cd(b, c, d)
};
Ph.prototype.lf = function(a) {
  (a = this.Sb[a]) && a.d()
};
Ph.prototype.b = function() {
  Ph.c.b.call(this);
  for(var a = Ra(this.Sb);a.length;) {
    a.pop().d()
  }
  delete this.Sb
};
var Qh = new Ph;
r.__XHRSlave_makeRequest = A(Qh.Cf, Qh);
r.__XHRSlave_dispose = A(Qh.lf, Qh);
function Rh() {
  this.hg = "demosminerva_site_uaid";
  this.ig = "demosminerva_site_uaid_secure"
}
function Sh() {
  var a = new Of(document.location), b = r.__demo_shared_domain, a = a.H();
  qh(a, "_____random_____." + b);
  sh(a, "/httpface/");
  th(a, "", i);
  b = new Df(a.toString().replace("_____random_____", "%random%"));
  return ld(b)
}
;var Th = S("ljstream.logger");
window.onerror = function(a, b, c) {
  Pd(Th, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Uh() {
  this.De = new tb
}
function Uf(a, b) {
  Th.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  Vh("Disconnected from server.  Try reloading this page.");
  $ = l
}
function Wh(a) {
  Th.info("Sending preferences to server");
  var b;
  b = new eg;
  b.o[1] = W("include_russian_posts").checked;
  b.Ba && (b.Ba[1] = !0);
  b = a.De.Pb(b);
  Nf(a.z, [(new wb).Pb([2, b])])
}
Uh.prototype.reset = function(a) {
  Th.info("resetting with reason: " + a);
  this.z.reset(a)
};
var $ = l, Xh = new md(r.window);
function Vh(a) {
  a = Ee("span", {"class":"important-message"}, a);
  Zf(a)
}
function Yh() {
  $ && ($.reset("idle timeout fired"), $ = l, Vh("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var Zh = l;
function $h() {
  Zh != l && Xh.G.clearTimeout(Zh);
  $ && (Zh = Xh.G.setTimeout(Yh, 6E5))
}
N(window, ["click", "focus", "keydown", "keypress"], $h, !0);
var De = new ye, ai = 0;
function Zf(a) {
  a = Ee("div", {"class":"row-" + (ai % 2 == 0 ? "even" : "odd")}, Ee("nobr", {}, a));
  W("ljstream-container-inner").appendChild(a);
  ai += 1;
  var b;
  if(b = dg) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !J && d.compatMode == "CSS1Compat" ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new we(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = Ce().height;
    b = !(a + b <= c + d)
  }
  if(b) {
    a = Ce().height, window.scrollBy(0, Math.round(a / 2) + 80)
  }
}
function bi() {
  var a = new Rh;
  $ = new Uh;
  $h();
  id(Sh(), function(b) {
    $ || f(Error("lastProto falsy?"));
    b = new Hf(Xh, $, b, a);
    $.z = b;
    var c = $;
    Nf(c.z, ["subprotocol:ljstream"]);
    Wh(c);
    b.start();
    return l
  })
}
function ci() {
  N(r, "load", function() {
    window.scrollTo(0, 0)
  });
  N(W("include_russian_posts"), "click", function() {
    Wh($)
  });
  dg = !0;
  N(W("automatic_scroll"), "click", function(a) {
    dg = a.target.checked
  });
  var a = new nh("Clear posts");
  ch(a, "clear-posts-button");
  Lg(a);
  N(a, "action", function() {
    W("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = W("ljstream-container");
  a.style.marginTop = W("demo-header").offsetHeight + "px";
  W("demo-header").style.width = "9000px";
  var b = Ee("div", {id:"ljstream-container-inner"});
  a.appendChild(b)
}
function di() {
  Vd().kb(Kd);
  if((new Of(document.location)).T.get("logging") == "1") {
    var a = new vg("main");
    a.Qb(!0);
    a.Ha()
  }
  Th.info("Logger works.");
  ci();
  bi()
}
var ei = "__ljstream_init".split("."), fi = r;
!(ei[0] in fi) && fi.execScript && fi.execScript("var " + ei[0]);
for(var gi;ei.length && (gi = ei.shift());) {
  !ei.length && fa(di) ? fi[gi] = di : fi = fi[gi] ? fi[gi] : fi[gi] = {}
}
;})();
