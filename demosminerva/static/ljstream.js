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
function p(a) {
  return function() {
    return this[a]
  }
}
function s(a) {
  return function() {
    return a
  }
}
var t;
var ca = ca || {}, u = this;
function da(a) {
  a = a.split(".");
  for(var b = u, c;c = a.shift();) {
    if(b[c] != k) {
      b = b[c]
    }else {
      return k
    }
  }
  return b
}
function v() {
}
function ea(a) {
  a.Za = function() {
    return a.je ? a.je : a.je = new a
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
function w(a) {
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
function A(a) {
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
function E(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.g = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function qa(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$");
    a = a.replace(/\%s/, d)
  }
  return a
}
function ra(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function sa(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function F(a) {
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
    var l = d[i] || "", n = g[i] || "", q = RegExp("(\\d*)(\\D*)", "g"), x = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = q.exec(l) || ["", "", ""], z = x.exec(n) || ["", "", ""];
      if(0 == r[0].length && 0 == z[0].length) {
        break
      }
      c = ((0 == r[1].length ? 0 : parseInt(r[1], 10)) < (0 == z[1].length ? 0 : parseInt(z[1], 10)) ? -1 : (0 == r[1].length ? 0 : parseInt(r[1], 10)) > (0 == z[1].length ? 0 : parseInt(z[1], 10)) ? 1 : 0) || ((0 == r[2].length) < (0 == z[2].length) ? -1 : (0 == r[2].length) > (0 == z[2].length) ? 1 : 0) || (r[2] < z[2] ? -1 : r[2] > z[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
}
;var Aa, Ba, Ca, Da;
function Ea() {
  return u.navigator ? u.navigator.userAgent : k
}
Da = Ca = Ba = Aa = m;
var Fa;
if(Fa = Ea()) {
  var Ga = u.navigator;
  Aa = 0 == Fa.indexOf("Opera");
  Ba = !Aa && -1 != Fa.indexOf("MSIE");
  Ca = !Aa && -1 != Fa.indexOf("WebKit");
  Da = !Aa && !Ca && "Gecko" == Ga.product
}
var Ha = Aa, G = Ba, Ia = Da, H = Ca, Ja = u.navigator, Ka = -1 != (Ja && Ja.platform || "").indexOf("Mac"), La;
a: {
  var Ma = "", Na;
  if(Ha && u.opera) {
    var Oa = u.opera.version, Ma = "function" == typeof Oa ? Oa() : Oa
  }else {
    if(Ia ? Na = /rv\:([^\);]+)(\)|;)/ : G ? Na = /MSIE\s+([^\);]+)(\)|;)/ : H && (Na = /WebKit\/(\S+)/), Na) {
      var Pa = Na.exec(Ea()), Ma = Pa ? Pa[1] : ""
    }
  }
  if(G) {
    var Qa, Ra = u.document;
    Qa = Ra ? Ra.documentMode : h;
    if(Qa > parseFloat(Ma)) {
      La = String(Qa);
      break a
    }
  }
  La = Ma
}
var Sa = {};
function I(a) {
  return Sa[a] || (Sa[a] = 0 <= za(La, a))
}
var Ta = {};
function Ua() {
  return Ta[9] || (Ta[9] = G && !!document.documentMode && 9 <= document.documentMode)
}
;function J(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, J) : this.stack = Error().stack || "";
  a && (this.message = String(a))
}
E(J, Error);
J.prototype.name = "CustomError";
function Va(a, b) {
  b.unshift(a);
  J.call(this, qa.apply(k, b));
  b.shift();
  this.Bh = a
}
E(Va, J);
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
;var K = Array.prototype, db = K.indexOf ? function(a, b, c) {
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
}, eb = K.forEach ? function(a, b, c) {
  K.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = y(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in g && b.call(c, g[f], f, a)
  }
}, fb = K.filter ? function(a, b, c) {
  return K.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = [], f = 0, i = y(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in i) {
      var n = i[l];
      b.call(c, n, l, a) && (g[f++] = n)
    }
  }
  return g
}, gb = K.map ? function(a, b, c) {
  return K.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = Array(d), f = y(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in f && (g[i] = b.call(c, f[i], i, a))
  }
  return g
}, hb = K.some ? function(a, b, c) {
  return K.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = y(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in g && b.call(c, g[f], f, a)) {
      return j
    }
  }
  return m
}, ib = K.every ? function(a, b, c) {
  return K.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, g = y(a) ? a.split("") : a, f = 0;f < d;f++) {
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
  0 <= c && K.splice.call(a, c, 1)
}
function lb(a) {
  return K.concat.apply(K, arguments)
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
  return 2 >= arguments.length ? K.slice.call(a, b) : K.slice.call(a, b, c)
}
function ob(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function pb(a) {
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
function qb(a) {
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
  return $a(a)
}
function rb(a) {
  if("function" == typeof a.Z) {
    return a.Z()
  }
  if("function" != typeof a.D) {
    if(ha(a) || y(a)) {
      var b = [];
      a = a.length;
      for(var c = 0;c < a;c++) {
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
    if(ha(a) || y(a)) {
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
  if(ha(a) || y(a)) {
    return ib(a, b, h)
  }
  for(var c = rb(a), d = qb(a), g = d.length, f = 0;f < g;f++) {
    if(!b.call(h, d[f], c && c[f], a)) {
      return m
    }
  }
  return j
}
;function ub(a, b) {
  this.o = {};
  this.j = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && e(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.yc(a)
  }
}
t = ub.prototype;
t.d = 0;
t.Ad = 0;
t.r = p("d");
t.D = function() {
  vb(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.o[this.j[b]])
  }
  return a
};
t.Z = function() {
  vb(this);
  return this.j.concat()
};
t.da = function(a) {
  return wb(this.o, a)
};
t.Nb = function(a) {
  for(var b = 0;b < this.j.length;b++) {
    var c = this.j[b];
    if(wb(this.o, c) && this.o[c] == a) {
      return j
    }
  }
  return m
};
t.Q = function(a, b) {
  if(this === a) {
    return j
  }
  if(this.d != a.r()) {
    return m
  }
  var c = b || xb;
  vb(this);
  for(var d, g = 0;d = this.j[g];g++) {
    if(!c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function xb(a, b) {
  return a === b
}
t.Na = function() {
  return 0 == this.d
};
t.clear = function() {
  this.o = {};
  this.Ad = this.d = this.j.length = 0
};
t.remove = function(a) {
  return wb(this.o, a) ? (delete this.o[a], this.d--, this.Ad++, this.j.length > 2 * this.d && vb(this), j) : m
};
function vb(a) {
  if(a.d != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      wb(a.o, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.d != a.j.length) {
    for(var g = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], wb(g, d) || (a.j[c++] = d, g[d] = 1), b++
    }
    a.j.length = c
  }
}
t.get = function(a, b) {
  return wb(this.o, a) ? this.o[a] : b
};
t.set = function(a, b) {
  wb(this.o, a) || (this.d++, this.j.push(a), this.Ad++);
  this.o[a] = b
};
t.yc = function(a) {
  var b;
  a instanceof ub ? (b = a.Z(), a = a.D()) : (b = ab(a), a = $a(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
t.O = function() {
  return new ub(this)
};
function yb(a) {
  vb(a);
  for(var b = {}, c = 0;c < a.j.length;c++) {
    var d = a.j[c];
    b[d] = a.o[d]
  }
  return b
}
function wb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function zb(a, b) {
  var c;
  if(a instanceof zb) {
    this.R = w(b) ? b : a.R, Ab(this, a.Da), c = a.Ua, Bb(this), this.Ua = c, Cb(this, a.pa), Db(this, a.ib), Eb(this, a.xa), Fb(this, a.K.O()), c = a.Ja, Bb(this), this.Ja = c
  }else {
    if(a && (c = String(a).match(Xa))) {
      this.R = !!b;
      Ab(this, c[1] || "", j);
      var d = c[2] || "";
      Bb(this);
      this.Ua = d ? decodeURIComponent(d) : "";
      Cb(this, c[3] || "", j);
      Db(this, c[4]);
      Eb(this, c[5] || "", j);
      Fb(this, c[6] || "", j);
      c = c[7] || "";
      Bb(this);
      this.Ja = c ? decodeURIComponent(c) : ""
    }else {
      this.R = !!b, this.K = new Gb(k, 0, this.R)
    }
  }
}
t = zb.prototype;
t.Da = "";
t.Ua = "";
t.pa = "";
t.ib = k;
t.xa = "";
t.Ja = "";
t.Kf = m;
t.R = m;
t.toString = function() {
  var a = [], b = this.Da;
  b && a.push(Hb(b, Ib), ":");
  if(b = this.pa) {
    a.push("//");
    var c = this.Ua;
    c && a.push(Hb(c, Ib), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.ib;
    b != k && a.push(":", String(b))
  }
  if(b = this.xa) {
    this.pa && "/" != b.charAt(0) && a.push("/"), a.push(Hb(b, "/" == b.charAt(0) ? Jb : Kb))
  }
  (b = this.K.toString()) && a.push("?", b);
  (b = this.Ja) && a.push("#", Hb(b, Lb));
  return a.join("")
};
t.O = function() {
  return new zb(this)
};
function Ab(a, b, c) {
  Bb(a);
  a.Da = c ? b ? decodeURIComponent(b) : "" : b;
  a.Da && (a.Da = a.Da.replace(/:$/, ""))
}
function Cb(a, b, c) {
  Bb(a);
  a.pa = c ? b ? decodeURIComponent(b) : "" : b
}
function Db(a, b) {
  Bb(a);
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.ib = b) : a.ib = k
}
function Eb(a, b, c) {
  Bb(a);
  a.xa = c ? b ? decodeURIComponent(b) : "" : b
}
function Fb(a, b, c) {
  Bb(a);
  b instanceof Gb ? (a.K = b, a.K.md(a.R)) : (c || (b = Hb(b, Mb)), a.K = new Gb(b, 0, a.R))
}
function Bb(a) {
  a.Kf && e(Error("Tried to modify a read-only Uri"))
}
t.md = function(a) {
  this.R = a;
  this.K && this.K.md(a);
  return this
};
function Nb(a) {
  return a instanceof zb ? a.O() : new zb(a, h)
}
function Hb(a, b) {
  return y(a) ? encodeURI(a).replace(b, Ob) : k
}
function Ob(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Ib = /[#\/\?@]/g, Kb = /[\#\?:]/g, Jb = /[\#\?]/g, Mb = /[\#\?@]/g, Lb = /#/g;
function Gb(a, b, c) {
  this.H = a || k;
  this.R = !!c
}
function Pb(a) {
  if(!a.m && (a.m = new ub, a.d = 0, a.H)) {
    for(var b = a.H.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), g = k, f = k;
      0 <= d ? (g = b[c].substring(0, d), f = b[c].substring(d + 1)) : g = b[c];
      g = decodeURIComponent(g.replace(/\+/g, " "));
      g = Qb(a, g);
      a.add(g, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
    }
  }
}
t = Gb.prototype;
t.m = k;
t.d = k;
t.r = function() {
  Pb(this);
  return this.d
};
t.add = function(a, b) {
  Pb(this);
  this.H = k;
  a = Qb(this, a);
  var c = this.m.get(a);
  c || this.m.set(a, c = []);
  c.push(b);
  this.d++;
  return this
};
t.remove = function(a) {
  Pb(this);
  a = Qb(this, a);
  return this.m.da(a) ? (this.H = k, this.d -= this.m.get(a).length, this.m.remove(a)) : m
};
t.clear = function() {
  this.m = this.H = k;
  this.d = 0
};
t.Na = function() {
  Pb(this);
  return 0 == this.d
};
t.da = function(a) {
  Pb(this);
  a = Qb(this, a);
  return this.m.da(a)
};
t.Nb = function(a) {
  var b = this.D();
  return jb(b, a)
};
t.Z = function() {
  Pb(this);
  for(var a = this.m.D(), b = this.m.Z(), c = [], d = 0;d < b.length;d++) {
    for(var g = a[d], f = 0;f < g.length;f++) {
      c.push(b[d])
    }
  }
  return c
};
t.D = function(a) {
  Pb(this);
  var b = [];
  if(a) {
    this.da(a) && (b = lb(b, this.m.get(Qb(this, a))))
  }else {
    a = this.m.D();
    for(var c = 0;c < a.length;c++) {
      b = lb(b, a[c])
    }
  }
  return b
};
t.set = function(a, b) {
  Pb(this);
  this.H = k;
  a = Qb(this, a);
  this.da(a) && (this.d -= this.m.get(a).length);
  this.m.set(a, [b]);
  this.d++;
  return this
};
t.get = function(a, b) {
  var c = a ? this.D(a) : [];
  return 0 < c.length ? String(c[0]) : b
};
t.toString = function() {
  if(this.H) {
    return this.H
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
  return this.H = a.join("&")
};
t.O = function() {
  var a = new Gb;
  a.H = this.H;
  this.m && (a.m = this.m.O(), a.d = this.d);
  return a
};
function Qb(a, b) {
  var c = String(b);
  a.R && (c = c.toLowerCase());
  return c
}
t.md = function(a) {
  a && !this.R && (Pb(this), this.H = k, sb(this.m, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.H = k, this.m.set(Qb(this, d), mb(a)), this.d += a.length))
  }, this));
  this.R = a
};
var Rb;
Rb = s(j);
function Sb() {
}
var Tb = 0;
t = Sb.prototype;
t.key = 0;
t.Ra = m;
t.Dc = m;
t.Ma = function(a, b, c, d, g, f) {
  A(a) ? this.ne = j : a && a.handleEvent && A(a.handleEvent) ? this.ne = m : e(Error("Invalid listener argument"));
  this.fb = a;
  this.He = b;
  this.src = c;
  this.type = d;
  this.capture = !!g;
  this.$b = f;
  this.Dc = m;
  this.key = ++Tb;
  this.Ra = m
};
t.handleEvent = function(a) {
  return this.ne ? this.fb.call(this.$b || this.src, a) : this.fb.handleEvent.call(this.fb, a)
};
var Ub = !G || Ua(), Vb = !G || Ua(), Wb = G && !I("9");
!H || I("528");
Ia && I("1.9b") || G && I("8") || Ha && I("9.5") || H && I("528");
Ia && !I("8") || G && I("9");
var Xb = {zg:"click", Eg:"dblclick", $g:"mousedown", eh:"mouseup", dh:"mouseover", bh:"mouseout", ah:"mousemove", qh:"selectstart", Vg:"keypress", Ug:"keydown", Wg:"keyup", xg:"blur", Og:"focus", Fg:"deactivate", Pg:G ? "focusin" : "DOMFocusIn", Qg:G ? "focusout" : "DOMFocusOut", yg:"change", ph:"select", rh:"submit", Tg:"input", lh:"propertychange", Lg:"dragstart", Gg:"drag", Ig:"dragenter", Kg:"dragover", Jg:"dragleave", Mg:"drop", Hg:"dragend", vh:"touchstart", uh:"touchmove", th:"touchend", sh:"touchcancel", 
wg:"beforeunload", Bg:"contextmenu", Ng:"error", Sg:"help", Xg:"load", Yg:"losecapture", mh:"readystatechange", nh:"resize", oh:"scroll", xh:"unload", Rg:"hashchange", hh:"pagehide", ih:"pageshow", kh:"popstate", Cg:"copy", jh:"paste", Dg:"cut", tg:"beforecopy", ug:"beforecut", vg:"beforepaste", gh:"online", fh:"offline", Zg:"message", Ag:"connect", wh:H ? "webkitTransitionEnd" : Ha ? "oTransitionEnd" : "transitionend"};
function L() {
  0 != Yb && (this.yh = Error().stack, Zb[ka(this)] = this)
}
var Yb = 0, Zb = {};
L.prototype.ea = m;
L.prototype.b = function() {
  if(!this.ea && (this.ea = j, this.c(), 0 != Yb)) {
    var a = ka(this);
    delete Zb[a]
  }
};
L.prototype.c = function() {
  this.rf && $b.apply(k, this.rf);
  if(this.Be) {
    for(;this.Be.length;) {
      this.Be.shift()()
    }
  }
};
function $b(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? $b.apply(k, d) : d && "function" == typeof d.b && d.b()
  }
}
;function ac(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
t = ac.prototype;
t.c = aa();
t.b = aa();
t.Qa = m;
t.defaultPrevented = m;
t.mc = j;
t.stopPropagation = function() {
  this.Qa = j
};
t.preventDefault = function() {
  this.defaultPrevented = j;
  this.mc = m
};
function bc(a) {
  a.stopPropagation()
}
;function cc(a) {
  cc[" "](a);
  return a
}
cc[" "] = v;
function dc(a, b) {
  a && this.Ma(a, b)
}
E(dc, ac);
var ec = [1, 4, 2];
t = dc.prototype;
t.target = k;
t.relatedTarget = k;
t.offsetX = 0;
t.offsetY = 0;
t.clientX = 0;
t.clientY = 0;
t.screenX = 0;
t.screenY = 0;
t.button = 0;
t.keyCode = 0;
t.charCode = 0;
t.ctrlKey = m;
t.altKey = m;
t.shiftKey = m;
t.metaKey = m;
t.hd = m;
t.ra = k;
t.Ma = function(a, b) {
  var c = this.type = a.type;
  ac.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Ia) {
      var g;
      a: {
        try {
          cc(d.nodeName);
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
  this.hd = Ka ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ra = a;
  a.defaultPrevented && this.preventDefault();
  delete this.Qa
};
function fc(a) {
  return Ub ? 0 == a.ra.button : "click" == a.type ? j : !!(a.ra.button & ec[0])
}
t.stopPropagation = function() {
  dc.g.stopPropagation.call(this);
  this.ra.stopPropagation ? this.ra.stopPropagation() : this.ra.cancelBubble = j
};
t.preventDefault = function() {
  dc.g.preventDefault.call(this);
  var a = this.ra;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, Wb) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
t.c = aa();
var gc = {}, M = {}, hc = {}, ic = {};
function N(a, b, c, d, g) {
  if(b) {
    if(ga(b)) {
      for(var f = 0;f < b.length;f++) {
        N(a, b[f], c, d, g)
      }
      return k
    }
    d = !!d;
    var i = M;
    b in i || (i[b] = {d:0, S:0});
    i = i[b];
    d in i || (i[d] = {d:0, S:0}, i.d++);
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
      n = i[l] = [], i.d++
    }
    var q = jc, x = Vb ? function(a) {
      return q.call(x.src, x.key, a)
    } : function(a) {
      a = q.call(x.src, x.key, a);
      if(!a) {
        return a
      }
    }, f = x;
    f.src = a;
    i = new Sb;
    i.Ma(c, f, a, b, d, g);
    c = i.key;
    f.key = c;
    n.push(i);
    gc[c] = i;
    hc[l] || (hc[l] = []);
    hc[l].push(i);
    a.addEventListener ? (a == u || !a.Nd) && a.addEventListener(b, f, d) : a.attachEvent(b in ic ? ic[b] : ic[b] = "on" + b, f);
    return c
  }
  e(Error("Invalid event type"))
}
function kc(a, b, c, d, g) {
  if(ga(b)) {
    for(var f = 0;f < b.length;f++) {
      kc(a, b[f], c, d, g)
    }
    return k
  }
  a = N(a, b, c, d, g);
  gc[a].Dc = j;
  return a
}
function lc(a, b, c, d, g) {
  if(ga(b)) {
    for(var f = 0;f < b.length;f++) {
      lc(a, b[f], c, d, g)
    }
  }else {
    if(d = !!d, a = mc(a, b, d)) {
      for(f = 0;f < a.length;f++) {
        if(a[f].fb == c && a[f].capture == d && a[f].$b == g) {
          nc(a[f].key);
          break
        }
      }
    }
  }
}
function nc(a) {
  if(!gc[a]) {
    return m
  }
  var b = gc[a];
  if(b.Ra) {
    return m
  }
  var c = b.src, d = b.type, g = b.He, f = b.capture;
  c.removeEventListener ? (c == u || !c.Nd) && c.removeEventListener(d, g, f) : c.detachEvent && c.detachEvent(d in ic ? ic[d] : ic[d] = "on" + d, g);
  c = ka(c);
  hc[c] && (g = hc[c], kb(g, b), 0 == g.length && delete hc[c]);
  b.Ra = j;
  if(b = M[d][f][c]) {
    b.ze = j, oc(d, f, c, b)
  }
  delete gc[a];
  return j
}
function oc(a, b, c, d) {
  if(!d.fc && d.ze) {
    for(var g = 0, f = 0;g < d.length;g++) {
      d[g].Ra ? d[g].He.src = k : (g != f && (d[f] = d[g]), f++)
    }
    d.length = f;
    d.ze = m;
    0 == f && (delete M[a][b][c], M[a][b].d--, 0 == M[a][b].d && (delete M[a][b], M[a].d--), 0 == M[a].d && delete M[a])
  }
}
function mc(a, b, c) {
  var d = M;
  return b in d && (d = d[b], c in d && (d = d[c], a = ka(a), d[a])) ? d[a] : k
}
function pc(a, b, c, d, g) {
  var f = 1;
  b = ka(b);
  if(a[b]) {
    a.S--;
    a = a[b];
    a.fc ? a.fc++ : a.fc = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var n = a[l];
        n && !n.Ra && (f &= qc(n, g) !== m)
      }
    }finally {
      a.fc--, oc(c, d, b, a)
    }
  }
  return Boolean(f)
}
function qc(a, b) {
  a.Dc && nc(a.key);
  return a.handleEvent(b)
}
function jc(a, b) {
  if(!gc[a]) {
    return j
  }
  var c = gc[a], d = c.type, g = M;
  if(!(d in g)) {
    return j
  }
  var g = g[d], f, i;
  if(!Vb) {
    f = b || da("window.event");
    var l = j in g, n = m in g;
    if(l) {
      if(0 > f.keyCode || f.returnValue != h) {
        return j
      }
      a: {
        var q = m;
        if(0 == f.keyCode) {
          try {
            f.keyCode = -1;
            break a
          }catch(x) {
            q = j
          }
        }
        if(q || f.returnValue == h) {
          f.returnValue = j
        }
      }
    }
    q = new dc;
    q.Ma(f, this);
    f = j;
    try {
      if(l) {
        for(var r = [], z = q.currentTarget;z;z = z.parentNode) {
          r.push(z)
        }
        i = g[j];
        i.S = i.d;
        for(var D = r.length - 1;!q.Qa && 0 <= D && i.S;D--) {
          q.currentTarget = r[D], f &= pc(i, r[D], d, j, q)
        }
        if(n) {
          i = g[m];
          i.S = i.d;
          for(D = 0;!q.Qa && D < r.length && i.S;D++) {
            q.currentTarget = r[D], f &= pc(i, r[D], d, m, q)
          }
        }
      }else {
        f = qc(c, q)
      }
    }finally {
      r && (r.length = 0)
    }
    return f
  }
  d = new dc(b, this);
  return f = qc(c, d)
}
var rc = 0;
function sc() {
  L.call(this)
}
E(sc, L);
t = sc.prototype;
t.Nd = j;
t.hc = k;
t.nd = ba("hc");
t.addEventListener = function(a, b, c, d) {
  N(this, a, b, c, d)
};
t.removeEventListener = function(a, b, c, d) {
  lc(this, a, b, c, d)
};
t.dispatchEvent = function(a) {
  var b = a.type || a, c = M;
  if(b in c) {
    if(y(a)) {
      a = new ac(a, this)
    }else {
      if(a instanceof ac) {
        a.target = a.target || this
      }else {
        var d = a;
        a = new ac(b, this);
        cb(a, d)
      }
    }
    var d = 1, g, c = c[b], b = j in c, f;
    if(b) {
      g = [];
      for(f = this;f;f = f.hc) {
        g.push(f)
      }
      f = c[j];
      f.S = f.d;
      for(var i = g.length - 1;!a.Qa && 0 <= i && f.S;i--) {
        a.currentTarget = g[i], d &= pc(f, g[i], a.type, j, a) && a.mc != m
      }
    }
    if(m in c) {
      if(f = c[m], f.S = f.d, b) {
        for(i = 0;!a.Qa && i < g.length && f.S;i++) {
          a.currentTarget = g[i], d &= pc(f, g[i], a.type, m, a) && a.mc != m
        }
      }else {
        for(g = this;!a.Qa && g && f.S;g = g.hc) {
          a.currentTarget = g, d &= pc(f, g, a.type, m, a) && a.mc != m
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
t.c = function() {
  sc.g.c.call(this);
  var a, b = 0, c = a == k;
  a = !!a;
  if(this == k) {
    Za(hc, function(d) {
      for(var f = d.length - 1;0 <= f;f--) {
        var g = d[f];
        if(c || a == g.capture) {
          nc(g.key), b++
        }
      }
    })
  }else {
    var d = ka(this);
    if(hc[d]) {
      for(var d = hc[d], g = d.length - 1;0 <= g;g--) {
        var f = d[g];
        if(c || a == f.capture) {
          nc(f.key), b++
        }
      }
    }
  }
  this.hc = k
};
var tc = u.window;
rc++;
rc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function uc(a, b) {
  this.Lb = [];
  this.Id = a;
  this.Pd = b || k
}
t = uc.prototype;
t.sa = m;
t.tb = m;
t.zb = 0;
t.qd = m;
t.lf = m;
t.Cc = 0;
t.cancel = function(a) {
  if(this.sa) {
    this.Cb instanceof uc && this.Cb.cancel()
  }else {
    if(this.z) {
      var b = this.z;
      delete this.z;
      a ? b.cancel(a) : (b.Cc--, 0 >= b.Cc && b.cancel())
    }
    this.Id ? this.Id.call(this.Pd, this) : this.qd = j;
    this.sa || this.Xa(new vc(this))
  }
};
t.Ld = function(a, b) {
  wc(this, a, b);
  this.zb--;
  0 == this.zb && this.sa && xc(this)
};
function wc(a, b, c) {
  a.sa = j;
  a.Cb = c;
  a.tb = !b;
  xc(a)
}
function yc(a) {
  a.sa && (a.qd || e(new zc(a)), a.qd = m)
}
t.X = function(a) {
  yc(this);
  wc(this, j, a)
};
t.Xa = function(a) {
  yc(this);
  wc(this, m, a)
};
function Ac(a, b, c, d) {
  a.Lb.push([b, c, d]);
  a.sa && xc(a)
}
function Bc(a) {
  return hb(a.Lb, function(a) {
    return A(a[1])
  })
}
function xc(a) {
  a.zd && (a.sa && Bc(a)) && (u.clearTimeout(a.zd), delete a.zd);
  a.z && (a.z.Cc--, delete a.z);
  for(var b = a.Cb, c = m, d = m;a.Lb.length && 0 == a.zb;) {
    var g = a.Lb.shift(), f = g[0], i = g[1], g = g[2];
    if(f = a.tb ? i : f) {
      try {
        var l = f.call(g || a.Pd, b);
        w(l) && (a.tb = a.tb && (l == b || l instanceof Error), a.Cb = b = l);
        b instanceof uc && (d = j, a.zb++)
      }catch(n) {
        b = n, a.tb = j, Bc(a) || (c = j)
      }
    }
  }
  a.Cb = b;
  d && a.zb && (Ac(b, B(a.Ld, a, j), B(a.Ld, a, m)), b.lf = j);
  c && (a.zd = u.setTimeout(function() {
    e(b)
  }, 0))
}
function Cc(a) {
  var b = new uc;
  b.X(a);
  return b
}
function Dc(a) {
  var b = new uc;
  b.Xa(a);
  return b
}
function zc(a) {
  J.call(this);
  this.qf = a
}
E(zc, J);
zc.prototype.message = "Deferred has already fired";
zc.prototype.name = "AlreadyCalledError";
function vc(a) {
  J.call(this);
  this.qf = a
}
E(vc, J);
vc.prototype.message = "Deferred was cancelled";
vc.prototype.name = "CancelledError";
function Ec(a) {
  this.B = a;
  this.Qb = [];
  this.Sd = [];
  this.kf = B(this.ng, this)
}
Ec.prototype.wd = k;
Ec.prototype.ng = function() {
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
var Fc = new Ec(u.window);
function Gc(a) {
  return A(a) || "object" == typeof a && A(a.call) && A(a.apply)
}
;function Ic(a) {
  var b = [];
  Jc(new Kc, a, b);
  return b.join("")
}
function Kc() {
  this.lc = h
}
function Jc(a, b, c) {
  switch(typeof b) {
    case "string":
      Lc(b, c);
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
          c.push(g), g = b[f], Jc(a, a.lc ? a.lc.call(b, String(f), g) : g, c), g = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (g = b[f], "function" != typeof g && (c.push(d), Lc(f, c), c.push(":"), Jc(a, a.lc ? a.lc.call(b, f, g) : g, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var Mc = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Nc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Lc(a, b) {
  b.push('"', a.replace(Nc, function(a) {
    if(a in Mc) {
      return Mc[a]
    }
    var b = a.charCodeAt(0), g = "\\u";
    16 > b ? g += "000" : 256 > b ? g += "00" : 4096 > b && (g += "0");
    return Mc[a] = g + b.toString(16)
  }), '"')
}
;function Oc(a, b, c) {
  var d = db(c, a);
  if(-1 != d) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = fa(a);
    if("boolean" == d || "number" == d || "null" == d || "undefined" == d) {
      b.push(String(a))
    }else {
      if("string" == d) {
        Lc(a, b)
      }else {
        if(Gc(a.F)) {
          a.F(b, c)
        }else {
          if(Gc(a.ef)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if("array" == d) {
                d = a.length;
                b.push("[");
                for(var g = "", f = 0;f < d;f++) {
                  b.push(g), Oc(a[f], b, c), g = ", "
                }
                b.push("]")
              }else {
                if("object" == d) {
                  if(ia(a) && "function" == typeof a.valueOf) {
                    b.push("new Date(", String(a.valueOf()), ")")
                  }else {
                    for(var d = ab(a).concat(bb), g = {}, i = f = 0;i < d.length;) {
                      var l = d[i++], n = ja(l) ? "o" + ka(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(g, n) || (g[n] = j, d[f++] = l)
                    }
                    d.length = f;
                    b.push("{");
                    g = "";
                    for(i = 0;i < d.length;i++) {
                      f = d[i], Object.prototype.hasOwnProperty.call(a, f) && (l = a[f], b.push(g), Lc(f, b), b.push(": "), Oc(l, b, c), g = ", ")
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
  Oc(a, b, c)
}
function P(a) {
  var b = [];
  O(a, b, h);
  return b.join("")
}
;function Pc() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;function Qc(a, b) {
  this.x = w(a) ? a : 0;
  this.y = w(b) ? b : 0
}
Qc.prototype.O = function() {
  return new Qc(this.x, this.y)
};
Qc.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function Rc(a, b) {
  this.width = a;
  this.height = b
}
t = Rc.prototype;
t.O = function() {
  return new Rc(this.width, this.height)
};
t.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
t.Na = function() {
  return!(this.width * this.height)
};
t.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
t.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
var Sc;
function Tc(a) {
  a = a.className;
  return y(a) && a.match(/\S+/g) || []
}
function Uc(a, b) {
  for(var c = Tc(a), d = nb(arguments, 1), g = c.length + d.length, f = c, i = 0;i < d.length;i++) {
    jb(f, d[i]) || f.push(d[i])
  }
  a.className = c.join(" ");
  return c.length == g
}
function Vc(a, b) {
  var c = Tc(a), d = nb(arguments, 1), g, f = d;
  g = fb(c, function(a) {
    return!jb(f, a)
  });
  a.className = g.join(" ");
  return g.length == c.length - d.length
}
;var Wc = !G || Ua(), Xc = !Ia && !G || G && Ua() || Ia && I("1.9.1"), Yc = G && !I("9");
function Zc(a) {
  return a ? new $c(ad(a)) : Sc || (Sc = new $c)
}
function Q(a) {
  return y(a) ? document.getElementById(a) : a
}
var bd = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function cd(a, b, c) {
  return dd(document, arguments)
}
function dd(a, b) {
  var c = b[0], d = b[1];
  if(!Wc && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', F(d.name), '"');
    if(d.type) {
      c.push(' type="', F(d.type), '"');
      var g = {};
      cb(g, d);
      delete g.type;
      d = g
    }
    c.push(">");
    c = c.join("")
  }
  var f = a.createElement(c);
  d && (y(d) ? f.className = d : ga(d) ? Uc.apply(k, [f].concat(d)) : Za(d, function(a, b) {
    "style" == b ? f.style.cssText = a : "class" == b ? f.className = a : "for" == b ? f.htmlFor = a : b in bd ? f.setAttribute(bd[b], a) : 0 == b.lastIndexOf("aria-", 0) || 0 == b.lastIndexOf("data-", 0) ? f.setAttribute(b, a) : f[b] = a
  }));
  2 < b.length && ed(a, f, b, 2);
  return f
}
function ed(a, b, c, d) {
  function g(c) {
    c && b.appendChild(y(c) ? a.createTextNode(c) : c)
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
          if(A(l)) {
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
function fd(a, b) {
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
function ad(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
var gd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, hd = {IMG:" ", BR:"\n"};
function id(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, "number" == typeof a && 0 <= a && 32768 > a) : m
}
function jd(a) {
  var b = [];
  kd(a, b, m);
  return b.join("")
}
function kd(a, b, c) {
  if(!(a.nodeName in gd)) {
    if(3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in hd) {
        b.push(hd[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          kd(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function $c(a) {
  this.fa = a || u.document || document
}
t = $c.prototype;
t.Ya = Zc;
t.e = function(a) {
  return y(a) ? this.fa.getElementById(a) : a
};
function ld() {
  var a = (md.fa.parentWindow || md.fa.defaultView || window).document, a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
  return new Rc(a.clientWidth, a.clientHeight)
}
t.n = function(a, b, c) {
  return dd(this.fa, arguments)
};
t.createElement = function(a) {
  return this.fa.createElement(a)
};
t.createTextNode = function(a) {
  return this.fa.createTextNode(a)
};
t.appendChild = function(a, b) {
  a.appendChild(b)
};
t.append = function(a, b) {
  ed(ad(a), a, arguments, 1)
};
t.Vd = function(a) {
  return Xc && a.children != h ? a.children : fb(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
};
t.contains = fd;
function nd(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
var od = Ia ? "MozUserSelect" : H ? "WebkitUserSelect" : k;
function pd(a) {
  L.call(this);
  this.ee = a;
  this.j = []
}
E(pd, L);
var qd = [];
function R(a, b, c, d) {
  ga(c) || (qd[0] = c, c = qd);
  for(var g = 0;g < c.length;g++) {
    var f = N(b, c[g], d || a, m, a.ee || a);
    a.j.push(f)
  }
  return a
}
function rd(a, b, c, d, g, f) {
  if(ga(c)) {
    for(var i = 0;i < c.length;i++) {
      rd(a, b, c[i], d, g, f)
    }
  }else {
    a: {
      d = d || a;
      f = f || a.ee || a;
      g = !!g;
      if(b = mc(b, c, g)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].Ra && b[c].fb == d && b[c].capture == g && b[c].$b == f) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, nc(b), kb(a.j, b))
  }
  return a
}
pd.prototype.kd = function() {
  eb(this.j, nc);
  this.j.length = 0
};
pd.prototype.c = function() {
  pd.g.c.call(this);
  this.kd()
};
pd.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function sd() {
}
ea(sd);
sd.prototype.Qf = 0;
sd.Za();
function td(a) {
  L.call(this);
  this.Pb = a || Zc();
  this.Db = ud
}
E(td, sc);
td.prototype.Jf = sd.Za();
var ud = k;
function vd(a, b) {
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
t = td.prototype;
t.$ = k;
t.U = m;
t.q = k;
t.Db = k;
t.Of = k;
t.z = k;
t.oa = k;
t.Mb = k;
t.og = m;
function wd(a) {
  return a.$ || (a.$ = ":" + (a.Jf.Qf++).toString(36))
}
t.e = p("q");
function xd(a) {
  return a.$a || (a.$a = new pd(a))
}
t.getParent = p("z");
t.nd = function(a) {
  this.z && this.z != a && e(Error("Method not supported"));
  td.g.nd.call(this, a)
};
t.Ya = p("Pb");
t.n = function() {
  this.q = this.Pb.createElement("div")
};
function yd(a, b) {
  a.U && e(Error("Component already rendered"));
  a.q || a.n();
  b ? b.insertBefore(a.q, k) : a.Pb.fa.body.appendChild(a.q);
  (!a.z || a.z.U) && a.qa()
}
t.qa = function() {
  this.U = j;
  zd(this, function(a) {
    !a.U && a.e() && a.qa()
  })
};
t.sb = function() {
  zd(this, function(a) {
    a.U && a.sb()
  });
  this.$a && this.$a.kd();
  this.U = m
};
t.c = function() {
  td.g.c.call(this);
  this.U && this.sb();
  this.$a && (this.$a.b(), delete this.$a);
  zd(this, function(a) {
    a.b()
  });
  if(!this.og && this.q) {
    var a = this.q;
    a && a.parentNode && a.parentNode.removeChild(a)
  }
  this.z = this.Of = this.q = this.Mb = this.oa = k
};
t.lb = function(a) {
  this.U && e(Error("Component already rendered"));
  this.Db = a
};
function zd(a, b) {
  a.oa && eb(a.oa, b, h)
}
t.removeChild = function(a, b) {
  if(a) {
    var c = y(a) ? a : wd(a), d;
    this.Mb && c ? (d = this.Mb, d = (c in d ? d[c] : h) || k) : d = k;
    a = d;
    c && a && (d = this.Mb, c in d && delete d[c], kb(this.oa, a), b && (a.sb(), a.q && (c = a.q) && c.parentNode && c.parentNode.removeChild(c)), c = a, c == k && e(Error("Unable to set parent component")), c.z = k, td.g.nd.call(c, k))
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function Ad() {
}
var Bd;
ea(Ad);
t = Ad.prototype;
t.Ub = aa();
t.n = function(a) {
  var b = a.Ya().n("div", Cd(this, a).join(" "), a.pb);
  Dd(this, a, b);
  return b
};
t.qb = function(a, b, c) {
  if(a = a.e ? a.e() : a) {
    if(G && !I("7")) {
      var d = Ed(Tc(a), b);
      d.push(b);
      pa(c ? Uc : Vc, a).apply(k, d)
    }else {
      c ? Uc(a, b) : Vc(a, b)
    }
  }
};
t.ie = function(a) {
  if(a.Db == k) {
    var b = a.U ? a.q : a.Pb.fa.body, c;
    a: {
      c = ad(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(b, k))) {
        c = c.direction || c.getPropertyValue("direction") || "";
        break a
      }
      c = ""
    }
    c || (c = (b.currentStyle ? b.currentStyle.direction : k) || b.style && b.style.direction);
    a.Db = "rtl" == c
  }
  a.Db && this.lb(a.e(), j);
  a.isEnabled() && this.Eb(a, a.Va)
};
function Dd(a, b, c) {
  b.isEnabled() || a.ka(c, 1, j);
  b.f & 8 && a.ka(c, 8, j);
  b.N & 16 && a.ka(c, 16, !!(b.f & 16));
  b.N & 64 && a.ka(c, 64, !!(b.f & 64))
}
t.oc = function(a, b) {
  var c = !b, d = G || Ha ? a.getElementsByTagName("*") : k;
  if(od) {
    if(c = c ? "none" : "", a.style[od] = c, d) {
      for(var g = 0, f;f = d[g];g++) {
        f.style[od] = c
      }
    }
  }else {
    if(G || Ha) {
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for(g = 0;f = d[g];g++) {
          f.setAttribute("unselectable", c)
        }
      }
    }
  }
};
t.lb = function(a, b) {
  this.qb(a, this.ta() + "-rtl", b)
};
t.me = function(a) {
  var b;
  return a.N & 32 && (b = a.Ka()) ? id(b) : m
};
t.Eb = function(a, b) {
  var c;
  if(a.N & 32 && (c = a.Ka())) {
    if(!b && a.f & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.f & 32 && a.Yd()
    }
    id(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
t.pd = function(a, b) {
  a.style.display = b ? "" : "none"
};
t.L = function(a, b, c) {
  var d = a.e();
  if(d) {
    var g = Fd(this, b);
    g && this.qb(a, g, c);
    this.ka(d, b, c)
  }
};
t.ka = function(a, b, c) {
  Bd || (Bd = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Bd[b]) && a.setAttribute("aria-" + b, c)
};
t.Ka = function(a) {
  return a.e()
};
t.ta = s("goog-control");
function Cd(a, b) {
  var c = a.ta(), d = [c], g = a.ta();
  g != c && d.push(g);
  c = b.f;
  for(g = [];c;) {
    var f = c & -c;
    g.push(Fd(a, f));
    c &= ~f
  }
  d.push.apply(d, g);
  (c = b.Y) && d.push.apply(d, c);
  G && !I("7") && d.push.apply(d, Ed(d));
  return d
}
function Ed(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  eb([], function(d) {
    ib(d, pa(jb, a)) && (!b || jb(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Fd(a, b) {
  if(!a.Jd) {
    var c = a.ta();
    a.Jd = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Jd[b]
}
;function Gd(a, b) {
  a || e(Error("Invalid class name " + a));
  A(b) || e(Error("Invalid decorator function " + b))
}
var Hd = {};
function Id(a, b, c, d, g) {
  if(!G && (!H || !I("525"))) {
    return j
  }
  if(Ka && g) {
    return Jd(a)
  }
  if(g && !d || !c && (17 == b || 18 == b || Ka && 91 == b)) {
    return m
  }
  if(H && d && c) {
    switch(a) {
      case 220:
      ;
      case 219:
      ;
      case 221:
      ;
      case 192:
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
        return m
    }
  }
  if(G && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(G && Ua());
    case 27:
      return!H
  }
  return Jd(a)
}
function Jd(a) {
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
function Kd(a) {
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
;function Ld(a, b) {
  L.call(this);
  a && Md(this, a, b)
}
E(Ld, sc);
t = Ld.prototype;
t.q = k;
t.bc = k;
t.Tc = k;
t.cc = k;
t.J = -1;
t.wa = -1;
t.Ac = m;
var Nd = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Od = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Pd = G || 
H && I("525"), Qd = Ka && Ia;
t = Ld.prototype;
t.Ff = function(a) {
  H && (17 == this.J && !a.ctrlKey || 18 == this.J && !a.altKey || Ka && 91 == this.J && !a.metaKey ? this.wa = this.J = -1 : -1 == this.J && (a.ctrlKey && 17 != a.keyCode ? this.J = 17 : a.altKey && 18 != a.keyCode ? this.J = 18 : a.metaKey && 91 != a.keyCode && (this.J = 91)));
  Pd && !Id(a.keyCode, this.J, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.wa = Ia ? Kd(a.keyCode) : a.keyCode, Qd && (this.Ac = a.altKey))
};
t.Hf = function(a) {
  this.wa = this.J = -1;
  this.Ac = a.altKey
};
t.handleEvent = function(a) {
  var b = a.ra, c, d, g = b.altKey;
  G && "keypress" == a.type ? (c = this.wa, d = 13 != c && 27 != c ? b.keyCode : 0) : H && "keypress" == a.type ? (c = this.wa, d = 0 <= b.charCode && 63232 > b.charCode && Jd(c) ? b.charCode : 0) : Ha ? (c = this.wa, d = Jd(c) ? b.keyCode : 0) : (c = b.keyCode || this.wa, d = b.charCode || 0, Qd && (g = this.Ac), Ka && (63 == d && 224 == c) && (c = 191));
  var f = c, i = b.keyIdentifier;
  c ? 63232 <= c && c in Nd ? f = Nd[c] : 25 == c && a.shiftKey && (f = 9) : i && i in Od && (f = Od[i]);
  a = f == this.J;
  this.J = f;
  b = new Rd(f, d, a, b);
  b.altKey = g;
  this.dispatchEvent(b)
};
t.e = p("q");
function Md(a, b, c) {
  a.cc && a.detach();
  a.q = b;
  a.bc = N(a.q, "keypress", a, c);
  a.Tc = N(a.q, "keydown", a.Ff, c, a);
  a.cc = N(a.q, "keyup", a.Hf, c, a)
}
t.detach = function() {
  this.bc && (nc(this.bc), nc(this.Tc), nc(this.cc), this.cc = this.Tc = this.bc = k);
  this.q = k;
  this.wa = this.J = -1
};
t.c = function() {
  Ld.g.c.call(this);
  this.detach()
};
function Rd(a, b, c, d) {
  d && this.Ma(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
E(Rd, dc);
function S(a, b, c) {
  td.call(this, c);
  if(!b) {
    b = this.constructor;
    for(var d;b;) {
      d = ka(b);
      if(d = Hd[d]) {
        break
      }
      b = b.g ? b.g.constructor : k
    }
    b = d ? A(d.Za) ? d.Za() : new d : k
  }
  this.u = b;
  this.pb = a
}
E(S, td);
t = S.prototype;
t.pb = k;
t.f = 0;
t.N = 39;
t.Bc = 255;
t.eg = 0;
t.Va = j;
t.Y = k;
t.Pc = j;
t.zc = m;
t.Tf = k;
t.Ka = function() {
  return this.u.Ka(this)
};
function Sd(a, b) {
  b && (a.Y ? jb(a.Y, b) || a.Y.push(b) : a.Y = [b], a.u.qb(a, b, j))
}
t.qb = function(a, b) {
  b ? Sd(this, a) : a && this.Y && (kb(this.Y, a), 0 == this.Y.length && (this.Y = k), this.u.qb(this, a, m))
};
t.n = function() {
  var a = this.u.n(this);
  this.q = a;
  var b = this.Tf || this.u.Ub();
  b && a.setAttribute("role", b);
  this.zc || this.u.oc(a, m);
  this.Va || this.u.pd(a, m)
};
t.qa = function() {
  S.g.qa.call(this);
  this.u.ie(this);
  if(this.N & -2 && (this.Pc && Td(this, j), this.N & 32)) {
    var a = this.Ka();
    if(a) {
      var b = this.cb || (this.cb = new Ld);
      Md(b, a);
      R(R(R(xd(this), b, "key", this.Gf), a, "focus", this.Ef), a, "blur", this.Yd)
    }
  }
};
function Td(a, b) {
  var c = xd(a), d = a.e();
  b ? (R(R(R(R(c, d, "mouseover", a.ce), d, "mousedown", a.ae), d, "mouseup", a.de), d, "mouseout", a.be), a.Zb != v && R(c, d, "contextmenu", a.Zb), G && R(c, d, "dblclick", a.$d)) : (rd(rd(rd(rd(c, d, "mouseover", a.ce), d, "mousedown", a.ae), d, "mouseup", a.de), d, "mouseout", a.be), a.Zb != v && rd(c, d, "contextmenu", a.Zb), G && rd(c, d, "dblclick", a.$d))
}
t.sb = function() {
  S.g.sb.call(this);
  this.cb && this.cb.detach();
  this.Va && this.isEnabled() && this.u.Eb(this, m)
};
t.c = function() {
  S.g.c.call(this);
  this.cb && (this.cb.b(), delete this.cb);
  delete this.u;
  this.Y = this.pb = k
};
function Ud(a) {
  a = a.pb;
  if(!a) {
    return""
  }
  if(!y(a)) {
    if(ga(a)) {
      a = gb(a, jd).join("")
    }else {
      if(Yc && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        kd(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Yc || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
t.lb = function(a) {
  S.g.lb.call(this, a);
  var b = this.e();
  b && this.u.lb(b, a)
};
t.oc = function(a) {
  this.zc = a;
  var b = this.e();
  b && this.u.oc(b, a)
};
t.pd = function(a, b) {
  if(b || this.Va != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.e();
    c && this.u.pd(c, a);
    this.isEnabled() && this.u.Eb(this, a);
    this.Va = a;
    return j
  }
  return m
};
t.isEnabled = function() {
  return!(this.f & 1)
};
t.pc = function(a) {
  var b = this.getParent();
  if((!b || "function" != typeof b.isEnabled || b.isEnabled()) && Vd(this, 1, !a)) {
    a || (this.setActive(m), Wd(this, m)), this.Va && this.u.Eb(this, a), this.L(1, !a)
  }
};
function Wd(a, b) {
  Vd(a, 2, b) && a.L(2, b)
}
t.ke = function() {
  return!!(this.f & 4)
};
t.setActive = function(a) {
  Vd(this, 4, a) && this.L(4, a)
};
t.L = function(a, b) {
  this.N & a && b != !!(this.f & a) && (this.u.L(this, a, b), this.f = b ? this.f | a : this.f & ~a)
};
function T(a, b) {
  return!!(a.Bc & b) && !!(a.N & b)
}
function Vd(a, b, c) {
  return!!(a.N & b) && !!(a.f & b) != c && (!(a.eg & b) || a.dispatchEvent(vd(b, c))) && !a.ea
}
t.ce = function(a) {
  (!a.relatedTarget || !fd(this.e(), a.relatedTarget)) && (this.dispatchEvent("enter") && this.isEnabled() && T(this, 2)) && Wd(this, j)
};
t.be = function(a) {
  if((!a.relatedTarget || !fd(this.e(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    T(this, 4) && this.setActive(m), T(this, 2) && Wd(this, m)
  }
};
t.Zb = v;
t.ae = function(a) {
  if(this.isEnabled() && (T(this, 2) && Wd(this, j), fc(a) && (!H || !Ka || !a.ctrlKey))) {
    T(this, 4) && this.setActive(j), this.u.me(this) && this.Ka().focus()
  }
  !this.zc && (fc(a) && (!H || !Ka || !a.ctrlKey)) && a.preventDefault()
};
t.de = function(a) {
  this.isEnabled() && (T(this, 2) && Wd(this, j), this.ke() && (this.Ab(a) && T(this, 4)) && this.setActive(m))
};
t.$d = function(a) {
  this.isEnabled() && this.Ab(a)
};
t.Ab = function(a) {
  if(T(this, 16)) {
    var b = !(this.f & 16);
    Vd(this, 16, b) && this.L(16, b)
  }
  T(this, 8) && Vd(this, 8, j) && this.L(8, j);
  T(this, 64) && (b = !(this.f & 64), Vd(this, 64, b) && this.L(64, b));
  b = new ac("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.hd = a.hd);
  return this.dispatchEvent(b)
};
t.Ef = function() {
  T(this, 32) && Vd(this, 32, j) && this.L(32, j)
};
t.Yd = function() {
  T(this, 4) && this.setActive(m);
  T(this, 32) && Vd(this, 32, m) && this.L(32, m)
};
t.Gf = function(a) {
  return this.Va && this.isEnabled() && this.Oc(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
t.Oc = function(a) {
  return 13 == a.keyCode && this.Ab(a)
};
A(S) || e(Error("Invalid component class " + S));
A(Ad) || e(Error("Invalid renderer class " + Ad));
var Xd = ka(S);
Hd[Xd] = Ad;
Gd("goog-control", function() {
  return new S(k)
});
function Yd() {
}
E(Yd, Ad);
ea(Yd);
t = Yd.prototype;
t.Ub = s("button");
t.ka = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : Yd.g.ka.call(this, a, b, c)
};
t.n = function(a) {
  var b = Yd.g.n.call(this, a), c = a.Wb();
  c && this.od(b, c);
  (c = a.Xb()) && this.qc(b, c);
  a.N & 16 && this.ka(b, 16, !!(a.f & 16));
  return b
};
t.Xb = v;
t.qc = v;
t.Wb = function(a) {
  return a.title
};
t.od = function(a, b) {
  a && (a.title = b || "")
};
t.ta = s("goog-button");
function Zd() {
}
E(Zd, Yd);
ea(Zd);
t = Zd.prototype;
t.Ub = aa();
t.n = function(a) {
  a.U && m != a.Pc && Td(a, m);
  a.Pc = m;
  a.Bc &= -256;
  a.U && a.f & 32 && e(Error("Component already rendered"));
  a.f & 32 && a.L(32, m);
  a.N &= -33;
  return a.Ya().n("button", {"class":Cd(this, a).join(" "), disabled:!a.isEnabled(), title:a.Wb() || "", value:a.Xb() || ""}, Ud(a) || "")
};
t.ie = function(a) {
  R(xd(a), a.e(), "click", a.Ab)
};
t.oc = v;
t.lb = v;
t.me = function(a) {
  return a.isEnabled()
};
t.Eb = v;
t.L = function(a, b, c) {
  Zd.g.L.call(this, a, b, c);
  if((a = a.e()) && 1 == b) {
    a.disabled = c
  }
};
t.Xb = function(a) {
  return a.value
};
t.qc = function(a, b) {
  a && (a.value = b)
};
t.ka = v;
function ae(a, b, c) {
  S.call(this, a, b || Zd.Za(), c)
}
E(ae, S);
t = ae.prototype;
t.Xb = p("af");
t.qc = function(a) {
  this.af = a;
  this.u.qc(this.e(), a)
};
t.Wb = p("Ye");
t.od = function(a) {
  this.Ye = a;
  this.u.od(this.e(), a)
};
t.c = function() {
  ae.g.c.call(this);
  delete this.af;
  delete this.Ye
};
t.qa = function() {
  ae.g.qa.call(this);
  if(this.N & 32) {
    var a = this.Ka();
    a && R(xd(this), a, "keyup", this.Oc)
  }
};
t.Oc = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Ab(a) : 32 == a.keyCode
};
Gd("goog-button", function() {
  return new ae(k)
});
function be() {
}
E(be, Yd);
ea(be);
be.prototype.n = function(a) {
  var b = {"class":"goog-inline-block " + Cd(this, a).join(" "), title:a.Wb() || ""}, b = a.Ya().n("div", b, ce(this, a.pb, a.Ya()));
  Dd(this, a, b);
  return b
};
be.prototype.Ub = s("button");
function ce(a, b, c) {
  return c.n("div", "goog-inline-block " + (a.ta() + "-outer-box"), c.n("div", "goog-inline-block " + (a.ta() + "-inner-box"), b))
}
be.prototype.ta = s("goog-custom-button");
function de(a, b, c) {
  ae.call(this, a, b || be.Za(), c)
}
E(de, ae);
Gd("goog-custom-button", function() {
  return new de(k)
});
function ee() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ C()).toString(36)
}
function fe(a) {
  return a.substr(0, a.length - 1)
}
var ge = /^(0|[1-9]\d*)$/, he = /^(0|\-?[1-9]\d*)$/;
function ie(a) {
  var b = je;
  return ge.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function ke(a) {
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
;var le, me;
function ne(a, b) {
  this.Wa = a;
  this.Sa = b
}
ne.prototype.Q = function(a) {
  return a instanceof ne && this.Wa == a.Wa && this.Sa.join(",") == a.Sa
};
ne.prototype.F = function(a, b) {
  a.push("new SACK(", String(this.Wa), ", ");
  O(this.Sa, a, b);
  a.push(")")
};
function oe() {
  this.I = new ub
}
oe.prototype.Ia = -1;
oe.prototype.M = 0;
oe.prototype.append = function(a) {
  var b = ke(a);
  this.I.set(this.Ia + 1, [a, b]);
  this.Ia += 1;
  this.M += b
};
oe.prototype.F = function(a) {
  a.push("<Queue with ", String(this.I.r()), " item(s), counter=#", String(this.Ia), ", size=", String(this.M), ">")
};
function pe(a) {
  a = a.I.Z();
  K.sort.call(a, ob);
  return a
}
function qe() {
  this.Ga = new ub
}
qe.prototype.Oa = -1;
qe.prototype.M = 0;
function re(a) {
  var b = a.Ga.Z();
  K.sort.call(b, ob);
  return new ne(a.Oa, b)
}
var se = {};
function te(a, b) {
  switch(fa(b)) {
    case "string":
      a.push("<string>", F(b), "</string>");
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
        a.push('<property id="', d, '">'), te(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', F(c), '">'), te(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function ue(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, g = arguments;
  d.push("<arguments>");
  for(var f = g.length, i = 1;i < f;i++) {
    te(d, g[i])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var ve = m, we = "";
function xe(a) {
  a = a.match(/[\d]+/g);
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var ye = navigator.plugins["Shockwave Flash"];
  ye && (ve = j, ye.description && (we = xe(ye.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (ve = j, we = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var ze = navigator.mimeTypes["application/x-shockwave-flash"];
    (ve = ze && ze.enabledPlugin) && (we = xe(ze.enabledPlugin.description))
  }else {
    try {
      var Ae = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), ve = j, we = xe(Ae.GetVariable("$version"))
    }catch(Be) {
      try {
        Ae = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), ve = j, we = "6.0.21"
      }catch(Ce) {
        try {
          Ae = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), ve = j, we = xe(Ae.GetVariable("$version"))
        }catch(De) {
        }
      }
    }
  }
}
var Ee = we;
function Fe(a) {
  this.o = new ub;
  a && this.yc(a)
}
function Ge(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ka(a) : b.substr(0, 1) + a
}
t = Fe.prototype;
t.r = function() {
  return this.o.r()
};
t.add = function(a) {
  this.o.set(Ge(a), a)
};
t.yc = function(a) {
  a = qb(a);
  for(var b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
t.kd = function(a) {
  a = qb(a);
  for(var b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
t.remove = function(a) {
  return this.o.remove(Ge(a))
};
t.clear = function() {
  this.o.clear()
};
t.Na = function() {
  return this.o.Na()
};
t.contains = function(a) {
  return this.o.da(Ge(a))
};
t.D = function() {
  return this.o.D()
};
t.O = function() {
  return new Fe(this)
};
t.Q = function(a) {
  var b;
  if(b = this.r() == pb(a)) {
    var c = a;
    a = pb(c);
    this.r() > a ? b = m : (!(c instanceof Fe) && 5 < a && (c = new Fe(c)), b = tb(this, function(a) {
      if("function" == typeof c.contains) {
        a = c.contains(a)
      }else {
        if("function" == typeof c.Nb) {
          a = c.Nb(a)
        }else {
          if(ha(c) || y(c)) {
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
function He(a) {
  return Ie(a || arguments.callee.caller, [])
}
function Ie(a, b) {
  var c = [];
  if(jb(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Je(a) + "(");
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
            f = (f = Je(f)) ? f : "[fn]";
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
        c.push(Ie(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Je(a) {
  if(Ke[a]) {
    return Ke[a]
  }
  a = String(a);
  if(!Ke[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Ke[a] = b ? b[1] : "[Anonymous]"
  }
  return Ke[a]
}
var Ke = {};
function Le(a, b, c, d, g) {
  this.reset(a, b, c, d, g)
}
Le.prototype.Zf = 0;
Le.prototype.Mc = k;
Le.prototype.Lc = k;
var Me = 0;
Le.prototype.reset = function(a, b, c, d, g) {
  this.Zf = "number" == typeof g ? g : Me++;
  this.Xe = d || C();
  this.V = a;
  this.xe = b;
  this.te = c;
  delete this.Mc;
  delete this.Lc
};
Le.prototype.kb = ba("V");
function Ne(a) {
  this.Pf = a
}
Ne.prototype.z = k;
Ne.prototype.V = k;
Ne.prototype.oa = k;
Ne.prototype.vb = k;
function Oe(a, b) {
  this.name = a;
  this.value = b
}
Oe.prototype.toString = p("name");
var Pe = new Oe("SHOUT", 1200), Qe = new Oe("SEVERE", 1E3), Re = new Oe("WARNING", 900), Se = new Oe("INFO", 800), Te = new Oe("CONFIG", 700), Ue = new Oe("FINE", 500), Ve = new Oe("FINEST", 300), We = new Oe("ALL", 0), Xe = [new Oe("OFF", Infinity), Pe, Qe, Re, Se, Te, Ue, new Oe("FINER", 400), Ve, We], Ye = k;
function Ze(a) {
  if(!Ye) {
    Ye = {};
    for(var b = 0, c;c = Xe[b];b++) {
      Ye[c.value] = c, Ye[c.name] = c
    }
  }
  return Ye[a] || k
}
t = Ne.prototype;
t.getParent = p("z");
t.Vd = function() {
  this.oa || (this.oa = {});
  return this.oa
};
t.kb = ba("V");
function $e(a) {
  if(a.V) {
    return a.V
  }
  if(a.z) {
    return $e(a.z)
  }
  Wa("Root logger has no level set.");
  return k
}
t.log = function(a, b, c) {
  if(a.value >= $e(this).value) {
    a = this.Df(a, b, c);
    b = "log:" + a.xe;
    u.console && (u.console.timeStamp ? u.console.timeStamp(b) : u.console.markTimeline && u.console.markTimeline(b));
    u.msWriteProfilerMark && u.msWriteProfilerMark(b);
    for(b = this;b;) {
      c = b;
      var d = a;
      if(c.vb) {
        for(var g = 0, f = h;f = c.vb[g];g++) {
          f(d)
        }
      }
      b = b.getParent()
    }
  }
};
t.Df = function(a, b, c) {
  var d = new Le(a, String(b), this.Pf);
  if(c) {
    d.Mc = c;
    var g;
    var f = arguments.callee.caller;
    try {
      var i;
      var l = da("window.location.href");
      if(y(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var n, q, x = m;
        try {
          n = c.lineNumber || c.Ah || "Not available"
        }catch(r) {
          n = "Not available", x = j
        }
        try {
          q = c.fileName || c.filename || c.sourceURL || l
        }catch(z) {
          q = "Not available", x = j
        }
        i = x || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:q, stack:c.stack || "Not available"} : c
      }
      g = "Message: " + F(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + F(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + F(He(f) + "-> ")
    }catch(D) {
      g = "Exception trying to expose exception! You win, we lose. " + D
    }
    d.Lc = g
  }
  return d
};
function U(a, b) {
  a.log(Qe, b, h)
}
function V(a, b, c) {
  a.log(Re, b, c)
}
t.info = function(a, b) {
  this.log(Se, a, b)
};
function W(a, b) {
  a.log(Ue, b, h)
}
function X(a, b) {
  a.log(Ve, b, h)
}
var af = {}, bf = k;
function cf() {
  bf || (bf = new Ne(""), af[""] = bf, bf.kb(Te))
}
function df() {
  cf();
  return bf
}
function Y(a) {
  cf();
  var b;
  if(!(b = af[a])) {
    b = new Ne(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Y(a.substr(0, c));
    c.Vd()[d] = b;
    b.z = c;
    af[a] = b
  }
  return b
}
;function ef(a, b) {
  td.call(this, b);
  this.Af = a;
  this.Kc = new pd(this);
  this.Sb = new ub
}
E(ef, td);
t = ef.prototype;
t.a = Y("goog.ui.media.FlashObject");
t.qg = "window";
t.Gd = "#000000";
t.gf = "sameDomain";
function ff(a, b, c) {
  a.Bd = y(b) ? b : Math.round(b) + "px";
  a.Qc = y(c) ? c : Math.round(c) + "px";
  a.e() && (b = a.e() ? a.e().firstChild : k, c = a.Bd, a = a.Qc, c instanceof Rc ? (a = c.height, c = c.width) : a == h && e(Error("missing height argument")), b.style.width = nd(c), b.style.height = nd(a))
}
t.qa = function() {
  ef.g.qa.call(this);
  var a = this.e(), b;
  b = G ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = G ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = qa(c, this.qg), d = this.Sb.Z(), g = this.Sb.D(), f = [], i = 0;i < d.length;i++) {
    f.push(encodeURIComponent(String(d[i])) + "=" + encodeURIComponent(String(g[i])))
  }
  b = qa(b, wd(this), wd(this), "goog-ui-media-flash-object", F(this.Af), F(f.join("&")), this.Gd, this.gf, c);
  a.innerHTML = b;
  this.Bd && this.Qc && ff(this, this.Bd, this.Qc);
  R(this.Kc, this.e(), $a(Xb), bc)
};
t.n = function() {
  this.Me != k && !(0 <= za(Ee, this.Me)) && (V(this.a, "Required flash version not found:" + this.Me), e(Error("Method not supported")));
  var a = this.Ya().createElement("div");
  a.className = "goog-ui-media-flash";
  this.q = a
};
t.c = function() {
  ef.g.c.call(this);
  this.Sb = k;
  this.Kc.b();
  this.Kc = k
};
function gf(a) {
  J.call(this, a)
}
E(gf, J);
gf.prototype.name = "cw.loadflash.FlashLoadFailed";
u.__loadFlashObject_callbacks = {};
function hf(a, b) {
  L.call(this);
  this.$ = "_" + ee();
  this.uc = a;
  this.za = b;
  this.Fa = a.Fa
}
E(hf, L);
t = hf.prototype;
t.Pa = j;
t.Ob = m;
t.a = Y("cw.net.FlashSocket");
t.F = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.$);
  a.push("'>")
};
function jf(a, b, c) {
  if("frames" == b) {
    a = a.za, kf(a.C), lf(a.C, c)
  }else {
    if("stillreceiving" == b) {
      c = a.za, X(c.a, "onstillreceiving"), kf(c.C)
    }else {
      if("connect" == b) {
        a.za.onconnect()
      }else {
        "close" == b ? (a.Pa = m, a.b()) : "ioerror" == b ? (a.Pa = m, b = a.za, V(b.a, "onioerror: " + P(c)), mf(b.C, m), a.b()) : "securityerror" == b ? (a.Pa = m, b = a.za, V(b.a, "onsecurityerror: " + P(c)), mf(b.C, m), a.b()) : e(Error("bad event: " + b))
      }
    }
  }
}
t.Fc = function(a, b) {
  try {
    var c = this.Fa.CallFunction(ue("__FC_connect", this.$, a, b, "<int32/>\n"))
  }catch(d) {
    U(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message);
    this.Ob = j;
    this.Pa = m;
    this.b();
    return
  }
  '"OK"' != c && e(Error("__FC_connect failed? ret: " + c))
};
t.Jb = function(a) {
  try {
    var b = this.Fa.CallFunction(ue("__FC_writeFrames", this.$, a))
  }catch(c) {
    U(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message);
    this.Ob = j;
    this.Pa = m;
    this.b();
    return
  }
  '"OK"' != b && ('"no such instance"' == b ? (V(this.a, "Flash no longer knows of " + this.$ + "; disposing."), this.b()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
t.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.Pa);
  hf.g.c.call(this);
  var a = this.Fa;
  delete this.Fa;
  if(this.Pa) {
    try {
      var b = a.CallFunction(ue("__FC_close", this.$));
      this.a.info("disposeInternal: __FC_close ret: " + b)
    }catch(c) {
      U(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + c.message), this.Ob = j
    }
  }
  if(this.Ob) {
    a = this.za, V(a.a, "oncrash"), mf(a.C, j)
  }else {
    this.za.onclose()
  }
  delete this.za;
  delete this.uc.ab[this.$]
};
function nf(a, b) {
  L.call(this);
  this.p = a;
  this.Fa = b;
  this.ab = {};
  this.Ec = "__FST_" + ee();
  u[this.Ec] = B(this.uf, this);
  var c = b.CallFunction(ue("__FC_setCallbackFunc", this.Ec));
  '"OK"' != c && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
E(nf, L);
t = nf.prototype;
t.a = Y("cw.net.FlashSocketTracker");
t.F = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  O(this.ab, a, b);
  a.push(">")
};
t.Hc = function(a) {
  a = new hf(this, a);
  return this.ab[a.$] = a
};
t.sf = function(a, b, c, d) {
  var g = this.ab[a];
  g ? "frames" == b && d ? (jf(g, "ioerror", "FlashConnector hadError while handling data."), g.b()) : jf(g, b, c) : V(this.a, "Cannot dispatch because we have no instance: " + P([a, b, c, d]))
};
t.uf = function(a, b, c, d) {
  try {
    var g = this.p;
    g.Qb.push([this.sf, this, [a, b, c, d]]);
    g.wd == k && (g.wd = g.B.setTimeout(g.kf, 0))
  }catch(f) {
    u.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
t.c = function() {
  nf.g.c.call(this);
  for(var a = $a(this.ab);a.length;) {
    a.pop().b()
  }
  delete this.ab;
  delete this.Fa;
  u[this.Ec] = h
};
function of(a) {
  L.call(this);
  this.C = a;
  this.ob = []
}
E(of, L);
t = of.prototype;
t.a = Y("cw.net.FlashSocketConduit");
t.Jb = function(a) {
  this.ob ? (X(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.ob.push.apply(this.ob, a)) : (X(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.rc.Jb(a))
};
t.Fc = function(a, b) {
  this.rc.Fc(a, b)
};
t.onconnect = function() {
  this.a.info("onconnect");
  kf(this.C);
  var a = this.ob;
  this.ob = k;
  a.length && (X(this.a, "onconnect: Writing " + a.length + " buffered frame(s)."), this.rc.Jb(a))
};
t.onclose = function() {
  this.a.info("onclose");
  mf(this.C, m)
};
t.c = function() {
  this.a.info("in disposeInternal.");
  of.g.c.call(this);
  this.rc.b();
  delete this.C
};
var pf = [];
function qf() {
  var a = new uc;
  pf.push(a);
  return a
}
function rf(a) {
  var b = pf;
  pf = [];
  eb(b, function(b) {
    b.X(a)
  });
  return k
}
function sf(a) {
  var b = pf;
  pf = [];
  eb(b, function(b) {
    b.Xa(a)
  });
  return k
}
;var je = Math.pow(2, 53);
var tf = {ef:s("<cw.eq.Wildcard>")};
function uf(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function vf(a, b, c) {
  var d = fa(a), g = fa(b);
  if(a == tf || b == tf) {
    return j
  }
  if(a != k && "function" == typeof a.Q) {
    return c && c.push("running custom equals function on left object"), a.Q(b, c)
  }
  if(b != k && "function" == typeof b.Q) {
    return c && c.push("running custom equals function on right object"), b.Q(a, c)
  }
  if(uf(d) || uf(g)) {
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
                if(!vf(a[d], b[d], c)) {
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
          if(a.df == Rb && b.df == Rb) {
            a: {
              c && c.push("descending into object");
              for(var f in a) {
                if(!(f in b)) {
                  c && c.push("property " + f + " missing on right object");
                  a = m;
                  break a
                }
                if(!vf(a[f], b[f], c)) {
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
  this.jc = b
}
Z.prototype.Q = function(a, b) {
  return ja(a) && this.constructor == a.constructor && vf(this.jc, a.jc, b)
};
Z.prototype.F = function(a, b) {
  a.push("new ", this.Wf, "(");
  for(var c = "", d = 0;d < this.jc.length;d++) {
    a.push(c), c = ", ", O(this.jc[d], a, b)
  }
  a.push(")")
};
function $(a) {
  J.call(this, a)
}
E($, J);
$.prototype.name = "cw.net.InvalidFrame";
function wf() {
  var a = [];
  this.T(a);
  return a.join("")
}
function xf() {
}
xf.prototype.Q = function(a, b) {
  return!(a instanceof xf) ? m : vf(yf(this), yf(a), b)
};
xf.prototype.F = function(a, b) {
  a.push("<HelloFrame properties=");
  O(yf(this), a, b);
  a.push(">")
};
function yf(a) {
  return[a.ja, a.Ge, a.ge, a.Le, a.Gb, a.td, a.ye, a.we, a.Yc, a.ue, a.$e, a.We, a.Ca, a.dc]
}
xf.prototype.P = wf;
xf.prototype.T = function(a) {
  var b = {};
  b.tnum = this.ja;
  b.ver = this.Ge;
  b.format = this.ge;
  b["new"] = this.Le;
  b.id = this.Gb;
  b.ming = this.td;
  b.pad = this.ye;
  b.maxb = this.we;
  w(this.Yc) && (b.maxt = this.Yc);
  b.maxia = this.ue;
  b.tcpack = this.$e;
  b.eeds = this.We;
  b.sack = this.Ca instanceof ne ? fe((new zf(this.Ca)).P()) : this.Ca;
  b.seenack = this.dc instanceof ne ? fe((new zf(this.dc)).P()) : this.dc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(Ic(b), "H")
};
function Af(a) {
  Z.call(this, "StringFrame", [a]);
  this.vd = a
}
E(Af, Z);
Af.prototype.P = wf;
Af.prototype.T = function(a) {
  a.push(this.vd, " ")
};
function Bf(a) {
  Z.call(this, "CommentFrame", [a]);
  this.of = a
}
E(Bf, Z);
Bf.prototype.P = wf;
Bf.prototype.T = function(a) {
  a.push(this.of, "^")
};
function Cf(a) {
  Z.call(this, "SeqNumFrame", [a]);
  this.Re = a
}
E(Cf, Z);
Cf.prototype.P = wf;
Cf.prototype.T = function(a) {
  a.push(String(this.Re), "N")
};
function Df(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1];
    a = je;
    if(he.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var f = ie(b[d]);
      if(f == k) {
        return k
      }
      c.push(f)
    }
  }
  return new ne(a, c)
}
function zf(a) {
  Z.call(this, "SackFrame", [a]);
  this.Ca = a
}
E(zf, Z);
zf.prototype.P = wf;
zf.prototype.T = function(a) {
  var b = this.Ca;
  a.push(b.Sa.join(","), "|", String(b.Wa));
  a.push("A")
};
function Ef(a) {
  Z.call(this, "StreamStatusFrame", [a]);
  this.pe = a
}
E(Ef, Z);
Ef.prototype.P = wf;
Ef.prototype.T = function(a) {
  var b = this.pe;
  a.push(b.Sa.join(","), "|", String(b.Wa));
  a.push("T")
};
function Ff() {
  Z.call(this, "StreamCreatedFrame", [])
}
E(Ff, Z);
Ff.prototype.P = wf;
Ff.prototype.T = function(a) {
  a.push("C")
};
function Gf() {
  Z.call(this, "YouCloseItFrame", [])
}
E(Gf, Z);
Gf.prototype.P = wf;
Gf.prototype.T = function(a) {
  a.push("Y")
};
function Hf(a, b) {
  Z.call(this, "ResetFrame", [a, b]);
  this.Je = a;
  this.Fd = b
}
E(Hf, Z);
Hf.prototype.P = wf;
Hf.prototype.T = function(a) {
  a.push(this.Je, "|", String(Number(this.Fd)), "!")
};
var If = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Jf(a) {
  Z.call(this, "TransportKillFrame", [a]);
  this.reason = a
}
E(Jf, Z);
Jf.prototype.P = wf;
Jf.prototype.T = function(a) {
  a.push(this.reason, "K")
};
function Kf(a) {
  a || e(new $("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new Af(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = Df(fe(a)), a == k && e(new $("bad sack")), new zf(a)
  }
  if("N" == b) {
    return a = ie(fe(a)), a == k && e(new $("bad seqNum")), new Cf(a)
  }
  if("T" == b) {
    return a = Df(fe(a)), a == k && e(new $("bad lastSackSeen")), new Ef(a)
  }
  if("Y" == b) {
    return 1 != a.length && e(new $("leading garbage")), new Gf
  }
  if("^" == b) {
    return new Bf(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && e(new $("leading garbage")), new Ff
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && e(new $("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && e(new $("bad applicationLevel")), new Hf(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = If[a], a == k && e(new $("unknown kill reason: " + a)), new Jf(a)
  }
  e(new $("Invalid frame type " + b))
}
;function Lf(a, b, c, d) {
  this.contentWindow = a;
  this.Rb = b;
  this.ud = c;
  this.Cf = d
}
Lf.prototype.F = function(a, b) {
  a.push("<XDRFrame frameId=");
  O(this.Cf, a, b);
  a.push(", expandedUrl=");
  O(this.Rb, a, b);
  a.push(", streams=");
  O(this.ud, a, b);
  a.push(">")
};
function Mf() {
  this.frames = [];
  this.Wc = new ub
}
Mf.prototype.a = Y("cw.net.XDRTracker");
function Nf(a, b) {
  for(var c = Of, d = 0;d < c.frames.length;d++) {
    var g = c.frames[d], f;
    if(f = 0 == g.ud.length) {
      f = g.Rb;
      var i = String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      f = RegExp("^" + i + "$").test(f)
    }
    if(f) {
      return c.a.info("Giving " + P(b) + " existing frame " + P(g)), Cc(g)
    }
  }
  d = ee() + ee();
  g = a.replace(/%random%/g, function() {
    return"ml" + String(Math.floor(Pc())) + String(Math.floor(Pc()))
  });
  f = u.location;
  f instanceof zb || (f = Nb(f));
  g instanceof zb || (g = Nb(g));
  var l = f;
  f = g;
  g = l.O();
  (i = !!f.Da) ? Ab(g, f.Da) : i = !!f.Ua;
  if(i) {
    var n = f.Ua;
    Bb(g);
    g.Ua = n
  }else {
    i = !!f.pa
  }
  i ? Cb(g, f.pa) : i = f.ib != k;
  n = f.xa;
  if(i) {
    Db(g, f.ib)
  }else {
    if(i = !!f.xa) {
      if("/" != n.charAt(0) && (l.pa && !l.xa ? n = "/" + n : (l = g.xa.lastIndexOf("/"), -1 != l && (n = g.xa.substr(0, l + 1) + n))), ".." == n || "." == n) {
        n = ""
      }else {
        if(-1 != n.indexOf("./") || -1 != n.indexOf("/.")) {
          for(var l = 0 == n.lastIndexOf("/", 0), n = n.split("/"), q = [], x = 0;x < n.length;) {
            var r = n[x++];
            "." == r ? l && x == n.length && q.push("") : ".." == r ? ((1 < q.length || 1 == q.length && "" != q[0]) && q.pop(), l && x == n.length && q.push("")) : (q.push(r), l = j)
          }
          n = q.join("/")
        }
      }
    }
  }
  i ? Eb(g, n) : i = "" !== f.K.toString();
  i ? Fb(g, f.K.toString() ? decodeURIComponent(f.K.toString()) : "") : i = !!f.Ja;
  i && (f = f.Ja, Bb(g), g.Ja = f);
  g = g.toString();
  f = String(u.location).match(Xa)[3] || k;
  i = g.match(Xa)[3] || k;
  f == i ? (c.a.info("No need to make a real XDRFrame for " + P(b)), c = Cc(new Lf(u, g, [b], k))) : ((f = Q("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new uc, c.Wc.set(d, [i, g, b]), c.a.info("Creating new XDRFrame " + P(d) + "for " + P(b)), c = cd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:g + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), f.appendChild(c), c = i);
  return c
}
Mf.prototype.sg = function(a) {
  var b = this.Wc.get(a);
  b || e(Error("Unknown frameId " + P(a)));
  this.Wc.remove(b);
  var c = b[0];
  a = new Lf(Q("minerva-xdrframe-" + a).contentWindow || (Q("minerva-xdrframe-" + a).contentDocument || Q("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (Q("minerva-xdrframe-" + a).contentDocument || Q("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.X(a)
};
var Of = new Mf;
u.__XHRTracker_xdrFrameLoaded = B(Of.sg, Of);
var Pf;
Pf = m;
var Qf = Ea();
Qf && (-1 != Qf.indexOf("Firefox") || -1 != Qf.indexOf("Camino") || -1 != Qf.indexOf("iPhone") || -1 != Qf.indexOf("iPod") || -1 != Qf.indexOf("iPad") || -1 != Qf.indexOf("Android") || -1 != Qf.indexOf("Chrome") && (Pf = j));
var Rf = Pf;
function Sf(a, b, c, d, g, f) {
  uc.call(this, g, f);
  this.se = a;
  this.Ic = [];
  this.Ud = !!b;
  this.zf = !!c;
  this.pf = !!d;
  for(b = 0;b < a.length;b++) {
    Ac(a[b], B(this.Zd, this, b, j), B(this.Zd, this, b, m))
  }
  0 == a.length && !this.Ud && this.X(this.Ic)
}
E(Sf, uc);
Sf.prototype.Ae = 0;
Sf.prototype.Zd = function(a, b, c) {
  this.Ae++;
  this.Ic[a] = [b, c];
  this.sa || (this.Ud && b ? this.X([a, c]) : this.zf && !b ? this.Xa(c) : this.Ae == this.se.length && this.X(this.Ic));
  this.pf && !b && (c = k);
  return c
};
Sf.prototype.Xa = function(a) {
  Sf.g.Xa.call(this, a);
  eb(this.se, function(a) {
    a.cancel()
  })
};
function Tf(a, b) {
  this.rg = a;
  this.ve = b
}
Tf.prototype.Uc = 0;
Tf.prototype.gc = 0;
Tf.prototype.Nc = m;
function Uf(a) {
  var b = [];
  if(a.Nc) {
    return[b, 2]
  }
  var c = a.Uc, d = a.rg.responseText;
  for(a.Uc = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var g = d.substr(a.gc, c - a.gc), g = g.replace(/\r$/, "");
    if(g.length > a.ve) {
      return a.Nc = j, [b, 2]
    }
    b.push(g);
    a.gc = c += 1
  }
  return a.Uc - a.gc - 1 > a.ve ? (a.Nc = j, [b, 2]) : [b, 1]
}
;function Vf(a, b, c) {
  L.call(this);
  this.C = b;
  this.W = a;
  this.Gc = c
}
E(Vf, L);
t = Vf.prototype;
t.a = Y("cw.net.XHRMaster");
t.Aa = -1;
t.Xc = function(a, b, c) {
  this.Gc.__XHRSlave_makeRequest(this.W, a, b, c)
};
t.ua = p("Aa");
t.ad = function(a, b) {
  1 != b && U(this.a, P(this.W) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  kf(this.C);
  lf(this.C, a)
};
t.bd = function(a) {
  W(this.a, "ongotheaders_: " + P(a));
  var b = k;
  "Content-Length" in a && (b = ie(a["Content-Length"]));
  a = this.C;
  W(a.a, a.l() + " got Content-Length: " + b);
  a.ca == Wf && (b == k && (V(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Xf(a, 2E3 + 1E3 * (b / 3072)))
};
t.cd = function(a) {
  1 != a && W(this.a, this.C.l() + "'s XHR's readyState is " + a);
  this.Aa = a;
  2 <= this.Aa && kf(this.C)
};
t.$c = function() {
  this.C.b()
};
t.c = function() {
  Vf.g.c.call(this);
  delete Yf.ha[this.W];
  this.Gc.__XHRSlave_dispose(this.W);
  delete this.Gc
};
function Zf() {
  L.call(this);
  this.ha = {}
}
E(Zf, L);
t = Zf.prototype;
t.a = Y("cw.net.XHRMasterTracker");
t.Hc = function(a, b) {
  var c = "_" + ee(), d = new Vf(c, a, b);
  return this.ha[c] = d
};
t.ad = function(a, b, c) {
  if(Ia) {
    for(var d = [], g = 0, f = b.length;g < f;g++) {
      d[g] = b[g]
    }
    b = d
  }else {
    b = lb(b)
  }
  (d = this.ha[a]) ? d.ad(b, c) : U(this.a, "onframes_: no master for " + P(a))
};
t.bd = function(a, b) {
  var c = this.ha[a];
  c ? c.bd(b) : U(this.a, "ongotheaders_: no master for " + P(a))
};
t.cd = function(a, b) {
  var c = this.ha[a];
  c ? c.cd(b) : U(this.a, "onreadystatechange_: no master for " + P(a))
};
t.$c = function(a) {
  var b = this.ha[a];
  b ? (delete this.ha[b.W], b.$c()) : U(this.a, "oncomplete_: no master for " + P(a))
};
t.c = function() {
  Zf.g.c.call(this);
  for(var a = $a(this.ha);a.length;) {
    a.pop().b()
  }
  delete this.ha
};
var Yf = new Zf;
u.__XHRMaster_onframes = B(Yf.ad, Yf);
u.__XHRMaster_oncomplete = B(Yf.$c, Yf);
u.__XHRMaster_ongotheaders = B(Yf.bd, Yf);
u.__XHRMaster_onreadystatechange = B(Yf.cd, Yf);
function $f(a, b, c) {
  this.aa = a;
  this.host = b;
  this.port = c
}
function ag(a, b, c) {
  this.host = a;
  this.port = b;
  this.jg = c
}
function bg(a, b) {
  b || (b = a);
  this.aa = a;
  this.Ea = b
}
bg.prototype.F = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  O(this.aa, a, b);
  a.push(", secondaryUrl=");
  O(this.Ea, a, b);
  a.push(">")
};
function cg(a, b, c, d) {
  this.aa = a;
  this.Fe = b;
  this.Ea = c;
  this.Qe = d;
  (!(0 == this.aa.indexOf("http://") || 0 == this.aa.indexOf("https://")) || !(0 == this.Ea.indexOf("http://") || 0 == this.Ea.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Fe.location.href;
  Ya(this.aa, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Qe.location.href;
  Ya(this.Ea, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
cg.prototype.F = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  O(this.aa, a, b);
  a.push(", secondaryUrl=");
  O(this.Ea, a, b);
  a.push(">")
};
var dg = new Bf(";)]}");
function gg() {
}
gg.prototype.Wd = s(1);
function hg(a) {
  u.setTimeout(function() {
    w(a.message) && a.stack && (a.message += "\n" + a.stack);
    e(a)
  }, 0)
}
function ig(a) {
  this.fg = a
}
ig.prototype.F = function(a, b) {
  a.push("<UserContext for ");
  O(this.fg, a, b);
  a.push(">")
};
ig.prototype.toString = function() {
  return P(this)
};
function jg(a, b, c, d) {
  Z.call(this, "TransportInfo", [a, b, c, d]);
  this.ja = a;
  this.zh = b;
  this.Ch = c;
  this.Dh = d
}
E(jg, Z);
function kg(a, b, c) {
  L.call(this);
  this.t = a;
  this.gg = b ? b : new gg;
  this.p = c ? c : Fc;
  this.Hb = new Fe;
  this.Gb = ee() + ee();
  this.ba = new oe;
  this.Sc = new qe;
  this.Ib = k;
  this.vc = [];
  this.mb = new ig(this);
  this.jf = B(this.mg, this);
  H && (this.Ib = kc(u, "load", this.Xf, m, this))
}
E(kg, L);
t = kg.prototype;
t.a = Y("cw.net.ClientStream");
t.qe = new ne(-1, []);
t.re = new ne(-1, []);
t.Nf = 50;
t.Mf = 1048576;
t.ed = k;
t.dd = k;
t.fd = k;
t.gd = k;
t.onreset = k;
t.De = k;
t.jb = k;
t.rd = m;
t.ld = m;
t.f = "1_UNSTARTED";
t.xd = -1;
t.h = k;
t.s = k;
t.Bb = k;
t.sd = 0;
t.Ee = 0;
t.Pe = 0;
t.F = function(a, b) {
  a.push("<ClientStream id=");
  O(this.Gb, a, b);
  a.push(", state=", String(this.f));
  a.push(", primary=");
  O(this.h, a, b);
  a.push(", secondary=");
  O(this.s, a, b);
  a.push(", resetting=");
  O(this.Bb, a, b);
  a.push(">")
};
t.toString = function() {
  return P(this)
};
function lg(a) {
  var b = [-1];
  a.h && b.push(a.h.gb);
  a.s && b.push(a.s.gb);
  return Math.max.apply(Math.max, b)
}
function mg(a) {
  if(!("3_STARTED" > a.f)) {
    ng(a);
    var b = 0 != a.ba.I.r(), c = re(a.Sc), d = !c.Q(a.re) && !(a.h && c.Q(a.h.eb) || a.s && c.Q(a.s.eb)), g = lg(a);
    if((b = b && g < a.ba.Ia) || d) {
      var f = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.h.Ha ? (X(a.a, "tryToSend_: writing " + f + " to primary"), d && (d = a.h, c != d.eb && (!d.ia && !d.v.length && og(d), d.v.push(new zf(c)), d.eb = c)), b && pg(a.h, a.ba, g + 1), a.h.ga()) : a.s == k ? a.rd ? (X(a.a, "tryToSend_: creating secondary to send " + f), a.s = qg(a, m, j), a.s && (b && pg(a.s, a.ba, g + 1), a.s.ga())) : (X(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.ld = j) : X(a.a, "tryToSend_: need to send " + f + ", but can't right now")
    }
  }
}
function ng(a) {
  a.jb != k && (a.p.B.clearTimeout(a.jb), a.jb = k)
}
t.mg = function() {
  this.jb = k;
  mg(this)
};
function rg(a) {
  a.jb == k && (a.jb = a.p.B.setTimeout(a.jf, 6))
}
t.Xf = function() {
  this.Ib = k;
  if(this.h && this.h.bb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.h;
    a.xc = j;
    a.b()
  }
  this.s && this.s.bb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.s, a.xc = j, a.b())
};
function sg(a, b) {
  var c;
  w(c) || (c = j);
  "3_STARTED" < a.f && e(Error("sendString: Can't send in state " + a.f));
  c && (y(b) || e(Error("sendString: not a string: " + P(b))), /^([ -~]*)$/.test(b) || e(Error("sendString: string has illegal chars: " + P(b))));
  a.ba.append(b);
  rg(a)
}
function qg(a, b, c) {
  var d;
  a.t instanceof cg ? d = 1 == a.gg.Wd() ? Wf : tg : a.t instanceof ag ? d = ug : e(Error("Don't support endpoint " + P(a.t)));
  a.xd += 1;
  b = new vg(a.p, a, a.xd, d, a.t, b);
  X(a.a, "Created: " + b.l());
  if(c) {
    if(a.fd) {
      c = new jg(b.ja, b.ma, b.Ba, b.Ha);
      try {
        a.fd.call(a.mb, c)
      }catch(g) {
        V(a.a, "ontransportcreated raised uncaught exception", g), hg(g)
      }
    }
    if(wg(a)) {
      return k
    }
  }
  a.Hb.add(b);
  return b
}
function xg(a, b, c) {
  var d = new yg(a.p, a, b, c);
  X(a.a, "Created: " + d.l() + ", delay=" + b + ", times=" + c);
  a.Hb.add(d);
  return d
}
function zg(a, b) {
  a.Hb.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  W(a.a, "Offline: " + b.l());
  var c = "4_RESETTING" == a.f && b.cf;
  if(b instanceof vg && !c) {
    if(a.gd) {
      var d = new jg(b.ja, b.ma, b.Ba, b.Ha);
      try {
        a.gd.call(a.mb, d)
      }catch(g) {
        V(a.a, "ontransportdestroyed raised uncaught exception", g), hg(g)
      }
    }
    if(wg(a)) {
      return
    }
  }
  a.sd = b.ya ? a.sd + b.ya : 0;
  1 <= a.sd && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), Ag(a, "stream penalty reached limit", m), a.b());
  if("3_STARTED" < a.f) {
    c ? (W(a.a, "Disposing because resettingTransport_ is done."), a.b()) : W(a.a, "Not creating a transport because ClientStream is in state " + a.f)
  }else {
    c = b instanceof yg;
    if(!c && b.xc) {
      var f = H ? Rf ? [0, 1] : [9, 20] : [0, 0], c = f[0], d = f[1];
      X(a.a, "getDelayForNextTransport_: " + P({delay:c, times:d}))
    }else {
      if(d = b.Kd(), b == a.h ? d ? f = ++a.Ee : c || (f = a.Ee = 0) : d ? f = ++a.Pe : c || (f = a.Pe = 0), c || !f) {
        d = c = 0, X(a.a, "getDelayForNextTransport_: " + P({count:f, delay:c, times:d}))
      }else {
        var i = 2E3 * Math.min(f, 3), l = Math.floor(4E3 * Math.random()) - 2E3, n = Math.max(0, b.Ze - b.yd), d = (c = Math.max(0, i + l - n)) ? 1 : 0;
        X(a.a, "getDelayForNextTransport_: " + P({count:f, base:i, variance:l, oldDuration:n, delay:c, times:d}))
      }
    }
    c = [c, d];
    f = c[0];
    c = c[1];
    if(b == a.h) {
      a.h = k;
      if(c) {
        a.h = xg(a, f, c)
      }else {
        f = lg(a);
        a.h = qg(a, j, j);
        if(!a.h) {
          return
        }
        pg(a.h, a.ba, f + 1)
      }
      a.h.ga()
    }else {
      b == a.s && (a.s = k, c ? (a.s = xg(a, f, c), a.s.ga()) : mg(a))
    }
  }
}
function Ag(a, b, c) {
  if(a.onreset) {
    try {
      a.onreset.call(a.mb, b, c)
    }catch(d) {
      V(a.a, "onreset raised uncaught exception", d), hg(d)
    }
  }
}
t.reset = function(a) {
  "3_STARTED" < this.f && e(Error("reset: Can't send reset in state " + this.f));
  ng(this);
  0 != this.ba.I.r() && V(this.a, "reset: strings in send queue will never be sent: " + P(this.ba));
  this.f = "4_RESETTING";
  this.h && this.h.Ha ? (this.a.info("reset: Sending ResetFrame over existing primary."), Bg(this.h, a), this.h.ga()) : (this.h && (W(this.a, "reset: Disposing primary before sending ResetFrame."), this.h.b()), this.s && (W(this.a, "reset: Disposing secondary before sending ResetFrame."), this.s.b()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Bb = qg(this, m, m), Bg(this.Bb, a), this.Bb.ga());
  Ag(this, a, j)
};
function wg(a) {
  return"4_RESETTING" == a.f || a.ea
}
t.Rd = function(a) {
  U(this.a, "Failed to start " + P(this) + "; error was " + P(a.message));
  this.b();
  return k
};
t.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  "1_UNSTARTED" != this.f && e(Error("ClientStream.start: " + P(this) + " already started"));
  this.dd && this.dd(this);
  this.f = "2_WAITING_RESOURCES";
  if(this.t instanceof bg) {
    var a = Nf(this.t.aa, this), b = Nf(this.t.Ea, this), a = new Sf([a, b], m, j);
    Ac(a, function(a) {
      return gb(a, function(a) {
        return a[1]
      })
    }, k, h);
    b = B(this.xf, this);
    Ac(a, b, k, h);
    b = B(this.Rd, this);
    Ac(a, k, b, h)
  }else {
    if(this.t instanceof $f) {
      if(me) {
        this.Td()
      }else {
        a = this.p;
        b = this.t.aa;
        if(pf.length) {
          a = qf()
        }else {
          b = new ef(b + "FlashConnector.swf?cb=4bdfc178fc0e508c0cd5efc3fdb09920");
          b.Gd = "#777777";
          ff(b, 300, 30);
          var c = Q("minerva-elements");
          c || e(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
          var d = Q("minerva-elements-FlashConnectorSwf");
          d || (d = cd("div", {id:"minerva-elements-FlashConnectorSwf"}), c.appendChild(d));
          var g = a.B, f;
          var a = d, i, l = function() {
            i && delete u.__loadFlashObject_callbacks[i]
          };
          if(Ia && !I("1.8.1.20")) {
            f = Dc(new gf("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
          }else {
            if(0 <= za(Ee, "9")) {
              var n;
              i = "_" + ee();
              var q = new uc(l);
              u.__loadFlashObject_callbacks[i] = function() {
                g.setTimeout(function() {
                  l();
                  q.X(Q(n))
                }, 0)
              };
              b.Sb.set("onloadcallback", '__loadFlashObject_callbacks["' + i + '"]()');
              n = wd(b);
              yd(b, a);
              f = q
            }else {
              f = Dc(new gf("Need Flash Player 9+; had " + (Ee ? Ee : "none")))
            }
          }
          var x = g.setTimeout(function() {
            f.cancel()
          }, 8E3), a = function(a) {
            g.clearTimeout(x);
            return a
          };
          Ac(f, a, a, h);
          le = f;
          a = qf();
          Ac(le, rf, sf)
        }
        var r = this;
        Ac(a, function(a) {
          me || (me = new nf(r.p, a));
          return k
        }, k, h);
        b = B(this.Td, this);
        Ac(a, b, k, h);
        b = B(this.Rd, this);
        Ac(a, k, b, h)
      }
    }else {
      Cg(this)
    }
  }
};
t.xf = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Rb, g = a[1].Rb;
  this.vc.push(a[0]);
  this.vc.push(a[1]);
  this.t = new cg(d, b, g, c);
  Cg(this)
};
t.Td = function() {
  this.t = new ag(this.t.host, this.t.port, me);
  Cg(this)
};
function Cg(a) {
  a.f = "3_STARTED";
  a.h = qg(a, j, j);
  a.h && (pg(a.h, a.ba, k), a.h.ga())
}
t.c = function() {
  this.a.info(P(this) + " in disposeInternal.");
  ng(this);
  this.f = "5_DISCONNECTED";
  for(var a = this.Hb.D(), b = 0;b < a.length;b++) {
    a[b].b()
  }
  for(a = 0;a < this.vc.length;a++) {
    kb(this.vc[a].ud, this)
  }
  H && this.Ib && (nc(this.Ib), this.Ib = k);
  this.De && this.De.call(this.mb);
  delete this.Hb;
  delete this.h;
  delete this.s;
  delete this.Bb;
  delete this.mb;
  kg.g.c.call(this)
};
var Wf = 1, tg = 2, ug = 3;
function vg(a, b, c, d, g, f) {
  L.call(this);
  this.p = a;
  this.A = b;
  this.ja = c;
  this.ca = d;
  this.t = g;
  this.v = [];
  this.ma = f;
  this.Ha = !this.bb();
  this.Ba = this.ca != Wf;
  this.hf = B(this.hg, this)
}
E(vg, L);
t = vg.prototype;
t.a = Y("cw.net.ClientTransport");
t.k = k;
t.yd = k;
t.Ze = k;
t.kc = k;
t.ia = m;
t.sc = m;
t.eb = k;
t.Tb = 0;
t.gb = -1;
t.ic = -1;
t.cf = m;
t.xc = m;
t.ya = 0;
t.ub = m;
t.F = function(a) {
  a.push("<ClientTransport #", String(this.ja), ", becomePrimary=", String(this.ma), ">")
};
t.l = function() {
  return(this.ma ? "Prim. T#" : "Sec. T#") + this.ja
};
t.Kd = function() {
  return!(!this.ub && this.Tb)
};
t.bb = function() {
  return this.ca == Wf || this.ca == tg
};
function Dg(a, b) {
  K.sort.call(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  } || ob);
  a: {
    var c = a.A, d = !a.Ba, g, f = c.Sc;
    g = c.Nf;
    for(var i = c.Mf, l = [], n = m, q = 0, x = b.length;q < x;q++) {
      var r = b[q], z = r[0], r = r[1];
      if(z == f.Oa + 1) {
        f.Oa += 1;
        for(l.push(r);;) {
          z = f.Oa + 1;
          r = f.Ga.get(z, se);
          if(r === se) {
            break
          }
          l.push(r[0]);
          f.Ga.remove(z);
          f.M -= r[1];
          f.Oa = z
        }
      }else {
        if(!(z <= f.Oa)) {
          if(g != k && f.Ga.r() >= g) {
            n = j;
            break
          }
          var D = ke(r);
          if(i != k && f.M + D > i) {
            n = j;
            break
          }
          f.Ga.set(z, [r, D]);
          f.M += D
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
          }catch(Hc) {
            V(c.a, "onstring raised uncaught exception", Hc), hg(Hc)
          }
        }
        if(wg(c)) {
          break a
        }
      }
    }
    d || rg(c);
    !wg(c) && g && (U(a.a, a.l() + "'s peer caused rwin overflow."), a.b())
  }
}
function Eg(a, b, c) {
  try {
    var d = Kf(b);
    a.Tb += 1;
    W(a.a, a.l() + " RECV " + P(d));
    var g;
    1 == a.Tb && !d.Q(dg) && a.bb() ? (V(a.a, a.l() + " is closing soon because got bad preamble: " + P(d)), g = j) : g = m;
    if(g) {
      return j
    }
    if(d instanceof Af) {
      if(!/^([ -~]*)$/.test(d.vd)) {
        return a.ub = j
      }
      a.ic += 1;
      c.push([a.ic, d.vd])
    }else {
      if(d instanceof zf) {
        var f = a.A, i = d.Ca;
        f.qe = i;
        var l = f.ba, n = i.Wa;
        c = m;
        n > l.Ia && (c = j);
        for(var q = pe(l).concat(), d = 0;d < q.length;d++) {
          var x = q[d];
          if(x > n) {
            break
          }
          var r = l.I.get(x)[1];
          l.I.remove(x);
          l.M -= r
        }
        for(d = 0;d < i.Sa.length;d++) {
          var z = i.Sa[d];
          z > l.Ia && (c = j);
          l.I.da(z) && (r = l.I.get(z)[1], l.I.remove(z), l.M -= r)
        }
        l.I.Na() && l.I.clear();
        if(c) {
          return V(a.a, a.l() + " is closing soon because got bad SackFrame"), a.ub = j
        }
      }else {
        if(d instanceof Cf) {
          a.ic = d.Re - 1
        }else {
          if(d instanceof Ef) {
            a.A.re = d.pe
          }else {
            if(d instanceof Gf) {
              return X(a.a, a.l() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof Jf) {
              return a.ub = j, "stream_attach_failure" == d.reason ? a.ya += 1 : "acked_unsent_strings" == d.reason && (a.ya += 0.5), X(a.a, a.l() + " is closing soon because got " + P(d)), j
            }
            if(!(d instanceof Bf)) {
              if(d instanceof Ff) {
                var D = a.A, Hc = !a.Ba;
                X(D.a, "Stream is now confirmed to exist at server.");
                D.rd = j;
                D.ld && !Hc && (D.ld = m, mg(D))
              }else {
                if(c.length) {
                  Dg(a, c);
                  if(!ga(c)) {
                    for(var $d = c.length - 1;0 <= $d;$d--) {
                      delete c[$d]
                    }
                  }
                  c.length = 0
                }
                if(d instanceof Hf) {
                  var eg = a.A;
                  Ag(eg, d.Je, d.Fd);
                  eg.b();
                  return j
                }
                e(Error(a.l() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(fg) {
    return fg instanceof $ || e(fg), V(a.a, a.l() + " is closing soon because got InvalidFrame: " + P(b)), a.ub = j
  }
  return m
}
function lf(a, b) {
  a.sc = j;
  try {
    for(var c = m, d = [], g = 0, f = b.length;g < f;g++) {
      if(a.ea) {
        a.a.info(a.l() + " returning from loop because we're disposed.");
        return
      }
      if(c = Eg(a, b[g], d)) {
        break
      }
    }
    d.length && Dg(a, d);
    a.sc = m;
    a.v.length && a.ga();
    c && (X(a.a, a.l() + " closeSoon is true.  Frames were: " + P(b)), a.b())
  }finally {
    a.sc = m
  }
}
t.hg = function() {
  V(this.a, this.l() + " timed out due to lack of connection or no data being received.");
  this.b()
};
function Fg(a) {
  a.kc != k && (a.p.B.clearTimeout(a.kc), a.kc = k)
}
function Xf(a, b) {
  Fg(a);
  b = Math.round(b);
  a.kc = a.p.B.setTimeout(a.hf, b);
  W(a.a, a.l() + "'s receive timeout set to " + b + " ms.")
}
function kf(a) {
  a.ca != Wf && (a.ca == ug || a.ca == tg ? Xf(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ca)))
}
function og(a) {
  var b = new xf;
  b.ja = a.ja;
  b.Ge = 2;
  b.ge = 2;
  a.A.rd || (b.Le = j);
  b.Gb = a.A.Gb;
  b.td = a.Ba;
  b.td && (b.ye = 4096);
  b.we = 3E5;
  b.ue = a.Ba ? Math.floor(10) : 0;
  b.$e = m;
  a.ma && (b.We = k, b.Yc = Math.floor((a.Ba ? 358E4 : 25E3) / 1E3));
  b.Ca = re(a.A.Sc);
  b.dc = a.A.qe;
  a.v.push(b);
  a.eb = b.Ca
}
function mf(a, b) {
  b && (a.ya += 0.5);
  a.b()
}
t.ga = function() {
  this.ia && !this.Ha && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.sc) {
    X(this.a, this.l() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.ia;
    this.ia = j;
    !a && !this.v.length && og(this);
    for(a = 0;a < this.v.length;a++) {
      W(this.a, this.l() + " SEND " + P(this.v[a]))
    }
    if(this.bb()) {
      for(var a = [], b = 0, c = this.v.length;b < c;b++) {
        this.v[b].T(a), a.push("\n")
      }
      this.v = [];
      a = a.join("");
      b = this.ma ? this.t.aa : this.t.Ea;
      this.k = Yf.Hc(this, this.ma ? this.t.Fe : this.t.Qe);
      this.yd = this.p.B === tc ? C() : this.p.B.getTime();
      this.k.Xc(b, "POST", a);
      Xf(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Ba ? 0 : this.ma ? 25E3 : 0))
    }else {
      if(this.ca == ug) {
        a = [];
        b = 0;
        for(c = this.v.length;b < c;b++) {
          a.push(this.v[b].P())
        }
        this.v = [];
        this.k ? this.k.Jb(a) : (b = this.t, this.k = new of(this), c = b.jg.Hc(this.k), this.k.rc = c, this.yd = this.p.B === tc ? C() : this.p.B.getTime(), this.k.Fc(b.host, b.port), this.k.ea || (this.k.Jb(a), this.k.ea || Xf(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.ca))
      }
    }
  }
};
function pg(a, b, c) {
  !a.ia && !a.v.length && og(a);
  var d = Math.max(c, a.gb + 1), g = pe(b);
  c = [];
  for(var f = 0;f < g.length;f++) {
    var i = g[f];
    (d == k || i >= d) && c.push([i, b.I.get(i)[0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    f = c[b], g = f[0], f = f[1], (-1 == a.gb || a.gb + 1 != g) && a.v.push(new Cf(g)), a.v.push(new Af(f)), a.gb = g
  }
}
t.c = function() {
  this.a.info(this.l() + " in disposeInternal.");
  vg.g.c.call(this);
  this.Ze = this.p.B === tc ? C() : this.p.B.getTime();
  this.v = [];
  Fg(this);
  this.k && this.k.b();
  var a = this.A;
  this.A = k;
  zg(a, this)
};
function Bg(a, b) {
  !a.ia && !a.v.length && og(a);
  a.v.push(new Hf(b, j));
  a.cf = j
}
function yg(a, b, c, d) {
  L.call(this);
  this.p = a;
  this.A = b;
  this.Qd = c;
  this.Md = d
}
E(yg, L);
t = yg.prototype;
t.ia = m;
t.Ha = m;
t.Yb = k;
t.eb = k;
t.a = Y("cw.net.DoNothingTransport");
function Gg(a) {
  a.Yb = a.p.B.setTimeout(function() {
    a.Yb = k;
    a.Md--;
    a.Md ? Gg(a) : a.b()
  }, a.Qd)
}
t.ga = function() {
  this.ia && !this.Ha && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.ia = j;
  Gg(this)
};
t.F = function(a) {
  a.push("<DoNothingTransport delay=", String(this.Qd), ">")
};
t.bb = s(m);
t.l = s("Wast. T");
t.Kd = s(m);
t.c = function() {
  this.a.info(this.l() + " in disposeInternal.");
  yg.g.c.call(this);
  this.Yb != k && this.p.B.clearTimeout(this.Yb);
  var a = this.A;
  this.A = k;
  zg(a, this)
};
/*

 linkify - v0.3 - 6/27/2009
 http://benalman.com/code/test/js-linkify/

 Copyright (c) 2009 "Cowboy" Ben Alman
 Licensed under the MIT license
 http://benalman.com/about/license/

 Some regexps adapted from http://userscripts.org/scripts/review/7122
*/
var Hg, Ig, Jg, Kg;
Hg = RegExp("(?:\\b[a-z\\d.-]+://[^<>\\s]+|\\b(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:[;/][^#?<>\\s]*)?(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w)|(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w))", 
"ig");
Ig = /^[a-z\d.-]+:\/\//i;
Jg = {"'":"`", ">":"<", ")":"(", "]":"[", "}":"{", "\u00bb":"\u00ab", "\u203a":"\u2039"};
Kg = {X:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, Ie:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
function Lg(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
;function Mg() {
}
Mg.prototype.Kb = k;
var Ng;
function Og() {
}
E(Og, Mg);
function Pg(a) {
  return(a = Qg(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Rg(a) {
  var b = {};
  Qg(a) && (b[0] = j, b[1] = j);
  return b
}
function Qg(a) {
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
Ng = new Og;
function Sg(a) {
  L.call(this);
  this.headers = new ub;
  this.nb = a || k
}
E(Sg, sc);
Sg.prototype.a = Y("goog.net.XhrIo");
var Tg = /^https?$/i;
t = Sg.prototype;
t.la = m;
t.i = k;
t.wc = k;
t.ec = "";
t.oe = "";
t.wb = 0;
t.xb = "";
t.Jc = m;
t.ac = m;
t.Rc = m;
t.La = m;
t.tc = 0;
t.Ta = k;
t.Oe = "";
t.pg = m;
t.send = function(a, b, c, d) {
  this.i && e(Error("[goog.net.XhrIo] Object is active with another request=" + this.ec + "; newUri=" + a));
  b = b ? b.toUpperCase() : "GET";
  this.ec = a;
  this.xb = "";
  this.wb = 0;
  this.oe = b;
  this.Jc = m;
  this.la = j;
  this.i = this.nb ? Pg(this.nb) : Pg(Ng);
  this.wc = this.nb ? this.nb.Kb || (this.nb.Kb = Rg(this.nb)) : Ng.Kb || (Ng.Kb = Rg(Ng));
  this.i.onreadystatechange = B(this.Ce, this);
  try {
    W(this.a, Ug(this, "Opening Xhr")), this.Rc = j, this.i.open(b, a, j), this.Rc = m
  }catch(g) {
    W(this.a, Ug(this, "Error opening Xhr: " + g.message));
    Vg(this, g);
    return
  }
  a = c || "";
  var f = this.headers.O();
  d && sb(d, function(a, b) {
    f.set(b, a)
  });
  d = u.FormData && a instanceof u.FormData;
  "POST" == b && (!f.da("Content-Type") && !d) && f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  sb(f, function(a, b) {
    this.i.setRequestHeader(b, a)
  }, this);
  this.Oe && (this.i.responseType = this.Oe);
  "withCredentials" in this.i && (this.i.withCredentials = this.pg);
  try {
    this.Ta && (tc.clearTimeout(this.Ta), this.Ta = k), 0 < this.tc && (W(this.a, Ug(this, "Will abort after " + this.tc + "ms if incomplete")), this.Ta = tc.setTimeout(B(this.ig, this), this.tc)), W(this.a, Ug(this, "Sending request")), this.ac = j, this.i.send(a), this.ac = m
  }catch(i) {
    W(this.a, Ug(this, "Send error: " + i.message)), Vg(this, i)
  }
};
t.ig = function() {
  "undefined" != typeof ca && this.i && (this.xb = "Timed out after " + this.tc + "ms, aborting", this.wb = 8, W(this.a, Ug(this, this.xb)), this.dispatchEvent("timeout"), this.abort(8))
};
function Vg(a, b) {
  a.la = m;
  a.i && (a.La = j, a.i.abort(), a.La = m);
  a.xb = b;
  a.wb = 5;
  Wg(a);
  Xg(a)
}
function Wg(a) {
  a.Jc || (a.Jc = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
t.abort = function(a) {
  this.i && this.la && (W(this.a, Ug(this, "Aborting")), this.la = m, this.La = j, this.i.abort(), this.La = m, this.wb = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Xg(this))
};
t.c = function() {
  this.i && (this.la && (this.la = m, this.La = j, this.i.abort(), this.La = m), Xg(this, j));
  Sg.g.c.call(this)
};
t.Ce = function() {
  !this.Rc && !this.ac && !this.La ? this.Rf() : Yg(this)
};
t.Rf = function() {
  Yg(this)
};
function Yg(a) {
  if(a.la && "undefined" != typeof ca) {
    if(a.wc[1] && 4 == a.ua() && 2 == Zg(a)) {
      W(a.a, Ug(a, "Local request error detected and ignored"))
    }else {
      if(a.ac && 4 == a.ua()) {
        tc.setTimeout(B(a.Ce, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.ua()) {
          W(a.a, Ug(a, "Request complete"));
          a.la = m;
          try {
            var b = Zg(a), c, d;
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
                case 206:
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
                var f = String(a.ec).match(Xa)[1] || k;
                if(!f && self.location) {
                  var i = self.location.protocol, f = i.substr(0, i.length - 1)
                }
                g = !Tg.test(f ? f.toLowerCase() : "")
              }
              c = g
            }
            if(c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success")
            }else {
              a.wb = 6;
              var l;
              try {
                l = 2 < a.ua() ? a.i.statusText : ""
              }catch(n) {
                W(a.a, "Can not get status: " + n.message), l = ""
              }
              a.xb = l + " [" + Zg(a) + "]";
              Wg(a)
            }
          }finally {
            Xg(a)
          }
        }
      }
    }
  }
}
function Xg(a, b) {
  if(a.i) {
    var c = a.i, d = a.wc[0] ? v : k;
    a.i = k;
    a.wc = k;
    a.Ta && (tc.clearTimeout(a.Ta), a.Ta = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(g) {
      U(a.a, "Problem encountered resetting onreadystatechange: " + g.message)
    }
  }
}
t.ke = function() {
  return!!this.i
};
t.ua = function() {
  return this.i ? this.i.readyState : 0
};
function Zg(a) {
  try {
    return 2 < a.ua() ? a.i.status : -1
  }catch(b) {
    return V(a.a, "Can not get status: " + b.message), -1
  }
}
t.getResponseHeader = function(a) {
  return this.i && 4 == this.ua() ? this.i.getResponseHeader(a) : h
};
function Ug(a, b) {
  return b + " [" + a.oe + " " + a.ec + " " + Zg(a) + "]"
}
;var $g = !(G || H && !I("420+"));
function ah(a, b) {
  this.uc = a;
  this.W = b
}
E(ah, L);
t = ah.prototype;
t.k = k;
t.Aa = -1;
t.Xd = m;
t.fe = "Content-Length Server Date Expires Keep-Alive Content-Type Transfer-Encoding Cache-Control".split(" ");
function bh(a) {
  var b = Uf(a.Od), c = b[0], b = b[1], d = u.parent;
  d ? (d.__XHRMaster_onframes(a.W, c, b), 1 != b && a.b()) : a.b()
}
t.If = function() {
  bh(this);
  if(!this.ea) {
    var a = u.parent;
    a && a.__XHRMaster_oncomplete(this.W);
    this.b()
  }
};
t.Vf = function() {
  var a = u.parent;
  if(a) {
    this.Aa = this.k.ua();
    if(2 <= this.Aa && !this.Xd) {
      for(var b = new ub, c = this.fe.length;c--;) {
        var d = this.fe[c];
        try {
          b.set(d, this.k.i.getResponseHeader(d))
        }catch(g) {
        }
      }
      if(b.r() && (this.Xd = j, a.__XHRMaster_ongotheaders(this.W, yb(b)), this.ea)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.W, this.Aa);
    $g && 3 == this.Aa && bh(this)
  }else {
    this.b()
  }
};
t.Xc = function(a, b, c) {
  this.k = new Sg;
  N(this.k, "readystatechange", B(this.Vf, this));
  N(this.k, "complete", B(this.If, this));
  this.k.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Od = new Tf(this.k.i, 1048576)
};
t.c = function() {
  ah.g.c.call(this);
  delete this.Od;
  this.k && this.k.b();
  delete this.uc.Fb[this.W];
  delete this.uc
};
function ch() {
  L.call(this);
  this.Fb = {}
}
E(ch, L);
ch.prototype.Lf = function(a, b, c, d) {
  var g = new ah(this, a);
  this.Fb[a] = g;
  g.Xc(b, c, d)
};
ch.prototype.tf = function(a) {
  (a = this.Fb[a]) && a.b()
};
ch.prototype.c = function() {
  ch.g.c.call(this);
  for(var a = $a(this.Fb);a.length;) {
    a.pop().b()
  }
  delete this.Fb
};
var dh = new ch;
u.__XHRSlave_makeRequest = B(dh.Lf, dh);
u.__XHRSlave_dispose = B(dh.tf, dh);
var eh = Y("cw.net.demo");
function fh() {
}
fh.prototype.Wd = function() {
  return Boolean(Number((new zb(document.location)).K.get("httpStreaming", "0"))) ? 2 : 1
};
function gh() {
  this.Ke = C()
}
var hh = new gh;
gh.prototype.set = ba("Ke");
gh.prototype.reset = function() {
  this.set(C())
};
gh.prototype.get = p("Ke");
function ih(a) {
  this.jd = a || "";
  this.dg = hh
}
ih.prototype.$f = j;
ih.prototype.bg = j;
ih.prototype.ag = j;
ih.prototype.Se = m;
function jh(a) {
  return 10 > a ? "0" + a : String(a)
}
function kh(a, b) {
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
function lh(a) {
  ih.call(this, a)
}
E(lh, ih);
lh.prototype.Se = j;
function mh(a) {
  this.Zc = a || 100;
  this.na = []
}
t = mh.prototype;
t.yb = 0;
t.add = function(a) {
  this.na[this.yb] = a;
  this.yb = (this.yb + 1) % this.Zc
};
t.get = function(a) {
  a = nh(this, a);
  return this.na[a]
};
t.set = function(a, b) {
  a = nh(this, a);
  this.na[a] = b
};
t.r = function() {
  return this.na.length
};
t.Na = function() {
  return 0 == this.na.length
};
t.clear = function() {
  this.yb = this.na.length = 0
};
t.D = function() {
  for(var a = this.r(), b = this.r(), c = [], a = this.r() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
t.Z = function() {
  for(var a = [], b = this.r(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
t.da = function(a) {
  return a < this.r()
};
t.Nb = function(a) {
  for(var b = this.r(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return j
    }
  }
  return m
};
function nh(a, b) {
  b >= a.na.length && e(Error("Out of bounds exception"));
  return a.na.length < a.Zc ? b : (a.yb + Number(b)) % a.Zc
}
;function oh(a, b) {
  this.va = a || "";
  this.jd = b || "";
  this.hb = [];
  this.nc = new mh(ph);
  this.Uf = B(this.ff, this);
  this.Bf = new lh(this.jd);
  this.yf = {};
  if(j != this.le) {
    this.le = j;
    var c = df(), d = this.Uf;
    c.vb || (c.vb = []);
    c.vb.push(d)
  }
  this.rb = "1" == qh(this.va, "enabled");
  u.setInterval(B(this.Yf, this), 7500)
}
var ph = 500;
t = oh.prototype;
t.bf = "LOGGING";
t.vf = m;
t.w = k;
t.Cd = m;
t.le = m;
t.Hd = k;
t.Vc = C();
t.Ma = function() {
  this.rb && rh(this)
};
t.isEnabled = p("rb");
t.pc = function(a) {
  (this.rb = a) && rh(this);
  sh(this, "enabled", a ? "1" : "0")
};
function th(a) {
  return!!a.w && !a.w.closed
}
t.mf = function() {
  this.nc.clear();
  th(this) && this.Ed()
};
t.ff = function(a) {
  if(!this.yf[a.te]) {
    var b = this.Bf, c;
    switch(a.V.value) {
      case Pe.value:
        c = "dbg-sh";
        break;
      case Qe.value:
        c = "dbg-sev";
        break;
      case Re.value:
        c = "dbg-w";
        break;
      case Se.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.jd, " ");
    if(b.$f) {
      var g = new Date(a.Xe);
      d.push("[", jh(g.getFullYear() - 2E3) + jh(g.getMonth() + 1) + jh(g.getDate()) + " " + jh(g.getHours()) + ":" + jh(g.getMinutes()) + ":" + jh(g.getSeconds()) + "." + jh(Math.floor(g.getMilliseconds() / 10)), "] ")
    }
    b.bg && d.push("[", ya(kh(a, b.dg.get())), "s] ");
    b.ag && d.push("[", F(a.te), "] ");
    d.push('<span class="', c, '">', sa(ya(F(a.xe))));
    b.Se && a.Mc && d.push("<br>", sa(ya(a.Lc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.rb ? (rh(this), this.nc.add(b), uh(this, b)) : this.nc.add(b);
    this.vf && a.V.value >= Qe.value && this.pc(j)
  }
};
function uh(a, b) {
  a.hb.push(b);
  u.clearTimeout(a.Hd);
  750 < C() - a.Vc ? a.Dd() : a.Hd = u.setTimeout(B(a.Dd, a), 250)
}
t.Dd = function() {
  this.Vc = C();
  if(th(this)) {
    var a = this.w.document.body, a = a && 100 >= a.scrollHeight - (a.scrollTop + a.clientHeight);
    this.w.document.write(this.hb.join(""));
    this.hb.length = 0;
    a && this.w.scrollTo(0, 1E6)
  }
};
function vh(a) {
  for(var b = a.nc.D(), c = 0;c < b.length;c++) {
    uh(a, b[c])
  }
}
function rh(a) {
  if(!th(a) && !a.Cd) {
    var b = qh(a.va, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), g = Number(b[2]), b = Number(b[3]);
    a.Cd = j;
    a.w = window.open("", G ? a.va.replace(/[\s\-\.\,]/g, "_") : a.va, "width=" + g + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    !a.w && !a.cg && (alert("Logger popup was blocked"), a.cg = j);
    a.Cd = m;
    a.w && a.Ed()
  }
}
t.Vb = s("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
t.Ed = function() {
  th(this) && (this.w.document.open(), uh(this, "<style>" + this.Vb() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.bf + "<br><small>Logger: " + this.va + "</small></div><hr>"), vh(this))
};
function sh(a, b, c) {
  a = (b + a.va).replace(/[;=\s]/g, "_");
  document.cookie = a + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(C() + 2592E6)).toUTCString()
}
function qh(a, b, c) {
  a = (b + a).replace(/[;=\s]/g, "_");
  b = String(document.cookie);
  var d = b.indexOf(a + "=");
  return-1 != d ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, -1 == c ? b.length : c))) : c || ""
}
t.Yf = function() {
  th(this) && sh(this, "dbg", (this.w.screenX || this.w.screenLeft || 0) + "," + (this.w.screenY || this.w.screenTop || 0) + "," + (this.w.outerWidth || 800) + "," + (this.w.outerHeight || 500))
};
function wh(a, b) {
  if(xh) {
    var c = yh(), d;
    for(d in c) {
      var c = d.replace("fancywindow.sel.", ""), c = Y(c), g = c.V, f = window.localStorage.getItem(d).toString();
      (!g || g.toString() != f) && c.kb(Ze(f))
    }
  }
  oh.call(this, a, b)
}
E(wh, oh);
var xh;
a: {
  try {
    xh = !!window.localStorage.getItem;
    break a
  }catch(zh) {
  }
  xh = m
}
t = wh.prototype;
t.Dd = function() {
  this.Vc = C();
  if(th(this)) {
    for(var a = this.G.e("log"), b = 100 >= a.scrollHeight - (a.scrollTop + a.offsetHeight), c = 0;c < this.hb.length;c++) {
      var d = this.G.n("div", "logmsg");
      d.innerHTML = this.hb[c];
      a.appendChild(d)
    }
    this.hb.length = 0;
    this.Ne();
    b && (a.scrollTop = a.scrollHeight)
  }
};
t.Ed = function() {
  if(th(this)) {
    var a = this.w.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.va + "</title><style>" + this.Vb() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.va + "</b></p><p>" + this.bf + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (G ? a.body : this.w).onresize = B(this.Ne, this);
    this.G = new $c(a);
    this.G.e("openbutton").onclick = B(this.Sf, this);
    this.G.e("closebutton").onclick = B(this.nf, this);
    this.G.e("clearbutton").onclick = B(this.mf, this);
    this.G.e("exitbutton").onclick = B(this.wf, this);
    vh(this)
  }
};
t.Sf = function() {
  var a = this.G.e("optionsarea");
  a.innerHTML = "";
  for(var b = Ah(), c = this.G, d = 0;d < b.length;d++) {
    var g = Y(b[d]), g = c.n("div", {}, Bh(this, "sel" + b[d], g.V ? g.V.name : "INHERIT"), c.n("span", {}, b[d] || "(root)"));
    a.appendChild(g)
  }
  this.G.e("options").style.display = "block";
  return m
};
function Bh(a, b, c) {
  a = a.G;
  b = a.n("select", {id:b});
  for(var d = 0;d < Xe.length;d++) {
    var g = Xe[d], f = a.n("option", {}, g.name);
    c == g.name && (f.selected = j);
    b.appendChild(f)
  }
  b.appendChild(a.n("option", {selected:"INHERIT" == c}, "INHERIT"));
  return b
}
t.nf = function() {
  this.G.e("options").style.display = "none";
  for(var a = Ah(), b = this.G, c = 0;c < a.length;c++) {
    var d = Y(a[c]), g = b.e("sel" + a[c]), g = g.options[g.selectedIndex].text;
    "INHERIT" == g ? d.kb(k) : d.kb(Ze(g))
  }
  if(xh) {
    a = Ah();
    b = yh();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], g = Y(a[c]).V, d in b ? g ? window.localStorage.getItem(d) != g.name && window.localStorage.setItem(d, g.name) : window.localStorage.removeItem(d) : g && window.localStorage.setItem(d, g.name)
    }
  }
  return m
};
t.Ne = function() {
  var a = this.G, b = a.e("log"), c = a.e("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.fa.body.offsetHeight - c.offsetHeight - (G ? 4 : 0) + "px"
};
t.wf = function() {
  this.pc(m);
  this.w && this.w.close()
};
t.Vb = function() {
  return wh.g.Vb.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function yh() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != k && 0 == d.lastIndexOf("fancywindow.sel.", 0) && (a[d] = j)
  }
  return a
}
function Ah() {
  var a = ab(af);
  a.sort();
  return a
}
;var Ch, Dh = Y("ljstream.logger");
window.onerror = function(a, b, c) {
  U(Dh, "window.onerror: message: " + P(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Eh() {
}
Eh.prototype.Ue = function(a) {
  this.A = a;
  sg(this.A, "subprotocol:ljstream");
  Fh(this)
};
Eh.prototype.Te = function(a, b) {
  Dh.info("streamReset: reasonString=" + P(a) + ", applicationLevel=" + b);
  Gh("Disconnected from server.  Try reloading this page.");
  Hh = k
};
function Fh(a) {
  Dh.info("Sending preferences to server");
  sg(a.A, Ic(["SetPreferences", {include_russian_posts:Q("include_russian_posts").checked}]))
}
Eh.prototype.Ve = function(a) {
  a = Lg(a);
  var b = a[1];
  if("NewPost" == a[0]) {
    a = b.title;
    var c = b.url, b = b.body;
    (a = ra(a)) || (a = "[No title]");
    var b = F(b), d;
    d = d || {};
    var g = [], f, i;
    for(i in Kg) {
      w(d[i]) || (d[i] = Kg[i])
    }
    for(;i = Hg.exec(b);) {
      i = i[0];
      var l = Hg.lastIndex, n = l - i.length;
      if(!/[\/:]/.test(b.charAt(n - 1))) {
        do {
          var q = i, x = i.substr(-1), r = Jg[x];
          if(r && (r = i.match(RegExp("\\" + r + "(?!$)", "g")), x = i.match(RegExp("\\" + x, "g")), (r ? r.length : 0) < (x ? x.length : 0))) {
            i = i.substr(0, i.length - 1), l--
          }
          d.Ie && (i = i.replace(d.Ie, function(a) {
            l -= a.length;
            return""
          }))
        }while(i.length && i !== q);
        q = i;
        Ig.test(q) || (q = (-1 !== q.indexOf("@") ? !q.indexOf("mailto:") ? "" : "mailto:" : !q.indexOf("irc.") ? "irc://" : !q.indexOf("ftp.") ? "ftp://" : "http://") + q);
        f != n && (g.push([b.slice(f, n)]), f = l);
        g.push([i, q])
      }
    }
    g.push([b.substr(f)]);
    f = "";
    for(i = 0;i < g.length;i++) {
      f += d.X.apply(u, g[i])
    }
    f = f || b;
    b = document;
    d = b.createElement("div");
    G ? (d.innerHTML = "<br>" + f, d.removeChild(d.firstChild)) : d.innerHTML = f;
    if(1 == d.childNodes.length) {
      d = d.removeChild(d.firstChild)
    }else {
      for(f = b.createDocumentFragment();d.firstChild;) {
        f.appendChild(d.firstChild)
      }
      d = f
    }
    a = cd("span", {}, cd("a", {href:c, "class":"ljpost-title-link"}, a), cd("span", {}, "\u00a0"), d);
    Ih(a)
  }
};
Eh.prototype.reset = function(a) {
  Dh.info("resetting with reason: " + a);
  this.A.reset(a)
};
var Hh = k, Jh = new Ec(u.window);
function Gh(a) {
  a = cd("span", {"class":"important-message"}, a);
  Ih(a)
}
function Kh() {
  Hh && (Hh.reset("idle timeout fired"), Hh = k, Gh("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var Lh = k;
function Mh() {
  Lh != k && Jh.B.clearTimeout(Lh);
  Hh && (Lh = Jh.B.setTimeout(Kh, 6E5))
}
N(window, ["click", "focus", "keydown", "keypress"], Mh, j);
var md = new $c, Nh = 0;
function Ih(a) {
  a = cd("div", {"class":"row-" + (0 == Nh % 2 ? "even" : "odd")}, cd("nobr", {}, a));
  Q("ljstream-container-inner").appendChild(a);
  Nh += 1;
  if(Ch) {
    var b = a;
    a = b.offsetTop;
    for(var c = b.offsetHeight;b.offsetParent;) {
      b = b.offsetParent, a += b.offsetTop
    }
    var d = document, b = !H && "CSS1Compat" == d.compatMode ? d.documentElement : d.body, d = d.parentWindow || d.defaultView;
    a + c <= (new Qc(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop)).y + ld().height || window.scrollBy(0, Math.round(ld().height / 2) + 80)
  }
}
function Oh() {
  df().kb(We);
  if("1" == (new zb(document.location)).K.get("logging")) {
    var a = new wh("main");
    a.pc(j);
    a.Ma()
  }
  Dh.info("Logger works.");
  N(u, "load", function() {
    window.scrollTo(0, 0)
  });
  N(Q("include_russian_posts"), "click", function() {
    Fh(Hh)
  });
  Ch = j;
  N(Q("automatic_scroll"), "click", function(a) {
    Ch = a.target.checked
  });
  a = new de("Clear posts");
  Sd(a, "clear-posts-button");
  yd(a, Q("prefs"));
  N(a, "action", function() {
    Q("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = Q("ljstream-container");
  a.style.marginTop = Q("demo-header").offsetHeight + "px";
  Q("demo-header").style.width = "9000px";
  var b = cd("div", {id:"ljstream-container-inner"});
  a.appendChild(b);
  a = new fh;
  Hh = new Eh;
  Mh();
  var c = (new zb(document.location)).K, b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !u.__demo_shared_domain) {
    V(eh, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new zb(document.location);
  b ? b = new $f("/_minerva/", c.pa, u.__demo_mainSocketPort) : (d ? (b = u.__demo_shared_domain, y(b) || e(Error("domain was " + P(b) + "; expected a string.")), c = c.O(), Cb(c, "_____random_____." + b)) : c = c.O(), Eb(c, "/_minerva/"), Fb(c, "", h), b = new bg(c.toString().replace("_____random_____", "%random%")));
  a = new kg(b, a, Jh);
  b = Hh;
  w(b.Ue) || e(Error("Protocol is missing required method streamStarted"));
  w(b.Te) || e(Error("Protocol is missing required method streamReset"));
  w(b.Ve) || e(Error("Protocol is missing required method stringReceived"));
  a.dd = B(b.Ue, b);
  a.onreset = B(b.Te, b);
  a.ed = B(b.Ve, b);
  a.fd = w(b.kg) ? B(b.kg, b) : k;
  a.gd = w(b.lg) ? B(b.lg, b) : k;
  a.start()
}
var Ph = ["__ljstream_init"], Qh = u;
!(Ph[0] in Qh) && Qh.execScript && Qh.execScript("var " + Ph[0]);
for(var Rh;Ph.length && (Rh = Ph.shift());) {
  !Ph.length && w(Oh) ? Qh[Rh] = Oh : Qh = Qh[Rh] ? Qh[Rh] : Qh[Rh] = {}
}
;
})();
