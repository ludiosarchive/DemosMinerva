(function() {
function e(a) {
  throw a;
}
var i = void 0, j = !0, k = null, m = !1;
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
function da() {
}
function ea(a) {
  a.Ya = function() {
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
  return a !== i
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
function v(a) {
  return"string" == typeof a
}
function y(a) {
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
function z(a, b, c) {
  z = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
  return z.apply(k, arguments)
}
function pa(a, b) {
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
;function qa(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = ("" + arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
function ra(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function sa(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function D(a) {
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
  return sa(a.replace(/  /g, " &#160;"), i)
}
function za(a, b) {
  for(var c = 0, d = ra("" + a).split("."), g = ra("" + b).split("."), f = Math.max(d.length, g.length), h = 0;0 == c && h < f;h++) {
    var l = d[h] || "", n = g[h] || "", p = RegExp("(\\d*)(\\D*)", "g"), w = RegExp("(\\d*)(\\D*)", "g");
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
var Ha = Aa, E = Ba, Ia = Da, F = Ca, Ja = t.navigator, Ka = -1 != (Ja && Ja.platform || "").indexOf("Mac"), La;
a: {
  var Ma = "", Na;
  if(Ha && t.opera) {
    var Oa = t.opera.version, Ma = "function" == typeof Oa ? Oa() : Oa
  }else {
    if(Ia ? Na = /rv\:([^\);]+)(\)|;)/ : E ? Na = /MSIE\s+([^\);]+)(\)|;)/ : F && (Na = /WebKit\/(\S+)/), Na) {
      var Pa = Na.exec(Ea()), Ma = Pa ? Pa[1] : ""
    }
  }
  if(E) {
    var Qa, Ra = t.document;
    Qa = Ra ? Ra.documentMode : i;
    if(Qa > parseFloat(Ma)) {
      La = "" + Qa;
      break a
    }
  }
  La = Ma
}
var Sa = {};
function G(a) {
  return Sa[a] || (Sa[a] = 0 <= za(La, a))
}
var Ta = {};
function Ua() {
  return Ta[9] || (Ta[9] = E && !!document.documentMode && 9 <= document.documentMode)
}
;function H(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, H) : this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
C(H, Error);
H.prototype.name = "CustomError";
function Va(a, b) {
  b.unshift(a);
  H.call(this, qa.apply(k, b));
  b.shift()
}
C(Va, H);
Va.prototype.name = "AssertionError";
function Wa(a, b) {
  e(new Va("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var Xa = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Ya(a, b) {
  var c = a.match(Xa), d = b.match(Xa);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Za(a, b) {
  for(var c in a) {
    b.call(i, a[c], c, a)
  }
}
function $a(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function ab(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var bb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function cb(a, b) {
  for(var c, d, g = 1;g < arguments.length;g++) {
    d = arguments[g];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < bb.length;f++) {
      c = bb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var I = Array.prototype, db = I.indexOf ? function(a, b, c) {
  return I.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(v(a)) {
    return!v(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, eb = I.forEach ? function(a, b, c) {
  I.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = v(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in g && b.call(c, g[f], f, a)
  }
}, fb = I.filter ? function(a, b, c) {
  return I.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = [], f = 0, h = v(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in h) {
      var n = h[l];
      b.call(c, n, l, a) && (g[f++] = n)
    }
  }
  return g
}, gb = I.map ? function(a, b, c) {
  return I.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = Array(d), f = v(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in f && (g[h] = b.call(c, f[h], h, a))
  }
  return g
}, hb = I.some ? function(a, b, c) {
  return I.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = v(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in g && b.call(c, g[f], f, a)) {
      return j
    }
  }
  return m
}, ib = I.every ? function(a, b, c) {
  return I.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = v(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in g && !b.call(c, g[f], f, a)) {
      return m
    }
  }
  return j
};
function jb(a, b) {
  return 0 <= db(a, b)
}
function kb(a, b) {
  var c = db(a, b);
  0 <= c && I.splice.call(a, c, 1)
}
function lb(a) {
  return I.concat.apply(I, arguments)
}
function mb(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
function nb(a, b, c) {
  return 2 >= arguments.length ? I.slice.call(a, b) : I.slice.call(a, b, c)
}
function ob(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function pb(a) {
  if("function" == typeof a.r) {
    a = a.r()
  }else {
    if(ha(a) || v(a)) {
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
  if(v(a)) {
    return a.split("")
  }
  if(ha(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return $a(a)
}
function rb(a) {
  if("function" == typeof a.Z) {
    return a.Z()
  }
  if("function" != typeof a.D) {
    if(ha(a) || v(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return ab(a)
  }
}
function sb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ha(a) || v(a)) {
      eb(a, b, c)
    }else {
      for(var d = rb(a), g = qb(a), f = g.length, h = 0;h < f;h++) {
        b.call(c, g[h], d && d[h], a)
      }
    }
  }
}
function tb(a, b) {
  if("function" == typeof a.every) {
    return a.every(b, i)
  }
  if(ha(a) || v(a)) {
    return ib(a, b, i)
  }
  for(var c = rb(a), d = qb(a), g = d.length, f = 0;f < g;f++) {
    if(!b.call(i, d[f], c && c[f], a)) {
      return m
    }
  }
  return j
}
;function J(a, b) {
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
s = J.prototype;
s.f = 0;
s.r = o("f");
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
s.Mb = function(a) {
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
  if(this.f != a.r()) {
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
  return 0 == this.f
};
s.clear = function() {
  this.o = {};
  this.f = this.j.length = 0
};
s.remove = function(a) {
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
  vb(this.o, a) || (this.f++, this.j.push(a));
  this.o[a] = b
};
s.uc = function(a) {
  var b;
  a instanceof J ? (b = a.Z(), a = a.D()) : (b = ab(a), a = $a(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
s.O = function() {
  return new J(this)
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
;function K(a, b) {
  var c;
  if(a instanceof K) {
    this.R = u(b) ? b : a.R, yb(this, a.Da), c = a.Ta, L(this), this.Ta = c, zb(this, a.pa), Ab(this, a.ib), Bb(this, a.xa), Cb(this, a.K.O()), c = a.Ja, L(this), this.Ja = c
  }else {
    if(a && (c = ("" + a).match(Xa))) {
      this.R = !!b;
      yb(this, c[1] || "", j);
      var d = c[2] || "";
      L(this);
      this.Ta = d ? decodeURIComponent(d) : "";
      zb(this, c[3] || "", j);
      Ab(this, c[4]);
      Bb(this, c[5] || "", j);
      Cb(this, c[6] || "", j);
      c = c[7] || "";
      L(this);
      this.Ja = c ? decodeURIComponent(c) : ""
    }else {
      this.R = !!b, this.K = new Db(k, 0, this.R)
    }
  }
}
s = K.prototype;
s.Da = "";
s.Ta = "";
s.pa = "";
s.ib = k;
s.xa = "";
s.Ja = "";
s.Ff = m;
s.R = m;
s.toString = function() {
  var a = [], b = this.Da;
  b && a.push(Eb(b, Fb), ":");
  if(b = this.pa) {
    a.push("//");
    var c = this.Ta;
    c && a.push(Eb(c, Fb), "@");
    a.push(encodeURIComponent("" + b));
    b = this.ib;
    b != k && a.push(":", "" + b)
  }
  if(b = this.xa) {
    this.pa && "/" != b.charAt(0) && a.push("/"), a.push(Eb(b, "/" == b.charAt(0) ? Gb : Hb))
  }
  (b = this.K.toString()) && a.push("?", b);
  (b = this.Ja) && a.push("#", Eb(b, Ib));
  return a.join("")
};
s.O = function() {
  return new K(this)
};
function yb(a, b, c) {
  L(a);
  a.Da = c ? b ? decodeURIComponent(b) : "" : b;
  a.Da && (a.Da = a.Da.replace(/:$/, ""))
}
function zb(a, b, c) {
  L(a);
  a.pa = c ? b ? decodeURIComponent(b) : "" : b
}
function Ab(a, b) {
  L(a);
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.ib = b) : a.ib = k
}
function Bb(a, b, c) {
  L(a);
  a.xa = c ? b ? decodeURIComponent(b) : "" : b
}
function Cb(a, b, c) {
  L(a);
  b instanceof Db ? (a.K = b, a.K.ld(a.R)) : (c || (b = Eb(b, Jb)), a.K = new Db(b, 0, a.R))
}
function L(a) {
  a.Ff && e(Error("Tried to modify a read-only Uri"))
}
s.ld = function(a) {
  this.R = a;
  this.K && this.K.ld(a);
  return this
};
function Kb(a) {
  return a instanceof K ? a.O() : new K(a, i)
}
function Eb(a, b) {
  return v(a) ? encodeURI(a).replace(b, Lb) : k
}
function Lb(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Fb = /[#\/\?@]/g, Hb = /[\#\?:]/g, Gb = /[\#\?]/g, Jb = /[\#\?@]/g, Ib = /#/g;
function Db(a, b, c) {
  this.I = a || k;
  this.R = !!c
}
function Mb(a) {
  if(!a.m && (a.m = new J, a.f = 0, a.I)) {
    for(var b = a.I.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), g = k, f = k;
      0 <= d ? (g = b[c].substring(0, d), f = b[c].substring(d + 1)) : g = b[c];
      g = decodeURIComponent(g.replace(/\+/g, " "));
      g = Nb(a, g);
      a.add(g, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
    }
  }
}
s = Db.prototype;
s.m = k;
s.f = k;
s.r = function() {
  Mb(this);
  return this.f
};
s.add = function(a, b) {
  Mb(this);
  this.I = k;
  var a = Nb(this, a), c = this.m.get(a);
  c || this.m.set(a, c = []);
  c.push(b);
  this.f++;
  return this
};
s.remove = function(a) {
  Mb(this);
  a = Nb(this, a);
  return this.m.da(a) ? (this.I = k, this.f -= this.m.get(a).length, this.m.remove(a)) : m
};
s.clear = function() {
  this.m = this.I = k;
  this.f = 0
};
s.Na = function() {
  Mb(this);
  return 0 == this.f
};
s.da = function(a) {
  Mb(this);
  a = Nb(this, a);
  return this.m.da(a)
};
s.Mb = function(a) {
  var b = this.D();
  return jb(b, a)
};
s.Z = function() {
  Mb(this);
  for(var a = this.m.D(), b = this.m.Z(), c = [], d = 0;d < b.length;d++) {
    for(var g = a[d], f = 0;f < g.length;f++) {
      c.push(b[d])
    }
  }
  return c
};
s.D = function(a) {
  Mb(this);
  var b = [];
  if(a) {
    this.da(a) && (b = lb(b, this.m.get(Nb(this, a))))
  }else {
    for(var a = this.m.D(), c = 0;c < a.length;c++) {
      b = lb(b, a[c])
    }
  }
  return b
};
s.set = function(a, b) {
  Mb(this);
  this.I = k;
  a = Nb(this, a);
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
      var h = g;
      "" !== d[f] && (h += "=" + encodeURIComponent("" + d[f]));
      a.push(h)
    }
  }
  return this.I = a.join("&")
};
s.O = function() {
  var a = new Db;
  a.I = this.I;
  this.m && (a.m = this.m.O());
  return a
};
function Nb(a, b) {
  var c = "" + b;
  a.R && (c = c.toLowerCase());
  return c
}
s.ld = function(a) {
  a && !this.R && (Mb(this), this.I = k, sb(this.m, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.I = k, this.m.set(Nb(this, d), mb(a)), this.f += a.length))
  }, this));
  this.R = a
};
var Ob;
Ob = r(j);
function Pb() {
}
var Qb = 0;
s = Pb.prototype;
s.key = 0;
s.Qa = m;
s.yc = m;
s.Ma = function(a, b, c, d, g, f) {
  y(a) ? this.je = j : a && a.handleEvent && y(a.handleEvent) ? this.je = m : e(Error("Invalid listener argument"));
  this.eb = a;
  this.De = b;
  this.src = c;
  this.type = d;
  this.capture = !!g;
  this.Xb = f;
  this.yc = m;
  this.key = ++Qb;
  this.Qa = m
};
s.handleEvent = function(a) {
  return this.je ? this.eb.call(this.Xb || this.src, a) : this.eb.handleEvent.call(this.eb, a)
};
var Rb = !E || Ua(), Sb = !E || Ua(), Tb = E && !G("8");
!F || G("528");
Ia && G("1.9b") || E && G("8") || Ha && G("9.5") || F && G("528");
Ia && !G("8") || E && G("9");
var Ub = {rg:"click", wg:"dblclick", Qg:"mousedown", Ug:"mouseup", Tg:"mouseover", Sg:"mouseout", Rg:"mousemove", gh:"selectstart", Lg:"keypress", Kg:"keydown", Mg:"keyup", pg:"blur", Eg:"focus", xg:"deactivate", Fg:E ? "focusin" : "DOMFocusIn", Gg:E ? "focusout" : "DOMFocusOut", qg:"change", fh:"select", hh:"submit", Jg:"input", ah:"propertychange", Bg:"dragstart", yg:"dragenter", Ag:"dragover", zg:"dragleave", Cg:"drop", lh:"touchstart", kh:"touchmove", jh:"touchend", ih:"touchcancel", tg:"contextmenu", 
Dg:"error", Ig:"help", Ng:"load", Og:"losecapture", bh:"readystatechange", dh:"resize", eh:"scroll", nh:"unload", Hg:"hashchange", Xg:"pagehide", Yg:"pageshow", $g:"popstate", ug:"copy", Zg:"paste", vg:"cut", mg:"beforecopy", ng:"beforecut", og:"beforepaste", Wg:"online", Vg:"offline", Pg:"message", sg:"connect", mh:F ? "webkitTransitionEnd" : Ha ? "oTransitionEnd" : "transitionend"};
function M() {
}
M.prototype.ea = m;
M.prototype.b = function() {
  this.ea || (this.ea = j, this.c())
};
M.prototype.c = function() {
  this.mf && Vb.apply(k, this.mf);
  if(this.xe) {
    for(;this.xe.length;) {
      this.xe.shift()()
    }
  }
};
function Vb(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? Vb.apply(k, d) : d && "function" == typeof d.b && d.b()
  }
}
;function Wb(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
C(Wb, M);
s = Wb.prototype;
s.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
s.Pa = m;
s.defaultPrevented = m;
s.ic = j;
s.stopPropagation = function() {
  this.Pa = j
};
s.preventDefault = function() {
  this.defaultPrevented = j;
  this.ic = m
};
function Xb(a) {
  a.stopPropagation()
}
;function Yb(a) {
  Yb[" "](a);
  return a
}
Yb[" "] = da;
function Zb(a, b) {
  a && this.Ma(a, b)
}
C(Zb, Wb);
var $b = [1, 4, 2];
s = Zb.prototype;
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
s.fd = m;
s.ga = k;
s.Ma = function(a, b) {
  var c = this.type = a.type;
  Wb.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Ia) {
      var g;
      a: {
        try {
          Yb(d.nodeName);
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
  this.offsetX = F || a.offsetX !== i ? a.offsetX : a.layerX;
  this.offsetY = F || a.offsetY !== i ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== i ? a.clientX : a.pageX;
  this.clientY = a.clientY !== i ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.fd = Ka ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ga = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Pa
};
function ac(a) {
  return Rb ? 0 == a.ga.button : "click" == a.type ? j : !!(a.ga.button & $b[0])
}
s.stopPropagation = function() {
  Zb.e.stopPropagation.call(this);
  this.ga.stopPropagation ? this.ga.stopPropagation() : this.ga.cancelBubble = j
};
s.preventDefault = function() {
  Zb.e.preventDefault.call(this);
  var a = this.ga;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, Tb) {
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
  Zb.e.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ga = k
};
var bc = {}, N = {}, cc = {}, dc = {};
function O(a, b, c, d, g) {
  if(b) {
    if(ga(b)) {
      for(var f = 0;f < b.length;f++) {
        O(a, b[f], c, d, g)
      }
      return k
    }
    var d = !!d, h = N;
    b in h || (h[b] = {f:0, S:0});
    h = h[b];
    d in h || (h[d] = {f:0, S:0}, h.f++);
    var h = h[d], l = ka(a), n;
    h.S++;
    if(h[l]) {
      n = h[l];
      for(f = 0;f < n.length;f++) {
        if(h = n[f], h.eb == c && h.Xb == g) {
          if(h.Qa) {
            break
          }
          return n[f].key
        }
      }
    }else {
      n = h[l] = [], h.f++
    }
    var p = ec, w = Sb ? function(a) {
      return p.call(w.src, w.key, a)
    } : function(a) {
      a = p.call(w.src, w.key, a);
      if(!a) {
        return a
      }
    }, f = w;
    f.src = a;
    h = new Pb;
    h.Ma(c, f, a, b, d, g);
    c = h.key;
    f.key = c;
    n.push(h);
    bc[c] = h;
    cc[l] || (cc[l] = []);
    cc[l].push(h);
    a.addEventListener ? (a == t || !a.Ld) && a.addEventListener(b, f, d) : a.attachEvent(b in dc ? dc[b] : dc[b] = "on" + b, f);
    return c
  }
  e(Error("Invalid event type"))
}
function fc(a, b, c, d, g) {
  if(ga(b)) {
    for(var f = 0;f < b.length;f++) {
      fc(a, b[f], c, d, g)
    }
    return k
  }
  a = O(a, b, c, d, g);
  bc[a].yc = j;
  return a
}
function gc(a, b, c, d, g) {
  if(ga(b)) {
    for(var f = 0;f < b.length;f++) {
      gc(a, b[f], c, d, g)
    }
  }else {
    if(d = !!d, a = hc(a, b, d)) {
      for(f = 0;f < a.length;f++) {
        if(a[f].eb == c && a[f].capture == d && a[f].Xb == g) {
          ic(a[f].key);
          break
        }
      }
    }
  }
}
function ic(a) {
  if(!bc[a]) {
    return m
  }
  var b = bc[a];
  if(b.Qa) {
    return m
  }
  var c = b.src, d = b.type, g = b.De, f = b.capture;
  c.removeEventListener ? (c == t || !c.Ld) && c.removeEventListener(d, g, f) : c.detachEvent && c.detachEvent(d in dc ? dc[d] : dc[d] = "on" + d, g);
  c = ka(c);
  g = N[d][f][c];
  if(cc[c]) {
    var h = cc[c];
    kb(h, b);
    0 == h.length && delete cc[c]
  }
  b.Qa = j;
  g.ve = j;
  jc(d, f, c, g);
  delete bc[a];
  return j
}
function jc(a, b, c, d) {
  if(!d.bc && d.ve) {
    for(var g = 0, f = 0;g < d.length;g++) {
      d[g].Qa ? d[g].De.src = k : (g != f && (d[f] = d[g]), f++)
    }
    d.length = f;
    d.ve = m;
    0 == f && (delete N[a][b][c], N[a][b].f--, 0 == N[a][b].f && (delete N[a][b], N[a].f--), 0 == N[a].f && delete N[a])
  }
}
function hc(a, b, c) {
  var d = N;
  return b in d && (d = d[b], c in d && (d = d[c], a = ka(a), d[a])) ? d[a] : k
}
function kc(a, b, c, d, g) {
  var f = 1, b = ka(b);
  if(a[b]) {
    a.S--;
    a = a[b];
    a.bc ? a.bc++ : a.bc = 1;
    try {
      for(var h = a.length, l = 0;l < h;l++) {
        var n = a[l];
        n && !n.Qa && (f &= lc(n, g) !== m)
      }
    }finally {
      a.bc--, jc(c, d, b, a)
    }
  }
  return Boolean(f)
}
function lc(a, b) {
  a.yc && ic(a.key);
  return a.handleEvent(b)
}
function ec(a, b) {
  if(!bc[a]) {
    return j
  }
  var c = bc[a], d = c.type, g = N;
  if(!(d in g)) {
    return j
  }
  var g = g[d], f, h;
  if(!Sb) {
    f = b || ca("window.event");
    var l = j in g, n = m in g;
    if(l) {
      if(0 > f.keyCode || f.returnValue != i) {
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
        if(p || f.returnValue == i) {
          f.returnValue = j
        }
      }
    }
    p = new Zb;
    p.Ma(f, this);
    f = j;
    try {
      if(l) {
        for(var q = [], x = p.currentTarget;x;x = x.parentNode) {
          q.push(x)
        }
        h = g[j];
        h.S = h.f;
        for(var A = q.length - 1;!p.Pa && 0 <= A && h.S;A--) {
          p.currentTarget = q[A], f &= kc(h, q[A], d, j, p)
        }
        if(n) {
          h = g[m];
          h.S = h.f;
          for(A = 0;!p.Pa && A < q.length && h.S;A++) {
            p.currentTarget = q[A], f &= kc(h, q[A], d, m, p)
          }
        }
      }else {
        f = lc(c, p)
      }
    }finally {
      q && (q.length = 0), p.b()
    }
    return f
  }
  d = new Zb(b, this);
  try {
    f = lc(c, d)
  }finally {
    d.b()
  }
  return f
}
var mc = 0;
function nc() {
}
C(nc, M);
s = nc.prototype;
s.Ld = j;
s.dc = k;
s.md = aa("dc");
s.addEventListener = function(a, b, c, d) {
  O(this, a, b, c, d)
};
s.removeEventListener = function(a, b, c, d) {
  gc(this, a, b, c, d)
};
s.dispatchEvent = function(a) {
  var b = a.type || a, c = N;
  if(b in c) {
    if(v(a)) {
      a = new Wb(a, this)
    }else {
      if(a instanceof Wb) {
        a.target = a.target || this
      }else {
        var d = a, a = new Wb(b, this);
        cb(a, d)
      }
    }
    var d = 1, g, c = c[b], b = j in c, f;
    if(b) {
      g = [];
      for(f = this;f;f = f.dc) {
        g.push(f)
      }
      f = c[j];
      f.S = f.f;
      for(var h = g.length - 1;!a.Pa && 0 <= h && f.S;h--) {
        a.currentTarget = g[h], d &= kc(f, g[h], a.type, j, a) && a.ic != m
      }
    }
    if(m in c) {
      if(f = c[m], f.S = f.f, b) {
        for(h = 0;!a.Pa && h < g.length && f.S;h++) {
          a.currentTarget = g[h], d &= kc(f, g[h], a.type, m, a) && a.ic != m
        }
      }else {
        for(g = this;!a.Pa && g && f.S;g = g.dc) {
          a.currentTarget = g, d &= kc(f, g, a.type, m, a) && a.ic != m
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
  nc.e.c.call(this);
  var a, b = 0, c = a == k;
  a = !!a;
  if(this == k) {
    Za(cc, function(d) {
      for(var f = d.length - 1;0 <= f;f--) {
        var g = d[f];
        if(c || a == g.capture) {
          ic(g.key), b++
        }
      }
    })
  }else {
    var d = ka(this);
    if(cc[d]) {
      for(var d = cc[d], g = d.length - 1;0 <= g;g--) {
        var f = d[g];
        if(c || a == f.capture) {
          ic(f.key), b++
        }
      }
    }
  }
  this.dc = k
};
var oc = t.window;
mc++;
mc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function pc(a, b) {
  this.Kb = [];
  this.Gd = a;
  this.Nd = b || k
}
s = pc.prototype;
s.ra = m;
s.tb = m;
s.yb = 0;
s.pd = m;
s.gf = m;
s.xc = 0;
s.cancel = function(a) {
  if(this.ra) {
    this.Bb instanceof pc && this.Bb.cancel()
  }else {
    if(this.z) {
      var b = this.z;
      delete this.z;
      a ? b.cancel(a) : (b.xc--, 0 >= b.xc && b.cancel())
    }
    this.Gd ? this.Gd.call(this.Nd, this) : this.pd = j;
    this.ra || this.Wa(new qc)
  }
};
s.Jd = function(a, b) {
  rc(this, a, b);
  this.yb--;
  0 == this.yb && this.ra && sc(this)
};
function rc(a, b, c) {
  a.ra = j;
  a.Bb = c;
  a.tb = !b;
  sc(a)
}
function tc(a) {
  a.ra && (a.pd || e(new uc), a.pd = m)
}
s.X = function(a) {
  tc(this);
  rc(this, j, a)
};
s.Wa = function(a) {
  tc(this);
  rc(this, m, a)
};
function vc(a, b) {
  wc(a, b, k, i)
}
function wc(a, b, c, d) {
  a.Kb.push([b, c, d]);
  a.ra && sc(a)
}
function xc(a) {
  return hb(a.Kb, function(a) {
    return y(a[1])
  })
}
function sc(a) {
  a.yd && (a.ra && xc(a)) && (t.clearTimeout(a.yd), delete a.yd);
  a.z && (a.z.xc--, delete a.z);
  for(var b = a.Bb, c = m, d = m;a.Kb.length && 0 == a.yb;) {
    var g = a.Kb.shift(), f = g[0], h = g[1], g = g[2];
    if(f = a.tb ? h : f) {
      try {
        var l = f.call(g || a.Nd, b);
        u(l) && (a.tb = a.tb && (l == b || l instanceof Error), a.Bb = b = l);
        b instanceof pc && (d = j, a.yb++)
      }catch(n) {
        b = n, a.tb = j, xc(a) || (c = j)
      }
    }
  }
  a.Bb = b;
  d && a.yb && (wc(b, z(a.Jd, a, j), z(a.Jd, a, m)), b.gf = j);
  c && (a.yd = t.setTimeout(function() {
    e(new yc(b))
  }, 0))
}
function zc(a) {
  var b = new pc;
  b.X(a);
  return b
}
function Ac(a) {
  var b = new pc;
  b.Wa(a);
  return b
}
function uc() {
  H.call(this)
}
C(uc, H);
uc.prototype.message = "Already called";
function qc() {
  H.call(this)
}
C(qc, H);
qc.prototype.message = "Deferred was cancelled";
function yc(a) {
  H.call(this);
  this.message = "Unhandled Error in Deferred: " + (a.message || "[No message]")
}
C(yc, H);
function Bc(a) {
  this.B = a;
  this.Ob = [];
  this.Qd = [];
  this.ff = z(this.gg, this)
}
Bc.prototype.vd = k;
Bc.prototype.gg = function() {
  this.vd = k;
  var a = this.Ob;
  this.Ob = [];
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
  if(0 == this.Ob.length) {
    a = this.Qd;
    this.Qd = [];
    for(b = 0;b < a.length;b++) {
      a[b].X(k)
    }
  }
};
var Cc = new Bc(t.window);
function Dc(a) {
  return y(a) || "object" == typeof a && y(a.call) && y(a.apply)
}
;function Fc(a) {
  var b = [];
  Gc(new Hc, a, b);
  return b.join("")
}
function Hc() {
  this.hc = i
}
function Gc(a, b, c) {
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
          c.push(g), g = b[f], Gc(a, a.hc ? a.hc.call(b, "" + f, g) : g, c), g = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (g = b[f], "function" != typeof g && (c.push(d), Ic(f, c), c.push(":"), Gc(a, a.hc ? a.hc.call(b, f, g) : g, c), d = ","))
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
  var d = db(c, a);
  if(-1 != d) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = fa(a);
    if("boolean" == d || "number" == d || "null" == d || "undefined" == d) {
      b.push("" + a)
    }else {
      if("string" == d) {
        Ic(a, b)
      }else {
        if(Dc(a.F)) {
          a.F(b, c)
        }else {
          if(Dc(a.af)) {
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
                    b.push("new Date(", "" + a.valueOf(), ")")
                  }else {
                    for(var d = ab(a).concat(bb), g = {}, h = f = 0;h < d.length;) {
                      var l = d[h++], n = ja(l) ? "o" + ka(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(g, n) || (g[n] = j, d[f++] = l)
                    }
                    d.length = f;
                    b.push("{");
                    g = "";
                    for(h = 0;h < d.length;h++) {
                      f = d[h], Object.prototype.hasOwnProperty.call(a, f) && (l = a[f], b.push(g), Ic(f, b), b.push(": "), Lc(l, b, c), g = ", ")
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
  Lc(a, b, c)
}
function Q(a) {
  var b = [];
  P(a, b, i);
  return b.join("")
}
;function Mc(a, b) {
  this.x = u(a) ? a : 0;
  this.y = u(b) ? b : 0
}
Mc.prototype.O = function() {
  return new Mc(this.x, this.y)
};
Mc.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function Nc(a, b) {
  this.width = a;
  this.height = b
}
s = Nc.prototype;
s.O = function() {
  return new Nc(this.width, this.height)
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
var Oc;
function Pc(a) {
  a = a.className;
  return v(a) && a.match(/\S+/g) || []
}
function Qc(a, b) {
  for(var c = Pc(a), d = nb(arguments, 1), g = c.length + d.length, f = c, h = 0;h < d.length;h++) {
    jb(f, d[h]) || f.push(d[h])
  }
  a.className = c.join(" ");
  return c.length == g
}
function Rc(a, b) {
  var c = Pc(a), d = nb(arguments, 1), g, f = d;
  g = fb(c, function(a) {
    return!jb(f, a)
  });
  a.className = g.join(" ");
  return g.length == c.length - d.length
}
;var Sc = !E || Ua();
!Ia && !E || E && Ua() || Ia && G("1.9.1");
var Tc = E && !G("9");
function Uc(a) {
  return a ? new Vc(Wc(a)) : Oc || (Oc = new Vc)
}
function R(a) {
  return v(a) ? document.getElementById(a) : a
}
var Xc = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Yc(a, b, c) {
  return Zc(document, arguments)
}
function Zc(a, b) {
  var c = b[0], d = b[1];
  if(!Sc && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', D(d.name), '"');
    if(d.type) {
      c.push(' type="', D(d.type), '"');
      var g = {};
      cb(g, d);
      d = g;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  var f = a.createElement(c);
  d && (v(d) ? f.className = d : ga(d) ? Qc.apply(k, [f].concat(d)) : Za(d, function(a, b) {
    "style" == b ? f.style.cssText = a : "class" == b ? f.className = a : "for" == b ? f.htmlFor = a : b in Xc ? f.setAttribute(Xc[b], a) : 0 == b.lastIndexOf("aria-", 0) ? f.setAttribute(b, a) : f[b] = a
  }));
  2 < b.length && $c(a, f, b, 2);
  return f
}
function $c(a, b, c, d) {
  function g(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var f = c[d];
    if(ha(f) && !(ja(f) && 0 < f.nodeType)) {
      var h = eb, l;
      a: {
        if((l = f) && "number" == typeof l.length) {
          if(ja(l)) {
            l = "function" == typeof l.item || "string" == typeof l.item;
            break a
          }
          if(y(l)) {
            l = "function" == typeof l.item;
            break a
          }
        }
        l = m
      }
      h(l ? mb(f) : f, g)
    }else {
      g(f)
    }
  }
}
function ad(a, b) {
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
function Wc(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
var bd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, cd = {IMG:" ", BR:"\n"};
function dd(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, "number" == typeof a && 0 <= a && 32768 > a) : m
}
function ed(a) {
  var b = [];
  fd(a, b, m);
  return b.join("")
}
function fd(a, b, c) {
  if(!(a.nodeName in bd)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in cd) {
        b.push(cd[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          fd(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Vc(a) {
  this.fa = a || t.document || document
}
s = Vc.prototype;
s.Xa = Uc;
s.g = function(a) {
  return v(a) ? this.fa.getElementById(a) : a
};
function gd() {
  var a = (hd.fa.parentWindow || hd.fa.defaultView || window).document, a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
  return new Nc(a.clientWidth, a.clientHeight)
}
s.n = function(a, b, c) {
  return Zc(this.fa, arguments)
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
  $c(Wc(a), a, arguments, 1)
};
s.contains = ad;
function id(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
var jd = Ia ? "MozUserSelect" : F ? "WebkitUserSelect" : k;
function kd(a) {
  this.be = a;
  this.j = []
}
C(kd, M);
var ld = [];
function md(a, b, c, d) {
  ga(c) || (ld[0] = c, c = ld);
  for(var g = 0;g < c.length;g++) {
    a.j.push(O(b, c[g], d || a, m, a.be || a))
  }
  return a
}
function nd(a, b, c, d, g, f) {
  if(ga(c)) {
    for(var h = 0;h < c.length;h++) {
      nd(a, b, c[h], d, g, f)
    }
  }else {
    a: {
      d = d || a;
      f = f || a.be || a;
      g = !!g;
      if(b = hc(b, c, g)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].Qa && b[c].eb == d && b[c].capture == g && b[c].Xb == f) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, ic(b), kb(a.j, b))
  }
  return a
}
kd.prototype.hd = function() {
  eb(this.j, ic);
  this.j.length = 0
};
kd.prototype.c = function() {
  kd.e.c.call(this);
  this.hd()
};
kd.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function od() {
}
ea(od);
od.prototype.Kf = 0;
od.Ya();
function pd(a) {
  this.Nb = a || Uc();
  this.Cb = qd
}
C(pd, nc);
pd.prototype.Ef = od.Ya();
var qd = k;
function rd(a, b) {
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
s = pd.prototype;
s.$ = k;
s.U = m;
s.q = k;
s.Cb = k;
s.z = k;
s.oa = k;
s.Lb = k;
s.hg = m;
function sd(a) {
  return a.$ || (a.$ = ":" + (a.Ef.Kf++).toString(36))
}
s.g = o("q");
function td(a) {
  return a.Za || (a.Za = new kd(a))
}
s.getParent = o("z");
s.md = function(a) {
  this.z && this.z != a && e(Error("Method not supported"));
  pd.e.md.call(this, a)
};
s.Xa = o("Nb");
s.n = function() {
  this.q = this.Nb.createElement("div")
};
function ud(a, b) {
  a.U && e(Error("Component already rendered"));
  a.q || a.n();
  b ? b.insertBefore(a.q, k) : a.Nb.fa.body.appendChild(a.q);
  (!a.z || a.z.U) && a.qa()
}
s.qa = function() {
  this.U = j;
  vd(this, function(a) {
    !a.U && a.g() && a.qa()
  })
};
s.sb = function() {
  vd(this, function(a) {
    a.U && a.sb()
  });
  this.Za && this.Za.hd();
  this.U = m
};
s.c = function() {
  pd.e.c.call(this);
  this.U && this.sb();
  this.Za && (this.Za.b(), delete this.Za);
  vd(this, function(a) {
    a.b()
  });
  if(!this.hg && this.q) {
    var a = this.q;
    a && a.parentNode && a.parentNode.removeChild(a)
  }
  this.z = this.q = this.Lb = this.oa = k
};
s.lb = function(a) {
  this.U && e(Error("Component already rendered"));
  this.Cb = a
};
function vd(a, b) {
  a.oa && eb(a.oa, b, i)
}
s.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : sd(a), d;
    this.Lb && c ? (d = this.Lb, d = (c in d ? d[c] : i) || k) : d = k;
    a = d;
    c && a && (d = this.Lb, c in d && delete d[c], kb(this.oa, a), b && (a.sb(), a.q && (c = a.q) && c.parentNode && c.parentNode.removeChild(c)), c = a, c == k && e(Error("Unable to set parent component")), c.z = k, pd.e.md.call(c, k))
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function wd() {
}
var xd;
ea(wd);
s = wd.prototype;
s.Sb = function() {
};
s.n = function(a) {
  var b = a.Xa().n("div", yd(this, a).join(" "), a.pb);
  this.kd(a, b);
  return b
};
s.qb = function(a, b, c) {
  if(a = a.g ? a.g() : a) {
    if(E && !G("7")) {
      var d = zd(Pc(a), b);
      d.push(b);
      pa(c ? Qc : Rc, a).apply(k, d)
    }else {
      c ? Qc(a, b) : Rc(a, b)
    }
  }
};
s.ee = function(a) {
  if(a.Cb == k) {
    var b = a.U ? a.q : a.Nb.fa.body, c;
    a: {
      c = Wc(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(b, k))) {
        c = c.direction || c.getPropertyValue("direction") || "";
        break a
      }
      c = ""
    }
    c || (c = (b.currentStyle ? b.currentStyle.direction : k) || b.style && b.style.direction);
    a.Cb = "rtl" == c
  }
  a.Cb && this.lb(a.g(), j);
  a.isEnabled() && this.Db(a, a.Ua)
};
s.kd = function(a, b) {
  a.isEnabled() || this.N(b, 1, j);
  a.d & 8 && this.N(b, 8, j);
  a.G & 16 && this.N(b, 16, !!(a.d & 16));
  a.G & 64 && this.N(b, 64, !!(a.d & 64))
};
s.kc = function(a, b) {
  var c = !b, d = E || Ha ? a.getElementsByTagName("*") : k;
  if(jd) {
    if(c = c ? "none" : "", a.style[jd] = c, d) {
      for(var g = 0, f;f = d[g];g++) {
        f.style[jd] = c
      }
    }
  }else {
    if(E || Ha) {
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
s.ie = function(a) {
  var b;
  return a.G & 32 && (b = a.Ka()) ? dd(b) : m
};
s.Db = function(a, b) {
  var c;
  if(a.G & 32 && (c = a.Ka())) {
    if(!b && a.d & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.d & 32 && a.Vd()
    }
    dd(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
s.od = function(a, b) {
  a.style.display = b ? "" : "none"
};
s.L = function(a, b, c) {
  var d = a.g();
  if(d) {
    var g = Ad(this, b);
    g && this.qb(a, g, c);
    this.N(d, b, c)
  }
};
s.N = function(a, b, c) {
  xd || (xd = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = xd[b]) && a.setAttribute("aria-" + b, c)
};
s.Ka = function(a) {
  return a.g()
};
s.sa = r("goog-control");
function yd(a, b) {
  var c = a.sa(), d = [c], g = a.sa();
  g != c && d.push(g);
  c = b.d;
  for(g = [];c;) {
    var f = c & -c;
    g.push(Ad(a, f));
    c &= ~f
  }
  d.push.apply(d, g);
  (c = b.Y) && d.push.apply(d, c);
  E && !G("7") && d.push.apply(d, zd(d));
  return d
}
function zd(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  eb([], function(d) {
    ib(d, pa(jb, a)) && (!b || jb(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Ad(a, b) {
  if(!a.Hd) {
    var c = a.sa();
    a.Hd = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Hd[b]
}
;function Bd(a, b) {
  a || e(Error("Invalid class name " + a));
  y(b) || e(Error("Invalid decorator function " + b))
}
var Cd = {};
function Dd(a, b, c, d, g) {
  if(!E && (!F || !G("525"))) {
    return j
  }
  if(Ka && g) {
    return Ed(a)
  }
  if(g && !d || !c && (17 == b || 18 == b) || E && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(E && Ua());
    case 27:
      return!F
  }
  return Ed(a)
}
function Ed(a) {
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
function Fd(a) {
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
;function Gd(a, b) {
  a && Hd(this, a, b)
}
C(Gd, nc);
s = Gd.prototype;
s.q = k;
s.Zb = k;
s.Qc = k;
s.$b = k;
s.wa = -1;
s.va = -1;
var Id = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Jd = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Kd = E || 
F && G("525");
s = Gd.prototype;
s.Af = function(a) {
  if(F && (17 == this.wa && !a.ctrlKey || 18 == this.wa && !a.altKey)) {
    this.va = this.wa = -1
  }
  Kd && !Dd(a.keyCode, this.wa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.va = Ia ? Fd(a.keyCode) : a.keyCode
};
s.Cf = function() {
  this.va = this.wa = -1
};
s.handleEvent = function(a) {
  var b = a.ga, c, d;
  E && "keypress" == a.type ? (c = this.va, d = 13 != c && 27 != c ? b.keyCode : 0) : F && "keypress" == a.type ? (c = this.va, d = 0 <= b.charCode && 63232 > b.charCode && Ed(c) ? b.charCode : 0) : Ha ? (c = this.va, d = Ed(c) ? b.keyCode : 0) : (c = b.keyCode || this.va, d = b.charCode || 0, Ka && (63 == d && 224 == c) && (c = 191));
  var g = c, f = b.keyIdentifier;
  c ? 63232 <= c && c in Id ? g = Id[c] : 25 == c && a.shiftKey && (g = 9) : f && f in Jd && (g = Jd[f]);
  a = g == this.wa;
  this.wa = g;
  b = new Ld(g, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.b()
  }
};
s.g = o("q");
function Hd(a, b, c) {
  a.$b && a.detach();
  a.q = b;
  a.Zb = O(a.q, "keypress", a, c);
  a.Qc = O(a.q, "keydown", a.Af, c, a);
  a.$b = O(a.q, "keyup", a.Cf, c, a)
}
s.detach = function() {
  this.Zb && (ic(this.Zb), ic(this.Qc), ic(this.$b), this.$b = this.Qc = this.Zb = k);
  this.q = k;
  this.va = this.wa = -1
};
s.c = function() {
  Gd.e.c.call(this);
  this.detach()
};
function Ld(a, b, c, d) {
  d && this.Ma(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(Ld, Zb);
function S(a, b, c) {
  pd.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ka(b);
      if(d = Cd[d]) {
        break
      }
      b = b.e ? b.e.constructor : k
    }
    b = d ? y(d.Ya) ? d.Ya() : new d : k
  }
  this.u = b;
  this.pb = a
}
C(S, pd);
s = S.prototype;
s.pb = k;
s.d = 0;
s.G = 39;
s.wc = 255;
s.Yf = 0;
s.Ua = j;
s.Y = k;
s.Lc = j;
s.vc = m;
s.Nf = k;
s.Ka = function() {
  return this.u.Ka(this)
};
function Md(a, b) {
  b && (a.Y ? jb(a.Y, b) || a.Y.push(b) : a.Y = [b], a.u.qb(a, b, j))
}
s.qb = function(a, b) {
  b ? Md(this, a) : a && this.Y && (kb(this.Y, a), 0 == this.Y.length && (this.Y = k), this.u.qb(this, a, m))
};
s.n = function() {
  var a = this.u.n(this);
  this.q = a;
  var b = this.Nf || this.u.Sb();
  b && a.setAttribute("role", b);
  this.vc || this.u.kc(a, m);
  this.Ua || this.u.od(a, m)
};
s.qa = function() {
  S.e.qa.call(this);
  this.u.ee(this);
  if(this.G & -2 && (this.Lc && Nd(this, j), this.G & 32)) {
    var a = this.Ka();
    if(a) {
      var b = this.bb || (this.bb = new Gd);
      Hd(b, a);
      md(md(md(td(this), b, "key", this.Bf), a, "focus", this.zf), a, "blur", this.Vd)
    }
  }
};
function Nd(a, b) {
  var c = td(a), d = a.g();
  b ? (md(md(md(md(c, d, "mouseover", a.$d), d, "mousedown", a.Yd), d, "mouseup", a.ae), d, "mouseout", a.Zd), E && md(c, d, "dblclick", a.Xd)) : (nd(nd(nd(nd(c, d, "mouseover", a.$d), d, "mousedown", a.Yd), d, "mouseup", a.ae), d, "mouseout", a.Zd), E && nd(c, d, "dblclick", a.Xd))
}
s.sb = function() {
  S.e.sb.call(this);
  this.bb && this.bb.detach();
  this.Ua && this.isEnabled() && this.u.Db(this, m)
};
s.c = function() {
  S.e.c.call(this);
  this.bb && (this.bb.b(), delete this.bb);
  delete this.u;
  this.Y = this.pb = k
};
function Od(a) {
  a = a.pb;
  if(!a) {
    return""
  }
  if(!v(a)) {
    if(ga(a)) {
      a = gb(a, ed).join("")
    }else {
      if(Tc && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        fd(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Tc || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
s.lb = function(a) {
  S.e.lb.call(this, a);
  var b = this.g();
  b && this.u.lb(b, a)
};
s.kc = function(a) {
  this.vc = a;
  var b = this.g();
  b && this.u.kc(b, a)
};
s.od = function(a, b) {
  if(b || this.Ua != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.g();
    c && this.u.od(c, a);
    this.isEnabled() && this.u.Db(this, a);
    this.Ua = a;
    return j
  }
  return m
};
s.isEnabled = function() {
  return!(this.d & 1)
};
s.lc = function(a) {
  var b = this.getParent();
  if((!b || "function" != typeof b.isEnabled || b.isEnabled()) && Pd(this, 1, !a)) {
    a || (this.setActive(m), Qd(this, m)), this.Ua && this.u.Db(this, a), this.L(1, !a)
  }
};
function Qd(a, b) {
  Pd(a, 2, b) && a.L(2, b)
}
s.ge = function() {
  return!!(this.d & 4)
};
s.setActive = function(a) {
  Pd(this, 4, a) && this.L(4, a)
};
s.L = function(a, b) {
  this.G & a && b != !!(this.d & a) && (this.u.L(this, a, b), this.d = b ? this.d | a : this.d & ~a)
};
function T(a, b) {
  return!!(a.wc & b) && !!(a.G & b)
}
function Pd(a, b, c) {
  return!!(a.G & b) && !!(a.d & b) != c && (!(a.Yf & b) || a.dispatchEvent(rd(b, c))) && !a.ea
}
s.$d = function(a) {
  (!a.relatedTarget || !ad(this.g(), a.relatedTarget)) && (this.dispatchEvent("enter") && this.isEnabled() && T(this, 2)) && Qd(this, j)
};
s.Zd = function(a) {
  if((!a.relatedTarget || !ad(this.g(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    T(this, 4) && this.setActive(m), T(this, 2) && Qd(this, m)
  }
};
s.Yd = function(a) {
  if(this.isEnabled() && (T(this, 2) && Qd(this, j), ac(a) && (!F || !Ka || !a.ctrlKey))) {
    T(this, 4) && this.setActive(j), this.u.ie(this) && this.Ka().focus()
  }
  !this.vc && (ac(a) && (!F || !Ka || !a.ctrlKey)) && a.preventDefault()
};
s.ae = function(a) {
  this.isEnabled() && (T(this, 2) && Qd(this, j), this.ge() && (this.zb(a) && T(this, 4)) && this.setActive(m))
};
s.Xd = function(a) {
  this.isEnabled() && this.zb(a)
};
s.zb = function(a) {
  if(T(this, 16)) {
    var b = !(this.d & 16);
    Pd(this, 16, b) && this.L(16, b)
  }
  T(this, 8) && Pd(this, 8, j) && this.L(8, j);
  T(this, 64) && (b = !(this.d & 64), Pd(this, 64, b) && this.L(64, b));
  b = new Wb("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.fd = a.fd);
  return this.dispatchEvent(b)
};
s.zf = function() {
  T(this, 32) && Pd(this, 32, j) && this.L(32, j)
};
s.Vd = function() {
  T(this, 4) && this.setActive(m);
  T(this, 32) && Pd(this, 32, m) && this.L(32, m)
};
s.Bf = function(a) {
  return this.Ua && this.isEnabled() && this.Kc(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
s.Kc = function(a) {
  return 13 == a.keyCode && this.zb(a)
};
y(S) || e(Error("Invalid component class " + S));
y(wd) || e(Error("Invalid renderer class " + wd));
var Rd = ka(S);
Cd[Rd] = wd;
Bd("goog-control", function() {
  return new S(k)
});
function Sd() {
}
C(Sd, wd);
ea(Sd);
s = Sd.prototype;
s.Sb = r("button");
s.N = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : Sd.e.N.call(this, a, b, c)
};
s.n = function(a) {
  var b = Sd.e.n.call(this, a), c = a.Ub();
  c && this.nd(b, c);
  (c = a.Vb()) && this.mc(b, c);
  a.G & 16 && this.N(b, 16, !!(a.d & 16));
  return b
};
s.Vb = da;
s.mc = da;
s.Ub = function(a) {
  return a.title
};
s.nd = function(a, b) {
  a && (a.title = b || "")
};
s.sa = r("goog-button");
function Td() {
}
C(Td, Sd);
ea(Td);
s = Td.prototype;
s.Sb = function() {
};
s.n = function(a) {
  a.U && m != a.Lc && Nd(a, m);
  a.Lc = m;
  a.wc &= -256;
  a.U && a.d & 32 && e(Error("Component already rendered"));
  a.d & 32 && a.L(32, m);
  a.G &= -33;
  return a.Xa().n("button", {"class":yd(this, a).join(" "), disabled:!a.isEnabled(), title:a.Ub() || "", value:a.Vb() || ""}, Od(a) || "")
};
s.ee = function(a) {
  md(td(a), a.g(), "click", a.zb)
};
s.kc = da;
s.lb = da;
s.ie = function(a) {
  return a.isEnabled()
};
s.Db = da;
s.L = function(a, b, c) {
  Td.e.L.call(this, a, b, c);
  if((a = a.g()) && 1 == b) {
    a.disabled = c
  }
};
s.Vb = function(a) {
  return a.value
};
s.mc = function(a, b) {
  a && (a.value = b)
};
s.N = da;
function Ud(a, b, c) {
  S.call(this, a, b || Td.Ya(), c)
}
C(Ud, S);
s = Ud.prototype;
s.Vb = o("Xe");
s.mc = function(a) {
  this.Xe = a;
  this.u.mc(this.g(), a)
};
s.Ub = o("Ue");
s.nd = function(a) {
  this.Ue = a;
  this.u.nd(this.g(), a)
};
s.c = function() {
  Ud.e.c.call(this);
  delete this.Xe;
  delete this.Ue
};
s.qa = function() {
  Ud.e.qa.call(this);
  if(this.G & 32) {
    var a = this.Ka();
    a && md(td(this), a, "keyup", this.Kc)
  }
};
s.Kc = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.zb(a) : 32 == a.keyCode
};
Bd("goog-button", function() {
  return new Ud(k)
});
function Vd() {
}
C(Vd, Sd);
ea(Vd);
Vd.prototype.n = function(a) {
  var b = {"class":"goog-inline-block " + yd(this, a).join(" "), title:a.Ub() || ""}, b = a.Xa().n("div", b, Wd(this, a.pb, a.Xa()));
  this.kd(a, b);
  return b
};
Vd.prototype.Sb = r("button");
Vd.prototype.kd = function(a, b) {
  a.isEnabled() || this.N(b, 1, j);
  a.d & 8 && this.N(b, 8, j);
  a.G & 16 && this.N(b, 16, j);
  a.d & 64 && this.N(b, 64, j)
};
function Wd(a, b, c) {
  return c.n("div", "goog-inline-block " + (a.sa() + "-outer-box"), c.n("div", "goog-inline-block " + (a.sa() + "-inner-box"), b))
}
Vd.prototype.sa = r("goog-custom-button");
function Xd(a, b, c) {
  Ud.call(this, a, b || Vd.Ya(), c)
}
C(Xd, Ud);
Bd("goog-custom-button", function() {
  return new Xd(k)
});
function Zd() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ B()).toString(36)
}
function $d(a) {
  return a.substr(0, a.length - 1)
}
var ae = /^(0|[1-9]\d*)$/, be = /^(0|\-?[1-9]\d*)$/;
function ce(a) {
  var b = de;
  return ae.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function ee(a) {
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
;var fe, ge;
function he(a, b) {
  this.Va = a;
  this.Ra = b
}
he.prototype.Q = function(a) {
  return a instanceof he && this.Va == a.Va && this.Ra.join(",") == a.Ra
};
he.prototype.F = function(a, b) {
  a.push("new SACK(", "" + this.Va, ", ");
  P(this.Ra, a, b);
  a.push(")")
};
function ie() {
  this.J = new J
}
ie.prototype.Ia = -1;
ie.prototype.M = 0;
ie.prototype.append = function(a) {
  var b = ee(a);
  this.J.set(this.Ia + 1, [a, b]);
  this.Ia += 1;
  this.M += b
};
ie.prototype.F = function(a) {
  a.push("<Queue with ", "" + this.J.r(), " item(s), counter=#", "" + this.Ia, ", size=", "" + this.M, ">")
};
function je(a) {
  a = a.J.Z();
  I.sort.call(a, ob);
  return a
}
function ke() {
  this.Ga = new J
}
ke.prototype.Oa = -1;
ke.prototype.M = 0;
function le(a) {
  var b = a.Ga.Z();
  I.sort.call(b, ob);
  return new he(a.Oa, b)
}
var me = {};
function ne(a, b) {
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
        a.push('<property id="', d, '">'), ne(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', D(c), '">'), ne(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function oe(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, g = arguments;
  d.push("<arguments>");
  for(var f = g.length, h = 1;h < f;h++) {
    ne(d, g[h])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var pe = m, qe = "";
function re(a) {
  a = a.match(/[\d]+/g);
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var se = navigator.plugins["Shockwave Flash"];
  se && (pe = j, se.description && (qe = re(se.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (pe = j, qe = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var te = navigator.mimeTypes["application/x-shockwave-flash"];
    (pe = te && te.enabledPlugin) && (qe = re(te.enabledPlugin.description))
  }else {
    try {
      var ue = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), pe = j, qe = re(ue.GetVariable("$version"))
    }catch(ve) {
      try {
        ue = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), pe = j, qe = "6.0.21"
      }catch(we) {
        try {
          ue = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), pe = j, qe = re(ue.GetVariable("$version"))
        }catch(xe) {
        }
      }
    }
  }
}
var ye = qe;
function ze(a) {
  this.o = new J;
  a && this.uc(a)
}
function Ae(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ka(a) : b.substr(0, 1) + a
}
s = ze.prototype;
s.r = function() {
  return this.o.r()
};
s.add = function(a) {
  this.o.set(Ae(a), a)
};
s.uc = function(a) {
  for(var a = qb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
s.hd = function(a) {
  for(var a = qb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
s.remove = function(a) {
  return this.o.remove(Ae(a))
};
s.clear = function() {
  this.o.clear()
};
s.Na = function() {
  return this.o.Na()
};
s.contains = function(a) {
  return this.o.da(Ae(a))
};
s.D = function() {
  return this.o.D()
};
s.O = function() {
  return new ze(this)
};
s.Q = function(a) {
  var b;
  if(b = this.r() == pb(a)) {
    var c = a, a = pb(c);
    this.r() > a ? b = m : (!(c instanceof ze) && 5 < a && (c = new ze(c)), b = tb(this, function(a) {
      if("function" == typeof c.contains) {
        a = c.contains(a)
      }else {
        if("function" == typeof c.Mb) {
          a = c.Mb(a)
        }else {
          if(ha(c) || v(c)) {
            a = jb(c, a)
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
function Be(a) {
  return Ce(a || arguments.callee.caller, [])
}
function Ce(a, b) {
  var c = [];
  if(jb(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(De(a) + "(");
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
            f = (f = De(f)) ? f : "[fn]";
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
        c.push(Ce(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function De(a) {
  if(Ee[a]) {
    return Ee[a]
  }
  a = "" + a;
  if(!Ee[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Ee[a] = b ? b[1] : "[Anonymous]"
  }
  return Ee[a]
}
var Ee = {};
function Fe(a, b, c, d, g) {
  this.reset(a, b, c, d, g)
}
Fe.prototype.Ic = k;
Fe.prototype.Hc = k;
var Ge = 0;
Fe.prototype.reset = function(a, b, c, d, g) {
  "number" == typeof g || Ge++;
  this.Te = d || B();
  this.V = a;
  this.te = b;
  this.pe = c;
  delete this.Ic;
  delete this.Hc
};
Fe.prototype.kb = aa("V");
function He(a) {
  this.Jf = a
}
He.prototype.z = k;
He.prototype.V = k;
He.prototype.oa = k;
He.prototype.vb = k;
function Ie(a, b) {
  this.name = a;
  this.value = b
}
Ie.prototype.toString = o("name");
var Je = new Ie("SHOUT", 1200), Ke = new Ie("SEVERE", 1E3), Le = new Ie("WARNING", 900), Me = new Ie("INFO", 800), Ne = new Ie("CONFIG", 700), Oe = new Ie("FINE", 500), Pe = new Ie("FINEST", 300), Qe = new Ie("ALL", 0), Re = [new Ie("OFF", Infinity), Je, Ke, Le, Me, Ne, Oe, new Ie("FINER", 400), Pe, Qe], Se = k;
function Te(a) {
  if(!Se) {
    Se = {};
    for(var b = 0, c;c = Re[b];b++) {
      Se[c.value] = c, Se[c.name] = c
    }
  }
  return Se[a] || k
}
s = He.prototype;
s.getParent = o("z");
s.kb = aa("V");
function Ue(a) {
  if(a.V) {
    return a.V
  }
  if(a.z) {
    return Ue(a.z)
  }
  Wa("Root logger has no level set.");
  return k
}
s.log = function(a, b, c) {
  if(a.value >= Ue(this).value) {
    a = this.yf(a, b, c);
    b = "log:" + a.te;
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.vb) {
        for(var g = 0, f = i;f = c.vb[g];g++) {
          f(d)
        }
      }
      b = b.getParent()
    }
  }
};
s.yf = function(a, b, c) {
  var d = new Fe(a, "" + b, this.Jf);
  if(c) {
    d.Ic = c;
    var g;
    var f = arguments.callee.caller;
    try {
      var h;
      var l = ca("window.location.href");
      if(v(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var n, p, w = m;
        try {
          n = c.lineNumber || c.oh || "Not available"
        }catch(q) {
          n = "Not available", w = j
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || l
        }catch(x) {
          p = "Not available", w = j
        }
        h = w || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:p, stack:c.stack || "Not available"} : c
      }
      g = "Message: " + D(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + D(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + D(Be(f) + "-> ")
    }catch(A) {
      g = "Exception trying to expose exception! You win, we lose. " + A
    }
    d.Hc = g
  }
  return d
};
function U(a, b) {
  a.log(Ke, b, i)
}
function V(a, b, c) {
  a.log(Le, b, c)
}
s.info = function(a, b) {
  this.log(Me, a, b)
};
function W(a, b) {
  a.log(Oe, b, i)
}
function X(a, b) {
  a.log(Pe, b, i)
}
var Ve = {}, We = k;
function Xe() {
  We || (We = new He(""), Ve[""] = We, We.kb(Ne))
}
function Ye() {
  Xe();
  return We
}
function Y(a) {
  Xe();
  var b;
  if(!(b = Ve[a])) {
    b = new He(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Y(a.substr(0, c));
    c.oa || (c.oa = {});
    c.oa[d] = b;
    b.z = c;
    Ve[a] = b
  }
  return b
}
;function Ze(a, b) {
  pd.call(this, b);
  this.vf = a;
  this.Gc = new kd(this);
  this.Qb = new J
}
C(Ze, pd);
s = Ze.prototype;
s.a = Y("goog.ui.media.FlashObject");
s.jg = "window";
s.Ed = "#000000";
s.cf = "sameDomain";
function $e(a, b, c) {
  a.zd = v(b) ? b : Math.round(b) + "px";
  a.Mc = v(c) ? c : Math.round(c) + "px";
  a.g() && (b = a.g() ? a.g().firstChild : k, c = a.zd, a = a.Mc, c instanceof Nc ? (a = c.height, c = c.width) : a == i && e(Error("missing height argument")), b.style.width = id(c), b.style.height = id(a))
}
s.qa = function() {
  Ze.e.qa.call(this);
  var a = this.g(), b;
  b = E ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = E ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = qa(c, this.jg), d = this.Qb.Z(), g = this.Qb.D(), f = [], h = 0;h < d.length;h++) {
    f.push(encodeURIComponent("" + d[h]) + "=" + encodeURIComponent("" + g[h]))
  }
  b = qa(b, sd(this), sd(this), "goog-ui-media-flash-object", D(this.vf), D(f.join("&")), this.Ed, this.cf, c);
  a.innerHTML = b;
  this.zd && this.Mc && $e(this, this.zd, this.Mc);
  md(this.Gc, this.g(), $a(Ub), Xb)
};
s.n = function() {
  this.Ie != k && !(0 <= za(ye, this.Ie)) && (V(this.a, "Required flash version not found:" + this.Ie), e(Error("Method not supported")));
  var a = this.Xa().createElement("div");
  a.className = "goog-ui-media-flash";
  this.q = a
};
s.c = function() {
  Ze.e.c.call(this);
  this.Qb = k;
  this.Gc.b();
  this.Gc = k
};
function af(a) {
  H.call(this, a)
}
C(af, H);
af.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function bf(a, b) {
  this.$ = "_" + Zd();
  this.qc = a;
  this.za = b;
  this.Fa = a.Fa
}
C(bf, M);
s = bf.prototype;
s.fb = j;
s.Cc = m;
s.a = Y("cw.net.FlashSocket");
s.F = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.$);
  a.push("'>")
};
function cf(a, b, c) {
  if("frames" == b) {
    a = a.za, df(a.C), ef(a.C, c)
  }else {
    if("stillreceiving" == b) {
      c = a.za, X(c.a, "onstillreceiving"), df(c.C)
    }else {
      if("connect" == b) {
        a.za.onconnect()
      }else {
        "close" == b ? (a.fb = m, a.b()) : "ioerror" == b ? (a.fb = m, b = a.za, V(b.a, "onioerror: " + Q(c)), ff(b.C, m), a.b()) : "securityerror" == b ? (a.fb = m, b = a.za, V(b.a, "onsecurityerror: " + Q(c)), ff(b.C, m), a.b()) : e(Error("bad event: " + b))
      }
    }
  }
}
function gf(a) {
  a.Cc = j;
  a.fb = m;
  a.b()
}
s.Ac = function(a, b) {
  try {
    var c = this.Fa.CallFunction(oe("__FC_connect", this.$, a, b, "<int32/>\n"))
  }catch(d) {
    return U(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), gf(this)
  }
  '"OK"' != c && e(Error("__FC_connect failed? ret: " + c))
};
s.Ib = function(a) {
  try {
    var b = this.Fa.CallFunction(oe("__FC_writeFrames", this.$, a))
  }catch(c) {
    return U(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), gf(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (V(this.a, "Flash no longer knows of " + this.$ + "; disposing."), this.b()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
s.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.fb);
  bf.e.c.call(this);
  var a = this.Fa;
  delete this.Fa;
  if(this.fb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(oe("__FC_close", this.$)))
    }catch(b) {
      U(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Cc = j
    }
  }
  if(this.Cc) {
    a = this.za, V(a.a, "oncrash"), ff(a.C, j)
  }else {
    this.za.onclose()
  }
  delete this.za;
  delete this.qc.$a[this.$]
};
function hf(a, b) {
  this.p = a;
  this.Fa = b;
  this.$a = {};
  this.zc = "__FST_" + Zd();
  t[this.zc] = z(this.pf, this);
  var c = b.CallFunction(oe("__FC_setCallbackFunc", this.zc));
  '"OK"' != c && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
C(hf, M);
s = hf.prototype;
s.a = Y("cw.net.FlashSocketTracker");
s.F = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  P(this.$a, a, b);
  a.push(">")
};
s.Dc = function(a) {
  a = new bf(this, a);
  return this.$a[a.$] = a
};
s.nf = function(a, b, c, d) {
  var g = this.$a[a];
  g ? "frames" == b && d ? (cf(g, "ioerror", "FlashConnector hadError while handling data."), g.b()) : cf(g, b, c) : V(this.a, "Cannot dispatch because we have no instance: " + Q([a, b, c, d]))
};
s.pf = function(a, b, c, d) {
  try {
    var g = this.p;
    g.Ob.push([this.nf, this, [a, b, c, d]]);
    g.vd == k && (g.vd = g.B.setTimeout(g.ff, 0))
  }catch(f) {
    t.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
s.c = function() {
  hf.e.c.call(this);
  for(var a = $a(this.$a);a.length;) {
    a.pop().b()
  }
  delete this.$a;
  delete this.Fa;
  t[this.zc] = i
};
function jf(a) {
  this.C = a;
  this.ob = []
}
C(jf, M);
s = jf.prototype;
s.a = Y("cw.net.FlashSocketConduit");
s.Ib = function(a) {
  this.ob ? (X(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.ob.push.apply(this.ob, a)) : (X(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.nc.Ib(a))
};
s.Ac = function(a, b) {
  this.nc.Ac(a, b)
};
s.onconnect = function() {
  this.a.info("onconnect");
  df(this.C);
  var a = this.ob;
  this.ob = k;
  a.length && (X(this.a, "onconnect: Writing " + a.length + " buffered frame(s)."), this.nc.Ib(a))
};
s.onclose = function() {
  this.a.info("onclose");
  ff(this.C, m)
};
s.c = function() {
  this.a.info("in disposeInternal.");
  jf.e.c.call(this);
  this.nc.b();
  delete this.C
};
var kf = [];
function lf() {
  var a = new pc;
  kf.push(a);
  return a
}
function mf(a) {
  var b = kf;
  kf = [];
  eb(b, function(b) {
    b.X(a)
  });
  return k
}
function nf(a) {
  var b = kf;
  kf = [];
  eb(b, function(b) {
    b.Wa(a)
  });
  return k
}
;function of() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;var de = Math.pow(2, 53);
var pf = {af:r("<cw.eq.Wildcard>")};
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
          if(a.$e == Ob && b.$e == Ob) {
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
  this.Qf = a;
  this.fc = b
}
Z.prototype.Q = function(a, b) {
  return ja(a) && this.constructor == a.constructor && rf(this.fc, a.fc, b)
};
Z.prototype.F = function(a, b) {
  a.push("new ", this.Qf, "(");
  for(var c = "", d = 0;d < this.fc.length;d++) {
    a.push(c), c = ", ", P(this.fc[d], a, b)
  }
  a.push(")")
};
function $(a) {
  H.call(this, a)
}
C($, H);
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
  P(uf(this), a, b);
  a.push(">")
};
function uf(a) {
  return[a.ka, a.Ce, a.de, a.He, a.Fb, a.sd, a.ue, a.se, a.Wc, a.qe, a.We, a.Se, a.Ca, a.ac]
}
tf.prototype.P = sf;
tf.prototype.T = function(a) {
  var b = {};
  b.tnum = this.ka;
  b.ver = this.Ce;
  b.format = this.de;
  b["new"] = this.He;
  b.id = this.Fb;
  b.ming = this.sd;
  b.pad = this.ue;
  b.maxb = this.se;
  u(this.Wc) && (b.maxt = this.Wc);
  b.maxia = this.qe;
  b.tcpack = this.We;
  b.eeds = this.Se;
  b.sack = this.Ca instanceof he ? $d((new vf(this.Ca)).P()) : this.Ca;
  b.seenack = this.ac instanceof he ? $d((new vf(this.ac)).P()) : this.ac;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push(Fc(b), "H")
};
function wf(a) {
  Z.call(this, "StringFrame", [a]);
  this.ud = a
}
C(wf, Z);
wf.prototype.P = sf;
wf.prototype.T = function(a) {
  a.push(this.ud, " ")
};
function xf(a) {
  Z.call(this, "CommentFrame", [a]);
  this.kf = a
}
C(xf, Z);
xf.prototype.P = sf;
xf.prototype.T = function(a) {
  a.push(this.kf, "^")
};
function yf(a) {
  Z.call(this, "SeqNumFrame", [a]);
  this.Ne = a
}
C(yf, Z);
yf.prototype.P = sf;
yf.prototype.T = function(a) {
  a.push("" + this.Ne, "N")
};
function zf(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = de;
    if(be.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var f = ce(b[d]);
      if(f == k) {
        return k
      }
      c.push(f)
    }
  }
  return new he(a, c)
}
function vf(a) {
  Z.call(this, "SackFrame", [a]);
  this.Ca = a
}
C(vf, Z);
vf.prototype.P = sf;
vf.prototype.T = function(a) {
  var b = this.Ca;
  a.push(b.Ra.join(","), "|", "" + b.Va);
  a.push("A")
};
function Af(a) {
  Z.call(this, "StreamStatusFrame", [a]);
  this.le = a
}
C(Af, Z);
Af.prototype.P = sf;
Af.prototype.T = function(a) {
  var b = this.le;
  a.push(b.Ra.join(","), "|", "" + b.Va);
  a.push("T")
};
function Bf() {
  Z.call(this, "StreamCreatedFrame", [])
}
C(Bf, Z);
Bf.prototype.P = sf;
Bf.prototype.T = function(a) {
  a.push("C")
};
function Cf() {
  Z.call(this, "YouCloseItFrame", [])
}
C(Cf, Z);
Cf.prototype.P = sf;
Cf.prototype.T = function(a) {
  a.push("Y")
};
function Df(a, b) {
  Z.call(this, "ResetFrame", [a, b]);
  this.Fe = a;
  this.Dd = b
}
C(Df, Z);
Df.prototype.P = sf;
Df.prototype.T = function(a) {
  a.push(this.Fe, "|", "" + Number(this.Dd), "!")
};
var Ef = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Ff(a) {
  Z.call(this, "TransportKillFrame", [a]);
  this.reason = a
}
C(Ff, Z);
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
    return a = zf($d(a)), a == k && e(new $("bad sack")), new vf(a)
  }
  if("N" == b) {
    return a = ce($d(a)), a == k && e(new $("bad seqNum")), new yf(a)
  }
  if("T" == b) {
    return a = zf($d(a)), a == k && e(new $("bad lastSackSeen")), new Af(a)
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
  this.Pb = b;
  this.td = c;
  this.xf = d
}
Hf.prototype.F = function(a, b) {
  a.push("<XDRFrame frameId=");
  P(this.xf, a, b);
  a.push(", expandedUrl=");
  P(this.Pb, a, b);
  a.push(", streams=");
  P(this.td, a, b);
  a.push(">")
};
function If() {
  this.frames = [];
  this.Uc = new J
}
If.prototype.a = Y("cw.net.XDRTracker");
function Jf(a, b) {
  for(var c = Kf, d = 0;d < c.frames.length;d++) {
    var g = c.frames[d], f;
    if(f = 0 == g.td.length) {
      f = g.Pb;
      var h = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      f = RegExp("^" + h + "$").test(f)
    }
    if(f) {
      return c.a.info("Giving " + Q(b) + " existing frame " + Q(g)), zc(g)
    }
  }
  d = Zd() + Zd();
  g = a.replace(/%random%/g, function() {
    return"ml" + Math.floor(of()) + ("" + Math.floor(of()))
  });
  f = t.location;
  f instanceof K || (f = Kb(f));
  g instanceof K || (g = Kb(g));
  var l = f;
  f = g;
  g = l.O();
  (h = !!f.Da) ? yb(g, f.Da) : h = !!f.Ta;
  if(h) {
    var n = f.Ta;
    L(g);
    g.Ta = n
  }else {
    h = !!f.pa
  }
  h ? zb(g, f.pa) : h = f.ib != k;
  n = f.xa;
  if(h) {
    Ab(g, f.ib)
  }else {
    if(h = !!f.xa) {
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
  h ? Bb(g, n) : h = "" !== f.K.toString();
  h ? Cb(g, f.K.toString() ? decodeURIComponent(f.K.toString()) : "") : h = !!f.Ja;
  h && (f = f.Ja, L(g), g.Ja = f);
  g = g.toString();
  f = ("" + t.location).match(Xa)[3] || k;
  h = g.match(Xa)[3] || k;
  f == h ? (c.a.info("No need to make a real XDRFrame for " + Q(b)), c = zc(new Hf(t, g, [b], k))) : ((f = R("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), h = new pc, c.Uc.set(d, [h, g, b]), c.a.info("Creating new XDRFrame " + Q(d) + "for " + Q(b)), c = Yc("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:g + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), f.appendChild(c), c = h);
  return c
}
If.prototype.lg = function(a) {
  var b = this.Uc.get(a);
  b || e(Error("Unknown frameId " + Q(a)));
  this.Uc.remove(b);
  var c = b[0], a = new Hf(R("minerva-xdrframe-" + a).contentWindow || (R("minerva-xdrframe-" + a).contentDocument || R("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (R("minerva-xdrframe-" + a).contentDocument || R("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.X(a)
};
var Kf = new If;
t.__XHRTracker_xdrFrameLoaded = z(Kf.lg, Kf);
var Lf;
Lf = m;
var Mf = Ea();
Mf && (-1 != Mf.indexOf("Firefox") || -1 != Mf.indexOf("Camino") || -1 != Mf.indexOf("iPhone") || -1 != Mf.indexOf("iPod") || -1 != Mf.indexOf("iPad") || -1 != Mf.indexOf("Android") || -1 != Mf.indexOf("Chrome") && (Lf = j));
var Nf = Lf;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function Of(a, b, c, d, g, f) {
  pc.call(this, g, f);
  this.oe = a;
  this.Ec = [];
  this.Sd = !!b;
  this.uf = !!c;
  this.lf = !!d;
  for(b = 0;b < a.length;b++) {
    wc(a[b], z(this.Wd, this, b, j), z(this.Wd, this, b, m))
  }
  0 == a.length && !this.Sd && this.X(this.Ec)
}
C(Of, pc);
Of.prototype.we = 0;
Of.prototype.Wd = function(a, b, c) {
  this.we++;
  this.Ec[a] = [b, c];
  this.ra || (this.Sd && b ? this.X([a, c]) : this.uf && !b ? this.Wa(c) : this.we == this.oe.length && this.X(this.Ec));
  this.lf && !b && (c = k);
  return c
};
Of.prototype.Wa = function(a) {
  Of.e.Wa.call(this, a);
  eb(this.oe, function(a) {
    a.cancel()
  })
};
function Pf(a, b) {
  this.kg = a;
  this.re = b
}
Pf.prototype.Rc = 0;
Pf.prototype.cc = 0;
Pf.prototype.Jc = m;
function Qf(a) {
  var b = [];
  if(a.Jc) {
    return[b, 2]
  }
  var c = a.Rc, d = a.kg.responseText;
  for(a.Rc = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var g = d.substr(a.cc, c - a.cc), g = g.replace(/\r$/, "");
    if(g.length > a.re) {
      return a.Jc = j, [b, 2]
    }
    b.push(g);
    a.cc = c += 1
  }
  return a.Rc - a.cc - 1 > a.re ? (a.Jc = j, [b, 2]) : [b, 1]
}
;function Rf(a, b, c) {
  this.C = b;
  this.W = a;
  this.Bc = c
}
C(Rf, M);
s = Rf.prototype;
s.a = Y("cw.net.XHRMaster");
s.Aa = -1;
s.Vc = function(a, b, c) {
  this.Bc.__XHRSlave_makeRequest(this.W, a, b, c)
};
s.ta = o("Aa");
s.Zc = function(a, b) {
  1 != b && U(this.a, Q(this.W) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  df(this.C);
  ef(this.C, a)
};
s.$c = function(a) {
  W(this.a, "ongotheaders_: " + Q(a));
  var b = k;
  "Content-Length" in a && (b = ce(a["Content-Length"]));
  a = this.C;
  W(a.a, a.l() + " got Content-Length: " + b);
  a.ca == Sf && (b == k && (V(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Tf(a, 2E3 + 1E3 * (b / 3072)))
};
s.ad = function(a) {
  1 != a && W(this.a, this.C.l() + "'s XHR's readyState is " + a);
  this.Aa = a;
  2 <= this.Aa && df(this.C)
};
s.Yc = function() {
  this.C.b()
};
s.c = function() {
  Rf.e.c.call(this);
  delete Uf.ia[this.W];
  this.Bc.__XHRSlave_dispose(this.W);
  delete this.Bc
};
function Vf() {
  this.ia = {}
}
C(Vf, M);
s = Vf.prototype;
s.a = Y("cw.net.XHRMasterTracker");
s.Dc = function(a, b) {
  var c = "_" + Zd(), d = new Rf(c, a, b);
  return this.ia[c] = d
};
s.Zc = function(a, b, c) {
  if(Ia) {
    for(var d = [], g = 0, f = b.length;g < f;g++) {
      d[g] = b[g]
    }
    b = d
  }else {
    b = lb(b)
  }
  (d = this.ia[a]) ? d.Zc(b, c) : U(this.a, "onframes_: no master for " + Q(a))
};
s.$c = function(a, b) {
  var c = this.ia[a];
  c ? c.$c(b) : U(this.a, "ongotheaders_: no master for " + Q(a))
};
s.ad = function(a, b) {
  var c = this.ia[a];
  c ? c.ad(b) : U(this.a, "onreadystatechange_: no master for " + Q(a))
};
s.Yc = function(a) {
  var b = this.ia[a];
  b ? (delete this.ia[b.W], b.Yc()) : U(this.a, "oncomplete_: no master for " + Q(a))
};
s.c = function() {
  Vf.e.c.call(this);
  for(var a = $a(this.ia);a.length;) {
    a.pop().b()
  }
  delete this.ia
};
var Uf = new Vf;
t.__XHRMaster_onframes = z(Uf.Zc, Uf);
t.__XHRMaster_oncomplete = z(Uf.Yc, Uf);
t.__XHRMaster_ongotheaders = z(Uf.$c, Uf);
t.__XHRMaster_onreadystatechange = z(Uf.ad, Uf);
function Wf(a, b, c) {
  this.aa = a;
  this.host = b;
  this.port = c
}
function Xf(a, b, c) {
  this.host = a;
  this.port = b;
  this.cg = c
}
function Yf(a, b) {
  b || (b = a);
  this.aa = a;
  this.Ea = b
}
Yf.prototype.F = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  P(this.aa, a, b);
  a.push(", secondaryUrl=");
  P(this.Ea, a, b);
  a.push(">")
};
function Zf(a, b, c, d) {
  this.aa = a;
  this.Be = b;
  this.Ea = c;
  this.Me = d;
  (!(0 == this.aa.indexOf("http://") || 0 == this.aa.indexOf("https://")) || !(0 == this.Ea.indexOf("http://") || 0 == this.Ea.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Be.location.href;
  Ya(this.aa, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Me.location.href;
  Ya(this.Ea, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
Zf.prototype.F = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  P(this.aa, a, b);
  a.push(", secondaryUrl=");
  P(this.Ea, a, b);
  a.push(">")
};
var $f = new xf(";)]}");
function ag() {
}
ag.prototype.Td = r(1);
function dg(a) {
  t.setTimeout(function() {
    u(a.message) && a.stack && (a.message += "\n" + a.stack);
    e(a)
  }, 0)
}
function eg(a) {
  this.Zf = a
}
eg.prototype.F = function(a, b) {
  a.push("<UserContext for ");
  P(this.Zf, a, b);
  a.push(">")
};
function fg(a, b, c, d) {
  Z.call(this, "TransportInfo", [a, b, c, d]);
  this.ka = a
}
C(fg, Z);
function gg(a, b, c) {
  this.t = a;
  this.$f = b ? b : new ag;
  this.p = c ? c : Cc;
  this.Gb = new ze;
  this.Fb = Zd() + Zd();
  this.ba = new ie;
  this.Pc = new ke;
  this.Hb = k;
  this.rc = [];
  this.mb = new eg(this);
  this.ef = z(this.fg, this);
  F && (this.Hb = fc(t, "load", this.Rf, m, this))
}
C(gg, M);
s = gg.prototype;
s.a = Y("cw.net.ClientStream");
s.me = new he(-1, []);
s.ne = new he(-1, []);
s.If = 50;
s.Hf = 1048576;
s.cd = k;
s.bd = k;
s.dd = k;
s.ed = k;
s.onreset = k;
s.ze = k;
s.jb = k;
s.qd = m;
s.jd = m;
s.d = "1_UNSTARTED";
s.wd = -1;
s.h = k;
s.s = k;
s.Ab = k;
s.rd = 0;
s.Ae = 0;
s.Le = 0;
s.F = function(a, b) {
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
function hg(a) {
  var b = [-1];
  a.h && b.push(a.h.gb);
  a.s && b.push(a.s.gb);
  return Math.max.apply(Math.max, b)
}
function ig(a) {
  if(!("3_STARTED" > a.d)) {
    jg(a);
    var b = 0 != a.ba.J.r(), c = le(a.Pc), d = !c.Q(a.ne) && !(a.h && c.Q(a.h.cb) || a.s && c.Q(a.s.cb)), g = hg(a);
    if((b = b && g < a.ba.Ia) || d) {
      var f = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.h.Ha ? (X(a.a, "tryToSend_: writing " + f + " to primary"), d && (d = a.h, c != d.cb && (!d.ja && !d.v.length && kg(d), d.v.push(new vf(c)), d.cb = c)), b && lg(a.h, a.ba, g + 1), a.h.ha()) : a.s == k ? a.qd ? (X(a.a, "tryToSend_: creating secondary to send " + f), a.s = mg(a, m, j), a.s && (b && lg(a.s, a.ba, g + 1), a.s.ha())) : (X(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.jd = j) : X(a.a, "tryToSend_: need to send " + f + ", but can't right now")
    }
  }
}
function jg(a) {
  a.jb != k && (a.p.B.clearTimeout(a.jb), a.jb = k)
}
s.fg = function() {
  this.jb = k;
  ig(this)
};
function ng(a) {
  a.jb == k && (a.jb = a.p.B.setTimeout(a.ef, 6))
}
s.Rf = function() {
  this.Hb = k;
  if(this.h && this.h.ab()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.h;
    a.tc = j;
    a.b()
  }
  this.s && this.s.ab() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.s, a.tc = j, a.b())
};
function og(a, b) {
  var c;
  u(c) || (c = j);
  "3_STARTED" < a.d && e(Error("sendString: Can't send in state " + a.d));
  c && (v(b) || e(Error("sendString: not a string: " + Q(b))), /^([ -~]*)$/.test(b) || e(Error("sendString: string has illegal chars: " + Q(b))));
  a.ba.append(b);
  ng(a)
}
function mg(a, b, c) {
  var d;
  a.t instanceof Zf ? d = 1 == a.$f.Td() ? Sf : pg : a.t instanceof Xf ? d = qg : e(Error("Don't support endpoint " + Q(a.t)));
  a.wd += 1;
  b = new rg(a.p, a, a.wd, d, a.t, b);
  X(a.a, "Created: " + b.l());
  if(c) {
    if(a.dd) {
      c = new fg(b.ka, b.ma, b.Ba, b.Ha);
      try {
        a.dd.call(a.mb, c)
      }catch(g) {
        V(a.a, "ontransportcreated raised uncaught exception", g), dg(g)
      }
    }
    if(sg(a)) {
      return k
    }
  }
  a.Gb.add(b);
  return b
}
function tg(a, b, c) {
  var d = new ug(a.p, a, b, c);
  X(a.a, "Created: " + d.l() + ", delay=" + b + ", times=" + c);
  a.Gb.add(d);
  return d
}
function vg(a, b) {
  a.Gb.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  W(a.a, "Offline: " + b.l());
  var c = "4_RESETTING" == a.d && b.Ze;
  if(b instanceof rg && !c) {
    if(a.ed) {
      var d = new fg(b.ka, b.ma, b.Ba, b.Ha);
      try {
        a.ed.call(a.mb, d)
      }catch(g) {
        V(a.a, "ontransportdestroyed raised uncaught exception", g), dg(g)
      }
    }
    if(sg(a)) {
      return
    }
  }
  a.rd = b.ya ? a.rd + b.ya : 0;
  1 <= a.rd && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), wg(a, "stream penalty reached limit", m), a.b());
  if("3_STARTED" < a.d) {
    c ? (W(a.a, "Disposing because resettingTransport_ is done."), a.b()) : W(a.a, "Not creating a transport because ClientStream is in state " + a.d)
  }else {
    c = b instanceof ug;
    if(!c && b.tc) {
      var f = F ? Nf ? [0, 1] : [9, 20] : [0, 0], c = f[0], d = f[1];
      X(a.a, "getDelayForNextTransport_: " + Q({delay:c, times:d}))
    }else {
      if(d = b.Id(), b == a.h ? d ? f = ++a.Ae : c || (f = a.Ae = 0) : d ? f = ++a.Le : c || (f = a.Le = 0), c || !f) {
        d = c = 0, X(a.a, "getDelayForNextTransport_: " + Q({count:f, delay:c, times:d}))
      }else {
        var h = 2E3 * Math.min(f, 3), l = Math.floor(4E3 * Math.random()) - 2E3, n = Math.max(0, b.Ve - b.xd), d = (c = Math.max(0, h + l - n)) ? 1 : 0;
        X(a.a, "getDelayForNextTransport_: " + Q({count:f, base:h, variance:l, oldDuration:n, delay:c, times:d}))
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
      a.h.ha()
    }else {
      b == a.s && (a.s = k, c ? (a.s = tg(a, f, c), a.s.ha()) : ig(a))
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
  0 != this.ba.J.r() && V(this.a, "reset: strings in send queue will never be sent: " + Q(this.ba));
  this.d = "4_RESETTING";
  this.h && this.h.Ha ? (this.a.info("reset: Sending ResetFrame over existing primary."), xg(this.h, a), this.h.ha()) : (this.h && (W(this.a, "reset: Disposing primary before sending ResetFrame."), this.h.b()), this.s && (W(this.a, "reset: Disposing secondary before sending ResetFrame."), this.s.b()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Ab = mg(this, m, m), xg(this.Ab, a), this.Ab.ha());
  wg(this, a, j)
};
function sg(a) {
  return"4_RESETTING" == a.d || a.ea
}
s.Pd = function(a) {
  U(this.a, "Failed to start " + Q(this) + "; error was " + Q(a.message));
  this.b();
  return k
};
s.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  "1_UNSTARTED" != this.d && e(Error("ClientStream.start: " + Q(this) + " already started"));
  this.bd && this.bd(this);
  this.d = "2_WAITING_RESOURCES";
  if(this.t instanceof Yf) {
    var a = Jf(this.t.aa, this), b = Jf(this.t.Ea, this), a = new Of([a, b], m, j);
    vc(a, function(a) {
      return gb(a, function(a) {
        return a[1]
      })
    });
    vc(a, z(this.sf, this));
    b = z(this.Pd, this);
    wc(a, k, b, i)
  }else {
    if(this.t instanceof Wf) {
      if(ge) {
        this.Rd()
      }else {
        a = this.p;
        b = this.t.aa;
        if(kf.length) {
          a = lf()
        }else {
          b = new Ze(b + "FlashConnector.swf?cb=4bdfc178fc0e508c0cd5efc3fdb09920");
          b.Ed = "#777777";
          $e(b, 300, 30);
          var c = R("minerva-elements");
          c || e(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
          var d = R("minerva-elements-FlashConnectorSwf");
          d || (d = Yc("div", {id:"minerva-elements-FlashConnectorSwf"}), c.appendChild(d));
          var g = a.B, f;
          var a = d, h, l = function() {
            h && delete t.__loadFlashObject_callbacks[h]
          };
          if(Ia && !G("1.8.1.20")) {
            f = Ac(new af("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
          }else {
            if(0 <= za(ye, "9")) {
              var n;
              h = "_" + Zd();
              var p = new pc(l);
              t.__loadFlashObject_callbacks[h] = function() {
                g.setTimeout(function() {
                  l();
                  p.X(R(n))
                }, 0)
              };
              b.Qb.set("onloadcallback", '__loadFlashObject_callbacks["' + h + '"]()');
              n = sd(b);
              ud(b, a);
              f = p
            }else {
              f = Ac(new af("Need Flash Player 9+; had " + (ye ? ye : "none")))
            }
          }
          var w = g.setTimeout(function() {
            f.cancel()
          }, 8E3), a = function(a) {
            g.clearTimeout(w);
            return a
          };
          wc(f, a, a, i);
          fe = f;
          a = lf();
          wc(fe, mf, nf)
        }
        var q = this;
        vc(a, function(a) {
          ge || (ge = new hf(q.p, a));
          return k
        });
        vc(a, z(this.Rd, this));
        b = z(this.Pd, this);
        wc(a, k, b, i)
      }
    }else {
      yg(this)
    }
  }
};
s.sf = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Pb, g = a[1].Pb;
  this.rc.push(a[0]);
  this.rc.push(a[1]);
  this.t = new Zf(d, b, g, c);
  yg(this)
};
s.Rd = function() {
  this.t = new Xf(this.t.host, this.t.port, ge);
  yg(this)
};
function yg(a) {
  a.d = "3_STARTED";
  a.h = mg(a, j, j);
  a.h && (lg(a.h, a.ba, k), a.h.ha())
}
s.c = function() {
  this.a.info(Q(this) + " in disposeInternal.");
  jg(this);
  this.d = "5_DISCONNECTED";
  for(var a = this.Gb.D(), b = 0;b < a.length;b++) {
    a[b].b()
  }
  for(a = 0;a < this.rc.length;a++) {
    kb(this.rc[a].td, this)
  }
  F && this.Hb && (ic(this.Hb), this.Hb = k);
  this.ze && this.ze.call(this.mb);
  delete this.Gb;
  delete this.h;
  delete this.s;
  delete this.Ab;
  delete this.mb;
  gg.e.c.call(this)
};
var Sf = 1, pg = 2, qg = 3;
function rg(a, b, c, d, g, f) {
  this.p = a;
  this.A = b;
  this.ka = c;
  this.ca = d;
  this.t = g;
  this.v = [];
  this.ma = f;
  this.Ha = !this.ab();
  this.Ba = this.ca != Sf;
  this.df = z(this.ag, this)
}
C(rg, M);
s = rg.prototype;
s.a = Y("cw.net.ClientTransport");
s.k = k;
s.xd = k;
s.Ve = k;
s.gc = k;
s.ja = m;
s.oc = m;
s.cb = k;
s.Rb = 0;
s.gb = -1;
s.ec = -1;
s.Ze = m;
s.tc = m;
s.ya = 0;
s.ub = m;
s.F = function(a) {
  a.push("<ClientTransport #", "" + this.ka, ", becomePrimary=", "" + this.ma, ">")
};
s.l = function() {
  return(this.ma ? "Prim. T#" : "Sec. T#") + this.ka
};
s.Id = function() {
  return!(!this.ub && this.Rb)
};
s.ab = function() {
  return this.ca == Sf || this.ca == pg
};
function zg(a, b) {
  I.sort.call(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  } || ob);
  a: {
    var c = a.A, d = !a.Ba, g, f = c.Pc;
    g = c.If;
    for(var h = c.Hf, l = [], n = m, p = 0, w = b.length;p < w;p++) {
      var q = b[p], x = q[0], q = q[1];
      if(x == f.Oa + 1) {
        f.Oa += 1;
        for(l.push(q);;) {
          x = f.Oa + 1;
          q = f.Ga.get(x, me);
          if(q === me) {
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
          var A = ee(q);
          if(h != k && f.M + A > h) {
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
      for(h = 0;h < f.length;h++) {
        l = f[h];
        if(c.cd) {
          try {
            c.cd.call(c.mb, l)
          }catch(Ec) {
            V(c.a, "onstring raised uncaught exception", Ec), dg(Ec)
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
    a.Rb += 1;
    W(a.a, a.l() + " RECV " + Q(d));
    var g;
    1 == a.Rb && !d.Q($f) && a.ab() ? (V(a.a, a.l() + " is closing soon because got bad preamble: " + Q(d)), g = j) : g = m;
    if(g) {
      return j
    }
    if(d instanceof wf) {
      if(!/^([ -~]*)$/.test(d.ud)) {
        return a.ub = j
      }
      a.ec += 1;
      c.push([a.ec, d.ud])
    }else {
      if(d instanceof vf) {
        var f = a.A, h = d.Ca;
        f.me = h;
        var l = f.ba, n = h.Va, c = m;
        n > l.Ia && (c = j);
        for(var p = je(l).concat(), d = 0;d < p.length;d++) {
          var w = p[d];
          if(w > n) {
            break
          }
          var q = l.J.get(w)[1];
          l.J.remove(w);
          l.M -= q
        }
        for(d = 0;d < h.Ra.length;d++) {
          var x = h.Ra[d];
          x > l.Ia && (c = j);
          l.J.da(x) && (q = l.J.get(x)[1], l.J.remove(x), l.M -= q)
        }
        l.J.Na() && l.J.clear();
        if(c) {
          return V(a.a, a.l() + " is closing soon because got bad SackFrame"), a.ub = j
        }
      }else {
        if(d instanceof yf) {
          a.ec = d.Ne - 1
        }else {
          if(d instanceof Af) {
            a.A.ne = d.le
          }else {
            if(d instanceof Cf) {
              return X(a.a, a.l() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof Ff) {
              return a.ub = j, "stream_attach_failure" == d.reason ? a.ya += 1 : "acked_unsent_strings" == d.reason && (a.ya += 0.5), X(a.a, a.l() + " is closing soon because got " + Q(d)), j
            }
            if(!(d instanceof xf)) {
              if(d instanceof Bf) {
                var A = a.A, Ec = !a.Ba;
                X(A.a, "Stream is now confirmed to exist at server.");
                A.qd = j;
                A.jd && !Ec && (A.jd = m, ig(A))
              }else {
                if(c.length) {
                  zg(a, c);
                  if(!ga(c)) {
                    for(var Yd = c.length - 1;0 <= Yd;Yd--) {
                      delete c[Yd]
                    }
                  }
                  c.length = 0
                }
                if(d instanceof Df) {
                  var bg = a.A;
                  wg(bg, d.Fe, d.Dd);
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
function ef(a, b) {
  a.oc = j;
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
    a.oc = m;
    a.v.length && a.ha();
    c && (X(a.a, a.l() + " closeSoon is true.  Frames were: " + Q(b)), a.b())
  }finally {
    a.oc = m
  }
}
s.ag = function() {
  V(this.a, this.l() + " timed out due to lack of connection or no data being received.");
  this.b()
};
function Bg(a) {
  a.gc != k && (a.p.B.clearTimeout(a.gc), a.gc = k)
}
function Tf(a, b) {
  Bg(a);
  b = Math.round(b);
  a.gc = a.p.B.setTimeout(a.df, b);
  W(a.a, a.l() + "'s receive timeout set to " + b + " ms.")
}
function df(a) {
  a.ca != Sf && (a.ca == qg || a.ca == pg ? Tf(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ca)))
}
function kg(a) {
  var b = new tf;
  b.ka = a.ka;
  b.Ce = 2;
  b.de = 2;
  a.A.qd || (b.He = j);
  b.Fb = a.A.Fb;
  b.sd = a.Ba;
  b.sd && (b.ue = 4096);
  b.se = 3E5;
  b.qe = a.Ba ? Math.floor(10) : 0;
  b.We = m;
  a.ma && (b.Se = k, b.Wc = Math.floor((a.Ba ? 358E4 : 25E3) / 1E3));
  b.Ca = le(a.A.Pc);
  b.ac = a.A.me;
  a.v.push(b);
  a.cb = b.Ca
}
function ff(a, b) {
  b && (a.ya += 0.5);
  a.b()
}
s.ha = function() {
  this.ja && !this.Ha && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.oc) {
    X(this.a, this.l() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.ja;
    this.ja = j;
    !a && !this.v.length && kg(this);
    for(a = 0;a < this.v.length;a++) {
      W(this.a, this.l() + " SEND " + Q(this.v[a]))
    }
    if(this.ab()) {
      for(var a = [], b = 0, c = this.v.length;b < c;b++) {
        this.v[b].T(a), a.push("\n")
      }
      this.v = [];
      a = a.join("");
      b = this.ma ? this.t.aa : this.t.Ea;
      this.k = Uf.Dc(this, this.ma ? this.t.Be : this.t.Me);
      this.xd = this.p.B === oc ? B() : this.p.B.getTime();
      this.k.Vc(b, "POST", a);
      Tf(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Ba ? 0 : this.ma ? 25E3 : 0))
    }else {
      if(this.ca == qg) {
        a = [];
        b = 0;
        for(c = this.v.length;b < c;b++) {
          a.push(this.v[b].P())
        }
        this.v = [];
        this.k ? this.k.Ib(a) : (b = this.t, this.k = new jf(this), this.k.nc = b.cg.Dc(this.k), this.xd = this.p.B === oc ? B() : this.p.B.getTime(), this.k.Ac(b.host, b.port), this.k.ea || (this.k.Ib(a), this.k.ea || Tf(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.ca))
      }
    }
  }
};
function lg(a, b, c) {
  !a.ja && !a.v.length && kg(a);
  for(var d = Math.max(c, a.gb + 1), g = je(b), c = [], f = 0;f < g.length;f++) {
    var h = g[f];
    (d == k || h >= d) && c.push([h, b.J.get(h)[0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    f = c[b], g = f[0], f = f[1], (-1 == a.gb || a.gb + 1 != g) && a.v.push(new yf(g)), a.v.push(new wf(f)), a.gb = g
  }
}
s.c = function() {
  this.a.info(this.l() + " in disposeInternal.");
  rg.e.c.call(this);
  this.Ve = this.p.B === oc ? B() : this.p.B.getTime();
  this.v = [];
  Bg(this);
  this.k && this.k.b();
  var a = this.A;
  this.A = k;
  vg(a, this)
};
function xg(a, b) {
  !a.ja && !a.v.length && kg(a);
  a.v.push(new Df(b, j));
  a.Ze = j
}
function ug(a, b, c, d) {
  this.p = a;
  this.A = b;
  this.Od = c;
  this.Kd = d
}
C(ug, M);
s = ug.prototype;
s.ja = m;
s.Ha = m;
s.Wb = k;
s.cb = k;
s.a = Y("cw.net.DoNothingTransport");
function Cg(a) {
  a.Wb = a.p.B.setTimeout(function() {
    a.Wb = k;
    a.Kd--;
    a.Kd ? Cg(a) : a.b()
  }, a.Od)
}
s.ha = function() {
  this.ja && !this.Ha && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.ja = j;
  Cg(this)
};
s.F = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.Od, ">")
};
s.ab = r(m);
s.l = r("Wast. T");
s.Id = r(m);
s.c = function() {
  this.a.info(this.l() + " in disposeInternal.");
  ug.e.c.call(this);
  this.Wb != k && this.p.B.clearTimeout(this.Wb);
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
}, Ee:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
function Hg(a) {
  a = "" + a;
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
Ig.prototype.Jb = k;
var Jg;
function Kg() {
}
C(Kg, Ig);
function Lg(a) {
  return(a = Mg(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Ng(a) {
  var b = {};
  Mg(a) && (b[0] = j, b[1] = j);
  return b
}
Kg.prototype.Nc = k;
function Mg(a) {
  if(!a.Nc && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Nc = d
      }catch(g) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Nc
}
Jg = new Kg;
function Og(a) {
  this.headers = new J;
  this.nb = a || k
}
C(Og, nc);
Og.prototype.a = Y("goog.net.XhrIo");
var Pg = /^https?$/i;
s = Og.prototype;
s.la = m;
s.i = k;
s.sc = k;
s.Tc = "";
s.ke = "";
s.wb = "";
s.Fc = m;
s.Yb = m;
s.Oc = m;
s.La = m;
s.pc = 0;
s.Sa = k;
s.Ke = "";
s.ig = m;
s.send = function(a, b, c, d) {
  this.i && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Tc = a;
  this.wb = "";
  this.ke = b;
  this.Fc = m;
  this.la = j;
  this.i = this.nb ? Lg(this.nb) : Lg(Jg);
  this.sc = this.nb ? this.nb.Jb || (this.nb.Jb = Ng(this.nb)) : Jg.Jb || (Jg.Jb = Ng(Jg));
  this.i.onreadystatechange = z(this.ye, this);
  try {
    W(this.a, Qg(this, "Opening Xhr")), this.Oc = j, this.i.open(b, a, j), this.Oc = m
  }catch(g) {
    W(this.a, Qg(this, "Error opening Xhr: " + g.message));
    Rg(this, g);
    return
  }
  var a = c || "", f = this.headers.O();
  d && sb(d, function(a, b) {
    f.set(b, a)
  });
  "POST" == b && !f.da("Content-Type") && f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  sb(f, function(a, b) {
    this.i.setRequestHeader(b, a)
  }, this);
  this.Ke && (this.i.responseType = this.Ke);
  "withCredentials" in this.i && (this.i.withCredentials = this.ig);
  try {
    this.Sa && (oc.clearTimeout(this.Sa), this.Sa = k), 0 < this.pc && (W(this.a, Qg(this, "Will abort after " + this.pc + "ms if incomplete")), this.Sa = oc.setTimeout(z(this.bg, this), this.pc)), W(this.a, Qg(this, "Sending request")), this.Yb = j, this.i.send(a), this.Yb = m
  }catch(h) {
    W(this.a, Qg(this, "Send error: " + h.message)), Rg(this, h)
  }
};
s.bg = function() {
  "undefined" != typeof ba && this.i && (this.wb = "Timed out after " + this.pc + "ms, aborting", W(this.a, Qg(this, this.wb)), this.dispatchEvent("timeout"), this.abort(8))
};
function Rg(a, b) {
  a.la = m;
  a.i && (a.La = j, a.i.abort(), a.La = m);
  a.wb = b;
  Sg(a);
  Tg(a)
}
function Sg(a) {
  a.Fc || (a.Fc = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
s.abort = function() {
  this.i && this.la && (W(this.a, Qg(this, "Aborting")), this.la = m, this.La = j, this.i.abort(), this.La = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Tg(this))
};
s.c = function() {
  this.i && (this.la && (this.la = m, this.La = j, this.i.abort(), this.La = m), Tg(this, j));
  Og.e.c.call(this)
};
s.ye = function() {
  !this.Oc && !this.Yb && !this.La ? this.Lf() : Ug(this)
};
s.Lf = function() {
  Ug(this)
};
function Ug(a) {
  if(a.la && "undefined" != typeof ba) {
    if(a.sc[1] && 4 == a.ta() && 2 == Vg(a)) {
      W(a.a, Qg(a, "Local request error detected and ignored"))
    }else {
      if(a.Yb && 4 == a.ta()) {
        oc.setTimeout(z(a.ye, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.ta()) {
          W(a.a, Qg(a, "Request complete"));
          a.la = m;
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
                var f = ("" + a.Tc).match(Xa)[1] || k;
                if(!f && self.location) {
                  var h = self.location.protocol, f = h.substr(0, h.length - 1)
                }
                g = !Pg.test(f ? f.toLowerCase() : "")
              }
              c = g
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
              a.wb = l + " [" + Vg(a) + "]";
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
    var c = a.i, d = a.sc[0] ? da : k;
    a.i = k;
    a.sc = k;
    a.Sa && (oc.clearTimeout(a.Sa), a.Sa = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(g) {
      U(a.a, "Problem encountered resetting onreadystatechange: " + g.message)
    }
  }
}
s.ge = function() {
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
  return this.i && 4 == this.ta() ? this.i.getResponseHeader(a) : i
};
function Qg(a, b) {
  return b + " [" + a.ke + " " + a.Tc + " " + Vg(a) + "]"
}
;var Wg = !(E || F && !G("420+"));
function Xg(a, b) {
  this.qc = a;
  this.W = b
}
C(Xg, M);
s = Xg.prototype;
s.k = k;
s.Aa = -1;
s.Ud = m;
s.ce = "Content-Length Server Date Expires Keep-Alive Content-Type Transfer-Encoding Cache-Control".split(" ");
function Yg(a) {
  var b = Qf(a.Md), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.W, c, b), 1 != b && a.b()) : a.b()
}
s.Df = function() {
  Yg(this);
  if(!this.ea) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.W);
    this.b()
  }
};
s.Pf = function() {
  var a = t.parent;
  if(a) {
    this.Aa = this.k.ta();
    if(2 <= this.Aa && !this.Ud) {
      for(var b = new J, c = this.ce.length;c--;) {
        var d = this.ce[c];
        try {
          b.set(d, this.k.i.getResponseHeader(d))
        }catch(g) {
        }
      }
      if(b.r() && (this.Ud = j, a.__XHRMaster_ongotheaders(this.W, xb(b)), this.ea)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.W, this.Aa);
    Wg && 3 == this.Aa && Yg(this)
  }else {
    this.b()
  }
};
s.Vc = function(a, b, c) {
  this.k = new Og;
  O(this.k, "readystatechange", z(this.Pf, this));
  O(this.k, "complete", z(this.Df, this));
  this.k.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Md = new Pf(this.k.i, 1048576)
};
s.c = function() {
  Xg.e.c.call(this);
  delete this.Md;
  this.k && this.k.b();
  delete this.qc.Eb[this.W];
  delete this.qc
};
function Zg() {
  this.Eb = {}
}
C(Zg, M);
Zg.prototype.Gf = function(a, b, c, d) {
  var g = new Xg(this, a);
  this.Eb[a] = g;
  g.Vc(b, c, d)
};
Zg.prototype.of = function(a) {
  (a = this.Eb[a]) && a.b()
};
Zg.prototype.c = function() {
  Zg.e.c.call(this);
  for(var a = $a(this.Eb);a.length;) {
    a.pop().b()
  }
  delete this.Eb
};
var $g = new Zg;
t.__XHRSlave_makeRequest = z($g.Gf, $g);
t.__XHRSlave_dispose = z($g.of, $g);
var ah = Y("cw.net.demo");
function bh() {
}
bh.prototype.Td = function() {
  return Boolean(Number((new K(document.location)).K.get("httpStreaming", "0"))) ? 2 : 1
};
function ch() {
  this.Ge = B()
}
var dh = new ch;
ch.prototype.set = aa("Ge");
ch.prototype.reset = function() {
  this.set(B())
};
ch.prototype.get = o("Ge");
function eh(a) {
  this.gd = a || "";
  this.Xf = dh
}
eh.prototype.Tf = j;
eh.prototype.Vf = j;
eh.prototype.Uf = j;
eh.prototype.Oe = m;
function fh(a) {
  return 10 > a ? "0" + a : "" + a
}
function gh(a, b) {
  var c = (a.Te - b) / 1E3, d = c.toFixed(3), g = 0;
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
C(hh, eh);
hh.prototype.Oe = j;
function ih(a) {
  this.Xc = a || 100;
  this.na = []
}
s = ih.prototype;
s.xb = 0;
s.add = function(a) {
  this.na[this.xb] = a;
  this.xb = (this.xb + 1) % this.Xc
};
s.get = function(a) {
  a = jh(this, a);
  return this.na[a]
};
s.set = function(a, b) {
  a = jh(this, a);
  this.na[a] = b
};
s.r = function() {
  return this.na.length
};
s.Na = function() {
  return 0 == this.na.length
};
s.clear = function() {
  this.xb = this.na.length = 0
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
s.Mb = function(a) {
  for(var b = this.r(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return j
    }
  }
  return m
};
function jh(a, b) {
  b >= a.na.length && e(Error("Out of bounds exception"));
  return a.na.length < a.Xc ? b : (a.xb + Number(b)) % a.Xc
}
;function kh(a, b) {
  this.ua = a || "";
  this.gd = b || "";
  this.hb = [];
  this.jc = new ih(lh);
  this.Of = z(this.bf, this);
  this.wf = new hh(this.gd);
  this.tf = {};
  if(j != this.he) {
    this.he = j;
    var c = Ye(), d = this.Of;
    c.vb || (c.vb = []);
    c.vb.push(d)
  }
  this.rb = "1" == mh(this.ua, "enabled");
  t.setInterval(z(this.Sf, this), 7500)
}
var lh = 500;
s = kh.prototype;
s.Ye = "LOGGING";
s.qf = m;
s.w = k;
s.Ad = m;
s.he = m;
s.Fd = k;
s.Sc = B();
s.Ma = function() {
  this.rb && nh(this)
};
s.isEnabled = o("rb");
s.lc = function(a) {
  (this.rb = a) && nh(this);
  oh(this, "enabled", a ? "1" : "0")
};
function ph(a) {
  return!!a.w && !a.w.closed
}
s.hf = function() {
  this.jc.clear();
  ph(this) && this.Cd()
};
s.bf = function(a) {
  if(!this.tf[a.pe]) {
    var b = this.wf, c;
    switch(a.V.value) {
      case Je.value:
        c = "dbg-sh";
        break;
      case Ke.value:
        c = "dbg-sev";
        break;
      case Le.value:
        c = "dbg-w";
        break;
      case Me.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.gd, " ");
    if(b.Tf) {
      var g = new Date(a.Te);
      d.push("[", fh(g.getFullYear() - 2E3) + fh(g.getMonth() + 1) + fh(g.getDate()) + " " + fh(g.getHours()) + ":" + fh(g.getMinutes()) + ":" + fh(g.getSeconds()) + "." + fh(Math.floor(g.getMilliseconds() / 10)), "] ")
    }
    b.Vf && d.push("[", ya(gh(a, b.Xf.get())), "s] ");
    b.Uf && d.push("[", D(a.pe), "] ");
    d.push('<span class="', c, '">', sa(ya(D(a.te))));
    b.Oe && a.Ic && d.push("<br>", sa(ya(a.Hc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.rb ? (nh(this), this.jc.add(b), qh(this, b)) : this.jc.add(b);
    this.qf && a.V.value >= Ke.value && this.lc(j)
  }
};
function qh(a, b) {
  a.hb.push(b);
  t.clearTimeout(a.Fd);
  750 < B() - a.Sc ? a.Bd() : a.Fd = t.setTimeout(z(a.Bd, a), 250)
}
s.Bd = function() {
  this.Sc = B();
  if(ph(this)) {
    var a = this.w.document.body, a = a && 100 >= a.scrollHeight - (a.scrollTop + a.clientHeight);
    this.w.document.write(this.hb.join(""));
    this.hb.length = 0;
    a && this.w.scrollTo(0, 1E6)
  }
};
function rh(a) {
  for(var b = a.jc.D(), c = 0;c < b.length;c++) {
    qh(a, b[c])
  }
}
function nh(a) {
  if(!ph(a) && !a.Ad) {
    var b = mh(a.ua, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), g = Number(b[2]), b = Number(b[3]);
    a.Ad = j;
    a.w = window.open("", E ? a.ua.replace(/[\s\-\.\,]/g, "_") : a.ua, "width=" + g + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    !a.w && !a.Wf && (alert("Logger popup was blocked"), a.Wf = j);
    a.Ad = m;
    a.w && a.Cd()
  }
}
s.Tb = r("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
s.Cd = function() {
  ph(this) || (this.w.document.open(), qh(this, "<style>" + this.Tb() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.Ye + "<br><small>Logger: " + this.ua + "</small></div><hr>"), rh(this))
};
function oh(a, b, c) {
  b += a.ua;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(B() + 2592E6)).toUTCString()
}
function mh(a, b, c) {
  var a = b + a, b = "" + document.cookie, d = b.indexOf(a + "=");
  return-1 != d ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, -1 == c ? b.length : c))) : c || ""
}
s.Sf = function() {
  ph(this) && oh(this, "dbg", (this.w.screenX || this.w.screenLeft || 0) + "," + (this.w.screenY || this.w.screenTop || 0) + "," + (this.w.outerWidth || 800) + "," + (this.w.outerHeight || 500))
};
function sh(a, b) {
  if(th) {
    var c = uh(), d;
    for(d in c) {
      var c = d.replace("fancywindow.sel.", ""), c = Y(c), g = c.V, f = window.localStorage.getItem(d).toString();
      (!g || g.toString() != f) && c.kb(Te(f))
    }
  }
  kh.call(this, a, b)
}
C(sh, kh);
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
s.Bd = function() {
  this.Sc = B();
  if(ph(this)) {
    for(var a = this.H.g("log"), b = 100 >= a.scrollHeight - (a.scrollTop + a.offsetHeight), c = 0;c < this.hb.length;c++) {
      var d = this.H.n("div", "logmsg");
      d.innerHTML = this.hb[c];
      a.appendChild(d)
    }
    this.hb.length = 0;
    this.Je();
    b && (a.scrollTop = a.scrollHeight)
  }
};
s.Cd = function() {
  if(ph(this)) {
    var a = this.w.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.ua + "</title><style>" + this.Tb() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.ua + "</b></p><p>" + this.Ye + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (E ? a.body : this.w).onresize = z(this.Je, this);
    this.H = new Vc(a);
    this.H.g("openbutton").onclick = z(this.Mf, this);
    this.H.g("closebutton").onclick = z(this.jf, this);
    this.H.g("clearbutton").onclick = z(this.hf, this);
    this.H.g("exitbutton").onclick = z(this.rf, this);
    rh(this)
  }
};
s.Mf = function() {
  var a = this.H.g("optionsarea");
  a.innerHTML = "";
  for(var b = wh(), c = this.H, d = 0;d < b.length;d++) {
    var g = Y(b[d]), g = c.n("div", {}, xh(this, "sel" + b[d], g.V ? g.V.name : "INHERIT"), c.n("span", {}, b[d] || "(root)"));
    a.appendChild(g)
  }
  this.H.g("options").style.display = "block";
  return m
};
function xh(a, b, c) {
  for(var a = a.H, b = a.n("select", {id:b}), d = 0;d < Re.length;d++) {
    var g = Re[d], f = a.n("option", {}, g.name);
    c == g.name && (f.selected = j);
    b.appendChild(f)
  }
  b.appendChild(a.n("option", {selected:"INHERIT" == c}, "INHERIT"));
  return b
}
s.jf = function() {
  this.H.g("options").style.display = "none";
  for(var a = wh(), b = this.H, c = 0;c < a.length;c++) {
    var d = Y(a[c]), g = b.g("sel" + a[c]), g = g.options[g.selectedIndex].text;
    "INHERIT" == g ? d.kb(k) : d.kb(Te(g))
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
s.Je = function() {
  var a = this.H, b = a.g("log"), c = a.g("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.fa.body.offsetHeight - c.offsetHeight - (E ? 4 : 0) + "px"
};
s.rf = function() {
  this.lc(m);
  this.w && this.w.close()
};
s.Tb = function() {
  return sh.e.Tb.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function uh() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != k && 0 == d.lastIndexOf("fancywindow.sel.", 0) && (a[d] = j)
  }
  return a
}
function wh() {
  var a = ab(Ve);
  a.sort();
  return a
}
;var yh, zh = Y("ljstream.logger");
window.onerror = function(a, b, c) {
  U(zh, "window.onerror: message: " + Q(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Ah() {
}
Ah.prototype.Qe = function(a) {
  this.A = a;
  og(this.A, "subprotocol:ljstream");
  Bh(this)
};
Ah.prototype.Pe = function(a, b) {
  zh.info("streamReset: reasonString=" + Q(a) + ", applicationLevel=" + b);
  Ch("Disconnected from server.  Try reloading this page.");
  Dh = k
};
function Bh(a) {
  zh.info("Sending preferences to server");
  og(a.A, Fc(["SetPreferences", {include_russian_posts:R("include_russian_posts").checked}]))
}
Ah.prototype.Re = function(a) {
  var a = Hg(a), b = a[1];
  if("NewPost" == a[0]) {
    var a = b.title, c = b.url, b = b.body;
    (a = ra(a)) || (a = "[No title]");
    var b = D(b), d;
    d = d || {};
    var g = [], f, h;
    for(h in Gg) {
      u(d[h]) || (d[h] = Gg[h])
    }
    for(;h = Dg.exec(b);) {
      h = h[0];
      var l = Dg.lastIndex, n = l - h.length;
      if(!/[\/:]/.test(b.charAt(n - 1))) {
        do {
          var p = h, w = h.substr(-1), q = Fg[w];
          if(q && (q = h.match(RegExp("\\" + q + "(?!$)", "g")), w = h.match(RegExp("\\" + w, "g")), (q ? q.length : 0) < (w ? w.length : 0))) {
            h = h.substr(0, h.length - 1), l--
          }
          d.Ee && (h = h.replace(d.Ee, function(a) {
            l -= a.length;
            return""
          }))
        }while(h.length && h !== p);
        p = h;
        Eg.test(p) || (p = (-1 !== p.indexOf("@") ? !p.indexOf("mailto:") ? "" : "mailto:" : !p.indexOf("irc.") ? "irc://" : !p.indexOf("ftp.") ? "ftp://" : "http://") + p);
        f != n && (g.push([b.slice(f, n)]), f = l);
        g.push([h, p])
      }
    }
    g.push([b.substr(f)]);
    f = "";
    for(h = 0;h < g.length;h++) {
      f += d.X.apply(t, g[h])
    }
    f = f || b;
    b = document;
    d = b.createElement("div");
    E ? (d.innerHTML = "<br>" + f, d.removeChild(d.firstChild)) : d.innerHTML = f;
    if(1 == d.childNodes.length) {
      d = d.removeChild(d.firstChild)
    }else {
      for(f = b.createDocumentFragment();d.firstChild;) {
        f.appendChild(d.firstChild)
      }
      d = f
    }
    a = Yc("span", {}, Yc("a", {href:c, "class":"ljpost-title-link"}, a), Yc("span", {}, "\u00a0"), d);
    Eh(a)
  }
};
Ah.prototype.reset = function(a) {
  zh.info("resetting with reason: " + a);
  this.A.reset(a)
};
var Dh = k, Fh = new Bc(t.window);
function Ch(a) {
  a = Yc("span", {"class":"important-message"}, a);
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
O(window, ["click", "focus", "keydown", "keypress"], Ih, j);
var hd = new Vc, Jh = 0;
function Eh(a) {
  a = Yc("div", {"class":"row-" + (0 == Jh % 2 ? "even" : "odd")}, Yc("nobr", {}, a));
  R("ljstream-container-inner").appendChild(a);
  Jh += 1;
  if(yh) {
    for(var b = a, a = b.offsetTop, c = b.offsetHeight;b.offsetParent;) {
      b = b.offsetParent, a += b.offsetTop
    }
    var d = document, b = !F && "CSS1Compat" == d.compatMode ? d.documentElement : d.body, d = d.parentWindow || d.defaultView;
    a + c <= (new Mc(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop)).y + gd().height || window.scrollBy(0, Math.round(gd().height / 2) + 80)
  }
}
function Kh() {
  Ye().kb(Qe);
  if("1" == (new K(document.location)).K.get("logging")) {
    var a = new sh("main");
    a.lc(j);
    a.Ma()
  }
  zh.info("Logger works.");
  O(t, "load", function() {
    window.scrollTo(0, 0)
  });
  O(R("include_russian_posts"), "click", function() {
    Bh(Dh)
  });
  yh = j;
  O(R("automatic_scroll"), "click", function(a) {
    yh = a.target.checked
  });
  a = new Xd("Clear posts");
  Md(a, "clear-posts-button");
  ud(a, R("prefs"));
  O(a, "action", function() {
    R("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = R("ljstream-container");
  a.style.marginTop = R("demo-header").offsetHeight + "px";
  R("demo-header").style.width = "9000px";
  var b = Yc("div", {id:"ljstream-container-inner"});
  a.appendChild(b);
  a = new bh;
  Dh = new Ah;
  Ih();
  var c = (new K(document.location)).K, b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    V(ah, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new K(document.location);
  b ? b = new Wf("/_minerva/", c.pa, t.__demo_mainSocketPort) : (d ? (b = t.__demo_shared_domain, v(b) || e(Error("domain was " + Q(b) + "; expected a string.")), c = c.O(), zb(c, "_____random_____." + b)) : c = c.O(), Bb(c, "/_minerva/"), Cb(c, "", i), b = new Yf(c.toString().replace("_____random_____", "%random%")));
  a = new gg(b, a, Fh);
  b = Dh;
  u(b.Qe) || e(Error("Protocol is missing required method streamStarted"));
  u(b.Pe) || e(Error("Protocol is missing required method streamReset"));
  u(b.Re) || e(Error("Protocol is missing required method stringReceived"));
  a.bd = z(b.Qe, b);
  a.onreset = z(b.Pe, b);
  a.cd = z(b.Re, b);
  a.dd = u(b.dg) ? z(b.dg, b) : k;
  a.ed = u(b.eg) ? z(b.eg, b) : k;
  a.start()
}
var Lh = ["__ljstream_init"], Mh = t;
!(Lh[0] in Mh) && Mh.execScript && Mh.execScript("var " + Lh[0]);
for(var Nh;Lh.length && (Nh = Lh.shift());) {
  !Lh.length && u(Kh) ? Mh[Nh] = Kh : Mh = Mh[Nh] ? Mh[Nh] : Mh[Nh] = {}
}
;
})();
