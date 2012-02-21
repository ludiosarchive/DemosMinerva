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
  a.Ya = function() {
    return a.Bf || (a.Bf = new a)
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
function ga(a) {
  return a !== h
}
function u(a) {
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
function x(a) {
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
function y(a, b, c) {
  y = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
  return y.apply(k, arguments)
}
function pa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var A = Date.now || function() {
  return+new Date
};
function B(a, b) {
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
var sa = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function ta(a) {
  a = "" + a;
  return!sa.test(a) ? encodeURIComponent(a) : a
}
function ua(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function C(a) {
  if(!va.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(wa, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(xa, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(ya, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(za, "&quot;"));
  return a
}
var wa = /&/g, xa = /</g, ya = />/g, za = /\"/g, va = /[&<>\"]/;
function Aa(a) {
  return ua(a.replace(/  /g, " &#160;"), h)
}
function Ba(a, b) {
  for(var c = 0, d = ra("" + a).split("."), e = ra("" + b).split("."), g = Math.max(d.length, e.length), i = 0;0 == c && i < g;i++) {
    var l = d[i] || "", n = e[i] || "", q = RegExp("(\\d*)(\\D*)", "g"), H = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = q.exec(l) || ["", "", ""], w = H.exec(n) || ["", "", ""];
      if(0 == r[0].length && 0 == w[0].length) {
        break
      }
      c = ((0 == r[1].length ? 0 : parseInt(r[1], 10)) < (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? -1 : (0 == r[1].length ? 0 : parseInt(r[1], 10)) > (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? 1 : 0) || ((0 == r[2].length) < (0 == w[2].length) ? -1 : (0 == r[2].length) > (0 == w[2].length) ? 1 : 0) || (r[2] < w[2] ? -1 : r[2] > w[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
}
;var Ca, Da, Ea, Fa, Ga;
function Ha() {
  return t.navigator ? t.navigator.userAgent : k
}
Ga = Fa = Ea = Da = Ca = m;
var Ia;
if(Ia = Ha()) {
  var Ja = t.navigator;
  Ca = 0 == Ia.indexOf("Opera");
  Da = !Ca && -1 != Ia.indexOf("MSIE");
  Fa = (Ea = !Ca && -1 != Ia.indexOf("WebKit")) && -1 != Ia.indexOf("Mobile");
  Ga = !Ca && !Ea && "Gecko" == Ja.product
}
var Ka = Ca, D = Da, La = Ga, E = Ea, Ma = Fa, Na = t.navigator, Oa = -1 != (Na && Na.platform || "").indexOf("Mac"), Pa;
a: {
  var Qa = "", Ra;
  if(Ka && t.opera) {
    var Sa = t.opera.version, Qa = "function" == typeof Sa ? Sa() : Sa
  }else {
    if(La ? Ra = /rv\:([^\);]+)(\)|;)/ : D ? Ra = /MSIE\s+([^\);]+)(\)|;)/ : E && (Ra = /WebKit\/(\S+)/), Ra) {
      var Ta = Ra.exec(Ha()), Qa = Ta ? Ta[1] : ""
    }
  }
  if(D) {
    var Ua, Va = t.document;
    Ua = Va ? Va.documentMode : h;
    if(Ua > parseFloat(Qa)) {
      Pa = "" + Ua;
      break a
    }
  }
  Pa = Qa
}
var Wa = {};
function F(a) {
  return Wa[a] || (Wa[a] = 0 <= Ba(Pa, a))
}
var Xa = {};
function Ya() {
  return Xa[9] || (Xa[9] = D && !!document.documentMode && 9 <= document.documentMode)
}
;function G(a) {
  this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
B(G, Error);
G.prototype.name = "CustomError";
function Za(a, b) {
  b.unshift(a);
  G.call(this, qa.apply(k, b));
  b.shift()
}
B(Za, G);
Za.prototype.name = "AssertionError";
function $a(a, b) {
  f(new Za("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var ab = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function bb(a, b) {
  var c = a.match(ab), d = b.match(ab);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function cb(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
function db(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function eb(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var fb = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function gb(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < fb.length;g++) {
      c = fb[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var I = Array.prototype, hb = I.indexOf ? function(a, b, c) {
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
}, ib = I.forEach ? function(a, b, c) {
  I.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
}, jb = I.filter ? function(a, b, c) {
  return I.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = [], g = 0, i = v(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in i) {
      var n = i[l];
      b.call(c, n, l, a) && (e[g++] = n)
    }
  }
  return e
}, kb = I.map ? function(a, b, c) {
  return I.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), g = v(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in g && (e[i] = b.call(c, g[i], i, a))
  }
  return e
}, lb = I.some ? function(a, b, c) {
  return I.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && b.call(c, e[g], g, a)) {
      return j
    }
  }
  return m
}, mb = I.every ? function(a, b, c) {
  return I.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && !b.call(c, e[g], g, a)) {
      return m
    }
  }
  return j
};
function nb(a, b) {
  return 0 <= hb(a, b)
}
function ob(a, b) {
  var c = hb(a, b);
  0 <= c && I.splice.call(a, c, 1)
}
function pb(a) {
  return I.concat.apply(I, arguments)
}
function qb(a) {
  if(u(a)) {
    return pb(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
}
function rb(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], e;
    if(u(d) || (e = ha(d)) && d.hasOwnProperty("callee")) {
      a.push.apply(a, d)
    }else {
      if(e) {
        for(var g = a.length, i = d.length, l = 0;l < i;l++) {
          a[g + l] = d[l]
        }
      }else {
        a.push(d)
      }
    }
  }
}
function sb(a, b, c) {
  return 2 >= arguments.length ? I.slice.call(a, b) : I.slice.call(a, b, c)
}
function tb(a, b) {
  I.sort.call(a, b || ub)
}
function ub(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function vb(a) {
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
function wb(a) {
  if("function" == typeof a.G) {
    return a.G()
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
  return db(a)
}
function xb(a) {
  if("function" == typeof a.ca) {
    return a.ca()
  }
  if("function" != typeof a.G) {
    if(ha(a) || v(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return eb(a)
  }
}
function yb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ha(a) || v(a)) {
      ib(a, b, c)
    }else {
      for(var d = xb(a), e = wb(a), g = e.length, i = 0;i < g;i++) {
        b.call(c, e[i], d && d[i], a)
      }
    }
  }
}
function zb(a, b) {
  if("function" == typeof a.every) {
    return a.every(b, h)
  }
  if(ha(a) || v(a)) {
    return mb(a, b, h)
  }
  for(var c = xb(a), d = wb(a), e = d.length, g = 0;g < e;g++) {
    if(!b.call(h, d[g], c && c[g], a)) {
      return m
    }
  }
  return j
}
;function J(a, b) {
  this.p = {};
  this.j = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && f(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.yc(a)
  }
}
s = J.prototype;
s.f = 0;
s.r = o("f");
s.G = function() {
  Ab(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.p[this.j[b]])
  }
  return a
};
s.ca = function() {
  Ab(this);
  return this.j.concat()
};
s.U = function(a) {
  return Bb(this.p, a)
};
s.Rb = function(a) {
  for(var b = 0;b < this.j.length;b++) {
    var c = this.j[b];
    if(Bb(this.p, c) && this.p[c] == a) {
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
  var c = b || Cb;
  Ab(this);
  for(var d, e = 0;d = this.j[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function Cb(a, b) {
  return a === b
}
s.Ma = function() {
  return 0 == this.f
};
s.clear = function() {
  this.p = {};
  this.f = this.j.length = 0
};
s.remove = function(a) {
  return Bb(this.p, a) ? (delete this.p[a], this.f--, this.j.length > 2 * this.f && Ab(this), j) : m
};
function Ab(a) {
  if(a.f != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      Bb(a.p, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.f != a.j.length) {
    for(var e = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], Bb(e, d) || (a.j[c++] = d, e[d] = 1), b++
    }
    a.j.length = c
  }
}
s.get = function(a, b) {
  return Bb(this.p, a) ? this.p[a] : b
};
s.set = function(a, b) {
  Bb(this.p, a) || (this.f++, this.j.push(a));
  this.p[a] = b
};
s.yc = function(a) {
  var b;
  a instanceof J ? (b = a.ca(), a = a.G()) : (b = eb(a), a = db(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
s.J = function() {
  return new J(this)
};
function Db(a) {
  Ab(a);
  for(var b = {}, c = 0;c < a.j.length;c++) {
    var d = a.j[c];
    b[d] = a.p[d]
  }
  return b
}
function Bb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function K(a, b) {
  var c;
  a instanceof K ? (this.kb(b == k ? a.ea : b), Eb(this, a.ha), Fb(this, a.Sa), Gb(this, a.V), Hb(this, a.Aa), Ib(this, a.S), Jb(this, a.H.J()), Kb(this, a.Ia)) : a && (c = ("" + a).match(ab)) ? (this.kb(!!b), Eb(this, c[1] || "", j), Fb(this, c[2] || "", j), Gb(this, c[3] || "", j), Hb(this, c[4]), Ib(this, c[5] || "", j), Jb(this, c[6] || "", j), Kb(this, c[7] || "", j)) : (this.kb(!!b), this.H = new Lb(k, this, this.ea))
}
s = K.prototype;
s.ha = "";
s.Sa = "";
s.V = "";
s.Aa = k;
s.S = "";
s.Ia = "";
s.Cf = m;
s.ea = m;
s.toString = function() {
  if(this.Z) {
    return this.Z
  }
  var a = [];
  this.ha && a.push(Mb(this.ha, Nb), ":");
  this.V && (a.push("//"), this.Sa && a.push(Mb(this.Sa, Nb), "@"), a.push(v(this.V) ? encodeURIComponent(this.V) : k), this.Aa != k && a.push(":", "" + this.Aa));
  this.S && (this.V && "/" != this.S.charAt(0) && a.push("/"), a.push(Mb(this.S, "/" == this.S.charAt(0) ? Ob : Pb)));
  var b = "" + this.H;
  b && a.push("?", b);
  this.Ia && a.push("#", Mb(this.Ia, Qb));
  return this.Z = a.join("")
};
s.J = function() {
  var a = this.ha, b = this.Sa, c = this.V, d = this.Aa, e = this.S, g = this.H.J(), i = this.Ia, l = new K(k, this.ea);
  a && Eb(l, a);
  b && Fb(l, b);
  c && Gb(l, c);
  d && Hb(l, d);
  e && Ib(l, e);
  g && Jb(l, g);
  i && Kb(l, i);
  return l
};
function Eb(a, b, c) {
  Rb(a);
  delete a.Z;
  a.ha = c ? b ? decodeURIComponent(b) : "" : b;
  a.ha && (a.ha = a.ha.replace(/:$/, ""))
}
function Fb(a, b, c) {
  Rb(a);
  delete a.Z;
  a.Sa = c ? b ? decodeURIComponent(b) : "" : b
}
function Gb(a, b, c) {
  Rb(a);
  delete a.Z;
  a.V = c ? b ? decodeURIComponent(b) : "" : b
}
function Hb(a, b) {
  Rb(a);
  delete a.Z;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && f(Error("Bad port number " + b)), a.Aa = b) : a.Aa = k
}
function Ib(a, b, c) {
  Rb(a);
  delete a.Z;
  a.S = c ? b ? decodeURIComponent(b) : "" : b
}
function Jb(a, b, c) {
  Rb(a);
  delete a.Z;
  b instanceof Lb ? (a.H = b, a.H.Ad = a, a.H.kb(a.ea)) : (c || (b = Mb(b, Sb)), a.H = new Lb(b, a, a.ea))
}
function Kb(a, b, c) {
  Rb(a);
  delete a.Z;
  a.Ia = c ? b ? decodeURIComponent(b) : "" : b
}
function Rb(a) {
  a.Cf && f(Error("Tried to modify a read-only Uri"))
}
s.kb = function(a) {
  this.ea = a;
  this.H && this.H.kb(a);
  return this
};
function Tb(a) {
  return a instanceof K ? a.J() : new K(a, h)
}
var Ub = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Mb(a, b) {
  var c = k;
  v(a) && (c = a, Ub.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, Vb)));
  return c
}
function Vb(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Nb = /[#\/\?@]/g, Pb = /[\#\?:]/g, Ob = /[\#\?]/g, Sb = /[\#\?@]/g, Qb = /#/g;
function Lb(a, b, c) {
  this.ja = a || k;
  this.Ad = b || k;
  this.ea = !!c
}
function Wb(a) {
  if(!a.k && (a.k = new J, a.f = 0, a.ja)) {
    for(var b = a.ja.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, g = k;
      0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = Xb(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
s = Lb.prototype;
s.k = k;
s.f = k;
s.r = function() {
  Wb(this);
  return this.f
};
s.add = function(a, b) {
  Wb(this);
  Yb(this);
  a = Xb(this, a);
  if(this.U(a)) {
    var c = this.k.get(a);
    u(c) ? c.push(b) : this.k.set(a, [c, b])
  }else {
    this.k.set(a, b)
  }
  this.f++;
  return this
};
s.remove = function(a) {
  Wb(this);
  a = Xb(this, a);
  if(this.k.U(a)) {
    Yb(this);
    var b = this.k.get(a);
    u(b) ? this.f -= b.length : this.f--;
    return this.k.remove(a)
  }
  return m
};
s.clear = function() {
  Yb(this);
  this.k && this.k.clear();
  this.f = 0
};
s.Ma = function() {
  Wb(this);
  return 0 == this.f
};
s.U = function(a) {
  Wb(this);
  a = Xb(this, a);
  return this.k.U(a)
};
s.Rb = function(a) {
  var b = this.G();
  return nb(b, a)
};
s.ca = function() {
  Wb(this);
  for(var a = this.k.G(), b = this.k.ca(), c = [], d = 0;d < b.length;d++) {
    var e = a[d];
    if(u(e)) {
      for(var g = 0;g < e.length;g++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
s.G = function(a) {
  Wb(this);
  if(a) {
    if(a = Xb(this, a), this.U(a)) {
      var b = this.k.get(a);
      if(u(b)) {
        return b
      }
      a = [];
      a.push(b)
    }else {
      a = []
    }
  }else {
    for(var b = this.k.G(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      u(d) ? rb(a, d) : a.push(d)
    }
  }
  return a
};
s.set = function(a, b) {
  Wb(this);
  Yb(this);
  a = Xb(this, a);
  if(this.U(a)) {
    var c = this.k.get(a);
    u(c) ? this.f -= c.length : this.f--
  }
  this.k.set(a, b);
  this.f++;
  return this
};
s.get = function(a, b) {
  Wb(this);
  a = Xb(this, a);
  if(this.U(a)) {
    var c = this.k.get(a);
    return u(c) ? c[0] : c
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
  for(var a = [], b = 0, c = this.k.ca(), d = 0;d < c.length;d++) {
    var e = c[d], g = ta(e), e = this.k.get(e);
    if(u(e)) {
      for(var i = 0;i < e.length;i++) {
        0 < b && a.push("&"), a.push(g), "" !== e[i] && a.push("=", ta(e[i])), b++
      }
    }else {
      0 < b && a.push("&"), a.push(g), "" !== e && a.push("=", ta(e)), b++
    }
  }
  return this.ja = a.join("")
};
function Yb(a) {
  delete a.Wa;
  delete a.ja;
  a.Ad && delete a.Ad.Z
}
s.J = function() {
  var a = new Lb;
  this.Wa && (a.Wa = this.Wa);
  this.ja && (a.ja = this.ja);
  this.k && (a.k = this.k.J());
  return a
};
function Xb(a, b) {
  var c = "" + b;
  a.ea && (c = c.toLowerCase());
  return c
}
s.kb = function(a) {
  a && !this.ea && (Wb(this), Yb(this), yb(this.k, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ea = a
};
function Zb() {
  return j
}
;function $b() {
}
var ac = 0;
s = $b.prototype;
s.key = 0;
s.Pa = m;
s.Cc = m;
s.La = function(a, b, c, d, e, g) {
  x(a) ? this.je = j : a && a.handleEvent && x(a.handleEvent) ? this.je = m : f(Error("Invalid listener argument"));
  this.eb = a;
  this.Ce = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.ac = g;
  this.Cc = m;
  this.key = ++ac;
  this.Pa = m
};
s.handleEvent = function(a) {
  return this.je ? this.eb.call(this.ac || this.src, a) : this.eb.handleEvent.call(this.eb, a)
};
var bc = !D || Ya(), cc = !D || Ya(), dc = D && !F("8");
!E || F("528");
La && F("1.9b") || D && F("8") || Ka && F("9.5") || E && F("528");
La && !F("8") || D && F("9");
var ec = {pg:"click", ug:"dblclick", Og:"mousedown", Sg:"mouseup", Rg:"mouseover", Qg:"mouseout", Pg:"mousemove", bh:"selectstart", Jg:"keypress", Ig:"keydown", Kg:"keyup", ng:"blur", Cg:"focus", vg:"deactivate", Dg:D ? "focusin" : "DOMFocusIn", Eg:D ? "focusout" : "DOMFocusOut", og:"change", ah:"select", dh:"submit", Hg:"input", Xg:"propertychange", zg:"dragstart", wg:"dragenter", yg:"dragover", xg:"dragleave", Ag:"drop", hh:"touchstart", gh:"touchmove", fh:"touchend", eh:"touchcancel", rg:"contextmenu", 
Bg:"error", Gg:"help", Lg:"load", Mg:"losecapture", Yg:"readystatechange", Zg:"resize", $g:"scroll", jh:"unload", Fg:"hashchange", Tg:"pagehide", Ug:"pageshow", Wg:"popstate", sg:"copy", Vg:"paste", tg:"cut", kg:"beforecopy", lg:"beforecut", mg:"beforepaste", Ng:"message", qg:"connect", ih:E ? "webkitTransitionEnd" : Ka ? "oTransitionEnd" : "transitionend"};
function L() {
}
L.prototype.aa = m;
L.prototype.b = function() {
  this.aa || (this.aa = j, this.c())
};
L.prototype.c = function() {
  this.hf && fc.apply(k, this.hf)
};
function fc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? fc.apply(k, d) : d && "function" == typeof d.b && d.b()
  }
}
;function gc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
B(gc, L);
s = gc.prototype;
s.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
s.Oa = m;
s.Hb = j;
s.stopPropagation = function() {
  this.Oa = j
};
s.preventDefault = function() {
  this.Hb = m
};
function hc(a) {
  a.stopPropagation()
}
;function ic(a) {
  ic[" "](a);
  return a
}
ic[" "] = da;
function jc(a, b) {
  a && this.La(a, b)
}
B(jc, gc);
var kc = [1, 4, 2];
s = jc.prototype;
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
s.ka = k;
s.La = function(a, b) {
  var c = this.type = a.type;
  gc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(La) {
      var e;
      a: {
        try {
          ic(d.nodeName);
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
  this.offsetX = E || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = E || a.offsetY !== h ? a.offsetY : a.layerY;
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
  this.hd = Oa ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ka = a;
  delete this.Hb;
  delete this.Oa
};
function lc(a) {
  return bc ? 0 == a.ka.button : "click" == a.type ? j : !!(a.ka.button & kc[0])
}
s.stopPropagation = function() {
  jc.e.stopPropagation.call(this);
  this.ka.stopPropagation ? this.ka.stopPropagation() : this.ka.cancelBubble = j
};
s.preventDefault = function() {
  jc.e.preventDefault.call(this);
  var a = this.ka;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, dc) {
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
  jc.e.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ka = k
};
var mc = {}, M = {}, nc = {}, oc = {};
function N(a, b, c, d, e) {
  if(b) {
    if(u(b)) {
      for(var g = 0;g < b.length;g++) {
        N(a, b[g], c, d, e)
      }
      return k
    }
    var d = !!d, i = M;
    b in i || (i[b] = {f:0, T:0});
    i = i[b];
    d in i || (i[d] = {f:0, T:0}, i.f++);
    var i = i[d], l = ka(a), n;
    i.T++;
    if(i[l]) {
      n = i[l];
      for(g = 0;g < n.length;g++) {
        if(i = n[g], i.eb == c && i.ac == e) {
          if(i.Pa) {
            break
          }
          return n[g].key
        }
      }
    }else {
      n = i[l] = [], i.f++
    }
    g = pc();
    g.src = a;
    i = new $b;
    i.La(c, g, a, b, d, e);
    c = i.key;
    g.key = c;
    n.push(i);
    mc[c] = i;
    nc[l] || (nc[l] = []);
    nc[l].push(i);
    a.addEventListener ? (a == t || !a.Md) && a.addEventListener(b, g, d) : a.attachEvent(b in oc ? oc[b] : oc[b] = "on" + b, g);
    return c
  }
  f(Error("Invalid event type"))
}
function pc() {
  var a = qc, b = cc ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function rc(a, b, c, d, e) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      rc(a, b[g], c, d, e)
    }
    return k
  }
  a = N(a, b, c, d, e);
  mc[a].Cc = j;
  return a
}
function sc(a, b, c, d, e) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      sc(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = tc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].eb == c && a[g].capture == d && a[g].ac == e) {
          uc(a[g].key);
          break
        }
      }
    }
  }
}
function uc(a) {
  if(!mc[a]) {
    return m
  }
  var b = mc[a];
  if(b.Pa) {
    return m
  }
  var c = b.src, d = b.type, e = b.Ce, g = b.capture;
  c.removeEventListener ? (c == t || !c.Md) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in oc ? oc[d] : oc[d] = "on" + d, e);
  c = ka(c);
  e = M[d][g][c];
  if(nc[c]) {
    var i = nc[c];
    ob(i, b);
    0 == i.length && delete nc[c]
  }
  b.Pa = j;
  e.ve = j;
  vc(d, g, c, e);
  delete mc[a];
  return j
}
function vc(a, b, c, d) {
  if(!d.fc && d.ve) {
    for(var e = 0, g = 0;e < d.length;e++) {
      d[e].Pa ? d[e].Ce.src = k : (e != g && (d[g] = d[e]), g++)
    }
    d.length = g;
    d.ve = m;
    0 == g && (delete M[a][b][c], M[a][b].f--, 0 == M[a][b].f && (delete M[a][b], M[a].f--), 0 == M[a].f && delete M[a])
  }
}
function wc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    cb(nc, function(a) {
      for(var e = a.length - 1;0 <= e;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          uc(g.key), c++
        }
      }
    })
  }else {
    if(a = ka(a), nc[a]) {
      for(var a = nc[a], e = a.length - 1;0 <= e;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          uc(g.key), c++
        }
      }
    }
  }
}
function tc(a, b, c) {
  var d = M;
  return b in d && (d = d[b], c in d && (d = d[c], a = ka(a), d[a])) ? d[a] : k
}
function xc(a, b, c, d, e) {
  var g = 1, b = ka(b);
  if(a[b]) {
    a.T--;
    a = a[b];
    a.fc ? a.fc++ : a.fc = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var n = a[l];
        n && !n.Pa && (g &= yc(n, e) !== m)
      }
    }finally {
      a.fc--, vc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function yc(a, b) {
  var c = a.handleEvent(b);
  a.Cc && uc(a.key);
  return c
}
function qc(a, b) {
  if(!mc[a]) {
    return j
  }
  var c = mc[a], d = c.type, e = M;
  if(!(d in e)) {
    return j
  }
  var e = e[d], g, i;
  if(!cc) {
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
          }catch(H) {
            q = j
          }
        }
        if(q || g.returnValue == h) {
          g.returnValue = j
        }
      }
    }
    q = new jc;
    q.La(g, this);
    g = j;
    try {
      if(l) {
        for(var r = [], w = q.currentTarget;w;w = w.parentNode) {
          r.push(w)
        }
        i = e[j];
        i.T = i.f;
        for(var z = r.length - 1;!q.Oa && 0 <= z && i.T;z--) {
          q.currentTarget = r[z], g &= xc(i, r[z], d, j, q)
        }
        if(n) {
          i = e[m];
          i.T = i.f;
          for(z = 0;!q.Oa && z < r.length && i.T;z++) {
            q.currentTarget = r[z], g &= xc(i, r[z], d, m, q)
          }
        }
      }else {
        g = yc(c, q)
      }
    }finally {
      r && (r.length = 0), q.b()
    }
    return g
  }
  d = new jc(b, this);
  try {
    g = yc(c, d)
  }finally {
    d.b()
  }
  return g
}
var zc = 0;
function Ac() {
}
B(Ac, L);
s = Ac.prototype;
s.Md = j;
s.hc = k;
s.nd = aa("hc");
s.addEventListener = function(a, b, c, d) {
  N(this, a, b, c, d)
};
s.removeEventListener = function(a, b, c, d) {
  sc(this, a, b, c, d)
};
s.dispatchEvent = function(a) {
  var b = a.type || a, c = M;
  if(b in c) {
    if(v(a)) {
      a = new gc(a, this)
    }else {
      if(a instanceof gc) {
        a.target = a.target || this
      }else {
        var d = a, a = new gc(b, this);
        gb(a, d)
      }
    }
    var d = 1, e, c = c[b], b = j in c, g;
    if(b) {
      e = [];
      for(g = this;g;g = g.hc) {
        e.push(g)
      }
      g = c[j];
      g.T = g.f;
      for(var i = e.length - 1;!a.Oa && 0 <= i && g.T;i--) {
        a.currentTarget = e[i], d &= xc(g, e[i], a.type, j, a) && a.Hb != m
      }
    }
    if(m in c) {
      if(g = c[m], g.T = g.f, b) {
        for(i = 0;!a.Oa && i < e.length && g.T;i++) {
          a.currentTarget = e[i], d &= xc(g, e[i], a.type, m, a) && a.Hb != m
        }
      }else {
        for(e = this;!a.Oa && e && g.T;e = e.hc) {
          a.currentTarget = e, d &= xc(g, e, a.type, m, a) && a.Hb != m
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
  Ac.e.c.call(this);
  wc(this);
  this.hc = k
};
var Bc = t.window;
zc++;
zc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Cc(a, b) {
  this.Qb = [];
  this.Hd = a;
  this.Od = b || k
}
s = Cc.prototype;
s.ta = m;
s.yb = m;
s.Db = 0;
s.qd = m;
s.cf = m;
s.Bc = 0;
s.cancel = function(a) {
  if(this.ta) {
    this.Gb instanceof Cc && this.Gb.cancel()
  }else {
    if(this.z) {
      var b = this.z;
      delete this.z;
      a ? b.cancel(a) : (b.Bc--, 0 >= b.Bc && b.cancel())
    }
    this.Hd ? this.Hd.call(this.Od, this) : this.qd = j;
    this.ta || this.wb(new Dc)
  }
};
s.Kd = function(a, b) {
  Ec(this, a, b);
  this.Db--;
  0 == this.Db && this.ta && Fc(this)
};
function Ec(a, b, c) {
  a.ta = j;
  a.Gb = c;
  a.yb = !b;
  Fc(a)
}
function Gc(a) {
  a.ta && (a.qd || f(new Hc), a.qd = m)
}
s.$ = function(a) {
  Gc(this);
  Ec(this, j, a)
};
s.wb = function(a) {
  Gc(this);
  Ec(this, m, a)
};
function Jc(a, b) {
  Kc(a, b, k, h)
}
function Lc(a, b) {
  Kc(a, k, b, h)
}
function Kc(a, b, c, d) {
  a.Qb.push([b, c, d]);
  a.ta && Fc(a)
}
function Mc(a, b) {
  Kc(a, b, b, h)
}
function Nc(a) {
  return lb(a.Qb, function(a) {
    return x(a[1])
  })
}
function Fc(a) {
  a.zd && a.ta && Nc(a) && (t.clearTimeout(a.zd), delete a.zd);
  a.z && (a.z.Bc--, delete a.z);
  for(var b = a.Gb, c = m, d = m;a.Qb.length && 0 == a.Db;) {
    var e = a.Qb.shift(), g = e[0], i = e[1], e = e[2];
    if(g = a.yb ? i : g) {
      try {
        var l = g.call(e || a.Od, b);
        ga(l) && (a.yb = a.yb && (l == b || l instanceof Error), a.Gb = b = l);
        b instanceof Cc && (d = j, a.Db++)
      }catch(n) {
        b = n, a.yb = j, Nc(a) || (c = j)
      }
    }
  }
  a.Gb = b;
  d && a.Db && (Kc(b, y(a.Kd, a, j), y(a.Kd, a, m)), b.cf = j);
  c && (a.zd = t.setTimeout(function() {
    ga(b.message) && b.stack && (b.message += "\n" + b.stack);
    f(b)
  }, 0))
}
function Oc(a) {
  var b = new Cc;
  b.$(a);
  return b
}
function Pc(a) {
  var b = new Cc;
  b.wb(a);
  return b
}
function Hc() {
  G.call(this)
}
B(Hc, G);
Hc.prototype.message = "Already called";
function Dc() {
  G.call(this)
}
B(Dc, G);
Dc.prototype.message = "Deferred was cancelled";
function Qc(a) {
  this.B = a;
  this.Sb = [];
  this.Rd = [];
  this.bf = y(this.eg, this)
}
Qc.prototype.wd = k;
function Rc(a, b, c, d) {
  a.Sb.push([b, c, d]);
  a.wd == k && (a.wd = a.B.setTimeout(a.bf, 0))
}
Qc.prototype.eg = function() {
  this.wd = k;
  var a = this.Sb;
  this.Sb = [];
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
  if(0 == this.Sb.length) {
    a = this.Rd;
    this.Rd = [];
    for(b = 0;b < a.length;b++) {
      a[b].$(k)
    }
  }
};
var Sc = new Qc(t.window);
function Tc(a) {
  return x(a) || "object" == typeof a && x(a.call) && x(a.apply)
}
;function Uc(a) {
  a = "" + a;
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  f(Error("Invalid JSON string: " + a))
}
function Vc() {
  this.lc = h
}
function Wc(a) {
  var b = [];
  Xc(new Vc, a, b);
  return b.join("")
}
function Xc(a, b, c) {
  switch(typeof b) {
    case "string":
      Yc(b, c);
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
      if(u(b)) {
        var d = b.length;
        c.push("[");
        for(var e = "", g = 0;g < d;g++) {
          c.push(e), e = b[g], Xc(a, a.lc ? a.lc.call(b, "" + g, e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" != typeof e && (c.push(d), Yc(g, c), c.push(":"), Xc(a, a.lc ? a.lc.call(b, g, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      f(Error("Unknown type: " + typeof b))
  }
}
var Zc = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, $c = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Yc(a, b) {
  b.push('"', a.replace($c, function(a) {
    if(a in Zc) {
      return Zc[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return Zc[a] = e + b.toString(16)
  }), '"')
}
;function ad(a, b, c) {
  var d = hb(c, a);
  if(-1 != d) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = fa(a);
    if("boolean" == d || "number" == d || "null" == d || "undefined" == d) {
      b.push("" + a)
    }else {
      if("string" == d) {
        Yc(a, b)
      }else {
        if(Tc(a.F)) {
          a.F(b, c)
        }else {
          if(Tc(a.Xe)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if("array" == d) {
                d = a.length;
                b.push("[");
                for(var e = "", g = 0;g < d;g++) {
                  b.push(e), ad(a[g], b, c), e = ", "
                }
                b.push("]")
              }else {
                if("object" == d) {
                  if(ia(a) && "function" == typeof a.valueOf) {
                    b.push("new Date(", "" + a.valueOf(), ")")
                  }else {
                    for(var d = eb(a).concat(fb), e = {}, i = g = 0;i < d.length;) {
                      var l = d[i++], n = ja(l) ? "o" + ka(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(e, n) || (e[n] = j, d[g++] = l)
                    }
                    d.length = g;
                    b.push("{");
                    e = "";
                    for(i = 0;i < d.length;i++) {
                      g = d[i], Object.prototype.hasOwnProperty.call(a, g) && (l = a[g], b.push(e), Yc(g, b), b.push(": "), ad(l, b, c), e = ", ")
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
  ad(a, b, c)
}
function P(a) {
  var b = [];
  O(a, b, h);
  return b.join("")
}
;function bd(a, b) {
  this.x = ga(a) ? a : 0;
  this.y = ga(b) ? b : 0
}
bd.prototype.J = function() {
  return new bd(this.x, this.y)
};
bd.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function cd(a, b) {
  this.width = a;
  this.height = b
}
s = cd.prototype;
s.J = function() {
  return new cd(this.width, this.height)
};
s.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
s.Ma = function() {
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
var dd;
function ed(a) {
  a = a.className;
  return v(a) && a.match(/\S+/g) || []
}
function fd(a, b) {
  for(var c = ed(a), d = sb(arguments, 1), e = c.length + d.length, g = c, i = 0;i < d.length;i++) {
    nb(g, d[i]) || g.push(d[i])
  }
  a.className = c.join(" ");
  return c.length == e
}
function gd(a, b) {
  var c = ed(a), d = sb(arguments, 1), e = hd(c, d);
  a.className = e.join(" ");
  return e.length == c.length - d.length
}
function hd(a, b) {
  return jb(a, function(a) {
    return!nb(b, a)
  })
}
;var id = !D || Ya();
!La && !D || D && Ya() || La && F("1.9.1");
var jd = D && !F("9");
function kd(a) {
  return a ? new ld(md(a)) : dd || (dd = new ld)
}
function Q(a) {
  return v(a) ? document.getElementById(a) : a
}
function nd(a, b) {
  cb(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in od ? a.setAttribute(od[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var od = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function pd() {
  var a = qd.L.parentWindow || qd.L.defaultView || window, b = a.document;
  if(E && !F("500") && !Ma) {
    "undefined" == typeof a.innerHeight && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new cd(a.innerWidth, b)
  }
  a = "CSS1Compat" == b.compatMode ? b.documentElement : b.body;
  return new cd(a.clientWidth, a.clientHeight)
}
function rd(a, b, c) {
  return sd(document, arguments)
}
function sd(a, b) {
  var c = b[0], d = b[1];
  if(!id && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', C(d.name), '"');
    if(d.type) {
      c.push(' type="', C(d.type), '"');
      var e = {};
      gb(e, d);
      d = e;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  d && (v(d) ? c.className = d : u(d) ? fd.apply(k, [c].concat(d)) : nd(c, d));
  2 < b.length && td(a, c, b, 2);
  return c
}
function td(a, b, c, d) {
  function e(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && 0 < g.nodeType) ? ib(ud(g) ? qb(g) : g, e) : e(g)
  }
}
function vd(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function wd(a, b) {
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
function md(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
var xd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, yd = {IMG:" ", BR:"\n"};
function zd(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, "number" == typeof a && 0 <= a && 32768 > a) : m
}
function Ad(a) {
  var b = [];
  Bd(a, b, m);
  return b.join("")
}
function Bd(a, b, c) {
  if(!(a.nodeName in xd)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in yd) {
        b.push(yd[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Bd(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function ud(a) {
  if(a && "number" == typeof a.length) {
    if(ja(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(x(a)) {
      return"function" == typeof a.item
    }
  }
  return m
}
function ld(a) {
  this.L = a || t.document || document
}
s = ld.prototype;
s.Xa = kd;
s.g = function(a) {
  return v(a) ? this.L.getElementById(a) : a
};
s.o = function(a, b, c) {
  return sd(this.L, arguments)
};
s.createElement = function(a) {
  return this.L.createElement(a)
};
s.createTextNode = function(a) {
  return this.L.createTextNode(a)
};
s.appendChild = function(a, b) {
  a.appendChild(b)
};
s.append = function(a, b) {
  td(md(a), a, arguments, 1)
};
s.contains = wd;
function Cd(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
var Dd = La ? "MozUserSelect" : E ? "WebkitUserSelect" : k;
function Ed(a) {
  this.ce = a;
  this.j = []
}
B(Ed, L);
var Fd = [];
function R(a, b, c, d) {
  u(c) || (Fd[0] = c, c = Fd);
  for(var e = 0;e < c.length;e++) {
    a.j.push(N(b, c[e], d || a, m, a.ce || a))
  }
  return a
}
function Gd(a, b, c, d, e, g) {
  if(u(c)) {
    for(var i = 0;i < c.length;i++) {
      Gd(a, b, c[i], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.ce || a;
      e = !!e;
      if(b = tc(b, c, e)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].Pa && b[c].eb == d && b[c].capture == e && b[c].ac == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, uc(b), ob(a.j, b))
  }
  return a
}
Ed.prototype.kd = function() {
  ib(this.j, uc);
  this.j.length = 0
};
Ed.prototype.c = function() {
  Ed.e.c.call(this);
  this.kd()
};
Ed.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Hd() {
}
ea(Hd);
Hd.prototype.Hf = 0;
Hd.Ya();
function Id(a) {
  this.ra = a || kd();
  this.Ib = Jd
}
B(Id, Ac);
Id.prototype.Af = Hd.Ya();
var Jd = k;
function Kd(a, b) {
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
s = Id.prototype;
s.da = k;
s.D = m;
s.l = k;
s.Ib = k;
s.z = k;
s.qa = k;
s.sb = k;
s.fg = m;
function Ld(a) {
  return a.da || (a.da = ":" + (a.Af.Hf++).toString(36))
}
s.g = o("l");
function Md(a) {
  return a.Za || (a.Za = new Ed(a))
}
s.getParent = o("z");
s.nd = function(a) {
  this.z && this.z != a && f(Error("Method not supported"));
  Id.e.nd.call(this, a)
};
s.Xa = o("ra");
s.o = function() {
  this.l = this.ra.createElement("div")
};
function Nd(a, b) {
  a.D && f(Error("Component already rendered"));
  a.l || a.o();
  b ? b.insertBefore(a.l, k) : a.ra.L.body.appendChild(a.l);
  (!a.z || a.z.D) && a.sa()
}
s.sa = function() {
  this.D = j;
  Od(this, function(a) {
    !a.D && a.g() && a.sa()
  })
};
s.xb = function() {
  Od(this, function(a) {
    a.D && a.xb()
  });
  this.Za && this.Za.kd();
  this.D = m
};
s.c = function() {
  Id.e.c.call(this);
  this.D && this.xb();
  this.Za && (this.Za.b(), delete this.Za);
  Od(this, function(a) {
    a.b()
  });
  !this.fg && this.l && vd(this.l);
  this.z = this.l = this.sb = this.qa = k
};
s.mb = function(a) {
  this.D && f(Error("Component already rendered"));
  this.Ib = a
};
function Od(a, b) {
  a.qa && ib(a.qa, b, h)
}
s.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : Ld(a), a = this.sb && c ? (c in this.sb ? this.sb[c] : h) || k : k;
    if(c && a) {
      var d = this.sb;
      c in d && delete d[c];
      ob(this.qa, a);
      b && (a.xb(), a.l && vd(a.l));
      c = a;
      c == k && f(Error("Unable to set parent component"));
      c.z = k;
      Id.e.nd.call(c, k)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function Pd() {
}
var Qd;
ea(Pd);
s = Pd.prototype;
s.Wb = function() {
};
s.o = function(a) {
  var b = a.Xa().o("div", Rd(this, a).join(" "), a.tb);
  this.md(a, b);
  return b
};
s.ub = function(a, b, c) {
  if(a = a.g ? a.g() : a) {
    if(D && !F("7")) {
      var d = Sd(ed(a), b);
      d.push(b);
      pa(c ? fd : gd, a).apply(k, d)
    }else {
      c ? fd(a, b) : gd(a, b)
    }
  }
};
s.fe = function(a) {
  if(a.Ib == k) {
    var b;
    a: {
      b = a.D ? a.l : a.ra.L.body;
      var c = md(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (b = c.defaultView.getComputedStyle(b, k))) {
        b = b.direction || b.getPropertyValue("direction");
        break a
      }
      b = ""
    }
    a.Ib = "rtl" == (b || ((a.D ? a.l : a.ra.L.body).currentStyle ? (a.D ? a.l : a.ra.L.body).currentStyle.direction : k) || (a.D ? a.l : a.ra.L.body).style && (a.D ? a.l : a.ra.L.body).style.direction)
  }
  a.Ib && this.mb(a.g(), j);
  a.isEnabled() && this.Jb(a, a.Ta)
};
s.md = function(a, b) {
  a.isEnabled() || this.P(b, 1, j);
  a.d & 8 && this.P(b, 8, j);
  a.I & 16 && this.P(b, 16, !!(a.d & 16));
  a.I & 64 && this.P(b, 64, !!(a.d & 64))
};
s.nc = function(a, b) {
  var c = !b, d = D || Ka ? a.getElementsByTagName("*") : k;
  if(Dd) {
    if(c = c ? "none" : "", a.style[Dd] = c, d) {
      for(var e = 0, g;g = d[e];e++) {
        g.style[Dd] = c
      }
    }
  }else {
    if(D || Ka) {
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for(e = 0;g = d[e];e++) {
          g.setAttribute("unselectable", c)
        }
      }
    }
  }
};
s.mb = function(a, b) {
  this.ub(a, this.ua() + "-rtl", b)
};
s.ie = function(a) {
  var b;
  return a.I & 32 && (b = a.Ja()) ? zd(b) : m
};
s.Jb = function(a, b) {
  var c;
  if(a.I & 32 && (c = a.Ja())) {
    if(!b && a.d & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.d & 32 && a.Wd()
    }
    zd(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
s.pd = function(a, b) {
  a.style.display = b ? "" : "none"
};
s.N = function(a, b, c) {
  var d = a.g();
  if(d) {
    var e = Td(this, b);
    e && this.ub(a, e, c);
    this.P(d, b, c)
  }
};
s.P = function(a, b, c) {
  Qd || (Qd = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Qd[b]) && a.setAttribute("aria-" + b, c)
};
s.Ja = function(a) {
  return a.g()
};
s.ua = p("goog-control");
function Rd(a, b) {
  var c = a.ua(), d = [c], e = a.ua();
  e != c && d.push(e);
  c = b.d;
  for(e = [];c;) {
    var g = c & -c;
    e.push(Td(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.ba) && d.push.apply(d, c);
  D && !F("7") && d.push.apply(d, Sd(d));
  return d
}
function Sd(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  ib([], function(d) {
    mb(d, pa(nb, a)) && (!b || nb(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Td(a, b) {
  if(!a.Id) {
    var c = a.ua();
    a.Id = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Id[b]
}
;function Ud(a, b) {
  a || f(Error("Invalid class name " + a));
  x(b) || f(Error("Invalid decorator function " + b))
}
var Vd = {};
function Wd(a, b, c, d, e) {
  if(!D && (!E || !F("525"))) {
    return j
  }
  if(Oa && e) {
    return Yd(a)
  }
  if(e && !d || !c && (17 == b || 18 == b) || D && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(D && Ya());
    case 27:
      return!E
  }
  return Yd(a)
}
function Yd(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || E && 0 == a) {
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
function Zd(a) {
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
;function $d(a, b) {
  a && ae(this, a, b)
}
B($d, Ac);
s = $d.prototype;
s.l = k;
s.cc = k;
s.Uc = k;
s.dc = k;
s.ya = -1;
s.xa = -1;
var be = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, ce = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, de = D || 
E && F("525");
s = $d.prototype;
s.wf = function(a) {
  if(E && (17 == this.ya && !a.ctrlKey || 18 == this.ya && !a.altKey)) {
    this.xa = this.ya = -1
  }
  de && !Wd(a.keyCode, this.ya, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.xa = La ? Zd(a.keyCode) : a.keyCode
};
s.yf = function() {
  this.xa = this.ya = -1
};
s.handleEvent = function(a) {
  var b = a.ka, c, d;
  D && "keypress" == a.type ? (c = this.xa, d = 13 != c && 27 != c ? b.keyCode : 0) : E && "keypress" == a.type ? (c = this.xa, d = 0 <= b.charCode && 63232 > b.charCode && Yd(c) ? b.charCode : 0) : Ka ? (c = this.xa, d = Yd(c) ? b.keyCode : 0) : (c = b.keyCode || this.xa, d = b.charCode || 0, Oa && 63 == d && 224 == c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in be ? e = be[c] : 25 == c && a.shiftKey && (e = 9) : g && g in ce && (e = ce[g]);
  a = e == this.ya;
  this.ya = e;
  b = new ee(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.b()
  }
};
s.g = o("l");
function ae(a, b, c) {
  a.dc && a.detach();
  a.l = b;
  a.cc = N(a.l, "keypress", a, c);
  a.Uc = N(a.l, "keydown", a.wf, c, a);
  a.dc = N(a.l, "keyup", a.yf, c, a)
}
s.detach = function() {
  this.cc && (uc(this.cc), uc(this.Uc), uc(this.dc), this.dc = this.Uc = this.cc = k);
  this.l = k;
  this.xa = this.ya = -1
};
s.c = function() {
  $d.e.c.call(this);
  this.detach()
};
function ee(a, b, c, d) {
  d && this.La(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
B(ee, jc);
function S(a, b, c) {
  Id.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ka(b);
      if(d = Vd[d]) {
        break
      }
      b = b.e ? b.e.constructor : k
    }
    b = d ? x(d.Ya) ? d.Ya() : new d : k
  }
  this.u = b;
  this.tb = a
}
B(S, Id);
s = S.prototype;
s.tb = k;
s.d = 0;
s.I = 39;
s.Ac = 255;
s.Vf = 0;
s.Ta = j;
s.ba = k;
s.Pc = j;
s.zc = m;
s.Kf = k;
s.Ja = function() {
  return this.u.Ja(this)
};
function fe(a, b) {
  b && (a.ba ? nb(a.ba, b) || a.ba.push(b) : a.ba = [b], a.u.ub(a, b, j))
}
s.ub = function(a, b) {
  b ? fe(this, a) : a && this.ba && (ob(this.ba, a), 0 == this.ba.length && (this.ba = k), this.u.ub(this, a, m))
};
s.o = function() {
  var a = this.u.o(this);
  this.l = a;
  var b = this.Kf || this.u.Wb();
  b && (a.setAttribute("role", b), a.lh = b);
  this.zc || this.u.nc(a, m);
  this.Ta || this.u.pd(a, m)
};
s.sa = function() {
  S.e.sa.call(this);
  this.u.fe(this);
  if(this.I & -2 && (this.Pc && ge(this, j), this.I & 32)) {
    var a = this.Ja();
    if(a) {
      var b = this.bb || (this.bb = new $d);
      ae(b, a);
      R(R(R(Md(this), b, "key", this.xf), a, "focus", this.vf), a, "blur", this.Wd)
    }
  }
};
function ge(a, b) {
  var c = Md(a), d = a.g();
  b ? (R(R(R(R(c, d, "mouseover", a.ae), d, "mousedown", a.Zd), d, "mouseup", a.be), d, "mouseout", a.$d), D && R(c, d, "dblclick", a.Yd)) : (Gd(Gd(Gd(Gd(c, d, "mouseover", a.ae), d, "mousedown", a.Zd), d, "mouseup", a.be), d, "mouseout", a.$d), D && Gd(c, d, "dblclick", a.Yd))
}
s.xb = function() {
  S.e.xb.call(this);
  this.bb && this.bb.detach();
  this.Ta && this.isEnabled() && this.u.Jb(this, m)
};
s.c = function() {
  S.e.c.call(this);
  this.bb && (this.bb.b(), delete this.bb);
  delete this.u;
  this.ba = this.tb = k
};
function he(a) {
  a = a.tb;
  if(!a) {
    return""
  }
  if(!v(a)) {
    if(u(a)) {
      a = kb(a, Ad).join("")
    }else {
      if(jd && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Bd(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      jd || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
s.mb = function(a) {
  S.e.mb.call(this, a);
  var b = this.g();
  b && this.u.mb(b, a)
};
s.nc = function(a) {
  this.zc = a;
  var b = this.g();
  b && this.u.nc(b, a)
};
s.pd = function(a, b) {
  if(b || this.Ta != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.g();
    c && this.u.pd(c, a);
    this.isEnabled() && this.u.Jb(this, a);
    this.Ta = a;
    return j
  }
  return m
};
s.isEnabled = function() {
  return!(this.d & 1)
};
s.oc = function(a) {
  var b = this.getParent();
  if((!b || "function" != typeof b.isEnabled || b.isEnabled()) && ie(this, 1, !a)) {
    a || (this.setActive(m), je(this, m)), this.Ta && this.u.Jb(this, a), this.N(1, !a)
  }
};
function je(a, b) {
  ie(a, 2, b) && a.N(2, b)
}
s.ge = function() {
  return!!(this.d & 4)
};
s.setActive = function(a) {
  ie(this, 4, a) && this.N(4, a)
};
s.N = function(a, b) {
  this.I & a && b != !!(this.d & a) && (this.u.N(this, a, b), this.d = b ? this.d | a : this.d & ~a)
};
function T(a, b) {
  return!!(a.Ac & b) && !!(a.I & b)
}
function ie(a, b, c) {
  return!!(a.I & b) && !!(a.d & b) != c && (!(a.Vf & b) || a.dispatchEvent(Kd(b, c))) && !a.aa
}
s.ae = function(a) {
  (!a.relatedTarget || !wd(this.g(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && T(this, 2) && je(this, j)
};
s.$d = function(a) {
  if((!a.relatedTarget || !wd(this.g(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    T(this, 4) && this.setActive(m), T(this, 2) && je(this, m)
  }
};
s.Zd = function(a) {
  if(this.isEnabled() && (T(this, 2) && je(this, j), lc(a) && (!E || !Oa || !a.ctrlKey))) {
    T(this, 4) && this.setActive(j), this.u.ie(this) && this.Ja().focus()
  }
  !this.zc && lc(a) && (!E || !Oa || !a.ctrlKey) && a.preventDefault()
};
s.be = function(a) {
  this.isEnabled() && (T(this, 2) && je(this, j), this.ge() && this.Eb(a) && T(this, 4) && this.setActive(m))
};
s.Yd = function(a) {
  this.isEnabled() && this.Eb(a)
};
s.Eb = function(a) {
  if(T(this, 16)) {
    var b = !(this.d & 16);
    ie(this, 16, b) && this.N(16, b)
  }
  T(this, 8) && ie(this, 8, j) && this.N(8, j);
  T(this, 64) && (b = !(this.d & 64), ie(this, 64, b) && this.N(64, b));
  b = new gc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.hd = a.hd);
  return this.dispatchEvent(b)
};
s.vf = function() {
  T(this, 32) && ie(this, 32, j) && this.N(32, j)
};
s.Wd = function() {
  T(this, 4) && this.setActive(m);
  T(this, 32) && ie(this, 32, m) && this.N(32, m)
};
s.xf = function(a) {
  return this.Ta && this.isEnabled() && this.Oc(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
s.Oc = function(a) {
  return 13 == a.keyCode && this.Eb(a)
};
x(S) || f(Error("Invalid component class " + S));
x(Pd) || f(Error("Invalid renderer class " + Pd));
var ke = ka(S);
Vd[ke] = Pd;
Ud("goog-control", function() {
  return new S(k)
});
function le() {
}
B(le, Pd);
ea(le);
s = le.prototype;
s.Wb = p("button");
s.P = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : le.e.P.call(this, a, b, c)
};
s.o = function(a) {
  var b = le.e.o.call(this, a), c = a.Yb();
  c && this.od(b, c);
  (c = a.Zb()) && this.pc(b, c);
  a.I & 16 && this.P(b, 16, !!(a.d & 16));
  return b
};
s.Zb = da;
s.pc = da;
s.Yb = function(a) {
  return a.title
};
s.od = function(a, b) {
  a && (a.title = b || "")
};
s.ua = p("goog-button");
function me() {
}
B(me, le);
ea(me);
s = me.prototype;
s.Wb = function() {
};
s.o = function(a) {
  a.D && m != a.Pc && ge(a, m);
  a.Pc = m;
  a.Ac &= -256;
  a.D && a.d & 32 && f(Error("Component already rendered"));
  a.d & 32 && a.N(32, m);
  a.I &= -33;
  return a.Xa().o("button", {"class":Rd(this, a).join(" "), disabled:!a.isEnabled(), title:a.Yb() || "", value:a.Zb() || ""}, he(a) || "")
};
s.fe = function(a) {
  R(Md(a), a.g(), "click", a.Eb)
};
s.nc = da;
s.mb = da;
s.ie = function(a) {
  return a.isEnabled()
};
s.Jb = da;
s.N = function(a, b, c) {
  me.e.N.call(this, a, b, c);
  if((a = a.g()) && 1 == b) {
    a.disabled = c
  }
};
s.Zb = function(a) {
  return a.value
};
s.pc = function(a, b) {
  a && (a.value = b)
};
s.P = da;
function ne(a, b, c) {
  S.call(this, a, b || me.Ya(), c)
}
B(ne, S);
s = ne.prototype;
s.Zb = o("Te");
s.pc = function(a) {
  this.Te = a;
  this.u.pc(this.g(), a)
};
s.Yb = o("Qe");
s.od = function(a) {
  this.Qe = a;
  this.u.od(this.g(), a)
};
s.c = function() {
  ne.e.c.call(this);
  delete this.Te;
  delete this.Qe
};
s.sa = function() {
  ne.e.sa.call(this);
  if(this.I & 32) {
    var a = this.Ja();
    a && R(Md(this), a, "keyup", this.Oc)
  }
};
s.Oc = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Eb(a) : 32 == a.keyCode
};
Ud("goog-button", function() {
  return new ne(k)
});
function oe() {
}
B(oe, le);
ea(oe);
oe.prototype.o = function(a) {
  var b = {"class":"goog-inline-block " + Rd(this, a).join(" "), title:a.Yb() || ""}, b = a.Xa().o("div", b, pe(this, a.tb, a.Xa()));
  this.md(a, b);
  return b
};
oe.prototype.Wb = p("button");
oe.prototype.md = function(a, b) {
  a.isEnabled() || this.P(b, 1, j);
  a.d & 8 && this.P(b, 8, j);
  a.I & 16 && this.P(b, 16, j);
  a.d & 64 && this.P(b, 64, j)
};
function pe(a, b, c) {
  return c.o("div", "goog-inline-block " + (a.ua() + "-outer-box"), c.o("div", "goog-inline-block " + (a.ua() + "-inner-box"), b))
}
oe.prototype.ua = p("goog-custom-button");
function qe(a, b, c) {
  ne.call(this, a, b || oe.Ya(), c)
}
B(qe, ne);
Ud("goog-custom-button", function() {
  return new qe(k)
});
function re() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ A()).toString(36)
}
function se(a) {
  return a.substr(0, a.length - 1)
}
var te = /^(0|[1-9]\d*)$/, ue = /^(0|\-?[1-9]\d*)$/;
function ve(a) {
  var b = we;
  return te.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function xe(a) {
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
;var ye, ze;
function Ae(a, b) {
  this.Ua = a;
  this.Qa = b
}
Ae.prototype.R = function(a) {
  return a instanceof Ae && this.Ua == a.Ua && this.Qa.join(",") == a.Qa
};
Ae.prototype.F = function(a, b) {
  a.push("new SACK(", "" + this.Ua, ", ");
  O(this.Qa, a, b);
  a.push(")")
};
function Be() {
  this.M = new J
}
Be.prototype.Ha = -1;
Be.prototype.O = 0;
Be.prototype.append = function(a) {
  var b = xe(a);
  this.M.set(this.Ha + 1, [a, b]);
  this.Ha += 1;
  this.O += b
};
Be.prototype.F = function(a) {
  a.push("<Queue with ", "" + this.M.r(), " item(s), counter=#", "" + this.Ha, ", size=", "" + this.O, ">")
};
function Ce(a) {
  a = a.M.ca();
  tb(a);
  return a
}
function De() {
  this.Ga = new J
}
De.prototype.Na = -1;
De.prototype.O = 0;
function Ee(a) {
  var b = a.Ga.ca();
  tb(b);
  return new Ae(a.Na, b)
}
var Fe = {};
function Ge(a, b) {
  switch(fa(b)) {
    case "string":
      a.push("<string>", C(b), "</string>");
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
        a.push('<property id="', d, '">'), Ge(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', C(c), '">'), Ge(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function He(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, e = arguments;
  d.push("<arguments>");
  for(var g = e.length, i = 1;i < g;i++) {
    Ge(d, e[i])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var Ie = m, Je = "";
function Ke(a) {
  a = a.match(/[\d]+/g);
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var Le = navigator.plugins["Shockwave Flash"];
  Le && (Ie = j, Le.description && (Je = Ke(Le.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (Ie = j, Je = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var Me = navigator.mimeTypes["application/x-shockwave-flash"];
    (Ie = Me && Me.enabledPlugin) && (Je = Ke(Me.enabledPlugin.description))
  }else {
    try {
      var Ne = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), Ie = j, Je = Ke(Ne.GetVariable("$version"))
    }catch(Oe) {
      try {
        Ne = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), Ie = j, Je = "6.0.21"
      }catch(Pe) {
        try {
          Ne = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Ie = j, Je = Ke(Ne.GetVariable("$version"))
        }catch(Qe) {
        }
      }
    }
  }
}
var Re = Je;
function Se(a) {
  this.p = new J;
  a && this.yc(a)
}
function Te(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ka(a) : b.substr(0, 1) + a
}
s = Se.prototype;
s.r = function() {
  return this.p.r()
};
s.add = function(a) {
  this.p.set(Te(a), a)
};
s.yc = function(a) {
  for(var a = wb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
s.kd = function(a) {
  for(var a = wb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
s.remove = function(a) {
  return this.p.remove(Te(a))
};
s.clear = function() {
  this.p.clear()
};
s.Ma = function() {
  return this.p.Ma()
};
s.contains = function(a) {
  return this.p.U(Te(a))
};
s.G = function() {
  return this.p.G()
};
s.J = function() {
  return new Se(this)
};
s.R = function(a) {
  return this.r() == vb(a) && Ue(this, a)
};
function Ue(a, b) {
  var c = vb(b);
  if(a.r() > c) {
    return m
  }
  !(b instanceof Se) && 5 < c && (b = new Se(b));
  return zb(a, function(a) {
    if("function" == typeof b.contains) {
      a = b.contains(a)
    }else {
      if("function" == typeof b.Rb) {
        a = b.Rb(a)
      }else {
        if(ha(b) || v(b)) {
          a = nb(b, a)
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
;function Ve(a) {
  return We(a || arguments.callee.caller, [])
}
function We(a, b) {
  var c = [];
  if(nb(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Xe(a) + "(");
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
            g = (g = Xe(g)) ? g : "[fn]";
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
        c.push(We(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Xe(a) {
  if(Ye[a]) {
    return Ye[a]
  }
  a = "" + a;
  if(!Ye[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Ye[a] = b ? b[1] : "[Anonymous]"
  }
  return Ye[a]
}
var Ye = {};
function Ze(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Ze.prototype.Mc = k;
Ze.prototype.Lc = k;
var $e = 0;
Ze.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || $e++;
  this.Pe = d || A();
  this.X = a;
  this.te = b;
  this.pe = c;
  delete this.Mc;
  delete this.Lc
};
Ze.prototype.lb = aa("X");
function af(a) {
  this.Gf = a
}
af.prototype.z = k;
af.prototype.X = k;
af.prototype.qa = k;
af.prototype.Ab = k;
function bf(a, b) {
  this.name = a;
  this.value = b
}
bf.prototype.toString = o("name");
var cf = new bf("SHOUT", 1200), df = new bf("SEVERE", 1E3), ef = new bf("WARNING", 900), ff = new bf("INFO", 800), gf = new bf("CONFIG", 700), hf = new bf("FINE", 500), jf = new bf("FINEST", 300), kf = new bf("ALL", 0), lf = [new bf("OFF", Infinity), cf, df, ef, ff, gf, hf, new bf("FINER", 400), jf, kf], mf = k;
function nf(a) {
  if(!mf) {
    mf = {};
    for(var b = 0, c;c = lf[b];b++) {
      mf[c.value] = c, mf[c.name] = c
    }
  }
  return mf[a] || k
}
s = af.prototype;
s.getParent = o("z");
s.lb = aa("X");
function of(a) {
  if(a.X) {
    return a.X
  }
  if(a.z) {
    return of(a.z)
  }
  $a("Root logger has no level set.");
  return k
}
s.log = function(a, b, c) {
  if(a.value >= of(this).value) {
    a = this.uf(a, b, c);
    b = "log:" + a.te;
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.Ab) {
        for(var e = 0, g = h;g = c.Ab[e];e++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
s.uf = function(a, b, c) {
  var d = new Ze(a, "" + b, this.Gf);
  if(c) {
    d.Mc = c;
    var e;
    var g = arguments.callee.caller;
    try {
      var i;
      var l = ca("window.location.href");
      if(v(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var n, q, H = m;
        try {
          n = c.lineNumber || c.kh || "Not available"
        }catch(r) {
          n = "Not available", H = j
        }
        try {
          q = c.fileName || c.filename || c.sourceURL || l
        }catch(w) {
          q = "Not available", H = j
        }
        i = H || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:q, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + C(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + C(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + C(Ve(g) + "-> ")
    }catch(z) {
      e = "Exception trying to expose exception! You win, we lose. " + z
    }
    d.Lc = e
  }
  return d
};
function U(a, b) {
  a.log(df, b, h)
}
function V(a, b) {
  a.log(ef, b, h)
}
s.info = function(a, b) {
  this.log(ff, a, b)
};
function W(a, b) {
  a.log(hf, b, h)
}
function X(a, b) {
  a.log(jf, b, h)
}
var pf = {}, qf = k;
function rf() {
  qf || (qf = new af(""), pf[""] = qf, qf.lb(gf))
}
function sf() {
  rf();
  return qf
}
function Y(a) {
  rf();
  var b;
  if(!(b = pf[a])) {
    b = new af(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Y(a.substr(0, c));
    c.qa || (c.qa = {});
    c.qa[d] = b;
    b.z = c;
    pf[a] = b
  }
  return b
}
;function tf(a, b) {
  Id.call(this, b);
  this.rf = a;
  this.Kc = new Ed(this);
  this.Ub = new J
}
B(tf, Id);
s = tf.prototype;
s.a = Y("goog.ui.media.FlashObject");
s.hg = "window";
s.Fd = "#000000";
s.Ze = "sameDomain";
function uf(a, b, c) {
  a.Bd = v(b) ? b : Math.round(b) + "px";
  a.Qc = v(c) ? c : Math.round(c) + "px";
  a.g() && (b = a.g() ? a.g().firstChild : k, c = a.Bd, a = a.Qc, c instanceof cd ? (a = c.height, c = c.width) : a == h && f(Error("missing height argument")), b.style.width = Cd(c), b.style.height = Cd(a))
}
s.sa = function() {
  tf.e.sa.call(this);
  var a = this.g(), b;
  b = D ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = D ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = qa(c, this.hg), d = this.Ub.ca(), e = this.Ub.G(), g = [], i = 0;i < d.length;i++) {
    var l = ta(d[i]), n = ta(e[i]);
    g.push(l + "=" + n)
  }
  b = qa(b, Ld(this), Ld(this), "goog-ui-media-flash-object", C(this.rf), C(g.join("&")), this.Fd, this.Ze, c);
  a.innerHTML = b;
  this.Bd && this.Qc && uf(this, this.Bd, this.Qc);
  R(this.Kc, this.g(), db(ec), hc)
};
s.o = function() {
  this.He != k && !(0 <= Ba(Re, this.He)) && (V(this.a, "Required flash version not found:" + this.He), f(Error("Method not supported")));
  var a = this.Xa().createElement("div");
  a.className = "goog-ui-media-flash";
  this.l = a
};
s.c = function() {
  tf.e.c.call(this);
  this.Ub = k;
  this.Kc.b();
  this.Kc = k
};
function vf(a) {
  G.call(this, a)
}
B(vf, G);
vf.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function wf(a, b, c) {
  function d() {
    e && delete t.__loadFlashObject_callbacks[e]
  }
  var e;
  if(La && !F("1.8.1.20")) {
    return Pc(new vf("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Ba(Re, "9"))) {
    return Pc(new vf("Need Flash Player 9+; had " + (Re ? Re : "none")))
  }
  var g;
  e = "_" + re();
  var i = new Cc(d);
  t.__loadFlashObject_callbacks[e] = function() {
    a.setTimeout(function() {
      d();
      i.$(Q(g))
    }, 0)
  };
  b.Ub.set("onloadcallback", '__loadFlashObject_callbacks["' + e + '"]()');
  g = Ld(b);
  Nd(b, c);
  return i
}
function xf(a, b, c) {
  var d = wf(a, b, c), e = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  Mc(d, function(b) {
    a.clearTimeout(e);
    return b
  });
  return d
}
;function yf(a, b) {
  this.da = "_" + re();
  this.tc = a;
  this.Ba = b;
  this.Fa = a.Fa
}
B(yf, L);
s = yf.prototype;
s.fb = j;
s.Gc = m;
s.a = Y("cw.net.FlashSocket");
s.F = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.da);
  a.push("'>")
};
function zf(a, b, c) {
  "frames" == b ? (a = a.Ba, Af(a.C), Bf(a.C, c)) : "stillreceiving" == b ? (c = a.Ba, X(c.a, "onstillreceiving"), Af(c.C)) : "connect" == b ? (c = a.Ba, c.a.info("onconnect"), Af(c.C), a = c.qb, c.qb = k, a.length && (X(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.qc.Ob(a))) : "close" == b ? (a.fb = m, a.b()) : "ioerror" == b ? (a.fb = m, b = a.Ba, V(b.a, "onioerror: " + P(c)), Cf(b.C, m), a.b()) : "securityerror" == b ? (a.fb = m, b = a.Ba, V(b.a, "onsecurityerror: " + P(c)), 
  Cf(b.C, m), a.b()) : f(Error("bad event: " + b))
}
function Df(a) {
  a.Gc = j;
  a.fb = m;
  a.b()
}
s.Ec = function(a, b) {
  try {
    var c = this.Fa.CallFunction(He("__FC_connect", this.da, a, b, "<int32/>\n"))
  }catch(d) {
    return U(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), Df(this)
  }
  '"OK"' != c && f(Error("__FC_connect failed? ret: " + c))
};
s.Ob = function(a) {
  try {
    var b = this.Fa.CallFunction(He("__FC_writeFrames", this.da, a))
  }catch(c) {
    return U(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), Df(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (V(this.a, "Flash no longer knows of " + this.da + "; disposing."), this.b()) : f(Error("__FC_writeFrames failed? ret: " + b)))
};
s.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.fb);
  yf.e.c.call(this);
  var a = this.Fa;
  delete this.Fa;
  if(this.fb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(He("__FC_close", this.da)))
    }catch(b) {
      U(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Gc = j
    }
  }
  if(this.Gc) {
    a = this.Ba, V(a.a, "oncrash"), Cf(a.C, j)
  }else {
    this.Ba.onclose()
  }
  delete this.Ba;
  delete this.tc.$a[this.da]
};
function Ef(a, b) {
  this.q = a;
  this.Fa = b;
  this.$a = {};
  this.Dc = "__FST_" + re();
  t[this.Dc] = y(this.lf, this);
  var c = b.CallFunction(He("__FC_setCallbackFunc", this.Dc));
  '"OK"' != c && f(Error("__FC_setCallbackFunc failed? ret: " + c))
}
B(Ef, L);
s = Ef.prototype;
s.a = Y("cw.net.FlashSocketTracker");
s.F = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  O(this.$a, a, b);
  a.push(">")
};
s.Hc = function(a) {
  a = new yf(this, a);
  return this.$a[a.da] = a
};
s.jf = function(a, b, c, d) {
  var e = this.$a[a];
  e ? "frames" == b && d ? (zf(e, "ioerror", "FlashConnector hadError while handling data."), e.b()) : zf(e, b, c) : V(this.a, "Cannot dispatch because we have no instance: " + P([a, b, c, d]))
};
s.lf = function(a, b, c, d) {
  try {
    Rc(this.q, this.jf, this, [a, b, c, d])
  }catch(e) {
    t.window.setTimeout(function() {
      f(e)
    }, 0)
  }
};
s.c = function() {
  Ef.e.c.call(this);
  for(var a = db(this.$a);a.length;) {
    a.pop().b()
  }
  delete this.$a;
  delete this.Fa;
  t[this.Dc] = h
};
function Ff(a) {
  this.C = a;
  this.qb = []
}
B(Ff, L);
s = Ff.prototype;
s.a = Y("cw.net.FlashSocketConduit");
s.Ob = function(a) {
  this.qb ? (X(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.qb.push.apply(this.qb, a)) : (X(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.qc.Ob(a))
};
s.Ec = function(a, b) {
  this.qc.Ec(a, b)
};
s.onclose = function() {
  this.a.info("onclose");
  Cf(this.C, m)
};
s.c = function() {
  this.a.info("in disposeInternal.");
  Ff.e.c.call(this);
  this.qc.b();
  delete this.C
};
var Gf = [];
function Hf() {
  var a = new Cc;
  Gf.push(a);
  return a
}
function If(a) {
  var b = Gf;
  Gf = [];
  ib(b, function(b) {
    b.$(a)
  })
}
function Jf(a, b) {
  if(Gf.length) {
    return Hf()
  }
  var c = new tf(b + "FlashConnector.swf?cb=" + Kf);
  c.Fd = "#777777";
  uf(c, 300, 30);
  var d = Q("minerva-elements");
  d || f(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
  var e = Q("minerva-elements-FlashConnectorSwf");
  e || (e = rd("div", {id:"minerva-elements-FlashConnectorSwf"}), d.appendChild(e));
  ye = xf(a.B, c, e);
  Jc(ye, If);
  return Hf()
}
;function Lf() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;var we = Math.pow(2, 53);
var Mf = {Xe:p("<cw.eq.Wildcard>")};
function Nf(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function Of(a, b, c) {
  var d = fa(a), e = fa(b);
  if(a == Mf || b == Mf) {
    return j
  }
  if(a != k && "function" == typeof a.R) {
    return c && c.push("running custom equals function on left object"), a.R(b, c)
  }
  if(b != k && "function" == typeof b.R) {
    return c && c.push("running custom equals function on right object"), b.R(a, c)
  }
  if(Nf(d) || Nf(e)) {
    a = a === b
  }else {
    if(a instanceof RegExp && b instanceof RegExp) {
      a = a.toString() === b.toString()
    }else {
      if(ia(a) && ia(b)) {
        a = a.valueOf() === b.valueOf()
      }else {
        if("array" == d && "array" == e) {
          a: {
            if(c && c.push("descending into array"), a.length != b.length) {
              c && c.push("array length mismatch: " + a.length + ", " + b.length), a = m
            }else {
              d = 0;
              for(e = a.length;d < e;d++) {
                if(!Of(a[d], b[d], c)) {
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
          if(a.We == Zb && b.We == Zb) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!Of(a[g], b[g], c)) {
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
  this.Nf = a;
  this.jc = b
}
Z.prototype.R = function(a, b) {
  return ja(a) && this.constructor == a.constructor && Of(this.jc, a.jc, b)
};
Z.prototype.F = function(a, b) {
  a.push("new ", this.Nf, "(");
  for(var c = "", d = 0;d < this.jc.length;d++) {
    a.push(c), c = ", ", O(this.jc[d], a, b)
  }
  a.push(")")
};
function $(a) {
  G.call(this, a)
}
B($, G);
$.prototype.name = "cw.net.InvalidFrame";
function Pf() {
  var a = [];
  this.W(a);
  return a.join("")
}
function Qf() {
}
Qf.prototype.R = function(a, b) {
  return!(a instanceof Qf) ? m : Of(Rf(this), Rf(a), b)
};
Qf.prototype.F = function(a, b) {
  a.push("<HelloFrame properties=");
  O(Rf(this), a, b);
  a.push(">")
};
function Rf(a) {
  return[a.nb, a.Be, a.ee, a.Ge, a.Lb, a.td, a.ue, a.se, a.$c, a.qe, a.Se, a.Oe, a.Da, a.ec]
}
Qf.prototype.Q = Pf;
Qf.prototype.W = function(a) {
  var b = {};
  b.tnum = this.nb;
  b.ver = this.Be;
  b.format = this.ee;
  b["new"] = this.Ge;
  b.id = this.Lb;
  b.ming = this.td;
  b.pad = this.ue;
  b.maxb = this.se;
  ga(this.$c) && (b.maxt = this.$c);
  b.maxia = this.qe;
  b.tcpack = this.Se;
  b.eeds = this.Oe;
  b.sack = this.Da instanceof Ae ? se((new Sf(this.Da)).Q()) : this.Da;
  b.seenack = this.ec instanceof Ae ? se((new Sf(this.ec)).Q()) : this.ec;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(Wc(b), "H")
};
function Tf(a) {
  Z.call(this, "StringFrame", [a]);
  this.vd = a
}
B(Tf, Z);
Tf.prototype.Q = Pf;
Tf.prototype.W = function(a) {
  a.push(this.vd, " ")
};
function Uf(a) {
  Z.call(this, "CommentFrame", [a]);
  this.ff = a
}
B(Uf, Z);
Uf.prototype.Q = Pf;
Uf.prototype.W = function(a) {
  a.push(this.ff, "^")
};
function Vf(a) {
  Z.call(this, "SeqNumFrame", [a]);
  this.Me = a
}
B(Vf, Z);
Vf.prototype.Q = Pf;
Vf.prototype.W = function(a) {
  a.push("" + this.Me, "N")
};
function Wf(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = we;
    if(ue.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var g = ve(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Ae(a, c)
}
function Sf(a) {
  Z.call(this, "SackFrame", [a]);
  this.Da = a
}
B(Sf, Z);
Sf.prototype.Q = Pf;
Sf.prototype.W = function(a) {
  var b = this.Da;
  a.push(b.Qa.join(","), "|", "" + b.Ua);
  a.push("A")
};
function Xf(a) {
  Z.call(this, "StreamStatusFrame", [a]);
  this.le = a
}
B(Xf, Z);
Xf.prototype.Q = Pf;
Xf.prototype.W = function(a) {
  var b = this.le;
  a.push(b.Qa.join(","), "|", "" + b.Ua);
  a.push("T")
};
function Yf() {
  Z.call(this, "StreamCreatedFrame", [])
}
B(Yf, Z);
Yf.prototype.Q = Pf;
Yf.prototype.W = function(a) {
  a.push("C")
};
function Zf() {
  Z.call(this, "YouCloseItFrame", [])
}
B(Zf, Z);
Zf.prototype.Q = Pf;
Zf.prototype.W = function(a) {
  a.push("Y")
};
function $f(a, b) {
  Z.call(this, "ResetFrame", [a, b]);
  this.Ee = a;
  this.Ed = b
}
B($f, Z);
$f.prototype.Q = Pf;
$f.prototype.W = function(a) {
  a.push(this.Ee, "|", "" + Number(this.Ed), "!")
};
var ag = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function bg(a) {
  Z.call(this, "TransportKillFrame", [a]);
  this.reason = a
}
B(bg, Z);
bg.prototype.Q = Pf;
bg.prototype.W = function(a) {
  a.push(this.reason, "K")
};
function dg(a) {
  a || f(new $("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new Tf(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = Wf(se(a)), a == k && f(new $("bad sack")), new Sf(a)
  }
  if("N" == b) {
    return a = ve(se(a)), a == k && f(new $("bad seqNum")), new Vf(a)
  }
  if("T" == b) {
    return a = Wf(se(a)), a == k && f(new $("bad lastSackSeen")), new Xf(a)
  }
  if("Y" == b) {
    return 1 != a.length && f(new $("leading garbage")), new Zf
  }
  if("^" == b) {
    return new Uf(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && f(new $("leading garbage")), new Yf
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && f(new $("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && f(new $("bad applicationLevel")), new $f(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = ag[a], a == k && f(new $("unknown kill reason: " + a)), new bg(a)
  }
  f(new $("Invalid frame type " + b))
}
;function eg(a, b, c, d) {
  this.contentWindow = a;
  this.Tb = b;
  this.ud = c;
  this.tf = d
}
eg.prototype.F = function(a, b) {
  a.push("<XDRFrame frameId=");
  O(this.tf, a, b);
  a.push(", expandedUrl=");
  O(this.Tb, a, b);
  a.push(", streams=");
  O(this.ud, a, b);
  a.push(">")
};
function fg() {
  this.frames = [];
  this.Yc = new J
}
fg.prototype.a = Y("cw.net.XDRTracker");
function gg(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor(Lf()) + ("" + Math.floor(Lf()))
  })
}
function hg(a, b) {
  for(var c = ig, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = 0 == e.ud.length) {
      g = e.Tb;
      var i = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + i + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + P(b) + " existing frame " + P(e)), Oc(e)
    }
  }
  d = re() + re();
  e = gg(a);
  g = t.location;
  g instanceof K || (g = Tb(g));
  e instanceof K || (e = Tb(e));
  var l = g;
  g = l.J();
  (i = !!e.ha) ? Eb(g, e.ha) : i = !!e.Sa;
  i ? Fb(g, e.Sa) : i = !!e.V;
  i ? Gb(g, e.V) : i = e.Aa != k;
  var n = e.S;
  if(i) {
    Hb(g, e.Aa)
  }else {
    if(i = !!e.S) {
      if("/" != n.charAt(0) && (l.V && !l.S ? n = "/" + n : (l = g.S.lastIndexOf("/"), -1 != l && (n = g.S.substr(0, l + 1) + n))), ".." == n || "." == n) {
        n = ""
      }else {
        if(!(-1 == n.indexOf("./") && -1 == n.indexOf("/."))) {
          for(var l = 0 == n.lastIndexOf("/", 0), n = n.split("/"), q = [], H = 0;H < n.length;) {
            var r = n[H++];
            "." == r ? l && H == n.length && q.push("") : ".." == r ? ((1 < q.length || 1 == q.length && "" != q[0]) && q.pop(), l && H == n.length && q.push("")) : (q.push(r), l = j)
          }
          n = q.join("/")
        }
      }
    }
  }
  i ? Ib(g, n) : i = "" !== e.H.toString();
  i ? (l = e.H, l.Wa || (l.Wa = l.toString() ? decodeURIComponent(l.toString()) : ""), Jb(g, l.Wa, h)) : i = !!e.Ia;
  i && Kb(g, e.Ia);
  e = g.toString();
  g = ("" + t.location).match(ab)[3] || k;
  i = e.match(ab)[3] || k;
  g == i ? (c.a.info("No need to make a real XDRFrame for " + P(b)), c = Oc(new eg(t, e, [b], k))) : ((g = Q("minerva-elements")) || f(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new Cc, c.Yc.set(d, [i, e, b]), c.a.info("Creating new XDRFrame " + P(d) + "for " + P(b)), c = rd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = i);
  return c
}
fg.prototype.jg = function(a) {
  var b = this.Yc.get(a);
  b || f(Error("Unknown frameId " + P(a)));
  this.Yc.remove(b);
  var c = b[0], a = new eg(Q("minerva-xdrframe-" + a).contentWindow || (Q("minerva-xdrframe-" + a).contentDocument || Q("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (Q("minerva-xdrframe-" + a).contentDocument || Q("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.$(a)
};
var ig = new fg;
t.__XHRTracker_xdrFrameLoaded = y(ig.jg, ig);
var jg;
jg = m;
var kg = Ha();
kg && (-1 != kg.indexOf("Firefox") || -1 != kg.indexOf("Camino") || -1 != kg.indexOf("iPhone") || -1 != kg.indexOf("iPod") || -1 != kg.indexOf("iPad") || -1 != kg.indexOf("Android") || -1 != kg.indexOf("Chrome") && (jg = j));
var lg = jg;
var Kf = "4bdfc178fc0e508c0cd5efc3fdb09920";
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function mg(a, b, c, d, e, g) {
  Cc.call(this, e, g);
  this.oe = a;
  this.Ic = [];
  this.Td = !!b;
  this.qf = !!c;
  this.gf = !!d;
  for(b = 0;b < a.length;b++) {
    Kc(a[b], y(this.Xd, this, b, j), y(this.Xd, this, b, m))
  }
  0 == a.length && !this.Td && this.$(this.Ic)
}
B(mg, Cc);
mg.prototype.we = 0;
mg.prototype.Xd = function(a, b, c) {
  this.we++;
  this.Ic[a] = [b, c];
  this.ta || (this.Td && b ? this.$([a, c]) : this.qf && !b ? this.wb(c) : this.we == this.oe.length && this.$(this.Ic));
  this.gf && !b && (c = k);
  return c
};
mg.prototype.wb = function(a) {
  mg.e.wb.call(this, a);
  ib(this.oe, function(a) {
    a.cancel()
  })
};
function ng(a) {
  a = new mg(a, m, j);
  Jc(a, function(a) {
    return kb(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function og(a, b) {
  this.ig = a;
  this.re = b
}
og.prototype.Vc = 0;
og.prototype.gc = 0;
og.prototype.Nc = m;
function pg(a) {
  var b = [];
  if(a.Nc) {
    return[b, 2]
  }
  var c = a.Vc, d = a.ig.responseText;
  for(a.Vc = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var e = d.substr(a.gc, c - a.gc), e = e.replace(/\r$/, "");
    if(e.length > a.re) {
      return a.Nc = j, [b, 2]
    }
    b.push(e);
    a.gc = c += 1
  }
  return a.Vc - a.gc - 1 > a.re ? (a.Nc = j, [b, 2]) : [b, 1]
}
;function qg(a, b, c) {
  this.C = b;
  this.Y = a;
  this.Fc = c
}
B(qg, L);
s = qg.prototype;
s.a = Y("cw.net.XHRMaster");
s.Ca = -1;
s.Zc = function(a, b, c) {
  this.Fc.__XHRSlave_makeRequest(this.Y, a, b, c)
};
s.va = o("Ca");
s.cd = function(a, b) {
  1 != b && U(this.a, P(this.Y) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Af(this.C);
  Bf(this.C, a)
};
s.dd = function(a) {
  W(this.a, "ongotheaders_: " + P(a));
  var b = k;
  "Content-Length" in a && (b = ve(a["Content-Length"]));
  a = this.C;
  W(a.a, a.n() + " got Content-Length: " + b);
  a.ia == rg && (b == k && (V(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), sg(a, 2E3 + 1E3 * (b / 3072)))
};
s.ed = function(a) {
  1 != a && W(this.a, this.C.n() + "'s XHR's readyState is " + a);
  this.Ca = a;
  2 <= this.Ca && Af(this.C)
};
s.bd = function() {
  this.C.b()
};
s.c = function() {
  qg.e.c.call(this);
  delete tg.ma[this.Y];
  this.Fc.__XHRSlave_dispose(this.Y);
  delete this.Fc
};
function ug() {
  this.ma = {}
}
B(ug, L);
s = ug.prototype;
s.a = Y("cw.net.XHRMasterTracker");
s.Hc = function(a, b) {
  var c = "_" + re(), d = new qg(c, a, b);
  return this.ma[c] = d
};
s.cd = function(a, b, c) {
  if(La) {
    for(var d = [], e = 0, g = b.length;e < g;e++) {
      d[e] = b[e]
    }
    b = d
  }else {
    b = pb(b)
  }
  (d = this.ma[a]) ? d.cd(b, c) : U(this.a, "onframes_: no master for " + P(a))
};
s.dd = function(a, b) {
  var c = this.ma[a];
  c ? c.dd(b) : U(this.a, "ongotheaders_: no master for " + P(a))
};
s.ed = function(a, b) {
  var c = this.ma[a];
  c ? c.ed(b) : U(this.a, "onreadystatechange_: no master for " + P(a))
};
s.bd = function(a) {
  var b = this.ma[a];
  b ? (delete this.ma[b.Y], b.bd()) : U(this.a, "oncomplete_: no master for " + P(a))
};
s.c = function() {
  ug.e.c.call(this);
  for(var a = db(this.ma);a.length;) {
    a.pop().b()
  }
  delete this.ma
};
var tg = new ug;
t.__XHRMaster_onframes = y(tg.cd, tg);
t.__XHRMaster_oncomplete = y(tg.bd, tg);
t.__XHRMaster_ongotheaders = y(tg.dd, tg);
t.__XHRMaster_onreadystatechange = y(tg.ed, tg);
function vg(a, b, c) {
  this.fa = a;
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
  this.fa = a;
  this.Ea = b
}
xg.prototype.F = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  O(this.fa, a, b);
  a.push(", secondaryUrl=");
  O(this.Ea, a, b);
  a.push(">")
};
function yg(a, b, c, d) {
  this.fa = a;
  this.Ae = b;
  this.Ea = c;
  this.Le = d;
  (!(0 == this.fa.indexOf("http://") || 0 == this.fa.indexOf("https://")) || !(0 == this.Ea.indexOf("http://") || 0 == this.Ea.indexOf("https://"))) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Ae.location.href;
  bb(this.fa, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Le.location.href;
  bb(this.Ea, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
yg.prototype.F = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  O(this.fa, a, b);
  a.push(", secondaryUrl=");
  O(this.Ea, a, b);
  a.push(">")
};
var zg = new Uf(";)]}");
function Ag() {
}
Ag.prototype.Ud = p(1);
function Bg(a) {
  this.Wf = a
}
Bg.prototype.F = function(a, b) {
  a.push("<UserContext for ");
  O(this.Wf, a, b);
  a.push(">")
};
function Cg(a, b, c) {
  this.t = a;
  this.Xf = b ? b : new Ag;
  this.q = c ? c : Sc;
  this.Mb = new Se;
  this.Lb = re() + re();
  this.ga = new Be;
  this.Tc = new De;
  this.Nb = k;
  this.vc = [];
  this.ob = new Bg(this);
  this.af = y(this.dg, this);
  E && (this.Nb = rc(t, "load", this.Of, m, this))
}
B(Cg, L);
s = Cg.prototype;
s.a = Y("cw.net.ClientStream");
s.me = new Ae(-1, []);
s.ne = new Ae(-1, []);
s.Ff = 50;
s.Ef = 1048576;
s.gd = k;
s.fd = k;
s.onreset = k;
s.ye = k;
s.jb = k;
s.rd = m;
s.ld = m;
s.d = 1;
s.xd = -1;
s.h = k;
s.v = k;
s.Fb = k;
s.sd = 0;
s.ze = 0;
s.Ke = 0;
s.F = function(a, b) {
  a.push("<ClientStream id=");
  O(this.Lb, a, b);
  a.push(", state=", "" + this.d);
  a.push(", primary=");
  O(this.h, a, b);
  a.push(", secondary=");
  O(this.v, a, b);
  a.push(", resetting=");
  O(this.Fb, a, b);
  a.push(">")
};
function Dg(a) {
  var b = [-1];
  a.h && b.push(a.h.gb);
  a.v && b.push(a.v.gb);
  return Math.max.apply(Math.max, b)
}
function Eg(a) {
  if(!(3 > a.d)) {
    Fg(a);
    var b = 0 != a.ga.M.r(), c = Ee(a.Tc), d = !c.R(a.ne) && !(a.h && c.R(a.h.cb) || a.v && c.R(a.v.cb)), e = Dg(a);
    if((b = b && e < a.ga.Ha) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.h.rb ? (X(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.h, c != d.cb && (!d.na && !d.w.length && Gg(d), d.w.push(new Sf(c)), d.cb = c)), b && Hg(a.h, a.ga, e + 1), a.h.la()) : a.v == k ? a.rd ? (X(a.a, "tryToSend_: creating secondary to send " + g), a.v = Ig(a, m), b && Hg(a.v, a.ga, e + 1), a.v.la()) : (X(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.ld = j) : X(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
function Fg(a) {
  a.jb != k && (a.q.B.clearTimeout(a.jb), a.jb = k)
}
s.dg = function() {
  this.jb = k;
  Eg(this)
};
function Jg(a) {
  a.jb == k && (a.jb = a.q.B.setTimeout(a.af, 6))
}
s.Of = function() {
  this.Nb = k;
  if(this.h && this.h.ab()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.h;
    a.xc = j;
    a.b()
  }
  this.v && this.v.ab() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.v, a.xc = j, a.b())
};
function Kg(a, b) {
  var c;
  ga(c) || (c = j);
  3 < a.d && f(Error("sendString: Can't send in state " + a.d));
  c && !/^([ -~]*)$/.test(b) && f(Error("sendString: string has illegal chars: " + P(b)));
  a.ga.append(b);
  Jg(a)
}
function Ig(a, b) {
  var c;
  a.t instanceof yg ? c = 1 == a.Xf.Ud() ? rg : Lg : a.t instanceof wg ? c = Mg : f(Error("Don't support endpoint " + P(a.t)));
  a.xd += 1;
  c = new Ng(a.q, a, a.xd, c, a.t, b);
  X(a.a, "Created: " + c.n());
  a.Mb.add(c);
  return c
}
function Og(a, b, c) {
  var d = new Pg(a.q, a, b, c);
  X(a.a, "Created: " + d.n() + ", delay=" + b + ", times=" + c);
  a.Mb.add(d);
  return d
}
function Qg(a, b) {
  a.Mb.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  W(a.a, "Offline: " + b.n());
  a.sd = b.za ? a.sd + b.za : 0;
  1 <= a.sd && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.ob, "stream penalty reached limit", m), a.b());
  if(3 < a.d) {
    4 == a.d && b.Ve ? (W(a.a, "Disposing because resettingTransport_ is done."), a.b()) : W(a.a, "Not creating a transport because ClientStream is in state " + a.d)
  }else {
    var c;
    var d;
    c = b instanceof Pg;
    if(!c && b.xc) {
      var e = E ? lg ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      X(a.a, "getDelayForNextTransport_: " + P({delay:c, times:d}))
    }else {
      if(d = b.Jd(), b == a.h ? d ? e = ++a.ze : c || (e = a.ze = 0) : d ? e = ++a.Ke : c || (e = a.Ke = 0), c || !e) {
        d = c = 0, X(a.a, "getDelayForNextTransport_: " + P({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), i = Math.floor(4E3 * Math.random()) - 2E3, l = Math.max(0, b.Re - b.yd);
        d = (c = Math.max(0, g + i - l)) ? 1 : 0;
        X(a.a, "getDelayForNextTransport_: " + P({count:e, base:g, variance:i, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    b == a.h ? (a.h = k, c ? a.h = Og(a, e, c) : (e = Dg(a), a.h = Ig(a, j), Hg(a.h, a.ga, e + 1)), a.h.la()) : b == a.v && (a.v = k, c ? (a.v = Og(a, e, c), a.v.la()) : Eg(a))
  }
}
s.reset = function(a) {
  3 < this.d && f(Error("reset: Can't send reset in state " + this.d));
  Fg(this);
  0 != this.ga.M.r() && V(this.a, "reset: strings in send queue will never be sent: " + P(this.ga));
  this.d = 4;
  this.h && this.h.rb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Rg(this.h, a), this.h.la()) : (this.h && (W(this.a, "reset: Disposing primary before sending ResetFrame."), this.h.b()), this.v && (W(this.a, "reset: Disposing secondary before sending ResetFrame."), this.v.b()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Fb = Ig(this, m), Rg(this.Fb, a), this.Fb.la());
  this.onreset && this.onreset.call(this.ob, a, j)
};
function Sg(a, b, c, d) {
  var e;
  e = a.Tc;
  for(var g = a.Ff, i = a.Ef, l = [], n = m, q = 0, H = c.length;q < H;q++) {
    var r = c[q], w = r[0], r = r[1];
    if(w == e.Na + 1) {
      e.Na += 1;
      for(l.push(r);;) {
        w = e.Na + 1;
        r = e.Ga.get(w, Fe);
        if(r === Fe) {
          break
        }
        l.push(r[0]);
        e.Ga.remove(w);
        e.O -= r[1];
        e.Na = w
      }
    }else {
      if(!(w <= e.Na)) {
        if(g != k && e.Ga.r() >= g) {
          n = j;
          break
        }
        var z = xe(r);
        if(i != k && e.O + z > i) {
          n = j;
          break
        }
        e.Ga.set(w, [r, z]);
        e.O += z
      }
    }
  }
  e.Ga.Ma() && e.Ga.clear();
  e = [l, n];
  c = e[0];
  e = e[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(i = c[g], a.gd && a.gd.call(a.ob, i), 4 == a.d || a.aa) {
        return
      }
    }
  }
  d || Jg(a);
  if(!(4 == a.d || a.aa) && e) {
    U(b.a, b.n() + "'s peer caused rwin overflow."), b.b()
  }
}
s.Qd = function(a) {
  U(this.a, "Failed to start " + P(this) + "; error was " + P(a.message));
  this.b()
};
s.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.d && f(Error("ClientStream.start: " + P(this) + " already started"));
  this.fd && this.fd(this);
  this.d = 2;
  if(this.t instanceof xg) {
    var a = hg(this.t.fa, this), b = hg(this.t.Ea, this), a = ng([a, b]);
    Jc(a, y(this.of, this));
    Lc(a, y(this.Qd, this))
  }else {
    if(this.t instanceof vg) {
      if(ze) {
        this.Sd()
      }else {
        var a = Jf(this.q, this.t.fa), c = this;
        Jc(a, function(a) {
          ze || (ze = new Ef(c.q, a));
          return k
        });
        Jc(a, y(this.Sd, this));
        Lc(a, y(this.Qd, this))
      }
    }else {
      Tg(this)
    }
  }
};
s.of = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Tb, e = a[1].Tb;
  this.vc.push(a[0]);
  this.vc.push(a[1]);
  this.t = new yg(d, b, e, c);
  Tg(this)
};
s.Sd = function() {
  this.t = new wg(this.t.host, this.t.port, ze);
  Tg(this)
};
function Tg(a) {
  a.d = 3;
  a.h = Ig(a, j);
  Hg(a.h, a.ga, k);
  a.h.la()
}
s.c = function() {
  this.a.info(P(this) + " in disposeInternal.");
  Fg(this);
  this.d = 5;
  for(var a = this.Mb.G(), b = 0;b < a.length;b++) {
    a[b].b()
  }
  for(a = 0;a < this.vc.length;a++) {
    ob(this.vc[a].ud, this)
  }
  E && this.Nb && (uc(this.Nb), this.Nb = k);
  this.ye && this.ye.call(this.ob);
  delete this.Mb;
  delete this.h;
  delete this.v;
  delete this.Fb;
  delete this.ob;
  Cg.e.c.call(this)
};
var rg = 1, Lg = 2, Mg = 3;
function Ng(a, b, c, d, e, g) {
  this.q = a;
  this.A = b;
  this.nb = c;
  this.ia = d;
  this.t = e;
  this.w = [];
  this.Va = g;
  this.rb = !this.ab();
  this.ib = this.ia != rg;
  this.$e = y(this.ag, this)
}
B(Ng, L);
s = Ng.prototype;
s.a = Y("cw.net.ClientTransport");
s.m = k;
s.yd = k;
s.Re = k;
s.kc = k;
s.na = m;
s.rc = m;
s.cb = k;
s.Vb = 0;
s.gb = -1;
s.ic = -1;
s.Ve = m;
s.xc = m;
s.za = 0;
s.zb = m;
s.F = function(a) {
  a.push("<ClientTransport #", "" + this.nb, ", becomePrimary=", "" + this.Va, ">")
};
s.n = function() {
  return(this.Va ? "Prim. T#" : "Sec. T#") + this.nb
};
s.Jd = function() {
  return!(!this.zb && this.Vb)
};
s.ab = function() {
  return this.ia == rg || this.ia == Lg
};
function Ug(a, b) {
  tb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Sg(a.A, a, b, !a.ib)
}
function Vg(a, b, c) {
  try {
    var d = dg(b);
    a.Vb += 1;
    W(a.a, a.n() + " RECV " + P(d));
    var e;
    1 == a.Vb && !d.R(zg) && a.ab() ? (V(a.a, a.n() + " is closing soon because got bad preamble: " + P(d)), e = j) : e = m;
    if(e) {
      return j
    }
    if(d instanceof Tf) {
      if(!/^([ -~]*)$/.test(d.vd)) {
        return a.zb = j
      }
      a.ic += 1;
      c.push([a.ic, d.vd])
    }else {
      if(d instanceof Sf) {
        var g = a.A, i = d.Da;
        g.me = i;
        var l = g.ga, n = i.Ua, c = m;
        n > l.Ha && (c = j);
        for(var q = Ce(l).concat(), d = 0;d < q.length;d++) {
          var H = q[d];
          if(H > n) {
            break
          }
          var r = l.M.get(H)[1];
          l.M.remove(H);
          l.O -= r
        }
        for(d = 0;d < i.Qa.length;d++) {
          var w = i.Qa[d];
          w > l.Ha && (c = j);
          l.M.U(w) && (r = l.M.get(w)[1], l.M.remove(w), l.O -= r)
        }
        l.M.Ma() && l.M.clear();
        if(c) {
          return V(a.a, a.n() + " is closing soon because got bad SackFrame"), a.zb = j
        }
      }else {
        if(d instanceof Vf) {
          a.ic = d.Me - 1
        }else {
          if(d instanceof Xf) {
            a.A.ne = d.le
          }else {
            if(d instanceof Zf) {
              return X(a.a, a.n() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof bg) {
              return a.zb = j, "stream_attach_failure" == d.reason ? a.za += 1 : "acked_unsent_strings" == d.reason && (a.za += 0.5), X(a.a, a.n() + " is closing soon because got " + P(d)), j
            }
            if(!(d instanceof Uf)) {
              if(d instanceof Yf) {
                var z = a.A, Wh = !a.ib;
                X(z.a, "Stream is now confirmed to exist at server.");
                z.rd = j;
                z.ld && !Wh && (z.ld = m, Eg(z))
              }else {
                if(c.length) {
                  Ug(a, c);
                  if(!u(c)) {
                    for(var Xd = c.length - 1;0 <= Xd;Xd--) {
                      delete c[Xd]
                    }
                  }
                  c.length = 0
                }
                if(d instanceof $f) {
                  var Ic = a.A;
                  Ic.onreset && Ic.onreset.call(Ic.ob, d.Ee, d.Ed);
                  Ic.b();
                  return j
                }
                f(Error(a.n() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(cg) {
    return cg instanceof $ || f(cg), V(a.a, a.n() + " is closing soon because got InvalidFrame: " + P(b)), a.zb = j
  }
  return m
}
function Bf(a, b) {
  a.rc = j;
  try {
    for(var c = m, d = [], e = 0, g = b.length;e < g;e++) {
      if(a.aa) {
        a.a.info(a.n() + " returning from loop because we're disposed.");
        return
      }
      if(c = Vg(a, b[e], d)) {
        break
      }
    }
    d.length && Ug(a, d);
    a.rc = m;
    a.w.length && a.la();
    c && (X(a.a, a.n() + " closeSoon is true.  Frames were: " + P(b)), a.b())
  }finally {
    a.rc = m
  }
}
s.ag = function() {
  V(this.a, this.n() + " timed out due to lack of connection or no data being received.");
  this.b()
};
function Wg(a) {
  a.kc != k && (a.q.B.clearTimeout(a.kc), a.kc = k)
}
function sg(a, b) {
  Wg(a);
  b = Math.round(b);
  a.kc = a.q.B.setTimeout(a.$e, b);
  W(a.a, a.n() + "'s receive timeout set to " + b + " ms.")
}
function Af(a) {
  a.ia != rg && (a.ia == Mg || a.ia == Lg ? sg(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ia)))
}
function Gg(a) {
  var b = new Qf;
  b.nb = a.nb;
  b.Be = 2;
  b.ee = 2;
  a.A.rd || (b.Ge = j);
  b.Lb = a.A.Lb;
  b.td = a.ib;
  b.td && (b.ue = 4096);
  b.se = 3E5;
  b.qe = a.ib ? Math.floor(10) : 0;
  b.Se = m;
  a.Va && (b.Oe = k, b.$c = Math.floor((a.ib ? 358E4 : 25E3) / 1E3));
  b.Da = Ee(a.A.Tc);
  b.ec = a.A.me;
  a.w.push(b);
  a.cb = b.Da
}
function Cf(a, b) {
  b && (a.za += 0.5);
  a.b()
}
s.la = function() {
  this.na && !this.rb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.rc) {
    X(this.a, this.n() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.na;
    this.na = j;
    !a && !this.w.length && Gg(this);
    for(a = 0;a < this.w.length;a++) {
      W(this.a, this.n() + " SEND " + P(this.w[a]))
    }
    if(this.ab()) {
      for(var a = [], b = 0, c = this.w.length;b < c;b++) {
        this.w[b].W(a), a.push("\n")
      }
      this.w = [];
      a = a.join("");
      b = this.Va ? this.t.fa : this.t.Ea;
      this.m = tg.Hc(this, this.Va ? this.t.Ae : this.t.Le);
      this.yd = this.q.B === Bc ? A() : this.q.B.getTime();
      this.m.Zc(b, "POST", a);
      sg(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.ib ? 0 : this.Va ? 25E3 : 0))
    }else {
      if(this.ia == Mg) {
        a = [];
        b = 0;
        for(c = this.w.length;b < c;b++) {
          a.push(this.w[b].Q())
        }
        this.w = [];
        this.m ? this.m.Ob(a) : (b = this.t, this.m = new Ff(this), this.m.qc = b.cg.Hc(this.m), this.yd = this.q.B === Bc ? A() : this.q.B.getTime(), this.m.Ec(b.host, b.port), this.m.aa || (this.m.Ob(a), this.m.aa || sg(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.ia))
      }
    }
  }
};
function Hg(a, b, c) {
  !a.na && !a.w.length && Gg(a);
  for(var d = Math.max(c, a.gb + 1), e = Ce(b), c = [], g = 0;g < e.length;g++) {
    var i = e[g];
    (d == k || i >= d) && c.push([i, b.M.get(i)[0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], e = g[0], g = g[1], (-1 == a.gb || a.gb + 1 != e) && a.w.push(new Vf(e)), a.w.push(new Tf(g)), a.gb = e
  }
}
s.c = function() {
  this.a.info(this.n() + " in disposeInternal.");
  Ng.e.c.call(this);
  this.Re = this.q.B === Bc ? A() : this.q.B.getTime();
  this.w = [];
  Wg(this);
  this.m && this.m.b();
  var a = this.A;
  this.A = k;
  Qg(a, this)
};
function Rg(a, b) {
  !a.na && !a.w.length && Gg(a);
  a.w.push(new $f(b, j));
  a.Ve = j
}
function Pg(a, b, c, d) {
  this.q = a;
  this.A = b;
  this.Pd = c;
  this.Ld = d
}
B(Pg, L);
s = Pg.prototype;
s.na = m;
s.rb = m;
s.$b = k;
s.cb = k;
s.a = Y("cw.net.DoNothingTransport");
function Xg(a) {
  a.$b = a.q.B.setTimeout(function() {
    a.$b = k;
    a.Ld--;
    a.Ld ? Xg(a) : a.b()
  }, a.Pd)
}
s.la = function() {
  this.na && !this.rb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.na = j;
  Xg(this)
};
s.F = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.Pd, ">")
};
s.ab = p(m);
s.n = p("Wast. T");
s.Jd = p(m);
s.c = function() {
  this.a.info(this.n() + " in disposeInternal.");
  Pg.e.c.call(this);
  this.$b != k && this.q.B.clearTimeout(this.$b);
  var a = this.A;
  this.A = k;
  Qg(a, this)
};
/*

 linkify - v0.3 - 6/27/2009
 http://benalman.com/code/test/js-linkify/

 Copyright (c) 2009 "Cowboy" Ben Alman
 Licensed under the MIT license
 http://benalman.com/about/license/

 Some regexps adapted from http://userscripts.org/scripts/review/7122
*/
var Yg, Zg, $g, ah;
Yg = RegExp("(?:\\b[a-z\\d.-]+://[^<>\\s]+|\\b(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:[;/][^#?<>\\s]*)?(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w)|(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w))", 
"ig");
Zg = /^[a-z\d.-]+:\/\//i;
$g = {"'":"`", ">":"<", ")":"(", "]":"[", "}":"{", "\u00bb":"\u00ab", "\u203a":"\u2039"};
ah = {$:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, De:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
function bh(a) {
  var b;
  b = b || {};
  var c = [], d, e;
  for(e in ah) {
    ga(b[e]) || (b[e] = ah[e])
  }
  for(;e = Yg.exec(a);) {
    e = e[0];
    var g = Yg.lastIndex, i = g - e.length;
    if(!/[\/:]/.test(a.charAt(i - 1))) {
      do {
        var l = e, n = e.substr(-1), q = $g[n];
        if(q && (q = e.match(RegExp("\\" + q + "(?!$)", "g")), n = e.match(RegExp("\\" + n, "g")), (q ? q.length : 0) < (n ? n.length : 0))) {
          e = e.substr(0, e.length - 1), g--
        }
        b.De && (e = e.replace(b.De, function(a) {
          g -= a.length;
          return""
        }))
      }while(e.length && e !== l);
      l = e;
      Zg.test(l) || (l = (-1 !== l.indexOf("@") ? !l.indexOf("mailto:") ? "" : "mailto:" : !l.indexOf("irc.") ? "irc://" : !l.indexOf("ftp.") ? "ftp://" : "http://") + l);
      d != i && (c.push([a.slice(d, i)]), d = g);
      c.push([e, l])
    }
  }
  c.push([a.substr(d)]);
  d = "";
  for(e = 0;e < c.length;e++) {
    d += b.$.apply(t, c[e])
  }
  return d || a
}
;function ch() {
  this.Fe = A()
}
var dh = new ch;
ch.prototype.set = aa("Fe");
ch.prototype.reset = function() {
  this.set(A())
};
ch.prototype.get = o("Fe");
function eh(a) {
  this.jd = a || "";
  this.Uf = dh
}
eh.prototype.Qf = j;
eh.prototype.Sf = j;
eh.prototype.Rf = j;
eh.prototype.Ne = m;
function fh(a) {
  return 10 > a ? "0" + a : "" + a
}
function gh(a, b) {
  var c = (a.Pe - b) / 1E3, d = c.toFixed(3), e = 0;
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
function hh(a) {
  eh.call(this, a)
}
B(hh, eh);
hh.prototype.Ne = j;
function ih(a) {
  this.ad = a || 100;
  this.pa = []
}
s = ih.prototype;
s.Cb = 0;
s.add = function(a) {
  this.pa[this.Cb] = a;
  this.Cb = (this.Cb + 1) % this.ad
};
s.get = function(a) {
  a = jh(this, a);
  return this.pa[a]
};
s.set = function(a, b) {
  a = jh(this, a);
  this.pa[a] = b
};
s.r = function() {
  return this.pa.length
};
s.Ma = function() {
  return 0 == this.pa.length
};
s.clear = function() {
  this.Cb = this.pa.length = 0
};
s.G = function() {
  for(var a = this.r(), b = this.r(), c = [], a = this.r() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
s.ca = function() {
  for(var a = [], b = this.r(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
s.U = function(a) {
  return a < this.r()
};
s.Rb = function(a) {
  for(var b = this.r(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return j
    }
  }
  return m
};
function jh(a, b) {
  b >= a.pa.length && f(Error("Out of bounds exception"));
  return a.pa.length < a.ad ? b : (a.Cb + Number(b)) % a.ad
}
;function kh(a, b) {
  this.wa = a || "";
  this.jd = b || "";
  this.hb = [];
  this.mc = new ih(lh);
  this.Lf = y(this.Ye, this);
  this.sf = new hh(this.jd);
  this.pf = {};
  if(j != this.he) {
    this.he = j;
    var c = sf(), d = this.Lf;
    c.Ab || (c.Ab = []);
    c.Ab.push(d)
  }
  this.vb = "1" == mh(this.wa, "enabled");
  t.setInterval(y(this.Pf, this), 7500)
}
var lh = 500;
s = kh.prototype;
s.Ue = "LOGGING";
s.mf = m;
s.s = k;
s.Cd = m;
s.he = m;
s.Gd = k;
s.Wc = A();
s.La = function() {
  this.vb && nh(this)
};
s.isEnabled = o("vb");
s.oc = function(a) {
  if(this.vb = a) {
    nh(this), this.s && this.uc()
  }
  oh(this, "enabled", a ? "1" : "0")
};
function ph(a) {
  return!!a.s && !a.s.closed
}
s.df = function() {
  this.mc.clear();
  ph(this) && this.uc()
};
s.Ye = function(a) {
  if(!this.pf[a.pe]) {
    var b = this.sf, c;
    switch(a.X.value) {
      case cf.value:
        c = "dbg-sh";
        break;
      case df.value:
        c = "dbg-sev";
        break;
      case ef.value:
        c = "dbg-w";
        break;
      case ff.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.jd, " ");
    if(b.Qf) {
      var e = new Date(a.Pe);
      d.push("[", fh(e.getFullYear() - 2E3) + fh(e.getMonth() + 1) + fh(e.getDate()) + " " + fh(e.getHours()) + ":" + fh(e.getMinutes()) + ":" + fh(e.getSeconds()) + "." + fh(Math.floor(e.getMilliseconds() / 10)), "] ")
    }
    b.Sf && d.push("[", Aa(gh(a, b.Uf.get())), "s] ");
    b.Rf && d.push("[", C(a.pe), "] ");
    d.push('<span class="', c, '">', ua(Aa(C(a.te))));
    b.Ne && a.Mc && d.push("<br>", ua(Aa(a.Lc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.vb ? (nh(this), this.mc.add(b), qh(this, b)) : this.mc.add(b);
    this.mf && a.X.value >= df.value && this.oc(j)
  }
};
function qh(a, b) {
  a.hb.push(b);
  t.clearTimeout(a.Gd);
  750 < A() - a.Wc ? a.Dd() : a.Gd = t.setTimeout(y(a.Dd, a), 250)
}
s.Dd = function() {
  this.Wc = A();
  if(ph(this)) {
    var a = this.s.document.body, a = a && 100 >= a.scrollHeight - (a.scrollTop + a.clientHeight);
    this.s.document.write(this.hb.join(""));
    this.hb.length = 0;
    a && this.s.scrollTo(0, 1E6)
  }
};
function rh(a) {
  for(var b = a.mc.G(), c = 0;c < b.length;c++) {
    qh(a, b[c])
  }
}
function nh(a) {
  if(!ph(a) && !a.Cd) {
    var b = mh(a.wa, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), e = Number(b[2]), b = Number(b[3]);
    a.Cd = j;
    a.s = window.open("", D ? a.wa.replace(/[\s\-\.\,]/g, "_") : a.wa, "width=" + e + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    !a.s && !a.Tf && (alert("Logger popup was blocked"), a.Tf = j);
    a.Cd = m;
    a.s && a.uc()
  }
}
s.Xb = p("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
s.uc = function() {
  ph(this) || (this.s.document.open(), qh(this, "<style>" + this.Xb() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.Ue + "<br><small>Logger: " + this.wa + "</small></div><hr>"), rh(this))
};
function oh(a, b, c) {
  b += a.wa;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(A() + 2592E6)).toUTCString()
}
function mh(a, b, c) {
  var a = b + a, b = "" + document.cookie, d = b.indexOf(a + "=");
  return-1 != d ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, -1 == c ? b.length : c))) : c || ""
}
s.Pf = function() {
  ph(this) && oh(this, "dbg", (this.s.screenX || this.s.screenLeft || 0) + "," + (this.s.screenY || this.s.screenTop || 0) + "," + (this.s.outerWidth || 800) + "," + (this.s.outerHeight || 500))
};
function sh(a, b) {
  if(th) {
    var c = uh(), d;
    for(d in c) {
      var e = d.replace("fancywindow.sel.", ""), e = Y(e), g = e.X, i = window.localStorage.getItem(d).toString();
      (!g || g.toString() != i) && e.lb(nf(i))
    }
  }
  kh.call(this, a, b)
}
B(sh, kh);
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
s.Dd = function() {
  this.Wc = A();
  if(ph(this)) {
    for(var a = this.K.g("log"), b = 100 >= a.scrollHeight - (a.scrollTop + a.offsetHeight), c = 0;c < this.hb.length;c++) {
      var d = this.K.o("div", "logmsg");
      d.innerHTML = this.hb[c];
      a.appendChild(d)
    }
    this.hb.length = 0;
    this.Ie();
    b && (a.scrollTop = a.scrollHeight)
  }
};
s.uc = function() {
  if(ph(this)) {
    var a = this.s.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.wa + "</title><style>" + this.Xb() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.wa + "</b></p><p>" + this.Ue + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (D ? a.body : this.s).onresize = y(this.Ie, this);
    this.K = new ld(a);
    this.K.g("openbutton").onclick = y(this.Jf, this);
    this.K.g("closebutton").onclick = y(this.ef, this);
    this.K.g("clearbutton").onclick = y(this.df, this);
    this.K.g("exitbutton").onclick = y(this.nf, this);
    rh(this)
  }
};
s.Jf = function() {
  var a = this.K.g("optionsarea");
  a.innerHTML = "";
  for(var b = wh(), c = this.K, d = 0;d < b.length;d++) {
    var e = Y(b[d]), e = c.o("div", {}, xh(this, "sel" + b[d], e.X ? e.X.name : "INHERIT"), c.o("span", {}, b[d] || "(root)"));
    a.appendChild(e)
  }
  this.K.g("options").style.display = "block";
  return m
};
function xh(a, b, c) {
  for(var a = a.K, b = a.o("select", {id:b}), d = 0;d < lf.length;d++) {
    var e = lf[d], g = a.o("option", {}, e.name);
    c == e.name && (g.selected = j);
    b.appendChild(g)
  }
  b.appendChild(a.o("option", {selected:"INHERIT" == c}, "INHERIT"));
  return b
}
s.ef = function() {
  this.K.g("options").style.display = "none";
  for(var a = wh(), b = this.K, c = 0;c < a.length;c++) {
    var d = Y(a[c]), e = b.g("sel" + a[c]), e = e.options[e.selectedIndex].text;
    "INHERIT" == e ? d.lb(k) : d.lb(nf(e))
  }
  if(th) {
    a = wh();
    b = uh();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], e = Y(a[c]).X, d in b ? e ? window.localStorage.getItem(d) != e.name && window.localStorage.setItem(d, e.name) : window.localStorage.removeItem(d) : e && window.localStorage.setItem(d, e.name)
    }
  }
  return m
};
s.Ie = function() {
  var a = this.K, b = a.g("log"), c = a.g("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.L.body.offsetHeight - c.offsetHeight - (D ? 4 : 0) + "px"
};
s.nf = function() {
  this.oc(m);
  this.s && this.s.close()
};
s.Xb = function() {
  return sh.e.Xb.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function uh() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != k && 0 == d.lastIndexOf("fancywindow.sel.", 0) && (a[d] = j)
  }
  return a
}
function wh() {
  var a = eb(pf);
  a.sort();
  return a
}
;function yh() {
}
yh.prototype.Pb = k;
var zh;
function Ah() {
}
B(Ah, yh);
function Bh(a) {
  return(a = Ch(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Dh(a) {
  var b = {};
  Ch(a) && (b[0] = j, b[1] = j);
  return b
}
Ah.prototype.Rc = k;
function Ch(a) {
  if(!a.Rc && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Rc = d
      }catch(e) {
      }
    }
    f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Rc
}
zh = new Ah;
function Eh(a) {
  this.headers = new J;
  this.pb = a || k
}
B(Eh, Ac);
Eh.prototype.a = Y("goog.net.XhrIo");
var Fh = /^https?$/i;
s = Eh.prototype;
s.oa = m;
s.i = k;
s.wc = k;
s.Xc = "";
s.ke = "";
s.Bb = "";
s.Jc = m;
s.bc = m;
s.Sc = m;
s.Ka = m;
s.sc = 0;
s.Ra = k;
s.Je = "";
s.gg = m;
s.send = function(a, b, c, d) {
  this.i && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Xc = a;
  this.Bb = "";
  this.ke = b;
  this.Jc = m;
  this.oa = j;
  this.i = this.pb ? Bh(this.pb) : Bh(zh);
  this.wc = this.pb ? this.pb.Pb || (this.pb.Pb = Dh(this.pb)) : zh.Pb || (zh.Pb = Dh(zh));
  this.i.onreadystatechange = y(this.xe, this);
  try {
    W(this.a, Gh(this, "Opening Xhr")), this.Sc = j, this.i.open(b, a, j), this.Sc = m
  }catch(e) {
    W(this.a, Gh(this, "Error opening Xhr: " + e.message));
    Hh(this, e);
    return
  }
  var a = c || "", g = this.headers.J();
  d && yb(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.U("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  yb(g, function(a, b) {
    this.i.setRequestHeader(b, a)
  }, this);
  this.Je && (this.i.responseType = this.Je);
  "withCredentials" in this.i && (this.i.withCredentials = this.gg);
  try {
    this.Ra && (Bc.clearTimeout(this.Ra), this.Ra = k), 0 < this.sc && (W(this.a, Gh(this, "Will abort after " + this.sc + "ms if incomplete")), this.Ra = Bc.setTimeout(y(this.bg, this), this.sc)), W(this.a, Gh(this, "Sending request")), this.bc = j, this.i.send(a), this.bc = m
  }catch(i) {
    W(this.a, Gh(this, "Send error: " + i.message)), Hh(this, i)
  }
};
s.bg = function() {
  "undefined" != typeof ba && this.i && (this.Bb = "Timed out after " + this.sc + "ms, aborting", W(this.a, Gh(this, this.Bb)), this.dispatchEvent("timeout"), this.abort(8))
};
function Hh(a, b) {
  a.oa = m;
  a.i && (a.Ka = j, a.i.abort(), a.Ka = m);
  a.Bb = b;
  Ih(a);
  Jh(a)
}
function Ih(a) {
  a.Jc || (a.Jc = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
s.abort = function() {
  this.i && this.oa && (W(this.a, Gh(this, "Aborting")), this.oa = m, this.Ka = j, this.i.abort(), this.Ka = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Jh(this))
};
s.c = function() {
  this.i && (this.oa && (this.oa = m, this.Ka = j, this.i.abort(), this.Ka = m), Jh(this, j));
  Eh.e.c.call(this)
};
s.xe = function() {
  !this.Sc && !this.bc && !this.Ka ? this.If() : Kh(this)
};
s.If = function() {
  Kh(this)
};
function Kh(a) {
  if(a.oa && "undefined" != typeof ba) {
    if(a.wc[1] && 4 == a.va() && 2 == Lh(a)) {
      W(a.a, Gh(a, "Local request error detected and ignored"))
    }else {
      if(a.bc && 4 == a.va()) {
        Bc.setTimeout(y(a.xe, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.va()) {
          W(a.a, Gh(a, "Request complete"));
          a.oa = m;
          var b = Lh(a), c;
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
                c = j;
                break a;
              default:
                c = m
            }
          }
          if(!c) {
            if(b = 0 === b) {
              b = ("" + a.Xc).match(ab)[1] || k, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !Fh.test(b ? b.toLowerCase() : "")
            }
            c = b
          }
          if(c) {
            a.dispatchEvent("complete"), a.dispatchEvent("success")
          }else {
            var d;
            try {
              d = 2 < a.va() ? a.i.statusText : ""
            }catch(e) {
              W(a.a, "Can not get status: " + e.message), d = ""
            }
            a.Bb = d + " [" + Lh(a) + "]";
            Ih(a)
          }
          Jh(a)
        }
      }
    }
  }
}
function Jh(a, b) {
  if(a.i) {
    var c = a.i, d = a.wc[0] ? da : k;
    a.i = k;
    a.wc = k;
    a.Ra && (Bc.clearTimeout(a.Ra), a.Ra = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(e) {
      U(a.a, "Problem encountered resetting onreadystatechange: " + e.message)
    }
  }
}
s.ge = function() {
  return!!this.i
};
s.va = function() {
  return this.i ? this.i.readyState : 0
};
function Lh(a) {
  try {
    return 2 < a.va() ? a.i.status : -1
  }catch(b) {
    return V(a.a, "Can not get status: " + b.message), -1
  }
}
s.getResponseHeader = function(a) {
  return this.i && 4 == this.va() ? this.i.getResponseHeader(a) : h
};
function Gh(a, b) {
  return b + " [" + a.ke + " " + a.Xc + " " + Lh(a) + "]"
}
;var Mh = !(D || E && !F("420+"));
function Nh(a, b) {
  this.tc = a;
  this.Y = b
}
B(Nh, L);
s = Nh.prototype;
s.m = k;
s.Ca = -1;
s.Vd = m;
s.de = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Oh(a) {
  var b = pg(a.Nd), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.Y, c, b), 1 != b && a.b()) : a.b()
}
s.zf = function() {
  Oh(this);
  if(!this.aa) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.Y);
    this.b()
  }
};
s.Mf = function() {
  var a = t.parent;
  if(a) {
    this.Ca = this.m.va();
    if(2 <= this.Ca && !this.Vd) {
      for(var b = new J, c = this.de.length;c--;) {
        var d = this.de[c];
        try {
          b.set(d, this.m.i.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.r() && (this.Vd = j, a.__XHRMaster_ongotheaders(this.Y, Db(b)), this.aa)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.Y, this.Ca);
    Mh && 3 == this.Ca && Oh(this)
  }else {
    this.b()
  }
};
s.Zc = function(a, b, c) {
  this.m = new Eh;
  N(this.m, "readystatechange", y(this.Mf, this));
  N(this.m, "complete", y(this.zf, this));
  this.m.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Nd = new og(this.m.i, 1048576)
};
s.c = function() {
  Nh.e.c.call(this);
  delete this.Nd;
  this.m && this.m.b();
  delete this.tc.Kb[this.Y];
  delete this.tc
};
function Ph() {
  this.Kb = {}
}
B(Ph, L);
Ph.prototype.Df = function(a, b, c, d) {
  var e = new Nh(this, a);
  this.Kb[a] = e;
  e.Zc(b, c, d)
};
Ph.prototype.kf = function(a) {
  (a = this.Kb[a]) && a.b()
};
Ph.prototype.c = function() {
  Ph.e.c.call(this);
  for(var a = db(this.Kb);a.length;) {
    a.pop().b()
  }
  delete this.Kb
};
var Qh = new Ph;
t.__XHRSlave_makeRequest = y(Qh.Df, Qh);
t.__XHRSlave_dispose = y(Qh.kf, Qh);
var Rh = Y("cw.net.demo");
function Sh() {
}
Sh.prototype.Ud = function() {
  return Boolean(Number((new K(document.location)).H.get("httpStreaming", "0"))) ? 2 : 1
};
var Th, Uh = Y("ljstream.logger");
window.onerror = function(a, b, c) {
  U(Uh, "window.onerror: message: " + P(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Vh() {
}
Vh.prototype.Zf = function(a) {
  this.A = a;
  Kg(this.A, "subprotocol:ljstream");
  Xh(this)
};
Vh.prototype.Yf = function(a, b) {
  Uh.info("streamReset: reasonString=" + P(a) + ", applicationLevel=" + b);
  Yh("Disconnected from server.  Try reloading this page.");
  Zh = k
};
function Xh(a) {
  Uh.info("Sending preferences to server");
  Kg(a.A, Wc(["SetPreferences", {include_russian_posts:Q("include_russian_posts").checked}]))
}
Vh.prototype.$f = function(a) {
  var a = Uc(a), b = a[1];
  if("NewPost" == a[0]) {
    var a = b.title, c = b.url, b = b.body;
    (a = ra(a)) || (a = "[No title]");
    var d = bh(C(b)), e = document, b = e.createElement("div");
    D ? (b.innerHTML = "<br>" + d, b.removeChild(b.firstChild)) : b.innerHTML = d;
    if(1 == b.childNodes.length) {
      b = b.removeChild(b.firstChild)
    }else {
      for(d = e.createDocumentFragment();b.firstChild;) {
        d.appendChild(b.firstChild)
      }
      b = d
    }
    a = rd("span", {}, rd("a", {href:c, "class":"ljpost-title-link"}, a), rd("span", {}, "\u00a0"), b);
    $h(a)
  }
};
Vh.prototype.reset = function(a) {
  Uh.info("resetting with reason: " + a);
  this.A.reset(a)
};
var Zh = k, ai = new Qc(t.window);
function Yh(a) {
  a = rd("span", {"class":"important-message"}, a);
  $h(a)
}
function bi() {
  Zh && (Zh.reset("idle timeout fired"), Zh = k, Yh("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var ci = k;
function di() {
  ci != k && ai.B.clearTimeout(ci);
  Zh && (ci = ai.B.setTimeout(bi, 6E5))
}
N(window, ["click", "focus", "keydown", "keypress"], di, j);
var qd = new ld, ei = 0;
function $h(a) {
  a = rd("div", {"class":"row-" + (0 == ei % 2 ? "even" : "odd")}, rd("nobr", {}, a));
  Q("ljstream-container-inner").appendChild(a);
  ei += 1;
  var b;
  if(b = Th) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !E && "CSS1Compat" == d.compatMode ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new bd(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = pd().height;
    b = !(a + b <= c + d)
  }
  b && (a = pd().height, window.scrollBy(0, Math.round(a / 2) + 80))
}
function fi() {
  N(t, "load", function() {
    window.scrollTo(0, 0)
  });
  N(Q("include_russian_posts"), "click", function() {
    Xh(Zh)
  });
  Th = j;
  N(Q("automatic_scroll"), "click", function(a) {
    Th = a.target.checked
  });
  var a = new qe("Clear posts");
  fe(a, "clear-posts-button");
  Nd(a, Q("prefs"));
  N(a, "action", function() {
    Q("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = Q("ljstream-container");
  a.style.marginTop = Q("demo-header").offsetHeight + "px";
  Q("demo-header").style.width = "9000px";
  var b = rd("div", {id:"ljstream-container-inner"});
  a.appendChild(b)
}
function gi() {
  sf().lb(kf);
  if("1" == (new K(document.location)).H.get("logging")) {
    var a = new sh("main");
    a.oc(j);
    a.La()
  }
  Uh.info("Logger works.");
  fi();
  a = new Sh;
  Zh = new Vh;
  di();
  var b = (new K(document.location)).H, c = "http" != b.get("mode");
  if((b = Boolean(Number(b.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    V(Rh, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), b = m
  }
  var d = b, b = new K(document.location);
  c ? c = new vg("/_minerva/", b.V, t.__demo_mainSocketPort) : (d ? (c = t.__demo_shared_domain, v(c) || f(Error("domain was " + P(c) + "; expected a string.")), b = b.J(), Gb(b, "_____random_____." + c)) : b = b.J(), Ib(b, "/_minerva/"), Jb(b, "", h), c = new xg(b.toString().replace("_____random_____", "%random%")));
  a = new Cg(c, a, ai);
  c = Zh;
  a.fd = y(c.Zf, c);
  a.onreset = y(c.Yf, c);
  a.gd = y(c.$f, c);
  a.start()
}
var hi = ["__ljstream_init"], ii = t;
!(hi[0] in ii) && ii.execScript && ii.execScript("var " + hi[0]);
for(var ji;hi.length && (ji = hi.shift());) {
  !hi.length && ga(gi) ? ii[ji] = gi : ii = ii[ji] ? ii[ji] : ii[ji] = {}
}
;})();
