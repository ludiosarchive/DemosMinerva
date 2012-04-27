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
var q, ba = ba || {}, t = this;
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
  a.La = function() {
    return a.bf ? a.bf : a.bf = new a
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
var A = Date.now || function() {
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
var va = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
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
  this.Oc = h
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
          c.push(f), f = b[g], ya(a, a.Oc ? a.Oc.call(b, "" + g, f) : f, c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), Aa(g, c), c.push(":"), ya(a, a.Oc ? a.Oc.call(b, g, f) : f, c), d = ","))
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
function Fa(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function Ga(a) {
  if(!Ha.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(Ia, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(Ja, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Ka, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(La, "&quot;"));
  return a
}
var Ia = /&/g, Ja = /</g, Ka = />/g, La = /\"/g, Ha = /[&<>\"]/;
function Ma(a) {
  return Fa(a.replace(/  /g, " &#160;"), h)
}
function Na(a, b) {
  for(var c = 0, d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = ("" + b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(d.length, f.length), i = 0;0 == c && i < g;i++) {
    var l = d[i] || "", o = f[i] || "", r = RegExp("(\\d*)(\\D*)", "g"), z = RegExp("(\\d*)(\\D*)", "g");
    do {
      var s = r.exec(l) || ["", "", ""], x = z.exec(o) || ["", "", ""];
      if(0 == s[0].length && 0 == x[0].length) {
        break
      }
      c = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == x[1].length ? 0 : parseInt(x[1], 10)) ? -1 : (0 == s[1].length ? 0 : parseInt(s[1], 10)) > (0 == x[1].length ? 0 : parseInt(x[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == x[2].length) ? -1 : (0 == s[2].length) > (0 == x[2].length) ? 1 : 0) || (s[2] < x[2] ? -1 : s[2] > x[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
}
var Oa = 2147483648 * Math.random() | 0;
function Pa(a) {
  return("" + a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  })
}
;function Qa(a, b) {
  b.unshift(a);
  D.call(this, Ea.apply(k, b));
  b.shift()
}
C(Qa, D);
Qa.prototype.name = "AssertionError";
function Ra(a, b) {
  e(new Qa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var E = Array.prototype, Sa = E.indexOf ? function(a, b, c) {
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
}, Ta = E.filter ? function(a, b, c) {
  return E.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = [], g = 0, i = w(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in i) {
      var o = i[l];
      b.call(c, o, l, a) && (f[g++] = o)
    }
  }
  return f
}, Ua = E.map ? function(a, b, c) {
  return E.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = w(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in g && (f[i] = b.call(c, g[i], i, a))
  }
  return f
}, Va = E.some ? function(a, b, c) {
  return E.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return j
    }
  }
  return m
}, Wa = E.every ? function(a, b, c) {
  return E.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && !b.call(c, f[g], g, a)) {
      return m
    }
  }
  return j
};
function Xa(a, b) {
  return 0 <= Sa(a, b)
}
function Ya(a) {
  if(!v(a)) {
    for(var b = a.length - 1;0 <= b;b--) {
      delete a[b]
    }
  }
  a.length = 0
}
function Za(a, b) {
  var c = Sa(a, b);
  0 <= c && E.splice.call(a, c, 1)
}
function $a(a) {
  return E.concat.apply(E, arguments)
}
function ab(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
function bb(a, b) {
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
function cb(a, b, c) {
  return 2 >= arguments.length ? E.slice.call(a, b) : E.slice.call(a, b, c)
}
function db(a, b) {
  E.sort.call(a, b || eb)
}
function eb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function fb(a, b, c) {
  var d = Sa(c, a);
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
        if(ra(a.O)) {
          a.O(b, c)
        }else {
          if(ra(a.Xf)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if("array" == d) {
                d = a.length;
                b.push("[");
                for(var f = "", g = 0;g < d;g++) {
                  b.push(f), fb(a[g], b, c), f = ", "
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
                      g = d[i], Object.prototype.hasOwnProperty.call(a, g) && (l = a[g], b.push(f), Aa(g, b), b.push(": "), fb(l, b, c), f = ", ")
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
  fb(a, b, c)
}
function H(a) {
  var b = [];
  G(a, b, h);
  return b.join("")
}
;function gb(a) {
  if("function" == typeof a.R) {
    a = a.R()
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
function hb(a) {
  if("function" == typeof a.N) {
    return a.N()
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
function ib(a) {
  if("function" == typeof a.ua) {
    return a.ua()
  }
  if("function" != typeof a.N) {
    if(ga(a) || w(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return ua(a)
  }
}
function jb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ga(a) || w(a)) {
      F(a, b, c)
    }else {
      for(var d = ib(a), f = hb(a), g = f.length, i = 0;i < g;i++) {
        b.call(c, f[i], d && d[i], a)
      }
    }
  }
}
function kb(a, b) {
  if("function" == typeof a.every) {
    return a.every(b, h)
  }
  if(ga(a) || w(a)) {
    return Wa(a, b, h)
  }
  for(var c = ib(a), d = hb(a), f = d.length, g = 0;g < f;g++) {
    if(!b.call(h, d[g], c && c[g], a)) {
      return m
    }
  }
  return j
}
;function lb(a, b) {
  this.u = {};
  this.m = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && e(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.ed(a)
  }
}
q = lb.prototype;
q.d = 0;
q.R = n("d");
q.N = function() {
  mb(this);
  for(var a = [], b = 0;b < this.m.length;b++) {
    a.push(this.u[this.m[b]])
  }
  return a
};
q.ua = function() {
  mb(this);
  return this.m.concat()
};
q.ma = function(a) {
  return nb(this.u, a)
};
q.nc = function(a) {
  for(var b = 0;b < this.m.length;b++) {
    var c = this.m[b];
    if(nb(this.u, c) && this.u[c] == a) {
      return j
    }
  }
  return m
};
q.V = function(a, b) {
  if(this === a) {
    return j
  }
  if(this.d != a.R()) {
    return m
  }
  var c = b || ob;
  mb(this);
  for(var d, f = 0;d = this.m[f];f++) {
    if(!c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function ob(a, b) {
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
  return nb(this.u, a) ? (delete this.u[a], this.d--, this.m.length > 2 * this.d && mb(this), j) : m
};
function mb(a) {
  if(a.d != a.m.length) {
    for(var b = 0, c = 0;b < a.m.length;) {
      var d = a.m[b];
      nb(a.u, d) && (a.m[c++] = d);
      b++
    }
    a.m.length = c
  }
  if(a.d != a.m.length) {
    for(var f = {}, c = b = 0;b < a.m.length;) {
      d = a.m[b], nb(f, d) || (a.m[c++] = d, f[d] = 1), b++
    }
    a.m.length = c
  }
}
q.get = function(a, b) {
  return nb(this.u, a) ? this.u[a] : b
};
q.set = function(a, b) {
  nb(this.u, a) || (this.d++, this.m.push(a));
  this.u[a] = b
};
q.ed = function(a) {
  var b;
  a instanceof lb ? (b = a.ua(), a = a.N()) : (b = ua(a), a = ta(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
q.L = function() {
  return new lb(this)
};
function pb(a) {
  mb(a);
  for(var b = {}, c = 0;c < a.m.length;c++) {
    var d = a.m[c];
    b[d] = a.u[d]
  }
  return b
}
function nb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function qb(a) {
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
;var rb, sb;
function tb(a, b) {
  this.rb = a;
  this.nb = b
}
tb.prototype.V = function(a) {
  return a instanceof tb && this.rb == a.rb && this.nb.join(",") == a.nb
};
tb.prototype.O = function(a, b) {
  a.push("new SACK(", "" + this.rb, ", ");
  G(this.nb, a, b);
  a.push(")")
};
function ub() {
  this.w = new lb
}
q = ub.prototype;
q.bb = -1;
q.n = 0;
q.append = function(a) {
  var b = qb(a);
  this.w.set(this.bb + 1, [a, b]);
  this.bb += 1;
  this.n += b
};
q.O = function(a) {
  a.push("<Queue with ", "" + this.w.R(), " item(s), counter=#", "" + this.bb, ", size=", "" + this.n, ">")
};
function vb(a) {
  a = a.w.ua();
  db(a);
  return a
}
q.Qe = function(a) {
  for(var b = vb(this), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    (a == k || f >= a) && c.push([f, this.w.get(f)[0]])
  }
  return c
};
function wb() {
  this.Za = new lb
}
wb.prototype.jb = -1;
wb.prototype.n = 0;
function xb(a) {
  var b = a.Za.ua();
  db(b);
  return new tb(a.jb, b)
}
var yb = {};
function zb() {
  return j
}
;var Ab, Bb, Cb, Db, Eb;
function Fb() {
  return t.navigator ? t.navigator.userAgent : k
}
Eb = Db = Cb = Bb = Ab = m;
var Gb;
if(Gb = Fb()) {
  var Hb = t.navigator;
  Ab = 0 == Gb.indexOf("Opera");
  Bb = !Ab && -1 != Gb.indexOf("MSIE");
  Db = (Cb = !Ab && -1 != Gb.indexOf("WebKit")) && -1 != Gb.indexOf("Mobile");
  Eb = !Ab && !Cb && "Gecko" == Hb.product
}
var Ib = Ab, I = Bb, Jb = Eb, J = Cb, Kb = Db, Lb = t.navigator, Mb = -1 != (Lb && Lb.platform || "").indexOf("Mac"), Nb;
a: {
  var Ob = "", Pb;
  if(Ib && t.opera) {
    var Qb = t.opera.version, Ob = "function" == typeof Qb ? Qb() : Qb
  }else {
    if(Jb ? Pb = /rv\:([^\);]+)(\)|;)/ : I ? Pb = /MSIE\s+([^\);]+)(\)|;)/ : J && (Pb = /WebKit\/(\S+)/), Pb) {
      var Rb = Pb.exec(Fb()), Ob = Rb ? Rb[1] : ""
    }
  }
  if(I) {
    var Sb, Tb = t.document;
    Sb = Tb ? Tb.documentMode : h;
    if(Sb > parseFloat(Ob)) {
      Nb = "" + Sb;
      break a
    }
  }
  Nb = Ob
}
var Ub = {};
function K(a) {
  return Ub[a] || (Ub[a] = 0 <= Na(Nb, a))
}
var Vb = {};
function Wb() {
  return Vb[9] || (Vb[9] = I && !!document.documentMode && 9 <= document.documentMode)
}
;function Xb() {
}
var Yb = 0;
q = Xb.prototype;
q.key = 0;
q.mb = m;
q.kd = m;
q.Wb = function(a, b, c, d, f, g) {
  ka(a) ? this.ef = j : a && a.handleEvent && ka(a.handleEvent) ? this.ef = m : e(Error("Invalid listener argument"));
  this.Bb = a;
  this.xf = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Ac = g;
  this.kd = m;
  this.key = ++Yb;
  this.mb = m
};
q.handleEvent = function(a) {
  return this.ef ? this.Bb.call(this.Ac || this.src, a) : this.Bb.handleEvent.call(this.Bb, a)
};
var Zb = !I || Wb(), $b = !I || Wb(), ac = I && !K("8");
!J || K("528");
Jb && K("1.9b") || I && K("8") || Ib && K("9.5") || J && K("528");
Jb && !K("8") || I && K("9");
var bc = {th:"click", yh:"dblclick", Th:"mousedown", Xh:"mouseup", Wh:"mouseover", Vh:"mouseout", Uh:"mousemove", ii:"selectstart", Nh:"keypress", Mh:"keydown", Oh:"keyup", rh:"blur", Gh:"focus", zh:"deactivate", Hh:I ? "focusin" : "DOMFocusIn", Ih:I ? "focusout" : "DOMFocusOut", sh:"change", hi:"select", ji:"submit", Lh:"input", di:"propertychange", Dh:"dragstart", Ah:"dragenter", Ch:"dragover", Bh:"dragleave", Eh:"drop", ni:"touchstart", mi:"touchmove", li:"touchend", ki:"touchcancel", vh:"contextmenu", 
Fh:"error", Kh:"help", Ph:"load", Qh:"losecapture", ei:"readystatechange", fi:"resize", gi:"scroll", pi:"unload", Jh:"hashchange", $h:"pagehide", ai:"pageshow", ci:"popstate", wh:"copy", bi:"paste", xh:"cut", oh:"beforecopy", ph:"beforecut", qh:"beforepaste", Zh:"online", Yh:"offline", Sh:"message", uh:"connect", oi:J ? "webkitTransitionEnd" : Ib ? "oTransitionEnd" : "transitionend"};
function L() {
}
L.prototype.ba = m;
L.prototype.g = function() {
  this.ba || (this.ba = j, this.c())
};
L.prototype.c = function() {
  this.ig && cc.apply(k, this.ig)
};
function cc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ga(d) ? cc.apply(k, d) : d && "function" == typeof d.g && d.g()
  }
}
;function dc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
C(dc, L);
q = dc.prototype;
q.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
q.lb = m;
q.defaultPrevented = m;
q.Pc = j;
q.stopPropagation = function() {
  this.lb = j
};
q.preventDefault = function() {
  this.defaultPrevented = j;
  this.Pc = m
};
function ec(a) {
  a.stopPropagation()
}
;function fc(a) {
  fc[" "](a);
  return a
}
fc[" "] = da;
function gc(a, b) {
  a && this.Wb(a, b)
}
C(gc, dc);
var hc = [1, 4, 2];
q = gc.prototype;
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
q.Yd = m;
q.Aa = k;
q.Wb = function(a, b) {
  var c = this.type = a.type;
  dc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Jb) {
      var f;
      a: {
        try {
          fc(d.nodeName);
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
  this.Yd = Mb ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Aa = a;
  a.defaultPrevented && this.preventDefault();
  delete this.lb
};
function ic(a) {
  return Zb ? 0 == a.Aa.button : "click" == a.type ? j : !!(a.Aa.button & hc[0])
}
q.stopPropagation = function() {
  gc.f.stopPropagation.call(this);
  this.Aa.stopPropagation ? this.Aa.stopPropagation() : this.Aa.cancelBubble = j
};
q.preventDefault = function() {
  gc.f.preventDefault.call(this);
  var a = this.Aa;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, ac) {
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
  gc.f.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Aa = k
};
var jc = {}, kc = {}, lc = {}, mc = {};
function M(a, b, c, d, f) {
  if(b) {
    if(v(b)) {
      for(var g = 0;g < b.length;g++) {
        M(a, b[g], c, d, f)
      }
      return k
    }
    var d = !!d, i = kc;
    b in i || (i[b] = {d:0, ka:0});
    i = i[b];
    d in i || (i[d] = {d:0, ka:0}, i.d++);
    var i = i[d], l = la(a), o;
    i.ka++;
    if(i[l]) {
      o = i[l];
      for(g = 0;g < o.length;g++) {
        if(i = o[g], i.Bb == c && i.Ac == f) {
          if(i.mb) {
            break
          }
          return o[g].key
        }
      }
    }else {
      o = i[l] = [], i.d++
    }
    g = nc();
    g.src = a;
    i = new Xb;
    i.Wb(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    o.push(i);
    jc[c] = i;
    lc[l] || (lc[l] = []);
    lc[l].push(i);
    a.addEventListener ? (a == t || !a.qd) && a.addEventListener(b, g, d) : a.attachEvent(b in mc ? mc[b] : mc[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function nc() {
  var a = oc, b = $b ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function pc(a, b, c, d, f) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      pc(a, b[g], c, d, f)
    }
    return k
  }
  a = M(a, b, c, d, f);
  jc[a].kd = j;
  return a
}
function qc(a, b, c, d, f) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      qc(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = rc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Bb == c && a[g].capture == d && a[g].Ac == f) {
          sc(a[g].key);
          break
        }
      }
    }
  }
}
function sc(a) {
  if(!jc[a]) {
    return m
  }
  var b = jc[a];
  if(b.mb) {
    return m
  }
  var c = b.src, d = b.type, f = b.xf, g = b.capture;
  c.removeEventListener ? (c == t || !c.qd) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in mc ? mc[d] : mc[d] = "on" + d, f);
  c = la(c);
  f = kc[d][g][c];
  if(lc[c]) {
    var i = lc[c];
    Za(i, b);
    0 == i.length && delete lc[c]
  }
  b.mb = j;
  f.qf = j;
  tc(d, g, c, f);
  delete jc[a];
  return j
}
function tc(a, b, c, d) {
  if(!d.Hc && d.qf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].mb ? d[f].xf.src = k : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.qf = m;
    0 == g && (delete kc[a][b][c], kc[a][b].d--, 0 == kc[a][b].d && (delete kc[a][b], kc[a].d--), 0 == kc[a].d && delete kc[a])
  }
}
function uc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    sa(lc, function(a) {
      for(var f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          sc(g.key), c++
        }
      }
    })
  }else {
    if(a = la(a), lc[a]) {
      for(var a = lc[a], f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          sc(g.key), c++
        }
      }
    }
  }
}
function rc(a, b, c) {
  var d = kc;
  return b in d && (d = d[b], c in d && (d = d[c], a = la(a), d[a])) ? d[a] : k
}
function vc(a, b, c, d, f) {
  var g = 1, b = la(b);
  if(a[b]) {
    a.ka--;
    a = a[b];
    a.Hc ? a.Hc++ : a.Hc = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var o = a[l];
        o && !o.mb && (g &= wc(o, f) !== m)
      }
    }finally {
      a.Hc--, tc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function wc(a, b) {
  var c = a.handleEvent(b);
  a.kd && sc(a.key);
  return c
}
function oc(a, b) {
  if(!jc[a]) {
    return j
  }
  var c = jc[a], d = c.type, f = kc;
  if(!(d in f)) {
    return j
  }
  var f = f[d], g, i;
  if(!$b) {
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
    r = new gc;
    r.Wb(g, this);
    g = j;
    try {
      if(l) {
        for(var s = [], x = r.currentTarget;x;x = x.parentNode) {
          s.push(x)
        }
        i = f[j];
        i.ka = i.d;
        for(var B = s.length - 1;!r.lb && 0 <= B && i.ka;B--) {
          r.currentTarget = s[B], g &= vc(i, s[B], d, j, r)
        }
        if(o) {
          i = f[m];
          i.ka = i.d;
          for(B = 0;!r.lb && B < s.length && i.ka;B++) {
            r.currentTarget = s[B], g &= vc(i, s[B], d, m, r)
          }
        }
      }else {
        g = wc(c, r)
      }
    }finally {
      s && (s.length = 0), r.g()
    }
    return g
  }
  d = new gc(b, this);
  try {
    g = wc(c, d)
  }finally {
    d.g()
  }
  return g
}
var xc = 0;
function yc() {
}
C(yc, L);
q = yc.prototype;
q.qd = j;
q.Kc = k;
q.fe = aa("Kc");
q.addEventListener = function(a, b, c, d) {
  M(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  qc(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = kc;
  if(b in c) {
    if(w(a)) {
      a = new dc(a, this)
    }else {
      if(a instanceof dc) {
        a.target = a.target || this
      }else {
        var d = a, a = new dc(b, this);
        wa(a, d)
      }
    }
    var d = 1, f, c = c[b], b = j in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.Kc) {
        f.push(g)
      }
      g = c[j];
      g.ka = g.d;
      for(var i = f.length - 1;!a.lb && 0 <= i && g.ka;i--) {
        a.currentTarget = f[i], d &= vc(g, f[i], a.type, j, a) && a.Pc != m
      }
    }
    if(m in c) {
      if(g = c[m], g.ka = g.d, b) {
        for(i = 0;!a.lb && i < f.length && g.ka;i++) {
          a.currentTarget = f[i], d &= vc(g, f[i], a.type, m, a) && a.Pc != m
        }
      }else {
        for(f = this;!a.lb && f && g.ka;f = f.Kc) {
          a.currentTarget = f, d &= vc(g, f, a.type, m, a) && a.Pc != m
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
  yc.f.c.call(this);
  uc(this);
  this.Kc = k
};
function zc(a, b) {
  this.Dc = a || 1;
  this.fc = b || Ac;
  this.hd = y(this.Zg, this);
  this.Md = A()
}
C(zc, yc);
zc.prototype.enabled = m;
var Ac = t.window;
q = zc.prototype;
q.qa = k;
q.Zg = function() {
  if(this.enabled) {
    var a = A() - this.Md;
    0 < a && a < 0.8 * this.Dc ? this.qa = this.fc.setTimeout(this.hd, this.Dc - a) : (this.dispatchEvent(Bc), this.enabled && (this.qa = this.fc.setTimeout(this.hd, this.Dc), this.Md = A()))
  }
};
q.start = function() {
  this.enabled = j;
  this.qa || (this.qa = this.fc.setTimeout(this.hd, this.Dc), this.Md = A())
};
q.stop = function() {
  this.enabled = m;
  this.qa && (this.fc.clearTimeout(this.qa), this.qa = k)
};
q.c = function() {
  zc.f.c.call(this);
  this.stop();
  delete this.fc
};
var Bc = "tick";
xc++;
xc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Cc(a, b) {
  this.kc = [];
  this.ye = a;
  this.Ge = b || k
}
q = Cc.prototype;
q.Ka = m;
q.Tb = m;
q.Zb = 0;
q.ke = m;
q.dg = m;
q.jd = 0;
q.cancel = function(a) {
  if(this.Ka) {
    this.ac instanceof Cc && this.ac.cancel()
  }else {
    if(this.G) {
      var b = this.G;
      delete this.G;
      a ? b.cancel(a) : (b.jd--, 0 >= b.jd && b.cancel())
    }
    this.ye ? this.ye.call(this.Ge, this) : this.ke = j;
    this.Ka || this.Rb(new Dc)
  }
};
q.Be = function(a, b) {
  Ec(this, a, b);
  this.Zb--;
  0 == this.Zb && this.Ka && Fc(this)
};
function Ec(a, b, c) {
  a.Ka = j;
  a.ac = c;
  a.Tb = !b;
  Fc(a)
}
function Gc(a) {
  a.Ka && (a.ke || e(new Hc), a.ke = m)
}
function Ic(a, b) {
  Gc(a);
  Ec(a, j, b)
}
q.Rb = function(a) {
  Gc(this);
  Ec(this, m, a)
};
function Jc(a, b) {
  Kc(a, b, k, h)
}
function Lc(a, b) {
  Kc(a, k, b, h)
}
function Kc(a, b, c, d) {
  a.kc.push([b, c, d]);
  a.Ka && Fc(a)
}
function Mc(a, b) {
  Kc(a, b, b, h)
}
function Nc(a) {
  return Va(a.kc, function(a) {
    return ka(a[1])
  })
}
function Fc(a) {
  a.te && (a.Ka && Nc(a)) && (t.clearTimeout(a.te), delete a.te);
  a.G && (a.G.jd--, delete a.G);
  for(var b = a.ac, c = m, d = m;a.kc.length && 0 == a.Zb;) {
    var f = a.kc.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.Tb ? i : g) {
      try {
        var l = g.call(f || a.Ge, b);
        u(l) && (a.Tb = a.Tb && (l == b || l instanceof Error), a.ac = b = l);
        b instanceof Cc && (d = j, a.Zb++)
      }catch(o) {
        b = o, a.Tb = j, Nc(a) || (c = j)
      }
    }
  }
  a.ac = b;
  d && a.Zb && (Kc(b, y(a.Be, a, j), y(a.Be, a, m)), b.dg = j);
  c && (a.te = t.setTimeout(function() {
    e(new Oc(b))
  }, 0))
}
function Pc(a) {
  var b = new Cc;
  Ic(b, a);
  return b
}
function Qc(a) {
  var b = new Cc;
  b.Rb(a);
  return b
}
function Hc() {
  D.call(this)
}
C(Hc, D);
Hc.prototype.message = "Already called";
function Dc() {
  D.call(this)
}
C(Dc, D);
Dc.prototype.message = "Deferred was cancelled";
function Oc(a) {
  D.call(this);
  this.message = "Unhandled Error in Deferred: " + (a.message || "[No message]")
}
C(Oc, D);
function Rc(a) {
  this.H = a;
  this.pc = [];
  this.Ke = [];
  this.cg = y(this.gh, this)
}
Rc.prototype.qa = k;
function Sc(a, b, c, d) {
  a.pc.push([b, c, d]);
  a.qa == k && (a.qa = a.H.setTimeout(a.cg, 0))
}
Rc.prototype.gh = function() {
  this.qa = k;
  var a = this.pc;
  this.pc = [];
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
  if(0 == this.pc.length) {
    a = this.Ke;
    this.Ke = [];
    for(b = 0;b < a.length;b++) {
      Ic(a[b], k)
    }
  }
};
var Tc = new Rc(t.window);
var Uc;
function Vc(a) {
  a = a.className;
  return w(a) && a.match(/\S+/g) || []
}
function Wc(a, b) {
  for(var c = Vc(a), d = cb(arguments, 1), f = c.length + d.length, g = c, i = 0;i < d.length;i++) {
    Xa(g, d[i]) || g.push(d[i])
  }
  a.className = c.join(" ");
  return c.length == f
}
function Xc(a, b) {
  var c = Vc(a), d = cb(arguments, 1), f = Yc(c, d);
  a.className = f.join(" ");
  return f.length == c.length - d.length
}
function Yc(a, b) {
  return Ta(a, function(a) {
    return!Xa(b, a)
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
var Zc = !I || Wb();
!Jb && !I || I && Wb() || Jb && K("1.9.1");
var $c = I && !K("9");
function ad(a) {
  return a ? new bd(cd(a)) : Uc || (Uc = new bd)
}
function O(a) {
  return w(a) ? document.getElementById(a) : a
}
function dd(a, b, c, d) {
  a = d || a;
  b = b && "*" != b ? b.toUpperCase() : "";
  if(a.querySelectorAll && a.querySelector && (b || c)) {
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
      b = i.className, "function" == typeof b.split && Xa(b.split(/\s+/), c) && (d[f++] = i)
    }
    d.length = f;
    return d
  }
  return a
}
function fd(a, b) {
  sa(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in gd ? a.setAttribute(gd[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var gd = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function hd(a, b, c) {
  return id(document, arguments)
}
function id(a, b) {
  var c = b[0], d = b[1];
  if(!Zc && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', Ga(d.name), '"');
    if(d.type) {
      c.push(' type="', Ga(d.type), '"');
      var f = {};
      wa(f, d);
      d = f;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  d && (w(d) ? c.className = d : v(d) ? Wc.apply(k, [c].concat(d)) : fd(c, d));
  2 < b.length && jd(a, c, b, 2);
  return c
}
function jd(a, b, c, d) {
  function f(c) {
    c && b.appendChild(w(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && 0 < g.nodeType) ? F(kd(g) ? ab(g) : g, f) : f(g)
  }
}
function ld(a, b) {
  jd(cd(a), a, arguments, 1)
}
function md(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function nd(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function od(a, b) {
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
function cd(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function pd(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      md(a), a.appendChild(cd(a).createTextNode(b))
    }
  }
}
var qd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, rd = {IMG:" ", BR:"\n"};
function sd(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ja(a) && 0 <= a && 32768 > a) : m
}
function td(a) {
  var b = [];
  ud(a, b, m);
  return b.join("")
}
function ud(a, b, c) {
  if(!(a.nodeName in qd)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in rd) {
        b.push(rd[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          ud(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function kd(a) {
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
function bd(a) {
  this.o = a || t.document || document
}
q = bd.prototype;
q.Ca = ad;
q.b = function(a) {
  return w(a) ? this.o.getElementById(a) : a
};
q.i = function(a, b, c) {
  return id(this.o, arguments)
};
q.createElement = function(a) {
  return this.o.createElement(a)
};
q.createTextNode = function(a) {
  return this.o.createTextNode(a)
};
q.De = function(a, b, c) {
  for(var d = this.o, f = !!c, c = ["<tr>"], g = 0;g < b;g++) {
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
q.append = ld;
q.contains = od;
function vd(a, b) {
  switch(fa(b)) {
    case "string":
      a.push("<string>", Ga(b), "</string>");
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
        a.push('<property id="', d, '">'), vd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', Ga(c), '">'), vd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function wd(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, f = arguments;
  d.push("<arguments>");
  for(var g = f.length, i = 1;i < g;i++) {
    vd(d, f[i])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var xd = m, yd = "";
function zd(a) {
  a = a.match(/[\d]+/g);
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var Ad = navigator.plugins["Shockwave Flash"];
  Ad && (xd = j, Ad.description && (yd = zd(Ad.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (xd = j, yd = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var Bd = navigator.mimeTypes["application/x-shockwave-flash"];
    (xd = Bd && Bd.enabledPlugin) && (yd = zd(Bd.enabledPlugin.description))
  }else {
    try {
      var Cd = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), xd = j, yd = zd(Cd.GetVariable("$version"))
    }catch(Dd) {
      try {
        Cd = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), xd = j, yd = "6.0.21"
      }catch(Ed) {
        try {
          Cd = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), xd = j, yd = zd(Cd.GetVariable("$version"))
        }catch(Fd) {
        }
      }
    }
  }
}
var Gd = yd;
function Hd(a, b, c) {
  a.style[Pa(c)] = b
}
function Id(a, b) {
  var c = cd(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function Jd(a, b, c) {
  b instanceof N ? (c = b.height, b = b.width) : c == h && e(Error("missing height argument"));
  a.style.width = Kd(b);
  a.style.height = Kd(c)
}
function Kd(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
function Ld(a) {
  if("none" != (Id(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style && a.style.display)) {
    return Md(a)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = Md(a);
  b.display = c;
  b.position = f;
  b.visibility = d;
  return a
}
function Md(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = J && !b && !c;
  return(!u(b) || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), I && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new N(b.right - b.left, b.bottom - b.top)) : new N(b, c)
}
function Nd(a) {
  I ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[J ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var Od = Jb ? "MozUserSelect" : J ? "WebkitUserSelect" : k;
function Pd(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Od) {
    if(b = b ? "none" : "", a.style[Od] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[Od] = b
      }
    }
  }else {
    if(I || Ib) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
;function Qd(a) {
  this.gb = a;
  this.m = []
}
C(Qd, L);
var Rd = [];
function P(a, b, c, d) {
  v(c) || (Rd[0] = c, c = Rd);
  for(var f = 0;f < c.length;f++) {
    a.m.push(M(b, c[f], d || a, m, a.gb || a))
  }
  return a
}
function Sd(a, b, c, d, f, g) {
  if(v(c)) {
    for(var i = 0;i < c.length;i++) {
      Sd(a, b, c[i], d, f, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.gb || a;
      f = !!f;
      if(b = rc(b, c, f)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].mb && b[c].Bb == d && b[c].capture == f && b[c].Ac == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, sc(b), Za(a.m, b))
  }
  return a
}
Qd.prototype.Zd = function() {
  F(this.m, sc);
  this.m.length = 0
};
Qd.prototype.c = function() {
  Qd.f.c.call(this);
  this.Zd()
};
Qd.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Td() {
}
ea(Td);
Td.prototype.Ig = 0;
Td.La();
function Ud(a) {
  this.M = a || ad();
  this.bc = Vd
}
C(Ud, yc);
Ud.prototype.Ag = Td.La();
var Vd = k;
function Wd(a, b) {
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
q = Ud.prototype;
q.S = k;
q.p = m;
q.e = k;
q.bc = k;
q.G = k;
q.P = k;
q.lc = k;
q.hh = m;
function Xd(a) {
  return a.S || (a.S = ":" + (a.Ag.Ig++).toString(36))
}
q.b = n("e");
function Yd(a) {
  return a.vb || (a.vb = new Qd(a))
}
q.getParent = n("G");
q.fe = function(a) {
  this.G && this.G != a && e(Error("Method not supported"));
  Ud.f.fe.call(this, a)
};
q.Ca = n("M");
q.i = function() {
  this.e = this.M.createElement("div")
};
function Zd(a, b) {
  a.p && e(Error("Component already rendered"));
  a.e || a.i();
  b ? b.insertBefore(a.e, k) : a.M.o.body.appendChild(a.e);
  (!a.G || a.G.p) && a.Q()
}
q.Q = function() {
  this.p = j;
  $d(this, function(a) {
    !a.p && a.b() && a.Q()
  })
};
q.cb = function() {
  $d(this, function(a) {
    a.p && a.cb()
  });
  this.vb && this.vb.Zd();
  this.p = m
};
q.c = function() {
  Ud.f.c.call(this);
  this.p && this.cb();
  this.vb && (this.vb.g(), delete this.vb);
  $d(this, function(a) {
    a.g()
  });
  !this.hh && this.e && nd(this.e);
  this.G = this.e = this.lc = this.P = k
};
q.Sb = n("e");
q.Hb = function(a) {
  this.p && e(Error("Component already rendered"));
  this.bc = a
};
function $d(a, b) {
  a.P && F(a.P, b, h)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = w(a) ? a : Xd(a), d;
    this.lc && c ? (d = this.lc, d = (c in d ? d[c] : h) || k) : d = k;
    a = d;
    c && a && (d = this.lc, c in d && delete d[c], Za(this.P, a), b && (a.cb(), a.e && nd(a.e)), c = a, c == k && e(Error("Unable to set parent component")), c.G = k, Ud.f.fe.call(c, k))
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function ae(a) {
  this.u = new lb;
  a && this.ed(a)
}
function be(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + la(a) : b.substr(0, 1) + a
}
q = ae.prototype;
q.R = function() {
  return this.u.R()
};
q.add = function(a) {
  this.u.set(be(a), a)
};
q.ed = function(a) {
  for(var a = hb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
q.Zd = function(a) {
  for(var a = hb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
q.remove = function(a) {
  return this.u.remove(be(a))
};
q.clear = function() {
  this.u.clear()
};
q.Na = function() {
  return this.u.Na()
};
q.contains = function(a) {
  return this.u.ma(be(a))
};
q.N = function() {
  return this.u.N()
};
q.L = function() {
  return new ae(this)
};
q.V = function(a) {
  return this.R() == gb(a) && ce(this, a)
};
function ce(a, b) {
  var c = gb(b);
  if(a.R() > c) {
    return m
  }
  !(b instanceof ae) && 5 < c && (b = new ae(b));
  return kb(a, function(a) {
    if("function" == typeof b.contains) {
      a = b.contains(a)
    }else {
      if("function" == typeof b.nc) {
        a = b.nc(a)
      }else {
        if(ga(b) || w(b)) {
          a = Xa(b, a)
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
;function de(a) {
  return ee(a || arguments.callee.caller, [])
}
function ee(a, b) {
  var c = [];
  if(Xa(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(fe(a) + "(");
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
            g = (g = fe(g)) ? g : "[fn]";
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
        c.push(ee(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function fe(a) {
  if(ge[a]) {
    return ge[a]
  }
  a = "" + a;
  if(!ge[a]) {
    var b = /function ([^\(]+)/.exec(a);
    ge[a] = b ? b[1] : "[Anonymous]"
  }
  return ge[a]
}
var ge = {};
function he(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
he.prototype.wd = k;
he.prototype.vd = k;
var ie = 0;
he.prototype.reset = function(a, b, c, d, f) {
  "number" == typeof f || ie++;
  this.Of = d || A();
  this.Ab = a;
  this.of = b;
  this.Dg = c;
  delete this.wd;
  delete this.vd
};
he.prototype.Uc = aa("Ab");
function je(a) {
  this.Hg = a
}
je.prototype.G = k;
je.prototype.Ab = k;
je.prototype.P = k;
je.prototype.Vb = k;
function ke(a, b) {
  this.name = a;
  this.value = b
}
ke.prototype.toString = n("name");
var le = new ke("OFF", Infinity), me = new ke("SHOUT", 1200), ne = new ke("SEVERE", 1E3), oe = new ke("WARNING", 900), pe = new ke("INFO", 800), qe = new ke("CONFIG", 700), re = new ke("FINE", 500), se = new ke("FINEST", 300), te = new ke("ALL", 0);
q = je.prototype;
q.getParent = n("G");
q.Uc = aa("Ab");
function ue(a) {
  if(a.Ab) {
    return a.Ab
  }
  if(a.G) {
    return ue(a.G)
  }
  Ra("Root logger has no level set.");
  return k
}
q.log = function(a, b, c) {
  if(a.value >= ue(this).value) {
    a = this.sg(a, b, c);
    b = "log:" + a.of;
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.Vb) {
        for(var f = 0, g = h;g = c.Vb[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
q.sg = function(a, b, c) {
  var d = new he(a, "" + b, this.Hg);
  if(c) {
    d.wd = c;
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
          o = c.lineNumber || c.wi || "Not available"
        }catch(s) {
          o = "Not available", z = j
        }
        try {
          r = c.fileName || c.filename || c.sourceURL || l
        }catch(x) {
          r = "Not available", z = j
        }
        i = z || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:o, fileName:r, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + Ga(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + Ga(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ga(de(g) + "-> ")
    }catch(B) {
      f = "Exception trying to expose exception! You win, we lose. " + B
    }
    d.vd = f
  }
  return d
};
function ve(a, b) {
  a.log(ne, b, h)
}
function Q(a, b, c) {
  a.log(oe, b, c)
}
q.info = function(a, b) {
  this.log(pe, a, b)
};
function R(a, b) {
  a.log(re, b, h)
}
function S(a, b) {
  a.log(se, b, h)
}
var we = {}, xe = k;
function ye() {
  xe || (xe = new je(""), we[""] = xe, xe.Uc(qe))
}
function ze() {
  ye();
  return xe
}
function T(a) {
  ye();
  var b;
  if(!(b = we[a])) {
    b = new je(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = T(a.substr(0, c));
    c.P || (c.P = {});
    c.P[d] = b;
    b.G = c;
    we[a] = b
  }
  return b
}
;function Ae(a, b) {
  Ud.call(this, b);
  this.pg = a;
  this.ud = new Qd(this);
  this.rc = new lb
}
C(Ae, Ud);
q = Ae.prototype;
q.a = T("goog.ui.media.FlashObject");
q.jh = "window";
q.xe = "#000000";
q.Zf = "sameDomain";
q.Z = function(a, b) {
  this.qb = w(a) ? a : Math.round(a) + "px";
  this.Ed = w(b) ? b : Math.round(b) + "px";
  this.b() && Jd(this.b() ? this.b().firstChild : k, this.qb, this.Ed);
  return this
};
q.Q = function() {
  Ae.f.Q.call(this);
  var a = this.b(), b;
  b = I ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = I ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = Ea(c, this.jh), d = this.rc.ua(), f = this.rc.N(), g = [], i = 0;i < d.length;i++) {
    g.push(encodeURIComponent("" + d[i]) + "=" + encodeURIComponent("" + f[i]))
  }
  b = Ea(b, Xd(this), Xd(this), "goog-ui-media-flash-object", Ga(this.pg), Ga(g.join("&")), this.xe, this.Zf, c);
  a.innerHTML = b;
  this.qb && this.Ed && this.Z(this.qb, this.Ed);
  P(this.ud, this.b(), ta(bc), ec)
};
q.i = function() {
  this.Bf != k && !(0 <= Na(Gd, this.Bf)) && (Q(this.a, "Required flash version not found:" + this.Bf), e(Error("Method not supported")));
  var a = this.Ca().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
q.c = function() {
  Ae.f.c.call(this);
  this.rc = k;
  this.ud.g();
  this.ud = k
};
function Be() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ A()).toString(36)
}
function Ce(a) {
  return a.substr(0, a.length - 1)
}
var De = /^(0|[1-9]\d*)$/, Ee = /^(0|\-?[1-9]\d*)$/;
function Fe(a) {
  var b = Ge;
  return De.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function He(a) {
  D.call(this, a)
}
C(He, D);
He.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function Ie(a, b, c) {
  function d() {
    f && delete t.__loadFlashObject_callbacks[f]
  }
  var f;
  if(Jb && !K("1.8.1.20")) {
    return Qc(new He("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Na(Gd, "9"))) {
    return Qc(new He("Need Flash Player 9+; had " + (Gd ? Gd : "none")))
  }
  var g;
  f = "_" + Be();
  var i = new Cc(d);
  t.__loadFlashObject_callbacks[f] = function() {
    a.setTimeout(function() {
      d();
      Ic(i, O(g))
    }, 0)
  };
  b.rc.set("onloadcallback", '__loadFlashObject_callbacks["' + f + '"]()');
  g = Xd(b);
  Zd(b, c);
  return i
}
function Je(a, b, c) {
  var d = Ie(a, b, c), f = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  Mc(d, function(b) {
    a.clearTimeout(f);
    return b
  });
  return d
}
;function Ke(a, b) {
  this.S = "_" + Be();
  this.$c = a;
  this.Ra = b;
  this.Ya = a.Ya
}
C(Ke, L);
q = Ke.prototype;
q.Cb = j;
q.od = m;
q.a = T("cw.net.FlashSocket");
q.O = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.S);
  a.push("'>")
};
function Le(a, b, c) {
  "frames" == b ? (a = a.Ra, Me(a.J), Ne(a.J, c)) : "stillreceiving" == b ? (c = a.Ra, S(c.a, "onstillreceiving"), Me(c.J)) : "connect" == b ? (c = a.Ra, c.a.info("onconnect"), Me(c.J), a = c.Mb, c.Mb = k, a.length && (S(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.Xc.ic(a))) : "close" == b ? (a.Cb = m, a.g()) : "ioerror" == b ? (a.Cb = m, b = a.Ra, Q(b.a, "onioerror: " + H(c)), Oe(b.J, m), a.g()) : "securityerror" == b ? (a.Cb = m, b = a.Ra, Q(b.a, "onsecurityerror: " + H(c)), 
  Oe(b.J, m), a.g()) : e(Error("bad event: " + b))
}
function Pe(a) {
  a.od = j;
  a.Cb = m;
  a.g()
}
q.md = function(a, b) {
  try {
    var c = this.Ya.CallFunction(wd("__FC_connect", this.S, a, b, "<int32/>\n"))
  }catch(d) {
    return ve(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), Pe(this)
  }
  '"OK"' != c && e(Error("__FC_connect failed? ret: " + c))
};
q.ic = function(a) {
  try {
    var b = this.Ya.CallFunction(wd("__FC_writeFrames", this.S, a))
  }catch(c) {
    return ve(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), Pe(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (Q(this.a, "Flash no longer knows of " + this.S + "; disposing."), this.g()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
q.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.Cb);
  Ke.f.c.call(this);
  var a = this.Ya;
  delete this.Ya;
  if(this.Cb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(wd("__FC_close", this.S)))
    }catch(b) {
      ve(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.od = j
    }
  }
  if(this.od) {
    a = this.Ra, Q(a.a, "oncrash"), Oe(a.J, j)
  }else {
    this.Ra.onclose()
  }
  delete this.Ra;
  delete this.$c.wb[this.S]
};
function Qe(a, b) {
  this.v = a;
  this.Ya = b;
  this.wb = {};
  this.ld = "__FST_" + Be();
  t[this.ld] = y(this.lg, this);
  var c = b.CallFunction(wd("__FC_setCallbackFunc", this.ld));
  '"OK"' != c && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
C(Qe, L);
q = Qe.prototype;
q.a = T("cw.net.FlashSocketTracker");
q.O = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  G(this.wb, a, b);
  a.push(">")
};
q.pd = function(a) {
  a = new Ke(this, a);
  return this.wb[a.S] = a
};
q.jg = function(a, b, c, d) {
  var f = this.wb[a];
  f ? "frames" == b && d ? (Le(f, "ioerror", "FlashConnector hadError while handling data."), f.g()) : Le(f, b, c) : Q(this.a, "Cannot dispatch because we have no instance: " + H([a, b, c, d]))
};
q.lg = function(a, b, c, d) {
  try {
    Sc(this.v, this.jg, this, [a, b, c, d])
  }catch(f) {
    t.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
q.c = function() {
  Qe.f.c.call(this);
  for(var a = ta(this.wb);a.length;) {
    a.pop().g()
  }
  delete this.wb;
  delete this.Ya;
  t[this.ld] = h
};
function Re(a) {
  this.J = a;
  this.Mb = []
}
C(Re, L);
q = Re.prototype;
q.a = T("cw.net.FlashSocketConduit");
q.ic = function(a) {
  this.Mb ? (S(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Mb.push.apply(this.Mb, a)) : (S(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.Xc.ic(a))
};
q.md = function(a, b) {
  this.Xc.md(a, b)
};
q.onclose = function() {
  this.a.info("onclose");
  Oe(this.J, m)
};
q.c = function() {
  this.a.info("in disposeInternal.");
  Re.f.c.call(this);
  this.Xc.g();
  delete this.J
};
var Se = [];
function Te() {
  var a = new Cc;
  Se.push(a);
  return a
}
function Ue(a) {
  var b = Se;
  Se = [];
  F(b, function(b) {
    Ic(b, a)
  })
}
function Ve(a, b) {
  if(Se.length) {
    return Te()
  }
  var c = new Ae(b + "FlashConnector.swf?cb=" + We);
  c.xe = "#777777";
  c.Z(300, 30);
  var d = O("minerva-elements");
  d || e(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
  var f = O("minerva-elements-FlashConnectorSwf");
  f || (f = hd("div", {id:"minerva-elements-FlashConnectorSwf"}), d.appendChild(f));
  rb = Je(a.H, c, f);
  Jc(rb, Ue);
  return Te()
}
;function Xe() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function Ye(a) {
  return a * Math.PI / 180
}
;var Ge = Math.pow(2, 53);
var Ze = {Xf:p("<cw.eq.Wildcard>")};
function $e(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function af(a, b, c) {
  var d = fa(a), f = fa(b);
  if(a == Ze || b == Ze) {
    return j
  }
  if(a != k && "function" == typeof a.V) {
    return c && c.push("running custom equals function on left object"), a.V(b, c)
  }
  if(b != k && "function" == typeof b.V) {
    return c && c.push("running custom equals function on right object"), b.V(a, c)
  }
  if($e(d) || $e(f)) {
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
                if(!af(a[d], b[d], c)) {
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
          if(a.Wf == zb && b.Wf == zb) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!af(a[g], b[g], c)) {
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
  this.Pg = a;
  this.Mc = b
}
U.prototype.V = function(a, b) {
  return ia(a) && this.constructor == a.constructor && af(this.Mc, a.Mc, b)
};
U.prototype.O = function(a, b) {
  a.push("new ", this.Pg, "(");
  for(var c = "", d = 0;d < this.Mc.length;d++) {
    a.push(c), c = ", ", G(this.Mc[d], a, b)
  }
  a.push(")")
};
function V(a) {
  D.call(this, a)
}
C(V, D);
V.prototype.name = "cw.net.InvalidFrame";
function bf() {
  var a = [];
  this.oa(a);
  return a.join("")
}
function cf() {
}
cf.prototype.V = function(a, b) {
  return!(a instanceof cf) ? m : af(df(this), df(a), b)
};
cf.prototype.O = function(a, b) {
  a.push("<HelloFrame properties=");
  G(df(this), a, b);
  a.push(">")
};
function df(a) {
  return[a.Fa, a.wf, a.Ze, a.Af, a.ec, a.ne, a.pf, a.nf, a.Pd, a.lf, a.Sf, a.Nf, a.Ua, a.Gc]
}
cf.prototype.ca = bf;
cf.prototype.oa = function(a) {
  var b = {};
  b.tnum = this.Fa;
  b.ver = this.wf;
  b.format = this.Ze;
  b["new"] = this.Af;
  b.id = this.ec;
  b.ming = this.ne;
  b.pad = this.pf;
  b.maxb = this.nf;
  u(this.Pd) && (b.maxt = this.Pd);
  b.maxia = this.lf;
  b.tcpack = this.Sf;
  b.eeds = this.Nf;
  b.sack = this.Ua instanceof tb ? Ce((new ef(this.Ua)).ca()) : this.Ua;
  b.seenack = this.Gc instanceof tb ? Ce((new ef(this.Gc)).ca()) : this.Gc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(xa(b), "H")
};
function ff(a) {
  U.call(this, "StringFrame", [a]);
  this.pe = a
}
C(ff, U);
ff.prototype.ca = bf;
ff.prototype.oa = function(a) {
  a.push(this.pe, " ")
};
function gf(a) {
  U.call(this, "CommentFrame", [a]);
  this.eg = a
}
C(gf, U);
gf.prototype.ca = bf;
gf.prototype.oa = function(a) {
  a.push(this.eg, "^")
};
function hf(a) {
  U.call(this, "SeqNumFrame", [a]);
  this.Hf = a
}
C(hf, U);
hf.prototype.ca = bf;
hf.prototype.oa = function(a) {
  a.push("" + this.Hf, "N")
};
function jf(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = Ge;
    if(Ee.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var g = Fe(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new tb(a, c)
}
function ef(a) {
  U.call(this, "SackFrame", [a]);
  this.Ua = a
}
C(ef, U);
ef.prototype.ca = bf;
ef.prototype.oa = function(a) {
  var b = this.Ua;
  a.push(b.nb.join(","), "|", "" + b.rb);
  a.push("A")
};
function kf(a) {
  U.call(this, "StreamStatusFrame", [a]);
  this.gf = a
}
C(kf, U);
kf.prototype.ca = bf;
kf.prototype.oa = function(a) {
  var b = this.gf;
  a.push(b.nb.join(","), "|", "" + b.rb);
  a.push("T")
};
function lf() {
  U.call(this, "StreamCreatedFrame", [])
}
C(lf, U);
lf.prototype.ca = bf;
lf.prototype.oa = function(a) {
  a.push("C")
};
function mf() {
  U.call(this, "YouCloseItFrame", [])
}
C(mf, U);
mf.prototype.ca = bf;
mf.prototype.oa = function(a) {
  a.push("Y")
};
function nf(a, b) {
  U.call(this, "ResetFrame", [a, b]);
  this.yf = a;
  this.we = b
}
C(nf, U);
nf.prototype.ca = bf;
nf.prototype.oa = function(a) {
  a.push(this.yf, "|", "" + Number(this.we), "!")
};
var of = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function pf(a) {
  U.call(this, "TransportKillFrame", [a]);
  this.reason = a
}
C(pf, U);
pf.prototype.ca = bf;
pf.prototype.oa = function(a) {
  a.push(this.reason, "K")
};
function qf(a) {
  a || e(new V("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new ff(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = jf(Ce(a)), a == k && e(new V("bad sack")), new ef(a)
  }
  if("N" == b) {
    return a = Fe(Ce(a)), a == k && e(new V("bad seqNum")), new hf(a)
  }
  if("T" == b) {
    return a = jf(Ce(a)), a == k && e(new V("bad lastSackSeen")), new kf(a)
  }
  if("Y" == b) {
    return 1 != a.length && e(new V("leading garbage")), new mf
  }
  if("^" == b) {
    return new gf(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && e(new V("leading garbage")), new lf
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && e(new V("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && e(new V("bad applicationLevel")), new nf(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = of[a], a == k && e(new V("unknown kill reason: " + a)), new pf(a)
  }
  e(new V("Invalid frame type " + b))
}
;var rf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function sf(a, b) {
  var c = a.match(rf), d = b.match(rf);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function tf(a, b) {
  var c;
  if(a instanceof tf) {
    this.ea = u(b) ? b : a.ea, uf(this, a.Va), c = a.pb, vf(this), this.pb = c, wf(this, a.Ja), xf(this, a.Eb), this.Gb(a.K), yf(this, a.Y.L()), c = a.eb, vf(this), this.eb = c
  }else {
    if(a && (c = ("" + a).match(rf))) {
      this.ea = !!b;
      uf(this, c[1] || "", j);
      var d = c[2] || "";
      vf(this);
      this.pb = d ? decodeURIComponent(d) : "";
      wf(this, c[3] || "", j);
      xf(this, c[4]);
      this.Gb(c[5] || "", j);
      yf(this, c[6] || "", j);
      c = c[7] || "";
      vf(this);
      this.eb = c ? decodeURIComponent(c) : ""
    }else {
      this.ea = !!b, this.Y = new zf(k, 0, this.ea)
    }
  }
}
q = tf.prototype;
q.Va = "";
q.pb = "";
q.Ja = "";
q.Eb = k;
q.K = "";
q.eb = "";
q.Bg = m;
q.ea = m;
q.toString = function() {
  var a = [], b = this.Va;
  b && a.push(Af(b, Bf), ":");
  if(b = this.Ja) {
    a.push("//");
    var c = this.pb;
    c && a.push(Af(c, Bf), "@");
    a.push(encodeURIComponent("" + b));
    b = this.Eb;
    b != k && a.push(":", "" + b)
  }
  if(b = this.K) {
    this.Ja && "/" != b.charAt(0) && a.push("/"), a.push(Af(b, "/" == b.charAt(0) ? Cf : Df))
  }
  (b = this.Y.toString()) && a.push("?", b);
  (b = this.eb) && a.push("#", Af(b, Ef));
  return a.join("")
};
q.L = function() {
  return new tf(this)
};
function uf(a, b, c) {
  vf(a);
  a.Va = c ? b ? decodeURIComponent(b) : "" : b;
  a.Va && (a.Va = a.Va.replace(/:$/, ""))
}
function wf(a, b, c) {
  vf(a);
  a.Ja = c ? b ? decodeURIComponent(b) : "" : b
}
function xf(a, b) {
  vf(a);
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.Eb = b) : a.Eb = k
}
q.Gb = function(a, b) {
  vf(this);
  this.K = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function yf(a, b, c) {
  vf(a);
  b instanceof zf ? (a.Y = b, a.Y.ee(a.ea)) : (c || (b = Af(b, Ff)), a.Y = new zf(b, 0, a.ea))
}
function vf(a) {
  a.Bg && e(Error("Tried to modify a read-only Uri"))
}
q.ee = function(a) {
  this.ea = a;
  this.Y && this.Y.ee(a);
  return this
};
function Gf(a) {
  return a instanceof tf ? a.L() : new tf(a, h)
}
function Af(a, b) {
  return w(a) ? encodeURI(a).replace(b, Hf) : k
}
function Hf(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Bf = /[#\/\?@]/g, Df = /[\#\?:]/g, Cf = /[\#\?]/g, Ff = /[\#\?@]/g, Ef = /#/g;
function zf(a, b, c) {
  this.da = a || k;
  this.ea = !!c
}
function If(a) {
  if(!a.s && (a.s = new lb, a.d = 0, a.da)) {
    for(var b = a.da.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = Jf(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
q = zf.prototype;
q.s = k;
q.d = k;
q.R = function() {
  If(this);
  return this.d
};
q.add = function(a, b) {
  If(this);
  this.da = k;
  a = Jf(this, a);
  if(this.ma(a)) {
    var c = this.s.get(a);
    v(c) ? c.push(b) : this.s.set(a, [c, b])
  }else {
    this.s.set(a, b)
  }
  this.d++;
  return this
};
q.remove = function(a) {
  If(this);
  a = Jf(this, a);
  if(this.s.ma(a)) {
    this.da = k;
    var b = this.s.get(a);
    v(b) ? this.d -= b.length : this.d--;
    return this.s.remove(a)
  }
  return m
};
q.clear = function() {
  this.s = this.da = k;
  this.d = 0
};
q.Na = function() {
  If(this);
  return 0 == this.d
};
q.ma = function(a) {
  If(this);
  a = Jf(this, a);
  return this.s.ma(a)
};
q.nc = function(a) {
  var b = this.N();
  return Xa(b, a)
};
q.ua = function() {
  If(this);
  for(var a = this.s.N(), b = this.s.ua(), c = [], d = 0;d < b.length;d++) {
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
q.N = function(a) {
  If(this);
  var b = [];
  if(a) {
    this.ma(a) && (b = $a(b, this.s.get(Jf(this, a))))
  }else {
    for(var a = this.s.N(), c = 0;c < a.length;c++) {
      b = $a(b, a[c])
    }
  }
  return b
};
q.set = function(a, b) {
  If(this);
  this.da = k;
  a = Jf(this, a);
  if(this.ma(a)) {
    var c = this.s.get(a);
    v(c) ? this.d -= c.length : this.d--
  }
  this.s.set(a, b);
  this.d++;
  return this
};
q.get = function(a, b) {
  var c = a ? this.N(a) : [];
  return 0 < c.length ? c[0] : b
};
q.toString = function() {
  if(this.da) {
    return this.da
  }
  if(!this.s) {
    return""
  }
  for(var a = [], b = this.s.ua(), c = 0;c < b.length;c++) {
    for(var d = b[c], f = encodeURIComponent("" + d), d = this.N(d), g = 0;g < d.length;g++) {
      var i = f;
      "" !== d[g] && (i += "=" + encodeURIComponent("" + d[g]));
      a.push(i)
    }
  }
  return this.da = a.join("&")
};
q.L = function() {
  var a = new zf;
  a.da = this.da;
  this.s && (a.s = this.s.L());
  return a
};
function Jf(a, b) {
  var c = "" + b;
  a.ea && (c = c.toLowerCase());
  return c
}
q.ee = function(a) {
  a && !this.ea && (If(this), this.da = k, jb(this.s, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ea = a
};
function Kf(a, b, c, d) {
  this.contentWindow = a;
  this.qc = b;
  this.oe = c;
  this.qg = d
}
Kf.prototype.O = function(a, b) {
  a.push("<XDRFrame frameId=");
  G(this.qg, a, b);
  a.push(", expandedUrl=");
  G(this.qc, a, b);
  a.push(", streams=");
  G(this.oe, a, b);
  a.push(">")
};
function Lf() {
  this.frames = [];
  this.Nd = new lb
}
Lf.prototype.a = T("cw.net.XDRTracker");
function Mf(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor(Xe()) + ("" + Math.floor(Xe()))
  })
}
function Nf(a, b) {
  for(var c = Of, d = 0;d < c.frames.length;d++) {
    var f = c.frames[d], g;
    if(g = 0 == f.oe.length) {
      g = f.qc;
      var i = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + i + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + H(b) + " existing frame " + H(f)), Pc(f)
    }
  }
  d = Be() + Be();
  f = Mf(a);
  g = t.location;
  g instanceof tf || (g = Gf(g));
  f instanceof tf || (f = Gf(f));
  var l = g;
  g = f;
  f = l.L();
  (i = !!g.Va) ? uf(f, g.Va) : i = !!g.pb;
  if(i) {
    var o = g.pb;
    vf(f);
    f.pb = o
  }else {
    i = !!g.Ja
  }
  i ? wf(f, g.Ja) : i = g.Eb != k;
  o = g.K;
  if(i) {
    xf(f, g.Eb)
  }else {
    if(i = !!g.K) {
      if("/" != o.charAt(0) && (l.Ja && !l.K ? o = "/" + o : (l = f.K.lastIndexOf("/"), -1 != l && (o = f.K.substr(0, l + 1) + o))), ".." == o || "." == o) {
        o = ""
      }else {
        if(-1 != o.indexOf("./") || -1 != o.indexOf("/.")) {
          for(var l = 0 == o.lastIndexOf("/", 0), o = o.split("/"), r = [], z = 0;z < o.length;) {
            var s = o[z++];
            "." == s ? l && z == o.length && r.push("") : ".." == s ? ((1 < r.length || 1 == r.length && "" != r[0]) && r.pop(), l && z == o.length && r.push("")) : (r.push(s), l = j)
          }
          o = r.join("/")
        }
      }
    }
  }
  i ? f.Gb(o) : i = "" !== g.Y.toString();
  i ? yf(f, g.Y.toString() ? decodeURIComponent(g.Y.toString()) : "") : i = !!g.eb;
  i && (g = g.eb, vf(f), f.eb = g);
  f = f.toString();
  g = ("" + t.location).match(rf)[3] || k;
  i = f.match(rf)[3] || k;
  g == i ? (c.a.info("No need to make a real XDRFrame for " + H(b)), c = Pc(new Kf(t, f, [b], k))) : ((g = O("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new Cc, c.Nd.set(d, [i, f, b]), c.a.info("Creating new XDRFrame " + H(d) + "for " + H(b)), c = hd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:f + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = i);
  return c
}
Lf.prototype.mh = function(a) {
  var b = this.Nd.get(a);
  b || e(Error("Unknown frameId " + H(a)));
  this.Nd.remove(b);
  var c = b[0], a = new Kf(O("minerva-xdrframe-" + a).contentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  Ic(c, a)
};
var Of = new Lf;
t.__XHRTracker_xdrFrameLoaded = y(Of.mh, Of);
var Pf;
Pf = m;
var Qf = Fb();
Qf && (-1 != Qf.indexOf("Firefox") || -1 != Qf.indexOf("Camino") || -1 != Qf.indexOf("iPhone") || -1 != Qf.indexOf("iPod") || -1 != Qf.indexOf("iPad") || -1 != Qf.indexOf("Android") || -1 != Qf.indexOf("Chrome") && (Pf = j));
var Rf = Pf;
var We = "4bdfc178fc0e508c0cd5efc3fdb09920";
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function Sf(a, b, c, d, f, g) {
  Cc.call(this, f, g);
  this.kf = a;
  this.rd = [];
  this.Me = !!b;
  this.og = !!c;
  this.fg = !!d;
  for(b = 0;b < a.length;b++) {
    Kc(a[b], y(this.Ue, this, b, j), y(this.Ue, this, b, m))
  }
  0 == a.length && !this.Me && Ic(this, this.rd)
}
C(Sf, Cc);
Sf.prototype.rf = 0;
Sf.prototype.Ue = function(a, b, c) {
  this.rf++;
  this.rd[a] = [b, c];
  this.Ka || (this.Me && b ? Ic(this, [a, c]) : this.og && !b ? this.Rb(c) : this.rf == this.kf.length && Ic(this, this.rd));
  this.fg && !b && (c = k);
  return c
};
Sf.prototype.Rb = function(a) {
  Sf.f.Rb.call(this, a);
  F(this.kf, function(a) {
    a.cancel()
  })
};
function Tf(a) {
  a = new Sf(a, m, j);
  Jc(a, function(a) {
    return Ua(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function Uf(a, b) {
  this.kh = a;
  this.mf = b
}
Uf.prototype.Kd = 0;
Uf.prototype.Jc = 0;
Uf.prototype.xd = m;
function Vf(a) {
  var b = [];
  if(a.xd) {
    return[b, 2]
  }
  var c = a.Kd, d = a.kh.responseText;
  for(a.Kd = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var f = d.substr(a.Jc, c - a.Jc), f = f.replace(/\r$/, "");
    if(f.length > a.mf) {
      return a.xd = j, [b, 2]
    }
    b.push(f);
    a.Jc = c += 1
  }
  return a.Kd - a.Jc - 1 > a.mf ? (a.xd = j, [b, 2]) : [b, 1]
}
;function Wf(a, b, c) {
  this.J = b;
  this.pa = a;
  this.nd = c
}
C(Wf, L);
q = Wf.prototype;
q.a = T("cw.net.XHRMaster");
q.Sa = -1;
q.Od = function(a, b, c) {
  this.nd.__XHRSlave_makeRequest(this.pa, a, b, c)
};
q.Ma = n("Sa");
q.Rd = function(a, b) {
  1 != b && ve(this.a, H(this.pa) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Me(this.J);
  Ne(this.J, a)
};
q.Sd = function(a) {
  R(this.a, "ongotheaders_: " + H(a));
  var b = k;
  "Content-Length" in a && (b = Fe(a["Content-Length"]));
  a = this.J;
  R(a.a, a.r() + " got Content-Length: " + b);
  a.ya == Xf && (b == k && (Q(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Yf(a, 2E3 + 1E3 * (b / 3072)))
};
q.Td = function(a) {
  1 != a && R(this.a, this.J.r() + "'s XHR's readyState is " + a);
  this.Sa = a;
  2 <= this.Sa && Me(this.J)
};
q.Qd = function() {
  this.J.g()
};
q.c = function() {
  Wf.f.c.call(this);
  delete Zf.Da[this.pa];
  this.nd.__XHRSlave_dispose(this.pa);
  delete this.nd
};
function $f() {
  this.Da = {}
}
C($f, L);
q = $f.prototype;
q.a = T("cw.net.XHRMasterTracker");
q.pd = function(a, b) {
  var c = "_" + Be(), d = new Wf(c, a, b);
  return this.Da[c] = d
};
q.Rd = function(a, b, c) {
  if(Jb) {
    for(var d = [], f = 0, g = b.length;f < g;f++) {
      d[f] = b[f]
    }
    b = d
  }else {
    b = $a(b)
  }
  (d = this.Da[a]) ? d.Rd(b, c) : ve(this.a, "onframes_: no master for " + H(a))
};
q.Sd = function(a, b) {
  var c = this.Da[a];
  c ? c.Sd(b) : ve(this.a, "ongotheaders_: no master for " + H(a))
};
q.Td = function(a, b) {
  var c = this.Da[a];
  c ? c.Td(b) : ve(this.a, "onreadystatechange_: no master for " + H(a))
};
q.Qd = function(a) {
  var b = this.Da[a];
  b ? (delete this.Da[b.pa], b.Qd()) : ve(this.a, "oncomplete_: no master for " + H(a))
};
q.c = function() {
  $f.f.c.call(this);
  for(var a = ta(this.Da);a.length;) {
    a.pop().g()
  }
  delete this.Da
};
var Zf = new $f;
t.__XHRMaster_onframes = y(Zf.Rd, Zf);
t.__XHRMaster_oncomplete = y(Zf.Qd, Zf);
t.__XHRMaster_ongotheaders = y(Zf.Sd, Zf);
t.__XHRMaster_onreadystatechange = y(Zf.Td, Zf);
function ag(a, b, c) {
  this.wa = a;
  this.host = b;
  this.port = c
}
function bg(a, b, c) {
  this.host = a;
  this.port = b;
  this.bh = c
}
function cg(a, b) {
  b || (b = a);
  this.wa = a;
  this.Wa = b
}
cg.prototype.O = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  G(this.wa, a, b);
  a.push(", secondaryUrl=");
  G(this.Wa, a, b);
  a.push(">")
};
function dg(a, b, c, d) {
  this.wa = a;
  this.vf = b;
  this.Wa = c;
  this.Gf = d;
  (!(0 == this.wa.indexOf("http://") || 0 == this.wa.indexOf("https://")) || !(0 == this.Wa.indexOf("http://") || 0 == this.Wa.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.vf.location.href;
  sf(this.wa, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Gf.location.href;
  sf(this.Wa, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
dg.prototype.O = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  G(this.wa, a, b);
  a.push(", secondaryUrl=");
  G(this.Wa, a, b);
  a.push(">")
};
var eg = new gf(";)]}");
function fg() {
}
fg.prototype.Pe = p(1);
function gg(a) {
  t.setTimeout(function() {
    u(a.message) && a.stack && (a.message += "\n" + a.stack);
    e(a)
  }, 0)
}
function hg(a) {
  this.Xg = a
}
hg.prototype.O = function(a, b) {
  a.push("<UserContext for ");
  G(this.Xg, a, b);
  a.push(">")
};
function ig(a, b, c, d) {
  U.call(this, "TransportInfo", [a, b, c, d]);
  this.Fa = a
}
C(ig, U);
function jg(a, b, c) {
  this.A = a;
  this.Yg = b ? b : new fg;
  this.v = c ? c : Tc;
  this.gc = new ae;
  this.ec = Be() + Be();
  this.xa = new ub;
  this.Hd = new wb;
  this.hc = k;
  this.bd = [];
  this.Jb = new hg(this);
  this.bg = y(this.fh, this);
  J && (this.hc = pc(t, "load", this.Rg, m, this))
}
C(jg, L);
q = jg.prototype;
q.a = T("cw.net.ClientStream");
q.hf = new tb(-1, []);
q.jf = new tb(-1, []);
q.Gg = 50;
q.Fg = 1048576;
q.Vd = k;
q.Ud = k;
q.Wd = k;
q.Xd = k;
q.onreset = k;
q.tf = k;
q.Fb = k;
q.le = m;
q.$d = m;
q.h = 1;
q.re = -1;
q.j = k;
q.z = k;
q.$b = k;
q.me = 0;
q.uf = 0;
q.Ff = 0;
q.O = function(a, b) {
  a.push("<ClientStream id=");
  G(this.ec, a, b);
  a.push(", state=", "" + this.h);
  a.push(", primary=");
  G(this.j, a, b);
  a.push(", secondary=");
  G(this.z, a, b);
  a.push(", resetting=");
  G(this.$b, a, b);
  a.push(">")
};
function kg(a) {
  var b = [-1];
  a.j && b.push(a.j.Db);
  a.z && b.push(a.z.Db);
  return Math.max.apply(Math.max, b)
}
function lg(a) {
  if(!(3 > a.h)) {
    mg(a);
    var b = 0 != a.xa.w.R(), c = xb(a.Hd), d = !c.V(a.jf) && !(a.j && c.V(a.j.zb) || a.z && c.V(a.z.zb)), f = kg(a);
    if((b = b && f < a.xa.bb) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.j.$a ? (S(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.j, c != d.zb && (!d.Ea && !d.D.length && ng(d), d.D.push(new ef(c)), d.zb = c)), b && og(a.j, a.xa, f + 1), a.j.Ba()) : a.z == k ? a.le ? (S(a.a, "tryToSend_: creating secondary to send " + g), a.z = pg(a, m, j), a.z && (b && og(a.z, a.xa, f + 1), a.z.Ba())) : (S(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.$d = j) : S(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
function mg(a) {
  a.Fb != k && (a.v.H.clearTimeout(a.Fb), a.Fb = k)
}
q.fh = function() {
  this.Fb = k;
  lg(this)
};
function qg(a) {
  a.Fb == k && (a.Fb = a.v.H.setTimeout(a.bg, 6))
}
q.Rg = function() {
  this.hc = k;
  if(this.j && this.j.xb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.j;
    a.dd = j;
    a.g()
  }
  this.z && this.z.xb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.z, a.dd = j, a.g())
};
function rg(a, b) {
  var c;
  u(c) || (c = j);
  3 < a.h && e(Error("sendString: Can't send in state " + a.h));
  c && (w(b) || e(Error("sendString: not a string: " + H(b))), /^([ -~]*)$/.test(b) || e(Error("sendString: string has illegal chars: " + H(b))));
  a.xa.append(b);
  qg(a)
}
function pg(a, b, c) {
  var d;
  a.A instanceof dg ? d = 1 == a.Yg.Pe() ? Xf : sg : a.A instanceof bg ? d = tg : e(Error("Don't support endpoint " + H(a.A)));
  a.re += 1;
  b = new ug(a.v, a, a.re, d, a.A, b);
  S(a.a, "Created: " + b.r());
  if(c) {
    if(a.Wd) {
      c = new ig(b.Fa, b.Ha, b.Ta, b.$a);
      try {
        a.Wd.call(a.Jb, c)
      }catch(f) {
        Q(a.a, "ontransportcreated raised uncaught exception", f), gg(f)
      }
    }
    if(4 == a.h || a.ba) {
      return k
    }
  }
  a.gc.add(b);
  return b
}
function vg(a, b, c) {
  var d = new wg(a.v, a, b, c);
  S(a.a, "Created: " + d.r() + ", delay=" + b + ", times=" + c);
  a.gc.add(d);
  return d
}
function xg(a, b) {
  a.gc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  R(a.a, "Offline: " + b.r());
  var c = 4 == a.h && b.Vf;
  if(b instanceof ug && !c) {
    if(a.Xd) {
      var d = new ig(b.Fa, b.Ha, b.Ta, b.$a);
      try {
        a.Xd.call(a.Jb, d)
      }catch(f) {
        Q(a.a, "ontransportdestroyed raised uncaught exception", f), gg(f)
      }
    }
    if(4 == a.h || a.ba) {
      return
    }
  }
  a.me = b.Qa ? a.me + b.Qa : 0;
  1 <= a.me && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), yg(a, "stream penalty reached limit", m), a.g());
  if(3 < a.h) {
    c ? (R(a.a, "Disposing because resettingTransport_ is done."), a.g()) : R(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    c = b instanceof wg;
    if(!c && b.dd) {
      var g = J ? Rf ? [0, 1] : [9, 20] : [0, 0], c = g[0], d = g[1];
      S(a.a, "getDelayForNextTransport_: " + H({delay:c, times:d}))
    }else {
      if(d = b.Ae(), b == a.j ? d ? g = ++a.uf : c || (g = a.uf = 0) : d ? g = ++a.Ff : c || (g = a.Ff = 0), c || !g) {
        d = c = 0, S(a.a, "getDelayForNextTransport_: " + H({count:g, delay:c, times:d}))
      }else {
        var i = 2E3 * Math.min(g, 3), l = Math.floor(4E3 * Math.random()) - 2E3, o = Math.max(0, b.Rf - b.se), d = (c = Math.max(0, i + l - o)) ? 1 : 0;
        S(a.a, "getDelayForNextTransport_: " + H({count:g, base:i, variance:l, oldDuration:o, delay:c, times:d}))
      }
    }
    c = [c, d];
    g = c[0];
    c = c[1];
    if(b == a.j) {
      a.j = k;
      if(c) {
        a.j = vg(a, g, c)
      }else {
        g = kg(a);
        a.j = pg(a, j, j);
        if(!a.j) {
          return
        }
        og(a.j, a.xa, g + 1)
      }
      a.j.Ba()
    }else {
      b == a.z && (a.z = k, c ? (a.z = vg(a, g, c), a.z.Ba()) : lg(a))
    }
  }
}
function yg(a, b, c) {
  if(a.onreset) {
    try {
      a.onreset.call(a.Jb, b, c)
    }catch(d) {
      Q(a.a, "onreset raised uncaught exception", d), gg(d)
    }
  }
}
q.reset = function(a) {
  3 < this.h && e(Error("reset: Can't send reset in state " + this.h));
  mg(this);
  0 != this.xa.w.R() && Q(this.a, "reset: strings in send queue will never be sent: " + H(this.xa));
  this.h = 4;
  this.j && this.j.$a ? (this.a.info("reset: Sending ResetFrame over existing primary."), zg(this.j, a), this.j.Ba()) : (this.j && (R(this.a, "reset: Disposing primary before sending ResetFrame."), this.j.g()), this.z && (R(this.a, "reset: Disposing secondary before sending ResetFrame."), this.z.g()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.$b = pg(this, m, m), zg(this.$b, a), this.$b.Ba());
  yg(this, a, j)
};
function Ag(a, b, c, d) {
  var f;
  f = a.Hd;
  for(var g = a.Gg, i = a.Fg, l = [], o = m, r = 0, z = c.length;r < z;r++) {
    var s = c[r], x = s[0], s = s[1];
    if(x == f.jb + 1) {
      f.jb += 1;
      for(l.push(s);;) {
        x = f.jb + 1;
        s = f.Za.get(x, yb);
        if(s === yb) {
          break
        }
        l.push(s[0]);
        f.Za.remove(x);
        f.n -= s[1];
        f.jb = x
      }
    }else {
      if(!(x <= f.jb)) {
        if(g != k && f.Za.R() >= g) {
          o = j;
          break
        }
        var B = qb(s);
        if(i != k && f.n + B > i) {
          o = j;
          break
        }
        f.Za.set(x, [s, B]);
        f.n += B
      }
    }
  }
  f.Za.Na() && f.Za.clear();
  f = [l, o];
  c = f[0];
  f = f[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      i = c[g];
      if(a.Vd) {
        try {
          a.Vd.call(a.Jb, i)
        }catch(ed) {
          Q(a.a, "onstring raised uncaught exception", ed), gg(ed)
        }
      }
      if(4 == a.h || a.ba) {
        return
      }
    }
  }
  d || qg(a);
  if(!(4 == a.h || a.ba) && f) {
    ve(b.a, b.r() + "'s peer caused rwin overflow."), b.g()
  }
}
q.Je = function(a) {
  ve(this.a, "Failed to start " + H(this) + "; error was " + H(a.message));
  this.g()
};
q.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.h && e(Error("ClientStream.start: " + H(this) + " already started"));
  this.Ud && this.Ud(this);
  this.h = 2;
  if(this.A instanceof cg) {
    var a = Nf(this.A.wa, this), b = Nf(this.A.Wa, this), a = Tf([a, b]);
    Jc(a, y(this.ng, this));
    Lc(a, y(this.Je, this))
  }else {
    if(this.A instanceof ag) {
      if(sb) {
        this.Le()
      }else {
        var a = Ve(this.v, this.A.wa), c = this;
        Jc(a, function(a) {
          sb || (sb = new Qe(c.v, a));
          return k
        });
        Jc(a, y(this.Le, this));
        Lc(a, y(this.Je, this))
      }
    }else {
      Bg(this)
    }
  }
};
q.ng = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].qc, f = a[1].qc;
  this.bd.push(a[0]);
  this.bd.push(a[1]);
  this.A = new dg(d, b, f, c);
  Bg(this)
};
q.Le = function() {
  this.A = new bg(this.A.host, this.A.port, sb);
  Bg(this)
};
function Bg(a) {
  a.h = 3;
  a.j = pg(a, j, j);
  a.j && (og(a.j, a.xa, k), a.j.Ba())
}
q.c = function() {
  this.a.info(H(this) + " in disposeInternal.");
  mg(this);
  this.h = 5;
  for(var a = this.gc.N(), b = 0;b < a.length;b++) {
    a[b].g()
  }
  for(a = 0;a < this.bd.length;a++) {
    Za(this.bd[a].oe, this)
  }
  J && this.hc && (sc(this.hc), this.hc = k);
  this.tf && this.tf.call(this.Jb);
  delete this.gc;
  delete this.j;
  delete this.z;
  delete this.$b;
  delete this.Jb;
  jg.f.c.call(this)
};
var Xf = 1, sg = 2, tg = 3;
function ug(a, b, c, d, f, g) {
  this.v = a;
  this.C = b;
  this.Fa = c;
  this.ya = d;
  this.A = f;
  this.D = [];
  this.Ha = g;
  this.$a = !this.xb();
  this.Ta = this.ya != Xf;
  this.ag = y(this.$g, this)
}
C(ug, L);
q = ug.prototype;
q.a = T("cw.net.ClientTransport");
q.q = k;
q.se = k;
q.Rf = k;
q.Nc = k;
q.Ea = m;
q.Yc = m;
q.zb = k;
q.sc = 0;
q.Db = -1;
q.Lc = -1;
q.Vf = m;
q.dd = m;
q.Qa = 0;
q.Ub = m;
q.O = function(a) {
  a.push("<ClientTransport #", "" + this.Fa, ", becomePrimary=", "" + this.Ha, ">")
};
q.r = function() {
  return(this.Ha ? "Prim. T#" : "Sec. T#") + this.Fa
};
q.Ae = function() {
  return!(!this.Ub && this.sc)
};
q.xb = function() {
  return this.ya == Xf || this.ya == sg
};
function Cg(a, b) {
  db(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Ag(a.C, a, b, !a.Ta)
}
function Dg(a, b, c) {
  try {
    var d = qf(b);
    a.sc += 1;
    R(a.a, a.r() + " RECV " + H(d));
    var f;
    1 == a.sc && !d.V(eg) && a.xb() ? (Q(a.a, a.r() + " is closing soon because got bad preamble: " + H(d)), f = j) : f = m;
    if(f) {
      return j
    }
    if(d instanceof ff) {
      if(!/^([ -~]*)$/.test(d.pe)) {
        return a.Ub = j
      }
      a.Lc += 1;
      c.push([a.Lc, d.pe])
    }else {
      if(d instanceof ef) {
        var g = a.C, i = d.Ua;
        g.hf = i;
        var l = g.xa, o = i.rb, c = m;
        o > l.bb && (c = j);
        for(var r = vb(l).concat(), d = 0;d < r.length;d++) {
          var z = r[d];
          if(z > o) {
            break
          }
          var s = l.w.get(z)[1];
          l.w.remove(z);
          l.n -= s
        }
        for(d = 0;d < i.nb.length;d++) {
          var x = i.nb[d];
          x > l.bb && (c = j);
          l.w.ma(x) && (s = l.w.get(x)[1], l.w.remove(x), l.n -= s)
        }
        l.w.Na() && l.w.clear();
        if(c) {
          return Q(a.a, a.r() + " is closing soon because got bad SackFrame"), a.Ub = j
        }
      }else {
        if(d instanceof hf) {
          a.Lc = d.Hf - 1
        }else {
          if(d instanceof kf) {
            a.C.jf = d.gf
          }else {
            if(d instanceof mf) {
              return S(a.a, a.r() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof pf) {
              return a.Ub = j, "stream_attach_failure" == d.reason ? a.Qa += 1 : "acked_unsent_strings" == d.reason && (a.Qa += 0.5), S(a.a, a.r() + " is closing soon because got " + H(d)), j
            }
            if(!(d instanceof gf)) {
              if(d instanceof lf) {
                var B = a.C, ed = !a.Ta;
                S(B.a, "Stream is now confirmed to exist at server.");
                B.le = j;
                B.$d && !ed && (B.$d = m, lg(B))
              }else {
                c.length && (Cg(a, c), Ya(c));
                if(d instanceof nf) {
                  var Pg = a.C;
                  yg(Pg, d.yf, d.we);
                  Pg.g();
                  return j
                }
                e(Error(a.r() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(Qg) {
    return Qg instanceof V || e(Qg), Q(a.a, a.r() + " is closing soon because got InvalidFrame: " + H(b)), a.Ub = j
  }
  return m
}
function Ne(a, b) {
  a.Yc = j;
  try {
    for(var c = m, d = [], f = 0, g = b.length;f < g;f++) {
      if(a.ba) {
        a.a.info(a.r() + " returning from loop because we're disposed.");
        return
      }
      if(c = Dg(a, b[f], d)) {
        break
      }
    }
    d.length && Cg(a, d);
    a.Yc = m;
    a.D.length && a.Ba();
    c && (S(a.a, a.r() + " closeSoon is true.  Frames were: " + H(b)), a.g())
  }finally {
    a.Yc = m
  }
}
q.$g = function() {
  Q(this.a, this.r() + " timed out due to lack of connection or no data being received.");
  this.g()
};
function Eg(a) {
  a.Nc != k && (a.v.H.clearTimeout(a.Nc), a.Nc = k)
}
function Yf(a, b) {
  Eg(a);
  b = Math.round(b);
  a.Nc = a.v.H.setTimeout(a.ag, b);
  R(a.a, a.r() + "'s receive timeout set to " + b + " ms.")
}
function Me(a) {
  a.ya != Xf && (a.ya == tg || a.ya == sg ? Yf(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ya)))
}
function ng(a) {
  var b = new cf;
  b.Fa = a.Fa;
  b.wf = 2;
  b.Ze = 2;
  a.C.le || (b.Af = j);
  b.ec = a.C.ec;
  b.ne = a.Ta;
  b.ne && (b.pf = 4096);
  b.nf = 3E5;
  b.lf = a.Ta ? Math.floor(10) : 0;
  b.Sf = m;
  a.Ha && (b.Nf = k, b.Pd = Math.floor((a.Ta ? 358E4 : 25E3) / 1E3));
  b.Ua = xb(a.C.Hd);
  b.Gc = a.C.hf;
  a.D.push(b);
  a.zb = b.Ua
}
function Oe(a, b) {
  b && (a.Qa += 0.5);
  a.g()
}
q.Ba = function() {
  this.Ea && !this.$a && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.Yc) {
    S(this.a, this.r() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ea;
    this.Ea = j;
    !a && !this.D.length && ng(this);
    for(a = 0;a < this.D.length;a++) {
      R(this.a, this.r() + " SEND " + H(this.D[a]))
    }
    if(this.xb()) {
      for(var a = [], b = 0, c = this.D.length;b < c;b++) {
        this.D[b].oa(a), a.push("\n")
      }
      this.D = [];
      a = a.join("");
      b = this.Ha ? this.A.wa : this.A.Wa;
      this.q = Zf.pd(this, this.Ha ? this.A.vf : this.A.Gf);
      this.se = this.v.H === Ac ? A() : this.v.H.getTime();
      this.q.Od(b, "POST", a);
      Yf(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Ta ? 0 : this.Ha ? 25E3 : 0))
    }else {
      if(this.ya == tg) {
        a = [];
        b = 0;
        for(c = this.D.length;b < c;b++) {
          a.push(this.D[b].ca())
        }
        this.D = [];
        this.q ? this.q.ic(a) : (b = this.A, this.q = new Re(this), this.q.Xc = b.bh.pd(this.q), this.se = this.v.H === Ac ? A() : this.v.H.getTime(), this.q.md(b.host, b.port), this.q.ba || (this.q.ic(a), this.q.ba || Yf(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.ya))
      }
    }
  }
};
function og(a, b, c) {
  !a.Ea && !a.D.length && ng(a);
  for(var c = Math.max(c, a.Db + 1), b = b.Qe(c), c = 0, d = b.length;c < d;c++) {
    var f = b[c], g = f[0], f = f[1];
    (-1 == a.Db || a.Db + 1 != g) && a.D.push(new hf(g));
    a.D.push(new ff(f));
    a.Db = g
  }
}
q.c = function() {
  this.a.info(this.r() + " in disposeInternal.");
  ug.f.c.call(this);
  this.Rf = this.v.H === Ac ? A() : this.v.H.getTime();
  this.D = [];
  Eg(this);
  this.q && this.q.g();
  var a = this.C;
  this.C = k;
  xg(a, this)
};
function zg(a, b) {
  !a.Ea && !a.D.length && ng(a);
  a.D.push(new nf(b, j));
  a.Vf = j
}
function wg(a, b, c, d) {
  this.v = a;
  this.C = b;
  this.Ie = c;
  this.Ce = d
}
C(wg, L);
q = wg.prototype;
q.Ea = m;
q.$a = m;
q.wc = k;
q.zb = k;
q.a = T("cw.net.DoNothingTransport");
function Fg(a) {
  a.wc = a.v.H.setTimeout(function() {
    a.wc = k;
    a.Ce--;
    a.Ce ? Fg(a) : a.g()
  }, a.Ie)
}
q.Ba = function() {
  this.Ea && !this.$a && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ea = j;
  Fg(this)
};
q.O = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.Ie, ">")
};
q.xb = p(m);
q.r = p("Wast. T");
q.Ae = p(m);
q.c = function() {
  this.a.info(this.r() + " in disposeInternal.");
  wg.f.c.call(this);
  this.wc != k && this.v.H.clearTimeout(this.wc);
  var a = this.C;
  this.C = k;
  xg(a, this)
};
function Gg(a, b) {
  a.setAttribute("role", b);
  a.yi = b
}
;function Hg() {
}
var Ig;
ea(Hg);
q = Hg.prototype;
q.tc = function() {
};
q.i = function(a) {
  var b = a.Ca().i("div", Jg(this, a).join(" "), a.aa);
  this.be(a, b);
  return b
};
q.Sb = function(a) {
  return a
};
q.Qb = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(I && !K("7")) {
      var d = Kg(Vc(a), b);
      d.push(b);
      qa(c ? Wc : Xc, a).apply(k, d)
    }else {
      c ? Wc(a, b) : Xc(a, b)
    }
  }
};
q.af = function(a) {
  a.bc == k && (a.bc = "rtl" == (Id(a.p ? a.e : a.M.o.body, "direction") || ((a.p ? a.e : a.M.o.body).currentStyle ? (a.p ? a.e : a.M.o.body).currentStyle.direction : k) || (a.p ? a.e : a.M.o.body).style && (a.p ? a.e : a.M.o.body).style.direction));
  a.bc && this.Hb(a.b(), j);
  a.isEnabled() && this.Tc(a, a.Kb)
};
q.be = function(a, b) {
  a.isEnabled() || this.$(b, 1, j);
  a.h & 8 && this.$(b, 8, j);
  a.T & 16 && this.$(b, 16, !!(a.h & 16));
  a.T & 64 && this.$(b, 64, !!(a.h & 64))
};
q.Qc = function(a, b) {
  Pd(a, !b, !I && !Ib)
};
q.Hb = function(a, b) {
  this.Qb(a, this.t() + "-rtl", b)
};
q.df = function(a) {
  var b;
  return a.T & 32 && (b = a.fb()) ? sd(b) : m
};
q.Tc = function(a, b) {
  var c;
  if(a.T & 32 && (c = a.fb())) {
    if(!b && a.h & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.h & 32 && a.Te()
    }
    sd(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
q.je = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.la = function(a, b, c) {
  var d = a.b();
  if(d) {
    var f = Lg(this, b);
    f && this.Qb(a, f, c);
    this.$(d, b, c)
  }
};
q.$ = function(a, b, c) {
  Ig || (Ig = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Ig[b]) && a.setAttribute("aria-" + b, c)
};
q.Rc = function(a, b) {
  var c = this.Sb(a);
  if(c && (md(c), b)) {
    if(w(b)) {
      pd(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = cd(c);
          c.appendChild(w(a) ? b.createTextNode(a) : a)
        }
      };
      v(b) ? F(b, d) : ga(b) && !("nodeType" in b) ? F(ab(b), d) : d(b)
    }
  }
};
q.fb = function(a) {
  return a.b()
};
q.t = p("goog-control");
function Jg(a, b) {
  var c = a.t(), d = [c], f = a.t();
  f != c && d.push(f);
  c = b.h;
  for(f = [];c;) {
    var g = c & -c;
    f.push(Lg(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.ta) && d.push.apply(d, c);
  I && !K("7") && d.push.apply(d, Kg(d));
  return d
}
function Kg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  F([], function(d) {
    Wa(d, qa(Xa, a)) && (!b || Xa(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Lg(a, b) {
  if(!a.ze) {
    var c = a.t();
    a.ze = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.ze[b]
}
;function Mg(a, b) {
  a || e(Error("Invalid class name " + a));
  ka(b) || e(Error("Invalid decorator function " + b))
}
var Ng = {};
function Og(a, b, c, d, f) {
  if(!I && (!J || !K("525"))) {
    return j
  }
  if(Mb && f) {
    return Rg(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || I && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(I && Wb());
    case 27:
      return!J
  }
  return Rg(a)
}
function Rg(a) {
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
function Sg(a) {
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
;function Tg(a, b) {
  a && Ug(this, a, b)
}
C(Tg, yc);
q = Tg.prototype;
q.e = k;
q.Ec = k;
q.Jd = k;
q.Fc = k;
q.Pa = -1;
q.Oa = -1;
var Vg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Wg = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Xg = I || 
J && K("525");
q = Tg.prototype;
q.wg = function(a) {
  if(J && (17 == this.Pa && !a.ctrlKey || 18 == this.Pa && !a.altKey)) {
    this.Oa = this.Pa = -1
  }
  Xg && !Og(a.keyCode, this.Pa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Oa = Jb ? Sg(a.keyCode) : a.keyCode
};
q.xg = function() {
  this.Oa = this.Pa = -1
};
q.handleEvent = function(a) {
  var b = a.Aa, c, d;
  I && "keypress" == a.type ? (c = this.Oa, d = 13 != c && 27 != c ? b.keyCode : 0) : J && "keypress" == a.type ? (c = this.Oa, d = 0 <= b.charCode && 63232 > b.charCode && Rg(c) ? b.charCode : 0) : Ib ? (c = this.Oa, d = Rg(c) ? b.keyCode : 0) : (c = b.keyCode || this.Oa, d = b.charCode || 0, Mb && (63 == d && 224 == c) && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in Vg ? f = Vg[c] : 25 == c && a.shiftKey && (f = 9) : g && g in Wg && (f = Wg[g]);
  a = f == this.Pa;
  this.Pa = f;
  b = new Yg(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.g()
  }
};
q.b = n("e");
function Ug(a, b, c) {
  a.Fc && a.detach();
  a.e = b;
  a.Ec = M(a.e, "keypress", a, c);
  a.Jd = M(a.e, "keydown", a.wg, c, a);
  a.Fc = M(a.e, "keyup", a.xg, c, a)
}
q.detach = function() {
  this.Ec && (sc(this.Ec), sc(this.Jd), sc(this.Fc), this.Fc = this.Jd = this.Ec = k);
  this.e = k;
  this.Oa = this.Pa = -1
};
q.c = function() {
  Tg.f.c.call(this);
  this.detach()
};
function Yg(a, b, c, d) {
  d && this.Wb(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(Yg, gc);
function W(a, b, c) {
  Ud.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = la(b);
      if(d = Ng[d]) {
        break
      }
      b = b.f ? b.f.constructor : k
    }
    b = d ? ka(d.La) ? d.La() : new d : k
  }
  this.l = b;
  this.Sc(a)
}
C(W, Ud);
q = W.prototype;
q.aa = k;
q.h = 0;
q.T = 39;
q.gd = 255;
q.Wg = 0;
q.Kb = j;
q.ta = k;
q.Dd = j;
q.fd = m;
q.Lg = k;
q.fb = function() {
  return this.l.fb(this)
};
function Zg(a, b) {
  b && (a.ta ? Xa(a.ta, b) || a.ta.push(b) : a.ta = [b], a.l.Qb(a, b, j))
}
q.Qb = function(a, b) {
  b ? Zg(this, a) : a && this.ta && (Za(this.ta, a), 0 == this.ta.length && (this.ta = k), this.l.Qb(this, a, m))
};
q.i = function() {
  var a = this.l.i(this);
  this.e = a;
  var b = this.Lg || this.l.tc();
  b && Gg(a, b);
  this.fd || this.l.Qc(a, m);
  this.Kb || this.l.je(a, m)
};
q.Sb = function() {
  return this.l.Sb(this.b())
};
q.Q = function() {
  W.f.Q.call(this);
  this.l.af(this);
  if(this.T & -2 && (this.Dd && $g(this, j), this.T & 32)) {
    var a = this.fb();
    if(a) {
      var b = this.yb || (this.yb = new Tg);
      Ug(b, a);
      P(P(P(Yd(this), b, "key", this.We), a, "focus", this.ug), a, "blur", this.Te)
    }
  }
};
function $g(a, b) {
  var c = Yd(a), d = a.b();
  b ? (P(P(P(P(c, d, "mouseover", a.zc), d, "mousedown", a.xc), d, "mouseup", a.Xe), d, "mouseout", a.yc), I && P(c, d, "dblclick", a.Ve)) : (Sd(Sd(Sd(Sd(c, d, "mouseover", a.zc), d, "mousedown", a.xc), d, "mouseup", a.Xe), d, "mouseout", a.yc), I && Sd(c, d, "dblclick", a.Ve))
}
q.cb = function() {
  W.f.cb.call(this);
  this.yb && this.yb.detach();
  this.Kb && this.isEnabled() && this.l.Tc(this, m)
};
q.c = function() {
  W.f.c.call(this);
  this.yb && (this.yb.g(), delete this.yb);
  delete this.l;
  this.ta = this.aa = k
};
q.Rc = function(a) {
  this.l.Rc(this.b(), a);
  this.Sc(a)
};
q.Sc = aa("aa");
q.Oe = function() {
  var a = this.aa;
  if(!a) {
    return""
  }
  if(!w(a)) {
    if(v(a)) {
      a = Ua(a, td).join("")
    }else {
      if($c && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        ud(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      $c || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
q.Hb = function(a) {
  W.f.Hb.call(this, a);
  var b = this.b();
  b && this.l.Hb(b, a)
};
q.Qc = function(a) {
  this.fd = a;
  var b = this.b();
  b && this.l.Qc(b, a)
};
q.je = function(a, b) {
  if(b || this.Kb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.l.je(c, a);
    this.isEnabled() && this.l.Tc(this, a);
    this.Kb = a;
    return j
  }
  return m
};
q.isEnabled = function() {
  return!(this.h & 1)
};
function ah(a, b) {
  bh(a, 2, b) && a.la(2, b)
}
q.Id = function() {
  return!!(this.h & 4)
};
q.setActive = function(a) {
  bh(this, 4, a) && this.la(4, a)
};
q.ge = function(a) {
  bh(this, 8, a) && this.la(8, a)
};
q.la = function(a, b) {
  this.T & a && b != !!(this.h & a) && (this.l.la(this, a, b), this.h = b ? this.h | a : this.h & ~a)
};
function X(a, b) {
  return!!(a.gd & b) && !!(a.T & b)
}
function bh(a, b, c) {
  return!!(a.T & b) && !!(a.h & b) != c && (!(a.Wg & b) || a.dispatchEvent(Wd(b, c))) && !a.ba
}
q.zc = function(a) {
  !ch(a, this.b()) && (this.dispatchEvent("enter") && this.isEnabled() && X(this, 2)) && ah(this, j)
};
q.yc = function(a) {
  !ch(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(m), X(this, 2) && ah(this, m))
};
function ch(a, b) {
  return!!a.relatedTarget && od(b, a.relatedTarget)
}
q.xc = function(a) {
  if(this.isEnabled() && (X(this, 2) && ah(this, j), ic(a) && (!J || !Mb || !a.ctrlKey))) {
    X(this, 4) && this.setActive(j), this.l.df(this) && this.fb().focus()
  }
  !this.fd && (ic(a) && (!J || !Mb || !a.ctrlKey)) && a.preventDefault()
};
q.Xe = function(a) {
  this.isEnabled() && (X(this, 2) && ah(this, j), this.Id() && (this.kb(a) && X(this, 4)) && this.setActive(m))
};
q.Ve = function(a) {
  this.isEnabled() && this.kb(a)
};
q.kb = function(a) {
  if(X(this, 16)) {
    var b = !(this.h & 16);
    bh(this, 16, b) && this.la(16, b)
  }
  X(this, 8) && this.ge(j);
  X(this, 64) && (b = !(this.h & 64), bh(this, 64, b) && this.la(64, b));
  b = new dc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.Yd = a.Yd);
  return this.dispatchEvent(b)
};
q.ug = function() {
  X(this, 32) && bh(this, 32, j) && this.la(32, j)
};
q.Te = function() {
  X(this, 4) && this.setActive(m);
  X(this, 32) && bh(this, 32, m) && this.la(32, m)
};
q.We = function(a) {
  return this.Kb && this.isEnabled() && this.Cd(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
q.Cd = function(a) {
  return 13 == a.keyCode && this.kb(a)
};
ka(W) || e(Error("Invalid component class " + W));
ka(Hg) || e(Error("Invalid renderer class " + Hg));
var dh = la(W);
Ng[dh] = Hg;
Mg("goog-control", function() {
  return new W(k)
});
function eh() {
}
C(eh, Hg);
ea(eh);
q = eh.prototype;
q.tc = p("button");
q.$ = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : eh.f.$.call(this, a, b, c)
};
q.i = function(a) {
  var b = eh.f.i.call(this, a), c = a.uc();
  c && this.ie(b, c);
  (c = a.vc()) && this.Wc(b, c);
  a.T & 16 && this.$(b, 16, !!(a.h & 16));
  return b
};
q.vc = da;
q.Wc = da;
q.uc = function(a) {
  return a.title
};
q.ie = function(a, b) {
  a && (a.title = b || "")
};
q.t = p("goog-button");
function fh() {
}
C(fh, eh);
ea(fh);
q = fh.prototype;
q.tc = function() {
};
q.i = function(a) {
  a.p && m != a.Dd && $g(a, m);
  a.Dd = m;
  a.gd &= -256;
  a.p && a.h & 32 && e(Error("Component already rendered"));
  a.h & 32 && a.la(32, m);
  a.T &= -33;
  return a.Ca().i("button", {"class":Jg(this, a).join(" "), disabled:!a.isEnabled(), title:a.uc() || "", value:a.vc() || ""}, a.Oe() || "")
};
q.af = function(a) {
  P(Yd(a), a.b(), "click", a.kb)
};
q.Qc = da;
q.Hb = da;
q.df = function(a) {
  return a.isEnabled()
};
q.Tc = da;
q.la = function(a, b, c) {
  fh.f.la.call(this, a, b, c);
  if((a = a.b()) && 1 == b) {
    a.disabled = c
  }
};
q.vc = function(a) {
  return a.value
};
q.Wc = function(a, b) {
  a && (a.value = b)
};
q.$ = da;
function gh(a, b, c) {
  W.call(this, a, b || fh.La(), c)
}
C(gh, W);
q = gh.prototype;
q.vc = n("Tf");
q.Wc = function(a) {
  this.Tf = a;
  this.l.Wc(this.b(), a)
};
q.uc = n("Pf");
q.ie = function(a) {
  this.Pf = a;
  this.l.ie(this.b(), a)
};
q.c = function() {
  gh.f.c.call(this);
  delete this.Tf;
  delete this.Pf
};
q.Q = function() {
  gh.f.Q.call(this);
  if(this.T & 32) {
    var a = this.fb();
    a && P(Yd(this), a, "keyup", this.Cd)
  }
};
q.Cd = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.kb(a) : 32 == a.keyCode
};
Mg("goog-button", function() {
  return new gh(k)
});
function hh() {
}
C(hh, eh);
ea(hh);
q = hh.prototype;
q.i = function(a) {
  var b = {"class":"goog-inline-block " + Jg(this, a).join(" "), title:a.uc() || ""}, b = a.Ca().i("div", b, ih(this, a.aa, a.Ca()));
  this.be(a, b);
  return b
};
q.tc = p("button");
q.be = function(a, b) {
  a.isEnabled() || this.$(b, 1, j);
  a.h & 8 && this.$(b, 8, j);
  a.T & 16 && this.$(b, 16, j);
  a.h & 64 && this.$(b, 64, j)
};
q.Sb = function(a) {
  return a && a.firstChild.firstChild
};
function ih(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.t() + "-outer-box"), c.i("div", "goog-inline-block " + (a.t() + "-inner-box"), b))
}
q.t = p("goog-custom-button");
function jh(a, b, c) {
  gh.call(this, a, b || hh.La(), c)
}
C(jh, gh);
Mg("goog-custom-button", function() {
  return new jh(k)
});
var kh = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function lh(a) {
  var b = {}, a = "" + a, c = "#" == a.charAt(0) ? a : "#" + a;
  if(mh.test(c)) {
    return b.Bc = nh(c), b.type = "hex", b
  }
  a: {
    var d = a.match(oh);
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
    return b.Bc = ph(c[0], c[1], c[2]), b.type = "rgb", b
  }
  if(kh && (c = kh[a.toLowerCase()])) {
    return b.Bc = c, b.type = "named", b
  }
  e(Error(a + " is not a valid color string"))
}
var qh = /#(.)(.)(.)/;
function nh(a) {
  mh.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  4 == a.length && (a = a.replace(qh, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function rh(a) {
  a = nh(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function ph(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || 0 > a || 255 < a || isNaN(b) || 0 > b || 255 < b || isNaN(c) || 0 > c || 255 < c) && e(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = sh(a.toString(16));
  b = sh(b.toString(16));
  c = sh(c.toString(16));
  return"#" + a + b + c
}
var mh = /^#(?:[0-9a-f]{3}){1,2}$/i, oh = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function sh(a) {
  return 1 == a.length ? "0" + a : a
}
;function th() {
}
th.prototype.jc = k;
var uh;
function vh() {
}
C(vh, th);
function wh(a) {
  return(a = xh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function yh(a) {
  var b = {};
  xh(a) && (b[0] = j, b[1] = j);
  return b
}
vh.prototype.Fd = k;
function xh(a) {
  if(!a.Fd && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Fd = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Fd
}
uh = new vh;
function zh(a) {
  this.headers = new lb;
  this.Lb = a || k
}
C(zh, yc);
zh.prototype.a = T("goog.net.XhrIo");
var Ah = /^https?$/i;
q = zh.prototype;
q.Ga = m;
q.k = k;
q.cd = k;
q.Ld = "";
q.ff = "";
q.Xb = "";
q.td = m;
q.Cc = m;
q.Gd = m;
q.ib = m;
q.Zc = 0;
q.ob = k;
q.Cf = "";
q.ih = m;
q.send = function(a, b, c, d) {
  this.k && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Ld = a;
  this.Xb = "";
  this.ff = b;
  this.td = m;
  this.Ga = j;
  this.k = this.Lb ? wh(this.Lb) : wh(uh);
  this.cd = this.Lb ? this.Lb.jc || (this.Lb.jc = yh(this.Lb)) : uh.jc || (uh.jc = yh(uh));
  this.k.onreadystatechange = y(this.sf, this);
  try {
    R(this.a, Bh(this, "Opening Xhr")), this.Gd = j, this.k.open(b, a, j), this.Gd = m
  }catch(f) {
    R(this.a, Bh(this, "Error opening Xhr: " + f.message));
    Ch(this, f);
    return
  }
  var a = c || "", g = this.headers.L();
  d && jb(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.ma("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  jb(g, function(a, b) {
    this.k.setRequestHeader(b, a)
  }, this);
  this.Cf && (this.k.responseType = this.Cf);
  "withCredentials" in this.k && (this.k.withCredentials = this.ih);
  try {
    this.ob && (Ac.clearTimeout(this.ob), this.ob = k), 0 < this.Zc && (R(this.a, Bh(this, "Will abort after " + this.Zc + "ms if incomplete")), this.ob = Ac.setTimeout(y(this.ah, this), this.Zc)), R(this.a, Bh(this, "Sending request")), this.Cc = j, this.k.send(a), this.Cc = m
  }catch(i) {
    R(this.a, Bh(this, "Send error: " + i.message)), Ch(this, i)
  }
};
q.ah = function() {
  "undefined" != typeof ba && this.k && (this.Xb = "Timed out after " + this.Zc + "ms, aborting", R(this.a, Bh(this, this.Xb)), this.dispatchEvent("timeout"), this.abort(8))
};
function Ch(a, b) {
  a.Ga = m;
  a.k && (a.ib = j, a.k.abort(), a.ib = m);
  a.Xb = b;
  Dh(a);
  Eh(a)
}
function Dh(a) {
  a.td || (a.td = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
q.abort = function() {
  this.k && this.Ga && (R(this.a, Bh(this, "Aborting")), this.Ga = m, this.ib = j, this.k.abort(), this.ib = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Eh(this))
};
q.c = function() {
  this.k && (this.Ga && (this.Ga = m, this.ib = j, this.k.abort(), this.ib = m), Eh(this, j));
  zh.f.c.call(this)
};
q.sf = function() {
  !this.Gd && !this.Cc && !this.ib ? this.Jg() : Fh(this)
};
q.Jg = function() {
  Fh(this)
};
function Fh(a) {
  if(a.Ga && "undefined" != typeof ba) {
    if(a.cd[1] && 4 == a.Ma() && 2 == Gh(a)) {
      R(a.a, Bh(a, "Local request error detected and ignored"))
    }else {
      if(a.Cc && 4 == a.Ma()) {
        Ac.setTimeout(y(a.sf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.Ma()) {
          R(a.a, Bh(a, "Request complete"));
          a.Ga = m;
          try {
            var b = Gh(a), c, d;
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
                var g = ("" + a.Ld).match(rf)[1] || k;
                if(!g && self.location) {
                  var i = self.location.protocol, g = i.substr(0, i.length - 1)
                }
                f = !Ah.test(g ? g.toLowerCase() : "")
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
              a.Xb = l + " [" + Gh(a) + "]";
              Dh(a)
            }
          }finally {
            Eh(a)
          }
        }
      }
    }
  }
}
function Eh(a, b) {
  if(a.k) {
    var c = a.k, d = a.cd[0] ? da : k;
    a.k = k;
    a.cd = k;
    a.ob && (Ac.clearTimeout(a.ob), a.ob = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(f) {
      ve(a.a, "Problem encountered resetting onreadystatechange: " + f.message)
    }
  }
}
q.Id = function() {
  return!!this.k
};
q.Ma = function() {
  return this.k ? this.k.readyState : 0
};
function Gh(a) {
  try {
    return 2 < a.Ma() ? a.k.status : -1
  }catch(b) {
    return Q(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.k && 4 == this.Ma() ? this.k.getResponseHeader(a) : h
};
function Bh(a, b) {
  return b + " [" + a.ff + " " + a.Ld + " " + Gh(a) + "]"
}
;var Hh = !(I || J && !K("420+"));
function Ih(a, b) {
  this.$c = a;
  this.pa = b
}
C(Ih, L);
q = Ih.prototype;
q.q = k;
q.Sa = -1;
q.Se = m;
q.Ye = "Content-Length Server Date Expires Keep-Alive Content-Type Transfer-Encoding Cache-Control".split(" ");
function Jh(a) {
  var b = Vf(a.Fe), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.pa, c, b), 1 != b && a.g()) : a.g()
}
q.zg = function() {
  Jh(this);
  if(!this.ba) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.pa);
    this.g()
  }
};
q.Og = function() {
  var a = t.parent;
  if(a) {
    this.Sa = this.q.Ma();
    if(2 <= this.Sa && !this.Se) {
      for(var b = new lb, c = this.Ye.length;c--;) {
        var d = this.Ye[c];
        try {
          b.set(d, this.q.k.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.R() && (this.Se = j, a.__XHRMaster_ongotheaders(this.pa, pb(b)), this.ba)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.pa, this.Sa);
    Hh && 3 == this.Sa && Jh(this)
  }else {
    this.g()
  }
};
q.Od = function(a, b, c) {
  this.q = new zh;
  M(this.q, "readystatechange", y(this.Og, this));
  M(this.q, "complete", y(this.zg, this));
  this.q.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Fe = new Uf(this.q.k, 1048576)
};
q.c = function() {
  Ih.f.c.call(this);
  delete this.Fe;
  this.q && this.q.g();
  delete this.$c.dc[this.pa];
  delete this.$c
};
function Kh() {
  this.dc = {}
}
C(Kh, L);
Kh.prototype.Eg = function(a, b, c, d) {
  var f = new Ih(this, a);
  this.dc[a] = f;
  f.Od(b, c, d)
};
Kh.prototype.kg = function(a) {
  (a = this.dc[a]) && a.g()
};
Kh.prototype.c = function() {
  Kh.f.c.call(this);
  for(var a = ta(this.dc);a.length;) {
    a.pop().g()
  }
  delete this.dc
};
var Lh = new Kh;
t.__XHRSlave_makeRequest = y(Lh.Eg, Lh);
t.__XHRSlave_dispose = y(Lh.kg, Lh);
var Mh = T("cw.net.demo");
function Nh() {
}
Nh.prototype.Pe = function() {
  return Boolean(Number((new tf(document.location)).Y.get("httpStreaming", "0"))) ? 2 : 1
};
function Oh(a) {
  this.o = a
}
var Ph = /\s*;\s*/;
q = Oh.prototype;
q.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && J) {
    var b = "COOKIES_TEST_" + A();
    Qh.set(b, "1");
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
  c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(A() + 1E3 * c)).toUTCString();
  this.o.cookie = a + "=" + b + f + d + c + g
};
q.get = function(a, b) {
  for(var c = a + "=", d = (this.o.cookie || "").split(Ph), f = 0, g;g = d[f];f++) {
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
  var d = this.ma(a);
  this.set(a, "", 0, b, c);
  return d
};
q.ua = function() {
  return Rh(this).keys
};
q.N = function() {
  return Rh(this).Uf
};
q.Na = function() {
  return!this.o.cookie
};
q.R = function() {
  return!this.o.cookie ? 0 : (this.o.cookie || "").split(Ph).length
};
q.ma = function(a) {
  return u(this.get(a))
};
q.nc = function(a) {
  for(var b = Rh(this).Uf, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return j
    }
  }
  return m
};
q.clear = function() {
  for(var a = Rh(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b])
  }
};
function Rh(a) {
  for(var a = (a.o.cookie || "").split(Ph), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), -1 == d ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{keys:b, Uf:c}
}
var Qh = new Oh(document);
Qh.Rh = 3950;
function Sh() {
  this.zf = A()
}
var Th = new Sh;
Sh.prototype.set = aa("zf");
Sh.prototype.reset = function() {
  this.set(A())
};
Sh.prototype.get = n("zf");
function Uh(a) {
  this.Mg = a || "";
  this.Vg = Th
}
Uh.prototype.If = j;
Uh.prototype.Tg = j;
Uh.prototype.Sg = j;
Uh.prototype.Jf = m;
function Vh(a) {
  return 10 > a ? "0" + a : "" + a
}
function Wh(a, b) {
  var c = (a.Of - b) / 1E3, d = c.toFixed(3), f = 0;
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
function Xh(a) {
  Uh.call(this, a)
}
C(Xh, Uh);
Xh.prototype.Jf = j;
function Yh(a) {
  this.Ng = y(this.Yf, this);
  this.Ne = new Xh;
  this.cf = this.Ne.If = m;
  this.e = a;
  this.mg = this.e.ownerDocument || this.e.document;
  var a = ad(this.e), b = k;
  if(I) {
    b = a.o.createStyleSheet(), Nd(b)
  }else {
    var c = dd(a.o, "head", h, h)[0];
    c || (b = dd(a.o, "body", h, h)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    Nd(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
Yh.prototype.Yf = function(a) {
  var b = 100 >= this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight, c = this.mg.createElement("div");
  c.className = "logmsg";
  var d = this.Ne, f;
  switch(a.Ab.value) {
    case me.value:
      f = "dbg-sh";
      break;
    case ne.value:
      f = "dbg-sev";
      break;
    case oe.value:
      f = "dbg-w";
      break;
    case pe.value:
      f = "dbg-i";
      break;
    default:
      f = "dbg-f"
  }
  var g = [];
  g.push(d.Mg, " ");
  if(d.If) {
    var i = new Date(a.Of);
    g.push("[", Vh(i.getFullYear() - 2E3) + Vh(i.getMonth() + 1) + Vh(i.getDate()) + " " + Vh(i.getHours()) + ":" + Vh(i.getMinutes()) + ":" + Vh(i.getSeconds()) + "." + Vh(Math.floor(i.getMilliseconds() / 10)), "] ")
  }
  d.Tg && g.push("[", Ma(Wh(a, d.Vg.get())), "s] ");
  d.Sg && g.push("[", Ga(a.Dg), "] ");
  g.push('<span class="', f, '">', Fa(Ma(Ga(a.of))));
  d.Jf && a.wd && g.push("<br>", Fa(Ma(a.vd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  b && (this.e.scrollTop = this.e.scrollHeight)
};
Yh.prototype.clear = function() {
  this.e.innerHTML = ""
};
function Zh(a, b, c, d, f, g) {
  6 == arguments.length ? this.setTransform(a, b, c, d, f, g) : (0 != arguments.length && e(Error("Insufficient matrix parameters")), this.fa = this.ia = 1, this.X = this.ga = this.ha = this.ja = 0)
}
q = Zh.prototype;
q.L = function() {
  return new Zh(this.fa, this.X, this.ga, this.ia, this.ha, this.ja)
};
q.setTransform = function(a, b, c, d, f, g) {
  (!ja(a) || !ja(b) || !ja(c) || !ja(d) || !ja(f) || !ja(g)) && e(Error("Invalid transform parameters"));
  this.fa = a;
  this.X = b;
  this.ga = c;
  this.ia = d;
  this.ha = f;
  this.ja = g;
  return this
};
q.scale = function(a, b) {
  this.fa *= a;
  this.X *= a;
  this.ga *= b;
  this.ia *= b;
  return this
};
q.translate = function(a, b) {
  this.ha += a * this.fa + b * this.ga;
  this.ja += a * this.X + b * this.ia;
  return this
};
q.rotate = function(a, b, c) {
  var d = new Zh, f = Math.cos(a), a = Math.sin(a), b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f), c = this.fa, d = this.ga;
  this.fa = b.fa * c + b.X * d;
  this.ga = b.ga * c + b.ia * d;
  this.ha += b.ha * c + b.ja * d;
  c = this.X;
  d = this.ia;
  this.X = b.fa * c + b.X * d;
  this.ia = b.ga * c + b.ia * d;
  this.ja += b.ha * c + b.ja * d;
  return this
};
q.toString = function() {
  return"matrix(" + [this.fa, this.X, this.ga, this.ia, this.ha, this.ja].join() + ")"
};
q.V = function(a) {
  return this == a ? j : !a ? m : this.fa == a.fa && this.ga == a.ga && this.ha == a.ha && this.X == a.X && this.ia == a.ia && this.ja == a.ja
};
function Y(a, b) {
  this.e = a;
  this.va = b;
  this.qd = m
}
C(Y, yc);
q = Y.prototype;
q.va = k;
q.e = k;
q.Qf = k;
q.b = n("e");
q.addEventListener = function(a, b, c, d) {
  M(this.e, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  qc(this.e, a, b, c, d)
};
q.c = function() {
  Y.f.c.call(this);
  uc(this.e)
};
function Z(a, b, c, d) {
  Y.call(this, a, b);
  this.qe = c;
  this.va.de(this, c);
  this.fill = d;
  this.va.ce(this, d)
}
C(Z, Y);
Z.prototype.fill = k;
Z.prototype.qe = k;
Z.prototype.rg = n("fill");
Z.prototype.tg = n("qe");
function $h(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C($h, Z);
function ai(a, b) {
  Y.call(this, a, b)
}
C(ai, Y);
function bi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(bi, Z);
function ci(a, b) {
  Y.call(this, a, b)
}
C(ci, Y);
function di(a, b) {
  Y.call(this, a, b)
}
C(di, ai);
di.prototype.clear = function() {
  md(this.b())
};
di.prototype.Z = function(a, b) {
  ei(this.b(), {width:a, height:b})
};
function fi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(fi, bi);
function gi(a, b) {
  Y.call(this, a, b)
}
C(gi, ci);
gi.prototype.Z = function(a, b) {
  ei(this.b(), {width:a, height:b})
};
function hi() {
}
;function ii(a, b) {
  this.sa = a;
  this.Yb = b || 1
}
C(ii, hi);
function ji() {
  this.qb = 1;
  this.sa = "black"
}
;function ki() {
  this.B = [];
  this.d = [];
  this.ra = []
}
ki.prototype.tb = k;
ki.prototype.U = k;
ki.prototype.Ib = j;
var li = [2, 2, 6, 6, 0];
q = ki.prototype;
q.clear = function() {
  this.B.length = 0;
  this.d.length = 0;
  this.ra.length = 0;
  delete this.tb;
  delete this.U;
  delete this.Ib;
  return this
};
q.moveTo = function(a, b) {
  0 == this.B[this.B.length - 1] ? this.ra.length -= 2 : (this.B.push(0), this.d.push(1));
  this.ra.push(a, b);
  this.U = this.tb = [a, b];
  return this
};
q.lineTo = function(a) {
  var b = this.B[this.B.length - 1];
  b == k && e(Error("Path cannot start with lineTo"));
  1 != b && (this.B.push(1), this.d.push(0));
  for(b = 0;b < arguments.length;b += 2) {
    var c = arguments[b], d = arguments[b + 1];
    this.ra.push(c, d)
  }
  this.d[this.d.length - 1] += b / 2;
  this.U = [c, d];
  return this
};
q.Ee = function(a) {
  var b = this.B[this.B.length - 1];
  b == k && e(Error("Path cannot start with curve"));
  2 != b && (this.B.push(2), this.d.push(0));
  for(b = 0;b < arguments.length;b += 6) {
    var c = arguments[b + 4], d = arguments[b + 5];
    this.ra.push(arguments[b], arguments[b + 1], arguments[b + 2], arguments[b + 3], c, d)
  }
  this.d[this.d.length - 1] += b / 6;
  this.U = [c, d];
  return this
};
q.close = function() {
  var a = this.B[this.B.length - 1];
  a == k && e(Error("Path cannot start with close"));
  4 != a && (this.B.push(4), this.d.push(1), this.U = this.tb);
  return this
};
q.arcTo = function(a, b, c, d) {
  var f = this.U[0] - a * Math.cos(Ye(c)) + a * Math.cos(Ye(c + d)), g = this.U[1] - b * Math.sin(Ye(c)) + b * Math.sin(Ye(c + d));
  this.B.push(3);
  this.d.push(1);
  this.ra.push(a, b, c, d, f, g);
  this.Ib = m;
  this.U = [f, g];
  return this
};
q.$f = function(a, b, c, d) {
  for(var f = this.U[0] - a * Math.cos(Ye(c)), g = this.U[1] - b * Math.sin(Ye(c)), i = Ye(d), d = Math.ceil(2 * (Math.abs(i) / Math.PI)), i = i / d, c = Ye(c), l = 0;l < d;l++) {
    var o = Math.cos(c), r = Math.sin(c), z = 4 / 3 * Math.sin(i / 2) / (1 + Math.cos(i / 2)), s = f + (o - z * r) * a, x = g + (r + z * o) * b, c = c + i, o = Math.cos(c), r = Math.sin(c);
    this.Ee(s, x, f + (o + z * r) * a, g + (r - z * o) * b, f + o * a, g + r * b)
  }
  return this
};
function mi(a, b) {
  for(var c = a.ra, d = 0, f = 0, g = a.B.length;f < g;f++) {
    var i = a.B[f], l = li[i] * a.d[f];
    b(i, c.slice(d, d + l));
    d += l
  }
}
q.L = function() {
  var a = new this.constructor;
  a.B = this.B.concat();
  a.d = this.d.concat();
  a.ra = this.ra.concat();
  a.tb = this.tb && this.tb.concat();
  a.U = this.U && this.U.concat();
  a.Ib = this.Ib;
  return a
};
var ni = {};
ni[0] = ki.prototype.moveTo;
ni[1] = ki.prototype.lineTo;
ni[4] = ki.prototype.close;
ni[2] = ki.prototype.Ee;
ni[3] = ki.prototype.$f;
function oi(a) {
  if(a.Ib) {
    return a.L()
  }
  var b = new ki;
  mi(a, function(a, d) {
    ni[a].apply(b, d)
  });
  return b
}
ki.prototype.Na = function() {
  return 0 == this.B.length
};
function pi(a, b, c, d, f) {
  Ud.call(this, f);
  this.width = a;
  this.height = b;
  this.na = c || k;
  this.Ob = d || k
}
C(pi, Ud);
q = pi.prototype;
q.F = k;
q.Ia = 0;
q.ab = 0;
q.Re = function() {
  return this.W()
};
q.W = function() {
  return this.p ? Ld(this.b()) : ja(this.width) && ja(this.height) ? new N(this.width, this.height) : k
};
function qi(a) {
  var b = a.W();
  return b ? b.width / (a.na ? new N(a.na, a.Ob) : a.W()).width : 0
}
;function ri(a, b, c, d, f) {
  pi.call(this, a, b, c, d, f);
  this.He = {};
  this.ue = J && !K(526);
  this.gb = new Qd(this)
}
var si;
C(ri, pi);
function ti(a, b, c) {
  a = a.M.o.createElementNS("http://www.w3.org/2000/svg", b);
  c && ei(a, c);
  return a
}
function ei(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
q = ri.prototype;
q.sb = function(a, b) {
  (b || this.F).b().appendChild(a.b())
};
q.ce = function(a, b) {
  var c = a.b();
  b instanceof ii ? (c.setAttribute("fill", b.sa), c.setAttribute("fill-opacity", b.Yb)) : c.setAttribute("fill", "none")
};
q.de = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.sa);
    var d = b.qb;
    w(d) && -1 != d.indexOf("px") ? c.setAttribute("stroke-width", parseFloat(d) / qi(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
q.i = function() {
  var a = ti(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = ti(this, "g");
  this.sd = ti(this, "defs");
  this.F = new di(b, this);
  a.appendChild(this.sd);
  a.appendChild(b);
  this.e = a;
  if(this.na || this.Ia || this.ab) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.ue ? this.ad() : this.b().setAttribute("viewBox", this.Ia + " " + this.ab + " " + (this.na ? this.na + " " + this.Ob : ""))
  }
};
q.ad = function() {
  if(this.p && (this.na || this.Ia || !this.ab)) {
    var a = this.W();
    if(0 == a.width) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.Ia, c = -this.ab, d = a.width / this.na, a = a.height / this.Ob;
      this.F.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
q.Z = function(a, b) {
  Jd(this.b(), a, b)
};
q.W = function() {
  if(!Jb) {
    return this.p ? Ld(this.b()) : ri.f.W.call(this)
  }
  var a = this.width, b = this.height, c = w(a) && -1 != a.indexOf("%"), d = w(b) && -1 != b.indexOf("%");
  if(!this.p && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = Ld(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Ld(f), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
q.clear = function() {
  this.F.clear();
  md(this.sd);
  this.He = {}
};
q.oc = function(a, b, c, d, f, g, i) {
  a = ti(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new fi(a, this, f, g);
  this.sb(f, i);
  return f
};
q.drawImage = function(a, b, c, d, f, g) {
  a = ti(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new gi(a, this);
  this.sb(f, g);
  return f
};
q.Q = function() {
  var a = this.W();
  ri.f.Q.call(this);
  a || this.dispatchEvent("resize");
  if(this.ue) {
    var a = this.width, b = this.height;
    "string" == typeof a && (-1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%")) && P(this.gb, ui(), Bc, this.ad);
    this.ad()
  }
};
q.cb = function() {
  ri.f.cb.call(this);
  this.ue && Sd(this.gb, ui(), Bc, this.ad)
};
q.c = function() {
  delete this.He;
  delete this.sd;
  delete this.F;
  ri.f.c.call(this)
};
function ui() {
  si || (si = new zc(400), si.start());
  return si
}
;function vi() {
  return this.e = this.va.M.b(this.S) || this.e
}
function wi(a, b) {
  this.S = a.id;
  Y.call(this, a, b)
}
C(wi, ai);
wi.prototype.b = vi;
wi.prototype.clear = function() {
  md(this.b())
};
wi.prototype.Z = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  this.va.F != this && (c.coordorigin = "0 0")
};
function xi(a, b, c, d, f, g, i, l) {
  this.S = a.id;
  Z.call(this, a, b, i, l)
}
C(xi, bi);
xi.prototype.b = vi;
function yi(a, b) {
  this.S = a.id;
  Y.call(this, a, b)
}
C(yi, ci);
yi.prototype.b = vi;
yi.prototype.Z = function(a, b) {
  var c = this.b().style;
  c.width = zi(a) + "px";
  c.height = zi(b) + "px"
};
function Ai(a, b, c, d, f) {
  pi.call(this, a, b, c, d, f);
  this.gb = new Qd(this)
}
C(Ai, pi);
var Bi = document.documentMode && 8 <= document.documentMode;
function zi(a) {
  return Math.round(100 * (parseFloat(a.toString()) - 0.5))
}
function $(a) {
  return Math.round(100 * parseFloat(a.toString()))
}
function Ci(a, b) {
  var c = a.M.createElement("g_vml_:" + b);
  c.id = "goog_" + Oa++;
  return c
}
function Di(a) {
  Bi && a.p && (a.b().innerHTML = a.b().innerHTML)
}
Ai.prototype.sb = function(a, b) {
  (b || this.F).b().appendChild(a.b());
  Di(this)
};
Ai.prototype.ce = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    "fill" == f.tagName && c.removeChild(f)
  }
  b instanceof ii ? "transparent" == b.sa ? c.filled = m : 1 != b.Yb ? (c.filled = j, d = Ci(this, "fill"), d.opacity = Math.round(100 * b.Yb) + "%", d.color = b.sa, c.appendChild(d)) : (c.filled = j, c.fillcolor = b.sa) : c.filled = m;
  Di(this)
};
Ai.prototype.de = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = j;
    var d = b.qb, d = w(d) && -1 == d.indexOf("px") ? parseFloat(d) : d * qi(this), f = c.getElementsByTagName("stroke")[0];
    1 > d ? (f = f || Ci(this, "stroke"), f.opacity = d, f.zi = "1px", f.color = b.sa, c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.sa, c.strokeweight = d + "px")
  }else {
    c.stroked = m
  }
  Di(this)
};
function Ei(a, b, c, d, f) {
  var g = a.style;
  g.position = "absolute";
  g.left = zi(b) + "px";
  g.top = zi(c) + "px";
  g.width = $(d) + "px";
  g.height = $(f) + "px";
  "shape" == a.tagName && (a.coordsize = $(d) + " " + $(f))
}
try {
  eval("document.namespaces")
}catch(Fi) {
}
q = Ai.prototype;
q.i = function() {
  var a = this.M.o;
  a.namespaces.g_vml_ || (Bi ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}");
  var a = this.width, b = this.height, c = this.M.i("div", {style:"overflow:hidden;position:relative;width:" + (w(a) && Da(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (w(b) && Da(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = Ci(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.na ? $(this.na) + " " + $(this.Ob) : $(a) + " " + $(b);
  d.coordorigin = u(this.Ia) ? $(this.Ia) + " " + $(this.ab) : "0 0";
  c.appendChild(d);
  this.F = new wi(d, this);
  M(c, "resize", y(this.Bd, this))
};
q.Bd = function() {
  var a = Ld(this.b()), b = this.F.b().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.b();a && a.currentStyle && "none" != a.currentStyle.display;) {
      a = a.parentNode
    }
    a && a.currentStyle && P(this.gb, a, "propertychange", this.Bd)
  }
  this.dispatchEvent("resize")
};
q.Z = function(a, b) {
  Jd(this.b(), a, b)
};
q.W = function() {
  var a = this.b();
  return new N(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
q.clear = function() {
  this.F.clear()
};
q.oc = function(a, b, c, d, f, g, i) {
  var l = Ci(this, "oval");
  Ei(l, a - c, b - d, 2 * c, 2 * d);
  a = new xi(l, this, 0, 0, 0, 0, f, g);
  this.sb(a, i);
  return a
};
q.drawImage = function(a, b, c, d, f, g) {
  var i = Ci(this, "image");
  Ei(i, a, b, c, d);
  Bi ? i.src = f : i.setAttribute("src", f);
  a = new yi(i, this);
  this.sb(a, g);
  return a
};
q.Q = function() {
  Ai.f.Q.call(this);
  this.Bd();
  Di(this)
};
q.c = function() {
  this.F = k;
  Ai.f.c.call(this)
};
function Gi(a) {
  Y.call(this, k, a);
  this.P = []
}
C(Gi, ai);
Gi.prototype.clear = function() {
  this.P.length && (this.P.length = 0, Hi(this.va))
};
Gi.prototype.Z = function() {
};
Gi.prototype.appendChild = function(a) {
  this.P.push(a)
};
Gi.prototype.za = function() {
  for(var a = 0, b = this.P.length;a < b;a++) {
    Ii(this.va, this.P[a])
  }
};
function Ji(a, b, c, d, f, g, i, l) {
  Z.call(this, a, b, i, l);
  this.gg = c;
  this.hg = d;
  this.Df = f;
  this.Ef = g;
  this.K = new ki;
  this.K.clear();
  this.K.moveTo(this.gg + this.Df * Math.cos(Ye(0)), this.hg + this.Ef * Math.sin(Ye(0)));
  this.K.arcTo(this.Df, this.Ef, 0, 360);
  this.K.close();
  this.Kg = new Ki(k, b, this.K, i, l)
}
C(Ji, bi);
Ji.prototype.za = function(a) {
  this.Kg.za(a)
};
function Ki(a, b, c, d, f) {
  Z.call(this, a, b, d, f);
  this.Gb(c)
}
C(Ki, $h);
Ki.prototype.Pb = m;
Ki.prototype.Gb = function(a) {
  this.K = a.Ib ? a : oi(a);
  this.Pb && Hi(this.va)
};
Ki.prototype.za = function(a) {
  this.Pb = j;
  a.beginPath();
  mi(this.K, function(b, c) {
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
function Li(a, b, c, d, f, g, i) {
  Y.call(this, a, b);
  this.lh = c;
  this.nh = d;
  this.ve = f;
  this.Ad = g;
  this.Ug = i
}
C(Li, ci);
Li.prototype.Pb = m;
Li.prototype.Z = function(a, b) {
  this.ve = a;
  this.Ad = b;
  this.Pb && Hi(this.va)
};
Li.prototype.za = function(a) {
  this.$e ? (this.ve && this.Ad && a.drawImage(this.$e, this.lh, this.nh, this.ve, this.Ad), this.Pb = j) : (a = new Image, a.onload = y(this.vg, this, a), a.src = this.Ug)
};
Li.prototype.vg = function(a) {
  this.$e = a;
  Hi(this.va)
};
function Mi(a, b, c, d, f) {
  pi.call(this, a, b, c, d, f)
}
C(Mi, pi);
q = Mi.prototype;
q.ce = function() {
  Hi(this)
};
q.de = function() {
  Hi(this)
};
function Ni(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.Qf ? b.Qf.L() : new Zh, f = d.ha, g = d.ja;
  (f || g) && c.translate(f, g);
  (d = d.X) && c.rotate(Math.asin(d))
}
q.i = function() {
  var a = this.M.i("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Nb = this.M.i("canvas");
  a.appendChild(this.Nb);
  this.Cg = this.F = new Gi(this);
  this.Qg = 0;
  Oi(this)
};
q.getContext = function() {
  this.b() || this.i();
  this.ub || (this.ub = this.Nb.getContext("2d"), this.ub.save());
  return this.ub
};
q.Z = function(a, b) {
  this.width = a;
  this.height = b;
  Oi(this);
  Hi(this)
};
q.W = function() {
  var a = this.width, b = this.height, c = w(a) && -1 != a.indexOf("%"), d = w(b) && -1 != b.indexOf("%");
  if(!this.p && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = Ld(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Ld(f), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
function Oi(a) {
  Jd(a.b(), a.width, a.height);
  var b = a.W();
  b && (Jd(a.Nb, b.width, b.height), a.Nb.width = b.width, a.Nb.height = b.height, a.ub = k)
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
  this.F.clear();
  for(var a = this.b();1 < a.childNodes.length;) {
    a.removeChild(a.lastChild)
  }
};
function Hi(a) {
  if(!a.xi && a.p) {
    a.reset();
    if(a.na) {
      var b = a.W();
      a.getContext().scale(b.width / a.na, b.height / a.Ob)
    }
    (a.Ia || a.ab) && a.getContext().translate(-a.Ia, -a.ab);
    Ni(a, a.F);
    a.F.za(a.ub);
    a.getContext().restore()
  }
}
function Ii(a, b) {
  var c = a.getContext();
  Ni(a, b);
  if(!b.rg || !b.tg) {
    b.za(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof ii) {
        0 != d.Yb && (c.globalAlpha = d.Yb, c.fillStyle = d.sa, b.za(c), c.fill(), c.globalAlpha = 1)
      }else {
        var f = c.createLinearGradient(d.si(), d.ui(), d.ti(), d.vi());
        f.addColorStop(0, d.qi());
        f.addColorStop(1, d.ri());
        c.fillStyle = f;
        b.za(c);
        c.fill()
      }
    }
    if(d = b.qe) {
      b.za(c), c.strokeStyle = d.sa, d = d.qb, w(d) && -1 != d.indexOf("px") && (d = parseFloat(d) / qi(a)), c.lineWidth = d, c.stroke()
    }
  }
  a.getContext().restore()
}
q.sb = function(a, b) {
  this.append(a, b)
};
q.append = function(a, b) {
  b = b || this.F;
  b.appendChild(a);
  this.p && (!this.Qg && !(b != this.F && b != this.Cg)) && Ii(this, a)
};
q.oc = function(a, b, c, d, f, g, i) {
  a = new Ji(k, this, a, b, c, d, f, g);
  this.append(a, i);
  return a
};
q.drawImage = function(a, b, c, d, f, g) {
  a = new Li(k, this, a, b, c, d, f);
  this.append(a, g);
  return a
};
q.c = function() {
  this.ub = k;
  Mi.f.c.call(this)
};
q.Q = function() {
  var a = this.W();
  Mi.f.Q.call(this);
  a || (Oi(this), this.dispatchEvent("resize"));
  Hi(this)
};
function Pi(a) {
  this.w = [];
  Qi(this, a)
}
C(Pi, yc);
q = Pi.prototype;
q.Xa = k;
q.ae = k;
function Qi(a, b) {
  b && (F(b, function(a) {
    this.cc(a, m)
  }, a), bb(a.w, b))
}
q.zd = n("Xa");
q.Qe = function() {
  return ab(this.w)
};
q.Vc = function(a) {
  a != this.Xa && (this.cc(this.Xa, m), this.Xa = a, this.cc(a, j));
  this.dispatchEvent("select")
};
q.yd = function() {
  return this.Xa ? Sa(this.w, this.Xa) : -1
};
q.he = function(a) {
  this.Vc(this.w[a] || k)
};
q.clear = function() {
  Ya(this.w);
  this.Xa = k
};
q.c = function() {
  Pi.f.c.call(this);
  delete this.w;
  this.Xa = k
};
q.cc = function(a, b) {
  a && ("function" == typeof this.ae ? this.ae(a, b) : "function" == typeof a.ge && a.ge(b))
};
function Ri() {
}
C(Ri, Hg);
ea(Ri);
var Si = 0;
Ri.prototype.i = function(a) {
  var b = Jg(this, a);
  return a.Ca().i("div", b ? b.join(" ") : k, Ti(this, a.aa, a.Re(), a.Ca()))
};
function Ti(a, b, c, d) {
  for(var f = [], g = 0, i = 0;g < c.height;g++) {
    for(var l = [], o = 0;o < c.width;o++) {
      var r = b && b[i++];
      l.push(Ui(a, r, d))
    }
    f.push(d.i("tr", a.t() + "-row", l))
  }
  return a.De(f, d)
}
Ri.prototype.De = function(a, b) {
  var c = b.i("table", this.t() + "-table", b.i("tbody", this.t() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Gg(c, "grid");
  return c
};
function Ui(a, b, c) {
  a = c.i("td", {"class":a.t() + "-cell", id:a.t() + "-cell-" + Si++}, b);
  Gg(a, "gridcell");
  return a
}
Ri.prototype.Rc = function(a, b) {
  if(a) {
    var c = dd(document, "tbody", this.t() + "-body", a)[0];
    if(c) {
      var d = 0;
      F(c.rows, function(a) {
        F(a.cells, function(a) {
          md(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = ad(a), i = c.rows[0].cells.length;d < b.length;) {
          var l = b[d++];
          f.push(Ui(this, l, g));
          f.length == i && (l = g.i("tr", this.t() + "-row", f), c.appendChild(l), f.length = 0)
        }
        if(0 < f.length) {
          for(;f.length < i;) {
            f.push(Ui(this, "", g))
          }
          l = g.i("tr", this.t() + "-row", f);
          c.appendChild(l)
        }
      }
    }
    Pd(a, j, Jb)
  }
};
function Vi(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && Xa(Vc(c), a.t() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function Wi(a, b, c, d) {
  c && (c = c.parentNode, a = a.t() + "-cell-hover", d ? Wc(c, a) : Xc(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id))
}
Ri.prototype.t = p("goog-palette");
function Xi(a, b, c) {
  W.call(this, a, b || Ri.La(), c)
}
C(Xi, W);
q = Xi.prototype;
q.n = k;
q.hb = -1;
q.I = k;
q.c = function() {
  Xi.f.c.call(this);
  this.I && (this.I.g(), this.I = k);
  this.n = k
};
q.Sc = function(a) {
  Xi.f.Sc.call(this, a);
  Yi(this);
  this.I ? (this.I.clear(), Qi(this.I, a)) : (this.I = new Pi(a), this.I.ae = y(this.cc, this), P(Yd(this), this.I, "select", this.yg));
  this.hb = -1
};
q.Oe = p(k);
q.zc = function(a) {
  Xi.f.zc.call(this, a);
  var b = Vi(this.l, this, a.target);
  if((!b || !a.relatedTarget || !od(b, a.relatedTarget)) && b != Zi(this)) {
    a = this.aa, $i(this, a ? Sa(a, b) : -1)
  }
};
q.yc = function(a) {
  Xi.f.yc.call(this, a);
  var b = Vi(this.l, this, a.target);
  (!b || !a.relatedTarget || !od(b, a.relatedTarget)) && b == Zi(this) && Wi(this.l, this, b, m)
};
q.xc = function(a) {
  Xi.f.xc.call(this, a);
  if(this.Id() && (a = Vi(this.l, this, a.target), a != Zi(this))) {
    var b = this.aa;
    $i(this, b ? Sa(b, a) : -1)
  }
};
q.kb = function() {
  var a = Zi(this);
  return a ? (this.Vc(a), this.dispatchEvent("action")) : m
};
q.We = function(a) {
  var b = this.aa, b = b ? b.length : 0, c = this.n.width;
  if(0 == b || !this.isEnabled()) {
    return m
  }
  if(13 == a.keyCode || 32 == a.keyCode) {
    return this.kb(a)
  }
  if(36 == a.keyCode) {
    return $i(this, 0), j
  }
  if(35 == a.keyCode) {
    return $i(this, b - 1), j
  }
  var d = 0 > this.hb ? this.yd() : this.hb;
  switch(a.keyCode) {
    case 37:
      -1 == d && (d = b);
      if(0 < d) {
        return $i(this, d - 1), a.preventDefault(), j
      }
      break;
    case 39:
      if(d < b - 1) {
        return $i(this, d + 1), a.preventDefault(), j
      }
      break;
    case 38:
      -1 == d && (d = b + c - 1);
      if(d >= c) {
        return $i(this, d - c), a.preventDefault(), j
      }
      break;
    case 40:
      if(-1 == d && (d = -c), d < b - c) {
        return $i(this, d + c), a.preventDefault(), j
      }
  }
  return m
};
q.yg = function() {
};
q.Re = n("n");
q.Z = function(a, b) {
  this.b() && e(Error("Component already rendered"));
  this.n = ja(a) ? new N(a, b) : a;
  Yi(this)
};
function Zi(a) {
  var b = a.aa;
  return b && b[a.hb]
}
function $i(a, b) {
  b != a.hb && (aj(a, a.hb, m), a.hb = b, aj(a, b, j))
}
q.yd = function() {
  return this.I ? this.I.yd() : -1
};
q.zd = function() {
  return this.I ? this.I.zd() : k
};
q.he = function(a) {
  this.I && this.I.he(a)
};
q.Vc = function(a) {
  this.I && this.I.Vc(a)
};
function aj(a, b, c) {
  if(a.b()) {
    var d = a.aa;
    d && (0 <= b && b < d.length) && Wi(a.l, a, d[b], c)
  }
}
q.cc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.l.t() + "-cell-selected";
    b ? Wc(c, d) : Xc(c, d)
  }
};
function Yi(a) {
  var b = a.aa;
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
;function bj(a, b, c) {
  this.mc = a || [];
  Xi.call(this, k, b || Ri.La(), c);
  this.mc = this.mc;
  this.Ic = k;
  this.Rc(cj(this))
}
C(bj, Xi);
bj.prototype.Ic = k;
function dj(a) {
  var b = ej(fj);
  a.Ic || (a.Ic = Ua(a.mc, function(a) {
    return ej(a)
  }));
  a.he(b ? Sa(a.Ic, b) : -1)
}
function cj(a) {
  return Ua(a.mc, function(a) {
    var c = this.Ca().i("div", {"class":this.l.t() + "-colorswatch", style:"background-color:" + a});
    c.title = "#" == a.charAt(0) ? "RGB (" + rh(a).join(", ") + ")" : a;
    return c
  }, a)
}
function ej(a) {
  if(a) {
    try {
      return lh(a).Bc
    }catch(b) {
    }
  }
  return k
}
;function gj(a) {
  a = "" + a;
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
;var hj, ij, jj, kj, lj, mj = T("whiteboard.logger");
window.onerror = function(a, b, c) {
  ve(mj, "window.onerror: message: " + H(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function nj() {
}
nj.prototype.Lf = function(a) {
  this.C = a;
  rg(this.C, "subprotocol:whiteboard")
};
nj.prototype.Kf = function(a, b) {
  mj.info("streamReset: reasonString=" + H(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  oj = k
};
nj.prototype.Mf = function(a) {
  var a = gj(a), b = a[0], c = a[1];
  "Point" == b ? hj.oc(c.x, c.y, 5, 5, new ji, new ii(c.color), h) : "ClearBoard" == b ? (hj.g(), pj()) : Q(mj, "Strange message from server: " + H(a))
};
nj.prototype.reset = function(a) {
  mj.info("resetting with reason: " + a);
  this.C.reset(a)
};
var oj = k, qj = new Rc(t.window);
function rj() {
  oj && (oj.reset("idle timeout fired"), oj = k)
}
var sj = k;
function tj() {
  sj != k && qj.H.clearTimeout(sj);
  oj && (sj = qj.H.setTimeout(rj, 2592E5))
}
M(window, ["click", "focus", "keydown", "keypress"], tj, j);
function uj() {
  hj.g();
  pj();
  var a = oj;
  mj.info("Telling server to clear the board.");
  rg(a.C, xa(["ClearBoard", k]))
}
function vj(a) {
  var b = new gc(a), a = b.offsetX, b = b.offsetY;
  hj.oc(a, b, 5, 5, new ji, new ii(ij), h);
  var c = oj, d = ij;
  mj.info("Telling server about circle at: " + a + ", " + b + " with color " + d);
  rg(c.C, xa(["Point", {x:a, y:b, color:d}]))
}
function pj() {
  var a;
  a = I && !K("9") ? new Ai(800, 600, h, h, h) : J && (!K("420") || Kb) ? new Mi(800, 600, h, h, h) : new ri(800, 600, h, h, h);
  a.i();
  jj = O("drawArea");
  Zd(a, jj);
  hj = a
}
var fj = "#E06666";
function wj(a) {
  var b;
  (a = a.target.zd()) ? (a = a.style[Pa("background-color")] || "", b = ej(a)) : b = k;
  b || (b = fj);
  ij = b;
  Qh.set("whiteboard_defaultColor", b);
  a = O("whiteboard-cp-value");
  w("background-color") ? Hd(a, b, "background-color") : sa("background-color", qa(Hd, a));
  a = O("whiteboard-cp-value");
  a.title = b;
  b = lh(b).Bc;
  pd(a, b);
  b = rh(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = ph(b[0], b[1], b[2]);
  w("color") ? Hd(a, b, "color") : sa("color", qa(Hd, a))
}
function xj() {
  kj = (new tf(document.location)).Y;
  if(lj = Boolean(Number(kj.get("logging", "0")))) {
    ze().Uc(te);
    var a = new Yh(document.getElementById("log"));
    if(j != a.cf) {
      var b = ze(), c = a.Ng;
      b.Vb || (b.Vb = []);
      b.Vb.push(c);
      a.cf = j
    }
  }else {
    ze().Uc(le)
  }
  mj.info("Logger works.");
  (a = Qh.get("whiteboard_defaultColor")) && (fj = a);
  ij = fj;
  b = O("whiteboard-controls-left");
  a = O("whiteboard-controls-right");
  c = hd("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  ld(b, c);
  c = hd("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  ld(b, c);
  b = new bj("#EA9999 #F9CB9C #FFE599 #B6D7A8 #A2C4C9 #9FC5E8 #B4A7D6 #D5A6BD #E06666 #F6B26B #FFD966 #93C47D #76A5AF #6FA8DC #8E7CC3 #C27BA0 #CC0000 #E69138 #F1C232 #6AA84F #45818E #3D85C6 #674EA7 #A64D79".split(" "));
  b.Z(8);
  Zd(b, O("whiteboard-cp"));
  M(b, "action", wj);
  dj(b);
  wj({target:b});
  b = new jh("Clear board");
  Zg(b, "clear-board-button");
  Zd(b, a);
  M(b, "action", uj);
  a = O("drawAreaOverlay");
  Pd(a, j);
  M(a, "click", vj, m);
  pj();
  a = new Nh;
  oj = new nj;
  tj();
  c = (new tf(document.location)).Y;
  b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    Q(Mh, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new tf(document.location);
  b ? b = new ag("/_minerva/", c.Ja, t.__demo_mainSocketPort) : (d ? (b = t.__demo_shared_domain, w(b) || e(Error("domain was " + H(b) + "; expected a string.")), c = c.L(), wf(c, "_____random_____." + b)) : c = c.L(), c.Gb("/_minerva/"), yf(c, "", h), b = new cg(c.toString().replace("_____random_____", "%random%")));
  a = new jg(b, a, qj);
  b = oj;
  u(b.Lf) || e(Error("Protocol is missing required method streamStarted"));
  u(b.Kf) || e(Error("Protocol is missing required method streamReset"));
  u(b.Mf) || e(Error("Protocol is missing required method stringReceived"));
  a.Ud = y(b.Lf, b);
  a.onreset = y(b.Kf, b);
  a.Vd = y(b.Mf, b);
  a.Wd = u(b.dh) ? y(b.dh, b) : k;
  a.Xd = u(b.eh) ? y(b.eh, b) : k;
  a.start()
}
var yj = ["__whiteboard_init"], zj = t;
!(yj[0] in zj) && zj.execScript && zj.execScript("var " + yj[0]);
for(var Aj;yj.length && (Aj = yj.shift());) {
  !yj.length && u(xj) ? zj[Aj] = xj : zj = zj[Aj] ? zj[Aj] : zj[Aj] = {}
}
;})();
