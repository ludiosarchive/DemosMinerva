(function(){function e(a) {
  throw a;
}
var h = void 0, j = !0, k = null, m = !1;
function aa(a) {
  return function(b) {
    this[a] = b
  }
}
function n(a) {
  return function() {
    return this[a]
  }
}
function p(a) {
  return function() {
    return a
  }
}
var q, ba = ba || {}, s = this;
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
function da() {
}
function ea(a) {
  a.La = function() {
    return a.cf ? a.cf : a.cf = new a
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
function v(a) {
  return"array" == fa(a)
}
function ga(a) {
  var b = fa(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function ha(a) {
  return ia(a) && "function" == typeof a.getFullYear
}
function w(a) {
  return"string" == typeof a
}
function ja(a) {
  return"number" == typeof a
}
function ka(a) {
  return"function" == fa(a)
}
function ia(a) {
  var b = typeof a;
  return"object" == b && a != k || "function" == b
}
function la(a) {
  return a[ma] || (a[ma] = ++na)
}
var ma = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), na = 0;
function oa(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function pa(a, b, c) {
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
function y(a, b, c) {
  y = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? oa : pa;
  return y.apply(k, arguments)
}
function qa(a, b) {
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
  a.f = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function ra(a) {
  return ka(a) || "object" == typeof a && ka(a.call) && ka(a.apply)
}
;function sa(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
function ta(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function ua(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var va = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function wa(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < va.length;g++) {
      c = va[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function xa(a) {
  var b = [];
  ya(new za, a, b);
  return b.join("")
}
function za() {
  this.Sc = h
}
function ya(a, b, c) {
  switch(typeof b) {
    case "string":
      Aa(b, c);
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
          c.push(f), f = b[g], ya(a, a.Sc ? a.Sc.call(b, "" + g, f) : f, c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), Aa(g, c), c.push(":"), ya(a, a.Sc ? a.Sc.call(b, g, f) : f, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var Ba = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Ca = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Aa(a, b) {
  b.push('"', a.replace(Ca, function(a) {
    if(a in Ba) {
      return Ba[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
    return Ba[a] = f + b.toString(16)
  }), '"')
}
;function D(a) {
  this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
C(D, Error);
D.prototype.name = "CustomError";
function Da(a) {
  var b = a.length - 1;
  return 0 <= b && a.indexOf("%", b) == b
}
function Ea(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = ("" + arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
var Fa = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function Ga(a) {
  a = "" + a;
  return!Fa.test(a) ? encodeURIComponent(a) : a
}
function Ha(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function Ia(a) {
  if(!Ja.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(Ka, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(La, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Ma, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Na, "&quot;"));
  return a
}
var Ka = /&/g, La = /</g, Ma = />/g, Na = /\"/g, Ja = /[&<>\"]/;
function Oa(a) {
  return Ha(a.replace(/  /g, " &#160;"), h)
}
function Pa(a, b) {
  for(var c = 0, d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = ("" + b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(d.length, f.length), i = 0;0 == c && i < g;i++) {
    var l = d[i] || "", o = f[i] || "", r = RegExp("(\\d*)(\\D*)", "g"), z = RegExp("(\\d*)(\\D*)", "g");
    do {
      var t = r.exec(l) || ["", "", ""], x = z.exec(o) || ["", "", ""];
      if(0 == t[0].length && 0 == x[0].length) {
        break
      }
      c = ((0 == t[1].length ? 0 : parseInt(t[1], 10)) < (0 == x[1].length ? 0 : parseInt(x[1], 10)) ? -1 : (0 == t[1].length ? 0 : parseInt(t[1], 10)) > (0 == x[1].length ? 0 : parseInt(x[1], 10)) ? 1 : 0) || ((0 == t[2].length) < (0 == x[2].length) ? -1 : (0 == t[2].length) > (0 == x[2].length) ? 1 : 0) || (t[2] < x[2] ? -1 : t[2] > x[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
}
var Qa = 2147483648 * Math.random() | 0, Ra = {};
function Sa(a) {
  return Ra[a] || (Ra[a] = ("" + a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
}
;function Ta(a, b) {
  b.unshift(a);
  D.call(this, Ea.apply(k, b));
  b.shift()
}
C(Ta, D);
Ta.prototype.name = "AssertionError";
function Ua(a, b) {
  e(new Ta("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var E = Array.prototype, Va = E.indexOf ? function(a, b, c) {
  return E.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(w(a)) {
    return!w(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, F = E.forEach ? function(a, b, c) {
  E.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
}, Wa = E.filter ? function(a, b, c) {
  return E.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = [], g = 0, i = w(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in i) {
      var o = i[l];
      b.call(c, o, l, a) && (f[g++] = o)
    }
  }
  return f
}, Xa = E.map ? function(a, b, c) {
  return E.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = w(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in g && (f[i] = b.call(c, g[i], i, a))
  }
  return f
}, Ya = E.some ? function(a, b, c) {
  return E.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return j
    }
  }
  return m
}, Za = E.every ? function(a, b, c) {
  return E.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && !b.call(c, f[g], g, a)) {
      return m
    }
  }
  return j
};
function $a(a, b) {
  return 0 <= Va(a, b)
}
function ab(a) {
  if(!v(a)) {
    for(var b = a.length - 1;0 <= b;b--) {
      delete a[b]
    }
  }
  a.length = 0
}
function bb(a, b) {
  var c = Va(a, b);
  0 <= c && E.splice.call(a, c, 1)
}
function cb(a) {
  return E.concat.apply(E, arguments)
}
function db(a) {
  if(v(a)) {
    return cb(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
}
function eb(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], f;
    if(v(d) || (f = ga(d)) && d.hasOwnProperty("callee")) {
      a.push.apply(a, d)
    }else {
      if(f) {
        for(var g = a.length, i = d.length, l = 0;l < i;l++) {
          a[g + l] = d[l]
        }
      }else {
        a.push(d)
      }
    }
  }
}
function fb(a, b, c) {
  return 2 >= arguments.length ? E.slice.call(a, b) : E.slice.call(a, b, c)
}
function gb(a, b) {
  E.sort.call(a, b || hb)
}
function hb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function ib(a, b, c) {
  var d = Va(c, a);
  if(-1 != d) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = fa(a);
    if("boolean" == d || "number" == d || "null" == d || "undefined" == d) {
      b.push("" + a)
    }else {
      if("string" == d) {
        Aa(a, b)
      }else {
        if(ra(a.N)) {
          a.N(b, c)
        }else {
          if(ra(a.Yf)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if("array" == d) {
                d = a.length;
                b.push("[");
                for(var f = "", g = 0;g < d;g++) {
                  b.push(f), ib(a[g], b, c), f = ", "
                }
                b.push("]")
              }else {
                if("object" == d) {
                  if(ha(a) && "function" == typeof a.valueOf) {
                    b.push("new Date(", "" + a.valueOf(), ")")
                  }else {
                    for(var d = ua(a).concat(va), f = {}, i = g = 0;i < d.length;) {
                      var l = d[i++], o = ia(l) ? "o" + la(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(f, o) || (f[o] = j, d[g++] = l)
                    }
                    d.length = g;
                    b.push("{");
                    f = "";
                    for(i = 0;i < d.length;i++) {
                      g = d[i], Object.prototype.hasOwnProperty.call(a, g) && (l = a[g], b.push(f), Aa(g, b), b.push(": "), ib(l, b, c), f = ", ")
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
function G(a, b, c) {
  c || (c = []);
  ib(a, b, c)
}
function H(a) {
  var b = [];
  G(a, b, h);
  return b.join("")
}
;function jb(a) {
  if("function" == typeof a.Q) {
    a = a.Q()
  }else {
    if(ga(a) || w(a)) {
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
function kb(a) {
  if("function" == typeof a.X) {
    return a.X()
  }
  if(w(a)) {
    return a.split("")
  }
  if(ga(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return ta(a)
}
function lb(a) {
  if("function" == typeof a.ua) {
    return a.ua()
  }
  if("function" != typeof a.X) {
    if(ga(a) || w(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return ua(a)
  }
}
function mb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ga(a) || w(a)) {
      F(a, b, c)
    }else {
      for(var d = lb(a), f = kb(a), g = f.length, i = 0;i < g;i++) {
        b.call(c, f[i], d && d[i], a)
      }
    }
  }
}
function nb(a, b) {
  if("function" == typeof a.every) {
    return a.every(b, h)
  }
  if(ga(a) || w(a)) {
    return Za(a, b, h)
  }
  for(var c = lb(a), d = kb(a), f = d.length, g = 0;g < f;g++) {
    if(!b.call(h, d[g], c && c[g], a)) {
      return m
    }
  }
  return j
}
;function ob(a, b) {
  this.u = {};
  this.m = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && e(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.hd(a)
  }
}
q = ob.prototype;
q.d = 0;
q.Q = n("d");
q.X = function() {
  pb(this);
  for(var a = [], b = 0;b < this.m.length;b++) {
    a.push(this.u[this.m[b]])
  }
  return a
};
q.ua = function() {
  pb(this);
  return this.m.concat()
};
q.aa = function(a) {
  return qb(this.u, a)
};
q.rc = function(a) {
  for(var b = 0;b < this.m.length;b++) {
    var c = this.m[b];
    if(qb(this.u, c) && this.u[c] == a) {
      return j
    }
  }
  return m
};
q.V = function(a, b) {
  if(this === a) {
    return j
  }
  if(this.d != a.Q()) {
    return m
  }
  var c = b || rb;
  pb(this);
  for(var d, f = 0;d = this.m[f];f++) {
    if(!c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function rb(a, b) {
  return a === b
}
q.Na = function() {
  return 0 == this.d
};
q.clear = function() {
  this.u = {};
  this.d = this.m.length = 0
};
q.remove = function(a) {
  return qb(this.u, a) ? (delete this.u[a], this.d--, this.m.length > 2 * this.d && pb(this), j) : m
};
function pb(a) {
  if(a.d != a.m.length) {
    for(var b = 0, c = 0;b < a.m.length;) {
      var d = a.m[b];
      qb(a.u, d) && (a.m[c++] = d);
      b++
    }
    a.m.length = c
  }
  if(a.d != a.m.length) {
    for(var f = {}, c = b = 0;b < a.m.length;) {
      d = a.m[b], qb(f, d) || (a.m[c++] = d, f[d] = 1), b++
    }
    a.m.length = c
  }
}
q.get = function(a, b) {
  return qb(this.u, a) ? this.u[a] : b
};
q.set = function(a, b) {
  qb(this.u, a) || (this.d++, this.m.push(a));
  this.u[a] = b
};
q.hd = function(a) {
  var b;
  a instanceof ob ? (b = a.ua(), a = a.X()) : (b = ua(a), a = ta(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
q.L = function() {
  return new ob(this)
};
function sb(a) {
  pb(a);
  for(var b = {}, c = 0;c < a.m.length;c++) {
    var d = a.m[c];
    b[d] = a.u[d]
  }
  return b
}
function qb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function tb(a) {
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
;var ub, vb;
function wb(a, b) {
  this.qb = a;
  this.lb = b
}
wb.prototype.V = function(a) {
  return a instanceof wb && this.qb == a.qb && this.lb.join(",") == a.lb
};
wb.prototype.N = function(a, b) {
  a.push("new SACK(", "" + this.qb, ", ");
  G(this.lb, a, b);
  a.push(")")
};
function xb() {
  this.w = new ob
}
q = xb.prototype;
q.$a = -1;
q.n = 0;
q.append = function(a) {
  var b = tb(a);
  this.w.set(this.$a + 1, [a, b]);
  this.$a += 1;
  this.n += b
};
q.N = function(a) {
  a.push("<Queue with ", "" + this.w.Q(), " item(s), counter=#", "" + this.$a, ", size=", "" + this.n, ">")
};
function yb(a) {
  a = a.w.ua();
  gb(a);
  return a
}
q.Re = function(a) {
  for(var b = yb(this), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    (a == k || f >= a) && c.push([f, this.w.get(f)[0]])
  }
  return c
};
function zb() {
  this.Ya = new ob
}
zb.prototype.hb = -1;
zb.prototype.n = 0;
function Ab(a) {
  var b = a.Ya.ua();
  gb(b);
  return new wb(a.hb, b)
}
var Bb = {};
function Cb() {
  return j
}
;var Db, Eb, Fb, Gb, Hb;
function Ib() {
  return s.navigator ? s.navigator.userAgent : k
}
Hb = Gb = Fb = Eb = Db = m;
var Jb;
if(Jb = Ib()) {
  var Kb = s.navigator;
  Db = 0 == Jb.indexOf("Opera");
  Eb = !Db && -1 != Jb.indexOf("MSIE");
  Gb = (Fb = !Db && -1 != Jb.indexOf("WebKit")) && -1 != Jb.indexOf("Mobile");
  Hb = !Db && !Fb && "Gecko" == Kb.product
}
var Lb = Db, I = Eb, Mb = Hb, J = Fb, Nb = Gb, Ob = s.navigator, Pb = -1 != (Ob && Ob.platform || "").indexOf("Mac"), Qb;
a: {
  var Rb = "", Sb;
  if(Lb && s.opera) {
    var Tb = s.opera.version, Rb = "function" == typeof Tb ? Tb() : Tb
  }else {
    if(Mb ? Sb = /rv\:([^\);]+)(\)|;)/ : I ? Sb = /MSIE\s+([^\);]+)(\)|;)/ : J && (Sb = /WebKit\/(\S+)/), Sb) {
      var Ub = Sb.exec(Ib()), Rb = Ub ? Ub[1] : ""
    }
  }
  if(I) {
    var Vb, Wb = s.document;
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
  return Xb[a] || (Xb[a] = 0 <= Pa(Qb, a))
}
var Yb = {};
function Zb() {
  return Yb[9] || (Yb[9] = I && !!document.documentMode && 9 <= document.documentMode)
}
;function $b() {
}
var ac = 0;
q = $b.prototype;
q.key = 0;
q.kb = m;
q.nd = m;
q.Zb = function(a, b, c, d, f, g) {
  ka(a) ? this.ff = j : a && a.handleEvent && ka(a.handleEvent) ? this.ff = m : e(Error("Invalid listener argument"));
  this.Cb = a;
  this.yf = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Ec = g;
  this.nd = m;
  this.key = ++ac;
  this.kb = m
};
q.handleEvent = function(a) {
  return this.ff ? this.Cb.call(this.Ec || this.src, a) : this.Cb.handleEvent.call(this.Cb, a)
};
var bc = !I || Zb(), cc = !I || Zb(), dc = I && !K("8");
!J || K("528");
Mb && K("1.9b") || I && K("8") || Lb && K("9.5") || J && K("528");
Mb && !K("8") || I && K("9");
var ec = {sh:"click", xh:"dblclick", Sh:"mousedown", Wh:"mouseup", Vh:"mouseover", Uh:"mouseout", Th:"mousemove", fi:"selectstart", Mh:"keypress", Lh:"keydown", Nh:"keyup", qh:"blur", Fh:"focus", yh:"deactivate", Gh:I ? "focusin" : "DOMFocusIn", Hh:I ? "focusout" : "DOMFocusOut", rh:"change", ei:"select", gi:"submit", Kh:"input", ai:"propertychange", Ch:"dragstart", zh:"dragenter", Bh:"dragover", Ah:"dragleave", Dh:"drop", ki:"touchstart", ji:"touchmove", ii:"touchend", hi:"touchcancel", uh:"contextmenu", 
Eh:"error", Jh:"help", Oh:"load", Ph:"losecapture", bi:"readystatechange", ci:"resize", di:"scroll", mi:"unload", Ih:"hashchange", Xh:"pagehide", Yh:"pageshow", $h:"popstate", vh:"copy", Zh:"paste", wh:"cut", nh:"beforecopy", oh:"beforecut", ph:"beforepaste", Rh:"message", th:"connect", li:J ? "webkitTransitionEnd" : Lb ? "oTransitionEnd" : "transitionend"};
function L() {
}
L.prototype.sa = m;
L.prototype.g = function() {
  this.sa || (this.sa = j, this.c())
};
L.prototype.c = function() {
  this.jg && fc.apply(k, this.jg)
};
function fc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ga(d) ? fc.apply(k, d) : d && "function" == typeof d.g && d.g()
  }
}
;function gc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
C(gc, L);
q = gc.prototype;
q.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
q.jb = m;
q.ec = j;
q.stopPropagation = function() {
  this.jb = j
};
q.preventDefault = function() {
  this.ec = m
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
  a && this.Zb(a, b)
}
C(jc, gc);
var kc = [1, 4, 2];
q = jc.prototype;
q.target = k;
q.relatedTarget = k;
q.offsetX = 0;
q.offsetY = 0;
q.clientX = 0;
q.clientY = 0;
q.screenX = 0;
q.screenY = 0;
q.button = 0;
q.keyCode = 0;
q.charCode = 0;
q.ctrlKey = m;
q.altKey = m;
q.shiftKey = m;
q.metaKey = m;
q.Zd = m;
q.Da = k;
q.Zb = function(a, b) {
  var c = this.type = a.type;
  gc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Mb) {
      var f;
      a: {
        try {
          ic(d.nodeName);
          f = j;
          break a
        }catch(g) {
        }
        f = m
      }
      f || (d = k)
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
  this.Zd = Pb ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Da = a;
  delete this.ec;
  delete this.jb
};
function lc(a) {
  return bc ? 0 == a.Da.button : "click" == a.type ? j : !!(a.Da.button & kc[0])
}
q.stopPropagation = function() {
  jc.f.stopPropagation.call(this);
  this.Da.stopPropagation ? this.Da.stopPropagation() : this.Da.cancelBubble = j
};
q.preventDefault = function() {
  jc.f.preventDefault.call(this);
  var a = this.Da;
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
q.c = function() {
  jc.f.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Da = k
};
var mc = {}, nc = {}, oc = {}, pc = {};
function M(a, b, c, d, f) {
  if(b) {
    if(v(b)) {
      for(var g = 0;g < b.length;g++) {
        M(a, b[g], c, d, f)
      }
      return k
    }
    var d = !!d, i = nc;
    b in i || (i[b] = {d:0, ia:0});
    i = i[b];
    d in i || (i[d] = {d:0, ia:0}, i.d++);
    var i = i[d], l = la(a), o;
    i.ia++;
    if(i[l]) {
      o = i[l];
      for(g = 0;g < o.length;g++) {
        if(i = o[g], i.Cb == c && i.Ec == f) {
          if(i.kb) {
            break
          }
          return o[g].key
        }
      }
    }else {
      o = i[l] = [], i.d++
    }
    g = qc();
    g.src = a;
    i = new $b;
    i.Zb(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    o.push(i);
    mc[c] = i;
    oc[l] || (oc[l] = []);
    oc[l].push(i);
    a.addEventListener ? (a == s || !a.td) && a.addEventListener(b, g, d) : a.attachEvent(b in pc ? pc[b] : pc[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function qc() {
  var a = rc, b = cc ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function sc(a, b, c, d, f) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      sc(a, b[g], c, d, f)
    }
    return k
  }
  a = M(a, b, c, d, f);
  mc[a].nd = j;
  return a
}
function tc(a, b, c, d, f) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      tc(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = uc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Cb == c && a[g].capture == d && a[g].Ec == f) {
          vc(a[g].key);
          break
        }
      }
    }
  }
}
function vc(a) {
  if(!mc[a]) {
    return m
  }
  var b = mc[a];
  if(b.kb) {
    return m
  }
  var c = b.src, d = b.type, f = b.yf, g = b.capture;
  c.removeEventListener ? (c == s || !c.td) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in pc ? pc[d] : pc[d] = "on" + d, f);
  c = la(c);
  f = nc[d][g][c];
  if(oc[c]) {
    var i = oc[c];
    bb(i, b);
    0 == i.length && delete oc[c]
  }
  b.kb = j;
  f.rf = j;
  wc(d, g, c, f);
  delete mc[a];
  return j
}
function wc(a, b, c, d) {
  if(!d.Lc && d.rf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].kb ? d[f].yf.src = k : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.rf = m;
    0 == g && (delete nc[a][b][c], nc[a][b].d--, 0 == nc[a][b].d && (delete nc[a][b], nc[a].d--), 0 == nc[a].d && delete nc[a])
  }
}
function xc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    sa(oc, function(a) {
      for(var f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          vc(g.key), c++
        }
      }
    })
  }else {
    if(a = la(a), oc[a]) {
      for(var a = oc[a], f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          vc(g.key), c++
        }
      }
    }
  }
}
function uc(a, b, c) {
  var d = nc;
  return b in d && (d = d[b], c in d && (d = d[c], a = la(a), d[a])) ? d[a] : k
}
function yc(a, b, c, d, f) {
  var g = 1, b = la(b);
  if(a[b]) {
    a.ia--;
    a = a[b];
    a.Lc ? a.Lc++ : a.Lc = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var o = a[l];
        o && !o.kb && (g &= zc(o, f) !== m)
      }
    }finally {
      a.Lc--, wc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function zc(a, b) {
  var c = a.handleEvent(b);
  a.nd && vc(a.key);
  return c
}
function rc(a, b) {
  if(!mc[a]) {
    return j
  }
  var c = mc[a], d = c.type, f = nc;
  if(!(d in f)) {
    return j
  }
  var f = f[d], g, i;
  if(!cc) {
    g = b || ca("window.event");
    var l = j in f, o = m in f;
    if(l) {
      if(0 > g.keyCode || g.returnValue != h) {
        return j
      }
      a: {
        var r = m;
        if(0 == g.keyCode) {
          try {
            g.keyCode = -1;
            break a
          }catch(z) {
            r = j
          }
        }
        if(r || g.returnValue == h) {
          g.returnValue = j
        }
      }
    }
    r = new jc;
    r.Zb(g, this);
    g = j;
    try {
      if(l) {
        for(var t = [], x = r.currentTarget;x;x = x.parentNode) {
          t.push(x)
        }
        i = f[j];
        i.ia = i.d;
        for(var A = t.length - 1;!r.jb && 0 <= A && i.ia;A--) {
          r.currentTarget = t[A], g &= yc(i, t[A], d, j, r)
        }
        if(o) {
          i = f[m];
          i.ia = i.d;
          for(A = 0;!r.jb && A < t.length && i.ia;A++) {
            r.currentTarget = t[A], g &= yc(i, t[A], d, m, r)
          }
        }
      }else {
        g = zc(c, r)
      }
    }finally {
      t && (t.length = 0), r.g()
    }
    return g
  }
  d = new jc(b, this);
  try {
    g = zc(c, d)
  }finally {
    d.g()
  }
  return g
}
var Ac = 0;
function Bc() {
}
C(Bc, L);
q = Bc.prototype;
q.td = j;
q.Oc = k;
q.fe = aa("Oc");
q.addEventListener = function(a, b, c, d) {
  M(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  tc(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = nc;
  if(b in c) {
    if(w(a)) {
      a = new gc(a, this)
    }else {
      if(a instanceof gc) {
        a.target = a.target || this
      }else {
        var d = a, a = new gc(b, this);
        wa(a, d)
      }
    }
    var d = 1, f, c = c[b], b = j in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.Oc) {
        f.push(g)
      }
      g = c[j];
      g.ia = g.d;
      for(var i = f.length - 1;!a.jb && 0 <= i && g.ia;i--) {
        a.currentTarget = f[i], d &= yc(g, f[i], a.type, j, a) && a.ec != m
      }
    }
    if(m in c) {
      if(g = c[m], g.ia = g.d, b) {
        for(i = 0;!a.jb && i < f.length && g.ia;i++) {
          a.currentTarget = f[i], d &= yc(g, f[i], a.type, m, a) && a.ec != m
        }
      }else {
        for(f = this;!a.jb && f && g.ia;f = f.Oc) {
          a.currentTarget = f, d &= yc(g, f, a.type, m, a) && a.ec != m
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
q.c = function() {
  Bc.f.c.call(this);
  xc(this);
  this.Oc = k
};
function Cc(a, b) {
  this.Hc = a || 1;
  this.jc = b || Dc;
  this.ld = y(this.$g, this);
  this.Pd = B()
}
C(Cc, Bc);
Cc.prototype.enabled = m;
var Dc = s.window;
q = Cc.prototype;
q.oa = k;
q.$g = function() {
  if(this.enabled) {
    var a = B() - this.Pd;
    0 < a && a < 0.8 * this.Hc ? this.oa = this.jc.setTimeout(this.ld, this.Hc - a) : (this.dispatchEvent(Ec), this.enabled && (this.oa = this.jc.setTimeout(this.ld, this.Hc), this.Pd = B()))
  }
};
q.start = function() {
  this.enabled = j;
  this.oa || (this.oa = this.jc.setTimeout(this.ld, this.Hc), this.Pd = B())
};
q.stop = function() {
  this.enabled = m;
  this.oa && (this.jc.clearTimeout(this.oa), this.oa = k)
};
q.c = function() {
  Cc.f.c.call(this);
  this.stop();
  delete this.jc
};
var Ec = "tick";
Ac++;
Ac++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Fc(a, b) {
  this.oc = [];
  this.ze = a;
  this.He = b || k
}
q = Fc.prototype;
q.Ka = m;
q.Wb = m;
q.bc = 0;
q.ke = m;
q.eg = m;
q.md = 0;
q.cancel = function(a) {
  if(this.Ka) {
    this.dc instanceof Fc && this.dc.cancel()
  }else {
    if(this.H) {
      var b = this.H;
      delete this.H;
      a ? b.cancel(a) : (b.md--, 0 >= b.md && b.cancel())
    }
    this.ze ? this.ze.call(this.He, this) : this.ke = j;
    this.Ka || this.Ub(new Gc)
  }
};
q.Ce = function(a, b) {
  Hc(this, a, b);
  this.bc--;
  0 == this.bc && this.Ka && Ic(this)
};
function Hc(a, b, c) {
  a.Ka = j;
  a.dc = c;
  a.Wb = !b;
  Ic(a)
}
function Jc(a) {
  a.Ka && (a.ke || e(new Kc), a.ke = m)
}
function Lc(a, b) {
  Jc(a);
  Hc(a, j, b)
}
q.Ub = function(a) {
  Jc(this);
  Hc(this, m, a)
};
function Mc(a, b) {
  Nc(a, b, k, h)
}
function Oc(a, b) {
  Nc(a, k, b, h)
}
function Nc(a, b, c, d) {
  a.oc.push([b, c, d]);
  a.Ka && Ic(a)
}
function Pc(a, b) {
  Nc(a, b, b, h)
}
function Qc(a) {
  return Ya(a.oc, function(a) {
    return ka(a[1])
  })
}
function Ic(a) {
  a.te && a.Ka && Qc(a) && (s.clearTimeout(a.te), delete a.te);
  a.H && (a.H.md--, delete a.H);
  for(var b = a.dc, c = m, d = m;a.oc.length && 0 == a.bc;) {
    var f = a.oc.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.Wb ? i : g) {
      try {
        var l = g.call(f || a.He, b);
        u(l) && (a.Wb = a.Wb && (l == b || l instanceof Error), a.dc = b = l);
        b instanceof Fc && (d = j, a.bc++)
      }catch(o) {
        b = o, a.Wb = j, Qc(a) || (c = j)
      }
    }
  }
  a.dc = b;
  d && a.bc && (Nc(b, y(a.Ce, a, j), y(a.Ce, a, m)), b.eg = j);
  c && (a.te = s.setTimeout(function() {
    u(b.message) && b.stack && (b.message = b.message + ("\n" + b.stack));
    e(b)
  }, 0))
}
function Rc(a) {
  var b = new Fc;
  Lc(b, a);
  return b
}
function Sc(a) {
  var b = new Fc;
  b.Ub(a);
  return b
}
function Kc() {
  D.call(this)
}
C(Kc, D);
Kc.prototype.message = "Already called";
function Gc() {
  D.call(this)
}
C(Gc, D);
Gc.prototype.message = "Deferred was cancelled";
function Tc(a) {
  this.I = a;
  this.tc = [];
  this.Le = [];
  this.dg = y(this.fh, this)
}
Tc.prototype.oa = k;
function Uc(a, b, c, d) {
  a.tc.push([b, c, d]);
  a.oa == k && (a.oa = a.I.setTimeout(a.dg, 0))
}
Tc.prototype.fh = function() {
  this.oa = k;
  var a = this.tc;
  this.tc = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], f = c[1], c = c[2];
    try {
      d.apply(f, c)
    }catch(g) {
      this.I.setTimeout(function() {
        e(g)
      }, 0)
    }
  }
  if(0 == this.tc.length) {
    a = this.Le;
    this.Le = [];
    for(b = 0;b < a.length;b++) {
      Lc(a[b], k)
    }
  }
};
var Vc = new Tc(s.window);
var Wc;
function Xc(a) {
  a = a.className;
  return w(a) && a.match(/\S+/g) || []
}
function Yc(a, b) {
  for(var c = Xc(a), d = fb(arguments, 1), f = c.length + d.length, g = c, i = 0;i < d.length;i++) {
    $a(g, d[i]) || g.push(d[i])
  }
  a.className = c.join(" ");
  return c.length == f
}
function Zc(a, b) {
  var c = Xc(a), d = fb(arguments, 1), f = $c(c, d);
  a.className = f.join(" ");
  return f.length == c.length - d.length
}
function $c(a, b) {
  return Wa(a, function(a) {
    return!$a(b, a)
  })
}
;function N(a, b) {
  this.width = a;
  this.height = b
}
q = N.prototype;
q.L = function() {
  return new N(this.width, this.height)
};
q.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
q.Na = function() {
  return!(this.width * this.height)
};
q.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
q.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
q.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
q.scale = function(a) {
  this.width *= a;
  this.height *= a;
  return this
};
var ad = !I || Zb();
!Mb && !I || I && Zb() || Mb && K("1.9.1");
var bd = I && !K("9");
function cd(a) {
  return a ? new dd(ed(a)) : Wc || (Wc = new dd)
}
function O(a) {
  return w(a) ? document.getElementById(a) : a
}
function fd(a, b, c, d) {
  a = d || a;
  b = b && "*" != b ? b.toUpperCase() : "";
  if(a.querySelectorAll && a.querySelector && (!J || "CSS1Compat" == document.compatMode || K("528")) && (b || c)) {
    return a.querySelectorAll(b + (c ? "." + c : ""))
  }
  if(c && a.getElementsByClassName) {
    a = a.getElementsByClassName(c);
    if(b) {
      for(var d = {}, f = 0, g = 0, i;i = a[g];g++) {
        b == i.nodeName && (d[f++] = i)
      }
      d.length = f;
      return d
    }
    return a
  }
  a = a.getElementsByTagName(b || "*");
  if(c) {
    d = {};
    for(g = f = 0;i = a[g];g++) {
      b = i.className, "function" == typeof b.split && $a(b.split(/\s+/), c) && (d[f++] = i)
    }
    d.length = f;
    return d
  }
  return a
}
function gd(a, b) {
  sa(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in hd ? a.setAttribute(hd[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var hd = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function id(a, b, c) {
  return jd(document, arguments)
}
function jd(a, b) {
  var c = b[0], d = b[1];
  if(!ad && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', Ia(d.name), '"');
    if(d.type) {
      c.push(' type="', Ia(d.type), '"');
      var f = {};
      wa(f, d);
      d = f;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  d && (w(d) ? c.className = d : v(d) ? Yc.apply(k, [c].concat(d)) : gd(c, d));
  2 < b.length && md(a, c, b, 2);
  return c
}
function md(a, b, c, d) {
  function f(c) {
    c && b.appendChild(w(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && 0 < g.nodeType) ? F(nd(g) ? db(g) : g, f) : f(g)
  }
}
function od(a, b) {
  md(ed(a), a, arguments, 1)
}
function pd(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function qd(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function rd(a, b) {
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
function ed(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function sd(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      pd(a), a.appendChild(ed(a).createTextNode(b))
    }
  }
}
var td = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, ud = {IMG:" ", BR:"\n"};
function vd(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ja(a) && 0 <= a && 32768 > a) : m
}
function wd(a) {
  var b = [];
  xd(a, b, m);
  return b.join("")
}
function xd(a, b, c) {
  if(!(a.nodeName in td)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in ud) {
        b.push(ud[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          xd(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function nd(a) {
  if(a && "number" == typeof a.length) {
    if(ia(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(ka(a)) {
      return"function" == typeof a.item
    }
  }
  return m
}
function dd(a) {
  this.p = a || s.document || document
}
q = dd.prototype;
q.Fa = cd;
q.b = function(a) {
  return w(a) ? this.p.getElementById(a) : a
};
q.i = function(a, b, c) {
  return jd(this.p, arguments)
};
q.createElement = function(a) {
  return this.p.createElement(a)
};
q.createTextNode = function(a) {
  return this.p.createTextNode(a)
};
q.Ee = function(a, b, c) {
  for(var d = this.p, f = !!c, c = ["<tr>"], g = 0;g < b;g++) {
    c.push(f ? "<td>&nbsp;</td>" : "<td></td>")
  }
  c.push("</tr>");
  c = c.join("");
  b = ["<table>"];
  for(g = 0;g < a;g++) {
    b.push(c)
  }
  b.push("</table>");
  a = d.createElement("DIV");
  a.innerHTML = b.join("");
  return a.removeChild(a.firstChild)
};
q.appendChild = function(a, b) {
  a.appendChild(b)
};
q.append = od;
q.contains = rd;
function yd(a, b) {
  switch(fa(b)) {
    case "string":
      a.push("<string>", Ia(b), "</string>");
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
        a.push('<property id="', d, '">'), yd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', Ia(c), '">'), yd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function zd(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, f = arguments;
  d.push("<arguments>");
  for(var g = f.length, i = 1;i < g;i++) {
    yd(d, f[i])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var Ad = m, Bd = "";
function Cd(a) {
  a = a.match(/[\d]+/g);
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var Dd = navigator.plugins["Shockwave Flash"];
  Dd && (Ad = j, Dd.description && (Bd = Cd(Dd.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (Ad = j, Bd = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var Ed = navigator.mimeTypes["application/x-shockwave-flash"];
    (Ad = Ed && Ed.enabledPlugin) && (Bd = Cd(Ed.enabledPlugin.description))
  }else {
    try {
      var Fd = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), Ad = j, Bd = Cd(Fd.GetVariable("$version"))
    }catch(Gd) {
      try {
        Fd = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), Ad = j, Bd = "6.0.21"
      }catch(Hd) {
        try {
          Fd = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Ad = j, Bd = Cd(Fd.GetVariable("$version"))
        }catch(Id) {
        }
      }
    }
  }
}
var Jd = Bd;
function Kd(a, b, c) {
  a.style[Sa(c)] = b
}
function Ld(a, b) {
  var c = ed(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function Md(a, b, c) {
  b instanceof N ? (c = b.height, b = b.width) : c == h && e(Error("missing height argument"));
  a.style.width = Nd(b);
  a.style.height = Nd(c)
}
function Nd(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
function Od(a) {
  if("none" != (Ld(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style && a.style.display)) {
    return Pd(a)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = Pd(a);
  b.display = c;
  b.position = f;
  b.visibility = d;
  return a
}
function Pd(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = J && !b && !c;
  return(!u(b) || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), I && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new N(b.right - b.left, b.bottom - b.top)) : new N(b, c)
}
function Qd(a) {
  I ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[J ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var Rd = Mb ? "MozUserSelect" : J ? "WebkitUserSelect" : k;
function Sd(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Rd) {
    if(b = b ? "none" : "", a.style[Rd] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[Rd] = b
      }
    }
  }else {
    if(I || Lb) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
;function Td(a) {
  this.eb = a;
  this.m = []
}
C(Td, L);
var Ud = [];
function P(a, b, c, d) {
  v(c) || (Ud[0] = c, c = Ud);
  for(var f = 0;f < c.length;f++) {
    a.m.push(M(b, c[f], d || a, m, a.eb || a))
  }
  return a
}
function Vd(a, b, c, d, f, g) {
  if(v(c)) {
    for(var i = 0;i < c.length;i++) {
      Vd(a, b, c[i], d, f, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.eb || a;
      f = !!f;
      if(b = uc(b, c, f)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].kb && b[c].Cb == d && b[c].capture == f && b[c].Ec == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, vc(b), bb(a.m, b))
  }
  return a
}
Td.prototype.$d = function() {
  F(this.m, vc);
  this.m.length = 0
};
Td.prototype.c = function() {
  Td.f.c.call(this);
  this.$d()
};
Td.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Wd() {
}
ea(Wd);
Wd.prototype.Jg = 0;
Wd.La();
function Xd(a) {
  this.M = a || cd();
  this.fc = Yd
}
C(Xd, Bc);
Xd.prototype.Bg = Wd.La();
var Yd = k;
function Zd(a, b) {
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
q = Xd.prototype;
q.R = k;
q.q = m;
q.e = k;
q.fc = k;
q.H = k;
q.O = k;
q.pc = k;
q.gh = m;
function $d(a) {
  return a.R || (a.R = ":" + (a.Bg.Jg++).toString(36))
}
q.b = n("e");
function ae(a) {
  return a.wb || (a.wb = new Td(a))
}
q.getParent = n("H");
q.fe = function(a) {
  this.H && this.H != a && e(Error("Method not supported"));
  Xd.f.fe.call(this, a)
};
q.Fa = n("M");
q.i = function() {
  this.e = this.M.createElement("div")
};
function be(a, b) {
  a.q && e(Error("Component already rendered"));
  a.e || a.i();
  b ? b.insertBefore(a.e, k) : a.M.p.body.appendChild(a.e);
  (!a.H || a.H.q) && a.P()
}
q.P = function() {
  this.q = j;
  ce(this, function(a) {
    !a.q && a.b() && a.P()
  })
};
q.ab = function() {
  ce(this, function(a) {
    a.q && a.ab()
  });
  this.wb && this.wb.$d();
  this.q = m
};
q.c = function() {
  Xd.f.c.call(this);
  this.q && this.ab();
  this.wb && (this.wb.g(), delete this.wb);
  ce(this, function(a) {
    a.g()
  });
  !this.gh && this.e && qd(this.e);
  this.H = this.e = this.pc = this.O = k
};
q.Vb = n("e");
q.Ib = function(a) {
  this.q && e(Error("Component already rendered"));
  this.fc = a
};
function ce(a, b) {
  a.O && F(a.O, b, h)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = w(a) ? a : $d(a), d;
    this.pc && c ? (d = this.pc, d = (c in d ? d[c] : h) || k) : d = k;
    a = d;
    c && a && (d = this.pc, c in d && delete d[c], bb(this.O, a), b && (a.ab(), a.e && qd(a.e)), c = a, c == k && e(Error("Unable to set parent component")), c.H = k, Xd.f.fe.call(c, k))
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function de(a) {
  this.u = new ob;
  a && this.hd(a)
}
function ee(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + la(a) : b.substr(0, 1) + a
}
q = de.prototype;
q.Q = function() {
  return this.u.Q()
};
q.add = function(a) {
  this.u.set(ee(a), a)
};
q.hd = function(a) {
  for(var a = kb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
q.$d = function(a) {
  for(var a = kb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
q.remove = function(a) {
  return this.u.remove(ee(a))
};
q.clear = function() {
  this.u.clear()
};
q.Na = function() {
  return this.u.Na()
};
q.contains = function(a) {
  return this.u.aa(ee(a))
};
q.X = function() {
  return this.u.X()
};
q.L = function() {
  return new de(this)
};
q.V = function(a) {
  return this.Q() == jb(a) && fe(this, a)
};
function fe(a, b) {
  var c = jb(b);
  if(a.Q() > c) {
    return m
  }
  !(b instanceof de) && 5 < c && (b = new de(b));
  return nb(a, function(a) {
    if("function" == typeof b.contains) {
      a = b.contains(a)
    }else {
      if("function" == typeof b.rc) {
        a = b.rc(a)
      }else {
        if(ga(b) || w(b)) {
          a = $a(b, a)
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
;function ge(a) {
  return he(a || arguments.callee.caller, [])
}
function he(a, b) {
  var c = [];
  if($a(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(ie(a) + "(");
      for(var d = a.arguments, f = 0;f < d.length;f++) {
        0 < f && c.push(", ");
        var g;
        g = d[f];
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
            g = (g = ie(g)) ? g : "[fn]";
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
        c.push(he(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function ie(a) {
  if(je[a]) {
    return je[a]
  }
  a = "" + a;
  if(!je[a]) {
    var b = /function ([^\(]+)/.exec(a);
    je[a] = b ? b[1] : "[Anonymous]"
  }
  return je[a]
}
var je = {};
function ke(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
ke.prototype.zd = k;
ke.prototype.yd = k;
var le = 0;
ke.prototype.reset = function(a, b, c, d, f) {
  "number" == typeof f || le++;
  this.Pf = d || B();
  this.Bb = a;
  this.pf = b;
  this.Eg = c;
  delete this.zd;
  delete this.yd
};
ke.prototype.Xc = aa("Bb");
function me(a) {
  this.Ig = a
}
me.prototype.H = k;
me.prototype.Bb = k;
me.prototype.O = k;
me.prototype.Yb = k;
function ne(a, b) {
  this.name = a;
  this.value = b
}
ne.prototype.toString = n("name");
var oe = new ne("OFF", Infinity), pe = new ne("SHOUT", 1200), qe = new ne("SEVERE", 1E3), re = new ne("WARNING", 900), se = new ne("INFO", 800), te = new ne("CONFIG", 700), ue = new ne("FINE", 500), ve = new ne("FINEST", 300), we = new ne("ALL", 0);
q = me.prototype;
q.getParent = n("H");
q.Xc = aa("Bb");
function xe(a) {
  if(a.Bb) {
    return a.Bb
  }
  if(a.H) {
    return xe(a.H)
  }
  Ua("Root logger has no level set.");
  return k
}
q.log = function(a, b, c) {
  if(a.value >= xe(this).value) {
    a = this.tg(a, b, c);
    b = "log:" + a.pf;
    s.console && (s.console.timeStamp ? s.console.timeStamp(b) : s.console.markTimeline && s.console.markTimeline(b));
    s.msWriteProfilerMark && s.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.Yb) {
        for(var f = 0, g = h;g = c.Yb[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
q.tg = function(a, b, c) {
  var d = new ke(a, "" + b, this.Ig);
  if(c) {
    d.zd = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var i;
      var l = ca("window.location.href");
      if(w(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var o, r, z = m;
        try {
          o = c.lineNumber || c.ti || "Not available"
        }catch(t) {
          o = "Not available", z = j
        }
        try {
          r = c.fileName || c.filename || c.sourceURL || l
        }catch(x) {
          r = "Not available", z = j
        }
        i = z || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:o, fileName:r, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + Ia(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + Ia(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ia(ge(g) + "-> ")
    }catch(A) {
      f = "Exception trying to expose exception! You win, we lose. " + A
    }
    d.yd = f
  }
  return d
};
function ye(a, b) {
  a.log(qe, b, h)
}
function Q(a, b, c) {
  a.log(re, b, c)
}
q.info = function(a, b) {
  this.log(se, a, b)
};
function R(a, b) {
  a.log(ue, b, h)
}
function S(a, b) {
  a.log(ve, b, h)
}
var ze = {}, Ae = k;
function Be() {
  Ae || (Ae = new me(""), ze[""] = Ae, Ae.Xc(te))
}
function Ce() {
  Be();
  return Ae
}
function T(a) {
  Be();
  var b;
  if(!(b = ze[a])) {
    b = new me(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = T(a.substr(0, c));
    c.O || (c.O = {});
    c.O[d] = b;
    b.H = c;
    ze[a] = b
  }
  return b
}
;function De(a, b) {
  Xd.call(this, b);
  this.qg = a;
  this.xd = new Td(this);
  this.vc = new ob
}
C(De, Xd);
q = De.prototype;
q.a = T("goog.ui.media.FlashObject");
q.ih = "window";
q.ye = "#000000";
q.$f = "sameDomain";
q.Z = function(a, b) {
  this.pb = w(a) ? a : Math.round(a) + "px";
  this.Hd = w(b) ? b : Math.round(b) + "px";
  this.b() && Md(this.b() ? this.b().firstChild : k, this.pb, this.Hd);
  return this
};
q.P = function() {
  De.f.P.call(this);
  var a = this.b(), b;
  b = I ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = I ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = Ea(c, this.ih), d = this.vc.ua(), f = this.vc.X(), g = [], i = 0;i < d.length;i++) {
    var l = Ga(d[i]), o = Ga(f[i]);
    g.push(l + "=" + o)
  }
  b = Ea(b, $d(this), $d(this), "goog-ui-media-flash-object", Ia(this.qg), Ia(g.join("&")), this.ye, this.$f, c);
  a.innerHTML = b;
  this.pb && this.Hd && this.Z(this.pb, this.Hd);
  P(this.xd, this.b(), ta(ec), hc)
};
q.i = function() {
  this.Cf != k && !(0 <= Pa(Jd, this.Cf)) && (Q(this.a, "Required flash version not found:" + this.Cf), e(Error("Method not supported")));
  var a = this.Fa().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
q.c = function() {
  De.f.c.call(this);
  this.vc = k;
  this.xd.g();
  this.xd = k
};
function Ee() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ B()).toString(36)
}
function Fe(a) {
  return a.substr(0, a.length - 1)
}
var Ge = /^(0|[1-9]\d*)$/, He = /^(0|\-?[1-9]\d*)$/;
function Ie(a) {
  var b = Je;
  return Ge.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function Ke(a) {
  D.call(this, a)
}
C(Ke, D);
Ke.prototype.name = "cw.loadflash.FlashLoadFailed";
s.__loadFlashObject_callbacks = {};
function Le(a, b, c) {
  function d() {
    f && delete s.__loadFlashObject_callbacks[f]
  }
  var f;
  if(Mb && !K("1.8.1.20")) {
    return Sc(new Ke("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Pa(Jd, "9"))) {
    return Sc(new Ke("Need Flash Player 9+; had " + (Jd ? Jd : "none")))
  }
  var g;
  f = "_" + Ee();
  var i = new Fc(d);
  s.__loadFlashObject_callbacks[f] = function() {
    a.setTimeout(function() {
      d();
      Lc(i, O(g))
    }, 0)
  };
  b.vc.set("onloadcallback", '__loadFlashObject_callbacks["' + f + '"]()');
  g = $d(b);
  be(b, c);
  return i
}
function Me(a, b, c) {
  var d = Le(a, b, c), f = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  Pc(d, function(b) {
    a.clearTimeout(f);
    return b
  });
  return d
}
;function Ne(a, b) {
  this.R = "_" + Ee();
  this.cd = a;
  this.Sa = b;
  this.Xa = a.Xa
}
C(Ne, L);
q = Ne.prototype;
q.Db = j;
q.rd = m;
q.a = T("cw.net.FlashSocket");
q.N = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.R);
  a.push("'>")
};
function Oe(a, b, c) {
  "frames" == b ? (a = a.Sa, Pe(a.K), Qe(a.K, c)) : "stillreceiving" == b ? (c = a.Sa, S(c.a, "onstillreceiving"), Pe(c.K)) : "connect" == b ? (c = a.Sa, c.a.info("onconnect"), Pe(c.K), a = c.Ob, c.Ob = k, a.length && (S(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.$c.mc(a))) : "close" == b ? (a.Db = m, a.g()) : "ioerror" == b ? (a.Db = m, b = a.Sa, Q(b.a, "onioerror: " + H(c)), Re(b.K, m), a.g()) : "securityerror" == b ? (a.Db = m, b = a.Sa, Q(b.a, "onsecurityerror: " + H(c)), 
  Re(b.K, m), a.g()) : e(Error("bad event: " + b))
}
function Se(a) {
  a.rd = j;
  a.Db = m;
  a.g()
}
q.pd = function(a, b) {
  try {
    var c = this.Xa.CallFunction(zd("__FC_connect", this.R, a, b, "<int32/>\n"))
  }catch(d) {
    return ye(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), Se(this)
  }
  '"OK"' != c && e(Error("__FC_connect failed? ret: " + c))
};
q.mc = function(a) {
  try {
    var b = this.Xa.CallFunction(zd("__FC_writeFrames", this.R, a))
  }catch(c) {
    return ye(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), Se(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (Q(this.a, "Flash no longer knows of " + this.R + "; disposing."), this.g()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
q.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.Db);
  Ne.f.c.call(this);
  var a = this.Xa;
  delete this.Xa;
  if(this.Db) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(zd("__FC_close", this.R)))
    }catch(b) {
      ye(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.rd = j
    }
  }
  if(this.rd) {
    a = this.Sa, Q(a.a, "oncrash"), Re(a.K, j)
  }else {
    this.Sa.onclose()
  }
  delete this.Sa;
  delete this.cd.xb[this.R]
};
function Te(a, b) {
  this.v = a;
  this.Xa = b;
  this.xb = {};
  this.od = "__FST_" + Ee();
  s[this.od] = y(this.mg, this);
  var c = b.CallFunction(zd("__FC_setCallbackFunc", this.od));
  '"OK"' != c && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
C(Te, L);
q = Te.prototype;
q.a = T("cw.net.FlashSocketTracker");
q.N = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  G(this.xb, a, b);
  a.push(">")
};
q.sd = function(a) {
  a = new Ne(this, a);
  return this.xb[a.R] = a
};
q.kg = function(a, b, c, d) {
  var f = this.xb[a];
  f ? "frames" == b && d ? (Oe(f, "ioerror", "FlashConnector hadError while handling data."), f.g()) : Oe(f, b, c) : Q(this.a, "Cannot dispatch because we have no instance: " + H([a, b, c, d]))
};
q.mg = function(a, b, c, d) {
  try {
    Uc(this.v, this.kg, this, [a, b, c, d])
  }catch(f) {
    s.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
q.c = function() {
  Te.f.c.call(this);
  for(var a = ta(this.xb);a.length;) {
    a.pop().g()
  }
  delete this.xb;
  delete this.Xa;
  s[this.od] = h
};
function Ue(a) {
  this.K = a;
  this.Ob = []
}
C(Ue, L);
q = Ue.prototype;
q.a = T("cw.net.FlashSocketConduit");
q.mc = function(a) {
  this.Ob ? (S(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Ob.push.apply(this.Ob, a)) : (S(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.$c.mc(a))
};
q.pd = function(a, b) {
  this.$c.pd(a, b)
};
q.onclose = function() {
  this.a.info("onclose");
  Re(this.K, m)
};
q.c = function() {
  this.a.info("in disposeInternal.");
  Ue.f.c.call(this);
  this.$c.g();
  delete this.K
};
var Ve = [];
function We() {
  var a = new Fc;
  Ve.push(a);
  return a
}
function Xe(a) {
  var b = Ve;
  Ve = [];
  F(b, function(b) {
    Lc(b, a)
  })
}
function Ye(a, b) {
  if(Ve.length) {
    return We()
  }
  var c = new De(b + "FlashConnector.swf?cb=" + Ze);
  c.ye = "#777777";
  c.Z(300, 30);
  var d = O("minerva-elements");
  d || e(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
  var f = O("minerva-elements-FlashConnectorSwf");
  f || (f = id("div", {id:"minerva-elements-FlashConnectorSwf"}), d.appendChild(f));
  ub = Me(a.I, c, f);
  Mc(ub, Xe);
  return We()
}
;function $e() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function af(a) {
  return a * Math.PI / 180
}
;var Je = Math.pow(2, 53);
var bf = {Yf:p("<cw.eq.Wildcard>")};
function cf(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function df(a, b, c) {
  var d = fa(a), f = fa(b);
  if(a == bf || b == bf) {
    return j
  }
  if(a != k && "function" == typeof a.V) {
    return c && c.push("running custom equals function on left object"), a.V(b, c)
  }
  if(b != k && "function" == typeof b.V) {
    return c && c.push("running custom equals function on right object"), b.V(a, c)
  }
  if(cf(d) || cf(f)) {
    a = a === b
  }else {
    if(a instanceof RegExp && b instanceof RegExp) {
      a = a.toString() === b.toString()
    }else {
      if(ha(a) && ha(b)) {
        a = a.valueOf() === b.valueOf()
      }else {
        if("array" == d && "array" == f) {
          a: {
            if(c && c.push("descending into array"), a.length != b.length) {
              c && c.push("array length mismatch: " + a.length + ", " + b.length), a = m
            }else {
              d = 0;
              for(f = a.length;d < f;d++) {
                if(!df(a[d], b[d], c)) {
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
          if(a.Xf == Cb && b.Xf == Cb) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!df(a[g], b[g], c)) {
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
;function U(a, b) {
  this.Qg = a;
  this.Qc = b
}
U.prototype.V = function(a, b) {
  return ia(a) && this.constructor == a.constructor && df(this.Qc, a.Qc, b)
};
U.prototype.N = function(a, b) {
  a.push("new ", this.Qg, "(");
  for(var c = "", d = 0;d < this.Qc.length;d++) {
    a.push(c), c = ", ", G(this.Qc[d], a, b)
  }
  a.push(")")
};
function V(a) {
  D.call(this, a)
}
C(V, D);
V.prototype.name = "cw.net.InvalidFrame";
function ef() {
  var a = [];
  this.ma(a);
  return a.join("")
}
function ff() {
}
ff.prototype.V = function(a, b) {
  return!(a instanceof ff) ? m : df(gf(this), gf(a), b)
};
ff.prototype.N = function(a, b) {
  a.push("<HelloFrame properties=");
  G(gf(this), a, b);
  a.push(">")
};
function gf(a) {
  return[a.Kb, a.xf, a.$e, a.Bf, a.ic, a.ne, a.qf, a.of, a.Sd, a.mf, a.Tf, a.Of, a.Ua, a.Kc]
}
ff.prototype.ca = ef;
ff.prototype.ma = function(a) {
  var b = {};
  b.tnum = this.Kb;
  b.ver = this.xf;
  b.format = this.$e;
  b["new"] = this.Bf;
  b.id = this.ic;
  b.ming = this.ne;
  b.pad = this.qf;
  b.maxb = this.of;
  u(this.Sd) && (b.maxt = this.Sd);
  b.maxia = this.mf;
  b.tcpack = this.Tf;
  b.eeds = this.Of;
  b.sack = this.Ua instanceof wb ? Fe((new hf(this.Ua)).ca()) : this.Ua;
  b.seenack = this.Kc instanceof wb ? Fe((new hf(this.Kc)).ca()) : this.Kc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(xa(b), "H")
};
function jf(a) {
  U.call(this, "StringFrame", [a]);
  this.pe = a
}
C(jf, U);
jf.prototype.ca = ef;
jf.prototype.ma = function(a) {
  a.push(this.pe, " ")
};
function kf(a) {
  U.call(this, "CommentFrame", [a]);
  this.fg = a
}
C(kf, U);
kf.prototype.ca = ef;
kf.prototype.ma = function(a) {
  a.push(this.fg, "^")
};
function lf(a) {
  U.call(this, "SeqNumFrame", [a]);
  this.If = a
}
C(lf, U);
lf.prototype.ca = ef;
lf.prototype.ma = function(a) {
  a.push("" + this.If, "N")
};
function mf(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = Je;
    if(He.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var g = Ie(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new wb(a, c)
}
function hf(a) {
  U.call(this, "SackFrame", [a]);
  this.Ua = a
}
C(hf, U);
hf.prototype.ca = ef;
hf.prototype.ma = function(a) {
  var b = this.Ua;
  a.push(b.lb.join(","), "|", "" + b.qb);
  a.push("A")
};
function nf(a) {
  U.call(this, "StreamStatusFrame", [a]);
  this.hf = a
}
C(nf, U);
nf.prototype.ca = ef;
nf.prototype.ma = function(a) {
  var b = this.hf;
  a.push(b.lb.join(","), "|", "" + b.qb);
  a.push("T")
};
function of() {
  U.call(this, "StreamCreatedFrame", [])
}
C(of, U);
of.prototype.ca = ef;
of.prototype.ma = function(a) {
  a.push("C")
};
function pf() {
  U.call(this, "YouCloseItFrame", [])
}
C(pf, U);
pf.prototype.ca = ef;
pf.prototype.ma = function(a) {
  a.push("Y")
};
function qf(a, b) {
  U.call(this, "ResetFrame", [a, b]);
  this.zf = a;
  this.xe = b
}
C(qf, U);
qf.prototype.ca = ef;
qf.prototype.ma = function(a) {
  a.push(this.zf, "|", "" + Number(this.xe), "!")
};
var rf = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function sf(a) {
  U.call(this, "TransportKillFrame", [a]);
  this.reason = a
}
C(sf, U);
sf.prototype.ca = ef;
sf.prototype.ma = function(a) {
  a.push(this.reason, "K")
};
function tf(a) {
  a || e(new V("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new jf(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = mf(Fe(a)), a == k && e(new V("bad sack")), new hf(a)
  }
  if("N" == b) {
    return a = Ie(Fe(a)), a == k && e(new V("bad seqNum")), new lf(a)
  }
  if("T" == b) {
    return a = mf(Fe(a)), a == k && e(new V("bad lastSackSeen")), new nf(a)
  }
  if("Y" == b) {
    return 1 != a.length && e(new V("leading garbage")), new pf
  }
  if("^" == b) {
    return new kf(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && e(new V("leading garbage")), new of
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && e(new V("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && e(new V("bad applicationLevel")), new qf(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = rf[a], a == k && e(new V("unknown kill reason: " + a)), new sf(a)
  }
  e(new V("Invalid frame type " + b))
}
;var uf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function vf(a, b) {
  var c = a.match(uf), d = b.match(uf);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function wf(a, b) {
  var c;
  a instanceof wf ? (this.Hb(b == k ? a.wa : b), xf(this, a.za), yf(this, a.ob), zf(this, a.la), Af(this, a.Ra), this.mb(a.z), Bf(this, a.S.L()), Cf(this, a.bb)) : a && (c = ("" + a).match(uf)) ? (this.Hb(!!b), xf(this, c[1] || "", j), yf(this, c[2] || "", j), zf(this, c[3] || "", j), Af(this, c[4]), this.mb(c[5] || "", j), Bf(this, c[6] || "", j), Cf(this, c[7] || "", j)) : (this.Hb(!!b), this.S = new Df(k, this, this.wa))
}
q = wf.prototype;
q.za = "";
q.ob = "";
q.la = "";
q.Ra = k;
q.z = "";
q.bb = "";
q.Cg = m;
q.wa = m;
q.toString = function() {
  if(this.qa) {
    return this.qa
  }
  var a = [];
  this.za && a.push(Ef(this.za, Ff), ":");
  this.la && (a.push("//"), this.ob && a.push(Ef(this.ob, Ff), "@"), a.push(w(this.la) ? encodeURIComponent(this.la) : k), this.Ra != k && a.push(":", "" + this.Ra));
  this.z && (this.la && "/" != this.z.charAt(0) && a.push("/"), a.push(Ef(this.z, "/" == this.z.charAt(0) ? Gf : Hf)));
  var b = "" + this.S;
  b && a.push("?", b);
  this.bb && a.push("#", Ef(this.bb, If));
  return this.qa = a.join("")
};
q.L = function() {
  var a = this.za, b = this.ob, c = this.la, d = this.Ra, f = this.z, g = this.S.L(), i = this.bb, l = new wf(k, this.wa);
  a && xf(l, a);
  b && yf(l, b);
  c && zf(l, c);
  d && Af(l, d);
  f && l.mb(f);
  g && Bf(l, g);
  i && Cf(l, i);
  return l
};
function xf(a, b, c) {
  Jf(a);
  delete a.qa;
  a.za = c ? b ? decodeURIComponent(b) : "" : b;
  a.za && (a.za = a.za.replace(/:$/, ""))
}
function yf(a, b, c) {
  Jf(a);
  delete a.qa;
  a.ob = c ? b ? decodeURIComponent(b) : "" : b
}
function zf(a, b, c) {
  Jf(a);
  delete a.qa;
  a.la = c ? b ? decodeURIComponent(b) : "" : b
}
function Af(a, b) {
  Jf(a);
  delete a.qa;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.Ra = b) : a.Ra = k
}
q.mb = function(a, b) {
  Jf(this);
  delete this.qa;
  this.z = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function Bf(a, b, c) {
  Jf(a);
  delete a.qa;
  b instanceof Df ? (a.S = b, a.S.ue = a, a.S.Hb(a.wa)) : (c || (b = Ef(b, Kf)), a.S = new Df(b, a, a.wa))
}
function Cf(a, b, c) {
  Jf(a);
  delete a.qa;
  a.bb = c ? b ? decodeURIComponent(b) : "" : b
}
function Jf(a) {
  a.Cg && e(Error("Tried to modify a read-only Uri"))
}
q.Hb = function(a) {
  this.wa = a;
  this.S && this.S.Hb(a);
  return this
};
function Lf(a) {
  return a instanceof wf ? a.L() : new wf(a, h)
}
var Mf = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Ef(a, b) {
  var c = k;
  w(a) && (c = a, Mf.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, Nf)));
  return c
}
function Nf(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Ff = /[#\/\?@]/g, Hf = /[\#\?:]/g, Gf = /[\#\?]/g, Kf = /[\#\?@]/g, If = /#/g;
function Df(a, b, c) {
  this.Ca = a || k;
  this.ue = b || k;
  this.wa = !!c
}
function Of(a) {
  if(!a.o && (a.o = new ob, a.d = 0, a.Ca)) {
    for(var b = a.Ca.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = Pf(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
q = Df.prototype;
q.o = k;
q.d = k;
q.Q = function() {
  Of(this);
  return this.d
};
q.add = function(a, b) {
  Of(this);
  Qf(this);
  a = Pf(this, a);
  if(this.aa(a)) {
    var c = this.o.get(a);
    v(c) ? c.push(b) : this.o.set(a, [c, b])
  }else {
    this.o.set(a, b)
  }
  this.d++;
  return this
};
q.remove = function(a) {
  Of(this);
  a = Pf(this, a);
  if(this.o.aa(a)) {
    Qf(this);
    var b = this.o.get(a);
    v(b) ? this.d -= b.length : this.d--;
    return this.o.remove(a)
  }
  return m
};
q.clear = function() {
  Qf(this);
  this.o && this.o.clear();
  this.d = 0
};
q.Na = function() {
  Of(this);
  return 0 == this.d
};
q.aa = function(a) {
  Of(this);
  a = Pf(this, a);
  return this.o.aa(a)
};
q.rc = function(a) {
  var b = this.X();
  return $a(b, a)
};
q.ua = function() {
  Of(this);
  for(var a = this.o.X(), b = this.o.ua(), c = [], d = 0;d < b.length;d++) {
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
q.X = function(a) {
  Of(this);
  var b = [];
  if(a) {
    a = Pf(this, a), this.aa(a) && (b = cb(b, this.o.get(a)))
  }else {
    for(var a = this.o.X(), c = 0;c < a.length;c++) {
      b = cb(b, a[c])
    }
  }
  return b
};
q.set = function(a, b) {
  Of(this);
  Qf(this);
  a = Pf(this, a);
  if(this.aa(a)) {
    var c = this.o.get(a);
    v(c) ? this.d -= c.length : this.d--
  }
  this.o.set(a, b);
  this.d++;
  return this
};
q.get = function(a, b) {
  Of(this);
  a = Pf(this, a);
  if(this.aa(a)) {
    var c = this.o.get(a);
    return v(c) ? c[0] : c
  }
  return b
};
q.toString = function() {
  if(this.Ca) {
    return this.Ca
  }
  if(!this.o) {
    return""
  }
  for(var a = [], b = 0, c = this.o.ua(), d = 0;d < c.length;d++) {
    var f = c[d], g = Ga(f), f = this.o.get(f);
    if(v(f)) {
      for(var i = 0;i < f.length;i++) {
        0 < b && a.push("&"), a.push(g), "" !== f[i] && a.push("=", Ga(f[i])), b++
      }
    }else {
      0 < b && a.push("&"), a.push(g), "" !== f && a.push("=", Ga(f)), b++
    }
  }
  return this.Ca = a.join("")
};
function Qf(a) {
  delete a.vb;
  delete a.Ca;
  a.ue && delete a.ue.qa
}
q.L = function() {
  var a = new Df;
  this.vb && (a.vb = this.vb);
  this.Ca && (a.Ca = this.Ca);
  this.o && (a.o = this.o.L());
  return a
};
function Pf(a, b) {
  var c = "" + b;
  a.wa && (c = c.toLowerCase());
  return c
}
q.Hb = function(a) {
  a && !this.wa && (Of(this), Qf(this), mb(this.o, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.wa = a
};
function Rf(a, b, c, d) {
  this.contentWindow = a;
  this.uc = b;
  this.oe = c;
  this.rg = d
}
Rf.prototype.N = function(a, b) {
  a.push("<XDRFrame frameId=");
  G(this.rg, a, b);
  a.push(", expandedUrl=");
  G(this.uc, a, b);
  a.push(", streams=");
  G(this.oe, a, b);
  a.push(">")
};
function Sf() {
  this.frames = [];
  this.Qd = new ob
}
Sf.prototype.a = T("cw.net.XDRTracker");
function Tf(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor($e()) + ("" + Math.floor($e()))
  })
}
function Uf(a, b) {
  for(var c = Vf, d = 0;d < c.frames.length;d++) {
    var f = c.frames[d], g;
    if(g = 0 == f.oe.length) {
      g = f.uc;
      var i = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + i + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + H(b) + " existing frame " + H(f)), Rc(f)
    }
  }
  d = Ee() + Ee();
  f = Tf(a);
  g = s.location;
  g instanceof wf || (g = Lf(g));
  f instanceof wf || (f = Lf(f));
  var l = g;
  g = l.L();
  (i = !!f.za) ? xf(g, f.za) : i = !!f.ob;
  i ? yf(g, f.ob) : i = !!f.la;
  i ? zf(g, f.la) : i = f.Ra != k;
  var o = f.z;
  if(i) {
    Af(g, f.Ra)
  }else {
    if(i = !!f.z) {
      if("/" != o.charAt(0) && (l.la && !l.z ? o = "/" + o : (l = g.z.lastIndexOf("/"), -1 != l && (o = g.z.substr(0, l + 1) + o))), ".." == o || "." == o) {
        o = ""
      }else {
        if(-1 != o.indexOf("./") || -1 != o.indexOf("/.")) {
          for(var l = 0 == o.lastIndexOf("/", 0), o = o.split("/"), r = [], z = 0;z < o.length;) {
            var t = o[z++];
            "." == t ? l && z == o.length && r.push("") : ".." == t ? ((1 < r.length || 1 == r.length && "" != r[0]) && r.pop(), l && z == o.length && r.push("")) : (r.push(t), l = j)
          }
          o = r.join("/")
        }
      }
    }
  }
  i ? g.mb(o) : i = "" !== f.S.toString();
  i ? (l = f.S, l.vb || (l.vb = l.toString() ? decodeURIComponent(l.toString()) : ""), Bf(g, l.vb, h)) : i = !!f.bb;
  i && Cf(g, f.bb);
  f = g.toString();
  g = ("" + s.location).match(uf)[3] || k;
  i = f.match(uf)[3] || k;
  g == i ? (c.a.info("No need to make a real XDRFrame for " + H(b)), c = Rc(new Rf(s, f, [b], k))) : ((g = O("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new Fc, c.Qd.set(d, [i, f, b]), c.a.info("Creating new XDRFrame " + H(d) + "for " + H(b)), c = id("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:f + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = i);
  return c
}
Sf.prototype.lh = function(a) {
  var b = this.Qd.get(a);
  b || e(Error("Unknown frameId " + H(a)));
  this.Qd.remove(b);
  var c = b[0], a = new Rf(O("minerva-xdrframe-" + a).contentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  Lc(c, a)
};
var Vf = new Sf;
s.__XHRTracker_xdrFrameLoaded = y(Vf.lh, Vf);
var Wf;
Wf = m;
var Xf = Ib();
Xf && (-1 != Xf.indexOf("Firefox") || -1 != Xf.indexOf("Camino") || -1 != Xf.indexOf("iPhone") || -1 != Xf.indexOf("iPod") || -1 != Xf.indexOf("iPad") || -1 != Xf.indexOf("Android") || -1 != Xf.indexOf("Chrome") && (Wf = j));
var Yf = Wf;
var Ze = "4bdfc178fc0e508c0cd5efc3fdb09920";
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function Zf(a, b, c, d, f, g) {
  Fc.call(this, f, g);
  this.lf = a;
  this.ud = [];
  this.Ne = !!b;
  this.pg = !!c;
  this.gg = !!d;
  for(b = 0;b < a.length;b++) {
    Nc(a[b], y(this.Ve, this, b, j), y(this.Ve, this, b, m))
  }
  0 == a.length && !this.Ne && Lc(this, this.ud)
}
C(Zf, Fc);
Zf.prototype.sf = 0;
Zf.prototype.Ve = function(a, b, c) {
  this.sf++;
  this.ud[a] = [b, c];
  this.Ka || (this.Ne && b ? Lc(this, [a, c]) : this.pg && !b ? this.Ub(c) : this.sf == this.lf.length && Lc(this, this.ud));
  this.gg && !b && (c = k);
  return c
};
Zf.prototype.Ub = function(a) {
  Zf.f.Ub.call(this, a);
  F(this.lf, function(a) {
    a.cancel()
  })
};
function $f(a) {
  a = new Zf(a, m, j);
  Mc(a, function(a) {
    return Xa(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function ag(a, b) {
  this.jh = a;
  this.nf = b
}
ag.prototype.Nd = 0;
ag.prototype.Nc = 0;
ag.prototype.Ad = m;
function bg(a) {
  var b = [];
  if(a.Ad) {
    return[b, 2]
  }
  var c = a.Nd, d = a.jh.responseText;
  for(a.Nd = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var f = d.substr(a.Nc, c - a.Nc), f = f.replace(/\r$/, "");
    if(f.length > a.nf) {
      return a.Ad = j, [b, 2]
    }
    b.push(f);
    a.Nc = c += 1
  }
  return a.Nd - a.Nc - 1 > a.nf ? (a.Ad = j, [b, 2]) : [b, 1]
}
;function cg(a, b, c) {
  this.K = b;
  this.na = a;
  this.qd = c
}
C(cg, L);
q = cg.prototype;
q.a = T("cw.net.XHRMaster");
q.Ta = -1;
q.Rd = function(a, b, c) {
  this.qd.__XHRSlave_makeRequest(this.na, a, b, c)
};
q.Ma = n("Ta");
q.Ud = function(a, b) {
  1 != b && ye(this.a, H(this.na) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Pe(this.K);
  Qe(this.K, a)
};
q.Vd = function(a) {
  R(this.a, "ongotheaders_: " + H(a));
  var b = k;
  "Content-Length" in a && (b = Ie(a["Content-Length"]));
  a = this.K;
  R(a.a, a.s() + " got Content-Length: " + b);
  a.Aa == dg && (b == k && (Q(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), eg(a, 2E3 + 1E3 * (b / 3072)))
};
q.Wd = function(a) {
  1 != a && R(this.a, this.K.s() + "'s XHR's readyState is " + a);
  this.Ta = a;
  2 <= this.Ta && Pe(this.K)
};
q.Td = function() {
  this.K.g()
};
q.c = function() {
  cg.f.c.call(this);
  delete fg.Ga[this.na];
  this.qd.__XHRSlave_dispose(this.na);
  delete this.qd
};
function gg() {
  this.Ga = {}
}
C(gg, L);
q = gg.prototype;
q.a = T("cw.net.XHRMasterTracker");
q.sd = function(a, b) {
  var c = "_" + Ee(), d = new cg(c, a, b);
  return this.Ga[c] = d
};
q.Ud = function(a, b, c) {
  if(Mb) {
    for(var d = [], f = 0, g = b.length;f < g;f++) {
      d[f] = b[f]
    }
    b = d
  }else {
    b = cb(b)
  }
  (d = this.Ga[a]) ? d.Ud(b, c) : ye(this.a, "onframes_: no master for " + H(a))
};
q.Vd = function(a, b) {
  var c = this.Ga[a];
  c ? c.Vd(b) : ye(this.a, "ongotheaders_: no master for " + H(a))
};
q.Wd = function(a, b) {
  var c = this.Ga[a];
  c ? c.Wd(b) : ye(this.a, "onreadystatechange_: no master for " + H(a))
};
q.Td = function(a) {
  var b = this.Ga[a];
  b ? (delete this.Ga[b.na], b.Td()) : ye(this.a, "oncomplete_: no master for " + H(a))
};
q.c = function() {
  gg.f.c.call(this);
  for(var a = ta(this.Ga);a.length;) {
    a.pop().g()
  }
  delete this.Ga
};
var fg = new gg;
s.__XHRMaster_onframes = y(fg.Ud, fg);
s.__XHRMaster_oncomplete = y(fg.Td, fg);
s.__XHRMaster_ongotheaders = y(fg.Vd, fg);
s.__XHRMaster_onreadystatechange = y(fg.Wd, fg);
function hg(a, b, c) {
  this.xa = a;
  this.host = b;
  this.port = c
}
function ig(a, b, c) {
  this.host = a;
  this.port = b;
  this.dh = c
}
function jg(a, b) {
  b || (b = a);
  this.xa = a;
  this.Va = b
}
jg.prototype.N = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  G(this.xa, a, b);
  a.push(", secondaryUrl=");
  G(this.Va, a, b);
  a.push(">")
};
function kg(a, b, c, d) {
  this.xa = a;
  this.wf = b;
  this.Va = c;
  this.Hf = d;
  (!(0 == this.xa.indexOf("http://") || 0 == this.xa.indexOf("https://")) || !(0 == this.Va.indexOf("http://") || 0 == this.Va.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.wf.location.href;
  vf(this.xa, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Hf.location.href;
  vf(this.Va, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
kg.prototype.N = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  G(this.xa, a, b);
  a.push(", secondaryUrl=");
  G(this.Va, a, b);
  a.push(">")
};
var lg = new kf(";)]}");
function mg() {
}
mg.prototype.Qe = p(1);
function ng(a) {
  s.setTimeout(function() {
    u(a.message) && a.stack && (a.message += "\n" + a.stack);
    e(a)
  }, 0)
}
function og(a) {
  this.Yg = a
}
og.prototype.N = function(a, b) {
  a.push("<UserContext for ");
  G(this.Yg, a, b);
  a.push(">")
};
function pg(a, b, c) {
  this.A = a;
  this.Zg = b ? b : new mg;
  this.v = c ? c : Vc;
  this.kc = new de;
  this.ic = Ee() + Ee();
  this.ya = new xb;
  this.Kd = new zb;
  this.lc = k;
  this.ed = [];
  this.Lb = new og(this);
  this.cg = y(this.eh, this);
  J && (this.lc = sc(s, "load", this.Sg, m, this))
}
C(pg, L);
q = pg.prototype;
q.a = T("cw.net.ClientStream");
q.jf = new wb(-1, []);
q.kf = new wb(-1, []);
q.Hg = 50;
q.Gg = 1048576;
q.Yd = k;
q.Xd = k;
q.onreset = k;
q.uf = k;
q.Gb = k;
q.le = m;
q.ae = m;
q.h = 1;
q.re = -1;
q.j = k;
q.B = k;
q.cc = k;
q.me = 0;
q.vf = 0;
q.Gf = 0;
q.N = function(a, b) {
  a.push("<ClientStream id=");
  G(this.ic, a, b);
  a.push(", state=", "" + this.h);
  a.push(", primary=");
  G(this.j, a, b);
  a.push(", secondary=");
  G(this.B, a, b);
  a.push(", resetting=");
  G(this.cc, a, b);
  a.push(">")
};
function qg(a) {
  var b = [-1];
  a.j && b.push(a.j.Eb);
  a.B && b.push(a.B.Eb);
  return Math.max.apply(Math.max, b)
}
function rg(a) {
  if(!(3 > a.h)) {
    sg(a);
    var b = 0 != a.ya.w.Q(), c = Ab(a.Kd), d = !c.V(a.kf) && !(a.j && c.V(a.j.Ab) || a.B && c.V(a.B.Ab)), f = qg(a);
    if((b = b && f < a.ya.$a) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.j.Pb ? (S(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.j, c != d.Ab && (!d.Ha && !d.F.length && tg(d), d.F.push(new hf(c)), d.Ab = c)), b && ug(a.j, a.ya, f + 1), a.j.Ea()) : a.B == k ? a.le ? (S(a.a, "tryToSend_: creating secondary to send " + g), a.B = vg(a, m), b && ug(a.B, a.ya, f + 1), a.B.Ea()) : (S(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.ae = j) : S(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
function sg(a) {
  a.Gb != k && (a.v.I.clearTimeout(a.Gb), a.Gb = k)
}
q.eh = function() {
  this.Gb = k;
  rg(this)
};
function wg(a) {
  a.Gb == k && (a.Gb = a.v.I.setTimeout(a.cg, 6))
}
q.Sg = function() {
  this.lc = k;
  if(this.j && this.j.yb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.j;
    a.gd = j;
    a.g()
  }
  this.B && this.B.yb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.B, a.gd = j, a.g())
};
function xg(a, b) {
  var c;
  u(c) || (c = j);
  3 < a.h && e(Error("sendString: Can't send in state " + a.h));
  c && (w(b) || e(Error("sendString: not a string: " + H(b))), /^([ -~]*)$/.test(b) || e(Error("sendString: string has illegal chars: " + H(b))));
  a.ya.append(b);
  wg(a)
}
function vg(a, b) {
  var c;
  a.A instanceof kg ? c = 1 == a.Zg.Qe() ? dg : yg : a.A instanceof ig ? c = zg : e(Error("Don't support endpoint " + H(a.A)));
  a.re += 1;
  c = new Ag(a.v, a, a.re, c, a.A, b);
  S(a.a, "Created: " + c.s());
  a.kc.add(c);
  return c
}
function Bg(a, b, c) {
  var d = new Cg(a.v, a, b, c);
  S(a.a, "Created: " + d.s() + ", delay=" + b + ", times=" + c);
  a.kc.add(d);
  return d
}
function Dg(a, b) {
  a.kc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  R(a.a, "Offline: " + b.s());
  a.me = b.Qa ? a.me + b.Qa : 0;
  1 <= a.me && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.Lb, "stream penalty reached limit", m), a.g());
  if(3 < a.h) {
    4 == a.h && b.Wf ? (R(a.a, "Disposing because resettingTransport_ is done."), a.g()) : R(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    var c;
    var d;
    c = b instanceof Cg;
    if(!c && b.gd) {
      var f = J ? Yf ? [0, 1] : [9, 20] : [0, 0];
      c = f[0];
      d = f[1];
      S(a.a, "getDelayForNextTransport_: " + H({delay:c, times:d}))
    }else {
      if(d = b.Be(), b == a.j ? d ? f = ++a.vf : c || (f = a.vf = 0) : d ? f = ++a.Gf : c || (f = a.Gf = 0), c || !f) {
        d = c = 0, S(a.a, "getDelayForNextTransport_: " + H({count:f, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(f, 3), i = Math.floor(4E3 * Math.random()) - 2E3, l = Math.max(0, b.Sf - b.se);
        d = (c = Math.max(0, g + i - l)) ? 1 : 0;
        S(a.a, "getDelayForNextTransport_: " + H({count:f, base:g, variance:i, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    f = c[0];
    c = c[1];
    b == a.j ? (a.j = k, c ? a.j = Bg(a, f, c) : (f = qg(a), a.j = vg(a, j), ug(a.j, a.ya, f + 1)), a.j.Ea()) : b == a.B && (a.B = k, c ? (a.B = Bg(a, f, c), a.B.Ea()) : rg(a))
  }
}
q.reset = function(a) {
  3 < this.h && e(Error("reset: Can't send reset in state " + this.h));
  sg(this);
  0 != this.ya.w.Q() && Q(this.a, "reset: strings in send queue will never be sent: " + H(this.ya));
  this.h = 4;
  this.j && this.j.Pb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Eg(this.j, a), this.j.Ea()) : (this.j && (R(this.a, "reset: Disposing primary before sending ResetFrame."), this.j.g()), this.B && (R(this.a, "reset: Disposing secondary before sending ResetFrame."), this.B.g()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.cc = vg(this, m), Eg(this.cc, a), this.cc.Ea());
  this.onreset && this.onreset.call(this.Lb, a, j)
};
function Fg(a, b, c, d) {
  var f;
  f = a.Kd;
  for(var g = a.Hg, i = a.Gg, l = [], o = m, r = 0, z = c.length;r < z;r++) {
    var t = c[r], x = t[0], t = t[1];
    if(x == f.hb + 1) {
      f.hb += 1;
      for(l.push(t);;) {
        x = f.hb + 1;
        t = f.Ya.get(x, Bb);
        if(t === Bb) {
          break
        }
        l.push(t[0]);
        f.Ya.remove(x);
        f.n -= t[1];
        f.hb = x
      }
    }else {
      if(!(x <= f.hb)) {
        if(g != k && f.Ya.Q() >= g) {
          o = j;
          break
        }
        var A = tb(t);
        if(i != k && f.n + A > i) {
          o = j;
          break
        }
        f.Ya.set(x, [t, A]);
        f.n += A
      }
    }
  }
  f.Ya.Na() && f.Ya.clear();
  f = [l, o];
  c = f[0];
  f = f[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      i = c[g];
      if(a.Yd) {
        try {
          a.Yd.call(a.Lb, i)
        }catch(kd) {
          Q(a.a, "onstring raised uncaught exception", kd), ng(kd)
        }
      }
      if(4 == a.h || a.sa) {
        return
      }
    }
  }
  d || wg(a);
  if(!(4 == a.h || a.sa) && f) {
    ye(b.a, b.s() + "'s peer caused rwin overflow."), b.g()
  }
}
q.Ke = function(a) {
  ye(this.a, "Failed to start " + H(this) + "; error was " + H(a.message));
  this.g()
};
q.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.h && e(Error("ClientStream.start: " + H(this) + " already started"));
  this.Xd && this.Xd(this);
  this.h = 2;
  if(this.A instanceof jg) {
    var a = Uf(this.A.xa, this), b = Uf(this.A.Va, this), a = $f([a, b]);
    Mc(a, y(this.og, this));
    Oc(a, y(this.Ke, this))
  }else {
    if(this.A instanceof hg) {
      if(vb) {
        this.Me()
      }else {
        var a = Ye(this.v, this.A.xa), c = this;
        Mc(a, function(a) {
          vb || (vb = new Te(c.v, a));
          return k
        });
        Mc(a, y(this.Me, this));
        Oc(a, y(this.Ke, this))
      }
    }else {
      Gg(this)
    }
  }
};
q.og = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].uc, f = a[1].uc;
  this.ed.push(a[0]);
  this.ed.push(a[1]);
  this.A = new kg(d, b, f, c);
  Gg(this)
};
q.Me = function() {
  this.A = new ig(this.A.host, this.A.port, vb);
  Gg(this)
};
function Gg(a) {
  a.h = 3;
  a.j = vg(a, j);
  ug(a.j, a.ya, k);
  a.j.Ea()
}
q.c = function() {
  this.a.info(H(this) + " in disposeInternal.");
  sg(this);
  this.h = 5;
  for(var a = this.kc.X(), b = 0;b < a.length;b++) {
    a[b].g()
  }
  for(a = 0;a < this.ed.length;a++) {
    bb(this.ed[a].oe, this)
  }
  J && this.lc && (vc(this.lc), this.lc = k);
  this.uf && this.uf.call(this.Lb);
  delete this.kc;
  delete this.j;
  delete this.B;
  delete this.cc;
  delete this.Lb;
  pg.f.c.call(this)
};
var dg = 1, yg = 2, zg = 3;
function Ag(a, b, c, d, f, g) {
  this.v = a;
  this.D = b;
  this.Kb = c;
  this.Aa = d;
  this.A = f;
  this.F = [];
  this.sb = g;
  this.Pb = !this.yb();
  this.Fb = this.Aa != dg;
  this.bg = y(this.ah, this)
}
C(Ag, L);
q = Ag.prototype;
q.a = T("cw.net.ClientTransport");
q.r = k;
q.se = k;
q.Sf = k;
q.Rc = k;
q.Ha = m;
q.ad = m;
q.Ab = k;
q.wc = 0;
q.Eb = -1;
q.Pc = -1;
q.Wf = m;
q.gd = m;
q.Qa = 0;
q.Xb = m;
q.N = function(a) {
  a.push("<ClientTransport #", "" + this.Kb, ", becomePrimary=", "" + this.sb, ">")
};
q.s = function() {
  return(this.sb ? "Prim. T#" : "Sec. T#") + this.Kb
};
q.Be = function() {
  return!(!this.Xb && this.wc)
};
q.yb = function() {
  return this.Aa == dg || this.Aa == yg
};
function Hg(a, b) {
  gb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Fg(a.D, a, b, !a.Fb)
}
function Ig(a, b, c) {
  try {
    var d = tf(b);
    a.wc += 1;
    R(a.a, a.s() + " RECV " + H(d));
    var f;
    1 == a.wc && !d.V(lg) && a.yb() ? (Q(a.a, a.s() + " is closing soon because got bad preamble: " + H(d)), f = j) : f = m;
    if(f) {
      return j
    }
    if(d instanceof jf) {
      if(!/^([ -~]*)$/.test(d.pe)) {
        return a.Xb = j
      }
      a.Pc += 1;
      c.push([a.Pc, d.pe])
    }else {
      if(d instanceof hf) {
        var g = a.D, i = d.Ua;
        g.jf = i;
        var l = g.ya, o = i.qb, c = m;
        o > l.$a && (c = j);
        for(var r = yb(l).concat(), d = 0;d < r.length;d++) {
          var z = r[d];
          if(z > o) {
            break
          }
          var t = l.w.get(z)[1];
          l.w.remove(z);
          l.n -= t
        }
        for(d = 0;d < i.lb.length;d++) {
          var x = i.lb[d];
          x > l.$a && (c = j);
          l.w.aa(x) && (t = l.w.get(x)[1], l.w.remove(x), l.n -= t)
        }
        l.w.Na() && l.w.clear();
        if(c) {
          return Q(a.a, a.s() + " is closing soon because got bad SackFrame"), a.Xb = j
        }
      }else {
        if(d instanceof lf) {
          a.Pc = d.If - 1
        }else {
          if(d instanceof nf) {
            a.D.kf = d.hf
          }else {
            if(d instanceof pf) {
              return S(a.a, a.s() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof sf) {
              return a.Xb = j, "stream_attach_failure" == d.reason ? a.Qa += 1 : "acked_unsent_strings" == d.reason && (a.Qa += 0.5), S(a.a, a.s() + " is closing soon because got " + H(d)), j
            }
            if(!(d instanceof kf)) {
              if(d instanceof of) {
                var A = a.D, kd = !a.Fb;
                S(A.a, "Stream is now confirmed to exist at server.");
                A.le = j;
                A.ae && !kd && (A.ae = m, rg(A))
              }else {
                c.length && (Hg(a, c), ab(c));
                if(d instanceof qf) {
                  var ld = a.D;
                  ld.onreset && ld.onreset.call(ld.Lb, d.zf, d.xe);
                  ld.g();
                  return j
                }
                e(Error(a.s() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(Rg) {
    return Rg instanceof V || e(Rg), Q(a.a, a.s() + " is closing soon because got InvalidFrame: " + H(b)), a.Xb = j
  }
  return m
}
function Qe(a, b) {
  a.ad = j;
  try {
    for(var c = m, d = [], f = 0, g = b.length;f < g;f++) {
      if(a.sa) {
        a.a.info(a.s() + " returning from loop because we're disposed.");
        return
      }
      if(c = Ig(a, b[f], d)) {
        break
      }
    }
    d.length && Hg(a, d);
    a.ad = m;
    a.F.length && a.Ea();
    c && (S(a.a, a.s() + " closeSoon is true.  Frames were: " + H(b)), a.g())
  }finally {
    a.ad = m
  }
}
q.ah = function() {
  Q(this.a, this.s() + " timed out due to lack of connection or no data being received.");
  this.g()
};
function Jg(a) {
  a.Rc != k && (a.v.I.clearTimeout(a.Rc), a.Rc = k)
}
function eg(a, b) {
  Jg(a);
  b = Math.round(b);
  a.Rc = a.v.I.setTimeout(a.bg, b);
  R(a.a, a.s() + "'s receive timeout set to " + b + " ms.")
}
function Pe(a) {
  a.Aa != dg && (a.Aa == zg || a.Aa == yg ? eg(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.Aa)))
}
function tg(a) {
  var b = new ff;
  b.Kb = a.Kb;
  b.xf = 2;
  b.$e = 2;
  a.D.le || (b.Bf = j);
  b.ic = a.D.ic;
  b.ne = a.Fb;
  b.ne && (b.qf = 4096);
  b.of = 3E5;
  b.mf = a.Fb ? Math.floor(10) : 0;
  b.Tf = m;
  a.sb && (b.Of = k, b.Sd = Math.floor((a.Fb ? 358E4 : 25E3) / 1E3));
  b.Ua = Ab(a.D.Kd);
  b.Kc = a.D.jf;
  a.F.push(b);
  a.Ab = b.Ua
}
function Re(a, b) {
  b && (a.Qa += 0.5);
  a.g()
}
q.Ea = function() {
  this.Ha && !this.Pb && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.ad) {
    S(this.a, this.s() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ha;
    this.Ha = j;
    !a && !this.F.length && tg(this);
    for(a = 0;a < this.F.length;a++) {
      R(this.a, this.s() + " SEND " + H(this.F[a]))
    }
    if(this.yb()) {
      for(var a = [], b = 0, c = this.F.length;b < c;b++) {
        this.F[b].ma(a), a.push("\n")
      }
      this.F = [];
      a = a.join("");
      b = this.sb ? this.A.xa : this.A.Va;
      this.r = fg.sd(this, this.sb ? this.A.wf : this.A.Hf);
      this.se = this.v.I === Dc ? B() : this.v.I.getTime();
      this.r.Rd(b, "POST", a);
      eg(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Fb ? 0 : this.sb ? 25E3 : 0))
    }else {
      if(this.Aa == zg) {
        a = [];
        b = 0;
        for(c = this.F.length;b < c;b++) {
          a.push(this.F[b].ca())
        }
        this.F = [];
        this.r ? this.r.mc(a) : (b = this.A, this.r = new Ue(this), this.r.$c = b.dh.sd(this.r), this.se = this.v.I === Dc ? B() : this.v.I.getTime(), this.r.pd(b.host, b.port), this.r.sa || (this.r.mc(a), this.r.sa || eg(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.Aa))
      }
    }
  }
};
function ug(a, b, c) {
  !a.Ha && !a.F.length && tg(a);
  for(var c = Math.max(c, a.Eb + 1), b = b.Re(c), c = 0, d = b.length;c < d;c++) {
    var f = b[c], g = f[0], f = f[1];
    (-1 == a.Eb || a.Eb + 1 != g) && a.F.push(new lf(g));
    a.F.push(new jf(f));
    a.Eb = g
  }
}
q.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  Ag.f.c.call(this);
  this.Sf = this.v.I === Dc ? B() : this.v.I.getTime();
  this.F = [];
  Jg(this);
  this.r && this.r.g();
  var a = this.D;
  this.D = k;
  Dg(a, this)
};
function Eg(a, b) {
  !a.Ha && !a.F.length && tg(a);
  a.F.push(new qf(b, j));
  a.Wf = j
}
function Cg(a, b, c, d) {
  this.v = a;
  this.D = b;
  this.Je = c;
  this.De = d
}
C(Cg, L);
q = Cg.prototype;
q.Ha = m;
q.Pb = m;
q.Ac = k;
q.Ab = k;
q.a = T("cw.net.DoNothingTransport");
function Kg(a) {
  a.Ac = a.v.I.setTimeout(function() {
    a.Ac = k;
    a.De--;
    a.De ? Kg(a) : a.g()
  }, a.Je)
}
q.Ea = function() {
  this.Ha && !this.Pb && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ha = j;
  Kg(this)
};
q.N = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.Je, ">")
};
q.yb = p(m);
q.s = p("Wast. T");
q.Be = p(m);
q.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  Cg.f.c.call(this);
  this.Ac != k && this.v.I.clearTimeout(this.Ac);
  var a = this.D;
  this.D = k;
  Dg(a, this)
};
function Lg(a, b) {
  a.setAttribute("role", b);
  a.vi = b
}
;function Mg() {
}
var Ng;
ea(Mg);
q = Mg.prototype;
q.xc = function() {
};
q.i = function(a) {
  var b = a.Fa().i("div", Og(this, a).join(" "), a.ba);
  this.ce(a, b);
  return b
};
q.Vb = function(a) {
  return a
};
q.Tb = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(I && !K("7")) {
      var d = Pg(Xc(a), b);
      d.push(b);
      qa(c ? Yc : Zc, a).apply(k, d)
    }else {
      c ? Yc(a, b) : Zc(a, b)
    }
  }
};
q.bf = function(a) {
  a.fc == k && (a.fc = "rtl" == (Ld(a.q ? a.e : a.M.p.body, "direction") || ((a.q ? a.e : a.M.p.body).currentStyle ? (a.q ? a.e : a.M.p.body).currentStyle.direction : k) || (a.q ? a.e : a.M.p.body).style && (a.q ? a.e : a.M.p.body).style.direction));
  a.fc && this.Ib(a.b(), j);
  a.isEnabled() && this.Wc(a, a.Mb)
};
q.ce = function(a, b) {
  a.isEnabled() || this.$(b, 1, j);
  a.h & 8 && this.$(b, 8, j);
  a.T & 16 && this.$(b, 16, !!(a.h & 16));
  a.T & 64 && this.$(b, 64, !!(a.h & 64))
};
q.Tc = function(a, b) {
  Sd(a, !b, !I && !Lb)
};
q.Ib = function(a, b) {
  this.Tb(a, this.t() + "-rtl", b)
};
q.ef = function(a) {
  var b;
  return a.T & 32 && (b = a.cb()) ? vd(b) : m
};
q.Wc = function(a, b) {
  var c;
  if(a.T & 32 && (c = a.cb())) {
    if(!b && a.h & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.h & 32 && a.Ue()
    }
    vd(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
q.je = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.ja = function(a, b, c) {
  var d = a.b();
  if(d) {
    var f = Qg(this, b);
    f && this.Tb(a, f, c);
    this.$(d, b, c)
  }
};
q.$ = function(a, b, c) {
  Ng || (Ng = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Ng[b]) && a.setAttribute("aria-" + b, c)
};
q.Uc = function(a, b) {
  var c = this.Vb(a);
  if(c && (pd(c), b)) {
    if(w(b)) {
      sd(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = ed(c);
          c.appendChild(w(a) ? b.createTextNode(a) : a)
        }
      };
      v(b) ? F(b, d) : ga(b) && !("nodeType" in b) ? F(db(b), d) : d(b)
    }
  }
};
q.cb = function(a) {
  return a.b()
};
q.t = p("goog-control");
function Og(a, b) {
  var c = a.t(), d = [c], f = a.t();
  f != c && d.push(f);
  c = b.h;
  for(f = [];c;) {
    var g = c & -c;
    f.push(Qg(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.ta) && d.push.apply(d, c);
  I && !K("7") && d.push.apply(d, Pg(d));
  return d
}
function Pg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  F([], function(d) {
    Za(d, qa($a, a)) && (!b || $a(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Qg(a, b) {
  if(!a.Ae) {
    var c = a.t();
    a.Ae = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Ae[b]
}
;function Sg(a, b) {
  a || e(Error("Invalid class name " + a));
  ka(b) || e(Error("Invalid decorator function " + b))
}
var Tg = {};
function Ug(a, b, c, d, f) {
  if(!I && (!J || !K("525"))) {
    return j
  }
  if(Pb && f) {
    return Vg(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || I && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(I && Zb());
    case 27:
      return!J
  }
  return Vg(a)
}
function Vg(a) {
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
function Wg(a) {
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
;function Xg(a, b) {
  a && Yg(this, a, b)
}
C(Xg, Bc);
q = Xg.prototype;
q.e = k;
q.Ic = k;
q.Md = k;
q.Jc = k;
q.Pa = -1;
q.Oa = -1;
var Zg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, $g = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, ah = I || 
J && K("525");
q = Xg.prototype;
q.xg = function(a) {
  if(J && (17 == this.Pa && !a.ctrlKey || 18 == this.Pa && !a.altKey)) {
    this.Oa = this.Pa = -1
  }
  ah && !Ug(a.keyCode, this.Pa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Oa = Mb ? Wg(a.keyCode) : a.keyCode
};
q.yg = function() {
  this.Oa = this.Pa = -1
};
q.handleEvent = function(a) {
  var b = a.Da, c, d;
  I && "keypress" == a.type ? (c = this.Oa, d = 13 != c && 27 != c ? b.keyCode : 0) : J && "keypress" == a.type ? (c = this.Oa, d = 0 <= b.charCode && 63232 > b.charCode && Vg(c) ? b.charCode : 0) : Lb ? (c = this.Oa, d = Vg(c) ? b.keyCode : 0) : (c = b.keyCode || this.Oa, d = b.charCode || 0, Pb && 63 == d && 224 == c && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in Zg ? f = Zg[c] : 25 == c && a.shiftKey && (f = 9) : g && g in $g && (f = $g[g]);
  a = f == this.Pa;
  this.Pa = f;
  b = new bh(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.g()
  }
};
q.b = n("e");
function Yg(a, b, c) {
  a.Jc && a.detach();
  a.e = b;
  a.Ic = M(a.e, "keypress", a, c);
  a.Md = M(a.e, "keydown", a.xg, c, a);
  a.Jc = M(a.e, "keyup", a.yg, c, a)
}
q.detach = function() {
  this.Ic && (vc(this.Ic), vc(this.Md), vc(this.Jc), this.Jc = this.Md = this.Ic = k);
  this.e = k;
  this.Oa = this.Pa = -1
};
q.c = function() {
  Xg.f.c.call(this);
  this.detach()
};
function bh(a, b, c, d) {
  d && this.Zb(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(bh, jc);
function W(a, b, c) {
  Xd.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = la(b);
      if(d = Tg[d]) {
        break
      }
      b = b.f ? b.f.constructor : k
    }
    b = d ? ka(d.La) ? d.La() : new d : k
  }
  this.l = b;
  this.Vc(a)
}
C(W, Xd);
q = W.prototype;
q.ba = k;
q.h = 0;
q.T = 39;
q.kd = 255;
q.Xg = 0;
q.Mb = j;
q.ta = k;
q.Gd = j;
q.jd = m;
q.Mg = k;
q.cb = function() {
  return this.l.cb(this)
};
function ch(a, b) {
  b && (a.ta ? $a(a.ta, b) || a.ta.push(b) : a.ta = [b], a.l.Tb(a, b, j))
}
q.Tb = function(a, b) {
  b ? ch(this, a) : a && this.ta && (bb(this.ta, a), 0 == this.ta.length && (this.ta = k), this.l.Tb(this, a, m))
};
q.i = function() {
  var a = this.l.i(this);
  this.e = a;
  var b = this.Mg || this.l.xc();
  b && Lg(a, b);
  this.jd || this.l.Tc(a, m);
  this.Mb || this.l.je(a, m)
};
q.Vb = function() {
  return this.l.Vb(this.b())
};
q.P = function() {
  W.f.P.call(this);
  this.l.bf(this);
  if(this.T & -2 && (this.Gd && dh(this, j), this.T & 32)) {
    var a = this.cb();
    if(a) {
      var b = this.zb || (this.zb = new Xg);
      Yg(b, a);
      P(P(P(ae(this), b, "key", this.Xe), a, "focus", this.vg), a, "blur", this.Ue)
    }
  }
};
function dh(a, b) {
  var c = ae(a), d = a.b();
  b ? (P(P(P(P(c, d, "mouseover", a.Dc), d, "mousedown", a.Bc), d, "mouseup", a.Ye), d, "mouseout", a.Cc), I && P(c, d, "dblclick", a.We)) : (Vd(Vd(Vd(Vd(c, d, "mouseover", a.Dc), d, "mousedown", a.Bc), d, "mouseup", a.Ye), d, "mouseout", a.Cc), I && Vd(c, d, "dblclick", a.We))
}
q.ab = function() {
  W.f.ab.call(this);
  this.zb && this.zb.detach();
  this.Mb && this.isEnabled() && this.l.Wc(this, m)
};
q.c = function() {
  W.f.c.call(this);
  this.zb && (this.zb.g(), delete this.zb);
  delete this.l;
  this.ta = this.ba = k
};
q.Uc = function(a) {
  this.l.Uc(this.b(), a);
  this.Vc(a)
};
q.Vc = aa("ba");
q.Pe = function() {
  var a = this.ba;
  if(!a) {
    return""
  }
  if(!w(a)) {
    if(v(a)) {
      a = Xa(a, wd).join("")
    }else {
      if(bd && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        xd(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      bd || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
q.Ib = function(a) {
  W.f.Ib.call(this, a);
  var b = this.b();
  b && this.l.Ib(b, a)
};
q.Tc = function(a) {
  this.jd = a;
  var b = this.b();
  b && this.l.Tc(b, a)
};
q.je = function(a, b) {
  if(b || this.Mb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.l.je(c, a);
    this.isEnabled() && this.l.Wc(this, a);
    this.Mb = a;
    return j
  }
  return m
};
q.isEnabled = function() {
  return!(this.h & 1)
};
function eh(a, b) {
  fh(a, 2, b) && a.ja(2, b)
}
q.Ld = function() {
  return!!(this.h & 4)
};
q.setActive = function(a) {
  fh(this, 4, a) && this.ja(4, a)
};
q.ge = function(a) {
  fh(this, 8, a) && this.ja(8, a)
};
q.ja = function(a, b) {
  this.T & a && b != !!(this.h & a) && (this.l.ja(this, a, b), this.h = b ? this.h | a : this.h & ~a)
};
function X(a, b) {
  return!!(a.kd & b) && !!(a.T & b)
}
function fh(a, b, c) {
  return!!(a.T & b) && !!(a.h & b) != c && (!(a.Xg & b) || a.dispatchEvent(Zd(b, c))) && !a.sa
}
q.Dc = function(a) {
  !gh(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && eh(this, j)
};
q.Cc = function(a) {
  !gh(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(m), X(this, 2) && eh(this, m))
};
function gh(a, b) {
  return!!a.relatedTarget && rd(b, a.relatedTarget)
}
q.Bc = function(a) {
  if(this.isEnabled() && (X(this, 2) && eh(this, j), lc(a) && (!J || !Pb || !a.ctrlKey))) {
    X(this, 4) && this.setActive(j), this.l.ef(this) && this.cb().focus()
  }
  !this.jd && lc(a) && (!J || !Pb || !a.ctrlKey) && a.preventDefault()
};
q.Ye = function(a) {
  this.isEnabled() && (X(this, 2) && eh(this, j), this.Ld() && this.ib(a) && X(this, 4) && this.setActive(m))
};
q.We = function(a) {
  this.isEnabled() && this.ib(a)
};
q.ib = function(a) {
  if(X(this, 16)) {
    var b = !(this.h & 16);
    fh(this, 16, b) && this.ja(16, b)
  }
  X(this, 8) && this.ge(j);
  X(this, 64) && (b = !(this.h & 64), fh(this, 64, b) && this.ja(64, b));
  b = new gc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.Zd = a.Zd);
  return this.dispatchEvent(b)
};
q.vg = function() {
  X(this, 32) && fh(this, 32, j) && this.ja(32, j)
};
q.Ue = function() {
  X(this, 4) && this.setActive(m);
  X(this, 32) && fh(this, 32, m) && this.ja(32, m)
};
q.Xe = function(a) {
  return this.Mb && this.isEnabled() && this.Fd(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
q.Fd = function(a) {
  return 13 == a.keyCode && this.ib(a)
};
ka(W) || e(Error("Invalid component class " + W));
ka(Mg) || e(Error("Invalid renderer class " + Mg));
var hh = la(W);
Tg[hh] = Mg;
Sg("goog-control", function() {
  return new W(k)
});
function ih() {
}
C(ih, Mg);
ea(ih);
q = ih.prototype;
q.xc = p("button");
q.$ = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : ih.f.$.call(this, a, b, c)
};
q.i = function(a) {
  var b = ih.f.i.call(this, a), c = a.yc();
  c && this.ie(b, c);
  (c = a.zc()) && this.Zc(b, c);
  a.T & 16 && this.$(b, 16, !!(a.h & 16));
  return b
};
q.zc = da;
q.Zc = da;
q.yc = function(a) {
  return a.title
};
q.ie = function(a, b) {
  a && (a.title = b || "")
};
q.t = p("goog-button");
function jh() {
}
C(jh, ih);
ea(jh);
q = jh.prototype;
q.xc = function() {
};
q.i = function(a) {
  a.q && m != a.Gd && dh(a, m);
  a.Gd = m;
  a.kd &= -256;
  a.q && a.h & 32 && e(Error("Component already rendered"));
  a.h & 32 && a.ja(32, m);
  a.T &= -33;
  return a.Fa().i("button", {"class":Og(this, a).join(" "), disabled:!a.isEnabled(), title:a.yc() || "", value:a.zc() || ""}, a.Pe() || "")
};
q.bf = function(a) {
  P(ae(a), a.b(), "click", a.ib)
};
q.Tc = da;
q.Ib = da;
q.ef = function(a) {
  return a.isEnabled()
};
q.Wc = da;
q.ja = function(a, b, c) {
  jh.f.ja.call(this, a, b, c);
  if((a = a.b()) && 1 == b) {
    a.disabled = c
  }
};
q.zc = function(a) {
  return a.value
};
q.Zc = function(a, b) {
  a && (a.value = b)
};
q.$ = da;
function kh(a, b, c) {
  W.call(this, a, b || jh.La(), c)
}
C(kh, W);
q = kh.prototype;
q.zc = n("Uf");
q.Zc = function(a) {
  this.Uf = a;
  this.l.Zc(this.b(), a)
};
q.yc = n("Qf");
q.ie = function(a) {
  this.Qf = a;
  this.l.ie(this.b(), a)
};
q.c = function() {
  kh.f.c.call(this);
  delete this.Uf;
  delete this.Qf
};
q.P = function() {
  kh.f.P.call(this);
  if(this.T & 32) {
    var a = this.cb();
    a && P(ae(this), a, "keyup", this.Fd)
  }
};
q.Fd = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.ib(a) : 32 == a.keyCode
};
Sg("goog-button", function() {
  return new kh(k)
});
function lh() {
}
C(lh, ih);
ea(lh);
q = lh.prototype;
q.i = function(a) {
  var b = {"class":"goog-inline-block " + Og(this, a).join(" "), title:a.yc() || ""}, b = a.Fa().i("div", b, mh(this, a.ba, a.Fa()));
  this.ce(a, b);
  return b
};
q.xc = p("button");
q.ce = function(a, b) {
  a.isEnabled() || this.$(b, 1, j);
  a.h & 8 && this.$(b, 8, j);
  a.T & 16 && this.$(b, 16, j);
  a.h & 64 && this.$(b, 64, j)
};
q.Vb = function(a) {
  return a && a.firstChild.firstChild
};
function mh(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.t() + "-outer-box"), c.i("div", "goog-inline-block " + (a.t() + "-inner-box"), b))
}
q.t = p("goog-custom-button");
function nh(a, b, c) {
  kh.call(this, a, b || lh.La(), c)
}
C(nh, kh);
Sg("goog-custom-button", function() {
  return new nh(k)
});
var oh = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function ph(a) {
  var b = {}, a = "" + a, c = "#" == a.charAt(0) ? a : "#" + a;
  if(qh.test(c)) {
    return b.Fc = rh(c), b.type = "hex", b
  }
  a: {
    var d = a.match(sh);
    if(d) {
      var c = Number(d[1]), f = Number(d[2]), d = Number(d[3]);
      if(0 <= c && 255 >= c && 0 <= f && 255 >= f && 0 <= d && 255 >= d) {
        c = [c, f, d];
        break a
      }
    }
    c = []
  }
  if(c.length) {
    return b.Fc = th(c[0], c[1], c[2]), b.type = "rgb", b
  }
  if(oh && (c = oh[a.toLowerCase()])) {
    return b.Fc = c, b.type = "named", b
  }
  e(Error(a + " is not a valid color string"))
}
var uh = /#(.)(.)(.)/;
function rh(a) {
  qh.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  4 == a.length && (a = a.replace(uh, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function vh(a) {
  a = rh(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function th(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || 0 > a || 255 < a || isNaN(b) || 0 > b || 255 < b || isNaN(c) || 0 > c || 255 < c) && e(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = wh(a.toString(16));
  b = wh(b.toString(16));
  c = wh(c.toString(16));
  return"#" + a + b + c
}
var qh = /^#(?:[0-9a-f]{3}){1,2}$/i, sh = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function wh(a) {
  return 1 == a.length ? "0" + a : a
}
;function xh() {
}
xh.prototype.nc = k;
var yh;
function zh() {
}
C(zh, xh);
function Ah(a) {
  return(a = Bh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Ch(a) {
  var b = {};
  Bh(a) && (b[0] = j, b[1] = j);
  return b
}
zh.prototype.Id = k;
function Bh(a) {
  if(!a.Id && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Id = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Id
}
yh = new zh;
function Dh(a) {
  this.headers = new ob;
  this.Nb = a || k
}
C(Dh, Bc);
Dh.prototype.a = T("goog.net.XhrIo");
var Eh = /^https?$/i;
q = Dh.prototype;
q.Ia = m;
q.k = k;
q.fd = k;
q.Od = "";
q.gf = "";
q.$b = "";
q.wd = m;
q.Gc = m;
q.Jd = m;
q.gb = m;
q.bd = 0;
q.nb = k;
q.Df = "";
q.hh = m;
q.send = function(a, b, c, d) {
  this.k && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Od = a;
  this.$b = "";
  this.gf = b;
  this.wd = m;
  this.Ia = j;
  this.k = this.Nb ? Ah(this.Nb) : Ah(yh);
  this.fd = this.Nb ? this.Nb.nc || (this.Nb.nc = Ch(this.Nb)) : yh.nc || (yh.nc = Ch(yh));
  this.k.onreadystatechange = y(this.tf, this);
  try {
    R(this.a, Fh(this, "Opening Xhr")), this.Jd = j, this.k.open(b, a, j), this.Jd = m
  }catch(f) {
    R(this.a, Fh(this, "Error opening Xhr: " + f.message));
    Gh(this, f);
    return
  }
  var a = c || "", g = this.headers.L();
  d && mb(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.aa("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  mb(g, function(a, b) {
    this.k.setRequestHeader(b, a)
  }, this);
  this.Df && (this.k.responseType = this.Df);
  "withCredentials" in this.k && (this.k.withCredentials = this.hh);
  try {
    this.nb && (Dc.clearTimeout(this.nb), this.nb = k), 0 < this.bd && (R(this.a, Fh(this, "Will abort after " + this.bd + "ms if incomplete")), this.nb = Dc.setTimeout(y(this.bh, this), this.bd)), R(this.a, Fh(this, "Sending request")), this.Gc = j, this.k.send(a), this.Gc = m
  }catch(i) {
    R(this.a, Fh(this, "Send error: " + i.message)), Gh(this, i)
  }
};
q.bh = function() {
  "undefined" != typeof ba && this.k && (this.$b = "Timed out after " + this.bd + "ms, aborting", R(this.a, Fh(this, this.$b)), this.dispatchEvent("timeout"), this.abort(8))
};
function Gh(a, b) {
  a.Ia = m;
  a.k && (a.gb = j, a.k.abort(), a.gb = m);
  a.$b = b;
  Hh(a);
  Ih(a)
}
function Hh(a) {
  a.wd || (a.wd = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
q.abort = function() {
  this.k && this.Ia && (R(this.a, Fh(this, "Aborting")), this.Ia = m, this.gb = j, this.k.abort(), this.gb = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Ih(this))
};
q.c = function() {
  this.k && (this.Ia && (this.Ia = m, this.gb = j, this.k.abort(), this.gb = m), Ih(this, j));
  Dh.f.c.call(this)
};
q.tf = function() {
  !this.Jd && !this.Gc && !this.gb ? this.Kg() : Jh(this)
};
q.Kg = function() {
  Jh(this)
};
function Jh(a) {
  if(a.Ia && "undefined" != typeof ba) {
    if(a.fd[1] && 4 == a.Ma() && 2 == Kh(a)) {
      R(a.a, Fh(a, "Local request error detected and ignored"))
    }else {
      if(a.Gc && 4 == a.Ma()) {
        Dc.setTimeout(y(a.tf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.Ma()) {
          R(a.a, Fh(a, "Request complete"));
          a.Ia = m;
          var b = Kh(a), c;
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
              b = ("" + a.Od).match(uf)[1] || k, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !Eh.test(b ? b.toLowerCase() : "")
            }
            c = b
          }
          if(c) {
            a.dispatchEvent("complete"), a.dispatchEvent("success")
          }else {
            var d;
            try {
              d = 2 < a.Ma() ? a.k.statusText : ""
            }catch(f) {
              R(a.a, "Can not get status: " + f.message), d = ""
            }
            a.$b = d + " [" + Kh(a) + "]";
            Hh(a)
          }
          Ih(a)
        }
      }
    }
  }
}
function Ih(a, b) {
  if(a.k) {
    var c = a.k, d = a.fd[0] ? da : k;
    a.k = k;
    a.fd = k;
    a.nb && (Dc.clearTimeout(a.nb), a.nb = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(f) {
      ye(a.a, "Problem encountered resetting onreadystatechange: " + f.message)
    }
  }
}
q.Ld = function() {
  return!!this.k
};
q.Ma = function() {
  return this.k ? this.k.readyState : 0
};
function Kh(a) {
  try {
    return 2 < a.Ma() ? a.k.status : -1
  }catch(b) {
    return Q(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.k && 4 == this.Ma() ? this.k.getResponseHeader(a) : h
};
function Fh(a, b) {
  return b + " [" + a.gf + " " + a.Od + " " + Kh(a) + "]"
}
;var Lh = !(I || J && !K("420+"));
function Mh(a, b) {
  this.cd = a;
  this.na = b
}
C(Mh, L);
q = Mh.prototype;
q.r = k;
q.Ta = -1;
q.Te = m;
q.Ze = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Nh(a) {
  var b = bg(a.Ge), c = b[0], b = b[1], d = s.parent;
  d ? (d.__XHRMaster_onframes(a.na, c, b), 1 != b && a.g()) : a.g()
}
q.Ag = function() {
  Nh(this);
  if(!this.sa) {
    var a = s.parent;
    a && a.__XHRMaster_oncomplete(this.na);
    this.g()
  }
};
q.Pg = function() {
  var a = s.parent;
  if(a) {
    this.Ta = this.r.Ma();
    if(2 <= this.Ta && !this.Te) {
      for(var b = new ob, c = this.Ze.length;c--;) {
        var d = this.Ze[c];
        try {
          b.set(d, this.r.k.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.Q() && (this.Te = j, a.__XHRMaster_ongotheaders(this.na, sb(b)), this.sa)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.na, this.Ta);
    Lh && 3 == this.Ta && Nh(this)
  }else {
    this.g()
  }
};
q.Rd = function(a, b, c) {
  this.r = new Dh;
  M(this.r, "readystatechange", y(this.Pg, this));
  M(this.r, "complete", y(this.Ag, this));
  this.r.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Ge = new ag(this.r.k, 1048576)
};
q.c = function() {
  Mh.f.c.call(this);
  delete this.Ge;
  this.r && this.r.g();
  delete this.cd.hc[this.na];
  delete this.cd
};
function Oh() {
  this.hc = {}
}
C(Oh, L);
Oh.prototype.Fg = function(a, b, c, d) {
  var f = new Mh(this, a);
  this.hc[a] = f;
  f.Rd(b, c, d)
};
Oh.prototype.lg = function(a) {
  (a = this.hc[a]) && a.g()
};
Oh.prototype.c = function() {
  Oh.f.c.call(this);
  for(var a = ta(this.hc);a.length;) {
    a.pop().g()
  }
  delete this.hc
};
var Ph = new Oh;
s.__XHRSlave_makeRequest = y(Ph.Fg, Ph);
s.__XHRSlave_dispose = y(Ph.lg, Ph);
var Qh = T("cw.net.demo");
function Rh() {
}
Rh.prototype.Qe = function() {
  return Boolean(Number((new wf(document.location)).S.get("httpStreaming", "0"))) ? 2 : 1
};
function Sh(a) {
  this.p = a
}
var Th = /\s*;\s*/;
q = Sh.prototype;
q.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && J) {
    var b = "COOKIES_TEST_" + B();
    Uh.set(b, "1");
    if(!this.get(b)) {
      return m
    }
    this.remove(b)
  }
  return a
};
q.set = function(a, b, c, d, f, g) {
  /[;=\s]/.test(a) && e(Error('Invalid cookie name "' + a + '"'));
  /[;\r\n]/.test(b) && e(Error('Invalid cookie value "' + b + '"'));
  u(c) || (c = -1);
  f = f ? ";domain=" + f : "";
  d = d ? ";path=" + d : "";
  g = g ? ";secure" : "";
  c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(B() + 1E3 * c)).toUTCString();
  this.p.cookie = a + "=" + b + f + d + c + g
};
q.get = function(a, b) {
  for(var c = a + "=", d = (this.p.cookie || "").split(Th), f = 0, g;g = d[f];f++) {
    if(0 == g.indexOf(c)) {
      return g.substr(c.length)
    }
    if(g == a) {
      return""
    }
  }
  return b
};
q.remove = function(a, b, c) {
  var d = this.aa(a);
  this.set(a, "", 0, b, c);
  return d
};
q.ua = function() {
  return Vh(this).keys
};
q.X = function() {
  return Vh(this).Vf
};
q.Na = function() {
  return!this.p.cookie
};
q.Q = function() {
  return!this.p.cookie ? 0 : (this.p.cookie || "").split(Th).length
};
q.aa = function(a) {
  return u(this.get(a))
};
q.rc = function(a) {
  for(var b = Vh(this).Vf, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return j
    }
  }
  return m
};
q.clear = function() {
  for(var a = Vh(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b])
  }
};
function Vh(a) {
  for(var a = (a.p.cookie || "").split(Th), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), -1 == d ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{keys:b, Vf:c}
}
var Uh = new Sh(document);
Uh.Qh = 3950;
function Wh() {
  this.Af = B()
}
var Xh = new Wh;
Wh.prototype.set = aa("Af");
Wh.prototype.reset = function() {
  this.set(B())
};
Wh.prototype.get = n("Af");
function Yh(a) {
  this.Ng = a || "";
  this.Wg = Xh
}
Yh.prototype.Jf = j;
Yh.prototype.Ug = j;
Yh.prototype.Tg = j;
Yh.prototype.Kf = m;
function Zh(a) {
  return 10 > a ? "0" + a : "" + a
}
function $h(a, b) {
  var c = (a.Pf - b) / 1E3, d = c.toFixed(3), f = 0;
  if(1 > c) {
    f = 2
  }else {
    for(;100 > c;) {
      f++, c *= 10
    }
  }
  for(;0 < f--;) {
    d = " " + d
  }
  return d
}
function ai(a) {
  Yh.call(this, a)
}
C(ai, Yh);
ai.prototype.Kf = j;
function bi(a) {
  this.Og = y(this.Zf, this);
  this.Oe = new ai;
  this.df = this.Oe.Jf = m;
  this.e = a;
  this.ng = this.e.ownerDocument || this.e.document;
  var a = cd(this.e), b = k;
  if(I) {
    b = a.p.createStyleSheet(), Qd(b)
  }else {
    var c = fd(a.p, "head", h, h)[0];
    c || (b = fd(a.p, "body", h, h)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    Qd(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
bi.prototype.Zf = function(a) {
  var b = 100 >= this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight, c = this.ng.createElement("div");
  c.className = "logmsg";
  var d = this.Oe, f;
  switch(a.Bb.value) {
    case pe.value:
      f = "dbg-sh";
      break;
    case qe.value:
      f = "dbg-sev";
      break;
    case re.value:
      f = "dbg-w";
      break;
    case se.value:
      f = "dbg-i";
      break;
    default:
      f = "dbg-f"
  }
  var g = [];
  g.push(d.Ng, " ");
  if(d.Jf) {
    var i = new Date(a.Pf);
    g.push("[", Zh(i.getFullYear() - 2E3) + Zh(i.getMonth() + 1) + Zh(i.getDate()) + " " + Zh(i.getHours()) + ":" + Zh(i.getMinutes()) + ":" + Zh(i.getSeconds()) + "." + Zh(Math.floor(i.getMilliseconds() / 10)), "] ")
  }
  d.Ug && g.push("[", Oa($h(a, d.Wg.get())), "s] ");
  d.Tg && g.push("[", Ia(a.Eg), "] ");
  g.push('<span class="', f, '">', Ha(Oa(Ia(a.pf))));
  d.Kf && a.zd && g.push("<br>", Ha(Oa(a.yd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  b && (this.e.scrollTop = this.e.scrollHeight)
};
bi.prototype.clear = function() {
  this.e.innerHTML = ""
};
function ci(a, b, c, d, f, g) {
  6 == arguments.length ? this.setTransform(a, b, c, d, f, g) : (0 != arguments.length && e(Error("Insufficient matrix parameters")), this.da = this.ga = 1, this.Y = this.ea = this.fa = this.ha = 0)
}
q = ci.prototype;
q.L = function() {
  return new ci(this.da, this.Y, this.ea, this.ga, this.fa, this.ha)
};
q.setTransform = function(a, b, c, d, f, g) {
  (!ja(a) || !ja(b) || !ja(c) || !ja(d) || !ja(f) || !ja(g)) && e(Error("Invalid transform parameters"));
  this.da = a;
  this.Y = b;
  this.ea = c;
  this.ga = d;
  this.fa = f;
  this.ha = g;
  return this
};
q.scale = function(a, b) {
  this.da *= a;
  this.Y *= a;
  this.ea *= b;
  this.ga *= b;
  return this
};
q.translate = function(a, b) {
  this.fa += a * this.da + b * this.ea;
  this.ha += a * this.Y + b * this.ga;
  return this
};
q.rotate = function(a, b, c) {
  var d = new ci, f = Math.cos(a), a = Math.sin(a), b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f), c = this.da, d = this.ea;
  this.da = b.da * c + b.Y * d;
  this.ea = b.ea * c + b.ga * d;
  this.fa += b.fa * c + b.ha * d;
  c = this.Y;
  d = this.ga;
  this.Y = b.da * c + b.Y * d;
  this.ga = b.ea * c + b.ga * d;
  this.ha += b.fa * c + b.ha * d;
  return this
};
q.toString = function() {
  return"matrix(" + [this.da, this.Y, this.ea, this.ga, this.fa, this.ha].join() + ")"
};
q.V = function(a) {
  return this == a ? j : !a ? m : this.da == a.da && this.ea == a.ea && this.fa == a.fa && this.Y == a.Y && this.ga == a.ga && this.ha == a.ha
};
function Y(a, b) {
  this.e = a;
  this.va = b;
  this.td = m
}
C(Y, Bc);
q = Y.prototype;
q.va = k;
q.e = k;
q.Rf = k;
q.b = n("e");
q.addEventListener = function(a, b, c, d) {
  M(this.e, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  tc(this.e, a, b, c, d)
};
q.c = function() {
  Y.f.c.call(this);
  xc(this.e)
};
function Z(a, b, c, d) {
  Y.call(this, a, b);
  this.qe = c;
  this.va.ee(this, c);
  this.fill = d;
  this.va.de(this, d)
}
C(Z, Y);
Z.prototype.fill = k;
Z.prototype.qe = k;
Z.prototype.sg = n("fill");
Z.prototype.ug = n("qe");
function di(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(di, Z);
function ei(a, b) {
  Y.call(this, a, b)
}
C(ei, Y);
function fi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(fi, Z);
function gi(a, b) {
  Y.call(this, a, b)
}
C(gi, Y);
function hi(a, b) {
  Y.call(this, a, b)
}
C(hi, ei);
hi.prototype.clear = function() {
  pd(this.b())
};
hi.prototype.Z = function(a, b) {
  ii(this.b(), {width:a, height:b})
};
function ji(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(ji, fi);
function ki(a, b) {
  Y.call(this, a, b)
}
C(ki, gi);
ki.prototype.Z = function(a, b) {
  ii(this.b(), {width:a, height:b})
};
function li() {
}
;function mi(a, b) {
  this.ra = a;
  this.ac = b || 1
}
C(mi, li);
function ni() {
  this.pb = 1;
  this.ra = "black"
}
;function oi() {
  this.C = [];
  this.d = [];
  this.pa = []
}
oi.prototype.tb = k;
oi.prototype.U = k;
oi.prototype.Jb = j;
var pi = [2, 2, 6, 6, 0];
q = oi.prototype;
q.clear = function() {
  this.C.length = 0;
  this.d.length = 0;
  this.pa.length = 0;
  delete this.tb;
  delete this.U;
  delete this.Jb;
  return this
};
q.moveTo = function(a, b) {
  0 == this.C[this.C.length - 1] ? this.pa.length -= 2 : (this.C.push(0), this.d.push(1));
  this.pa.push(a, b);
  this.U = this.tb = [a, b];
  return this
};
q.lineTo = function(a) {
  var b = this.C[this.C.length - 1];
  b == k && e(Error("Path cannot start with lineTo"));
  1 != b && (this.C.push(1), this.d.push(0));
  for(b = 0;b < arguments.length;b += 2) {
    var c = arguments[b], d = arguments[b + 1];
    this.pa.push(c, d)
  }
  this.d[this.d.length - 1] += b / 2;
  this.U = [c, d];
  return this
};
q.Fe = function(a) {
  var b = this.C[this.C.length - 1];
  b == k && e(Error("Path cannot start with curve"));
  2 != b && (this.C.push(2), this.d.push(0));
  for(b = 0;b < arguments.length;b += 6) {
    var c = arguments[b + 4], d = arguments[b + 5];
    this.pa.push(arguments[b], arguments[b + 1], arguments[b + 2], arguments[b + 3], c, d)
  }
  this.d[this.d.length - 1] += b / 6;
  this.U = [c, d];
  return this
};
q.close = function() {
  var a = this.C[this.C.length - 1];
  a == k && e(Error("Path cannot start with close"));
  4 != a && (this.C.push(4), this.d.push(1), this.U = this.tb);
  return this
};
q.arcTo = function(a, b, c, d) {
  var f = this.U[0] - a * Math.cos(af(c)) + a * Math.cos(af(c + d)), g = this.U[1] - b * Math.sin(af(c)) + b * Math.sin(af(c + d));
  this.C.push(3);
  this.d.push(1);
  this.pa.push(a, b, c, d, f, g);
  this.Jb = m;
  this.U = [f, g];
  return this
};
q.ag = function(a, b, c, d) {
  for(var f = this.U[0] - a * Math.cos(af(c)), g = this.U[1] - b * Math.sin(af(c)), i = af(d), d = Math.ceil(2 * (Math.abs(i) / Math.PI)), i = i / d, c = af(c), l = 0;l < d;l++) {
    var o = Math.cos(c), r = Math.sin(c), z = 4 / 3 * Math.sin(i / 2) / (1 + Math.cos(i / 2)), t = f + (o - z * r) * a, x = g + (r + z * o) * b, c = c + i, o = Math.cos(c), r = Math.sin(c);
    this.Fe(t, x, f + (o + z * r) * a, g + (r - z * o) * b, f + o * a, g + r * b)
  }
  return this
};
function qi(a, b) {
  for(var c = a.pa, d = 0, f = 0, g = a.C.length;f < g;f++) {
    var i = a.C[f], l = pi[i] * a.d[f];
    b(i, c.slice(d, d + l));
    d += l
  }
}
q.L = function() {
  var a = new this.constructor;
  a.C = this.C.concat();
  a.d = this.d.concat();
  a.pa = this.pa.concat();
  a.tb = this.tb && this.tb.concat();
  a.U = this.U && this.U.concat();
  a.Jb = this.Jb;
  return a
};
var ri = {};
ri[0] = oi.prototype.moveTo;
ri[1] = oi.prototype.lineTo;
ri[4] = oi.prototype.close;
ri[2] = oi.prototype.Fe;
ri[3] = oi.prototype.ag;
function si(a) {
  if(a.Jb) {
    return a.L()
  }
  var b = new oi;
  qi(a, function(a, d) {
    ri[a].apply(b, d)
  });
  return b
}
oi.prototype.Na = function() {
  return 0 == this.C.length
};
function ti(a, b, c, d, f) {
  Xd.call(this, f);
  this.width = a;
  this.height = b;
  this.ka = c || k;
  this.Rb = d || k
}
C(ti, Xd);
q = ti.prototype;
q.G = k;
q.Ja = 0;
q.Za = 0;
q.Se = function() {
  return this.W()
};
q.W = function() {
  return this.q ? Od(this.b()) : ja(this.width) && ja(this.height) ? new N(this.width, this.height) : k
};
function ui(a) {
  var b = a.W();
  return b ? b.width / (a.ka ? new N(a.ka, a.Rb) : a.W()).width : 0
}
;function vi(a, b, c, d, f) {
  ti.call(this, a, b, c, d, f);
  this.Ie = {};
  this.ve = J && !K(526);
  this.eb = new Td(this)
}
var wi;
C(vi, ti);
function xi(a, b, c) {
  a = a.M.p.createElementNS("http://www.w3.org/2000/svg", b);
  c && ii(a, c);
  return a
}
function ii(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
q = vi.prototype;
q.rb = function(a, b) {
  (b || this.G).b().appendChild(a.b())
};
q.de = function(a, b) {
  var c = a.b();
  b instanceof mi ? (c.setAttribute("fill", b.ra), c.setAttribute("fill-opacity", b.ac)) : c.setAttribute("fill", "none")
};
q.ee = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.ra);
    var d = b.pb;
    w(d) && -1 != d.indexOf("px") ? c.setAttribute("stroke-width", parseFloat(d) / ui(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
q.i = function() {
  var a = xi(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = xi(this, "g");
  this.vd = xi(this, "defs");
  this.G = new hi(b, this);
  a.appendChild(this.vd);
  a.appendChild(b);
  this.e = a;
  if(this.ka || this.Ja || this.Za) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.ve ? this.dd() : this.b().setAttribute("viewBox", this.Ja + " " + this.Za + " " + (this.ka ? this.ka + " " + this.Rb : ""))
  }
};
q.dd = function() {
  if(this.q && (this.ka || this.Ja || !this.Za)) {
    var a = this.W();
    if(0 == a.width) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.Ja, c = -this.Za, d = a.width / this.ka, a = a.height / this.Rb;
      this.G.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
q.Z = function(a, b) {
  Md(this.b(), a, b)
};
q.W = function() {
  if(!Mb) {
    return this.q ? Od(this.b()) : vi.f.W.call(this)
  }
  var a = this.width, b = this.height, c = w(a) && -1 != a.indexOf("%"), d = w(b) && -1 != b.indexOf("%");
  if(!this.q && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = Od(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Od(f), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
q.clear = function() {
  this.G.clear();
  pd(this.vd);
  this.Ie = {}
};
q.sc = function(a, b, c, d, f, g, i) {
  a = xi(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new ji(a, this, f, g);
  this.rb(f, i);
  return f
};
q.drawImage = function(a, b, c, d, f, g) {
  a = xi(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new ki(a, this);
  this.rb(f, g);
  return f
};
q.P = function() {
  var a = this.W();
  vi.f.P.call(this);
  a || this.dispatchEvent("resize");
  if(this.ve) {
    var a = this.width, b = this.height;
    "string" == typeof a && -1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%") && P(this.eb, yi(), Ec, this.dd);
    this.dd()
  }
};
q.ab = function() {
  vi.f.ab.call(this);
  this.ve && Vd(this.eb, yi(), Ec, this.dd)
};
q.c = function() {
  delete this.Ie;
  delete this.vd;
  delete this.G;
  vi.f.c.call(this)
};
function yi() {
  wi || (wi = new Cc(400), wi.start());
  return wi
}
;function zi() {
  return this.e = this.va.M.b(this.R) || this.e
}
function Ai(a, b) {
  this.R = a.id;
  Y.call(this, a, b)
}
C(Ai, ei);
Ai.prototype.b = zi;
Ai.prototype.clear = function() {
  pd(this.b())
};
Ai.prototype.Z = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  this.va.G != this && (c.coordorigin = "0 0")
};
function Bi(a, b, c, d, f, g, i, l) {
  this.R = a.id;
  Z.call(this, a, b, i, l)
}
C(Bi, fi);
Bi.prototype.b = zi;
function Ci(a, b) {
  this.R = a.id;
  Y.call(this, a, b)
}
C(Ci, gi);
Ci.prototype.b = zi;
Ci.prototype.Z = function(a, b) {
  var c = this.b().style;
  c.width = Di(a) + "px";
  c.height = Di(b) + "px"
};
function Ei(a, b, c, d, f) {
  ti.call(this, a, b, c, d, f);
  this.eb = new Td(this)
}
C(Ei, ti);
var Fi = document.documentMode && 8 <= document.documentMode;
function Di(a) {
  return Math.round(100 * (parseFloat(a.toString()) - 0.5))
}
function $(a) {
  return Math.round(100 * parseFloat(a.toString()))
}
function Gi(a, b) {
  var c = a.M.createElement("g_vml_:" + b);
  c.id = "goog_" + Qa++;
  return c
}
function Hi(a) {
  Fi && a.q && (a.b().innerHTML = a.b().innerHTML)
}
Ei.prototype.rb = function(a, b) {
  (b || this.G).b().appendChild(a.b());
  Hi(this)
};
Ei.prototype.de = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    "fill" == f.tagName && c.removeChild(f)
  }
  b instanceof mi ? "transparent" == b.ra ? c.filled = m : 1 != b.ac ? (c.filled = j, d = Gi(this, "fill"), d.opacity = Math.round(100 * b.ac) + "%", d.color = b.ra, c.appendChild(d)) : (c.filled = j, c.fillcolor = b.ra) : c.filled = m;
  Hi(this)
};
Ei.prototype.ee = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = j;
    var d = b.pb, d = w(d) && -1 == d.indexOf("px") ? parseFloat(d) : d * ui(this), f = c.getElementsByTagName("stroke")[0];
    1 > d ? (f = f || Gi(this, "stroke"), f.opacity = d, f.wi = "1px", f.color = b.ra, c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.ra, c.strokeweight = d + "px")
  }else {
    c.stroked = m
  }
  Hi(this)
};
function Ii(a, b, c, d, f) {
  var g = a.style;
  g.position = "absolute";
  g.left = Di(b) + "px";
  g.top = Di(c) + "px";
  g.width = $(d) + "px";
  g.height = $(f) + "px";
  "shape" == a.tagName && (a.coordsize = $(d) + " " + $(f))
}
try {
  eval("document.namespaces")
}catch(Ji) {
}
q = Ei.prototype;
q.i = function() {
  var a = this.M.p;
  a.namespaces.g_vml_ || (Fi ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}");
  var a = this.width, b = this.height, c = this.M.i("div", {style:"overflow:hidden;position:relative;width:" + (w(a) && Da(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (w(b) && Da(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = Gi(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.ka ? $(this.ka) + " " + $(this.Rb) : $(a) + " " + $(b);
  d.coordorigin = u(this.Ja) ? $(this.Ja) + " " + $(this.Za) : "0 0";
  c.appendChild(d);
  this.G = new Ai(d, this);
  M(c, "resize", y(this.Ed, this))
};
q.Ed = function() {
  var a = Od(this.b()), b = this.G.b().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.b();a && a.currentStyle && "none" != a.currentStyle.display;) {
      a = a.parentNode
    }
    a && a.currentStyle && P(this.eb, a, "propertychange", this.Ed)
  }
  this.dispatchEvent("resize")
};
q.Z = function(a, b) {
  Md(this.b(), a, b)
};
q.W = function() {
  var a = this.b();
  return new N(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
q.clear = function() {
  this.G.clear()
};
q.sc = function(a, b, c, d, f, g, i) {
  var l = Gi(this, "oval");
  Ii(l, a - c, b - d, 2 * c, 2 * d);
  a = new Bi(l, this, 0, 0, 0, 0, f, g);
  this.rb(a, i);
  return a
};
q.drawImage = function(a, b, c, d, f, g) {
  var i = Gi(this, "image");
  Ii(i, a, b, c, d);
  Fi ? i.src = f : i.setAttribute("src", f);
  a = new Ci(i, this);
  this.rb(a, g);
  return a
};
q.P = function() {
  Ei.f.P.call(this);
  this.Ed();
  Hi(this)
};
q.c = function() {
  this.G = k;
  Ei.f.c.call(this)
};
function Ki(a) {
  Y.call(this, k, a);
  this.O = []
}
C(Ki, ei);
Ki.prototype.clear = function() {
  this.O.length && (this.O.length = 0, Li(this.va))
};
Ki.prototype.Z = function() {
};
Ki.prototype.appendChild = function(a) {
  this.O.push(a)
};
Ki.prototype.Ba = function() {
  for(var a = 0, b = this.O.length;a < b;a++) {
    Mi(this.va, this.O[a])
  }
};
function Ni(a, b, c, d, f, g, i, l) {
  Z.call(this, a, b, i, l);
  this.hg = c;
  this.ig = d;
  this.Ef = f;
  this.Ff = g;
  this.z = new oi;
  this.z.clear();
  this.z.moveTo(this.hg + this.Ef * Math.cos(af(0)), this.ig + this.Ff * Math.sin(af(0)));
  this.z.arcTo(this.Ef, this.Ff, 0, 360);
  this.z.close();
  this.Lg = new Oi(k, b, this.z, i, l)
}
C(Ni, fi);
Ni.prototype.Ba = function(a) {
  this.Lg.Ba(a)
};
function Oi(a, b, c, d, f) {
  Z.call(this, a, b, d, f);
  this.mb(c)
}
C(Oi, di);
Oi.prototype.Sb = m;
Oi.prototype.mb = function(a) {
  this.z = a.Jb ? a : si(a);
  this.Sb && Li(this.va)
};
Oi.prototype.Ba = function(a) {
  this.Sb = j;
  a.beginPath();
  qi(this.z, function(b, c) {
    switch(b) {
      case 0:
        a.moveTo(c[0], c[1]);
        break;
      case 1:
        for(var d = 0;d < c.length;d += 2) {
          a.lineTo(c[d], c[d + 1])
        }
        break;
      case 2:
        for(d = 0;d < c.length;d += 6) {
          a.bezierCurveTo(c[d], c[d + 1], c[d + 2], c[d + 3], c[d + 4], c[d + 5])
        }
        break;
      case 3:
        e(Error("Canvas paths cannot contain arcs"));
      case 4:
        a.closePath()
    }
  })
};
function Pi(a, b, c, d, f, g, i) {
  Y.call(this, a, b);
  this.kh = c;
  this.mh = d;
  this.we = f;
  this.Dd = g;
  this.Vg = i
}
C(Pi, gi);
Pi.prototype.Sb = m;
Pi.prototype.Z = function(a, b) {
  this.we = a;
  this.Dd = b;
  this.Sb && Li(this.va)
};
Pi.prototype.Ba = function(a) {
  this.af ? (this.we && this.Dd && a.drawImage(this.af, this.kh, this.mh, this.we, this.Dd), this.Sb = j) : (a = new Image, a.onload = y(this.wg, this, a), a.src = this.Vg)
};
Pi.prototype.wg = function(a) {
  this.af = a;
  Li(this.va)
};
function Qi(a, b, c, d, f) {
  ti.call(this, a, b, c, d, f)
}
C(Qi, ti);
q = Qi.prototype;
q.de = function() {
  Li(this)
};
q.ee = function() {
  Li(this)
};
function Ri(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.Rf ? b.Rf.L() : new ci, f = d.fa, g = d.ha;
  (f || g) && c.translate(f, g);
  (d = d.Y) && c.rotate(Math.asin(d))
}
q.i = function() {
  var a = this.M.i("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Qb = this.M.i("canvas");
  a.appendChild(this.Qb);
  this.Dg = this.G = new Ki(this);
  this.Rg = 0;
  Si(this)
};
q.getContext = function() {
  this.b() || this.i();
  this.ub || (this.ub = this.Qb.getContext("2d"), this.ub.save());
  return this.ub
};
q.Z = function(a, b) {
  this.width = a;
  this.height = b;
  Si(this);
  Li(this)
};
q.W = function() {
  var a = this.width, b = this.height, c = w(a) && -1 != a.indexOf("%"), d = w(b) && -1 != b.indexOf("%");
  if(!this.q && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = Od(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Od(f), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
function Si(a) {
  Md(a.b(), a.width, a.height);
  var b = a.W();
  b && (Md(a.Qb, b.width, b.height), a.Qb.width = b.width, a.Qb.height = b.height, a.ub = k)
}
q.reset = function() {
  var a = this.getContext();
  a.restore();
  var b = this.W();
  b.width && b.height && a.clearRect(0, 0, b.width, b.height);
  a.save()
};
q.clear = function() {
  this.reset();
  this.G.clear();
  for(var a = this.b();1 < a.childNodes.length;) {
    a.removeChild(a.lastChild)
  }
};
function Li(a) {
  if(!a.ui && a.q) {
    a.reset();
    if(a.ka) {
      var b = a.W();
      a.getContext().scale(b.width / a.ka, b.height / a.Rb)
    }
    (a.Ja || a.Za) && a.getContext().translate(-a.Ja, -a.Za);
    Ri(a, a.G);
    a.G.Ba(a.ub);
    a.getContext().restore()
  }
}
function Mi(a, b) {
  var c = a.getContext();
  Ri(a, b);
  if(!b.sg || !b.ug) {
    b.Ba(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof mi) {
        0 != d.ac && (c.globalAlpha = d.ac, c.fillStyle = d.ra, b.Ba(c), c.fill(), c.globalAlpha = 1)
      }else {
        var f = c.createLinearGradient(d.pi(), d.ri(), d.qi(), d.si());
        f.addColorStop(0, d.ni());
        f.addColorStop(1, d.oi());
        c.fillStyle = f;
        b.Ba(c);
        c.fill()
      }
    }
    if(d = b.qe) {
      b.Ba(c), c.strokeStyle = d.ra, d = d.pb, w(d) && -1 != d.indexOf("px") && (d = parseFloat(d) / ui(a)), c.lineWidth = d, c.stroke()
    }
  }
  a.getContext().restore()
}
q.rb = function(a, b) {
  this.append(a, b)
};
q.append = function(a, b) {
  b = b || this.G;
  b.appendChild(a);
  this.q && !this.Rg && !(b != this.G && b != this.Dg) && Mi(this, a)
};
q.sc = function(a, b, c, d, f, g, i) {
  a = new Ni(k, this, a, b, c, d, f, g);
  this.append(a, i);
  return a
};
q.drawImage = function(a, b, c, d, f, g) {
  a = new Pi(k, this, a, b, c, d, f);
  this.append(a, g);
  return a
};
q.c = function() {
  this.ub = k;
  Qi.f.c.call(this)
};
q.P = function() {
  var a = this.W();
  Qi.f.P.call(this);
  a || (Si(this), this.dispatchEvent("resize"));
  Li(this)
};
function Ti(a) {
  this.w = [];
  Ui(this, a)
}
C(Ti, Bc);
q = Ti.prototype;
q.Wa = k;
q.be = k;
function Ui(a, b) {
  b && (F(b, function(a) {
    this.gc(a, m)
  }, a), eb(a.w, b))
}
q.Cd = n("Wa");
q.Re = function() {
  return db(this.w)
};
q.Yc = function(a) {
  a != this.Wa && (this.gc(this.Wa, m), this.Wa = a, this.gc(a, j));
  this.dispatchEvent("select")
};
q.Bd = function() {
  return this.Wa ? Va(this.w, this.Wa) : -1
};
q.he = function(a) {
  this.Yc(this.w[a] || k)
};
q.clear = function() {
  ab(this.w);
  this.Wa = k
};
q.c = function() {
  Ti.f.c.call(this);
  delete this.w;
  this.Wa = k
};
q.gc = function(a, b) {
  a && ("function" == typeof this.be ? this.be(a, b) : "function" == typeof a.ge && a.ge(b))
};
function Vi() {
}
C(Vi, Mg);
ea(Vi);
var Wi = 0;
Vi.prototype.i = function(a) {
  var b = Og(this, a);
  return a.Fa().i("div", b ? b.join(" ") : k, Xi(this, a.ba, a.Se(), a.Fa()))
};
function Xi(a, b, c, d) {
  for(var f = [], g = 0, i = 0;g < c.height;g++) {
    for(var l = [], o = 0;o < c.width;o++) {
      var r = b && b[i++];
      l.push(Yi(a, r, d))
    }
    f.push(d.i("tr", a.t() + "-row", l))
  }
  return a.Ee(f, d)
}
Vi.prototype.Ee = function(a, b) {
  var c = b.i("table", this.t() + "-table", b.i("tbody", this.t() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Lg(c, "grid");
  return c
};
function Yi(a, b, c) {
  a = c.i("td", {"class":a.t() + "-cell", id:a.t() + "-cell-" + Wi++}, b);
  Lg(a, "gridcell");
  return a
}
Vi.prototype.Uc = function(a, b) {
  if(a) {
    var c = fd(document, "tbody", this.t() + "-body", a)[0];
    if(c) {
      var d = 0;
      F(c.rows, function(a) {
        F(a.cells, function(a) {
          pd(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = cd(a), i = c.rows[0].cells.length;d < b.length;) {
          var l = b[d++];
          f.push(Yi(this, l, g));
          f.length == i && (l = g.i("tr", this.t() + "-row", f), c.appendChild(l), f.length = 0)
        }
        if(0 < f.length) {
          for(;f.length < i;) {
            f.push(Yi(this, "", g))
          }
          l = g.i("tr", this.t() + "-row", f);
          c.appendChild(l)
        }
      }
    }
    Sd(a, j, Mb)
  }
};
function Zi(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && $a(Xc(c), a.t() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function $i(a, b, c, d) {
  c && (c = c.parentNode, a = a.t() + "-cell-hover", d ? Yc(c, a) : Zc(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id))
}
Vi.prototype.t = p("goog-palette");
function aj(a, b, c) {
  W.call(this, a, b || Vi.La(), c)
}
C(aj, W);
q = aj.prototype;
q.n = k;
q.fb = -1;
q.J = k;
q.c = function() {
  aj.f.c.call(this);
  this.J && (this.J.g(), this.J = k);
  this.n = k
};
q.Vc = function(a) {
  aj.f.Vc.call(this, a);
  bj(this);
  this.J ? (this.J.clear(), Ui(this.J, a)) : (this.J = new Ti(a), this.J.be = y(this.gc, this), P(ae(this), this.J, "select", this.zg));
  this.fb = -1
};
q.Pe = p(k);
q.Dc = function(a) {
  aj.f.Dc.call(this, a);
  var b = Zi(this.l, this, a.target);
  if((!b || !a.relatedTarget || !rd(b, a.relatedTarget)) && b != cj(this)) {
    a = this.ba, dj(this, a ? Va(a, b) : -1)
  }
};
q.Cc = function(a) {
  aj.f.Cc.call(this, a);
  var b = Zi(this.l, this, a.target);
  (!b || !a.relatedTarget || !rd(b, a.relatedTarget)) && b == cj(this) && $i(this.l, this, b, m)
};
q.Bc = function(a) {
  aj.f.Bc.call(this, a);
  if(this.Ld() && (a = Zi(this.l, this, a.target), a != cj(this))) {
    var b = this.ba;
    dj(this, b ? Va(b, a) : -1)
  }
};
q.ib = function() {
  var a = cj(this);
  return a ? (this.Yc(a), this.dispatchEvent("action")) : m
};
q.Xe = function(a) {
  var b = this.ba, b = b ? b.length : 0, c = this.n.width;
  if(0 == b || !this.isEnabled()) {
    return m
  }
  if(13 == a.keyCode || 32 == a.keyCode) {
    return this.ib(a)
  }
  if(36 == a.keyCode) {
    return dj(this, 0), j
  }
  if(35 == a.keyCode) {
    return dj(this, b - 1), j
  }
  var d = 0 > this.fb ? this.Bd() : this.fb;
  switch(a.keyCode) {
    case 37:
      -1 == d && (d = b);
      if(0 < d) {
        return dj(this, d - 1), a.preventDefault(), j
      }
      break;
    case 39:
      if(d < b - 1) {
        return dj(this, d + 1), a.preventDefault(), j
      }
      break;
    case 38:
      -1 == d && (d = b + c - 1);
      if(d >= c) {
        return dj(this, d - c), a.preventDefault(), j
      }
      break;
    case 40:
      if(-1 == d && (d = -c), d < b - c) {
        return dj(this, d + c), a.preventDefault(), j
      }
  }
  return m
};
q.zg = function() {
};
q.Se = n("n");
q.Z = function(a, b) {
  this.b() && e(Error("Component already rendered"));
  this.n = ja(a) ? new N(a, b) : a;
  bj(this)
};
function cj(a) {
  var b = a.ba;
  return b && b[a.fb]
}
function dj(a, b) {
  b != a.fb && (ej(a, a.fb, m), a.fb = b, ej(a, b, j))
}
q.Bd = function() {
  return this.J ? this.J.Bd() : -1
};
q.Cd = function() {
  return this.J ? this.J.Cd() : k
};
q.he = function(a) {
  this.J && this.J.he(a)
};
q.Yc = function(a) {
  this.J && this.J.Yc(a)
};
function ej(a, b, c) {
  if(a.b()) {
    var d = a.ba;
    d && 0 <= b && b < d.length && $i(a.l, a, d[b], c)
  }
}
q.gc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.l.t() + "-cell-selected";
    b ? Yc(c, d) : Zc(c, d)
  }
};
function bj(a) {
  var b = a.ba;
  if(b) {
    if(a.n && a.n.width) {
      if(b = Math.ceil(b.length / a.n.width), !ja(a.n.height) || a.n.height < b) {
        a.n.height = b
      }
    }else {
      b = Math.ceil(Math.sqrt(b.length)), a.n = new N(b, b)
    }
  }else {
    a.n = new N(0, 0)
  }
}
;function fj(a, b, c) {
  this.qc = a || [];
  aj.call(this, k, b || Vi.La(), c);
  this.qc = this.qc;
  this.Mc = k;
  this.Uc(gj(this))
}
C(fj, aj);
fj.prototype.Mc = k;
function hj(a) {
  var b = ij(jj);
  a.Mc || (a.Mc = Xa(a.qc, function(a) {
    return ij(a)
  }));
  a.he(b ? Va(a.Mc, b) : -1)
}
function gj(a) {
  return Xa(a.qc, function(a) {
    var c = this.Fa().i("div", {"class":this.l.t() + "-colorswatch", style:"background-color:" + a});
    c.title = "#" == a.charAt(0) ? "RGB (" + vh(a).join(", ") + ")" : a;
    return c
  }, a)
}
function ij(a) {
  if(a) {
    try {
      return ph(a).Fc
    }catch(b) {
    }
  }
  return k
}
;function kj(a) {
  a = "" + a;
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
;var lj, mj, nj, oj, pj, qj = T("whiteboard.logger");
window.onerror = function(a, b, c) {
  ye(qj, "window.onerror: message: " + H(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function rj() {
}
rj.prototype.Mf = function(a) {
  this.D = a;
  xg(this.D, "subprotocol:whiteboard")
};
rj.prototype.Lf = function(a, b) {
  qj.info("streamReset: reasonString=" + H(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  sj = k
};
rj.prototype.Nf = function(a) {
  var a = kj(a), b = a[0], c = a[1];
  "Point" == b ? lj.sc(c.x, c.y, 5, 5, new ni, new mi(c.color), h) : "ClearBoard" == b ? (lj.g(), tj()) : Q(qj, "Strange message from server: " + H(a))
};
rj.prototype.reset = function(a) {
  qj.info("resetting with reason: " + a);
  this.D.reset(a)
};
var sj = k, uj = new Tc(s.window);
function vj() {
  sj && (sj.reset("idle timeout fired"), sj = k)
}
var wj = k;
function xj() {
  wj != k && uj.I.clearTimeout(wj);
  sj && (wj = uj.I.setTimeout(vj, 2592E5))
}
M(window, ["click", "focus", "keydown", "keypress"], xj, j);
function yj() {
  lj.g();
  tj();
  var a = sj;
  qj.info("Telling server to clear the board.");
  xg(a.D, xa(["ClearBoard", k]))
}
function zj(a) {
  var b = new jc(a), a = b.offsetX, b = b.offsetY;
  lj.sc(a, b, 5, 5, new ni, new mi(mj), h);
  var c = sj, d = mj;
  qj.info("Telling server about circle at: " + a + ", " + b + " with color " + d);
  xg(c.D, xa(["Point", {x:a, y:b, color:d}]))
}
function tj() {
  var a;
  a = I && !K("9") ? new Ei(800, 600, h, h, h) : J && (!K("420") || Nb) ? new Qi(800, 600, h, h, h) : new vi(800, 600, h, h, h);
  a.i();
  nj = O("drawArea");
  be(a, nj);
  lj = a
}
var jj = "#E06666";
function Aj(a) {
  var b;
  (a = a.target.Cd()) ? (a = a.style[Sa("background-color")] || "", b = ij(a)) : b = k;
  b || (b = jj);
  mj = b;
  Uh.set("whiteboard_defaultColor", b);
  a = O("whiteboard-cp-value");
  w("background-color") ? Kd(a, b, "background-color") : sa("background-color", qa(Kd, a));
  a = O("whiteboard-cp-value");
  a.title = b;
  b = ph(b).Fc;
  sd(a, b);
  b = vh(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = th(b[0], b[1], b[2]);
  w("color") ? Kd(a, b, "color") : sa("color", qa(Kd, a))
}
function Bj() {
  oj = (new wf(document.location)).S;
  if(pj = Boolean(Number(oj.get("logging", "0")))) {
    Ce().Xc(we);
    var a = new bi(document.getElementById("log"));
    if(j != a.df) {
      var b = Ce(), c = a.Og;
      b.Yb || (b.Yb = []);
      b.Yb.push(c);
      a.df = j
    }
  }else {
    Ce().Xc(oe)
  }
  qj.info("Logger works.");
  (a = Uh.get("whiteboard_defaultColor")) && (jj = a);
  mj = jj;
  b = O("whiteboard-controls-left");
  a = O("whiteboard-controls-right");
  c = id("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  od(b, c);
  c = id("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  od(b, c);
  b = new fj("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.Z(8);
  be(b, O("whiteboard-cp"));
  M(b, "action", Aj);
  hj(b);
  Aj({target:b});
  b = new nh("Clear board");
  ch(b, "clear-board-button");
  be(b, a);
  M(b, "action", yj);
  a = O("drawAreaOverlay");
  Sd(a, j);
  M(a, "click", zj, m);
  tj();
  a = new Rh;
  sj = new rj;
  xj();
  c = (new wf(document.location)).S;
  b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !s.__demo_shared_domain) {
    Q(Qh, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new wf(document.location);
  b ? b = new hg("/_minerva/", c.la, s.__demo_mainSocketPort) : (d ? (b = s.__demo_shared_domain, w(b) || e(Error("domain was " + H(b) + "; expected a string.")), c = c.L(), zf(c, "_____random_____." + b)) : c = c.L(), c.mb("/_minerva/"), Bf(c, "", h), b = new jg(c.toString().replace("_____random_____", "%random%")));
  a = new pg(b, a, uj);
  b = sj;
  u(b.Mf) || e(Error("Protocol is missing required method streamStarted"));
  u(b.Lf) || e(Error("Protocol is missing required method streamReset"));
  u(b.Nf) || e(Error("Protocol is missing required method stringReceived"));
  a.Xd = y(b.Mf, b);
  a.onreset = y(b.Lf, b);
  a.Yd = y(b.Nf, b);
  a.start()
}
var Cj = ["__whiteboard_init"], Dj = s;
!(Cj[0] in Dj) && Dj.execScript && Dj.execScript("var " + Cj[0]);
for(var Ej;Cj.length && (Ej = Cj.shift());) {
  !Cj.length && u(Bj) ? Dj[Ej] = Bj : Dj = Dj[Ej] ? Dj[Ej] : Dj[Ej] = {}
}
;})();
