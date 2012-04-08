(function(){function f(a) {
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
var s, ba = ba || {}, t = this;
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
    return a.ge ? a.ge : a.ge = new a
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
function w(a) {
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
  a || f(Error());
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
var ra = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function sa(a) {
  a = "" + a;
  return!ra.test(a) ? encodeURIComponent(a) : a
}
function ta(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function D(a) {
  if(!ua.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(va, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(wa, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(xa, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(ya, "&quot;"));
  return a
}
var va = /&/g, wa = /</g, xa = />/g, ya = /\"/g, ua = /[&<>\"]/;
function za(a) {
  return ta(a.replace(/  /g, " &#160;"), h)
}
function Aa(a, b) {
  for(var c = 0, d = qa("" + a).split("."), e = qa("" + b).split("."), g = Math.max(d.length, e.length), i = 0;0 == c && i < g;i++) {
    var l = d[i] || "", n = e[i] || "", q = RegExp("(\\d*)(\\D*)", "g"), G = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = q.exec(l) || ["", "", ""], x = G.exec(n) || ["", "", ""];
      if(0 == r[0].length && 0 == x[0].length) {
        break
      }
      c = ((0 == r[1].length ? 0 : parseInt(r[1], 10)) < (0 == x[1].length ? 0 : parseInt(x[1], 10)) ? -1 : (0 == r[1].length ? 0 : parseInt(r[1], 10)) > (0 == x[1].length ? 0 : parseInt(x[1], 10)) ? 1 : 0) || ((0 == r[2].length) < (0 == x[2].length) ? -1 : (0 == r[2].length) > (0 == x[2].length) ? 1 : 0) || (r[2] < x[2] ? -1 : r[2] > x[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
}
;var Ba, Ca, Da, Ea, Fa;
function Ga() {
  return t.navigator ? t.navigator.userAgent : k
}
Fa = Ea = Da = Ca = Ba = m;
var Ha;
if(Ha = Ga()) {
  var Ia = t.navigator;
  Ba = 0 == Ha.indexOf("Opera");
  Ca = !Ba && -1 != Ha.indexOf("MSIE");
  Ea = (Da = !Ba && -1 != Ha.indexOf("WebKit")) && -1 != Ha.indexOf("Mobile");
  Fa = !Ba && !Da && "Gecko" == Ia.product
}
var Ja = Ba, E = Ca, Ka = Fa, F = Da, La = Ea, Ma = t.navigator, Na = -1 != (Ma && Ma.platform || "").indexOf("Mac"), Oa;
a: {
  var Pa = "", Qa;
  if(Ja && t.opera) {
    var Ra = t.opera.version, Pa = "function" == typeof Ra ? Ra() : Ra
  }else {
    if(Ka ? Qa = /rv\:([^\);]+)(\)|;)/ : E ? Qa = /MSIE\s+([^\);]+)(\)|;)/ : F && (Qa = /WebKit\/(\S+)/), Qa) {
      var Sa = Qa.exec(Ga()), Pa = Sa ? Sa[1] : ""
    }
  }
  if(E) {
    var Ta, Ua = t.document;
    Ta = Ua ? Ua.documentMode : h;
    if(Ta > parseFloat(Pa)) {
      Oa = "" + Ta;
      break a
    }
  }
  Oa = Pa
}
var Va = {};
function H(a) {
  return Va[a] || (Va[a] = 0 <= Aa(Oa, a))
}
var Wa = {};
function Xa() {
  return Wa[9] || (Wa[9] = E && !!document.documentMode && 9 <= document.documentMode)
}
;function I(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, I) : this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
C(I, Error);
I.prototype.name = "CustomError";
function Ya(a, b) {
  b.unshift(a);
  I.call(this, pa.apply(k, b));
  b.shift()
}
C(Ya, I);
Ya.prototype.name = "AssertionError";
function Za(a, b) {
  f(new Ya("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var $a = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function ab(a, b) {
  var c = a.match($a), d = b.match($a);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function bb(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
function cb(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function db(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var eb = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function fb(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < eb.length;g++) {
      c = eb[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var J = Array.prototype, gb = J.indexOf ? function(a, b, c) {
  return J.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(w(a)) {
    return!w(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, hb = J.forEach ? function(a, b, c) {
  J.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
}, ib = J.filter ? function(a, b, c) {
  return J.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = [], g = 0, i = w(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in i) {
      var n = i[l];
      b.call(c, n, l, a) && (e[g++] = n)
    }
  }
  return e
}, jb = J.map ? function(a, b, c) {
  return J.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), g = w(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in g && (e[i] = b.call(c, g[i], i, a))
  }
  return e
}, kb = J.some ? function(a, b, c) {
  return J.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && b.call(c, e[g], g, a)) {
      return j
    }
  }
  return m
}, lb = J.every ? function(a, b, c) {
  return J.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && !b.call(c, e[g], g, a)) {
      return m
    }
  }
  return j
};
function mb(a, b) {
  return 0 <= gb(a, b)
}
function nb(a, b) {
  var c = gb(a, b);
  0 <= c && J.splice.call(a, c, 1)
}
function ob(a) {
  return J.concat.apply(J, arguments)
}
function pb(a) {
  if(v(a)) {
    return ob(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
}
function qb(a, b, c) {
  return 2 >= arguments.length ? J.slice.call(a, b) : J.slice.call(a, b, c)
}
function rb(a, b) {
  J.sort.call(a, b || sb)
}
function sb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function tb(a) {
  if("function" == typeof a.r) {
    a = a.r()
  }else {
    if(ga(a) || w(a)) {
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
function ub(a) {
  if("function" == typeof a.F) {
    return a.F()
  }
  if(w(a)) {
    return a.split("")
  }
  if(ga(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return cb(a)
}
function vb(a) {
  if("function" == typeof a.ba) {
    return a.ba()
  }
  if("function" != typeof a.F) {
    if(ga(a) || w(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return db(a)
  }
}
function wb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ga(a) || w(a)) {
      hb(a, b, c)
    }else {
      for(var d = vb(a), e = ub(a), g = e.length, i = 0;i < g;i++) {
        b.call(c, e[i], d && d[i], a)
      }
    }
  }
}
function xb(a, b) {
  if("function" == typeof a.every) {
    return a.every(b, h)
  }
  if(ga(a) || w(a)) {
    return lb(a, b, h)
  }
  for(var c = vb(a), d = ub(a), e = d.length, g = 0;g < e;g++) {
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
    c % 2 && f(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.xc(a)
  }
}
s = K.prototype;
s.f = 0;
s.r = o("f");
s.F = function() {
  yb(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.o[this.j[b]])
  }
  return a
};
s.ba = function() {
  yb(this);
  return this.j.concat()
};
s.S = function(a) {
  return zb(this.o, a)
};
s.Ob = function(a) {
  for(var b = 0;b < this.j.length;b++) {
    var c = this.j[b];
    if(zb(this.o, c) && this.o[c] == a) {
      return j
    }
  }
  return m
};
s.P = function(a, b) {
  if(this === a) {
    return j
  }
  if(this.f != a.r()) {
    return m
  }
  var c = b || Ab;
  yb(this);
  for(var d, e = 0;d = this.j[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function Ab(a, b) {
  return a === b
}
s.La = function() {
  return 0 == this.f
};
s.clear = function() {
  this.o = {};
  this.f = this.j.length = 0
};
s.remove = function(a) {
  return zb(this.o, a) ? (delete this.o[a], this.f--, this.j.length > 2 * this.f && yb(this), j) : m
};
function yb(a) {
  if(a.f != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      zb(a.o, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.f != a.j.length) {
    for(var e = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], zb(e, d) || (a.j[c++] = d, e[d] = 1), b++
    }
    a.j.length = c
  }
}
s.get = function(a, b) {
  return zb(this.o, a) ? this.o[a] : b
};
s.set = function(a, b) {
  zb(this.o, a) || (this.f++, this.j.push(a));
  this.o[a] = b
};
s.xc = function(a) {
  var b;
  a instanceof K ? (b = a.ba(), a = a.F()) : (b = db(a), a = cb(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
s.I = function() {
  return new K(this)
};
function Bb(a) {
  yb(a);
  for(var b = {}, c = 0;c < a.j.length;c++) {
    var d = a.j[c];
    b[d] = a.o[d]
  }
  return b
}
function zb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function L(a, b) {
  var c;
  a instanceof L ? (this.jb(b == k ? a.da : b), Cb(this, a.ga), Db(this, a.Ra), Eb(this, a.T), Fb(this, a.za), Gb(this, a.Q), Hb(this, a.G.I()), Ib(this, a.Ha)) : a && (c = ("" + a).match($a)) ? (this.jb(!!b), Cb(this, c[1] || "", j), Db(this, c[2] || "", j), Eb(this, c[3] || "", j), Fb(this, c[4]), Gb(this, c[5] || "", j), Hb(this, c[6] || "", j), Ib(this, c[7] || "", j)) : (this.jb(!!b), this.G = new Jb(k, this, this.da))
}
s = L.prototype;
s.ga = "";
s.Ra = "";
s.T = "";
s.za = k;
s.Q = "";
s.Ha = "";
s.Ff = m;
s.da = m;
s.toString = function() {
  if(this.Y) {
    return this.Y
  }
  var a = [];
  this.ga && a.push(Kb(this.ga, Lb), ":");
  this.T && (a.push("//"), this.Ra && a.push(Kb(this.Ra, Lb), "@"), a.push(w(this.T) ? encodeURIComponent(this.T) : k), this.za != k && a.push(":", "" + this.za));
  this.Q && (this.T && "/" != this.Q.charAt(0) && a.push("/"), a.push(Kb(this.Q, "/" == this.Q.charAt(0) ? Mb : Nb)));
  var b = "" + this.G;
  b && a.push("?", b);
  this.Ha && a.push("#", Kb(this.Ha, Ob));
  return this.Y = a.join("")
};
s.I = function() {
  var a = this.ga, b = this.Ra, c = this.T, d = this.za, e = this.Q, g = this.G.I(), i = this.Ha, l = new L(k, this.da);
  a && Cb(l, a);
  b && Db(l, b);
  c && Eb(l, c);
  d && Fb(l, d);
  e && Gb(l, e);
  g && Hb(l, g);
  i && Ib(l, i);
  return l
};
function Cb(a, b, c) {
  Pb(a);
  delete a.Y;
  a.ga = c ? b ? decodeURIComponent(b) : "" : b;
  a.ga && (a.ga = a.ga.replace(/:$/, ""))
}
function Db(a, b, c) {
  Pb(a);
  delete a.Y;
  a.Ra = c ? b ? decodeURIComponent(b) : "" : b
}
function Eb(a, b, c) {
  Pb(a);
  delete a.Y;
  a.T = c ? b ? decodeURIComponent(b) : "" : b
}
function Fb(a, b) {
  Pb(a);
  delete a.Y;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && f(Error("Bad port number " + b)), a.za = b) : a.za = k
}
function Gb(a, b, c) {
  Pb(a);
  delete a.Y;
  a.Q = c ? b ? decodeURIComponent(b) : "" : b
}
function Hb(a, b, c) {
  Pb(a);
  delete a.Y;
  b instanceof Jb ? (a.G = b, a.G.zd = a, a.G.jb(a.da)) : (c || (b = Kb(b, Qb)), a.G = new Jb(b, a, a.da))
}
function Ib(a, b, c) {
  Pb(a);
  delete a.Y;
  a.Ha = c ? b ? decodeURIComponent(b) : "" : b
}
function Pb(a) {
  a.Ff && f(Error("Tried to modify a read-only Uri"))
}
s.jb = function(a) {
  this.da = a;
  this.G && this.G.jb(a);
  return this
};
function Rb(a) {
  return a instanceof L ? a.I() : new L(a, h)
}
var Sb = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Kb(a, b) {
  var c = k;
  w(a) && (c = a, Sb.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, Tb)));
  return c
}
function Tb(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Lb = /[#\/\?@]/g, Nb = /[\#\?:]/g, Mb = /[\#\?]/g, Qb = /[\#\?@]/g, Ob = /#/g;
function Jb(a, b, c) {
  this.ja = a || k;
  this.zd = b || k;
  this.da = !!c
}
function Ub(a) {
  if(!a.k && (a.k = new K, a.f = 0, a.ja)) {
    for(var b = a.ja.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, g = k;
      0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = Vb(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
s = Jb.prototype;
s.k = k;
s.f = k;
s.r = function() {
  Ub(this);
  return this.f
};
s.add = function(a, b) {
  Ub(this);
  Wb(this);
  a = Vb(this, a);
  if(this.S(a)) {
    var c = this.k.get(a);
    v(c) ? c.push(b) : this.k.set(a, [c, b])
  }else {
    this.k.set(a, b)
  }
  this.f++;
  return this
};
s.remove = function(a) {
  Ub(this);
  a = Vb(this, a);
  if(this.k.S(a)) {
    Wb(this);
    var b = this.k.get(a);
    v(b) ? this.f -= b.length : this.f--;
    return this.k.remove(a)
  }
  return m
};
s.clear = function() {
  Wb(this);
  this.k && this.k.clear();
  this.f = 0
};
s.La = function() {
  Ub(this);
  return 0 == this.f
};
s.S = function(a) {
  Ub(this);
  a = Vb(this, a);
  return this.k.S(a)
};
s.Ob = function(a) {
  var b = this.F();
  return mb(b, a)
};
s.ba = function() {
  Ub(this);
  for(var a = this.k.F(), b = this.k.ba(), c = [], d = 0;d < b.length;d++) {
    var e = a[d];
    if(v(e)) {
      for(var g = 0;g < e.length;g++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
s.F = function(a) {
  Ub(this);
  var b = [];
  if(a) {
    a = Vb(this, a), this.S(a) && (b = ob(b, this.k.get(a)))
  }else {
    for(var a = this.k.F(), c = 0;c < a.length;c++) {
      b = ob(b, a[c])
    }
  }
  return b
};
s.set = function(a, b) {
  Ub(this);
  Wb(this);
  a = Vb(this, a);
  if(this.S(a)) {
    var c = this.k.get(a);
    v(c) ? this.f -= c.length : this.f--
  }
  this.k.set(a, b);
  this.f++;
  return this
};
s.get = function(a, b) {
  Ub(this);
  a = Vb(this, a);
  if(this.S(a)) {
    var c = this.k.get(a);
    return v(c) ? c[0] : c
  }
  return b
};
s.toString = function() {
  if(this.ja) {
    return this.ja
  }
  if(!this.k) {
    return""
  }
  for(var a = [], b = 0, c = this.k.ba(), d = 0;d < c.length;d++) {
    var e = c[d], g = sa(e), e = this.k.get(e);
    if(v(e)) {
      for(var i = 0;i < e.length;i++) {
        0 < b && a.push("&"), a.push(g), "" !== e[i] && a.push("=", sa(e[i])), b++
      }
    }else {
      0 < b && a.push("&"), a.push(g), "" !== e && a.push("=", sa(e)), b++
    }
  }
  return this.ja = a.join("")
};
function Wb(a) {
  delete a.Va;
  delete a.ja;
  a.zd && delete a.zd.Y
}
s.I = function() {
  var a = new Jb;
  this.Va && (a.Va = this.Va);
  this.ja && (a.ja = this.ja);
  this.k && (a.k = this.k.I());
  return a
};
function Vb(a, b) {
  var c = "" + b;
  a.da && (c = c.toLowerCase());
  return c
}
s.jb = function(a) {
  a && !this.da && (Ub(this), Wb(this), wb(this.k, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.da = a
};
function Xb() {
  return j
}
;function Yb() {
}
var Zb = 0;
s = Yb.prototype;
s.key = 0;
s.Oa = m;
s.Bc = m;
s.Ka = function(a, b, c, d, e, g) {
  y(a) ? this.ke = j : a && a.handleEvent && y(a.handleEvent) ? this.ke = m : f(Error("Invalid listener argument"));
  this.cb = a;
  this.De = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Zb = g;
  this.Bc = m;
  this.key = ++Zb;
  this.Oa = m
};
s.handleEvent = function(a) {
  return this.ke ? this.cb.call(this.Zb || this.src, a) : this.cb.handleEvent.call(this.cb, a)
};
var $b = !E || Xa(), ac = !E || Xa(), bc = E && !H("8");
!F || H("528");
Ka && H("1.9b") || E && H("8") || Ja && H("9.5") || F && H("528");
Ka && !H("8") || E && H("9");
var cc = {pg:"click", ug:"dblclick", Og:"mousedown", Sg:"mouseup", Rg:"mouseover", Qg:"mouseout", Pg:"mousemove", bh:"selectstart", Jg:"keypress", Ig:"keydown", Kg:"keyup", ng:"blur", Cg:"focus", vg:"deactivate", Dg:E ? "focusin" : "DOMFocusIn", Eg:E ? "focusout" : "DOMFocusOut", og:"change", ah:"select", dh:"submit", Hg:"input", Xg:"propertychange", zg:"dragstart", wg:"dragenter", yg:"dragover", xg:"dragleave", Ag:"drop", hh:"touchstart", gh:"touchmove", fh:"touchend", eh:"touchcancel", rg:"contextmenu", 
Bg:"error", Gg:"help", Lg:"load", Mg:"losecapture", Yg:"readystatechange", Zg:"resize", $g:"scroll", jh:"unload", Fg:"hashchange", Tg:"pagehide", Ug:"pageshow", Wg:"popstate", sg:"copy", Vg:"paste", tg:"cut", kg:"beforecopy", lg:"beforecut", mg:"beforepaste", Ng:"message", qg:"connect", ih:F ? "webkitTransitionEnd" : Ja ? "oTransitionEnd" : "transitionend"};
function M() {
}
M.prototype.$ = m;
M.prototype.b = function() {
  this.$ || (this.$ = j, this.c())
};
M.prototype.c = function() {
  this.mf && dc.apply(k, this.mf)
};
function dc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ga(d) ? dc.apply(k, d) : d && "function" == typeof d.b && d.b()
  }
}
;function ec(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
C(ec, M);
s = ec.prototype;
s.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
s.Na = m;
s.defaultPrevented = m;
s.kc = j;
s.stopPropagation = function() {
  this.Na = j
};
s.preventDefault = function() {
  this.defaultPrevented = j;
  this.kc = m
};
function fc(a) {
  a.stopPropagation()
}
;function gc(a) {
  gc[" "](a);
  return a
}
gc[" "] = da;
function hc(a, b) {
  a && this.Ka(a, b)
}
C(hc, ec);
var ic = [1, 4, 2];
s = hc.prototype;
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
s.ka = k;
s.Ka = function(a, b) {
  var c = this.type = a.type;
  ec.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Ka) {
      var e;
      a: {
        try {
          gc(d.nodeName);
          e = j;
          break a
        }catch(g) {
        }
        e = m
      }
      e || (d = k)
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
  this.gd = Na ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ka = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Na
};
function jc(a) {
  return $b ? 0 == a.ka.button : "click" == a.type ? j : !!(a.ka.button & ic[0])
}
s.stopPropagation = function() {
  hc.e.stopPropagation.call(this);
  this.ka.stopPropagation ? this.ka.stopPropagation() : this.ka.cancelBubble = j
};
s.preventDefault = function() {
  hc.e.preventDefault.call(this);
  var a = this.ka;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, bc) {
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
  hc.e.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ka = k
};
var kc = {}, N = {}, lc = {}, mc = {};
function O(a, b, c, d, e) {
  if(b) {
    if(v(b)) {
      for(var g = 0;g < b.length;g++) {
        O(a, b[g], c, d, e)
      }
      return k
    }
    var d = !!d, i = N;
    b in i || (i[b] = {f:0, R:0});
    i = i[b];
    d in i || (i[d] = {f:0, R:0}, i.f++);
    var i = i[d], l = ja(a), n;
    i.R++;
    if(i[l]) {
      n = i[l];
      for(g = 0;g < n.length;g++) {
        if(i = n[g], i.cb == c && i.Zb == e) {
          if(i.Oa) {
            break
          }
          return n[g].key
        }
      }
    }else {
      n = i[l] = [], i.f++
    }
    g = nc();
    g.src = a;
    i = new Yb;
    i.Ka(c, g, a, b, d, e);
    c = i.key;
    g.key = c;
    n.push(i);
    kc[c] = i;
    lc[l] || (lc[l] = []);
    lc[l].push(i);
    a.addEventListener ? (a == t || !a.Md) && a.addEventListener(b, g, d) : a.attachEvent(b in mc ? mc[b] : mc[b] = "on" + b, g);
    return c
  }
  f(Error("Invalid event type"))
}
function nc() {
  var a = oc, b = ac ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function pc(a, b, c, d, e) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      pc(a, b[g], c, d, e)
    }
    return k
  }
  a = O(a, b, c, d, e);
  kc[a].Bc = j;
  return a
}
function qc(a, b, c, d, e) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      qc(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = rc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].cb == c && a[g].capture == d && a[g].Zb == e) {
          sc(a[g].key);
          break
        }
      }
    }
  }
}
function sc(a) {
  if(!kc[a]) {
    return m
  }
  var b = kc[a];
  if(b.Oa) {
    return m
  }
  var c = b.src, d = b.type, e = b.De, g = b.capture;
  c.removeEventListener ? (c == t || !c.Md) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in mc ? mc[d] : mc[d] = "on" + d, e);
  c = ja(c);
  e = N[d][g][c];
  if(lc[c]) {
    var i = lc[c];
    nb(i, b);
    0 == i.length && delete lc[c]
  }
  b.Oa = j;
  e.we = j;
  tc(d, g, c, e);
  delete kc[a];
  return j
}
function tc(a, b, c, d) {
  if(!d.dc && d.we) {
    for(var e = 0, g = 0;e < d.length;e++) {
      d[e].Oa ? d[e].De.src = k : (e != g && (d[g] = d[e]), g++)
    }
    d.length = g;
    d.we = m;
    0 == g && (delete N[a][b][c], N[a][b].f--, 0 == N[a][b].f && (delete N[a][b], N[a].f--), 0 == N[a].f && delete N[a])
  }
}
function uc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    bb(lc, function(a) {
      for(var e = a.length - 1;0 <= e;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          sc(g.key), c++
        }
      }
    })
  }else {
    if(a = ja(a), lc[a]) {
      for(var a = lc[a], e = a.length - 1;0 <= e;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          sc(g.key), c++
        }
      }
    }
  }
}
function rc(a, b, c) {
  var d = N;
  return b in d && (d = d[b], c in d && (d = d[c], a = ja(a), d[a])) ? d[a] : k
}
function vc(a, b, c, d, e) {
  var g = 1, b = ja(b);
  if(a[b]) {
    a.R--;
    a = a[b];
    a.dc ? a.dc++ : a.dc = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var n = a[l];
        n && !n.Oa && (g &= wc(n, e) !== m)
      }
    }finally {
      a.dc--, tc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function wc(a, b) {
  var c = a.handleEvent(b);
  a.Bc && sc(a.key);
  return c
}
function oc(a, b) {
  if(!kc[a]) {
    return j
  }
  var c = kc[a], d = c.type, e = N;
  if(!(d in e)) {
    return j
  }
  var e = e[d], g, i;
  if(!ac) {
    g = b || ca("window.event");
    var l = j in e, n = m in e;
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
          }catch(G) {
            q = j
          }
        }
        if(q || g.returnValue == h) {
          g.returnValue = j
        }
      }
    }
    q = new hc;
    q.Ka(g, this);
    g = j;
    try {
      if(l) {
        for(var r = [], x = q.currentTarget;x;x = x.parentNode) {
          r.push(x)
        }
        i = e[j];
        i.R = i.f;
        for(var z = r.length - 1;!q.Na && 0 <= z && i.R;z--) {
          q.currentTarget = r[z], g &= vc(i, r[z], d, j, q)
        }
        if(n) {
          i = e[m];
          i.R = i.f;
          for(z = 0;!q.Na && z < r.length && i.R;z++) {
            q.currentTarget = r[z], g &= vc(i, r[z], d, m, q)
          }
        }
      }else {
        g = wc(c, q)
      }
    }finally {
      r && (r.length = 0), q.b()
    }
    return g
  }
  d = new hc(b, this);
  try {
    g = wc(c, d)
  }finally {
    d.b()
  }
  return g
}
var xc = 0;
function yc() {
}
C(yc, M);
s = yc.prototype;
s.Md = j;
s.fc = k;
s.md = aa("fc");
s.addEventListener = function(a, b, c, d) {
  O(this, a, b, c, d)
};
s.removeEventListener = function(a, b, c, d) {
  qc(this, a, b, c, d)
};
s.dispatchEvent = function(a) {
  var b = a.type || a, c = N;
  if(b in c) {
    if(w(a)) {
      a = new ec(a, this)
    }else {
      if(a instanceof ec) {
        a.target = a.target || this
      }else {
        var d = a, a = new ec(b, this);
        fb(a, d)
      }
    }
    var d = 1, e, c = c[b], b = j in c, g;
    if(b) {
      e = [];
      for(g = this;g;g = g.fc) {
        e.push(g)
      }
      g = c[j];
      g.R = g.f;
      for(var i = e.length - 1;!a.Na && 0 <= i && g.R;i--) {
        a.currentTarget = e[i], d &= vc(g, e[i], a.type, j, a) && a.kc != m
      }
    }
    if(m in c) {
      if(g = c[m], g.R = g.f, b) {
        for(i = 0;!a.Na && i < e.length && g.R;i++) {
          a.currentTarget = e[i], d &= vc(g, e[i], a.type, m, a) && a.kc != m
        }
      }else {
        for(e = this;!a.Na && e && g.R;e = e.fc) {
          a.currentTarget = e, d &= vc(g, e, a.type, m, a) && a.kc != m
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
  yc.e.c.call(this);
  uc(this);
  this.fc = k
};
var zc = t.window;
xc++;
xc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Ac(a, b) {
  this.Mb = [];
  this.Hd = a;
  this.Od = b || k
}
s = Ac.prototype;
s.sa = m;
s.vb = m;
s.Ab = 0;
s.pd = m;
s.gf = m;
s.Ac = 0;
s.cancel = function(a) {
  if(this.sa) {
    this.Db instanceof Ac && this.Db.cancel()
  }else {
    if(this.z) {
      var b = this.z;
      delete this.z;
      a ? b.cancel(a) : (b.Ac--, 0 >= b.Ac && b.cancel())
    }
    this.Hd ? this.Hd.call(this.Od, this) : this.pd = j;
    this.sa || this.tb(new Bc)
  }
};
s.Kd = function(a, b) {
  Cc(this, a, b);
  this.Ab--;
  0 == this.Ab && this.sa && Dc(this)
};
function Cc(a, b, c) {
  a.sa = j;
  a.Db = c;
  a.vb = !b;
  Dc(a)
}
function Ec(a) {
  a.sa && (a.pd || f(new Fc), a.pd = m)
}
s.Z = function(a) {
  Ec(this);
  Cc(this, j, a)
};
s.tb = function(a) {
  Ec(this);
  Cc(this, m, a)
};
function Gc(a, b) {
  Hc(a, b, k, h)
}
function Ic(a, b) {
  Hc(a, k, b, h)
}
function Hc(a, b, c, d) {
  a.Mb.push([b, c, d]);
  a.sa && Dc(a)
}
function Kc(a, b) {
  Hc(a, b, b, h)
}
function Lc(a) {
  return kb(a.Mb, function(a) {
    return y(a[1])
  })
}
function Dc(a) {
  a.yd && (a.sa && Lc(a)) && (t.clearTimeout(a.yd), delete a.yd);
  a.z && (a.z.Ac--, delete a.z);
  for(var b = a.Db, c = m, d = m;a.Mb.length && 0 == a.Ab;) {
    var e = a.Mb.shift(), g = e[0], i = e[1], e = e[2];
    if(g = a.vb ? i : g) {
      try {
        var l = g.call(e || a.Od, b);
        u(l) && (a.vb = a.vb && (l == b || l instanceof Error), a.Db = b = l);
        b instanceof Ac && (d = j, a.Ab++)
      }catch(n) {
        b = n, a.vb = j, Lc(a) || (c = j)
      }
    }
  }
  a.Db = b;
  d && a.Ab && (Hc(b, A(a.Kd, a, j), A(a.Kd, a, m)), b.gf = j);
  c && (a.yd = t.setTimeout(function() {
    f(new Mc(b))
  }, 0))
}
function Nc(a) {
  var b = new Ac;
  b.Z(a);
  return b
}
function Oc(a) {
  var b = new Ac;
  b.tb(a);
  return b
}
function Fc() {
  I.call(this)
}
C(Fc, I);
Fc.prototype.message = "Already called";
function Bc() {
  I.call(this)
}
C(Bc, I);
Bc.prototype.message = "Deferred was cancelled";
function Mc(a) {
  I.call(this);
  this.message = "Unhandled Error in Deferred: " + (a.message || "[No message]")
}
C(Mc, I);
function Pc(a) {
  this.B = a;
  this.Qb = [];
  this.Rd = [];
  this.ff = A(this.eg, this)
}
Pc.prototype.vd = k;
function Qc(a, b, c, d) {
  a.Qb.push([b, c, d]);
  a.vd == k && (a.vd = a.B.setTimeout(a.ff, 0))
}
Pc.prototype.eg = function() {
  this.vd = k;
  var a = this.Qb;
  this.Qb = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], e = c[1], c = c[2];
    try {
      d.apply(e, c)
    }catch(g) {
      this.B.setTimeout(function() {
        f(g)
      }, 0)
    }
  }
  if(0 == this.Qb.length) {
    a = this.Rd;
    this.Rd = [];
    for(b = 0;b < a.length;b++) {
      a[b].Z(k)
    }
  }
};
var Rc = new Pc(t.window);
function Sc(a) {
  return y(a) || "object" == typeof a && y(a.call) && y(a.apply)
}
;function Tc(a) {
  var b = [];
  Uc(new Vc, a, b);
  return b.join("")
}
function Vc() {
  this.jc = h
}
function Uc(a, b, c) {
  switch(typeof b) {
    case "string":
      Wc(b, c);
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
        for(var e = "", g = 0;g < d;g++) {
          c.push(e), e = b[g], Uc(a, a.jc ? a.jc.call(b, "" + g, e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" != typeof e && (c.push(d), Wc(g, c), c.push(":"), Uc(a, a.jc ? a.jc.call(b, g, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      f(Error("Unknown type: " + typeof b))
  }
}
var Xc = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Yc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Wc(a, b) {
  b.push('"', a.replace(Yc, function(a) {
    if(a in Xc) {
      return Xc[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return Xc[a] = e + b.toString(16)
  }), '"')
}
;function Zc(a, b, c) {
  var d = gb(c, a);
  if(-1 != d) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = fa(a);
    if("boolean" == d || "number" == d || "null" == d || "undefined" == d) {
      b.push("" + a)
    }else {
      if("string" == d) {
        Wc(a, b)
      }else {
        if(Sc(a.D)) {
          a.D(b, c)
        }else {
          if(Sc(a.af)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if("array" == d) {
                d = a.length;
                b.push("[");
                for(var e = "", g = 0;g < d;g++) {
                  b.push(e), Zc(a[g], b, c), e = ", "
                }
                b.push("]")
              }else {
                if("object" == d) {
                  if(ha(a) && "function" == typeof a.valueOf) {
                    b.push("new Date(", "" + a.valueOf(), ")")
                  }else {
                    for(var d = db(a).concat(eb), e = {}, i = g = 0;i < d.length;) {
                      var l = d[i++], n = ia(l) ? "o" + ja(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(e, n) || (e[n] = j, d[g++] = l)
                    }
                    d.length = g;
                    b.push("{");
                    e = "";
                    for(i = 0;i < d.length;i++) {
                      g = d[i], Object.prototype.hasOwnProperty.call(a, g) && (l = a[g], b.push(e), Wc(g, b), b.push(": "), Zc(l, b, c), e = ", ")
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
  Zc(a, b, c)
}
function Q(a) {
  var b = [];
  P(a, b, h);
  return b.join("")
}
;function $c(a, b) {
  this.x = u(a) ? a : 0;
  this.y = u(b) ? b : 0
}
$c.prototype.I = function() {
  return new $c(this.x, this.y)
};
$c.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function ad(a, b) {
  this.width = a;
  this.height = b
}
s = ad.prototype;
s.I = function() {
  return new ad(this.width, this.height)
};
s.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
s.La = function() {
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
var bd;
function cd(a) {
  a = a.className;
  return w(a) && a.match(/\S+/g) || []
}
function dd(a, b) {
  for(var c = cd(a), d = qb(arguments, 1), e = c.length + d.length, g = c, i = 0;i < d.length;i++) {
    mb(g, d[i]) || g.push(d[i])
  }
  a.className = c.join(" ");
  return c.length == e
}
function ed(a, b) {
  var c = cd(a), d = qb(arguments, 1), e = fd(c, d);
  a.className = e.join(" ");
  return e.length == c.length - d.length
}
function fd(a, b) {
  return ib(a, function(a) {
    return!mb(b, a)
  })
}
;var gd = !E || Xa();
!Ka && !E || E && Xa() || Ka && H("1.9.1");
var hd = E && !H("9");
function id(a) {
  return a ? new jd(kd(a)) : bd || (bd = new jd)
}
function R(a) {
  return w(a) ? document.getElementById(a) : a
}
function ld(a, b) {
  bb(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in md ? a.setAttribute(md[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var md = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function nd(a, b, c) {
  return od(document, arguments)
}
function od(a, b) {
  var c = b[0], d = b[1];
  if(!gd && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', D(d.name), '"');
    if(d.type) {
      c.push(' type="', D(d.type), '"');
      var e = {};
      fb(e, d);
      d = e;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  d && (w(d) ? c.className = d : v(d) ? dd.apply(k, [c].concat(d)) : ld(c, d));
  2 < b.length && pd(a, c, b, 2);
  return c
}
function pd(a, b, c, d) {
  function e(c) {
    c && b.appendChild(w(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && 0 < g.nodeType) ? hb(qd(g) ? pb(g) : g, e) : e(g)
  }
}
function rd(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function sd(a, b) {
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
function kd(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
var td = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, ud = {IMG:" ", BR:"\n"};
function vd(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, "number" == typeof a && 0 <= a && 32768 > a) : m
}
function wd(a) {
  var b = [];
  xd(a, b, m);
  return b.join("")
}
function xd(a, b, c) {
  if(!(a.nodeName in td)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in ud) {
        b.push(ud[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          xd(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function qd(a) {
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
function jd(a) {
  this.ia = a || t.document || document
}
s = jd.prototype;
s.Wa = id;
s.g = function(a) {
  return w(a) ? this.ia.getElementById(a) : a
};
function yd() {
  var a;
  a = zd.ia.parentWindow || zd.ia.defaultView || window;
  var b = a.document;
  if(F && !H("500") && !La) {
    "undefined" == typeof a.innerHeight && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    a = new ad(a.innerWidth, b)
  }else {
    a = "CSS1Compat" == b.compatMode ? b.documentElement : b.body, a = new ad(a.clientWidth, a.clientHeight)
  }
  return a
}
s.n = function(a, b, c) {
  return od(this.ia, arguments)
};
s.createElement = function(a) {
  return this.ia.createElement(a)
};
s.createTextNode = function(a) {
  return this.ia.createTextNode(a)
};
s.appendChild = function(a, b) {
  a.appendChild(b)
};
s.append = function(a, b) {
  pd(kd(a), a, arguments, 1)
};
s.contains = sd;
function Ad(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
var Bd = Ka ? "MozUserSelect" : F ? "WebkitUserSelect" : k;
function Cd(a) {
  this.ce = a;
  this.j = []
}
C(Cd, M);
var Dd = [];
function Ed(a, b, c, d) {
  v(c) || (Dd[0] = c, c = Dd);
  for(var e = 0;e < c.length;e++) {
    a.j.push(O(b, c[e], d || a, m, a.ce || a))
  }
  return a
}
function Fd(a, b, c, d, e, g) {
  if(v(c)) {
    for(var i = 0;i < c.length;i++) {
      Fd(a, b, c[i], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.ce || a;
      e = !!e;
      if(b = rc(b, c, e)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].Oa && b[c].cb == d && b[c].capture == e && b[c].Zb == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, sc(b), nb(a.j, b))
  }
  return a
}
Cd.prototype.jd = function() {
  hb(this.j, sc);
  this.j.length = 0
};
Cd.prototype.c = function() {
  Cd.e.c.call(this);
  this.jd()
};
Cd.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Gd() {
}
ea(Gd);
Gd.prototype.Kf = 0;
Gd.Xa();
function Hd(a) {
  this.Pb = a || id();
  this.Eb = Id
}
C(Hd, yc);
Hd.prototype.Ef = Gd.Xa();
var Id = k;
function Jd(a, b) {
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
s = Hd.prototype;
s.ca = k;
s.V = m;
s.q = k;
s.Eb = k;
s.z = k;
s.qa = k;
s.Nb = k;
s.fg = m;
function Kd(a) {
  return a.ca || (a.ca = ":" + (a.Ef.Kf++).toString(36))
}
s.g = o("q");
function Ld(a) {
  return a.Ya || (a.Ya = new Cd(a))
}
s.getParent = o("z");
s.md = function(a) {
  this.z && this.z != a && f(Error("Method not supported"));
  Hd.e.md.call(this, a)
};
s.Wa = o("Pb");
s.n = function() {
  this.q = this.Pb.createElement("div")
};
function Md(a, b) {
  a.V && f(Error("Component already rendered"));
  a.q || a.n();
  b ? b.insertBefore(a.q, k) : a.Pb.ia.body.appendChild(a.q);
  (!a.z || a.z.V) && a.ra()
}
s.ra = function() {
  this.V = j;
  Nd(this, function(a) {
    !a.V && a.g() && a.ra()
  })
};
s.ub = function() {
  Nd(this, function(a) {
    a.V && a.ub()
  });
  this.Ya && this.Ya.jd();
  this.V = m
};
s.c = function() {
  Hd.e.c.call(this);
  this.V && this.ub();
  this.Ya && (this.Ya.b(), delete this.Ya);
  Nd(this, function(a) {
    a.b()
  });
  !this.fg && this.q && rd(this.q);
  this.z = this.q = this.Nb = this.qa = k
};
s.lb = function(a) {
  this.V && f(Error("Component already rendered"));
  this.Eb = a
};
function Nd(a, b) {
  a.qa && hb(a.qa, b, h)
}
s.removeChild = function(a, b) {
  if(a) {
    var c = w(a) ? a : Kd(a), d;
    this.Nb && c ? (d = this.Nb, d = (c in d ? d[c] : h) || k) : d = k;
    a = d;
    c && a && (d = this.Nb, c in d && delete d[c], nb(this.qa, a), b && (a.ub(), a.q && rd(a.q)), c = a, c == k && f(Error("Unable to set parent component")), c.z = k, Hd.e.md.call(c, k))
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function Od() {
}
var Pd;
ea(Od);
s = Od.prototype;
s.Ub = function() {
};
s.n = function(a) {
  var b = a.Wa().n("div", Qd(this, a).join(" "), a.qb);
  this.ld(a, b);
  return b
};
s.rb = function(a, b, c) {
  if(a = a.g ? a.g() : a) {
    if(E && !H("7")) {
      var d = Rd(cd(a), b);
      d.push(b);
      oa(c ? dd : ed, a).apply(k, d)
    }else {
      c ? dd(a, b) : ed(a, b)
    }
  }
};
s.fe = function(a) {
  if(a.Eb == k) {
    var b = a.V ? a.q : a.Pb.ia.body, c;
    a: {
      c = kd(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(b, k))) {
        c = c.direction || c.getPropertyValue("direction");
        break a
      }
      c = ""
    }
    c || (c = (b.currentStyle ? b.currentStyle.direction : k) || b.style && b.style.direction);
    a.Eb = "rtl" == c
  }
  a.Eb && this.lb(a.g(), j);
  a.isEnabled() && this.Fb(a, a.Sa)
};
s.ld = function(a, b) {
  a.isEnabled() || this.N(b, 1, j);
  a.d & 8 && this.N(b, 8, j);
  a.H & 16 && this.N(b, 16, !!(a.d & 16));
  a.H & 64 && this.N(b, 64, !!(a.d & 64))
};
s.mc = function(a, b) {
  var c = !b, d = E || Ja ? a.getElementsByTagName("*") : k;
  if(Bd) {
    if(c = c ? "none" : "", a.style[Bd] = c, d) {
      for(var e = 0, g;g = d[e];e++) {
        g.style[Bd] = c
      }
    }
  }else {
    if(E || Ja) {
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for(e = 0;g = d[e];e++) {
          g.setAttribute("unselectable", c)
        }
      }
    }
  }
};
s.lb = function(a, b) {
  this.rb(a, this.ta() + "-rtl", b)
};
s.je = function(a) {
  var b;
  return a.H & 32 && (b = a.Ia()) ? vd(b) : m
};
s.Fb = function(a, b) {
  var c;
  if(a.H & 32 && (c = a.Ia())) {
    if(!b && a.d & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.d & 32 && a.Wd()
    }
    vd(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
s.od = function(a, b) {
  a.style.display = b ? "" : "none"
};
s.L = function(a, b, c) {
  var d = a.g();
  if(d) {
    var e = Sd(this, b);
    e && this.rb(a, e, c);
    this.N(d, b, c)
  }
};
s.N = function(a, b, c) {
  Pd || (Pd = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Pd[b]) && a.setAttribute("aria-" + b, c)
};
s.Ia = function(a) {
  return a.g()
};
s.ta = p("goog-control");
function Qd(a, b) {
  var c = a.ta(), d = [c], e = a.ta();
  e != c && d.push(e);
  c = b.d;
  for(e = [];c;) {
    var g = c & -c;
    e.push(Sd(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.aa) && d.push.apply(d, c);
  E && !H("7") && d.push.apply(d, Rd(d));
  return d
}
function Rd(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  hb([], function(d) {
    lb(d, oa(mb, a)) && (!b || mb(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Sd(a, b) {
  if(!a.Id) {
    var c = a.ta();
    a.Id = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Id[b]
}
;function Td(a, b) {
  a || f(Error("Invalid class name " + a));
  y(b) || f(Error("Invalid decorator function " + b))
}
var Ud = {};
function Vd(a, b, c, d, e) {
  if(!E && (!F || !H("525"))) {
    return j
  }
  if(Na && e) {
    return Wd(a)
  }
  if(e && !d || !c && (17 == b || 18 == b) || E && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(E && Xa());
    case 27:
      return!F
  }
  return Wd(a)
}
function Wd(a) {
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
function Xd(a) {
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
;function Yd(a, b) {
  a && $d(this, a, b)
}
C(Yd, yc);
s = Yd.prototype;
s.q = k;
s.ac = k;
s.Tc = k;
s.bc = k;
s.xa = -1;
s.wa = -1;
var ae = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, be = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, ce = E || 
F && H("525");
s = Yd.prototype;
s.Af = function(a) {
  if(F && (17 == this.xa && !a.ctrlKey || 18 == this.xa && !a.altKey)) {
    this.wa = this.xa = -1
  }
  ce && !Vd(a.keyCode, this.xa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.wa = Ka ? Xd(a.keyCode) : a.keyCode
};
s.Cf = function() {
  this.wa = this.xa = -1
};
s.handleEvent = function(a) {
  var b = a.ka, c, d;
  E && "keypress" == a.type ? (c = this.wa, d = 13 != c && 27 != c ? b.keyCode : 0) : F && "keypress" == a.type ? (c = this.wa, d = 0 <= b.charCode && 63232 > b.charCode && Wd(c) ? b.charCode : 0) : Ja ? (c = this.wa, d = Wd(c) ? b.keyCode : 0) : (c = b.keyCode || this.wa, d = b.charCode || 0, Na && (63 == d && 224 == c) && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in ae ? e = ae[c] : 25 == c && a.shiftKey && (e = 9) : g && g in be && (e = be[g]);
  a = e == this.xa;
  this.xa = e;
  b = new de(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.b()
  }
};
s.g = o("q");
function $d(a, b, c) {
  a.bc && a.detach();
  a.q = b;
  a.ac = O(a.q, "keypress", a, c);
  a.Tc = O(a.q, "keydown", a.Af, c, a);
  a.bc = O(a.q, "keyup", a.Cf, c, a)
}
s.detach = function() {
  this.ac && (sc(this.ac), sc(this.Tc), sc(this.bc), this.bc = this.Tc = this.ac = k);
  this.q = k;
  this.wa = this.xa = -1
};
s.c = function() {
  Yd.e.c.call(this);
  this.detach()
};
function de(a, b, c, d) {
  d && this.Ka(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(de, hc);
function S(a, b, c) {
  Hd.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ja(b);
      if(d = Ud[d]) {
        break
      }
      b = b.e ? b.e.constructor : k
    }
    b = d ? y(d.Xa) ? d.Xa() : new d : k
  }
  this.t = b;
  this.qb = a
}
C(S, Hd);
s = S.prototype;
s.qb = k;
s.d = 0;
s.H = 39;
s.zc = 255;
s.Yf = 0;
s.Sa = j;
s.aa = k;
s.Oc = j;
s.yc = m;
s.Nf = k;
s.Ia = function() {
  return this.t.Ia(this)
};
function ee(a, b) {
  b && (a.aa ? mb(a.aa, b) || a.aa.push(b) : a.aa = [b], a.t.rb(a, b, j))
}
s.rb = function(a, b) {
  b ? ee(this, a) : a && this.aa && (nb(this.aa, a), 0 == this.aa.length && (this.aa = k), this.t.rb(this, a, m))
};
s.n = function() {
  var a = this.t.n(this);
  this.q = a;
  var b = this.Nf || this.t.Ub();
  b && (a.setAttribute("role", b), a.lh = b);
  this.yc || this.t.mc(a, m);
  this.Sa || this.t.od(a, m)
};
s.ra = function() {
  S.e.ra.call(this);
  this.t.fe(this);
  if(this.H & -2 && (this.Oc && fe(this, j), this.H & 32)) {
    var a = this.Ia();
    if(a) {
      var b = this.ab || (this.ab = new Yd);
      $d(b, a);
      Ed(Ed(Ed(Ld(this), b, "key", this.Bf), a, "focus", this.zf), a, "blur", this.Wd)
    }
  }
};
function fe(a, b) {
  var c = Ld(a), d = a.g();
  b ? (Ed(Ed(Ed(Ed(c, d, "mouseover", a.ae), d, "mousedown", a.Zd), d, "mouseup", a.be), d, "mouseout", a.$d), E && Ed(c, d, "dblclick", a.Yd)) : (Fd(Fd(Fd(Fd(c, d, "mouseover", a.ae), d, "mousedown", a.Zd), d, "mouseup", a.be), d, "mouseout", a.$d), E && Fd(c, d, "dblclick", a.Yd))
}
s.ub = function() {
  S.e.ub.call(this);
  this.ab && this.ab.detach();
  this.Sa && this.isEnabled() && this.t.Fb(this, m)
};
s.c = function() {
  S.e.c.call(this);
  this.ab && (this.ab.b(), delete this.ab);
  delete this.t;
  this.aa = this.qb = k
};
function ge(a) {
  a = a.qb;
  if(!a) {
    return""
  }
  if(!w(a)) {
    if(v(a)) {
      a = jb(a, wd).join("")
    }else {
      if(hd && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        xd(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      hd || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
s.lb = function(a) {
  S.e.lb.call(this, a);
  var b = this.g();
  b && this.t.lb(b, a)
};
s.mc = function(a) {
  this.yc = a;
  var b = this.g();
  b && this.t.mc(b, a)
};
s.od = function(a, b) {
  if(b || this.Sa != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.g();
    c && this.t.od(c, a);
    this.isEnabled() && this.t.Fb(this, a);
    this.Sa = a;
    return j
  }
  return m
};
s.isEnabled = function() {
  return!(this.d & 1)
};
s.nc = function(a) {
  var b = this.getParent();
  if((!b || "function" != typeof b.isEnabled || b.isEnabled()) && he(this, 1, !a)) {
    a || (this.setActive(m), ie(this, m)), this.Sa && this.t.Fb(this, a), this.L(1, !a)
  }
};
function ie(a, b) {
  he(a, 2, b) && a.L(2, b)
}
s.he = function() {
  return!!(this.d & 4)
};
s.setActive = function(a) {
  he(this, 4, a) && this.L(4, a)
};
s.L = function(a, b) {
  this.H & a && b != !!(this.d & a) && (this.t.L(this, a, b), this.d = b ? this.d | a : this.d & ~a)
};
function T(a, b) {
  return!!(a.zc & b) && !!(a.H & b)
}
function he(a, b, c) {
  return!!(a.H & b) && !!(a.d & b) != c && (!(a.Yf & b) || a.dispatchEvent(Jd(b, c))) && !a.$
}
s.ae = function(a) {
  (!a.relatedTarget || !sd(this.g(), a.relatedTarget)) && (this.dispatchEvent("enter") && this.isEnabled() && T(this, 2)) && ie(this, j)
};
s.$d = function(a) {
  if((!a.relatedTarget || !sd(this.g(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    T(this, 4) && this.setActive(m), T(this, 2) && ie(this, m)
  }
};
s.Zd = function(a) {
  if(this.isEnabled() && (T(this, 2) && ie(this, j), jc(a) && (!F || !Na || !a.ctrlKey))) {
    T(this, 4) && this.setActive(j), this.t.je(this) && this.Ia().focus()
  }
  !this.yc && (jc(a) && (!F || !Na || !a.ctrlKey)) && a.preventDefault()
};
s.be = function(a) {
  this.isEnabled() && (T(this, 2) && ie(this, j), this.he() && (this.Bb(a) && T(this, 4)) && this.setActive(m))
};
s.Yd = function(a) {
  this.isEnabled() && this.Bb(a)
};
s.Bb = function(a) {
  if(T(this, 16)) {
    var b = !(this.d & 16);
    he(this, 16, b) && this.L(16, b)
  }
  T(this, 8) && he(this, 8, j) && this.L(8, j);
  T(this, 64) && (b = !(this.d & 64), he(this, 64, b) && this.L(64, b));
  b = new ec("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.gd = a.gd);
  return this.dispatchEvent(b)
};
s.zf = function() {
  T(this, 32) && he(this, 32, j) && this.L(32, j)
};
s.Wd = function() {
  T(this, 4) && this.setActive(m);
  T(this, 32) && he(this, 32, m) && this.L(32, m)
};
s.Bf = function(a) {
  return this.Sa && this.isEnabled() && this.Nc(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
s.Nc = function(a) {
  return 13 == a.keyCode && this.Bb(a)
};
y(S) || f(Error("Invalid component class " + S));
y(Od) || f(Error("Invalid renderer class " + Od));
var je = ja(S);
Ud[je] = Od;
Td("goog-control", function() {
  return new S(k)
});
function ke() {
}
C(ke, Od);
ea(ke);
s = ke.prototype;
s.Ub = p("button");
s.N = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : ke.e.N.call(this, a, b, c)
};
s.n = function(a) {
  var b = ke.e.n.call(this, a), c = a.Wb();
  c && this.nd(b, c);
  (c = a.Xb()) && this.oc(b, c);
  a.H & 16 && this.N(b, 16, !!(a.d & 16));
  return b
};
s.Xb = da;
s.oc = da;
s.Wb = function(a) {
  return a.title
};
s.nd = function(a, b) {
  a && (a.title = b || "")
};
s.ta = p("goog-button");
function le() {
}
C(le, ke);
ea(le);
s = le.prototype;
s.Ub = function() {
};
s.n = function(a) {
  a.V && m != a.Oc && fe(a, m);
  a.Oc = m;
  a.zc &= -256;
  a.V && a.d & 32 && f(Error("Component already rendered"));
  a.d & 32 && a.L(32, m);
  a.H &= -33;
  return a.Wa().n("button", {"class":Qd(this, a).join(" "), disabled:!a.isEnabled(), title:a.Wb() || "", value:a.Xb() || ""}, ge(a) || "")
};
s.fe = function(a) {
  Ed(Ld(a), a.g(), "click", a.Bb)
};
s.mc = da;
s.lb = da;
s.je = function(a) {
  return a.isEnabled()
};
s.Fb = da;
s.L = function(a, b, c) {
  le.e.L.call(this, a, b, c);
  if((a = a.g()) && 1 == b) {
    a.disabled = c
  }
};
s.Xb = function(a) {
  return a.value
};
s.oc = function(a, b) {
  a && (a.value = b)
};
s.N = da;
function me(a, b, c) {
  S.call(this, a, b || le.Xa(), c)
}
C(me, S);
s = me.prototype;
s.Xb = o("Xe");
s.oc = function(a) {
  this.Xe = a;
  this.t.oc(this.g(), a)
};
s.Wb = o("Ue");
s.nd = function(a) {
  this.Ue = a;
  this.t.nd(this.g(), a)
};
s.c = function() {
  me.e.c.call(this);
  delete this.Xe;
  delete this.Ue
};
s.ra = function() {
  me.e.ra.call(this);
  if(this.H & 32) {
    var a = this.Ia();
    a && Ed(Ld(this), a, "keyup", this.Nc)
  }
};
s.Nc = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Bb(a) : 32 == a.keyCode
};
Td("goog-button", function() {
  return new me(k)
});
function ne() {
}
C(ne, ke);
ea(ne);
ne.prototype.n = function(a) {
  var b = {"class":"goog-inline-block " + Qd(this, a).join(" "), title:a.Wb() || ""}, b = a.Wa().n("div", b, oe(this, a.qb, a.Wa()));
  this.ld(a, b);
  return b
};
ne.prototype.Ub = p("button");
ne.prototype.ld = function(a, b) {
  a.isEnabled() || this.N(b, 1, j);
  a.d & 8 && this.N(b, 8, j);
  a.H & 16 && this.N(b, 16, j);
  a.d & 64 && this.N(b, 64, j)
};
function oe(a, b, c) {
  return c.n("div", "goog-inline-block " + (a.ta() + "-outer-box"), c.n("div", "goog-inline-block " + (a.ta() + "-inner-box"), b))
}
ne.prototype.ta = p("goog-custom-button");
function pe(a, b, c) {
  me.call(this, a, b || ne.Xa(), c)
}
C(pe, me);
Td("goog-custom-button", function() {
  return new pe(k)
});
function qe() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ B()).toString(36)
}
function re(a) {
  return a.substr(0, a.length - 1)
}
var se = /^(0|[1-9]\d*)$/, te = /^(0|\-?[1-9]\d*)$/;
function ue(a) {
  var b = ve;
  return se.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function we(a) {
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
  f(Error("cannot determine size of object type " + b))
}
;var xe, ye;
function ze(a, b) {
  this.Ta = a;
  this.Pa = b
}
ze.prototype.P = function(a) {
  return a instanceof ze && this.Ta == a.Ta && this.Pa.join(",") == a.Pa
};
ze.prototype.D = function(a, b) {
  a.push("new SACK(", "" + this.Ta, ", ");
  P(this.Pa, a, b);
  a.push(")")
};
function Ae() {
  this.K = new K
}
Ae.prototype.Ga = -1;
Ae.prototype.M = 0;
Ae.prototype.append = function(a) {
  var b = we(a);
  this.K.set(this.Ga + 1, [a, b]);
  this.Ga += 1;
  this.M += b
};
Ae.prototype.D = function(a) {
  a.push("<Queue with ", "" + this.K.r(), " item(s), counter=#", "" + this.Ga, ", size=", "" + this.M, ">")
};
function Be(a) {
  a = a.K.ba();
  rb(a);
  return a
}
function Ce() {
  this.Fa = new K
}
Ce.prototype.Ma = -1;
Ce.prototype.M = 0;
function De(a) {
  var b = a.Fa.ba();
  rb(b);
  return new ze(a.Ma, b)
}
var Ee = {};
function Fe(a, b) {
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
        a.push('<property id="', d, '">'), Fe(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', D(c), '">'), Fe(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function Ge(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, e = arguments;
  d.push("<arguments>");
  for(var g = e.length, i = 1;i < g;i++) {
    Fe(d, e[i])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var He = m, Ie = "";
function Je(a) {
  a = a.match(/[\d]+/g);
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var Ke = navigator.plugins["Shockwave Flash"];
  Ke && (He = j, Ke.description && (Ie = Je(Ke.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (He = j, Ie = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var Le = navigator.mimeTypes["application/x-shockwave-flash"];
    (He = Le && Le.enabledPlugin) && (Ie = Je(Le.enabledPlugin.description))
  }else {
    try {
      var Me = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), He = j, Ie = Je(Me.GetVariable("$version"))
    }catch(Ne) {
      try {
        Me = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), He = j, Ie = "6.0.21"
      }catch(Oe) {
        try {
          Me = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), He = j, Ie = Je(Me.GetVariable("$version"))
        }catch(Pe) {
        }
      }
    }
  }
}
var Qe = Ie;
function Re(a) {
  this.o = new K;
  a && this.xc(a)
}
function Se(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ja(a) : b.substr(0, 1) + a
}
s = Re.prototype;
s.r = function() {
  return this.o.r()
};
s.add = function(a) {
  this.o.set(Se(a), a)
};
s.xc = function(a) {
  for(var a = ub(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
s.jd = function(a) {
  for(var a = ub(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
s.remove = function(a) {
  return this.o.remove(Se(a))
};
s.clear = function() {
  this.o.clear()
};
s.La = function() {
  return this.o.La()
};
s.contains = function(a) {
  return this.o.S(Se(a))
};
s.F = function() {
  return this.o.F()
};
s.I = function() {
  return new Re(this)
};
s.P = function(a) {
  return this.r() == tb(a) && Te(this, a)
};
function Te(a, b) {
  var c = tb(b);
  if(a.r() > c) {
    return m
  }
  !(b instanceof Re) && 5 < c && (b = new Re(b));
  return xb(a, function(a) {
    if("function" == typeof b.contains) {
      a = b.contains(a)
    }else {
      if("function" == typeof b.Ob) {
        a = b.Ob(a)
      }else {
        if(ga(b) || w(b)) {
          a = mb(b, a)
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
;function Ue(a) {
  return Ve(a || arguments.callee.caller, [])
}
function Ve(a, b) {
  var c = [];
  if(mb(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(We(a) + "(");
      for(var d = a.arguments, e = 0;e < d.length;e++) {
        0 < e && c.push(", ");
        var g;
        g = d[e];
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
            g = (g = We(g)) ? g : "[fn]";
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
        c.push(Ve(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function We(a) {
  if(Xe[a]) {
    return Xe[a]
  }
  a = "" + a;
  if(!Xe[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Xe[a] = b ? b[1] : "[Anonymous]"
  }
  return Xe[a]
}
var Xe = {};
function Ye(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Ye.prototype.Lc = k;
Ye.prototype.Kc = k;
var Ze = 0;
Ye.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || Ze++;
  this.Te = d || B();
  this.W = a;
  this.ue = b;
  this.qe = c;
  delete this.Lc;
  delete this.Kc
};
Ye.prototype.kb = aa("W");
function $e(a) {
  this.Jf = a
}
$e.prototype.z = k;
$e.prototype.W = k;
$e.prototype.qa = k;
$e.prototype.xb = k;
function af(a, b) {
  this.name = a;
  this.value = b
}
af.prototype.toString = o("name");
var bf = new af("SHOUT", 1200), cf = new af("SEVERE", 1E3), df = new af("WARNING", 900), ef = new af("INFO", 800), ff = new af("CONFIG", 700), gf = new af("FINE", 500), hf = new af("FINEST", 300), jf = new af("ALL", 0), kf = [new af("OFF", Infinity), bf, cf, df, ef, ff, gf, new af("FINER", 400), hf, jf], lf = k;
function mf(a) {
  if(!lf) {
    lf = {};
    for(var b = 0, c;c = kf[b];b++) {
      lf[c.value] = c, lf[c.name] = c
    }
  }
  return lf[a] || k
}
s = $e.prototype;
s.getParent = o("z");
s.kb = aa("W");
function nf(a) {
  if(a.W) {
    return a.W
  }
  if(a.z) {
    return nf(a.z)
  }
  Za("Root logger has no level set.");
  return k
}
s.log = function(a, b, c) {
  if(a.value >= nf(this).value) {
    a = this.yf(a, b, c);
    b = "log:" + a.ue;
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.xb) {
        for(var e = 0, g = h;g = c.xb[e];e++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
s.yf = function(a, b, c) {
  var d = new Ye(a, "" + b, this.Jf);
  if(c) {
    d.Lc = c;
    var e;
    var g = arguments.callee.caller;
    try {
      var i;
      var l = ca("window.location.href");
      if(w(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var n, q, G = m;
        try {
          n = c.lineNumber || c.kh || "Not available"
        }catch(r) {
          n = "Not available", G = j
        }
        try {
          q = c.fileName || c.filename || c.sourceURL || l
        }catch(x) {
          q = "Not available", G = j
        }
        i = G || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:q, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + D(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + D(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + D(Ue(g) + "-> ")
    }catch(z) {
      e = "Exception trying to expose exception! You win, we lose. " + z
    }
    d.Kc = e
  }
  return d
};
function U(a, b) {
  a.log(cf, b, h)
}
function V(a, b, c) {
  a.log(df, b, c)
}
s.info = function(a, b) {
  this.log(ef, a, b)
};
function W(a, b) {
  a.log(gf, b, h)
}
function X(a, b) {
  a.log(hf, b, h)
}
var of = {}, pf = k;
function qf() {
  pf || (pf = new $e(""), of[""] = pf, pf.kb(ff))
}
function rf() {
  qf();
  return pf
}
function Y(a) {
  qf();
  var b;
  if(!(b = of[a])) {
    b = new $e(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Y(a.substr(0, c));
    c.qa || (c.qa = {});
    c.qa[d] = b;
    b.z = c;
    of[a] = b
  }
  return b
}
;function sf(a, b) {
  Hd.call(this, b);
  this.vf = a;
  this.Jc = new Cd(this);
  this.Sb = new K
}
C(sf, Hd);
s = sf.prototype;
s.a = Y("goog.ui.media.FlashObject");
s.hg = "window";
s.Fd = "#000000";
s.cf = "sameDomain";
function tf(a, b, c) {
  a.Ad = w(b) ? b : Math.round(b) + "px";
  a.Pc = w(c) ? c : Math.round(c) + "px";
  a.g() && (b = a.g() ? a.g().firstChild : k, c = a.Ad, a = a.Pc, c instanceof ad ? (a = c.height, c = c.width) : a == h && f(Error("missing height argument")), b.style.width = Ad(c), b.style.height = Ad(a))
}
s.ra = function() {
  sf.e.ra.call(this);
  var a = this.g(), b;
  b = E ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = E ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = pa(c, this.hg), d = this.Sb.ba(), e = this.Sb.F(), g = [], i = 0;i < d.length;i++) {
    var l = sa(d[i]), n = sa(e[i]);
    g.push(l + "=" + n)
  }
  b = pa(b, Kd(this), Kd(this), "goog-ui-media-flash-object", D(this.vf), D(g.join("&")), this.Fd, this.cf, c);
  a.innerHTML = b;
  this.Ad && this.Pc && tf(this, this.Ad, this.Pc);
  Ed(this.Jc, this.g(), cb(cc), fc)
};
s.n = function() {
  this.Ie != k && !(0 <= Aa(Qe, this.Ie)) && (V(this.a, "Required flash version not found:" + this.Ie), f(Error("Method not supported")));
  var a = this.Wa().createElement("div");
  a.className = "goog-ui-media-flash";
  this.q = a
};
s.c = function() {
  sf.e.c.call(this);
  this.Sb = k;
  this.Jc.b();
  this.Jc = k
};
function uf(a) {
  I.call(this, a)
}
C(uf, I);
uf.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function vf(a, b, c) {
  function d() {
    e && delete t.__loadFlashObject_callbacks[e]
  }
  var e;
  if(Ka && !H("1.8.1.20")) {
    return Oc(new uf("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Aa(Qe, "9"))) {
    return Oc(new uf("Need Flash Player 9+; had " + (Qe ? Qe : "none")))
  }
  var g;
  e = "_" + qe();
  var i = new Ac(d);
  t.__loadFlashObject_callbacks[e] = function() {
    a.setTimeout(function() {
      d();
      i.Z(R(g))
    }, 0)
  };
  b.Sb.set("onloadcallback", '__loadFlashObject_callbacks["' + e + '"]()');
  g = Kd(b);
  Md(b, c);
  return i
}
function wf(a, b, c) {
  var d = vf(a, b, c), e = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  Kc(d, function(b) {
    a.clearTimeout(e);
    return b
  });
  return d
}
;function xf(a, b) {
  this.ca = "_" + qe();
  this.sc = a;
  this.Aa = b;
  this.Ea = a.Ea
}
C(xf, M);
s = xf.prototype;
s.eb = j;
s.Fc = m;
s.a = Y("cw.net.FlashSocket");
s.D = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.ca);
  a.push("'>")
};
function yf(a, b, c) {
  "frames" == b ? (a = a.Aa, zf(a.C), Af(a.C, c)) : "stillreceiving" == b ? (c = a.Aa, X(c.a, "onstillreceiving"), zf(c.C)) : "connect" == b ? (c = a.Aa, c.a.info("onconnect"), zf(c.C), a = c.ob, c.ob = k, a.length && (X(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.pc.Kb(a))) : "close" == b ? (a.eb = m, a.b()) : "ioerror" == b ? (a.eb = m, b = a.Aa, V(b.a, "onioerror: " + Q(c)), Bf(b.C, m), a.b()) : "securityerror" == b ? (a.eb = m, b = a.Aa, V(b.a, "onsecurityerror: " + Q(c)), 
  Bf(b.C, m), a.b()) : f(Error("bad event: " + b))
}
function Cf(a) {
  a.Fc = j;
  a.eb = m;
  a.b()
}
s.Dc = function(a, b) {
  try {
    var c = this.Ea.CallFunction(Ge("__FC_connect", this.ca, a, b, "<int32/>\n"))
  }catch(d) {
    return U(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), Cf(this)
  }
  '"OK"' != c && f(Error("__FC_connect failed? ret: " + c))
};
s.Kb = function(a) {
  try {
    var b = this.Ea.CallFunction(Ge("__FC_writeFrames", this.ca, a))
  }catch(c) {
    return U(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), Cf(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (V(this.a, "Flash no longer knows of " + this.ca + "; disposing."), this.b()) : f(Error("__FC_writeFrames failed? ret: " + b)))
};
s.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.eb);
  xf.e.c.call(this);
  var a = this.Ea;
  delete this.Ea;
  if(this.eb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(Ge("__FC_close", this.ca)))
    }catch(b) {
      U(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Fc = j
    }
  }
  if(this.Fc) {
    a = this.Aa, V(a.a, "oncrash"), Bf(a.C, j)
  }else {
    this.Aa.onclose()
  }
  delete this.Aa;
  delete this.sc.Za[this.ca]
};
function Df(a, b) {
  this.p = a;
  this.Ea = b;
  this.Za = {};
  this.Cc = "__FST_" + qe();
  t[this.Cc] = A(this.pf, this);
  var c = b.CallFunction(Ge("__FC_setCallbackFunc", this.Cc));
  '"OK"' != c && f(Error("__FC_setCallbackFunc failed? ret: " + c))
}
C(Df, M);
s = Df.prototype;
s.a = Y("cw.net.FlashSocketTracker");
s.D = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  P(this.Za, a, b);
  a.push(">")
};
s.Gc = function(a) {
  a = new xf(this, a);
  return this.Za[a.ca] = a
};
s.nf = function(a, b, c, d) {
  var e = this.Za[a];
  e ? "frames" == b && d ? (yf(e, "ioerror", "FlashConnector hadError while handling data."), e.b()) : yf(e, b, c) : V(this.a, "Cannot dispatch because we have no instance: " + Q([a, b, c, d]))
};
s.pf = function(a, b, c, d) {
  try {
    Qc(this.p, this.nf, this, [a, b, c, d])
  }catch(e) {
    t.window.setTimeout(function() {
      f(e)
    }, 0)
  }
};
s.c = function() {
  Df.e.c.call(this);
  for(var a = cb(this.Za);a.length;) {
    a.pop().b()
  }
  delete this.Za;
  delete this.Ea;
  t[this.Cc] = h
};
function Ef(a) {
  this.C = a;
  this.ob = []
}
C(Ef, M);
s = Ef.prototype;
s.a = Y("cw.net.FlashSocketConduit");
s.Kb = function(a) {
  this.ob ? (X(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.ob.push.apply(this.ob, a)) : (X(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.pc.Kb(a))
};
s.Dc = function(a, b) {
  this.pc.Dc(a, b)
};
s.onclose = function() {
  this.a.info("onclose");
  Bf(this.C, m)
};
s.c = function() {
  this.a.info("in disposeInternal.");
  Ef.e.c.call(this);
  this.pc.b();
  delete this.C
};
var Ff = [];
function Gf() {
  var a = new Ac;
  Ff.push(a);
  return a
}
function Hf(a) {
  var b = Ff;
  Ff = [];
  hb(b, function(b) {
    b.Z(a)
  })
}
function If(a, b) {
  if(Ff.length) {
    return Gf()
  }
  var c = new sf(b + "FlashConnector.swf?cb=" + Jf);
  c.Fd = "#777777";
  tf(c, 300, 30);
  var d = R("minerva-elements");
  d || f(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
  var e = R("minerva-elements-FlashConnectorSwf");
  e || (e = nd("div", {id:"minerva-elements-FlashConnectorSwf"}), d.appendChild(e));
  xe = wf(a.B, c, e);
  Gc(xe, Hf);
  return Gf()
}
;function Kf() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;var ve = Math.pow(2, 53);
var Lf = {af:p("<cw.eq.Wildcard>")};
function Mf(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function Nf(a, b, c) {
  var d = fa(a), e = fa(b);
  if(a == Lf || b == Lf) {
    return j
  }
  if(a != k && "function" == typeof a.P) {
    return c && c.push("running custom equals function on left object"), a.P(b, c)
  }
  if(b != k && "function" == typeof b.P) {
    return c && c.push("running custom equals function on right object"), b.P(a, c)
  }
  if(Mf(d) || Mf(e)) {
    a = a === b
  }else {
    if(a instanceof RegExp && b instanceof RegExp) {
      a = a.toString() === b.toString()
    }else {
      if(ha(a) && ha(b)) {
        a = a.valueOf() === b.valueOf()
      }else {
        if("array" == d && "array" == e) {
          a: {
            if(c && c.push("descending into array"), a.length != b.length) {
              c && c.push("array length mismatch: " + a.length + ", " + b.length), a = m
            }else {
              d = 0;
              for(e = a.length;d < e;d++) {
                if(!Nf(a[d], b[d], c)) {
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
          if(a.$e == Xb && b.$e == Xb) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!Nf(a[g], b[g], c)) {
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
  this.Qf = a;
  this.hc = b
}
Z.prototype.P = function(a, b) {
  return ia(a) && this.constructor == a.constructor && Nf(this.hc, a.hc, b)
};
Z.prototype.D = function(a, b) {
  a.push("new ", this.Qf, "(");
  for(var c = "", d = 0;d < this.hc.length;d++) {
    a.push(c), c = ", ", P(this.hc[d], a, b)
  }
  a.push(")")
};
function $(a) {
  I.call(this, a)
}
C($, I);
$.prototype.name = "cw.net.InvalidFrame";
function Of() {
  var a = [];
  this.U(a);
  return a.join("")
}
function Pf() {
}
Pf.prototype.P = function(a, b) {
  return!(a instanceof Pf) ? m : Nf(Qf(this), Qf(a), b)
};
Pf.prototype.D = function(a, b) {
  a.push("<HelloFrame properties=");
  P(Qf(this), a, b);
  a.push(">")
};
function Qf(a) {
  return[a.mb, a.Ce, a.ee, a.He, a.Hb, a.sd, a.ve, a.te, a.Zc, a.re, a.We, a.Se, a.Ca, a.cc]
}
Pf.prototype.O = Of;
Pf.prototype.U = function(a) {
  var b = {};
  b.tnum = this.mb;
  b.ver = this.Ce;
  b.format = this.ee;
  b["new"] = this.He;
  b.id = this.Hb;
  b.ming = this.sd;
  b.pad = this.ve;
  b.maxb = this.te;
  u(this.Zc) && (b.maxt = this.Zc);
  b.maxia = this.re;
  b.tcpack = this.We;
  b.eeds = this.Se;
  b.sack = this.Ca instanceof ze ? re((new Rf(this.Ca)).O()) : this.Ca;
  b.seenack = this.cc instanceof ze ? re((new Rf(this.cc)).O()) : this.cc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(Tc(b), "H")
};
function Sf(a) {
  Z.call(this, "StringFrame", [a]);
  this.ud = a
}
C(Sf, Z);
Sf.prototype.O = Of;
Sf.prototype.U = function(a) {
  a.push(this.ud, " ")
};
function Tf(a) {
  Z.call(this, "CommentFrame", [a]);
  this.kf = a
}
C(Tf, Z);
Tf.prototype.O = Of;
Tf.prototype.U = function(a) {
  a.push(this.kf, "^")
};
function Uf(a) {
  Z.call(this, "SeqNumFrame", [a]);
  this.Ne = a
}
C(Uf, Z);
Uf.prototype.O = Of;
Uf.prototype.U = function(a) {
  a.push("" + this.Ne, "N")
};
function Vf(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = ve;
    if(te.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
    for(var b = b[0].split(","), d = 0, e = b.length;d < e;d++) {
      var g = ue(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new ze(a, c)
}
function Rf(a) {
  Z.call(this, "SackFrame", [a]);
  this.Ca = a
}
C(Rf, Z);
Rf.prototype.O = Of;
Rf.prototype.U = function(a) {
  var b = this.Ca;
  a.push(b.Pa.join(","), "|", "" + b.Ta);
  a.push("A")
};
function Wf(a) {
  Z.call(this, "StreamStatusFrame", [a]);
  this.me = a
}
C(Wf, Z);
Wf.prototype.O = Of;
Wf.prototype.U = function(a) {
  var b = this.me;
  a.push(b.Pa.join(","), "|", "" + b.Ta);
  a.push("T")
};
function Xf() {
  Z.call(this, "StreamCreatedFrame", [])
}
C(Xf, Z);
Xf.prototype.O = Of;
Xf.prototype.U = function(a) {
  a.push("C")
};
function Yf() {
  Z.call(this, "YouCloseItFrame", [])
}
C(Yf, Z);
Yf.prototype.O = Of;
Yf.prototype.U = function(a) {
  a.push("Y")
};
function Zf(a, b) {
  Z.call(this, "ResetFrame", [a, b]);
  this.Fe = a;
  this.Ed = b
}
C(Zf, Z);
Zf.prototype.O = Of;
Zf.prototype.U = function(a) {
  a.push(this.Fe, "|", "" + Number(this.Ed), "!")
};
var $f = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function ag(a) {
  Z.call(this, "TransportKillFrame", [a]);
  this.reason = a
}
C(ag, Z);
ag.prototype.O = Of;
ag.prototype.U = function(a) {
  a.push(this.reason, "K")
};
function bg(a) {
  a || f(new $("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new Sf(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = Vf(re(a)), a == k && f(new $("bad sack")), new Rf(a)
  }
  if("N" == b) {
    return a = ue(re(a)), a == k && f(new $("bad seqNum")), new Uf(a)
  }
  if("T" == b) {
    return a = Vf(re(a)), a == k && f(new $("bad lastSackSeen")), new Wf(a)
  }
  if("Y" == b) {
    return 1 != a.length && f(new $("leading garbage")), new Yf
  }
  if("^" == b) {
    return new Tf(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && f(new $("leading garbage")), new Xf
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && f(new $("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && f(new $("bad applicationLevel")), new Zf(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = $f[a], a == k && f(new $("unknown kill reason: " + a)), new ag(a)
  }
  f(new $("Invalid frame type " + b))
}
;function cg(a, b, c, d) {
  this.contentWindow = a;
  this.Rb = b;
  this.td = c;
  this.xf = d
}
cg.prototype.D = function(a, b) {
  a.push("<XDRFrame frameId=");
  P(this.xf, a, b);
  a.push(", expandedUrl=");
  P(this.Rb, a, b);
  a.push(", streams=");
  P(this.td, a, b);
  a.push(">")
};
function dg() {
  this.frames = [];
  this.Xc = new K
}
dg.prototype.a = Y("cw.net.XDRTracker");
function eg(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor(Kf()) + ("" + Math.floor(Kf()))
  })
}
function hg(a, b) {
  for(var c = ig, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = 0 == e.td.length) {
      g = e.Rb;
      var i = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + i + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + Q(b) + " existing frame " + Q(e)), Nc(e)
    }
  }
  d = qe() + qe();
  e = eg(a);
  g = t.location;
  g instanceof L || (g = Rb(g));
  e instanceof L || (e = Rb(e));
  var l = g;
  g = l.I();
  (i = !!e.ga) ? Cb(g, e.ga) : i = !!e.Ra;
  i ? Db(g, e.Ra) : i = !!e.T;
  i ? Eb(g, e.T) : i = e.za != k;
  var n = e.Q;
  if(i) {
    Fb(g, e.za)
  }else {
    if(i = !!e.Q) {
      if("/" != n.charAt(0) && (l.T && !l.Q ? n = "/" + n : (l = g.Q.lastIndexOf("/"), -1 != l && (n = g.Q.substr(0, l + 1) + n))), ".." == n || "." == n) {
        n = ""
      }else {
        if(-1 != n.indexOf("./") || -1 != n.indexOf("/.")) {
          for(var l = 0 == n.lastIndexOf("/", 0), n = n.split("/"), q = [], G = 0;G < n.length;) {
            var r = n[G++];
            "." == r ? l && G == n.length && q.push("") : ".." == r ? ((1 < q.length || 1 == q.length && "" != q[0]) && q.pop(), l && G == n.length && q.push("")) : (q.push(r), l = j)
          }
          n = q.join("/")
        }
      }
    }
  }
  i ? Gb(g, n) : i = "" !== e.G.toString();
  i ? (l = e.G, l.Va || (l.Va = l.toString() ? decodeURIComponent(l.toString()) : ""), Hb(g, l.Va, h)) : i = !!e.Ha;
  i && Ib(g, e.Ha);
  e = g.toString();
  g = ("" + t.location).match($a)[3] || k;
  i = e.match($a)[3] || k;
  g == i ? (c.a.info("No need to make a real XDRFrame for " + Q(b)), c = Nc(new cg(t, e, [b], k))) : ((g = R("minerva-elements")) || f(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new Ac, c.Xc.set(d, [i, e, b]), c.a.info("Creating new XDRFrame " + Q(d) + "for " + Q(b)), c = nd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = i);
  return c
}
dg.prototype.jg = function(a) {
  var b = this.Xc.get(a);
  b || f(Error("Unknown frameId " + Q(a)));
  this.Xc.remove(b);
  var c = b[0], a = new cg(R("minerva-xdrframe-" + a).contentWindow || (R("minerva-xdrframe-" + a).contentDocument || R("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (R("minerva-xdrframe-" + a).contentDocument || R("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.Z(a)
};
var ig = new dg;
t.__XHRTracker_xdrFrameLoaded = A(ig.jg, ig);
var jg;
jg = m;
var kg = Ga();
kg && (-1 != kg.indexOf("Firefox") || -1 != kg.indexOf("Camino") || -1 != kg.indexOf("iPhone") || -1 != kg.indexOf("iPod") || -1 != kg.indexOf("iPad") || -1 != kg.indexOf("Android") || -1 != kg.indexOf("Chrome") && (jg = j));
var lg = jg;
var Jf = "4bdfc178fc0e508c0cd5efc3fdb09920";
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function mg(a, b, c, d, e, g) {
  Ac.call(this, e, g);
  this.pe = a;
  this.Hc = [];
  this.Td = !!b;
  this.uf = !!c;
  this.lf = !!d;
  for(b = 0;b < a.length;b++) {
    Hc(a[b], A(this.Xd, this, b, j), A(this.Xd, this, b, m))
  }
  0 == a.length && !this.Td && this.Z(this.Hc)
}
C(mg, Ac);
mg.prototype.xe = 0;
mg.prototype.Xd = function(a, b, c) {
  this.xe++;
  this.Hc[a] = [b, c];
  this.sa || (this.Td && b ? this.Z([a, c]) : this.uf && !b ? this.tb(c) : this.xe == this.pe.length && this.Z(this.Hc));
  this.lf && !b && (c = k);
  return c
};
mg.prototype.tb = function(a) {
  mg.e.tb.call(this, a);
  hb(this.pe, function(a) {
    a.cancel()
  })
};
function ng(a) {
  a = new mg(a, m, j);
  Gc(a, function(a) {
    return jb(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function og(a, b) {
  this.ig = a;
  this.se = b
}
og.prototype.Uc = 0;
og.prototype.ec = 0;
og.prototype.Mc = m;
function pg(a) {
  var b = [];
  if(a.Mc) {
    return[b, 2]
  }
  var c = a.Uc, d = a.ig.responseText;
  for(a.Uc = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var e = d.substr(a.ec, c - a.ec), e = e.replace(/\r$/, "");
    if(e.length > a.se) {
      return a.Mc = j, [b, 2]
    }
    b.push(e);
    a.ec = c += 1
  }
  return a.Uc - a.ec - 1 > a.se ? (a.Mc = j, [b, 2]) : [b, 1]
}
;function qg(a, b, c) {
  this.C = b;
  this.X = a;
  this.Ec = c
}
C(qg, M);
s = qg.prototype;
s.a = Y("cw.net.XHRMaster");
s.Ba = -1;
s.Yc = function(a, b, c) {
  this.Ec.__XHRSlave_makeRequest(this.X, a, b, c)
};
s.ua = o("Ba");
s.bd = function(a, b) {
  1 != b && U(this.a, Q(this.X) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  zf(this.C);
  Af(this.C, a)
};
s.cd = function(a) {
  W(this.a, "ongotheaders_: " + Q(a));
  var b = k;
  "Content-Length" in a && (b = ue(a["Content-Length"]));
  a = this.C;
  W(a.a, a.m() + " got Content-Length: " + b);
  a.ha == rg && (b == k && (V(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), sg(a, 2E3 + 1E3 * (b / 3072)))
};
s.dd = function(a) {
  1 != a && W(this.a, this.C.m() + "'s XHR's readyState is " + a);
  this.Ba = a;
  2 <= this.Ba && zf(this.C)
};
s.ad = function() {
  this.C.b()
};
s.c = function() {
  qg.e.c.call(this);
  delete tg.ma[this.X];
  this.Ec.__XHRSlave_dispose(this.X);
  delete this.Ec
};
function ug() {
  this.ma = {}
}
C(ug, M);
s = ug.prototype;
s.a = Y("cw.net.XHRMasterTracker");
s.Gc = function(a, b) {
  var c = "_" + qe(), d = new qg(c, a, b);
  return this.ma[c] = d
};
s.bd = function(a, b, c) {
  if(Ka) {
    for(var d = [], e = 0, g = b.length;e < g;e++) {
      d[e] = b[e]
    }
    b = d
  }else {
    b = ob(b)
  }
  (d = this.ma[a]) ? d.bd(b, c) : U(this.a, "onframes_: no master for " + Q(a))
};
s.cd = function(a, b) {
  var c = this.ma[a];
  c ? c.cd(b) : U(this.a, "ongotheaders_: no master for " + Q(a))
};
s.dd = function(a, b) {
  var c = this.ma[a];
  c ? c.dd(b) : U(this.a, "onreadystatechange_: no master for " + Q(a))
};
s.ad = function(a) {
  var b = this.ma[a];
  b ? (delete this.ma[b.X], b.ad()) : U(this.a, "oncomplete_: no master for " + Q(a))
};
s.c = function() {
  ug.e.c.call(this);
  for(var a = cb(this.ma);a.length;) {
    a.pop().b()
  }
  delete this.ma
};
var tg = new ug;
t.__XHRMaster_onframes = A(tg.bd, tg);
t.__XHRMaster_oncomplete = A(tg.ad, tg);
t.__XHRMaster_ongotheaders = A(tg.cd, tg);
t.__XHRMaster_onreadystatechange = A(tg.dd, tg);
function vg(a, b, c) {
  this.ea = a;
  this.host = b;
  this.port = c
}
function wg(a, b, c) {
  this.host = a;
  this.port = b;
  this.cg = c
}
function xg(a, b) {
  b || (b = a);
  this.ea = a;
  this.Da = b
}
xg.prototype.D = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  P(this.ea, a, b);
  a.push(", secondaryUrl=");
  P(this.Da, a, b);
  a.push(">")
};
function yg(a, b, c, d) {
  this.ea = a;
  this.Be = b;
  this.Da = c;
  this.Me = d;
  (!(0 == this.ea.indexOf("http://") || 0 == this.ea.indexOf("https://")) || !(0 == this.Da.indexOf("http://") || 0 == this.Da.indexOf("https://"))) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Be.location.href;
  ab(this.ea, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Me.location.href;
  ab(this.Da, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
yg.prototype.D = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  P(this.ea, a, b);
  a.push(", secondaryUrl=");
  P(this.Da, a, b);
  a.push(">")
};
var zg = new Tf(";)]}");
function Ag() {
}
Ag.prototype.Ud = p(1);
function Bg(a) {
  t.setTimeout(function() {
    u(a.message) && a.stack && (a.message += "\n" + a.stack);
    f(a)
  }, 0)
}
function Cg(a) {
  this.Zf = a
}
Cg.prototype.D = function(a, b) {
  a.push("<UserContext for ");
  P(this.Zf, a, b);
  a.push(">")
};
function Dg(a, b, c) {
  this.s = a;
  this.$f = b ? b : new Ag;
  this.p = c ? c : Rc;
  this.Ib = new Re;
  this.Hb = qe() + qe();
  this.fa = new Ae;
  this.Sc = new Ce;
  this.Jb = k;
  this.uc = [];
  this.tc = new Cg(this);
  this.ef = A(this.dg, this);
  F && (this.Jb = pc(t, "load", this.Rf, m, this))
}
C(Dg, M);
s = Dg.prototype;
s.a = Y("cw.net.ClientStream");
s.ne = new ze(-1, []);
s.oe = new ze(-1, []);
s.If = 50;
s.Hf = 1048576;
s.fd = k;
s.ed = k;
s.onreset = k;
s.ze = k;
s.ib = k;
s.qd = m;
s.kd = m;
s.d = 1;
s.wd = -1;
s.h = k;
s.u = k;
s.Cb = k;
s.rd = 0;
s.Ae = 0;
s.Le = 0;
s.D = function(a, b) {
  a.push("<ClientStream id=");
  P(this.Hb, a, b);
  a.push(", state=", "" + this.d);
  a.push(", primary=");
  P(this.h, a, b);
  a.push(", secondary=");
  P(this.u, a, b);
  a.push(", resetting=");
  P(this.Cb, a, b);
  a.push(">")
};
function Eg(a) {
  var b = [-1];
  a.h && b.push(a.h.fb);
  a.u && b.push(a.u.fb);
  return Math.max.apply(Math.max, b)
}
function Fg(a) {
  if(!(3 > a.d)) {
    Gg(a);
    var b = 0 != a.fa.K.r(), c = De(a.Sc), d = !c.P(a.oe) && !(a.h && c.P(a.h.bb) || a.u && c.P(a.u.bb)), e = Eg(a);
    if((b = b && e < a.fa.Ga) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.h.pb ? (X(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.h, c != d.bb && (!d.na && !d.v.length && Hg(d), d.v.push(new Rf(c)), d.bb = c)), b && Ig(a.h, a.fa, e + 1), a.h.la()) : a.u == k ? a.qd ? (X(a.a, "tryToSend_: creating secondary to send " + g), a.u = Jg(a, m), b && Ig(a.u, a.fa, e + 1), a.u.la()) : (X(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.kd = j) : X(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
function Gg(a) {
  a.ib != k && (a.p.B.clearTimeout(a.ib), a.ib = k)
}
s.dg = function() {
  this.ib = k;
  Fg(this)
};
function Kg(a) {
  a.ib == k && (a.ib = a.p.B.setTimeout(a.ef, 6))
}
s.Rf = function() {
  this.Jb = k;
  if(this.h && this.h.$a()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.h;
    a.wc = j;
    a.b()
  }
  this.u && this.u.$a() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.u, a.wc = j, a.b())
};
function Lg(a, b) {
  var c;
  u(c) || (c = j);
  3 < a.d && f(Error("sendString: Can't send in state " + a.d));
  c && (w(b) || f(Error("sendString: not a string: " + Q(b))), /^([ -~]*)$/.test(b) || f(Error("sendString: string has illegal chars: " + Q(b))));
  a.fa.append(b);
  Kg(a)
}
function Jg(a, b) {
  var c;
  a.s instanceof yg ? c = 1 == a.$f.Ud() ? rg : Mg : a.s instanceof wg ? c = Ng : f(Error("Don't support endpoint " + Q(a.s)));
  a.wd += 1;
  c = new Og(a.p, a, a.wd, c, a.s, b);
  X(a.a, "Created: " + c.m());
  a.Ib.add(c);
  return c
}
function Pg(a, b, c) {
  var d = new Qg(a.p, a, b, c);
  X(a.a, "Created: " + d.m() + ", delay=" + b + ", times=" + c);
  a.Ib.add(d);
  return d
}
function Rg(a, b) {
  a.Ib.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  W(a.a, "Offline: " + b.m());
  a.rd = b.ya ? a.rd + b.ya : 0;
  1 <= a.rd && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), Sg(a, "stream penalty reached limit", m), a.b());
  if(3 < a.d) {
    4 == a.d && b.Ze ? (W(a.a, "Disposing because resettingTransport_ is done."), a.b()) : W(a.a, "Not creating a transport because ClientStream is in state " + a.d)
  }else {
    var c;
    var d;
    c = b instanceof Qg;
    if(!c && b.wc) {
      var e = F ? lg ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      X(a.a, "getDelayForNextTransport_: " + Q({delay:c, times:d}))
    }else {
      if(d = b.Jd(), b == a.h ? d ? e = ++a.Ae : c || (e = a.Ae = 0) : d ? e = ++a.Le : c || (e = a.Le = 0), c || !e) {
        d = c = 0, X(a.a, "getDelayForNextTransport_: " + Q({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), i = Math.floor(4E3 * Math.random()) - 2E3, l = Math.max(0, b.Ve - b.xd);
        d = (c = Math.max(0, g + i - l)) ? 1 : 0;
        X(a.a, "getDelayForNextTransport_: " + Q({count:e, base:g, variance:i, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    b == a.h ? (a.h = k, c ? a.h = Pg(a, e, c) : (e = Eg(a), a.h = Jg(a, j), Ig(a.h, a.fa, e + 1)), a.h.la()) : b == a.u && (a.u = k, c ? (a.u = Pg(a, e, c), a.u.la()) : Fg(a))
  }
}
function Sg(a, b, c) {
  if(a.onreset) {
    try {
      a.onreset.call(a.tc, b, c)
    }catch(d) {
      V(a.a, "onreset raised uncaught exception", d), Bg(d)
    }
  }
}
s.reset = function(a) {
  3 < this.d && f(Error("reset: Can't send reset in state " + this.d));
  Gg(this);
  0 != this.fa.K.r() && V(this.a, "reset: strings in send queue will never be sent: " + Q(this.fa));
  this.d = 4;
  this.h && this.h.pb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Tg(this.h, a), this.h.la()) : (this.h && (W(this.a, "reset: Disposing primary before sending ResetFrame."), this.h.b()), this.u && (W(this.a, "reset: Disposing secondary before sending ResetFrame."), this.u.b()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Cb = Jg(this, m), Tg(this.Cb, a), this.Cb.la());
  Sg(this, a, j)
};
function Ug(a, b, c, d) {
  var e;
  e = a.Sc;
  for(var g = a.If, i = a.Hf, l = [], n = m, q = 0, G = c.length;q < G;q++) {
    var r = c[q], x = r[0], r = r[1];
    if(x == e.Ma + 1) {
      e.Ma += 1;
      for(l.push(r);;) {
        x = e.Ma + 1;
        r = e.Fa.get(x, Ee);
        if(r === Ee) {
          break
        }
        l.push(r[0]);
        e.Fa.remove(x);
        e.M -= r[1];
        e.Ma = x
      }
    }else {
      if(!(x <= e.Ma)) {
        if(g != k && e.Fa.r() >= g) {
          n = j;
          break
        }
        var z = we(r);
        if(i != k && e.M + z > i) {
          n = j;
          break
        }
        e.Fa.set(x, [r, z]);
        e.M += z
      }
    }
  }
  e.Fa.La() && e.Fa.clear();
  e = [l, n];
  c = e[0];
  e = e[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      i = c[g];
      if(a.fd) {
        try {
          a.fd.call(a.tc, i)
        }catch(Jc) {
          V(a.a, "onstring raised uncaught exception", Jc), Bg(Jc)
        }
      }
      if(4 == a.d || a.$) {
        return
      }
    }
  }
  d || Kg(a);
  if(!(4 == a.d || a.$) && e) {
    U(b.a, b.m() + "'s peer caused rwin overflow."), b.b()
  }
}
s.Qd = function(a) {
  U(this.a, "Failed to start " + Q(this) + "; error was " + Q(a.message));
  this.b()
};
s.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.d && f(Error("ClientStream.start: " + Q(this) + " already started"));
  this.ed && this.ed(this);
  this.d = 2;
  if(this.s instanceof xg) {
    var a = hg(this.s.ea, this), b = hg(this.s.Da, this), a = ng([a, b]);
    Gc(a, A(this.sf, this));
    Ic(a, A(this.Qd, this))
  }else {
    if(this.s instanceof vg) {
      if(ye) {
        this.Sd()
      }else {
        var a = If(this.p, this.s.ea), c = this;
        Gc(a, function(a) {
          ye || (ye = new Df(c.p, a));
          return k
        });
        Gc(a, A(this.Sd, this));
        Ic(a, A(this.Qd, this))
      }
    }else {
      Vg(this)
    }
  }
};
s.sf = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Rb, e = a[1].Rb;
  this.uc.push(a[0]);
  this.uc.push(a[1]);
  this.s = new yg(d, b, e, c);
  Vg(this)
};
s.Sd = function() {
  this.s = new wg(this.s.host, this.s.port, ye);
  Vg(this)
};
function Vg(a) {
  a.d = 3;
  a.h = Jg(a, j);
  Ig(a.h, a.fa, k);
  a.h.la()
}
s.c = function() {
  this.a.info(Q(this) + " in disposeInternal.");
  Gg(this);
  this.d = 5;
  for(var a = this.Ib.F(), b = 0;b < a.length;b++) {
    a[b].b()
  }
  for(a = 0;a < this.uc.length;a++) {
    nb(this.uc[a].td, this)
  }
  F && this.Jb && (sc(this.Jb), this.Jb = k);
  this.ze && this.ze.call(this.tc);
  delete this.Ib;
  delete this.h;
  delete this.u;
  delete this.Cb;
  delete this.tc;
  Dg.e.c.call(this)
};
var rg = 1, Mg = 2, Ng = 3;
function Og(a, b, c, d, e, g) {
  this.p = a;
  this.A = b;
  this.mb = c;
  this.ha = d;
  this.s = e;
  this.v = [];
  this.Ua = g;
  this.pb = !this.$a();
  this.hb = this.ha != rg;
  this.df = A(this.ag, this)
}
C(Og, M);
s = Og.prototype;
s.a = Y("cw.net.ClientTransport");
s.l = k;
s.xd = k;
s.Ve = k;
s.ic = k;
s.na = m;
s.qc = m;
s.bb = k;
s.Tb = 0;
s.fb = -1;
s.gc = -1;
s.Ze = m;
s.wc = m;
s.ya = 0;
s.wb = m;
s.D = function(a) {
  a.push("<ClientTransport #", "" + this.mb, ", becomePrimary=", "" + this.Ua, ">")
};
s.m = function() {
  return(this.Ua ? "Prim. T#" : "Sec. T#") + this.mb
};
s.Jd = function() {
  return!(!this.wb && this.Tb)
};
s.$a = function() {
  return this.ha == rg || this.ha == Mg
};
function Wg(a, b) {
  rb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Ug(a.A, a, b, !a.hb)
}
function Xg(a, b, c) {
  try {
    var d = bg(b);
    a.Tb += 1;
    W(a.a, a.m() + " RECV " + Q(d));
    var e;
    1 == a.Tb && !d.P(zg) && a.$a() ? (V(a.a, a.m() + " is closing soon because got bad preamble: " + Q(d)), e = j) : e = m;
    if(e) {
      return j
    }
    if(d instanceof Sf) {
      if(!/^([ -~]*)$/.test(d.ud)) {
        return a.wb = j
      }
      a.gc += 1;
      c.push([a.gc, d.ud])
    }else {
      if(d instanceof Rf) {
        var g = a.A, i = d.Ca;
        g.ne = i;
        var l = g.fa, n = i.Ta, c = m;
        n > l.Ga && (c = j);
        for(var q = Be(l).concat(), d = 0;d < q.length;d++) {
          var G = q[d];
          if(G > n) {
            break
          }
          var r = l.K.get(G)[1];
          l.K.remove(G);
          l.M -= r
        }
        for(d = 0;d < i.Pa.length;d++) {
          var x = i.Pa[d];
          x > l.Ga && (c = j);
          l.K.S(x) && (r = l.K.get(x)[1], l.K.remove(x), l.M -= r)
        }
        l.K.La() && l.K.clear();
        if(c) {
          return V(a.a, a.m() + " is closing soon because got bad SackFrame"), a.wb = j
        }
      }else {
        if(d instanceof Uf) {
          a.gc = d.Ne - 1
        }else {
          if(d instanceof Wf) {
            a.A.oe = d.me
          }else {
            if(d instanceof Yf) {
              return X(a.a, a.m() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof ag) {
              return a.wb = j, "stream_attach_failure" == d.reason ? a.ya += 1 : "acked_unsent_strings" == d.reason && (a.ya += 0.5), X(a.a, a.m() + " is closing soon because got " + Q(d)), j
            }
            if(!(d instanceof Tf)) {
              if(d instanceof Xf) {
                var z = a.A, Jc = !a.hb;
                X(z.a, "Stream is now confirmed to exist at server.");
                z.qd = j;
                z.kd && !Jc && (z.kd = m, Fg(z))
              }else {
                if(c.length) {
                  Wg(a, c);
                  if(!v(c)) {
                    for(var Zd = c.length - 1;0 <= Zd;Zd--) {
                      delete c[Zd]
                    }
                  }
                  c.length = 0
                }
                if(d instanceof Zf) {
                  var fg = a.A;
                  Sg(fg, d.Fe, d.Ed);
                  fg.b();
                  return j
                }
                f(Error(a.m() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(gg) {
    return gg instanceof $ || f(gg), V(a.a, a.m() + " is closing soon because got InvalidFrame: " + Q(b)), a.wb = j
  }
  return m
}
function Af(a, b) {
  a.qc = j;
  try {
    for(var c = m, d = [], e = 0, g = b.length;e < g;e++) {
      if(a.$) {
        a.a.info(a.m() + " returning from loop because we're disposed.");
        return
      }
      if(c = Xg(a, b[e], d)) {
        break
      }
    }
    d.length && Wg(a, d);
    a.qc = m;
    a.v.length && a.la();
    c && (X(a.a, a.m() + " closeSoon is true.  Frames were: " + Q(b)), a.b())
  }finally {
    a.qc = m
  }
}
s.ag = function() {
  V(this.a, this.m() + " timed out due to lack of connection or no data being received.");
  this.b()
};
function Yg(a) {
  a.ic != k && (a.p.B.clearTimeout(a.ic), a.ic = k)
}
function sg(a, b) {
  Yg(a);
  b = Math.round(b);
  a.ic = a.p.B.setTimeout(a.df, b);
  W(a.a, a.m() + "'s receive timeout set to " + b + " ms.")
}
function zf(a) {
  a.ha != rg && (a.ha == Ng || a.ha == Mg ? sg(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ha)))
}
function Hg(a) {
  var b = new Pf;
  b.mb = a.mb;
  b.Ce = 2;
  b.ee = 2;
  a.A.qd || (b.He = j);
  b.Hb = a.A.Hb;
  b.sd = a.hb;
  b.sd && (b.ve = 4096);
  b.te = 3E5;
  b.re = a.hb ? Math.floor(10) : 0;
  b.We = m;
  a.Ua && (b.Se = k, b.Zc = Math.floor((a.hb ? 358E4 : 25E3) / 1E3));
  b.Ca = De(a.A.Sc);
  b.cc = a.A.ne;
  a.v.push(b);
  a.bb = b.Ca
}
function Bf(a, b) {
  b && (a.ya += 0.5);
  a.b()
}
s.la = function() {
  this.na && !this.pb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.qc) {
    X(this.a, this.m() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.na;
    this.na = j;
    !a && !this.v.length && Hg(this);
    for(a = 0;a < this.v.length;a++) {
      W(this.a, this.m() + " SEND " + Q(this.v[a]))
    }
    if(this.$a()) {
      for(var a = [], b = 0, c = this.v.length;b < c;b++) {
        this.v[b].U(a), a.push("\n")
      }
      this.v = [];
      a = a.join("");
      b = this.Ua ? this.s.ea : this.s.Da;
      this.l = tg.Gc(this, this.Ua ? this.s.Be : this.s.Me);
      this.xd = this.p.B === zc ? B() : this.p.B.getTime();
      this.l.Yc(b, "POST", a);
      sg(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.hb ? 0 : this.Ua ? 25E3 : 0))
    }else {
      if(this.ha == Ng) {
        a = [];
        b = 0;
        for(c = this.v.length;b < c;b++) {
          a.push(this.v[b].O())
        }
        this.v = [];
        this.l ? this.l.Kb(a) : (b = this.s, this.l = new Ef(this), this.l.pc = b.cg.Gc(this.l), this.xd = this.p.B === zc ? B() : this.p.B.getTime(), this.l.Dc(b.host, b.port), this.l.$ || (this.l.Kb(a), this.l.$ || sg(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.ha))
      }
    }
  }
};
function Ig(a, b, c) {
  !a.na && !a.v.length && Hg(a);
  for(var d = Math.max(c, a.fb + 1), e = Be(b), c = [], g = 0;g < e.length;g++) {
    var i = e[g];
    (d == k || i >= d) && c.push([i, b.K.get(i)[0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], e = g[0], g = g[1], (-1 == a.fb || a.fb + 1 != e) && a.v.push(new Uf(e)), a.v.push(new Sf(g)), a.fb = e
  }
}
s.c = function() {
  this.a.info(this.m() + " in disposeInternal.");
  Og.e.c.call(this);
  this.Ve = this.p.B === zc ? B() : this.p.B.getTime();
  this.v = [];
  Yg(this);
  this.l && this.l.b();
  var a = this.A;
  this.A = k;
  Rg(a, this)
};
function Tg(a, b) {
  !a.na && !a.v.length && Hg(a);
  a.v.push(new Zf(b, j));
  a.Ze = j
}
function Qg(a, b, c, d) {
  this.p = a;
  this.A = b;
  this.Pd = c;
  this.Ld = d
}
C(Qg, M);
s = Qg.prototype;
s.na = m;
s.pb = m;
s.Yb = k;
s.bb = k;
s.a = Y("cw.net.DoNothingTransport");
function Zg(a) {
  a.Yb = a.p.B.setTimeout(function() {
    a.Yb = k;
    a.Ld--;
    a.Ld ? Zg(a) : a.b()
  }, a.Pd)
}
s.la = function() {
  this.na && !this.pb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.na = j;
  Zg(this)
};
s.D = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.Pd, ">")
};
s.$a = p(m);
s.m = p("Wast. T");
s.Jd = p(m);
s.c = function() {
  this.a.info(this.m() + " in disposeInternal.");
  Qg.e.c.call(this);
  this.Yb != k && this.p.B.clearTimeout(this.Yb);
  var a = this.A;
  this.A = k;
  Rg(a, this)
};
/*

 linkify - v0.3 - 6/27/2009
 http://benalman.com/code/test/js-linkify/

 Copyright (c) 2009 "Cowboy" Ben Alman
 Licensed under the MIT license
 http://benalman.com/about/license/

 Some regexps adapted from http://userscripts.org/scripts/review/7122
*/
var $g, ah, bh, ch;
$g = RegExp("(?:\\b[a-z\\d.-]+://[^<>\\s]+|\\b(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:[;/][^#?<>\\s]*)?(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w)|(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w))", 
"ig");
ah = /^[a-z\d.-]+:\/\//i;
bh = {"'":"`", ">":"<", ")":"(", "]":"[", "}":"{", "\u00bb":"\u00ab", "\u203a":"\u2039"};
ch = {Z:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, Ee:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
function dh(a) {
  var b;
  b = b || {};
  var c = [], d, e;
  for(e in ch) {
    u(b[e]) || (b[e] = ch[e])
  }
  for(;e = $g.exec(a);) {
    e = e[0];
    var g = $g.lastIndex, i = g - e.length;
    if(!/[\/:]/.test(a.charAt(i - 1))) {
      do {
        var l = e, n = e.substr(-1), q = bh[n];
        if(q && (q = e.match(RegExp("\\" + q + "(?!$)", "g")), n = e.match(RegExp("\\" + n, "g")), (q ? q.length : 0) < (n ? n.length : 0))) {
          e = e.substr(0, e.length - 1), g--
        }
        b.Ee && (e = e.replace(b.Ee, function(a) {
          g -= a.length;
          return""
        }))
      }while(e.length && e !== l);
      l = e;
      ah.test(l) || (l = (-1 !== l.indexOf("@") ? !l.indexOf("mailto:") ? "" : "mailto:" : !l.indexOf("irc.") ? "irc://" : !l.indexOf("ftp.") ? "ftp://" : "http://") + l);
      d != i && (c.push([a.slice(d, i)]), d = g);
      c.push([e, l])
    }
  }
  c.push([a.substr(d)]);
  d = "";
  for(e = 0;e < c.length;e++) {
    d += b.Z.apply(t, c[e])
  }
  return d || a
}
;function eh(a) {
  a = "" + a;
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  f(Error("Invalid JSON string: " + a))
}
;function fh() {
}
fh.prototype.Lb = k;
var gh;
function hh() {
}
C(hh, fh);
function ih(a) {
  return(a = jh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function kh(a) {
  var b = {};
  jh(a) && (b[0] = j, b[1] = j);
  return b
}
hh.prototype.Qc = k;
function jh(a) {
  if(!a.Qc && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Qc = d
      }catch(e) {
      }
    }
    f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Qc
}
gh = new hh;
function lh(a) {
  this.headers = new K;
  this.nb = a || k
}
C(lh, yc);
lh.prototype.a = Y("goog.net.XhrIo");
var mh = /^https?$/i;
s = lh.prototype;
s.oa = m;
s.i = k;
s.vc = k;
s.Wc = "";
s.le = "";
s.yb = "";
s.Ic = m;
s.$b = m;
s.Rc = m;
s.Ja = m;
s.rc = 0;
s.Qa = k;
s.Ke = "";
s.gg = m;
s.send = function(a, b, c, d) {
  this.i && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Wc = a;
  this.yb = "";
  this.le = b;
  this.Ic = m;
  this.oa = j;
  this.i = this.nb ? ih(this.nb) : ih(gh);
  this.vc = this.nb ? this.nb.Lb || (this.nb.Lb = kh(this.nb)) : gh.Lb || (gh.Lb = kh(gh));
  this.i.onreadystatechange = A(this.ye, this);
  try {
    W(this.a, nh(this, "Opening Xhr")), this.Rc = j, this.i.open(b, a, j), this.Rc = m
  }catch(e) {
    W(this.a, nh(this, "Error opening Xhr: " + e.message));
    oh(this, e);
    return
  }
  var a = c || "", g = this.headers.I();
  d && wb(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.S("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  wb(g, function(a, b) {
    this.i.setRequestHeader(b, a)
  }, this);
  this.Ke && (this.i.responseType = this.Ke);
  "withCredentials" in this.i && (this.i.withCredentials = this.gg);
  try {
    this.Qa && (zc.clearTimeout(this.Qa), this.Qa = k), 0 < this.rc && (W(this.a, nh(this, "Will abort after " + this.rc + "ms if incomplete")), this.Qa = zc.setTimeout(A(this.bg, this), this.rc)), W(this.a, nh(this, "Sending request")), this.$b = j, this.i.send(a), this.$b = m
  }catch(i) {
    W(this.a, nh(this, "Send error: " + i.message)), oh(this, i)
  }
};
s.bg = function() {
  "undefined" != typeof ba && this.i && (this.yb = "Timed out after " + this.rc + "ms, aborting", W(this.a, nh(this, this.yb)), this.dispatchEvent("timeout"), this.abort(8))
};
function oh(a, b) {
  a.oa = m;
  a.i && (a.Ja = j, a.i.abort(), a.Ja = m);
  a.yb = b;
  ph(a);
  qh(a)
}
function ph(a) {
  a.Ic || (a.Ic = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
s.abort = function() {
  this.i && this.oa && (W(this.a, nh(this, "Aborting")), this.oa = m, this.Ja = j, this.i.abort(), this.Ja = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), qh(this))
};
s.c = function() {
  this.i && (this.oa && (this.oa = m, this.Ja = j, this.i.abort(), this.Ja = m), qh(this, j));
  lh.e.c.call(this)
};
s.ye = function() {
  !this.Rc && !this.$b && !this.Ja ? this.Lf() : rh(this)
};
s.Lf = function() {
  rh(this)
};
function rh(a) {
  if(a.oa && "undefined" != typeof ba) {
    if(a.vc[1] && 4 == a.ua() && 2 == sh(a)) {
      W(a.a, nh(a, "Local request error detected and ignored"))
    }else {
      if(a.$b && 4 == a.ua()) {
        zc.setTimeout(A(a.ye, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.ua()) {
          W(a.a, nh(a, "Request complete"));
          a.oa = m;
          try {
            var b = sh(a), c, d;
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
              var e;
              if(e = 0 === b) {
                var g = ("" + a.Wc).match($a)[1] || k;
                if(!g && self.location) {
                  var i = self.location.protocol, g = i.substr(0, i.length - 1)
                }
                e = !mh.test(g ? g.toLowerCase() : "")
              }
              c = e
            }
            if(c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success")
            }else {
              var l;
              try {
                l = 2 < a.ua() ? a.i.statusText : ""
              }catch(n) {
                W(a.a, "Can not get status: " + n.message), l = ""
              }
              a.yb = l + " [" + sh(a) + "]";
              ph(a)
            }
          }finally {
            qh(a)
          }
        }
      }
    }
  }
}
function qh(a, b) {
  if(a.i) {
    var c = a.i, d = a.vc[0] ? da : k;
    a.i = k;
    a.vc = k;
    a.Qa && (zc.clearTimeout(a.Qa), a.Qa = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(e) {
      U(a.a, "Problem encountered resetting onreadystatechange: " + e.message)
    }
  }
}
s.he = function() {
  return!!this.i
};
s.ua = function() {
  return this.i ? this.i.readyState : 0
};
function sh(a) {
  try {
    return 2 < a.ua() ? a.i.status : -1
  }catch(b) {
    return V(a.a, "Can not get status: " + b.message), -1
  }
}
s.getResponseHeader = function(a) {
  return this.i && 4 == this.ua() ? this.i.getResponseHeader(a) : h
};
function nh(a, b) {
  return b + " [" + a.le + " " + a.Wc + " " + sh(a) + "]"
}
;var th = !(E || F && !H("420+"));
function uh(a, b) {
  this.sc = a;
  this.X = b
}
C(uh, M);
s = uh.prototype;
s.l = k;
s.Ba = -1;
s.Vd = m;
s.de = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function vh(a) {
  var b = pg(a.Nd), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.X, c, b), 1 != b && a.b()) : a.b()
}
s.Df = function() {
  vh(this);
  if(!this.$) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.X);
    this.b()
  }
};
s.Pf = function() {
  var a = t.parent;
  if(a) {
    this.Ba = this.l.ua();
    if(2 <= this.Ba && !this.Vd) {
      for(var b = new K, c = this.de.length;c--;) {
        var d = this.de[c];
        try {
          b.set(d, this.l.i.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.r() && (this.Vd = j, a.__XHRMaster_ongotheaders(this.X, Bb(b)), this.$)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.X, this.Ba);
    th && 3 == this.Ba && vh(this)
  }else {
    this.b()
  }
};
s.Yc = function(a, b, c) {
  this.l = new lh;
  O(this.l, "readystatechange", A(this.Pf, this));
  O(this.l, "complete", A(this.Df, this));
  this.l.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Nd = new og(this.l.i, 1048576)
};
s.c = function() {
  uh.e.c.call(this);
  delete this.Nd;
  this.l && this.l.b();
  delete this.sc.Gb[this.X];
  delete this.sc
};
function wh() {
  this.Gb = {}
}
C(wh, M);
wh.prototype.Gf = function(a, b, c, d) {
  var e = new uh(this, a);
  this.Gb[a] = e;
  e.Yc(b, c, d)
};
wh.prototype.of = function(a) {
  (a = this.Gb[a]) && a.b()
};
wh.prototype.c = function() {
  wh.e.c.call(this);
  for(var a = cb(this.Gb);a.length;) {
    a.pop().b()
  }
  delete this.Gb
};
var xh = new wh;
t.__XHRSlave_makeRequest = A(xh.Gf, xh);
t.__XHRSlave_dispose = A(xh.of, xh);
var yh = Y("cw.net.demo");
function zh() {
}
zh.prototype.Ud = function() {
  return Boolean(Number((new L(document.location)).G.get("httpStreaming", "0"))) ? 2 : 1
};
function Ah() {
  this.Ge = B()
}
var Bh = new Ah;
Ah.prototype.set = aa("Ge");
Ah.prototype.reset = function() {
  this.set(B())
};
Ah.prototype.get = o("Ge");
function Ch(a) {
  this.hd = a || "";
  this.Xf = Bh
}
Ch.prototype.Tf = j;
Ch.prototype.Vf = j;
Ch.prototype.Uf = j;
Ch.prototype.Oe = m;
function Dh(a) {
  return 10 > a ? "0" + a : "" + a
}
function Eh(a, b) {
  var c = (a.Te - b) / 1E3, d = c.toFixed(3), e = 0;
  if(1 > c) {
    e = 2
  }else {
    for(;100 > c;) {
      e++, c *= 10
    }
  }
  for(;0 < e--;) {
    d = " " + d
  }
  return d
}
function Fh(a) {
  Ch.call(this, a)
}
C(Fh, Ch);
Fh.prototype.Oe = j;
function Gh(a) {
  this.$c = a || 100;
  this.pa = []
}
s = Gh.prototype;
s.zb = 0;
s.add = function(a) {
  this.pa[this.zb] = a;
  this.zb = (this.zb + 1) % this.$c
};
s.get = function(a) {
  a = Hh(this, a);
  return this.pa[a]
};
s.set = function(a, b) {
  a = Hh(this, a);
  this.pa[a] = b
};
s.r = function() {
  return this.pa.length
};
s.La = function() {
  return 0 == this.pa.length
};
s.clear = function() {
  this.zb = this.pa.length = 0
};
s.F = function() {
  for(var a = this.r(), b = this.r(), c = [], a = this.r() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
s.ba = function() {
  for(var a = [], b = this.r(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
s.S = function(a) {
  return a < this.r()
};
s.Ob = function(a) {
  for(var b = this.r(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return j
    }
  }
  return m
};
function Hh(a, b) {
  b >= a.pa.length && f(Error("Out of bounds exception"));
  return a.pa.length < a.$c ? b : (a.zb + Number(b)) % a.$c
}
;function Ih(a, b) {
  this.va = a || "";
  this.hd = b || "";
  this.gb = [];
  this.lc = new Gh(Jh);
  this.Of = A(this.bf, this);
  this.wf = new Fh(this.hd);
  this.tf = {};
  if(j != this.ie) {
    this.ie = j;
    var c = rf(), d = this.Of;
    c.xb || (c.xb = []);
    c.xb.push(d)
  }
  this.sb = "1" == Kh(this.va, "enabled");
  t.setInterval(A(this.Sf, this), 7500)
}
var Jh = 500;
s = Ih.prototype;
s.Ye = "LOGGING";
s.qf = m;
s.w = k;
s.Bd = m;
s.ie = m;
s.Gd = k;
s.Vc = B();
s.Ka = function() {
  this.sb && Lh(this)
};
s.isEnabled = o("sb");
s.nc = function(a) {
  (this.sb = a) && Lh(this);
  Mh(this, "enabled", a ? "1" : "0")
};
function Nh(a) {
  return!!a.w && !a.w.closed
}
s.hf = function() {
  this.lc.clear();
  Nh(this) && this.Dd()
};
s.bf = function(a) {
  if(!this.tf[a.qe]) {
    var b = this.wf, c;
    switch(a.W.value) {
      case bf.value:
        c = "dbg-sh";
        break;
      case cf.value:
        c = "dbg-sev";
        break;
      case df.value:
        c = "dbg-w";
        break;
      case ef.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.hd, " ");
    if(b.Tf) {
      var e = new Date(a.Te);
      d.push("[", Dh(e.getFullYear() - 2E3) + Dh(e.getMonth() + 1) + Dh(e.getDate()) + " " + Dh(e.getHours()) + ":" + Dh(e.getMinutes()) + ":" + Dh(e.getSeconds()) + "." + Dh(Math.floor(e.getMilliseconds() / 10)), "] ")
    }
    b.Vf && d.push("[", za(Eh(a, b.Xf.get())), "s] ");
    b.Uf && d.push("[", D(a.qe), "] ");
    d.push('<span class="', c, '">', ta(za(D(a.ue))));
    b.Oe && a.Lc && d.push("<br>", ta(za(a.Kc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.sb ? (Lh(this), this.lc.add(b), Oh(this, b)) : this.lc.add(b);
    this.qf && a.W.value >= cf.value && this.nc(j)
  }
};
function Oh(a, b) {
  a.gb.push(b);
  t.clearTimeout(a.Gd);
  750 < B() - a.Vc ? a.Cd() : a.Gd = t.setTimeout(A(a.Cd, a), 250)
}
s.Cd = function() {
  this.Vc = B();
  if(Nh(this)) {
    var a = this.w.document.body, a = a && 100 >= a.scrollHeight - (a.scrollTop + a.clientHeight);
    this.w.document.write(this.gb.join(""));
    this.gb.length = 0;
    a && this.w.scrollTo(0, 1E6)
  }
};
function Ph(a) {
  for(var b = a.lc.F(), c = 0;c < b.length;c++) {
    Oh(a, b[c])
  }
}
function Lh(a) {
  if(!Nh(a) && !a.Bd) {
    var b = Kh(a.va, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), e = Number(b[2]), b = Number(b[3]);
    a.Bd = j;
    a.w = window.open("", E ? a.va.replace(/[\s\-\.\,]/g, "_") : a.va, "width=" + e + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    !a.w && !a.Wf && (alert("Logger popup was blocked"), a.Wf = j);
    a.Bd = m;
    a.w && a.Dd()
  }
}
s.Vb = p("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
s.Dd = function() {
  Nh(this) || (this.w.document.open(), Oh(this, "<style>" + this.Vb() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.Ye + "<br><small>Logger: " + this.va + "</small></div><hr>"), Ph(this))
};
function Mh(a, b, c) {
  b += a.va;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(B() + 2592E6)).toUTCString()
}
function Kh(a, b, c) {
  var a = b + a, b = "" + document.cookie, d = b.indexOf(a + "=");
  return-1 != d ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, -1 == c ? b.length : c))) : c || ""
}
s.Sf = function() {
  Nh(this) && Mh(this, "dbg", (this.w.screenX || this.w.screenLeft || 0) + "," + (this.w.screenY || this.w.screenTop || 0) + "," + (this.w.outerWidth || 800) + "," + (this.w.outerHeight || 500))
};
function Qh(a, b) {
  if(Rh) {
    var c = Sh(), d;
    for(d in c) {
      var e = d.replace("fancywindow.sel.", ""), e = Y(e), g = e.W, i = window.localStorage.getItem(d).toString();
      (!g || g.toString() != i) && e.kb(mf(i))
    }
  }
  Ih.call(this, a, b)
}
C(Qh, Ih);
var Rh;
a: {
  try {
    Rh = !!window.localStorage.getItem;
    break a
  }catch(Th) {
  }
  Rh = m
}
s = Qh.prototype;
s.Cd = function() {
  this.Vc = B();
  if(Nh(this)) {
    for(var a = this.J.g("log"), b = 100 >= a.scrollHeight - (a.scrollTop + a.offsetHeight), c = 0;c < this.gb.length;c++) {
      var d = this.J.n("div", "logmsg");
      d.innerHTML = this.gb[c];
      a.appendChild(d)
    }
    this.gb.length = 0;
    this.Je();
    b && (a.scrollTop = a.scrollHeight)
  }
};
s.Dd = function() {
  if(Nh(this)) {
    var a = this.w.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.va + "</title><style>" + this.Vb() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.va + "</b></p><p>" + this.Ye + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (E ? a.body : this.w).onresize = A(this.Je, this);
    this.J = new jd(a);
    this.J.g("openbutton").onclick = A(this.Mf, this);
    this.J.g("closebutton").onclick = A(this.jf, this);
    this.J.g("clearbutton").onclick = A(this.hf, this);
    this.J.g("exitbutton").onclick = A(this.rf, this);
    Ph(this)
  }
};
s.Mf = function() {
  var a = this.J.g("optionsarea");
  a.innerHTML = "";
  for(var b = Uh(), c = this.J, d = 0;d < b.length;d++) {
    var e = Y(b[d]), e = c.n("div", {}, Vh(this, "sel" + b[d], e.W ? e.W.name : "INHERIT"), c.n("span", {}, b[d] || "(root)"));
    a.appendChild(e)
  }
  this.J.g("options").style.display = "block";
  return m
};
function Vh(a, b, c) {
  for(var a = a.J, b = a.n("select", {id:b}), d = 0;d < kf.length;d++) {
    var e = kf[d], g = a.n("option", {}, e.name);
    c == e.name && (g.selected = j);
    b.appendChild(g)
  }
  b.appendChild(a.n("option", {selected:"INHERIT" == c}, "INHERIT"));
  return b
}
s.jf = function() {
  this.J.g("options").style.display = "none";
  for(var a = Uh(), b = this.J, c = 0;c < a.length;c++) {
    var d = Y(a[c]), e = b.g("sel" + a[c]), e = e.options[e.selectedIndex].text;
    "INHERIT" == e ? d.kb(k) : d.kb(mf(e))
  }
  if(Rh) {
    a = Uh();
    b = Sh();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], e = Y(a[c]).W, d in b ? e ? window.localStorage.getItem(d) != e.name && window.localStorage.setItem(d, e.name) : window.localStorage.removeItem(d) : e && window.localStorage.setItem(d, e.name)
    }
  }
  return m
};
s.Je = function() {
  var a = this.J, b = a.g("log"), c = a.g("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.ia.body.offsetHeight - c.offsetHeight - (E ? 4 : 0) + "px"
};
s.rf = function() {
  this.nc(m);
  this.w && this.w.close()
};
s.Vb = function() {
  return Qh.e.Vb.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function Sh() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != k && 0 == d.lastIndexOf("fancywindow.sel.", 0) && (a[d] = j)
  }
  return a
}
function Uh() {
  var a = db(of);
  a.sort();
  return a
}
;var Wh, Xh = Y("ljstream.logger");
window.onerror = function(a, b, c) {
  U(Xh, "window.onerror: message: " + Q(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Yh() {
}
Yh.prototype.Qe = function(a) {
  this.A = a;
  Lg(this.A, "subprotocol:ljstream");
  Zh(this)
};
Yh.prototype.Pe = function(a, b) {
  Xh.info("streamReset: reasonString=" + Q(a) + ", applicationLevel=" + b);
  $h("Disconnected from server.  Try reloading this page.");
  ai = k
};
function Zh(a) {
  Xh.info("Sending preferences to server");
  Lg(a.A, Tc(["SetPreferences", {include_russian_posts:R("include_russian_posts").checked}]))
}
Yh.prototype.Re = function(a) {
  var a = eh(a), b = a[1];
  if("NewPost" == a[0]) {
    var a = b.title, c = b.url, b = b.body;
    (a = qa(a)) || (a = "[No title]");
    var d = dh(D(b)), e = document, b = e.createElement("div");
    E ? (b.innerHTML = "<br>" + d, b.removeChild(b.firstChild)) : b.innerHTML = d;
    if(1 == b.childNodes.length) {
      b = b.removeChild(b.firstChild)
    }else {
      for(d = e.createDocumentFragment();b.firstChild;) {
        d.appendChild(b.firstChild)
      }
      b = d
    }
    a = nd("span", {}, nd("a", {href:c, "class":"ljpost-title-link"}, a), nd("span", {}, "\u00a0"), b);
    bi(a)
  }
};
Yh.prototype.reset = function(a) {
  Xh.info("resetting with reason: " + a);
  this.A.reset(a)
};
var ai = k, ci = new Pc(t.window);
function $h(a) {
  a = nd("span", {"class":"important-message"}, a);
  bi(a)
}
function di() {
  ai && (ai.reset("idle timeout fired"), ai = k, $h("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var ei = k;
function fi() {
  ei != k && ci.B.clearTimeout(ei);
  ai && (ei = ci.B.setTimeout(di, 6E5))
}
O(window, ["click", "focus", "keydown", "keypress"], fi, j);
var zd = new jd, gi = 0;
function bi(a) {
  a = nd("div", {"class":"row-" + (0 == gi % 2 ? "even" : "odd")}, nd("nobr", {}, a));
  R("ljstream-container-inner").appendChild(a);
  gi += 1;
  var b;
  if(b = Wh) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !F && "CSS1Compat" == d.compatMode ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new $c(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = yd().height;
    b = !(a + b <= c + d)
  }
  b && (a = yd().height, window.scrollBy(0, Math.round(a / 2) + 80))
}
function hi() {
  O(t, "load", function() {
    window.scrollTo(0, 0)
  });
  O(R("include_russian_posts"), "click", function() {
    Zh(ai)
  });
  Wh = j;
  O(R("automatic_scroll"), "click", function(a) {
    Wh = a.target.checked
  });
  var a = new pe("Clear posts");
  ee(a, "clear-posts-button");
  Md(a, R("prefs"));
  O(a, "action", function() {
    R("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = R("ljstream-container");
  a.style.marginTop = R("demo-header").offsetHeight + "px";
  R("demo-header").style.width = "9000px";
  var b = nd("div", {id:"ljstream-container-inner"});
  a.appendChild(b)
}
function ii() {
  rf().kb(jf);
  if("1" == (new L(document.location)).G.get("logging")) {
    var a = new Qh("main");
    a.nc(j);
    a.Ka()
  }
  Xh.info("Logger works.");
  hi();
  a = new zh;
  ai = new Yh;
  fi();
  var b = (new L(document.location)).G, c = "http" != b.get("mode");
  if((b = Boolean(Number(b.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    V(yh, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), b = m
  }
  var d = b, b = new L(document.location);
  c ? c = new vg("/_minerva/", b.T, t.__demo_mainSocketPort) : (d ? (c = t.__demo_shared_domain, w(c) || f(Error("domain was " + Q(c) + "; expected a string.")), b = b.I(), Eb(b, "_____random_____." + c)) : b = b.I(), Gb(b, "/_minerva/"), Hb(b, "", h), c = new xg(b.toString().replace("_____random_____", "%random%")));
  a = new Dg(c, a, ci);
  c = ai;
  u(c.Qe) || f(Error("Protocol is missing required method streamStarted"));
  u(c.Pe) || f(Error("Protocol is missing required method streamReset"));
  u(c.Re) || f(Error("Protocol is missing required method stringReceived"));
  a.ed = A(c.Qe, c);
  a.onreset = A(c.Pe, c);
  a.fd = A(c.Re, c);
  a.start()
}
var ji = ["__ljstream_init"], ki = t;
!(ji[0] in ki) && ki.execScript && ki.execScript("var " + ji[0]);
for(var li;ji.length && (li = ji.shift());) {
  !ji.length && u(ii) ? ki[li] = ii : ki = ki[li] ? ki[li] : ki[li] = {}
}
;})();
