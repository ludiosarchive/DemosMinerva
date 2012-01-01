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
  a = fa(a);
  return"object" == a || "array" == a || "function" == a
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
;function C(a) {
  this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
B(C, Error);
C.prototype.name = "CustomError";
function qa(a, b) {
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
function D(a) {
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
;function Ca(a, b) {
  b.unshift(a);
  C.call(this, qa.apply(k, b));
  b.shift()
}
B(Ca, C);
Ca.prototype.name = "AssertionError";
function Da(a, b) {
  f(new Ca("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var Ea = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Fa(a, b) {
  var c = a.match(Ea), d = b.match(Ea);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Ga(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
function Ha(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Ia(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Ja = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function Ka(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < Ja.length;g++) {
      c = Ja[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var E = Array.prototype, La = E.indexOf ? function(a, b, c) {
  return E.indexOf.call(a, b, c)
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
}, Ma = E.forEach ? function(a, b, c) {
  E.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
}, Na = E.map ? function(a, b, c) {
  return E.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), g = v(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in g && (e[i] = b.call(c, g[i], i, a))
  }
  return e
}, Oa = E.some ? function(a, b, c) {
  return E.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && b.call(c, e[g], g, a)) {
      return j
    }
  }
  return m
}, Pa = E.every ? function(a, b, c) {
  return E.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && !b.call(c, e[g], g, a)) {
      return m
    }
  }
  return j
};
function Qa(a, b) {
  return 0 <= La(a, b)
}
function Ra(a, b) {
  var c = La(a, b);
  0 <= c && E.splice.call(a, c, 1)
}
function Sa(a) {
  return E.concat.apply(E, arguments)
}
function Ta(a) {
  if(u(a)) {
    return Sa(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
}
function Ua(a, b) {
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
function Va(a, b, c, d) {
  E.splice.apply(a, Wa(arguments, 1))
}
function Wa(a, b, c) {
  return 2 >= arguments.length ? E.slice.call(a, b) : E.slice.call(a, b, c)
}
function Xa(a, b) {
  E.sort.call(a, b || Ya)
}
function Ya(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function Za(a) {
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
function $a(a) {
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
  return Ha(a)
}
function ab(a) {
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
    return Ia(a)
  }
}
function bb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ha(a) || v(a)) {
      Ma(a, b, c)
    }else {
      for(var d = ab(a), e = $a(a), g = e.length, i = 0;i < g;i++) {
        b.call(c, e[i], d && d[i], a)
      }
    }
  }
}
function cb(a, b) {
  if("function" == typeof a.every) {
    return a.every(b, h)
  }
  if(ha(a) || v(a)) {
    return Pa(a, b, h)
  }
  for(var c = ab(a), d = $a(a), e = d.length, g = 0;g < e;g++) {
    if(!b.call(h, d[g], c && c[g], a)) {
      return m
    }
  }
  return j
}
;function F(a, b) {
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
s = F.prototype;
s.f = 0;
s.u = o("f");
s.H = function() {
  db(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.r[this.j[b]])
  }
  return a
};
s.da = function() {
  db(this);
  return this.j.concat()
};
s.U = function(a) {
  return eb(this.r, a)
};
s.Wb = function(a) {
  for(var b = 0;b < this.j.length;b++) {
    var c = this.j[b];
    if(eb(this.r, c) && this.r[c] == a) {
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
  var c = b || fb;
  db(this);
  for(var d, e = 0;d = this.j[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function fb(a, b) {
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
  return eb(this.r, a) ? (delete this.r[a], this.f--, this.j.length > 2 * this.f && db(this), j) : m
};
function db(a) {
  if(a.f != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      eb(a.r, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.f != a.j.length) {
    for(var e = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], eb(e, d) || (a.j[c++] = d, e[d] = 1), b++
    }
    a.j.length = c
  }
}
s.get = function(a, b) {
  return eb(this.r, a) ? this.r[a] : b
};
s.set = function(a, b) {
  eb(this.r, a) || (this.f++, this.j.push(a));
  this.r[a] = b
};
s.Cc = function(a) {
  var b;
  a instanceof F ? (b = a.da(), a = a.H()) : (b = Ia(a), a = Ha(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
s.K = function() {
  return new F(this)
};
function gb(a) {
  db(a);
  for(var b = {}, c = 0;c < a.j.length;c++) {
    var d = a.j[c];
    b[d] = a.r[d]
  }
  return b
}
function eb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function H(a, b) {
  var c;
  a instanceof H ? (this.jb(b == k ? a.fa : b), hb(this, a.ha), ib(this, a.Sa), jb(this, a.V), kb(this, a.Aa), lb(this, a.S), mb(this, a.I.K()), nb(this, a.Ia)) : a && (c = ("" + a).match(Ea)) ? (this.jb(!!b), hb(this, c[1] || "", j), ib(this, c[2] || "", j), jb(this, c[3] || "", j), kb(this, c[4]), lb(this, c[5] || "", j), mb(this, c[6] || "", j), nb(this, c[7] || "", j)) : (this.jb(!!b), this.I = new ob(k, this, this.fa))
}
s = H.prototype;
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
  this.ha && a.push(pb(this.ha, qb), ":");
  this.V && (a.push("//"), this.Sa && a.push(pb(this.Sa, qb), "@"), a.push(v(this.V) ? encodeURIComponent(this.V) : k), this.Aa != k && a.push(":", "" + this.Aa));
  this.S && (this.V && "/" != this.S.charAt(0) && a.push("/"), a.push(pb(this.S, "/" == this.S.charAt(0) ? rb : sb)));
  var b = "" + this.I;
  b && a.push("?", b);
  this.Ia && a.push("#", pb(this.Ia, tb));
  return this.$ = a.join("")
};
s.K = function() {
  var a = this.ha, b = this.Sa, c = this.V, d = this.Aa, e = this.S, g = this.I.K(), i = this.Ia, l = new H(k, this.fa);
  a && hb(l, a);
  b && ib(l, b);
  c && jb(l, c);
  d && kb(l, d);
  e && lb(l, e);
  g && mb(l, g);
  i && nb(l, i);
  return l
};
function hb(a, b, c) {
  ub(a);
  delete a.$;
  a.ha = c ? b ? decodeURIComponent(b) : "" : b;
  a.ha && (a.ha = a.ha.replace(/:$/, ""))
}
function ib(a, b, c) {
  ub(a);
  delete a.$;
  a.Sa = c ? b ? decodeURIComponent(b) : "" : b
}
function jb(a, b, c) {
  ub(a);
  delete a.$;
  a.V = c ? b ? decodeURIComponent(b) : "" : b
}
function kb(a, b) {
  ub(a);
  delete a.$;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && f(Error("Bad port number " + b)), a.Aa = b) : a.Aa = k
}
function lb(a, b, c) {
  ub(a);
  delete a.$;
  a.S = c ? b ? decodeURIComponent(b) : "" : b
}
function mb(a, b, c) {
  ub(a);
  delete a.$;
  b instanceof ob ? (a.I = b, a.I.Cd = a, a.I.jb(a.fa)) : (c || (b = pb(b, vb)), a.I = new ob(b, a, a.fa))
}
function nb(a, b, c) {
  ub(a);
  delete a.$;
  a.Ia = c ? b ? decodeURIComponent(b) : "" : b
}
function ub(a) {
  a.yf && f(Error("Tried to modify a read-only Uri"))
}
s.jb = function(a) {
  this.fa = a;
  this.I && this.I.jb(a);
  return this
};
function wb(a) {
  return a instanceof H ? a.K() : new H(a, h)
}
var xb = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function pb(a, b) {
  var c = k;
  v(a) && (c = a, xb.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, yb)));
  return c
}
function yb(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var qb = /[#\/\?@]/g, sb = /[\#\?:]/g, rb = /[\#\?]/g, vb = /[\#\?@]/g, tb = /#/g;
function ob(a, b, c) {
  this.ja = a || k;
  this.Cd = b || k;
  this.fa = !!c
}
function zb(a) {
  if(!a.k && (a.k = new F, a.f = 0, a.ja)) {
    for(var b = a.ja.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, g = k;
      0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = Ab(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
s = ob.prototype;
s.k = k;
s.f = k;
s.u = function() {
  zb(this);
  return this.f
};
s.add = function(a, b) {
  zb(this);
  Bb(this);
  a = Ab(this, a);
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
  zb(this);
  a = Ab(this, a);
  if(this.k.U(a)) {
    Bb(this);
    var b = this.k.get(a);
    u(b) ? this.f -= b.length : this.f--;
    return this.k.remove(a)
  }
  return m
};
s.clear = function() {
  Bb(this);
  this.k && this.k.clear();
  this.f = 0
};
s.Ma = function() {
  zb(this);
  return 0 == this.f
};
s.U = function(a) {
  zb(this);
  a = Ab(this, a);
  return this.k.U(a)
};
s.Wb = function(a) {
  var b = this.H();
  return Qa(b, a)
};
s.da = function() {
  zb(this);
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
  zb(this);
  if(a) {
    if(a = Ab(this, a), this.U(a)) {
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
      u(d) ? Ua(a, d) : a.push(d)
    }
  }
  return a
};
s.set = function(a, b) {
  zb(this);
  Bb(this);
  a = Ab(this, a);
  if(this.U(a)) {
    var c = this.k.get(a);
    u(c) ? this.f -= c.length : this.f--
  }
  this.k.set(a, b);
  this.f++;
  return this
};
s.get = function(a, b) {
  zb(this);
  a = Ab(this, a);
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
function Bb(a) {
  delete a.Wa;
  delete a.ja;
  a.Cd && delete a.Cd.$
}
s.K = function() {
  var a = new ob;
  this.Wa && (a.Wa = this.Wa);
  this.ja && (a.ja = this.ja);
  this.k && (a.k = this.k.K());
  return a
};
function Ab(a, b) {
  var c = "" + b;
  a.fa && (c = c.toLowerCase());
  return c
}
s.jb = function(a) {
  a && !this.fa && (zb(this), Bb(this), bb(this.k, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.fa = a
};
s.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    bb(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
function Cb() {
  return j
}
;var Db, Eb, Fb, Gb, Hb;
function Ib() {
  return t.navigator ? t.navigator.userAgent : k
}
Hb = Gb = Fb = Eb = Db = m;
var Jb;
if(Jb = Ib()) {
  var Kb = t.navigator;
  Db = 0 == Jb.indexOf("Opera");
  Eb = !Db && -1 != Jb.indexOf("MSIE");
  Gb = (Fb = !Db && -1 != Jb.indexOf("WebKit")) && -1 != Jb.indexOf("Mobile");
  Hb = !Db && !Fb && "Gecko" == Kb.product
}
var Lb = Db, I = Eb, Mb = Hb, J = Fb, Nb = Gb, Ob = t.navigator, Pb = -1 != (Ob && Ob.platform || "").indexOf("Mac"), Qb;
a: {
  var Rb = "", Sb;
  if(Lb && t.opera) {
    var Tb = t.opera.version, Rb = "function" == typeof Tb ? Tb() : Tb
  }else {
    if(Mb ? Sb = /rv\:([^\);]+)(\)|;)/ : I ? Sb = /MSIE\s+([^\);]+)(\)|;)/ : J && (Sb = /WebKit\/(\S+)/), Sb) {
      var Ub = Sb.exec(Ib()), Rb = Ub ? Ub[1] : ""
    }
  }
  if(I) {
    var Vb, Wb = t.document;
    Vb = Wb ? Wb.documentMode : h;
    if(Vb > parseFloat(Rb)) {
      Qb = "" + Vb;
      break a
    }
  }
  Qb = Rb
}
var Xb = {};
function K(a) {
  return Xb[a] || (Xb[a] = 0 <= Ba(Qb, a))
}
var Yb = {};
function Zb() {
  return Yb[9] || (Yb[9] = I && document.documentMode && 9 <= document.documentMode)
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
var bc = !I || Zb(), cc = !I || Zb(), dc = I && !K("8");
!J || K("528");
Mb && K("1.9b") || I && K("8") || Lb && K("9.5") || J && K("528");
!Mb || K("8");
var ec = {ig:"click", ng:"dblclick", Hg:"mousedown", Lg:"mouseup", Kg:"mouseover", Jg:"mouseout", Ig:"mousemove", Vg:"selectstart", Cg:"keypress", Bg:"keydown", Dg:"keyup", gg:"blur", vg:"focus", og:"deactivate", wg:I ? "focusin" : "DOMFocusIn", xg:I ? "focusout" : "DOMFocusOut", hg:"change", Ug:"select", Wg:"submit", Ag:"input", Qg:"propertychange", sg:"dragstart", pg:"dragenter", rg:"dragover", qg:"dragleave", tg:"drop", $g:"touchstart", Zg:"touchmove", Yg:"touchend", Xg:"touchcancel", kg:"contextmenu", 
ug:"error", zg:"help", Eg:"load", Fg:"losecapture", Rg:"readystatechange", Sg:"resize", Tg:"scroll", bh:"unload", yg:"hashchange", Mg:"pagehide", Ng:"pageshow", Pg:"popstate", lg:"copy", Og:"paste", mg:"cut", dg:"beforecopy", eg:"beforecut", fg:"beforepaste", Gg:"message", jg:"connect", ah:J ? "webkitTransitionEnd" : Lb ? "oTransitionEnd" : "transitionend"};
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
    if(Mb) {
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
  this.offsetX = J || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = J || a.offsetY !== h ? a.offsetY : a.layerY;
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
  this.ld = Pb ? a.metaKey : a.ctrlKey;
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
    Ra(i, b);
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
    Ga(nc, function(a) {
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
        Ka(a, d)
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
function Dc(a, b) {
  this.Ub = [];
  this.Id = a;
  this.Pd = b || k
}
s = Dc.prototype;
s.ta = m;
s.zb = m;
s.Fb = 0;
s.td = m;
s.$e = m;
s.Fc = 0;
s.cancel = function(a) {
  if(this.ta) {
    this.Jb instanceof Dc && this.Jb.cancel()
  }else {
    if(this.B) {
      var b = this.B;
      delete this.B;
      a ? b.cancel(a) : (b.Fc--, 0 >= b.Fc && b.cancel())
    }
    this.Id ? this.Id.call(this.Pd, this) : this.td = j;
    this.ta || this.xb(new Ec)
  }
};
s.Ld = function(a, b) {
  Fc(this, a, b);
  this.Fb--;
  0 == this.Fb && this.ta && Gc(this)
};
function Fc(a, b, c) {
  a.ta = j;
  a.Jb = c;
  a.zb = !b;
  Gc(a)
}
function Hc(a) {
  a.ta && (a.td || f(new Ic), a.td = m)
}
s.aa = function(a) {
  Hc(this);
  Fc(this, j, a)
};
s.xb = function(a) {
  Hc(this);
  Fc(this, m, a)
};
function Jc(a, b) {
  Kc(a, b, k, h)
}
function Lc(a, b) {
  Kc(a, k, b, h)
}
function Kc(a, b, c, d) {
  a.Ub.push([b, c, d]);
  a.ta && Gc(a)
}
function Mc(a, b) {
  Kc(a, b, b, h)
}
function Nc(a) {
  return Oa(a.Ub, function(a) {
    return x(a[1])
  })
}
function Gc(a) {
  a.Bd && a.ta && Nc(a) && (t.clearTimeout(a.Bd), delete a.Bd);
  a.B && (a.B.Fc--, delete a.B);
  for(var b = a.Jb, c = m, d = m;a.Ub.length && 0 == a.Fb;) {
    var e = a.Ub.shift(), g = e[0], i = e[1], e = e[2];
    if(g = a.zb ? i : g) {
      try {
        var l = g.call(e || a.Pd, b);
        ga(l) && (a.zb = a.zb && (l == b || l instanceof Error), a.Jb = b = l);
        b instanceof Dc && (d = j, a.Fb++)
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
  var b = new Dc;
  b.aa(a);
  return b
}
function Pc(a) {
  var b = new Dc;
  b.xb(a);
  return b
}
function Ic() {
  C.call(this)
}
B(Ic, C);
Ic.prototype.message = "Already called";
function Ec() {
  C.call(this)
}
B(Ec, C);
Ec.prototype.message = "Deferred was cancelled";
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
  var d = La(c, a);
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
                    for(var d = Ia(a).concat(Ja), e = {}, i = g = 0;i < d.length;) {
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
  var c = ed(a), d = Wa(arguments, 1), e;
  e = c;
  for(var g = 0, i = 0;i < d.length;i++) {
    Qa(e, d[i]) || (e.push(d[i]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function gd(a, b) {
  var c = ed(a), d = Wa(arguments, 1), e;
  e = c;
  for(var g = 0, i = 0;i < e.length;i++) {
    Qa(d, e[i]) && (Va(e, i--, 1), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
;var hd = !I || Zb();
!Mb && !I || I && Zb() || Mb && K("1.9.1");
var id = I && !K("9");
function jd(a) {
  return a ? new kd(ld(a)) : dd || (dd = new kd)
}
function Q(a) {
  return v(a) ? document.getElementById(a) : a
}
function md(a, b) {
  Ga(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in nd ? a.setAttribute(nd[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var nd = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function od() {
  var a = pd.M.parentWindow || pd.M.defaultView || window, b = a.document;
  if(J && !K("500") && !Nb) {
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
    d.name && c.push(' name="', D(d.name), '"');
    if(d.type) {
      c.push(' type="', D(d.type), '"');
      var e = {};
      Ka(e, d);
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
    ha(g) && !(ja(g) && 0 < g.nodeType) ? Ma(td(g) ? Ta(g) : g, e) : e(g)
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
var Cd = Mb ? "MozUserSelect" : J ? "WebkitUserSelect" : k;
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
    b && (b = b.key, uc(b), Ra(a.j, b))
  }
  return a
}
Dd.prototype.nd = function() {
  Ma(this.j, uc);
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
  a.qa && Ma(a.qa, b, h)
}
s.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : Kd(a), a = this.tb && c ? (c in this.tb ? this.tb[c] : h) || k : k;
    if(c && a) {
      var d = this.tb;
      c in d && delete d[c];
      Ra(this.qa, a);
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
    if(I && !K("7")) {
      var d = Sd(ed(a), b);
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
  var c = !b, d = I || Lb ? a.getElementsByTagName("*") : k;
  if(Cd) {
    if(c = c ? "none" : "", a.style[Cd] = c, d) {
      for(var e = 0, g;g = d[e];e++) {
        g.style[Cd] = c
      }
    }
  }else {
    if(I || Lb) {
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
    var e = Td(this, b);
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
    e.push(Td(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.ca) && d.push.apply(d, c);
  I && !K("7") && d.push.apply(d, Sd(d));
  return d
}
function Sd(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Ma([], function(d) {
    Pa(d, pa(Qa, a)) && (!b || Qa(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Td(a, b) {
  if(!a.Jd) {
    var c = a.ua();
    a.Jd = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Jd[b]
}
;function Ud(a, b) {
  a || f(Error("Invalid class name " + a));
  x(b) || f(Error("Invalid decorator function " + b))
}
var Vd = {};
function Wd(a, b, c, d, e) {
  if(!I && (!J || !K("525"))) {
    return j
  }
  if(Pb && e) {
    return Xd(a)
  }
  if(e && !d || !c && (17 == b || 18 == b) || I && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(I && Zb());
    case 27:
      return!J
  }
  return Xd(a)
}
function Xd(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || J && 0 == a) {
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
59:186}, ce = I || J && K("525");
s = Yd.prototype;
s.sf = function(a) {
  if(J && (17 == this.ya && !a.ctrlKey || 18 == this.ya && !a.altKey)) {
    this.xa = this.ya = -1
  }
  ce && !Wd(a.keyCode, this.ya, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.xa = Mb && a.keyCode in be ? be[a.keyCode] : a.keyCode
};
s.uf = function() {
  this.xa = this.ya = -1
};
s.handleEvent = function(a) {
  var b = a.ka, c, d;
  I && "keypress" == a.type ? (c = this.xa, d = 13 != c && 27 != c ? b.keyCode : 0) : J && "keypress" == a.type ? (c = this.xa, d = 0 <= b.charCode && 63232 > b.charCode && Xd(c) ? b.charCode : 0) : Lb ? (c = this.xa, d = Xd(c) ? b.keyCode : 0) : (c = b.keyCode || this.xa, d = b.charCode || 0, Pb && 63 == d && !c && (c = 191));
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
      if(d = Vd[d]) {
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
  b && (a.ca ? Qa(a.ca, b) || a.ca.push(b) : a.ca = [b], a.v.vb(a, b, j))
}
s.vb = function(a, b) {
  b ? ee(this, a) : a && this.ca && (Ra(this.ca, a), 0 == this.ca.length && (this.ca = k), this.v.vb(this, a, m))
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
  b ? (R(R(R(R(c, d, "mouseover", a.be), d, "mousedown", a.$d), d, "mouseup", a.ce), d, "mouseout", a.ae), I && R(c, d, "dblclick", a.Zd)) : (Fd(Fd(Fd(Fd(c, d, "mouseover", a.be), d, "mousedown", a.$d), d, "mouseup", a.ce), d, "mouseout", a.ae), I && Fd(c, d, "dblclick", a.Zd))
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
      a = Na(a, zd).join("")
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
  if(this.isEnabled() && (T(this, 2) && ie(this, j), lc(a) && (!J || !Pb || !a.ctrlKey))) {
    T(this, 4) && this.setActive(j), this.v.je(this) && this.Ja().focus()
  }
  !this.Dc && lc(a) && (!J || !Pb || !a.ctrlKey) && a.preventDefault()
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
Vd[je] = Od;
Ud("goog-control", function() {
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
Ud("goog-button", function() {
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
Ud("goog-custom-button", function() {
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
;/*

 linkify - v0.3 - 6/27/2009
 http://benalman.com/code/test/js-linkify/

 Copyright (c) 2009 "Cowboy" Ben Alman
 Licensed under the MIT license
 http://benalman.com/about/license/

 Some regexps adapted from http://userscripts.org/scripts/review/7122
*/
var we, xe, ye, ze;
we = RegExp("(?:\\b[a-z\\d.-]+://[^<>\\s]+|\\b(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:[;/][^#?<>\\s]*)?(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w)|(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w))", 
"ig");
xe = /^[a-z\d.-]+:\/\//i;
ye = {"'":"`", ">":"<", ")":"(", "]":"[", "}":"{", "\u00bb":"\u00ab", "\u203a":"\u2039"};
ze = {aa:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, De:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
function Ae(a) {
  var b;
  b = b || {};
  var c = [], d, e;
  for(e in ze) {
    ga(b[e]) || (b[e] = ze[e])
  }
  for(;e = we.exec(a);) {
    e = e[0];
    var g = we.lastIndex, i = g - e.length;
    if(!/[\/:]/.test(a.charAt(i - 1))) {
      do {
        var l = e, n = e.substr(-1), p = ye[n];
        if(p && (p = e.match(RegExp("\\" + p + "(?!$)", "g")), n = e.match(RegExp("\\" + n, "g")), (p ? p.length : 0) < (n ? n.length : 0))) {
          e = e.substr(0, e.length - 1), g--
        }
        b.De && (e = e.replace(b.De, function(a) {
          g -= a.length;
          return""
        }))
      }while(e.length && e !== l);
      l = e;
      xe.test(l) || (l = (-1 !== l.indexOf("@") ? !l.indexOf("mailto:") ? "" : "mailto:" : !l.indexOf("irc.") ? "irc://" : !l.indexOf("ftp.") ? "ftp://" : "http://") + l);
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
;function Be(a) {
  this.r = new F;
  a && this.Cc(a)
}
function Ce(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ka(a) : b.substr(0, 1) + a
}
s = Be.prototype;
s.u = function() {
  return this.r.u()
};
s.add = function(a) {
  this.r.set(Ce(a), a)
};
s.Cc = function(a) {
  for(var a = $a(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
s.nd = function(a) {
  for(var a = $a(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
s.remove = function(a) {
  return this.r.remove(Ce(a))
};
s.clear = function() {
  this.r.clear()
};
s.Ma = function() {
  return this.r.Ma()
};
s.contains = function(a) {
  return this.r.U(Ce(a))
};
s.H = function() {
  return this.r.H()
};
s.K = function() {
  return new Be(this)
};
s.o = function(a) {
  return this.u() == Za(a) && De(this, a)
};
function De(a, b) {
  var c = Za(b);
  if(a.u() > c) {
    return m
  }
  !(b instanceof Be) && 5 < c && (b = new Be(b));
  return cb(a, function(a) {
    if("function" == typeof b.contains) {
      a = b.contains(a)
    }else {
      if("function" == typeof b.Wb) {
        a = b.Wb(a)
      }else {
        if(ha(b) || v(b)) {
          a = Qa(b, a)
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
;function Ee(a) {
  return Fe(a || arguments.callee.caller, [])
}
function Fe(a, b) {
  var c = [];
  if(Qa(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Ge(a) + "(");
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
            g = (g = Ge(g)) ? g : "[fn]";
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
        c.push(Fe(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Ge(a) {
  if(He[a]) {
    return He[a]
  }
  a = "" + a;
  if(!He[a]) {
    var b = /function ([^\(]+)/.exec(a);
    He[a] = b ? b[1] : "[Anonymous]"
  }
  return He[a]
}
var He = {};
function Ie(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Ie.prototype.Qc = k;
Ie.prototype.Pc = k;
var Je = 0;
Ie.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || Je++;
  this.Ne = d || z();
  this.X = a;
  this.te = b;
  this.pe = c;
  delete this.Qc;
  delete this.Pc
};
Ie.prototype.kb = aa("X");
function Ke(a) {
  this.Cf = a
}
Ke.prototype.B = k;
Ke.prototype.X = k;
Ke.prototype.qa = k;
Ke.prototype.Bb = k;
function U(a, b) {
  this.name = a;
  this.value = b
}
U.prototype.toString = o("name");
var Le = new U("SHOUT", 1200), Me = new U("SEVERE", 1E3), Ne = new U("WARNING", 900), Oe = new U("INFO", 800), Pe = new U("CONFIG", 700), Qe = new U("FINE", 500), Re = new U("FINEST", 300), Se = new U("ALL", 0), Te = [new U("OFF", Infinity), Le, Me, Ne, Oe, Pe, Qe, new U("FINER", 400), Re, Se], Ue = k;
function Ve(a) {
  if(!Ue) {
    Ue = {};
    for(var b = 0, c;c = Te[b];b++) {
      Ue[c.value] = c, Ue[c.name] = c
    }
  }
  return Ue[a] || k
}
s = Ke.prototype;
s.getParent = o("B");
s.kb = aa("X");
function We(a) {
  if(a.X) {
    return a.X
  }
  if(a.B) {
    return We(a.B)
  }
  Da("Root logger has no level set.");
  return k
}
s.log = function(a, b, c) {
  if(a.value >= We(this).value) {
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
  var d = new Ie(a, "" + b, this.Cf);
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
      e = "Message: " + D(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + D(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + D(Ee(g) + "-> ")
    }catch(A) {
      e = "Exception trying to expose exception! You win, we lose. " + A
    }
    d.Pc = e
  }
  return d
};
function V(a, b) {
  a.log(Me, b, h)
}
function W(a, b) {
  a.log(Ne, b, h)
}
s.info = function(a, b) {
  this.log(Oe, a, b)
};
function X(a, b) {
  a.log(Qe, b, h)
}
function Y(a, b) {
  a.log(Re, b, h)
}
var Xe = {}, Ye = k;
function Ze() {
  Ye || (Ye = new Ke(""), Xe[""] = Ye, Ye.kb(Pe))
}
function $e() {
  Ze();
  return Ye
}
function Z(a) {
  Ze();
  var b;
  if(!(b = Xe[a])) {
    b = new Ke(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Z(a.substr(0, c));
    c.qa || (c.qa = {});
    c.qa[d] = b;
    b.B = c;
    Xe[a] = b
  }
  return b
}
;function af(a) {
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
;var bf, cf;
function df(a, b) {
  this.Ua = a;
  this.Qa = b
}
df.prototype.o = function(a) {
  return a instanceof df && this.Ua == a.Ua && this.Qa.join(",") == a.Qa
};
df.prototype.n = function(a, b) {
  a.push("new SACK(", "" + this.Ua, ", ");
  O(this.Qa, a, b);
  a.push(")")
};
function ef() {
  this.R = new F
}
s = ef.prototype;
s.Ha = -1;
s.O = 0;
s.append = function(a) {
  var b = af(a);
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
function ff(a) {
  a = a.R.da();
  Xa(a);
  return a
}
function gf() {
  this.Ga = new F
}
gf.prototype.Na = -1;
gf.prototype.O = 0;
function hf(a) {
  var b = a.Ga.da();
  Xa(b);
  return new df(a.Na, b)
}
var jf = {};
function kf(a, b) {
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
        a.push('<property id="', d, '">'), kf(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', D(c), '">'), kf(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function lf(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, e = arguments;
  d.push("<arguments>");
  for(var g = e.length, i = 1;i < g;i++) {
    kf(d, e[i])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var mf;
(function() {
  function a(a) {
    a = a.match(/[\d]+/g);
    a.length = 3;
    return a.join(".")
  }
  var b = m, c = "";
  if(navigator.plugins && navigator.plugins.length) {
    var d = navigator.plugins["Shockwave Flash"];
    d && (b = j, d.description && (c = a(d.description)));
    navigator.plugins["Shockwave Flash 2.0"] && (b = j, c = "2.0.0.11")
  }else {
    if(navigator.mimeTypes && navigator.mimeTypes.length) {
      (b = (d = navigator.mimeTypes["application/x-shockwave-flash"]) && d.enabledPlugin) && (c = a(d.enabledPlugin.description))
    }else {
      try {
        d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), b = j, c = a(d.GetVariable("$version"))
      }catch(e) {
        try {
          d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = j, c = "6.0.21"
        }catch(g) {
          try {
            d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = j, c = a(d.GetVariable("$version"))
          }catch(i) {
          }
        }
      }
    }
  }
  mf = c
})();
function nf(a, b) {
  Hd.call(this, b);
  this.nf = a;
  this.Oc = new Dd(this);
  this.Zb = new F
}
B(nf, Hd);
s = nf.prototype;
s.a = Z("goog.ui.media.FlashObject");
s.ag = "window";
s.Gd = "#000000";
s.Xe = "sameDomain";
function of(a, b, c) {
  a.Dd = v(b) ? b : Math.round(b) + "px";
  a.Uc = v(c) ? c : Math.round(c) + "px";
  a.g() && (b = a.g() ? a.g().firstChild : k, c = a.Dd, a = a.Uc, c instanceof cd ? (a = c.height, c = c.width) : a == h && f(Error("missing height argument")), b.style.width = Bd(c), b.style.height = Bd(a))
}
s.sa = function() {
  nf.e.sa.call(this);
  var a = this.g(), b;
  b = I ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = I ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = qa(c, this.ag), d = this.Zb.da(), e = this.Zb.H(), g = [], i = 0;i < d.length;i++) {
    var l = ta(d[i]), n = ta(e[i]);
    g.push(l + "=" + n)
  }
  b = qa(b, Kd(this), Kd(this), "goog-ui-media-flash-object", D(this.nf), D(g.join("&")), this.Gd, this.Xe, c);
  a.innerHTML = b;
  this.Dd && this.Uc && of(this, this.Dd, this.Uc);
  R(this.Oc, this.g(), Ha(ec), hc)
};
s.q = function() {
  this.Ge != k && !(0 <= Ba(mf, this.Ge)) && (W(this.a, "Required flash version not found:" + this.Ge), f(Error("Method not supported")));
  var a = this.Xa().createElement("div");
  a.className = "goog-ui-media-flash";
  this.l = a
};
s.c = function() {
  nf.e.c.call(this);
  this.Zb = k;
  this.Oc.b();
  this.Oc = k
};
function pf(a) {
  C.call(this, a)
}
B(pf, C);
pf.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function qf(a, b, c) {
  function d() {
    e && delete t.__loadFlashObject_callbacks[e]
  }
  var e;
  if(Mb && !K("1.8.1.20")) {
    return Pc(new pf("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Ba(mf, "9"))) {
    return b = mf, Pc(new pf("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  e = "_" + qe();
  var i = new Dc(d);
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
function rf(a, b, c) {
  var d = qf(a, b, c), e = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  Mc(d, function(b) {
    a.clearTimeout(e);
    return b
  });
  return d
}
;function sf(a, b) {
  this.ea = "_" + qe();
  this.xc = a;
  this.Ba = b;
  this.Fa = a.Fa
}
B(sf, L);
s = sf.prototype;
s.fb = j;
s.Kc = m;
s.a = Z("cw.net.FlashSocket");
s.n = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.ea);
  a.push("'>")
};
function tf(a, b, c) {
  "frames" == b ? (a = a.Ba, uf(a.D), vf(a.D, c)) : "stillreceiving" == b ? (c = a.Ba, Y(c.a, "onstillreceiving"), uf(c.D)) : "connect" == b ? (c = a.Ba, c.a.info("onconnect"), uf(c.D), a = c.rb, c.rb = k, a.length && (Y(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.uc.Sb(a))) : "close" == b ? (a.fb = m, a.b()) : "ioerror" == b ? (a.fb = m, b = a.Ba, W(b.a, "onioerror: " + P(c)), wf(b.D, m), a.b()) : "securityerror" == b ? (a.fb = m, b = a.Ba, W(b.a, "onsecurityerror: " + P(c)), 
  wf(b.D, m), a.b()) : f(Error("bad event: " + b))
}
function xf(a) {
  a.Kc = j;
  a.fb = m;
  a.b()
}
s.Ic = function(a, b) {
  try {
    var c = this.Fa.CallFunction(lf("__FC_connect", this.ea, a, b, "<int32/>\n"))
  }catch(d) {
    return V(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), xf(this)
  }
  '"OK"' != c && f(Error("__FC_connect failed? ret: " + c))
};
s.Sb = function(a) {
  try {
    var b = this.Fa.CallFunction(lf("__FC_writeFrames", this.ea, a))
  }catch(c) {
    return V(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), xf(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (W(this.a, "Flash no longer knows of " + this.ea + "; disposing."), this.b()) : f(Error("__FC_writeFrames failed? ret: " + b)))
};
s.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.fb);
  sf.e.c.call(this);
  var a = this.Fa;
  delete this.Fa;
  if(this.fb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(lf("__FC_close", this.ea)))
    }catch(b) {
      V(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Kc = j
    }
  }
  if(this.Kc) {
    a = this.Ba, W(a.a, "oncrash"), wf(a.D, j)
  }else {
    this.Ba.onclose()
  }
  delete this.Ba;
  delete this.xc.$a[this.ea]
};
function yf(a, b) {
  this.A = a;
  this.Fa = b;
  this.$a = {};
  this.Hc = "__FST_" + qe();
  t[this.Hc] = y(this.gf, this);
  var c = b.CallFunction(lf("__FC_setCallbackFunc", this.Hc));
  '"OK"' != c && f(Error("__FC_setCallbackFunc failed? ret: " + c))
}
B(yf, L);
s = yf.prototype;
s.a = Z("cw.net.FlashSocketTracker");
s.n = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  O(this.$a, a, b);
  a.push(">")
};
s.Lc = function(a) {
  a = new sf(this, a);
  return this.$a[a.ea] = a
};
s.ef = function(a, b, c, d) {
  var e = this.$a[a];
  e ? "frames" == b && d ? (tf(e, "ioerror", "FlashConnector hadError while handling data."), e.b()) : tf(e, b, c) : W(this.a, "Cannot dispatch because we have no instance: " + P([a, b, c, d]))
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
  yf.e.c.call(this);
  for(var a = Ha(this.$a);a.length;) {
    a.pop().b()
  }
  delete this.$a;
  delete this.Fa;
  t[this.Hc] = h
};
function zf(a) {
  this.D = a;
  this.rb = []
}
B(zf, L);
s = zf.prototype;
s.a = Z("cw.net.FlashSocketConduit");
s.Sb = function(a) {
  this.rb ? (Y(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.rb.push.apply(this.rb, a)) : (Y(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.uc.Sb(a))
};
s.Ic = function(a, b) {
  this.uc.Ic(a, b)
};
s.onclose = function() {
  this.a.info("onclose");
  wf(this.D, m)
};
s.c = function() {
  this.a.info("in disposeInternal.");
  zf.e.c.call(this);
  this.uc.b();
  delete this.D
};
var Af = [];
function Bf() {
  var a = new Dc;
  Af.push(a);
  return a
}
function Cf(a) {
  var b = Af;
  Af = [];
  Ma(b, function(b) {
    b.aa(a)
  })
}
function Df(a, b) {
  if(Af.length) {
    return Bf()
  }
  var c = new nf(b + "FlashConnector.swf?cb=" + Ef);
  c.Gd = "#777777";
  of(c, 300, 30);
  var d = Q("minerva-elements");
  d || f(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
  var e = Q("minerva-elements-FlashConnectorSwf");
  e || (e = qd("div", {id:"minerva-elements-FlashConnectorSwf"}), d.appendChild(e));
  bf = rf(a.F, c, e);
  Jc(bf, Cf);
  return Bf()
}
;function Ff() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;var ve = Math.pow(2, 53);
var Gf = {Ve:r("<cw.eq.Wildcard>")};
function Hf(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function If(a, b, c) {
  var d = fa(a), e = fa(b);
  if(a == Gf || b == Gf) {
    return j
  }
  if(a != k && "function" == typeof a.o) {
    return c && c.push("running custom equals function on left object"), a.o(b, c)
  }
  if(b != k && "function" == typeof b.o) {
    return c && c.push("running custom equals function on right object"), b.o(a, c)
  }
  if(Hf(d) || Hf(e)) {
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
                if(!If(a[d], b[d], c)) {
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
          if(a.Ue == Cb && b.Ue == Cb) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!If(a[g], b[g], c)) {
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
  C.call(this, a)
}
B($, C);
$.prototype.name = "cw.net.InvalidFrame";
function Jf() {
  var a = [];
  this.W(a);
  return a.join("")
}
function Kf() {
}
Kf.prototype.o = function(a, b) {
  return!(a instanceof Kf) ? m : If(Lf(this), Lf(a), b)
};
Kf.prototype.n = function(a, b) {
  a.push("<HelloFrame properties=");
  O(Lf(this), a, b);
  a.push(">")
};
function Lf(a) {
  return[a.nb, a.Be, a.fe, a.Fe, a.Pb, a.wd, a.ue, a.se, a.dd, a.qe, a.Qe, a.Me, a.Z, a.jc]
}
Kf.prototype.Q = Jf;
Kf.prototype.W = function(a) {
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
  b.sack = this.Z instanceof df ? re((new Mf(this.Z)).Q()) : this.Z;
  b.seenack = this.jc instanceof df ? re((new Mf(this.jc)).Q()) : this.jc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(Wc(b), "H")
};
function Nf(a) {
  this.mb = a
}
Nf.prototype.o = function(a) {
  return a instanceof Nf && this.mb == a.mb
};
Nf.prototype.n = function(a, b) {
  a.push("new StringFrame(");
  O(this.mb, a, b);
  a.push(")")
};
Nf.prototype.Q = Jf;
Nf.prototype.W = function(a) {
  a.push(this.mb, " ")
};
function Of(a) {
  this.Vb = a
}
Of.prototype.o = function(a) {
  return a instanceof Of && this.Vb == a.Vb
};
Of.prototype.n = function(a, b) {
  a.push("new CommentFrame(");
  O(this.Vb, a, b);
  a.push(")")
};
Of.prototype.Q = Jf;
Of.prototype.W = function(a) {
  a.push(this.Vb, "^")
};
function Pf(a) {
  this.Mb = a
}
Pf.prototype.o = function(a) {
  return a instanceof Pf && this.Mb == a.Mb
};
Pf.prototype.n = function(a) {
  a.push("new SeqNumFrame(", "" + this.Mb, ")")
};
Pf.prototype.Q = Jf;
Pf.prototype.W = function(a) {
  a.push("" + this.Mb, "N")
};
function Qf(a) {
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
  return new df(a, c)
}
function Mf(a) {
  this.Z = a
}
Mf.prototype.o = function(a, b) {
  return a instanceof Mf && this.Z.o(a.Z, b)
};
Mf.prototype.n = function(a, b) {
  a.push("new SackFrame(");
  O(this.Z, a, b);
  a.push(")")
};
Mf.prototype.Q = Jf;
Mf.prototype.W = function(a) {
  var b = this.Z;
  a.push(b.Qa.join(","), "|", "" + b.Ua);
  a.push("A")
};
function Rf(a) {
  this.Db = a
}
Rf.prototype.o = function(a, b) {
  return a instanceof Rf && this.Db.o(a.Db, b)
};
Rf.prototype.n = function(a, b) {
  a.push("new StreamStatusFrame(");
  O(this.Db, a, b);
  a.push(")")
};
Rf.prototype.Q = Jf;
Rf.prototype.W = function(a) {
  var b = this.Db;
  a.push(b.Qa.join(","), "|", "" + b.Ua);
  a.push("T")
};
function Sf() {
}
Sf.prototype.n = function(a) {
  a.push("new StreamCreatedFrame()")
};
Sf.prototype.o = function(a) {
  return a instanceof Sf
};
Sf.prototype.Q = Jf;
Sf.prototype.W = function(a) {
  a.push("C")
};
function Tf() {
}
Tf.prototype.n = function(a) {
  a.push("new YouCloseItFrame()")
};
Tf.prototype.o = function(a) {
  return a instanceof Tf
};
Tf.prototype.Q = Jf;
Tf.prototype.W = function(a) {
  a.push("Y")
};
function Uf(a, b) {
  this.Hb = a;
  this.qb = b
}
Uf.prototype.o = function(a) {
  return a instanceof Uf && this.Hb == a.Hb && this.qb == a.qb
};
Uf.prototype.n = function(a, b) {
  a.push("new ResetFrame(");
  O(this.Hb, a, b);
  a.push(", ", "" + this.qb, ")")
};
Uf.prototype.Q = Jf;
Uf.prototype.W = function(a) {
  a.push(this.Hb, "|", "" + Number(this.qb), "!")
};
var Vf = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Wf(a) {
  this.reason = a
}
Wf.prototype.o = function(a) {
  return a instanceof Wf && this.reason == a.reason
};
Wf.prototype.n = function(a, b) {
  a.push("new TransportKillFrame(");
  O(this.reason, a, b);
  a.push(")")
};
Wf.prototype.Q = Jf;
Wf.prototype.W = function(a) {
  a.push(this.reason, "K")
};
function Yf(a) {
  a || f(new $("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new Nf(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = Qf(re(a)), a == k && f(new $("bad sack")), new Mf(a)
  }
  if("N" == b) {
    return a = ue(re(a)), a == k && f(new $("bad seqNum")), new Pf(a)
  }
  if("T" == b) {
    return a = Qf(re(a)), a == k && f(new $("bad lastSackSeen")), new Rf(a)
  }
  if("Y" == b) {
    return 1 != a.length && f(new $("leading garbage")), new Tf
  }
  if("^" == b) {
    return new Of(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && f(new $("leading garbage")), new Sf
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && f(new $("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && f(new $("bad applicationLevel")), new Uf(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = Vf[a], a == k && f(new $("unknown kill reason: " + a)), new Wf(a)
  }
  f(new $("Invalid frame type " + b))
}
;function Zf(a, b, c, d) {
  this.contentWindow = a;
  this.Yb = b;
  this.xd = c;
  this.pf = d
}
Zf.prototype.n = function(a, b) {
  a.push("<XDRFrame frameId=");
  O(this.pf, a, b);
  a.push(", expandedUrl=");
  O(this.Yb, a, b);
  a.push(", streams=");
  O(this.xd, a, b);
  a.push(">")
};
function $f() {
  this.frames = [];
  this.bd = new F
}
$f.prototype.a = Z("cw.net.XDRTracker");
function ag(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor(Ff()) + ("" + Math.floor(Ff()))
  })
}
function bg(a, b) {
  for(var c = cg, d = 0;d < c.frames.length;d++) {
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
  e = ag(a);
  g = t.location;
  g instanceof H || (g = wb(g));
  e instanceof H || (e = wb(e));
  var l = g;
  g = l.K();
  (i = !!e.ha) ? hb(g, e.ha) : i = !!e.Sa;
  i ? ib(g, e.Sa) : i = !!e.V;
  i ? jb(g, e.V) : i = e.Aa != k;
  var n = e.S;
  if(i) {
    kb(g, e.Aa)
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
  i ? lb(g, n) : i = "" !== e.I.toString();
  i ? (l = e.I, l.Wa || (l.Wa = l.toString() ? decodeURIComponent(l.toString()) : ""), mb(g, l.Wa, h)) : i = !!e.Ia;
  i && nb(g, e.Ia);
  e = g.toString();
  g = ("" + t.location).match(Ea)[3] || k;
  i = e.match(Ea)[3] || k;
  g == i ? (c.a.info("No need to make a real XDRFrame for " + P(b)), c = Oc(new Zf(t, e, [b], k))) : ((g = Q("minerva-elements")) || f(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new Dc, c.bd.set(d, [i, e, b]), c.a.info("Creating new XDRFrame " + P(d) + "for " + P(b)), c = qd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = i);
  return c
}
$f.prototype.cg = function(a) {
  var b = this.bd.get(a);
  b || f(Error("Unknown frameId " + P(a)));
  this.bd.remove(b);
  var c = b[0], a = new Zf(Q("minerva-xdrframe-" + a).contentWindow || (Q("minerva-xdrframe-" + a).contentDocument || Q("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (Q("minerva-xdrframe-" + a).contentDocument || Q("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.aa(a)
};
var cg = new $f;
t.__XHRTracker_xdrFrameLoaded = y(cg.cg, cg);
var dg;
dg = m;
var eg = Ib();
eg && (-1 != eg.indexOf("Firefox") || -1 != eg.indexOf("Camino") || -1 != eg.indexOf("iPhone") || -1 != eg.indexOf("iPod") || -1 != eg.indexOf("iPad") || -1 != eg.indexOf("Android") || -1 != eg.indexOf("Chrome") && (dg = j));
var fg = dg;
var Ef = "4bdfc178fc0e508c0cd5efc3fdb09920";
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function gg(a, b, c, d, e, g) {
  Dc.call(this, e, g);
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
B(gg, Dc);
gg.prototype.we = 0;
gg.prototype.Yd = function(a, b, c) {
  this.we++;
  this.Mc[a] = [b, c];
  this.ta || (this.Ud && b ? this.aa([a, c]) : this.mf && !b ? this.xb(c) : this.we == this.oe.length && this.aa(this.Mc));
  this.cf && !b && (c = k);
  return c
};
gg.prototype.xb = function(a) {
  gg.e.xb.call(this, a);
  Ma(this.oe, function(a) {
    a.cancel()
  })
};
function hg(a) {
  a = new gg(a, m, j);
  Jc(a, function(a) {
    return Na(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function ig(a, b) {
  this.bg = a;
  this.re = b
}
ig.prototype.Zc = 0;
ig.prototype.lc = 0;
ig.prototype.Rc = m;
function jg(a) {
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
;function kg(a, b, c) {
  this.D = b;
  this.Y = a;
  this.Jc = c
}
B(kg, L);
s = kg.prototype;
s.a = Z("cw.net.XHRMaster");
s.Da = -1;
s.cd = function(a, b, c) {
  this.Jc.__XHRSlave_makeRequest(this.Y, a, b, c)
};
s.va = o("Da");
s.gd = function(a, b) {
  1 != b && V(this.a, P(this.Y) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  uf(this.D);
  vf(this.D, a)
};
s.hd = function(a) {
  X(this.a, "ongotheaders_: " + P(a));
  var b = k;
  "Content-Length" in a && (b = ue(a["Content-Length"]));
  a = this.D;
  X(a.a, a.p() + " got Content-Length: " + b);
  a.ia == lg && (b == k && (W(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), mg(a, 2E3 + 1E3 * (b / 3072)))
};
s.jd = function(a) {
  1 != a && X(this.a, this.D.p() + "'s XHR's readyState is " + a);
  this.Da = a;
  2 <= this.Da && uf(this.D)
};
s.fd = function() {
  this.D.b()
};
s.c = function() {
  kg.e.c.call(this);
  delete ng.ma[this.Y];
  this.Jc.__XHRSlave_dispose(this.Y);
  delete this.Jc
};
function og() {
  this.ma = {}
}
B(og, L);
s = og.prototype;
s.a = Z("cw.net.XHRMasterTracker");
s.Lc = function(a, b) {
  var c = "_" + qe(), d = new kg(c, a, b);
  return this.ma[c] = d
};
s.gd = function(a, b, c) {
  if(Mb) {
    for(var d = [], e = 0, g = b.length;e < g;e++) {
      d[e] = b[e]
    }
    b = d
  }else {
    b = Sa(b)
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
  og.e.c.call(this);
  for(var a = Ha(this.ma);a.length;) {
    a.pop().b()
  }
  delete this.ma
};
var ng = new og;
t.__XHRMaster_onframes = y(ng.gd, ng);
t.__XHRMaster_oncomplete = y(ng.fd, ng);
t.__XHRMaster_ongotheaders = y(ng.hd, ng);
t.__XHRMaster_onreadystatechange = y(ng.jd, ng);
function pg(a, b, c) {
  this.ga = a;
  this.host = b;
  this.port = c
}
function qg(a, b, c) {
  this.host = a;
  this.port = b;
  this.Xf = c
}
function rg(a, b) {
  b || (b = a);
  this.ga = a;
  this.Ea = b
}
rg.prototype.n = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  O(this.ga, a, b);
  a.push(", secondaryUrl=");
  O(this.Ea, a, b);
  a.push(">")
};
function sg(a, b, c, d) {
  this.ga = a;
  this.Ae = b;
  this.Ea = c;
  this.Ke = d;
  (!(0 == this.ga.indexOf("http://") || 0 == this.ga.indexOf("https://")) || !(0 == this.Ea.indexOf("http://") || 0 == this.Ea.indexOf("https://"))) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Ae.location.href;
  Fa(this.ga, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Ke.location.href;
  Fa(this.Ea, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
sg.prototype.n = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  O(this.ga, a, b);
  a.push(", secondaryUrl=");
  O(this.Ea, a, b);
  a.push(">")
};
var tg = new Of(";)]}");
function ug() {
}
ug.prototype.Vd = r(1);
function vg(a) {
  this.Rf = a
}
vg.prototype.n = function(a, b) {
  a.push("<UserContext for ");
  O(this.Rf, a, b);
  a.push(">")
};
function wg(a, b, c) {
  this.t = a;
  this.Sf = b ? b : new ug;
  this.A = c ? c : Sc;
  this.Qb = new Be;
  this.Pb = qe() + qe();
  this.Ca = new ef;
  this.Xc = new gf;
  this.Rb = k;
  this.zc = [];
  this.ob = new vg(this);
  J && (this.Rb = rc(t, "load", this.Jf, m, this))
}
B(wg, L);
s = wg.prototype;
s.a = Z("cw.net.ClientStream");
s.me = new df(-1, []);
s.ne = new df(-1, []);
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
function xg(a) {
  var b = [-1];
  a.h && b.push(a.h.gb);
  a.w && b.push(a.w.gb);
  return Math.max.apply(Math.max, b)
}
function yg(a) {
  if(!(3 > a.d)) {
    var b = 0 != a.Ca.R.u(), c = hf(a.Xc), d = !c.o(a.ne) && !(a.h && c.o(a.h.cb) || a.w && c.o(a.w.cb)), e = xg(a);
    if((b = b && e < a.Ca.Ha) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.h.sb ? (Y(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.h, c != d.cb && (!d.na && !d.z.length && zg(d), d.z.push(new Mf(c)), d.cb = c)), b && Ag(a.h, a.Ca, e + 1), a.h.la()) : a.w == k ? a.ud ? (Y(a.a, "tryToSend_: creating secondary to send " + g), a.w = Bg(a, m), b && Ag(a.w, a.Ca, e + 1), a.w.la()) : (Y(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.od = j) : Y(a.a, "tryToSend_: need to send " + g + ", but can't right now")
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
function Cg(a, b) {
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
    yg(a)
  }
}
function Bg(a, b) {
  var c;
  a.t instanceof sg ? c = 1 == a.Sf.Vd() ? lg : Dg : a.t instanceof qg ? c = Eg : f(Error("Don't support endpoint " + P(a.t)));
  a.zd += 1;
  c = new Fg(a.A, a, a.zd, c, a.t, b);
  Y(a.a, "Created: " + c.p());
  a.Qb.add(c);
  return c
}
function Gg(a, b, c) {
  var d = new Hg(a.A, a, b, c);
  Y(a.a, "Created: " + d.p() + ", delay=" + b + ", times=" + c);
  a.Qb.add(d);
  return d
}
function Ig(a, b) {
  a.Qb.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  X(a.a, "Offline: " + b.p());
  a.vd = b.za ? a.vd + b.za : 0;
  1 <= a.vd && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.ob, "stream penalty reached limit", m), a.b());
  if(3 < a.d) {
    4 == a.d && b.Te ? (X(a.a, "Disposing because resettingTransport_ is done."), a.b()) : X(a.a, "Not creating a transport because ClientStream is in state " + a.d)
  }else {
    var c;
    var d;
    c = b instanceof Hg;
    if(!c && b.Bc) {
      var e = J ? fg ? [0, 1] : [9, 20] : [0, 0];
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
    b == a.h ? (a.h = k, c ? a.h = Gg(a, e, c) : (e = xg(a), a.h = Bg(a, j), Ag(a.h, a.Ca, e + 1)), a.h.la()) : b == a.w && (a.w = k, c ? (a.w = Gg(a, e, c), a.w.la()) : yg(a))
  }
}
s.reset = function(a) {
  3 < this.d && f(Error("reset: Can't send reset in state " + this.d));
  this.d = 4;
  this.h && this.h.sb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Jg(this.h, a), this.h.la()) : (this.h && (X(this.a, "reset: Disposing primary before sending ResetFrame."), this.h.b()), this.w && (X(this.a, "reset: Disposing secondary before sending ResetFrame."), this.w.b()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Ib = Bg(this, m), Jg(this.Ib, a), this.Ib.la());
  this.onreset && this.onreset.call(this.ob, a, j)
};
function Kg(a, b, c, d) {
  var e;
  e = a.Xc;
  for(var g = a.Bf, i = a.Af, l = [], n = m, p = 0, G = c.length;p < G;p++) {
    var q = c[p], w = q[0], q = q[1];
    if(w == e.Na + 1) {
      e.Na += 1;
      for(l.push(q);;) {
        w = e.Na + 1;
        q = e.Ga.get(w, jf);
        if(q === jf) {
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
        var A = af(q);
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
  d || yg(a);
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
  if(this.t instanceof rg) {
    var a = bg(this.t.ga, this), b = bg(this.t.Ea, this), a = hg([a, b]);
    Jc(a, y(this.kf, this));
    Lc(a, y(this.Rd, this))
  }else {
    if(this.t instanceof pg) {
      if(cf) {
        this.Td()
      }else {
        var a = Df(this.A, this.t.ga), c = this;
        Jc(a, function(a) {
          cf || (cf = new yf(c.A, a));
          return k
        });
        Jc(a, y(this.Td, this));
        Lc(a, y(this.Rd, this))
      }
    }else {
      Lg(this)
    }
  }
};
s.kf = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Yb, e = a[1].Yb;
  this.zc.push(a[0]);
  this.zc.push(a[1]);
  this.t = new sg(d, b, e, c);
  Lg(this)
};
s.Td = function() {
  this.t = new qg(this.t.host, this.t.port, cf);
  Lg(this)
};
function Lg(a) {
  a.d = 3;
  a.h = Bg(a, j);
  Ag(a.h, a.Ca, k);
  a.h.la()
}
s.c = function() {
  this.a.info(P(this) + " in disposeInternal.");
  this.d = 5;
  for(var a = this.Qb.H(), b = 0;b < a.length;b++) {
    a[b].b()
  }
  for(a = 0;a < this.zc.length;a++) {
    Ra(this.zc[a].xd, this)
  }
  J && this.Rb && (uc(this.Rb), this.Rb = k);
  this.ye && this.ye.call(this.ob);
  delete this.Qb;
  delete this.h;
  delete this.w;
  delete this.Ib;
  delete this.ob;
  wg.e.c.call(this)
};
var lg = 1, Dg = 2, Eg = 3;
function Fg(a, b, c, d, e, g) {
  this.A = a;
  this.C = b;
  this.nb = c;
  this.ia = d;
  this.t = e;
  this.z = [];
  this.Va = g;
  this.sb = !this.ab();
  this.ib = this.ia != lg;
  this.Ye = y(this.Vf, this)
}
B(Fg, L);
s = Fg.prototype;
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
  return this.ia == lg || this.ia == Dg
};
function Mg(a, b) {
  Xa(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Kg(a.C, a, b, !a.ib)
}
function Ng(a, b, c) {
  try {
    var d = Yf(b);
    a.$b += 1;
    X(a.a, a.p() + " RECV " + P(d));
    var e;
    1 == a.$b && !d.o(tg) && a.ab() ? (W(a.a, a.p() + " is closing soon because got bad preamble: " + P(d)), e = j) : e = m;
    if(e) {
      return j
    }
    if(d instanceof Nf) {
      if(!/^([ -~]*)$/.test(d.mb)) {
        return a.Ab = j
      }
      a.nc += 1;
      c.push([a.nc, d.mb])
    }else {
      if(d instanceof Mf) {
        var g = a.C, i = d.Z;
        g.me = i;
        var l = g.Ca, n = i.Ua, c = m;
        n > l.Ha && (c = j);
        for(var p = ff(l).concat(), d = 0;d < p.length;d++) {
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
        if(d instanceof Pf) {
          a.nc = d.Mb - 1
        }else {
          if(d instanceof Rf) {
            a.C.ne = d.Db
          }else {
            if(d instanceof Tf) {
              return Y(a.a, a.p() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof Wf) {
              return a.Ab = j, "stream_attach_failure" == d.reason ? a.za += 1 : "acked_unsent_strings" == d.reason && (a.za += 0.5), Y(a.a, a.p() + " is closing soon because got " + P(d)), j
            }
            if(!(d instanceof Of)) {
              if(d instanceof Sf) {
                var A = a.C, Nh = !a.ib;
                Y(A.a, "Stream is now confirmed to exist at server.");
                A.ud = j;
                A.od && !Nh && (A.od = m, yg(A))
              }else {
                if(c.length) {
                  Mg(a, c);
                  if(!u(c)) {
                    for(var Rd = c.length - 1;0 <= Rd;Rd--) {
                      delete c[Rd]
                    }
                  }
                  c.length = 0
                }
                if(d instanceof Uf) {
                  var Cc = a.C;
                  Cc.onreset && Cc.onreset.call(Cc.ob, d.Hb, d.qb);
                  Cc.b();
                  return j
                }
                f(Error(a.p() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(Xf) {
    return Xf instanceof $ || f(Xf), W(a.a, a.p() + " is closing soon because got InvalidFrame: " + P(b)), a.Ab = j
  }
  return m
}
function vf(a, b) {
  a.vc = j;
  try {
    for(var c = m, d = [], e = 0, g = b.length;e < g;e++) {
      if(a.ba) {
        a.a.info(a.p() + " returning from loop because we're disposed.");
        return
      }
      if(c = Ng(a, b[e], d)) {
        break
      }
    }
    d.length && Mg(a, d);
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
function Og(a) {
  a.oc != k && (a.A.F.clearTimeout(a.oc), a.oc = k)
}
function mg(a, b) {
  Og(a);
  b = Math.round(b);
  a.oc = a.A.F.setTimeout(a.Ye, b);
  X(a.a, a.p() + "'s receive timeout set to " + b + " ms.")
}
function uf(a) {
  a.ia != lg && (a.ia == Eg || a.ia == Dg ? mg(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ia)))
}
function zg(a) {
  var b = new Kf;
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
  b.Z = hf(a.C.Xc);
  b.jc = a.C.me;
  a.z.push(b);
  a.cb = b.Z
}
function wf(a, b) {
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
    !a && !this.z.length && zg(this);
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
      this.m = ng.Lc(this, this.Va ? this.t.Ae : this.t.Ke);
      this.Ad = this.A.F === Bc ? z() : this.A.F.getTime();
      this.m.cd(b, "POST", a);
      mg(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.ib ? 0 : this.Va ? 25E3 : 0))
    }else {
      if(this.ia == Eg) {
        a = [];
        b = 0;
        for(c = this.z.length;b < c;b++) {
          a.push(this.z[b].Q())
        }
        this.z = [];
        this.m ? this.m.Sb(a) : (b = this.t, this.m = new zf(this), this.m.uc = b.Xf.Lc(this.m), this.Ad = this.A.F === Bc ? z() : this.A.F.getTime(), this.m.Ic(b.host, b.port), this.m.ba || (this.m.Sb(a), this.m.ba || mg(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.ia))
      }
    }
  }
};
function Ag(a, b, c) {
  !a.na && !a.z.length && zg(a);
  for(var d = Math.max(c, a.gb + 1), e = ff(b), c = [], g = 0;g < e.length;g++) {
    var i = e[g];
    (d == k || i >= d) && c.push([i, b.R.get(i)[0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], e = g[0], g = g[1], (-1 == a.gb || a.gb + 1 != e) && a.z.push(new Pf(e)), a.z.push(new Nf(g)), a.gb = e
  }
}
s.c = function() {
  this.a.info(this.p() + " in disposeInternal.");
  Fg.e.c.call(this);
  this.Pe = this.A.F === Bc ? z() : this.A.F.getTime();
  this.z = [];
  Og(this);
  this.m && this.m.b();
  var a = this.C;
  this.C = k;
  Ig(a, this)
};
function Jg(a, b) {
  !a.na && !a.z.length && zg(a);
  a.z.push(new Uf(b, j));
  a.Te = j
}
function Hg(a, b, c, d) {
  this.A = a;
  this.C = b;
  this.Qd = c;
  this.Md = d
}
B(Hg, L);
s = Hg.prototype;
s.na = m;
s.sb = m;
s.ec = k;
s.cb = k;
s.a = Z("cw.net.DoNothingTransport");
function Pg(a) {
  a.ec = a.A.F.setTimeout(function() {
    a.ec = k;
    a.Md--;
    a.Md ? Pg(a) : a.b()
  }, a.Qd)
}
s.la = function() {
  this.na && !this.sb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.na = j;
  Pg(this)
};
s.n = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.Qd, ">")
};
s.ab = r(m);
s.p = r("Wast. T");
s.Kd = r(m);
s.c = function() {
  this.a.info(this.p() + " in disposeInternal.");
  Hg.e.c.call(this);
  this.ec != k && this.A.F.clearTimeout(this.ec);
  var a = this.C;
  this.C = k;
  Ig(a, this)
};
function Qg() {
  this.Ee = z()
}
var Rg = new Qg;
Qg.prototype.set = aa("Ee");
Qg.prototype.reset = function() {
  this.set(z())
};
Qg.prototype.get = o("Ee");
function Sg(a) {
  this.md = a || "";
  this.Pf = Rg
}
Sg.prototype.Lf = j;
Sg.prototype.Nf = j;
Sg.prototype.Mf = j;
Sg.prototype.Le = m;
function Tg(a) {
  return 10 > a ? "0" + a : "" + a
}
function Ug(a, b) {
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
function Vg(a) {
  Sg.call(this, a)
}
B(Vg, Sg);
Vg.prototype.Le = j;
function Wg(a) {
  this.ed = a || 100;
  this.pa = []
}
s = Wg.prototype;
s.Eb = 0;
s.add = function(a) {
  this.pa[this.Eb] = a;
  this.Eb = (this.Eb + 1) % this.ed
};
s.get = function(a) {
  a = Xg(this, a);
  return this.pa[a]
};
s.set = function(a, b) {
  a = Xg(this, a);
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
function Xg(a, b) {
  b >= a.pa.length && f(Error("Out of bounds exception"));
  return a.pa.length < a.ed ? b : (a.Eb + Number(b)) % a.ed
}
;function Yg(a, b) {
  this.wa = a || "";
  this.md = b || "";
  this.hb = [];
  this.qc = new Wg(Zg);
  this.Hf = y(this.We, this);
  this.of = new Vg(this.md);
  this.lf = {};
  if(j != this.ie) {
    this.ie = j;
    var c = $e(), d = this.Hf;
    c.Bb || (c.Bb = []);
    c.Bb.push(d)
  }
  this.wb = "1" == $g(this.wa, "enabled");
  t.setInterval(y(this.Kf, this), 7500)
}
var Zg = 500;
s = Yg.prototype;
s.Se = "LOGGING";
s.hf = m;
s.s = k;
s.Ed = m;
s.ie = m;
s.Hd = k;
s.$c = z();
s.La = function() {
  this.wb && ah(this)
};
s.isEnabled = o("wb");
s.sc = function(a) {
  if(this.wb = a) {
    ah(this), this.s && this.yc()
  }
  bh(this, "enabled", a ? "1" : "0")
};
function ch(a) {
  return!!a.s && !a.s.closed
}
s.af = function() {
  this.qc.clear();
  ch(this) && this.yc()
};
s.We = function(a) {
  if(!this.lf[a.pe]) {
    var b = this.of, c;
    switch(a.X.value) {
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
    d.push(b.md, " ");
    if(b.Lf) {
      var e = new Date(a.Ne);
      d.push("[", Tg(e.getFullYear() - 2E3) + Tg(e.getMonth() + 1) + Tg(e.getDate()) + " " + Tg(e.getHours()) + ":" + Tg(e.getMinutes()) + ":" + Tg(e.getSeconds()) + "." + Tg(Math.floor(e.getMilliseconds() / 10)), "] ")
    }
    b.Nf && d.push("[", Aa(Ug(a, b.Pf.get())), "s] ");
    b.Mf && d.push("[", D(a.pe), "] ");
    d.push('<span class="', c, '">', ua(Aa(D(a.te))));
    b.Le && a.Qc && d.push("<br>", ua(Aa(a.Pc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.wb ? (ah(this), this.qc.add(b), dh(this, b)) : this.qc.add(b);
    this.hf && a.X.value >= Me.value && this.sc(j)
  }
};
function dh(a, b) {
  a.hb.push(b);
  t.clearTimeout(a.Hd);
  750 < z() - a.$c ? a.Fd() : a.Hd = t.setTimeout(y(a.Fd, a), 250)
}
s.Fd = function() {
  this.$c = z();
  if(ch(this)) {
    var a = this.s.document.body, a = a && 100 >= a.scrollHeight - (a.scrollTop + a.clientHeight);
    this.s.document.write(this.hb.join(""));
    this.hb.length = 0;
    a && this.s.scrollTo(0, 1E6)
  }
};
function eh(a) {
  for(var b = a.qc.H(), c = 0;c < b.length;c++) {
    dh(a, b[c])
  }
}
function ah(a) {
  if(!ch(a) && !a.Ed) {
    var b = $g(a.wa, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), e = Number(b[2]), b = Number(b[3]);
    a.Ed = j;
    a.s = window.open("", I ? a.wa.replace(/[\s\-\.\,]/g, "_") : a.wa, "width=" + e + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    !a.s && !a.Of && (alert("Logger popup was blocked"), a.Of = j);
    a.Ed = m;
    a.s && a.yc()
  }
}
s.bc = r("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
s.yc = function() {
  ch(this) || (this.s.document.open(), dh(this, "<style>" + this.bc() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.Se + "<br><small>Logger: " + this.wa + "</small></div><hr>"), eh(this))
};
function bh(a, b, c) {
  b += a.wa;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(z() + 2592E6)).toUTCString()
}
function $g(a, b, c) {
  var a = b + a, b = "" + document.cookie, d = b.indexOf(a + "=");
  return-1 != d ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, -1 == c ? b.length : c))) : c || ""
}
s.Kf = function() {
  ch(this) && bh(this, "dbg", (this.s.screenX || this.s.screenLeft || 0) + "," + (this.s.screenY || this.s.screenTop || 0) + "," + (this.s.outerWidth || 800) + "," + (this.s.outerHeight || 500))
};
function fh(a, b) {
  if(gh) {
    var c = hh(), d;
    for(d in c) {
      var e = d.replace("fancywindow.sel.", ""), e = Z(e), g = e.X, i = window.localStorage.getItem(d).toString();
      (!g || g.toString() != i) && e.kb(Ve(i))
    }
  }
  Yg.call(this, a, b)
}
B(fh, Yg);
var gh;
a: {
  try {
    gh = !!window.localStorage.getItem;
    break a
  }catch(ih) {
  }
  gh = m
}
s = fh.prototype;
s.Fd = function() {
  this.$c = z();
  if(ch(this)) {
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
  if(ch(this)) {
    var a = this.s.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.wa + "</title><style>" + this.bc() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.wa + "</b></p><p>" + this.Se + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (I ? a.body : this.s).onresize = y(this.He, this);
    this.L = new kd(a);
    this.L.g("openbutton").onclick = y(this.Ff, this);
    this.L.g("closebutton").onclick = y(this.bf, this);
    this.L.g("clearbutton").onclick = y(this.af, this);
    this.L.g("exitbutton").onclick = y(this.jf, this);
    eh(this)
  }
};
s.Ff = function() {
  var a = this.L.g("optionsarea");
  a.innerHTML = "";
  for(var b = jh(), c = this.L, d = 0;d < b.length;d++) {
    var e = Z(b[d]), e = c.q("div", {}, kh(this, "sel" + b[d], e.X ? e.X.name : "INHERIT"), c.q("span", {}, b[d] || "(root)"));
    a.appendChild(e)
  }
  this.L.g("options").style.display = "block";
  return m
};
function kh(a, b, c) {
  for(var a = a.L, b = a.q("select", {id:b}), d = 0;d < Te.length;d++) {
    var e = Te[d], g = a.q("option", {}, e.name);
    c == e.name && (g.selected = j);
    b.appendChild(g)
  }
  b.appendChild(a.q("option", {selected:"INHERIT" == c}, "INHERIT"));
  return b
}
s.bf = function() {
  this.L.g("options").style.display = "none";
  for(var a = jh(), b = this.L, c = 0;c < a.length;c++) {
    var d = Z(a[c]), e = b.g("sel" + a[c]), e = e.options[e.selectedIndex].text;
    "INHERIT" == e ? d.kb(k) : d.kb(Ve(e))
  }
  if(gh) {
    a = jh();
    b = hh();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], e = Z(a[c]).X, d in b ? e ? window.localStorage.getItem(d) != e.name && window.localStorage.setItem(d, e.name) : window.localStorage.removeItem(d) : e && window.localStorage.setItem(d, e.name)
    }
  }
  return m
};
s.He = function() {
  var a = this.L, b = a.g("log"), c = a.g("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.M.body.offsetHeight - c.offsetHeight - (I ? 4 : 0) + "px"
};
s.jf = function() {
  this.sc(m);
  this.s && this.s.close()
};
s.bc = function() {
  return fh.e.bc.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function hh() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != k && 0 == d.lastIndexOf("fancywindow.sel.", 0) && (a[d] = j)
  }
  return a
}
function jh() {
  var a = Ia(Xe);
  a.sort();
  return a
}
;function lh() {
}
lh.prototype.Tb = k;
var mh;
function nh() {
}
B(nh, lh);
function oh(a) {
  return(a = ph(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function qh(a) {
  var b = {};
  ph(a) && (b[0] = j, b[1] = j);
  return b
}
nh.prototype.Vc = k;
function ph(a) {
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
mh = new nh;
function rh(a) {
  this.headers = new F;
  this.pb = a || k
}
B(rh, Ac);
rh.prototype.a = Z("goog.net.XhrIo");
var sh = /^https?$/i;
s = rh.prototype;
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
  this.i = this.pb ? oh(this.pb) : oh(mh);
  this.Ac = this.pb ? this.pb.Tb || (this.pb.Tb = qh(this.pb)) : mh.Tb || (mh.Tb = qh(mh));
  this.i.onreadystatechange = y(this.xe, this);
  try {
    X(this.a, th(this, "Opening Xhr")), this.Wc = j, this.i.open(b, a, j), this.Wc = m
  }catch(e) {
    X(this.a, th(this, "Error opening Xhr: " + e.message));
    uh(this, e);
    return
  }
  var a = c || "", g = this.headers.K();
  d && bb(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.U("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  bb(g, function(a, b) {
    this.i.setRequestHeader(b, a)
  }, this);
  this.Ie && (this.i.responseType = this.Ie);
  "withCredentials" in this.i && (this.i.withCredentials = this.$f);
  try {
    this.Ra && (Bc.clearTimeout(this.Ra), this.Ra = k), 0 < this.wc && (X(this.a, th(this, "Will abort after " + this.wc + "ms if incomplete")), this.Ra = Bc.setTimeout(y(this.Wf, this), this.wc)), X(this.a, th(this, "Sending request")), this.gc = j, this.i.send(a), this.gc = m
  }catch(i) {
    X(this.a, th(this, "Send error: " + i.message)), uh(this, i)
  }
};
s.Wf = function() {
  "undefined" != typeof ba && this.i && (this.Cb = "Timed out after " + this.wc + "ms, aborting", X(this.a, th(this, this.Cb)), this.dispatchEvent("timeout"), this.abort(8))
};
function uh(a, b) {
  a.oa = m;
  a.i && (a.Ka = j, a.i.abort(), a.Ka = m);
  a.Cb = b;
  vh(a);
  wh(a)
}
function vh(a) {
  a.Nc || (a.Nc = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
s.abort = function() {
  this.i && this.oa && (X(this.a, th(this, "Aborting")), this.oa = m, this.Ka = j, this.i.abort(), this.Ka = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), wh(this))
};
s.c = function() {
  this.i && (this.oa && (this.oa = m, this.Ka = j, this.i.abort(), this.Ka = m), wh(this, j));
  rh.e.c.call(this)
};
s.xe = function() {
  !this.Wc && !this.gc && !this.Ka ? this.Ef() : xh(this)
};
s.Ef = function() {
  xh(this)
};
function xh(a) {
  if(a.oa && "undefined" != typeof ba) {
    if(a.Ac[1] && 4 == a.va() && 2 == yh(a)) {
      X(a.a, th(a, "Local request error detected and ignored"))
    }else {
      if(a.gc && 4 == a.va()) {
        Bc.setTimeout(y(a.xe, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.va()) {
          X(a.a, th(a, "Request complete"));
          a.oa = m;
          var b = yh(a), c;
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
              b = ("" + a.ad).match(Ea)[1] || k, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !sh.test(b ? b.toLowerCase() : "")
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
            a.Cb = d + " [" + yh(a) + "]";
            vh(a)
          }
          wh(a)
        }
      }
    }
  }
}
function wh(a, b) {
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
function yh(a) {
  try {
    return 2 < a.va() ? a.i.status : -1
  }catch(b) {
    return W(a.a, "Can not get status: " + b.message), -1
  }
}
s.getResponseHeader = function(a) {
  return this.i && 4 == this.va() ? this.i.getResponseHeader(a) : h
};
function th(a, b) {
  return b + " [" + a.le + " " + a.ad + " " + yh(a) + "]"
}
;var zh = !(I || J && !K("420+"));
function Ah(a, b) {
  this.xc = a;
  this.Y = b
}
B(Ah, L);
s = Ah.prototype;
s.m = k;
s.Da = -1;
s.Wd = m;
s.ee = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Bh(a) {
  var b = jg(a.Od), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.Y, c, b), 1 != b && a.b()) : a.b()
}
s.vf = function() {
  Bh(this);
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
      for(var b = new F, c = this.ee.length;c--;) {
        var d = this.ee[c];
        try {
          b.set(d, this.m.i.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.u() && (this.Wd = j, a.__XHRMaster_ongotheaders(this.Y, gb(b)), this.ba)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.Y, this.Da);
    zh && 3 == this.Da && Bh(this)
  }else {
    this.b()
  }
};
s.cd = function(a, b, c) {
  this.m = new rh;
  N(this.m, "readystatechange", y(this.If, this));
  N(this.m, "complete", y(this.vf, this));
  this.m.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Od = new ig(this.m.i, 1048576)
};
s.c = function() {
  Ah.e.c.call(this);
  delete this.Od;
  this.m && this.m.b();
  delete this.xc.Ob[this.Y];
  delete this.xc
};
function Ch() {
  this.Ob = {}
}
B(Ch, L);
Ch.prototype.zf = function(a, b, c, d) {
  var e = new Ah(this, a);
  this.Ob[a] = e;
  e.cd(b, c, d)
};
Ch.prototype.ff = function(a) {
  (a = this.Ob[a]) && a.b()
};
Ch.prototype.c = function() {
  Ch.e.c.call(this);
  for(var a = Ha(this.Ob);a.length;) {
    a.pop().b()
  }
  delete this.Ob
};
var Dh = new Ch;
t.__XHRSlave_makeRequest = y(Dh.zf, Dh);
t.__XHRSlave_dispose = y(Dh.ff, Dh);
var Eh = Z("cw.net.demo");
function Fh() {
}
Fh.prototype.Vd = function() {
  return Boolean(Number((new H(document.location)).I.get("httpStreaming", "0"))) ? 2 : 1
};
var Gh, Hh = Z("ljstream.logger");
window.onerror = function(a, b, c) {
  V(Hh, "window.onerror: message: " + P(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Ih() {
}
Ih.prototype.Tf = function(a, b) {
  Hh.info("streamReset: reasonString=" + P(a) + ", applicationLevel=" + b);
  Jh("Disconnected from server.  Try reloading this page.");
  Kh = k
};
function Lh(a) {
  Hh.info("Sending preferences to server");
  Cg(a.C, [Wc(["SetPreferences", {include_russian_posts:Q("include_russian_posts").checked}])])
}
Ih.prototype.Uf = function(a) {
  var a = Uc(a), b = a[1];
  if("NewPost" == a[0]) {
    var a = b.title, c = b.url, b = b.body;
    (a = ra(a)) || (a = "[No title]");
    var d = Ae(D(b)), e = document, b = e.createElement("div");
    I ? (b.innerHTML = "<br>" + d, b.removeChild(b.firstChild)) : b.innerHTML = d;
    if(1 == b.childNodes.length) {
      b = b.removeChild(b.firstChild)
    }else {
      for(d = e.createDocumentFragment();b.firstChild;) {
        d.appendChild(b.firstChild)
      }
      b = d
    }
    a = qd("span", {}, qd("a", {href:c, "class":"ljpost-title-link"}, a), qd("span", {}, "\u00a0"), b);
    Mh(a)
  }
};
Ih.prototype.reset = function(a) {
  Hh.info("resetting with reason: " + a);
  this.C.reset(a)
};
var Kh = k, Oh = new Qc(t.window);
function Jh(a) {
  a = qd("span", {"class":"important-message"}, a);
  Mh(a)
}
function Ph() {
  Kh && (Kh.reset("idle timeout fired"), Kh = k, Jh("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var Qh = k;
function Rh() {
  Qh != k && Oh.F.clearTimeout(Qh);
  Kh && (Qh = Oh.F.setTimeout(Ph, 6E5))
}
N(window, ["click", "focus", "keydown", "keypress"], Rh, j);
var pd = new kd, Sh = 0;
function Mh(a) {
  a = qd("div", {"class":"row-" + (0 == Sh % 2 ? "even" : "odd")}, qd("nobr", {}, a));
  Q("ljstream-container-inner").appendChild(a);
  Sh += 1;
  var b;
  if(b = Gh) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !J && "CSS1Compat" == d.compatMode ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new bd(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = od().height;
    b = !(a + b <= c + d)
  }
  b && (a = od().height, window.scrollBy(0, Math.round(a / 2) + 80))
}
function Th() {
  N(t, "load", function() {
    window.scrollTo(0, 0)
  });
  N(Q("include_russian_posts"), "click", function() {
    Lh(Kh)
  });
  Gh = j;
  N(Q("automatic_scroll"), "click", function(a) {
    Gh = a.target.checked
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
function Uh() {
  $e().kb(Se);
  if("1" == (new H(document.location)).I.get("logging")) {
    var a = new fh("main");
    a.sc(j);
    a.La()
  }
  Hh.info("Logger works.");
  Th();
  a = new Fh;
  Kh = new Ih;
  Rh();
  var b = (new H(document.location)).I, c = "http" != b.get("mode");
  if((b = Boolean(Number(b.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    W(Eh, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), b = m
  }
  var d = b, b = new H(document.location);
  c ? c = new pg("/_minerva/", b.V, t.__demo_mainSocketPort) : (d ? (c = t.__demo_shared_domain, v(c) || f(Error("domain was " + P(c) + "; expected a string.")), b = b.K(), jb(b, "_____random_____." + c)) : b = b.K(), lb(b, "/_minerva/"), mb(b, "", h), c = new rg(b.toString().replace("_____random_____", "%random%")));
  a = new wg(c, a, Oh);
  c = Kh;
  a.kd = y(c.Uf, c);
  a.onreset = y(c.Tf, c);
  Kh.C = a;
  c = Kh;
  Cg(c.C, ["subprotocol:ljstream"]);
  Lh(c);
  a.start()
}
var Vh = "__ljstream_init".split("."), Wh = t;
!(Vh[0] in Wh) && Wh.execScript && Wh.execScript("var " + Vh[0]);
for(var Xh;Vh.length && (Xh = Vh.shift());) {
  !Vh.length && ga(Uh) ? Wh[Xh] = Uh : Wh = Wh[Xh] ? Wh[Xh] : Wh[Xh] = {}
}
;})();
