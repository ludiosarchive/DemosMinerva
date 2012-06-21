(function() {
function e(a) {
  throw a;
}
var h = void 0, j = !0, k = null, m = !1;
function aa(a) {
  return function(b) {
    this[a] = b
  }
}
function o(a) {
  return function() {
    return this[a]
  }
}
function r(a) {
  return function() {
    return a
  }
}
var s;
var ba = ba || {}, t = this;
function ca(a) {
  for(var a = a.split("."), b = t, c;c = a.shift();) {
    if(b[c] != k) {
      b = b[c]
    }else {
      return k
    }
  }
  return b
}
function u() {
}
function da(a) {
  a.Za = function() {
    return a.je ? a.je : a.je = new a
  }
}
function ea(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function v(a) {
  return a !== h
}
function fa(a) {
  return"array" == ea(a)
}
function ga(a) {
  var b = ea(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function ha(a) {
  return ia(a) && "function" == typeof a.getFullYear
}
function y(a) {
  return"string" == typeof a
}
function z(a) {
  return"function" == ea(a)
}
function ia(a) {
  var b = typeof a;
  return"object" == b && a != k || "function" == b
}
function ja(a) {
  return a[ka] || (a[ka] = ++la)
}
var ka = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), la = 0;
function ma(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function na(a, b, c) {
  a || e(Error());
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function B(a, b, c) {
  B = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma : na;
  return B.apply(k, arguments)
}
function oa(a, b) {
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
  a.e = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function pa(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = ("" + arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
function qa(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function ra(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function E(a) {
  if(!sa.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(ta, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(ua, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(va, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(wa, "&quot;"));
  return a
}
var ta = /&/g, ua = /</g, va = />/g, wa = /\"/g, sa = /[&<>\"]/;
function xa(a) {
  return ra(a.replace(/  /g, " &#160;"), h)
}
function ya(a, b) {
  for(var c = 0, d = qa("" + a).split("."), g = qa("" + b).split("."), f = Math.max(d.length, g.length), i = 0;0 == c && i < f;i++) {
    var l = d[i] || "", n = g[i] || "", p = RegExp("(\\d*)(\\D*)", "g"), w = RegExp("(\\d*)(\\D*)", "g");
    do {
      var q = p.exec(l) || ["", "", ""], x = w.exec(n) || ["", "", ""];
      if(0 == q[0].length && 0 == x[0].length) {
        break
      }
      c = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == x[1].length ? 0 : parseInt(x[1], 10)) ? -1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == x[1].length ? 0 : parseInt(x[1], 10)) ? 1 : 0) || ((0 == q[2].length) < (0 == x[2].length) ? -1 : (0 == q[2].length) > (0 == x[2].length) ? 1 : 0) || (q[2] < x[2] ? -1 : q[2] > x[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
}
;var za, Aa, Ba, Ca;
function Da() {
  return t.navigator ? t.navigator.userAgent : k
}
Ca = Ba = Aa = za = m;
var Ea;
if(Ea = Da()) {
  var Fa = t.navigator;
  za = 0 == Ea.indexOf("Opera");
  Aa = !za && -1 != Ea.indexOf("MSIE");
  Ba = !za && -1 != Ea.indexOf("WebKit");
  Ca = !za && !Ba && "Gecko" == Fa.product
}
var Ga = za, F = Aa, Ha = Ca, G = Ba, Ia = t.navigator, Ja = -1 != (Ia && Ia.platform || "").indexOf("Mac"), Ka;
a: {
  var La = "", Ma;
  if(Ga && t.opera) {
    var Na = t.opera.version, La = "function" == typeof Na ? Na() : Na
  }else {
    if(Ha ? Ma = /rv\:([^\);]+)(\)|;)/ : F ? Ma = /MSIE\s+([^\);]+)(\)|;)/ : G && (Ma = /WebKit\/(\S+)/), Ma) {
      var Oa = Ma.exec(Da()), La = Oa ? Oa[1] : ""
    }
  }
  if(F) {
    var Pa, Qa = t.document;
    Pa = Qa ? Qa.documentMode : h;
    if(Pa > parseFloat(La)) {
      Ka = "" + Pa;
      break a
    }
  }
  Ka = La
}
var Ra = {};
function H(a) {
  return Ra[a] || (Ra[a] = 0 <= ya(Ka, a))
}
var Sa = {};
function Ta() {
  return Sa[9] || (Sa[9] = F && !!document.documentMode && 9 <= document.documentMode)
}
;function I(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, I) : this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
D(I, Error);
I.prototype.name = "CustomError";
function Ua(a, b) {
  b.unshift(a);
  I.call(this, pa.apply(k, b));
  b.shift();
  this.yh = a
}
D(Ua, I);
Ua.prototype.name = "AssertionError";
function Va(a, b) {
  e(new Ua("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var Wa = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Xa(a, b) {
  var c = a.match(Wa), d = b.match(Wa);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Ya(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
function Za(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function $a(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var ab = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function bb(a, b) {
  for(var c, d, g = 1;g < arguments.length;g++) {
    d = arguments[g];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < ab.length;f++) {
      c = ab[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var J = Array.prototype, cb = J.indexOf ? function(a, b, c) {
  return J.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(y(a)) {
    return!y(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, db = J.forEach ? function(a, b, c) {
  J.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = y(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in g && b.call(c, g[f], f, a)
  }
}, eb = J.filter ? function(a, b, c) {
  return J.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = [], f = 0, i = y(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in i) {
      var n = i[l];
      b.call(c, n, l, a) && (g[f++] = n)
    }
  }
  return g
}, fb = J.map ? function(a, b, c) {
  return J.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = Array(d), f = y(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in f && (g[i] = b.call(c, f[i], i, a))
  }
  return g
}, gb = J.some ? function(a, b, c) {
  return J.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = y(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in g && b.call(c, g[f], f, a)) {
      return j
    }
  }
  return m
}, hb = J.every ? function(a, b, c) {
  return J.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = y(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in g && !b.call(c, g[f], f, a)) {
      return m
    }
  }
  return j
};
function ib(a, b) {
  return 0 <= cb(a, b)
}
function jb(a, b) {
  var c = cb(a, b);
  0 <= c && J.splice.call(a, c, 1)
}
function kb(a) {
  return J.concat.apply(J, arguments)
}
function lb(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
function mb(a, b, c) {
  return 2 >= arguments.length ? J.slice.call(a, b) : J.slice.call(a, b, c)
}
function nb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function ob(a) {
  if("function" == typeof a.r) {
    a = a.r()
  }else {
    if(ga(a) || y(a)) {
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
function pb(a) {
  if("function" == typeof a.D) {
    return a.D()
  }
  if(y(a)) {
    return a.split("")
  }
  if(ga(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Za(a)
}
function qb(a) {
  if("function" == typeof a.Z) {
    return a.Z()
  }
  if("function" != typeof a.D) {
    if(ga(a) || y(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return $a(a)
  }
}
function rb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ga(a) || y(a)) {
      db(a, b, c)
    }else {
      for(var d = qb(a), g = pb(a), f = g.length, i = 0;i < f;i++) {
        b.call(c, g[i], d && d[i], a)
      }
    }
  }
}
function sb(a, b) {
  if("function" == typeof a.every) {
    return a.every(b, h)
  }
  if(ga(a) || y(a)) {
    return hb(a, b, h)
  }
  for(var c = qb(a), d = pb(a), g = d.length, f = 0;f < g;f++) {
    if(!b.call(h, d[f], c && c[f], a)) {
      return m
    }
  }
  return j
}
;function K(a, b) {
  this.o = {};
  this.j = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && e(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.xc(a)
  }
}
s = K.prototype;
s.f = 0;
s.Ad = 0;
s.r = o("f");
s.D = function() {
  tb(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.o[this.j[b]])
  }
  return a
};
s.Z = function() {
  tb(this);
  return this.j.concat()
};
s.da = function(a) {
  return ub(this.o, a)
};
s.Nb = function(a) {
  for(var b = 0;b < this.j.length;b++) {
    var c = this.j[b];
    if(ub(this.o, c) && this.o[c] == a) {
      return j
    }
  }
  return m
};
s.Q = function(a, b) {
  if(this === a) {
    return j
  }
  if(this.f != a.r()) {
    return m
  }
  var c = b || vb;
  tb(this);
  for(var d, g = 0;d = this.j[g];g++) {
    if(!c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function vb(a, b) {
  return a === b
}
s.Na = function() {
  return 0 == this.f
};
s.clear = function() {
  this.o = {};
  this.Ad = this.f = this.j.length = 0
};
s.remove = function(a) {
  return ub(this.o, a) ? (delete this.o[a], this.f--, this.Ad++, this.j.length > 2 * this.f && tb(this), j) : m
};
function tb(a) {
  if(a.f != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      ub(a.o, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.f != a.j.length) {
    for(var g = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], ub(g, d) || (a.j[c++] = d, g[d] = 1), b++
    }
    a.j.length = c
  }
}
s.get = function(a, b) {
  return ub(this.o, a) ? this.o[a] : b
};
s.set = function(a, b) {
  ub(this.o, a) || (this.f++, this.j.push(a), this.Ad++);
  this.o[a] = b
};
s.xc = function(a) {
  var b;
  a instanceof K ? (b = a.Z(), a = a.D()) : (b = $a(a), a = Za(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
s.O = function() {
  return new K(this)
};
function wb(a) {
  tb(a);
  for(var b = {}, c = 0;c < a.j.length;c++) {
    var d = a.j[c];
    b[d] = a.o[d]
  }
  return b
}
function ub(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function xb(a, b) {
  var c;
  if(a instanceof xb) {
    this.R = v(b) ? b : a.R, yb(this, a.Da), c = a.Ua, zb(this), this.Ua = c, Ab(this, a.pa), Bb(this, a.ib), Cb(this, a.xa), Db(this, a.K.O()), c = a.Ja, zb(this), this.Ja = c
  }else {
    if(a && (c = ("" + a).match(Wa))) {
      this.R = !!b;
      yb(this, c[1] || "", j);
      var d = c[2] || "";
      zb(this);
      this.Ua = d ? decodeURIComponent(d) : "";
      Ab(this, c[3] || "", j);
      Bb(this, c[4]);
      Cb(this, c[5] || "", j);
      Db(this, c[6] || "", j);
      c = c[7] || "";
      zb(this);
      this.Ja = c ? decodeURIComponent(c) : ""
    }else {
      this.R = !!b, this.K = new Eb(k, 0, this.R)
    }
  }
}
s = xb.prototype;
s.Da = "";
s.Ua = "";
s.pa = "";
s.ib = k;
s.xa = "";
s.Ja = "";
s.Kf = m;
s.R = m;
s.toString = function() {
  var a = [], b = this.Da;
  b && a.push(Fb(b, Gb), ":");
  if(b = this.pa) {
    a.push("//");
    var c = this.Ua;
    c && a.push(Fb(c, Gb), "@");
    a.push(encodeURIComponent("" + b));
    b = this.ib;
    b != k && a.push(":", "" + b)
  }
  if(b = this.xa) {
    this.pa && "/" != b.charAt(0) && a.push("/"), a.push(Fb(b, "/" == b.charAt(0) ? Hb : Ib))
  }
  (b = this.K.toString()) && a.push("?", b);
  (b = this.Ja) && a.push("#", Fb(b, Jb));
  return a.join("")
};
s.O = function() {
  return new xb(this)
};
function yb(a, b, c) {
  zb(a);
  a.Da = c ? b ? decodeURIComponent(b) : "" : b;
  a.Da && (a.Da = a.Da.replace(/:$/, ""))
}
function Ab(a, b, c) {
  zb(a);
  a.pa = c ? b ? decodeURIComponent(b) : "" : b
}
function Bb(a, b) {
  zb(a);
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.ib = b) : a.ib = k
}
function Cb(a, b, c) {
  zb(a);
  a.xa = c ? b ? decodeURIComponent(b) : "" : b
}
function Db(a, b, c) {
  zb(a);
  b instanceof Eb ? (a.K = b, a.K.md(a.R)) : (c || (b = Fb(b, Kb)), a.K = new Eb(b, 0, a.R))
}
function zb(a) {
  a.Kf && e(Error("Tried to modify a read-only Uri"))
}
s.md = function(a) {
  this.R = a;
  this.K && this.K.md(a);
  return this
};
function Lb(a) {
  return a instanceof xb ? a.O() : new xb(a, h)
}
function Fb(a, b) {
  return y(a) ? encodeURI(a).replace(b, Mb) : k
}
function Mb(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Gb = /[#\/\?@]/g, Ib = /[\#\?:]/g, Hb = /[\#\?]/g, Kb = /[\#\?@]/g, Jb = /#/g;
function Eb(a, b, c) {
  this.I = a || k;
  this.R = !!c
}
function Nb(a) {
  if(!a.m && (a.m = new K, a.f = 0, a.I)) {
    for(var b = a.I.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), g = k, f = k;
      0 <= d ? (g = b[c].substring(0, d), f = b[c].substring(d + 1)) : g = b[c];
      g = decodeURIComponent(g.replace(/\+/g, " "));
      g = Ob(a, g);
      a.add(g, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
    }
  }
}
s = Eb.prototype;
s.m = k;
s.f = k;
s.r = function() {
  Nb(this);
  return this.f
};
s.add = function(a, b) {
  Nb(this);
  this.I = k;
  var a = Ob(this, a), c = this.m.get(a);
  c || this.m.set(a, c = []);
  c.push(b);
  this.f++;
  return this
};
s.remove = function(a) {
  Nb(this);
  a = Ob(this, a);
  return this.m.da(a) ? (this.I = k, this.f -= this.m.get(a).length, this.m.remove(a)) : m
};
s.clear = function() {
  this.m = this.I = k;
  this.f = 0
};
s.Na = function() {
  Nb(this);
  return 0 == this.f
};
s.da = function(a) {
  Nb(this);
  a = Ob(this, a);
  return this.m.da(a)
};
s.Nb = function(a) {
  var b = this.D();
  return ib(b, a)
};
s.Z = function() {
  Nb(this);
  for(var a = this.m.D(), b = this.m.Z(), c = [], d = 0;d < b.length;d++) {
    for(var g = a[d], f = 0;f < g.length;f++) {
      c.push(b[d])
    }
  }
  return c
};
s.D = function(a) {
  Nb(this);
  var b = [];
  if(a) {
    this.da(a) && (b = kb(b, this.m.get(Ob(this, a))))
  }else {
    for(var a = this.m.D(), c = 0;c < a.length;c++) {
      b = kb(b, a[c])
    }
  }
  return b
};
s.set = function(a, b) {
  Nb(this);
  this.I = k;
  a = Ob(this, a);
  this.da(a) && (this.f -= this.m.get(a).length);
  this.m.set(a, [b]);
  this.f++;
  return this
};
s.get = function(a, b) {
  var c = a ? this.D(a) : [];
  return 0 < c.length ? c[0] : b
};
s.toString = function() {
  if(this.I) {
    return this.I
  }
  if(!this.m) {
    return""
  }
  for(var a = [], b = this.m.Z(), c = 0;c < b.length;c++) {
    for(var d = b[c], g = encodeURIComponent("" + d), d = this.D(d), f = 0;f < d.length;f++) {
      var i = g;
      "" !== d[f] && (i += "=" + encodeURIComponent("" + d[f]));
      a.push(i)
    }
  }
  return this.I = a.join("&")
};
s.O = function() {
  var a = new Eb;
  a.I = this.I;
  this.m && (a.m = this.m.O());
  return a
};
function Ob(a, b) {
  var c = "" + b;
  a.R && (c = c.toLowerCase());
  return c
}
s.md = function(a) {
  a && !this.R && (Nb(this), this.I = k, rb(this.m, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.I = k, this.m.set(Ob(this, d), lb(a)), this.f += a.length))
  }, this));
  this.R = a
};
var Pb;
Pb = r(j);
function Qb() {
}
var Rb = 0;
s = Qb.prototype;
s.key = 0;
s.Ra = m;
s.Bc = m;
s.Ma = function(a, b, c, d, g, f) {
  z(a) ? this.ne = j : a && a.handleEvent && z(a.handleEvent) ? this.ne = m : e(Error("Invalid listener argument"));
  this.fb = a;
  this.He = b;
  this.src = c;
  this.type = d;
  this.capture = !!g;
  this.$b = f;
  this.Bc = m;
  this.key = ++Rb;
  this.Ra = m
};
s.handleEvent = function(a) {
  return this.ne ? this.fb.call(this.$b || this.src, a) : this.fb.handleEvent.call(this.fb, a)
};
var Sb = !F || Ta(), Tb = !F || Ta(), Ub = F && !H("8");
!G || H("528");
Ha && H("1.9b") || F && H("8") || Ga && H("9.5") || G && H("528");
Ha && !H("8") || F && H("9");
var Vb = {yg:"click", Dg:"dblclick", Xg:"mousedown", ah:"mouseup", $g:"mouseover", Zg:"mouseout", Yg:"mousemove", nh:"selectstart", Sg:"keypress", Rg:"keydown", Tg:"keyup", wg:"blur", Lg:"focus", Eg:"deactivate", Mg:F ? "focusin" : "DOMFocusIn", Ng:F ? "focusout" : "DOMFocusOut", xg:"change", mh:"select", oh:"submit", Qg:"input", ih:"propertychange", Ig:"dragstart", Fg:"dragenter", Hg:"dragover", Gg:"dragleave", Jg:"drop", sh:"touchstart", rh:"touchmove", qh:"touchend", ph:"touchcancel", Ag:"contextmenu", 
Kg:"error", Pg:"help", Ug:"load", Vg:"losecapture", jh:"readystatechange", kh:"resize", lh:"scroll", uh:"unload", Og:"hashchange", eh:"pagehide", fh:"pageshow", hh:"popstate", Bg:"copy", gh:"paste", Cg:"cut", tg:"beforecopy", ug:"beforecut", vg:"beforepaste", dh:"online", bh:"offline", Wg:"message", zg:"connect", th:G ? "webkitTransitionEnd" : Ga ? "oTransitionEnd" : "transitionend"};
function L() {
}
L.prototype.ea = m;
L.prototype.b = function() {
  this.ea || (this.ea = j, this.c())
};
L.prototype.c = function() {
  this.rf && Wb.apply(k, this.rf);
  if(this.Be) {
    for(;this.Be.length;) {
      this.Be.shift()()
    }
  }
};
function Wb(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ga(d) ? Wb.apply(k, d) : d && "function" == typeof d.b && d.b()
  }
}
;function Xb(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
D(Xb, L);
s = Xb.prototype;
s.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
s.Qa = m;
s.defaultPrevented = m;
s.lc = j;
s.stopPropagation = function() {
  this.Qa = j
};
s.preventDefault = function() {
  this.defaultPrevented = j;
  this.lc = m
};
function Yb(a) {
  a.stopPropagation()
}
;function Zb(a) {
  Zb[" "](a);
  return a
}
Zb[" "] = u;
function $b(a, b) {
  a && this.Ma(a, b)
}
D($b, Xb);
var ac = [1, 4, 2];
s = $b.prototype;
s.target = k;
s.relatedTarget = k;
s.offsetX = 0;
s.offsetY = 0;
s.clientX = 0;
s.clientY = 0;
s.screenX = 0;
s.screenY = 0;
s.button = 0;
s.keyCode = 0;
s.charCode = 0;
s.ctrlKey = m;
s.altKey = m;
s.shiftKey = m;
s.metaKey = m;
s.gd = m;
s.ga = k;
s.Ma = function(a, b) {
  var c = this.type = a.type;
  Xb.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Ha) {
      var g;
      a: {
        try {
          Zb(d.nodeName);
          g = j;
          break a
        }catch(f) {
        }
        g = m
      }
      g || (d = k)
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = G || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = G || a.offsetY !== h ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== h ? a.clientX : a.pageX;
  this.clientY = a.clientY !== h ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.gd = Ja ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ga = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Qa
};
function bc(a) {
  return Sb ? 0 == a.ga.button : "click" == a.type ? j : !!(a.ga.button & ac[0])
}
s.stopPropagation = function() {
  $b.e.stopPropagation.call(this);
  this.ga.stopPropagation ? this.ga.stopPropagation() : this.ga.cancelBubble = j
};
s.preventDefault = function() {
  $b.e.preventDefault.call(this);
  var a = this.ga;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, Ub) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
s.c = function() {
  $b.e.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ga = k
};
var cc = {}, M = {}, dc = {}, ec = {};
function N(a, b, c, d, g) {
  if(b) {
    if(fa(b)) {
      for(var f = 0;f < b.length;f++) {
        N(a, b[f], c, d, g)
      }
      return k
    }
    var d = !!d, i = M;
    b in i || (i[b] = {f:0, S:0});
    i = i[b];
    d in i || (i[d] = {f:0, S:0}, i.f++);
    var i = i[d], l = ja(a), n;
    i.S++;
    if(i[l]) {
      n = i[l];
      for(f = 0;f < n.length;f++) {
        if(i = n[f], i.fb == c && i.$b == g) {
          if(i.Ra) {
            break
          }
          return n[f].key
        }
      }
    }else {
      n = i[l] = [], i.f++
    }
    var p = fc, w = Tb ? function(a) {
      return p.call(w.src, w.key, a)
    } : function(a) {
      a = p.call(w.src, w.key, a);
      if(!a) {
        return a
      }
    }, f = w;
    f.src = a;
    i = new Qb;
    i.Ma(c, f, a, b, d, g);
    c = i.key;
    f.key = c;
    n.push(i);
    cc[c] = i;
    dc[l] || (dc[l] = []);
    dc[l].push(i);
    a.addEventListener ? (a == t || !a.Nd) && a.addEventListener(b, f, d) : a.attachEvent(b in ec ? ec[b] : ec[b] = "on" + b, f);
    return c
  }
  e(Error("Invalid event type"))
}
function gc(a, b, c, d, g) {
  if(fa(b)) {
    for(var f = 0;f < b.length;f++) {
      gc(a, b[f], c, d, g)
    }
    return k
  }
  a = N(a, b, c, d, g);
  cc[a].Bc = j;
  return a
}
function hc(a, b, c, d, g) {
  if(fa(b)) {
    for(var f = 0;f < b.length;f++) {
      hc(a, b[f], c, d, g)
    }
  }else {
    if(d = !!d, a = ic(a, b, d)) {
      for(f = 0;f < a.length;f++) {
        if(a[f].fb == c && a[f].capture == d && a[f].$b == g) {
          jc(a[f].key);
          break
        }
      }
    }
  }
}
function jc(a) {
  if(!cc[a]) {
    return m
  }
  var b = cc[a];
  if(b.Ra) {
    return m
  }
  var c = b.src, d = b.type, g = b.He, f = b.capture;
  c.removeEventListener ? (c == t || !c.Nd) && c.removeEventListener(d, g, f) : c.detachEvent && c.detachEvent(d in ec ? ec[d] : ec[d] = "on" + d, g);
  c = ja(c);
  dc[c] && (g = dc[c], jb(g, b), 0 == g.length && delete dc[c]);
  b.Ra = j;
  if(b = M[d][f][c]) {
    b.ze = j, kc(d, f, c, b)
  }
  delete cc[a];
  return j
}
function kc(a, b, c, d) {
  if(!d.ec && d.ze) {
    for(var g = 0, f = 0;g < d.length;g++) {
      d[g].Ra ? d[g].He.src = k : (g != f && (d[f] = d[g]), f++)
    }
    d.length = f;
    d.ze = m;
    0 == f && (delete M[a][b][c], M[a][b].f--, 0 == M[a][b].f && (delete M[a][b], M[a].f--), 0 == M[a].f && delete M[a])
  }
}
function ic(a, b, c) {
  var d = M;
  return b in d && (d = d[b], c in d && (d = d[c], a = ja(a), d[a])) ? d[a] : k
}
function lc(a, b, c, d, g) {
  var f = 1, b = ja(b);
  if(a[b]) {
    a.S--;
    a = a[b];
    a.ec ? a.ec++ : a.ec = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var n = a[l];
        n && !n.Ra && (f &= mc(n, g) !== m)
      }
    }finally {
      a.ec--, kc(c, d, b, a)
    }
  }
  return Boolean(f)
}
function mc(a, b) {
  a.Bc && jc(a.key);
  return a.handleEvent(b)
}
function fc(a, b) {
  if(!cc[a]) {
    return j
  }
  var c = cc[a], d = c.type, g = M;
  if(!(d in g)) {
    return j
  }
  var g = g[d], f, i;
  if(!Tb) {
    f = b || ca("window.event");
    var l = j in g, n = m in g;
    if(l) {
      if(0 > f.keyCode || f.returnValue != h) {
        return j
      }
      a: {
        var p = m;
        if(0 == f.keyCode) {
          try {
            f.keyCode = -1;
            break a
          }catch(w) {
            p = j
          }
        }
        if(p || f.returnValue == h) {
          f.returnValue = j
        }
      }
    }
    p = new $b;
    p.Ma(f, this);
    f = j;
    try {
      if(l) {
        for(var q = [], x = p.currentTarget;x;x = x.parentNode) {
          q.push(x)
        }
        i = g[j];
        i.S = i.f;
        for(var A = q.length - 1;!p.Qa && 0 <= A && i.S;A--) {
          p.currentTarget = q[A], f &= lc(i, q[A], d, j, p)
        }
        if(n) {
          i = g[m];
          i.S = i.f;
          for(A = 0;!p.Qa && A < q.length && i.S;A++) {
            p.currentTarget = q[A], f &= lc(i, q[A], d, m, p)
          }
        }
      }else {
        f = mc(c, p)
      }
    }finally {
      q && (q.length = 0), p.b()
    }
    return f
  }
  d = new $b(b, this);
  try {
    f = mc(c, d)
  }finally {
    d.b()
  }
  return f
}
var nc = 0;
function oc(a) {
  this.o = new K;
  a && this.xc(a)
}
function pc(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ja(a) : b.substr(0, 1) + a
}
s = oc.prototype;
s.r = function() {
  return this.o.r()
};
s.add = function(a) {
  this.o.set(pc(a), a)
};
s.xc = function(a) {
  for(var a = pb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
s.jd = function(a) {
  for(var a = pb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
s.remove = function(a) {
  return this.o.remove(pc(a))
};
s.clear = function() {
  this.o.clear()
};
s.Na = function() {
  return this.o.Na()
};
s.contains = function(a) {
  return this.o.da(pc(a))
};
s.D = function() {
  return this.o.D()
};
s.O = function() {
  return new oc(this)
};
s.Q = function(a) {
  var b;
  if(b = this.r() == ob(a)) {
    var c = a, a = ob(c);
    this.r() > a ? b = m : (!(c instanceof oc) && 5 < a && (c = new oc(c)), b = sb(this, function(a) {
      if("function" == typeof c.contains) {
        a = c.contains(a)
      }else {
        if("function" == typeof c.Nb) {
          a = c.Nb(a)
        }else {
          if(ga(c) || y(c)) {
            a = ib(c, a)
          }else {
            a: {
              for(var b in c) {
                if(c[b] == a) {
                  a = j;
                  break a
                }
              }
              a = m
            }
          }
        }
      }
      return a
    }))
  }
  return b
};
function qc(a) {
  return rc(a || arguments.callee.caller, [])
}
function rc(a, b) {
  var c = [];
  if(ib(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(sc(a) + "(");
      for(var d = a.arguments, g = 0;g < d.length;g++) {
        0 < g && c.push(", ");
        var f;
        f = d[g];
        switch(typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            f = "" + f;
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = sc(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f
        }
        40 < f.length && (f = f.substr(0, 40) + "...");
        c.push(f)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(rc(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function sc(a) {
  if(tc[a]) {
    return tc[a]
  }
  a = "" + a;
  if(!tc[a]) {
    var b = /function ([^\(]+)/.exec(a);
    tc[a] = b ? b[1] : "[Anonymous]"
  }
  return tc[a]
}
var tc = {};
function uc(a, b, c, d, g) {
  this.reset(a, b, c, d, g)
}
uc.prototype.Zf = 0;
uc.prototype.Kc = k;
uc.prototype.Jc = k;
var vc = 0;
uc.prototype.reset = function(a, b, c, d, g) {
  this.Zf = "number" == typeof g ? g : vc++;
  this.Xe = d || C();
  this.V = a;
  this.xe = b;
  this.te = c;
  delete this.Kc;
  delete this.Jc
};
uc.prototype.kb = aa("V");
function wc(a) {
  this.Pf = a
}
wc.prototype.z = k;
wc.prototype.V = k;
wc.prototype.oa = k;
wc.prototype.vb = k;
function xc(a, b) {
  this.name = a;
  this.value = b
}
xc.prototype.toString = o("name");
var yc = new xc("SHOUT", 1200), zc = new xc("SEVERE", 1E3), Ac = new xc("WARNING", 900), Bc = new xc("INFO", 800), Cc = new xc("CONFIG", 700), Ec = new xc("FINE", 500), Fc = new xc("FINEST", 300), Gc = new xc("ALL", 0), Hc = [new xc("OFF", Infinity), yc, zc, Ac, Bc, Cc, Ec, new xc("FINER", 400), Fc, Gc], Ic = k;
function Jc(a) {
  if(!Ic) {
    Ic = {};
    for(var b = 0, c;c = Hc[b];b++) {
      Ic[c.value] = c, Ic[c.name] = c
    }
  }
  return Ic[a] || k
}
s = wc.prototype;
s.getParent = o("z");
s.Vd = function() {
  this.oa || (this.oa = {});
  return this.oa
};
s.kb = aa("V");
function Kc(a) {
  if(a.V) {
    return a.V
  }
  if(a.z) {
    return Kc(a.z)
  }
  Va("Root logger has no level set.");
  return k
}
s.log = function(a, b, c) {
  if(a.value >= Kc(this).value) {
    a = this.Df(a, b, c);
    b = "log:" + a.xe;
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.vb) {
        for(var g = 0, f = h;f = c.vb[g];g++) {
          f(d)
        }
      }
      b = b.getParent()
    }
  }
};
s.Df = function(a, b, c) {
  var d = new uc(a, "" + b, this.Pf);
  if(c) {
    d.Kc = c;
    var g;
    var f = arguments.callee.caller;
    try {
      var i;
      var l = ca("window.location.href");
      if(y(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var n, p, w = m;
        try {
          n = c.lineNumber || c.xh || "Not available"
        }catch(q) {
          n = "Not available", w = j
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || l
        }catch(x) {
          p = "Not available", w = j
        }
        i = w || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:p, stack:c.stack || "Not available"} : c
      }
      g = "Message: " + E(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + E(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + E(qc(f) + "-> ")
    }catch(A) {
      g = "Exception trying to expose exception! You win, we lose. " + A
    }
    d.Jc = g
  }
  return d
};
function O(a, b) {
  a.log(zc, b, h)
}
function P(a, b, c) {
  a.log(Ac, b, c)
}
s.info = function(a, b) {
  this.log(Bc, a, b)
};
function Q(a, b) {
  a.log(Ec, b, h)
}
function R(a, b) {
  a.log(Fc, b, h)
}
var Lc = {}, Mc = k;
function Nc() {
  Mc || (Mc = new wc(""), Lc[""] = Mc, Mc.kb(Cc))
}
function Oc() {
  Nc();
  return Mc
}
function S(a) {
  Nc();
  var b;
  if(!(b = Lc[a])) {
    b = new wc(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = S(a.substr(0, c));
    c.Vd()[d] = b;
    b.z = c;
    Lc[a] = b
  }
  return b
}
;function Pc() {
}
D(Pc, L);
s = Pc.prototype;
s.Nd = j;
s.gc = k;
s.nd = aa("gc");
s.addEventListener = function(a, b, c, d) {
  N(this, a, b, c, d)
};
s.removeEventListener = function(a, b, c, d) {
  hc(this, a, b, c, d)
};
s.dispatchEvent = function(a) {
  var b = a.type || a, c = M;
  if(b in c) {
    if(y(a)) {
      a = new Xb(a, this)
    }else {
      if(a instanceof Xb) {
        a.target = a.target || this
      }else {
        var d = a, a = new Xb(b, this);
        bb(a, d)
      }
    }
    var d = 1, g, c = c[b], b = j in c, f;
    if(b) {
      g = [];
      for(f = this;f;f = f.gc) {
        g.push(f)
      }
      f = c[j];
      f.S = f.f;
      for(var i = g.length - 1;!a.Qa && 0 <= i && f.S;i--) {
        a.currentTarget = g[i], d &= lc(f, g[i], a.type, j, a) && a.lc != m
      }
    }
    if(m in c) {
      if(f = c[m], f.S = f.f, b) {
        for(i = 0;!a.Qa && i < g.length && f.S;i++) {
          a.currentTarget = g[i], d &= lc(f, g[i], a.type, m, a) && a.lc != m
        }
      }else {
        for(g = this;!a.Qa && g && f.S;g = g.gc) {
          a.currentTarget = g, d &= lc(f, g, a.type, m, a) && a.lc != m
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
s.c = function() {
  Pc.e.c.call(this);
  var a, b = 0, c = a == k;
  a = !!a;
  if(this == k) {
    Ya(dc, function(d) {
      for(var f = d.length - 1;0 <= f;f--) {
        var g = d[f];
        if(c || a == g.capture) {
          jc(g.key), b++
        }
      }
    })
  }else {
    var d = ja(this);
    if(dc[d]) {
      for(var d = dc[d], g = d.length - 1;0 <= g;g--) {
        var f = d[g];
        if(c || a == f.capture) {
          jc(f.key), b++
        }
      }
    }
  }
  this.gc = k
};
var Qc = t.window;
nc++;
nc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Rc(a, b) {
  this.Lb = [];
  this.Id = a;
  this.Pd = b || k
}
s = Rc.prototype;
s.ra = m;
s.tb = m;
s.zb = 0;
s.qd = m;
s.lf = m;
s.Ac = 0;
s.cancel = function(a) {
  if(this.ra) {
    this.Cb instanceof Rc && this.Cb.cancel()
  }else {
    if(this.z) {
      var b = this.z;
      delete this.z;
      a ? b.cancel(a) : (b.Ac--, 0 >= b.Ac && b.cancel())
    }
    this.Id ? this.Id.call(this.Pd, this) : this.qd = j;
    this.ra || this.Xa(new Sc(this))
  }
};
s.Ld = function(a, b) {
  Tc(this, a, b);
  this.zb--;
  0 == this.zb && this.ra && Uc(this)
};
function Tc(a, b, c) {
  a.ra = j;
  a.Cb = c;
  a.tb = !b;
  Uc(a)
}
function Vc(a) {
  a.ra && (a.qd || e(new Wc(a)), a.qd = m)
}
s.X = function(a) {
  Vc(this);
  Tc(this, j, a)
};
s.Xa = function(a) {
  Vc(this);
  Tc(this, m, a)
};
function Xc(a, b, c, d) {
  a.Lb.push([b, c, d]);
  a.ra && Uc(a)
}
function Yc(a) {
  return gb(a.Lb, function(a) {
    return z(a[1])
  })
}
function Uc(a) {
  a.zd && (a.ra && Yc(a)) && (t.clearTimeout(a.zd), delete a.zd);
  a.z && (a.z.Ac--, delete a.z);
  for(var b = a.Cb, c = m, d = m;a.Lb.length && 0 == a.zb;) {
    var g = a.Lb.shift(), f = g[0], i = g[1], g = g[2];
    if(f = a.tb ? i : f) {
      try {
        var l = f.call(g || a.Pd, b);
        v(l) && (a.tb = a.tb && (l == b || l instanceof Error), a.Cb = b = l);
        b instanceof Rc && (d = j, a.zb++)
      }catch(n) {
        b = n, a.tb = j, Yc(a) || (c = j)
      }
    }
  }
  a.Cb = b;
  d && a.zb && (Xc(b, B(a.Ld, a, j), B(a.Ld, a, m)), b.lf = j);
  c && (a.zd = t.setTimeout(function() {
    e(new Zc(b))
  }, 0))
}
function $c(a) {
  var b = new Rc;
  b.X(a);
  return b
}
function ad(a) {
  var b = new Rc;
  b.Xa(a);
  return b
}
function Wc(a) {
  I.call(this);
  this.qf = a
}
D(Wc, I);
Wc.prototype.message = "Already called";
function Sc(a) {
  I.call(this);
  this.qf = a
}
D(Sc, I);
Sc.prototype.message = "Deferred was cancelled";
function Zc(a) {
  I.call(this);
  this.vh = a;
  this.message = "Unhandled Error in Deferred: " + (a.message || "[No message]")
}
D(Zc, I);
function bd(a) {
  this.B = a;
  this.Qb = [];
  this.Sd = [];
  this.kf = B(this.ng, this)
}
bd.prototype.wd = k;
bd.prototype.ng = function() {
  this.wd = k;
  var a = this.Qb;
  this.Qb = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], g = c[1], c = c[2];
    try {
      d.apply(g, c)
    }catch(f) {
      this.B.setTimeout(function() {
        e(f)
      }, 0)
    }
  }
  if(0 == this.Qb.length) {
    a = this.Sd;
    this.Sd = [];
    for(b = 0;b < a.length;b++) {
      a[b].X(k)
    }
  }
};
var cd = new bd(t.window);
function dd(a) {
  return z(a) || "object" == typeof a && z(a.call) && z(a.apply)
}
;function ed(a) {
  var b = [];
  fd(new gd, a, b);
  return b.join("")
}
function gd() {
  this.kc = h
}
function fd(a, b, c) {
  switch(typeof b) {
    case "string":
      hd(b, c);
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
      if(b == k) {
        c.push("null");
        break
      }
      if(fa(b)) {
        var d = b.length;
        c.push("[");
        for(var g = "", f = 0;f < d;f++) {
          c.push(g), g = b[f], fd(a, a.kc ? a.kc.call(b, "" + f, g) : g, c), g = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (g = b[f], "function" != typeof g && (c.push(d), hd(f, c), c.push(":"), fd(a, a.kc ? a.kc.call(b, f, g) : g, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var id = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, jd = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function hd(a, b) {
  b.push('"', a.replace(jd, function(a) {
    if(a in id) {
      return id[a]
    }
    var b = a.charCodeAt(0), g = "\\u";
    16 > b ? g += "000" : 256 > b ? g += "00" : 4096 > b && (g += "0");
    return id[a] = g + b.toString(16)
  }), '"')
}
;function kd(a, b, c) {
  var d = cb(c, a);
  if(-1 != d) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = ea(a);
    if("boolean" == d || "number" == d || "null" == d || "undefined" == d) {
      b.push("" + a)
    }else {
      if("string" == d) {
        hd(a, b)
      }else {
        if(dd(a.F)) {
          a.F(b, c)
        }else {
          if(dd(a.ef)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if("array" == d) {
                d = a.length;
                b.push("[");
                for(var g = "", f = 0;f < d;f++) {
                  b.push(g), kd(a[f], b, c), g = ", "
                }
                b.push("]")
              }else {
                if("object" == d) {
                  if(ha(a) && "function" == typeof a.valueOf) {
                    b.push("new Date(", "" + a.valueOf(), ")")
                  }else {
                    for(var d = $a(a).concat(ab), g = {}, i = f = 0;i < d.length;) {
                      var l = d[i++], n = ia(l) ? "o" + ja(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(g, n) || (g[n] = j, d[f++] = l)
                    }
                    d.length = f;
                    b.push("{");
                    g = "";
                    for(i = 0;i < d.length;i++) {
                      f = d[i], Object.prototype.hasOwnProperty.call(a, f) && (l = a[f], b.push(g), hd(f, b), b.push(": "), kd(l, b, c), g = ", ")
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
function T(a, b, c) {
  c || (c = []);
  kd(a, b, c)
}
function U(a) {
  var b = [];
  T(a, b, h);
  return b.join("")
}
;function ld() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;function md(a, b) {
  this.x = v(a) ? a : 0;
  this.y = v(b) ? b : 0
}
md.prototype.O = function() {
  return new md(this.x, this.y)
};
md.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function nd(a, b) {
  this.width = a;
  this.height = b
}
s = nd.prototype;
s.O = function() {
  return new nd(this.width, this.height)
};
s.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
s.Na = function() {
  return!(this.width * this.height)
};
s.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
s.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
var od;
function pd(a) {
  a = a.className;
  return y(a) && a.match(/\S+/g) || []
}
function qd(a, b) {
  for(var c = pd(a), d = mb(arguments, 1), g = c.length + d.length, f = c, i = 0;i < d.length;i++) {
    ib(f, d[i]) || f.push(d[i])
  }
  a.className = c.join(" ");
  return c.length == g
}
function rd(a, b) {
  var c = pd(a), d = mb(arguments, 1), g, f = d;
  g = eb(c, function(a) {
    return!ib(f, a)
  });
  a.className = g.join(" ");
  return g.length == c.length - d.length
}
;var sd = !F || Ta(), td = !Ha && !F || F && Ta() || Ha && H("1.9.1"), ud = F && !H("9");
function vd(a) {
  return a ? new wd(xd(a)) : od || (od = new wd)
}
function V(a) {
  return y(a) ? document.getElementById(a) : a
}
var yd = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function zd(a, b, c) {
  return Ad(document, arguments)
}
function Ad(a, b) {
  var c = b[0], d = b[1];
  if(!sd && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', E(d.name), '"');
    if(d.type) {
      c.push(' type="', E(d.type), '"');
      var g = {};
      bb(g, d);
      d = g;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  var f = a.createElement(c);
  d && (y(d) ? f.className = d : fa(d) ? qd.apply(k, [f].concat(d)) : Ya(d, function(a, b) {
    "style" == b ? f.style.cssText = a : "class" == b ? f.className = a : "for" == b ? f.htmlFor = a : b in yd ? f.setAttribute(yd[b], a) : 0 == b.lastIndexOf("aria-", 0) ? f.setAttribute(b, a) : f[b] = a
  }));
  2 < b.length && Bd(a, f, b, 2);
  return f
}
function Bd(a, b, c, d) {
  function g(c) {
    c && b.appendChild(y(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var f = c[d];
    if(ga(f) && !(ia(f) && 0 < f.nodeType)) {
      var i = db, l;
      a: {
        if((l = f) && "number" == typeof l.length) {
          if(ia(l)) {
            l = "function" == typeof l.item || "string" == typeof l.item;
            break a
          }
          if(z(l)) {
            l = "function" == typeof l.item;
            break a
          }
        }
        l = m
      }
      i(l ? lb(f) : f, g)
    }else {
      g(f)
    }
  }
}
function Cd(a, b) {
  if(a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b)
  }
  if("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
}
function xd(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
var Dd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Ed = {IMG:" ", BR:"\n"};
function Fd(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, "number" == typeof a && 0 <= a && 32768 > a) : m
}
function Gd(a) {
  var b = [];
  Hd(a, b, m);
  return b.join("")
}
function Hd(a, b, c) {
  if(!(a.nodeName in Dd)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Ed) {
        b.push(Ed[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Hd(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function wd(a) {
  this.fa = a || t.document || document
}
s = wd.prototype;
s.Ya = vd;
s.g = function(a) {
  return y(a) ? this.fa.getElementById(a) : a
};
function Id() {
  var a = (Jd.fa.parentWindow || Jd.fa.defaultView || window).document, a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
  return new nd(a.clientWidth, a.clientHeight)
}
s.n = function(a, b, c) {
  return Ad(this.fa, arguments)
};
s.createElement = function(a) {
  return this.fa.createElement(a)
};
s.createTextNode = function(a) {
  return this.fa.createTextNode(a)
};
s.appendChild = function(a, b) {
  a.appendChild(b)
};
s.append = function(a, b) {
  Bd(xd(a), a, arguments, 1)
};
s.Vd = function(a) {
  return td && a.children != h ? a.children : eb(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
};
s.contains = Cd;
function Kd(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
var Ld = Ha ? "MozUserSelect" : G ? "WebkitUserSelect" : k;
function Md(a) {
  this.ee = a;
  this.j = []
}
D(Md, L);
var Nd = [];
function W(a, b, c, d) {
  fa(c) || (Nd[0] = c, c = Nd);
  for(var g = 0;g < c.length;g++) {
    var f = N(b, c[g], d || a, m, a.ee || a);
    a.j.push(f)
  }
  return a
}
function Od(a, b, c, d, g, f) {
  if(fa(c)) {
    for(var i = 0;i < c.length;i++) {
      Od(a, b, c[i], d, g, f)
    }
  }else {
    a: {
      d = d || a;
      f = f || a.ee || a;
      g = !!g;
      if(b = ic(b, c, g)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].Ra && b[c].fb == d && b[c].capture == g && b[c].$b == f) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, jc(b), jb(a.j, b))
  }
  return a
}
Md.prototype.jd = function() {
  db(this.j, jc);
  this.j.length = 0
};
Md.prototype.c = function() {
  Md.e.c.call(this);
  this.jd()
};
Md.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Pd() {
}
da(Pd);
Pd.prototype.Qf = 0;
Pd.Za();
function Qd(a) {
  this.Pb = a || vd();
  this.Db = Rd
}
D(Qd, Pc);
Qd.prototype.Jf = Pd.Za();
var Rd = k;
function Sd(a, b) {
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
  e(Error("Invalid component state"))
}
s = Qd.prototype;
s.$ = k;
s.U = m;
s.q = k;
s.Db = k;
s.Of = k;
s.z = k;
s.oa = k;
s.Mb = k;
s.og = m;
function Td(a) {
  return a.$ || (a.$ = ":" + (a.Jf.Qf++).toString(36))
}
s.g = o("q");
function Ud(a) {
  return a.$a || (a.$a = new Md(a))
}
s.getParent = o("z");
s.nd = function(a) {
  this.z && this.z != a && e(Error("Method not supported"));
  Qd.e.nd.call(this, a)
};
s.Ya = o("Pb");
s.n = function() {
  this.q = this.Pb.createElement("div")
};
function Vd(a, b) {
  a.U && e(Error("Component already rendered"));
  a.q || a.n();
  b ? b.insertBefore(a.q, k) : a.Pb.fa.body.appendChild(a.q);
  (!a.z || a.z.U) && a.qa()
}
s.qa = function() {
  this.U = j;
  Wd(this, function(a) {
    !a.U && a.g() && a.qa()
  })
};
s.sb = function() {
  Wd(this, function(a) {
    a.U && a.sb()
  });
  this.$a && this.$a.jd();
  this.U = m
};
s.c = function() {
  Qd.e.c.call(this);
  this.U && this.sb();
  this.$a && (this.$a.b(), delete this.$a);
  Wd(this, function(a) {
    a.b()
  });
  if(!this.og && this.q) {
    var a = this.q;
    a && a.parentNode && a.parentNode.removeChild(a)
  }
  this.z = this.Of = this.q = this.Mb = this.oa = k
};
s.lb = function(a) {
  this.U && e(Error("Component already rendered"));
  this.Db = a
};
function Wd(a, b) {
  a.oa && db(a.oa, b, h)
}
s.removeChild = function(a, b) {
  if(a) {
    var c = y(a) ? a : Td(a), d;
    this.Mb && c ? (d = this.Mb, d = (c in d ? d[c] : h) || k) : d = k;
    a = d;
    c && a && (d = this.Mb, c in d && delete d[c], jb(this.oa, a), b && (a.sb(), a.q && (c = a.q) && c.parentNode && c.parentNode.removeChild(c)), c = a, c == k && e(Error("Unable to set parent component")), c.z = k, Qd.e.nd.call(c, k))
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function Xd() {
}
var Zd;
da(Xd);
s = Xd.prototype;
s.Ub = function() {
};
s.n = function(a) {
  var b = a.Ya().n("div", $d(this, a).join(" "), a.pb);
  this.ld(a, b);
  return b
};
s.qb = function(a, b, c) {
  if(a = a.g ? a.g() : a) {
    if(F && !H("7")) {
      var d = ae(pd(a), b);
      d.push(b);
      oa(c ? qd : rd, a).apply(k, d)
    }else {
      c ? qd(a, b) : rd(a, b)
    }
  }
};
s.ie = function(a) {
  if(a.Db == k) {
    var b = a.U ? a.q : a.Pb.fa.body, c;
    a: {
      c = xd(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(b, k))) {
        c = c.direction || c.getPropertyValue("direction") || "";
        break a
      }
      c = ""
    }
    c || (c = (b.currentStyle ? b.currentStyle.direction : k) || b.style && b.style.direction);
    a.Db = "rtl" == c
  }
  a.Db && this.lb(a.g(), j);
  a.isEnabled() && this.Eb(a, a.Va)
};
s.ld = function(a, b) {
  a.isEnabled() || this.N(b, 1, j);
  a.d & 8 && this.N(b, 8, j);
  a.G & 16 && this.N(b, 16, !!(a.d & 16));
  a.G & 64 && this.N(b, 64, !!(a.d & 64))
};
s.nc = function(a, b) {
  var c = !b, d = F || Ga ? a.getElementsByTagName("*") : k;
  if(Ld) {
    if(c = c ? "none" : "", a.style[Ld] = c, d) {
      for(var g = 0, f;f = d[g];g++) {
        f.style[Ld] = c
      }
    }
  }else {
    if(F || Ga) {
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for(g = 0;f = d[g];g++) {
          f.setAttribute("unselectable", c)
        }
      }
    }
  }
};
s.lb = function(a, b) {
  this.qb(a, this.sa() + "-rtl", b)
};
s.me = function(a) {
  var b;
  return a.G & 32 && (b = a.Ka()) ? Fd(b) : m
};
s.Eb = function(a, b) {
  var c;
  if(a.G & 32 && (c = a.Ka())) {
    if(!b && a.d & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.d & 32 && a.Yd()
    }
    Fd(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
s.pd = function(a, b) {
  a.style.display = b ? "" : "none"
};
s.L = function(a, b, c) {
  var d = a.g();
  if(d) {
    var g = be(this, b);
    g && this.qb(a, g, c);
    this.N(d, b, c)
  }
};
s.N = function(a, b, c) {
  Zd || (Zd = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Zd[b]) && a.setAttribute("aria-" + b, c)
};
s.Ka = function(a) {
  return a.g()
};
s.sa = r("goog-control");
function $d(a, b) {
  var c = a.sa(), d = [c], g = a.sa();
  g != c && d.push(g);
  c = b.d;
  for(g = [];c;) {
    var f = c & -c;
    g.push(be(a, f));
    c &= ~f
  }
  d.push.apply(d, g);
  (c = b.Y) && d.push.apply(d, c);
  F && !H("7") && d.push.apply(d, ae(d));
  return d
}
function ae(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  db([], function(d) {
    hb(d, oa(ib, a)) && (!b || ib(d, b)) && c.push(d.join("_"))
  });
  return c
}
function be(a, b) {
  if(!a.Jd) {
    var c = a.sa();
    a.Jd = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Jd[b]
}
;function ce(a, b) {
  a || e(Error("Invalid class name " + a));
  z(b) || e(Error("Invalid decorator function " + b))
}
var de = {};
function ee(a, b, c, d, g) {
  if(!F && (!G || !H("525"))) {
    return j
  }
  if(Ja && g) {
    return fe(a)
  }
  if(g && !d || !c && (17 == b || 18 == b) || F && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(F && Ta());
    case 27:
      return!G
  }
  return fe(a)
}
function fe(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || G && 0 == a) {
    return j
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
    case 59:
    ;
    case 189:
    ;
    case 187:
    ;
    case 61:
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
      return j;
    default:
      return m
  }
}
function ge(a) {
  switch(a) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return a
  }
}
;function he(a, b) {
  a && ie(this, a, b)
}
D(he, Pc);
s = he.prototype;
s.q = k;
s.bc = k;
s.Rc = k;
s.cc = k;
s.wa = -1;
s.va = -1;
var je = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, ke = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, le = F || 
G && H("525");
s = he.prototype;
s.Ff = function(a) {
  if(G && (17 == this.wa && !a.ctrlKey || 18 == this.wa && !a.altKey)) {
    this.va = this.wa = -1
  }
  le && !ee(a.keyCode, this.wa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.va = Ha ? ge(a.keyCode) : a.keyCode
};
s.Hf = function() {
  this.va = this.wa = -1
};
s.handleEvent = function(a) {
  var b = a.ga, c, d;
  F && "keypress" == a.type ? (c = this.va, d = 13 != c && 27 != c ? b.keyCode : 0) : G && "keypress" == a.type ? (c = this.va, d = 0 <= b.charCode && 63232 > b.charCode && fe(c) ? b.charCode : 0) : Ga ? (c = this.va, d = fe(c) ? b.keyCode : 0) : (c = b.keyCode || this.va, d = b.charCode || 0, Ja && (63 == d && 224 == c) && (c = 191));
  var g = c, f = b.keyIdentifier;
  c ? 63232 <= c && c in je ? g = je[c] : 25 == c && a.shiftKey && (g = 9) : f && f in ke && (g = ke[f]);
  a = g == this.wa;
  this.wa = g;
  b = new me(g, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.b()
  }
};
s.g = o("q");
function ie(a, b, c) {
  a.cc && a.detach();
  a.q = b;
  a.bc = N(a.q, "keypress", a, c);
  a.Rc = N(a.q, "keydown", a.Ff, c, a);
  a.cc = N(a.q, "keyup", a.Hf, c, a)
}
s.detach = function() {
  this.bc && (jc(this.bc), jc(this.Rc), jc(this.cc), this.cc = this.Rc = this.bc = k);
  this.q = k;
  this.va = this.wa = -1
};
s.c = function() {
  he.e.c.call(this);
  this.detach()
};
function me(a, b, c, d) {
  d && this.Ma(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
D(me, $b);
function X(a, b, c) {
  Qd.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ja(b);
      if(d = de[d]) {
        break
      }
      b = b.e ? b.e.constructor : k
    }
    b = d ? z(d.Za) ? d.Za() : new d : k
  }
  this.u = b;
  this.pb = a
}
D(X, Qd);
s = X.prototype;
s.pb = k;
s.d = 0;
s.G = 39;
s.zc = 255;
s.eg = 0;
s.Va = j;
s.Y = k;
s.Nc = j;
s.yc = m;
s.Tf = k;
s.Ka = function() {
  return this.u.Ka(this)
};
function ne(a, b) {
  b && (a.Y ? ib(a.Y, b) || a.Y.push(b) : a.Y = [b], a.u.qb(a, b, j))
}
s.qb = function(a, b) {
  b ? ne(this, a) : a && this.Y && (jb(this.Y, a), 0 == this.Y.length && (this.Y = k), this.u.qb(this, a, m))
};
s.n = function() {
  var a = this.u.n(this);
  this.q = a;
  var b = this.Tf || this.u.Ub();
  b && a.setAttribute("role", b);
  this.yc || this.u.nc(a, m);
  this.Va || this.u.pd(a, m)
};
s.qa = function() {
  X.e.qa.call(this);
  this.u.ie(this);
  if(this.G & -2 && (this.Nc && oe(this, j), this.G & 32)) {
    var a = this.Ka();
    if(a) {
      var b = this.cb || (this.cb = new he);
      ie(b, a);
      W(W(W(Ud(this), b, "key", this.Gf), a, "focus", this.Ef), a, "blur", this.Yd)
    }
  }
};
function oe(a, b) {
  var c = Ud(a), d = a.g();
  b ? (W(W(W(W(c, d, "mouseover", a.ce), d, "mousedown", a.ae), d, "mouseup", a.de), d, "mouseout", a.be), a.Zb != u && W(c, d, "contextmenu", a.Zb), F && W(c, d, "dblclick", a.$d)) : (Od(Od(Od(Od(c, d, "mouseover", a.ce), d, "mousedown", a.ae), d, "mouseup", a.de), d, "mouseout", a.be), a.Zb != u && Od(c, d, "contextmenu", a.Zb), F && Od(c, d, "dblclick", a.$d))
}
s.sb = function() {
  X.e.sb.call(this);
  this.cb && this.cb.detach();
  this.Va && this.isEnabled() && this.u.Eb(this, m)
};
s.c = function() {
  X.e.c.call(this);
  this.cb && (this.cb.b(), delete this.cb);
  delete this.u;
  this.Y = this.pb = k
};
function pe(a) {
  a = a.pb;
  if(!a) {
    return""
  }
  if(!y(a)) {
    if(fa(a)) {
      a = fb(a, Gd).join("")
    }else {
      if(ud && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Hd(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      ud || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
s.lb = function(a) {
  X.e.lb.call(this, a);
  var b = this.g();
  b && this.u.lb(b, a)
};
s.nc = function(a) {
  this.yc = a;
  var b = this.g();
  b && this.u.nc(b, a)
};
s.pd = function(a, b) {
  if(b || this.Va != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.g();
    c && this.u.pd(c, a);
    this.isEnabled() && this.u.Eb(this, a);
    this.Va = a;
    return j
  }
  return m
};
s.isEnabled = function() {
  return!(this.d & 1)
};
s.oc = function(a) {
  var b = this.getParent();
  if((!b || "function" != typeof b.isEnabled || b.isEnabled()) && qe(this, 1, !a)) {
    a || (this.setActive(m), re(this, m)), this.Va && this.u.Eb(this, a), this.L(1, !a)
  }
};
function re(a, b) {
  qe(a, 2, b) && a.L(2, b)
}
s.ke = function() {
  return!!(this.d & 4)
};
s.setActive = function(a) {
  qe(this, 4, a) && this.L(4, a)
};
s.L = function(a, b) {
  this.G & a && b != !!(this.d & a) && (this.u.L(this, a, b), this.d = b ? this.d | a : this.d & ~a)
};
function Y(a, b) {
  return!!(a.zc & b) && !!(a.G & b)
}
function qe(a, b, c) {
  return!!(a.G & b) && !!(a.d & b) != c && (!(a.eg & b) || a.dispatchEvent(Sd(b, c))) && !a.ea
}
s.ce = function(a) {
  (!a.relatedTarget || !Cd(this.g(), a.relatedTarget)) && (this.dispatchEvent("enter") && this.isEnabled() && Y(this, 2)) && re(this, j)
};
s.be = function(a) {
  if((!a.relatedTarget || !Cd(this.g(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    Y(this, 4) && this.setActive(m), Y(this, 2) && re(this, m)
  }
};
s.Zb = u;
s.ae = function(a) {
  if(this.isEnabled() && (Y(this, 2) && re(this, j), bc(a) && (!G || !Ja || !a.ctrlKey))) {
    Y(this, 4) && this.setActive(j), this.u.me(this) && this.Ka().focus()
  }
  !this.yc && (bc(a) && (!G || !Ja || !a.ctrlKey)) && a.preventDefault()
};
s.de = function(a) {
  this.isEnabled() && (Y(this, 2) && re(this, j), this.ke() && (this.Ab(a) && Y(this, 4)) && this.setActive(m))
};
s.$d = function(a) {
  this.isEnabled() && this.Ab(a)
};
s.Ab = function(a) {
  if(Y(this, 16)) {
    var b = !(this.d & 16);
    qe(this, 16, b) && this.L(16, b)
  }
  Y(this, 8) && qe(this, 8, j) && this.L(8, j);
  Y(this, 64) && (b = !(this.d & 64), qe(this, 64, b) && this.L(64, b));
  b = new Xb("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.gd = a.gd);
  return this.dispatchEvent(b)
};
s.Ef = function() {
  Y(this, 32) && qe(this, 32, j) && this.L(32, j)
};
s.Yd = function() {
  Y(this, 4) && this.setActive(m);
  Y(this, 32) && qe(this, 32, m) && this.L(32, m)
};
s.Gf = function(a) {
  return this.Va && this.isEnabled() && this.Mc(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
s.Mc = function(a) {
  return 13 == a.keyCode && this.Ab(a)
};
z(X) || e(Error("Invalid component class " + X));
z(Xd) || e(Error("Invalid renderer class " + Xd));
var se = ja(X);
de[se] = Xd;
ce("goog-control", function() {
  return new X(k)
});
function te() {
}
D(te, Xd);
da(te);
s = te.prototype;
s.Ub = r("button");
s.N = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : te.e.N.call(this, a, b, c)
};
s.n = function(a) {
  var b = te.e.n.call(this, a), c = a.Wb();
  c && this.od(b, c);
  (c = a.Xb()) && this.pc(b, c);
  a.G & 16 && this.N(b, 16, !!(a.d & 16));
  return b
};
s.Xb = u;
s.pc = u;
s.Wb = function(a) {
  return a.title
};
s.od = function(a, b) {
  a && (a.title = b || "")
};
s.sa = r("goog-button");
function ue() {
}
D(ue, te);
da(ue);
s = ue.prototype;
s.Ub = function() {
};
s.n = function(a) {
  a.U && m != a.Nc && oe(a, m);
  a.Nc = m;
  a.zc &= -256;
  a.U && a.d & 32 && e(Error("Component already rendered"));
  a.d & 32 && a.L(32, m);
  a.G &= -33;
  return a.Ya().n("button", {"class":$d(this, a).join(" "), disabled:!a.isEnabled(), title:a.Wb() || "", value:a.Xb() || ""}, pe(a) || "")
};
s.ie = function(a) {
  W(Ud(a), a.g(), "click", a.Ab)
};
s.nc = u;
s.lb = u;
s.me = function(a) {
  return a.isEnabled()
};
s.Eb = u;
s.L = function(a, b, c) {
  ue.e.L.call(this, a, b, c);
  if((a = a.g()) && 1 == b) {
    a.disabled = c
  }
};
s.Xb = function(a) {
  return a.value
};
s.pc = function(a, b) {
  a && (a.value = b)
};
s.N = u;
function ve(a, b, c) {
  X.call(this, a, b || ue.Za(), c)
}
D(ve, X);
s = ve.prototype;
s.Xb = o("af");
s.pc = function(a) {
  this.af = a;
  this.u.pc(this.g(), a)
};
s.Wb = o("Ye");
s.od = function(a) {
  this.Ye = a;
  this.u.od(this.g(), a)
};
s.c = function() {
  ve.e.c.call(this);
  delete this.af;
  delete this.Ye
};
s.qa = function() {
  ve.e.qa.call(this);
  if(this.G & 32) {
    var a = this.Ka();
    a && W(Ud(this), a, "keyup", this.Mc)
  }
};
s.Mc = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Ab(a) : 32 == a.keyCode
};
ce("goog-button", function() {
  return new ve(k)
});
function we() {
}
D(we, te);
da(we);
we.prototype.n = function(a) {
  var b = {"class":"goog-inline-block " + $d(this, a).join(" "), title:a.Wb() || ""}, b = a.Ya().n("div", b, xe(this, a.pb, a.Ya()));
  this.ld(a, b);
  return b
};
we.prototype.Ub = r("button");
we.prototype.ld = function(a, b) {
  a.isEnabled() || this.N(b, 1, j);
  a.d & 8 && this.N(b, 8, j);
  a.G & 16 && this.N(b, 16, j);
  a.d & 64 && this.N(b, 64, j)
};
function xe(a, b, c) {
  return c.n("div", "goog-inline-block " + (a.sa() + "-outer-box"), c.n("div", "goog-inline-block " + (a.sa() + "-inner-box"), b))
}
we.prototype.sa = r("goog-custom-button");
function ye(a, b, c) {
  ve.call(this, a, b || we.Za(), c)
}
D(ye, ve);
ce("goog-custom-button", function() {
  return new ye(k)
});
function ze() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ C()).toString(36)
}
function Ae(a) {
  return a.substr(0, a.length - 1)
}
var Be = /^(0|[1-9]\d*)$/, Ce = /^(0|\-?[1-9]\d*)$/;
function De(a) {
  var b = Ee;
  return Be.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function Fe(a) {
  var b = ea(a);
  if("string" == b) {
    return 21 + 2 * a.length
  }
  if("number" == b) {
    return 16
  }
  if("boolean" == b) {
    return 12
  }
  if("null" == b || "undefined" == b) {
    return 8
  }
  e(Error("cannot determine size of object type " + b))
}
;var Ge, He;
function Ie(a, b) {
  this.Wa = a;
  this.Sa = b
}
Ie.prototype.Q = function(a) {
  return a instanceof Ie && this.Wa == a.Wa && this.Sa.join(",") == a.Sa
};
Ie.prototype.F = function(a, b) {
  a.push("new SACK(", "" + this.Wa, ", ");
  T(this.Sa, a, b);
  a.push(")")
};
function Je() {
  this.J = new K
}
Je.prototype.Ia = -1;
Je.prototype.M = 0;
Je.prototype.append = function(a) {
  var b = Fe(a);
  this.J.set(this.Ia + 1, [a, b]);
  this.Ia += 1;
  this.M += b
};
Je.prototype.F = function(a) {
  a.push("<Queue with ", "" + this.J.r(), " item(s), counter=#", "" + this.Ia, ", size=", "" + this.M, ">")
};
function Ke(a) {
  a = a.J.Z();
  J.sort.call(a, nb);
  return a
}
function Le() {
  this.Ga = new K
}
Le.prototype.Oa = -1;
Le.prototype.M = 0;
function Me(a) {
  var b = a.Ga.Z();
  J.sort.call(b, nb);
  return new Ie(a.Oa, b)
}
var Ne = {};
function Oe(a, b) {
  switch(ea(b)) {
    case "string":
      a.push("<string>", E(b), "</string>");
      break;
    case "number":
      a.push("<number>", b, "</number>");
      break;
    case "boolean":
      a.push(b ? "<true/>" : "<false/>");
      break;
    case "undefined":
      a.push("<undefined/>");
      break;
    case "array":
      a.push("<array>");
      for(var c = b.length, d = 0;d < c;d++) {
        a.push('<property id="', d, '">'), Oe(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != ea(b[c]) && (a.push('<property id="', E(c), '">'), Oe(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function Pe(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, g = arguments;
  d.push("<arguments>");
  for(var f = g.length, i = 1;i < f;i++) {
    Oe(d, g[i])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var Qe = m, Re = "";
function Se(a) {
  a = a.match(/[\d]+/g);
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var Te = navigator.plugins["Shockwave Flash"];
  Te && (Qe = j, Te.description && (Re = Se(Te.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (Qe = j, Re = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var Ue = navigator.mimeTypes["application/x-shockwave-flash"];
    (Qe = Ue && Ue.enabledPlugin) && (Re = Se(Ue.enabledPlugin.description))
  }else {
    try {
      var Ve = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), Qe = j, Re = Se(Ve.GetVariable("$version"))
    }catch(We) {
      try {
        Ve = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), Qe = j, Re = "6.0.21"
      }catch(Xe) {
        try {
          Ve = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Qe = j, Re = Se(Ve.GetVariable("$version"))
        }catch(Ye) {
        }
      }
    }
  }
}
var Ze = Re;
function $e(a, b) {
  Qd.call(this, b);
  this.Af = a;
  this.Ic = new Md(this);
  this.Sb = new K
}
D($e, Qd);
s = $e.prototype;
s.a = S("goog.ui.media.FlashObject");
s.qg = "window";
s.Gd = "#000000";
s.gf = "sameDomain";
function af(a, b, c) {
  a.Bd = y(b) ? b : Math.round(b) + "px";
  a.Oc = y(c) ? c : Math.round(c) + "px";
  a.g() && (b = a.g() ? a.g().firstChild : k, c = a.Bd, a = a.Oc, c instanceof nd ? (a = c.height, c = c.width) : a == h && e(Error("missing height argument")), b.style.width = Kd(c), b.style.height = Kd(a))
}
s.qa = function() {
  $e.e.qa.call(this);
  var a = this.g(), b;
  b = F ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = F ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = pa(c, this.qg), d = this.Sb.Z(), g = this.Sb.D(), f = [], i = 0;i < d.length;i++) {
    f.push(encodeURIComponent("" + d[i]) + "=" + encodeURIComponent("" + g[i]))
  }
  b = pa(b, Td(this), Td(this), "goog-ui-media-flash-object", E(this.Af), E(f.join("&")), this.Gd, this.gf, c);
  a.innerHTML = b;
  this.Bd && this.Oc && af(this, this.Bd, this.Oc);
  W(this.Ic, this.g(), Za(Vb), Yb)
};
s.n = function() {
  this.Me != k && !(0 <= ya(Ze, this.Me)) && (P(this.a, "Required flash version not found:" + this.Me), e(Error("Method not supported")));
  var a = this.Ya().createElement("div");
  a.className = "goog-ui-media-flash";
  this.q = a
};
s.c = function() {
  $e.e.c.call(this);
  this.Sb = k;
  this.Ic.b();
  this.Ic = k
};
function bf(a) {
  I.call(this, a)
}
D(bf, I);
bf.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function cf(a, b) {
  this.$ = "_" + ze();
  this.tc = a;
  this.za = b;
  this.Fa = a.Fa
}
D(cf, L);
s = cf.prototype;
s.Pa = j;
s.Ob = m;
s.a = S("cw.net.FlashSocket");
s.F = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.$);
  a.push("'>")
};
function df(a, b, c) {
  if("frames" == b) {
    a = a.za, ef(a.C), ff(a.C, c)
  }else {
    if("stillreceiving" == b) {
      c = a.za, R(c.a, "onstillreceiving"), ef(c.C)
    }else {
      if("connect" == b) {
        a.za.onconnect()
      }else {
        "close" == b ? (a.Pa = m, a.b()) : "ioerror" == b ? (a.Pa = m, b = a.za, P(b.a, "onioerror: " + U(c)), gf(b.C, m), a.b()) : "securityerror" == b ? (a.Pa = m, b = a.za, P(b.a, "onsecurityerror: " + U(c)), gf(b.C, m), a.b()) : e(Error("bad event: " + b))
      }
    }
  }
}
s.Dc = function(a, b) {
  try {
    var c = this.Fa.CallFunction(Pe("__FC_connect", this.$, a, b, "<int32/>\n"))
  }catch(d) {
    O(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message);
    this.Ob = j;
    this.Pa = m;
    this.b();
    return
  }
  '"OK"' != c && e(Error("__FC_connect failed? ret: " + c))
};
s.Jb = function(a) {
  try {
    var b = this.Fa.CallFunction(Pe("__FC_writeFrames", this.$, a))
  }catch(c) {
    O(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message);
    this.Ob = j;
    this.Pa = m;
    this.b();
    return
  }
  '"OK"' != b && ('"no such instance"' == b ? (P(this.a, "Flash no longer knows of " + this.$ + "; disposing."), this.b()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
s.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.Pa);
  cf.e.c.call(this);
  var a = this.Fa;
  delete this.Fa;
  if(this.Pa) {
    try {
      var b = a.CallFunction(Pe("__FC_close", this.$));
      this.a.info("disposeInternal: __FC_close ret: " + b)
    }catch(c) {
      O(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + c.message), this.Ob = j
    }
  }
  if(this.Ob) {
    a = this.za, P(a.a, "oncrash"), gf(a.C, j)
  }else {
    this.za.onclose()
  }
  delete this.za;
  delete this.tc.ab[this.$]
};
function hf(a, b) {
  this.p = a;
  this.Fa = b;
  this.ab = {};
  this.Cc = "__FST_" + ze();
  t[this.Cc] = B(this.uf, this);
  var c = b.CallFunction(Pe("__FC_setCallbackFunc", this.Cc));
  '"OK"' != c && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
D(hf, L);
s = hf.prototype;
s.a = S("cw.net.FlashSocketTracker");
s.F = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  T(this.ab, a, b);
  a.push(">")
};
s.Fc = function(a) {
  a = new cf(this, a);
  return this.ab[a.$] = a
};
s.sf = function(a, b, c, d) {
  var g = this.ab[a];
  g ? "frames" == b && d ? (df(g, "ioerror", "FlashConnector hadError while handling data."), g.b()) : df(g, b, c) : P(this.a, "Cannot dispatch because we have no instance: " + U([a, b, c, d]))
};
s.uf = function(a, b, c, d) {
  try {
    var g = this.p;
    g.Qb.push([this.sf, this, [a, b, c, d]]);
    g.wd == k && (g.wd = g.B.setTimeout(g.kf, 0))
  }catch(f) {
    t.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
s.c = function() {
  hf.e.c.call(this);
  for(var a = Za(this.ab);a.length;) {
    a.pop().b()
  }
  delete this.ab;
  delete this.Fa;
  t[this.Cc] = h
};
function jf(a) {
  this.C = a;
  this.ob = []
}
D(jf, L);
s = jf.prototype;
s.a = S("cw.net.FlashSocketConduit");
s.Jb = function(a) {
  this.ob ? (R(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.ob.push.apply(this.ob, a)) : (R(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.qc.Jb(a))
};
s.Dc = function(a, b) {
  this.qc.Dc(a, b)
};
s.onconnect = function() {
  this.a.info("onconnect");
  ef(this.C);
  var a = this.ob;
  this.ob = k;
  a.length && (R(this.a, "onconnect: Writing " + a.length + " buffered frame(s)."), this.qc.Jb(a))
};
s.onclose = function() {
  this.a.info("onclose");
  gf(this.C, m)
};
s.c = function() {
  this.a.info("in disposeInternal.");
  jf.e.c.call(this);
  this.qc.b();
  delete this.C
};
var kf = [];
function lf() {
  var a = new Rc;
  kf.push(a);
  return a
}
function mf(a) {
  var b = kf;
  kf = [];
  db(b, function(b) {
    b.X(a)
  });
  return k
}
function nf(a) {
  var b = kf;
  kf = [];
  db(b, function(b) {
    b.Xa(a)
  });
  return k
}
;var Ee = Math.pow(2, 53);
var of = {ef:r("<cw.eq.Wildcard>")};
function pf(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function qf(a, b, c) {
  var d = ea(a), g = ea(b);
  if(a == of || b == of) {
    return j
  }
  if(a != k && "function" == typeof a.Q) {
    return c && c.push("running custom equals function on left object"), a.Q(b, c)
  }
  if(b != k && "function" == typeof b.Q) {
    return c && c.push("running custom equals function on right object"), b.Q(a, c)
  }
  if(pf(d) || pf(g)) {
    a = a === b
  }else {
    if(a instanceof RegExp && b instanceof RegExp) {
      a = a.toString() === b.toString()
    }else {
      if(ha(a) && ha(b)) {
        a = a.valueOf() === b.valueOf()
      }else {
        if("array" == d && "array" == g) {
          a: {
            if(c && c.push("descending into array"), a.length != b.length) {
              c && c.push("array length mismatch: " + a.length + ", " + b.length), a = m
            }else {
              d = 0;
              for(g = a.length;d < g;d++) {
                if(!qf(a[d], b[d], c)) {
                  c && c.push("earlier comparisons indicate mismatch at array item #" + d);
                  a = m;
                  break a
                }
              }
              c && c.push("ascending from array");
              a = j
            }
          }
        }else {
          if(a.df == Pb && b.df == Pb) {
            a: {
              c && c.push("descending into object");
              for(var f in a) {
                if(!(f in b)) {
                  c && c.push("property " + f + " missing on right object");
                  a = m;
                  break a
                }
                if(!qf(a[f], b[f], c)) {
                  c && c.push("earlier comparisons indicate mismatch at property " + f);
                  a = m;
                  break a
                }
              }
              for(f in b) {
                if(!(f in a)) {
                  c && c.push("property " + f + " missing on left object");
                  a = m;
                  break a
                }
              }
              c && c.push("ascending from object");
              a = j
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
;function Z(a, b) {
  this.Wf = a;
  this.ic = b
}
Z.prototype.Q = function(a, b) {
  return ia(a) && this.constructor == a.constructor && qf(this.ic, a.ic, b)
};
Z.prototype.F = function(a, b) {
  a.push("new ", this.Wf, "(");
  for(var c = "", d = 0;d < this.ic.length;d++) {
    a.push(c), c = ", ", T(this.ic[d], a, b)
  }
  a.push(")")
};
function $(a) {
  I.call(this, a)
}
D($, I);
$.prototype.name = "cw.net.InvalidFrame";
function rf() {
  var a = [];
  this.T(a);
  return a.join("")
}
function sf() {
}
sf.prototype.Q = function(a, b) {
  return!(a instanceof sf) ? m : qf(tf(this), tf(a), b)
};
sf.prototype.F = function(a, b) {
  a.push("<HelloFrame properties=");
  T(tf(this), a, b);
  a.push(">")
};
function tf(a) {
  return[a.ka, a.Ge, a.ge, a.Le, a.Gb, a.td, a.ye, a.we, a.Xc, a.ue, a.$e, a.We, a.Ca, a.dc]
}
sf.prototype.P = rf;
sf.prototype.T = function(a) {
  var b = {};
  b.tnum = this.ka;
  b.ver = this.Ge;
  b.format = this.ge;
  b["new"] = this.Le;
  b.id = this.Gb;
  b.ming = this.td;
  b.pad = this.ye;
  b.maxb = this.we;
  v(this.Xc) && (b.maxt = this.Xc);
  b.maxia = this.ue;
  b.tcpack = this.$e;
  b.eeds = this.We;
  b.sack = this.Ca instanceof Ie ? Ae((new uf(this.Ca)).P()) : this.Ca;
  b.seenack = this.dc instanceof Ie ? Ae((new uf(this.dc)).P()) : this.dc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(ed(b), "H")
};
function vf(a) {
  Z.call(this, "StringFrame", [a]);
  this.vd = a
}
D(vf, Z);
vf.prototype.P = rf;
vf.prototype.T = function(a) {
  a.push(this.vd, " ")
};
function wf(a) {
  Z.call(this, "CommentFrame", [a]);
  this.of = a
}
D(wf, Z);
wf.prototype.P = rf;
wf.prototype.T = function(a) {
  a.push(this.of, "^")
};
function xf(a) {
  Z.call(this, "SeqNumFrame", [a]);
  this.Re = a
}
D(xf, Z);
xf.prototype.P = rf;
xf.prototype.T = function(a) {
  a.push("" + this.Re, "N")
};
function yf(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = Ee;
    if(Ce.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
      a = c;
      break a
    }
    a = k
  }
  if(a == k) {
    return k
  }
  c = [];
  if(b[0]) {
    for(var b = b[0].split(","), d = 0, g = b.length;d < g;d++) {
      var f = De(b[d]);
      if(f == k) {
        return k
      }
      c.push(f)
    }
  }
  return new Ie(a, c)
}
function uf(a) {
  Z.call(this, "SackFrame", [a]);
  this.Ca = a
}
D(uf, Z);
uf.prototype.P = rf;
uf.prototype.T = function(a) {
  var b = this.Ca;
  a.push(b.Sa.join(","), "|", "" + b.Wa);
  a.push("A")
};
function zf(a) {
  Z.call(this, "StreamStatusFrame", [a]);
  this.pe = a
}
D(zf, Z);
zf.prototype.P = rf;
zf.prototype.T = function(a) {
  var b = this.pe;
  a.push(b.Sa.join(","), "|", "" + b.Wa);
  a.push("T")
};
function Af() {
  Z.call(this, "StreamCreatedFrame", [])
}
D(Af, Z);
Af.prototype.P = rf;
Af.prototype.T = function(a) {
  a.push("C")
};
function Bf() {
  Z.call(this, "YouCloseItFrame", [])
}
D(Bf, Z);
Bf.prototype.P = rf;
Bf.prototype.T = function(a) {
  a.push("Y")
};
function Cf(a, b) {
  Z.call(this, "ResetFrame", [a, b]);
  this.Je = a;
  this.Fd = b
}
D(Cf, Z);
Cf.prototype.P = rf;
Cf.prototype.T = function(a) {
  a.push(this.Je, "|", "" + Number(this.Fd), "!")
};
var Df = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Ef(a) {
  Z.call(this, "TransportKillFrame", [a]);
  this.reason = a
}
D(Ef, Z);
Ef.prototype.P = rf;
Ef.prototype.T = function(a) {
  a.push(this.reason, "K")
};
function Ff(a) {
  a || e(new $("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new vf(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = yf(Ae(a)), a == k && e(new $("bad sack")), new uf(a)
  }
  if("N" == b) {
    return a = De(Ae(a)), a == k && e(new $("bad seqNum")), new xf(a)
  }
  if("T" == b) {
    return a = yf(Ae(a)), a == k && e(new $("bad lastSackSeen")), new zf(a)
  }
  if("Y" == b) {
    return 1 != a.length && e(new $("leading garbage")), new Bf
  }
  if("^" == b) {
    return new wf(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && e(new $("leading garbage")), new Af
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && e(new $("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && e(new $("bad applicationLevel")), new Cf(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = Df[a], a == k && e(new $("unknown kill reason: " + a)), new Ef(a)
  }
  e(new $("Invalid frame type " + b))
}
;function Gf(a, b, c, d) {
  this.contentWindow = a;
  this.Rb = b;
  this.ud = c;
  this.Cf = d
}
Gf.prototype.F = function(a, b) {
  a.push("<XDRFrame frameId=");
  T(this.Cf, a, b);
  a.push(", expandedUrl=");
  T(this.Rb, a, b);
  a.push(", streams=");
  T(this.ud, a, b);
  a.push(">")
};
function Hf() {
  this.frames = [];
  this.Vc = new K
}
Hf.prototype.a = S("cw.net.XDRTracker");
function If(a, b) {
  for(var c = Jf, d = 0;d < c.frames.length;d++) {
    var g = c.frames[d], f;
    if(f = 0 == g.ud.length) {
      f = g.Rb;
      var i = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      f = RegExp("^" + i + "$").test(f)
    }
    if(f) {
      return c.a.info("Giving " + U(b) + " existing frame " + U(g)), $c(g)
    }
  }
  d = ze() + ze();
  g = a.replace(/%random%/g, function() {
    return"ml" + Math.floor(ld()) + ("" + Math.floor(ld()))
  });
  f = t.location;
  f instanceof xb || (f = Lb(f));
  g instanceof xb || (g = Lb(g));
  var l = f;
  f = g;
  g = l.O();
  (i = !!f.Da) ? yb(g, f.Da) : i = !!f.Ua;
  if(i) {
    var n = f.Ua;
    zb(g);
    g.Ua = n
  }else {
    i = !!f.pa
  }
  i ? Ab(g, f.pa) : i = f.ib != k;
  n = f.xa;
  if(i) {
    Bb(g, f.ib)
  }else {
    if(i = !!f.xa) {
      if("/" != n.charAt(0) && (l.pa && !l.xa ? n = "/" + n : (l = g.xa.lastIndexOf("/"), -1 != l && (n = g.xa.substr(0, l + 1) + n))), ".." == n || "." == n) {
        n = ""
      }else {
        if(-1 != n.indexOf("./") || -1 != n.indexOf("/.")) {
          for(var l = 0 == n.lastIndexOf("/", 0), n = n.split("/"), p = [], w = 0;w < n.length;) {
            var q = n[w++];
            "." == q ? l && w == n.length && p.push("") : ".." == q ? ((1 < p.length || 1 == p.length && "" != p[0]) && p.pop(), l && w == n.length && p.push("")) : (p.push(q), l = j)
          }
          n = p.join("/")
        }
      }
    }
  }
  i ? Cb(g, n) : i = "" !== f.K.toString();
  i ? Db(g, f.K.toString() ? decodeURIComponent(f.K.toString()) : "") : i = !!f.Ja;
  i && (f = f.Ja, zb(g), g.Ja = f);
  g = g.toString();
  f = ("" + t.location).match(Wa)[3] || k;
  i = g.match(Wa)[3] || k;
  f == i ? (c.a.info("No need to make a real XDRFrame for " + U(b)), c = $c(new Gf(t, g, [b], k))) : ((f = V("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new Rc, c.Vc.set(d, [i, g, b]), c.a.info("Creating new XDRFrame " + U(d) + "for " + U(b)), c = zd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:g + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), f.appendChild(c), c = i);
  return c
}
Hf.prototype.sg = function(a) {
  var b = this.Vc.get(a);
  b || e(Error("Unknown frameId " + U(a)));
  this.Vc.remove(b);
  var c = b[0], a = new Gf(V("minerva-xdrframe-" + a).contentWindow || (V("minerva-xdrframe-" + a).contentDocument || V("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (V("minerva-xdrframe-" + a).contentDocument || V("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.X(a)
};
var Jf = new Hf;
t.__XHRTracker_xdrFrameLoaded = B(Jf.sg, Jf);
var Kf;
Kf = m;
var Lf = Da();
Lf && (-1 != Lf.indexOf("Firefox") || -1 != Lf.indexOf("Camino") || -1 != Lf.indexOf("iPhone") || -1 != Lf.indexOf("iPod") || -1 != Lf.indexOf("iPad") || -1 != Lf.indexOf("Android") || -1 != Lf.indexOf("Chrome") && (Kf = j));
var Mf = Kf;
function Nf(a, b, c, d, g, f) {
  Rc.call(this, g, f);
  this.se = a;
  this.Gc = [];
  this.Ud = !!b;
  this.zf = !!c;
  this.pf = !!d;
  for(b = 0;b < a.length;b++) {
    Xc(a[b], B(this.Zd, this, b, j), B(this.Zd, this, b, m))
  }
  0 == a.length && !this.Ud && this.X(this.Gc)
}
D(Nf, Rc);
Nf.prototype.Ae = 0;
Nf.prototype.Zd = function(a, b, c) {
  this.Ae++;
  this.Gc[a] = [b, c];
  this.ra || (this.Ud && b ? this.X([a, c]) : this.zf && !b ? this.Xa(c) : this.Ae == this.se.length && this.X(this.Gc));
  this.pf && !b && (c = k);
  return c
};
Nf.prototype.Xa = function(a) {
  Nf.e.Xa.call(this, a);
  db(this.se, function(a) {
    a.cancel()
  })
};
function Of(a, b) {
  this.rg = a;
  this.ve = b
}
Of.prototype.Sc = 0;
Of.prototype.fc = 0;
Of.prototype.Lc = m;
function Pf(a) {
  var b = [];
  if(a.Lc) {
    return[b, 2]
  }
  var c = a.Sc, d = a.rg.responseText;
  for(a.Sc = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var g = d.substr(a.fc, c - a.fc), g = g.replace(/\r$/, "");
    if(g.length > a.ve) {
      return a.Lc = j, [b, 2]
    }
    b.push(g);
    a.fc = c += 1
  }
  return a.Sc - a.fc - 1 > a.ve ? (a.Lc = j, [b, 2]) : [b, 1]
}
;function Qf(a, b, c) {
  this.C = b;
  this.W = a;
  this.Ec = c
}
D(Qf, L);
s = Qf.prototype;
s.a = S("cw.net.XHRMaster");
s.Aa = -1;
s.Wc = function(a, b, c) {
  this.Ec.__XHRSlave_makeRequest(this.W, a, b, c)
};
s.ta = o("Aa");
s.$c = function(a, b) {
  1 != b && O(this.a, U(this.W) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  ef(this.C);
  ff(this.C, a)
};
s.ad = function(a) {
  Q(this.a, "ongotheaders_: " + U(a));
  var b = k;
  "Content-Length" in a && (b = De(a["Content-Length"]));
  a = this.C;
  Q(a.a, a.l() + " got Content-Length: " + b);
  a.ca == Rf && (b == k && (P(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Sf(a, 2E3 + 1E3 * (b / 3072)))
};
s.bd = function(a) {
  1 != a && Q(this.a, this.C.l() + "'s XHR's readyState is " + a);
  this.Aa = a;
  2 <= this.Aa && ef(this.C)
};
s.Zc = function() {
  this.C.b()
};
s.c = function() {
  Qf.e.c.call(this);
  delete Tf.ia[this.W];
  this.Ec.__XHRSlave_dispose(this.W);
  delete this.Ec
};
function Uf() {
  this.ia = {}
}
D(Uf, L);
s = Uf.prototype;
s.a = S("cw.net.XHRMasterTracker");
s.Fc = function(a, b) {
  var c = "_" + ze(), d = new Qf(c, a, b);
  return this.ia[c] = d
};
s.$c = function(a, b, c) {
  if(Ha) {
    for(var d = [], g = 0, f = b.length;g < f;g++) {
      d[g] = b[g]
    }
    b = d
  }else {
    b = kb(b)
  }
  (d = this.ia[a]) ? d.$c(b, c) : O(this.a, "onframes_: no master for " + U(a))
};
s.ad = function(a, b) {
  var c = this.ia[a];
  c ? c.ad(b) : O(this.a, "ongotheaders_: no master for " + U(a))
};
s.bd = function(a, b) {
  var c = this.ia[a];
  c ? c.bd(b) : O(this.a, "onreadystatechange_: no master for " + U(a))
};
s.Zc = function(a) {
  var b = this.ia[a];
  b ? (delete this.ia[b.W], b.Zc()) : O(this.a, "oncomplete_: no master for " + U(a))
};
s.c = function() {
  Uf.e.c.call(this);
  for(var a = Za(this.ia);a.length;) {
    a.pop().b()
  }
  delete this.ia
};
var Tf = new Uf;
t.__XHRMaster_onframes = B(Tf.$c, Tf);
t.__XHRMaster_oncomplete = B(Tf.Zc, Tf);
t.__XHRMaster_ongotheaders = B(Tf.ad, Tf);
t.__XHRMaster_onreadystatechange = B(Tf.bd, Tf);
function Vf(a, b, c) {
  this.aa = a;
  this.host = b;
  this.port = c
}
function Wf(a, b, c) {
  this.host = a;
  this.port = b;
  this.jg = c
}
function Xf(a, b) {
  b || (b = a);
  this.aa = a;
  this.Ea = b
}
Xf.prototype.F = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  T(this.aa, a, b);
  a.push(", secondaryUrl=");
  T(this.Ea, a, b);
  a.push(">")
};
function Yf(a, b, c, d) {
  this.aa = a;
  this.Fe = b;
  this.Ea = c;
  this.Qe = d;
  (!(0 == this.aa.indexOf("http://") || 0 == this.aa.indexOf("https://")) || !(0 == this.Ea.indexOf("http://") || 0 == this.Ea.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Fe.location.href;
  Xa(this.aa, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Qe.location.href;
  Xa(this.Ea, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
Yf.prototype.F = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  T(this.aa, a, b);
  a.push(", secondaryUrl=");
  T(this.Ea, a, b);
  a.push(">")
};
var Zf = new wf(";)]}");
function bg() {
}
bg.prototype.Wd = r(1);
function cg(a) {
  t.setTimeout(function() {
    v(a.message) && a.stack && (a.message += "\n" + a.stack);
    e(a)
  }, 0)
}
function dg(a) {
  this.fg = a
}
dg.prototype.F = function(a, b) {
  a.push("<UserContext for ");
  T(this.fg, a, b);
  a.push(">")
};
dg.prototype.toString = function() {
  return U(this)
};
function eg(a, b, c, d) {
  Z.call(this, "TransportInfo", [a, b, c, d]);
  this.ka = a;
  this.wh = b;
  this.zh = c;
  this.Ah = d
}
D(eg, Z);
function fg(a, b, c) {
  this.t = a;
  this.gg = b ? b : new bg;
  this.p = c ? c : cd;
  this.Hb = new oc;
  this.Gb = ze() + ze();
  this.ba = new Je;
  this.Qc = new Le;
  this.Ib = k;
  this.uc = [];
  this.mb = new dg(this);
  this.jf = B(this.mg, this);
  G && (this.Ib = gc(t, "load", this.Xf, m, this))
}
D(fg, L);
s = fg.prototype;
s.a = S("cw.net.ClientStream");
s.qe = new Ie(-1, []);
s.re = new Ie(-1, []);
s.Nf = 50;
s.Mf = 1048576;
s.dd = k;
s.cd = k;
s.ed = k;
s.fd = k;
s.onreset = k;
s.De = k;
s.jb = k;
s.rd = m;
s.kd = m;
s.d = "1_UNSTARTED";
s.xd = -1;
s.h = k;
s.s = k;
s.Bb = k;
s.sd = 0;
s.Ee = 0;
s.Pe = 0;
s.F = function(a, b) {
  a.push("<ClientStream id=");
  T(this.Gb, a, b);
  a.push(", state=", "" + this.d);
  a.push(", primary=");
  T(this.h, a, b);
  a.push(", secondary=");
  T(this.s, a, b);
  a.push(", resetting=");
  T(this.Bb, a, b);
  a.push(">")
};
s.toString = function() {
  return U(this)
};
function gg(a) {
  var b = [-1];
  a.h && b.push(a.h.gb);
  a.s && b.push(a.s.gb);
  return Math.max.apply(Math.max, b)
}
function hg(a) {
  if(!("3_STARTED" > a.d)) {
    ig(a);
    var b = 0 != a.ba.J.r(), c = Me(a.Qc), d = !c.Q(a.re) && !(a.h && c.Q(a.h.eb) || a.s && c.Q(a.s.eb)), g = gg(a);
    if((b = b && g < a.ba.Ia) || d) {
      var f = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.h.Ha ? (R(a.a, "tryToSend_: writing " + f + " to primary"), d && (d = a.h, c != d.eb && (!d.ja && !d.v.length && jg(d), d.v.push(new uf(c)), d.eb = c)), b && kg(a.h, a.ba, g + 1), a.h.ha()) : a.s == k ? a.rd ? (R(a.a, "tryToSend_: creating secondary to send " + f), a.s = lg(a, m, j), a.s && (b && kg(a.s, a.ba, g + 1), a.s.ha())) : (R(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.kd = j) : R(a.a, "tryToSend_: need to send " + f + ", but can't right now")
    }
  }
}
function ig(a) {
  a.jb != k && (a.p.B.clearTimeout(a.jb), a.jb = k)
}
s.mg = function() {
  this.jb = k;
  hg(this)
};
function mg(a) {
  a.jb == k && (a.jb = a.p.B.setTimeout(a.jf, 6))
}
s.Xf = function() {
  this.Ib = k;
  if(this.h && this.h.bb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.h;
    a.wc = j;
    a.b()
  }
  this.s && this.s.bb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.s, a.wc = j, a.b())
};
function ng(a, b) {
  var c;
  v(c) || (c = j);
  "3_STARTED" < a.d && e(Error("sendString: Can't send in state " + a.d));
  c && (y(b) || e(Error("sendString: not a string: " + U(b))), /^([ -~]*)$/.test(b) || e(Error("sendString: string has illegal chars: " + U(b))));
  a.ba.append(b);
  mg(a)
}
function lg(a, b, c) {
  var d;
  a.t instanceof Yf ? d = 1 == a.gg.Wd() ? Rf : og : a.t instanceof Wf ? d = pg : e(Error("Don't support endpoint " + U(a.t)));
  a.xd += 1;
  b = new qg(a.p, a, a.xd, d, a.t, b);
  R(a.a, "Created: " + b.l());
  if(c) {
    if(a.ed) {
      c = new eg(b.ka, b.ma, b.Ba, b.Ha);
      try {
        a.ed.call(a.mb, c)
      }catch(g) {
        P(a.a, "ontransportcreated raised uncaught exception", g), cg(g)
      }
    }
    if(rg(a)) {
      return k
    }
  }
  a.Hb.add(b);
  return b
}
function sg(a, b, c) {
  var d = new tg(a.p, a, b, c);
  R(a.a, "Created: " + d.l() + ", delay=" + b + ", times=" + c);
  a.Hb.add(d);
  return d
}
function ug(a, b) {
  a.Hb.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  Q(a.a, "Offline: " + b.l());
  var c = "4_RESETTING" == a.d && b.cf;
  if(b instanceof qg && !c) {
    if(a.fd) {
      var d = new eg(b.ka, b.ma, b.Ba, b.Ha);
      try {
        a.fd.call(a.mb, d)
      }catch(g) {
        P(a.a, "ontransportdestroyed raised uncaught exception", g), cg(g)
      }
    }
    if(rg(a)) {
      return
    }
  }
  a.sd = b.ya ? a.sd + b.ya : 0;
  1 <= a.sd && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), vg(a, "stream penalty reached limit", m), a.b());
  if("3_STARTED" < a.d) {
    c ? (Q(a.a, "Disposing because resettingTransport_ is done."), a.b()) : Q(a.a, "Not creating a transport because ClientStream is in state " + a.d)
  }else {
    c = b instanceof tg;
    if(!c && b.wc) {
      var f = G ? Mf ? [0, 1] : [9, 20] : [0, 0], c = f[0], d = f[1];
      R(a.a, "getDelayForNextTransport_: " + U({delay:c, times:d}))
    }else {
      if(d = b.Kd(), b == a.h ? d ? f = ++a.Ee : c || (f = a.Ee = 0) : d ? f = ++a.Pe : c || (f = a.Pe = 0), c || !f) {
        d = c = 0, R(a.a, "getDelayForNextTransport_: " + U({count:f, delay:c, times:d}))
      }else {
        var i = 2E3 * Math.min(f, 3), l = Math.floor(4E3 * Math.random()) - 2E3, n = Math.max(0, b.Ze - b.yd), d = (c = Math.max(0, i + l - n)) ? 1 : 0;
        R(a.a, "getDelayForNextTransport_: " + U({count:f, base:i, variance:l, oldDuration:n, delay:c, times:d}))
      }
    }
    c = [c, d];
    f = c[0];
    c = c[1];
    if(b == a.h) {
      a.h = k;
      if(c) {
        a.h = sg(a, f, c)
      }else {
        f = gg(a);
        a.h = lg(a, j, j);
        if(!a.h) {
          return
        }
        kg(a.h, a.ba, f + 1)
      }
      a.h.ha()
    }else {
      b == a.s && (a.s = k, c ? (a.s = sg(a, f, c), a.s.ha()) : hg(a))
    }
  }
}
function vg(a, b, c) {
  if(a.onreset) {
    try {
      a.onreset.call(a.mb, b, c)
    }catch(d) {
      P(a.a, "onreset raised uncaught exception", d), cg(d)
    }
  }
}
s.reset = function(a) {
  "3_STARTED" < this.d && e(Error("reset: Can't send reset in state " + this.d));
  ig(this);
  0 != this.ba.J.r() && P(this.a, "reset: strings in send queue will never be sent: " + U(this.ba));
  this.d = "4_RESETTING";
  this.h && this.h.Ha ? (this.a.info("reset: Sending ResetFrame over existing primary."), wg(this.h, a), this.h.ha()) : (this.h && (Q(this.a, "reset: Disposing primary before sending ResetFrame."), this.h.b()), this.s && (Q(this.a, "reset: Disposing secondary before sending ResetFrame."), this.s.b()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Bb = lg(this, m, m), wg(this.Bb, a), this.Bb.ha());
  vg(this, a, j)
};
function rg(a) {
  return"4_RESETTING" == a.d || a.ea
}
s.Rd = function(a) {
  O(this.a, "Failed to start " + U(this) + "; error was " + U(a.message));
  this.b();
  return k
};
s.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  "1_UNSTARTED" != this.d && e(Error("ClientStream.start: " + U(this) + " already started"));
  this.cd && this.cd(this);
  this.d = "2_WAITING_RESOURCES";
  if(this.t instanceof Xf) {
    var a = If(this.t.aa, this), b = If(this.t.Ea, this), a = new Nf([a, b], m, j);
    Xc(a, function(a) {
      return fb(a, function(a) {
        return a[1]
      })
    }, k, h);
    b = B(this.xf, this);
    Xc(a, b, k, h);
    b = B(this.Rd, this);
    Xc(a, k, b, h)
  }else {
    if(this.t instanceof Vf) {
      if(He) {
        this.Td()
      }else {
        a = this.p;
        b = this.t.aa;
        if(kf.length) {
          a = lf()
        }else {
          b = new $e(b + "FlashConnector.swf?cb=4bdfc178fc0e508c0cd5efc3fdb09920");
          b.Gd = "#777777";
          af(b, 300, 30);
          var c = V("minerva-elements");
          c || e(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
          var d = V("minerva-elements-FlashConnectorSwf");
          d || (d = zd("div", {id:"minerva-elements-FlashConnectorSwf"}), c.appendChild(d));
          var g = a.B, f;
          var a = d, i, l = function() {
            i && delete t.__loadFlashObject_callbacks[i]
          };
          if(Ha && !H("1.8.1.20")) {
            f = ad(new bf("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
          }else {
            if(0 <= ya(Ze, "9")) {
              var n;
              i = "_" + ze();
              var p = new Rc(l);
              t.__loadFlashObject_callbacks[i] = function() {
                g.setTimeout(function() {
                  l();
                  p.X(V(n))
                }, 0)
              };
              b.Sb.set("onloadcallback", '__loadFlashObject_callbacks["' + i + '"]()');
              n = Td(b);
              Vd(b, a);
              f = p
            }else {
              f = ad(new bf("Need Flash Player 9+; had " + (Ze ? Ze : "none")))
            }
          }
          var w = g.setTimeout(function() {
            f.cancel()
          }, 8E3), a = function(a) {
            g.clearTimeout(w);
            return a
          };
          Xc(f, a, a, h);
          Ge = f;
          a = lf();
          Xc(Ge, mf, nf)
        }
        var q = this;
        Xc(a, function(a) {
          He || (He = new hf(q.p, a));
          return k
        }, k, h);
        b = B(this.Td, this);
        Xc(a, b, k, h);
        b = B(this.Rd, this);
        Xc(a, k, b, h)
      }
    }else {
      xg(this)
    }
  }
};
s.xf = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Rb, g = a[1].Rb;
  this.uc.push(a[0]);
  this.uc.push(a[1]);
  this.t = new Yf(d, b, g, c);
  xg(this)
};
s.Td = function() {
  this.t = new Wf(this.t.host, this.t.port, He);
  xg(this)
};
function xg(a) {
  a.d = "3_STARTED";
  a.h = lg(a, j, j);
  a.h && (kg(a.h, a.ba, k), a.h.ha())
}
s.c = function() {
  this.a.info(U(this) + " in disposeInternal.");
  ig(this);
  this.d = "5_DISCONNECTED";
  for(var a = this.Hb.D(), b = 0;b < a.length;b++) {
    a[b].b()
  }
  for(a = 0;a < this.uc.length;a++) {
    jb(this.uc[a].ud, this)
  }
  G && this.Ib && (jc(this.Ib), this.Ib = k);
  this.De && this.De.call(this.mb);
  delete this.Hb;
  delete this.h;
  delete this.s;
  delete this.Bb;
  delete this.mb;
  fg.e.c.call(this)
};
var Rf = 1, og = 2, pg = 3;
function qg(a, b, c, d, g, f) {
  this.p = a;
  this.A = b;
  this.ka = c;
  this.ca = d;
  this.t = g;
  this.v = [];
  this.ma = f;
  this.Ha = !this.bb();
  this.Ba = this.ca != Rf;
  this.hf = B(this.hg, this)
}
D(qg, L);
s = qg.prototype;
s.a = S("cw.net.ClientTransport");
s.k = k;
s.yd = k;
s.Ze = k;
s.jc = k;
s.ja = m;
s.rc = m;
s.eb = k;
s.Tb = 0;
s.gb = -1;
s.hc = -1;
s.cf = m;
s.wc = m;
s.ya = 0;
s.ub = m;
s.F = function(a) {
  a.push("<ClientTransport #", "" + this.ka, ", becomePrimary=", "" + this.ma, ">")
};
s.l = function() {
  return(this.ma ? "Prim. T#" : "Sec. T#") + this.ka
};
s.Kd = function() {
  return!(!this.ub && this.Tb)
};
s.bb = function() {
  return this.ca == Rf || this.ca == og
};
function yg(a, b) {
  J.sort.call(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  } || nb);
  a: {
    var c = a.A, d = !a.Ba, g, f = c.Qc;
    g = c.Nf;
    for(var i = c.Mf, l = [], n = m, p = 0, w = b.length;p < w;p++) {
      var q = b[p], x = q[0], q = q[1];
      if(x == f.Oa + 1) {
        f.Oa += 1;
        for(l.push(q);;) {
          x = f.Oa + 1;
          q = f.Ga.get(x, Ne);
          if(q === Ne) {
            break
          }
          l.push(q[0]);
          f.Ga.remove(x);
          f.M -= q[1];
          f.Oa = x
        }
      }else {
        if(!(x <= f.Oa)) {
          if(g != k && f.Ga.r() >= g) {
            n = j;
            break
          }
          var A = Fe(q);
          if(i != k && f.M + A > i) {
            n = j;
            break
          }
          f.Ga.set(x, [q, A]);
          f.M += A
        }
      }
    }
    f.Ga.Na() && f.Ga.clear();
    g = [l, n];
    f = g[0];
    g = g[1];
    if(f) {
      for(i = 0;i < f.length;i++) {
        l = f[i];
        if(c.dd) {
          try {
            c.dd.call(c.mb, l)
          }catch(Dc) {
            P(c.a, "onstring raised uncaught exception", Dc), cg(Dc)
          }
        }
        if(rg(c)) {
          break a
        }
      }
    }
    d || mg(c);
    !rg(c) && g && (O(a.a, a.l() + "'s peer caused rwin overflow."), a.b())
  }
}
function zg(a, b, c) {
  try {
    var d = Ff(b);
    a.Tb += 1;
    Q(a.a, a.l() + " RECV " + U(d));
    var g;
    1 == a.Tb && !d.Q(Zf) && a.bb() ? (P(a.a, a.l() + " is closing soon because got bad preamble: " + U(d)), g = j) : g = m;
    if(g) {
      return j
    }
    if(d instanceof vf) {
      if(!/^([ -~]*)$/.test(d.vd)) {
        return a.ub = j
      }
      a.hc += 1;
      c.push([a.hc, d.vd])
    }else {
      if(d instanceof uf) {
        var f = a.A, i = d.Ca;
        f.qe = i;
        var l = f.ba, n = i.Wa, c = m;
        n > l.Ia && (c = j);
        for(var p = Ke(l).concat(), d = 0;d < p.length;d++) {
          var w = p[d];
          if(w > n) {
            break
          }
          var q = l.J.get(w)[1];
          l.J.remove(w);
          l.M -= q
        }
        for(d = 0;d < i.Sa.length;d++) {
          var x = i.Sa[d];
          x > l.Ia && (c = j);
          l.J.da(x) && (q = l.J.get(x)[1], l.J.remove(x), l.M -= q)
        }
        l.J.Na() && l.J.clear();
        if(c) {
          return P(a.a, a.l() + " is closing soon because got bad SackFrame"), a.ub = j
        }
      }else {
        if(d instanceof xf) {
          a.hc = d.Re - 1
        }else {
          if(d instanceof zf) {
            a.A.re = d.pe
          }else {
            if(d instanceof Bf) {
              return R(a.a, a.l() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof Ef) {
              return a.ub = j, "stream_attach_failure" == d.reason ? a.ya += 1 : "acked_unsent_strings" == d.reason && (a.ya += 0.5), R(a.a, a.l() + " is closing soon because got " + U(d)), j
            }
            if(!(d instanceof wf)) {
              if(d instanceof Af) {
                var A = a.A, Dc = !a.Ba;
                R(A.a, "Stream is now confirmed to exist at server.");
                A.rd = j;
                A.kd && !Dc && (A.kd = m, hg(A))
              }else {
                if(c.length) {
                  yg(a, c);
                  if(!fa(c)) {
                    for(var Yd = c.length - 1;0 <= Yd;Yd--) {
                      delete c[Yd]
                    }
                  }
                  c.length = 0
                }
                if(d instanceof Cf) {
                  var $f = a.A;
                  vg($f, d.Je, d.Fd);
                  $f.b();
                  return j
                }
                e(Error(a.l() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(ag) {
    return ag instanceof $ || e(ag), P(a.a, a.l() + " is closing soon because got InvalidFrame: " + U(b)), a.ub = j
  }
  return m
}
function ff(a, b) {
  a.rc = j;
  try {
    for(var c = m, d = [], g = 0, f = b.length;g < f;g++) {
      if(a.ea) {
        a.a.info(a.l() + " returning from loop because we're disposed.");
        return
      }
      if(c = zg(a, b[g], d)) {
        break
      }
    }
    d.length && yg(a, d);
    a.rc = m;
    a.v.length && a.ha();
    c && (R(a.a, a.l() + " closeSoon is true.  Frames were: " + U(b)), a.b())
  }finally {
    a.rc = m
  }
}
s.hg = function() {
  P(this.a, this.l() + " timed out due to lack of connection or no data being received.");
  this.b()
};
function Ag(a) {
  a.jc != k && (a.p.B.clearTimeout(a.jc), a.jc = k)
}
function Sf(a, b) {
  Ag(a);
  b = Math.round(b);
  a.jc = a.p.B.setTimeout(a.hf, b);
  Q(a.a, a.l() + "'s receive timeout set to " + b + " ms.")
}
function ef(a) {
  a.ca != Rf && (a.ca == pg || a.ca == og ? Sf(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ca)))
}
function jg(a) {
  var b = new sf;
  b.ka = a.ka;
  b.Ge = 2;
  b.ge = 2;
  a.A.rd || (b.Le = j);
  b.Gb = a.A.Gb;
  b.td = a.Ba;
  b.td && (b.ye = 4096);
  b.we = 3E5;
  b.ue = a.Ba ? Math.floor(10) : 0;
  b.$e = m;
  a.ma && (b.We = k, b.Xc = Math.floor((a.Ba ? 358E4 : 25E3) / 1E3));
  b.Ca = Me(a.A.Qc);
  b.dc = a.A.qe;
  a.v.push(b);
  a.eb = b.Ca
}
function gf(a, b) {
  b && (a.ya += 0.5);
  a.b()
}
s.ha = function() {
  this.ja && !this.Ha && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.rc) {
    R(this.a, this.l() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.ja;
    this.ja = j;
    !a && !this.v.length && jg(this);
    for(a = 0;a < this.v.length;a++) {
      Q(this.a, this.l() + " SEND " + U(this.v[a]))
    }
    if(this.bb()) {
      for(var a = [], b = 0, c = this.v.length;b < c;b++) {
        this.v[b].T(a), a.push("\n")
      }
      this.v = [];
      a = a.join("");
      b = this.ma ? this.t.aa : this.t.Ea;
      this.k = Tf.Fc(this, this.ma ? this.t.Fe : this.t.Qe);
      this.yd = this.p.B === Qc ? C() : this.p.B.getTime();
      this.k.Wc(b, "POST", a);
      Sf(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Ba ? 0 : this.ma ? 25E3 : 0))
    }else {
      if(this.ca == pg) {
        a = [];
        b = 0;
        for(c = this.v.length;b < c;b++) {
          a.push(this.v[b].P())
        }
        this.v = [];
        this.k ? this.k.Jb(a) : (b = this.t, this.k = new jf(this), c = b.jg.Fc(this.k), this.k.qc = c, this.yd = this.p.B === Qc ? C() : this.p.B.getTime(), this.k.Dc(b.host, b.port), this.k.ea || (this.k.Jb(a), this.k.ea || Sf(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.ca))
      }
    }
  }
};
function kg(a, b, c) {
  !a.ja && !a.v.length && jg(a);
  for(var d = Math.max(c, a.gb + 1), g = Ke(b), c = [], f = 0;f < g.length;f++) {
    var i = g[f];
    (d == k || i >= d) && c.push([i, b.J.get(i)[0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    f = c[b], g = f[0], f = f[1], (-1 == a.gb || a.gb + 1 != g) && a.v.push(new xf(g)), a.v.push(new vf(f)), a.gb = g
  }
}
s.c = function() {
  this.a.info(this.l() + " in disposeInternal.");
  qg.e.c.call(this);
  this.Ze = this.p.B === Qc ? C() : this.p.B.getTime();
  this.v = [];
  Ag(this);
  this.k && this.k.b();
  var a = this.A;
  this.A = k;
  ug(a, this)
};
function wg(a, b) {
  !a.ja && !a.v.length && jg(a);
  a.v.push(new Cf(b, j));
  a.cf = j
}
function tg(a, b, c, d) {
  this.p = a;
  this.A = b;
  this.Qd = c;
  this.Md = d
}
D(tg, L);
s = tg.prototype;
s.ja = m;
s.Ha = m;
s.Yb = k;
s.eb = k;
s.a = S("cw.net.DoNothingTransport");
function Bg(a) {
  a.Yb = a.p.B.setTimeout(function() {
    a.Yb = k;
    a.Md--;
    a.Md ? Bg(a) : a.b()
  }, a.Qd)
}
s.ha = function() {
  this.ja && !this.Ha && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.ja = j;
  Bg(this)
};
s.F = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.Qd, ">")
};
s.bb = r(m);
s.l = r("Wast. T");
s.Kd = r(m);
s.c = function() {
  this.a.info(this.l() + " in disposeInternal.");
  tg.e.c.call(this);
  this.Yb != k && this.p.B.clearTimeout(this.Yb);
  var a = this.A;
  this.A = k;
  ug(a, this)
};
/*

 linkify - v0.3 - 6/27/2009
 http://benalman.com/code/test/js-linkify/

 Copyright (c) 2009 "Cowboy" Ben Alman
 Licensed under the MIT license
 http://benalman.com/about/license/

 Some regexps adapted from http://userscripts.org/scripts/review/7122
*/
var Cg, Dg, Eg, Fg;
Cg = RegExp("(?:\\b[a-z\\d.-]+://[^<>\\s]+|\\b(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:[;/][^#?<>\\s]*)?(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w)|(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w))", 
"ig");
Dg = /^[a-z\d.-]+:\/\//i;
Eg = {"'":"`", ">":"<", ")":"(", "]":"[", "}":"{", "\u00bb":"\u00ab", "\u203a":"\u2039"};
Fg = {X:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, Ie:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
function Gg(a) {
  a = "" + a;
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
;function Hg() {
}
Hg.prototype.Kb = k;
var Ig;
function Jg() {
}
D(Jg, Hg);
function Kg(a) {
  return(a = Lg(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Mg(a) {
  var b = {};
  Lg(a) && (b[0] = j, b[1] = j);
  return b
}
function Lg(a) {
  if(!a.he && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.he = d
      }catch(g) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.he
}
Ig = new Jg;
function Ng(a) {
  this.headers = new K;
  this.nb = a || k
}
D(Ng, Pc);
Ng.prototype.a = S("goog.net.XhrIo");
var Og = /^https?$/i;
s = Ng.prototype;
s.la = m;
s.i = k;
s.vc = k;
s.Uc = "";
s.oe = "";
s.wb = 0;
s.xb = "";
s.Hc = m;
s.ac = m;
s.Pc = m;
s.La = m;
s.sc = 0;
s.Ta = k;
s.Oe = "";
s.pg = m;
s.send = function(a, b, c, d) {
  this.i && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Uc = a;
  this.xb = "";
  this.wb = 0;
  this.oe = b;
  this.Hc = m;
  this.la = j;
  this.i = this.nb ? Kg(this.nb) : Kg(Ig);
  this.vc = this.nb ? this.nb.Kb || (this.nb.Kb = Mg(this.nb)) : Ig.Kb || (Ig.Kb = Mg(Ig));
  this.i.onreadystatechange = B(this.Ce, this);
  try {
    Q(this.a, Pg(this, "Opening Xhr")), this.Pc = j, this.i.open(b, a, j), this.Pc = m
  }catch(g) {
    Q(this.a, Pg(this, "Error opening Xhr: " + g.message));
    Qg(this, g);
    return
  }
  var a = c || "", f = this.headers.O();
  d && rb(d, function(a, b) {
    f.set(b, a)
  });
  "POST" == b && !f.da("Content-Type") && f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  rb(f, function(a, b) {
    this.i.setRequestHeader(b, a)
  }, this);
  this.Oe && (this.i.responseType = this.Oe);
  "withCredentials" in this.i && (this.i.withCredentials = this.pg);
  try {
    this.Ta && (Qc.clearTimeout(this.Ta), this.Ta = k), 0 < this.sc && (Q(this.a, Pg(this, "Will abort after " + this.sc + "ms if incomplete")), this.Ta = Qc.setTimeout(B(this.ig, this), this.sc)), Q(this.a, Pg(this, "Sending request")), this.ac = j, this.i.send(a), this.ac = m
  }catch(i) {
    Q(this.a, Pg(this, "Send error: " + i.message)), Qg(this, i)
  }
};
s.ig = function() {
  "undefined" != typeof ba && this.i && (this.xb = "Timed out after " + this.sc + "ms, aborting", this.wb = 8, Q(this.a, Pg(this, this.xb)), this.dispatchEvent("timeout"), this.abort(8))
};
function Qg(a, b) {
  a.la = m;
  a.i && (a.La = j, a.i.abort(), a.La = m);
  a.xb = b;
  a.wb = 5;
  Rg(a);
  Sg(a)
}
function Rg(a) {
  a.Hc || (a.Hc = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
s.abort = function(a) {
  this.i && this.la && (Q(this.a, Pg(this, "Aborting")), this.la = m, this.La = j, this.i.abort(), this.La = m, this.wb = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Sg(this))
};
s.c = function() {
  this.i && (this.la && (this.la = m, this.La = j, this.i.abort(), this.La = m), Sg(this, j));
  Ng.e.c.call(this)
};
s.Ce = function() {
  !this.Pc && !this.ac && !this.La ? this.Rf() : Tg(this)
};
s.Rf = function() {
  Tg(this)
};
function Tg(a) {
  if(a.la && "undefined" != typeof ba) {
    if(a.vc[1] && 4 == a.ta() && 2 == Ug(a)) {
      Q(a.a, Pg(a, "Local request error detected and ignored"))
    }else {
      if(a.ac && 4 == a.ta()) {
        Qc.setTimeout(B(a.Ce, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.ta()) {
          Q(a.a, Pg(a, "Request complete"));
          a.la = m;
          try {
            var b = Ug(a), c, d;
            a: {
              switch(b) {
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
                  d = j;
                  break a;
                default:
                  d = m
              }
            }
            if(!(c = d)) {
              var g;
              if(g = 0 === b) {
                var f = ("" + a.Uc).match(Wa)[1] || k;
                if(!f && self.location) {
                  var i = self.location.protocol, f = i.substr(0, i.length - 1)
                }
                g = !Og.test(f ? f.toLowerCase() : "")
              }
              c = g
            }
            if(c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success")
            }else {
              a.wb = 6;
              var l;
              try {
                l = 2 < a.ta() ? a.i.statusText : ""
              }catch(n) {
                Q(a.a, "Can not get status: " + n.message), l = ""
              }
              a.xb = l + " [" + Ug(a) + "]";
              Rg(a)
            }
          }finally {
            Sg(a)
          }
        }
      }
    }
  }
}
function Sg(a, b) {
  if(a.i) {
    var c = a.i, d = a.vc[0] ? u : k;
    a.i = k;
    a.vc = k;
    a.Ta && (Qc.clearTimeout(a.Ta), a.Ta = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(g) {
      O(a.a, "Problem encountered resetting onreadystatechange: " + g.message)
    }
  }
}
s.ke = function() {
  return!!this.i
};
s.ta = function() {
  return this.i ? this.i.readyState : 0
};
function Ug(a) {
  try {
    return 2 < a.ta() ? a.i.status : -1
  }catch(b) {
    return P(a.a, "Can not get status: " + b.message), -1
  }
}
s.getResponseHeader = function(a) {
  return this.i && 4 == this.ta() ? this.i.getResponseHeader(a) : h
};
function Pg(a, b) {
  return b + " [" + a.oe + " " + a.Uc + " " + Ug(a) + "]"
}
;var Vg = !(F || G && !H("420+"));
function Wg(a, b) {
  this.tc = a;
  this.W = b
}
D(Wg, L);
s = Wg.prototype;
s.k = k;
s.Aa = -1;
s.Xd = m;
s.fe = "Content-Length Server Date Expires Keep-Alive Content-Type Transfer-Encoding Cache-Control".split(" ");
function Xg(a) {
  var b = Pf(a.Od), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.W, c, b), 1 != b && a.b()) : a.b()
}
s.If = function() {
  Xg(this);
  if(!this.ea) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.W);
    this.b()
  }
};
s.Vf = function() {
  var a = t.parent;
  if(a) {
    this.Aa = this.k.ta();
    if(2 <= this.Aa && !this.Xd) {
      for(var b = new K, c = this.fe.length;c--;) {
        var d = this.fe[c];
        try {
          b.set(d, this.k.i.getResponseHeader(d))
        }catch(g) {
        }
      }
      if(b.r() && (this.Xd = j, a.__XHRMaster_ongotheaders(this.W, wb(b)), this.ea)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.W, this.Aa);
    Vg && 3 == this.Aa && Xg(this)
  }else {
    this.b()
  }
};
s.Wc = function(a, b, c) {
  this.k = new Ng;
  N(this.k, "readystatechange", B(this.Vf, this));
  N(this.k, "complete", B(this.If, this));
  this.k.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Od = new Of(this.k.i, 1048576)
};
s.c = function() {
  Wg.e.c.call(this);
  delete this.Od;
  this.k && this.k.b();
  delete this.tc.Fb[this.W];
  delete this.tc
};
function Yg() {
  this.Fb = {}
}
D(Yg, L);
Yg.prototype.Lf = function(a, b, c, d) {
  var g = new Wg(this, a);
  this.Fb[a] = g;
  g.Wc(b, c, d)
};
Yg.prototype.tf = function(a) {
  (a = this.Fb[a]) && a.b()
};
Yg.prototype.c = function() {
  Yg.e.c.call(this);
  for(var a = Za(this.Fb);a.length;) {
    a.pop().b()
  }
  delete this.Fb
};
var Zg = new Yg;
t.__XHRSlave_makeRequest = B(Zg.Lf, Zg);
t.__XHRSlave_dispose = B(Zg.tf, Zg);
var $g = S("cw.net.demo");
function ah() {
}
ah.prototype.Wd = function() {
  return Boolean(Number((new xb(document.location)).K.get("httpStreaming", "0"))) ? 2 : 1
};
function bh() {
  this.Ke = C()
}
var ch = new bh;
bh.prototype.set = aa("Ke");
bh.prototype.reset = function() {
  this.set(C())
};
bh.prototype.get = o("Ke");
function dh(a) {
  this.hd = a || "";
  this.dg = ch
}
dh.prototype.$f = j;
dh.prototype.bg = j;
dh.prototype.ag = j;
dh.prototype.Se = m;
function eh(a) {
  return 10 > a ? "0" + a : "" + a
}
function fh(a, b) {
  var c = (a.Xe - b) / 1E3, d = c.toFixed(3), g = 0;
  if(1 > c) {
    g = 2
  }else {
    for(;100 > c;) {
      g++, c *= 10
    }
  }
  for(;0 < g--;) {
    d = " " + d
  }
  return d
}
function gh(a) {
  dh.call(this, a)
}
D(gh, dh);
gh.prototype.Se = j;
function hh(a) {
  this.Yc = a || 100;
  this.na = []
}
s = hh.prototype;
s.yb = 0;
s.add = function(a) {
  this.na[this.yb] = a;
  this.yb = (this.yb + 1) % this.Yc
};
s.get = function(a) {
  a = ih(this, a);
  return this.na[a]
};
s.set = function(a, b) {
  a = ih(this, a);
  this.na[a] = b
};
s.r = function() {
  return this.na.length
};
s.Na = function() {
  return 0 == this.na.length
};
s.clear = function() {
  this.yb = this.na.length = 0
};
s.D = function() {
  for(var a = this.r(), b = this.r(), c = [], a = this.r() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
s.Z = function() {
  for(var a = [], b = this.r(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
s.da = function(a) {
  return a < this.r()
};
s.Nb = function(a) {
  for(var b = this.r(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return j
    }
  }
  return m
};
function ih(a, b) {
  b >= a.na.length && e(Error("Out of bounds exception"));
  return a.na.length < a.Yc ? b : (a.yb + Number(b)) % a.Yc
}
;function jh(a, b) {
  this.ua = a || "";
  this.hd = b || "";
  this.hb = [];
  this.mc = new hh(kh);
  this.Uf = B(this.ff, this);
  this.Bf = new gh(this.hd);
  this.yf = {};
  if(j != this.le) {
    this.le = j;
    var c = Oc(), d = this.Uf;
    c.vb || (c.vb = []);
    c.vb.push(d)
  }
  this.rb = "1" == lh(this.ua, "enabled");
  t.setInterval(B(this.Yf, this), 7500)
}
var kh = 500;
s = jh.prototype;
s.bf = "LOGGING";
s.vf = m;
s.w = k;
s.Cd = m;
s.le = m;
s.Hd = k;
s.Tc = C();
s.Ma = function() {
  this.rb && mh(this)
};
s.isEnabled = o("rb");
s.oc = function(a) {
  (this.rb = a) && mh(this);
  nh(this, "enabled", a ? "1" : "0")
};
function oh(a) {
  return!!a.w && !a.w.closed
}
s.mf = function() {
  this.mc.clear();
  oh(this) && this.Ed()
};
s.ff = function(a) {
  if(!this.yf[a.te]) {
    var b = this.Bf, c;
    switch(a.V.value) {
      case yc.value:
        c = "dbg-sh";
        break;
      case zc.value:
        c = "dbg-sev";
        break;
      case Ac.value:
        c = "dbg-w";
        break;
      case Bc.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.hd, " ");
    if(b.$f) {
      var g = new Date(a.Xe);
      d.push("[", eh(g.getFullYear() - 2E3) + eh(g.getMonth() + 1) + eh(g.getDate()) + " " + eh(g.getHours()) + ":" + eh(g.getMinutes()) + ":" + eh(g.getSeconds()) + "." + eh(Math.floor(g.getMilliseconds() / 10)), "] ")
    }
    b.bg && d.push("[", xa(fh(a, b.dg.get())), "s] ");
    b.ag && d.push("[", E(a.te), "] ");
    d.push('<span class="', c, '">', ra(xa(E(a.xe))));
    b.Se && a.Kc && d.push("<br>", ra(xa(a.Jc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.rb ? (mh(this), this.mc.add(b), ph(this, b)) : this.mc.add(b);
    this.vf && a.V.value >= zc.value && this.oc(j)
  }
};
function ph(a, b) {
  a.hb.push(b);
  t.clearTimeout(a.Hd);
  750 < C() - a.Tc ? a.Dd() : a.Hd = t.setTimeout(B(a.Dd, a), 250)
}
s.Dd = function() {
  this.Tc = C();
  if(oh(this)) {
    var a = this.w.document.body, a = a && 100 >= a.scrollHeight - (a.scrollTop + a.clientHeight);
    this.w.document.write(this.hb.join(""));
    this.hb.length = 0;
    a && this.w.scrollTo(0, 1E6)
  }
};
function qh(a) {
  for(var b = a.mc.D(), c = 0;c < b.length;c++) {
    ph(a, b[c])
  }
}
function mh(a) {
  if(!oh(a) && !a.Cd) {
    var b = lh(a.ua, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), g = Number(b[2]), b = Number(b[3]);
    a.Cd = j;
    a.w = window.open("", F ? a.ua.replace(/[\s\-\.\,]/g, "_") : a.ua, "width=" + g + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    !a.w && !a.cg && (alert("Logger popup was blocked"), a.cg = j);
    a.Cd = m;
    a.w && a.Ed()
  }
}
s.Vb = r("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
s.Ed = function() {
  oh(this) || (this.w.document.open(), ph(this, "<style>" + this.Vb() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.bf + "<br><small>Logger: " + this.ua + "</small></div><hr>"), qh(this))
};
function nh(a, b, c) {
  b += a.ua;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(C() + 2592E6)).toUTCString()
}
function lh(a, b, c) {
  var a = b + a, b = "" + document.cookie, d = b.indexOf(a + "=");
  return-1 != d ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, -1 == c ? b.length : c))) : c || ""
}
s.Yf = function() {
  oh(this) && nh(this, "dbg", (this.w.screenX || this.w.screenLeft || 0) + "," + (this.w.screenY || this.w.screenTop || 0) + "," + (this.w.outerWidth || 800) + "," + (this.w.outerHeight || 500))
};
function rh(a, b) {
  if(sh) {
    var c = th(), d;
    for(d in c) {
      var c = d.replace("fancywindow.sel.", ""), c = S(c), g = c.V, f = window.localStorage.getItem(d).toString();
      (!g || g.toString() != f) && c.kb(Jc(f))
    }
  }
  jh.call(this, a, b)
}
D(rh, jh);
var sh;
a: {
  try {
    sh = !!window.localStorage.getItem;
    break a
  }catch(uh) {
  }
  sh = m
}
s = rh.prototype;
s.Dd = function() {
  this.Tc = C();
  if(oh(this)) {
    for(var a = this.H.g("log"), b = 100 >= a.scrollHeight - (a.scrollTop + a.offsetHeight), c = 0;c < this.hb.length;c++) {
      var d = this.H.n("div", "logmsg");
      d.innerHTML = this.hb[c];
      a.appendChild(d)
    }
    this.hb.length = 0;
    this.Ne();
    b && (a.scrollTop = a.scrollHeight)
  }
};
s.Ed = function() {
  if(oh(this)) {
    var a = this.w.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.ua + "</title><style>" + this.Vb() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.ua + "</b></p><p>" + this.bf + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (F ? a.body : this.w).onresize = B(this.Ne, this);
    this.H = new wd(a);
    this.H.g("openbutton").onclick = B(this.Sf, this);
    this.H.g("closebutton").onclick = B(this.nf, this);
    this.H.g("clearbutton").onclick = B(this.mf, this);
    this.H.g("exitbutton").onclick = B(this.wf, this);
    qh(this)
  }
};
s.Sf = function() {
  var a = this.H.g("optionsarea");
  a.innerHTML = "";
  for(var b = vh(), c = this.H, d = 0;d < b.length;d++) {
    var g = S(b[d]), g = c.n("div", {}, wh(this, "sel" + b[d], g.V ? g.V.name : "INHERIT"), c.n("span", {}, b[d] || "(root)"));
    a.appendChild(g)
  }
  this.H.g("options").style.display = "block";
  return m
};
function wh(a, b, c) {
  for(var a = a.H, b = a.n("select", {id:b}), d = 0;d < Hc.length;d++) {
    var g = Hc[d], f = a.n("option", {}, g.name);
    c == g.name && (f.selected = j);
    b.appendChild(f)
  }
  b.appendChild(a.n("option", {selected:"INHERIT" == c}, "INHERIT"));
  return b
}
s.nf = function() {
  this.H.g("options").style.display = "none";
  for(var a = vh(), b = this.H, c = 0;c < a.length;c++) {
    var d = S(a[c]), g = b.g("sel" + a[c]), g = g.options[g.selectedIndex].text;
    "INHERIT" == g ? d.kb(k) : d.kb(Jc(g))
  }
  if(sh) {
    a = vh();
    b = th();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], g = S(a[c]).V, d in b ? g ? window.localStorage.getItem(d) != g.name && window.localStorage.setItem(d, g.name) : window.localStorage.removeItem(d) : g && window.localStorage.setItem(d, g.name)
    }
  }
  return m
};
s.Ne = function() {
  var a = this.H, b = a.g("log"), c = a.g("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.fa.body.offsetHeight - c.offsetHeight - (F ? 4 : 0) + "px"
};
s.wf = function() {
  this.oc(m);
  this.w && this.w.close()
};
s.Vb = function() {
  return rh.e.Vb.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function th() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != k && 0 == d.lastIndexOf("fancywindow.sel.", 0) && (a[d] = j)
  }
  return a
}
function vh() {
  var a = $a(Lc);
  a.sort();
  return a
}
;var xh, yh = S("ljstream.logger");
window.onerror = function(a, b, c) {
  O(yh, "window.onerror: message: " + U(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function zh() {
}
zh.prototype.Ue = function(a) {
  this.A = a;
  ng(this.A, "subprotocol:ljstream");
  Ah(this)
};
zh.prototype.Te = function(a, b) {
  yh.info("streamReset: reasonString=" + U(a) + ", applicationLevel=" + b);
  Bh("Disconnected from server.  Try reloading this page.");
  Ch = k
};
function Ah(a) {
  yh.info("Sending preferences to server");
  ng(a.A, ed(["SetPreferences", {include_russian_posts:V("include_russian_posts").checked}]))
}
zh.prototype.Ve = function(a) {
  var a = Gg(a), b = a[1];
  if("NewPost" == a[0]) {
    var a = b.title, c = b.url, b = b.body;
    (a = qa(a)) || (a = "[No title]");
    var b = E(b), d;
    d = d || {};
    var g = [], f, i;
    for(i in Fg) {
      v(d[i]) || (d[i] = Fg[i])
    }
    for(;i = Cg.exec(b);) {
      i = i[0];
      var l = Cg.lastIndex, n = l - i.length;
      if(!/[\/:]/.test(b.charAt(n - 1))) {
        do {
          var p = i, w = i.substr(-1), q = Eg[w];
          if(q && (q = i.match(RegExp("\\" + q + "(?!$)", "g")), w = i.match(RegExp("\\" + w, "g")), (q ? q.length : 0) < (w ? w.length : 0))) {
            i = i.substr(0, i.length - 1), l--
          }
          d.Ie && (i = i.replace(d.Ie, function(a) {
            l -= a.length;
            return""
          }))
        }while(i.length && i !== p);
        p = i;
        Dg.test(p) || (p = (-1 !== p.indexOf("@") ? !p.indexOf("mailto:") ? "" : "mailto:" : !p.indexOf("irc.") ? "irc://" : !p.indexOf("ftp.") ? "ftp://" : "http://") + p);
        f != n && (g.push([b.slice(f, n)]), f = l);
        g.push([i, p])
      }
    }
    g.push([b.substr(f)]);
    f = "";
    for(i = 0;i < g.length;i++) {
      f += d.X.apply(t, g[i])
    }
    f = f || b;
    b = document;
    d = b.createElement("div");
    F ? (d.innerHTML = "<br>" + f, d.removeChild(d.firstChild)) : d.innerHTML = f;
    if(1 == d.childNodes.length) {
      d = d.removeChild(d.firstChild)
    }else {
      for(f = b.createDocumentFragment();d.firstChild;) {
        f.appendChild(d.firstChild)
      }
      d = f
    }
    a = zd("span", {}, zd("a", {href:c, "class":"ljpost-title-link"}, a), zd("span", {}, "\u00a0"), d);
    Dh(a)
  }
};
zh.prototype.reset = function(a) {
  yh.info("resetting with reason: " + a);
  this.A.reset(a)
};
var Ch = k, Eh = new bd(t.window);
function Bh(a) {
  a = zd("span", {"class":"important-message"}, a);
  Dh(a)
}
function Fh() {
  Ch && (Ch.reset("idle timeout fired"), Ch = k, Bh("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var Gh = k;
function Hh() {
  Gh != k && Eh.B.clearTimeout(Gh);
  Ch && (Gh = Eh.B.setTimeout(Fh, 6E5))
}
N(window, ["click", "focus", "keydown", "keypress"], Hh, j);
var Jd = new wd, Ih = 0;
function Dh(a) {
  a = zd("div", {"class":"row-" + (0 == Ih % 2 ? "even" : "odd")}, zd("nobr", {}, a));
  V("ljstream-container-inner").appendChild(a);
  Ih += 1;
  if(xh) {
    for(var b = a, a = b.offsetTop, c = b.offsetHeight;b.offsetParent;) {
      b = b.offsetParent, a += b.offsetTop
    }
    var d = document, b = !G && "CSS1Compat" == d.compatMode ? d.documentElement : d.body, d = d.parentWindow || d.defaultView;
    a + c <= (new md(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop)).y + Id().height || window.scrollBy(0, Math.round(Id().height / 2) + 80)
  }
}
function Jh() {
  Oc().kb(Gc);
  if("1" == (new xb(document.location)).K.get("logging")) {
    var a = new rh("main");
    a.oc(j);
    a.Ma()
  }
  yh.info("Logger works.");
  N(t, "load", function() {
    window.scrollTo(0, 0)
  });
  N(V("include_russian_posts"), "click", function() {
    Ah(Ch)
  });
  xh = j;
  N(V("automatic_scroll"), "click", function(a) {
    xh = a.target.checked
  });
  a = new ye("Clear posts");
  ne(a, "clear-posts-button");
  Vd(a, V("prefs"));
  N(a, "action", function() {
    V("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = V("ljstream-container");
  a.style.marginTop = V("demo-header").offsetHeight + "px";
  V("demo-header").style.width = "9000px";
  var b = zd("div", {id:"ljstream-container-inner"});
  a.appendChild(b);
  a = new ah;
  Ch = new zh;
  Hh();
  var c = (new xb(document.location)).K, b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    P($g, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new xb(document.location);
  b ? b = new Vf("/_minerva/", c.pa, t.__demo_mainSocketPort) : (d ? (b = t.__demo_shared_domain, y(b) || e(Error("domain was " + U(b) + "; expected a string.")), c = c.O(), Ab(c, "_____random_____." + b)) : c = c.O(), Cb(c, "/_minerva/"), Db(c, "", h), b = new Xf(c.toString().replace("_____random_____", "%random%")));
  a = new fg(b, a, Eh);
  b = Ch;
  v(b.Ue) || e(Error("Protocol is missing required method streamStarted"));
  v(b.Te) || e(Error("Protocol is missing required method streamReset"));
  v(b.Ve) || e(Error("Protocol is missing required method stringReceived"));
  a.cd = B(b.Ue, b);
  a.onreset = B(b.Te, b);
  a.dd = B(b.Ve, b);
  a.ed = v(b.kg) ? B(b.kg, b) : k;
  a.fd = v(b.lg) ? B(b.lg, b) : k;
  a.start()
}
var Kh = ["__ljstream_init"], Lh = t;
!(Kh[0] in Lh) && Lh.execScript && Lh.execScript("var " + Kh[0]);
for(var Mh;Kh.length && (Mh = Kh.shift());) {
  !Kh.length && v(Jh) ? Lh[Mh] = Jh : Lh = Lh[Mh] ? Lh[Mh] : Lh[Mh] = {}
}
;
})();
