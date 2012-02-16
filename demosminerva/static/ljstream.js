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
    return a.zf || (a.zf = new a)
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
  if("function" == typeof a.s) {
    a = a.s()
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
    a && this.xc(a)
  }
}
s = J.prototype;
s.f = 0;
s.s = o("f");
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
s.Qb = function(a) {
  for(var b = 0;b < this.j.length;b++) {
    var c = this.j[b];
    if(Bb(this.p, c) && this.p[c] == a) {
      return j
    }
  }
  return m
};
s.Q = function(a, b) {
  if(this === a) {
    return j
  }
  if(this.f != a.s()) {
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
s.xc = function(a) {
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
  a instanceof K ? (this.jb(b == k ? a.ea : b), Eb(this, a.ga), Fb(this, a.Sa), Gb(this, a.V), Hb(this, a.za), Ib(this, a.S), Jb(this, a.H.J()), Kb(this, a.Ia)) : a && (c = ("" + a).match(ab)) ? (this.jb(!!b), Eb(this, c[1] || "", j), Fb(this, c[2] || "", j), Gb(this, c[3] || "", j), Hb(this, c[4]), Ib(this, c[5] || "", j), Jb(this, c[6] || "", j), Kb(this, c[7] || "", j)) : (this.jb(!!b), this.H = new Lb(k, this, this.ea))
}
s = K.prototype;
s.ga = "";
s.Sa = "";
s.V = "";
s.za = k;
s.S = "";
s.Ia = "";
s.Af = m;
s.ea = m;
s.toString = function() {
  if(this.Z) {
    return this.Z
  }
  var a = [];
  this.ga && a.push(Mb(this.ga, Nb), ":");
  this.V && (a.push("//"), this.Sa && a.push(Mb(this.Sa, Nb), "@"), a.push(v(this.V) ? encodeURIComponent(this.V) : k), this.za != k && a.push(":", "" + this.za));
  this.S && (this.V && "/" != this.S.charAt(0) && a.push("/"), a.push(Mb(this.S, "/" == this.S.charAt(0) ? Ob : Pb)));
  var b = "" + this.H;
  b && a.push("?", b);
  this.Ia && a.push("#", Mb(this.Ia, Qb));
  return this.Z = a.join("")
};
s.J = function() {
  var a = this.ga, b = this.Sa, c = this.V, d = this.za, e = this.S, g = this.H.J(), i = this.Ia, l = new K(k, this.ea);
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
  a.ga = c ? b ? decodeURIComponent(b) : "" : b;
  a.ga && (a.ga = a.ga.replace(/:$/, ""))
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
  b ? (b = Number(b), (isNaN(b) || 0 > b) && f(Error("Bad port number " + b)), a.za = b) : a.za = k
}
function Ib(a, b, c) {
  Rb(a);
  delete a.Z;
  a.S = c ? b ? decodeURIComponent(b) : "" : b
}
function Jb(a, b, c) {
  Rb(a);
  delete a.Z;
  b instanceof Lb ? (a.H = b, a.H.zd = a, a.H.jb(a.ea)) : (c || (b = Mb(b, Sb)), a.H = new Lb(b, a, a.ea))
}
function Kb(a, b, c) {
  Rb(a);
  delete a.Z;
  a.Ia = c ? b ? decodeURIComponent(b) : "" : b
}
function Rb(a) {
  a.Af && f(Error("Tried to modify a read-only Uri"))
}
s.jb = function(a) {
  this.ea = a;
  this.H && this.H.jb(a);
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
  this.ia = a || k;
  this.zd = b || k;
  this.ea = !!c
}
function Wb(a) {
  if(!a.k && (a.k = new J, a.f = 0, a.ia)) {
    for(var b = a.ia.split("&"), c = 0;c < b.length;c++) {
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
s.s = function() {
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
s.Qb = function(a) {
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
  if(this.ia) {
    return this.ia
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
  return this.ia = a.join("")
};
function Yb(a) {
  delete a.Wa;
  delete a.ia;
  a.zd && delete a.zd.Z
}
s.J = function() {
  var a = new Lb;
  this.Wa && (a.Wa = this.Wa);
  this.ia && (a.ia = this.ia);
  this.k && (a.k = this.k.J());
  return a
};
function Xb(a, b) {
  var c = "" + b;
  a.ea && (c = c.toLowerCase());
  return c
}
s.jb = function(a) {
  a && !this.ea && (Wb(this), Yb(this), yb(this.k, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ea = a
};
s.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    yb(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
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
s.Bc = m;
s.La = function(a, b, c, d, e, g) {
  x(a) ? this.ie = j : a && a.handleEvent && x(a.handleEvent) ? this.ie = m : f(Error("Invalid listener argument"));
  this.eb = a;
  this.Be = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.$b = g;
  this.Bc = m;
  this.key = ++ac;
  this.Pa = m
};
s.handleEvent = function(a) {
  return this.ie ? this.eb.call(this.$b || this.src, a) : this.eb.handleEvent.call(this.eb, a)
};
var bc = !D || Ya(), cc = !D || Ya(), dc = D && !F("8");
!E || F("528");
La && F("1.9b") || D && F("8") || Ka && F("9.5") || E && F("528");
!La || F("8");
var ec = {mg:"click", rg:"dblclick", Lg:"mousedown", Pg:"mouseup", Og:"mouseover", Ng:"mouseout", Mg:"mousemove", Zg:"selectstart", Gg:"keypress", Fg:"keydown", Hg:"keyup", kg:"blur", zg:"focus", sg:"deactivate", Ag:D ? "focusin" : "DOMFocusIn", Bg:D ? "focusout" : "DOMFocusOut", lg:"change", Yg:"select", $g:"submit", Eg:"input", Ug:"propertychange", wg:"dragstart", tg:"dragenter", vg:"dragover", ug:"dragleave", xg:"drop", eh:"touchstart", dh:"touchmove", bh:"touchend", ah:"touchcancel", og:"contextmenu", 
yg:"error", Dg:"help", Ig:"load", Jg:"losecapture", Vg:"readystatechange", Wg:"resize", Xg:"scroll", gh:"unload", Cg:"hashchange", Qg:"pagehide", Rg:"pageshow", Tg:"popstate", pg:"copy", Sg:"paste", qg:"cut", hg:"beforecopy", ig:"beforecut", jg:"beforepaste", Kg:"message", ng:"connect", fh:E ? "webkitTransitionEnd" : Ka ? "oTransitionEnd" : "transitionend"};
function L() {
}
L.prototype.aa = m;
L.prototype.b = function() {
  this.aa || (this.aa = j, this.c())
};
L.prototype.c = function() {
  this.ff && fc.apply(k, this.ff)
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
s.Gb = j;
s.stopPropagation = function() {
  this.Oa = j
};
s.preventDefault = function() {
  this.Gb = m
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
s.gd = m;
s.ja = k;
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
  this.gd = Oa ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ja = a;
  delete this.Gb;
  delete this.Oa
};
function lc(a) {
  return bc ? 0 == a.ja.button : "click" == a.type ? j : !!(a.ja.button & kc[0])
}
s.stopPropagation = function() {
  jc.e.stopPropagation.call(this);
  this.ja.stopPropagation ? this.ja.stopPropagation() : this.ja.cancelBubble = j
};
s.preventDefault = function() {
  jc.e.preventDefault.call(this);
  var a = this.ja;
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
  this.relatedTarget = this.currentTarget = this.target = this.ja = k
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
        if(i = n[g], i.eb == c && i.$b == e) {
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
    a.addEventListener ? (a == t || !a.Ld) && a.addEventListener(b, g, d) : a.attachEvent(b in oc ? oc[b] : oc[b] = "on" + b, g);
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
  mc[a].Bc = j;
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
        if(a[g].eb == c && a[g].capture == d && a[g].$b == e) {
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
  var c = b.src, d = b.type, e = b.Be, g = b.capture;
  c.removeEventListener ? (c == t || !c.Ld) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in oc ? oc[d] : oc[d] = "on" + d, e);
  c = ka(c);
  e = M[d][g][c];
  if(nc[c]) {
    var i = nc[c];
    ob(i, b);
    0 == i.length && delete nc[c]
  }
  b.Pa = j;
  e.ue = j;
  vc(d, g, c, e);
  delete mc[a];
  return j
}
function vc(a, b, c, d) {
  if(!d.ec && d.ue) {
    for(var e = 0, g = 0;e < d.length;e++) {
      d[e].Pa ? d[e].Be.src = k : (e != g && (d[g] = d[e]), g++)
    }
    d.length = g;
    d.ue = m;
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
    a.ec ? a.ec++ : a.ec = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var n = a[l];
        n && !n.Pa && (g &= yc(n, e) !== m)
      }
    }finally {
      a.ec--, vc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function yc(a, b) {
  var c = a.handleEvent(b);
  a.Bc && uc(a.key);
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
s.Ld = j;
s.gc = k;
s.md = aa("gc");
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
      for(g = this;g;g = g.gc) {
        e.push(g)
      }
      g = c[j];
      g.T = g.f;
      for(var i = e.length - 1;!a.Oa && 0 <= i && g.T;i--) {
        a.currentTarget = e[i], d &= xc(g, e[i], a.type, j, a) && a.Gb != m
      }
    }
    if(m in c) {
      if(g = c[m], g.T = g.f, b) {
        for(i = 0;!a.Oa && i < e.length && g.T;i++) {
          a.currentTarget = e[i], d &= xc(g, e[i], a.type, m, a) && a.Gb != m
        }
      }else {
        for(e = this;!a.Oa && e && g.T;e = e.gc) {
          a.currentTarget = e, d &= xc(g, e, a.type, m, a) && a.Gb != m
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
  this.gc = k
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
  this.Pb = [];
  this.Gd = a;
  this.Nd = b || k
}
s = Cc.prototype;
s.sa = m;
s.xb = m;
s.Cb = 0;
s.pd = m;
s.af = m;
s.Ac = 0;
s.cancel = function(a) {
  if(this.sa) {
    this.Fb instanceof Cc && this.Fb.cancel()
  }else {
    if(this.z) {
      var b = this.z;
      delete this.z;
      a ? b.cancel(a) : (b.Ac--, 0 >= b.Ac && b.cancel())
    }
    this.Gd ? this.Gd.call(this.Nd, this) : this.pd = j;
    this.sa || this.vb(new Dc)
  }
};
s.Jd = function(a, b) {
  Ec(this, a, b);
  this.Cb--;
  0 == this.Cb && this.sa && Fc(this)
};
function Ec(a, b, c) {
  a.sa = j;
  a.Fb = c;
  a.xb = !b;
  Fc(a)
}
function Gc(a) {
  a.sa && (a.pd || f(new Hc), a.pd = m)
}
s.$ = function(a) {
  Gc(this);
  Ec(this, j, a)
};
s.vb = function(a) {
  Gc(this);
  Ec(this, m, a)
};
function Ic(a, b) {
  Kc(a, b, k, h)
}
function Lc(a, b) {
  Kc(a, k, b, h)
}
function Kc(a, b, c, d) {
  a.Pb.push([b, c, d]);
  a.sa && Fc(a)
}
function Mc(a, b) {
  Kc(a, b, b, h)
}
function Nc(a) {
  return lb(a.Pb, function(a) {
    return x(a[1])
  })
}
function Fc(a) {
  a.yd && a.sa && Nc(a) && (t.clearTimeout(a.yd), delete a.yd);
  a.z && (a.z.Ac--, delete a.z);
  for(var b = a.Fb, c = m, d = m;a.Pb.length && 0 == a.Cb;) {
    var e = a.Pb.shift(), g = e[0], i = e[1], e = e[2];
    if(g = a.xb ? i : g) {
      try {
        var l = g.call(e || a.Nd, b);
        ga(l) && (a.xb = a.xb && (l == b || l instanceof Error), a.Fb = b = l);
        b instanceof Cc && (d = j, a.Cb++)
      }catch(n) {
        b = n, a.xb = j, Nc(a) || (c = j)
      }
    }
  }
  a.Fb = b;
  d && a.Cb && (Kc(b, y(a.Jd, a, j), y(a.Jd, a, m)), b.af = j);
  c && (a.yd = t.setTimeout(function() {
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
  b.vb(a);
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
  this.C = a;
  this.Rb = [];
  this.Qd = [];
  this.$e = y(this.bg, this)
}
Qc.prototype.vd = k;
function Rc(a, b, c, d) {
  a.Rb.push([b, c, d]);
  a.vd == k && (a.vd = a.C.setTimeout(a.$e, 0))
}
Qc.prototype.bg = function() {
  this.vd = k;
  var a = this.Rb;
  this.Rb = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], e = c[1], c = c[2];
    try {
      d.apply(e, c)
    }catch(g) {
      this.C.setTimeout(function() {
        f(g)
      }, 0)
    }
  }
  if(0 == this.Rb.length) {
    a = this.Qd;
    this.Qd = [];
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
  this.kc = h
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
          c.push(e), e = b[g], Xc(a, a.kc ? a.kc.call(b, "" + g, e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" != typeof e && (c.push(d), Yc(g, c), c.push(":"), Xc(a, a.kc ? a.kc.call(b, g, e) : e, c), d = ","))
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
          if(Tc(a.We)) {
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
  this.be = a;
  this.j = []
}
B(Ed, L);
var Fd = [];
function R(a, b, c, d) {
  u(c) || (Fd[0] = c, c = Fd);
  for(var e = 0;e < c.length;e++) {
    a.j.push(N(b, c[e], d || a, m, a.be || a))
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
      g = g || a.be || a;
      e = !!e;
      if(b = tc(b, c, e)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].Pa && b[c].eb == d && b[c].capture == e && b[c].$b == g) {
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
Ed.prototype.jd = function() {
  ib(this.j, uc);
  this.j.length = 0
};
Ed.prototype.c = function() {
  Ed.e.c.call(this);
  this.jd()
};
Ed.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Hd() {
}
ea(Hd);
Hd.prototype.Ff = 0;
Hd.Ya();
function Id(a) {
  this.qa = a || kd();
  this.Hb = Jd
}
B(Id, Ac);
Id.prototype.yf = Hd.Ya();
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
s.Hb = k;
s.z = k;
s.pa = k;
s.rb = k;
s.cg = m;
function Ld(a) {
  return a.da || (a.da = ":" + (a.yf.Ff++).toString(36))
}
s.g = o("l");
function Md(a) {
  return a.Za || (a.Za = new Ed(a))
}
s.getParent = o("z");
s.md = function(a) {
  this.z && this.z != a && f(Error("Method not supported"));
  Id.e.md.call(this, a)
};
s.Xa = o("qa");
s.o = function() {
  this.l = this.qa.createElement("div")
};
function Nd(a, b) {
  a.D && f(Error("Component already rendered"));
  a.l || a.o();
  b ? b.insertBefore(a.l, k) : a.qa.L.body.appendChild(a.l);
  (!a.z || a.z.D) && a.ra()
}
s.ra = function() {
  this.D = j;
  Od(this, function(a) {
    !a.D && a.g() && a.ra()
  })
};
s.wb = function() {
  Od(this, function(a) {
    a.D && a.wb()
  });
  this.Za && this.Za.jd();
  this.D = m
};
s.c = function() {
  Id.e.c.call(this);
  this.D && this.wb();
  this.Za && (this.Za.b(), delete this.Za);
  Od(this, function(a) {
    a.b()
  });
  !this.cg && this.l && vd(this.l);
  this.z = this.l = this.rb = this.pa = k
};
s.lb = function(a) {
  this.D && f(Error("Component already rendered"));
  this.Hb = a
};
function Od(a, b) {
  a.pa && ib(a.pa, b, h)
}
s.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : Ld(a), a = this.rb && c ? (c in this.rb ? this.rb[c] : h) || k : k;
    if(c && a) {
      var d = this.rb;
      c in d && delete d[c];
      ob(this.pa, a);
      b && (a.wb(), a.l && vd(a.l));
      c = a;
      c == k && f(Error("Unable to set parent component"));
      c.z = k;
      Id.e.md.call(c, k)
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
s.Vb = function() {
};
s.o = function(a) {
  var b = a.Xa().o("div", Rd(this, a).join(" "), a.sb);
  this.ld(a, b);
  return b
};
s.tb = function(a, b, c) {
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
s.ee = function(a) {
  if(a.Hb == k) {
    var b;
    a: {
      b = a.D ? a.l : a.qa.L.body;
      var c = md(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (b = c.defaultView.getComputedStyle(b, k))) {
        b = b.direction || b.getPropertyValue("direction");
        break a
      }
      b = ""
    }
    a.Hb = "rtl" == (b || ((a.D ? a.l : a.qa.L.body).currentStyle ? (a.D ? a.l : a.qa.L.body).currentStyle.direction : k) || (a.D ? a.l : a.qa.L.body).style && (a.D ? a.l : a.qa.L.body).style.direction)
  }
  a.Hb && this.lb(a.g(), j);
  a.isEnabled() && this.Ib(a, a.Ta)
};
s.ld = function(a, b) {
  a.isEnabled() || this.O(b, 1, j);
  a.d & 8 && this.O(b, 8, j);
  a.I & 16 && this.O(b, 16, !!(a.d & 16));
  a.I & 64 && this.O(b, 64, !!(a.d & 64))
};
s.mc = function(a, b) {
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
s.lb = function(a, b) {
  this.tb(a, this.ta() + "-rtl", b)
};
s.he = function(a) {
  var b;
  return a.I & 32 && (b = a.Ja()) ? zd(b) : m
};
s.Ib = function(a, b) {
  var c;
  if(a.I & 32 && (c = a.Ja())) {
    if(!b && a.d & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.d & 32 && a.Vd()
    }
    zd(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
s.od = function(a, b) {
  a.style.display = b ? "" : "none"
};
s.M = function(a, b, c) {
  var d = a.g();
  if(d) {
    var e = Td(this, b);
    e && this.tb(a, e, c);
    this.O(d, b, c)
  }
};
s.O = function(a, b, c) {
  Qd || (Qd = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Qd[b]) && a.setAttribute("aria-" + b, c)
};
s.Ja = function(a) {
  return a.g()
};
s.ta = p("goog-control");
function Rd(a, b) {
  var c = a.ta(), d = [c], e = a.ta();
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
  if(!a.Hd) {
    var c = a.ta();
    a.Hd = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Hd[b]
}
;function Ud(a, b) {
  a || f(Error("Invalid class name " + a));
  x(b) || f(Error("Invalid decorator function " + b))
}
var Wd = {};
function Xd(a, b, c, d, e) {
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
s.bc = k;
s.Tc = k;
s.cc = k;
s.xa = -1;
s.wa = -1;
var be = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, ce = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, de = D || 
E && F("525");
s = $d.prototype;
s.uf = function(a) {
  if(E && (17 == this.xa && !a.ctrlKey || 18 == this.xa && !a.altKey)) {
    this.wa = this.xa = -1
  }
  de && !Xd(a.keyCode, this.xa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.wa = La ? Zd(a.keyCode) : a.keyCode
};
s.wf = function() {
  this.wa = this.xa = -1
};
s.handleEvent = function(a) {
  var b = a.ja, c, d;
  D && "keypress" == a.type ? (c = this.wa, d = 13 != c && 27 != c ? b.keyCode : 0) : E && "keypress" == a.type ? (c = this.wa, d = 0 <= b.charCode && 63232 > b.charCode && Yd(c) ? b.charCode : 0) : Ka ? (c = this.wa, d = Yd(c) ? b.keyCode : 0) : (c = b.keyCode || this.wa, d = b.charCode || 0, Oa && 63 == d && 224 == c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in be ? e = be[c] : 25 == c && a.shiftKey && (e = 9) : g && g in ce && (e = ce[g]);
  a = e == this.xa;
  this.xa = e;
  b = new ee(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.b()
  }
};
s.g = o("l");
function ae(a, b, c) {
  a.cc && a.detach();
  a.l = b;
  a.bc = N(a.l, "keypress", a, c);
  a.Tc = N(a.l, "keydown", a.uf, c, a);
  a.cc = N(a.l, "keyup", a.wf, c, a)
}
s.detach = function() {
  this.bc && (uc(this.bc), uc(this.Tc), uc(this.cc), this.cc = this.Tc = this.bc = k);
  this.l = k;
  this.wa = this.xa = -1
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
      if(d = Wd[d]) {
        break
      }
      b = b.e ? b.e.constructor : k
    }
    b = d ? x(d.Ya) ? d.Ya() : new d : k
  }
  this.t = b;
  this.sb = a
}
B(S, Id);
s = S.prototype;
s.sb = k;
s.d = 0;
s.I = 39;
s.zc = 255;
s.Tf = 0;
s.Ta = j;
s.ba = k;
s.Oc = j;
s.yc = m;
s.If = k;
s.Ja = function() {
  return this.t.Ja(this)
};
function fe(a, b) {
  b && (a.ba ? nb(a.ba, b) || a.ba.push(b) : a.ba = [b], a.t.tb(a, b, j))
}
s.tb = function(a, b) {
  b ? fe(this, a) : a && this.ba && (ob(this.ba, a), 0 == this.ba.length && (this.ba = k), this.t.tb(this, a, m))
};
s.o = function() {
  var a = this.t.o(this);
  this.l = a;
  var b = this.If || this.t.Vb();
  b && (a.setAttribute("role", b), a.ih = b);
  this.yc || this.t.mc(a, m);
  this.Ta || this.t.od(a, m)
};
s.ra = function() {
  S.e.ra.call(this);
  this.t.ee(this);
  if(this.I & -2 && (this.Oc && ge(this, j), this.I & 32)) {
    var a = this.Ja();
    if(a) {
      var b = this.bb || (this.bb = new $d);
      ae(b, a);
      R(R(R(Md(this), b, "key", this.vf), a, "focus", this.tf), a, "blur", this.Vd)
    }
  }
};
function ge(a, b) {
  var c = Md(a), d = a.g();
  b ? (R(R(R(R(c, d, "mouseover", a.$d), d, "mousedown", a.Yd), d, "mouseup", a.ae), d, "mouseout", a.Zd), D && R(c, d, "dblclick", a.Xd)) : (Gd(Gd(Gd(Gd(c, d, "mouseover", a.$d), d, "mousedown", a.Yd), d, "mouseup", a.ae), d, "mouseout", a.Zd), D && Gd(c, d, "dblclick", a.Xd))
}
s.wb = function() {
  S.e.wb.call(this);
  this.bb && this.bb.detach();
  this.Ta && this.isEnabled() && this.t.Ib(this, m)
};
s.c = function() {
  S.e.c.call(this);
  this.bb && (this.bb.b(), delete this.bb);
  delete this.t;
  this.ba = this.sb = k
};
function he(a) {
  a = a.sb;
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
  if(b || this.Ta != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.g();
    c && this.t.od(c, a);
    this.isEnabled() && this.t.Ib(this, a);
    this.Ta = a;
    return j
  }
  return m
};
s.isEnabled = function() {
  return!(this.d & 1)
};
s.nc = function(a) {
  var b = this.getParent();
  if((!b || "function" != typeof b.isEnabled || b.isEnabled()) && ie(this, 1, !a)) {
    a || (this.setActive(m), je(this, m)), this.Ta && this.t.Ib(this, a), this.M(1, !a)
  }
};
function je(a, b) {
  ie(a, 2, b) && a.M(2, b)
}
s.fe = function() {
  return!!(this.d & 4)
};
s.setActive = function(a) {
  ie(this, 4, a) && this.M(4, a)
};
s.M = function(a, b) {
  this.I & a && b != !!(this.d & a) && (this.t.M(this, a, b), this.d = b ? this.d | a : this.d & ~a)
};
function T(a, b) {
  return!!(a.zc & b) && !!(a.I & b)
}
function ie(a, b, c) {
  return!!(a.I & b) && !!(a.d & b) != c && (!(a.Tf & b) || a.dispatchEvent(Kd(b, c))) && !a.aa
}
s.$d = function(a) {
  (!a.relatedTarget || !wd(this.g(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && T(this, 2) && je(this, j)
};
s.Zd = function(a) {
  if((!a.relatedTarget || !wd(this.g(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    T(this, 4) && this.setActive(m), T(this, 2) && je(this, m)
  }
};
s.Yd = function(a) {
  if(this.isEnabled() && (T(this, 2) && je(this, j), lc(a) && (!E || !Oa || !a.ctrlKey))) {
    T(this, 4) && this.setActive(j), this.t.he(this) && this.Ja().focus()
  }
  !this.yc && lc(a) && (!E || !Oa || !a.ctrlKey) && a.preventDefault()
};
s.ae = function(a) {
  this.isEnabled() && (T(this, 2) && je(this, j), this.fe() && this.Db(a) && T(this, 4) && this.setActive(m))
};
s.Xd = function(a) {
  this.isEnabled() && this.Db(a)
};
s.Db = function(a) {
  if(T(this, 16)) {
    var b = !(this.d & 16);
    ie(this, 16, b) && this.M(16, b)
  }
  T(this, 8) && ie(this, 8, j) && this.M(8, j);
  T(this, 64) && (b = !(this.d & 64), ie(this, 64, b) && this.M(64, b));
  b = new gc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.gd = a.gd);
  return this.dispatchEvent(b)
};
s.tf = function() {
  T(this, 32) && ie(this, 32, j) && this.M(32, j)
};
s.Vd = function() {
  T(this, 4) && this.setActive(m);
  T(this, 32) && ie(this, 32, m) && this.M(32, m)
};
s.vf = function(a) {
  return this.Ta && this.isEnabled() && this.Nc(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
s.Nc = function(a) {
  return 13 == a.keyCode && this.Db(a)
};
x(S) || f(Error("Invalid component class " + S));
x(Pd) || f(Error("Invalid renderer class " + Pd));
var ke = ka(S);
Wd[ke] = Pd;
Ud("goog-control", function() {
  return new S(k)
});
function le() {
}
B(le, Pd);
ea(le);
s = le.prototype;
s.Vb = p("button");
s.O = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : le.e.O.call(this, a, b, c)
};
s.o = function(a) {
  var b = le.e.o.call(this, a), c = a.Xb();
  c && this.nd(b, c);
  (c = a.Yb()) && this.oc(b, c);
  a.I & 16 && this.O(b, 16, !!(a.d & 16));
  return b
};
s.Yb = da;
s.oc = da;
s.Xb = function(a) {
  return a.title
};
s.nd = function(a, b) {
  a && (a.title = b || "")
};
s.ta = p("goog-button");
function me() {
}
B(me, le);
ea(me);
s = me.prototype;
s.Vb = function() {
};
s.o = function(a) {
  a.D && m != a.Oc && ge(a, m);
  a.Oc = m;
  a.zc &= -256;
  a.D && a.d & 32 && f(Error("Component already rendered"));
  a.d & 32 && a.M(32, m);
  a.I &= -33;
  return a.Xa().o("button", {"class":Rd(this, a).join(" "), disabled:!a.isEnabled(), title:a.Xb() || "", value:a.Yb() || ""}, he(a) || "")
};
s.ee = function(a) {
  R(Md(a), a.g(), "click", a.Db)
};
s.mc = da;
s.lb = da;
s.he = function(a) {
  return a.isEnabled()
};
s.Ib = da;
s.M = function(a, b, c) {
  me.e.M.call(this, a, b, c);
  if((a = a.g()) && 1 == b) {
    a.disabled = c
  }
};
s.Yb = function(a) {
  return a.value
};
s.oc = function(a, b) {
  a && (a.value = b)
};
s.O = da;
function ne(a, b, c) {
  S.call(this, a, b || me.Ya(), c)
}
B(ne, S);
s = ne.prototype;
s.Yb = o("Se");
s.oc = function(a) {
  this.Se = a;
  this.t.oc(this.g(), a)
};
s.Xb = o("Pe");
s.nd = function(a) {
  this.Pe = a;
  this.t.nd(this.g(), a)
};
s.c = function() {
  ne.e.c.call(this);
  delete this.Se;
  delete this.Pe
};
s.ra = function() {
  ne.e.ra.call(this);
  if(this.I & 32) {
    var a = this.Ja();
    a && R(Md(this), a, "keyup", this.Nc)
  }
};
s.Nc = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Db(a) : 32 == a.keyCode
};
Ud("goog-button", function() {
  return new ne(k)
});
function oe() {
}
B(oe, le);
ea(oe);
oe.prototype.o = function(a) {
  var b = {"class":"goog-inline-block " + Rd(this, a).join(" "), title:a.Xb() || ""}, b = a.Xa().o("div", b, pe(this, a.sb, a.Xa()));
  this.ld(a, b);
  return b
};
oe.prototype.Vb = p("button");
oe.prototype.ld = function(a, b) {
  a.isEnabled() || this.O(b, 1, j);
  a.d & 8 && this.O(b, 8, j);
  a.I & 16 && this.O(b, 16, j);
  a.d & 64 && this.O(b, 64, j)
};
function pe(a, b, c) {
  return c.o("div", "goog-inline-block " + (a.ta() + "-outer-box"), c.o("div", "goog-inline-block " + (a.ta() + "-inner-box"), b))
}
oe.prototype.ta = p("goog-custom-button");
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
Ae.prototype.Q = function(a) {
  return a instanceof Ae && this.Ua == a.Ua && this.Qa.join(",") == a.Qa
};
Ae.prototype.F = function(a, b) {
  a.push("new SACK(", "" + this.Ua, ", ");
  O(this.Qa, a, b);
  a.push(")")
};
function Be() {
  this.R = new J
}
s = Be.prototype;
s.Ha = -1;
s.N = 0;
s.append = function(a) {
  var b = xe(a);
  this.R.set(this.Ha + 1, [a, b]);
  this.Ha += 1;
  this.N += b
};
s.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
s.F = function(a) {
  a.push("<Queue with ", "" + this.R.s(), " item(s), counter=#", "" + this.Ha, ", size=", "" + this.N, ">")
};
function Ce(a) {
  a = a.R.ca();
  tb(a);
  return a
}
function De() {
  this.Ga = new J
}
De.prototype.Na = -1;
De.prototype.N = 0;
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
  a && this.xc(a)
}
function Te(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ka(a) : b.substr(0, 1) + a
}
s = Se.prototype;
s.s = function() {
  return this.p.s()
};
s.add = function(a) {
  this.p.set(Te(a), a)
};
s.xc = function(a) {
  for(var a = wb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
s.jd = function(a) {
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
s.Q = function(a) {
  return this.s() == vb(a) && Ue(this, a)
};
function Ue(a, b) {
  var c = vb(b);
  if(a.s() > c) {
    return m
  }
  !(b instanceof Se) && 5 < c && (b = new Se(b));
  return zb(a, function(a) {
    if("function" == typeof b.contains) {
      a = b.contains(a)
    }else {
      if("function" == typeof b.Qb) {
        a = b.Qb(a)
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
Ze.prototype.Lc = k;
Ze.prototype.Kc = k;
var $e = 0;
Ze.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || $e++;
  this.Oe = d || A();
  this.X = a;
  this.se = b;
  this.oe = c;
  delete this.Lc;
  delete this.Kc
};
Ze.prototype.kb = aa("X");
function af(a) {
  this.Ef = a
}
af.prototype.z = k;
af.prototype.X = k;
af.prototype.pa = k;
af.prototype.zb = k;
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
s.kb = aa("X");
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
    a = this.sf(a, b, c);
    b = "log:" + a.se;
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.zb) {
        for(var e = 0, g = h;g = c.zb[e];e++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
s.sf = function(a, b, c) {
  var d = new Ze(a, "" + b, this.Ef);
  if(c) {
    d.Lc = c;
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
          n = c.lineNumber || c.hh || "Not available"
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
    d.Kc = e
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
  qf || (qf = new af(""), pf[""] = qf, qf.kb(gf))
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
    c.pa || (c.pa = {});
    c.pa[d] = b;
    b.z = c;
    pf[a] = b
  }
  return b
}
;function tf(a, b) {
  Id.call(this, b);
  this.pf = a;
  this.Jc = new Ed(this);
  this.Tb = new J
}
B(tf, Id);
s = tf.prototype;
s.a = Y("goog.ui.media.FlashObject");
s.eg = "window";
s.Ed = "#000000";
s.Ye = "sameDomain";
function uf(a, b, c) {
  a.Ad = v(b) ? b : Math.round(b) + "px";
  a.Pc = v(c) ? c : Math.round(c) + "px";
  a.g() && (b = a.g() ? a.g().firstChild : k, c = a.Ad, a = a.Pc, c instanceof cd ? (a = c.height, c = c.width) : a == h && f(Error("missing height argument")), b.style.width = Cd(c), b.style.height = Cd(a))
}
s.ra = function() {
  tf.e.ra.call(this);
  var a = this.g(), b;
  b = D ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = D ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = qa(c, this.eg), d = this.Tb.ca(), e = this.Tb.G(), g = [], i = 0;i < d.length;i++) {
    var l = ta(d[i]), n = ta(e[i]);
    g.push(l + "=" + n)
  }
  b = qa(b, Ld(this), Ld(this), "goog-ui-media-flash-object", C(this.pf), C(g.join("&")), this.Ed, this.Ye, c);
  a.innerHTML = b;
  this.Ad && this.Pc && uf(this, this.Ad, this.Pc);
  R(this.Jc, this.g(), db(ec), hc)
};
s.o = function() {
  this.Ge != k && !(0 <= Ba(Re, this.Ge)) && (V(this.a, "Required flash version not found:" + this.Ge), f(Error("Method not supported")));
  var a = this.Xa().createElement("div");
  a.className = "goog-ui-media-flash";
  this.l = a
};
s.c = function() {
  tf.e.c.call(this);
  this.Tb = k;
  this.Jc.b();
  this.Jc = k
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
  b.Tb.set("onloadcallback", '__loadFlashObject_callbacks["' + e + '"]()');
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
  this.sc = a;
  this.Aa = b;
  this.Fa = a.Fa
}
B(yf, L);
s = yf.prototype;
s.fb = j;
s.Fc = m;
s.a = Y("cw.net.FlashSocket");
s.F = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.da);
  a.push("'>")
};
function zf(a, b, c) {
  "frames" == b ? (a = a.Aa, Af(a.B), Bf(a.B, c)) : "stillreceiving" == b ? (c = a.Aa, X(c.a, "onstillreceiving"), Af(c.B)) : "connect" == b ? (c = a.Aa, c.a.info("onconnect"), Af(c.B), a = c.pb, c.pb = k, a.length && (X(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.pc.Nb(a))) : "close" == b ? (a.fb = m, a.b()) : "ioerror" == b ? (a.fb = m, b = a.Aa, V(b.a, "onioerror: " + P(c)), Cf(b.B, m), a.b()) : "securityerror" == b ? (a.fb = m, b = a.Aa, V(b.a, "onsecurityerror: " + P(c)), 
  Cf(b.B, m), a.b()) : f(Error("bad event: " + b))
}
function Df(a) {
  a.Fc = j;
  a.fb = m;
  a.b()
}
s.Dc = function(a, b) {
  try {
    var c = this.Fa.CallFunction(He("__FC_connect", this.da, a, b, "<int32/>\n"))
  }catch(d) {
    return U(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), Df(this)
  }
  '"OK"' != c && f(Error("__FC_connect failed? ret: " + c))
};
s.Nb = function(a) {
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
      U(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Fc = j
    }
  }
  if(this.Fc) {
    a = this.Aa, V(a.a, "oncrash"), Cf(a.B, j)
  }else {
    this.Aa.onclose()
  }
  delete this.Aa;
  delete this.sc.$a[this.da]
};
function Ef(a, b) {
  this.w = a;
  this.Fa = b;
  this.$a = {};
  this.Cc = "__FST_" + re();
  t[this.Cc] = y(this.jf, this);
  var c = b.CallFunction(He("__FC_setCallbackFunc", this.Cc));
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
s.Gc = function(a) {
  a = new yf(this, a);
  return this.$a[a.da] = a
};
s.gf = function(a, b, c, d) {
  var e = this.$a[a];
  e ? "frames" == b && d ? (zf(e, "ioerror", "FlashConnector hadError while handling data."), e.b()) : zf(e, b, c) : V(this.a, "Cannot dispatch because we have no instance: " + P([a, b, c, d]))
};
s.jf = function(a, b, c, d) {
  try {
    Rc(this.w, this.gf, this, [a, b, c, d])
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
  t[this.Cc] = h
};
function Ff(a) {
  this.B = a;
  this.pb = []
}
B(Ff, L);
s = Ff.prototype;
s.a = Y("cw.net.FlashSocketConduit");
s.Nb = function(a) {
  this.pb ? (X(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.pb.push.apply(this.pb, a)) : (X(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.pc.Nb(a))
};
s.Dc = function(a, b) {
  this.pc.Dc(a, b)
};
s.onclose = function() {
  this.a.info("onclose");
  Cf(this.B, m)
};
s.c = function() {
  this.a.info("in disposeInternal.");
  Ff.e.c.call(this);
  this.pc.b();
  delete this.B
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
  c.Ed = "#777777";
  uf(c, 300, 30);
  var d = Q("minerva-elements");
  d || f(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
  var e = Q("minerva-elements-FlashConnectorSwf");
  e || (e = rd("div", {id:"minerva-elements-FlashConnectorSwf"}), d.appendChild(e));
  ye = xf(a.C, c, e);
  Ic(ye, If);
  return Hf()
}
;function Lf() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;var we = Math.pow(2, 53);
var Mf = {We:p("<cw.eq.Wildcard>")};
function Nf(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function Of(a, b, c) {
  var d = fa(a), e = fa(b);
  if(a == Mf || b == Mf) {
    return j
  }
  if(a != k && "function" == typeof a.Q) {
    return c && c.push("running custom equals function on left object"), a.Q(b, c)
  }
  if(b != k && "function" == typeof b.Q) {
    return c && c.push("running custom equals function on right object"), b.Q(a, c)
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
          if(a.Ve == Zb && b.Ve == Zb) {
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
  this.Lf = a;
  this.ic = b
}
Z.prototype.Q = function(a, b) {
  return ja(a) && this.constructor == a.constructor && Of(this.ic, a.ic, b)
};
Z.prototype.F = function(a, b) {
  a.push("new ", this.Lf, "(");
  for(var c = "", d = 0;d < this.ic.length;d++) {
    a.push(c), c = ", ", O(this.ic[d], a, b)
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
Qf.prototype.Q = function(a, b) {
  return!(a instanceof Qf) ? m : Of(Rf(this), Rf(a), b)
};
Qf.prototype.F = function(a, b) {
  a.push("<HelloFrame properties=");
  O(Rf(this), a, b);
  a.push(">")
};
function Rf(a) {
  return[a.mb, a.Ae, a.de, a.Fe, a.Kb, a.sd, a.te, a.re, a.Zc, a.pe, a.Re, a.Ne, a.Da, a.dc]
}
Qf.prototype.P = Pf;
Qf.prototype.W = function(a) {
  var b = {};
  b.tnum = this.mb;
  b.ver = this.Ae;
  b.format = this.de;
  b["new"] = this.Fe;
  b.id = this.Kb;
  b.ming = this.sd;
  b.pad = this.te;
  b.maxb = this.re;
  ga(this.Zc) && (b.maxt = this.Zc);
  b.maxia = this.pe;
  b.tcpack = this.Re;
  b.eeds = this.Ne;
  b.sack = this.Da instanceof Ae ? se((new Sf(this.Da)).P()) : this.Da;
  b.seenack = this.dc instanceof Ae ? se((new Sf(this.dc)).P()) : this.dc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(Wc(b), "H")
};
function Tf(a) {
  Z.call(this, "StringFrame", [a]);
  this.ud = a
}
B(Tf, Z);
Tf.prototype.P = Pf;
Tf.prototype.W = function(a) {
  a.push(this.ud, " ")
};
function Uf(a) {
  Z.call(this, "CommentFrame", [a]);
  this.df = a
}
B(Uf, Z);
Uf.prototype.P = Pf;
Uf.prototype.W = function(a) {
  a.push(this.df, "^")
};
function Vf(a) {
  Z.call(this, "SeqNumFrame", [a]);
  this.Le = a
}
B(Vf, Z);
Vf.prototype.P = Pf;
Vf.prototype.W = function(a) {
  a.push("" + this.Le, "N")
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
Sf.prototype.P = Pf;
Sf.prototype.W = function(a) {
  var b = this.Da;
  a.push(b.Qa.join(","), "|", "" + b.Ua);
  a.push("A")
};
function Xf(a) {
  Z.call(this, "StreamStatusFrame", [a]);
  this.ke = a
}
B(Xf, Z);
Xf.prototype.P = Pf;
Xf.prototype.W = function(a) {
  var b = this.ke;
  a.push(b.Qa.join(","), "|", "" + b.Ua);
  a.push("T")
};
function Yf() {
  Z.call(this, "StreamCreatedFrame", [])
}
B(Yf, Z);
Yf.prototype.P = Pf;
Yf.prototype.W = function(a) {
  a.push("C")
};
function Zf() {
  Z.call(this, "YouCloseItFrame", [])
}
B(Zf, Z);
Zf.prototype.P = Pf;
Zf.prototype.W = function(a) {
  a.push("Y")
};
function $f(a, b) {
  Z.call(this, "ResetFrame", [a, b]);
  this.De = a;
  this.Dd = b
}
B($f, Z);
$f.prototype.P = Pf;
$f.prototype.W = function(a) {
  a.push(this.De, "|", "" + Number(this.Dd), "!")
};
var bg = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function cg(a) {
  Z.call(this, "TransportKillFrame", [a]);
  this.reason = a
}
B(cg, Z);
cg.prototype.P = Pf;
cg.prototype.W = function(a) {
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
    return a = a.substr(0, a.length - 1), a = bg[a], a == k && f(new $("unknown kill reason: " + a)), new cg(a)
  }
  f(new $("Invalid frame type " + b))
}
;function eg(a, b, c, d) {
  this.contentWindow = a;
  this.Sb = b;
  this.td = c;
  this.rf = d
}
eg.prototype.F = function(a, b) {
  a.push("<XDRFrame frameId=");
  O(this.rf, a, b);
  a.push(", expandedUrl=");
  O(this.Sb, a, b);
  a.push(", streams=");
  O(this.td, a, b);
  a.push(">")
};
function fg() {
  this.frames = [];
  this.Xc = new J
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
    if(g = 0 == e.td.length) {
      g = e.Sb;
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
  (i = !!e.ga) ? Eb(g, e.ga) : i = !!e.Sa;
  i ? Fb(g, e.Sa) : i = !!e.V;
  i ? Gb(g, e.V) : i = e.za != k;
  var n = e.S;
  if(i) {
    Hb(g, e.za)
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
  g == i ? (c.a.info("No need to make a real XDRFrame for " + P(b)), c = Oc(new eg(t, e, [b], k))) : ((g = Q("minerva-elements")) || f(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new Cc, c.Xc.set(d, [i, e, b]), c.a.info("Creating new XDRFrame " + P(d) + "for " + P(b)), c = rd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = i);
  return c
}
fg.prototype.gg = function(a) {
  var b = this.Xc.get(a);
  b || f(Error("Unknown frameId " + P(a)));
  this.Xc.remove(b);
  var c = b[0], a = new eg(Q("minerva-xdrframe-" + a).contentWindow || (Q("minerva-xdrframe-" + a).contentDocument || Q("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (Q("minerva-xdrframe-" + a).contentDocument || Q("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.$(a)
};
var ig = new fg;
t.__XHRTracker_xdrFrameLoaded = y(ig.gg, ig);
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
  this.ne = a;
  this.Hc = [];
  this.Sd = !!b;
  this.of = !!c;
  this.ef = !!d;
  for(b = 0;b < a.length;b++) {
    Kc(a[b], y(this.Wd, this, b, j), y(this.Wd, this, b, m))
  }
  0 == a.length && !this.Sd && this.$(this.Hc)
}
B(mg, Cc);
mg.prototype.ve = 0;
mg.prototype.Wd = function(a, b, c) {
  this.ve++;
  this.Hc[a] = [b, c];
  this.sa || (this.Sd && b ? this.$([a, c]) : this.of && !b ? this.vb(c) : this.ve == this.ne.length && this.$(this.Hc));
  this.ef && !b && (c = k);
  return c
};
mg.prototype.vb = function(a) {
  mg.e.vb.call(this, a);
  ib(this.ne, function(a) {
    a.cancel()
  })
};
function ng(a) {
  a = new mg(a, m, j);
  Ic(a, function(a) {
    return kb(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function og(a, b) {
  this.fg = a;
  this.qe = b
}
og.prototype.Uc = 0;
og.prototype.fc = 0;
og.prototype.Mc = m;
function pg(a) {
  var b = [];
  if(a.Mc) {
    return[b, 2]
  }
  var c = a.Uc, d = a.fg.responseText;
  for(a.Uc = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var e = d.substr(a.fc, c - a.fc), e = e.replace(/\r$/, "");
    if(e.length > a.qe) {
      return a.Mc = j, [b, 2]
    }
    b.push(e);
    a.fc = c += 1
  }
  return a.Uc - a.fc - 1 > a.qe ? (a.Mc = j, [b, 2]) : [b, 1]
}
;function qg(a, b, c) {
  this.B = b;
  this.Y = a;
  this.Ec = c
}
B(qg, L);
s = qg.prototype;
s.a = Y("cw.net.XHRMaster");
s.Ca = -1;
s.Yc = function(a, b, c) {
  this.Ec.__XHRSlave_makeRequest(this.Y, a, b, c)
};
s.ua = o("Ca");
s.bd = function(a, b) {
  1 != b && U(this.a, P(this.Y) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Af(this.B);
  Bf(this.B, a)
};
s.cd = function(a) {
  W(this.a, "ongotheaders_: " + P(a));
  var b = k;
  "Content-Length" in a && (b = ve(a["Content-Length"]));
  a = this.B;
  W(a.a, a.n() + " got Content-Length: " + b);
  a.ha == rg && (b == k && (V(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), sg(a, 2E3 + 1E3 * (b / 3072)))
};
s.dd = function(a) {
  1 != a && W(this.a, this.B.n() + "'s XHR's readyState is " + a);
  this.Ca = a;
  2 <= this.Ca && Af(this.B)
};
s.ad = function() {
  this.B.b()
};
s.c = function() {
  qg.e.c.call(this);
  delete tg.la[this.Y];
  this.Ec.__XHRSlave_dispose(this.Y);
  delete this.Ec
};
function ug() {
  this.la = {}
}
B(ug, L);
s = ug.prototype;
s.a = Y("cw.net.XHRMasterTracker");
s.Gc = function(a, b) {
  var c = "_" + re(), d = new qg(c, a, b);
  return this.la[c] = d
};
s.bd = function(a, b, c) {
  if(La) {
    for(var d = [], e = 0, g = b.length;e < g;e++) {
      d[e] = b[e]
    }
    b = d
  }else {
    b = pb(b)
  }
  (d = this.la[a]) ? d.bd(b, c) : U(this.a, "onframes_: no master for " + P(a))
};
s.cd = function(a, b) {
  var c = this.la[a];
  c ? c.cd(b) : U(this.a, "ongotheaders_: no master for " + P(a))
};
s.dd = function(a, b) {
  var c = this.la[a];
  c ? c.dd(b) : U(this.a, "onreadystatechange_: no master for " + P(a))
};
s.ad = function(a) {
  var b = this.la[a];
  b ? (delete this.la[b.Y], b.ad()) : U(this.a, "oncomplete_: no master for " + P(a))
};
s.c = function() {
  ug.e.c.call(this);
  for(var a = db(this.la);a.length;) {
    a.pop().b()
  }
  delete this.la
};
var tg = new ug;
t.__XHRMaster_onframes = y(tg.bd, tg);
t.__XHRMaster_oncomplete = y(tg.ad, tg);
t.__XHRMaster_ongotheaders = y(tg.cd, tg);
t.__XHRMaster_onreadystatechange = y(tg.dd, tg);
function vg(a, b, c) {
  this.fa = a;
  this.host = b;
  this.port = c
}
function wg(a, b, c) {
  this.host = a;
  this.port = b;
  this.ag = c
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
  this.ze = b;
  this.Ea = c;
  this.Ke = d;
  (!(0 == this.fa.indexOf("http://") || 0 == this.fa.indexOf("https://")) || !(0 == this.Ea.indexOf("http://") || 0 == this.Ea.indexOf("https://"))) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.ze.location.href;
  bb(this.fa, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Ke.location.href;
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
Ag.prototype.Td = p(1);
function Bg(a) {
  this.Uf = a
}
Bg.prototype.F = function(a, b) {
  a.push("<UserContext for ");
  O(this.Uf, a, b);
  a.push(">")
};
function Cg(a, b, c) {
  this.r = a;
  this.Vf = b ? b : new Ag;
  this.w = c ? c : Sc;
  this.Lb = new Se;
  this.Kb = re() + re();
  this.Ba = new Be;
  this.Sc = new De;
  this.Mb = k;
  this.uc = [];
  this.nb = new Bg(this);
  E && (this.Mb = rc(t, "load", this.Mf, m, this))
}
B(Cg, L);
s = Cg.prototype;
s.a = Y("cw.net.ClientStream");
s.le = new Ae(-1, []);
s.me = new Ae(-1, []);
s.Df = 50;
s.Cf = 1048576;
s.fd = k;
s.ed = k;
s.onreset = k;
s.xe = k;
s.qd = m;
s.kd = m;
s.d = 1;
s.wd = -1;
s.h = k;
s.u = k;
s.Eb = k;
s.rd = 0;
s.ye = 0;
s.Je = 0;
s.F = function(a, b) {
  a.push("<ClientStream id=");
  O(this.Kb, a, b);
  a.push(", state=", "" + this.d);
  a.push(", primary=");
  O(this.h, a, b);
  a.push(", secondary=");
  O(this.u, a, b);
  a.push(", resetting=");
  O(this.Eb, a, b);
  a.push(">")
};
function Dg(a) {
  var b = [-1];
  a.h && b.push(a.h.gb);
  a.u && b.push(a.u.gb);
  return Math.max.apply(Math.max, b)
}
function Eg(a) {
  if(!(3 > a.d)) {
    var b = 0 != a.Ba.R.s(), c = Ee(a.Sc), d = !c.Q(a.me) && !(a.h && c.Q(a.h.cb) || a.u && c.Q(a.u.cb)), e = Dg(a);
    if((b = b && e < a.Ba.Ha) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.h.qb ? (X(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.h, c != d.cb && (!d.ma && !d.v.length && Fg(d), d.v.push(new Sf(c)), d.cb = c)), b && Gg(a.h, a.Ba, e + 1), a.h.ka()) : a.u == k ? a.qd ? (X(a.a, "tryToSend_: creating secondary to send " + g), a.u = Hg(a, m), b && Gg(a.u, a.Ba, e + 1), a.u.ka()) : (X(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.kd = j) : X(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
s.Mf = function() {
  this.Mb = k;
  if(this.h && this.h.ab()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.h;
    a.wc = j;
    a.b()
  }
  this.u && this.u.ab() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.u, a.wc = j, a.b())
};
function Ig(a, b) {
  var c;
  ga(c) || (c = j);
  3 < a.d && f(Error("sendStrings: Can't send strings in state " + a.d));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || f(Error("sendStrings: string #" + c + " has illegal chars: " + P(d)))
      }
    }
    a.Ba.extend(b);
    Eg(a)
  }
}
function Hg(a, b) {
  var c;
  a.r instanceof yg ? c = 1 == a.Vf.Td() ? rg : Jg : a.r instanceof wg ? c = Kg : f(Error("Don't support endpoint " + P(a.r)));
  a.wd += 1;
  c = new Lg(a.w, a, a.wd, c, a.r, b);
  X(a.a, "Created: " + c.n());
  a.Lb.add(c);
  return c
}
function Mg(a, b, c) {
  var d = new Ng(a.w, a, b, c);
  X(a.a, "Created: " + d.n() + ", delay=" + b + ", times=" + c);
  a.Lb.add(d);
  return d
}
function Og(a, b) {
  a.Lb.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  W(a.a, "Offline: " + b.n());
  a.rd = b.ya ? a.rd + b.ya : 0;
  1 <= a.rd && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.nb, "stream penalty reached limit", m), a.b());
  if(3 < a.d) {
    4 == a.d && b.Ue ? (W(a.a, "Disposing because resettingTransport_ is done."), a.b()) : W(a.a, "Not creating a transport because ClientStream is in state " + a.d)
  }else {
    var c;
    var d;
    c = b instanceof Ng;
    if(!c && b.wc) {
      var e = E ? lg ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      X(a.a, "getDelayForNextTransport_: " + P({delay:c, times:d}))
    }else {
      if(d = b.Id(), b == a.h ? d ? e = ++a.ye : c || (e = a.ye = 0) : d ? e = ++a.Je : c || (e = a.Je = 0), c || !e) {
        d = c = 0, X(a.a, "getDelayForNextTransport_: " + P({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), i = Math.floor(4E3 * Math.random()) - 2E3, l = Math.max(0, b.Qe - b.xd);
        d = (c = Math.max(0, g + i - l)) ? 1 : 0;
        X(a.a, "getDelayForNextTransport_: " + P({count:e, base:g, variance:i, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    b == a.h ? (a.h = k, c ? a.h = Mg(a, e, c) : (e = Dg(a), a.h = Hg(a, j), Gg(a.h, a.Ba, e + 1)), a.h.ka()) : b == a.u && (a.u = k, c ? (a.u = Mg(a, e, c), a.u.ka()) : Eg(a))
  }
}
s.reset = function(a) {
  3 < this.d && f(Error("reset: Can't send reset in state " + this.d));
  this.d = 4;
  this.h && this.h.qb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Pg(this.h, a), this.h.ka()) : (this.h && (W(this.a, "reset: Disposing primary before sending ResetFrame."), this.h.b()), this.u && (W(this.a, "reset: Disposing secondary before sending ResetFrame."), this.u.b()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Eb = Hg(this, m), Pg(this.Eb, a), this.Eb.ka());
  this.onreset && this.onreset.call(this.nb, a, j)
};
function Qg(a, b, c, d) {
  var e;
  e = a.Sc;
  for(var g = a.Df, i = a.Cf, l = [], n = m, q = 0, H = c.length;q < H;q++) {
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
        e.N -= r[1];
        e.Na = w
      }
    }else {
      if(!(w <= e.Na)) {
        if(g != k && e.Ga.s() >= g) {
          n = j;
          break
        }
        var z = xe(r);
        if(i != k && e.N + z > i) {
          n = j;
          break
        }
        e.Ga.set(w, [r, z]);
        e.N += z
      }
    }
  }
  e.Ga.Ma() && e.Ga.clear();
  e = [l, n];
  c = e[0];
  e = e[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(i = c[g], a.fd && a.fd.call(a.nb, i), 4 == a.d || a.aa) {
        return
      }
    }
  }
  d || Eg(a);
  if(!(4 == a.d || a.aa) && e) {
    U(b.a, b.n() + "'s peer caused rwin overflow."), b.b()
  }
}
s.Pd = function(a) {
  U(this.a, "Failed to start " + P(this) + "; error was " + P(a.message));
  this.b()
};
s.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.d && f(Error("ClientStream.start: " + P(this) + " already started"));
  this.ed && this.ed(this);
  this.d = 2;
  if(this.r instanceof xg) {
    var a = hg(this.r.fa, this), b = hg(this.r.Ea, this), a = ng([a, b]);
    Ic(a, y(this.mf, this));
    Lc(a, y(this.Pd, this))
  }else {
    if(this.r instanceof vg) {
      if(ze) {
        this.Rd()
      }else {
        var a = Jf(this.w, this.r.fa), c = this;
        Ic(a, function(a) {
          ze || (ze = new Ef(c.w, a));
          return k
        });
        Ic(a, y(this.Rd, this));
        Lc(a, y(this.Pd, this))
      }
    }else {
      Rg(this)
    }
  }
};
s.mf = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Sb, e = a[1].Sb;
  this.uc.push(a[0]);
  this.uc.push(a[1]);
  this.r = new yg(d, b, e, c);
  Rg(this)
};
s.Rd = function() {
  this.r = new wg(this.r.host, this.r.port, ze);
  Rg(this)
};
function Rg(a) {
  a.d = 3;
  a.h = Hg(a, j);
  Gg(a.h, a.Ba, k);
  a.h.ka()
}
s.c = function() {
  this.a.info(P(this) + " in disposeInternal.");
  this.d = 5;
  for(var a = this.Lb.G(), b = 0;b < a.length;b++) {
    a[b].b()
  }
  for(a = 0;a < this.uc.length;a++) {
    ob(this.uc[a].td, this)
  }
  E && this.Mb && (uc(this.Mb), this.Mb = k);
  this.xe && this.xe.call(this.nb);
  delete this.Lb;
  delete this.h;
  delete this.u;
  delete this.Eb;
  delete this.nb;
  Cg.e.c.call(this)
};
var rg = 1, Jg = 2, Kg = 3;
function Lg(a, b, c, d, e, g) {
  this.w = a;
  this.A = b;
  this.mb = c;
  this.ha = d;
  this.r = e;
  this.v = [];
  this.Va = g;
  this.qb = !this.ab();
  this.ib = this.ha != rg;
  this.Ze = y(this.Zf, this)
}
B(Lg, L);
s = Lg.prototype;
s.a = Y("cw.net.ClientTransport");
s.m = k;
s.xd = k;
s.Qe = k;
s.jc = k;
s.ma = m;
s.qc = m;
s.cb = k;
s.Ub = 0;
s.gb = -1;
s.hc = -1;
s.Ue = m;
s.wc = m;
s.ya = 0;
s.yb = m;
s.F = function(a) {
  a.push("<ClientTransport #", "" + this.mb, ", becomePrimary=", "" + this.Va, ">")
};
s.n = function() {
  return(this.Va ? "Prim. T#" : "Sec. T#") + this.mb
};
s.Id = function() {
  return!(!this.yb && this.Ub)
};
s.ab = function() {
  return this.ha == rg || this.ha == Jg
};
function Sg(a, b) {
  tb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Qg(a.A, a, b, !a.ib)
}
function Tg(a, b, c) {
  try {
    var d = dg(b);
    a.Ub += 1;
    W(a.a, a.n() + " RECV " + P(d));
    var e;
    1 == a.Ub && !d.Q(zg) && a.ab() ? (V(a.a, a.n() + " is closing soon because got bad preamble: " + P(d)), e = j) : e = m;
    if(e) {
      return j
    }
    if(d instanceof Tf) {
      if(!/^([ -~]*)$/.test(d.ud)) {
        return a.yb = j
      }
      a.hc += 1;
      c.push([a.hc, d.ud])
    }else {
      if(d instanceof Sf) {
        var g = a.A, i = d.Da;
        g.le = i;
        var l = g.Ba, n = i.Ua, c = m;
        n > l.Ha && (c = j);
        for(var q = Ce(l).concat(), d = 0;d < q.length;d++) {
          var H = q[d];
          if(H > n) {
            break
          }
          var r = l.R.get(H)[1];
          l.R.remove(H);
          l.N -= r
        }
        for(d = 0;d < i.Qa.length;d++) {
          var w = i.Qa[d];
          w > l.Ha && (c = j);
          l.R.U(w) && (r = l.R.get(w)[1], l.R.remove(w), l.N -= r)
        }
        l.R.Ma() && l.R.clear();
        if(c) {
          return V(a.a, a.n() + " is closing soon because got bad SackFrame"), a.yb = j
        }
      }else {
        if(d instanceof Vf) {
          a.hc = d.Le - 1
        }else {
          if(d instanceof Xf) {
            a.A.me = d.ke
          }else {
            if(d instanceof Zf) {
              return X(a.a, a.n() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof cg) {
              return a.yb = j, "stream_attach_failure" == d.reason ? a.ya += 1 : "acked_unsent_strings" == d.reason && (a.ya += 0.5), X(a.a, a.n() + " is closing soon because got " + P(d)), j
            }
            if(!(d instanceof Uf)) {
              if(d instanceof Yf) {
                var z = a.A, Uh = !a.ib;
                X(z.a, "Stream is now confirmed to exist at server.");
                z.qd = j;
                z.kd && !Uh && (z.kd = m, Eg(z))
              }else {
                if(c.length) {
                  Sg(a, c);
                  if(!u(c)) {
                    for(var Vd = c.length - 1;0 <= Vd;Vd--) {
                      delete c[Vd]
                    }
                  }
                  c.length = 0
                }
                if(d instanceof $f) {
                  var Jc = a.A;
                  Jc.onreset && Jc.onreset.call(Jc.nb, d.De, d.Dd);
                  Jc.b();
                  return j
                }
                f(Error(a.n() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(ag) {
    return ag instanceof $ || f(ag), V(a.a, a.n() + " is closing soon because got InvalidFrame: " + P(b)), a.yb = j
  }
  return m
}
function Bf(a, b) {
  a.qc = j;
  try {
    for(var c = m, d = [], e = 0, g = b.length;e < g;e++) {
      if(a.aa) {
        a.a.info(a.n() + " returning from loop because we're disposed.");
        return
      }
      if(c = Tg(a, b[e], d)) {
        break
      }
    }
    d.length && Sg(a, d);
    a.qc = m;
    a.v.length && a.ka();
    c && (X(a.a, a.n() + " closeSoon is true.  Frames were: " + P(b)), a.b())
  }finally {
    a.qc = m
  }
}
s.Zf = function() {
  V(this.a, this.n() + " timed out due to lack of connection or no data being received.");
  this.b()
};
function Ug(a) {
  a.jc != k && (a.w.C.clearTimeout(a.jc), a.jc = k)
}
function sg(a, b) {
  Ug(a);
  b = Math.round(b);
  a.jc = a.w.C.setTimeout(a.Ze, b);
  W(a.a, a.n() + "'s receive timeout set to " + b + " ms.")
}
function Af(a) {
  a.ha != rg && (a.ha == Kg || a.ha == Jg ? sg(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ha)))
}
function Fg(a) {
  var b = new Qf;
  b.mb = a.mb;
  b.Ae = 2;
  b.de = 2;
  a.A.qd || (b.Fe = j);
  b.Kb = a.A.Kb;
  b.sd = a.ib;
  b.sd && (b.te = 4096);
  b.re = 3E5;
  b.pe = a.ib ? Math.floor(10) : 0;
  b.Re = m;
  a.Va && (b.Ne = k, b.Zc = Math.floor((a.ib ? 358E4 : 25E3) / 1E3));
  b.Da = Ee(a.A.Sc);
  b.dc = a.A.le;
  a.v.push(b);
  a.cb = b.Da
}
function Cf(a, b) {
  b && (a.ya += 0.5);
  a.b()
}
s.ka = function() {
  this.ma && !this.qb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.qc) {
    X(this.a, this.n() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.ma;
    this.ma = j;
    !a && !this.v.length && Fg(this);
    for(a = 0;a < this.v.length;a++) {
      W(this.a, this.n() + " SEND " + P(this.v[a]))
    }
    if(this.ab()) {
      for(var a = [], b = 0, c = this.v.length;b < c;b++) {
        this.v[b].W(a), a.push("\n")
      }
      this.v = [];
      a = a.join("");
      b = this.Va ? this.r.fa : this.r.Ea;
      this.m = tg.Gc(this, this.Va ? this.r.ze : this.r.Ke);
      this.xd = this.w.C === Bc ? A() : this.w.C.getTime();
      this.m.Yc(b, "POST", a);
      sg(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.ib ? 0 : this.Va ? 25E3 : 0))
    }else {
      if(this.ha == Kg) {
        a = [];
        b = 0;
        for(c = this.v.length;b < c;b++) {
          a.push(this.v[b].P())
        }
        this.v = [];
        this.m ? this.m.Nb(a) : (b = this.r, this.m = new Ff(this), this.m.pc = b.ag.Gc(this.m), this.xd = this.w.C === Bc ? A() : this.w.C.getTime(), this.m.Dc(b.host, b.port), this.m.aa || (this.m.Nb(a), this.m.aa || sg(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.ha))
      }
    }
  }
};
function Gg(a, b, c) {
  !a.ma && !a.v.length && Fg(a);
  for(var d = Math.max(c, a.gb + 1), e = Ce(b), c = [], g = 0;g < e.length;g++) {
    var i = e[g];
    (d == k || i >= d) && c.push([i, b.R.get(i)[0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], e = g[0], g = g[1], (-1 == a.gb || a.gb + 1 != e) && a.v.push(new Vf(e)), a.v.push(new Tf(g)), a.gb = e
  }
}
s.c = function() {
  this.a.info(this.n() + " in disposeInternal.");
  Lg.e.c.call(this);
  this.Qe = this.w.C === Bc ? A() : this.w.C.getTime();
  this.v = [];
  Ug(this);
  this.m && this.m.b();
  var a = this.A;
  this.A = k;
  Og(a, this)
};
function Pg(a, b) {
  !a.ma && !a.v.length && Fg(a);
  a.v.push(new $f(b, j));
  a.Ue = j
}
function Ng(a, b, c, d) {
  this.w = a;
  this.A = b;
  this.Od = c;
  this.Kd = d
}
B(Ng, L);
s = Ng.prototype;
s.ma = m;
s.qb = m;
s.Zb = k;
s.cb = k;
s.a = Y("cw.net.DoNothingTransport");
function Vg(a) {
  a.Zb = a.w.C.setTimeout(function() {
    a.Zb = k;
    a.Kd--;
    a.Kd ? Vg(a) : a.b()
  }, a.Od)
}
s.ka = function() {
  this.ma && !this.qb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.ma = j;
  Vg(this)
};
s.F = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.Od, ">")
};
s.ab = p(m);
s.n = p("Wast. T");
s.Id = p(m);
s.c = function() {
  this.a.info(this.n() + " in disposeInternal.");
  Ng.e.c.call(this);
  this.Zb != k && this.w.C.clearTimeout(this.Zb);
  var a = this.A;
  this.A = k;
  Og(a, this)
};
/*

 linkify - v0.3 - 6/27/2009
 http://benalman.com/code/test/js-linkify/

 Copyright (c) 2009 "Cowboy" Ben Alman
 Licensed under the MIT license
 http://benalman.com/about/license/

 Some regexps adapted from http://userscripts.org/scripts/review/7122
*/
var Wg, Xg, Yg, Zg;
Wg = RegExp("(?:\\b[a-z\\d.-]+://[^<>\\s]+|\\b(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:[;/][^#?<>\\s]*)?(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w)|(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w))", 
"ig");
Xg = /^[a-z\d.-]+:\/\//i;
Yg = {"'":"`", ">":"<", ")":"(", "]":"[", "}":"{", "\u00bb":"\u00ab", "\u203a":"\u2039"};
Zg = {$:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, Ce:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
function $g(a) {
  var b;
  b = b || {};
  var c = [], d, e;
  for(e in Zg) {
    ga(b[e]) || (b[e] = Zg[e])
  }
  for(;e = Wg.exec(a);) {
    e = e[0];
    var g = Wg.lastIndex, i = g - e.length;
    if(!/[\/:]/.test(a.charAt(i - 1))) {
      do {
        var l = e, n = e.substr(-1), q = Yg[n];
        if(q && (q = e.match(RegExp("\\" + q + "(?!$)", "g")), n = e.match(RegExp("\\" + n, "g")), (q ? q.length : 0) < (n ? n.length : 0))) {
          e = e.substr(0, e.length - 1), g--
        }
        b.Ce && (e = e.replace(b.Ce, function(a) {
          g -= a.length;
          return""
        }))
      }while(e.length && e !== l);
      l = e;
      Xg.test(l) || (l = (-1 !== l.indexOf("@") ? !l.indexOf("mailto:") ? "" : "mailto:" : !l.indexOf("irc.") ? "irc://" : !l.indexOf("ftp.") ? "ftp://" : "http://") + l);
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
;function ah() {
  this.Ee = A()
}
var bh = new ah;
ah.prototype.set = aa("Ee");
ah.prototype.reset = function() {
  this.set(A())
};
ah.prototype.get = o("Ee");
function ch(a) {
  this.hd = a || "";
  this.Sf = bh
}
ch.prototype.Of = j;
ch.prototype.Qf = j;
ch.prototype.Pf = j;
ch.prototype.Me = m;
function dh(a) {
  return 10 > a ? "0" + a : "" + a
}
function eh(a, b) {
  var c = (a.Oe - b) / 1E3, d = c.toFixed(3), e = 0;
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
function fh(a) {
  ch.call(this, a)
}
B(fh, ch);
fh.prototype.Me = j;
function gh(a) {
  this.$c = a || 100;
  this.oa = []
}
s = gh.prototype;
s.Bb = 0;
s.add = function(a) {
  this.oa[this.Bb] = a;
  this.Bb = (this.Bb + 1) % this.$c
};
s.get = function(a) {
  a = hh(this, a);
  return this.oa[a]
};
s.set = function(a, b) {
  a = hh(this, a);
  this.oa[a] = b
};
s.s = function() {
  return this.oa.length
};
s.Ma = function() {
  return 0 == this.oa.length
};
s.clear = function() {
  this.Bb = this.oa.length = 0
};
s.G = function() {
  for(var a = this.s(), b = this.s(), c = [], a = this.s() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
s.ca = function() {
  for(var a = [], b = this.s(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
s.U = function(a) {
  return a < this.s()
};
s.Qb = function(a) {
  for(var b = this.s(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return j
    }
  }
  return m
};
function hh(a, b) {
  b >= a.oa.length && f(Error("Out of bounds exception"));
  return a.oa.length < a.$c ? b : (a.Bb + Number(b)) % a.$c
}
;function ih(a, b) {
  this.va = a || "";
  this.hd = b || "";
  this.hb = [];
  this.lc = new gh(jh);
  this.Jf = y(this.Xe, this);
  this.qf = new fh(this.hd);
  this.nf = {};
  if(j != this.ge) {
    this.ge = j;
    var c = sf(), d = this.Jf;
    c.zb || (c.zb = []);
    c.zb.push(d)
  }
  this.ub = "1" == kh(this.va, "enabled");
  t.setInterval(y(this.Nf, this), 7500)
}
var jh = 500;
s = ih.prototype;
s.Te = "LOGGING";
s.kf = m;
s.q = k;
s.Bd = m;
s.ge = m;
s.Fd = k;
s.Vc = A();
s.La = function() {
  this.ub && lh(this)
};
s.isEnabled = o("ub");
s.nc = function(a) {
  if(this.ub = a) {
    lh(this), this.q && this.tc()
  }
  mh(this, "enabled", a ? "1" : "0")
};
function nh(a) {
  return!!a.q && !a.q.closed
}
s.bf = function() {
  this.lc.clear();
  nh(this) && this.tc()
};
s.Xe = function(a) {
  if(!this.nf[a.oe]) {
    var b = this.qf, c;
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
    d.push(b.hd, " ");
    if(b.Of) {
      var e = new Date(a.Oe);
      d.push("[", dh(e.getFullYear() - 2E3) + dh(e.getMonth() + 1) + dh(e.getDate()) + " " + dh(e.getHours()) + ":" + dh(e.getMinutes()) + ":" + dh(e.getSeconds()) + "." + dh(Math.floor(e.getMilliseconds() / 10)), "] ")
    }
    b.Qf && d.push("[", Aa(eh(a, b.Sf.get())), "s] ");
    b.Pf && d.push("[", C(a.oe), "] ");
    d.push('<span class="', c, '">', ua(Aa(C(a.se))));
    b.Me && a.Lc && d.push("<br>", ua(Aa(a.Kc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.ub ? (lh(this), this.lc.add(b), oh(this, b)) : this.lc.add(b);
    this.kf && a.X.value >= df.value && this.nc(j)
  }
};
function oh(a, b) {
  a.hb.push(b);
  t.clearTimeout(a.Fd);
  750 < A() - a.Vc ? a.Cd() : a.Fd = t.setTimeout(y(a.Cd, a), 250)
}
s.Cd = function() {
  this.Vc = A();
  if(nh(this)) {
    var a = this.q.document.body, a = a && 100 >= a.scrollHeight - (a.scrollTop + a.clientHeight);
    this.q.document.write(this.hb.join(""));
    this.hb.length = 0;
    a && this.q.scrollTo(0, 1E6)
  }
};
function ph(a) {
  for(var b = a.lc.G(), c = 0;c < b.length;c++) {
    oh(a, b[c])
  }
}
function lh(a) {
  if(!nh(a) && !a.Bd) {
    var b = kh(a.va, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), e = Number(b[2]), b = Number(b[3]);
    a.Bd = j;
    a.q = window.open("", D ? a.va.replace(/[\s\-\.\,]/g, "_") : a.va, "width=" + e + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    !a.q && !a.Rf && (alert("Logger popup was blocked"), a.Rf = j);
    a.Bd = m;
    a.q && a.tc()
  }
}
s.Wb = p("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
s.tc = function() {
  nh(this) || (this.q.document.open(), oh(this, "<style>" + this.Wb() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.Te + "<br><small>Logger: " + this.va + "</small></div><hr>"), ph(this))
};
function mh(a, b, c) {
  b += a.va;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(A() + 2592E6)).toUTCString()
}
function kh(a, b, c) {
  var a = b + a, b = "" + document.cookie, d = b.indexOf(a + "=");
  return-1 != d ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, -1 == c ? b.length : c))) : c || ""
}
s.Nf = function() {
  nh(this) && mh(this, "dbg", (this.q.screenX || this.q.screenLeft || 0) + "," + (this.q.screenY || this.q.screenTop || 0) + "," + (this.q.outerWidth || 800) + "," + (this.q.outerHeight || 500))
};
function qh(a, b) {
  if(rh) {
    var c = sh(), d;
    for(d in c) {
      var e = d.replace("fancywindow.sel.", ""), e = Y(e), g = e.X, i = window.localStorage.getItem(d).toString();
      (!g || g.toString() != i) && e.kb(nf(i))
    }
  }
  ih.call(this, a, b)
}
B(qh, ih);
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
  this.Vc = A();
  if(nh(this)) {
    for(var a = this.K.g("log"), b = 100 >= a.scrollHeight - (a.scrollTop + a.offsetHeight), c = 0;c < this.hb.length;c++) {
      var d = this.K.o("div", "logmsg");
      d.innerHTML = this.hb[c];
      a.appendChild(d)
    }
    this.hb.length = 0;
    this.He();
    b && (a.scrollTop = a.scrollHeight)
  }
};
s.tc = function() {
  if(nh(this)) {
    var a = this.q.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.va + "</title><style>" + this.Wb() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.va + "</b></p><p>" + this.Te + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (D ? a.body : this.q).onresize = y(this.He, this);
    this.K = new ld(a);
    this.K.g("openbutton").onclick = y(this.Hf, this);
    this.K.g("closebutton").onclick = y(this.cf, this);
    this.K.g("clearbutton").onclick = y(this.bf, this);
    this.K.g("exitbutton").onclick = y(this.lf, this);
    ph(this)
  }
};
s.Hf = function() {
  var a = this.K.g("optionsarea");
  a.innerHTML = "";
  for(var b = uh(), c = this.K, d = 0;d < b.length;d++) {
    var e = Y(b[d]), e = c.o("div", {}, vh(this, "sel" + b[d], e.X ? e.X.name : "INHERIT"), c.o("span", {}, b[d] || "(root)"));
    a.appendChild(e)
  }
  this.K.g("options").style.display = "block";
  return m
};
function vh(a, b, c) {
  for(var a = a.K, b = a.o("select", {id:b}), d = 0;d < lf.length;d++) {
    var e = lf[d], g = a.o("option", {}, e.name);
    c == e.name && (g.selected = j);
    b.appendChild(g)
  }
  b.appendChild(a.o("option", {selected:"INHERIT" == c}, "INHERIT"));
  return b
}
s.cf = function() {
  this.K.g("options").style.display = "none";
  for(var a = uh(), b = this.K, c = 0;c < a.length;c++) {
    var d = Y(a[c]), e = b.g("sel" + a[c]), e = e.options[e.selectedIndex].text;
    "INHERIT" == e ? d.kb(k) : d.kb(nf(e))
  }
  if(rh) {
    a = uh();
    b = sh();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], e = Y(a[c]).X, d in b ? e ? window.localStorage.getItem(d) != e.name && window.localStorage.setItem(d, e.name) : window.localStorage.removeItem(d) : e && window.localStorage.setItem(d, e.name)
    }
  }
  return m
};
s.He = function() {
  var a = this.K, b = a.g("log"), c = a.g("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.L.body.offsetHeight - c.offsetHeight - (D ? 4 : 0) + "px"
};
s.lf = function() {
  this.nc(m);
  this.q && this.q.close()
};
s.Wb = function() {
  return qh.e.Wb.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function sh() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != k && 0 == d.lastIndexOf("fancywindow.sel.", 0) && (a[d] = j)
  }
  return a
}
function uh() {
  var a = eb(pf);
  a.sort();
  return a
}
;function wh() {
}
wh.prototype.Ob = k;
var xh;
function yh() {
}
B(yh, wh);
function zh(a) {
  return(a = Ah(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Bh(a) {
  var b = {};
  Ah(a) && (b[0] = j, b[1] = j);
  return b
}
yh.prototype.Qc = k;
function Ah(a) {
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
xh = new yh;
function Ch(a) {
  this.headers = new J;
  this.ob = a || k
}
B(Ch, Ac);
Ch.prototype.a = Y("goog.net.XhrIo");
var Dh = /^https?$/i;
s = Ch.prototype;
s.na = m;
s.i = k;
s.vc = k;
s.Wc = "";
s.je = "";
s.Ab = "";
s.Ic = m;
s.ac = m;
s.Rc = m;
s.Ka = m;
s.rc = 0;
s.Ra = k;
s.Ie = "";
s.dg = m;
s.send = function(a, b, c, d) {
  this.i && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Wc = a;
  this.Ab = "";
  this.je = b;
  this.Ic = m;
  this.na = j;
  this.i = this.ob ? zh(this.ob) : zh(xh);
  this.vc = this.ob ? this.ob.Ob || (this.ob.Ob = Bh(this.ob)) : xh.Ob || (xh.Ob = Bh(xh));
  this.i.onreadystatechange = y(this.we, this);
  try {
    W(this.a, Eh(this, "Opening Xhr")), this.Rc = j, this.i.open(b, a, j), this.Rc = m
  }catch(e) {
    W(this.a, Eh(this, "Error opening Xhr: " + e.message));
    Fh(this, e);
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
  this.Ie && (this.i.responseType = this.Ie);
  "withCredentials" in this.i && (this.i.withCredentials = this.dg);
  try {
    this.Ra && (Bc.clearTimeout(this.Ra), this.Ra = k), 0 < this.rc && (W(this.a, Eh(this, "Will abort after " + this.rc + "ms if incomplete")), this.Ra = Bc.setTimeout(y(this.$f, this), this.rc)), W(this.a, Eh(this, "Sending request")), this.ac = j, this.i.send(a), this.ac = m
  }catch(i) {
    W(this.a, Eh(this, "Send error: " + i.message)), Fh(this, i)
  }
};
s.$f = function() {
  "undefined" != typeof ba && this.i && (this.Ab = "Timed out after " + this.rc + "ms, aborting", W(this.a, Eh(this, this.Ab)), this.dispatchEvent("timeout"), this.abort(8))
};
function Fh(a, b) {
  a.na = m;
  a.i && (a.Ka = j, a.i.abort(), a.Ka = m);
  a.Ab = b;
  Gh(a);
  Hh(a)
}
function Gh(a) {
  a.Ic || (a.Ic = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
s.abort = function() {
  this.i && this.na && (W(this.a, Eh(this, "Aborting")), this.na = m, this.Ka = j, this.i.abort(), this.Ka = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Hh(this))
};
s.c = function() {
  this.i && (this.na && (this.na = m, this.Ka = j, this.i.abort(), this.Ka = m), Hh(this, j));
  Ch.e.c.call(this)
};
s.we = function() {
  !this.Rc && !this.ac && !this.Ka ? this.Gf() : Ih(this)
};
s.Gf = function() {
  Ih(this)
};
function Ih(a) {
  if(a.na && "undefined" != typeof ba) {
    if(a.vc[1] && 4 == a.ua() && 2 == Jh(a)) {
      W(a.a, Eh(a, "Local request error detected and ignored"))
    }else {
      if(a.ac && 4 == a.ua()) {
        Bc.setTimeout(y(a.we, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.ua()) {
          W(a.a, Eh(a, "Request complete"));
          a.na = m;
          var b = Jh(a), c;
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
              b = ("" + a.Wc).match(ab)[1] || k, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !Dh.test(b ? b.toLowerCase() : "")
            }
            c = b
          }
          if(c) {
            a.dispatchEvent("complete"), a.dispatchEvent("success")
          }else {
            var d;
            try {
              d = 2 < a.ua() ? a.i.statusText : ""
            }catch(e) {
              W(a.a, "Can not get status: " + e.message), d = ""
            }
            a.Ab = d + " [" + Jh(a) + "]";
            Gh(a)
          }
          Hh(a)
        }
      }
    }
  }
}
function Hh(a, b) {
  if(a.i) {
    var c = a.i, d = a.vc[0] ? da : k;
    a.i = k;
    a.vc = k;
    a.Ra && (Bc.clearTimeout(a.Ra), a.Ra = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(e) {
      U(a.a, "Problem encountered resetting onreadystatechange: " + e.message)
    }
  }
}
s.fe = function() {
  return!!this.i
};
s.ua = function() {
  return this.i ? this.i.readyState : 0
};
function Jh(a) {
  try {
    return 2 < a.ua() ? a.i.status : -1
  }catch(b) {
    return V(a.a, "Can not get status: " + b.message), -1
  }
}
s.getResponseHeader = function(a) {
  return this.i && 4 == this.ua() ? this.i.getResponseHeader(a) : h
};
function Eh(a, b) {
  return b + " [" + a.je + " " + a.Wc + " " + Jh(a) + "]"
}
;var Kh = !(D || E && !F("420+"));
function Lh(a, b) {
  this.sc = a;
  this.Y = b
}
B(Lh, L);
s = Lh.prototype;
s.m = k;
s.Ca = -1;
s.Ud = m;
s.ce = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Mh(a) {
  var b = pg(a.Md), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.Y, c, b), 1 != b && a.b()) : a.b()
}
s.xf = function() {
  Mh(this);
  if(!this.aa) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.Y);
    this.b()
  }
};
s.Kf = function() {
  var a = t.parent;
  if(a) {
    this.Ca = this.m.ua();
    if(2 <= this.Ca && !this.Ud) {
      for(var b = new J, c = this.ce.length;c--;) {
        var d = this.ce[c];
        try {
          b.set(d, this.m.i.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.s() && (this.Ud = j, a.__XHRMaster_ongotheaders(this.Y, Db(b)), this.aa)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.Y, this.Ca);
    Kh && 3 == this.Ca && Mh(this)
  }else {
    this.b()
  }
};
s.Yc = function(a, b, c) {
  this.m = new Ch;
  N(this.m, "readystatechange", y(this.Kf, this));
  N(this.m, "complete", y(this.xf, this));
  this.m.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Md = new og(this.m.i, 1048576)
};
s.c = function() {
  Lh.e.c.call(this);
  delete this.Md;
  this.m && this.m.b();
  delete this.sc.Jb[this.Y];
  delete this.sc
};
function Nh() {
  this.Jb = {}
}
B(Nh, L);
Nh.prototype.Bf = function(a, b, c, d) {
  var e = new Lh(this, a);
  this.Jb[a] = e;
  e.Yc(b, c, d)
};
Nh.prototype.hf = function(a) {
  (a = this.Jb[a]) && a.b()
};
Nh.prototype.c = function() {
  Nh.e.c.call(this);
  for(var a = db(this.Jb);a.length;) {
    a.pop().b()
  }
  delete this.Jb
};
var Oh = new Nh;
t.__XHRSlave_makeRequest = y(Oh.Bf, Oh);
t.__XHRSlave_dispose = y(Oh.hf, Oh);
var Ph = Y("cw.net.demo");
function Qh() {
}
Qh.prototype.Td = function() {
  return Boolean(Number((new K(document.location)).H.get("httpStreaming", "0"))) ? 2 : 1
};
var Rh, Sh = Y("ljstream.logger");
window.onerror = function(a, b, c) {
  U(Sh, "window.onerror: message: " + P(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Th() {
}
Th.prototype.Xf = function(a) {
  this.A = a;
  Ig(this.A, ["subprotocol:ljstream"]);
  Vh(this)
};
Th.prototype.Wf = function(a, b) {
  Sh.info("streamReset: reasonString=" + P(a) + ", applicationLevel=" + b);
  Wh("Disconnected from server.  Try reloading this page.");
  Xh = k
};
function Vh(a) {
  Sh.info("Sending preferences to server");
  Ig(a.A, [Wc(["SetPreferences", {include_russian_posts:Q("include_russian_posts").checked}])])
}
Th.prototype.Yf = function(a) {
  var a = Uc(a), b = a[1];
  if("NewPost" == a[0]) {
    var a = b.title, c = b.url, b = b.body;
    (a = ra(a)) || (a = "[No title]");
    var d = $g(C(b)), e = document, b = e.createElement("div");
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
    Yh(a)
  }
};
Th.prototype.reset = function(a) {
  Sh.info("resetting with reason: " + a);
  this.A.reset(a)
};
var Xh = k, Zh = new Qc(t.window);
function Wh(a) {
  a = rd("span", {"class":"important-message"}, a);
  Yh(a)
}
function $h() {
  Xh && (Xh.reset("idle timeout fired"), Xh = k, Wh("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var ai = k;
function bi() {
  ai != k && Zh.C.clearTimeout(ai);
  Xh && (ai = Zh.C.setTimeout($h, 6E5))
}
N(window, ["click", "focus", "keydown", "keypress"], bi, j);
var qd = new ld, ci = 0;
function Yh(a) {
  a = rd("div", {"class":"row-" + (0 == ci % 2 ? "even" : "odd")}, rd("nobr", {}, a));
  Q("ljstream-container-inner").appendChild(a);
  ci += 1;
  var b;
  if(b = Rh) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !E && "CSS1Compat" == d.compatMode ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new bd(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = pd().height;
    b = !(a + b <= c + d)
  }
  b && (a = pd().height, window.scrollBy(0, Math.round(a / 2) + 80))
}
function di() {
  N(t, "load", function() {
    window.scrollTo(0, 0)
  });
  N(Q("include_russian_posts"), "click", function() {
    Vh(Xh)
  });
  Rh = j;
  N(Q("automatic_scroll"), "click", function(a) {
    Rh = a.target.checked
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
function ei() {
  sf().kb(kf);
  if("1" == (new K(document.location)).H.get("logging")) {
    var a = new qh("main");
    a.nc(j);
    a.La()
  }
  Sh.info("Logger works.");
  di();
  a = new Qh;
  Xh = new Th;
  bi();
  var b = (new K(document.location)).H, c = "http" != b.get("mode");
  if((b = Boolean(Number(b.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    V(Ph, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), b = m
  }
  var d = b, b = new K(document.location);
  c ? c = new vg("/_minerva/", b.V, t.__demo_mainSocketPort) : (d ? (c = t.__demo_shared_domain, v(c) || f(Error("domain was " + P(c) + "; expected a string.")), b = b.J(), Gb(b, "_____random_____." + c)) : b = b.J(), Ib(b, "/_minerva/"), Jb(b, "", h), c = new xg(b.toString().replace("_____random_____", "%random%")));
  a = new Cg(c, a, Zh);
  c = Xh;
  a.ed = y(c.Xf, c);
  a.onreset = y(c.Wf, c);
  a.fd = y(c.Yf, c);
  a.start()
}
var fi = ["__ljstream_init"], gi = t;
!(fi[0] in gi) && gi.execScript && gi.execScript("var " + fi[0]);
for(var hi;fi.length && (hi = fi.shift());) {
  !fi.length && ga(ei) ? gi[hi] = ei : gi = gi[hi] ? gi[hi] : gi[hi] = {}
}
;})();
