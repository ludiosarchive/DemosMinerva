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
function p(a) {
  return function() {
    return a
  }
}
var r, ba = ba || {}, s = this;
function ca(a) {
  for(var a = a.split("."), b = s, c;c = a.shift();) {
    if(b[c] != k) {
      b = b[c]
    }else {
      return k
    }
  }
  return b
}
function t() {
}
function da(a) {
  a.Ta = function() {
    return a.of || (a.of = new a)
  }
}
function ea(a) {
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
function u(a) {
  return a !== h
}
function v(a) {
  return ea(a) == "array"
}
function fa(a) {
  var b = ea(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function ga(a) {
  return ha(a) && typeof a.getFullYear == "function"
}
function w(a) {
  return typeof a == "string"
}
function x(a) {
  return ea(a) == "function"
}
function ha(a) {
  a = ea(a);
  return a == "object" || a == "array" || a == "function"
}
function z(a) {
  return a[ia] || (a[ia] = ++ja)
}
var ia = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), ja = 0;
function ka(a) {
  return a.call.apply(a.bind, arguments)
}
function la(a, b) {
  var c = b || s;
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
function B() {
  B = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ka : la;
  return B.apply(k, arguments)
}
function ma(a) {
  var b = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = Array.prototype.slice.call(arguments);
    c.unshift.apply(c, b);
    return a.apply(this, c)
  }
}
var C = Date.now || function() {
  return+new Date
};
function D(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.c = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function na(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = String(a)
  }
}
D(na, Error);
na.prototype.name = "CustomError";
function oa(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
var pa = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function qa(a) {
  a = String(a);
  if(!pa.test(a)) {
    return encodeURIComponent(a)
  }
  return a
}
function ra(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function sa(a) {
  if(!ta.test(a)) {
    return a
  }
  a.indexOf("&") != -1 && (a = a.replace(ua, "&amp;"));
  a.indexOf("<") != -1 && (a = a.replace(va, "&lt;"));
  a.indexOf(">") != -1 && (a = a.replace(wa, "&gt;"));
  a.indexOf('"') != -1 && (a = a.replace(xa, "&quot;"));
  return a
}
var ua = /&/g, va = /</g, wa = />/g, xa = /\"/g, ta = /[&<>\"]/;
function ya(a) {
  return ra(a.replace(/  /g, " &#160;"), h)
}
function za(a, b) {
  for(var c = 0, d = oa(String(a)).split("."), f = oa(String(b)).split("."), g = Math.max(d.length, f.length), i = 0;c == 0 && i < g;i++) {
    var j = d[i] || "", n = f[i] || "", l = RegExp("(\\d*)(\\D*)", "g"), y = RegExp("(\\d*)(\\D*)", "g");
    do {
      var o = l.exec(j) || ["", "", ""], q = y.exec(n) || ["", "", ""];
      if(o[0].length == 0 && q[0].length == 0) {
        break
      }
      c = Aa(o[1].length == 0 ? 0 : parseInt(o[1], 10), q[1].length == 0 ? 0 : parseInt(q[1], 10)) || Aa(o[2].length == 0, q[2].length == 0) || Aa(o[2], q[2])
    }while(c == 0)
  }
  return c
}
function Aa(a, b) {
  if(a < b) {
    return-1
  }else {
    if(a > b) {
      return 1
    }
  }
  return 0
}
;var E = Array.prototype, Ba = E.indexOf ? function(a, b, c) {
  return E.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(w(a)) {
    if(!w(b) || b.length != 1) {
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
}, Ca = E.forEach ? function(a, b, c) {
  E.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
}, Da = E.map ? function(a, b, c) {
  return E.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = w(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in g && (f[i] = b.call(c, g[i], i, a))
  }
  return f
}, Ea = E.some ? function(a, b, c) {
  return E.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return!0
    }
  }
  return!1
}, Fa = E.every ? function(a, b, c) {
  return E.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && !b.call(c, f[g], g, a)) {
      return!1
    }
  }
  return!0
};
function Ga(a, b) {
  return Ba(a, b) >= 0
}
function Ha(a, b) {
  var c = Ba(a, b);
  c >= 0 && E.splice.call(a, c, 1)
}
function Ia() {
  return E.concat.apply(E, arguments)
}
function Ja(a) {
  if(v(a)) {
    return Ia(a)
  }else {
    for(var b = [], c = 0, d = a.length;c < d;c++) {
      b[c] = a[c]
    }
    return b
  }
}
function Ka(a) {
  for(var b = 1;b < arguments.length;b++) {
    var c = arguments[b], d;
    if(v(c) || (d = fa(c)) && c.hasOwnProperty("callee")) {
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
function La(a) {
  E.splice.apply(a, Ma(arguments, 1))
}
function Ma(a, b, c) {
  return arguments.length <= 2 ? E.slice.call(a, b) : E.slice.call(a, b, c)
}
function Na(a, b) {
  E.sort.call(a, b || Oa)
}
function Oa(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function Pa(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
function Qa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Ra(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Sa = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
function Ta(a) {
  for(var b, c, d = 1;d < arguments.length;d++) {
    c = arguments[d];
    for(b in c) {
      a[b] = c[b]
    }
    for(var f = 0;f < Sa.length;f++) {
      b = Sa[f], Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
    }
  }
}
function Ua() {
  var a = arguments.length;
  if(a == 1 && v(arguments[0])) {
    return Ua.apply(k, arguments[0])
  }
  a % 2 && e(Error("Uneven number of arguments"));
  for(var b = {}, c = 0;c < a;c += 2) {
    b[arguments[c]] = arguments[c + 1]
  }
  return b
}
;function Va(a) {
  if(typeof a.r == "function") {
    return a.r()
  }
  if(fa(a) || w(a)) {
    return a.length
  }
  var b = 0, c;
  for(c in a) {
    b++
  }
  return b
}
function Wa(a) {
  if(typeof a.D == "function") {
    return a.D()
  }
  if(w(a)) {
    return a.split("")
  }
  if(fa(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Qa(a)
}
function Xa(a) {
  if(typeof a.fa == "function") {
    return a.fa()
  }
  if(typeof a.D != "function") {
    if(fa(a) || w(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return Ra(a)
  }
}
function Ya(a, b) {
  if(typeof a.contains == "function") {
    return a.contains(b)
  }
  if(typeof a.qb == "function") {
    return a.qb(b)
  }
  if(fa(a) || w(a)) {
    return Ga(a, b)
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
function Za(a, b, c) {
  if(typeof a.forEach == "function") {
    a.forEach(b, c)
  }else {
    if(fa(a) || w(a)) {
      Ca(a, b, c)
    }else {
      for(var d = Xa(a), f = Wa(a), g = f.length, i = 0;i < g;i++) {
        b.call(c, f[i], d && d[i], a)
      }
    }
  }
}
function $a(a, b) {
  if(typeof a.every == "function") {
    return a.every(b, h)
  }
  if(fa(a) || w(a)) {
    return Fa(a, b, h)
  }
  for(var c = Xa(a), d = Wa(a), f = d.length, g = 0;g < f;g++) {
    if(!b.call(h, d[g], c && c[g], a)) {
      return!1
    }
  }
  return!0
}
;function ab(a) {
  this.m = {};
  this.b = [];
  var b = arguments.length;
  if(b > 1) {
    b % 2 && e(Error("Uneven number of arguments"));
    for(var c = 0;c < b;c += 2) {
      this.set(arguments[c], arguments[c + 1])
    }
  }else {
    a && this.Dc(a)
  }
}
r = ab.prototype;
r.f = 0;
r.xd = 0;
r.r = m("f");
r.D = function() {
  bb(this);
  for(var a = [], b = 0;b < this.b.length;b++) {
    a.push(this.m[this.b[b]])
  }
  return a
};
r.fa = function() {
  bb(this);
  return this.b.concat()
};
r.I = function(a) {
  return cb(this.m, a)
};
r.qb = function(a) {
  for(var b = 0;b < this.b.length;b++) {
    var c = this.b[b];
    if(cb(this.m, c) && this.m[c] == a) {
      return!0
    }
  }
  return!1
};
r.k = function(a, b) {
  if(this === a) {
    return!0
  }
  if(this.f != a.r()) {
    return!1
  }
  var c = b || db;
  bb(this);
  for(var d, f = 0;d = this.b[f];f++) {
    if(!c(this.get(d), a.get(d))) {
      return!1
    }
  }
  return!0
};
function db(a, b) {
  return a === b
}
r.ra = function() {
  return this.f == 0
};
r.clear = function() {
  this.m = {};
  this.xd = this.f = this.b.length = 0
};
r.remove = function(a) {
  if(cb(this.m, a)) {
    return delete this.m[a], this.f--, this.xd++, this.b.length > 2 * this.f && bb(this), !0
  }
  return!1
};
function bb(a) {
  if(a.f != a.b.length) {
    for(var b = 0, c = 0;b < a.b.length;) {
      var d = a.b[b];
      cb(a.m, d) && (a.b[c++] = d);
      b++
    }
    a.b.length = c
  }
  if(a.f != a.b.length) {
    for(var f = {}, c = b = 0;b < a.b.length;) {
      d = a.b[b], cb(f, d) || (a.b[c++] = d, f[d] = 1), b++
    }
    a.b.length = c
  }
}
r.get = function(a, b) {
  if(cb(this.m, a)) {
    return this.m[a]
  }
  return b
};
r.set = function(a, b) {
  cb(this.m, a) || (this.f++, this.b.push(a), this.xd++);
  this.m[a] = b
};
r.Dc = function(a) {
  var b;
  a instanceof ab ? (b = a.fa(), a = a.D()) : (b = Ra(a), a = Qa(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
r.M = function() {
  return new ab(this)
};
function eb(a) {
  bb(a);
  for(var b = {}, c = 0;c < a.b.length;c++) {
    var d = a.b[c];
    b[d] = a.m[d]
  }
  return b
}
function cb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function fb(a) {
  this.m = new ab;
  a && this.Dc(a)
}
function gb(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + z(a) : b.substr(0, 1) + a
}
r = fb.prototype;
r.r = function() {
  return this.m.r()
};
r.add = function(a) {
  this.m.set(gb(a), a)
};
r.Dc = function(a) {
  for(var a = Wa(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
r.kd = function(a) {
  for(var a = Wa(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
r.remove = function(a) {
  return this.m.remove(gb(a))
};
r.clear = function() {
  this.m.clear()
};
r.ra = function() {
  return this.m.ra()
};
r.contains = function(a) {
  return this.m.I(gb(a))
};
r.D = function() {
  return this.m.D()
};
r.M = function() {
  return new fb(this)
};
r.k = function(a) {
  return this.r() == Va(a) && hb(this, a)
};
function hb(a, b) {
  var c = Va(b);
  if(a.r() > c) {
    return!1
  }
  !(b instanceof fb) && c > 5 && (b = new fb(b));
  return $a(a, function(a) {
    return Ya(b, a)
  })
}
;function ib(a) {
  return jb(a || arguments.callee.caller, [])
}
function jb(a, b) {
  var c = [];
  if(Ga(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(kb(a) + "(");
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
            g = (g = kb(g)) ? g : "[fn]";
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
        c.push(jb(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function kb(a) {
  a = String(a);
  if(!lb[a]) {
    var b = /function ([^\(]+)/.exec(a);
    lb[a] = b ? b[1] : "[Anonymous]"
  }
  return lb[a]
}
var lb = {};
function mb() {
  this.Be = C()
}
var nb = new mb;
mb.prototype.set = aa("Be");
mb.prototype.reset = function() {
  this.set(C())
};
mb.prototype.get = m("Be");
function ob(a) {
  this.jd = a || "";
  this.Jf = nb
}
ob.prototype.Ff = !0;
ob.prototype.Hf = !0;
ob.prototype.Gf = !0;
ob.prototype.He = !1;
function pb(a) {
  if(a < 10) {
    return"0" + a
  }
  return String(a)
}
function qb(a, b) {
  var c = (a.Ke - b) / 1E3, d = c.toFixed(3), f = 0;
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
function rb(a) {
  ob.call(this, a)
}
D(rb, ob);
rb.prototype.He = !0;
function sb(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
sb.prototype.Ef = 0;
sb.prototype.Oc = k;
sb.prototype.Nc = k;
var tb = 0;
sb.prototype.reset = function(a, b, c, d, f) {
  this.Ef = typeof f == "number" ? f : tb++;
  this.Ke = d || C();
  this.ga = a;
  this.pe = b;
  this.je = c;
  delete this.Oc;
  delete this.Nc
};
sb.prototype.Nb = aa("ga");
function ub(a) {
  this.cd = a
}
ub.prototype.K = k;
ub.prototype.ga = k;
ub.prototype.ma = k;
ub.prototype.zb = k;
function F(a, b) {
  this.name = a;
  this.value = b
}
F.prototype.toString = m("name");
var vb = new F("SHOUT", 1200), wb = new F("SEVERE", 1E3), xb = new F("WARNING", 900), yb = new F("INFO", 800), zb = new F("CONFIG", 700), Ab = new F("ALL", 0), Bb = [new F("OFF", Infinity), vb, wb, xb, yb, zb, new F("FINE", 500), new F("FINER", 400), new F("FINEST", 300), Ab], Cb = k;
function Db(a) {
  if(!Cb) {
    Cb = {};
    for(var b = 0, c;c = Bb[b];b++) {
      Cb[c.value] = c, Cb[c.name] = c
    }
  }
  return Cb[a] || k
}
r = ub.prototype;
r.getParent = m("K");
r.Nb = aa("ga");
function Eb(a) {
  if(a.ga) {
    return a.ga
  }
  if(a.K) {
    return Eb(a.K)
  }
  return k
}
r.log = function(a, b, c) {
  if(a.value >= Eb(this).value) {
    a = this.gf(a, b, c);
    s.console && s.console.markTimeline && s.console.markTimeline("log:" + a.pe);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.zb) {
        for(var f = 0, g = h;g = c.zb[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
r.gf = function(a, b, c) {
  var d = new sb(a, String(b), this.cd);
  if(c) {
    d.Oc = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var i;
      var j = ca("window.location.href");
      if(w(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var n, l, y = !1;
        try {
          n = c.lineNumber || c.ag || "Not available"
        }catch(o) {
          n = "Not available", y = !0
        }
        try {
          l = c.fileName || c.filename || c.sourceURL || j
        }catch(q) {
          l = "Not available", y = !0
        }
        i = y || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:l, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + sa(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + sa(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + sa(ib(g) + "-> ")
    }catch(A) {
      f = "Exception trying to expose exception! You win, we lose. " + A
    }
    d.Nc = f
  }
  return d
};
function Fb(a, b) {
  a.log(wb, b, h)
}
function Gb(a, b) {
  a.log(xb, b, h)
}
r.info = function(a, b) {
  this.log(yb, a, b)
};
var Hb = {}, Ib = k;
function Jb() {
  Ib || (Ib = new ub(""), Hb[""] = Ib, Ib.Nb(zb))
}
function Kb() {
  Jb();
  return Ib
}
function G(a) {
  Jb();
  var b;
  if(!(b = Hb[a])) {
    b = new ub(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = G(a.substr(0, c));
    if(!c.ma) {
      c.ma = {}
    }
    c.ma[d] = b;
    b.K = c;
    Hb[a] = b
  }
  return b
}
;function Lb(a) {
  this.bd = a || 100;
  this.la = []
}
r = Lb.prototype;
r.Cb = 0;
r.add = function(a) {
  this.la[this.Cb] = a;
  this.Cb = (this.Cb + 1) % this.bd
};
r.get = function(a) {
  a = Mb(this, a);
  return this.la[a]
};
r.set = function(a, b) {
  a = Mb(this, a);
  this.la[a] = b
};
r.r = function() {
  return this.la.length
};
r.ra = function() {
  return this.la.length == 0
};
r.clear = function() {
  this.Cb = this.la.length = 0
};
r.D = function() {
  for(var a = this.r(), b = this.r(), c = [], a = this.r() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
r.fa = function() {
  for(var a = [], b = this.r(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
r.I = function(a) {
  return a < this.r()
};
r.qb = function(a) {
  for(var b = this.r(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return!0
    }
  }
  return!1
};
function Mb(a, b) {
  b >= a.la.length && e(Error("Out of bounds exception"));
  if(a.la.length < a.bd) {
    return b
  }
  return(a.Cb + Number(b)) % a.bd
}
;var Nb, Ob, Pb, Qb, Rb;
function Sb() {
  return s.navigator ? s.navigator.userAgent : k
}
Rb = Qb = Pb = Ob = Nb = !1;
var Tb;
if(Tb = Sb()) {
  var Ub = s.navigator;
  Nb = Tb.indexOf("Opera") == 0;
  Ob = !Nb && Tb.indexOf("MSIE") != -1;
  Qb = (Pb = !Nb && Tb.indexOf("WebKit") != -1) && Tb.indexOf("Mobile") != -1;
  Rb = !Nb && !Pb && Ub.product == "Gecko"
}
var Vb = Nb, H = Ob, Wb = Rb, I = Pb, Xb = Qb, Yb = s.navigator, Zb = (Yb && Yb.platform || "").indexOf("Mac") != -1, $b;
a: {
  var ac = "", bc;
  if(Vb && s.opera) {
    var cc = s.opera.version, ac = typeof cc == "function" ? cc() : cc
  }else {
    if(Wb ? bc = /rv\:([^\);]+)(\)|;)/ : H ? bc = /MSIE\s+([^\);]+)(\)|;)/ : I && (bc = /WebKit\/(\S+)/), bc) {
      var dc = bc.exec(Sb()), ac = dc ? dc[1] : ""
    }
  }
  if(H) {
    var ec, fc = s.document;
    ec = fc ? fc.documentMode : h;
    if(ec > parseFloat(ac)) {
      $b = String(ec);
      break a
    }
  }
  $b = ac
}
var gc = {};
function J(a) {
  return gc[a] || (gc[a] = za($b, a) >= 0)
}
;function hc(a, b) {
  this.qa = a || "";
  this.jd = b || "";
  this.cb = [];
  this.sc = new Lb(ic);
  this.Af = B(this.We, this);
  this.ff = new rb(this.jd);
  this.ef = {};
  if(!0 != this.de) {
    this.de = !0;
    var c = Kb(), d = this.Af;
    if(!c.zb) {
      c.zb = []
    }
    c.zb.push(d)
  }
  this.O = jc(this.qa, "enabled") == "1";
  s.setInterval(B(this.Df, this), 7500)
}
var ic = 500;
r = hc.prototype;
r.Se = "LOGGING";
r.cf = !1;
r.s = k;
r.yd = !1;
r.de = !1;
r.Cd = k;
r.Yc = C();
r.Ga = function() {
  this.O && kc(this)
};
r.isEnabled = m("O");
r.Lb = function(a) {
  if(this.O = a) {
    kc(this), this.s && this.zc()
  }
  this.vc("enabled", a ? "1" : "0")
};
function lc(a) {
  return!!a.s && !a.s.closed
}
r.Ze = function() {
  this.sc.clear();
  lc(this) && this.zc()
};
r.We = function(a) {
  if(!this.ef[a.je]) {
    var b = this.ff, c;
    switch(a.ga.value) {
      case vb.value:
        c = "dbg-sh";
        break;
      case wb.value:
        c = "dbg-sev";
        break;
      case xb.value:
        c = "dbg-w";
        break;
      case yb.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.jd, " ");
    if(b.Ff) {
      var f = new Date(a.Ke);
      d.push("[", pb(f.getFullYear() - 2E3) + pb(f.getMonth() + 1) + pb(f.getDate()) + " " + pb(f.getHours()) + ":" + pb(f.getMinutes()) + ":" + pb(f.getSeconds()) + "." + pb(Math.floor(f.getMilliseconds() / 10)), "] ")
    }
    b.Hf && d.push("[", ya(qb(a, b.Jf.get())), "s] ");
    b.Gf && d.push("[", sa(a.je), "] ");
    d.push('<span class="', c, '">', ra(ya(sa(a.pe))));
    b.He && a.Oc && d.push("<br>", ra(ya(a.Nc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.O ? (kc(this), this.sc.add(b), mc(this, b)) : this.sc.add(b);
    this.cf && a.ga.value >= wb.value && this.Lb(!0)
  }
};
function mc(a, b) {
  a.cb.push(b);
  s.clearTimeout(a.Cd);
  C() - a.Yc > 750 ? a.zd() : a.Cd = s.setTimeout(B(a.zd, a), 250)
}
r.zd = function() {
  this.Yc = C();
  if(lc(this)) {
    var a = this.s.document.body, a = a && a.scrollHeight - (a.scrollTop + a.clientHeight) <= 100;
    this.s.document.write(this.cb.join(""));
    this.cb.length = 0;
    a && this.s.scrollTo(0, 1E6)
  }
};
function nc(a) {
  for(var b = a.sc.D(), c = 0;c < b.length;c++) {
    mc(a, b[c])
  }
}
function kc(a) {
  if(!lc(a) && !a.yd) {
    var b = a.Da("dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), f = Number(b[2]), b = Number(b[3]);
    a.yd = !0;
    a.s = window.open("", H ? a.qa.replace(/[\s\-\.\,]/g, "_") : a.qa, "width=" + f + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    if(!a.s && !a.If) {
      alert("Logger popup was blocked"), a.If = !0
    }
    a.yd = !1;
    a.s && a.zc()
  }
}
r.ac = p("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
r.zc = function() {
  lc(this) || (this.s.document.open(), mc(this, "<style>" + this.ac() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.Se + "<br><small>Logger: " + this.qa + "</small></div><hr>"), nc(this))
};
r.vc = function(a, b) {
  a += this.qa;
  document.cookie = a + "=" + encodeURIComponent(b) + ";path=/;expires=" + (new Date(C() + 2592E6)).toUTCString()
};
r.Da = function(a, b) {
  return jc(this.qa, a, b)
};
function jc(a, b, c) {
  var a = b + a, b = String(document.cookie), d = b.indexOf(a + "=");
  return d != -1 ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, c == -1 ? b.length : c))) : c || ""
}
r.Df = function() {
  lc(this) && this.vc("dbg", (this.s.screenX || this.s.screenLeft || 0) + "," + (this.s.screenY || this.s.screenTop || 0) + "," + (this.s.outerWidth || 800) + "," + (this.s.outerHeight || 500))
};
var oc, pc = !H || J("9");
!Wb && !H || H && J("9") || Wb && J("1.9.1");
var qc = H && !J("9");
function rc(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function sc(a) {
  var b = rc(a), c = Ma(arguments, 1), d;
  d = b;
  for(var f = 0, g = 0;g < c.length;g++) {
    Ga(d, c[g]) || (d.push(c[g]), f++)
  }
  d = f == c.length;
  a.className = b.join(" ");
  return d
}
function tc(a) {
  var b = rc(a), c = Ma(arguments, 1), d;
  d = b;
  for(var f = 0, g = 0;g < d.length;g++) {
    Ga(c, d[g]) && (La(d, g--, 1), f++)
  }
  d = f == c.length;
  a.className = b.join(" ");
  return d
}
;function uc(a, b) {
  this.x = u(a) ? a : 0;
  this.y = u(b) ? b : 0
}
uc.prototype.M = function() {
  return new uc(this.x, this.y)
};
uc.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function vc(a, b) {
  this.width = a;
  this.height = b
}
r = vc.prototype;
r.M = function() {
  return new vc(this.width, this.height)
};
r.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
r.ra = function() {
  return!(this.width * this.height)
};
r.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
r.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
function wc(a) {
  return a ? new xc(yc(a)) : oc || (oc = new xc)
}
function K(a) {
  return w(a) ? document.getElementById(a) : a
}
function zc(a, b) {
  Pa(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in Ac ? a.setAttribute(Ac[d], b) : a[d] = b
  })
}
var Ac = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Bc() {
  var a = Cc.B.parentWindow || Cc.B.defaultView || window, b = a.document;
  if(I && !J("500") && !Xb) {
    typeof a.innerHeight == "undefined" && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new vc(a.innerWidth, b)
  }
  a = b.compatMode == "CSS1Compat" ? b.documentElement : b.body;
  return new vc(a.clientWidth, a.clientHeight)
}
function Dc() {
  return Ec(document, arguments)
}
function Ec(a, b) {
  var c = b[0], d = b[1];
  if(!pc && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', sa(d.name), '"');
    if(d.type) {
      c.push(' type="', sa(d.type), '"');
      var f = {};
      Ta(f, d);
      d = f;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  if(d) {
    w(d) ? c.className = d : v(d) ? sc.apply(k, [c].concat(d)) : zc(c, d)
  }
  b.length > 2 && Fc(a, c, b, 2);
  return c
}
function Fc(a, b, c, d) {
  function f(c) {
    c && b.appendChild(w(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    fa(g) && !(ha(g) && g.nodeType > 0) ? Ca(Gc(g) ? Ja(g) : g, f) : f(g)
  }
}
function Hc(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Ic(a, b) {
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
function yc(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
var Jc = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Kc = {IMG:" ", BR:"\n"};
function Lc(a) {
  var b = a.getAttributeNode("tabindex");
  if(b && b.specified) {
    return a = a.tabIndex, typeof a == "number" && a >= 0
  }
  return!1
}
function Mc(a) {
  var b = [];
  Nc(a, b, !1);
  return b.join("")
}
function Nc(a, b, c) {
  if(!(a.nodeName in Jc)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Kc) {
        b.push(Kc[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Nc(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Gc(a) {
  if(a && typeof a.length == "number") {
    if(ha(a)) {
      return typeof a.item == "function" || typeof a.item == "string"
    }else {
      if(x(a)) {
        return typeof a.item == "function"
      }
    }
  }
  return!1
}
function xc(a) {
  this.B = a || s.document || document
}
r = xc.prototype;
r.xb = wc;
r.h = function(a) {
  return w(a) ? this.B.getElementById(a) : a
};
r.q = function() {
  return Ec(this.B, arguments)
};
r.createElement = function(a) {
  return this.B.createElement(a)
};
r.createTextNode = function(a) {
  return this.B.createTextNode(a)
};
r.appendChild = function(a, b) {
  a.appendChild(b)
};
r.append = function(a) {
  Fc(yc(a), a, arguments, 1)
};
r.contains = Ic;
function Oc(a, b) {
  hc.call(this, a, b)
}
D(Oc, hc);
r = Oc.prototype;
r.zd = function() {
  this.Yc = C();
  if(lc(this)) {
    for(var a = this.J.h("log"), b = a.scrollHeight - (a.scrollTop + a.offsetHeight) <= 100, c = 0;c < this.cb.length;c++) {
      var d = this.J.q("div", "logmsg");
      d.innerHTML = this.cb[c];
      a.appendChild(d)
    }
    this.cb.length = 0;
    this.De();
    if(b) {
      a.scrollTop = a.scrollHeight
    }
  }
};
r.zc = function() {
  if(lc(this)) {
    var a = this.s.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.qa + "</title><style>" + this.ac() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.qa + "</b></p><p>" + this.Se + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (H ? a.body : this.s).onresize = B(this.De, this);
    this.J = new xc(a);
    this.J.h("openbutton").onclick = B(this.xf, this);
    this.J.h("closebutton").onclick = B(this.$e, this);
    this.J.h("clearbutton").onclick = B(this.Ze, this);
    this.J.h("exitbutton").onclick = B(this.df, this);
    nc(this)
  }
};
r.xf = function() {
  var a = this.J.h("optionsarea");
  a.innerHTML = "";
  for(var b = Pc(), c = this.J, d = 0;d < b.length;d++) {
    var f = G(b[d]), f = c.q("div", {}, Qc(this, "sel" + b[d], f.ga ? f.ga.name : "INHERIT"), c.q("span", {}, b[d] || "(root)"));
    a.appendChild(f)
  }
  this.J.h("options").style.display = "block";
  return!1
};
function Qc(a, b, c) {
  for(var a = a.J, b = a.q("select", {id:b}), d = 0;d < Bb.length;d++) {
    var f = Bb[d], g = a.q("option", {}, f.name);
    if(c == f.name) {
      g.selected = !0
    }
    b.appendChild(g)
  }
  b.appendChild(a.q("option", {selected:c == "INHERIT"}, "INHERIT"));
  return b
}
r.$e = function() {
  this.J.h("options").style.display = "none";
  for(var a = Pc(), b = this.J, c = 0;c < a.length;c++) {
    var d = G(a[c]), f = b.h("sel" + a[c]), f = f.options[f.selectedIndex].text;
    f == "INHERIT" ? d.Nb(k) : d.Nb(Db(f))
  }
  return!1
};
r.De = function() {
  var a = this.J, b = a.h("log"), c = a.h("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.B.body.offsetHeight - c.offsetHeight - (H ? 4 : 0) + "px"
};
function Pc() {
  var a = Ra(Hb);
  a.sort();
  return a
}
r.df = function() {
  this.Lb(!1);
  this.s && this.s.close()
};
r.ac = function() {
  return Oc.c.ac.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:medium monospace;}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
var Rc, Sc = !H || J("9"), Tc = H && !J("8");
function L() {
  Uc && (Vc[z(this)] = this)
}
var Uc = !1, Vc = {};
L.prototype.aa = !1;
L.prototype.d = function() {
  if(!this.aa && (this.aa = !0, this.a(), Uc)) {
    var a = z(this);
    Vc.hasOwnProperty(a) || e(Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call"));
    delete Vc[a]
  }
};
L.prototype.a = function() {
};
function Wc(a, b) {
  L.call(this);
  this.type = a;
  this.currentTarget = this.target = b
}
D(Wc, L);
r = Wc.prototype;
r.a = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
r.Ha = !1;
r.Hb = !0;
r.stopPropagation = function() {
  this.Ha = !0
};
r.preventDefault = function() {
  this.Hb = !1
};
var Xc = new Function("a", "return a");
function Yc(a, b) {
  a && this.Ga(a, b)
}
D(Yc, Wc);
var Zc = [1, 4, 2];
r = Yc.prototype;
r.target = k;
r.relatedTarget = k;
r.offsetX = 0;
r.offsetY = 0;
r.clientX = 0;
r.clientY = 0;
r.screenX = 0;
r.screenY = 0;
r.button = 0;
r.keyCode = 0;
r.charCode = 0;
r.ctrlKey = !1;
r.altKey = !1;
r.shiftKey = !1;
r.metaKey = !1;
r.zf = !1;
r.da = k;
r.Ga = function(a, b) {
  var c = this.type = a.type;
  Wc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Wb) {
      var f;
      a: {
        try {
          Xc(d.nodeName);
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
  this.zf = Zb ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.da = a;
  delete this.Hb;
  delete this.Ha
};
function $c(a) {
  return Sc ? a.da.button == 0 : a.type == "click" ? !0 : !!(a.da.button & Zc[0])
}
r.stopPropagation = function() {
  Yc.c.stopPropagation.call(this);
  this.da.stopPropagation ? this.da.stopPropagation() : this.da.cancelBubble = !0
};
r.preventDefault = function() {
  Yc.c.preventDefault.call(this);
  var a = this.da;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, Tc) {
      try {
        if(a.ctrlKey || a.keyCode >= 112 && a.keyCode <= 123) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
r.a = function() {
  Yc.c.a.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.da = k
};
function ad() {
}
var bd = 0;
r = ad.prototype;
r.key = 0;
r.gb = !1;
r.Gc = !1;
r.Ga = function(a, b, c, d, f, g) {
  x(a) ? this.fe = !0 : a && a.handleEvent && x(a.handleEvent) ? this.fe = !1 : e(Error("Invalid listener argument"));
  this.ab = a;
  this.ze = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.ec = g;
  this.Gc = !1;
  this.key = ++bd;
  this.gb = !1
};
r.handleEvent = function(a) {
  if(this.fe) {
    return this.ab.call(this.ec || this.src, a)
  }
  return this.ab.handleEvent.call(this.ab, a)
};
function M(a, b) {
  L.call(this);
  this.ke = b;
  this.Ca = [];
  a > this.ke && e(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.Ca.push(this.$ ? this.$() : {})
  }
}
D(M, L);
M.prototype.$ = k;
M.prototype.Od = k;
M.prototype.getObject = function() {
  if(this.Ca.length) {
    return this.Ca.pop()
  }
  return this.$ ? this.$() : {}
};
function cd(a, b) {
  a.Ca.length < a.ke ? a.Ca.push(b) : dd(a, b)
}
function dd(a, b) {
  if(a.Od) {
    a.Od(b)
  }else {
    if(ha(b)) {
      if(x(b.d)) {
        b.d()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
M.prototype.a = function() {
  M.c.a.call(this);
  for(var a = this.Ca;a.length;) {
    dd(this, a.pop())
  }
  delete this.Ca
};
var ed, fd = (ed = "ScriptEngine" in s && s.ScriptEngine() == "JScript") ? s.ScriptEngineMajorVersion() + "." + s.ScriptEngineMinorVersion() + "." + s.ScriptEngineBuildVersion() : "0";
var gd, hd, id, jd, kd, ld, md, nd, od, pd, qd;
(function() {
  function a() {
    return{f:0, R:0}
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
    return new ad
  }
  function f() {
    return new Yc
  }
  var g = ed && !(za(fd, "5.7") >= 0), i;
  ld = function(a) {
    i = a
  };
  if(g) {
    gd = function() {
      return j.getObject()
    };
    hd = function(a) {
      cd(j, a)
    };
    id = function() {
      return n.getObject()
    };
    jd = function(a) {
      cd(n, a)
    };
    kd = function() {
      return l.getObject()
    };
    md = function() {
      cd(l, c())
    };
    nd = function() {
      return y.getObject()
    };
    od = function(a) {
      cd(y, a)
    };
    pd = function() {
      return o.getObject()
    };
    qd = function(a) {
      cd(o, a)
    };
    var j = new M(0, 600);
    j.$ = a;
    var n = new M(0, 600);
    n.$ = b;
    var l = new M(0, 600);
    l.$ = c;
    var y = new M(0, 600);
    y.$ = d;
    var o = new M(0, 600);
    o.$ = f
  }else {
    gd = a, hd = t, id = b, jd = t, kd = c, md = t, nd = d, od = t, pd = f, qd = t
  }
})();
var rd = {}, N = {}, sd = {}, td = {};
function O(a, b, c, d, f) {
  if(b) {
    if(v(b)) {
      for(var g = 0;g < b.length;g++) {
        O(a, b[g], c, d, f)
      }
      return k
    }else {
      var d = !!d, i = N;
      b in i || (i[b] = gd());
      i = i[b];
      d in i || (i[d] = gd(), i.f++);
      var i = i[d], j = z(a), n;
      i.R++;
      if(i[j]) {
        n = i[j];
        for(g = 0;g < n.length;g++) {
          if(i = n[g], i.ab == c && i.ec == f) {
            if(i.gb) {
              break
            }
            return n[g].key
          }
        }
      }else {
        n = i[j] = id(), i.f++
      }
      g = kd();
      g.src = a;
      i = nd();
      i.Ga(c, g, a, b, d, f);
      c = i.key;
      g.key = c;
      n.push(i);
      rd[c] = i;
      sd[j] || (sd[j] = id());
      sd[j].push(i);
      a.addEventListener ? (a == s || !a.Kd) && a.addEventListener(b, g, d) : a.attachEvent(ud(b), g);
      return c
    }
  }else {
    e(Error("Invalid event type"))
  }
}
function vd(a, b, c, d, f) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      vd(a, b[g], c, d, f)
    }
    return k
  }
  a = O(a, b, c, d, f);
  rd[a].Gc = !0;
  return a
}
function wd(a, b, c, d, f) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      wd(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = xd(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].ab == c && a[g].capture == d && a[g].ec == f) {
          P(a[g].key);
          break
        }
      }
    }
  }
}
function P(a) {
  if(rd[a]) {
    var b = rd[a];
    if(!b.gb) {
      var c = b.src, d = b.type, f = b.ze, g = b.capture;
      c.removeEventListener ? (c == s || !c.Kd) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(ud(d), f);
      c = z(c);
      f = N[d][g][c];
      if(sd[c]) {
        var i = sd[c];
        Ha(i, b);
        i.length == 0 && delete sd[c]
      }
      b.gb = !0;
      f.se = !0;
      yd(d, g, c, f);
      delete rd[a]
    }
  }
}
function yd(a, b, c, d) {
  if(!d.lc && d.se) {
    for(var f = 0, g = 0;f < d.length;f++) {
      if(d[f].gb) {
        var i = d[f].ze;
        i.src = k;
        md(i);
        od(d[f])
      }else {
        f != g && (d[g] = d[f]), g++
      }
    }
    d.length = g;
    d.se = !1;
    g == 0 && (jd(d), delete N[a][b][c], N[a][b].f--, N[a][b].f == 0 && (hd(N[a][b]), delete N[a][b], N[a].f--), N[a].f == 0 && (hd(N[a]), delete N[a]))
  }
}
function zd(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Pa(sd, function(a) {
      for(var f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          P(g.key), c++
        }
      }
    })
  }else {
    if(a = z(a), sd[a]) {
      for(var a = sd[a], f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          P(g.key), c++
        }
      }
    }
  }
}
function xd(a, b, c) {
  var d = N;
  if(b in d && (d = d[b], c in d && (d = d[c], a = z(a), d[a]))) {
    return d[a]
  }
  return k
}
function ud(a) {
  if(a in td) {
    return td[a]
  }
  return td[a] = "on" + a
}
function Ad(a, b, c, d, f) {
  var g = 1, b = z(b);
  if(a[b]) {
    a.R--;
    a = a[b];
    a.lc ? a.lc++ : a.lc = 1;
    try {
      for(var i = a.length, j = 0;j < i;j++) {
        var n = a[j];
        n && !n.gb && (g &= Bd(n, f) !== !1)
      }
    }finally {
      a.lc--, yd(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Bd(a, b) {
  var c = a.handleEvent(b);
  a.Gc && P(a.key);
  return c
}
ld(function(a, b) {
  if(!rd[a]) {
    return!0
  }
  var c = rd[a], d = c.type, f = N;
  if(!(d in f)) {
    return!0
  }
  var f = f[d], g, i;
  Rc === h && (Rc = H && !s.addEventListener);
  if(Rc) {
    g = b || ca("window.event");
    var j = !0 in f, n = !1 in f;
    if(j) {
      if(g.keyCode < 0 || g.returnValue != h) {
        return!0
      }
      a: {
        var l = !1;
        if(g.keyCode == 0) {
          try {
            g.keyCode = -1;
            break a
          }catch(y) {
            l = !0
          }
        }
        if(l || g.returnValue == h) {
          g.returnValue = !0
        }
      }
    }
    l = pd();
    l.Ga(g, this);
    g = !0;
    try {
      if(j) {
        for(var o = id(), q = l.currentTarget;q;q = q.parentNode) {
          o.push(q)
        }
        i = f[!0];
        i.R = i.f;
        for(var A = o.length - 1;!l.Ha && A >= 0 && i.R;A--) {
          l.currentTarget = o[A], g &= Ad(i, o[A], d, !0, l)
        }
        if(n) {
          i = f[!1];
          i.R = i.f;
          for(A = 0;!l.Ha && A < o.length && i.R;A++) {
            l.currentTarget = o[A], g &= Ad(i, o[A], d, !1, l)
          }
        }
      }else {
        g = Bd(c, l)
      }
    }finally {
      if(o) {
        o.length = 0, jd(o)
      }
      l.d();
      qd(l)
    }
    return g
  }
  d = new Yc(b, this);
  try {
    g = Bd(c, d)
  }finally {
    d.d()
  }
  return g
});
function Cd(a) {
  var a = String(a), b;
  b = /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
  if(b) {
    try {
      return eval("(" + a + ")")
    }catch(c) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
function Dd() {
}
Dd.prototype.Kb = function(a) {
  var b = [];
  Ed(this, a, b);
  return b.join("")
};
function Ed(a, b, c) {
  switch(typeof b) {
    case "string":
      Fd(b, c);
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
      if(v(b)) {
        var d = b.length;
        c.push("[");
        for(var f = "", g = 0;g < d;g++) {
          c.push(f), Ed(a, b[g], c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (g = b[f], typeof g != "function" && (c.push(d), Fd(f, c), c.push(":"), Ed(a, g, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var Gd = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, Hd = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Fd(a, b) {
  b.push('"', a.replace(Hd, function(a) {
    if(a in Gd) {
      return Gd[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    b < 16 ? f += "000" : b < 256 ? f += "00" : b < 4096 && (f += "0");
    return Gd[a] = f + b.toString(16)
  }), '"')
}
;function Id(a, b, c) {
  this.oe = a;
  this.cd = b.name || k;
  this.Zf = b.Qd || k;
  this.Wf = b.Vf;
  this.na = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.na[b.w] = b
  }
}
function Jd(a) {
  a = Qa(a.na);
  Na(a, function(a, c) {
    return a.w - c.w
  });
  return a
}
;function Kd(a, b, c) {
  this.K = a;
  this.w = b;
  this.cd = c.name;
  this.Xa = !!c.bg;
  this.$f = !!c.required;
  this.ub = c.Ra;
  this.qe = c.type;
  this.Nd = !1;
  switch(this.ub) {
    case Ld:
    ;
    case Md:
    ;
    case Nd:
    ;
    case Od:
    ;
    case Pd:
      this.Nd = !0
  }
  this.Xf = c.defaultValue
}
var Ld = 3, Md = 4, Nd = 6, Od = 16, Pd = 18;
function Rd(a) {
  return a.ub == 11 || a.ub == 10
}
;function Sd() {
  this.p = {};
  this.Oa = this.constructor.Oa;
  var a = this.Oa.na, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.na = b;
  this.Kc = this.Zc = k
}
function Td(a, b) {
  for(var c in a.p) {
    a.na[c] || b.call(a, c, a.p[c])
  }
}
r = Sd.prototype;
r.wb = m("Oa");
r.get = function(a, b) {
  return Ud(this, a.w, b)
};
r.set = function(a, b) {
  this.p[a.w] = b
};
r.add = function(a, b) {
  var c = a.w;
  this.p[c] || (this.p[c] = []);
  this.p[c].push(b)
};
r.clear = function(a) {
  delete this.p[a.w]
};
r.k = function(a) {
  if(!a || this.constructor != a.constructor) {
    return!1
  }
  for(var b = Jd(this.wb()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(Vd(this, d.w) != Vd(a, d.w)) {
      return!1
    }
    if(Vd(this, d.w)) {
      var f = Rd(d), g = d.w, i = this.p[g], g = a.p[g];
      if(d.Xa) {
        if(i.length != g.length) {
          return!1
        }
        for(d = 0;d < i.length;d++) {
          if(!(f ? i[d].k(g[d]) : i[d] == g[d])) {
            return!1
          }
        }
      }else {
        if(!(f ? i.k(g) : i == g)) {
          return!1
        }
      }
    }
  }
  return!0
};
r.M = function() {
  for(var a = new this.constructor, b = Jd(a.wb()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete a.p[d.w];
    if(Vd(this, d.w)) {
      var f = Rd(d);
      if(d.Xa) {
        var g;
        g = d.w;
        Wd(this, this.na[g]);
        g = this.p[g] || [];
        for(var i = 0;i < g.length;i++) {
          a.add(d, f ? g[i].M() : g[i])
        }
      }else {
        g = this.get(d), a.set(d, f ? g.M() : g)
      }
    }
  }
  return a
};
function Vd(a, b) {
  return b in a.p && u(a.p[b])
}
function Wd(a, b) {
  if(a.Zc) {
    var c = b.w;
    if(!(c in a.Kc)) {
      var d = a.p, f;
      f = a.Zc;
      var g = a.p[c];
      if(g == k) {
        f = g
      }else {
        if(b.Xa) {
          var i = [];
          v(g);
          for(var j = 0;j < g.length;j++) {
            i[j] = f.Zb(b, g[j])
          }
          f = i
        }else {
          f = f.Zb(b, g)
        }
      }
      d[c] = f;
      a.Kc[c] = !0
    }
  }
}
function Ud(a, b, c) {
  var d = a.na[b];
  Wd(a, d);
  return d.Xa ? (c = c || 0, Xd(a, b), a.p[b][c]) : (v(a.p[b]), a.p[b])
}
function Xd(a, b) {
  return a.na[b].Xa ? (Vd(a, b) && v(a.p[b]), Vd(a, b) ? a.p[b].length : 0) : Vd(a, b) ? 1 : 0
}
function Yd(a, b) {
  var c = [], d, f;
  for(f in b) {
    b.hasOwnProperty(f) && (f == 0 ? d = b[0] : c.push(new Kd(a, f, b[f])))
  }
  a.Oa = new Id(a, d, c);
  a.wb = function() {
    return a.Oa
  }
}
;function Zd() {
}
Zd.prototype.$b = function(a, b) {
  return Rd(a) ? this.Kb(b) : b
};
Zd.prototype.Jc = function(a) {
  new a.oe;
  e(Error("Unimplemented"))
};
Zd.prototype.Zb = function(a, b) {
  if(Rd(a)) {
    return this.Jc(a.qe.Oa, b)
  }
  if(!a.Nd) {
    return b
  }
  var c = a.qe;
  if(c === String) {
    if(typeof b === "number") {
      return String(b)
    }
  }else {
    if(c === Number && typeof b === "string" && /^-?[0-9]+$/.test(b)) {
      return Number(b)
    }
  }
  return b
};
function $d() {
}
D($d, Zd);
$d.prototype.Jc = function(a, b) {
  var c = new a.oe;
  c.Zc = this;
  c.p = b;
  c.Kc = {};
  return c
};
function ae() {
}
D(ae, $d);
ae.prototype.Kb = function(a) {
  for(var b = Jd(a.wb()), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    if(Vd(a, f.w)) {
      var g = f.w;
      if(f.Xa) {
        c[g] = [];
        for(var i = 0;i < Xd(a, f.w);i++) {
          c[g][i] = this.$b(f, a.get(f, i))
        }
      }else {
        c[g] = this.$b(f, a.get(f))
      }
    }
  }
  Td(a, function(a, b) {
    c[a] = b
  });
  return c
};
ae.prototype.$b = function(a, b) {
  if(a.ub == 8) {
    return b ? 1 : 0
  }
  return Zd.prototype.$b.apply(this, arguments)
};
ae.prototype.Zb = function(a, b) {
  if(a.ub == 8) {
    return b === 1
  }
  return Zd.prototype.Zb.apply(this, arguments)
};
function be(a, b, c, d, f) {
  if(!H && (!I || !J("525"))) {
    return!0
  }
  if(Zb && f) {
    return ce(a)
  }
  if(f && !d) {
    return!1
  }
  if(!c && (b == 17 || b == 18)) {
    return!1
  }
  if(H && d && b == a) {
    return!1
  }
  switch(a) {
    case 13:
      return!0;
    case 27:
      return!I
  }
  return ce(a)
}
function ce(a) {
  if(a >= 48 && a <= 57) {
    return!0
  }
  if(a >= 96 && a <= 106) {
    return!0
  }
  if(a >= 65 && a <= 90) {
    return!0
  }
  if(I && a == 0) {
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
;function de(a) {
  L.call(this);
  this.Yd = a
}
D(de, L);
var ee = new M(0, 100), fe = [];
function Q(a, b, c, d) {
  v(c) || (fe[0] = c, c = fe);
  for(var f = 0;f < c.length;f++) {
    var g = a, i = O(b, c[f], d || a, !1, a.Yd || a);
    g.b ? g.b[i] = !0 : g.ta ? (g.b = ee.getObject(), g.b[g.ta] = !0, g.ta = k, g.b[i] = !0) : g.ta = i
  }
  return a
}
function ge(a, b, c, d, f, g) {
  if(a.ta || a.b) {
    if(v(c)) {
      for(var i = 0;i < c.length;i++) {
        ge(a, b, c[i], d, f, g)
      }
    }else {
      a: {
        d = d || a;
        g = g || a.Yd || a;
        f = !!f;
        if(b = xd(b, c, f)) {
          for(c = 0;c < b.length;c++) {
            if(b[c].ab == d && b[c].capture == f && b[c].ec == g) {
              b = b[c];
              break a
            }
          }
        }
        b = k
      }
      if(b) {
        if(b = b.key, P(b), a.b) {
          c = a.b, b in c && delete c[b]
        }else {
          if(a.ta == b) {
            a.ta = k
          }
        }
      }
    }
  }
  return a
}
de.prototype.kd = function() {
  if(this.b) {
    for(var a in this.b) {
      P(a), delete this.b[a]
    }
    cd(ee, this.b);
    this.b = k
  }else {
    this.ta && P(this.ta)
  }
};
de.prototype.a = function() {
  de.c.a.call(this);
  this.kd()
};
de.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function he() {
  L.call(this)
}
D(he, L);
r = he.prototype;
r.Kd = !0;
r.nc = k;
r.md = aa("nc");
r.addEventListener = function(a, b, c, d) {
  O(this, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  wd(this, a, b, c, d)
};
r.dispatchEvent = function(a) {
  var b = a.type || a, c = N;
  if(b in c) {
    if(w(a)) {
      a = new Wc(a, this)
    }else {
      if(a instanceof Wc) {
        a.target = a.target || this
      }else {
        var d = a, a = new Wc(b, this);
        Ta(a, d)
      }
    }
    var d = 1, f, c = c[b], b = !0 in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.nc) {
        f.push(g)
      }
      g = c[!0];
      g.R = g.f;
      for(var i = f.length - 1;!a.Ha && i >= 0 && g.R;i--) {
        a.currentTarget = f[i], d &= Ad(g, f[i], a.type, !0, a) && a.Hb != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.R = g.f, b) {
        for(i = 0;!a.Ha && i < f.length && g.R;i++) {
          a.currentTarget = f[i], d &= Ad(g, f[i], a.type, !1, a) && a.Hb != !1
        }
      }else {
        for(f = this;!a.Ha && f && g.R;f = f.nc) {
          a.currentTarget = f, d &= Ad(g, f, a.type, !1, a) && a.Hb != !1
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
r.a = function() {
  he.c.a.call(this);
  zd(this);
  this.nc = k
};
var ie = Wb ? "MozUserSelect" : I ? "WebkitUserSelect" : k;
function je() {
}
da(je);
je.prototype.vf = 0;
je.Ta();
function ke(a) {
  L.call(this);
  this.Ba = a || wc();
  this.Ib = le
}
D(ke, he);
ke.prototype.nf = je.Ta();
var le = k;
function me(a, b) {
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
r = ke.prototype;
r.ae = k;
r.F = !1;
r.o = k;
r.Ib = k;
r.uf = k;
r.K = k;
r.ma = k;
r.Wb = k;
r.Pf = !1;
r.h = m("o");
function ne(a) {
  return a.Ua || (a.Ua = new de(a))
}
r.getParent = m("K");
r.md = function(a) {
  this.K && this.K != a && e(Error("Method not supported"));
  ke.c.md.call(this, a)
};
r.xb = m("Ba");
r.q = function() {
  this.o = this.Ba.createElement("div")
};
function oe(a) {
  var b = K("prefs");
  a.F && e(Error("Component already rendered"));
  a.o || a.q();
  b ? b.insertBefore(a.o, k) : a.Ba.B.body.appendChild(a.o);
  (!a.K || a.K.F) && a.Qa()
}
r.Qa = function() {
  this.F = !0;
  pe(this, function(a) {
    !a.F && a.h() && a.Qa()
  })
};
r.tb = function() {
  pe(this, function(a) {
    a.F && a.tb()
  });
  this.Ua && this.Ua.kd();
  this.F = !1
};
r.a = function() {
  ke.c.a.call(this);
  this.F && this.tb();
  this.Ua && (this.Ua.d(), delete this.Ua);
  pe(this, function(a) {
    a.d()
  });
  !this.Pf && this.o && Hc(this.o);
  this.K = this.uf = this.o = this.Wb = this.ma = k
};
r.jb = function(a) {
  this.F && e(Error("Component already rendered"));
  this.Ib = a
};
function pe(a, b) {
  a.ma && Ca(a.ma, b, h)
}
r.removeChild = function(a, b) {
  if(a) {
    var c = w(a) ? a : a.ae || (a.ae = ":" + (a.nf.vf++).toString(36)), d;
    this.Wb && c ? (d = this.Wb, d = c in d ? d[c] : h, d = d || k) : d = k;
    a = d;
    if(c && a) {
      d = this.Wb, c in d && delete d[c], Ha(this.ma, a), b && (a.tb(), a.o && Hc(a.o)), c = a, c == k && e(Error("Unable to set parent component")), c.K = k, ke.c.md.call(c, k)
    }
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function qe() {
}
var re;
da(qe);
r = qe.prototype;
r.Yb = function() {
};
r.q = function(a) {
  return a.xb().q("div", se(this, a).join(" "), a.rb)
};
r.sb = function(a, b, c) {
  if(a = a.h ? a.h() : a) {
    if(H && !J("7")) {
      var d = te(rc(a), b);
      d.push(b);
      ma(c ? sc : tc, a).apply(k, d)
    }else {
      c ? sc(a, b) : tc(a, b)
    }
  }
};
r.be = function(a) {
  if(a.Ib == k) {
    var b;
    a: {
      b = a.F ? a.o : a.Ba.B.body;
      var c = yc(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (b = c.defaultView.getComputedStyle(b, k))) {
        b = b.direction || b.getPropertyValue("direction");
        break a
      }
      b = ""
    }
    a.Ib = "rtl" == (b || ((a.F ? a.o : a.Ba.B.body).currentStyle ? (a.F ? a.o : a.Ba.B.body).currentStyle.direction : k) || (a.F ? a.o : a.Ba.B.body).style.direction)
  }
  a.Ib && this.jb(a.h(), !0);
  a.isEnabled() && this.Mb(a, a.Ka)
};
r.uc = function(a, b) {
  var c = !b, d = H || Vb ? a.getElementsByTagName("*") : k;
  if(ie) {
    if(c = c ? "none" : "", a.style[ie] = c, d) {
      for(var f = 0, g;g = d[f];f++) {
        g.style[ie] = c
      }
    }
  }else {
    if(H || Vb) {
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for(f = 0;g = d[f];f++) {
          g.setAttribute("unselectable", c)
        }
      }
    }
  }
};
r.jb = function(a, b) {
  this.sb(a, this.oa() + "-rtl", b)
};
r.ee = function(a) {
  var b;
  if(a.Y & 32 && (b = a.Ea())) {
    return Lc(b)
  }
  return!1
};
r.Mb = function(a, b) {
  var c;
  if(a.Y & 32 && (c = a.Ea())) {
    if(!b && a.j & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.j & 32 && a.Sd()
    }
    if(Lc(c) != b) {
      b ? c.tabIndex = 0 : c.removeAttribute("tabIndex")
    }
  }
};
r.od = function(a, b) {
  a.style.display = b ? "" : "none"
};
r.L = function(a, b, c) {
  var d = a.h();
  if(d) {
    var f = ue(this, b);
    f && this.sb(a, f, c);
    this.Rb(d, b, c)
  }
};
r.Rb = function(a, b, c) {
  re || (re = Ua(1, "disabled", 4, "pressed", 8, "selected", 16, "checked", 64, "expanded"));
  (b = re[b]) && a.setAttribute("aria-" + b, c)
};
r.Ea = function(a) {
  return a.h()
};
r.oa = p("goog-control");
function se(a, b) {
  var c = a.oa(), d = [c], f = a.oa();
  f != c && d.push(f);
  c = b.j;
  for(f = [];c;) {
    var g = c & -c;
    f.push(ue(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.V) && d.push.apply(d, c);
  H && !J("7") && d.push.apply(d, te(d));
  return d
}
function te(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Ca([], function(d) {
    Fa(d, ma(Ga, a)) && (!b || Ga(d, b)) && c.push(d.join("_"))
  });
  return c
}
function ue(a, b) {
  if(!a.Dd) {
    var c = a.oa();
    a.Dd = Ua(1, c + "-disabled", 2, c + "-hover", 4, c + "-active", 8, c + "-selected", 16, c + "-checked", 32, c + "-focused", 64, c + "-open")
  }
  return a.Dd[b]
}
;function ve() {
}
D(ve, qe);
da(ve);
r = ve.prototype;
r.Yb = p("button");
r.Rb = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : ve.c.Rb.call(this, a, b, c)
};
r.q = function(a) {
  var b = ve.c.q.call(this, a), c = a.bc();
  c && this.nd(b, c);
  (c = a.cc()) && this.wc(b, c);
  a.Y & 16 && this.Rb(b, 16, !1);
  return b
};
r.cc = t;
r.wc = t;
r.bc = function(a) {
  return a.title
};
r.nd = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
r.oa = p("goog-button");
function we(a, b) {
  L.call(this);
  a && xe(this, a, b)
}
D(we, he);
r = we.prototype;
r.o = k;
r.gc = k;
r.Wc = k;
r.hc = k;
r.ua = -1;
r.sa = -1;
var ye = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, ze = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Ae = {61:187, 
59:186}, Be = H || I && J("525");
r = we.prototype;
r.jf = function(a) {
  if(I && (this.ua == 17 && !a.ctrlKey || this.ua == 18 && !a.altKey)) {
    this.sa = this.ua = -1
  }
  Be && !be(a.keyCode, this.ua, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.sa = Wb && a.keyCode in Ae ? Ae[a.keyCode] : a.keyCode
};
r.lf = function() {
  this.sa = this.ua = -1
};
r.handleEvent = function(a) {
  var b = a.da, c, d;
  H && a.type == "keypress" ? (c = this.sa, d = c != 13 && c != 27 ? b.keyCode : 0) : I && a.type == "keypress" ? (c = this.sa, d = b.charCode >= 0 && b.charCode < 63232 && ce(c) ? b.charCode : 0) : Vb ? (c = this.sa, d = ce(c) ? b.keyCode : 0) : (c = b.keyCode || this.sa, d = b.charCode || 0, Zb && d == 63 && !c && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in ye ? f = ye[c] : c == 25 && a.shiftKey && (f = 9) : g && g in ze && (f = ze[g]);
  a = f == this.ua;
  this.ua = f;
  b = new Ce(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.d()
  }
};
r.h = m("o");
function xe(a, b, c) {
  a.hc && a.detach();
  a.o = b;
  a.gc = O(a.o, "keypress", a, c);
  a.Wc = O(a.o, "keydown", a.jf, c, a);
  a.hc = O(a.o, "keyup", a.lf, c, a)
}
r.detach = function() {
  if(this.gc) {
    P(this.gc), P(this.Wc), P(this.hc), this.hc = this.Wc = this.gc = k
  }
  this.o = k;
  this.sa = this.ua = -1
};
r.a = function() {
  we.c.a.call(this);
  this.detach()
};
function Ce(a, b, c, d) {
  d && this.Ga(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
D(Ce, Yc);
function De(a, b) {
  a || e(Error("Invalid class name " + a));
  x(b) || e(Error("Invalid decorator function " + b))
}
var Ee = {};
function R(a, b, c) {
  ke.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = z(b);
      if(d = Ee[d]) {
        break
      }
      b = b.c ? b.c.constructor : k
    }
    b = d ? x(d.Ta) ? d.Ta() : new d : k
  }
  this.t = b;
  this.rb = a
}
D(R, ke);
r = R.prototype;
r.rb = k;
r.j = 0;
r.Y = 39;
r.Bd = 255;
r.Kf = 0;
r.Ka = !0;
r.V = k;
r.Sc = !0;
r.Ec = !1;
r.Ea = function() {
  return this.t.Ea(this)
};
function Fe(a, b) {
  if(b) {
    a.V ? Ga(a.V, b) || a.V.push(b) : a.V = [b], a.t.sb(a, b, !0)
  }
}
r.sb = function(a, b) {
  if(b) {
    Fe(this, a)
  }else {
    if(a && this.V) {
      Ha(this.V, a);
      if(this.V.length == 0) {
        this.V = k
      }
      this.t.sb(this, a, !1)
    }
  }
};
r.q = function() {
  var a = this.t.q(this);
  this.o = a;
  var b = this.t.Yb();
  if(b) {
    a.setAttribute("role", b), a.cg = b
  }
  this.Ec || this.t.uc(a, !1);
  this.Ka || this.t.od(a, !1)
};
r.Qa = function() {
  R.c.Qa.call(this);
  this.t.be(this);
  if(this.Y & -2 && (this.Sc && Ge(this, !0), this.Y & 32)) {
    var a = this.Ea();
    if(a) {
      var b = this.Ya || (this.Ya = new we);
      xe(b, a);
      Q(Q(Q(ne(this), b, "key", this.kf), a, "focus", this.hf), a, "blur", this.Sd)
    }
  }
};
function Ge(a, b) {
  var c = ne(a), d = a.h();
  b ? (Q(Q(Q(Q(c, d, "mouseover", a.Wd), d, "mousedown", a.Ud), d, "mouseup", a.Xd), d, "mouseout", a.Vd), H && Q(c, d, "dblclick", a.Td)) : (ge(ge(ge(ge(c, d, "mouseover", a.Wd), d, "mousedown", a.Ud), d, "mouseup", a.Xd), d, "mouseout", a.Vd), H && ge(c, d, "dblclick", a.Td))
}
r.tb = function() {
  R.c.tb.call(this);
  this.Ya && this.Ya.detach();
  this.Ka && this.isEnabled() && this.t.Mb(this, !1)
};
r.a = function() {
  R.c.a.call(this);
  this.Ya && (this.Ya.d(), delete this.Ya);
  delete this.t;
  this.V = this.rb = k
};
function He(a) {
  a = a.rb;
  if(!a) {
    return""
  }
  if(!w(a)) {
    if(v(a)) {
      a = Da(a, Mc).join("")
    }else {
      if(qc && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Nc(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      H || (a = a.replace(/ +/g, " "));
      a != " " && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
r.jb = function(a) {
  R.c.jb.call(this, a);
  var b = this.h();
  b && this.t.jb(b, a)
};
r.uc = function(a) {
  this.Ec = a;
  var b = this.h();
  b && this.t.uc(b, a)
};
r.od = function(a, b) {
  if(b || this.Ka != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.h();
    c && this.t.od(c, a);
    this.isEnabled() && this.t.Mb(this, a);
    this.Ka = a;
    return!0
  }
  return!1
};
r.isEnabled = function() {
  return!(this.j & 1)
};
r.Lb = function(a) {
  var b = this.getParent();
  if((!b || typeof b.isEnabled != "function" || b.isEnabled()) && Ie(this, 1, !a)) {
    a || (this.setActive(!1), Je(this, !1)), this.Ka && this.t.Mb(this, a), this.L(1, !a)
  }
};
function Je(a, b) {
  Ie(a, 2, b) && a.L(2, b)
}
r.ce = function() {
  return!!(this.j & 4)
};
r.setActive = function(a) {
  Ie(this, 4, a) && this.L(4, a)
};
r.L = function(a, b) {
  if(this.Y & a && b != !!(this.j & a)) {
    this.t.L(this, a, b), this.j = b ? this.j | a : this.j & ~a
  }
};
function S(a, b) {
  return!!(a.Bd & b) && !!(a.Y & b)
}
function Ie(a, b, c) {
  return!!(a.Y & b) && !!(a.j & b) != c && (!(a.Kf & b) || a.dispatchEvent(me(b, c))) && !a.aa
}
r.Wd = function(a) {
  (!a.relatedTarget || !Ic(this.h(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && S(this, 2) && Je(this, !0)
};
r.Vd = function(a) {
  if((!a.relatedTarget || !Ic(this.h(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    S(this, 4) && this.setActive(!1), S(this, 2) && Je(this, !1)
  }
};
r.Ud = function(a) {
  if(this.isEnabled() && (S(this, 2) && Je(this, !0), $c(a) && (!I || !Zb || !a.ctrlKey))) {
    S(this, 4) && this.setActive(!0), this.t.ee(this) && this.Ea().focus()
  }
  !this.Ec && $c(a) && (!I || !Zb || !a.ctrlKey) && a.preventDefault()
};
r.Xd = function(a) {
  this.isEnabled() && (S(this, 2) && Je(this, !0), this.ce() && this.Eb(a) && S(this, 4) && this.setActive(!1))
};
r.Td = function(a) {
  this.isEnabled() && this.Eb(a)
};
r.Eb = function(a) {
  if(S(this, 16)) {
    var b = !(this.j & 16);
    Ie(this, 16, b) && this.L(16, b)
  }
  S(this, 8) && Ie(this, 8, !0) && this.L(8, !0);
  S(this, 64) && (b = !(this.j & 64), Ie(this, 64, b) && this.L(64, b));
  b = new Wc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, f = 0;d = c[f];f++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
r.hf = function() {
  S(this, 32) && Ie(this, 32, !0) && this.L(32, !0)
};
r.Sd = function() {
  S(this, 4) && this.setActive(!1);
  S(this, 32) && Ie(this, 32, !1) && this.L(32, !1)
};
r.kf = function(a) {
  if(this.Ka && this.isEnabled() && this.Rc(a)) {
    return a.preventDefault(), a.stopPropagation(), !0
  }
  return!1
};
r.Rc = function(a) {
  return a.keyCode == 13 && this.Eb(a)
};
x(R) || e(Error("Invalid component class " + R));
x(qe) || e(Error("Invalid renderer class " + qe));
var Ke = z(R);
Ee[Ke] = qe;
De("goog-control", function() {
  return new R(k)
});
function Le() {
}
D(Le, ve);
da(Le);
r = Le.prototype;
r.Yb = function() {
};
r.q = function(a) {
  a.F && !1 != a.Sc && Ge(a, !1);
  a.Sc = !1;
  a.Bd &= -256;
  a.F && a.j & 32 && e(Error("Component already rendered"));
  a.j & 32 && a.L(32, !1);
  a.Y &= -33;
  return a.xb().q("button", {"class":se(this, a).join(" "), disabled:!a.isEnabled(), title:a.bc() || "", value:a.cc() || ""}, He(a) || "")
};
r.be = function(a) {
  Q(ne(a), a.h(), "click", a.Eb)
};
r.uc = t;
r.jb = t;
r.ee = function(a) {
  return a.isEnabled()
};
r.Mb = t;
r.L = function(a, b, c) {
  Le.c.L.call(this, a, b, c);
  if((a = a.h()) && b == 1) {
    a.disabled = c
  }
};
r.cc = function(a) {
  return a.value
};
r.wc = function(a, b) {
  if(a) {
    a.value = b
  }
};
r.Rb = t;
function Me(a, b, c) {
  R.call(this, a, b || Le.Ta(), c)
}
D(Me, R);
r = Me.prototype;
r.cc = m("Qe");
r.wc = function(a) {
  this.Qe = a;
  this.t.wc(this.h(), a)
};
r.bc = m("Le");
r.nd = function(a) {
  this.Le = a;
  this.t.nd(this.h(), a)
};
r.a = function() {
  Me.c.a.call(this);
  delete this.Qe;
  delete this.Le
};
r.Qa = function() {
  Me.c.Qa.call(this);
  if(this.Y & 32) {
    var a = this.Ea();
    a && Q(ne(this), a, "keyup", this.Rc)
  }
};
r.Rc = function(a) {
  if(a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup") {
    return this.Eb(a)
  }
  return a.keyCode == 32
};
De("goog-button", function() {
  return new Me(k)
});
function Ne() {
}
D(Ne, ve);
da(Ne);
Ne.prototype.q = function(a) {
  var b = {"class":"goog-inline-block " + se(this, a).join(" "), title:a.bc() || ""};
  return a.xb().q("div", b, Oe(this, a.rb, a.xb()))
};
Ne.prototype.Yb = p("button");
function Oe(a, b, c) {
  return c.q("div", "goog-inline-block " + (a.oa() + "-outer-box"), c.q("div", "goog-inline-block " + (a.oa() + "-inner-box"), b))
}
Ne.prototype.oa = p("goog-custom-button");
function Pe(a, b, c) {
  Me.call(this, a, b || Ne.Ta(), c)
}
D(Pe, Me);
De("goog-custom-button", function() {
  return new Pe(k)
});
var Qe = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Re(a, b) {
  var c = a.match(Qe), d = b.match(Qe);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Se(a, b) {
  var c;
  a instanceof Se ? (this.ib(b == k ? a.X : b), Te(this, a.ia), Ue(this, a.Sb), Ve(this, a.Pa), We(this, a.fb), Xe(this, a.eb), Ye(this, a.Q.M()), Ze(this, a.vb)) : a && (c = String(a).match(Qe)) ? (this.ib(!!b), Te(this, c[1] || "", !0), Ue(this, c[2] || "", !0), Ve(this, c[3] || "", !0), We(this, c[4]), Xe(this, c[5] || "", !0), Ye(this, c[6] || "", !0), Ze(this, c[7] || "", !0)) : (this.ib(!!b), this.Q = new $e(k, this, this.X))
}
r = Se.prototype;
r.ia = "";
r.Sb = "";
r.Pa = "";
r.fb = k;
r.eb = "";
r.vb = "";
r.pf = !1;
r.X = !1;
r.toString = function() {
  if(this.U) {
    return this.U
  }
  var a = [];
  this.ia && a.push(af(this.ia, bf), ":");
  if(this.Pa) {
    a.push("//");
    this.Sb && a.push(af(this.Sb, bf), "@");
    var b;
    b = this.Pa;
    b = w(b) ? encodeURIComponent(b) : k;
    a.push(b);
    this.fb != k && a.push(":", String(this.fb))
  }
  this.eb && (this.Pa && this.eb.charAt(0) != "/" && a.push("/"), a.push(af(this.eb, cf)));
  (b = String(this.Q)) && a.push("?", b);
  this.vb && a.push("#", af(this.vb, df));
  return this.U = a.join("")
};
r.M = function() {
  var a = this.ia, b = this.Sb, c = this.Pa, d = this.fb, f = this.eb, g = this.Q.M(), i = this.vb, j = new Se(k, this.X);
  a && Te(j, a);
  b && Ue(j, b);
  c && Ve(j, c);
  d && We(j, d);
  f && Xe(j, f);
  g && Ye(j, g);
  i && Ze(j, i);
  return j
};
function Te(a, b, c) {
  ef(a);
  delete a.U;
  a.ia = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.ia) {
    a.ia = a.ia.replace(/:$/, "")
  }
}
function Ue(a, b, c) {
  ef(a);
  delete a.U;
  a.Sb = c ? b ? decodeURIComponent(b) : "" : b
}
function Ve(a, b, c) {
  ef(a);
  delete a.U;
  a.Pa = c ? b ? decodeURIComponent(b) : "" : b
}
function We(a, b) {
  ef(a);
  delete a.U;
  b ? (b = Number(b), (isNaN(b) || b < 0) && e(Error("Bad port number " + b)), a.fb = b) : a.fb = k
}
function Xe(a, b, c) {
  ef(a);
  delete a.U;
  a.eb = c ? b ? decodeURIComponent(b) : "" : b
}
function Ye(a, b, c) {
  ef(a);
  delete a.U;
  b instanceof $e ? (a.Q = b, a.Q.wd = a, a.Q.ib(a.X)) : (c || (b = af(b, ff)), a.Q = new $e(b, a, a.X))
}
function Ze(a, b, c) {
  ef(a);
  delete a.U;
  a.vb = c ? b ? decodeURIComponent(b) : "" : b
}
function ef(a) {
  a.pf && e(Error("Tried to modify a read-only Uri"))
}
r.ib = function(a) {
  this.X = a;
  this.Q && this.Q.ib(a);
  return this
};
var gf = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function af(a, b) {
  var c = k;
  w(a) && (c = a, gf.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, hf)));
  return c
}
function hf(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var bf = /[#\/\?@]/g, cf = /[\#\?]/g, ff = /[\#\?@]/g, df = /#/g;
function $e(a, b, c) {
  this.ba = a || k;
  this.wd = b || k;
  this.X = !!c
}
function T(a) {
  if(!a.l && (a.l = new ab, a.ba)) {
    for(var b = a.ba.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      d >= 0 ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = jf(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
r = $e.prototype;
r.l = k;
r.f = k;
r.r = function() {
  T(this);
  return this.f
};
r.add = function(a, b) {
  T(this);
  kf(this);
  a = jf(this, a);
  if(this.I(a)) {
    var c = this.l.get(a);
    v(c) ? c.push(b) : this.l.set(a, [c, b])
  }else {
    this.l.set(a, b)
  }
  this.f++;
  return this
};
r.remove = function(a) {
  T(this);
  a = jf(this, a);
  if(this.l.I(a)) {
    kf(this);
    var b = this.l.get(a);
    v(b) ? this.f -= b.length : this.f--;
    return this.l.remove(a)
  }
  return!1
};
r.clear = function() {
  kf(this);
  this.l && this.l.clear();
  this.f = 0
};
r.ra = function() {
  T(this);
  return this.f == 0
};
r.I = function(a) {
  T(this);
  a = jf(this, a);
  return this.l.I(a)
};
r.qb = function(a) {
  var b = this.D();
  return Ga(b, a)
};
r.fa = function() {
  T(this);
  for(var a = this.l.D(), b = this.l.fa(), c = [], d = 0;d < b.length;d++) {
    var f = a[d];
    if(v(f)) {
      for(var g = 0;g < f.length;g++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
r.D = function(a) {
  T(this);
  if(a) {
    if(a = jf(this, a), this.I(a)) {
      var b = this.l.get(a);
      if(v(b)) {
        return b
      }else {
        a = [], a.push(b)
      }
    }else {
      a = []
    }
  }else {
    for(var b = this.l.D(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      v(d) ? Ka(a, d) : a.push(d)
    }
  }
  return a
};
r.set = function(a, b) {
  T(this);
  kf(this);
  a = jf(this, a);
  if(this.I(a)) {
    var c = this.l.get(a);
    v(c) ? this.f -= c.length : this.f--
  }
  this.l.set(a, b);
  this.f++;
  return this
};
r.get = function(a, b) {
  T(this);
  a = jf(this, a);
  if(this.I(a)) {
    var c = this.l.get(a);
    return v(c) ? c[0] : c
  }else {
    return b
  }
};
r.toString = function() {
  if(this.ba) {
    return this.ba
  }
  if(!this.l) {
    return""
  }
  for(var a = [], b = 0, c = this.l.fa(), d = 0;d < c.length;d++) {
    var f = c[d], g = qa(f), f = this.l.get(f);
    if(v(f)) {
      for(var i = 0;i < f.length;i++) {
        b > 0 && a.push("&"), a.push(g), f[i] !== "" && a.push("=", qa(f[i])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(g), f !== "" && a.push("=", qa(f)), b++
    }
  }
  return this.ba = a.join("")
};
function kf(a) {
  delete a.Ic;
  delete a.ba;
  a.wd && delete a.wd.U
}
r.M = function() {
  var a = new $e;
  if(this.Ic) {
    a.Ic = this.Ic
  }
  if(this.ba) {
    a.ba = this.ba
  }
  if(this.l) {
    a.l = this.l.M()
  }
  return a
};
function jf(a, b) {
  var c = String(b);
  a.X && (c = c.toLowerCase());
  return c
}
r.ib = function(a) {
  a && !this.X && (T(this), kf(this), Za(this.l, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.X = a
};
r.extend = function() {
  for(var a = 0;a < arguments.length;a++) {
    Za(arguments[a], function(a, c) {
      this.add(c, a)
    }, this)
  }
};
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function lf(a, b) {
  this.Vb = [];
  this.Uf = a;
  this.af = b || k
}
r = lf.prototype;
r.Sa = !1;
r.Va = !1;
r.Db = 0;
r.Ie = !1;
r.Ye = !1;
r.Gd = function(a, b) {
  this.Sa = !0;
  this.rc = b;
  this.Va = !a;
  mf(this);
  this.Db--;
  this.Db == 0 && this.Sa && mf(this)
};
r.ob = function(a) {
  if(this.Sa) {
    this.Ie || e(new nf(this)), this.Ie = !1
  }
  this.Sa = !0;
  this.rc = a;
  this.Va = !1;
  mf(this)
};
function of(a, b) {
  pf(a, b, k, h)
}
function pf(a, b, c, d) {
  a.Vb.push([b, c, d]);
  a.Sa && mf(a)
}
function qf(a) {
  return Ea(a.Vb, function(a) {
    return x(a[1])
  })
}
function mf(a) {
  a.vd && a.Sa && qf(a) && (s.clearTimeout(a.vd), delete a.vd);
  for(var b = a.rc, c = !1, d = !1;a.Vb.length && a.Db == 0;) {
    var f = a.Vb.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.Va ? i : g) {
      try {
        var j = g.call(f || a.af, b);
        if(u(j)) {
          a.Va = a.Va && (j == b || j instanceof Error), a.rc = b = j
        }
        b instanceof lf && (d = !0, a.Db++)
      }catch(n) {
        b = n, a.Va = !0, qf(a) || (c = !0)
      }
    }
  }
  a.rc = b;
  if(d && a.Db) {
    pf(b, B(a.Gd, a, !0), B(a.Gd, a, !1)), b.Ye = !0
  }
  if(c) {
    a.vd = s.setTimeout(function() {
      e(b)
    }, 0)
  }
}
function nf(a) {
  na.call(this);
  this.Yf = a
}
D(nf, na);
nf.prototype.message = "Already called";
var rf = s.window;
function sf() {
  return!0
}
;function tf(a) {
  this.H = a;
  this.Mc = [];
  this.Pd = [];
  this.Tf = B(this.Of, this)
}
tf.prototype.Nf = k;
tf.prototype.Of = function() {
  this.Nf = k;
  var a = this.Mc;
  this.Mc = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], f = c[1], c = c[2];
    try {
      d.apply(f, c)
    }catch(g) {
      this.H.setTimeout(function() {
        e(g)
      }, 0)
    }
  }
  if(this.Mc.length == 0) {
    a = this.Pd;
    this.Pd = [];
    for(b = 0;b < a.length;b++) {
      a[b].ob(k)
    }
  }
};
new tf(s.window);
function uf() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ C()).toString(36)
}
function vf(a) {
  return a.substr(0, a.length - 1)
}
var wf = /^(0|[1-9]\d*)$/, xf = /^(0|\-?[1-9]\d*)$/;
function yf(a) {
  var b = zf;
  if(wf.test(a) && (a = parseInt(a, 10), a <= b)) {
    return a
  }
  return k
}
;function Af() {
}
Af.prototype.Ub = k;
function Bf() {
  return Cf(Df)
}
var Df;
function Ef() {
}
D(Ef, Af);
function Cf(a) {
  return(a = Ff(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Gf(a) {
  var b = {};
  Ff(a) && (b[0] = !0, b[1] = !0);
  return b
}
Ef.prototype.Tc = k;
function Ff(a) {
  if(!a.Tc && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Tc = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Tc
}
Df = new Ef;
function Hf() {
  if(Wb) {
    this.Aa = {}, this.Bc = {}, this.yc = []
  }
}
Hf.prototype.g = G("goog.net.xhrMonitor");
Hf.prototype.O = Wb;
Hf.prototype.Lb = function(a) {
  this.O = Wb && a
};
function If(a) {
  var b = Jf;
  b.O && b.yc.push(w(a) ? a : ha(a) ? z(a) : "")
}
function Kf() {
  var a = Jf;
  a.O && Lf(a, a.yc.pop())
}
function Mf(a) {
  var b = Jf;
  if(b.O) {
    for(var a = z(a), c = 0;c < b.yc.length;c++) {
      var d = b.yc[c];
      Nf(b.Aa, d, a);
      Nf(b.Bc, a, d)
    }
  }
}
function Lf(a, b) {
  var c = a.Bc[b], d = a.Aa[b];
  c && d && Ca(c, function(a) {
    Ca(d, function(b) {
      Nf(this.Aa, a, b);
      Nf(this.Bc, b, a)
    }, this)
  }, a)
}
function Nf(a, b, c) {
  a[b] || (a[b] = []);
  Ga(a[b], c) || a[b].push(c)
}
var Jf = new Hf;
function Of(a) {
  L.call(this);
  this.headers = new ab;
  this.mb = a || k
}
D(Of, he);
Of.prototype.g = G("goog.net.XhrIo");
var Pf = /^https?:?$/i;
r = Of.prototype;
r.ka = !1;
r.e = k;
r.Ac = k;
r.kc = "";
r.qf = "";
r.Ab = 0;
r.ic = "";
r.Lc = !1;
r.fc = !1;
r.Uc = !1;
r.Fa = !1;
r.td = 0;
r.Ja = k;
r.Ee = "";
r.Qf = !1;
r.send = function(a, b, c, d) {
  this.e && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.kc = a;
  this.ic = "";
  this.Ab = 0;
  this.qf = b;
  this.Lc = !1;
  this.ka = !0;
  this.e = this.mb ? Cf(this.mb) : new Bf;
  this.Ac = this.mb ? this.mb.Ub || (this.mb.Ub = Gf(this.mb)) : Df.Ub || (Df.Ub = Gf(Df));
  Mf(this.e);
  this.e.onreadystatechange = B(this.te, this);
  try {
    this.Uc = !0, this.e.open(b, a, !0), this.Uc = !1
  }catch(f) {
    Qf(this, f);
    return
  }
  var a = c || "", g = this.headers.M();
  d && Za(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.I("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Za(g, function(a, b) {
    this.e.setRequestHeader(b, a)
  }, this);
  if(this.Ee) {
    this.e.responseType = this.Ee
  }
  if("withCredentials" in this.e) {
    this.e.withCredentials = this.Qf
  }
  try {
    if(this.Ja) {
      rf.clearTimeout(this.Ja), this.Ja = k
    }
    if(this.td > 0) {
      this.Ja = rf.setTimeout(B(this.Mf, this), this.td)
    }
    this.fc = !0;
    this.e.send(a);
    this.fc = !1
  }catch(i) {
    Qf(this, i)
  }
};
r.dispatchEvent = function(a) {
  if(this.e) {
    If(this.e);
    try {
      return Of.c.dispatchEvent.call(this, a)
    }finally {
      Kf()
    }
  }else {
    return Of.c.dispatchEvent.call(this, a)
  }
};
r.Mf = function() {
  if(typeof ba != "undefined" && this.e) {
    this.ic = "Timed out after " + this.td + "ms, aborting", this.Ab = 8, this.dispatchEvent("timeout"), this.abort(8)
  }
};
function Qf(a, b) {
  a.ka = !1;
  if(a.e) {
    a.Fa = !0, a.e.abort(), a.Fa = !1
  }
  a.ic = b;
  a.Ab = 5;
  Rf(a);
  Sf(a)
}
function Rf(a) {
  if(!a.Lc) {
    a.Lc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
r.abort = function(a) {
  if(this.e && this.ka) {
    this.ka = !1, this.Fa = !0, this.e.abort(), this.Fa = !1, this.Ab = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Sf(this)
  }
};
r.a = function() {
  if(this.e) {
    if(this.ka) {
      this.ka = !1, this.Fa = !0, this.e.abort(), this.Fa = !1
    }
    Sf(this, !0)
  }
  Of.c.a.call(this)
};
r.te = function() {
  !this.Uc && !this.fc && !this.Fa ? this.wf() : Tf(this)
};
r.wf = function() {
  Tf(this)
};
function Tf(a) {
  if(a.ka && typeof ba != "undefined" && (!a.Ac[1] || !(a.pa() == 4 && Vf(a) == 2))) {
    if(a.fc && a.pa() == 4) {
      rf.setTimeout(B(a.te, a), 0)
    }else {
      if(a.dispatchEvent("readystatechange"), a.pa() == 4) {
        a.ka = !1;
        var b;
        a: {
          switch(Vf(a)) {
            case 0:
              b = (b = w(a.kc) ? a.kc.match(Qe)[1] || k : a.kc.ia) ? Pf.test(b) : self.location ? Pf.test(self.location.protocol) : !0;
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
          a.Ab = 6;
          var c;
          try {
            c = a.pa() > 2 ? a.e.statusText : ""
          }catch(d) {
            c = ""
          }
          a.ic = c + " [" + Vf(a) + "]";
          Rf(a)
        }
        Sf(a)
      }
    }
  }
}
function Sf(a, b) {
  if(a.e) {
    var c = a.e, d = a.Ac[0] ? t : k;
    a.e = k;
    a.Ac = k;
    if(a.Ja) {
      rf.clearTimeout(a.Ja), a.Ja = k
    }
    b || (If(c), a.dispatchEvent("ready"), Kf());
    var f = Jf;
    if(f.O) {
      var g = z(c);
      delete f.Bc[g];
      for(var i in f.Aa) {
        Ha(f.Aa[i], g), f.Aa[i].length == 0 && delete f.Aa[i]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(j) {
      Fb(a.g, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
r.ce = function() {
  return!!this.e
};
r.pa = function() {
  return this.e ? this.e.readyState : 0
};
function Vf(a) {
  try {
    return a.pa() > 2 ? a.e.status : -1
  }catch(b) {
    return Gb(a.g, "Can not get status: " + b.message), -1
  }
}
r.getResponseHeader = function(a) {
  return this.e && this.pa() == 4 ? this.e.getResponseHeader(a) : h
};
var Wf;
Wf = !1;
var Xf = Sb();
Xf && (Xf.indexOf("Firefox") != -1 || Xf.indexOf("Camino") != -1 || Xf.indexOf("iPhone") != -1 || Xf.indexOf("iPod") != -1 || Xf.indexOf("iPad") != -1 || Xf.indexOf("Android") != -1 || Xf.indexOf("Chrome") != -1 && (Wf = !0));
var Yf = Wf;
function Zf(a) {
  return x(a) || typeof a == "object" && x(a.call) && x(a.apply)
}
;function $f(a, b, c) {
  var d = Ba(c, a);
  if(d != -1) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = ea(a);
    if(d == "boolean" || d == "number" || d == "null" || d == "undefined") {
      b.push(String(a))
    }else {
      if(d == "string") {
        Fd(a, b)
      }else {
        if(Zf(a.A)) {
          a.A(b, c)
        }else {
          if(Zf(a.Ve)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if(d == "array") {
                d = a.length;
                b.push("[");
                for(var f = "", g = 0;g < d;g++) {
                  b.push(f), $f(a[g], b, c), f = ", "
                }
                b.push("]")
              }else {
                if(d == "object") {
                  if(ga(a) && typeof a.valueOf == "function") {
                    b.push("new Date(", String(a.valueOf()), ")")
                  }else {
                    for(var d = Ra(a).concat(Sa), f = {}, i = g = 0;i < d.length;) {
                      var j = d[i++], n = ha(j) ? "o" + z(j) : (typeof j).charAt(0) + j;
                      Object.prototype.hasOwnProperty.call(f, n) || (f[n] = !0, d[g++] = j)
                    }
                    d.length = g;
                    b.push("{");
                    f = "";
                    for(i = 0;i < d.length;i++) {
                      g = d[i], Object.prototype.hasOwnProperty.call(a, g) && (j = a[g], b.push(f), Fd(g, b), b.push(": "), $f(j, b, c), f = ", ")
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
function U(a, b, c) {
  c || (c = []);
  $f(a, b, c)
}
function V(a) {
  var b = [];
  U(a, b, h);
  return b.join("")
}
;function ag(a) {
  var b = ea(a);
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
;function bg(a, b) {
  this.La = a;
  this.Ia = b
}
bg.prototype.k = function(a) {
  return a instanceof bg && this.La == a.La && this.Ia.join(",") == a.Ia
};
bg.prototype.A = function(a, b) {
  a.push("new SACK(", String(this.La), ", ");
  U(this.Ia, a, b);
  a.push(")")
};
function cg() {
  this.G = new ab
}
r = cg.prototype;
r.Na = -1;
r.xa = 0;
r.append = function(a) {
  var b = ag(a);
  this.G.set(this.Na + 1, [a, b]);
  this.Na += 1;
  this.xa += b
};
r.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
r.A = function(a) {
  a.push("<Queue with ", String(this.G.r()), " item(s), counter=#", String(this.Na), ", size=", String(this.xa), ">")
};
function dg(a) {
  bb(a.G);
  Na(a.G.b);
  return a.G.b
}
function eg() {
  this.ya = new ab
}
eg.prototype.Za = -1;
eg.prototype.xa = 0;
function fg(a) {
  var b = a.ya.fa();
  Na(b);
  return new bg(a.Za, b)
}
var gg = {};
var zf = Math.pow(2, 53);
function hg(a, b, c) {
  L.call(this);
  this.za = b;
  this.S = a;
  this.Hc = c
}
D(hg, L);
r = hg.prototype;
r.g = G("cw.net.XHRMaster");
r.wa = -1;
r.$c = function(a, b, c) {
  this.Hc.__XHRSlave_makeRequest(this.S, a, b, c)
};
r.pa = m("wa");
r.ed = function(a, b) {
  b != ig && Fb(this.g, V(this.S) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  jg(this.za);
  a: {
    var c = this.za;
    c.xc = !0;
    try {
      for(var d = !1, f = [], g = 0, i = a.length;g < i;g++) {
        if(c.aa) {
          c.g.info(c.W() + " returning from loop because we're disposed.");
          break a
        }
        if(d = kg(c, a[g], f)) {
          break
        }
      }
      f.length && lg(c, f);
      c.xc = !1;
      c.z.length && c.ea();
      d && c.d()
    }finally {
      c.xc = !1
    }
  }
};
r.fd = function(a) {
  var b = k;
  "Content-Length" in a && (b = yf(a["Content-Length"]));
  a = this.za;
  a.Z == mg && (b == k && (Gb(a.g, "Expected to receive a valid Content-Length, but did not."), b = 5E5), ng(a, 2E3 + b / 3072 * 1E3))
};
r.gd = function(a) {
  this.wa = a;
  this.wa >= 2 && jg(this.za)
};
r.dd = function() {
  this.za.d()
};
r.a = function() {
  hg.c.a.call(this);
  delete W.ha[this.S];
  this.Hc.__XHRSlave_dispose(this.S);
  delete this.Hc
};
function og() {
  L.call(this);
  this.ha = {}
}
r = og.prototype;
r.g = G("cw.net.XHRMasterTracker");
r.Id = function(a, b) {
  var c = "_" + uf(), d = new hg(c, a, b);
  return this.ha[c] = d
};
r.ed = function(a, b, c) {
  var b = Ia(b), d = this.ha[a];
  d ? d.ed(b, c) : Fb(this.g, "onframes_: no master for " + V(a))
};
r.fd = function(a, b) {
  var c = this.ha[a];
  c ? c.fd(b) : Fb(this.g, "ongotheaders_: no master for " + V(a))
};
r.gd = function(a, b) {
  var c = this.ha[a];
  c ? c.gd(b) : Fb(this.g, "onreadystatechange_: no master for " + V(a))
};
r.dd = function(a) {
  var b = this.ha[a];
  b ? (delete this.ha[b.S], b.dd()) : Fb(this.g, "oncomplete_: no master for " + V(a))
};
r.a = function() {
  og.c.a.call(this);
  for(var a = Qa(this.ha);a.length;) {
    a.pop().d()
  }
  delete this.ha
};
var W = new og;
s.__XHRMaster_onframes = B(W.ed, W);
s.__XHRMaster_oncomplete = B(W.dd, W);
s.__XHRMaster_ongotheaders = B(W.fd, W);
s.__XHRMaster_onreadystatechange = B(W.gd, W);
function pg() {
  qg.info("Waiting for XDRFrames (may take a while)...");
  var a = new lf, b = s.__XDRSetup.done.length, c;
  s.__XDRSetup.done = {push:function() {
    b += 1;
    c = 2 - b;
    c || (qg.info("Got XDRFrames after waiting."), a.ob(k))
  }};
  c = 2 - b;
  c || (qg.info("Already had all XDRFrames."), a.ob(k));
  return a
}
var qg = G("cw.net.waitForXDRFrames");
G("cw.net.FlashSocket");
G("cw.net.FlashSocketTracker");
function rg(a) {
  L.call(this);
  this.za = a;
  this.Fc = []
}
D(rg, L);
rg.prototype.g = G("cw.net.FlashSocketConduit");
rg.prototype.Ad = function(a) {
  !this.Fc ? this.pd.Ad(a) : this.Fc.push.apply(this.Fc, a)
};
rg.prototype.Ed = function(a, b) {
  this.pd.Ed(a, b)
};
rg.prototype.a = function() {
  this.g.info("in disposeInternal.");
  rg.c.a.call(this);
  this.pd.d();
  delete this.za
};
var sg = {Ve:p("<cw.eq.Wildcard>")};
function tg(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function ug(a, b, c) {
  var d = ea(a), f = ea(b);
  if(a == sg || b == sg) {
    return!0
  }else {
    if(a != k && typeof a.k == "function") {
      return c && c.push("running custom equals function on left object"), a.k(b, c)
    }else {
      if(b != k && typeof b.k == "function") {
        return c && c.push("running custom equals function on right object"), b.k(a, c)
      }else {
        if(tg(d) || tg(f)) {
          a = a === b
        }else {
          if(a instanceof RegExp && b instanceof RegExp) {
            a = a.toString() === b.toString()
          }else {
            if(ga(a) && ga(b)) {
              a = a.valueOf() === b.valueOf()
            }else {
              if(d == "array" && f == "array") {
                a: {
                  if(c && c.push("descending into array"), a.length != b.length) {
                    c && c.push("array length mismatch: " + a.length + ", " + b.length), a = !1
                  }else {
                    d = 0;
                    for(f = a.length;d < f;d++) {
                      if(!ug(a[d], b[d], c)) {
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
                if(a.Ue == sf && b.Ue == sf) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = !1;
                        break a
                      }
                      if(!ug(a[g], b[g], c)) {
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
;function X(a) {
  na.call(this, a)
}
D(X, na);
X.prototype.name = "cw.net.InvalidFrame";
function Y() {
  var a = [];
  this.P(a);
  return a.join("")
}
function vg() {
}
vg.prototype.k = function(a, b) {
  if(!(a instanceof vg)) {
    return!1
  }
  return ug(wg(this), wg(a), b)
};
vg.prototype.A = function(a, b) {
  a.push("<HelloFrame properties=");
  U(wg(this), a, b);
  a.push(">")
};
function wg(a) {
  return[a.lb, a.xe, a.$d, a.Ce, a.Pb, a.Jd, a.sd, a.re, a.ne, a.ad, a.le, a.Pe, a.Je, a.T, a.jc]
}
vg.prototype.N = Y;
vg.prototype.P = function(a) {
  var b = {};
  b.tnum = this.lb;
  b.ver = this.xe;
  b.format = this.$d;
  b["new"] = this.Ce;
  b.id = this.Pb;
  b.cred = this.Jd;
  b.ming = this.sd;
  b.pad = this.re;
  b.maxb = this.ne;
  if(u(this.ad)) {
    b.maxt = this.ad
  }
  b.maxia = this.le;
  b.tcpack = this.Pe;
  b.eeds = this.Je;
  b.sack = this.T instanceof bg ? vf((new Z(this.T)).N()) : this.T;
  b.seenack = this.jc instanceof bg ? vf((new Z(this.jc)).N()) : this.jc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push((new Dd).Kb(b), "H")
};
function xg(a) {
  this.kb = a
}
xg.prototype.k = function(a) {
  return a instanceof xg && this.kb == a.kb
};
xg.prototype.A = function(a, b) {
  a.push("new StringFrame(");
  U(this.kb, a, b);
  a.push(")")
};
xg.prototype.N = Y;
xg.prototype.P = function(a) {
  a.push(this.kb, " ")
};
function yg(a) {
  this.Xb = a
}
yg.prototype.k = function(a) {
  return a instanceof yg && this.Xb == a.Xb
};
yg.prototype.A = function(a, b) {
  a.push("new CommentFrame(");
  U(this.Xb, a, b);
  a.push(")")
};
yg.prototype.N = Y;
yg.prototype.P = function(a) {
  a.push(this.Xb, "^")
};
function zg(a) {
  this.Jb = a
}
zg.prototype.k = function(a) {
  return a instanceof zg && this.Jb == a.Jb
};
zg.prototype.A = function(a) {
  a.push("new SeqNumFrame(", String(this.Jb), ")")
};
zg.prototype.N = Y;
zg.prototype.P = function(a) {
  a.push(String(this.Jb), "N")
};
function Ag(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return k
  }
  a: {
    var c = b[1], a = zf;
    if(xf.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
      var g = yf(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new bg(a, c)
}
function Z(a) {
  this.T = a
}
Z.prototype.k = function(a, b) {
  return a instanceof Z && this.T.k(a.T, b)
};
Z.prototype.A = function(a, b) {
  a.push("new SackFrame(");
  U(this.T, a, b);
  a.push(")")
};
Z.prototype.N = Y;
Z.prototype.P = function(a) {
  var b = this.T;
  a.push(b.Ia.join(","), "|", String(b.La));
  a.push("A")
};
function Bg(a) {
  this.Bb = a
}
Bg.prototype.k = function(a, b) {
  return a instanceof Bg && this.Bb.k(a.Bb, b)
};
Bg.prototype.A = function(a, b) {
  a.push("new StreamStatusFrame(");
  U(this.Bb, a, b);
  a.push(")")
};
Bg.prototype.N = Y;
Bg.prototype.P = function(a) {
  var b = this.Bb;
  a.push(b.Ia.join(","), "|", String(b.La));
  a.push("T")
};
function Cg() {
}
Cg.prototype.A = function(a) {
  a.push("new StreamCreatedFrame()")
};
Cg.prototype.k = function(a) {
  return a instanceof Cg
};
Cg.prototype.N = Y;
Cg.prototype.P = function(a) {
  a.push("C")
};
function Dg() {
}
Dg.prototype.A = function(a) {
  a.push("new YouCloseItFrame()")
};
Dg.prototype.k = function(a) {
  return a instanceof Dg
};
Dg.prototype.N = Y;
Dg.prototype.P = function(a) {
  a.push("Y")
};
function Eg(a, b) {
  this.Fb = a;
  this.nb = b
}
Eg.prototype.k = function(a) {
  return a instanceof Eg && this.Fb == a.Fb && this.nb == a.nb
};
Eg.prototype.A = function(a, b) {
  a.push("new ResetFrame(");
  U(this.Fb, a, b);
  a.push(", ", String(this.nb), ")")
};
Eg.prototype.N = Y;
Eg.prototype.P = function(a) {
  a.push(this.Fb, "|", String(Number(this.nb)), "!")
};
var Fg = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Gg(a) {
  this.reason = a
}
Gg.prototype.k = function(a) {
  return a instanceof Gg && this.reason == a.reason
};
Gg.prototype.A = function(a, b) {
  a.push("new TransportKillFrame(");
  U(this.reason, a, b);
  a.push(")")
};
Gg.prototype.N = Y;
Gg.prototype.P = function(a) {
  a.push(this.reason, "K")
};
function Hg(a) {
  a || e(new X("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new xg(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = Ag(vf(a)), a == k && e(new X("bad sack")), new Z(a)
    }else {
      if(b == "N") {
        return a = yf(vf(a)), a == k && e(new X("bad seqNum")), new zg(a)
      }else {
        if(b == "T") {
          return a = Ag(vf(a)), a == k && e(new X("bad lastSackSeen")), new Bg(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && e(new X("leading garbage")), new Dg
          }else {
            if(b == "^") {
              return new yg(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && e(new X("leading garbage")), new Cg
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && e(new X("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == k && e(new X("bad applicationLevel")), new Eg(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = Fg[a], a == k && e(new X("unknown kill reason: " + a)), new Gg(a)
                  }else {
                    e(new X("Invalid frame type " + b))
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
;function Ig(a, b, c, d) {
  this.pc = a;
  this.we = b;
  this.tc = c;
  this.Ge = d;
  (!(this.pc.indexOf("http://") == 0 || this.pc.indexOf("https://") == 0) || !(this.tc.indexOf("http://") == 0 || this.tc.indexOf("https://") == 0)) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.we.location.href;
  Re(this.pc, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Ge.location.href;
  Re(this.tc, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
var Jg = new yg(";)]}");
function Kg(a, b, c, d) {
  L.call(this);
  this.C = a;
  this.ye = b;
  this.ca = c;
  this.dg = d;
  this.Qb = new fb;
  this.Pb = uf() + uf();
  this.va = new cg;
  this.Vc = new eg;
  this.Tb = k;
  if(I) {
    this.Tb = vd(s, "load", this.Cf, !1, this)
  }
}
D(Kg, he);
r = Kg.prototype;
r.g = G("cw.net.Stream");
r.he = new bg(-1, []);
r.ie = new bg(-1, []);
r.tf = 50;
r.sf = 1048576;
r.qd = !1;
r.ld = !1;
r.j = 1;
r.Ne = -1;
r.i = k;
r.u = k;
r.Gb = k;
r.rd = 0;
r.ve = 0;
r.Fe = 0;
r.yf = !0;
r.A = function(a, b) {
  a.push("<Stream id=");
  U(this.Pb, a, b);
  a.push(", state=", String(this.j));
  a.push(", primary=");
  U(this.i, a, b);
  a.push(", secondary=");
  U(this.u, a, b);
  a.push(", resetting=");
  U(this.Gb, a, b)
};
function Lg(a) {
  var b = [-1];
  a.i && b.push(a.i.bb);
  a.u && b.push(a.u.bb);
  return Math.max.apply(Math.max, b)
}
function Mg(a) {
  if(a.j != 1) {
    var b = a.va.G.r() != 0, c = fg(a.Vc), d = !c.k(a.ie) && !(a.i && c.k(a.i.$a) || a.u && c.k(a.u.$a)), f = Lg(a);
    if((b = b && f < a.va.Na) || d) {
      if(a.i.pb) {
        if(d && (d = a.i, c != d.$a)) {
          !d.ja && !d.z.length && Ng(d), d.z.push(new Z(c)), d.$a = c
        }
        b && Og(a.i, a.va, f + 1);
        a.i.ea()
      }else {
        if(a.u == k) {
          a.qd ? (a.u = Pg(a, !1), b && Og(a.u, a.va, f + 1), a.u.ea()) : a.ld = !0
        }
      }
    }
  }
}
r.Cf = function() {
  this.Tb = k;
  if(this.i && this.i.Wa()) {
    this.g.info("restartHttpRequests_: aborting primary");
    var a = this.i;
    a.Cc = !0;
    a.d()
  }
  if(this.u && this.u.Wa()) {
    this.g.info("restartHttpRequests_: aborting secondary"), a = this.u, a.Cc = !0, a.d()
  }
};
function Qg(a, b) {
  a.j > 2 && e(Error("sendStrings: Can't send strings in state " + a.j));
  if(b.length) {
    if(a.yf) {
      for(var c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || e(Error("sendStrings: string #" + c + " has illegal chars: " + V(d)))
      }
    }
    a.va.extend(b);
    Mg(a)
  }
}
function Pg(a, b) {
  var c;
  a.ca instanceof Ig ? c = (Boolean(Number((new Se(document.location)).Q.get("httpStreaming", "0"))) ? 2 : 1) == 1 ? mg : Rg : e(Error("Don't support endpoint " + V(a.ca)));
  a.Ne += 1;
  c = new Sg(a.C, a, a.Ne, c, a.ca, b);
  a.Qb.add(c);
  return c
}
function Tg(a, b, c) {
  b = new Ug(a.C, a, b, c);
  a.Qb.add(b);
  return b
}
function Vg(a, b) {
  a.Qb.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  b.oc ? a.rd += b.oc : a.rd = 0;
  a.rd >= 1 && (a.g.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), Wg("stream penalty reached limit", !1), a.d());
  if(a.j > 2) {
    a.j == 3 && b.Te && a.d()
  }else {
    var c;
    var d;
    d = b instanceof Ug;
    if(!d && b.Cc) {
      c = I ? Yf ? [0, 1] : [9, 20] : [0, 0], d = c[0], c = c[1]
    }else {
      c = b.Fd();
      var f;
      if(b == a.i) {
        if(c) {
          f = ++a.ve
        }else {
          if(!d) {
            f = a.ve = 0
          }
        }
      }else {
        if(c) {
          f = ++a.Fe
        }else {
          if(!d) {
            f = a.Fe = 0
          }
        }
      }
      c = d || !f ? d = 0 : (d = Math.max(0, 2E3 * Math.min(f, 3) + (Math.floor(Math.random() * 4E3) - 2E3) - Math.max(0, b.Oe - b.ud))) ? 1 : 0
    }
    c = [d, c];
    d = c[0];
    c = c[1];
    if(b == a.i) {
      a.i = k, c ? a.i = Tg(a, d, c) : (d = Lg(a), a.i = Pg(a, !0), Og(a.i, a.va, d + 1)), a.i.ea()
    }else {
      if(b == a.u) {
        a.u = k, c ? (a.u = Tg(a, d, c), a.u.ea()) : Mg(a)
      }
    }
  }
}
r.reset = function(a) {
  this.j > 2 && e(Error("reset: Can't send reset in state " + this.j));
  this.j = 3;
  this.i && this.i.pb ? (this.g.info("reset: Sending ResetFrame over existing primary."), Xg(this.i, a), this.i.ea()) : (this.i && this.i.d(), this.u && this.u.d(), this.g.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Gb = Pg(this, !1), Xg(this.Gb, a), this.Gb.ea());
  Wg(a, !0)
};
function Yg(a, b, c, d) {
  var f;
  f = a.Vc;
  for(var g = a.tf, i = a.sf, j = [], n = !1, l = 0, y = c.length;l < y;l++) {
    var o = c[l], q = o[0], o = o[1];
    if(q == f.Za + 1) {
      f.Za += 1;
      for(j.push(o);;) {
        q = f.Za + 1;
        o = f.ya.get(q, gg);
        if(o === gg) {
          break
        }
        j.push(o[0]);
        f.ya.remove(q);
        f.xa -= o[1];
        f.Za = q
      }
    }else {
      if(!(q <= f.Za)) {
        if(g != k && f.ya.r() >= g) {
          n = !0;
          break
        }
        var A = ag(o);
        if(i != k && f.xa + A > i) {
          n = !0;
          break
        }
        f.ya.set(q, [o, A]);
        f.xa += A
      }
    }
  }
  f.ya.ra() && f.ya.clear();
  f = [j, n];
  c = f[0];
  f = f[1];
  if(c) {
    g = a.ye;
    for(i = 0;i < c.length;i++) {
      if(j = g, n = Cd(c[i]), l = n[1], n[0] == 1) {
        l = j.ue.Jc(Zg.wb(), l);
        j = Ud(l, 1);
        n = Ud(l, 2);
        l = Ud(l, 3);
        (j = oa(j)) || (j = "[No title]");
        y = $g(sa(l));
        q = document;
        l = q.createElement("div");
        H ? (l.innerHTML = "<br>" + y, l.removeChild(l.firstChild)) : l.innerHTML = y;
        if(l.childNodes.length == 1) {
          l = l.removeChild(l.firstChild)
        }else {
          for(y = q.createDocumentFragment();l.firstChild;) {
            y.appendChild(l.firstChild)
          }
          l = y
        }
        j = Dc("span", {}, Dc("a", {href:n, "class":"ljpost-title-link"}, j), Dc("span", {}, "\u00a0"), l);
        ah(j)
      }
    }
  }
  a.j == 3 || a.aa || (d || Mg(a), f && a.j == 2 && (Fb(b.g, b.W() + "'s peer caused rwin overflow."), b.d()))
}
r.start = function() {
  this.j = 2;
  this.i = Pg(this, !0);
  Og(this.i, this.va, k);
  this.i.ea()
};
r.a = function() {
  this.g.info(V(this) + " in disposeInternal.");
  this.j = 4;
  for(var a = this.Qb.D(), b = 0;b < a.length;b++) {
    a[b].d()
  }
  this.dispatchEvent({type:"c"});
  if(I && this.Tb) {
    P(this.Tb), this.Tb = k
  }
  delete this.Qb;
  delete this.i;
  delete this.u;
  delete this.Gb;
  delete this.ye;
  Kg.c.a.call(this)
};
var mg = 1, Rg = 2, bh = 3;
function Sg(a, b, c, d, f, g) {
  L.call(this);
  this.C = a;
  this.v = b;
  this.lb = c;
  this.Z = d;
  this.ca = f;
  this.z = [];
  this.Ma = g;
  this.pb = !this.Wa();
  this.hb = this.Z != mg;
  this.Xe = B(this.Lf, this)
}
D(Sg, L);
r = Sg.prototype;
r.g = G("cw.net.ClientTransport");
r.n = k;
r.ud = k;
r.Oe = k;
r.qc = k;
r.ja = !1;
r.xc = !1;
r.$a = k;
r.Qc = 0;
r.bb = -1;
r.hd = -1;
r.Te = !1;
r.Cc = !1;
r.oc = 0;
r.yb = !1;
r.A = function(a) {
  a.push("<ClientTransport #", String(this.lb), ", becomePrimary=", String(this.Ma), ">")
};
r.W = function() {
  return(this.Ma ? "Prim. T#" : "Sec. T#") + this.lb
};
r.Fd = function() {
  return!(!this.yb && this.Qc)
};
r.Wa = function() {
  return this.Z == mg || this.Z == Rg
};
function lg(a, b) {
  Na(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Yg(a.v, a, b, !a.hb)
}
function kg(a, b, c) {
  try {
    var d = Hg(b);
    a.Qc += 1;
    var f;
    a.Qc == 1 && !d.k(Jg) && a.Wa() ? (Gb(a.g, a.W() + " is closing soon because got bad preamble: " + V(d)), f = !0) : f = !1;
    if(f) {
      return!0
    }
    if(d instanceof xg) {
      if(!/^([ -~]*)$/.test(d.kb)) {
        return a.yb = !0
      }
      a.hd += 1;
      c.push([a.hd, d.kb])
    }else {
      if(d instanceof Z) {
        var g = a.v, i = d.T;
        g.he = i;
        var j = g.va, n = i.La, c = !1;
        n > j.Na && (c = !0);
        for(var l = dg(j).concat(), d = 0;d < l.length;d++) {
          var y = l[d];
          if(y > n) {
            break
          }
          var o = j.G.m[y][1];
          j.G.remove(y);
          j.xa -= o
        }
        for(d = 0;d < i.Ia.length;d++) {
          var q = i.Ia[d];
          q > j.Na && (c = !0);
          j.G.I(q) && (o = j.G.m[q][1], j.G.remove(q), j.xa -= o)
        }
        j.G.ra() && j.G.clear();
        if(c) {
          return Gb(a.g, a.W() + " is closing soon because got bad SackFrame"), a.yb = !0
        }
      }else {
        if(d instanceof zg) {
          a.hd = d.Jb - 1
        }else {
          if(d instanceof Bg) {
            a.v.ie = d.Bb
          }else {
            if(d instanceof Dg) {
              return!0
            }else {
              if(d instanceof Gg) {
                return a.yb = !0, d.reason == "stream_attach_failure" ? a.oc += 1 : d.reason == "acked_unsent_strings" && (a.oc += 0.5), !0
              }else {
                if(!(d instanceof yg)) {
                  if(d instanceof Cg) {
                    var A = a.v, Fh = !a.hb;
                    A.qd = !0;
                    if(A.ld && !Fh) {
                      A.ld = !1, Mg(A)
                    }
                  }else {
                    if(c.length) {
                      lg(a, c);
                      if(!v(c)) {
                        for(var Qd = c.length - 1;Qd >= 0;Qd--) {
                          delete c[Qd]
                        }
                      }
                      c.length = 0
                    }
                    if(d instanceof Eg) {
                      var Gh = a.v;
                      Wg(d.Fb, d.nb);
                      Gh.d();
                      return!0
                    }else {
                      e(Error(a.W() + " had unexpected state in framesReceived_."))
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }catch(Uf) {
    return Uf instanceof X || e(Uf), Gb(a.g, a.W() + " is closing soon because got InvalidFrame: " + V(b)), a.yb = !0
  }
  return!1
}
r.Lf = function() {
  Gb(this.g, this.W() + " timed out due to lack of connection or no data being received.");
  this.d()
};
function ch(a) {
  if(a.qc != k) {
    a.C.H.clearTimeout(a.qc), a.qc = k
  }
}
function ng(a, b) {
  ch(a);
  b = Math.round(b);
  a.qc = a.C.H.setTimeout(a.Xe, b)
}
function jg(a) {
  a.Z != mg && (a.Z == bh || a.Z == Rg ? ng(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.Z)))
}
function Ng(a) {
  var b = new vg;
  b.lb = a.lb;
  b.xe = 2;
  b.$d = 2;
  if(!a.v.qd) {
    b.Ce = !0;
    var c = dh.get(window.location.protocol == "https:" ? "_s" : "__");
    b.Jd = (u(c) ? c : k) + "|" + s.CSRF_TOKEN
  }
  b.Pb = a.v.Pb;
  b.sd = a.hb;
  if(b.sd) {
    b.re = 4096
  }
  b.ne = 3E5;
  b.le = a.hb ? Math.floor(10) : 0;
  b.Pe = !1;
  if(a.Ma) {
    b.Je = k, b.ad = Math.floor((a.hb ? 358E4 : 25E3) / 1E3)
  }
  b.T = fg(a.v.Vc);
  b.jc = a.v.he;
  a.z.push(b);
  a.$a = b.T
}
r.ea = function() {
  this.ja && !this.pb && e(Error("flush_: Can't flush more than once to this transport."));
  if(!this.xc) {
    var a = this.ja;
    this.ja = !0;
    !a && !this.z.length && Ng(this);
    for(a = 0;a < this.z.length;a++) {
    }
    if(this.Wa()) {
      for(var a = [], b = 0, c = this.z.length;b < c;b++) {
        this.z[b].P(a), a.push("\n")
      }
      this.z = [];
      a = a.join("");
      b = this.Ma ? this.ca.pc : this.ca.tc;
      this.n = W.Id(this, this.Ma ? this.ca.we : this.ca.Ge);
      this.ud = this.C.H === rf ? C() : this.C.H.getTime();
      this.n.$c(b, "POST", a);
      ng(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.hb ? 0 : this.Ma ? 25E3 : 2))
    }else {
      if(this.Z == bh) {
        a = [];
        b = 0;
        for(c = this.z.length;b < c;b++) {
          a.push(this.z[b].N())
        }
        this.z = [];
        this.n ? this.n.Ad(a) : (b = this.ca, this.n = new rg(this), this.n.pd = b.eg.Id(this.n), this.ud = this.C.H === rf ? C() : this.C.H.getTime(), this.n.Ed(b.host, b.port), this.n.aa || (this.n.Ad(a), this.n.aa || ng(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.Z))
      }
    }
  }
};
function Og(a, b, c) {
  !a.ja && !a.z.length && Ng(a);
  for(var d = Math.max(c, a.bb + 1), f = dg(b), c = [], g = 0;g < f.length;g++) {
    var i = f[g];
    (d == k || i >= d) && c.push([i, b.G.m[i][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], f = g[0], g = g[1], (a.bb == -1 || a.bb + 1 != f) && a.z.push(new zg(f)), a.z.push(new xg(g)), a.bb = f
  }
}
r.a = function() {
  this.g.info(this.W() + " in disposeInternal.");
  Sg.c.a.call(this);
  this.Oe = this.C.H === rf ? C() : this.C.H.getTime();
  this.z = [];
  ch(this);
  this.n && this.n.d();
  var a = this.v;
  this.v = k;
  Vg(a, this)
};
function Xg(a, b) {
  !a.ja && !a.z.length && Ng(a);
  a.z.push(new Eg(b, !0));
  a.Te = !0
}
function Ug(a, b, c, d) {
  L.call(this);
  this.C = a;
  this.v = b;
  this.Md = c;
  this.Hd = d
}
D(Ug, L);
r = Ug.prototype;
r.ja = !1;
r.pb = !1;
r.dc = k;
r.$a = k;
r.g = G("cw.net.DoNothingTransport");
function eh(a) {
  a.dc = a.C.H.setTimeout(function() {
    a.dc = k;
    a.Hd--;
    a.Hd ? eh(a) : a.d()
  }, a.Md)
}
r.ea = function() {
  this.ja && !this.pb && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.ja = !0;
  eh(this)
};
r.A = function(a) {
  a.push("<DoNothingTransport delay=", String(this.Md), ">")
};
r.Wa = p(!1);
r.W = p("Wast. T");
r.Fd = p(!1);
r.a = function() {
  this.g.info(this.W() + " in disposeInternal.");
  Ug.c.a.call(this);
  this.dc != k && this.C.H.clearTimeout(this.dc);
  var a = this.v;
  this.v = k;
  Vg(a, this)
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
s.__loadFlashObject_callbacks = {};
function fh(a) {
  this.B = a
}
var gh = /\s*;\s*/;
r = fh.prototype;
r.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && I) {
    var b = "COOKIES_TEST_" + C();
    dh.set(b, "1");
    if(!this.get(b)) {
      return!1
    }
    this.remove(b)
  }
  return a
};
r.set = function(a, b, c, d, f, g) {
  /[;=\s]/.test(a) && e(Error('Invalid cookie name "' + a + '"'));
  /[;\r\n]/.test(b) && e(Error('Invalid cookie value "' + b + '"'));
  u(c) || (c = -1);
  f = f ? ";domain=" + f : "";
  d = d ? ";path=" + d : "";
  g = g ? ";secure" : "";
  c = c < 0 ? "" : c == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(C() + c * 1E3)).toUTCString();
  this.vc(a + "=" + b + f + d + c + g)
};
r.get = function(a, b) {
  for(var c = a + "=", d = (this.Da() || "").split(gh), f = 0, g;g = d[f];f++) {
    if(g.indexOf(c) == 0) {
      return g.substr(c.length)
    }
  }
  return b
};
r.remove = function(a, b, c) {
  var d = this.I(a);
  this.set(a, "", 0, b, c);
  return d
};
r.fa = function() {
  return hh(this).ge
};
r.D = function() {
  return hh(this).Re
};
r.ra = function() {
  return!this.Da()
};
r.r = function() {
  if(!this.Da()) {
    return 0
  }
  return(this.Da() || "").split(gh).length
};
r.I = function(a) {
  return u(this.get(a))
};
r.qb = function(a) {
  for(var b = hh(this).Re, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return!0
    }
  }
  return!1
};
r.clear = function() {
  for(var a = hh(this).ge, b = a.length - 1;b >= 0;b--) {
    this.remove(a[b])
  }
};
r.vc = function(a) {
  this.B.cookie = a
};
r.Da = function() {
  return this.B.cookie
};
function hh(a) {
  for(var a = (a.Da() || "").split(gh), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), d == -1 ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{ge:b, Re:c}
}
var dh = new fh(document);
dh.Sf = 3950;
var ig = 1;
function ih(a, b) {
  this.Rf = a;
  this.me = b
}
ih.prototype.Xc = 0;
ih.prototype.mc = 0;
ih.prototype.Pc = !1;
function jh(a) {
  var b = [];
  if(a.Pc) {
    return[b, 2]
  }
  var c = a.Xc, d = a.Rf.responseText;
  for(a.Xc = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var f = d.substr(a.mc, c - a.mc), f = f.replace(/\r$/, "");
    if(f.length > a.me) {
      return a.Pc = !0, [b, 2]
    }
    b.push(f);
    a.mc = c += 1
  }
  return a.Xc - a.mc - 1 > a.me ? (a.Pc = !0, [b, 2]) : [b, ig]
}
;var kh = !(H || I && !J("420+"));
function lh(a, b) {
  this.Me = a;
  this.S = b
}
D(lh, L);
r = lh.prototype;
r.n = k;
r.wa = -1;
r.Rd = !1;
r.Zd = ["Content-Length", "Server", "Date", "Expires", "Keep-Alive", "Content-Type", "Transfer-Encoding", "Cache-Control"];
function mh(a) {
  var b = jh(a.Ld), c = b[0], b = b[1], d = s.parent;
  d ? (d.__XHRMaster_onframes(a.S, c, b), b != ig && a.d()) : a.d()
}
r.mf = function() {
  mh(this);
  if(!this.aa) {
    var a = s.parent;
    a && a.__XHRMaster_oncomplete(this.S);
    this.d()
  }
};
r.Bf = function() {
  var a = s.parent;
  if(a) {
    this.wa = this.n.pa();
    if(this.wa >= 2 && !this.Rd) {
      for(var b = new ab, c = this.Zd.length;c--;) {
        var d = this.Zd[c];
        try {
          b.set(d, this.n.e.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.r() && (this.Rd = !0, a.__XHRMaster_ongotheaders(this.S, eb(b)), this.aa)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.S, this.wa);
    kh && this.wa == 3 && mh(this)
  }else {
    this.d()
  }
};
r.$c = function(a, b, c) {
  this.n = new Of;
  O(this.n, "readystatechange", B(this.Bf, this));
  O(this.n, "complete", B(this.mf, this));
  this.n.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.Ld = new ih(this.n.e, 1048576)
};
r.a = function() {
  lh.c.a.call(this);
  delete this.Ld;
  this.n && this.n.d();
  delete this.Me.Ob[this.S];
  delete this.Me
};
function nh() {
  L.call(this);
  this.Ob = {}
}
D(nh, L);
nh.prototype.rf = function(a, b, c, d) {
  var f = new lh(this, a);
  this.Ob[a] = f;
  f.$c(b, c, d)
};
nh.prototype.bf = function(a) {
  (a = this.Ob[a]) && a.d()
};
nh.prototype.a = function() {
  nh.c.a.call(this);
  for(var a = Qa(this.Ob);a.length;) {
    a.pop().d()
  }
  delete this.Ob
};
var oh = new nh;
s.__XHRSlave_makeRequest = B(oh.rf, oh);
s.__XHRSlave_dispose = B(oh.bf, oh);
function ph() {
}
function qh() {
  new Se(document.location);
  var a = pg();
  of(a, function() {
    var a = K("xdrframe-1").contentWindow || (I ? K("xdrframe-1").document || K("xdrframe-1").contentWindow.document : K("xdrframe-1").contentDocument || K("xdrframe-1").contentWindow.document).parentWindow || (I ? K("xdrframe-1").document || K("xdrframe-1").contentWindow.document : K("xdrframe-1").contentDocument || K("xdrframe-1").contentWindow.document).defaultView, c = K("xdrframe-2").contentWindow || (I ? K("xdrframe-2").document || K("xdrframe-2").contentWindow.document : K("xdrframe-2").contentDocument || 
    K("xdrframe-2").contentWindow.document).parentWindow || (I ? K("xdrframe-2").document || K("xdrframe-2").contentWindow.document : K("xdrframe-2").contentDocument || K("xdrframe-2").contentWindow.document).defaultView;
    a || e(Error("could not get primaryWindow xdrframe"));
    c || e(Error("could not get secondaryWindow xdrframe"));
    var d = new Se(s.__XDRSetup.baseurl1);
    Xe(d, "/httpface/");
    var f = new Se(s.__XDRSetup.baseurl2);
    Xe(f, "/httpface/");
    return new Ig(d.toString(), a, f.toString(), c)
  });
  return a
}
;/*

 linkify - v0.3 - 6/27/2009
 http://benalman.com/code/test/js-linkify/

 Copyright (c) 2009 "Cowboy" Ben Alman
 Licensed under the MIT license
 http://benalman.com/about/license/

 Some regexps adapted from http://userscripts.org/scripts/review/7122
*/
var rh, sh, th, uh;
rh = RegExp("(?:\\b[a-z\\d.-]+://[^<>\\s]+|\\b(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:[;/][^#?<>\\s]*)?(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w)|(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w))", 
"ig");
sh = /^[a-z\d.-]+:\/\//i;
th = {"'":"`", ">":"<", ")":"(", "]":"[", "}":"{", "\u00bb":"\u00ab", "\u203a":"\u2039"};
uh = {ob:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, Ae:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
function $g(a) {
  var b;
  b = b || {};
  var c = [], d, f;
  for(f in uh) {
    u(b[f]) || (b[f] = uh[f])
  }
  for(;f = rh.exec(a);) {
    f = f[0];
    var g = rh.lastIndex, i = g - f.length;
    if(!/[\/:]/.test(a.charAt(i - 1))) {
      do {
        var j = f, n = f.substr(-1), l = th[n];
        if(l && (l = f.match(RegExp("\\" + l + "(?!$)", "g")), n = f.match(RegExp("\\" + n, "g")), (l ? l.length : 0) < (n ? n.length : 0))) {
          f = f.substr(0, f.length - 1), g--
        }
        b.Ae && (f = f.replace(b.Ae, function(a) {
          g -= a.length;
          return""
        }))
      }while(f.length && f !== j);
      j = f;
      sh.test(j) || (j = (j.indexOf("@") !== -1 ? !j.indexOf("mailto:") ? "" : "mailto:" : !j.indexOf("irc.") ? "irc://" : !j.indexOf("ftp.") ? "ftp://" : "http://") + j);
      d != i && (c.push([a.slice(d, i)]), d = g);
      c.push([f, j])
    }
  }
  c.push([a.substr(d)]);
  d = "";
  for(f = 0;f < c.length;f++) {
    d += b.ob.apply(s, c[f])
  }
  return d || a
}
;var vh;
function Zg() {
  Sd.apply(this)
}
D(Zg, Sd);
function wh() {
  Sd.apply(this)
}
D(wh, Sd);
Yd(Zg, {0:{name:"NewPost", Qd:"browsernode.ljstream_messages.NewPost"}, 1:{name:"title", Ra:9, type:String}, 2:{name:"url", Ra:9, type:String}, 3:{name:"body", Ra:9, type:String}, 4:{name:"num_images", Ra:5, type:Number}, 5:{name:"lang", Ra:9, type:String}});
Yd(wh, {0:{name:"SetPreferences", Qd:"browsernode.ljstream_messages.SetPreferences"}, 1:{name:"include_russian_posts", Ra:8, type:Boolean}});
var xh = G("ljstream.logger");
window.onerror = function(a, b, c) {
  Fb(xh, "window.onerror: message: " + V(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function yh() {
  this.ue = new ae
}
function Wg(a, b) {
  xh.info("streamReset: reasonString=" + V(a) + ", applicationLevel=" + b);
  zh("Disconnected from server.  Try reloading this page.");
  $ = k
}
function Ah(a) {
  xh.info("Sending preferences to server");
  var b;
  b = new wh;
  b.p[1] = K("include_russian_posts").checked;
  b = a.ue.Kb(b);
  Qg(a.v, [(new Dd).Kb([2, b])])
}
yh.prototype.reset = function(a) {
  xh.info("resetting with reason: " + a);
  this.v.reset(a)
};
var $ = k, Bh = new tf(s.window);
function zh(a) {
  a = Dc("span", {"class":"important-message"}, a);
  ah(a)
}
function Ch() {
  $ && ($.reset("idle timeout fired"), $ = k, zh("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var Dh = k;
function Eh() {
  Dh != k && Bh.H.clearTimeout(Dh);
  $ && (Dh = Bh.H.setTimeout(Ch, 6E5))
}
O(window, ["click", "focus", "keydown", "keypress"], Eh, !0);
var Cc = new xc, Hh = 0;
function ah(a) {
  a = Dc("div", {"class":"row-" + (Hh % 2 == 0 ? "even" : "odd")}, Dc("nobr", {}, a));
  K("ljstream-container-inner").appendChild(a);
  Hh += 1;
  var b;
  if(b = vh) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !I && d.compatMode == "CSS1Compat" ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new uc(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = Bc().height;
    b = !(a + b <= c + d)
  }
  if(b) {
    a = Bc().height, window.scrollBy(0, Math.round(a / 2) + 80)
  }
}
function Ih() {
  var a = new ph;
  $ = new yh;
  Eh();
  of(qh(), function(b) {
    $ || e(Error("lastProto falsy?"));
    b = new Kg(Bh, $, b, a);
    $.v = b;
    var c = $;
    Qg(c.v, ["subprotocol:ljstream"]);
    Ah(c);
    b.start();
    return k
  })
}
function Jh() {
  O(s, "load", function() {
    window.scrollTo(0, 0)
  });
  O(K("include_russian_posts"), "click", function() {
    Ah($)
  });
  vh = !0;
  O(K("automatic_scroll"), "click", function(a) {
    vh = a.target.checked
  });
  var a = new Pe("Clear posts");
  Fe(a, "clear-posts-button");
  oe(a);
  O(a, "action", function() {
    K("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = K("ljstream-container");
  a.style.marginTop = K("demo-header").offsetHeight + "px";
  K("demo-header").style.width = "9000px";
  var b = Dc("div", {id:"ljstream-container-inner"});
  a.appendChild(b)
}
function Kh() {
  Kb().Nb(Ab);
  if((new Se(document.location)).Q.get("logging") == "1") {
    var a = new Oc("main");
    a.Lb(!0);
    a.Ga()
  }
  xh.info("Logger works.");
  Jh();
  Ih()
}
var Lh = "__ljstream_init".split("."), Mh = s;
!(Lh[0] in Mh) && Mh.execScript && Mh.execScript("var " + Lh[0]);
for(var Nh;Lh.length && (Nh = Lh.shift());) {
  !Lh.length && u(Kh) ? Mh[Nh] = Kh : Mh = Mh[Nh] ? Mh[Nh] : Mh[Nh] = {}
}
;
})();
