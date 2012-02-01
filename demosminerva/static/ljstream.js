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
function r(a) {
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
    return a.xf || (a.xf = new a)
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
var z = Date.now || function() {
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
    var l = d[i] || "", n = e[i] || "", p = RegExp("(\\d*)(\\D*)", "g"), G = RegExp("(\\d*)(\\D*)", "g");
    do {
      var q = p.exec(l) || ["", "", ""], w = G.exec(n) || ["", "", ""];
      if(0 == q[0].length && 0 == w[0].length) {
        break
      }
      c = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? -1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? 1 : 0) || ((0 == q[2].length) < (0 == w[2].length) ? -1 : (0 == q[2].length) > (0 == w[2].length) ? 1 : 0) || (q[2] < w[2] ? -1 : q[2] > w[2] ? 1 : 0)
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
;function H(a) {
  this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
B(H, Error);
H.prototype.name = "CustomError";
function Za(a, b) {
  b.unshift(a);
  H.call(this, qa.apply(k, b));
  b.shift()
}
B(Za, H);
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
}, jb = I.map ? function(a, b, c) {
  return I.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), g = v(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in g && (e[i] = b.call(c, g[i], i, a))
  }
  return e
}, kb = I.some ? function(a, b, c) {
  return I.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && b.call(c, e[g], g, a)) {
      return j
    }
  }
  return m
}, lb = I.every ? function(a, b, c) {
  return I.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && !b.call(c, e[g], g, a)) {
      return m
    }
  }
  return j
};
function mb(a, b) {
  return 0 <= hb(a, b)
}
function nb(a, b) {
  var c = hb(a, b);
  0 <= c && I.splice.call(a, c, 1)
}
function ob(a) {
  return I.concat.apply(I, arguments)
}
function pb(a) {
  if(u(a)) {
    return ob(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
}
function qb(a, b) {
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
function rb(a, b, c, d) {
  I.splice.apply(a, sb(arguments, 1))
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
  if("function" == typeof a.u) {
    a = a.u()
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
  if("function" == typeof a.H) {
    return a.H()
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
  if("function" == typeof a.da) {
    return a.da()
  }
  if("function" != typeof a.H) {
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
    return lb(a, b, h)
  }
  for(var c = xb(a), d = wb(a), e = d.length, g = 0;g < e;g++) {
    if(!b.call(h, d[g], c && c[g], a)) {
      return m
    }
  }
  return j
}
;function J(a, b) {
  this.r = {};
  this.j = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && f(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.Cc(a)
  }
}
s = J.prototype;
s.f = 0;
s.u = o("f");
s.H = function() {
  Ab(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.r[this.j[b]])
  }
  return a
};
s.da = function() {
  Ab(this);
  return this.j.concat()
};
s.U = function(a) {
  return Bb(this.r, a)
};
s.Wb = function(a) {
  for(var b = 0;b < this.j.length;b++) {
    var c = this.j[b];
    if(Bb(this.r, c) && this.r[c] == a) {
      return j
    }
  }
  return m
};
s.o = function(a, b) {
  if(this === a) {
    return j
  }
  if(this.f != a.u()) {
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
  this.r = {};
  this.f = this.j.length = 0
};
s.remove = function(a) {
  return Bb(this.r, a) ? (delete this.r[a], this.f--, this.j.length > 2 * this.f && Ab(this), j) : m
};
function Ab(a) {
  if(a.f != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      Bb(a.r, d) && (a.j[c++] = d);
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
  return Bb(this.r, a) ? this.r[a] : b
};
s.set = function(a, b) {
  Bb(this.r, a) || (this.f++, this.j.push(a));
  this.r[a] = b
};
s.Cc = function(a) {
  var b;
  a instanceof J ? (b = a.da(), a = a.H()) : (b = eb(a), a = db(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
s.K = function() {
  return new J(this)
};
function Db(a) {
  Ab(a);
  for(var b = {}, c = 0;c < a.j.length;c++) {
    var d = a.j[c];
    b[d] = a.r[d]
  }
  return b
}
function Bb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function K(a, b) {
  var c;
  a instanceof K ? (this.jb(b == k ? a.fa : b), Eb(this, a.ha), Fb(this, a.Sa), Gb(this, a.V), Hb(this, a.Aa), Ib(this, a.S), Jb(this, a.I.K()), Kb(this, a.Ia)) : a && (c = ("" + a).match(ab)) ? (this.jb(!!b), Eb(this, c[1] || "", j), Fb(this, c[2] || "", j), Gb(this, c[3] || "", j), Hb(this, c[4]), Ib(this, c[5] || "", j), Jb(this, c[6] || "", j), Kb(this, c[7] || "", j)) : (this.jb(!!b), this.I = new Lb(k, this, this.fa))
}
s = K.prototype;
s.ha = "";
s.Sa = "";
s.V = "";
s.Aa = k;
s.S = "";
s.Ia = "";
s.yf = m;
s.fa = m;
s.toString = function() {
  if(this.$) {
    return this.$
  }
  var a = [];
  this.ha && a.push(Mb(this.ha, Nb), ":");
  this.V && (a.push("//"), this.Sa && a.push(Mb(this.Sa, Nb), "@"), a.push(v(this.V) ? encodeURIComponent(this.V) : k), this.Aa != k && a.push(":", "" + this.Aa));
  this.S && (this.V && "/" != this.S.charAt(0) && a.push("/"), a.push(Mb(this.S, "/" == this.S.charAt(0) ? Ob : Pb)));
  var b = "" + this.I;
  b && a.push("?", b);
  this.Ia && a.push("#", Mb(this.Ia, Qb));
  return this.$ = a.join("")
};
s.K = function() {
  var a = this.ha, b = this.Sa, c = this.V, d = this.Aa, e = this.S, g = this.I.K(), i = this.Ia, l = new K(k, this.fa);
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
  delete a.$;
  a.ha = c ? b ? decodeURIComponent(b) : "" : b;
  a.ha && (a.ha = a.ha.replace(/:$/, ""))
}
function Fb(a, b, c) {
  Rb(a);
  delete a.$;
  a.Sa = c ? b ? decodeURIComponent(b) : "" : b
}
function Gb(a, b, c) {
  Rb(a);
  delete a.$;
  a.V = c ? b ? decodeURIComponent(b) : "" : b
}
function Hb(a, b) {
  Rb(a);
  delete a.$;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && f(Error("Bad port number " + b)), a.Aa = b) : a.Aa = k
}
function Ib(a, b, c) {
  Rb(a);
  delete a.$;
  a.S = c ? b ? decodeURIComponent(b) : "" : b
}
function Jb(a, b, c) {
  Rb(a);
  delete a.$;
  b instanceof Lb ? (a.I = b, a.I.Cd = a, a.I.jb(a.fa)) : (c || (b = Mb(b, Sb)), a.I = new Lb(b, a, a.fa))
}
function Kb(a, b, c) {
  Rb(a);
  delete a.$;
  a.Ia = c ? b ? decodeURIComponent(b) : "" : b
}
function Rb(a) {
  a.yf && f(Error("Tried to modify a read-only Uri"))
}
s.jb = function(a) {
  this.fa = a;
  this.I && this.I.jb(a);
  return this
};
function Tb(a) {
  return a instanceof K ? a.K() : new K(a, h)
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
  this.Cd = b || k;
  this.fa = !!c
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
s.u = function() {
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
s.Wb = function(a) {
  var b = this.H();
  return mb(b, a)
};
s.da = function() {
  Wb(this);
  for(var a = this.k.H(), b = this.k.da(), c = [], d = 0;d < b.length;d++) {
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
s.H = function(a) {
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
    for(var b = this.k.H(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      u(d) ? qb(a, d) : a.push(d)
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
  for(var a = [], b = 0, c = this.k.da(), d = 0;d < c.length;d++) {
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
  a.Cd && delete a.Cd.$
}
s.K = function() {
  var a = new Lb;
  this.Wa && (a.Wa = this.Wa);
  this.ja && (a.ja = this.ja);
  this.k && (a.k = this.k.K());
  return a
};
function Xb(a, b) {
  var c = "" + b;
  a.fa && (c = c.toLowerCase());
  return c
}
s.jb = function(a) {
  a && !this.fa && (Wb(this), Yb(this), yb(this.k, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.fa = a
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
s.Gc = m;
s.La = function(a, b, c, d, e, g) {
  x(a) ? this.ke = j : a && a.handleEvent && x(a.handleEvent) ? this.ke = m : f(Error("Invalid listener argument"));
  this.eb = a;
  this.Ce = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.fc = g;
  this.Gc = m;
  this.key = ++ac;
  this.Pa = m
};
s.handleEvent = function(a) {
  return this.ke ? this.eb.call(this.fc || this.src, a) : this.eb.handleEvent.call(this.eb, a)
};
var bc = !D || Ya(), cc = !D || Ya(), dc = D && !F("8");
!E || F("528");
La && F("1.9b") || D && F("8") || Ka && F("9.5") || E && F("528");
!La || F("8");
var ec = {ig:"click", ng:"dblclick", Hg:"mousedown", Lg:"mouseup", Kg:"mouseover", Jg:"mouseout", Ig:"mousemove", Vg:"selectstart", Cg:"keypress", Bg:"keydown", Dg:"keyup", gg:"blur", vg:"focus", og:"deactivate", wg:D ? "focusin" : "DOMFocusIn", xg:D ? "focusout" : "DOMFocusOut", hg:"change", Ug:"select", Wg:"submit", Ag:"input", Qg:"propertychange", sg:"dragstart", pg:"dragenter", rg:"dragover", qg:"dragleave", tg:"drop", $g:"touchstart", Zg:"touchmove", Yg:"touchend", Xg:"touchcancel", kg:"contextmenu", 
ug:"error", zg:"help", Eg:"load", Fg:"losecapture", Rg:"readystatechange", Sg:"resize", Tg:"scroll", bh:"unload", yg:"hashchange", Mg:"pagehide", Ng:"pageshow", Pg:"popstate", lg:"copy", Og:"paste", mg:"cut", dg:"beforecopy", eg:"beforecut", fg:"beforepaste", Gg:"message", jg:"connect", ah:E ? "webkitTransitionEnd" : Ka ? "oTransitionEnd" : "transitionend"};
function L() {
}
L.prototype.ba = m;
L.prototype.b = function() {
  this.ba || (this.ba = j, this.c())
};
L.prototype.c = function() {
  this.df && fc.apply(k, this.df)
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
s.Kb = j;
s.stopPropagation = function() {
  this.Oa = j
};
s.preventDefault = function() {
  this.Kb = m
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
s.ld = m;
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
  this.ld = Oa ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ka = a;
  delete this.Kb;
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
        if(i = n[g], i.eb == c && i.fc == e) {
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
    a.addEventListener ? (a == t || !a.Nd) && a.addEventListener(b, g, d) : a.attachEvent(b in oc ? oc[b] : oc[b] = "on" + b, g);
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
  mc[a].Gc = j;
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
        if(a[g].eb == c && a[g].capture == d && a[g].fc == e) {
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
  c.removeEventListener ? (c == t || !c.Nd) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in oc ? oc[d] : oc[d] = "on" + d, e);
  c = ka(c);
  e = M[d][g][c];
  if(nc[c]) {
    var i = nc[c];
    nb(i, b);
    0 == i.length && delete nc[c]
  }
  b.Pa = j;
  e.ve = j;
  vc(d, g, c, e);
  delete mc[a];
  return j
}
function vc(a, b, c, d) {
  if(!d.kc && d.ve) {
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
    a.kc ? a.kc++ : a.kc = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var n = a[l];
        n && !n.Pa && (g &= yc(n, e) !== m)
      }
    }finally {
      a.kc--, vc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function yc(a, b) {
  var c = a.handleEvent(b);
  a.Gc && uc(a.key);
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
        var p = m;
        if(0 == g.keyCode) {
          try {
            g.keyCode = -1;
            break a
          }catch(G) {
            p = j
          }
        }
        if(p || g.returnValue == h) {
          g.returnValue = j
        }
      }
    }
    p = new jc;
    p.La(g, this);
    g = j;
    try {
      if(l) {
        for(var q = [], w = p.currentTarget;w;w = w.parentNode) {
          q.push(w)
        }
        i = e[j];
        i.T = i.f;
        for(var A = q.length - 1;!p.Oa && 0 <= A && i.T;A--) {
          p.currentTarget = q[A], g &= xc(i, q[A], d, j, p)
        }
        if(n) {
          i = e[m];
          i.T = i.f;
          for(A = 0;!p.Oa && A < q.length && i.T;A++) {
            p.currentTarget = q[A], g &= xc(i, q[A], d, m, p)
          }
        }
      }else {
        g = yc(c, p)
      }
    }finally {
      q && (q.length = 0), p.b()
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
s.Nd = j;
s.mc = k;
s.qd = aa("mc");
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
      for(g = this;g;g = g.mc) {
        e.push(g)
      }
      g = c[j];
      g.T = g.f;
      for(var i = e.length - 1;!a.Oa && 0 <= i && g.T;i--) {
        a.currentTarget = e[i], d &= xc(g, e[i], a.type, j, a) && a.Kb != m
      }
    }
    if(m in c) {
      if(g = c[m], g.T = g.f, b) {
        for(i = 0;!a.Oa && i < e.length && g.T;i++) {
          a.currentTarget = e[i], d &= xc(g, e[i], a.type, m, a) && a.Kb != m
        }
      }else {
        for(e = this;!a.Oa && e && g.T;e = e.mc) {
          a.currentTarget = e, d &= xc(g, e, a.type, m, a) && a.Kb != m
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
  this.mc = k
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
  this.Ub = [];
  this.Id = a;
  this.Pd = b || k
}
s = Cc.prototype;
s.ta = m;
s.zb = m;
s.Fb = 0;
s.td = m;
s.$e = m;
s.Fc = 0;
s.cancel = function(a) {
  if(this.ta) {
    this.Jb instanceof Cc && this.Jb.cancel()
  }else {
    if(this.B) {
      var b = this.B;
      delete this.B;
      a ? b.cancel(a) : (b.Fc--, 0 >= b.Fc && b.cancel())
    }
    this.Id ? this.Id.call(this.Pd, this) : this.td = j;
    this.ta || this.xb(new Dc)
  }
};
s.Ld = function(a, b) {
  Ec(this, a, b);
  this.Fb--;
  0 == this.Fb && this.ta && Fc(this)
};
function Ec(a, b, c) {
  a.ta = j;
  a.Jb = c;
  a.zb = !b;
  Fc(a)
}
function Hc(a) {
  a.ta && (a.td || f(new Ic), a.td = m)
}
s.aa = function(a) {
  Hc(this);
  Ec(this, j, a)
};
s.xb = function(a) {
  Hc(this);
  Ec(this, m, a)
};
function Jc(a, b) {
  Kc(a, b, k, h)
}
function Lc(a, b) {
  Kc(a, k, b, h)
}
function Kc(a, b, c, d) {
  a.Ub.push([b, c, d]);
  a.ta && Fc(a)
}
function Mc(a, b) {
  Kc(a, b, b, h)
}
function Nc(a) {
  return kb(a.Ub, function(a) {
    return x(a[1])
  })
}
function Fc(a) {
  a.Bd && a.ta && Nc(a) && (t.clearTimeout(a.Bd), delete a.Bd);
  a.B && (a.B.Fc--, delete a.B);
  for(var b = a.Jb, c = m, d = m;a.Ub.length && 0 == a.Fb;) {
    var e = a.Ub.shift(), g = e[0], i = e[1], e = e[2];
    if(g = a.zb ? i : g) {
      try {
        var l = g.call(e || a.Pd, b);
        ga(l) && (a.zb = a.zb && (l == b || l instanceof Error), a.Jb = b = l);
        b instanceof Cc && (d = j, a.Fb++)
      }catch(n) {
        b = n, a.zb = j, Nc(a) || (c = j)
      }
    }
  }
  a.Jb = b;
  d && a.Fb && (Kc(b, y(a.Ld, a, j), y(a.Ld, a, m)), b.$e = j);
  c && (a.Bd = t.setTimeout(function() {
    ga(b.message) && b.stack && (b.message += "\n" + b.stack);
    f(b)
  }, 0))
}
function Oc(a) {
  var b = new Cc;
  b.aa(a);
  return b
}
function Pc(a) {
  var b = new Cc;
  b.xb(a);
  return b
}
function Ic() {
  H.call(this)
}
B(Ic, H);
Ic.prototype.message = "Already called";
function Dc() {
  H.call(this)
}
B(Dc, H);
Dc.prototype.message = "Deferred was cancelled";
function Qc(a) {
  this.F = a;
  this.Xb = [];
  this.Sd = [];
  this.Ze = y(this.Yf, this)
}
Qc.prototype.yd = k;
function Rc(a, b, c, d) {
  a.Xb.push([b, c, d]);
  a.yd == k && (a.yd = a.F.setTimeout(a.Ze, 0))
}
Qc.prototype.Yf = function() {
  this.yd = k;
  var a = this.Xb;
  this.Xb = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], e = c[1], c = c[2];
    try {
      d.apply(e, c)
    }catch(g) {
      this.F.setTimeout(function() {
        f(g)
      }, 0)
    }
  }
  if(0 == this.Xb.length) {
    a = this.Sd;
    this.Sd = [];
    for(b = 0;b < a.length;b++) {
      a[b].aa(k)
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
  this.pc = h
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
          c.push(e), e = b[g], Xc(a, a.pc ? a.pc.call(b, "" + g, e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" != typeof e && (c.push(d), Yc(g, c), c.push(":"), Xc(a, a.pc ? a.pc.call(b, g, e) : e, c), d = ","))
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
        if(Tc(a.n)) {
          a.n(b, c)
        }else {
          if(Tc(a.Ve)) {
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
bd.prototype.K = function() {
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
s.K = function() {
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
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function fd(a, b) {
  var c = ed(a), d = sb(arguments, 1), e;
  e = c;
  for(var g = 0, i = 0;i < d.length;i++) {
    mb(e, d[i]) || (e.push(d[i]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function gd(a, b) {
  var c = ed(a), d = sb(arguments, 1), e;
  e = c;
  for(var g = 0, i = 0;i < e.length;i++) {
    mb(d, e[i]) && (rb(e, i--, 1), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
;var hd = !D || Ya();
!La && !D || D && Ya() || La && F("1.9.1");
var id = D && !F("9");
function jd(a) {
  return a ? new kd(ld(a)) : dd || (dd = new kd)
}
function Q(a) {
  return v(a) ? document.getElementById(a) : a
}
function md(a, b) {
  cb(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in nd ? a.setAttribute(nd[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var nd = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function od() {
  var a = pd.M.parentWindow || pd.M.defaultView || window, b = a.document;
  if(E && !F("500") && !Ma) {
    "undefined" == typeof a.innerHeight && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new cd(a.innerWidth, b)
  }
  a = "CSS1Compat" == b.compatMode ? b.documentElement : b.body;
  return new cd(a.clientWidth, a.clientHeight)
}
function qd(a, b, c) {
  return rd(document, arguments)
}
function rd(a, b) {
  var c = b[0], d = b[1];
  if(!hd && d && (d.name || d.type)) {
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
  d && (v(d) ? c.className = d : u(d) ? fd.apply(k, [c].concat(d)) : md(c, d));
  2 < b.length && sd(a, c, b, 2);
  return c
}
function sd(a, b, c, d) {
  function e(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && 0 < g.nodeType) ? ib(td(g) ? pb(g) : g, e) : e(g)
  }
}
function ud(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function vd(a, b) {
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
function ld(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
var wd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, xd = {IMG:" ", BR:"\n"};
function yd(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, "number" == typeof a && 0 <= a && 32768 > a) : m
}
function zd(a) {
  var b = [];
  Ad(a, b, m);
  return b.join("")
}
function Ad(a, b, c) {
  if(!(a.nodeName in wd)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in xd) {
        b.push(xd[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Ad(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function td(a) {
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
function kd(a) {
  this.M = a || t.document || document
}
s = kd.prototype;
s.Xa = jd;
s.g = function(a) {
  return v(a) ? this.M.getElementById(a) : a
};
s.q = function(a, b, c) {
  return rd(this.M, arguments)
};
s.createElement = function(a) {
  return this.M.createElement(a)
};
s.createTextNode = function(a) {
  return this.M.createTextNode(a)
};
s.appendChild = function(a, b) {
  a.appendChild(b)
};
s.append = function(a, b) {
  sd(ld(a), a, arguments, 1)
};
s.contains = vd;
function Bd(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
var Cd = La ? "MozUserSelect" : E ? "WebkitUserSelect" : k;
function Dd(a) {
  this.de = a;
  this.j = []
}
B(Dd, L);
var Ed = [];
function R(a, b, c, d) {
  u(c) || (Ed[0] = c, c = Ed);
  for(var e = 0;e < c.length;e++) {
    a.j.push(N(b, c[e], d || a, m, a.de || a))
  }
  return a
}
function Fd(a, b, c, d, e, g) {
  if(u(c)) {
    for(var i = 0;i < c.length;i++) {
      Fd(a, b, c[i], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.de || a;
      e = !!e;
      if(b = tc(b, c, e)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].Pa && b[c].eb == d && b[c].capture == e && b[c].fc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, uc(b), nb(a.j, b))
  }
  return a
}
Dd.prototype.nd = function() {
  ib(this.j, uc);
  this.j.length = 0
};
Dd.prototype.c = function() {
  Dd.e.c.call(this);
  this.nd()
};
Dd.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Gd() {
}
ea(Gd);
Gd.prototype.Df = 0;
Gd.Ya();
function Hd(a) {
  this.ra = a || jd();
  this.Lb = Id
}
B(Hd, Ac);
Hd.prototype.wf = Gd.Ya();
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
s.ea = k;
s.G = m;
s.l = k;
s.Lb = k;
s.B = k;
s.qa = k;
s.tb = k;
s.Zf = m;
function Kd(a) {
  return a.ea || (a.ea = ":" + (a.wf.Df++).toString(36))
}
s.g = o("l");
function Ld(a) {
  return a.Za || (a.Za = new Dd(a))
}
s.getParent = o("B");
s.qd = function(a) {
  this.B && this.B != a && f(Error("Method not supported"));
  Hd.e.qd.call(this, a)
};
s.Xa = o("ra");
s.q = function() {
  this.l = this.ra.createElement("div")
};
function Md(a, b) {
  a.G && f(Error("Component already rendered"));
  a.l || a.q();
  b ? b.insertBefore(a.l, k) : a.ra.M.body.appendChild(a.l);
  (!a.B || a.B.G) && a.sa()
}
s.sa = function() {
  this.G = j;
  Nd(this, function(a) {
    !a.G && a.g() && a.sa()
  })
};
s.yb = function() {
  Nd(this, function(a) {
    a.G && a.yb()
  });
  this.Za && this.Za.nd();
  this.G = m
};
s.c = function() {
  Hd.e.c.call(this);
  this.G && this.yb();
  this.Za && (this.Za.b(), delete this.Za);
  Nd(this, function(a) {
    a.b()
  });
  !this.Zf && this.l && ud(this.l);
  this.B = this.l = this.tb = this.qa = k
};
s.lb = function(a) {
  this.G && f(Error("Component already rendered"));
  this.Lb = a
};
function Nd(a, b) {
  a.qa && ib(a.qa, b, h)
}
s.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : Kd(a), a = this.tb && c ? (c in this.tb ? this.tb[c] : h) || k : k;
    if(c && a) {
      var d = this.tb;
      c in d && delete d[c];
      nb(this.qa, a);
      b && (a.yb(), a.l && ud(a.l));
      c = a;
      c == k && f(Error("Unable to set parent component"));
      c.B = k;
      Hd.e.qd.call(c, k)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function Od() {
}
var Pd;
ea(Od);
s = Od.prototype;
s.ac = function() {
};
s.q = function(a) {
  var b = a.Xa().q("div", Qd(this, a).join(" "), a.ub);
  this.pd(a, b);
  return b
};
s.vb = function(a, b, c) {
  if(a = a.g ? a.g() : a) {
    if(D && !F("7")) {
      var d = Rd(ed(a), b);
      d.push(b);
      pa(c ? fd : gd, a).apply(k, d)
    }else {
      c ? fd(a, b) : gd(a, b)
    }
  }
};
s.ge = function(a) {
  if(a.Lb == k) {
    var b;
    a: {
      b = a.G ? a.l : a.ra.M.body;
      var c = ld(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (b = c.defaultView.getComputedStyle(b, k))) {
        b = b.direction || b.getPropertyValue("direction");
        break a
      }
      b = ""
    }
    a.Lb = "rtl" == (b || ((a.G ? a.l : a.ra.M.body).currentStyle ? (a.G ? a.l : a.ra.M.body).currentStyle.direction : k) || (a.G ? a.l : a.ra.M.body).style && (a.G ? a.l : a.ra.M.body).style.direction)
  }
  a.Lb && this.lb(a.g(), j);
  a.isEnabled() && this.Nb(a, a.Ta)
};
s.pd = function(a, b) {
  a.isEnabled() || this.P(b, 1, j);
  a.d & 8 && this.P(b, 8, j);
  a.J & 16 && this.P(b, 16, !!(a.d & 16));
  a.J & 64 && this.P(b, 64, !!(a.d & 64))
};
s.rc = function(a, b) {
  var c = !b, d = D || Ka ? a.getElementsByTagName("*") : k;
  if(Cd) {
    if(c = c ? "none" : "", a.style[Cd] = c, d) {
      for(var e = 0, g;g = d[e];e++) {
        g.style[Cd] = c
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
  this.vb(a, this.ua() + "-rtl", b)
};
s.je = function(a) {
  var b;
  return a.J & 32 && (b = a.Ja()) ? yd(b) : m
};
s.Nb = function(a, b) {
  var c;
  if(a.J & 32 && (c = a.Ja())) {
    if(!b && a.d & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.d & 32 && a.Xd()
    }
    yd(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
s.sd = function(a, b) {
  a.style.display = b ? "" : "none"
};
s.N = function(a, b, c) {
  var d = a.g();
  if(d) {
    var e = Sd(this, b);
    e && this.vb(a, e, c);
    this.P(d, b, c)
  }
};
s.P = function(a, b, c) {
  Pd || (Pd = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Pd[b]) && a.setAttribute("aria-" + b, c)
};
s.Ja = function(a) {
  return a.g()
};
s.ua = r("goog-control");
function Qd(a, b) {
  var c = a.ua(), d = [c], e = a.ua();
  e != c && d.push(e);
  c = b.d;
  for(e = [];c;) {
    var g = c & -c;
    e.push(Sd(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.ca) && d.push.apply(d, c);
  D && !F("7") && d.push.apply(d, Rd(d));
  return d
}
function Rd(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  ib([], function(d) {
    lb(d, pa(mb, a)) && (!b || mb(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Sd(a, b) {
  if(!a.Jd) {
    var c = a.ua();
    a.Jd = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Jd[b]
}
;function Td(a, b) {
  a || f(Error("Invalid class name " + a));
  x(b) || f(Error("Invalid decorator function " + b))
}
var Ud = {};
function Wd(a, b, c, d, e) {
  if(!D && (!E || !F("525"))) {
    return j
  }
  if(Oa && e) {
    return Xd(a)
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
  return Xd(a)
}
function Xd(a) {
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
;function Yd(a, b) {
  a && Zd(this, a, b)
}
B(Yd, Ac);
s = Yd.prototype;
s.l = k;
s.hc = k;
s.Yc = k;
s.ic = k;
s.ya = -1;
s.xa = -1;
var $d = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, ae = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, be = {61:187, 
59:186}, ce = D || E && F("525");
s = Yd.prototype;
s.sf = function(a) {
  if(E && (17 == this.ya && !a.ctrlKey || 18 == this.ya && !a.altKey)) {
    this.xa = this.ya = -1
  }
  ce && !Wd(a.keyCode, this.ya, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.xa = La && a.keyCode in be ? be[a.keyCode] : a.keyCode
};
s.uf = function() {
  this.xa = this.ya = -1
};
s.handleEvent = function(a) {
  var b = a.ka, c, d;
  D && "keypress" == a.type ? (c = this.xa, d = 13 != c && 27 != c ? b.keyCode : 0) : E && "keypress" == a.type ? (c = this.xa, d = 0 <= b.charCode && 63232 > b.charCode && Xd(c) ? b.charCode : 0) : Ka ? (c = this.xa, d = Xd(c) ? b.keyCode : 0) : (c = b.keyCode || this.xa, d = b.charCode || 0, Oa && 63 == d && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in $d ? e = $d[c] : 25 == c && a.shiftKey && (e = 9) : g && g in ae && (e = ae[g]);
  a = e == this.ya;
  this.ya = e;
  b = new de(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.b()
  }
};
s.g = o("l");
function Zd(a, b, c) {
  a.ic && a.detach();
  a.l = b;
  a.hc = N(a.l, "keypress", a, c);
  a.Yc = N(a.l, "keydown", a.sf, c, a);
  a.ic = N(a.l, "keyup", a.uf, c, a)
}
s.detach = function() {
  this.hc && (uc(this.hc), uc(this.Yc), uc(this.ic), this.ic = this.Yc = this.hc = k);
  this.l = k;
  this.xa = this.ya = -1
};
s.c = function() {
  Yd.e.c.call(this);
  this.detach()
};
function de(a, b, c, d) {
  d && this.La(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
B(de, jc);
function S(a, b, c) {
  Hd.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ka(b);
      if(d = Ud[d]) {
        break
      }
      b = b.e ? b.e.constructor : k
    }
    b = d ? x(d.Ya) ? d.Ya() : new d : k
  }
  this.v = b;
  this.ub = a
}
B(S, Hd);
s = S.prototype;
s.ub = k;
s.d = 0;
s.J = 39;
s.Ec = 255;
s.Qf = 0;
s.Ta = j;
s.ca = k;
s.Tc = j;
s.Dc = m;
s.Gf = k;
s.Ja = function() {
  return this.v.Ja(this)
};
function ee(a, b) {
  b && (a.ca ? mb(a.ca, b) || a.ca.push(b) : a.ca = [b], a.v.vb(a, b, j))
}
s.vb = function(a, b) {
  b ? ee(this, a) : a && this.ca && (nb(this.ca, a), 0 == this.ca.length && (this.ca = k), this.v.vb(this, a, m))
};
s.q = function() {
  var a = this.v.q(this);
  this.l = a;
  var b = this.Gf || this.v.ac();
  b && (a.setAttribute("role", b), a.eh = b);
  this.Dc || this.v.rc(a, m);
  this.Ta || this.v.sd(a, m)
};
s.sa = function() {
  S.e.sa.call(this);
  this.v.ge(this);
  if(this.J & -2 && (this.Tc && fe(this, j), this.J & 32)) {
    var a = this.Ja();
    if(a) {
      var b = this.bb || (this.bb = new Yd);
      Zd(b, a);
      R(R(R(Ld(this), b, "key", this.tf), a, "focus", this.rf), a, "blur", this.Xd)
    }
  }
};
function fe(a, b) {
  var c = Ld(a), d = a.g();
  b ? (R(R(R(R(c, d, "mouseover", a.be), d, "mousedown", a.$d), d, "mouseup", a.ce), d, "mouseout", a.ae), D && R(c, d, "dblclick", a.Zd)) : (Fd(Fd(Fd(Fd(c, d, "mouseover", a.be), d, "mousedown", a.$d), d, "mouseup", a.ce), d, "mouseout", a.ae), D && Fd(c, d, "dblclick", a.Zd))
}
s.yb = function() {
  S.e.yb.call(this);
  this.bb && this.bb.detach();
  this.Ta && this.isEnabled() && this.v.Nb(this, m)
};
s.c = function() {
  S.e.c.call(this);
  this.bb && (this.bb.b(), delete this.bb);
  delete this.v;
  this.ca = this.ub = k
};
function ge(a) {
  a = a.ub;
  if(!a) {
    return""
  }
  if(!v(a)) {
    if(u(a)) {
      a = jb(a, zd).join("")
    }else {
      if(id && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Ad(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      id || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
s.lb = function(a) {
  S.e.lb.call(this, a);
  var b = this.g();
  b && this.v.lb(b, a)
};
s.rc = function(a) {
  this.Dc = a;
  var b = this.g();
  b && this.v.rc(b, a)
};
s.sd = function(a, b) {
  if(b || this.Ta != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.g();
    c && this.v.sd(c, a);
    this.isEnabled() && this.v.Nb(this, a);
    this.Ta = a;
    return j
  }
  return m
};
s.isEnabled = function() {
  return!(this.d & 1)
};
s.sc = function(a) {
  var b = this.getParent();
  if((!b || "function" != typeof b.isEnabled || b.isEnabled()) && he(this, 1, !a)) {
    a || (this.setActive(m), ie(this, m)), this.Ta && this.v.Nb(this, a), this.N(1, !a)
  }
};
function ie(a, b) {
  he(a, 2, b) && a.N(2, b)
}
s.he = function() {
  return!!(this.d & 4)
};
s.setActive = function(a) {
  he(this, 4, a) && this.N(4, a)
};
s.N = function(a, b) {
  this.J & a && b != !!(this.d & a) && (this.v.N(this, a, b), this.d = b ? this.d | a : this.d & ~a)
};
function T(a, b) {
  return!!(a.Ec & b) && !!(a.J & b)
}
function he(a, b, c) {
  return!!(a.J & b) && !!(a.d & b) != c && (!(a.Qf & b) || a.dispatchEvent(Jd(b, c))) && !a.ba
}
s.be = function(a) {
  (!a.relatedTarget || !vd(this.g(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && T(this, 2) && ie(this, j)
};
s.ae = function(a) {
  if((!a.relatedTarget || !vd(this.g(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    T(this, 4) && this.setActive(m), T(this, 2) && ie(this, m)
  }
};
s.$d = function(a) {
  if(this.isEnabled() && (T(this, 2) && ie(this, j), lc(a) && (!E || !Oa || !a.ctrlKey))) {
    T(this, 4) && this.setActive(j), this.v.je(this) && this.Ja().focus()
  }
  !this.Dc && lc(a) && (!E || !Oa || !a.ctrlKey) && a.preventDefault()
};
s.ce = function(a) {
  this.isEnabled() && (T(this, 2) && ie(this, j), this.he() && this.Gb(a) && T(this, 4) && this.setActive(m))
};
s.Zd = function(a) {
  this.isEnabled() && this.Gb(a)
};
s.Gb = function(a) {
  if(T(this, 16)) {
    var b = !(this.d & 16);
    he(this, 16, b) && this.N(16, b)
  }
  T(this, 8) && he(this, 8, j) && this.N(8, j);
  T(this, 64) && (b = !(this.d & 64), he(this, 64, b) && this.N(64, b));
  b = new gc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.ld = a.ld);
  return this.dispatchEvent(b)
};
s.rf = function() {
  T(this, 32) && he(this, 32, j) && this.N(32, j)
};
s.Xd = function() {
  T(this, 4) && this.setActive(m);
  T(this, 32) && he(this, 32, m) && this.N(32, m)
};
s.tf = function(a) {
  return this.Ta && this.isEnabled() && this.Sc(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
s.Sc = function(a) {
  return 13 == a.keyCode && this.Gb(a)
};
x(S) || f(Error("Invalid component class " + S));
x(Od) || f(Error("Invalid renderer class " + Od));
var je = ka(S);
Ud[je] = Od;
Td("goog-control", function() {
  return new S(k)
});
function ke() {
}
B(ke, Od);
ea(ke);
s = ke.prototype;
s.ac = r("button");
s.P = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : ke.e.P.call(this, a, b, c)
};
s.q = function(a) {
  var b = ke.e.q.call(this, a), c = a.cc();
  c && this.rd(b, c);
  (c = a.dc()) && this.tc(b, c);
  a.J & 16 && this.P(b, 16, !!(a.d & 16));
  return b
};
s.dc = da;
s.tc = da;
s.cc = function(a) {
  return a.title
};
s.rd = function(a, b) {
  a && (a.title = b || "")
};
s.ua = r("goog-button");
function le() {
}
B(le, ke);
ea(le);
s = le.prototype;
s.ac = function() {
};
s.q = function(a) {
  a.G && m != a.Tc && fe(a, m);
  a.Tc = m;
  a.Ec &= -256;
  a.G && a.d & 32 && f(Error("Component already rendered"));
  a.d & 32 && a.N(32, m);
  a.J &= -33;
  return a.Xa().q("button", {"class":Qd(this, a).join(" "), disabled:!a.isEnabled(), title:a.cc() || "", value:a.dc() || ""}, ge(a) || "")
};
s.ge = function(a) {
  R(Ld(a), a.g(), "click", a.Gb)
};
s.rc = da;
s.lb = da;
s.je = function(a) {
  return a.isEnabled()
};
s.Nb = da;
s.N = function(a, b, c) {
  le.e.N.call(this, a, b, c);
  if((a = a.g()) && 1 == b) {
    a.disabled = c
  }
};
s.dc = function(a) {
  return a.value
};
s.tc = function(a, b) {
  a && (a.value = b)
};
s.P = da;
function me(a, b, c) {
  S.call(this, a, b || le.Ya(), c)
}
B(me, S);
s = me.prototype;
s.dc = o("Re");
s.tc = function(a) {
  this.Re = a;
  this.v.tc(this.g(), a)
};
s.cc = o("Oe");
s.rd = function(a) {
  this.Oe = a;
  this.v.rd(this.g(), a)
};
s.c = function() {
  me.e.c.call(this);
  delete this.Re;
  delete this.Oe
};
s.sa = function() {
  me.e.sa.call(this);
  if(this.J & 32) {
    var a = this.Ja();
    a && R(Ld(this), a, "keyup", this.Sc)
  }
};
s.Sc = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Gb(a) : 32 == a.keyCode
};
Td("goog-button", function() {
  return new me(k)
});
function ne() {
}
B(ne, ke);
ea(ne);
ne.prototype.q = function(a) {
  var b = {"class":"goog-inline-block " + Qd(this, a).join(" "), title:a.cc() || ""}, b = a.Xa().q("div", b, oe(this, a.ub, a.Xa()));
  this.pd(a, b);
  return b
};
ne.prototype.ac = r("button");
ne.prototype.pd = function(a, b) {
  a.isEnabled() || this.P(b, 1, j);
  a.d & 8 && this.P(b, 8, j);
  a.J & 16 && this.P(b, 16, j);
  a.d & 64 && this.P(b, 64, j)
};
function oe(a, b, c) {
  return c.q("div", "goog-inline-block " + (a.ua() + "-outer-box"), c.q("div", "goog-inline-block " + (a.ua() + "-inner-box"), b))
}
ne.prototype.ua = r("goog-custom-button");
function pe(a, b, c) {
  me.call(this, a, b || ne.Ya(), c)
}
B(pe, me);
Td("goog-custom-button", function() {
  return new pe(k)
});
function qe() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ z()).toString(36)
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
  this.Ua = a;
  this.Qa = b
}
ze.prototype.o = function(a) {
  return a instanceof ze && this.Ua == a.Ua && this.Qa.join(",") == a.Qa
};
ze.prototype.n = function(a, b) {
  a.push("new SACK(", "" + this.Ua, ", ");
  O(this.Qa, a, b);
  a.push(")")
};
function Ae() {
  this.R = new J
}
s = Ae.prototype;
s.Ha = -1;
s.O = 0;
s.append = function(a) {
  var b = we(a);
  this.R.set(this.Ha + 1, [a, b]);
  this.Ha += 1;
  this.O += b
};
s.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
s.n = function(a) {
  a.push("<Queue with ", "" + this.R.u(), " item(s), counter=#", "" + this.Ha, ", size=", "" + this.O, ">")
};
function Be(a) {
  a = a.R.da();
  tb(a);
  return a
}
function Ce() {
  this.Ga = new J
}
Ce.prototype.Na = -1;
Ce.prototype.O = 0;
function De(a) {
  var b = a.Ga.da();
  tb(b);
  return new ze(a.Na, b)
}
var Ee = {};
function Fe(a, b) {
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
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', C(c), '">'), Fe(a, b[c]), a.push("</property>"))
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
  this.r = new J;
  a && this.Cc(a)
}
function Se(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ka(a) : b.substr(0, 1) + a
}
s = Re.prototype;
s.u = function() {
  return this.r.u()
};
s.add = function(a) {
  this.r.set(Se(a), a)
};
s.Cc = function(a) {
  for(var a = wb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
s.nd = function(a) {
  for(var a = wb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
s.remove = function(a) {
  return this.r.remove(Se(a))
};
s.clear = function() {
  this.r.clear()
};
s.Ma = function() {
  return this.r.Ma()
};
s.contains = function(a) {
  return this.r.U(Se(a))
};
s.H = function() {
  return this.r.H()
};
s.K = function() {
  return new Re(this)
};
s.o = function(a) {
  return this.u() == vb(a) && Te(this, a)
};
function Te(a, b) {
  var c = vb(b);
  if(a.u() > c) {
    return m
  }
  !(b instanceof Re) && 5 < c && (b = new Re(b));
  return zb(a, function(a) {
    if("function" == typeof b.contains) {
      a = b.contains(a)
    }else {
      if("function" == typeof b.Wb) {
        a = b.Wb(a)
      }else {
        if(ha(b) || v(b)) {
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
Ye.prototype.Qc = k;
Ye.prototype.Pc = k;
var Ze = 0;
Ye.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || Ze++;
  this.Ne = d || z();
  this.X = a;
  this.te = b;
  this.pe = c;
  delete this.Qc;
  delete this.Pc
};
Ye.prototype.kb = aa("X");
function $e(a) {
  this.Cf = a
}
$e.prototype.B = k;
$e.prototype.X = k;
$e.prototype.qa = k;
$e.prototype.Bb = k;
function U(a, b) {
  this.name = a;
  this.value = b
}
U.prototype.toString = o("name");
var af = new U("SHOUT", 1200), bf = new U("SEVERE", 1E3), cf = new U("WARNING", 900), df = new U("INFO", 800), ef = new U("CONFIG", 700), ff = new U("FINE", 500), gf = new U("FINEST", 300), hf = new U("ALL", 0), jf = [new U("OFF", Infinity), af, bf, cf, df, ef, ff, new U("FINER", 400), gf, hf], kf = k;
function lf(a) {
  if(!kf) {
    kf = {};
    for(var b = 0, c;c = jf[b];b++) {
      kf[c.value] = c, kf[c.name] = c
    }
  }
  return kf[a] || k
}
s = $e.prototype;
s.getParent = o("B");
s.kb = aa("X");
function mf(a) {
  if(a.X) {
    return a.X
  }
  if(a.B) {
    return mf(a.B)
  }
  $a("Root logger has no level set.");
  return k
}
s.log = function(a, b, c) {
  if(a.value >= mf(this).value) {
    a = this.qf(a, b, c);
    b = "log:" + a.te;
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.Bb) {
        for(var e = 0, g = h;g = c.Bb[e];e++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
s.qf = function(a, b, c) {
  var d = new Ye(a, "" + b, this.Cf);
  if(c) {
    d.Qc = c;
    var e;
    var g = arguments.callee.caller;
    try {
      var i;
      var l = ca("window.location.href");
      if(v(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var n, p, G = m;
        try {
          n = c.lineNumber || c.dh || "Not available"
        }catch(q) {
          n = "Not available", G = j
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || l
        }catch(w) {
          p = "Not available", G = j
        }
        i = G || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:p, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + C(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + C(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + C(Ue(g) + "-> ")
    }catch(A) {
      e = "Exception trying to expose exception! You win, we lose. " + A
    }
    d.Pc = e
  }
  return d
};
function V(a, b) {
  a.log(bf, b, h)
}
function W(a, b) {
  a.log(cf, b, h)
}
s.info = function(a, b) {
  this.log(df, a, b)
};
function X(a, b) {
  a.log(ff, b, h)
}
function Y(a, b) {
  a.log(gf, b, h)
}
var nf = {}, of = k;
function pf() {
  of || (of = new $e(""), nf[""] = of, of.kb(ef))
}
function qf() {
  pf();
  return of
}
function Z(a) {
  pf();
  var b;
  if(!(b = nf[a])) {
    b = new $e(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Z(a.substr(0, c));
    c.qa || (c.qa = {});
    c.qa[d] = b;
    b.B = c;
    nf[a] = b
  }
  return b
}
;function rf(a, b) {
  Hd.call(this, b);
  this.nf = a;
  this.Oc = new Dd(this);
  this.Zb = new J
}
B(rf, Hd);
s = rf.prototype;
s.a = Z("goog.ui.media.FlashObject");
s.ag = "window";
s.Gd = "#000000";
s.Xe = "sameDomain";
function sf(a, b, c) {
  a.Dd = v(b) ? b : Math.round(b) + "px";
  a.Uc = v(c) ? c : Math.round(c) + "px";
  a.g() && (b = a.g() ? a.g().firstChild : k, c = a.Dd, a = a.Uc, c instanceof cd ? (a = c.height, c = c.width) : a == h && f(Error("missing height argument")), b.style.width = Bd(c), b.style.height = Bd(a))
}
s.sa = function() {
  rf.e.sa.call(this);
  var a = this.g(), b;
  b = D ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = D ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = qa(c, this.ag), d = this.Zb.da(), e = this.Zb.H(), g = [], i = 0;i < d.length;i++) {
    var l = ta(d[i]), n = ta(e[i]);
    g.push(l + "=" + n)
  }
  b = qa(b, Kd(this), Kd(this), "goog-ui-media-flash-object", C(this.nf), C(g.join("&")), this.Gd, this.Xe, c);
  a.innerHTML = b;
  this.Dd && this.Uc && sf(this, this.Dd, this.Uc);
  R(this.Oc, this.g(), db(ec), hc)
};
s.q = function() {
  this.Ge != k && !(0 <= Ba(Qe, this.Ge)) && (W(this.a, "Required flash version not found:" + this.Ge), f(Error("Method not supported")));
  var a = this.Xa().createElement("div");
  a.className = "goog-ui-media-flash";
  this.l = a
};
s.c = function() {
  rf.e.c.call(this);
  this.Zb = k;
  this.Oc.b();
  this.Oc = k
};
function tf(a) {
  H.call(this, a)
}
B(tf, H);
tf.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function uf(a, b, c) {
  function d() {
    e && delete t.__loadFlashObject_callbacks[e]
  }
  var e;
  if(La && !F("1.8.1.20")) {
    return Pc(new tf("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Ba(Qe, "9"))) {
    return Pc(new tf("Need Flash Player 9+; had " + (Qe ? Qe : "none")))
  }
  var g;
  e = "_" + qe();
  var i = new Cc(d);
  t.__loadFlashObject_callbacks[e] = function() {
    a.setTimeout(function() {
      d();
      i.aa(Q(g))
    }, 0)
  };
  b.Zb.set("onloadcallback", '__loadFlashObject_callbacks["' + e + '"]()');
  g = Kd(b);
  Md(b, c);
  return i
}
function vf(a, b, c) {
  var d = uf(a, b, c), e = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  Mc(d, function(b) {
    a.clearTimeout(e);
    return b
  });
  return d
}
;function wf(a, b) {
  this.ea = "_" + qe();
  this.xc = a;
  this.Ba = b;
  this.Fa = a.Fa
}
B(wf, L);
s = wf.prototype;
s.fb = j;
s.Kc = m;
s.a = Z("cw.net.FlashSocket");
s.n = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.ea);
  a.push("'>")
};
function xf(a, b, c) {
  "frames" == b ? (a = a.Ba, yf(a.D), zf(a.D, c)) : "stillreceiving" == b ? (c = a.Ba, Y(c.a, "onstillreceiving"), yf(c.D)) : "connect" == b ? (c = a.Ba, c.a.info("onconnect"), yf(c.D), a = c.rb, c.rb = k, a.length && (Y(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.uc.Sb(a))) : "close" == b ? (a.fb = m, a.b()) : "ioerror" == b ? (a.fb = m, b = a.Ba, W(b.a, "onioerror: " + P(c)), Af(b.D, m), a.b()) : "securityerror" == b ? (a.fb = m, b = a.Ba, W(b.a, "onsecurityerror: " + P(c)), 
  Af(b.D, m), a.b()) : f(Error("bad event: " + b))
}
function Bf(a) {
  a.Kc = j;
  a.fb = m;
  a.b()
}
s.Ic = function(a, b) {
  try {
    var c = this.Fa.CallFunction(Ge("__FC_connect", this.ea, a, b, "<int32/>\n"))
  }catch(d) {
    return V(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), Bf(this)
  }
  '"OK"' != c && f(Error("__FC_connect failed? ret: " + c))
};
s.Sb = function(a) {
  try {
    var b = this.Fa.CallFunction(Ge("__FC_writeFrames", this.ea, a))
  }catch(c) {
    return V(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), Bf(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (W(this.a, "Flash no longer knows of " + this.ea + "; disposing."), this.b()) : f(Error("__FC_writeFrames failed? ret: " + b)))
};
s.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.fb);
  wf.e.c.call(this);
  var a = this.Fa;
  delete this.Fa;
  if(this.fb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(Ge("__FC_close", this.ea)))
    }catch(b) {
      V(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Kc = j
    }
  }
  if(this.Kc) {
    a = this.Ba, W(a.a, "oncrash"), Af(a.D, j)
  }else {
    this.Ba.onclose()
  }
  delete this.Ba;
  delete this.xc.$a[this.ea]
};
function Cf(a, b) {
  this.A = a;
  this.Fa = b;
  this.$a = {};
  this.Hc = "__FST_" + qe();
  t[this.Hc] = y(this.gf, this);
  var c = b.CallFunction(Ge("__FC_setCallbackFunc", this.Hc));
  '"OK"' != c && f(Error("__FC_setCallbackFunc failed? ret: " + c))
}
B(Cf, L);
s = Cf.prototype;
s.a = Z("cw.net.FlashSocketTracker");
s.n = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  O(this.$a, a, b);
  a.push(">")
};
s.Lc = function(a) {
  a = new wf(this, a);
  return this.$a[a.ea] = a
};
s.ef = function(a, b, c, d) {
  var e = this.$a[a];
  e ? "frames" == b && d ? (xf(e, "ioerror", "FlashConnector hadError while handling data."), e.b()) : xf(e, b, c) : W(this.a, "Cannot dispatch because we have no instance: " + P([a, b, c, d]))
};
s.gf = function(a, b, c, d) {
  try {
    Rc(this.A, this.ef, this, [a, b, c, d])
  }catch(e) {
    t.window.setTimeout(function() {
      f(e)
    }, 0)
  }
};
s.c = function() {
  Cf.e.c.call(this);
  for(var a = db(this.$a);a.length;) {
    a.pop().b()
  }
  delete this.$a;
  delete this.Fa;
  t[this.Hc] = h
};
function Df(a) {
  this.D = a;
  this.rb = []
}
B(Df, L);
s = Df.prototype;
s.a = Z("cw.net.FlashSocketConduit");
s.Sb = function(a) {
  this.rb ? (Y(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.rb.push.apply(this.rb, a)) : (Y(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.uc.Sb(a))
};
s.Ic = function(a, b) {
  this.uc.Ic(a, b)
};
s.onclose = function() {
  this.a.info("onclose");
  Af(this.D, m)
};
s.c = function() {
  this.a.info("in disposeInternal.");
  Df.e.c.call(this);
  this.uc.b();
  delete this.D
};
var Ef = [];
function Ff() {
  var a = new Cc;
  Ef.push(a);
  return a
}
function Gf(a) {
  var b = Ef;
  Ef = [];
  ib(b, function(b) {
    b.aa(a)
  })
}
function Hf(a, b) {
  if(Ef.length) {
    return Ff()
  }
  var c = new rf(b + "FlashConnector.swf?cb=" + If);
  c.Gd = "#777777";
  sf(c, 300, 30);
  var d = Q("minerva-elements");
  d || f(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
  var e = Q("minerva-elements-FlashConnectorSwf");
  e || (e = qd("div", {id:"minerva-elements-FlashConnectorSwf"}), d.appendChild(e));
  xe = vf(a.F, c, e);
  Jc(xe, Gf);
  return Ff()
}
;function Jf() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;var ve = Math.pow(2, 53);
var Kf = {Ve:r("<cw.eq.Wildcard>")};
function Lf(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function Mf(a, b, c) {
  var d = fa(a), e = fa(b);
  if(a == Kf || b == Kf) {
    return j
  }
  if(a != k && "function" == typeof a.o) {
    return c && c.push("running custom equals function on left object"), a.o(b, c)
  }
  if(b != k && "function" == typeof b.o) {
    return c && c.push("running custom equals function on right object"), b.o(a, c)
  }
  if(Lf(d) || Lf(e)) {
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
                if(!Mf(a[d], b[d], c)) {
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
          if(a.Ue == Zb && b.Ue == Zb) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!Mf(a[g], b[g], c)) {
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
;function $(a) {
  H.call(this, a)
}
B($, H);
$.prototype.name = "cw.net.InvalidFrame";
function Nf() {
  var a = [];
  this.W(a);
  return a.join("")
}
function Of() {
}
Of.prototype.o = function(a, b) {
  return!(a instanceof Of) ? m : Mf(Pf(this), Pf(a), b)
};
Of.prototype.n = function(a, b) {
  a.push("<HelloFrame properties=");
  O(Pf(this), a, b);
  a.push(">")
};
function Pf(a) {
  return[a.nb, a.Be, a.fe, a.Fe, a.Pb, a.wd, a.ue, a.se, a.dd, a.qe, a.Qe, a.Me, a.Z, a.jc]
}
Of.prototype.Q = Nf;
Of.prototype.W = function(a) {
  var b = {};
  b.tnum = this.nb;
  b.ver = this.Be;
  b.format = this.fe;
  b["new"] = this.Fe;
  b.id = this.Pb;
  b.ming = this.wd;
  b.pad = this.ue;
  b.maxb = this.se;
  ga(this.dd) && (b.maxt = this.dd);
  b.maxia = this.qe;
  b.tcpack = this.Qe;
  b.eeds = this.Me;
  b.sack = this.Z instanceof ze ? re((new Qf(this.Z)).Q()) : this.Z;
  b.seenack = this.jc instanceof ze ? re((new Qf(this.jc)).Q()) : this.jc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(Wc(b), "H")
};
function Rf(a) {
  this.mb = a
}
Rf.prototype.o = function(a) {
  return a instanceof Rf && this.mb == a.mb
};
Rf.prototype.n = function(a, b) {
  a.push("new StringFrame(");
  O(this.mb, a, b);
  a.push(")")
};
Rf.prototype.Q = Nf;
Rf.prototype.W = function(a) {
  a.push(this.mb, " ")
};
function Sf(a) {
  this.Vb = a
}
Sf.prototype.o = function(a) {
  return a instanceof Sf && this.Vb == a.Vb
};
Sf.prototype.n = function(a, b) {
  a.push("new CommentFrame(");
  O(this.Vb, a, b);
  a.push(")")
};
Sf.prototype.Q = Nf;
Sf.prototype.W = function(a) {
  a.push(this.Vb, "^")
};
function Tf(a) {
  this.Mb = a
}
Tf.prototype.o = function(a) {
  return a instanceof Tf && this.Mb == a.Mb
};
Tf.prototype.n = function(a) {
  a.push("new SeqNumFrame(", "" + this.Mb, ")")
};
Tf.prototype.Q = Nf;
Tf.prototype.W = function(a) {
  a.push("" + this.Mb, "N")
};
function Uf(a) {
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
function Qf(a) {
  this.Z = a
}
Qf.prototype.o = function(a, b) {
  return a instanceof Qf && this.Z.o(a.Z, b)
};
Qf.prototype.n = function(a, b) {
  a.push("new SackFrame(");
  O(this.Z, a, b);
  a.push(")")
};
Qf.prototype.Q = Nf;
Qf.prototype.W = function(a) {
  var b = this.Z;
  a.push(b.Qa.join(","), "|", "" + b.Ua);
  a.push("A")
};
function Vf(a) {
  this.Db = a
}
Vf.prototype.o = function(a, b) {
  return a instanceof Vf && this.Db.o(a.Db, b)
};
Vf.prototype.n = function(a, b) {
  a.push("new StreamStatusFrame(");
  O(this.Db, a, b);
  a.push(")")
};
Vf.prototype.Q = Nf;
Vf.prototype.W = function(a) {
  var b = this.Db;
  a.push(b.Qa.join(","), "|", "" + b.Ua);
  a.push("T")
};
function Wf() {
}
Wf.prototype.n = function(a) {
  a.push("new StreamCreatedFrame()")
};
Wf.prototype.o = function(a) {
  return a instanceof Wf
};
Wf.prototype.Q = Nf;
Wf.prototype.W = function(a) {
  a.push("C")
};
function Xf() {
}
Xf.prototype.n = function(a) {
  a.push("new YouCloseItFrame()")
};
Xf.prototype.o = function(a) {
  return a instanceof Xf
};
Xf.prototype.Q = Nf;
Xf.prototype.W = function(a) {
  a.push("Y")
};
function Yf(a, b) {
  this.Hb = a;
  this.qb = b
}
Yf.prototype.o = function(a) {
  return a instanceof Yf && this.Hb == a.Hb && this.qb == a.qb
};
Yf.prototype.n = function(a, b) {
  a.push("new ResetFrame(");
  O(this.Hb, a, b);
  a.push(", ", "" + this.qb, ")")
};
Yf.prototype.Q = Nf;
Yf.prototype.W = function(a) {
  a.push(this.Hb, "|", "" + Number(this.qb), "!")
};
var Zf = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function $f(a) {
  this.reason = a
}
$f.prototype.o = function(a) {
  return a instanceof $f && this.reason == a.reason
};
$f.prototype.n = function(a, b) {
  a.push("new TransportKillFrame(");
  O(this.reason, a, b);
  a.push(")")
};
$f.prototype.Q = Nf;
$f.prototype.W = function(a) {
  a.push(this.reason, "K")
};
function bg(a) {
  a || f(new $("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new Rf(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = Uf(re(a)), a == k && f(new $("bad sack")), new Qf(a)
  }
  if("N" == b) {
    return a = ue(re(a)), a == k && f(new $("bad seqNum")), new Tf(a)
  }
  if("T" == b) {
    return a = Uf(re(a)), a == k && f(new $("bad lastSackSeen")), new Vf(a)
  }
  if("Y" == b) {
    return 1 != a.length && f(new $("leading garbage")), new Xf
  }
  if("^" == b) {
    return new Sf(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && f(new $("leading garbage")), new Wf
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && f(new $("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && f(new $("bad applicationLevel")), new Yf(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = Zf[a], a == k && f(new $("unknown kill reason: " + a)), new $f(a)
  }
  f(new $("Invalid frame type " + b))
}
;function cg(a, b, c, d) {
  this.contentWindow = a;
  this.Yb = b;
  this.xd = c;
  this.pf = d
}
cg.prototype.n = function(a, b) {
  a.push("<XDRFrame frameId=");
  O(this.pf, a, b);
  a.push(", expandedUrl=");
  O(this.Yb, a, b);
  a.push(", streams=");
  O(this.xd, a, b);
  a.push(">")
};
function dg() {
  this.frames = [];
  this.bd = new J
}
dg.prototype.a = Z("cw.net.XDRTracker");
function eg(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor(Jf()) + ("" + Math.floor(Jf()))
  })
}
function fg(a, b) {
  for(var c = gg, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = 0 == e.xd.length) {
      g = e.Yb;
      var i = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + i + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + P(b) + " existing frame " + P(e)), Oc(e)
    }
  }
  d = qe() + qe();
  e = eg(a);
  g = t.location;
  g instanceof K || (g = Tb(g));
  e instanceof K || (e = Tb(e));
  var l = g;
  g = l.K();
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
          for(var l = 0 == n.lastIndexOf("/", 0), n = n.split("/"), p = [], G = 0;G < n.length;) {
            var q = n[G++];
            "." == q ? l && G == n.length && p.push("") : ".." == q ? ((1 < p.length || 1 == p.length && "" != p[0]) && p.pop(), l && G == n.length && p.push("")) : (p.push(q), l = j)
          }
          n = p.join("/")
        }
      }
    }
  }
  i ? Ib(g, n) : i = "" !== e.I.toString();
  i ? (l = e.I, l.Wa || (l.Wa = l.toString() ? decodeURIComponent(l.toString()) : ""), Jb(g, l.Wa, h)) : i = !!e.Ia;
  i && Kb(g, e.Ia);
  e = g.toString();
  g = ("" + t.location).match(ab)[3] || k;
  i = e.match(ab)[3] || k;
  g == i ? (c.a.info("No need to make a real XDRFrame for " + P(b)), c = Oc(new cg(t, e, [b], k))) : ((g = Q("minerva-elements")) || f(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new Cc, c.bd.set(d, [i, e, b]), c.a.info("Creating new XDRFrame " + P(d) + "for " + P(b)), c = qd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = i);
  return c
}
dg.prototype.cg = function(a) {
  var b = this.bd.get(a);
  b || f(Error("Unknown frameId " + P(a)));
  this.bd.remove(b);
  var c = b[0], a = new cg(Q("minerva-xdrframe-" + a).contentWindow || (Q("minerva-xdrframe-" + a).contentDocument || Q("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (Q("minerva-xdrframe-" + a).contentDocument || Q("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.aa(a)
};
var gg = new dg;
t.__XHRTracker_xdrFrameLoaded = y(gg.cg, gg);
var hg;
hg = m;
var ig = Ha();
ig && (-1 != ig.indexOf("Firefox") || -1 != ig.indexOf("Camino") || -1 != ig.indexOf("iPhone") || -1 != ig.indexOf("iPod") || -1 != ig.indexOf("iPad") || -1 != ig.indexOf("Android") || -1 != ig.indexOf("Chrome") && (hg = j));
var jg = hg;
var If = "4bdfc178fc0e508c0cd5efc3fdb09920";
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function kg(a, b, c, d, e, g) {
  Cc.call(this, e, g);
  this.oe = a;
  this.Mc = [];
  this.Ud = !!b;
  this.mf = !!c;
  this.cf = !!d;
  for(b = 0;b < a.length;b++) {
    Kc(a[b], y(this.Yd, this, b, j), y(this.Yd, this, b, m))
  }
  0 == a.length && !this.Ud && this.aa(this.Mc)
}
B(kg, Cc);
kg.prototype.we = 0;
kg.prototype.Yd = function(a, b, c) {
  this.we++;
  this.Mc[a] = [b, c];
  this.ta || (this.Ud && b ? this.aa([a, c]) : this.mf && !b ? this.xb(c) : this.we == this.oe.length && this.aa(this.Mc));
  this.cf && !b && (c = k);
  return c
};
kg.prototype.xb = function(a) {
  kg.e.xb.call(this, a);
  ib(this.oe, function(a) {
    a.cancel()
  })
};
function lg(a) {
  a = new kg(a, m, j);
  Jc(a, function(a) {
    return jb(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function mg(a, b) {
  this.bg = a;
  this.re = b
}
mg.prototype.Zc = 0;
mg.prototype.lc = 0;
mg.prototype.Rc = m;
function ng(a) {
  var b = [];
  if(a.Rc) {
    return[b, 2]
  }
  var c = a.Zc, d = a.bg.responseText;
  for(a.Zc = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var e = d.substr(a.lc, c - a.lc), e = e.replace(/\r$/, "");
    if(e.length > a.re) {
      return a.Rc = j, [b, 2]
    }
    b.push(e);
    a.lc = c += 1
  }
  return a.Zc - a.lc - 1 > a.re ? (a.Rc = j, [b, 2]) : [b, 1]
}
;function og(a, b, c) {
  this.D = b;
  this.Y = a;
  this.Jc = c
}
B(og, L);
s = og.prototype;
s.a = Z("cw.net.XHRMaster");
s.Da = -1;
s.cd = function(a, b, c) {
  this.Jc.__XHRSlave_makeRequest(this.Y, a, b, c)
};
s.va = o("Da");
s.gd = function(a, b) {
  1 != b && V(this.a, P(this.Y) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  yf(this.D);
  zf(this.D, a)
};
s.hd = function(a) {
  X(this.a, "ongotheaders_: " + P(a));
  var b = k;
  "Content-Length" in a && (b = ue(a["Content-Length"]));
  a = this.D;
  X(a.a, a.p() + " got Content-Length: " + b);
  a.ia == pg && (b == k && (W(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), qg(a, 2E3 + 1E3 * (b / 3072)))
};
s.jd = function(a) {
  1 != a && X(this.a, this.D.p() + "'s XHR's readyState is " + a);
  this.Da = a;
  2 <= this.Da && yf(this.D)
};
s.fd = function() {
  this.D.b()
};
s.c = function() {
  og.e.c.call(this);
  delete rg.ma[this.Y];
  this.Jc.__XHRSlave_dispose(this.Y);
  delete this.Jc
};
function sg() {
  this.ma = {}
}
B(sg, L);
s = sg.prototype;
s.a = Z("cw.net.XHRMasterTracker");
s.Lc = function(a, b) {
  var c = "_" + qe(), d = new og(c, a, b);
  return this.ma[c] = d
};
s.gd = function(a, b, c) {
  if(La) {
    for(var d = [], e = 0, g = b.length;e < g;e++) {
      d[e] = b[e]
    }
    b = d
  }else {
    b = ob(b)
  }
  (d = this.ma[a]) ? d.gd(b, c) : V(this.a, "onframes_: no master for " + P(a))
};
s.hd = function(a, b) {
  var c = this.ma[a];
  c ? c.hd(b) : V(this.a, "ongotheaders_: no master for " + P(a))
};
s.jd = function(a, b) {
  var c = this.ma[a];
  c ? c.jd(b) : V(this.a, "onreadystatechange_: no master for " + P(a))
};
s.fd = function(a) {
  var b = this.ma[a];
  b ? (delete this.ma[b.Y], b.fd()) : V(this.a, "oncomplete_: no master for " + P(a))
};
s.c = function() {
  sg.e.c.call(this);
  for(var a = db(this.ma);a.length;) {
    a.pop().b()
  }
  delete this.ma
};
var rg = new sg;
t.__XHRMaster_onframes = y(rg.gd, rg);
t.__XHRMaster_oncomplete = y(rg.fd, rg);
t.__XHRMaster_ongotheaders = y(rg.hd, rg);
t.__XHRMaster_onreadystatechange = y(rg.jd, rg);
function tg(a, b, c) {
  this.ga = a;
  this.host = b;
  this.port = c
}
function ug(a, b, c) {
  this.host = a;
  this.port = b;
  this.Xf = c
}
function vg(a, b) {
  b || (b = a);
  this.ga = a;
  this.Ea = b
}
vg.prototype.n = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  O(this.ga, a, b);
  a.push(", secondaryUrl=");
  O(this.Ea, a, b);
  a.push(">")
};
function wg(a, b, c, d) {
  this.ga = a;
  this.Ae = b;
  this.Ea = c;
  this.Ke = d;
  (!(0 == this.ga.indexOf("http://") || 0 == this.ga.indexOf("https://")) || !(0 == this.Ea.indexOf("http://") || 0 == this.Ea.indexOf("https://"))) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Ae.location.href;
  bb(this.ga, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Ke.location.href;
  bb(this.Ea, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
wg.prototype.n = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  O(this.ga, a, b);
  a.push(", secondaryUrl=");
  O(this.Ea, a, b);
  a.push(">")
};
var xg = new Sf(";)]}");
function yg() {
}
yg.prototype.Vd = r(1);
function zg(a) {
  this.Rf = a
}
zg.prototype.n = function(a, b) {
  a.push("<UserContext for ");
  O(this.Rf, a, b);
  a.push(">")
};
function Ag(a, b, c) {
  this.t = a;
  this.Sf = b ? b : new yg;
  this.A = c ? c : Sc;
  this.Qb = new Re;
  this.Pb = qe() + qe();
  this.Ca = new Ae;
  this.Xc = new Ce;
  this.Rb = k;
  this.zc = [];
  this.ob = new zg(this);
  E && (this.Rb = rc(t, "load", this.Jf, m, this))
}
B(Ag, L);
s = Ag.prototype;
s.a = Z("cw.net.ClientStream");
s.me = new ze(-1, []);
s.ne = new ze(-1, []);
s.Bf = 50;
s.Af = 1048576;
s.kd = k;
s.onreset = k;
s.ye = k;
s.ud = m;
s.od = m;
s.d = 1;
s.zd = -1;
s.h = k;
s.w = k;
s.Ib = k;
s.vd = 0;
s.ze = 0;
s.Je = 0;
s.n = function(a, b) {
  a.push("<ClientStream id=");
  O(this.Pb, a, b);
  a.push(", state=", "" + this.d);
  a.push(", primary=");
  O(this.h, a, b);
  a.push(", secondary=");
  O(this.w, a, b);
  a.push(", resetting=");
  O(this.Ib, a, b);
  a.push(">")
};
function Bg(a) {
  var b = [-1];
  a.h && b.push(a.h.gb);
  a.w && b.push(a.w.gb);
  return Math.max.apply(Math.max, b)
}
function Cg(a) {
  if(!(3 > a.d)) {
    var b = 0 != a.Ca.R.u(), c = De(a.Xc), d = !c.o(a.ne) && !(a.h && c.o(a.h.cb) || a.w && c.o(a.w.cb)), e = Bg(a);
    if((b = b && e < a.Ca.Ha) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.h.sb ? (Y(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.h, c != d.cb && (!d.na && !d.z.length && Dg(d), d.z.push(new Qf(c)), d.cb = c)), b && Eg(a.h, a.Ca, e + 1), a.h.la()) : a.w == k ? a.ud ? (Y(a.a, "tryToSend_: creating secondary to send " + g), a.w = Fg(a, m), b && Eg(a.w, a.Ca, e + 1), a.w.la()) : (Y(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.od = j) : Y(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
s.Jf = function() {
  this.Rb = k;
  if(this.h && this.h.ab()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.h;
    a.Bc = j;
    a.b()
  }
  this.w && this.w.ab() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.w, a.Bc = j, a.b())
};
function Gg(a, b) {
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
    a.Ca.extend(b);
    Cg(a)
  }
}
function Fg(a, b) {
  var c;
  a.t instanceof wg ? c = 1 == a.Sf.Vd() ? pg : Hg : a.t instanceof ug ? c = Ig : f(Error("Don't support endpoint " + P(a.t)));
  a.zd += 1;
  c = new Jg(a.A, a, a.zd, c, a.t, b);
  Y(a.a, "Created: " + c.p());
  a.Qb.add(c);
  return c
}
function Kg(a, b, c) {
  var d = new Lg(a.A, a, b, c);
  Y(a.a, "Created: " + d.p() + ", delay=" + b + ", times=" + c);
  a.Qb.add(d);
  return d
}
function Mg(a, b) {
  a.Qb.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  X(a.a, "Offline: " + b.p());
  a.vd = b.za ? a.vd + b.za : 0;
  1 <= a.vd && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.ob, "stream penalty reached limit", m), a.b());
  if(3 < a.d) {
    4 == a.d && b.Te ? (X(a.a, "Disposing because resettingTransport_ is done."), a.b()) : X(a.a, "Not creating a transport because ClientStream is in state " + a.d)
  }else {
    var c;
    var d;
    c = b instanceof Lg;
    if(!c && b.Bc) {
      var e = E ? jg ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      Y(a.a, "getDelayForNextTransport_: " + P({delay:c, times:d}))
    }else {
      if(d = b.Kd(), b == a.h ? d ? e = ++a.ze : c || (e = a.ze = 0) : d ? e = ++a.Je : c || (e = a.Je = 0), c || !e) {
        d = c = 0, Y(a.a, "getDelayForNextTransport_: " + P({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), i = Math.floor(4E3 * Math.random()) - 2E3, l = Math.max(0, b.Pe - b.Ad);
        d = (c = Math.max(0, g + i - l)) ? 1 : 0;
        Y(a.a, "getDelayForNextTransport_: " + P({count:e, base:g, variance:i, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    b == a.h ? (a.h = k, c ? a.h = Kg(a, e, c) : (e = Bg(a), a.h = Fg(a, j), Eg(a.h, a.Ca, e + 1)), a.h.la()) : b == a.w && (a.w = k, c ? (a.w = Kg(a, e, c), a.w.la()) : Cg(a))
  }
}
s.reset = function(a) {
  3 < this.d && f(Error("reset: Can't send reset in state " + this.d));
  this.d = 4;
  this.h && this.h.sb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Ng(this.h, a), this.h.la()) : (this.h && (X(this.a, "reset: Disposing primary before sending ResetFrame."), this.h.b()), this.w && (X(this.a, "reset: Disposing secondary before sending ResetFrame."), this.w.b()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Ib = Fg(this, m), Ng(this.Ib, a), this.Ib.la());
  this.onreset && this.onreset.call(this.ob, a, j)
};
function Og(a, b, c, d) {
  var e;
  e = a.Xc;
  for(var g = a.Bf, i = a.Af, l = [], n = m, p = 0, G = c.length;p < G;p++) {
    var q = c[p], w = q[0], q = q[1];
    if(w == e.Na + 1) {
      e.Na += 1;
      for(l.push(q);;) {
        w = e.Na + 1;
        q = e.Ga.get(w, Ee);
        if(q === Ee) {
          break
        }
        l.push(q[0]);
        e.Ga.remove(w);
        e.O -= q[1];
        e.Na = w
      }
    }else {
      if(!(w <= e.Na)) {
        if(g != k && e.Ga.u() >= g) {
          n = j;
          break
        }
        var A = we(q);
        if(i != k && e.O + A > i) {
          n = j;
          break
        }
        e.Ga.set(w, [q, A]);
        e.O += A
      }
    }
  }
  e.Ga.Ma() && e.Ga.clear();
  e = [l, n];
  c = e[0];
  e = e[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(i = c[g], a.kd && a.kd.call(a.ob, i), 4 == a.d || a.ba) {
        return
      }
    }
  }
  d || Cg(a);
  if(!(4 == a.d || a.ba) && e) {
    V(b.a, b.p() + "'s peer caused rwin overflow."), b.b()
  }
}
s.Rd = function(a) {
  V(this.a, "Failed to start " + P(this) + "; error was " + P(a.message));
  this.b()
};
s.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.d && f(Error("ClientStream.start: " + P(this) + " already started"));
  this.d = 2;
  if(this.t instanceof vg) {
    var a = fg(this.t.ga, this), b = fg(this.t.Ea, this), a = lg([a, b]);
    Jc(a, y(this.kf, this));
    Lc(a, y(this.Rd, this))
  }else {
    if(this.t instanceof tg) {
      if(ye) {
        this.Td()
      }else {
        var a = Hf(this.A, this.t.ga), c = this;
        Jc(a, function(a) {
          ye || (ye = new Cf(c.A, a));
          return k
        });
        Jc(a, y(this.Td, this));
        Lc(a, y(this.Rd, this))
      }
    }else {
      Pg(this)
    }
  }
};
s.kf = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Yb, e = a[1].Yb;
  this.zc.push(a[0]);
  this.zc.push(a[1]);
  this.t = new wg(d, b, e, c);
  Pg(this)
};
s.Td = function() {
  this.t = new ug(this.t.host, this.t.port, ye);
  Pg(this)
};
function Pg(a) {
  a.d = 3;
  a.h = Fg(a, j);
  Eg(a.h, a.Ca, k);
  a.h.la()
}
s.c = function() {
  this.a.info(P(this) + " in disposeInternal.");
  this.d = 5;
  for(var a = this.Qb.H(), b = 0;b < a.length;b++) {
    a[b].b()
  }
  for(a = 0;a < this.zc.length;a++) {
    nb(this.zc[a].xd, this)
  }
  E && this.Rb && (uc(this.Rb), this.Rb = k);
  this.ye && this.ye.call(this.ob);
  delete this.Qb;
  delete this.h;
  delete this.w;
  delete this.Ib;
  delete this.ob;
  Ag.e.c.call(this)
};
var pg = 1, Hg = 2, Ig = 3;
function Jg(a, b, c, d, e, g) {
  this.A = a;
  this.C = b;
  this.nb = c;
  this.ia = d;
  this.t = e;
  this.z = [];
  this.Va = g;
  this.sb = !this.ab();
  this.ib = this.ia != pg;
  this.Ye = y(this.Vf, this)
}
B(Jg, L);
s = Jg.prototype;
s.a = Z("cw.net.ClientTransport");
s.m = k;
s.Ad = k;
s.Pe = k;
s.oc = k;
s.na = m;
s.vc = m;
s.cb = k;
s.$b = 0;
s.gb = -1;
s.nc = -1;
s.Te = m;
s.Bc = m;
s.za = 0;
s.Ab = m;
s.n = function(a) {
  a.push("<ClientTransport #", "" + this.nb, ", becomePrimary=", "" + this.Va, ">")
};
s.p = function() {
  return(this.Va ? "Prim. T#" : "Sec. T#") + this.nb
};
s.Kd = function() {
  return!(!this.Ab && this.$b)
};
s.ab = function() {
  return this.ia == pg || this.ia == Hg
};
function Qg(a, b) {
  tb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Og(a.C, a, b, !a.ib)
}
function Rg(a, b, c) {
  try {
    var d = bg(b);
    a.$b += 1;
    X(a.a, a.p() + " RECV " + P(d));
    var e;
    1 == a.$b && !d.o(xg) && a.ab() ? (W(a.a, a.p() + " is closing soon because got bad preamble: " + P(d)), e = j) : e = m;
    if(e) {
      return j
    }
    if(d instanceof Rf) {
      if(!/^([ -~]*)$/.test(d.mb)) {
        return a.Ab = j
      }
      a.nc += 1;
      c.push([a.nc, d.mb])
    }else {
      if(d instanceof Qf) {
        var g = a.C, i = d.Z;
        g.me = i;
        var l = g.Ca, n = i.Ua, c = m;
        n > l.Ha && (c = j);
        for(var p = Be(l).concat(), d = 0;d < p.length;d++) {
          var G = p[d];
          if(G > n) {
            break
          }
          var q = l.R.get(G)[1];
          l.R.remove(G);
          l.O -= q
        }
        for(d = 0;d < i.Qa.length;d++) {
          var w = i.Qa[d];
          w > l.Ha && (c = j);
          l.R.U(w) && (q = l.R.get(w)[1], l.R.remove(w), l.O -= q)
        }
        l.R.Ma() && l.R.clear();
        if(c) {
          return W(a.a, a.p() + " is closing soon because got bad SackFrame"), a.Ab = j
        }
      }else {
        if(d instanceof Tf) {
          a.nc = d.Mb - 1
        }else {
          if(d instanceof Vf) {
            a.C.ne = d.Db
          }else {
            if(d instanceof Xf) {
              return Y(a.a, a.p() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof $f) {
              return a.Ab = j, "stream_attach_failure" == d.reason ? a.za += 1 : "acked_unsent_strings" == d.reason && (a.za += 0.5), Y(a.a, a.p() + " is closing soon because got " + P(d)), j
            }
            if(!(d instanceof Sf)) {
              if(d instanceof Wf) {
                var A = a.C, Sh = !a.ib;
                Y(A.a, "Stream is now confirmed to exist at server.");
                A.ud = j;
                A.od && !Sh && (A.od = m, Cg(A))
              }else {
                if(c.length) {
                  Qg(a, c);
                  if(!u(c)) {
                    for(var Vd = c.length - 1;0 <= Vd;Vd--) {
                      delete c[Vd]
                    }
                  }
                  c.length = 0
                }
                if(d instanceof Yf) {
                  var Gc = a.C;
                  Gc.onreset && Gc.onreset.call(Gc.ob, d.Hb, d.qb);
                  Gc.b();
                  return j
                }
                f(Error(a.p() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(ag) {
    return ag instanceof $ || f(ag), W(a.a, a.p() + " is closing soon because got InvalidFrame: " + P(b)), a.Ab = j
  }
  return m
}
function zf(a, b) {
  a.vc = j;
  try {
    for(var c = m, d = [], e = 0, g = b.length;e < g;e++) {
      if(a.ba) {
        a.a.info(a.p() + " returning from loop because we're disposed.");
        return
      }
      if(c = Rg(a, b[e], d)) {
        break
      }
    }
    d.length && Qg(a, d);
    a.vc = m;
    a.z.length && a.la();
    c && (Y(a.a, a.p() + " closeSoon is true.  Frames were: " + P(b)), a.b())
  }finally {
    a.vc = m
  }
}
s.Vf = function() {
  W(this.a, this.p() + " timed out due to lack of connection or no data being received.");
  this.b()
};
function Sg(a) {
  a.oc != k && (a.A.F.clearTimeout(a.oc), a.oc = k)
}
function qg(a, b) {
  Sg(a);
  b = Math.round(b);
  a.oc = a.A.F.setTimeout(a.Ye, b);
  X(a.a, a.p() + "'s receive timeout set to " + b + " ms.")
}
function yf(a) {
  a.ia != pg && (a.ia == Ig || a.ia == Hg ? qg(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ia)))
}
function Dg(a) {
  var b = new Of;
  b.nb = a.nb;
  b.Be = 2;
  b.fe = 2;
  a.C.ud || (b.Fe = j);
  b.Pb = a.C.Pb;
  b.wd = a.ib;
  b.wd && (b.ue = 4096);
  b.se = 3E5;
  b.qe = a.ib ? Math.floor(10) : 0;
  b.Qe = m;
  a.Va && (b.Me = k, b.dd = Math.floor((a.ib ? 358E4 : 25E3) / 1E3));
  b.Z = De(a.C.Xc);
  b.jc = a.C.me;
  a.z.push(b);
  a.cb = b.Z
}
function Af(a, b) {
  b && (a.za += 0.5);
  a.b()
}
s.la = function() {
  this.na && !this.sb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.vc) {
    Y(this.a, this.p() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.na;
    this.na = j;
    !a && !this.z.length && Dg(this);
    for(a = 0;a < this.z.length;a++) {
      X(this.a, this.p() + " SEND " + P(this.z[a]))
    }
    if(this.ab()) {
      for(var a = [], b = 0, c = this.z.length;b < c;b++) {
        this.z[b].W(a), a.push("\n")
      }
      this.z = [];
      a = a.join("");
      b = this.Va ? this.t.ga : this.t.Ea;
      this.m = rg.Lc(this, this.Va ? this.t.Ae : this.t.Ke);
      this.Ad = this.A.F === Bc ? z() : this.A.F.getTime();
      this.m.cd(b, "POST", a);
      qg(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.ib ? 0 : this.Va ? 25E3 : 0))
    }else {
      if(this.ia == Ig) {
        a = [];
        b = 0;
        for(c = this.z.length;b < c;b++) {
          a.push(this.z[b].Q())
        }
        this.z = [];
        this.m ? this.m.Sb(a) : (b = this.t, this.m = new Df(this), this.m.uc = b.Xf.Lc(this.m), this.Ad = this.A.F === Bc ? z() : this.A.F.getTime(), this.m.Ic(b.host, b.port), this.m.ba || (this.m.Sb(a), this.m.ba || qg(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.ia))
      }
    }
  }
};
function Eg(a, b, c) {
  !a.na && !a.z.length && Dg(a);
  for(var d = Math.max(c, a.gb + 1), e = Be(b), c = [], g = 0;g < e.length;g++) {
    var i = e[g];
    (d == k || i >= d) && c.push([i, b.R.get(i)[0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], e = g[0], g = g[1], (-1 == a.gb || a.gb + 1 != e) && a.z.push(new Tf(e)), a.z.push(new Rf(g)), a.gb = e
  }
}
s.c = function() {
  this.a.info(this.p() + " in disposeInternal.");
  Jg.e.c.call(this);
  this.Pe = this.A.F === Bc ? z() : this.A.F.getTime();
  this.z = [];
  Sg(this);
  this.m && this.m.b();
  var a = this.C;
  this.C = k;
  Mg(a, this)
};
function Ng(a, b) {
  !a.na && !a.z.length && Dg(a);
  a.z.push(new Yf(b, j));
  a.Te = j
}
function Lg(a, b, c, d) {
  this.A = a;
  this.C = b;
  this.Qd = c;
  this.Md = d
}
B(Lg, L);
s = Lg.prototype;
s.na = m;
s.sb = m;
s.ec = k;
s.cb = k;
s.a = Z("cw.net.DoNothingTransport");
function Tg(a) {
  a.ec = a.A.F.setTimeout(function() {
    a.ec = k;
    a.Md--;
    a.Md ? Tg(a) : a.b()
  }, a.Qd)
}
s.la = function() {
  this.na && !this.sb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.na = j;
  Tg(this)
};
s.n = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.Qd, ">")
};
s.ab = r(m);
s.p = r("Wast. T");
s.Kd = r(m);
s.c = function() {
  this.a.info(this.p() + " in disposeInternal.");
  Lg.e.c.call(this);
  this.ec != k && this.A.F.clearTimeout(this.ec);
  var a = this.C;
  this.C = k;
  Mg(a, this)
};
/*

 linkify - v0.3 - 6/27/2009
 http://benalman.com/code/test/js-linkify/

 Copyright (c) 2009 "Cowboy" Ben Alman
 Licensed under the MIT license
 http://benalman.com/about/license/

 Some regexps adapted from http://userscripts.org/scripts/review/7122
*/
var Ug, Vg, Wg, Xg;
Ug = RegExp("(?:\\b[a-z\\d.-]+://[^<>\\s]+|\\b(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:[;/][^#?<>\\s]*)?(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w)|(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w))", 
"ig");
Vg = /^[a-z\d.-]+:\/\//i;
Wg = {"'":"`", ">":"<", ")":"(", "]":"[", "}":"{", "\u00bb":"\u00ab", "\u203a":"\u2039"};
Xg = {aa:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, De:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
function Yg(a) {
  var b;
  b = b || {};
  var c = [], d, e;
  for(e in Xg) {
    ga(b[e]) || (b[e] = Xg[e])
  }
  for(;e = Ug.exec(a);) {
    e = e[0];
    var g = Ug.lastIndex, i = g - e.length;
    if(!/[\/:]/.test(a.charAt(i - 1))) {
      do {
        var l = e, n = e.substr(-1), p = Wg[n];
        if(p && (p = e.match(RegExp("\\" + p + "(?!$)", "g")), n = e.match(RegExp("\\" + n, "g")), (p ? p.length : 0) < (n ? n.length : 0))) {
          e = e.substr(0, e.length - 1), g--
        }
        b.De && (e = e.replace(b.De, function(a) {
          g -= a.length;
          return""
        }))
      }while(e.length && e !== l);
      l = e;
      Vg.test(l) || (l = (-1 !== l.indexOf("@") ? !l.indexOf("mailto:") ? "" : "mailto:" : !l.indexOf("irc.") ? "irc://" : !l.indexOf("ftp.") ? "ftp://" : "http://") + l);
      d != i && (c.push([a.slice(d, i)]), d = g);
      c.push([e, l])
    }
  }
  c.push([a.substr(d)]);
  d = "";
  for(e = 0;e < c.length;e++) {
    d += b.aa.apply(t, c[e])
  }
  return d || a
}
;function Zg() {
  this.Ee = z()
}
var $g = new Zg;
Zg.prototype.set = aa("Ee");
Zg.prototype.reset = function() {
  this.set(z())
};
Zg.prototype.get = o("Ee");
function ah(a) {
  this.md = a || "";
  this.Pf = $g
}
ah.prototype.Lf = j;
ah.prototype.Nf = j;
ah.prototype.Mf = j;
ah.prototype.Le = m;
function bh(a) {
  return 10 > a ? "0" + a : "" + a
}
function ch(a, b) {
  var c = (a.Ne - b) / 1E3, d = c.toFixed(3), e = 0;
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
function dh(a) {
  ah.call(this, a)
}
B(dh, ah);
dh.prototype.Le = j;
function eh(a) {
  this.ed = a || 100;
  this.pa = []
}
s = eh.prototype;
s.Eb = 0;
s.add = function(a) {
  this.pa[this.Eb] = a;
  this.Eb = (this.Eb + 1) % this.ed
};
s.get = function(a) {
  a = fh(this, a);
  return this.pa[a]
};
s.set = function(a, b) {
  a = fh(this, a);
  this.pa[a] = b
};
s.u = function() {
  return this.pa.length
};
s.Ma = function() {
  return 0 == this.pa.length
};
s.clear = function() {
  this.Eb = this.pa.length = 0
};
s.H = function() {
  for(var a = this.u(), b = this.u(), c = [], a = this.u() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
s.da = function() {
  for(var a = [], b = this.u(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
s.U = function(a) {
  return a < this.u()
};
s.Wb = function(a) {
  for(var b = this.u(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return j
    }
  }
  return m
};
function fh(a, b) {
  b >= a.pa.length && f(Error("Out of bounds exception"));
  return a.pa.length < a.ed ? b : (a.Eb + Number(b)) % a.ed
}
;function gh(a, b) {
  this.wa = a || "";
  this.md = b || "";
  this.hb = [];
  this.qc = new eh(hh);
  this.Hf = y(this.We, this);
  this.of = new dh(this.md);
  this.lf = {};
  if(j != this.ie) {
    this.ie = j;
    var c = qf(), d = this.Hf;
    c.Bb || (c.Bb = []);
    c.Bb.push(d)
  }
  this.wb = "1" == ih(this.wa, "enabled");
  t.setInterval(y(this.Kf, this), 7500)
}
var hh = 500;
s = gh.prototype;
s.Se = "LOGGING";
s.hf = m;
s.s = k;
s.Ed = m;
s.ie = m;
s.Hd = k;
s.$c = z();
s.La = function() {
  this.wb && jh(this)
};
s.isEnabled = o("wb");
s.sc = function(a) {
  if(this.wb = a) {
    jh(this), this.s && this.yc()
  }
  kh(this, "enabled", a ? "1" : "0")
};
function lh(a) {
  return!!a.s && !a.s.closed
}
s.af = function() {
  this.qc.clear();
  lh(this) && this.yc()
};
s.We = function(a) {
  if(!this.lf[a.pe]) {
    var b = this.of, c;
    switch(a.X.value) {
      case af.value:
        c = "dbg-sh";
        break;
      case bf.value:
        c = "dbg-sev";
        break;
      case cf.value:
        c = "dbg-w";
        break;
      case df.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.md, " ");
    if(b.Lf) {
      var e = new Date(a.Ne);
      d.push("[", bh(e.getFullYear() - 2E3) + bh(e.getMonth() + 1) + bh(e.getDate()) + " " + bh(e.getHours()) + ":" + bh(e.getMinutes()) + ":" + bh(e.getSeconds()) + "." + bh(Math.floor(e.getMilliseconds() / 10)), "] ")
    }
    b.Nf && d.push("[", Aa(ch(a, b.Pf.get())), "s] ");
    b.Mf && d.push("[", C(a.pe), "] ");
    d.push('<span class="', c, '">', ua(Aa(C(a.te))));
    b.Le && a.Qc && d.push("<br>", ua(Aa(a.Pc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.wb ? (jh(this), this.qc.add(b), mh(this, b)) : this.qc.add(b);
    this.hf && a.X.value >= bf.value && this.sc(j)
  }
};
function mh(a, b) {
  a.hb.push(b);
  t.clearTimeout(a.Hd);
  750 < z() - a.$c ? a.Fd() : a.Hd = t.setTimeout(y(a.Fd, a), 250)
}
s.Fd = function() {
  this.$c = z();
  if(lh(this)) {
    var a = this.s.document.body, a = a && 100 >= a.scrollHeight - (a.scrollTop + a.clientHeight);
    this.s.document.write(this.hb.join(""));
    this.hb.length = 0;
    a && this.s.scrollTo(0, 1E6)
  }
};
function nh(a) {
  for(var b = a.qc.H(), c = 0;c < b.length;c++) {
    mh(a, b[c])
  }
}
function jh(a) {
  if(!lh(a) && !a.Ed) {
    var b = ih(a.wa, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), e = Number(b[2]), b = Number(b[3]);
    a.Ed = j;
    a.s = window.open("", D ? a.wa.replace(/[\s\-\.\,]/g, "_") : a.wa, "width=" + e + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    !a.s && !a.Of && (alert("Logger popup was blocked"), a.Of = j);
    a.Ed = m;
    a.s && a.yc()
  }
}
s.bc = r("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
s.yc = function() {
  lh(this) || (this.s.document.open(), mh(this, "<style>" + this.bc() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.Se + "<br><small>Logger: " + this.wa + "</small></div><hr>"), nh(this))
};
function kh(a, b, c) {
  b += a.wa;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(z() + 2592E6)).toUTCString()
}
function ih(a, b, c) {
  var a = b + a, b = "" + document.cookie, d = b.indexOf(a + "=");
  return-1 != d ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, -1 == c ? b.length : c))) : c || ""
}
s.Kf = function() {
  lh(this) && kh(this, "dbg", (this.s.screenX || this.s.screenLeft || 0) + "," + (this.s.screenY || this.s.screenTop || 0) + "," + (this.s.outerWidth || 800) + "," + (this.s.outerHeight || 500))
};
function oh(a, b) {
  if(ph) {
    var c = qh(), d;
    for(d in c) {
      var e = d.replace("fancywindow.sel.", ""), e = Z(e), g = e.X, i = window.localStorage.getItem(d).toString();
      (!g || g.toString() != i) && e.kb(lf(i))
    }
  }
  gh.call(this, a, b)
}
B(oh, gh);
var ph;
a: {
  try {
    ph = !!window.localStorage.getItem;
    break a
  }catch(rh) {
  }
  ph = m
}
s = oh.prototype;
s.Fd = function() {
  this.$c = z();
  if(lh(this)) {
    for(var a = this.L.g("log"), b = 100 >= a.scrollHeight - (a.scrollTop + a.offsetHeight), c = 0;c < this.hb.length;c++) {
      var d = this.L.q("div", "logmsg");
      d.innerHTML = this.hb[c];
      a.appendChild(d)
    }
    this.hb.length = 0;
    this.He();
    b && (a.scrollTop = a.scrollHeight)
  }
};
s.yc = function() {
  if(lh(this)) {
    var a = this.s.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.wa + "</title><style>" + this.bc() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.wa + "</b></p><p>" + this.Se + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (D ? a.body : this.s).onresize = y(this.He, this);
    this.L = new kd(a);
    this.L.g("openbutton").onclick = y(this.Ff, this);
    this.L.g("closebutton").onclick = y(this.bf, this);
    this.L.g("clearbutton").onclick = y(this.af, this);
    this.L.g("exitbutton").onclick = y(this.jf, this);
    nh(this)
  }
};
s.Ff = function() {
  var a = this.L.g("optionsarea");
  a.innerHTML = "";
  for(var b = sh(), c = this.L, d = 0;d < b.length;d++) {
    var e = Z(b[d]), e = c.q("div", {}, th(this, "sel" + b[d], e.X ? e.X.name : "INHERIT"), c.q("span", {}, b[d] || "(root)"));
    a.appendChild(e)
  }
  this.L.g("options").style.display = "block";
  return m
};
function th(a, b, c) {
  for(var a = a.L, b = a.q("select", {id:b}), d = 0;d < jf.length;d++) {
    var e = jf[d], g = a.q("option", {}, e.name);
    c == e.name && (g.selected = j);
    b.appendChild(g)
  }
  b.appendChild(a.q("option", {selected:"INHERIT" == c}, "INHERIT"));
  return b
}
s.bf = function() {
  this.L.g("options").style.display = "none";
  for(var a = sh(), b = this.L, c = 0;c < a.length;c++) {
    var d = Z(a[c]), e = b.g("sel" + a[c]), e = e.options[e.selectedIndex].text;
    "INHERIT" == e ? d.kb(k) : d.kb(lf(e))
  }
  if(ph) {
    a = sh();
    b = qh();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], e = Z(a[c]).X, d in b ? e ? window.localStorage.getItem(d) != e.name && window.localStorage.setItem(d, e.name) : window.localStorage.removeItem(d) : e && window.localStorage.setItem(d, e.name)
    }
  }
  return m
};
s.He = function() {
  var a = this.L, b = a.g("log"), c = a.g("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.M.body.offsetHeight - c.offsetHeight - (D ? 4 : 0) + "px"
};
s.jf = function() {
  this.sc(m);
  this.s && this.s.close()
};
s.bc = function() {
  return oh.e.bc.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function qh() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != k && 0 == d.lastIndexOf("fancywindow.sel.", 0) && (a[d] = j)
  }
  return a
}
function sh() {
  var a = eb(nf);
  a.sort();
  return a
}
;function uh() {
}
uh.prototype.Tb = k;
var vh;
function wh() {
}
B(wh, uh);
function xh(a) {
  return(a = yh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function zh(a) {
  var b = {};
  yh(a) && (b[0] = j, b[1] = j);
  return b
}
wh.prototype.Vc = k;
function yh(a) {
  if(!a.Vc && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Vc = d
      }catch(e) {
      }
    }
    f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Vc
}
vh = new wh;
function Ah(a) {
  this.headers = new J;
  this.pb = a || k
}
B(Ah, Ac);
Ah.prototype.a = Z("goog.net.XhrIo");
var Bh = /^https?$/i;
s = Ah.prototype;
s.oa = m;
s.i = k;
s.Ac = k;
s.ad = "";
s.le = "";
s.Cb = "";
s.Nc = m;
s.gc = m;
s.Wc = m;
s.Ka = m;
s.wc = 0;
s.Ra = k;
s.Ie = "";
s.$f = m;
s.send = function(a, b, c, d) {
  this.i && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.ad = a;
  this.Cb = "";
  this.le = b;
  this.Nc = m;
  this.oa = j;
  this.i = this.pb ? xh(this.pb) : xh(vh);
  this.Ac = this.pb ? this.pb.Tb || (this.pb.Tb = zh(this.pb)) : vh.Tb || (vh.Tb = zh(vh));
  this.i.onreadystatechange = y(this.xe, this);
  try {
    X(this.a, Ch(this, "Opening Xhr")), this.Wc = j, this.i.open(b, a, j), this.Wc = m
  }catch(e) {
    X(this.a, Ch(this, "Error opening Xhr: " + e.message));
    Dh(this, e);
    return
  }
  var a = c || "", g = this.headers.K();
  d && yb(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.U("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  yb(g, function(a, b) {
    this.i.setRequestHeader(b, a)
  }, this);
  this.Ie && (this.i.responseType = this.Ie);
  "withCredentials" in this.i && (this.i.withCredentials = this.$f);
  try {
    this.Ra && (Bc.clearTimeout(this.Ra), this.Ra = k), 0 < this.wc && (X(this.a, Ch(this, "Will abort after " + this.wc + "ms if incomplete")), this.Ra = Bc.setTimeout(y(this.Wf, this), this.wc)), X(this.a, Ch(this, "Sending request")), this.gc = j, this.i.send(a), this.gc = m
  }catch(i) {
    X(this.a, Ch(this, "Send error: " + i.message)), Dh(this, i)
  }
};
s.Wf = function() {
  "undefined" != typeof ba && this.i && (this.Cb = "Timed out after " + this.wc + "ms, aborting", X(this.a, Ch(this, this.Cb)), this.dispatchEvent("timeout"), this.abort(8))
};
function Dh(a, b) {
  a.oa = m;
  a.i && (a.Ka = j, a.i.abort(), a.Ka = m);
  a.Cb = b;
  Eh(a);
  Fh(a)
}
function Eh(a) {
  a.Nc || (a.Nc = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
s.abort = function() {
  this.i && this.oa && (X(this.a, Ch(this, "Aborting")), this.oa = m, this.Ka = j, this.i.abort(), this.Ka = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Fh(this))
};
s.c = function() {
  this.i && (this.oa && (this.oa = m, this.Ka = j, this.i.abort(), this.Ka = m), Fh(this, j));
  Ah.e.c.call(this)
};
s.xe = function() {
  !this.Wc && !this.gc && !this.Ka ? this.Ef() : Gh(this)
};
s.Ef = function() {
  Gh(this)
};
function Gh(a) {
  if(a.oa && "undefined" != typeof ba) {
    if(a.Ac[1] && 4 == a.va() && 2 == Hh(a)) {
      X(a.a, Ch(a, "Local request error detected and ignored"))
    }else {
      if(a.gc && 4 == a.va()) {
        Bc.setTimeout(y(a.xe, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.va()) {
          X(a.a, Ch(a, "Request complete"));
          a.oa = m;
          var b = Hh(a), c;
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
              b = ("" + a.ad).match(ab)[1] || k, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !Bh.test(b ? b.toLowerCase() : "")
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
              X(a.a, "Can not get status: " + e.message), d = ""
            }
            a.Cb = d + " [" + Hh(a) + "]";
            Eh(a)
          }
          Fh(a)
        }
      }
    }
  }
}
function Fh(a, b) {
  if(a.i) {
    var c = a.i, d = a.Ac[0] ? da : k;
    a.i = k;
    a.Ac = k;
    a.Ra && (Bc.clearTimeout(a.Ra), a.Ra = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(e) {
      V(a.a, "Problem encountered resetting onreadystatechange: " + e.message)
    }
  }
}
s.he = function() {
  return!!this.i
};
s.va = function() {
  return this.i ? this.i.readyState : 0
};
function Hh(a) {
  try {
    return 2 < a.va() ? a.i.status : -1
  }catch(b) {
    return W(a.a, "Can not get status: " + b.message), -1
  }
}
s.getResponseHeader = function(a) {
  return this.i && 4 == this.va() ? this.i.getResponseHeader(a) : h
};
function Ch(a, b) {
  return b + " [" + a.le + " " + a.ad + " " + Hh(a) + "]"
}
;var Ih = !(D || E && !F("420+"));
function Jh(a, b) {
  this.xc = a;
  this.Y = b
}
B(Jh, L);
s = Jh.prototype;
s.m = k;
s.Da = -1;
s.Wd = m;
s.ee = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Kh(a) {
  var b = ng(a.Od), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.Y, c, b), 1 != b && a.b()) : a.b()
}
s.vf = function() {
  Kh(this);
  if(!this.ba) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.Y);
    this.b()
  }
};
s.If = function() {
  var a = t.parent;
  if(a) {
    this.Da = this.m.va();
    if(2 <= this.Da && !this.Wd) {
      for(var b = new J, c = this.ee.length;c--;) {
        var d = this.ee[c];
        try {
          b.set(d, this.m.i.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.u() && (this.Wd = j, a.__XHRMaster_ongotheaders(this.Y, Db(b)), this.ba)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.Y, this.Da);
    Ih && 3 == this.Da && Kh(this)
  }else {
    this.b()
  }
};
s.cd = function(a, b, c) {
  this.m = new Ah;
  N(this.m, "readystatechange", y(this.If, this));
  N(this.m, "complete", y(this.vf, this));
  this.m.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Od = new mg(this.m.i, 1048576)
};
s.c = function() {
  Jh.e.c.call(this);
  delete this.Od;
  this.m && this.m.b();
  delete this.xc.Ob[this.Y];
  delete this.xc
};
function Lh() {
  this.Ob = {}
}
B(Lh, L);
Lh.prototype.zf = function(a, b, c, d) {
  var e = new Jh(this, a);
  this.Ob[a] = e;
  e.cd(b, c, d)
};
Lh.prototype.ff = function(a) {
  (a = this.Ob[a]) && a.b()
};
Lh.prototype.c = function() {
  Lh.e.c.call(this);
  for(var a = db(this.Ob);a.length;) {
    a.pop().b()
  }
  delete this.Ob
};
var Mh = new Lh;
t.__XHRSlave_makeRequest = y(Mh.zf, Mh);
t.__XHRSlave_dispose = y(Mh.ff, Mh);
var Nh = Z("cw.net.demo");
function Oh() {
}
Oh.prototype.Vd = function() {
  return Boolean(Number((new K(document.location)).I.get("httpStreaming", "0"))) ? 2 : 1
};
var Ph, Qh = Z("ljstream.logger");
window.onerror = function(a, b, c) {
  V(Qh, "window.onerror: message: " + P(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Rh() {
}
Rh.prototype.Tf = function(a, b) {
  Qh.info("streamReset: reasonString=" + P(a) + ", applicationLevel=" + b);
  Th("Disconnected from server.  Try reloading this page.");
  Uh = k
};
function Vh(a) {
  Qh.info("Sending preferences to server");
  Gg(a.C, [Wc(["SetPreferences", {include_russian_posts:Q("include_russian_posts").checked}])])
}
Rh.prototype.Uf = function(a) {
  var a = Uc(a), b = a[1];
  if("NewPost" == a[0]) {
    var a = b.title, c = b.url, b = b.body;
    (a = ra(a)) || (a = "[No title]");
    var d = Yg(C(b)), e = document, b = e.createElement("div");
    D ? (b.innerHTML = "<br>" + d, b.removeChild(b.firstChild)) : b.innerHTML = d;
    if(1 == b.childNodes.length) {
      b = b.removeChild(b.firstChild)
    }else {
      for(d = e.createDocumentFragment();b.firstChild;) {
        d.appendChild(b.firstChild)
      }
      b = d
    }
    a = qd("span", {}, qd("a", {href:c, "class":"ljpost-title-link"}, a), qd("span", {}, "\u00a0"), b);
    Wh(a)
  }
};
Rh.prototype.reset = function(a) {
  Qh.info("resetting with reason: " + a);
  this.C.reset(a)
};
var Uh = k, Xh = new Qc(t.window);
function Th(a) {
  a = qd("span", {"class":"important-message"}, a);
  Wh(a)
}
function Yh() {
  Uh && (Uh.reset("idle timeout fired"), Uh = k, Th("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var Zh = k;
function $h() {
  Zh != k && Xh.F.clearTimeout(Zh);
  Uh && (Zh = Xh.F.setTimeout(Yh, 6E5))
}
N(window, ["click", "focus", "keydown", "keypress"], $h, j);
var pd = new kd, ai = 0;
function Wh(a) {
  a = qd("div", {"class":"row-" + (0 == ai % 2 ? "even" : "odd")}, qd("nobr", {}, a));
  Q("ljstream-container-inner").appendChild(a);
  ai += 1;
  var b;
  if(b = Ph) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !E && "CSS1Compat" == d.compatMode ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new bd(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = od().height;
    b = !(a + b <= c + d)
  }
  b && (a = od().height, window.scrollBy(0, Math.round(a / 2) + 80))
}
function bi() {
  N(t, "load", function() {
    window.scrollTo(0, 0)
  });
  N(Q("include_russian_posts"), "click", function() {
    Vh(Uh)
  });
  Ph = j;
  N(Q("automatic_scroll"), "click", function(a) {
    Ph = a.target.checked
  });
  var a = new pe("Clear posts");
  ee(a, "clear-posts-button");
  Md(a, Q("prefs"));
  N(a, "action", function() {
    Q("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = Q("ljstream-container");
  a.style.marginTop = Q("demo-header").offsetHeight + "px";
  Q("demo-header").style.width = "9000px";
  var b = qd("div", {id:"ljstream-container-inner"});
  a.appendChild(b)
}
function ci() {
  qf().kb(hf);
  if("1" == (new K(document.location)).I.get("logging")) {
    var a = new oh("main");
    a.sc(j);
    a.La()
  }
  Qh.info("Logger works.");
  bi();
  a = new Oh;
  Uh = new Rh;
  $h();
  var b = (new K(document.location)).I, c = "http" != b.get("mode");
  if((b = Boolean(Number(b.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    W(Nh, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), b = m
  }
  var d = b, b = new K(document.location);
  c ? c = new tg("/_minerva/", b.V, t.__demo_mainSocketPort) : (d ? (c = t.__demo_shared_domain, v(c) || f(Error("domain was " + P(c) + "; expected a string.")), b = b.K(), Gb(b, "_____random_____." + c)) : b = b.K(), Ib(b, "/_minerva/"), Jb(b, "", h), c = new vg(b.toString().replace("_____random_____", "%random%")));
  a = new Ag(c, a, Xh);
  c = Uh;
  a.kd = y(c.Uf, c);
  a.onreset = y(c.Tf, c);
  Uh.C = a;
  c = Uh;
  Gg(c.C, ["subprotocol:ljstream"]);
  Vh(c);
  a.start()
}
var di = ["__ljstream_init"], ei = t;
!(di[0] in ei) && ei.execScript && ei.execScript("var " + di[0]);
for(var fi;di.length && (fi = di.shift());) {
  !di.length && ga(ci) ? ei[fi] = ci : ei = ei[fi] ? ei[fi] : ei[fi] = {}
}
;})();
