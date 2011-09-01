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
  a.bb = function() {
    return a.Ff || (a.Ff = new a)
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
function z(a, b, c) {
  z = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? la : ma;
  return z.apply(l, arguments)
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
var oa, pa, qa, ra;
oa = RegExp("(?:\\b[a-z\\d.-]+://[^<>\\s]+|\\b(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:[;/][^#?<>\\s]*)?(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w)|(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w))", 
"ig");
pa = /^[a-z\d.-]+:\/\//i;
qa = {"'":"`", ">":"<", ")":"(", "]":"[", "}":"{", "\u00bb":"\u00ab", "\u203a":"\u2039"};
ra = {oa:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, Oe:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
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
        b.Oe && (e = e.replace(b.Oe, function(a) {
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
    d += b.oa.apply(r, c[e])
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
    var j = d[h] || "", k = e[h] || "", n = RegExp("(\\d*)(\\D*)", "g"), y = RegExp("(\\d*)(\\D*)", "g");
    do {
      var o = n.exec(j) || ["", "", ""], v = y.exec(k) || ["", "", ""];
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
  D.call(this, ta.apply(l, b));
  b.shift();
  this.sg = a
}
C(Ha, D);
Ha.prototype.name = "AssertionError";
function Ia(a, b) {
  f(new Ha("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ja(a, b, c) {
  this.v = a;
  this.C = b;
  this.hd = c.name;
  this.fb = !!c.tg;
  this.qg = !!c.required;
  this.Ab = c.ab;
  this.De = c.type;
  this.Wd = !1;
  switch(this.Ab) {
    case Ka:
    ;
    case La:
    ;
    case Ma:
    ;
    case Na:
    ;
    case Oa:
      this.Wd = !0
  }
  this.og = c.defaultValue
}
var Ka = 3, La = 4, Ma = 6, Na = 16, Oa = 18;
function Pa(a) {
  return a.Ab == 11 || a.Ab == 10
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
  this.Be = a;
  this.hd = b.name || l;
  this.pg = b.$d || l;
  this.ng = b.mg;
  this.ra = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.ra[b.C] = b
  }
}
function jb(a) {
  a = Ra(a.ra);
  gb(a, function(a, c) {
    return a.C - c.C
  });
  return a
}
;function kb() {
  this.n = {};
  this.Za = this.constructor.Za;
  var a = this.Za.ra, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.ra = b;
  this.Ha = this.cd = l
}
function lb(a, b) {
  for(var c in a.n) {
    a.ra[c] || b.call(a, Number(c), a.n[c])
  }
}
q = kb.prototype;
q.Bb = m("Za");
q.get = function(a, b) {
  return mb(this, a.C, b)
};
q.set = function(a, b) {
  var c = a.C;
  this.n[c] = b;
  this.Ha && (this.Ha[c] = !0)
};
q.add = function(a, b) {
  var c = a.C;
  this.n[c] || (this.n[c] = []);
  this.n[c].push(b)
};
q.clear = function(a) {
  delete this.n[a.C]
};
q.k = function(a) {
  if(!a || this.constructor != a.constructor) {
    return!1
  }
  for(var b = jb(this.Bb()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(nb(this, d.C) != nb(a, d.C)) {
      return!1
    }
    if(nb(this, d.C)) {
      var e = Pa(d), g = d.C, h = this.n[g], g = a.n[g];
      if(d.fb) {
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
q.D = function() {
  for(var a = new this.constructor, b = jb(a.Bb()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete a.n[d.C];
    if(nb(this, d.C)) {
      var e = Pa(d);
      if(d.fb) {
        var g;
        g = d.C;
        ob(this, this.ra[g]);
        g = this.n[g] || [];
        for(var h = 0;h < g.length;h++) {
          a.add(d, e ? g[h].D() : g[h])
        }
      }else {
        g = this.get(d), a.set(d, e ? g.D() : g)
      }
    }
  }
  return a
};
function nb(a, b) {
  return b in a.n && fa(a.n[b]) && a.n[b] !== l
}
function ob(a, b) {
  if(a.cd) {
    var c = b.C;
    if(!(c in a.Ha)) {
      var d = a.n, e;
      e = a.cd;
      var g = a.n[c];
      if(g == l) {
        e = g
      }else {
        if(b.fb) {
          var h = [];
          t(g);
          for(var j = 0;j < g.length;j++) {
            h[j] = e.gc(b, g[j])
          }
          e = h
        }else {
          e = e.gc(b, g)
        }
      }
      d[c] = e;
      a.Ha[c] = !0
    }
  }
}
function mb(a, b, c) {
  var d = a.ra[b];
  ob(a, d);
  return d.fb ? (c = c || 0, c >= 0 && pb(a, b), a.n[b][c]) : (t(a.n[b]), b in a.n ? a.n[b] : l)
}
function pb(a, b) {
  return a.ra[b].fb ? (nb(a, b) && t(a.n[b]), nb(a, b) ? a.n[b].length : 0) : nb(a, b) ? 1 : 0
}
function qb(a, b) {
  var c = [], d, e;
  for(e in b) {
    b.hasOwnProperty(e) && (e == 0 ? d = b[0] : c.push(new Ja(a, e, b[e])))
  }
  a.Za = new ib(a, d, c);
  a.Bb = function() {
    return a.Za
  }
}
;function rb() {
}
rb.prototype.hc = function(a, b) {
  return Pa(a) ? this.Tb(b) : b
};
rb.prototype.Oc = function(a) {
  new a.Be;
  f(Error("Unimplemented"))
};
rb.prototype.gc = function(a, b) {
  if(Pa(a)) {
    return this.Oc(a.De.Za, b)
  }
  if(!a.Wd) {
    return b
  }
  var c = a.De;
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
sb.prototype.Oc = function(a, b) {
  var c = new a.Be;
  c.cd = this;
  c.n = b;
  c.Ha = {};
  return c
};
function tb() {
}
C(tb, sb);
tb.prototype.Tb = function(a) {
  for(var b = jb(a.Bb()), c = [], d = 0;d < b.length;d++) {
    var e = b[d];
    if(nb(a, e.C)) {
      var g = e.C;
      if(e.fb) {
        c[g] = [];
        for(var h = 0;h < pb(a, e.C);h++) {
          c[g][h] = this.hc(e, a.get(e, h))
        }
      }else {
        c[g] = this.hc(e, a.get(e))
      }
    }
  }
  lb(a, function(a, b) {
    c[a] = b
  });
  return c
};
tb.prototype.hc = function(a, b) {
  return a.Ab == 8 ? b ? 1 : 0 : rb.prototype.hc.apply(this, arguments)
};
tb.prototype.gc = function(a, b) {
  return a.Ab == 8 ? b === 1 : rb.prototype.gc.apply(this, arguments)
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
wb.prototype.Tb = function(a) {
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
        if(ub(a.r)) {
          a.r(b, c)
        }else {
          if(ub(a.gf)) {
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
  if(typeof a.u == "function") {
    a = a.u()
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
  if(typeof a.L == "function") {
    return a.L()
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
  if(typeof a.ua == "function") {
    return a.ua()
  }
  if(typeof a.L != "function") {
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
    a && this.Hc(a)
  }
}
q = H.prototype;
q.f = 0;
q.Fd = 0;
q.u = m("f");
q.L = function() {
  Hb(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.m[this.j[b]])
  }
  return a
};
q.ua = function() {
  Hb(this);
  return this.j.concat()
};
q.T = function(a) {
  return Ib(this.m, a)
};
q.cc = function(a) {
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
  if(this.f != a.u()) {
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
q.Oa = function() {
  return this.f == 0
};
q.clear = function() {
  this.m = {};
  this.Fd = this.f = this.j.length = 0
};
q.remove = function(a) {
  return Ib(this.m, a) ? (delete this.m[a], this.f--, this.Fd++, this.j.length > 2 * this.f && Hb(this), !0) : !1
};
function Hb(a) {
  if(a.f != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      Ib(a.m, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.f != a.j.length) {
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
  Ib(this.m, a) || (this.f++, this.j.push(a), this.Fd++);
  this.m[a] = b
};
q.Hc = function(a) {
  var b;
  a instanceof H ? (b = a.ua(), a = a.L()) : (b = Sa(a), a = Ra(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
q.D = function() {
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
  this.Va = a;
  this.Ra = b
}
Mb.prototype.k = function(a) {
  return a instanceof Mb && this.Va == a.Va && this.Ra.join(",") == a.Ra
};
Mb.prototype.r = function(a, b) {
  a.push("new SACK(", String(this.Va), ", ");
  F(this.Ra, a, b);
  a.push(")")
};
function Nb() {
  this.H = new H
}
q = Nb.prototype;
q.Xa = -1;
q.Ea = 0;
q.append = function(a) {
  var b = Lb(a);
  this.H.set(this.Xa + 1, [a, b]);
  this.Xa += 1;
  this.Ea += b
};
q.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
q.r = function(a) {
  a.push("<Queue with ", String(this.H.u()), " item(s), counter=#", String(this.Xa), ", size=", String(this.Ea), ">")
};
function Ob(a) {
  Hb(a.H);
  gb(a.H.j);
  return a.H.j
}
function Pb() {
  this.Fa = new H
}
Pb.prototype.hb = -1;
Pb.prototype.Ea = 0;
function Qb(a) {
  var b = a.Fa.ua();
  gb(b);
  return new Mb(a.hb, b)
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
K.prototype.ba = !1;
K.prototype.e = function() {
  if(!this.ba) {
    this.ba = !0, this.c()
  }
};
K.prototype.c = function() {
  this.pf && tc.apply(l, this.pf)
};
function tc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ga(d) ? tc.apply(l, d) : d && typeof d.e == "function" && d.e()
  }
}
;function uc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
C(uc, K);
q = uc.prototype;
q.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
q.Pa = !1;
q.Qb = !0;
q.stopPropagation = function() {
  this.Pa = !0
};
q.preventDefault = function() {
  this.Qb = !1
};
function vc(a) {
  vc[" "](a);
  return a
}
vc[" "] = s;
function wc(a, b) {
  a && this.Na(a, b)
}
C(wc, uc);
var yc = [1, 4, 2];
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
q.Of = !1;
q.ia = l;
q.Na = function(a, b) {
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
  this.Of = ec ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ia = a;
  delete this.Qb;
  delete this.Pa
};
function zc(a) {
  return rc ? a.ia.button == 0 : a.type == "click" ? !0 : !!(a.ia.button & yc[0])
}
q.stopPropagation = function() {
  wc.d.stopPropagation.call(this);
  this.ia.stopPropagation ? this.ia.stopPropagation() : this.ia.cancelBubble = !0
};
q.preventDefault = function() {
  wc.d.preventDefault.call(this);
  var a = this.ia;
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
q.c = function() {
  wc.d.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ia = l
};
function Ac() {
}
var Bc = 0;
q = Ac.prototype;
q.key = 0;
q.Qa = !1;
q.Lc = !1;
q.Na = function(a, b, c, d, e, g) {
  w(a) ? this.re = !0 : a && a.handleEvent && w(a.handleEvent) ? this.re = !1 : f(Error("Invalid listener argument"));
  this.jb = a;
  this.Ne = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.mc = g;
  this.Lc = !1;
  this.key = ++Bc;
  this.Qa = !1
};
q.handleEvent = function(a) {
  return this.re ? this.jb.call(this.mc || this.src, a) : this.jb.handleEvent.call(this.jb, a)
};
var Cc, Dc = (Cc = "ScriptEngine" in r && r.ScriptEngine() == "JScript") ? r.ScriptEngineMajorVersion() + "." + r.ScriptEngineMinorVersion() + "." + r.ScriptEngineBuildVersion() : "0";
function L(a, b) {
  this.xe = b;
  this.Ka = [];
  a > this.xe && f(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.Ka.push(this.ga ? this.ga() : {})
  }
}
C(L, K);
L.prototype.ga = l;
L.prototype.Xd = l;
function Ec(a) {
  return a.Ka.length ? a.Ka.pop() : a.ga ? a.ga() : {}
}
function Fc(a, b) {
  a.Ka.length < a.xe ? a.Ka.push(b) : Gc(a, b)
}
function Gc(a, b) {
  if(a.Xd) {
    a.Xd(b)
  }else {
    if(ia(b)) {
      if(w(b.e)) {
        b.e()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
L.prototype.c = function() {
  L.d.c.call(this);
  for(var a = this.Ka;a.length;) {
    Gc(this, a.pop())
  }
  delete this.Ka
};
var Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc, Rc;
(function() {
  function a() {
    return{f:0, X:0}
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
    return new Ac
  }
  function e() {
    return new wc
  }
  var g = Cc && !(Fa(Dc, "5.7") >= 0), h;
  Mc = function(a) {
    h = a
  };
  if(g) {
    Hc = function() {
      return Ec(j)
    };
    Ic = function(a) {
      Fc(j, a)
    };
    Jc = function() {
      return Ec(k)
    };
    Kc = function(a) {
      Fc(k, a)
    };
    Lc = function() {
      return Ec(n)
    };
    Nc = function() {
      Fc(n, c())
    };
    Oc = function() {
      return Ec(y)
    };
    Pc = function(a) {
      Fc(y, a)
    };
    Qc = function() {
      return Ec(o)
    };
    Rc = function(a) {
      Fc(o, a)
    };
    var j = new L(0, 600);
    j.ga = a;
    var k = new L(0, 600);
    k.ga = b;
    var n = new L(0, 600);
    n.ga = c;
    var y = new L(0, 600);
    y.ga = d;
    var o = new L(0, 600);
    o.ga = e
  }else {
    Hc = a, Ic = s, Jc = b, Kc = s, Lc = c, Nc = s, Oc = d, Pc = s, Qc = e, Rc = s
  }
})();
var Sc = {}, M = {}, Tc = {}, Uc = {};
function N(a, b, c, d, e) {
  if(b) {
    if(t(b)) {
      for(var g = 0;g < b.length;g++) {
        N(a, b[g], c, d, e)
      }
      return l
    }else {
      var d = !!d, h = M;
      b in h || (h[b] = Hc());
      h = h[b];
      d in h || (h[d] = Hc(), h.f++);
      var h = h[d], j = x(a), k;
      h.X++;
      if(h[j]) {
        k = h[j];
        for(g = 0;g < k.length;g++) {
          if(h = k[g], h.jb == c && h.mc == e) {
            if(h.Qa) {
              break
            }
            return k[g].key
          }
        }
      }else {
        k = h[j] = Jc(), h.f++
      }
      g = Lc();
      g.src = a;
      h = Oc();
      h.Na(c, g, a, b, d, e);
      c = h.key;
      g.key = c;
      k.push(h);
      Sc[c] = h;
      Tc[j] || (Tc[j] = Jc());
      Tc[j].push(h);
      a.addEventListener ? (a == r || !a.Sd) && a.addEventListener(b, g, d) : a.attachEvent(b in Uc ? Uc[b] : Uc[b] = "on" + b, g);
      return c
    }
  }else {
    f(Error("Invalid event type"))
  }
}
function Vc(a, b, c, d, e) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      Vc(a, b[g], c, d, e)
    }
    return l
  }
  a = N(a, b, c, d, e);
  Sc[a].Lc = !0;
  return a
}
function Wc(a, b, c, d, e) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      Wc(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = Xc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].jb == c && a[g].capture == d && a[g].mc == e) {
          O(a[g].key);
          break
        }
      }
    }
  }
}
function O(a) {
  if(!Sc[a]) {
    return!1
  }
  var b = Sc[a];
  if(b.Qa) {
    return!1
  }
  var c = b.src, d = b.type, e = b.Ne, g = b.capture;
  c.removeEventListener ? (c == r || !c.Sd) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in Uc ? Uc[d] : Uc[d] = "on" + d, e);
  c = x(c);
  e = M[d][g][c];
  if(Tc[c]) {
    var h = Tc[c];
    ab(h, b);
    h.length == 0 && delete Tc[c]
  }
  b.Qa = !0;
  e.Fe = !0;
  Yc(d, g, c, e);
  delete Sc[a];
  return!0
}
function Yc(a, b, c, d) {
  if(!d.rc && d.Fe) {
    for(var e = 0, g = 0;e < d.length;e++) {
      if(d[e].Qa) {
        var h = d[e].Ne;
        h.src = l;
        Nc(h);
        Pc(d[e])
      }else {
        e != g && (d[g] = d[e]), g++
      }
    }
    d.length = g;
    d.Fe = !1;
    g == 0 && (Kc(d), delete M[a][b][c], M[a][b].f--, M[a][b].f == 0 && (Ic(M[a][b]), delete M[a][b], M[a].f--), M[a].f == 0 && (Ic(M[a]), delete M[a]))
  }
}
function Zc(a) {
  var b, c = 0, d = b == l;
  b = !!b;
  if(a == l) {
    Qa(Tc, function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          O(g.key), c++
        }
      }
    })
  }else {
    if(a = x(a), Tc[a]) {
      for(var a = Tc[a], e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          O(g.key), c++
        }
      }
    }
  }
}
function Xc(a, b, c) {
  var d = M;
  return b in d && (d = d[b], c in d && (d = d[c], a = x(a), d[a])) ? d[a] : l
}
function $c(a, b, c, d, e) {
  var g = 1, b = x(b);
  if(a[b]) {
    a.X--;
    a = a[b];
    a.rc ? a.rc++ : a.rc = 1;
    try {
      for(var h = a.length, j = 0;j < h;j++) {
        var k = a[j];
        k && !k.Qa && (g &= ad(k, e) !== !1)
      }
    }finally {
      a.rc--, Yc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function ad(a, b) {
  var c = a.handleEvent(b);
  a.Lc && O(a.key);
  return c
}
Mc(function(a, b) {
  if(!Sc[a]) {
    return!0
  }
  var c = Sc[a], d = c.type, e = M;
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
          }catch(y) {
            n = !0
          }
        }
        if(n || g.returnValue == i) {
          g.returnValue = !0
        }
      }
    }
    n = Qc();
    n.Na(g, this);
    g = !0;
    try {
      if(j) {
        for(var o = Jc(), v = n.currentTarget;v;v = v.parentNode) {
          o.push(v)
        }
        h = e[!0];
        h.X = h.f;
        for(var A = o.length - 1;!n.Pa && A >= 0 && h.X;A--) {
          n.currentTarget = o[A], g &= $c(h, o[A], d, !0, n)
        }
        if(k) {
          h = e[!1];
          h.X = h.f;
          for(A = 0;!n.Pa && A < o.length && h.X;A++) {
            n.currentTarget = o[A], g &= $c(h, o[A], d, !1, n)
          }
        }
      }else {
        g = ad(c, n)
      }
    }finally {
      if(o) {
        o.length = 0, Kc(o)
      }
      n.e();
      Rc(n)
    }
    return g
  }
  d = new wc(b, this);
  try {
    g = ad(c, d)
  }finally {
    d.e()
  }
  return g
});
var bd = 0;
function cd() {
}
C(cd, K);
q = cd.prototype;
q.Sd = !0;
q.tc = l;
q.td = aa("tc");
q.addEventListener = function(a, b, c, d) {
  N(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Wc(this, a, b, c, d)
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
      for(g = this;g;g = g.tc) {
        e.push(g)
      }
      g = c[!0];
      g.X = g.f;
      for(var h = e.length - 1;!a.Pa && h >= 0 && g.X;h--) {
        a.currentTarget = e[h], d &= $c(g, e[h], a.type, !0, a) && a.Qb != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.X = g.f, b) {
        for(h = 0;!a.Pa && h < e.length && g.X;h++) {
          a.currentTarget = e[h], d &= $c(g, e[h], a.type, !1, a) && a.Qb != !1
        }
      }else {
        for(e = this;!a.Pa && e && g.X;e = e.tc) {
          a.currentTarget = e, d &= $c(g, e, a.type, !1, a) && a.Qb != !1
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
q.c = function() {
  cd.d.c.call(this);
  Zc(this);
  this.tc = l
};
var dd = r.window;
bd++;
bd++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function ed(a, b) {
  this.ac = [];
  this.Ld = a;
  this.Ud = b || l
}
q = ed.prototype;
q.sa = !1;
q.Db = !1;
q.Lb = 0;
q.wd = !1;
q.kf = !1;
q.Jc = 0;
q.cancel = function(a) {
  if(this.sa) {
    this.Pb instanceof ed && this.Pb.cancel()
  }else {
    if(this.v) {
      var b = this.v;
      delete this.v;
      a ? b.cancel(a) : (b.Jc--, b.Jc <= 0 && b.cancel())
    }
    this.Ld ? this.Ld.call(this.Ud, this) : this.wd = !0;
    this.sa || this.dc(new fd(this))
  }
};
q.Pd = function(a, b) {
  gd(this, a, b);
  this.Lb--;
  this.Lb == 0 && this.sa && hd(this)
};
function gd(a, b, c) {
  a.sa = !0;
  a.Pb = c;
  a.Db = !b;
  hd(a)
}
function id(a) {
  if(a.sa) {
    a.wd || f(new jd(a)), a.wd = !1
  }
}
q.oa = function(a) {
  id(this);
  gd(this, !0, a)
};
q.dc = function(a) {
  id(this);
  gd(this, !1, a)
};
function kd(a, b) {
  ld(a, b, l, i)
}
function ld(a, b, c, d) {
  a.ac.push([b, c, d]);
  a.sa && hd(a)
}
function md(a) {
  return Ya(a.ac, function(a) {
    return w(a[1])
  })
}
function hd(a) {
  a.Dd && a.sa && md(a) && (r.clearTimeout(a.Dd), delete a.Dd);
  a.v && (a.v.Jc--, delete a.v);
  for(var b = a.Pb, c = !1, d = !1;a.ac.length && a.Lb == 0;) {
    var e = a.ac.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.Db ? h : g) {
      try {
        var j = g.call(e || a.Ud, b);
        if(fa(j)) {
          a.Db = a.Db && (j == b || j instanceof Error), a.Pb = b = j
        }
        b instanceof ed && (d = !0, a.Lb++)
      }catch(k) {
        b = k, a.Db = !0, md(a) || (c = !0)
      }
    }
  }
  a.Pb = b;
  if(d && a.Lb) {
    ld(b, z(a.Pd, a, !0), z(a.Pd, a, !1)), b.kf = !0
  }
  if(c) {
    a.Dd = r.setTimeout(function() {
      fa(b.message) && b.stack && (b.message += "\n" + b.stack);
      f(b)
    }, 0)
  }
}
function nd(a) {
  var b = new ed;
  b.oa(a);
  return b
}
function jd(a) {
  D.call(this);
  this.of = a
}
C(jd, D);
jd.prototype.message = "Already called";
function fd(a) {
  D.call(this);
  this.of = a
}
C(fd, D);
fd.prototype.message = "Deferred was cancelled";
function od(a) {
  this.I = a;
  this.Qc = [];
  this.Yd = [];
  this.lg = z(this.gg, this)
}
od.prototype.fg = l;
od.prototype.gg = function() {
  this.fg = l;
  var a = this.Qc;
  this.Qc = [];
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
  if(this.Qc.length == 0) {
    a = this.Yd;
    this.Yd = [];
    for(b = 0;b < a.length;b++) {
      a[b].oa(l)
    }
  }
};
var pd = new od(r.window);
function qd() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ B()).toString(36)
}
function rd(a) {
  return a.substr(0, a.length - 1)
}
var sd = /^(0|[1-9]\d*)$/, td = /^(0|\-?[1-9]\d*)$/;
function ud(a) {
  var b = vd;
  return sd.test(a) && (a = parseInt(a, 10), a <= b) ? a : l
}
;function wd(a) {
  this.m = new H;
  a && this.Hc(a)
}
function xd(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + x(a) : b.substr(0, 1) + a
}
q = wd.prototype;
q.u = function() {
  return this.m.u()
};
q.add = function(a) {
  this.m.set(xd(a), a)
};
q.Hc = function(a) {
  for(var a = Db(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
q.qd = function(a) {
  for(var a = Db(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
q.remove = function(a) {
  return this.m.remove(xd(a))
};
q.clear = function() {
  this.m.clear()
};
q.Oa = function() {
  return this.m.Oa()
};
q.contains = function(a) {
  return this.m.T(xd(a))
};
q.L = function() {
  return this.m.L()
};
q.D = function() {
  return new wd(this)
};
q.k = function(a) {
  return this.u() == Cb(a) && yd(this, a)
};
function yd(a, b) {
  var c = Cb(b);
  if(a.u() > c) {
    return!1
  }
  !(b instanceof wd) && c > 5 && (b = new wd(b));
  return Gb(a, function(a) {
    if(typeof b.contains == "function") {
      a = b.contains(a)
    }else {
      if(typeof b.cc == "function") {
        a = b.cc(a)
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
;function zd(a) {
  return Ad(a || arguments.callee.caller, [])
}
function Ad(a, b) {
  var c = [];
  if($a(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(Bd(a) + "(");
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
            g = (g = Bd(g)) ? g : "[fn]";
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
        c.push(Ad(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Bd(a) {
  if(Cd[a]) {
    return Cd[a]
  }
  a = String(a);
  if(!Cd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Cd[a] = b ? b[1] : "[Anonymous]"
  }
  return Cd[a]
}
var Cd = {};
function Dd(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Dd.prototype.Tf = 0;
Dd.prototype.Sc = l;
Dd.prototype.Rc = l;
var Ed = 0;
Dd.prototype.reset = function(a, b, c, d, e) {
  this.Tf = typeof e == "number" ? e : Ed++;
  this.Xe = d || B();
  this.W = a;
  this.Ce = b;
  this.we = c;
  delete this.Sc;
  delete this.Rc
};
Dd.prototype.ob = aa("W");
function Fd(a) {
  this.hd = a
}
Fd.prototype.v = l;
Fd.prototype.W = l;
Fd.prototype.pa = l;
Fd.prototype.Fb = l;
function P(a, b) {
  this.name = a;
  this.value = b
}
P.prototype.toString = m("name");
var Gd = new P("SHOUT", 1200), Hd = new P("SEVERE", 1E3), Id = new P("WARNING", 900), Jd = new P("INFO", 800), Kd = new P("CONFIG", 700), Ld = new P("FINE", 500), Md = new P("FINEST", 300), Nd = new P("ALL", 0), Od = [new P("OFF", Infinity), Gd, Hd, Id, Jd, Kd, Ld, new P("FINER", 400), Md, Nd], Pd = l;
function Qd(a) {
  if(!Pd) {
    Pd = {};
    for(var b = 0, c;c = Od[b];b++) {
      Pd[c.value] = c, Pd[c.name] = c
    }
  }
  return Pd[a] || l
}
q = Fd.prototype;
q.getParent = m("v");
q.ob = aa("W");
function Rd(a) {
  if(a.W) {
    return a.W
  }
  if(a.v) {
    return Rd(a.v)
  }
  Ia("Root logger has no level set.");
  return l
}
q.log = function(a, b, c) {
  if(a.value >= Rd(this).value) {
    a = this.yf(a, b, c);
    b = "log:" + a.Ce;
    r.console && (r.console.timeStamp ? r.console.timeStamp(b) : r.console.markTimeline && r.console.markTimeline(b));
    r.msWriteProfilerMark && r.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.Fb) {
        for(var e = 0, g = i;g = c.Fb[e];e++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
q.yf = function(a, b, c) {
  var d = new Dd(a, String(b), this.hd);
  if(c) {
    d.Sc = c;
    var e;
    var g = arguments.callee.caller;
    try {
      var h;
      var j = ca("window.location.href");
      if(u(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var k, n, y = !1;
        try {
          k = c.lineNumber || c.rg || "Not available"
        }catch(o) {
          k = "Not available", y = !0
        }
        try {
          n = c.fileName || c.filename || c.sourceURL || j
        }catch(v) {
          n = "Not available", y = !0
        }
        h = y || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:k, fileName:n, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + ya(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + ya(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ya(zd(g) + "-> ")
    }catch(A) {
      e = "Exception trying to expose exception! You win, we lose. " + A
    }
    d.Rc = e
  }
  return d
};
function Sd(a, b) {
  a.log(Hd, b, i)
}
function Td(a, b) {
  a.log(Id, b, i)
}
q.info = function(a, b) {
  this.log(Jd, a, b)
};
function Q(a, b) {
  a.log(Ld, b, i)
}
function R(a, b) {
  a.log(Md, b, i)
}
var Ud = {}, Wd = l;
function Xd() {
  Wd || (Wd = new Fd(""), Ud[""] = Wd, Wd.ob(Kd))
}
function Yd() {
  Xd();
  return Wd
}
function S(a) {
  Xd();
  var b;
  if(!(b = Ud[a])) {
    b = new Fd(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = S(a.substr(0, c));
    if(!c.pa) {
      c.pa = {}
    }
    c.pa[d] = b;
    b.v = c;
    Ud[a] = b
  }
  return b
}
;S("cw.net.FlashSocket");
S("cw.net.FlashSocketTracker");
function Zd(a) {
  this.qa = a;
  this.Kc = []
}
C(Zd, K);
Zd.prototype.a = S("cw.net.FlashSocketConduit");
Zd.prototype.Id = function(a) {
  this.Kc ? (R(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Kc.push.apply(this.Kc, a)) : (R(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.xd.Id(a))
};
Zd.prototype.Nd = function(a, b) {
  this.xd.Nd(a, b)
};
Zd.prototype.c = function() {
  this.a.info("in disposeInternal.");
  Zd.d.c.call(this);
  this.xd.e();
  delete this.qa
};
function $d() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;var vd = Math.pow(2, 53);
var ae = {gf:p("<cw.eq.Wildcard>")};
function be(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function ce(a, b, c) {
  var d = ea(a), e = ea(b);
  if(a == ae || b == ae) {
    return!0
  }else {
    if(a != l && typeof a.k == "function") {
      return c && c.push("running custom equals function on left object"), a.k(b, c)
    }else {
      if(b != l && typeof b.k == "function") {
        return c && c.push("running custom equals function on right object"), b.k(a, c)
      }else {
        if(be(d) || be(e)) {
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
                      if(!ce(a[d], b[d], c)) {
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
                if(a.ff == Sb && b.ff == Sb) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = !1;
                        break a
                      }
                      if(!ce(a[g], b[g], c)) {
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
  this.V(a);
  return a.join("")
}
function de() {
}
de.prototype.k = function(a, b) {
  return!(a instanceof de) ? !1 : ce(ee(this), ee(a), b)
};
de.prototype.r = function(a, b) {
  a.push("<HelloFrame properties=");
  F(ee(this), a, b);
  a.push(">")
};
function ee(a) {
  return[a.rb, a.Me, a.le, a.Qe, a.Xb, a.Ad, a.Ee, a.Ae, a.fd, a.ye, a.bf, a.We, a.Z, a.qc]
}
de.prototype.R = U;
de.prototype.V = function(a) {
  var b = {};
  b.tnum = this.rb;
  b.ver = this.Me;
  b.format = this.le;
  b["new"] = this.Qe;
  b.id = this.Xb;
  b.ming = this.Ad;
  b.pad = this.Ee;
  b.maxb = this.Ae;
  if(fa(this.fd)) {
    b.maxt = this.fd
  }
  b.maxia = this.ye;
  b.tcpack = this.bf;
  b.eeds = this.We;
  b.sack = this.Z instanceof Mb ? rd((new V(this.Z)).R()) : this.Z;
  b.seenack = this.qc instanceof Mb ? rd((new V(this.qc)).R()) : this.qc;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new wb).Tb(b), "H")
};
function fe(a) {
  this.qb = a
}
fe.prototype.k = function(a) {
  return a instanceof fe && this.qb == a.qb
};
fe.prototype.r = function(a, b) {
  a.push("new StringFrame(");
  F(this.qb, a, b);
  a.push(")")
};
fe.prototype.R = U;
fe.prototype.V = function(a) {
  a.push(this.qb, " ")
};
function ge(a) {
  this.bc = a
}
ge.prototype.k = function(a) {
  return a instanceof ge && this.bc == a.bc
};
ge.prototype.r = function(a, b) {
  a.push("new CommentFrame(");
  F(this.bc, a, b);
  a.push(")")
};
ge.prototype.R = U;
ge.prototype.V = function(a) {
  a.push(this.bc, "^")
};
function he(a) {
  this.Sb = a
}
he.prototype.k = function(a) {
  return a instanceof he && this.Sb == a.Sb
};
he.prototype.r = function(a) {
  a.push("new SeqNumFrame(", String(this.Sb), ")")
};
he.prototype.R = U;
he.prototype.V = function(a) {
  a.push(String(this.Sb), "N")
};
function ie(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return l
  }
  a: {
    var c = b[1], a = vd;
    if(td.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
      var g = ud(b[d]);
      if(g == l) {
        return l
      }
      c.push(g)
    }
  }
  return new Mb(a, c)
}
function V(a) {
  this.Z = a
}
V.prototype.k = function(a, b) {
  return a instanceof V && this.Z.k(a.Z, b)
};
V.prototype.r = function(a, b) {
  a.push("new SackFrame(");
  F(this.Z, a, b);
  a.push(")")
};
V.prototype.R = U;
V.prototype.V = function(a) {
  var b = this.Z;
  a.push(b.Ra.join(","), "|", String(b.Va));
  a.push("A")
};
function je(a) {
  this.Ib = a
}
je.prototype.k = function(a, b) {
  return a instanceof je && this.Ib.k(a.Ib, b)
};
je.prototype.r = function(a, b) {
  a.push("new StreamStatusFrame(");
  F(this.Ib, a, b);
  a.push(")")
};
je.prototype.R = U;
je.prototype.V = function(a) {
  var b = this.Ib;
  a.push(b.Ra.join(","), "|", String(b.Va));
  a.push("T")
};
function ke() {
}
ke.prototype.r = function(a) {
  a.push("new StreamCreatedFrame()")
};
ke.prototype.k = function(a) {
  return a instanceof ke
};
ke.prototype.R = U;
ke.prototype.V = function(a) {
  a.push("C")
};
function le() {
}
le.prototype.r = function(a) {
  a.push("new YouCloseItFrame()")
};
le.prototype.k = function(a) {
  return a instanceof le
};
le.prototype.R = U;
le.prototype.V = function(a) {
  a.push("Y")
};
function me(a, b) {
  this.Nb = a;
  this.ub = b
}
me.prototype.k = function(a) {
  return a instanceof me && this.Nb == a.Nb && this.ub == a.ub
};
me.prototype.r = function(a, b) {
  a.push("new ResetFrame(");
  F(this.Nb, a, b);
  a.push(", ", String(this.ub), ")")
};
me.prototype.R = U;
me.prototype.V = function(a) {
  a.push(this.Nb, "|", String(Number(this.ub)), "!")
};
var ne = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function oe(a) {
  this.reason = a
}
oe.prototype.k = function(a) {
  return a instanceof oe && this.reason == a.reason
};
oe.prototype.r = function(a, b) {
  a.push("new TransportKillFrame(");
  F(this.reason, a, b);
  a.push(")")
};
oe.prototype.R = U;
oe.prototype.V = function(a) {
  a.push(this.reason, "K")
};
function pe(a) {
  a || f(new T("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new fe(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = ie(rd(a)), a == l && f(new T("bad sack")), new V(a)
    }else {
      if(b == "N") {
        return a = ud(rd(a)), a == l && f(new T("bad seqNum")), new he(a)
      }else {
        if(b == "T") {
          return a = ie(rd(a)), a == l && f(new T("bad lastSackSeen")), new je(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && f(new T("leading garbage")), new le
          }else {
            if(b == "^") {
              return new ge(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && f(new T("leading garbage")), new ke
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && f(new T("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == l && f(new T("bad applicationLevel")), new me(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = ne[a], a == l && f(new T("unknown kill reason: " + a)), new oe(a)
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
;var qe = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function re(a, b) {
  var c = a.match(qe), d = b.match(qe);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function W(a, b) {
  var c;
  a instanceof W ? (this.nb(b == l ? a.ea : b), se(this, a.$), te(this, a.Ta), ue(this, a.ca), ve(this, a.za), we(this, a.S), xe(this, a.M.D()), ye(this, a.Ja)) : a && (c = String(a).match(qe)) ? (this.nb(!!b), se(this, c[1] || "", !0), te(this, c[2] || "", !0), ue(this, c[3] || "", !0), ve(this, c[4]), we(this, c[5] || "", !0), xe(this, c[6] || "", !0), ye(this, c[7] || "", !0)) : (this.nb(!!b), this.M = new ze(l, this, this.ea))
}
q = W.prototype;
q.$ = "";
q.Ta = "";
q.ca = "";
q.za = l;
q.S = "";
q.Ja = "";
q.Gf = !1;
q.ea = !1;
q.toString = function() {
  if(this.aa) {
    return this.aa
  }
  var a = [];
  this.$ && a.push(Ae(this.$, Be), ":");
  this.ca && (a.push("//"), this.Ta && a.push(Ae(this.Ta, Be), "@"), a.push(u(this.ca) ? encodeURIComponent(this.ca) : l), this.za != l && a.push(":", String(this.za)));
  this.S && (this.ca && this.S.charAt(0) != "/" && a.push("/"), a.push(Ae(this.S, this.S.charAt(0) == "/" ? Ce : De)));
  var b = String(this.M);
  b && a.push("?", b);
  this.Ja && a.push("#", Ae(this.Ja, Ee));
  return this.aa = a.join("")
};
q.D = function() {
  var a = this.$, b = this.Ta, c = this.ca, d = this.za, e = this.S, g = this.M.D(), h = this.Ja, j = new W(l, this.ea);
  a && se(j, a);
  b && te(j, b);
  c && ue(j, c);
  d && ve(j, d);
  e && we(j, e);
  g && xe(j, g);
  h && ye(j, h);
  return j
};
function se(a, b, c) {
  Fe(a);
  delete a.aa;
  a.$ = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.$) {
    a.$ = a.$.replace(/:$/, "")
  }
}
function te(a, b, c) {
  Fe(a);
  delete a.aa;
  a.Ta = c ? b ? decodeURIComponent(b) : "" : b
}
function ue(a, b, c) {
  Fe(a);
  delete a.aa;
  a.ca = c ? b ? decodeURIComponent(b) : "" : b
}
function ve(a, b) {
  Fe(a);
  delete a.aa;
  b ? (b = Number(b), (isNaN(b) || b < 0) && f(Error("Bad port number " + b)), a.za = b) : a.za = l
}
function we(a, b, c) {
  Fe(a);
  delete a.aa;
  a.S = c ? b ? decodeURIComponent(b) : "" : b
}
function xe(a, b, c) {
  Fe(a);
  delete a.aa;
  b instanceof ze ? (a.M = b, a.M.Ed = a, a.M.nb(a.ea)) : (c || (b = Ae(b, Ge)), a.M = new ze(b, a, a.ea))
}
function ye(a, b, c) {
  Fe(a);
  delete a.aa;
  a.Ja = c ? b ? decodeURIComponent(b) : "" : b
}
function Fe(a) {
  a.Gf && f(Error("Tried to modify a read-only Uri"))
}
q.nb = function(a) {
  this.ea = a;
  this.M && this.M.nb(a);
  return this
};
function He(a) {
  return a instanceof W ? a.D() : new W(a, i)
}
var Ie = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Ae(a, b) {
  var c = l;
  u(a) && (c = a, Ie.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, Je)));
  return c
}
function Je(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Be = /[#\/\?@]/g, De = /[\#\?:]/g, Ce = /[\#\?]/g, Ge = /[\#\?@]/g, Ee = /#/g;
function ze(a, b, c) {
  this.ha = a || l;
  this.Ed = b || l;
  this.ea = !!c
}
function Ke(a) {
  if(!a.l && (a.l = new H, a.f = 0, a.ha)) {
    for(var b = a.ha.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = l, g = l;
      d >= 0 ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = Le(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
q = ze.prototype;
q.l = l;
q.f = l;
q.u = function() {
  Ke(this);
  return this.f
};
q.add = function(a, b) {
  Ke(this);
  Me(this);
  a = Le(this, a);
  if(this.T(a)) {
    var c = this.l.get(a);
    t(c) ? c.push(b) : this.l.set(a, [c, b])
  }else {
    this.l.set(a, b)
  }
  this.f++;
  return this
};
q.remove = function(a) {
  Ke(this);
  a = Le(this, a);
  if(this.l.T(a)) {
    Me(this);
    var b = this.l.get(a);
    t(b) ? this.f -= b.length : this.f--;
    return this.l.remove(a)
  }
  return!1
};
q.clear = function() {
  Me(this);
  this.l && this.l.clear();
  this.f = 0
};
q.Oa = function() {
  Ke(this);
  return this.f == 0
};
q.T = function(a) {
  Ke(this);
  a = Le(this, a);
  return this.l.T(a)
};
q.cc = function(a) {
  var b = this.L();
  return $a(b, a)
};
q.ua = function() {
  Ke(this);
  for(var a = this.l.L(), b = this.l.ua(), c = [], d = 0;d < b.length;d++) {
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
q.L = function(a) {
  Ke(this);
  if(a) {
    if(a = Le(this, a), this.T(a)) {
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
    for(var b = this.l.L(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      t(d) ? db(a, d) : a.push(d)
    }
  }
  return a
};
q.set = function(a, b) {
  Ke(this);
  Me(this);
  a = Le(this, a);
  if(this.T(a)) {
    var c = this.l.get(a);
    t(c) ? this.f -= c.length : this.f--
  }
  this.l.set(a, b);
  this.f++;
  return this
};
q.get = function(a, b) {
  Ke(this);
  a = Le(this, a);
  if(this.T(a)) {
    var c = this.l.get(a);
    return t(c) ? c[0] : c
  }else {
    return b
  }
};
q.toString = function() {
  if(this.ha) {
    return this.ha
  }
  if(!this.l) {
    return""
  }
  for(var a = [], b = 0, c = this.l.ua(), d = 0;d < c.length;d++) {
    var e = c[d], g = wa(e), e = this.l.get(e);
    if(t(e)) {
      for(var h = 0;h < e.length;h++) {
        b > 0 && a.push("&"), a.push(g), e[h] !== "" && a.push("=", wa(e[h])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(g), e !== "" && a.push("=", wa(e)), b++
    }
  }
  return this.ha = a.join("")
};
function Me(a) {
  delete a.Ya;
  delete a.ha;
  a.Ed && delete a.Ed.aa
}
q.D = function() {
  var a = new ze;
  if(this.Ya) {
    a.Ya = this.Ya
  }
  if(this.ha) {
    a.ha = this.ha
  }
  if(this.l) {
    a.l = this.l.D()
  }
  return a
};
function Le(a, b) {
  var c = String(b);
  a.ea && (c = c.toLowerCase());
  return c
}
q.nb = function(a) {
  a && !this.ea && (Ke(this), Me(this), Fb(this.l, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ea = a
};
q.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Fb(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
var Ne;
function Oe(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function Pe(a, b) {
  var c = Oe(a), d = fb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    $a(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function Qe(a, b) {
  var c = Oe(a), d = fb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < e.length;h++) {
    $a(d, e[h]) && (eb(e, h--, 1), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
;function Re(a, b) {
  this.width = a;
  this.height = b
}
q = Re.prototype;
q.D = function() {
  return new Re(this.width, this.height)
};
q.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
q.Oa = function() {
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
var Se = !I || pc();
!bc && !I || I && pc() || bc && nc("1.9.1");
var Te = I && !nc("9");
function Ue(a, b) {
  this.x = fa(a) ? a : 0;
  this.y = fa(b) ? b : 0
}
Ue.prototype.D = function() {
  return new Ue(this.x, this.y)
};
Ue.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function Ve(a) {
  return a ? new We(Xe(a)) : Ne || (Ne = new We)
}
function X(a) {
  return u(a) ? document.getElementById(a) : a
}
function Ye(a, b) {
  Qa(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in Ze ? a.setAttribute(Ze[d], b) : d.lastIndexOf("aria-", 0) == 0 ? a.setAttribute(d, b) : a[d] = b
  })
}
var Ze = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function $e() {
  var a = af.Q.parentWindow || af.Q.defaultView || window, b = a.document;
  if(J && !nc("500") && !cc) {
    typeof a.innerHeight == "undefined" && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new Re(a.innerWidth, b)
  }
  a = b.compatMode == "CSS1Compat" ? b.documentElement : b.body;
  return new Re(a.clientWidth, a.clientHeight)
}
function bf(a, b, c) {
  return cf(document, arguments)
}
function cf(a, b) {
  var c = b[0], d = b[1];
  if(!Se && d && (d.name || d.type)) {
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
    u(d) ? c.className = d : t(d) ? Pe.apply(l, [c].concat(d)) : Ye(c, d)
  }
  b.length > 2 && df(a, c, b, 2);
  return c
}
function df(a, b, c, d) {
  function e(c) {
    c && b.appendChild(u(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && g.nodeType > 0) ? Wa(ef(g) ? cb(g) : g, e) : e(g)
  }
}
function ff(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function gf(a, b) {
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
function Xe(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
var hf = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, jf = {IMG:" ", BR:"\n"};
function kf(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, typeof a == "number" && a >= 0 && a < 32768) : !1
}
function lf(a) {
  var b = [];
  mf(a, b, !1);
  return b.join("")
}
function mf(a, b, c) {
  if(!(a.nodeName in hf)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in jf) {
        b.push(jf[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          mf(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function ef(a) {
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
function We(a) {
  this.Q = a || r.document || document
}
q = We.prototype;
q.Cb = Ve;
q.h = function(a) {
  return u(a) ? this.Q.getElementById(a) : a
};
q.s = function(a, b, c) {
  return cf(this.Q, arguments)
};
q.createElement = function(a) {
  return this.Q.createElement(a)
};
q.createTextNode = function(a) {
  return this.Q.createTextNode(a)
};
q.appendChild = function(a, b) {
  a.appendChild(b)
};
q.append = function(a, b) {
  df(Xe(a), a, arguments, 1)
};
q.contains = gf;
function nf(a, b, c, d) {
  this.contentWindow = a;
  this.ec = b;
  this.Bd = c;
  this.xf = d
}
nf.prototype.r = function(a, b) {
  a.push("<XDRFrame frameId=");
  F(this.xf, a, b);
  a.push(", expandedUrl=");
  F(this.ec, a, b);
  a.push(", streams=");
  F(this.Bd, a, b);
  a.push(">")
};
function of() {
  this.frames = [];
  this.dd = new H
}
of.prototype.a = S("cw.net.XDRTracker");
function pf(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + String(Math.floor($d())) + String(Math.floor($d()))
  })
}
function qf(a, b) {
  for(var c = rf, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = e.Bd.length == 0) {
      g = e.ec;
      var h = String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + G(b) + " existing frame " + G(e)), nd(e)
    }
  }
  d = qd() + qd();
  e = pf(a);
  g = r.location;
  g instanceof W || (g = He(g));
  e instanceof W || (e = He(e));
  var j = g;
  g = j.D();
  (h = !!e.$) ? se(g, e.$) : h = !!e.Ta;
  h ? te(g, e.Ta) : h = !!e.ca;
  h ? ue(g, e.ca) : h = e.za != l;
  var k = e.S;
  if(h) {
    ve(g, e.za)
  }else {
    if(h = !!e.S) {
      if(k.charAt(0) != "/" && (j.ca && !j.S ? k = "/" + k : (j = g.S.lastIndexOf("/"), j != -1 && (k = g.S.substr(0, j + 1) + k))), k == ".." || k == ".") {
        k = ""
      }else {
        if(!(k.indexOf("./") == -1 && k.indexOf("/.") == -1)) {
          for(var j = k.lastIndexOf("/", 0) == 0, k = k.split("/"), n = [], y = 0;y < k.length;) {
            var o = k[y++];
            o == "." ? j && y == k.length && n.push("") : o == ".." ? ((n.length > 1 || n.length == 1 && n[0] != "") && n.pop(), j && y == k.length && n.push("")) : (n.push(o), j = !0)
          }
          k = n.join("/")
        }
      }
    }
  }
  h ? we(g, k) : h = e.M.toString() !== "";
  if(h) {
    j = e.M;
    if(!j.Ya) {
      j.Ya = j.toString() ? decodeURIComponent(j.toString()) : ""
    }
    xe(g, j.Ya, i)
  }else {
    h = !!e.Ja
  }
  h && ye(g, e.Ja);
  e = g.toString();
  g = String(r.location).match(qe)[3] || l;
  h = e.match(qe)[3] || l;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + G(b)), c = nd(new nf(r, e, [b], l))) : (g = X("minerva-elements"), h = new ed, c.dd.set(d, [h, e, b]), c.a.info("Creating new XDRFrame " + G(d) + "for " + G(b)), c = bf("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + d}), g.appendChild(c), c = h);
  return c
}
of.prototype.kg = function(a) {
  var b = this.dd.get(a);
  b || f(Error("Unknown frameId " + G(a)));
  this.dd.remove(b);
  var c = b[0], a = new nf(X("minerva-xdrframe-" + a).contentWindow || (J ? X("minerva-xdrframe-" + a).document || X("minerva-xdrframe-" + a).contentWindow.document : X("minerva-xdrframe-" + a).contentDocument || X("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (J ? X("minerva-xdrframe-" + a).document || X("minerva-xdrframe-" + a).contentWindow.document : X("minerva-xdrframe-" + a).contentDocument || X("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.oa(a)
};
var rf = new of;
r.__XHRTracker_xdrFrameLoaded = z(rf.kg, rf);
var sf;
sf = !1;
var tf = Yb();
tf && (tf.indexOf("Firefox") != -1 || tf.indexOf("Camino") != -1 || tf.indexOf("iPhone") != -1 || tf.indexOf("iPod") != -1 || tf.indexOf("iPad") != -1 || tf.indexOf("Android") != -1 || tf.indexOf("Chrome") != -1 && (sf = !0));
var uf = sf;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function vf(a, b, c, d, e, g) {
  ed.call(this, e, g);
  this.ve = a;
  this.Nc = [];
  this.Zd = !!b;
  this.vf = !!c;
  this.nf = !!d;
  for(b = 0;b < a.length;b++) {
    ld(a[b], z(this.de, this, b, !0), z(this.de, this, b, !1))
  }
  a.length == 0 && !this.Zd && this.oa(this.Nc)
}
C(vf, ed);
vf.prototype.Ge = 0;
vf.prototype.de = function(a, b, c) {
  this.Ge++;
  this.Nc[a] = [b, c];
  this.sa || (this.Zd && b ? this.oa([a, c]) : this.vf && !b ? this.dc(c) : this.Ge == this.ve.length && this.oa(this.Nc));
  this.nf && !b && (c = l);
  return c
};
vf.prototype.dc = function(a) {
  vf.d.dc.call(this, a);
  Wa(this.ve, function(a) {
    a.cancel()
  })
};
function wf(a) {
  a = new vf(a, !1, !0);
  kd(a, function(a) {
    return Xa(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function xf(a, b) {
  this.jg = a;
  this.ze = b
}
xf.prototype.ad = 0;
xf.prototype.sc = 0;
xf.prototype.Tc = !1;
function yf(a) {
  var b = [];
  if(a.Tc) {
    return[b, 2]
  }
  var c = a.ad, d = a.jg.responseText;
  for(a.ad = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var e = d.substr(a.sc, c - a.sc), e = e.replace(/\r$/, "");
    if(e.length > a.ze) {
      return a.Tc = !0, [b, 2]
    }
    b.push(e);
    a.sc = c += 1
  }
  return a.ad - a.sc - 1 > a.ze ? (a.Tc = !0, [b, 2]) : [b, 1]
}
;function zf(a, b, c) {
  this.qa = b;
  this.Y = a;
  this.Mc = c
}
C(zf, K);
q = zf.prototype;
q.a = S("cw.net.XHRMaster");
q.Ca = -1;
q.ed = function(a, b, c) {
  this.Mc.__XHRSlave_makeRequest(this.Y, a, b, c)
};
q.va = m("Ca");
q.kd = function(a, b) {
  b != 1 && Sd(this.a, G(this.Y) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Af(this.qa);
  a: {
    var c = this.qa;
    c.zc = !0;
    try {
      for(var d = !1, e = [], g = 0, h = a.length;g < h;g++) {
        if(c.ba) {
          c.a.info(c.q() + " returning from loop because we're disposed.");
          break a
        }
        if(d = Bf(c, a[g], e)) {
          break
        }
      }
      e.length && Cf(c, e);
      c.zc = !1;
      c.A.length && c.ja();
      d && (R(c.a, c.q() + " closeSoon is true.  Frames were: " + G(a)), c.e())
    }finally {
      c.zc = !1
    }
  }
};
q.ld = function(a) {
  Q(this.a, "ongotheaders_: " + G(a));
  var b = l;
  "Content-Length" in a && (b = ud(a["Content-Length"]));
  a = this.qa;
  Q(a.a, a.q() + " got Content-Length: " + b);
  a.fa == Df && (b == l && (Td(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Ef(a, 2E3 + b / 3072 * 1E3))
};
q.md = function(a) {
  a != 1 && Q(this.a, this.qa.q() + "'s XHR's readyState is " + a);
  this.Ca = a;
  this.Ca >= 2 && Af(this.qa)
};
q.jd = function() {
  this.qa.e()
};
q.c = function() {
  zf.d.c.call(this);
  delete Ff.ka[this.Y];
  this.Mc.__XHRSlave_dispose(this.Y);
  delete this.Mc
};
function Gf() {
  this.ka = {}
}
C(Gf, K);
q = Gf.prototype;
q.a = S("cw.net.XHRMasterTracker");
q.Rd = function(a, b) {
  var c = "_" + qd(), d = new zf(c, a, b);
  return this.ka[c] = d
};
q.kd = function(a, b, c) {
  var b = bb(b), d = this.ka[a];
  d ? d.kd(b, c) : Sd(this.a, "onframes_: no master for " + G(a))
};
q.ld = function(a, b) {
  var c = this.ka[a];
  c ? c.ld(b) : Sd(this.a, "ongotheaders_: no master for " + G(a))
};
q.md = function(a, b) {
  var c = this.ka[a];
  c ? c.md(b) : Sd(this.a, "onreadystatechange_: no master for " + G(a))
};
q.jd = function(a) {
  var b = this.ka[a];
  b ? (delete this.ka[b.Y], b.jd()) : Sd(this.a, "oncomplete_: no master for " + G(a))
};
q.c = function() {
  Gf.d.c.call(this);
  for(var a = Ra(this.ka);a.length;) {
    a.pop().e()
  }
  delete this.ka
};
var Ff = new Gf;
r.__XHRMaster_onframes = z(Ff.kd, Ff);
r.__XHRMaster_oncomplete = z(Ff.jd, Ff);
r.__XHRMaster_ongotheaders = z(Ff.ld, Ff);
r.__XHRMaster_onreadystatechange = z(Ff.md, Ff);
function Hf(a, b) {
  b || (b = a);
  this.Aa = a;
  this.Da = b
}
Hf.prototype.r = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  F(this.Aa, a, b);
  a.push(", secondaryUrl=");
  F(this.Da, a, b);
  a.push(">")
};
function If(a, b, c, d) {
  this.Aa = a;
  this.Le = b;
  this.Da = c;
  this.Ue = d;
  (!(this.Aa.indexOf("http://") == 0 || this.Aa.indexOf("https://") == 0) || !(this.Da.indexOf("http://") == 0 || this.Da.indexOf("https://") == 0)) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Le.location.href;
  re(this.Aa, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Ue.location.href;
  re(this.Da, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
If.prototype.r = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  F(this.Aa, a, b);
  a.push(", secondaryUrl=");
  F(this.Da, a, b);
  a.push(">")
};
var Jf = new ge(";)]}");
function Kf() {
}
Kf.prototype.ae = p(1);
function Lf(a) {
  this.$f = a
}
Lf.prototype.r = function(a, b) {
  a.push("<UserContext for ");
  F(this.$f, a, b);
  a.push(">")
};
function Mf(a, b, c) {
  this.K = a;
  this.ag = b ? b : new Kf;
  this.F = c ? c : pd;
  this.Yb = new wd;
  this.Xb = qd() + qd();
  this.Ba = new Nb;
  this.Zc = new Pb;
  this.Zb = l;
  this.Dc = [];
  this.sb = new Lf(this);
  if(J) {
    this.Zb = Vc(r, "load", this.Rf, !1, this)
  }
}
C(Mf, K);
q = Mf.prototype;
q.a = S("cw.net.ClientStream");
q.te = new Mb(-1, []);
q.ue = new Mb(-1, []);
q.Jf = 50;
q.If = 1048576;
q.nd = l;
q.onreset = l;
q.Ie = l;
q.yd = !1;
q.rd = !1;
q.b = 1;
q.$e = -1;
q.i = l;
q.z = l;
q.Ob = l;
q.zd = 0;
q.Ke = 0;
q.Te = 0;
q.r = function(a, b) {
  a.push("<ClientStream id=");
  F(this.Xb, a, b);
  a.push(", state=", String(this.b));
  a.push(", primary=");
  F(this.i, a, b);
  a.push(", secondary=");
  F(this.z, a, b);
  a.push(", resetting=");
  F(this.Ob, a, b);
  a.push(">")
};
function Nf(a) {
  var b = [-1];
  a.i && b.push(a.i.kb);
  a.z && b.push(a.z.kb);
  return Math.max.apply(Math.max, b)
}
function Of(a) {
  if(a.b != 1) {
    var b = a.Ba.H.u() != 0, c = Qb(a.Zc), d = !c.k(a.ue) && !(a.i && c.k(a.i.ib) || a.z && c.k(a.z.ib)), e = Nf(a);
    if((b = b && e < a.Ba.Xa) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.i.vb) {
        R(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.i, c != d.ib)) {
          !d.la && !d.A.length && Pf(d), d.A.push(new V(c)), d.ib = c
        }
        b && Qf(a.i, a.Ba, e + 1);
        a.i.ja()
      }else {
        a.z == l ? a.yd ? (R(a.a, "tryToSend_: creating secondary to send " + g), a.z = Rf(a, !1), b && Qf(a.z, a.Ba, e + 1), a.z.ja()) : (R(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.rd = !0) : R(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
q.Rf = function() {
  this.Zb = l;
  if(this.i && this.i.eb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.i;
    a.Gc = !0;
    a.e()
  }
  if(this.z && this.z.eb()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.z, a.Gc = !0, a.e()
  }
};
function Tf(a, b) {
  var c;
  fa(c) || (c = !0);
  a.b > 3 && f(Error("sendStrings: Can't send strings in state " + a.b));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || f(Error("sendStrings: string #" + c + " has illegal chars: " + G(d)))
      }
    }
    a.Ba.extend(b);
    Of(a)
  }
}
function Rf(a, b) {
  var c;
  a.K instanceof If ? c = a.ag.ae() == 1 ? Df : Uf : f(Error("Don't support endpoint " + G(a.K)));
  a.$e += 1;
  c = new Vf(a.F, a, a.$e, c, a.K, b);
  R(a.a, "Created: " + c.q());
  a.Yb.add(c);
  return c
}
function Wf(a, b, c) {
  var d = new Xf(a.F, a, b, c);
  R(a.a, "Created: " + d.q() + ", delay=" + b + ", times=" + c);
  a.Yb.add(d);
  return d
}
function Yf(a, b) {
  a.Yb.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  Q(a.a, "Offline: " + b.q());
  b.uc ? a.zd += b.uc : a.zd = 0;
  a.zd >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.sb, "stream penalty reached limit", !1), a.e());
  if(a.b > 3) {
    a.b == 4 && b.ef ? (Q(a.a, "Disposing because resettingTransport_ is done."), a.e()) : Q(a.a, "Not creating a transport because ClientStream is in state " + a.b)
  }else {
    var c;
    var d;
    c = b instanceof Xf;
    if(!c && b.Gc) {
      var e = J ? uf ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      R(a.a, "getDelayForNextTransport_: " + G({delay:c, times:d}))
    }else {
      d = b.Od();
      if(b == a.i) {
        if(d) {
          e = ++a.Ke
        }else {
          if(!c) {
            e = a.Ke = 0
          }
        }
      }else {
        if(d) {
          e = ++a.Te
        }else {
          if(!c) {
            e = a.Te = 0
          }
        }
      }
      if(c || !e) {
        d = c = 0, R(a.a, "getDelayForNextTransport_: " + G({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(Math.random() * 4E3) - 2E3, j = Math.max(0, b.af - b.Cd);
        d = (c = Math.max(0, g + h - j)) ? 1 : 0;
        R(a.a, "getDelayForNextTransport_: " + G({count:e, base:g, variance:h, oldDuration:j, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    if(b == a.i) {
      a.i = l, c ? a.i = Wf(a, e, c) : (e = Nf(a), a.i = Rf(a, !0), Qf(a.i, a.Ba, e + 1)), a.i.ja()
    }else {
      if(b == a.z) {
        a.z = l, c ? (a.z = Wf(a, e, c), a.z.ja()) : Of(a)
      }
    }
  }
}
q.reset = function(a) {
  this.b > 3 && f(Error("reset: Can't send reset in state " + this.b));
  this.b = 4;
  this.i && this.i.vb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Zf(this.i, a), this.i.ja()) : (this.i && (Q(this.a, "reset: Disposing primary before sending ResetFrame."), this.i.e()), this.z && (Q(this.a, "reset: Disposing secondary before sending ResetFrame."), this.z.e()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Ob = Rf(this, !1), Zf(this.Ob, a), this.Ob.ja());
  this.onreset && this.onreset.call(this.sb, a, !0)
};
function $f(a, b, c, d) {
  var e;
  e = a.Zc;
  for(var g = a.Jf, h = a.If, j = [], k = !1, n = 0, y = c.length;n < y;n++) {
    var o = c[n], v = o[0], o = o[1];
    if(v == e.hb + 1) {
      e.hb += 1;
      for(j.push(o);;) {
        v = e.hb + 1;
        o = e.Fa.get(v, Rb);
        if(o === Rb) {
          break
        }
        j.push(o[0]);
        e.Fa.remove(v);
        e.Ea -= o[1];
        e.hb = v
      }
    }else {
      if(!(v <= e.hb)) {
        if(g != l && e.Fa.u() >= g) {
          k = !0;
          break
        }
        var A = Lb(o);
        if(h != l && e.Ea + A > h) {
          k = !0;
          break
        }
        e.Fa.set(v, [o, A]);
        e.Ea += A
      }
    }
  }
  e.Fa.Oa() && e.Fa.clear();
  e = [j, k];
  c = e[0];
  e = e[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(h = c[g], a.nd && a.nd.call(a.sb, h), a.b == 4 || a.ba) {
        return
      }
    }
  }
  d || Of(a);
  if(!(a.b == 4 || a.ba) && e) {
    Sd(b.a, b.q() + "'s peer caused rwin overflow."), b.e()
  }
}
q.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  this.b != 1 && f(Error("ClientStream.start: " + G(this) + " already started"));
  this.b = 2;
  if(this.K instanceof Hf) {
    var a = qf(this.K.Aa, this), b = qf(this.K.Da, this);
    kd(wf([a, b]), z(this.tf, this))
  }else {
    ag(this)
  }
};
q.tf = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].ec, e = a[1].ec;
  this.Dc.push(a[0]);
  this.Dc.push(a[1]);
  this.K = new If(d, b, e, c);
  ag(this)
};
function ag(a) {
  a.b = 3;
  a.i = Rf(a, !0);
  Qf(a.i, a.Ba, l);
  a.i.ja()
}
q.c = function() {
  this.a.info(G(this) + " in disposeInternal.");
  this.b = 5;
  for(var a = this.Yb.L(), b = 0;b < a.length;b++) {
    a[b].e()
  }
  for(a = 0;a < this.Dc.length;a++) {
    ab(this.Dc[a].Bd, this)
  }
  if(J && this.Zb) {
    O(this.Zb), this.Zb = l
  }
  this.Ie && this.Ie.call(this.sb);
  delete this.Yb;
  delete this.i;
  delete this.z;
  delete this.Ob;
  delete this.sb;
  Mf.d.c.call(this)
};
var Df = 1, Uf = 2, bg = 3;
function Vf(a, b, c, d, e, g) {
  this.F = a;
  this.B = b;
  this.rb = c;
  this.fa = d;
  this.K = e;
  this.A = [];
  this.Wa = g;
  this.vb = !this.eb();
  this.mb = this.fa != Df;
  this.jf = z(this.dg, this)
}
C(Vf, K);
q = Vf.prototype;
q.a = S("cw.net.ClientTransport");
q.o = l;
q.Cd = l;
q.af = l;
q.vc = l;
q.la = !1;
q.zc = !1;
q.ib = l;
q.Uc = 0;
q.kb = -1;
q.od = -1;
q.ef = !1;
q.Gc = !1;
q.uc = 0;
q.Eb = !1;
q.r = function(a) {
  a.push("<ClientTransport #", String(this.rb), ", becomePrimary=", String(this.Wa), ">")
};
q.q = function() {
  return(this.Wa ? "Prim. T#" : "Sec. T#") + this.rb
};
q.Od = function() {
  return!(!this.Eb && this.Uc)
};
q.eb = function() {
  return this.fa == Df || this.fa == Uf
};
function Cf(a, b) {
  gb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  $f(a.B, a, b, !a.mb)
}
function Bf(a, b, c) {
  try {
    var d = pe(b);
    a.Uc += 1;
    Q(a.a, a.q() + " RECV " + G(d));
    var e;
    a.Uc == 1 && !d.k(Jf) && a.eb() ? (Td(a.a, a.q() + " is closing soon because got bad preamble: " + G(d)), e = !0) : e = !1;
    if(e) {
      return!0
    }
    if(d instanceof fe) {
      if(!/^([ -~]*)$/.test(d.qb)) {
        return a.Eb = !0
      }
      a.od += 1;
      c.push([a.od, d.qb])
    }else {
      if(d instanceof V) {
        var g = a.B, h = d.Z;
        g.te = h;
        var j = g.Ba, k = h.Va, c = !1;
        k > j.Xa && (c = !0);
        for(var n = Ob(j).concat(), d = 0;d < n.length;d++) {
          var y = n[d];
          if(y > k) {
            break
          }
          var o = j.H.m[y][1];
          j.H.remove(y);
          j.Ea -= o
        }
        for(d = 0;d < h.Ra.length;d++) {
          var v = h.Ra[d];
          v > j.Xa && (c = !0);
          j.H.T(v) && (o = j.H.m[v][1], j.H.remove(v), j.Ea -= o)
        }
        j.H.Oa() && j.H.clear();
        if(c) {
          return Td(a.a, a.q() + " is closing soon because got bad SackFrame"), a.Eb = !0
        }
      }else {
        if(d instanceof he) {
          a.od = d.Sb - 1
        }else {
          if(d instanceof je) {
            a.B.ue = d.Ib
          }else {
            if(d instanceof le) {
              return R(a.a, a.q() + " is closing soon because got YouCloseItFrame"), !0
            }else {
              if(d instanceof oe) {
                return a.Eb = !0, d.reason == "stream_attach_failure" ? a.uc += 1 : d.reason == "acked_unsent_strings" && (a.uc += 0.5), R(a.a, a.q() + " is closing soon because got " + G(d)), !0
              }else {
                if(!(d instanceof ge)) {
                  if(d instanceof ke) {
                    var A = a.B, Oh = !a.mb;
                    R(A.a, "Stream is now confirmed to exist at server.");
                    A.yd = !0;
                    if(A.rd && !Oh) {
                      A.rd = !1, Of(A)
                    }
                  }else {
                    if(c.length) {
                      Cf(a, c);
                      if(!t(c)) {
                        for(var Vd = c.length - 1;Vd >= 0;Vd--) {
                          delete c[Vd]
                        }
                      }
                      c.length = 0
                    }
                    if(d instanceof me) {
                      var xc = a.B;
                      xc.onreset && xc.onreset.call(xc.sb, d.Nb, d.ub);
                      xc.e();
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
  }catch(Sf) {
    return Sf instanceof T || f(Sf), Td(a.a, a.q() + " is closing soon because got InvalidFrame: " + G(b)), a.Eb = !0
  }
  return!1
}
q.dg = function() {
  Td(this.a, this.q() + " timed out due to lack of connection or no data being received.");
  this.e()
};
function cg(a) {
  if(a.vc != l) {
    a.F.I.clearTimeout(a.vc), a.vc = l
  }
}
function Ef(a, b) {
  cg(a);
  b = Math.round(b);
  a.vc = a.F.I.setTimeout(a.jf, b);
  Q(a.a, a.q() + "'s receive timeout set to " + b + " ms.")
}
function Af(a) {
  a.fa != Df && (a.fa == bg || a.fa == Uf ? Ef(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.fa)))
}
function Pf(a) {
  var b = new de;
  b.rb = a.rb;
  b.Me = 2;
  b.le = 2;
  if(!a.B.yd) {
    b.Qe = !0
  }
  b.Xb = a.B.Xb;
  b.Ad = a.mb;
  if(b.Ad) {
    b.Ee = 4096
  }
  b.Ae = 3E5;
  b.ye = a.mb ? Math.floor(10) : 0;
  b.bf = !1;
  if(a.Wa) {
    b.We = l, b.fd = Math.floor((a.mb ? 358E4 : 25E3) / 1E3)
  }
  b.Z = Qb(a.B.Zc);
  b.qc = a.B.te;
  a.A.push(b);
  a.ib = b.Z
}
q.ja = function() {
  this.la && !this.vb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.zc) {
    R(this.a, this.q() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.la;
    this.la = !0;
    !a && !this.A.length && Pf(this);
    for(a = 0;a < this.A.length;a++) {
      Q(this.a, this.q() + " SEND " + G(this.A[a]))
    }
    if(this.eb()) {
      for(var a = [], b = 0, c = this.A.length;b < c;b++) {
        this.A[b].V(a), a.push("\n")
      }
      this.A = [];
      a = a.join("");
      b = this.Wa ? this.K.Aa : this.K.Da;
      this.o = Ff.Rd(this, this.Wa ? this.K.Le : this.K.Ue);
      this.Cd = this.F.I === dd ? B() : this.F.I.getTime();
      this.o.ed(b, "POST", a);
      Ef(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.mb ? 0 : this.Wa ? 25E3 : 0))
    }else {
      if(this.fa == bg) {
        a = [];
        b = 0;
        for(c = this.A.length;b < c;b++) {
          a.push(this.A[b].R())
        }
        this.A = [];
        this.o ? this.o.Id(a) : (b = this.K, this.o = new Zd(this), this.o.xd = b.vg.Rd(this.o), this.Cd = this.F.I === dd ? B() : this.F.I.getTime(), this.o.Nd(b.host, b.port), this.o.ba || (this.o.Id(a), this.o.ba || Ef(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.fa))
      }
    }
  }
};
function Qf(a, b, c) {
  !a.la && !a.A.length && Pf(a);
  for(var d = Math.max(c, a.kb + 1), e = Ob(b), c = [], g = 0;g < e.length;g++) {
    var h = e[g];
    (d == l || h >= d) && c.push([h, b.H.m[h][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], e = g[0], g = g[1], (a.kb == -1 || a.kb + 1 != e) && a.A.push(new he(e)), a.A.push(new fe(g)), a.kb = e
  }
}
q.c = function() {
  this.a.info(this.q() + " in disposeInternal.");
  Vf.d.c.call(this);
  this.af = this.F.I === dd ? B() : this.F.I.getTime();
  this.A = [];
  cg(this);
  this.o && this.o.e();
  var a = this.B;
  this.B = l;
  Yf(a, this)
};
function Zf(a, b) {
  !a.la && !a.A.length && Pf(a);
  a.A.push(new me(b, !0));
  a.ef = !0
}
function Xf(a, b, c, d) {
  this.F = a;
  this.B = b;
  this.Vd = c;
  this.Qd = d
}
C(Xf, K);
q = Xf.prototype;
q.la = !1;
q.vb = !1;
q.lc = l;
q.ib = l;
q.a = S("cw.net.DoNothingTransport");
function dg(a) {
  a.lc = a.F.I.setTimeout(function() {
    a.lc = l;
    a.Qd--;
    a.Qd ? dg(a) : a.e()
  }, a.Vd)
}
q.ja = function() {
  this.la && !this.vb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.la = !0;
  dg(this)
};
q.r = function(a) {
  a.push("<DoNothingTransport delay=", String(this.Vd), ">")
};
q.eb = p(!1);
q.q = p("Wast. T");
q.Od = p(!1);
q.c = function() {
  this.a.info(this.q() + " in disposeInternal.");
  Xf.d.c.call(this);
  this.lc != l && this.F.I.clearTimeout(this.lc);
  var a = this.B;
  this.B = l;
  Yf(a, this)
};
var eg;
function fg() {
  kb.apply(this)
}
C(fg, kb);
function gg() {
  kb.apply(this)
}
C(gg, kb);
qb(fg, {0:{name:"NewPost", $d:"demosminerva.ljstream_messages.NewPost"}, 1:{name:"title", ab:9, type:String}, 2:{name:"url", ab:9, type:String}, 3:{name:"body", ab:9, type:String}, 4:{name:"num_images", ab:5, type:Number}, 5:{name:"lang", ab:9, type:String}});
qb(gg, {0:{name:"SetPreferences", $d:"demosminerva.ljstream_messages.SetPreferences"}, 1:{name:"include_russian_posts", ab:8, type:Boolean}});
function hg() {
  this.Pe = B()
}
var ig = new hg;
hg.prototype.set = aa("Pe");
hg.prototype.reset = function() {
  this.set(B())
};
hg.prototype.get = m("Pe");
function jg(a) {
  this.pd = a || "";
  this.Yf = ig
}
jg.prototype.Uf = !0;
jg.prototype.Wf = !0;
jg.prototype.Vf = !0;
jg.prototype.Ve = !1;
function kg(a) {
  return a < 10 ? "0" + a : String(a)
}
function lg(a, b) {
  var c = (a.Xe - b) / 1E3, d = c.toFixed(3), e = 0;
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
function mg(a) {
  jg.call(this, a)
}
C(mg, jg);
mg.prototype.Ve = !0;
function ng(a) {
  this.gd = a || 100;
  this.na = []
}
q = ng.prototype;
q.Kb = 0;
q.add = function(a) {
  this.na[this.Kb] = a;
  this.Kb = (this.Kb + 1) % this.gd
};
q.get = function(a) {
  a = og(this, a);
  return this.na[a]
};
q.set = function(a, b) {
  a = og(this, a);
  this.na[a] = b
};
q.u = function() {
  return this.na.length
};
q.Oa = function() {
  return this.na.length == 0
};
q.clear = function() {
  this.Kb = this.na.length = 0
};
q.L = function() {
  for(var a = this.u(), b = this.u(), c = [], a = this.u() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
q.ua = function() {
  for(var a = [], b = this.u(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
q.T = function(a) {
  return a < this.u()
};
q.cc = function(a) {
  for(var b = this.u(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return!0
    }
  }
  return!1
};
function og(a, b) {
  b >= a.na.length && f(Error("Out of bounds exception"));
  return a.na.length < a.gd ? b : (a.Kb + Number(b)) % a.gd
}
;function pg(a, b) {
  this.wa = a || "";
  this.pd = b || "";
  this.lb = [];
  this.wc = new ng(qg);
  this.Pf = z(this.hf, this);
  this.wf = new mg(this.pd);
  this.uf = {};
  if(!0 != this.pe) {
    this.pe = !0;
    var c = Yd(), d = this.Pf;
    if(!c.Fb) {
      c.Fb = []
    }
    c.Fb.push(d)
  }
  this.U = rg(this.wa, "enabled") == "1";
  r.setInterval(z(this.Sf, this), 7500)
}
var qg = 500;
q = pg.prototype;
q.df = "LOGGING";
q.rf = !1;
q.t = l;
q.Gd = !1;
q.pe = !1;
q.Kd = l;
q.bd = B();
q.Na = function() {
  this.U && sg(this)
};
q.isEnabled = m("U");
q.Ub = function(a) {
  if(this.U = a) {
    sg(this), this.t && this.Cc()
  }
  tg(this, "enabled", a ? "1" : "0")
};
function ug(a) {
  return!!a.t && !a.t.closed
}
q.lf = function() {
  this.wc.clear();
  ug(this) && this.Cc()
};
q.hf = function(a) {
  if(!this.uf[a.we]) {
    var b = this.wf, c;
    switch(a.W.value) {
      case Gd.value:
        c = "dbg-sh";
        break;
      case Hd.value:
        c = "dbg-sev";
        break;
      case Id.value:
        c = "dbg-w";
        break;
      case Jd.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.pd, " ");
    if(b.Uf) {
      var e = new Date(a.Xe);
      d.push("[", kg(e.getFullYear() - 2E3) + kg(e.getMonth() + 1) + kg(e.getDate()) + " " + kg(e.getHours()) + ":" + kg(e.getMinutes()) + ":" + kg(e.getSeconds()) + "." + kg(Math.floor(e.getMilliseconds() / 10)), "] ")
    }
    b.Wf && d.push("[", Ea(lg(a, b.Yf.get())), "s] ");
    b.Vf && d.push("[", ya(a.we), "] ");
    d.push('<span class="', c, '">', xa(Ea(ya(a.Ce))));
    b.Ve && a.Sc && d.push("<br>", xa(Ea(a.Rc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.U ? (sg(this), this.wc.add(b), vg(this, b)) : this.wc.add(b);
    this.rf && a.W.value >= Hd.value && this.Ub(!0)
  }
};
function vg(a, b) {
  a.lb.push(b);
  r.clearTimeout(a.Kd);
  B() - a.bd > 750 ? a.Hd() : a.Kd = r.setTimeout(z(a.Hd, a), 250)
}
q.Hd = function() {
  this.bd = B();
  if(ug(this)) {
    var a = this.t.document.body, a = a && a.scrollHeight - (a.scrollTop + a.clientHeight) <= 100;
    this.t.document.write(this.lb.join(""));
    this.lb.length = 0;
    a && this.t.scrollTo(0, 1E6)
  }
};
function wg(a) {
  for(var b = a.wc.L(), c = 0;c < b.length;c++) {
    vg(a, b[c])
  }
}
function sg(a) {
  if(!ug(a) && !a.Gd) {
    var b = rg(a.wa, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), e = Number(b[2]), b = Number(b[3]);
    a.Gd = !0;
    a.t = window.open("", I ? a.wa.replace(/[\s\-\.\,]/g, "_") : a.wa, "width=" + e + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    if(!a.t && !a.Xf) {
      alert("Logger popup was blocked"), a.Xf = !0
    }
    a.Gd = !1;
    a.t && a.Cc()
  }
}
q.ic = p("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
q.Cc = function() {
  ug(this) || (this.t.document.open(), vg(this, "<style>" + this.ic() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.df + "<br><small>Logger: " + this.wa + "</small></div><hr>"), wg(this))
};
function tg(a, b, c) {
  b += a.wa;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(B() + 2592E6)).toUTCString()
}
function rg(a, b, c) {
  var a = b + a, b = String(document.cookie), d = b.indexOf(a + "=");
  return d != -1 ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, c == -1 ? b.length : c))) : c || ""
}
q.Sf = function() {
  ug(this) && tg(this, "dbg", (this.t.screenX || this.t.screenLeft || 0) + "," + (this.t.screenY || this.t.screenTop || 0) + "," + (this.t.outerWidth || 800) + "," + (this.t.outerHeight || 500))
};
function xg(a, b) {
  if(yg) {
    var c = zg(), d;
    for(d in c) {
      var e = d.replace("fancywindow.sel.", ""), e = S(e), g = e.W, h = window.localStorage.getItem(d).toString();
      (!g || g.toString() != h) && e.ob(Qd(h))
    }
  }
  pg.call(this, a, b)
}
C(xg, pg);
var yg;
a: {
  try {
    yg = !!window.localStorage.getItem;
    break a
  }catch(Ag) {
  }
  yg = !1
}
q = xg.prototype;
q.Hd = function() {
  this.bd = B();
  if(ug(this)) {
    for(var a = this.J.h("log"), b = a.scrollHeight - (a.scrollTop + a.offsetHeight) <= 100, c = 0;c < this.lb.length;c++) {
      var d = this.J.s("div", "logmsg");
      d.innerHTML = this.lb[c];
      a.appendChild(d)
    }
    this.lb.length = 0;
    this.Re();
    if(b) {
      a.scrollTop = a.scrollHeight
    }
  }
};
q.Cc = function() {
  if(ug(this)) {
    var a = this.t.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.wa + "</title><style>" + this.ic() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.wa + "</b></p><p>" + this.df + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (I ? a.body : this.t).onresize = z(this.Re, this);
    this.J = new We(a);
    this.J.h("openbutton").onclick = z(this.Nf, this);
    this.J.h("closebutton").onclick = z(this.mf, this);
    this.J.h("clearbutton").onclick = z(this.lf, this);
    this.J.h("exitbutton").onclick = z(this.sf, this);
    wg(this)
  }
};
q.Nf = function() {
  var a = this.J.h("optionsarea");
  a.innerHTML = "";
  for(var b = Bg(), c = this.J, d = 0;d < b.length;d++) {
    var e = S(b[d]), e = c.s("div", {}, Cg(this, "sel" + b[d], e.W ? e.W.name : "INHERIT"), c.s("span", {}, b[d] || "(root)"));
    a.appendChild(e)
  }
  this.J.h("options").style.display = "block";
  return!1
};
function Cg(a, b, c) {
  for(var a = a.J, b = a.s("select", {id:b}), d = 0;d < Od.length;d++) {
    var e = Od[d], g = a.s("option", {}, e.name);
    if(c == e.name) {
      g.selected = !0
    }
    b.appendChild(g)
  }
  b.appendChild(a.s("option", {selected:c == "INHERIT"}, "INHERIT"));
  return b
}
q.mf = function() {
  this.J.h("options").style.display = "none";
  for(var a = Bg(), b = this.J, c = 0;c < a.length;c++) {
    var d = S(a[c]), e = b.h("sel" + a[c]), e = e.options[e.selectedIndex].text;
    e == "INHERIT" ? d.ob(l) : d.ob(Qd(e))
  }
  if(yg) {
    a = Bg();
    b = zg();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], e = S(a[c]).W, d in b ? e ? window.localStorage.getItem(d) != e.name && window.localStorage.setItem(d, e.name) : window.localStorage.removeItem(d) : e && window.localStorage.setItem(d, e.name)
    }
  }
  return!1
};
q.Re = function() {
  var a = this.J, b = a.h("log"), c = a.h("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.Q.body.offsetHeight - c.offsetHeight - (I ? 4 : 0) + "px"
};
q.sf = function() {
  this.Ub(!1);
  this.t && this.t.close()
};
q.ic = function() {
  return xg.d.ic.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function zg() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != l && d.lastIndexOf("fancywindow.sel.", 0) == 0 && (a[d] = !0)
  }
  return a
}
function Bg() {
  var a = Sa(Ud);
  a.sort();
  return a
}
;var Dg = bc ? "MozUserSelect" : J ? "WebkitUserSelect" : l;
function Eg(a) {
  this.je = a;
  this.j = []
}
C(Eg, K);
var Fg = [];
function Gg(a, b, c, d) {
  t(c) || (Fg[0] = c, c = Fg);
  for(var e = 0;e < c.length;e++) {
    a.j.push(N(b, c[e], d || a, !1, a.je || a))
  }
  return a
}
function Hg(a, b, c, d, e, g) {
  if(t(c)) {
    for(var h = 0;h < c.length;h++) {
      Hg(a, b, c[h], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.je || a;
      e = !!e;
      if(b = Xc(b, c, e)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].Qa && b[c].jb == d && b[c].capture == e && b[c].mc == g) {
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
Eg.prototype.qd = function() {
  Wa(this.j, O);
  this.j.length = 0
};
Eg.prototype.c = function() {
  Eg.d.c.call(this);
  this.qd()
};
Eg.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Ig() {
}
da(Ig);
Ig.prototype.Lf = 0;
Ig.bb();
function Jg(a) {
  this.Ia = a || Ve();
  this.Rb = Kg
}
C(Jg, cd);
Jg.prototype.Ef = Ig.bb();
var Kg = l;
function Lg(a, b) {
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
q = Jg.prototype;
q.me = l;
q.G = !1;
q.p = l;
q.Rb = l;
q.Kf = l;
q.v = l;
q.pa = l;
q.wb = l;
q.hg = !1;
q.h = m("p");
function Mg(a) {
  return a.cb || (a.cb = new Eg(a))
}
q.getParent = m("v");
q.td = function(a) {
  this.v && this.v != a && f(Error("Method not supported"));
  Jg.d.td.call(this, a)
};
q.Cb = m("Ia");
q.s = function() {
  this.p = this.Ia.createElement("div")
};
function Ng(a) {
  var b = X("prefs");
  a.G && f(Error("Component already rendered"));
  a.p || a.s();
  b ? b.insertBefore(a.p, l) : a.Ia.Q.body.appendChild(a.p);
  (!a.v || a.v.G) && a.$a()
}
q.$a = function() {
  this.G = !0;
  Og(this, function(a) {
    !a.G && a.h() && a.$a()
  })
};
q.zb = function() {
  Og(this, function(a) {
    a.G && a.zb()
  });
  this.cb && this.cb.qd();
  this.G = !1
};
q.c = function() {
  Jg.d.c.call(this);
  this.G && this.zb();
  this.cb && (this.cb.e(), delete this.cb);
  Og(this, function(a) {
    a.e()
  });
  !this.hg && this.p && ff(this.p);
  this.v = this.Kf = this.p = this.wb = this.pa = l
};
q.pb = function(a) {
  this.G && f(Error("Component already rendered"));
  this.Rb = a
};
function Og(a, b) {
  a.pa && Wa(a.pa, b, i)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = u(a) ? a : a.me || (a.me = ":" + (a.Ef.Lf++).toString(36)), a = this.wb && c ? (c in this.wb ? this.wb[c] : i) || l : l;
    if(c && a) {
      var d = this.wb;
      c in d && delete d[c];
      ab(this.pa, a);
      b && (a.zb(), a.p && ff(a.p));
      c = a;
      c == l && f(Error("Unable to set parent component"));
      c.v = l;
      Jg.d.td.call(c, l)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function Pg() {
}
var Qg;
da(Pg);
q = Pg.prototype;
q.fc = function() {
};
q.s = function(a) {
  var b = a.Cb().s("div", Rg(this, a).join(" "), a.xb);
  this.sd(a, b);
  return b
};
q.yb = function(a, b, c) {
  if(a = a.h ? a.h() : a) {
    if(I && !nc("7")) {
      var d = Sg(Oe(a), b);
      d.push(b);
      na(c ? Pe : Qe, a).apply(l, d)
    }else {
      c ? Pe(a, b) : Qe(a, b)
    }
  }
};
q.ne = function(a) {
  if(a.Rb == l) {
    var b;
    a: {
      b = a.G ? a.p : a.Ia.Q.body;
      var c = Xe(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (b = c.defaultView.getComputedStyle(b, l))) {
        b = b.direction || b.getPropertyValue("direction");
        break a
      }
      b = ""
    }
    a.Rb = "rtl" == (b || ((a.G ? a.p : a.Ia.Q.body).currentStyle ? (a.G ? a.p : a.Ia.Q.body).currentStyle.direction : l) || (a.G ? a.p : a.Ia.Q.body).style.direction)
  }
  a.Rb && this.pb(a.h(), !0);
  a.isEnabled() && this.Vb(a, a.Ua)
};
q.sd = function(a, b) {
  a.isEnabled() || this.P(b, 1, !0);
  a.b & 8 && this.P(b, 8, !0);
  a.O & 16 && this.P(b, 16, !!(a.b & 16));
  a.O & 64 && this.P(b, 64, !!(a.b & 64))
};
q.xc = function(a, b) {
  var c = !b, d = I || ac ? a.getElementsByTagName("*") : l;
  if(Dg) {
    if(c = c ? "none" : "", a.style[Dg] = c, d) {
      for(var e = 0, g;g = d[e];e++) {
        g.style[Dg] = c
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
q.pb = function(a, b) {
  this.yb(a, this.ta() + "-rtl", b)
};
q.qe = function(a) {
  var b;
  return a.O & 32 && (b = a.La()) ? kf(b) : !1
};
q.Vb = function(a, b) {
  var c;
  if(a.O & 32 && (c = a.La())) {
    if(!b && a.b & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.b & 32 && a.ce()
    }
    if(kf(c) != b) {
      b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex"))
    }
  }
};
q.vd = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.N = function(a, b, c) {
  var d = a.h();
  if(d) {
    var e = Tg(this, b);
    e && this.yb(a, e, c);
    this.P(d, b, c)
  }
};
q.P = function(a, b, c) {
  Qg || (Qg = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Qg[b]) && a.setAttribute("aria-" + b, c)
};
q.La = function(a) {
  return a.h()
};
q.ta = p("goog-control");
function Rg(a, b) {
  var c = a.ta(), d = [c], e = a.ta();
  e != c && d.push(e);
  c = b.b;
  for(e = [];c;) {
    var g = c & -c;
    e.push(Tg(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.da) && d.push.apply(d, c);
  I && !nc("7") && d.push.apply(d, Sg(d));
  return d
}
function Sg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Wa([], function(d) {
    Za(d, na($a, a)) && (!b || $a(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Tg(a, b) {
  if(!a.Md) {
    var c = a.ta();
    a.Md = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Md[b]
}
;function Ug(a, b) {
  a || f(Error("Invalid class name " + a));
  w(b) || f(Error("Invalid decorator function " + b))
}
var Vg = {};
function Wg(a, b, c, d, e) {
  if(!I && (!J || !nc("525"))) {
    return!0
  }
  if(ec && e) {
    return Xg(a)
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
  return Xg(a)
}
function Xg(a) {
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
;function Yg(a, b) {
  a && Zg(this, a, b)
}
C(Yg, cd);
q = Yg.prototype;
q.p = l;
q.oc = l;
q.$c = l;
q.pc = l;
q.ya = -1;
q.xa = -1;
var $g = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, ah = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, bh = {61:187, 
59:186}, ch = I || J && nc("525");
q = Yg.prototype;
q.Af = function(a) {
  if(J && (this.ya == 17 && !a.ctrlKey || this.ya == 18 && !a.altKey)) {
    this.xa = this.ya = -1
  }
  ch && !Wg(a.keyCode, this.ya, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.xa = bc && a.keyCode in bh ? bh[a.keyCode] : a.keyCode
};
q.Cf = function() {
  this.xa = this.ya = -1
};
q.handleEvent = function(a) {
  var b = a.ia, c, d;
  I && a.type == "keypress" ? (c = this.xa, d = c != 13 && c != 27 ? b.keyCode : 0) : J && a.type == "keypress" ? (c = this.xa, d = b.charCode >= 0 && b.charCode < 63232 && Xg(c) ? b.charCode : 0) : ac ? (c = this.xa, d = Xg(c) ? b.keyCode : 0) : (c = b.keyCode || this.xa, d = b.charCode || 0, ec && d == 63 && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in $g ? e = $g[c] : c == 25 && a.shiftKey && (e = 9) : g && g in ah && (e = ah[g]);
  a = e == this.ya;
  this.ya = e;
  b = new dh(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.e()
  }
};
q.h = m("p");
function Zg(a, b, c) {
  a.pc && a.detach();
  a.p = b;
  a.oc = N(a.p, "keypress", a, c);
  a.$c = N(a.p, "keydown", a.Af, c, a);
  a.pc = N(a.p, "keyup", a.Cf, c, a)
}
q.detach = function() {
  if(this.oc) {
    O(this.oc), O(this.$c), O(this.pc), this.pc = this.$c = this.oc = l
  }
  this.p = l;
  this.xa = this.ya = -1
};
q.c = function() {
  Yg.d.c.call(this);
  this.detach()
};
function dh(a, b, c, d) {
  d && this.Na(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(dh, wc);
function Y(a, b, c) {
  Jg.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = x(b);
      if(d = Vg[d]) {
        break
      }
      b = b.d ? b.d.constructor : l
    }
    b = d ? w(d.bb) ? d.bb() : new d : l
  }
  this.w = b;
  this.xb = a
}
C(Y, Jg);
q = Y.prototype;
q.xb = l;
q.b = 0;
q.O = 39;
q.Jd = 255;
q.Zf = 0;
q.Ua = !0;
q.da = l;
q.Wc = !0;
q.Ic = !1;
q.La = function() {
  return this.w.La(this)
};
function eh(a, b) {
  if(b) {
    a.da ? $a(a.da, b) || a.da.push(b) : a.da = [b], a.w.yb(a, b, !0)
  }
}
q.yb = function(a, b) {
  if(b) {
    eh(this, a)
  }else {
    if(a && this.da) {
      ab(this.da, a);
      if(this.da.length == 0) {
        this.da = l
      }
      this.w.yb(this, a, !1)
    }
  }
};
q.s = function() {
  var a = this.w.s(this);
  this.p = a;
  var b = this.w.fc();
  if(b) {
    a.setAttribute("role", b), a.ug = b
  }
  this.Ic || this.w.xc(a, !1);
  this.Ua || this.w.vd(a, !1)
};
q.$a = function() {
  Y.d.$a.call(this);
  this.w.ne(this);
  if(this.O & -2 && (this.Wc && fh(this, !0), this.O & 32)) {
    var a = this.La();
    if(a) {
      var b = this.gb || (this.gb = new Yg);
      Zg(b, a);
      Gg(Gg(Gg(Mg(this), b, "key", this.Bf), a, "focus", this.zf), a, "blur", this.ce)
    }
  }
};
function fh(a, b) {
  var c = Mg(a), d = a.h();
  b ? (Gg(Gg(Gg(Gg(c, d, "mouseover", a.he), d, "mousedown", a.fe), d, "mouseup", a.ie), d, "mouseout", a.ge), I && Gg(c, d, "dblclick", a.ee)) : (Hg(Hg(Hg(Hg(c, d, "mouseover", a.he), d, "mousedown", a.fe), d, "mouseup", a.ie), d, "mouseout", a.ge), I && Hg(c, d, "dblclick", a.ee))
}
q.zb = function() {
  Y.d.zb.call(this);
  this.gb && this.gb.detach();
  this.Ua && this.isEnabled() && this.w.Vb(this, !1)
};
q.c = function() {
  Y.d.c.call(this);
  this.gb && (this.gb.e(), delete this.gb);
  delete this.w;
  this.da = this.xb = l
};
function gh(a) {
  a = a.xb;
  if(!a) {
    return""
  }
  if(!u(a)) {
    if(t(a)) {
      a = Xa(a, lf).join("")
    }else {
      if(Te && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        mf(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Te || (a = a.replace(/ +/g, " "));
      a != " " && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
q.pb = function(a) {
  Y.d.pb.call(this, a);
  var b = this.h();
  b && this.w.pb(b, a)
};
q.xc = function(a) {
  this.Ic = a;
  var b = this.h();
  b && this.w.xc(b, a)
};
q.vd = function(a, b) {
  if(b || this.Ua != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.h();
    c && this.w.vd(c, a);
    this.isEnabled() && this.w.Vb(this, a);
    this.Ua = a;
    return!0
  }
  return!1
};
q.isEnabled = function() {
  return!(this.b & 1)
};
q.Ub = function(a) {
  var b = this.getParent();
  if((!b || typeof b.isEnabled != "function" || b.isEnabled()) && hh(this, 1, !a)) {
    a || (this.setActive(!1), ih(this, !1)), this.Ua && this.w.Vb(this, a), this.N(1, !a)
  }
};
function ih(a, b) {
  hh(a, 2, b) && a.N(2, b)
}
q.oe = function() {
  return!!(this.b & 4)
};
q.setActive = function(a) {
  hh(this, 4, a) && this.N(4, a)
};
q.N = function(a, b) {
  if(this.O & a && b != !!(this.b & a)) {
    this.w.N(this, a, b), this.b = b ? this.b | a : this.b & ~a
  }
};
function Z(a, b) {
  return!!(a.Jd & b) && !!(a.O & b)
}
function hh(a, b, c) {
  return!!(a.O & b) && !!(a.b & b) != c && (!(a.Zf & b) || a.dispatchEvent(Lg(b, c))) && !a.ba
}
q.he = function(a) {
  (!a.relatedTarget || !gf(this.h(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Z(this, 2) && ih(this, !0)
};
q.ge = function(a) {
  if((!a.relatedTarget || !gf(this.h(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    Z(this, 4) && this.setActive(!1), Z(this, 2) && ih(this, !1)
  }
};
q.fe = function(a) {
  if(this.isEnabled() && (Z(this, 2) && ih(this, !0), zc(a) && (!J || !ec || !a.ctrlKey))) {
    Z(this, 4) && this.setActive(!0), this.w.qe(this) && this.La().focus()
  }
  !this.Ic && zc(a) && (!J || !ec || !a.ctrlKey) && a.preventDefault()
};
q.ie = function(a) {
  this.isEnabled() && (Z(this, 2) && ih(this, !0), this.oe() && this.Mb(a) && Z(this, 4) && this.setActive(!1))
};
q.ee = function(a) {
  this.isEnabled() && this.Mb(a)
};
q.Mb = function(a) {
  if(Z(this, 16)) {
    var b = !(this.b & 16);
    hh(this, 16, b) && this.N(16, b)
  }
  Z(this, 8) && hh(this, 8, !0) && this.N(8, !0);
  Z(this, 64) && (b = !(this.b & 64), hh(this, 64, b) && this.N(64, b));
  b = new uc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, e = 0;d = c[e];e++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
q.zf = function() {
  Z(this, 32) && hh(this, 32, !0) && this.N(32, !0)
};
q.ce = function() {
  Z(this, 4) && this.setActive(!1);
  Z(this, 32) && hh(this, 32, !1) && this.N(32, !1)
};
q.Bf = function(a) {
  return this.Ua && this.isEnabled() && this.Vc(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
q.Vc = function(a) {
  return a.keyCode == 13 && this.Mb(a)
};
w(Y) || f(Error("Invalid component class " + Y));
w(Pg) || f(Error("Invalid renderer class " + Pg));
var jh = x(Y);
Vg[jh] = Pg;
Ug("goog-control", function() {
  return new Y(l)
});
function kh() {
}
C(kh, Pg);
da(kh);
q = kh.prototype;
q.fc = p("button");
q.P = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : kh.d.P.call(this, a, b, c)
};
q.s = function(a) {
  var b = kh.d.s.call(this, a), c = a.jc();
  c && this.ud(b, c);
  (c = a.kc()) && this.yc(b, c);
  a.O & 16 && this.P(b, 16, !!(a.b & 16));
  return b
};
q.kc = s;
q.yc = s;
q.jc = function(a) {
  return a.title
};
q.ud = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
q.ta = p("goog-button");
function lh() {
}
C(lh, kh);
da(lh);
q = lh.prototype;
q.fc = function() {
};
q.s = function(a) {
  a.G && !1 != a.Wc && fh(a, !1);
  a.Wc = !1;
  a.Jd &= -256;
  a.G && a.b & 32 && f(Error("Component already rendered"));
  a.b & 32 && a.N(32, !1);
  a.O &= -33;
  return a.Cb().s("button", {"class":Rg(this, a).join(" "), disabled:!a.isEnabled(), title:a.jc() || "", value:a.kc() || ""}, gh(a) || "")
};
q.ne = function(a) {
  Gg(Mg(a), a.h(), "click", a.Mb)
};
q.xc = s;
q.pb = s;
q.qe = function(a) {
  return a.isEnabled()
};
q.Vb = s;
q.N = function(a, b, c) {
  lh.d.N.call(this, a, b, c);
  if((a = a.h()) && b == 1) {
    a.disabled = c
  }
};
q.kc = function(a) {
  return a.value
};
q.yc = function(a, b) {
  if(a) {
    a.value = b
  }
};
q.P = s;
function mh(a, b, c) {
  Y.call(this, a, b || lh.bb(), c)
}
C(mh, Y);
q = mh.prototype;
q.kc = m("cf");
q.yc = function(a) {
  this.cf = a;
  this.w.yc(this.h(), a)
};
q.jc = m("Ye");
q.ud = function(a) {
  this.Ye = a;
  this.w.ud(this.h(), a)
};
q.c = function() {
  mh.d.c.call(this);
  delete this.cf;
  delete this.Ye
};
q.$a = function() {
  mh.d.$a.call(this);
  if(this.O & 32) {
    var a = this.La();
    a && Gg(Mg(this), a, "keyup", this.Vc)
  }
};
q.Vc = function(a) {
  return a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup" ? this.Mb(a) : a.keyCode == 32
};
Ug("goog-button", function() {
  return new mh(l)
});
function nh() {
}
C(nh, kh);
da(nh);
nh.prototype.s = function(a) {
  var b = {"class":"goog-inline-block " + Rg(this, a).join(" "), title:a.jc() || ""}, b = a.Cb().s("div", b, oh(this, a.xb, a.Cb()));
  this.sd(a, b);
  return b
};
nh.prototype.fc = p("button");
nh.prototype.sd = function(a, b) {
  a.isEnabled() || this.P(b, 1, !0);
  a.b & 8 && this.P(b, 8, !0);
  a.O & 16 && this.P(b, 16, !0);
  a.b & 64 && this.P(b, 64, !0)
};
function oh(a, b, c) {
  return c.s("div", "goog-inline-block " + (a.ta() + "-outer-box"), c.s("div", "goog-inline-block " + (a.ta() + "-inner-box"), b))
}
nh.prototype.ta = p("goog-custom-button");
function ph(a, b, c) {
  mh.call(this, a, b || nh.bb(), c)
}
C(ph, mh);
Ug("goog-custom-button", function() {
  return new ph(l)
});
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
function qh() {
  if(bc) {
    this.Ga = {}, this.Fc = {}, this.Ac = []
  }
}
qh.prototype.a = S("goog.net.xhrMonitor");
qh.prototype.U = bc;
qh.prototype.Ub = function(a) {
  this.U = bc && a
};
function rh(a) {
  var b = sh;
  if(b.U) {
    var c = u(a) ? a : ia(a) ? x(a) : "";
    R(b.a, "Pushing context: " + a + " (" + c + ")");
    b.Ac.push(c)
  }
}
function th() {
  var a = sh;
  if(a.U) {
    var b = a.Ac.pop();
    R(a.a, "Popping context: " + b);
    uh(a, b)
  }
}
function vh(a) {
  var b = sh;
  if(b.U) {
    a = x(a);
    Q(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.Ac.length;c++) {
      var d = b.Ac[c];
      wh(b.Ga, d, a);
      wh(b.Fc, a, d)
    }
  }
}
function uh(a, b) {
  var c = a.Fc[b], d = a.Ga[b];
  c && d && (R(a.a, "Updating dependent contexts"), Wa(c, function(a) {
    Wa(d, function(b) {
      wh(this.Ga, a, b);
      wh(this.Fc, b, a)
    }, this)
  }, a))
}
function wh(a, b, c) {
  a[b] || (a[b] = []);
  $a(a[b], c) || a[b].push(c)
}
var sh = new qh;
function xh() {
}
xh.prototype.$b = l;
var yh;
function zh() {
}
C(zh, xh);
function Ah(a) {
  return(a = Bh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Ch(a) {
  var b = {};
  Bh(a) && (b[0] = !0, b[1] = !0);
  return b
}
zh.prototype.Xc = l;
function Bh(a) {
  if(!a.Xc && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Xc = d
      }catch(e) {
      }
    }
    f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Xc
}
yh = new zh;
function Dh(a) {
  this.headers = new H;
  this.tb = a || l
}
C(Dh, cd);
Dh.prototype.a = S("goog.net.XhrIo");
var Eh = /^https?:?$/i;
q = Dh.prototype;
q.ma = !1;
q.g = l;
q.Ec = l;
q.Jb = "";
q.se = "";
q.Gb = 0;
q.Hb = "";
q.Pc = !1;
q.nc = !1;
q.Yc = !1;
q.Ma = !1;
q.Bc = 0;
q.Sa = l;
q.Se = "";
q.ig = !1;
q.send = function(a, b, c, d) {
  this.g && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Jb = a;
  this.Hb = "";
  this.Gb = 0;
  this.se = b;
  this.Pc = !1;
  this.ma = !0;
  this.g = this.tb ? Ah(this.tb) : Ah(yh);
  this.Ec = this.tb ? this.tb.$b || (this.tb.$b = Ch(this.tb)) : yh.$b || (yh.$b = Ch(yh));
  vh(this.g);
  this.g.onreadystatechange = z(this.He, this);
  try {
    Q(this.a, Fh(this, "Opening Xhr")), this.Yc = !0, this.g.open(b, a, !0), this.Yc = !1
  }catch(e) {
    Q(this.a, Fh(this, "Error opening Xhr: " + e.message));
    Gh(this, e);
    return
  }
  var a = c || "", g = this.headers.D();
  d && Fb(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.T("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Fb(g, function(a, b) {
    this.g.setRequestHeader(b, a)
  }, this);
  if(this.Se) {
    this.g.responseType = this.Se
  }
  if("withCredentials" in this.g) {
    this.g.withCredentials = this.ig
  }
  try {
    if(this.Sa) {
      dd.clearTimeout(this.Sa), this.Sa = l
    }
    if(this.Bc > 0) {
      Q(this.a, Fh(this, "Will abort after " + this.Bc + "ms if incomplete")), this.Sa = dd.setTimeout(z(this.eg, this), this.Bc)
    }
    Q(this.a, Fh(this, "Sending request"));
    this.nc = !0;
    this.g.send(a);
    this.nc = !1
  }catch(h) {
    Q(this.a, Fh(this, "Send error: " + h.message)), Gh(this, h)
  }
};
q.dispatchEvent = function(a) {
  if(this.g) {
    rh(this.g);
    try {
      return Dh.d.dispatchEvent.call(this, a)
    }finally {
      th()
    }
  }else {
    return Dh.d.dispatchEvent.call(this, a)
  }
};
q.eg = function() {
  if(typeof ba != "undefined" && this.g) {
    this.Hb = "Timed out after " + this.Bc + "ms, aborting", this.Gb = 8, Q(this.a, Fh(this, this.Hb)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function Gh(a, b) {
  a.ma = !1;
  if(a.g) {
    a.Ma = !0, a.g.abort(), a.Ma = !1
  }
  a.Hb = b;
  a.Gb = 5;
  Hh(a);
  Ih(a)
}
function Hh(a) {
  if(!a.Pc) {
    a.Pc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
q.abort = function(a) {
  if(this.g && this.ma) {
    Q(this.a, Fh(this, "Aborting")), this.ma = !1, this.Ma = !0, this.g.abort(), this.Ma = !1, this.Gb = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Ih(this)
  }
};
q.c = function() {
  if(this.g) {
    if(this.ma) {
      this.ma = !1, this.Ma = !0, this.g.abort(), this.Ma = !1
    }
    Ih(this, !0)
  }
  Dh.d.c.call(this)
};
q.He = function() {
  !this.Yc && !this.nc && !this.Ma ? this.Mf() : Jh(this)
};
q.Mf = function() {
  Jh(this)
};
function Jh(a) {
  if(a.ma && typeof ba != "undefined") {
    if(a.Ec[1] && a.va() == 4 && Kh(a) == 2) {
      Q(a.a, Fh(a, "Local request error detected and ignored"))
    }else {
      if(a.nc && a.va() == 4) {
        dd.setTimeout(z(a.He, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.va() == 4) {
          Q(a.a, Fh(a, "Request complete"));
          a.ma = !1;
          var b;
          a: {
            switch(Kh(a)) {
              case 0:
                b = u(a.Jb) ? a.Jb.match(qe)[1] || l : a.Jb.$;
                b = !(b ? Eh.test(b) : self.location ? Eh.test(self.location.protocol) : 1);
                break a;
              case 200:
              ;
              case 201:
              ;
              case 202:
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
            a.Gb = 6;
            var c;
            try {
              c = a.va() > 2 ? a.g.statusText : ""
            }catch(d) {
              Q(a.a, "Can not get status: " + d.message), c = ""
            }
            a.Hb = c + " [" + Kh(a) + "]";
            Hh(a)
          }
          Ih(a)
        }
      }
    }
  }
}
function Ih(a, b) {
  if(a.g) {
    var c = a.g, d = a.Ec[0] ? s : l;
    a.g = l;
    a.Ec = l;
    if(a.Sa) {
      dd.clearTimeout(a.Sa), a.Sa = l
    }
    b || (rh(c), a.dispatchEvent("ready"), th());
    var e = sh;
    if(e.U) {
      var g = x(c);
      Q(e.a, "Closing XHR : " + g);
      delete e.Fc[g];
      for(var h in e.Ga) {
        ab(e.Ga[h], g), e.Ga[h].length == 0 && delete e.Ga[h]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(j) {
      Sd(a.a, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
q.oe = function() {
  return!!this.g
};
q.va = function() {
  return this.g ? this.g.readyState : 0
};
function Kh(a) {
  try {
    return a.va() > 2 ? a.g.status : -1
  }catch(b) {
    return Td(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.g && this.va() == 4 ? this.g.getResponseHeader(a) : i
};
function Fh(a, b) {
  return b + " [" + a.se + " " + a.Jb + " " + Kh(a) + "]"
}
;var Lh = !(I || J && !nc("420+"));
function Mh(a, b) {
  this.Ze = a;
  this.Y = b
}
C(Mh, K);
q = Mh.prototype;
q.o = l;
q.Ca = -1;
q.be = !1;
q.ke = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Nh(a) {
  var b = yf(a.Td), c = b[0], b = b[1], d = r.parent;
  d ? (d.__XHRMaster_onframes(a.Y, c, b), b != 1 && a.e()) : a.e()
}
q.Df = function() {
  Nh(this);
  if(!this.ba) {
    var a = r.parent;
    a && a.__XHRMaster_oncomplete(this.Y);
    this.e()
  }
};
q.Qf = function() {
  var a = r.parent;
  if(a) {
    this.Ca = this.o.va();
    if(this.Ca >= 2 && !this.be) {
      for(var b = new H, c = this.ke.length;c--;) {
        var d = this.ke[c];
        try {
          b.set(d, this.o.g.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.u() && (this.be = !0, a.__XHRMaster_ongotheaders(this.Y, Kb(b)), this.ba)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.Y, this.Ca);
    Lh && this.Ca == 3 && Nh(this)
  }else {
    this.e()
  }
};
q.ed = function(a, b, c) {
  this.o = new Dh;
  N(this.o, "readystatechange", z(this.Qf, this));
  N(this.o, "complete", z(this.Df, this));
  this.o.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.Td = new xf(this.o.g, 1048576)
};
q.c = function() {
  Mh.d.c.call(this);
  delete this.Td;
  this.o && this.o.e();
  delete this.Ze.Wb[this.Y];
  delete this.Ze
};
function Ph() {
  this.Wb = {}
}
C(Ph, K);
Ph.prototype.Hf = function(a, b, c, d) {
  var e = new Mh(this, a);
  this.Wb[a] = e;
  e.ed(b, c, d)
};
Ph.prototype.qf = function(a) {
  (a = this.Wb[a]) && a.e()
};
Ph.prototype.c = function() {
  Ph.d.c.call(this);
  for(var a = Ra(this.Wb);a.length;) {
    a.pop().e()
  }
  delete this.Wb
};
var Qh = new Ph;
r.__XHRSlave_makeRequest = z(Qh.Hf, Qh);
r.__XHRSlave_dispose = z(Qh.qf, Qh);
function Rh() {
}
Rh.prototype.ae = function() {
  return Boolean(Number((new W(document.location)).M.get("httpStreaming", "0"))) ? 2 : 1
};
function Sh() {
  var a = new W(document.location), b = r.__demo_shared_domain, a = a.D();
  ue(a, "_____random_____." + b);
  we(a, "/httpface/");
  xe(a, "", i);
  b = new Hf(a.toString().replace("_____random_____", "%random%"));
  return nd(b)
}
;var Th = S("ljstream.logger");
window.onerror = function(a, b, c) {
  Sd(Th, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Uh() {
  this.Je = new tb
}
Uh.prototype.bg = function(a, b) {
  Th.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  Vh("Disconnected from server.  Try reloading this page.");
  $ = l
};
function Wh(a) {
  Th.info("Sending preferences to server");
  var b;
  b = new gg;
  b.n[1] = X("include_russian_posts").checked;
  b.Ha && (b.Ha[1] = !0);
  b = a.Je.Tb(b);
  Tf(a.B, [(new wb).Tb([2, b])])
}
Uh.prototype.cg = function(a) {
  var a = vb(a), b = a[1];
  if(a[0] == 1) {
    var c = this.Je.Oc(fg.Bb(), b), a = mb(c, 1), b = mb(c, 2), c = mb(c, 3);
    (a = ua(a)) || (a = "[No title]");
    var d = sa(ya(c)), e = document, c = e.createElement("div");
    I ? (c.innerHTML = "<br>" + d, c.removeChild(c.firstChild)) : c.innerHTML = d;
    if(c.childNodes.length == 1) {
      c = c.removeChild(c.firstChild)
    }else {
      for(d = e.createDocumentFragment();c.firstChild;) {
        d.appendChild(c.firstChild)
      }
      c = d
    }
    a = bf("span", {}, bf("a", {href:b, "class":"ljpost-title-link"}, a), bf("span", {}, "\u00a0"), c);
    Xh(a)
  }
};
Uh.prototype.reset = function(a) {
  Th.info("resetting with reason: " + a);
  this.B.reset(a)
};
var $ = l, Yh = new od(r.window);
function Vh(a) {
  a = bf("span", {"class":"important-message"}, a);
  Xh(a)
}
function Zh() {
  $ && ($.reset("idle timeout fired"), $ = l, Vh("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var $h = l;
function ai() {
  $h != l && Yh.I.clearTimeout($h);
  $ && ($h = Yh.I.setTimeout(Zh, 6E5))
}
N(window, ["click", "focus", "keydown", "keypress"], ai, !0);
var af = new We, bi = 0;
function Xh(a) {
  a = bf("div", {"class":"row-" + (bi % 2 == 0 ? "even" : "odd")}, bf("nobr", {}, a));
  X("ljstream-container-inner").appendChild(a);
  bi += 1;
  var b;
  if(b = eg) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !J && d.compatMode == "CSS1Compat" ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new Ue(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = $e().height;
    b = !(a + b <= c + d)
  }
  if(b) {
    a = $e().height, window.scrollBy(0, Math.round(a / 2) + 80)
  }
}
function ci() {
  var a = new Rh;
  $ = new Uh;
  ai();
  kd(Sh(), function(b) {
    $ || f(Error("lastProto falsy?"));
    var b = new Mf(b, a, Yh), c = $;
    b.nd = z(c.cg, c);
    b.onreset = z(c.bg, c);
    $.B = b;
    c = $;
    Tf(c.B, ["subprotocol:ljstream"]);
    Wh(c);
    b.start();
    return l
  })
}
function di() {
  N(r, "load", function() {
    window.scrollTo(0, 0)
  });
  N(X("include_russian_posts"), "click", function() {
    Wh($)
  });
  eg = !0;
  N(X("automatic_scroll"), "click", function(a) {
    eg = a.target.checked
  });
  var a = new ph("Clear posts");
  eh(a, "clear-posts-button");
  Ng(a);
  N(a, "action", function() {
    X("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = X("ljstream-container");
  a.style.marginTop = X("demo-header").offsetHeight + "px";
  X("demo-header").style.width = "9000px";
  var b = bf("div", {id:"ljstream-container-inner"});
  a.appendChild(b)
}
function ei() {
  Yd().ob(Nd);
  if((new W(document.location)).M.get("logging") == "1") {
    var a = new xg("main");
    a.Ub(!0);
    a.Na()
  }
  Th.info("Logger works.");
  di();
  ci()
}
var fi = "__ljstream_init".split("."), gi = r;
!(fi[0] in gi) && gi.execScript && gi.execScript("var " + fi[0]);
for(var hi;fi.length && (hi = fi.shift());) {
  !fi.length && fa(ei) ? gi[hi] = ei : gi = gi[hi] ? gi[hi] : gi[hi] = {}
}
;})();
