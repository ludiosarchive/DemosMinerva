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
  a = "" + a;
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
function ya(a) {
  var b = [];
  za(new Aa, a, b);
  return b.join("")
}
function Aa() {
  this.Sc = h
}
function za(a, b, c) {
  switch(typeof b) {
    case "string":
      Ba(b, c);
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
          c.push(f), f = b[g], za(a, a.Sc ? a.Sc.call(b, "" + g, f) : f, c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), Ba(g, c), c.push(":"), za(a, a.Sc ? a.Sc.call(b, g, f) : f, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var Ca = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Da = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Ba(a, b) {
  b.push('"', a.replace(Da, function(a) {
    if(a in Ca) {
      return Ca[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
    return Ca[a] = f + b.toString(16)
  }), '"')
}
;function D(a) {
  this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
C(D, Error);
D.prototype.name = "CustomError";
function Ea(a) {
  var b = a.length - 1;
  return 0 <= b && a.indexOf("%", b) == b
}
function Fa(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = ("" + arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
var Ga = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function Ha(a) {
  a = "" + a;
  return!Ga.test(a) ? encodeURIComponent(a) : a
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
var Ra = 2147483648 * Math.random() | 0, Sa = {};
function Ta(a) {
  return Sa[a] || (Sa[a] = ("" + a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
}
;function Ua(a, b) {
  b.unshift(a);
  D.call(this, Fa.apply(k, b));
  b.shift()
}
C(Ua, D);
Ua.prototype.name = "AssertionError";
function Va(a, b) {
  e(new Ua("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var E = Array.prototype, Wa = E.indexOf ? function(a, b, c) {
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
}, Xa = E.filter ? function(a, b, c) {
  return E.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = [], g = 0, i = w(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in i) {
      var o = i[l];
      b.call(c, o, l, a) && (f[g++] = o)
    }
  }
  return f
}, Ya = E.map ? function(a, b, c) {
  return E.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = w(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in g && (f[i] = b.call(c, g[i], i, a))
  }
  return f
}, Za = E.some ? function(a, b, c) {
  return E.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return j
    }
  }
  return m
}, $a = E.every ? function(a, b, c) {
  return E.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && !b.call(c, f[g], g, a)) {
      return m
    }
  }
  return j
};
function ab(a, b) {
  return 0 <= Wa(a, b)
}
function bb(a) {
  if(!v(a)) {
    for(var b = a.length - 1;0 <= b;b--) {
      delete a[b]
    }
  }
  a.length = 0
}
function cb(a, b) {
  var c = Wa(a, b);
  0 <= c && E.splice.call(a, c, 1)
}
function db(a) {
  return E.concat.apply(E, arguments)
}
function eb(a) {
  if(v(a)) {
    return db(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
}
function fb(a, b) {
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
function gb(a, b, c) {
  return 2 >= arguments.length ? E.slice.call(a, b) : E.slice.call(a, b, c)
}
function hb(a, b) {
  E.sort.call(a, b || ib)
}
function ib(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function jb(a, b, c) {
  var d = Wa(c, a);
  if(-1 != d) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = fa(a);
    if("boolean" == d || "number" == d || "null" == d || "undefined" == d) {
      b.push("" + a)
    }else {
      if("string" == d) {
        Ba(a, b)
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
                  b.push(f), jb(a[g], b, c), f = ", "
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
                      g = d[i], Object.prototype.hasOwnProperty.call(a, g) && (l = a[g], b.push(f), Ba(g, b), b.push(": "), jb(l, b, c), f = ", ")
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
  jb(a, b, c)
}
function H(a) {
  var b = [];
  G(a, b, h);
  return b.join("")
}
;function kb(a) {
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
function lb(a) {
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
function mb(a) {
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
function nb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ga(a) || w(a)) {
      F(a, b, c)
    }else {
      for(var d = mb(a), f = lb(a), g = f.length, i = 0;i < g;i++) {
        b.call(c, f[i], d && d[i], a)
      }
    }
  }
}
function ob(a, b) {
  if("function" == typeof a.every) {
    return a.every(b, h)
  }
  if(ga(a) || w(a)) {
    return $a(a, b, h)
  }
  for(var c = mb(a), d = lb(a), f = d.length, g = 0;g < f;g++) {
    if(!b.call(h, d[g], c && c[g], a)) {
      return m
    }
  }
  return j
}
;function pb(a, b) {
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
q = pb.prototype;
q.d = 0;
q.Q = n("d");
q.X = function() {
  qb(this);
  for(var a = [], b = 0;b < this.m.length;b++) {
    a.push(this.u[this.m[b]])
  }
  return a
};
q.ua = function() {
  qb(this);
  return this.m.concat()
};
q.aa = function(a) {
  return rb(this.u, a)
};
q.rc = function(a) {
  for(var b = 0;b < this.m.length;b++) {
    var c = this.m[b];
    if(rb(this.u, c) && this.u[c] == a) {
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
  var c = b || sb;
  qb(this);
  for(var d, f = 0;d = this.m[f];f++) {
    if(!c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function sb(a, b) {
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
  return rb(this.u, a) ? (delete this.u[a], this.d--, this.m.length > 2 * this.d && qb(this), j) : m
};
function qb(a) {
  if(a.d != a.m.length) {
    for(var b = 0, c = 0;b < a.m.length;) {
      var d = a.m[b];
      rb(a.u, d) && (a.m[c++] = d);
      b++
    }
    a.m.length = c
  }
  if(a.d != a.m.length) {
    for(var f = {}, c = b = 0;b < a.m.length;) {
      d = a.m[b], rb(f, d) || (a.m[c++] = d, f[d] = 1), b++
    }
    a.m.length = c
  }
}
q.get = function(a, b) {
  return rb(this.u, a) ? this.u[a] : b
};
q.set = function(a, b) {
  rb(this.u, a) || (this.d++, this.m.push(a));
  this.u[a] = b
};
q.hd = function(a) {
  var b;
  a instanceof pb ? (b = a.ua(), a = a.X()) : (b = ua(a), a = ta(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
q.L = function() {
  return new pb(this)
};
function tb(a) {
  qb(a);
  for(var b = {}, c = 0;c < a.m.length;c++) {
    var d = a.m[c];
    b[d] = a.u[d]
  }
  return b
}
function rb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function ub(a) {
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
;var vb, wb;
function xb(a, b) {
  this.qb = a;
  this.lb = b
}
xb.prototype.V = function(a) {
  return a instanceof xb && this.qb == a.qb && this.lb.join(",") == a.lb
};
xb.prototype.N = function(a, b) {
  a.push("new SACK(", "" + this.qb, ", ");
  G(this.lb, a, b);
  a.push(")")
};
function yb() {
  this.w = new pb
}
q = yb.prototype;
q.$a = -1;
q.n = 0;
q.append = function(a) {
  var b = ub(a);
  this.w.set(this.$a + 1, [a, b]);
  this.$a += 1;
  this.n += b
};
q.N = function(a) {
  a.push("<Queue with ", "" + this.w.Q(), " item(s), counter=#", "" + this.$a, ", size=", "" + this.n, ">")
};
function zb(a) {
  a = a.w.ua();
  hb(a);
  return a
}
q.Re = function(a) {
  for(var b = zb(this), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    (a == k || f >= a) && c.push([f, this.w.get(f)[0]])
  }
  return c
};
function Ab() {
  this.Ya = new pb
}
Ab.prototype.hb = -1;
Ab.prototype.n = 0;
function Bb(a) {
  var b = a.Ya.ua();
  hb(b);
  return new xb(a.hb, b)
}
var Cb = {};
function Db() {
  return j
}
;var Eb, Fb, Gb, Hb, Ib;
function Jb() {
  return s.navigator ? s.navigator.userAgent : k
}
Ib = Hb = Gb = Fb = Eb = m;
var Kb;
if(Kb = Jb()) {
  var Lb = s.navigator;
  Eb = 0 == Kb.indexOf("Opera");
  Fb = !Eb && -1 != Kb.indexOf("MSIE");
  Hb = (Gb = !Eb && -1 != Kb.indexOf("WebKit")) && -1 != Kb.indexOf("Mobile");
  Ib = !Eb && !Gb && "Gecko" == Lb.product
}
var Mb = Eb, I = Fb, Nb = Ib, J = Gb, Ob = Hb, Pb = s.navigator, Qb = -1 != (Pb && Pb.platform || "").indexOf("Mac"), Rb;
a: {
  var Sb = "", Tb;
  if(Mb && s.opera) {
    var Ub = s.opera.version, Sb = "function" == typeof Ub ? Ub() : Ub
  }else {
    if(Nb ? Tb = /rv\:([^\);]+)(\)|;)/ : I ? Tb = /MSIE\s+([^\);]+)(\)|;)/ : J && (Tb = /WebKit\/(\S+)/), Tb) {
      var Vb = Tb.exec(Jb()), Sb = Vb ? Vb[1] : ""
    }
  }
  if(I) {
    var Wb, Xb = s.document;
    Wb = Xb ? Xb.documentMode : h;
    if(Wb > parseFloat(Sb)) {
      Rb = "" + Wb;
      break a
    }
  }
  Rb = Sb
}
var Yb = {};
function K(a) {
  return Yb[a] || (Yb[a] = 0 <= Qa(Rb, a))
}
var Zb = {};
function $b() {
  return Zb[9] || (Zb[9] = I && !!document.documentMode && 9 <= document.documentMode)
}
;function ac() {
}
var bc = 0;
q = ac.prototype;
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
  this.key = ++bc;
  this.kb = m
};
q.handleEvent = function(a) {
  return this.ff ? this.Cb.call(this.Ec || this.src, a) : this.Cb.handleEvent.call(this.Cb, a)
};
var cc = !I || $b(), dc = !I || $b(), ec = I && !K("8");
!J || K("528");
Nb && K("1.9b") || I && K("8") || Mb && K("9.5") || J && K("528");
Nb && !K("8") || I && K("9");
var fc = {sh:"click", xh:"dblclick", Sh:"mousedown", Wh:"mouseup", Vh:"mouseover", Uh:"mouseout", Th:"mousemove", fi:"selectstart", Mh:"keypress", Lh:"keydown", Nh:"keyup", qh:"blur", Fh:"focus", yh:"deactivate", Gh:I ? "focusin" : "DOMFocusIn", Hh:I ? "focusout" : "DOMFocusOut", rh:"change", ei:"select", gi:"submit", Kh:"input", ai:"propertychange", Ch:"dragstart", zh:"dragenter", Bh:"dragover", Ah:"dragleave", Dh:"drop", ki:"touchstart", ji:"touchmove", ii:"touchend", hi:"touchcancel", uh:"contextmenu", 
Eh:"error", Jh:"help", Oh:"load", Ph:"losecapture", bi:"readystatechange", ci:"resize", di:"scroll", mi:"unload", Ih:"hashchange", Xh:"pagehide", Yh:"pageshow", $h:"popstate", vh:"copy", Zh:"paste", wh:"cut", nh:"beforecopy", oh:"beforecut", ph:"beforepaste", Rh:"message", th:"connect", li:J ? "webkitTransitionEnd" : Mb ? "oTransitionEnd" : "transitionend"};
function L() {
}
L.prototype.sa = m;
L.prototype.g = function() {
  this.sa || (this.sa = j, this.c())
};
L.prototype.c = function() {
  this.jg && gc.apply(k, this.jg)
};
function gc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ga(d) ? gc.apply(k, d) : d && "function" == typeof d.g && d.g()
  }
}
;function hc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
C(hc, L);
q = hc.prototype;
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
function ic(a) {
  a.stopPropagation()
}
;function jc(a) {
  jc[" "](a);
  return a
}
jc[" "] = da;
function kc(a, b) {
  a && this.Zb(a, b)
}
C(kc, hc);
var lc = [1, 4, 2];
q = kc.prototype;
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
  hc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Nb) {
      var f;
      a: {
        try {
          jc(d.nodeName);
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
  this.Zd = Qb ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Da = a;
  delete this.ec;
  delete this.jb
};
function mc(a) {
  return cc ? 0 == a.Da.button : "click" == a.type ? j : !!(a.Da.button & lc[0])
}
q.stopPropagation = function() {
  kc.f.stopPropagation.call(this);
  this.Da.stopPropagation ? this.Da.stopPropagation() : this.Da.cancelBubble = j
};
q.preventDefault = function() {
  kc.f.preventDefault.call(this);
  var a = this.Da;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, ec) {
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
  kc.f.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Da = k
};
var nc = {}, oc = {}, pc = {}, qc = {};
function M(a, b, c, d, f) {
  if(b) {
    if(v(b)) {
      for(var g = 0;g < b.length;g++) {
        M(a, b[g], c, d, f)
      }
      return k
    }
    var d = !!d, i = oc;
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
    g = rc();
    g.src = a;
    i = new ac;
    i.Zb(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    o.push(i);
    nc[c] = i;
    pc[l] || (pc[l] = []);
    pc[l].push(i);
    a.addEventListener ? (a == s || !a.td) && a.addEventListener(b, g, d) : a.attachEvent(b in qc ? qc[b] : qc[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function rc() {
  var a = sc, b = dc ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function tc(a, b, c, d, f) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      tc(a, b[g], c, d, f)
    }
    return k
  }
  a = M(a, b, c, d, f);
  nc[a].nd = j;
  return a
}
function uc(a, b, c, d, f) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      uc(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = vc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Cb == c && a[g].capture == d && a[g].Ec == f) {
          wc(a[g].key);
          break
        }
      }
    }
  }
}
function wc(a) {
  if(!nc[a]) {
    return m
  }
  var b = nc[a];
  if(b.kb) {
    return m
  }
  var c = b.src, d = b.type, f = b.yf, g = b.capture;
  c.removeEventListener ? (c == s || !c.td) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in qc ? qc[d] : qc[d] = "on" + d, f);
  c = la(c);
  f = oc[d][g][c];
  if(pc[c]) {
    var i = pc[c];
    cb(i, b);
    0 == i.length && delete pc[c]
  }
  b.kb = j;
  f.rf = j;
  xc(d, g, c, f);
  delete nc[a];
  return j
}
function xc(a, b, c, d) {
  if(!d.Lc && d.rf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].kb ? d[f].yf.src = k : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.rf = m;
    0 == g && (delete oc[a][b][c], oc[a][b].d--, 0 == oc[a][b].d && (delete oc[a][b], oc[a].d--), 0 == oc[a].d && delete oc[a])
  }
}
function yc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    sa(pc, function(a) {
      for(var f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          wc(g.key), c++
        }
      }
    })
  }else {
    if(a = la(a), pc[a]) {
      for(var a = pc[a], f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          wc(g.key), c++
        }
      }
    }
  }
}
function vc(a, b, c) {
  var d = oc;
  return b in d && (d = d[b], c in d && (d = d[c], a = la(a), d[a])) ? d[a] : k
}
function zc(a, b, c, d, f) {
  var g = 1, b = la(b);
  if(a[b]) {
    a.ia--;
    a = a[b];
    a.Lc ? a.Lc++ : a.Lc = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var o = a[l];
        o && !o.kb && (g &= Ac(o, f) !== m)
      }
    }finally {
      a.Lc--, xc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Ac(a, b) {
  var c = a.handleEvent(b);
  a.nd && wc(a.key);
  return c
}
function sc(a, b) {
  if(!nc[a]) {
    return j
  }
  var c = nc[a], d = c.type, f = oc;
  if(!(d in f)) {
    return j
  }
  var f = f[d], g, i;
  if(!dc) {
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
    r = new kc;
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
          r.currentTarget = t[A], g &= zc(i, t[A], d, j, r)
        }
        if(o) {
          i = f[m];
          i.ia = i.d;
          for(A = 0;!r.jb && A < t.length && i.ia;A++) {
            r.currentTarget = t[A], g &= zc(i, t[A], d, m, r)
          }
        }
      }else {
        g = Ac(c, r)
      }
    }finally {
      t && (t.length = 0), r.g()
    }
    return g
  }
  d = new kc(b, this);
  try {
    g = Ac(c, d)
  }finally {
    d.g()
  }
  return g
}
var Bc = 0;
function Cc() {
}
C(Cc, L);
q = Cc.prototype;
q.td = j;
q.Oc = k;
q.fe = aa("Oc");
q.addEventListener = function(a, b, c, d) {
  M(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  uc(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = oc;
  if(b in c) {
    if(w(a)) {
      a = new hc(a, this)
    }else {
      if(a instanceof hc) {
        a.target = a.target || this
      }else {
        var d = a, a = new hc(b, this);
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
        a.currentTarget = f[i], d &= zc(g, f[i], a.type, j, a) && a.ec != m
      }
    }
    if(m in c) {
      if(g = c[m], g.ia = g.d, b) {
        for(i = 0;!a.jb && i < f.length && g.ia;i++) {
          a.currentTarget = f[i], d &= zc(g, f[i], a.type, m, a) && a.ec != m
        }
      }else {
        for(f = this;!a.jb && f && g.ia;f = f.Oc) {
          a.currentTarget = f, d &= zc(g, f, a.type, m, a) && a.ec != m
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
  Cc.f.c.call(this);
  yc(this);
  this.Oc = k
};
function Dc(a, b) {
  this.Hc = a || 1;
  this.jc = b || Ec;
  this.ld = y(this.$g, this);
  this.Pd = B()
}
C(Dc, Cc);
Dc.prototype.enabled = m;
var Ec = s.window;
q = Dc.prototype;
q.oa = k;
q.$g = function() {
  if(this.enabled) {
    var a = B() - this.Pd;
    0 < a && a < 0.8 * this.Hc ? this.oa = this.jc.setTimeout(this.ld, this.Hc - a) : (this.dispatchEvent(Fc), this.enabled && (this.oa = this.jc.setTimeout(this.ld, this.Hc), this.Pd = B()))
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
  Dc.f.c.call(this);
  this.stop();
  delete this.jc
};
var Fc = "tick";
Bc++;
Bc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Gc(a, b) {
  this.oc = [];
  this.ze = a;
  this.He = b || k
}
q = Gc.prototype;
q.Ka = m;
q.Wb = m;
q.bc = 0;
q.ke = m;
q.eg = m;
q.md = 0;
q.cancel = function(a) {
  if(this.Ka) {
    this.dc instanceof Gc && this.dc.cancel()
  }else {
    if(this.H) {
      var b = this.H;
      delete this.H;
      a ? b.cancel(a) : (b.md--, 0 >= b.md && b.cancel())
    }
    this.ze ? this.ze.call(this.He, this) : this.ke = j;
    this.Ka || this.Ub(new Hc)
  }
};
q.Ce = function(a, b) {
  Ic(this, a, b);
  this.bc--;
  0 == this.bc && this.Ka && Jc(this)
};
function Ic(a, b, c) {
  a.Ka = j;
  a.dc = c;
  a.Wb = !b;
  Jc(a)
}
function Kc(a) {
  a.Ka && (a.ke || e(new Lc), a.ke = m)
}
function Mc(a, b) {
  Kc(a);
  Ic(a, j, b)
}
q.Ub = function(a) {
  Kc(this);
  Ic(this, m, a)
};
function Nc(a, b) {
  Oc(a, b, k, h)
}
function Pc(a, b) {
  Oc(a, k, b, h)
}
function Oc(a, b, c, d) {
  a.oc.push([b, c, d]);
  a.Ka && Jc(a)
}
function Qc(a, b) {
  Oc(a, b, b, h)
}
function Rc(a) {
  return Za(a.oc, function(a) {
    return ka(a[1])
  })
}
function Jc(a) {
  a.te && a.Ka && Rc(a) && (s.clearTimeout(a.te), delete a.te);
  a.H && (a.H.md--, delete a.H);
  for(var b = a.dc, c = m, d = m;a.oc.length && 0 == a.bc;) {
    var f = a.oc.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.Wb ? i : g) {
      try {
        var l = g.call(f || a.He, b);
        u(l) && (a.Wb = a.Wb && (l == b || l instanceof Error), a.dc = b = l);
        b instanceof Gc && (d = j, a.bc++)
      }catch(o) {
        b = o, a.Wb = j, Rc(a) || (c = j)
      }
    }
  }
  a.dc = b;
  d && a.bc && (Oc(b, y(a.Ce, a, j), y(a.Ce, a, m)), b.eg = j);
  c && (a.te = s.setTimeout(function() {
    u(b.message) && b.stack && (b.message = b.message + ("\n" + b.stack));
    e(b)
  }, 0))
}
function Sc(a) {
  var b = new Gc;
  Mc(b, a);
  return b
}
function Tc(a) {
  var b = new Gc;
  b.Ub(a);
  return b
}
function Lc() {
  D.call(this)
}
C(Lc, D);
Lc.prototype.message = "Already called";
function Hc() {
  D.call(this)
}
C(Hc, D);
Hc.prototype.message = "Deferred was cancelled";
function Uc(a) {
  this.I = a;
  this.tc = [];
  this.Le = [];
  this.dg = y(this.fh, this)
}
Uc.prototype.oa = k;
function Vc(a, b, c, d) {
  a.tc.push([b, c, d]);
  a.oa == k && (a.oa = a.I.setTimeout(a.dg, 0))
}
Uc.prototype.fh = function() {
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
      Mc(a[b], k)
    }
  }
};
var Wc = new Uc(s.window);
var Xc;
function Yc(a) {
  a = a.className;
  return w(a) && a.match(/\S+/g) || []
}
function Zc(a, b) {
  for(var c = Yc(a), d = gb(arguments, 1), f = c.length + d.length, g = c, i = 0;i < d.length;i++) {
    ab(g, d[i]) || g.push(d[i])
  }
  a.className = c.join(" ");
  return c.length == f
}
function $c(a, b) {
  var c = Yc(a), d = gb(arguments, 1), f = ad(c, d);
  a.className = f.join(" ");
  return f.length == c.length - d.length
}
function ad(a, b) {
  return Xa(a, function(a) {
    return!ab(b, a)
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
var bd = !I || $b();
!Nb && !I || I && $b() || Nb && K("1.9.1");
var cd = I && !K("9");
function dd(a) {
  return a ? new ed(fd(a)) : Xc || (Xc = new ed)
}
function O(a) {
  return w(a) ? document.getElementById(a) : a
}
function gd(a, b, c, d) {
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
      b = i.className, "function" == typeof b.split && ab(b.split(/\s+/), c) && (d[f++] = i)
    }
    d.length = f;
    return d
  }
  return a
}
function hd(a, b) {
  sa(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in id ? a.setAttribute(id[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var id = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function jd(a, b, c) {
  return md(document, arguments)
}
function md(a, b) {
  var c = b[0], d = b[1];
  if(!bd && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', Ja(d.name), '"');
    if(d.type) {
      c.push(' type="', Ja(d.type), '"');
      var f = {};
      wa(f, d);
      d = f;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  d && (w(d) ? c.className = d : v(d) ? Zc.apply(k, [c].concat(d)) : hd(c, d));
  2 < b.length && nd(a, c, b, 2);
  return c
}
function nd(a, b, c, d) {
  function f(c) {
    c && b.appendChild(w(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && 0 < g.nodeType) ? F(od(g) ? eb(g) : g, f) : f(g)
  }
}
function pd(a, b) {
  nd(fd(a), a, arguments, 1)
}
function qd(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function rd(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function sd(a, b) {
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
function fd(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function td(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      qd(a), a.appendChild(fd(a).createTextNode(b))
    }
  }
}
var ud = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, vd = {IMG:" ", BR:"\n"};
function wd(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ja(a) && 0 <= a && 32768 > a) : m
}
function xd(a) {
  var b = [];
  yd(a, b, m);
  return b.join("")
}
function yd(a, b, c) {
  if(!(a.nodeName in ud)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in vd) {
        b.push(vd[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          yd(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function od(a) {
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
function ed(a) {
  this.p = a || s.document || document
}
q = ed.prototype;
q.Fa = dd;
q.b = function(a) {
  return w(a) ? this.p.getElementById(a) : a
};
q.i = function(a, b, c) {
  return md(this.p, arguments)
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
q.append = pd;
q.contains = sd;
function zd(a, b) {
  switch(fa(b)) {
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
        a.push('<property id="', d, '">'), zd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', Ja(c), '">'), zd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function Ad(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, f = arguments;
  d.push("<arguments>");
  for(var g = f.length, i = 1;i < g;i++) {
    zd(d, f[i])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var Bd = m, Cd = "";
function Dd(a) {
  a = a.match(/[\d]+/g);
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var Ed = navigator.plugins["Shockwave Flash"];
  Ed && (Bd = j, Ed.description && (Cd = Dd(Ed.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (Bd = j, Cd = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var Fd = navigator.mimeTypes["application/x-shockwave-flash"];
    (Bd = Fd && Fd.enabledPlugin) && (Cd = Dd(Fd.enabledPlugin.description))
  }else {
    try {
      var Gd = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), Bd = j, Cd = Dd(Gd.GetVariable("$version"))
    }catch(Hd) {
      try {
        Gd = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), Bd = j, Cd = "6.0.21"
      }catch(Id) {
        try {
          Gd = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Bd = j, Cd = Dd(Gd.GetVariable("$version"))
        }catch(Jd) {
        }
      }
    }
  }
}
var Kd = Cd;
function Ld(a, b, c) {
  a.style[Ta(c)] = b
}
function Md(a, b) {
  var c = fd(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function Nd(a, b, c) {
  b instanceof N ? (c = b.height, b = b.width) : c == h && e(Error("missing height argument"));
  a.style.width = Od(b);
  a.style.height = Od(c)
}
function Od(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
function Pd(a) {
  if("none" != (Md(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style && a.style.display)) {
    return Qd(a)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = Qd(a);
  b.display = c;
  b.position = f;
  b.visibility = d;
  return a
}
function Qd(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = J && !b && !c;
  return(!u(b) || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), I && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new N(b.right - b.left, b.bottom - b.top)) : new N(b, c)
}
function Rd(a) {
  I ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[J ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var Sd = Nb ? "MozUserSelect" : J ? "WebkitUserSelect" : k;
function Td(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Sd) {
    if(b = b ? "none" : "", a.style[Sd] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[Sd] = b
      }
    }
  }else {
    if(I || Mb) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
;function Ud(a) {
  this.eb = a;
  this.m = []
}
C(Ud, L);
var Vd = [];
function P(a, b, c, d) {
  v(c) || (Vd[0] = c, c = Vd);
  for(var f = 0;f < c.length;f++) {
    a.m.push(M(b, c[f], d || a, m, a.eb || a))
  }
  return a
}
function Wd(a, b, c, d, f, g) {
  if(v(c)) {
    for(var i = 0;i < c.length;i++) {
      Wd(a, b, c[i], d, f, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.eb || a;
      f = !!f;
      if(b = vc(b, c, f)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].kb && b[c].Cb == d && b[c].capture == f && b[c].Ec == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, wc(b), cb(a.m, b))
  }
  return a
}
Ud.prototype.$d = function() {
  F(this.m, wc);
  this.m.length = 0
};
Ud.prototype.c = function() {
  Ud.f.c.call(this);
  this.$d()
};
Ud.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Xd() {
}
ea(Xd);
Xd.prototype.Jg = 0;
Xd.La();
function Yd(a) {
  this.M = a || dd();
  this.fc = Zd
}
C(Yd, Cc);
Yd.prototype.Bg = Xd.La();
var Zd = k;
function $d(a, b) {
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
q = Yd.prototype;
q.R = k;
q.q = m;
q.e = k;
q.fc = k;
q.H = k;
q.O = k;
q.pc = k;
q.gh = m;
function ae(a) {
  return a.R || (a.R = ":" + (a.Bg.Jg++).toString(36))
}
q.b = n("e");
function be(a) {
  return a.wb || (a.wb = new Ud(a))
}
q.getParent = n("H");
q.fe = function(a) {
  this.H && this.H != a && e(Error("Method not supported"));
  Yd.f.fe.call(this, a)
};
q.Fa = n("M");
q.i = function() {
  this.e = this.M.createElement("div")
};
function ce(a, b) {
  a.q && e(Error("Component already rendered"));
  a.e || a.i();
  b ? b.insertBefore(a.e, k) : a.M.p.body.appendChild(a.e);
  (!a.H || a.H.q) && a.P()
}
q.P = function() {
  this.q = j;
  de(this, function(a) {
    !a.q && a.b() && a.P()
  })
};
q.ab = function() {
  de(this, function(a) {
    a.q && a.ab()
  });
  this.wb && this.wb.$d();
  this.q = m
};
q.c = function() {
  Yd.f.c.call(this);
  this.q && this.ab();
  this.wb && (this.wb.g(), delete this.wb);
  de(this, function(a) {
    a.g()
  });
  !this.gh && this.e && rd(this.e);
  this.H = this.e = this.pc = this.O = k
};
q.Vb = n("e");
q.Ib = function(a) {
  this.q && e(Error("Component already rendered"));
  this.fc = a
};
function de(a, b) {
  a.O && F(a.O, b, h)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = w(a) ? a : ae(a), d;
    this.pc && c ? (d = this.pc, d = (c in d ? d[c] : h) || k) : d = k;
    a = d;
    c && a && (d = this.pc, c in d && delete d[c], cb(this.O, a), b && (a.ab(), a.e && rd(a.e)), c = a, c == k && e(Error("Unable to set parent component")), c.H = k, Yd.f.fe.call(c, k))
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function ee(a) {
  this.u = new pb;
  a && this.hd(a)
}
function fe(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + la(a) : b.substr(0, 1) + a
}
q = ee.prototype;
q.Q = function() {
  return this.u.Q()
};
q.add = function(a) {
  this.u.set(fe(a), a)
};
q.hd = function(a) {
  for(var a = lb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
q.$d = function(a) {
  for(var a = lb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
q.remove = function(a) {
  return this.u.remove(fe(a))
};
q.clear = function() {
  this.u.clear()
};
q.Na = function() {
  return this.u.Na()
};
q.contains = function(a) {
  return this.u.aa(fe(a))
};
q.X = function() {
  return this.u.X()
};
q.L = function() {
  return new ee(this)
};
q.V = function(a) {
  return this.Q() == kb(a) && ge(this, a)
};
function ge(a, b) {
  var c = kb(b);
  if(a.Q() > c) {
    return m
  }
  !(b instanceof ee) && 5 < c && (b = new ee(b));
  return ob(a, function(a) {
    if("function" == typeof b.contains) {
      a = b.contains(a)
    }else {
      if("function" == typeof b.rc) {
        a = b.rc(a)
      }else {
        if(ga(b) || w(b)) {
          a = ab(b, a)
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
;function he(a) {
  return ie(a || arguments.callee.caller, [])
}
function ie(a, b) {
  var c = [];
  if(ab(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(je(a) + "(");
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
            g = (g = je(g)) ? g : "[fn]";
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
        c.push(ie(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function je(a) {
  if(ke[a]) {
    return ke[a]
  }
  a = "" + a;
  if(!ke[a]) {
    var b = /function ([^\(]+)/.exec(a);
    ke[a] = b ? b[1] : "[Anonymous]"
  }
  return ke[a]
}
var ke = {};
function le(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
le.prototype.zd = k;
le.prototype.yd = k;
var me = 0;
le.prototype.reset = function(a, b, c, d, f) {
  "number" == typeof f || me++;
  this.Pf = d || B();
  this.Bb = a;
  this.pf = b;
  this.Eg = c;
  delete this.zd;
  delete this.yd
};
le.prototype.Xc = aa("Bb");
function ne(a) {
  this.Ig = a
}
ne.prototype.H = k;
ne.prototype.Bb = k;
ne.prototype.O = k;
ne.prototype.Yb = k;
function oe(a, b) {
  this.name = a;
  this.value = b
}
oe.prototype.toString = n("name");
var pe = new oe("OFF", Infinity), qe = new oe("SHOUT", 1200), re = new oe("SEVERE", 1E3), se = new oe("WARNING", 900), te = new oe("INFO", 800), ue = new oe("CONFIG", 700), ve = new oe("FINE", 500), we = new oe("FINEST", 300), xe = new oe("ALL", 0);
q = ne.prototype;
q.getParent = n("H");
q.Xc = aa("Bb");
function ye(a) {
  if(a.Bb) {
    return a.Bb
  }
  if(a.H) {
    return ye(a.H)
  }
  Va("Root logger has no level set.");
  return k
}
q.log = function(a, b, c) {
  if(a.value >= ye(this).value) {
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
  var d = new le(a, "" + b, this.Ig);
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
      f = "Message: " + Ja(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + Ja(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ja(he(g) + "-> ")
    }catch(A) {
      f = "Exception trying to expose exception! You win, we lose. " + A
    }
    d.yd = f
  }
  return d
};
function ze(a, b) {
  a.log(re, b, h)
}
function Q(a, b, c) {
  a.log(se, b, c)
}
q.info = function(a, b) {
  this.log(te, a, b)
};
function R(a, b) {
  a.log(ve, b, h)
}
function S(a, b) {
  a.log(we, b, h)
}
var Ae = {}, Be = k;
function Ce() {
  Be || (Be = new ne(""), Ae[""] = Be, Be.Xc(ue))
}
function De() {
  Ce();
  return Be
}
function T(a) {
  Ce();
  var b;
  if(!(b = Ae[a])) {
    b = new ne(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = T(a.substr(0, c));
    c.O || (c.O = {});
    c.O[d] = b;
    b.H = c;
    Ae[a] = b
  }
  return b
}
;function Ee(a, b) {
  Yd.call(this, b);
  this.qg = a;
  this.xd = new Ud(this);
  this.vc = new pb
}
C(Ee, Yd);
q = Ee.prototype;
q.a = T("goog.ui.media.FlashObject");
q.ih = "window";
q.ye = "#000000";
q.$f = "sameDomain";
q.Z = function(a, b) {
  this.pb = w(a) ? a : Math.round(a) + "px";
  this.Hd = w(b) ? b : Math.round(b) + "px";
  this.b() && Nd(this.b() ? this.b().firstChild : k, this.pb, this.Hd);
  return this
};
q.P = function() {
  Ee.f.P.call(this);
  var a = this.b(), b;
  b = I ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = I ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = Fa(c, this.ih), d = this.vc.ua(), f = this.vc.X(), g = [], i = 0;i < d.length;i++) {
    var l = Ha(d[i]), o = Ha(f[i]);
    g.push(l + "=" + o)
  }
  b = Fa(b, ae(this), ae(this), "goog-ui-media-flash-object", Ja(this.qg), Ja(g.join("&")), this.ye, this.$f, c);
  a.innerHTML = b;
  this.pb && this.Hd && this.Z(this.pb, this.Hd);
  P(this.xd, this.b(), ta(fc), ic)
};
q.i = function() {
  this.Cf != k && !(0 <= Qa(Kd, this.Cf)) && (Q(this.a, "Required flash version not found:" + this.Cf), e(Error("Method not supported")));
  var a = this.Fa().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
q.c = function() {
  Ee.f.c.call(this);
  this.vc = k;
  this.xd.g();
  this.xd = k
};
function Fe() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ B()).toString(36)
}
function Ge(a) {
  return a.substr(0, a.length - 1)
}
var He = /^(0|[1-9]\d*)$/, Ie = /^(0|\-?[1-9]\d*)$/;
function Je(a) {
  var b = Ke;
  return He.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function Le(a) {
  D.call(this, a)
}
C(Le, D);
Le.prototype.name = "cw.loadflash.FlashLoadFailed";
s.__loadFlashObject_callbacks = {};
function Me(a, b, c) {
  function d() {
    f && delete s.__loadFlashObject_callbacks[f]
  }
  var f;
  if(Nb && !K("1.8.1.20")) {
    return Tc(new Le("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Qa(Kd, "9"))) {
    return Tc(new Le("Need Flash Player 9+; had " + (Kd ? Kd : "none")))
  }
  var g;
  f = "_" + Fe();
  var i = new Gc(d);
  s.__loadFlashObject_callbacks[f] = function() {
    a.setTimeout(function() {
      d();
      Mc(i, O(g))
    }, 0)
  };
  b.vc.set("onloadcallback", '__loadFlashObject_callbacks["' + f + '"]()');
  g = ae(b);
  ce(b, c);
  return i
}
function Ne(a, b, c) {
  var d = Me(a, b, c), f = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  Qc(d, function(b) {
    a.clearTimeout(f);
    return b
  });
  return d
}
;function Oe(a, b) {
  this.R = "_" + Fe();
  this.cd = a;
  this.Sa = b;
  this.Xa = a.Xa
}
C(Oe, L);
q = Oe.prototype;
q.Db = j;
q.rd = m;
q.a = T("cw.net.FlashSocket");
q.N = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.R);
  a.push("'>")
};
function Pe(a, b, c) {
  "frames" == b ? (a = a.Sa, Qe(a.K), Re(a.K, c)) : "stillreceiving" == b ? (c = a.Sa, S(c.a, "onstillreceiving"), Qe(c.K)) : "connect" == b ? (c = a.Sa, c.a.info("onconnect"), Qe(c.K), a = c.Ob, c.Ob = k, a.length && (S(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.$c.mc(a))) : "close" == b ? (a.Db = m, a.g()) : "ioerror" == b ? (a.Db = m, b = a.Sa, Q(b.a, "onioerror: " + H(c)), Se(b.K, m), a.g()) : "securityerror" == b ? (a.Db = m, b = a.Sa, Q(b.a, "onsecurityerror: " + H(c)), 
  Se(b.K, m), a.g()) : e(Error("bad event: " + b))
}
function Te(a) {
  a.rd = j;
  a.Db = m;
  a.g()
}
q.pd = function(a, b) {
  try {
    var c = this.Xa.CallFunction(Ad("__FC_connect", this.R, a, b, "<int32/>\n"))
  }catch(d) {
    return ze(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), Te(this)
  }
  '"OK"' != c && e(Error("__FC_connect failed? ret: " + c))
};
q.mc = function(a) {
  try {
    var b = this.Xa.CallFunction(Ad("__FC_writeFrames", this.R, a))
  }catch(c) {
    return ze(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), Te(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (Q(this.a, "Flash no longer knows of " + this.R + "; disposing."), this.g()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
q.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.Db);
  Oe.f.c.call(this);
  var a = this.Xa;
  delete this.Xa;
  if(this.Db) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(Ad("__FC_close", this.R)))
    }catch(b) {
      ze(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.rd = j
    }
  }
  if(this.rd) {
    a = this.Sa, Q(a.a, "oncrash"), Se(a.K, j)
  }else {
    this.Sa.onclose()
  }
  delete this.Sa;
  delete this.cd.xb[this.R]
};
function Ue(a, b) {
  this.v = a;
  this.Xa = b;
  this.xb = {};
  this.od = "__FST_" + Fe();
  s[this.od] = y(this.mg, this);
  var c = b.CallFunction(Ad("__FC_setCallbackFunc", this.od));
  '"OK"' != c && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
C(Ue, L);
q = Ue.prototype;
q.a = T("cw.net.FlashSocketTracker");
q.N = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  G(this.xb, a, b);
  a.push(">")
};
q.sd = function(a) {
  a = new Oe(this, a);
  return this.xb[a.R] = a
};
q.kg = function(a, b, c, d) {
  var f = this.xb[a];
  f ? "frames" == b && d ? (Pe(f, "ioerror", "FlashConnector hadError while handling data."), f.g()) : Pe(f, b, c) : Q(this.a, "Cannot dispatch because we have no instance: " + H([a, b, c, d]))
};
q.mg = function(a, b, c, d) {
  try {
    Vc(this.v, this.kg, this, [a, b, c, d])
  }catch(f) {
    s.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
q.c = function() {
  Ue.f.c.call(this);
  for(var a = ta(this.xb);a.length;) {
    a.pop().g()
  }
  delete this.xb;
  delete this.Xa;
  s[this.od] = h
};
function Ve(a) {
  this.K = a;
  this.Ob = []
}
C(Ve, L);
q = Ve.prototype;
q.a = T("cw.net.FlashSocketConduit");
q.mc = function(a) {
  this.Ob ? (S(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Ob.push.apply(this.Ob, a)) : (S(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.$c.mc(a))
};
q.pd = function(a, b) {
  this.$c.pd(a, b)
};
q.onclose = function() {
  this.a.info("onclose");
  Se(this.K, m)
};
q.c = function() {
  this.a.info("in disposeInternal.");
  Ve.f.c.call(this);
  this.$c.g();
  delete this.K
};
var We = [];
function Xe() {
  var a = new Gc;
  We.push(a);
  return a
}
function Ye(a) {
  var b = We;
  We = [];
  F(b, function(b) {
    Mc(b, a)
  })
}
function Ze(a, b) {
  if(We.length) {
    return Xe()
  }
  var c = new Ee(b + "FlashConnector.swf?cb=" + $e);
  c.ye = "#777777";
  c.Z(300, 30);
  var d = O("minerva-elements");
  d || e(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
  var f = O("minerva-elements-FlashConnectorSwf");
  f || (f = jd("div", {id:"minerva-elements-FlashConnectorSwf"}), d.appendChild(f));
  vb = Ne(a.I, c, f);
  Nc(vb, Ye);
  return Xe()
}
;function af() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function bf(a) {
  return a * Math.PI / 180
}
;var Ke = Math.pow(2, 53);
var cf = {Yf:p("<cw.eq.Wildcard>")};
function df(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function ef(a, b, c) {
  var d = fa(a), f = fa(b);
  if(a == cf || b == cf) {
    return j
  }
  if(a != k && "function" == typeof a.V) {
    return c && c.push("running custom equals function on left object"), a.V(b, c)
  }
  if(b != k && "function" == typeof b.V) {
    return c && c.push("running custom equals function on right object"), b.V(a, c)
  }
  if(df(d) || df(f)) {
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
                if(!ef(a[d], b[d], c)) {
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
          if(a.Xf == Db && b.Xf == Db) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!ef(a[g], b[g], c)) {
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
  return ia(a) && this.constructor == a.constructor && ef(this.Qc, a.Qc, b)
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
function ff() {
  var a = [];
  this.ma(a);
  return a.join("")
}
function gf() {
}
gf.prototype.V = function(a, b) {
  return!(a instanceof gf) ? m : ef(hf(this), hf(a), b)
};
gf.prototype.N = function(a, b) {
  a.push("<HelloFrame properties=");
  G(hf(this), a, b);
  a.push(">")
};
function hf(a) {
  return[a.Kb, a.xf, a.$e, a.Bf, a.ic, a.ne, a.qf, a.of, a.Sd, a.mf, a.Tf, a.Of, a.Ua, a.Kc]
}
gf.prototype.ca = ff;
gf.prototype.ma = function(a) {
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
  b.sack = this.Ua instanceof xb ? Ge((new jf(this.Ua)).ca()) : this.Ua;
  b.seenack = this.Kc instanceof xb ? Ge((new jf(this.Kc)).ca()) : this.Kc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(ya(b), "H")
};
function kf(a) {
  U.call(this, "StringFrame", [a]);
  this.pe = a
}
C(kf, U);
kf.prototype.ca = ff;
kf.prototype.ma = function(a) {
  a.push(this.pe, " ")
};
function lf(a) {
  U.call(this, "CommentFrame", [a]);
  this.fg = a
}
C(lf, U);
lf.prototype.ca = ff;
lf.prototype.ma = function(a) {
  a.push(this.fg, "^")
};
function mf(a) {
  U.call(this, "SeqNumFrame", [a]);
  this.If = a
}
C(mf, U);
mf.prototype.ca = ff;
mf.prototype.ma = function(a) {
  a.push("" + this.If, "N")
};
function nf(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = Ke;
    if(Ie.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var g = Je(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new xb(a, c)
}
function jf(a) {
  U.call(this, "SackFrame", [a]);
  this.Ua = a
}
C(jf, U);
jf.prototype.ca = ff;
jf.prototype.ma = function(a) {
  var b = this.Ua;
  a.push(b.lb.join(","), "|", "" + b.qb);
  a.push("A")
};
function of(a) {
  U.call(this, "StreamStatusFrame", [a]);
  this.hf = a
}
C(of, U);
of.prototype.ca = ff;
of.prototype.ma = function(a) {
  var b = this.hf;
  a.push(b.lb.join(","), "|", "" + b.qb);
  a.push("T")
};
function pf() {
  U.call(this, "StreamCreatedFrame", [])
}
C(pf, U);
pf.prototype.ca = ff;
pf.prototype.ma = function(a) {
  a.push("C")
};
function qf() {
  U.call(this, "YouCloseItFrame", [])
}
C(qf, U);
qf.prototype.ca = ff;
qf.prototype.ma = function(a) {
  a.push("Y")
};
function rf(a, b) {
  U.call(this, "ResetFrame", [a, b]);
  this.zf = a;
  this.xe = b
}
C(rf, U);
rf.prototype.ca = ff;
rf.prototype.ma = function(a) {
  a.push(this.zf, "|", "" + Number(this.xe), "!")
};
var sf = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function tf(a) {
  U.call(this, "TransportKillFrame", [a]);
  this.reason = a
}
C(tf, U);
tf.prototype.ca = ff;
tf.prototype.ma = function(a) {
  a.push(this.reason, "K")
};
function uf(a) {
  a || e(new V("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new kf(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = nf(Ge(a)), a == k && e(new V("bad sack")), new jf(a)
  }
  if("N" == b) {
    return a = Je(Ge(a)), a == k && e(new V("bad seqNum")), new mf(a)
  }
  if("T" == b) {
    return a = nf(Ge(a)), a == k && e(new V("bad lastSackSeen")), new of(a)
  }
  if("Y" == b) {
    return 1 != a.length && e(new V("leading garbage")), new qf
  }
  if("^" == b) {
    return new lf(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && e(new V("leading garbage")), new pf
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && e(new V("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && e(new V("bad applicationLevel")), new rf(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = sf[a], a == k && e(new V("unknown kill reason: " + a)), new tf(a)
  }
  e(new V("Invalid frame type " + b))
}
;var vf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function wf(a, b) {
  var c = a.match(vf), d = b.match(vf);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function xf(a, b) {
  var c;
  a instanceof xf ? (this.Hb(b == k ? a.wa : b), yf(this, a.za), zf(this, a.ob), Af(this, a.la), Bf(this, a.Ra), this.mb(a.z), Cf(this, a.S.L()), Df(this, a.bb)) : a && (c = ("" + a).match(vf)) ? (this.Hb(!!b), yf(this, c[1] || "", j), zf(this, c[2] || "", j), Af(this, c[3] || "", j), Bf(this, c[4]), this.mb(c[5] || "", j), Cf(this, c[6] || "", j), Df(this, c[7] || "", j)) : (this.Hb(!!b), this.S = new Ef(k, this, this.wa))
}
q = xf.prototype;
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
  this.za && a.push(Ff(this.za, Gf), ":");
  this.la && (a.push("//"), this.ob && a.push(Ff(this.ob, Gf), "@"), a.push(w(this.la) ? encodeURIComponent(this.la) : k), this.Ra != k && a.push(":", "" + this.Ra));
  this.z && (this.la && "/" != this.z.charAt(0) && a.push("/"), a.push(Ff(this.z, "/" == this.z.charAt(0) ? Hf : If)));
  var b = "" + this.S;
  b && a.push("?", b);
  this.bb && a.push("#", Ff(this.bb, Jf));
  return this.qa = a.join("")
};
q.L = function() {
  var a = this.za, b = this.ob, c = this.la, d = this.Ra, f = this.z, g = this.S.L(), i = this.bb, l = new xf(k, this.wa);
  a && yf(l, a);
  b && zf(l, b);
  c && Af(l, c);
  d && Bf(l, d);
  f && l.mb(f);
  g && Cf(l, g);
  i && Df(l, i);
  return l
};
function yf(a, b, c) {
  Kf(a);
  delete a.qa;
  a.za = c ? b ? decodeURIComponent(b) : "" : b;
  a.za && (a.za = a.za.replace(/:$/, ""))
}
function zf(a, b, c) {
  Kf(a);
  delete a.qa;
  a.ob = c ? b ? decodeURIComponent(b) : "" : b
}
function Af(a, b, c) {
  Kf(a);
  delete a.qa;
  a.la = c ? b ? decodeURIComponent(b) : "" : b
}
function Bf(a, b) {
  Kf(a);
  delete a.qa;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.Ra = b) : a.Ra = k
}
q.mb = function(a, b) {
  Kf(this);
  delete this.qa;
  this.z = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function Cf(a, b, c) {
  Kf(a);
  delete a.qa;
  b instanceof Ef ? (a.S = b, a.S.ue = a, a.S.Hb(a.wa)) : (c || (b = Ff(b, Lf)), a.S = new Ef(b, a, a.wa))
}
function Df(a, b, c) {
  Kf(a);
  delete a.qa;
  a.bb = c ? b ? decodeURIComponent(b) : "" : b
}
function Kf(a) {
  a.Cg && e(Error("Tried to modify a read-only Uri"))
}
q.Hb = function(a) {
  this.wa = a;
  this.S && this.S.Hb(a);
  return this
};
function Mf(a) {
  return a instanceof xf ? a.L() : new xf(a, h)
}
var Nf = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Ff(a, b) {
  var c = k;
  w(a) && (c = a, Nf.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, Of)));
  return c
}
function Of(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Gf = /[#\/\?@]/g, If = /[\#\?:]/g, Hf = /[\#\?]/g, Lf = /[\#\?@]/g, Jf = /#/g;
function Ef(a, b, c) {
  this.Ca = a || k;
  this.ue = b || k;
  this.wa = !!c
}
function Pf(a) {
  if(!a.o && (a.o = new pb, a.d = 0, a.Ca)) {
    for(var b = a.Ca.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = Qf(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
q = Ef.prototype;
q.o = k;
q.d = k;
q.Q = function() {
  Pf(this);
  return this.d
};
q.add = function(a, b) {
  Pf(this);
  Rf(this);
  a = Qf(this, a);
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
  Pf(this);
  a = Qf(this, a);
  if(this.o.aa(a)) {
    Rf(this);
    var b = this.o.get(a);
    v(b) ? this.d -= b.length : this.d--;
    return this.o.remove(a)
  }
  return m
};
q.clear = function() {
  Rf(this);
  this.o && this.o.clear();
  this.d = 0
};
q.Na = function() {
  Pf(this);
  return 0 == this.d
};
q.aa = function(a) {
  Pf(this);
  a = Qf(this, a);
  return this.o.aa(a)
};
q.rc = function(a) {
  var b = this.X();
  return ab(b, a)
};
q.ua = function() {
  Pf(this);
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
  Pf(this);
  var b = [];
  if(a) {
    a = Qf(this, a), this.aa(a) && (b = db(b, this.o.get(a)))
  }else {
    for(var a = this.o.X(), c = 0;c < a.length;c++) {
      b = db(b, a[c])
    }
  }
  return b
};
q.set = function(a, b) {
  Pf(this);
  Rf(this);
  a = Qf(this, a);
  if(this.aa(a)) {
    var c = this.o.get(a);
    v(c) ? this.d -= c.length : this.d--
  }
  this.o.set(a, b);
  this.d++;
  return this
};
q.get = function(a, b) {
  Pf(this);
  a = Qf(this, a);
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
    var f = c[d], g = Ha(f), f = this.o.get(f);
    if(v(f)) {
      for(var i = 0;i < f.length;i++) {
        0 < b && a.push("&"), a.push(g), "" !== f[i] && a.push("=", Ha(f[i])), b++
      }
    }else {
      0 < b && a.push("&"), a.push(g), "" !== f && a.push("=", Ha(f)), b++
    }
  }
  return this.Ca = a.join("")
};
function Rf(a) {
  delete a.vb;
  delete a.Ca;
  a.ue && delete a.ue.qa
}
q.L = function() {
  var a = new Ef;
  this.vb && (a.vb = this.vb);
  this.Ca && (a.Ca = this.Ca);
  this.o && (a.o = this.o.L());
  return a
};
function Qf(a, b) {
  var c = "" + b;
  a.wa && (c = c.toLowerCase());
  return c
}
q.Hb = function(a) {
  a && !this.wa && (Pf(this), Rf(this), nb(this.o, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.wa = a
};
function Sf(a, b, c, d) {
  this.contentWindow = a;
  this.uc = b;
  this.oe = c;
  this.rg = d
}
Sf.prototype.N = function(a, b) {
  a.push("<XDRFrame frameId=");
  G(this.rg, a, b);
  a.push(", expandedUrl=");
  G(this.uc, a, b);
  a.push(", streams=");
  G(this.oe, a, b);
  a.push(">")
};
function Tf() {
  this.frames = [];
  this.Qd = new pb
}
Tf.prototype.a = T("cw.net.XDRTracker");
function Uf(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor(af()) + ("" + Math.floor(af()))
  })
}
function Vf(a, b) {
  for(var c = Wf, d = 0;d < c.frames.length;d++) {
    var f = c.frames[d], g;
    if(g = 0 == f.oe.length) {
      g = f.uc;
      var i = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + i + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + H(b) + " existing frame " + H(f)), Sc(f)
    }
  }
  d = Fe() + Fe();
  f = Uf(a);
  g = s.location;
  g instanceof xf || (g = Mf(g));
  f instanceof xf || (f = Mf(f));
  var l = g;
  g = l.L();
  (i = !!f.za) ? yf(g, f.za) : i = !!f.ob;
  i ? zf(g, f.ob) : i = !!f.la;
  i ? Af(g, f.la) : i = f.Ra != k;
  var o = f.z;
  if(i) {
    Bf(g, f.Ra)
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
  i ? (l = f.S, l.vb || (l.vb = l.toString() ? decodeURIComponent(l.toString()) : ""), Cf(g, l.vb, h)) : i = !!f.bb;
  i && Df(g, f.bb);
  f = g.toString();
  g = ("" + s.location).match(vf)[3] || k;
  i = f.match(vf)[3] || k;
  g == i ? (c.a.info("No need to make a real XDRFrame for " + H(b)), c = Sc(new Sf(s, f, [b], k))) : ((g = O("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new Gc, c.Qd.set(d, [i, f, b]), c.a.info("Creating new XDRFrame " + H(d) + "for " + H(b)), c = jd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:f + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = i);
  return c
}
Tf.prototype.lh = function(a) {
  var b = this.Qd.get(a);
  b || e(Error("Unknown frameId " + H(a)));
  this.Qd.remove(b);
  var c = b[0], a = new Sf(O("minerva-xdrframe-" + a).contentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  Mc(c, a)
};
var Wf = new Tf;
s.__XHRTracker_xdrFrameLoaded = y(Wf.lh, Wf);
var Xf;
Xf = m;
var Yf = Jb();
Yf && (-1 != Yf.indexOf("Firefox") || -1 != Yf.indexOf("Camino") || -1 != Yf.indexOf("iPhone") || -1 != Yf.indexOf("iPod") || -1 != Yf.indexOf("iPad") || -1 != Yf.indexOf("Android") || -1 != Yf.indexOf("Chrome") && (Xf = j));
var Zf = Xf;
var $e = "4bdfc178fc0e508c0cd5efc3fdb09920";
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function $f(a, b, c, d, f, g) {
  Gc.call(this, f, g);
  this.lf = a;
  this.ud = [];
  this.Ne = !!b;
  this.pg = !!c;
  this.gg = !!d;
  for(b = 0;b < a.length;b++) {
    Oc(a[b], y(this.Ve, this, b, j), y(this.Ve, this, b, m))
  }
  0 == a.length && !this.Ne && Mc(this, this.ud)
}
C($f, Gc);
$f.prototype.sf = 0;
$f.prototype.Ve = function(a, b, c) {
  this.sf++;
  this.ud[a] = [b, c];
  this.Ka || (this.Ne && b ? Mc(this, [a, c]) : this.pg && !b ? this.Ub(c) : this.sf == this.lf.length && Mc(this, this.ud));
  this.gg && !b && (c = k);
  return c
};
$f.prototype.Ub = function(a) {
  $f.f.Ub.call(this, a);
  F(this.lf, function(a) {
    a.cancel()
  })
};
function ag(a) {
  a = new $f(a, m, j);
  Nc(a, function(a) {
    return Ya(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function bg(a, b) {
  this.jh = a;
  this.nf = b
}
bg.prototype.Nd = 0;
bg.prototype.Nc = 0;
bg.prototype.Ad = m;
function cg(a) {
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
;function dg(a, b, c) {
  this.K = b;
  this.na = a;
  this.qd = c
}
C(dg, L);
q = dg.prototype;
q.a = T("cw.net.XHRMaster");
q.Ta = -1;
q.Rd = function(a, b, c) {
  this.qd.__XHRSlave_makeRequest(this.na, a, b, c)
};
q.Ma = n("Ta");
q.Ud = function(a, b) {
  1 != b && ze(this.a, H(this.na) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Qe(this.K);
  Re(this.K, a)
};
q.Vd = function(a) {
  R(this.a, "ongotheaders_: " + H(a));
  var b = k;
  "Content-Length" in a && (b = Je(a["Content-Length"]));
  a = this.K;
  R(a.a, a.s() + " got Content-Length: " + b);
  a.Aa == eg && (b == k && (Q(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), fg(a, 2E3 + 1E3 * (b / 3072)))
};
q.Wd = function(a) {
  1 != a && R(this.a, this.K.s() + "'s XHR's readyState is " + a);
  this.Ta = a;
  2 <= this.Ta && Qe(this.K)
};
q.Td = function() {
  this.K.g()
};
q.c = function() {
  dg.f.c.call(this);
  delete gg.Ga[this.na];
  this.qd.__XHRSlave_dispose(this.na);
  delete this.qd
};
function hg() {
  this.Ga = {}
}
C(hg, L);
q = hg.prototype;
q.a = T("cw.net.XHRMasterTracker");
q.sd = function(a, b) {
  var c = "_" + Fe(), d = new dg(c, a, b);
  return this.Ga[c] = d
};
q.Ud = function(a, b, c) {
  if(Nb) {
    for(var d = [], f = 0, g = b.length;f < g;f++) {
      d[f] = b[f]
    }
    b = d
  }else {
    b = db(b)
  }
  (d = this.Ga[a]) ? d.Ud(b, c) : ze(this.a, "onframes_: no master for " + H(a))
};
q.Vd = function(a, b) {
  var c = this.Ga[a];
  c ? c.Vd(b) : ze(this.a, "ongotheaders_: no master for " + H(a))
};
q.Wd = function(a, b) {
  var c = this.Ga[a];
  c ? c.Wd(b) : ze(this.a, "onreadystatechange_: no master for " + H(a))
};
q.Td = function(a) {
  var b = this.Ga[a];
  b ? (delete this.Ga[b.na], b.Td()) : ze(this.a, "oncomplete_: no master for " + H(a))
};
q.c = function() {
  hg.f.c.call(this);
  for(var a = ta(this.Ga);a.length;) {
    a.pop().g()
  }
  delete this.Ga
};
var gg = new hg;
s.__XHRMaster_onframes = y(gg.Ud, gg);
s.__XHRMaster_oncomplete = y(gg.Td, gg);
s.__XHRMaster_ongotheaders = y(gg.Vd, gg);
s.__XHRMaster_onreadystatechange = y(gg.Wd, gg);
function ig(a, b, c) {
  this.xa = a;
  this.host = b;
  this.port = c
}
function jg(a, b, c) {
  this.host = a;
  this.port = b;
  this.dh = c
}
function kg(a, b) {
  b || (b = a);
  this.xa = a;
  this.Va = b
}
kg.prototype.N = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  G(this.xa, a, b);
  a.push(", secondaryUrl=");
  G(this.Va, a, b);
  a.push(">")
};
function lg(a, b, c, d) {
  this.xa = a;
  this.wf = b;
  this.Va = c;
  this.Hf = d;
  (!(0 == this.xa.indexOf("http://") || 0 == this.xa.indexOf("https://")) || !(0 == this.Va.indexOf("http://") || 0 == this.Va.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.wf.location.href;
  wf(this.xa, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Hf.location.href;
  wf(this.Va, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
lg.prototype.N = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  G(this.xa, a, b);
  a.push(", secondaryUrl=");
  G(this.Va, a, b);
  a.push(">")
};
var mg = new lf(";)]}");
function ng() {
}
ng.prototype.Qe = p(1);
function og(a) {
  s.setTimeout(function() {
    u(a.message) && a.stack && (a.message += "\n" + a.stack);
    e(a)
  }, 0)
}
function pg(a) {
  this.Yg = a
}
pg.prototype.N = function(a, b) {
  a.push("<UserContext for ");
  G(this.Yg, a, b);
  a.push(">")
};
function qg(a, b, c) {
  this.A = a;
  this.Zg = b ? b : new ng;
  this.v = c ? c : Wc;
  this.kc = new ee;
  this.ic = Fe() + Fe();
  this.ya = new yb;
  this.Kd = new Ab;
  this.lc = k;
  this.ed = [];
  this.Lb = new pg(this);
  this.cg = y(this.eh, this);
  J && (this.lc = tc(s, "load", this.Sg, m, this))
}
C(qg, L);
q = qg.prototype;
q.a = T("cw.net.ClientStream");
q.jf = new xb(-1, []);
q.kf = new xb(-1, []);
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
function rg(a) {
  var b = [-1];
  a.j && b.push(a.j.Eb);
  a.B && b.push(a.B.Eb);
  return Math.max.apply(Math.max, b)
}
function sg(a) {
  if(!(3 > a.h)) {
    tg(a);
    var b = 0 != a.ya.w.Q(), c = Bb(a.Kd), d = !c.V(a.kf) && !(a.j && c.V(a.j.Ab) || a.B && c.V(a.B.Ab)), f = rg(a);
    if((b = b && f < a.ya.$a) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.j.Pb ? (S(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.j, c != d.Ab && (!d.Ha && !d.F.length && ug(d), d.F.push(new jf(c)), d.Ab = c)), b && vg(a.j, a.ya, f + 1), a.j.Ea()) : a.B == k ? a.le ? (S(a.a, "tryToSend_: creating secondary to send " + g), a.B = wg(a, m), b && vg(a.B, a.ya, f + 1), a.B.Ea()) : (S(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.ae = j) : S(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
function tg(a) {
  a.Gb != k && (a.v.I.clearTimeout(a.Gb), a.Gb = k)
}
q.eh = function() {
  this.Gb = k;
  sg(this)
};
function xg(a) {
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
function yg(a, b) {
  var c;
  u(c) || (c = j);
  3 < a.h && e(Error("sendString: Can't send in state " + a.h));
  c && (w(b) || e(Error("sendString: not a string: " + H(b))), /^([ -~]*)$/.test(b) || e(Error("sendString: string has illegal chars: " + H(b))));
  a.ya.append(b);
  xg(a)
}
function wg(a, b) {
  var c;
  a.A instanceof lg ? c = 1 == a.Zg.Qe() ? eg : zg : a.A instanceof jg ? c = Ag : e(Error("Don't support endpoint " + H(a.A)));
  a.re += 1;
  c = new Bg(a.v, a, a.re, c, a.A, b);
  S(a.a, "Created: " + c.s());
  a.kc.add(c);
  return c
}
function Cg(a, b, c) {
  var d = new Dg(a.v, a, b, c);
  S(a.a, "Created: " + d.s() + ", delay=" + b + ", times=" + c);
  a.kc.add(d);
  return d
}
function Eg(a, b) {
  a.kc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  R(a.a, "Offline: " + b.s());
  a.me = b.Qa ? a.me + b.Qa : 0;
  1 <= a.me && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.Lb, "stream penalty reached limit", m), a.g());
  if(3 < a.h) {
    4 == a.h && b.Wf ? (R(a.a, "Disposing because resettingTransport_ is done."), a.g()) : R(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    var c;
    var d;
    c = b instanceof Dg;
    if(!c && b.gd) {
      var f = J ? Zf ? [0, 1] : [9, 20] : [0, 0];
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
    b == a.j ? (a.j = k, c ? a.j = Cg(a, f, c) : (f = rg(a), a.j = wg(a, j), vg(a.j, a.ya, f + 1)), a.j.Ea()) : b == a.B && (a.B = k, c ? (a.B = Cg(a, f, c), a.B.Ea()) : sg(a))
  }
}
q.reset = function(a) {
  3 < this.h && e(Error("reset: Can't send reset in state " + this.h));
  tg(this);
  0 != this.ya.w.Q() && Q(this.a, "reset: strings in send queue will never be sent: " + H(this.ya));
  this.h = 4;
  this.j && this.j.Pb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Fg(this.j, a), this.j.Ea()) : (this.j && (R(this.a, "reset: Disposing primary before sending ResetFrame."), this.j.g()), this.B && (R(this.a, "reset: Disposing secondary before sending ResetFrame."), this.B.g()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.cc = wg(this, m), Fg(this.cc, a), this.cc.Ea());
  this.onreset && this.onreset.call(this.Lb, a, j)
};
function Gg(a, b, c, d) {
  var f;
  f = a.Kd;
  for(var g = a.Hg, i = a.Gg, l = [], o = m, r = 0, z = c.length;r < z;r++) {
    var t = c[r], x = t[0], t = t[1];
    if(x == f.hb + 1) {
      f.hb += 1;
      for(l.push(t);;) {
        x = f.hb + 1;
        t = f.Ya.get(x, Cb);
        if(t === Cb) {
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
        var A = ub(t);
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
          Q(a.a, "onstring raised uncaught exception", kd), og(kd)
        }
      }
      if(4 == a.h || a.sa) {
        return
      }
    }
  }
  d || xg(a);
  if(!(4 == a.h || a.sa) && f) {
    ze(b.a, b.s() + "'s peer caused rwin overflow."), b.g()
  }
}
q.Ke = function(a) {
  ze(this.a, "Failed to start " + H(this) + "; error was " + H(a.message));
  this.g()
};
q.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.h && e(Error("ClientStream.start: " + H(this) + " already started"));
  this.Xd && this.Xd(this);
  this.h = 2;
  if(this.A instanceof kg) {
    var a = Vf(this.A.xa, this), b = Vf(this.A.Va, this), a = ag([a, b]);
    Nc(a, y(this.og, this));
    Pc(a, y(this.Ke, this))
  }else {
    if(this.A instanceof ig) {
      if(wb) {
        this.Me()
      }else {
        var a = Ze(this.v, this.A.xa), c = this;
        Nc(a, function(a) {
          wb || (wb = new Ue(c.v, a));
          return k
        });
        Nc(a, y(this.Me, this));
        Pc(a, y(this.Ke, this))
      }
    }else {
      Hg(this)
    }
  }
};
q.og = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].uc, f = a[1].uc;
  this.ed.push(a[0]);
  this.ed.push(a[1]);
  this.A = new lg(d, b, f, c);
  Hg(this)
};
q.Me = function() {
  this.A = new jg(this.A.host, this.A.port, wb);
  Hg(this)
};
function Hg(a) {
  a.h = 3;
  a.j = wg(a, j);
  vg(a.j, a.ya, k);
  a.j.Ea()
}
q.c = function() {
  this.a.info(H(this) + " in disposeInternal.");
  tg(this);
  this.h = 5;
  for(var a = this.kc.X(), b = 0;b < a.length;b++) {
    a[b].g()
  }
  for(a = 0;a < this.ed.length;a++) {
    cb(this.ed[a].oe, this)
  }
  J && this.lc && (wc(this.lc), this.lc = k);
  this.uf && this.uf.call(this.Lb);
  delete this.kc;
  delete this.j;
  delete this.B;
  delete this.cc;
  delete this.Lb;
  qg.f.c.call(this)
};
var eg = 1, zg = 2, Ag = 3;
function Bg(a, b, c, d, f, g) {
  this.v = a;
  this.D = b;
  this.Kb = c;
  this.Aa = d;
  this.A = f;
  this.F = [];
  this.sb = g;
  this.Pb = !this.yb();
  this.Fb = this.Aa != eg;
  this.bg = y(this.ah, this)
}
C(Bg, L);
q = Bg.prototype;
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
  return this.Aa == eg || this.Aa == zg
};
function Ig(a, b) {
  hb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Gg(a.D, a, b, !a.Fb)
}
function Jg(a, b, c) {
  try {
    var d = uf(b);
    a.wc += 1;
    R(a.a, a.s() + " RECV " + H(d));
    var f;
    1 == a.wc && !d.V(mg) && a.yb() ? (Q(a.a, a.s() + " is closing soon because got bad preamble: " + H(d)), f = j) : f = m;
    if(f) {
      return j
    }
    if(d instanceof kf) {
      if(!/^([ -~]*)$/.test(d.pe)) {
        return a.Xb = j
      }
      a.Pc += 1;
      c.push([a.Pc, d.pe])
    }else {
      if(d instanceof jf) {
        var g = a.D, i = d.Ua;
        g.jf = i;
        var l = g.ya, o = i.qb, c = m;
        o > l.$a && (c = j);
        for(var r = zb(l).concat(), d = 0;d < r.length;d++) {
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
        if(d instanceof mf) {
          a.Pc = d.If - 1
        }else {
          if(d instanceof of) {
            a.D.kf = d.hf
          }else {
            if(d instanceof qf) {
              return S(a.a, a.s() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof tf) {
              return a.Xb = j, "stream_attach_failure" == d.reason ? a.Qa += 1 : "acked_unsent_strings" == d.reason && (a.Qa += 0.5), S(a.a, a.s() + " is closing soon because got " + H(d)), j
            }
            if(!(d instanceof lf)) {
              if(d instanceof pf) {
                var A = a.D, kd = !a.Fb;
                S(A.a, "Stream is now confirmed to exist at server.");
                A.le = j;
                A.ae && !kd && (A.ae = m, sg(A))
              }else {
                c.length && (Ig(a, c), bb(c));
                if(d instanceof rf) {
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
function Re(a, b) {
  a.ad = j;
  try {
    for(var c = m, d = [], f = 0, g = b.length;f < g;f++) {
      if(a.sa) {
        a.a.info(a.s() + " returning from loop because we're disposed.");
        return
      }
      if(c = Jg(a, b[f], d)) {
        break
      }
    }
    d.length && Ig(a, d);
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
function Kg(a) {
  a.Rc != k && (a.v.I.clearTimeout(a.Rc), a.Rc = k)
}
function fg(a, b) {
  Kg(a);
  b = Math.round(b);
  a.Rc = a.v.I.setTimeout(a.bg, b);
  R(a.a, a.s() + "'s receive timeout set to " + b + " ms.")
}
function Qe(a) {
  a.Aa != eg && (a.Aa == Ag || a.Aa == zg ? fg(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.Aa)))
}
function ug(a) {
  var b = new gf;
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
  b.Ua = Bb(a.D.Kd);
  b.Kc = a.D.jf;
  a.F.push(b);
  a.Ab = b.Ua
}
function Se(a, b) {
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
    !a && !this.F.length && ug(this);
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
      this.r = gg.sd(this, this.sb ? this.A.wf : this.A.Hf);
      this.se = this.v.I === Ec ? B() : this.v.I.getTime();
      this.r.Rd(b, "POST", a);
      fg(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Fb ? 0 : this.sb ? 25E3 : 0))
    }else {
      if(this.Aa == Ag) {
        a = [];
        b = 0;
        for(c = this.F.length;b < c;b++) {
          a.push(this.F[b].ca())
        }
        this.F = [];
        this.r ? this.r.mc(a) : (b = this.A, this.r = new Ve(this), this.r.$c = b.dh.sd(this.r), this.se = this.v.I === Ec ? B() : this.v.I.getTime(), this.r.pd(b.host, b.port), this.r.sa || (this.r.mc(a), this.r.sa || fg(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.Aa))
      }
    }
  }
};
function vg(a, b, c) {
  !a.Ha && !a.F.length && ug(a);
  for(var c = Math.max(c, a.Eb + 1), b = b.Re(c), c = 0, d = b.length;c < d;c++) {
    var f = b[c], g = f[0], f = f[1];
    (-1 == a.Eb || a.Eb + 1 != g) && a.F.push(new mf(g));
    a.F.push(new kf(f));
    a.Eb = g
  }
}
q.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  Bg.f.c.call(this);
  this.Sf = this.v.I === Ec ? B() : this.v.I.getTime();
  this.F = [];
  Kg(this);
  this.r && this.r.g();
  var a = this.D;
  this.D = k;
  Eg(a, this)
};
function Fg(a, b) {
  !a.Ha && !a.F.length && ug(a);
  a.F.push(new rf(b, j));
  a.Wf = j
}
function Dg(a, b, c, d) {
  this.v = a;
  this.D = b;
  this.Je = c;
  this.De = d
}
C(Dg, L);
q = Dg.prototype;
q.Ha = m;
q.Pb = m;
q.Ac = k;
q.Ab = k;
q.a = T("cw.net.DoNothingTransport");
function Lg(a) {
  a.Ac = a.v.I.setTimeout(function() {
    a.Ac = k;
    a.De--;
    a.De ? Lg(a) : a.g()
  }, a.Je)
}
q.Ea = function() {
  this.Ha && !this.Pb && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ha = j;
  Lg(this)
};
q.N = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.Je, ">")
};
q.yb = p(m);
q.s = p("Wast. T");
q.Be = p(m);
q.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  Dg.f.c.call(this);
  this.Ac != k && this.v.I.clearTimeout(this.Ac);
  var a = this.D;
  this.D = k;
  Eg(a, this)
};
function Mg(a, b) {
  a.setAttribute("role", b);
  a.vi = b
}
;function Ng() {
}
var Og;
ea(Ng);
q = Ng.prototype;
q.xc = function() {
};
q.i = function(a) {
  var b = a.Fa().i("div", Pg(this, a).join(" "), a.ba);
  this.ce(a, b);
  return b
};
q.Vb = function(a) {
  return a
};
q.Tb = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(I && !K("7")) {
      var d = Qg(Yc(a), b);
      d.push(b);
      qa(c ? Zc : $c, a).apply(k, d)
    }else {
      c ? Zc(a, b) : $c(a, b)
    }
  }
};
q.bf = function(a) {
  a.fc == k && (a.fc = "rtl" == (Md(a.q ? a.e : a.M.p.body, "direction") || ((a.q ? a.e : a.M.p.body).currentStyle ? (a.q ? a.e : a.M.p.body).currentStyle.direction : k) || (a.q ? a.e : a.M.p.body).style && (a.q ? a.e : a.M.p.body).style.direction));
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
  Td(a, !b, !I && !Mb)
};
q.Ib = function(a, b) {
  this.Tb(a, this.t() + "-rtl", b)
};
q.ef = function(a) {
  var b;
  return a.T & 32 && (b = a.cb()) ? wd(b) : m
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
    wd(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
q.je = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.ja = function(a, b, c) {
  var d = a.b();
  if(d) {
    var f = Sg(this, b);
    f && this.Tb(a, f, c);
    this.$(d, b, c)
  }
};
q.$ = function(a, b, c) {
  Og || (Og = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Og[b]) && a.setAttribute("aria-" + b, c)
};
q.Uc = function(a, b) {
  var c = this.Vb(a);
  if(c && (qd(c), b)) {
    if(w(b)) {
      td(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = fd(c);
          c.appendChild(w(a) ? b.createTextNode(a) : a)
        }
      };
      v(b) ? F(b, d) : ga(b) && !("nodeType" in b) ? F(eb(b), d) : d(b)
    }
  }
};
q.cb = function(a) {
  return a.b()
};
q.t = p("goog-control");
function Pg(a, b) {
  var c = a.t(), d = [c], f = a.t();
  f != c && d.push(f);
  c = b.h;
  for(f = [];c;) {
    var g = c & -c;
    f.push(Sg(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.ta) && d.push.apply(d, c);
  I && !K("7") && d.push.apply(d, Qg(d));
  return d
}
function Qg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  F([], function(d) {
    $a(d, qa(ab, a)) && (!b || ab(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Sg(a, b) {
  if(!a.Ae) {
    var c = a.t();
    a.Ae = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Ae[b]
}
;function Tg(a, b) {
  a || e(Error("Invalid class name " + a));
  ka(b) || e(Error("Invalid decorator function " + b))
}
var Ug = {};
function Vg(a, b, c, d, f) {
  if(!I && (!J || !K("525"))) {
    return j
  }
  if(Qb && f) {
    return Wg(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || I && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(I && $b());
    case 27:
      return!J
  }
  return Wg(a)
}
function Wg(a) {
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
function Xg(a) {
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
;function Yg(a, b) {
  a && Zg(this, a, b)
}
C(Yg, Cc);
q = Yg.prototype;
q.e = k;
q.Ic = k;
q.Md = k;
q.Jc = k;
q.Pa = -1;
q.Oa = -1;
var $g = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, ah = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, bh = I || 
J && K("525");
q = Yg.prototype;
q.xg = function(a) {
  if(J && (17 == this.Pa && !a.ctrlKey || 18 == this.Pa && !a.altKey)) {
    this.Oa = this.Pa = -1
  }
  bh && !Vg(a.keyCode, this.Pa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Oa = Nb ? Xg(a.keyCode) : a.keyCode
};
q.yg = function() {
  this.Oa = this.Pa = -1
};
q.handleEvent = function(a) {
  var b = a.Da, c, d;
  I && "keypress" == a.type ? (c = this.Oa, d = 13 != c && 27 != c ? b.keyCode : 0) : J && "keypress" == a.type ? (c = this.Oa, d = 0 <= b.charCode && 63232 > b.charCode && Wg(c) ? b.charCode : 0) : Mb ? (c = this.Oa, d = Wg(c) ? b.keyCode : 0) : (c = b.keyCode || this.Oa, d = b.charCode || 0, Qb && 63 == d && 224 == c && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in $g ? f = $g[c] : 25 == c && a.shiftKey && (f = 9) : g && g in ah && (f = ah[g]);
  a = f == this.Pa;
  this.Pa = f;
  b = new ch(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.g()
  }
};
q.b = n("e");
function Zg(a, b, c) {
  a.Jc && a.detach();
  a.e = b;
  a.Ic = M(a.e, "keypress", a, c);
  a.Md = M(a.e, "keydown", a.xg, c, a);
  a.Jc = M(a.e, "keyup", a.yg, c, a)
}
q.detach = function() {
  this.Ic && (wc(this.Ic), wc(this.Md), wc(this.Jc), this.Jc = this.Md = this.Ic = k);
  this.e = k;
  this.Oa = this.Pa = -1
};
q.c = function() {
  Yg.f.c.call(this);
  this.detach()
};
function ch(a, b, c, d) {
  d && this.Zb(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(ch, kc);
function W(a, b, c) {
  Yd.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = la(b);
      if(d = Ug[d]) {
        break
      }
      b = b.f ? b.f.constructor : k
    }
    b = d ? ka(d.La) ? d.La() : new d : k
  }
  this.l = b;
  this.Vc(a)
}
C(W, Yd);
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
function dh(a, b) {
  b && (a.ta ? ab(a.ta, b) || a.ta.push(b) : a.ta = [b], a.l.Tb(a, b, j))
}
q.Tb = function(a, b) {
  b ? dh(this, a) : a && this.ta && (cb(this.ta, a), 0 == this.ta.length && (this.ta = k), this.l.Tb(this, a, m))
};
q.i = function() {
  var a = this.l.i(this);
  this.e = a;
  var b = this.Mg || this.l.xc();
  b && Mg(a, b);
  this.jd || this.l.Tc(a, m);
  this.Mb || this.l.je(a, m)
};
q.Vb = function() {
  return this.l.Vb(this.b())
};
q.P = function() {
  W.f.P.call(this);
  this.l.bf(this);
  if(this.T & -2 && (this.Gd && eh(this, j), this.T & 32)) {
    var a = this.cb();
    if(a) {
      var b = this.zb || (this.zb = new Yg);
      Zg(b, a);
      P(P(P(be(this), b, "key", this.Xe), a, "focus", this.vg), a, "blur", this.Ue)
    }
  }
};
function eh(a, b) {
  var c = be(a), d = a.b();
  b ? (P(P(P(P(c, d, "mouseover", a.Dc), d, "mousedown", a.Bc), d, "mouseup", a.Ye), d, "mouseout", a.Cc), I && P(c, d, "dblclick", a.We)) : (Wd(Wd(Wd(Wd(c, d, "mouseover", a.Dc), d, "mousedown", a.Bc), d, "mouseup", a.Ye), d, "mouseout", a.Cc), I && Wd(c, d, "dblclick", a.We))
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
      a = Ya(a, xd).join("")
    }else {
      if(cd && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        yd(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      cd || (a = a.replace(/ +/g, " "));
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
function fh(a, b) {
  gh(a, 2, b) && a.ja(2, b)
}
q.Ld = function() {
  return!!(this.h & 4)
};
q.setActive = function(a) {
  gh(this, 4, a) && this.ja(4, a)
};
q.ge = function(a) {
  gh(this, 8, a) && this.ja(8, a)
};
q.ja = function(a, b) {
  this.T & a && b != !!(this.h & a) && (this.l.ja(this, a, b), this.h = b ? this.h | a : this.h & ~a)
};
function X(a, b) {
  return!!(a.kd & b) && !!(a.T & b)
}
function gh(a, b, c) {
  return!!(a.T & b) && !!(a.h & b) != c && (!(a.Xg & b) || a.dispatchEvent($d(b, c))) && !a.sa
}
q.Dc = function(a) {
  !hh(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && fh(this, j)
};
q.Cc = function(a) {
  !hh(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(m), X(this, 2) && fh(this, m))
};
function hh(a, b) {
  return!!a.relatedTarget && sd(b, a.relatedTarget)
}
q.Bc = function(a) {
  if(this.isEnabled() && (X(this, 2) && fh(this, j), mc(a) && (!J || !Qb || !a.ctrlKey))) {
    X(this, 4) && this.setActive(j), this.l.ef(this) && this.cb().focus()
  }
  !this.jd && mc(a) && (!J || !Qb || !a.ctrlKey) && a.preventDefault()
};
q.Ye = function(a) {
  this.isEnabled() && (X(this, 2) && fh(this, j), this.Ld() && this.ib(a) && X(this, 4) && this.setActive(m))
};
q.We = function(a) {
  this.isEnabled() && this.ib(a)
};
q.ib = function(a) {
  if(X(this, 16)) {
    var b = !(this.h & 16);
    gh(this, 16, b) && this.ja(16, b)
  }
  X(this, 8) && this.ge(j);
  X(this, 64) && (b = !(this.h & 64), gh(this, 64, b) && this.ja(64, b));
  b = new hc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.Zd = a.Zd);
  return this.dispatchEvent(b)
};
q.vg = function() {
  X(this, 32) && gh(this, 32, j) && this.ja(32, j)
};
q.Ue = function() {
  X(this, 4) && this.setActive(m);
  X(this, 32) && gh(this, 32, m) && this.ja(32, m)
};
q.Xe = function(a) {
  return this.Mb && this.isEnabled() && this.Fd(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
q.Fd = function(a) {
  return 13 == a.keyCode && this.ib(a)
};
ka(W) || e(Error("Invalid component class " + W));
ka(Ng) || e(Error("Invalid renderer class " + Ng));
var ih = la(W);
Ug[ih] = Ng;
Tg("goog-control", function() {
  return new W(k)
});
function jh() {
}
C(jh, Ng);
ea(jh);
q = jh.prototype;
q.xc = p("button");
q.$ = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : jh.f.$.call(this, a, b, c)
};
q.i = function(a) {
  var b = jh.f.i.call(this, a), c = a.yc();
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
function kh() {
}
C(kh, jh);
ea(kh);
q = kh.prototype;
q.xc = function() {
};
q.i = function(a) {
  a.q && m != a.Gd && eh(a, m);
  a.Gd = m;
  a.kd &= -256;
  a.q && a.h & 32 && e(Error("Component already rendered"));
  a.h & 32 && a.ja(32, m);
  a.T &= -33;
  return a.Fa().i("button", {"class":Pg(this, a).join(" "), disabled:!a.isEnabled(), title:a.yc() || "", value:a.zc() || ""}, a.Pe() || "")
};
q.bf = function(a) {
  P(be(a), a.b(), "click", a.ib)
};
q.Tc = da;
q.Ib = da;
q.ef = function(a) {
  return a.isEnabled()
};
q.Wc = da;
q.ja = function(a, b, c) {
  kh.f.ja.call(this, a, b, c);
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
function lh(a, b, c) {
  W.call(this, a, b || kh.La(), c)
}
C(lh, W);
q = lh.prototype;
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
  lh.f.c.call(this);
  delete this.Uf;
  delete this.Qf
};
q.P = function() {
  lh.f.P.call(this);
  if(this.T & 32) {
    var a = this.cb();
    a && P(be(this), a, "keyup", this.Fd)
  }
};
q.Fd = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.ib(a) : 32 == a.keyCode
};
Tg("goog-button", function() {
  return new lh(k)
});
function mh() {
}
C(mh, jh);
ea(mh);
q = mh.prototype;
q.i = function(a) {
  var b = {"class":"goog-inline-block " + Pg(this, a).join(" "), title:a.yc() || ""}, b = a.Fa().i("div", b, nh(this, a.ba, a.Fa()));
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
function nh(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.t() + "-outer-box"), c.i("div", "goog-inline-block " + (a.t() + "-inner-box"), b))
}
q.t = p("goog-custom-button");
function oh(a, b, c) {
  lh.call(this, a, b || mh.La(), c)
}
C(oh, lh);
Tg("goog-custom-button", function() {
  return new oh(k)
});
var ph = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function qh(a) {
  var b = {}, a = "" + a, c = "#" == a.charAt(0) ? a : "#" + a;
  if(rh.test(c)) {
    return b.Fc = sh(c), b.type = "hex", b
  }
  a: {
    var d = a.match(th);
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
    return b.Fc = uh(c[0], c[1], c[2]), b.type = "rgb", b
  }
  if(ph && (c = ph[a.toLowerCase()])) {
    return b.Fc = c, b.type = "named", b
  }
  e(Error(a + " is not a valid color string"))
}
var vh = /#(.)(.)(.)/;
function sh(a) {
  rh.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  4 == a.length && (a = a.replace(vh, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function wh(a) {
  a = sh(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function uh(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || 0 > a || 255 < a || isNaN(b) || 0 > b || 255 < b || isNaN(c) || 0 > c || 255 < c) && e(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = xh(a.toString(16));
  b = xh(b.toString(16));
  c = xh(c.toString(16));
  return"#" + a + b + c
}
var rh = /^#(?:[0-9a-f]{3}){1,2}$/i, th = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function xh(a) {
  return 1 == a.length ? "0" + a : a
}
;function yh() {
}
yh.prototype.nc = k;
var zh;
function Ah() {
}
C(Ah, yh);
function Bh(a) {
  return(a = Ch(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Dh(a) {
  var b = {};
  Ch(a) && (b[0] = j, b[1] = j);
  return b
}
Ah.prototype.Id = k;
function Ch(a) {
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
zh = new Ah;
function Eh(a) {
  this.headers = new pb;
  this.Nb = a || k
}
C(Eh, Cc);
Eh.prototype.a = T("goog.net.XhrIo");
var Fh = /^https?$/i;
q = Eh.prototype;
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
  this.k = this.Nb ? Bh(this.Nb) : Bh(zh);
  this.fd = this.Nb ? this.Nb.nc || (this.Nb.nc = Dh(this.Nb)) : zh.nc || (zh.nc = Dh(zh));
  this.k.onreadystatechange = y(this.tf, this);
  try {
    R(this.a, Gh(this, "Opening Xhr")), this.Jd = j, this.k.open(b, a, j), this.Jd = m
  }catch(f) {
    R(this.a, Gh(this, "Error opening Xhr: " + f.message));
    Hh(this, f);
    return
  }
  var a = c || "", g = this.headers.L();
  d && nb(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.aa("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  nb(g, function(a, b) {
    this.k.setRequestHeader(b, a)
  }, this);
  this.Df && (this.k.responseType = this.Df);
  "withCredentials" in this.k && (this.k.withCredentials = this.hh);
  try {
    this.nb && (Ec.clearTimeout(this.nb), this.nb = k), 0 < this.bd && (R(this.a, Gh(this, "Will abort after " + this.bd + "ms if incomplete")), this.nb = Ec.setTimeout(y(this.bh, this), this.bd)), R(this.a, Gh(this, "Sending request")), this.Gc = j, this.k.send(a), this.Gc = m
  }catch(i) {
    R(this.a, Gh(this, "Send error: " + i.message)), Hh(this, i)
  }
};
q.bh = function() {
  "undefined" != typeof ba && this.k && (this.$b = "Timed out after " + this.bd + "ms, aborting", R(this.a, Gh(this, this.$b)), this.dispatchEvent("timeout"), this.abort(8))
};
function Hh(a, b) {
  a.Ia = m;
  a.k && (a.gb = j, a.k.abort(), a.gb = m);
  a.$b = b;
  Ih(a);
  Jh(a)
}
function Ih(a) {
  a.wd || (a.wd = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
q.abort = function() {
  this.k && this.Ia && (R(this.a, Gh(this, "Aborting")), this.Ia = m, this.gb = j, this.k.abort(), this.gb = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Jh(this))
};
q.c = function() {
  this.k && (this.Ia && (this.Ia = m, this.gb = j, this.k.abort(), this.gb = m), Jh(this, j));
  Eh.f.c.call(this)
};
q.tf = function() {
  !this.Jd && !this.Gc && !this.gb ? this.Kg() : Kh(this)
};
q.Kg = function() {
  Kh(this)
};
function Kh(a) {
  if(a.Ia && "undefined" != typeof ba) {
    if(a.fd[1] && 4 == a.Ma() && 2 == Lh(a)) {
      R(a.a, Gh(a, "Local request error detected and ignored"))
    }else {
      if(a.Gc && 4 == a.Ma()) {
        Ec.setTimeout(y(a.tf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.Ma()) {
          R(a.a, Gh(a, "Request complete"));
          a.Ia = m;
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
              b = ("" + a.Od).match(vf)[1] || k, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !Fh.test(b ? b.toLowerCase() : "")
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
            a.$b = d + " [" + Lh(a) + "]";
            Ih(a)
          }
          Jh(a)
        }
      }
    }
  }
}
function Jh(a, b) {
  if(a.k) {
    var c = a.k, d = a.fd[0] ? da : k;
    a.k = k;
    a.fd = k;
    a.nb && (Ec.clearTimeout(a.nb), a.nb = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(f) {
      ze(a.a, "Problem encountered resetting onreadystatechange: " + f.message)
    }
  }
}
q.Ld = function() {
  return!!this.k
};
q.Ma = function() {
  return this.k ? this.k.readyState : 0
};
function Lh(a) {
  try {
    return 2 < a.Ma() ? a.k.status : -1
  }catch(b) {
    return Q(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.k && 4 == this.Ma() ? this.k.getResponseHeader(a) : h
};
function Gh(a, b) {
  return b + " [" + a.gf + " " + a.Od + " " + Lh(a) + "]"
}
;var Mh = !(I || J && !K("420+"));
function Nh(a, b) {
  this.cd = a;
  this.na = b
}
C(Nh, L);
q = Nh.prototype;
q.r = k;
q.Ta = -1;
q.Te = m;
q.Ze = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Oh(a) {
  var b = cg(a.Ge), c = b[0], b = b[1], d = s.parent;
  d ? (d.__XHRMaster_onframes(a.na, c, b), 1 != b && a.g()) : a.g()
}
q.Ag = function() {
  Oh(this);
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
      for(var b = new pb, c = this.Ze.length;c--;) {
        var d = this.Ze[c];
        try {
          b.set(d, this.r.k.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.Q() && (this.Te = j, a.__XHRMaster_ongotheaders(this.na, tb(b)), this.sa)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.na, this.Ta);
    Mh && 3 == this.Ta && Oh(this)
  }else {
    this.g()
  }
};
q.Rd = function(a, b, c) {
  this.r = new Eh;
  M(this.r, "readystatechange", y(this.Pg, this));
  M(this.r, "complete", y(this.Ag, this));
  this.r.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Ge = new bg(this.r.k, 1048576)
};
q.c = function() {
  Nh.f.c.call(this);
  delete this.Ge;
  this.r && this.r.g();
  delete this.cd.hc[this.na];
  delete this.cd
};
function Ph() {
  this.hc = {}
}
C(Ph, L);
Ph.prototype.Fg = function(a, b, c, d) {
  var f = new Nh(this, a);
  this.hc[a] = f;
  f.Rd(b, c, d)
};
Ph.prototype.lg = function(a) {
  (a = this.hc[a]) && a.g()
};
Ph.prototype.c = function() {
  Ph.f.c.call(this);
  for(var a = ta(this.hc);a.length;) {
    a.pop().g()
  }
  delete this.hc
};
var Qh = new Ph;
s.__XHRSlave_makeRequest = y(Qh.Fg, Qh);
s.__XHRSlave_dispose = y(Qh.lg, Qh);
var Rh = T("cw.net.demo");
function Sh() {
}
Sh.prototype.Qe = function() {
  return Boolean(Number((new xf(document.location)).S.get("httpStreaming", "0"))) ? 2 : 1
};
function Th(a) {
  this.p = a
}
var Uh = /\s*;\s*/;
q = Th.prototype;
q.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && J) {
    var b = "COOKIES_TEST_" + B();
    Vh.set(b, "1");
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
  for(var c = a + "=", d = (this.p.cookie || "").split(Uh), f = 0, g;g = d[f];f++) {
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
  return Wh(this).keys
};
q.X = function() {
  return Wh(this).Vf
};
q.Na = function() {
  return!this.p.cookie
};
q.Q = function() {
  return!this.p.cookie ? 0 : (this.p.cookie || "").split(Uh).length
};
q.aa = function(a) {
  return u(this.get(a))
};
q.rc = function(a) {
  for(var b = Wh(this).Vf, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return j
    }
  }
  return m
};
q.clear = function() {
  for(var a = Wh(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b])
  }
};
function Wh(a) {
  for(var a = (a.p.cookie || "").split(Uh), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), -1 == d ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{keys:b, Vf:c}
}
var Vh = new Th(document);
Vh.Qh = 3950;
function Xh() {
  this.Af = B()
}
var Yh = new Xh;
Xh.prototype.set = aa("Af");
Xh.prototype.reset = function() {
  this.set(B())
};
Xh.prototype.get = n("Af");
function Zh(a) {
  this.Ng = a || "";
  this.Wg = Yh
}
Zh.prototype.Jf = j;
Zh.prototype.Ug = j;
Zh.prototype.Tg = j;
Zh.prototype.Kf = m;
function $h(a) {
  return 10 > a ? "0" + a : "" + a
}
function ai(a, b) {
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
function bi(a) {
  Zh.call(this, a)
}
C(bi, Zh);
bi.prototype.Kf = j;
function ci(a) {
  this.Og = y(this.Zf, this);
  this.Oe = new bi;
  this.df = this.Oe.Jf = m;
  this.e = a;
  this.ng = this.e.ownerDocument || this.e.document;
  var a = dd(this.e), b = k;
  if(I) {
    b = a.p.createStyleSheet(), Rd(b)
  }else {
    var c = gd(a.p, "head", h, h)[0];
    c || (b = gd(a.p, "body", h, h)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    Rd(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
ci.prototype.Zf = function(a) {
  var b = 100 >= this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight, c = this.ng.createElement("div");
  c.className = "logmsg";
  var d = this.Oe, f;
  switch(a.Bb.value) {
    case qe.value:
      f = "dbg-sh";
      break;
    case re.value:
      f = "dbg-sev";
      break;
    case se.value:
      f = "dbg-w";
      break;
    case te.value:
      f = "dbg-i";
      break;
    default:
      f = "dbg-f"
  }
  var g = [];
  g.push(d.Ng, " ");
  if(d.Jf) {
    var i = new Date(a.Pf);
    g.push("[", $h(i.getFullYear() - 2E3) + $h(i.getMonth() + 1) + $h(i.getDate()) + " " + $h(i.getHours()) + ":" + $h(i.getMinutes()) + ":" + $h(i.getSeconds()) + "." + $h(Math.floor(i.getMilliseconds() / 10)), "] ")
  }
  d.Ug && g.push("[", Pa(ai(a, d.Wg.get())), "s] ");
  d.Tg && g.push("[", Ja(a.Eg), "] ");
  g.push('<span class="', f, '">', Ia(Pa(Ja(a.pf))));
  d.Kf && a.zd && g.push("<br>", Ia(Pa(a.yd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  b && (this.e.scrollTop = this.e.scrollHeight)
};
ci.prototype.clear = function() {
  this.e.innerHTML = ""
};
function di(a, b, c, d, f, g) {
  6 == arguments.length ? this.setTransform(a, b, c, d, f, g) : (0 != arguments.length && e(Error("Insufficient matrix parameters")), this.da = this.ga = 1, this.Y = this.ea = this.fa = this.ha = 0)
}
q = di.prototype;
q.L = function() {
  return new di(this.da, this.Y, this.ea, this.ga, this.fa, this.ha)
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
  var d = new di, f = Math.cos(a), a = Math.sin(a), b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f), c = this.da, d = this.ea;
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
C(Y, Cc);
q = Y.prototype;
q.va = k;
q.e = k;
q.Rf = k;
q.b = n("e");
q.addEventListener = function(a, b, c, d) {
  M(this.e, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  uc(this.e, a, b, c, d)
};
q.c = function() {
  Y.f.c.call(this);
  yc(this.e)
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
function ei(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(ei, Z);
function fi(a, b) {
  Y.call(this, a, b)
}
C(fi, Y);
function gi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(gi, Z);
function hi(a, b) {
  Y.call(this, a, b)
}
C(hi, Y);
function ii(a, b) {
  Y.call(this, a, b)
}
C(ii, fi);
ii.prototype.clear = function() {
  qd(this.b())
};
ii.prototype.Z = function(a, b) {
  ji(this.b(), {width:a, height:b})
};
function ki(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(ki, gi);
function li(a, b) {
  Y.call(this, a, b)
}
C(li, hi);
li.prototype.Z = function(a, b) {
  ji(this.b(), {width:a, height:b})
};
function mi() {
}
;function ni(a, b) {
  this.ra = a;
  this.ac = b || 1
}
C(ni, mi);
function oi() {
  this.pb = 1;
  this.ra = "black"
}
;function pi() {
  this.C = [];
  this.d = [];
  this.pa = []
}
pi.prototype.tb = k;
pi.prototype.U = k;
pi.prototype.Jb = j;
var qi = [2, 2, 6, 6, 0];
q = pi.prototype;
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
  var f = this.U[0] - a * Math.cos(bf(c)) + a * Math.cos(bf(c + d)), g = this.U[1] - b * Math.sin(bf(c)) + b * Math.sin(bf(c + d));
  this.C.push(3);
  this.d.push(1);
  this.pa.push(a, b, c, d, f, g);
  this.Jb = m;
  this.U = [f, g];
  return this
};
q.ag = function(a, b, c, d) {
  for(var f = this.U[0] - a * Math.cos(bf(c)), g = this.U[1] - b * Math.sin(bf(c)), i = bf(d), d = Math.ceil(2 * (Math.abs(i) / Math.PI)), i = i / d, c = bf(c), l = 0;l < d;l++) {
    var o = Math.cos(c), r = Math.sin(c), z = 4 / 3 * Math.sin(i / 2) / (1 + Math.cos(i / 2)), t = f + (o - z * r) * a, x = g + (r + z * o) * b, c = c + i, o = Math.cos(c), r = Math.sin(c);
    this.Fe(t, x, f + (o + z * r) * a, g + (r - z * o) * b, f + o * a, g + r * b)
  }
  return this
};
function ri(a, b) {
  for(var c = a.pa, d = 0, f = 0, g = a.C.length;f < g;f++) {
    var i = a.C[f], l = qi[i] * a.d[f];
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
var si = {};
si[0] = pi.prototype.moveTo;
si[1] = pi.prototype.lineTo;
si[4] = pi.prototype.close;
si[2] = pi.prototype.Fe;
si[3] = pi.prototype.ag;
function ti(a) {
  if(a.Jb) {
    return a.L()
  }
  var b = new pi;
  ri(a, function(a, d) {
    si[a].apply(b, d)
  });
  return b
}
pi.prototype.Na = function() {
  return 0 == this.C.length
};
function ui(a, b, c, d, f) {
  Yd.call(this, f);
  this.width = a;
  this.height = b;
  this.ka = c || k;
  this.Rb = d || k
}
C(ui, Yd);
q = ui.prototype;
q.G = k;
q.Ja = 0;
q.Za = 0;
q.Se = function() {
  return this.W()
};
q.W = function() {
  return this.q ? Pd(this.b()) : ja(this.width) && ja(this.height) ? new N(this.width, this.height) : k
};
function vi(a) {
  var b = a.W();
  return b ? b.width / (a.ka ? new N(a.ka, a.Rb) : a.W()).width : 0
}
;function wi(a, b, c, d, f) {
  ui.call(this, a, b, c, d, f);
  this.Ie = {};
  this.ve = J && !K(526);
  this.eb = new Ud(this)
}
var xi;
C(wi, ui);
function yi(a, b, c) {
  a = a.M.p.createElementNS("http://www.w3.org/2000/svg", b);
  c && ji(a, c);
  return a
}
function ji(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
q = wi.prototype;
q.rb = function(a, b) {
  (b || this.G).b().appendChild(a.b())
};
q.de = function(a, b) {
  var c = a.b();
  b instanceof ni ? (c.setAttribute("fill", b.ra), c.setAttribute("fill-opacity", b.ac)) : c.setAttribute("fill", "none")
};
q.ee = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.ra);
    var d = b.pb;
    w(d) && -1 != d.indexOf("px") ? c.setAttribute("stroke-width", parseFloat(d) / vi(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
q.i = function() {
  var a = yi(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = yi(this, "g");
  this.vd = yi(this, "defs");
  this.G = new ii(b, this);
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
  Nd(this.b(), a, b)
};
q.W = function() {
  if(!Nb) {
    return this.q ? Pd(this.b()) : wi.f.W.call(this)
  }
  var a = this.width, b = this.height, c = w(a) && -1 != a.indexOf("%"), d = w(b) && -1 != b.indexOf("%");
  if(!this.q && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = Pd(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Pd(f), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
q.clear = function() {
  this.G.clear();
  qd(this.vd);
  this.Ie = {}
};
q.sc = function(a, b, c, d, f, g, i) {
  a = yi(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new ki(a, this, f, g);
  this.rb(f, i);
  return f
};
q.drawImage = function(a, b, c, d, f, g) {
  a = yi(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new li(a, this);
  this.rb(f, g);
  return f
};
q.P = function() {
  var a = this.W();
  wi.f.P.call(this);
  a || this.dispatchEvent("resize");
  if(this.ve) {
    var a = this.width, b = this.height;
    "string" == typeof a && -1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%") && P(this.eb, zi(), Fc, this.dd);
    this.dd()
  }
};
q.ab = function() {
  wi.f.ab.call(this);
  this.ve && Wd(this.eb, zi(), Fc, this.dd)
};
q.c = function() {
  delete this.Ie;
  delete this.vd;
  delete this.G;
  wi.f.c.call(this)
};
function zi() {
  xi || (xi = new Dc(400), xi.start());
  return xi
}
;function Ai() {
  return this.e = this.va.M.b(this.R) || this.e
}
function Bi(a, b) {
  this.R = a.id;
  Y.call(this, a, b)
}
C(Bi, fi);
Bi.prototype.b = Ai;
Bi.prototype.clear = function() {
  qd(this.b())
};
Bi.prototype.Z = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  this.va.G != this && (c.coordorigin = "0 0")
};
function Ci(a, b, c, d, f, g, i, l) {
  this.R = a.id;
  Z.call(this, a, b, i, l)
}
C(Ci, gi);
Ci.prototype.b = Ai;
function Di(a, b) {
  this.R = a.id;
  Y.call(this, a, b)
}
C(Di, hi);
Di.prototype.b = Ai;
Di.prototype.Z = function(a, b) {
  var c = this.b().style;
  c.width = Ei(a) + "px";
  c.height = Ei(b) + "px"
};
function Fi(a, b, c, d, f) {
  ui.call(this, a, b, c, d, f);
  this.eb = new Ud(this)
}
C(Fi, ui);
var Gi = document.documentMode && 8 <= document.documentMode;
function Ei(a) {
  return Math.round(100 * (parseFloat(a.toString()) - 0.5))
}
function $(a) {
  return Math.round(100 * parseFloat(a.toString()))
}
function Hi(a, b) {
  var c = a.M.createElement("g_vml_:" + b);
  c.id = "goog_" + Ra++;
  return c
}
function Ii(a) {
  Gi && a.q && (a.b().innerHTML = a.b().innerHTML)
}
Fi.prototype.rb = function(a, b) {
  (b || this.G).b().appendChild(a.b());
  Ii(this)
};
Fi.prototype.de = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    "fill" == f.tagName && c.removeChild(f)
  }
  b instanceof ni ? "transparent" == b.ra ? c.filled = m : 1 != b.ac ? (c.filled = j, d = Hi(this, "fill"), d.opacity = Math.round(100 * b.ac) + "%", d.color = b.ra, c.appendChild(d)) : (c.filled = j, c.fillcolor = b.ra) : c.filled = m;
  Ii(this)
};
Fi.prototype.ee = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = j;
    var d = b.pb, d = w(d) && -1 == d.indexOf("px") ? parseFloat(d) : d * vi(this), f = c.getElementsByTagName("stroke")[0];
    1 > d ? (f = f || Hi(this, "stroke"), f.opacity = d, f.wi = "1px", f.color = b.ra, c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.ra, c.strokeweight = d + "px")
  }else {
    c.stroked = m
  }
  Ii(this)
};
function Ji(a, b, c, d, f) {
  var g = a.style;
  g.position = "absolute";
  g.left = Ei(b) + "px";
  g.top = Ei(c) + "px";
  g.width = $(d) + "px";
  g.height = $(f) + "px";
  "shape" == a.tagName && (a.coordsize = $(d) + " " + $(f))
}
try {
  eval("document.namespaces")
}catch(Ki) {
}
q = Fi.prototype;
q.i = function() {
  var a = this.M.p;
  a.namespaces.g_vml_ || (Gi ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}");
  var a = this.width, b = this.height, c = this.M.i("div", {style:"overflow:hidden;position:relative;width:" + (w(a) && Ea(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (w(b) && Ea(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = Hi(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.ka ? $(this.ka) + " " + $(this.Rb) : $(a) + " " + $(b);
  d.coordorigin = u(this.Ja) ? $(this.Ja) + " " + $(this.Za) : "0 0";
  c.appendChild(d);
  this.G = new Bi(d, this);
  M(c, "resize", y(this.Ed, this))
};
q.Ed = function() {
  var a = Pd(this.b()), b = this.G.b().style;
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
  Nd(this.b(), a, b)
};
q.W = function() {
  var a = this.b();
  return new N(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
q.clear = function() {
  this.G.clear()
};
q.sc = function(a, b, c, d, f, g, i) {
  var l = Hi(this, "oval");
  Ji(l, a - c, b - d, 2 * c, 2 * d);
  a = new Ci(l, this, 0, 0, 0, 0, f, g);
  this.rb(a, i);
  return a
};
q.drawImage = function(a, b, c, d, f, g) {
  var i = Hi(this, "image");
  Ji(i, a, b, c, d);
  Gi ? i.src = f : i.setAttribute("src", f);
  a = new Di(i, this);
  this.rb(a, g);
  return a
};
q.P = function() {
  Fi.f.P.call(this);
  this.Ed();
  Ii(this)
};
q.c = function() {
  this.G = k;
  Fi.f.c.call(this)
};
function Li(a) {
  Y.call(this, k, a);
  this.O = []
}
C(Li, fi);
Li.prototype.clear = function() {
  this.O.length && (this.O.length = 0, Mi(this.va))
};
Li.prototype.Z = function() {
};
Li.prototype.appendChild = function(a) {
  this.O.push(a)
};
Li.prototype.Ba = function() {
  for(var a = 0, b = this.O.length;a < b;a++) {
    Ni(this.va, this.O[a])
  }
};
function Oi(a, b, c, d, f, g, i, l) {
  Z.call(this, a, b, i, l);
  this.hg = c;
  this.ig = d;
  this.Ef = f;
  this.Ff = g;
  this.z = new pi;
  this.z.clear();
  this.z.moveTo(this.hg + this.Ef * Math.cos(bf(0)), this.ig + this.Ff * Math.sin(bf(0)));
  this.z.arcTo(this.Ef, this.Ff, 0, 360);
  this.z.close();
  this.Lg = new Pi(k, b, this.z, i, l)
}
C(Oi, gi);
Oi.prototype.Ba = function(a) {
  this.Lg.Ba(a)
};
function Pi(a, b, c, d, f) {
  Z.call(this, a, b, d, f);
  this.mb(c)
}
C(Pi, ei);
Pi.prototype.Sb = m;
Pi.prototype.mb = function(a) {
  this.z = a.Jb ? a : ti(a);
  this.Sb && Mi(this.va)
};
Pi.prototype.Ba = function(a) {
  this.Sb = j;
  a.beginPath();
  ri(this.z, function(b, c) {
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
function Qi(a, b, c, d, f, g, i) {
  Y.call(this, a, b);
  this.kh = c;
  this.mh = d;
  this.we = f;
  this.Dd = g;
  this.Vg = i
}
C(Qi, hi);
Qi.prototype.Sb = m;
Qi.prototype.Z = function(a, b) {
  this.we = a;
  this.Dd = b;
  this.Sb && Mi(this.va)
};
Qi.prototype.Ba = function(a) {
  this.af ? (this.we && this.Dd && a.drawImage(this.af, this.kh, this.mh, this.we, this.Dd), this.Sb = j) : (a = new Image, a.onload = y(this.wg, this, a), a.src = this.Vg)
};
Qi.prototype.wg = function(a) {
  this.af = a;
  Mi(this.va)
};
function Ri(a, b, c, d, f) {
  ui.call(this, a, b, c, d, f)
}
C(Ri, ui);
q = Ri.prototype;
q.de = function() {
  Mi(this)
};
q.ee = function() {
  Mi(this)
};
function Si(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.Rf ? b.Rf.L() : new di, f = d.fa, g = d.ha;
  (f || g) && c.translate(f, g);
  (d = d.Y) && c.rotate(Math.asin(d))
}
q.i = function() {
  var a = this.M.i("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Qb = this.M.i("canvas");
  a.appendChild(this.Qb);
  this.Dg = this.G = new Li(this);
  this.Rg = 0;
  Ti(this)
};
q.getContext = function() {
  this.b() || this.i();
  this.ub || (this.ub = this.Qb.getContext("2d"), this.ub.save());
  return this.ub
};
q.Z = function(a, b) {
  this.width = a;
  this.height = b;
  Ti(this);
  Mi(this)
};
q.W = function() {
  var a = this.width, b = this.height, c = w(a) && -1 != a.indexOf("%"), d = w(b) && -1 != b.indexOf("%");
  if(!this.q && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = Pd(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Pd(f), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
function Ti(a) {
  Nd(a.b(), a.width, a.height);
  var b = a.W();
  b && (Nd(a.Qb, b.width, b.height), a.Qb.width = b.width, a.Qb.height = b.height, a.ub = k)
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
function Mi(a) {
  if(!a.ui && a.q) {
    a.reset();
    if(a.ka) {
      var b = a.W();
      a.getContext().scale(b.width / a.ka, b.height / a.Rb)
    }
    (a.Ja || a.Za) && a.getContext().translate(-a.Ja, -a.Za);
    Si(a, a.G);
    a.G.Ba(a.ub);
    a.getContext().restore()
  }
}
function Ni(a, b) {
  var c = a.getContext();
  Si(a, b);
  if(!b.sg || !b.ug) {
    b.Ba(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof ni) {
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
      b.Ba(c), c.strokeStyle = d.ra, d = d.pb, w(d) && -1 != d.indexOf("px") && (d = parseFloat(d) / vi(a)), c.lineWidth = d, c.stroke()
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
  this.q && !this.Rg && !(b != this.G && b != this.Dg) && Ni(this, a)
};
q.sc = function(a, b, c, d, f, g, i) {
  a = new Oi(k, this, a, b, c, d, f, g);
  this.append(a, i);
  return a
};
q.drawImage = function(a, b, c, d, f, g) {
  a = new Qi(k, this, a, b, c, d, f);
  this.append(a, g);
  return a
};
q.c = function() {
  this.ub = k;
  Ri.f.c.call(this)
};
q.P = function() {
  var a = this.W();
  Ri.f.P.call(this);
  a || (Ti(this), this.dispatchEvent("resize"));
  Mi(this)
};
function Ui(a) {
  this.w = [];
  Vi(this, a)
}
C(Ui, Cc);
q = Ui.prototype;
q.Wa = k;
q.be = k;
function Vi(a, b) {
  b && (F(b, function(a) {
    this.gc(a, m)
  }, a), fb(a.w, b))
}
q.Cd = n("Wa");
q.Re = function() {
  return eb(this.w)
};
q.Yc = function(a) {
  a != this.Wa && (this.gc(this.Wa, m), this.Wa = a, this.gc(a, j));
  this.dispatchEvent("select")
};
q.Bd = function() {
  return this.Wa ? Wa(this.w, this.Wa) : -1
};
q.he = function(a) {
  this.Yc(this.w[a] || k)
};
q.clear = function() {
  bb(this.w);
  this.Wa = k
};
q.c = function() {
  Ui.f.c.call(this);
  delete this.w;
  this.Wa = k
};
q.gc = function(a, b) {
  a && ("function" == typeof this.be ? this.be(a, b) : "function" == typeof a.ge && a.ge(b))
};
function Wi() {
}
C(Wi, Ng);
ea(Wi);
var Xi = 0;
Wi.prototype.i = function(a) {
  var b = Pg(this, a);
  return a.Fa().i("div", b ? b.join(" ") : k, Yi(this, a.ba, a.Se(), a.Fa()))
};
function Yi(a, b, c, d) {
  for(var f = [], g = 0, i = 0;g < c.height;g++) {
    for(var l = [], o = 0;o < c.width;o++) {
      var r = b && b[i++];
      l.push(Zi(a, r, d))
    }
    f.push(d.i("tr", a.t() + "-row", l))
  }
  return a.Ee(f, d)
}
Wi.prototype.Ee = function(a, b) {
  var c = b.i("table", this.t() + "-table", b.i("tbody", this.t() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Mg(c, "grid");
  return c
};
function Zi(a, b, c) {
  a = c.i("td", {"class":a.t() + "-cell", id:a.t() + "-cell-" + Xi++}, b);
  Mg(a, "gridcell");
  return a
}
Wi.prototype.Uc = function(a, b) {
  if(a) {
    var c = gd(document, "tbody", this.t() + "-body", a)[0];
    if(c) {
      var d = 0;
      F(c.rows, function(a) {
        F(a.cells, function(a) {
          qd(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = dd(a), i = c.rows[0].cells.length;d < b.length;) {
          var l = b[d++];
          f.push(Zi(this, l, g));
          f.length == i && (l = g.i("tr", this.t() + "-row", f), c.appendChild(l), f.length = 0)
        }
        if(0 < f.length) {
          for(;f.length < i;) {
            f.push(Zi(this, "", g))
          }
          l = g.i("tr", this.t() + "-row", f);
          c.appendChild(l)
        }
      }
    }
    Td(a, j, Nb)
  }
};
function $i(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && ab(Yc(c), a.t() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function aj(a, b, c, d) {
  c && (c = c.parentNode, a = a.t() + "-cell-hover", d ? Zc(c, a) : $c(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id))
}
Wi.prototype.t = p("goog-palette");
function bj(a, b, c) {
  W.call(this, a, b || Wi.La(), c)
}
C(bj, W);
q = bj.prototype;
q.n = k;
q.fb = -1;
q.J = k;
q.c = function() {
  bj.f.c.call(this);
  this.J && (this.J.g(), this.J = k);
  this.n = k
};
q.Vc = function(a) {
  bj.f.Vc.call(this, a);
  cj(this);
  this.J ? (this.J.clear(), Vi(this.J, a)) : (this.J = new Ui(a), this.J.be = y(this.gc, this), P(be(this), this.J, "select", this.zg));
  this.fb = -1
};
q.Pe = p(k);
q.Dc = function(a) {
  bj.f.Dc.call(this, a);
  var b = $i(this.l, this, a.target);
  if((!b || !a.relatedTarget || !sd(b, a.relatedTarget)) && b != dj(this)) {
    a = this.ba, ej(this, a ? Wa(a, b) : -1)
  }
};
q.Cc = function(a) {
  bj.f.Cc.call(this, a);
  var b = $i(this.l, this, a.target);
  (!b || !a.relatedTarget || !sd(b, a.relatedTarget)) && b == dj(this) && aj(this.l, this, b, m)
};
q.Bc = function(a) {
  bj.f.Bc.call(this, a);
  if(this.Ld() && (a = $i(this.l, this, a.target), a != dj(this))) {
    var b = this.ba;
    ej(this, b ? Wa(b, a) : -1)
  }
};
q.ib = function() {
  var a = dj(this);
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
    return ej(this, 0), j
  }
  if(35 == a.keyCode) {
    return ej(this, b - 1), j
  }
  var d = 0 > this.fb ? this.Bd() : this.fb;
  switch(a.keyCode) {
    case 37:
      -1 == d && (d = b);
      if(0 < d) {
        return ej(this, d - 1), a.preventDefault(), j
      }
      break;
    case 39:
      if(d < b - 1) {
        return ej(this, d + 1), a.preventDefault(), j
      }
      break;
    case 38:
      -1 == d && (d = b + c - 1);
      if(d >= c) {
        return ej(this, d - c), a.preventDefault(), j
      }
      break;
    case 40:
      if(-1 == d && (d = -c), d < b - c) {
        return ej(this, d + c), a.preventDefault(), j
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
  cj(this)
};
function dj(a) {
  var b = a.ba;
  return b && b[a.fb]
}
function ej(a, b) {
  b != a.fb && (fj(a, a.fb, m), a.fb = b, fj(a, b, j))
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
function fj(a, b, c) {
  if(a.b()) {
    var d = a.ba;
    d && 0 <= b && b < d.length && aj(a.l, a, d[b], c)
  }
}
q.gc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.l.t() + "-cell-selected";
    b ? Zc(c, d) : $c(c, d)
  }
};
function cj(a) {
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
;function gj(a, b, c) {
  this.qc = a || [];
  bj.call(this, k, b || Wi.La(), c);
  this.qc = this.qc;
  this.Mc = k;
  this.Uc(hj(this))
}
C(gj, bj);
gj.prototype.Mc = k;
function ij(a) {
  var b = jj(kj);
  a.Mc || (a.Mc = Ya(a.qc, function(a) {
    return jj(a)
  }));
  a.he(b ? Wa(a.Mc, b) : -1)
}
function hj(a) {
  return Ya(a.qc, function(a) {
    var c = this.Fa().i("div", {"class":this.l.t() + "-colorswatch", style:"background-color:" + a});
    c.title = "#" == a.charAt(0) ? "RGB (" + wh(a).join(", ") + ")" : a;
    return c
  }, a)
}
function jj(a) {
  if(a) {
    try {
      return qh(a).Fc
    }catch(b) {
    }
  }
  return k
}
;var lj, mj, nj, oj, pj, qj = T("whiteboard.logger");
window.onerror = function(a, b, c) {
  ze(qj, "window.onerror: message: " + H(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function rj() {
}
rj.prototype.Mf = function(a) {
  this.D = a;
  yg(this.D, "subprotocol:whiteboard")
};
rj.prototype.Lf = function(a, b) {
  qj.info("streamReset: reasonString=" + H(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  sj = k
};
rj.prototype.Nf = function(a) {
  var a = xa(a), b = a[0], c = a[1];
  "Point" == b ? lj.sc(c.x, c.y, 5, 5, new oi, new ni(c.color), h) : "ClearBoard" == b ? (lj.g(), tj()) : Q(qj, "Strange message from server: " + H(a))
};
rj.prototype.reset = function(a) {
  qj.info("resetting with reason: " + a);
  this.D.reset(a)
};
var sj = k, uj = new Uc(s.window);
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
  yg(a.D, ya(["ClearBoard", k]))
}
function zj(a) {
  var b = new kc(a), a = b.offsetX, b = b.offsetY;
  lj.sc(a, b, 5, 5, new oi, new ni(mj), h);
  var c = sj, d = mj;
  qj.info("Telling server about circle at: " + a + ", " + b + " with color " + d);
  yg(c.D, ya(["Point", {x:a, y:b, color:d}]))
}
function tj() {
  var a;
  a = I && !K("9") ? new Fi(800, 600, h, h, h) : J && (!K("420") || Ob) ? new Ri(800, 600, h, h, h) : new wi(800, 600, h, h, h);
  a.i();
  nj = O("drawArea");
  ce(a, nj);
  lj = a
}
var kj = "#E06666";
function Aj(a) {
  var b;
  (a = a.target.Cd()) ? (a = a.style[Ta("background-color")] || "", b = jj(a)) : b = k;
  b || (b = kj);
  mj = b;
  Vh.set("whiteboard_defaultColor", b);
  a = O("whiteboard-cp-value");
  w("background-color") ? Ld(a, b, "background-color") : sa("background-color", qa(Ld, a));
  a = O("whiteboard-cp-value");
  a.title = b;
  b = qh(b).Fc;
  td(a, b);
  b = wh(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = uh(b[0], b[1], b[2]);
  w("color") ? Ld(a, b, "color") : sa("color", qa(Ld, a))
}
function Bj() {
  oj = (new xf(document.location)).S;
  if(pj = Boolean(Number(oj.get("logging", "0")))) {
    De().Xc(xe);
    var a = new ci(document.getElementById("log"));
    if(j != a.df) {
      var b = De(), c = a.Og;
      b.Yb || (b.Yb = []);
      b.Yb.push(c);
      a.df = j
    }
  }else {
    De().Xc(pe)
  }
  qj.info("Logger works.");
  (a = Vh.get("whiteboard_defaultColor")) && (kj = a);
  mj = kj;
  b = O("whiteboard-controls-left");
  a = O("whiteboard-controls-right");
  c = jd("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  pd(b, c);
  c = jd("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  pd(b, c);
  b = new gj("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.Z(8);
  ce(b, O("whiteboard-cp"));
  M(b, "action", Aj);
  ij(b);
  Aj({target:b});
  b = new oh("Clear board");
  dh(b, "clear-board-button");
  ce(b, a);
  M(b, "action", yj);
  a = O("drawAreaOverlay");
  Td(a, j);
  M(a, "click", zj, m);
  tj();
  a = new Sh;
  sj = new rj;
  xj();
  c = (new xf(document.location)).S;
  b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !s.__demo_shared_domain) {
    Q(Rh, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new xf(document.location);
  b ? b = new ig("/_minerva/", c.la, s.__demo_mainSocketPort) : (d ? (b = s.__demo_shared_domain, w(b) || e(Error("domain was " + H(b) + "; expected a string.")), c = c.L(), Af(c, "_____random_____." + b)) : c = c.L(), c.mb("/_minerva/"), Cf(c, "", h), b = new kg(c.toString().replace("_____random_____", "%random%")));
  a = new qg(b, a, uj);
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
