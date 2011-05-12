(function() {
function e(a) {
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
  a.Db = function() {
    return a.Yg || (a.Yg = new a)
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
  a.a = b.prototype;
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
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
var ra = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function sa(a) {
  a = String(a);
  if(!ra.test(a)) {
    return encodeURIComponent(a)
  }
  return a
}
function ta(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function ua(a) {
  if(!va.test(a)) {
    return a
  }
  a.indexOf("&") != -1 && (a = a.replace(wa, "&amp;"));
  a.indexOf("<") != -1 && (a = a.replace(xa, "&lt;"));
  a.indexOf(">") != -1 && (a = a.replace(ya, "&gt;"));
  a.indexOf('"') != -1 && (a = a.replace(za, "&quot;"));
  return a
}
var wa = /&/g, xa = /</g, ya = />/g, za = /\"/g, va = /[&<>\"]/;
function Aa(a) {
  return ta(a.replace(/  /g, " &#160;"), h)
}
function Ba(a, b) {
  for(var c = 0, d = qa(String(a)).split("."), f = qa(String(b)).split("."), g = Math.max(d.length, f.length), i = 0;c == 0 && i < g;i++) {
    var j = d[i] || "", l = f[i] || "", p = RegExp("(\\d*)(\\D*)", "g"), x = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = p.exec(j) || ["", "", ""], z = x.exec(l) || ["", "", ""];
      if(r[0].length == 0 && z[0].length == 0) {
        break
      }
      c = Ca(r[1].length == 0 ? 0 : parseInt(r[1], 10), z[1].length == 0 ? 0 : parseInt(z[1], 10)) || Ca(r[2].length == 0, z[2].length == 0) || Ca(r[2], z[2])
    }while(c == 0)
  }
  return c
}
function Ca(a, b) {
  if(a < b) {
    return-1
  }else {
    if(a > b) {
      return 1
    }
  }
  return 0
}
var Da = {};
function Ea(a) {
  return Da[a] || (Da[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
}
;function Fa(a) {
  return a[a.length - 1]
}
var C = Array.prototype, Ga = C.indexOf ? function(a, b, c) {
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
}, Ha = C.forEach ? function(a, b, c) {
  C.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
}, Ia = C.map ? function(a, b, c) {
  return C.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = u(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in g && (f[i] = b.call(c, g[i], i, a))
  }
  return f
}, Ja = C.some ? function(a, b, c) {
  return C.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return!0
    }
  }
  return!1
}, Ka = C.every ? function(a, b, c) {
  return C.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && !b.call(c, f[g], g, a)) {
      return!1
    }
  }
  return!0
};
function La(a, b) {
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
function Ma(a, b) {
  return Ga(a, b) >= 0
}
function Na(a, b) {
  var c = Ga(a, b);
  c >= 0 && C.splice.call(a, c, 1)
}
function Oa() {
  return C.concat.apply(C, arguments)
}
function Pa(a) {
  if(t(a)) {
    return Oa(a)
  }else {
    for(var b = [], c = 0, d = a.length;c < d;c++) {
      b[c] = a[c]
    }
    return b
  }
}
function Qa(a) {
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
function Ra(a) {
  C.splice.apply(a, Sa(arguments, 1))
}
function Sa(a, b, c) {
  return arguments.length <= 2 ? C.slice.call(a, b) : C.slice.call(a, b, c)
}
function Ta(a, b) {
  C.sort.call(a, b || Ua)
}
function Ua(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function Va(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
function Wa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Xa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
function Ya(a, b, c) {
  b in a && e(Error('The object already contains the key "' + b + '"'));
  a[b] = c
}
function Za(a) {
  var b = {}, c;
  for(c in a) {
    b[a[c]] = c
  }
  return b
}
var $a = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
function ab(a) {
  for(var b, c, d = 1;d < arguments.length;d++) {
    c = arguments[d];
    for(b in c) {
      a[b] = c[b]
    }
    for(var f = 0;f < $a.length;f++) {
      b = $a[f], Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
    }
  }
}
function bb() {
  var a = arguments.length;
  if(a == 1 && t(arguments[0])) {
    return bb.apply(k, arguments[0])
  }
  a % 2 && e(Error("Uneven number of arguments"));
  for(var b = {}, c = 0;c < a;c += 2) {
    b[arguments[c]] = arguments[c + 1]
  }
  return b
}
function cb() {
  var a = arguments.length;
  if(a == 1 && t(arguments[0])) {
    return cb.apply(k, arguments[0])
  }
  for(var b = {}, c = 0;c < a;c++) {
    b[arguments[c]] = !0
  }
  return b
}
;function db(a) {
  if(typeof a.B == "function") {
    return a.B()
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
function eb(a) {
  if(typeof a.R == "function") {
    return a.R()
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
  return Wa(a)
}
function fb(a) {
  if(typeof a.Ka == "function") {
    return a.Ka()
  }
  if(typeof a.R != "function") {
    if(ha(a) || u(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return Xa(a)
  }
}
function gb(a, b) {
  if(typeof a.contains == "function") {
    return a.contains(b)
  }
  if(typeof a.dc == "function") {
    return a.dc(b)
  }
  if(ha(a) || u(a)) {
    return Ma(a, b)
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
function hb(a, b, c) {
  if(typeof a.forEach == "function") {
    a.forEach(b, c)
  }else {
    if(ha(a) || u(a)) {
      Ha(a, b, c)
    }else {
      for(var d = fb(a), f = eb(a), g = f.length, i = 0;i < g;i++) {
        b.call(c, f[i], d && d[i], a)
      }
    }
  }
}
function ib(a, b) {
  if(typeof a.every == "function") {
    return a.every(b, h)
  }
  if(ha(a) || u(a)) {
    return Ka(a, b, h)
  }
  for(var c = fb(a), d = eb(a), f = d.length, g = 0;g < f;g++) {
    if(!b.call(h, d[g], c && c[g], a)) {
      return!1
    }
  }
  return!0
}
;var jb = "StopIteration" in q ? q.StopIteration : Error("StopIteration");
function kb() {
}
kb.prototype.next = function() {
  e(jb)
};
kb.prototype.za = function() {
  return this
};
function lb(a) {
  if(a instanceof kb) {
    return a
  }
  if(typeof a.za == "function") {
    return a.za(!1)
  }
  if(ha(a)) {
    var b = 0, c = new kb;
    c.next = function() {
      for(;;) {
        if(b >= a.length && e(jb), b in a) {
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
function mb(a) {
  var b = nb, a = lb(a), c = new kb;
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
;function ob(a) {
  this.r = {};
  this.g = [];
  var b = arguments.length;
  if(b > 1) {
    b % 2 && e(Error("Uneven number of arguments"));
    for(var c = 0;c < b;c += 2) {
      this.set(arguments[c], arguments[c + 1])
    }
  }else {
    a && this.Cd(a)
  }
}
o = ob.prototype;
o.m = 0;
o.Mc = 0;
o.B = m("m");
o.R = function() {
  pb(this);
  for(var a = [], b = 0;b < this.g.length;b++) {
    a.push(this.r[this.g[b]])
  }
  return a
};
o.Ka = function() {
  pb(this);
  return this.g.concat()
};
o.W = function(a) {
  return qb(this.r, a)
};
o.dc = function(a) {
  for(var b = 0;b < this.g.length;b++) {
    var c = this.g[b];
    if(qb(this.r, c) && this.r[c] == a) {
      return!0
    }
  }
  return!1
};
o.w = function(a, b) {
  if(this === a) {
    return!0
  }
  if(this.m != a.B()) {
    return!1
  }
  var c = b || rb;
  pb(this);
  for(var d, f = 0;d = this.g[f];f++) {
    if(!c(this.get(d), a.get(d))) {
      return!1
    }
  }
  return!0
};
function rb(a, b) {
  return a === b
}
o.sb = function() {
  return this.m == 0
};
o.clear = function() {
  this.r = {};
  this.Mc = this.m = this.g.length = 0
};
o.remove = function(a) {
  if(qb(this.r, a)) {
    return delete this.r[a], this.m--, this.Mc++, this.g.length > 2 * this.m && pb(this), !0
  }
  return!1
};
function pb(a) {
  if(a.m != a.g.length) {
    for(var b = 0, c = 0;b < a.g.length;) {
      var d = a.g[b];
      qb(a.r, d) && (a.g[c++] = d);
      b++
    }
    a.g.length = c
  }
  if(a.m != a.g.length) {
    for(var f = {}, c = b = 0;b < a.g.length;) {
      d = a.g[b], qb(f, d) || (a.g[c++] = d, f[d] = 1), b++
    }
    a.g.length = c
  }
}
o.get = function(a, b) {
  if(qb(this.r, a)) {
    return this.r[a]
  }
  return b
};
o.set = function(a, b) {
  qb(this.r, a) || (this.m++, this.g.push(a), this.Mc++);
  this.r[a] = b
};
o.Cd = function(a) {
  var b;
  a instanceof ob ? (b = a.Ka(), a = a.R()) : (b = Xa(a), a = Wa(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
o.L = function() {
  return new ob(this)
};
function sb(a) {
  pb(a);
  for(var b = {}, c = 0;c < a.g.length;c++) {
    var d = a.g[c];
    b[d] = a.r[d]
  }
  return b
}
o.za = function(a) {
  pb(this);
  var b = 0, c = this.g, d = this.r, f = this.Mc, g = this, i = new kb;
  i.next = function() {
    for(;;) {
      f != g.Mc && e(Error("The map has changed since the iterator was created"));
      b >= c.length && e(jb);
      var i = c[b++];
      return a ? i : d[i]
    }
  };
  return i
};
function qb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function tb(a) {
  this.r = new ob;
  a && this.Cd(a)
}
function ub(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + w(a) : b.substr(0, 1) + a
}
o = tb.prototype;
o.B = function() {
  return this.r.B()
};
o.add = function(a) {
  this.r.set(ub(a), a)
};
o.Cd = function(a) {
  for(var a = eb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
o.od = function(a) {
  for(var a = eb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
o.remove = function(a) {
  return this.r.remove(ub(a))
};
o.clear = function() {
  this.r.clear()
};
o.sb = function() {
  return this.r.sb()
};
o.contains = function(a) {
  return this.r.W(ub(a))
};
o.R = function() {
  return this.r.R()
};
o.L = function() {
  return new tb(this)
};
o.w = function(a) {
  return this.B() == db(a) && vb(this, a)
};
function vb(a, b) {
  var c = db(b);
  if(a.B() > c) {
    return!1
  }
  !(b instanceof tb) && c > 5 && (b = new tb(b));
  return ib(a, function(a) {
    return gb(b, a)
  })
}
o.za = function() {
  return this.r.za(!1)
};
function wb(a) {
  return xb(a || arguments.callee.caller, [])
}
function xb(a, b) {
  var c = [];
  if(Ma(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(yb(a) + "(");
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
            g = (g = yb(g)) ? g : "[fn]";
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
        c.push(xb(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function yb(a) {
  a = String(a);
  if(!zb[a]) {
    var b = /function ([^\(]+)/.exec(a);
    zb[a] = b ? b[1] : "[Anonymous]"
  }
  return zb[a]
}
var zb = {};
function Ab() {
  this.Zf = A()
}
var Bb = new Ab;
Ab.prototype.set = aa("Zf");
Ab.prototype.reset = function() {
  this.set(A())
};
Ab.prototype.get = m("Zf");
function Cb(a) {
  this.xe = a || "";
  this.Ah = Bb
}
Cb.prototype.wh = !0;
Cb.prototype.yh = !0;
Cb.prototype.xh = !0;
Cb.prototype.gg = !1;
function Db(a) {
  if(a < 10) {
    return"0" + a
  }
  return String(a)
}
function Eb(a, b) {
  var c = (a.kg - b) / 1E3, d = c.toFixed(3), f = 0;
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
function Fb(a) {
  Cb.call(this, a)
}
B(Fb, Cb);
Fb.prototype.gg = !0;
function Gb(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
Gb.prototype.vh = 0;
Gb.prototype.Sd = k;
Gb.prototype.Rd = k;
var Hb = 0;
Gb.prototype.reset = function(a, b, c, d, f) {
  this.vh = typeof f == "number" ? f : Hb++;
  this.kg = d || A();
  this.La = a;
  this.Of = b;
  this.Jf = c;
  delete this.Sd;
  delete this.Rd
};
Gb.prototype.Ec = aa("La");
function Ib(a) {
  this.hh = a
}
Ib.prototype.C = k;
Ib.prototype.La = k;
Ib.prototype.G = k;
Ib.prototype.mc = k;
function E(a, b) {
  this.name = a;
  this.value = b
}
E.prototype.toString = m("name");
var Jb = new E("SHOUT", 1200), Kb = new E("SEVERE", 1E3), Lb = new E("WARNING", 900), Mb = new E("INFO", 800), Nb = new E("CONFIG", 700), Ob = new E("ALL", 0), Pb = [new E("OFF", Infinity), Jb, Kb, Lb, Mb, Nb, new E("FINE", 500), new E("FINER", 400), new E("FINEST", 300), Ob], Qb = k;
function Rb(a) {
  if(!Qb) {
    Qb = {};
    for(var b = 0, c;c = Pb[b];b++) {
      Qb[c.value] = c, Qb[c.name] = c
    }
  }
  return Qb[a] || k
}
o = Ib.prototype;
o.getParent = m("C");
o.Ec = aa("La");
function Sb(a) {
  if(a.La) {
    return a.La
  }
  if(a.C) {
    return Sb(a.C)
  }
  return k
}
o.log = function(a, b, c) {
  if(a.value >= Sb(this).value) {
    a = this.Mg(a, b, c);
    q.console && q.console.markTimeline && q.console.markTimeline("log:" + a.Of);
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
o.Mg = function(a, b, c) {
  var d = new Gb(a, String(b), this.hh);
  if(c) {
    d.Sd = c;
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
      f = "Message: " + ua(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + ua(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ua(wb(g) + "-> ")
    }catch(D) {
      f = "Exception trying to expose exception! You win, we lose. " + D
    }
    d.Rd = f
  }
  return d
};
function F(a, b) {
  a.log(Kb, b, h)
}
function Tb(a, b) {
  a.log(Lb, b, h)
}
o.info = function(a, b) {
  this.log(Mb, a, b)
};
var Ub = {}, Vb = k;
function Wb() {
  Vb || (Vb = new Ib(""), Ub[""] = Vb, Vb.Ec(Nb))
}
function Xb() {
  Wb();
  return Vb
}
function G(a) {
  Wb();
  var b;
  if(!(b = Ub[a])) {
    b = new Ib(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = G(a.substr(0, c));
    if(!c.G) {
      c.G = {}
    }
    c.G[d] = b;
    b.C = c;
    Ub[a] = b
  }
  return b
}
;function Yb(a) {
  this.re = a || 100;
  this.Pa = []
}
o = Yb.prototype;
o.sc = 0;
o.add = function(a) {
  this.Pa[this.sc] = a;
  this.sc = (this.sc + 1) % this.re
};
o.get = function(a) {
  a = Zb(this, a);
  return this.Pa[a]
};
o.set = function(a, b) {
  a = Zb(this, a);
  this.Pa[a] = b
};
o.B = function() {
  return this.Pa.length
};
o.sb = function() {
  return this.Pa.length == 0
};
o.clear = function() {
  this.sc = this.Pa.length = 0
};
o.R = function() {
  for(var a = this.B(), b = this.B(), c = [], a = this.B() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
o.Ka = function() {
  for(var a = [], b = this.B(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
o.W = function(a) {
  return a < this.B()
};
o.dc = function(a) {
  for(var b = this.B(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return!0
    }
  }
  return!1
};
function Zb(a, b) {
  b >= a.Pa.length && e(Error("Out of bounds exception"));
  if(a.Pa.length < a.re) {
    return b
  }
  return(a.sc + Number(b)) % a.re
}
;var $b, ac, bc, cc;
function dc() {
  return q.navigator ? q.navigator.userAgent : k
}
cc = bc = ac = $b = !1;
var ec;
if(ec = dc()) {
  var fc = q.navigator;
  $b = ec.indexOf("Opera") == 0;
  ac = !$b && ec.indexOf("MSIE") != -1;
  bc = !$b && ec.indexOf("WebKit") != -1;
  cc = !$b && !bc && fc.product == "Gecko"
}
var H = $b, I = ac, J = cc, K = bc, gc = q.navigator, hc = (gc && gc.platform || "").indexOf("Mac") != -1, ic;
a: {
  var jc = "", kc;
  if(H && q.opera) {
    var lc = q.opera.version, jc = typeof lc == "function" ? lc() : lc
  }else {
    if(J ? kc = /rv\:([^\);]+)(\)|;)/ : I ? kc = /MSIE\s+([^\);]+)(\)|;)/ : K && (kc = /WebKit\/(\S+)/), kc) {
      var mc = kc.exec(dc()), jc = mc ? mc[1] : ""
    }
  }
  if(I) {
    var nc, oc = q.document;
    nc = oc ? oc.documentMode : h;
    if(nc > parseFloat(jc)) {
      ic = String(nc);
      break a
    }
  }
  ic = jc
}
var pc = {};
function L(a) {
  return pc[a] || (pc[a] = Ba(ic, a) >= 0)
}
var qc = {};
function rc() {
  return qc[9] || (qc[9] = I && document.documentMode && document.documentMode >= 9)
}
;function sc(a, b) {
  this.Wa = a || "";
  this.xe = b || "";
  this.Qb = [];
  this.qd = new Yb(tc);
  this.oh = y(this.vg, this);
  this.Kg = new Fb(this.xe);
  this.Ig = {};
  if(!0 != this.Df) {
    this.Df = !0;
    var c = Xb(), d = this.oh;
    if(!c.mc) {
      c.mc = []
    }
    c.mc.push(d)
  }
  this.ia = uc(this.Wa, "enabled") == "1";
  q.setInterval(y(this.th, this), 7500)
}
var tc = 500;
o = sc.prototype;
o.rg = "LOGGING";
o.Gg = !1;
o.D = k;
o.Pe = !1;
o.Df = !1;
o.Te = k;
o.me = A();
o.rb = function() {
  this.ia && vc(this)
};
o.isEnabled = m("ia");
o.Cc = function(a) {
  if(this.ia = a) {
    vc(this), this.D && this.xd()
  }
  this.td("enabled", a ? "1" : "0")
};
function wc(a) {
  return!!a.D && !a.D.closed
}
o.Ag = function() {
  this.qd.clear();
  wc(this) && this.xd()
};
o.vg = function(a) {
  if(!this.Ig[a.Jf]) {
    var b = this.Kg, c;
    switch(a.La.value) {
      case Jb.value:
        c = "dbg-sh";
        break;
      case Kb.value:
        c = "dbg-sev";
        break;
      case Lb.value:
        c = "dbg-w";
        break;
      case Mb.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.xe, " ");
    if(b.wh) {
      var f = new Date(a.kg);
      d.push("[", Db(f.getFullYear() - 2E3) + Db(f.getMonth() + 1) + Db(f.getDate()) + " " + Db(f.getHours()) + ":" + Db(f.getMinutes()) + ":" + Db(f.getSeconds()) + "." + Db(Math.floor(f.getMilliseconds() / 10)), "] ")
    }
    b.yh && d.push("[", Aa(Eb(a, b.Ah.get())), "s] ");
    b.xh && d.push("[", ua(a.Jf), "] ");
    d.push('<span class="', c, '">', ta(Aa(ua(a.Of))));
    b.gg && a.Sd && d.push("<br>", ta(Aa(a.Rd || "")));
    d.push("</span><br>");
    b = d.join("");
    this.ia ? (vc(this), this.qd.add(b), xc(this, b)) : this.qd.add(b);
    this.Gg && a.La.value >= Kb.value && this.Cc(!0)
  }
};
function xc(a, b) {
  a.Qb.push(b);
  q.clearTimeout(a.Te);
  A() - a.me > 750 ? a.Re() : a.Te = q.setTimeout(y(a.Re, a), 250)
}
o.Re = function() {
  this.me = A();
  if(wc(this)) {
    var a = this.D.document.body, a = a && a.scrollHeight - (a.scrollTop + a.clientHeight) <= 100;
    this.D.document.write(this.Qb.join(""));
    this.Qb.length = 0;
    a && this.D.scrollTo(0, 1E6)
  }
};
function yc(a) {
  for(var b = a.qd.R(), c = 0;c < b.length;c++) {
    xc(a, b[c])
  }
}
function vc(a) {
  if(!wc(a) && !a.Pe) {
    var b = a.ob("dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), f = Number(b[2]), b = Number(b[3]);
    a.Pe = !0;
    a.D = window.open("", I ? a.Wa.replace(/[\s\-\.\,]/g, "_") : a.Wa, "width=" + f + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    if(!a.D && !a.zh) {
      alert("Logger popup was blocked"), a.zh = !0
    }
    a.Pe = !1;
    a.D && a.xd()
  }
}
o.Yc = n("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
o.xd = function() {
  wc(this) || (this.D.document.open(), xc(this, "<style>" + this.Yc() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.rg + "<br><small>Logger: " + this.Wa + "</small></div><hr>"), yc(this))
};
o.td = function(a, b) {
  a += this.Wa;
  document.cookie = a + "=" + encodeURIComponent(b) + ";path=/;expires=" + (new Date(A() + 2592E6)).toUTCString()
};
o.ob = function(a, b) {
  return uc(this.Wa, a, b)
};
function uc(a, b, c) {
  var a = b + a, b = String(document.cookie), d = b.indexOf(a + "=");
  return d != -1 ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, c == -1 ? b.length : c))) : c || ""
}
o.th = function() {
  wc(this) && this.td("dbg", (this.D.screenX || this.D.screenLeft || 0) + "," + (this.D.screenY || this.D.screenTop || 0) + "," + (this.D.outerWidth || 800) + "," + (this.D.outerHeight || 500))
};
var zc, Ac = !I || L("9");
!J && !I || I && L("9") || J && L("1.9.1");
var Bc = I && !L("9");
function Cc(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function Dc(a) {
  var b = Cc(a), c = Sa(arguments, 1), d;
  d = b;
  for(var f = 0, g = 0;g < c.length;g++) {
    Ma(d, c[g]) || (d.push(c[g]), f++)
  }
  d = f == c.length;
  a.className = b.join(" ");
  return d
}
function Ec(a) {
  var b = Cc(a), c = Sa(arguments, 1), d;
  d = b;
  for(var f = 0, g = 0;g < d.length;g++) {
    Ma(c, d[g]) && (Ra(d, g--, 1), f++)
  }
  d = f == c.length;
  a.className = b.join(" ");
  return d
}
;function Fc(a) {
  return a ? new Gc(M(a)) : zc || (zc = new Gc)
}
function Hc(a) {
  return u(a) ? document.getElementById(a) : a
}
function Ic(a, b) {
  var c = b && b != "*" ? b.toUpperCase() : "";
  if(a.querySelectorAll && a.querySelector && (!K || document.compatMode == "CSS1Compat" || L("528")) && c) {
    return a.querySelectorAll(c + "")
  }
  return a.getElementsByTagName(c || "*")
}
function Jc(a, b) {
  Va(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in Kc ? a.setAttribute(Kc[d], b) : a[d] = b
  })
}
var Kc = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Lc(a) {
  return a ? a.parentWindow || a.defaultView : window
}
function Mc(a, b, c, d) {
  function f(c) {
    c && b.appendChild(u(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && g.nodeType > 0) ? Ha(Nc(g) ? Pa(g) : g, f) : f(g)
  }
}
function Oc(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Pc(a, b) {
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
function Qc(a, b) {
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
        return Rc(a, b)
      }
      if(!c && Pc(f, b)) {
        return-1 * Sc(a, b)
      }
      if(!d && Pc(g, a)) {
        return Sc(b, a)
      }
      return(c ? a.sourceIndex : f.sourceIndex) - (d ? b.sourceIndex : g.sourceIndex)
    }
  }
  d = M(a);
  c = d.createRange();
  c.selectNode(a);
  c.collapse(!0);
  d = d.createRange();
  d.selectNode(b);
  d.collapse(!0);
  return c.compareBoundaryPoints(q.Range.START_TO_END, d)
}
function Sc(a, b) {
  var c = a.parentNode;
  if(c == b) {
    return-1
  }
  for(var d = b;d.parentNode != c;) {
    d = d.parentNode
  }
  return Rc(d, a)
}
function Rc(a, b) {
  for(var c = b;c = c.previousSibling;) {
    if(c == a) {
      return-1
    }
  }
  return 1
}
function Tc() {
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
function M(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
function Uc(a) {
  return K ? a.document || a.contentWindow.document : a.contentDocument || a.contentWindow.document
}
var Vc = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Wc = {IMG:" ", BR:"\n"};
function Xc(a) {
  var b = a.getAttributeNode("tabindex");
  if(b && b.specified) {
    return a = a.tabIndex, typeof a == "number" && a >= 0
  }
  return!1
}
function Yc(a) {
  var b = [];
  Zc(a, b, !1);
  return b.join("")
}
function Zc(a, b, c) {
  if(!(a.nodeName in Vc)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Wc) {
        b.push(Wc[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Zc(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Nc(a) {
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
function $c(a) {
  return ad(a, function(a) {
    return a.nodeName == "A" && !0
  })
}
function ad(a, b) {
  for(var c = 0;a;) {
    if(b(a)) {
      return a
    }
    a = a.parentNode;
    c++
  }
  return k
}
function Gc(a) {
  this.Y = a || q.document || document
}
o = Gc.prototype;
o.Ta = Fc;
o.ua = m("Y");
o.d = function(a) {
  return u(a) ? this.Y.getElementById(a) : a
};
o.q = function() {
  var a = this.Y, b = arguments, c = b[0], d = b[1];
  if(!Ac && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', ua(d.name), '"');
    if(d.type) {
      c.push(' type="', ua(d.type), '"');
      var f = {};
      ab(f, d);
      d = f;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  if(d) {
    u(d) ? c.className = d : t(d) ? Dc.apply(k, [c].concat(d)) : Jc(c, d)
  }
  b.length > 2 && Mc(a, c, b, 2);
  return c
};
o.createElement = function(a) {
  return this.Y.createElement(a)
};
o.createTextNode = function(a) {
  return this.Y.createTextNode(a)
};
o.ga = function() {
  return this.Y.parentWindow || this.Y.defaultView
};
o.appendChild = function(a, b) {
  a.appendChild(b)
};
o.append = function(a) {
  Mc(M(a), a, arguments, 1)
};
function bd(a, b) {
  if(b.firstElementChild != h) {
    return b.firstElementChild
  }
  for(var c = b.firstChild;c && c.nodeType != 1;) {
    c = c.nextSibling
  }
  return c
}
o.contains = Pc;
function cd(a, b) {
  sc.call(this, a, b)
}
B(cd, sc);
o = cd.prototype;
o.Re = function() {
  this.me = A();
  if(wc(this)) {
    for(var a = this.X.d("log"), b = a.scrollHeight - (a.scrollTop + a.offsetHeight) <= 100, c = 0;c < this.Qb.length;c++) {
      var d = this.X.q("div", "logmsg");
      d.innerHTML = this.Qb[c];
      a.appendChild(d)
    }
    this.Qb.length = 0;
    this.ag();
    if(b) {
      a.scrollTop = a.scrollHeight
    }
  }
};
o.xd = function() {
  if(wc(this)) {
    var a = this.D.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.Wa + "</title><style>" + this.Yc() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.Wa + "</b></p><p>" + this.rg + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (I ? a.body : this.D).onresize = y(this.ag, this);
    this.X = new Gc(a);
    this.X.d("openbutton").onclick = y(this.kh, this);
    this.X.d("closebutton").onclick = y(this.Bg, this);
    this.X.d("clearbutton").onclick = y(this.Ag, this);
    this.X.d("exitbutton").onclick = y(this.Hg, this);
    yc(this)
  }
};
o.kh = function() {
  var a = this.X.d("optionsarea");
  a.innerHTML = "";
  for(var b = dd(), c = this.X, d = 0;d < b.length;d++) {
    var f = G(b[d]), f = c.q("div", {}, ed(this, "sel" + b[d], f.La ? f.La.name : "INHERIT"), c.q("span", {}, b[d] || "(root)"));
    a.appendChild(f)
  }
  this.X.d("options").style.display = "block";
  return!1
};
function ed(a, b, c) {
  for(var a = a.X, b = a.q("select", {id:b}), d = 0;d < Pb.length;d++) {
    var f = Pb[d], g = a.q("option", {}, f.name);
    if(c == f.name) {
      g.selected = !0
    }
    b.appendChild(g)
  }
  b.appendChild(a.q("option", {selected:c == "INHERIT"}, "INHERIT"));
  return b
}
o.Bg = function() {
  this.X.d("options").style.display = "none";
  for(var a = dd(), b = this.X, c = 0;c < a.length;c++) {
    var d = G(a[c]), f = b.d("sel" + a[c]), f = f.options[f.selectedIndex].text;
    f == "INHERIT" ? d.Ec(k) : d.Ec(Rb(f))
  }
  return!1
};
o.ag = function() {
  var a = this.X, b = a.d("log"), c = a.d("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.ua().body.offsetHeight - c.offsetHeight - (I ? 4 : 0) + "px"
};
function dd() {
  var a = Xa(Ub);
  a.sort();
  return a
}
o.Hg = function() {
  this.Cc(!1);
  this.D && this.D.close()
};
o.Yc = function() {
  return cd.a.Yc.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:medium monospace;}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function N() {
  fd && (gd[w(this)] = this)
}
var fd = !1, gd = {};
N.prototype.Da = !1;
N.prototype.h = function() {
  if(!this.Da && (this.Da = !0, this.b(), fd)) {
    var a = w(this);
    gd.hasOwnProperty(a) || e(Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call"));
    delete gd[a]
  }
};
N.prototype.b = function() {
};
var hd, id = !I || L("9"), jd = I && !L("8");
function kd(a, b) {
  N.call(this);
  this.type = a;
  this.currentTarget = this.target = b
}
B(kd, N);
o = kd.prototype;
o.b = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
o.ub = !1;
o.yc = !0;
o.stopPropagation = function() {
  this.ub = !0
};
o.preventDefault = function() {
  this.yc = !1
};
var ld = I ? "focusin" : "DOMFocusIn";
var md = new Function("a", "return a");
function nd(a, b) {
  a && this.rb(a, b)
}
B(nd, kd);
var od = [1, 4, 2];
o = nd.prototype;
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
o.fa = k;
o.rb = function(a, b) {
  var c = this.type = a.type;
  kd.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(J) {
      var f;
      a: {
        try {
          md(d.nodeName);
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
  this.mh = hc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.fa = a;
  delete this.yc;
  delete this.ub
};
function pd(a) {
  return id ? a.fa.button == 0 : a.type == "click" ? !0 : !!(a.fa.button & od[0])
}
o.stopPropagation = function() {
  nd.a.stopPropagation.call(this);
  this.fa.stopPropagation ? this.fa.stopPropagation() : this.fa.cancelBubble = !0
};
o.preventDefault = function() {
  nd.a.preventDefault.call(this);
  var a = this.fa;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, jd) {
      try {
        if(a.ctrlKey || a.keyCode >= 112 && a.keyCode <= 123) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
o.Lg = m("fa");
o.b = function() {
  nd.a.b.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.fa = k
};
function qd() {
}
var rd = 0;
o = qd.prototype;
o.key = 0;
o.Tb = !1;
o.Jd = !1;
o.rb = function(a, b, c, d, f, g) {
  v(a) ? this.Ff = !0 : a && a.handleEvent && v(a.handleEvent) ? this.Ff = !1 : e(Error("Invalid listener argument"));
  this.Mb = a;
  this.Xf = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.$c = g;
  this.Jd = !1;
  this.key = ++rd;
  this.Tb = !1
};
o.handleEvent = function(a) {
  if(this.Ff) {
    return this.Mb.call(this.$c || this.src, a)
  }
  return this.Mb.handleEvent.call(this.Mb, a)
};
function O(a, b) {
  N.call(this);
  this.Kf = b;
  this.mb = [];
  a > this.Kf && e(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.mb.push(this.Ca ? this.Ca() : {})
  }
}
B(O, N);
O.prototype.Ca = k;
O.prototype.kf = k;
O.prototype.getObject = function() {
  if(this.mb.length) {
    return this.mb.pop()
  }
  return this.Ca ? this.Ca() : {}
};
function sd(a, b) {
  a.mb.length < a.Kf ? a.mb.push(b) : td(a, b)
}
function td(a, b) {
  if(a.kf) {
    a.kf(b)
  }else {
    if(ja(b)) {
      if(v(b.h)) {
        b.h()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
O.prototype.b = function() {
  O.a.b.call(this);
  for(var a = this.mb;a.length;) {
    td(this, a.pop())
  }
  delete this.mb
};
var ud, vd = (ud = "ScriptEngine" in q && q.ScriptEngine() == "JScript") ? q.ScriptEngineMajorVersion() + "." + q.ScriptEngineMinorVersion() + "." + q.ScriptEngineBuildVersion() : "0";
var wd, xd, yd, zd, Ad, Bd, Cd, Dd, Ed, Fd, Gd;
(function() {
  function a() {
    return{m:0, na:0}
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
    return new qd
  }
  function f() {
    return new nd
  }
  var g = ud && !(Ba(vd, "5.7") >= 0), i;
  Bd = function(a) {
    i = a
  };
  if(g) {
    wd = function() {
      return j.getObject()
    };
    xd = function(a) {
      sd(j, a)
    };
    yd = function() {
      return l.getObject()
    };
    zd = function(a) {
      sd(l, a)
    };
    Ad = function() {
      return p.getObject()
    };
    Cd = function() {
      sd(p, c())
    };
    Dd = function() {
      return x.getObject()
    };
    Ed = function(a) {
      sd(x, a)
    };
    Fd = function() {
      return r.getObject()
    };
    Gd = function(a) {
      sd(r, a)
    };
    var j = new O(0, 600);
    j.Ca = a;
    var l = new O(0, 600);
    l.Ca = b;
    var p = new O(0, 600);
    p.Ca = c;
    var x = new O(0, 600);
    x.Ca = d;
    var r = new O(0, 600);
    r.Ca = f
  }else {
    wd = a, xd = s, yd = b, zd = s, Ad = c, Cd = s, Dd = d, Ed = s, Fd = f, Gd = s
  }
})();
var Hd = {}, P = {}, Id = {}, Jd = {};
function Q(a, b, c, d, f) {
  if(b) {
    if(t(b)) {
      for(var g = 0;g < b.length;g++) {
        Q(a, b[g], c, d, f)
      }
      return k
    }else {
      var d = !!d, i = P;
      b in i || (i[b] = wd());
      i = i[b];
      d in i || (i[d] = wd(), i.m++);
      var i = i[d], j = w(a), l;
      i.na++;
      if(i[j]) {
        l = i[j];
        for(g = 0;g < l.length;g++) {
          if(i = l[g], i.Mb == c && i.$c == f) {
            if(i.Tb) {
              break
            }
            return l[g].key
          }
        }
      }else {
        l = i[j] = yd(), i.m++
      }
      g = Ad();
      g.src = a;
      i = Dd();
      i.rb(c, g, a, b, d, f);
      c = i.key;
      g.key = c;
      l.push(i);
      Hd[c] = i;
      Id[j] || (Id[j] = yd());
      Id[j].push(i);
      a.addEventListener ? (a == q || !a.bf) && a.addEventListener(b, g, d) : a.attachEvent(Kd(b), g);
      return c
    }
  }else {
    e(Error("Invalid event type"))
  }
}
function Ld(a, b, c, d, f) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      Ld(a, b[g], c, d, f)
    }
    return k
  }
  a = Q(a, b, c, d, f);
  Hd[a].Jd = !0;
  return a
}
function Md(a, b, c, d, f) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      Md(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = Nd(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Mb == c && a[g].capture == d && a[g].$c == f) {
          R(a[g].key);
          break
        }
      }
    }
  }
}
function R(a) {
  if(Hd[a]) {
    var b = Hd[a];
    if(!b.Tb) {
      var c = b.src, d = b.type, f = b.Xf, g = b.capture;
      c.removeEventListener ? (c == q || !c.bf) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(Kd(d), f);
      c = w(c);
      f = P[d][g][c];
      if(Id[c]) {
        var i = Id[c];
        Na(i, b);
        i.length == 0 && delete Id[c]
      }
      b.Tb = !0;
      f.Qf = !0;
      Od(d, g, c, f);
      delete Hd[a]
    }
  }
}
function Od(a, b, c, d) {
  if(!d.hd && d.Qf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      if(d[f].Tb) {
        var i = d[f].Xf;
        i.src = k;
        Cd(i);
        Ed(d[f])
      }else {
        f != g && (d[g] = d[f]), g++
      }
    }
    d.length = g;
    d.Qf = !1;
    g == 0 && (zd(d), delete P[a][b][c], P[a][b].m--, P[a][b].m == 0 && (xd(P[a][b]), delete P[a][b], P[a].m--), P[a].m == 0 && (xd(P[a]), delete P[a]))
  }
}
function Pd(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Va(Id, function(a) {
      for(var f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          R(g.key), c++
        }
      }
    })
  }else {
    if(a = w(a), Id[a]) {
      for(var a = Id[a], f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          R(g.key), c++
        }
      }
    }
  }
}
function Nd(a, b, c) {
  var d = P;
  if(b in d && (d = d[b], c in d && (d = d[c], a = w(a), d[a]))) {
    return d[a]
  }
  return k
}
function Kd(a) {
  if(a in Jd) {
    return Jd[a]
  }
  return Jd[a] = "on" + a
}
function Qd(a, b, c, d, f) {
  var g = 1, b = w(b);
  if(a[b]) {
    a.na--;
    a = a[b];
    a.hd ? a.hd++ : a.hd = 1;
    try {
      for(var i = a.length, j = 0;j < i;j++) {
        var l = a[j];
        l && !l.Tb && (g &= Rd(l, f) !== !1)
      }
    }finally {
      a.hd--, Od(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Rd(a, b) {
  var c = a.handleEvent(b);
  a.Jd && R(a.key);
  return c
}
Bd(function(a, b) {
  if(!Hd[a]) {
    return!0
  }
  var c = Hd[a], d = c.type, f = P;
  if(!(d in f)) {
    return!0
  }
  var f = f[d], g, i;
  hd === h && (hd = I && !q.addEventListener);
  if(hd) {
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
    p = Fd();
    p.rb(g, this);
    g = !0;
    try {
      if(j) {
        for(var r = yd(), z = p.currentTarget;z;z = z.parentNode) {
          r.push(z)
        }
        i = f[!0];
        i.na = i.m;
        for(var D = r.length - 1;!p.ub && D >= 0 && i.na;D--) {
          p.currentTarget = r[D], g &= Qd(i, r[D], d, !0, p)
        }
        if(l) {
          i = f[!1];
          i.na = i.m;
          for(D = 0;!p.ub && D < r.length && i.na;D++) {
            p.currentTarget = r[D], g &= Qd(i, r[D], d, !1, p)
          }
        }
      }else {
        g = Rd(c, p)
      }
    }finally {
      if(r) {
        r.length = 0, zd(r)
      }
      p.h();
      Gd(p)
    }
    return g
  }
  d = new nd(b, this);
  try {
    g = Rd(c, d)
  }finally {
    d.h()
  }
  return g
});
function Sd() {
  N.call(this)
}
B(Sd, N);
o = Sd.prototype;
o.bf = !0;
o.kd = k;
o.Be = aa("kd");
o.addEventListener = function(a, b, c, d) {
  Q(this, a, b, c, d)
};
o.removeEventListener = function(a, b, c, d) {
  Md(this, a, b, c, d)
};
o.dispatchEvent = function(a) {
  var b = a.type || a, c = P;
  if(b in c) {
    if(u(a)) {
      a = new kd(a, this)
    }else {
      if(a instanceof kd) {
        a.target = a.target || this
      }else {
        var d = a, a = new kd(b, this);
        ab(a, d)
      }
    }
    var d = 1, f, c = c[b], b = !0 in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.kd) {
        f.push(g)
      }
      g = c[!0];
      g.na = g.m;
      for(var i = f.length - 1;!a.ub && i >= 0 && g.na;i--) {
        a.currentTarget = f[i], d &= Qd(g, f[i], a.type, !0, a) && a.yc != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.na = g.m, b) {
        for(i = 0;!a.ub && i < f.length && g.na;i++) {
          a.currentTarget = f[i], d &= Qd(g, f[i], a.type, !1, a) && a.yc != !1
        }
      }else {
        for(f = this;!a.ub && f && g.na;f = f.kd) {
          a.currentTarget = f, d &= Qd(g, f, a.type, !1, a) && a.yc != !1
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
o.b = function() {
  Sd.a.b.call(this);
  Pd(this);
  this.kd = k
};
var Td = q.window;
function Ud(a, b, c) {
  N.call(this);
  this.ne = a;
  this.Zg = b || 0;
  this.lc = c;
  this.yg = y(this.lf, this)
}
B(Ud, N);
o = Ud.prototype;
o.$ = 0;
o.b = function() {
  Ud.a.b.call(this);
  this.stop();
  delete this.ne;
  delete this.lc
};
o.start = function(a) {
  this.stop();
  var b = this.yg, a = da(a) ? a : this.Zg;
  v(b) || (b && typeof b.handleEvent == "function" ? b = y(b.handleEvent, b) : e(Error("Invalid listener argument")));
  this.$ = a > 2147483647 ? -1 : Td.setTimeout(b, a || 0)
};
o.stop = function() {
  this.oc() && Td.clearTimeout(this.$);
  this.$ = 0
};
function Vd(a) {
  a.oc() && (a.stop(), a.lf())
}
o.oc = function() {
  return this.$ != 0
};
o.lf = function() {
  this.$ = 0;
  this.ne && this.ne.call(this.lc)
};
function Wd() {
  N.call(this)
}
B(Wd, N);
G("goog.dom.SavedRange");
function Xd(a, b, c, d, f) {
  this.P = !!b;
  a && Yd(this, a, d);
  this.ha = f != h ? f : this.T || 0;
  this.P && (this.ha *= -1);
  this.Sc = !c
}
B(Xd, kb);
o = Xd.prototype;
o.O = k;
o.T = 0;
o.ba = !1;
function Yd(a, b, c, d) {
  if(a.O = b) {
    a.T = typeof c == "number" ? c : a.O.nodeType != 1 ? 0 : a.P ? -1 : 1
  }
  if(typeof d == "number") {
    a.ha = d
  }
}
o.Ba = function(a) {
  this.O = a.O;
  this.T = a.T;
  this.ha = a.ha;
  this.P = a.P;
  this.Sc = a.Sc
};
o.L = function() {
  return new Xd(this.O, this.P, !this.Sc, this.T, this.ha)
};
o.next = function() {
  var a;
  if(this.ba) {
    (!this.O || this.Sc && this.ha == 0) && e(jb);
    a = this.O;
    var b = this.P ? -1 : 1;
    if(this.T == b) {
      var c = this.P ? a.lastChild : a.firstChild;
      c ? Yd(this, c) : Yd(this, a, b * -1)
    }else {
      (c = this.P ? a.previousSibling : a.nextSibling) ? Yd(this, c) : Yd(this, a.parentNode, b * -1)
    }
    this.ha += this.T * (this.P ? -1 : 1)
  }else {
    this.ba = !0
  }
  (a = this.O) || e(jb);
  return a
};
o.w = function(a) {
  return a.O == this.O && (!this.O || a.T == this.T)
};
o.splice = function() {
  var a = this.O, b = this.P ? 1 : -1;
  if(this.T == b) {
    this.T = b * -1, this.ha += this.T * (this.P ? -1 : 1)
  }
  this.P = !this.P;
  Xd.prototype.next.call(this);
  this.P = !this.P;
  for(var b = ha(arguments[0]) ? arguments[0] : arguments, c = b.length - 1;c >= 0;c--) {
    a.parentNode && a.parentNode.insertBefore(b[c], a.nextSibling)
  }
  Oc(a)
};
function Zd() {
}
function $d(a) {
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
function ae(a) {
  for(var b = [], c = 0, d = a.Eb();c < d;c++) {
    b.push(a.Va(c))
  }
  return b
}
Zd.prototype.Xa = n(!1);
Zd.prototype.ua = function() {
  return M(I ? this.Ja() : this.n())
};
Zd.prototype.ga = function() {
  return Lc(this.ua())
};
Zd.prototype.containsNode = function(a, b) {
  return this.Qa(be(ce(a), h), b)
};
function de(a, b) {
  Xd.call(this, a, b, !0)
}
B(de, Xd);
function ee() {
}
B(ee, Zd);
ee.prototype.Qa = function(a, b) {
  var c = ae(this), d = ae(a);
  return(b ? Ja : Ka)(d, function(a) {
    return Ja(c, function(c) {
      return c.Qa(a, b)
    })
  })
};
function fe(a, b, c, d, f) {
  var g;
  if(a) {
    this.f = a;
    this.k = b;
    this.e = c;
    this.j = d;
    if(a.nodeType == 1 && a.tagName != "BR") {
      if(a = a.childNodes, b = a[b]) {
        this.f = b, this.k = 0
      }else {
        if(a.length) {
          this.f = Fa(a)
        }
        g = !0
      }
    }
    if(c.nodeType == 1) {
      (this.e = c.childNodes[d]) ? this.j = 0 : this.e = c
    }
  }
  de.call(this, f ? this.e : this.f, f);
  if(g) {
    try {
      this.next()
    }catch(i) {
      i != jb && e(i)
    }
  }
}
B(fe, de);
o = fe.prototype;
o.f = k;
o.e = k;
o.k = 0;
o.j = 0;
o.n = m("f");
o.u = m("e");
o.pc = function() {
  return this.ba && this.O == this.e && (!this.j || this.T != 1)
};
o.next = function() {
  this.pc() && e(jb);
  return fe.a.next.call(this)
};
o.Ba = function(a) {
  this.f = a.f;
  this.e = a.e;
  this.k = a.k;
  this.j = a.j;
  this.la = a.la;
  fe.a.Ba.call(this, a)
};
o.L = function() {
  var a = new fe(this.f, this.k, this.e, this.j, this.la);
  a.Ba(this);
  return a
};
function ge() {
}
ge.prototype.Qa = function(a, b) {
  var c = b && !a.isCollapsed(), d = a.c;
  try {
    return c ? this.ca(d, 0, 1) >= 0 && this.ca(d, 1, 0) <= 0 : this.ca(d, 0, 0) >= 0 && this.ca(d, 1, 1) <= 0
  }catch(f) {
    return I || e(f), !1
  }
};
ge.prototype.containsNode = function(a, b) {
  return this.Qa(ce(a), b)
};
ge.prototype.za = function() {
  return new fe(this.n(), this.A(), this.u(), this.H())
};
function he(a) {
  this.c = a
}
B(he, ge);
function ie(a) {
  var b = M(a).createRange();
  if(a.nodeType == 3) {
    b.setStart(a, 0), b.setEnd(a, a.length)
  }else {
    if(S(a)) {
      for(var c, d = a;(c = d.firstChild) && S(c);) {
        d = c
      }
      b.setStart(d, 0);
      for(d = a;(c = d.lastChild) && S(c);) {
        d = c
      }
      b.setEnd(d, d.nodeType == 1 ? d.childNodes.length : d.length)
    }else {
      c = a.parentNode, a = Ga(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1)
    }
  }
  return b
}
function je(a, b, c, d) {
  var f = M(a).createRange();
  f.setStart(a, b);
  f.setEnd(c, d);
  return f
}
o = he.prototype;
o.L = function() {
  return new this.constructor(this.c.cloneRange())
};
o.Ja = function() {
  return this.c.commonAncestorContainer
};
o.n = function() {
  return this.c.startContainer
};
o.A = function() {
  return this.c.startOffset
};
o.u = function() {
  return this.c.endContainer
};
o.H = function() {
  return this.c.endOffset
};
o.ca = function(a, b, c) {
  return this.c.compareBoundaryPoints(c == 1 ? b == 1 ? q.Range.START_TO_START : q.Range.START_TO_END : b == 1 ? q.Range.END_TO_START : q.Range.END_TO_END, a)
};
o.isCollapsed = function() {
  return this.c.collapsed
};
o.select = function(a) {
  this.sd(Lc(M(this.n())).getSelection(), a)
};
o.sd = function(a) {
  a.removeAllRanges();
  a.addRange(this.c)
};
o.collapse = function(a) {
  this.c.collapse(a)
};
function ke(a) {
  this.c = a
}
B(ke, he);
ke.prototype.sd = function(a, b) {
  var c = b ? this.u() : this.n(), d = b ? this.H() : this.A(), f = b ? this.n() : this.u(), g = b ? this.A() : this.H();
  a.collapse(c, d);
  (c != f || d != g) && a.extend(f, g)
};
function le(a, b) {
  this.c = a;
  this.Fg = b
}
B(le, ge);
var me = G("goog.dom.browserrange.IeRange");
function ne(a) {
  var b = M(a).body.createTextRange();
  if(a.nodeType == 1) {
    b.moveToElementText(a), S(a) && !a.childNodes.length && b.collapse(!1)
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
o = le.prototype;
o.wa = k;
o.f = k;
o.e = k;
o.k = -1;
o.j = -1;
o.L = function() {
  var a = new le(this.c.duplicate(), this.Fg);
  a.wa = this.wa;
  a.f = this.f;
  a.e = this.e;
  return a
};
o.cc = function() {
  this.wa = this.f = this.e = k;
  this.k = this.j = -1
};
o.Ja = function() {
  if(!this.wa) {
    var a = this.c.text, b = this.c.duplicate(), c = a.replace(/ +$/, "");
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
      if(!S(c.firstChild)) {
        break
      }
      c = c.firstChild
    }
    a.length == 0 && (c = oe(this, c));
    this.wa = c
  }
  return this.wa
};
function oe(a, b) {
  for(var c = b.childNodes, d = 0, f = c.length;d < f;d++) {
    var g = c[d];
    if(S(g)) {
      var i = ne(g), j = i.htmlText != g.outerHTML;
      if(a.isCollapsed() && j ? a.ca(i, 1, 1) >= 0 && a.ca(i, 1, 0) <= 0 : a.c.inRange(i)) {
        return oe(a, g)
      }
    }
  }
  return b
}
o.n = function() {
  if(!this.f && (this.f = pe(this, 1), this.isCollapsed())) {
    this.e = this.f
  }
  return this.f
};
o.A = function() {
  if(this.k < 0 && (this.k = qe(this, 1), this.isCollapsed())) {
    this.j = this.k
  }
  return this.k
};
o.u = function() {
  if(this.isCollapsed()) {
    return this.n()
  }
  if(!this.e) {
    this.e = pe(this, 0)
  }
  return this.e
};
o.H = function() {
  if(this.isCollapsed()) {
    return this.A()
  }
  if(this.j < 0 && (this.j = qe(this, 0), this.isCollapsed())) {
    this.k = this.j
  }
  return this.j
};
o.ca = function(a, b, c) {
  return this.c.compareEndPoints((b == 1 ? "Start" : "End") + "To" + (c == 1 ? "Start" : "End"), a)
};
function pe(a, b, c) {
  c = c || a.Ja();
  if(!c || !c.firstChild) {
    return c
  }
  for(var d = b == 1, f = 0, g = c.childNodes.length;f < g;f++) {
    var i = d ? f : g - f - 1, j = c.childNodes[i], l;
    try {
      l = ce(j)
    }catch(p) {
      continue
    }
    var x = l.c;
    if(a.isCollapsed()) {
      if(S(j)) {
        if(l.Qa(a)) {
          return pe(a, b, j)
        }
      }else {
        if(a.ca(x, 1, 1) == 0) {
          a.k = a.j = i;
          break
        }
      }
    }else {
      if(a.Qa(l)) {
        if(!S(j)) {
          d ? a.k = i : a.j = i + 1;
          break
        }
        return pe(a, b, j)
      }else {
        if(a.ca(x, 1, 0) < 0 && a.ca(x, 0, 1) > 0) {
          return pe(a, b, j)
        }
      }
    }
  }
  return c
}
function qe(a, b) {
  var c = b == 1, d = c ? a.n() : a.u();
  if(d.nodeType == 1) {
    for(var d = d.childNodes, f = d.length, g = c ? 1 : -1, i = c ? 0 : f - 1;i >= 0 && i < f;i += g) {
      var j = d[i];
      if(!S(j) && a.c.compareEndPoints((b == 1 ? "Start" : "End") + "To" + (b == 1 ? "Start" : "End"), ce(j).c) == 0) {
        return c ? i : i + 1
      }
    }
    return i == -1 ? 0 : i
  }else {
    return f = a.c.duplicate(), g = ne(d), f.setEndPoint(c ? "EndToEnd" : "StartToStart", g), f = f.text.length, c ? d.length - f : f
  }
}
o.isCollapsed = function() {
  return this.c.compareEndPoints("StartToEnd", this.c) == 0
};
o.select = function() {
  this.c.select()
};
o.collapse = function(a) {
  this.c.collapse(a);
  a ? (this.e = this.f, this.j = this.k) : (this.f = this.e, this.k = this.j)
};
function re(a) {
  this.c = a
}
B(re, he);
re.prototype.sd = function(a) {
  a.collapse(this.n(), this.A());
  (this.u() != this.n() || this.H() != this.A()) && a.extend(this.u(), this.H());
  a.rangeCount == 0 && a.addRange(this.c)
};
function se(a) {
  this.c = a
}
B(se, he);
se.prototype.ca = function(a, b, c) {
  if(L("528")) {
    return se.a.ca.call(this, a, b, c)
  }
  return this.c.compareBoundaryPoints(c == 1 ? b == 1 ? q.Range.START_TO_START : q.Range.END_TO_START : b == 1 ? q.Range.START_TO_END : q.Range.END_TO_END, a)
};
se.prototype.sd = function(a, b) {
  a.removeAllRanges();
  b ? a.setBaseAndExtent(this.u(), this.H(), this.n(), this.A()) : a.setBaseAndExtent(this.n(), this.A(), this.u(), this.H())
};
function te(a) {
  return I && !rc() ? new le(a, M(a.parentElement())) : K ? new se(a) : J ? new ke(a) : H ? new re(a) : new he(a)
}
function ce(a) {
  if(I && !rc()) {
    var b = new le(ne(a), M(a));
    if(S(a)) {
      for(var c, d = a;(c = d.firstChild) && S(c);) {
        d = c
      }
      b.f = d;
      b.k = 0;
      for(d = a;(c = d.lastChild) && S(c);) {
        d = c
      }
      b.e = d;
      b.j = d.nodeType == 1 ? d.childNodes.length : d.length;
      b.wa = a
    }else {
      b.f = b.e = b.wa = a.parentNode, b.k = Ga(b.wa.childNodes, a), b.j = b.k + 1
    }
    a = b
  }else {
    a = K ? new se(ie(a)) : J ? new ke(ie(a)) : H ? new re(ie(a)) : new he(ie(a))
  }
  return a
}
function S(a) {
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
;function ue() {
}
B(ue, Zd);
function be(a, b) {
  var c = new ue;
  c.gb = a;
  c.la = !!b;
  return c
}
o = ue.prototype;
o.gb = k;
o.f = k;
o.k = k;
o.e = k;
o.j = k;
o.la = !1;
o.L = function() {
  var a = new ue;
  a.gb = this.gb;
  a.f = this.f;
  a.k = this.k;
  a.e = this.e;
  a.j = this.j;
  a.la = this.la;
  return a
};
o.Xd = n("text");
o.Xc = function() {
  return ve(this).c
};
o.cc = function() {
  this.f = this.k = this.e = this.j = k
};
o.Eb = n(1);
o.Va = function() {
  return this
};
function ve(a) {
  var r;
  var b;
  if(!(b = a.gb)) {
    b = a.n();
    var c = a.A(), d = a.u(), f = a.H();
    if(I && !rc()) {
      var g = b, i = c, j = d, l = f, p = !1;
      g.nodeType == 1 && (i > g.childNodes.length && F(me, "Cannot have startOffset > startNode child count"), i = g.childNodes[i], p = !i, g = i || g.lastChild || g, i = 0);
      var x = ne(g);
      i && x.move("character", i);
      g == j && i == l ? x.collapse(!0) : (p && x.collapse(!1), p = !1, j.nodeType == 1 && (l > j.childNodes.length && F(me, "Cannot have endOffset > endNode child count"), r = (i = j.childNodes[l]) || j.lastChild || j, j = r, l = 0, p = !i), g = ne(j), g.collapse(!p), l && g.moveEnd("character", l), x.setEndPoint("EndToEnd", g));
      l = new le(x, M(b));
      l.f = b;
      l.k = c;
      l.e = d;
      l.j = f;
      b = l
    }else {
      b = K ? new se(je(b, c, d, f)) : J ? new ke(je(b, c, d, f)) : H ? new re(je(b, c, d, f)) : new he(je(b, c, d, f))
    }
    b = a.gb = b
  }
  return b
}
o.Ja = function() {
  return ve(this).Ja()
};
o.n = function() {
  return this.f || (this.f = ve(this).n())
};
o.A = function() {
  return this.k != k ? this.k : this.k = ve(this).A()
};
o.u = function() {
  return this.e || (this.e = ve(this).u())
};
o.H = function() {
  return this.j != k ? this.j : this.j = ve(this).H()
};
o.Xa = m("la");
o.Qa = function(a, b) {
  var c = a.Xd();
  if(c == "text") {
    return ve(this).Qa(ve(a), b)
  }else {
    if(c == "control") {
      return c = we(a), (b ? Ja : Ka)(c, function(a) {
        return this.containsNode(a, b)
      }, this)
    }
  }
  return!1
};
o.isCollapsed = function() {
  return ve(this).isCollapsed()
};
o.za = function() {
  return new fe(this.n(), this.A(), this.u(), this.H())
};
o.select = function() {
  ve(this).select(this.la)
};
o.ye = function() {
  return new xe(this)
};
o.collapse = function(a) {
  a = this.Xa() ? !a : a;
  this.gb && this.gb.collapse(a);
  a ? (this.e = this.f, this.j = this.k) : (this.f = this.e, this.k = this.j);
  this.la = !1
};
function xe(a) {
  this.wg = a.Xa() ? a.u() : a.n();
  this.Xh = a.Xa() ? a.H() : a.A();
  this.Jg = a.Xa() ? a.n() : a.u();
  this.di = a.Xa() ? a.A() : a.H()
}
B(xe, Wd);
xe.prototype.b = function() {
  xe.a.b.call(this);
  this.Jg = this.wg = k
};
function ye() {
}
B(ye, ee);
function ze(a) {
  var b = new ye;
  b.c = a;
  return b
}
function Ae() {
  for(var a = M(arguments[0]).body.createControlRange(), b = 0, c = arguments.length;b < c;b++) {
    a.addElement(arguments[b])
  }
  return ze(a)
}
o = ye.prototype;
o.c = k;
o.M = k;
o.Gc = k;
o.cc = function() {
  this.Gc = this.M = k
};
o.L = function() {
  return Ae.apply(this, we(this))
};
o.Xd = n("control");
o.Xc = function() {
  return this.c || document.body.createControlRange()
};
o.Eb = function() {
  return this.c ? this.c.length : 0
};
o.Va = function(a) {
  a = this.c.item(a);
  return be(ce(a), h)
};
o.Ja = function() {
  return Tc.apply(k, we(this))
};
o.n = function() {
  return Be(this)[0]
};
o.A = n(0);
o.u = function() {
  var a = Be(this), b = Fa(a);
  return La(a, function(a) {
    return Pc(a, b)
  })
};
o.H = function() {
  return this.u().childNodes.length
};
function we(a) {
  if(!a.M && (a.M = [], a.c)) {
    for(var b = 0;b < a.c.length;b++) {
      a.M.push(a.c.item(b))
    }
  }
  return a.M
}
function Be(a) {
  if(!a.Gc) {
    a.Gc = we(a).concat(), a.Gc.sort(function(a, c) {
      return a.sourceIndex - c.sourceIndex
    })
  }
  return a.Gc
}
o.isCollapsed = function() {
  return!this.c || !this.c.length
};
o.za = function() {
  return new Ce(this)
};
o.select = function() {
  this.c && this.c.select()
};
o.ye = function() {
  return new De(this)
};
o.collapse = function() {
  this.c = k;
  this.cc()
};
function De(a) {
  this.M = we(a)
}
B(De, Wd);
De.prototype.b = function() {
  De.a.b.call(this);
  delete this.M
};
function Ce(a) {
  if(a) {
    this.M = Be(a), this.f = this.M.shift(), this.e = Fa(this.M) || this.f
  }
  de.call(this, this.f, !1)
}
B(Ce, de);
o = Ce.prototype;
o.f = k;
o.e = k;
o.M = k;
o.n = m("f");
o.u = m("e");
o.pc = function() {
  return!this.ha && !this.M.length
};
o.next = function() {
  if(this.pc()) {
    e(jb)
  }else {
    if(!this.ha) {
      var a = this.M.shift();
      Yd(this, a, 1, 1);
      return a
    }
  }
  return Ce.a.next.call(this)
};
o.Ba = function(a) {
  this.M = a.M;
  this.f = a.f;
  this.e = a.e;
  Ce.a.Ba.call(this, a)
};
o.L = function() {
  var a = new Ce(k);
  a.Ba(this);
  return a
};
function Ee() {
  this.ra = [];
  this.vc = [];
  this.Tc = this.Xb = k
}
B(Ee, ee);
o = Ee.prototype;
o.i = G("goog.dom.MultiRange");
o.cc = function() {
  this.vc = [];
  this.Tc = this.Xb = k
};
o.L = function() {
  var a = new Ee;
  a.ra = Pa(this.ra);
  return a
};
o.Xd = n("mutli");
o.Xc = function() {
  this.ra.length > 1 && Tb(this.i, "getBrowserRangeObject called on MultiRange with more than 1 range");
  return this.ra[0]
};
o.Eb = function() {
  return this.ra.length
};
o.Va = function(a) {
  this.vc[a] || (this.vc[a] = be(te(this.ra[a]), h));
  return this.vc[a]
};
o.Ja = function() {
  if(!this.Tc) {
    for(var a = [], b = 0, c = this.Eb();b < c;b++) {
      a.push(this.Va(b).Ja())
    }
    this.Tc = Tc.apply(k, a)
  }
  return this.Tc
};
function Fe(a) {
  if(!a.Xb) {
    a.Xb = ae(a), a.Xb.sort(function(a, c) {
      var d = a.n(), f = a.A(), g = c.n(), i = c.A();
      if(d == g && f == i) {
        return 0
      }
      return Ge(d, f, g, i) ? 1 : -1
    })
  }
  return a.Xb
}
o.n = function() {
  return Fe(this)[0].n()
};
o.A = function() {
  return Fe(this)[0].A()
};
o.u = function() {
  return Fa(Fe(this)).u()
};
o.H = function() {
  return Fa(Fe(this)).H()
};
o.isCollapsed = function() {
  return this.ra.length == 0 || this.ra.length == 1 && this.Va(0).isCollapsed()
};
o.za = function() {
  return new He(this)
};
o.select = function() {
  var a = $d(this.ga());
  a.removeAllRanges();
  for(var b = 0, c = this.Eb();b < c;b++) {
    a.addRange(this.Va(b).Xc())
  }
};
o.ye = function() {
  return new Ie(this)
};
o.collapse = function(a) {
  if(!this.isCollapsed()) {
    var b = a ? this.Va(0) : this.Va(this.Eb() - 1);
    this.cc();
    b.collapse(a);
    this.vc = [b];
    this.Xb = [b];
    this.ra = [b.Xc()]
  }
};
function Ie(a) {
  this.cg = Ia(ae(a), function(a) {
    return a.ye()
  })
}
B(Ie, Wd);
Ie.prototype.b = function() {
  Ie.a.b.call(this);
  Ha(this.cg, function(a) {
    a.h()
  });
  delete this.cg
};
function He(a) {
  if(a) {
    this.Ya = Ia(Fe(a), function(a) {
      return lb(a)
    })
  }
  de.call(this, a ? this.n() : k, !1)
}
B(He, de);
o = He.prototype;
o.Ya = k;
o.Vc = 0;
o.n = function() {
  return this.Ya[0].n()
};
o.u = function() {
  return Fa(this.Ya).u()
};
o.pc = function() {
  return this.Ya[this.Vc].pc()
};
o.next = function() {
  try {
    var a = this.Ya[this.Vc], b = a.next();
    Yd(this, a.O, a.T, a.ha);
    return b
  }catch(c) {
    if(c !== jb || this.Ya.length - 1 == this.Vc) {
      e(c)
    }else {
      return this.Vc++, this.next()
    }
  }
};
o.Ba = function(a) {
  this.Ya = Pa(a.Ya);
  He.a.Ba.call(this, a)
};
o.L = function() {
  var a = new He(k);
  a.Ba(this);
  return a
};
function Je(a) {
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
        b = new Ee;
        for(var c = 0, f = a.rangeCount;c < f;c++) {
          b.ra.push(a.getRangeAt(c))
        }
        return b
      }else {
        b = a.getRangeAt(0), c = Ge(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
      }
    }else {
      return k
    }
  }
  return b && b.addElement ? ze(b) : be(te(b), c)
}
function Ge(a, b, c, d) {
  if(a == c) {
    return d < b
  }
  var f;
  if(a.nodeType == 1 && b) {
    if(f = a.childNodes[b]) {
      a = f, b = 0
    }else {
      if(Pc(a, c)) {
        return!0
      }
    }
  }
  if(c.nodeType == 1 && d) {
    if(f = c.childNodes[d]) {
      c = f, d = 0
    }else {
      if(Pc(c, a)) {
        return!1
      }
    }
  }
  return(Qc(a, c) || b - d) > 0
}
;var Ke, Le, Me, Ne, Oe, Pe, Qe;
Qe = Pe = Oe = Ne = Me = Le = Ke = !1;
var Re = dc();
Re && (Re.indexOf("Firefox") != -1 ? Ke = !0 : Re.indexOf("Camino") != -1 ? Le = !0 : Re.indexOf("iPhone") != -1 || Re.indexOf("iPod") != -1 ? Me = !0 : Re.indexOf("iPad") != -1 ? Ne = !0 : Re.indexOf("Android") != -1 ? Oe = !0 : Re.indexOf("Chrome") != -1 ? Pe = !0 : Re.indexOf("Safari") != -1 && (Qe = !0));
var Se = Le, Te = Me, Ue = Ne, Ve = Oe, We = Pe, Xe = Qe;
var Ye;
a: {
  var Ze = "", $e, af;
  if(Ke) {
    $e = /Firefox\/([0-9.]+)/
  }else {
    if(I || H) {
      Ye = ic;
      break a
    }else {
      We ? $e = /Chrome\/([0-9.]+)/ : Xe ? $e = /Version\/([0-9.]+)/ : Te || Ue ? ($e = /Version\/(\S+).*Mobile\/(\S+)/, af = !0) : Ve ? $e = /Android\s+([0-9.]+)(?:.*Version\/([0-9.]+))?/ : Se && ($e = /Camino\/([0-9.]+)/)
    }
  }
  if($e) {
    var bf = $e.exec(dc()), Ze = bf ? af ? bf[1] + "." + bf[2] : bf[2] || bf[1] : ""
  }
  Ye = Ze
}
;I && rc();
J || K || H || I && rc();
var df = I || K || H || !1, ef = K || !1, ff = I || K || H, gf = J && !0;
I && L("7.0");
var hf = J && L("1.8") || K || H;
I || H || J && L("1.9");
var jf = I || H, kf = I || K && L("525");
K && L("531");
K && L("528");
J && L("1.9") || I || H || K && L("531");
J || K && L("526");
We && Ba(Ye, "4") >= 0 || Xe && L("533");
var lf = function(a) {
  return function() {
    return a
  }
}(!0);
G("goog.editor.Plugin");
var mf = Za({ei:1, fi:2, gi:3, ii:4, hi:5, execCommand:6, queryCommandValue:7, mi:8, bi:10, ai:11}), nf = cb(8, 10, 11);
function of(a, b, c) {
  a.style[Ea(c)] = b
}
function pf(a, b) {
  I ? a.cssText = b : a[K ? "innerText" : "innerHTML"] = b
}
var qf = J ? "MozUserSelect" : K ? "WebkitUserSelect" : k;
function rf(a, b, c) {
  this.pf = a;
  this.Fe = b;
  this.qf = this.Fd = !1;
  this.Td = c || {}
}
function sf(a, b) {
  this.pi = a;
  this.af = b
}
;function tf(a, b, c) {
  this.Rf = a;
  this.rh = !!c;
  a && !b && this.next()
}
B(tf, kb);
tf.prototype.next = function() {
  var a = this.Rf;
  a || e(jb);
  this.Rf = this.rh ? a.previousSibling : a.nextSibling;
  return a
};
function uf(a, b, c) {
  da(c) || (c = b && a.childNodes.length ? a.childNodes.length - 1 : 0);
  tf.call(this, a.childNodes[c], !0, b)
}
B(uf, tf);
cb("ADDRESS", "BLOCKQUOTE", "BODY", "CAPTION", "CENTER", "COL", "COLGROUP", "DIR", "DIV", "DL", "DD", "DT", "FIELDSET", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HR", "ISINDEX", "OL", "LI", "MAP", "MENU", "OPTGROUP", "OPTION", "P", "PRE", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "TL", "UL");
cb("IMG", "IFRAME", "EMBED");
function vf(a) {
  try {
    return a.next()
  }catch(b) {
    return k
  }
}
function nb(a) {
  return a.nodeType == 1 || a.nodeType == 3 && !!/[^\t\n\r ]/.test(a.nodeValue)
}
;cb("text", "file", "url");
function wf(a) {
  N.call(this);
  this.lc = a
}
B(wf, N);
var xf = new O(0, 100), yf = [];
function T(a, b, c, d, f, g) {
  t(c) || (yf[0] = c, c = yf);
  for(var i = 0;i < c.length;i++) {
    var j = a, l = Q(b, c[i], d || a, f || !1, g || a.lc || a);
    j.g ? j.g[l] = !0 : j.$a ? (j.g = xf.getObject(), j.g[j.$a] = !0, j.$a = k, j.g[l] = !0) : j.$a = l
  }
  return a
}
function zf(a, b, c, d, f, g) {
  if(a.$a || a.g) {
    if(t(c)) {
      for(var i = 0;i < c.length;i++) {
        zf(a, b, c[i], d, f, g)
      }
    }else {
      a: {
        d = d || a;
        g = g || a.lc || a;
        f = !!f;
        if(b = Nd(b, c, f)) {
          for(c = 0;c < b.length;c++) {
            if(b[c].Mb == d && b[c].capture == f && b[c].$c == g) {
              b = b[c];
              break a
            }
          }
        }
        b = k
      }
      if(b) {
        if(b = b.key, R(b), a.g) {
          c = a.g, b in c && delete c[b]
        }else {
          if(a.$a == b) {
            a.$a = k
          }
        }
      }
    }
  }
  return a
}
wf.prototype.od = function() {
  if(this.g) {
    for(var a in this.g) {
      R(a), delete this.g[a]
    }
    sd(xf, this.g);
    this.g = k
  }else {
    this.$a && R(this.$a)
  }
};
wf.prototype.b = function() {
  wf.a.b.call(this);
  this.od()
};
wf.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Af(a, b, c, d, f) {
  if(!I && (!K || !L("525"))) {
    return!0
  }
  if(hc && f) {
    return Bf(a)
  }
  if(f && !d) {
    return!1
  }
  if(!c && (b == 17 || b == 18)) {
    return!1
  }
  if(I && d && b == a) {
    return!1
  }
  switch(a) {
    case 13:
      return!0;
    case 27:
      return!K
  }
  return Bf(a)
}
function Bf(a) {
  if(a >= 48 && a <= 57) {
    return!0
  }
  if(a >= 96 && a <= 106) {
    return!0
  }
  if(a >= 65 && a <= 90) {
    return!0
  }
  if(K && a == 0) {
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
;function Cf(a, b) {
  N.call(this);
  this.ji = this.id = a;
  this.da = k;
  this.tb = {};
  this.Hb = {};
  for(var c in mf) {
    this.Hb[c] = []
  }
  this.Uc = "";
  if(K && L("525.13") && Ba(ic, "525.18") <= 0) {
    this.Qe = "tr-webkit-workaround", this.Uc = "." + this.Qe + ">*{padding-right:1}"
  }
  this.Hc = {};
  this.Hc[Df] = 1;
  this.Hc[Ef] = 1;
  this.ge = this.bd = !1;
  this.Wc = new Ud(this.hf, Ff, this);
  this.Ld = {};
  for(var d in Gf) {
    this.Ld[Gf[d]] = 0
  }
  if(J) {
    this.Aa = new Ud(this.Zd, Hf, this)
  }
  this.Ha = new wf(this);
  this.Hh = [];
  this.Nb = If;
  this.Ob = Fc(b || document);
  this.ma = this.Ob.d(this.id);
  this.Dd = this.Ob.ga()
}
B(Cf, Sd);
Cf.prototype.field = k;
Cf.prototype.ma = k;
Cf.prototype.oe = G("goog.editor.Field");
var Df = "change", Ef = "delayedchange", Gf = {Oh:"cvc", Rh:"load", Uh:"unload", Jh:"beforechange", Nh:Df, Ph:Ef, Kh:"beforefocus", Qh:"focus", Mh:"blur", Lh:"beforetab", Th:"selectionchange"}, If = 0, Jf = k;
Cf.prototype.d = m("field");
function U(a, b, c, d) {
  var f = a.d();
  if(f && gf) {
    f = f.ownerDocument
  }
  T(a.Ha, f, b, c, d, h)
}
var Hf = 15, Ff = 250;
Cf.prototype.Lc = lf;
var Kf = {46:!0, 8:!0};
I || (Kf[9] = !0);
var Lf = {86:!0, 88:!0};
I && (Kf[229] = !0);
function Mf(a) {
  var b = !(a.ctrlKey || a.metaKey) && a.keyCode in Kf;
  return(a.ctrlKey || a.metaKey) && a.keyCode in Lf || b
}
function Nf(a) {
  a.Nb = If;
  for(var b in a.tb) {
    var c = a.tb[b];
    c.Vh() || c.disable(a)
  }
  a.field = k;
  a.da = k
}
function Of(a) {
  a.Ha && a.Ha.od();
  if(H && a.Lc()) {
    try {
      var b = a.da.ga();
      b.removeEventListener("focus", a.Hd, !1);
      b.removeEventListener("blur", a.Gd, !1)
    }catch(c) {
    }
    delete a.Hd;
    delete a.Gd
  }
  a.Aa && a.Aa.stop();
  a.Wc.stop()
}
Cf.prototype.b = function() {
  (this.Nb == 1 || this.ie()) && Tb(this.oe, "Disposing a field that is in use.");
  this.ma && this.execCommand("clearlorem");
  Nf(this);
  Of(this);
  this.Ob = k;
  if(this.Ha) {
    this.Ha.h(), this.Ha = k
  }
  for(var a;a = this.Hh.pop();) {
    a.h()
  }
  Jf == this.id && (Jf = k);
  for(var b in this.tb) {
    a = this.tb[b], a.Yh && a.h()
  }
  delete this.tb;
  Cf.a.b.call(this)
};
var Pf = ["DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMCharacterDataModified"];
function Qf(a, b) {
  if(b.keyCode == 9 && !a.dispatchEvent({type:"beforetab", shiftKey:b.shiftKey, altKey:b.altKey, ctrlKey:b.ctrlKey}) || J && b.metaKey && (b.keyCode == 37 || b.keyCode == 39)) {
    return b.preventDefault(), !1
  }else {
    var c;
    if(!(c = b.charCode)) {
      c = Mf(b) ? !0 : !(!J || b.ctrlKey || b.metaKey || J && !b.charCode)
    }
    a.Yd = c;
    a.Yd && a.Nd()
  }
  return!0
}
var Rf = {8:1, 9:1, 13:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 40:1, 46:1}, Sf = {65:!0, 86:!0, 88:!0}, Tf = {8:1, 9:1, 13:1, 27:1, 33:1, 34:1, 37:1, 38:1, 39:1, 40:1};
o = Cf.prototype;
o.nc = function(a) {
  for(var b = this.Hb[a], c = Sa(arguments, 1), d = 0;d < b.length;++d) {
    var f = b[d];
    if((f.isEnabled(this) || nf[a]) && f[mf[a]].apply(f, c)) {
      return!0
    }
  }
  return!1
};
o.$g = function(a) {
  for(var b = this.Hb[a], c = Sa(arguments, 1), d = 0;d < b.length;++d) {
    var f = b[d];
    (f.isEnabled(this) || nf[a]) && f[mf[a]].apply(f, c)
  }
};
o.Yf = function(a) {
  for(var b = this.Hb[a], c = Sa(arguments, 1), d = 0;d < b.length;++d) {
    var f = b[d];
    if(f.isEnabled(this) || nf[a]) {
      c[0] = f[mf[a]].apply(f, c)
    }
  }
  return c[0]
};
o.$d = function(a) {
  (J || Qf(this, a)) && !this.nc(1, a) && kf && Uf(this, a)
};
o.Qg = function(a) {
  if(J) {
    if(!Qf(this, a)) {
      return
    }
  }else {
    this.Yd = !0, this.Nd()
  }
  !this.nc(2, a) && !kf && Uf(this, a)
};
o.Rg = function(a) {
  !J && (this.Yd || Mf(a)) && this.Zd();
  this.nc(3, a);
  V(this, "selectionchange") || (Rf[a.keyCode] || (a.ctrlKey || a.metaKey) && Sf[a.keyCode]) && this.Ae.start()
};
function Uf(a, b) {
  if(!b.altKey) {
    var c = hc ? b.metaKey : b.ctrlKey;
    if(c || Tf[b.keyCode]) {
      var d = b.charCode || b.keyCode;
      d != 17 && a.nc(5, b, String.fromCharCode(d).toLowerCase(), c) && b.preventDefault()
    }
  }
}
o.execCommand = function() {
  for(var a = this.Hb[6], b = 0;b < a.length;++b) {
    a[b].isEnabled(this)
  }
};
o.queryCommandValue = function(a) {
  var b = this.ie() && this.je;
  if(u(a)) {
    return Vf(this, b)
  }else {
    for(var c = {}, d = 0;d < a.length;d++) {
      c[a[d]] = Vf(this, b)
    }
    return c
  }
};
function Vf(a, b) {
  for(var c = a.Hb[7], d = 0;d < c.length;++d) {
    c[d].isEnabled(a)
  }
  return b ? k : !1
}
o.Ng = function(a, b) {
  if(!V(this, Df)) {
    b = b.fa;
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
o.ce = function(a) {
  if(!V(this, Df) && (a = a.Lg ? a.fa : a, !a.target.firebugIgnore)) {
    this.ge = this.bd = !0, this.Aa.start()
  }
};
o.uf = function() {
  I && this.execCommand("clearlorem", !0);
  J && this.Od();
  this.gf()
};
function Wf(a) {
  var a = a.da && a.da.ga(), b;
  if(b = a) {
    b = (a = $d(a || window)) && Je(a)
  }
  return b
}
function Xf(a, b, c) {
  if(!V(a, "selectionchange")) {
    var d = Wf(a), f;
    if(f = d) {
      d = d.Ja(), f = d.nodeType == 1 ? d : d.parentNode
    }
    d = f;
    a.je = !!d && Pc(a.d(), d);
    a.dispatchEvent("cvc");
    a.dispatchEvent({type:"selectionchange", li:b && b.type});
    a.nc(4, b, c)
  }
}
o.Vg = function() {
  var a = this.fg;
  this.fg = k;
  Xf(this, h, a)
};
o.Nd = function() {
  V(this, "beforechange") || this.dispatchEvent("beforechange")
};
function Yf(a, b, c) {
  !b && a.Aa && Vd(a.Aa);
  a.Hc[Df] = 0;
  a.Hc[Ef] = 0;
  b && a.Zd();
  c && a.hf()
}
function V(a, b) {
  return!!a.Hc[b] || a.Ld[b] && A() - a.Ld[b] <= 500
}
o.gf = function(a) {
  Yf(this, !0, a)
};
o.Zd = function() {
  if(!V(this, Df)) {
    this.Aa && this.Aa.stop(), this.ge = this.bd = !0, V(this, Ef) || this.Wc.start()
  }
};
o.hf = function() {
  if(!V(this, Ef)) {
    this.Wc.stop(), this.bd = !1, this.dispatchEvent(Ef)
  }
};
o.Od = function() {
  this.ef();
  this.jf()
};
o.ef = function() {
  V(this, "beforefocus") || (this.execCommand("clearlorem", !0), this.dispatchEvent("beforefocus"))
};
o.jf = function() {
  if(!V(this, "focus")) {
    Jf = this.id;
    this.je = !0;
    this.dispatchEvent("focus");
    if(J) {
      var a = this.d(), b = Wf(this);
      if(b) {
        var c = b.Xa() ? b.n() : b.u();
        if((b.Xa() ? b.A() : b.H()) == 0 && (!c || c == a || c.tagName == "BODY")) {
          for(;b = !a || a.nodeType != 1 ? k : vf(mb(new uf(a, !1)));) {
            a = b
          }
          var a = b = a, d = c = 0, f = new ue;
          f.la = Ge(a, c, b, d);
          if(a.tagName == "BR") {
            var g = a.parentNode, c = Ga(g.childNodes, a), a = g
          }
          if(b.tagName == "BR") {
            g = b.parentNode, d = Ga(g.childNodes, b), b = g
          }
          f.la ? (f.f = b, f.k = d, f.e = a, f.j = c) : (f.f = a, f.k = c, f.e = b, f.j = d);
          f.select()
        }
      }
    }
    !ff && this.Lc() && this.da.ga().parent.getSelection().removeAllRanges()
  }
};
o.ff = function() {
  if(!V(this, "blur")) {
    Jf == this.id && (Jf = k), this.je = !1, this.dispatchEvent("blur")
  }
};
function Zf(a) {
  $c(a.target) && a.preventDefault()
}
o.Tg = function(a) {
  if(!Jf) {
    Jf = this.id
  }
  if(I) {
    var b = a.target;
    b && b.tagName == "A" && a.ctrlKey && this.Ob.ga().open(b.href)
  }
};
o.Ug = function(a) {
  Xf(this, a);
  if(I) {
    this.fg = a.target, this.Ae.start()
  }
};
o.ie = function() {
  return this.Nb == 2
};
o.focus = function() {
  if(!df || K) {
    this.da.ga().focus()
  }else {
    if(H) {
      var a = this.Dd.pageXOffset, b = this.Dd.pageYOffset
    }
    this.d().focus();
    H && this.Dd.scrollTo(a, b)
  }
};
function $f(a) {
  if(!da(a.he) && (a.he = !1, I && a.Lc())) {
    for(var b = a.Ob.ga();b != b.parent;) {
      try {
        b = b.parent
      }catch(c) {
        break
      }
    }
    b = b.location;
    a.he = b.protocol == "https:" && b.search.indexOf("nocheckhttps") == -1
  }
  return a.he
}
o.Bf = function(a, b, c) {
  ag(this);
  a.Wh = "true";
  var d = Fc(this.ma), c = new rf(this.id, d.Y.compatMode == "CSS1Compat", c);
  if($f(this)) {
    var f = Uc(a).body;
    if(df) {
      f.contentEditable = !0
    }
    f.className = "editable";
    f.setAttribute("g_editable", !0);
    f.hideFocus = !0;
    f.id = c.pf;
    c = c.Td;
    u(c) ? of(f, h, c) : Va(c, oa(of, f));
    f.innerHTML = b
  }else {
    var d = new sf(this.d(), this.Uc), g = [];
    c.Fd && c.Fe && g.push("<!DOCTYPE HTML>");
    g.push('<html style="background:none transparent;');
    c.Fd && g.push("height:", c.qf ? "100%" : "auto");
    g.push('">');
    g.push("<head><style>");
    d && d.af && g.push(d.af);
    J && c.Fe && g.push(" img {-moz-force-broken-image-icon: 1;}");
    g.push("</style></head>");
    g.push('<body g_editable="true" hidefocus="true" ');
    df && g.push("contentEditable ");
    g.push('class="editable ');
    g.push('" id="', c.pf, '" style="');
    J && c.Fd && (g.push(";width:100%;border:0;margin:0;background:none transparent;", ";height:", c.Fe ? "100%" : "auto"), c.qf ? g.push(";overflow:auto") : g.push(";overflow-y:hidden;overflow-x:auto"));
    H && g.push(";outline:hidden");
    for(f in c.Td) {
      g.push(";" + f + ":" + c.Td[f])
    }
    g.push('">', b, "</body></html>");
    b = g.join("");
    f = Uc(a);
    f.open();
    f.write(b);
    f.close()
  }
  a = Uc(a).body;
  this.Nb = 2;
  this.field = a;
  this.da = Fc(a);
  this.ge = this.bd = !1;
  a.setAttribute("g_editable", "true");
  if(!df) {
    a = this.da.ua(), a.designMode = "on", hf && a.execCommand("styleWithCSS", !1, !1)
  }
  if(I && (a = this.da.ga(), a = $d(a || window))) {
    if(a.empty) {
      try {
        a.empty()
      }catch(i) {
      }
    }else {
      a.removeAllRanges()
    }
  }
  Jf != this.id && this.execCommand("updatelorem");
  H && this.Lc() ? (this.Hd = y(this.Od, this), this.Gd = y(this.ff, this), a = this.da.ga(), a.addEventListener("focus", this.Hd, !1), a.addEventListener("blur", this.Gd, !1)) : (jf ? (U(this, "focus", this.jf), U(this, ld, this.ef)) : U(this, "focus", this.Od), U(this, "blur", this.ff, J));
  J ? ef ? T(this.Ha, this.d(), "DOMSubtreeModified", this.ce) : (a = this.da.ua(), T(this.Ha, a, Pf, this.ce, !0), T(this.Ha, a, "DOMAttrModified", y(this.Ng, this, this.ce), !0)) : (U(this, ["beforecut", "beforepaste", "drop", "dragend"], this.Nd), U(this, ["cut", "paste"], this.gf), U(this, "drop", this.uf));
  U(this, K ? "dragend" : "dragdrop", this.uf);
  U(this, "keydown", this.$d);
  U(this, "keypress", this.Qg);
  U(this, "keyup", this.Rg);
  this.Ae = new Ud(this.Vg, 250, this);
  K && U(this, "click", Zf);
  U(this, "mousedown", this.Tg);
  U(this, "mouseup", this.Ug);
  a = this.d();
  this.Qe && Dc(a, this.Qe);
  if(this.Uc && $f(this)) {
    a = this.Uc, b = Fc(this.d()), c = k, I ? (c = b.ua().createStyleSheet(), pf(c, a)) : (f = Ic(b.Y, "head")[0], f || (c = Ic(b.Y, "body")[0], f = b.q("head"), c.parentNode.insertBefore(f, c)), c = b.q("style"), pf(c, a), b.appendChild(f, c))
  }
  Yf(this);
  this.oe.info("Dispatching load " + this.id);
  this.dispatchEvent("load");
  for(var j in this.tb) {
    this.tb[j].enable(this)
  }
};
function ag(a) {
  if(a.Vd) {
    R(a.Vd), a.Vd = k
  }
}
;function bg() {
}
function cg(a) {
  var b = [];
  dg(new bg, a, b);
  return b.join("")
}
function dg(a, b, c) {
  switch(typeof b) {
    case "string":
      eg(b, c);
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
          c.push(f), dg(a, b[g], c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (g = b[f], typeof g != "function" && (c.push(d), eg(f, c), c.push(":"), dg(a, g, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var fg = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, gg = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function eg(a, b) {
  b.push('"', a.replace(gg, function(a) {
    if(a in fg) {
      return fg[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    b < 16 ? f += "000" : b < 256 ? f += "00" : b < 4096 && (f += "0");
    return fg[a] = f + b.toString(16)
  }), '"')
}
;function hg() {
}
fa(hg);
hg.prototype.ih = 0;
hg.Db();
function ig(a) {
  N.call(this);
  this.Sa = a || Fc();
  this.zc = jg
}
B(ig, Sd);
ig.prototype.Xg = hg.Db();
var jg = k;
function kg(a, b) {
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
o = ig.prototype;
o.$ = k;
o.N = !1;
o.t = k;
o.zc = k;
o.gh = k;
o.C = k;
o.G = k;
o.U = k;
o.qg = !1;
function lg(a) {
  return a.$ || (a.$ = ":" + (a.Xg.ih++).toString(36))
}
function mg(a, b) {
  if(a.C && a.C.U) {
    var c = a.C.U, d = a.$;
    d in c && delete c[d];
    Ya(a.C.U, b, a)
  }
  a.$ = b
}
o.d = m("t");
function ng(a) {
  return a.Fb || (a.Fb = new wf(a))
}
function og(a, b) {
  a == b && e(Error("Unable to set parent component"));
  var c;
  if(c = b) {
    if(c = a.C) {
      if(c = a.$) {
        if(c = a.C.U && a.$) {
          c = a.C.U;
          var d = a.$;
          c = d in c ? c[d] : h
        }
        c = c && a.C != b
      }
    }
  }
  c && e(Error("Unable to set parent component"));
  a.C = b;
  ig.a.Be.call(a, b)
}
o.getParent = m("C");
o.Be = function(a) {
  this.C && this.C != a && e(Error("Method not supported"));
  ig.a.Be.call(this, a)
};
o.Ta = m("Sa");
o.q = function() {
  this.t = this.Sa.createElement("div")
};
function pg(a, b, c) {
  a.N && e(Error("Component already rendered"));
  a.t || a.q();
  b ? b.insertBefore(a.t, c || k) : a.Sa.ua().body.appendChild(a.t);
  (!a.C || a.C.N) && a.Ga()
}
o.Ra = function(a) {
  if(this.N) {
    e(Error("Component already rendered"))
  }else {
    if(a && this.zb(a)) {
      this.qg = !0;
      if(!this.Sa || this.Sa.ua() != M(a)) {
        this.Sa = Fc(a)
      }
      this.ec(a);
      this.Ga()
    }else {
      e(Error("Invalid element to decorate"))
    }
  }
};
o.zb = n(!0);
o.ec = aa("t");
o.Ga = function() {
  this.N = !0;
  qg(this, function(a) {
    !a.N && a.d() && a.Ga()
  })
};
o.lb = function() {
  qg(this, function(a) {
    a.N && a.lb()
  });
  this.Fb && this.Fb.od();
  this.N = !1
};
o.b = function() {
  ig.a.b.call(this);
  this.N && this.lb();
  this.Fb && (this.Fb.h(), delete this.Fb);
  qg(this, function(a) {
    a.h()
  });
  !this.qg && this.t && Oc(this.t);
  this.C = this.gh = this.t = this.U = this.G = k
};
o.nb = m("t");
o.Wb = function(a) {
  this.N && e(Error("Component already rendered"));
  this.zc = a
};
function qg(a, b) {
  a.G && Ha(a.G, b, h)
}
o.removeChild = function(a, b) {
  if(a) {
    var c = u(a) ? a : lg(a), d;
    if(this.U && c) {
      var f = this.U;
      c in f && (d = f[c]);
      d = d || k
    }else {
      d = k
    }
    a = d;
    if(c && a) {
      d = this.U, c in d && delete d[c], Na(this.G, a), b && (a.lb(), a.t && Oc(a.t)), og(a, k)
    }
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function rg() {
}
var sg;
fa(rg);
o = rg.prototype;
o.hc = function() {
};
o.q = function(a) {
  return a.Ta().q("div", tg(this, a).join(" "), a.jb)
};
o.nb = function(a) {
  return a
};
o.fc = function(a, b, c) {
  if(a = a.d ? a.d() : a) {
    if(I && !L("7")) {
      var d = ug(Cc(a), b);
      d.push(b);
      oa(c ? Dc : Ec, a).apply(k, d)
    }else {
      c ? Dc(a, b) : Ec(a, b)
    }
  }
};
o.zb = n(!0);
o.Ra = function(a, b) {
  b.id && mg(a, b.id);
  var c = this.nb(b);
  c && c.firstChild ? vg(a, c.firstChild.nextSibling ? Pa(c.childNodes) : c.firstChild) : a.jb = k;
  var d = 0, f = this.Z(), g = this.Z(), i = !1, j = !1, c = !1, l = Cc(b);
  Ha(l, function(a) {
    if(!i && a == f) {
      i = !0, g == f && (j = !0)
    }else {
      if(!j && a == g) {
        j = !0
      }else {
        var b = d;
        if(!this.ig) {
          this.Qc || wg(this), this.ig = Za(this.Qc)
        }
        a = parseInt(this.ig[a], 10);
        d = b | (isNaN(a) ? 0 : a)
      }
    }
  }, this);
  a.p = d;
  i || (l.push(f), g == f && (j = !0));
  j || l.push(g);
  var p = a.ka;
  p && l.push.apply(l, p);
  if(I && !L("7")) {
    var x = ug(l);
    x.length > 0 && (l.push.apply(l, x), c = !0)
  }
  if(!i || !j || p || c) {
    b.className = l.join(" ")
  }
  return b
};
o.Cf = function(a) {
  if(a.zc == k) {
    var b = a.N ? a.t : a.Sa.ua().body, c;
    a: {
      c = M(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(b, k))) {
        c = c.direction || c.getPropertyValue("direction");
        break a
      }
      c = ""
    }
    a.zc = "rtl" == (c || (b.currentStyle ? b.currentStyle.direction : k) || b.style.direction)
  }
  a.zc && this.Wb(a.d(), !0);
  a.isEnabled() && this.Dc(a, a.fb)
};
o.Bc = function(a, b) {
  var c = !b, d = I || H ? a.getElementsByTagName("*") : k;
  if(qf) {
    if(c = c ? "none" : "", a.style[qf] = c, d) {
      for(var f = 0, g;g = d[f];f++) {
        g.style[qf] = c
      }
    }
  }else {
    if(I || H) {
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for(f = 0;g = d[f];f++) {
          g.setAttribute("unselectable", c)
        }
      }
    }
  }
};
o.Wb = function(a, b) {
  this.fc(a, this.Z() + "-rtl", b)
};
o.Ef = function(a) {
  var b;
  if(a.qa & 32 && (b = a.pb())) {
    return Xc(b)
  }
  return!1
};
o.Dc = function(a, b) {
  var c;
  if(a.qa & 32 && (c = a.pb())) {
    if(!b && a.p & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.p & 32 && a.sf()
    }
    if(Xc(c) != b) {
      b ? c.tabIndex = 0 : c.removeAttribute("tabIndex")
    }
  }
};
o.De = function(a, b) {
  a.style.display = b ? "" : "none"
};
o.aa = function(a, b, c) {
  var d = a.d();
  if(d) {
    var f = xg(this, b);
    f && this.fc(a, f, c);
    this.$b(d, b, c)
  }
};
o.$b = function(a, b, c) {
  sg || (sg = bb(1, "disabled", 4, "pressed", 8, "selected", 16, "checked", 64, "expanded"));
  (b = sg[b]) && a.setAttribute("aria-" + b, c)
};
o.pb = function(a) {
  return a.d()
};
o.Z = n("goog-control");
function tg(a, b) {
  var c = a.Z(), d = [c], f = a.Z();
  f != c && d.push(f);
  c = b.p;
  for(f = [];c;) {
    var g = c & -c;
    f.push(xg(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.ka) && d.push.apply(d, c);
  I && !L("7") && d.push.apply(d, ug(d));
  return d
}
function ug(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Ha([], function(d) {
    Ka(d, oa(Ma, a)) && (!b || Ma(d, b)) && c.push(d.join("_"))
  });
  return c
}
function xg(a, b) {
  a.Qc || wg(a);
  return a.Qc[b]
}
function wg(a) {
  var b = a.Z();
  a.Qc = bb(1, b + "-disabled", 2, b + "-hover", 4, b + "-active", 8, b + "-selected", 16, b + "-checked", 32, b + "-focused", 64, b + "-open")
}
;function yg() {
}
B(yg, rg);
fa(yg);
o = yg.prototype;
o.hc = n("button");
o.$b = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : yg.a.$b.call(this, a, b, c)
};
o.q = function(a) {
  var b = yg.a.q.call(this, a), c = a.ic();
  c && this.Ce(b, c);
  (c = a.jc()) && this.ud(b, c);
  a.qa & 16 && this.$b(b, 16, !1);
  return b
};
o.Ra = function(a, b) {
  var b = yg.a.Ra.call(this, a, b), c = this.jc(b);
  a.Oe = c;
  a.Ke = this.ic(b);
  a.qa & 16 && this.$b(b, 16, !1);
  return b
};
o.jc = s;
o.ud = s;
o.ic = function(a) {
  return a.title
};
o.Ce = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
o.Z = n("goog-button");
function zg(a, b) {
  N.call(this);
  a && Ag(this, a, b)
}
B(zg, Sd);
o = zg.prototype;
o.t = k;
o.cd = k;
o.ke = k;
o.dd = k;
o.ab = -1;
o.Za = -1;
var Bg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Cg = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Dg = {61:187, 
59:186}, Eg = I || K && L("525");
o = zg.prototype;
o.$d = function(a) {
  if(K && (this.ab == 17 && !a.ctrlKey || this.ab == 18 && !a.altKey)) {
    this.Za = this.ab = -1
  }
  Eg && !Af(a.keyCode, this.ab, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Za = J && a.keyCode in Dg ? Dg[a.keyCode] : a.keyCode
};
o.Sg = function() {
  this.Za = this.ab = -1
};
o.handleEvent = function(a) {
  var b = a.fa, c, d;
  I && a.type == "keypress" ? (c = this.Za, d = c != 13 && c != 27 ? b.keyCode : 0) : K && a.type == "keypress" ? (c = this.Za, d = b.charCode >= 0 && b.charCode < 63232 && Bf(c) ? b.charCode : 0) : H ? (c = this.Za, d = Bf(c) ? b.keyCode : 0) : (c = b.keyCode || this.Za, d = b.charCode || 0, hc && d == 63 && !c && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in Bg ? f = Bg[c] : c == 25 && a.shiftKey && (f = 9) : g && g in Cg && (f = Cg[g]);
  a = f == this.ab;
  this.ab = f;
  b = new Fg(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.h()
  }
};
o.d = m("t");
function Ag(a, b, c) {
  a.dd && a.detach();
  a.t = b;
  a.cd = Q(a.t, "keypress", a, c);
  a.ke = Q(a.t, "keydown", a.$d, c, a);
  a.dd = Q(a.t, "keyup", a.Sg, c, a)
}
o.detach = function() {
  if(this.cd) {
    R(this.cd), R(this.ke), R(this.dd), this.dd = this.ke = this.cd = k
  }
  this.t = k;
  this.Za = this.ab = -1
};
o.b = function() {
  zg.a.b.call(this);
  this.detach()
};
function Fg(a, b, c, d) {
  d && this.rb(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
B(Fg, nd);
function Gg(a, b) {
  a || e(Error("Invalid class name " + a));
  v(b) || e(Error("Invalid decorator function " + b))
}
var Hg = {};
function W(a, b, c) {
  ig.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = w(b);
      if(d = Hg[d]) {
        break
      }
      b = b.a ? b.a.constructor : k
    }
    b = d ? v(d.Db) ? d.Db() : new d : k
  }
  this.v = b;
  this.jb = a
}
B(W, ig);
o = W.prototype;
o.jb = k;
o.p = 0;
o.qa = 39;
o.Ed = 255;
o.Bh = 0;
o.fb = !0;
o.ka = k;
o.be = !0;
o.Oc = !1;
function Ig(a) {
  a.N && !1 != a.be && Jg(a, !1);
  a.be = !1
}
o.pb = function() {
  return this.v.pb(this)
};
function Kg(a, b) {
  if(b) {
    a.ka ? Ma(a.ka, b) || a.ka.push(b) : a.ka = [b], a.v.fc(a, b, !0)
  }
}
o.fc = function(a, b) {
  if(b) {
    Kg(this, a)
  }else {
    if(a && this.ka) {
      Na(this.ka, a);
      if(this.ka.length == 0) {
        this.ka = k
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
  this.Oc || this.v.Bc(a, !1);
  this.fb || this.v.De(a, !1)
};
o.nb = function() {
  return this.v.nb(this.d())
};
o.zb = function(a) {
  return this.v.zb(a)
};
o.ec = function(a) {
  this.t = a = this.v.Ra(this, a);
  var b = this.v.hc();
  if(b) {
    var c = a;
    c.setAttribute("role", b);
    c.sh = b
  }
  this.Oc || this.v.Bc(a, !1);
  this.fb = a.style.display != "none"
};
o.Ga = function() {
  W.a.Ga.call(this);
  this.v.Cf(this);
  if(this.qa & -2 && (this.be && Jg(this, !0), this.qa & 32)) {
    var a = this.pb();
    if(a) {
      var b = this.Jb || (this.Jb = new zg);
      Ag(b, a);
      T(T(T(ng(this), b, "key", this.Pg), a, "focus", this.Og), a, "blur", this.sf)
    }
  }
};
function Jg(a, b) {
  var c = ng(a), d = a.d();
  b ? (T(T(T(T(c, d, "mouseover", a.xf), d, "mousedown", a.vf), d, "mouseup", a.yf), d, "mouseout", a.wf), I && T(c, d, "dblclick", a.tf)) : (zf(zf(zf(zf(c, d, "mouseover", a.xf), d, "mousedown", a.vf), d, "mouseup", a.yf), d, "mouseout", a.wf), I && zf(c, d, "dblclick", a.tf))
}
o.lb = function() {
  W.a.lb.call(this);
  this.Jb && this.Jb.detach();
  this.fb && this.isEnabled() && this.v.Dc(this, !1)
};
o.b = function() {
  W.a.b.call(this);
  this.Jb && (this.Jb.h(), delete this.Jb);
  delete this.v;
  this.ka = this.jb = k
};
function vg(a, b) {
  a.jb = b
}
function Lg(a) {
  a = a.jb;
  if(!a) {
    return""
  }
  if(!u(a)) {
    if(t(a)) {
      a = Ia(a, Yc).join("")
    }else {
      if(Bc && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Zc(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      I || (a = a.replace(/ +/g, " "));
      a != " " && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
o.Wb = function(a) {
  W.a.Wb.call(this, a);
  var b = this.d();
  b && this.v.Wb(b, a)
};
o.Bc = function(a) {
  this.Oc = a;
  var b = this.d();
  b && this.v.Bc(b, a)
};
o.De = function(a, b) {
  if(b || this.fb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.d();
    c && this.v.De(c, a);
    this.isEnabled() && this.v.Dc(this, a);
    this.fb = a;
    return!0
  }
  return!1
};
o.isEnabled = function() {
  return!(this.p & 1)
};
o.Cc = function(a) {
  var b = this.getParent();
  if((!b || typeof b.isEnabled != "function" || b.isEnabled()) && Mg(this, 1, !a)) {
    a || (this.setActive(!1), Ng(this, !1)), this.fb && this.v.Dc(this, a), this.aa(1, !a)
  }
};
function Ng(a, b) {
  Mg(a, 2, b) && a.aa(2, b)
}
o.oc = function() {
  return!!(this.p & 4)
};
o.setActive = function(a) {
  Mg(this, 4, a) && this.aa(4, a)
};
o.aa = function(a, b) {
  if(this.qa & a && b != !!(this.p & a)) {
    this.v.aa(this, a, b), this.p = b ? this.p | a : this.p & ~a
  }
};
function Og(a) {
  a.N && a.p & 32 && e(Error("Component already rendered"));
  a.p & 32 && a.aa(32, !1);
  a.qa &= -33
}
function X(a, b) {
  return!!(a.Ed & b) && !!(a.qa & b)
}
function Mg(a, b, c) {
  return!!(a.qa & b) && !!(a.p & b) != c && (!(a.Bh & b) || a.dispatchEvent(kg(b, c))) && !a.Da
}
o.xf = function(a) {
  (!a.relatedTarget || !Pc(this.d(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && Ng(this, !0)
};
o.wf = function(a) {
  if((!a.relatedTarget || !Pc(this.d(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    X(this, 4) && this.setActive(!1), X(this, 2) && Ng(this, !1)
  }
};
o.vf = function(a) {
  if(this.isEnabled() && (X(this, 2) && Ng(this, !0), pd(a) && (!K || !hc || !a.ctrlKey))) {
    X(this, 4) && this.setActive(!0), this.v.Ef(this) && this.pb().focus()
  }
  !this.Oc && pd(a) && (!K || !hc || !a.ctrlKey) && a.preventDefault()
};
o.yf = function(a) {
  this.isEnabled() && (X(this, 2) && Ng(this, !0), this.oc() && this.uc(a) && X(this, 4) && this.setActive(!1))
};
o.tf = function(a) {
  this.isEnabled() && this.uc(a)
};
o.uc = function(a) {
  if(X(this, 16)) {
    var b = !(this.p & 16);
    Mg(this, 16, b) && this.aa(16, b)
  }
  X(this, 8) && Mg(this, 8, !0) && this.aa(8, !0);
  X(this, 64) && (b = !(this.p & 64), Mg(this, 64, b) && this.aa(64, b));
  b = new kd("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, f = 0;d = c[f];f++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
o.Og = function() {
  X(this, 32) && Mg(this, 32, !0) && this.aa(32, !0)
};
o.sf = function() {
  X(this, 4) && this.setActive(!1);
  X(this, 32) && Mg(this, 32, !1) && this.aa(32, !1)
};
o.Pg = function(a) {
  if(this.fb && this.isEnabled() && this.ae(a)) {
    return a.preventDefault(), a.stopPropagation(), !0
  }
  return!1
};
o.ae = function(a) {
  return a.keyCode == 13 && this.uc(a)
};
v(W) || e(Error("Invalid component class " + W));
v(rg) || e(Error("Invalid renderer class " + rg));
var Pg = w(W);
Hg[Pg] = rg;
Gg("goog-control", function() {
  return new W(k)
});
function Qg() {
}
B(Qg, yg);
fa(Qg);
o = Qg.prototype;
o.hc = function() {
};
o.q = function(a) {
  Ig(a);
  a.Ed &= -256;
  Og(a);
  return a.Ta().q("button", {"class":tg(this, a).join(" "), disabled:!a.isEnabled(), title:a.ic() || "", value:a.jc() || ""}, Lg(a) || "")
};
o.zb = function(a) {
  return a.tagName == "BUTTON" || a.tagName == "INPUT" && (a.type == "button" || a.type == "submit" || a.type == "reset")
};
o.Ra = function(a, b) {
  Ig(a);
  a.Ed &= -256;
  Og(a);
  b.disabled && Dc(b, xg(this, 1));
  return Qg.a.Ra.call(this, a, b)
};
o.Cf = function(a) {
  T(ng(a), a.d(), "click", a.uc)
};
o.Bc = s;
o.Wb = s;
o.Ef = function(a) {
  return a.isEnabled()
};
o.Dc = s;
o.aa = function(a, b, c) {
  Qg.a.aa.call(this, a, b, c);
  if((a = a.d()) && b == 1) {
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
function Rg(a, b, c) {
  W.call(this, a, b || Qg.Db(), c)
}
B(Rg, W);
o = Rg.prototype;
o.jc = m("Oe");
o.ud = function(a) {
  this.Oe = a;
  this.v.ud(this.d(), a)
};
o.ic = m("Ke");
o.Ce = function(a) {
  this.Ke = a;
  this.v.Ce(this.d(), a)
};
o.b = function() {
  Rg.a.b.call(this);
  delete this.Oe;
  delete this.Ke
};
o.Ga = function() {
  Rg.a.Ga.call(this);
  if(this.qa & 32) {
    var a = this.pb();
    a && T(ng(this), a, "keyup", this.ae)
  }
};
o.ae = function(a) {
  if(a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup") {
    return this.uc(a)
  }
  return a.keyCode == 32
};
Gg("goog-button", function() {
  return new Rg(k)
});
function Sg() {
}
B(Sg, yg);
fa(Sg);
o = Sg.prototype;
o.q = function(a) {
  var b = {"class":"goog-inline-block " + tg(this, a).join(" "), title:a.ic() || ""};
  return a.Ta().q("div", b, Tg(this, a.jb, a.Ta()))
};
o.hc = n("button");
o.nb = function(a) {
  return a && a.firstChild.firstChild
};
function Tg(a, b, c) {
  return c.q("div", "goog-inline-block " + (a.Z() + "-outer-box"), c.q("div", "goog-inline-block " + (a.Z() + "-inner-box"), b))
}
o.zb = function(a) {
  return a.tagName == "DIV"
};
o.Ra = function(a, b) {
  Ug(b, !0);
  Ug(b, !1);
  var c;
  a: {
    if((c = bd(a.Ta(), b)) && c.className.indexOf(this.Z() + "-outer-box") != -1) {
      if((c = bd(a.Ta(), c)) && c.className.indexOf(this.Z() + "-inner-box") != -1) {
        c = !0;
        break a
      }
    }
    c = !1
  }
  c || b.appendChild(Tg(this, b.childNodes, a.Ta()));
  Dc(b, "goog-inline-block", this.Z());
  return Sg.a.Ra.call(this, a, b)
};
o.Z = n("goog-custom-button");
function Ug(a, b) {
  if(a) {
    for(var c = b ? a.firstChild : a.lastChild, d;c && c.parentNode == a;) {
      d = b ? c.nextSibling : c.previousSibling;
      if(c.nodeType == 3) {
        var f = c.nodeValue;
        if(qa(f) == "") {
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
;function Vg(a, b, c) {
  Rg.call(this, a, b || Sg.Db(), c)
}
B(Vg, Rg);
Gg("goog-custom-button", function() {
  return new Vg(k)
});
var Wg = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Xg(a, b) {
  var c = a.match(Wg), d = b.match(Wg);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Yg(a, b) {
  var c;
  a instanceof Yg ? (this.Vb(b == k ? a.va : b), Zg(this, a.Na), $g(this, a.Kc), ah(this, a.Bb), bh(this, a.Sb), ch(this, a.Rb), dh(this, a.xa.L()), eh(this, a.gc)) : a && (c = String(a).match(Wg)) ? (this.Vb(!!b), Zg(this, c[1] || "", !0), $g(this, c[2] || "", !0), ah(this, c[3] || "", !0), bh(this, c[4]), ch(this, c[5] || "", !0), dh(this, c[6] || "", !0), eh(this, c[7] || "", !0)) : (this.Vb(!!b), this.xa = new fh(k, this, this.va))
}
o = Yg.prototype;
o.Na = "";
o.Kc = "";
o.Bb = "";
o.Sb = k;
o.Rb = "";
o.gc = "";
o.ah = !1;
o.va = !1;
o.toString = function() {
  if(this.sa) {
    return this.sa
  }
  var a = [];
  this.Na && a.push(gh(this.Na, hh), ":");
  if(this.Bb) {
    a.push("//");
    this.Kc && a.push(gh(this.Kc, hh), "@");
    var b;
    b = this.Bb;
    b = u(b) ? encodeURIComponent(b) : k;
    a.push(b);
    this.Sb != k && a.push(":", String(this.Sb))
  }
  this.Rb && (this.Bb && this.Rb.charAt(0) != "/" && a.push("/"), a.push(gh(this.Rb, ih)));
  (b = String(this.xa)) && a.push("?", b);
  this.gc && a.push("#", gh(this.gc, jh));
  return this.sa = a.join("")
};
o.L = function() {
  var a = this.Na, b = this.Kc, c = this.Bb, d = this.Sb, f = this.Rb, g = this.xa.L(), i = this.gc, j = new Yg(k, this.va);
  a && Zg(j, a);
  b && $g(j, b);
  c && ah(j, c);
  d && bh(j, d);
  f && ch(j, f);
  g && dh(j, g);
  i && eh(j, i);
  return j
};
function Zg(a, b, c) {
  kh(a);
  delete a.sa;
  a.Na = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.Na) {
    a.Na = a.Na.replace(/:$/, "")
  }
}
function $g(a, b, c) {
  kh(a);
  delete a.sa;
  a.Kc = c ? b ? decodeURIComponent(b) : "" : b
}
function ah(a, b, c) {
  kh(a);
  delete a.sa;
  a.Bb = c ? b ? decodeURIComponent(b) : "" : b
}
function bh(a, b) {
  kh(a);
  delete a.sa;
  b ? (b = Number(b), (isNaN(b) || b < 0) && e(Error("Bad port number " + b)), a.Sb = b) : a.Sb = k
}
function ch(a, b, c) {
  kh(a);
  delete a.sa;
  a.Rb = c ? b ? decodeURIComponent(b) : "" : b
}
function dh(a, b, c) {
  kh(a);
  delete a.sa;
  b instanceof fh ? (a.xa = b, a.xa.Ne = a, a.xa.Vb(a.va)) : (c || (b = gh(b, lh)), a.xa = new fh(b, a, a.va))
}
function eh(a, b, c) {
  kh(a);
  delete a.sa;
  a.gc = c ? b ? decodeURIComponent(b) : "" : b
}
function kh(a) {
  a.ah && e(Error("Tried to modify a read-only Uri"))
}
o.Vb = function(a) {
  this.va = a;
  this.xa && this.xa.Vb(a);
  return this
};
var mh = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function gh(a, b) {
  var c = k;
  u(a) && (c = a, mh.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, nh)));
  return c
}
function nh(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var hh = /[#\/\?@]/g, ih = /[\#\?]/g, lh = /[\#\?@]/g, jh = /#/g;
function fh(a, b, c) {
  this.Ea = a || k;
  this.Ne = b || k;
  this.va = !!c
}
function oh(a) {
  if(!a.s && (a.s = new ob, a.Ea)) {
    for(var b = a.Ea.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      d >= 0 ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = ph(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
o = fh.prototype;
o.s = k;
o.m = k;
o.B = function() {
  oh(this);
  return this.m
};
o.add = function(a, b) {
  oh(this);
  qh(this);
  a = ph(this, a);
  if(this.W(a)) {
    var c = this.s.get(a);
    t(c) ? c.push(b) : this.s.set(a, [c, b])
  }else {
    this.s.set(a, b)
  }
  this.m++;
  return this
};
o.remove = function(a) {
  oh(this);
  a = ph(this, a);
  if(this.s.W(a)) {
    qh(this);
    var b = this.s.get(a);
    t(b) ? this.m -= b.length : this.m--;
    return this.s.remove(a)
  }
  return!1
};
o.clear = function() {
  qh(this);
  this.s && this.s.clear();
  this.m = 0
};
o.sb = function() {
  oh(this);
  return this.m == 0
};
o.W = function(a) {
  oh(this);
  a = ph(this, a);
  return this.s.W(a)
};
o.dc = function(a) {
  var b = this.R();
  return Ma(b, a)
};
o.Ka = function() {
  oh(this);
  for(var a = this.s.R(), b = this.s.Ka(), c = [], d = 0;d < b.length;d++) {
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
o.R = function(a) {
  oh(this);
  if(a) {
    if(a = ph(this, a), this.W(a)) {
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
    for(var b = this.s.R(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      t(d) ? Qa(a, d) : a.push(d)
    }
  }
  return a
};
o.set = function(a, b) {
  oh(this);
  qh(this);
  a = ph(this, a);
  if(this.W(a)) {
    var c = this.s.get(a);
    t(c) ? this.m -= c.length : this.m--
  }
  this.s.set(a, b);
  this.m++;
  return this
};
o.get = function(a, b) {
  oh(this);
  a = ph(this, a);
  if(this.W(a)) {
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
    var f = c[d], g = sa(f), f = this.s.get(f);
    if(t(f)) {
      for(var i = 0;i < f.length;i++) {
        b > 0 && a.push("&"), a.push(g), f[i] !== "" && a.push("=", sa(f[i])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(g), f !== "" && a.push("=", sa(f)), b++
    }
  }
  return this.Ea = a.join("")
};
function qh(a) {
  delete a.Md;
  delete a.Ea;
  a.Ne && delete a.Ne.sa
}
o.L = function() {
  var a = new fh;
  if(this.Md) {
    a.Md = this.Md
  }
  if(this.Ea) {
    a.Ea = this.Ea
  }
  if(this.s) {
    a.s = this.s.L()
  }
  return a
};
function ph(a, b) {
  var c = String(b);
  a.va && (c = c.toLowerCase());
  return c
}
o.Vb = function(a) {
  a && !this.va && (oh(this), qh(this), hb(this.s, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.va = a
};
o.extend = function() {
  for(var a = 0;a < arguments.length;a++) {
    hb(arguments[a], function(a, c) {
      this.add(c, a)
    }, this)
  }
};
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function rh(a, b) {
  this.Pc = [];
  this.$h = a;
  this.Dg = b || k
}
o = rh.prototype;
o.Cb = !1;
o.Gb = !1;
o.tc = 0;
o.hg = !1;
o.zg = !1;
o.Xe = function(a, b) {
  this.Cb = !0;
  this.pd = b;
  this.Gb = !a;
  sh(this);
  this.tc--;
  this.tc == 0 && this.Cb && sh(this)
};
function th(a) {
  if(a.Cb) {
    a.hg || e(new uh(a)), a.hg = !1
  }
  a.Cb = !0;
  a.pd = k;
  a.Gb = !1;
  sh(a)
}
function vh(a, b) {
  wh(a, b, k, h)
}
function wh(a, b, c, d) {
  a.Pc.push([b, c, d]);
  a.Cb && sh(a)
}
function xh(a) {
  return Ja(a.Pc, function(a) {
    return v(a[1])
  })
}
function sh(a) {
  a.Me && a.Cb && xh(a) && (q.clearTimeout(a.Me), delete a.Me);
  for(var b = a.pd, c = !1, d = !1;a.Pc.length && a.tc == 0;) {
    var f = a.Pc.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.Gb ? i : g) {
      try {
        var j = g.call(f || a.Dg, b);
        if(da(j)) {
          a.Gb = a.Gb && (j == b || j instanceof Error), a.pd = b = j
        }
        b instanceof rh && (d = !0, a.tc++)
      }catch(l) {
        b = l, a.Gb = !0, xh(a) || (c = !0)
      }
    }
  }
  a.pd = b;
  if(d && a.tc) {
    wh(b, y(a.Xe, a, !0), y(a.Xe, a, !1)), b.zg = !0
  }
  if(c) {
    a.Me = q.setTimeout(function() {
      e(b)
    }, 0)
  }
}
function uh(a) {
  pa.call(this);
  this.ci = a
}
B(uh, pa);
uh.prototype.message = "Already called";
function yh(a) {
  this.V = a;
  this.Qd = [];
  this.nf = [];
  this.Zh = y(this.Fh, this)
}
yh.prototype.Eh = k;
yh.prototype.Fh = function() {
  this.Eh = k;
  var a = this.Qd;
  this.Qd = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], f = c[1], c = c[2];
    try {
      d.apply(f, c)
    }catch(g) {
      this.V.setTimeout(function() {
        e(g)
      }, 0)
    }
  }
  if(this.Qd.length == 0) {
    a = this.nf;
    this.nf = [];
    for(b = 0;b < a.length;b++) {
      th(a[b])
    }
  }
};
new yh(q.window);
function zh(a) {
  var a = a.split("|"), b = a.splice(0, 2);
  a.length > 0 && b.push(a.join("|"));
  return b
}
function Ah() {
  var a = Array.prototype.slice.call(arguments);
  return a.shift().replace(/\{(\d+)\}/g, function(b, c) {
    return a[c]
  })
}
function Bh() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ A()).toString(36)
}
function Dh(a) {
  return a.substr(0, a.length - 1)
}
var Eh = /^(0|[1-9]\d*)$/, Fh = /^(0|\-?[1-9]\d*)$/;
function Gh(a) {
  var b = Hh;
  if(Eh.test(a) && (a = parseInt(a, 10), a <= b)) {
    return a
  }
  return k
}
;function Ih() {
}
Ih.prototype.Ue = k;
function Jh(a) {
  var b;
  if(!(b = a.Ue)) {
    b = {}, Kh(a) && (b[0] = !0, b[1] = !0), b = a.Ue = b
  }
  return b
}
;function Lh() {
  return Mh(Nh)
}
var Nh;
function Oh() {
}
B(Oh, Ih);
function Mh(a) {
  return(a = Kh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
Oh.prototype.de = k;
function Kh(a) {
  if(!a.de && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.de = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.de
}
Nh = new Oh;
function Ph() {
  if(J) {
    this.kb = {}, this.zd = {}, this.wd = []
  }
}
Ph.prototype.i = G("goog.net.xhrMonitor");
Ph.prototype.ia = J;
Ph.prototype.Cc = function(a) {
  this.ia = J && a
};
function Qh(a) {
  var b = Rh;
  b.ia && b.wd.push(u(a) ? a : ja(a) ? w(a) : "")
}
function Sh() {
  var a = Rh;
  a.ia && Th(a, a.wd.pop())
}
function Uh(a) {
  var b = Rh;
  if(b.ia) {
    for(var a = w(a), c = 0;c < b.wd.length;c++) {
      var d = b.wd[c];
      Vh(b.kb, d, a);
      Vh(b.zd, a, d)
    }
  }
}
function Th(a, b) {
  var c = a.zd[b], d = a.kb[b];
  c && d && Ha(c, function(a) {
    Ha(d, function(b) {
      Vh(this.kb, a, b);
      Vh(this.zd, b, a)
    }, this)
  }, a)
}
function Vh(a, b, c) {
  a[b] || (a[b] = []);
  Ma(a[b], c) || a[b].push(c)
}
var Rh = new Ph;
function Wh(a) {
  N.call(this);
  this.headers = new ob;
  this.Ad = a || k
}
B(Wh, Sd);
Wh.prototype.i = G("goog.net.XhrIo");
var Xh = /^https?:?$/i;
o = Wh.prototype;
o.Oa = !1;
o.l = k;
o.yd = k;
o.gd = "";
o.bh = "";
o.qc = 0;
o.ed = "";
o.Pd = !1;
o.ad = !1;
o.ee = !1;
o.qb = !1;
o.Je = 0;
o.wb = k;
o.bg = "";
o.Gh = !1;
o.send = function(a, b, c, d) {
  this.l && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.gd = a;
  this.ed = "";
  this.qc = 0;
  this.bh = b;
  this.Pd = !1;
  this.Oa = !0;
  this.l = this.Ad ? Mh(this.Ad) : new Lh;
  this.yd = this.Ad ? Jh(this.Ad) : Jh(Nh);
  Uh(this.l);
  this.l.onreadystatechange = y(this.Sf, this);
  try {
    this.ee = !0, this.l.open(b, a, !0), this.ee = !1
  }catch(f) {
    Yh(this, f);
    return
  }
  var a = c || "", g = this.headers.L();
  d && hb(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.W("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  hb(g, function(a, b) {
    this.l.setRequestHeader(b, a)
  }, this);
  if(this.bg) {
    this.l.responseType = this.bg
  }
  if("withCredentials" in this.l) {
    this.l.withCredentials = this.Gh
  }
  try {
    if(this.wb) {
      Td.clearTimeout(this.wb), this.wb = k
    }
    if(this.Je > 0) {
      this.wb = Td.setTimeout(y(this.Dh, this), this.Je)
    }
    this.ad = !0;
    this.l.send(a);
    this.ad = !1
  }catch(i) {
    Yh(this, i)
  }
};
o.dispatchEvent = function(a) {
  if(this.l) {
    Qh(this.l);
    try {
      return Wh.a.dispatchEvent.call(this, a)
    }finally {
      Sh()
    }
  }else {
    return Wh.a.dispatchEvent.call(this, a)
  }
};
o.Dh = function() {
  if(typeof ba != "undefined" && this.l) {
    this.ed = "Timed out after " + this.Je + "ms, aborting", this.qc = 8, this.dispatchEvent("timeout"), this.abort(8)
  }
};
function Yh(a, b) {
  a.Oa = !1;
  if(a.l) {
    a.qb = !0, a.l.abort(), a.qb = !1
  }
  a.ed = b;
  a.qc = 5;
  Zh(a);
  $h(a)
}
function Zh(a) {
  if(!a.Pd) {
    a.Pd = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
o.abort = function(a) {
  if(this.l && this.Oa) {
    this.Oa = !1, this.qb = !0, this.l.abort(), this.qb = !1, this.qc = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), $h(this)
  }
};
o.b = function() {
  if(this.l) {
    if(this.Oa) {
      this.Oa = !1, this.qb = !0, this.l.abort(), this.qb = !1
    }
    $h(this, !0)
  }
  Wh.a.b.call(this)
};
o.Sf = function() {
  !this.ee && !this.ad && !this.qb ? this.jh() : ai(this)
};
o.jh = function() {
  ai(this)
};
function ai(a) {
  if(a.Oa && typeof ba != "undefined" && (!a.yd[1] || !(a.Ua() == 4 && bi(a) == 2))) {
    if(a.ad && a.Ua() == 4) {
      Td.setTimeout(y(a.Sf, a), 0)
    }else {
      if(a.dispatchEvent("readystatechange"), a.Ua() == 4) {
        a.Oa = !1;
        var b;
        a: {
          switch(bi(a)) {
            case 0:
              b = (b = u(a.gd) ? a.gd.match(Wg)[1] || k : a.gd.Na) ? Xh.test(b) : self.location ? Xh.test(self.location.protocol) : !0;
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
            c = a.Ua() > 2 ? a.l.statusText : ""
          }catch(d) {
            c = ""
          }
          a.ed = c + " [" + bi(a) + "]";
          Zh(a)
        }
        $h(a)
      }
    }
  }
}
function $h(a, b) {
  if(a.l) {
    var c = a.l, d = a.yd[0] ? s : k;
    a.l = k;
    a.yd = k;
    if(a.wb) {
      Td.clearTimeout(a.wb), a.wb = k
    }
    b || (Qh(c), a.dispatchEvent("ready"), Sh());
    var f = Rh;
    if(f.ia) {
      var g = w(c);
      delete f.zd[g];
      for(var i in f.kb) {
        Na(f.kb[i], g), f.kb[i].length == 0 && delete f.kb[i]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(j) {
      F(a.i, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
o.oc = function() {
  return!!this.l
};
o.Ua = function() {
  return this.l ? this.l.readyState : 0
};
function bi(a) {
  try {
    return a.Ua() > 2 ? a.l.status : -1
  }catch(b) {
    return Tb(a.i, "Can not get status: " + b.message), -1
  }
}
o.getResponseHeader = function(a) {
  return this.l && this.Ua() == 4 ? this.l.getResponseHeader(a) : h
};
function ci(a) {
  return v(a) || typeof a == "object" && v(a.call) && v(a.apply)
}
;function di(a, b, c) {
  var d = Ga(c, a);
  if(d != -1) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = ga(a);
    if(d == "boolean" || d == "number" || d == "null" || d == "undefined") {
      b.push(String(a))
    }else {
      if(d == "string") {
        eg(a, b)
      }else {
        if(ci(a.K)) {
          a.K(b, c)
        }else {
          if(ci(a.ug)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if(d == "array") {
                d = a.length;
                b.push("[");
                for(var f = "", g = 0;g < d;g++) {
                  b.push(f), di(a[g], b, c), f = ", "
                }
                b.push("]")
              }else {
                if(d == "object") {
                  if(ia(a) && typeof a.valueOf == "function") {
                    b.push("new Date(", String(a.valueOf()), ")")
                  }else {
                    for(var d = Xa(a).concat($a), f = {}, i = g = 0;i < d.length;) {
                      var j = d[i++], l = ja(j) ? "o" + w(j) : (typeof j).charAt(0) + j;
                      Object.prototype.hasOwnProperty.call(f, l) || (f[l] = !0, d[g++] = j)
                    }
                    d.length = g;
                    b.push("{");
                    f = "";
                    for(i = 0;i < d.length;i++) {
                      g = d[i], Object.prototype.hasOwnProperty.call(a, g) && (j = a[g], b.push(f), eg(g, b), b.push(": "), di(j, b, c), f = ", ")
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
function Y(a, b, c) {
  c || (c = []);
  di(a, b, c)
}
function Z(a) {
  var b = [];
  Y(a, b, h);
  return b.join("")
}
;function ei(a) {
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
;function fi(a, b) {
  this.xb = a;
  this.vb = b
}
fi.prototype.w = function(a) {
  return a instanceof fi && this.xb == a.xb && this.vb.join(",") == a.vb
};
fi.prototype.K = function(a, b) {
  a.push("new SACK(", String(this.xb), ", ");
  Y(this.vb, a, b);
  a.push(")")
};
function gi() {
  this.S = new ob
}
o = gi.prototype;
o.Ab = -1;
o.eb = 0;
o.append = function(a) {
  var b = ei(a);
  this.S.set(this.Ab + 1, [a, b]);
  this.Ab += 1;
  this.eb += b
};
o.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
o.K = function(a) {
  a.push("<Queue with ", String(this.S.B()), " item(s), counter=#", String(this.Ab), ", size=", String(this.eb), ">")
};
function hi(a) {
  pb(a.S);
  Ta(a.S.g);
  return a.S.g
}
function ii() {
  this.hb = new ob
}
ii.prototype.Kb = -1;
ii.prototype.eb = 0;
function ji(a) {
  var b = a.hb.Ka();
  Ta(b);
  return new fi(a.Kb, b)
}
var ki = {};
var Hh = Math.pow(2, 53);
function li(a, b, c) {
  N.call(this);
  this.ib = b;
  this.oa = a;
  this.Kd = c
}
B(li, N);
o = li.prototype;
o.i = G("cw.net.XHRMaster");
o.cb = -1;
o.pe = function(a, b, c) {
  this.Kd.__XHRSlave_makeRequest(this.oa, a, b, c)
};
o.Ua = m("cb");
o.te = function(a, b) {
  b != mi && F(this.i, Z(this.oa) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  ni(this.ib);
  a: {
    var c = this.ib;
    c.vd = !0;
    try {
      for(var d = !1, f = [], g = 0, i = a.length;g < i;g++) {
        if(c.Da) {
          c.i.info(c.ta() + " returning from loop because we're disposed.");
          break a
        }
        if(d = oi(c, a[g], f)) {
          break
        }
      }
      f.length && pi(c, f);
      c.vd = !1;
      c.J.length && c.Ia();
      d && c.h()
    }finally {
      c.vd = !1
    }
  }
};
o.ue = function(a) {
  var b = k;
  "Content-Length" in a && (b = Gh(a["Content-Length"]));
  a = this.ib;
  a.ya == qi && (b == k && (Tb(a.i, "Expected to receive a valid Content-Length, but did not."), b = 5E5), ri(a, 2E3 + b / 3072 * 1E3))
};
o.ve = function(a) {
  this.cb = a;
  this.cb >= 2 && ni(this.ib)
};
o.se = function() {
  this.ib.h()
};
o.b = function() {
  li.a.b.call(this);
  delete si.Ma[this.oa];
  this.Kd.__XHRSlave_dispose(this.oa);
  delete this.Kd
};
function ti() {
  N.call(this);
  this.Ma = {}
}
o = ti.prototype;
o.i = G("cw.net.XHRMasterTracker");
o.Ze = function(a, b) {
  var c = "_" + Bh(), d = new li(c, a, b);
  return this.Ma[c] = d
};
o.te = function(a, b, c) {
  var b = Oa(b), d = this.Ma[a];
  d ? d.te(b, c) : F(this.i, "onframes_: no master for " + Z(a))
};
o.ue = function(a, b) {
  var c = this.Ma[a];
  c ? c.ue(b) : F(this.i, "ongotheaders_: no master for " + Z(a))
};
o.ve = function(a, b) {
  var c = this.Ma[a];
  c ? c.ve(b) : F(this.i, "onreadystatechange_: no master for " + Z(a))
};
o.se = function(a) {
  var b = this.Ma[a];
  b ? (delete this.Ma[b.oa], b.se()) : F(this.i, "oncomplete_: no master for " + Z(a))
};
o.b = function() {
  ti.a.b.call(this);
  for(var a = Wa(this.Ma);a.length;) {
    a.pop().h()
  }
  delete this.Ma
};
var si = new ti;
q.__XHRMaster_onframes = y(si.te, si);
q.__XHRMaster_oncomplete = y(si.se, si);
q.__XHRMaster_ongotheaders = y(si.ue, si);
q.__XHRMaster_onreadystatechange = y(si.ve, si);
function ui() {
  vi.info("Waiting for XDRFrames (may take a while)...");
  var a = new rh, b = q.__XDRSetup.done.length, c;
  q.__XDRSetup.done = {push:function() {
    b += 1;
    c = 2 - b;
    c || (vi.info("Got XDRFrames after waiting."), th(a))
  }};
  c = 2 - b;
  c || (vi.info("Already had all XDRFrames."), th(a));
  return a
}
var vi = G("cw.net.waitForXDRFrames");
G("cw.net.FlashSocket");
G("cw.net.FlashSocketTracker");
function wi(a) {
  N.call(this);
  this.ib = a;
  this.Id = []
}
B(wi, N);
wi.prototype.i = G("cw.net.FlashSocketConduit");
wi.prototype.Se = function(a) {
  !this.Id ? this.Ee.Se(a) : this.Id.push.apply(this.Id, a)
};
wi.prototype.Ve = function(a, b) {
  this.Ee.Ve(a, b)
};
wi.prototype.b = function() {
  this.i.info("in disposeInternal.");
  wi.a.b.call(this);
  this.Ee.h();
  delete this.ib
};
var xi = {ug:n("<cw.eq.Wildcard>")};
function yi(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function zi(a, b, c) {
  var d = ga(a), f = ga(b);
  if(a == xi || b == xi) {
    return!0
  }else {
    if(a != k && typeof a.w == "function") {
      return c && c.push("running custom equals function on left object"), a.w(b, c)
    }else {
      if(b != k && typeof b.w == "function") {
        return c && c.push("running custom equals function on right object"), b.w(a, c)
      }else {
        if(yi(d) || yi(f)) {
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
                      if(!zi(a[d], b[d], c)) {
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
                if(a.tg == lf && b.tg == lf) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = !1;
                        break a
                      }
                      if(!zi(a[g], b[g], c)) {
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
function Ai() {
  var a = [];
  this.ja(a);
  return a.join("")
}
function Bi() {
}
Bi.prototype.w = function(a, b) {
  if(!(a instanceof Bi)) {
    return!1
  }
  return zi(Ci(this), Ci(a), b)
};
Bi.prototype.K = function(a, b) {
  a.push("<HelloFrame properties=");
  Y(Ci(this), a, b);
  a.push(">")
};
function Ci(a) {
  return[a.Zb, a.Wf, a.Af, a.$f, a.Ic, a.$e, a.Ie, a.Pf, a.Nf, a.qe, a.Lf, a.og, a.jg, a.pa, a.fd]
}
Bi.prototype.ea = Ai;
Bi.prototype.ja = function(a) {
  var b = {};
  b.tnum = this.Zb;
  b.ver = this.Wf;
  b.format = this.Af;
  b["new"] = this.$f;
  b.id = this.Ic;
  b.cred = this.$e;
  b.ming = this.Ie;
  b.pad = this.Pf;
  b.maxb = this.Nf;
  if(da(this.qe)) {
    b.maxt = this.qe
  }
  b.maxia = this.Lf;
  b.tcpack = this.og;
  b.eeds = this.jg;
  b.sack = this.pa instanceof fi ? Dh((new Di(this.pa)).ea()) : this.pa;
  b.seenack = this.fd instanceof fi ? Dh((new Di(this.fd)).ea()) : this.fd;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(cg(b), "H")
};
function Ei(a) {
  this.Yb = a
}
Ei.prototype.w = function(a) {
  return a instanceof Ei && this.Yb == a.Yb
};
Ei.prototype.K = function(a, b) {
  a.push("new StringFrame(");
  Y(this.Yb, a, b);
  a.push(")")
};
Ei.prototype.ea = Ai;
Ei.prototype.ja = function(a) {
  a.push(this.Yb, " ")
};
function Fi(a) {
  this.Rc = a
}
Fi.prototype.w = function(a) {
  return a instanceof Fi && this.Rc == a.Rc
};
Fi.prototype.K = function(a, b) {
  a.push("new CommentFrame(");
  Y(this.Rc, a, b);
  a.push(")")
};
Fi.prototype.ea = Ai;
Fi.prototype.ja = function(a) {
  a.push(this.Rc, "^")
};
function Gi(a) {
  this.Ac = a
}
Gi.prototype.w = function(a) {
  return a instanceof Gi && this.Ac == a.Ac
};
Gi.prototype.K = function(a) {
  a.push("new SeqNumFrame(", String(this.Ac), ")")
};
Gi.prototype.ea = Ai;
Gi.prototype.ja = function(a) {
  a.push(String(this.Ac), "N")
};
function Hi(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return k
  }
  a: {
    var c = b[1], a = Hh;
    if(Fh.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
      var g = Gh(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new fi(a, c)
}
function Di(a) {
  this.pa = a
}
Di.prototype.w = function(a, b) {
  return a instanceof Di && this.pa.w(a.pa, b)
};
Di.prototype.K = function(a, b) {
  a.push("new SackFrame(");
  Y(this.pa, a, b);
  a.push(")")
};
Di.prototype.ea = Ai;
Di.prototype.ja = function(a) {
  var b = this.pa;
  a.push(b.vb.join(","), "|", String(b.xb));
  a.push("A")
};
function Ii(a) {
  this.rc = a
}
Ii.prototype.w = function(a, b) {
  return a instanceof Ii && this.rc.w(a.rc, b)
};
Ii.prototype.K = function(a, b) {
  a.push("new StreamStatusFrame(");
  Y(this.rc, a, b);
  a.push(")")
};
Ii.prototype.ea = Ai;
Ii.prototype.ja = function(a) {
  var b = this.rc;
  a.push(b.vb.join(","), "|", String(b.xb));
  a.push("T")
};
function Ji() {
}
Ji.prototype.K = function(a) {
  a.push("new StreamCreatedFrame()")
};
Ji.prototype.w = function(a) {
  return a instanceof Ji
};
Ji.prototype.ea = Ai;
Ji.prototype.ja = function(a) {
  a.push("C")
};
function Ki() {
}
Ki.prototype.K = function(a) {
  a.push("new YouCloseItFrame()")
};
Ki.prototype.w = function(a) {
  return a instanceof Ki
};
Ki.prototype.ea = Ai;
Ki.prototype.ja = function(a) {
  a.push("Y")
};
function Li(a, b) {
  this.wc = a;
  this.ac = b
}
Li.prototype.w = function(a) {
  return a instanceof Li && this.wc == a.wc && this.ac == a.ac
};
Li.prototype.K = function(a, b) {
  a.push("new ResetFrame(");
  Y(this.wc, a, b);
  a.push(", ", String(this.ac), ")")
};
Li.prototype.ea = Ai;
Li.prototype.ja = function(a) {
  a.push(this.wc, "|", String(Number(this.ac)), "!")
};
var Mi = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Ni(a) {
  this.reason = a
}
Ni.prototype.w = function(a) {
  return a instanceof Ni && this.reason == a.reason
};
Ni.prototype.K = function(a, b) {
  a.push("new TransportKillFrame(");
  Y(this.reason, a, b);
  a.push(")")
};
Ni.prototype.ea = Ai;
Ni.prototype.ja = function(a) {
  a.push(this.reason, "K")
};
function Oi(a) {
  a || e(new $("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new Ei(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = Hi(Dh(a)), a == k && e(new $("bad sack")), new Di(a)
    }else {
      if(b == "N") {
        return a = Gh(Dh(a)), a == k && e(new $("bad seqNum")), new Gi(a)
      }else {
        if(b == "T") {
          return a = Hi(Dh(a)), a == k && e(new $("bad lastSackSeen")), new Ii(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && e(new $("leading garbage")), new Ki
          }else {
            if(b == "^") {
              return new Fi(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && e(new $("leading garbage")), new Ji
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && e(new $("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == k && e(new $("bad applicationLevel")), new Li(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = Mi[a], a == k && e(new $("unknown kill reason: " + a)), new Ni(a)
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
;function Pi(a, b, c, d) {
  this.md = a;
  this.Vf = b;
  this.rd = c;
  this.eg = d;
  (!(this.md.indexOf("http://") == 0 || this.md.indexOf("https://") == 0) || !(this.rd.indexOf("http://") == 0 || this.rd.indexOf("https://") == 0)) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Vf.location.href;
  Xg(this.md, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.eg.location.href;
  Xg(this.rd, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
var Qi = new Fi(";)]}");
function Ri(a, b, c, d) {
  N.call(this);
  this.Q = a;
  this.nh = b;
  this.Fa = c;
  this.ni = d;
  this.Jc = new tb;
  this.Ic = Bh() + Bh();
  this.bb = new gi;
  this.fe = new ii;
  this.Nc = k;
  if(K) {
    this.Nc = Ld(q, "load", this.qh, !1, this)
  }
}
B(Ri, Sd);
o = Ri.prototype;
o.i = G("cw.net.Stream");
o.Hf = new fi(-1, []);
o.If = new fi(-1, []);
o.fh = 50;
o.eh = 1048576;
o.Ge = !1;
o.ze = !1;
o.p = 1;
o.mg = -1;
o.o = k;
o.F = k;
o.xc = k;
o.He = 0;
o.Uf = 0;
o.dg = 0;
o.lh = !0;
o.K = function(a, b) {
  a.push("<Stream id=");
  Y(this.Ic, a, b);
  a.push(", state=", String(this.p));
  a.push(", primary=");
  Y(this.o, a, b);
  a.push(", secondary=");
  Y(this.F, a, b);
  a.push(", resetting=");
  Y(this.xc, a, b)
};
function Si(a) {
  var b = [-1];
  a.o && b.push(a.o.Pb);
  a.F && b.push(a.F.Pb);
  return Math.max.apply(Math.max, b)
}
function Ti(a) {
  if(a.p != 1) {
    var b = a.bb.S.B() != 0, c = ji(a.fe), d = !c.w(a.If) && !(a.o && c.w(a.o.Lb) || a.F && c.w(a.F.Lb)), f = Si(a);
    if((b = b && f < a.bb.Ab) || d) {
      if(a.o.bc) {
        if(d && (d = a.o, c != d.Lb)) {
          !d.ba && !d.J.length && Ui(d), d.J.push(new Di(c)), d.Lb = c
        }
        b && Vi(a.o, a.bb, f + 1);
        a.o.Ia()
      }else {
        if(a.F == k) {
          a.Ge ? (a.F = Wi(a, !1), b && Vi(a.F, a.bb, f + 1), a.F.Ia()) : a.ze = !0
        }
      }
    }
  }
}
o.qh = function() {
  this.Nc = k;
  if(this.o && this.o.Ib()) {
    this.i.info("restartHttpRequests_: aborting primary");
    var a = this.o;
    a.Bd = !0;
    a.h()
  }
  if(this.F && this.F.Ib()) {
    this.i.info("restartHttpRequests_: aborting secondary"), a = this.F, a.Bd = !0, a.h()
  }
};
function Xi(a, b) {
  a.p > 2 && e(Error("sendStrings: Can't send strings in state " + a.p));
  if(b.length) {
    if(a.lh) {
      for(var c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || e(Error("sendStrings: string #" + c + " has illegal chars: " + Z(d)))
      }
    }
    a.bb.extend(b);
    Ti(a)
  }
}
function Wi(a, b) {
  var c;
  a.Fa instanceof Pi ? (c = new Yg(document.location), c = (Boolean(Number(c.xa.get("httpStreaming", "0"))) ? 2 : 1) == 1 ? qi : Yi) : e(Error("Don't support endpoint " + Z(a.Fa)));
  a.mg += 1;
  c = new Zi(a.Q, a, a.mg, c, a.Fa, b);
  a.Jc.add(c);
  return c
}
function $i(a, b, c) {
  b = new aj(a.Q, a, b, c);
  a.Jc.add(b);
  return b
}
function bj(a, b) {
  a.Jc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  b.ld ? a.He += b.ld : a.He = 0;
  a.He >= 1 && (a.i.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), cj("stream penalty reached limit", !1), a.h());
  if(a.p > 2) {
    a.p == 3 && b.sg && a.h()
  }else {
    var c;
    var d;
    d = b instanceof aj;
    if(!d && b.Bd) {
      c = K ? We ? [0, 1] : [9, 20] : [0, 0], d = c[0], c = c[1]
    }else {
      c = b.We();
      var f;
      if(b == a.o) {
        if(c) {
          f = ++a.Uf
        }else {
          if(!d) {
            f = a.Uf = 0
          }
        }
      }else {
        if(c) {
          f = ++a.dg
        }else {
          if(!d) {
            f = a.dg = 0
          }
        }
      }
      c = d || !f ? d = 0 : (d = Math.max(0, 2E3 * Math.min(f, 3) + (Math.floor(Math.random() * 4E3) - 2E3) - Math.max(0, b.ng - b.Le))) ? 1 : 0
    }
    c = [d, c];
    d = c[0];
    c = c[1];
    if(b == a.o) {
      a.o = k, c ? a.o = $i(a, d, c) : (d = Si(a), a.o = Wi(a, !0), Vi(a.o, a.bb, d + 1)), a.o.Ia()
    }else {
      if(b == a.F) {
        a.F = k, c ? (a.F = $i(a, d, c), a.F.Ia()) : Ti(a)
      }
    }
  }
}
o.reset = function(a) {
  this.p > 2 && e(Error("reset: Can't send reset in state " + this.p));
  this.p = 3;
  this.o && this.o.bc ? (this.i.info("reset: Sending ResetFrame over existing primary."), dj(this.o, a), this.o.Ia()) : (this.o && this.o.h(), this.F && this.F.h(), this.i.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.xc = Wi(this, !1), dj(this.xc, a), this.xc.Ia());
  cj(a, !0)
};
function ej(a, b, c, d) {
  var f;
  f = a.fe;
  for(var g = a.fh, i = a.eh, j = [], l = !1, p = 0, x = c.length;p < x;p++) {
    var r = c[p], z = r[0], r = r[1];
    if(z == f.Kb + 1) {
      f.Kb += 1;
      for(j.push(r);;) {
        z = f.Kb + 1;
        r = f.hb.get(z, ki);
        if(r === ki) {
          break
        }
        j.push(r[0]);
        f.hb.remove(z);
        f.eb -= r[1];
        f.Kb = z
      }
    }else {
      if(!(z <= f.Kb)) {
        if(g != k && f.hb.B() >= g) {
          l = !0;
          break
        }
        var D = ei(r);
        if(i != k && f.eb + D > i) {
          l = !0;
          break
        }
        f.hb.set(z, [r, D]);
        f.eb += D
      }
    }
  }
  f.hb.sb() && f.hb.clear();
  f = [j, l];
  c = f[0];
  f = f[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      fj(c[g])
    }
  }
  a.p == 3 || a.Da || (d || Ti(a), f && a.p == 2 && (F(b.i, b.ta() + "'s peer caused rwin overflow."), b.h()))
}
o.start = function() {
  this.p = 2;
  this.o = Wi(this, !0);
  Vi(this.o, this.bb, k);
  this.o.Ia()
};
o.b = function() {
  this.i.info(Z(this) + " in disposeInternal.");
  this.p = 4;
  for(var a = this.Jc.R(), b = 0;b < a.length;b++) {
    a[b].h()
  }
  this.dispatchEvent({type:"c"});
  if(K && this.Nc) {
    R(this.Nc), this.Nc = k
  }
  delete this.Jc;
  delete this.o;
  delete this.F;
  delete this.xc;
  delete this.nh;
  Ri.a.b.call(this)
};
var qi = 1, Yi = 2, gj = 3;
function Zi(a, b, c, d, f, g) {
  N.call(this);
  this.Q = a;
  this.I = b;
  this.Zb = c;
  this.ya = d;
  this.Fa = f;
  this.J = [];
  this.yb = g;
  this.bc = !this.Ib();
  this.Ub = this.ya != qi;
  this.xg = y(this.Ch, this)
}
B(Zi, N);
o = Zi.prototype;
o.i = G("cw.net.ClientTransport");
o.z = k;
o.Le = k;
o.ng = k;
o.nd = k;
o.ba = !1;
o.vd = !1;
o.Lb = k;
o.Wd = 0;
o.Pb = -1;
o.we = -1;
o.sg = !1;
o.Bd = !1;
o.ld = 0;
o.kc = !1;
o.K = function(a) {
  a.push("<ClientTransport #", String(this.Zb), ", becomePrimary=", String(this.yb), ">")
};
o.ta = function() {
  return(this.yb ? "Prim. T#" : "Sec. T#") + this.Zb
};
o.We = function() {
  return!(!this.kc && this.Wd)
};
o.Ib = function() {
  return this.ya == qi || this.ya == Yi
};
function pi(a, b) {
  Ta(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  ej(a.I, a, b, !a.Ub)
}
function oi(a, b, c) {
  try {
    var d = Oi(b);
    a.Wd += 1;
    var f;
    a.Wd == 1 && !d.w(Qi) && a.Ib() ? (Tb(a.i, a.ta() + " is closing soon because got bad preamble: " + Z(d)), f = !0) : f = !1;
    if(f) {
      return!0
    }
    if(d instanceof Ei) {
      if(!/^([ -~]*)$/.test(d.Yb)) {
        return a.kc = !0
      }
      a.we += 1;
      c.push([a.we, d.Yb])
    }else {
      if(d instanceof Di) {
        var g = a.I, i = d.pa;
        g.Hf = i;
        var j = g.bb, l = i.xb, c = !1;
        l > j.Ab && (c = !0);
        for(var p = hi(j).concat(), d = 0;d < p.length;d++) {
          var x = p[d];
          if(x > l) {
            break
          }
          var r = j.S.r[x][1];
          j.S.remove(x);
          j.eb -= r
        }
        for(d = 0;d < i.vb.length;d++) {
          var z = i.vb[d];
          z > j.Ab && (c = !0);
          j.S.W(z) && (r = j.S.r[z][1], j.S.remove(z), j.eb -= r)
        }
        j.S.sb() && j.S.clear();
        if(c) {
          return Tb(a.i, a.ta() + " is closing soon because got bad SackFrame"), a.kc = !0
        }
      }else {
        if(d instanceof Gi) {
          a.we = d.Ac - 1
        }else {
          if(d instanceof Ii) {
            a.I.If = d.rc
          }else {
            if(d instanceof Ki) {
              return!0
            }else {
              if(d instanceof Ni) {
                return a.kc = !0, d.reason == "stream_attach_failure" ? a.ld += 1 : d.reason == "acked_unsent_strings" && (a.ld += 0.5), !0
              }else {
                if(!(d instanceof Fi)) {
                  if(d instanceof Ji) {
                    var D = a.I, zj = !a.Ub;
                    D.Ge = !0;
                    if(D.ze && !zj) {
                      D.ze = !1, Ti(D)
                    }
                  }else {
                    if(c.length) {
                      pi(a, c);
                      if(!t(c)) {
                        for(var cf = c.length - 1;cf >= 0;cf--) {
                          delete c[cf]
                        }
                      }
                      c.length = 0
                    }
                    if(d instanceof Li) {
                      var Aj = a.I;
                      cj(d.wc, d.ac);
                      Aj.h();
                      return!0
                    }else {
                      e(Error(a.ta() + " had unexpected state in framesReceived_."))
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }catch(Ch) {
    return Ch instanceof $ || e(Ch), Tb(a.i, a.ta() + " is closing soon because got InvalidFrame: " + Z(b)), a.kc = !0
  }
  return!1
}
o.Ch = function() {
  Tb(this.i, this.ta() + " timed out due to lack of connection or no data being received.");
  this.h()
};
function hj(a) {
  if(a.nd != k) {
    a.Q.V.clearTimeout(a.nd), a.nd = k
  }
}
function ri(a, b) {
  hj(a);
  b = Math.round(b);
  a.nd = a.Q.V.setTimeout(a.xg, b)
}
function ni(a) {
  a.ya != qi && (a.ya == gj || a.ya == Yi ? ri(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ya)))
}
function Ui(a) {
  var b = new Bi;
  b.Zb = a.Zb;
  b.Wf = 2;
  b.Af = 2;
  if(!a.I.Ge) {
    b.$f = !0;
    var c = ij.get(window.location.protocol == "https:" ? "_s" : "__");
    b.$e = (da(c) ? c : k) + "|" + q.CSRF_TOKEN
  }
  b.Ic = a.I.Ic;
  b.Ie = a.Ub;
  if(b.Ie) {
    b.Pf = 4096
  }
  b.Nf = 3E5;
  b.Lf = a.Ub ? Math.floor(10) : 0;
  b.og = !1;
  if(a.yb) {
    b.jg = k, b.qe = Math.floor((a.Ub ? 358E4 : 25E3) / 1E3)
  }
  b.pa = ji(a.I.fe);
  b.fd = a.I.Hf;
  a.J.push(b);
  a.Lb = b.pa
}
o.Ia = function() {
  this.ba && !this.bc && e(Error("flush_: Can't flush more than once to this transport."));
  if(!this.vd) {
    var a = this.ba;
    this.ba = !0;
    !a && !this.J.length && Ui(this);
    for(a = 0;a < this.J.length;a++) {
    }
    if(this.Ib()) {
      for(var a = [], b = 0, c = this.J.length;b < c;b++) {
        this.J[b].ja(a), a.push("\n")
      }
      this.J = [];
      a = a.join("");
      b = this.yb ? this.Fa.md : this.Fa.rd;
      this.z = si.Ze(this, this.yb ? this.Fa.Vf : this.Fa.eg);
      this.Le = this.Q.V === Td ? A() : this.Q.V.getTime();
      this.z.pe(b, "POST", a);
      ri(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.Ub ? 0 : this.yb ? 25E3 : 2))
    }else {
      if(this.ya == gj) {
        a = [];
        b = 0;
        for(c = this.J.length;b < c;b++) {
          a.push(this.J[b].ea())
        }
        this.J = [];
        this.z ? this.z.Se(a) : (b = this.Fa, this.z = new wi(this), this.z.Ee = b.oi.Ze(this.z), this.Le = this.Q.V === Td ? A() : this.Q.V.getTime(), this.z.Ve(b.host, b.port), this.z.Da || (this.z.Se(a), this.z.Da || ri(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.ya))
      }
    }
  }
};
function Vi(a, b, c) {
  !a.ba && !a.J.length && Ui(a);
  for(var d = Math.max(c, a.Pb + 1), f = hi(b), c = [], g = 0;g < f.length;g++) {
    var i = f[g];
    (d == k || i >= d) && c.push([i, b.S.r[i][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], f = g[0], g = g[1], (a.Pb == -1 || a.Pb + 1 != f) && a.J.push(new Gi(f)), a.J.push(new Ei(g)), a.Pb = f
  }
}
o.b = function() {
  this.i.info(this.ta() + " in disposeInternal.");
  Zi.a.b.call(this);
  this.ng = this.Q.V === Td ? A() : this.Q.V.getTime();
  this.J = [];
  hj(this);
  this.z && this.z.h();
  var a = this.I;
  this.I = k;
  bj(a, this)
};
function dj(a, b) {
  !a.ba && !a.J.length && Ui(a);
  a.J.push(new Li(b, !0));
  a.sg = !0
}
function aj(a, b, c, d) {
  N.call(this);
  this.Q = a;
  this.I = b;
  this.df = c;
  this.Ye = d
}
B(aj, N);
o = aj.prototype;
o.ba = !1;
o.bc = !1;
o.Zc = k;
o.Lb = k;
o.i = G("cw.net.DoNothingTransport");
function jj(a) {
  a.Zc = a.Q.V.setTimeout(function() {
    a.Zc = k;
    a.Ye--;
    a.Ye ? jj(a) : a.h()
  }, a.df)
}
o.Ia = function() {
  this.ba && !this.bc && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.ba = !0;
  jj(this)
};
o.K = function(a) {
  a.push("<DoNothingTransport delay=", String(this.df), ">")
};
o.Ib = n(!1);
o.ta = n("Wast. T");
o.We = n(!1);
o.b = function() {
  this.i.info(this.ta() + " in disposeInternal.");
  aj.a.b.call(this);
  this.Zc != k && this.Q.V.clearTimeout(this.Zc);
  var a = this.I;
  this.I = k;
  bj(a, this)
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
G("goog.ui.media.FlashObject");
q.__loadFlashObject_callbacks = {};
function kj(a) {
  this.Y = a
}
var lj = /\s*;\s*/;
o = kj.prototype;
o.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && K) {
    var b = "COOKIES_TEST_" + A();
    ij.set(b, "1");
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
  for(var c = a + "=", d = (this.ob() || "").split(lj), f = 0, g;g = d[f];f++) {
    if(g.indexOf(c) == 0) {
      return g.substr(c.length)
    }
  }
  return b
};
o.remove = function(a, b, c) {
  var d = this.W(a);
  this.set(a, "", 0, b, c);
  return d
};
o.Ka = function() {
  return mj(this).Gf
};
o.R = function() {
  return mj(this).pg
};
o.sb = function() {
  return!this.ob()
};
o.B = function() {
  if(!this.ob()) {
    return 0
  }
  return(this.ob() || "").split(lj).length
};
o.W = function(a) {
  return da(this.get(a))
};
o.dc = function(a) {
  for(var b = mj(this).pg, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return!0
    }
  }
  return!1
};
o.clear = function() {
  for(var a = mj(this).Gf, b = a.length - 1;b >= 0;b--) {
    this.remove(a[b])
  }
};
o.td = function(a) {
  this.Y.cookie = a
};
o.ob = function() {
  return this.Y.cookie
};
function mj(a) {
  for(var a = (a.ob() || "").split(lj), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), d == -1 ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{Gf:b, pg:c}
}
var ij = new kj(document);
ij.Sh = 3950;
var mi = 1;
function nj(a, b) {
  this.Ih = a;
  this.Mf = b
}
nj.prototype.le = 0;
nj.prototype.jd = 0;
nj.prototype.Ud = !1;
function oj(a) {
  var b = [];
  if(a.Ud) {
    return[b, 2]
  }
  var c = a.le, d = a.Ih.responseText;
  for(a.le = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var f = d.substr(a.jd, c - a.jd), f = f.replace(/\r$/, "");
    if(f.length > a.Mf) {
      return a.Ud = !0, [b, 2]
    }
    b.push(f);
    a.jd = c += 1
  }
  return a.le - a.jd - 1 > a.Mf ? (a.Ud = !0, [b, 2]) : [b, mi]
}
;var pj = !(I || K && !L("420+"));
function qj(a, b) {
  this.lg = a;
  this.oa = b
}
B(qj, N);
o = qj.prototype;
o.z = k;
o.cb = -1;
o.rf = !1;
o.zf = ["Content-Length", "Server", "Date", "Expires", "Keep-Alive", "Content-Type", "Transfer-Encoding", "Cache-Control"];
function rj(a) {
  var b = oj(a.cf), c = b[0], b = b[1], d = q.parent;
  d ? (d.__XHRMaster_onframes(a.oa, c, b), b != mi && a.h()) : a.h()
}
o.Wg = function() {
  rj(this);
  if(!this.Da) {
    var a = q.parent;
    a && a.__XHRMaster_oncomplete(this.oa);
    this.h()
  }
};
o.ph = function() {
  var a = q.parent;
  if(a) {
    this.cb = this.z.Ua();
    if(this.cb >= 2 && !this.rf) {
      for(var b = new ob, c = this.zf.length;c--;) {
        var d = this.zf[c];
        try {
          b.set(d, this.z.l.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.B() && (this.rf = !0, a.__XHRMaster_ongotheaders(this.oa, sb(b)), this.Da)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.oa, this.cb);
    pj && this.cb == 3 && rj(this)
  }else {
    this.h()
  }
};
o.pe = function(a, b, c) {
  this.z = new Wh;
  Q(this.z, "readystatechange", y(this.ph, this));
  Q(this.z, "complete", y(this.Wg, this));
  this.z.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.cf = new nj(this.z.l, 1048576)
};
o.b = function() {
  qj.a.b.call(this);
  delete this.cf;
  this.z && this.z.h();
  delete this.lg.Fc[this.oa];
  delete this.lg
};
function sj() {
  N.call(this);
  this.Fc = {}
}
B(sj, N);
sj.prototype.dh = function(a, b, c, d) {
  var f = new qj(this, a);
  this.Fc[a] = f;
  f.pe(b, c, d)
};
sj.prototype.Eg = function(a) {
  (a = this.Fc[a]) && a.h()
};
sj.prototype.b = function() {
  sj.a.b.call(this);
  for(var a = Wa(this.Fc);a.length;) {
    a.pop().h()
  }
  delete this.Fc
};
var tj = new sj;
q.__XHRSlave_makeRequest = y(tj.dh, tj);
q.__XHRSlave_dispose = y(tj.Eg, tj);
function uj() {
}
function vj() {
  new Yg(document.location);
  var a = ui();
  vh(a, function() {
    var a = Hc("xdrframe-1").contentWindow || Uc(Hc("xdrframe-1")).parentWindow || Uc(Hc("xdrframe-1")).defaultView, c = Hc("xdrframe-2").contentWindow || Uc(Hc("xdrframe-2")).parentWindow || Uc(Hc("xdrframe-2")).defaultView;
    a || e(Error("could not get primaryWindow xdrframe"));
    c || e(Error("could not get secondaryWindow xdrframe"));
    var d = new Yg(q.__XDRSetup.baseurl1);
    ch(d, "/httpface/");
    var f = new Yg(q.__XDRSetup.baseurl2);
    ch(f, "/httpface/");
    return new Pi(d.toString(), a, f.toString(), c)
  });
  return a
}
;var wj = G("forum.logger");
window.onerror = function(a, b, c) {
  F(wj, "window.onerror: message: " + Z(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function xj() {
}
function cj(a, b) {
  wj.info("streamReset: reasonString=" + Z(a) + ", applicationLevel=" + b);
  yj = k
}
function fj(a) {
  function b() {
    F(wj, "Could not handle string: " + Z(a))
  }
  var c = zh(a);
  if(c.length != 3) {
    b()
  }else {
    var d = c[1], f = c[2];
    c[0] != "TEXT" ? b() : wj.info(Ah("<{0}> {1}", d, f))
  }
}
xj.prototype.reset = function(a) {
  wj.info("resetting with reason: " + a);
  this.I.reset(a)
};
var yj = k, Bj = new yh(q.window);
function Cj() {
  yj && (yj.reset("idle timeout fired"), yj = k)
}
var Dj = k;
function Ej() {
  Dj != k && Bj.V.clearTimeout(Dj);
  yj && (Dj = Bj.V.setTimeout(Cj, 6E5))
}
Q(window, ["click", "focus", "keydown", "keypress"], Ej, !0);
function Fj() {
  var a = new uj;
  yj = new xj;
  Ej();
  vh(vj(), function(b) {
    yj || e(Error("lastProto falsy?"));
    b = new Ri(Bj, yj, b, a);
    yj.I = b;
    Xi(yj.I, ["subprotocol:forum"]);
    b.start();
    return k
  })
}
function Gj(a) {
  ig.call(this, a);
  this.field = k
}
B(Gj, ig);
Gj.prototype.ec = function(a) {
  Gj.a.ec.call(this, a);
  this.mf = Fc(a);
  this.of = lg(this) + ".field";
  var b = this.mf.q("DIV", {id:this.of});
  a.appendChild(b);
  a = new Vg("Submit");
  Kg(a, "forum-submit-button");
  b = this.G ? this.G.length : 0;
  a.N && e(Error("Component already rendered"));
  (b < 0 || b > (this.G ? this.G.length : 0)) && e(Error("Child component index out of bounds"));
  if(!this.U || !this.G) {
    this.U = {}, this.G = []
  }
  a.getParent() == this ? (this.U[lg(a)] = a, Na(this.G, a)) : Ya(this.U, lg(a), a);
  og(a, this);
  Ra(this.G, b, 0, a);
  if(a.N && this.N && a.getParent() == this) {
    var c = this.nb();
    c.insertBefore(a.d(), c.childNodes[b] || k)
  }else {
    this.t || this.q(), b = this.G ? this.G[b + 1] || k : k, pg(a, this.nb(), b ? b.t : k)
  }
};
Gj.prototype.q = function() {
  this.ec(this.Sa.createElement("div"))
};
Gj.prototype.Ga = function() {
  Gj.a.Ga.call(this);
  var a = this.field = new Cf(this.of, this.mf.ua());
  a.Nb = 1;
  var b = a.ma;
  a.nodeName = b.nodeName;
  a.uh = b.className;
  a.cssText = b.style.cssText;
  b.className += " editable";
  if(b = a.ma) {
    var b = b.innerHTML, c = {}, b = a.Yf(8, b, c), d = "padding:0;" + a.ma.style.cssText, f = d.length - 1;
    f >= 0 && d.indexOf(";", f) == f || (d += ";");
    d += "background-color:white;";
    I && (d += "overflow:visible;");
    d = a.Ob.q("IFRAME", {frameBorder:0, style:d});
    if($f(a)) {
      f = y(a.Bf, a, d, b, c), a.Vd = Q(d, "load", f, !0)
    }
    f = a.ma;
    d.className = f.className;
    d.id = f.id;
    var g = f.parentNode;
    g && g.replaceChild(d, f);
    $f(a) || a.Bf(d, b, c)
  }
};
Gj.prototype.lb = function() {
  var g;
  var a = this.field;
  a.Nb == If && e(Error("makeUneditable: Field is already uneditable"));
  a.Aa && Vd(a.Aa);
  Vd(a.Wc);
  Vd(a.Ae);
  a.execCommand("clearlorem");
  var b = k;
  if(a.d()) {
    if(a.queryCommandValue("usinglorem")) {
      b = "\u00a0"
    }else {
      if(a.ie()) {
        var b = a.d(), c = b.cloneNode(!1), b = b.innerHTML;
        I && b.match(/^\s*<script/i) && (b = "\u00a0" + b);
        c.innerHTML = b;
        a.$g(11, c);
        b = a.Yf(10, c.innerHTML)
      }else {
        (c = a.ma) || a.oe.log(Jb, "Couldn't get the field element to read the contents", h), b = c.innerHTML
      }
    }
  }
  ag(a);
  c = a.ma;
  Jf == c.id && (Jf = k);
  Of(a);
  if(u(b)) {
    c.innerHTML = b;
    b = a.ma;
    b.removeAttribute("contentEditable");
    b.removeAttribute("g_editable");
    a.id ? b.id = a.id : b.removeAttribute("id");
    b.className = a.uh || "";
    var d = a.cssText;
    d ? Jc(b, {style:d}) : b.removeAttribute("style");
    if(u(a.Tf)) {
      u("lineHeight") ? of(b, a.Tf, "lineHeight") : Va("lineHeight", oa(of, b)), a.Tf = k
    }
  }
  if(b = a.ma) {
    var f;
    g = a.Lc() && (f = a.da) ? (f = f.ga()) && f.frameElement : k, f = g;
    if(f) {
      (d = f.parentNode) && d.replaceChild(b, f)
    }
  }
  Nf(a);
  K && c.blur();
  a.execCommand("updatelorem");
  a.dispatchEvent("unload");
  Gj.a.lb.call(this)
};
function Hj() {
}
ca("__forum_init", function() {
  Xb().Ec(Ob);
  var a = new cd("main");
  a.Cc(!0);
  a.rb();
  wj.info("Logger works.");
  a = new Hj;
  a.Cg = new Gj;
  pg(a.Cg, Hc("forum-container"));
  Fj()
});
ca("__forum_sendText", function(a) {
  var b = yj;
  wj.info("sendText: " + a);
  Xi(b.I, ["broadcast:" + a])
});
})();
