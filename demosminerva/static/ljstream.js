(function() {
function e(a) {
  throw a;
}
var h = void 0, j = !0, k = null, m = !1;
function aa() {
  return function() {
  }
}
function ba(a) {
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
var ca = ca || {}, t = this;
function da(a) {
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
function ea(a) {
  a.Za = function() {
    return a.ke ? a.ke : a.ke = new a
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
function v(a) {
  return a !== h
}
function ga(a) {
  return"array" == fa(a)
}
function ha(a) {
  var b = fa(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function ia(a) {
  return ja(a) && "function" == typeof a.getFullYear
}
function y(a) {
  return"string" == typeof a
}
function z(a) {
  return"function" == fa(a)
}
function ja(a) {
  var b = typeof a;
  return"object" == b && a != k || "function" == b
}
function ka(a) {
  return a[la] || (a[la] = ++ma)
}
var la = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ma = 0;
function na(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function oa(a, b, c) {
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
  B = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
  return B.apply(k, arguments)
}
function pa(a, b) {
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
  a.g = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function qa(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
function ra(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function sa(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function E(a) {
  if(!ta.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(ua, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(va, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(wa, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(xa, "&quot;"));
  return a
}
var ua = /&/g, va = /</g, wa = />/g, xa = /\"/g, ta = /[&<>\"]/;
function ya(a) {
  return sa(a.replace(/  /g, " &#160;"), h)
}
function za(a, b) {
  for(var c = 0, d = ra(String(a)).split("."), g = ra(String(b)).split("."), f = Math.max(d.length, g.length), i = 0;0 == c && i < f;i++) {
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
;var Aa, Ba, Ca, Da;
function Ea() {
  return t.navigator ? t.navigator.userAgent : k
}
Da = Ca = Ba = Aa = m;
var Fa;
if(Fa = Ea()) {
  var Ga = t.navigator;
  Aa = 0 == Fa.indexOf("Opera");
  Ba = !Aa && -1 != Fa.indexOf("MSIE");
  Ca = !Aa && -1 != Fa.indexOf("WebKit");
  Da = !Aa && !Ca && "Gecko" == Ga.product
}
var Ha = Aa, F = Ba, G = Da, H = Ca, Ia = t.navigator, Ja = -1 != (Ia && Ia.platform || "").indexOf("Mac"), Ka;
a: {
  var La = "", Ma;
  if(Ha && t.opera) {
    var Na = t.opera.version, La = "function" == typeof Na ? Na() : Na
  }else {
    if(G ? Ma = /rv\:([^\);]+)(\)|;)/ : F ? Ma = /MSIE\s+([^\);]+)(\)|;)/ : H && (Ma = /WebKit\/(\S+)/), Ma) {
      var Oa = Ma.exec(Ea()), La = Oa ? Oa[1] : ""
    }
  }
  if(F) {
    var Pa, Qa = t.document;
    Pa = Qa ? Qa.documentMode : h;
    if(Pa > parseFloat(La)) {
      Ka = String(Pa);
      break a
    }
  }
  Ka = La
}
var Ra = {};
function I(a) {
  return Ra[a] || (Ra[a] = 0 <= za(Ka, a))
}
var Sa = {};
function Ta() {
  return Sa[9] || (Sa[9] = F && !!document.documentMode && 9 <= document.documentMode)
}
;function J(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, J) : this.stack = Error().stack || "";
  a && (this.message = String(a))
}
D(J, Error);
J.prototype.name = "CustomError";
function Ua(a, b) {
  b.unshift(a);
  J.call(this, qa.apply(k, b));
  b.shift();
  this.yh = a
}
D(Ua, J);
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
;var K = Array.prototype, cb = K.indexOf ? function(a, b, c) {
  return K.indexOf.call(a, b, c)
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
}, db = K.forEach ? function(a, b, c) {
  K.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = y(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in g && b.call(c, g[f], f, a)
  }
}, eb = K.filter ? function(a, b, c) {
  return K.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = [], f = 0, i = y(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in i) {
      var n = i[l];
      b.call(c, n, l, a) && (g[f++] = n)
    }
  }
  return g
}, fb = K.map ? function(a, b, c) {
  return K.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = Array(d), f = y(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in f && (g[i] = b.call(c, f[i], i, a))
  }
  return g
}, gb = K.some ? function(a, b, c) {
  return K.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = y(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in g && b.call(c, g[f], f, a)) {
      return j
    }
  }
  return m
}, hb = K.every ? function(a, b, c) {
  return K.every.call(a, b, c)
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
  0 <= c && K.splice.call(a, c, 1)
}
function kb(a) {
  return K.concat.apply(K, arguments)
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
  return 2 >= arguments.length ? K.slice.call(a, b) : K.slice.call(a, b, c)
}
function nb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function ob(a) {
  if("function" == typeof a.r) {
    a = a.r()
  }else {
    if(ha(a) || y(a)) {
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
  if(ha(a)) {
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
    if(ha(a) || y(a)) {
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
    if(ha(a) || y(a)) {
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
  if(ha(a) || y(a)) {
    return hb(a, b, h)
  }
  for(var c = qb(a), d = pb(a), g = d.length, f = 0;f < g;f++) {
    if(!b.call(h, d[f], c && c[f], a)) {
      return m
    }
  }
  return j
}
;function tb(a, b) {
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
s = tb.prototype;
s.e = 0;
s.Bd = 0;
s.r = o("e");
s.D = function() {
  ub(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.o[this.j[b]])
  }
  return a
};
s.Z = function() {
  ub(this);
  return this.j.concat()
};
s.da = function(a) {
  return vb(this.o, a)
};
s.Nb = function(a) {
  for(var b = 0;b < this.j.length;b++) {
    var c = this.j[b];
    if(vb(this.o, c) && this.o[c] == a) {
      return j
    }
  }
  return m
};
s.Q = function(a, b) {
  if(this === a) {
    return j
  }
  if(this.e != a.r()) {
    return m
  }
  var c = b || wb;
  ub(this);
  for(var d, g = 0;d = this.j[g];g++) {
    if(!c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function wb(a, b) {
  return a === b
}
s.Na = function() {
  return 0 == this.e
};
s.clear = function() {
  this.o = {};
  this.Bd = this.e = this.j.length = 0
};
s.remove = function(a) {
  return vb(this.o, a) ? (delete this.o[a], this.e--, this.Bd++, this.j.length > 2 * this.e && ub(this), j) : m
};
function ub(a) {
  if(a.e != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      vb(a.o, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.e != a.j.length) {
    for(var g = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], vb(g, d) || (a.j[c++] = d, g[d] = 1), b++
    }
    a.j.length = c
  }
}
s.get = function(a, b) {
  return vb(this.o, a) ? this.o[a] : b
};
s.set = function(a, b) {
  vb(this.o, a) || (this.e++, this.j.push(a), this.Bd++);
  this.o[a] = b
};
s.xc = function(a) {
  var b;
  a instanceof tb ? (b = a.Z(), a = a.D()) : (b = $a(a), a = Za(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
s.O = function() {
  return new tb(this)
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
;function yb(a, b) {
  var c;
  if(a instanceof yb) {
    this.R = v(b) ? b : a.R, zb(this, a.Da), c = a.Ua, Ab(this), this.Ua = c, Bb(this, a.oa), Cb(this, a.ib), Db(this, a.xa), Eb(this, a.K.O()), c = a.Ja, Ab(this), this.Ja = c
  }else {
    if(a && (c = String(a).match(Wa))) {
      this.R = !!b;
      zb(this, c[1] || "", j);
      var d = c[2] || "";
      Ab(this);
      this.Ua = d ? decodeURIComponent(d) : "";
      Bb(this, c[3] || "", j);
      Cb(this, c[4]);
      Db(this, c[5] || "", j);
      Eb(this, c[6] || "", j);
      c = c[7] || "";
      Ab(this);
      this.Ja = c ? decodeURIComponent(c) : ""
    }else {
      this.R = !!b, this.K = new Fb(k, 0, this.R)
    }
  }
}
s = yb.prototype;
s.Da = "";
s.Ua = "";
s.oa = "";
s.ib = k;
s.xa = "";
s.Ja = "";
s.Lf = m;
s.R = m;
s.toString = function() {
  var a = [], b = this.Da;
  b && a.push(Gb(b, Hb), ":");
  if(b = this.oa) {
    a.push("//");
    var c = this.Ua;
    c && a.push(Gb(c, Hb), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.ib;
    b != k && a.push(":", String(b))
  }
  if(b = this.xa) {
    this.oa && "/" != b.charAt(0) && a.push("/"), a.push(Gb(b, "/" == b.charAt(0) ? Ib : Jb))
  }
  (b = this.K.toString()) && a.push("?", b);
  (b = this.Ja) && a.push("#", Gb(b, Kb));
  return a.join("")
};
s.O = function() {
  return new yb(this)
};
function zb(a, b, c) {
  Ab(a);
  a.Da = c ? b ? decodeURIComponent(b) : "" : b;
  a.Da && (a.Da = a.Da.replace(/:$/, ""))
}
function Bb(a, b, c) {
  Ab(a);
  a.oa = c ? b ? decodeURIComponent(b) : "" : b
}
function Cb(a, b) {
  Ab(a);
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.ib = b) : a.ib = k
}
function Db(a, b, c) {
  Ab(a);
  a.xa = c ? b ? decodeURIComponent(b) : "" : b
}
function Eb(a, b, c) {
  Ab(a);
  b instanceof Fb ? (a.K = b, a.K.nd(a.R)) : (c || (b = Gb(b, Lb)), a.K = new Fb(b, 0, a.R))
}
function Ab(a) {
  a.Lf && e(Error("Tried to modify a read-only Uri"))
}
s.nd = function(a) {
  this.R = a;
  this.K && this.K.nd(a);
  return this
};
function Mb(a) {
  return a instanceof yb ? a.O() : new yb(a, h)
}
function Gb(a, b) {
  return y(a) ? encodeURI(a).replace(b, Nb) : k
}
function Nb(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Hb = /[#\/\?@]/g, Jb = /[\#\?:]/g, Ib = /[\#\?]/g, Lb = /[\#\?@]/g, Kb = /#/g;
function Fb(a, b, c) {
  this.I = a || k;
  this.R = !!c
}
function Ob(a) {
  if(!a.m && (a.m = new tb, a.e = 0, a.I)) {
    for(var b = a.I.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), g = k, f = k;
      0 <= d ? (g = b[c].substring(0, d), f = b[c].substring(d + 1)) : g = b[c];
      g = decodeURIComponent(g.replace(/\+/g, " "));
      g = Pb(a, g);
      a.add(g, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
    }
  }
}
s = Fb.prototype;
s.m = k;
s.e = k;
s.r = function() {
  Ob(this);
  return this.e
};
s.add = function(a, b) {
  Ob(this);
  this.I = k;
  var a = Pb(this, a), c = this.m.get(a);
  c || this.m.set(a, c = []);
  c.push(b);
  this.e++;
  return this
};
s.remove = function(a) {
  Ob(this);
  a = Pb(this, a);
  return this.m.da(a) ? (this.I = k, this.e -= this.m.get(a).length, this.m.remove(a)) : m
};
s.clear = function() {
  this.m = this.I = k;
  this.e = 0
};
s.Na = function() {
  Ob(this);
  return 0 == this.e
};
s.da = function(a) {
  Ob(this);
  a = Pb(this, a);
  return this.m.da(a)
};
s.Nb = function(a) {
  var b = this.D();
  return ib(b, a)
};
s.Z = function() {
  Ob(this);
  for(var a = this.m.D(), b = this.m.Z(), c = [], d = 0;d < b.length;d++) {
    for(var g = a[d], f = 0;f < g.length;f++) {
      c.push(b[d])
    }
  }
  return c
};
s.D = function(a) {
  Ob(this);
  var b = [];
  if(a) {
    this.da(a) && (b = kb(b, this.m.get(Pb(this, a))))
  }else {
    for(var a = this.m.D(), c = 0;c < a.length;c++) {
      b = kb(b, a[c])
    }
  }
  return b
};
s.set = function(a, b) {
  Ob(this);
  this.I = k;
  a = Pb(this, a);
  this.da(a) && (this.e -= this.m.get(a).length);
  this.m.set(a, [b]);
  this.e++;
  return this
};
s.get = function(a, b) {
  var c = a ? this.D(a) : [];
  return 0 < c.length ? String(c[0]) : b
};
s.toString = function() {
  if(this.I) {
    return this.I
  }
  if(!this.m) {
    return""
  }
  for(var a = [], b = this.m.Z(), c = 0;c < b.length;c++) {
    for(var d = b[c], g = encodeURIComponent(String(d)), d = this.D(d), f = 0;f < d.length;f++) {
      var i = g;
      "" !== d[f] && (i += "=" + encodeURIComponent(String(d[f])));
      a.push(i)
    }
  }
  return this.I = a.join("&")
};
s.O = function() {
  var a = new Fb;
  a.I = this.I;
  this.m && (a.m = this.m.O());
  return a
};
function Pb(a, b) {
  var c = String(b);
  a.R && (c = c.toLowerCase());
  return c
}
s.nd = function(a) {
  a && !this.R && (Ob(this), this.I = k, rb(this.m, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.I = k, this.m.set(Pb(this, d), lb(a)), this.e += a.length))
  }, this));
  this.R = a
};
var Qb;
Qb = r(j);
function Rb() {
}
var Sb = 0;
s = Rb.prototype;
s.key = 0;
s.Ra = m;
s.Cc = m;
s.Ma = function(a, b, c, d, g, f) {
  z(a) ? this.oe = j : a && a.handleEvent && z(a.handleEvent) ? this.oe = m : e(Error("Invalid listener argument"));
  this.fb = a;
  this.Ie = b;
  this.src = c;
  this.type = d;
  this.capture = !!g;
  this.$b = f;
  this.Cc = m;
  this.key = ++Sb;
  this.Ra = m
};
s.handleEvent = function(a) {
  return this.oe ? this.fb.call(this.$b || this.src, a) : this.fb.handleEvent.call(this.fb, a)
};
var Tb = !F || Ta(), Ub = !F || Ta(), Vb = F && !I("8");
!H || I("528");
G && I("1.9b") || F && I("8") || Ha && I("9.5") || H && I("528");
G && !I("8") || F && I("9");
var Wb = {zg:"click", Eg:"dblclick", Yg:"mousedown", bh:"mouseup", ah:"mouseover", $g:"mouseout", Zg:"mousemove", oh:"selectstart", Tg:"keypress", Sg:"keydown", Ug:"keyup", xg:"blur", Mg:"focus", Fg:"deactivate", Ng:F ? "focusin" : "DOMFocusIn", Og:F ? "focusout" : "DOMFocusOut", yg:"change", nh:"select", ph:"submit", Rg:"input", jh:"propertychange", Jg:"dragstart", Gg:"dragenter", Ig:"dragover", Hg:"dragleave", Kg:"drop", th:"touchstart", sh:"touchmove", rh:"touchend", qh:"touchcancel", Bg:"contextmenu", 
Lg:"error", Qg:"help", Vg:"load", Wg:"losecapture", kh:"readystatechange", lh:"resize", mh:"scroll", vh:"unload", Pg:"hashchange", fh:"pagehide", gh:"pageshow", ih:"popstate", Cg:"copy", hh:"paste", Dg:"cut", ug:"beforecopy", vg:"beforecut", wg:"beforepaste", eh:"online", dh:"offline", Xg:"message", Ag:"connect", uh:H ? "webkitTransitionEnd" : Ha ? "oTransitionEnd" : "transitionend"};
function L() {
}
L.prototype.ea = m;
L.prototype.b = function() {
  this.ea || (this.ea = j, this.c())
};
L.prototype.c = function() {
  this.sf && Xb.apply(k, this.sf);
  if(this.Ce) {
    for(;this.Ce.length;) {
      this.Ce.shift()()
    }
  }
};
function Xb(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? Xb.apply(k, d) : d && "function" == typeof d.b && d.b()
  }
}
;function Yb(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
s = Yb.prototype;
s.c = aa();
s.b = aa();
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
function Zb(a) {
  a.stopPropagation()
}
;function $b(a) {
  $b[" "](a);
  return a
}
$b[" "] = u;
function ac(a, b) {
  a && this.Ma(a, b)
}
D(ac, Yb);
var bc = [1, 4, 2];
s = ac.prototype;
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
s.hd = m;
s.qa = k;
s.Ma = function(a, b) {
  var c = this.type = a.type;
  Yb.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(G) {
      var g;
      a: {
        try {
          $b(d.nodeName);
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
  this.offsetX = H || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = H || a.offsetY !== h ? a.offsetY : a.layerY;
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
  this.hd = Ja ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.qa = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Qa
};
function cc(a) {
  return Tb ? 0 == a.qa.button : "click" == a.type ? j : !!(a.qa.button & bc[0])
}
s.stopPropagation = function() {
  ac.g.stopPropagation.call(this);
  this.qa.stopPropagation ? this.qa.stopPropagation() : this.qa.cancelBubble = j
};
s.preventDefault = function() {
  ac.g.preventDefault.call(this);
  var a = this.qa;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, Vb) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
s.c = aa();
var dc = {}, M = {}, ec = {}, fc = {};
function N(a, b, c, d, g) {
  if(b) {
    if(ga(b)) {
      for(var f = 0;f < b.length;f++) {
        N(a, b[f], c, d, g)
      }
      return k
    }
    var d = !!d, i = M;
    b in i || (i[b] = {e:0, S:0});
    i = i[b];
    d in i || (i[d] = {e:0, S:0}, i.e++);
    var i = i[d], l = ka(a), n;
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
      n = i[l] = [], i.e++
    }
    var p = gc, w = Ub ? function(a) {
      return p.call(w.src, w.key, a)
    } : function(a) {
      a = p.call(w.src, w.key, a);
      if(!a) {
        return a
      }
    }, f = w;
    f.src = a;
    i = new Rb;
    i.Ma(c, f, a, b, d, g);
    c = i.key;
    f.key = c;
    n.push(i);
    dc[c] = i;
    ec[l] || (ec[l] = []);
    ec[l].push(i);
    a.addEventListener ? (a == t || !a.Od) && a.addEventListener(b, f, d) : a.attachEvent(b in fc ? fc[b] : fc[b] = "on" + b, f);
    return c
  }
  e(Error("Invalid event type"))
}
function hc(a, b, c, d, g) {
  if(ga(b)) {
    for(var f = 0;f < b.length;f++) {
      hc(a, b[f], c, d, g)
    }
    return k
  }
  a = N(a, b, c, d, g);
  dc[a].Cc = j;
  return a
}
function ic(a, b, c, d, g) {
  if(ga(b)) {
    for(var f = 0;f < b.length;f++) {
      ic(a, b[f], c, d, g)
    }
  }else {
    if(d = !!d, a = jc(a, b, d)) {
      for(f = 0;f < a.length;f++) {
        if(a[f].fb == c && a[f].capture == d && a[f].$b == g) {
          kc(a[f].key);
          break
        }
      }
    }
  }
}
function kc(a) {
  if(!dc[a]) {
    return m
  }
  var b = dc[a];
  if(b.Ra) {
    return m
  }
  var c = b.src, d = b.type, g = b.Ie, f = b.capture;
  c.removeEventListener ? (c == t || !c.Od) && c.removeEventListener(d, g, f) : c.detachEvent && c.detachEvent(d in fc ? fc[d] : fc[d] = "on" + d, g);
  c = ka(c);
  ec[c] && (g = ec[c], jb(g, b), 0 == g.length && delete ec[c]);
  b.Ra = j;
  if(b = M[d][f][c]) {
    b.Ae = j, lc(d, f, c, b)
  }
  delete dc[a];
  return j
}
function lc(a, b, c, d) {
  if(!d.ec && d.Ae) {
    for(var g = 0, f = 0;g < d.length;g++) {
      d[g].Ra ? d[g].Ie.src = k : (g != f && (d[f] = d[g]), f++)
    }
    d.length = f;
    d.Ae = m;
    0 == f && (delete M[a][b][c], M[a][b].e--, 0 == M[a][b].e && (delete M[a][b], M[a].e--), 0 == M[a].e && delete M[a])
  }
}
function jc(a, b, c) {
  var d = M;
  return b in d && (d = d[b], c in d && (d = d[c], a = ka(a), d[a])) ? d[a] : k
}
function mc(a, b, c, d, g) {
  var f = 1, b = ka(b);
  if(a[b]) {
    a.S--;
    a = a[b];
    a.ec ? a.ec++ : a.ec = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var n = a[l];
        n && !n.Ra && (f &= nc(n, g) !== m)
      }
    }finally {
      a.ec--, lc(c, d, b, a)
    }
  }
  return Boolean(f)
}
function nc(a, b) {
  a.Cc && kc(a.key);
  return a.handleEvent(b)
}
function gc(a, b) {
  if(!dc[a]) {
    return j
  }
  var c = dc[a], d = c.type, g = M;
  if(!(d in g)) {
    return j
  }
  var g = g[d], f, i;
  if(!Ub) {
    f = b || da("window.event");
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
    p = new ac;
    p.Ma(f, this);
    f = j;
    try {
      if(l) {
        for(var q = [], x = p.currentTarget;x;x = x.parentNode) {
          q.push(x)
        }
        i = g[j];
        i.S = i.e;
        for(var A = q.length - 1;!p.Qa && 0 <= A && i.S;A--) {
          p.currentTarget = q[A], f &= mc(i, q[A], d, j, p)
        }
        if(n) {
          i = g[m];
          i.S = i.e;
          for(A = 0;!p.Qa && A < q.length && i.S;A++) {
            p.currentTarget = q[A], f &= mc(i, q[A], d, m, p)
          }
        }
      }else {
        f = nc(c, p)
      }
    }finally {
      q && (q.length = 0)
    }
    return f
  }
  d = new ac(b, this);
  return f = nc(c, d)
}
var oc = 0;
function pc() {
}
D(pc, L);
s = pc.prototype;
s.Od = j;
s.gc = k;
s.od = ba("gc");
s.addEventListener = function(a, b, c, d) {
  N(this, a, b, c, d)
};
s.removeEventListener = function(a, b, c, d) {
  ic(this, a, b, c, d)
};
s.dispatchEvent = function(a) {
  var b = a.type || a, c = M;
  if(b in c) {
    if(y(a)) {
      a = new Yb(a, this)
    }else {
      if(a instanceof Yb) {
        a.target = a.target || this
      }else {
        var d = a, a = new Yb(b, this);
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
      f.S = f.e;
      for(var i = g.length - 1;!a.Qa && 0 <= i && f.S;i--) {
        a.currentTarget = g[i], d &= mc(f, g[i], a.type, j, a) && a.lc != m
      }
    }
    if(m in c) {
      if(f = c[m], f.S = f.e, b) {
        for(i = 0;!a.Qa && i < g.length && f.S;i++) {
          a.currentTarget = g[i], d &= mc(f, g[i], a.type, m, a) && a.lc != m
        }
      }else {
        for(g = this;!a.Qa && g && f.S;g = g.gc) {
          a.currentTarget = g, d &= mc(f, g, a.type, m, a) && a.lc != m
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
  pc.g.c.call(this);
  var a, b = 0, c = a == k;
  a = !!a;
  if(this == k) {
    Ya(ec, function(d) {
      for(var f = d.length - 1;0 <= f;f--) {
        var g = d[f];
        if(c || a == g.capture) {
          kc(g.key), b++
        }
      }
    })
  }else {
    var d = ka(this);
    if(ec[d]) {
      for(var d = ec[d], g = d.length - 1;0 <= g;g--) {
        var f = d[g];
        if(c || a == f.capture) {
          kc(f.key), b++
        }
      }
    }
  }
  this.gc = k
};
var qc = t.window;
oc++;
oc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function rc(a, b) {
  this.Lb = [];
  this.Jd = a;
  this.Qd = b || k
}
s = rc.prototype;
s.ra = m;
s.tb = m;
s.zb = 0;
s.rd = m;
s.mf = m;
s.Bc = 0;
s.cancel = function(a) {
  if(this.ra) {
    this.Cb instanceof rc && this.Cb.cancel()
  }else {
    if(this.z) {
      var b = this.z;
      delete this.z;
      a ? b.cancel(a) : (b.Bc--, 0 >= b.Bc && b.cancel())
    }
    this.Jd ? this.Jd.call(this.Qd, this) : this.rd = j;
    this.ra || this.Xa(new sc(this))
  }
};
s.Md = function(a, b) {
  tc(this, a, b);
  this.zb--;
  0 == this.zb && this.ra && uc(this)
};
function tc(a, b, c) {
  a.ra = j;
  a.Cb = c;
  a.tb = !b;
  uc(a)
}
function vc(a) {
  a.ra && (a.rd || e(new wc(a)), a.rd = m)
}
s.X = function(a) {
  vc(this);
  tc(this, j, a)
};
s.Xa = function(a) {
  vc(this);
  tc(this, m, a)
};
function xc(a, b, c, d) {
  a.Lb.push([b, c, d]);
  a.ra && uc(a)
}
function yc(a) {
  return gb(a.Lb, function(a) {
    return z(a[1])
  })
}
function uc(a) {
  a.Ad && (a.ra && yc(a)) && (t.clearTimeout(a.Ad), delete a.Ad);
  a.z && (a.z.Bc--, delete a.z);
  for(var b = a.Cb, c = m, d = m;a.Lb.length && 0 == a.zb;) {
    var g = a.Lb.shift(), f = g[0], i = g[1], g = g[2];
    if(f = a.tb ? i : f) {
      try {
        var l = f.call(g || a.Qd, b);
        v(l) && (a.tb = a.tb && (l == b || l instanceof Error), a.Cb = b = l);
        b instanceof rc && (d = j, a.zb++)
      }catch(n) {
        b = n, a.tb = j, yc(a) || (c = j)
      }
    }
  }
  a.Cb = b;
  d && a.zb && (xc(b, B(a.Md, a, j), B(a.Md, a, m)), b.mf = j);
  c && (a.Ad = t.setTimeout(function() {
    e(b)
  }, 0))
}
function zc(a) {
  var b = new rc;
  b.X(a);
  return b
}
function Ac(a) {
  var b = new rc;
  b.Xa(a);
  return b
}
function wc(a) {
  J.call(this);
  this.rf = a
}
D(wc, J);
wc.prototype.message = "Deferred has already fired";
wc.prototype.name = "AlreadyCalledError";
function sc(a) {
  J.call(this);
  this.rf = a
}
D(sc, J);
sc.prototype.message = "Deferred was cancelled";
sc.prototype.name = "CancelledError";
function Bc(a) {
  this.B = a;
  this.Qb = [];
  this.Td = [];
  this.lf = B(this.og, this)
}
Bc.prototype.xd = k;
Bc.prototype.og = function() {
  this.xd = k;
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
    a = this.Td;
    this.Td = [];
    for(b = 0;b < a.length;b++) {
      a[b].X(k)
    }
  }
};
var Cc = new Bc(t.window);
function Dc(a) {
  return z(a) || "object" == typeof a && z(a.call) && z(a.apply)
}
;function Ec(a) {
  var b = [];
  Fc(new Hc, a, b);
  return b.join("")
}
function Hc() {
  this.kc = h
}
function Fc(a, b, c) {
  switch(typeof b) {
    case "string":
      Ic(b, c);
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
      if(ga(b)) {
        var d = b.length;
        c.push("[");
        for(var g = "", f = 0;f < d;f++) {
          c.push(g), g = b[f], Fc(a, a.kc ? a.kc.call(b, String(f), g) : g, c), g = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (g = b[f], "function" != typeof g && (c.push(d), Ic(f, c), c.push(":"), Fc(a, a.kc ? a.kc.call(b, f, g) : g, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var Jc = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Kc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Ic(a, b) {
  b.push('"', a.replace(Kc, function(a) {
    if(a in Jc) {
      return Jc[a]
    }
    var b = a.charCodeAt(0), g = "\\u";
    16 > b ? g += "000" : 256 > b ? g += "00" : 4096 > b && (g += "0");
    return Jc[a] = g + b.toString(16)
  }), '"')
}
;function Lc(a, b, c) {
  var d = cb(c, a);
  if(-1 != d) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = fa(a);
    if("boolean" == d || "number" == d || "null" == d || "undefined" == d) {
      b.push(String(a))
    }else {
      if("string" == d) {
        Ic(a, b)
      }else {
        if(Dc(a.F)) {
          a.F(b, c)
        }else {
          if(Dc(a.ff)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if("array" == d) {
                d = a.length;
                b.push("[");
                for(var g = "", f = 0;f < d;f++) {
                  b.push(g), Lc(a[f], b, c), g = ", "
                }
                b.push("]")
              }else {
                if("object" == d) {
                  if(ia(a) && "function" == typeof a.valueOf) {
                    b.push("new Date(", String(a.valueOf()), ")")
                  }else {
                    for(var d = $a(a).concat(ab), g = {}, i = f = 0;i < d.length;) {
                      var l = d[i++], n = ja(l) ? "o" + ka(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(g, n) || (g[n] = j, d[f++] = l)
                    }
                    d.length = f;
                    b.push("{");
                    g = "";
                    for(i = 0;i < d.length;i++) {
                      f = d[i], Object.prototype.hasOwnProperty.call(a, f) && (l = a[f], b.push(g), Ic(f, b), b.push(": "), Lc(l, b, c), g = ", ")
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
function O(a, b, c) {
  c || (c = []);
  Lc(a, b, c)
}
function P(a) {
  var b = [];
  O(a, b, h);
  return b.join("")
}
;function Mc() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;function Nc(a, b) {
  this.x = v(a) ? a : 0;
  this.y = v(b) ? b : 0
}
Nc.prototype.O = function() {
  return new Nc(this.x, this.y)
};
Nc.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function Oc(a, b) {
  this.width = a;
  this.height = b
}
s = Oc.prototype;
s.O = function() {
  return new Oc(this.width, this.height)
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
var Pc;
function Qc(a) {
  a = a.className;
  return y(a) && a.match(/\S+/g) || []
}
function Rc(a, b) {
  for(var c = Qc(a), d = mb(arguments, 1), g = c.length + d.length, f = c, i = 0;i < d.length;i++) {
    ib(f, d[i]) || f.push(d[i])
  }
  a.className = c.join(" ");
  return c.length == g
}
function Sc(a, b) {
  var c = Qc(a), d = mb(arguments, 1), g, f = d;
  g = eb(c, function(a) {
    return!ib(f, a)
  });
  a.className = g.join(" ");
  return g.length == c.length - d.length
}
;var Tc = !F || Ta(), Uc = !G && !F || F && Ta() || G && I("1.9.1"), Vc = F && !I("9");
function Wc(a) {
  return a ? new Xc(Yc(a)) : Pc || (Pc = new Xc)
}
function Q(a) {
  return y(a) ? document.getElementById(a) : a
}
var Zc = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function $c(a, b, c) {
  return ad(document, arguments)
}
function ad(a, b) {
  var c = b[0], d = b[1];
  if(!Tc && d && (d.name || d.type)) {
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
  d && (y(d) ? f.className = d : ga(d) ? Rc.apply(k, [f].concat(d)) : Ya(d, function(a, b) {
    "style" == b ? f.style.cssText = a : "class" == b ? f.className = a : "for" == b ? f.htmlFor = a : b in Zc ? f.setAttribute(Zc[b], a) : 0 == b.lastIndexOf("aria-", 0) || 0 == b.lastIndexOf("data-", 0) ? f.setAttribute(b, a) : f[b] = a
  }));
  2 < b.length && bd(a, f, b, 2);
  return f
}
function bd(a, b, c, d) {
  function g(c) {
    c && b.appendChild(y(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var f = c[d];
    if(ha(f) && !(ja(f) && 0 < f.nodeType)) {
      var i = db, l;
      a: {
        if((l = f) && "number" == typeof l.length) {
          if(ja(l)) {
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
function cd(a, b) {
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
function Yc(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
var dd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, ed = {IMG:" ", BR:"\n"};
function fd(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, "number" == typeof a && 0 <= a && 32768 > a) : m
}
function gd(a) {
  var b = [];
  hd(a, b, m);
  return b.join("")
}
function hd(a, b, c) {
  if(!(a.nodeName in dd)) {
    if(3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in ed) {
        b.push(ed[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          hd(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Xc(a) {
  this.fa = a || t.document || document
}
s = Xc.prototype;
s.Ya = Wc;
s.f = function(a) {
  return y(a) ? this.fa.getElementById(a) : a
};
function id() {
  var a = (jd.fa.parentWindow || jd.fa.defaultView || window).document, a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
  return new Oc(a.clientWidth, a.clientHeight)
}
s.n = function(a, b, c) {
  return ad(this.fa, arguments)
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
  bd(Yc(a), a, arguments, 1)
};
s.Wd = function(a) {
  return Uc && a.children != h ? a.children : eb(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
};
s.contains = cd;
function kd(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
var ld = G ? "MozUserSelect" : H ? "WebkitUserSelect" : k;
function md(a) {
  this.fe = a;
  this.j = []
}
D(md, L);
var nd = [];
function R(a, b, c, d) {
  ga(c) || (nd[0] = c, c = nd);
  for(var g = 0;g < c.length;g++) {
    var f = N(b, c[g], d || a, m, a.fe || a);
    a.j.push(f)
  }
  return a
}
function od(a, b, c, d, g, f) {
  if(ga(c)) {
    for(var i = 0;i < c.length;i++) {
      od(a, b, c[i], d, g, f)
    }
  }else {
    a: {
      d = d || a;
      f = f || a.fe || a;
      g = !!g;
      if(b = jc(b, c, g)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].Ra && b[c].fb == d && b[c].capture == g && b[c].$b == f) {
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
md.prototype.kd = function() {
  db(this.j, kc);
  this.j.length = 0
};
md.prototype.c = function() {
  md.g.c.call(this);
  this.kd()
};
md.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function pd() {
}
ea(pd);
pd.prototype.Rf = 0;
pd.Za();
function qd(a) {
  this.Pb = a || Wc();
  this.Db = rd
}
D(qd, pc);
qd.prototype.Kf = pd.Za();
var rd = k;
function sd(a, b) {
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
s = qd.prototype;
s.$ = k;
s.U = m;
s.q = k;
s.Db = k;
s.Pf = k;
s.z = k;
s.na = k;
s.Mb = k;
s.pg = m;
function td(a) {
  return a.$ || (a.$ = ":" + (a.Kf.Rf++).toString(36))
}
s.f = o("q");
function ud(a) {
  return a.$a || (a.$a = new md(a))
}
s.getParent = o("z");
s.od = function(a) {
  this.z && this.z != a && e(Error("Method not supported"));
  qd.g.od.call(this, a)
};
s.Ya = o("Pb");
s.n = function() {
  this.q = this.Pb.createElement("div")
};
function vd(a, b) {
  a.U && e(Error("Component already rendered"));
  a.q || a.n();
  b ? b.insertBefore(a.q, k) : a.Pb.fa.body.appendChild(a.q);
  (!a.z || a.z.U) && a.pa()
}
s.pa = function() {
  this.U = j;
  wd(this, function(a) {
    !a.U && a.f() && a.pa()
  })
};
s.sb = function() {
  wd(this, function(a) {
    a.U && a.sb()
  });
  this.$a && this.$a.kd();
  this.U = m
};
s.c = function() {
  qd.g.c.call(this);
  this.U && this.sb();
  this.$a && (this.$a.b(), delete this.$a);
  wd(this, function(a) {
    a.b()
  });
  if(!this.pg && this.q) {
    var a = this.q;
    a && a.parentNode && a.parentNode.removeChild(a)
  }
  this.z = this.Pf = this.q = this.Mb = this.na = k
};
s.lb = function(a) {
  this.U && e(Error("Component already rendered"));
  this.Db = a
};
function wd(a, b) {
  a.na && db(a.na, b, h)
}
s.removeChild = function(a, b) {
  if(a) {
    var c = y(a) ? a : td(a), d;
    this.Mb && c ? (d = this.Mb, d = (c in d ? d[c] : h) || k) : d = k;
    a = d;
    c && a && (d = this.Mb, c in d && delete d[c], jb(this.na, a), b && (a.sb(), a.q && (c = a.q) && c.parentNode && c.parentNode.removeChild(c)), c = a, c == k && e(Error("Unable to set parent component")), c.z = k, qd.g.od.call(c, k))
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function xd() {
}
var yd;
ea(xd);
s = xd.prototype;
s.Ub = aa();
s.n = function(a) {
  var b = a.Ya().n("div", zd(this, a).join(" "), a.pb);
  this.md(a, b);
  return b
};
s.qb = function(a, b, c) {
  if(a = a.f ? a.f() : a) {
    if(F && !I("7")) {
      var d = Ad(Qc(a), b);
      d.push(b);
      pa(c ? Rc : Sc, a).apply(k, d)
    }else {
      c ? Rc(a, b) : Sc(a, b)
    }
  }
};
s.je = function(a) {
  if(a.Db == k) {
    var b = a.U ? a.q : a.Pb.fa.body, c;
    a: {
      c = Yc(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(b, k))) {
        c = c.direction || c.getPropertyValue("direction") || "";
        break a
      }
      c = ""
    }
    c || (c = (b.currentStyle ? b.currentStyle.direction : k) || b.style && b.style.direction);
    a.Db = "rtl" == c
  }
  a.Db && this.lb(a.f(), j);
  a.isEnabled() && this.Eb(a, a.Va)
};
s.md = function(a, b) {
  a.isEnabled() || this.N(b, 1, j);
  a.d & 8 && this.N(b, 8, j);
  a.G & 16 && this.N(b, 16, !!(a.d & 16));
  a.G & 64 && this.N(b, 64, !!(a.d & 64))
};
s.nc = function(a, b) {
  var c = !b, d = F || Ha ? a.getElementsByTagName("*") : k;
  if(ld) {
    if(c = c ? "none" : "", a.style[ld] = c, d) {
      for(var g = 0, f;f = d[g];g++) {
        f.style[ld] = c
      }
    }
  }else {
    if(F || Ha) {
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
s.ne = function(a) {
  var b;
  return a.G & 32 && (b = a.Ka()) ? fd(b) : m
};
s.Eb = function(a, b) {
  var c;
  if(a.G & 32 && (c = a.Ka())) {
    if(!b && a.d & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.d & 32 && a.Zd()
    }
    fd(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
s.qd = function(a, b) {
  a.style.display = b ? "" : "none"
};
s.L = function(a, b, c) {
  var d = a.f();
  if(d) {
    var g = Bd(this, b);
    g && this.qb(a, g, c);
    this.N(d, b, c)
  }
};
s.N = function(a, b, c) {
  yd || (yd = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = yd[b]) && a.setAttribute("aria-" + b, c)
};
s.Ka = function(a) {
  return a.f()
};
s.sa = r("goog-control");
function zd(a, b) {
  var c = a.sa(), d = [c], g = a.sa();
  g != c && d.push(g);
  c = b.d;
  for(g = [];c;) {
    var f = c & -c;
    g.push(Bd(a, f));
    c &= ~f
  }
  d.push.apply(d, g);
  (c = b.Y) && d.push.apply(d, c);
  F && !I("7") && d.push.apply(d, Ad(d));
  return d
}
function Ad(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  db([], function(d) {
    hb(d, pa(ib, a)) && (!b || ib(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Bd(a, b) {
  if(!a.Kd) {
    var c = a.sa();
    a.Kd = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Kd[b]
}
;function Cd(a, b) {
  a || e(Error("Invalid class name " + a));
  z(b) || e(Error("Invalid decorator function " + b))
}
var Dd = {};
function Ed(a, b, c, d, g) {
  if(!F && (!H || !I("525"))) {
    return j
  }
  if(Ja && g) {
    return Fd(a)
  }
  if(g && !d || !c && (17 == b || 18 == b) || F && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(F && Ta());
    case 27:
      return!H
  }
  return Fd(a)
}
function Fd(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || H && 0 == a) {
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
function Gd(a) {
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
;function Hd(a, b) {
  a && Id(this, a, b)
}
D(Hd, pc);
s = Hd.prototype;
s.q = k;
s.bc = k;
s.Sc = k;
s.cc = k;
s.wa = -1;
s.va = -1;
s.zc = m;
var Jd = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Kd = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Ld = F || 
H && I("525"), Md = Ja && G;
s = Hd.prototype;
s.Gf = function(a) {
  if(H && (17 == this.wa && !a.ctrlKey || 18 == this.wa && !a.altKey)) {
    this.va = this.wa = -1
  }
  Ld && !Ed(a.keyCode, this.wa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.va = G ? Gd(a.keyCode) : a.keyCode, Md && (this.zc = a.altKey))
};
s.If = function(a) {
  this.va = this.wa = -1;
  this.zc = a.altKey
};
s.handleEvent = function(a) {
  var b = a.qa, c, d, g = b.altKey;
  F && "keypress" == a.type ? (c = this.va, d = 13 != c && 27 != c ? b.keyCode : 0) : H && "keypress" == a.type ? (c = this.va, d = 0 <= b.charCode && 63232 > b.charCode && Fd(c) ? b.charCode : 0) : Ha ? (c = this.va, d = Fd(c) ? b.keyCode : 0) : (c = b.keyCode || this.va, d = b.charCode || 0, Md && (g = this.zc), Ja && (63 == d && 224 == c) && (c = 191));
  var f = c, i = b.keyIdentifier;
  c ? 63232 <= c && c in Jd ? f = Jd[c] : 25 == c && a.shiftKey && (f = 9) : i && i in Kd && (f = Kd[i]);
  a = f == this.wa;
  this.wa = f;
  b = new Nd(f, d, a, b);
  b.altKey = g;
  this.dispatchEvent(b)
};
s.f = o("q");
function Id(a, b, c) {
  a.cc && a.detach();
  a.q = b;
  a.bc = N(a.q, "keypress", a, c);
  a.Sc = N(a.q, "keydown", a.Gf, c, a);
  a.cc = N(a.q, "keyup", a.If, c, a)
}
s.detach = function() {
  this.bc && (kc(this.bc), kc(this.Sc), kc(this.cc), this.cc = this.Sc = this.bc = k);
  this.q = k;
  this.va = this.wa = -1
};
s.c = function() {
  Hd.g.c.call(this);
  this.detach()
};
function Nd(a, b, c, d) {
  d && this.Ma(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
D(Nd, ac);
function S(a, b, c) {
  qd.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ka(b);
      if(d = Dd[d]) {
        break
      }
      b = b.g ? b.g.constructor : k
    }
    b = d ? z(d.Za) ? d.Za() : new d : k
  }
  this.u = b;
  this.pb = a
}
D(S, qd);
s = S.prototype;
s.pb = k;
s.d = 0;
s.G = 39;
s.Ac = 255;
s.fg = 0;
s.Va = j;
s.Y = k;
s.Oc = j;
s.yc = m;
s.Uf = k;
s.Ka = function() {
  return this.u.Ka(this)
};
function Od(a, b) {
  b && (a.Y ? ib(a.Y, b) || a.Y.push(b) : a.Y = [b], a.u.qb(a, b, j))
}
s.qb = function(a, b) {
  b ? Od(this, a) : a && this.Y && (jb(this.Y, a), 0 == this.Y.length && (this.Y = k), this.u.qb(this, a, m))
};
s.n = function() {
  var a = this.u.n(this);
  this.q = a;
  var b = this.Uf || this.u.Ub();
  b && a.setAttribute("role", b);
  this.yc || this.u.nc(a, m);
  this.Va || this.u.qd(a, m)
};
s.pa = function() {
  S.g.pa.call(this);
  this.u.je(this);
  if(this.G & -2 && (this.Oc && Pd(this, j), this.G & 32)) {
    var a = this.Ka();
    if(a) {
      var b = this.cb || (this.cb = new Hd);
      Id(b, a);
      R(R(R(ud(this), b, "key", this.Hf), a, "focus", this.Ff), a, "blur", this.Zd)
    }
  }
};
function Pd(a, b) {
  var c = ud(a), d = a.f();
  b ? (R(R(R(R(c, d, "mouseover", a.de), d, "mousedown", a.be), d, "mouseup", a.ee), d, "mouseout", a.ce), a.Zb != u && R(c, d, "contextmenu", a.Zb), F && R(c, d, "dblclick", a.ae)) : (od(od(od(od(c, d, "mouseover", a.de), d, "mousedown", a.be), d, "mouseup", a.ee), d, "mouseout", a.ce), a.Zb != u && od(c, d, "contextmenu", a.Zb), F && od(c, d, "dblclick", a.ae))
}
s.sb = function() {
  S.g.sb.call(this);
  this.cb && this.cb.detach();
  this.Va && this.isEnabled() && this.u.Eb(this, m)
};
s.c = function() {
  S.g.c.call(this);
  this.cb && (this.cb.b(), delete this.cb);
  delete this.u;
  this.Y = this.pb = k
};
function Qd(a) {
  a = a.pb;
  if(!a) {
    return""
  }
  if(!y(a)) {
    if(ga(a)) {
      a = fb(a, gd).join("")
    }else {
      if(Vc && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        hd(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Vc || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
s.lb = function(a) {
  S.g.lb.call(this, a);
  var b = this.f();
  b && this.u.lb(b, a)
};
s.nc = function(a) {
  this.yc = a;
  var b = this.f();
  b && this.u.nc(b, a)
};
s.qd = function(a, b) {
  if(b || this.Va != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.f();
    c && this.u.qd(c, a);
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
  if((!b || "function" != typeof b.isEnabled || b.isEnabled()) && Rd(this, 1, !a)) {
    a || (this.setActive(m), Sd(this, m)), this.Va && this.u.Eb(this, a), this.L(1, !a)
  }
};
function Sd(a, b) {
  Rd(a, 2, b) && a.L(2, b)
}
s.le = function() {
  return!!(this.d & 4)
};
s.setActive = function(a) {
  Rd(this, 4, a) && this.L(4, a)
};
s.L = function(a, b) {
  this.G & a && b != !!(this.d & a) && (this.u.L(this, a, b), this.d = b ? this.d | a : this.d & ~a)
};
function T(a, b) {
  return!!(a.Ac & b) && !!(a.G & b)
}
function Rd(a, b, c) {
  return!!(a.G & b) && !!(a.d & b) != c && (!(a.fg & b) || a.dispatchEvent(sd(b, c))) && !a.ea
}
s.de = function(a) {
  (!a.relatedTarget || !cd(this.f(), a.relatedTarget)) && (this.dispatchEvent("enter") && this.isEnabled() && T(this, 2)) && Sd(this, j)
};
s.ce = function(a) {
  if((!a.relatedTarget || !cd(this.f(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    T(this, 4) && this.setActive(m), T(this, 2) && Sd(this, m)
  }
};
s.Zb = u;
s.be = function(a) {
  if(this.isEnabled() && (T(this, 2) && Sd(this, j), cc(a) && (!H || !Ja || !a.ctrlKey))) {
    T(this, 4) && this.setActive(j), this.u.ne(this) && this.Ka().focus()
  }
  !this.yc && (cc(a) && (!H || !Ja || !a.ctrlKey)) && a.preventDefault()
};
s.ee = function(a) {
  this.isEnabled() && (T(this, 2) && Sd(this, j), this.le() && (this.Ab(a) && T(this, 4)) && this.setActive(m))
};
s.ae = function(a) {
  this.isEnabled() && this.Ab(a)
};
s.Ab = function(a) {
  if(T(this, 16)) {
    var b = !(this.d & 16);
    Rd(this, 16, b) && this.L(16, b)
  }
  T(this, 8) && Rd(this, 8, j) && this.L(8, j);
  T(this, 64) && (b = !(this.d & 64), Rd(this, 64, b) && this.L(64, b));
  b = new Yb("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.hd = a.hd);
  return this.dispatchEvent(b)
};
s.Ff = function() {
  T(this, 32) && Rd(this, 32, j) && this.L(32, j)
};
s.Zd = function() {
  T(this, 4) && this.setActive(m);
  T(this, 32) && Rd(this, 32, m) && this.L(32, m)
};
s.Hf = function(a) {
  return this.Va && this.isEnabled() && this.Nc(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
s.Nc = function(a) {
  return 13 == a.keyCode && this.Ab(a)
};
z(S) || e(Error("Invalid component class " + S));
z(xd) || e(Error("Invalid renderer class " + xd));
var Td = ka(S);
Dd[Td] = xd;
Cd("goog-control", function() {
  return new S(k)
});
function Ud() {
}
D(Ud, xd);
ea(Ud);
s = Ud.prototype;
s.Ub = r("button");
s.N = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : Ud.g.N.call(this, a, b, c)
};
s.n = function(a) {
  var b = Ud.g.n.call(this, a), c = a.Wb();
  c && this.pd(b, c);
  (c = a.Xb()) && this.pc(b, c);
  a.G & 16 && this.N(b, 16, !!(a.d & 16));
  return b
};
s.Xb = u;
s.pc = u;
s.Wb = function(a) {
  return a.title
};
s.pd = function(a, b) {
  a && (a.title = b || "")
};
s.sa = r("goog-button");
function Vd() {
}
D(Vd, Ud);
ea(Vd);
s = Vd.prototype;
s.Ub = aa();
s.n = function(a) {
  a.U && m != a.Oc && Pd(a, m);
  a.Oc = m;
  a.Ac &= -256;
  a.U && a.d & 32 && e(Error("Component already rendered"));
  a.d & 32 && a.L(32, m);
  a.G &= -33;
  return a.Ya().n("button", {"class":zd(this, a).join(" "), disabled:!a.isEnabled(), title:a.Wb() || "", value:a.Xb() || ""}, Qd(a) || "")
};
s.je = function(a) {
  R(ud(a), a.f(), "click", a.Ab)
};
s.nc = u;
s.lb = u;
s.ne = function(a) {
  return a.isEnabled()
};
s.Eb = u;
s.L = function(a, b, c) {
  Vd.g.L.call(this, a, b, c);
  if((a = a.f()) && 1 == b) {
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
function Wd(a, b, c) {
  S.call(this, a, b || Vd.Za(), c)
}
D(Wd, S);
s = Wd.prototype;
s.Xb = o("bf");
s.pc = function(a) {
  this.bf = a;
  this.u.pc(this.f(), a)
};
s.Wb = o("Ze");
s.pd = function(a) {
  this.Ze = a;
  this.u.pd(this.f(), a)
};
s.c = function() {
  Wd.g.c.call(this);
  delete this.bf;
  delete this.Ze
};
s.pa = function() {
  Wd.g.pa.call(this);
  if(this.G & 32) {
    var a = this.Ka();
    a && R(ud(this), a, "keyup", this.Nc)
  }
};
s.Nc = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Ab(a) : 32 == a.keyCode
};
Cd("goog-button", function() {
  return new Wd(k)
});
function Xd() {
}
D(Xd, Ud);
ea(Xd);
Xd.prototype.n = function(a) {
  var b = {"class":"goog-inline-block " + zd(this, a).join(" "), title:a.Wb() || ""}, b = a.Ya().n("div", b, Yd(this, a.pb, a.Ya()));
  this.md(a, b);
  return b
};
Xd.prototype.Ub = r("button");
Xd.prototype.md = function(a, b) {
  a.isEnabled() || this.N(b, 1, j);
  a.d & 8 && this.N(b, 8, j);
  a.G & 16 && this.N(b, 16, j);
  a.d & 64 && this.N(b, 64, j)
};
function Yd(a, b, c) {
  return c.n("div", "goog-inline-block " + (a.sa() + "-outer-box"), c.n("div", "goog-inline-block " + (a.sa() + "-inner-box"), b))
}
Xd.prototype.sa = r("goog-custom-button");
function $d(a, b, c) {
  Wd.call(this, a, b || Xd.Za(), c)
}
D($d, Wd);
Cd("goog-custom-button", function() {
  return new $d(k)
});
function ae() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ C()).toString(36)
}
function be(a) {
  return a.substr(0, a.length - 1)
}
var ce = /^(0|[1-9]\d*)$/, de = /^(0|\-?[1-9]\d*)$/;
function ee(a) {
  var b = fe;
  return ce.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function ge(a) {
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
;var he, ie;
function je(a, b) {
  this.Wa = a;
  this.Sa = b
}
je.prototype.Q = function(a) {
  return a instanceof je && this.Wa == a.Wa && this.Sa.join(",") == a.Sa
};
je.prototype.F = function(a, b) {
  a.push("new SACK(", String(this.Wa), ", ");
  O(this.Sa, a, b);
  a.push(")")
};
function ke() {
  this.J = new tb
}
ke.prototype.Ia = -1;
ke.prototype.M = 0;
ke.prototype.append = function(a) {
  var b = ge(a);
  this.J.set(this.Ia + 1, [a, b]);
  this.Ia += 1;
  this.M += b
};
ke.prototype.F = function(a) {
  a.push("<Queue with ", String(this.J.r()), " item(s), counter=#", String(this.Ia), ", size=", String(this.M), ">")
};
function le(a) {
  a = a.J.Z();
  K.sort.call(a, nb);
  return a
}
function me() {
  this.Ga = new tb
}
me.prototype.Oa = -1;
me.prototype.M = 0;
function ne(a) {
  var b = a.Ga.Z();
  K.sort.call(b, nb);
  return new je(a.Oa, b)
}
var oe = {};
function pe(a, b) {
  switch(fa(b)) {
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
        a.push('<property id="', d, '">'), pe(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', E(c), '">'), pe(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function qe(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, g = arguments;
  d.push("<arguments>");
  for(var f = g.length, i = 1;i < f;i++) {
    pe(d, g[i])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var re = m, se = "";
function te(a) {
  a = a.match(/[\d]+/g);
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var ue = navigator.plugins["Shockwave Flash"];
  ue && (re = j, ue.description && (se = te(ue.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (re = j, se = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var ve = navigator.mimeTypes["application/x-shockwave-flash"];
    (re = ve && ve.enabledPlugin) && (se = te(ve.enabledPlugin.description))
  }else {
    try {
      var we = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), re = j, se = te(we.GetVariable("$version"))
    }catch(xe) {
      try {
        we = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), re = j, se = "6.0.21"
      }catch(ye) {
        try {
          we = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), re = j, se = te(we.GetVariable("$version"))
        }catch(ze) {
        }
      }
    }
  }
}
var Ae = se;
function Be(a) {
  this.o = new tb;
  a && this.xc(a)
}
function Ce(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ka(a) : b.substr(0, 1) + a
}
s = Be.prototype;
s.r = function() {
  return this.o.r()
};
s.add = function(a) {
  this.o.set(Ce(a), a)
};
s.xc = function(a) {
  for(var a = pb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
s.kd = function(a) {
  for(var a = pb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
s.remove = function(a) {
  return this.o.remove(Ce(a))
};
s.clear = function() {
  this.o.clear()
};
s.Na = function() {
  return this.o.Na()
};
s.contains = function(a) {
  return this.o.da(Ce(a))
};
s.D = function() {
  return this.o.D()
};
s.O = function() {
  return new Be(this)
};
s.Q = function(a) {
  var b;
  if(b = this.r() == ob(a)) {
    var c = a, a = ob(c);
    this.r() > a ? b = m : (!(c instanceof Be) && 5 < a && (c = new Be(c)), b = sb(this, function(a) {
      if("function" == typeof c.contains) {
        a = c.contains(a)
      }else {
        if("function" == typeof c.Nb) {
          a = c.Nb(a)
        }else {
          if(ha(c) || y(c)) {
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
function De(a) {
  return Ee(a || arguments.callee.caller, [])
}
function Ee(a, b) {
  var c = [];
  if(ib(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Fe(a) + "(");
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
            f = String(f);
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = Fe(f)) ? f : "[fn]";
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
        c.push(Ee(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Fe(a) {
  if(Ge[a]) {
    return Ge[a]
  }
  a = String(a);
  if(!Ge[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Ge[a] = b ? b[1] : "[Anonymous]"
  }
  return Ge[a]
}
var Ge = {};
function He(a, b, c, d, g) {
  this.reset(a, b, c, d, g)
}
He.prototype.$f = 0;
He.prototype.Lc = k;
He.prototype.Kc = k;
var Ie = 0;
He.prototype.reset = function(a, b, c, d, g) {
  this.$f = "number" == typeof g ? g : Ie++;
  this.Ye = d || C();
  this.V = a;
  this.ye = b;
  this.ue = c;
  delete this.Lc;
  delete this.Kc
};
He.prototype.kb = ba("V");
function Je(a) {
  this.Qf = a
}
Je.prototype.z = k;
Je.prototype.V = k;
Je.prototype.na = k;
Je.prototype.vb = k;
function Ke(a, b) {
  this.name = a;
  this.value = b
}
Ke.prototype.toString = o("name");
var Le = new Ke("SHOUT", 1200), Me = new Ke("SEVERE", 1E3), Ne = new Ke("WARNING", 900), Oe = new Ke("INFO", 800), Pe = new Ke("CONFIG", 700), Qe = new Ke("FINE", 500), Re = new Ke("FINEST", 300), Se = new Ke("ALL", 0), Te = [new Ke("OFF", Infinity), Le, Me, Ne, Oe, Pe, Qe, new Ke("FINER", 400), Re, Se], Ue = k;
function Ve(a) {
  if(!Ue) {
    Ue = {};
    for(var b = 0, c;c = Te[b];b++) {
      Ue[c.value] = c, Ue[c.name] = c
    }
  }
  return Ue[a] || k
}
s = Je.prototype;
s.getParent = o("z");
s.Wd = function() {
  this.na || (this.na = {});
  return this.na
};
s.kb = ba("V");
function We(a) {
  if(a.V) {
    return a.V
  }
  if(a.z) {
    return We(a.z)
  }
  Va("Root logger has no level set.");
  return k
}
s.log = function(a, b, c) {
  if(a.value >= We(this).value) {
    a = this.Ef(a, b, c);
    b = "log:" + a.ye;
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
s.Ef = function(a, b, c) {
  var d = new He(a, String(b), this.Qf);
  if(c) {
    d.Lc = c;
    var g;
    var f = arguments.callee.caller;
    try {
      var i;
      var l = da("window.location.href");
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
      g = "Message: " + E(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + E(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + E(De(f) + "-> ")
    }catch(A) {
      g = "Exception trying to expose exception! You win, we lose. " + A
    }
    d.Kc = g
  }
  return d
};
function U(a, b) {
  a.log(Me, b, h)
}
function V(a, b, c) {
  a.log(Ne, b, c)
}
s.info = function(a, b) {
  this.log(Oe, a, b)
};
function W(a, b) {
  a.log(Qe, b, h)
}
function X(a, b) {
  a.log(Re, b, h)
}
var Xe = {}, Ye = k;
function Ze() {
  Ye || (Ye = new Je(""), Xe[""] = Ye, Ye.kb(Pe))
}
function $e() {
  Ze();
  return Ye
}
function Y(a) {
  Ze();
  var b;
  if(!(b = Xe[a])) {
    b = new Je(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Y(a.substr(0, c));
    c.Wd()[d] = b;
    b.z = c;
    Xe[a] = b
  }
  return b
}
;function af(a, b) {
  qd.call(this, b);
  this.Bf = a;
  this.Jc = new md(this);
  this.Sb = new tb
}
D(af, qd);
s = af.prototype;
s.a = Y("goog.ui.media.FlashObject");
s.rg = "window";
s.Hd = "#000000";
s.hf = "sameDomain";
function bf(a, b, c) {
  a.Cd = y(b) ? b : Math.round(b) + "px";
  a.Pc = y(c) ? c : Math.round(c) + "px";
  a.f() && (b = a.f() ? a.f().firstChild : k, c = a.Cd, a = a.Pc, c instanceof Oc ? (a = c.height, c = c.width) : a == h && e(Error("missing height argument")), b.style.width = kd(c), b.style.height = kd(a))
}
s.pa = function() {
  af.g.pa.call(this);
  var a = this.f(), b;
  b = F ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = F ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = qa(c, this.rg), d = this.Sb.Z(), g = this.Sb.D(), f = [], i = 0;i < d.length;i++) {
    f.push(encodeURIComponent(String(d[i])) + "=" + encodeURIComponent(String(g[i])))
  }
  b = qa(b, td(this), td(this), "goog-ui-media-flash-object", E(this.Bf), E(f.join("&")), this.Hd, this.hf, c);
  a.innerHTML = b;
  this.Cd && this.Pc && bf(this, this.Cd, this.Pc);
  R(this.Jc, this.f(), Za(Wb), Zb)
};
s.n = function() {
  this.Ne != k && !(0 <= za(Ae, this.Ne)) && (V(this.a, "Required flash version not found:" + this.Ne), e(Error("Method not supported")));
  var a = this.Ya().createElement("div");
  a.className = "goog-ui-media-flash";
  this.q = a
};
s.c = function() {
  af.g.c.call(this);
  this.Sb = k;
  this.Jc.b();
  this.Jc = k
};
function cf(a) {
  J.call(this, a)
}
D(cf, J);
cf.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function df(a, b) {
  this.$ = "_" + ae();
  this.tc = a;
  this.za = b;
  this.Fa = a.Fa
}
D(df, L);
s = df.prototype;
s.Pa = j;
s.Ob = m;
s.a = Y("cw.net.FlashSocket");
s.F = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.$);
  a.push("'>")
};
function ef(a, b, c) {
  if("frames" == b) {
    a = a.za, ff(a.C), gf(a.C, c)
  }else {
    if("stillreceiving" == b) {
      c = a.za, X(c.a, "onstillreceiving"), ff(c.C)
    }else {
      if("connect" == b) {
        a.za.onconnect()
      }else {
        "close" == b ? (a.Pa = m, a.b()) : "ioerror" == b ? (a.Pa = m, b = a.za, V(b.a, "onioerror: " + P(c)), hf(b.C, m), a.b()) : "securityerror" == b ? (a.Pa = m, b = a.za, V(b.a, "onsecurityerror: " + P(c)), hf(b.C, m), a.b()) : e(Error("bad event: " + b))
      }
    }
  }
}
s.Ec = function(a, b) {
  try {
    var c = this.Fa.CallFunction(qe("__FC_connect", this.$, a, b, "<int32/>\n"))
  }catch(d) {
    U(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message);
    this.Ob = j;
    this.Pa = m;
    this.b();
    return
  }
  '"OK"' != c && e(Error("__FC_connect failed? ret: " + c))
};
s.Jb = function(a) {
  try {
    var b = this.Fa.CallFunction(qe("__FC_writeFrames", this.$, a))
  }catch(c) {
    U(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message);
    this.Ob = j;
    this.Pa = m;
    this.b();
    return
  }
  '"OK"' != b && ('"no such instance"' == b ? (V(this.a, "Flash no longer knows of " + this.$ + "; disposing."), this.b()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
s.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.Pa);
  df.g.c.call(this);
  var a = this.Fa;
  delete this.Fa;
  if(this.Pa) {
    try {
      var b = a.CallFunction(qe("__FC_close", this.$));
      this.a.info("disposeInternal: __FC_close ret: " + b)
    }catch(c) {
      U(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + c.message), this.Ob = j
    }
  }
  if(this.Ob) {
    a = this.za, V(a.a, "oncrash"), hf(a.C, j)
  }else {
    this.za.onclose()
  }
  delete this.za;
  delete this.tc.ab[this.$]
};
function jf(a, b) {
  this.p = a;
  this.Fa = b;
  this.ab = {};
  this.Dc = "__FST_" + ae();
  t[this.Dc] = B(this.vf, this);
  var c = b.CallFunction(qe("__FC_setCallbackFunc", this.Dc));
  '"OK"' != c && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
D(jf, L);
s = jf.prototype;
s.a = Y("cw.net.FlashSocketTracker");
s.F = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  O(this.ab, a, b);
  a.push(">")
};
s.Gc = function(a) {
  a = new df(this, a);
  return this.ab[a.$] = a
};
s.tf = function(a, b, c, d) {
  var g = this.ab[a];
  g ? "frames" == b && d ? (ef(g, "ioerror", "FlashConnector hadError while handling data."), g.b()) : ef(g, b, c) : V(this.a, "Cannot dispatch because we have no instance: " + P([a, b, c, d]))
};
s.vf = function(a, b, c, d) {
  try {
    var g = this.p;
    g.Qb.push([this.tf, this, [a, b, c, d]]);
    g.xd == k && (g.xd = g.B.setTimeout(g.lf, 0))
  }catch(f) {
    t.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
s.c = function() {
  jf.g.c.call(this);
  for(var a = Za(this.ab);a.length;) {
    a.pop().b()
  }
  delete this.ab;
  delete this.Fa;
  t[this.Dc] = h
};
function kf(a) {
  this.C = a;
  this.ob = []
}
D(kf, L);
s = kf.prototype;
s.a = Y("cw.net.FlashSocketConduit");
s.Jb = function(a) {
  this.ob ? (X(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.ob.push.apply(this.ob, a)) : (X(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.qc.Jb(a))
};
s.Ec = function(a, b) {
  this.qc.Ec(a, b)
};
s.onconnect = function() {
  this.a.info("onconnect");
  ff(this.C);
  var a = this.ob;
  this.ob = k;
  a.length && (X(this.a, "onconnect: Writing " + a.length + " buffered frame(s)."), this.qc.Jb(a))
};
s.onclose = function() {
  this.a.info("onclose");
  hf(this.C, m)
};
s.c = function() {
  this.a.info("in disposeInternal.");
  kf.g.c.call(this);
  this.qc.b();
  delete this.C
};
var lf = [];
function mf() {
  var a = new rc;
  lf.push(a);
  return a
}
function nf(a) {
  var b = lf;
  lf = [];
  db(b, function(b) {
    b.X(a)
  });
  return k
}
function of(a) {
  var b = lf;
  lf = [];
  db(b, function(b) {
    b.Xa(a)
  });
  return k
}
;var fe = Math.pow(2, 53);
var pf = {ff:r("<cw.eq.Wildcard>")};
function qf(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function rf(a, b, c) {
  var d = fa(a), g = fa(b);
  if(a == pf || b == pf) {
    return j
  }
  if(a != k && "function" == typeof a.Q) {
    return c && c.push("running custom equals function on left object"), a.Q(b, c)
  }
  if(b != k && "function" == typeof b.Q) {
    return c && c.push("running custom equals function on right object"), b.Q(a, c)
  }
  if(qf(d) || qf(g)) {
    a = a === b
  }else {
    if(a instanceof RegExp && b instanceof RegExp) {
      a = a.toString() === b.toString()
    }else {
      if(ia(a) && ia(b)) {
        a = a.valueOf() === b.valueOf()
      }else {
        if("array" == d && "array" == g) {
          a: {
            if(c && c.push("descending into array"), a.length != b.length) {
              c && c.push("array length mismatch: " + a.length + ", " + b.length), a = m
            }else {
              d = 0;
              for(g = a.length;d < g;d++) {
                if(!rf(a[d], b[d], c)) {
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
          if(a.ef == Qb && b.ef == Qb) {
            a: {
              c && c.push("descending into object");
              for(var f in a) {
                if(!(f in b)) {
                  c && c.push("property " + f + " missing on right object");
                  a = m;
                  break a
                }
                if(!rf(a[f], b[f], c)) {
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
  this.Xf = a;
  this.ic = b
}
Z.prototype.Q = function(a, b) {
  return ja(a) && this.constructor == a.constructor && rf(this.ic, a.ic, b)
};
Z.prototype.F = function(a, b) {
  a.push("new ", this.Xf, "(");
  for(var c = "", d = 0;d < this.ic.length;d++) {
    a.push(c), c = ", ", O(this.ic[d], a, b)
  }
  a.push(")")
};
function $(a) {
  J.call(this, a)
}
D($, J);
$.prototype.name = "cw.net.InvalidFrame";
function sf() {
  var a = [];
  this.T(a);
  return a.join("")
}
function tf() {
}
tf.prototype.Q = function(a, b) {
  return!(a instanceof tf) ? m : rf(uf(this), uf(a), b)
};
tf.prototype.F = function(a, b) {
  a.push("<HelloFrame properties=");
  O(uf(this), a, b);
  a.push(">")
};
function uf(a) {
  return[a.ja, a.He, a.he, a.Me, a.Gb, a.ud, a.ze, a.xe, a.Yc, a.ve, a.af, a.Xe, a.Ca, a.dc]
}
tf.prototype.P = sf;
tf.prototype.T = function(a) {
  var b = {};
  b.tnum = this.ja;
  b.ver = this.He;
  b.format = this.he;
  b["new"] = this.Me;
  b.id = this.Gb;
  b.ming = this.ud;
  b.pad = this.ze;
  b.maxb = this.xe;
  v(this.Yc) && (b.maxt = this.Yc);
  b.maxia = this.ve;
  b.tcpack = this.af;
  b.eeds = this.Xe;
  b.sack = this.Ca instanceof je ? be((new vf(this.Ca)).P()) : this.Ca;
  b.seenack = this.dc instanceof je ? be((new vf(this.dc)).P()) : this.dc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(Ec(b), "H")
};
function wf(a) {
  Z.call(this, "StringFrame", [a]);
  this.wd = a
}
D(wf, Z);
wf.prototype.P = sf;
wf.prototype.T = function(a) {
  a.push(this.wd, " ")
};
function xf(a) {
  Z.call(this, "CommentFrame", [a]);
  this.pf = a
}
D(xf, Z);
xf.prototype.P = sf;
xf.prototype.T = function(a) {
  a.push(this.pf, "^")
};
function yf(a) {
  Z.call(this, "SeqNumFrame", [a]);
  this.Se = a
}
D(yf, Z);
yf.prototype.P = sf;
yf.prototype.T = function(a) {
  a.push(String(this.Se), "N")
};
function zf(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = fe;
    if(de.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var f = ee(b[d]);
      if(f == k) {
        return k
      }
      c.push(f)
    }
  }
  return new je(a, c)
}
function vf(a) {
  Z.call(this, "SackFrame", [a]);
  this.Ca = a
}
D(vf, Z);
vf.prototype.P = sf;
vf.prototype.T = function(a) {
  var b = this.Ca;
  a.push(b.Sa.join(","), "|", String(b.Wa));
  a.push("A")
};
function Af(a) {
  Z.call(this, "StreamStatusFrame", [a]);
  this.qe = a
}
D(Af, Z);
Af.prototype.P = sf;
Af.prototype.T = function(a) {
  var b = this.qe;
  a.push(b.Sa.join(","), "|", String(b.Wa));
  a.push("T")
};
function Bf() {
  Z.call(this, "StreamCreatedFrame", [])
}
D(Bf, Z);
Bf.prototype.P = sf;
Bf.prototype.T = function(a) {
  a.push("C")
};
function Cf() {
  Z.call(this, "YouCloseItFrame", [])
}
D(Cf, Z);
Cf.prototype.P = sf;
Cf.prototype.T = function(a) {
  a.push("Y")
};
function Df(a, b) {
  Z.call(this, "ResetFrame", [a, b]);
  this.Ke = a;
  this.Gd = b
}
D(Df, Z);
Df.prototype.P = sf;
Df.prototype.T = function(a) {
  a.push(this.Ke, "|", String(Number(this.Gd)), "!")
};
var Ef = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Ff(a) {
  Z.call(this, "TransportKillFrame", [a]);
  this.reason = a
}
D(Ff, Z);
Ff.prototype.P = sf;
Ff.prototype.T = function(a) {
  a.push(this.reason, "K")
};
function Gf(a) {
  a || e(new $("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new wf(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = zf(be(a)), a == k && e(new $("bad sack")), new vf(a)
  }
  if("N" == b) {
    return a = ee(be(a)), a == k && e(new $("bad seqNum")), new yf(a)
  }
  if("T" == b) {
    return a = zf(be(a)), a == k && e(new $("bad lastSackSeen")), new Af(a)
  }
  if("Y" == b) {
    return 1 != a.length && e(new $("leading garbage")), new Cf
  }
  if("^" == b) {
    return new xf(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && e(new $("leading garbage")), new Bf
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && e(new $("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && e(new $("bad applicationLevel")), new Df(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = Ef[a], a == k && e(new $("unknown kill reason: " + a)), new Ff(a)
  }
  e(new $("Invalid frame type " + b))
}
;function Hf(a, b, c, d) {
  this.contentWindow = a;
  this.Rb = b;
  this.vd = c;
  this.Df = d
}
Hf.prototype.F = function(a, b) {
  a.push("<XDRFrame frameId=");
  O(this.Df, a, b);
  a.push(", expandedUrl=");
  O(this.Rb, a, b);
  a.push(", streams=");
  O(this.vd, a, b);
  a.push(">")
};
function If() {
  this.frames = [];
  this.Wc = new tb
}
If.prototype.a = Y("cw.net.XDRTracker");
function Jf(a, b) {
  for(var c = Kf, d = 0;d < c.frames.length;d++) {
    var g = c.frames[d], f;
    if(f = 0 == g.vd.length) {
      f = g.Rb;
      var i = String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      f = RegExp("^" + i + "$").test(f)
    }
    if(f) {
      return c.a.info("Giving " + P(b) + " existing frame " + P(g)), zc(g)
    }
  }
  d = ae() + ae();
  g = a.replace(/%random%/g, function() {
    return"ml" + String(Math.floor(Mc())) + String(Math.floor(Mc()))
  });
  f = t.location;
  f instanceof yb || (f = Mb(f));
  g instanceof yb || (g = Mb(g));
  var l = f;
  f = g;
  g = l.O();
  (i = !!f.Da) ? zb(g, f.Da) : i = !!f.Ua;
  if(i) {
    var n = f.Ua;
    Ab(g);
    g.Ua = n
  }else {
    i = !!f.oa
  }
  i ? Bb(g, f.oa) : i = f.ib != k;
  n = f.xa;
  if(i) {
    Cb(g, f.ib)
  }else {
    if(i = !!f.xa) {
      if("/" != n.charAt(0) && (l.oa && !l.xa ? n = "/" + n : (l = g.xa.lastIndexOf("/"), -1 != l && (n = g.xa.substr(0, l + 1) + n))), ".." == n || "." == n) {
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
  i ? Db(g, n) : i = "" !== f.K.toString();
  i ? Eb(g, f.K.toString() ? decodeURIComponent(f.K.toString()) : "") : i = !!f.Ja;
  i && (f = f.Ja, Ab(g), g.Ja = f);
  g = g.toString();
  f = String(t.location).match(Wa)[3] || k;
  i = g.match(Wa)[3] || k;
  f == i ? (c.a.info("No need to make a real XDRFrame for " + P(b)), c = zc(new Hf(t, g, [b], k))) : ((f = Q("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new rc, c.Wc.set(d, [i, g, b]), c.a.info("Creating new XDRFrame " + P(d) + "for " + P(b)), c = $c("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:g + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), f.appendChild(c), c = i);
  return c
}
If.prototype.tg = function(a) {
  var b = this.Wc.get(a);
  b || e(Error("Unknown frameId " + P(a)));
  this.Wc.remove(b);
  var c = b[0], a = new Hf(Q("minerva-xdrframe-" + a).contentWindow || (Q("minerva-xdrframe-" + a).contentDocument || Q("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (Q("minerva-xdrframe-" + a).contentDocument || Q("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.X(a)
};
var Kf = new If;
t.__XHRTracker_xdrFrameLoaded = B(Kf.tg, Kf);
var Lf;
Lf = m;
var Mf = Ea();
Mf && (-1 != Mf.indexOf("Firefox") || -1 != Mf.indexOf("Camino") || -1 != Mf.indexOf("iPhone") || -1 != Mf.indexOf("iPod") || -1 != Mf.indexOf("iPad") || -1 != Mf.indexOf("Android") || -1 != Mf.indexOf("Chrome") && (Lf = j));
var Nf = Lf;
function Of(a, b, c, d, g, f) {
  rc.call(this, g, f);
  this.te = a;
  this.Hc = [];
  this.Vd = !!b;
  this.Af = !!c;
  this.qf = !!d;
  for(b = 0;b < a.length;b++) {
    xc(a[b], B(this.$d, this, b, j), B(this.$d, this, b, m))
  }
  0 == a.length && !this.Vd && this.X(this.Hc)
}
D(Of, rc);
Of.prototype.Be = 0;
Of.prototype.$d = function(a, b, c) {
  this.Be++;
  this.Hc[a] = [b, c];
  this.ra || (this.Vd && b ? this.X([a, c]) : this.Af && !b ? this.Xa(c) : this.Be == this.te.length && this.X(this.Hc));
  this.qf && !b && (c = k);
  return c
};
Of.prototype.Xa = function(a) {
  Of.g.Xa.call(this, a);
  db(this.te, function(a) {
    a.cancel()
  })
};
function Pf(a, b) {
  this.sg = a;
  this.we = b
}
Pf.prototype.Tc = 0;
Pf.prototype.fc = 0;
Pf.prototype.Mc = m;
function Qf(a) {
  var b = [];
  if(a.Mc) {
    return[b, 2]
  }
  var c = a.Tc, d = a.sg.responseText;
  for(a.Tc = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var g = d.substr(a.fc, c - a.fc), g = g.replace(/\r$/, "");
    if(g.length > a.we) {
      return a.Mc = j, [b, 2]
    }
    b.push(g);
    a.fc = c += 1
  }
  return a.Tc - a.fc - 1 > a.we ? (a.Mc = j, [b, 2]) : [b, 1]
}
;function Rf(a, b, c) {
  this.C = b;
  this.W = a;
  this.Fc = c
}
D(Rf, L);
s = Rf.prototype;
s.a = Y("cw.net.XHRMaster");
s.Aa = -1;
s.Xc = function(a, b, c) {
  this.Fc.__XHRSlave_makeRequest(this.W, a, b, c)
};
s.ta = o("Aa");
s.ad = function(a, b) {
  1 != b && U(this.a, P(this.W) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  ff(this.C);
  gf(this.C, a)
};
s.bd = function(a) {
  W(this.a, "ongotheaders_: " + P(a));
  var b = k;
  "Content-Length" in a && (b = ee(a["Content-Length"]));
  a = this.C;
  W(a.a, a.l() + " got Content-Length: " + b);
  a.ca == Sf && (b == k && (V(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Tf(a, 2E3 + 1E3 * (b / 3072)))
};
s.cd = function(a) {
  1 != a && W(this.a, this.C.l() + "'s XHR's readyState is " + a);
  this.Aa = a;
  2 <= this.Aa && ff(this.C)
};
s.$c = function() {
  this.C.b()
};
s.c = function() {
  Rf.g.c.call(this);
  delete Uf.ha[this.W];
  this.Fc.__XHRSlave_dispose(this.W);
  delete this.Fc
};
function Vf() {
  this.ha = {}
}
D(Vf, L);
s = Vf.prototype;
s.a = Y("cw.net.XHRMasterTracker");
s.Gc = function(a, b) {
  var c = "_" + ae(), d = new Rf(c, a, b);
  return this.ha[c] = d
};
s.ad = function(a, b, c) {
  if(G) {
    for(var d = [], g = 0, f = b.length;g < f;g++) {
      d[g] = b[g]
    }
    b = d
  }else {
    b = kb(b)
  }
  (d = this.ha[a]) ? d.ad(b, c) : U(this.a, "onframes_: no master for " + P(a))
};
s.bd = function(a, b) {
  var c = this.ha[a];
  c ? c.bd(b) : U(this.a, "ongotheaders_: no master for " + P(a))
};
s.cd = function(a, b) {
  var c = this.ha[a];
  c ? c.cd(b) : U(this.a, "onreadystatechange_: no master for " + P(a))
};
s.$c = function(a) {
  var b = this.ha[a];
  b ? (delete this.ha[b.W], b.$c()) : U(this.a, "oncomplete_: no master for " + P(a))
};
s.c = function() {
  Vf.g.c.call(this);
  for(var a = Za(this.ha);a.length;) {
    a.pop().b()
  }
  delete this.ha
};
var Uf = new Vf;
t.__XHRMaster_onframes = B(Uf.ad, Uf);
t.__XHRMaster_oncomplete = B(Uf.$c, Uf);
t.__XHRMaster_ongotheaders = B(Uf.bd, Uf);
t.__XHRMaster_onreadystatechange = B(Uf.cd, Uf);
function Wf(a, b, c) {
  this.aa = a;
  this.host = b;
  this.port = c
}
function Xf(a, b, c) {
  this.host = a;
  this.port = b;
  this.kg = c
}
function Yf(a, b) {
  b || (b = a);
  this.aa = a;
  this.Ea = b
}
Yf.prototype.F = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  O(this.aa, a, b);
  a.push(", secondaryUrl=");
  O(this.Ea, a, b);
  a.push(">")
};
function Zf(a, b, c, d) {
  this.aa = a;
  this.Ge = b;
  this.Ea = c;
  this.Re = d;
  (!(0 == this.aa.indexOf("http://") || 0 == this.aa.indexOf("https://")) || !(0 == this.Ea.indexOf("http://") || 0 == this.Ea.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Ge.location.href;
  Xa(this.aa, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Re.location.href;
  Xa(this.Ea, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
Zf.prototype.F = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  O(this.aa, a, b);
  a.push(", secondaryUrl=");
  O(this.Ea, a, b);
  a.push(">")
};
var $f = new xf(";)]}");
function cg() {
}
cg.prototype.Xd = r(1);
function dg(a) {
  t.setTimeout(function() {
    v(a.message) && a.stack && (a.message += "\n" + a.stack);
    e(a)
  }, 0)
}
function eg(a) {
  this.gg = a
}
eg.prototype.F = function(a, b) {
  a.push("<UserContext for ");
  O(this.gg, a, b);
  a.push(">")
};
eg.prototype.toString = function() {
  return P(this)
};
function fg(a, b, c, d) {
  Z.call(this, "TransportInfo", [a, b, c, d]);
  this.ja = a;
  this.wh = b;
  this.zh = c;
  this.Ah = d
}
D(fg, Z);
function gg(a, b, c) {
  this.t = a;
  this.hg = b ? b : new cg;
  this.p = c ? c : Cc;
  this.Hb = new Be;
  this.Gb = ae() + ae();
  this.ba = new ke;
  this.Rc = new me;
  this.Ib = k;
  this.uc = [];
  this.mb = new eg(this);
  this.kf = B(this.ng, this);
  H && (this.Ib = hc(t, "load", this.Yf, m, this))
}
D(gg, L);
s = gg.prototype;
s.a = Y("cw.net.ClientStream");
s.re = new je(-1, []);
s.se = new je(-1, []);
s.Of = 50;
s.Nf = 1048576;
s.ed = k;
s.dd = k;
s.fd = k;
s.gd = k;
s.onreset = k;
s.Ee = k;
s.jb = k;
s.sd = m;
s.ld = m;
s.d = "1_UNSTARTED";
s.yd = -1;
s.h = k;
s.s = k;
s.Bb = k;
s.td = 0;
s.Fe = 0;
s.Qe = 0;
s.F = function(a, b) {
  a.push("<ClientStream id=");
  O(this.Gb, a, b);
  a.push(", state=", String(this.d));
  a.push(", primary=");
  O(this.h, a, b);
  a.push(", secondary=");
  O(this.s, a, b);
  a.push(", resetting=");
  O(this.Bb, a, b);
  a.push(">")
};
s.toString = function() {
  return P(this)
};
function hg(a) {
  var b = [-1];
  a.h && b.push(a.h.gb);
  a.s && b.push(a.s.gb);
  return Math.max.apply(Math.max, b)
}
function ig(a) {
  if(!("3_STARTED" > a.d)) {
    jg(a);
    var b = 0 != a.ba.J.r(), c = ne(a.Rc), d = !c.Q(a.se) && !(a.h && c.Q(a.h.eb) || a.s && c.Q(a.s.eb)), g = hg(a);
    if((b = b && g < a.ba.Ia) || d) {
      var f = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.h.Ha ? (X(a.a, "tryToSend_: writing " + f + " to primary"), d && (d = a.h, c != d.eb && (!d.ia && !d.v.length && kg(d), d.v.push(new vf(c)), d.eb = c)), b && lg(a.h, a.ba, g + 1), a.h.ga()) : a.s == k ? a.sd ? (X(a.a, "tryToSend_: creating secondary to send " + f), a.s = mg(a, m, j), a.s && (b && lg(a.s, a.ba, g + 1), a.s.ga())) : (X(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.ld = j) : X(a.a, "tryToSend_: need to send " + f + ", but can't right now")
    }
  }
}
function jg(a) {
  a.jb != k && (a.p.B.clearTimeout(a.jb), a.jb = k)
}
s.ng = function() {
  this.jb = k;
  ig(this)
};
function ng(a) {
  a.jb == k && (a.jb = a.p.B.setTimeout(a.kf, 6))
}
s.Yf = function() {
  this.Ib = k;
  if(this.h && this.h.bb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.h;
    a.wc = j;
    a.b()
  }
  this.s && this.s.bb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.s, a.wc = j, a.b())
};
function og(a, b) {
  var c;
  v(c) || (c = j);
  "3_STARTED" < a.d && e(Error("sendString: Can't send in state " + a.d));
  c && (y(b) || e(Error("sendString: not a string: " + P(b))), /^([ -~]*)$/.test(b) || e(Error("sendString: string has illegal chars: " + P(b))));
  a.ba.append(b);
  ng(a)
}
function mg(a, b, c) {
  var d;
  a.t instanceof Zf ? d = 1 == a.hg.Xd() ? Sf : pg : a.t instanceof Xf ? d = qg : e(Error("Don't support endpoint " + P(a.t)));
  a.yd += 1;
  b = new rg(a.p, a, a.yd, d, a.t, b);
  X(a.a, "Created: " + b.l());
  if(c) {
    if(a.fd) {
      c = new fg(b.ja, b.la, b.Ba, b.Ha);
      try {
        a.fd.call(a.mb, c)
      }catch(g) {
        V(a.a, "ontransportcreated raised uncaught exception", g), dg(g)
      }
    }
    if(sg(a)) {
      return k
    }
  }
  a.Hb.add(b);
  return b
}
function tg(a, b, c) {
  var d = new ug(a.p, a, b, c);
  X(a.a, "Created: " + d.l() + ", delay=" + b + ", times=" + c);
  a.Hb.add(d);
  return d
}
function vg(a, b) {
  a.Hb.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  W(a.a, "Offline: " + b.l());
  var c = "4_RESETTING" == a.d && b.df;
  if(b instanceof rg && !c) {
    if(a.gd) {
      var d = new fg(b.ja, b.la, b.Ba, b.Ha);
      try {
        a.gd.call(a.mb, d)
      }catch(g) {
        V(a.a, "ontransportdestroyed raised uncaught exception", g), dg(g)
      }
    }
    if(sg(a)) {
      return
    }
  }
  a.td = b.ya ? a.td + b.ya : 0;
  1 <= a.td && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), wg(a, "stream penalty reached limit", m), a.b());
  if("3_STARTED" < a.d) {
    c ? (W(a.a, "Disposing because resettingTransport_ is done."), a.b()) : W(a.a, "Not creating a transport because ClientStream is in state " + a.d)
  }else {
    c = b instanceof ug;
    if(!c && b.wc) {
      var f = H ? Nf ? [0, 1] : [9, 20] : [0, 0], c = f[0], d = f[1];
      X(a.a, "getDelayForNextTransport_: " + P({delay:c, times:d}))
    }else {
      if(d = b.Ld(), b == a.h ? d ? f = ++a.Fe : c || (f = a.Fe = 0) : d ? f = ++a.Qe : c || (f = a.Qe = 0), c || !f) {
        d = c = 0, X(a.a, "getDelayForNextTransport_: " + P({count:f, delay:c, times:d}))
      }else {
        var i = 2E3 * Math.min(f, 3), l = Math.floor(4E3 * Math.random()) - 2E3, n = Math.max(0, b.$e - b.zd), d = (c = Math.max(0, i + l - n)) ? 1 : 0;
        X(a.a, "getDelayForNextTransport_: " + P({count:f, base:i, variance:l, oldDuration:n, delay:c, times:d}))
      }
    }
    c = [c, d];
    f = c[0];
    c = c[1];
    if(b == a.h) {
      a.h = k;
      if(c) {
        a.h = tg(a, f, c)
      }else {
        f = hg(a);
        a.h = mg(a, j, j);
        if(!a.h) {
          return
        }
        lg(a.h, a.ba, f + 1)
      }
      a.h.ga()
    }else {
      b == a.s && (a.s = k, c ? (a.s = tg(a, f, c), a.s.ga()) : ig(a))
    }
  }
}
function wg(a, b, c) {
  if(a.onreset) {
    try {
      a.onreset.call(a.mb, b, c)
    }catch(d) {
      V(a.a, "onreset raised uncaught exception", d), dg(d)
    }
  }
}
s.reset = function(a) {
  "3_STARTED" < this.d && e(Error("reset: Can't send reset in state " + this.d));
  jg(this);
  0 != this.ba.J.r() && V(this.a, "reset: strings in send queue will never be sent: " + P(this.ba));
  this.d = "4_RESETTING";
  this.h && this.h.Ha ? (this.a.info("reset: Sending ResetFrame over existing primary."), xg(this.h, a), this.h.ga()) : (this.h && (W(this.a, "reset: Disposing primary before sending ResetFrame."), this.h.b()), this.s && (W(this.a, "reset: Disposing secondary before sending ResetFrame."), this.s.b()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Bb = mg(this, m, m), xg(this.Bb, a), this.Bb.ga());
  wg(this, a, j)
};
function sg(a) {
  return"4_RESETTING" == a.d || a.ea
}
s.Sd = function(a) {
  U(this.a, "Failed to start " + P(this) + "; error was " + P(a.message));
  this.b();
  return k
};
s.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  "1_UNSTARTED" != this.d && e(Error("ClientStream.start: " + P(this) + " already started"));
  this.dd && this.dd(this);
  this.d = "2_WAITING_RESOURCES";
  if(this.t instanceof Yf) {
    var a = Jf(this.t.aa, this), b = Jf(this.t.Ea, this), a = new Of([a, b], m, j);
    xc(a, function(a) {
      return fb(a, function(a) {
        return a[1]
      })
    }, k, h);
    b = B(this.yf, this);
    xc(a, b, k, h);
    b = B(this.Sd, this);
    xc(a, k, b, h)
  }else {
    if(this.t instanceof Wf) {
      if(ie) {
        this.Ud()
      }else {
        a = this.p;
        b = this.t.aa;
        if(lf.length) {
          a = mf()
        }else {
          b = new af(b + "FlashConnector.swf?cb=4bdfc178fc0e508c0cd5efc3fdb09920");
          b.Hd = "#777777";
          bf(b, 300, 30);
          var c = Q("minerva-elements");
          c || e(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
          var d = Q("minerva-elements-FlashConnectorSwf");
          d || (d = $c("div", {id:"minerva-elements-FlashConnectorSwf"}), c.appendChild(d));
          var g = a.B, f;
          var a = d, i, l = function() {
            i && delete t.__loadFlashObject_callbacks[i]
          };
          if(G && !I("1.8.1.20")) {
            f = Ac(new cf("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
          }else {
            if(0 <= za(Ae, "9")) {
              var n;
              i = "_" + ae();
              var p = new rc(l);
              t.__loadFlashObject_callbacks[i] = function() {
                g.setTimeout(function() {
                  l();
                  p.X(Q(n))
                }, 0)
              };
              b.Sb.set("onloadcallback", '__loadFlashObject_callbacks["' + i + '"]()');
              n = td(b);
              vd(b, a);
              f = p
            }else {
              f = Ac(new cf("Need Flash Player 9+; had " + (Ae ? Ae : "none")))
            }
          }
          var w = g.setTimeout(function() {
            f.cancel()
          }, 8E3), a = function(a) {
            g.clearTimeout(w);
            return a
          };
          xc(f, a, a, h);
          he = f;
          a = mf();
          xc(he, nf, of)
        }
        var q = this;
        xc(a, function(a) {
          ie || (ie = new jf(q.p, a));
          return k
        }, k, h);
        b = B(this.Ud, this);
        xc(a, b, k, h);
        b = B(this.Sd, this);
        xc(a, k, b, h)
      }
    }else {
      yg(this)
    }
  }
};
s.yf = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Rb, g = a[1].Rb;
  this.uc.push(a[0]);
  this.uc.push(a[1]);
  this.t = new Zf(d, b, g, c);
  yg(this)
};
s.Ud = function() {
  this.t = new Xf(this.t.host, this.t.port, ie);
  yg(this)
};
function yg(a) {
  a.d = "3_STARTED";
  a.h = mg(a, j, j);
  a.h && (lg(a.h, a.ba, k), a.h.ga())
}
s.c = function() {
  this.a.info(P(this) + " in disposeInternal.");
  jg(this);
  this.d = "5_DISCONNECTED";
  for(var a = this.Hb.D(), b = 0;b < a.length;b++) {
    a[b].b()
  }
  for(a = 0;a < this.uc.length;a++) {
    jb(this.uc[a].vd, this)
  }
  H && this.Ib && (kc(this.Ib), this.Ib = k);
  this.Ee && this.Ee.call(this.mb);
  delete this.Hb;
  delete this.h;
  delete this.s;
  delete this.Bb;
  delete this.mb;
  gg.g.c.call(this)
};
var Sf = 1, pg = 2, qg = 3;
function rg(a, b, c, d, g, f) {
  this.p = a;
  this.A = b;
  this.ja = c;
  this.ca = d;
  this.t = g;
  this.v = [];
  this.la = f;
  this.Ha = !this.bb();
  this.Ba = this.ca != Sf;
  this.jf = B(this.ig, this)
}
D(rg, L);
s = rg.prototype;
s.a = Y("cw.net.ClientTransport");
s.k = k;
s.zd = k;
s.$e = k;
s.jc = k;
s.ia = m;
s.rc = m;
s.eb = k;
s.Tb = 0;
s.gb = -1;
s.hc = -1;
s.df = m;
s.wc = m;
s.ya = 0;
s.ub = m;
s.F = function(a) {
  a.push("<ClientTransport #", String(this.ja), ", becomePrimary=", String(this.la), ">")
};
s.l = function() {
  return(this.la ? "Prim. T#" : "Sec. T#") + this.ja
};
s.Ld = function() {
  return!(!this.ub && this.Tb)
};
s.bb = function() {
  return this.ca == Sf || this.ca == pg
};
function zg(a, b) {
  K.sort.call(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  } || nb);
  a: {
    var c = a.A, d = !a.Ba, g, f = c.Rc;
    g = c.Of;
    for(var i = c.Nf, l = [], n = m, p = 0, w = b.length;p < w;p++) {
      var q = b[p], x = q[0], q = q[1];
      if(x == f.Oa + 1) {
        f.Oa += 1;
        for(l.push(q);;) {
          x = f.Oa + 1;
          q = f.Ga.get(x, oe);
          if(q === oe) {
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
          var A = ge(q);
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
        if(c.ed) {
          try {
            c.ed.call(c.mb, l)
          }catch(Gc) {
            V(c.a, "onstring raised uncaught exception", Gc), dg(Gc)
          }
        }
        if(sg(c)) {
          break a
        }
      }
    }
    d || ng(c);
    !sg(c) && g && (U(a.a, a.l() + "'s peer caused rwin overflow."), a.b())
  }
}
function Ag(a, b, c) {
  try {
    var d = Gf(b);
    a.Tb += 1;
    W(a.a, a.l() + " RECV " + P(d));
    var g;
    1 == a.Tb && !d.Q($f) && a.bb() ? (V(a.a, a.l() + " is closing soon because got bad preamble: " + P(d)), g = j) : g = m;
    if(g) {
      return j
    }
    if(d instanceof wf) {
      if(!/^([ -~]*)$/.test(d.wd)) {
        return a.ub = j
      }
      a.hc += 1;
      c.push([a.hc, d.wd])
    }else {
      if(d instanceof vf) {
        var f = a.A, i = d.Ca;
        f.re = i;
        var l = f.ba, n = i.Wa, c = m;
        n > l.Ia && (c = j);
        for(var p = le(l).concat(), d = 0;d < p.length;d++) {
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
          return V(a.a, a.l() + " is closing soon because got bad SackFrame"), a.ub = j
        }
      }else {
        if(d instanceof yf) {
          a.hc = d.Se - 1
        }else {
          if(d instanceof Af) {
            a.A.se = d.qe
          }else {
            if(d instanceof Cf) {
              return X(a.a, a.l() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof Ff) {
              return a.ub = j, "stream_attach_failure" == d.reason ? a.ya += 1 : "acked_unsent_strings" == d.reason && (a.ya += 0.5), X(a.a, a.l() + " is closing soon because got " + P(d)), j
            }
            if(!(d instanceof xf)) {
              if(d instanceof Bf) {
                var A = a.A, Gc = !a.Ba;
                X(A.a, "Stream is now confirmed to exist at server.");
                A.sd = j;
                A.ld && !Gc && (A.ld = m, ig(A))
              }else {
                if(c.length) {
                  zg(a, c);
                  if(!ga(c)) {
                    for(var Zd = c.length - 1;0 <= Zd;Zd--) {
                      delete c[Zd]
                    }
                  }
                  c.length = 0
                }
                if(d instanceof Df) {
                  var ag = a.A;
                  wg(ag, d.Ke, d.Gd);
                  ag.b();
                  return j
                }
                e(Error(a.l() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(bg) {
    return bg instanceof $ || e(bg), V(a.a, a.l() + " is closing soon because got InvalidFrame: " + P(b)), a.ub = j
  }
  return m
}
function gf(a, b) {
  a.rc = j;
  try {
    for(var c = m, d = [], g = 0, f = b.length;g < f;g++) {
      if(a.ea) {
        a.a.info(a.l() + " returning from loop because we're disposed.");
        return
      }
      if(c = Ag(a, b[g], d)) {
        break
      }
    }
    d.length && zg(a, d);
    a.rc = m;
    a.v.length && a.ga();
    c && (X(a.a, a.l() + " closeSoon is true.  Frames were: " + P(b)), a.b())
  }finally {
    a.rc = m
  }
}
s.ig = function() {
  V(this.a, this.l() + " timed out due to lack of connection or no data being received.");
  this.b()
};
function Bg(a) {
  a.jc != k && (a.p.B.clearTimeout(a.jc), a.jc = k)
}
function Tf(a, b) {
  Bg(a);
  b = Math.round(b);
  a.jc = a.p.B.setTimeout(a.jf, b);
  W(a.a, a.l() + "'s receive timeout set to " + b + " ms.")
}
function ff(a) {
  a.ca != Sf && (a.ca == qg || a.ca == pg ? Tf(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ca)))
}
function kg(a) {
  var b = new tf;
  b.ja = a.ja;
  b.He = 2;
  b.he = 2;
  a.A.sd || (b.Me = j);
  b.Gb = a.A.Gb;
  b.ud = a.Ba;
  b.ud && (b.ze = 4096);
  b.xe = 3E5;
  b.ve = a.Ba ? Math.floor(10) : 0;
  b.af = m;
  a.la && (b.Xe = k, b.Yc = Math.floor((a.Ba ? 358E4 : 25E3) / 1E3));
  b.Ca = ne(a.A.Rc);
  b.dc = a.A.re;
  a.v.push(b);
  a.eb = b.Ca
}
function hf(a, b) {
  b && (a.ya += 0.5);
  a.b()
}
s.ga = function() {
  this.ia && !this.Ha && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.rc) {
    X(this.a, this.l() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.ia;
    this.ia = j;
    !a && !this.v.length && kg(this);
    for(a = 0;a < this.v.length;a++) {
      W(this.a, this.l() + " SEND " + P(this.v[a]))
    }
    if(this.bb()) {
      for(var a = [], b = 0, c = this.v.length;b < c;b++) {
        this.v[b].T(a), a.push("\n")
      }
      this.v = [];
      a = a.join("");
      b = this.la ? this.t.aa : this.t.Ea;
      this.k = Uf.Gc(this, this.la ? this.t.Ge : this.t.Re);
      this.zd = this.p.B === qc ? C() : this.p.B.getTime();
      this.k.Xc(b, "POST", a);
      Tf(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Ba ? 0 : this.la ? 25E3 : 0))
    }else {
      if(this.ca == qg) {
        a = [];
        b = 0;
        for(c = this.v.length;b < c;b++) {
          a.push(this.v[b].P())
        }
        this.v = [];
        this.k ? this.k.Jb(a) : (b = this.t, this.k = new kf(this), c = b.kg.Gc(this.k), this.k.qc = c, this.zd = this.p.B === qc ? C() : this.p.B.getTime(), this.k.Ec(b.host, b.port), this.k.ea || (this.k.Jb(a), this.k.ea || Tf(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.ca))
      }
    }
  }
};
function lg(a, b, c) {
  !a.ia && !a.v.length && kg(a);
  for(var d = Math.max(c, a.gb + 1), g = le(b), c = [], f = 0;f < g.length;f++) {
    var i = g[f];
    (d == k || i >= d) && c.push([i, b.J.get(i)[0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    f = c[b], g = f[0], f = f[1], (-1 == a.gb || a.gb + 1 != g) && a.v.push(new yf(g)), a.v.push(new wf(f)), a.gb = g
  }
}
s.c = function() {
  this.a.info(this.l() + " in disposeInternal.");
  rg.g.c.call(this);
  this.$e = this.p.B === qc ? C() : this.p.B.getTime();
  this.v = [];
  Bg(this);
  this.k && this.k.b();
  var a = this.A;
  this.A = k;
  vg(a, this)
};
function xg(a, b) {
  !a.ia && !a.v.length && kg(a);
  a.v.push(new Df(b, j));
  a.df = j
}
function ug(a, b, c, d) {
  this.p = a;
  this.A = b;
  this.Rd = c;
  this.Nd = d
}
D(ug, L);
s = ug.prototype;
s.ia = m;
s.Ha = m;
s.Yb = k;
s.eb = k;
s.a = Y("cw.net.DoNothingTransport");
function Cg(a) {
  a.Yb = a.p.B.setTimeout(function() {
    a.Yb = k;
    a.Nd--;
    a.Nd ? Cg(a) : a.b()
  }, a.Rd)
}
s.ga = function() {
  this.ia && !this.Ha && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.ia = j;
  Cg(this)
};
s.F = function(a) {
  a.push("<DoNothingTransport delay=", String(this.Rd), ">")
};
s.bb = r(m);
s.l = r("Wast. T");
s.Ld = r(m);
s.c = function() {
  this.a.info(this.l() + " in disposeInternal.");
  ug.g.c.call(this);
  this.Yb != k && this.p.B.clearTimeout(this.Yb);
  var a = this.A;
  this.A = k;
  vg(a, this)
};
/*

 linkify - v0.3 - 6/27/2009
 http://benalman.com/code/test/js-linkify/

 Copyright (c) 2009 "Cowboy" Ben Alman
 Licensed under the MIT license
 http://benalman.com/about/license/

 Some regexps adapted from http://userscripts.org/scripts/review/7122
*/
var Dg, Eg, Fg, Gg;
Dg = RegExp("(?:\\b[a-z\\d.-]+://[^<>\\s]+|\\b(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:[;/][^#?<>\\s]*)?(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w)|(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w))", 
"ig");
Eg = /^[a-z\d.-]+:\/\//i;
Fg = {"'":"`", ">":"<", ")":"(", "]":"[", "}":"{", "\u00bb":"\u00ab", "\u203a":"\u2039"};
Gg = {X:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, Je:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
function Hg(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
;function Ig() {
}
Ig.prototype.Kb = k;
var Jg;
function Kg() {
}
D(Kg, Ig);
function Lg(a) {
  return(a = Mg(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Ng(a) {
  var b = {};
  Mg(a) && (b[0] = j, b[1] = j);
  return b
}
function Mg(a) {
  if(!a.ie && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.ie = d
      }catch(g) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.ie
}
Jg = new Kg;
function Og(a) {
  this.headers = new tb;
  this.nb = a || k
}
D(Og, pc);
Og.prototype.a = Y("goog.net.XhrIo");
var Pg = /^https?$/i;
s = Og.prototype;
s.ka = m;
s.i = k;
s.vc = k;
s.Vc = "";
s.pe = "";
s.wb = 0;
s.xb = "";
s.Ic = m;
s.ac = m;
s.Qc = m;
s.La = m;
s.sc = 0;
s.Ta = k;
s.Pe = "";
s.qg = m;
s.send = function(a, b, c, d) {
  this.i && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Vc = a;
  this.xb = "";
  this.wb = 0;
  this.pe = b;
  this.Ic = m;
  this.ka = j;
  this.i = this.nb ? Lg(this.nb) : Lg(Jg);
  this.vc = this.nb ? this.nb.Kb || (this.nb.Kb = Ng(this.nb)) : Jg.Kb || (Jg.Kb = Ng(Jg));
  this.i.onreadystatechange = B(this.De, this);
  try {
    W(this.a, Qg(this, "Opening Xhr")), this.Qc = j, this.i.open(b, a, j), this.Qc = m
  }catch(g) {
    W(this.a, Qg(this, "Error opening Xhr: " + g.message));
    Rg(this, g);
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
  this.Pe && (this.i.responseType = this.Pe);
  "withCredentials" in this.i && (this.i.withCredentials = this.qg);
  try {
    this.Ta && (qc.clearTimeout(this.Ta), this.Ta = k), 0 < this.sc && (W(this.a, Qg(this, "Will abort after " + this.sc + "ms if incomplete")), this.Ta = qc.setTimeout(B(this.jg, this), this.sc)), W(this.a, Qg(this, "Sending request")), this.ac = j, this.i.send(a), this.ac = m
  }catch(i) {
    W(this.a, Qg(this, "Send error: " + i.message)), Rg(this, i)
  }
};
s.jg = function() {
  "undefined" != typeof ca && this.i && (this.xb = "Timed out after " + this.sc + "ms, aborting", this.wb = 8, W(this.a, Qg(this, this.xb)), this.dispatchEvent("timeout"), this.abort(8))
};
function Rg(a, b) {
  a.ka = m;
  a.i && (a.La = j, a.i.abort(), a.La = m);
  a.xb = b;
  a.wb = 5;
  Sg(a);
  Tg(a)
}
function Sg(a) {
  a.Ic || (a.Ic = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
s.abort = function(a) {
  this.i && this.ka && (W(this.a, Qg(this, "Aborting")), this.ka = m, this.La = j, this.i.abort(), this.La = m, this.wb = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Tg(this))
};
s.c = function() {
  this.i && (this.ka && (this.ka = m, this.La = j, this.i.abort(), this.La = m), Tg(this, j));
  Og.g.c.call(this)
};
s.De = function() {
  !this.Qc && !this.ac && !this.La ? this.Sf() : Ug(this)
};
s.Sf = function() {
  Ug(this)
};
function Ug(a) {
  if(a.ka && "undefined" != typeof ca) {
    if(a.vc[1] && 4 == a.ta() && 2 == Vg(a)) {
      W(a.a, Qg(a, "Local request error detected and ignored"))
    }else {
      if(a.ac && 4 == a.ta()) {
        qc.setTimeout(B(a.De, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.ta()) {
          W(a.a, Qg(a, "Request complete"));
          a.ka = m;
          try {
            var b = Vg(a), c, d;
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
                var f = String(a.Vc).match(Wa)[1] || k;
                if(!f && self.location) {
                  var i = self.location.protocol, f = i.substr(0, i.length - 1)
                }
                g = !Pg.test(f ? f.toLowerCase() : "")
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
                W(a.a, "Can not get status: " + n.message), l = ""
              }
              a.xb = l + " [" + Vg(a) + "]";
              Sg(a)
            }
          }finally {
            Tg(a)
          }
        }
      }
    }
  }
}
function Tg(a, b) {
  if(a.i) {
    var c = a.i, d = a.vc[0] ? u : k;
    a.i = k;
    a.vc = k;
    a.Ta && (qc.clearTimeout(a.Ta), a.Ta = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(g) {
      U(a.a, "Problem encountered resetting onreadystatechange: " + g.message)
    }
  }
}
s.le = function() {
  return!!this.i
};
s.ta = function() {
  return this.i ? this.i.readyState : 0
};
function Vg(a) {
  try {
    return 2 < a.ta() ? a.i.status : -1
  }catch(b) {
    return V(a.a, "Can not get status: " + b.message), -1
  }
}
s.getResponseHeader = function(a) {
  return this.i && 4 == this.ta() ? this.i.getResponseHeader(a) : h
};
function Qg(a, b) {
  return b + " [" + a.pe + " " + a.Vc + " " + Vg(a) + "]"
}
;var Wg = !(F || H && !I("420+"));
function Xg(a, b) {
  this.tc = a;
  this.W = b
}
D(Xg, L);
s = Xg.prototype;
s.k = k;
s.Aa = -1;
s.Yd = m;
s.ge = "Content-Length Server Date Expires Keep-Alive Content-Type Transfer-Encoding Cache-Control".split(" ");
function Yg(a) {
  var b = Qf(a.Pd), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.W, c, b), 1 != b && a.b()) : a.b()
}
s.Jf = function() {
  Yg(this);
  if(!this.ea) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.W);
    this.b()
  }
};
s.Wf = function() {
  var a = t.parent;
  if(a) {
    this.Aa = this.k.ta();
    if(2 <= this.Aa && !this.Yd) {
      for(var b = new tb, c = this.ge.length;c--;) {
        var d = this.ge[c];
        try {
          b.set(d, this.k.i.getResponseHeader(d))
        }catch(g) {
        }
      }
      if(b.r() && (this.Yd = j, a.__XHRMaster_ongotheaders(this.W, xb(b)), this.ea)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.W, this.Aa);
    Wg && 3 == this.Aa && Yg(this)
  }else {
    this.b()
  }
};
s.Xc = function(a, b, c) {
  this.k = new Og;
  N(this.k, "readystatechange", B(this.Wf, this));
  N(this.k, "complete", B(this.Jf, this));
  this.k.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Pd = new Pf(this.k.i, 1048576)
};
s.c = function() {
  Xg.g.c.call(this);
  delete this.Pd;
  this.k && this.k.b();
  delete this.tc.Fb[this.W];
  delete this.tc
};
function Zg() {
  this.Fb = {}
}
D(Zg, L);
Zg.prototype.Mf = function(a, b, c, d) {
  var g = new Xg(this, a);
  this.Fb[a] = g;
  g.Xc(b, c, d)
};
Zg.prototype.uf = function(a) {
  (a = this.Fb[a]) && a.b()
};
Zg.prototype.c = function() {
  Zg.g.c.call(this);
  for(var a = Za(this.Fb);a.length;) {
    a.pop().b()
  }
  delete this.Fb
};
var $g = new Zg;
t.__XHRSlave_makeRequest = B($g.Mf, $g);
t.__XHRSlave_dispose = B($g.uf, $g);
var ah = Y("cw.net.demo");
function bh() {
}
bh.prototype.Xd = function() {
  return Boolean(Number((new yb(document.location)).K.get("httpStreaming", "0"))) ? 2 : 1
};
function ch() {
  this.Le = C()
}
var dh = new ch;
ch.prototype.set = ba("Le");
ch.prototype.reset = function() {
  this.set(C())
};
ch.prototype.get = o("Le");
function eh(a) {
  this.jd = a || "";
  this.eg = dh
}
eh.prototype.ag = j;
eh.prototype.cg = j;
eh.prototype.bg = j;
eh.prototype.Te = m;
function fh(a) {
  return 10 > a ? "0" + a : String(a)
}
function gh(a, b) {
  var c = (a.Ye - b) / 1E3, d = c.toFixed(3), g = 0;
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
function hh(a) {
  eh.call(this, a)
}
D(hh, eh);
hh.prototype.Te = j;
function ih(a) {
  this.Zc = a || 100;
  this.ma = []
}
s = ih.prototype;
s.yb = 0;
s.add = function(a) {
  this.ma[this.yb] = a;
  this.yb = (this.yb + 1) % this.Zc
};
s.get = function(a) {
  a = jh(this, a);
  return this.ma[a]
};
s.set = function(a, b) {
  a = jh(this, a);
  this.ma[a] = b
};
s.r = function() {
  return this.ma.length
};
s.Na = function() {
  return 0 == this.ma.length
};
s.clear = function() {
  this.yb = this.ma.length = 0
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
function jh(a, b) {
  b >= a.ma.length && e(Error("Out of bounds exception"));
  return a.ma.length < a.Zc ? b : (a.yb + Number(b)) % a.Zc
}
;function kh(a, b) {
  this.ua = a || "";
  this.jd = b || "";
  this.hb = [];
  this.mc = new ih(lh);
  this.Vf = B(this.gf, this);
  this.Cf = new hh(this.jd);
  this.zf = {};
  if(j != this.me) {
    this.me = j;
    var c = $e(), d = this.Vf;
    c.vb || (c.vb = []);
    c.vb.push(d)
  }
  this.rb = "1" == mh(this.ua, "enabled");
  t.setInterval(B(this.Zf, this), 7500)
}
var lh = 500;
s = kh.prototype;
s.cf = "LOGGING";
s.wf = m;
s.w = k;
s.Dd = m;
s.me = m;
s.Id = k;
s.Uc = C();
s.Ma = function() {
  this.rb && nh(this)
};
s.isEnabled = o("rb");
s.oc = function(a) {
  (this.rb = a) && nh(this);
  oh(this, "enabled", a ? "1" : "0")
};
function ph(a) {
  return!!a.w && !a.w.closed
}
s.nf = function() {
  this.mc.clear();
  ph(this) && this.Fd()
};
s.gf = function(a) {
  if(!this.zf[a.ue]) {
    var b = this.Cf, c;
    switch(a.V.value) {
      case Le.value:
        c = "dbg-sh";
        break;
      case Me.value:
        c = "dbg-sev";
        break;
      case Ne.value:
        c = "dbg-w";
        break;
      case Oe.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.jd, " ");
    if(b.ag) {
      var g = new Date(a.Ye);
      d.push("[", fh(g.getFullYear() - 2E3) + fh(g.getMonth() + 1) + fh(g.getDate()) + " " + fh(g.getHours()) + ":" + fh(g.getMinutes()) + ":" + fh(g.getSeconds()) + "." + fh(Math.floor(g.getMilliseconds() / 10)), "] ")
    }
    b.cg && d.push("[", ya(gh(a, b.eg.get())), "s] ");
    b.bg && d.push("[", E(a.ue), "] ");
    d.push('<span class="', c, '">', sa(ya(E(a.ye))));
    b.Te && a.Lc && d.push("<br>", sa(ya(a.Kc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.rb ? (nh(this), this.mc.add(b), qh(this, b)) : this.mc.add(b);
    this.wf && a.V.value >= Me.value && this.oc(j)
  }
};
function qh(a, b) {
  a.hb.push(b);
  t.clearTimeout(a.Id);
  750 < C() - a.Uc ? a.Ed() : a.Id = t.setTimeout(B(a.Ed, a), 250)
}
s.Ed = function() {
  this.Uc = C();
  if(ph(this)) {
    var a = this.w.document.body, a = a && 100 >= a.scrollHeight - (a.scrollTop + a.clientHeight);
    this.w.document.write(this.hb.join(""));
    this.hb.length = 0;
    a && this.w.scrollTo(0, 1E6)
  }
};
function rh(a) {
  for(var b = a.mc.D(), c = 0;c < b.length;c++) {
    qh(a, b[c])
  }
}
function nh(a) {
  if(!ph(a) && !a.Dd) {
    var b = mh(a.ua, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), g = Number(b[2]), b = Number(b[3]);
    a.Dd = j;
    a.w = window.open("", F ? a.ua.replace(/[\s\-\.\,]/g, "_") : a.ua, "width=" + g + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    !a.w && !a.dg && (alert("Logger popup was blocked"), a.dg = j);
    a.Dd = m;
    a.w && a.Fd()
  }
}
s.Vb = r("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
s.Fd = function() {
  ph(this) && (this.w.document.open(), qh(this, "<style>" + this.Vb() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.cf + "<br><small>Logger: " + this.ua + "</small></div><hr>"), rh(this))
};
function oh(a, b, c) {
  b += a.ua;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(C() + 2592E6)).toUTCString()
}
function mh(a, b, c) {
  var a = b + a, b = String(document.cookie), d = b.indexOf(a + "=");
  return-1 != d ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, -1 == c ? b.length : c))) : c || ""
}
s.Zf = function() {
  ph(this) && oh(this, "dbg", (this.w.screenX || this.w.screenLeft || 0) + "," + (this.w.screenY || this.w.screenTop || 0) + "," + (this.w.outerWidth || 800) + "," + (this.w.outerHeight || 500))
};
function sh(a, b) {
  if(th) {
    var c = uh(), d;
    for(d in c) {
      var c = d.replace("fancywindow.sel.", ""), c = Y(c), g = c.V, f = window.localStorage.getItem(d).toString();
      (!g || g.toString() != f) && c.kb(Ve(f))
    }
  }
  kh.call(this, a, b)
}
D(sh, kh);
var th;
a: {
  try {
    th = !!window.localStorage.getItem;
    break a
  }catch(vh) {
  }
  th = m
}
s = sh.prototype;
s.Ed = function() {
  this.Uc = C();
  if(ph(this)) {
    for(var a = this.H.f("log"), b = 100 >= a.scrollHeight - (a.scrollTop + a.offsetHeight), c = 0;c < this.hb.length;c++) {
      var d = this.H.n("div", "logmsg");
      d.innerHTML = this.hb[c];
      a.appendChild(d)
    }
    this.hb.length = 0;
    this.Oe();
    b && (a.scrollTop = a.scrollHeight)
  }
};
s.Fd = function() {
  if(ph(this)) {
    var a = this.w.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.ua + "</title><style>" + this.Vb() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.ua + "</b></p><p>" + this.cf + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (F ? a.body : this.w).onresize = B(this.Oe, this);
    this.H = new Xc(a);
    this.H.f("openbutton").onclick = B(this.Tf, this);
    this.H.f("closebutton").onclick = B(this.of, this);
    this.H.f("clearbutton").onclick = B(this.nf, this);
    this.H.f("exitbutton").onclick = B(this.xf, this);
    rh(this)
  }
};
s.Tf = function() {
  var a = this.H.f("optionsarea");
  a.innerHTML = "";
  for(var b = wh(), c = this.H, d = 0;d < b.length;d++) {
    var g = Y(b[d]), g = c.n("div", {}, xh(this, "sel" + b[d], g.V ? g.V.name : "INHERIT"), c.n("span", {}, b[d] || "(root)"));
    a.appendChild(g)
  }
  this.H.f("options").style.display = "block";
  return m
};
function xh(a, b, c) {
  for(var a = a.H, b = a.n("select", {id:b}), d = 0;d < Te.length;d++) {
    var g = Te[d], f = a.n("option", {}, g.name);
    c == g.name && (f.selected = j);
    b.appendChild(f)
  }
  b.appendChild(a.n("option", {selected:"INHERIT" == c}, "INHERIT"));
  return b
}
s.of = function() {
  this.H.f("options").style.display = "none";
  for(var a = wh(), b = this.H, c = 0;c < a.length;c++) {
    var d = Y(a[c]), g = b.f("sel" + a[c]), g = g.options[g.selectedIndex].text;
    "INHERIT" == g ? d.kb(k) : d.kb(Ve(g))
  }
  if(th) {
    a = wh();
    b = uh();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], g = Y(a[c]).V, d in b ? g ? window.localStorage.getItem(d) != g.name && window.localStorage.setItem(d, g.name) : window.localStorage.removeItem(d) : g && window.localStorage.setItem(d, g.name)
    }
  }
  return m
};
s.Oe = function() {
  var a = this.H, b = a.f("log"), c = a.f("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.fa.body.offsetHeight - c.offsetHeight - (F ? 4 : 0) + "px"
};
s.xf = function() {
  this.oc(m);
  this.w && this.w.close()
};
s.Vb = function() {
  return sh.g.Vb.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function uh() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != k && 0 == d.lastIndexOf("fancywindow.sel.", 0) && (a[d] = j)
  }
  return a
}
function wh() {
  var a = $a(Xe);
  a.sort();
  return a
}
;var yh, zh = Y("ljstream.logger");
window.onerror = function(a, b, c) {
  U(zh, "window.onerror: message: " + P(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Ah() {
}
Ah.prototype.Ve = function(a) {
  this.A = a;
  og(this.A, "subprotocol:ljstream");
  Bh(this)
};
Ah.prototype.Ue = function(a, b) {
  zh.info("streamReset: reasonString=" + P(a) + ", applicationLevel=" + b);
  Ch("Disconnected from server.  Try reloading this page.");
  Dh = k
};
function Bh(a) {
  zh.info("Sending preferences to server");
  og(a.A, Ec(["SetPreferences", {include_russian_posts:Q("include_russian_posts").checked}]))
}
Ah.prototype.We = function(a) {
  var a = Hg(a), b = a[1];
  if("NewPost" == a[0]) {
    var a = b.title, c = b.url, b = b.body;
    (a = ra(a)) || (a = "[No title]");
    var b = E(b), d;
    d = d || {};
    var g = [], f, i;
    for(i in Gg) {
      v(d[i]) || (d[i] = Gg[i])
    }
    for(;i = Dg.exec(b);) {
      i = i[0];
      var l = Dg.lastIndex, n = l - i.length;
      if(!/[\/:]/.test(b.charAt(n - 1))) {
        do {
          var p = i, w = i.substr(-1), q = Fg[w];
          if(q && (q = i.match(RegExp("\\" + q + "(?!$)", "g")), w = i.match(RegExp("\\" + w, "g")), (q ? q.length : 0) < (w ? w.length : 0))) {
            i = i.substr(0, i.length - 1), l--
          }
          d.Je && (i = i.replace(d.Je, function(a) {
            l -= a.length;
            return""
          }))
        }while(i.length && i !== p);
        p = i;
        Eg.test(p) || (p = (-1 !== p.indexOf("@") ? !p.indexOf("mailto:") ? "" : "mailto:" : !p.indexOf("irc.") ? "irc://" : !p.indexOf("ftp.") ? "ftp://" : "http://") + p);
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
    a = $c("span", {}, $c("a", {href:c, "class":"ljpost-title-link"}, a), $c("span", {}, "\u00a0"), d);
    Eh(a)
  }
};
Ah.prototype.reset = function(a) {
  zh.info("resetting with reason: " + a);
  this.A.reset(a)
};
var Dh = k, Fh = new Bc(t.window);
function Ch(a) {
  a = $c("span", {"class":"important-message"}, a);
  Eh(a)
}
function Gh() {
  Dh && (Dh.reset("idle timeout fired"), Dh = k, Ch("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var Hh = k;
function Ih() {
  Hh != k && Fh.B.clearTimeout(Hh);
  Dh && (Hh = Fh.B.setTimeout(Gh, 6E5))
}
N(window, ["click", "focus", "keydown", "keypress"], Ih, j);
var jd = new Xc, Jh = 0;
function Eh(a) {
  a = $c("div", {"class":"row-" + (0 == Jh % 2 ? "even" : "odd")}, $c("nobr", {}, a));
  Q("ljstream-container-inner").appendChild(a);
  Jh += 1;
  if(yh) {
    for(var b = a, a = b.offsetTop, c = b.offsetHeight;b.offsetParent;) {
      b = b.offsetParent, a += b.offsetTop
    }
    var d = document, b = !H && "CSS1Compat" == d.compatMode ? d.documentElement : d.body, d = d.parentWindow || d.defaultView;
    a + c <= (new Nc(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop)).y + id().height || window.scrollBy(0, Math.round(id().height / 2) + 80)
  }
}
function Kh() {
  $e().kb(Se);
  if("1" == (new yb(document.location)).K.get("logging")) {
    var a = new sh("main");
    a.oc(j);
    a.Ma()
  }
  zh.info("Logger works.");
  N(t, "load", function() {
    window.scrollTo(0, 0)
  });
  N(Q("include_russian_posts"), "click", function() {
    Bh(Dh)
  });
  yh = j;
  N(Q("automatic_scroll"), "click", function(a) {
    yh = a.target.checked
  });
  a = new $d("Clear posts");
  Od(a, "clear-posts-button");
  vd(a, Q("prefs"));
  N(a, "action", function() {
    Q("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = Q("ljstream-container");
  a.style.marginTop = Q("demo-header").offsetHeight + "px";
  Q("demo-header").style.width = "9000px";
  var b = $c("div", {id:"ljstream-container-inner"});
  a.appendChild(b);
  a = new bh;
  Dh = new Ah;
  Ih();
  var c = (new yb(document.location)).K, b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    V(ah, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new yb(document.location);
  b ? b = new Wf("/_minerva/", c.oa, t.__demo_mainSocketPort) : (d ? (b = t.__demo_shared_domain, y(b) || e(Error("domain was " + P(b) + "; expected a string.")), c = c.O(), Bb(c, "_____random_____." + b)) : c = c.O(), Db(c, "/_minerva/"), Eb(c, "", h), b = new Yf(c.toString().replace("_____random_____", "%random%")));
  a = new gg(b, a, Fh);
  b = Dh;
  v(b.Ve) || e(Error("Protocol is missing required method streamStarted"));
  v(b.Ue) || e(Error("Protocol is missing required method streamReset"));
  v(b.We) || e(Error("Protocol is missing required method stringReceived"));
  a.dd = B(b.Ve, b);
  a.onreset = B(b.Ue, b);
  a.ed = B(b.We, b);
  a.fd = v(b.lg) ? B(b.lg, b) : k;
  a.gd = v(b.mg) ? B(b.mg, b) : k;
  a.start()
}
var Lh = ["__ljstream_init"], Mh = t;
!(Lh[0] in Mh) && Mh.execScript && Mh.execScript("var " + Lh[0]);
for(var Nh;Lh.length && (Nh = Lh.shift());) {
  !Lh.length && v(Kh) ? Mh[Nh] = Kh : Mh = Mh[Nh] ? Mh[Nh] : Mh[Nh] = {}
}
;
})();
