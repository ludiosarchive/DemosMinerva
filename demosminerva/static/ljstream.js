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
function da() {
}
function ea(a) {
  a.Za = function() {
    return a.he ? a.he : a.he = new a
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
  return sa(a.replace(/  /g, " &#160;"), h)
}
function za(a, b) {
  for(var c = 0, d = ra("" + a).split("."), g = ra("" + b).split("."), f = Math.max(d.length, g.length), i = 0;0 == c && i < f;i++) {
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
    Qa = Ra ? Ra.documentMode : h;
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
  b.shift();
  this.wh = a
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
    b.call(h, a[c], c, a)
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
  for(var d = a.length, g = [], f = 0, i = v(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in i) {
      var n = i[l];
      b.call(c, n, l, a) && (g[f++] = n)
    }
  }
  return g
}, gb = I.map ? function(a, b, c) {
  return I.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = Array(d), f = v(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in f && (g[i] = b.call(c, f[i], i, a))
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
      for(var d = rb(a), g = qb(a), f = g.length, i = 0;i < f;i++) {
        b.call(c, g[i], d && d[i], a)
      }
    }
  }
}
function tb(a, b) {
  if("function" == typeof a.every) {
    return a.every(b, h)
  }
  if(ha(a) || v(a)) {
    return ib(a, b, h)
  }
  for(var c = rb(a), d = qb(a), g = d.length, f = 0;f < g;f++) {
    if(!b.call(h, d[f], c && c[f], a)) {
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
    a && this.wc(a)
  }
}
s = J.prototype;
s.f = 0;
s.zd = 0;
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
  this.zd = this.f = this.j.length = 0
};
s.remove = function(a) {
  return vb(this.o, a) ? (delete this.o[a], this.f--, this.zd++, this.j.length > 2 * this.f && ub(this), j) : m
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
  vb(this.o, a) || (this.f++, this.j.push(a), this.zd++);
  this.o[a] = b
};
s.wc = function(a) {
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
    this.R = u(b) ? b : a.R, yb(this, a.Da), c = a.Ua, L(this), this.Ua = c, zb(this, a.pa), Ab(this, a.ib), Bb(this, a.xa), Cb(this, a.K.O()), c = a.Ja, L(this), this.Ja = c
  }else {
    if(a && (c = ("" + a).match(Xa))) {
      this.R = !!b;
      yb(this, c[1] || "", j);
      var d = c[2] || "";
      L(this);
      this.Ua = d ? decodeURIComponent(d) : "";
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
s.Ua = "";
s.pa = "";
s.ib = k;
s.xa = "";
s.Ja = "";
s.If = m;
s.R = m;
s.toString = function() {
  var a = [], b = this.Da;
  b && a.push(Eb(b, Fb), ":");
  if(b = this.pa) {
    a.push("//");
    var c = this.Ua;
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
  a.If && e(Error("Tried to modify a read-only Uri"))
}
s.ld = function(a) {
  this.R = a;
  this.K && this.K.ld(a);
  return this
};
function Kb(a) {
  return a instanceof K ? a.O() : new K(a, h)
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
s.Nb = function(a) {
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
      var i = g;
      "" !== d[f] && (i += "=" + encodeURIComponent("" + d[f]));
      a.push(i)
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
s.Ra = m;
s.Ac = m;
s.Ma = function(a, b, c, d, g, f) {
  y(a) ? this.le = j : a && a.handleEvent && y(a.handleEvent) ? this.le = m : e(Error("Invalid listener argument"));
  this.fb = a;
  this.Fe = b;
  this.src = c;
  this.type = d;
  this.capture = !!g;
  this.Zb = f;
  this.Ac = m;
  this.key = ++Qb;
  this.Ra = m
};
s.handleEvent = function(a) {
  return this.le ? this.fb.call(this.Zb || this.src, a) : this.fb.handleEvent.call(this.fb, a)
};
var Rb = !E || Ua(), Sb = !E || Ua(), Tb = E && !G("8");
!F || G("528");
Ia && G("1.9b") || E && G("8") || Ha && G("9.5") || F && G("528");
Ia && !G("8") || E && G("9");
var Ub = {wg:"click", Bg:"dblclick", Vg:"mousedown", Zg:"mouseup", Yg:"mouseover", Xg:"mouseout", Wg:"mousemove", lh:"selectstart", Qg:"keypress", Pg:"keydown", Rg:"keyup", ug:"blur", Jg:"focus", Cg:"deactivate", Kg:E ? "focusin" : "DOMFocusIn", Lg:E ? "focusout" : "DOMFocusOut", vg:"change", kh:"select", mh:"submit", Og:"input", gh:"propertychange", Gg:"dragstart", Dg:"dragenter", Fg:"dragover", Eg:"dragleave", Hg:"drop", qh:"touchstart", ph:"touchmove", oh:"touchend", nh:"touchcancel", yg:"contextmenu", 
Ig:"error", Ng:"help", Sg:"load", Tg:"losecapture", hh:"readystatechange", ih:"resize", jh:"scroll", sh:"unload", Mg:"hashchange", bh:"pagehide", dh:"pageshow", fh:"popstate", zg:"copy", eh:"paste", Ag:"cut", rg:"beforecopy", sg:"beforecut", tg:"beforepaste", ah:"online", $g:"offline", Ug:"message", xg:"connect", rh:F ? "webkitTransitionEnd" : Ha ? "oTransitionEnd" : "transitionend"};
function M() {
}
M.prototype.ea = m;
M.prototype.b = function() {
  this.ea || (this.ea = j, this.c())
};
M.prototype.c = function() {
  this.pf && Vb.apply(k, this.pf);
  if(this.ze) {
    for(;this.ze.length;) {
      this.ze.shift()()
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
s.Qa = m;
s.defaultPrevented = m;
s.kc = j;
s.stopPropagation = function() {
  this.Qa = j
};
s.preventDefault = function() {
  this.defaultPrevented = j;
  this.kc = m
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
  this.fd = Ka ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ga = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Qa
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
    var d = !!d, i = N;
    b in i || (i[b] = {f:0, S:0});
    i = i[b];
    d in i || (i[d] = {f:0, S:0}, i.f++);
    var i = i[d], l = ka(a), n;
    i.S++;
    if(i[l]) {
      n = i[l];
      for(f = 0;f < n.length;f++) {
        if(i = n[f], i.fb == c && i.Zb == g) {
          if(i.Ra) {
            break
          }
          return n[f].key
        }
      }
    }else {
      n = i[l] = [], i.f++
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
    i = new Pb;
    i.Ma(c, f, a, b, d, g);
    c = i.key;
    f.key = c;
    n.push(i);
    bc[c] = i;
    cc[l] || (cc[l] = []);
    cc[l].push(i);
    a.addEventListener ? (a == t || !a.Md) && a.addEventListener(b, f, d) : a.attachEvent(b in dc ? dc[b] : dc[b] = "on" + b, f);
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
  bc[a].Ac = j;
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
        if(a[f].fb == c && a[f].capture == d && a[f].Zb == g) {
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
  if(b.Ra) {
    return m
  }
  var c = b.src, d = b.type, g = b.Fe, f = b.capture;
  c.removeEventListener ? (c == t || !c.Md) && c.removeEventListener(d, g, f) : c.detachEvent && c.detachEvent(d in dc ? dc[d] : dc[d] = "on" + d, g);
  c = ka(c);
  g = N[d][f][c];
  if(cc[c]) {
    var i = cc[c];
    kb(i, b);
    0 == i.length && delete cc[c]
  }
  b.Ra = j;
  g.xe = j;
  jc(d, f, c, g);
  delete bc[a];
  return j
}
function jc(a, b, c, d) {
  if(!d.dc && d.xe) {
    for(var g = 0, f = 0;g < d.length;g++) {
      d[g].Ra ? d[g].Fe.src = k : (g != f && (d[f] = d[g]), f++)
    }
    d.length = f;
    d.xe = m;
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
    a.dc ? a.dc++ : a.dc = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var n = a[l];
        n && !n.Ra && (f &= lc(n, g) !== m)
      }
    }finally {
      a.dc--, jc(c, d, b, a)
    }
  }
  return Boolean(f)
}
function lc(a, b) {
  a.Ac && ic(a.key);
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
  var g = g[d], f, i;
  if(!Sb) {
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
    p = new Zb;
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
          p.currentTarget = q[A], f &= kc(i, q[A], d, j, p)
        }
        if(n) {
          i = g[m];
          i.S = i.f;
          for(A = 0;!p.Qa && A < q.length && i.S;A++) {
            p.currentTarget = q[A], f &= kc(i, q[A], d, m, p)
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
s.Md = j;
s.fc = k;
s.md = aa("fc");
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
      for(f = this;f;f = f.fc) {
        g.push(f)
      }
      f = c[j];
      f.S = f.f;
      for(var i = g.length - 1;!a.Qa && 0 <= i && f.S;i--) {
        a.currentTarget = g[i], d &= kc(f, g[i], a.type, j, a) && a.kc != m
      }
    }
    if(m in c) {
      if(f = c[m], f.S = f.f, b) {
        for(i = 0;!a.Qa && i < g.length && f.S;i++) {
          a.currentTarget = g[i], d &= kc(f, g[i], a.type, m, a) && a.kc != m
        }
      }else {
        for(g = this;!a.Qa && g && f.S;g = g.fc) {
          a.currentTarget = g, d &= kc(f, g, a.type, m, a) && a.kc != m
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
  this.fc = k
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
  this.Lb = [];
  this.Hd = a;
  this.Od = b || k
}
s = pc.prototype;
s.ra = m;
s.tb = m;
s.zb = 0;
s.pd = m;
s.jf = m;
s.zc = 0;
s.cancel = function(a) {
  if(this.ra) {
    this.Cb instanceof pc && this.Cb.cancel()
  }else {
    if(this.z) {
      var b = this.z;
      delete this.z;
      a ? b.cancel(a) : (b.zc--, 0 >= b.zc && b.cancel())
    }
    this.Hd ? this.Hd.call(this.Od, this) : this.pd = j;
    this.ra || this.Xa(new qc(this))
  }
};
s.Kd = function(a, b) {
  rc(this, a, b);
  this.zb--;
  0 == this.zb && this.ra && sc(this)
};
function rc(a, b, c) {
  a.ra = j;
  a.Cb = c;
  a.tb = !b;
  sc(a)
}
function tc(a) {
  a.ra && (a.pd || e(new uc(a)), a.pd = m)
}
s.X = function(a) {
  tc(this);
  rc(this, j, a)
};
s.Xa = function(a) {
  tc(this);
  rc(this, m, a)
};
function vc(a, b, c, d) {
  a.Lb.push([b, c, d]);
  a.ra && sc(a)
}
function wc(a) {
  return hb(a.Lb, function(a) {
    return y(a[1])
  })
}
function sc(a) {
  a.yd && (a.ra && wc(a)) && (t.clearTimeout(a.yd), delete a.yd);
  a.z && (a.z.zc--, delete a.z);
  for(var b = a.Cb, c = m, d = m;a.Lb.length && 0 == a.zb;) {
    var g = a.Lb.shift(), f = g[0], i = g[1], g = g[2];
    if(f = a.tb ? i : f) {
      try {
        var l = f.call(g || a.Od, b);
        u(l) && (a.tb = a.tb && (l == b || l instanceof Error), a.Cb = b = l);
        b instanceof pc && (d = j, a.zb++)
      }catch(n) {
        b = n, a.tb = j, wc(a) || (c = j)
      }
    }
  }
  a.Cb = b;
  d && a.zb && (vc(b, z(a.Kd, a, j), z(a.Kd, a, m)), b.jf = j);
  c && (a.yd = t.setTimeout(function() {
    e(new xc(b))
  }, 0))
}
function yc(a) {
  var b = new pc;
  b.X(a);
  return b
}
function zc(a) {
  var b = new pc;
  b.Xa(a);
  return b
}
function uc(a) {
  H.call(this);
  this.of = a
}
C(uc, H);
uc.prototype.message = "Already called";
function qc(a) {
  H.call(this);
  this.of = a
}
C(qc, H);
qc.prototype.message = "Deferred was cancelled";
function xc(a) {
  H.call(this);
  this.th = a;
  this.message = "Unhandled Error in Deferred: " + (a.message || "[No message]")
}
C(xc, H);
function Ac(a) {
  this.B = a;
  this.Qb = [];
  this.Rd = [];
  this.hf = z(this.lg, this)
}
Ac.prototype.vd = k;
Ac.prototype.lg = function() {
  this.vd = k;
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
    a = this.Rd;
    this.Rd = [];
    for(b = 0;b < a.length;b++) {
      a[b].X(k)
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
  this.jc = h
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
          c.push(g), g = b[f], Fc(a, a.jc ? a.jc.call(b, "" + f, g) : g, c), g = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (g = b[f], "function" != typeof g && (c.push(d), Hc(f, c), c.push(":"), Fc(a, a.jc ? a.jc.call(b, f, g) : g, c), d = ","))
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
          if(Cc(a.cf)) {
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
                    for(var d = ab(a).concat(bb), g = {}, i = f = 0;i < d.length;) {
                      var l = d[i++], n = ja(l) ? "o" + ka(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(g, n) || (g[n] = j, d[f++] = l)
                    }
                    d.length = f;
                    b.push("{");
                    g = "";
                    for(i = 0;i < d.length;i++) {
                      f = d[i], Object.prototype.hasOwnProperty.call(a, f) && (l = a[f], b.push(g), Hc(f, b), b.push(": "), Kc(l, b, c), g = ", ")
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
  P(a, b, h);
  return b.join("")
}
;function Lc() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
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
  for(var c = Pc(a), d = nb(arguments, 1), g = c.length + d.length, f = c, i = 0;i < d.length;i++) {
    jb(f, d[i]) || f.push(d[i])
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
      var i = eb, l;
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
      i(l ? mb(f) : f, g)
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
s.Ya = Uc;
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
  this.ce = a;
  this.j = []
}
C(kd, M);
var ld = [];
function md(a, b, c, d) {
  ga(c) || (ld[0] = c, c = ld);
  for(var g = 0;g < c.length;g++) {
    a.j.push(O(b, c[g], d || a, m, a.ce || a))
  }
  return a
}
function nd(a, b, c, d, g, f) {
  if(ga(c)) {
    for(var i = 0;i < c.length;i++) {
      nd(a, b, c[i], d, g, f)
    }
  }else {
    a: {
      d = d || a;
      f = f || a.ce || a;
      g = !!g;
      if(b = hc(b, c, g)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].Ra && b[c].fb == d && b[c].capture == g && b[c].Zb == f) {
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
od.prototype.Of = 0;
od.Za();
function pd(a) {
  this.Pb = a || Uc();
  this.Db = qd
}
C(pd, nc);
pd.prototype.Hf = od.Za();
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
s.Db = k;
s.Mf = k;
s.z = k;
s.oa = k;
s.Mb = k;
s.mg = m;
function sd(a) {
  return a.$ || (a.$ = ":" + (a.Hf.Of++).toString(36))
}
s.g = o("q");
function td(a) {
  return a.$a || (a.$a = new kd(a))
}
s.getParent = o("z");
s.md = function(a) {
  this.z && this.z != a && e(Error("Method not supported"));
  pd.e.md.call(this, a)
};
s.Ya = o("Pb");
s.n = function() {
  this.q = this.Pb.createElement("div")
};
function ud(a, b) {
  a.U && e(Error("Component already rendered"));
  a.q || a.n();
  b ? b.insertBefore(a.q, k) : a.Pb.fa.body.appendChild(a.q);
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
  this.$a && this.$a.hd();
  this.U = m
};
s.c = function() {
  pd.e.c.call(this);
  this.U && this.sb();
  this.$a && (this.$a.b(), delete this.$a);
  vd(this, function(a) {
    a.b()
  });
  if(!this.mg && this.q) {
    var a = this.q;
    a && a.parentNode && a.parentNode.removeChild(a)
  }
  this.z = this.Mf = this.q = this.Mb = this.oa = k
};
s.lb = function(a) {
  this.U && e(Error("Component already rendered"));
  this.Db = a
};
function vd(a, b) {
  a.oa && eb(a.oa, b, h)
}
s.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : sd(a), d;
    this.Mb && c ? (d = this.Mb, d = (c in d ? d[c] : h) || k) : d = k;
    a = d;
    c && a && (d = this.Mb, c in d && delete d[c], kb(this.oa, a), b && (a.sb(), a.q && (c = a.q) && c.parentNode && c.parentNode.removeChild(c)), c = a, c == k && e(Error("Unable to set parent component")), c.z = k, pd.e.md.call(c, k))
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function wd() {
}
var xd;
ea(wd);
s = wd.prototype;
s.Ub = function() {
};
s.n = function(a) {
  var b = a.Ya().n("div", yd(this, a).join(" "), a.pb);
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
s.ge = function(a) {
  if(a.Db == k) {
    var b = a.U ? a.q : a.Pb.fa.body, c;
    a: {
      c = Wc(b);
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
s.kd = function(a, b) {
  a.isEnabled() || this.N(b, 1, j);
  a.d & 8 && this.N(b, 8, j);
  a.G & 16 && this.N(b, 16, !!(a.d & 16));
  a.G & 64 && this.N(b, 64, !!(a.d & 64))
};
s.mc = function(a, b) {
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
s.ke = function(a) {
  var b;
  return a.G & 32 && (b = a.Ka()) ? dd(b) : m
};
s.Eb = function(a, b) {
  var c;
  if(a.G & 32 && (c = a.Ka())) {
    if(!b && a.d & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.d & 32 && a.Wd()
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
  if(!a.Id) {
    var c = a.sa();
    a.Id = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Id[b]
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
s.ac = k;
s.Qc = k;
s.bc = k;
s.wa = -1;
s.va = -1;
var Id = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Jd = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Kd = E || 
F && G("525");
s = Gd.prototype;
s.Df = function(a) {
  if(F && (17 == this.wa && !a.ctrlKey || 18 == this.wa && !a.altKey)) {
    this.va = this.wa = -1
  }
  Kd && !Dd(a.keyCode, this.wa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.va = Ia ? Fd(a.keyCode) : a.keyCode
};
s.Ff = function() {
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
  a.bc && a.detach();
  a.q = b;
  a.ac = O(a.q, "keypress", a, c);
  a.Qc = O(a.q, "keydown", a.Df, c, a);
  a.bc = O(a.q, "keyup", a.Ff, c, a)
}
s.detach = function() {
  this.ac && (ic(this.ac), ic(this.Qc), ic(this.bc), this.bc = this.Qc = this.ac = k);
  this.q = k;
  this.va = this.wa = -1
};
s.c = function() {
  Gd.e.c.call(this);
  this.detach()
};
function Ld(a, b, c, d) {
  d && this.Ma(d, h);
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
    b = d ? y(d.Za) ? d.Za() : new d : k
  }
  this.u = b;
  this.pb = a
}
C(S, pd);
s = S.prototype;
s.pb = k;
s.d = 0;
s.G = 39;
s.yc = 255;
s.cg = 0;
s.Va = j;
s.Y = k;
s.Mc = j;
s.xc = m;
s.Rf = k;
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
  var b = this.Rf || this.u.Ub();
  b && a.setAttribute("role", b);
  this.xc || this.u.mc(a, m);
  this.Va || this.u.od(a, m)
};
s.qa = function() {
  S.e.qa.call(this);
  this.u.ge(this);
  if(this.G & -2 && (this.Mc && Nd(this, j), this.G & 32)) {
    var a = this.Ka();
    if(a) {
      var b = this.cb || (this.cb = new Gd);
      Hd(b, a);
      md(md(md(td(this), b, "key", this.Ef), a, "focus", this.Cf), a, "blur", this.Wd)
    }
  }
};
function Nd(a, b) {
  var c = td(a), d = a.g();
  b ? (md(md(md(md(c, d, "mouseover", a.ae), d, "mousedown", a.Zd), d, "mouseup", a.be), d, "mouseout", a.$d), E && md(c, d, "dblclick", a.Yd)) : (nd(nd(nd(nd(c, d, "mouseover", a.ae), d, "mousedown", a.Zd), d, "mouseup", a.be), d, "mouseout", a.$d), E && nd(c, d, "dblclick", a.Yd))
}
s.sb = function() {
  S.e.sb.call(this);
  this.cb && this.cb.detach();
  this.Va && this.isEnabled() && this.u.Eb(this, m)
};
s.c = function() {
  S.e.c.call(this);
  this.cb && (this.cb.b(), delete this.cb);
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
s.mc = function(a) {
  this.xc = a;
  var b = this.g();
  b && this.u.mc(b, a)
};
s.od = function(a, b) {
  if(b || this.Va != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.g();
    c && this.u.od(c, a);
    this.isEnabled() && this.u.Eb(this, a);
    this.Va = a;
    return j
  }
  return m
};
s.isEnabled = function() {
  return!(this.d & 1)
};
s.nc = function(a) {
  var b = this.getParent();
  if((!b || "function" != typeof b.isEnabled || b.isEnabled()) && Pd(this, 1, !a)) {
    a || (this.setActive(m), Qd(this, m)), this.Va && this.u.Eb(this, a), this.L(1, !a)
  }
};
function Qd(a, b) {
  Pd(a, 2, b) && a.L(2, b)
}
s.ie = function() {
  return!!(this.d & 4)
};
s.setActive = function(a) {
  Pd(this, 4, a) && this.L(4, a)
};
s.L = function(a, b) {
  this.G & a && b != !!(this.d & a) && (this.u.L(this, a, b), this.d = b ? this.d | a : this.d & ~a)
};
function T(a, b) {
  return!!(a.yc & b) && !!(a.G & b)
}
function Pd(a, b, c) {
  return!!(a.G & b) && !!(a.d & b) != c && (!(a.cg & b) || a.dispatchEvent(rd(b, c))) && !a.ea
}
s.ae = function(a) {
  (!a.relatedTarget || !ad(this.g(), a.relatedTarget)) && (this.dispatchEvent("enter") && this.isEnabled() && T(this, 2)) && Qd(this, j)
};
s.$d = function(a) {
  if((!a.relatedTarget || !ad(this.g(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    T(this, 4) && this.setActive(m), T(this, 2) && Qd(this, m)
  }
};
s.Zd = function(a) {
  if(this.isEnabled() && (T(this, 2) && Qd(this, j), ac(a) && (!F || !Ka || !a.ctrlKey))) {
    T(this, 4) && this.setActive(j), this.u.ke(this) && this.Ka().focus()
  }
  !this.xc && (ac(a) && (!F || !Ka || !a.ctrlKey)) && a.preventDefault()
};
s.be = function(a) {
  this.isEnabled() && (T(this, 2) && Qd(this, j), this.ie() && (this.Ab(a) && T(this, 4)) && this.setActive(m))
};
s.Yd = function(a) {
  this.isEnabled() && this.Ab(a)
};
s.Ab = function(a) {
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
s.Cf = function() {
  T(this, 32) && Pd(this, 32, j) && this.L(32, j)
};
s.Wd = function() {
  T(this, 4) && this.setActive(m);
  T(this, 32) && Pd(this, 32, m) && this.L(32, m)
};
s.Ef = function(a) {
  return this.Va && this.isEnabled() && this.Lc(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
s.Lc = function(a) {
  return 13 == a.keyCode && this.Ab(a)
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
s.Ub = r("button");
s.N = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : Sd.e.N.call(this, a, b, c)
};
s.n = function(a) {
  var b = Sd.e.n.call(this, a), c = a.Wb();
  c && this.nd(b, c);
  (c = a.Xb()) && this.oc(b, c);
  a.G & 16 && this.N(b, 16, !!(a.d & 16));
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
s.sa = r("goog-button");
function Td() {
}
C(Td, Sd);
ea(Td);
s = Td.prototype;
s.Ub = function() {
};
s.n = function(a) {
  a.U && m != a.Mc && Nd(a, m);
  a.Mc = m;
  a.yc &= -256;
  a.U && a.d & 32 && e(Error("Component already rendered"));
  a.d & 32 && a.L(32, m);
  a.G &= -33;
  return a.Ya().n("button", {"class":yd(this, a).join(" "), disabled:!a.isEnabled(), title:a.Wb() || "", value:a.Xb() || ""}, Od(a) || "")
};
s.ge = function(a) {
  md(td(a), a.g(), "click", a.Ab)
};
s.mc = da;
s.lb = da;
s.ke = function(a) {
  return a.isEnabled()
};
s.Eb = da;
s.L = function(a, b, c) {
  Td.e.L.call(this, a, b, c);
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
function Ud(a, b, c) {
  S.call(this, a, b || Td.Za(), c)
}
C(Ud, S);
s = Ud.prototype;
s.Xb = o("Ze");
s.oc = function(a) {
  this.Ze = a;
  this.u.oc(this.g(), a)
};
s.Wb = o("We");
s.nd = function(a) {
  this.We = a;
  this.u.nd(this.g(), a)
};
s.c = function() {
  Ud.e.c.call(this);
  delete this.Ze;
  delete this.We
};
s.qa = function() {
  Ud.e.qa.call(this);
  if(this.G & 32) {
    var a = this.Ka();
    a && md(td(this), a, "keyup", this.Lc)
  }
};
s.Lc = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Ab(a) : 32 == a.keyCode
};
Bd("goog-button", function() {
  return new Ud(k)
});
function Vd() {
}
C(Vd, Sd);
ea(Vd);
Vd.prototype.n = function(a) {
  var b = {"class":"goog-inline-block " + yd(this, a).join(" "), title:a.Wb() || ""}, b = a.Ya().n("div", b, Wd(this, a.pb, a.Ya()));
  this.kd(a, b);
  return b
};
Vd.prototype.Ub = r("button");
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
  Ud.call(this, a, b || Vd.Za(), c)
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
  this.Wa = a;
  this.Sa = b
}
he.prototype.Q = function(a) {
  return a instanceof he && this.Wa == a.Wa && this.Sa.join(",") == a.Sa
};
he.prototype.F = function(a, b) {
  a.push("new SACK(", "" + this.Wa, ", ");
  P(this.Sa, a, b);
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
  for(var f = g.length, i = 1;i < f;i++) {
    ne(d, g[i])
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
  a && this.wc(a)
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
s.wc = function(a) {
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
        if("function" == typeof c.Nb) {
          a = c.Nb(a)
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
      }catch(i) {
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
Fe.prototype.Xf = 0;
Fe.prototype.Jc = k;
Fe.prototype.Ic = k;
var Ge = 0;
Fe.prototype.reset = function(a, b, c, d, g) {
  this.Xf = "number" == typeof g ? g : Ge++;
  this.Ve = d || B();
  this.V = a;
  this.ve = b;
  this.re = c;
  delete this.Jc;
  delete this.Ic
};
Fe.prototype.kb = aa("V");
function He(a) {
  this.Nf = a
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
    a = this.Bf(a, b, c);
    b = "log:" + a.ve;
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
s.Bf = function(a, b, c) {
  var d = new Fe(a, "" + b, this.Nf);
  if(c) {
    d.Jc = c;
    var g;
    var f = arguments.callee.caller;
    try {
      var i;
      var l = ca("window.location.href");
      if(v(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var n, p, w = m;
        try {
          n = c.lineNumber || c.vh || "Not available"
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
      g = "Message: " + D(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + D(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + D(Be(f) + "-> ")
    }catch(A) {
      g = "Exception trying to expose exception! You win, we lose. " + A
    }
    d.Ic = g
  }
  return d
};
function U(a, b) {
  a.log(Ke, b, h)
}
function V(a, b, c) {
  a.log(Le, b, c)
}
s.info = function(a, b) {
  this.log(Me, a, b)
};
function W(a, b) {
  a.log(Oe, b, h)
}
function X(a, b) {
  a.log(Pe, b, h)
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
  this.yf = a;
  this.Hc = new kd(this);
  this.Sb = new J
}
C(Ze, pd);
s = Ze.prototype;
s.a = Y("goog.ui.media.FlashObject");
s.og = "window";
s.Fd = "#000000";
s.ef = "sameDomain";
function $e(a, b, c) {
  a.Ad = v(b) ? b : Math.round(b) + "px";
  a.Nc = v(c) ? c : Math.round(c) + "px";
  a.g() && (b = a.g() ? a.g().firstChild : k, c = a.Ad, a = a.Nc, c instanceof Nc ? (a = c.height, c = c.width) : a == h && e(Error("missing height argument")), b.style.width = id(c), b.style.height = id(a))
}
s.qa = function() {
  Ze.e.qa.call(this);
  var a = this.g(), b;
  b = E ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = E ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = qa(c, this.og), d = this.Sb.Z(), g = this.Sb.D(), f = [], i = 0;i < d.length;i++) {
    f.push(encodeURIComponent("" + d[i]) + "=" + encodeURIComponent("" + g[i]))
  }
  b = qa(b, sd(this), sd(this), "goog-ui-media-flash-object", D(this.yf), D(f.join("&")), this.Fd, this.ef, c);
  a.innerHTML = b;
  this.Ad && this.Nc && $e(this, this.Ad, this.Nc);
  md(this.Hc, this.g(), $a(Ub), Xb)
};
s.n = function() {
  this.Ke != k && !(0 <= za(ye, this.Ke)) && (V(this.a, "Required flash version not found:" + this.Ke), e(Error("Method not supported")));
  var a = this.Ya().createElement("div");
  a.className = "goog-ui-media-flash";
  this.q = a
};
s.c = function() {
  Ze.e.c.call(this);
  this.Sb = k;
  this.Hc.b();
  this.Hc = k
};
function af(a) {
  H.call(this, a)
}
C(af, H);
af.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function bf(a, b) {
  this.$ = "_" + Zd();
  this.sc = a;
  this.za = b;
  this.Fa = a.Fa
}
C(bf, M);
s = bf.prototype;
s.Pa = j;
s.Ob = m;
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
        "close" == b ? (a.Pa = m, a.b()) : "ioerror" == b ? (a.Pa = m, b = a.za, V(b.a, "onioerror: " + Q(c)), ff(b.C, m), a.b()) : "securityerror" == b ? (a.Pa = m, b = a.za, V(b.a, "onsecurityerror: " + Q(c)), ff(b.C, m), a.b()) : e(Error("bad event: " + b))
      }
    }
  }
}
s.Cc = function(a, b) {
  try {
    var c = this.Fa.CallFunction(oe("__FC_connect", this.$, a, b, "<int32/>\n"))
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
    var b = this.Fa.CallFunction(oe("__FC_writeFrames", this.$, a))
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
  bf.e.c.call(this);
  var a = this.Fa;
  delete this.Fa;
  if(this.Pa) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(oe("__FC_close", this.$)))
    }catch(b) {
      U(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Ob = j
    }
  }
  if(this.Ob) {
    a = this.za, V(a.a, "oncrash"), ff(a.C, j)
  }else {
    this.za.onclose()
  }
  delete this.za;
  delete this.sc.ab[this.$]
};
function gf(a, b) {
  this.p = a;
  this.Fa = b;
  this.ab = {};
  this.Bc = "__FST_" + Zd();
  t[this.Bc] = z(this.sf, this);
  var c = b.CallFunction(oe("__FC_setCallbackFunc", this.Bc));
  '"OK"' != c && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
C(gf, M);
s = gf.prototype;
s.a = Y("cw.net.FlashSocketTracker");
s.F = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  P(this.ab, a, b);
  a.push(">")
};
s.Ec = function(a) {
  a = new bf(this, a);
  return this.ab[a.$] = a
};
s.qf = function(a, b, c, d) {
  var g = this.ab[a];
  g ? "frames" == b && d ? (cf(g, "ioerror", "FlashConnector hadError while handling data."), g.b()) : cf(g, b, c) : V(this.a, "Cannot dispatch because we have no instance: " + Q([a, b, c, d]))
};
s.sf = function(a, b, c, d) {
  try {
    var g = this.p;
    g.Qb.push([this.qf, this, [a, b, c, d]]);
    g.vd == k && (g.vd = g.B.setTimeout(g.hf, 0))
  }catch(f) {
    t.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
s.c = function() {
  gf.e.c.call(this);
  for(var a = $a(this.ab);a.length;) {
    a.pop().b()
  }
  delete this.ab;
  delete this.Fa;
  t[this.Bc] = h
};
function hf(a) {
  this.C = a;
  this.ob = []
}
C(hf, M);
s = hf.prototype;
s.a = Y("cw.net.FlashSocketConduit");
s.Jb = function(a) {
  this.ob ? (X(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.ob.push.apply(this.ob, a)) : (X(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.pc.Jb(a))
};
s.Cc = function(a, b) {
  this.pc.Cc(a, b)
};
s.onconnect = function() {
  this.a.info("onconnect");
  df(this.C);
  var a = this.ob;
  this.ob = k;
  a.length && (X(this.a, "onconnect: Writing " + a.length + " buffered frame(s)."), this.pc.Jb(a))
};
s.onclose = function() {
  this.a.info("onclose");
  ff(this.C, m)
};
s.c = function() {
  this.a.info("in disposeInternal.");
  hf.e.c.call(this);
  this.pc.b();
  delete this.C
};
var jf = [];
function kf() {
  var a = new pc;
  jf.push(a);
  return a
}
function lf(a) {
  var b = jf;
  jf = [];
  eb(b, function(b) {
    b.X(a)
  });
  return k
}
function mf(a) {
  var b = jf;
  jf = [];
  eb(b, function(b) {
    b.Xa(a)
  });
  return k
}
;var de = Math.pow(2, 53);
var nf = {cf:r("<cw.eq.Wildcard>")};
function of(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function pf(a, b, c) {
  var d = fa(a), g = fa(b);
  if(a == nf || b == nf) {
    return j
  }
  if(a != k && "function" == typeof a.Q) {
    return c && c.push("running custom equals function on left object"), a.Q(b, c)
  }
  if(b != k && "function" == typeof b.Q) {
    return c && c.push("running custom equals function on right object"), b.Q(a, c)
  }
  if(of(d) || of(g)) {
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
                if(!pf(a[d], b[d], c)) {
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
          if(a.bf == Ob && b.bf == Ob) {
            a: {
              c && c.push("descending into object");
              for(var f in a) {
                if(!(f in b)) {
                  c && c.push("property " + f + " missing on right object");
                  a = m;
                  break a
                }
                if(!pf(a[f], b[f], c)) {
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
  this.Uf = a;
  this.hc = b
}
Z.prototype.Q = function(a, b) {
  return ja(a) && this.constructor == a.constructor && pf(this.hc, a.hc, b)
};
Z.prototype.F = function(a, b) {
  a.push("new ", this.Uf, "(");
  for(var c = "", d = 0;d < this.hc.length;d++) {
    a.push(c), c = ", ", P(this.hc[d], a, b)
  }
  a.push(")")
};
function $(a) {
  H.call(this, a)
}
C($, H);
$.prototype.name = "cw.net.InvalidFrame";
function qf() {
  var a = [];
  this.T(a);
  return a.join("")
}
function rf() {
}
rf.prototype.Q = function(a, b) {
  return!(a instanceof rf) ? m : pf(sf(this), sf(a), b)
};
rf.prototype.F = function(a, b) {
  a.push("<HelloFrame properties=");
  P(sf(this), a, b);
  a.push(">")
};
function sf(a) {
  return[a.ka, a.Ee, a.ee, a.Je, a.Gb, a.sd, a.we, a.ue, a.Wc, a.se, a.Ye, a.Ue, a.Ca, a.cc]
}
rf.prototype.P = qf;
rf.prototype.T = function(a) {
  var b = {};
  b.tnum = this.ka;
  b.ver = this.Ee;
  b.format = this.ee;
  b["new"] = this.Je;
  b.id = this.Gb;
  b.ming = this.sd;
  b.pad = this.we;
  b.maxb = this.ue;
  u(this.Wc) && (b.maxt = this.Wc);
  b.maxia = this.se;
  b.tcpack = this.Ye;
  b.eeds = this.Ue;
  b.sack = this.Ca instanceof he ? $d((new tf(this.Ca)).P()) : this.Ca;
  b.seenack = this.cc instanceof he ? $d((new tf(this.cc)).P()) : this.cc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(Ec(b), "H")
};
function uf(a) {
  Z.call(this, "StringFrame", [a]);
  this.ud = a
}
C(uf, Z);
uf.prototype.P = qf;
uf.prototype.T = function(a) {
  a.push(this.ud, " ")
};
function vf(a) {
  Z.call(this, "CommentFrame", [a]);
  this.mf = a
}
C(vf, Z);
vf.prototype.P = qf;
vf.prototype.T = function(a) {
  a.push(this.mf, "^")
};
function wf(a) {
  Z.call(this, "SeqNumFrame", [a]);
  this.Pe = a
}
C(wf, Z);
wf.prototype.P = qf;
wf.prototype.T = function(a) {
  a.push("" + this.Pe, "N")
};
function xf(a) {
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
function tf(a) {
  Z.call(this, "SackFrame", [a]);
  this.Ca = a
}
C(tf, Z);
tf.prototype.P = qf;
tf.prototype.T = function(a) {
  var b = this.Ca;
  a.push(b.Sa.join(","), "|", "" + b.Wa);
  a.push("A")
};
function yf(a) {
  Z.call(this, "StreamStatusFrame", [a]);
  this.ne = a
}
C(yf, Z);
yf.prototype.P = qf;
yf.prototype.T = function(a) {
  var b = this.ne;
  a.push(b.Sa.join(","), "|", "" + b.Wa);
  a.push("T")
};
function zf() {
  Z.call(this, "StreamCreatedFrame", [])
}
C(zf, Z);
zf.prototype.P = qf;
zf.prototype.T = function(a) {
  a.push("C")
};
function Af() {
  Z.call(this, "YouCloseItFrame", [])
}
C(Af, Z);
Af.prototype.P = qf;
Af.prototype.T = function(a) {
  a.push("Y")
};
function Bf(a, b) {
  Z.call(this, "ResetFrame", [a, b]);
  this.He = a;
  this.Ed = b
}
C(Bf, Z);
Bf.prototype.P = qf;
Bf.prototype.T = function(a) {
  a.push(this.He, "|", "" + Number(this.Ed), "!")
};
var Cf = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Df(a) {
  Z.call(this, "TransportKillFrame", [a]);
  this.reason = a
}
C(Df, Z);
Df.prototype.P = qf;
Df.prototype.T = function(a) {
  a.push(this.reason, "K")
};
function Ef(a) {
  a || e(new $("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new uf(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = xf($d(a)), a == k && e(new $("bad sack")), new tf(a)
  }
  if("N" == b) {
    return a = ce($d(a)), a == k && e(new $("bad seqNum")), new wf(a)
  }
  if("T" == b) {
    return a = xf($d(a)), a == k && e(new $("bad lastSackSeen")), new yf(a)
  }
  if("Y" == b) {
    return 1 != a.length && e(new $("leading garbage")), new Af
  }
  if("^" == b) {
    return new vf(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && e(new $("leading garbage")), new zf
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && e(new $("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && e(new $("bad applicationLevel")), new Bf(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = Cf[a], a == k && e(new $("unknown kill reason: " + a)), new Df(a)
  }
  e(new $("Invalid frame type " + b))
}
;function Ff(a, b, c, d) {
  this.contentWindow = a;
  this.Rb = b;
  this.td = c;
  this.Af = d
}
Ff.prototype.F = function(a, b) {
  a.push("<XDRFrame frameId=");
  P(this.Af, a, b);
  a.push(", expandedUrl=");
  P(this.Rb, a, b);
  a.push(", streams=");
  P(this.td, a, b);
  a.push(">")
};
function Gf() {
  this.frames = [];
  this.Uc = new J
}
Gf.prototype.a = Y("cw.net.XDRTracker");
function Hf(a, b) {
  for(var c = If, d = 0;d < c.frames.length;d++) {
    var g = c.frames[d], f;
    if(f = 0 == g.td.length) {
      f = g.Rb;
      var i = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      f = RegExp("^" + i + "$").test(f)
    }
    if(f) {
      return c.a.info("Giving " + Q(b) + " existing frame " + Q(g)), yc(g)
    }
  }
  d = Zd() + Zd();
  g = a.replace(/%random%/g, function() {
    return"ml" + Math.floor(Lc()) + ("" + Math.floor(Lc()))
  });
  f = t.location;
  f instanceof K || (f = Kb(f));
  g instanceof K || (g = Kb(g));
  var l = f;
  f = g;
  g = l.O();
  (i = !!f.Da) ? yb(g, f.Da) : i = !!f.Ua;
  if(i) {
    var n = f.Ua;
    L(g);
    g.Ua = n
  }else {
    i = !!f.pa
  }
  i ? zb(g, f.pa) : i = f.ib != k;
  n = f.xa;
  if(i) {
    Ab(g, f.ib)
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
  i ? Bb(g, n) : i = "" !== f.K.toString();
  i ? Cb(g, f.K.toString() ? decodeURIComponent(f.K.toString()) : "") : i = !!f.Ja;
  i && (f = f.Ja, L(g), g.Ja = f);
  g = g.toString();
  f = ("" + t.location).match(Xa)[3] || k;
  i = g.match(Xa)[3] || k;
  f == i ? (c.a.info("No need to make a real XDRFrame for " + Q(b)), c = yc(new Ff(t, g, [b], k))) : ((f = R("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new pc, c.Uc.set(d, [i, g, b]), c.a.info("Creating new XDRFrame " + Q(d) + "for " + Q(b)), c = Yc("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:g + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), f.appendChild(c), c = i);
  return c
}
Gf.prototype.qg = function(a) {
  var b = this.Uc.get(a);
  b || e(Error("Unknown frameId " + Q(a)));
  this.Uc.remove(b);
  var c = b[0], a = new Ff(R("minerva-xdrframe-" + a).contentWindow || (R("minerva-xdrframe-" + a).contentDocument || R("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (R("minerva-xdrframe-" + a).contentDocument || R("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.X(a)
};
var If = new Gf;
t.__XHRTracker_xdrFrameLoaded = z(If.qg, If);
var Jf;
Jf = m;
var Kf = Ea();
Kf && (-1 != Kf.indexOf("Firefox") || -1 != Kf.indexOf("Camino") || -1 != Kf.indexOf("iPhone") || -1 != Kf.indexOf("iPod") || -1 != Kf.indexOf("iPad") || -1 != Kf.indexOf("Android") || -1 != Kf.indexOf("Chrome") && (Jf = j));
var Lf = Jf;
function Mf(a, b, c, d, g, f) {
  pc.call(this, g, f);
  this.qe = a;
  this.Fc = [];
  this.Td = !!b;
  this.xf = !!c;
  this.nf = !!d;
  for(b = 0;b < a.length;b++) {
    vc(a[b], z(this.Xd, this, b, j), z(this.Xd, this, b, m))
  }
  0 == a.length && !this.Td && this.X(this.Fc)
}
C(Mf, pc);
Mf.prototype.ye = 0;
Mf.prototype.Xd = function(a, b, c) {
  this.ye++;
  this.Fc[a] = [b, c];
  this.ra || (this.Td && b ? this.X([a, c]) : this.xf && !b ? this.Xa(c) : this.ye == this.qe.length && this.X(this.Fc));
  this.nf && !b && (c = k);
  return c
};
Mf.prototype.Xa = function(a) {
  Mf.e.Xa.call(this, a);
  eb(this.qe, function(a) {
    a.cancel()
  })
};
function Nf(a, b) {
  this.pg = a;
  this.te = b
}
Nf.prototype.Rc = 0;
Nf.prototype.ec = 0;
Nf.prototype.Kc = m;
function Of(a) {
  var b = [];
  if(a.Kc) {
    return[b, 2]
  }
  var c = a.Rc, d = a.pg.responseText;
  for(a.Rc = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var g = d.substr(a.ec, c - a.ec), g = g.replace(/\r$/, "");
    if(g.length > a.te) {
      return a.Kc = j, [b, 2]
    }
    b.push(g);
    a.ec = c += 1
  }
  return a.Rc - a.ec - 1 > a.te ? (a.Kc = j, [b, 2]) : [b, 1]
}
;function Pf(a, b, c) {
  this.C = b;
  this.W = a;
  this.Dc = c
}
C(Pf, M);
s = Pf.prototype;
s.a = Y("cw.net.XHRMaster");
s.Aa = -1;
s.Vc = function(a, b, c) {
  this.Dc.__XHRSlave_makeRequest(this.W, a, b, c)
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
  a.ca == Qf && (b == k && (V(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Rf(a, 2E3 + 1E3 * (b / 3072)))
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
  Pf.e.c.call(this);
  delete Sf.ia[this.W];
  this.Dc.__XHRSlave_dispose(this.W);
  delete this.Dc
};
function Tf() {
  this.ia = {}
}
C(Tf, M);
s = Tf.prototype;
s.a = Y("cw.net.XHRMasterTracker");
s.Ec = function(a, b) {
  var c = "_" + Zd(), d = new Pf(c, a, b);
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
  Tf.e.c.call(this);
  for(var a = $a(this.ia);a.length;) {
    a.pop().b()
  }
  delete this.ia
};
var Sf = new Tf;
t.__XHRMaster_onframes = z(Sf.Zc, Sf);
t.__XHRMaster_oncomplete = z(Sf.Yc, Sf);
t.__XHRMaster_ongotheaders = z(Sf.$c, Sf);
t.__XHRMaster_onreadystatechange = z(Sf.ad, Sf);
function Uf(a, b, c) {
  this.aa = a;
  this.host = b;
  this.port = c
}
function Vf(a, b, c) {
  this.host = a;
  this.port = b;
  this.hg = c
}
function Wf(a, b) {
  b || (b = a);
  this.aa = a;
  this.Ea = b
}
Wf.prototype.F = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  P(this.aa, a, b);
  a.push(", secondaryUrl=");
  P(this.Ea, a, b);
  a.push(">")
};
function Xf(a, b, c, d) {
  this.aa = a;
  this.De = b;
  this.Ea = c;
  this.Oe = d;
  (!(0 == this.aa.indexOf("http://") || 0 == this.aa.indexOf("https://")) || !(0 == this.Ea.indexOf("http://") || 0 == this.Ea.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.De.location.href;
  Ya(this.aa, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Oe.location.href;
  Ya(this.Ea, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
Xf.prototype.F = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  P(this.aa, a, b);
  a.push(", secondaryUrl=");
  P(this.Ea, a, b);
  a.push(">")
};
var Yf = new vf(";)]}");
function ag() {
}
ag.prototype.Ud = r(1);
function bg(a) {
  t.setTimeout(function() {
    u(a.message) && a.stack && (a.message += "\n" + a.stack);
    e(a)
  }, 0)
}
function cg(a) {
  this.dg = a
}
cg.prototype.F = function(a, b) {
  a.push("<UserContext for ");
  P(this.dg, a, b);
  a.push(">")
};
cg.prototype.toString = function() {
  return Q(this)
};
function dg(a, b, c, d) {
  Z.call(this, "TransportInfo", [a, b, c, d]);
  this.ka = a;
  this.uh = b;
  this.xh = c;
  this.yh = d
}
C(dg, Z);
function eg(a, b, c) {
  this.t = a;
  this.eg = b ? b : new ag;
  this.p = c ? c : Bc;
  this.Hb = new ze;
  this.Gb = Zd() + Zd();
  this.ba = new ie;
  this.Pc = new ke;
  this.Ib = k;
  this.tc = [];
  this.mb = new cg(this);
  this.gf = z(this.kg, this);
  F && (this.Ib = fc(t, "load", this.Vf, m, this))
}
C(eg, M);
s = eg.prototype;
s.a = Y("cw.net.ClientStream");
s.oe = new he(-1, []);
s.pe = new he(-1, []);
s.Lf = 50;
s.Kf = 1048576;
s.cd = k;
s.bd = k;
s.dd = k;
s.ed = k;
s.onreset = k;
s.Be = k;
s.jb = k;
s.qd = m;
s.jd = m;
s.d = "1_UNSTARTED";
s.wd = -1;
s.h = k;
s.s = k;
s.Bb = k;
s.rd = 0;
s.Ce = 0;
s.Ne = 0;
s.F = function(a, b) {
  a.push("<ClientStream id=");
  P(this.Gb, a, b);
  a.push(", state=", "" + this.d);
  a.push(", primary=");
  P(this.h, a, b);
  a.push(", secondary=");
  P(this.s, a, b);
  a.push(", resetting=");
  P(this.Bb, a, b);
  a.push(">")
};
s.toString = function() {
  return Q(this)
};
function fg(a) {
  var b = [-1];
  a.h && b.push(a.h.gb);
  a.s && b.push(a.s.gb);
  return Math.max.apply(Math.max, b)
}
function gg(a) {
  if(!("3_STARTED" > a.d)) {
    hg(a);
    var b = 0 != a.ba.J.r(), c = le(a.Pc), d = !c.Q(a.pe) && !(a.h && c.Q(a.h.eb) || a.s && c.Q(a.s.eb)), g = fg(a);
    if((b = b && g < a.ba.Ia) || d) {
      var f = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.h.Ha ? (X(a.a, "tryToSend_: writing " + f + " to primary"), d && (d = a.h, c != d.eb && (!d.ja && !d.v.length && ig(d), d.v.push(new tf(c)), d.eb = c)), b && jg(a.h, a.ba, g + 1), a.h.ha()) : a.s == k ? a.qd ? (X(a.a, "tryToSend_: creating secondary to send " + f), a.s = kg(a, m, j), a.s && (b && jg(a.s, a.ba, g + 1), a.s.ha())) : (X(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.jd = j) : X(a.a, "tryToSend_: need to send " + f + ", but can't right now")
    }
  }
}
function hg(a) {
  a.jb != k && (a.p.B.clearTimeout(a.jb), a.jb = k)
}
s.kg = function() {
  this.jb = k;
  gg(this)
};
function lg(a) {
  a.jb == k && (a.jb = a.p.B.setTimeout(a.gf, 6))
}
s.Vf = function() {
  this.Ib = k;
  if(this.h && this.h.bb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.h;
    a.vc = j;
    a.b()
  }
  this.s && this.s.bb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.s, a.vc = j, a.b())
};
function mg(a, b) {
  var c;
  u(c) || (c = j);
  "3_STARTED" < a.d && e(Error("sendString: Can't send in state " + a.d));
  c && (v(b) || e(Error("sendString: not a string: " + Q(b))), /^([ -~]*)$/.test(b) || e(Error("sendString: string has illegal chars: " + Q(b))));
  a.ba.append(b);
  lg(a)
}
function kg(a, b, c) {
  var d;
  a.t instanceof Xf ? d = 1 == a.eg.Ud() ? Qf : ng : a.t instanceof Vf ? d = og : e(Error("Don't support endpoint " + Q(a.t)));
  a.wd += 1;
  b = new pg(a.p, a, a.wd, d, a.t, b);
  X(a.a, "Created: " + b.l());
  if(c) {
    if(a.dd) {
      c = new dg(b.ka, b.ma, b.Ba, b.Ha);
      try {
        a.dd.call(a.mb, c)
      }catch(g) {
        V(a.a, "ontransportcreated raised uncaught exception", g), bg(g)
      }
    }
    if(qg(a)) {
      return k
    }
  }
  a.Hb.add(b);
  return b
}
function rg(a, b, c) {
  var d = new sg(a.p, a, b, c);
  X(a.a, "Created: " + d.l() + ", delay=" + b + ", times=" + c);
  a.Hb.add(d);
  return d
}
function tg(a, b) {
  a.Hb.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  W(a.a, "Offline: " + b.l());
  var c = "4_RESETTING" == a.d && b.af;
  if(b instanceof pg && !c) {
    if(a.ed) {
      var d = new dg(b.ka, b.ma, b.Ba, b.Ha);
      try {
        a.ed.call(a.mb, d)
      }catch(g) {
        V(a.a, "ontransportdestroyed raised uncaught exception", g), bg(g)
      }
    }
    if(qg(a)) {
      return
    }
  }
  a.rd = b.ya ? a.rd + b.ya : 0;
  1 <= a.rd && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), ug(a, "stream penalty reached limit", m), a.b());
  if("3_STARTED" < a.d) {
    c ? (W(a.a, "Disposing because resettingTransport_ is done."), a.b()) : W(a.a, "Not creating a transport because ClientStream is in state " + a.d)
  }else {
    c = b instanceof sg;
    if(!c && b.vc) {
      var f = F ? Lf ? [0, 1] : [9, 20] : [0, 0], c = f[0], d = f[1];
      X(a.a, "getDelayForNextTransport_: " + Q({delay:c, times:d}))
    }else {
      if(d = b.Jd(), b == a.h ? d ? f = ++a.Ce : c || (f = a.Ce = 0) : d ? f = ++a.Ne : c || (f = a.Ne = 0), c || !f) {
        d = c = 0, X(a.a, "getDelayForNextTransport_: " + Q({count:f, delay:c, times:d}))
      }else {
        var i = 2E3 * Math.min(f, 3), l = Math.floor(4E3 * Math.random()) - 2E3, n = Math.max(0, b.Xe - b.xd), d = (c = Math.max(0, i + l - n)) ? 1 : 0;
        X(a.a, "getDelayForNextTransport_: " + Q({count:f, base:i, variance:l, oldDuration:n, delay:c, times:d}))
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
        f = fg(a);
        a.h = kg(a, j, j);
        if(!a.h) {
          return
        }
        jg(a.h, a.ba, f + 1)
      }
      a.h.ha()
    }else {
      b == a.s && (a.s = k, c ? (a.s = rg(a, f, c), a.s.ha()) : gg(a))
    }
  }
}
function ug(a, b, c) {
  if(a.onreset) {
    try {
      a.onreset.call(a.mb, b, c)
    }catch(d) {
      V(a.a, "onreset raised uncaught exception", d), bg(d)
    }
  }
}
s.reset = function(a) {
  "3_STARTED" < this.d && e(Error("reset: Can't send reset in state " + this.d));
  hg(this);
  0 != this.ba.J.r() && V(this.a, "reset: strings in send queue will never be sent: " + Q(this.ba));
  this.d = "4_RESETTING";
  this.h && this.h.Ha ? (this.a.info("reset: Sending ResetFrame over existing primary."), vg(this.h, a), this.h.ha()) : (this.h && (W(this.a, "reset: Disposing primary before sending ResetFrame."), this.h.b()), this.s && (W(this.a, "reset: Disposing secondary before sending ResetFrame."), this.s.b()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Bb = kg(this, m, m), vg(this.Bb, a), this.Bb.ha());
  ug(this, a, j)
};
function qg(a) {
  return"4_RESETTING" == a.d || a.ea
}
s.Qd = function(a) {
  U(this.a, "Failed to start " + Q(this) + "; error was " + Q(a.message));
  this.b();
  return k
};
s.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  "1_UNSTARTED" != this.d && e(Error("ClientStream.start: " + Q(this) + " already started"));
  this.bd && this.bd(this);
  this.d = "2_WAITING_RESOURCES";
  if(this.t instanceof Wf) {
    var a = Hf(this.t.aa, this), b = Hf(this.t.Ea, this), a = new Mf([a, b], m, j);
    vc(a, function(a) {
      return gb(a, function(a) {
        return a[1]
      })
    }, k, h);
    b = z(this.vf, this);
    vc(a, b, k, h);
    b = z(this.Qd, this);
    vc(a, k, b, h)
  }else {
    if(this.t instanceof Uf) {
      if(ge) {
        this.Sd()
      }else {
        a = this.p;
        b = this.t.aa;
        if(jf.length) {
          a = kf()
        }else {
          b = new Ze(b + "FlashConnector.swf?cb=4bdfc178fc0e508c0cd5efc3fdb09920");
          b.Fd = "#777777";
          $e(b, 300, 30);
          var c = R("minerva-elements");
          c || e(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
          var d = R("minerva-elements-FlashConnectorSwf");
          d || (d = Yc("div", {id:"minerva-elements-FlashConnectorSwf"}), c.appendChild(d));
          var g = a.B, f;
          var a = d, i, l = function() {
            i && delete t.__loadFlashObject_callbacks[i]
          };
          if(Ia && !G("1.8.1.20")) {
            f = zc(new af("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
          }else {
            if(0 <= za(ye, "9")) {
              var n;
              i = "_" + Zd();
              var p = new pc(l);
              t.__loadFlashObject_callbacks[i] = function() {
                g.setTimeout(function() {
                  l();
                  p.X(R(n))
                }, 0)
              };
              b.Sb.set("onloadcallback", '__loadFlashObject_callbacks["' + i + '"]()');
              n = sd(b);
              ud(b, a);
              f = p
            }else {
              f = zc(new af("Need Flash Player 9+; had " + (ye ? ye : "none")))
            }
          }
          var w = g.setTimeout(function() {
            f.cancel()
          }, 8E3), a = function(a) {
            g.clearTimeout(w);
            return a
          };
          vc(f, a, a, h);
          fe = f;
          a = kf();
          vc(fe, lf, mf)
        }
        var q = this;
        vc(a, function(a) {
          ge || (ge = new gf(q.p, a));
          return k
        }, k, h);
        b = z(this.Sd, this);
        vc(a, b, k, h);
        b = z(this.Qd, this);
        vc(a, k, b, h)
      }
    }else {
      wg(this)
    }
  }
};
s.vf = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Rb, g = a[1].Rb;
  this.tc.push(a[0]);
  this.tc.push(a[1]);
  this.t = new Xf(d, b, g, c);
  wg(this)
};
s.Sd = function() {
  this.t = new Vf(this.t.host, this.t.port, ge);
  wg(this)
};
function wg(a) {
  a.d = "3_STARTED";
  a.h = kg(a, j, j);
  a.h && (jg(a.h, a.ba, k), a.h.ha())
}
s.c = function() {
  this.a.info(Q(this) + " in disposeInternal.");
  hg(this);
  this.d = "5_DISCONNECTED";
  for(var a = this.Hb.D(), b = 0;b < a.length;b++) {
    a[b].b()
  }
  for(a = 0;a < this.tc.length;a++) {
    kb(this.tc[a].td, this)
  }
  F && this.Ib && (ic(this.Ib), this.Ib = k);
  this.Be && this.Be.call(this.mb);
  delete this.Hb;
  delete this.h;
  delete this.s;
  delete this.Bb;
  delete this.mb;
  eg.e.c.call(this)
};
var Qf = 1, ng = 2, og = 3;
function pg(a, b, c, d, g, f) {
  this.p = a;
  this.A = b;
  this.ka = c;
  this.ca = d;
  this.t = g;
  this.v = [];
  this.ma = f;
  this.Ha = !this.bb();
  this.Ba = this.ca != Qf;
  this.ff = z(this.fg, this)
}
C(pg, M);
s = pg.prototype;
s.a = Y("cw.net.ClientTransport");
s.k = k;
s.xd = k;
s.Xe = k;
s.ic = k;
s.ja = m;
s.qc = m;
s.eb = k;
s.Tb = 0;
s.gb = -1;
s.gc = -1;
s.af = m;
s.vc = m;
s.ya = 0;
s.ub = m;
s.F = function(a) {
  a.push("<ClientTransport #", "" + this.ka, ", becomePrimary=", "" + this.ma, ">")
};
s.l = function() {
  return(this.ma ? "Prim. T#" : "Sec. T#") + this.ka
};
s.Jd = function() {
  return!(!this.ub && this.Tb)
};
s.bb = function() {
  return this.ca == Qf || this.ca == ng
};
function xg(a, b) {
  I.sort.call(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  } || ob);
  a: {
    var c = a.A, d = !a.Ba, g, f = c.Pc;
    g = c.Lf;
    for(var i = c.Kf, l = [], n = m, p = 0, w = b.length;p < w;p++) {
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
        if(c.cd) {
          try {
            c.cd.call(c.mb, l)
          }catch(Dc) {
            V(c.a, "onstring raised uncaught exception", Dc), bg(Dc)
          }
        }
        if(qg(c)) {
          break a
        }
      }
    }
    d || lg(c);
    !qg(c) && g && (U(a.a, a.l() + "'s peer caused rwin overflow."), a.b())
  }
}
function yg(a, b, c) {
  try {
    var d = Ef(b);
    a.Tb += 1;
    W(a.a, a.l() + " RECV " + Q(d));
    var g;
    1 == a.Tb && !d.Q(Yf) && a.bb() ? (V(a.a, a.l() + " is closing soon because got bad preamble: " + Q(d)), g = j) : g = m;
    if(g) {
      return j
    }
    if(d instanceof uf) {
      if(!/^([ -~]*)$/.test(d.ud)) {
        return a.ub = j
      }
      a.gc += 1;
      c.push([a.gc, d.ud])
    }else {
      if(d instanceof tf) {
        var f = a.A, i = d.Ca;
        f.oe = i;
        var l = f.ba, n = i.Wa, c = m;
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
        if(d instanceof wf) {
          a.gc = d.Pe - 1
        }else {
          if(d instanceof yf) {
            a.A.pe = d.ne
          }else {
            if(d instanceof Af) {
              return X(a.a, a.l() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof Df) {
              return a.ub = j, "stream_attach_failure" == d.reason ? a.ya += 1 : "acked_unsent_strings" == d.reason && (a.ya += 0.5), X(a.a, a.l() + " is closing soon because got " + Q(d)), j
            }
            if(!(d instanceof vf)) {
              if(d instanceof zf) {
                var A = a.A, Dc = !a.Ba;
                X(A.a, "Stream is now confirmed to exist at server.");
                A.qd = j;
                A.jd && !Dc && (A.jd = m, gg(A))
              }else {
                if(c.length) {
                  xg(a, c);
                  if(!ga(c)) {
                    for(var Yd = c.length - 1;0 <= Yd;Yd--) {
                      delete c[Yd]
                    }
                  }
                  c.length = 0
                }
                if(d instanceof Bf) {
                  var Zf = a.A;
                  ug(Zf, d.He, d.Ed);
                  Zf.b();
                  return j
                }
                e(Error(a.l() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch($f) {
    return $f instanceof $ || e($f), V(a.a, a.l() + " is closing soon because got InvalidFrame: " + Q(b)), a.ub = j
  }
  return m
}
function ef(a, b) {
  a.qc = j;
  try {
    for(var c = m, d = [], g = 0, f = b.length;g < f;g++) {
      if(a.ea) {
        a.a.info(a.l() + " returning from loop because we're disposed.");
        return
      }
      if(c = yg(a, b[g], d)) {
        break
      }
    }
    d.length && xg(a, d);
    a.qc = m;
    a.v.length && a.ha();
    c && (X(a.a, a.l() + " closeSoon is true.  Frames were: " + Q(b)), a.b())
  }finally {
    a.qc = m
  }
}
s.fg = function() {
  V(this.a, this.l() + " timed out due to lack of connection or no data being received.");
  this.b()
};
function zg(a) {
  a.ic != k && (a.p.B.clearTimeout(a.ic), a.ic = k)
}
function Rf(a, b) {
  zg(a);
  b = Math.round(b);
  a.ic = a.p.B.setTimeout(a.ff, b);
  W(a.a, a.l() + "'s receive timeout set to " + b + " ms.")
}
function df(a) {
  a.ca != Qf && (a.ca == og || a.ca == ng ? Rf(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ca)))
}
function ig(a) {
  var b = new rf;
  b.ka = a.ka;
  b.Ee = 2;
  b.ee = 2;
  a.A.qd || (b.Je = j);
  b.Gb = a.A.Gb;
  b.sd = a.Ba;
  b.sd && (b.we = 4096);
  b.ue = 3E5;
  b.se = a.Ba ? Math.floor(10) : 0;
  b.Ye = m;
  a.ma && (b.Ue = k, b.Wc = Math.floor((a.Ba ? 358E4 : 25E3) / 1E3));
  b.Ca = le(a.A.Pc);
  b.cc = a.A.oe;
  a.v.push(b);
  a.eb = b.Ca
}
function ff(a, b) {
  b && (a.ya += 0.5);
  a.b()
}
s.ha = function() {
  this.ja && !this.Ha && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.qc) {
    X(this.a, this.l() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.ja;
    this.ja = j;
    !a && !this.v.length && ig(this);
    for(a = 0;a < this.v.length;a++) {
      W(this.a, this.l() + " SEND " + Q(this.v[a]))
    }
    if(this.bb()) {
      for(var a = [], b = 0, c = this.v.length;b < c;b++) {
        this.v[b].T(a), a.push("\n")
      }
      this.v = [];
      a = a.join("");
      b = this.ma ? this.t.aa : this.t.Ea;
      this.k = Sf.Ec(this, this.ma ? this.t.De : this.t.Oe);
      this.xd = this.p.B === oc ? B() : this.p.B.getTime();
      this.k.Vc(b, "POST", a);
      Rf(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Ba ? 0 : this.ma ? 25E3 : 0))
    }else {
      if(this.ca == og) {
        a = [];
        b = 0;
        for(c = this.v.length;b < c;b++) {
          a.push(this.v[b].P())
        }
        this.v = [];
        this.k ? this.k.Jb(a) : (b = this.t, this.k = new hf(this), this.k.pc = b.hg.Ec(this.k), this.xd = this.p.B === oc ? B() : this.p.B.getTime(), this.k.Cc(b.host, b.port), this.k.ea || (this.k.Jb(a), this.k.ea || Rf(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.ca))
      }
    }
  }
};
function jg(a, b, c) {
  !a.ja && !a.v.length && ig(a);
  for(var d = Math.max(c, a.gb + 1), g = je(b), c = [], f = 0;f < g.length;f++) {
    var i = g[f];
    (d == k || i >= d) && c.push([i, b.J.get(i)[0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    f = c[b], g = f[0], f = f[1], (-1 == a.gb || a.gb + 1 != g) && a.v.push(new wf(g)), a.v.push(new uf(f)), a.gb = g
  }
}
s.c = function() {
  this.a.info(this.l() + " in disposeInternal.");
  pg.e.c.call(this);
  this.Xe = this.p.B === oc ? B() : this.p.B.getTime();
  this.v = [];
  zg(this);
  this.k && this.k.b();
  var a = this.A;
  this.A = k;
  tg(a, this)
};
function vg(a, b) {
  !a.ja && !a.v.length && ig(a);
  a.v.push(new Bf(b, j));
  a.af = j
}
function sg(a, b, c, d) {
  this.p = a;
  this.A = b;
  this.Pd = c;
  this.Ld = d
}
C(sg, M);
s = sg.prototype;
s.ja = m;
s.Ha = m;
s.Yb = k;
s.eb = k;
s.a = Y("cw.net.DoNothingTransport");
function Ag(a) {
  a.Yb = a.p.B.setTimeout(function() {
    a.Yb = k;
    a.Ld--;
    a.Ld ? Ag(a) : a.b()
  }, a.Pd)
}
s.ha = function() {
  this.ja && !this.Ha && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.ja = j;
  Ag(this)
};
s.F = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.Pd, ">")
};
s.bb = r(m);
s.l = r("Wast. T");
s.Jd = r(m);
s.c = function() {
  this.a.info(this.l() + " in disposeInternal.");
  sg.e.c.call(this);
  this.Yb != k && this.p.B.clearTimeout(this.Yb);
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
Eg = {X:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, Ge:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
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
Gg.prototype.Kb = k;
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
function Kg(a) {
  if(!a.fe && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.fe = d
      }catch(g) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.fe
}
Hg = new Ig;
function Mg(a) {
  this.headers = new J;
  this.nb = a || k
}
C(Mg, nc);
Mg.prototype.a = Y("goog.net.XhrIo");
var Ng = /^https?$/i;
s = Mg.prototype;
s.la = m;
s.i = k;
s.uc = k;
s.Tc = "";
s.me = "";
s.wb = 0;
s.xb = "";
s.Gc = m;
s.$b = m;
s.Oc = m;
s.La = m;
s.rc = 0;
s.Ta = k;
s.Me = "";
s.ng = m;
s.send = function(a, b, c, d) {
  this.i && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Tc = a;
  this.xb = "";
  this.wb = 0;
  this.me = b;
  this.Gc = m;
  this.la = j;
  this.i = this.nb ? Jg(this.nb) : Jg(Hg);
  this.uc = this.nb ? this.nb.Kb || (this.nb.Kb = Lg(this.nb)) : Hg.Kb || (Hg.Kb = Lg(Hg));
  this.i.onreadystatechange = z(this.Ae, this);
  try {
    W(this.a, Og(this, "Opening Xhr")), this.Oc = j, this.i.open(b, a, j), this.Oc = m
  }catch(g) {
    W(this.a, Og(this, "Error opening Xhr: " + g.message));
    Pg(this, g);
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
  this.Me && (this.i.responseType = this.Me);
  "withCredentials" in this.i && (this.i.withCredentials = this.ng);
  try {
    this.Ta && (oc.clearTimeout(this.Ta), this.Ta = k), 0 < this.rc && (W(this.a, Og(this, "Will abort after " + this.rc + "ms if incomplete")), this.Ta = oc.setTimeout(z(this.gg, this), this.rc)), W(this.a, Og(this, "Sending request")), this.$b = j, this.i.send(a), this.$b = m
  }catch(i) {
    W(this.a, Og(this, "Send error: " + i.message)), Pg(this, i)
  }
};
s.gg = function() {
  "undefined" != typeof ba && this.i && (this.xb = "Timed out after " + this.rc + "ms, aborting", this.wb = 8, W(this.a, Og(this, this.xb)), this.dispatchEvent("timeout"), this.abort(8))
};
function Pg(a, b) {
  a.la = m;
  a.i && (a.La = j, a.i.abort(), a.La = m);
  a.xb = b;
  a.wb = 5;
  Qg(a);
  Rg(a)
}
function Qg(a) {
  a.Gc || (a.Gc = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
s.abort = function(a) {
  this.i && this.la && (W(this.a, Og(this, "Aborting")), this.la = m, this.La = j, this.i.abort(), this.La = m, this.wb = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Rg(this))
};
s.c = function() {
  this.i && (this.la && (this.la = m, this.La = j, this.i.abort(), this.La = m), Rg(this, j));
  Mg.e.c.call(this)
};
s.Ae = function() {
  !this.Oc && !this.$b && !this.La ? this.Pf() : Sg(this)
};
s.Pf = function() {
  Sg(this)
};
function Sg(a) {
  if(a.la && "undefined" != typeof ba) {
    if(a.uc[1] && 4 == a.ta() && 2 == Tg(a)) {
      W(a.a, Og(a, "Local request error detected and ignored"))
    }else {
      if(a.$b && 4 == a.ta()) {
        oc.setTimeout(z(a.Ae, a), 0)
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
                  var i = self.location.protocol, f = i.substr(0, i.length - 1)
                }
                g = !Ng.test(f ? f.toLowerCase() : "")
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
              a.xb = l + " [" + Tg(a) + "]";
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
    var c = a.i, d = a.uc[0] ? da : k;
    a.i = k;
    a.uc = k;
    a.Ta && (oc.clearTimeout(a.Ta), a.Ta = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(g) {
      U(a.a, "Problem encountered resetting onreadystatechange: " + g.message)
    }
  }
}
s.ie = function() {
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
  return this.i && 4 == this.ta() ? this.i.getResponseHeader(a) : h
};
function Og(a, b) {
  return b + " [" + a.me + " " + a.Tc + " " + Tg(a) + "]"
}
;var Ug = !(E || F && !G("420+"));
function Vg(a, b) {
  this.sc = a;
  this.W = b
}
C(Vg, M);
s = Vg.prototype;
s.k = k;
s.Aa = -1;
s.Vd = m;
s.de = "Content-Length Server Date Expires Keep-Alive Content-Type Transfer-Encoding Cache-Control".split(" ");
function Wg(a) {
  var b = Of(a.Nd), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.W, c, b), 1 != b && a.b()) : a.b()
}
s.Gf = function() {
  Wg(this);
  if(!this.ea) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.W);
    this.b()
  }
};
s.Tf = function() {
  var a = t.parent;
  if(a) {
    this.Aa = this.k.ta();
    if(2 <= this.Aa && !this.Vd) {
      for(var b = new J, c = this.de.length;c--;) {
        var d = this.de[c];
        try {
          b.set(d, this.k.i.getResponseHeader(d))
        }catch(g) {
        }
      }
      if(b.r() && (this.Vd = j, a.__XHRMaster_ongotheaders(this.W, xb(b)), this.ea)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.W, this.Aa);
    Ug && 3 == this.Aa && Wg(this)
  }else {
    this.b()
  }
};
s.Vc = function(a, b, c) {
  this.k = new Mg;
  O(this.k, "readystatechange", z(this.Tf, this));
  O(this.k, "complete", z(this.Gf, this));
  this.k.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Nd = new Nf(this.k.i, 1048576)
};
s.c = function() {
  Vg.e.c.call(this);
  delete this.Nd;
  this.k && this.k.b();
  delete this.sc.Fb[this.W];
  delete this.sc
};
function Xg() {
  this.Fb = {}
}
C(Xg, M);
Xg.prototype.Jf = function(a, b, c, d) {
  var g = new Vg(this, a);
  this.Fb[a] = g;
  g.Vc(b, c, d)
};
Xg.prototype.rf = function(a) {
  (a = this.Fb[a]) && a.b()
};
Xg.prototype.c = function() {
  Xg.e.c.call(this);
  for(var a = $a(this.Fb);a.length;) {
    a.pop().b()
  }
  delete this.Fb
};
var Yg = new Xg;
t.__XHRSlave_makeRequest = z(Yg.Jf, Yg);
t.__XHRSlave_dispose = z(Yg.rf, Yg);
var Zg = Y("cw.net.demo");
function $g() {
}
$g.prototype.Ud = function() {
  return Boolean(Number((new K(document.location)).K.get("httpStreaming", "0"))) ? 2 : 1
};
function ah() {
  this.Ie = B()
}
var bh = new ah;
ah.prototype.set = aa("Ie");
ah.prototype.reset = function() {
  this.set(B())
};
ah.prototype.get = o("Ie");
function ch(a) {
  this.gd = a || "";
  this.bg = bh
}
ch.prototype.Yf = j;
ch.prototype.$f = j;
ch.prototype.Zf = j;
ch.prototype.Qe = m;
function dh(a) {
  return 10 > a ? "0" + a : "" + a
}
function eh(a, b) {
  var c = (a.Ve - b) / 1E3, d = c.toFixed(3), g = 0;
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
fh.prototype.Qe = j;
function gh(a) {
  this.Xc = a || 100;
  this.na = []
}
s = gh.prototype;
s.yb = 0;
s.add = function(a) {
  this.na[this.yb] = a;
  this.yb = (this.yb + 1) % this.Xc
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
function hh(a, b) {
  b >= a.na.length && e(Error("Out of bounds exception"));
  return a.na.length < a.Xc ? b : (a.yb + Number(b)) % a.Xc
}
;function ih(a, b) {
  this.ua = a || "";
  this.gd = b || "";
  this.hb = [];
  this.lc = new gh(jh);
  this.Sf = z(this.df, this);
  this.zf = new fh(this.gd);
  this.wf = {};
  if(j != this.je) {
    this.je = j;
    var c = Ye(), d = this.Sf;
    c.vb || (c.vb = []);
    c.vb.push(d)
  }
  this.rb = "1" == kh(this.ua, "enabled");
  t.setInterval(z(this.Wf, this), 7500)
}
var jh = 500;
s = ih.prototype;
s.$e = "LOGGING";
s.tf = m;
s.w = k;
s.Bd = m;
s.je = m;
s.Gd = k;
s.Sc = B();
s.Ma = function() {
  this.rb && lh(this)
};
s.isEnabled = o("rb");
s.nc = function(a) {
  (this.rb = a) && lh(this);
  mh(this, "enabled", a ? "1" : "0")
};
function nh(a) {
  return!!a.w && !a.w.closed
}
s.kf = function() {
  this.lc.clear();
  nh(this) && this.Dd()
};
s.df = function(a) {
  if(!this.wf[a.re]) {
    var b = this.zf, c;
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
    if(b.Yf) {
      var g = new Date(a.Ve);
      d.push("[", dh(g.getFullYear() - 2E3) + dh(g.getMonth() + 1) + dh(g.getDate()) + " " + dh(g.getHours()) + ":" + dh(g.getMinutes()) + ":" + dh(g.getSeconds()) + "." + dh(Math.floor(g.getMilliseconds() / 10)), "] ")
    }
    b.$f && d.push("[", ya(eh(a, b.bg.get())), "s] ");
    b.Zf && d.push("[", D(a.re), "] ");
    d.push('<span class="', c, '">', sa(ya(D(a.ve))));
    b.Qe && a.Jc && d.push("<br>", sa(ya(a.Ic || "")));
    d.push("</span><br>");
    b = d.join("");
    this.rb ? (lh(this), this.lc.add(b), oh(this, b)) : this.lc.add(b);
    this.tf && a.V.value >= Ke.value && this.nc(j)
  }
};
function oh(a, b) {
  a.hb.push(b);
  t.clearTimeout(a.Gd);
  750 < B() - a.Sc ? a.Cd() : a.Gd = t.setTimeout(z(a.Cd, a), 250)
}
s.Cd = function() {
  this.Sc = B();
  if(nh(this)) {
    var a = this.w.document.body, a = a && 100 >= a.scrollHeight - (a.scrollTop + a.clientHeight);
    this.w.document.write(this.hb.join(""));
    this.hb.length = 0;
    a && this.w.scrollTo(0, 1E6)
  }
};
function ph(a) {
  for(var b = a.lc.D(), c = 0;c < b.length;c++) {
    oh(a, b[c])
  }
}
function lh(a) {
  if(!nh(a) && !a.Bd) {
    var b = kh(a.ua, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), g = Number(b[2]), b = Number(b[3]);
    a.Bd = j;
    a.w = window.open("", E ? a.ua.replace(/[\s\-\.\,]/g, "_") : a.ua, "width=" + g + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    !a.w && !a.ag && (alert("Logger popup was blocked"), a.ag = j);
    a.Bd = m;
    a.w && a.Dd()
  }
}
s.Vb = r("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
s.Dd = function() {
  nh(this) || (this.w.document.open(), oh(this, "<style>" + this.Vb() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.$e + "<br><small>Logger: " + this.ua + "</small></div><hr>"), ph(this))
};
function mh(a, b, c) {
  b += a.ua;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(B() + 2592E6)).toUTCString()
}
function kh(a, b, c) {
  var a = b + a, b = "" + document.cookie, d = b.indexOf(a + "=");
  return-1 != d ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, -1 == c ? b.length : c))) : c || ""
}
s.Wf = function() {
  nh(this) && mh(this, "dbg", (this.w.screenX || this.w.screenLeft || 0) + "," + (this.w.screenY || this.w.screenTop || 0) + "," + (this.w.outerWidth || 800) + "," + (this.w.outerHeight || 500))
};
function qh(a, b) {
  if(rh) {
    var c = sh(), d;
    for(d in c) {
      var c = d.replace("fancywindow.sel.", ""), c = Y(c), g = c.V, f = window.localStorage.getItem(d).toString();
      (!g || g.toString() != f) && c.kb(Te(f))
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
s.Cd = function() {
  this.Sc = B();
  if(nh(this)) {
    for(var a = this.H.g("log"), b = 100 >= a.scrollHeight - (a.scrollTop + a.offsetHeight), c = 0;c < this.hb.length;c++) {
      var d = this.H.n("div", "logmsg");
      d.innerHTML = this.hb[c];
      a.appendChild(d)
    }
    this.hb.length = 0;
    this.Le();
    b && (a.scrollTop = a.scrollHeight)
  }
};
s.Dd = function() {
  if(nh(this)) {
    var a = this.w.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.ua + "</title><style>" + this.Vb() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.ua + "</b></p><p>" + this.$e + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (E ? a.body : this.w).onresize = z(this.Le, this);
    this.H = new Vc(a);
    this.H.g("openbutton").onclick = z(this.Qf, this);
    this.H.g("closebutton").onclick = z(this.lf, this);
    this.H.g("clearbutton").onclick = z(this.kf, this);
    this.H.g("exitbutton").onclick = z(this.uf, this);
    ph(this)
  }
};
s.Qf = function() {
  var a = this.H.g("optionsarea");
  a.innerHTML = "";
  for(var b = uh(), c = this.H, d = 0;d < b.length;d++) {
    var g = Y(b[d]), g = c.n("div", {}, vh(this, "sel" + b[d], g.V ? g.V.name : "INHERIT"), c.n("span", {}, b[d] || "(root)"));
    a.appendChild(g)
  }
  this.H.g("options").style.display = "block";
  return m
};
function vh(a, b, c) {
  for(var a = a.H, b = a.n("select", {id:b}), d = 0;d < Re.length;d++) {
    var g = Re[d], f = a.n("option", {}, g.name);
    c == g.name && (f.selected = j);
    b.appendChild(f)
  }
  b.appendChild(a.n("option", {selected:"INHERIT" == c}, "INHERIT"));
  return b
}
s.lf = function() {
  this.H.g("options").style.display = "none";
  for(var a = uh(), b = this.H, c = 0;c < a.length;c++) {
    var d = Y(a[c]), g = b.g("sel" + a[c]), g = g.options[g.selectedIndex].text;
    "INHERIT" == g ? d.kb(k) : d.kb(Te(g))
  }
  if(rh) {
    a = uh();
    b = sh();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], g = Y(a[c]).V, d in b ? g ? window.localStorage.getItem(d) != g.name && window.localStorage.setItem(d, g.name) : window.localStorage.removeItem(d) : g && window.localStorage.setItem(d, g.name)
    }
  }
  return m
};
s.Le = function() {
  var a = this.H, b = a.g("log"), c = a.g("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.fa.body.offsetHeight - c.offsetHeight - (E ? 4 : 0) + "px"
};
s.uf = function() {
  this.nc(m);
  this.w && this.w.close()
};
s.Vb = function() {
  return qh.e.Vb.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function sh() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != k && 0 == d.lastIndexOf("fancywindow.sel.", 0) && (a[d] = j)
  }
  return a
}
function uh() {
  var a = ab(Ve);
  a.sort();
  return a
}
;var wh, xh = Y("ljstream.logger");
window.onerror = function(a, b, c) {
  U(xh, "window.onerror: message: " + Q(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function yh() {
}
yh.prototype.Se = function(a) {
  this.A = a;
  mg(this.A, "subprotocol:ljstream");
  zh(this)
};
yh.prototype.Re = function(a, b) {
  xh.info("streamReset: reasonString=" + Q(a) + ", applicationLevel=" + b);
  Ah("Disconnected from server.  Try reloading this page.");
  Bh = k
};
function zh(a) {
  xh.info("Sending preferences to server");
  mg(a.A, Ec(["SetPreferences", {include_russian_posts:R("include_russian_posts").checked}]))
}
yh.prototype.Te = function(a) {
  var a = Fg(a), b = a[1];
  if("NewPost" == a[0]) {
    var a = b.title, c = b.url, b = b.body;
    (a = ra(a)) || (a = "[No title]");
    var b = D(b), d;
    d = d || {};
    var g = [], f, i;
    for(i in Eg) {
      u(d[i]) || (d[i] = Eg[i])
    }
    for(;i = Bg.exec(b);) {
      i = i[0];
      var l = Bg.lastIndex, n = l - i.length;
      if(!/[\/:]/.test(b.charAt(n - 1))) {
        do {
          var p = i, w = i.substr(-1), q = Dg[w];
          if(q && (q = i.match(RegExp("\\" + q + "(?!$)", "g")), w = i.match(RegExp("\\" + w, "g")), (q ? q.length : 0) < (w ? w.length : 0))) {
            i = i.substr(0, i.length - 1), l--
          }
          d.Ge && (i = i.replace(d.Ge, function(a) {
            l -= a.length;
            return""
          }))
        }while(i.length && i !== p);
        p = i;
        Cg.test(p) || (p = (-1 !== p.indexOf("@") ? !p.indexOf("mailto:") ? "" : "mailto:" : !p.indexOf("irc.") ? "irc://" : !p.indexOf("ftp.") ? "ftp://" : "http://") + p);
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
    Ch(a)
  }
};
yh.prototype.reset = function(a) {
  xh.info("resetting with reason: " + a);
  this.A.reset(a)
};
var Bh = k, Dh = new Ac(t.window);
function Ah(a) {
  a = Yc("span", {"class":"important-message"}, a);
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
var hd = new Vc, Hh = 0;
function Ch(a) {
  a = Yc("div", {"class":"row-" + (0 == Hh % 2 ? "even" : "odd")}, Yc("nobr", {}, a));
  R("ljstream-container-inner").appendChild(a);
  Hh += 1;
  if(wh) {
    for(var b = a, a = b.offsetTop, c = b.offsetHeight;b.offsetParent;) {
      b = b.offsetParent, a += b.offsetTop
    }
    var d = document, b = !F && "CSS1Compat" == d.compatMode ? d.documentElement : d.body, d = d.parentWindow || d.defaultView;
    a + c <= (new Mc(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop)).y + gd().height || window.scrollBy(0, Math.round(gd().height / 2) + 80)
  }
}
function Ih() {
  Ye().kb(Qe);
  if("1" == (new K(document.location)).K.get("logging")) {
    var a = new qh("main");
    a.nc(j);
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
  a = new $g;
  Bh = new yh;
  Gh();
  var c = (new K(document.location)).K, b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    V(Zg, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new K(document.location);
  b ? b = new Uf("/_minerva/", c.pa, t.__demo_mainSocketPort) : (d ? (b = t.__demo_shared_domain, v(b) || e(Error("domain was " + Q(b) + "; expected a string.")), c = c.O(), zb(c, "_____random_____." + b)) : c = c.O(), Bb(c, "/_minerva/"), Cb(c, "", h), b = new Wf(c.toString().replace("_____random_____", "%random%")));
  a = new eg(b, a, Dh);
  b = Bh;
  u(b.Se) || e(Error("Protocol is missing required method streamStarted"));
  u(b.Re) || e(Error("Protocol is missing required method streamReset"));
  u(b.Te) || e(Error("Protocol is missing required method stringReceived"));
  a.bd = z(b.Se, b);
  a.onreset = z(b.Re, b);
  a.cd = z(b.Te, b);
  a.dd = u(b.ig) ? z(b.ig, b) : k;
  a.ed = u(b.jg) ? z(b.jg, b) : k;
  a.start()
}
var Jh = ["__ljstream_init"], Kh = t;
!(Jh[0] in Kh) && Kh.execScript && Kh.execScript("var " + Jh[0]);
for(var Lh;Jh.length && (Lh = Jh.shift());) {
  !Jh.length && u(Ih) ? Kh[Lh] = Ih : Kh = Kh[Lh] ? Kh[Lh] : Kh[Lh] = {}
}
;
})();
