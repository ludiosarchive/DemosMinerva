(function(){function e(a) {
  throw a;
}
var h = void 0, k = null;
function aa(a) {
  return function(b) {
    this[a] = b
  }
}
function m(a) {
  return function() {
    return this[a]
  }
}
function n(a) {
  return function() {
    return a
  }
}
var o, ba = ba || {}, q = this;
function ca(a, b) {
  var c = a.split("."), d = q;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && da(b) ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
  }
}
function ea(a) {
  for(var a = a.split("."), b = q, c;c = a.shift();) {
    if(b[c] != k) {
      b = b[c]
    }else {
      return k
    }
  }
  return b
}
function s() {
}
function fa(a) {
  a.Eb = function() {
    return a.Zg || (a.Zg = new a)
  }
}
function ga(a) {
  var b = typeof a;
  if(b == "object") {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }else {
        if(a instanceof Object) {
          return b
        }
      }
      var c = Object.prototype.toString.call(a);
      if(c == "[object Window]") {
        return"object"
      }
      if(c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(b == "function" && typeof a.call == "undefined") {
      return"object"
    }
  }
  return b
}
function da(a) {
  return a !== h
}
function t(a) {
  return ga(a) == "array"
}
function ha(a) {
  var b = ga(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function ia(a) {
  return ja(a) && typeof a.getFullYear == "function"
}
function u(a) {
  return typeof a == "string"
}
function v(a) {
  return ga(a) == "function"
}
function ja(a) {
  a = ga(a);
  return a == "object" || a == "array" || a == "function"
}
function w(a) {
  return a[ka] || (a[ka] = ++la)
}
var ka = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), la = 0;
function ma(a) {
  return a.call.apply(a.bind, arguments)
}
function na(a, b) {
  var c = b || q;
  if(arguments.length > 2) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var b = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(b, d);
      return a.apply(c, b)
    }
  }else {
    return function() {
      return a.apply(c, arguments)
    }
  }
}
function y() {
  y = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ma : na;
  return y.apply(k, arguments)
}
function oa(a) {
  var b = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = Array.prototype.slice.call(arguments);
    c.unshift.apply(c, b);
    return a.apply(this, c)
  }
}
var A = Date.now || function() {
  return+new Date
};
function B(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.b = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function pa(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = String(a)
  }
}
B(pa, Error);
pa.prototype.name = "CustomError";
function qa(a) {
  for(var b = 1;b < arguments.length;b++) {
    var c = String(arguments[b]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, c)
  }
  return a
}
function ra(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
var sa = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function ta(a) {
  a = String(a);
  if(!sa.test(a)) {
    return encodeURIComponent(a)
  }
  return a
}
function ua(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function va(a) {
  if(!wa.test(a)) {
    return a
  }
  a.indexOf("&") != -1 && (a = a.replace(xa, "&amp;"));
  a.indexOf("<") != -1 && (a = a.replace(ya, "&lt;"));
  a.indexOf(">") != -1 && (a = a.replace(za, "&gt;"));
  a.indexOf('"') != -1 && (a = a.replace(Aa, "&quot;"));
  return a
}
var xa = /&/g, ya = /</g, za = />/g, Aa = /\"/g, wa = /[&<>\"]/;
function Ba(a) {
  return ua(a.replace(/  /g, " &#160;"), h)
}
function Ca(a, b) {
  for(var c = 0, d = ra(String(a)).split("."), f = ra(String(b)).split("."), g = Math.max(d.length, f.length), i = 0;c == 0 && i < g;i++) {
    var j = d[i] || "", l = f[i] || "", p = RegExp("(\\d*)(\\D*)", "g"), x = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = p.exec(j) || ["", "", ""], z = x.exec(l) || ["", "", ""];
      if(r[0].length == 0 && z[0].length == 0) {
        break
      }
      c = Da(r[1].length == 0 ? 0 : parseInt(r[1], 10), z[1].length == 0 ? 0 : parseInt(z[1], 10)) || Da(r[2].length == 0, z[2].length == 0) || Da(r[2], z[2])
    }while(c == 0)
  }
  return c
}
function Da(a, b) {
  if(a < b) {
    return-1
  }else {
    if(a > b) {
      return 1
    }
  }
  return 0
}
var Ea = {};
function Fa(a) {
  return Ea[a] || (Ea[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
}
;function Ga(a, b) {
  b.unshift(a);
  pa.call(this, qa.apply(k, b));
  b.shift();
  this.li = a
}
B(Ga, pa);
Ga.prototype.name = "AssertionError";
function Ha(a) {
  e(new Ga("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var Ia = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Ja(a, b) {
  var c = a.match(Ia), d = b.match(Ia);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Ka(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
function La(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Ma(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
function Na(a, b, c) {
  b in a && e(Error('The object already contains the key "' + b + '"'));
  a[b] = c
}
function Oa(a) {
  var b = {}, c;
  for(c in a) {
    b[a[c]] = c
  }
  return b
}
var Pa = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
function Qa(a) {
  for(var b, c, d = 1;d < arguments.length;d++) {
    c = arguments[d];
    for(b in c) {
      a[b] = c[b]
    }
    for(var f = 0;f < Pa.length;f++) {
      b = Pa[f], Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
    }
  }
}
function Ra() {
  var a = arguments.length;
  if(a == 1 && t(arguments[0])) {
    return Ra.apply(k, arguments[0])
  }
  for(var b = {}, c = 0;c < a;c++) {
    b[arguments[c]] = !0
  }
  return b
}
;function Sa(a) {
  return a[a.length - 1]
}
var C = Array.prototype, Ta = C.indexOf ? function(a, b, c) {
  return C.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(u(a)) {
    if(!u(b) || b.length != 1) {
      return-1
    }
    return a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Ua = C.forEach ? function(a, b, c) {
  C.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
}, Va = C.map ? function(a, b, c) {
  return C.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = u(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in g && (f[i] = b.call(c, g[i], i, a))
  }
  return f
}, Wa = C.some ? function(a, b, c) {
  return C.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return!0
    }
  }
  return!1
}, Xa = C.every ? function(a, b, c) {
  return C.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && !b.call(c, f[g], g, a)) {
      return!1
    }
  }
  return!0
};
function Ya(a, b) {
  var c;
  a: {
    c = a.length;
    for(var d = u(a) ? a.split("") : a, f = 0;f < c;f++) {
      if(f in d && b.call(h, d[f], f, a)) {
        c = f;
        break a
      }
    }
    c = -1
  }
  return c < 0 ? k : u(a) ? a.charAt(c) : a[c]
}
function Za(a, b) {
  return Ta(a, b) >= 0
}
function $a(a, b) {
  var c = Ta(a, b);
  c >= 0 && C.splice.call(a, c, 1)
}
function ab() {
  return C.concat.apply(C, arguments)
}
function bb(a) {
  if(t(a)) {
    return ab(a)
  }else {
    for(var b = [], c = 0, d = a.length;c < d;c++) {
      b[c] = a[c]
    }
    return b
  }
}
function cb(a) {
  for(var b = 1;b < arguments.length;b++) {
    var c = arguments[b], d;
    if(t(c) || (d = ha(c)) && c.hasOwnProperty("callee")) {
      a.push.apply(a, c)
    }else {
      if(d) {
        for(var f = a.length, g = c.length, i = 0;i < g;i++) {
          a[f + i] = c[i]
        }
      }else {
        a.push(c)
      }
    }
  }
}
function db(a) {
  C.splice.apply(a, eb(arguments, 1))
}
function eb(a, b, c) {
  return arguments.length <= 2 ? C.slice.call(a, b) : C.slice.call(a, b, c)
}
function fb(a, b) {
  C.sort.call(a, b || gb)
}
function gb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;var hb = "StopIteration" in q ? q.StopIteration : Error("StopIteration");
function ib() {
}
ib.prototype.next = function() {
  e(hb)
};
ib.prototype.za = function() {
  return this
};
function jb(a) {
  if(a instanceof ib) {
    return a
  }
  if(typeof a.za == "function") {
    return a.za(!1)
  }
  if(ha(a)) {
    var b = 0, c = new ib;
    c.next = function() {
      for(;;) {
        if(b >= a.length && e(hb), b in a) {
          return a[b++]
        }else {
          b++
        }
      }
    };
    return c
  }
  e(Error("Not implemented"))
}
function kb(a) {
  var b = lb, a = jb(a), c = new ib;
  c.next = function() {
    for(;;) {
      var c = a.next();
      if(b.call(h, c, h, a)) {
        return c
      }
    }
  };
  return c
}
;function mb(a) {
  if(typeof a.C == "function") {
    return a.C()
  }
  if(ha(a) || u(a)) {
    return a.length
  }
  var b = 0, c;
  for(c in a) {
    b++
  }
  return b
}
function nb(a) {
  if(typeof a.S == "function") {
    return a.S()
  }
  if(u(a)) {
    return a.split("")
  }
  if(ha(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return La(a)
}
function ob(a) {
  if(typeof a.Ka == "function") {
    return a.Ka()
  }
  if(typeof a.S != "function") {
    if(ha(a) || u(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return Ma(a)
  }
}
function pb(a, b) {
  if(typeof a.contains == "function") {
    return a.contains(b)
  }
  if(typeof a.dc == "function") {
    return a.dc(b)
  }
  if(ha(a) || u(a)) {
    return Za(a, b)
  }
  var c;
  a: {
    for(c in a) {
      if(a[c] == b) {
        c = !0;
        break a
      }
    }
    c = !1
  }
  return c
}
function qb(a, b, c) {
  if(typeof a.forEach == "function") {
    a.forEach(b, c)
  }else {
    if(ha(a) || u(a)) {
      Ua(a, b, c)
    }else {
      for(var d = ob(a), f = nb(a), g = f.length, i = 0;i < g;i++) {
        b.call(c, f[i], d && d[i], a)
      }
    }
  }
}
function rb(a, b) {
  if(typeof a.every == "function") {
    return a.every(b, h)
  }
  if(ha(a) || u(a)) {
    return Xa(a, b, h)
  }
  for(var c = ob(a), d = nb(a), f = d.length, g = 0;g < f;g++) {
    if(!b.call(h, d[g], c && c[g], a)) {
      return!1
    }
  }
  return!0
}
;function sb(a) {
  this.r = {};
  this.h = [];
  var b = arguments.length;
  if(b > 1) {
    b % 2 && e(Error("Uneven number of arguments"));
    for(var c = 0;c < b;c += 2) {
      this.set(arguments[c], arguments[c + 1])
    }
  }else {
    a && this.Dd(a)
  }
}
o = sb.prototype;
o.m = 0;
o.Oc = 0;
o.C = m("m");
o.S = function() {
  tb(this);
  for(var a = [], b = 0;b < this.h.length;b++) {
    a.push(this.r[this.h[b]])
  }
  return a
};
o.Ka = function() {
  tb(this);
  return this.h.concat()
};
o.X = function(a) {
  return ub(this.r, a)
};
o.dc = function(a) {
  for(var b = 0;b < this.h.length;b++) {
    var c = this.h[b];
    if(ub(this.r, c) && this.r[c] == a) {
      return!0
    }
  }
  return!1
};
o.w = function(a, b) {
  if(this === a) {
    return!0
  }
  if(this.m != a.C()) {
    return!1
  }
  var c = b || vb;
  tb(this);
  for(var d, f = 0;d = this.h[f];f++) {
    if(!c(this.get(d), a.get(d))) {
      return!1
    }
  }
  return!0
};
function vb(a, b) {
  return a === b
}
o.sb = function() {
  return this.m == 0
};
o.clear = function() {
  this.r = {};
  this.Oc = this.m = this.h.length = 0
};
o.remove = function(a) {
  if(ub(this.r, a)) {
    return delete this.r[a], this.m--, this.Oc++, this.h.length > 2 * this.m && tb(this), !0
  }
  return!1
};
function tb(a) {
  if(a.m != a.h.length) {
    for(var b = 0, c = 0;b < a.h.length;) {
      var d = a.h[b];
      ub(a.r, d) && (a.h[c++] = d);
      b++
    }
    a.h.length = c
  }
  if(a.m != a.h.length) {
    for(var f = {}, c = b = 0;b < a.h.length;) {
      d = a.h[b], ub(f, d) || (a.h[c++] = d, f[d] = 1), b++
    }
    a.h.length = c
  }
}
o.get = function(a, b) {
  if(ub(this.r, a)) {
    return this.r[a]
  }
  return b
};
o.set = function(a, b) {
  ub(this.r, a) || (this.m++, this.h.push(a), this.Oc++);
  this.r[a] = b
};
o.Dd = function(a) {
  var b;
  a instanceof sb ? (b = a.Ka(), a = a.S()) : (b = Ma(a), a = La(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
o.M = function() {
  return new sb(this)
};
function wb(a) {
  tb(a);
  for(var b = {}, c = 0;c < a.h.length;c++) {
    var d = a.h[c];
    b[d] = a.r[d]
  }
  return b
}
o.za = function(a) {
  tb(this);
  var b = 0, c = this.h, d = this.r, f = this.Oc, g = this, i = new ib;
  i.next = function() {
    for(;;) {
      f != g.Oc && e(Error("The map has changed since the iterator was created"));
      b >= c.length && e(hb);
      var i = c[b++];
      return a ? i : d[i]
    }
  };
  return i
};
function ub(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function xb(a, b) {
  var c;
  a instanceof xb ? (this.Vb(b == k ? a.va : b), yb(this, a.Na), zb(this, a.Mc), Ab(this, a.Cb), Bb(this, a.Sb), Cb(this, a.tb), Db(this, a.xa.M()), Eb(this, a.gc)) : a && (c = String(a).match(Ia)) ? (this.Vb(!!b), yb(this, c[1] || "", !0), zb(this, c[2] || "", !0), Ab(this, c[3] || "", !0), Bb(this, c[4]), Cb(this, c[5] || "", !0), Db(this, c[6] || "", !0), Eb(this, c[7] || "", !0)) : (this.Vb(!!b), this.xa = new Fb(k, this, this.va))
}
o = xb.prototype;
o.Na = "";
o.Mc = "";
o.Cb = "";
o.Sb = k;
o.tb = "";
o.gc = "";
o.bh = !1;
o.va = !1;
o.toString = function() {
  if(this.ta) {
    return this.ta
  }
  var a = [];
  this.Na && a.push(Gb(this.Na, Hb), ":");
  if(this.Cb) {
    a.push("//");
    this.Mc && a.push(Gb(this.Mc, Hb), "@");
    var b;
    b = this.Cb;
    b = u(b) ? encodeURIComponent(b) : k;
    a.push(b);
    this.Sb != k && a.push(":", String(this.Sb))
  }
  this.tb && (this.Cb && this.tb.charAt(0) != "/" && a.push("/"), a.push(Gb(this.tb, this.tb.charAt(0) == "/" ? Ib : Jb)));
  (b = String(this.xa)) && a.push("?", b);
  this.gc && a.push("#", Gb(this.gc, Kb));
  return this.ta = a.join("")
};
o.M = function() {
  var a = this.Na, b = this.Mc, c = this.Cb, d = this.Sb, f = this.tb, g = this.xa.M(), i = this.gc, j = new xb(k, this.va);
  a && yb(j, a);
  b && zb(j, b);
  c && Ab(j, c);
  d && Bb(j, d);
  f && Cb(j, f);
  g && Db(j, g);
  i && Eb(j, i);
  return j
};
function yb(a, b, c) {
  Lb(a);
  delete a.ta;
  a.Na = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.Na) {
    a.Na = a.Na.replace(/:$/, "")
  }
}
function zb(a, b, c) {
  Lb(a);
  delete a.ta;
  a.Mc = c ? b ? decodeURIComponent(b) : "" : b
}
function Ab(a, b, c) {
  Lb(a);
  delete a.ta;
  a.Cb = c ? b ? decodeURIComponent(b) : "" : b
}
function Bb(a, b) {
  Lb(a);
  delete a.ta;
  b ? (b = Number(b), (isNaN(b) || b < 0) && e(Error("Bad port number " + b)), a.Sb = b) : a.Sb = k
}
function Cb(a, b, c) {
  Lb(a);
  delete a.ta;
  a.tb = c ? b ? decodeURIComponent(b) : "" : b
}
function Db(a, b, c) {
  Lb(a);
  delete a.ta;
  b instanceof Fb ? (a.xa = b, a.xa.Ne = a, a.xa.Vb(a.va)) : (c || (b = Gb(b, Mb)), a.xa = new Fb(b, a, a.va))
}
function Eb(a, b, c) {
  Lb(a);
  delete a.ta;
  a.gc = c ? b ? decodeURIComponent(b) : "" : b
}
function Lb(a) {
  a.bh && e(Error("Tried to modify a read-only Uri"))
}
o.Vb = function(a) {
  this.va = a;
  this.xa && this.xa.Vb(a);
  return this
};
var Nb = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Gb(a, b) {
  var c = k;
  u(a) && (c = a, Nb.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, Ob)));
  return c
}
function Ob(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Hb = /[#\/\?@]/g, Jb = /[\#\?:]/g, Ib = /[\#\?]/g, Mb = /[\#\?@]/g, Kb = /#/g;
function Fb(a, b, c) {
  this.Ea = a || k;
  this.Ne = b || k;
  this.va = !!c
}
function Pb(a) {
  if(!a.s && (a.s = new sb, a.Ea)) {
    for(var b = a.Ea.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      d >= 0 ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = Qb(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
o = Fb.prototype;
o.s = k;
o.m = k;
o.C = function() {
  Pb(this);
  return this.m
};
o.add = function(a, b) {
  Pb(this);
  Rb(this);
  a = Qb(this, a);
  if(this.X(a)) {
    var c = this.s.get(a);
    t(c) ? c.push(b) : this.s.set(a, [c, b])
  }else {
    this.s.set(a, b)
  }
  this.m++;
  return this
};
o.remove = function(a) {
  Pb(this);
  a = Qb(this, a);
  if(this.s.X(a)) {
    Rb(this);
    var b = this.s.get(a);
    t(b) ? this.m -= b.length : this.m--;
    return this.s.remove(a)
  }
  return!1
};
o.clear = function() {
  Rb(this);
  this.s && this.s.clear();
  this.m = 0
};
o.sb = function() {
  Pb(this);
  return this.m == 0
};
o.X = function(a) {
  Pb(this);
  a = Qb(this, a);
  return this.s.X(a)
};
o.dc = function(a) {
  var b = this.S();
  return Za(b, a)
};
o.Ka = function() {
  Pb(this);
  for(var a = this.s.S(), b = this.s.Ka(), c = [], d = 0;d < b.length;d++) {
    var f = a[d];
    if(t(f)) {
      for(var g = 0;g < f.length;g++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
o.S = function(a) {
  Pb(this);
  if(a) {
    if(a = Qb(this, a), this.X(a)) {
      var b = this.s.get(a);
      if(t(b)) {
        return b
      }else {
        a = [], a.push(b)
      }
    }else {
      a = []
    }
  }else {
    for(var b = this.s.S(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      t(d) ? cb(a, d) : a.push(d)
    }
  }
  return a
};
o.set = function(a, b) {
  Pb(this);
  Rb(this);
  a = Qb(this, a);
  if(this.X(a)) {
    var c = this.s.get(a);
    t(c) ? this.m -= c.length : this.m--
  }
  this.s.set(a, b);
  this.m++;
  return this
};
o.get = function(a, b) {
  Pb(this);
  a = Qb(this, a);
  if(this.X(a)) {
    var c = this.s.get(a);
    return t(c) ? c[0] : c
  }else {
    return b
  }
};
o.toString = function() {
  if(this.Ea) {
    return this.Ea
  }
  if(!this.s) {
    return""
  }
  for(var a = [], b = 0, c = this.s.Ka(), d = 0;d < c.length;d++) {
    var f = c[d], g = ta(f), f = this.s.get(f);
    if(t(f)) {
      for(var i = 0;i < f.length;i++) {
        b > 0 && a.push("&"), a.push(g), f[i] !== "" && a.push("=", ta(f[i])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(g), f !== "" && a.push("=", ta(f)), b++
    }
  }
  return this.Ea = a.join("")
};
function Rb(a) {
  delete a.Nd;
  delete a.Ea;
  a.Ne && delete a.Ne.ta
}
o.M = function() {
  var a = new Fb;
  if(this.Nd) {
    a.Nd = this.Nd
  }
  if(this.Ea) {
    a.Ea = this.Ea
  }
  if(this.s) {
    a.s = this.s.M()
  }
  return a
};
function Qb(a, b) {
  var c = String(b);
  a.va && (c = c.toLowerCase());
  return c
}
o.Vb = function(a) {
  a && !this.va && (Pb(this), Rb(this), qb(this.s, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.va = a
};
o.extend = function() {
  for(var a = 0;a < arguments.length;a++) {
    qb(arguments[a], function(a, c) {
      this.add(c, a)
    }, this)
  }
};
var Sb = function(a) {
  return function() {
    return a
  }
}(!0);
var Tb, Ub, Vb, Wb;
function Xb() {
  return q.navigator ? q.navigator.userAgent : k
}
Wb = Vb = Ub = Tb = !1;
var Yb;
if(Yb = Xb()) {
  var Zb = q.navigator;
  Tb = Yb.indexOf("Opera") == 0;
  Ub = !Tb && Yb.indexOf("MSIE") != -1;
  Vb = !Tb && Yb.indexOf("WebKit") != -1;
  Wb = !Tb && !Vb && Zb.product == "Gecko"
}
var E = Tb, F = Ub, G = Wb, H = Vb, $b = q.navigator, ac = ($b && $b.platform || "").indexOf("Mac") != -1, bc;
a: {
  var cc = "", dc;
  if(E && q.opera) {
    var ec = q.opera.version, cc = typeof ec == "function" ? ec() : ec
  }else {
    if(G ? dc = /rv\:([^\);]+)(\)|;)/ : F ? dc = /MSIE\s+([^\);]+)(\)|;)/ : H && (dc = /WebKit\/(\S+)/), dc) {
      var fc = dc.exec(Xb()), cc = fc ? fc[1] : ""
    }
  }
  if(F) {
    var gc, hc = q.document;
    gc = hc ? hc.documentMode : h;
    if(gc > parseFloat(cc)) {
      bc = String(gc);
      break a
    }
  }
  bc = cc
}
var ic = {};
function I(a) {
  return ic[a] || (ic[a] = Ca(bc, a) >= 0)
}
var jc = {};
function kc() {
  return jc[9] || (jc[9] = F && document.documentMode && document.documentMode >= 9)
}
;var lc;
var mc = F ? "focusin" : "DOMFocusIn";
var nc = !F || I("9"), oc = F && !I("8");
function J() {
  pc && (qc[w(this)] = this)
}
var pc = !1, qc = {};
J.prototype.Da = !1;
J.prototype.i = function() {
  if(!this.Da && (this.Da = !0, this.c(), pc)) {
    var a = w(this);
    qc.hasOwnProperty(a) || e(Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call"));
    delete qc[a]
  }
};
J.prototype.c = function() {
};
function rc(a, b) {
  J.call(this);
  this.type = a;
  this.currentTarget = this.target = b
}
B(rc, J);
o = rc.prototype;
o.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
o.vb = !1;
o.Ac = !0;
o.stopPropagation = function() {
  this.vb = !0
};
o.preventDefault = function() {
  this.Ac = !1
};
var sc = new Function("a", "return a");
function tc(a, b) {
  a && this.rb(a, b)
}
B(tc, rc);
var uc = [1, 4, 2];
o = tc.prototype;
o.target = k;
o.relatedTarget = k;
o.offsetX = 0;
o.offsetY = 0;
o.clientX = 0;
o.clientY = 0;
o.screenX = 0;
o.screenY = 0;
o.button = 0;
o.keyCode = 0;
o.charCode = 0;
o.ctrlKey = !1;
o.altKey = !1;
o.shiftKey = !1;
o.metaKey = !1;
o.mh = !1;
o.ga = k;
o.rb = function(a, b) {
  var c = this.type = a.type;
  rc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(G) {
      var f;
      a: {
        try {
          sc(d.nodeName);
          f = !0;
          break a
        }catch(g) {
        }
        f = !1
      }
      f || (d = k)
    }
  }else {
    if(c == "mouseover") {
      d = a.fromElement
    }else {
      if(c == "mouseout") {
        d = a.toElement
      }
    }
  }
  this.relatedTarget = d;
  this.offsetX = a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== h ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== h ? a.clientX : a.pageX;
  this.clientY = a.clientY !== h ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.mh = ac ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ga = a;
  delete this.Ac;
  delete this.vb
};
function vc(a) {
  return nc ? a.ga.button == 0 : a.type == "click" ? !0 : !!(a.ga.button & uc[0])
}
o.stopPropagation = function() {
  tc.b.stopPropagation.call(this);
  this.ga.stopPropagation ? this.ga.stopPropagation() : this.ga.cancelBubble = !0
};
o.preventDefault = function() {
  tc.b.preventDefault.call(this);
  var a = this.ga;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, oc) {
      try {
        if(a.ctrlKey || a.keyCode >= 112 && a.keyCode <= 123) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
o.Mg = m("ga");
o.c = function() {
  tc.b.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ga = k
};
function wc() {
}
var xc = 0;
o = wc.prototype;
o.key = 0;
o.Tb = !1;
o.Kd = !1;
o.rb = function(a, b, c, d, f, g) {
  v(a) ? this.Ff = !0 : a && a.handleEvent && v(a.handleEvent) ? this.Ff = !1 : e(Error("Invalid listener argument"));
  this.Nb = a;
  this.Yf = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.bd = g;
  this.Kd = !1;
  this.key = ++xc;
  this.Tb = !1
};
o.handleEvent = function(a) {
  if(this.Ff) {
    return this.Nb.call(this.bd || this.src, a)
  }
  return this.Nb.handleEvent.call(this.Nb, a)
};
var yc, zc = (yc = "ScriptEngine" in q && q.ScriptEngine() == "JScript") ? q.ScriptEngineMajorVersion() + "." + q.ScriptEngineMinorVersion() + "." + q.ScriptEngineBuildVersion() : "0";
function K(a, b) {
  J.call(this);
  this.Lf = b;
  this.mb = [];
  a > this.Lf && e(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.mb.push(this.Ca ? this.Ca() : {})
  }
}
B(K, J);
K.prototype.Ca = k;
K.prototype.kf = k;
K.prototype.getObject = function() {
  if(this.mb.length) {
    return this.mb.pop()
  }
  return this.Ca ? this.Ca() : {}
};
function Ac(a, b) {
  a.mb.length < a.Lf ? a.mb.push(b) : Bc(a, b)
}
function Bc(a, b) {
  if(a.kf) {
    a.kf(b)
  }else {
    if(ja(b)) {
      if(v(b.i)) {
        b.i()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
K.prototype.c = function() {
  K.b.c.call(this);
  for(var a = this.mb;a.length;) {
    Bc(this, a.pop())
  }
  delete this.mb
};
var Cc, Dc, Ec, Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc;
(function() {
  function a() {
    return{m:0, oa:0}
  }
  function b() {
    return[]
  }
  function c() {
    function a(b) {
      return i.call(a.src, a.key, b)
    }
    return a
  }
  function d() {
    return new wc
  }
  function f() {
    return new tc
  }
  var g = yc && !(Ca(zc, "5.7") >= 0), i;
  Hc = function(a) {
    i = a
  };
  if(g) {
    Cc = function() {
      return j.getObject()
    };
    Dc = function(a) {
      Ac(j, a)
    };
    Ec = function() {
      return l.getObject()
    };
    Fc = function(a) {
      Ac(l, a)
    };
    Gc = function() {
      return p.getObject()
    };
    Ic = function() {
      Ac(p, c())
    };
    Jc = function() {
      return x.getObject()
    };
    Kc = function(a) {
      Ac(x, a)
    };
    Lc = function() {
      return r.getObject()
    };
    Mc = function(a) {
      Ac(r, a)
    };
    var j = new K(0, 600);
    j.Ca = a;
    var l = new K(0, 600);
    l.Ca = b;
    var p = new K(0, 600);
    p.Ca = c;
    var x = new K(0, 600);
    x.Ca = d;
    var r = new K(0, 600);
    r.Ca = f
  }else {
    Cc = a, Dc = s, Ec = b, Fc = s, Gc = c, Ic = s, Jc = d, Kc = s, Lc = f, Mc = s
  }
})();
var Nc = {}, L = {}, Oc = {}, Pc = {};
function M(a, b, c, d, f) {
  if(b) {
    if(t(b)) {
      for(var g = 0;g < b.length;g++) {
        M(a, b[g], c, d, f)
      }
      return k
    }else {
      var d = !!d, i = L;
      b in i || (i[b] = Cc());
      i = i[b];
      d in i || (i[d] = Cc(), i.m++);
      var i = i[d], j = w(a), l;
      i.oa++;
      if(i[j]) {
        l = i[j];
        for(g = 0;g < l.length;g++) {
          if(i = l[g], i.Nb == c && i.bd == f) {
            if(i.Tb) {
              break
            }
            return l[g].key
          }
        }
      }else {
        l = i[j] = Ec(), i.m++
      }
      g = Gc();
      g.src = a;
      i = Jc();
      i.rb(c, g, a, b, d, f);
      c = i.key;
      g.key = c;
      l.push(i);
      Nc[c] = i;
      Oc[j] || (Oc[j] = Ec());
      Oc[j].push(i);
      a.addEventListener ? (a == q || !a.bf) && a.addEventListener(b, g, d) : a.attachEvent(Qc(b), g);
      return c
    }
  }else {
    e(Error("Invalid event type"))
  }
}
function Rc(a, b, c, d, f) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      Rc(a, b[g], c, d, f)
    }
    return k
  }
  a = M(a, b, c, d, f);
  Nc[a].Kd = !0;
  return a
}
function Sc(a, b, c, d, f) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      Sc(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = Tc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Nb == c && a[g].capture == d && a[g].bd == f) {
          N(a[g].key);
          break
        }
      }
    }
  }
}
function N(a) {
  if(Nc[a]) {
    var b = Nc[a];
    if(!b.Tb) {
      var c = b.src, d = b.type, f = b.Yf, g = b.capture;
      c.removeEventListener ? (c == q || !c.bf) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(Qc(d), f);
      c = w(c);
      f = L[d][g][c];
      if(Oc[c]) {
        var i = Oc[c];
        $a(i, b);
        i.length == 0 && delete Oc[c]
      }
      b.Tb = !0;
      f.Rf = !0;
      Uc(d, g, c, f);
      delete Nc[a]
    }
  }
}
function Uc(a, b, c, d) {
  if(!d.hd && d.Rf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      if(d[f].Tb) {
        var i = d[f].Yf;
        i.src = k;
        Ic(i);
        Kc(d[f])
      }else {
        f != g && (d[g] = d[f]), g++
      }
    }
    d.length = g;
    d.Rf = !1;
    g == 0 && (Fc(d), delete L[a][b][c], L[a][b].m--, L[a][b].m == 0 && (Dc(L[a][b]), delete L[a][b], L[a].m--), L[a].m == 0 && (Dc(L[a]), delete L[a]))
  }
}
function Vc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Ka(Oc, function(a) {
      for(var f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          N(g.key), c++
        }
      }
    })
  }else {
    if(a = w(a), Oc[a]) {
      for(var a = Oc[a], f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          N(g.key), c++
        }
      }
    }
  }
}
function Tc(a, b, c) {
  var d = L;
  if(b in d && (d = d[b], c in d && (d = d[c], a = w(a), d[a]))) {
    return d[a]
  }
  return k
}
function Qc(a) {
  if(a in Pc) {
    return Pc[a]
  }
  return Pc[a] = "on" + a
}
function Wc(a, b, c, d, f) {
  var g = 1, b = w(b);
  if(a[b]) {
    a.oa--;
    a = a[b];
    a.hd ? a.hd++ : a.hd = 1;
    try {
      for(var i = a.length, j = 0;j < i;j++) {
        var l = a[j];
        l && !l.Tb && (g &= Xc(l, f) !== !1)
      }
    }finally {
      a.hd--, Uc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Xc(a, b) {
  var c = a.handleEvent(b);
  a.Kd && N(a.key);
  return c
}
Hc(function(a, b) {
  if(!Nc[a]) {
    return!0
  }
  var c = Nc[a], d = c.type, f = L;
  if(!(d in f)) {
    return!0
  }
  var f = f[d], g, i;
  lc === h && (lc = F && !q.addEventListener);
  if(lc) {
    g = b || ea("window.event");
    var j = !0 in f, l = !1 in f;
    if(j) {
      if(g.keyCode < 0 || g.returnValue != h) {
        return!0
      }
      a: {
        var p = !1;
        if(g.keyCode == 0) {
          try {
            g.keyCode = -1;
            break a
          }catch(x) {
            p = !0
          }
        }
        if(p || g.returnValue == h) {
          g.returnValue = !0
        }
      }
    }
    p = Lc();
    p.rb(g, this);
    g = !0;
    try {
      if(j) {
        for(var r = Ec(), z = p.currentTarget;z;z = z.parentNode) {
          r.push(z)
        }
        i = f[!0];
        i.oa = i.m;
        for(var D = r.length - 1;!p.vb && D >= 0 && i.oa;D--) {
          p.currentTarget = r[D], g &= Wc(i, r[D], d, !0, p)
        }
        if(l) {
          i = f[!1];
          i.oa = i.m;
          for(D = 0;!p.vb && D < r.length && i.oa;D++) {
            p.currentTarget = r[D], g &= Wc(i, r[D], d, !1, p)
          }
        }
      }else {
        g = Xc(c, p)
      }
    }finally {
      if(r) {
        r.length = 0, Fc(r)
      }
      p.i();
      Mc(p)
    }
    return g
  }
  d = new tc(b, this);
  try {
    g = Xc(c, d)
  }finally {
    d.i()
  }
  return g
});
var Yc = 0;
function Zc() {
  J.call(this)
}
B(Zc, J);
o = Zc.prototype;
o.bf = !0;
o.kd = k;
o.Ce = aa("kd");
o.addEventListener = function(a, b, c, d) {
  M(this, a, b, c, d)
};
o.removeEventListener = function(a, b, c, d) {
  Sc(this, a, b, c, d)
};
o.dispatchEvent = function(a) {
  var b = a.type || a, c = L;
  if(b in c) {
    if(u(a)) {
      a = new rc(a, this)
    }else {
      if(a instanceof rc) {
        a.target = a.target || this
      }else {
        var d = a, a = new rc(b, this);
        Qa(a, d)
      }
    }
    var d = 1, f, c = c[b], b = !0 in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.kd) {
        f.push(g)
      }
      g = c[!0];
      g.oa = g.m;
      for(var i = f.length - 1;!a.vb && i >= 0 && g.oa;i--) {
        a.currentTarget = f[i], d &= Wc(g, f[i], a.type, !0, a) && a.Ac != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.oa = g.m, b) {
        for(i = 0;!a.vb && i < f.length && g.oa;i++) {
          a.currentTarget = f[i], d &= Wc(g, f[i], a.type, !1, a) && a.Ac != !1
        }
      }else {
        for(f = this;!a.vb && f && g.oa;f = f.kd) {
          a.currentTarget = f, d &= Wc(g, f, a.type, !1, a) && a.Ac != !1
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
o.c = function() {
  Zc.b.c.call(this);
  Vc(this);
  this.kd = k
};
var $c = q.window;
Yc++;
Yc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function ad(a, b) {
  this.Rc = [];
  this.$h = a;
  this.Eg = b || k
}
o = ad.prototype;
o.Db = !1;
o.Hb = !1;
o.vc = 0;
o.ig = !1;
o.Ag = !1;
o.Xe = function(a, b) {
  this.Db = !0;
  this.pd = b;
  this.Hb = !a;
  bd(this);
  this.vc--;
  this.vc == 0 && this.Db && bd(this)
};
function cd(a) {
  if(a.Db) {
    a.ig || e(new dd(a)), a.ig = !1
  }
  a.Db = !0;
  a.pd = k;
  a.Hb = !1;
  bd(a)
}
function ed(a, b) {
  fd(a, b, k, h)
}
function fd(a, b, c, d) {
  a.Rc.push([b, c, d]);
  a.Db && bd(a)
}
function gd(a) {
  return Wa(a.Rc, function(a) {
    return v(a[1])
  })
}
function bd(a) {
  a.Me && a.Db && gd(a) && (q.clearTimeout(a.Me), delete a.Me);
  for(var b = a.pd, c = !1, d = !1;a.Rc.length && a.vc == 0;) {
    var f = a.Rc.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.Hb ? i : g) {
      try {
        var j = g.call(f || a.Eg, b);
        if(da(j)) {
          a.Hb = a.Hb && (j == b || j instanceof Error), a.pd = b = j
        }
        b instanceof ad && (d = !0, a.vc++)
      }catch(l) {
        b = l, a.Hb = !0, gd(a) || (c = !0)
      }
    }
  }
  a.pd = b;
  if(d && a.vc) {
    fd(b, y(a.Xe, a, !0), y(a.Xe, a, !1)), b.Ag = !0
  }
  if(c) {
    a.Me = q.setTimeout(function() {
      e(b)
    }, 0)
  }
}
function dd(a) {
  pa.call(this);
  this.ci = a
}
B(dd, pa);
dd.prototype.message = "Already called";
function hd(a) {
  this.W = a;
  this.Rd = [];
  this.nf = [];
  this.Zh = y(this.Fh, this)
}
hd.prototype.Eh = k;
hd.prototype.Fh = function() {
  this.Eh = k;
  var a = this.Rd;
  this.Rd = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], f = c[1], c = c[2];
    try {
      d.apply(f, c)
    }catch(g) {
      this.W.setTimeout(function() {
        e(g)
      }, 0)
    }
  }
  if(this.Rd.length == 0) {
    a = this.nf;
    this.nf = [];
    for(b = 0;b < a.length;b++) {
      cd(a[b])
    }
  }
};
new hd(q.window);
function id(a) {
  return v(a) || typeof a == "object" && v(a.call) && v(a.apply)
}
;function jd() {
}
function kd(a) {
  var b = [];
  ld(new jd, a, b);
  return b.join("")
}
function ld(a, b, c) {
  switch(typeof b) {
    case "string":
      md(b, c);
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
      if(t(b)) {
        var d = b.length;
        c.push("[");
        for(var f = "", g = 0;g < d;g++) {
          c.push(f), ld(a, b[g], c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (g = b[f], typeof g != "function" && (c.push(d), md(f, c), c.push(":"), ld(a, g, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var nd = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, od = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function md(a, b) {
  b.push('"', a.replace(od, function(a) {
    if(a in nd) {
      return nd[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    b < 16 ? f += "000" : b < 256 ? f += "00" : b < 4096 && (f += "0");
    return nd[a] = f + b.toString(16)
  }), '"')
}
;function pd(a, b, c) {
  var d = Ta(c, a);
  if(d != -1) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = ga(a);
    if(d == "boolean" || d == "number" || d == "null" || d == "undefined") {
      b.push(String(a))
    }else {
      if(d == "string") {
        md(a, b)
      }else {
        if(id(a.L)) {
          a.L(b, c)
        }else {
          if(id(a.vg)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if(d == "array") {
                d = a.length;
                b.push("[");
                for(var f = "", g = 0;g < d;g++) {
                  b.push(f), pd(a[g], b, c), f = ", "
                }
                b.push("]")
              }else {
                if(d == "object") {
                  if(ia(a) && typeof a.valueOf == "function") {
                    b.push("new Date(", String(a.valueOf()), ")")
                  }else {
                    for(var d = Ma(a).concat(Pa), f = {}, i = g = 0;i < d.length;) {
                      var j = d[i++], l = ja(j) ? "o" + w(j) : (typeof j).charAt(0) + j;
                      Object.prototype.hasOwnProperty.call(f, l) || (f[l] = !0, d[g++] = j)
                    }
                    d.length = g;
                    b.push("{");
                    f = "";
                    for(i = 0;i < d.length;i++) {
                      g = d[i], Object.prototype.hasOwnProperty.call(a, g) && (j = a[g], b.push(f), md(g, b), b.push(": "), pd(j, b, c), f = ", ")
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
  pd(a, b, c)
}
function P(a) {
  var b = [];
  O(a, b, h);
  return b.join("")
}
;var qd;
function rd(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function sd(a) {
  var b = rd(a), c = eb(arguments, 1), d;
  d = b;
  for(var f = 0, g = 0;g < c.length;g++) {
    Za(d, c[g]) || (d.push(c[g]), f++)
  }
  d = f == c.length;
  a.className = b.join(" ");
  return d
}
function td(a) {
  var b = rd(a), c = eb(arguments, 1), d;
  d = b;
  for(var f = 0, g = 0;g < d.length;g++) {
    Za(c, d[g]) && (db(d, g--, 1), f++)
  }
  d = f == c.length;
  a.className = b.join(" ");
  return d
}
;var ud = !F || I("9");
!G && !F || F && I("9") || G && I("1.9.1");
var vd = F && !I("9");
function wd(a) {
  return a ? new xd(Q(a)) : qd || (qd = new xd)
}
function yd(a) {
  return u(a) ? document.getElementById(a) : a
}
function zd(a, b) {
  var c = b && b != "*" ? b.toUpperCase() : "";
  if(a.querySelectorAll && a.querySelector && (!H || document.compatMode == "CSS1Compat" || I("528")) && c) {
    return a.querySelectorAll(c + "")
  }
  return a.getElementsByTagName(c || "*")
}
function Ad(a, b) {
  Ka(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in Bd ? a.setAttribute(Bd[d], b) : a[d] = b
  })
}
var Bd = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Cd(a) {
  return a ? a.parentWindow || a.defaultView : window
}
function Dd(a, b, c, d) {
  function f(c) {
    c && b.appendChild(u(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && g.nodeType > 0) ? Ua(Ed(g) ? bb(g) : g, f) : f(g)
  }
}
function Fd(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Gd(a, b) {
  if(a.contains && b.nodeType == 1) {
    return a == b || a.contains(b)
  }
  if(typeof a.compareDocumentPosition != "undefined") {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
}
function Hd(a, b) {
  if(a == b) {
    return 0
  }
  if(a.compareDocumentPosition) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1
  }
  if("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
    var c = a.nodeType == 1, d = b.nodeType == 1;
    if(c && d) {
      return a.sourceIndex - b.sourceIndex
    }else {
      var f = a.parentNode, g = b.parentNode;
      if(f == g) {
        return Id(a, b)
      }
      if(!c && Gd(f, b)) {
        return-1 * Jd(a, b)
      }
      if(!d && Gd(g, a)) {
        return Jd(b, a)
      }
      return(c ? a.sourceIndex : f.sourceIndex) - (d ? b.sourceIndex : g.sourceIndex)
    }
  }
  d = Q(a);
  c = d.createRange();
  c.selectNode(a);
  c.collapse(!0);
  d = d.createRange();
  d.selectNode(b);
  d.collapse(!0);
  return c.compareBoundaryPoints(q.Range.START_TO_END, d)
}
function Jd(a, b) {
  var c = a.parentNode;
  if(c == b) {
    return-1
  }
  for(var d = b;d.parentNode != c;) {
    d = d.parentNode
  }
  return Id(d, a)
}
function Id(a, b) {
  for(var c = b;c = c.previousSibling;) {
    if(c == a) {
      return-1
    }
  }
  return 1
}
function Kd() {
  var a, b = arguments.length;
  if(b) {
    if(b == 1) {
      return arguments[0]
    }
  }else {
    return k
  }
  var c = [], d = Infinity;
  for(a = 0;a < b;a++) {
    for(var f = [], g = arguments[a];g;) {
      f.unshift(g), g = g.parentNode
    }
    c.push(f);
    d = Math.min(d, f.length)
  }
  f = k;
  for(a = 0;a < d;a++) {
    for(var g = c[0][a], i = 1;i < b;i++) {
      if(g != c[i][a]) {
        return f
      }
    }
    f = g
  }
  return f
}
function Q(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
function Ld(a) {
  return H ? a.document || a.contentWindow.document : a.contentDocument || a.contentWindow.document
}
var Md = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Nd = {IMG:" ", BR:"\n"};
function Od(a) {
  var b = a.getAttributeNode("tabindex");
  if(b && b.specified) {
    return a = a.tabIndex, typeof a == "number" && a >= 0
  }
  return!1
}
function Pd(a) {
  var b = [];
  Qd(a, b, !1);
  return b.join("")
}
function Qd(a, b, c) {
  if(!(a.nodeName in Md)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Nd) {
        b.push(Nd[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Qd(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Ed(a) {
  if(a && typeof a.length == "number") {
    if(ja(a)) {
      return typeof a.item == "function" || typeof a.item == "string"
    }else {
      if(v(a)) {
        return typeof a.item == "function"
      }
    }
  }
  return!1
}
function Rd(a) {
  return Sd(a, function(a) {
    return a.nodeName == "A" && !0
  })
}
function Sd(a, b) {
  for(var c = 0;a;) {
    if(b(a)) {
      return a
    }
    a = a.parentNode;
    c++
  }
  return k
}
function xd(a) {
  this.Z = a || q.document || document
}
o = xd.prototype;
o.Ua = wd;
o.ua = m("Z");
o.e = function(a) {
  return u(a) ? this.Z.getElementById(a) : a
};
o.q = function() {
  var a = this.Z, b = arguments, c = b[0], d = b[1];
  if(!ud && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', va(d.name), '"');
    if(d.type) {
      c.push(' type="', va(d.type), '"');
      var f = {};
      Qa(f, d);
      d = f;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  if(d) {
    u(d) ? c.className = d : t(d) ? sd.apply(k, [c].concat(d)) : Ad(c, d)
  }
  b.length > 2 && Dd(a, c, b, 2);
  return c
};
o.createElement = function(a) {
  return this.Z.createElement(a)
};
o.createTextNode = function(a) {
  return this.Z.createTextNode(a)
};
o.ha = function() {
  return this.Z.parentWindow || this.Z.defaultView
};
o.appendChild = function(a, b) {
  a.appendChild(b)
};
o.append = function(a) {
  Dd(Q(a), a, arguments, 1)
};
function Td(a, b) {
  if(b.firstElementChild != h) {
    return b.firstElementChild
  }
  for(var c = b.firstChild;c && c.nodeType != 1;) {
    c = c.nextSibling
  }
  return c
}
o.contains = Gd;
function Ud(a, b, c) {
  a.style[Fa(c)] = b
}
function Vd(a, b) {
  F ? a.cssText = b : a[H ? "innerText" : "innerHTML"] = b
}
var Wd = G ? "MozUserSelect" : H ? "WebkitUserSelect" : k;
function Xd(a) {
  J.call(this);
  this.lc = a
}
B(Xd, J);
var Yd = new K(0, 100), Zd = [];
function R(a, b, c, d, f, g) {
  t(c) || (Zd[0] = c, c = Zd);
  for(var i = 0;i < c.length;i++) {
    var j = a, l = M(b, c[i], d || a, f || !1, g || a.lc || a);
    j.h ? j.h[l] = !0 : j.ab ? (j.h = Yd.getObject(), j.h[j.ab] = !0, j.ab = k, j.h[l] = !0) : j.ab = l
  }
  return a
}
function $d(a, b, c, d, f, g) {
  if(a.ab || a.h) {
    if(t(c)) {
      for(var i = 0;i < c.length;i++) {
        $d(a, b, c[i], d, f, g)
      }
    }else {
      a: {
        d = d || a;
        g = g || a.lc || a;
        f = !!f;
        if(b = Tc(b, c, f)) {
          for(c = 0;c < b.length;c++) {
            if(b[c].Nb == d && b[c].capture == f && b[c].bd == g) {
              b = b[c];
              break a
            }
          }
        }
        b = k
      }
      if(b) {
        if(b = b.key, N(b), a.h) {
          c = a.h, b in c && delete c[b]
        }else {
          if(a.ab == b) {
            a.ab = k
          }
        }
      }
    }
  }
  return a
}
Xd.prototype.od = function() {
  if(this.h) {
    for(var a in this.h) {
      N(a), delete this.h[a]
    }
    Ac(Yd, this.h);
    this.h = k
  }else {
    this.ab && N(this.ab)
  }
};
Xd.prototype.c = function() {
  Xd.b.c.call(this);
  this.od()
};
Xd.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function ae() {
}
fa(ae);
ae.prototype.ih = 0;
ae.Eb();
function be(a) {
  J.call(this);
  this.Ta = a || wd();
  this.Bc = ce
}
B(be, Zc);
be.prototype.Yg = ae.Eb();
var ce = k;
function de(a, b) {
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
o = be.prototype;
o.aa = k;
o.O = !1;
o.t = k;
o.Bc = k;
o.gh = k;
o.D = k;
o.I = k;
o.V = k;
o.rg = !1;
function ee(a) {
  return a.aa || (a.aa = ":" + (a.Yg.ih++).toString(36))
}
function fe(a, b) {
  if(a.D && a.D.V) {
    var c = a.D.V, d = a.aa;
    d in c && delete c[d];
    Na(a.D.V, b, a)
  }
  a.aa = b
}
o.e = m("t");
function ge(a) {
  return a.Gb || (a.Gb = new Xd(a))
}
function he(a, b) {
  a == b && e(Error("Unable to set parent component"));
  var c;
  if(c = b) {
    if(c = a.D) {
      if(c = a.aa) {
        if(c = a.D.V && a.aa) {
          c = a.D.V;
          var d = a.aa;
          c = d in c ? c[d] : h
        }
        c = c && a.D != b
      }
    }
  }
  c && e(Error("Unable to set parent component"));
  a.D = b;
  be.b.Ce.call(a, b)
}
o.getParent = m("D");
o.Ce = function(a) {
  this.D && this.D != a && e(Error("Method not supported"));
  be.b.Ce.call(this, a)
};
o.Ua = m("Ta");
o.q = function() {
  this.t = this.Ta.createElement("div")
};
function ie(a, b, c) {
  a.O && e(Error("Component already rendered"));
  a.t || a.q();
  b ? b.insertBefore(a.t, c || k) : a.Ta.ua().body.appendChild(a.t);
  (!a.D || a.D.O) && a.Ga()
}
o.Sa = function(a) {
  if(this.O) {
    e(Error("Component already rendered"))
  }else {
    if(a && this.Ab(a)) {
      this.rg = !0;
      if(!this.Ta || this.Ta.ua() != Q(a)) {
        this.Ta = wd(a)
      }
      this.ec(a);
      this.Ga()
    }else {
      e(Error("Invalid element to decorate"))
    }
  }
};
o.Ab = n(!0);
o.ec = aa("t");
o.Ga = function() {
  this.O = !0;
  je(this, function(a) {
    !a.O && a.e() && a.Ga()
  })
};
o.lb = function() {
  je(this, function(a) {
    a.O && a.lb()
  });
  this.Gb && this.Gb.od();
  this.O = !1
};
o.c = function() {
  be.b.c.call(this);
  this.O && this.lb();
  this.Gb && (this.Gb.i(), delete this.Gb);
  je(this, function(a) {
    a.i()
  });
  !this.rg && this.t && Fd(this.t);
  this.D = this.gh = this.t = this.V = this.I = k
};
o.nb = m("t");
o.Wb = function(a) {
  this.O && e(Error("Component already rendered"));
  this.Bc = a
};
function je(a, b) {
  a.I && Ua(a.I, b, h)
}
o.removeChild = function(a, b) {
  if(a) {
    var c = u(a) ? a : ee(a), d;
    if(this.V && c) {
      var f = this.V;
      c in f && (d = f[c]);
      d = d || k
    }else {
      d = k
    }
    a = d;
    if(c && a) {
      d = this.V, c in d && delete d[c], $a(this.I, a), b && (a.lb(), a.t && Fd(a.t)), he(a, k)
    }
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function ke() {
}
var le;
fa(ke);
o = ke.prototype;
o.hc = function() {
};
o.q = function(a) {
  return a.Ua().q("div", me(this, a).join(" "), a.jb)
};
o.nb = function(a) {
  return a
};
o.fc = function(a, b, c) {
  if(a = a.e ? a.e() : a) {
    if(F && !I("7")) {
      var d = ne(rd(a), b);
      d.push(b);
      oa(c ? sd : td, a).apply(k, d)
    }else {
      c ? sd(a, b) : td(a, b)
    }
  }
};
o.Ab = n(!0);
o.Sa = function(a, b) {
  b.id && fe(a, b.id);
  var c = this.nb(b);
  c && c.firstChild ? oe(a, c.firstChild.nextSibling ? bb(c.childNodes) : c.firstChild) : a.jb = k;
  var d = 0, f = this.$(), g = this.$(), i = !1, j = !1, c = !1, l = rd(b);
  Ua(l, function(a) {
    if(!i && a == f) {
      i = !0, g == f && (j = !0)
    }else {
      if(!j && a == g) {
        j = !0
      }else {
        var b = d;
        if(!this.jg) {
          this.Sc || pe(this), this.jg = Oa(this.Sc)
        }
        a = parseInt(this.jg[a], 10);
        d = b | (isNaN(a) ? 0 : a)
      }
    }
  }, this);
  a.n = d;
  i || (l.push(f), g == f && (j = !0));
  j || l.push(g);
  var p = a.la;
  p && l.push.apply(l, p);
  if(F && !I("7")) {
    var x = ne(l);
    x.length > 0 && (l.push.apply(l, x), c = !0)
  }
  if(!i || !j || p || c) {
    b.className = l.join(" ")
  }
  return b
};
o.Cf = function(a) {
  if(a.Bc == k) {
    var b = a.O ? a.t : a.Ta.ua().body, c;
    a: {
      c = Q(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(b, k))) {
        c = c.direction || c.getPropertyValue("direction");
        break a
      }
      c = ""
    }
    a.Bc = "rtl" == (c || (b.currentStyle ? b.currentStyle.direction : k) || b.style.direction)
  }
  a.Bc && this.Wb(a.e(), !0);
  a.isEnabled() && this.Fc(a, a.gb)
};
o.Dc = function(a, b) {
  var c = !b, d = F || E ? a.getElementsByTagName("*") : k;
  if(Wd) {
    if(c = c ? "none" : "", a.style[Wd] = c, d) {
      for(var f = 0, g;g = d[f];f++) {
        g.style[Wd] = c
      }
    }
  }else {
    if(F || E) {
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for(f = 0;g = d[f];f++) {
          g.setAttribute("unselectable", c)
        }
      }
    }
  }
};
o.Wb = function(a, b) {
  this.fc(a, this.$() + "-rtl", b)
};
o.Ef = function(a) {
  var b;
  if(a.ra & 32 && (b = a.pb())) {
    return Od(b)
  }
  return!1
};
o.Fc = function(a, b) {
  var c;
  if(a.ra & 32 && (c = a.pb())) {
    if(!b && a.n & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.n & 32 && a.sf()
    }
    if(Od(c) != b) {
      b ? c.tabIndex = 0 : c.removeAttribute("tabIndex")
    }
  }
};
o.Ee = function(a, b) {
  a.style.display = b ? "" : "none"
};
o.ba = function(a, b, c) {
  var d = a.e();
  if(d) {
    var f = qe(this, b);
    f && this.fc(a, f, c);
    this.$b(d, b, c)
  }
};
o.$b = function(a, b, c) {
  le || (le = {1:"disabled", 4:"pressed", 8:"selected", 16:"checked", 64:"expanded"});
  (b = le[b]) && a.setAttribute("aria-" + b, c)
};
o.pb = function(a) {
  return a.e()
};
o.$ = n("goog-control");
function me(a, b) {
  var c = a.$(), d = [c], f = a.$();
  f != c && d.push(f);
  c = b.n;
  for(f = [];c;) {
    var g = c & -c;
    f.push(qe(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.la) && d.push.apply(d, c);
  F && !I("7") && d.push.apply(d, ne(d));
  return d
}
function ne(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Ua([], function(d) {
    Xa(d, oa(Za, a)) && (!b || Za(d, b)) && c.push(d.join("_"))
  });
  return c
}
function qe(a, b) {
  a.Sc || pe(a);
  return a.Sc[b]
}
function pe(a) {
  var b = a.$();
  a.Sc = {1:b + "-disabled", 2:b + "-hover", 4:b + "-active", 8:b + "-selected", 16:b + "-checked", 32:b + "-focused", 64:b + "-open"}
}
;function re(a, b) {
  a || e(Error("Invalid class name " + a));
  v(b) || e(Error("Invalid decorator function " + b))
}
var se = {};
function te(a, b, c, d, f) {
  if(!F && (!H || !I("525"))) {
    return!0
  }
  if(ac && f) {
    return ue(a)
  }
  if(f && !d) {
    return!1
  }
  if(!c && (b == 17 || b == 18)) {
    return!1
  }
  if(F && d && b == a) {
    return!1
  }
  switch(a) {
    case 13:
      return!0;
    case 27:
      return!H
  }
  return ue(a)
}
function ue(a) {
  if(a >= 48 && a <= 57) {
    return!0
  }
  if(a >= 96 && a <= 106) {
    return!0
  }
  if(a >= 65 && a <= 90) {
    return!0
  }
  if(H && a == 0) {
    return!0
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
      return!0;
    default:
      return!1
  }
}
;function ve(a, b) {
  J.call(this);
  a && we(this, a, b)
}
B(ve, Zc);
o = ve.prototype;
o.t = k;
o.ed = k;
o.le = k;
o.fd = k;
o.bb = -1;
o.$a = -1;
var xe = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, ye = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, ze = {61:187, 
59:186}, Ae = F || H && I("525");
o = ve.prototype;
o.ae = function(a) {
  if(H && (this.bb == 17 && !a.ctrlKey || this.bb == 18 && !a.altKey)) {
    this.$a = this.bb = -1
  }
  Ae && !te(a.keyCode, this.bb, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.$a = G && a.keyCode in ze ? ze[a.keyCode] : a.keyCode
};
o.Tg = function() {
  this.$a = this.bb = -1
};
o.handleEvent = function(a) {
  var b = a.ga, c, d;
  F && a.type == "keypress" ? (c = this.$a, d = c != 13 && c != 27 ? b.keyCode : 0) : H && a.type == "keypress" ? (c = this.$a, d = b.charCode >= 0 && b.charCode < 63232 && ue(c) ? b.charCode : 0) : E ? (c = this.$a, d = ue(c) ? b.keyCode : 0) : (c = b.keyCode || this.$a, d = b.charCode || 0, ac && d == 63 && !c && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in xe ? f = xe[c] : c == 25 && a.shiftKey && (f = 9) : g && g in ye && (f = ye[g]);
  a = f == this.bb;
  this.bb = f;
  b = new Be(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.i()
  }
};
o.e = m("t");
function we(a, b, c) {
  a.fd && a.detach();
  a.t = b;
  a.ed = M(a.t, "keypress", a, c);
  a.le = M(a.t, "keydown", a.ae, c, a);
  a.fd = M(a.t, "keyup", a.Tg, c, a)
}
o.detach = function() {
  if(this.ed) {
    N(this.ed), N(this.le), N(this.fd), this.fd = this.le = this.ed = k
  }
  this.t = k;
  this.$a = this.bb = -1
};
o.c = function() {
  ve.b.c.call(this);
  this.detach()
};
function Be(a, b, c, d) {
  d && this.rb(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
B(Be, tc);
function S(a, b, c) {
  be.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = w(b);
      if(d = se[d]) {
        break
      }
      b = b.b ? b.b.constructor : k
    }
    b = d ? v(d.Eb) ? d.Eb() : new d : k
  }
  this.v = b;
  this.jb = a
}
B(S, be);
o = S.prototype;
o.jb = k;
o.n = 0;
o.ra = 39;
o.Fd = 255;
o.Bh = 0;
o.gb = !0;
o.la = k;
o.ce = !0;
o.Qc = !1;
function Ce(a) {
  a.O && !1 != a.ce && De(a, !1);
  a.ce = !1
}
o.pb = function() {
  return this.v.pb(this)
};
function Ee(a, b) {
  if(b) {
    a.la ? Za(a.la, b) || a.la.push(b) : a.la = [b], a.v.fc(a, b, !0)
  }
}
o.fc = function(a, b) {
  if(b) {
    Ee(this, a)
  }else {
    if(a && this.la) {
      $a(this.la, a);
      if(this.la.length == 0) {
        this.la = k
      }
      this.v.fc(this, a, !1)
    }
  }
};
o.q = function() {
  var a = this.v.q(this);
  this.t = a;
  var b = this.v.hc();
  if(b) {
    a.setAttribute("role", b), a.sh = b
  }
  this.Qc || this.v.Dc(a, !1);
  this.gb || this.v.Ee(a, !1)
};
o.nb = function() {
  return this.v.nb(this.e())
};
o.Ab = function(a) {
  return this.v.Ab(a)
};
o.ec = function(a) {
  this.t = a = this.v.Sa(this, a);
  var b = this.v.hc();
  if(b) {
    var c = a;
    c.setAttribute("role", b);
    c.sh = b
  }
  this.Qc || this.v.Dc(a, !1);
  this.gb = a.style.display != "none"
};
o.Ga = function() {
  S.b.Ga.call(this);
  this.v.Cf(this);
  if(this.ra & -2 && (this.ce && De(this, !0), this.ra & 32)) {
    var a = this.pb();
    if(a) {
      var b = this.Kb || (this.Kb = new ve);
      we(b, a);
      R(R(R(ge(this), b, "key", this.Qg), a, "focus", this.Pg), a, "blur", this.sf)
    }
  }
};
function De(a, b) {
  var c = ge(a), d = a.e();
  b ? (R(R(R(R(c, d, "mouseover", a.xf), d, "mousedown", a.vf), d, "mouseup", a.yf), d, "mouseout", a.wf), F && R(c, d, "dblclick", a.tf)) : ($d($d($d($d(c, d, "mouseover", a.xf), d, "mousedown", a.vf), d, "mouseup", a.yf), d, "mouseout", a.wf), F && $d(c, d, "dblclick", a.tf))
}
o.lb = function() {
  S.b.lb.call(this);
  this.Kb && this.Kb.detach();
  this.gb && this.isEnabled() && this.v.Fc(this, !1)
};
o.c = function() {
  S.b.c.call(this);
  this.Kb && (this.Kb.i(), delete this.Kb);
  delete this.v;
  this.la = this.jb = k
};
function oe(a, b) {
  a.jb = b
}
function Fe(a) {
  a = a.jb;
  if(!a) {
    return""
  }
  if(!u(a)) {
    if(t(a)) {
      a = Va(a, Pd).join("")
    }else {
      if(vd && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Qd(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      F || (a = a.replace(/ +/g, " "));
      a != " " && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
o.Wb = function(a) {
  S.b.Wb.call(this, a);
  var b = this.e();
  b && this.v.Wb(b, a)
};
o.Dc = function(a) {
  this.Qc = a;
  var b = this.e();
  b && this.v.Dc(b, a)
};
o.Ee = function(a, b) {
  if(b || this.gb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.e();
    c && this.v.Ee(c, a);
    this.isEnabled() && this.v.Fc(this, a);
    this.gb = a;
    return!0
  }
  return!1
};
o.isEnabled = function() {
  return!(this.n & 1)
};
o.Ec = function(a) {
  var b = this.getParent();
  if((!b || typeof b.isEnabled != "function" || b.isEnabled()) && Ge(this, 1, !a)) {
    a || (this.setActive(!1), He(this, !1)), this.gb && this.v.Fc(this, a), this.ba(1, !a)
  }
};
function He(a, b) {
  Ge(a, 2, b) && a.ba(2, b)
}
o.oc = function() {
  return!!(this.n & 4)
};
o.setActive = function(a) {
  Ge(this, 4, a) && this.ba(4, a)
};
o.ba = function(a, b) {
  if(this.ra & a && b != !!(this.n & a)) {
    this.v.ba(this, a, b), this.n = b ? this.n | a : this.n & ~a
  }
};
function Ie(a) {
  a.O && a.n & 32 && e(Error("Component already rendered"));
  a.n & 32 && a.ba(32, !1);
  a.ra &= -33
}
function T(a, b) {
  return!!(a.Fd & b) && !!(a.ra & b)
}
function Ge(a, b, c) {
  return!!(a.ra & b) && !!(a.n & b) != c && (!(a.Bh & b) || a.dispatchEvent(de(b, c))) && !a.Da
}
o.xf = function(a) {
  (!a.relatedTarget || !Gd(this.e(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && T(this, 2) && He(this, !0)
};
o.wf = function(a) {
  if((!a.relatedTarget || !Gd(this.e(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    T(this, 4) && this.setActive(!1), T(this, 2) && He(this, !1)
  }
};
o.vf = function(a) {
  if(this.isEnabled() && (T(this, 2) && He(this, !0), vc(a) && (!H || !ac || !a.ctrlKey))) {
    T(this, 4) && this.setActive(!0), this.v.Ef(this) && this.pb().focus()
  }
  !this.Qc && vc(a) && (!H || !ac || !a.ctrlKey) && a.preventDefault()
};
o.yf = function(a) {
  this.isEnabled() && (T(this, 2) && He(this, !0), this.oc() && this.wc(a) && T(this, 4) && this.setActive(!1))
};
o.tf = function(a) {
  this.isEnabled() && this.wc(a)
};
o.wc = function(a) {
  if(T(this, 16)) {
    var b = !(this.n & 16);
    Ge(this, 16, b) && this.ba(16, b)
  }
  T(this, 8) && Ge(this, 8, !0) && this.ba(8, !0);
  T(this, 64) && (b = !(this.n & 64), Ge(this, 64, b) && this.ba(64, b));
  b = new rc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, f = 0;d = c[f];f++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
o.Pg = function() {
  T(this, 32) && Ge(this, 32, !0) && this.ba(32, !0)
};
o.sf = function() {
  T(this, 4) && this.setActive(!1);
  T(this, 32) && Ge(this, 32, !1) && this.ba(32, !1)
};
o.Qg = function(a) {
  if(this.gb && this.isEnabled() && this.be(a)) {
    return a.preventDefault(), a.stopPropagation(), !0
  }
  return!1
};
o.be = function(a) {
  return a.keyCode == 13 && this.wc(a)
};
v(S) || e(Error("Invalid component class " + S));
v(ke) || e(Error("Invalid renderer class " + ke));
var Je = w(S);
se[Je] = ke;
re("goog-control", function() {
  return new S(k)
});
function Ke() {
}
B(Ke, ke);
fa(Ke);
o = Ke.prototype;
o.hc = n("button");
o.$b = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : Ke.b.$b.call(this, a, b, c)
};
o.q = function(a) {
  var b = Ke.b.q.call(this, a), c = a.ic();
  c && this.De(b, c);
  (c = a.jc()) && this.ud(b, c);
  a.ra & 16 && this.$b(b, 16, !1);
  return b
};
o.Sa = function(a, b) {
  var b = Ke.b.Sa.call(this, a, b), c = this.jc(b);
  a.Oe = c;
  a.Ke = this.ic(b);
  a.ra & 16 && this.$b(b, 16, !1);
  return b
};
o.jc = s;
o.ud = s;
o.ic = function(a) {
  return a.title
};
o.De = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
o.$ = n("goog-button");
function Le() {
}
B(Le, Ke);
fa(Le);
o = Le.prototype;
o.hc = function() {
};
o.q = function(a) {
  Ce(a);
  a.Fd &= -256;
  Ie(a);
  return a.Ua().q("button", {"class":me(this, a).join(" "), disabled:!a.isEnabled(), title:a.ic() || "", value:a.jc() || ""}, Fe(a) || "")
};
o.Ab = function(a) {
  return a.tagName == "BUTTON" || a.tagName == "INPUT" && (a.type == "button" || a.type == "submit" || a.type == "reset")
};
o.Sa = function(a, b) {
  Ce(a);
  a.Fd &= -256;
  Ie(a);
  b.disabled && sd(b, qe(this, 1));
  return Le.b.Sa.call(this, a, b)
};
o.Cf = function(a) {
  R(ge(a), a.e(), "click", a.wc)
};
o.Dc = s;
o.Wb = s;
o.Ef = function(a) {
  return a.isEnabled()
};
o.Fc = s;
o.ba = function(a, b, c) {
  Le.b.ba.call(this, a, b, c);
  if((a = a.e()) && b == 1) {
    a.disabled = c
  }
};
o.jc = function(a) {
  return a.value
};
o.ud = function(a, b) {
  if(a) {
    a.value = b
  }
};
o.$b = s;
function Me(a, b, c) {
  S.call(this, a, b || Le.Eb(), c)
}
B(Me, S);
o = Me.prototype;
o.jc = m("Oe");
o.ud = function(a) {
  this.Oe = a;
  this.v.ud(this.e(), a)
};
o.ic = m("Ke");
o.De = function(a) {
  this.Ke = a;
  this.v.De(this.e(), a)
};
o.c = function() {
  Me.b.c.call(this);
  delete this.Oe;
  delete this.Ke
};
o.Ga = function() {
  Me.b.Ga.call(this);
  if(this.ra & 32) {
    var a = this.pb();
    a && R(ge(this), a, "keyup", this.be)
  }
};
o.be = function(a) {
  if(a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup") {
    return this.wc(a)
  }
  return a.keyCode == 32
};
re("goog-button", function() {
  return new Me(k)
});
function Ne() {
}
B(Ne, Ke);
fa(Ne);
o = Ne.prototype;
o.q = function(a) {
  var b = {"class":"goog-inline-block " + me(this, a).join(" "), title:a.ic() || ""};
  return a.Ua().q("div", b, Oe(this, a.jb, a.Ua()))
};
o.hc = n("button");
o.nb = function(a) {
  return a && a.firstChild.firstChild
};
function Oe(a, b, c) {
  return c.q("div", "goog-inline-block " + (a.$() + "-outer-box"), c.q("div", "goog-inline-block " + (a.$() + "-inner-box"), b))
}
o.Ab = function(a) {
  return a.tagName == "DIV"
};
o.Sa = function(a, b) {
  Pe(b, !0);
  Pe(b, !1);
  var c;
  a: {
    if((c = Td(a.Ua(), b)) && c.className.indexOf(this.$() + "-outer-box") != -1) {
      if((c = Td(a.Ua(), c)) && c.className.indexOf(this.$() + "-inner-box") != -1) {
        c = !0;
        break a
      }
    }
    c = !1
  }
  c || b.appendChild(Oe(this, b.childNodes, a.Ua()));
  sd(b, "goog-inline-block", this.$());
  return Ne.b.Sa.call(this, a, b)
};
o.$ = n("goog-custom-button");
function Pe(a, b) {
  if(a) {
    for(var c = b ? a.firstChild : a.lastChild, d;c && c.parentNode == a;) {
      d = b ? c.nextSibling : c.previousSibling;
      if(c.nodeType == 3) {
        var f = c.nodeValue;
        if(ra(f) == "") {
          a.removeChild(c)
        }else {
          c.nodeValue = b ? f.replace(/^[\s\xa0]+/, "") : f.replace(/[\s\xa0]+$/, "");
          break
        }
      }else {
        break
      }
      c = d
    }
  }
}
;function Qe(a, b, c) {
  Me.call(this, a, b || Ne.Eb(), c)
}
B(Qe, Me);
re("goog-custom-button", function() {
  return new Qe(k)
});
var Re, Se, Te, Ue, Ve, We, Xe;
Xe = We = Ve = Ue = Te = Se = Re = !1;
var Ye = Xb();
Ye && (Ye.indexOf("Firefox") != -1 ? Re = !0 : Ye.indexOf("Camino") != -1 ? Se = !0 : Ye.indexOf("iPhone") != -1 || Ye.indexOf("iPod") != -1 ? Te = !0 : Ye.indexOf("iPad") != -1 ? Ue = !0 : Ye.indexOf("Android") != -1 ? Ve = !0 : Ye.indexOf("Chrome") != -1 ? We = !0 : Ye.indexOf("Safari") != -1 && (Xe = !0));
var Ze = Se, $e = Te, af = Ue, bf = Ve, df = We, ef = Xe;
var ff;
a: {
  var gf = "", hf, jf;
  if(Re) {
    hf = /Firefox\/([0-9.]+)/
  }else {
    if(F || E) {
      ff = bc;
      break a
    }else {
      df ? hf = /Chrome\/([0-9.]+)/ : ef ? hf = /Version\/([0-9.]+)/ : $e || af ? (hf = /Version\/(\S+).*Mobile\/(\S+)/, jf = !0) : bf ? hf = /Android\s+([0-9.]+)(?:.*Version\/([0-9.]+))?/ : Ze && (hf = /Camino\/([0-9.]+)/)
    }
  }
  if(hf) {
    var kf = hf.exec(Xb()), gf = kf ? jf ? kf[1] + "." + kf[2] : kf[2] || kf[1] : ""
  }
  ff = gf
}
;F && kc();
G || H || E || F && kc();
var lf = F || H || E || !1, mf = H || !1, nf = F || H || E, of = G && !0;
F && I("7.0");
var pf = G && I("1.8") || H || E;
F || E || G && I("1.9");
var qf = F || E, rf = F || H && I("525");
H && I("531");
H && I("528");
G && I("1.9") || F || E || H && I("531");
G || H && I("526");
df && Ca(ff, "4") >= 0 || ef && I("533");
E && I("11.10");
df && Ca(ff, "12");
function sf(a, b, c) {
  this.pf = a;
  this.Ge = b;
  this.qf = this.Gd = !1;
  this.Ud = c || {}
}
function tf(a, b) {
  this.qi = a;
  this.af = b
}
;function uf(a, b, c, d, f) {
  this.Q = !!b;
  a && vf(this, a, d);
  this.ia = f != h ? f : this.U || 0;
  this.Q && (this.ia *= -1);
  this.Uc = !c
}
B(uf, ib);
o = uf.prototype;
o.P = k;
o.U = 0;
o.ca = !1;
function vf(a, b, c, d) {
  if(a.P = b) {
    a.U = typeof c == "number" ? c : a.P.nodeType != 1 ? 0 : a.Q ? -1 : 1
  }
  if(typeof d == "number") {
    a.ia = d
  }
}
o.Ba = function(a) {
  this.P = a.P;
  this.U = a.U;
  this.ia = a.ia;
  this.Q = a.Q;
  this.Uc = a.Uc
};
o.M = function() {
  return new uf(this.P, this.Q, !this.Uc, this.U, this.ia)
};
o.next = function() {
  var a;
  if(this.ca) {
    (!this.P || this.Uc && this.ia == 0) && e(hb);
    a = this.P;
    var b = this.Q ? -1 : 1;
    if(this.U == b) {
      var c = this.Q ? a.lastChild : a.firstChild;
      c ? vf(this, c) : vf(this, a, b * -1)
    }else {
      (c = this.Q ? a.previousSibling : a.nextSibling) ? vf(this, c) : vf(this, a.parentNode, b * -1)
    }
    this.ia += this.U * (this.Q ? -1 : 1)
  }else {
    this.ca = !0
  }
  (a = this.P) || e(hb);
  return a
};
o.w = function(a) {
  return a.P == this.P && (!this.P || a.U == this.U)
};
o.splice = function() {
  var a = this.P, b = this.Q ? 1 : -1;
  if(this.U == b) {
    this.U = b * -1, this.ia += this.U * (this.Q ? -1 : 1)
  }
  this.Q = !this.Q;
  uf.prototype.next.call(this);
  this.Q = !this.Q;
  for(var b = ha(arguments[0]) ? arguments[0] : arguments, c = b.length - 1;c >= 0;c--) {
    a.parentNode && a.parentNode.insertBefore(b[c], a.nextSibling)
  }
  Fd(a)
};
function wf(a) {
  this.r = new sb;
  a && this.Dd(a)
}
function xf(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + w(a) : b.substr(0, 1) + a
}
o = wf.prototype;
o.C = function() {
  return this.r.C()
};
o.add = function(a) {
  this.r.set(xf(a), a)
};
o.Dd = function(a) {
  for(var a = nb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
o.od = function(a) {
  for(var a = nb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
o.remove = function(a) {
  return this.r.remove(xf(a))
};
o.clear = function() {
  this.r.clear()
};
o.sb = function() {
  return this.r.sb()
};
o.contains = function(a) {
  return this.r.X(xf(a))
};
o.S = function() {
  return this.r.S()
};
o.M = function() {
  return new wf(this)
};
o.w = function(a) {
  return this.C() == mb(a) && yf(this, a)
};
function yf(a, b) {
  var c = mb(b);
  if(a.C() > c) {
    return!1
  }
  !(b instanceof wf) && c > 5 && (b = new wf(b));
  return rb(a, function(a) {
    return pb(b, a)
  })
}
o.za = function() {
  return this.r.za(!1)
};
function zf(a) {
  return Af(a || arguments.callee.caller, [])
}
function Af(a, b) {
  var c = [];
  if(Za(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(Bf(a) + "(");
      for(var d = a.arguments, f = 0;f < d.length;f++) {
        f > 0 && c.push(", ");
        var g;
        g = d[f];
        switch(typeof g) {
          case "object":
            g = g ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            g = String(g);
            break;
          case "boolean":
            g = g ? "true" : "false";
            break;
          case "function":
            g = (g = Bf(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g
        }
        g.length > 40 && (g = g.substr(0, 40) + "...");
        c.push(g)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Af(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Bf(a) {
  a = String(a);
  if(!Cf[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Cf[a] = b ? b[1] : "[Anonymous]"
  }
  return Cf[a]
}
var Cf = {};
function Df(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
Df.prototype.vh = 0;
Df.prototype.Td = k;
Df.prototype.Sd = k;
var Ef = 0;
Df.prototype.reset = function(a, b, c, d, f) {
  this.vh = typeof f == "number" ? f : Ef++;
  this.lg = d || A();
  this.La = a;
  this.Pf = b;
  this.Kf = c;
  delete this.Td;
  delete this.Sd
};
Df.prototype.Gc = aa("La");
function Ff(a) {
  this.hh = a
}
Ff.prototype.D = k;
Ff.prototype.La = k;
Ff.prototype.I = k;
Ff.prototype.mc = k;
function U(a, b) {
  this.name = a;
  this.value = b
}
U.prototype.toString = m("name");
var Gf = new U("SHOUT", 1200), Hf = new U("SEVERE", 1E3), If = new U("WARNING", 900), Jf = new U("INFO", 800), Kf = new U("CONFIG", 700), Lf = new U("FINE", 500), Mf = new U("FINEST", 300), Nf = new U("ALL", 0), Of = [new U("OFF", Infinity), Gf, Hf, If, Jf, Kf, Lf, new U("FINER", 400), Mf, Nf], Pf = k;
function Qf(a) {
  if(!Pf) {
    Pf = {};
    for(var b = 0, c;c = Of[b];b++) {
      Pf[c.value] = c, Pf[c.name] = c
    }
  }
  return Pf[a] || k
}
o = Ff.prototype;
o.getParent = m("D");
o.Gc = aa("La");
function Rf(a) {
  if(a.La) {
    return a.La
  }
  if(a.D) {
    return Rf(a.D)
  }
  Ha("Root logger has no level set.");
  return k
}
o.log = function(a, b, c) {
  if(a.value >= Rf(this).value) {
    a = this.Ng(a, b, c);
    q.console && q.console.markTimeline && q.console.markTimeline("log:" + a.Pf);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.mc) {
        for(var f = 0, g = h;g = c.mc[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
o.Ng = function(a, b, c) {
  var d = new Df(a, String(b), this.hh);
  if(c) {
    d.Td = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var i;
      var j = ea("window.location.href");
      if(u(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var l, p, x = !1;
        try {
          l = c.lineNumber || c.ki || "Not available"
        }catch(r) {
          l = "Not available", x = !0
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || j
        }catch(z) {
          p = "Not available", x = !0
        }
        i = x || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:l, fileName:p, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + va(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + va(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + va(zf(g) + "-> ")
    }catch(D) {
      f = "Exception trying to expose exception! You win, we lose. " + D
    }
    d.Sd = f
  }
  return d
};
function Sf(a, b) {
  a.log(Hf, b, h)
}
function Tf(a, b) {
  a.log(If, b, h)
}
o.info = function(a, b) {
  this.log(Jf, a, b)
};
function V(a, b) {
  a.log(Lf, b, h)
}
function W(a, b) {
  a.log(Mf, b, h)
}
var Uf = {}, Vf = k;
function Wf() {
  Vf || (Vf = new Ff(""), Uf[""] = Vf, Vf.Gc(Kf))
}
function Xf() {
  Wf();
  return Vf
}
function X(a) {
  Wf();
  var b;
  if(!(b = Uf[a])) {
    b = new Ff(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = X(a.substr(0, c));
    if(!c.I) {
      c.I = {}
    }
    c.I[d] = b;
    b.D = c;
    Uf[a] = b
  }
  return b
}
;function Yf() {
  J.call(this)
}
B(Yf, J);
X("goog.dom.SavedRange");
function Zf() {
}
function $f(a) {
  if(a.getSelection) {
    return a.getSelection()
  }else {
    var a = a.document, b = a.selection;
    if(b) {
      try {
        var c = b.createRange();
        if(c.parentElement) {
          if(c.parentElement().document != a) {
            return k
          }
        }else {
          if(!c.length || c.item(0).document != a) {
            return k
          }
        }
      }catch(d) {
        return k
      }
      return b
    }
    return k
  }
}
function ag(a) {
  for(var b = [], c = 0, d = a.Fb();c < d;c++) {
    b.push(a.Wa(c))
  }
  return b
}
Zf.prototype.Ya = n(!1);
Zf.prototype.ua = function() {
  return Q(F ? this.Ja() : this.o())
};
Zf.prototype.ha = function() {
  return Cd(this.ua())
};
Zf.prototype.containsNode = function(a, b) {
  return this.Ra(bg(cg(a), h), b)
};
function dg(a, b) {
  uf.call(this, a, b, !0)
}
B(dg, uf);
function eg() {
}
B(eg, Zf);
eg.prototype.Ra = function(a, b) {
  var c = ag(this), d = ag(a);
  return(b ? Wa : Xa)(d, function(a) {
    return Wa(c, function(c) {
      return c.Ra(a, b)
    })
  })
};
function fg(a, b, c, d, f) {
  var g;
  if(a) {
    this.g = a;
    this.k = b;
    this.f = c;
    this.j = d;
    if(a.nodeType == 1 && a.tagName != "BR") {
      if(a = a.childNodes, b = a[b]) {
        this.g = b, this.k = 0
      }else {
        if(a.length) {
          this.g = Sa(a)
        }
        g = !0
      }
    }
    if(c.nodeType == 1) {
      (this.f = c.childNodes[d]) ? this.j = 0 : this.f = c
    }
  }
  dg.call(this, f ? this.f : this.g, f);
  if(g) {
    try {
      this.next()
    }catch(i) {
      i != hb && e(i)
    }
  }
}
B(fg, dg);
o = fg.prototype;
o.g = k;
o.f = k;
o.k = 0;
o.j = 0;
o.o = m("g");
o.u = m("f");
o.pc = function() {
  return this.ca && this.P == this.f && (!this.j || this.U != 1)
};
o.next = function() {
  this.pc() && e(hb);
  return fg.b.next.call(this)
};
o.Ba = function(a) {
  this.g = a.g;
  this.f = a.f;
  this.k = a.k;
  this.j = a.j;
  this.ma = a.ma;
  fg.b.Ba.call(this, a)
};
o.M = function() {
  var a = new fg(this.g, this.k, this.f, this.j, this.ma);
  a.Ba(this);
  return a
};
function gg() {
}
gg.prototype.Ra = function(a, b) {
  var c = b && !a.isCollapsed(), d = a.d;
  try {
    return c ? this.da(d, 0, 1) >= 0 && this.da(d, 1, 0) <= 0 : this.da(d, 0, 0) >= 0 && this.da(d, 1, 1) <= 0
  }catch(f) {
    return F || e(f), !1
  }
};
gg.prototype.containsNode = function(a, b) {
  return this.Ra(cg(a), b)
};
gg.prototype.za = function() {
  return new fg(this.o(), this.B(), this.u(), this.J())
};
function hg(a) {
  this.d = a
}
B(hg, gg);
function ig(a) {
  var b = Q(a).createRange();
  if(a.nodeType == 3) {
    b.setStart(a, 0), b.setEnd(a, a.length)
  }else {
    if(Y(a)) {
      for(var c, d = a;(c = d.firstChild) && Y(c);) {
        d = c
      }
      b.setStart(d, 0);
      for(d = a;(c = d.lastChild) && Y(c);) {
        d = c
      }
      b.setEnd(d, d.nodeType == 1 ? d.childNodes.length : d.length)
    }else {
      c = a.parentNode, a = Ta(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1)
    }
  }
  return b
}
function jg(a, b, c, d) {
  var f = Q(a).createRange();
  f.setStart(a, b);
  f.setEnd(c, d);
  return f
}
o = hg.prototype;
o.M = function() {
  return new this.constructor(this.d.cloneRange())
};
o.Ja = function() {
  return this.d.commonAncestorContainer
};
o.o = function() {
  return this.d.startContainer
};
o.B = function() {
  return this.d.startOffset
};
o.u = function() {
  return this.d.endContainer
};
o.J = function() {
  return this.d.endOffset
};
o.da = function(a, b, c) {
  return this.d.compareBoundaryPoints(c == 1 ? b == 1 ? q.Range.START_TO_START : q.Range.START_TO_END : b == 1 ? q.Range.END_TO_START : q.Range.END_TO_END, a)
};
o.isCollapsed = function() {
  return this.d.collapsed
};
o.select = function(a) {
  this.sd(Cd(Q(this.o())).getSelection(), a)
};
o.sd = function(a) {
  a.removeAllRanges();
  a.addRange(this.d)
};
o.collapse = function(a) {
  this.d.collapse(a)
};
function kg(a) {
  this.d = a
}
B(kg, hg);
kg.prototype.da = function(a, b, c) {
  if(I("528")) {
    return kg.b.da.call(this, a, b, c)
  }
  return this.d.compareBoundaryPoints(c == 1 ? b == 1 ? q.Range.START_TO_START : q.Range.END_TO_START : b == 1 ? q.Range.START_TO_END : q.Range.END_TO_END, a)
};
kg.prototype.sd = function(a, b) {
  a.removeAllRanges();
  b ? a.setBaseAndExtent(this.u(), this.J(), this.o(), this.B()) : a.setBaseAndExtent(this.o(), this.B(), this.u(), this.J())
};
function lg(a, b) {
  this.d = a;
  this.Gg = b
}
B(lg, gg);
var mg = X("goog.dom.browserrange.IeRange");
function ng(a) {
  var b = Q(a).body.createTextRange();
  if(a.nodeType == 1) {
    b.moveToElementText(a), Y(a) && !a.childNodes.length && b.collapse(!1)
  }else {
    for(var c = 0, d = a;d = d.previousSibling;) {
      var f = d.nodeType;
      if(f == 3) {
        c += d.length
      }else {
        if(f == 1) {
          b.moveToElementText(d);
          break
        }
      }
    }
    d || b.moveToElementText(a.parentNode);
    b.collapse(!d);
    c && b.move("character", c);
    b.moveEnd("character", a.length)
  }
  return b
}
o = lg.prototype;
o.wa = k;
o.g = k;
o.f = k;
o.k = -1;
o.j = -1;
o.M = function() {
  var a = new lg(this.d.duplicate(), this.Gg);
  a.wa = this.wa;
  a.g = this.g;
  a.f = this.f;
  return a
};
o.cc = function() {
  this.wa = this.g = this.f = k;
  this.k = this.j = -1
};
o.Ja = function() {
  if(!this.wa) {
    var a = this.d.text, b = this.d.duplicate(), c = a.replace(/ +$/, "");
    (c = a.length - c.length) && b.moveEnd("character", -c);
    c = b.parentElement();
    b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
    if(this.isCollapsed() && b > 0) {
      return this.wa = c
    }
    for(;b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) {
      c = c.parentNode
    }
    for(;c.childNodes.length == 1 && c.innerText == (c.firstChild.nodeType == 3 ? c.firstChild.nodeValue : c.firstChild.innerText);) {
      if(!Y(c.firstChild)) {
        break
      }
      c = c.firstChild
    }
    a.length == 0 && (c = og(this, c));
    this.wa = c
  }
  return this.wa
};
function og(a, b) {
  for(var c = b.childNodes, d = 0, f = c.length;d < f;d++) {
    var g = c[d];
    if(Y(g)) {
      var i = ng(g), j = i.htmlText != g.outerHTML;
      if(a.isCollapsed() && j ? a.da(i, 1, 1) >= 0 && a.da(i, 1, 0) <= 0 : a.d.inRange(i)) {
        return og(a, g)
      }
    }
  }
  return b
}
o.o = function() {
  if(!this.g && (this.g = pg(this, 1), this.isCollapsed())) {
    this.f = this.g
  }
  return this.g
};
o.B = function() {
  if(this.k < 0 && (this.k = qg(this, 1), this.isCollapsed())) {
    this.j = this.k
  }
  return this.k
};
o.u = function() {
  if(this.isCollapsed()) {
    return this.o()
  }
  if(!this.f) {
    this.f = pg(this, 0)
  }
  return this.f
};
o.J = function() {
  if(this.isCollapsed()) {
    return this.B()
  }
  if(this.j < 0 && (this.j = qg(this, 0), this.isCollapsed())) {
    this.k = this.j
  }
  return this.j
};
o.da = function(a, b, c) {
  return this.d.compareEndPoints((b == 1 ? "Start" : "End") + "To" + (c == 1 ? "Start" : "End"), a)
};
function pg(a, b, c) {
  c = c || a.Ja();
  if(!c || !c.firstChild) {
    return c
  }
  for(var d = b == 1, f = 0, g = c.childNodes.length;f < g;f++) {
    var i = d ? f : g - f - 1, j = c.childNodes[i], l;
    try {
      l = cg(j)
    }catch(p) {
      continue
    }
    var x = l.d;
    if(a.isCollapsed()) {
      if(Y(j)) {
        if(l.Ra(a)) {
          return pg(a, b, j)
        }
      }else {
        if(a.da(x, 1, 1) == 0) {
          a.k = a.j = i;
          break
        }
      }
    }else {
      if(a.Ra(l)) {
        if(!Y(j)) {
          d ? a.k = i : a.j = i + 1;
          break
        }
        return pg(a, b, j)
      }else {
        if(a.da(x, 1, 0) < 0 && a.da(x, 0, 1) > 0) {
          return pg(a, b, j)
        }
      }
    }
  }
  return c
}
function qg(a, b) {
  var c = b == 1, d = c ? a.o() : a.u();
  if(d.nodeType == 1) {
    for(var d = d.childNodes, f = d.length, g = c ? 1 : -1, i = c ? 0 : f - 1;i >= 0 && i < f;i += g) {
      var j = d[i];
      if(!Y(j) && a.d.compareEndPoints((b == 1 ? "Start" : "End") + "To" + (b == 1 ? "Start" : "End"), cg(j).d) == 0) {
        return c ? i : i + 1
      }
    }
    return i == -1 ? 0 : i
  }else {
    return f = a.d.duplicate(), g = ng(d), f.setEndPoint(c ? "EndToEnd" : "StartToStart", g), f = f.text.length, c ? d.length - f : f
  }
}
o.isCollapsed = function() {
  return this.d.compareEndPoints("StartToEnd", this.d) == 0
};
o.select = function() {
  this.d.select()
};
o.collapse = function(a) {
  this.d.collapse(a);
  a ? (this.f = this.g, this.j = this.k) : (this.g = this.f, this.k = this.j)
};
function rg(a) {
  this.d = a
}
B(rg, hg);
rg.prototype.sd = function(a, b) {
  var c = b ? this.u() : this.o(), d = b ? this.J() : this.B(), f = b ? this.o() : this.u(), g = b ? this.B() : this.J();
  a.collapse(c, d);
  (c != f || d != g) && a.extend(f, g)
};
function sg(a) {
  this.d = a
}
B(sg, hg);
sg.prototype.sd = function(a) {
  a.collapse(this.o(), this.B());
  (this.u() != this.o() || this.J() != this.B()) && a.extend(this.u(), this.J());
  a.rangeCount == 0 && a.addRange(this.d)
};
function tg(a) {
  return F && !kc() ? new lg(a, Q(a.parentElement())) : H ? new kg(a) : G ? new rg(a) : E ? new sg(a) : new hg(a)
}
function cg(a) {
  if(F && !kc()) {
    var b = new lg(ng(a), Q(a));
    if(Y(a)) {
      for(var c, d = a;(c = d.firstChild) && Y(c);) {
        d = c
      }
      b.g = d;
      b.k = 0;
      for(d = a;(c = d.lastChild) && Y(c);) {
        d = c
      }
      b.f = d;
      b.j = d.nodeType == 1 ? d.childNodes.length : d.length;
      b.wa = a
    }else {
      b.g = b.f = b.wa = a.parentNode, b.k = Ta(b.wa.childNodes, a), b.j = b.k + 1
    }
    a = b
  }else {
    a = H ? new kg(ig(a)) : G ? new rg(ig(a)) : E ? new sg(ig(a)) : new hg(ig(a))
  }
  return a
}
function Y(a) {
  var b;
  a: {
    if(a.nodeType != 1) {
      b = !1
    }else {
      switch(a.tagName) {
        case "APPLET":
        ;
        case "AREA":
        ;
        case "BASE":
        ;
        case "BR":
        ;
        case "COL":
        ;
        case "FRAME":
        ;
        case "HR":
        ;
        case "IMG":
        ;
        case "INPUT":
        ;
        case "IFRAME":
        ;
        case "ISINDEX":
        ;
        case "LINK":
        ;
        case "NOFRAMES":
        ;
        case "NOSCRIPT":
        ;
        case "META":
        ;
        case "OBJECT":
        ;
        case "PARAM":
        ;
        case "SCRIPT":
        ;
        case "STYLE":
          b = !1;
          break a
      }
      b = !0
    }
  }
  return b || a.nodeType == 3
}
;function ug() {
}
B(ug, Zf);
function bg(a, b) {
  var c = new ug;
  c.hb = a;
  c.ma = !!b;
  return c
}
o = ug.prototype;
o.hb = k;
o.g = k;
o.k = k;
o.f = k;
o.j = k;
o.ma = !1;
o.M = function() {
  var a = new ug;
  a.hb = this.hb;
  a.g = this.g;
  a.k = this.k;
  a.f = this.f;
  a.j = this.j;
  a.ma = this.ma;
  return a
};
o.Yd = n("text");
o.Zc = function() {
  return vg(this).d
};
o.cc = function() {
  this.g = this.k = this.f = this.j = k
};
o.Fb = n(1);
o.Wa = function() {
  return this
};
function vg(a) {
  var r;
  var b;
  if(!(b = a.hb)) {
    b = a.o();
    var c = a.B(), d = a.u(), f = a.J();
    if(F && !kc()) {
      var g = b, i = c, j = d, l = f, p = !1;
      g.nodeType == 1 && (i > g.childNodes.length && Sf(mg, "Cannot have startOffset > startNode child count"), i = g.childNodes[i], p = !i, g = i || g.lastChild || g, i = 0);
      var x = ng(g);
      i && x.move("character", i);
      g == j && i == l ? x.collapse(!0) : (p && x.collapse(!1), p = !1, j.nodeType == 1 && (l > j.childNodes.length && Sf(mg, "Cannot have endOffset > endNode child count"), r = (i = j.childNodes[l]) || j.lastChild || j, j = r, l = 0, p = !i), g = ng(j), g.collapse(!p), l && g.moveEnd("character", l), x.setEndPoint("EndToEnd", g));
      l = new lg(x, Q(b));
      l.g = b;
      l.k = c;
      l.f = d;
      l.j = f;
      b = l
    }else {
      b = H ? new kg(jg(b, c, d, f)) : G ? new rg(jg(b, c, d, f)) : E ? new sg(jg(b, c, d, f)) : new hg(jg(b, c, d, f))
    }
    b = a.hb = b
  }
  return b
}
o.Ja = function() {
  return vg(this).Ja()
};
o.o = function() {
  return this.g || (this.g = vg(this).o())
};
o.B = function() {
  return this.k != k ? this.k : this.k = vg(this).B()
};
o.u = function() {
  return this.f || (this.f = vg(this).u())
};
o.J = function() {
  return this.j != k ? this.j : this.j = vg(this).J()
};
o.Ya = m("ma");
o.Ra = function(a, b) {
  var c = a.Yd();
  if(c == "text") {
    return vg(this).Ra(vg(a), b)
  }else {
    if(c == "control") {
      return c = wg(a), (b ? Wa : Xa)(c, function(a) {
        return this.containsNode(a, b)
      }, this)
    }
  }
  return!1
};
o.isCollapsed = function() {
  return vg(this).isCollapsed()
};
o.za = function() {
  return new fg(this.o(), this.B(), this.u(), this.J())
};
o.select = function() {
  vg(this).select(this.ma)
};
o.ze = function() {
  return new xg(this)
};
o.collapse = function(a) {
  a = this.Ya() ? !a : a;
  this.hb && this.hb.collapse(a);
  a ? (this.f = this.g, this.j = this.k) : (this.g = this.f, this.k = this.j);
  this.ma = !1
};
function xg(a) {
  this.xg = a.Ya() ? a.u() : a.o();
  this.Xh = a.Ya() ? a.J() : a.B();
  this.Kg = a.Ya() ? a.o() : a.u();
  this.di = a.Ya() ? a.B() : a.J()
}
B(xg, Yf);
xg.prototype.c = function() {
  xg.b.c.call(this);
  this.Kg = this.xg = k
};
function yg() {
}
B(yg, eg);
function zg(a) {
  var b = new yg;
  b.d = a;
  return b
}
function Ag() {
  for(var a = Q(arguments[0]).body.createControlRange(), b = 0, c = arguments.length;b < c;b++) {
    a.addElement(arguments[b])
  }
  return zg(a)
}
o = yg.prototype;
o.d = k;
o.N = k;
o.Ic = k;
o.cc = function() {
  this.Ic = this.N = k
};
o.M = function() {
  return Ag.apply(this, wg(this))
};
o.Yd = n("control");
o.Zc = function() {
  return this.d || document.body.createControlRange()
};
o.Fb = function() {
  return this.d ? this.d.length : 0
};
o.Wa = function(a) {
  a = this.d.item(a);
  return bg(cg(a), h)
};
o.Ja = function() {
  return Kd.apply(k, wg(this))
};
o.o = function() {
  return Bg(this)[0]
};
o.B = n(0);
o.u = function() {
  var a = Bg(this), b = Sa(a);
  return Ya(a, function(a) {
    return Gd(a, b)
  })
};
o.J = function() {
  return this.u().childNodes.length
};
function wg(a) {
  if(!a.N && (a.N = [], a.d)) {
    for(var b = 0;b < a.d.length;b++) {
      a.N.push(a.d.item(b))
    }
  }
  return a.N
}
function Bg(a) {
  if(!a.Ic) {
    a.Ic = wg(a).concat(), a.Ic.sort(function(a, c) {
      return a.sourceIndex - c.sourceIndex
    })
  }
  return a.Ic
}
o.isCollapsed = function() {
  return!this.d || !this.d.length
};
o.za = function() {
  return new Cg(this)
};
o.select = function() {
  this.d && this.d.select()
};
o.ze = function() {
  return new Dg(this)
};
o.collapse = function() {
  this.d = k;
  this.cc()
};
function Dg(a) {
  this.N = wg(a)
}
B(Dg, Yf);
Dg.prototype.c = function() {
  Dg.b.c.call(this);
  delete this.N
};
function Cg(a) {
  if(a) {
    this.N = Bg(a), this.g = this.N.shift(), this.f = Sa(this.N) || this.g
  }
  dg.call(this, this.g, !1)
}
B(Cg, dg);
o = Cg.prototype;
o.g = k;
o.f = k;
o.N = k;
o.o = m("g");
o.u = m("f");
o.pc = function() {
  return!this.ia && !this.N.length
};
o.next = function() {
  if(this.pc()) {
    e(hb)
  }else {
    if(!this.ia) {
      var a = this.N.shift();
      vf(this, a, 1, 1);
      return a
    }
  }
  return Cg.b.next.call(this)
};
o.Ba = function(a) {
  this.N = a.N;
  this.g = a.g;
  this.f = a.f;
  Cg.b.Ba.call(this, a)
};
o.M = function() {
  var a = new Cg(k);
  a.Ba(this);
  return a
};
function Eg() {
  this.sa = [];
  this.xc = [];
  this.Vc = this.Xb = k
}
B(Eg, eg);
o = Eg.prototype;
o.a = X("goog.dom.MultiRange");
o.cc = function() {
  this.xc = [];
  this.Vc = this.Xb = k
};
o.M = function() {
  var a = new Eg;
  a.sa = bb(this.sa);
  return a
};
o.Yd = n("mutli");
o.Zc = function() {
  this.sa.length > 1 && Tf(this.a, "getBrowserRangeObject called on MultiRange with more than 1 range");
  return this.sa[0]
};
o.Fb = function() {
  return this.sa.length
};
o.Wa = function(a) {
  this.xc[a] || (this.xc[a] = bg(tg(this.sa[a]), h));
  return this.xc[a]
};
o.Ja = function() {
  if(!this.Vc) {
    for(var a = [], b = 0, c = this.Fb();b < c;b++) {
      a.push(this.Wa(b).Ja())
    }
    this.Vc = Kd.apply(k, a)
  }
  return this.Vc
};
function Fg(a) {
  if(!a.Xb) {
    a.Xb = ag(a), a.Xb.sort(function(a, c) {
      var d = a.o(), f = a.B(), g = c.o(), i = c.B();
      if(d == g && f == i) {
        return 0
      }
      return Gg(d, f, g, i) ? 1 : -1
    })
  }
  return a.Xb
}
o.o = function() {
  return Fg(this)[0].o()
};
o.B = function() {
  return Fg(this)[0].B()
};
o.u = function() {
  return Sa(Fg(this)).u()
};
o.J = function() {
  return Sa(Fg(this)).J()
};
o.isCollapsed = function() {
  return this.sa.length == 0 || this.sa.length == 1 && this.Wa(0).isCollapsed()
};
o.za = function() {
  return new Hg(this)
};
o.select = function() {
  var a = $f(this.ha());
  a.removeAllRanges();
  for(var b = 0, c = this.Fb();b < c;b++) {
    a.addRange(this.Wa(b).Zc())
  }
};
o.ze = function() {
  return new Ig(this)
};
o.collapse = function(a) {
  if(!this.isCollapsed()) {
    var b = a ? this.Wa(0) : this.Wa(this.Fb() - 1);
    this.cc();
    b.collapse(a);
    this.xc = [b];
    this.Xb = [b];
    this.sa = [b.Zc()]
  }
};
function Ig(a) {
  this.dg = Va(ag(a), function(a) {
    return a.ze()
  })
}
B(Ig, Yf);
Ig.prototype.c = function() {
  Ig.b.c.call(this);
  Ua(this.dg, function(a) {
    a.i()
  });
  delete this.dg
};
function Hg(a) {
  if(a) {
    this.Za = Va(Fg(a), function(a) {
      return jb(a)
    })
  }
  dg.call(this, a ? this.o() : k, !1)
}
B(Hg, dg);
o = Hg.prototype;
o.Za = k;
o.Xc = 0;
o.o = function() {
  return this.Za[0].o()
};
o.u = function() {
  return Sa(this.Za).u()
};
o.pc = function() {
  return this.Za[this.Xc].pc()
};
o.next = function() {
  try {
    var a = this.Za[this.Xc], b = a.next();
    vf(this, a.P, a.U, a.ia);
    return b
  }catch(c) {
    if(c !== hb || this.Za.length - 1 == this.Xc) {
      e(c)
    }else {
      return this.Xc++, this.next()
    }
  }
};
o.Ba = function(a) {
  this.Za = bb(a.Za);
  Hg.b.Ba.call(this, a)
};
o.M = function() {
  var a = new Hg(k);
  a.Ba(this);
  return a
};
function Jg(a) {
  var b, c = !1;
  if(a.createRange) {
    try {
      b = a.createRange()
    }catch(d) {
      return k
    }
  }else {
    if(a.rangeCount) {
      if(a.rangeCount > 1) {
        b = new Eg;
        for(var c = 0, f = a.rangeCount;c < f;c++) {
          b.sa.push(a.getRangeAt(c))
        }
        return b
      }else {
        b = a.getRangeAt(0), c = Gg(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
      }
    }else {
      return k
    }
  }
  return b && b.addElement ? zg(b) : bg(tg(b), c)
}
function Gg(a, b, c, d) {
  if(a == c) {
    return d < b
  }
  var f;
  if(a.nodeType == 1 && b) {
    if(f = a.childNodes[b]) {
      a = f, b = 0
    }else {
      if(Gd(a, c)) {
        return!0
      }
    }
  }
  if(c.nodeType == 1 && d) {
    if(f = c.childNodes[d]) {
      c = f, d = 0
    }else {
      if(Gd(c, a)) {
        return!1
      }
    }
  }
  return(Hd(a, c) || b - d) > 0
}
;Ra("text", "file", "url");
function Kg(a, b, c) {
  this.Sf = a;
  this.rh = !!c;
  a && !b && this.next()
}
B(Kg, ib);
Kg.prototype.next = function() {
  var a = this.Sf;
  a || e(hb);
  this.Sf = this.rh ? a.previousSibling : a.nextSibling;
  return a
};
function Lg(a, b, c) {
  da(c) || (c = b && a.childNodes.length ? a.childNodes.length - 1 : 0);
  Kg.call(this, a.childNodes[c], !0, b)
}
B(Lg, Kg);
Ra("ADDRESS", "BLOCKQUOTE", "BODY", "CAPTION", "CENTER", "COL", "COLGROUP", "DIR", "DIV", "DL", "DD", "DT", "FIELDSET", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HR", "ISINDEX", "OL", "LI", "MAP", "MENU", "OPTGROUP", "OPTION", "P", "PRE", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "TL", "UL");
Ra("IMG", "IFRAME", "EMBED");
function Mg(a) {
  try {
    return a.next()
  }catch(b) {
    return k
  }
}
function lb(a) {
  return a.nodeType == 1 || a.nodeType == 3 && !!/[^\t\n\r ]/.test(a.nodeValue)
}
;X("goog.editor.Plugin");
var Ng = Oa({ei:1, fi:2, gi:3, ii:4, hi:5, execCommand:6, queryCommandValue:7, ni:8, bi:10, ai:11}), Og = Ra(8, 10, 11);
function Pg(a, b, c) {
  J.call(this);
  this.oe = a;
  this.$g = b || 0;
  this.lc = c;
  this.zg = y(this.lf, this)
}
B(Pg, J);
o = Pg.prototype;
o.aa = 0;
o.c = function() {
  Pg.b.c.call(this);
  this.stop();
  delete this.oe;
  delete this.lc
};
o.start = function(a) {
  this.stop();
  var b = this.zg, a = da(a) ? a : this.$g;
  v(b) || (b && typeof b.handleEvent == "function" ? b = y(b.handleEvent, b) : e(Error("Invalid listener argument")));
  this.aa = a > 2147483647 ? -1 : $c.setTimeout(b, a || 0)
};
o.stop = function() {
  this.oc() && $c.clearTimeout(this.aa);
  this.aa = 0
};
function Qg(a) {
  a.oc() && (a.stop(), a.lf())
}
o.oc = function() {
  return this.aa != 0
};
o.lf = function() {
  this.aa = 0;
  this.oe && this.oe.call(this.lc)
};
function Rg(a, b) {
  J.call(this);
  this.ji = this.id = a;
  this.ea = k;
  this.ub = {};
  this.Ib = {};
  for(var c in Ng) {
    this.Ib[c] = []
  }
  this.Wc = "";
  if(H && I("525.13") && Ca(bc, "525.18") <= 0) {
    this.Qe = "tr-webkit-workaround", this.Wc = "." + this.Qe + ">*{padding-right:1}"
  }
  this.Jc = {};
  this.Jc[Sg] = 1;
  this.Jc[Tg] = 1;
  this.he = this.dd = !1;
  this.Yc = new Pg(this.hf, Ug, this);
  this.Md = {};
  for(var d in Vg) {
    this.Md[Vg[d]] = 0
  }
  if(G) {
    this.Aa = new Pg(this.$d, Wg, this)
  }
  this.Ha = new Xd(this);
  this.Hh = [];
  this.Ob = Xg;
  this.Pb = wd(b || document);
  this.na = this.Pb.e(this.id);
  this.Ed = this.Pb.ha()
}
B(Rg, Zc);
Rg.prototype.field = k;
Rg.prototype.na = k;
Rg.prototype.pe = X("goog.editor.Field");
var Sg = "change", Tg = "delayedchange", Vg = {Oh:"cvc", Rh:"load", Uh:"unload", Jh:"beforechange", Nh:Sg, Ph:Tg, Kh:"beforefocus", Qh:"focus", Mh:"blur", Lh:"beforetab", Th:"selectionchange"}, Xg = 0, Yg = k;
Rg.prototype.e = m("field");
function Z(a, b, c, d) {
  var f = a.e();
  if(f && of) {
    f = f.ownerDocument
  }
  R(a.Ha, f, b, c, d, h)
}
var Wg = 15, Ug = 250;
Rg.prototype.Nc = Sb;
var Zg = {46:!0, 8:!0};
F || (Zg[9] = !0);
var $g = {86:!0, 88:!0};
F && (Zg[229] = !0);
function ah(a) {
  var b = !(a.ctrlKey || a.metaKey) && a.keyCode in Zg;
  return(a.ctrlKey || a.metaKey) && a.keyCode in $g || b
}
function bh(a) {
  a.Ob = Xg;
  for(var b in a.ub) {
    var c = a.ub[b];
    c.Vh() || c.disable(a)
  }
  a.field = k;
  a.ea = k
}
function ch(a) {
  a.Ha && a.Ha.od();
  if(E && a.Nc()) {
    try {
      var b = a.ea.ha();
      b.removeEventListener("focus", a.Id, !1);
      b.removeEventListener("blur", a.Hd, !1)
    }catch(c) {
    }
    delete a.Id;
    delete a.Hd
  }
  a.Aa && a.Aa.stop();
  a.Yc.stop()
}
Rg.prototype.c = function() {
  (this.Ob == 1 || this.je()) && Tf(this.pe, "Disposing a field that is in use.");
  this.na && this.execCommand("clearlorem");
  bh(this);
  ch(this);
  this.Pb = k;
  if(this.Ha) {
    this.Ha.i(), this.Ha = k
  }
  for(var a;a = this.Hh.pop();) {
    a.i()
  }
  Yg == this.id && (Yg = k);
  for(var b in this.ub) {
    a = this.ub[b], a.Yh && a.i()
  }
  delete this.ub;
  Rg.b.c.call(this)
};
var dh = ["DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMCharacterDataModified"];
function eh(a, b) {
  if(b.keyCode == 9 && !a.dispatchEvent({type:"beforetab", shiftKey:b.shiftKey, altKey:b.altKey, ctrlKey:b.ctrlKey}) || G && b.metaKey && (b.keyCode == 37 || b.keyCode == 39)) {
    return b.preventDefault(), !1
  }else {
    var c;
    if(!(c = b.charCode)) {
      c = ah(b) ? !0 : !(!G || b.ctrlKey || b.metaKey || G && !b.charCode)
    }
    a.Zd = c;
    a.Zd && a.Od()
  }
  return!0
}
var fh = {8:1, 9:1, 13:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 40:1, 46:1}, gh = {65:!0, 86:!0, 88:!0}, hh = {8:1, 9:1, 13:1, 27:1, 33:1, 34:1, 37:1, 38:1, 39:1, 40:1};
o = Rg.prototype;
o.nc = function(a) {
  for(var b = this.Ib[a], c = eb(arguments, 1), d = 0;d < b.length;++d) {
    var f = b[d];
    if((f.isEnabled(this) || Og[a]) && f[Ng[a]].apply(f, c)) {
      return!0
    }
  }
  return!1
};
o.ah = function(a) {
  for(var b = this.Ib[a], c = eb(arguments, 1), d = 0;d < b.length;++d) {
    var f = b[d];
    (f.isEnabled(this) || Og[a]) && f[Ng[a]].apply(f, c)
  }
};
o.Zf = function(a) {
  for(var b = this.Ib[a], c = eb(arguments, 1), d = 0;d < b.length;++d) {
    var f = b[d];
    if(f.isEnabled(this) || Og[a]) {
      c[0] = f[Ng[a]].apply(f, c)
    }
  }
  return c[0]
};
o.ae = function(a) {
  (G || eh(this, a)) && !this.nc(1, a) && rf && ih(this, a)
};
o.Rg = function(a) {
  if(G) {
    if(!eh(this, a)) {
      return
    }
  }else {
    this.Zd = !0, this.Od()
  }
  !this.nc(2, a) && !rf && ih(this, a)
};
o.Sg = function(a) {
  !G && (this.Zd || ah(a)) && this.$d();
  this.nc(3, a);
  jh(this, "selectionchange") || (fh[a.keyCode] || (a.ctrlKey || a.metaKey) && gh[a.keyCode]) && this.Be.start()
};
function ih(a, b) {
  if(!b.altKey) {
    var c = ac ? b.metaKey : b.ctrlKey;
    if(c || hh[b.keyCode]) {
      var d = b.charCode || b.keyCode;
      d != 17 && a.nc(5, b, String.fromCharCode(d).toLowerCase(), c) && b.preventDefault()
    }
  }
}
o.execCommand = function() {
  for(var a = this.Ib[6], b = 0;b < a.length;++b) {
    a[b].isEnabled(this)
  }
};
o.queryCommandValue = function(a) {
  var b = this.je() && this.ke;
  if(u(a)) {
    return kh(this, b)
  }else {
    for(var c = {}, d = 0;d < a.length;d++) {
      c[a[d]] = kh(this, b)
    }
    return c
  }
};
function kh(a, b) {
  for(var c = a.Ib[7], d = 0;d < c.length;++d) {
    c[d].isEnabled(a)
  }
  return b ? k : !1
}
o.Og = function(a, b) {
  if(!jh(this, Sg)) {
    b = b.ga;
    try {
      if(b.originalTarget.prefix || b.originalTarget.nodeName == "scrollbar") {
        return
      }
    }catch(c) {
      return
    }
    b.prevValue != b.newValue && a.call(this, b)
  }
};
o.de = function(a) {
  if(!jh(this, Sg) && (a = a.Mg ? a.ga : a, !a.target.firebugIgnore)) {
    this.he = this.dd = !0, this.Aa.start()
  }
};
o.uf = function() {
  F && this.execCommand("clearlorem", !0);
  G && this.Pd();
  this.gf()
};
function lh(a) {
  var a = a.ea && a.ea.ha(), b;
  if(b = a) {
    b = (a = $f(a || window)) && Jg(a)
  }
  return b
}
function mh(a, b, c) {
  if(!jh(a, "selectionchange")) {
    var d = lh(a), f;
    if(f = d) {
      d = d.Ja(), f = d.nodeType == 1 ? d : d.parentNode
    }
    d = f;
    a.ke = !!d && Gd(a.e(), d);
    a.dispatchEvent("cvc");
    a.dispatchEvent({type:"selectionchange", mi:b && b.type});
    a.nc(4, b, c)
  }
}
o.Wg = function() {
  var a = this.gg;
  this.gg = k;
  mh(this, h, a)
};
o.Od = function() {
  jh(this, "beforechange") || this.dispatchEvent("beforechange")
};
function nh(a, b, c) {
  !b && a.Aa && Qg(a.Aa);
  a.Jc[Sg] = 0;
  a.Jc[Tg] = 0;
  b && a.$d();
  c && a.hf()
}
function jh(a, b) {
  return!!a.Jc[b] || a.Md[b] && A() - a.Md[b] <= 500
}
o.gf = function(a) {
  nh(this, !0, a)
};
o.$d = function() {
  if(!jh(this, Sg)) {
    this.Aa && this.Aa.stop(), this.he = this.dd = !0, jh(this, Tg) || this.Yc.start()
  }
};
o.hf = function() {
  if(!jh(this, Tg)) {
    this.Yc.stop(), this.dd = !1, this.dispatchEvent(Tg)
  }
};
o.Pd = function() {
  this.ef();
  this.jf()
};
o.ef = function() {
  jh(this, "beforefocus") || (this.execCommand("clearlorem", !0), this.dispatchEvent("beforefocus"))
};
o.jf = function() {
  if(!jh(this, "focus")) {
    Yg = this.id;
    this.ke = !0;
    this.dispatchEvent("focus");
    if(G) {
      var a = this.e(), b = lh(this);
      if(b) {
        var c = b.Ya() ? b.o() : b.u();
        if((b.Ya() ? b.B() : b.J()) == 0 && (!c || c == a || c.tagName == "BODY")) {
          for(;b = !a || a.nodeType != 1 ? k : Mg(kb(new Lg(a, !1)));) {
            a = b
          }
          var a = b = a, d = c = 0, f = new ug;
          f.ma = Gg(a, c, b, d);
          if(a.tagName == "BR") {
            var g = a.parentNode, c = Ta(g.childNodes, a), a = g
          }
          if(b.tagName == "BR") {
            g = b.parentNode, d = Ta(g.childNodes, b), b = g
          }
          f.ma ? (f.g = b, f.k = d, f.f = a, f.j = c) : (f.g = a, f.k = c, f.f = b, f.j = d);
          f.select()
        }
      }
    }
    !nf && this.Nc() && this.ea.ha().parent.getSelection().removeAllRanges()
  }
};
o.ff = function() {
  if(!jh(this, "blur")) {
    Yg == this.id && (Yg = k), this.ke = !1, this.dispatchEvent("blur")
  }
};
function oh(a) {
  Rd(a.target) && a.preventDefault()
}
o.Ug = function(a) {
  if(!Yg) {
    Yg = this.id
  }
  if(F) {
    var b = a.target;
    b && b.tagName == "A" && a.ctrlKey && this.Pb.ha().open(b.href)
  }
};
o.Vg = function(a) {
  mh(this, a);
  if(F) {
    this.gg = a.target, this.Be.start()
  }
};
o.je = function() {
  return this.Ob == 2
};
o.focus = function() {
  if(!lf || H) {
    this.ea.ha().focus()
  }else {
    if(E) {
      var a = this.Ed.pageXOffset, b = this.Ed.pageYOffset
    }
    this.e().focus();
    E && this.Ed.scrollTo(a, b)
  }
};
function ph(a) {
  if(!da(a.ie) && (a.ie = !1, F && a.Nc())) {
    for(var b = a.Pb.ha();b != b.parent;) {
      try {
        b = b.parent
      }catch(c) {
        break
      }
    }
    b = b.location;
    a.ie = b.protocol == "https:" && b.search.indexOf("nocheckhttps") == -1
  }
  return a.ie
}
o.Bf = function(a, b, c) {
  qh(this);
  a.Wh = "true";
  var d = wd(this.na), c = new sf(this.id, d.Z.compatMode == "CSS1Compat", c);
  if(ph(this)) {
    var f = Ld(a).body;
    if(lf) {
      f.contentEditable = !0
    }
    f.className = "editable";
    f.setAttribute("g_editable", !0);
    f.hideFocus = !0;
    f.id = c.pf;
    c = c.Ud;
    u(c) ? Ud(f, h, c) : Ka(c, oa(Ud, f));
    f.innerHTML = b
  }else {
    var d = new tf(this.e(), this.Wc), g = [];
    c.Gd && c.Ge && g.push("<!DOCTYPE HTML>");
    g.push('<html style="background:none transparent;');
    c.Gd && g.push("height:", c.qf ? "100%" : "auto");
    g.push('">');
    g.push("<head><style>");
    d && d.af && g.push(d.af);
    G && c.Ge && g.push(" img {-moz-force-broken-image-icon: 1;}");
    g.push("</style></head>");
    g.push('<body g_editable="true" hidefocus="true" ');
    lf && g.push("contentEditable ");
    g.push('class="editable ');
    g.push('" id="', c.pf, '" style="');
    G && c.Gd && (g.push(";width:100%;border:0;margin:0;background:none transparent;", ";height:", c.Ge ? "100%" : "auto"), c.qf ? g.push(";overflow:auto") : g.push(";overflow-y:hidden;overflow-x:auto"));
    E && g.push(";outline:hidden");
    for(f in c.Ud) {
      g.push(";" + f + ":" + c.Ud[f])
    }
    g.push('">', b, "</body></html>");
    b = g.join("");
    f = Ld(a);
    f.open();
    f.write(b);
    f.close()
  }
  a = Ld(a).body;
  this.Ob = 2;
  this.field = a;
  this.ea = wd(a);
  this.he = this.dd = !1;
  a.setAttribute("g_editable", "true");
  if(!lf) {
    a = this.ea.ua(), a.designMode = "on", pf && a.execCommand("styleWithCSS", !1, !1)
  }
  if(F && (a = this.ea.ha(), a = $f(a || window))) {
    if(a.empty) {
      try {
        a.empty()
      }catch(i) {
      }
    }else {
      a.removeAllRanges()
    }
  }
  Yg != this.id && this.execCommand("updatelorem");
  E && this.Nc() ? (this.Id = y(this.Pd, this), this.Hd = y(this.ff, this), a = this.ea.ha(), a.addEventListener("focus", this.Id, !1), a.addEventListener("blur", this.Hd, !1)) : (qf ? (Z(this, "focus", this.jf), Z(this, mc, this.ef)) : Z(this, "focus", this.Pd), Z(this, "blur", this.ff, G));
  G ? mf ? R(this.Ha, this.e(), "DOMSubtreeModified", this.de) : (a = this.ea.ua(), R(this.Ha, a, dh, this.de, !0), R(this.Ha, a, "DOMAttrModified", y(this.Og, this, this.de), !0)) : (Z(this, ["beforecut", "beforepaste", "drop", "dragend"], this.Od), Z(this, ["cut", "paste"], this.gf), Z(this, "drop", this.uf));
  Z(this, H ? "dragend" : "dragdrop", this.uf);
  Z(this, "keydown", this.ae);
  Z(this, "keypress", this.Rg);
  Z(this, "keyup", this.Sg);
  this.Be = new Pg(this.Wg, 250, this);
  H && Z(this, "click", oh);
  Z(this, "mousedown", this.Ug);
  Z(this, "mouseup", this.Vg);
  a = this.e();
  this.Qe && sd(a, this.Qe);
  if(this.Wc && ph(this)) {
    a = this.Wc, b = wd(this.e()), c = k, F ? (c = b.ua().createStyleSheet(), Vd(c, a)) : (f = zd(b.Z, "head")[0], f || (c = zd(b.Z, "body")[0], f = b.q("head"), c.parentNode.insertBefore(f, c)), c = b.q("style"), Vd(c, a), b.appendChild(f, c))
  }
  nh(this);
  this.pe.info("Dispatching load " + this.id);
  this.dispatchEvent("load");
  for(var j in this.ub) {
    this.ub[j].enable(this)
  }
};
function qh(a) {
  if(a.Wd) {
    N(a.Wd), a.Wd = k
  }
}
;function rh(a) {
  var b = ga(a);
  if(b == "string") {
    return 21 + 2 * a.length
  }else {
    if(b == "number") {
      return 16
    }else {
      if(b == "boolean") {
        return 12
      }else {
        if(b == "null" || b == "undefined") {
          return 8
        }else {
          e(Error("cannot determine size of object type " + b))
        }
      }
    }
  }
}
;function sh(a, b) {
  this.yb = a;
  this.wb = b
}
sh.prototype.w = function(a) {
  return a instanceof sh && this.yb == a.yb && this.wb.join(",") == a.wb
};
sh.prototype.L = function(a, b) {
  a.push("new SACK(", String(this.yb), ", ");
  O(this.wb, a, b);
  a.push(")")
};
function th() {
  this.T = new sb
}
o = th.prototype;
o.Bb = -1;
o.fb = 0;
o.append = function(a) {
  var b = rh(a);
  this.T.set(this.Bb + 1, [a, b]);
  this.Bb += 1;
  this.fb += b
};
o.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
o.L = function(a) {
  a.push("<Queue with ", String(this.T.C()), " item(s), counter=#", String(this.Bb), ", size=", String(this.fb), ">")
};
function uh(a) {
  tb(a.T);
  fb(a.T.h);
  return a.T.h
}
function vh() {
  this.ib = new sb
}
vh.prototype.Lb = -1;
vh.prototype.fb = 0;
function wh(a) {
  var b = a.ib.Ka();
  fb(b);
  return new sh(a.Lb, b)
}
var xh = {};
function yh(a) {
  var a = a.split("|"), b = a.splice(0, 2);
  a.length > 0 && b.push(a.join("|"));
  return b
}
function zh() {
  var a = Array.prototype.slice.call(arguments);
  return a.shift().replace(/\{(\d+)\}/g, function(b, c) {
    return a[c]
  })
}
function Ah() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ A()).toString(36)
}
function Bh(a) {
  return a.substr(0, a.length - 1)
}
var Ch = /^(0|[1-9]\d*)$/, Eh = /^(0|\-?[1-9]\d*)$/;
function Fh(a) {
  var b = Gh;
  if(Ch.test(a) && (a = parseInt(a, 10), a <= b)) {
    return a
  }
  return k
}
;X("cw.net.FlashSocket");
X("cw.net.FlashSocketTracker");
function Hh(a) {
  J.call(this);
  this.Qa = a;
  this.Jd = []
}
B(Hh, J);
Hh.prototype.a = X("cw.net.FlashSocketConduit");
Hh.prototype.Se = function(a) {
  this.Jd ? (W(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Jd.push.apply(this.Jd, a)) : (W(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.Fe.Se(a))
};
Hh.prototype.Ve = function(a, b) {
  this.Fe.Ve(a, b)
};
Hh.prototype.c = function() {
  this.a.info("in disposeInternal.");
  Hh.b.c.call(this);
  this.Fe.i();
  delete this.Qa
};
var Gh = Math.pow(2, 53);
var Ih = {vg:n("<cw.eq.Wildcard>")};
function Jh(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function Kh(a, b, c) {
  var d = ga(a), f = ga(b);
  if(a == Ih || b == Ih) {
    return!0
  }else {
    if(a != k && typeof a.w == "function") {
      return c && c.push("running custom equals function on left object"), a.w(b, c)
    }else {
      if(b != k && typeof b.w == "function") {
        return c && c.push("running custom equals function on right object"), b.w(a, c)
      }else {
        if(Jh(d) || Jh(f)) {
          a = a === b
        }else {
          if(a instanceof RegExp && b instanceof RegExp) {
            a = a.toString() === b.toString()
          }else {
            if(ia(a) && ia(b)) {
              a = a.valueOf() === b.valueOf()
            }else {
              if(d == "array" && f == "array") {
                a: {
                  if(c && c.push("descending into array"), a.length != b.length) {
                    c && c.push("array length mismatch: " + a.length + ", " + b.length), a = !1
                  }else {
                    d = 0;
                    for(f = a.length;d < f;d++) {
                      if(!Kh(a[d], b[d], c)) {
                        c && c.push("earlier comparisons indicate mismatch at array item #" + d);
                        a = !1;
                        break a
                      }
                    }
                    c && c.push("ascending from array");
                    a = !0
                  }
                }
              }else {
                if(a.ug == Sb && b.ug == Sb) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = !1;
                        break a
                      }
                      if(!Kh(a[g], b[g], c)) {
                        c && c.push("earlier comparisons indicate mismatch at property " + g);
                        a = !1;
                        break a
                      }
                    }
                    for(g in b) {
                      if(!(g in a)) {
                        c && c.push("property " + g + " missing on left object");
                        a = !1;
                        break a
                      }
                    }
                    c && c.push("ascending from object");
                    a = !0
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
    }
  }
}
;function $(a) {
  pa.call(this, a)
}
B($, pa);
$.prototype.name = "cw.net.InvalidFrame";
function Lh() {
  var a = [];
  this.ka(a);
  return a.join("")
}
function Mh() {
}
Mh.prototype.w = function(a, b) {
  if(!(a instanceof Mh)) {
    return!1
  }
  return Kh(Nh(this), Nh(a), b)
};
Mh.prototype.L = function(a, b) {
  a.push("<HelloFrame properties=");
  O(Nh(this), a, b);
  a.push(">")
};
function Nh(a) {
  return[a.Zb, a.Xf, a.Af, a.ag, a.Kc, a.$e, a.Je, a.Qf, a.Of, a.re, a.Mf, a.pg, a.kg, a.qa, a.gd]
}
Mh.prototype.fa = Lh;
Mh.prototype.ka = function(a) {
  var b = {};
  b.tnum = this.Zb;
  b.ver = this.Xf;
  b.format = this.Af;
  b["new"] = this.ag;
  b.id = this.Kc;
  b.cred = this.$e;
  b.ming = this.Je;
  b.pad = this.Qf;
  b.maxb = this.Of;
  if(da(this.re)) {
    b.maxt = this.re
  }
  b.maxia = this.Mf;
  b.tcpack = this.pg;
  b.eeds = this.kg;
  b.sack = this.qa instanceof sh ? Bh((new Oh(this.qa)).fa()) : this.qa;
  b.seenack = this.gd instanceof sh ? Bh((new Oh(this.gd)).fa()) : this.gd;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(kd(b), "H")
};
function Ph(a) {
  this.Yb = a
}
Ph.prototype.w = function(a) {
  return a instanceof Ph && this.Yb == a.Yb
};
Ph.prototype.L = function(a, b) {
  a.push("new StringFrame(");
  O(this.Yb, a, b);
  a.push(")")
};
Ph.prototype.fa = Lh;
Ph.prototype.ka = function(a) {
  a.push(this.Yb, " ")
};
function Qh(a) {
  this.Tc = a
}
Qh.prototype.w = function(a) {
  return a instanceof Qh && this.Tc == a.Tc
};
Qh.prototype.L = function(a, b) {
  a.push("new CommentFrame(");
  O(this.Tc, a, b);
  a.push(")")
};
Qh.prototype.fa = Lh;
Qh.prototype.ka = function(a) {
  a.push(this.Tc, "^")
};
function Rh(a) {
  this.Cc = a
}
Rh.prototype.w = function(a) {
  return a instanceof Rh && this.Cc == a.Cc
};
Rh.prototype.L = function(a) {
  a.push("new SeqNumFrame(", String(this.Cc), ")")
};
Rh.prototype.fa = Lh;
Rh.prototype.ka = function(a) {
  a.push(String(this.Cc), "N")
};
function Sh(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return k
  }
  a: {
    var c = b[1], a = Gh;
    if(Eh.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
    for(var b = b[0].split(","), d = 0, f = b.length;d < f;d++) {
      var g = Fh(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new sh(a, c)
}
function Oh(a) {
  this.qa = a
}
Oh.prototype.w = function(a, b) {
  return a instanceof Oh && this.qa.w(a.qa, b)
};
Oh.prototype.L = function(a, b) {
  a.push("new SackFrame(");
  O(this.qa, a, b);
  a.push(")")
};
Oh.prototype.fa = Lh;
Oh.prototype.ka = function(a) {
  var b = this.qa;
  a.push(b.wb.join(","), "|", String(b.yb));
  a.push("A")
};
function Th(a) {
  this.sc = a
}
Th.prototype.w = function(a, b) {
  return a instanceof Th && this.sc.w(a.sc, b)
};
Th.prototype.L = function(a, b) {
  a.push("new StreamStatusFrame(");
  O(this.sc, a, b);
  a.push(")")
};
Th.prototype.fa = Lh;
Th.prototype.ka = function(a) {
  var b = this.sc;
  a.push(b.wb.join(","), "|", String(b.yb));
  a.push("T")
};
function Uh() {
}
Uh.prototype.L = function(a) {
  a.push("new StreamCreatedFrame()")
};
Uh.prototype.w = function(a) {
  return a instanceof Uh
};
Uh.prototype.fa = Lh;
Uh.prototype.ka = function(a) {
  a.push("C")
};
function Vh() {
}
Vh.prototype.L = function(a) {
  a.push("new YouCloseItFrame()")
};
Vh.prototype.w = function(a) {
  return a instanceof Vh
};
Vh.prototype.fa = Lh;
Vh.prototype.ka = function(a) {
  a.push("Y")
};
function Wh(a, b) {
  this.yc = a;
  this.ac = b
}
Wh.prototype.w = function(a) {
  return a instanceof Wh && this.yc == a.yc && this.ac == a.ac
};
Wh.prototype.L = function(a, b) {
  a.push("new ResetFrame(");
  O(this.yc, a, b);
  a.push(", ", String(this.ac), ")")
};
Wh.prototype.fa = Lh;
Wh.prototype.ka = function(a) {
  a.push(this.yc, "|", String(Number(this.ac)), "!")
};
var Xh = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Yh(a) {
  this.reason = a
}
Yh.prototype.w = function(a) {
  return a instanceof Yh && this.reason == a.reason
};
Yh.prototype.L = function(a, b) {
  a.push("new TransportKillFrame(");
  O(this.reason, a, b);
  a.push(")")
};
Yh.prototype.fa = Lh;
Yh.prototype.ka = function(a) {
  a.push(this.reason, "K")
};
function Zh(a) {
  a || e(new $("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new Ph(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = Sh(Bh(a)), a == k && e(new $("bad sack")), new Oh(a)
    }else {
      if(b == "N") {
        return a = Fh(Bh(a)), a == k && e(new $("bad seqNum")), new Rh(a)
      }else {
        if(b == "T") {
          return a = Sh(Bh(a)), a == k && e(new $("bad lastSackSeen")), new Th(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && e(new $("leading garbage")), new Vh
          }else {
            if(b == "^") {
              return new Qh(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && e(new $("leading garbage")), new Uh
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && e(new $("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == k && e(new $("bad applicationLevel")), new Wh(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = Xh[a], a == k && e(new $("unknown kill reason: " + a)), new Yh(a)
                  }else {
                    e(new $("Invalid frame type " + b))
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
;function $h() {
  if(G) {
    this.kb = {}, this.Ad = {}, this.wd = []
  }
}
$h.prototype.a = X("goog.net.xhrMonitor");
$h.prototype.ja = G;
$h.prototype.Ec = function(a) {
  this.ja = G && a
};
function ai(a) {
  var b = bi;
  if(b.ja) {
    var c = u(a) ? a : ja(a) ? w(a) : "";
    W(b.a, "Pushing context: " + a + " (" + c + ")");
    b.wd.push(c)
  }
}
function ci() {
  var a = bi;
  if(a.ja) {
    var b = a.wd.pop();
    W(a.a, "Popping context: " + b);
    di(a, b)
  }
}
function ei(a) {
  var b = bi;
  if(b.ja) {
    a = w(a);
    V(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.wd.length;c++) {
      var d = b.wd[c];
      fi(b.kb, d, a);
      fi(b.Ad, a, d)
    }
  }
}
function di(a, b) {
  var c = a.Ad[b], d = a.kb[b];
  c && d && (W(a.a, "Updating dependent contexts"), Ua(c, function(a) {
    Ua(d, function(b) {
      fi(this.kb, a, b);
      fi(this.Ad, b, a)
    }, this)
  }, a))
}
function fi(a, b, c) {
  a[b] || (a[b] = []);
  Za(a[b], c) || a[b].push(c)
}
var bi = new $h;
function gi() {
}
gi.prototype.Ue = k;
function hi(a) {
  var b;
  if(!(b = a.Ue)) {
    b = {}, ii(a) && (b[0] = !0, b[1] = !0), b = a.Ue = b
  }
  return b
}
;function ji() {
  return ki(li)
}
var li;
function mi() {
}
B(mi, gi);
function ki(a) {
  return(a = ii(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
mi.prototype.ee = k;
function ii(a) {
  if(!a.ee && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.ee = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.ee
}
li = new mi;
function ni(a) {
  J.call(this);
  this.headers = new sb;
  this.Bd = a || k
}
B(ni, Zc);
ni.prototype.a = X("goog.net.XhrIo");
var oi = /^https?:?$/i;
o = ni.prototype;
o.Oa = !1;
o.l = k;
o.zd = k;
o.tc = "";
o.Hf = "";
o.qc = 0;
o.rc = "";
o.Qd = !1;
o.cd = !1;
o.fe = !1;
o.qb = !1;
o.xd = 0;
o.xb = k;
o.cg = "";
o.Gh = !1;
o.send = function(a, b, c, d) {
  this.l && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.tc = a;
  this.rc = "";
  this.qc = 0;
  this.Hf = b;
  this.Qd = !1;
  this.Oa = !0;
  this.l = this.Bd ? ki(this.Bd) : new ji;
  this.zd = this.Bd ? hi(this.Bd) : hi(li);
  ei(this.l);
  this.l.onreadystatechange = y(this.Tf, this);
  try {
    V(this.a, pi(this, "Opening Xhr")), this.fe = !0, this.l.open(b, a, !0), this.fe = !1
  }catch(f) {
    V(this.a, pi(this, "Error opening Xhr: " + f.message));
    qi(this, f);
    return
  }
  var a = c || "", g = this.headers.M();
  d && qb(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.X("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  qb(g, function(a, b) {
    this.l.setRequestHeader(b, a)
  }, this);
  if(this.cg) {
    this.l.responseType = this.cg
  }
  if("withCredentials" in this.l) {
    this.l.withCredentials = this.Gh
  }
  try {
    if(this.xb) {
      $c.clearTimeout(this.xb), this.xb = k
    }
    if(this.xd > 0) {
      V(this.a, pi(this, "Will abort after " + this.xd + "ms if incomplete")), this.xb = $c.setTimeout(y(this.Dh, this), this.xd)
    }
    V(this.a, pi(this, "Sending request"));
    this.cd = !0;
    this.l.send(a);
    this.cd = !1
  }catch(i) {
    V(this.a, pi(this, "Send error: " + i.message)), qi(this, i)
  }
};
o.dispatchEvent = function(a) {
  if(this.l) {
    ai(this.l);
    try {
      return ni.b.dispatchEvent.call(this, a)
    }finally {
      ci()
    }
  }else {
    return ni.b.dispatchEvent.call(this, a)
  }
};
o.Dh = function() {
  if(typeof ba != "undefined" && this.l) {
    this.rc = "Timed out after " + this.xd + "ms, aborting", this.qc = 8, V(this.a, pi(this, this.rc)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function qi(a, b) {
  a.Oa = !1;
  if(a.l) {
    a.qb = !0, a.l.abort(), a.qb = !1
  }
  a.rc = b;
  a.qc = 5;
  ri(a);
  si(a)
}
function ri(a) {
  if(!a.Qd) {
    a.Qd = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
o.abort = function(a) {
  if(this.l && this.Oa) {
    V(this.a, pi(this, "Aborting")), this.Oa = !1, this.qb = !0, this.l.abort(), this.qb = !1, this.qc = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), si(this)
  }
};
o.c = function() {
  if(this.l) {
    if(this.Oa) {
      this.Oa = !1, this.qb = !0, this.l.abort(), this.qb = !1
    }
    si(this, !0)
  }
  ni.b.c.call(this)
};
o.Tf = function() {
  !this.fe && !this.cd && !this.qb ? this.jh() : ti(this)
};
o.jh = function() {
  ti(this)
};
function ti(a) {
  if(a.Oa && typeof ba != "undefined") {
    if(a.zd[1] && a.Va() == 4 && ui(a) == 2) {
      V(a.a, pi(a, "Local request error detected and ignored"))
    }else {
      if(a.cd && a.Va() == 4) {
        $c.setTimeout(y(a.Tf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.Va() == 4) {
          V(a.a, pi(a, "Request complete"));
          a.Oa = !1;
          var b;
          a: {
            switch(ui(a)) {
              case 0:
                b = (b = u(a.tc) ? a.tc.match(Ia)[1] || k : a.tc.Na) ? oi.test(b) : self.location ? oi.test(self.location.protocol) : !0;
                b = !b;
                break a;
              case 200:
              ;
              case 204:
              ;
              case 304:
              ;
              case 1223:
                b = !0;
                break a;
              default:
                b = !1
            }
          }
          if(b) {
            a.dispatchEvent("complete"), a.dispatchEvent("success")
          }else {
            a.qc = 6;
            var c;
            try {
              c = a.Va() > 2 ? a.l.statusText : ""
            }catch(d) {
              V(a.a, "Can not get status: " + d.message), c = ""
            }
            a.rc = c + " [" + ui(a) + "]";
            ri(a)
          }
          si(a)
        }
      }
    }
  }
}
function si(a, b) {
  if(a.l) {
    var c = a.l, d = a.zd[0] ? s : k;
    a.l = k;
    a.zd = k;
    if(a.xb) {
      $c.clearTimeout(a.xb), a.xb = k
    }
    b || (ai(c), a.dispatchEvent("ready"), ci());
    var f = bi;
    if(f.ja) {
      var g = w(c);
      V(f.a, "Closing XHR : " + g);
      delete f.Ad[g];
      for(var i in f.kb) {
        $a(f.kb[i], g), f.kb[i].length == 0 && delete f.kb[i]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(j) {
      Sf(a.a, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
o.oc = function() {
  return!!this.l
};
o.Va = function() {
  return this.l ? this.l.readyState : 0
};
function ui(a) {
  try {
    return a.Va() > 2 ? a.l.status : -1
  }catch(b) {
    return Tf(a.a, "Can not get status: " + b.message), -1
  }
}
o.getResponseHeader = function(a) {
  return this.l && this.Va() == 4 ? this.l.getResponseHeader(a) : h
};
function pi(a, b) {
  return b + " [" + a.Hf + " " + a.tc + " " + ui(a) + "]"
}
;function vi(a, b, c) {
  J.call(this);
  this.Qa = b;
  this.pa = a;
  this.Ld = c
}
B(vi, J);
o = vi.prototype;
o.a = X("cw.net.XHRMaster");
o.eb = -1;
o.qe = function(a, b, c) {
  this.Ld.__XHRSlave_makeRequest(this.pa, a, b, c)
};
o.Va = m("eb");
o.ue = function(a, b) {
  b != wi && Sf(this.a, P(this.pa) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  xi(this.Qa);
  a: {
    var c = this.Qa;
    c.vd = !0;
    try {
      for(var d = !1, f = [], g = 0, i = a.length;g < i;g++) {
        if(c.Da) {
          c.a.info(c.A() + " returning from loop because we're disposed.");
          break a
        }
        if(d = yi(c, a[g], f)) {
          break
        }
      }
      f.length && zi(c, f);
      c.vd = !1;
      c.H.length && c.Ia();
      d && (W(c.a, c.A() + " closeSoon is true.  Frames were: " + P(a)), c.i())
    }finally {
      c.vd = !1
    }
  }
};
o.ve = function(a) {
  V(this.a, "ongotheaders_: " + P(a));
  var b = k;
  "Content-Length" in a && (b = Fh(a["Content-Length"]));
  a = this.Qa;
  V(a.a, a.A() + " got Content-Length: " + b);
  a.ya == Ai && (b == k && (Tf(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Bi(a, 2E3 + b / 3072 * 1E3))
};
o.we = function(a) {
  a != 1 && V(this.a, this.Qa.A() + "'s XHR's readyState is " + a);
  this.eb = a;
  this.eb >= 2 && xi(this.Qa)
};
o.te = function() {
  this.Qa.i()
};
o.c = function() {
  vi.b.c.call(this);
  delete Ci.Ma[this.pa];
  this.Ld.__XHRSlave_dispose(this.pa);
  delete this.Ld
};
function Di() {
  J.call(this);
  this.Ma = {}
}
B(Di, J);
o = Di.prototype;
o.a = X("cw.net.XHRMasterTracker");
o.Ze = function(a, b) {
  var c = "_" + Ah(), d = new vi(c, a, b);
  return this.Ma[c] = d
};
o.ue = function(a, b, c) {
  var b = ab(b), d = this.Ma[a];
  d ? d.ue(b, c) : Sf(this.a, "onframes_: no master for " + P(a))
};
o.ve = function(a, b) {
  var c = this.Ma[a];
  c ? c.ve(b) : Sf(this.a, "ongotheaders_: no master for " + P(a))
};
o.we = function(a, b) {
  var c = this.Ma[a];
  c ? c.we(b) : Sf(this.a, "onreadystatechange_: no master for " + P(a))
};
o.te = function(a) {
  var b = this.Ma[a];
  b ? (delete this.Ma[b.pa], b.te()) : Sf(this.a, "oncomplete_: no master for " + P(a))
};
o.c = function() {
  Di.b.c.call(this);
  for(var a = La(this.Ma);a.length;) {
    a.pop().i()
  }
  delete this.Ma
};
var Ci = new Di;
q.__XHRMaster_onframes = y(Ci.ue, Ci);
q.__XHRMaster_oncomplete = y(Ci.te, Ci);
q.__XHRMaster_ongotheaders = y(Ci.ve, Ci);
q.__XHRMaster_onreadystatechange = y(Ci.we, Ci);
function Ei() {
  Fi.info("Waiting for XDRFrames (may take a while)...");
  var a = new ad, b = q.__XDRSetup.done.length, c;
  q.__XDRSetup.done = {push:function() {
    b += 1;
    c = 2 - b;
    c || (Fi.info("Got XDRFrames after waiting."), cd(a))
  }};
  c = 2 - b;
  c || (Fi.info("Already had all XDRFrames."), cd(a));
  return a
}
var Fi = X("cw.net.waitForXDRFrames");
function Gi(a, b, c, d) {
  this.md = a;
  this.Wf = b;
  this.rd = c;
  this.fg = d;
  (!(this.md.indexOf("http://") == 0 || this.md.indexOf("https://") == 0) || !(this.rd.indexOf("http://") == 0 || this.rd.indexOf("https://") == 0)) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Wf.location.href;
  Ja(this.md, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.fg.location.href;
  Ja(this.rd, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
var Hi = new Qh(";)]}"), Ii = "disconnected_" + Yc++;
function Ji(a, b, c, d) {
  J.call(this);
  this.R = a;
  this.nh = b;
  this.Fa = c;
  this.oi = d;
  this.Lc = new wf;
  this.Kc = Ah() + Ah();
  this.cb = new th;
  this.ge = new vh;
  this.Pc = k;
  if(H) {
    this.Pc = Rc(q, "load", this.qh, !1, this)
  }
}
B(Ji, Zc);
o = Ji.prototype;
o.a = X("cw.net.Stream");
o.If = new sh(-1, []);
o.Jf = new sh(-1, []);
o.fh = 50;
o.eh = 1048576;
o.He = !1;
o.Ae = !1;
o.n = 1;
o.ng = -1;
o.p = k;
o.G = k;
o.zc = k;
o.Ie = 0;
o.Vf = 0;
o.eg = 0;
o.lh = !0;
o.L = function(a, b) {
  a.push("<Stream id=");
  O(this.Kc, a, b);
  a.push(", state=", String(this.n));
  a.push(", primary=");
  O(this.p, a, b);
  a.push(", secondary=");
  O(this.G, a, b);
  a.push(", resetting=");
  O(this.zc, a, b)
};
function Ki(a) {
  var b = [-1];
  a.p && b.push(a.p.Qb);
  a.G && b.push(a.G.Qb);
  return Math.max.apply(Math.max, b)
}
function Li(a) {
  if(a.n != 1) {
    var b = a.cb.T.C() != 0, c = wh(a.ge), d = !c.w(a.Jf) && !(a.p && c.w(a.p.Mb) || a.G && c.w(a.G.Mb)), f = Ki(a);
    if((b = b && f < a.cb.Bb) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.p.bc) {
        W(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.p, c != d.Mb)) {
          !d.ca && !d.H.length && Mi(d), d.H.push(new Oh(c)), d.Mb = c
        }
        b && Ni(a.p, a.cb, f + 1);
        a.p.Ia()
      }else {
        a.G == k ? a.He ? (W(a.a, "tryToSend_: creating secondary to send " + g), a.G = Oi(a, !1), b && Ni(a.G, a.cb, f + 1), a.G.Ia()) : (W(a.a, "tryToSend_: not creating a secondary because Stream might not exist on server"), a.Ae = !0) : W(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
o.qh = function() {
  this.Pc = k;
  if(this.p && this.p.Jb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.p;
    a.Cd = !0;
    a.i()
  }
  if(this.G && this.G.Jb()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.G, a.Cd = !0, a.i()
  }
};
function Pi(a, b) {
  a.n > 2 && e(Error("sendStrings: Can't send strings in state " + a.n));
  if(b.length) {
    if(a.lh) {
      for(var c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || e(Error("sendStrings: string #" + c + " has illegal chars: " + P(d)))
      }
    }
    a.cb.extend(b);
    Li(a)
  }
}
function Oi(a, b) {
  var c;
  a.Fa instanceof Gi ? (c = new xb(document.location), c = (Boolean(Number(c.xa.get("httpStreaming", "0"))) ? 2 : 1) == 1 ? Ai : Qi) : e(Error("Don't support endpoint " + P(a.Fa)));
  a.ng += 1;
  c = new Ri(a.R, a, a.ng, c, a.Fa, b);
  W(a.a, "Created: " + c.A());
  a.Lc.add(c);
  return c
}
function Si(a, b, c) {
  var d = new Ti(a.R, a, b, c);
  W(a.a, "Created: " + d.A() + ", delay=" + b + ", times=" + c);
  a.Lc.add(d);
  return d
}
function Ui(a, b) {
  a.Lc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  V(a.a, "Offline: " + b.A());
  b.ld ? a.Ie += b.ld : a.Ie = 0;
  a.Ie >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), Vi("stream penalty reached limit", !1), a.i());
  if(a.n > 2) {
    a.n == 3 && b.tg ? (V(a.a, "Disposing because resettingTransport_ is done."), a.i()) : V(a.a, "Not creating a transport because Stream is in state " + a.n)
  }else {
    var c;
    var d;
    c = b instanceof Ti;
    if(!c && b.Cd) {
      var f = H ? df ? [0, 1] : [9, 20] : [0, 0];
      c = f[0];
      d = f[1];
      W(a.a, "getDelayForNextTransport_: " + P({delay:c, times:d}))
    }else {
      d = b.We();
      if(b == a.p) {
        if(d) {
          f = ++a.Vf
        }else {
          if(!c) {
            f = a.Vf = 0
          }
        }
      }else {
        if(d) {
          f = ++a.eg
        }else {
          if(!c) {
            f = a.eg = 0
          }
        }
      }
      if(c || !f) {
        d = c = 0, W(a.a, "getDelayForNextTransport_: " + P({count:f, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(f, 3), i = Math.floor(Math.random() * 4E3) - 2E3, j = Math.max(0, b.og - b.Le);
        d = (c = Math.max(0, g + i - j)) ? 1 : 0;
        W(a.a, "getDelayForNextTransport_: " + P({count:f, base:g, variance:i, oldDuration:j, delay:c, times:d}))
      }
    }
    c = [c, d];
    f = c[0];
    c = c[1];
    if(b == a.p) {
      a.p = k, c ? a.p = Si(a, f, c) : (f = Ki(a), a.p = Oi(a, !0), Ni(a.p, a.cb, f + 1)), a.p.Ia()
    }else {
      if(b == a.G) {
        a.G = k, c ? (a.G = Si(a, f, c), a.G.Ia()) : Li(a)
      }
    }
  }
}
o.reset = function(a) {
  this.n > 2 && e(Error("reset: Can't send reset in state " + this.n));
  this.n = 3;
  this.p && this.p.bc ? (this.a.info("reset: Sending ResetFrame over existing primary."), Wi(this.p, a), this.p.Ia()) : (this.p && (V(this.a, "reset: Disposing primary before sending ResetFrame."), this.p.i()), this.G && (V(this.a, "reset: Disposing secondary before sending ResetFrame."), this.G.i()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.zc = Oi(this, !1), Wi(this.zc, a), this.zc.Ia());
  Vi(a, !0)
};
function Xi(a, b, c, d) {
  var f;
  f = a.ge;
  for(var g = a.fh, i = a.eh, j = [], l = !1, p = 0, x = c.length;p < x;p++) {
    var r = c[p], z = r[0], r = r[1];
    if(z == f.Lb + 1) {
      f.Lb += 1;
      for(j.push(r);;) {
        z = f.Lb + 1;
        r = f.ib.get(z, xh);
        if(r === xh) {
          break
        }
        j.push(r[0]);
        f.ib.remove(z);
        f.fb -= r[1];
        f.Lb = z
      }
    }else {
      if(!(z <= f.Lb)) {
        if(g != k && f.ib.C() >= g) {
          l = !0;
          break
        }
        var D = rh(r);
        if(i != k && f.fb + D > i) {
          l = !0;
          break
        }
        f.ib.set(z, [r, D]);
        f.fb += D
      }
    }
  }
  f.ib.sb() && f.ib.clear();
  f = [j, l];
  c = f[0];
  f = f[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      Yi(c[g])
    }
  }
  a.n == 3 || a.Da || (d || Li(a), f && a.n == 2 && (Sf(b.a, b.A() + "'s peer caused rwin overflow."), b.i()))
}
o.start = function() {
  this.n = 2;
  this.p = Oi(this, !0);
  Ni(this.p, this.cb, k);
  this.p.Ia()
};
o.c = function() {
  this.a.info(P(this) + " in disposeInternal.");
  this.n = 4;
  for(var a = this.Lc.S(), b = 0;b < a.length;b++) {
    a[b].i()
  }
  this.dispatchEvent({type:Ii});
  if(H && this.Pc) {
    N(this.Pc), this.Pc = k
  }
  delete this.Lc;
  delete this.p;
  delete this.G;
  delete this.zc;
  delete this.nh;
  Ji.b.c.call(this)
};
var Ai = 1, Qi = 2, Zi = 3;
function Ri(a, b, c, d, f, g) {
  J.call(this);
  this.R = a;
  this.K = b;
  this.Zb = c;
  this.ya = d;
  this.Fa = f;
  this.H = [];
  this.zb = g;
  this.bc = !this.Jb();
  this.Ub = this.ya != Ai;
  this.yg = y(this.Ch, this)
}
B(Ri, J);
o = Ri.prototype;
o.a = X("cw.net.ClientTransport");
o.z = k;
o.Le = k;
o.og = k;
o.nd = k;
o.ca = !1;
o.vd = !1;
o.Mb = k;
o.Xd = 0;
o.Qb = -1;
o.xe = -1;
o.tg = !1;
o.Cd = !1;
o.ld = 0;
o.kc = !1;
o.L = function(a) {
  a.push("<ClientTransport #", String(this.Zb), ", becomePrimary=", String(this.zb), ">")
};
o.A = function() {
  return(this.zb ? "Prim. T#" : "Sec. T#") + this.Zb
};
o.We = function() {
  return!(!this.kc && this.Xd)
};
o.Jb = function() {
  return this.ya == Ai || this.ya == Qi
};
function zi(a, b) {
  fb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Xi(a.K, a, b, !a.Ub)
}
function yi(a, b, c) {
  try {
    var d = Zh(b);
    a.Xd += 1;
    V(a.a, a.A() + " RECV " + P(d));
    var f;
    a.Xd == 1 && !d.w(Hi) && a.Jb() ? (Tf(a.a, a.A() + " is closing soon because got bad preamble: " + P(d)), f = !0) : f = !1;
    if(f) {
      return!0
    }
    if(d instanceof Ph) {
      if(!/^([ -~]*)$/.test(d.Yb)) {
        return a.kc = !0
      }
      a.xe += 1;
      c.push([a.xe, d.Yb])
    }else {
      if(d instanceof Oh) {
        var g = a.K, i = d.qa;
        g.If = i;
        var j = g.cb, l = i.yb, c = !1;
        l > j.Bb && (c = !0);
        for(var p = uh(j).concat(), d = 0;d < p.length;d++) {
          var x = p[d];
          if(x > l) {
            break
          }
          var r = j.T.r[x][1];
          j.T.remove(x);
          j.fb -= r
        }
        for(d = 0;d < i.wb.length;d++) {
          var z = i.wb[d];
          z > j.Bb && (c = !0);
          j.T.X(z) && (r = j.T.r[z][1], j.T.remove(z), j.fb -= r)
        }
        j.T.sb() && j.T.clear();
        if(c) {
          return Tf(a.a, a.A() + " is closing soon because got bad SackFrame"), a.kc = !0
        }
      }else {
        if(d instanceof Rh) {
          a.xe = d.Cc - 1
        }else {
          if(d instanceof Th) {
            a.K.Jf = d.sc
          }else {
            if(d instanceof Vh) {
              return W(a.a, a.A() + " is closing soon because got YouCloseItFrame"), !0
            }else {
              if(d instanceof Yh) {
                return a.kc = !0, d.reason == "stream_attach_failure" ? a.ld += 1 : d.reason == "acked_unsent_strings" && (a.ld += 0.5), W(a.a, a.A() + " is closing soon because got " + P(d)), !0
              }else {
                if(!(d instanceof Qh)) {
                  if(d instanceof Uh) {
                    var D = a.K, Fj = !a.Ub;
                    W(D.a, "Stream is now confirmed to exist at server.");
                    D.He = !0;
                    if(D.Ae && !Fj) {
                      D.Ae = !1, Li(D)
                    }
                  }else {
                    if(c.length) {
                      zi(a, c);
                      if(!t(c)) {
                        for(var cf = c.length - 1;cf >= 0;cf--) {
                          delete c[cf]
                        }
                      }
                      c.length = 0
                    }
                    if(d instanceof Wh) {
                      var Gj = a.K;
                      Vi(d.yc, d.ac);
                      Gj.i();
                      return!0
                    }else {
                      e(Error(a.A() + " had unexpected state in framesReceived_."))
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }catch(Dh) {
    return Dh instanceof $ || e(Dh), Tf(a.a, a.A() + " is closing soon because got InvalidFrame: " + P(b)), a.kc = !0
  }
  return!1
}
o.Ch = function() {
  Tf(this.a, this.A() + " timed out due to lack of connection or no data being received.");
  this.i()
};
function $i(a) {
  if(a.nd != k) {
    a.R.W.clearTimeout(a.nd), a.nd = k
  }
}
function Bi(a, b) {
  $i(a);
  b = Math.round(b);
  a.nd = a.R.W.setTimeout(a.yg, b);
  V(a.a, a.A() + "'s receive timeout set to " + b + " ms.")
}
function xi(a) {
  a.ya != Ai && (a.ya == Zi || a.ya == Qi ? Bi(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ya)))
}
function Mi(a) {
  var b = new Mh;
  b.Zb = a.Zb;
  b.Xf = 2;
  b.Af = 2;
  if(!a.K.He) {
    b.ag = !0;
    var c = aj.get(window.location.protocol == "https:" ? "_s" : "__");
    b.$e = (da(c) ? c : k) + "|" + q.CSRF_TOKEN
  }
  b.Kc = a.K.Kc;
  b.Je = a.Ub;
  if(b.Je) {
    b.Qf = 4096
  }
  b.Of = 3E5;
  b.Mf = a.Ub ? Math.floor(10) : 0;
  b.pg = !1;
  if(a.zb) {
    b.kg = k, b.re = Math.floor((a.Ub ? 358E4 : 25E3) / 1E3)
  }
  b.qa = wh(a.K.ge);
  b.gd = a.K.If;
  a.H.push(b);
  a.Mb = b.qa
}
o.Ia = function() {
  this.ca && !this.bc && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.vd) {
    W(this.a, this.A() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.ca;
    this.ca = !0;
    !a && !this.H.length && Mi(this);
    for(a = 0;a < this.H.length;a++) {
      V(this.a, this.A() + " SEND " + P(this.H[a]))
    }
    if(this.Jb()) {
      for(var a = [], b = 0, c = this.H.length;b < c;b++) {
        this.H[b].ka(a), a.push("\n")
      }
      this.H = [];
      a = a.join("");
      b = this.zb ? this.Fa.md : this.Fa.rd;
      this.z = Ci.Ze(this, this.zb ? this.Fa.Wf : this.Fa.fg);
      this.Le = this.R.W === $c ? A() : this.R.W.getTime();
      this.z.qe(b, "POST", a);
      Bi(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.Ub ? 0 : this.zb ? 25E3 : 2))
    }else {
      if(this.ya == Zi) {
        a = [];
        b = 0;
        for(c = this.H.length;b < c;b++) {
          a.push(this.H[b].fa())
        }
        this.H = [];
        this.z ? this.z.Se(a) : (b = this.Fa, this.z = new Hh(this), this.z.Fe = b.pi.Ze(this.z), this.Le = this.R.W === $c ? A() : this.R.W.getTime(), this.z.Ve(b.host, b.port), this.z.Da || (this.z.Se(a), this.z.Da || Bi(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.ya))
      }
    }
  }
};
function Ni(a, b, c) {
  !a.ca && !a.H.length && Mi(a);
  for(var d = Math.max(c, a.Qb + 1), f = uh(b), c = [], g = 0;g < f.length;g++) {
    var i = f[g];
    (d == k || i >= d) && c.push([i, b.T.r[i][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], f = g[0], g = g[1], (a.Qb == -1 || a.Qb + 1 != f) && a.H.push(new Rh(f)), a.H.push(new Ph(g)), a.Qb = f
  }
}
o.c = function() {
  this.a.info(this.A() + " in disposeInternal.");
  Ri.b.c.call(this);
  this.og = this.R.W === $c ? A() : this.R.W.getTime();
  this.H = [];
  $i(this);
  this.z && this.z.i();
  var a = this.K;
  this.K = k;
  Ui(a, this)
};
function Wi(a, b) {
  !a.ca && !a.H.length && Mi(a);
  a.H.push(new Wh(b, !0));
  a.tg = !0
}
function Ti(a, b, c, d) {
  J.call(this);
  this.R = a;
  this.K = b;
  this.df = c;
  this.Ye = d
}
B(Ti, J);
o = Ti.prototype;
o.ca = !1;
o.bc = !1;
o.ad = k;
o.Mb = k;
o.a = X("cw.net.DoNothingTransport");
function bj(a) {
  a.ad = a.R.W.setTimeout(function() {
    a.ad = k;
    a.Ye--;
    a.Ye ? bj(a) : a.i()
  }, a.df)
}
o.Ia = function() {
  this.ca && !this.bc && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.ca = !0;
  bj(this)
};
o.L = function(a) {
  a.push("<DoNothingTransport delay=", String(this.df), ">")
};
o.Jb = n(!1);
o.A = n("Wast. T");
o.We = n(!1);
o.c = function() {
  this.a.info(this.A() + " in disposeInternal.");
  Ti.b.c.call(this);
  this.ad != k && this.R.W.clearTimeout(this.ad);
  var a = this.K;
  this.K = k;
  Ui(a, this)
};
(function() {
  function a(a) {
    a.match(/[\d]+/g).length = 3
  }
  var b = !1;
  if(navigator.plugins && navigator.plugins.length) {
    var c = navigator.plugins["Shockwave Flash"];
    c && (b = !0, c.description && a(c.description));
    navigator.plugins["Shockwave Flash 2.0"] && (b = !0)
  }else {
    if(navigator.mimeTypes && navigator.mimeTypes.length) {
      (b = (c = navigator.mimeTypes["application/x-shockwave-flash"]) && c.enabledPlugin) && a(c.enabledPlugin.description)
    }else {
      try {
        c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), b = !0, a(c.GetVariable("$version"))
      }catch(d) {
        try {
          c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = !0
        }catch(f) {
          try {
            c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = !0, a(c.GetVariable("$version"))
          }catch(g) {
          }
        }
      }
    }
  }
})();
X("goog.ui.media.FlashObject");
q.__loadFlashObject_callbacks = {};
var wi = 1;
function cj(a, b) {
  this.Ih = a;
  this.Nf = b
}
cj.prototype.me = 0;
cj.prototype.jd = 0;
cj.prototype.Vd = !1;
function dj(a) {
  var b = [];
  if(a.Vd) {
    return[b, 2]
  }
  var c = a.me, d = a.Ih.responseText;
  for(a.me = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var f = d.substr(a.jd, c - a.jd), f = f.replace(/\r$/, "");
    if(f.length > a.Nf) {
      return a.Vd = !0, [b, 2]
    }
    b.push(f);
    a.jd = c += 1
  }
  return a.me - a.jd - 1 > a.Nf ? (a.Vd = !0, [b, 2]) : [b, wi]
}
;var ej = !(F || H && !I("420+"));
function fj(a, b) {
  this.mg = a;
  this.pa = b
}
B(fj, J);
o = fj.prototype;
o.z = k;
o.eb = -1;
o.rf = !1;
o.zf = ["Content-Length", "Server", "Date", "Expires", "Keep-Alive", "Content-Type", "Transfer-Encoding", "Cache-Control"];
function gj(a) {
  var b = dj(a.cf), c = b[0], b = b[1], d = q.parent;
  d ? (d.__XHRMaster_onframes(a.pa, c, b), b != wi && a.i()) : a.i()
}
o.Xg = function() {
  gj(this);
  if(!this.Da) {
    var a = q.parent;
    a && a.__XHRMaster_oncomplete(this.pa);
    this.i()
  }
};
o.ph = function() {
  var a = q.parent;
  if(a) {
    this.eb = this.z.Va();
    if(this.eb >= 2 && !this.rf) {
      for(var b = new sb, c = this.zf.length;c--;) {
        var d = this.zf[c];
        try {
          b.set(d, this.z.l.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.C() && (this.rf = !0, a.__XHRMaster_ongotheaders(this.pa, wb(b)), this.Da)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.pa, this.eb);
    ej && this.eb == 3 && gj(this)
  }else {
    this.i()
  }
};
o.qe = function(a, b, c) {
  this.z = new ni;
  M(this.z, "readystatechange", y(this.ph, this));
  M(this.z, "complete", y(this.Xg, this));
  this.z.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.cf = new cj(this.z.l, 1048576)
};
o.c = function() {
  fj.b.c.call(this);
  delete this.cf;
  this.z && this.z.i();
  delete this.mg.Hc[this.pa];
  delete this.mg
};
function hj() {
  J.call(this);
  this.Hc = {}
}
B(hj, J);
hj.prototype.dh = function(a, b, c, d) {
  var f = new fj(this, a);
  this.Hc[a] = f;
  f.qe(b, c, d)
};
hj.prototype.Fg = function(a) {
  (a = this.Hc[a]) && a.i()
};
hj.prototype.c = function() {
  hj.b.c.call(this);
  for(var a = La(this.Hc);a.length;) {
    a.pop().i()
  }
  delete this.Hc
};
var ij = new hj;
q.__XHRSlave_makeRequest = y(ij.dh, ij);
q.__XHRSlave_dispose = y(ij.Fg, ij);
function jj(a) {
  this.Z = a
}
var kj = /\s*;\s*/;
o = jj.prototype;
o.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && H) {
    var b = "COOKIES_TEST_" + A();
    aj.set(b, "1");
    if(!this.get(b)) {
      return!1
    }
    this.remove(b)
  }
  return a
};
o.set = function(a, b, c, d, f, g) {
  /[;=\s]/.test(a) && e(Error('Invalid cookie name "' + a + '"'));
  /[;\r\n]/.test(b) && e(Error('Invalid cookie value "' + b + '"'));
  da(c) || (c = -1);
  f = f ? ";domain=" + f : "";
  d = d ? ";path=" + d : "";
  g = g ? ";secure" : "";
  c = c < 0 ? "" : c == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(A() + c * 1E3)).toUTCString();
  this.td(a + "=" + b + f + d + c + g)
};
o.get = function(a, b) {
  for(var c = a + "=", d = (this.ob() || "").split(kj), f = 0, g;g = d[f];f++) {
    if(g.indexOf(c) == 0) {
      return g.substr(c.length)
    }
  }
  return b
};
o.remove = function(a, b, c) {
  var d = this.X(a);
  this.set(a, "", 0, b, c);
  return d
};
o.Ka = function() {
  return lj(this).Gf
};
o.S = function() {
  return lj(this).qg
};
o.sb = function() {
  return!this.ob()
};
o.C = function() {
  if(!this.ob()) {
    return 0
  }
  return(this.ob() || "").split(kj).length
};
o.X = function(a) {
  return da(this.get(a))
};
o.dc = function(a) {
  for(var b = lj(this).qg, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return!0
    }
  }
  return!1
};
o.clear = function() {
  for(var a = lj(this).Gf, b = a.length - 1;b >= 0;b--) {
    this.remove(a[b])
  }
};
o.td = function(a) {
  this.Z.cookie = a
};
o.ob = function() {
  return this.Z.cookie
};
function lj(a) {
  for(var a = (a.ob() || "").split(kj), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), d == -1 ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{Gf:b, qg:c}
}
var aj = new jj(document);
aj.Sh = 3950;
function mj() {
}
function nj() {
  new xb(document.location);
  var a = Ei();
  ed(a, function() {
    var a = yd("xdrframe-1").contentWindow || Ld(yd("xdrframe-1")).parentWindow || Ld(yd("xdrframe-1")).defaultView, c = yd("xdrframe-2").contentWindow || Ld(yd("xdrframe-2")).parentWindow || Ld(yd("xdrframe-2")).defaultView;
    a || e(Error("could not get primaryWindow xdrframe"));
    c || e(Error("could not get secondaryWindow xdrframe"));
    var d = new xb(q.__XDRSetup.baseurl1);
    Cb(d, "/httpface/");
    var f = new xb(q.__XDRSetup.baseurl2);
    Cb(f, "/httpface/");
    return new Gi(d.toString(), a, f.toString(), c)
  });
  return a
}
;function oj() {
  this.$f = A()
}
var pj = new oj;
oj.prototype.set = aa("$f");
oj.prototype.reset = function() {
  this.set(A())
};
oj.prototype.get = m("$f");
function qj(a) {
  this.ye = a || "";
  this.Ah = pj
}
qj.prototype.wh = !0;
qj.prototype.yh = !0;
qj.prototype.xh = !0;
qj.prototype.hg = !1;
function rj(a) {
  if(a < 10) {
    return"0" + a
  }
  return String(a)
}
function sj(a, b) {
  var c = (a.lg - b) / 1E3, d = c.toFixed(3), f = 0;
  if(c < 1) {
    f = 2
  }else {
    for(;c < 100;) {
      f++, c *= 10
    }
  }
  for(;f-- > 0;) {
    d = " " + d
  }
  return d
}
function tj(a) {
  qj.call(this, a)
}
B(tj, qj);
tj.prototype.hg = !0;
function uj(a) {
  this.se = a || 100;
  this.Pa = []
}
o = uj.prototype;
o.uc = 0;
o.add = function(a) {
  this.Pa[this.uc] = a;
  this.uc = (this.uc + 1) % this.se
};
o.get = function(a) {
  a = vj(this, a);
  return this.Pa[a]
};
o.set = function(a, b) {
  a = vj(this, a);
  this.Pa[a] = b
};
o.C = function() {
  return this.Pa.length
};
o.sb = function() {
  return this.Pa.length == 0
};
o.clear = function() {
  this.uc = this.Pa.length = 0
};
o.S = function() {
  for(var a = this.C(), b = this.C(), c = [], a = this.C() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
o.Ka = function() {
  for(var a = [], b = this.C(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
o.X = function(a) {
  return a < this.C()
};
o.dc = function(a) {
  for(var b = this.C(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return!0
    }
  }
  return!1
};
function vj(a, b) {
  b >= a.Pa.length && e(Error("Out of bounds exception"));
  if(a.Pa.length < a.se) {
    return b
  }
  return(a.uc + Number(b)) % a.se
}
;function wj(a, b) {
  this.Xa = a || "";
  this.ye = b || "";
  this.Rb = [];
  this.qd = new uj(xj);
  this.oh = y(this.wg, this);
  this.Lg = new tj(this.ye);
  this.Jg = {};
  if(!0 != this.Df) {
    this.Df = !0;
    var c = Xf(), d = this.oh;
    if(!c.mc) {
      c.mc = []
    }
    c.mc.push(d)
  }
  this.ja = yj(this.Xa, "enabled") == "1";
  q.setInterval(y(this.th, this), 7500)
}
var xj = 500;
o = wj.prototype;
o.sg = "LOGGING";
o.Hg = !1;
o.F = k;
o.Pe = !1;
o.Df = !1;
o.Te = k;
o.ne = A();
o.rb = function() {
  this.ja && zj(this)
};
o.isEnabled = m("ja");
o.Ec = function(a) {
  if(this.ja = a) {
    zj(this), this.F && this.yd()
  }
  this.td("enabled", a ? "1" : "0")
};
function Aj(a) {
  return!!a.F && !a.F.closed
}
o.Bg = function() {
  this.qd.clear();
  Aj(this) && this.yd()
};
o.wg = function(a) {
  if(!this.Jg[a.Kf]) {
    var b = this.Lg, c;
    switch(a.La.value) {
      case Gf.value:
        c = "dbg-sh";
        break;
      case Hf.value:
        c = "dbg-sev";
        break;
      case If.value:
        c = "dbg-w";
        break;
      case Jf.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.ye, " ");
    if(b.wh) {
      var f = new Date(a.lg);
      d.push("[", rj(f.getFullYear() - 2E3) + rj(f.getMonth() + 1) + rj(f.getDate()) + " " + rj(f.getHours()) + ":" + rj(f.getMinutes()) + ":" + rj(f.getSeconds()) + "." + rj(Math.floor(f.getMilliseconds() / 10)), "] ")
    }
    b.yh && d.push("[", Ba(sj(a, b.Ah.get())), "s] ");
    b.xh && d.push("[", va(a.Kf), "] ");
    d.push('<span class="', c, '">', ua(Ba(va(a.Pf))));
    b.hg && a.Td && d.push("<br>", ua(Ba(a.Sd || "")));
    d.push("</span><br>");
    b = d.join("");
    this.ja ? (zj(this), this.qd.add(b), Bj(this, b)) : this.qd.add(b);
    this.Hg && a.La.value >= Hf.value && this.Ec(!0)
  }
};
function Bj(a, b) {
  a.Rb.push(b);
  q.clearTimeout(a.Te);
  A() - a.ne > 750 ? a.Re() : a.Te = q.setTimeout(y(a.Re, a), 250)
}
o.Re = function() {
  this.ne = A();
  if(Aj(this)) {
    var a = this.F.document.body, a = a && a.scrollHeight - (a.scrollTop + a.clientHeight) <= 100;
    this.F.document.write(this.Rb.join(""));
    this.Rb.length = 0;
    a && this.F.scrollTo(0, 1E6)
  }
};
function Cj(a) {
  for(var b = a.qd.S(), c = 0;c < b.length;c++) {
    Bj(a, b[c])
  }
}
function zj(a) {
  if(!Aj(a) && !a.Pe) {
    var b = a.ob("dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), f = Number(b[2]), b = Number(b[3]);
    a.Pe = !0;
    a.F = window.open("", F ? a.Xa.replace(/[\s\-\.\,]/g, "_") : a.Xa, "width=" + f + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    if(!a.F && !a.zh) {
      alert("Logger popup was blocked"), a.zh = !0
    }
    a.Pe = !1;
    a.F && a.yd()
  }
}
o.$c = n("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
o.yd = function() {
  Aj(this) || (this.F.document.open(), Bj(this, "<style>" + this.$c() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.sg + "<br><small>Logger: " + this.Xa + "</small></div><hr>"), Cj(this))
};
o.td = function(a, b) {
  a += this.Xa;
  document.cookie = a + "=" + encodeURIComponent(b) + ";path=/;expires=" + (new Date(A() + 2592E6)).toUTCString()
};
o.ob = function(a, b) {
  return yj(this.Xa, a, b)
};
function yj(a, b, c) {
  var a = b + a, b = String(document.cookie), d = b.indexOf(a + "=");
  return d != -1 ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, c == -1 ? b.length : c))) : c || ""
}
o.th = function() {
  Aj(this) && this.td("dbg", (this.F.screenX || this.F.screenLeft || 0) + "," + (this.F.screenY || this.F.screenTop || 0) + "," + (this.F.outerWidth || 800) + "," + (this.F.outerHeight || 500))
};
function Dj(a, b) {
  wj.call(this, a, b)
}
B(Dj, wj);
o = Dj.prototype;
o.Re = function() {
  this.ne = A();
  if(Aj(this)) {
    for(var a = this.Y.e("log"), b = a.scrollHeight - (a.scrollTop + a.offsetHeight) <= 100, c = 0;c < this.Rb.length;c++) {
      var d = this.Y.q("div", "logmsg");
      d.innerHTML = this.Rb[c];
      a.appendChild(d)
    }
    this.Rb.length = 0;
    this.bg();
    if(b) {
      a.scrollTop = a.scrollHeight
    }
  }
};
o.yd = function() {
  if(Aj(this)) {
    var a = this.F.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.Xa + "</title><style>" + this.$c() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.Xa + "</b></p><p>" + this.sg + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (F ? a.body : this.F).onresize = y(this.bg, this);
    this.Y = new xd(a);
    this.Y.e("openbutton").onclick = y(this.kh, this);
    this.Y.e("closebutton").onclick = y(this.Cg, this);
    this.Y.e("clearbutton").onclick = y(this.Bg, this);
    this.Y.e("exitbutton").onclick = y(this.Ig, this);
    Cj(this)
  }
};
o.kh = function() {
  var a = this.Y.e("optionsarea");
  a.innerHTML = "";
  for(var b = Ej(), c = this.Y, d = 0;d < b.length;d++) {
    var f = X(b[d]), f = c.q("div", {}, Hj(this, "sel" + b[d], f.La ? f.La.name : "INHERIT"), c.q("span", {}, b[d] || "(root)"));
    a.appendChild(f)
  }
  this.Y.e("options").style.display = "block";
  return!1
};
function Hj(a, b, c) {
  for(var a = a.Y, b = a.q("select", {id:b}), d = 0;d < Of.length;d++) {
    var f = Of[d], g = a.q("option", {}, f.name);
    if(c == f.name) {
      g.selected = !0
    }
    b.appendChild(g)
  }
  b.appendChild(a.q("option", {selected:c == "INHERIT"}, "INHERIT"));
  return b
}
o.Cg = function() {
  this.Y.e("options").style.display = "none";
  for(var a = Ej(), b = this.Y, c = 0;c < a.length;c++) {
    var d = X(a[c]), f = b.e("sel" + a[c]), f = f.options[f.selectedIndex].text;
    f == "INHERIT" ? d.Gc(k) : d.Gc(Qf(f))
  }
  return!1
};
o.bg = function() {
  var a = this.Y, b = a.e("log"), c = a.e("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.ua().body.offsetHeight - c.offsetHeight - (F ? 4 : 0) + "px"
};
function Ej() {
  var a = Ma(Uf);
  a.sort();
  return a
}
o.Ig = function() {
  this.Ec(!1);
  this.F && this.F.close()
};
o.$c = function() {
  return Dj.b.$c.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:medium monospace;}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
var Ij = X("forum.logger");
window.onerror = function(a, b, c) {
  Sf(Ij, "window.onerror: message: " + P(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Jj() {
}
function Vi(a, b) {
  Ij.info("streamReset: reasonString=" + P(a) + ", applicationLevel=" + b);
  Kj = k
}
function Yi(a) {
  function b() {
    Sf(Ij, "Could not handle string: " + P(a))
  }
  var c = yh(a);
  if(c.length != 3) {
    b()
  }else {
    var d = c[1], f = c[2];
    c[0] != "TEXT" ? b() : Ij.info(zh("<{0}> {1}", d, f))
  }
}
Jj.prototype.reset = function(a) {
  Ij.info("resetting with reason: " + a);
  this.K.reset(a)
};
var Kj = k, Lj = new hd(q.window);
function Mj() {
  Kj && (Kj.reset("idle timeout fired"), Kj = k)
}
var Nj = k;
function Oj() {
  Nj != k && Lj.W.clearTimeout(Nj);
  Kj && (Nj = Lj.W.setTimeout(Mj, 6E5))
}
M(window, ["click", "focus", "keydown", "keypress"], Oj, !0);
function Pj() {
  var a = new mj;
  Kj = new Jj;
  Oj();
  ed(nj(), function(b) {
    Kj || e(Error("lastProto falsy?"));
    b = new Ji(Lj, Kj, b, a);
    Kj.K = b;
    Pi(Kj.K, ["subprotocol:forum"]);
    b.start();
    return k
  })
}
function Qj(a) {
  be.call(this, a);
  this.field = k
}
B(Qj, be);
Qj.prototype.ec = function(a) {
  Qj.b.ec.call(this, a);
  this.mf = wd(a);
  this.of = ee(this) + ".field";
  var b = this.mf.q("DIV", {id:this.of});
  a.appendChild(b);
  a = new Qe("Submit");
  Ee(a, "forum-submit-button");
  b = this.I ? this.I.length : 0;
  a.O && e(Error("Component already rendered"));
  (b < 0 || b > (this.I ? this.I.length : 0)) && e(Error("Child component index out of bounds"));
  if(!this.V || !this.I) {
    this.V = {}, this.I = []
  }
  a.getParent() == this ? (this.V[ee(a)] = a, $a(this.I, a)) : Na(this.V, ee(a), a);
  he(a, this);
  db(this.I, b, 0, a);
  if(a.O && this.O && a.getParent() == this) {
    var c = this.nb();
    c.insertBefore(a.e(), c.childNodes[b] || k)
  }else {
    this.t || this.q(), b = this.I ? this.I[b + 1] || k : k, ie(a, this.nb(), b ? b.t : k)
  }
};
Qj.prototype.q = function() {
  this.ec(this.Ta.createElement("div"))
};
Qj.prototype.Ga = function() {
  Qj.b.Ga.call(this);
  var a = this.field = new Rg(this.of, this.mf.ua());
  a.Ob = 1;
  var b = a.na;
  a.nodeName = b.nodeName;
  a.uh = b.className;
  a.cssText = b.style.cssText;
  b.className += " editable";
  if(b = a.na) {
    var b = b.innerHTML, c = {}, b = a.Zf(8, b, c), d = "padding:0;" + a.na.style.cssText, f = d.length - 1;
    f >= 0 && d.indexOf(";", f) == f || (d += ";");
    d += "background-color:white;";
    F && (d += "overflow:visible;");
    d = a.Pb.q("IFRAME", {frameBorder:0, style:d});
    if(ph(a)) {
      f = y(a.Bf, a, d, b, c), a.Wd = M(d, "load", f, !0)
    }
    f = a.na;
    d.className = f.className;
    d.id = f.id;
    var g = f.parentNode;
    g && g.replaceChild(d, f);
    ph(a) || a.Bf(d, b, c)
  }
};
Qj.prototype.lb = function() {
  var g;
  var a = this.field;
  a.Ob == Xg && e(Error("makeUneditable: Field is already uneditable"));
  a.Aa && Qg(a.Aa);
  Qg(a.Yc);
  Qg(a.Be);
  a.execCommand("clearlorem");
  var b = k;
  if(a.e()) {
    if(a.queryCommandValue("usinglorem")) {
      b = "\u00a0"
    }else {
      if(a.je()) {
        var b = a.e(), c = b.cloneNode(!1), b = b.innerHTML;
        F && b.match(/^\s*<script/i) && (b = "\u00a0" + b);
        c.innerHTML = b;
        a.ah(11, c);
        b = a.Zf(10, c.innerHTML)
      }else {
        (c = a.na) || a.pe.log(Gf, "Couldn't get the field element to read the contents", h), b = c.innerHTML
      }
    }
  }
  qh(a);
  c = a.na;
  Yg == c.id && (Yg = k);
  ch(a);
  if(u(b)) {
    c.innerHTML = b;
    b = a.na;
    b.removeAttribute("contentEditable");
    b.removeAttribute("g_editable");
    a.id ? b.id = a.id : b.removeAttribute("id");
    b.className = a.uh || "";
    var d = a.cssText;
    d ? Ad(b, {style:d}) : b.removeAttribute("style");
    if(u(a.Uf)) {
      u("lineHeight") ? Ud(b, a.Uf, "lineHeight") : Ka("lineHeight", oa(Ud, b)), a.Uf = k
    }
  }
  if(b = a.na) {
    var f;
    g = a.Nc() && (f = a.ea) ? (f = f.ha()) && f.frameElement : k, f = g;
    if(f) {
      (d = f.parentNode) && d.replaceChild(b, f)
    }
  }
  bh(a);
  H && c.blur();
  a.execCommand("updatelorem");
  a.dispatchEvent("unload");
  Qj.b.lb.call(this)
};
function Rj() {
}
ca("__forum_init", function() {
  Xf().Gc(Nf);
  var a = new Dj("main");
  a.Ec(!0);
  a.rb();
  Ij.info("Logger works.");
  a = new Rj;
  a.Dg = new Qj;
  ie(a.Dg, yd("forum-container"));
  Pj()
});
ca("__forum_sendText", function(a) {
  var b = Kj;
  Ij.info("sendText: " + a);
  Pi(b.K, ["broadcast:" + a])
});
})();
