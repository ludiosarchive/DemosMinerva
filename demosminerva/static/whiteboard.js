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
function q(a) {
  return function() {
    return a
  }
}
var r;
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
function ea() {
}
function fa(a) {
  a.Ma = function() {
    return a.ff ? a.ff : a.ff = new a
  }
}
function ga(a) {
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
function v(a) {
  return a !== h
}
function ha(a) {
  return"array" == ga(a)
}
function ia(a) {
  var b = ga(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function ja(a) {
  return ka(a) && "function" == typeof a.getFullYear
}
function w(a) {
  return"string" == typeof a
}
function la(a) {
  return"number" == typeof a
}
function ma(a) {
  return"function" == ga(a)
}
function ka(a) {
  var b = typeof a;
  return"object" == b && a != k || "function" == b
}
function na(a) {
  return a[oa] || (a[oa] = ++pa)
}
var oa = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), pa = 0;
function qa(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ra(a, b, c) {
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
function x(a, b, c) {
  x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? qa : ra;
  return x.apply(k, arguments)
}
function sa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var ta = Date.now || function() {
  return+new Date
};
function y(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.f = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function ua(a) {
  return ma(a) || "object" == typeof a && ma(a.call) && ma(a.apply)
}
;function va(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
function wa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function xa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function za(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < ya.length;g++) {
      c = ya[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function Aa(a) {
  var b = [];
  Ba(new Ca, a, b);
  return b.join("")
}
function Ca() {
  this.Sc = h
}
function Ba(a, b, c) {
  switch(typeof b) {
    case "string":
      Da(b, c);
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
      if(ha(b)) {
        var d = b.length;
        c.push("[");
        for(var f = "", g = 0;g < d;g++) {
          c.push(f), f = b[g], Ba(a, a.Sc ? a.Sc.call(b, String(g), f) : f, c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), Da(g, c), c.push(":"), Ba(a, a.Sc ? a.Sc.call(b, g, f) : f, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var Ea = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Fa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Da(a, b) {
  b.push('"', a.replace(Fa, function(a) {
    if(a in Ea) {
      return Ea[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
    return Ea[a] = f + b.toString(16)
  }), '"')
}
;function B(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, B) : this.stack = Error().stack || "";
  a && (this.message = String(a))
}
y(B, Error);
B.prototype.name = "CustomError";
function Ga(a) {
  var b = a.length - 1;
  return 0 <= b && a.indexOf("%", b) == b
}
function Ha(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$");
    a = a.replace(/\%s/, d)
  }
  return a
}
function Ia(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function Ja(a) {
  if(!Ka.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(La, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(Ma, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Na, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Oa, "&quot;"));
  return a
}
var La = /&/g, Ma = /</g, Na = />/g, Oa = /\"/g, Ka = /[&<>\"]/;
function Pa(a) {
  return Ia(a.replace(/  /g, " &#160;"), h)
}
function Qa(a, b) {
  for(var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(d.length, f.length), i = 0;0 == c && i < g;i++) {
    var l = d[i] || "", n = f[i] || "", s = RegExp("(\\d*)(\\D*)", "g"), z = RegExp("(\\d*)(\\D*)", "g");
    do {
      var t = s.exec(l) || ["", "", ""], A = z.exec(n) || ["", "", ""];
      if(0 == t[0].length && 0 == A[0].length) {
        break
      }
      c = ((0 == t[1].length ? 0 : parseInt(t[1], 10)) < (0 == A[1].length ? 0 : parseInt(A[1], 10)) ? -1 : (0 == t[1].length ? 0 : parseInt(t[1], 10)) > (0 == A[1].length ? 0 : parseInt(A[1], 10)) ? 1 : 0) || ((0 == t[2].length) < (0 == A[2].length) ? -1 : (0 == t[2].length) > (0 == A[2].length) ? 1 : 0) || (t[2] < A[2] ? -1 : t[2] > A[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
}
var Ra = 2147483648 * Math.random() | 0;
function Sa(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  })
}
;function Ta(a, b) {
  b.unshift(a);
  B.call(this, Ha.apply(k, b));
  b.shift();
  this.Mi = a
}
y(Ta, B);
Ta.prototype.name = "AssertionError";
function Ua(a, b) {
  e(new Ta("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var C = Array.prototype, Va = C.indexOf ? function(a, b, c) {
  return C.indexOf.call(a, b, c)
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
}, E = C.forEach ? function(a, b, c) {
  C.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
}, Wa = C.filter ? function(a, b, c) {
  return C.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = [], g = 0, i = w(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in i) {
      var n = i[l];
      b.call(c, n, l, a) && (f[g++] = n)
    }
  }
  return f
}, Xa = C.map ? function(a, b, c) {
  return C.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = w(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in g && (f[i] = b.call(c, g[i], i, a))
  }
  return f
}, Ya = C.some ? function(a, b, c) {
  return C.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return j
    }
  }
  return m
}, Za = C.every ? function(a, b, c) {
  return C.every.call(a, b, c)
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
  if(!ha(a)) {
    for(var b = a.length - 1;0 <= b;b--) {
      delete a[b]
    }
  }
  a.length = 0
}
function bb(a, b) {
  var c = Va(a, b);
  0 <= c && C.splice.call(a, c, 1)
}
function cb(a) {
  return C.concat.apply(C, arguments)
}
function db(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
function eb(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], f;
    if(ha(d) || (f = ia(d)) && d.hasOwnProperty("callee")) {
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
  return 2 >= arguments.length ? C.slice.call(a, b) : C.slice.call(a, b, c)
}
function gb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function hb(a, b, c) {
  var d = Va(c, a);
  if(-1 != d) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = ga(a);
    if("boolean" == d || "number" == d || "null" == d || "undefined" == d) {
      b.push(String(a))
    }else {
      if("string" == d) {
        Da(a, b)
      }else {
        if(ua(a.O)) {
          a.O(b, c)
        }else {
          if(ua(a.bg)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if("array" == d) {
                d = a.length;
                b.push("[");
                for(var f = "", g = 0;g < d;g++) {
                  b.push(f), hb(a[g], b, c), f = ", "
                }
                b.push("]")
              }else {
                if("object" == d) {
                  if(ja(a) && "function" == typeof a.valueOf) {
                    b.push("new Date(", String(a.valueOf()), ")")
                  }else {
                    for(var d = xa(a).concat(ya), f = {}, i = g = 0;i < d.length;) {
                      var l = d[i++], n = ka(l) ? "o" + na(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(f, n) || (f[n] = j, d[g++] = l)
                    }
                    d.length = g;
                    b.push("{");
                    f = "";
                    for(i = 0;i < d.length;i++) {
                      g = d[i], Object.prototype.hasOwnProperty.call(a, g) && (l = a[g], b.push(f), Da(g, b), b.push(": "), hb(l, b, c), f = ", ")
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
function F(a, b, c) {
  c || (c = []);
  hb(a, b, c)
}
function G(a) {
  var b = [];
  F(a, b, h);
  return b.join("")
}
;function ib(a) {
  if("function" == typeof a.R) {
    a = a.R()
  }else {
    if(ia(a) || w(a)) {
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
function jb(a) {
  if("function" == typeof a.N) {
    return a.N()
  }
  if(w(a)) {
    return a.split("")
  }
  if(ia(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return wa(a)
}
function kb(a) {
  if("function" == typeof a.ta) {
    return a.ta()
  }
  if("function" != typeof a.N) {
    if(ia(a) || w(a)) {
      var b = [];
      a = a.length;
      for(var c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return xa(a)
  }
}
function lb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ia(a) || w(a)) {
      E(a, b, c)
    }else {
      for(var d = kb(a), f = jb(a), g = f.length, i = 0;i < g;i++) {
        b.call(c, f[i], d && d[i], a)
      }
    }
  }
}
function mb(a, b) {
  if("function" == typeof a.every) {
    return a.every(b, h)
  }
  if(ia(a) || w(a)) {
    return Za(a, b, h)
  }
  for(var c = kb(a), d = jb(a), f = d.length, g = 0;g < f;g++) {
    if(!b.call(h, d[g], c && c[g], a)) {
      return m
    }
  }
  return j
}
;function nb(a, b) {
  this.u = {};
  this.m = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && e(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.jd(a)
  }
}
r = nb.prototype;
r.c = 0;
r.we = 0;
r.R = p("c");
r.N = function() {
  ob(this);
  for(var a = [], b = 0;b < this.m.length;b++) {
    a.push(this.u[this.m[b]])
  }
  return a
};
r.ta = function() {
  ob(this);
  return this.m.concat()
};
r.ra = function(a) {
  return pb(this.u, a)
};
r.oc = function(a) {
  for(var b = 0;b < this.m.length;b++) {
    var c = this.m[b];
    if(pb(this.u, c) && this.u[c] == a) {
      return j
    }
  }
  return m
};
r.V = function(a, b) {
  if(this === a) {
    return j
  }
  if(this.c != a.R()) {
    return m
  }
  var c = b || qb;
  ob(this);
  for(var d, f = 0;d = this.m[f];f++) {
    if(!c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function qb(a, b) {
  return a === b
}
r.Oa = function() {
  return 0 == this.c
};
r.clear = function() {
  this.u = {};
  this.we = this.c = this.m.length = 0
};
r.remove = function(a) {
  return pb(this.u, a) ? (delete this.u[a], this.c--, this.we++, this.m.length > 2 * this.c && ob(this), j) : m
};
function ob(a) {
  if(a.c != a.m.length) {
    for(var b = 0, c = 0;b < a.m.length;) {
      var d = a.m[b];
      pb(a.u, d) && (a.m[c++] = d);
      b++
    }
    a.m.length = c
  }
  if(a.c != a.m.length) {
    for(var f = {}, c = b = 0;b < a.m.length;) {
      d = a.m[b], pb(f, d) || (a.m[c++] = d, f[d] = 1), b++
    }
    a.m.length = c
  }
}
r.get = function(a, b) {
  return pb(this.u, a) ? this.u[a] : b
};
r.set = function(a, b) {
  pb(this.u, a) || (this.c++, this.m.push(a), this.we++);
  this.u[a] = b
};
r.jd = function(a) {
  var b;
  a instanceof nb ? (b = a.ta(), a = a.N()) : (b = xa(a), a = wa(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
r.L = function() {
  return new nb(this)
};
function rb(a) {
  ob(a);
  for(var b = {}, c = 0;c < a.m.length;c++) {
    var d = a.m[c];
    b[d] = a.u[d]
  }
  return b
}
function pb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function sb(a) {
  var b = ga(a);
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
;var tb, ub;
function vb(a, b) {
  this.sb = a;
  this.ob = b
}
vb.prototype.V = function(a) {
  return a instanceof vb && this.sb == a.sb && this.ob.join(",") == a.ob
};
vb.prototype.O = function(a, b) {
  a.push("new SACK(", String(this.sb), ", ");
  F(this.ob, a, b);
  a.push(")")
};
function wb() {
  this.w = new nb
}
r = wb.prototype;
r.bb = -1;
r.n = 0;
r.append = function(a) {
  var b = sb(a);
  this.w.set(this.bb + 1, [a, b]);
  this.bb += 1;
  this.n += b
};
r.O = function(a) {
  a.push("<Queue with ", String(this.w.R()), " item(s), counter=#", String(this.bb), ", size=", String(this.n), ">")
};
function xb(a) {
  a = a.w.ta();
  C.sort.call(a, gb);
  return a
}
r.Te = function(a) {
  for(var b = xb(this), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    (a == k || f >= a) && c.push([f, this.w.get(f)[0]])
  }
  return c
};
function yb() {
  this.Za = new nb
}
yb.prototype.jb = -1;
yb.prototype.n = 0;
function zb(a) {
  var b = a.Za.ta();
  C.sort.call(b, gb);
  return new vb(a.jb, b)
}
var Ab = {};
var Bb;
Bb = q(j);
var Cb, Db, Eb, Fb, Gb;
function Hb() {
  return u.navigator ? u.navigator.userAgent : k
}
Gb = Fb = Eb = Db = Cb = m;
var Ib;
if(Ib = Hb()) {
  var Jb = u.navigator;
  Cb = 0 == Ib.indexOf("Opera");
  Db = !Cb && -1 != Ib.indexOf("MSIE");
  Fb = (Eb = !Cb && -1 != Ib.indexOf("WebKit")) && -1 != Ib.indexOf("Mobile");
  Gb = !Cb && !Eb && "Gecko" == Jb.product
}
var Kb = Cb, H = Db, I = Gb, J = Eb, Lb = Fb, Mb = u.navigator, Nb = -1 != (Mb && Mb.platform || "").indexOf("Mac"), Ob;
a: {
  var Pb = "", Qb;
  if(Kb && u.opera) {
    var Rb = u.opera.version, Pb = "function" == typeof Rb ? Rb() : Rb
  }else {
    if(I ? Qb = /rv\:([^\);]+)(\)|;)/ : H ? Qb = /MSIE\s+([^\);]+)(\)|;)/ : J && (Qb = /WebKit\/(\S+)/), Qb) {
      var Sb = Qb.exec(Hb()), Pb = Sb ? Sb[1] : ""
    }
  }
  if(H) {
    var Tb, Ub = u.document;
    Tb = Ub ? Ub.documentMode : h;
    if(Tb > parseFloat(Pb)) {
      Ob = String(Tb);
      break a
    }
  }
  Ob = Pb
}
var Vb = {};
function K(a) {
  return Vb[a] || (Vb[a] = 0 <= Qa(Ob, a))
}
var Wb = {};
function Xb() {
  return Wb[9] || (Wb[9] = H && !!document.documentMode && 9 <= document.documentMode)
}
;function Yb() {
}
var Zb = 0;
r = Yb.prototype;
r.key = 0;
r.nb = m;
r.pd = m;
r.Wb = function(a, b, c, d, f, g) {
  ma(a) ? this.jf = j : a && a.handleEvent && ma(a.handleEvent) ? this.jf = m : e(Error("Invalid listener argument"));
  this.Db = a;
  this.Cf = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Dc = g;
  this.pd = m;
  this.key = ++Zb;
  this.nb = m
};
r.handleEvent = function(a) {
  return this.jf ? this.Db.call(this.Dc || this.src, a) : this.Db.handleEvent.call(this.Db, a)
};
var $b = !H || Xb(), ac = !H || Xb(), bc = H && !K("9");
!J || K("528");
I && K("1.9b") || H && K("8") || Kb && K("9.5") || J && K("528");
I && !K("8") || H && K("9");
var cc = {Ch:"click", Hh:"dblclick", di:"mousedown", hi:"mouseup", gi:"mouseover", fi:"mouseout", ei:"mousemove", ti:"selectstart", Yh:"keypress", Xh:"keydown", Zh:"keyup", Ah:"blur", Rh:"focus", Ih:"deactivate", Sh:H ? "focusin" : "DOMFocusIn", Th:H ? "focusout" : "DOMFocusOut", Bh:"change", si:"select", ui:"submit", Wh:"input", oi:"propertychange", Oh:"dragstart", Jh:"drag", Lh:"dragenter", Nh:"dragover", Mh:"dragleave", Ph:"drop", Kh:"dragend", yi:"touchstart", xi:"touchmove", wi:"touchend", vi:"touchcancel", 
zh:"beforeunload", Eh:"contextmenu", Qh:"error", Vh:"help", $h:"load", ai:"losecapture", pi:"readystatechange", qi:"resize", ri:"scroll", Ai:"unload", Uh:"hashchange", ki:"pagehide", li:"pageshow", ni:"popstate", Fh:"copy", mi:"paste", Gh:"cut", wh:"beforecopy", xh:"beforecut", yh:"beforepaste", ji:"online", ii:"offline", ci:"message", Dh:"connect", zi:J ? "webkitTransitionEnd" : Kb ? "oTransitionEnd" : "transitionend"};
function L() {
  0 != dc && (this.Bi = Error().stack, ec[na(this)] = this)
}
var dc = 0, ec = {};
L.prototype.ya = m;
L.prototype.g = function() {
  if(!this.ya && (this.ya = j, this.d(), 0 != dc)) {
    var a = na(this);
    delete ec[a]
  }
};
L.prototype.d = function() {
  this.og && fc.apply(k, this.og);
  if(this.wf) {
    for(;this.wf.length;) {
      this.wf.shift()()
    }
  }
};
function fc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ia(d) ? fc.apply(k, d) : d && "function" == typeof d.g && d.g()
  }
}
;function gc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
r = gc.prototype;
r.d = aa();
r.g = aa();
r.mb = m;
r.defaultPrevented = m;
r.Tc = j;
r.stopPropagation = function() {
  this.mb = j
};
r.preventDefault = function() {
  this.defaultPrevented = j;
  this.Tc = m
};
function hc(a) {
  a.stopPropagation()
}
;function ic(a) {
  ic[" "](a);
  return a
}
ic[" "] = ea;
function jc(a, b) {
  a && this.Wb(a, b)
}
y(jc, gc);
var kc = [1, 4, 2];
r = jc.prototype;
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
r.ctrlKey = m;
r.altKey = m;
r.shiftKey = m;
r.metaKey = m;
r.$d = m;
r.Ka = k;
r.Wb = function(a, b) {
  var c = this.type = a.type;
  gc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(I) {
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
  this.$d = Nb ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Ka = a;
  a.defaultPrevented && this.preventDefault();
  delete this.mb
};
function lc(a) {
  return $b ? 0 == a.Ka.button : "click" == a.type ? j : !!(a.Ka.button & kc[0])
}
r.stopPropagation = function() {
  jc.f.stopPropagation.call(this);
  this.Ka.stopPropagation ? this.Ka.stopPropagation() : this.Ka.cancelBubble = j
};
r.preventDefault = function() {
  jc.f.preventDefault.call(this);
  var a = this.Ka;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, bc) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
r.d = aa();
var mc = {}, nc = {}, oc = {}, pc = {};
function M(a, b, c, d, f) {
  if(b) {
    if(ha(b)) {
      for(var g = 0;g < b.length;g++) {
        M(a, b[g], c, d, f)
      }
      return k
    }
    d = !!d;
    var i = nc;
    b in i || (i[b] = {c:0, ja:0});
    i = i[b];
    d in i || (i[d] = {c:0, ja:0}, i.c++);
    var i = i[d], l = na(a), n;
    i.ja++;
    if(i[l]) {
      n = i[l];
      for(g = 0;g < n.length;g++) {
        if(i = n[g], i.Db == c && i.Dc == f) {
          if(i.nb) {
            break
          }
          return n[g].key
        }
      }
    }else {
      n = i[l] = [], i.c++
    }
    var s = qc, z = ac ? function(a) {
      return s.call(z.src, z.key, a)
    } : function(a) {
      a = s.call(z.src, z.key, a);
      if(!a) {
        return a
      }
    }, g = z;
    g.src = a;
    i = new Yb;
    i.Wb(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    n.push(i);
    mc[c] = i;
    oc[l] || (oc[l] = []);
    oc[l].push(i);
    a.addEventListener ? (a == u || !a.ud) && a.addEventListener(b, g, d) : a.attachEvent(b in pc ? pc[b] : pc[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function rc(a, b, c, d, f) {
  if(ha(b)) {
    for(var g = 0;g < b.length;g++) {
      rc(a, b[g], c, d, f)
    }
    return k
  }
  a = M(a, b, c, d, f);
  mc[a].pd = j;
  return a
}
function sc(a, b, c, d, f) {
  if(ha(b)) {
    for(var g = 0;g < b.length;g++) {
      sc(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = tc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Db == c && a[g].capture == d && a[g].Dc == f) {
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
  if(b.nb) {
    return m
  }
  var c = b.src, d = b.type, f = b.Cf, g = b.capture;
  c.removeEventListener ? (c == u || !c.ud) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in pc ? pc[d] : pc[d] = "on" + d, f);
  c = na(c);
  oc[c] && (f = oc[c], bb(f, b), 0 == f.length && delete oc[c]);
  b.nb = j;
  if(b = nc[d][g][c]) {
    b.uf = j, vc(d, g, c, b)
  }
  delete mc[a];
  return j
}
function vc(a, b, c, d) {
  if(!d.Lc && d.uf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].nb ? d[f].Cf.src = k : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.uf = m;
    0 == g && (delete nc[a][b][c], nc[a][b].c--, 0 == nc[a][b].c && (delete nc[a][b], nc[a].c--), 0 == nc[a].c && delete nc[a])
  }
}
function wc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    va(oc, function(a) {
      for(var f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          uc(g.key), c++
        }
      }
    })
  }else {
    if(a = na(a), oc[a]) {
      a = oc[a];
      for(var f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          uc(g.key), c++
        }
      }
    }
  }
}
function tc(a, b, c) {
  var d = nc;
  return b in d && (d = d[b], c in d && (d = d[c], a = na(a), d[a])) ? d[a] : k
}
function xc(a, b, c, d, f) {
  var g = 1;
  b = na(b);
  if(a[b]) {
    a.ja--;
    a = a[b];
    a.Lc ? a.Lc++ : a.Lc = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var n = a[l];
        n && !n.nb && (g &= yc(n, f) !== m)
      }
    }finally {
      a.Lc--, vc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function yc(a, b) {
  a.pd && uc(a.key);
  return a.handleEvent(b)
}
function qc(a, b) {
  if(!mc[a]) {
    return j
  }
  var c = mc[a], d = c.type, f = nc;
  if(!(d in f)) {
    return j
  }
  var f = f[d], g, i;
  if(!ac) {
    g = b || da("window.event");
    var l = j in f, n = m in f;
    if(l) {
      if(0 > g.keyCode || g.returnValue != h) {
        return j
      }
      a: {
        var s = m;
        if(0 == g.keyCode) {
          try {
            g.keyCode = -1;
            break a
          }catch(z) {
            s = j
          }
        }
        if(s || g.returnValue == h) {
          g.returnValue = j
        }
      }
    }
    s = new jc;
    s.Wb(g, this);
    g = j;
    try {
      if(l) {
        for(var t = [], A = s.currentTarget;A;A = A.parentNode) {
          t.push(A)
        }
        i = f[j];
        i.ja = i.c;
        for(var D = t.length - 1;!s.mb && 0 <= D && i.ja;D--) {
          s.currentTarget = t[D], g &= xc(i, t[D], d, j, s)
        }
        if(n) {
          i = f[m];
          i.ja = i.c;
          for(D = 0;!s.mb && D < t.length && i.ja;D++) {
            s.currentTarget = t[D], g &= xc(i, t[D], d, m, s)
          }
        }
      }else {
        g = yc(c, s)
      }
    }finally {
      t && (t.length = 0)
    }
    return g
  }
  d = new jc(b, this);
  return g = yc(c, d)
}
var zc = 0;
function Ac() {
  L.call(this)
}
y(Ac, L);
r = Ac.prototype;
r.ud = j;
r.Oc = k;
r.ge = ba("Oc");
r.addEventListener = function(a, b, c, d) {
  M(this, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  sc(this, a, b, c, d)
};
r.dispatchEvent = function(a) {
  var b = a.type || a, c = nc;
  if(b in c) {
    if(w(a)) {
      a = new gc(a, this)
    }else {
      if(a instanceof gc) {
        a.target = a.target || this
      }else {
        var d = a;
        a = new gc(b, this);
        za(a, d)
      }
    }
    var d = 1, f, c = c[b], b = j in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.Oc) {
        f.push(g)
      }
      g = c[j];
      g.ja = g.c;
      for(var i = f.length - 1;!a.mb && 0 <= i && g.ja;i--) {
        a.currentTarget = f[i], d &= xc(g, f[i], a.type, j, a) && a.Tc != m
      }
    }
    if(m in c) {
      if(g = c[m], g.ja = g.c, b) {
        for(i = 0;!a.mb && i < f.length && g.ja;i++) {
          a.currentTarget = f[i], d &= xc(g, f[i], a.type, m, a) && a.Tc != m
        }
      }else {
        for(f = this;!a.mb && f && g.ja;f = f.Oc) {
          a.currentTarget = f, d &= xc(g, f, a.type, m, a) && a.Tc != m
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
r.d = function() {
  Ac.f.d.call(this);
  wc(this);
  this.Oc = k
};
function Bc(a, b) {
  L.call(this);
  this.Gc = a || 1;
  this.gc = b || Cc;
  this.nd = x(this.hh, this);
  this.Od = ta()
}
y(Bc, Ac);
Bc.prototype.enabled = m;
var Cc = u.window;
r = Bc.prototype;
r.oa = k;
r.hh = function() {
  if(this.enabled) {
    var a = ta() - this.Od;
    0 < a && a < 0.8 * this.Gc ? this.oa = this.gc.setTimeout(this.nd, this.Gc - a) : (this.dispatchEvent(Dc), this.enabled && (this.oa = this.gc.setTimeout(this.nd, this.Gc), this.Od = ta()))
  }
};
r.start = function() {
  this.enabled = j;
  this.oa || (this.oa = this.gc.setTimeout(this.nd, this.Gc), this.Od = ta())
};
r.stop = function() {
  this.enabled = m;
  this.oa && (this.gc.clearTimeout(this.oa), this.oa = k)
};
r.d = function() {
  Bc.f.d.call(this);
  this.stop();
  delete this.gc
};
var Dc = "tick";
zc++;
zc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Ec(a, b) {
  this.lc = [];
  this.Ae = a;
  this.Ie = b || k
}
r = Ec.prototype;
r.La = m;
r.Tb = m;
r.$b = 0;
r.le = m;
r.ig = m;
r.od = 0;
r.cancel = function(a) {
  if(this.La) {
    this.bc instanceof Ec && this.bc.cancel()
  }else {
    if(this.G) {
      var b = this.G;
      delete this.G;
      a ? b.cancel(a) : (b.od--, 0 >= b.od && b.cancel())
    }
    this.Ae ? this.Ae.call(this.Ie, this) : this.le = j;
    this.La || this.wb(new Fc(this))
  }
};
r.De = function(a, b) {
  Gc(this, a, b);
  this.$b--;
  0 == this.$b && this.La && Hc(this)
};
function Gc(a, b, c) {
  a.La = j;
  a.bc = c;
  a.Tb = !b;
  Hc(a)
}
function Ic(a) {
  a.La && (a.le || e(new Jc(a)), a.le = m)
}
function Kc(a, b) {
  Ic(a);
  Gc(a, j, b)
}
r.wb = function(a) {
  Ic(this);
  Gc(this, m, a)
};
function Lc(a, b, c, d) {
  a.lc.push([b, c, d]);
  a.La && Hc(a)
}
function Mc(a) {
  return Ya(a.lc, function(a) {
    return ma(a[1])
  })
}
function Hc(a) {
  a.ue && (a.La && Mc(a)) && (u.clearTimeout(a.ue), delete a.ue);
  a.G && (a.G.od--, delete a.G);
  for(var b = a.bc, c = m, d = m;a.lc.length && 0 == a.$b;) {
    var f = a.lc.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.Tb ? i : g) {
      try {
        var l = g.call(f || a.Ie, b);
        v(l) && (a.Tb = a.Tb && (l == b || l instanceof Error), a.bc = b = l);
        b instanceof Ec && (d = j, a.$b++)
      }catch(n) {
        b = n, a.Tb = j, Mc(a) || (c = j)
      }
    }
  }
  a.bc = b;
  d && a.$b && (Lc(b, x(a.De, a, j), x(a.De, a, m)), b.ig = j);
  c && (a.ue = u.setTimeout(function() {
    e(b)
  }, 0))
}
function Nc(a) {
  var b = new Ec;
  Kc(b, a);
  return b
}
function Oc(a) {
  var b = new Ec;
  b.wb(a);
  return b
}
function Jc(a) {
  B.call(this);
  this.ng = a
}
y(Jc, B);
Jc.prototype.message = "Deferred has already fired";
Jc.prototype.name = "AlreadyCalledError";
function Fc(a) {
  B.call(this);
  this.ng = a
}
y(Fc, B);
Fc.prototype.message = "Deferred was cancelled";
Fc.prototype.name = "CancelledError";
function Pc(a) {
  this.H = a;
  this.rc = [];
  this.Me = [];
  this.hg = x(this.oh, this)
}
Pc.prototype.oa = k;
Pc.prototype.oh = function() {
  this.oa = k;
  var a = this.rc;
  this.rc = [];
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
  if(0 == this.rc.length) {
    a = this.Me;
    this.Me = [];
    for(b = 0;b < a.length;b++) {
      Kc(a[b], k)
    }
  }
};
var Qc = new Pc(u.window);
var Rc;
function Sc(a) {
  a = a.className;
  return w(a) && a.match(/\S+/g) || []
}
function Tc(a, b) {
  for(var c = Sc(a), d = fb(arguments, 1), f = c.length + d.length, g = c, i = 0;i < d.length;i++) {
    $a(g, d[i]) || g.push(d[i])
  }
  a.className = c.join(" ");
  return c.length == f
}
function Uc(a, b) {
  var c = Sc(a), d = fb(arguments, 1), f, g = d;
  f = Wa(c, function(a) {
    return!$a(g, a)
  });
  a.className = f.join(" ");
  return f.length == c.length - d.length
}
;function N(a, b) {
  this.width = a;
  this.height = b
}
r = N.prototype;
r.L = function() {
  return new N(this.width, this.height)
};
r.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
r.Oa = function() {
  return!(this.width * this.height)
};
r.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
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
r.scale = function(a) {
  this.width *= a;
  this.height *= a;
  return this
};
var Vc = !H || Xb(), Wc = !I && !H || H && Xb() || I && K("1.9.1"), Xc = H && !K("9");
function Yc() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function Zc(a) {
  return a * Math.PI / 180
}
;function $c(a) {
  return a ? new ad(bd(a)) : Rc || (Rc = new ad)
}
function O(a) {
  return w(a) ? document.getElementById(a) : a
}
function cd(a, b, c, d) {
  a = d || a;
  b = b && "*" != b ? b.toUpperCase() : "";
  if(a.querySelectorAll && a.querySelector && (b || c)) {
    return a.querySelectorAll(b + (c ? "." + c : ""))
  }
  if(c && a.getElementsByClassName) {
    a = a.getElementsByClassName(c);
    if(b) {
      d = {};
      for(var f = 0, g = 0, i;i = a[g];g++) {
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
var dd = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function ed(a, b, c) {
  return fd(document, arguments)
}
function fd(a, b) {
  var c = b[0], d = b[1];
  if(!Vc && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', Ja(d.name), '"');
    if(d.type) {
      c.push(' type="', Ja(d.type), '"');
      var f = {};
      za(f, d);
      delete f.type;
      d = f
    }
    c.push(">");
    c = c.join("")
  }
  var g = a.createElement(c);
  d && (w(d) ? g.className = d : ha(d) ? Tc.apply(k, [g].concat(d)) : va(d, function(a, b) {
    "style" == b ? g.style.cssText = a : "class" == b ? g.className = a : "for" == b ? g.htmlFor = a : b in dd ? g.setAttribute(dd[b], a) : 0 == b.lastIndexOf("aria-", 0) || 0 == b.lastIndexOf("data-", 0) ? g.setAttribute(b, a) : g[b] = a
  }));
  2 < b.length && gd(a, g, b, 2);
  return g
}
function gd(a, b, c, d) {
  function f(c) {
    c && b.appendChild(w(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    if(ia(g) && !(ka(g) && 0 < g.nodeType)) {
      var i = E, l;
      a: {
        if((l = g) && "number" == typeof l.length) {
          if(ka(l)) {
            l = "function" == typeof l.item || "string" == typeof l.item;
            break a
          }
          if(ma(l)) {
            l = "function" == typeof l.item;
            break a
          }
        }
        l = m
      }
      i(l ? db(g) : g, f)
    }else {
      f(g)
    }
  }
}
function hd(a, b) {
  gd(bd(a), a, arguments, 1)
}
function id(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function jd(a, b) {
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
function bd(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function ld(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      id(a), a.appendChild(bd(a).createTextNode(b))
    }
  }
}
var md = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, nd = {IMG:" ", BR:"\n"};
function od(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, la(a) && 0 <= a && 32768 > a) : m
}
function pd(a) {
  var b = [];
  qd(a, b, m);
  return b.join("")
}
function qd(a, b, c) {
  if(!(a.nodeName in md)) {
    if(3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in nd) {
        b.push(nd[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          qd(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function ad(a) {
  this.o = a || u.document || document
}
r = ad.prototype;
r.Ba = $c;
r.b = function(a) {
  return w(a) ? this.o.getElementById(a) : a
};
r.h = function(a, b, c) {
  return fd(this.o, arguments)
};
r.createElement = function(a) {
  return this.o.createElement(a)
};
r.createTextNode = function(a) {
  return this.o.createTextNode(a)
};
r.Fe = function(a, b, c) {
  var d = this.o, f = !!c;
  c = ["<tr>"];
  for(var g = 0;g < b;g++) {
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
r.appendChild = function(a, b) {
  a.appendChild(b)
};
r.append = hd;
r.Re = function(a) {
  return Wc && a.children != h ? a.children : Wa(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
};
r.contains = jd;
function rd(a, b) {
  switch(ga(b)) {
    case "string":
      a.push("<string>", Ja(b), "</string>");
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
        a.push('<property id="', d, '">'), rd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != ga(b[c]) && (a.push('<property id="', Ja(c), '">'), rd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function sd(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, f = arguments;
  d.push("<arguments>");
  for(var g = f.length, i = 1;i < g;i++) {
    rd(d, f[i])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var td = m, ud = "";
function vd(a) {
  a = a.match(/[\d]+/g);
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var wd = navigator.plugins["Shockwave Flash"];
  wd && (td = j, wd.description && (ud = vd(wd.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (td = j, ud = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var xd = navigator.mimeTypes["application/x-shockwave-flash"];
    (td = xd && xd.enabledPlugin) && (ud = vd(xd.enabledPlugin.description))
  }else {
    try {
      var yd = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), td = j, ud = vd(yd.GetVariable("$version"))
    }catch(zd) {
      try {
        yd = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), td = j, ud = "6.0.21"
      }catch(Ad) {
        try {
          yd = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), td = j, ud = vd(yd.GetVariable("$version"))
        }catch(Bd) {
        }
      }
    }
  }
}
var Cd = ud;
function Dd(a, b, c) {
  a.style[Sa(c)] = b
}
function Ed(a, b) {
  var c = bd(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) || "" : ""
}
function Fd(a, b, c) {
  b instanceof N ? (c = b.height, b = b.width) : c == h && e(Error("missing height argument"));
  a.style.width = Gd(b);
  a.style.height = Gd(c)
}
function Gd(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
function Hd(a) {
  if("none" != (Ed(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style && a.style.display)) {
    return Id(a)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = Id(a);
  b.display = c;
  b.position = f;
  b.visibility = d;
  return a
}
function Id(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = J && !b && !c;
  return(!v(b) || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), H && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new N(b.right - b.left, b.bottom - b.top)) : new N(b, c)
}
var Jd = I ? "MozUserSelect" : J ? "WebkitUserSelect" : k;
function Kd(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Jd) {
    if(b = b ? "none" : "", a.style[Jd] = b, c) {
      a = 0;
      for(var d;d = c[a];a++) {
        d.style[Jd] = b
      }
    }
  }else {
    if(H || Kb) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
;function Ld(a) {
  L.call(this);
  this.gb = a;
  this.m = []
}
y(Ld, L);
var Md = [];
function P(a, b, c, d) {
  ha(c) || (Md[0] = c, c = Md);
  for(var f = 0;f < c.length;f++) {
    var g = M(b, c[f], d || a, m, a.gb || a);
    a.m.push(g)
  }
  return a
}
function Nd(a, b, c, d, f, g) {
  if(ha(c)) {
    for(var i = 0;i < c.length;i++) {
      Nd(a, b, c[i], d, f, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.gb || a;
      f = !!f;
      if(b = tc(b, c, f)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].nb && b[c].Db == d && b[c].capture == f && b[c].Dc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, uc(b), bb(a.m, b))
  }
  return a
}
Ld.prototype.ae = function() {
  E(this.m, uc);
  this.m.length = 0
};
Ld.prototype.d = function() {
  Ld.f.d.call(this);
  this.ae()
};
Ld.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Od() {
}
fa(Od);
Od.prototype.Pg = 0;
Od.Ma();
function Pd(a) {
  L.call(this);
  this.M = a || $c();
  this.cc = Qd
}
y(Pd, Ac);
Pd.prototype.Gg = Od.Ma();
var Qd = k;
function Rd(a, b) {
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
r = Pd.prototype;
r.S = k;
r.p = m;
r.e = k;
r.cc = k;
r.Ng = k;
r.G = k;
r.P = k;
r.mc = k;
r.ph = m;
function Sd(a) {
  return a.S || (a.S = ":" + (a.Gg.Pg++).toString(36))
}
r.b = p("e");
function Td(a) {
  return a.xb || (a.xb = new Ld(a))
}
r.getParent = p("G");
r.ge = function(a) {
  this.G && this.G != a && e(Error("Method not supported"));
  Pd.f.ge.call(this, a)
};
r.Ba = p("M");
r.h = function() {
  this.e = this.M.createElement("div")
};
function Ud(a, b) {
  a.p && e(Error("Component already rendered"));
  a.e || a.h();
  b ? b.insertBefore(a.e, k) : a.M.o.body.appendChild(a.e);
  (!a.G || a.G.p) && a.Q()
}
r.Q = function() {
  this.p = j;
  Vd(this, function(a) {
    !a.p && a.b() && a.Q()
  })
};
r.cb = function() {
  Vd(this, function(a) {
    a.p && a.cb()
  });
  this.xb && this.xb.ae();
  this.p = m
};
r.d = function() {
  Pd.f.d.call(this);
  this.p && this.cb();
  this.xb && (this.xb.g(), delete this.xb);
  Vd(this, function(a) {
    a.g()
  });
  if(!this.ph && this.e) {
    var a = this.e;
    a && a.parentNode && a.parentNode.removeChild(a)
  }
  this.G = this.Ng = this.e = this.mc = this.P = k
};
r.Sb = p("e");
r.Ib = function(a) {
  this.p && e(Error("Component already rendered"));
  this.cc = a
};
function Vd(a, b) {
  a.P && E(a.P, b, h)
}
r.removeChild = function(a, b) {
  if(a) {
    var c = w(a) ? a : Sd(a), d;
    this.mc && c ? (d = this.mc, d = (c in d ? d[c] : h) || k) : d = k;
    a = d;
    c && a && (d = this.mc, c in d && delete d[c], bb(this.P, a), b && (a.cb(), a.e && (c = a.e) && c.parentNode && c.parentNode.removeChild(c)), c = a, c == k && e(Error("Unable to set parent component")), c.G = k, Pd.f.ge.call(c, k))
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function Wd(a) {
  this.u = new nb;
  a && this.jd(a)
}
function Xd(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + na(a) : b.substr(0, 1) + a
}
r = Wd.prototype;
r.R = function() {
  return this.u.R()
};
r.add = function(a) {
  this.u.set(Xd(a), a)
};
r.jd = function(a) {
  a = jb(a);
  for(var b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
r.ae = function(a) {
  a = jb(a);
  for(var b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
r.remove = function(a) {
  return this.u.remove(Xd(a))
};
r.clear = function() {
  this.u.clear()
};
r.Oa = function() {
  return this.u.Oa()
};
r.contains = function(a) {
  return this.u.ra(Xd(a))
};
r.N = function() {
  return this.u.N()
};
r.L = function() {
  return new Wd(this)
};
r.V = function(a) {
  var b;
  if(b = this.R() == ib(a)) {
    var c = a;
    a = ib(c);
    this.R() > a ? b = m : (!(c instanceof Wd) && 5 < a && (c = new Wd(c)), b = mb(this, function(a) {
      if("function" == typeof c.contains) {
        a = c.contains(a)
      }else {
        if("function" == typeof c.oc) {
          a = c.oc(a)
        }else {
          if(ia(c) || w(c)) {
            a = $a(c, a)
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
function Yd(a) {
  return Zd(a || arguments.callee.caller, [])
}
function Zd(a, b) {
  var c = [];
  if($a(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push($d(a) + "(");
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
            g = String(g);
            break;
          case "boolean":
            g = g ? "true" : "false";
            break;
          case "function":
            g = (g = $d(g)) ? g : "[fn]";
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
        c.push(Zd(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function $d(a) {
  if(ae[a]) {
    return ae[a]
  }
  a = String(a);
  if(!ae[a]) {
    var b = /function ([^\(]+)/.exec(a);
    ae[a] = b ? b[1] : "[Anonymous]"
  }
  return ae[a]
}
var ae = {};
function be(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
be.prototype.Zg = 0;
be.prototype.Ad = k;
be.prototype.zd = k;
var ce = 0;
be.prototype.reset = function(a, b, c, d, f) {
  this.Zg = "number" == typeof f ? f : ce++;
  this.Tf = d || ta();
  this.Cb = a;
  this.sf = b;
  this.Jg = c;
  delete this.Ad;
  delete this.zd
};
be.prototype.Yc = ba("Cb");
function de(a) {
  this.Og = a
}
de.prototype.G = k;
de.prototype.Cb = k;
de.prototype.P = k;
de.prototype.Vb = k;
function ee(a, b) {
  this.name = a;
  this.value = b
}
ee.prototype.toString = p("name");
var fe = new ee("OFF", Infinity), ge = new ee("SHOUT", 1200), he = new ee("SEVERE", 1E3), ie = new ee("WARNING", 900), je = new ee("INFO", 800), ke = new ee("CONFIG", 700), le = new ee("FINE", 500), me = new ee("FINEST", 300), ne = new ee("ALL", 0);
r = de.prototype;
r.getParent = p("G");
r.Re = function() {
  this.P || (this.P = {});
  return this.P
};
r.Yc = ba("Cb");
function oe(a) {
  if(a.Cb) {
    return a.Cb
  }
  if(a.G) {
    return oe(a.G)
  }
  Ua("Root logger has no level set.");
  return k
}
r.log = function(a, b, c) {
  if(a.value >= oe(this).value) {
    a = this.yg(a, b, c);
    b = "log:" + a.sf;
    u.console && (u.console.timeStamp ? u.console.timeStamp(b) : u.console.markTimeline && u.console.markTimeline(b));
    u.msWriteProfilerMark && u.msWriteProfilerMark(b);
    for(b = this;b;) {
      c = b;
      var d = a;
      if(c.Vb) {
        for(var f = 0, g = h;g = c.Vb[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
r.yg = function(a, b, c) {
  var d = new be(a, String(b), this.Og);
  if(c) {
    d.Ad = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var i;
      var l = da("window.location.href");
      if(w(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var n, s, z = m;
        try {
          n = c.lineNumber || c.Li || "Not available"
        }catch(t) {
          n = "Not available", z = j
        }
        try {
          s = c.fileName || c.filename || c.sourceURL || l
        }catch(A) {
          s = "Not available", z = j
        }
        i = z || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:s, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + Ja(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + Ja(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ja(Yd(g) + "-> ")
    }catch(D) {
      f = "Exception trying to expose exception! You win, we lose. " + D
    }
    d.zd = f
  }
  return d
};
function pe(a, b) {
  a.log(he, b, h)
}
function Q(a, b, c) {
  a.log(ie, b, c)
}
r.info = function(a, b) {
  this.log(je, a, b)
};
function R(a, b) {
  a.log(le, b, h)
}
function S(a, b) {
  a.log(me, b, h)
}
var qe = {}, re = k;
function se() {
  re || (re = new de(""), qe[""] = re, re.Yc(ke))
}
function te() {
  se();
  return re
}
function T(a) {
  se();
  var b;
  if(!(b = qe[a])) {
    b = new de(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = T(a.substr(0, c));
    c.Re()[d] = b;
    b.G = c;
    qe[a] = b
  }
  return b
}
;function ue(a, b) {
  Pd.call(this, b);
  this.vg = a;
  this.yd = new Ld(this);
  this.tc = new nb
}
y(ue, Pd);
r = ue.prototype;
r.a = T("goog.ui.media.FlashObject");
r.rh = "window";
r.ze = "#000000";
r.dg = "sameDomain";
r.$ = function(a, b) {
  this.rb = w(a) ? a : Math.round(a) + "px";
  this.Id = w(b) ? b : Math.round(b) + "px";
  this.b() && Fd(this.b() ? this.b().firstChild : k, this.rb, this.Id);
  return this
};
r.Q = function() {
  ue.f.Q.call(this);
  var a = this.b(), b;
  b = H ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = H ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = Ha(c, this.rh), d = this.tc.ta(), f = this.tc.N(), g = [], i = 0;i < d.length;i++) {
    g.push(encodeURIComponent(String(d[i])) + "=" + encodeURIComponent(String(f[i])))
  }
  b = Ha(b, Sd(this), Sd(this), "goog-ui-media-flash-object", Ja(this.vg), Ja(g.join("&")), this.ze, this.dg, c);
  a.innerHTML = b;
  this.rb && this.Id && this.$(this.rb, this.Id);
  P(this.yd, this.b(), wa(cc), hc)
};
r.h = function() {
  this.Gf != k && !(0 <= Qa(Cd, this.Gf)) && (Q(this.a, "Required flash version not found:" + this.Gf), e(Error("Method not supported")));
  var a = this.Ba().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
r.d = function() {
  ue.f.d.call(this);
  this.tc = k;
  this.yd.g();
  this.yd = k
};
function ve() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ ta()).toString(36)
}
function we(a) {
  return a.substr(0, a.length - 1)
}
var xe = /^(0|[1-9]\d*)$/, ye = /^(0|\-?[1-9]\d*)$/;
function ze(a) {
  var b = Ae;
  return xe.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function Be(a) {
  B.call(this, a)
}
y(Be, B);
Be.prototype.name = "cw.loadflash.FlashLoadFailed";
u.__loadFlashObject_callbacks = {};
function Ce(a, b) {
  L.call(this);
  this.S = "_" + ve();
  this.dd = a;
  this.Ra = b;
  this.Ya = a.Ya
}
y(Ce, L);
r = Ce.prototype;
r.kb = j;
r.pc = m;
r.a = T("cw.net.FlashSocket");
r.O = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.S);
  a.push("'>")
};
function De(a, b, c) {
  if("frames" == b) {
    a = a.Ra, Ee(a.J), Fe(a.J, c)
  }else {
    if("stillreceiving" == b) {
      c = a.Ra, S(c.a, "onstillreceiving"), Ee(c.J)
    }else {
      if("connect" == b) {
        a.Ra.onconnect()
      }else {
        "close" == b ? (a.kb = m, a.g()) : "ioerror" == b ? (a.kb = m, b = a.Ra, Q(b.a, "onioerror: " + G(c)), Ge(b.J, m), a.g()) : "securityerror" == b ? (a.kb = m, b = a.Ra, Q(b.a, "onsecurityerror: " + G(c)), Ge(b.J, m), a.g()) : e(Error("bad event: " + b))
      }
    }
  }
}
r.rd = function(a, b) {
  try {
    var c = this.Ya.CallFunction(sd("__FC_connect", this.S, a, b, "<int32/>\n"))
  }catch(d) {
    pe(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message);
    this.pc = j;
    this.kb = m;
    this.g();
    return
  }
  '"OK"' != c && e(Error("__FC_connect failed? ret: " + c))
};
r.jc = function(a) {
  try {
    var b = this.Ya.CallFunction(sd("__FC_writeFrames", this.S, a))
  }catch(c) {
    pe(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message);
    this.pc = j;
    this.kb = m;
    this.g();
    return
  }
  '"OK"' != b && ('"no such instance"' == b ? (Q(this.a, "Flash no longer knows of " + this.S + "; disposing."), this.g()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
r.d = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.kb);
  Ce.f.d.call(this);
  var a = this.Ya;
  delete this.Ya;
  if(this.kb) {
    try {
      var b = a.CallFunction(sd("__FC_close", this.S));
      this.a.info("disposeInternal: __FC_close ret: " + b)
    }catch(c) {
      pe(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + c.message), this.pc = j
    }
  }
  if(this.pc) {
    a = this.Ra, Q(a.a, "oncrash"), Ge(a.J, j)
  }else {
    this.Ra.onclose()
  }
  delete this.Ra;
  delete this.dd.yb[this.S]
};
function He(a, b) {
  L.call(this);
  this.v = a;
  this.Ya = b;
  this.yb = {};
  this.qd = "__FST_" + ve();
  u[this.qd] = x(this.rg, this);
  var c = b.CallFunction(sd("__FC_setCallbackFunc", this.qd));
  '"OK"' != c && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
y(He, L);
r = He.prototype;
r.a = T("cw.net.FlashSocketTracker");
r.O = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  F(this.yb, a, b);
  a.push(">")
};
r.td = function(a) {
  a = new Ce(this, a);
  return this.yb[a.S] = a
};
r.pg = function(a, b, c, d) {
  var f = this.yb[a];
  f ? "frames" == b && d ? (De(f, "ioerror", "FlashConnector hadError while handling data."), f.g()) : De(f, b, c) : Q(this.a, "Cannot dispatch because we have no instance: " + G([a, b, c, d]))
};
r.rg = function(a, b, c, d) {
  try {
    var f = this.v;
    f.rc.push([this.pg, this, [a, b, c, d]]);
    f.oa == k && (f.oa = f.H.setTimeout(f.hg, 0))
  }catch(g) {
    u.window.setTimeout(function() {
      e(g)
    }, 0)
  }
};
r.d = function() {
  He.f.d.call(this);
  for(var a = wa(this.yb);a.length;) {
    a.pop().g()
  }
  delete this.yb;
  delete this.Ya;
  u[this.qd] = h
};
function Ie(a) {
  L.call(this);
  this.J = a;
  this.Nb = []
}
y(Ie, L);
r = Ie.prototype;
r.a = T("cw.net.FlashSocketConduit");
r.jc = function(a) {
  this.Nb ? (S(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Nb.push.apply(this.Nb, a)) : (S(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.ad.jc(a))
};
r.rd = function(a, b) {
  this.ad.rd(a, b)
};
r.onconnect = function() {
  this.a.info("onconnect");
  Ee(this.J);
  var a = this.Nb;
  this.Nb = k;
  a.length && (S(this.a, "onconnect: Writing " + a.length + " buffered frame(s)."), this.ad.jc(a))
};
r.onclose = function() {
  this.a.info("onclose");
  Ge(this.J, m)
};
r.d = function() {
  this.a.info("in disposeInternal.");
  Ie.f.d.call(this);
  this.ad.g();
  delete this.J
};
var Je = [];
function Ke() {
  var a = new Ec;
  Je.push(a);
  return a
}
function Le(a) {
  var b = Je;
  Je = [];
  E(b, function(b) {
    Kc(b, a)
  });
  return k
}
function Me(a) {
  var b = Je;
  Je = [];
  E(b, function(b) {
    b.wb(a)
  });
  return k
}
;var Ae = Math.pow(2, 53);
var Ne = {bg:q("<cw.eq.Wildcard>")};
function Oe(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function Pe(a, b, c) {
  var d = ga(a), f = ga(b);
  if(a == Ne || b == Ne) {
    return j
  }
  if(a != k && "function" == typeof a.V) {
    return c && c.push("running custom equals function on left object"), a.V(b, c)
  }
  if(b != k && "function" == typeof b.V) {
    return c && c.push("running custom equals function on right object"), b.V(a, c)
  }
  if(Oe(d) || Oe(f)) {
    a = a === b
  }else {
    if(a instanceof RegExp && b instanceof RegExp) {
      a = a.toString() === b.toString()
    }else {
      if(ja(a) && ja(b)) {
        a = a.valueOf() === b.valueOf()
      }else {
        if("array" == d && "array" == f) {
          a: {
            if(c && c.push("descending into array"), a.length != b.length) {
              c && c.push("array length mismatch: " + a.length + ", " + b.length), a = m
            }else {
              d = 0;
              for(f = a.length;d < f;d++) {
                if(!Pe(a[d], b[d], c)) {
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
          if(a.ag == Bb && b.ag == Bb) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!Pe(a[g], b[g], c)) {
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
  this.Wg = a;
  this.Qc = b
}
U.prototype.V = function(a, b) {
  return ka(a) && this.constructor == a.constructor && Pe(this.Qc, a.Qc, b)
};
U.prototype.O = function(a, b) {
  a.push("new ", this.Wg, "(");
  for(var c = "", d = 0;d < this.Qc.length;d++) {
    a.push(c), c = ", ", F(this.Qc[d], a, b)
  }
  a.push(")")
};
function V(a) {
  B.call(this, a)
}
y(V, B);
V.prototype.name = "cw.net.InvalidFrame";
function Qe() {
  var a = [];
  this.ma(a);
  return a.join("")
}
function Re() {
}
Re.prototype.V = function(a, b) {
  return!(a instanceof Re) ? m : Pe(Se(this), Se(a), b)
};
Re.prototype.O = function(a, b) {
  a.push("<HelloFrame properties=");
  F(Se(this), a, b);
  a.push(">")
};
function Se(a) {
  return[a.Ea, a.Bf, a.bf, a.Ff, a.fc, a.oe, a.tf, a.rf, a.Rd, a.pf, a.Xf, a.Sf, a.Ua, a.Jc]
}
Re.prototype.ca = Qe;
Re.prototype.ma = function(a) {
  var b = {};
  b.tnum = this.Ea;
  b.ver = this.Bf;
  b.format = this.bf;
  b["new"] = this.Ff;
  b.id = this.fc;
  b.ming = this.oe;
  b.pad = this.tf;
  b.maxb = this.rf;
  v(this.Rd) && (b.maxt = this.Rd);
  b.maxia = this.pf;
  b.tcpack = this.Xf;
  b.eeds = this.Sf;
  b.sack = this.Ua instanceof vb ? we((new Te(this.Ua)).ca()) : this.Ua;
  b.seenack = this.Jc instanceof vb ? we((new Te(this.Jc)).ca()) : this.Jc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(Aa(b), "H")
};
function Ue(a) {
  U.call(this, "StringFrame", [a]);
  this.qe = a
}
y(Ue, U);
Ue.prototype.ca = Qe;
Ue.prototype.ma = function(a) {
  a.push(this.qe, " ")
};
function Ve(a) {
  U.call(this, "CommentFrame", [a]);
  this.jg = a
}
y(Ve, U);
Ve.prototype.ca = Qe;
Ve.prototype.ma = function(a) {
  a.push(this.jg, "^")
};
function We(a) {
  U.call(this, "SeqNumFrame", [a]);
  this.Mf = a
}
y(We, U);
We.prototype.ca = Qe;
We.prototype.ma = function(a) {
  a.push(String(this.Mf), "N")
};
function Xe(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1];
    a = Ae;
    if(ye.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var g = ze(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new vb(a, c)
}
function Te(a) {
  U.call(this, "SackFrame", [a]);
  this.Ua = a
}
y(Te, U);
Te.prototype.ca = Qe;
Te.prototype.ma = function(a) {
  var b = this.Ua;
  a.push(b.ob.join(","), "|", String(b.sb));
  a.push("A")
};
function Ye(a) {
  U.call(this, "StreamStatusFrame", [a]);
  this.lf = a
}
y(Ye, U);
Ye.prototype.ca = Qe;
Ye.prototype.ma = function(a) {
  var b = this.lf;
  a.push(b.ob.join(","), "|", String(b.sb));
  a.push("T")
};
function Ze() {
  U.call(this, "StreamCreatedFrame", [])
}
y(Ze, U);
Ze.prototype.ca = Qe;
Ze.prototype.ma = function(a) {
  a.push("C")
};
function $e() {
  U.call(this, "YouCloseItFrame", [])
}
y($e, U);
$e.prototype.ca = Qe;
$e.prototype.ma = function(a) {
  a.push("Y")
};
function af(a, b) {
  U.call(this, "ResetFrame", [a, b]);
  this.Df = a;
  this.ye = b
}
y(af, U);
af.prototype.ca = Qe;
af.prototype.ma = function(a) {
  a.push(this.Df, "|", String(Number(this.ye)), "!")
};
var bf = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function cf(a) {
  U.call(this, "TransportKillFrame", [a]);
  this.reason = a
}
y(cf, U);
cf.prototype.ca = Qe;
cf.prototype.ma = function(a) {
  a.push(this.reason, "K")
};
function df(a) {
  a || e(new V("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new Ue(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = Xe(we(a)), a == k && e(new V("bad sack")), new Te(a)
  }
  if("N" == b) {
    return a = ze(we(a)), a == k && e(new V("bad seqNum")), new We(a)
  }
  if("T" == b) {
    return a = Xe(we(a)), a == k && e(new V("bad lastSackSeen")), new Ye(a)
  }
  if("Y" == b) {
    return 1 != a.length && e(new V("leading garbage")), new $e
  }
  if("^" == b) {
    return new Ve(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && e(new V("leading garbage")), new Ze
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && e(new V("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && e(new V("bad applicationLevel")), new af(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = bf[a], a == k && e(new V("unknown kill reason: " + a)), new cf(a)
  }
  e(new V("Invalid frame type " + b))
}
;var ef = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function ff(a, b) {
  var c = a.match(ef), d = b.match(ef);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function gf(a, b) {
  var c;
  if(a instanceof gf) {
    this.da = v(b) ? b : a.da, hf(this, a.Va), c = a.qb, jf(this), this.qb = c, kf(this, a.Ja), lf(this, a.Fb), this.Hb(a.K), mf(this, a.Z.L()), c = a.eb, jf(this), this.eb = c
  }else {
    if(a && (c = String(a).match(ef))) {
      this.da = !!b;
      hf(this, c[1] || "", j);
      var d = c[2] || "";
      jf(this);
      this.qb = d ? decodeURIComponent(d) : "";
      kf(this, c[3] || "", j);
      lf(this, c[4]);
      this.Hb(c[5] || "", j);
      mf(this, c[6] || "", j);
      c = c[7] || "";
      jf(this);
      this.eb = c ? decodeURIComponent(c) : ""
    }else {
      this.da = !!b, this.Z = new nf(k, 0, this.da)
    }
  }
}
r = gf.prototype;
r.Va = "";
r.qb = "";
r.Ja = "";
r.Fb = k;
r.K = "";
r.eb = "";
r.Hg = m;
r.da = m;
r.toString = function() {
  var a = [], b = this.Va;
  b && a.push(of(b, pf), ":");
  if(b = this.Ja) {
    a.push("//");
    var c = this.qb;
    c && a.push(of(c, pf), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.Fb;
    b != k && a.push(":", String(b))
  }
  if(b = this.K) {
    this.Ja && "/" != b.charAt(0) && a.push("/"), a.push(of(b, "/" == b.charAt(0) ? qf : rf))
  }
  (b = this.Z.toString()) && a.push("?", b);
  (b = this.eb) && a.push("#", of(b, sf));
  return a.join("")
};
r.L = function() {
  return new gf(this)
};
function hf(a, b, c) {
  jf(a);
  a.Va = c ? b ? decodeURIComponent(b) : "" : b;
  a.Va && (a.Va = a.Va.replace(/:$/, ""))
}
function kf(a, b, c) {
  jf(a);
  a.Ja = c ? b ? decodeURIComponent(b) : "" : b
}
function lf(a, b) {
  jf(a);
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.Fb = b) : a.Fb = k
}
r.Hb = function(a, b) {
  jf(this);
  this.K = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function mf(a, b, c) {
  jf(a);
  b instanceof nf ? (a.Z = b, a.Z.fe(a.da)) : (c || (b = of(b, tf)), a.Z = new nf(b, 0, a.da))
}
function jf(a) {
  a.Hg && e(Error("Tried to modify a read-only Uri"))
}
r.fe = function(a) {
  this.da = a;
  this.Z && this.Z.fe(a);
  return this
};
function uf(a) {
  return a instanceof gf ? a.L() : new gf(a, h)
}
function of(a, b) {
  return w(a) ? encodeURI(a).replace(b, vf) : k
}
function vf(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var pf = /[#\/\?@]/g, rf = /[\#\?:]/g, qf = /[\#\?]/g, tf = /[\#\?@]/g, sf = /#/g;
function nf(a, b, c) {
  this.U = a || k;
  this.da = !!c
}
function wf(a) {
  if(!a.s && (a.s = new nb, a.c = 0, a.U)) {
    for(var b = a.U.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = xf(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
r = nf.prototype;
r.s = k;
r.c = k;
r.R = function() {
  wf(this);
  return this.c
};
r.add = function(a, b) {
  wf(this);
  this.U = k;
  a = xf(this, a);
  var c = this.s.get(a);
  c || this.s.set(a, c = []);
  c.push(b);
  this.c++;
  return this
};
r.remove = function(a) {
  wf(this);
  a = xf(this, a);
  return this.s.ra(a) ? (this.U = k, this.c -= this.s.get(a).length, this.s.remove(a)) : m
};
r.clear = function() {
  this.s = this.U = k;
  this.c = 0
};
r.Oa = function() {
  wf(this);
  return 0 == this.c
};
r.ra = function(a) {
  wf(this);
  a = xf(this, a);
  return this.s.ra(a)
};
r.oc = function(a) {
  var b = this.N();
  return $a(b, a)
};
r.ta = function() {
  wf(this);
  for(var a = this.s.N(), b = this.s.ta(), c = [], d = 0;d < b.length;d++) {
    for(var f = a[d], g = 0;g < f.length;g++) {
      c.push(b[d])
    }
  }
  return c
};
r.N = function(a) {
  wf(this);
  var b = [];
  if(a) {
    this.ra(a) && (b = cb(b, this.s.get(xf(this, a))))
  }else {
    a = this.s.N();
    for(var c = 0;c < a.length;c++) {
      b = cb(b, a[c])
    }
  }
  return b
};
r.set = function(a, b) {
  wf(this);
  this.U = k;
  a = xf(this, a);
  this.ra(a) && (this.c -= this.s.get(a).length);
  this.s.set(a, [b]);
  this.c++;
  return this
};
r.get = function(a, b) {
  var c = a ? this.N(a) : [];
  return 0 < c.length ? String(c[0]) : b
};
r.toString = function() {
  if(this.U) {
    return this.U
  }
  if(!this.s) {
    return""
  }
  for(var a = [], b = this.s.ta(), c = 0;c < b.length;c++) {
    for(var d = b[c], f = encodeURIComponent(String(d)), d = this.N(d), g = 0;g < d.length;g++) {
      var i = f;
      "" !== d[g] && (i += "=" + encodeURIComponent(String(d[g])));
      a.push(i)
    }
  }
  return this.U = a.join("&")
};
r.L = function() {
  var a = new nf;
  a.U = this.U;
  this.s && (a.s = this.s.L(), a.c = this.c);
  return a
};
function xf(a, b) {
  var c = String(b);
  a.da && (c = c.toLowerCase());
  return c
}
r.fe = function(a) {
  a && !this.da && (wf(this), this.U = k, lb(this.s, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.U = k, this.s.set(xf(this, d), db(a)), this.c += a.length))
  }, this));
  this.da = a
};
function yf(a, b, c, d) {
  this.contentWindow = a;
  this.sc = b;
  this.pe = c;
  this.wg = d
}
yf.prototype.O = function(a, b) {
  a.push("<XDRFrame frameId=");
  F(this.wg, a, b);
  a.push(", expandedUrl=");
  F(this.sc, a, b);
  a.push(", streams=");
  F(this.pe, a, b);
  a.push(">")
};
function zf() {
  this.frames = [];
  this.Pd = new nb
}
zf.prototype.a = T("cw.net.XDRTracker");
function Af(a, b) {
  for(var c = Bf, d = 0;d < c.frames.length;d++) {
    var f = c.frames[d], g;
    if(g = 0 == f.pe.length) {
      g = f.sc;
      var i = String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + i + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + G(b) + " existing frame " + G(f)), Nc(f)
    }
  }
  d = ve() + ve();
  f = a.replace(/%random%/g, function() {
    return"ml" + String(Math.floor(Yc())) + String(Math.floor(Yc()))
  });
  g = u.location;
  g instanceof gf || (g = uf(g));
  f instanceof gf || (f = uf(f));
  var l = g;
  g = f;
  f = l.L();
  (i = !!g.Va) ? hf(f, g.Va) : i = !!g.qb;
  if(i) {
    var n = g.qb;
    jf(f);
    f.qb = n
  }else {
    i = !!g.Ja
  }
  i ? kf(f, g.Ja) : i = g.Fb != k;
  n = g.K;
  if(i) {
    lf(f, g.Fb)
  }else {
    if(i = !!g.K) {
      if("/" != n.charAt(0) && (l.Ja && !l.K ? n = "/" + n : (l = f.K.lastIndexOf("/"), -1 != l && (n = f.K.substr(0, l + 1) + n))), ".." == n || "." == n) {
        n = ""
      }else {
        if(-1 != n.indexOf("./") || -1 != n.indexOf("/.")) {
          for(var l = 0 == n.lastIndexOf("/", 0), n = n.split("/"), s = [], z = 0;z < n.length;) {
            var t = n[z++];
            "." == t ? l && z == n.length && s.push("") : ".." == t ? ((1 < s.length || 1 == s.length && "" != s[0]) && s.pop(), l && z == n.length && s.push("")) : (s.push(t), l = j)
          }
          n = s.join("/")
        }
      }
    }
  }
  i ? f.Hb(n) : i = "" !== g.Z.toString();
  i ? mf(f, g.Z.toString() ? decodeURIComponent(g.Z.toString()) : "") : i = !!g.eb;
  i && (g = g.eb, jf(f), f.eb = g);
  f = f.toString();
  g = String(u.location).match(ef)[3] || k;
  i = f.match(ef)[3] || k;
  g == i ? (c.a.info("No need to make a real XDRFrame for " + G(b)), c = Nc(new yf(u, f, [b], k))) : ((g = O("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new Ec, c.Pd.set(d, [i, f, b]), c.a.info("Creating new XDRFrame " + G(d) + "for " + G(b)), c = ed("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:f + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = i);
  return c
}
zf.prototype.uh = function(a) {
  var b = this.Pd.get(a);
  b || e(Error("Unknown frameId " + G(a)));
  this.Pd.remove(b);
  var c = b[0];
  a = new yf(O("minerva-xdrframe-" + a).contentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  Kc(c, a)
};
var Bf = new zf;
u.__XHRTracker_xdrFrameLoaded = x(Bf.uh, Bf);
var Cf;
Cf = m;
var Df = Hb();
Df && (-1 != Df.indexOf("Firefox") || -1 != Df.indexOf("Camino") || -1 != Df.indexOf("iPhone") || -1 != Df.indexOf("iPod") || -1 != Df.indexOf("iPad") || -1 != Df.indexOf("Android") || -1 != Df.indexOf("Chrome") && (Cf = j));
var Ef = Cf;
function Ff(a, b, c, d, f, g) {
  Ec.call(this, f, g);
  this.of = a;
  this.vd = [];
  this.Oe = !!b;
  this.ug = !!c;
  this.kg = !!d;
  for(b = 0;b < a.length;b++) {
    Lc(a[b], x(this.Xe, this, b, j), x(this.Xe, this, b, m))
  }
  0 == a.length && !this.Oe && Kc(this, this.vd)
}
y(Ff, Ec);
Ff.prototype.vf = 0;
Ff.prototype.Xe = function(a, b, c) {
  this.vf++;
  this.vd[a] = [b, c];
  this.La || (this.Oe && b ? Kc(this, [a, c]) : this.ug && !b ? this.wb(c) : this.vf == this.of.length && Kc(this, this.vd));
  this.kg && !b && (c = k);
  return c
};
Ff.prototype.wb = function(a) {
  Ff.f.wb.call(this, a);
  E(this.of, function(a) {
    a.cancel()
  })
};
function Gf(a, b) {
  this.sh = a;
  this.qf = b
}
Gf.prototype.Nd = 0;
Gf.prototype.Nc = 0;
Gf.prototype.Bd = m;
function Hf(a) {
  var b = [];
  if(a.Bd) {
    return[b, 2]
  }
  var c = a.Nd, d = a.sh.responseText;
  for(a.Nd = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var f = d.substr(a.Nc, c - a.Nc), f = f.replace(/\r$/, "");
    if(f.length > a.qf) {
      return a.Bd = j, [b, 2]
    }
    b.push(f);
    a.Nc = c += 1
  }
  return a.Nd - a.Nc - 1 > a.qf ? (a.Bd = j, [b, 2]) : [b, 1]
}
;function If(a, b, c) {
  L.call(this);
  this.J = b;
  this.na = a;
  this.sd = c
}
y(If, L);
r = If.prototype;
r.a = T("cw.net.XHRMaster");
r.Sa = -1;
r.Qd = function(a, b, c) {
  this.sd.__XHRSlave_makeRequest(this.na, a, b, c)
};
r.Na = p("Sa");
r.Td = function(a, b) {
  1 != b && pe(this.a, G(this.na) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Ee(this.J);
  Fe(this.J, a)
};
r.Ud = function(a) {
  R(this.a, "ongotheaders_: " + G(a));
  var b = k;
  "Content-Length" in a && (b = ze(a["Content-Length"]));
  a = this.J;
  R(a.a, a.r() + " got Content-Length: " + b);
  a.xa == Jf && (b == k && (Q(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Kf(a, 2E3 + 1E3 * (b / 3072)))
};
r.Vd = function(a) {
  1 != a && R(this.a, this.J.r() + "'s XHR's readyState is " + a);
  this.Sa = a;
  2 <= this.Sa && Ee(this.J)
};
r.Sd = function() {
  this.J.g()
};
r.d = function() {
  If.f.d.call(this);
  delete Lf.Ca[this.na];
  this.sd.__XHRSlave_dispose(this.na);
  delete this.sd
};
function Mf() {
  L.call(this);
  this.Ca = {}
}
y(Mf, L);
r = Mf.prototype;
r.a = T("cw.net.XHRMasterTracker");
r.td = function(a, b) {
  var c = "_" + ve(), d = new If(c, a, b);
  return this.Ca[c] = d
};
r.Td = function(a, b, c) {
  if(I) {
    for(var d = [], f = 0, g = b.length;f < g;f++) {
      d[f] = b[f]
    }
    b = d
  }else {
    b = cb(b)
  }
  (d = this.Ca[a]) ? d.Td(b, c) : pe(this.a, "onframes_: no master for " + G(a))
};
r.Ud = function(a, b) {
  var c = this.Ca[a];
  c ? c.Ud(b) : pe(this.a, "ongotheaders_: no master for " + G(a))
};
r.Vd = function(a, b) {
  var c = this.Ca[a];
  c ? c.Vd(b) : pe(this.a, "onreadystatechange_: no master for " + G(a))
};
r.Sd = function(a) {
  var b = this.Ca[a];
  b ? (delete this.Ca[b.na], b.Sd()) : pe(this.a, "oncomplete_: no master for " + G(a))
};
r.d = function() {
  Mf.f.d.call(this);
  for(var a = wa(this.Ca);a.length;) {
    a.pop().g()
  }
  delete this.Ca
};
var Lf = new Mf;
u.__XHRMaster_onframes = x(Lf.Td, Lf);
u.__XHRMaster_oncomplete = x(Lf.Sd, Lf);
u.__XHRMaster_ongotheaders = x(Lf.Ud, Lf);
u.__XHRMaster_onreadystatechange = x(Lf.Vd, Lf);
function Nf(a, b, c) {
  this.va = a;
  this.host = b;
  this.port = c
}
function Of(a, b, c) {
  this.host = a;
  this.port = b;
  this.kh = c
}
function Pf(a, b) {
  b || (b = a);
  this.va = a;
  this.Wa = b
}
Pf.prototype.O = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  F(this.va, a, b);
  a.push(", secondaryUrl=");
  F(this.Wa, a, b);
  a.push(">")
};
function Qf(a, b, c, d) {
  this.va = a;
  this.Af = b;
  this.Wa = c;
  this.Lf = d;
  (!(0 == this.va.indexOf("http://") || 0 == this.va.indexOf("https://")) || !(0 == this.Wa.indexOf("http://") || 0 == this.Wa.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Af.location.href;
  ff(this.va, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Lf.location.href;
  ff(this.Wa, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
Qf.prototype.O = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  F(this.va, a, b);
  a.push(", secondaryUrl=");
  F(this.Wa, a, b);
  a.push(">")
};
var Rf = new Ve(";)]}");
function Sf() {
}
Sf.prototype.Se = q(1);
function Tf(a) {
  u.setTimeout(function() {
    v(a.message) && a.stack && (a.message += "\n" + a.stack);
    e(a)
  }, 0)
}
function Uf(a) {
  this.fh = a
}
Uf.prototype.O = function(a, b) {
  a.push("<UserContext for ");
  F(this.fh, a, b);
  a.push(">")
};
Uf.prototype.toString = function() {
  return G(this)
};
function Vf(a, b, c, d) {
  U.call(this, "TransportInfo", [a, b, c, d]);
  this.Ea = a;
  this.Ki = b;
  this.Ri = c;
  this.Si = d
}
y(Vf, U);
function Wf(a, b, c) {
  L.call(this);
  this.A = a;
  this.gh = b ? b : new Sf;
  this.v = c ? c : Qc;
  this.hc = new Wd;
  this.fc = ve() + ve();
  this.wa = new wb;
  this.Kd = new yb;
  this.ic = k;
  this.fd = [];
  this.Kb = new Uf(this);
  this.gg = x(this.nh, this);
  J && (this.ic = rc(u, "load", this.Yg, m, this))
}
y(Wf, L);
r = Wf.prototype;
r.a = T("cw.net.ClientStream");
r.mf = new vb(-1, []);
r.nf = new vb(-1, []);
r.Mg = 50;
r.Lg = 1048576;
r.Xd = k;
r.Wd = k;
r.Yd = k;
r.Zd = k;
r.onreset = k;
r.yf = k;
r.Gb = k;
r.me = m;
r.be = m;
r.i = "1_UNSTARTED";
r.se = -1;
r.j = k;
r.z = k;
r.ac = k;
r.ne = 0;
r.zf = 0;
r.Kf = 0;
r.O = function(a, b) {
  a.push("<ClientStream id=");
  F(this.fc, a, b);
  a.push(", state=", String(this.i));
  a.push(", primary=");
  F(this.j, a, b);
  a.push(", secondary=");
  F(this.z, a, b);
  a.push(", resetting=");
  F(this.ac, a, b);
  a.push(">")
};
r.toString = function() {
  return G(this)
};
function Xf(a) {
  var b = [-1];
  a.j && b.push(a.j.Eb);
  a.z && b.push(a.z.Eb);
  return Math.max.apply(Math.max, b)
}
function Yf(a) {
  if(!("3_STARTED" > a.i)) {
    Zf(a);
    var b = 0 != a.wa.w.R(), c = zb(a.Kd), d = !c.V(a.nf) && !(a.j && c.V(a.j.Bb) || a.z && c.V(a.z.Bb)), f = Xf(a);
    if((b = b && f < a.wa.bb) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.j.$a ? (S(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.j, c != d.Bb && (!d.Da && !d.D.length && $f(d), d.D.push(new Te(c)), d.Bb = c)), b && ag(a.j, a.wa, f + 1), a.j.Aa()) : a.z == k ? a.me ? (S(a.a, "tryToSend_: creating secondary to send " + g), a.z = bg(a, m, j), a.z && (b && ag(a.z, a.wa, f + 1), a.z.Aa())) : (S(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.be = j) : S(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
function Zf(a) {
  a.Gb != k && (a.v.H.clearTimeout(a.Gb), a.Gb = k)
}
r.nh = function() {
  this.Gb = k;
  Yf(this)
};
function cg(a) {
  a.Gb == k && (a.Gb = a.v.H.setTimeout(a.gg, 6))
}
r.Yg = function() {
  this.ic = k;
  if(this.j && this.j.zb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.j;
    a.hd = j;
    a.g()
  }
  this.z && this.z.zb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.z, a.hd = j, a.g())
};
function dg(a, b) {
  var c;
  v(c) || (c = j);
  "3_STARTED" < a.i && e(Error("sendString: Can't send in state " + a.i));
  c && (w(b) || e(Error("sendString: not a string: " + G(b))), /^([ -~]*)$/.test(b) || e(Error("sendString: string has illegal chars: " + G(b))));
  a.wa.append(b);
  cg(a)
}
function bg(a, b, c) {
  var d;
  a.A instanceof Qf ? d = 1 == a.gh.Se() ? Jf : eg : a.A instanceof Of ? d = fg : e(Error("Don't support endpoint " + G(a.A)));
  a.se += 1;
  b = new gg(a.v, a, a.se, d, a.A, b);
  S(a.a, "Created: " + b.r());
  if(c) {
    if(a.Yd) {
      c = new Vf(b.Ea, b.Ha, b.Ta, b.$a);
      try {
        a.Yd.call(a.Kb, c)
      }catch(f) {
        Q(a.a, "ontransportcreated raised uncaught exception", f), Tf(f)
      }
    }
    if(hg(a)) {
      return k
    }
  }
  a.hc.add(b);
  return b
}
function ig(a, b, c) {
  var d = new jg(a.v, a, b, c);
  S(a.a, "Created: " + d.r() + ", delay=" + b + ", times=" + c);
  a.hc.add(d);
  return d
}
function kg(a, b) {
  a.hc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  R(a.a, "Offline: " + b.r());
  var c = "4_RESETTING" == a.i && b.$f;
  if(b instanceof gg && !c) {
    if(a.Zd) {
      var d = new Vf(b.Ea, b.Ha, b.Ta, b.$a);
      try {
        a.Zd.call(a.Kb, d)
      }catch(f) {
        Q(a.a, "ontransportdestroyed raised uncaught exception", f), Tf(f)
      }
    }
    if(hg(a)) {
      return
    }
  }
  a.ne = b.Qa ? a.ne + b.Qa : 0;
  1 <= a.ne && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), lg(a, "stream penalty reached limit", m), a.g());
  if("3_STARTED" < a.i) {
    c ? (R(a.a, "Disposing because resettingTransport_ is done."), a.g()) : R(a.a, "Not creating a transport because ClientStream is in state " + a.i)
  }else {
    c = b instanceof jg;
    if(!c && b.hd) {
      var g = J ? Ef ? [0, 1] : [9, 20] : [0, 0], c = g[0], d = g[1];
      S(a.a, "getDelayForNextTransport_: " + G({delay:c, times:d}))
    }else {
      if(d = b.Ce(), b == a.j ? d ? g = ++a.zf : c || (g = a.zf = 0) : d ? g = ++a.Kf : c || (g = a.Kf = 0), c || !g) {
        d = c = 0, S(a.a, "getDelayForNextTransport_: " + G({count:g, delay:c, times:d}))
      }else {
        var i = 2E3 * Math.min(g, 3), l = Math.floor(4E3 * Math.random()) - 2E3, n = Math.max(0, b.Wf - b.te), d = (c = Math.max(0, i + l - n)) ? 1 : 0;
        S(a.a, "getDelayForNextTransport_: " + G({count:g, base:i, variance:l, oldDuration:n, delay:c, times:d}))
      }
    }
    c = [c, d];
    g = c[0];
    c = c[1];
    if(b == a.j) {
      a.j = k;
      if(c) {
        a.j = ig(a, g, c)
      }else {
        g = Xf(a);
        a.j = bg(a, j, j);
        if(!a.j) {
          return
        }
        ag(a.j, a.wa, g + 1)
      }
      a.j.Aa()
    }else {
      b == a.z && (a.z = k, c ? (a.z = ig(a, g, c), a.z.Aa()) : Yf(a))
    }
  }
}
function lg(a, b, c) {
  if(a.onreset) {
    try {
      a.onreset.call(a.Kb, b, c)
    }catch(d) {
      Q(a.a, "onreset raised uncaught exception", d), Tf(d)
    }
  }
}
r.reset = function(a) {
  "3_STARTED" < this.i && e(Error("reset: Can't send reset in state " + this.i));
  Zf(this);
  0 != this.wa.w.R() && Q(this.a, "reset: strings in send queue will never be sent: " + G(this.wa));
  this.i = "4_RESETTING";
  this.j && this.j.$a ? (this.a.info("reset: Sending ResetFrame over existing primary."), mg(this.j, a), this.j.Aa()) : (this.j && (R(this.a, "reset: Disposing primary before sending ResetFrame."), this.j.g()), this.z && (R(this.a, "reset: Disposing secondary before sending ResetFrame."), this.z.g()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.ac = bg(this, m, m), mg(this.ac, a), this.ac.Aa());
  lg(this, a, j)
};
function hg(a) {
  return"4_RESETTING" == a.i || a.ya
}
r.Le = function(a) {
  pe(this.a, "Failed to start " + G(this) + "; error was " + G(a.message));
  this.g();
  return k
};
r.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  "1_UNSTARTED" != this.i && e(Error("ClientStream.start: " + G(this) + " already started"));
  this.Wd && this.Wd(this);
  this.i = "2_WAITING_RESOURCES";
  if(this.A instanceof Pf) {
    var a = Af(this.A.va, this), b = Af(this.A.Wa, this), a = new Ff([a, b], m, j);
    Lc(a, function(a) {
      return Xa(a, function(a) {
        return a[1]
      })
    }, k, h);
    b = x(this.tg, this);
    Lc(a, b, k, h);
    b = x(this.Le, this);
    Lc(a, k, b, h)
  }else {
    if(this.A instanceof Nf) {
      if(ub) {
        this.Ne()
      }else {
        a = this.v;
        b = this.A.va;
        if(Je.length) {
          a = Ke()
        }else {
          b = new ue(b + "FlashConnector.swf?cb=4bdfc178fc0e508c0cd5efc3fdb09920");
          b.ze = "#777777";
          b.$(300, 30);
          var c = O("minerva-elements");
          c || e(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
          var d = O("minerva-elements-FlashConnectorSwf");
          d || (d = ed("div", {id:"minerva-elements-FlashConnectorSwf"}), c.appendChild(d));
          var f = a.H, g;
          var a = d, i, l = function() {
            i && delete u.__loadFlashObject_callbacks[i]
          };
          if(I && !K("1.8.1.20")) {
            g = Oc(new Be("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
          }else {
            if(0 <= Qa(Cd, "9")) {
              var n;
              i = "_" + ve();
              var s = new Ec(l);
              u.__loadFlashObject_callbacks[i] = function() {
                f.setTimeout(function() {
                  l();
                  Kc(s, O(n))
                }, 0)
              };
              b.tc.set("onloadcallback", '__loadFlashObject_callbacks["' + i + '"]()');
              n = Sd(b);
              Ud(b, a);
              g = s
            }else {
              g = Oc(new Be("Need Flash Player 9+; had " + (Cd ? Cd : "none")))
            }
          }
          var z = f.setTimeout(function() {
            g.cancel()
          }, 8E3), a = function(a) {
            f.clearTimeout(z);
            return a
          };
          Lc(g, a, a, h);
          tb = g;
          a = Ke();
          Lc(tb, Le, Me)
        }
        var t = this;
        Lc(a, function(a) {
          ub || (ub = new He(t.v, a));
          return k
        }, k, h);
        b = x(this.Ne, this);
        Lc(a, b, k, h);
        b = x(this.Le, this);
        Lc(a, k, b, h)
      }
    }else {
      ng(this)
    }
  }
};
r.tg = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].sc, f = a[1].sc;
  this.fd.push(a[0]);
  this.fd.push(a[1]);
  this.A = new Qf(d, b, f, c);
  ng(this)
};
r.Ne = function() {
  this.A = new Of(this.A.host, this.A.port, ub);
  ng(this)
};
function ng(a) {
  a.i = "3_STARTED";
  a.j = bg(a, j, j);
  a.j && (ag(a.j, a.wa, k), a.j.Aa())
}
r.d = function() {
  this.a.info(G(this) + " in disposeInternal.");
  Zf(this);
  this.i = "5_DISCONNECTED";
  for(var a = this.hc.N(), b = 0;b < a.length;b++) {
    a[b].g()
  }
  for(a = 0;a < this.fd.length;a++) {
    bb(this.fd[a].pe, this)
  }
  J && this.ic && (uc(this.ic), this.ic = k);
  this.yf && this.yf.call(this.Kb);
  delete this.hc;
  delete this.j;
  delete this.z;
  delete this.ac;
  delete this.Kb;
  Wf.f.d.call(this)
};
var Jf = 1, eg = 2, fg = 3;
function gg(a, b, c, d, f, g) {
  L.call(this);
  this.v = a;
  this.C = b;
  this.Ea = c;
  this.xa = d;
  this.A = f;
  this.D = [];
  this.Ha = g;
  this.$a = !this.zb();
  this.Ta = this.xa != Jf;
  this.fg = x(this.ih, this)
}
y(gg, L);
r = gg.prototype;
r.a = T("cw.net.ClientTransport");
r.q = k;
r.te = k;
r.Wf = k;
r.Rc = k;
r.Da = m;
r.bd = m;
r.Bb = k;
r.uc = 0;
r.Eb = -1;
r.Pc = -1;
r.$f = m;
r.hd = m;
r.Qa = 0;
r.Ub = m;
r.O = function(a) {
  a.push("<ClientTransport #", String(this.Ea), ", becomePrimary=", String(this.Ha), ">")
};
r.r = function() {
  return(this.Ha ? "Prim. T#" : "Sec. T#") + this.Ea
};
r.Ce = function() {
  return!(!this.Ub && this.uc)
};
r.zb = function() {
  return this.xa == Jf || this.xa == eg
};
function og(a, b) {
  C.sort.call(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  } || gb);
  a: {
    var c = a.C, d = !a.Ta, f, g = c.Kd;
    f = c.Mg;
    for(var i = c.Lg, l = [], n = m, s = 0, z = b.length;s < z;s++) {
      var t = b[s], A = t[0], t = t[1];
      if(A == g.jb + 1) {
        g.jb += 1;
        for(l.push(t);;) {
          A = g.jb + 1;
          t = g.Za.get(A, Ab);
          if(t === Ab) {
            break
          }
          l.push(t[0]);
          g.Za.remove(A);
          g.n -= t[1];
          g.jb = A
        }
      }else {
        if(!(A <= g.jb)) {
          if(f != k && g.Za.R() >= f) {
            n = j;
            break
          }
          var D = sb(t);
          if(i != k && g.n + D > i) {
            n = j;
            break
          }
          g.Za.set(A, [t, D]);
          g.n += D
        }
      }
    }
    g.Za.Oa() && g.Za.clear();
    f = [l, n];
    g = f[0];
    f = f[1];
    if(g) {
      for(i = 0;i < g.length;i++) {
        l = g[i];
        if(c.Xd) {
          try {
            c.Xd.call(c.Kb, l)
          }catch(kd) {
            Q(c.a, "onstring raised uncaught exception", kd), Tf(kd)
          }
        }
        if(hg(c)) {
          break a
        }
      }
    }
    d || cg(c);
    !hg(c) && f && (pe(a.a, a.r() + "'s peer caused rwin overflow."), a.g())
  }
}
function pg(a, b, c) {
  try {
    var d = df(b);
    a.uc += 1;
    R(a.a, a.r() + " RECV " + G(d));
    var f;
    1 == a.uc && !d.V(Rf) && a.zb() ? (Q(a.a, a.r() + " is closing soon because got bad preamble: " + G(d)), f = j) : f = m;
    if(f) {
      return j
    }
    if(d instanceof Ue) {
      if(!/^([ -~]*)$/.test(d.qe)) {
        return a.Ub = j
      }
      a.Pc += 1;
      c.push([a.Pc, d.qe])
    }else {
      if(d instanceof Te) {
        var g = a.C, i = d.Ua;
        g.mf = i;
        var l = g.wa, n = i.sb;
        c = m;
        n > l.bb && (c = j);
        for(var s = xb(l).concat(), d = 0;d < s.length;d++) {
          var z = s[d];
          if(z > n) {
            break
          }
          var t = l.w.get(z)[1];
          l.w.remove(z);
          l.n -= t
        }
        for(d = 0;d < i.ob.length;d++) {
          var A = i.ob[d];
          A > l.bb && (c = j);
          l.w.ra(A) && (t = l.w.get(A)[1], l.w.remove(A), l.n -= t)
        }
        l.w.Oa() && l.w.clear();
        if(c) {
          return Q(a.a, a.r() + " is closing soon because got bad SackFrame"), a.Ub = j
        }
      }else {
        if(d instanceof We) {
          a.Pc = d.Mf - 1
        }else {
          if(d instanceof Ye) {
            a.C.nf = d.lf
          }else {
            if(d instanceof $e) {
              return S(a.a, a.r() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof cf) {
              return a.Ub = j, "stream_attach_failure" == d.reason ? a.Qa += 1 : "acked_unsent_strings" == d.reason && (a.Qa += 0.5), S(a.a, a.r() + " is closing soon because got " + G(d)), j
            }
            if(!(d instanceof Ve)) {
              if(d instanceof Ze) {
                var D = a.C, kd = !a.Ta;
                S(D.a, "Stream is now confirmed to exist at server.");
                D.me = j;
                D.be && !kd && (D.be = m, Yf(D))
              }else {
                c.length && (og(a, c), ab(c));
                if(d instanceof af) {
                  var Ng = a.C;
                  lg(Ng, d.Df, d.ye);
                  Ng.g();
                  return j
                }
                e(Error(a.r() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(Og) {
    return Og instanceof V || e(Og), Q(a.a, a.r() + " is closing soon because got InvalidFrame: " + G(b)), a.Ub = j
  }
  return m
}
function Fe(a, b) {
  a.bd = j;
  try {
    for(var c = m, d = [], f = 0, g = b.length;f < g;f++) {
      if(a.ya) {
        a.a.info(a.r() + " returning from loop because we're disposed.");
        return
      }
      if(c = pg(a, b[f], d)) {
        break
      }
    }
    d.length && og(a, d);
    a.bd = m;
    a.D.length && a.Aa();
    c && (S(a.a, a.r() + " closeSoon is true.  Frames were: " + G(b)), a.g())
  }finally {
    a.bd = m
  }
}
r.ih = function() {
  Q(this.a, this.r() + " timed out due to lack of connection or no data being received.");
  this.g()
};
function qg(a) {
  a.Rc != k && (a.v.H.clearTimeout(a.Rc), a.Rc = k)
}
function Kf(a, b) {
  qg(a);
  b = Math.round(b);
  a.Rc = a.v.H.setTimeout(a.fg, b);
  R(a.a, a.r() + "'s receive timeout set to " + b + " ms.")
}
function Ee(a) {
  a.xa != Jf && (a.xa == fg || a.xa == eg ? Kf(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.xa)))
}
function $f(a) {
  var b = new Re;
  b.Ea = a.Ea;
  b.Bf = 2;
  b.bf = 2;
  a.C.me || (b.Ff = j);
  b.fc = a.C.fc;
  b.oe = a.Ta;
  b.oe && (b.tf = 4096);
  b.rf = 3E5;
  b.pf = a.Ta ? Math.floor(10) : 0;
  b.Xf = m;
  a.Ha && (b.Sf = k, b.Rd = Math.floor((a.Ta ? 358E4 : 25E3) / 1E3));
  b.Ua = zb(a.C.Kd);
  b.Jc = a.C.mf;
  a.D.push(b);
  a.Bb = b.Ua
}
function Ge(a, b) {
  b && (a.Qa += 0.5);
  a.g()
}
r.Aa = function() {
  this.Da && !this.$a && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.bd) {
    S(this.a, this.r() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Da;
    this.Da = j;
    !a && !this.D.length && $f(this);
    for(a = 0;a < this.D.length;a++) {
      R(this.a, this.r() + " SEND " + G(this.D[a]))
    }
    if(this.zb()) {
      for(var a = [], b = 0, c = this.D.length;b < c;b++) {
        this.D[b].ma(a), a.push("\n")
      }
      this.D = [];
      a = a.join("");
      b = this.Ha ? this.A.va : this.A.Wa;
      this.q = Lf.td(this, this.Ha ? this.A.Af : this.A.Lf);
      this.te = this.v.H === Cc ? ta() : this.v.H.getTime();
      this.q.Qd(b, "POST", a);
      Kf(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Ta ? 0 : this.Ha ? 25E3 : 0))
    }else {
      if(this.xa == fg) {
        a = [];
        b = 0;
        for(c = this.D.length;b < c;b++) {
          a.push(this.D[b].ca())
        }
        this.D = [];
        this.q ? this.q.jc(a) : (b = this.A, this.q = new Ie(this), c = b.kh.td(this.q), this.q.ad = c, this.te = this.v.H === Cc ? ta() : this.v.H.getTime(), this.q.rd(b.host, b.port), this.q.ya || (this.q.jc(a), this.q.ya || Kf(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.xa))
      }
    }
  }
};
function ag(a, b, c) {
  !a.Da && !a.D.length && $f(a);
  c = Math.max(c, a.Eb + 1);
  b = b.Te(c);
  c = 0;
  for(var d = b.length;c < d;c++) {
    var f = b[c], g = f[0], f = f[1];
    (-1 == a.Eb || a.Eb + 1 != g) && a.D.push(new We(g));
    a.D.push(new Ue(f));
    a.Eb = g
  }
}
r.d = function() {
  this.a.info(this.r() + " in disposeInternal.");
  gg.f.d.call(this);
  this.Wf = this.v.H === Cc ? ta() : this.v.H.getTime();
  this.D = [];
  qg(this);
  this.q && this.q.g();
  var a = this.C;
  this.C = k;
  kg(a, this)
};
function mg(a, b) {
  !a.Da && !a.D.length && $f(a);
  a.D.push(new af(b, j));
  a.$f = j
}
function jg(a, b, c, d) {
  L.call(this);
  this.v = a;
  this.C = b;
  this.Ke = c;
  this.Ee = d
}
y(jg, L);
r = jg.prototype;
r.Da = m;
r.$a = m;
r.yc = k;
r.Bb = k;
r.a = T("cw.net.DoNothingTransport");
function rg(a) {
  a.yc = a.v.H.setTimeout(function() {
    a.yc = k;
    a.Ee--;
    a.Ee ? rg(a) : a.g()
  }, a.Ke)
}
r.Aa = function() {
  this.Da && !this.$a && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Da = j;
  rg(this)
};
r.O = function(a) {
  a.push("<DoNothingTransport delay=", String(this.Ke), ">")
};
r.zb = q(m);
r.r = q("Wast. T");
r.Ce = q(m);
r.d = function() {
  this.a.info(this.r() + " in disposeInternal.");
  jg.f.d.call(this);
  this.yc != k && this.v.H.clearTimeout(this.yc);
  var a = this.C;
  this.C = k;
  kg(a, this)
};
function sg() {
}
var tg;
fa(sg);
r = sg.prototype;
r.vc = aa();
r.h = function(a) {
  var b = a.Ba().h("div", ug(this, a).join(" "), a.ba);
  vg(this, a, b);
  return b
};
r.Sb = function(a) {
  return a
};
r.Rb = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(H && !K("7")) {
      var d = wg(Sc(a), b);
      d.push(b);
      sa(c ? Tc : Uc, a).apply(k, d)
    }else {
      c ? Tc(a, b) : Uc(a, b)
    }
  }
};
r.ef = function(a) {
  a.cc == k && (a.cc = "rtl" == (Ed(a.p ? a.e : a.M.o.body, "direction") || ((a.p ? a.e : a.M.o.body).currentStyle ? (a.p ? a.e : a.M.o.body).currentStyle.direction : k) || (a.p ? a.e : a.M.o.body).style && (a.p ? a.e : a.M.o.body).style.direction));
  a.cc && this.Ib(a.b(), j);
  a.isEnabled() && this.Xc(a, a.Lb)
};
function vg(a, b, c) {
  b.isEnabled() || a.Fa(c, 1, j);
  b.i & 8 && a.Fa(c, 8, j);
  b.aa & 16 && a.Fa(c, 16, !!(b.i & 16));
  b.aa & 64 && a.Fa(c, 64, !!(b.i & 64))
}
r.Uc = function(a, b) {
  Kd(a, !b, !H && !Kb)
};
r.Ib = function(a, b) {
  this.Rb(a, this.t() + "-rtl", b)
};
r.hf = function(a) {
  var b;
  return a.aa & 32 && (b = a.fb()) ? od(b) : m
};
r.Xc = function(a, b) {
  var c;
  if(a.aa & 32 && (c = a.fb())) {
    if(!b && a.i & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.i & 32 && a.We()
    }
    od(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
r.ke = function(a, b) {
  a.style.display = b ? "" : "none"
};
r.ka = function(a, b, c) {
  var d = a.b();
  if(d) {
    var f = xg(this, b);
    f && this.Rb(a, f, c);
    this.Fa(d, b, c)
  }
};
r.Fa = function(a, b, c) {
  tg || (tg = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = tg[b]) && a.setAttribute("aria-" + b, c)
};
r.Vc = function(a, b) {
  var c = this.Sb(a);
  if(c && (id(c), b)) {
    if(w(b)) {
      ld(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = bd(c);
          c.appendChild(w(a) ? b.createTextNode(a) : a)
        }
      };
      ha(b) ? E(b, d) : ia(b) && !("nodeType" in b) ? E(db(b), d) : d(b)
    }
  }
};
r.fb = function(a) {
  return a.b()
};
r.t = q("goog-control");
function ug(a, b) {
  var c = a.t(), d = [c], f = a.t();
  f != c && d.push(f);
  c = b.i;
  for(f = [];c;) {
    var g = c & -c;
    f.push(xg(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.sa) && d.push.apply(d, c);
  H && !K("7") && d.push.apply(d, wg(d));
  return d
}
function wg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  E([], function(d) {
    Za(d, sa($a, a)) && (!b || $a(d, b)) && c.push(d.join("_"))
  });
  return c
}
function xg(a, b) {
  if(!a.Be) {
    var c = a.t();
    a.Be = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Be[b]
}
;function yg(a, b) {
  a || e(Error("Invalid class name " + a));
  ma(b) || e(Error("Invalid decorator function " + b))
}
var zg = {};
function Ag(a, b, c, d, f) {
  if(!H && (!J || !K("525"))) {
    return j
  }
  if(Nb && f) {
    return Bg(a)
  }
  if(f && !d || !c && (17 == b || 18 == b || Nb && 91 == b)) {
    return m
  }
  if(J && d && c) {
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
  if(H && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(H && Xb());
    case 27:
      return!J
  }
  return Bg(a)
}
function Bg(a) {
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
function Cg(a) {
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
;function Dg(a, b) {
  L.call(this);
  a && Eg(this, a, b)
}
y(Dg, Ac);
r = Dg.prototype;
r.e = k;
r.Hc = k;
r.Md = k;
r.Ic = k;
r.X = -1;
r.Pa = -1;
r.ld = m;
var Fg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Gg = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Hg = H || 
J && K("525"), Ig = Nb && I;
r = Dg.prototype;
r.Cg = function(a) {
  J && (17 == this.X && !a.ctrlKey || 18 == this.X && !a.altKey || Nb && 91 == this.X && !a.metaKey ? this.Pa = this.X = -1 : -1 == this.X && (a.ctrlKey && 17 != a.keyCode ? this.X = 17 : a.altKey && 18 != a.keyCode ? this.X = 18 : a.metaKey && 91 != a.keyCode && (this.X = 91)));
  Hg && !Ag(a.keyCode, this.X, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.Pa = I ? Cg(a.keyCode) : a.keyCode, Ig && (this.ld = a.altKey))
};
r.Dg = function(a) {
  this.Pa = this.X = -1;
  this.ld = a.altKey
};
r.handleEvent = function(a) {
  var b = a.Ka, c, d, f = b.altKey;
  H && "keypress" == a.type ? (c = this.Pa, d = 13 != c && 27 != c ? b.keyCode : 0) : J && "keypress" == a.type ? (c = this.Pa, d = 0 <= b.charCode && 63232 > b.charCode && Bg(c) ? b.charCode : 0) : Kb ? (c = this.Pa, d = Bg(c) ? b.keyCode : 0) : (c = b.keyCode || this.Pa, d = b.charCode || 0, Ig && (f = this.ld), Nb && (63 == d && 224 == c) && (c = 191));
  var g = c, i = b.keyIdentifier;
  c ? 63232 <= c && c in Fg ? g = Fg[c] : 25 == c && a.shiftKey && (g = 9) : i && i in Gg && (g = Gg[i]);
  a = g == this.X;
  this.X = g;
  b = new Jg(g, d, a, b);
  b.altKey = f;
  this.dispatchEvent(b)
};
r.b = p("e");
function Eg(a, b, c) {
  a.Ic && a.detach();
  a.e = b;
  a.Hc = M(a.e, "keypress", a, c);
  a.Md = M(a.e, "keydown", a.Cg, c, a);
  a.Ic = M(a.e, "keyup", a.Dg, c, a)
}
r.detach = function() {
  this.Hc && (uc(this.Hc), uc(this.Md), uc(this.Ic), this.Ic = this.Md = this.Hc = k);
  this.e = k;
  this.Pa = this.X = -1
};
r.d = function() {
  Dg.f.d.call(this);
  this.detach()
};
function Jg(a, b, c, d) {
  d && this.Wb(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
y(Jg, jc);
function W(a, b, c) {
  Pd.call(this, c);
  if(!b) {
    b = this.constructor;
    for(var d;b;) {
      d = na(b);
      if(d = zg[d]) {
        break
      }
      b = b.f ? b.f.constructor : k
    }
    b = d ? ma(d.Ma) ? d.Ma() : new d : k
  }
  this.l = b;
  this.Wc(a)
}
y(W, Pd);
r = W.prototype;
r.ba = k;
r.i = 0;
r.aa = 39;
r.md = 255;
r.eh = 0;
r.Lb = j;
r.sa = k;
r.Hd = j;
r.kd = m;
r.Sg = k;
r.fb = function() {
  return this.l.fb(this)
};
function Kg(a, b) {
  b && (a.sa ? $a(a.sa, b) || a.sa.push(b) : a.sa = [b], a.l.Rb(a, b, j))
}
r.Rb = function(a, b) {
  b ? Kg(this, a) : a && this.sa && (bb(this.sa, a), 0 == this.sa.length && (this.sa = k), this.l.Rb(this, a, m))
};
r.h = function() {
  var a = this.l.h(this);
  this.e = a;
  var b = this.Sg || this.l.vc();
  b && a.setAttribute("role", b);
  this.kd || this.l.Uc(a, m);
  this.Lb || this.l.ke(a, m)
};
r.Sb = function() {
  return this.l.Sb(this.b())
};
r.Q = function() {
  W.f.Q.call(this);
  this.l.ef(this);
  if(this.aa & -2 && (this.Hd && Lg(this, j), this.aa & 32)) {
    var a = this.fb();
    if(a) {
      var b = this.Ab || (this.Ab = new Dg);
      Eg(b, a);
      P(P(P(Td(this), b, "key", this.Ze), a, "focus", this.Ag), a, "blur", this.We)
    }
  }
};
function Lg(a, b) {
  var c = Td(a), d = a.b();
  b ? (P(P(P(P(c, d, "mouseover", a.Cc), d, "mousedown", a.Ac), d, "mouseup", a.$e), d, "mouseout", a.Bc), a.zc != ea && P(c, d, "contextmenu", a.zc), H && P(c, d, "dblclick", a.Ye)) : (Nd(Nd(Nd(Nd(c, d, "mouseover", a.Cc), d, "mousedown", a.Ac), d, "mouseup", a.$e), d, "mouseout", a.Bc), a.zc != ea && Nd(c, d, "contextmenu", a.zc), H && Nd(c, d, "dblclick", a.Ye))
}
r.cb = function() {
  W.f.cb.call(this);
  this.Ab && this.Ab.detach();
  this.Lb && this.isEnabled() && this.l.Xc(this, m)
};
r.d = function() {
  W.f.d.call(this);
  this.Ab && (this.Ab.g(), delete this.Ab);
  delete this.l;
  this.sa = this.ba = k
};
r.Vc = function(a) {
  this.l.Vc(this.b(), a);
  this.Wc(a)
};
r.Wc = ba("ba");
r.Qe = function() {
  var a = this.ba;
  if(!a) {
    return""
  }
  if(!w(a)) {
    if(ha(a)) {
      a = Xa(a, pd).join("")
    }else {
      if(Xc && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        qd(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Xc || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
r.Ib = function(a) {
  W.f.Ib.call(this, a);
  var b = this.b();
  b && this.l.Ib(b, a)
};
r.Uc = function(a) {
  this.kd = a;
  var b = this.b();
  b && this.l.Uc(b, a)
};
r.ke = function(a, b) {
  if(b || this.Lb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.l.ke(c, a);
    this.isEnabled() && this.l.Xc(this, a);
    this.Lb = a;
    return j
  }
  return m
};
r.isEnabled = function() {
  return!(this.i & 1)
};
function Mg(a, b) {
  Pg(a, 2, b) && a.ka(2, b)
}
r.Ld = function() {
  return!!(this.i & 4)
};
r.setActive = function(a) {
  Pg(this, 4, a) && this.ka(4, a)
};
r.he = function(a) {
  Pg(this, 8, a) && this.ka(8, a)
};
r.ka = function(a, b) {
  this.aa & a && b != !!(this.i & a) && (this.l.ka(this, a, b), this.i = b ? this.i | a : this.i & ~a)
};
function X(a, b) {
  return!!(a.md & b) && !!(a.aa & b)
}
function Pg(a, b, c) {
  return!!(a.aa & b) && !!(a.i & b) != c && (!(a.eh & b) || a.dispatchEvent(Rd(b, c))) && !a.ya
}
r.Cc = function(a) {
  !Qg(a, this.b()) && (this.dispatchEvent("enter") && this.isEnabled() && X(this, 2)) && Mg(this, j)
};
r.Bc = function(a) {
  !Qg(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(m), X(this, 2) && Mg(this, m))
};
r.zc = ea;
function Qg(a, b) {
  return!!a.relatedTarget && jd(b, a.relatedTarget)
}
r.Ac = function(a) {
  if(this.isEnabled() && (X(this, 2) && Mg(this, j), lc(a) && (!J || !Nb || !a.ctrlKey))) {
    X(this, 4) && this.setActive(j), this.l.hf(this) && this.fb().focus()
  }
  !this.kd && (lc(a) && (!J || !Nb || !a.ctrlKey)) && a.preventDefault()
};
r.$e = function(a) {
  this.isEnabled() && (X(this, 2) && Mg(this, j), this.Ld() && (this.lb(a) && X(this, 4)) && this.setActive(m))
};
r.Ye = function(a) {
  this.isEnabled() && this.lb(a)
};
r.lb = function(a) {
  if(X(this, 16)) {
    var b = !(this.i & 16);
    Pg(this, 16, b) && this.ka(16, b)
  }
  X(this, 8) && this.he(j);
  X(this, 64) && (b = !(this.i & 64), Pg(this, 64, b) && this.ka(64, b));
  b = new gc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.$d = a.$d);
  return this.dispatchEvent(b)
};
r.Ag = function() {
  X(this, 32) && Pg(this, 32, j) && this.ka(32, j)
};
r.We = function() {
  X(this, 4) && this.setActive(m);
  X(this, 32) && Pg(this, 32, m) && this.ka(32, m)
};
r.Ze = function(a) {
  return this.Lb && this.isEnabled() && this.Gd(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
r.Gd = function(a) {
  return 13 == a.keyCode && this.lb(a)
};
ma(W) || e(Error("Invalid component class " + W));
ma(sg) || e(Error("Invalid renderer class " + sg));
var Rg = na(W);
zg[Rg] = sg;
yg("goog-control", function() {
  return new W(k)
});
function Sg() {
}
y(Sg, sg);
fa(Sg);
r = Sg.prototype;
r.vc = q("button");
r.Fa = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : Sg.f.Fa.call(this, a, b, c)
};
r.h = function(a) {
  var b = Sg.f.h.call(this, a), c = a.wc();
  c && this.je(b, c);
  (c = a.xc()) && this.$c(b, c);
  a.aa & 16 && this.Fa(b, 16, !!(a.i & 16));
  return b
};
r.xc = ea;
r.$c = ea;
r.wc = function(a) {
  return a.title
};
r.je = function(a, b) {
  a && (a.title = b || "")
};
r.t = q("goog-button");
function Tg() {
}
y(Tg, Sg);
fa(Tg);
r = Tg.prototype;
r.vc = aa();
r.h = function(a) {
  a.p && m != a.Hd && Lg(a, m);
  a.Hd = m;
  a.md &= -256;
  a.p && a.i & 32 && e(Error("Component already rendered"));
  a.i & 32 && a.ka(32, m);
  a.aa &= -33;
  return a.Ba().h("button", {"class":ug(this, a).join(" "), disabled:!a.isEnabled(), title:a.wc() || "", value:a.xc() || ""}, a.Qe() || "")
};
r.ef = function(a) {
  P(Td(a), a.b(), "click", a.lb)
};
r.Uc = ea;
r.Ib = ea;
r.hf = function(a) {
  return a.isEnabled()
};
r.Xc = ea;
r.ka = function(a, b, c) {
  Tg.f.ka.call(this, a, b, c);
  if((a = a.b()) && 1 == b) {
    a.disabled = c
  }
};
r.xc = function(a) {
  return a.value
};
r.$c = function(a, b) {
  a && (a.value = b)
};
r.Fa = ea;
function Ug(a, b, c) {
  W.call(this, a, b || Tg.Ma(), c)
}
y(Ug, W);
r = Ug.prototype;
r.xc = p("Yf");
r.$c = function(a) {
  this.Yf = a;
  this.l.$c(this.b(), a)
};
r.wc = p("Uf");
r.je = function(a) {
  this.Uf = a;
  this.l.je(this.b(), a)
};
r.d = function() {
  Ug.f.d.call(this);
  delete this.Yf;
  delete this.Uf
};
r.Q = function() {
  Ug.f.Q.call(this);
  if(this.aa & 32) {
    var a = this.fb();
    a && P(Td(this), a, "keyup", this.Gd)
  }
};
r.Gd = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.lb(a) : 32 == a.keyCode
};
yg("goog-button", function() {
  return new Ug(k)
});
function Vg() {
}
y(Vg, Sg);
fa(Vg);
Vg.prototype.h = function(a) {
  var b = {"class":"goog-inline-block " + ug(this, a).join(" "), title:a.wc() || ""}, b = a.Ba().h("div", b, Wg(this, a.ba, a.Ba()));
  vg(this, a, b);
  return b
};
Vg.prototype.vc = q("button");
Vg.prototype.Sb = function(a) {
  return a && a.firstChild.firstChild
};
function Wg(a, b, c) {
  return c.h("div", "goog-inline-block " + (a.t() + "-outer-box"), c.h("div", "goog-inline-block " + (a.t() + "-inner-box"), b))
}
Vg.prototype.t = q("goog-custom-button");
function Xg(a, b, c) {
  Ug.call(this, a, b || Vg.Ma(), c)
}
y(Xg, Ug);
yg("goog-custom-button", function() {
  return new Xg(k)
});
var Yg = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function Zg(a) {
  var b = {};
  a = String(a);
  var c = "#" == a.charAt(0) ? a : "#" + a;
  if($g.test(c)) {
    return b.Ec = ah(c), b.type = "hex", b
  }
  a: {
    var d = a.match(bh);
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
    return b.Ec = ch(c[0], c[1], c[2]), b.type = "rgb", b
  }
  if(Yg && (c = Yg[a.toLowerCase()])) {
    return b.Ec = c, b.type = "named", b
  }
  e(Error(a + " is not a valid color string"))
}
var dh = /#(.)(.)(.)/;
function ah(a) {
  $g.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  4 == a.length && (a = a.replace(dh, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function eh(a) {
  a = ah(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function ch(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || 0 > a || 255 < a || isNaN(b) || 0 > b || 255 < b || isNaN(c) || 0 > c || 255 < c) && e(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = fh(a.toString(16));
  b = fh(b.toString(16));
  c = fh(c.toString(16));
  return"#" + a + b + c
}
var $g = /^#(?:[0-9a-f]{3}){1,2}$/i, bh = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function fh(a) {
  return 1 == a.length ? "0" + a : a
}
;function gh() {
}
gh.prototype.kc = k;
var hh;
function ih() {
}
y(ih, gh);
function jh(a) {
  return(a = kh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function lh(a) {
  var b = {};
  kh(a) && (b[0] = j, b[1] = j);
  return b
}
function kh(a) {
  if(!a.cf && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.cf = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.cf
}
hh = new ih;
function mh(a) {
  L.call(this);
  this.headers = new nb;
  this.Mb = a || k
}
y(mh, Ac);
mh.prototype.a = T("goog.net.XhrIo");
var nh = /^https?$/i;
r = mh.prototype;
r.Ga = m;
r.k = k;
r.gd = k;
r.Kc = "";
r.kf = "";
r.Xb = 0;
r.Yb = "";
r.xd = m;
r.Fc = m;
r.Jd = m;
r.ib = m;
r.cd = 0;
r.pb = k;
r.Hf = "";
r.qh = m;
r.send = function(a, b, c, d) {
  this.k && e(Error("[goog.net.XhrIo] Object is active with another request=" + this.Kc + "; newUri=" + a));
  b = b ? b.toUpperCase() : "GET";
  this.Kc = a;
  this.Yb = "";
  this.Xb = 0;
  this.kf = b;
  this.xd = m;
  this.Ga = j;
  this.k = this.Mb ? jh(this.Mb) : jh(hh);
  this.gd = this.Mb ? this.Mb.kc || (this.Mb.kc = lh(this.Mb)) : hh.kc || (hh.kc = lh(hh));
  this.k.onreadystatechange = x(this.xf, this);
  try {
    R(this.a, oh(this, "Opening Xhr")), this.Jd = j, this.k.open(b, a, j), this.Jd = m
  }catch(f) {
    R(this.a, oh(this, "Error opening Xhr: " + f.message));
    ph(this, f);
    return
  }
  a = c || "";
  var g = this.headers.L();
  d && lb(d, function(a, b) {
    g.set(b, a)
  });
  d = u.FormData && a instanceof u.FormData;
  "POST" == b && (!g.ra("Content-Type") && !d) && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  lb(g, function(a, b) {
    this.k.setRequestHeader(b, a)
  }, this);
  this.Hf && (this.k.responseType = this.Hf);
  "withCredentials" in this.k && (this.k.withCredentials = this.qh);
  try {
    this.pb && (Cc.clearTimeout(this.pb), this.pb = k), 0 < this.cd && (R(this.a, oh(this, "Will abort after " + this.cd + "ms if incomplete")), this.pb = Cc.setTimeout(x(this.jh, this), this.cd)), R(this.a, oh(this, "Sending request")), this.Fc = j, this.k.send(a), this.Fc = m
  }catch(i) {
    R(this.a, oh(this, "Send error: " + i.message)), ph(this, i)
  }
};
r.jh = function() {
  "undefined" != typeof ca && this.k && (this.Yb = "Timed out after " + this.cd + "ms, aborting", this.Xb = 8, R(this.a, oh(this, this.Yb)), this.dispatchEvent("timeout"), this.abort(8))
};
function ph(a, b) {
  a.Ga = m;
  a.k && (a.ib = j, a.k.abort(), a.ib = m);
  a.Yb = b;
  a.Xb = 5;
  qh(a);
  rh(a)
}
function qh(a) {
  a.xd || (a.xd = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
r.abort = function(a) {
  this.k && this.Ga && (R(this.a, oh(this, "Aborting")), this.Ga = m, this.ib = j, this.k.abort(), this.ib = m, this.Xb = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), rh(this))
};
r.d = function() {
  this.k && (this.Ga && (this.Ga = m, this.ib = j, this.k.abort(), this.ib = m), rh(this, j));
  mh.f.d.call(this)
};
r.xf = function() {
  !this.Jd && !this.Fc && !this.ib ? this.Qg() : sh(this)
};
r.Qg = function() {
  sh(this)
};
function sh(a) {
  if(a.Ga && "undefined" != typeof ca) {
    if(a.gd[1] && 4 == a.Na() && 2 == th(a)) {
      R(a.a, oh(a, "Local request error detected and ignored"))
    }else {
      if(a.Fc && 4 == a.Na()) {
        Cc.setTimeout(x(a.xf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.Na()) {
          R(a.a, oh(a, "Request complete"));
          a.Ga = m;
          try {
            var b = th(a), c, d;
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
              var f;
              if(f = 0 === b) {
                var g = String(a.Kc).match(ef)[1] || k;
                if(!g && self.location) {
                  var i = self.location.protocol, g = i.substr(0, i.length - 1)
                }
                f = !nh.test(g ? g.toLowerCase() : "")
              }
              c = f
            }
            if(c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success")
            }else {
              a.Xb = 6;
              var l;
              try {
                l = 2 < a.Na() ? a.k.statusText : ""
              }catch(n) {
                R(a.a, "Can not get status: " + n.message), l = ""
              }
              a.Yb = l + " [" + th(a) + "]";
              qh(a)
            }
          }finally {
            rh(a)
          }
        }
      }
    }
  }
}
function rh(a, b) {
  if(a.k) {
    var c = a.k, d = a.gd[0] ? ea : k;
    a.k = k;
    a.gd = k;
    a.pb && (Cc.clearTimeout(a.pb), a.pb = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(f) {
      pe(a.a, "Problem encountered resetting onreadystatechange: " + f.message)
    }
  }
}
r.Ld = function() {
  return!!this.k
};
r.Na = function() {
  return this.k ? this.k.readyState : 0
};
function th(a) {
  try {
    return 2 < a.Na() ? a.k.status : -1
  }catch(b) {
    return Q(a.a, "Can not get status: " + b.message), -1
  }
}
r.getResponseHeader = function(a) {
  return this.k && 4 == this.Na() ? this.k.getResponseHeader(a) : h
};
function oh(a, b) {
  return b + " [" + a.kf + " " + a.Kc + " " + th(a) + "]"
}
;var uh = !(H || J && !K("420+"));
function vh(a, b) {
  this.dd = a;
  this.na = b
}
y(vh, L);
r = vh.prototype;
r.q = k;
r.Sa = -1;
r.Ve = m;
r.af = "Content-Length Server Date Expires Keep-Alive Content-Type Transfer-Encoding Cache-Control".split(" ");
function wh(a) {
  var b = Hf(a.He), c = b[0], b = b[1], d = u.parent;
  d ? (d.__XHRMaster_onframes(a.na, c, b), 1 != b && a.g()) : a.g()
}
r.Fg = function() {
  wh(this);
  if(!this.ya) {
    var a = u.parent;
    a && a.__XHRMaster_oncomplete(this.na);
    this.g()
  }
};
r.Vg = function() {
  var a = u.parent;
  if(a) {
    this.Sa = this.q.Na();
    if(2 <= this.Sa && !this.Ve) {
      for(var b = new nb, c = this.af.length;c--;) {
        var d = this.af[c];
        try {
          b.set(d, this.q.k.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.R() && (this.Ve = j, a.__XHRMaster_ongotheaders(this.na, rb(b)), this.ya)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.na, this.Sa);
    uh && 3 == this.Sa && wh(this)
  }else {
    this.g()
  }
};
r.Qd = function(a, b, c) {
  this.q = new mh;
  M(this.q, "readystatechange", x(this.Vg, this));
  M(this.q, "complete", x(this.Fg, this));
  this.q.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.He = new Gf(this.q.k, 1048576)
};
r.d = function() {
  vh.f.d.call(this);
  delete this.He;
  this.q && this.q.g();
  delete this.dd.ec[this.na];
  delete this.dd
};
function xh() {
  L.call(this);
  this.ec = {}
}
y(xh, L);
xh.prototype.Kg = function(a, b, c, d) {
  var f = new vh(this, a);
  this.ec[a] = f;
  f.Qd(b, c, d)
};
xh.prototype.qg = function(a) {
  (a = this.ec[a]) && a.g()
};
xh.prototype.d = function() {
  xh.f.d.call(this);
  for(var a = wa(this.ec);a.length;) {
    a.pop().g()
  }
  delete this.ec
};
var yh = new xh;
u.__XHRSlave_makeRequest = x(yh.Kg, yh);
u.__XHRSlave_dispose = x(yh.qg, yh);
var zh = T("cw.net.demo");
function Ah() {
}
Ah.prototype.Se = function() {
  return Boolean(Number((new gf(document.location)).Z.get("httpStreaming", "0"))) ? 2 : 1
};
function Bh(a) {
  this.o = a
}
var Ch = /\s*;\s*/;
r = Bh.prototype;
r.isEnabled = function() {
  return navigator.cookieEnabled
};
r.set = function(a, b, c, d, f, g) {
  /[;=\s]/.test(a) && e(Error('Invalid cookie name "' + a + '"'));
  /[;\r\n]/.test(b) && e(Error('Invalid cookie value "' + b + '"'));
  v(c) || (c = -1);
  f = f ? ";domain=" + f : "";
  d = d ? ";path=" + d : "";
  g = g ? ";secure" : "";
  c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(ta() + 1E3 * c)).toUTCString();
  this.o.cookie = a + "=" + b + f + d + c + g
};
r.get = function(a, b) {
  for(var c = a + "=", d = (this.o.cookie || "").split(Ch), f = 0, g;g = d[f];f++) {
    if(0 == g.lastIndexOf(c, 0)) {
      return g.substr(c.length)
    }
    if(g == a) {
      return""
    }
  }
  return b
};
r.remove = function(a, b, c) {
  var d = this.ra(a);
  this.set(a, "", 0, b, c);
  return d
};
r.ta = function() {
  return Dh(this).keys
};
r.N = function() {
  return Dh(this).Zf
};
r.Oa = function() {
  return!this.o.cookie
};
r.R = function() {
  return!this.o.cookie ? 0 : (this.o.cookie || "").split(Ch).length
};
r.ra = function(a) {
  return v(this.get(a))
};
r.oc = function(a) {
  for(var b = Dh(this).Zf, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return j
    }
  }
  return m
};
r.clear = function() {
  for(var a = Dh(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b])
  }
};
function Dh(a) {
  a = (a.o.cookie || "").split(Ch);
  for(var b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), -1 == d ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{keys:b, Zf:c}
}
var Eh = new Bh(document);
Eh.bi = 3950;
function Fh() {
  this.Ef = ta()
}
var Gh = new Fh;
Fh.prototype.set = ba("Ef");
Fh.prototype.reset = function() {
  this.set(ta())
};
Fh.prototype.get = p("Ef");
function Hh(a) {
  this.Tg = a || "";
  this.dh = Gh
}
Hh.prototype.Nf = j;
Hh.prototype.ah = j;
Hh.prototype.$g = j;
Hh.prototype.Of = m;
function Ih(a) {
  return 10 > a ? "0" + a : String(a)
}
function Jh(a, b) {
  var c = (a.Tf - b) / 1E3, d = c.toFixed(3), f = 0;
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
function Kh(a) {
  Hh.call(this, a)
}
y(Kh, Hh);
Kh.prototype.Of = j;
function Lh(a) {
  this.Ug = x(this.cg, this);
  this.Pe = new Kh;
  this.gf = this.Pe.Nf = m;
  this.e = a;
  this.sg = this.e.ownerDocument || this.e.document;
  a = $c(this.e);
  var b = k;
  if(H) {
    a = b = a.o.createStyleSheet(), H ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a.innerHTML = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
  }else {
    var c = cd(a.o, "head", h, h)[0];
    c || (b = cd(a.o, "body", h, h)[0], c = a.h("head"), b.parentNode.insertBefore(c, b));
    var d = b = a.h("style");
    H ? d.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : d.innerHTML = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}";
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
Lh.prototype.cg = function(a) {
  var b = 100 >= this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight, c = this.sg.createElement("div");
  c.className = "logmsg";
  var d = this.Pe, f;
  switch(a.Cb.value) {
    case ge.value:
      f = "dbg-sh";
      break;
    case he.value:
      f = "dbg-sev";
      break;
    case ie.value:
      f = "dbg-w";
      break;
    case je.value:
      f = "dbg-i";
      break;
    default:
      f = "dbg-f"
  }
  var g = [];
  g.push(d.Tg, " ");
  if(d.Nf) {
    var i = new Date(a.Tf);
    g.push("[", Ih(i.getFullYear() - 2E3) + Ih(i.getMonth() + 1) + Ih(i.getDate()) + " " + Ih(i.getHours()) + ":" + Ih(i.getMinutes()) + ":" + Ih(i.getSeconds()) + "." + Ih(Math.floor(i.getMilliseconds() / 10)), "] ")
  }
  d.ah && g.push("[", Pa(Jh(a, d.dh.get())), "s] ");
  d.$g && g.push("[", Ja(a.Jg), "] ");
  g.push('<span class="', f, '">', Ia(Pa(Ja(a.sf))));
  d.Of && a.Ad && g.push("<br>", Ia(Pa(a.zd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  b && (this.e.scrollTop = this.e.scrollHeight)
};
Lh.prototype.clear = function() {
  this.e.innerHTML = ""
};
function Mh(a, b, c, d, f, g) {
  6 == arguments.length ? this.setTransform(a, b, c, d, f, g) : (0 != arguments.length && e(Error("Insufficient matrix parameters")), this.ea = this.ha = 1, this.Y = this.fa = this.ga = this.ia = 0)
}
r = Mh.prototype;
r.L = function() {
  return new Mh(this.ea, this.Y, this.fa, this.ha, this.ga, this.ia)
};
r.setTransform = function(a, b, c, d, f, g) {
  (!la(a) || !la(b) || !la(c) || !la(d) || !la(f) || !la(g)) && e(Error("Invalid transform parameters"));
  this.ea = a;
  this.Y = b;
  this.fa = c;
  this.ha = d;
  this.ga = f;
  this.ia = g;
  return this
};
r.scale = function(a, b) {
  this.ea *= a;
  this.Y *= a;
  this.fa *= b;
  this.ha *= b;
  return this
};
r.translate = function(a, b) {
  this.ga += a * this.ea + b * this.fa;
  this.ia += a * this.Y + b * this.ha;
  return this
};
r.rotate = function(a, b, c) {
  var d = new Mh, f = Math.cos(a);
  a = Math.sin(a);
  b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f);
  c = this.ea;
  d = this.fa;
  this.ea = b.ea * c + b.Y * d;
  this.fa = b.fa * c + b.ha * d;
  this.ga += b.ga * c + b.ia * d;
  c = this.Y;
  d = this.ha;
  this.Y = b.ea * c + b.Y * d;
  this.ha = b.fa * c + b.ha * d;
  this.ia += b.ga * c + b.ia * d;
  return this
};
r.toString = function() {
  return"matrix(" + [this.ea, this.Y, this.fa, this.ha, this.ga, this.ia].join() + ")"
};
r.V = function(a) {
  return this == a ? j : !a ? m : this.ea == a.ea && this.fa == a.fa && this.ga == a.ga && this.Y == a.Y && this.ha == a.ha && this.ia == a.ia
};
function Y(a, b) {
  L.call(this);
  this.e = a;
  this.ua = b;
  this.ud = m
}
y(Y, Ac);
r = Y.prototype;
r.ua = k;
r.e = k;
r.Vf = k;
r.b = p("e");
r.addEventListener = function(a, b, c, d) {
  M(this.e, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  sc(this.e, a, b, c, d)
};
r.d = function() {
  Y.f.d.call(this);
  wc(this.e)
};
function Z(a, b, c, d) {
  Y.call(this, a, b);
  this.re = c;
  this.ua.ee(this, c);
  this.fill = d;
  this.ua.de(this, d)
}
y(Z, Y);
Z.prototype.fill = k;
Z.prototype.re = k;
Z.prototype.xg = p("fill");
Z.prototype.zg = p("re");
function Nh(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
y(Nh, Z);
function Oh(a, b) {
  Y.call(this, a, b)
}
y(Oh, Y);
function Ph(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
y(Ph, Z);
function Qh(a, b) {
  Y.call(this, a, b)
}
y(Qh, Y);
function Rh(a, b) {
  Y.call(this, a, b)
}
y(Rh, Oh);
Rh.prototype.clear = function() {
  id(this.b())
};
Rh.prototype.$ = function(a, b) {
  Sh(this.b(), {width:a, height:b})
};
function Th(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
y(Th, Ph);
function Uh(a, b) {
  Y.call(this, a, b)
}
y(Uh, Qh);
Uh.prototype.$ = function(a, b) {
  Sh(this.b(), {width:a, height:b})
};
function Vh() {
}
;function Wh(a, b) {
  this.qa = a;
  this.Zb = b == k ? 1 : b
}
y(Wh, Vh);
function Xh() {
  this.rb = 1;
  this.qa = "black"
}
;function Yh() {
  this.B = [];
  this.c = [];
  this.pa = []
}
Yh.prototype.ub = k;
Yh.prototype.T = k;
Yh.prototype.Jb = j;
var Zh = [2, 2, 6, 6, 0];
r = Yh.prototype;
r.clear = function() {
  this.B.length = 0;
  this.c.length = 0;
  this.pa.length = 0;
  delete this.ub;
  delete this.T;
  delete this.Jb;
  return this
};
r.moveTo = function(a, b) {
  0 == this.B[this.B.length - 1] ? this.pa.length -= 2 : (this.B.push(0), this.c.push(1));
  this.pa.push(a, b);
  this.T = this.ub = [a, b];
  return this
};
r.lineTo = function(a) {
  var b = this.B[this.B.length - 1];
  b == k && e(Error("Path cannot start with lineTo"));
  1 != b && (this.B.push(1), this.c.push(0));
  for(b = 0;b < arguments.length;b += 2) {
    var c = arguments[b], d = arguments[b + 1];
    this.pa.push(c, d)
  }
  this.c[this.c.length - 1] += b / 2;
  this.T = [c, d];
  return this
};
r.Ge = function(a) {
  var b = this.B[this.B.length - 1];
  b == k && e(Error("Path cannot start with curve"));
  2 != b && (this.B.push(2), this.c.push(0));
  for(b = 0;b < arguments.length;b += 6) {
    var c = arguments[b + 4], d = arguments[b + 5];
    this.pa.push(arguments[b], arguments[b + 1], arguments[b + 2], arguments[b + 3], c, d)
  }
  this.c[this.c.length - 1] += b / 6;
  this.T = [c, d];
  return this
};
r.close = function() {
  var a = this.B[this.B.length - 1];
  a == k && e(Error("Path cannot start with close"));
  4 != a && (this.B.push(4), this.c.push(1), this.T = this.ub);
  return this
};
r.arcTo = function(a, b, c, d) {
  var f = this.T[0] - a * Math.cos(Zc(c)) + a * Math.cos(Zc(c + d)), g = this.T[1] - b * Math.sin(Zc(c)) + b * Math.sin(Zc(c + d));
  this.B.push(3);
  this.c.push(1);
  this.pa.push(a, b, c, d, f, g);
  this.Jb = m;
  this.T = [f, g];
  return this
};
r.eg = function(a, b, c, d) {
  var f = this.T[0] - a * Math.cos(Zc(c)), g = this.T[1] - b * Math.sin(Zc(c)), i = Zc(d);
  d = Math.ceil(2 * (Math.abs(i) / Math.PI));
  i /= d;
  c = Zc(c);
  for(var l = 0;l < d;l++) {
    var n = Math.cos(c), s = Math.sin(c), z = 4 / 3 * Math.sin(i / 2) / (1 + Math.cos(i / 2)), t = f + (n - z * s) * a, A = g + (s + z * n) * b;
    c += i;
    n = Math.cos(c);
    s = Math.sin(c);
    this.Ge(t, A, f + (n + z * s) * a, g + (s - z * n) * b, f + n * a, g + s * b)
  }
  return this
};
function $h(a, b) {
  for(var c = a.pa, d = 0, f = 0, g = a.B.length;f < g;f++) {
    var i = a.B[f], l = Zh[i] * a.c[f];
    b(i, c.slice(d, d + l));
    d += l
  }
}
r.L = function() {
  var a = new this.constructor;
  a.B = this.B.concat();
  a.c = this.c.concat();
  a.pa = this.pa.concat();
  a.ub = this.ub && this.ub.concat();
  a.T = this.T && this.T.concat();
  a.Jb = this.Jb;
  return a
};
var ai = {};
ai[0] = Yh.prototype.moveTo;
ai[1] = Yh.prototype.lineTo;
ai[4] = Yh.prototype.close;
ai[2] = Yh.prototype.Ge;
ai[3] = Yh.prototype.eg;
Yh.prototype.Oa = function() {
  return 0 == this.B.length
};
function bi(a, b, c, d, f) {
  Pd.call(this, f);
  this.width = a;
  this.height = b;
  this.la = c || k;
  this.Pb = d || k
}
y(bi, Pd);
r = bi.prototype;
r.F = k;
r.Ia = 0;
r.ab = 0;
r.Ue = function() {
  return this.W()
};
r.W = function() {
  return this.p ? Hd(this.b()) : la(this.width) && la(this.height) ? new N(this.width, this.height) : k
};
function ci(a) {
  var b = a.W();
  return b ? b.width / (a.la ? new N(a.la, a.Pb) : a.W()).width : 0
}
;function di(a, b, c, d, f) {
  bi.call(this, a, b, c, d, f);
  this.Je = {};
  this.ve = J && !K(526);
  this.gb = new Ld(this)
}
var ei;
y(di, bi);
function fi(a, b, c) {
  a = a.M.o.createElementNS("http://www.w3.org/2000/svg", b);
  c && Sh(a, c);
  return a
}
function Sh(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
r = di.prototype;
r.tb = function(a, b) {
  (b || this.F).b().appendChild(a.b())
};
r.de = function(a, b) {
  var c = a.b();
  b instanceof Wh ? (c.setAttribute("fill", b.qa), c.setAttribute("fill-opacity", b.Zb)) : c.setAttribute("fill", "none")
};
r.ee = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.qa);
    var d = b.rb;
    w(d) && -1 != d.indexOf("px") ? c.setAttribute("stroke-width", parseFloat(d) / ci(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
r.h = function() {
  var a = fi(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = fi(this, "g");
  this.wd = fi(this, "defs");
  this.F = new Rh(b, this);
  a.appendChild(this.wd);
  a.appendChild(b);
  this.e = a;
  if(this.la || this.Ia || this.ab) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.ve ? this.ed() : this.b().setAttribute("viewBox", this.Ia + " " + this.ab + " " + (this.la ? this.la + " " + this.Pb : ""))
  }
};
r.ed = function() {
  if(this.p && (this.la || this.Ia || !this.ab)) {
    var a = this.W();
    if(0 == a.width) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.Ia, c = -this.ab, d = a.width / this.la, a = a.height / this.Pb;
      this.F.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
r.$ = function(a, b) {
  Fd(this.b(), a, b)
};
r.W = function() {
  if(!I) {
    return this.p ? Hd(this.b()) : di.f.W.call(this)
  }
  var a = this.width, b = this.height, c = w(a) && -1 != a.indexOf("%"), d = w(b) && -1 != b.indexOf("%");
  if(!this.p && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = Hd(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Hd(f), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
r.clear = function() {
  this.F.clear();
  id(this.wd);
  this.Je = {}
};
r.qc = function(a, b, c, d, f, g, i) {
  a = fi(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new Th(a, this, f, g);
  this.tb(f, i);
  return f
};
r.drawImage = function(a, b, c, d, f, g) {
  a = fi(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new Uh(a, this);
  this.tb(f, g);
  return f
};
r.Q = function() {
  var a = this.W();
  di.f.Q.call(this);
  a || this.dispatchEvent("resize");
  if(this.ve) {
    var a = this.width, b = this.height;
    "string" == typeof a && (-1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%")) && P(this.gb, gi(), Dc, this.ed);
    this.ed()
  }
};
r.cb = function() {
  di.f.cb.call(this);
  this.ve && Nd(this.gb, gi(), Dc, this.ed)
};
r.d = function() {
  delete this.Je;
  delete this.wd;
  delete this.F;
  di.f.d.call(this)
};
function gi() {
  ei || (ei = new Bc(400), ei.start());
  return ei
}
;function hi() {
  return this.e = this.ua.M.b(this.S) || this.e
}
function ii(a, b) {
  this.S = a.id;
  Y.call(this, a, b)
}
y(ii, Oh);
ii.prototype.b = hi;
ii.prototype.clear = function() {
  id(this.b())
};
ii.prototype.$ = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  this.ua.F != this && (c.coordorigin = "0 0")
};
function ji(a, b, c, d, f, g, i, l) {
  this.S = a.id;
  Z.call(this, a, b, i, l);
  this.Ci = c;
  this.Di = d;
  this.Pi = f;
  this.Qi = g
}
y(ji, Ph);
ji.prototype.b = hi;
function ki(a, b) {
  this.S = a.id;
  Y.call(this, a, b)
}
y(ki, Qh);
ki.prototype.b = hi;
ki.prototype.$ = function(a, b) {
  var c = this.b().style;
  c.width = li(a) + "px";
  c.height = li(b) + "px"
};
function mi(a, b, c, d, f) {
  bi.call(this, a, b, c, d, f);
  this.gb = new Ld(this)
}
y(mi, bi);
var ni = document.documentMode && 8 <= document.documentMode;
function li(a) {
  return Math.round(100 * (parseFloat(a.toString()) - 0.5))
}
function $(a) {
  return Math.round(100 * parseFloat(a.toString()))
}
function oi(a, b) {
  var c = a.M.createElement("g_vml_:" + b);
  c.id = "goog_" + Ra++;
  return c
}
function pi(a) {
  ni && a.p && (a.b().innerHTML = a.b().innerHTML)
}
mi.prototype.tb = function(a, b) {
  (b || this.F).b().appendChild(a.b());
  pi(this)
};
mi.prototype.de = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    "fill" == f.tagName && c.removeChild(f)
  }
  b instanceof Wh ? "transparent" == b.qa ? c.filled = m : 1 != b.Zb ? (c.filled = j, d = oi(this, "fill"), d.opacity = Math.round(100 * b.Zb) + "%", d.color = b.qa, c.appendChild(d)) : (c.filled = j, c.fillcolor = b.qa) : c.filled = m;
  pi(this)
};
mi.prototype.ee = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = j;
    var d = b.rb, d = w(d) && -1 == d.indexOf("px") ? parseFloat(d) : d * ci(this), f = c.getElementsByTagName("stroke")[0];
    1 > d ? (f = f || oi(this, "stroke"), f.opacity = d, f.Ti = "1px", f.color = b.qa, c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.qa, c.strokeweight = d + "px")
  }else {
    c.stroked = m
  }
  pi(this)
};
function qi(a, b, c, d, f) {
  var g = a.style;
  g.position = "absolute";
  g.left = li(b) + "px";
  g.top = li(c) + "px";
  g.width = $(d) + "px";
  g.height = $(f) + "px";
  "shape" == a.tagName && (a.coordsize = $(d) + " " + $(f))
}
try {
  eval("document.namespaces")
}catch(ri) {
}
r = mi.prototype;
r.h = function() {
  var a = this.M.o;
  a.namespaces.g_vml_ || (ni ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}");
  var a = this.width, b = this.height, c = this.M.h("div", {style:"overflow:hidden;position:relative;width:" + (w(a) && Ga(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (w(b) && Ga(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = oi(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.la ? $(this.la) + " " + $(this.Pb) : $(a) + " " + $(b);
  d.coordorigin = v(this.Ia) ? $(this.Ia) + " " + $(this.ab) : "0 0";
  c.appendChild(d);
  this.F = new ii(d, this);
  M(c, "resize", x(this.Fd, this))
};
r.Fd = function() {
  var a = Hd(this.b()), b = this.F.b().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.b();a && a.currentStyle && "none" != a.currentStyle.display;) {
      a = a.parentNode
    }
    a && a.currentStyle && P(this.gb, a, "propertychange", this.Fd)
  }
  this.dispatchEvent("resize")
};
r.$ = function(a, b) {
  Fd(this.b(), a, b)
};
r.W = function() {
  var a = this.b();
  return new N(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
r.clear = function() {
  this.F.clear()
};
r.qc = function(a, b, c, d, f, g, i) {
  var l = oi(this, "oval");
  qi(l, a - c, b - d, 2 * c, 2 * d);
  a = new ji(l, this, a, b, c, d, f, g);
  this.tb(a, i);
  return a
};
r.drawImage = function(a, b, c, d, f, g) {
  var i = oi(this, "image");
  qi(i, a, b, c, d);
  ni ? i.src = f : i.setAttribute("src", f);
  a = new ki(i, this);
  this.tb(a, g);
  return a
};
r.Q = function() {
  mi.f.Q.call(this);
  this.Fd();
  pi(this)
};
r.d = function() {
  this.F = k;
  mi.f.d.call(this)
};
function si(a) {
  Y.call(this, k, a);
  this.P = []
}
y(si, Oh);
si.prototype.clear = function() {
  this.P.length && (this.P.length = 0, ti(this.ua))
};
si.prototype.$ = aa();
si.prototype.appendChild = function(a) {
  this.P.push(a)
};
si.prototype.za = function() {
  for(var a = 0, b = this.P.length;a < b;a++) {
    ui(this.ua, this.P[a])
  }
};
function vi(a, b, c, d, f, g, i, l) {
  Z.call(this, a, b, i, l);
  this.lg = c;
  this.mg = d;
  this.If = f;
  this.Jf = g;
  this.K = new Yh;
  this.K.clear();
  this.K.moveTo(this.lg + this.If * Math.cos(Zc(0)), this.mg + this.Jf * Math.sin(Zc(0)));
  this.K.arcTo(this.If, this.Jf, 0, 360);
  this.K.close();
  this.Rg = new wi(k, b, this.K, i, l)
}
y(vi, Ph);
vi.prototype.za = function(a) {
  this.Rg.za(a)
};
function wi(a, b, c, d, f) {
  Z.call(this, a, b, d, f);
  this.Hb(c)
}
y(wi, Nh);
wi.prototype.Qb = m;
wi.prototype.Hb = function(a) {
  if(!a.Jb) {
    if(a.Jb) {
      a = a.L()
    }else {
      var b = new Yh;
      $h(a, function(a, d) {
        ai[a].apply(b, d)
      });
      a = b
    }
  }
  this.K = a;
  this.Qb && ti(this.ua)
};
wi.prototype.za = function(a) {
  this.Qb = j;
  a.beginPath();
  $h(this.K, function(b, c) {
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
function xi(a, b, c, d, f, g, i) {
  Y.call(this, a, b);
  this.th = c;
  this.vh = d;
  this.xe = f;
  this.Ed = g;
  this.bh = i
}
y(xi, Qh);
xi.prototype.Qb = m;
xi.prototype.$ = function(a, b) {
  this.xe = a;
  this.Ed = b;
  this.Qb && ti(this.ua)
};
xi.prototype.za = function(a) {
  this.df ? (this.xe && this.Ed && a.drawImage(this.df, this.th, this.vh, this.xe, this.Ed), this.Qb = j) : (a = new Image, a.onload = x(this.Bg, this, a), a.src = this.bh)
};
xi.prototype.Bg = function(a) {
  this.df = a;
  ti(this.ua)
};
function yi(a, b, c, d, f) {
  bi.call(this, a, b, c, d, f)
}
y(yi, bi);
r = yi.prototype;
r.de = function() {
  ti(this)
};
r.ee = function() {
  ti(this)
};
function zi(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.Vf ? b.Vf.L() : new Mh, f = d.ga, g = d.ia;
  (f || g) && c.translate(f, g);
  (d = d.Y) && c.rotate(Math.asin(d))
}
r.h = function() {
  var a = this.M.h("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Ob = this.M.h("canvas");
  a.appendChild(this.Ob);
  this.Ig = this.F = new si(this);
  this.Xg = 0;
  Ai(this)
};
r.getContext = function() {
  this.b() || this.h();
  this.vb || (this.vb = this.Ob.getContext("2d"), this.vb.save());
  return this.vb
};
r.$ = function(a, b) {
  this.width = a;
  this.height = b;
  Ai(this);
  ti(this)
};
r.W = function() {
  var a = this.width, b = this.height, c = w(a) && -1 != a.indexOf("%"), d = w(b) && -1 != b.indexOf("%");
  if(!this.p && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = Hd(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Hd(f), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
function Ai(a) {
  Fd(a.b(), a.width, a.height);
  var b = a.W();
  b && (Fd(a.Ob, b.width, b.height), a.Ob.width = b.width, a.Ob.height = b.height, a.vb = k)
}
r.reset = function() {
  var a = this.getContext();
  a.restore();
  var b = this.W();
  b.width && b.height && a.clearRect(0, 0, b.width, b.height);
  a.save()
};
r.clear = function() {
  this.reset();
  this.F.clear();
  for(var a = this.b();1 < a.childNodes.length;) {
    a.removeChild(a.lastChild)
  }
};
function ti(a) {
  if(a.Oi) {
    a.Ni = j
  }else {
    if(a.p) {
      a.reset();
      if(a.la) {
        var b = a.W();
        a.getContext().scale(b.width / a.la, b.height / a.Pb)
      }
      (a.Ia || a.ab) && a.getContext().translate(-a.Ia, -a.ab);
      zi(a, a.F);
      a.F.za(a.vb);
      a.getContext().restore()
    }
  }
}
function ui(a, b) {
  var c = a.getContext();
  zi(a, b);
  if(!b.xg || !b.zg) {
    b.za(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof Wh) {
        0 != d.Zb && (c.globalAlpha = d.Zb, c.fillStyle = d.qa, b.za(c), c.fill(), c.globalAlpha = 1)
      }else {
        var f = c.createLinearGradient(d.Gi(), d.Ii(), d.Hi(), d.Ji());
        f.addColorStop(0, d.Ei());
        f.addColorStop(1, d.Fi());
        c.fillStyle = f;
        b.za(c);
        c.fill()
      }
    }
    if(d = b.re) {
      b.za(c), c.strokeStyle = d.qa, d = d.rb, w(d) && -1 != d.indexOf("px") && (d = parseFloat(d) / ci(a)), c.lineWidth = d, c.stroke()
    }
  }
  a.getContext().restore()
}
r.tb = function(a, b) {
  this.append(a, b)
};
r.append = function(a, b) {
  b = b || this.F;
  b.appendChild(a);
  this.p && (!this.Xg && !(b != this.F && b != this.Ig)) && ui(this, a)
};
r.qc = function(a, b, c, d, f, g, i) {
  a = new vi(k, this, a, b, c, d, f, g);
  this.append(a, i);
  return a
};
r.drawImage = function(a, b, c, d, f, g) {
  a = new xi(k, this, a, b, c, d, f);
  this.append(a, g);
  return a
};
r.d = function() {
  this.vb = k;
  yi.f.d.call(this)
};
r.Q = function() {
  var a = this.W();
  yi.f.Q.call(this);
  a || (Ai(this), this.dispatchEvent("resize"));
  ti(this)
};
function Bi(a) {
  L.call(this);
  this.w = [];
  Ci(this, a)
}
y(Bi, Ac);
r = Bi.prototype;
r.Xa = k;
r.ce = k;
function Ci(a, b) {
  b && (E(b, function(a) {
    this.dc(a, m)
  }, a), eb(a.w, b))
}
r.Dd = p("Xa");
r.Te = function() {
  return db(this.w)
};
r.Zc = function(a) {
  a != this.Xa && (this.dc(this.Xa, m), this.Xa = a, this.dc(a, j));
  this.dispatchEvent("select")
};
r.Cd = function() {
  return this.Xa ? Va(this.w, this.Xa) : -1
};
r.ie = function(a) {
  this.Zc(this.w[a] || k)
};
r.clear = function() {
  ab(this.w);
  this.Xa = k
};
r.d = function() {
  Bi.f.d.call(this);
  delete this.w;
  this.Xa = k
};
r.dc = function(a, b) {
  a && ("function" == typeof this.ce ? this.ce(a, b) : "function" == typeof a.he && a.he(b))
};
function Di() {
}
y(Di, sg);
fa(Di);
var Ei = 0;
Di.prototype.h = function(a) {
  var b = ug(this, a);
  return a.Ba().h("div", b ? b.join(" ") : k, Fi(this, a.ba, a.Ue(), a.Ba()))
};
function Fi(a, b, c, d) {
  for(var f = [], g = 0, i = 0;g < c.height;g++) {
    for(var l = [], n = 0;n < c.width;n++) {
      var s = b && b[i++];
      l.push(Gi(a, s, d))
    }
    f.push(d.h("tr", a.t() + "-row", l))
  }
  return a.Fe(f, d)
}
Di.prototype.Fe = function(a, b) {
  var c = b.h("table", this.t() + "-table", b.h("tbody", this.t() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  c.setAttribute("role", "grid");
  return c
};
function Gi(a, b, c) {
  a = c.h("td", {"class":a.t() + "-cell", id:a.t() + "-cell-" + Ei++}, b);
  a.setAttribute("role", "gridcell");
  return a
}
Di.prototype.Vc = function(a, b) {
  if(a) {
    var c = cd(document, "tbody", this.t() + "-body", a)[0];
    if(c) {
      var d = 0;
      E(c.rows, function(a) {
        E(a.cells, function(a) {
          id(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = $c(a), i = c.rows[0].cells.length;d < b.length;) {
          var l = b[d++];
          f.push(Gi(this, l, g));
          f.length == i && (l = g.h("tr", this.t() + "-row", f), c.appendChild(l), f.length = 0)
        }
        if(0 < f.length) {
          for(;f.length < i;) {
            f.push(Gi(this, "", g))
          }
          l = g.h("tr", this.t() + "-row", f);
          c.appendChild(l)
        }
      }
    }
    Kd(a, j, I)
  }
};
function Hi(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && $a(Sc(c), a.t() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function Ii(a, b, c, d) {
  c && (c = c.parentNode, a = a.t() + "-cell-hover", d ? Tc(c, a) : Uc(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id))
}
Di.prototype.t = q("goog-palette");
function Ji(a, b, c) {
  W.call(this, a, b || Di.Ma(), c)
}
y(Ji, W);
r = Ji.prototype;
r.n = k;
r.hb = -1;
r.I = k;
r.d = function() {
  Ji.f.d.call(this);
  this.I && (this.I.g(), this.I = k);
  this.n = k
};
r.Wc = function(a) {
  Ji.f.Wc.call(this, a);
  Ki(this);
  this.I ? (this.I.clear(), Ci(this.I, a)) : (this.I = new Bi(a), a = x(this.dc, this), this.I.ce = a, P(Td(this), this.I, "select", this.Eg));
  this.hb = -1
};
r.Qe = q("");
r.Cc = function(a) {
  Ji.f.Cc.call(this, a);
  var b = Hi(this.l, this, a.target);
  if((!b || !a.relatedTarget || !jd(b, a.relatedTarget)) && b != Li(this)) {
    a = this.ba, Mi(this, a ? Va(a, b) : -1)
  }
};
r.Bc = function(a) {
  Ji.f.Bc.call(this, a);
  var b = Hi(this.l, this, a.target);
  (!b || !a.relatedTarget || !jd(b, a.relatedTarget)) && b == Li(this) && Ii(this.l, this, b, m)
};
r.Ac = function(a) {
  Ji.f.Ac.call(this, a);
  if(this.Ld() && (a = Hi(this.l, this, a.target), a != Li(this))) {
    var b = this.ba;
    Mi(this, b ? Va(b, a) : -1)
  }
};
r.lb = function() {
  var a = Li(this);
  return a ? (this.Zc(a), this.dispatchEvent("action")) : m
};
r.Ze = function(a) {
  var b = this.ba, b = b ? b.length : 0, c = this.n.width;
  if(0 == b || !this.isEnabled()) {
    return m
  }
  if(13 == a.keyCode || 32 == a.keyCode) {
    return this.lb(a)
  }
  if(36 == a.keyCode) {
    return Mi(this, 0), j
  }
  if(35 == a.keyCode) {
    return Mi(this, b - 1), j
  }
  var d = 0 > this.hb ? this.Cd() : this.hb;
  switch(a.keyCode) {
    case 37:
      -1 == d && (d = b);
      if(0 < d) {
        return Mi(this, d - 1), a.preventDefault(), j
      }
      break;
    case 39:
      if(d < b - 1) {
        return Mi(this, d + 1), a.preventDefault(), j
      }
      break;
    case 38:
      -1 == d && (d = b + c - 1);
      if(d >= c) {
        return Mi(this, d - c), a.preventDefault(), j
      }
      break;
    case 40:
      if(-1 == d && (d = -c), d < b - c) {
        return Mi(this, d + c), a.preventDefault(), j
      }
  }
  return m
};
r.Eg = aa();
r.Ue = p("n");
r.$ = function(a, b) {
  this.b() && e(Error("Component already rendered"));
  this.n = la(a) ? new N(a, b) : a;
  Ki(this)
};
function Li(a) {
  var b = a.ba;
  return b && b[a.hb]
}
function Mi(a, b) {
  b != a.hb && (Ni(a, a.hb, m), a.hb = b, Ni(a, b, j))
}
r.Cd = function() {
  return this.I ? this.I.Cd() : -1
};
r.Dd = function() {
  return this.I ? this.I.Dd() : k
};
r.ie = function(a) {
  this.I && this.I.ie(a)
};
r.Zc = function(a) {
  this.I && this.I.Zc(a)
};
function Ni(a, b, c) {
  if(a.b()) {
    var d = a.ba;
    d && (0 <= b && b < d.length) && Ii(a.l, a, d[b], c)
  }
}
r.dc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.l.t() + "-cell-selected";
    b ? Tc(c, d) : Uc(c, d)
  }
};
function Ki(a) {
  var b = a.ba;
  if(b) {
    if(a.n && a.n.width) {
      if(b = Math.ceil(b.length / a.n.width), !la(a.n.height) || a.n.height < b) {
        a.n.height = b
      }
    }else {
      b = Math.ceil(Math.sqrt(b.length)), a.n = new N(b, b)
    }
  }else {
    a.n = new N(0, 0)
  }
}
;function Oi(a, b, c) {
  this.nc = a || [];
  Ji.call(this, k, b || Di.Ma(), c);
  this.nc = this.nc;
  this.Mc = k;
  this.Vc(Xa(this.nc, function(a) {
    var b = this.Ba().h("div", {"class":this.l.t() + "-colorswatch", style:"background-color:" + a});
    b.title = "#" == a.charAt(0) ? "RGB (" + eh(a).join(", ") + ")" : a;
    return b
  }, this))
}
y(Oi, Ji);
Oi.prototype.Mc = k;
function Pi(a) {
  if(a) {
    try {
      return Zg(a).Ec
    }catch(b) {
    }
  }
  return k
}
;function Qi(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
;var Ri, Si, Ti, Ui, Vi, Wi = T("whiteboard.logger");
window.onerror = function(a, b, c) {
  pe(Wi, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Xi() {
}
Xi.prototype.Qf = function(a) {
  this.C = a;
  dg(this.C, "subprotocol:whiteboard")
};
Xi.prototype.Pf = function(a, b) {
  Wi.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  Yi = k
};
Xi.prototype.Rf = function(a) {
  a = Qi(a);
  var b = a[0], c = a[1];
  "Point" == b ? Ri.qc(c.x, c.y, 5, 5, new Xh, new Wh(c.color), h) : "ClearBoard" == b ? (Ri.g(), Zi()) : Q(Wi, "Strange message from server: " + G(a))
};
Xi.prototype.reset = function(a) {
  Wi.info("resetting with reason: " + a);
  this.C.reset(a)
};
var Yi = k, $i = new Pc(u.window);
function aj() {
  Yi && (Yi.reset("idle timeout fired"), Yi = k)
}
var bj = k;
function cj() {
  bj != k && $i.H.clearTimeout(bj);
  Yi && (bj = $i.H.setTimeout(aj, 2592E5))
}
M(window, ["click", "focus", "keydown", "keypress"], cj, j);
function dj() {
  Ri.g();
  Zi();
  var a = Yi;
  Wi.info("Telling server to clear the board.");
  dg(a.C, Aa(["ClearBoard", k]))
}
function ej(a) {
  var b = new jc(a);
  a = b.offsetX;
  b = b.offsetY;
  Ri.qc(a, b, 5, 5, new Xh, new Wh(Si), h);
  var c = Yi, d = Si;
  Wi.info("Telling server about circle at: " + a + ", " + b + " with color " + d);
  dg(c.C, Aa(["Point", {x:a, y:b, color:d}]))
}
function Zi() {
  var a;
  a = H && !K("9") ? new mi(800, 600, h, h, h) : J && (!K("420") || Lb) ? new yi(800, 600, h, h, h) : new di(800, 600, h, h, h);
  a.h();
  Ti = O("drawArea");
  Ud(a, Ti);
  Ri = a
}
var fj = "#E06666";
function gj(a) {
  var b;
  (a = a.target.Dd()) ? (a = a.style[Sa("background-color")] || "", b = Pi(a)) : b = k;
  b || (b = fj);
  Si = b;
  Eh.set("whiteboard_defaultColor", b);
  a = O("whiteboard-cp-value");
  w("background-color") ? Dd(a, b, "background-color") : va("background-color", sa(Dd, a));
  a = O("whiteboard-cp-value");
  a.title = b;
  b = Zg(b).Ec;
  ld(a, b);
  b = eh(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = ch(b[0], b[1], b[2]);
  w("color") ? Dd(a, b, "color") : va("color", sa(Dd, a))
}
function hj() {
  Ui = (new gf(document.location)).Z;
  if(Vi = Boolean(Number(Ui.get("logging", "0")))) {
    te().Yc(ne);
    var a = new Lh(document.getElementById("log"));
    if(j != a.gf) {
      var b = te(), c = a.Ug;
      b.Vb || (b.Vb = []);
      b.Vb.push(c);
      a.gf = j
    }
  }else {
    te().Yc(fe)
  }
  Wi.info("Logger works.");
  (a = Eh.get("whiteboard_defaultColor")) && (fj = a);
  Si = fj;
  b = O("whiteboard-controls-left");
  a = O("whiteboard-controls-right");
  c = ed("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  hd(b, c);
  c = ed("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  hd(b, c);
  b = new Oi("#EA9999 #F9CB9C #FFE599 #B6D7A8 #A2C4C9 #9FC5E8 #B4A7D6 #D5A6BD #E06666 #F6B26B #FFD966 #93C47D #76A5AF #6FA8DC #8E7CC3 #C27BA0 #CC0000 #E69138 #F1C232 #6AA84F #45818E #3D85C6 #674EA7 #A64D79".split(" "));
  b.$(8);
  Ud(b, O("whiteboard-cp"));
  M(b, "action", gj);
  c = Pi(fj);
  b.Mc || (b.Mc = Xa(b.nc, function(a) {
    return Pi(a)
  }));
  b.ie(c ? Va(b.Mc, c) : -1);
  gj({target:b});
  b = new Xg("Clear board");
  Kg(b, "clear-board-button");
  Ud(b, a);
  M(b, "action", dj);
  a = O("drawAreaOverlay");
  Kd(a, j);
  M(a, "click", ej, m);
  Zi();
  a = new Ah;
  Yi = new Xi;
  cj();
  c = (new gf(document.location)).Z;
  b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !u.__demo_shared_domain) {
    Q(zh, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new gf(document.location);
  b ? b = new Nf("/_minerva/", c.Ja, u.__demo_mainSocketPort) : (d ? (b = u.__demo_shared_domain, w(b) || e(Error("domain was " + G(b) + "; expected a string.")), c = c.L(), kf(c, "_____random_____." + b)) : c = c.L(), c.Hb("/_minerva/"), mf(c, "", h), b = new Pf(c.toString().replace("_____random_____", "%random%")));
  a = new Wf(b, a, $i);
  b = Yi;
  v(b.Qf) || e(Error("Protocol is missing required method streamStarted"));
  v(b.Pf) || e(Error("Protocol is missing required method streamReset"));
  v(b.Rf) || e(Error("Protocol is missing required method stringReceived"));
  a.Wd = x(b.Qf, b);
  a.onreset = x(b.Pf, b);
  a.Xd = x(b.Rf, b);
  a.Yd = v(b.lh) ? x(b.lh, b) : k;
  a.Zd = v(b.mh) ? x(b.mh, b) : k;
  a.start()
}
var ij = ["__whiteboard_init"], jj = u;
!(ij[0] in jj) && jj.execScript && jj.execScript("var " + ij[0]);
for(var kj;ij.length && (kj = ij.shift());) {
  !ij.length && v(hj) ? jj[kj] = hj : jj = jj[kj] ? jj[kj] : jj[kj] = {}
}
;
})();
