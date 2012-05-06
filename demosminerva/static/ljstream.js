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
function p(a) {
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
    var l = d[h] || "", n = g[h] || "", o = RegExp("(\\d*)(\\D*)", "g"), w = RegExp("(\\d*)(\\D*)", "g");
    do {
      var q = o.exec(l) || ["", "", ""], x = w.exec(n) || ["", "", ""];
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
function mb(a, b, c) {
  return 2 >= arguments.length ? I.slice.call(a, b) : I.slice.call(a, b, c)
}
function nb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function ob(a) {
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
function pb(a) {
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
function qb(a) {
  if("function" == typeof a.$) {
    return a.$()
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
function rb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ha(a) || v(a)) {
      eb(a, b, c)
    }else {
      for(var d = qb(a), g = pb(a), f = g.length, h = 0;h < f;h++) {
        b.call(c, g[h], d && d[h], a)
      }
    }
  }
}
function sb(a, b) {
  if("function" == typeof a.every) {
    return a.every(b, i)
  }
  if(ha(a) || v(a)) {
    return ib(a, b, i)
  }
  for(var c = qb(a), d = pb(a), g = d.length, f = 0;f < g;f++) {
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
s.r = p("f");
s.D = function() {
  tb(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.o[this.j[b]])
  }
  return a
};
s.$ = function() {
  tb(this);
  return this.j.concat()
};
s.ea = function(a) {
  return ub(this.o, a)
};
s.Mb = function(a) {
  for(var b = 0;b < this.j.length;b++) {
    var c = this.j[b];
    if(ub(this.o, c) && this.o[c] == a) {
      return j
    }
  }
  return m
};
s.R = function(a, b) {
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
  this.f = this.j.length = 0
};
s.remove = function(a) {
  return ub(this.o, a) ? (delete this.o[a], this.f--, this.j.length > 2 * this.f && tb(this), j) : m
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
  ub(this.o, a) || (this.f++, this.j.push(a));
  this.o[a] = b
};
s.uc = function(a) {
  var b;
  a instanceof J ? (b = a.$(), a = a.D()) : (b = ab(a), a = $a(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
s.O = function() {
  return new J(this)
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
;function K(a, b) {
  var c;
  if(a instanceof K) {
    this.S = u(b) ? b : a.S, xb(this, a.Da), c = a.Ta, L(this), this.Ta = c, yb(this, a.pa), zb(this, a.ib), Ab(this, a.xa), Bb(this, a.K.O()), c = a.Ja, L(this), this.Ja = c
  }else {
    if(a && (c = ("" + a).match(Xa))) {
      this.S = !!b;
      xb(this, c[1] || "", j);
      var d = c[2] || "";
      L(this);
      this.Ta = d ? decodeURIComponent(d) : "";
      yb(this, c[3] || "", j);
      zb(this, c[4]);
      Ab(this, c[5] || "", j);
      Bb(this, c[6] || "", j);
      c = c[7] || "";
      L(this);
      this.Ja = c ? decodeURIComponent(c) : ""
    }else {
      this.S = !!b, this.K = new Cb(k, 0, this.S)
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
s.Ef = m;
s.S = m;
s.toString = function() {
  var a = [], b = this.Da;
  b && a.push(Db(b, Eb), ":");
  if(b = this.pa) {
    a.push("//");
    var c = this.Ta;
    c && a.push(Db(c, Eb), "@");
    a.push(encodeURIComponent("" + b));
    b = this.ib;
    b != k && a.push(":", "" + b)
  }
  if(b = this.xa) {
    this.pa && "/" != b.charAt(0) && a.push("/"), a.push(Db(b, "/" == b.charAt(0) ? Fb : Gb))
  }
  (b = this.K.toString()) && a.push("?", b);
  (b = this.Ja) && a.push("#", Db(b, Hb));
  return a.join("")
};
s.O = function() {
  return new K(this)
};
function xb(a, b, c) {
  L(a);
  a.Da = c ? b ? decodeURIComponent(b) : "" : b;
  a.Da && (a.Da = a.Da.replace(/:$/, ""))
}
function yb(a, b, c) {
  L(a);
  a.pa = c ? b ? decodeURIComponent(b) : "" : b
}
function zb(a, b) {
  L(a);
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.ib = b) : a.ib = k
}
function Ab(a, b, c) {
  L(a);
  a.xa = c ? b ? decodeURIComponent(b) : "" : b
}
function Bb(a, b, c) {
  L(a);
  b instanceof Cb ? (a.K = b, a.K.ld(a.S)) : (c || (b = Db(b, Ib)), a.K = new Cb(b, 0, a.S))
}
function L(a) {
  a.Ef && e(Error("Tried to modify a read-only Uri"))
}
s.ld = function(a) {
  this.S = a;
  this.K && this.K.ld(a);
  return this
};
function Jb(a) {
  return a instanceof K ? a.O() : new K(a, i)
}
function Db(a, b) {
  return v(a) ? encodeURI(a).replace(b, Kb) : k
}
function Kb(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Eb = /[#\/\?@]/g, Gb = /[\#\?:]/g, Fb = /[\#\?]/g, Ib = /[\#\?@]/g, Hb = /#/g;
function Cb(a, b, c) {
  this.I = a || k;
  this.S = !!c
}
function Lb(a) {
  if(!a.m && (a.m = new J, a.f = 0, a.I)) {
    for(var b = a.I.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), g = k, f = k;
      0 <= d ? (g = b[c].substring(0, d), f = b[c].substring(d + 1)) : g = b[c];
      g = decodeURIComponent(g.replace(/\+/g, " "));
      g = Mb(a, g);
      a.add(g, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
    }
  }
}
s = Cb.prototype;
s.m = k;
s.f = k;
s.r = function() {
  Lb(this);
  return this.f
};
s.add = function(a, b) {
  Lb(this);
  this.I = k;
  var a = Mb(this, a), c = this.m.get(a);
  c || this.m.set(a, c = []);
  c.push(b);
  this.f++;
  return this
};
s.remove = function(a) {
  Lb(this);
  a = Mb(this, a);
  return this.m.ea(a) ? (this.I = k, this.f -= this.m.get(a).length, this.m.remove(a)) : m
};
s.clear = function() {
  this.m = this.I = k;
  this.f = 0
};
s.Na = function() {
  Lb(this);
  return 0 == this.f
};
s.ea = function(a) {
  Lb(this);
  a = Mb(this, a);
  return this.m.ea(a)
};
s.Mb = function(a) {
  var b = this.D();
  return jb(b, a)
};
s.$ = function() {
  Lb(this);
  for(var a = this.m.D(), b = this.m.$(), c = [], d = 0;d < b.length;d++) {
    for(var g = a[d], f = 0;f < g.length;f++) {
      c.push(b[d])
    }
  }
  return c
};
s.D = function(a) {
  Lb(this);
  var b = [];
  if(a) {
    this.ea(a) && (b = lb(b, this.m.get(Mb(this, a))))
  }else {
    for(var a = this.m.D(), c = 0;c < a.length;c++) {
      b = lb(b, a[c])
    }
  }
  return b
};
s.set = function(a, b) {
  Lb(this);
  this.I = k;
  a = Mb(this, a);
  this.ea(a) && (this.f -= this.m.get(a).length);
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
  for(var a = [], b = this.m.$(), c = 0;c < b.length;c++) {
    for(var d = b[c], g = encodeURIComponent("" + d), d = this.D(d), f = 0;f < d.length;f++) {
      var h = g;
      "" !== d[f] && (h += "=" + encodeURIComponent("" + d[f]));
      a.push(h)
    }
  }
  return this.I = a.join("&")
};
s.O = function() {
  var a = new Cb;
  a.I = this.I;
  this.m && (a.m = this.m.O());
  return a
};
function Mb(a, b) {
  var c = "" + b;
  a.S && (c = c.toLowerCase());
  return c
}
s.ld = function(a) {
  a && !this.S && (Lb(this), this.I = k, rb(this.m, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.I = k, this.m.set(Mb(this, d), a), this.f += a.length))
  }, this));
  this.S = a
};
var Nb;
Nb = r(j);
function Ob() {
}
var Pb = 0;
s = Ob.prototype;
s.key = 0;
s.Qa = m;
s.yc = m;
s.Ma = function(a, b, c, d, g, f) {
  y(a) ? this.je = j : a && a.handleEvent && y(a.handleEvent) ? this.je = m : e(Error("Invalid listener argument"));
  this.eb = a;
  this.Ce = b;
  this.src = c;
  this.type = d;
  this.capture = !!g;
  this.Xb = f;
  this.yc = m;
  this.key = ++Pb;
  this.Qa = m
};
s.handleEvent = function(a) {
  return this.je ? this.eb.call(this.Xb || this.src, a) : this.eb.handleEvent.call(this.eb, a)
};
var Qb = !E || Ua(), Rb = !E || Ua(), Sb = E && !G("8");
!F || G("528");
Ia && G("1.9b") || E && G("8") || Ha && G("9.5") || F && G("528");
Ia && !G("8") || E && G("9");
var Tb = {qg:"click", vg:"dblclick", Pg:"mousedown", Tg:"mouseup", Sg:"mouseover", Rg:"mouseout", Qg:"mousemove", fh:"selectstart", Kg:"keypress", Jg:"keydown", Lg:"keyup", og:"blur", Dg:"focus", wg:"deactivate", Eg:E ? "focusin" : "DOMFocusIn", Fg:E ? "focusout" : "DOMFocusOut", pg:"change", eh:"select", gh:"submit", Ig:"input", $g:"propertychange", Ag:"dragstart", xg:"dragenter", zg:"dragover", yg:"dragleave", Bg:"drop", kh:"touchstart", jh:"touchmove", ih:"touchend", hh:"touchcancel", sg:"contextmenu", 
Cg:"error", Hg:"help", Mg:"load", Ng:"losecapture", ah:"readystatechange", bh:"resize", dh:"scroll", mh:"unload", Gg:"hashchange", Wg:"pagehide", Xg:"pageshow", Zg:"popstate", tg:"copy", Yg:"paste", ug:"cut", lg:"beforecopy", mg:"beforecut", ng:"beforepaste", Vg:"online", Ug:"offline", Og:"message", rg:"connect", lh:F ? "webkitTransitionEnd" : Ha ? "oTransitionEnd" : "transitionend"};
function M() {
}
M.prototype.P = m;
M.prototype.b = function() {
  this.P || (this.P = j, this.c())
};
M.prototype.c = function() {
  this.lf && Ub.apply(k, this.lf)
};
function Ub(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? Ub.apply(k, d) : d && "function" == typeof d.b && d.b()
  }
}
;function Vb(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
C(Vb, M);
s = Vb.prototype;
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
function Wb(a) {
  a.stopPropagation()
}
;function Xb(a) {
  Xb[" "](a);
  return a
}
Xb[" "] = da;
function Yb(a, b) {
  a && this.Ma(a, b)
}
C(Yb, Vb);
var Zb = [1, 4, 2];
s = Yb.prototype;
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
  Vb.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Ia) {
      var g;
      a: {
        try {
          Xb(d.nodeName);
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
function $b(a) {
  return Qb ? 0 == a.ga.button : "click" == a.type ? j : !!(a.ga.button & Zb[0])
}
s.stopPropagation = function() {
  Yb.e.stopPropagation.call(this);
  this.ga.stopPropagation ? this.ga.stopPropagation() : this.ga.cancelBubble = j
};
s.preventDefault = function() {
  Yb.e.preventDefault.call(this);
  var a = this.ga;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, Sb) {
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
  Yb.e.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ga = k
};
var ac = {}, N = {}, bc = {}, cc = {};
function O(a, b, c, d, g) {
  if(b) {
    if(ga(b)) {
      for(var f = 0;f < b.length;f++) {
        O(a, b[f], c, d, g)
      }
      return k
    }
    var d = !!d, h = N;
    b in h || (h[b] = {f:0, T:0});
    h = h[b];
    d in h || (h[d] = {f:0, T:0}, h.f++);
    var h = h[d], l = ka(a), n;
    h.T++;
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
    var o = dc, w = Rb ? function(a) {
      return o.call(w.src, w.key, a)
    } : function(a) {
      a = o.call(w.src, w.key, a);
      if(!a) {
        return a
      }
    }, f = w;
    f.src = a;
    h = new Ob;
    h.Ma(c, f, a, b, d, g);
    c = h.key;
    f.key = c;
    n.push(h);
    ac[c] = h;
    bc[l] || (bc[l] = []);
    bc[l].push(h);
    a.addEventListener ? (a == t || !a.Ld) && a.addEventListener(b, f, d) : a.attachEvent(b in cc ? cc[b] : cc[b] = "on" + b, f);
    return c
  }
  e(Error("Invalid event type"))
}
function ec(a, b, c, d, g) {
  if(ga(b)) {
    for(var f = 0;f < b.length;f++) {
      ec(a, b[f], c, d, g)
    }
    return k
  }
  a = O(a, b, c, d, g);
  ac[a].yc = j;
  return a
}
function fc(a, b, c, d, g) {
  if(ga(b)) {
    for(var f = 0;f < b.length;f++) {
      fc(a, b[f], c, d, g)
    }
  }else {
    if(d = !!d, a = gc(a, b, d)) {
      for(f = 0;f < a.length;f++) {
        if(a[f].eb == c && a[f].capture == d && a[f].Xb == g) {
          hc(a[f].key);
          break
        }
      }
    }
  }
}
function hc(a) {
  if(!ac[a]) {
    return m
  }
  var b = ac[a];
  if(b.Qa) {
    return m
  }
  var c = b.src, d = b.type, g = b.Ce, f = b.capture;
  c.removeEventListener ? (c == t || !c.Ld) && c.removeEventListener(d, g, f) : c.detachEvent && c.detachEvent(d in cc ? cc[d] : cc[d] = "on" + d, g);
  c = ka(c);
  g = N[d][f][c];
  if(bc[c]) {
    var h = bc[c];
    kb(h, b);
    0 == h.length && delete bc[c]
  }
  b.Qa = j;
  g.ve = j;
  ic(d, f, c, g);
  delete ac[a];
  return j
}
function ic(a, b, c, d) {
  if(!d.bc && d.ve) {
    for(var g = 0, f = 0;g < d.length;g++) {
      d[g].Qa ? d[g].Ce.src = k : (g != f && (d[f] = d[g]), f++)
    }
    d.length = f;
    d.ve = m;
    0 == f && (delete N[a][b][c], N[a][b].f--, 0 == N[a][b].f && (delete N[a][b], N[a].f--), 0 == N[a].f && delete N[a])
  }
}
function gc(a, b, c) {
  var d = N;
  return b in d && (d = d[b], c in d && (d = d[c], a = ka(a), d[a])) ? d[a] : k
}
function jc(a, b, c, d, g) {
  var f = 1, b = ka(b);
  if(a[b]) {
    a.T--;
    a = a[b];
    a.bc ? a.bc++ : a.bc = 1;
    try {
      for(var h = a.length, l = 0;l < h;l++) {
        var n = a[l];
        n && !n.Qa && (f &= kc(n, g) !== m)
      }
    }finally {
      a.bc--, ic(c, d, b, a)
    }
  }
  return Boolean(f)
}
function kc(a, b) {
  var c = a.handleEvent(b);
  a.yc && hc(a.key);
  return c
}
function dc(a, b) {
  if(!ac[a]) {
    return j
  }
  var c = ac[a], d = c.type, g = N;
  if(!(d in g)) {
    return j
  }
  var g = g[d], f, h;
  if(!Rb) {
    f = b || ca("window.event");
    var l = j in g, n = m in g;
    if(l) {
      if(0 > f.keyCode || f.returnValue != i) {
        return j
      }
      a: {
        var o = m;
        if(0 == f.keyCode) {
          try {
            f.keyCode = -1;
            break a
          }catch(w) {
            o = j
          }
        }
        if(o || f.returnValue == i) {
          f.returnValue = j
        }
      }
    }
    o = new Yb;
    o.Ma(f, this);
    f = j;
    try {
      if(l) {
        for(var q = [], x = o.currentTarget;x;x = x.parentNode) {
          q.push(x)
        }
        h = g[j];
        h.T = h.f;
        for(var A = q.length - 1;!o.Pa && 0 <= A && h.T;A--) {
          o.currentTarget = q[A], f &= jc(h, q[A], d, j, o)
        }
        if(n) {
          h = g[m];
          h.T = h.f;
          for(A = 0;!o.Pa && A < q.length && h.T;A++) {
            o.currentTarget = q[A], f &= jc(h, q[A], d, m, o)
          }
        }
      }else {
        f = kc(c, o)
      }
    }finally {
      q && (q.length = 0), o.b()
    }
    return f
  }
  d = new Yb(b, this);
  try {
    f = kc(c, d)
  }finally {
    d.b()
  }
  return f
}
var lc = 0;
function mc() {
}
C(mc, M);
s = mc.prototype;
s.Ld = j;
s.dc = k;
s.md = aa("dc");
s.addEventListener = function(a, b, c, d) {
  O(this, a, b, c, d)
};
s.removeEventListener = function(a, b, c, d) {
  fc(this, a, b, c, d)
};
s.dispatchEvent = function(a) {
  var b = a.type || a, c = N;
  if(b in c) {
    if(v(a)) {
      a = new Vb(a, this)
    }else {
      if(a instanceof Vb) {
        a.target = a.target || this
      }else {
        var d = a, a = new Vb(b, this);
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
      f.T = f.f;
      for(var h = g.length - 1;!a.Pa && 0 <= h && f.T;h--) {
        a.currentTarget = g[h], d &= jc(f, g[h], a.type, j, a) && a.ic != m
      }
    }
    if(m in c) {
      if(f = c[m], f.T = f.f, b) {
        for(h = 0;!a.Pa && h < g.length && f.T;h++) {
          a.currentTarget = g[h], d &= jc(f, g[h], a.type, m, a) && a.ic != m
        }
      }else {
        for(g = this;!a.Pa && g && f.T;g = g.dc) {
          a.currentTarget = g, d &= jc(f, g, a.type, m, a) && a.ic != m
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
  mc.e.c.call(this);
  var a, b = 0, c = a == k;
  a = !!a;
  if(this == k) {
    Za(bc, function(d) {
      for(var f = d.length - 1;0 <= f;f--) {
        var g = d[f];
        if(c || a == g.capture) {
          hc(g.key), b++
        }
      }
    })
  }else {
    var d = ka(this);
    if(bc[d]) {
      for(var d = bc[d], g = d.length - 1;0 <= g;g--) {
        var f = d[g];
        if(c || a == f.capture) {
          hc(f.key), b++
        }
      }
    }
  }
  this.dc = k
};
var nc = t.window;
lc++;
lc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function oc(a, b) {
  this.Kb = [];
  this.Gd = a;
  this.Nd = b || k
}
s = oc.prototype;
s.ra = m;
s.tb = m;
s.yb = 0;
s.pd = m;
s.ff = m;
s.xc = 0;
s.cancel = function(a) {
  if(this.ra) {
    this.Bb instanceof oc && this.Bb.cancel()
  }else {
    if(this.z) {
      var b = this.z;
      delete this.z;
      a ? b.cancel(a) : (b.xc--, 0 >= b.xc && b.cancel())
    }
    this.Gd ? this.Gd.call(this.Nd, this) : this.pd = j;
    this.ra || this.Wa(new pc)
  }
};
s.Jd = function(a, b) {
  qc(this, a, b);
  this.yb--;
  0 == this.yb && this.ra && rc(this)
};
function qc(a, b, c) {
  a.ra = j;
  a.Bb = c;
  a.tb = !b;
  rc(a)
}
function sc(a) {
  a.ra && (a.pd || e(new tc), a.pd = m)
}
s.Y = function(a) {
  sc(this);
  qc(this, j, a)
};
s.Wa = function(a) {
  sc(this);
  qc(this, m, a)
};
function uc(a, b) {
  vc(a, b, k, i)
}
function vc(a, b, c, d) {
  a.Kb.push([b, c, d]);
  a.ra && rc(a)
}
function wc(a) {
  return hb(a.Kb, function(a) {
    return y(a[1])
  })
}
function rc(a) {
  a.yd && (a.ra && wc(a)) && (t.clearTimeout(a.yd), delete a.yd);
  a.z && (a.z.xc--, delete a.z);
  for(var b = a.Bb, c = m, d = m;a.Kb.length && 0 == a.yb;) {
    var g = a.Kb.shift(), f = g[0], h = g[1], g = g[2];
    if(f = a.tb ? h : f) {
      try {
        var l = f.call(g || a.Nd, b);
        u(l) && (a.tb = a.tb && (l == b || l instanceof Error), a.Bb = b = l);
        b instanceof oc && (d = j, a.yb++)
      }catch(n) {
        b = n, a.tb = j, wc(a) || (c = j)
      }
    }
  }
  a.Bb = b;
  d && a.yb && (vc(b, z(a.Jd, a, j), z(a.Jd, a, m)), b.ff = j);
  c && (a.yd = t.setTimeout(function() {
    e(new xc(b))
  }, 0))
}
function yc(a) {
  var b = new oc;
  b.Y(a);
  return b
}
function zc(a) {
  var b = new oc;
  b.Wa(a);
  return b
}
function tc() {
  H.call(this)
}
C(tc, H);
tc.prototype.message = "Already called";
function pc() {
  H.call(this)
}
C(pc, H);
pc.prototype.message = "Deferred was cancelled";
function xc(a) {
  H.call(this);
  this.message = "Unhandled Error in Deferred: " + (a.message || "[No message]")
}
C(xc, H);
function Ac(a) {
  this.B = a;
  this.Ob = [];
  this.Qd = [];
  this.ef = z(this.fg, this)
}
Ac.prototype.vd = k;
Ac.prototype.fg = function() {
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
      a[b].Y(k)
    }
  }
};
var Bc = new Ac(t.window);
function Cc(a) {
  return y(a) || "object" == typeof a && y(a.call) && y(a.apply)
}
;function Ec(a) {
  var b = [];
  Fc(new Gc, a, b);
  return b.join("")
}
function Gc() {
  this.hc = i
}
function Fc(a, b, c) {
  switch(typeof b) {
    case "string":
      Hc(b, c);
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
          c.push(g), g = b[f], Fc(a, a.hc ? a.hc.call(b, "" + f, g) : g, c), g = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (g = b[f], "function" != typeof g && (c.push(d), Hc(f, c), c.push(":"), Fc(a, a.hc ? a.hc.call(b, f, g) : g, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var Ic = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Jc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Hc(a, b) {
  b.push('"', a.replace(Jc, function(a) {
    if(a in Ic) {
      return Ic[a]
    }
    var b = a.charCodeAt(0), g = "\\u";
    16 > b ? g += "000" : 256 > b ? g += "00" : 4096 > b && (g += "0");
    return Ic[a] = g + b.toString(16)
  }), '"')
}
;function Kc(a, b, c) {
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
        Hc(a, b)
      }else {
        if(Cc(a.F)) {
          a.F(b, c)
        }else {
          if(Cc(a.$e)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if("array" == d) {
                d = a.length;
                b.push("[");
                for(var g = "", f = 0;f < d;f++) {
                  b.push(g), Kc(a[f], b, c), g = ", "
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
                      f = d[h], Object.prototype.hasOwnProperty.call(a, f) && (l = a[f], b.push(g), Hc(f, b), b.push(": "), Kc(l, b, c), g = ", ")
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
  Kc(a, b, c)
}
function Q(a) {
  var b = [];
  P(a, b, i);
  return b.join("")
}
;function Lc(a, b) {
  this.x = u(a) ? a : 0;
  this.y = u(b) ? b : 0
}
Lc.prototype.O = function() {
  return new Lc(this.x, this.y)
};
Lc.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function Mc(a, b) {
  this.width = a;
  this.height = b
}
s = Mc.prototype;
s.O = function() {
  return new Mc(this.width, this.height)
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
var Nc;
function Oc(a) {
  a = a.className;
  return v(a) && a.match(/\S+/g) || []
}
function Pc(a, b) {
  for(var c = Oc(a), d = mb(arguments, 1), g = c.length + d.length, f = c, h = 0;h < d.length;h++) {
    jb(f, d[h]) || f.push(d[h])
  }
  a.className = c.join(" ");
  return c.length == g
}
function Qc(a, b) {
  var c = Oc(a), d = mb(arguments, 1), g, f = d;
  g = fb(c, function(a) {
    return!jb(f, a)
  });
  a.className = g.join(" ");
  return g.length == c.length - d.length
}
;var Rc = !E || Ua();
!Ia && !E || E && Ua() || Ia && G("1.9.1");
var Sc = E && !G("9");
function Tc(a) {
  return a ? new Uc(Vc(a)) : Nc || (Nc = new Uc)
}
function R(a) {
  return v(a) ? document.getElementById(a) : a
}
var Wc = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Xc(a, b, c) {
  return Yc(document, arguments)
}
function Yc(a, b) {
  var c = b[0], d = b[1];
  if(!Rc && d && (d.name || d.type)) {
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
  d && (v(d) ? f.className = d : ga(d) ? Pc.apply(k, [f].concat(d)) : Za(d, function(a, b) {
    "style" == b ? f.style.cssText = a : "class" == b ? f.className = a : "for" == b ? f.htmlFor = a : b in Wc ? f.setAttribute(Wc[b], a) : 0 == b.lastIndexOf("aria-", 0) ? f.setAttribute(b, a) : f[b] = a
  }));
  2 < b.length && Zc(a, f, b, 2);
  return f
}
function Zc(a, b, c, d) {
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
      if(l) {
        if(l = f.length, 0 < l) {
          for(var n = Array(l), o = 0;o < l;o++) {
            n[o] = f[o]
          }
          f = n
        }else {
          f = []
        }
      }
      h(f, g)
    }else {
      g(f)
    }
  }
}
function $c(a, b) {
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
function Vc(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
var ad = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, bd = {IMG:" ", BR:"\n"};
function cd(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, "number" == typeof a && 0 <= a && 32768 > a) : m
}
function dd(a) {
  var b = [];
  ed(a, b, m);
  return b.join("")
}
function ed(a, b, c) {
  if(!(a.nodeName in ad)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in bd) {
        b.push(bd[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          ed(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Uc(a) {
  this.fa = a || t.document || document
}
s = Uc.prototype;
s.Xa = Tc;
s.g = function(a) {
  return v(a) ? this.fa.getElementById(a) : a
};
function fd() {
  var a = (gd.fa.parentWindow || gd.fa.defaultView || window).document, a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
  return new Mc(a.clientWidth, a.clientHeight)
}
s.n = function(a, b, c) {
  return Yc(this.fa, arguments)
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
  Zc(Vc(a), a, arguments, 1)
};
s.contains = $c;
function hd(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
var id = Ia ? "MozUserSelect" : F ? "WebkitUserSelect" : k;
function jd(a) {
  this.be = a;
  this.j = []
}
C(jd, M);
var kd = [];
function ld(a, b, c, d) {
  ga(c) || (kd[0] = c, c = kd);
  for(var g = 0;g < c.length;g++) {
    a.j.push(O(b, c[g], d || a, m, a.be || a))
  }
  return a
}
function md(a, b, c, d, g, f) {
  if(ga(c)) {
    for(var h = 0;h < c.length;h++) {
      md(a, b, c[h], d, g, f)
    }
  }else {
    a: {
      d = d || a;
      f = f || a.be || a;
      g = !!g;
      if(b = gc(b, c, g)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].Qa && b[c].eb == d && b[c].capture == g && b[c].Xb == f) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, hc(b), kb(a.j, b))
  }
  return a
}
jd.prototype.hd = function() {
  eb(this.j, hc);
  this.j.length = 0
};
jd.prototype.c = function() {
  jd.e.c.call(this);
  this.hd()
};
jd.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function nd() {
}
ea(nd);
nd.prototype.Jf = 0;
nd.Ya();
function od(a) {
  this.Nb = a || Tc();
  this.Cb = pd
}
C(od, mc);
od.prototype.Df = nd.Ya();
var pd = k;
function qd(a, b) {
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
s = od.prototype;
s.aa = k;
s.V = m;
s.q = k;
s.Cb = k;
s.z = k;
s.oa = k;
s.Lb = k;
s.gg = m;
function rd(a) {
  return a.aa || (a.aa = ":" + (a.Df.Jf++).toString(36))
}
s.g = p("q");
function sd(a) {
  return a.Za || (a.Za = new jd(a))
}
s.getParent = p("z");
s.md = function(a) {
  this.z && this.z != a && e(Error("Method not supported"));
  od.e.md.call(this, a)
};
s.Xa = p("Nb");
s.n = function() {
  this.q = this.Nb.createElement("div")
};
function td(a, b) {
  a.V && e(Error("Component already rendered"));
  a.q || a.n();
  b ? b.insertBefore(a.q, k) : a.Nb.fa.body.appendChild(a.q);
  (!a.z || a.z.V) && a.qa()
}
s.qa = function() {
  this.V = j;
  ud(this, function(a) {
    !a.V && a.g() && a.qa()
  })
};
s.sb = function() {
  ud(this, function(a) {
    a.V && a.sb()
  });
  this.Za && this.Za.hd();
  this.V = m
};
s.c = function() {
  od.e.c.call(this);
  this.V && this.sb();
  this.Za && (this.Za.b(), delete this.Za);
  ud(this, function(a) {
    a.b()
  });
  if(!this.gg && this.q) {
    var a = this.q;
    a && a.parentNode && a.parentNode.removeChild(a)
  }
  this.z = this.q = this.Lb = this.oa = k
};
s.lb = function(a) {
  this.V && e(Error("Component already rendered"));
  this.Cb = a
};
function ud(a, b) {
  a.oa && eb(a.oa, b, i)
}
s.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : rd(a), d;
    this.Lb && c ? (d = this.Lb, d = (c in d ? d[c] : i) || k) : d = k;
    a = d;
    c && a && (d = this.Lb, c in d && delete d[c], kb(this.oa, a), b && (a.sb(), a.q && (c = a.q) && c.parentNode && c.parentNode.removeChild(c)), c = a, c == k && e(Error("Unable to set parent component")), c.z = k, od.e.md.call(c, k))
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function vd() {
}
var wd;
ea(vd);
s = vd.prototype;
s.Sb = function() {
};
s.n = function(a) {
  var b = a.Xa().n("div", xd(this, a).join(" "), a.pb);
  this.kd(a, b);
  return b
};
s.qb = function(a, b, c) {
  if(a = a.g ? a.g() : a) {
    if(E && !G("7")) {
      var d = yd(Oc(a), b);
      d.push(b);
      pa(c ? Pc : Qc, a).apply(k, d)
    }else {
      c ? Pc(a, b) : Qc(a, b)
    }
  }
};
s.ee = function(a) {
  if(a.Cb == k) {
    var b = a.V ? a.q : a.Nb.fa.body, c;
    a: {
      c = Vc(b);
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
  if(id) {
    if(c = c ? "none" : "", a.style[id] = c, d) {
      for(var g = 0, f;f = d[g];g++) {
        f.style[id] = c
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
  return a.G & 32 && (b = a.Ka()) ? cd(b) : m
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
    cd(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
s.od = function(a, b) {
  a.style.display = b ? "" : "none"
};
s.L = function(a, b, c) {
  var d = a.g();
  if(d) {
    var g = zd(this, b);
    g && this.qb(a, g, c);
    this.N(d, b, c)
  }
};
s.N = function(a, b, c) {
  wd || (wd = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = wd[b]) && a.setAttribute("aria-" + b, c)
};
s.Ka = function(a) {
  return a.g()
};
s.sa = r("goog-control");
function xd(a, b) {
  var c = a.sa(), d = [c], g = a.sa();
  g != c && d.push(g);
  c = b.d;
  for(g = [];c;) {
    var f = c & -c;
    g.push(zd(a, f));
    c &= ~f
  }
  d.push.apply(d, g);
  (c = b.Z) && d.push.apply(d, c);
  E && !G("7") && d.push.apply(d, yd(d));
  return d
}
function yd(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  eb([], function(d) {
    ib(d, pa(jb, a)) && (!b || jb(d, b)) && c.push(d.join("_"))
  });
  return c
}
function zd(a, b) {
  if(!a.Hd) {
    var c = a.sa();
    a.Hd = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Hd[b]
}
;function Ad(a, b) {
  a || e(Error("Invalid class name " + a));
  y(b) || e(Error("Invalid decorator function " + b))
}
var Bd = {};
function Cd(a, b, c, d, g) {
  if(!E && (!F || !G("525"))) {
    return j
  }
  if(Ka && g) {
    return Dd(a)
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
  return Dd(a)
}
function Dd(a) {
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
function Ed(a) {
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
;function Fd(a, b) {
  a && Gd(this, a, b)
}
C(Fd, mc);
s = Fd.prototype;
s.q = k;
s.Zb = k;
s.Qc = k;
s.$b = k;
s.wa = -1;
s.va = -1;
var Hd = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Id = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Jd = E || 
F && G("525");
s = Fd.prototype;
s.zf = function(a) {
  if(F && (17 == this.wa && !a.ctrlKey || 18 == this.wa && !a.altKey)) {
    this.va = this.wa = -1
  }
  Jd && !Cd(a.keyCode, this.wa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.va = Ia ? Ed(a.keyCode) : a.keyCode
};
s.Bf = function() {
  this.va = this.wa = -1
};
s.handleEvent = function(a) {
  var b = a.ga, c, d;
  E && "keypress" == a.type ? (c = this.va, d = 13 != c && 27 != c ? b.keyCode : 0) : F && "keypress" == a.type ? (c = this.va, d = 0 <= b.charCode && 63232 > b.charCode && Dd(c) ? b.charCode : 0) : Ha ? (c = this.va, d = Dd(c) ? b.keyCode : 0) : (c = b.keyCode || this.va, d = b.charCode || 0, Ka && (63 == d && 224 == c) && (c = 191));
  var g = c, f = b.keyIdentifier;
  c ? 63232 <= c && c in Hd ? g = Hd[c] : 25 == c && a.shiftKey && (g = 9) : f && f in Id && (g = Id[f]);
  a = g == this.wa;
  this.wa = g;
  b = new Kd(g, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.b()
  }
};
s.g = p("q");
function Gd(a, b, c) {
  a.$b && a.detach();
  a.q = b;
  a.Zb = O(a.q, "keypress", a, c);
  a.Qc = O(a.q, "keydown", a.zf, c, a);
  a.$b = O(a.q, "keyup", a.Bf, c, a)
}
s.detach = function() {
  this.Zb && (hc(this.Zb), hc(this.Qc), hc(this.$b), this.$b = this.Qc = this.Zb = k);
  this.q = k;
  this.va = this.wa = -1
};
s.c = function() {
  Fd.e.c.call(this);
  this.detach()
};
function Kd(a, b, c, d) {
  d && this.Ma(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(Kd, Yb);
function S(a, b, c) {
  od.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ka(b);
      if(d = Bd[d]) {
        break
      }
      b = b.e ? b.e.constructor : k
    }
    b = d ? y(d.Ya) ? d.Ya() : new d : k
  }
  this.u = b;
  this.pb = a
}
C(S, od);
s = S.prototype;
s.pb = k;
s.d = 0;
s.G = 39;
s.wc = 255;
s.Xf = 0;
s.Ua = j;
s.Z = k;
s.Lc = j;
s.vc = m;
s.Mf = k;
s.Ka = function() {
  return this.u.Ka(this)
};
function Ld(a, b) {
  b && (a.Z ? jb(a.Z, b) || a.Z.push(b) : a.Z = [b], a.u.qb(a, b, j))
}
s.qb = function(a, b) {
  b ? Ld(this, a) : a && this.Z && (kb(this.Z, a), 0 == this.Z.length && (this.Z = k), this.u.qb(this, a, m))
};
s.n = function() {
  var a = this.u.n(this);
  this.q = a;
  var b = this.Mf || this.u.Sb();
  b && a.setAttribute("role", b);
  this.vc || this.u.kc(a, m);
  this.Ua || this.u.od(a, m)
};
s.qa = function() {
  S.e.qa.call(this);
  this.u.ee(this);
  if(this.G & -2 && (this.Lc && Md(this, j), this.G & 32)) {
    var a = this.Ka();
    if(a) {
      var b = this.bb || (this.bb = new Fd);
      Gd(b, a);
      ld(ld(ld(sd(this), b, "key", this.Af), a, "focus", this.yf), a, "blur", this.Vd)
    }
  }
};
function Md(a, b) {
  var c = sd(a), d = a.g();
  b ? (ld(ld(ld(ld(c, d, "mouseover", a.$d), d, "mousedown", a.Yd), d, "mouseup", a.ae), d, "mouseout", a.Zd), E && ld(c, d, "dblclick", a.Xd)) : (md(md(md(md(c, d, "mouseover", a.$d), d, "mousedown", a.Yd), d, "mouseup", a.ae), d, "mouseout", a.Zd), E && md(c, d, "dblclick", a.Xd))
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
  this.Z = this.pb = k
};
function Nd(a) {
  a = a.pb;
  if(!a) {
    return""
  }
  if(!v(a)) {
    if(ga(a)) {
      a = gb(a, dd).join("")
    }else {
      if(Sc && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        ed(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Sc || (a = a.replace(/ +/g, " "));
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
  if((!b || "function" != typeof b.isEnabled || b.isEnabled()) && Od(this, 1, !a)) {
    a || (this.setActive(m), Pd(this, m)), this.Ua && this.u.Db(this, a), this.L(1, !a)
  }
};
function Pd(a, b) {
  Od(a, 2, b) && a.L(2, b)
}
s.ge = function() {
  return!!(this.d & 4)
};
s.setActive = function(a) {
  Od(this, 4, a) && this.L(4, a)
};
s.L = function(a, b) {
  this.G & a && b != !!(this.d & a) && (this.u.L(this, a, b), this.d = b ? this.d | a : this.d & ~a)
};
function T(a, b) {
  return!!(a.wc & b) && !!(a.G & b)
}
function Od(a, b, c) {
  return!!(a.G & b) && !!(a.d & b) != c && (!(a.Xf & b) || a.dispatchEvent(qd(b, c))) && !a.P
}
s.$d = function(a) {
  (!a.relatedTarget || !$c(this.g(), a.relatedTarget)) && (this.dispatchEvent("enter") && this.isEnabled() && T(this, 2)) && Pd(this, j)
};
s.Zd = function(a) {
  if((!a.relatedTarget || !$c(this.g(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    T(this, 4) && this.setActive(m), T(this, 2) && Pd(this, m)
  }
};
s.Yd = function(a) {
  if(this.isEnabled() && (T(this, 2) && Pd(this, j), $b(a) && (!F || !Ka || !a.ctrlKey))) {
    T(this, 4) && this.setActive(j), this.u.ie(this) && this.Ka().focus()
  }
  !this.vc && ($b(a) && (!F || !Ka || !a.ctrlKey)) && a.preventDefault()
};
s.ae = function(a) {
  this.isEnabled() && (T(this, 2) && Pd(this, j), this.ge() && (this.zb(a) && T(this, 4)) && this.setActive(m))
};
s.Xd = function(a) {
  this.isEnabled() && this.zb(a)
};
s.zb = function(a) {
  if(T(this, 16)) {
    var b = !(this.d & 16);
    Od(this, 16, b) && this.L(16, b)
  }
  T(this, 8) && Od(this, 8, j) && this.L(8, j);
  T(this, 64) && (b = !(this.d & 64), Od(this, 64, b) && this.L(64, b));
  b = new Vb("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.fd = a.fd);
  return this.dispatchEvent(b)
};
s.yf = function() {
  T(this, 32) && Od(this, 32, j) && this.L(32, j)
};
s.Vd = function() {
  T(this, 4) && this.setActive(m);
  T(this, 32) && Od(this, 32, m) && this.L(32, m)
};
s.Af = function(a) {
  return this.Ua && this.isEnabled() && this.Kc(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
s.Kc = function(a) {
  return 13 == a.keyCode && this.zb(a)
};
y(S) || e(Error("Invalid component class " + S));
y(vd) || e(Error("Invalid renderer class " + vd));
var Qd = ka(S);
Bd[Qd] = vd;
Ad("goog-control", function() {
  return new S(k)
});
function Rd() {
}
C(Rd, vd);
ea(Rd);
s = Rd.prototype;
s.Sb = r("button");
s.N = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : Rd.e.N.call(this, a, b, c)
};
s.n = function(a) {
  var b = Rd.e.n.call(this, a), c = a.Ub();
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
function Sd() {
}
C(Sd, Rd);
ea(Sd);
s = Sd.prototype;
s.Sb = function() {
};
s.n = function(a) {
  a.V && m != a.Lc && Md(a, m);
  a.Lc = m;
  a.wc &= -256;
  a.V && a.d & 32 && e(Error("Component already rendered"));
  a.d & 32 && a.L(32, m);
  a.G &= -33;
  return a.Xa().n("button", {"class":xd(this, a).join(" "), disabled:!a.isEnabled(), title:a.Ub() || "", value:a.Vb() || ""}, Nd(a) || "")
};
s.ee = function(a) {
  ld(sd(a), a.g(), "click", a.zb)
};
s.kc = da;
s.lb = da;
s.ie = function(a) {
  return a.isEnabled()
};
s.Db = da;
s.L = function(a, b, c) {
  Sd.e.L.call(this, a, b, c);
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
function Td(a, b, c) {
  S.call(this, a, b || Sd.Ya(), c)
}
C(Td, S);
s = Td.prototype;
s.Vb = p("We");
s.mc = function(a) {
  this.We = a;
  this.u.mc(this.g(), a)
};
s.Ub = p("Te");
s.nd = function(a) {
  this.Te = a;
  this.u.nd(this.g(), a)
};
s.c = function() {
  Td.e.c.call(this);
  delete this.We;
  delete this.Te
};
s.qa = function() {
  Td.e.qa.call(this);
  if(this.G & 32) {
    var a = this.Ka();
    a && ld(sd(this), a, "keyup", this.Kc)
  }
};
s.Kc = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.zb(a) : 32 == a.keyCode
};
Ad("goog-button", function() {
  return new Td(k)
});
function Ud() {
}
C(Ud, Rd);
ea(Ud);
Ud.prototype.n = function(a) {
  var b = {"class":"goog-inline-block " + xd(this, a).join(" "), title:a.Ub() || ""}, b = a.Xa().n("div", b, Vd(this, a.pb, a.Xa()));
  this.kd(a, b);
  return b
};
Ud.prototype.Sb = r("button");
Ud.prototype.kd = function(a, b) {
  a.isEnabled() || this.N(b, 1, j);
  a.d & 8 && this.N(b, 8, j);
  a.G & 16 && this.N(b, 16, j);
  a.d & 64 && this.N(b, 64, j)
};
function Vd(a, b, c) {
  return c.n("div", "goog-inline-block " + (a.sa() + "-outer-box"), c.n("div", "goog-inline-block " + (a.sa() + "-inner-box"), b))
}
Ud.prototype.sa = r("goog-custom-button");
function Wd(a, b, c) {
  Td.call(this, a, b || Ud.Ya(), c)
}
C(Wd, Td);
Ad("goog-custom-button", function() {
  return new Wd(k)
});
function Yd() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ B()).toString(36)
}
function Zd(a) {
  return a.substr(0, a.length - 1)
}
var $d = /^(0|[1-9]\d*)$/, ae = /^(0|\-?[1-9]\d*)$/;
function be(a) {
  var b = ce;
  return $d.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function de(a) {
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
;var ee, fe;
function ge(a, b) {
  this.Va = a;
  this.Ra = b
}
ge.prototype.R = function(a) {
  return a instanceof ge && this.Va == a.Va && this.Ra.join(",") == a.Ra
};
ge.prototype.F = function(a, b) {
  a.push("new SACK(", "" + this.Va, ", ");
  P(this.Ra, a, b);
  a.push(")")
};
function he() {
  this.J = new J
}
he.prototype.Ia = -1;
he.prototype.M = 0;
he.prototype.append = function(a) {
  var b = de(a);
  this.J.set(this.Ia + 1, [a, b]);
  this.Ia += 1;
  this.M += b
};
he.prototype.F = function(a) {
  a.push("<Queue with ", "" + this.J.r(), " item(s), counter=#", "" + this.Ia, ", size=", "" + this.M, ">")
};
function ie(a) {
  a = a.J.$();
  I.sort.call(a, nb);
  return a
}
function je() {
  this.Ga = new J
}
je.prototype.Oa = -1;
je.prototype.M = 0;
function ke(a) {
  var b = a.Ga.$();
  I.sort.call(b, nb);
  return new ge(a.Oa, b)
}
var le = {};
function me(a, b) {
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
        a.push('<property id="', d, '">'), me(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', D(c), '">'), me(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function ne(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, g = arguments;
  d.push("<arguments>");
  for(var f = g.length, h = 1;h < f;h++) {
    me(d, g[h])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var oe = m, pe = "";
function qe(a) {
  a = a.match(/[\d]+/g);
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var re = navigator.plugins["Shockwave Flash"];
  re && (oe = j, re.description && (pe = qe(re.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (oe = j, pe = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var se = navigator.mimeTypes["application/x-shockwave-flash"];
    (oe = se && se.enabledPlugin) && (pe = qe(se.enabledPlugin.description))
  }else {
    try {
      var te = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), oe = j, pe = qe(te.GetVariable("$version"))
    }catch(ue) {
      try {
        te = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), oe = j, pe = "6.0.21"
      }catch(ve) {
        try {
          te = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), oe = j, pe = qe(te.GetVariable("$version"))
        }catch(we) {
        }
      }
    }
  }
}
var xe = pe;
function ye(a) {
  this.o = new J;
  a && this.uc(a)
}
function ze(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ka(a) : b.substr(0, 1) + a
}
s = ye.prototype;
s.r = function() {
  return this.o.r()
};
s.add = function(a) {
  this.o.set(ze(a), a)
};
s.uc = function(a) {
  for(var a = pb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
s.hd = function(a) {
  for(var a = pb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
s.remove = function(a) {
  return this.o.remove(ze(a))
};
s.clear = function() {
  this.o.clear()
};
s.Na = function() {
  return this.o.Na()
};
s.contains = function(a) {
  return this.o.ea(ze(a))
};
s.D = function() {
  return this.o.D()
};
s.O = function() {
  return new ye(this)
};
s.R = function(a) {
  var b;
  if(b = this.r() == ob(a)) {
    var c = a, a = ob(c);
    this.r() > a ? b = m : (!(c instanceof ye) && 5 < a && (c = new ye(c)), b = sb(this, function(a) {
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
function Ae(a) {
  return Be(a || arguments.callee.caller, [])
}
function Be(a, b) {
  var c = [];
  if(jb(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Ce(a) + "(");
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
            f = (f = Ce(f)) ? f : "[fn]";
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
        c.push(Be(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Ce(a) {
  if(De[a]) {
    return De[a]
  }
  a = "" + a;
  if(!De[a]) {
    var b = /function ([^\(]+)/.exec(a);
    De[a] = b ? b[1] : "[Anonymous]"
  }
  return De[a]
}
var De = {};
function Ee(a, b, c, d, g) {
  this.reset(a, b, c, d, g)
}
Ee.prototype.Ic = k;
Ee.prototype.Hc = k;
var Fe = 0;
Ee.prototype.reset = function(a, b, c, d, g) {
  "number" == typeof g || Fe++;
  this.Se = d || B();
  this.W = a;
  this.te = b;
  this.pe = c;
  delete this.Ic;
  delete this.Hc
};
Ee.prototype.kb = aa("W");
function Ge(a) {
  this.If = a
}
Ge.prototype.z = k;
Ge.prototype.W = k;
Ge.prototype.oa = k;
Ge.prototype.vb = k;
function He(a, b) {
  this.name = a;
  this.value = b
}
He.prototype.toString = p("name");
var Ie = new He("SHOUT", 1200), Je = new He("SEVERE", 1E3), Ke = new He("WARNING", 900), Le = new He("INFO", 800), Me = new He("CONFIG", 700), Ne = new He("FINE", 500), Oe = new He("FINEST", 300), Pe = new He("ALL", 0), Qe = [new He("OFF", Infinity), Ie, Je, Ke, Le, Me, Ne, new He("FINER", 400), Oe, Pe], Re = k;
function Se(a) {
  if(!Re) {
    Re = {};
    for(var b = 0, c;c = Qe[b];b++) {
      Re[c.value] = c, Re[c.name] = c
    }
  }
  return Re[a] || k
}
s = Ge.prototype;
s.getParent = p("z");
s.kb = aa("W");
function Te(a) {
  if(a.W) {
    return a.W
  }
  if(a.z) {
    return Te(a.z)
  }
  Wa("Root logger has no level set.");
  return k
}
s.log = function(a, b, c) {
  if(a.value >= Te(this).value) {
    a = this.xf(a, b, c);
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
s.xf = function(a, b, c) {
  var d = new Ee(a, "" + b, this.If);
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
        var n, o, w = m;
        try {
          n = c.lineNumber || c.nh || "Not available"
        }catch(q) {
          n = "Not available", w = j
        }
        try {
          o = c.fileName || c.filename || c.sourceURL || l
        }catch(x) {
          o = "Not available", w = j
        }
        h = w || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:o, stack:c.stack || "Not available"} : c
      }
      g = "Message: " + D(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + D(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + D(Ae(f) + "-> ")
    }catch(A) {
      g = "Exception trying to expose exception! You win, we lose. " + A
    }
    d.Hc = g
  }
  return d
};
function U(a, b) {
  a.log(Je, b, i)
}
function V(a, b, c) {
  a.log(Ke, b, c)
}
s.info = function(a, b) {
  this.log(Le, a, b)
};
function W(a, b) {
  a.log(Ne, b, i)
}
function X(a, b) {
  a.log(Oe, b, i)
}
var Ue = {}, Ve = k;
function We() {
  Ve || (Ve = new Ge(""), Ue[""] = Ve, Ve.kb(Me))
}
function Xe() {
  We();
  return Ve
}
function Y(a) {
  We();
  var b;
  if(!(b = Ue[a])) {
    b = new Ge(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Y(a.substr(0, c));
    c.oa || (c.oa = {});
    c.oa[d] = b;
    b.z = c;
    Ue[a] = b
  }
  return b
}
;function Ye(a, b) {
  od.call(this, b);
  this.uf = a;
  this.Gc = new jd(this);
  this.Qb = new J
}
C(Ye, od);
s = Ye.prototype;
s.a = Y("goog.ui.media.FlashObject");
s.ig = "window";
s.Ed = "#000000";
s.bf = "sameDomain";
function Ze(a, b, c) {
  a.zd = v(b) ? b : Math.round(b) + "px";
  a.Mc = v(c) ? c : Math.round(c) + "px";
  a.g() && (b = a.g() ? a.g().firstChild : k, c = a.zd, a = a.Mc, c instanceof Mc ? (a = c.height, c = c.width) : a == i && e(Error("missing height argument")), b.style.width = hd(c), b.style.height = hd(a))
}
s.qa = function() {
  Ye.e.qa.call(this);
  var a = this.g(), b;
  b = E ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = E ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = qa(c, this.ig), d = this.Qb.$(), g = this.Qb.D(), f = [], h = 0;h < d.length;h++) {
    f.push(encodeURIComponent("" + d[h]) + "=" + encodeURIComponent("" + g[h]))
  }
  b = qa(b, rd(this), rd(this), "goog-ui-media-flash-object", D(this.uf), D(f.join("&")), this.Ed, this.bf, c);
  a.innerHTML = b;
  this.zd && this.Mc && Ze(this, this.zd, this.Mc);
  ld(this.Gc, this.g(), $a(Tb), Wb)
};
s.n = function() {
  this.He != k && !(0 <= za(xe, this.He)) && (V(this.a, "Required flash version not found:" + this.He), e(Error("Method not supported")));
  var a = this.Xa().createElement("div");
  a.className = "goog-ui-media-flash";
  this.q = a
};
s.c = function() {
  Ye.e.c.call(this);
  this.Qb = k;
  this.Gc.b();
  this.Gc = k
};
function $e(a) {
  H.call(this, a)
}
C($e, H);
$e.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function af(a, b) {
  this.aa = "_" + Yd();
  this.qc = a;
  this.za = b;
  this.Fa = a.Fa
}
C(af, M);
s = af.prototype;
s.fb = j;
s.Cc = m;
s.a = Y("cw.net.FlashSocket");
s.F = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.aa);
  a.push("'>")
};
function bf(a, b, c) {
  if("frames" == b) {
    a = a.za, cf(a.C), df(a.C, c)
  }else {
    if("stillreceiving" == b) {
      c = a.za, X(c.a, "onstillreceiving"), cf(c.C)
    }else {
      if("connect" == b) {
        a.za.onconnect()
      }else {
        "close" == b ? (a.fb = m, a.b()) : "ioerror" == b ? (a.fb = m, b = a.za, V(b.a, "onioerror: " + Q(c)), ef(b.C, m), a.b()) : "securityerror" == b ? (a.fb = m, b = a.za, V(b.a, "onsecurityerror: " + Q(c)), ef(b.C, m), a.b()) : e(Error("bad event: " + b))
      }
    }
  }
}
function ff(a) {
  a.Cc = j;
  a.fb = m;
  a.b()
}
s.Ac = function(a, b) {
  try {
    var c = this.Fa.CallFunction(ne("__FC_connect", this.aa, a, b, "<int32/>\n"))
  }catch(d) {
    return U(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), ff(this)
  }
  '"OK"' != c && e(Error("__FC_connect failed? ret: " + c))
};
s.Ib = function(a) {
  try {
    var b = this.Fa.CallFunction(ne("__FC_writeFrames", this.aa, a))
  }catch(c) {
    return U(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), ff(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (V(this.a, "Flash no longer knows of " + this.aa + "; disposing."), this.b()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
s.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.fb);
  af.e.c.call(this);
  var a = this.Fa;
  delete this.Fa;
  if(this.fb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(ne("__FC_close", this.aa)))
    }catch(b) {
      U(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Cc = j
    }
  }
  if(this.Cc) {
    a = this.za, V(a.a, "oncrash"), ef(a.C, j)
  }else {
    this.za.onclose()
  }
  delete this.za;
  delete this.qc.$a[this.aa]
};
function gf(a, b) {
  this.p = a;
  this.Fa = b;
  this.$a = {};
  this.zc = "__FST_" + Yd();
  t[this.zc] = z(this.of, this);
  var c = b.CallFunction(ne("__FC_setCallbackFunc", this.zc));
  '"OK"' != c && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
C(gf, M);
s = gf.prototype;
s.a = Y("cw.net.FlashSocketTracker");
s.F = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  P(this.$a, a, b);
  a.push(">")
};
s.Dc = function(a) {
  a = new af(this, a);
  return this.$a[a.aa] = a
};
s.mf = function(a, b, c, d) {
  var g = this.$a[a];
  g ? "frames" == b && d ? (bf(g, "ioerror", "FlashConnector hadError while handling data."), g.b()) : bf(g, b, c) : V(this.a, "Cannot dispatch because we have no instance: " + Q([a, b, c, d]))
};
s.of = function(a, b, c, d) {
  try {
    var g = this.p;
    g.Ob.push([this.mf, this, [a, b, c, d]]);
    g.vd == k && (g.vd = g.B.setTimeout(g.ef, 0))
  }catch(f) {
    t.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
s.c = function() {
  gf.e.c.call(this);
  for(var a = $a(this.$a);a.length;) {
    a.pop().b()
  }
  delete this.$a;
  delete this.Fa;
  t[this.zc] = i
};
function hf(a) {
  this.C = a;
  this.ob = []
}
C(hf, M);
s = hf.prototype;
s.a = Y("cw.net.FlashSocketConduit");
s.Ib = function(a) {
  this.ob ? (X(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.ob.push.apply(this.ob, a)) : (X(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.nc.Ib(a))
};
s.Ac = function(a, b) {
  this.nc.Ac(a, b)
};
s.onconnect = function() {
  this.a.info("onconnect");
  cf(this.C);
  var a = this.ob;
  this.ob = k;
  a.length && (X(this.a, "onconnect: Writing " + a.length + " buffered frame(s)."), this.nc.Ib(a))
};
s.onclose = function() {
  this.a.info("onclose");
  ef(this.C, m)
};
s.c = function() {
  this.a.info("in disposeInternal.");
  hf.e.c.call(this);
  this.nc.b();
  delete this.C
};
var jf = [];
function kf() {
  var a = new oc;
  jf.push(a);
  return a
}
function lf(a) {
  var b = jf;
  jf = [];
  eb(b, function(b) {
    b.Y(a)
  });
  return k
}
function mf(a) {
  var b = jf;
  jf = [];
  eb(b, function(b) {
    b.Wa(a)
  });
  return k
}
;function nf() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;var ce = Math.pow(2, 53);
var of = {$e:r("<cw.eq.Wildcard>")};
function pf(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function qf(a, b, c) {
  var d = fa(a), g = fa(b);
  if(a == of || b == of) {
    return j
  }
  if(a != k && "function" == typeof a.R) {
    return c && c.push("running custom equals function on left object"), a.R(b, c)
  }
  if(b != k && "function" == typeof b.R) {
    return c && c.push("running custom equals function on right object"), b.R(a, c)
  }
  if(pf(d) || pf(g)) {
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
          if(a.Ze == Nb && b.Ze == Nb) {
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
  this.Pf = a;
  this.fc = b
}
Z.prototype.R = function(a, b) {
  return ja(a) && this.constructor == a.constructor && qf(this.fc, a.fc, b)
};
Z.prototype.F = function(a, b) {
  a.push("new ", this.Pf, "(");
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
function rf() {
  var a = [];
  this.U(a);
  return a.join("")
}
function sf() {
}
sf.prototype.R = function(a, b) {
  return!(a instanceof sf) ? m : qf(tf(this), tf(a), b)
};
sf.prototype.F = function(a, b) {
  a.push("<HelloFrame properties=");
  P(tf(this), a, b);
  a.push(">")
};
function tf(a) {
  return[a.ka, a.Be, a.de, a.Ge, a.Fb, a.sd, a.ue, a.se, a.Wc, a.qe, a.Ve, a.Re, a.Ca, a.ac]
}
sf.prototype.Q = rf;
sf.prototype.U = function(a) {
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
  b.sack = this.Ca instanceof ge ? Zd((new uf(this.Ca)).Q()) : this.Ca;
  b.seenack = this.ac instanceof ge ? Zd((new uf(this.ac)).Q()) : this.ac;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push(Ec(b), "H")
};
function vf(a) {
  Z.call(this, "StringFrame", [a]);
  this.ud = a
}
C(vf, Z);
vf.prototype.Q = rf;
vf.prototype.U = function(a) {
  a.push(this.ud, " ")
};
function wf(a) {
  Z.call(this, "CommentFrame", [a]);
  this.jf = a
}
C(wf, Z);
wf.prototype.Q = rf;
wf.prototype.U = function(a) {
  a.push(this.jf, "^")
};
function xf(a) {
  Z.call(this, "SeqNumFrame", [a]);
  this.Me = a
}
C(xf, Z);
xf.prototype.Q = rf;
xf.prototype.U = function(a) {
  a.push("" + this.Me, "N")
};
function yf(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = ce;
    if(ae.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var f = be(b[d]);
      if(f == k) {
        return k
      }
      c.push(f)
    }
  }
  return new ge(a, c)
}
function uf(a) {
  Z.call(this, "SackFrame", [a]);
  this.Ca = a
}
C(uf, Z);
uf.prototype.Q = rf;
uf.prototype.U = function(a) {
  var b = this.Ca;
  a.push(b.Ra.join(","), "|", "" + b.Va);
  a.push("A")
};
function zf(a) {
  Z.call(this, "StreamStatusFrame", [a]);
  this.le = a
}
C(zf, Z);
zf.prototype.Q = rf;
zf.prototype.U = function(a) {
  var b = this.le;
  a.push(b.Ra.join(","), "|", "" + b.Va);
  a.push("T")
};
function Af() {
  Z.call(this, "StreamCreatedFrame", [])
}
C(Af, Z);
Af.prototype.Q = rf;
Af.prototype.U = function(a) {
  a.push("C")
};
function Bf() {
  Z.call(this, "YouCloseItFrame", [])
}
C(Bf, Z);
Bf.prototype.Q = rf;
Bf.prototype.U = function(a) {
  a.push("Y")
};
function Cf(a, b) {
  Z.call(this, "ResetFrame", [a, b]);
  this.Ee = a;
  this.Dd = b
}
C(Cf, Z);
Cf.prototype.Q = rf;
Cf.prototype.U = function(a) {
  a.push(this.Ee, "|", "" + Number(this.Dd), "!")
};
var Df = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Ef(a) {
  Z.call(this, "TransportKillFrame", [a]);
  this.reason = a
}
C(Ef, Z);
Ef.prototype.Q = rf;
Ef.prototype.U = function(a) {
  a.push(this.reason, "K")
};
function Ff(a) {
  a || e(new $("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new vf(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = yf(Zd(a)), a == k && e(new $("bad sack")), new uf(a)
  }
  if("N" == b) {
    return a = be(Zd(a)), a == k && e(new $("bad seqNum")), new xf(a)
  }
  if("T" == b) {
    return a = yf(Zd(a)), a == k && e(new $("bad lastSackSeen")), new zf(a)
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
  this.Pb = b;
  this.td = c;
  this.wf = d
}
Gf.prototype.F = function(a, b) {
  a.push("<XDRFrame frameId=");
  P(this.wf, a, b);
  a.push(", expandedUrl=");
  P(this.Pb, a, b);
  a.push(", streams=");
  P(this.td, a, b);
  a.push(">")
};
function Hf() {
  this.frames = [];
  this.Uc = new J
}
Hf.prototype.a = Y("cw.net.XDRTracker");
function If(a, b) {
  for(var c = Jf, d = 0;d < c.frames.length;d++) {
    var g = c.frames[d], f;
    if(f = 0 == g.td.length) {
      f = g.Pb;
      var h = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      f = RegExp("^" + h + "$").test(f)
    }
    if(f) {
      return c.a.info("Giving " + Q(b) + " existing frame " + Q(g)), yc(g)
    }
  }
  d = Yd() + Yd();
  g = a.replace(/%random%/g, function() {
    return"ml" + Math.floor(nf()) + ("" + Math.floor(nf()))
  });
  f = t.location;
  f instanceof K || (f = Jb(f));
  g instanceof K || (g = Jb(g));
  var l = f;
  f = g;
  g = l.O();
  (h = !!f.Da) ? xb(g, f.Da) : h = !!f.Ta;
  if(h) {
    var n = f.Ta;
    L(g);
    g.Ta = n
  }else {
    h = !!f.pa
  }
  h ? yb(g, f.pa) : h = f.ib != k;
  n = f.xa;
  if(h) {
    zb(g, f.ib)
  }else {
    if(h = !!f.xa) {
      if("/" != n.charAt(0) && (l.pa && !l.xa ? n = "/" + n : (l = g.xa.lastIndexOf("/"), -1 != l && (n = g.xa.substr(0, l + 1) + n))), ".." == n || "." == n) {
        n = ""
      }else {
        if(-1 != n.indexOf("./") || -1 != n.indexOf("/.")) {
          for(var l = 0 == n.lastIndexOf("/", 0), n = n.split("/"), o = [], w = 0;w < n.length;) {
            var q = n[w++];
            "." == q ? l && w == n.length && o.push("") : ".." == q ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(), l && w == n.length && o.push("")) : (o.push(q), l = j)
          }
          n = o.join("/")
        }
      }
    }
  }
  h ? Ab(g, n) : h = "" !== f.K.toString();
  h ? Bb(g, f.K.toString() ? decodeURIComponent(f.K.toString()) : "") : h = !!f.Ja;
  h && (f = f.Ja, L(g), g.Ja = f);
  g = g.toString();
  f = ("" + t.location).match(Xa)[3] || k;
  h = g.match(Xa)[3] || k;
  f == h ? (c.a.info("No need to make a real XDRFrame for " + Q(b)), c = yc(new Gf(t, g, [b], k))) : ((f = R("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), h = new oc, c.Uc.set(d, [h, g, b]), c.a.info("Creating new XDRFrame " + Q(d) + "for " + Q(b)), c = Xc("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:g + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), f.appendChild(c), c = h);
  return c
}
Hf.prototype.kg = function(a) {
  var b = this.Uc.get(a);
  b || e(Error("Unknown frameId " + Q(a)));
  this.Uc.remove(b);
  var c = b[0], a = new Gf(R("minerva-xdrframe-" + a).contentWindow || (R("minerva-xdrframe-" + a).contentDocument || R("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (R("minerva-xdrframe-" + a).contentDocument || R("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.Y(a)
};
var Jf = new Hf;
t.__XHRTracker_xdrFrameLoaded = z(Jf.kg, Jf);
var Kf;
Kf = m;
var Lf = Ea();
Lf && (-1 != Lf.indexOf("Firefox") || -1 != Lf.indexOf("Camino") || -1 != Lf.indexOf("iPhone") || -1 != Lf.indexOf("iPod") || -1 != Lf.indexOf("iPad") || -1 != Lf.indexOf("Android") || -1 != Lf.indexOf("Chrome") && (Kf = j));
var Mf = Kf;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function Nf(a, b, c, d, g, f) {
  oc.call(this, g, f);
  this.oe = a;
  this.Ec = [];
  this.Sd = !!b;
  this.tf = !!c;
  this.kf = !!d;
  for(b = 0;b < a.length;b++) {
    vc(a[b], z(this.Wd, this, b, j), z(this.Wd, this, b, m))
  }
  0 == a.length && !this.Sd && this.Y(this.Ec)
}
C(Nf, oc);
Nf.prototype.we = 0;
Nf.prototype.Wd = function(a, b, c) {
  this.we++;
  this.Ec[a] = [b, c];
  this.ra || (this.Sd && b ? this.Y([a, c]) : this.tf && !b ? this.Wa(c) : this.we == this.oe.length && this.Y(this.Ec));
  this.kf && !b && (c = k);
  return c
};
Nf.prototype.Wa = function(a) {
  Nf.e.Wa.call(this, a);
  eb(this.oe, function(a) {
    a.cancel()
  })
};
function Of(a, b) {
  this.jg = a;
  this.re = b
}
Of.prototype.Rc = 0;
Of.prototype.cc = 0;
Of.prototype.Jc = m;
function Pf(a) {
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
    var g = d.substr(a.cc, c - a.cc), g = g.replace(/\r$/, "");
    if(g.length > a.re) {
      return a.Jc = j, [b, 2]
    }
    b.push(g);
    a.cc = c += 1
  }
  return a.Rc - a.cc - 1 > a.re ? (a.Jc = j, [b, 2]) : [b, 1]
}
;function Qf(a, b, c) {
  this.C = b;
  this.X = a;
  this.Bc = c
}
C(Qf, M);
s = Qf.prototype;
s.a = Y("cw.net.XHRMaster");
s.Aa = -1;
s.Vc = function(a, b, c) {
  this.Bc.__XHRSlave_makeRequest(this.X, a, b, c)
};
s.ta = p("Aa");
s.Zc = function(a, b) {
  1 != b && U(this.a, Q(this.X) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  cf(this.C);
  df(this.C, a)
};
s.$c = function(a) {
  W(this.a, "ongotheaders_: " + Q(a));
  var b = k;
  "Content-Length" in a && (b = be(a["Content-Length"]));
  a = this.C;
  W(a.a, a.l() + " got Content-Length: " + b);
  a.da == Rf && (b == k && (V(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Sf(a, 2E3 + 1E3 * (b / 3072)))
};
s.ad = function(a) {
  1 != a && W(this.a, this.C.l() + "'s XHR's readyState is " + a);
  this.Aa = a;
  2 <= this.Aa && cf(this.C)
};
s.Yc = function() {
  this.C.b()
};
s.c = function() {
  Qf.e.c.call(this);
  delete Tf.ia[this.X];
  this.Bc.__XHRSlave_dispose(this.X);
  delete this.Bc
};
function Uf() {
  this.ia = {}
}
C(Uf, M);
s = Uf.prototype;
s.a = Y("cw.net.XHRMasterTracker");
s.Dc = function(a, b) {
  var c = "_" + Yd(), d = new Qf(c, a, b);
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
  b ? (delete this.ia[b.X], b.Yc()) : U(this.a, "oncomplete_: no master for " + Q(a))
};
s.c = function() {
  Uf.e.c.call(this);
  for(var a = $a(this.ia);a.length;) {
    a.pop().b()
  }
  delete this.ia
};
var Tf = new Uf;
t.__XHRMaster_onframes = z(Tf.Zc, Tf);
t.__XHRMaster_oncomplete = z(Tf.Yc, Tf);
t.__XHRMaster_ongotheaders = z(Tf.$c, Tf);
t.__XHRMaster_onreadystatechange = z(Tf.ad, Tf);
function Vf(a, b, c) {
  this.ba = a;
  this.host = b;
  this.port = c
}
function Wf(a, b, c) {
  this.host = a;
  this.port = b;
  this.bg = c
}
function Xf(a, b) {
  b || (b = a);
  this.ba = a;
  this.Ea = b
}
Xf.prototype.F = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  P(this.ba, a, b);
  a.push(", secondaryUrl=");
  P(this.Ea, a, b);
  a.push(">")
};
function Yf(a, b, c, d) {
  this.ba = a;
  this.Ae = b;
  this.Ea = c;
  this.Le = d;
  (!(0 == this.ba.indexOf("http://") || 0 == this.ba.indexOf("https://")) || !(0 == this.Ea.indexOf("http://") || 0 == this.Ea.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Ae.location.href;
  Ya(this.ba, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Le.location.href;
  Ya(this.Ea, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
Yf.prototype.F = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  P(this.ba, a, b);
  a.push(", secondaryUrl=");
  P(this.Ea, a, b);
  a.push(">")
};
var Zf = new wf(";)]}");
function bg() {
}
bg.prototype.Td = r(1);
function cg(a) {
  t.setTimeout(function() {
    u(a.message) && a.stack && (a.message += "\n" + a.stack);
    e(a)
  }, 0)
}
function dg(a) {
  this.Yf = a
}
dg.prototype.F = function(a, b) {
  a.push("<UserContext for ");
  P(this.Yf, a, b);
  a.push(">")
};
function eg(a, b, c, d) {
  Z.call(this, "TransportInfo", [a, b, c, d]);
  this.ka = a
}
C(eg, Z);
function fg(a, b, c) {
  this.t = a;
  this.Zf = b ? b : new bg;
  this.p = c ? c : Bc;
  this.Gb = new ye;
  this.Fb = Yd() + Yd();
  this.ca = new he;
  this.Pc = new je;
  this.Hb = k;
  this.rc = [];
  this.mb = new dg(this);
  this.df = z(this.eg, this);
  F && (this.Hb = ec(t, "load", this.Qf, m, this))
}
C(fg, M);
s = fg.prototype;
s.a = Y("cw.net.ClientStream");
s.me = new ge(-1, []);
s.ne = new ge(-1, []);
s.Hf = 50;
s.Gf = 1048576;
s.cd = k;
s.bd = k;
s.dd = k;
s.ed = k;
s.onreset = k;
s.ye = k;
s.jb = k;
s.qd = m;
s.jd = m;
s.d = 1;
s.wd = -1;
s.h = k;
s.s = k;
s.Ab = k;
s.rd = 0;
s.ze = 0;
s.Ke = 0;
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
function gg(a) {
  var b = [-1];
  a.h && b.push(a.h.gb);
  a.s && b.push(a.s.gb);
  return Math.max.apply(Math.max, b)
}
function hg(a) {
  if(!(3 > a.d)) {
    ig(a);
    var b = 0 != a.ca.J.r(), c = ke(a.Pc), d = !c.R(a.ne) && !(a.h && c.R(a.h.cb) || a.s && c.R(a.s.cb)), g = gg(a);
    if((b = b && g < a.ca.Ia) || d) {
      var f = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.h.Ha ? (X(a.a, "tryToSend_: writing " + f + " to primary"), d && (d = a.h, c != d.cb && (!d.ja && !d.v.length && jg(d), d.v.push(new uf(c)), d.cb = c)), b && kg(a.h, a.ca, g + 1), a.h.ha()) : a.s == k ? a.qd ? (X(a.a, "tryToSend_: creating secondary to send " + f), a.s = lg(a, m, j), a.s && (b && kg(a.s, a.ca, g + 1), a.s.ha())) : (X(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.jd = j) : X(a.a, "tryToSend_: need to send " + f + ", but can't right now")
    }
  }
}
function ig(a) {
  a.jb != k && (a.p.B.clearTimeout(a.jb), a.jb = k)
}
s.eg = function() {
  this.jb = k;
  hg(this)
};
function mg(a) {
  a.jb == k && (a.jb = a.p.B.setTimeout(a.df, 6))
}
s.Qf = function() {
  this.Hb = k;
  if(this.h && this.h.ab()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.h;
    a.tc = j;
    a.b()
  }
  this.s && this.s.ab() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.s, a.tc = j, a.b())
};
function ng(a, b) {
  var c;
  u(c) || (c = j);
  3 < a.d && e(Error("sendString: Can't send in state " + a.d));
  c && (v(b) || e(Error("sendString: not a string: " + Q(b))), /^([ -~]*)$/.test(b) || e(Error("sendString: string has illegal chars: " + Q(b))));
  a.ca.append(b);
  mg(a)
}
function lg(a, b, c) {
  var d;
  a.t instanceof Yf ? d = 1 == a.Zf.Td() ? Rf : og : a.t instanceof Wf ? d = pg : e(Error("Don't support endpoint " + Q(a.t)));
  a.wd += 1;
  b = new qg(a.p, a, a.wd, d, a.t, b);
  X(a.a, "Created: " + b.l());
  if(c) {
    if(a.dd) {
      c = new eg(b.ka, b.ma, b.Ba, b.Ha);
      try {
        a.dd.call(a.mb, c)
      }catch(g) {
        V(a.a, "ontransportcreated raised uncaught exception", g), cg(g)
      }
    }
    if(4 == a.d || a.P) {
      return k
    }
  }
  a.Gb.add(b);
  return b
}
function rg(a, b, c) {
  var d = new sg(a.p, a, b, c);
  X(a.a, "Created: " + d.l() + ", delay=" + b + ", times=" + c);
  a.Gb.add(d);
  return d
}
function tg(a, b) {
  a.Gb.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  W(a.a, "Offline: " + b.l());
  var c = 4 == a.d && b.Ye;
  if(b instanceof qg && !c) {
    if(a.ed) {
      var d = new eg(b.ka, b.ma, b.Ba, b.Ha);
      try {
        a.ed.call(a.mb, d)
      }catch(g) {
        V(a.a, "ontransportdestroyed raised uncaught exception", g), cg(g)
      }
    }
    if(4 == a.d || a.P) {
      return
    }
  }
  a.rd = b.ya ? a.rd + b.ya : 0;
  1 <= a.rd && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), ug(a, "stream penalty reached limit", m), a.b());
  if(3 < a.d) {
    c ? (W(a.a, "Disposing because resettingTransport_ is done."), a.b()) : W(a.a, "Not creating a transport because ClientStream is in state " + a.d)
  }else {
    c = b instanceof sg;
    if(!c && b.tc) {
      var f = F ? Mf ? [0, 1] : [9, 20] : [0, 0], c = f[0], d = f[1];
      X(a.a, "getDelayForNextTransport_: " + Q({delay:c, times:d}))
    }else {
      if(d = b.Id(), b == a.h ? d ? f = ++a.ze : c || (f = a.ze = 0) : d ? f = ++a.Ke : c || (f = a.Ke = 0), c || !f) {
        d = c = 0, X(a.a, "getDelayForNextTransport_: " + Q({count:f, delay:c, times:d}))
      }else {
        var h = 2E3 * Math.min(f, 3), l = Math.floor(4E3 * Math.random()) - 2E3, n = Math.max(0, b.Ue - b.xd), d = (c = Math.max(0, h + l - n)) ? 1 : 0;
        X(a.a, "getDelayForNextTransport_: " + Q({count:f, base:h, variance:l, oldDuration:n, delay:c, times:d}))
      }
    }
    c = [c, d];
    f = c[0];
    c = c[1];
    if(b == a.h) {
      a.h = k;
      if(c) {
        a.h = rg(a, f, c)
      }else {
        f = gg(a);
        a.h = lg(a, j, j);
        if(!a.h) {
          return
        }
        kg(a.h, a.ca, f + 1)
      }
      a.h.ha()
    }else {
      b == a.s && (a.s = k, c ? (a.s = rg(a, f, c), a.s.ha()) : hg(a))
    }
  }
}
function ug(a, b, c) {
  if(a.onreset) {
    try {
      a.onreset.call(a.mb, b, c)
    }catch(d) {
      V(a.a, "onreset raised uncaught exception", d), cg(d)
    }
  }
}
s.reset = function(a) {
  3 < this.d && e(Error("reset: Can't send reset in state " + this.d));
  ig(this);
  0 != this.ca.J.r() && V(this.a, "reset: strings in send queue will never be sent: " + Q(this.ca));
  this.d = 4;
  this.h && this.h.Ha ? (this.a.info("reset: Sending ResetFrame over existing primary."), vg(this.h, a), this.h.ha()) : (this.h && (W(this.a, "reset: Disposing primary before sending ResetFrame."), this.h.b()), this.s && (W(this.a, "reset: Disposing secondary before sending ResetFrame."), this.s.b()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Ab = lg(this, m, m), vg(this.Ab, a), this.Ab.ha());
  ug(this, a, j)
};
s.Pd = function(a) {
  U(this.a, "Failed to start " + Q(this) + "; error was " + Q(a.message));
  this.b();
  return k
};
s.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.d && e(Error("ClientStream.start: " + Q(this) + " already started"));
  this.bd && this.bd(this);
  this.d = 2;
  if(this.t instanceof Xf) {
    var a = If(this.t.ba, this), b = If(this.t.Ea, this), a = new Nf([a, b], m, j);
    uc(a, function(a) {
      return gb(a, function(a) {
        return a[1]
      })
    });
    uc(a, z(this.rf, this));
    b = z(this.Pd, this);
    vc(a, k, b, i)
  }else {
    if(this.t instanceof Vf) {
      if(fe) {
        this.Rd()
      }else {
        a = this.p;
        b = this.t.ba;
        if(jf.length) {
          a = kf()
        }else {
          b = new Ye(b + "FlashConnector.swf?cb=4bdfc178fc0e508c0cd5efc3fdb09920");
          b.Ed = "#777777";
          Ze(b, 300, 30);
          var c = R("minerva-elements");
          c || e(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
          var d = R("minerva-elements-FlashConnectorSwf");
          d || (d = Xc("div", {id:"minerva-elements-FlashConnectorSwf"}), c.appendChild(d));
          var g = a.B, f;
          var a = d, h, l = function() {
            h && delete t.__loadFlashObject_callbacks[h]
          };
          if(Ia && !G("1.8.1.20")) {
            f = zc(new $e("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
          }else {
            if(0 <= za(xe, "9")) {
              var n;
              h = "_" + Yd();
              var o = new oc(l);
              t.__loadFlashObject_callbacks[h] = function() {
                g.setTimeout(function() {
                  l();
                  o.Y(R(n))
                }, 0)
              };
              b.Qb.set("onloadcallback", '__loadFlashObject_callbacks["' + h + '"]()');
              n = rd(b);
              td(b, a);
              f = o
            }else {
              f = zc(new $e("Need Flash Player 9+; had " + (xe ? xe : "none")))
            }
          }
          var w = g.setTimeout(function() {
            f.cancel()
          }, 8E3), a = function(a) {
            g.clearTimeout(w);
            return a
          };
          vc(f, a, a, i);
          ee = f;
          a = kf();
          vc(ee, lf, mf)
        }
        var q = this;
        uc(a, function(a) {
          fe || (fe = new gf(q.p, a));
          return k
        });
        uc(a, z(this.Rd, this));
        b = z(this.Pd, this);
        vc(a, k, b, i)
      }
    }else {
      wg(this)
    }
  }
};
s.rf = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Pb, g = a[1].Pb;
  this.rc.push(a[0]);
  this.rc.push(a[1]);
  this.t = new Yf(d, b, g, c);
  wg(this)
};
s.Rd = function() {
  this.t = new Wf(this.t.host, this.t.port, fe);
  wg(this)
};
function wg(a) {
  a.d = 3;
  a.h = lg(a, j, j);
  a.h && (kg(a.h, a.ca, k), a.h.ha())
}
s.c = function() {
  this.a.info(Q(this) + " in disposeInternal.");
  ig(this);
  this.d = 5;
  for(var a = this.Gb.D(), b = 0;b < a.length;b++) {
    a[b].b()
  }
  for(a = 0;a < this.rc.length;a++) {
    kb(this.rc[a].td, this)
  }
  F && this.Hb && (hc(this.Hb), this.Hb = k);
  this.ye && this.ye.call(this.mb);
  delete this.Gb;
  delete this.h;
  delete this.s;
  delete this.Ab;
  delete this.mb;
  fg.e.c.call(this)
};
var Rf = 1, og = 2, pg = 3;
function qg(a, b, c, d, g, f) {
  this.p = a;
  this.A = b;
  this.ka = c;
  this.da = d;
  this.t = g;
  this.v = [];
  this.ma = f;
  this.Ha = !this.ab();
  this.Ba = this.da != Rf;
  this.cf = z(this.$f, this)
}
C(qg, M);
s = qg.prototype;
s.a = Y("cw.net.ClientTransport");
s.k = k;
s.xd = k;
s.Ue = k;
s.gc = k;
s.ja = m;
s.oc = m;
s.cb = k;
s.Rb = 0;
s.gb = -1;
s.ec = -1;
s.Ye = m;
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
  return this.da == Rf || this.da == og
};
function xg(a, b) {
  I.sort.call(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  } || nb);
  a: {
    var c = a.A, d = !a.Ba, g, f = c.Pc;
    g = c.Hf;
    for(var h = c.Gf, l = [], n = m, o = 0, w = b.length;o < w;o++) {
      var q = b[o], x = q[0], q = q[1];
      if(x == f.Oa + 1) {
        f.Oa += 1;
        for(l.push(q);;) {
          x = f.Oa + 1;
          q = f.Ga.get(x, le);
          if(q === le) {
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
          var A = de(q);
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
          }catch(Dc) {
            V(c.a, "onstring raised uncaught exception", Dc), cg(Dc)
          }
        }
        if(4 == c.d || c.P) {
          break a
        }
      }
    }
    d || mg(c);
    if(!(4 == c.d || c.P) && g) {
      U(a.a, a.l() + "'s peer caused rwin overflow."), a.b()
    }
  }
}
function yg(a, b, c) {
  try {
    var d = Ff(b);
    a.Rb += 1;
    W(a.a, a.l() + " RECV " + Q(d));
    var g;
    1 == a.Rb && !d.R(Zf) && a.ab() ? (V(a.a, a.l() + " is closing soon because got bad preamble: " + Q(d)), g = j) : g = m;
    if(g) {
      return j
    }
    if(d instanceof vf) {
      if(!/^([ -~]*)$/.test(d.ud)) {
        return a.ub = j
      }
      a.ec += 1;
      c.push([a.ec, d.ud])
    }else {
      if(d instanceof uf) {
        var f = a.A, h = d.Ca;
        f.me = h;
        var l = f.ca, n = h.Va, c = m;
        n > l.Ia && (c = j);
        for(var o = ie(l).concat(), d = 0;d < o.length;d++) {
          var w = o[d];
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
          l.J.ea(x) && (q = l.J.get(x)[1], l.J.remove(x), l.M -= q)
        }
        l.J.Na() && l.J.clear();
        if(c) {
          return V(a.a, a.l() + " is closing soon because got bad SackFrame"), a.ub = j
        }
      }else {
        if(d instanceof xf) {
          a.ec = d.Me - 1
        }else {
          if(d instanceof zf) {
            a.A.ne = d.le
          }else {
            if(d instanceof Bf) {
              return X(a.a, a.l() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof Ef) {
              return a.ub = j, "stream_attach_failure" == d.reason ? a.ya += 1 : "acked_unsent_strings" == d.reason && (a.ya += 0.5), X(a.a, a.l() + " is closing soon because got " + Q(d)), j
            }
            if(!(d instanceof wf)) {
              if(d instanceof Af) {
                var A = a.A, Dc = !a.Ba;
                X(A.a, "Stream is now confirmed to exist at server.");
                A.qd = j;
                A.jd && !Dc && (A.jd = m, hg(A))
              }else {
                if(c.length) {
                  xg(a, c);
                  if(!ga(c)) {
                    for(var Xd = c.length - 1;0 <= Xd;Xd--) {
                      delete c[Xd]
                    }
                  }
                  c.length = 0
                }
                if(d instanceof Cf) {
                  var $f = a.A;
                  ug($f, d.Ee, d.Dd);
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
    return ag instanceof $ || e(ag), V(a.a, a.l() + " is closing soon because got InvalidFrame: " + Q(b)), a.ub = j
  }
  return m
}
function df(a, b) {
  a.oc = j;
  try {
    for(var c = m, d = [], g = 0, f = b.length;g < f;g++) {
      if(a.P) {
        a.a.info(a.l() + " returning from loop because we're disposed.");
        return
      }
      if(c = yg(a, b[g], d)) {
        break
      }
    }
    d.length && xg(a, d);
    a.oc = m;
    a.v.length && a.ha();
    c && (X(a.a, a.l() + " closeSoon is true.  Frames were: " + Q(b)), a.b())
  }finally {
    a.oc = m
  }
}
s.$f = function() {
  V(this.a, this.l() + " timed out due to lack of connection or no data being received.");
  this.b()
};
function zg(a) {
  a.gc != k && (a.p.B.clearTimeout(a.gc), a.gc = k)
}
function Sf(a, b) {
  zg(a);
  b = Math.round(b);
  a.gc = a.p.B.setTimeout(a.cf, b);
  W(a.a, a.l() + "'s receive timeout set to " + b + " ms.")
}
function cf(a) {
  a.da != Rf && (a.da == pg || a.da == og ? Sf(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.da)))
}
function jg(a) {
  var b = new sf;
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
  b.Ca = ke(a.A.Pc);
  b.ac = a.A.me;
  a.v.push(b);
  a.cb = b.Ca
}
function ef(a, b) {
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
    !a && !this.v.length && jg(this);
    for(a = 0;a < this.v.length;a++) {
      W(this.a, this.l() + " SEND " + Q(this.v[a]))
    }
    if(this.ab()) {
      for(var a = [], b = 0, c = this.v.length;b < c;b++) {
        this.v[b].U(a), a.push("\n")
      }
      this.v = [];
      a = a.join("");
      b = this.ma ? this.t.ba : this.t.Ea;
      this.k = Tf.Dc(this, this.ma ? this.t.Ae : this.t.Le);
      this.xd = this.p.B === nc ? B() : this.p.B.getTime();
      this.k.Vc(b, "POST", a);
      Sf(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Ba ? 0 : this.ma ? 25E3 : 0))
    }else {
      if(this.da == pg) {
        a = [];
        b = 0;
        for(c = this.v.length;b < c;b++) {
          a.push(this.v[b].Q())
        }
        this.v = [];
        this.k ? this.k.Ib(a) : (b = this.t, this.k = new hf(this), this.k.nc = b.bg.Dc(this.k), this.xd = this.p.B === nc ? B() : this.p.B.getTime(), this.k.Ac(b.host, b.port), this.k.P || (this.k.Ib(a), this.k.P || Sf(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.da))
      }
    }
  }
};
function kg(a, b, c) {
  !a.ja && !a.v.length && jg(a);
  for(var d = Math.max(c, a.gb + 1), g = ie(b), c = [], f = 0;f < g.length;f++) {
    var h = g[f];
    (d == k || h >= d) && c.push([h, b.J.get(h)[0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    f = c[b], g = f[0], f = f[1], (-1 == a.gb || a.gb + 1 != g) && a.v.push(new xf(g)), a.v.push(new vf(f)), a.gb = g
  }
}
s.c = function() {
  this.a.info(this.l() + " in disposeInternal.");
  qg.e.c.call(this);
  this.Ue = this.p.B === nc ? B() : this.p.B.getTime();
  this.v = [];
  zg(this);
  this.k && this.k.b();
  var a = this.A;
  this.A = k;
  tg(a, this)
};
function vg(a, b) {
  !a.ja && !a.v.length && jg(a);
  a.v.push(new Cf(b, j));
  a.Ye = j
}
function sg(a, b, c, d) {
  this.p = a;
  this.A = b;
  this.Od = c;
  this.Kd = d
}
C(sg, M);
s = sg.prototype;
s.ja = m;
s.Ha = m;
s.Wb = k;
s.cb = k;
s.a = Y("cw.net.DoNothingTransport");
function Ag(a) {
  a.Wb = a.p.B.setTimeout(function() {
    a.Wb = k;
    a.Kd--;
    a.Kd ? Ag(a) : a.b()
  }, a.Od)
}
s.ha = function() {
  this.ja && !this.Ha && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.ja = j;
  Ag(this)
};
s.F = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.Od, ">")
};
s.ab = r(m);
s.l = r("Wast. T");
s.Id = r(m);
s.c = function() {
  this.a.info(this.l() + " in disposeInternal.");
  sg.e.c.call(this);
  this.Wb != k && this.p.B.clearTimeout(this.Wb);
  var a = this.A;
  this.A = k;
  tg(a, this)
};
/*

 linkify - v0.3 - 6/27/2009
 http://benalman.com/code/test/js-linkify/

 Copyright (c) 2009 "Cowboy" Ben Alman
 Licensed under the MIT license
 http://benalman.com/about/license/

 Some regexps adapted from http://userscripts.org/scripts/review/7122
*/
var Bg, Cg, Dg, Eg;
Bg = RegExp("(?:\\b[a-z\\d.-]+://[^<>\\s]+|\\b(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:[;/][^#?<>\\s]*)?(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w)|(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w))", 
"ig");
Cg = /^[a-z\d.-]+:\/\//i;
Dg = {"'":"`", ">":"<", ")":"(", "]":"[", "}":"{", "\u00bb":"\u00ab", "\u203a":"\u2039"};
Eg = {Y:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, De:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
function Fg(a) {
  a = "" + a;
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
;function Gg() {
}
Gg.prototype.Jb = k;
var Hg;
function Ig() {
}
C(Ig, Gg);
function Jg(a) {
  return(a = Kg(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Lg(a) {
  var b = {};
  Kg(a) && (b[0] = j, b[1] = j);
  return b
}
Ig.prototype.Nc = k;
function Kg(a) {
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
Hg = new Ig;
function Mg(a) {
  this.headers = new J;
  this.nb = a || k
}
C(Mg, mc);
Mg.prototype.a = Y("goog.net.XhrIo");
var Ng = /^https?$/i;
s = Mg.prototype;
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
s.Je = "";
s.hg = m;
s.send = function(a, b, c, d) {
  this.i && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Tc = a;
  this.wb = "";
  this.ke = b;
  this.Fc = m;
  this.la = j;
  this.i = this.nb ? Jg(this.nb) : Jg(Hg);
  this.sc = this.nb ? this.nb.Jb || (this.nb.Jb = Lg(this.nb)) : Hg.Jb || (Hg.Jb = Lg(Hg));
  this.i.onreadystatechange = z(this.xe, this);
  try {
    W(this.a, Og(this, "Opening Xhr")), this.Oc = j, this.i.open(b, a, j), this.Oc = m
  }catch(g) {
    W(this.a, Og(this, "Error opening Xhr: " + g.message));
    Pg(this, g);
    return
  }
  var a = c || "", f = this.headers.O();
  d && rb(d, function(a, b) {
    f.set(b, a)
  });
  "POST" == b && !f.ea("Content-Type") && f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  rb(f, function(a, b) {
    this.i.setRequestHeader(b, a)
  }, this);
  this.Je && (this.i.responseType = this.Je);
  "withCredentials" in this.i && (this.i.withCredentials = this.hg);
  try {
    this.Sa && (nc.clearTimeout(this.Sa), this.Sa = k), 0 < this.pc && (W(this.a, Og(this, "Will abort after " + this.pc + "ms if incomplete")), this.Sa = nc.setTimeout(z(this.ag, this), this.pc)), W(this.a, Og(this, "Sending request")), this.Yb = j, this.i.send(a), this.Yb = m
  }catch(h) {
    W(this.a, Og(this, "Send error: " + h.message)), Pg(this, h)
  }
};
s.ag = function() {
  "undefined" != typeof ba && this.i && (this.wb = "Timed out after " + this.pc + "ms, aborting", W(this.a, Og(this, this.wb)), this.dispatchEvent("timeout"), this.abort(8))
};
function Pg(a, b) {
  a.la = m;
  a.i && (a.La = j, a.i.abort(), a.La = m);
  a.wb = b;
  Qg(a);
  Rg(a)
}
function Qg(a) {
  a.Fc || (a.Fc = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
s.abort = function() {
  this.i && this.la && (W(this.a, Og(this, "Aborting")), this.la = m, this.La = j, this.i.abort(), this.La = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Rg(this))
};
s.c = function() {
  this.i && (this.la && (this.la = m, this.La = j, this.i.abort(), this.La = m), Rg(this, j));
  Mg.e.c.call(this)
};
s.xe = function() {
  !this.Oc && !this.Yb && !this.La ? this.Kf() : Sg(this)
};
s.Kf = function() {
  Sg(this)
};
function Sg(a) {
  if(a.la && "undefined" != typeof ba) {
    if(a.sc[1] && 4 == a.ta() && 2 == Tg(a)) {
      W(a.a, Og(a, "Local request error detected and ignored"))
    }else {
      if(a.Yb && 4 == a.ta()) {
        nc.setTimeout(z(a.xe, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.ta()) {
          W(a.a, Og(a, "Request complete"));
          a.la = m;
          try {
            var b = Tg(a), c, d;
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
                g = !Ng.test(f ? f.toLowerCase() : "")
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
              a.wb = l + " [" + Tg(a) + "]";
              Qg(a)
            }
          }finally {
            Rg(a)
          }
        }
      }
    }
  }
}
function Rg(a, b) {
  if(a.i) {
    var c = a.i, d = a.sc[0] ? da : k;
    a.i = k;
    a.sc = k;
    a.Sa && (nc.clearTimeout(a.Sa), a.Sa = k);
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
function Tg(a) {
  try {
    return 2 < a.ta() ? a.i.status : -1
  }catch(b) {
    return V(a.a, "Can not get status: " + b.message), -1
  }
}
s.getResponseHeader = function(a) {
  return this.i && 4 == this.ta() ? this.i.getResponseHeader(a) : i
};
function Og(a, b) {
  return b + " [" + a.ke + " " + a.Tc + " " + Tg(a) + "]"
}
;var Ug = !(E || F && !G("420+"));
function Vg(a, b) {
  this.qc = a;
  this.X = b
}
C(Vg, M);
s = Vg.prototype;
s.k = k;
s.Aa = -1;
s.Ud = m;
s.ce = "Content-Length Server Date Expires Keep-Alive Content-Type Transfer-Encoding Cache-Control".split(" ");
function Wg(a) {
  var b = Pf(a.Md), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.X, c, b), 1 != b && a.b()) : a.b()
}
s.Cf = function() {
  Wg(this);
  if(!this.P) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.X);
    this.b()
  }
};
s.Of = function() {
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
      if(b.r() && (this.Ud = j, a.__XHRMaster_ongotheaders(this.X, wb(b)), this.P)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.X, this.Aa);
    Ug && 3 == this.Aa && Wg(this)
  }else {
    this.b()
  }
};
s.Vc = function(a, b, c) {
  this.k = new Mg;
  O(this.k, "readystatechange", z(this.Of, this));
  O(this.k, "complete", z(this.Cf, this));
  this.k.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Md = new Of(this.k.i, 1048576)
};
s.c = function() {
  Vg.e.c.call(this);
  delete this.Md;
  this.k && this.k.b();
  delete this.qc.Eb[this.X];
  delete this.qc
};
function Xg() {
  this.Eb = {}
}
C(Xg, M);
Xg.prototype.Ff = function(a, b, c, d) {
  var g = new Vg(this, a);
  this.Eb[a] = g;
  g.Vc(b, c, d)
};
Xg.prototype.nf = function(a) {
  (a = this.Eb[a]) && a.b()
};
Xg.prototype.c = function() {
  Xg.e.c.call(this);
  for(var a = $a(this.Eb);a.length;) {
    a.pop().b()
  }
  delete this.Eb
};
var Yg = new Xg;
t.__XHRSlave_makeRequest = z(Yg.Ff, Yg);
t.__XHRSlave_dispose = z(Yg.nf, Yg);
var Zg = Y("cw.net.demo");
function $g() {
}
$g.prototype.Td = function() {
  return Boolean(Number((new K(document.location)).K.get("httpStreaming", "0"))) ? 2 : 1
};
function ah() {
  this.Fe = B()
}
var bh = new ah;
ah.prototype.set = aa("Fe");
ah.prototype.reset = function() {
  this.set(B())
};
ah.prototype.get = p("Fe");
function ch(a) {
  this.gd = a || "";
  this.Wf = bh
}
ch.prototype.Sf = j;
ch.prototype.Uf = j;
ch.prototype.Tf = j;
ch.prototype.Ne = m;
function dh(a) {
  return 10 > a ? "0" + a : "" + a
}
function eh(a, b) {
  var c = (a.Se - b) / 1E3, d = c.toFixed(3), g = 0;
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
function fh(a) {
  ch.call(this, a)
}
C(fh, ch);
fh.prototype.Ne = j;
function gh(a) {
  this.Xc = a || 100;
  this.na = []
}
s = gh.prototype;
s.xb = 0;
s.add = function(a) {
  this.na[this.xb] = a;
  this.xb = (this.xb + 1) % this.Xc
};
s.get = function(a) {
  a = hh(this, a);
  return this.na[a]
};
s.set = function(a, b) {
  a = hh(this, a);
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
s.$ = function() {
  for(var a = [], b = this.r(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
s.ea = function(a) {
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
function hh(a, b) {
  b >= a.na.length && e(Error("Out of bounds exception"));
  return a.na.length < a.Xc ? b : (a.xb + Number(b)) % a.Xc
}
;function ih(a, b) {
  this.ua = a || "";
  this.gd = b || "";
  this.hb = [];
  this.jc = new gh(jh);
  this.Nf = z(this.af, this);
  this.vf = new fh(this.gd);
  this.sf = {};
  if(j != this.he) {
    this.he = j;
    var c = Xe(), d = this.Nf;
    c.vb || (c.vb = []);
    c.vb.push(d)
  }
  this.rb = "1" == kh(this.ua, "enabled");
  t.setInterval(z(this.Rf, this), 7500)
}
var jh = 500;
s = ih.prototype;
s.Xe = "LOGGING";
s.pf = m;
s.w = k;
s.Ad = m;
s.he = m;
s.Fd = k;
s.Sc = B();
s.Ma = function() {
  this.rb && lh(this)
};
s.isEnabled = p("rb");
s.lc = function(a) {
  (this.rb = a) && lh(this);
  mh(this, "enabled", a ? "1" : "0")
};
function nh(a) {
  return!!a.w && !a.w.closed
}
s.gf = function() {
  this.jc.clear();
  nh(this) && this.Cd()
};
s.af = function(a) {
  if(!this.sf[a.pe]) {
    var b = this.vf, c;
    switch(a.W.value) {
      case Ie.value:
        c = "dbg-sh";
        break;
      case Je.value:
        c = "dbg-sev";
        break;
      case Ke.value:
        c = "dbg-w";
        break;
      case Le.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.gd, " ");
    if(b.Sf) {
      var g = new Date(a.Se);
      d.push("[", dh(g.getFullYear() - 2E3) + dh(g.getMonth() + 1) + dh(g.getDate()) + " " + dh(g.getHours()) + ":" + dh(g.getMinutes()) + ":" + dh(g.getSeconds()) + "." + dh(Math.floor(g.getMilliseconds() / 10)), "] ")
    }
    b.Uf && d.push("[", ya(eh(a, b.Wf.get())), "s] ");
    b.Tf && d.push("[", D(a.pe), "] ");
    d.push('<span class="', c, '">', sa(ya(D(a.te))));
    b.Ne && a.Ic && d.push("<br>", sa(ya(a.Hc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.rb ? (lh(this), this.jc.add(b), oh(this, b)) : this.jc.add(b);
    this.pf && a.W.value >= Je.value && this.lc(j)
  }
};
function oh(a, b) {
  a.hb.push(b);
  t.clearTimeout(a.Fd);
  750 < B() - a.Sc ? a.Bd() : a.Fd = t.setTimeout(z(a.Bd, a), 250)
}
s.Bd = function() {
  this.Sc = B();
  if(nh(this)) {
    var a = this.w.document.body, a = a && 100 >= a.scrollHeight - (a.scrollTop + a.clientHeight);
    this.w.document.write(this.hb.join(""));
    this.hb.length = 0;
    a && this.w.scrollTo(0, 1E6)
  }
};
function ph(a) {
  for(var b = a.jc.D(), c = 0;c < b.length;c++) {
    oh(a, b[c])
  }
}
function lh(a) {
  if(!nh(a) && !a.Ad) {
    var b = kh(a.ua, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), g = Number(b[2]), b = Number(b[3]);
    a.Ad = j;
    a.w = window.open("", E ? a.ua.replace(/[\s\-\.\,]/g, "_") : a.ua, "width=" + g + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    !a.w && !a.Vf && (alert("Logger popup was blocked"), a.Vf = j);
    a.Ad = m;
    a.w && a.Cd()
  }
}
s.Tb = r("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
s.Cd = function() {
  nh(this) || (this.w.document.open(), oh(this, "<style>" + this.Tb() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.Xe + "<br><small>Logger: " + this.ua + "</small></div><hr>"), ph(this))
};
function mh(a, b, c) {
  b += a.ua;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(B() + 2592E6)).toUTCString()
}
function kh(a, b, c) {
  var a = b + a, b = "" + document.cookie, d = b.indexOf(a + "=");
  return-1 != d ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, -1 == c ? b.length : c))) : c || ""
}
s.Rf = function() {
  nh(this) && mh(this, "dbg", (this.w.screenX || this.w.screenLeft || 0) + "," + (this.w.screenY || this.w.screenTop || 0) + "," + (this.w.outerWidth || 800) + "," + (this.w.outerHeight || 500))
};
function qh(a, b) {
  if(rh) {
    var c = sh(), d;
    for(d in c) {
      var c = d.replace("fancywindow.sel.", ""), c = Y(c), g = c.W, f = window.localStorage.getItem(d).toString();
      (!g || g.toString() != f) && c.kb(Se(f))
    }
  }
  ih.call(this, a, b)
}
C(qh, ih);
var rh;
a: {
  try {
    rh = !!window.localStorage.getItem;
    break a
  }catch(th) {
  }
  rh = m
}
s = qh.prototype;
s.Bd = function() {
  this.Sc = B();
  if(nh(this)) {
    for(var a = this.H.g("log"), b = 100 >= a.scrollHeight - (a.scrollTop + a.offsetHeight), c = 0;c < this.hb.length;c++) {
      var d = this.H.n("div", "logmsg");
      d.innerHTML = this.hb[c];
      a.appendChild(d)
    }
    this.hb.length = 0;
    this.Ie();
    b && (a.scrollTop = a.scrollHeight)
  }
};
s.Cd = function() {
  if(nh(this)) {
    var a = this.w.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.ua + "</title><style>" + this.Tb() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.ua + "</b></p><p>" + this.Xe + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (E ? a.body : this.w).onresize = z(this.Ie, this);
    this.H = new Uc(a);
    this.H.g("openbutton").onclick = z(this.Lf, this);
    this.H.g("closebutton").onclick = z(this.hf, this);
    this.H.g("clearbutton").onclick = z(this.gf, this);
    this.H.g("exitbutton").onclick = z(this.qf, this);
    ph(this)
  }
};
s.Lf = function() {
  var a = this.H.g("optionsarea");
  a.innerHTML = "";
  for(var b = uh(), c = this.H, d = 0;d < b.length;d++) {
    var g = Y(b[d]), g = c.n("div", {}, vh(this, "sel" + b[d], g.W ? g.W.name : "INHERIT"), c.n("span", {}, b[d] || "(root)"));
    a.appendChild(g)
  }
  this.H.g("options").style.display = "block";
  return m
};
function vh(a, b, c) {
  for(var a = a.H, b = a.n("select", {id:b}), d = 0;d < Qe.length;d++) {
    var g = Qe[d], f = a.n("option", {}, g.name);
    c == g.name && (f.selected = j);
    b.appendChild(f)
  }
  b.appendChild(a.n("option", {selected:"INHERIT" == c}, "INHERIT"));
  return b
}
s.hf = function() {
  this.H.g("options").style.display = "none";
  for(var a = uh(), b = this.H, c = 0;c < a.length;c++) {
    var d = Y(a[c]), g = b.g("sel" + a[c]), g = g.options[g.selectedIndex].text;
    "INHERIT" == g ? d.kb(k) : d.kb(Se(g))
  }
  if(rh) {
    a = uh();
    b = sh();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], g = Y(a[c]).W, d in b ? g ? window.localStorage.getItem(d) != g.name && window.localStorage.setItem(d, g.name) : window.localStorage.removeItem(d) : g && window.localStorage.setItem(d, g.name)
    }
  }
  return m
};
s.Ie = function() {
  var a = this.H, b = a.g("log"), c = a.g("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.fa.body.offsetHeight - c.offsetHeight - (E ? 4 : 0) + "px"
};
s.qf = function() {
  this.lc(m);
  this.w && this.w.close()
};
s.Tb = function() {
  return qh.e.Tb.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function sh() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != k && 0 == d.lastIndexOf("fancywindow.sel.", 0) && (a[d] = j)
  }
  return a
}
function uh() {
  var a = ab(Ue);
  a.sort();
  return a
}
;var wh, xh = Y("ljstream.logger");
window.onerror = function(a, b, c) {
  U(xh, "window.onerror: message: " + Q(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function yh() {
}
yh.prototype.Pe = function(a) {
  this.A = a;
  ng(this.A, "subprotocol:ljstream");
  zh(this)
};
yh.prototype.Oe = function(a, b) {
  xh.info("streamReset: reasonString=" + Q(a) + ", applicationLevel=" + b);
  Ah("Disconnected from server.  Try reloading this page.");
  Bh = k
};
function zh(a) {
  xh.info("Sending preferences to server");
  ng(a.A, Ec(["SetPreferences", {include_russian_posts:R("include_russian_posts").checked}]))
}
yh.prototype.Qe = function(a) {
  var a = Fg(a), b = a[1];
  if("NewPost" == a[0]) {
    var a = b.title, c = b.url, b = b.body;
    (a = ra(a)) || (a = "[No title]");
    var b = D(b), d;
    d = d || {};
    var g = [], f, h;
    for(h in Eg) {
      u(d[h]) || (d[h] = Eg[h])
    }
    for(;h = Bg.exec(b);) {
      h = h[0];
      var l = Bg.lastIndex, n = l - h.length;
      if(!/[\/:]/.test(b.charAt(n - 1))) {
        do {
          var o = h, w = h.substr(-1), q = Dg[w];
          if(q && (q = h.match(RegExp("\\" + q + "(?!$)", "g")), w = h.match(RegExp("\\" + w, "g")), (q ? q.length : 0) < (w ? w.length : 0))) {
            h = h.substr(0, h.length - 1), l--
          }
          d.De && (h = h.replace(d.De, function(a) {
            l -= a.length;
            return""
          }))
        }while(h.length && h !== o);
        o = h;
        Cg.test(o) || (o = (-1 !== o.indexOf("@") ? !o.indexOf("mailto:") ? "" : "mailto:" : !o.indexOf("irc.") ? "irc://" : !o.indexOf("ftp.") ? "ftp://" : "http://") + o);
        f != n && (g.push([b.slice(f, n)]), f = l);
        g.push([h, o])
      }
    }
    g.push([b.substr(f)]);
    f = "";
    for(h = 0;h < g.length;h++) {
      f += d.Y.apply(t, g[h])
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
    a = Xc("span", {}, Xc("a", {href:c, "class":"ljpost-title-link"}, a), Xc("span", {}, "\u00a0"), d);
    Ch(a)
  }
};
yh.prototype.reset = function(a) {
  xh.info("resetting with reason: " + a);
  this.A.reset(a)
};
var Bh = k, Dh = new Ac(t.window);
function Ah(a) {
  a = Xc("span", {"class":"important-message"}, a);
  Ch(a)
}
function Eh() {
  Bh && (Bh.reset("idle timeout fired"), Bh = k, Ah("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var Fh = k;
function Gh() {
  Fh != k && Dh.B.clearTimeout(Fh);
  Bh && (Fh = Dh.B.setTimeout(Eh, 6E5))
}
O(window, ["click", "focus", "keydown", "keypress"], Gh, j);
var gd = new Uc, Hh = 0;
function Ch(a) {
  a = Xc("div", {"class":"row-" + (0 == Hh % 2 ? "even" : "odd")}, Xc("nobr", {}, a));
  R("ljstream-container-inner").appendChild(a);
  Hh += 1;
  if(wh) {
    for(var b = a, a = b.offsetTop, c = b.offsetHeight;b.offsetParent;) {
      b = b.offsetParent, a += b.offsetTop
    }
    var d = document, b = !F && "CSS1Compat" == d.compatMode ? d.documentElement : d.body, d = d.parentWindow || d.defaultView;
    a + c <= (new Lc(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop)).y + fd().height || window.scrollBy(0, Math.round(fd().height / 2) + 80)
  }
}
function Ih() {
  Xe().kb(Pe);
  if("1" == (new K(document.location)).K.get("logging")) {
    var a = new qh("main");
    a.lc(j);
    a.Ma()
  }
  xh.info("Logger works.");
  O(t, "load", function() {
    window.scrollTo(0, 0)
  });
  O(R("include_russian_posts"), "click", function() {
    zh(Bh)
  });
  wh = j;
  O(R("automatic_scroll"), "click", function(a) {
    wh = a.target.checked
  });
  a = new Wd("Clear posts");
  Ld(a, "clear-posts-button");
  td(a, R("prefs"));
  O(a, "action", function() {
    R("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = R("ljstream-container");
  a.style.marginTop = R("demo-header").offsetHeight + "px";
  R("demo-header").style.width = "9000px";
  var b = Xc("div", {id:"ljstream-container-inner"});
  a.appendChild(b);
  a = new $g;
  Bh = new yh;
  Gh();
  var c = (new K(document.location)).K, b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    V(Zg, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new K(document.location);
  b ? b = new Vf("/_minerva/", c.pa, t.__demo_mainSocketPort) : (d ? (b = t.__demo_shared_domain, v(b) || e(Error("domain was " + Q(b) + "; expected a string.")), c = c.O(), yb(c, "_____random_____." + b)) : c = c.O(), Ab(c, "/_minerva/"), Bb(c, "", i), b = new Xf(c.toString().replace("_____random_____", "%random%")));
  a = new fg(b, a, Dh);
  b = Bh;
  u(b.Pe) || e(Error("Protocol is missing required method streamStarted"));
  u(b.Oe) || e(Error("Protocol is missing required method streamReset"));
  u(b.Qe) || e(Error("Protocol is missing required method stringReceived"));
  a.bd = z(b.Pe, b);
  a.onreset = z(b.Oe, b);
  a.cd = z(b.Qe, b);
  a.dd = u(b.cg) ? z(b.cg, b) : k;
  a.ed = u(b.dg) ? z(b.dg, b) : k;
  a.start()
}
var Jh = ["__ljstream_init"], Kh = t;
!(Jh[0] in Kh) && Kh.execScript && Kh.execScript("var " + Jh[0]);
for(var Lh;Jh.length && (Lh = Jh.shift());) {
  !Jh.length && u(Ih) ? Kh[Lh] = Ih : Kh = Kh[Lh] ? Kh[Lh] : Kh[Lh] = {}
}
;
})();
