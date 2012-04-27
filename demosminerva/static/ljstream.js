(function(){function e(a) {
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
function p(a) {
  return function() {
    return a
  }
}
var r, ba = ba || {}, t = this;
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
function da() {
}
function ea(a) {
  a.Xa = function() {
    return a.fe ? a.fe : a.fe = new a
  }
}
function fa(a) {
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
function u(a) {
  return a !== h
}
function v(a) {
  return"array" == fa(a)
}
function ga(a) {
  var b = fa(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function ha(a) {
  return ia(a) && "function" == typeof a.getFullYear
}
function x(a) {
  return"string" == typeof a
}
function y(a) {
  return"function" == fa(a)
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
function A(a, b, c) {
  A = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma : na;
  return A.apply(k, arguments)
}
function oa(a, b) {
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
function D(a) {
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
  for(var c = 0, d = qa("" + a).split("."), f = qa("" + b).split("."), g = Math.max(d.length, f.length), i = 0;0 == c && i < g;i++) {
    var l = d[i] || "", n = f[i] || "", q = RegExp("(\\d*)(\\D*)", "g"), H = RegExp("(\\d*)(\\D*)", "g");
    do {
      var s = q.exec(l) || ["", "", ""], w = H.exec(n) || ["", "", ""];
      if(0 == s[0].length && 0 == w[0].length) {
        break
      }
      c = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? -1 : (0 == s[1].length ? 0 : parseInt(s[1], 10)) > (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == w[2].length) ? -1 : (0 == s[2].length) > (0 == w[2].length) ? 1 : 0) || (s[2] < w[2] ? -1 : s[2] > w[2] ? 1 : 0)
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
var Ga = za, E = Aa, Ha = Ca, F = Ba, Ia = t.navigator, Ja = -1 != (Ia && Ia.platform || "").indexOf("Mac"), Ka;
a: {
  var La = "", Ma;
  if(Ga && t.opera) {
    var Na = t.opera.version, La = "function" == typeof Na ? Na() : Na
  }else {
    if(Ha ? Ma = /rv\:([^\);]+)(\)|;)/ : E ? Ma = /MSIE\s+([^\);]+)(\)|;)/ : F && (Ma = /WebKit\/(\S+)/), Ma) {
      var Oa = Ma.exec(Da()), La = Oa ? Oa[1] : ""
    }
  }
  if(E) {
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
function G(a) {
  return Ra[a] || (Ra[a] = 0 <= ya(Ka, a))
}
var Sa = {};
function Ta() {
  return Sa[9] || (Sa[9] = E && !!document.documentMode && 9 <= document.documentMode)
}
;function I(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, I) : this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
C(I, Error);
I.prototype.name = "CustomError";
function Ua(a, b) {
  b.unshift(a);
  I.call(this, pa.apply(k, b));
  b.shift()
}
C(Ua, I);
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
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < ab.length;g++) {
      c = ab[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var J = Array.prototype, cb = J.indexOf ? function(a, b, c) {
  return J.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(x(a)) {
    return!x(b) || 1 != b.length ? -1 : a.indexOf(b, c)
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
  for(var d = a.length, f = x(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
}, eb = J.filter ? function(a, b, c) {
  return J.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = [], g = 0, i = x(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in i) {
      var n = i[l];
      b.call(c, n, l, a) && (f[g++] = n)
    }
  }
  return f
}, fb = J.map ? function(a, b, c) {
  return J.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = x(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in g && (f[i] = b.call(c, g[i], i, a))
  }
  return f
}, gb = J.some ? function(a, b, c) {
  return J.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = x(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return j
    }
  }
  return m
}, hb = J.every ? function(a, b, c) {
  return J.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = x(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && !b.call(c, f[g], g, a)) {
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
  J.sort.call(a, b || ob)
}
function ob(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function pb(a) {
  if("function" == typeof a.r) {
    a = a.r()
  }else {
    if(ga(a) || x(a)) {
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
function qb(a) {
  if("function" == typeof a.D) {
    return a.D()
  }
  if(x(a)) {
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
function rb(a) {
  if("function" == typeof a.aa) {
    return a.aa()
  }
  if("function" != typeof a.D) {
    if(ga(a) || x(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return $a(a)
  }
}
function sb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ga(a) || x(a)) {
      db(a, b, c)
    }else {
      for(var d = rb(a), f = qb(a), g = f.length, i = 0;i < g;i++) {
        b.call(c, f[i], d && d[i], a)
      }
    }
  }
}
function tb(a, b) {
  if("function" == typeof a.every) {
    return a.every(b, h)
  }
  if(ga(a) || x(a)) {
    return hb(a, b, h)
  }
  for(var c = rb(a), d = qb(a), f = d.length, g = 0;g < f;g++) {
    if(!b.call(h, d[g], c && c[g], a)) {
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
    a && this.uc(a)
  }
}
r = K.prototype;
r.f = 0;
r.r = o("f");
r.D = function() {
  ub(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.o[this.j[b]])
  }
  return a
};
r.aa = function() {
  ub(this);
  return this.j.concat()
};
r.Z = function(a) {
  return vb(this.o, a)
};
r.Mb = function(a) {
  for(var b = 0;b < this.j.length;b++) {
    var c = this.j[b];
    if(vb(this.o, c) && this.o[c] == a) {
      return j
    }
  }
  return m
};
r.R = function(a, b) {
  if(this === a) {
    return j
  }
  if(this.f != a.r()) {
    return m
  }
  var c = b || wb;
  ub(this);
  for(var d, f = 0;d = this.j[f];f++) {
    if(!c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function wb(a, b) {
  return a === b
}
r.Na = function() {
  return 0 == this.f
};
r.clear = function() {
  this.o = {};
  this.f = this.j.length = 0
};
r.remove = function(a) {
  return vb(this.o, a) ? (delete this.o[a], this.f--, this.j.length > 2 * this.f && ub(this), j) : m
};
function ub(a) {
  if(a.f != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      vb(a.o, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.f != a.j.length) {
    for(var f = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], vb(f, d) || (a.j[c++] = d, f[d] = 1), b++
    }
    a.j.length = c
  }
}
r.get = function(a, b) {
  return vb(this.o, a) ? this.o[a] : b
};
r.set = function(a, b) {
  vb(this.o, a) || (this.f++, this.j.push(a));
  this.o[a] = b
};
r.uc = function(a) {
  var b;
  a instanceof K ? (b = a.aa(), a = a.D()) : (b = $a(a), a = Za(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
r.N = function() {
  return new K(this)
};
function xb(a) {
  ub(a);
  for(var b = {}, c = 0;c < a.j.length;c++) {
    var d = a.j[c];
    b[d] = a.o[d]
  }
  return b
}
function vb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function L(a, b) {
  var c;
  if(a instanceof L) {
    this.S = u(b) ? b : a.S, yb(this, a.Da), c = a.Ta, zb(this), this.Ta = c, Ab(this, a.pa), Bb(this, a.hb), Cb(this, a.xa), Db(this, a.J.N()), c = a.Ja, zb(this), this.Ja = c
  }else {
    if(a && (c = ("" + a).match(Wa))) {
      this.S = !!b;
      yb(this, c[1] || "", j);
      var d = c[2] || "";
      zb(this);
      this.Ta = d ? decodeURIComponent(d) : "";
      Ab(this, c[3] || "", j);
      Bb(this, c[4]);
      Cb(this, c[5] || "", j);
      Db(this, c[6] || "", j);
      c = c[7] || "";
      zb(this);
      this.Ja = c ? decodeURIComponent(c) : ""
    }else {
      this.S = !!b, this.J = new Eb(k, 0, this.S)
    }
  }
}
r = L.prototype;
r.Da = "";
r.Ta = "";
r.pa = "";
r.hb = k;
r.xa = "";
r.Ja = "";
r.Ef = m;
r.S = m;
r.toString = function() {
  var a = [], b = this.Da;
  b && a.push(Fb(b, Gb), ":");
  if(b = this.pa) {
    a.push("//");
    var c = this.Ta;
    c && a.push(Fb(c, Gb), "@");
    a.push(encodeURIComponent("" + b));
    b = this.hb;
    b != k && a.push(":", "" + b)
  }
  if(b = this.xa) {
    this.pa && "/" != b.charAt(0) && a.push("/"), a.push(Fb(b, "/" == b.charAt(0) ? Hb : Ib))
  }
  (b = this.J.toString()) && a.push("?", b);
  (b = this.Ja) && a.push("#", Fb(b, Jb));
  return a.join("")
};
r.N = function() {
  return new L(this)
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
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.hb = b) : a.hb = k
}
function Cb(a, b, c) {
  zb(a);
  a.xa = c ? b ? decodeURIComponent(b) : "" : b
}
function Db(a, b, c) {
  zb(a);
  b instanceof Eb ? (a.J = b, a.J.ld(a.S)) : (c || (b = Fb(b, Kb)), a.J = new Eb(b, 0, a.S))
}
function zb(a) {
  a.Ef && e(Error("Tried to modify a read-only Uri"))
}
r.ld = function(a) {
  this.S = a;
  this.J && this.J.ld(a);
  return this
};
function Lb(a) {
  return a instanceof L ? a.N() : new L(a, h)
}
function Fb(a, b) {
  return x(a) ? encodeURI(a).replace(b, Mb) : k
}
function Mb(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Gb = /[#\/\?@]/g, Ib = /[\#\?:]/g, Hb = /[\#\?]/g, Kb = /[\#\?@]/g, Jb = /#/g;
function Eb(a, b, c) {
  this.Q = a || k;
  this.S = !!c
}
function Nb(a) {
  if(!a.m && (a.m = new K, a.f = 0, a.Q)) {
    for(var b = a.Q.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = Ob(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
r = Eb.prototype;
r.m = k;
r.f = k;
r.r = function() {
  Nb(this);
  return this.f
};
r.add = function(a, b) {
  Nb(this);
  this.Q = k;
  a = Ob(this, a);
  if(this.Z(a)) {
    var c = this.m.get(a);
    v(c) ? c.push(b) : this.m.set(a, [c, b])
  }else {
    this.m.set(a, b)
  }
  this.f++;
  return this
};
r.remove = function(a) {
  Nb(this);
  a = Ob(this, a);
  if(this.m.Z(a)) {
    this.Q = k;
    var b = this.m.get(a);
    v(b) ? this.f -= b.length : this.f--;
    return this.m.remove(a)
  }
  return m
};
r.clear = function() {
  this.m = this.Q = k;
  this.f = 0
};
r.Na = function() {
  Nb(this);
  return 0 == this.f
};
r.Z = function(a) {
  Nb(this);
  a = Ob(this, a);
  return this.m.Z(a)
};
r.Mb = function(a) {
  var b = this.D();
  return ib(b, a)
};
r.aa = function() {
  Nb(this);
  for(var a = this.m.D(), b = this.m.aa(), c = [], d = 0;d < b.length;d++) {
    var f = a[d];
    if(v(f)) {
      for(var g = 0;g < f.length;g++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
r.D = function(a) {
  Nb(this);
  var b = [];
  if(a) {
    this.Z(a) && (b = kb(b, this.m.get(Ob(this, a))))
  }else {
    for(var a = this.m.D(), c = 0;c < a.length;c++) {
      b = kb(b, a[c])
    }
  }
  return b
};
r.set = function(a, b) {
  Nb(this);
  this.Q = k;
  a = Ob(this, a);
  if(this.Z(a)) {
    var c = this.m.get(a);
    v(c) ? this.f -= c.length : this.f--
  }
  this.m.set(a, b);
  this.f++;
  return this
};
r.get = function(a, b) {
  var c = a ? this.D(a) : [];
  return 0 < c.length ? c[0] : b
};
r.toString = function() {
  if(this.Q) {
    return this.Q
  }
  if(!this.m) {
    return""
  }
  for(var a = [], b = this.m.aa(), c = 0;c < b.length;c++) {
    for(var d = b[c], f = encodeURIComponent("" + d), d = this.D(d), g = 0;g < d.length;g++) {
      var i = f;
      "" !== d[g] && (i += "=" + encodeURIComponent("" + d[g]));
      a.push(i)
    }
  }
  return this.Q = a.join("&")
};
r.N = function() {
  var a = new Eb;
  a.Q = this.Q;
  this.m && (a.m = this.m.N());
  return a
};
function Ob(a, b) {
  var c = "" + b;
  a.S && (c = c.toLowerCase());
  return c
}
r.ld = function(a) {
  a && !this.S && (Nb(this), this.Q = k, sb(this.m, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.S = a
};
function Pb() {
  return j
}
;function Qb() {
}
var Rb = 0;
r = Qb.prototype;
r.key = 0;
r.Qa = m;
r.yc = m;
r.Ma = function(a, b, c, d, f, g) {
  y(a) ? this.je = j : a && a.handleEvent && y(a.handleEvent) ? this.je = m : e(Error("Invalid listener argument"));
  this.cb = a;
  this.Ce = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Xb = g;
  this.yc = m;
  this.key = ++Rb;
  this.Qa = m
};
r.handleEvent = function(a) {
  return this.je ? this.cb.call(this.Xb || this.src, a) : this.cb.handleEvent.call(this.cb, a)
};
var Sb = !E || Ta(), Tb = !E || Ta(), Ub = E && !G("8");
!F || G("528");
Ha && G("1.9b") || E && G("8") || Ga && G("9.5") || F && G("528");
Ha && !G("8") || E && G("9");
var Vb = {qg:"click", vg:"dblclick", Pg:"mousedown", Tg:"mouseup", Sg:"mouseover", Rg:"mouseout", Qg:"mousemove", fh:"selectstart", Kg:"keypress", Jg:"keydown", Lg:"keyup", og:"blur", Dg:"focus", wg:"deactivate", Eg:E ? "focusin" : "DOMFocusIn", Fg:E ? "focusout" : "DOMFocusOut", pg:"change", eh:"select", gh:"submit", Ig:"input", $g:"propertychange", Ag:"dragstart", xg:"dragenter", zg:"dragover", yg:"dragleave", Bg:"drop", kh:"touchstart", jh:"touchmove", ih:"touchend", hh:"touchcancel", sg:"contextmenu", 
Cg:"error", Hg:"help", Mg:"load", Ng:"losecapture", ah:"readystatechange", bh:"resize", dh:"scroll", mh:"unload", Gg:"hashchange", Wg:"pagehide", Xg:"pageshow", Zg:"popstate", tg:"copy", Yg:"paste", ug:"cut", lg:"beforecopy", mg:"beforecut", ng:"beforepaste", Vg:"online", Ug:"offline", Og:"message", rg:"connect", lh:F ? "webkitTransitionEnd" : Ga ? "oTransitionEnd" : "transitionend"};
function M() {
}
M.prototype.O = m;
M.prototype.b = function() {
  this.O || (this.O = j, this.c())
};
M.prototype.c = function() {
  this.lf && Wb.apply(k, this.lf)
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
C(Xb, M);
r = Xb.prototype;
r.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
r.Pa = m;
r.defaultPrevented = m;
r.ic = j;
r.stopPropagation = function() {
  this.Pa = j
};
r.preventDefault = function() {
  this.defaultPrevented = j;
  this.ic = m
};
function Yb(a) {
  a.stopPropagation()
}
;function Zb(a) {
  Zb[" "](a);
  return a
}
Zb[" "] = da;
function $b(a, b) {
  a && this.Ma(a, b)
}
C($b, Xb);
var ac = [1, 4, 2];
r = $b.prototype;
r.target = k;
r.relatedTarget = k;
r.offsetX = 0;
r.offsetY = 0;
r.clientX = 0;
r.clientY = 0;
r.screenX = 0;
r.screenY = 0;
r.button = 0;
r.keyCode = 0;
r.charCode = 0;
r.ctrlKey = m;
r.altKey = m;
r.shiftKey = m;
r.metaKey = m;
r.fd = m;
r.ga = k;
r.Ma = function(a, b) {
  var c = this.type = a.type;
  Xb.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Ha) {
      var f;
      a: {
        try {
          Zb(d.nodeName);
          f = j;
          break a
        }catch(g) {
        }
        f = m
      }
      f || (d = k)
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = F || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = F || a.offsetY !== h ? a.offsetY : a.layerY;
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
  this.fd = Ja ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ga = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Pa
};
function bc(a) {
  return Sb ? 0 == a.ga.button : "click" == a.type ? j : !!(a.ga.button & ac[0])
}
r.stopPropagation = function() {
  $b.e.stopPropagation.call(this);
  this.ga.stopPropagation ? this.ga.stopPropagation() : this.ga.cancelBubble = j
};
r.preventDefault = function() {
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
r.c = function() {
  $b.e.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ga = k
};
var cc = {}, N = {}, dc = {}, ec = {};
function O(a, b, c, d, f) {
  if(b) {
    if(v(b)) {
      for(var g = 0;g < b.length;g++) {
        O(a, b[g], c, d, f)
      }
      return k
    }
    var d = !!d, i = N;
    b in i || (i[b] = {f:0, T:0});
    i = i[b];
    d in i || (i[d] = {f:0, T:0}, i.f++);
    var i = i[d], l = ja(a), n;
    i.T++;
    if(i[l]) {
      n = i[l];
      for(g = 0;g < n.length;g++) {
        if(i = n[g], i.cb == c && i.Xb == f) {
          if(i.Qa) {
            break
          }
          return n[g].key
        }
      }
    }else {
      n = i[l] = [], i.f++
    }
    g = fc();
    g.src = a;
    i = new Qb;
    i.Ma(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    n.push(i);
    cc[c] = i;
    dc[l] || (dc[l] = []);
    dc[l].push(i);
    a.addEventListener ? (a == t || !a.Ld) && a.addEventListener(b, g, d) : a.attachEvent(b in ec ? ec[b] : ec[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function fc() {
  var a = gc, b = Tb ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function hc(a, b, c, d, f) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      hc(a, b[g], c, d, f)
    }
    return k
  }
  a = O(a, b, c, d, f);
  cc[a].yc = j;
  return a
}
function ic(a, b, c, d, f) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      ic(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = jc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].cb == c && a[g].capture == d && a[g].Xb == f) {
          kc(a[g].key);
          break
        }
      }
    }
  }
}
function kc(a) {
  if(!cc[a]) {
    return m
  }
  var b = cc[a];
  if(b.Qa) {
    return m
  }
  var c = b.src, d = b.type, f = b.Ce, g = b.capture;
  c.removeEventListener ? (c == t || !c.Ld) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in ec ? ec[d] : ec[d] = "on" + d, f);
  c = ja(c);
  f = N[d][g][c];
  if(dc[c]) {
    var i = dc[c];
    jb(i, b);
    0 == i.length && delete dc[c]
  }
  b.Qa = j;
  f.ve = j;
  lc(d, g, c, f);
  delete cc[a];
  return j
}
function lc(a, b, c, d) {
  if(!d.bc && d.ve) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].Qa ? d[f].Ce.src = k : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.ve = m;
    0 == g && (delete N[a][b][c], N[a][b].f--, 0 == N[a][b].f && (delete N[a][b], N[a].f--), 0 == N[a].f && delete N[a])
  }
}
function mc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Ya(dc, function(a) {
      for(var f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          kc(g.key), c++
        }
      }
    })
  }else {
    if(a = ja(a), dc[a]) {
      for(var a = dc[a], f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          kc(g.key), c++
        }
      }
    }
  }
}
function jc(a, b, c) {
  var d = N;
  return b in d && (d = d[b], c in d && (d = d[c], a = ja(a), d[a])) ? d[a] : k
}
function nc(a, b, c, d, f) {
  var g = 1, b = ja(b);
  if(a[b]) {
    a.T--;
    a = a[b];
    a.bc ? a.bc++ : a.bc = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var n = a[l];
        n && !n.Qa && (g &= oc(n, f) !== m)
      }
    }finally {
      a.bc--, lc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function oc(a, b) {
  var c = a.handleEvent(b);
  a.yc && kc(a.key);
  return c
}
function gc(a, b) {
  if(!cc[a]) {
    return j
  }
  var c = cc[a], d = c.type, f = N;
  if(!(d in f)) {
    return j
  }
  var f = f[d], g, i;
  if(!Tb) {
    g = b || ca("window.event");
    var l = j in f, n = m in f;
    if(l) {
      if(0 > g.keyCode || g.returnValue != h) {
        return j
      }
      a: {
        var q = m;
        if(0 == g.keyCode) {
          try {
            g.keyCode = -1;
            break a
          }catch(H) {
            q = j
          }
        }
        if(q || g.returnValue == h) {
          g.returnValue = j
        }
      }
    }
    q = new $b;
    q.Ma(g, this);
    g = j;
    try {
      if(l) {
        for(var s = [], w = q.currentTarget;w;w = w.parentNode) {
          s.push(w)
        }
        i = f[j];
        i.T = i.f;
        for(var z = s.length - 1;!q.Pa && 0 <= z && i.T;z--) {
          q.currentTarget = s[z], g &= nc(i, s[z], d, j, q)
        }
        if(n) {
          i = f[m];
          i.T = i.f;
          for(z = 0;!q.Pa && z < s.length && i.T;z++) {
            q.currentTarget = s[z], g &= nc(i, s[z], d, m, q)
          }
        }
      }else {
        g = oc(c, q)
      }
    }finally {
      s && (s.length = 0), q.b()
    }
    return g
  }
  d = new $b(b, this);
  try {
    g = oc(c, d)
  }finally {
    d.b()
  }
  return g
}
var pc = 0;
function qc() {
}
C(qc, M);
r = qc.prototype;
r.Ld = j;
r.dc = k;
r.md = aa("dc");
r.addEventListener = function(a, b, c, d) {
  O(this, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  ic(this, a, b, c, d)
};
r.dispatchEvent = function(a) {
  var b = a.type || a, c = N;
  if(b in c) {
    if(x(a)) {
      a = new Xb(a, this)
    }else {
      if(a instanceof Xb) {
        a.target = a.target || this
      }else {
        var d = a, a = new Xb(b, this);
        bb(a, d)
      }
    }
    var d = 1, f, c = c[b], b = j in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.dc) {
        f.push(g)
      }
      g = c[j];
      g.T = g.f;
      for(var i = f.length - 1;!a.Pa && 0 <= i && g.T;i--) {
        a.currentTarget = f[i], d &= nc(g, f[i], a.type, j, a) && a.ic != m
      }
    }
    if(m in c) {
      if(g = c[m], g.T = g.f, b) {
        for(i = 0;!a.Pa && i < f.length && g.T;i++) {
          a.currentTarget = f[i], d &= nc(g, f[i], a.type, m, a) && a.ic != m
        }
      }else {
        for(f = this;!a.Pa && f && g.T;f = f.dc) {
          a.currentTarget = f, d &= nc(g, f, a.type, m, a) && a.ic != m
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
r.c = function() {
  qc.e.c.call(this);
  mc(this);
  this.dc = k
};
var rc = t.window;
pc++;
pc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function sc(a, b) {
  this.Kb = [];
  this.Gd = a;
  this.Nd = b || k
}
r = sc.prototype;
r.ra = m;
r.tb = m;
r.yb = 0;
r.pd = m;
r.ff = m;
r.xc = 0;
r.cancel = function(a) {
  if(this.ra) {
    this.Bb instanceof sc && this.Bb.cancel()
  }else {
    if(this.z) {
      var b = this.z;
      delete this.z;
      a ? b.cancel(a) : (b.xc--, 0 >= b.xc && b.cancel())
    }
    this.Gd ? this.Gd.call(this.Nd, this) : this.pd = j;
    this.ra || this.rb(new tc)
  }
};
r.Jd = function(a, b) {
  uc(this, a, b);
  this.yb--;
  0 == this.yb && this.ra && vc(this)
};
function uc(a, b, c) {
  a.ra = j;
  a.Bb = c;
  a.tb = !b;
  vc(a)
}
function wc(a) {
  a.ra && (a.pd || e(new xc), a.pd = m)
}
r.Y = function(a) {
  wc(this);
  uc(this, j, a)
};
r.rb = function(a) {
  wc(this);
  uc(this, m, a)
};
function yc(a, b) {
  zc(a, b, k, h)
}
function Ac(a, b) {
  zc(a, k, b, h)
}
function zc(a, b, c, d) {
  a.Kb.push([b, c, d]);
  a.ra && vc(a)
}
function Bc(a, b) {
  zc(a, b, b, h)
}
function Cc(a) {
  return gb(a.Kb, function(a) {
    return y(a[1])
  })
}
function vc(a) {
  a.yd && (a.ra && Cc(a)) && (t.clearTimeout(a.yd), delete a.yd);
  a.z && (a.z.xc--, delete a.z);
  for(var b = a.Bb, c = m, d = m;a.Kb.length && 0 == a.yb;) {
    var f = a.Kb.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.tb ? i : g) {
      try {
        var l = g.call(f || a.Nd, b);
        u(l) && (a.tb = a.tb && (l == b || l instanceof Error), a.Bb = b = l);
        b instanceof sc && (d = j, a.yb++)
      }catch(n) {
        b = n, a.tb = j, Cc(a) || (c = j)
      }
    }
  }
  a.Bb = b;
  d && a.yb && (zc(b, A(a.Jd, a, j), A(a.Jd, a, m)), b.ff = j);
  c && (a.yd = t.setTimeout(function() {
    e(new Ec(b))
  }, 0))
}
function Fc(a) {
  var b = new sc;
  b.Y(a);
  return b
}
function Gc(a) {
  var b = new sc;
  b.rb(a);
  return b
}
function xc() {
  I.call(this)
}
C(xc, I);
xc.prototype.message = "Already called";
function tc() {
  I.call(this)
}
C(tc, I);
tc.prototype.message = "Deferred was cancelled";
function Ec(a) {
  I.call(this);
  this.message = "Unhandled Error in Deferred: " + (a.message || "[No message]")
}
C(Ec, I);
function Hc(a) {
  this.B = a;
  this.Ob = [];
  this.Qd = [];
  this.ef = A(this.fg, this)
}
Hc.prototype.vd = k;
function Ic(a, b, c, d) {
  a.Ob.push([b, c, d]);
  a.vd == k && (a.vd = a.B.setTimeout(a.ef, 0))
}
Hc.prototype.fg = function() {
  this.vd = k;
  var a = this.Ob;
  this.Ob = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], f = c[1], c = c[2];
    try {
      d.apply(f, c)
    }catch(g) {
      this.B.setTimeout(function() {
        e(g)
      }, 0)
    }
  }
  if(0 == this.Ob.length) {
    a = this.Qd;
    this.Qd = [];
    for(b = 0;b < a.length;b++) {
      a[b].Y(k)
    }
  }
};
var Jc = new Hc(t.window);
function Kc(a) {
  return y(a) || "object" == typeof a && y(a.call) && y(a.apply)
}
;function Lc(a) {
  var b = [];
  Mc(new Nc, a, b);
  return b.join("")
}
function Nc() {
  this.hc = h
}
function Mc(a, b, c) {
  switch(typeof b) {
    case "string":
      Oc(b, c);
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
      if(v(b)) {
        var d = b.length;
        c.push("[");
        for(var f = "", g = 0;g < d;g++) {
          c.push(f), f = b[g], Mc(a, a.hc ? a.hc.call(b, "" + g, f) : f, c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), Oc(g, c), c.push(":"), Mc(a, a.hc ? a.hc.call(b, g, f) : f, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var Pc = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Qc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Oc(a, b) {
  b.push('"', a.replace(Qc, function(a) {
    if(a in Pc) {
      return Pc[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
    return Pc[a] = f + b.toString(16)
  }), '"')
}
;function Rc(a, b, c) {
  var d = cb(c, a);
  if(-1 != d) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = fa(a);
    if("boolean" == d || "number" == d || "null" == d || "undefined" == d) {
      b.push("" + a)
    }else {
      if("string" == d) {
        Oc(a, b)
      }else {
        if(Kc(a.F)) {
          a.F(b, c)
        }else {
          if(Kc(a.$e)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if("array" == d) {
                d = a.length;
                b.push("[");
                for(var f = "", g = 0;g < d;g++) {
                  b.push(f), Rc(a[g], b, c), f = ", "
                }
                b.push("]")
              }else {
                if("object" == d) {
                  if(ha(a) && "function" == typeof a.valueOf) {
                    b.push("new Date(", "" + a.valueOf(), ")")
                  }else {
                    for(var d = $a(a).concat(ab), f = {}, i = g = 0;i < d.length;) {
                      var l = d[i++], n = ia(l) ? "o" + ja(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(f, n) || (f[n] = j, d[g++] = l)
                    }
                    d.length = g;
                    b.push("{");
                    f = "";
                    for(i = 0;i < d.length;i++) {
                      g = d[i], Object.prototype.hasOwnProperty.call(a, g) && (l = a[g], b.push(f), Oc(g, b), b.push(": "), Rc(l, b, c), f = ", ")
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
function P(a, b, c) {
  c || (c = []);
  Rc(a, b, c)
}
function Q(a) {
  var b = [];
  P(a, b, h);
  return b.join("")
}
;function Sc(a, b) {
  this.x = u(a) ? a : 0;
  this.y = u(b) ? b : 0
}
Sc.prototype.N = function() {
  return new Sc(this.x, this.y)
};
Sc.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function Tc(a, b) {
  this.width = a;
  this.height = b
}
r = Tc.prototype;
r.N = function() {
  return new Tc(this.width, this.height)
};
r.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
r.Na = function() {
  return!(this.width * this.height)
};
r.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
r.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
var Uc;
function Vc(a) {
  a = a.className;
  return x(a) && a.match(/\S+/g) || []
}
function Wc(a, b) {
  for(var c = Vc(a), d = mb(arguments, 1), f = c.length + d.length, g = c, i = 0;i < d.length;i++) {
    ib(g, d[i]) || g.push(d[i])
  }
  a.className = c.join(" ");
  return c.length == f
}
function Xc(a, b) {
  var c = Vc(a), d = mb(arguments, 1), f = Yc(c, d);
  a.className = f.join(" ");
  return f.length == c.length - d.length
}
function Yc(a, b) {
  return eb(a, function(a) {
    return!ib(b, a)
  })
}
;var Zc = !E || Ta();
!Ha && !E || E && Ta() || Ha && G("1.9.1");
var $c = E && !G("9");
function ad(a) {
  return a ? new bd(cd(a)) : Uc || (Uc = new bd)
}
function R(a) {
  return x(a) ? document.getElementById(a) : a
}
function dd(a, b) {
  Ya(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in ed ? a.setAttribute(ed[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var ed = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function fd(a, b, c) {
  return gd(document, arguments)
}
function gd(a, b) {
  var c = b[0], d = b[1];
  if(!Zc && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', D(d.name), '"');
    if(d.type) {
      c.push(' type="', D(d.type), '"');
      var f = {};
      bb(f, d);
      d = f;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  d && (x(d) ? c.className = d : v(d) ? Wc.apply(k, [c].concat(d)) : dd(c, d));
  2 < b.length && hd(a, c, b, 2);
  return c
}
function hd(a, b, c, d) {
  function f(c) {
    c && b.appendChild(x(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && 0 < g.nodeType) ? db(id(g) ? lb(g) : g, f) : f(g)
  }
}
function jd(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function kd(a, b) {
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
function cd(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
var ld = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, md = {IMG:" ", BR:"\n"};
function nd(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, "number" == typeof a && 0 <= a && 32768 > a) : m
}
function od(a) {
  var b = [];
  pd(a, b, m);
  return b.join("")
}
function pd(a, b, c) {
  if(!(a.nodeName in ld)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in md) {
        b.push(md[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          pd(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function id(a) {
  if(a && "number" == typeof a.length) {
    if(ia(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(y(a)) {
      return"function" == typeof a.item
    }
  }
  return m
}
function bd(a) {
  this.fa = a || t.document || document
}
r = bd.prototype;
r.Wa = ad;
r.g = function(a) {
  return x(a) ? this.fa.getElementById(a) : a
};
function qd() {
  var a = (rd.fa.parentWindow || rd.fa.defaultView || window).document, a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
  return new Tc(a.clientWidth, a.clientHeight)
}
r.n = function(a, b, c) {
  return gd(this.fa, arguments)
};
r.createElement = function(a) {
  return this.fa.createElement(a)
};
r.createTextNode = function(a) {
  return this.fa.createTextNode(a)
};
r.appendChild = function(a, b) {
  a.appendChild(b)
};
r.append = function(a, b) {
  hd(cd(a), a, arguments, 1)
};
r.contains = kd;
function sd(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
var td = Ha ? "MozUserSelect" : F ? "WebkitUserSelect" : k;
function ud(a) {
  this.be = a;
  this.j = []
}
C(ud, M);
var vd = [];
function wd(a, b, c, d) {
  v(c) || (vd[0] = c, c = vd);
  for(var f = 0;f < c.length;f++) {
    a.j.push(O(b, c[f], d || a, m, a.be || a))
  }
  return a
}
function xd(a, b, c, d, f, g) {
  if(v(c)) {
    for(var i = 0;i < c.length;i++) {
      xd(a, b, c[i], d, f, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.be || a;
      f = !!f;
      if(b = jc(b, c, f)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].Qa && b[c].cb == d && b[c].capture == f && b[c].Xb == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, kc(b), jb(a.j, b))
  }
  return a
}
ud.prototype.hd = function() {
  db(this.j, kc);
  this.j.length = 0
};
ud.prototype.c = function() {
  ud.e.c.call(this);
  this.hd()
};
ud.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function yd() {
}
ea(yd);
yd.prototype.Jf = 0;
yd.Xa();
function zd(a) {
  this.Nb = a || ad();
  this.Cb = Ad
}
C(zd, qc);
zd.prototype.Df = yd.Xa();
var Ad = k;
function Bd(a, b) {
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
r = zd.prototype;
r.ba = k;
r.V = m;
r.q = k;
r.Cb = k;
r.z = k;
r.oa = k;
r.Lb = k;
r.gg = m;
function Cd(a) {
  return a.ba || (a.ba = ":" + (a.Df.Jf++).toString(36))
}
r.g = o("q");
function Dd(a) {
  return a.Ya || (a.Ya = new ud(a))
}
r.getParent = o("z");
r.md = function(a) {
  this.z && this.z != a && e(Error("Method not supported"));
  zd.e.md.call(this, a)
};
r.Wa = o("Nb");
r.n = function() {
  this.q = this.Nb.createElement("div")
};
function Ed(a, b) {
  a.V && e(Error("Component already rendered"));
  a.q || a.n();
  b ? b.insertBefore(a.q, k) : a.Nb.fa.body.appendChild(a.q);
  (!a.z || a.z.V) && a.qa()
}
r.qa = function() {
  this.V = j;
  Fd(this, function(a) {
    !a.V && a.g() && a.qa()
  })
};
r.sb = function() {
  Fd(this, function(a) {
    a.V && a.sb()
  });
  this.Ya && this.Ya.hd();
  this.V = m
};
r.c = function() {
  zd.e.c.call(this);
  this.V && this.sb();
  this.Ya && (this.Ya.b(), delete this.Ya);
  Fd(this, function(a) {
    a.b()
  });
  !this.gg && this.q && jd(this.q);
  this.z = this.q = this.Lb = this.oa = k
};
r.kb = function(a) {
  this.V && e(Error("Component already rendered"));
  this.Cb = a
};
function Fd(a, b) {
  a.oa && db(a.oa, b, h)
}
r.removeChild = function(a, b) {
  if(a) {
    var c = x(a) ? a : Cd(a), d;
    this.Lb && c ? (d = this.Lb, d = (c in d ? d[c] : h) || k) : d = k;
    a = d;
    c && a && (d = this.Lb, c in d && delete d[c], jb(this.oa, a), b && (a.sb(), a.q && jd(a.q)), c = a, c == k && e(Error("Unable to set parent component")), c.z = k, zd.e.md.call(c, k))
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function Gd() {
}
var Hd;
ea(Gd);
r = Gd.prototype;
r.Sb = function() {
};
r.n = function(a) {
  var b = a.Wa().n("div", Id(this, a).join(" "), a.ob);
  this.kd(a, b);
  return b
};
r.pb = function(a, b, c) {
  if(a = a.g ? a.g() : a) {
    if(E && !G("7")) {
      var d = Jd(Vc(a), b);
      d.push(b);
      oa(c ? Wc : Xc, a).apply(k, d)
    }else {
      c ? Wc(a, b) : Xc(a, b)
    }
  }
};
r.ee = function(a) {
  if(a.Cb == k) {
    var b = a.V ? a.q : a.Nb.fa.body, c;
    a: {
      c = cd(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(b, k))) {
        c = c.direction || c.getPropertyValue("direction");
        break a
      }
      c = ""
    }
    c || (c = (b.currentStyle ? b.currentStyle.direction : k) || b.style && b.style.direction);
    a.Cb = "rtl" == c
  }
  a.Cb && this.kb(a.g(), j);
  a.isEnabled() && this.Db(a, a.Ua)
};
r.kd = function(a, b) {
  a.isEnabled() || this.M(b, 1, j);
  a.d & 8 && this.M(b, 8, j);
  a.G & 16 && this.M(b, 16, !!(a.d & 16));
  a.G & 64 && this.M(b, 64, !!(a.d & 64))
};
r.kc = function(a, b) {
  var c = !b, d = E || Ga ? a.getElementsByTagName("*") : k;
  if(td) {
    if(c = c ? "none" : "", a.style[td] = c, d) {
      for(var f = 0, g;g = d[f];f++) {
        g.style[td] = c
      }
    }
  }else {
    if(E || Ga) {
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for(f = 0;g = d[f];f++) {
          g.setAttribute("unselectable", c)
        }
      }
    }
  }
};
r.kb = function(a, b) {
  this.pb(a, this.sa() + "-rtl", b)
};
r.ie = function(a) {
  var b;
  return a.G & 32 && (b = a.Ka()) ? nd(b) : m
};
r.Db = function(a, b) {
  var c;
  if(a.G & 32 && (c = a.Ka())) {
    if(!b && a.d & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.d & 32 && a.Vd()
    }
    nd(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
r.od = function(a, b) {
  a.style.display = b ? "" : "none"
};
r.K = function(a, b, c) {
  var d = a.g();
  if(d) {
    var f = Kd(this, b);
    f && this.pb(a, f, c);
    this.M(d, b, c)
  }
};
r.M = function(a, b, c) {
  Hd || (Hd = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Hd[b]) && a.setAttribute("aria-" + b, c)
};
r.Ka = function(a) {
  return a.g()
};
r.sa = p("goog-control");
function Id(a, b) {
  var c = a.sa(), d = [c], f = a.sa();
  f != c && d.push(f);
  c = b.d;
  for(f = [];c;) {
    var g = c & -c;
    f.push(Kd(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.$) && d.push.apply(d, c);
  E && !G("7") && d.push.apply(d, Jd(d));
  return d
}
function Jd(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  db([], function(d) {
    hb(d, oa(ib, a)) && (!b || ib(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Kd(a, b) {
  if(!a.Hd) {
    var c = a.sa();
    a.Hd = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Hd[b]
}
;function Ld(a, b) {
  a || e(Error("Invalid class name " + a));
  y(b) || e(Error("Invalid decorator function " + b))
}
var Md = {};
function Nd(a, b, c, d, f) {
  if(!E && (!F || !G("525"))) {
    return j
  }
  if(Ja && f) {
    return Od(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || E && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(E && Ta());
    case 27:
      return!F
  }
  return Od(a)
}
function Od(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || F && 0 == a) {
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
function Pd(a) {
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
;function Qd(a, b) {
  a && Rd(this, a, b)
}
C(Qd, qc);
r = Qd.prototype;
r.q = k;
r.Zb = k;
r.Qc = k;
r.$b = k;
r.wa = -1;
r.va = -1;
var Sd = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Td = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Ud = E || 
F && G("525");
r = Qd.prototype;
r.zf = function(a) {
  if(F && (17 == this.wa && !a.ctrlKey || 18 == this.wa && !a.altKey)) {
    this.va = this.wa = -1
  }
  Ud && !Nd(a.keyCode, this.wa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.va = Ha ? Pd(a.keyCode) : a.keyCode
};
r.Bf = function() {
  this.va = this.wa = -1
};
r.handleEvent = function(a) {
  var b = a.ga, c, d;
  E && "keypress" == a.type ? (c = this.va, d = 13 != c && 27 != c ? b.keyCode : 0) : F && "keypress" == a.type ? (c = this.va, d = 0 <= b.charCode && 63232 > b.charCode && Od(c) ? b.charCode : 0) : Ga ? (c = this.va, d = Od(c) ? b.keyCode : 0) : (c = b.keyCode || this.va, d = b.charCode || 0, Ja && (63 == d && 224 == c) && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in Sd ? f = Sd[c] : 25 == c && a.shiftKey && (f = 9) : g && g in Td && (f = Td[g]);
  a = f == this.wa;
  this.wa = f;
  b = new Vd(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.b()
  }
};
r.g = o("q");
function Rd(a, b, c) {
  a.$b && a.detach();
  a.q = b;
  a.Zb = O(a.q, "keypress", a, c);
  a.Qc = O(a.q, "keydown", a.zf, c, a);
  a.$b = O(a.q, "keyup", a.Bf, c, a)
}
r.detach = function() {
  this.Zb && (kc(this.Zb), kc(this.Qc), kc(this.$b), this.$b = this.Qc = this.Zb = k);
  this.q = k;
  this.va = this.wa = -1
};
r.c = function() {
  Qd.e.c.call(this);
  this.detach()
};
function Vd(a, b, c, d) {
  d && this.Ma(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(Vd, $b);
function S(a, b, c) {
  zd.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ja(b);
      if(d = Md[d]) {
        break
      }
      b = b.e ? b.e.constructor : k
    }
    b = d ? y(d.Xa) ? d.Xa() : new d : k
  }
  this.u = b;
  this.ob = a
}
C(S, zd);
r = S.prototype;
r.ob = k;
r.d = 0;
r.G = 39;
r.wc = 255;
r.Xf = 0;
r.Ua = j;
r.$ = k;
r.Lc = j;
r.vc = m;
r.Mf = k;
r.Ka = function() {
  return this.u.Ka(this)
};
function Xd(a, b) {
  b && (a.$ ? ib(a.$, b) || a.$.push(b) : a.$ = [b], a.u.pb(a, b, j))
}
r.pb = function(a, b) {
  b ? Xd(this, a) : a && this.$ && (jb(this.$, a), 0 == this.$.length && (this.$ = k), this.u.pb(this, a, m))
};
r.n = function() {
  var a = this.u.n(this);
  this.q = a;
  var b = this.Mf || this.u.Sb();
  b && (a.setAttribute("role", b), a.oh = b);
  this.vc || this.u.kc(a, m);
  this.Ua || this.u.od(a, m)
};
r.qa = function() {
  S.e.qa.call(this);
  this.u.ee(this);
  if(this.G & -2 && (this.Lc && Yd(this, j), this.G & 32)) {
    var a = this.Ka();
    if(a) {
      var b = this.ab || (this.ab = new Qd);
      Rd(b, a);
      wd(wd(wd(Dd(this), b, "key", this.Af), a, "focus", this.yf), a, "blur", this.Vd)
    }
  }
};
function Yd(a, b) {
  var c = Dd(a), d = a.g();
  b ? (wd(wd(wd(wd(c, d, "mouseover", a.$d), d, "mousedown", a.Yd), d, "mouseup", a.ae), d, "mouseout", a.Zd), E && wd(c, d, "dblclick", a.Xd)) : (xd(xd(xd(xd(c, d, "mouseover", a.$d), d, "mousedown", a.Yd), d, "mouseup", a.ae), d, "mouseout", a.Zd), E && xd(c, d, "dblclick", a.Xd))
}
r.sb = function() {
  S.e.sb.call(this);
  this.ab && this.ab.detach();
  this.Ua && this.isEnabled() && this.u.Db(this, m)
};
r.c = function() {
  S.e.c.call(this);
  this.ab && (this.ab.b(), delete this.ab);
  delete this.u;
  this.$ = this.ob = k
};
function Zd(a) {
  a = a.ob;
  if(!a) {
    return""
  }
  if(!x(a)) {
    if(v(a)) {
      a = fb(a, od).join("")
    }else {
      if($c && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        pd(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      $c || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
r.kb = function(a) {
  S.e.kb.call(this, a);
  var b = this.g();
  b && this.u.kb(b, a)
};
r.kc = function(a) {
  this.vc = a;
  var b = this.g();
  b && this.u.kc(b, a)
};
r.od = function(a, b) {
  if(b || this.Ua != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.g();
    c && this.u.od(c, a);
    this.isEnabled() && this.u.Db(this, a);
    this.Ua = a;
    return j
  }
  return m
};
r.isEnabled = function() {
  return!(this.d & 1)
};
r.lc = function(a) {
  var b = this.getParent();
  if((!b || "function" != typeof b.isEnabled || b.isEnabled()) && $d(this, 1, !a)) {
    a || (this.setActive(m), ae(this, m)), this.Ua && this.u.Db(this, a), this.K(1, !a)
  }
};
function ae(a, b) {
  $d(a, 2, b) && a.K(2, b)
}
r.ge = function() {
  return!!(this.d & 4)
};
r.setActive = function(a) {
  $d(this, 4, a) && this.K(4, a)
};
r.K = function(a, b) {
  this.G & a && b != !!(this.d & a) && (this.u.K(this, a, b), this.d = b ? this.d | a : this.d & ~a)
};
function T(a, b) {
  return!!(a.wc & b) && !!(a.G & b)
}
function $d(a, b, c) {
  return!!(a.G & b) && !!(a.d & b) != c && (!(a.Xf & b) || a.dispatchEvent(Bd(b, c))) && !a.O
}
r.$d = function(a) {
  (!a.relatedTarget || !kd(this.g(), a.relatedTarget)) && (this.dispatchEvent("enter") && this.isEnabled() && T(this, 2)) && ae(this, j)
};
r.Zd = function(a) {
  if((!a.relatedTarget || !kd(this.g(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    T(this, 4) && this.setActive(m), T(this, 2) && ae(this, m)
  }
};
r.Yd = function(a) {
  if(this.isEnabled() && (T(this, 2) && ae(this, j), bc(a) && (!F || !Ja || !a.ctrlKey))) {
    T(this, 4) && this.setActive(j), this.u.ie(this) && this.Ka().focus()
  }
  !this.vc && (bc(a) && (!F || !Ja || !a.ctrlKey)) && a.preventDefault()
};
r.ae = function(a) {
  this.isEnabled() && (T(this, 2) && ae(this, j), this.ge() && (this.zb(a) && T(this, 4)) && this.setActive(m))
};
r.Xd = function(a) {
  this.isEnabled() && this.zb(a)
};
r.zb = function(a) {
  if(T(this, 16)) {
    var b = !(this.d & 16);
    $d(this, 16, b) && this.K(16, b)
  }
  T(this, 8) && $d(this, 8, j) && this.K(8, j);
  T(this, 64) && (b = !(this.d & 64), $d(this, 64, b) && this.K(64, b));
  b = new Xb("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.fd = a.fd);
  return this.dispatchEvent(b)
};
r.yf = function() {
  T(this, 32) && $d(this, 32, j) && this.K(32, j)
};
r.Vd = function() {
  T(this, 4) && this.setActive(m);
  T(this, 32) && $d(this, 32, m) && this.K(32, m)
};
r.Af = function(a) {
  return this.Ua && this.isEnabled() && this.Kc(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
r.Kc = function(a) {
  return 13 == a.keyCode && this.zb(a)
};
y(S) || e(Error("Invalid component class " + S));
y(Gd) || e(Error("Invalid renderer class " + Gd));
var be = ja(S);
Md[be] = Gd;
Ld("goog-control", function() {
  return new S(k)
});
function ce() {
}
C(ce, Gd);
ea(ce);
r = ce.prototype;
r.Sb = p("button");
r.M = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : ce.e.M.call(this, a, b, c)
};
r.n = function(a) {
  var b = ce.e.n.call(this, a), c = a.Ub();
  c && this.nd(b, c);
  (c = a.Vb()) && this.mc(b, c);
  a.G & 16 && this.M(b, 16, !!(a.d & 16));
  return b
};
r.Vb = da;
r.mc = da;
r.Ub = function(a) {
  return a.title
};
r.nd = function(a, b) {
  a && (a.title = b || "")
};
r.sa = p("goog-button");
function de() {
}
C(de, ce);
ea(de);
r = de.prototype;
r.Sb = function() {
};
r.n = function(a) {
  a.V && m != a.Lc && Yd(a, m);
  a.Lc = m;
  a.wc &= -256;
  a.V && a.d & 32 && e(Error("Component already rendered"));
  a.d & 32 && a.K(32, m);
  a.G &= -33;
  return a.Wa().n("button", {"class":Id(this, a).join(" "), disabled:!a.isEnabled(), title:a.Ub() || "", value:a.Vb() || ""}, Zd(a) || "")
};
r.ee = function(a) {
  wd(Dd(a), a.g(), "click", a.zb)
};
r.kc = da;
r.kb = da;
r.ie = function(a) {
  return a.isEnabled()
};
r.Db = da;
r.K = function(a, b, c) {
  de.e.K.call(this, a, b, c);
  if((a = a.g()) && 1 == b) {
    a.disabled = c
  }
};
r.Vb = function(a) {
  return a.value
};
r.mc = function(a, b) {
  a && (a.value = b)
};
r.M = da;
function ee(a, b, c) {
  S.call(this, a, b || de.Xa(), c)
}
C(ee, S);
r = ee.prototype;
r.Vb = o("We");
r.mc = function(a) {
  this.We = a;
  this.u.mc(this.g(), a)
};
r.Ub = o("Te");
r.nd = function(a) {
  this.Te = a;
  this.u.nd(this.g(), a)
};
r.c = function() {
  ee.e.c.call(this);
  delete this.We;
  delete this.Te
};
r.qa = function() {
  ee.e.qa.call(this);
  if(this.G & 32) {
    var a = this.Ka();
    a && wd(Dd(this), a, "keyup", this.Kc)
  }
};
r.Kc = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.zb(a) : 32 == a.keyCode
};
Ld("goog-button", function() {
  return new ee(k)
});
function fe() {
}
C(fe, ce);
ea(fe);
fe.prototype.n = function(a) {
  var b = {"class":"goog-inline-block " + Id(this, a).join(" "), title:a.Ub() || ""}, b = a.Wa().n("div", b, ge(this, a.ob, a.Wa()));
  this.kd(a, b);
  return b
};
fe.prototype.Sb = p("button");
fe.prototype.kd = function(a, b) {
  a.isEnabled() || this.M(b, 1, j);
  a.d & 8 && this.M(b, 8, j);
  a.G & 16 && this.M(b, 16, j);
  a.d & 64 && this.M(b, 64, j)
};
function ge(a, b, c) {
  return c.n("div", "goog-inline-block " + (a.sa() + "-outer-box"), c.n("div", "goog-inline-block " + (a.sa() + "-inner-box"), b))
}
fe.prototype.sa = p("goog-custom-button");
function he(a, b, c) {
  ee.call(this, a, b || fe.Xa(), c)
}
C(he, ee);
Ld("goog-custom-button", function() {
  return new he(k)
});
function ie() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ B()).toString(36)
}
function je(a) {
  return a.substr(0, a.length - 1)
}
var ke = /^(0|[1-9]\d*)$/, le = /^(0|\-?[1-9]\d*)$/;
function me(a) {
  var b = ne;
  return ke.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function oe(a) {
  var b = fa(a);
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
;var pe, qe;
function re(a, b) {
  this.Va = a;
  this.Ra = b
}
re.prototype.R = function(a) {
  return a instanceof re && this.Va == a.Va && this.Ra.join(",") == a.Ra
};
re.prototype.F = function(a, b) {
  a.push("new SACK(", "" + this.Va, ", ");
  P(this.Ra, a, b);
  a.push(")")
};
function se() {
  this.I = new K
}
se.prototype.Ia = -1;
se.prototype.L = 0;
se.prototype.append = function(a) {
  var b = oe(a);
  this.I.set(this.Ia + 1, [a, b]);
  this.Ia += 1;
  this.L += b
};
se.prototype.F = function(a) {
  a.push("<Queue with ", "" + this.I.r(), " item(s), counter=#", "" + this.Ia, ", size=", "" + this.L, ">")
};
function te(a) {
  a = a.I.aa();
  nb(a);
  return a
}
function ue() {
  this.Ga = new K
}
ue.prototype.Oa = -1;
ue.prototype.L = 0;
function ve(a) {
  var b = a.Ga.aa();
  nb(b);
  return new re(a.Oa, b)
}
var we = {};
function xe(a, b) {
  switch(fa(b)) {
    case "string":
      a.push("<string>", D(b), "</string>");
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
        a.push('<property id="', d, '">'), xe(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', D(c), '">'), xe(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function ye(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, f = arguments;
  d.push("<arguments>");
  for(var g = f.length, i = 1;i < g;i++) {
    xe(d, f[i])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var ze = m, Ae = "";
function Be(a) {
  a = a.match(/[\d]+/g);
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var Ce = navigator.plugins["Shockwave Flash"];
  Ce && (ze = j, Ce.description && (Ae = Be(Ce.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (ze = j, Ae = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var De = navigator.mimeTypes["application/x-shockwave-flash"];
    (ze = De && De.enabledPlugin) && (Ae = Be(De.enabledPlugin.description))
  }else {
    try {
      var Ee = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), ze = j, Ae = Be(Ee.GetVariable("$version"))
    }catch(Fe) {
      try {
        Ee = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), ze = j, Ae = "6.0.21"
      }catch(Ge) {
        try {
          Ee = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), ze = j, Ae = Be(Ee.GetVariable("$version"))
        }catch(He) {
        }
      }
    }
  }
}
var Ie = Ae;
function Je(a) {
  this.o = new K;
  a && this.uc(a)
}
function Ke(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ja(a) : b.substr(0, 1) + a
}
r = Je.prototype;
r.r = function() {
  return this.o.r()
};
r.add = function(a) {
  this.o.set(Ke(a), a)
};
r.uc = function(a) {
  for(var a = qb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
r.hd = function(a) {
  for(var a = qb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
r.remove = function(a) {
  return this.o.remove(Ke(a))
};
r.clear = function() {
  this.o.clear()
};
r.Na = function() {
  return this.o.Na()
};
r.contains = function(a) {
  return this.o.Z(Ke(a))
};
r.D = function() {
  return this.o.D()
};
r.N = function() {
  return new Je(this)
};
r.R = function(a) {
  return this.r() == pb(a) && Le(this, a)
};
function Le(a, b) {
  var c = pb(b);
  if(a.r() > c) {
    return m
  }
  !(b instanceof Je) && 5 < c && (b = new Je(b));
  return tb(a, function(a) {
    if("function" == typeof b.contains) {
      a = b.contains(a)
    }else {
      if("function" == typeof b.Mb) {
        a = b.Mb(a)
      }else {
        if(ga(b) || x(b)) {
          a = ib(b, a)
        }else {
          a: {
            for(var c in b) {
              if(b[c] == a) {
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
  })
}
;function Me(a) {
  return Ne(a || arguments.callee.caller, [])
}
function Ne(a, b) {
  var c = [];
  if(ib(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Oe(a) + "(");
      for(var d = a.arguments, f = 0;f < d.length;f++) {
        0 < f && c.push(", ");
        var g;
        g = d[f];
        switch(typeof g) {
          case "object":
            g = g ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            g = "" + g;
            break;
          case "boolean":
            g = g ? "true" : "false";
            break;
          case "function":
            g = (g = Oe(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        c.push(g)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Ne(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Oe(a) {
  if(Pe[a]) {
    return Pe[a]
  }
  a = "" + a;
  if(!Pe[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Pe[a] = b ? b[1] : "[Anonymous]"
  }
  return Pe[a]
}
var Pe = {};
function Qe(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
Qe.prototype.Ic = k;
Qe.prototype.Hc = k;
var Re = 0;
Qe.prototype.reset = function(a, b, c, d, f) {
  "number" == typeof f || Re++;
  this.Se = d || B();
  this.W = a;
  this.te = b;
  this.pe = c;
  delete this.Ic;
  delete this.Hc
};
Qe.prototype.jb = aa("W");
function Se(a) {
  this.If = a
}
Se.prototype.z = k;
Se.prototype.W = k;
Se.prototype.oa = k;
Se.prototype.vb = k;
function Te(a, b) {
  this.name = a;
  this.value = b
}
Te.prototype.toString = o("name");
var Ue = new Te("SHOUT", 1200), Ve = new Te("SEVERE", 1E3), We = new Te("WARNING", 900), Xe = new Te("INFO", 800), Ye = new Te("CONFIG", 700), Ze = new Te("FINE", 500), $e = new Te("FINEST", 300), af = new Te("ALL", 0), bf = [new Te("OFF", Infinity), Ue, Ve, We, Xe, Ye, Ze, new Te("FINER", 400), $e, af], cf = k;
function df(a) {
  if(!cf) {
    cf = {};
    for(var b = 0, c;c = bf[b];b++) {
      cf[c.value] = c, cf[c.name] = c
    }
  }
  return cf[a] || k
}
r = Se.prototype;
r.getParent = o("z");
r.jb = aa("W");
function ef(a) {
  if(a.W) {
    return a.W
  }
  if(a.z) {
    return ef(a.z)
  }
  Va("Root logger has no level set.");
  return k
}
r.log = function(a, b, c) {
  if(a.value >= ef(this).value) {
    a = this.xf(a, b, c);
    b = "log:" + a.te;
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.vb) {
        for(var f = 0, g = h;g = c.vb[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
r.xf = function(a, b, c) {
  var d = new Qe(a, "" + b, this.If);
  if(c) {
    d.Ic = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var i;
      var l = ca("window.location.href");
      if(x(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var n, q, H = m;
        try {
          n = c.lineNumber || c.nh || "Not available"
        }catch(s) {
          n = "Not available", H = j
        }
        try {
          q = c.fileName || c.filename || c.sourceURL || l
        }catch(w) {
          q = "Not available", H = j
        }
        i = H || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:q, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + D(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + D(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + D(Me(g) + "-> ")
    }catch(z) {
      f = "Exception trying to expose exception! You win, we lose. " + z
    }
    d.Hc = f
  }
  return d
};
function U(a, b) {
  a.log(Ve, b, h)
}
function V(a, b, c) {
  a.log(We, b, c)
}
r.info = function(a, b) {
  this.log(Xe, a, b)
};
function W(a, b) {
  a.log(Ze, b, h)
}
function X(a, b) {
  a.log($e, b, h)
}
var ff = {}, gf = k;
function hf() {
  gf || (gf = new Se(""), ff[""] = gf, gf.jb(Ye))
}
function jf() {
  hf();
  return gf
}
function Y(a) {
  hf();
  var b;
  if(!(b = ff[a])) {
    b = new Se(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Y(a.substr(0, c));
    c.oa || (c.oa = {});
    c.oa[d] = b;
    b.z = c;
    ff[a] = b
  }
  return b
}
;function kf(a, b) {
  zd.call(this, b);
  this.uf = a;
  this.Gc = new ud(this);
  this.Qb = new K
}
C(kf, zd);
r = kf.prototype;
r.a = Y("goog.ui.media.FlashObject");
r.ig = "window";
r.Ed = "#000000";
r.bf = "sameDomain";
function lf(a, b, c) {
  a.zd = x(b) ? b : Math.round(b) + "px";
  a.Mc = x(c) ? c : Math.round(c) + "px";
  a.g() && (b = a.g() ? a.g().firstChild : k, c = a.zd, a = a.Mc, c instanceof Tc ? (a = c.height, c = c.width) : a == h && e(Error("missing height argument")), b.style.width = sd(c), b.style.height = sd(a))
}
r.qa = function() {
  kf.e.qa.call(this);
  var a = this.g(), b;
  b = E ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = E ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = pa(c, this.ig), d = this.Qb.aa(), f = this.Qb.D(), g = [], i = 0;i < d.length;i++) {
    g.push(encodeURIComponent("" + d[i]) + "=" + encodeURIComponent("" + f[i]))
  }
  b = pa(b, Cd(this), Cd(this), "goog-ui-media-flash-object", D(this.uf), D(g.join("&")), this.Ed, this.bf, c);
  a.innerHTML = b;
  this.zd && this.Mc && lf(this, this.zd, this.Mc);
  wd(this.Gc, this.g(), Za(Vb), Yb)
};
r.n = function() {
  this.He != k && !(0 <= ya(Ie, this.He)) && (V(this.a, "Required flash version not found:" + this.He), e(Error("Method not supported")));
  var a = this.Wa().createElement("div");
  a.className = "goog-ui-media-flash";
  this.q = a
};
r.c = function() {
  kf.e.c.call(this);
  this.Qb = k;
  this.Gc.b();
  this.Gc = k
};
function mf(a) {
  I.call(this, a)
}
C(mf, I);
mf.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function nf(a, b, c) {
  function d() {
    f && delete t.__loadFlashObject_callbacks[f]
  }
  var f;
  if(Ha && !G("1.8.1.20")) {
    return Gc(new mf("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= ya(Ie, "9"))) {
    return Gc(new mf("Need Flash Player 9+; had " + (Ie ? Ie : "none")))
  }
  var g;
  f = "_" + ie();
  var i = new sc(d);
  t.__loadFlashObject_callbacks[f] = function() {
    a.setTimeout(function() {
      d();
      i.Y(R(g))
    }, 0)
  };
  b.Qb.set("onloadcallback", '__loadFlashObject_callbacks["' + f + '"]()');
  g = Cd(b);
  Ed(b, c);
  return i
}
function of(a, b, c) {
  var d = nf(a, b, c), f = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  Bc(d, function(b) {
    a.clearTimeout(f);
    return b
  });
  return d
}
;function pf(a, b) {
  this.ba = "_" + ie();
  this.qc = a;
  this.za = b;
  this.Fa = a.Fa
}
C(pf, M);
r = pf.prototype;
r.eb = j;
r.Cc = m;
r.a = Y("cw.net.FlashSocket");
r.F = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.ba);
  a.push("'>")
};
function qf(a, b, c) {
  "frames" == b ? (a = a.za, rf(a.C), sf(a.C, c)) : "stillreceiving" == b ? (c = a.za, X(c.a, "onstillreceiving"), rf(c.C)) : "connect" == b ? (c = a.za, c.a.info("onconnect"), rf(c.C), a = c.nb, c.nb = k, a.length && (X(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.nc.Ib(a))) : "close" == b ? (a.eb = m, a.b()) : "ioerror" == b ? (a.eb = m, b = a.za, V(b.a, "onioerror: " + Q(c)), tf(b.C, m), a.b()) : "securityerror" == b ? (a.eb = m, b = a.za, V(b.a, "onsecurityerror: " + Q(c)), 
  tf(b.C, m), a.b()) : e(Error("bad event: " + b))
}
function uf(a) {
  a.Cc = j;
  a.eb = m;
  a.b()
}
r.Ac = function(a, b) {
  try {
    var c = this.Fa.CallFunction(ye("__FC_connect", this.ba, a, b, "<int32/>\n"))
  }catch(d) {
    return U(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), uf(this)
  }
  '"OK"' != c && e(Error("__FC_connect failed? ret: " + c))
};
r.Ib = function(a) {
  try {
    var b = this.Fa.CallFunction(ye("__FC_writeFrames", this.ba, a))
  }catch(c) {
    return U(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), uf(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (V(this.a, "Flash no longer knows of " + this.ba + "; disposing."), this.b()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
r.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.eb);
  pf.e.c.call(this);
  var a = this.Fa;
  delete this.Fa;
  if(this.eb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(ye("__FC_close", this.ba)))
    }catch(b) {
      U(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Cc = j
    }
  }
  if(this.Cc) {
    a = this.za, V(a.a, "oncrash"), tf(a.C, j)
  }else {
    this.za.onclose()
  }
  delete this.za;
  delete this.qc.Za[this.ba]
};
function vf(a, b) {
  this.p = a;
  this.Fa = b;
  this.Za = {};
  this.zc = "__FST_" + ie();
  t[this.zc] = A(this.of, this);
  var c = b.CallFunction(ye("__FC_setCallbackFunc", this.zc));
  '"OK"' != c && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
C(vf, M);
r = vf.prototype;
r.a = Y("cw.net.FlashSocketTracker");
r.F = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  P(this.Za, a, b);
  a.push(">")
};
r.Dc = function(a) {
  a = new pf(this, a);
  return this.Za[a.ba] = a
};
r.mf = function(a, b, c, d) {
  var f = this.Za[a];
  f ? "frames" == b && d ? (qf(f, "ioerror", "FlashConnector hadError while handling data."), f.b()) : qf(f, b, c) : V(this.a, "Cannot dispatch because we have no instance: " + Q([a, b, c, d]))
};
r.of = function(a, b, c, d) {
  try {
    Ic(this.p, this.mf, this, [a, b, c, d])
  }catch(f) {
    t.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
r.c = function() {
  vf.e.c.call(this);
  for(var a = Za(this.Za);a.length;) {
    a.pop().b()
  }
  delete this.Za;
  delete this.Fa;
  t[this.zc] = h
};
function wf(a) {
  this.C = a;
  this.nb = []
}
C(wf, M);
r = wf.prototype;
r.a = Y("cw.net.FlashSocketConduit");
r.Ib = function(a) {
  this.nb ? (X(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.nb.push.apply(this.nb, a)) : (X(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.nc.Ib(a))
};
r.Ac = function(a, b) {
  this.nc.Ac(a, b)
};
r.onclose = function() {
  this.a.info("onclose");
  tf(this.C, m)
};
r.c = function() {
  this.a.info("in disposeInternal.");
  wf.e.c.call(this);
  this.nc.b();
  delete this.C
};
var xf = [];
function yf() {
  var a = new sc;
  xf.push(a);
  return a
}
function zf(a) {
  var b = xf;
  xf = [];
  db(b, function(b) {
    b.Y(a)
  })
}
function Af(a, b) {
  if(xf.length) {
    return yf()
  }
  var c = new kf(b + "FlashConnector.swf?cb=" + Bf);
  c.Ed = "#777777";
  lf(c, 300, 30);
  var d = R("minerva-elements");
  d || e(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
  var f = R("minerva-elements-FlashConnectorSwf");
  f || (f = fd("div", {id:"minerva-elements-FlashConnectorSwf"}), d.appendChild(f));
  pe = of(a.B, c, f);
  yc(pe, zf);
  return yf()
}
;function Cf() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;var ne = Math.pow(2, 53);
var Df = {$e:p("<cw.eq.Wildcard>")};
function Ef(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function Ff(a, b, c) {
  var d = fa(a), f = fa(b);
  if(a == Df || b == Df) {
    return j
  }
  if(a != k && "function" == typeof a.R) {
    return c && c.push("running custom equals function on left object"), a.R(b, c)
  }
  if(b != k && "function" == typeof b.R) {
    return c && c.push("running custom equals function on right object"), b.R(a, c)
  }
  if(Ef(d) || Ef(f)) {
    a = a === b
  }else {
    if(a instanceof RegExp && b instanceof RegExp) {
      a = a.toString() === b.toString()
    }else {
      if(ha(a) && ha(b)) {
        a = a.valueOf() === b.valueOf()
      }else {
        if("array" == d && "array" == f) {
          a: {
            if(c && c.push("descending into array"), a.length != b.length) {
              c && c.push("array length mismatch: " + a.length + ", " + b.length), a = m
            }else {
              d = 0;
              for(f = a.length;d < f;d++) {
                if(!Ff(a[d], b[d], c)) {
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
          if(a.Ze == Pb && b.Ze == Pb) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!Ff(a[g], b[g], c)) {
                  c && c.push("earlier comparisons indicate mismatch at property " + g);
                  a = m;
                  break a
                }
              }
              for(g in b) {
                if(!(g in a)) {
                  c && c.push("property " + g + " missing on left object");
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
  this.Pf = a;
  this.fc = b
}
Z.prototype.R = function(a, b) {
  return ia(a) && this.constructor == a.constructor && Ff(this.fc, a.fc, b)
};
Z.prototype.F = function(a, b) {
  a.push("new ", this.Pf, "(");
  for(var c = "", d = 0;d < this.fc.length;d++) {
    a.push(c), c = ", ", P(this.fc[d], a, b)
  }
  a.push(")")
};
function $(a) {
  I.call(this, a)
}
C($, I);
$.prototype.name = "cw.net.InvalidFrame";
function Gf() {
  var a = [];
  this.U(a);
  return a.join("")
}
function Hf() {
}
Hf.prototype.R = function(a, b) {
  return!(a instanceof Hf) ? m : Ff(If(this), If(a), b)
};
Hf.prototype.F = function(a, b) {
  a.push("<HelloFrame properties=");
  P(If(this), a, b);
  a.push(">")
};
function If(a) {
  return[a.ka, a.Be, a.de, a.Ge, a.Fb, a.sd, a.ue, a.se, a.Wc, a.qe, a.Ve, a.Re, a.Ca, a.ac]
}
Hf.prototype.P = Gf;
Hf.prototype.U = function(a) {
  var b = {};
  b.tnum = this.ka;
  b.ver = this.Be;
  b.format = this.de;
  b["new"] = this.Ge;
  b.id = this.Fb;
  b.ming = this.sd;
  b.pad = this.ue;
  b.maxb = this.se;
  u(this.Wc) && (b.maxt = this.Wc);
  b.maxia = this.qe;
  b.tcpack = this.Ve;
  b.eeds = this.Re;
  b.sack = this.Ca instanceof re ? je((new Jf(this.Ca)).P()) : this.Ca;
  b.seenack = this.ac instanceof re ? je((new Jf(this.ac)).P()) : this.ac;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(Lc(b), "H")
};
function Kf(a) {
  Z.call(this, "StringFrame", [a]);
  this.ud = a
}
C(Kf, Z);
Kf.prototype.P = Gf;
Kf.prototype.U = function(a) {
  a.push(this.ud, " ")
};
function Lf(a) {
  Z.call(this, "CommentFrame", [a]);
  this.jf = a
}
C(Lf, Z);
Lf.prototype.P = Gf;
Lf.prototype.U = function(a) {
  a.push(this.jf, "^")
};
function Mf(a) {
  Z.call(this, "SeqNumFrame", [a]);
  this.Me = a
}
C(Mf, Z);
Mf.prototype.P = Gf;
Mf.prototype.U = function(a) {
  a.push("" + this.Me, "N")
};
function Nf(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = ne;
    if(le.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
    for(var b = b[0].split(","), d = 0, f = b.length;d < f;d++) {
      var g = me(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new re(a, c)
}
function Jf(a) {
  Z.call(this, "SackFrame", [a]);
  this.Ca = a
}
C(Jf, Z);
Jf.prototype.P = Gf;
Jf.prototype.U = function(a) {
  var b = this.Ca;
  a.push(b.Ra.join(","), "|", "" + b.Va);
  a.push("A")
};
function Of(a) {
  Z.call(this, "StreamStatusFrame", [a]);
  this.le = a
}
C(Of, Z);
Of.prototype.P = Gf;
Of.prototype.U = function(a) {
  var b = this.le;
  a.push(b.Ra.join(","), "|", "" + b.Va);
  a.push("T")
};
function Pf() {
  Z.call(this, "StreamCreatedFrame", [])
}
C(Pf, Z);
Pf.prototype.P = Gf;
Pf.prototype.U = function(a) {
  a.push("C")
};
function Qf() {
  Z.call(this, "YouCloseItFrame", [])
}
C(Qf, Z);
Qf.prototype.P = Gf;
Qf.prototype.U = function(a) {
  a.push("Y")
};
function Rf(a, b) {
  Z.call(this, "ResetFrame", [a, b]);
  this.Ee = a;
  this.Dd = b
}
C(Rf, Z);
Rf.prototype.P = Gf;
Rf.prototype.U = function(a) {
  a.push(this.Ee, "|", "" + Number(this.Dd), "!")
};
var Sf = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Tf(a) {
  Z.call(this, "TransportKillFrame", [a]);
  this.reason = a
}
C(Tf, Z);
Tf.prototype.P = Gf;
Tf.prototype.U = function(a) {
  a.push(this.reason, "K")
};
function Uf(a) {
  a || e(new $("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new Kf(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = Nf(je(a)), a == k && e(new $("bad sack")), new Jf(a)
  }
  if("N" == b) {
    return a = me(je(a)), a == k && e(new $("bad seqNum")), new Mf(a)
  }
  if("T" == b) {
    return a = Nf(je(a)), a == k && e(new $("bad lastSackSeen")), new Of(a)
  }
  if("Y" == b) {
    return 1 != a.length && e(new $("leading garbage")), new Qf
  }
  if("^" == b) {
    return new Lf(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && e(new $("leading garbage")), new Pf
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && e(new $("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && e(new $("bad applicationLevel")), new Rf(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = Sf[a], a == k && e(new $("unknown kill reason: " + a)), new Tf(a)
  }
  e(new $("Invalid frame type " + b))
}
;function Vf(a, b, c, d) {
  this.contentWindow = a;
  this.Pb = b;
  this.td = c;
  this.wf = d
}
Vf.prototype.F = function(a, b) {
  a.push("<XDRFrame frameId=");
  P(this.wf, a, b);
  a.push(", expandedUrl=");
  P(this.Pb, a, b);
  a.push(", streams=");
  P(this.td, a, b);
  a.push(">")
};
function Wf() {
  this.frames = [];
  this.Uc = new K
}
Wf.prototype.a = Y("cw.net.XDRTracker");
function Xf(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor(Cf()) + ("" + Math.floor(Cf()))
  })
}
function Yf(a, b) {
  for(var c = Zf, d = 0;d < c.frames.length;d++) {
    var f = c.frames[d], g;
    if(g = 0 == f.td.length) {
      g = f.Pb;
      var i = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + i + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + Q(b) + " existing frame " + Q(f)), Fc(f)
    }
  }
  d = ie() + ie();
  f = Xf(a);
  g = t.location;
  g instanceof L || (g = Lb(g));
  f instanceof L || (f = Lb(f));
  var l = g;
  g = f;
  f = l.N();
  (i = !!g.Da) ? yb(f, g.Da) : i = !!g.Ta;
  if(i) {
    var n = g.Ta;
    zb(f);
    f.Ta = n
  }else {
    i = !!g.pa
  }
  i ? Ab(f, g.pa) : i = g.hb != k;
  n = g.xa;
  if(i) {
    Bb(f, g.hb)
  }else {
    if(i = !!g.xa) {
      if("/" != n.charAt(0) && (l.pa && !l.xa ? n = "/" + n : (l = f.xa.lastIndexOf("/"), -1 != l && (n = f.xa.substr(0, l + 1) + n))), ".." == n || "." == n) {
        n = ""
      }else {
        if(-1 != n.indexOf("./") || -1 != n.indexOf("/.")) {
          for(var l = 0 == n.lastIndexOf("/", 0), n = n.split("/"), q = [], H = 0;H < n.length;) {
            var s = n[H++];
            "." == s ? l && H == n.length && q.push("") : ".." == s ? ((1 < q.length || 1 == q.length && "" != q[0]) && q.pop(), l && H == n.length && q.push("")) : (q.push(s), l = j)
          }
          n = q.join("/")
        }
      }
    }
  }
  i ? Cb(f, n) : i = "" !== g.J.toString();
  i ? Db(f, g.J.toString() ? decodeURIComponent(g.J.toString()) : "") : i = !!g.Ja;
  i && (g = g.Ja, zb(f), f.Ja = g);
  f = f.toString();
  g = ("" + t.location).match(Wa)[3] || k;
  i = f.match(Wa)[3] || k;
  g == i ? (c.a.info("No need to make a real XDRFrame for " + Q(b)), c = Fc(new Vf(t, f, [b], k))) : ((g = R("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new sc, c.Uc.set(d, [i, f, b]), c.a.info("Creating new XDRFrame " + Q(d) + "for " + Q(b)), c = fd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:f + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = i);
  return c
}
Wf.prototype.kg = function(a) {
  var b = this.Uc.get(a);
  b || e(Error("Unknown frameId " + Q(a)));
  this.Uc.remove(b);
  var c = b[0], a = new Vf(R("minerva-xdrframe-" + a).contentWindow || (R("minerva-xdrframe-" + a).contentDocument || R("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (R("minerva-xdrframe-" + a).contentDocument || R("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.Y(a)
};
var Zf = new Wf;
t.__XHRTracker_xdrFrameLoaded = A(Zf.kg, Zf);
var $f;
$f = m;
var ag = Da();
ag && (-1 != ag.indexOf("Firefox") || -1 != ag.indexOf("Camino") || -1 != ag.indexOf("iPhone") || -1 != ag.indexOf("iPod") || -1 != ag.indexOf("iPad") || -1 != ag.indexOf("Android") || -1 != ag.indexOf("Chrome") && ($f = j));
var dg = $f;
var Bf = "4bdfc178fc0e508c0cd5efc3fdb09920";
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function eg(a, b, c, d, f, g) {
  sc.call(this, f, g);
  this.oe = a;
  this.Ec = [];
  this.Sd = !!b;
  this.tf = !!c;
  this.kf = !!d;
  for(b = 0;b < a.length;b++) {
    zc(a[b], A(this.Wd, this, b, j), A(this.Wd, this, b, m))
  }
  0 == a.length && !this.Sd && this.Y(this.Ec)
}
C(eg, sc);
eg.prototype.we = 0;
eg.prototype.Wd = function(a, b, c) {
  this.we++;
  this.Ec[a] = [b, c];
  this.ra || (this.Sd && b ? this.Y([a, c]) : this.tf && !b ? this.rb(c) : this.we == this.oe.length && this.Y(this.Ec));
  this.kf && !b && (c = k);
  return c
};
eg.prototype.rb = function(a) {
  eg.e.rb.call(this, a);
  db(this.oe, function(a) {
    a.cancel()
  })
};
function fg(a) {
  a = new eg(a, m, j);
  yc(a, function(a) {
    return fb(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function gg(a, b) {
  this.jg = a;
  this.re = b
}
gg.prototype.Rc = 0;
gg.prototype.cc = 0;
gg.prototype.Jc = m;
function hg(a) {
  var b = [];
  if(a.Jc) {
    return[b, 2]
  }
  var c = a.Rc, d = a.jg.responseText;
  for(a.Rc = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var f = d.substr(a.cc, c - a.cc), f = f.replace(/\r$/, "");
    if(f.length > a.re) {
      return a.Jc = j, [b, 2]
    }
    b.push(f);
    a.cc = c += 1
  }
  return a.Rc - a.cc - 1 > a.re ? (a.Jc = j, [b, 2]) : [b, 1]
}
;function ig(a, b, c) {
  this.C = b;
  this.X = a;
  this.Bc = c
}
C(ig, M);
r = ig.prototype;
r.a = Y("cw.net.XHRMaster");
r.Aa = -1;
r.Vc = function(a, b, c) {
  this.Bc.__XHRSlave_makeRequest(this.X, a, b, c)
};
r.ta = o("Aa");
r.Zc = function(a, b) {
  1 != b && U(this.a, Q(this.X) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  rf(this.C);
  sf(this.C, a)
};
r.$c = function(a) {
  W(this.a, "ongotheaders_: " + Q(a));
  var b = k;
  "Content-Length" in a && (b = me(a["Content-Length"]));
  a = this.C;
  W(a.a, a.l() + " got Content-Length: " + b);
  a.ea == jg && (b == k && (V(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), kg(a, 2E3 + 1E3 * (b / 3072)))
};
r.ad = function(a) {
  1 != a && W(this.a, this.C.l() + "'s XHR's readyState is " + a);
  this.Aa = a;
  2 <= this.Aa && rf(this.C)
};
r.Yc = function() {
  this.C.b()
};
r.c = function() {
  ig.e.c.call(this);
  delete lg.ia[this.X];
  this.Bc.__XHRSlave_dispose(this.X);
  delete this.Bc
};
function mg() {
  this.ia = {}
}
C(mg, M);
r = mg.prototype;
r.a = Y("cw.net.XHRMasterTracker");
r.Dc = function(a, b) {
  var c = "_" + ie(), d = new ig(c, a, b);
  return this.ia[c] = d
};
r.Zc = function(a, b, c) {
  if(Ha) {
    for(var d = [], f = 0, g = b.length;f < g;f++) {
      d[f] = b[f]
    }
    b = d
  }else {
    b = kb(b)
  }
  (d = this.ia[a]) ? d.Zc(b, c) : U(this.a, "onframes_: no master for " + Q(a))
};
r.$c = function(a, b) {
  var c = this.ia[a];
  c ? c.$c(b) : U(this.a, "ongotheaders_: no master for " + Q(a))
};
r.ad = function(a, b) {
  var c = this.ia[a];
  c ? c.ad(b) : U(this.a, "onreadystatechange_: no master for " + Q(a))
};
r.Yc = function(a) {
  var b = this.ia[a];
  b ? (delete this.ia[b.X], b.Yc()) : U(this.a, "oncomplete_: no master for " + Q(a))
};
r.c = function() {
  mg.e.c.call(this);
  for(var a = Za(this.ia);a.length;) {
    a.pop().b()
  }
  delete this.ia
};
var lg = new mg;
t.__XHRMaster_onframes = A(lg.Zc, lg);
t.__XHRMaster_oncomplete = A(lg.Yc, lg);
t.__XHRMaster_ongotheaders = A(lg.$c, lg);
t.__XHRMaster_onreadystatechange = A(lg.ad, lg);
function ng(a, b, c) {
  this.ca = a;
  this.host = b;
  this.port = c
}
function og(a, b, c) {
  this.host = a;
  this.port = b;
  this.bg = c
}
function pg(a, b) {
  b || (b = a);
  this.ca = a;
  this.Ea = b
}
pg.prototype.F = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  P(this.ca, a, b);
  a.push(", secondaryUrl=");
  P(this.Ea, a, b);
  a.push(">")
};
function qg(a, b, c, d) {
  this.ca = a;
  this.Ae = b;
  this.Ea = c;
  this.Le = d;
  (!(0 == this.ca.indexOf("http://") || 0 == this.ca.indexOf("https://")) || !(0 == this.Ea.indexOf("http://") || 0 == this.Ea.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Ae.location.href;
  Xa(this.ca, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Le.location.href;
  Xa(this.Ea, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
qg.prototype.F = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  P(this.ca, a, b);
  a.push(", secondaryUrl=");
  P(this.Ea, a, b);
  a.push(">")
};
var rg = new Lf(";)]}");
function sg() {
}
sg.prototype.Td = p(1);
function tg(a) {
  t.setTimeout(function() {
    u(a.message) && a.stack && (a.message += "\n" + a.stack);
    e(a)
  }, 0)
}
function ug(a) {
  this.Yf = a
}
ug.prototype.F = function(a, b) {
  a.push("<UserContext for ");
  P(this.Yf, a, b);
  a.push(">")
};
function vg(a, b, c, d) {
  Z.call(this, "TransportInfo", [a, b, c, d]);
  this.ka = a
}
C(vg, Z);
function wg(a, b, c) {
  this.t = a;
  this.Zf = b ? b : new sg;
  this.p = c ? c : Jc;
  this.Gb = new Je;
  this.Fb = ie() + ie();
  this.da = new se;
  this.Pc = new ue;
  this.Hb = k;
  this.rc = [];
  this.lb = new ug(this);
  this.df = A(this.eg, this);
  F && (this.Hb = hc(t, "load", this.Qf, m, this))
}
C(wg, M);
r = wg.prototype;
r.a = Y("cw.net.ClientStream");
r.me = new re(-1, []);
r.ne = new re(-1, []);
r.Hf = 50;
r.Gf = 1048576;
r.cd = k;
r.bd = k;
r.dd = k;
r.ed = k;
r.onreset = k;
r.ye = k;
r.ib = k;
r.qd = m;
r.jd = m;
r.d = 1;
r.wd = -1;
r.h = k;
r.s = k;
r.Ab = k;
r.rd = 0;
r.ze = 0;
r.Ke = 0;
r.F = function(a, b) {
  a.push("<ClientStream id=");
  P(this.Fb, a, b);
  a.push(", state=", "" + this.d);
  a.push(", primary=");
  P(this.h, a, b);
  a.push(", secondary=");
  P(this.s, a, b);
  a.push(", resetting=");
  P(this.Ab, a, b);
  a.push(">")
};
function xg(a) {
  var b = [-1];
  a.h && b.push(a.h.fb);
  a.s && b.push(a.s.fb);
  return Math.max.apply(Math.max, b)
}
function yg(a) {
  if(!(3 > a.d)) {
    zg(a);
    var b = 0 != a.da.I.r(), c = ve(a.Pc), d = !c.R(a.ne) && !(a.h && c.R(a.h.bb) || a.s && c.R(a.s.bb)), f = xg(a);
    if((b = b && f < a.da.Ia) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.h.Ha ? (X(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.h, c != d.bb && (!d.ja && !d.v.length && Ag(d), d.v.push(new Jf(c)), d.bb = c)), b && Bg(a.h, a.da, f + 1), a.h.ha()) : a.s == k ? a.qd ? (X(a.a, "tryToSend_: creating secondary to send " + g), a.s = Cg(a, m, j), a.s && (b && Bg(a.s, a.da, f + 1), a.s.ha())) : (X(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.jd = j) : X(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
function zg(a) {
  a.ib != k && (a.p.B.clearTimeout(a.ib), a.ib = k)
}
r.eg = function() {
  this.ib = k;
  yg(this)
};
function Dg(a) {
  a.ib == k && (a.ib = a.p.B.setTimeout(a.df, 6))
}
r.Qf = function() {
  this.Hb = k;
  if(this.h && this.h.$a()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.h;
    a.tc = j;
    a.b()
  }
  this.s && this.s.$a() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.s, a.tc = j, a.b())
};
function Eg(a, b) {
  var c;
  u(c) || (c = j);
  3 < a.d && e(Error("sendString: Can't send in state " + a.d));
  c && (x(b) || e(Error("sendString: not a string: " + Q(b))), /^([ -~]*)$/.test(b) || e(Error("sendString: string has illegal chars: " + Q(b))));
  a.da.append(b);
  Dg(a)
}
function Cg(a, b, c) {
  var d;
  a.t instanceof qg ? d = 1 == a.Zf.Td() ? jg : Fg : a.t instanceof og ? d = Gg : e(Error("Don't support endpoint " + Q(a.t)));
  a.wd += 1;
  b = new Hg(a.p, a, a.wd, d, a.t, b);
  X(a.a, "Created: " + b.l());
  if(c) {
    if(a.dd) {
      c = new vg(b.ka, b.ma, b.Ba, b.Ha);
      try {
        a.dd.call(a.lb, c)
      }catch(f) {
        V(a.a, "ontransportcreated raised uncaught exception", f), tg(f)
      }
    }
    if(4 == a.d || a.O) {
      return k
    }
  }
  a.Gb.add(b);
  return b
}
function Ig(a, b, c) {
  var d = new Jg(a.p, a, b, c);
  X(a.a, "Created: " + d.l() + ", delay=" + b + ", times=" + c);
  a.Gb.add(d);
  return d
}
function Kg(a, b) {
  a.Gb.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  W(a.a, "Offline: " + b.l());
  var c = 4 == a.d && b.Ye;
  if(b instanceof Hg && !c) {
    if(a.ed) {
      var d = new vg(b.ka, b.ma, b.Ba, b.Ha);
      try {
        a.ed.call(a.lb, d)
      }catch(f) {
        V(a.a, "ontransportdestroyed raised uncaught exception", f), tg(f)
      }
    }
    if(4 == a.d || a.O) {
      return
    }
  }
  a.rd = b.ya ? a.rd + b.ya : 0;
  1 <= a.rd && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), Lg(a, "stream penalty reached limit", m), a.b());
  if(3 < a.d) {
    c ? (W(a.a, "Disposing because resettingTransport_ is done."), a.b()) : W(a.a, "Not creating a transport because ClientStream is in state " + a.d)
  }else {
    c = b instanceof Jg;
    if(!c && b.tc) {
      var g = F ? dg ? [0, 1] : [9, 20] : [0, 0], c = g[0], d = g[1];
      X(a.a, "getDelayForNextTransport_: " + Q({delay:c, times:d}))
    }else {
      if(d = b.Id(), b == a.h ? d ? g = ++a.ze : c || (g = a.ze = 0) : d ? g = ++a.Ke : c || (g = a.Ke = 0), c || !g) {
        d = c = 0, X(a.a, "getDelayForNextTransport_: " + Q({count:g, delay:c, times:d}))
      }else {
        var i = 2E3 * Math.min(g, 3), l = Math.floor(4E3 * Math.random()) - 2E3, n = Math.max(0, b.Ue - b.xd), d = (c = Math.max(0, i + l - n)) ? 1 : 0;
        X(a.a, "getDelayForNextTransport_: " + Q({count:g, base:i, variance:l, oldDuration:n, delay:c, times:d}))
      }
    }
    c = [c, d];
    g = c[0];
    c = c[1];
    if(b == a.h) {
      a.h = k;
      if(c) {
        a.h = Ig(a, g, c)
      }else {
        g = xg(a);
        a.h = Cg(a, j, j);
        if(!a.h) {
          return
        }
        Bg(a.h, a.da, g + 1)
      }
      a.h.ha()
    }else {
      b == a.s && (a.s = k, c ? (a.s = Ig(a, g, c), a.s.ha()) : yg(a))
    }
  }
}
function Lg(a, b, c) {
  if(a.onreset) {
    try {
      a.onreset.call(a.lb, b, c)
    }catch(d) {
      V(a.a, "onreset raised uncaught exception", d), tg(d)
    }
  }
}
r.reset = function(a) {
  3 < this.d && e(Error("reset: Can't send reset in state " + this.d));
  zg(this);
  0 != this.da.I.r() && V(this.a, "reset: strings in send queue will never be sent: " + Q(this.da));
  this.d = 4;
  this.h && this.h.Ha ? (this.a.info("reset: Sending ResetFrame over existing primary."), Mg(this.h, a), this.h.ha()) : (this.h && (W(this.a, "reset: Disposing primary before sending ResetFrame."), this.h.b()), this.s && (W(this.a, "reset: Disposing secondary before sending ResetFrame."), this.s.b()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Ab = Cg(this, m, m), Mg(this.Ab, a), this.Ab.ha());
  Lg(this, a, j)
};
function Ng(a, b, c, d) {
  var f;
  f = a.Pc;
  for(var g = a.Hf, i = a.Gf, l = [], n = m, q = 0, H = c.length;q < H;q++) {
    var s = c[q], w = s[0], s = s[1];
    if(w == f.Oa + 1) {
      f.Oa += 1;
      for(l.push(s);;) {
        w = f.Oa + 1;
        s = f.Ga.get(w, we);
        if(s === we) {
          break
        }
        l.push(s[0]);
        f.Ga.remove(w);
        f.L -= s[1];
        f.Oa = w
      }
    }else {
      if(!(w <= f.Oa)) {
        if(g != k && f.Ga.r() >= g) {
          n = j;
          break
        }
        var z = oe(s);
        if(i != k && f.L + z > i) {
          n = j;
          break
        }
        f.Ga.set(w, [s, z]);
        f.L += z
      }
    }
  }
  f.Ga.Na() && f.Ga.clear();
  f = [l, n];
  c = f[0];
  f = f[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      i = c[g];
      if(a.cd) {
        try {
          a.cd.call(a.lb, i)
        }catch(Dc) {
          V(a.a, "onstring raised uncaught exception", Dc), tg(Dc)
        }
      }
      if(4 == a.d || a.O) {
        return
      }
    }
  }
  d || Dg(a);
  if(!(4 == a.d || a.O) && f) {
    U(b.a, b.l() + "'s peer caused rwin overflow."), b.b()
  }
}
r.Pd = function(a) {
  U(this.a, "Failed to start " + Q(this) + "; error was " + Q(a.message));
  this.b()
};
r.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.d && e(Error("ClientStream.start: " + Q(this) + " already started"));
  this.bd && this.bd(this);
  this.d = 2;
  if(this.t instanceof pg) {
    var a = Yf(this.t.ca, this), b = Yf(this.t.Ea, this), a = fg([a, b]);
    yc(a, A(this.rf, this));
    Ac(a, A(this.Pd, this))
  }else {
    if(this.t instanceof ng) {
      if(qe) {
        this.Rd()
      }else {
        var a = Af(this.p, this.t.ca), c = this;
        yc(a, function(a) {
          qe || (qe = new vf(c.p, a));
          return k
        });
        yc(a, A(this.Rd, this));
        Ac(a, A(this.Pd, this))
      }
    }else {
      Og(this)
    }
  }
};
r.rf = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Pb, f = a[1].Pb;
  this.rc.push(a[0]);
  this.rc.push(a[1]);
  this.t = new qg(d, b, f, c);
  Og(this)
};
r.Rd = function() {
  this.t = new og(this.t.host, this.t.port, qe);
  Og(this)
};
function Og(a) {
  a.d = 3;
  a.h = Cg(a, j, j);
  a.h && (Bg(a.h, a.da, k), a.h.ha())
}
r.c = function() {
  this.a.info(Q(this) + " in disposeInternal.");
  zg(this);
  this.d = 5;
  for(var a = this.Gb.D(), b = 0;b < a.length;b++) {
    a[b].b()
  }
  for(a = 0;a < this.rc.length;a++) {
    jb(this.rc[a].td, this)
  }
  F && this.Hb && (kc(this.Hb), this.Hb = k);
  this.ye && this.ye.call(this.lb);
  delete this.Gb;
  delete this.h;
  delete this.s;
  delete this.Ab;
  delete this.lb;
  wg.e.c.call(this)
};
var jg = 1, Fg = 2, Gg = 3;
function Hg(a, b, c, d, f, g) {
  this.p = a;
  this.A = b;
  this.ka = c;
  this.ea = d;
  this.t = f;
  this.v = [];
  this.ma = g;
  this.Ha = !this.$a();
  this.Ba = this.ea != jg;
  this.cf = A(this.$f, this)
}
C(Hg, M);
r = Hg.prototype;
r.a = Y("cw.net.ClientTransport");
r.k = k;
r.xd = k;
r.Ue = k;
r.gc = k;
r.ja = m;
r.oc = m;
r.bb = k;
r.Rb = 0;
r.fb = -1;
r.ec = -1;
r.Ye = m;
r.tc = m;
r.ya = 0;
r.ub = m;
r.F = function(a) {
  a.push("<ClientTransport #", "" + this.ka, ", becomePrimary=", "" + this.ma, ">")
};
r.l = function() {
  return(this.ma ? "Prim. T#" : "Sec. T#") + this.ka
};
r.Id = function() {
  return!(!this.ub && this.Rb)
};
r.$a = function() {
  return this.ea == jg || this.ea == Fg
};
function Pg(a, b) {
  nb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Ng(a.A, a, b, !a.Ba)
}
function Qg(a, b, c) {
  try {
    var d = Uf(b);
    a.Rb += 1;
    W(a.a, a.l() + " RECV " + Q(d));
    var f;
    1 == a.Rb && !d.R(rg) && a.$a() ? (V(a.a, a.l() + " is closing soon because got bad preamble: " + Q(d)), f = j) : f = m;
    if(f) {
      return j
    }
    if(d instanceof Kf) {
      if(!/^([ -~]*)$/.test(d.ud)) {
        return a.ub = j
      }
      a.ec += 1;
      c.push([a.ec, d.ud])
    }else {
      if(d instanceof Jf) {
        var g = a.A, i = d.Ca;
        g.me = i;
        var l = g.da, n = i.Va, c = m;
        n > l.Ia && (c = j);
        for(var q = te(l).concat(), d = 0;d < q.length;d++) {
          var H = q[d];
          if(H > n) {
            break
          }
          var s = l.I.get(H)[1];
          l.I.remove(H);
          l.L -= s
        }
        for(d = 0;d < i.Ra.length;d++) {
          var w = i.Ra[d];
          w > l.Ia && (c = j);
          l.I.Z(w) && (s = l.I.get(w)[1], l.I.remove(w), l.L -= s)
        }
        l.I.Na() && l.I.clear();
        if(c) {
          return V(a.a, a.l() + " is closing soon because got bad SackFrame"), a.ub = j
        }
      }else {
        if(d instanceof Mf) {
          a.ec = d.Me - 1
        }else {
          if(d instanceof Of) {
            a.A.ne = d.le
          }else {
            if(d instanceof Qf) {
              return X(a.a, a.l() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof Tf) {
              return a.ub = j, "stream_attach_failure" == d.reason ? a.ya += 1 : "acked_unsent_strings" == d.reason && (a.ya += 0.5), X(a.a, a.l() + " is closing soon because got " + Q(d)), j
            }
            if(!(d instanceof Lf)) {
              if(d instanceof Pf) {
                var z = a.A, Dc = !a.Ba;
                X(z.a, "Stream is now confirmed to exist at server.");
                z.qd = j;
                z.jd && !Dc && (z.jd = m, yg(z))
              }else {
                if(c.length) {
                  Pg(a, c);
                  if(!v(c)) {
                    for(var Wd = c.length - 1;0 <= Wd;Wd--) {
                      delete c[Wd]
                    }
                  }
                  c.length = 0
                }
                if(d instanceof Rf) {
                  var bg = a.A;
                  Lg(bg, d.Ee, d.Dd);
                  bg.b();
                  return j
                }
                e(Error(a.l() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(cg) {
    return cg instanceof $ || e(cg), V(a.a, a.l() + " is closing soon because got InvalidFrame: " + Q(b)), a.ub = j
  }
  return m
}
function sf(a, b) {
  a.oc = j;
  try {
    for(var c = m, d = [], f = 0, g = b.length;f < g;f++) {
      if(a.O) {
        a.a.info(a.l() + " returning from loop because we're disposed.");
        return
      }
      if(c = Qg(a, b[f], d)) {
        break
      }
    }
    d.length && Pg(a, d);
    a.oc = m;
    a.v.length && a.ha();
    c && (X(a.a, a.l() + " closeSoon is true.  Frames were: " + Q(b)), a.b())
  }finally {
    a.oc = m
  }
}
r.$f = function() {
  V(this.a, this.l() + " timed out due to lack of connection or no data being received.");
  this.b()
};
function Rg(a) {
  a.gc != k && (a.p.B.clearTimeout(a.gc), a.gc = k)
}
function kg(a, b) {
  Rg(a);
  b = Math.round(b);
  a.gc = a.p.B.setTimeout(a.cf, b);
  W(a.a, a.l() + "'s receive timeout set to " + b + " ms.")
}
function rf(a) {
  a.ea != jg && (a.ea == Gg || a.ea == Fg ? kg(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ea)))
}
function Ag(a) {
  var b = new Hf;
  b.ka = a.ka;
  b.Be = 2;
  b.de = 2;
  a.A.qd || (b.Ge = j);
  b.Fb = a.A.Fb;
  b.sd = a.Ba;
  b.sd && (b.ue = 4096);
  b.se = 3E5;
  b.qe = a.Ba ? Math.floor(10) : 0;
  b.Ve = m;
  a.ma && (b.Re = k, b.Wc = Math.floor((a.Ba ? 358E4 : 25E3) / 1E3));
  b.Ca = ve(a.A.Pc);
  b.ac = a.A.me;
  a.v.push(b);
  a.bb = b.Ca
}
function tf(a, b) {
  b && (a.ya += 0.5);
  a.b()
}
r.ha = function() {
  this.ja && !this.Ha && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.oc) {
    X(this.a, this.l() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.ja;
    this.ja = j;
    !a && !this.v.length && Ag(this);
    for(a = 0;a < this.v.length;a++) {
      W(this.a, this.l() + " SEND " + Q(this.v[a]))
    }
    if(this.$a()) {
      for(var a = [], b = 0, c = this.v.length;b < c;b++) {
        this.v[b].U(a), a.push("\n")
      }
      this.v = [];
      a = a.join("");
      b = this.ma ? this.t.ca : this.t.Ea;
      this.k = lg.Dc(this, this.ma ? this.t.Ae : this.t.Le);
      this.xd = this.p.B === rc ? B() : this.p.B.getTime();
      this.k.Vc(b, "POST", a);
      kg(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Ba ? 0 : this.ma ? 25E3 : 0))
    }else {
      if(this.ea == Gg) {
        a = [];
        b = 0;
        for(c = this.v.length;b < c;b++) {
          a.push(this.v[b].P())
        }
        this.v = [];
        this.k ? this.k.Ib(a) : (b = this.t, this.k = new wf(this), this.k.nc = b.bg.Dc(this.k), this.xd = this.p.B === rc ? B() : this.p.B.getTime(), this.k.Ac(b.host, b.port), this.k.O || (this.k.Ib(a), this.k.O || kg(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.ea))
      }
    }
  }
};
function Bg(a, b, c) {
  !a.ja && !a.v.length && Ag(a);
  for(var d = Math.max(c, a.fb + 1), f = te(b), c = [], g = 0;g < f.length;g++) {
    var i = f[g];
    (d == k || i >= d) && c.push([i, b.I.get(i)[0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], f = g[0], g = g[1], (-1 == a.fb || a.fb + 1 != f) && a.v.push(new Mf(f)), a.v.push(new Kf(g)), a.fb = f
  }
}
r.c = function() {
  this.a.info(this.l() + " in disposeInternal.");
  Hg.e.c.call(this);
  this.Ue = this.p.B === rc ? B() : this.p.B.getTime();
  this.v = [];
  Rg(this);
  this.k && this.k.b();
  var a = this.A;
  this.A = k;
  Kg(a, this)
};
function Mg(a, b) {
  !a.ja && !a.v.length && Ag(a);
  a.v.push(new Rf(b, j));
  a.Ye = j
}
function Jg(a, b, c, d) {
  this.p = a;
  this.A = b;
  this.Od = c;
  this.Kd = d
}
C(Jg, M);
r = Jg.prototype;
r.ja = m;
r.Ha = m;
r.Wb = k;
r.bb = k;
r.a = Y("cw.net.DoNothingTransport");
function Sg(a) {
  a.Wb = a.p.B.setTimeout(function() {
    a.Wb = k;
    a.Kd--;
    a.Kd ? Sg(a) : a.b()
  }, a.Od)
}
r.ha = function() {
  this.ja && !this.Ha && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.ja = j;
  Sg(this)
};
r.F = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.Od, ">")
};
r.$a = p(m);
r.l = p("Wast. T");
r.Id = p(m);
r.c = function() {
  this.a.info(this.l() + " in disposeInternal.");
  Jg.e.c.call(this);
  this.Wb != k && this.p.B.clearTimeout(this.Wb);
  var a = this.A;
  this.A = k;
  Kg(a, this)
};
/*

 linkify - v0.3 - 6/27/2009
 http://benalman.com/code/test/js-linkify/

 Copyright (c) 2009 "Cowboy" Ben Alman
 Licensed under the MIT license
 http://benalman.com/about/license/

 Some regexps adapted from http://userscripts.org/scripts/review/7122
*/
var Tg, Ug, Vg, Wg;
Tg = RegExp("(?:\\b[a-z\\d.-]+://[^<>\\s]+|\\b(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:[;/][^#?<>\\s]*)?(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w)|(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w))", 
"ig");
Ug = /^[a-z\d.-]+:\/\//i;
Vg = {"'":"`", ">":"<", ")":"(", "]":"[", "}":"{", "\u00bb":"\u00ab", "\u203a":"\u2039"};
Wg = {Y:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, De:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
function Xg(a) {
  var b;
  b = b || {};
  var c = [], d, f;
  for(f in Wg) {
    u(b[f]) || (b[f] = Wg[f])
  }
  for(;f = Tg.exec(a);) {
    f = f[0];
    var g = Tg.lastIndex, i = g - f.length;
    if(!/[\/:]/.test(a.charAt(i - 1))) {
      do {
        var l = f, n = f.substr(-1), q = Vg[n];
        if(q && (q = f.match(RegExp("\\" + q + "(?!$)", "g")), n = f.match(RegExp("\\" + n, "g")), (q ? q.length : 0) < (n ? n.length : 0))) {
          f = f.substr(0, f.length - 1), g--
        }
        b.De && (f = f.replace(b.De, function(a) {
          g -= a.length;
          return""
        }))
      }while(f.length && f !== l);
      l = f;
      Ug.test(l) || (l = (-1 !== l.indexOf("@") ? !l.indexOf("mailto:") ? "" : "mailto:" : !l.indexOf("irc.") ? "irc://" : !l.indexOf("ftp.") ? "ftp://" : "http://") + l);
      d != i && (c.push([a.slice(d, i)]), d = g);
      c.push([f, l])
    }
  }
  c.push([a.substr(d)]);
  d = "";
  for(f = 0;f < c.length;f++) {
    d += b.Y.apply(t, c[f])
  }
  return d || a
}
;function Yg(a) {
  a = "" + a;
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
;function Zg() {
}
Zg.prototype.Jb = k;
var $g;
function ah() {
}
C(ah, Zg);
function bh(a) {
  return(a = ch(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function dh(a) {
  var b = {};
  ch(a) && (b[0] = j, b[1] = j);
  return b
}
ah.prototype.Nc = k;
function ch(a) {
  if(!a.Nc && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Nc = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Nc
}
$g = new ah;
function eh(a) {
  this.headers = new K;
  this.mb = a || k
}
C(eh, qc);
eh.prototype.a = Y("goog.net.XhrIo");
var fh = /^https?$/i;
r = eh.prototype;
r.la = m;
r.i = k;
r.sc = k;
r.Tc = "";
r.ke = "";
r.wb = "";
r.Fc = m;
r.Yb = m;
r.Oc = m;
r.La = m;
r.pc = 0;
r.Sa = k;
r.Je = "";
r.hg = m;
r.send = function(a, b, c, d) {
  this.i && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Tc = a;
  this.wb = "";
  this.ke = b;
  this.Fc = m;
  this.la = j;
  this.i = this.mb ? bh(this.mb) : bh($g);
  this.sc = this.mb ? this.mb.Jb || (this.mb.Jb = dh(this.mb)) : $g.Jb || ($g.Jb = dh($g));
  this.i.onreadystatechange = A(this.xe, this);
  try {
    W(this.a, gh(this, "Opening Xhr")), this.Oc = j, this.i.open(b, a, j), this.Oc = m
  }catch(f) {
    W(this.a, gh(this, "Error opening Xhr: " + f.message));
    hh(this, f);
    return
  }
  var a = c || "", g = this.headers.N();
  d && sb(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.Z("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  sb(g, function(a, b) {
    this.i.setRequestHeader(b, a)
  }, this);
  this.Je && (this.i.responseType = this.Je);
  "withCredentials" in this.i && (this.i.withCredentials = this.hg);
  try {
    this.Sa && (rc.clearTimeout(this.Sa), this.Sa = k), 0 < this.pc && (W(this.a, gh(this, "Will abort after " + this.pc + "ms if incomplete")), this.Sa = rc.setTimeout(A(this.ag, this), this.pc)), W(this.a, gh(this, "Sending request")), this.Yb = j, this.i.send(a), this.Yb = m
  }catch(i) {
    W(this.a, gh(this, "Send error: " + i.message)), hh(this, i)
  }
};
r.ag = function() {
  "undefined" != typeof ba && this.i && (this.wb = "Timed out after " + this.pc + "ms, aborting", W(this.a, gh(this, this.wb)), this.dispatchEvent("timeout"), this.abort(8))
};
function hh(a, b) {
  a.la = m;
  a.i && (a.La = j, a.i.abort(), a.La = m);
  a.wb = b;
  ih(a);
  jh(a)
}
function ih(a) {
  a.Fc || (a.Fc = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
r.abort = function() {
  this.i && this.la && (W(this.a, gh(this, "Aborting")), this.la = m, this.La = j, this.i.abort(), this.La = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), jh(this))
};
r.c = function() {
  this.i && (this.la && (this.la = m, this.La = j, this.i.abort(), this.La = m), jh(this, j));
  eh.e.c.call(this)
};
r.xe = function() {
  !this.Oc && !this.Yb && !this.La ? this.Kf() : kh(this)
};
r.Kf = function() {
  kh(this)
};
function kh(a) {
  if(a.la && "undefined" != typeof ba) {
    if(a.sc[1] && 4 == a.ta() && 2 == lh(a)) {
      W(a.a, gh(a, "Local request error detected and ignored"))
    }else {
      if(a.Yb && 4 == a.ta()) {
        rc.setTimeout(A(a.xe, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.ta()) {
          W(a.a, gh(a, "Request complete"));
          a.la = m;
          try {
            var b = lh(a), c, d;
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
              var f;
              if(f = 0 === b) {
                var g = ("" + a.Tc).match(Wa)[1] || k;
                if(!g && self.location) {
                  var i = self.location.protocol, g = i.substr(0, i.length - 1)
                }
                f = !fh.test(g ? g.toLowerCase() : "")
              }
              c = f
            }
            if(c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success")
            }else {
              var l;
              try {
                l = 2 < a.ta() ? a.i.statusText : ""
              }catch(n) {
                W(a.a, "Can not get status: " + n.message), l = ""
              }
              a.wb = l + " [" + lh(a) + "]";
              ih(a)
            }
          }finally {
            jh(a)
          }
        }
      }
    }
  }
}
function jh(a, b) {
  if(a.i) {
    var c = a.i, d = a.sc[0] ? da : k;
    a.i = k;
    a.sc = k;
    a.Sa && (rc.clearTimeout(a.Sa), a.Sa = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(f) {
      U(a.a, "Problem encountered resetting onreadystatechange: " + f.message)
    }
  }
}
r.ge = function() {
  return!!this.i
};
r.ta = function() {
  return this.i ? this.i.readyState : 0
};
function lh(a) {
  try {
    return 2 < a.ta() ? a.i.status : -1
  }catch(b) {
    return V(a.a, "Can not get status: " + b.message), -1
  }
}
r.getResponseHeader = function(a) {
  return this.i && 4 == this.ta() ? this.i.getResponseHeader(a) : h
};
function gh(a, b) {
  return b + " [" + a.ke + " " + a.Tc + " " + lh(a) + "]"
}
;var mh = !(E || F && !G("420+"));
function nh(a, b) {
  this.qc = a;
  this.X = b
}
C(nh, M);
r = nh.prototype;
r.k = k;
r.Aa = -1;
r.Ud = m;
r.ce = "Content-Length Server Date Expires Keep-Alive Content-Type Transfer-Encoding Cache-Control".split(" ");
function oh(a) {
  var b = hg(a.Md), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.X, c, b), 1 != b && a.b()) : a.b()
}
r.Cf = function() {
  oh(this);
  if(!this.O) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.X);
    this.b()
  }
};
r.Of = function() {
  var a = t.parent;
  if(a) {
    this.Aa = this.k.ta();
    if(2 <= this.Aa && !this.Ud) {
      for(var b = new K, c = this.ce.length;c--;) {
        var d = this.ce[c];
        try {
          b.set(d, this.k.i.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.r() && (this.Ud = j, a.__XHRMaster_ongotheaders(this.X, xb(b)), this.O)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.X, this.Aa);
    mh && 3 == this.Aa && oh(this)
  }else {
    this.b()
  }
};
r.Vc = function(a, b, c) {
  this.k = new eh;
  O(this.k, "readystatechange", A(this.Of, this));
  O(this.k, "complete", A(this.Cf, this));
  this.k.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Md = new gg(this.k.i, 1048576)
};
r.c = function() {
  nh.e.c.call(this);
  delete this.Md;
  this.k && this.k.b();
  delete this.qc.Eb[this.X];
  delete this.qc
};
function ph() {
  this.Eb = {}
}
C(ph, M);
ph.prototype.Ff = function(a, b, c, d) {
  var f = new nh(this, a);
  this.Eb[a] = f;
  f.Vc(b, c, d)
};
ph.prototype.nf = function(a) {
  (a = this.Eb[a]) && a.b()
};
ph.prototype.c = function() {
  ph.e.c.call(this);
  for(var a = Za(this.Eb);a.length;) {
    a.pop().b()
  }
  delete this.Eb
};
var qh = new ph;
t.__XHRSlave_makeRequest = A(qh.Ff, qh);
t.__XHRSlave_dispose = A(qh.nf, qh);
var rh = Y("cw.net.demo");
function sh() {
}
sh.prototype.Td = function() {
  return Boolean(Number((new L(document.location)).J.get("httpStreaming", "0"))) ? 2 : 1
};
function th() {
  this.Fe = B()
}
var uh = new th;
th.prototype.set = aa("Fe");
th.prototype.reset = function() {
  this.set(B())
};
th.prototype.get = o("Fe");
function vh(a) {
  this.gd = a || "";
  this.Wf = uh
}
vh.prototype.Sf = j;
vh.prototype.Uf = j;
vh.prototype.Tf = j;
vh.prototype.Ne = m;
function wh(a) {
  return 10 > a ? "0" + a : "" + a
}
function xh(a, b) {
  var c = (a.Se - b) / 1E3, d = c.toFixed(3), f = 0;
  if(1 > c) {
    f = 2
  }else {
    for(;100 > c;) {
      f++, c *= 10
    }
  }
  for(;0 < f--;) {
    d = " " + d
  }
  return d
}
function yh(a) {
  vh.call(this, a)
}
C(yh, vh);
yh.prototype.Ne = j;
function zh(a) {
  this.Xc = a || 100;
  this.na = []
}
r = zh.prototype;
r.xb = 0;
r.add = function(a) {
  this.na[this.xb] = a;
  this.xb = (this.xb + 1) % this.Xc
};
r.get = function(a) {
  a = Ah(this, a);
  return this.na[a]
};
r.set = function(a, b) {
  a = Ah(this, a);
  this.na[a] = b
};
r.r = function() {
  return this.na.length
};
r.Na = function() {
  return 0 == this.na.length
};
r.clear = function() {
  this.xb = this.na.length = 0
};
r.D = function() {
  for(var a = this.r(), b = this.r(), c = [], a = this.r() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
r.aa = function() {
  for(var a = [], b = this.r(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
r.Z = function(a) {
  return a < this.r()
};
r.Mb = function(a) {
  for(var b = this.r(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return j
    }
  }
  return m
};
function Ah(a, b) {
  b >= a.na.length && e(Error("Out of bounds exception"));
  return a.na.length < a.Xc ? b : (a.xb + Number(b)) % a.Xc
}
;function Bh(a, b) {
  this.ua = a || "";
  this.gd = b || "";
  this.gb = [];
  this.jc = new zh(Ch);
  this.Nf = A(this.af, this);
  this.vf = new yh(this.gd);
  this.sf = {};
  if(j != this.he) {
    this.he = j;
    var c = jf(), d = this.Nf;
    c.vb || (c.vb = []);
    c.vb.push(d)
  }
  this.qb = "1" == Dh(this.ua, "enabled");
  t.setInterval(A(this.Rf, this), 7500)
}
var Ch = 500;
r = Bh.prototype;
r.Xe = "LOGGING";
r.pf = m;
r.w = k;
r.Ad = m;
r.he = m;
r.Fd = k;
r.Sc = B();
r.Ma = function() {
  this.qb && Eh(this)
};
r.isEnabled = o("qb");
r.lc = function(a) {
  (this.qb = a) && Eh(this);
  Fh(this, "enabled", a ? "1" : "0")
};
function Gh(a) {
  return!!a.w && !a.w.closed
}
r.gf = function() {
  this.jc.clear();
  Gh(this) && this.Cd()
};
r.af = function(a) {
  if(!this.sf[a.pe]) {
    var b = this.vf, c;
    switch(a.W.value) {
      case Ue.value:
        c = "dbg-sh";
        break;
      case Ve.value:
        c = "dbg-sev";
        break;
      case We.value:
        c = "dbg-w";
        break;
      case Xe.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.gd, " ");
    if(b.Sf) {
      var f = new Date(a.Se);
      d.push("[", wh(f.getFullYear() - 2E3) + wh(f.getMonth() + 1) + wh(f.getDate()) + " " + wh(f.getHours()) + ":" + wh(f.getMinutes()) + ":" + wh(f.getSeconds()) + "." + wh(Math.floor(f.getMilliseconds() / 10)), "] ")
    }
    b.Uf && d.push("[", xa(xh(a, b.Wf.get())), "s] ");
    b.Tf && d.push("[", D(a.pe), "] ");
    d.push('<span class="', c, '">', ra(xa(D(a.te))));
    b.Ne && a.Ic && d.push("<br>", ra(xa(a.Hc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.qb ? (Eh(this), this.jc.add(b), Hh(this, b)) : this.jc.add(b);
    this.pf && a.W.value >= Ve.value && this.lc(j)
  }
};
function Hh(a, b) {
  a.gb.push(b);
  t.clearTimeout(a.Fd);
  750 < B() - a.Sc ? a.Bd() : a.Fd = t.setTimeout(A(a.Bd, a), 250)
}
r.Bd = function() {
  this.Sc = B();
  if(Gh(this)) {
    var a = this.w.document.body, a = a && 100 >= a.scrollHeight - (a.scrollTop + a.clientHeight);
    this.w.document.write(this.gb.join(""));
    this.gb.length = 0;
    a && this.w.scrollTo(0, 1E6)
  }
};
function Ih(a) {
  for(var b = a.jc.D(), c = 0;c < b.length;c++) {
    Hh(a, b[c])
  }
}
function Eh(a) {
  if(!Gh(a) && !a.Ad) {
    var b = Dh(a.ua, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), f = Number(b[2]), b = Number(b[3]);
    a.Ad = j;
    a.w = window.open("", E ? a.ua.replace(/[\s\-\.\,]/g, "_") : a.ua, "width=" + f + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    !a.w && !a.Vf && (alert("Logger popup was blocked"), a.Vf = j);
    a.Ad = m;
    a.w && a.Cd()
  }
}
r.Tb = p("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
r.Cd = function() {
  Gh(this) || (this.w.document.open(), Hh(this, "<style>" + this.Tb() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.Xe + "<br><small>Logger: " + this.ua + "</small></div><hr>"), Ih(this))
};
function Fh(a, b, c) {
  b += a.ua;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(B() + 2592E6)).toUTCString()
}
function Dh(a, b, c) {
  var a = b + a, b = "" + document.cookie, d = b.indexOf(a + "=");
  return-1 != d ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, -1 == c ? b.length : c))) : c || ""
}
r.Rf = function() {
  Gh(this) && Fh(this, "dbg", (this.w.screenX || this.w.screenLeft || 0) + "," + (this.w.screenY || this.w.screenTop || 0) + "," + (this.w.outerWidth || 800) + "," + (this.w.outerHeight || 500))
};
function Jh(a, b) {
  if(Kh) {
    var c = Lh(), d;
    for(d in c) {
      var f = d.replace("fancywindow.sel.", ""), f = Y(f), g = f.W, i = window.localStorage.getItem(d).toString();
      (!g || g.toString() != i) && f.jb(df(i))
    }
  }
  Bh.call(this, a, b)
}
C(Jh, Bh);
var Kh;
a: {
  try {
    Kh = !!window.localStorage.getItem;
    break a
  }catch(Mh) {
  }
  Kh = m
}
r = Jh.prototype;
r.Bd = function() {
  this.Sc = B();
  if(Gh(this)) {
    for(var a = this.H.g("log"), b = 100 >= a.scrollHeight - (a.scrollTop + a.offsetHeight), c = 0;c < this.gb.length;c++) {
      var d = this.H.n("div", "logmsg");
      d.innerHTML = this.gb[c];
      a.appendChild(d)
    }
    this.gb.length = 0;
    this.Ie();
    b && (a.scrollTop = a.scrollHeight)
  }
};
r.Cd = function() {
  if(Gh(this)) {
    var a = this.w.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.ua + "</title><style>" + this.Tb() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.ua + "</b></p><p>" + this.Xe + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (E ? a.body : this.w).onresize = A(this.Ie, this);
    this.H = new bd(a);
    this.H.g("openbutton").onclick = A(this.Lf, this);
    this.H.g("closebutton").onclick = A(this.hf, this);
    this.H.g("clearbutton").onclick = A(this.gf, this);
    this.H.g("exitbutton").onclick = A(this.qf, this);
    Ih(this)
  }
};
r.Lf = function() {
  var a = this.H.g("optionsarea");
  a.innerHTML = "";
  for(var b = Nh(), c = this.H, d = 0;d < b.length;d++) {
    var f = Y(b[d]), f = c.n("div", {}, Oh(this, "sel" + b[d], f.W ? f.W.name : "INHERIT"), c.n("span", {}, b[d] || "(root)"));
    a.appendChild(f)
  }
  this.H.g("options").style.display = "block";
  return m
};
function Oh(a, b, c) {
  for(var a = a.H, b = a.n("select", {id:b}), d = 0;d < bf.length;d++) {
    var f = bf[d], g = a.n("option", {}, f.name);
    c == f.name && (g.selected = j);
    b.appendChild(g)
  }
  b.appendChild(a.n("option", {selected:"INHERIT" == c}, "INHERIT"));
  return b
}
r.hf = function() {
  this.H.g("options").style.display = "none";
  for(var a = Nh(), b = this.H, c = 0;c < a.length;c++) {
    var d = Y(a[c]), f = b.g("sel" + a[c]), f = f.options[f.selectedIndex].text;
    "INHERIT" == f ? d.jb(k) : d.jb(df(f))
  }
  if(Kh) {
    a = Nh();
    b = Lh();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], f = Y(a[c]).W, d in b ? f ? window.localStorage.getItem(d) != f.name && window.localStorage.setItem(d, f.name) : window.localStorage.removeItem(d) : f && window.localStorage.setItem(d, f.name)
    }
  }
  return m
};
r.Ie = function() {
  var a = this.H, b = a.g("log"), c = a.g("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.fa.body.offsetHeight - c.offsetHeight - (E ? 4 : 0) + "px"
};
r.qf = function() {
  this.lc(m);
  this.w && this.w.close()
};
r.Tb = function() {
  return Jh.e.Tb.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function Lh() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != k && 0 == d.lastIndexOf("fancywindow.sel.", 0) && (a[d] = j)
  }
  return a
}
function Nh() {
  var a = $a(ff);
  a.sort();
  return a
}
;var Ph, Qh = Y("ljstream.logger");
window.onerror = function(a, b, c) {
  U(Qh, "window.onerror: message: " + Q(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Rh() {
}
Rh.prototype.Pe = function(a) {
  this.A = a;
  Eg(this.A, "subprotocol:ljstream");
  Sh(this)
};
Rh.prototype.Oe = function(a, b) {
  Qh.info("streamReset: reasonString=" + Q(a) + ", applicationLevel=" + b);
  Th("Disconnected from server.  Try reloading this page.");
  Uh = k
};
function Sh(a) {
  Qh.info("Sending preferences to server");
  Eg(a.A, Lc(["SetPreferences", {include_russian_posts:R("include_russian_posts").checked}]))
}
Rh.prototype.Qe = function(a) {
  var a = Yg(a), b = a[1];
  if("NewPost" == a[0]) {
    var a = b.title, c = b.url, b = b.body;
    (a = qa(a)) || (a = "[No title]");
    var d = Xg(D(b)), f = document, b = f.createElement("div");
    E ? (b.innerHTML = "<br>" + d, b.removeChild(b.firstChild)) : b.innerHTML = d;
    if(1 == b.childNodes.length) {
      b = b.removeChild(b.firstChild)
    }else {
      for(d = f.createDocumentFragment();b.firstChild;) {
        d.appendChild(b.firstChild)
      }
      b = d
    }
    a = fd("span", {}, fd("a", {href:c, "class":"ljpost-title-link"}, a), fd("span", {}, "\u00a0"), b);
    Vh(a)
  }
};
Rh.prototype.reset = function(a) {
  Qh.info("resetting with reason: " + a);
  this.A.reset(a)
};
var Uh = k, Wh = new Hc(t.window);
function Th(a) {
  a = fd("span", {"class":"important-message"}, a);
  Vh(a)
}
function Xh() {
  Uh && (Uh.reset("idle timeout fired"), Uh = k, Th("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var Yh = k;
function Zh() {
  Yh != k && Wh.B.clearTimeout(Yh);
  Uh && (Yh = Wh.B.setTimeout(Xh, 6E5))
}
O(window, ["click", "focus", "keydown", "keypress"], Zh, j);
var rd = new bd, $h = 0;
function Vh(a) {
  a = fd("div", {"class":"row-" + (0 == $h % 2 ? "even" : "odd")}, fd("nobr", {}, a));
  R("ljstream-container-inner").appendChild(a);
  $h += 1;
  if(Ph) {
    for(var b = a, a = b.offsetTop, c = b.offsetHeight;b.offsetParent;) {
      b = b.offsetParent, a += b.offsetTop
    }
    var d = document, b = !F && "CSS1Compat" == d.compatMode ? d.documentElement : d.body, d = d.parentWindow || d.defaultView;
    a + c <= (new Sc(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop)).y + qd().height || window.scrollBy(0, Math.round(qd().height / 2) + 80)
  }
}
function ai() {
  O(t, "load", function() {
    window.scrollTo(0, 0)
  });
  O(R("include_russian_posts"), "click", function() {
    Sh(Uh)
  });
  Ph = j;
  O(R("automatic_scroll"), "click", function(a) {
    Ph = a.target.checked
  });
  var a = new he("Clear posts");
  Xd(a, "clear-posts-button");
  Ed(a, R("prefs"));
  O(a, "action", function() {
    R("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = R("ljstream-container");
  a.style.marginTop = R("demo-header").offsetHeight + "px";
  R("demo-header").style.width = "9000px";
  var b = fd("div", {id:"ljstream-container-inner"});
  a.appendChild(b)
}
function bi() {
  jf().jb(af);
  if("1" == (new L(document.location)).J.get("logging")) {
    var a = new Jh("main");
    a.lc(j);
    a.Ma()
  }
  Qh.info("Logger works.");
  ai();
  a = new sh;
  Uh = new Rh;
  Zh();
  var b = (new L(document.location)).J, c = "http" != b.get("mode");
  if((b = Boolean(Number(b.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    V(rh, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), b = m
  }
  var d = b, b = new L(document.location);
  c ? c = new ng("/_minerva/", b.pa, t.__demo_mainSocketPort) : (d ? (c = t.__demo_shared_domain, x(c) || e(Error("domain was " + Q(c) + "; expected a string.")), b = b.N(), Ab(b, "_____random_____." + c)) : b = b.N(), Cb(b, "/_minerva/"), Db(b, "", h), c = new pg(b.toString().replace("_____random_____", "%random%")));
  a = new wg(c, a, Wh);
  c = Uh;
  u(c.Pe) || e(Error("Protocol is missing required method streamStarted"));
  u(c.Oe) || e(Error("Protocol is missing required method streamReset"));
  u(c.Qe) || e(Error("Protocol is missing required method stringReceived"));
  a.bd = A(c.Pe, c);
  a.onreset = A(c.Oe, c);
  a.cd = A(c.Qe, c);
  a.dd = u(c.cg) ? A(c.cg, c) : k;
  a.ed = u(c.dg) ? A(c.dg, c) : k;
  a.start()
}
var ci = ["__ljstream_init"], di = t;
!(ci[0] in di) && di.execScript && di.execScript("var " + ci[0]);
for(var ei;ci.length && (ei = ci.shift());) {
  !ci.length && u(bi) ? di[ei] = bi : di = di[ei] ? di[ei] : di[ei] = {}
}
;})();
