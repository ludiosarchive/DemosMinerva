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
    return a.Ef || (a.Ef = new a)
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
}, Ne:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
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
        b.Ne && (e = e.replace(b.Ne, function(a) {
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
  this.rg = a
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
  this.fb = !!c.sg;
  this.pg = !!c.required;
  this.Ab = c.ab;
  this.Ce = c.type;
  this.Vd = !1;
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
      this.Vd = !0
  }
  this.ng = c.defaultValue
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
  this.Ae = a;
  this.hd = b.name || l;
  this.og = b.Zd || l;
  this.mg = b.lg;
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
  this.o = {};
  this.Za = this.constructor.Za;
  var a = this.Za.ra, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.ra = b;
  this.Ha = this.cd = l
}
function lb(a, b) {
  for(var c in a.o) {
    a.ra[c] || b.call(a, Number(c), a.o[c])
  }
}
q = kb.prototype;
q.Bb = m("Za");
q.get = function(a, b) {
  return mb(this, a.C, b)
};
q.set = function(a, b) {
  var c = a.C;
  this.o[c] = b;
  this.Ha && (this.Ha[c] = !0)
};
q.add = function(a, b) {
  var c = a.C;
  this.o[c] || (this.o[c] = []);
  this.o[c].push(b)
};
q.clear = function(a) {
  delete this.o[a.C]
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
      var e = Pa(d), g = d.C, h = this.o[g], g = a.o[g];
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
    delete a.o[d.C];
    if(nb(this, d.C)) {
      var e = Pa(d);
      if(d.fb) {
        var g;
        g = d.C;
        ob(this, this.ra[g]);
        g = this.o[g] || [];
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
  return b in a.o && fa(a.o[b])
}
function ob(a, b) {
  if(a.cd) {
    var c = b.C;
    if(!(c in a.Ha)) {
      var d = a.o, e;
      e = a.cd;
      var g = a.o[c];
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
  return d.fb ? (c = c || 0, c >= 0 && pb(a, b), a.o[b][c]) : (t(a.o[b]), b in a.o ? a.o[b] : l)
}
function pb(a, b) {
  return a.ra[b].fb ? (nb(a, b) && t(a.o[b]), nb(a, b) ? a.o[b].length : 0) : nb(a, b) ? 1 : 0
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
  new a.Ae;
  f(Error("Unimplemented"))
};
rb.prototype.gc = function(a, b) {
  if(Pa(a)) {
    return this.Oc(a.Ce.Za, b)
  }
  if(!a.Vd) {
    return b
  }
  var c = a.Ce;
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
  var c = new a.Ae;
  c.cd = this;
  c.o = b;
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
          if(ub(a.ff)) {
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
q.Ed = 0;
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
q.S = function(a) {
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
  this.Ed = this.f = this.j.length = 0
};
q.remove = function(a) {
  return Ib(this.m, a) ? (delete this.m[a], this.f--, this.Ed++, this.j.length > 2 * this.f && Hb(this), !0) : !1
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
  Ib(this.m, a) || (this.f++, this.j.push(a), this.Ed++);
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
K.prototype.aa = !1;
K.prototype.e = function() {
  if(!this.aa) {
    this.aa = !0, this.b()
  }
};
K.prototype.b = function() {
  this.of && tc.apply(l, this.of)
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
q.b = function() {
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
function xc(a, b) {
  a && this.Na(a, b)
}
C(xc, uc);
var yc = [1, 4, 2];
q = xc.prototype;
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
q.Nf = !1;
q.ha = l;
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
  this.Nf = ec ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ha = a;
  delete this.Qb;
  delete this.Pa
};
function zc(a) {
  return rc ? a.ha.button == 0 : a.type == "click" ? !0 : !!(a.ha.button & yc[0])
}
q.stopPropagation = function() {
  xc.d.stopPropagation.call(this);
  this.ha.stopPropagation ? this.ha.stopPropagation() : this.ha.cancelBubble = !0
};
q.preventDefault = function() {
  xc.d.preventDefault.call(this);
  var a = this.ha;
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
  xc.d.b.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ha = l
};
function Ac() {
}
var Bc = 0;
q = Ac.prototype;
q.key = 0;
q.Qa = !1;
q.Lc = !1;
q.Na = function(a, b, c, d, e, g) {
  w(a) ? this.qe = !0 : a && a.handleEvent && w(a.handleEvent) ? this.qe = !1 : f(Error("Invalid listener argument"));
  this.jb = a;
  this.Me = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.mc = g;
  this.Lc = !1;
  this.key = ++Bc;
  this.Qa = !1
};
q.handleEvent = function(a) {
  return this.qe ? this.jb.call(this.mc || this.src, a) : this.jb.handleEvent.call(this.jb, a)
};
var Cc, Dc = (Cc = "ScriptEngine" in r && r.ScriptEngine() == "JScript") ? r.ScriptEngineMajorVersion() + "." + r.ScriptEngineMinorVersion() + "." + r.ScriptEngineBuildVersion() : "0";
function L(a, b) {
  this.we = b;
  this.Ka = [];
  a > this.we && f(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.Ka.push(this.fa ? this.fa() : {})
  }
}
C(L, K);
L.prototype.fa = l;
L.prototype.Wd = l;
L.prototype.getObject = function() {
  return this.Ka.length ? this.Ka.pop() : this.fa ? this.fa() : {}
};
function Ec(a, b) {
  a.Ka.length < a.we ? a.Ka.push(b) : Fc(a, b)
}
function Fc(a, b) {
  if(a.Wd) {
    a.Wd(b)
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
L.prototype.b = function() {
  L.d.b.call(this);
  for(var a = this.Ka;a.length;) {
    Fc(this, a.pop())
  }
  delete this.Ka
};
var Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc;
(function() {
  function a() {
    return{f:0, W:0}
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
    return new xc
  }
  var g = Cc && !(Fa(Dc, "5.7") >= 0), h;
  Lc = function(a) {
    h = a
  };
  if(g) {
    Gc = function() {
      return j.getObject()
    };
    Hc = function(a) {
      Ec(j, a)
    };
    Ic = function() {
      return k.getObject()
    };
    Jc = function(a) {
      Ec(k, a)
    };
    Kc = function() {
      return n.getObject()
    };
    Mc = function() {
      Ec(n, c())
    };
    Nc = function() {
      return y.getObject()
    };
    Oc = function(a) {
      Ec(y, a)
    };
    Pc = function() {
      return o.getObject()
    };
    Qc = function(a) {
      Ec(o, a)
    };
    var j = new L(0, 600);
    j.fa = a;
    var k = new L(0, 600);
    k.fa = b;
    var n = new L(0, 600);
    n.fa = c;
    var y = new L(0, 600);
    y.fa = d;
    var o = new L(0, 600);
    o.fa = e
  }else {
    Gc = a, Hc = s, Ic = b, Jc = s, Kc = c, Mc = s, Nc = d, Oc = s, Pc = e, Qc = s
  }
})();
var Rc = {}, M = {}, Sc = {}, Tc = {};
function N(a, b, c, d, e) {
  if(b) {
    if(t(b)) {
      for(var g = 0;g < b.length;g++) {
        N(a, b[g], c, d, e)
      }
      return l
    }else {
      var d = !!d, h = M;
      b in h || (h[b] = Gc());
      h = h[b];
      d in h || (h[d] = Gc(), h.f++);
      var h = h[d], j = x(a), k;
      h.W++;
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
        k = h[j] = Ic(), h.f++
      }
      g = Kc();
      g.src = a;
      h = Nc();
      h.Na(c, g, a, b, d, e);
      c = h.key;
      g.key = c;
      k.push(h);
      Rc[c] = h;
      Sc[j] || (Sc[j] = Ic());
      Sc[j].push(h);
      a.addEventListener ? (a == r || !a.Rd) && a.addEventListener(b, g, d) : a.attachEvent(b in Tc ? Tc[b] : Tc[b] = "on" + b, g);
      return c
    }
  }else {
    f(Error("Invalid event type"))
  }
}
function Uc(a, b, c, d, e) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      Uc(a, b[g], c, d, e)
    }
    return l
  }
  a = N(a, b, c, d, e);
  Rc[a].Lc = !0;
  return a
}
function Vc(a, b, c, d, e) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      Vc(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = Wc(a, b, d)) {
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
  if(!Rc[a]) {
    return!1
  }
  var b = Rc[a];
  if(b.Qa) {
    return!1
  }
  var c = b.src, d = b.type, e = b.Me, g = b.capture;
  c.removeEventListener ? (c == r || !c.Rd) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in Tc ? Tc[d] : Tc[d] = "on" + d, e);
  c = x(c);
  e = M[d][g][c];
  if(Sc[c]) {
    var h = Sc[c];
    ab(h, b);
    h.length == 0 && delete Sc[c]
  }
  b.Qa = !0;
  e.Ee = !0;
  Xc(d, g, c, e);
  delete Rc[a];
  return!0
}
function Xc(a, b, c, d) {
  if(!d.rc && d.Ee) {
    for(var e = 0, g = 0;e < d.length;e++) {
      if(d[e].Qa) {
        var h = d[e].Me;
        h.src = l;
        Mc(h);
        Oc(d[e])
      }else {
        e != g && (d[g] = d[e]), g++
      }
    }
    d.length = g;
    d.Ee = !1;
    g == 0 && (Jc(d), delete M[a][b][c], M[a][b].f--, M[a][b].f == 0 && (Hc(M[a][b]), delete M[a][b], M[a].f--), M[a].f == 0 && (Hc(M[a]), delete M[a]))
  }
}
function Yc(a) {
  var b, c = 0, d = b == l;
  b = !!b;
  if(a == l) {
    Qa(Sc, function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          O(g.key), c++
        }
      }
    })
  }else {
    if(a = x(a), Sc[a]) {
      for(var a = Sc[a], e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          O(g.key), c++
        }
      }
    }
  }
}
function Wc(a, b, c) {
  var d = M;
  return b in d && (d = d[b], c in d && (d = d[c], a = x(a), d[a])) ? d[a] : l
}
function Zc(a, b, c, d, e) {
  var g = 1, b = x(b);
  if(a[b]) {
    a.W--;
    a = a[b];
    a.rc ? a.rc++ : a.rc = 1;
    try {
      for(var h = a.length, j = 0;j < h;j++) {
        var k = a[j];
        k && !k.Qa && (g &= $c(k, e) !== !1)
      }
    }finally {
      a.rc--, Xc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function $c(a, b) {
  var c = a.handleEvent(b);
  a.Lc && O(a.key);
  return c
}
Lc(function(a, b) {
  if(!Rc[a]) {
    return!0
  }
  var c = Rc[a], d = c.type, e = M;
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
    n = Pc();
    n.Na(g, this);
    g = !0;
    try {
      if(j) {
        for(var o = Ic(), v = n.currentTarget;v;v = v.parentNode) {
          o.push(v)
        }
        h = e[!0];
        h.W = h.f;
        for(var A = o.length - 1;!n.Pa && A >= 0 && h.W;A--) {
          n.currentTarget = o[A], g &= Zc(h, o[A], d, !0, n)
        }
        if(k) {
          h = e[!1];
          h.W = h.f;
          for(A = 0;!n.Pa && A < o.length && h.W;A++) {
            n.currentTarget = o[A], g &= Zc(h, o[A], d, !1, n)
          }
        }
      }else {
        g = $c(c, n)
      }
    }finally {
      if(o) {
        o.length = 0, Jc(o)
      }
      n.e();
      Qc(n)
    }
    return g
  }
  d = new xc(b, this);
  try {
    g = $c(c, d)
  }finally {
    d.e()
  }
  return g
});
var ad = 0;
function bd() {
}
C(bd, K);
q = bd.prototype;
q.Rd = !0;
q.tc = l;
q.sd = aa("tc");
q.addEventListener = function(a, b, c, d) {
  N(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Vc(this, a, b, c, d)
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
      g.W = g.f;
      for(var h = e.length - 1;!a.Pa && h >= 0 && g.W;h--) {
        a.currentTarget = e[h], d &= Zc(g, e[h], a.type, !0, a) && a.Qb != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.W = g.f, b) {
        for(h = 0;!a.Pa && h < e.length && g.W;h++) {
          a.currentTarget = e[h], d &= Zc(g, e[h], a.type, !1, a) && a.Qb != !1
        }
      }else {
        for(e = this;!a.Pa && e && g.W;e = e.tc) {
          a.currentTarget = e, d &= Zc(g, e, a.type, !1, a) && a.Qb != !1
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
  bd.d.b.call(this);
  Yc(this);
  this.tc = l
};
var cd = r.window;
ad++;
ad++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function dd(a, b) {
  this.ac = [];
  this.Kd = a;
  this.Td = b || l
}
q = dd.prototype;
q.sa = !1;
q.Db = !1;
q.Lb = 0;
q.vd = !1;
q.jf = !1;
q.Jc = 0;
q.cancel = function(a) {
  if(this.sa) {
    this.Pb instanceof dd && this.Pb.cancel()
  }else {
    if(this.v) {
      var b = this.v;
      delete this.v;
      a ? b.cancel(a) : (b.Jc--, b.Jc <= 0 && b.cancel())
    }
    this.Kd ? this.Kd.call(this.Td, this) : this.vd = !0;
    this.sa || this.dc(new ed(this))
  }
};
q.Od = function(a, b) {
  fd(this, a, b);
  this.Lb--;
  this.Lb == 0 && this.sa && gd(this)
};
function fd(a, b, c) {
  a.sa = !0;
  a.Pb = c;
  a.Db = !b;
  gd(a)
}
function hd(a) {
  if(a.sa) {
    a.vd || f(new id(a)), a.vd = !1
  }
}
q.oa = function(a) {
  hd(this);
  fd(this, !0, a)
};
q.dc = function(a) {
  hd(this);
  fd(this, !1, a)
};
function jd(a, b) {
  kd(a, b, l, i)
}
function kd(a, b, c, d) {
  a.ac.push([b, c, d]);
  a.sa && gd(a)
}
function ld(a) {
  return Ya(a.ac, function(a) {
    return w(a[1])
  })
}
function gd(a) {
  a.Cd && a.sa && ld(a) && (r.clearTimeout(a.Cd), delete a.Cd);
  a.v && (a.v.Jc--, delete a.v);
  for(var b = a.Pb, c = !1, d = !1;a.ac.length && a.Lb == 0;) {
    var e = a.ac.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.Db ? h : g) {
      try {
        var j = g.call(e || a.Td, b);
        if(fa(j)) {
          a.Db = a.Db && (j == b || j instanceof Error), a.Pb = b = j
        }
        b instanceof dd && (d = !0, a.Lb++)
      }catch(k) {
        b = k, a.Db = !0, ld(a) || (c = !0)
      }
    }
  }
  a.Pb = b;
  if(d && a.Lb) {
    kd(b, z(a.Od, a, !0), z(a.Od, a, !1)), b.jf = !0
  }
  if(c) {
    a.Cd = r.setTimeout(function() {
      fa(b.message) && b.stack && (b.message += "\n" + b.stack);
      f(b)
    }, 0)
  }
}
function md(a) {
  var b = new dd;
  b.oa(a);
  return b
}
function id(a) {
  D.call(this);
  this.nf = a
}
C(id, D);
id.prototype.message = "Already called";
function ed(a) {
  D.call(this);
  this.nf = a
}
C(ed, D);
ed.prototype.message = "Deferred was cancelled";
function nd(a) {
  this.I = a;
  this.Qc = [];
  this.Xd = [];
  this.kg = z(this.fg, this)
}
nd.prototype.eg = l;
nd.prototype.fg = function() {
  this.eg = l;
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
    a = this.Xd;
    this.Xd = [];
    for(b = 0;b < a.length;b++) {
      a[b].oa(l)
    }
  }
};
var od = new nd(r.window);
function pd() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ B()).toString(36)
}
function qd(a) {
  return a.substr(0, a.length - 1)
}
var rd = /^(0|[1-9]\d*)$/, sd = /^(0|\-?[1-9]\d*)$/;
function td(a) {
  var b = ud;
  return rd.test(a) && (a = parseInt(a, 10), a <= b) ? a : l
}
;function vd(a) {
  this.m = new H;
  a && this.Hc(a)
}
function wd(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + x(a) : b.substr(0, 1) + a
}
q = vd.prototype;
q.u = function() {
  return this.m.u()
};
q.add = function(a) {
  this.m.set(wd(a), a)
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
  return this.m.remove(wd(a))
};
q.clear = function() {
  this.m.clear()
};
q.Oa = function() {
  return this.m.Oa()
};
q.contains = function(a) {
  return this.m.S(wd(a))
};
q.L = function() {
  return this.m.L()
};
q.D = function() {
  return new vd(this)
};
q.k = function(a) {
  return this.u() == Cb(a) && xd(this, a)
};
function xd(a, b) {
  var c = Cb(b);
  if(a.u() > c) {
    return!1
  }
  !(b instanceof vd) && c > 5 && (b = new vd(b));
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
;function yd(a) {
  return zd(a || arguments.callee.caller, [])
}
function zd(a, b) {
  var c = [];
  if($a(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(Ad(a) + "(");
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
            g = (g = Ad(g)) ? g : "[fn]";
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
        c.push(zd(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Ad(a) {
  if(Bd[a]) {
    return Bd[a]
  }
  a = String(a);
  if(!Bd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Bd[a] = b ? b[1] : "[Anonymous]"
  }
  return Bd[a]
}
var Bd = {};
function Cd(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Cd.prototype.Sf = 0;
Cd.prototype.Sc = l;
Cd.prototype.Rc = l;
var Dd = 0;
Cd.prototype.reset = function(a, b, c, d, e) {
  this.Sf = typeof e == "number" ? e : Dd++;
  this.We = d || B();
  this.V = a;
  this.Be = b;
  this.ve = c;
  delete this.Sc;
  delete this.Rc
};
Cd.prototype.ob = aa("V");
function Ed(a) {
  this.hd = a
}
Ed.prototype.v = l;
Ed.prototype.V = l;
Ed.prototype.pa = l;
Ed.prototype.Fb = l;
function P(a, b) {
  this.name = a;
  this.value = b
}
P.prototype.toString = m("name");
var Fd = new P("SHOUT", 1200), Gd = new P("SEVERE", 1E3), Hd = new P("WARNING", 900), Id = new P("INFO", 800), Jd = new P("CONFIG", 700), Kd = new P("FINE", 500), Ld = new P("FINEST", 300), Md = new P("ALL", 0), Nd = [new P("OFF", Infinity), Fd, Gd, Hd, Id, Jd, Kd, new P("FINER", 400), Ld, Md], Od = l;
function Pd(a) {
  if(!Od) {
    Od = {};
    for(var b = 0, c;c = Nd[b];b++) {
      Od[c.value] = c, Od[c.name] = c
    }
  }
  return Od[a] || l
}
q = Ed.prototype;
q.getParent = m("v");
q.ob = aa("V");
function Qd(a) {
  if(a.V) {
    return a.V
  }
  if(a.v) {
    return Qd(a.v)
  }
  Ia("Root logger has no level set.");
  return l
}
q.log = function(a, b, c) {
  if(a.value >= Qd(this).value) {
    a = this.xf(a, b, c);
    b = "log:" + a.Be;
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
q.xf = function(a, b, c) {
  var d = new Cd(a, String(b), this.hd);
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
          k = c.lineNumber || c.qg || "Not available"
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
      e = "Message: " + ya(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + ya(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ya(yd(g) + "-> ")
    }catch(A) {
      e = "Exception trying to expose exception! You win, we lose. " + A
    }
    d.Rc = e
  }
  return d
};
function Rd(a, b) {
  a.log(Gd, b, i)
}
function Sd(a, b) {
  a.log(Hd, b, i)
}
q.info = function(a, b) {
  this.log(Id, a, b)
};
function Q(a, b) {
  a.log(Kd, b, i)
}
function R(a, b) {
  a.log(Ld, b, i)
}
var Td = {}, Vd = l;
function Wd() {
  Vd || (Vd = new Ed(""), Td[""] = Vd, Vd.ob(Jd))
}
function Xd() {
  Wd();
  return Vd
}
function S(a) {
  Wd();
  var b;
  if(!(b = Td[a])) {
    b = new Ed(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = S(a.substr(0, c));
    if(!c.pa) {
      c.pa = {}
    }
    c.pa[d] = b;
    b.v = c;
    Td[a] = b
  }
  return b
}
;S("cw.net.FlashSocket");
S("cw.net.FlashSocketTracker");
function Yd(a) {
  this.qa = a;
  this.Kc = []
}
C(Yd, K);
Yd.prototype.a = S("cw.net.FlashSocketConduit");
Yd.prototype.Hd = function(a) {
  this.Kc ? (R(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Kc.push.apply(this.Kc, a)) : (R(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.wd.Hd(a))
};
Yd.prototype.Md = function(a, b) {
  this.wd.Md(a, b)
};
Yd.prototype.b = function() {
  this.a.info("in disposeInternal.");
  Yd.d.b.call(this);
  this.wd.e();
  delete this.qa
};
function Zd() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;var ud = Math.pow(2, 53);
var $d = {ff:p("<cw.eq.Wildcard>")};
function ae(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function be(a, b, c) {
  var d = ea(a), e = ea(b);
  if(a == $d || b == $d) {
    return!0
  }else {
    if(a != l && typeof a.k == "function") {
      return c && c.push("running custom equals function on left object"), a.k(b, c)
    }else {
      if(b != l && typeof b.k == "function") {
        return c && c.push("running custom equals function on right object"), b.k(a, c)
      }else {
        if(ae(d) || ae(e)) {
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
                      if(!be(a[d], b[d], c)) {
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
                if(a.ef == Sb && b.ef == Sb) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = !1;
                        break a
                      }
                      if(!be(a[g], b[g], c)) {
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
  this.U(a);
  return a.join("")
}
function ce() {
}
ce.prototype.k = function(a, b) {
  return!(a instanceof ce) ? !1 : be(de(this), de(a), b)
};
ce.prototype.r = function(a, b) {
  a.push("<HelloFrame properties=");
  F(de(this), a, b);
  a.push(">")
};
function de(a) {
  return[a.rb, a.Le, a.ke, a.Pe, a.Xb, a.zd, a.De, a.ze, a.fd, a.xe, a.af, a.Ve, a.Y, a.qc]
}
ce.prototype.P = U;
ce.prototype.U = function(a) {
  var b = {};
  b.tnum = this.rb;
  b.ver = this.Le;
  b.format = this.ke;
  b["new"] = this.Pe;
  b.id = this.Xb;
  b.ming = this.zd;
  b.pad = this.De;
  b.maxb = this.ze;
  if(fa(this.fd)) {
    b.maxt = this.fd
  }
  b.maxia = this.xe;
  b.tcpack = this.af;
  b.eeds = this.Ve;
  b.sack = this.Y instanceof Mb ? qd((new V(this.Y)).P()) : this.Y;
  b.seenack = this.qc instanceof Mb ? qd((new V(this.qc)).P()) : this.qc;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new wb).Tb(b), "H")
};
function ee(a) {
  this.qb = a
}
ee.prototype.k = function(a) {
  return a instanceof ee && this.qb == a.qb
};
ee.prototype.r = function(a, b) {
  a.push("new StringFrame(");
  F(this.qb, a, b);
  a.push(")")
};
ee.prototype.P = U;
ee.prototype.U = function(a) {
  a.push(this.qb, " ")
};
function fe(a) {
  this.bc = a
}
fe.prototype.k = function(a) {
  return a instanceof fe && this.bc == a.bc
};
fe.prototype.r = function(a, b) {
  a.push("new CommentFrame(");
  F(this.bc, a, b);
  a.push(")")
};
fe.prototype.P = U;
fe.prototype.U = function(a) {
  a.push(this.bc, "^")
};
function ge(a) {
  this.Sb = a
}
ge.prototype.k = function(a) {
  return a instanceof ge && this.Sb == a.Sb
};
ge.prototype.r = function(a) {
  a.push("new SeqNumFrame(", String(this.Sb), ")")
};
ge.prototype.P = U;
ge.prototype.U = function(a) {
  a.push(String(this.Sb), "N")
};
function he(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return l
  }
  a: {
    var c = b[1], a = ud;
    if(sd.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
      var g = td(b[d]);
      if(g == l) {
        return l
      }
      c.push(g)
    }
  }
  return new Mb(a, c)
}
function V(a) {
  this.Y = a
}
V.prototype.k = function(a, b) {
  return a instanceof V && this.Y.k(a.Y, b)
};
V.prototype.r = function(a, b) {
  a.push("new SackFrame(");
  F(this.Y, a, b);
  a.push(")")
};
V.prototype.P = U;
V.prototype.U = function(a) {
  var b = this.Y;
  a.push(b.Ra.join(","), "|", String(b.Va));
  a.push("A")
};
function ie(a) {
  this.Ib = a
}
ie.prototype.k = function(a, b) {
  return a instanceof ie && this.Ib.k(a.Ib, b)
};
ie.prototype.r = function(a, b) {
  a.push("new StreamStatusFrame(");
  F(this.Ib, a, b);
  a.push(")")
};
ie.prototype.P = U;
ie.prototype.U = function(a) {
  var b = this.Ib;
  a.push(b.Ra.join(","), "|", String(b.Va));
  a.push("T")
};
function je() {
}
je.prototype.r = function(a) {
  a.push("new StreamCreatedFrame()")
};
je.prototype.k = function(a) {
  return a instanceof je
};
je.prototype.P = U;
je.prototype.U = function(a) {
  a.push("C")
};
function ke() {
}
ke.prototype.r = function(a) {
  a.push("new YouCloseItFrame()")
};
ke.prototype.k = function(a) {
  return a instanceof ke
};
ke.prototype.P = U;
ke.prototype.U = function(a) {
  a.push("Y")
};
function le(a, b) {
  this.Nb = a;
  this.ub = b
}
le.prototype.k = function(a) {
  return a instanceof le && this.Nb == a.Nb && this.ub == a.ub
};
le.prototype.r = function(a, b) {
  a.push("new ResetFrame(");
  F(this.Nb, a, b);
  a.push(", ", String(this.ub), ")")
};
le.prototype.P = U;
le.prototype.U = function(a) {
  a.push(this.Nb, "|", String(Number(this.ub)), "!")
};
var me = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function ne(a) {
  this.reason = a
}
ne.prototype.k = function(a) {
  return a instanceof ne && this.reason == a.reason
};
ne.prototype.r = function(a, b) {
  a.push("new TransportKillFrame(");
  F(this.reason, a, b);
  a.push(")")
};
ne.prototype.P = U;
ne.prototype.U = function(a) {
  a.push(this.reason, "K")
};
function oe(a) {
  a || f(new T("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new ee(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = he(qd(a)), a == l && f(new T("bad sack")), new V(a)
    }else {
      if(b == "N") {
        return a = td(qd(a)), a == l && f(new T("bad seqNum")), new ge(a)
      }else {
        if(b == "T") {
          return a = he(qd(a)), a == l && f(new T("bad lastSackSeen")), new ie(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && f(new T("leading garbage")), new ke
          }else {
            if(b == "^") {
              return new fe(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && f(new T("leading garbage")), new je
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && f(new T("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == l && f(new T("bad applicationLevel")), new le(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = me[a], a == l && f(new T("unknown kill reason: " + a)), new ne(a)
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
;var pe = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function qe(a, b) {
  var c = a.match(pe), d = b.match(pe);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function W(a, b) {
  var c;
  a instanceof W ? (this.nb(b == l ? a.da : b), re(this, a.Z), se(this, a.Ta), te(this, a.ba), ue(this, a.za), ve(this, a.Q), we(this, a.M.D()), xe(this, a.Ja)) : a && (c = String(a).match(pe)) ? (this.nb(!!b), re(this, c[1] || "", !0), se(this, c[2] || "", !0), te(this, c[3] || "", !0), ue(this, c[4]), ve(this, c[5] || "", !0), we(this, c[6] || "", !0), xe(this, c[7] || "", !0)) : (this.nb(!!b), this.M = new ye(l, this, this.da))
}
q = W.prototype;
q.Z = "";
q.Ta = "";
q.ba = "";
q.za = l;
q.Q = "";
q.Ja = "";
q.Ff = !1;
q.da = !1;
q.toString = function() {
  if(this.$) {
    return this.$
  }
  var a = [];
  this.Z && a.push(ze(this.Z, Ae), ":");
  this.ba && (a.push("//"), this.Ta && a.push(ze(this.Ta, Ae), "@"), a.push(u(this.ba) ? encodeURIComponent(this.ba) : l), this.za != l && a.push(":", String(this.za)));
  this.Q && (this.ba && this.Q.charAt(0) != "/" && a.push("/"), a.push(ze(this.Q, this.Q.charAt(0) == "/" ? Be : Ce)));
  var b = String(this.M);
  b && a.push("?", b);
  this.Ja && a.push("#", ze(this.Ja, De));
  return this.$ = a.join("")
};
q.D = function() {
  var a = this.Z, b = this.Ta, c = this.ba, d = this.za, e = this.Q, g = this.M.D(), h = this.Ja, j = new W(l, this.da);
  a && re(j, a);
  b && se(j, b);
  c && te(j, c);
  d && ue(j, d);
  e && ve(j, e);
  g && we(j, g);
  h && xe(j, h);
  return j
};
function re(a, b, c) {
  Ee(a);
  delete a.$;
  a.Z = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.Z) {
    a.Z = a.Z.replace(/:$/, "")
  }
}
function se(a, b, c) {
  Ee(a);
  delete a.$;
  a.Ta = c ? b ? decodeURIComponent(b) : "" : b
}
function te(a, b, c) {
  Ee(a);
  delete a.$;
  a.ba = c ? b ? decodeURIComponent(b) : "" : b
}
function ue(a, b) {
  Ee(a);
  delete a.$;
  b ? (b = Number(b), (isNaN(b) || b < 0) && f(Error("Bad port number " + b)), a.za = b) : a.za = l
}
function ve(a, b, c) {
  Ee(a);
  delete a.$;
  a.Q = c ? b ? decodeURIComponent(b) : "" : b
}
function we(a, b, c) {
  Ee(a);
  delete a.$;
  b instanceof ye ? (a.M = b, a.M.Dd = a, a.M.nb(a.da)) : (c || (b = ze(b, Fe)), a.M = new ye(b, a, a.da))
}
function xe(a, b, c) {
  Ee(a);
  delete a.$;
  a.Ja = c ? b ? decodeURIComponent(b) : "" : b
}
function Ee(a) {
  a.Ff && f(Error("Tried to modify a read-only Uri"))
}
q.nb = function(a) {
  this.da = a;
  this.M && this.M.nb(a);
  return this
};
function Ge(a) {
  return a instanceof W ? a.D() : new W(a, i)
}
var He = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function ze(a, b) {
  var c = l;
  u(a) && (c = a, He.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, Ie)));
  return c
}
function Ie(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Ae = /[#\/\?@]/g, Ce = /[\#\?:]/g, Be = /[\#\?]/g, Fe = /[\#\?@]/g, De = /#/g;
function ye(a, b, c) {
  this.ga = a || l;
  this.Dd = b || l;
  this.da = !!c
}
function Je(a) {
  if(!a.l && (a.l = new H, a.f = 0, a.ga)) {
    for(var b = a.ga.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = l, g = l;
      d >= 0 ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = Ke(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
q = ye.prototype;
q.l = l;
q.f = l;
q.u = function() {
  Je(this);
  return this.f
};
q.add = function(a, b) {
  Je(this);
  Le(this);
  a = Ke(this, a);
  if(this.S(a)) {
    var c = this.l.get(a);
    t(c) ? c.push(b) : this.l.set(a, [c, b])
  }else {
    this.l.set(a, b)
  }
  this.f++;
  return this
};
q.remove = function(a) {
  Je(this);
  a = Ke(this, a);
  if(this.l.S(a)) {
    Le(this);
    var b = this.l.get(a);
    t(b) ? this.f -= b.length : this.f--;
    return this.l.remove(a)
  }
  return!1
};
q.clear = function() {
  Le(this);
  this.l && this.l.clear();
  this.f = 0
};
q.Oa = function() {
  Je(this);
  return this.f == 0
};
q.S = function(a) {
  Je(this);
  a = Ke(this, a);
  return this.l.S(a)
};
q.cc = function(a) {
  var b = this.L();
  return $a(b, a)
};
q.ua = function() {
  Je(this);
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
  Je(this);
  if(a) {
    if(a = Ke(this, a), this.S(a)) {
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
  Je(this);
  Le(this);
  a = Ke(this, a);
  if(this.S(a)) {
    var c = this.l.get(a);
    t(c) ? this.f -= c.length : this.f--
  }
  this.l.set(a, b);
  this.f++;
  return this
};
q.get = function(a, b) {
  Je(this);
  a = Ke(this, a);
  if(this.S(a)) {
    var c = this.l.get(a);
    return t(c) ? c[0] : c
  }else {
    return b
  }
};
q.toString = function() {
  if(this.ga) {
    return this.ga
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
  return this.ga = a.join("")
};
function Le(a) {
  delete a.Ya;
  delete a.ga;
  a.Dd && delete a.Dd.$
}
q.D = function() {
  var a = new ye;
  if(this.Ya) {
    a.Ya = this.Ya
  }
  if(this.ga) {
    a.ga = this.ga
  }
  if(this.l) {
    a.l = this.l.D()
  }
  return a
};
function Ke(a, b) {
  var c = String(b);
  a.da && (c = c.toLowerCase());
  return c
}
q.nb = function(a) {
  a && !this.da && (Je(this), Le(this), Fb(this.l, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.da = a
};
q.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Fb(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
var Me;
function Ne(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function Oe(a, b) {
  var c = Ne(a), d = fb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    $a(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function Pe(a, b) {
  var c = Ne(a), d = fb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < e.length;h++) {
    $a(d, e[h]) && (eb(e, h--, 1), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
;function Qe(a, b) {
  this.width = a;
  this.height = b
}
q = Qe.prototype;
q.D = function() {
  return new Qe(this.width, this.height)
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
var Re = !I || pc();
!bc && !I || I && pc() || bc && nc("1.9.1");
var Se = I && !nc("9");
function Te(a, b) {
  this.x = fa(a) ? a : 0;
  this.y = fa(b) ? b : 0
}
Te.prototype.D = function() {
  return new Te(this.x, this.y)
};
Te.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function Ue(a) {
  return a ? new Ve(We(a)) : Me || (Me = new Ve)
}
function X(a) {
  return u(a) ? document.getElementById(a) : a
}
function Xe(a, b) {
  Qa(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in Ye ? a.setAttribute(Ye[d], b) : d.lastIndexOf("aria-", 0) == 0 ? a.setAttribute(d, b) : a[d] = b
  })
}
var Ye = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Ze() {
  var a = $e.O.parentWindow || $e.O.defaultView || window, b = a.document;
  if(J && !nc("500") && !cc) {
    typeof a.innerHeight == "undefined" && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new Qe(a.innerWidth, b)
  }
  a = b.compatMode == "CSS1Compat" ? b.documentElement : b.body;
  return new Qe(a.clientWidth, a.clientHeight)
}
function af(a, b, c) {
  return bf(document, arguments)
}
function bf(a, b) {
  var c = b[0], d = b[1];
  if(!Re && d && (d.name || d.type)) {
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
    u(d) ? c.className = d : t(d) ? Oe.apply(l, [c].concat(d)) : Xe(c, d)
  }
  b.length > 2 && cf(a, c, b, 2);
  return c
}
function cf(a, b, c, d) {
  function e(c) {
    c && b.appendChild(u(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && g.nodeType > 0) ? Wa(df(g) ? cb(g) : g, e) : e(g)
  }
}
function ef(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function ff(a, b) {
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
function We(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
var gf = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, hf = {IMG:" ", BR:"\n"};
function jf(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, typeof a == "number" && a >= 0 && a < 32768) : !1
}
function kf(a) {
  var b = [];
  lf(a, b, !1);
  return b.join("")
}
function lf(a, b, c) {
  if(!(a.nodeName in gf)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in hf) {
        b.push(hf[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          lf(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function df(a) {
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
function Ve(a) {
  this.O = a || r.document || document
}
q = Ve.prototype;
q.Cb = Ue;
q.h = function(a) {
  return u(a) ? this.O.getElementById(a) : a
};
q.s = function(a, b, c) {
  return bf(this.O, arguments)
};
q.createElement = function(a) {
  return this.O.createElement(a)
};
q.createTextNode = function(a) {
  return this.O.createTextNode(a)
};
q.appendChild = function(a, b) {
  a.appendChild(b)
};
q.append = function(a, b) {
  cf(We(a), a, arguments, 1)
};
q.contains = ff;
function mf(a, b, c, d) {
  this.contentWindow = a;
  this.ec = b;
  this.Ad = c;
  this.wf = d
}
mf.prototype.r = function(a, b) {
  a.push("<XDRFrame frameId=");
  F(this.wf, a, b);
  a.push(", expandedUrl=");
  F(this.ec, a, b);
  a.push(", streams=");
  F(this.Ad, a, b);
  a.push(">")
};
function nf() {
  this.frames = [];
  this.dd = new H
}
nf.prototype.a = S("cw.net.XDRTracker");
function of(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + String(Math.floor(Zd())) + String(Math.floor(Zd()))
  })
}
function pf(a, b) {
  for(var c = qf, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = e.Ad.length == 0) {
      g = e.ec;
      var h = String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + G(b) + " existing frame " + G(e)), md(e)
    }
  }
  d = pd() + pd();
  e = of(a);
  g = r.location;
  g instanceof W || (g = Ge(g));
  e instanceof W || (e = Ge(e));
  var j = g;
  g = j.D();
  (h = !!e.Z) ? re(g, e.Z) : h = !!e.Ta;
  h ? se(g, e.Ta) : h = !!e.ba;
  h ? te(g, e.ba) : h = e.za != l;
  var k = e.Q;
  if(h) {
    ue(g, e.za)
  }else {
    if(h = !!e.Q) {
      if(k.charAt(0) != "/" && (j.ba && !j.Q ? k = "/" + k : (j = g.Q.lastIndexOf("/"), j != -1 && (k = g.Q.substr(0, j + 1) + k))), k == ".." || k == ".") {
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
  h ? ve(g, k) : h = e.M.toString() !== "";
  if(h) {
    j = e.M;
    if(!j.Ya) {
      j.Ya = j.toString() ? decodeURIComponent(j.toString()) : ""
    }
    we(g, j.Ya, i)
  }else {
    h = !!e.Ja
  }
  h && xe(g, e.Ja);
  e = g.toString();
  g = String(r.location).match(pe)[3] || l;
  h = e.match(pe)[3] || l;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + G(b)), c = md(new mf(r, e, [b], l))) : (g = X("minerva-elements"), h = new dd, c.dd.set(d, [h, e, b]), c.a.info("Creating new XDRFrame " + G(d) + "for " + G(b)), c = af("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + d}), g.appendChild(c), c = h);
  return c
}
nf.prototype.jg = function(a) {
  var b = this.dd.get(a);
  b || f(Error("Unknown frameId " + G(a)));
  this.dd.remove(b);
  var c = b[0], a = new mf(X("minerva-xdrframe-" + a).contentWindow || (J ? X("minerva-xdrframe-" + a).document || X("minerva-xdrframe-" + a).contentWindow.document : X("minerva-xdrframe-" + a).contentDocument || X("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (J ? X("minerva-xdrframe-" + a).document || X("minerva-xdrframe-" + a).contentWindow.document : X("minerva-xdrframe-" + a).contentDocument || X("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.oa(a)
};
var qf = new nf;
r.__XHRTracker_xdrFrameLoaded = z(qf.jg, qf);
var rf;
rf = !1;
var sf = Yb();
sf && (sf.indexOf("Firefox") != -1 || sf.indexOf("Camino") != -1 || sf.indexOf("iPhone") != -1 || sf.indexOf("iPod") != -1 || sf.indexOf("iPad") != -1 || sf.indexOf("Android") != -1 || sf.indexOf("Chrome") != -1 && (rf = !0));
var tf = rf;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function uf(a, b, c, d, e, g) {
  dd.call(this, e, g);
  this.ue = a;
  this.Nc = [];
  this.Yd = !!b;
  this.uf = !!c;
  this.mf = !!d;
  for(b = 0;b < a.length;b++) {
    kd(a[b], z(this.ce, this, b, !0), z(this.ce, this, b, !1))
  }
  a.length == 0 && !this.Yd && this.oa(this.Nc)
}
C(uf, dd);
uf.prototype.Fe = 0;
uf.prototype.ce = function(a, b, c) {
  this.Fe++;
  this.Nc[a] = [b, c];
  this.sa || (this.Yd && b ? this.oa([a, c]) : this.uf && !b ? this.dc(c) : this.Fe == this.ue.length && this.oa(this.Nc));
  this.mf && !b && (c = l);
  return c
};
uf.prototype.dc = function(a) {
  uf.d.dc.call(this, a);
  Wa(this.ue, function(a) {
    a.cancel()
  })
};
function vf(a) {
  a = new uf(a, !1, !0);
  jd(a, function(a) {
    return Xa(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function wf(a, b) {
  this.ig = a;
  this.ye = b
}
wf.prototype.ad = 0;
wf.prototype.sc = 0;
wf.prototype.Tc = !1;
function xf(a) {
  var b = [];
  if(a.Tc) {
    return[b, 2]
  }
  var c = a.ad, d = a.ig.responseText;
  for(a.ad = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var e = d.substr(a.sc, c - a.sc), e = e.replace(/\r$/, "");
    if(e.length > a.ye) {
      return a.Tc = !0, [b, 2]
    }
    b.push(e);
    a.sc = c += 1
  }
  return a.ad - a.sc - 1 > a.ye ? (a.Tc = !0, [b, 2]) : [b, 1]
}
;function yf(a, b, c) {
  this.qa = b;
  this.X = a;
  this.Mc = c
}
C(yf, K);
q = yf.prototype;
q.a = S("cw.net.XHRMaster");
q.Ca = -1;
q.ed = function(a, b, c) {
  this.Mc.__XHRSlave_makeRequest(this.X, a, b, c)
};
q.va = m("Ca");
q.kd = function(a, b) {
  b != 1 && Rd(this.a, G(this.X) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  zf(this.qa);
  a: {
    var c = this.qa;
    c.zc = !0;
    try {
      for(var d = !1, e = [], g = 0, h = a.length;g < h;g++) {
        if(c.aa) {
          c.a.info(c.q() + " returning from loop because we're disposed.");
          break a
        }
        if(d = Af(c, a[g], e)) {
          break
        }
      }
      e.length && Bf(c, e);
      c.zc = !1;
      c.A.length && c.ia();
      d && (R(c.a, c.q() + " closeSoon is true.  Frames were: " + G(a)), c.e())
    }finally {
      c.zc = !1
    }
  }
};
q.ld = function(a) {
  Q(this.a, "ongotheaders_: " + G(a));
  var b = l;
  "Content-Length" in a && (b = td(a["Content-Length"]));
  a = this.qa;
  Q(a.a, a.q() + " got Content-Length: " + b);
  a.ea == Cf && (b == l && (Sd(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Df(a, 2E3 + b / 3072 * 1E3))
};
q.md = function(a) {
  a != 1 && Q(this.a, this.qa.q() + "'s XHR's readyState is " + a);
  this.Ca = a;
  this.Ca >= 2 && zf(this.qa)
};
q.jd = function() {
  this.qa.e()
};
q.b = function() {
  yf.d.b.call(this);
  delete Ef.ja[this.X];
  this.Mc.__XHRSlave_dispose(this.X);
  delete this.Mc
};
function Ff() {
  this.ja = {}
}
C(Ff, K);
q = Ff.prototype;
q.a = S("cw.net.XHRMasterTracker");
q.Qd = function(a, b) {
  var c = "_" + pd(), d = new yf(c, a, b);
  return this.ja[c] = d
};
q.kd = function(a, b, c) {
  var b = bb(b), d = this.ja[a];
  d ? d.kd(b, c) : Rd(this.a, "onframes_: no master for " + G(a))
};
q.ld = function(a, b) {
  var c = this.ja[a];
  c ? c.ld(b) : Rd(this.a, "ongotheaders_: no master for " + G(a))
};
q.md = function(a, b) {
  var c = this.ja[a];
  c ? c.md(b) : Rd(this.a, "onreadystatechange_: no master for " + G(a))
};
q.jd = function(a) {
  var b = this.ja[a];
  b ? (delete this.ja[b.X], b.jd()) : Rd(this.a, "oncomplete_: no master for " + G(a))
};
q.b = function() {
  Ff.d.b.call(this);
  for(var a = Ra(this.ja);a.length;) {
    a.pop().e()
  }
  delete this.ja
};
var Ef = new Ff;
r.__XHRMaster_onframes = z(Ef.kd, Ef);
r.__XHRMaster_oncomplete = z(Ef.jd, Ef);
r.__XHRMaster_ongotheaders = z(Ef.ld, Ef);
r.__XHRMaster_onreadystatechange = z(Ef.md, Ef);
function Gf(a, b) {
  b || (b = a);
  this.Aa = a;
  this.Da = b
}
Gf.prototype.r = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  F(this.Aa, a, b);
  a.push(", secondaryUrl=");
  F(this.Da, a, b);
  a.push(">")
};
function Hf(a, b, c, d) {
  this.Aa = a;
  this.Ke = b;
  this.Da = c;
  this.Te = d;
  (!(this.Aa.indexOf("http://") == 0 || this.Aa.indexOf("https://") == 0) || !(this.Da.indexOf("http://") == 0 || this.Da.indexOf("https://") == 0)) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Ke.location.href;
  qe(this.Aa, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Te.location.href;
  qe(this.Da, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
Hf.prototype.r = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  F(this.Aa, a, b);
  a.push(", secondaryUrl=");
  F(this.Da, a, b);
  a.push(">")
};
var If = new fe(";)]}");
function Jf() {
}
Jf.prototype.$d = p(1);
function Kf(a) {
  this.Zf = a
}
Kf.prototype.r = function(a, b) {
  a.push("<UserContext for ");
  F(this.Zf, a, b);
  a.push(">")
};
function Lf(a, b, c) {
  this.K = a;
  this.$f = b ? b : new Jf;
  this.F = c ? c : od;
  this.Yb = new vd;
  this.Xb = pd() + pd();
  this.Ba = new Nb;
  this.Zc = new Pb;
  this.Zb = l;
  this.Dc = [];
  this.sb = new Kf(this);
  if(J) {
    this.Zb = Uc(r, "load", this.Qf, !1, this)
  }
}
C(Lf, K);
q = Lf.prototype;
q.a = S("cw.net.ClientStream");
q.se = new Mb(-1, []);
q.te = new Mb(-1, []);
q.If = 50;
q.Hf = 1048576;
q.nd = l;
q.onreset = l;
q.He = l;
q.xd = !1;
q.rd = !1;
q.c = 1;
q.Ze = -1;
q.i = l;
q.z = l;
q.Ob = l;
q.yd = 0;
q.Je = 0;
q.Se = 0;
q.r = function(a, b) {
  a.push("<ClientStream id=");
  F(this.Xb, a, b);
  a.push(", state=", String(this.c));
  a.push(", primary=");
  F(this.i, a, b);
  a.push(", secondary=");
  F(this.z, a, b);
  a.push(", resetting=");
  F(this.Ob, a, b);
  a.push(">")
};
function Mf(a) {
  var b = [-1];
  a.i && b.push(a.i.kb);
  a.z && b.push(a.z.kb);
  return Math.max.apply(Math.max, b)
}
function Nf(a) {
  if(a.c != 1) {
    var b = a.Ba.H.u() != 0, c = Qb(a.Zc), d = !c.k(a.te) && !(a.i && c.k(a.i.ib) || a.z && c.k(a.z.ib)), e = Mf(a);
    if((b = b && e < a.Ba.Xa) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.i.vb) {
        R(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.i, c != d.ib)) {
          !d.ka && !d.A.length && Of(d), d.A.push(new V(c)), d.ib = c
        }
        b && Pf(a.i, a.Ba, e + 1);
        a.i.ia()
      }else {
        a.z == l ? a.xd ? (R(a.a, "tryToSend_: creating secondary to send " + g), a.z = Qf(a, !1), b && Pf(a.z, a.Ba, e + 1), a.z.ia()) : (R(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.rd = !0) : R(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
q.Qf = function() {
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
function Sf(a, b) {
  var c;
  fa(c) || (c = !0);
  a.c > 3 && f(Error("sendStrings: Can't send strings in state " + a.c));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || f(Error("sendStrings: string #" + c + " has illegal chars: " + G(d)))
      }
    }
    a.Ba.extend(b);
    Nf(a)
  }
}
function Qf(a, b) {
  var c;
  a.K instanceof Hf ? c = a.$f.$d() == 1 ? Cf : Tf : f(Error("Don't support endpoint " + G(a.K)));
  a.Ze += 1;
  c = new Uf(a.F, a, a.Ze, c, a.K, b);
  R(a.a, "Created: " + c.q());
  a.Yb.add(c);
  return c
}
function Vf(a, b, c) {
  var d = new Wf(a.F, a, b, c);
  R(a.a, "Created: " + d.q() + ", delay=" + b + ", times=" + c);
  a.Yb.add(d);
  return d
}
function Xf(a, b) {
  a.Yb.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  Q(a.a, "Offline: " + b.q());
  b.uc ? a.yd += b.uc : a.yd = 0;
  a.yd >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.sb, "stream penalty reached limit", !1), a.e());
  if(a.c > 3) {
    a.c == 4 && b.df ? (Q(a.a, "Disposing because resettingTransport_ is done."), a.e()) : Q(a.a, "Not creating a transport because ClientStream is in state " + a.c)
  }else {
    var c;
    var d;
    c = b instanceof Wf;
    if(!c && b.Gc) {
      var e = J ? tf ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      R(a.a, "getDelayForNextTransport_: " + G({delay:c, times:d}))
    }else {
      d = b.Nd();
      if(b == a.i) {
        if(d) {
          e = ++a.Je
        }else {
          if(!c) {
            e = a.Je = 0
          }
        }
      }else {
        if(d) {
          e = ++a.Se
        }else {
          if(!c) {
            e = a.Se = 0
          }
        }
      }
      if(c || !e) {
        d = c = 0, R(a.a, "getDelayForNextTransport_: " + G({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(Math.random() * 4E3) - 2E3, j = Math.max(0, b.$e - b.Bd);
        d = (c = Math.max(0, g + h - j)) ? 1 : 0;
        R(a.a, "getDelayForNextTransport_: " + G({count:e, base:g, variance:h, oldDuration:j, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    if(b == a.i) {
      a.i = l, c ? a.i = Vf(a, e, c) : (e = Mf(a), a.i = Qf(a, !0), Pf(a.i, a.Ba, e + 1)), a.i.ia()
    }else {
      if(b == a.z) {
        a.z = l, c ? (a.z = Vf(a, e, c), a.z.ia()) : Nf(a)
      }
    }
  }
}
q.reset = function(a) {
  this.c > 3 && f(Error("reset: Can't send reset in state " + this.c));
  this.c = 4;
  this.i && this.i.vb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Yf(this.i, a), this.i.ia()) : (this.i && (Q(this.a, "reset: Disposing primary before sending ResetFrame."), this.i.e()), this.z && (Q(this.a, "reset: Disposing secondary before sending ResetFrame."), this.z.e()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Ob = Qf(this, !1), Yf(this.Ob, a), this.Ob.ia());
  this.onreset && this.onreset.call(this.sb, a, !0)
};
function Zf(a, b, c, d) {
  var e;
  e = a.Zc;
  for(var g = a.If, h = a.Hf, j = [], k = !1, n = 0, y = c.length;n < y;n++) {
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
      if(h = c[g], a.nd && a.nd.call(a.sb, h), a.c == 4 || a.aa) {
        return
      }
    }
  }
  d || Nf(a);
  if(!(a.c == 4 || a.aa) && e) {
    Rd(b.a, b.q() + "'s peer caused rwin overflow."), b.e()
  }
}
q.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  this.c != 1 && f(Error("ClientStream.start: " + G(this) + " already started"));
  this.c = 2;
  if(this.K instanceof Gf) {
    var a = pf(this.K.Aa, this), b = pf(this.K.Da, this);
    jd(vf([a, b]), z(this.sf, this))
  }else {
    $f(this)
  }
};
q.sf = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].ec, e = a[1].ec;
  this.Dc.push(a[0]);
  this.Dc.push(a[1]);
  this.K = new Hf(d, b, e, c);
  $f(this)
};
function $f(a) {
  a.c = 3;
  a.i = Qf(a, !0);
  Pf(a.i, a.Ba, l);
  a.i.ia()
}
q.b = function() {
  this.a.info(G(this) + " in disposeInternal.");
  this.c = 5;
  for(var a = this.Yb.L(), b = 0;b < a.length;b++) {
    a[b].e()
  }
  for(a = 0;a < this.Dc.length;a++) {
    ab(this.Dc[a].Ad, this)
  }
  if(J && this.Zb) {
    O(this.Zb), this.Zb = l
  }
  this.He && this.He.call(this.sb);
  delete this.Yb;
  delete this.i;
  delete this.z;
  delete this.Ob;
  delete this.sb;
  Lf.d.b.call(this)
};
var Cf = 1, Tf = 2, ag = 3;
function Uf(a, b, c, d, e, g) {
  this.F = a;
  this.B = b;
  this.rb = c;
  this.ea = d;
  this.K = e;
  this.A = [];
  this.Wa = g;
  this.vb = !this.eb();
  this.mb = this.ea != Cf;
  this.hf = z(this.cg, this)
}
C(Uf, K);
q = Uf.prototype;
q.a = S("cw.net.ClientTransport");
q.n = l;
q.Bd = l;
q.$e = l;
q.vc = l;
q.ka = !1;
q.zc = !1;
q.ib = l;
q.Uc = 0;
q.kb = -1;
q.od = -1;
q.df = !1;
q.Gc = !1;
q.uc = 0;
q.Eb = !1;
q.r = function(a) {
  a.push("<ClientTransport #", String(this.rb), ", becomePrimary=", String(this.Wa), ">")
};
q.q = function() {
  return(this.Wa ? "Prim. T#" : "Sec. T#") + this.rb
};
q.Nd = function() {
  return!(!this.Eb && this.Uc)
};
q.eb = function() {
  return this.ea == Cf || this.ea == Tf
};
function Bf(a, b) {
  gb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Zf(a.B, a, b, !a.mb)
}
function Af(a, b, c) {
  try {
    var d = oe(b);
    a.Uc += 1;
    Q(a.a, a.q() + " RECV " + G(d));
    var e;
    a.Uc == 1 && !d.k(If) && a.eb() ? (Sd(a.a, a.q() + " is closing soon because got bad preamble: " + G(d)), e = !0) : e = !1;
    if(e) {
      return!0
    }
    if(d instanceof ee) {
      if(!/^([ -~]*)$/.test(d.qb)) {
        return a.Eb = !0
      }
      a.od += 1;
      c.push([a.od, d.qb])
    }else {
      if(d instanceof V) {
        var g = a.B, h = d.Y;
        g.se = h;
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
          j.H.S(v) && (o = j.H.m[v][1], j.H.remove(v), j.Ea -= o)
        }
        j.H.Oa() && j.H.clear();
        if(c) {
          return Sd(a.a, a.q() + " is closing soon because got bad SackFrame"), a.Eb = !0
        }
      }else {
        if(d instanceof ge) {
          a.od = d.Sb - 1
        }else {
          if(d instanceof ie) {
            a.B.te = d.Ib
          }else {
            if(d instanceof ke) {
              return R(a.a, a.q() + " is closing soon because got YouCloseItFrame"), !0
            }else {
              if(d instanceof ne) {
                return a.Eb = !0, d.reason == "stream_attach_failure" ? a.uc += 1 : d.reason == "acked_unsent_strings" && (a.uc += 0.5), R(a.a, a.q() + " is closing soon because got " + G(d)), !0
              }else {
                if(!(d instanceof fe)) {
                  if(d instanceof je) {
                    var A = a.B, Nh = !a.mb;
                    R(A.a, "Stream is now confirmed to exist at server.");
                    A.xd = !0;
                    if(A.rd && !Nh) {
                      A.rd = !1, Nf(A)
                    }
                  }else {
                    if(c.length) {
                      Bf(a, c);
                      if(!t(c)) {
                        for(var Ud = c.length - 1;Ud >= 0;Ud--) {
                          delete c[Ud]
                        }
                      }
                      c.length = 0
                    }
                    if(d instanceof le) {
                      var wc = a.B;
                      wc.onreset && wc.onreset.call(wc.sb, d.Nb, d.ub);
                      wc.e();
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
  }catch(Rf) {
    return Rf instanceof T || f(Rf), Sd(a.a, a.q() + " is closing soon because got InvalidFrame: " + G(b)), a.Eb = !0
  }
  return!1
}
q.cg = function() {
  Sd(this.a, this.q() + " timed out due to lack of connection or no data being received.");
  this.e()
};
function bg(a) {
  if(a.vc != l) {
    a.F.I.clearTimeout(a.vc), a.vc = l
  }
}
function Df(a, b) {
  bg(a);
  b = Math.round(b);
  a.vc = a.F.I.setTimeout(a.hf, b);
  Q(a.a, a.q() + "'s receive timeout set to " + b + " ms.")
}
function zf(a) {
  a.ea != Cf && (a.ea == ag || a.ea == Tf ? Df(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ea)))
}
function Of(a) {
  var b = new ce;
  b.rb = a.rb;
  b.Le = 2;
  b.ke = 2;
  if(!a.B.xd) {
    b.Pe = !0
  }
  b.Xb = a.B.Xb;
  b.zd = a.mb;
  if(b.zd) {
    b.De = 4096
  }
  b.ze = 3E5;
  b.xe = a.mb ? Math.floor(10) : 0;
  b.af = !1;
  if(a.Wa) {
    b.Ve = l, b.fd = Math.floor((a.mb ? 358E4 : 25E3) / 1E3)
  }
  b.Y = Qb(a.B.Zc);
  b.qc = a.B.se;
  a.A.push(b);
  a.ib = b.Y
}
q.ia = function() {
  this.ka && !this.vb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.zc) {
    R(this.a, this.q() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.ka;
    this.ka = !0;
    !a && !this.A.length && Of(this);
    for(a = 0;a < this.A.length;a++) {
      Q(this.a, this.q() + " SEND " + G(this.A[a]))
    }
    if(this.eb()) {
      for(var a = [], b = 0, c = this.A.length;b < c;b++) {
        this.A[b].U(a), a.push("\n")
      }
      this.A = [];
      a = a.join("");
      b = this.Wa ? this.K.Aa : this.K.Da;
      this.n = Ef.Qd(this, this.Wa ? this.K.Ke : this.K.Te);
      this.Bd = this.F.I === cd ? B() : this.F.I.getTime();
      this.n.ed(b, "POST", a);
      Df(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.mb ? 0 : this.Wa ? 25E3 : 0))
    }else {
      if(this.ea == ag) {
        a = [];
        b = 0;
        for(c = this.A.length;b < c;b++) {
          a.push(this.A[b].P())
        }
        this.A = [];
        this.n ? this.n.Hd(a) : (b = this.K, this.n = new Yd(this), this.n.wd = b.ug.Qd(this.n), this.Bd = this.F.I === cd ? B() : this.F.I.getTime(), this.n.Md(b.host, b.port), this.n.aa || (this.n.Hd(a), this.n.aa || Df(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.ea))
      }
    }
  }
};
function Pf(a, b, c) {
  !a.ka && !a.A.length && Of(a);
  for(var d = Math.max(c, a.kb + 1), e = Ob(b), c = [], g = 0;g < e.length;g++) {
    var h = e[g];
    (d == l || h >= d) && c.push([h, b.H.m[h][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], e = g[0], g = g[1], (a.kb == -1 || a.kb + 1 != e) && a.A.push(new ge(e)), a.A.push(new ee(g)), a.kb = e
  }
}
q.b = function() {
  this.a.info(this.q() + " in disposeInternal.");
  Uf.d.b.call(this);
  this.$e = this.F.I === cd ? B() : this.F.I.getTime();
  this.A = [];
  bg(this);
  this.n && this.n.e();
  var a = this.B;
  this.B = l;
  Xf(a, this)
};
function Yf(a, b) {
  !a.ka && !a.A.length && Of(a);
  a.A.push(new le(b, !0));
  a.df = !0
}
function Wf(a, b, c, d) {
  this.F = a;
  this.B = b;
  this.Ud = c;
  this.Pd = d
}
C(Wf, K);
q = Wf.prototype;
q.ka = !1;
q.vb = !1;
q.lc = l;
q.ib = l;
q.a = S("cw.net.DoNothingTransport");
function cg(a) {
  a.lc = a.F.I.setTimeout(function() {
    a.lc = l;
    a.Pd--;
    a.Pd ? cg(a) : a.e()
  }, a.Ud)
}
q.ia = function() {
  this.ka && !this.vb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.ka = !0;
  cg(this)
};
q.r = function(a) {
  a.push("<DoNothingTransport delay=", String(this.Ud), ">")
};
q.eb = p(!1);
q.q = p("Wast. T");
q.Nd = p(!1);
q.b = function() {
  this.a.info(this.q() + " in disposeInternal.");
  Wf.d.b.call(this);
  this.lc != l && this.F.I.clearTimeout(this.lc);
  var a = this.B;
  this.B = l;
  Xf(a, this)
};
var dg;
function eg() {
  kb.apply(this)
}
C(eg, kb);
function fg() {
  kb.apply(this)
}
C(fg, kb);
qb(eg, {0:{name:"NewPost", Zd:"demosminerva.ljstream_messages.NewPost"}, 1:{name:"title", ab:9, type:String}, 2:{name:"url", ab:9, type:String}, 3:{name:"body", ab:9, type:String}, 4:{name:"num_images", ab:5, type:Number}, 5:{name:"lang", ab:9, type:String}});
qb(fg, {0:{name:"SetPreferences", Zd:"demosminerva.ljstream_messages.SetPreferences"}, 1:{name:"include_russian_posts", ab:8, type:Boolean}});
function gg() {
  this.Oe = B()
}
var hg = new gg;
gg.prototype.set = aa("Oe");
gg.prototype.reset = function() {
  this.set(B())
};
gg.prototype.get = m("Oe");
function ig(a) {
  this.pd = a || "";
  this.Xf = hg
}
ig.prototype.Tf = !0;
ig.prototype.Vf = !0;
ig.prototype.Uf = !0;
ig.prototype.Ue = !1;
function jg(a) {
  return a < 10 ? "0" + a : String(a)
}
function kg(a, b) {
  var c = (a.We - b) / 1E3, d = c.toFixed(3), e = 0;
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
function lg(a) {
  ig.call(this, a)
}
C(lg, ig);
lg.prototype.Ue = !0;
function mg(a) {
  this.gd = a || 100;
  this.na = []
}
q = mg.prototype;
q.Kb = 0;
q.add = function(a) {
  this.na[this.Kb] = a;
  this.Kb = (this.Kb + 1) % this.gd
};
q.get = function(a) {
  a = ng(this, a);
  return this.na[a]
};
q.set = function(a, b) {
  a = ng(this, a);
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
q.S = function(a) {
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
function ng(a, b) {
  b >= a.na.length && f(Error("Out of bounds exception"));
  return a.na.length < a.gd ? b : (a.Kb + Number(b)) % a.gd
}
;function og(a, b) {
  this.wa = a || "";
  this.pd = b || "";
  this.lb = [];
  this.wc = new mg(pg);
  this.Of = z(this.gf, this);
  this.vf = new lg(this.pd);
  this.tf = {};
  if(!0 != this.oe) {
    this.oe = !0;
    var c = Xd(), d = this.Of;
    if(!c.Fb) {
      c.Fb = []
    }
    c.Fb.push(d)
  }
  this.T = qg(this.wa, "enabled") == "1";
  r.setInterval(z(this.Rf, this), 7500)
}
var pg = 500;
q = og.prototype;
q.cf = "LOGGING";
q.qf = !1;
q.t = l;
q.Fd = !1;
q.oe = !1;
q.Jd = l;
q.bd = B();
q.Na = function() {
  this.T && rg(this)
};
q.isEnabled = m("T");
q.Ub = function(a) {
  if(this.T = a) {
    rg(this), this.t && this.Cc()
  }
  sg(this, "enabled", a ? "1" : "0")
};
function tg(a) {
  return!!a.t && !a.t.closed
}
q.kf = function() {
  this.wc.clear();
  tg(this) && this.Cc()
};
q.gf = function(a) {
  if(!this.tf[a.ve]) {
    var b = this.vf, c;
    switch(a.V.value) {
      case Fd.value:
        c = "dbg-sh";
        break;
      case Gd.value:
        c = "dbg-sev";
        break;
      case Hd.value:
        c = "dbg-w";
        break;
      case Id.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.pd, " ");
    if(b.Tf) {
      var e = new Date(a.We);
      d.push("[", jg(e.getFullYear() - 2E3) + jg(e.getMonth() + 1) + jg(e.getDate()) + " " + jg(e.getHours()) + ":" + jg(e.getMinutes()) + ":" + jg(e.getSeconds()) + "." + jg(Math.floor(e.getMilliseconds() / 10)), "] ")
    }
    b.Vf && d.push("[", Ea(kg(a, b.Xf.get())), "s] ");
    b.Uf && d.push("[", ya(a.ve), "] ");
    d.push('<span class="', c, '">', xa(Ea(ya(a.Be))));
    b.Ue && a.Sc && d.push("<br>", xa(Ea(a.Rc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.T ? (rg(this), this.wc.add(b), ug(this, b)) : this.wc.add(b);
    this.qf && a.V.value >= Gd.value && this.Ub(!0)
  }
};
function ug(a, b) {
  a.lb.push(b);
  r.clearTimeout(a.Jd);
  B() - a.bd > 750 ? a.Gd() : a.Jd = r.setTimeout(z(a.Gd, a), 250)
}
q.Gd = function() {
  this.bd = B();
  if(tg(this)) {
    var a = this.t.document.body, a = a && a.scrollHeight - (a.scrollTop + a.clientHeight) <= 100;
    this.t.document.write(this.lb.join(""));
    this.lb.length = 0;
    a && this.t.scrollTo(0, 1E6)
  }
};
function vg(a) {
  for(var b = a.wc.L(), c = 0;c < b.length;c++) {
    ug(a, b[c])
  }
}
function rg(a) {
  if(!tg(a) && !a.Fd) {
    var b = qg(a.wa, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), e = Number(b[2]), b = Number(b[3]);
    a.Fd = !0;
    a.t = window.open("", I ? a.wa.replace(/[\s\-\.\,]/g, "_") : a.wa, "width=" + e + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    if(!a.t && !a.Wf) {
      alert("Logger popup was blocked"), a.Wf = !0
    }
    a.Fd = !1;
    a.t && a.Cc()
  }
}
q.ic = p("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
q.Cc = function() {
  tg(this) || (this.t.document.open(), ug(this, "<style>" + this.ic() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.cf + "<br><small>Logger: " + this.wa + "</small></div><hr>"), vg(this))
};
function sg(a, b, c) {
  b += a.wa;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(B() + 2592E6)).toUTCString()
}
function qg(a, b, c) {
  var a = b + a, b = String(document.cookie), d = b.indexOf(a + "=");
  return d != -1 ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, c == -1 ? b.length : c))) : c || ""
}
q.Rf = function() {
  tg(this) && sg(this, "dbg", (this.t.screenX || this.t.screenLeft || 0) + "," + (this.t.screenY || this.t.screenTop || 0) + "," + (this.t.outerWidth || 800) + "," + (this.t.outerHeight || 500))
};
function wg(a, b) {
  if(xg) {
    var c = yg(), d;
    for(d in c) {
      var e = d.replace("fancywindow.sel.", ""), e = S(e), g = e.V, h = window.localStorage.getItem(d).toString();
      (!g || g.toString() != h) && e.ob(Pd(h))
    }
  }
  og.call(this, a, b)
}
C(wg, og);
var xg;
a: {
  try {
    xg = !!window.localStorage.getItem;
    break a
  }catch(zg) {
  }
  xg = !1
}
q = wg.prototype;
q.Gd = function() {
  this.bd = B();
  if(tg(this)) {
    for(var a = this.J.h("log"), b = a.scrollHeight - (a.scrollTop + a.offsetHeight) <= 100, c = 0;c < this.lb.length;c++) {
      var d = this.J.s("div", "logmsg");
      d.innerHTML = this.lb[c];
      a.appendChild(d)
    }
    this.lb.length = 0;
    this.Qe();
    if(b) {
      a.scrollTop = a.scrollHeight
    }
  }
};
q.Cc = function() {
  if(tg(this)) {
    var a = this.t.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.wa + "</title><style>" + this.ic() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.wa + "</b></p><p>" + this.cf + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (I ? a.body : this.t).onresize = z(this.Qe, this);
    this.J = new Ve(a);
    this.J.h("openbutton").onclick = z(this.Mf, this);
    this.J.h("closebutton").onclick = z(this.lf, this);
    this.J.h("clearbutton").onclick = z(this.kf, this);
    this.J.h("exitbutton").onclick = z(this.rf, this);
    vg(this)
  }
};
q.Mf = function() {
  var a = this.J.h("optionsarea");
  a.innerHTML = "";
  for(var b = Ag(), c = this.J, d = 0;d < b.length;d++) {
    var e = S(b[d]), e = c.s("div", {}, Bg(this, "sel" + b[d], e.V ? e.V.name : "INHERIT"), c.s("span", {}, b[d] || "(root)"));
    a.appendChild(e)
  }
  this.J.h("options").style.display = "block";
  return!1
};
function Bg(a, b, c) {
  for(var a = a.J, b = a.s("select", {id:b}), d = 0;d < Nd.length;d++) {
    var e = Nd[d], g = a.s("option", {}, e.name);
    if(c == e.name) {
      g.selected = !0
    }
    b.appendChild(g)
  }
  b.appendChild(a.s("option", {selected:c == "INHERIT"}, "INHERIT"));
  return b
}
q.lf = function() {
  this.J.h("options").style.display = "none";
  for(var a = Ag(), b = this.J, c = 0;c < a.length;c++) {
    var d = S(a[c]), e = b.h("sel" + a[c]), e = e.options[e.selectedIndex].text;
    e == "INHERIT" ? d.ob(l) : d.ob(Pd(e))
  }
  if(xg) {
    a = Ag();
    b = yg();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], e = S(a[c]).V, d in b ? e ? window.localStorage.getItem(d) != e.name && window.localStorage.setItem(d, e.name) : window.localStorage.removeItem(d) : e && window.localStorage.setItem(d, e.name)
    }
  }
  return!1
};
q.Qe = function() {
  var a = this.J, b = a.h("log"), c = a.h("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.O.body.offsetHeight - c.offsetHeight - (I ? 4 : 0) + "px"
};
q.rf = function() {
  this.Ub(!1);
  this.t && this.t.close()
};
q.ic = function() {
  return wg.d.ic.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function yg() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != l && d.lastIndexOf("fancywindow.sel.", 0) == 0 && (a[d] = !0)
  }
  return a
}
function Ag() {
  var a = Sa(Td);
  a.sort();
  return a
}
;var Cg = bc ? "MozUserSelect" : J ? "WebkitUserSelect" : l;
function Dg(a) {
  this.ie = a;
  this.j = []
}
C(Dg, K);
var Eg = [];
function Fg(a, b, c, d) {
  t(c) || (Eg[0] = c, c = Eg);
  for(var e = 0;e < c.length;e++) {
    a.j.push(N(b, c[e], d || a, !1, a.ie || a))
  }
  return a
}
function Gg(a, b, c, d, e, g) {
  if(t(c)) {
    for(var h = 0;h < c.length;h++) {
      Gg(a, b, c[h], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.ie || a;
      e = !!e;
      if(b = Wc(b, c, e)) {
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
Dg.prototype.qd = function() {
  Wa(this.j, O);
  this.j.length = 0
};
Dg.prototype.b = function() {
  Dg.d.b.call(this);
  this.qd()
};
Dg.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Hg() {
}
da(Hg);
Hg.prototype.Kf = 0;
Hg.bb();
function Ig(a) {
  this.Ia = a || Ue();
  this.Rb = Jg
}
C(Ig, bd);
Ig.prototype.Df = Hg.bb();
var Jg = l;
function Kg(a, b) {
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
q = Ig.prototype;
q.le = l;
q.G = !1;
q.p = l;
q.Rb = l;
q.Jf = l;
q.v = l;
q.pa = l;
q.wb = l;
q.gg = !1;
q.h = m("p");
function Lg(a) {
  return a.cb || (a.cb = new Dg(a))
}
q.getParent = m("v");
q.sd = function(a) {
  this.v && this.v != a && f(Error("Method not supported"));
  Ig.d.sd.call(this, a)
};
q.Cb = m("Ia");
q.s = function() {
  this.p = this.Ia.createElement("div")
};
function Mg(a) {
  var b = X("prefs");
  a.G && f(Error("Component already rendered"));
  a.p || a.s();
  b ? b.insertBefore(a.p, l) : a.Ia.O.body.appendChild(a.p);
  (!a.v || a.v.G) && a.$a()
}
q.$a = function() {
  this.G = !0;
  Ng(this, function(a) {
    !a.G && a.h() && a.$a()
  })
};
q.zb = function() {
  Ng(this, function(a) {
    a.G && a.zb()
  });
  this.cb && this.cb.qd();
  this.G = !1
};
q.b = function() {
  Ig.d.b.call(this);
  this.G && this.zb();
  this.cb && (this.cb.e(), delete this.cb);
  Ng(this, function(a) {
    a.e()
  });
  !this.gg && this.p && ef(this.p);
  this.v = this.Jf = this.p = this.wb = this.pa = l
};
q.pb = function(a) {
  this.G && f(Error("Component already rendered"));
  this.Rb = a
};
function Ng(a, b) {
  a.pa && Wa(a.pa, b, i)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = u(a) ? a : a.le || (a.le = ":" + (a.Df.Kf++).toString(36)), a = this.wb && c ? (c in this.wb ? this.wb[c] : i) || l : l;
    if(c && a) {
      var d = this.wb;
      c in d && delete d[c];
      ab(this.pa, a);
      b && (a.zb(), a.p && ef(a.p));
      c = a;
      c == l && f(Error("Unable to set parent component"));
      c.v = l;
      Ig.d.sd.call(c, l)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function Og() {
}
var Pg;
da(Og);
q = Og.prototype;
q.fc = function() {
};
q.s = function(a) {
  var b = a.Cb().s("div", Qg(this, a).join(" "), a.xb);
  a.isEnabled() || this.la(b, 1, !0);
  a.c & 8 && this.la(b, 8, !0);
  a.R & 16 && this.la(b, 16, !!(a.c & 16));
  a.R & 64 && this.la(b, 64, !!(a.c & 64));
  return b
};
q.yb = function(a, b, c) {
  if(a = a.h ? a.h() : a) {
    if(I && !nc("7")) {
      var d = Rg(Ne(a), b);
      d.push(b);
      na(c ? Oe : Pe, a).apply(l, d)
    }else {
      c ? Oe(a, b) : Pe(a, b)
    }
  }
};
q.me = function(a) {
  if(a.Rb == l) {
    var b;
    a: {
      b = a.G ? a.p : a.Ia.O.body;
      var c = We(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (b = c.defaultView.getComputedStyle(b, l))) {
        b = b.direction || b.getPropertyValue("direction");
        break a
      }
      b = ""
    }
    a.Rb = "rtl" == (b || ((a.G ? a.p : a.Ia.O.body).currentStyle ? (a.G ? a.p : a.Ia.O.body).currentStyle.direction : l) || (a.G ? a.p : a.Ia.O.body).style.direction)
  }
  a.Rb && this.pb(a.h(), !0);
  a.isEnabled() && this.Vb(a, a.Ua)
};
q.xc = function(a, b) {
  var c = !b, d = I || ac ? a.getElementsByTagName("*") : l;
  if(Cg) {
    if(c = c ? "none" : "", a.style[Cg] = c, d) {
      for(var e = 0, g;g = d[e];e++) {
        g.style[Cg] = c
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
q.pe = function(a) {
  var b;
  return a.R & 32 && (b = a.La()) ? jf(b) : !1
};
q.Vb = function(a, b) {
  var c;
  if(a.R & 32 && (c = a.La())) {
    if(!b && a.c & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.c & 32 && a.be()
    }
    if(jf(c) != b) {
      b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex"))
    }
  }
};
q.ud = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.N = function(a, b, c) {
  var d = a.h();
  if(d) {
    var e = Sg(this, b);
    e && this.yb(a, e, c);
    this.la(d, b, c)
  }
};
q.la = function(a, b, c) {
  Pg || (Pg = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Pg[b]) && a.setAttribute("aria-" + b, c)
};
q.La = function(a) {
  return a.h()
};
q.ta = p("goog-control");
function Qg(a, b) {
  var c = a.ta(), d = [c], e = a.ta();
  e != c && d.push(e);
  c = b.c;
  for(e = [];c;) {
    var g = c & -c;
    e.push(Sg(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.ca) && d.push.apply(d, c);
  I && !nc("7") && d.push.apply(d, Rg(d));
  return d
}
function Rg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Wa([], function(d) {
    Za(d, na($a, a)) && (!b || $a(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Sg(a, b) {
  if(!a.Ld) {
    var c = a.ta();
    a.Ld = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Ld[b]
}
;function Tg(a, b) {
  a || f(Error("Invalid class name " + a));
  w(b) || f(Error("Invalid decorator function " + b))
}
var Ug = {};
function Vg(a, b, c, d, e) {
  if(!I && (!J || !nc("525"))) {
    return!0
  }
  if(ec && e) {
    return Wg(a)
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
  return Wg(a)
}
function Wg(a) {
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
;function Xg(a, b) {
  a && Yg(this, a, b)
}
C(Xg, bd);
q = Xg.prototype;
q.p = l;
q.oc = l;
q.$c = l;
q.pc = l;
q.ya = -1;
q.xa = -1;
var Zg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, $g = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, ah = {61:187, 
59:186}, bh = I || J && nc("525");
q = Xg.prototype;
q.zf = function(a) {
  if(J && (this.ya == 17 && !a.ctrlKey || this.ya == 18 && !a.altKey)) {
    this.xa = this.ya = -1
  }
  bh && !Vg(a.keyCode, this.ya, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.xa = bc && a.keyCode in ah ? ah[a.keyCode] : a.keyCode
};
q.Bf = function() {
  this.xa = this.ya = -1
};
q.handleEvent = function(a) {
  var b = a.ha, c, d;
  I && a.type == "keypress" ? (c = this.xa, d = c != 13 && c != 27 ? b.keyCode : 0) : J && a.type == "keypress" ? (c = this.xa, d = b.charCode >= 0 && b.charCode < 63232 && Wg(c) ? b.charCode : 0) : ac ? (c = this.xa, d = Wg(c) ? b.keyCode : 0) : (c = b.keyCode || this.xa, d = b.charCode || 0, ec && d == 63 && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in Zg ? e = Zg[c] : c == 25 && a.shiftKey && (e = 9) : g && g in $g && (e = $g[g]);
  a = e == this.ya;
  this.ya = e;
  b = new ch(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.e()
  }
};
q.h = m("p");
function Yg(a, b, c) {
  a.pc && a.detach();
  a.p = b;
  a.oc = N(a.p, "keypress", a, c);
  a.$c = N(a.p, "keydown", a.zf, c, a);
  a.pc = N(a.p, "keyup", a.Bf, c, a)
}
q.detach = function() {
  if(this.oc) {
    O(this.oc), O(this.$c), O(this.pc), this.pc = this.$c = this.oc = l
  }
  this.p = l;
  this.xa = this.ya = -1
};
q.b = function() {
  Xg.d.b.call(this);
  this.detach()
};
function ch(a, b, c, d) {
  d && this.Na(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(ch, xc);
function Y(a, b, c) {
  Ig.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = x(b);
      if(d = Ug[d]) {
        break
      }
      b = b.d ? b.d.constructor : l
    }
    b = d ? w(d.bb) ? d.bb() : new d : l
  }
  this.w = b;
  this.xb = a
}
C(Y, Ig);
q = Y.prototype;
q.xb = l;
q.c = 0;
q.R = 39;
q.Id = 255;
q.Yf = 0;
q.Ua = !0;
q.ca = l;
q.Wc = !0;
q.Ic = !1;
q.La = function() {
  return this.w.La(this)
};
function dh(a, b) {
  if(b) {
    a.ca ? $a(a.ca, b) || a.ca.push(b) : a.ca = [b], a.w.yb(a, b, !0)
  }
}
q.yb = function(a, b) {
  if(b) {
    dh(this, a)
  }else {
    if(a && this.ca) {
      ab(this.ca, a);
      if(this.ca.length == 0) {
        this.ca = l
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
    a.setAttribute("role", b), a.tg = b
  }
  this.Ic || this.w.xc(a, !1);
  this.Ua || this.w.ud(a, !1)
};
q.$a = function() {
  Y.d.$a.call(this);
  this.w.me(this);
  if(this.R & -2 && (this.Wc && eh(this, !0), this.R & 32)) {
    var a = this.La();
    if(a) {
      var b = this.gb || (this.gb = new Xg);
      Yg(b, a);
      Fg(Fg(Fg(Lg(this), b, "key", this.Af), a, "focus", this.yf), a, "blur", this.be)
    }
  }
};
function eh(a, b) {
  var c = Lg(a), d = a.h();
  b ? (Fg(Fg(Fg(Fg(c, d, "mouseover", a.ge), d, "mousedown", a.ee), d, "mouseup", a.he), d, "mouseout", a.fe), I && Fg(c, d, "dblclick", a.de)) : (Gg(Gg(Gg(Gg(c, d, "mouseover", a.ge), d, "mousedown", a.ee), d, "mouseup", a.he), d, "mouseout", a.fe), I && Gg(c, d, "dblclick", a.de))
}
q.zb = function() {
  Y.d.zb.call(this);
  this.gb && this.gb.detach();
  this.Ua && this.isEnabled() && this.w.Vb(this, !1)
};
q.b = function() {
  Y.d.b.call(this);
  this.gb && (this.gb.e(), delete this.gb);
  delete this.w;
  this.ca = this.xb = l
};
function fh(a) {
  a = a.xb;
  if(!a) {
    return""
  }
  if(!u(a)) {
    if(t(a)) {
      a = Xa(a, kf).join("")
    }else {
      if(Se && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        lf(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Se || (a = a.replace(/ +/g, " "));
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
q.ud = function(a, b) {
  if(b || this.Ua != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.h();
    c && this.w.ud(c, a);
    this.isEnabled() && this.w.Vb(this, a);
    this.Ua = a;
    return!0
  }
  return!1
};
q.isEnabled = function() {
  return!(this.c & 1)
};
q.Ub = function(a) {
  var b = this.getParent();
  if((!b || typeof b.isEnabled != "function" || b.isEnabled()) && gh(this, 1, !a)) {
    a || (this.setActive(!1), hh(this, !1)), this.Ua && this.w.Vb(this, a), this.N(1, !a)
  }
};
function hh(a, b) {
  gh(a, 2, b) && a.N(2, b)
}
q.ne = function() {
  return!!(this.c & 4)
};
q.setActive = function(a) {
  gh(this, 4, a) && this.N(4, a)
};
q.N = function(a, b) {
  if(this.R & a && b != !!(this.c & a)) {
    this.w.N(this, a, b), this.c = b ? this.c | a : this.c & ~a
  }
};
function Z(a, b) {
  return!!(a.Id & b) && !!(a.R & b)
}
function gh(a, b, c) {
  return!!(a.R & b) && !!(a.c & b) != c && (!(a.Yf & b) || a.dispatchEvent(Kg(b, c))) && !a.aa
}
q.ge = function(a) {
  (!a.relatedTarget || !ff(this.h(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Z(this, 2) && hh(this, !0)
};
q.fe = function(a) {
  if((!a.relatedTarget || !ff(this.h(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    Z(this, 4) && this.setActive(!1), Z(this, 2) && hh(this, !1)
  }
};
q.ee = function(a) {
  if(this.isEnabled() && (Z(this, 2) && hh(this, !0), zc(a) && (!J || !ec || !a.ctrlKey))) {
    Z(this, 4) && this.setActive(!0), this.w.pe(this) && this.La().focus()
  }
  !this.Ic && zc(a) && (!J || !ec || !a.ctrlKey) && a.preventDefault()
};
q.he = function(a) {
  this.isEnabled() && (Z(this, 2) && hh(this, !0), this.ne() && this.Mb(a) && Z(this, 4) && this.setActive(!1))
};
q.de = function(a) {
  this.isEnabled() && this.Mb(a)
};
q.Mb = function(a) {
  if(Z(this, 16)) {
    var b = !(this.c & 16);
    gh(this, 16, b) && this.N(16, b)
  }
  Z(this, 8) && gh(this, 8, !0) && this.N(8, !0);
  Z(this, 64) && (b = !(this.c & 64), gh(this, 64, b) && this.N(64, b));
  b = new uc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, e = 0;d = c[e];e++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
q.yf = function() {
  Z(this, 32) && gh(this, 32, !0) && this.N(32, !0)
};
q.be = function() {
  Z(this, 4) && this.setActive(!1);
  Z(this, 32) && gh(this, 32, !1) && this.N(32, !1)
};
q.Af = function(a) {
  return this.Ua && this.isEnabled() && this.Vc(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
q.Vc = function(a) {
  return a.keyCode == 13 && this.Mb(a)
};
w(Y) || f(Error("Invalid component class " + Y));
w(Og) || f(Error("Invalid renderer class " + Og));
var ih = x(Y);
Ug[ih] = Og;
Tg("goog-control", function() {
  return new Y(l)
});
function jh() {
}
C(jh, Og);
da(jh);
q = jh.prototype;
q.fc = p("button");
q.la = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : jh.d.la.call(this, a, b, c)
};
q.s = function(a) {
  var b = jh.d.s.call(this, a), c = a.jc();
  c && this.td(b, c);
  (c = a.kc()) && this.yc(b, c);
  a.R & 16 && this.la(b, 16, !1);
  return b
};
q.kc = s;
q.yc = s;
q.jc = function(a) {
  return a.title
};
q.td = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
q.ta = p("goog-button");
function kh() {
}
C(kh, jh);
da(kh);
q = kh.prototype;
q.fc = function() {
};
q.s = function(a) {
  a.G && !1 != a.Wc && eh(a, !1);
  a.Wc = !1;
  a.Id &= -256;
  a.G && a.c & 32 && f(Error("Component already rendered"));
  a.c & 32 && a.N(32, !1);
  a.R &= -33;
  return a.Cb().s("button", {"class":Qg(this, a).join(" "), disabled:!a.isEnabled(), title:a.jc() || "", value:a.kc() || ""}, fh(a) || "")
};
q.me = function(a) {
  Fg(Lg(a), a.h(), "click", a.Mb)
};
q.xc = s;
q.pb = s;
q.pe = function(a) {
  return a.isEnabled()
};
q.Vb = s;
q.N = function(a, b, c) {
  kh.d.N.call(this, a, b, c);
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
q.la = s;
function lh(a, b, c) {
  Y.call(this, a, b || kh.bb(), c)
}
C(lh, Y);
q = lh.prototype;
q.kc = m("bf");
q.yc = function(a) {
  this.bf = a;
  this.w.yc(this.h(), a)
};
q.jc = m("Xe");
q.td = function(a) {
  this.Xe = a;
  this.w.td(this.h(), a)
};
q.b = function() {
  lh.d.b.call(this);
  delete this.bf;
  delete this.Xe
};
q.$a = function() {
  lh.d.$a.call(this);
  if(this.R & 32) {
    var a = this.La();
    a && Fg(Lg(this), a, "keyup", this.Vc)
  }
};
q.Vc = function(a) {
  return a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup" ? this.Mb(a) : a.keyCode == 32
};
Tg("goog-button", function() {
  return new lh(l)
});
function mh() {
}
C(mh, jh);
da(mh);
mh.prototype.s = function(a) {
  var b = {"class":"goog-inline-block " + Qg(this, a).join(" "), title:a.jc() || ""};
  return a.Cb().s("div", b, nh(this, a.xb, a.Cb()))
};
mh.prototype.fc = p("button");
function nh(a, b, c) {
  return c.s("div", "goog-inline-block " + (a.ta() + "-outer-box"), c.s("div", "goog-inline-block " + (a.ta() + "-inner-box"), b))
}
mh.prototype.ta = p("goog-custom-button");
function oh(a, b, c) {
  lh.call(this, a, b || mh.bb(), c)
}
C(oh, lh);
Tg("goog-custom-button", function() {
  return new oh(l)
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
function ph() {
  if(bc) {
    this.Ga = {}, this.Fc = {}, this.Ac = []
  }
}
ph.prototype.a = S("goog.net.xhrMonitor");
ph.prototype.T = bc;
ph.prototype.Ub = function(a) {
  this.T = bc && a
};
function qh(a) {
  var b = rh;
  if(b.T) {
    var c = u(a) ? a : ia(a) ? x(a) : "";
    R(b.a, "Pushing context: " + a + " (" + c + ")");
    b.Ac.push(c)
  }
}
function sh() {
  var a = rh;
  if(a.T) {
    var b = a.Ac.pop();
    R(a.a, "Popping context: " + b);
    th(a, b)
  }
}
function uh(a) {
  var b = rh;
  if(b.T) {
    a = x(a);
    Q(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.Ac.length;c++) {
      var d = b.Ac[c];
      vh(b.Ga, d, a);
      vh(b.Fc, a, d)
    }
  }
}
function th(a, b) {
  var c = a.Fc[b], d = a.Ga[b];
  c && d && (R(a.a, "Updating dependent contexts"), Wa(c, function(a) {
    Wa(d, function(b) {
      vh(this.Ga, a, b);
      vh(this.Fc, b, a)
    }, this)
  }, a))
}
function vh(a, b, c) {
  a[b] || (a[b] = []);
  $a(a[b], c) || a[b].push(c)
}
var rh = new ph;
function wh() {
}
wh.prototype.$b = l;
var xh;
function yh() {
}
C(yh, wh);
function zh(a) {
  return(a = Ah(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Bh(a) {
  var b = {};
  Ah(a) && (b[0] = !0, b[1] = !0);
  return b
}
yh.prototype.Xc = l;
function Ah(a) {
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
xh = new yh;
function Ch(a) {
  this.headers = new H;
  this.tb = a || l
}
C(Ch, bd);
Ch.prototype.a = S("goog.net.XhrIo");
var Dh = /^https?:?$/i;
q = Ch.prototype;
q.ma = !1;
q.g = l;
q.Ec = l;
q.Jb = "";
q.re = "";
q.Gb = 0;
q.Hb = "";
q.Pc = !1;
q.nc = !1;
q.Yc = !1;
q.Ma = !1;
q.Bc = 0;
q.Sa = l;
q.Re = "";
q.hg = !1;
q.send = function(a, b, c, d) {
  this.g && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Jb = a;
  this.Hb = "";
  this.Gb = 0;
  this.re = b;
  this.Pc = !1;
  this.ma = !0;
  this.g = this.tb ? zh(this.tb) : zh(xh);
  this.Ec = this.tb ? this.tb.$b || (this.tb.$b = Bh(this.tb)) : xh.$b || (xh.$b = Bh(xh));
  uh(this.g);
  this.g.onreadystatechange = z(this.Ge, this);
  try {
    Q(this.a, Eh(this, "Opening Xhr")), this.Yc = !0, this.g.open(b, a, !0), this.Yc = !1
  }catch(e) {
    Q(this.a, Eh(this, "Error opening Xhr: " + e.message));
    Fh(this, e);
    return
  }
  var a = c || "", g = this.headers.D();
  d && Fb(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.S("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Fb(g, function(a, b) {
    this.g.setRequestHeader(b, a)
  }, this);
  if(this.Re) {
    this.g.responseType = this.Re
  }
  if("withCredentials" in this.g) {
    this.g.withCredentials = this.hg
  }
  try {
    if(this.Sa) {
      cd.clearTimeout(this.Sa), this.Sa = l
    }
    if(this.Bc > 0) {
      Q(this.a, Eh(this, "Will abort after " + this.Bc + "ms if incomplete")), this.Sa = cd.setTimeout(z(this.dg, this), this.Bc)
    }
    Q(this.a, Eh(this, "Sending request"));
    this.nc = !0;
    this.g.send(a);
    this.nc = !1
  }catch(h) {
    Q(this.a, Eh(this, "Send error: " + h.message)), Fh(this, h)
  }
};
q.dispatchEvent = function(a) {
  if(this.g) {
    qh(this.g);
    try {
      return Ch.d.dispatchEvent.call(this, a)
    }finally {
      sh()
    }
  }else {
    return Ch.d.dispatchEvent.call(this, a)
  }
};
q.dg = function() {
  if(typeof ba != "undefined" && this.g) {
    this.Hb = "Timed out after " + this.Bc + "ms, aborting", this.Gb = 8, Q(this.a, Eh(this, this.Hb)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function Fh(a, b) {
  a.ma = !1;
  if(a.g) {
    a.Ma = !0, a.g.abort(), a.Ma = !1
  }
  a.Hb = b;
  a.Gb = 5;
  Gh(a);
  Hh(a)
}
function Gh(a) {
  if(!a.Pc) {
    a.Pc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
q.abort = function(a) {
  if(this.g && this.ma) {
    Q(this.a, Eh(this, "Aborting")), this.ma = !1, this.Ma = !0, this.g.abort(), this.Ma = !1, this.Gb = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Hh(this)
  }
};
q.b = function() {
  if(this.g) {
    if(this.ma) {
      this.ma = !1, this.Ma = !0, this.g.abort(), this.Ma = !1
    }
    Hh(this, !0)
  }
  Ch.d.b.call(this)
};
q.Ge = function() {
  !this.Yc && !this.nc && !this.Ma ? this.Lf() : Ih(this)
};
q.Lf = function() {
  Ih(this)
};
function Ih(a) {
  if(a.ma && typeof ba != "undefined") {
    if(a.Ec[1] && a.va() == 4 && Jh(a) == 2) {
      Q(a.a, Eh(a, "Local request error detected and ignored"))
    }else {
      if(a.nc && a.va() == 4) {
        cd.setTimeout(z(a.Ge, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.va() == 4) {
          Q(a.a, Eh(a, "Request complete"));
          a.ma = !1;
          var b;
          a: {
            switch(Jh(a)) {
              case 0:
                b = u(a.Jb) ? a.Jb.match(pe)[1] || l : a.Jb.Z;
                b = !(b ? Dh.test(b) : self.location ? Dh.test(self.location.protocol) : 1);
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
            a.Hb = c + " [" + Jh(a) + "]";
            Gh(a)
          }
          Hh(a)
        }
      }
    }
  }
}
function Hh(a, b) {
  if(a.g) {
    var c = a.g, d = a.Ec[0] ? s : l;
    a.g = l;
    a.Ec = l;
    if(a.Sa) {
      cd.clearTimeout(a.Sa), a.Sa = l
    }
    b || (qh(c), a.dispatchEvent("ready"), sh());
    var e = rh;
    if(e.T) {
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
      Rd(a.a, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
q.ne = function() {
  return!!this.g
};
q.va = function() {
  return this.g ? this.g.readyState : 0
};
function Jh(a) {
  try {
    return a.va() > 2 ? a.g.status : -1
  }catch(b) {
    return Sd(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.g && this.va() == 4 ? this.g.getResponseHeader(a) : i
};
function Eh(a, b) {
  return b + " [" + a.re + " " + a.Jb + " " + Jh(a) + "]"
}
;var Kh = !(I || J && !nc("420+"));
function Lh(a, b) {
  this.Ye = a;
  this.X = b
}
C(Lh, K);
q = Lh.prototype;
q.n = l;
q.Ca = -1;
q.ae = !1;
q.je = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Mh(a) {
  var b = xf(a.Sd), c = b[0], b = b[1], d = r.parent;
  d ? (d.__XHRMaster_onframes(a.X, c, b), b != 1 && a.e()) : a.e()
}
q.Cf = function() {
  Mh(this);
  if(!this.aa) {
    var a = r.parent;
    a && a.__XHRMaster_oncomplete(this.X);
    this.e()
  }
};
q.Pf = function() {
  var a = r.parent;
  if(a) {
    this.Ca = this.n.va();
    if(this.Ca >= 2 && !this.ae) {
      for(var b = new H, c = this.je.length;c--;) {
        var d = this.je[c];
        try {
          b.set(d, this.n.g.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.u() && (this.ae = !0, a.__XHRMaster_ongotheaders(this.X, Kb(b)), this.aa)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.X, this.Ca);
    Kh && this.Ca == 3 && Mh(this)
  }else {
    this.e()
  }
};
q.ed = function(a, b, c) {
  this.n = new Ch;
  N(this.n, "readystatechange", z(this.Pf, this));
  N(this.n, "complete", z(this.Cf, this));
  this.n.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.Sd = new wf(this.n.g, 1048576)
};
q.b = function() {
  Lh.d.b.call(this);
  delete this.Sd;
  this.n && this.n.e();
  delete this.Ye.Wb[this.X];
  delete this.Ye
};
function Oh() {
  this.Wb = {}
}
C(Oh, K);
Oh.prototype.Gf = function(a, b, c, d) {
  var e = new Lh(this, a);
  this.Wb[a] = e;
  e.ed(b, c, d)
};
Oh.prototype.pf = function(a) {
  (a = this.Wb[a]) && a.e()
};
Oh.prototype.b = function() {
  Oh.d.b.call(this);
  for(var a = Ra(this.Wb);a.length;) {
    a.pop().e()
  }
  delete this.Wb
};
var Ph = new Oh;
r.__XHRSlave_makeRequest = z(Ph.Gf, Ph);
r.__XHRSlave_dispose = z(Ph.pf, Ph);
function Qh() {
}
Qh.prototype.$d = function() {
  return Boolean(Number((new W(document.location)).M.get("httpStreaming", "0"))) ? 2 : 1
};
function Rh() {
  var a = new W(document.location), b = r.__demo_shared_domain, a = a.D();
  te(a, "_____random_____." + b);
  ve(a, "/httpface/");
  we(a, "", i);
  b = new Gf(a.toString().replace("_____random_____", "%random%"));
  return md(b)
}
;var Sh = S("ljstream.logger");
window.onerror = function(a, b, c) {
  Rd(Sh, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Th() {
  this.Ie = new tb
}
Th.prototype.ag = function(a, b) {
  Sh.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  Uh("Disconnected from server.  Try reloading this page.");
  $ = l
};
function Vh(a) {
  Sh.info("Sending preferences to server");
  var b;
  b = new fg;
  b.o[1] = X("include_russian_posts").checked;
  b.Ha && (b.Ha[1] = !0);
  b = a.Ie.Tb(b);
  Sf(a.B, [(new wb).Tb([2, b])])
}
Th.prototype.bg = function(a) {
  var a = vb(a), b = a[1];
  if(a[0] == 1) {
    var c = this.Ie.Oc(eg.Bb(), b), a = mb(c, 1), b = mb(c, 2), c = mb(c, 3);
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
    a = af("span", {}, af("a", {href:b, "class":"ljpost-title-link"}, a), af("span", {}, "\u00a0"), c);
    Wh(a)
  }
};
Th.prototype.reset = function(a) {
  Sh.info("resetting with reason: " + a);
  this.B.reset(a)
};
var $ = l, Xh = new nd(r.window);
function Uh(a) {
  a = af("span", {"class":"important-message"}, a);
  Wh(a)
}
function Yh() {
  $ && ($.reset("idle timeout fired"), $ = l, Uh("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var Zh = l;
function $h() {
  Zh != l && Xh.I.clearTimeout(Zh);
  $ && (Zh = Xh.I.setTimeout(Yh, 6E5))
}
N(window, ["click", "focus", "keydown", "keypress"], $h, !0);
var $e = new Ve, ai = 0;
function Wh(a) {
  a = af("div", {"class":"row-" + (ai % 2 == 0 ? "even" : "odd")}, af("nobr", {}, a));
  X("ljstream-container-inner").appendChild(a);
  ai += 1;
  var b;
  if(b = dg) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !J && d.compatMode == "CSS1Compat" ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new Te(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = Ze().height;
    b = !(a + b <= c + d)
  }
  if(b) {
    a = Ze().height, window.scrollBy(0, Math.round(a / 2) + 80)
  }
}
function bi() {
  var a = new Qh;
  $ = new Th;
  $h();
  jd(Rh(), function(b) {
    $ || f(Error("lastProto falsy?"));
    var b = new Lf(b, a, Xh), c = $;
    b.nd = z(c.bg, c);
    b.onreset = z(c.ag, c);
    $.B = b;
    c = $;
    Sf(c.B, ["subprotocol:ljstream"]);
    Vh(c);
    b.start();
    return l
  })
}
function ci() {
  N(r, "load", function() {
    window.scrollTo(0, 0)
  });
  N(X("include_russian_posts"), "click", function() {
    Vh($)
  });
  dg = !0;
  N(X("automatic_scroll"), "click", function(a) {
    dg = a.target.checked
  });
  var a = new oh("Clear posts");
  dh(a, "clear-posts-button");
  Mg(a);
  N(a, "action", function() {
    X("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = X("ljstream-container");
  a.style.marginTop = X("demo-header").offsetHeight + "px";
  X("demo-header").style.width = "9000px";
  var b = af("div", {id:"ljstream-container-inner"});
  a.appendChild(b)
}
function di() {
  Xd().ob(Md);
  if((new W(document.location)).M.get("logging") == "1") {
    var a = new wg("main");
    a.Ub(!0);
    a.Na()
  }
  Sh.info("Logger works.");
  ci();
  bi()
}
var ei = "__ljstream_init".split("."), fi = r;
!(ei[0] in fi) && fi.execScript && fi.execScript("var " + ei[0]);
for(var gi;ei.length && (gi = ei.shift());) {
  !ei.length && fa(di) ? fi[gi] = di : fi = fi[gi] ? fi[gi] : fi[gi] = {}
}
;})();
