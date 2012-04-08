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
  this.Qc = h
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
          c.push(f), f = b[g], ya(a, a.Qc ? a.Qc.call(b, "" + g, f) : f, c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), Aa(g, c), c.push(":"), ya(a, a.Qc ? a.Qc.call(b, g, f) : f, c), d = ","))
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
  Error.captureStackTrace ? Error.captureStackTrace(this, D) : this.stack = Error().stack || "";
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
var Qa = 2147483648 * Math.random() | 0;
function Ra(a) {
  return("" + a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  })
}
;function Sa(a, b) {
  b.unshift(a);
  D.call(this, Ea.apply(k, b));
  b.shift()
}
C(Sa, D);
Sa.prototype.name = "AssertionError";
function Ta(a, b) {
  e(new Sa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var E = Array.prototype, Ua = E.indexOf ? function(a, b, c) {
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
}, Va = E.filter ? function(a, b, c) {
  return E.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = [], g = 0, i = w(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in i) {
      var o = i[l];
      b.call(c, o, l, a) && (f[g++] = o)
    }
  }
  return f
}, Wa = E.map ? function(a, b, c) {
  return E.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = w(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in g && (f[i] = b.call(c, g[i], i, a))
  }
  return f
}, Xa = E.some ? function(a, b, c) {
  return E.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return j
    }
  }
  return m
}, Ya = E.every ? function(a, b, c) {
  return E.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && !b.call(c, f[g], g, a)) {
      return m
    }
  }
  return j
};
function Za(a, b) {
  return 0 <= Ua(a, b)
}
function $a(a) {
  if(!v(a)) {
    for(var b = a.length - 1;0 <= b;b--) {
      delete a[b]
    }
  }
  a.length = 0
}
function ab(a, b) {
  var c = Ua(a, b);
  0 <= c && E.splice.call(a, c, 1)
}
function bb(a) {
  return E.concat.apply(E, arguments)
}
function cb(a) {
  if(v(a)) {
    return bb(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
}
function db(a, b) {
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
function eb(a, b, c) {
  return 2 >= arguments.length ? E.slice.call(a, b) : E.slice.call(a, b, c)
}
function fb(a, b) {
  E.sort.call(a, b || gb)
}
function gb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function hb(a, b, c) {
  var d = Ua(c, a);
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
                  b.push(f), hb(a[g], b, c), f = ", "
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
                      g = d[i], Object.prototype.hasOwnProperty.call(a, g) && (l = a[g], b.push(f), Aa(g, b), b.push(": "), hb(l, b, c), f = ", ")
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
  hb(a, b, c)
}
function H(a) {
  var b = [];
  G(a, b, h);
  return b.join("")
}
;function ib(a) {
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
function jb(a) {
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
function kb(a) {
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
function lb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ga(a) || w(a)) {
      F(a, b, c)
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
  if(ga(a) || w(a)) {
    return Ya(a, b, h)
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
    a && this.hd(a)
  }
}
q = nb.prototype;
q.d = 0;
q.Q = n("d");
q.X = function() {
  ob(this);
  for(var a = [], b = 0;b < this.m.length;b++) {
    a.push(this.u[this.m[b]])
  }
  return a
};
q.ua = function() {
  ob(this);
  return this.m.concat()
};
q.aa = function(a) {
  return pb(this.u, a)
};
q.pc = function(a) {
  for(var b = 0;b < this.m.length;b++) {
    var c = this.m[b];
    if(pb(this.u, c) && this.u[c] == a) {
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
q.Na = function() {
  return 0 == this.d
};
q.clear = function() {
  this.u = {};
  this.d = this.m.length = 0
};
q.remove = function(a) {
  return pb(this.u, a) ? (delete this.u[a], this.d--, this.m.length > 2 * this.d && ob(this), j) : m
};
function ob(a) {
  if(a.d != a.m.length) {
    for(var b = 0, c = 0;b < a.m.length;) {
      var d = a.m[b];
      pb(a.u, d) && (a.m[c++] = d);
      b++
    }
    a.m.length = c
  }
  if(a.d != a.m.length) {
    for(var f = {}, c = b = 0;b < a.m.length;) {
      d = a.m[b], pb(f, d) || (a.m[c++] = d, f[d] = 1), b++
    }
    a.m.length = c
  }
}
q.get = function(a, b) {
  return pb(this.u, a) ? this.u[a] : b
};
q.set = function(a, b) {
  pb(this.u, a) || (this.d++, this.m.push(a));
  this.u[a] = b
};
q.hd = function(a) {
  var b;
  a instanceof nb ? (b = a.ua(), a = a.X()) : (b = ua(a), a = ta(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
q.L = function() {
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
;var tb, ub;
function vb(a, b) {
  this.qb = a;
  this.lb = b
}
vb.prototype.V = function(a) {
  return a instanceof vb && this.qb == a.qb && this.lb.join(",") == a.lb
};
vb.prototype.N = function(a, b) {
  a.push("new SACK(", "" + this.qb, ", ");
  G(this.lb, a, b);
  a.push(")")
};
function wb() {
  this.w = new nb
}
q = wb.prototype;
q.$a = -1;
q.n = 0;
q.append = function(a) {
  var b = sb(a);
  this.w.set(this.$a + 1, [a, b]);
  this.$a += 1;
  this.n += b
};
q.N = function(a) {
  a.push("<Queue with ", "" + this.w.Q(), " item(s), counter=#", "" + this.$a, ", size=", "" + this.n, ">")
};
function xb(a) {
  a = a.w.ua();
  fb(a);
  return a
}
q.Re = function(a) {
  for(var b = xb(this), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    (a == k || f >= a) && c.push([f, this.w.get(f)[0]])
  }
  return c
};
function yb() {
  this.Ya = new nb
}
yb.prototype.hb = -1;
yb.prototype.n = 0;
function zb(a) {
  var b = a.Ya.ua();
  fb(b);
  return new vb(a.hb, b)
}
var Ab = {};
function Bb() {
  return j
}
;var Cb, Db, Eb, Fb, Gb;
function Hb() {
  return s.navigator ? s.navigator.userAgent : k
}
Gb = Fb = Eb = Db = Cb = m;
var Ib;
if(Ib = Hb()) {
  var Jb = s.navigator;
  Cb = 0 == Ib.indexOf("Opera");
  Db = !Cb && -1 != Ib.indexOf("MSIE");
  Fb = (Eb = !Cb && -1 != Ib.indexOf("WebKit")) && -1 != Ib.indexOf("Mobile");
  Gb = !Cb && !Eb && "Gecko" == Jb.product
}
var Kb = Cb, I = Db, Lb = Gb, J = Eb, Mb = Fb, Nb = s.navigator, Ob = -1 != (Nb && Nb.platform || "").indexOf("Mac"), Pb;
a: {
  var Qb = "", Rb;
  if(Kb && s.opera) {
    var Sb = s.opera.version, Qb = "function" == typeof Sb ? Sb() : Sb
  }else {
    if(Lb ? Rb = /rv\:([^\);]+)(\)|;)/ : I ? Rb = /MSIE\s+([^\);]+)(\)|;)/ : J && (Rb = /WebKit\/(\S+)/), Rb) {
      var Tb = Rb.exec(Hb()), Qb = Tb ? Tb[1] : ""
    }
  }
  if(I) {
    var Ub, Vb = s.document;
    Ub = Vb ? Vb.documentMode : h;
    if(Ub > parseFloat(Qb)) {
      Pb = "" + Ub;
      break a
    }
  }
  Pb = Qb
}
var Wb = {};
function K(a) {
  return Wb[a] || (Wb[a] = 0 <= Pa(Pb, a))
}
var Xb = {};
function Yb() {
  return Xb[9] || (Xb[9] = I && !!document.documentMode && 9 <= document.documentMode)
}
;function Zb() {
}
var $b = 0;
q = Zb.prototype;
q.key = 0;
q.kb = m;
q.nd = m;
q.Yb = function(a, b, c, d, f, g) {
  ka(a) ? this.ff = j : a && a.handleEvent && ka(a.handleEvent) ? this.ff = m : e(Error("Invalid listener argument"));
  this.Cb = a;
  this.yf = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Cc = g;
  this.nd = m;
  this.key = ++$b;
  this.kb = m
};
q.handleEvent = function(a) {
  return this.ff ? this.Cb.call(this.Cc || this.src, a) : this.Cb.handleEvent.call(this.Cb, a)
};
var ac = !I || Yb(), bc = !I || Yb(), cc = I && !K("8");
!J || K("528");
Lb && K("1.9b") || I && K("8") || Kb && K("9.5") || J && K("528");
Lb && !K("8") || I && K("9");
var dc = {sh:"click", xh:"dblclick", Sh:"mousedown", Wh:"mouseup", Vh:"mouseover", Uh:"mouseout", Th:"mousemove", fi:"selectstart", Mh:"keypress", Lh:"keydown", Nh:"keyup", qh:"blur", Fh:"focus", yh:"deactivate", Gh:I ? "focusin" : "DOMFocusIn", Hh:I ? "focusout" : "DOMFocusOut", rh:"change", ei:"select", gi:"submit", Kh:"input", ai:"propertychange", Ch:"dragstart", zh:"dragenter", Bh:"dragover", Ah:"dragleave", Dh:"drop", ki:"touchstart", ji:"touchmove", ii:"touchend", hi:"touchcancel", uh:"contextmenu", 
Eh:"error", Jh:"help", Oh:"load", Ph:"losecapture", bi:"readystatechange", ci:"resize", di:"scroll", mi:"unload", Ih:"hashchange", Xh:"pagehide", Yh:"pageshow", $h:"popstate", vh:"copy", Zh:"paste", wh:"cut", nh:"beforecopy", oh:"beforecut", ph:"beforepaste", Rh:"message", th:"connect", li:J ? "webkitTransitionEnd" : Kb ? "oTransitionEnd" : "transitionend"};
function L() {
}
L.prototype.sa = m;
L.prototype.g = function() {
  this.sa || (this.sa = j, this.c())
};
L.prototype.c = function() {
  this.jg && ec.apply(k, this.jg)
};
function ec(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ga(d) ? ec.apply(k, d) : d && "function" == typeof d.g && d.g()
  }
}
;function fc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
C(fc, L);
q = fc.prototype;
q.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
q.jb = m;
q.defaultPrevented = m;
q.Rc = j;
q.stopPropagation = function() {
  this.jb = j
};
q.preventDefault = function() {
  this.defaultPrevented = j;
  this.Rc = m
};
function gc(a) {
  a.stopPropagation()
}
;function hc(a) {
  hc[" "](a);
  return a
}
hc[" "] = da;
function ic(a, b) {
  a && this.Yb(a, b)
}
C(ic, fc);
var jc = [1, 4, 2];
q = ic.prototype;
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
q.Yb = function(a, b) {
  var c = this.type = a.type;
  fc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Lb) {
      var f;
      a: {
        try {
          hc(d.nodeName);
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
  this.Zd = Ob ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Da = a;
  a.defaultPrevented && this.preventDefault();
  delete this.jb
};
function kc(a) {
  return ac ? 0 == a.Da.button : "click" == a.type ? j : !!(a.Da.button & jc[0])
}
q.stopPropagation = function() {
  ic.f.stopPropagation.call(this);
  this.Da.stopPropagation ? this.Da.stopPropagation() : this.Da.cancelBubble = j
};
q.preventDefault = function() {
  ic.f.preventDefault.call(this);
  var a = this.Da;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, cc) {
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
  ic.f.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Da = k
};
var lc = {}, mc = {}, nc = {}, oc = {};
function M(a, b, c, d, f) {
  if(b) {
    if(v(b)) {
      for(var g = 0;g < b.length;g++) {
        M(a, b[g], c, d, f)
      }
      return k
    }
    var d = !!d, i = mc;
    b in i || (i[b] = {d:0, ia:0});
    i = i[b];
    d in i || (i[d] = {d:0, ia:0}, i.d++);
    var i = i[d], l = la(a), o;
    i.ia++;
    if(i[l]) {
      o = i[l];
      for(g = 0;g < o.length;g++) {
        if(i = o[g], i.Cb == c && i.Cc == f) {
          if(i.kb) {
            break
          }
          return o[g].key
        }
      }
    }else {
      o = i[l] = [], i.d++
    }
    g = pc();
    g.src = a;
    i = new Zb;
    i.Yb(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    o.push(i);
    lc[c] = i;
    nc[l] || (nc[l] = []);
    nc[l].push(i);
    a.addEventListener ? (a == s || !a.td) && a.addEventListener(b, g, d) : a.attachEvent(b in oc ? oc[b] : oc[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function pc() {
  var a = qc, b = bc ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function rc(a, b, c, d, f) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      rc(a, b[g], c, d, f)
    }
    return k
  }
  a = M(a, b, c, d, f);
  lc[a].nd = j;
  return a
}
function sc(a, b, c, d, f) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      sc(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = tc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Cb == c && a[g].capture == d && a[g].Cc == f) {
          uc(a[g].key);
          break
        }
      }
    }
  }
}
function uc(a) {
  if(!lc[a]) {
    return m
  }
  var b = lc[a];
  if(b.kb) {
    return m
  }
  var c = b.src, d = b.type, f = b.yf, g = b.capture;
  c.removeEventListener ? (c == s || !c.td) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in oc ? oc[d] : oc[d] = "on" + d, f);
  c = la(c);
  f = mc[d][g][c];
  if(nc[c]) {
    var i = nc[c];
    ab(i, b);
    0 == i.length && delete nc[c]
  }
  b.kb = j;
  f.rf = j;
  vc(d, g, c, f);
  delete lc[a];
  return j
}
function vc(a, b, c, d) {
  if(!d.Jc && d.rf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].kb ? d[f].yf.src = k : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.rf = m;
    0 == g && (delete mc[a][b][c], mc[a][b].d--, 0 == mc[a][b].d && (delete mc[a][b], mc[a].d--), 0 == mc[a].d && delete mc[a])
  }
}
function wc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    sa(nc, function(a) {
      for(var f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          uc(g.key), c++
        }
      }
    })
  }else {
    if(a = la(a), nc[a]) {
      for(var a = nc[a], f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          uc(g.key), c++
        }
      }
    }
  }
}
function tc(a, b, c) {
  var d = mc;
  return b in d && (d = d[b], c in d && (d = d[c], a = la(a), d[a])) ? d[a] : k
}
function xc(a, b, c, d, f) {
  var g = 1, b = la(b);
  if(a[b]) {
    a.ia--;
    a = a[b];
    a.Jc ? a.Jc++ : a.Jc = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var o = a[l];
        o && !o.kb && (g &= yc(o, f) !== m)
      }
    }finally {
      a.Jc--, vc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function yc(a, b) {
  var c = a.handleEvent(b);
  a.nd && uc(a.key);
  return c
}
function qc(a, b) {
  if(!lc[a]) {
    return j
  }
  var c = lc[a], d = c.type, f = mc;
  if(!(d in f)) {
    return j
  }
  var f = f[d], g, i;
  if(!bc) {
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
    r = new ic;
    r.Yb(g, this);
    g = j;
    try {
      if(l) {
        for(var t = [], x = r.currentTarget;x;x = x.parentNode) {
          t.push(x)
        }
        i = f[j];
        i.ia = i.d;
        for(var A = t.length - 1;!r.jb && 0 <= A && i.ia;A--) {
          r.currentTarget = t[A], g &= xc(i, t[A], d, j, r)
        }
        if(o) {
          i = f[m];
          i.ia = i.d;
          for(A = 0;!r.jb && A < t.length && i.ia;A++) {
            r.currentTarget = t[A], g &= xc(i, t[A], d, m, r)
          }
        }
      }else {
        g = yc(c, r)
      }
    }finally {
      t && (t.length = 0), r.g()
    }
    return g
  }
  d = new ic(b, this);
  try {
    g = yc(c, d)
  }finally {
    d.g()
  }
  return g
}
var zc = 0;
function Ac() {
}
C(Ac, L);
q = Ac.prototype;
q.td = j;
q.Mc = k;
q.fe = aa("Mc");
q.addEventListener = function(a, b, c, d) {
  M(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  sc(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = mc;
  if(b in c) {
    if(w(a)) {
      a = new fc(a, this)
    }else {
      if(a instanceof fc) {
        a.target = a.target || this
      }else {
        var d = a, a = new fc(b, this);
        wa(a, d)
      }
    }
    var d = 1, f, c = c[b], b = j in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.Mc) {
        f.push(g)
      }
      g = c[j];
      g.ia = g.d;
      for(var i = f.length - 1;!a.jb && 0 <= i && g.ia;i--) {
        a.currentTarget = f[i], d &= xc(g, f[i], a.type, j, a) && a.Rc != m
      }
    }
    if(m in c) {
      if(g = c[m], g.ia = g.d, b) {
        for(i = 0;!a.jb && i < f.length && g.ia;i++) {
          a.currentTarget = f[i], d &= xc(g, f[i], a.type, m, a) && a.Rc != m
        }
      }else {
        for(f = this;!a.jb && f && g.ia;f = f.Mc) {
          a.currentTarget = f, d &= xc(g, f, a.type, m, a) && a.Rc != m
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
  Ac.f.c.call(this);
  wc(this);
  this.Mc = k
};
function Bc(a, b) {
  this.Fc = a || 1;
  this.hc = b || Cc;
  this.ld = y(this.$g, this);
  this.Pd = B()
}
C(Bc, Ac);
Bc.prototype.enabled = m;
var Cc = s.window;
q = Bc.prototype;
q.oa = k;
q.$g = function() {
  if(this.enabled) {
    var a = B() - this.Pd;
    0 < a && a < 0.8 * this.Fc ? this.oa = this.hc.setTimeout(this.ld, this.Fc - a) : (this.dispatchEvent(Dc), this.enabled && (this.oa = this.hc.setTimeout(this.ld, this.Fc), this.Pd = B()))
  }
};
q.start = function() {
  this.enabled = j;
  this.oa || (this.oa = this.hc.setTimeout(this.ld, this.Fc), this.Pd = B())
};
q.stop = function() {
  this.enabled = m;
  this.oa && (this.hc.clearTimeout(this.oa), this.oa = k)
};
q.c = function() {
  Bc.f.c.call(this);
  this.stop();
  delete this.hc
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
  this.mc = [];
  this.ze = a;
  this.He = b || k
}
q = Ec.prototype;
q.Ka = m;
q.Vb = m;
q.ac = 0;
q.ke = m;
q.eg = m;
q.md = 0;
q.cancel = function(a) {
  if(this.Ka) {
    this.cc instanceof Ec && this.cc.cancel()
  }else {
    if(this.H) {
      var b = this.H;
      delete this.H;
      a ? b.cancel(a) : (b.md--, 0 >= b.md && b.cancel())
    }
    this.ze ? this.ze.call(this.He, this) : this.ke = j;
    this.Ka || this.Tb(new Fc)
  }
};
q.Ce = function(a, b) {
  Gc(this, a, b);
  this.ac--;
  0 == this.ac && this.Ka && Hc(this)
};
function Gc(a, b, c) {
  a.Ka = j;
  a.cc = c;
  a.Vb = !b;
  Hc(a)
}
function Ic(a) {
  a.Ka && (a.ke || e(new Jc), a.ke = m)
}
function Kc(a, b) {
  Ic(a);
  Gc(a, j, b)
}
q.Tb = function(a) {
  Ic(this);
  Gc(this, m, a)
};
function Lc(a, b) {
  Mc(a, b, k, h)
}
function Nc(a, b) {
  Mc(a, k, b, h)
}
function Mc(a, b, c, d) {
  a.mc.push([b, c, d]);
  a.Ka && Hc(a)
}
function Oc(a, b) {
  Mc(a, b, b, h)
}
function Pc(a) {
  return Xa(a.mc, function(a) {
    return ka(a[1])
  })
}
function Hc(a) {
  a.te && (a.Ka && Pc(a)) && (s.clearTimeout(a.te), delete a.te);
  a.H && (a.H.md--, delete a.H);
  for(var b = a.cc, c = m, d = m;a.mc.length && 0 == a.ac;) {
    var f = a.mc.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.Vb ? i : g) {
      try {
        var l = g.call(f || a.He, b);
        u(l) && (a.Vb = a.Vb && (l == b || l instanceof Error), a.cc = b = l);
        b instanceof Ec && (d = j, a.ac++)
      }catch(o) {
        b = o, a.Vb = j, Pc(a) || (c = j)
      }
    }
  }
  a.cc = b;
  d && a.ac && (Mc(b, y(a.Ce, a, j), y(a.Ce, a, m)), b.eg = j);
  c && (a.te = s.setTimeout(function() {
    e(new Qc(b))
  }, 0))
}
function Rc(a) {
  var b = new Ec;
  Kc(b, a);
  return b
}
function Sc(a) {
  var b = new Ec;
  b.Tb(a);
  return b
}
function Jc() {
  D.call(this)
}
C(Jc, D);
Jc.prototype.message = "Already called";
function Fc() {
  D.call(this)
}
C(Fc, D);
Fc.prototype.message = "Deferred was cancelled";
function Qc(a) {
  D.call(this);
  this.message = "Unhandled Error in Deferred: " + (a.message || "[No message]")
}
C(Qc, D);
function Tc(a) {
  this.I = a;
  this.rc = [];
  this.Le = [];
  this.dg = y(this.fh, this)
}
Tc.prototype.oa = k;
function Uc(a, b, c, d) {
  a.rc.push([b, c, d]);
  a.oa == k && (a.oa = a.I.setTimeout(a.dg, 0))
}
Tc.prototype.fh = function() {
  this.oa = k;
  var a = this.rc;
  this.rc = [];
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
  if(0 == this.rc.length) {
    a = this.Le;
    this.Le = [];
    for(b = 0;b < a.length;b++) {
      Kc(a[b], k)
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
  for(var c = Xc(a), d = eb(arguments, 1), f = c.length + d.length, g = c, i = 0;i < d.length;i++) {
    Za(g, d[i]) || g.push(d[i])
  }
  a.className = c.join(" ");
  return c.length == f
}
function Zc(a, b) {
  var c = Xc(a), d = eb(arguments, 1), f = $c(c, d);
  a.className = f.join(" ");
  return f.length == c.length - d.length
}
function $c(a, b) {
  return Va(a, function(a) {
    return!Za(b, a)
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
var ad = !I || Yb();
!Lb && !I || I && Yb() || Lb && K("1.9.1");
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
  if(a.querySelectorAll && (a.querySelector && (!J || "CSS1Compat" == document.compatMode || K("528"))) && (b || c)) {
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
      b = i.className, "function" == typeof b.split && Za(b.split(/\s+/), c) && (d[f++] = i)
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
  2 < b.length && ld(a, c, b, 2);
  return c
}
function ld(a, b, c, d) {
  function f(c) {
    c && b.appendChild(w(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && 0 < g.nodeType) ? F(md(g) ? cb(g) : g, f) : f(g)
  }
}
function nd(a, b) {
  ld(ed(a), a, arguments, 1)
}
function od(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function pd(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function qd(a, b) {
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
function rd(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      od(a), a.appendChild(ed(a).createTextNode(b))
    }
  }
}
var sd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, td = {IMG:" ", BR:"\n"};
function ud(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ja(a) && 0 <= a && 32768 > a) : m
}
function vd(a) {
  var b = [];
  wd(a, b, m);
  return b.join("")
}
function wd(a, b, c) {
  if(!(a.nodeName in sd)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in td) {
        b.push(td[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          wd(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function md(a) {
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
q.append = nd;
q.contains = qd;
function xd(a, b) {
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
        a.push('<property id="', d, '">'), xd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', Ia(c), '">'), xd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function yd(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, f = arguments;
  d.push("<arguments>");
  for(var g = f.length, i = 1;i < g;i++) {
    xd(d, f[i])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var zd = m, Ad = "";
function Bd(a) {
  a = a.match(/[\d]+/g);
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var Cd = navigator.plugins["Shockwave Flash"];
  Cd && (zd = j, Cd.description && (Ad = Bd(Cd.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (zd = j, Ad = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var Dd = navigator.mimeTypes["application/x-shockwave-flash"];
    (zd = Dd && Dd.enabledPlugin) && (Ad = Bd(Dd.enabledPlugin.description))
  }else {
    try {
      var Ed = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), zd = j, Ad = Bd(Ed.GetVariable("$version"))
    }catch(Fd) {
      try {
        Ed = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), zd = j, Ad = "6.0.21"
      }catch(Gd) {
        try {
          Ed = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), zd = j, Ad = Bd(Ed.GetVariable("$version"))
        }catch(Hd) {
        }
      }
    }
  }
}
var Id = Ad;
function Jd(a, b, c) {
  a.style[Ra(c)] = b
}
function Kd(a, b) {
  var c = ed(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function Ld(a, b, c) {
  b instanceof N ? (c = b.height, b = b.width) : c == h && e(Error("missing height argument"));
  a.style.width = Md(b);
  a.style.height = Md(c)
}
function Md(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
function Nd(a) {
  if("none" != (Kd(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style && a.style.display)) {
    return Od(a)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = Od(a);
  b.display = c;
  b.position = f;
  b.visibility = d;
  return a
}
function Od(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = J && !b && !c;
  return(!u(b) || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), I && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new N(b.right - b.left, b.bottom - b.top)) : new N(b, c)
}
function Pd(a) {
  I ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[J ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var Qd = Lb ? "MozUserSelect" : J ? "WebkitUserSelect" : k;
function Rd(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Qd) {
    if(b = b ? "none" : "", a.style[Qd] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[Qd] = b
      }
    }
  }else {
    if(I || Kb) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
;function Sd(a) {
  this.eb = a;
  this.m = []
}
C(Sd, L);
var Td = [];
function P(a, b, c, d) {
  v(c) || (Td[0] = c, c = Td);
  for(var f = 0;f < c.length;f++) {
    a.m.push(M(b, c[f], d || a, m, a.eb || a))
  }
  return a
}
function Ud(a, b, c, d, f, g) {
  if(v(c)) {
    for(var i = 0;i < c.length;i++) {
      Ud(a, b, c[i], d, f, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.eb || a;
      f = !!f;
      if(b = tc(b, c, f)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].kb && b[c].Cb == d && b[c].capture == f && b[c].Cc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, uc(b), ab(a.m, b))
  }
  return a
}
Sd.prototype.$d = function() {
  F(this.m, uc);
  this.m.length = 0
};
Sd.prototype.c = function() {
  Sd.f.c.call(this);
  this.$d()
};
Sd.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Vd() {
}
ea(Vd);
Vd.prototype.Jg = 0;
Vd.La();
function Wd(a) {
  this.M = a || cd();
  this.dc = Xd
}
C(Wd, Ac);
Wd.prototype.Bg = Vd.La();
var Xd = k;
function Yd(a, b) {
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
q = Wd.prototype;
q.R = k;
q.q = m;
q.e = k;
q.dc = k;
q.H = k;
q.O = k;
q.nc = k;
q.gh = m;
function Zd(a) {
  return a.R || (a.R = ":" + (a.Bg.Jg++).toString(36))
}
q.b = n("e");
function $d(a) {
  return a.wb || (a.wb = new Sd(a))
}
q.getParent = n("H");
q.fe = function(a) {
  this.H && this.H != a && e(Error("Method not supported"));
  Wd.f.fe.call(this, a)
};
q.Fa = n("M");
q.i = function() {
  this.e = this.M.createElement("div")
};
function ae(a, b) {
  a.q && e(Error("Component already rendered"));
  a.e || a.i();
  b ? b.insertBefore(a.e, k) : a.M.p.body.appendChild(a.e);
  (!a.H || a.H.q) && a.P()
}
q.P = function() {
  this.q = j;
  be(this, function(a) {
    !a.q && a.b() && a.P()
  })
};
q.ab = function() {
  be(this, function(a) {
    a.q && a.ab()
  });
  this.wb && this.wb.$d();
  this.q = m
};
q.c = function() {
  Wd.f.c.call(this);
  this.q && this.ab();
  this.wb && (this.wb.g(), delete this.wb);
  be(this, function(a) {
    a.g()
  });
  !this.gh && this.e && pd(this.e);
  this.H = this.e = this.nc = this.O = k
};
q.Ub = n("e");
q.Ib = function(a) {
  this.q && e(Error("Component already rendered"));
  this.dc = a
};
function be(a, b) {
  a.O && F(a.O, b, h)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = w(a) ? a : Zd(a), d;
    this.nc && c ? (d = this.nc, d = (c in d ? d[c] : h) || k) : d = k;
    a = d;
    c && a && (d = this.nc, c in d && delete d[c], ab(this.O, a), b && (a.ab(), a.e && pd(a.e)), c = a, c == k && e(Error("Unable to set parent component")), c.H = k, Wd.f.fe.call(c, k))
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function ce(a) {
  this.u = new nb;
  a && this.hd(a)
}
function de(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + la(a) : b.substr(0, 1) + a
}
q = ce.prototype;
q.Q = function() {
  return this.u.Q()
};
q.add = function(a) {
  this.u.set(de(a), a)
};
q.hd = function(a) {
  for(var a = jb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
q.$d = function(a) {
  for(var a = jb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
q.remove = function(a) {
  return this.u.remove(de(a))
};
q.clear = function() {
  this.u.clear()
};
q.Na = function() {
  return this.u.Na()
};
q.contains = function(a) {
  return this.u.aa(de(a))
};
q.X = function() {
  return this.u.X()
};
q.L = function() {
  return new ce(this)
};
q.V = function(a) {
  return this.Q() == ib(a) && ee(this, a)
};
function ee(a, b) {
  var c = ib(b);
  if(a.Q() > c) {
    return m
  }
  !(b instanceof ce) && 5 < c && (b = new ce(b));
  return mb(a, function(a) {
    if("function" == typeof b.contains) {
      a = b.contains(a)
    }else {
      if("function" == typeof b.pc) {
        a = b.pc(a)
      }else {
        if(ga(b) || w(b)) {
          a = Za(b, a)
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
;function fe(a) {
  return ge(a || arguments.callee.caller, [])
}
function ge(a, b) {
  var c = [];
  if(Za(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(he(a) + "(");
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
            g = (g = he(g)) ? g : "[fn]";
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
        c.push(ge(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function he(a) {
  if(ie[a]) {
    return ie[a]
  }
  a = "" + a;
  if(!ie[a]) {
    var b = /function ([^\(]+)/.exec(a);
    ie[a] = b ? b[1] : "[Anonymous]"
  }
  return ie[a]
}
var ie = {};
function je(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
je.prototype.zd = k;
je.prototype.yd = k;
var ke = 0;
je.prototype.reset = function(a, b, c, d, f) {
  "number" == typeof f || ke++;
  this.Pf = d || B();
  this.Bb = a;
  this.pf = b;
  this.Eg = c;
  delete this.zd;
  delete this.yd
};
je.prototype.Wc = aa("Bb");
function le(a) {
  this.Ig = a
}
le.prototype.H = k;
le.prototype.Bb = k;
le.prototype.O = k;
le.prototype.Xb = k;
function me(a, b) {
  this.name = a;
  this.value = b
}
me.prototype.toString = n("name");
var ne = new me("OFF", Infinity), oe = new me("SHOUT", 1200), pe = new me("SEVERE", 1E3), qe = new me("WARNING", 900), re = new me("INFO", 800), se = new me("CONFIG", 700), te = new me("FINE", 500), ue = new me("FINEST", 300), ve = new me("ALL", 0);
q = le.prototype;
q.getParent = n("H");
q.Wc = aa("Bb");
function we(a) {
  if(a.Bb) {
    return a.Bb
  }
  if(a.H) {
    return we(a.H)
  }
  Ta("Root logger has no level set.");
  return k
}
q.log = function(a, b, c) {
  if(a.value >= we(this).value) {
    a = this.tg(a, b, c);
    b = "log:" + a.pf;
    s.console && (s.console.timeStamp ? s.console.timeStamp(b) : s.console.markTimeline && s.console.markTimeline(b));
    s.msWriteProfilerMark && s.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.Xb) {
        for(var f = 0, g = h;g = c.Xb[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
q.tg = function(a, b, c) {
  var d = new je(a, "" + b, this.Ig);
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
      f = "Message: " + Ia(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + Ia(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ia(fe(g) + "-> ")
    }catch(A) {
      f = "Exception trying to expose exception! You win, we lose. " + A
    }
    d.yd = f
  }
  return d
};
function xe(a, b) {
  a.log(pe, b, h)
}
function Q(a, b, c) {
  a.log(qe, b, c)
}
q.info = function(a, b) {
  this.log(re, a, b)
};
function R(a, b) {
  a.log(te, b, h)
}
function S(a, b) {
  a.log(ue, b, h)
}
var ye = {}, ze = k;
function Ae() {
  ze || (ze = new le(""), ye[""] = ze, ze.Wc(se))
}
function Be() {
  Ae();
  return ze
}
function T(a) {
  Ae();
  var b;
  if(!(b = ye[a])) {
    b = new le(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = T(a.substr(0, c));
    c.O || (c.O = {});
    c.O[d] = b;
    b.H = c;
    ye[a] = b
  }
  return b
}
;function Ce(a, b) {
  Wd.call(this, b);
  this.qg = a;
  this.xd = new Sd(this);
  this.tc = new nb
}
C(Ce, Wd);
q = Ce.prototype;
q.a = T("goog.ui.media.FlashObject");
q.ih = "window";
q.ye = "#000000";
q.$f = "sameDomain";
q.Z = function(a, b) {
  this.pb = w(a) ? a : Math.round(a) + "px";
  this.Hd = w(b) ? b : Math.round(b) + "px";
  this.b() && Ld(this.b() ? this.b().firstChild : k, this.pb, this.Hd);
  return this
};
q.P = function() {
  Ce.f.P.call(this);
  var a = this.b(), b;
  b = I ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = I ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = Ea(c, this.ih), d = this.tc.ua(), f = this.tc.X(), g = [], i = 0;i < d.length;i++) {
    var l = Ga(d[i]), o = Ga(f[i]);
    g.push(l + "=" + o)
  }
  b = Ea(b, Zd(this), Zd(this), "goog-ui-media-flash-object", Ia(this.qg), Ia(g.join("&")), this.ye, this.$f, c);
  a.innerHTML = b;
  this.pb && this.Hd && this.Z(this.pb, this.Hd);
  P(this.xd, this.b(), ta(dc), gc)
};
q.i = function() {
  this.Cf != k && !(0 <= Pa(Id, this.Cf)) && (Q(this.a, "Required flash version not found:" + this.Cf), e(Error("Method not supported")));
  var a = this.Fa().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
q.c = function() {
  Ce.f.c.call(this);
  this.tc = k;
  this.xd.g();
  this.xd = k
};
function De() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ B()).toString(36)
}
function Ee(a) {
  return a.substr(0, a.length - 1)
}
var Fe = /^(0|[1-9]\d*)$/, Ge = /^(0|\-?[1-9]\d*)$/;
function He(a) {
  var b = Ie;
  return Fe.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function Je(a) {
  D.call(this, a)
}
C(Je, D);
Je.prototype.name = "cw.loadflash.FlashLoadFailed";
s.__loadFlashObject_callbacks = {};
function Ke(a, b, c) {
  function d() {
    f && delete s.__loadFlashObject_callbacks[f]
  }
  var f;
  if(Lb && !K("1.8.1.20")) {
    return Sc(new Je("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Pa(Id, "9"))) {
    return Sc(new Je("Need Flash Player 9+; had " + (Id ? Id : "none")))
  }
  var g;
  f = "_" + De();
  var i = new Ec(d);
  s.__loadFlashObject_callbacks[f] = function() {
    a.setTimeout(function() {
      d();
      Kc(i, O(g))
    }, 0)
  };
  b.tc.set("onloadcallback", '__loadFlashObject_callbacks["' + f + '"]()');
  g = Zd(b);
  ae(b, c);
  return i
}
function Le(a, b, c) {
  var d = Ke(a, b, c), f = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  Oc(d, function(b) {
    a.clearTimeout(f);
    return b
  });
  return d
}
;function Me(a, b) {
  this.R = "_" + De();
  this.bd = a;
  this.Sa = b;
  this.Xa = a.Xa
}
C(Me, L);
q = Me.prototype;
q.Db = j;
q.rd = m;
q.a = T("cw.net.FlashSocket");
q.N = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.R);
  a.push("'>")
};
function Ne(a, b, c) {
  "frames" == b ? (a = a.Sa, Oe(a.K), Pe(a.K, c)) : "stillreceiving" == b ? (c = a.Sa, S(c.a, "onstillreceiving"), Oe(c.K)) : "connect" == b ? (c = a.Sa, c.a.info("onconnect"), Oe(c.K), a = c.Nb, c.Nb = k, a.length && (S(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.Zc.kc(a))) : "close" == b ? (a.Db = m, a.g()) : "ioerror" == b ? (a.Db = m, b = a.Sa, Q(b.a, "onioerror: " + H(c)), Qe(b.K, m), a.g()) : "securityerror" == b ? (a.Db = m, b = a.Sa, Q(b.a, "onsecurityerror: " + H(c)), 
  Qe(b.K, m), a.g()) : e(Error("bad event: " + b))
}
function Re(a) {
  a.rd = j;
  a.Db = m;
  a.g()
}
q.pd = function(a, b) {
  try {
    var c = this.Xa.CallFunction(yd("__FC_connect", this.R, a, b, "<int32/>\n"))
  }catch(d) {
    return xe(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), Re(this)
  }
  '"OK"' != c && e(Error("__FC_connect failed? ret: " + c))
};
q.kc = function(a) {
  try {
    var b = this.Xa.CallFunction(yd("__FC_writeFrames", this.R, a))
  }catch(c) {
    return xe(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), Re(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (Q(this.a, "Flash no longer knows of " + this.R + "; disposing."), this.g()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
q.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.Db);
  Me.f.c.call(this);
  var a = this.Xa;
  delete this.Xa;
  if(this.Db) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(yd("__FC_close", this.R)))
    }catch(b) {
      xe(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.rd = j
    }
  }
  if(this.rd) {
    a = this.Sa, Q(a.a, "oncrash"), Qe(a.K, j)
  }else {
    this.Sa.onclose()
  }
  delete this.Sa;
  delete this.bd.xb[this.R]
};
function Se(a, b) {
  this.v = a;
  this.Xa = b;
  this.xb = {};
  this.od = "__FST_" + De();
  s[this.od] = y(this.mg, this);
  var c = b.CallFunction(yd("__FC_setCallbackFunc", this.od));
  '"OK"' != c && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
C(Se, L);
q = Se.prototype;
q.a = T("cw.net.FlashSocketTracker");
q.N = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  G(this.xb, a, b);
  a.push(">")
};
q.sd = function(a) {
  a = new Me(this, a);
  return this.xb[a.R] = a
};
q.kg = function(a, b, c, d) {
  var f = this.xb[a];
  f ? "frames" == b && d ? (Ne(f, "ioerror", "FlashConnector hadError while handling data."), f.g()) : Ne(f, b, c) : Q(this.a, "Cannot dispatch because we have no instance: " + H([a, b, c, d]))
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
  Se.f.c.call(this);
  for(var a = ta(this.xb);a.length;) {
    a.pop().g()
  }
  delete this.xb;
  delete this.Xa;
  s[this.od] = h
};
function Te(a) {
  this.K = a;
  this.Nb = []
}
C(Te, L);
q = Te.prototype;
q.a = T("cw.net.FlashSocketConduit");
q.kc = function(a) {
  this.Nb ? (S(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Nb.push.apply(this.Nb, a)) : (S(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.Zc.kc(a))
};
q.pd = function(a, b) {
  this.Zc.pd(a, b)
};
q.onclose = function() {
  this.a.info("onclose");
  Qe(this.K, m)
};
q.c = function() {
  this.a.info("in disposeInternal.");
  Te.f.c.call(this);
  this.Zc.g();
  delete this.K
};
var Ue = [];
function Ve() {
  var a = new Ec;
  Ue.push(a);
  return a
}
function We(a) {
  var b = Ue;
  Ue = [];
  F(b, function(b) {
    Kc(b, a)
  })
}
function Xe(a, b) {
  if(Ue.length) {
    return Ve()
  }
  var c = new Ce(b + "FlashConnector.swf?cb=" + Ye);
  c.ye = "#777777";
  c.Z(300, 30);
  var d = O("minerva-elements");
  d || e(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
  var f = O("minerva-elements-FlashConnectorSwf");
  f || (f = id("div", {id:"minerva-elements-FlashConnectorSwf"}), d.appendChild(f));
  tb = Le(a.I, c, f);
  Lc(tb, We);
  return Ve()
}
;function Ze() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function $e(a) {
  return a * Math.PI / 180
}
;var Ie = Math.pow(2, 53);
var af = {Yf:p("<cw.eq.Wildcard>")};
function bf(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function cf(a, b, c) {
  var d = fa(a), f = fa(b);
  if(a == af || b == af) {
    return j
  }
  if(a != k && "function" == typeof a.V) {
    return c && c.push("running custom equals function on left object"), a.V(b, c)
  }
  if(b != k && "function" == typeof b.V) {
    return c && c.push("running custom equals function on right object"), b.V(a, c)
  }
  if(bf(d) || bf(f)) {
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
                if(!cf(a[d], b[d], c)) {
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
          if(a.Xf == Bb && b.Xf == Bb) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!cf(a[g], b[g], c)) {
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
  this.Oc = b
}
U.prototype.V = function(a, b) {
  return ia(a) && this.constructor == a.constructor && cf(this.Oc, a.Oc, b)
};
U.prototype.N = function(a, b) {
  a.push("new ", this.Qg, "(");
  for(var c = "", d = 0;d < this.Oc.length;d++) {
    a.push(c), c = ", ", G(this.Oc[d], a, b)
  }
  a.push(")")
};
function V(a) {
  D.call(this, a)
}
C(V, D);
V.prototype.name = "cw.net.InvalidFrame";
function df() {
  var a = [];
  this.ma(a);
  return a.join("")
}
function ef() {
}
ef.prototype.V = function(a, b) {
  return!(a instanceof ef) ? m : cf(ff(this), ff(a), b)
};
ef.prototype.N = function(a, b) {
  a.push("<HelloFrame properties=");
  G(ff(this), a, b);
  a.push(">")
};
function ff(a) {
  return[a.Kb, a.xf, a.$e, a.Bf, a.gc, a.ne, a.qf, a.of, a.Sd, a.mf, a.Tf, a.Of, a.Ua, a.Ic]
}
ef.prototype.ca = df;
ef.prototype.ma = function(a) {
  var b = {};
  b.tnum = this.Kb;
  b.ver = this.xf;
  b.format = this.$e;
  b["new"] = this.Bf;
  b.id = this.gc;
  b.ming = this.ne;
  b.pad = this.qf;
  b.maxb = this.of;
  u(this.Sd) && (b.maxt = this.Sd);
  b.maxia = this.mf;
  b.tcpack = this.Tf;
  b.eeds = this.Of;
  b.sack = this.Ua instanceof vb ? Ee((new gf(this.Ua)).ca()) : this.Ua;
  b.seenack = this.Ic instanceof vb ? Ee((new gf(this.Ic)).ca()) : this.Ic;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(xa(b), "H")
};
function hf(a) {
  U.call(this, "StringFrame", [a]);
  this.pe = a
}
C(hf, U);
hf.prototype.ca = df;
hf.prototype.ma = function(a) {
  a.push(this.pe, " ")
};
function jf(a) {
  U.call(this, "CommentFrame", [a]);
  this.fg = a
}
C(jf, U);
jf.prototype.ca = df;
jf.prototype.ma = function(a) {
  a.push(this.fg, "^")
};
function kf(a) {
  U.call(this, "SeqNumFrame", [a]);
  this.If = a
}
C(kf, U);
kf.prototype.ca = df;
kf.prototype.ma = function(a) {
  a.push("" + this.If, "N")
};
function lf(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = Ie;
    if(Ge.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var g = He(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new vb(a, c)
}
function gf(a) {
  U.call(this, "SackFrame", [a]);
  this.Ua = a
}
C(gf, U);
gf.prototype.ca = df;
gf.prototype.ma = function(a) {
  var b = this.Ua;
  a.push(b.lb.join(","), "|", "" + b.qb);
  a.push("A")
};
function mf(a) {
  U.call(this, "StreamStatusFrame", [a]);
  this.hf = a
}
C(mf, U);
mf.prototype.ca = df;
mf.prototype.ma = function(a) {
  var b = this.hf;
  a.push(b.lb.join(","), "|", "" + b.qb);
  a.push("T")
};
function nf() {
  U.call(this, "StreamCreatedFrame", [])
}
C(nf, U);
nf.prototype.ca = df;
nf.prototype.ma = function(a) {
  a.push("C")
};
function of() {
  U.call(this, "YouCloseItFrame", [])
}
C(of, U);
of.prototype.ca = df;
of.prototype.ma = function(a) {
  a.push("Y")
};
function pf(a, b) {
  U.call(this, "ResetFrame", [a, b]);
  this.zf = a;
  this.xe = b
}
C(pf, U);
pf.prototype.ca = df;
pf.prototype.ma = function(a) {
  a.push(this.zf, "|", "" + Number(this.xe), "!")
};
var qf = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function rf(a) {
  U.call(this, "TransportKillFrame", [a]);
  this.reason = a
}
C(rf, U);
rf.prototype.ca = df;
rf.prototype.ma = function(a) {
  a.push(this.reason, "K")
};
function sf(a) {
  a || e(new V("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new hf(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = lf(Ee(a)), a == k && e(new V("bad sack")), new gf(a)
  }
  if("N" == b) {
    return a = He(Ee(a)), a == k && e(new V("bad seqNum")), new kf(a)
  }
  if("T" == b) {
    return a = lf(Ee(a)), a == k && e(new V("bad lastSackSeen")), new mf(a)
  }
  if("Y" == b) {
    return 1 != a.length && e(new V("leading garbage")), new of
  }
  if("^" == b) {
    return new jf(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && e(new V("leading garbage")), new nf
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && e(new V("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && e(new V("bad applicationLevel")), new pf(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = qf[a], a == k && e(new V("unknown kill reason: " + a)), new rf(a)
  }
  e(new V("Invalid frame type " + b))
}
;var tf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function uf(a, b) {
  var c = a.match(tf), d = b.match(tf);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function vf(a, b) {
  var c;
  a instanceof vf ? (this.Hb(b == k ? a.wa : b), wf(this, a.za), xf(this, a.ob), yf(this, a.la), zf(this, a.Ra), this.mb(a.z), Af(this, a.S.L()), Bf(this, a.bb)) : a && (c = ("" + a).match(tf)) ? (this.Hb(!!b), wf(this, c[1] || "", j), xf(this, c[2] || "", j), yf(this, c[3] || "", j), zf(this, c[4]), this.mb(c[5] || "", j), Af(this, c[6] || "", j), Bf(this, c[7] || "", j)) : (this.Hb(!!b), this.S = new Cf(k, this, this.wa))
}
q = vf.prototype;
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
  this.za && a.push(Df(this.za, Ef), ":");
  this.la && (a.push("//"), this.ob && a.push(Df(this.ob, Ef), "@"), a.push(w(this.la) ? encodeURIComponent(this.la) : k), this.Ra != k && a.push(":", "" + this.Ra));
  this.z && (this.la && "/" != this.z.charAt(0) && a.push("/"), a.push(Df(this.z, "/" == this.z.charAt(0) ? Ff : Gf)));
  var b = "" + this.S;
  b && a.push("?", b);
  this.bb && a.push("#", Df(this.bb, Hf));
  return this.qa = a.join("")
};
q.L = function() {
  var a = this.za, b = this.ob, c = this.la, d = this.Ra, f = this.z, g = this.S.L(), i = this.bb, l = new vf(k, this.wa);
  a && wf(l, a);
  b && xf(l, b);
  c && yf(l, c);
  d && zf(l, d);
  f && l.mb(f);
  g && Af(l, g);
  i && Bf(l, i);
  return l
};
function wf(a, b, c) {
  If(a);
  delete a.qa;
  a.za = c ? b ? decodeURIComponent(b) : "" : b;
  a.za && (a.za = a.za.replace(/:$/, ""))
}
function xf(a, b, c) {
  If(a);
  delete a.qa;
  a.ob = c ? b ? decodeURIComponent(b) : "" : b
}
function yf(a, b, c) {
  If(a);
  delete a.qa;
  a.la = c ? b ? decodeURIComponent(b) : "" : b
}
function zf(a, b) {
  If(a);
  delete a.qa;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.Ra = b) : a.Ra = k
}
q.mb = function(a, b) {
  If(this);
  delete this.qa;
  this.z = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function Af(a, b, c) {
  If(a);
  delete a.qa;
  b instanceof Cf ? (a.S = b, a.S.ue = a, a.S.Hb(a.wa)) : (c || (b = Df(b, Jf)), a.S = new Cf(b, a, a.wa))
}
function Bf(a, b, c) {
  If(a);
  delete a.qa;
  a.bb = c ? b ? decodeURIComponent(b) : "" : b
}
function If(a) {
  a.Cg && e(Error("Tried to modify a read-only Uri"))
}
q.Hb = function(a) {
  this.wa = a;
  this.S && this.S.Hb(a);
  return this
};
function Kf(a) {
  return a instanceof vf ? a.L() : new vf(a, h)
}
var Lf = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Df(a, b) {
  var c = k;
  w(a) && (c = a, Lf.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, Mf)));
  return c
}
function Mf(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Ef = /[#\/\?@]/g, Gf = /[\#\?:]/g, Ff = /[\#\?]/g, Jf = /[\#\?@]/g, Hf = /#/g;
function Cf(a, b, c) {
  this.Ca = a || k;
  this.ue = b || k;
  this.wa = !!c
}
function Nf(a) {
  if(!a.o && (a.o = new nb, a.d = 0, a.Ca)) {
    for(var b = a.Ca.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = Of(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
q = Cf.prototype;
q.o = k;
q.d = k;
q.Q = function() {
  Nf(this);
  return this.d
};
q.add = function(a, b) {
  Nf(this);
  Pf(this);
  a = Of(this, a);
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
  Nf(this);
  a = Of(this, a);
  if(this.o.aa(a)) {
    Pf(this);
    var b = this.o.get(a);
    v(b) ? this.d -= b.length : this.d--;
    return this.o.remove(a)
  }
  return m
};
q.clear = function() {
  Pf(this);
  this.o && this.o.clear();
  this.d = 0
};
q.Na = function() {
  Nf(this);
  return 0 == this.d
};
q.aa = function(a) {
  Nf(this);
  a = Of(this, a);
  return this.o.aa(a)
};
q.pc = function(a) {
  var b = this.X();
  return Za(b, a)
};
q.ua = function() {
  Nf(this);
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
  Nf(this);
  var b = [];
  if(a) {
    a = Of(this, a), this.aa(a) && (b = bb(b, this.o.get(a)))
  }else {
    for(var a = this.o.X(), c = 0;c < a.length;c++) {
      b = bb(b, a[c])
    }
  }
  return b
};
q.set = function(a, b) {
  Nf(this);
  Pf(this);
  a = Of(this, a);
  if(this.aa(a)) {
    var c = this.o.get(a);
    v(c) ? this.d -= c.length : this.d--
  }
  this.o.set(a, b);
  this.d++;
  return this
};
q.get = function(a, b) {
  Nf(this);
  a = Of(this, a);
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
function Pf(a) {
  delete a.vb;
  delete a.Ca;
  a.ue && delete a.ue.qa
}
q.L = function() {
  var a = new Cf;
  this.vb && (a.vb = this.vb);
  this.Ca && (a.Ca = this.Ca);
  this.o && (a.o = this.o.L());
  return a
};
function Of(a, b) {
  var c = "" + b;
  a.wa && (c = c.toLowerCase());
  return c
}
q.Hb = function(a) {
  a && !this.wa && (Nf(this), Pf(this), lb(this.o, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.wa = a
};
function Qf(a, b, c, d) {
  this.contentWindow = a;
  this.sc = b;
  this.oe = c;
  this.rg = d
}
Qf.prototype.N = function(a, b) {
  a.push("<XDRFrame frameId=");
  G(this.rg, a, b);
  a.push(", expandedUrl=");
  G(this.sc, a, b);
  a.push(", streams=");
  G(this.oe, a, b);
  a.push(">")
};
function Rf() {
  this.frames = [];
  this.Qd = new nb
}
Rf.prototype.a = T("cw.net.XDRTracker");
function Sf(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor(Ze()) + ("" + Math.floor(Ze()))
  })
}
function Tf(a, b) {
  for(var c = Uf, d = 0;d < c.frames.length;d++) {
    var f = c.frames[d], g;
    if(g = 0 == f.oe.length) {
      g = f.sc;
      var i = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + i + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + H(b) + " existing frame " + H(f)), Rc(f)
    }
  }
  d = De() + De();
  f = Sf(a);
  g = s.location;
  g instanceof vf || (g = Kf(g));
  f instanceof vf || (f = Kf(f));
  var l = g;
  g = l.L();
  (i = !!f.za) ? wf(g, f.za) : i = !!f.ob;
  i ? xf(g, f.ob) : i = !!f.la;
  i ? yf(g, f.la) : i = f.Ra != k;
  var o = f.z;
  if(i) {
    zf(g, f.Ra)
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
  i ? (l = f.S, l.vb || (l.vb = l.toString() ? decodeURIComponent(l.toString()) : ""), Af(g, l.vb, h)) : i = !!f.bb;
  i && Bf(g, f.bb);
  f = g.toString();
  g = ("" + s.location).match(tf)[3] || k;
  i = f.match(tf)[3] || k;
  g == i ? (c.a.info("No need to make a real XDRFrame for " + H(b)), c = Rc(new Qf(s, f, [b], k))) : ((g = O("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new Ec, c.Qd.set(d, [i, f, b]), c.a.info("Creating new XDRFrame " + H(d) + "for " + H(b)), c = id("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:f + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = i);
  return c
}
Rf.prototype.lh = function(a) {
  var b = this.Qd.get(a);
  b || e(Error("Unknown frameId " + H(a)));
  this.Qd.remove(b);
  var c = b[0], a = new Qf(O("minerva-xdrframe-" + a).contentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  Kc(c, a)
};
var Uf = new Rf;
s.__XHRTracker_xdrFrameLoaded = y(Uf.lh, Uf);
var Vf;
Vf = m;
var Wf = Hb();
Wf && (-1 != Wf.indexOf("Firefox") || -1 != Wf.indexOf("Camino") || -1 != Wf.indexOf("iPhone") || -1 != Wf.indexOf("iPod") || -1 != Wf.indexOf("iPad") || -1 != Wf.indexOf("Android") || -1 != Wf.indexOf("Chrome") && (Vf = j));
var Xf = Vf;
var Ye = "4bdfc178fc0e508c0cd5efc3fdb09920";
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function Yf(a, b, c, d, f, g) {
  Ec.call(this, f, g);
  this.lf = a;
  this.ud = [];
  this.Ne = !!b;
  this.pg = !!c;
  this.gg = !!d;
  for(b = 0;b < a.length;b++) {
    Mc(a[b], y(this.Ve, this, b, j), y(this.Ve, this, b, m))
  }
  0 == a.length && !this.Ne && Kc(this, this.ud)
}
C(Yf, Ec);
Yf.prototype.sf = 0;
Yf.prototype.Ve = function(a, b, c) {
  this.sf++;
  this.ud[a] = [b, c];
  this.Ka || (this.Ne && b ? Kc(this, [a, c]) : this.pg && !b ? this.Tb(c) : this.sf == this.lf.length && Kc(this, this.ud));
  this.gg && !b && (c = k);
  return c
};
Yf.prototype.Tb = function(a) {
  Yf.f.Tb.call(this, a);
  F(this.lf, function(a) {
    a.cancel()
  })
};
function Zf(a) {
  a = new Yf(a, m, j);
  Lc(a, function(a) {
    return Wa(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function $f(a, b) {
  this.jh = a;
  this.nf = b
}
$f.prototype.Nd = 0;
$f.prototype.Lc = 0;
$f.prototype.Ad = m;
function ag(a) {
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
    var f = d.substr(a.Lc, c - a.Lc), f = f.replace(/\r$/, "");
    if(f.length > a.nf) {
      return a.Ad = j, [b, 2]
    }
    b.push(f);
    a.Lc = c += 1
  }
  return a.Nd - a.Lc - 1 > a.nf ? (a.Ad = j, [b, 2]) : [b, 1]
}
;function bg(a, b, c) {
  this.K = b;
  this.na = a;
  this.qd = c
}
C(bg, L);
q = bg.prototype;
q.a = T("cw.net.XHRMaster");
q.Ta = -1;
q.Rd = function(a, b, c) {
  this.qd.__XHRSlave_makeRequest(this.na, a, b, c)
};
q.Ma = n("Ta");
q.Ud = function(a, b) {
  1 != b && xe(this.a, H(this.na) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Oe(this.K);
  Pe(this.K, a)
};
q.Vd = function(a) {
  R(this.a, "ongotheaders_: " + H(a));
  var b = k;
  "Content-Length" in a && (b = He(a["Content-Length"]));
  a = this.K;
  R(a.a, a.s() + " got Content-Length: " + b);
  a.Aa == cg && (b == k && (Q(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), dg(a, 2E3 + 1E3 * (b / 3072)))
};
q.Wd = function(a) {
  1 != a && R(this.a, this.K.s() + "'s XHR's readyState is " + a);
  this.Ta = a;
  2 <= this.Ta && Oe(this.K)
};
q.Td = function() {
  this.K.g()
};
q.c = function() {
  bg.f.c.call(this);
  delete eg.Ga[this.na];
  this.qd.__XHRSlave_dispose(this.na);
  delete this.qd
};
function fg() {
  this.Ga = {}
}
C(fg, L);
q = fg.prototype;
q.a = T("cw.net.XHRMasterTracker");
q.sd = function(a, b) {
  var c = "_" + De(), d = new bg(c, a, b);
  return this.Ga[c] = d
};
q.Ud = function(a, b, c) {
  if(Lb) {
    for(var d = [], f = 0, g = b.length;f < g;f++) {
      d[f] = b[f]
    }
    b = d
  }else {
    b = bb(b)
  }
  (d = this.Ga[a]) ? d.Ud(b, c) : xe(this.a, "onframes_: no master for " + H(a))
};
q.Vd = function(a, b) {
  var c = this.Ga[a];
  c ? c.Vd(b) : xe(this.a, "ongotheaders_: no master for " + H(a))
};
q.Wd = function(a, b) {
  var c = this.Ga[a];
  c ? c.Wd(b) : xe(this.a, "onreadystatechange_: no master for " + H(a))
};
q.Td = function(a) {
  var b = this.Ga[a];
  b ? (delete this.Ga[b.na], b.Td()) : xe(this.a, "oncomplete_: no master for " + H(a))
};
q.c = function() {
  fg.f.c.call(this);
  for(var a = ta(this.Ga);a.length;) {
    a.pop().g()
  }
  delete this.Ga
};
var eg = new fg;
s.__XHRMaster_onframes = y(eg.Ud, eg);
s.__XHRMaster_oncomplete = y(eg.Td, eg);
s.__XHRMaster_ongotheaders = y(eg.Vd, eg);
s.__XHRMaster_onreadystatechange = y(eg.Wd, eg);
function gg(a, b, c) {
  this.xa = a;
  this.host = b;
  this.port = c
}
function hg(a, b, c) {
  this.host = a;
  this.port = b;
  this.dh = c
}
function ig(a, b) {
  b || (b = a);
  this.xa = a;
  this.Va = b
}
ig.prototype.N = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  G(this.xa, a, b);
  a.push(", secondaryUrl=");
  G(this.Va, a, b);
  a.push(">")
};
function jg(a, b, c, d) {
  this.xa = a;
  this.wf = b;
  this.Va = c;
  this.Hf = d;
  (!(0 == this.xa.indexOf("http://") || 0 == this.xa.indexOf("https://")) || !(0 == this.Va.indexOf("http://") || 0 == this.Va.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.wf.location.href;
  uf(this.xa, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Hf.location.href;
  uf(this.Va, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
jg.prototype.N = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  G(this.xa, a, b);
  a.push(", secondaryUrl=");
  G(this.Va, a, b);
  a.push(">")
};
var kg = new jf(";)]}");
function lg() {
}
lg.prototype.Qe = p(1);
function mg(a) {
  s.setTimeout(function() {
    u(a.message) && a.stack && (a.message += "\n" + a.stack);
    e(a)
  }, 0)
}
function ng(a) {
  this.Yg = a
}
ng.prototype.N = function(a, b) {
  a.push("<UserContext for ");
  G(this.Yg, a, b);
  a.push(">")
};
function og(a, b, c) {
  this.A = a;
  this.Zg = b ? b : new lg;
  this.v = c ? c : Vc;
  this.ic = new ce;
  this.gc = De() + De();
  this.ya = new wb;
  this.Kd = new yb;
  this.jc = k;
  this.ed = [];
  this.dd = new ng(this);
  this.cg = y(this.eh, this);
  J && (this.jc = rc(s, "load", this.Sg, m, this))
}
C(og, L);
q = og.prototype;
q.a = T("cw.net.ClientStream");
q.jf = new vb(-1, []);
q.kf = new vb(-1, []);
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
q.bc = k;
q.me = 0;
q.vf = 0;
q.Gf = 0;
q.N = function(a, b) {
  a.push("<ClientStream id=");
  G(this.gc, a, b);
  a.push(", state=", "" + this.h);
  a.push(", primary=");
  G(this.j, a, b);
  a.push(", secondary=");
  G(this.B, a, b);
  a.push(", resetting=");
  G(this.bc, a, b);
  a.push(">")
};
function pg(a) {
  var b = [-1];
  a.j && b.push(a.j.Eb);
  a.B && b.push(a.B.Eb);
  return Math.max.apply(Math.max, b)
}
function qg(a) {
  if(!(3 > a.h)) {
    rg(a);
    var b = 0 != a.ya.w.Q(), c = zb(a.Kd), d = !c.V(a.kf) && !(a.j && c.V(a.j.Ab) || a.B && c.V(a.B.Ab)), f = pg(a);
    if((b = b && f < a.ya.$a) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.j.Ob ? (S(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.j, c != d.Ab && (!d.Ha && !d.F.length && sg(d), d.F.push(new gf(c)), d.Ab = c)), b && tg(a.j, a.ya, f + 1), a.j.Ea()) : a.B == k ? a.le ? (S(a.a, "tryToSend_: creating secondary to send " + g), a.B = ug(a, m), b && tg(a.B, a.ya, f + 1), a.B.Ea()) : (S(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.ae = j) : S(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
function rg(a) {
  a.Gb != k && (a.v.I.clearTimeout(a.Gb), a.Gb = k)
}
q.eh = function() {
  this.Gb = k;
  qg(this)
};
function vg(a) {
  a.Gb == k && (a.Gb = a.v.I.setTimeout(a.cg, 6))
}
q.Sg = function() {
  this.jc = k;
  if(this.j && this.j.yb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.j;
    a.gd = j;
    a.g()
  }
  this.B && this.B.yb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.B, a.gd = j, a.g())
};
function wg(a, b) {
  var c;
  u(c) || (c = j);
  3 < a.h && e(Error("sendString: Can't send in state " + a.h));
  c && (w(b) || e(Error("sendString: not a string: " + H(b))), /^([ -~]*)$/.test(b) || e(Error("sendString: string has illegal chars: " + H(b))));
  a.ya.append(b);
  vg(a)
}
function ug(a, b) {
  var c;
  a.A instanceof jg ? c = 1 == a.Zg.Qe() ? cg : xg : a.A instanceof hg ? c = yg : e(Error("Don't support endpoint " + H(a.A)));
  a.re += 1;
  c = new zg(a.v, a, a.re, c, a.A, b);
  S(a.a, "Created: " + c.s());
  a.ic.add(c);
  return c
}
function Ag(a, b, c) {
  var d = new Bg(a.v, a, b, c);
  S(a.a, "Created: " + d.s() + ", delay=" + b + ", times=" + c);
  a.ic.add(d);
  return d
}
function Cg(a, b) {
  a.ic.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  R(a.a, "Offline: " + b.s());
  a.me = b.Qa ? a.me + b.Qa : 0;
  1 <= a.me && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), Dg(a, "stream penalty reached limit", m), a.g());
  if(3 < a.h) {
    4 == a.h && b.Wf ? (R(a.a, "Disposing because resettingTransport_ is done."), a.g()) : R(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    var c;
    var d;
    c = b instanceof Bg;
    if(!c && b.gd) {
      var f = J ? Xf ? [0, 1] : [9, 20] : [0, 0];
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
    b == a.j ? (a.j = k, c ? a.j = Ag(a, f, c) : (f = pg(a), a.j = ug(a, j), tg(a.j, a.ya, f + 1)), a.j.Ea()) : b == a.B && (a.B = k, c ? (a.B = Ag(a, f, c), a.B.Ea()) : qg(a))
  }
}
function Dg(a, b, c) {
  if(a.onreset) {
    try {
      a.onreset.call(a.dd, b, c)
    }catch(d) {
      Q(a.a, "onreset raised uncaught exception", d), mg(d)
    }
  }
}
q.reset = function(a) {
  3 < this.h && e(Error("reset: Can't send reset in state " + this.h));
  rg(this);
  0 != this.ya.w.Q() && Q(this.a, "reset: strings in send queue will never be sent: " + H(this.ya));
  this.h = 4;
  this.j && this.j.Ob ? (this.a.info("reset: Sending ResetFrame over existing primary."), Eg(this.j, a), this.j.Ea()) : (this.j && (R(this.a, "reset: Disposing primary before sending ResetFrame."), this.j.g()), this.B && (R(this.a, "reset: Disposing secondary before sending ResetFrame."), this.B.g()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.bc = ug(this, m), Eg(this.bc, a), this.bc.Ea());
  Dg(this, a, j)
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
        t = f.Ya.get(x, Ab);
        if(t === Ab) {
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
        var A = sb(t);
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
          a.Yd.call(a.dd, i)
        }catch(kd) {
          Q(a.a, "onstring raised uncaught exception", kd), mg(kd)
        }
      }
      if(4 == a.h || a.sa) {
        return
      }
    }
  }
  d || vg(a);
  if(!(4 == a.h || a.sa) && f) {
    xe(b.a, b.s() + "'s peer caused rwin overflow."), b.g()
  }
}
q.Ke = function(a) {
  xe(this.a, "Failed to start " + H(this) + "; error was " + H(a.message));
  this.g()
};
q.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.h && e(Error("ClientStream.start: " + H(this) + " already started"));
  this.Xd && this.Xd(this);
  this.h = 2;
  if(this.A instanceof ig) {
    var a = Tf(this.A.xa, this), b = Tf(this.A.Va, this), a = Zf([a, b]);
    Lc(a, y(this.og, this));
    Nc(a, y(this.Ke, this))
  }else {
    if(this.A instanceof gg) {
      if(ub) {
        this.Me()
      }else {
        var a = Xe(this.v, this.A.xa), c = this;
        Lc(a, function(a) {
          ub || (ub = new Se(c.v, a));
          return k
        });
        Lc(a, y(this.Me, this));
        Nc(a, y(this.Ke, this))
      }
    }else {
      Gg(this)
    }
  }
};
q.og = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].sc, f = a[1].sc;
  this.ed.push(a[0]);
  this.ed.push(a[1]);
  this.A = new jg(d, b, f, c);
  Gg(this)
};
q.Me = function() {
  this.A = new hg(this.A.host, this.A.port, ub);
  Gg(this)
};
function Gg(a) {
  a.h = 3;
  a.j = ug(a, j);
  tg(a.j, a.ya, k);
  a.j.Ea()
}
q.c = function() {
  this.a.info(H(this) + " in disposeInternal.");
  rg(this);
  this.h = 5;
  for(var a = this.ic.X(), b = 0;b < a.length;b++) {
    a[b].g()
  }
  for(a = 0;a < this.ed.length;a++) {
    ab(this.ed[a].oe, this)
  }
  J && this.jc && (uc(this.jc), this.jc = k);
  this.uf && this.uf.call(this.dd);
  delete this.ic;
  delete this.j;
  delete this.B;
  delete this.bc;
  delete this.dd;
  og.f.c.call(this)
};
var cg = 1, xg = 2, yg = 3;
function zg(a, b, c, d, f, g) {
  this.v = a;
  this.D = b;
  this.Kb = c;
  this.Aa = d;
  this.A = f;
  this.F = [];
  this.sb = g;
  this.Ob = !this.yb();
  this.Fb = this.Aa != cg;
  this.bg = y(this.ah, this)
}
C(zg, L);
q = zg.prototype;
q.a = T("cw.net.ClientTransport");
q.r = k;
q.se = k;
q.Sf = k;
q.Pc = k;
q.Ha = m;
q.$c = m;
q.Ab = k;
q.uc = 0;
q.Eb = -1;
q.Nc = -1;
q.Wf = m;
q.gd = m;
q.Qa = 0;
q.Wb = m;
q.N = function(a) {
  a.push("<ClientTransport #", "" + this.Kb, ", becomePrimary=", "" + this.sb, ">")
};
q.s = function() {
  return(this.sb ? "Prim. T#" : "Sec. T#") + this.Kb
};
q.Be = function() {
  return!(!this.Wb && this.uc)
};
q.yb = function() {
  return this.Aa == cg || this.Aa == xg
};
function Hg(a, b) {
  fb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Fg(a.D, a, b, !a.Fb)
}
function Ig(a, b, c) {
  try {
    var d = sf(b);
    a.uc += 1;
    R(a.a, a.s() + " RECV " + H(d));
    var f;
    1 == a.uc && !d.V(kg) && a.yb() ? (Q(a.a, a.s() + " is closing soon because got bad preamble: " + H(d)), f = j) : f = m;
    if(f) {
      return j
    }
    if(d instanceof hf) {
      if(!/^([ -~]*)$/.test(d.pe)) {
        return a.Wb = j
      }
      a.Nc += 1;
      c.push([a.Nc, d.pe])
    }else {
      if(d instanceof gf) {
        var g = a.D, i = d.Ua;
        g.jf = i;
        var l = g.ya, o = i.qb, c = m;
        o > l.$a && (c = j);
        for(var r = xb(l).concat(), d = 0;d < r.length;d++) {
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
          return Q(a.a, a.s() + " is closing soon because got bad SackFrame"), a.Wb = j
        }
      }else {
        if(d instanceof kf) {
          a.Nc = d.If - 1
        }else {
          if(d instanceof mf) {
            a.D.kf = d.hf
          }else {
            if(d instanceof of) {
              return S(a.a, a.s() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof rf) {
              return a.Wb = j, "stream_attach_failure" == d.reason ? a.Qa += 1 : "acked_unsent_strings" == d.reason && (a.Qa += 0.5), S(a.a, a.s() + " is closing soon because got " + H(d)), j
            }
            if(!(d instanceof jf)) {
              if(d instanceof nf) {
                var A = a.D, kd = !a.Fb;
                S(A.a, "Stream is now confirmed to exist at server.");
                A.le = j;
                A.ae && !kd && (A.ae = m, qg(A))
              }else {
                c.length && (Hg(a, c), $a(c));
                if(d instanceof pf) {
                  var Sg = a.D;
                  Dg(Sg, d.zf, d.xe);
                  Sg.g();
                  return j
                }
                e(Error(a.s() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(Tg) {
    return Tg instanceof V || e(Tg), Q(a.a, a.s() + " is closing soon because got InvalidFrame: " + H(b)), a.Wb = j
  }
  return m
}
function Pe(a, b) {
  a.$c = j;
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
    a.$c = m;
    a.F.length && a.Ea();
    c && (S(a.a, a.s() + " closeSoon is true.  Frames were: " + H(b)), a.g())
  }finally {
    a.$c = m
  }
}
q.ah = function() {
  Q(this.a, this.s() + " timed out due to lack of connection or no data being received.");
  this.g()
};
function Jg(a) {
  a.Pc != k && (a.v.I.clearTimeout(a.Pc), a.Pc = k)
}
function dg(a, b) {
  Jg(a);
  b = Math.round(b);
  a.Pc = a.v.I.setTimeout(a.bg, b);
  R(a.a, a.s() + "'s receive timeout set to " + b + " ms.")
}
function Oe(a) {
  a.Aa != cg && (a.Aa == yg || a.Aa == xg ? dg(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.Aa)))
}
function sg(a) {
  var b = new ef;
  b.Kb = a.Kb;
  b.xf = 2;
  b.$e = 2;
  a.D.le || (b.Bf = j);
  b.gc = a.D.gc;
  b.ne = a.Fb;
  b.ne && (b.qf = 4096);
  b.of = 3E5;
  b.mf = a.Fb ? Math.floor(10) : 0;
  b.Tf = m;
  a.sb && (b.Of = k, b.Sd = Math.floor((a.Fb ? 358E4 : 25E3) / 1E3));
  b.Ua = zb(a.D.Kd);
  b.Ic = a.D.jf;
  a.F.push(b);
  a.Ab = b.Ua
}
function Qe(a, b) {
  b && (a.Qa += 0.5);
  a.g()
}
q.Ea = function() {
  this.Ha && !this.Ob && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.$c) {
    S(this.a, this.s() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ha;
    this.Ha = j;
    !a && !this.F.length && sg(this);
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
      this.r = eg.sd(this, this.sb ? this.A.wf : this.A.Hf);
      this.se = this.v.I === Cc ? B() : this.v.I.getTime();
      this.r.Rd(b, "POST", a);
      dg(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Fb ? 0 : this.sb ? 25E3 : 0))
    }else {
      if(this.Aa == yg) {
        a = [];
        b = 0;
        for(c = this.F.length;b < c;b++) {
          a.push(this.F[b].ca())
        }
        this.F = [];
        this.r ? this.r.kc(a) : (b = this.A, this.r = new Te(this), this.r.Zc = b.dh.sd(this.r), this.se = this.v.I === Cc ? B() : this.v.I.getTime(), this.r.pd(b.host, b.port), this.r.sa || (this.r.kc(a), this.r.sa || dg(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.Aa))
      }
    }
  }
};
function tg(a, b, c) {
  !a.Ha && !a.F.length && sg(a);
  for(var c = Math.max(c, a.Eb + 1), b = b.Re(c), c = 0, d = b.length;c < d;c++) {
    var f = b[c], g = f[0], f = f[1];
    (-1 == a.Eb || a.Eb + 1 != g) && a.F.push(new kf(g));
    a.F.push(new hf(f));
    a.Eb = g
  }
}
q.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  zg.f.c.call(this);
  this.Sf = this.v.I === Cc ? B() : this.v.I.getTime();
  this.F = [];
  Jg(this);
  this.r && this.r.g();
  var a = this.D;
  this.D = k;
  Cg(a, this)
};
function Eg(a, b) {
  !a.Ha && !a.F.length && sg(a);
  a.F.push(new pf(b, j));
  a.Wf = j
}
function Bg(a, b, c, d) {
  this.v = a;
  this.D = b;
  this.Je = c;
  this.De = d
}
C(Bg, L);
q = Bg.prototype;
q.Ha = m;
q.Ob = m;
q.yc = k;
q.Ab = k;
q.a = T("cw.net.DoNothingTransport");
function Kg(a) {
  a.yc = a.v.I.setTimeout(function() {
    a.yc = k;
    a.De--;
    a.De ? Kg(a) : a.g()
  }, a.Je)
}
q.Ea = function() {
  this.Ha && !this.Ob && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
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
  Bg.f.c.call(this);
  this.yc != k && this.v.I.clearTimeout(this.yc);
  var a = this.D;
  this.D = k;
  Cg(a, this)
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
q.vc = function() {
};
q.i = function(a) {
  var b = a.Fa().i("div", Og(this, a).join(" "), a.ba);
  this.ce(a, b);
  return b
};
q.Ub = function(a) {
  return a
};
q.Sb = function(a, b, c) {
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
  a.dc == k && (a.dc = "rtl" == (Kd(a.q ? a.e : a.M.p.body, "direction") || ((a.q ? a.e : a.M.p.body).currentStyle ? (a.q ? a.e : a.M.p.body).currentStyle.direction : k) || (a.q ? a.e : a.M.p.body).style && (a.q ? a.e : a.M.p.body).style.direction));
  a.dc && this.Ib(a.b(), j);
  a.isEnabled() && this.Vc(a, a.Lb)
};
q.ce = function(a, b) {
  a.isEnabled() || this.$(b, 1, j);
  a.h & 8 && this.$(b, 8, j);
  a.T & 16 && this.$(b, 16, !!(a.h & 16));
  a.T & 64 && this.$(b, 64, !!(a.h & 64))
};
q.Sc = function(a, b) {
  Rd(a, !b, !I && !Kb)
};
q.Ib = function(a, b) {
  this.Sb(a, this.t() + "-rtl", b)
};
q.ef = function(a) {
  var b;
  return a.T & 32 && (b = a.cb()) ? ud(b) : m
};
q.Vc = function(a, b) {
  var c;
  if(a.T & 32 && (c = a.cb())) {
    if(!b && a.h & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.h & 32 && a.Ue()
    }
    ud(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
q.je = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.ja = function(a, b, c) {
  var d = a.b();
  if(d) {
    var f = Qg(this, b);
    f && this.Sb(a, f, c);
    this.$(d, b, c)
  }
};
q.$ = function(a, b, c) {
  Ng || (Ng = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Ng[b]) && a.setAttribute("aria-" + b, c)
};
q.Tc = function(a, b) {
  var c = this.Ub(a);
  if(c && (od(c), b)) {
    if(w(b)) {
      rd(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = ed(c);
          c.appendChild(w(a) ? b.createTextNode(a) : a)
        }
      };
      v(b) ? F(b, d) : ga(b) && !("nodeType" in b) ? F(cb(b), d) : d(b)
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
    Ya(d, qa(Za, a)) && (!b || Za(d, b)) && c.push(d.join("_"))
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
;function Rg(a, b) {
  a || e(Error("Invalid class name " + a));
  ka(b) || e(Error("Invalid decorator function " + b))
}
var Ug = {};
function Vg(a, b, c, d, f) {
  if(!I && (!J || !K("525"))) {
    return j
  }
  if(Ob && f) {
    return Wg(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || I && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(I && Yb());
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
C(Yg, Ac);
q = Yg.prototype;
q.e = k;
q.Gc = k;
q.Md = k;
q.Hc = k;
q.Pa = -1;
q.Oa = -1;
var $g = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, ah = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, bh = I || 
J && K("525");
q = Yg.prototype;
q.xg = function(a) {
  if(J && (17 == this.Pa && !a.ctrlKey || 18 == this.Pa && !a.altKey)) {
    this.Oa = this.Pa = -1
  }
  bh && !Vg(a.keyCode, this.Pa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Oa = Lb ? Xg(a.keyCode) : a.keyCode
};
q.yg = function() {
  this.Oa = this.Pa = -1
};
q.handleEvent = function(a) {
  var b = a.Da, c, d;
  I && "keypress" == a.type ? (c = this.Oa, d = 13 != c && 27 != c ? b.keyCode : 0) : J && "keypress" == a.type ? (c = this.Oa, d = 0 <= b.charCode && 63232 > b.charCode && Wg(c) ? b.charCode : 0) : Kb ? (c = this.Oa, d = Wg(c) ? b.keyCode : 0) : (c = b.keyCode || this.Oa, d = b.charCode || 0, Ob && (63 == d && 224 == c) && (c = 191));
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
  a.Hc && a.detach();
  a.e = b;
  a.Gc = M(a.e, "keypress", a, c);
  a.Md = M(a.e, "keydown", a.xg, c, a);
  a.Hc = M(a.e, "keyup", a.yg, c, a)
}
q.detach = function() {
  this.Gc && (uc(this.Gc), uc(this.Md), uc(this.Hc), this.Hc = this.Md = this.Gc = k);
  this.e = k;
  this.Oa = this.Pa = -1
};
q.c = function() {
  Yg.f.c.call(this);
  this.detach()
};
function ch(a, b, c, d) {
  d && this.Yb(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(ch, ic);
function W(a, b, c) {
  Wd.call(this, c);
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
  this.Uc(a)
}
C(W, Wd);
q = W.prototype;
q.ba = k;
q.h = 0;
q.T = 39;
q.kd = 255;
q.Xg = 0;
q.Lb = j;
q.ta = k;
q.Gd = j;
q.jd = m;
q.Mg = k;
q.cb = function() {
  return this.l.cb(this)
};
function dh(a, b) {
  b && (a.ta ? Za(a.ta, b) || a.ta.push(b) : a.ta = [b], a.l.Sb(a, b, j))
}
q.Sb = function(a, b) {
  b ? dh(this, a) : a && this.ta && (ab(this.ta, a), 0 == this.ta.length && (this.ta = k), this.l.Sb(this, a, m))
};
q.i = function() {
  var a = this.l.i(this);
  this.e = a;
  var b = this.Mg || this.l.vc();
  b && Lg(a, b);
  this.jd || this.l.Sc(a, m);
  this.Lb || this.l.je(a, m)
};
q.Ub = function() {
  return this.l.Ub(this.b())
};
q.P = function() {
  W.f.P.call(this);
  this.l.bf(this);
  if(this.T & -2 && (this.Gd && eh(this, j), this.T & 32)) {
    var a = this.cb();
    if(a) {
      var b = this.zb || (this.zb = new Yg);
      Zg(b, a);
      P(P(P($d(this), b, "key", this.Xe), a, "focus", this.vg), a, "blur", this.Ue)
    }
  }
};
function eh(a, b) {
  var c = $d(a), d = a.b();
  b ? (P(P(P(P(c, d, "mouseover", a.Bc), d, "mousedown", a.zc), d, "mouseup", a.Ye), d, "mouseout", a.Ac), I && P(c, d, "dblclick", a.We)) : (Ud(Ud(Ud(Ud(c, d, "mouseover", a.Bc), d, "mousedown", a.zc), d, "mouseup", a.Ye), d, "mouseout", a.Ac), I && Ud(c, d, "dblclick", a.We))
}
q.ab = function() {
  W.f.ab.call(this);
  this.zb && this.zb.detach();
  this.Lb && this.isEnabled() && this.l.Vc(this, m)
};
q.c = function() {
  W.f.c.call(this);
  this.zb && (this.zb.g(), delete this.zb);
  delete this.l;
  this.ta = this.ba = k
};
q.Tc = function(a) {
  this.l.Tc(this.b(), a);
  this.Uc(a)
};
q.Uc = aa("ba");
q.Pe = function() {
  var a = this.ba;
  if(!a) {
    return""
  }
  if(!w(a)) {
    if(v(a)) {
      a = Wa(a, vd).join("")
    }else {
      if(bd && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        wd(a, b, j);
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
q.Sc = function(a) {
  this.jd = a;
  var b = this.b();
  b && this.l.Sc(b, a)
};
q.je = function(a, b) {
  if(b || this.Lb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.l.je(c, a);
    this.isEnabled() && this.l.Vc(this, a);
    this.Lb = a;
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
  return!!(a.T & b) && !!(a.h & b) != c && (!(a.Xg & b) || a.dispatchEvent(Yd(b, c))) && !a.sa
}
q.Bc = function(a) {
  !hh(a, this.b()) && (this.dispatchEvent("enter") && this.isEnabled() && X(this, 2)) && fh(this, j)
};
q.Ac = function(a) {
  !hh(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(m), X(this, 2) && fh(this, m))
};
function hh(a, b) {
  return!!a.relatedTarget && qd(b, a.relatedTarget)
}
q.zc = function(a) {
  if(this.isEnabled() && (X(this, 2) && fh(this, j), kc(a) && (!J || !Ob || !a.ctrlKey))) {
    X(this, 4) && this.setActive(j), this.l.ef(this) && this.cb().focus()
  }
  !this.jd && (kc(a) && (!J || !Ob || !a.ctrlKey)) && a.preventDefault()
};
q.Ye = function(a) {
  this.isEnabled() && (X(this, 2) && fh(this, j), this.Ld() && (this.ib(a) && X(this, 4)) && this.setActive(m))
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
  b = new fc("action", this);
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
  return this.Lb && this.isEnabled() && this.Fd(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
q.Fd = function(a) {
  return 13 == a.keyCode && this.ib(a)
};
ka(W) || e(Error("Invalid component class " + W));
ka(Mg) || e(Error("Invalid renderer class " + Mg));
var ih = la(W);
Ug[ih] = Mg;
Rg("goog-control", function() {
  return new W(k)
});
function jh() {
}
C(jh, Mg);
ea(jh);
q = jh.prototype;
q.vc = p("button");
q.$ = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : jh.f.$.call(this, a, b, c)
};
q.i = function(a) {
  var b = jh.f.i.call(this, a), c = a.wc();
  c && this.ie(b, c);
  (c = a.xc()) && this.Yc(b, c);
  a.T & 16 && this.$(b, 16, !!(a.h & 16));
  return b
};
q.xc = da;
q.Yc = da;
q.wc = function(a) {
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
q.vc = function() {
};
q.i = function(a) {
  a.q && m != a.Gd && eh(a, m);
  a.Gd = m;
  a.kd &= -256;
  a.q && a.h & 32 && e(Error("Component already rendered"));
  a.h & 32 && a.ja(32, m);
  a.T &= -33;
  return a.Fa().i("button", {"class":Og(this, a).join(" "), disabled:!a.isEnabled(), title:a.wc() || "", value:a.xc() || ""}, a.Pe() || "")
};
q.bf = function(a) {
  P($d(a), a.b(), "click", a.ib)
};
q.Sc = da;
q.Ib = da;
q.ef = function(a) {
  return a.isEnabled()
};
q.Vc = da;
q.ja = function(a, b, c) {
  kh.f.ja.call(this, a, b, c);
  if((a = a.b()) && 1 == b) {
    a.disabled = c
  }
};
q.xc = function(a) {
  return a.value
};
q.Yc = function(a, b) {
  a && (a.value = b)
};
q.$ = da;
function lh(a, b, c) {
  W.call(this, a, b || kh.La(), c)
}
C(lh, W);
q = lh.prototype;
q.xc = n("Uf");
q.Yc = function(a) {
  this.Uf = a;
  this.l.Yc(this.b(), a)
};
q.wc = n("Qf");
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
    a && P($d(this), a, "keyup", this.Fd)
  }
};
q.Fd = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.ib(a) : 32 == a.keyCode
};
Rg("goog-button", function() {
  return new lh(k)
});
function mh() {
}
C(mh, jh);
ea(mh);
q = mh.prototype;
q.i = function(a) {
  var b = {"class":"goog-inline-block " + Og(this, a).join(" "), title:a.wc() || ""}, b = a.Fa().i("div", b, nh(this, a.ba, a.Fa()));
  this.ce(a, b);
  return b
};
q.vc = p("button");
q.ce = function(a, b) {
  a.isEnabled() || this.$(b, 1, j);
  a.h & 8 && this.$(b, 8, j);
  a.T & 16 && this.$(b, 16, j);
  a.h & 64 && this.$(b, 64, j)
};
q.Ub = function(a) {
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
Rg("goog-custom-button", function() {
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
    return b.Dc = sh(c), b.type = "hex", b
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
    return b.Dc = uh(c[0], c[1], c[2]), b.type = "rgb", b
  }
  if(ph && (c = ph[a.toLowerCase()])) {
    return b.Dc = c, b.type = "named", b
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
yh.prototype.lc = k;
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
  this.headers = new nb;
  this.Mb = a || k
}
C(Eh, Ac);
Eh.prototype.a = T("goog.net.XhrIo");
var Fh = /^https?$/i;
q = Eh.prototype;
q.Ia = m;
q.k = k;
q.fd = k;
q.Od = "";
q.gf = "";
q.Zb = "";
q.wd = m;
q.Ec = m;
q.Jd = m;
q.gb = m;
q.ad = 0;
q.nb = k;
q.Df = "";
q.hh = m;
q.send = function(a, b, c, d) {
  this.k && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Od = a;
  this.Zb = "";
  this.gf = b;
  this.wd = m;
  this.Ia = j;
  this.k = this.Mb ? Bh(this.Mb) : Bh(zh);
  this.fd = this.Mb ? this.Mb.lc || (this.Mb.lc = Dh(this.Mb)) : zh.lc || (zh.lc = Dh(zh));
  this.k.onreadystatechange = y(this.tf, this);
  try {
    R(this.a, Gh(this, "Opening Xhr")), this.Jd = j, this.k.open(b, a, j), this.Jd = m
  }catch(f) {
    R(this.a, Gh(this, "Error opening Xhr: " + f.message));
    Hh(this, f);
    return
  }
  var a = c || "", g = this.headers.L();
  d && lb(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.aa("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  lb(g, function(a, b) {
    this.k.setRequestHeader(b, a)
  }, this);
  this.Df && (this.k.responseType = this.Df);
  "withCredentials" in this.k && (this.k.withCredentials = this.hh);
  try {
    this.nb && (Cc.clearTimeout(this.nb), this.nb = k), 0 < this.ad && (R(this.a, Gh(this, "Will abort after " + this.ad + "ms if incomplete")), this.nb = Cc.setTimeout(y(this.bh, this), this.ad)), R(this.a, Gh(this, "Sending request")), this.Ec = j, this.k.send(a), this.Ec = m
  }catch(i) {
    R(this.a, Gh(this, "Send error: " + i.message)), Hh(this, i)
  }
};
q.bh = function() {
  "undefined" != typeof ba && this.k && (this.Zb = "Timed out after " + this.ad + "ms, aborting", R(this.a, Gh(this, this.Zb)), this.dispatchEvent("timeout"), this.abort(8))
};
function Hh(a, b) {
  a.Ia = m;
  a.k && (a.gb = j, a.k.abort(), a.gb = m);
  a.Zb = b;
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
  !this.Jd && !this.Ec && !this.gb ? this.Kg() : Kh(this)
};
q.Kg = function() {
  Kh(this)
};
function Kh(a) {
  if(a.Ia && "undefined" != typeof ba) {
    if(a.fd[1] && 4 == a.Ma() && 2 == Lh(a)) {
      R(a.a, Gh(a, "Local request error detected and ignored"))
    }else {
      if(a.Ec && 4 == a.Ma()) {
        Cc.setTimeout(y(a.tf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.Ma()) {
          R(a.a, Gh(a, "Request complete"));
          a.Ia = m;
          try {
            var b = Lh(a), c, d;
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
                  d = j;
                  break a;
                default:
                  d = m
              }
            }
            if(!(c = d)) {
              var f;
              if(f = 0 === b) {
                var g = ("" + a.Od).match(tf)[1] || k;
                if(!g && self.location) {
                  var i = self.location.protocol, g = i.substr(0, i.length - 1)
                }
                f = !Fh.test(g ? g.toLowerCase() : "")
              }
              c = f
            }
            if(c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success")
            }else {
              var l;
              try {
                l = 2 < a.Ma() ? a.k.statusText : ""
              }catch(o) {
                R(a.a, "Can not get status: " + o.message), l = ""
              }
              a.Zb = l + " [" + Lh(a) + "]";
              Ih(a)
            }
          }finally {
            Jh(a)
          }
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
    a.nb && (Cc.clearTimeout(a.nb), a.nb = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(f) {
      xe(a.a, "Problem encountered resetting onreadystatechange: " + f.message)
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
  this.bd = a;
  this.na = b
}
C(Nh, L);
q = Nh.prototype;
q.r = k;
q.Ta = -1;
q.Te = m;
q.Ze = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Oh(a) {
  var b = ag(a.Ge), c = b[0], b = b[1], d = s.parent;
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
      for(var b = new nb, c = this.Ze.length;c--;) {
        var d = this.Ze[c];
        try {
          b.set(d, this.r.k.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.Q() && (this.Te = j, a.__XHRMaster_ongotheaders(this.na, rb(b)), this.sa)) {
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
  this.Ge = new $f(this.r.k, 1048576)
};
q.c = function() {
  Nh.f.c.call(this);
  delete this.Ge;
  this.r && this.r.g();
  delete this.bd.fc[this.na];
  delete this.bd
};
function Ph() {
  this.fc = {}
}
C(Ph, L);
Ph.prototype.Fg = function(a, b, c, d) {
  var f = new Nh(this, a);
  this.fc[a] = f;
  f.Rd(b, c, d)
};
Ph.prototype.lg = function(a) {
  (a = this.fc[a]) && a.g()
};
Ph.prototype.c = function() {
  Ph.f.c.call(this);
  for(var a = ta(this.fc);a.length;) {
    a.pop().g()
  }
  delete this.fc
};
var Qh = new Ph;
s.__XHRSlave_makeRequest = y(Qh.Fg, Qh);
s.__XHRSlave_dispose = y(Qh.lg, Qh);
var Rh = T("cw.net.demo");
function Sh() {
}
Sh.prototype.Qe = function() {
  return Boolean(Number((new vf(document.location)).S.get("httpStreaming", "0"))) ? 2 : 1
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
q.pc = function(a) {
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
  var a = cd(this.e), b = k;
  if(I) {
    b = a.p.createStyleSheet(), Pd(b)
  }else {
    var c = fd(a.p, "head", h, h)[0];
    c || (b = fd(a.p, "body", h, h)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    Pd(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
ci.prototype.Zf = function(a) {
  var b = 100 >= this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight, c = this.ng.createElement("div");
  c.className = "logmsg";
  var d = this.Oe, f;
  switch(a.Bb.value) {
    case oe.value:
      f = "dbg-sh";
      break;
    case pe.value:
      f = "dbg-sev";
      break;
    case qe.value:
      f = "dbg-w";
      break;
    case re.value:
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
  d.Ug && g.push("[", Oa(ai(a, d.Wg.get())), "s] ");
  d.Tg && g.push("[", Ia(a.Eg), "] ");
  g.push('<span class="', f, '">', Ha(Oa(Ia(a.pf))));
  d.Kf && a.zd && g.push("<br>", Ha(Oa(a.yd || "")));
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
C(Y, Ac);
q = Y.prototype;
q.va = k;
q.e = k;
q.Rf = k;
q.b = n("e");
q.addEventListener = function(a, b, c, d) {
  M(this.e, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  sc(this.e, a, b, c, d)
};
q.c = function() {
  Y.f.c.call(this);
  wc(this.e)
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
  od(this.b())
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
  this.$b = b || 1
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
  var f = this.U[0] - a * Math.cos($e(c)) + a * Math.cos($e(c + d)), g = this.U[1] - b * Math.sin($e(c)) + b * Math.sin($e(c + d));
  this.C.push(3);
  this.d.push(1);
  this.pa.push(a, b, c, d, f, g);
  this.Jb = m;
  this.U = [f, g];
  return this
};
q.ag = function(a, b, c, d) {
  for(var f = this.U[0] - a * Math.cos($e(c)), g = this.U[1] - b * Math.sin($e(c)), i = $e(d), d = Math.ceil(2 * (Math.abs(i) / Math.PI)), i = i / d, c = $e(c), l = 0;l < d;l++) {
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
  Wd.call(this, f);
  this.width = a;
  this.height = b;
  this.ka = c || k;
  this.Qb = d || k
}
C(ui, Wd);
q = ui.prototype;
q.G = k;
q.Ja = 0;
q.Za = 0;
q.Se = function() {
  return this.W()
};
q.W = function() {
  return this.q ? Nd(this.b()) : ja(this.width) && ja(this.height) ? new N(this.width, this.height) : k
};
function vi(a) {
  var b = a.W();
  return b ? b.width / (a.ka ? new N(a.ka, a.Qb) : a.W()).width : 0
}
;function wi(a, b, c, d, f) {
  ui.call(this, a, b, c, d, f);
  this.Ie = {};
  this.ve = J && !K(526);
  this.eb = new Sd(this)
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
  b instanceof ni ? (c.setAttribute("fill", b.ra), c.setAttribute("fill-opacity", b.$b)) : c.setAttribute("fill", "none")
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
    this.b().setAttribute("preserveAspectRatio", "none"), this.ve ? this.cd() : this.b().setAttribute("viewBox", this.Ja + " " + this.Za + " " + (this.ka ? this.ka + " " + this.Qb : ""))
  }
};
q.cd = function() {
  if(this.q && (this.ka || this.Ja || !this.Za)) {
    var a = this.W();
    if(0 == a.width) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.Ja, c = -this.Za, d = a.width / this.ka, a = a.height / this.Qb;
      this.G.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
q.Z = function(a, b) {
  Ld(this.b(), a, b)
};
q.W = function() {
  if(!Lb) {
    return this.q ? Nd(this.b()) : wi.f.W.call(this)
  }
  var a = this.width, b = this.height, c = w(a) && -1 != a.indexOf("%"), d = w(b) && -1 != b.indexOf("%");
  if(!this.q && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = Nd(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Nd(f), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
q.clear = function() {
  this.G.clear();
  od(this.vd);
  this.Ie = {}
};
q.qc = function(a, b, c, d, f, g, i) {
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
    "string" == typeof a && (-1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%")) && P(this.eb, zi(), Dc, this.cd);
    this.cd()
  }
};
q.ab = function() {
  wi.f.ab.call(this);
  this.ve && Ud(this.eb, zi(), Dc, this.cd)
};
q.c = function() {
  delete this.Ie;
  delete this.vd;
  delete this.G;
  wi.f.c.call(this)
};
function zi() {
  xi || (xi = new Bc(400), xi.start());
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
  od(this.b())
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
  this.eb = new Sd(this)
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
  c.id = "goog_" + Qa++;
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
  b instanceof ni ? "transparent" == b.ra ? c.filled = m : 1 != b.$b ? (c.filled = j, d = Hi(this, "fill"), d.opacity = Math.round(100 * b.$b) + "%", d.color = b.ra, c.appendChild(d)) : (c.filled = j, c.fillcolor = b.ra) : c.filled = m;
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
  var a = this.width, b = this.height, c = this.M.i("div", {style:"overflow:hidden;position:relative;width:" + (w(a) && Da(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (w(b) && Da(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = Hi(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.ka ? $(this.ka) + " " + $(this.Qb) : $(a) + " " + $(b);
  d.coordorigin = u(this.Ja) ? $(this.Ja) + " " + $(this.Za) : "0 0";
  c.appendChild(d);
  this.G = new Bi(d, this);
  M(c, "resize", y(this.Ed, this))
};
q.Ed = function() {
  var a = Nd(this.b()), b = this.G.b().style;
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
  Ld(this.b(), a, b)
};
q.W = function() {
  var a = this.b();
  return new N(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
q.clear = function() {
  this.G.clear()
};
q.qc = function(a, b, c, d, f, g, i) {
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
  this.z.moveTo(this.hg + this.Ef * Math.cos($e(0)), this.ig + this.Ff * Math.sin($e(0)));
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
Pi.prototype.Rb = m;
Pi.prototype.mb = function(a) {
  this.z = a.Jb ? a : ti(a);
  this.Rb && Mi(this.va)
};
Pi.prototype.Ba = function(a) {
  this.Rb = j;
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
Qi.prototype.Rb = m;
Qi.prototype.Z = function(a, b) {
  this.we = a;
  this.Dd = b;
  this.Rb && Mi(this.va)
};
Qi.prototype.Ba = function(a) {
  this.af ? (this.we && this.Dd && a.drawImage(this.af, this.kh, this.mh, this.we, this.Dd), this.Rb = j) : (a = new Image, a.onload = y(this.wg, this, a), a.src = this.Vg)
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
  this.Pb = this.M.i("canvas");
  a.appendChild(this.Pb);
  this.Dg = this.G = new Li(this);
  this.Rg = 0;
  Ti(this)
};
q.getContext = function() {
  this.b() || this.i();
  this.ub || (this.ub = this.Pb.getContext("2d"), this.ub.save());
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
  c && (f = this.b().parentNode, g = Nd(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Nd(f), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
function Ti(a) {
  Ld(a.b(), a.width, a.height);
  var b = a.W();
  b && (Ld(a.Pb, b.width, b.height), a.Pb.width = b.width, a.Pb.height = b.height, a.ub = k)
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
      a.getContext().scale(b.width / a.ka, b.height / a.Qb)
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
        0 != d.$b && (c.globalAlpha = d.$b, c.fillStyle = d.ra, b.Ba(c), c.fill(), c.globalAlpha = 1)
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
  this.q && (!this.Rg && !(b != this.G && b != this.Dg)) && Ni(this, a)
};
q.qc = function(a, b, c, d, f, g, i) {
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
C(Ui, Ac);
q = Ui.prototype;
q.Wa = k;
q.be = k;
function Vi(a, b) {
  b && (F(b, function(a) {
    this.ec(a, m)
  }, a), db(a.w, b))
}
q.Cd = n("Wa");
q.Re = function() {
  return cb(this.w)
};
q.Xc = function(a) {
  a != this.Wa && (this.ec(this.Wa, m), this.Wa = a, this.ec(a, j));
  this.dispatchEvent("select")
};
q.Bd = function() {
  return this.Wa ? Ua(this.w, this.Wa) : -1
};
q.he = function(a) {
  this.Xc(this.w[a] || k)
};
q.clear = function() {
  $a(this.w);
  this.Wa = k
};
q.c = function() {
  Ui.f.c.call(this);
  delete this.w;
  this.Wa = k
};
q.ec = function(a, b) {
  a && ("function" == typeof this.be ? this.be(a, b) : "function" == typeof a.ge && a.ge(b))
};
function Wi() {
}
C(Wi, Mg);
ea(Wi);
var Xi = 0;
Wi.prototype.i = function(a) {
  var b = Og(this, a);
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
  Lg(c, "grid");
  return c
};
function Zi(a, b, c) {
  a = c.i("td", {"class":a.t() + "-cell", id:a.t() + "-cell-" + Xi++}, b);
  Lg(a, "gridcell");
  return a
}
Wi.prototype.Tc = function(a, b) {
  if(a) {
    var c = fd(document, "tbody", this.t() + "-body", a)[0];
    if(c) {
      var d = 0;
      F(c.rows, function(a) {
        F(a.cells, function(a) {
          od(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = cd(a), i = c.rows[0].cells.length;d < b.length;) {
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
    Rd(a, j, Lb)
  }
};
function $i(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && Za(Xc(c), a.t() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function aj(a, b, c, d) {
  c && (c = c.parentNode, a = a.t() + "-cell-hover", d ? Yc(c, a) : Zc(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id))
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
q.Uc = function(a) {
  bj.f.Uc.call(this, a);
  cj(this);
  this.J ? (this.J.clear(), Vi(this.J, a)) : (this.J = new Ui(a), this.J.be = y(this.ec, this), P($d(this), this.J, "select", this.zg));
  this.fb = -1
};
q.Pe = p(k);
q.Bc = function(a) {
  bj.f.Bc.call(this, a);
  var b = $i(this.l, this, a.target);
  if((!b || !a.relatedTarget || !qd(b, a.relatedTarget)) && b != dj(this)) {
    a = this.ba, ej(this, a ? Ua(a, b) : -1)
  }
};
q.Ac = function(a) {
  bj.f.Ac.call(this, a);
  var b = $i(this.l, this, a.target);
  (!b || !a.relatedTarget || !qd(b, a.relatedTarget)) && b == dj(this) && aj(this.l, this, b, m)
};
q.zc = function(a) {
  bj.f.zc.call(this, a);
  if(this.Ld() && (a = $i(this.l, this, a.target), a != dj(this))) {
    var b = this.ba;
    ej(this, b ? Ua(b, a) : -1)
  }
};
q.ib = function() {
  var a = dj(this);
  return a ? (this.Xc(a), this.dispatchEvent("action")) : m
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
q.Xc = function(a) {
  this.J && this.J.Xc(a)
};
function fj(a, b, c) {
  if(a.b()) {
    var d = a.ba;
    d && (0 <= b && b < d.length) && aj(a.l, a, d[b], c)
  }
}
q.ec = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.l.t() + "-cell-selected";
    b ? Yc(c, d) : Zc(c, d)
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
  this.oc = a || [];
  bj.call(this, k, b || Wi.La(), c);
  this.oc = this.oc;
  this.Kc = k;
  this.Tc(hj(this))
}
C(gj, bj);
gj.prototype.Kc = k;
function ij(a) {
  var b = jj(kj);
  a.Kc || (a.Kc = Wa(a.oc, function(a) {
    return jj(a)
  }));
  a.he(b ? Ua(a.Kc, b) : -1)
}
function hj(a) {
  return Wa(a.oc, function(a) {
    var c = this.Fa().i("div", {"class":this.l.t() + "-colorswatch", style:"background-color:" + a});
    c.title = "#" == a.charAt(0) ? "RGB (" + wh(a).join(", ") + ")" : a;
    return c
  }, a)
}
function jj(a) {
  if(a) {
    try {
      return qh(a).Dc
    }catch(b) {
    }
  }
  return k
}
;function lj(a) {
  a = "" + a;
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
;var mj, nj, oj, pj, qj, rj = T("whiteboard.logger");
window.onerror = function(a, b, c) {
  xe(rj, "window.onerror: message: " + H(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function sj() {
}
sj.prototype.Mf = function(a) {
  this.D = a;
  wg(this.D, "subprotocol:whiteboard")
};
sj.prototype.Lf = function(a, b) {
  rj.info("streamReset: reasonString=" + H(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  tj = k
};
sj.prototype.Nf = function(a) {
  var a = lj(a), b = a[0], c = a[1];
  "Point" == b ? mj.qc(c.x, c.y, 5, 5, new oi, new ni(c.color), h) : "ClearBoard" == b ? (mj.g(), uj()) : Q(rj, "Strange message from server: " + H(a))
};
sj.prototype.reset = function(a) {
  rj.info("resetting with reason: " + a);
  this.D.reset(a)
};
var tj = k, vj = new Tc(s.window);
function wj() {
  tj && (tj.reset("idle timeout fired"), tj = k)
}
var xj = k;
function yj() {
  xj != k && vj.I.clearTimeout(xj);
  tj && (xj = vj.I.setTimeout(wj, 2592E5))
}
M(window, ["click", "focus", "keydown", "keypress"], yj, j);
function zj() {
  mj.g();
  uj();
  var a = tj;
  rj.info("Telling server to clear the board.");
  wg(a.D, xa(["ClearBoard", k]))
}
function Aj(a) {
  var b = new ic(a), a = b.offsetX, b = b.offsetY;
  mj.qc(a, b, 5, 5, new oi, new ni(nj), h);
  var c = tj, d = nj;
  rj.info("Telling server about circle at: " + a + ", " + b + " with color " + d);
  wg(c.D, xa(["Point", {x:a, y:b, color:d}]))
}
function uj() {
  var a;
  a = I && !K("9") ? new Fi(800, 600, h, h, h) : J && (!K("420") || Mb) ? new Ri(800, 600, h, h, h) : new wi(800, 600, h, h, h);
  a.i();
  oj = O("drawArea");
  ae(a, oj);
  mj = a
}
var kj = "#E06666";
function Bj(a) {
  var b;
  (a = a.target.Cd()) ? (a = a.style[Ra("background-color")] || "", b = jj(a)) : b = k;
  b || (b = kj);
  nj = b;
  Vh.set("whiteboard_defaultColor", b);
  a = O("whiteboard-cp-value");
  w("background-color") ? Jd(a, b, "background-color") : sa("background-color", qa(Jd, a));
  a = O("whiteboard-cp-value");
  a.title = b;
  b = qh(b).Dc;
  rd(a, b);
  b = wh(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = uh(b[0], b[1], b[2]);
  w("color") ? Jd(a, b, "color") : sa("color", qa(Jd, a))
}
function Cj() {
  pj = (new vf(document.location)).S;
  if(qj = Boolean(Number(pj.get("logging", "0")))) {
    Be().Wc(ve);
    var a = new ci(document.getElementById("log"));
    if(j != a.df) {
      var b = Be(), c = a.Og;
      b.Xb || (b.Xb = []);
      b.Xb.push(c);
      a.df = j
    }
  }else {
    Be().Wc(ne)
  }
  rj.info("Logger works.");
  (a = Vh.get("whiteboard_defaultColor")) && (kj = a);
  nj = kj;
  b = O("whiteboard-controls-left");
  a = O("whiteboard-controls-right");
  c = id("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  nd(b, c);
  c = id("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  nd(b, c);
  b = new gj("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.Z(8);
  ae(b, O("whiteboard-cp"));
  M(b, "action", Bj);
  ij(b);
  Bj({target:b});
  b = new oh("Clear board");
  dh(b, "clear-board-button");
  ae(b, a);
  M(b, "action", zj);
  a = O("drawAreaOverlay");
  Rd(a, j);
  M(a, "click", Aj, m);
  uj();
  a = new Sh;
  tj = new sj;
  yj();
  c = (new vf(document.location)).S;
  b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !s.__demo_shared_domain) {
    Q(Rh, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new vf(document.location);
  b ? b = new gg("/_minerva/", c.la, s.__demo_mainSocketPort) : (d ? (b = s.__demo_shared_domain, w(b) || e(Error("domain was " + H(b) + "; expected a string.")), c = c.L(), yf(c, "_____random_____." + b)) : c = c.L(), c.mb("/_minerva/"), Af(c, "", h), b = new ig(c.toString().replace("_____random_____", "%random%")));
  a = new og(b, a, vj);
  b = tj;
  u(b.Mf) || e(Error("Protocol is missing required method streamStarted"));
  u(b.Lf) || e(Error("Protocol is missing required method streamReset"));
  u(b.Nf) || e(Error("Protocol is missing required method stringReceived"));
  a.Xd = y(b.Mf, b);
  a.onreset = y(b.Lf, b);
  a.Yd = y(b.Nf, b);
  a.start()
}
var Dj = ["__whiteboard_init"], Ej = s;
!(Dj[0] in Ej) && Ej.execScript && Ej.execScript("var " + Dj[0]);
for(var Fj;Dj.length && (Fj = Dj.shift());) {
  !Dj.length && u(Cj) ? Ej[Fj] = Cj : Ej = Ej[Fj] ? Ej[Fj] : Ej[Fj] = {}
}
;})();
