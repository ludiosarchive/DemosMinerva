(function() {
function e(a) {
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
function p(a) {
  return function() {
    return a
  }
}
var r;
var ba = ba || {}, t = this;
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
    return a.df ? a.df : a.df = new a
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
function ga(a) {
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
function ka(a) {
  return"number" == typeof a
}
function la(a) {
  return"function" == fa(a)
}
function ja(a) {
  var b = typeof a;
  return"object" == b && a != k || "function" == b
}
function ma(a) {
  return a[na] || (a[na] = ++oa)
}
var na = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), oa = 0;
function pa(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function qa(a, b, c) {
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
function w(a, b, c) {
  w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? pa : qa;
  return w.apply(k, arguments)
}
function ra(a, b) {
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
function A(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.f = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function sa(a) {
  return la(a) || "object" == typeof a && la(a.call) && la(a.apply)
}
;function ta(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
function ua(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function va(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var wa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function xa(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < wa.length;g++) {
      c = wa[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function ya(a) {
  var b = [];
  za(new Aa, a, b);
  return b.join("")
}
function Aa() {
  this.Qc = h
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
      if(ga(b)) {
        var d = b.length;
        c.push("[");
        for(var f = "", g = 0;g < d;g++) {
          c.push(f), f = b[g], za(a, a.Qc ? a.Qc.call(b, "" + g, f) : f, c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), Ba(g, c), c.push(":"), za(a, a.Qc ? a.Qc.call(b, g, f) : f, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var Ca = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Da = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
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
;function C(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, C) : this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
A(C, Error);
C.prototype.name = "CustomError";
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
function Ga(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function Ha(a) {
  if(!Ia.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(Ja, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(Ka, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(La, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Ma, "&quot;"));
  return a
}
var Ja = /&/g, Ka = /</g, La = />/g, Ma = /\"/g, Ia = /[&<>\"]/;
function Na(a) {
  return Ga(a.replace(/  /g, " &#160;"), h)
}
function Oa(a, b) {
  for(var c = 0, d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = ("" + b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(d.length, f.length), i = 0;0 == c && i < g;i++) {
    var l = d[i] || "", n = f[i] || "", q = RegExp("(\\d*)(\\D*)", "g"), x = RegExp("(\\d*)(\\D*)", "g");
    do {
      var s = q.exec(l) || ["", "", ""], y = x.exec(n) || ["", "", ""];
      if(0 == s[0].length && 0 == y[0].length) {
        break
      }
      c = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == y[1].length ? 0 : parseInt(y[1], 10)) ? -1 : (0 == s[1].length ? 0 : parseInt(s[1], 10)) > (0 == y[1].length ? 0 : parseInt(y[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == y[2].length) ? -1 : (0 == s[2].length) > (0 == y[2].length) ? 1 : 0) || (s[2] < y[2] ? -1 : s[2] > y[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
}
var Pa = 2147483648 * Math.random() | 0;
function Qa(a) {
  return("" + a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  })
}
;function Ra(a, b) {
  b.unshift(a);
  C.call(this, Fa.apply(k, b));
  b.shift();
  this.Hi = a
}
A(Ra, C);
Ra.prototype.name = "AssertionError";
function Sa(a, b) {
  e(new Ra("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var D = Array.prototype, Ta = D.indexOf ? function(a, b, c) {
  return D.indexOf.call(a, b, c)
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
}, E = D.forEach ? function(a, b, c) {
  D.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
}, Ua = D.filter ? function(a, b, c) {
  return D.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = [], g = 0, i = v(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in i) {
      var n = i[l];
      b.call(c, n, l, a) && (f[g++] = n)
    }
  }
  return f
}, Va = D.map ? function(a, b, c) {
  return D.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = v(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in g && (f[i] = b.call(c, g[i], i, a))
  }
  return f
}, Wa = D.some ? function(a, b, c) {
  return D.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return j
    }
  }
  return m
}, Xa = D.every ? function(a, b, c) {
  return D.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && !b.call(c, f[g], g, a)) {
      return m
    }
  }
  return j
};
function Ya(a, b) {
  return 0 <= Ta(a, b)
}
function Za(a) {
  if(!ga(a)) {
    for(var b = a.length - 1;0 <= b;b--) {
      delete a[b]
    }
  }
  a.length = 0
}
function $a(a, b) {
  var c = Ta(a, b);
  0 <= c && D.splice.call(a, c, 1)
}
function ab(a) {
  return D.concat.apply(D, arguments)
}
function bb(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
function cb(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], f;
    if(ga(d) || (f = ha(d)) && d.hasOwnProperty("callee")) {
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
function db(a, b, c) {
  return 2 >= arguments.length ? D.slice.call(a, b) : D.slice.call(a, b, c)
}
function eb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function fb(a, b, c) {
  var d = Ta(c, a);
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
        if(sa(a.O)) {
          a.O(b, c)
        }else {
          if(sa(a.$f)) {
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
                  if(ia(a) && "function" == typeof a.valueOf) {
                    b.push("new Date(", "" + a.valueOf(), ")")
                  }else {
                    for(var d = va(a).concat(wa), f = {}, i = g = 0;i < d.length;) {
                      var l = d[i++], n = ja(l) ? "o" + ma(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(f, n) || (f[n] = j, d[g++] = l)
                    }
                    d.length = g;
                    b.push("{");
                    f = "";
                    for(i = 0;i < d.length;i++) {
                      g = d[i], Object.prototype.hasOwnProperty.call(a, g) && (l = a[g], b.push(f), Ba(g, b), b.push(": "), fb(l, b, c), f = ", ")
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
  fb(a, b, c)
}
function G(a) {
  var b = [];
  F(a, b, h);
  return b.join("")
}
;function gb(a) {
  if("function" == typeof a.R) {
    a = a.R()
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
function hb(a) {
  if("function" == typeof a.N) {
    return a.N()
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
  return ua(a)
}
function ib(a) {
  if("function" == typeof a.ta) {
    return a.ta()
  }
  if("function" != typeof a.N) {
    if(ha(a) || v(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return va(a)
  }
}
function jb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ha(a) || v(a)) {
      E(a, b, c)
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
  if(ha(a) || v(a)) {
    return Xa(a, b, h)
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
    a && this.gd(a)
  }
}
r = lb.prototype;
r.d = 0;
r.ve = 0;
r.R = o("d");
r.N = function() {
  mb(this);
  for(var a = [], b = 0;b < this.m.length;b++) {
    a.push(this.u[this.m[b]])
  }
  return a
};
r.ta = function() {
  mb(this);
  return this.m.concat()
};
r.ra = function(a) {
  return nb(this.u, a)
};
r.oc = function(a) {
  for(var b = 0;b < this.m.length;b++) {
    var c = this.m[b];
    if(nb(this.u, c) && this.u[c] == a) {
      return j
    }
  }
  return m
};
r.W = function(a, b) {
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
r.Na = function() {
  return 0 == this.d
};
r.clear = function() {
  this.u = {};
  this.ve = this.d = this.m.length = 0
};
r.remove = function(a) {
  return nb(this.u, a) ? (delete this.u[a], this.d--, this.ve++, this.m.length > 2 * this.d && mb(this), j) : m
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
r.get = function(a, b) {
  return nb(this.u, a) ? this.u[a] : b
};
r.set = function(a, b) {
  nb(this.u, a) || (this.d++, this.m.push(a), this.ve++);
  this.u[a] = b
};
r.gd = function(a) {
  var b;
  a instanceof lb ? (b = a.ta(), a = a.N()) : (b = va(a), a = ua(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
r.L = function() {
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
  this.sb = a;
  this.ob = b
}
tb.prototype.W = function(a) {
  return a instanceof tb && this.sb == a.sb && this.ob.join(",") == a.ob
};
tb.prototype.O = function(a, b) {
  a.push("new SACK(", "" + this.sb, ", ");
  F(this.ob, a, b);
  a.push(")")
};
function ub() {
  this.w = new lb
}
r = ub.prototype;
r.bb = -1;
r.n = 0;
r.append = function(a) {
  var b = qb(a);
  this.w.set(this.bb + 1, [a, b]);
  this.bb += 1;
  this.n += b
};
r.O = function(a) {
  a.push("<Queue with ", "" + this.w.R(), " item(s), counter=#", "" + this.bb, ", size=", "" + this.n, ">")
};
function vb(a) {
  a = a.w.ta();
  D.sort.call(a, eb);
  return a
}
r.Re = function(a) {
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
  var b = a.Za.ta();
  D.sort.call(b, eb);
  return new tb(a.jb, b)
}
var yb = {};
var zb;
zb = p(j);
var Ab, Bb, Cb, Db, Eb;
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
var Ib = Ab, H = Bb, I = Eb, J = Cb, Jb = Db, Kb = t.navigator, Lb = -1 != (Kb && Kb.platform || "").indexOf("Mac"), Mb;
a: {
  var Nb = "", Ob;
  if(Ib && t.opera) {
    var Pb = t.opera.version, Nb = "function" == typeof Pb ? Pb() : Pb
  }else {
    if(I ? Ob = /rv\:([^\);]+)(\)|;)/ : H ? Ob = /MSIE\s+([^\);]+)(\)|;)/ : J && (Ob = /WebKit\/(\S+)/), Ob) {
      var Qb = Ob.exec(Fb()), Nb = Qb ? Qb[1] : ""
    }
  }
  if(H) {
    var Rb, Sb = t.document;
    Rb = Sb ? Sb.documentMode : h;
    if(Rb > parseFloat(Nb)) {
      Mb = "" + Rb;
      break a
    }
  }
  Mb = Nb
}
var Tb = {};
function K(a) {
  return Tb[a] || (Tb[a] = 0 <= Oa(Mb, a))
}
var Ub = {};
function Vb() {
  return Ub[9] || (Ub[9] = H && !!document.documentMode && 9 <= document.documentMode)
}
;function Wb() {
}
var Xb = 0;
r = Wb.prototype;
r.key = 0;
r.nb = m;
r.md = m;
r.Wb = function(a, b, c, d, f, g) {
  la(a) ? this.gf = j : a && a.handleEvent && la(a.handleEvent) ? this.gf = m : e(Error("Invalid listener argument"));
  this.Db = a;
  this.Af = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Cc = g;
  this.md = m;
  this.key = ++Xb;
  this.nb = m
};
r.handleEvent = function(a) {
  return this.gf ? this.Db.call(this.Cc || this.src, a) : this.Db.handleEvent.call(this.Db, a)
};
var Yb = !H || Vb(), Zb = !H || Vb(), $b = H && !K("8");
!J || K("528");
I && K("1.9b") || H && K("8") || Ib && K("9.5") || J && K("528");
I && !K("8") || H && K("9");
var ac = {zh:"click", Eh:"dblclick", Zh:"mousedown", ci:"mouseup", bi:"mouseover", ai:"mouseout", $h:"mousemove", oi:"selectstart", Th:"keypress", Sh:"keydown", Uh:"keyup", xh:"blur", Mh:"focus", Fh:"deactivate", Nh:H ? "focusin" : "DOMFocusIn", Oh:H ? "focusout" : "DOMFocusOut", yh:"change", ni:"select", pi:"submit", Rh:"input", ji:"propertychange", Jh:"dragstart", Gh:"dragenter", Ih:"dragover", Hh:"dragleave", Kh:"drop", ti:"touchstart", si:"touchmove", ri:"touchend", qi:"touchcancel", Bh:"contextmenu", 
Lh:"error", Qh:"help", Vh:"load", Wh:"losecapture", ki:"readystatechange", li:"resize", mi:"scroll", vi:"unload", Ph:"hashchange", fi:"pagehide", gi:"pageshow", ii:"popstate", Ch:"copy", hi:"paste", Dh:"cut", uh:"beforecopy", vh:"beforecut", wh:"beforepaste", ei:"online", di:"offline", Yh:"message", Ah:"connect", ui:J ? "webkitTransitionEnd" : Ib ? "oTransitionEnd" : "transitionend"};
function L() {
}
L.prototype.ya = m;
L.prototype.g = function() {
  this.ya || (this.ya = j, this.c())
};
L.prototype.c = function() {
  this.mg && bc.apply(k, this.mg);
  if(this.uf) {
    for(;this.uf.length;) {
      this.uf.shift()()
    }
  }
};
function bc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? bc.apply(k, d) : d && "function" == typeof d.g && d.g()
  }
}
;function cc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
A(cc, L);
r = cc.prototype;
r.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
r.mb = m;
r.defaultPrevented = m;
r.Rc = j;
r.stopPropagation = function() {
  this.mb = j
};
r.preventDefault = function() {
  this.defaultPrevented = j;
  this.Rc = m
};
function dc(a) {
  a.stopPropagation()
}
;function ec(a) {
  ec[" "](a);
  return a
}
ec[" "] = da;
function fc(a, b) {
  a && this.Wb(a, b)
}
A(fc, cc);
var gc = [1, 4, 2];
r = fc.prototype;
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
r.Yd = m;
r.Aa = k;
r.Wb = function(a, b) {
  var c = this.type = a.type;
  cc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(I) {
      var f;
      a: {
        try {
          ec(d.nodeName);
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
  this.Yd = Lb ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Aa = a;
  a.defaultPrevented && this.preventDefault();
  delete this.mb
};
function hc(a) {
  return Yb ? 0 == a.Aa.button : "click" == a.type ? j : !!(a.Aa.button & gc[0])
}
r.stopPropagation = function() {
  fc.f.stopPropagation.call(this);
  this.Aa.stopPropagation ? this.Aa.stopPropagation() : this.Aa.cancelBubble = j
};
r.preventDefault = function() {
  fc.f.preventDefault.call(this);
  var a = this.Aa;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, $b) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
r.c = function() {
  fc.f.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Aa = k
};
var ic = {}, jc = {}, kc = {}, lc = {};
function M(a, b, c, d, f) {
  if(b) {
    if(ga(b)) {
      for(var g = 0;g < b.length;g++) {
        M(a, b[g], c, d, f)
      }
      return k
    }
    var d = !!d, i = jc;
    b in i || (i[b] = {d:0, ja:0});
    i = i[b];
    d in i || (i[d] = {d:0, ja:0}, i.d++);
    var i = i[d], l = ma(a), n;
    i.ja++;
    if(i[l]) {
      n = i[l];
      for(g = 0;g < n.length;g++) {
        if(i = n[g], i.Db == c && i.Cc == f) {
          if(i.nb) {
            break
          }
          return n[g].key
        }
      }
    }else {
      n = i[l] = [], i.d++
    }
    var q = mc, x = Zb ? function(a) {
      return q.call(x.src, x.key, a)
    } : function(a) {
      a = q.call(x.src, x.key, a);
      if(!a) {
        return a
      }
    }, g = x;
    g.src = a;
    i = new Wb;
    i.Wb(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    n.push(i);
    ic[c] = i;
    kc[l] || (kc[l] = []);
    kc[l].push(i);
    a.addEventListener ? (a == t || !a.rd) && a.addEventListener(b, g, d) : a.attachEvent(b in lc ? lc[b] : lc[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function nc(a, b, c, d, f) {
  if(ga(b)) {
    for(var g = 0;g < b.length;g++) {
      nc(a, b[g], c, d, f)
    }
    return k
  }
  a = M(a, b, c, d, f);
  ic[a].md = j;
  return a
}
function oc(a, b, c, d, f) {
  if(ga(b)) {
    for(var g = 0;g < b.length;g++) {
      oc(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = pc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Db == c && a[g].capture == d && a[g].Cc == f) {
          qc(a[g].key);
          break
        }
      }
    }
  }
}
function qc(a) {
  if(!ic[a]) {
    return m
  }
  var b = ic[a];
  if(b.nb) {
    return m
  }
  var c = b.src, d = b.type, f = b.Af, g = b.capture;
  c.removeEventListener ? (c == t || !c.rd) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in lc ? lc[d] : lc[d] = "on" + d, f);
  c = ma(c);
  f = jc[d][g][c];
  if(kc[c]) {
    var i = kc[c];
    $a(i, b);
    0 == i.length && delete kc[c]
  }
  b.nb = j;
  f.sf = j;
  rc(d, g, c, f);
  delete ic[a];
  return j
}
function rc(a, b, c, d) {
  if(!d.Jc && d.sf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].nb ? d[f].Af.src = k : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.sf = m;
    0 == g && (delete jc[a][b][c], jc[a][b].d--, 0 == jc[a][b].d && (delete jc[a][b], jc[a].d--), 0 == jc[a].d && delete jc[a])
  }
}
function sc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    ta(kc, function(a) {
      for(var f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          qc(g.key), c++
        }
      }
    })
  }else {
    if(a = ma(a), kc[a]) {
      for(var a = kc[a], f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          qc(g.key), c++
        }
      }
    }
  }
}
function pc(a, b, c) {
  var d = jc;
  return b in d && (d = d[b], c in d && (d = d[c], a = ma(a), d[a])) ? d[a] : k
}
function tc(a, b, c, d, f) {
  var g = 1, b = ma(b);
  if(a[b]) {
    a.ja--;
    a = a[b];
    a.Jc ? a.Jc++ : a.Jc = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var n = a[l];
        n && !n.nb && (g &= uc(n, f) !== m)
      }
    }finally {
      a.Jc--, rc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function uc(a, b) {
  a.md && qc(a.key);
  return a.handleEvent(b)
}
function mc(a, b) {
  if(!ic[a]) {
    return j
  }
  var c = ic[a], d = c.type, f = jc;
  if(!(d in f)) {
    return j
  }
  var f = f[d], g, i;
  if(!Zb) {
    g = b || ca("window.event");
    var l = j in f, n = m in f;
    if(l) {
      if(0 > g.keyCode || g.returnValue != h) {
        return j
      }
      a: {
        var q = m;
        if(0 == g.keyCode) {
          try {
            g.keyCode = -1;
            break a
          }catch(x) {
            q = j
          }
        }
        if(q || g.returnValue == h) {
          g.returnValue = j
        }
      }
    }
    q = new fc;
    q.Wb(g, this);
    g = j;
    try {
      if(l) {
        for(var s = [], y = q.currentTarget;y;y = y.parentNode) {
          s.push(y)
        }
        i = f[j];
        i.ja = i.d;
        for(var B = s.length - 1;!q.mb && 0 <= B && i.ja;B--) {
          q.currentTarget = s[B], g &= tc(i, s[B], d, j, q)
        }
        if(n) {
          i = f[m];
          i.ja = i.d;
          for(B = 0;!q.mb && B < s.length && i.ja;B++) {
            q.currentTarget = s[B], g &= tc(i, s[B], d, m, q)
          }
        }
      }else {
        g = uc(c, q)
      }
    }finally {
      s && (s.length = 0), q.g()
    }
    return g
  }
  d = new fc(b, this);
  try {
    g = uc(c, d)
  }finally {
    d.g()
  }
  return g
}
var vc = 0;
function wc() {
}
A(wc, L);
r = wc.prototype;
r.rd = j;
r.Mc = k;
r.fe = aa("Mc");
r.addEventListener = function(a, b, c, d) {
  M(this, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  oc(this, a, b, c, d)
};
r.dispatchEvent = function(a) {
  var b = a.type || a, c = jc;
  if(b in c) {
    if(v(a)) {
      a = new cc(a, this)
    }else {
      if(a instanceof cc) {
        a.target = a.target || this
      }else {
        var d = a, a = new cc(b, this);
        xa(a, d)
      }
    }
    var d = 1, f, c = c[b], b = j in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.Mc) {
        f.push(g)
      }
      g = c[j];
      g.ja = g.d;
      for(var i = f.length - 1;!a.mb && 0 <= i && g.ja;i--) {
        a.currentTarget = f[i], d &= tc(g, f[i], a.type, j, a) && a.Rc != m
      }
    }
    if(m in c) {
      if(g = c[m], g.ja = g.d, b) {
        for(i = 0;!a.mb && i < f.length && g.ja;i++) {
          a.currentTarget = f[i], d &= tc(g, f[i], a.type, m, a) && a.Rc != m
        }
      }else {
        for(f = this;!a.mb && f && g.ja;f = f.Mc) {
          a.currentTarget = f, d &= tc(g, f, a.type, m, a) && a.Rc != m
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
r.c = function() {
  wc.f.c.call(this);
  sc(this);
  this.Mc = k
};
function xc(a, b) {
  this.Fc = a || 1;
  this.gc = b || yc;
  this.kd = w(this.fh, this);
  this.Md = z()
}
A(xc, wc);
xc.prototype.enabled = m;
var yc = t.window;
r = xc.prototype;
r.oa = k;
r.fh = function() {
  if(this.enabled) {
    var a = z() - this.Md;
    0 < a && a < 0.8 * this.Fc ? this.oa = this.gc.setTimeout(this.kd, this.Fc - a) : (this.dispatchEvent(zc), this.enabled && (this.oa = this.gc.setTimeout(this.kd, this.Fc), this.Md = z()))
  }
};
r.start = function() {
  this.enabled = j;
  this.oa || (this.oa = this.gc.setTimeout(this.kd, this.Fc), this.Md = z())
};
r.stop = function() {
  this.enabled = m;
  this.oa && (this.gc.clearTimeout(this.oa), this.oa = k)
};
r.c = function() {
  xc.f.c.call(this);
  this.stop();
  delete this.gc
};
var zc = "tick";
vc++;
vc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Ac(a, b) {
  this.lc = [];
  this.ze = a;
  this.He = b || k
}
r = Ac.prototype;
r.Ka = m;
r.Tb = m;
r.$b = 0;
r.ke = m;
r.gg = m;
r.ld = 0;
r.cancel = function(a) {
  if(this.Ka) {
    this.bc instanceof Ac && this.bc.cancel()
  }else {
    if(this.G) {
      var b = this.G;
      delete this.G;
      a ? b.cancel(a) : (b.ld--, 0 >= b.ld && b.cancel())
    }
    this.ze ? this.ze.call(this.He, this) : this.ke = j;
    this.Ka || this.wb(new Bc(this))
  }
};
r.Ce = function(a, b) {
  Cc(this, a, b);
  this.$b--;
  0 == this.$b && this.Ka && Dc(this)
};
function Cc(a, b, c) {
  a.Ka = j;
  a.bc = c;
  a.Tb = !b;
  Dc(a)
}
function Ec(a) {
  a.Ka && (a.ke || e(new Fc(a)), a.ke = m)
}
function Gc(a, b) {
  Ec(a);
  Cc(a, j, b)
}
r.wb = function(a) {
  Ec(this);
  Cc(this, m, a)
};
function Hc(a, b, c, d) {
  a.lc.push([b, c, d]);
  a.Ka && Dc(a)
}
function Ic(a) {
  return Wa(a.lc, function(a) {
    return la(a[1])
  })
}
function Dc(a) {
  a.te && (a.Ka && Ic(a)) && (t.clearTimeout(a.te), delete a.te);
  a.G && (a.G.ld--, delete a.G);
  for(var b = a.bc, c = m, d = m;a.lc.length && 0 == a.$b;) {
    var f = a.lc.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.Tb ? i : g) {
      try {
        var l = g.call(f || a.He, b);
        u(l) && (a.Tb = a.Tb && (l == b || l instanceof Error), a.bc = b = l);
        b instanceof Ac && (d = j, a.$b++)
      }catch(n) {
        b = n, a.Tb = j, Ic(a) || (c = j)
      }
    }
  }
  a.bc = b;
  d && a.$b && (Hc(b, w(a.Ce, a, j), w(a.Ce, a, m)), b.gg = j);
  c && (a.te = t.setTimeout(function() {
    e(new Jc(b))
  }, 0))
}
function Kc(a) {
  var b = new Ac;
  Gc(b, a);
  return b
}
function Lc(a) {
  var b = new Ac;
  b.wb(a);
  return b
}
function Fc(a) {
  C.call(this);
  this.lg = a
}
A(Fc, C);
Fc.prototype.message = "Already called";
function Bc(a) {
  C.call(this);
  this.lg = a
}
A(Bc, C);
Bc.prototype.message = "Deferred was cancelled";
function Jc(a) {
  C.call(this);
  this.wi = a;
  this.message = "Unhandled Error in Deferred: " + (a.message || "[No message]")
}
A(Jc, C);
function Mc(a) {
  this.H = a;
  this.rc = [];
  this.Le = [];
  this.fg = w(this.mh, this)
}
Mc.prototype.oa = k;
Mc.prototype.mh = function() {
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
    a = this.Le;
    this.Le = [];
    for(b = 0;b < a.length;b++) {
      Gc(a[b], k)
    }
  }
};
var Nc = new Mc(t.window);
var Oc;
function Pc(a) {
  a = a.className;
  return v(a) && a.match(/\S+/g) || []
}
function Qc(a, b) {
  for(var c = Pc(a), d = db(arguments, 1), f = c.length + d.length, g = c, i = 0;i < d.length;i++) {
    Ya(g, d[i]) || g.push(d[i])
  }
  a.className = c.join(" ");
  return c.length == f
}
function Rc(a, b) {
  var c = Pc(a), d = db(arguments, 1), f, g = d;
  f = Ua(c, function(a) {
    return!Ya(g, a)
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
r.Na = function() {
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
var Sc = !H || Vb();
!I && !H || H && Vb() || I && K("1.9.1");
var Tc = H && !K("9");
function Uc() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function Vc(a) {
  return a * Math.PI / 180
}
;function Wc(a) {
  return a ? new Xc(Yc(a)) : Oc || (Oc = new Xc)
}
function O(a) {
  return v(a) ? document.getElementById(a) : a
}
function Zc(a, b, c, d) {
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
      b = i.className, "function" == typeof b.split && Ya(b.split(/\s+/), c) && (d[f++] = i)
    }
    d.length = f;
    return d
  }
  return a
}
var $c = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function ad(a, b, c) {
  return bd(document, arguments)
}
function bd(a, b) {
  var c = b[0], d = b[1];
  if(!Sc && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', Ha(d.name), '"');
    if(d.type) {
      c.push(' type="', Ha(d.type), '"');
      var f = {};
      xa(f, d);
      d = f;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  var g = a.createElement(c);
  d && (v(d) ? g.className = d : ga(d) ? Qc.apply(k, [g].concat(d)) : ta(d, function(a, b) {
    "style" == b ? g.style.cssText = a : "class" == b ? g.className = a : "for" == b ? g.htmlFor = a : b in $c ? g.setAttribute($c[b], a) : 0 == b.lastIndexOf("aria-", 0) ? g.setAttribute(b, a) : g[b] = a
  }));
  2 < b.length && cd(a, g, b, 2);
  return g
}
function cd(a, b, c, d) {
  function f(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    if(ha(g) && !(ja(g) && 0 < g.nodeType)) {
      var i = E, l;
      a: {
        if((l = g) && "number" == typeof l.length) {
          if(ja(l)) {
            l = "function" == typeof l.item || "string" == typeof l.item;
            break a
          }
          if(la(l)) {
            l = "function" == typeof l.item;
            break a
          }
        }
        l = m
      }
      i(l ? bb(g) : g, f)
    }else {
      f(g)
    }
  }
}
function dd(a, b) {
  cd(Yc(a), a, arguments, 1)
}
function ed(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function gd(a, b) {
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
function Yc(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function hd(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      ed(a), a.appendChild(Yc(a).createTextNode(b))
    }
  }
}
var id = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, jd = {IMG:" ", BR:"\n"};
function kd(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ka(a) && 0 <= a && 32768 > a) : m
}
function ld(a) {
  var b = [];
  md(a, b, m);
  return b.join("")
}
function md(a, b, c) {
  if(!(a.nodeName in id)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in jd) {
        b.push(jd[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          md(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Xc(a) {
  this.o = a || t.document || document
}
r = Xc.prototype;
r.Ca = Wc;
r.b = function(a) {
  return v(a) ? this.o.getElementById(a) : a
};
r.i = function(a, b, c) {
  return bd(this.o, arguments)
};
r.createElement = function(a) {
  return this.o.createElement(a)
};
r.createTextNode = function(a) {
  return this.o.createTextNode(a)
};
r.Ee = function(a, b, c) {
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
r.appendChild = function(a, b) {
  a.appendChild(b)
};
r.append = dd;
r.contains = gd;
function nd(a, b) {
  switch(fa(b)) {
    case "string":
      a.push("<string>", Ha(b), "</string>");
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
        a.push('<property id="', d, '">'), nd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', Ha(c), '">'), nd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function od(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, f = arguments;
  d.push("<arguments>");
  for(var g = f.length, i = 1;i < g;i++) {
    nd(d, f[i])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var pd = m, qd = "";
function rd(a) {
  a = a.match(/[\d]+/g);
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var sd = navigator.plugins["Shockwave Flash"];
  sd && (pd = j, sd.description && (qd = rd(sd.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (pd = j, qd = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var td = navigator.mimeTypes["application/x-shockwave-flash"];
    (pd = td && td.enabledPlugin) && (qd = rd(td.enabledPlugin.description))
  }else {
    try {
      var ud = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), pd = j, qd = rd(ud.GetVariable("$version"))
    }catch(vd) {
      try {
        ud = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), pd = j, qd = "6.0.21"
      }catch(wd) {
        try {
          ud = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), pd = j, qd = rd(ud.GetVariable("$version"))
        }catch(xd) {
        }
      }
    }
  }
}
var yd = qd;
function zd(a, b, c) {
  a.style[Qa(c)] = b
}
function Ad(a, b) {
  var c = Yc(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) || "" : ""
}
function Bd(a, b, c) {
  b instanceof N ? (c = b.height, b = b.width) : c == h && e(Error("missing height argument"));
  a.style.width = Cd(b);
  a.style.height = Cd(c)
}
function Cd(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
function Dd(a) {
  if("none" != (Ad(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style && a.style.display)) {
    return Ed(a)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = Ed(a);
  b.display = c;
  b.position = f;
  b.visibility = d;
  return a
}
function Ed(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = J && !b && !c;
  return(!u(b) || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), H && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new N(b.right - b.left, b.bottom - b.top)) : new N(b, c)
}
function Fd(a) {
  H ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[J ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var Gd = I ? "MozUserSelect" : J ? "WebkitUserSelect" : k;
function Hd(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Gd) {
    if(b = b ? "none" : "", a.style[Gd] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[Gd] = b
      }
    }
  }else {
    if(H || Ib) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
;function Id(a) {
  this.gb = a;
  this.m = []
}
A(Id, L);
var Jd = [];
function P(a, b, c, d) {
  ga(c) || (Jd[0] = c, c = Jd);
  for(var f = 0;f < c.length;f++) {
    a.m.push(M(b, c[f], d || a, m, a.gb || a))
  }
  return a
}
function Kd(a, b, c, d, f, g) {
  if(ga(c)) {
    for(var i = 0;i < c.length;i++) {
      Kd(a, b, c[i], d, f, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.gb || a;
      f = !!f;
      if(b = pc(b, c, f)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].nb && b[c].Db == d && b[c].capture == f && b[c].Cc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, qc(b), $a(a.m, b))
  }
  return a
}
Id.prototype.Zd = function() {
  E(this.m, qc);
  this.m.length = 0
};
Id.prototype.c = function() {
  Id.f.c.call(this);
  this.Zd()
};
Id.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Ld() {
}
ea(Ld);
Ld.prototype.Ng = 0;
Ld.La();
function Md(a) {
  this.M = a || Wc();
  this.cc = Nd
}
A(Md, wc);
Md.prototype.Eg = Ld.La();
var Nd = k;
function Od(a, b) {
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
r = Md.prototype;
r.S = k;
r.p = m;
r.e = k;
r.cc = k;
r.Lg = k;
r.G = k;
r.P = k;
r.mc = k;
r.nh = m;
function Pd(a) {
  return a.S || (a.S = ":" + (a.Eg.Ng++).toString(36))
}
r.b = o("e");
function Qd(a) {
  return a.xb || (a.xb = new Id(a))
}
r.getParent = o("G");
r.fe = function(a) {
  this.G && this.G != a && e(Error("Method not supported"));
  Md.f.fe.call(this, a)
};
r.Ca = o("M");
r.i = function() {
  this.e = this.M.createElement("div")
};
function Rd(a, b) {
  a.p && e(Error("Component already rendered"));
  a.e || a.i();
  b ? b.insertBefore(a.e, k) : a.M.o.body.appendChild(a.e);
  (!a.G || a.G.p) && a.Q()
}
r.Q = function() {
  this.p = j;
  Sd(this, function(a) {
    !a.p && a.b() && a.Q()
  })
};
r.cb = function() {
  Sd(this, function(a) {
    a.p && a.cb()
  });
  this.xb && this.xb.Zd();
  this.p = m
};
r.c = function() {
  Md.f.c.call(this);
  this.p && this.cb();
  this.xb && (this.xb.g(), delete this.xb);
  Sd(this, function(a) {
    a.g()
  });
  if(!this.nh && this.e) {
    var a = this.e;
    a && a.parentNode && a.parentNode.removeChild(a)
  }
  this.G = this.Lg = this.e = this.mc = this.P = k
};
r.Sb = o("e");
r.Ib = function(a) {
  this.p && e(Error("Component already rendered"));
  this.cc = a
};
function Sd(a, b) {
  a.P && E(a.P, b, h)
}
r.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : Pd(a), d;
    this.mc && c ? (d = this.mc, d = (c in d ? d[c] : h) || k) : d = k;
    a = d;
    c && a && (d = this.mc, c in d && delete d[c], $a(this.P, a), b && (a.cb(), a.e && (c = a.e) && c.parentNode && c.parentNode.removeChild(c)), c = a, c == k && e(Error("Unable to set parent component")), c.G = k, Md.f.fe.call(c, k))
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function Td(a) {
  this.u = new lb;
  a && this.gd(a)
}
function Ud(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ma(a) : b.substr(0, 1) + a
}
r = Td.prototype;
r.R = function() {
  return this.u.R()
};
r.add = function(a) {
  this.u.set(Ud(a), a)
};
r.gd = function(a) {
  for(var a = hb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
r.Zd = function(a) {
  for(var a = hb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
r.remove = function(a) {
  return this.u.remove(Ud(a))
};
r.clear = function() {
  this.u.clear()
};
r.Na = function() {
  return this.u.Na()
};
r.contains = function(a) {
  return this.u.ra(Ud(a))
};
r.N = function() {
  return this.u.N()
};
r.L = function() {
  return new Td(this)
};
r.W = function(a) {
  var b;
  if(b = this.R() == gb(a)) {
    var c = a, a = gb(c);
    this.R() > a ? b = m : (!(c instanceof Td) && 5 < a && (c = new Td(c)), b = kb(this, function(a) {
      if("function" == typeof c.contains) {
        a = c.contains(a)
      }else {
        if("function" == typeof c.oc) {
          a = c.oc(a)
        }else {
          if(ha(c) || v(c)) {
            a = Ya(c, a)
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
function Vd(a) {
  return Wd(a || arguments.callee.caller, [])
}
function Wd(a, b) {
  var c = [];
  if(Ya(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Xd(a) + "(");
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
            g = (g = Xd(g)) ? g : "[fn]";
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
        c.push(Wd(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Xd(a) {
  if(Yd[a]) {
    return Yd[a]
  }
  a = "" + a;
  if(!Yd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Yd[a] = b ? b[1] : "[Anonymous]"
  }
  return Yd[a]
}
var Yd = {};
function Zd(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
Zd.prototype.Xg = 0;
Zd.prototype.xd = k;
Zd.prototype.wd = k;
var $d = 0;
Zd.prototype.reset = function(a, b, c, d, f) {
  this.Xg = "number" == typeof f ? f : $d++;
  this.Rf = d || z();
  this.Cb = a;
  this.qf = b;
  this.Hg = c;
  delete this.xd;
  delete this.wd
};
Zd.prototype.Wc = aa("Cb");
function ae(a) {
  this.Mg = a
}
ae.prototype.G = k;
ae.prototype.Cb = k;
ae.prototype.P = k;
ae.prototype.Vb = k;
function be(a, b) {
  this.name = a;
  this.value = b
}
be.prototype.toString = o("name");
var ce = new be("OFF", Infinity), de = new be("SHOUT", 1200), ee = new be("SEVERE", 1E3), fe = new be("WARNING", 900), ge = new be("INFO", 800), he = new be("CONFIG", 700), ie = new be("FINE", 500), je = new be("FINEST", 300), ke = new be("ALL", 0);
r = ae.prototype;
r.getParent = o("G");
r.Wc = aa("Cb");
function le(a) {
  if(a.Cb) {
    return a.Cb
  }
  if(a.G) {
    return le(a.G)
  }
  Sa("Root logger has no level set.");
  return k
}
r.log = function(a, b, c) {
  if(a.value >= le(this).value) {
    a = this.wg(a, b, c);
    b = "log:" + a.qf;
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
r.wg = function(a, b, c) {
  var d = new Zd(a, "" + b, this.Mg);
  if(c) {
    d.xd = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var i;
      var l = ca("window.location.href");
      if(v(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var n, q, x = m;
        try {
          n = c.lineNumber || c.Gi || "Not available"
        }catch(s) {
          n = "Not available", x = j
        }
        try {
          q = c.fileName || c.filename || c.sourceURL || l
        }catch(y) {
          q = "Not available", x = j
        }
        i = x || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:q, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + Ha(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + Ha(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ha(Vd(g) + "-> ")
    }catch(B) {
      f = "Exception trying to expose exception! You win, we lose. " + B
    }
    d.wd = f
  }
  return d
};
function me(a, b) {
  a.log(ee, b, h)
}
function Q(a, b, c) {
  a.log(fe, b, c)
}
r.info = function(a, b) {
  this.log(ge, a, b)
};
function R(a, b) {
  a.log(ie, b, h)
}
function S(a, b) {
  a.log(je, b, h)
}
var ne = {}, oe = k;
function pe() {
  oe || (oe = new ae(""), ne[""] = oe, oe.Wc(he))
}
function qe() {
  pe();
  return oe
}
function T(a) {
  pe();
  var b;
  if(!(b = ne[a])) {
    b = new ae(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = T(a.substr(0, c));
    c.P || (c.P = {});
    c.P[d] = b;
    b.G = c;
    ne[a] = b
  }
  return b
}
;function re(a, b) {
  Md.call(this, b);
  this.tg = a;
  this.vd = new Id(this);
  this.tc = new lb
}
A(re, Md);
r = re.prototype;
r.a = T("goog.ui.media.FlashObject");
r.ph = "window";
r.ye = "#000000";
r.bg = "sameDomain";
r.$ = function(a, b) {
  this.rb = v(a) ? a : Math.round(a) + "px";
  this.Fd = v(b) ? b : Math.round(b) + "px";
  this.b() && Bd(this.b() ? this.b().firstChild : k, this.rb, this.Fd);
  return this
};
r.Q = function() {
  re.f.Q.call(this);
  var a = this.b(), b;
  b = H ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = H ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = Fa(c, this.ph), d = this.tc.ta(), f = this.tc.N(), g = [], i = 0;i < d.length;i++) {
    g.push(encodeURIComponent("" + d[i]) + "=" + encodeURIComponent("" + f[i]))
  }
  b = Fa(b, Pd(this), Pd(this), "goog-ui-media-flash-object", Ha(this.tg), Ha(g.join("&")), this.ye, this.bg, c);
  a.innerHTML = b;
  this.rb && this.Fd && this.$(this.rb, this.Fd);
  P(this.vd, this.b(), ua(ac), dc)
};
r.i = function() {
  this.Ef != k && !(0 <= Oa(yd, this.Ef)) && (Q(this.a, "Required flash version not found:" + this.Ef), e(Error("Method not supported")));
  var a = this.Ca().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
r.c = function() {
  re.f.c.call(this);
  this.tc = k;
  this.vd.g();
  this.vd = k
};
function se() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ z()).toString(36)
}
function te(a) {
  return a.substr(0, a.length - 1)
}
var ue = /^(0|[1-9]\d*)$/, ve = /^(0|\-?[1-9]\d*)$/;
function we(a) {
  var b = xe;
  return ue.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function ye(a) {
  C.call(this, a)
}
A(ye, C);
ye.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function ze(a, b) {
  this.S = "_" + se();
  this.bd = a;
  this.Ra = b;
  this.Ya = a.Ya
}
A(ze, L);
r = ze.prototype;
r.kb = j;
r.pc = m;
r.a = T("cw.net.FlashSocket");
r.O = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.S);
  a.push("'>")
};
function Ae(a, b, c) {
  if("frames" == b) {
    a = a.Ra, Be(a.J), Ce(a.J, c)
  }else {
    if("stillreceiving" == b) {
      c = a.Ra, S(c.a, "onstillreceiving"), Be(c.J)
    }else {
      if("connect" == b) {
        a.Ra.onconnect()
      }else {
        "close" == b ? (a.kb = m, a.g()) : "ioerror" == b ? (a.kb = m, b = a.Ra, Q(b.a, "onioerror: " + G(c)), De(b.J, m), a.g()) : "securityerror" == b ? (a.kb = m, b = a.Ra, Q(b.a, "onsecurityerror: " + G(c)), De(b.J, m), a.g()) : e(Error("bad event: " + b))
      }
    }
  }
}
r.od = function(a, b) {
  try {
    var c = this.Ya.CallFunction(od("__FC_connect", this.S, a, b, "<int32/>\n"))
  }catch(d) {
    me(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message);
    this.pc = j;
    this.kb = m;
    this.g();
    return
  }
  '"OK"' != c && e(Error("__FC_connect failed? ret: " + c))
};
r.jc = function(a) {
  try {
    var b = this.Ya.CallFunction(od("__FC_writeFrames", this.S, a))
  }catch(c) {
    me(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message);
    this.pc = j;
    this.kb = m;
    this.g();
    return
  }
  '"OK"' != b && ('"no such instance"' == b ? (Q(this.a, "Flash no longer knows of " + this.S + "; disposing."), this.g()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
r.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.kb);
  ze.f.c.call(this);
  var a = this.Ya;
  delete this.Ya;
  if(this.kb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(od("__FC_close", this.S)))
    }catch(b) {
      me(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.pc = j
    }
  }
  if(this.pc) {
    a = this.Ra, Q(a.a, "oncrash"), De(a.J, j)
  }else {
    this.Ra.onclose()
  }
  delete this.Ra;
  delete this.bd.yb[this.S]
};
function Ee(a, b) {
  this.v = a;
  this.Ya = b;
  this.yb = {};
  this.nd = "__FST_" + se();
  t[this.nd] = w(this.pg, this);
  var c = b.CallFunction(od("__FC_setCallbackFunc", this.nd));
  '"OK"' != c && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
A(Ee, L);
r = Ee.prototype;
r.a = T("cw.net.FlashSocketTracker");
r.O = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  F(this.yb, a, b);
  a.push(">")
};
r.qd = function(a) {
  a = new ze(this, a);
  return this.yb[a.S] = a
};
r.ng = function(a, b, c, d) {
  var f = this.yb[a];
  f ? "frames" == b && d ? (Ae(f, "ioerror", "FlashConnector hadError while handling data."), f.g()) : Ae(f, b, c) : Q(this.a, "Cannot dispatch because we have no instance: " + G([a, b, c, d]))
};
r.pg = function(a, b, c, d) {
  try {
    var f = this.v;
    f.rc.push([this.ng, this, [a, b, c, d]]);
    f.oa == k && (f.oa = f.H.setTimeout(f.fg, 0))
  }catch(g) {
    t.window.setTimeout(function() {
      e(g)
    }, 0)
  }
};
r.c = function() {
  Ee.f.c.call(this);
  for(var a = ua(this.yb);a.length;) {
    a.pop().g()
  }
  delete this.yb;
  delete this.Ya;
  t[this.nd] = h
};
function Fe(a) {
  this.J = a;
  this.Nb = []
}
A(Fe, L);
r = Fe.prototype;
r.a = T("cw.net.FlashSocketConduit");
r.jc = function(a) {
  this.Nb ? (S(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Nb.push.apply(this.Nb, a)) : (S(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.Zc.jc(a))
};
r.od = function(a, b) {
  this.Zc.od(a, b)
};
r.onconnect = function() {
  this.a.info("onconnect");
  Be(this.J);
  var a = this.Nb;
  this.Nb = k;
  a.length && (S(this.a, "onconnect: Writing " + a.length + " buffered frame(s)."), this.Zc.jc(a))
};
r.onclose = function() {
  this.a.info("onclose");
  De(this.J, m)
};
r.c = function() {
  this.a.info("in disposeInternal.");
  Fe.f.c.call(this);
  this.Zc.g();
  delete this.J
};
var Ge = [];
function He() {
  var a = new Ac;
  Ge.push(a);
  return a
}
function Ie(a) {
  var b = Ge;
  Ge = [];
  E(b, function(b) {
    Gc(b, a)
  });
  return k
}
function Je(a) {
  var b = Ge;
  Ge = [];
  E(b, function(b) {
    b.wb(a)
  });
  return k
}
;var xe = Math.pow(2, 53);
var Ke = {$f:p("<cw.eq.Wildcard>")};
function Le(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function Me(a, b, c) {
  var d = fa(a), f = fa(b);
  if(a == Ke || b == Ke) {
    return j
  }
  if(a != k && "function" == typeof a.W) {
    return c && c.push("running custom equals function on left object"), a.W(b, c)
  }
  if(b != k && "function" == typeof b.W) {
    return c && c.push("running custom equals function on right object"), b.W(a, c)
  }
  if(Le(d) || Le(f)) {
    a = a === b
  }else {
    if(a instanceof RegExp && b instanceof RegExp) {
      a = a.toString() === b.toString()
    }else {
      if(ia(a) && ia(b)) {
        a = a.valueOf() === b.valueOf()
      }else {
        if("array" == d && "array" == f) {
          a: {
            if(c && c.push("descending into array"), a.length != b.length) {
              c && c.push("array length mismatch: " + a.length + ", " + b.length), a = m
            }else {
              d = 0;
              for(f = a.length;d < f;d++) {
                if(!Me(a[d], b[d], c)) {
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
          if(a.Zf == zb && b.Zf == zb) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!Me(a[g], b[g], c)) {
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
  this.Ug = a;
  this.Oc = b
}
U.prototype.W = function(a, b) {
  return ja(a) && this.constructor == a.constructor && Me(this.Oc, a.Oc, b)
};
U.prototype.O = function(a, b) {
  a.push("new ", this.Ug, "(");
  for(var c = "", d = 0;d < this.Oc.length;d++) {
    a.push(c), c = ", ", F(this.Oc[d], a, b)
  }
  a.push(")")
};
function V(a) {
  C.call(this, a)
}
A(V, C);
V.prototype.name = "cw.net.InvalidFrame";
function Ne() {
  var a = [];
  this.ma(a);
  return a.join("")
}
function Oe() {
}
Oe.prototype.W = function(a, b) {
  return!(a instanceof Oe) ? m : Me(Pe(this), Pe(a), b)
};
Oe.prototype.O = function(a, b) {
  a.push("<HelloFrame properties=");
  F(Pe(this), a, b);
  a.push(">")
};
function Pe(a) {
  return[a.Fa, a.zf, a.$e, a.Df, a.fc, a.ne, a.rf, a.pf, a.Pd, a.nf, a.Vf, a.Qf, a.Ua, a.Ic]
}
Oe.prototype.ca = Ne;
Oe.prototype.ma = function(a) {
  var b = {};
  b.tnum = this.Fa;
  b.ver = this.zf;
  b.format = this.$e;
  b["new"] = this.Df;
  b.id = this.fc;
  b.ming = this.ne;
  b.pad = this.rf;
  b.maxb = this.pf;
  u(this.Pd) && (b.maxt = this.Pd);
  b.maxia = this.nf;
  b.tcpack = this.Vf;
  b.eeds = this.Qf;
  b.sack = this.Ua instanceof tb ? te((new Qe(this.Ua)).ca()) : this.Ua;
  b.seenack = this.Ic instanceof tb ? te((new Qe(this.Ic)).ca()) : this.Ic;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(ya(b), "H")
};
function Re(a) {
  U.call(this, "StringFrame", [a]);
  this.pe = a
}
A(Re, U);
Re.prototype.ca = Ne;
Re.prototype.ma = function(a) {
  a.push(this.pe, " ")
};
function Se(a) {
  U.call(this, "CommentFrame", [a]);
  this.hg = a
}
A(Se, U);
Se.prototype.ca = Ne;
Se.prototype.ma = function(a) {
  a.push(this.hg, "^")
};
function Te(a) {
  U.call(this, "SeqNumFrame", [a]);
  this.Kf = a
}
A(Te, U);
Te.prototype.ca = Ne;
Te.prototype.ma = function(a) {
  a.push("" + this.Kf, "N")
};
function Ue(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = xe;
    if(ve.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var g = we(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new tb(a, c)
}
function Qe(a) {
  U.call(this, "SackFrame", [a]);
  this.Ua = a
}
A(Qe, U);
Qe.prototype.ca = Ne;
Qe.prototype.ma = function(a) {
  var b = this.Ua;
  a.push(b.ob.join(","), "|", "" + b.sb);
  a.push("A")
};
function Ve(a) {
  U.call(this, "StreamStatusFrame", [a]);
  this.jf = a
}
A(Ve, U);
Ve.prototype.ca = Ne;
Ve.prototype.ma = function(a) {
  var b = this.jf;
  a.push(b.ob.join(","), "|", "" + b.sb);
  a.push("T")
};
function We() {
  U.call(this, "StreamCreatedFrame", [])
}
A(We, U);
We.prototype.ca = Ne;
We.prototype.ma = function(a) {
  a.push("C")
};
function Xe() {
  U.call(this, "YouCloseItFrame", [])
}
A(Xe, U);
Xe.prototype.ca = Ne;
Xe.prototype.ma = function(a) {
  a.push("Y")
};
function Ye(a, b) {
  U.call(this, "ResetFrame", [a, b]);
  this.Bf = a;
  this.xe = b
}
A(Ye, U);
Ye.prototype.ca = Ne;
Ye.prototype.ma = function(a) {
  a.push(this.Bf, "|", "" + Number(this.xe), "!")
};
var Ze = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function $e(a) {
  U.call(this, "TransportKillFrame", [a]);
  this.reason = a
}
A($e, U);
$e.prototype.ca = Ne;
$e.prototype.ma = function(a) {
  a.push(this.reason, "K")
};
function af(a) {
  a || e(new V("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new Re(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = Ue(te(a)), a == k && e(new V("bad sack")), new Qe(a)
  }
  if("N" == b) {
    return a = we(te(a)), a == k && e(new V("bad seqNum")), new Te(a)
  }
  if("T" == b) {
    return a = Ue(te(a)), a == k && e(new V("bad lastSackSeen")), new Ve(a)
  }
  if("Y" == b) {
    return 1 != a.length && e(new V("leading garbage")), new Xe
  }
  if("^" == b) {
    return new Se(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && e(new V("leading garbage")), new We
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && e(new V("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && e(new V("bad applicationLevel")), new Ye(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = Ze[a], a == k && e(new V("unknown kill reason: " + a)), new $e(a)
  }
  e(new V("Invalid frame type " + b))
}
;var bf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function cf(a, b) {
  var c = a.match(bf), d = b.match(bf);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function df(a, b) {
  var c;
  if(a instanceof df) {
    this.da = u(b) ? b : a.da, ef(this, a.Va), c = a.qb, ff(this), this.qb = c, gf(this, a.Ja), hf(this, a.Fb), this.Hb(a.K), jf(this, a.Z.L()), c = a.eb, ff(this), this.eb = c
  }else {
    if(a && (c = ("" + a).match(bf))) {
      this.da = !!b;
      ef(this, c[1] || "", j);
      var d = c[2] || "";
      ff(this);
      this.qb = d ? decodeURIComponent(d) : "";
      gf(this, c[3] || "", j);
      hf(this, c[4]);
      this.Hb(c[5] || "", j);
      jf(this, c[6] || "", j);
      c = c[7] || "";
      ff(this);
      this.eb = c ? decodeURIComponent(c) : ""
    }else {
      this.da = !!b, this.Z = new kf(k, 0, this.da)
    }
  }
}
r = df.prototype;
r.Va = "";
r.qb = "";
r.Ja = "";
r.Fb = k;
r.K = "";
r.eb = "";
r.Fg = m;
r.da = m;
r.toString = function() {
  var a = [], b = this.Va;
  b && a.push(lf(b, mf), ":");
  if(b = this.Ja) {
    a.push("//");
    var c = this.qb;
    c && a.push(lf(c, mf), "@");
    a.push(encodeURIComponent("" + b));
    b = this.Fb;
    b != k && a.push(":", "" + b)
  }
  if(b = this.K) {
    this.Ja && "/" != b.charAt(0) && a.push("/"), a.push(lf(b, "/" == b.charAt(0) ? nf : of))
  }
  (b = this.Z.toString()) && a.push("?", b);
  (b = this.eb) && a.push("#", lf(b, pf));
  return a.join("")
};
r.L = function() {
  return new df(this)
};
function ef(a, b, c) {
  ff(a);
  a.Va = c ? b ? decodeURIComponent(b) : "" : b;
  a.Va && (a.Va = a.Va.replace(/:$/, ""))
}
function gf(a, b, c) {
  ff(a);
  a.Ja = c ? b ? decodeURIComponent(b) : "" : b
}
function hf(a, b) {
  ff(a);
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.Fb = b) : a.Fb = k
}
r.Hb = function(a, b) {
  ff(this);
  this.K = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function jf(a, b, c) {
  ff(a);
  b instanceof kf ? (a.Z = b, a.Z.ee(a.da)) : (c || (b = lf(b, qf)), a.Z = new kf(b, 0, a.da))
}
function ff(a) {
  a.Fg && e(Error("Tried to modify a read-only Uri"))
}
r.ee = function(a) {
  this.da = a;
  this.Z && this.Z.ee(a);
  return this
};
function rf(a) {
  return a instanceof df ? a.L() : new df(a, h)
}
function lf(a, b) {
  return v(a) ? encodeURI(a).replace(b, sf) : k
}
function sf(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var mf = /[#\/\?@]/g, of = /[\#\?:]/g, nf = /[\#\?]/g, qf = /[\#\?@]/g, pf = /#/g;
function kf(a, b, c) {
  this.V = a || k;
  this.da = !!c
}
function tf(a) {
  if(!a.s && (a.s = new lb, a.d = 0, a.V)) {
    for(var b = a.V.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = uf(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
r = kf.prototype;
r.s = k;
r.d = k;
r.R = function() {
  tf(this);
  return this.d
};
r.add = function(a, b) {
  tf(this);
  this.V = k;
  var a = uf(this, a), c = this.s.get(a);
  c || this.s.set(a, c = []);
  c.push(b);
  this.d++;
  return this
};
r.remove = function(a) {
  tf(this);
  a = uf(this, a);
  return this.s.ra(a) ? (this.V = k, this.d -= this.s.get(a).length, this.s.remove(a)) : m
};
r.clear = function() {
  this.s = this.V = k;
  this.d = 0
};
r.Na = function() {
  tf(this);
  return 0 == this.d
};
r.ra = function(a) {
  tf(this);
  a = uf(this, a);
  return this.s.ra(a)
};
r.oc = function(a) {
  var b = this.N();
  return Ya(b, a)
};
r.ta = function() {
  tf(this);
  for(var a = this.s.N(), b = this.s.ta(), c = [], d = 0;d < b.length;d++) {
    for(var f = a[d], g = 0;g < f.length;g++) {
      c.push(b[d])
    }
  }
  return c
};
r.N = function(a) {
  tf(this);
  var b = [];
  if(a) {
    this.ra(a) && (b = ab(b, this.s.get(uf(this, a))))
  }else {
    for(var a = this.s.N(), c = 0;c < a.length;c++) {
      b = ab(b, a[c])
    }
  }
  return b
};
r.set = function(a, b) {
  tf(this);
  this.V = k;
  a = uf(this, a);
  this.ra(a) && (this.d -= this.s.get(a).length);
  this.s.set(a, [b]);
  this.d++;
  return this
};
r.get = function(a, b) {
  var c = a ? this.N(a) : [];
  return 0 < c.length ? c[0] : b
};
r.toString = function() {
  if(this.V) {
    return this.V
  }
  if(!this.s) {
    return""
  }
  for(var a = [], b = this.s.ta(), c = 0;c < b.length;c++) {
    for(var d = b[c], f = encodeURIComponent("" + d), d = this.N(d), g = 0;g < d.length;g++) {
      var i = f;
      "" !== d[g] && (i += "=" + encodeURIComponent("" + d[g]));
      a.push(i)
    }
  }
  return this.V = a.join("&")
};
r.L = function() {
  var a = new kf;
  a.V = this.V;
  this.s && (a.s = this.s.L());
  return a
};
function uf(a, b) {
  var c = "" + b;
  a.da && (c = c.toLowerCase());
  return c
}
r.ee = function(a) {
  a && !this.da && (tf(this), this.V = k, jb(this.s, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.V = k, this.s.set(uf(this, d), bb(a)), this.d += a.length))
  }, this));
  this.da = a
};
function vf(a, b, c, d) {
  this.contentWindow = a;
  this.sc = b;
  this.oe = c;
  this.ug = d
}
vf.prototype.O = function(a, b) {
  a.push("<XDRFrame frameId=");
  F(this.ug, a, b);
  a.push(", expandedUrl=");
  F(this.sc, a, b);
  a.push(", streams=");
  F(this.oe, a, b);
  a.push(">")
};
function wf() {
  this.frames = [];
  this.Nd = new lb
}
wf.prototype.a = T("cw.net.XDRTracker");
function xf(a, b) {
  for(var c = yf, d = 0;d < c.frames.length;d++) {
    var f = c.frames[d], g;
    if(g = 0 == f.oe.length) {
      g = f.sc;
      var i = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + i + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + G(b) + " existing frame " + G(f)), Kc(f)
    }
  }
  d = se() + se();
  f = a.replace(/%random%/g, function() {
    return"ml" + Math.floor(Uc()) + ("" + Math.floor(Uc()))
  });
  g = t.location;
  g instanceof df || (g = rf(g));
  f instanceof df || (f = rf(f));
  var l = g;
  g = f;
  f = l.L();
  (i = !!g.Va) ? ef(f, g.Va) : i = !!g.qb;
  if(i) {
    var n = g.qb;
    ff(f);
    f.qb = n
  }else {
    i = !!g.Ja
  }
  i ? gf(f, g.Ja) : i = g.Fb != k;
  n = g.K;
  if(i) {
    hf(f, g.Fb)
  }else {
    if(i = !!g.K) {
      if("/" != n.charAt(0) && (l.Ja && !l.K ? n = "/" + n : (l = f.K.lastIndexOf("/"), -1 != l && (n = f.K.substr(0, l + 1) + n))), ".." == n || "." == n) {
        n = ""
      }else {
        if(-1 != n.indexOf("./") || -1 != n.indexOf("/.")) {
          for(var l = 0 == n.lastIndexOf("/", 0), n = n.split("/"), q = [], x = 0;x < n.length;) {
            var s = n[x++];
            "." == s ? l && x == n.length && q.push("") : ".." == s ? ((1 < q.length || 1 == q.length && "" != q[0]) && q.pop(), l && x == n.length && q.push("")) : (q.push(s), l = j)
          }
          n = q.join("/")
        }
      }
    }
  }
  i ? f.Hb(n) : i = "" !== g.Z.toString();
  i ? jf(f, g.Z.toString() ? decodeURIComponent(g.Z.toString()) : "") : i = !!g.eb;
  i && (g = g.eb, ff(f), f.eb = g);
  f = f.toString();
  g = ("" + t.location).match(bf)[3] || k;
  i = f.match(bf)[3] || k;
  g == i ? (c.a.info("No need to make a real XDRFrame for " + G(b)), c = Kc(new vf(t, f, [b], k))) : ((g = O("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new Ac, c.Nd.set(d, [i, f, b]), c.a.info("Creating new XDRFrame " + G(d) + "for " + G(b)), c = ad("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:f + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = i);
  return c
}
wf.prototype.sh = function(a) {
  var b = this.Nd.get(a);
  b || e(Error("Unknown frameId " + G(a)));
  this.Nd.remove(b);
  var c = b[0], a = new vf(O("minerva-xdrframe-" + a).contentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  Gc(c, a)
};
var yf = new wf;
t.__XHRTracker_xdrFrameLoaded = w(yf.sh, yf);
var zf;
zf = m;
var Af = Fb();
Af && (-1 != Af.indexOf("Firefox") || -1 != Af.indexOf("Camino") || -1 != Af.indexOf("iPhone") || -1 != Af.indexOf("iPod") || -1 != Af.indexOf("iPad") || -1 != Af.indexOf("Android") || -1 != Af.indexOf("Chrome") && (zf = j));
var Bf = zf;
function Cf(a, b, c, d, f, g) {
  Ac.call(this, f, g);
  this.mf = a;
  this.sd = [];
  this.Ne = !!b;
  this.sg = !!c;
  this.ig = !!d;
  for(b = 0;b < a.length;b++) {
    Hc(a[b], w(this.Ve, this, b, j), w(this.Ve, this, b, m))
  }
  0 == a.length && !this.Ne && Gc(this, this.sd)
}
A(Cf, Ac);
Cf.prototype.tf = 0;
Cf.prototype.Ve = function(a, b, c) {
  this.tf++;
  this.sd[a] = [b, c];
  this.Ka || (this.Ne && b ? Gc(this, [a, c]) : this.sg && !b ? this.wb(c) : this.tf == this.mf.length && Gc(this, this.sd));
  this.ig && !b && (c = k);
  return c
};
Cf.prototype.wb = function(a) {
  Cf.f.wb.call(this, a);
  E(this.mf, function(a) {
    a.cancel()
  })
};
function Df(a, b) {
  this.qh = a;
  this.of = b
}
Df.prototype.Kd = 0;
Df.prototype.Lc = 0;
Df.prototype.yd = m;
function Ef(a) {
  var b = [];
  if(a.yd) {
    return[b, 2]
  }
  var c = a.Kd, d = a.qh.responseText;
  for(a.Kd = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var f = d.substr(a.Lc, c - a.Lc), f = f.replace(/\r$/, "");
    if(f.length > a.of) {
      return a.yd = j, [b, 2]
    }
    b.push(f);
    a.Lc = c += 1
  }
  return a.Kd - a.Lc - 1 > a.of ? (a.yd = j, [b, 2]) : [b, 1]
}
;function Ff(a, b, c) {
  this.J = b;
  this.na = a;
  this.pd = c
}
A(Ff, L);
r = Ff.prototype;
r.a = T("cw.net.XHRMaster");
r.Sa = -1;
r.Od = function(a, b, c) {
  this.pd.__XHRSlave_makeRequest(this.na, a, b, c)
};
r.Ma = o("Sa");
r.Rd = function(a, b) {
  1 != b && me(this.a, G(this.na) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Be(this.J);
  Ce(this.J, a)
};
r.Sd = function(a) {
  R(this.a, "ongotheaders_: " + G(a));
  var b = k;
  "Content-Length" in a && (b = we(a["Content-Length"]));
  a = this.J;
  R(a.a, a.r() + " got Content-Length: " + b);
  a.xa == Gf && (b == k && (Q(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Hf(a, 2E3 + 1E3 * (b / 3072)))
};
r.Td = function(a) {
  1 != a && R(this.a, this.J.r() + "'s XHR's readyState is " + a);
  this.Sa = a;
  2 <= this.Sa && Be(this.J)
};
r.Qd = function() {
  this.J.g()
};
r.c = function() {
  Ff.f.c.call(this);
  delete If.Da[this.na];
  this.pd.__XHRSlave_dispose(this.na);
  delete this.pd
};
function Jf() {
  this.Da = {}
}
A(Jf, L);
r = Jf.prototype;
r.a = T("cw.net.XHRMasterTracker");
r.qd = function(a, b) {
  var c = "_" + se(), d = new Ff(c, a, b);
  return this.Da[c] = d
};
r.Rd = function(a, b, c) {
  if(I) {
    for(var d = [], f = 0, g = b.length;f < g;f++) {
      d[f] = b[f]
    }
    b = d
  }else {
    b = ab(b)
  }
  (d = this.Da[a]) ? d.Rd(b, c) : me(this.a, "onframes_: no master for " + G(a))
};
r.Sd = function(a, b) {
  var c = this.Da[a];
  c ? c.Sd(b) : me(this.a, "ongotheaders_: no master for " + G(a))
};
r.Td = function(a, b) {
  var c = this.Da[a];
  c ? c.Td(b) : me(this.a, "onreadystatechange_: no master for " + G(a))
};
r.Qd = function(a) {
  var b = this.Da[a];
  b ? (delete this.Da[b.na], b.Qd()) : me(this.a, "oncomplete_: no master for " + G(a))
};
r.c = function() {
  Jf.f.c.call(this);
  for(var a = ua(this.Da);a.length;) {
    a.pop().g()
  }
  delete this.Da
};
var If = new Jf;
t.__XHRMaster_onframes = w(If.Rd, If);
t.__XHRMaster_oncomplete = w(If.Qd, If);
t.__XHRMaster_ongotheaders = w(If.Sd, If);
t.__XHRMaster_onreadystatechange = w(If.Td, If);
function Kf(a, b, c) {
  this.va = a;
  this.host = b;
  this.port = c
}
function Lf(a, b, c) {
  this.host = a;
  this.port = b;
  this.ih = c
}
function Mf(a, b) {
  b || (b = a);
  this.va = a;
  this.Wa = b
}
Mf.prototype.O = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  F(this.va, a, b);
  a.push(", secondaryUrl=");
  F(this.Wa, a, b);
  a.push(">")
};
function Nf(a, b, c, d) {
  this.va = a;
  this.yf = b;
  this.Wa = c;
  this.Jf = d;
  (!(0 == this.va.indexOf("http://") || 0 == this.va.indexOf("https://")) || !(0 == this.Wa.indexOf("http://") || 0 == this.Wa.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.yf.location.href;
  cf(this.va, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Jf.location.href;
  cf(this.Wa, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
Nf.prototype.O = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  F(this.va, a, b);
  a.push(", secondaryUrl=");
  F(this.Wa, a, b);
  a.push(">")
};
var Of = new Se(";)]}");
function Pf() {
}
Pf.prototype.Qe = p(1);
function Qf(a) {
  t.setTimeout(function() {
    u(a.message) && a.stack && (a.message += "\n" + a.stack);
    e(a)
  }, 0)
}
function Rf(a) {
  this.dh = a
}
Rf.prototype.O = function(a, b) {
  a.push("<UserContext for ");
  F(this.dh, a, b);
  a.push(">")
};
Rf.prototype.toString = function() {
  return G(this)
};
function Sf(a, b, c, d) {
  U.call(this, "TransportInfo", [a, b, c, d]);
  this.Fa = a;
  this.Fi = b;
  this.Mi = c;
  this.Ni = d
}
A(Sf, U);
function Tf(a, b, c) {
  this.A = a;
  this.eh = b ? b : new Pf;
  this.v = c ? c : Nc;
  this.hc = new Td;
  this.fc = se() + se();
  this.wa = new ub;
  this.Hd = new wb;
  this.ic = k;
  this.dd = [];
  this.Kb = new Rf(this);
  this.eg = w(this.lh, this);
  J && (this.ic = nc(t, "load", this.Wg, m, this))
}
A(Tf, L);
r = Tf.prototype;
r.a = T("cw.net.ClientStream");
r.kf = new tb(-1, []);
r.lf = new tb(-1, []);
r.Kg = 50;
r.Jg = 1048576;
r.Vd = k;
r.Ud = k;
r.Wd = k;
r.Xd = k;
r.onreset = k;
r.wf = k;
r.Gb = k;
r.le = m;
r.$d = m;
r.h = "1_UNSTARTED";
r.re = -1;
r.j = k;
r.z = k;
r.ac = k;
r.me = 0;
r.xf = 0;
r.If = 0;
r.O = function(a, b) {
  a.push("<ClientStream id=");
  F(this.fc, a, b);
  a.push(", state=", "" + this.h);
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
function Uf(a) {
  var b = [-1];
  a.j && b.push(a.j.Eb);
  a.z && b.push(a.z.Eb);
  return Math.max.apply(Math.max, b)
}
function Vf(a) {
  if(!("3_STARTED" > a.h)) {
    Wf(a);
    var b = 0 != a.wa.w.R(), c = xb(a.Hd), d = !c.W(a.lf) && !(a.j && c.W(a.j.Bb) || a.z && c.W(a.z.Bb)), f = Uf(a);
    if((b = b && f < a.wa.bb) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.j.$a ? (S(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.j, c != d.Bb && (!d.Ea && !d.D.length && Xf(d), d.D.push(new Qe(c)), d.Bb = c)), b && Yf(a.j, a.wa, f + 1), a.j.Ba()) : a.z == k ? a.le ? (S(a.a, "tryToSend_: creating secondary to send " + g), a.z = Zf(a, m, j), a.z && (b && Yf(a.z, a.wa, f + 1), a.z.Ba())) : (S(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.$d = j) : S(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
function Wf(a) {
  a.Gb != k && (a.v.H.clearTimeout(a.Gb), a.Gb = k)
}
r.lh = function() {
  this.Gb = k;
  Vf(this)
};
function $f(a) {
  a.Gb == k && (a.Gb = a.v.H.setTimeout(a.eg, 6))
}
r.Wg = function() {
  this.ic = k;
  if(this.j && this.j.zb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.j;
    a.fd = j;
    a.g()
  }
  this.z && this.z.zb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.z, a.fd = j, a.g())
};
function ag(a, b) {
  var c;
  u(c) || (c = j);
  "3_STARTED" < a.h && e(Error("sendString: Can't send in state " + a.h));
  c && (v(b) || e(Error("sendString: not a string: " + G(b))), /^([ -~]*)$/.test(b) || e(Error("sendString: string has illegal chars: " + G(b))));
  a.wa.append(b);
  $f(a)
}
function Zf(a, b, c) {
  var d;
  a.A instanceof Nf ? d = 1 == a.eh.Qe() ? Gf : bg : a.A instanceof Lf ? d = cg : e(Error("Don't support endpoint " + G(a.A)));
  a.re += 1;
  b = new dg(a.v, a, a.re, d, a.A, b);
  S(a.a, "Created: " + b.r());
  if(c) {
    if(a.Wd) {
      c = new Sf(b.Fa, b.Ha, b.Ta, b.$a);
      try {
        a.Wd.call(a.Kb, c)
      }catch(f) {
        Q(a.a, "ontransportcreated raised uncaught exception", f), Qf(f)
      }
    }
    if(eg(a)) {
      return k
    }
  }
  a.hc.add(b);
  return b
}
function fg(a, b, c) {
  var d = new gg(a.v, a, b, c);
  S(a.a, "Created: " + d.r() + ", delay=" + b + ", times=" + c);
  a.hc.add(d);
  return d
}
function hg(a, b) {
  a.hc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  R(a.a, "Offline: " + b.r());
  var c = "4_RESETTING" == a.h && b.Yf;
  if(b instanceof dg && !c) {
    if(a.Xd) {
      var d = new Sf(b.Fa, b.Ha, b.Ta, b.$a);
      try {
        a.Xd.call(a.Kb, d)
      }catch(f) {
        Q(a.a, "ontransportdestroyed raised uncaught exception", f), Qf(f)
      }
    }
    if(eg(a)) {
      return
    }
  }
  a.me = b.Qa ? a.me + b.Qa : 0;
  1 <= a.me && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), ig(a, "stream penalty reached limit", m), a.g());
  if("3_STARTED" < a.h) {
    c ? (R(a.a, "Disposing because resettingTransport_ is done."), a.g()) : R(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    c = b instanceof gg;
    if(!c && b.fd) {
      var g = J ? Bf ? [0, 1] : [9, 20] : [0, 0], c = g[0], d = g[1];
      S(a.a, "getDelayForNextTransport_: " + G({delay:c, times:d}))
    }else {
      if(d = b.Be(), b == a.j ? d ? g = ++a.xf : c || (g = a.xf = 0) : d ? g = ++a.If : c || (g = a.If = 0), c || !g) {
        d = c = 0, S(a.a, "getDelayForNextTransport_: " + G({count:g, delay:c, times:d}))
      }else {
        var i = 2E3 * Math.min(g, 3), l = Math.floor(4E3 * Math.random()) - 2E3, n = Math.max(0, b.Uf - b.se), d = (c = Math.max(0, i + l - n)) ? 1 : 0;
        S(a.a, "getDelayForNextTransport_: " + G({count:g, base:i, variance:l, oldDuration:n, delay:c, times:d}))
      }
    }
    c = [c, d];
    g = c[0];
    c = c[1];
    if(b == a.j) {
      a.j = k;
      if(c) {
        a.j = fg(a, g, c)
      }else {
        g = Uf(a);
        a.j = Zf(a, j, j);
        if(!a.j) {
          return
        }
        Yf(a.j, a.wa, g + 1)
      }
      a.j.Ba()
    }else {
      b == a.z && (a.z = k, c ? (a.z = fg(a, g, c), a.z.Ba()) : Vf(a))
    }
  }
}
function ig(a, b, c) {
  if(a.onreset) {
    try {
      a.onreset.call(a.Kb, b, c)
    }catch(d) {
      Q(a.a, "onreset raised uncaught exception", d), Qf(d)
    }
  }
}
r.reset = function(a) {
  "3_STARTED" < this.h && e(Error("reset: Can't send reset in state " + this.h));
  Wf(this);
  0 != this.wa.w.R() && Q(this.a, "reset: strings in send queue will never be sent: " + G(this.wa));
  this.h = "4_RESETTING";
  this.j && this.j.$a ? (this.a.info("reset: Sending ResetFrame over existing primary."), jg(this.j, a), this.j.Ba()) : (this.j && (R(this.a, "reset: Disposing primary before sending ResetFrame."), this.j.g()), this.z && (R(this.a, "reset: Disposing secondary before sending ResetFrame."), this.z.g()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.ac = Zf(this, m, m), jg(this.ac, a), this.ac.Ba());
  ig(this, a, j)
};
function eg(a) {
  return"4_RESETTING" == a.h || a.ya
}
r.Ke = function(a) {
  me(this.a, "Failed to start " + G(this) + "; error was " + G(a.message));
  this.g();
  return k
};
r.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  "1_UNSTARTED" != this.h && e(Error("ClientStream.start: " + G(this) + " already started"));
  this.Ud && this.Ud(this);
  this.h = "2_WAITING_RESOURCES";
  if(this.A instanceof Mf) {
    var a = xf(this.A.va, this), b = xf(this.A.Wa, this), a = new Cf([a, b], m, j);
    Hc(a, function(a) {
      return Va(a, function(a) {
        return a[1]
      })
    }, k, h);
    b = w(this.rg, this);
    Hc(a, b, k, h);
    b = w(this.Ke, this);
    Hc(a, k, b, h)
  }else {
    if(this.A instanceof Kf) {
      if(sb) {
        this.Me()
      }else {
        a = this.v;
        b = this.A.va;
        if(Ge.length) {
          a = He()
        }else {
          b = new re(b + "FlashConnector.swf?cb=4bdfc178fc0e508c0cd5efc3fdb09920");
          b.ye = "#777777";
          b.$(300, 30);
          var c = O("minerva-elements");
          c || e(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
          var d = O("minerva-elements-FlashConnectorSwf");
          d || (d = ad("div", {id:"minerva-elements-FlashConnectorSwf"}), c.appendChild(d));
          var f = a.H, g;
          var a = d, i, l = function() {
            i && delete t.__loadFlashObject_callbacks[i]
          };
          if(I && !K("1.8.1.20")) {
            g = Lc(new ye("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
          }else {
            if(0 <= Oa(yd, "9")) {
              var n;
              i = "_" + se();
              var q = new Ac(l);
              t.__loadFlashObject_callbacks[i] = function() {
                f.setTimeout(function() {
                  l();
                  Gc(q, O(n))
                }, 0)
              };
              b.tc.set("onloadcallback", '__loadFlashObject_callbacks["' + i + '"]()');
              n = Pd(b);
              Rd(b, a);
              g = q
            }else {
              g = Lc(new ye("Need Flash Player 9+; had " + (yd ? yd : "none")))
            }
          }
          var x = f.setTimeout(function() {
            g.cancel()
          }, 8E3), a = function(a) {
            f.clearTimeout(x);
            return a
          };
          Hc(g, a, a, h);
          rb = g;
          a = He();
          Hc(rb, Ie, Je)
        }
        var s = this;
        Hc(a, function(a) {
          sb || (sb = new Ee(s.v, a));
          return k
        }, k, h);
        b = w(this.Me, this);
        Hc(a, b, k, h);
        b = w(this.Ke, this);
        Hc(a, k, b, h)
      }
    }else {
      kg(this)
    }
  }
};
r.rg = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].sc, f = a[1].sc;
  this.dd.push(a[0]);
  this.dd.push(a[1]);
  this.A = new Nf(d, b, f, c);
  kg(this)
};
r.Me = function() {
  this.A = new Lf(this.A.host, this.A.port, sb);
  kg(this)
};
function kg(a) {
  a.h = "3_STARTED";
  a.j = Zf(a, j, j);
  a.j && (Yf(a.j, a.wa, k), a.j.Ba())
}
r.c = function() {
  this.a.info(G(this) + " in disposeInternal.");
  Wf(this);
  this.h = "5_DISCONNECTED";
  for(var a = this.hc.N(), b = 0;b < a.length;b++) {
    a[b].g()
  }
  for(a = 0;a < this.dd.length;a++) {
    $a(this.dd[a].oe, this)
  }
  J && this.ic && (qc(this.ic), this.ic = k);
  this.wf && this.wf.call(this.Kb);
  delete this.hc;
  delete this.j;
  delete this.z;
  delete this.ac;
  delete this.Kb;
  Tf.f.c.call(this)
};
var Gf = 1, bg = 2, cg = 3;
function dg(a, b, c, d, f, g) {
  this.v = a;
  this.C = b;
  this.Fa = c;
  this.xa = d;
  this.A = f;
  this.D = [];
  this.Ha = g;
  this.$a = !this.zb();
  this.Ta = this.xa != Gf;
  this.dg = w(this.gh, this)
}
A(dg, L);
r = dg.prototype;
r.a = T("cw.net.ClientTransport");
r.q = k;
r.se = k;
r.Uf = k;
r.Pc = k;
r.Ea = m;
r.$c = m;
r.Bb = k;
r.uc = 0;
r.Eb = -1;
r.Nc = -1;
r.Yf = m;
r.fd = m;
r.Qa = 0;
r.Ub = m;
r.O = function(a) {
  a.push("<ClientTransport #", "" + this.Fa, ", becomePrimary=", "" + this.Ha, ">")
};
r.r = function() {
  return(this.Ha ? "Prim. T#" : "Sec. T#") + this.Fa
};
r.Be = function() {
  return!(!this.Ub && this.uc)
};
r.zb = function() {
  return this.xa == Gf || this.xa == bg
};
function lg(a, b) {
  D.sort.call(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  } || eb);
  a: {
    var c = a.C, d = !a.Ta, f, g = c.Hd;
    f = c.Kg;
    for(var i = c.Jg, l = [], n = m, q = 0, x = b.length;q < x;q++) {
      var s = b[q], y = s[0], s = s[1];
      if(y == g.jb + 1) {
        g.jb += 1;
        for(l.push(s);;) {
          y = g.jb + 1;
          s = g.Za.get(y, yb);
          if(s === yb) {
            break
          }
          l.push(s[0]);
          g.Za.remove(y);
          g.n -= s[1];
          g.jb = y
        }
      }else {
        if(!(y <= g.jb)) {
          if(f != k && g.Za.R() >= f) {
            n = j;
            break
          }
          var B = qb(s);
          if(i != k && g.n + B > i) {
            n = j;
            break
          }
          g.Za.set(y, [s, B]);
          g.n += B
        }
      }
    }
    g.Za.Na() && g.Za.clear();
    f = [l, n];
    g = f[0];
    f = f[1];
    if(g) {
      for(i = 0;i < g.length;i++) {
        l = g[i];
        if(c.Vd) {
          try {
            c.Vd.call(c.Kb, l)
          }catch(fd) {
            Q(c.a, "onstring raised uncaught exception", fd), Qf(fd)
          }
        }
        if(eg(c)) {
          break a
        }
      }
    }
    d || $f(c);
    !eg(c) && f && (me(a.a, a.r() + "'s peer caused rwin overflow."), a.g())
  }
}
function mg(a, b, c) {
  try {
    var d = af(b);
    a.uc += 1;
    R(a.a, a.r() + " RECV " + G(d));
    var f;
    1 == a.uc && !d.W(Of) && a.zb() ? (Q(a.a, a.r() + " is closing soon because got bad preamble: " + G(d)), f = j) : f = m;
    if(f) {
      return j
    }
    if(d instanceof Re) {
      if(!/^([ -~]*)$/.test(d.pe)) {
        return a.Ub = j
      }
      a.Nc += 1;
      c.push([a.Nc, d.pe])
    }else {
      if(d instanceof Qe) {
        var g = a.C, i = d.Ua;
        g.kf = i;
        var l = g.wa, n = i.sb, c = m;
        n > l.bb && (c = j);
        for(var q = vb(l).concat(), d = 0;d < q.length;d++) {
          var x = q[d];
          if(x > n) {
            break
          }
          var s = l.w.get(x)[1];
          l.w.remove(x);
          l.n -= s
        }
        for(d = 0;d < i.ob.length;d++) {
          var y = i.ob[d];
          y > l.bb && (c = j);
          l.w.ra(y) && (s = l.w.get(y)[1], l.w.remove(y), l.n -= s)
        }
        l.w.Na() && l.w.clear();
        if(c) {
          return Q(a.a, a.r() + " is closing soon because got bad SackFrame"), a.Ub = j
        }
      }else {
        if(d instanceof Te) {
          a.Nc = d.Kf - 1
        }else {
          if(d instanceof Ve) {
            a.C.lf = d.jf
          }else {
            if(d instanceof Xe) {
              return S(a.a, a.r() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof $e) {
              return a.Ub = j, "stream_attach_failure" == d.reason ? a.Qa += 1 : "acked_unsent_strings" == d.reason && (a.Qa += 0.5), S(a.a, a.r() + " is closing soon because got " + G(d)), j
            }
            if(!(d instanceof Se)) {
              if(d instanceof We) {
                var B = a.C, fd = !a.Ta;
                S(B.a, "Stream is now confirmed to exist at server.");
                B.le = j;
                B.$d && !fd && (B.$d = m, Vf(B))
              }else {
                c.length && (lg(a, c), Za(c));
                if(d instanceof Ye) {
                  var Kg = a.C;
                  ig(Kg, d.Bf, d.xe);
                  Kg.g();
                  return j
                }
                e(Error(a.r() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(Lg) {
    return Lg instanceof V || e(Lg), Q(a.a, a.r() + " is closing soon because got InvalidFrame: " + G(b)), a.Ub = j
  }
  return m
}
function Ce(a, b) {
  a.$c = j;
  try {
    for(var c = m, d = [], f = 0, g = b.length;f < g;f++) {
      if(a.ya) {
        a.a.info(a.r() + " returning from loop because we're disposed.");
        return
      }
      if(c = mg(a, b[f], d)) {
        break
      }
    }
    d.length && lg(a, d);
    a.$c = m;
    a.D.length && a.Ba();
    c && (S(a.a, a.r() + " closeSoon is true.  Frames were: " + G(b)), a.g())
  }finally {
    a.$c = m
  }
}
r.gh = function() {
  Q(this.a, this.r() + " timed out due to lack of connection or no data being received.");
  this.g()
};
function ng(a) {
  a.Pc != k && (a.v.H.clearTimeout(a.Pc), a.Pc = k)
}
function Hf(a, b) {
  ng(a);
  b = Math.round(b);
  a.Pc = a.v.H.setTimeout(a.dg, b);
  R(a.a, a.r() + "'s receive timeout set to " + b + " ms.")
}
function Be(a) {
  a.xa != Gf && (a.xa == cg || a.xa == bg ? Hf(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.xa)))
}
function Xf(a) {
  var b = new Oe;
  b.Fa = a.Fa;
  b.zf = 2;
  b.$e = 2;
  a.C.le || (b.Df = j);
  b.fc = a.C.fc;
  b.ne = a.Ta;
  b.ne && (b.rf = 4096);
  b.pf = 3E5;
  b.nf = a.Ta ? Math.floor(10) : 0;
  b.Vf = m;
  a.Ha && (b.Qf = k, b.Pd = Math.floor((a.Ta ? 358E4 : 25E3) / 1E3));
  b.Ua = xb(a.C.Hd);
  b.Ic = a.C.kf;
  a.D.push(b);
  a.Bb = b.Ua
}
function De(a, b) {
  b && (a.Qa += 0.5);
  a.g()
}
r.Ba = function() {
  this.Ea && !this.$a && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.$c) {
    S(this.a, this.r() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ea;
    this.Ea = j;
    !a && !this.D.length && Xf(this);
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
      this.q = If.qd(this, this.Ha ? this.A.yf : this.A.Jf);
      this.se = this.v.H === yc ? z() : this.v.H.getTime();
      this.q.Od(b, "POST", a);
      Hf(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Ta ? 0 : this.Ha ? 25E3 : 0))
    }else {
      if(this.xa == cg) {
        a = [];
        b = 0;
        for(c = this.D.length;b < c;b++) {
          a.push(this.D[b].ca())
        }
        this.D = [];
        this.q ? this.q.jc(a) : (b = this.A, this.q = new Fe(this), this.q.Zc = b.ih.qd(this.q), this.se = this.v.H === yc ? z() : this.v.H.getTime(), this.q.od(b.host, b.port), this.q.ya || (this.q.jc(a), this.q.ya || Hf(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.xa))
      }
    }
  }
};
function Yf(a, b, c) {
  !a.Ea && !a.D.length && Xf(a);
  for(var c = Math.max(c, a.Eb + 1), b = b.Re(c), c = 0, d = b.length;c < d;c++) {
    var f = b[c], g = f[0], f = f[1];
    (-1 == a.Eb || a.Eb + 1 != g) && a.D.push(new Te(g));
    a.D.push(new Re(f));
    a.Eb = g
  }
}
r.c = function() {
  this.a.info(this.r() + " in disposeInternal.");
  dg.f.c.call(this);
  this.Uf = this.v.H === yc ? z() : this.v.H.getTime();
  this.D = [];
  ng(this);
  this.q && this.q.g();
  var a = this.C;
  this.C = k;
  hg(a, this)
};
function jg(a, b) {
  !a.Ea && !a.D.length && Xf(a);
  a.D.push(new Ye(b, j));
  a.Yf = j
}
function gg(a, b, c, d) {
  this.v = a;
  this.C = b;
  this.Je = c;
  this.De = d
}
A(gg, L);
r = gg.prototype;
r.Ea = m;
r.$a = m;
r.yc = k;
r.Bb = k;
r.a = T("cw.net.DoNothingTransport");
function og(a) {
  a.yc = a.v.H.setTimeout(function() {
    a.yc = k;
    a.De--;
    a.De ? og(a) : a.g()
  }, a.Je)
}
r.Ba = function() {
  this.Ea && !this.$a && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ea = j;
  og(this)
};
r.O = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.Je, ">")
};
r.zb = p(m);
r.r = p("Wast. T");
r.Be = p(m);
r.c = function() {
  this.a.info(this.r() + " in disposeInternal.");
  gg.f.c.call(this);
  this.yc != k && this.v.H.clearTimeout(this.yc);
  var a = this.C;
  this.C = k;
  hg(a, this)
};
function pg() {
}
var qg;
ea(pg);
r = pg.prototype;
r.vc = function() {
};
r.i = function(a) {
  var b = a.Ca().i("div", rg(this, a).join(" "), a.ba);
  this.be(a, b);
  return b
};
r.Sb = function(a) {
  return a
};
r.Rb = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(H && !K("7")) {
      var d = sg(Pc(a), b);
      d.push(b);
      ra(c ? Qc : Rc, a).apply(k, d)
    }else {
      c ? Qc(a, b) : Rc(a, b)
    }
  }
};
r.cf = function(a) {
  a.cc == k && (a.cc = "rtl" == (Ad(a.p ? a.e : a.M.o.body, "direction") || ((a.p ? a.e : a.M.o.body).currentStyle ? (a.p ? a.e : a.M.o.body).currentStyle.direction : k) || (a.p ? a.e : a.M.o.body).style && (a.p ? a.e : a.M.o.body).style.direction));
  a.cc && this.Ib(a.b(), j);
  a.isEnabled() && this.Vc(a, a.Lb)
};
r.be = function(a, b) {
  a.isEnabled() || this.aa(b, 1, j);
  a.h & 8 && this.aa(b, 8, j);
  a.T & 16 && this.aa(b, 16, !!(a.h & 16));
  a.T & 64 && this.aa(b, 64, !!(a.h & 64))
};
r.Sc = function(a, b) {
  Hd(a, !b, !H && !Ib)
};
r.Ib = function(a, b) {
  this.Rb(a, this.t() + "-rtl", b)
};
r.ff = function(a) {
  var b;
  return a.T & 32 && (b = a.fb()) ? kd(b) : m
};
r.Vc = function(a, b) {
  var c;
  if(a.T & 32 && (c = a.fb())) {
    if(!b && a.h & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.h & 32 && a.Ue()
    }
    kd(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
r.je = function(a, b) {
  a.style.display = b ? "" : "none"
};
r.ka = function(a, b, c) {
  var d = a.b();
  if(d) {
    var f = tg(this, b);
    f && this.Rb(a, f, c);
    this.aa(d, b, c)
  }
};
r.aa = function(a, b, c) {
  qg || (qg = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = qg[b]) && a.setAttribute("aria-" + b, c)
};
r.Tc = function(a, b) {
  var c = this.Sb(a);
  if(c && (ed(c), b)) {
    if(v(b)) {
      hd(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = Yc(c);
          c.appendChild(v(a) ? b.createTextNode(a) : a)
        }
      };
      ga(b) ? E(b, d) : ha(b) && !("nodeType" in b) ? E(bb(b), d) : d(b)
    }
  }
};
r.fb = function(a) {
  return a.b()
};
r.t = p("goog-control");
function rg(a, b) {
  var c = a.t(), d = [c], f = a.t();
  f != c && d.push(f);
  c = b.h;
  for(f = [];c;) {
    var g = c & -c;
    f.push(tg(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.sa) && d.push.apply(d, c);
  H && !K("7") && d.push.apply(d, sg(d));
  return d
}
function sg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  E([], function(d) {
    Xa(d, ra(Ya, a)) && (!b || Ya(d, b)) && c.push(d.join("_"))
  });
  return c
}
function tg(a, b) {
  if(!a.Ae) {
    var c = a.t();
    a.Ae = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Ae[b]
}
;function ug(a, b) {
  a || e(Error("Invalid class name " + a));
  la(b) || e(Error("Invalid decorator function " + b))
}
var vg = {};
function wg(a, b, c, d, f) {
  if(!H && (!J || !K("525"))) {
    return j
  }
  if(Lb && f) {
    return xg(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || H && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(H && Vb());
    case 27:
      return!J
  }
  return xg(a)
}
function xg(a) {
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
function yg(a) {
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
;function zg(a, b) {
  a && Ag(this, a, b)
}
A(zg, wc);
r = zg.prototype;
r.e = k;
r.Gc = k;
r.Jd = k;
r.Hc = k;
r.Pa = -1;
r.Oa = -1;
var Bg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Cg = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Dg = H || 
J && K("525");
r = zg.prototype;
r.Ag = function(a) {
  if(J && (17 == this.Pa && !a.ctrlKey || 18 == this.Pa && !a.altKey)) {
    this.Oa = this.Pa = -1
  }
  Dg && !wg(a.keyCode, this.Pa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Oa = I ? yg(a.keyCode) : a.keyCode
};
r.Bg = function() {
  this.Oa = this.Pa = -1
};
r.handleEvent = function(a) {
  var b = a.Aa, c, d;
  H && "keypress" == a.type ? (c = this.Oa, d = 13 != c && 27 != c ? b.keyCode : 0) : J && "keypress" == a.type ? (c = this.Oa, d = 0 <= b.charCode && 63232 > b.charCode && xg(c) ? b.charCode : 0) : Ib ? (c = this.Oa, d = xg(c) ? b.keyCode : 0) : (c = b.keyCode || this.Oa, d = b.charCode || 0, Lb && (63 == d && 224 == c) && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in Bg ? f = Bg[c] : 25 == c && a.shiftKey && (f = 9) : g && g in Cg && (f = Cg[g]);
  a = f == this.Pa;
  this.Pa = f;
  b = new Eg(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.g()
  }
};
r.b = o("e");
function Ag(a, b, c) {
  a.Hc && a.detach();
  a.e = b;
  a.Gc = M(a.e, "keypress", a, c);
  a.Jd = M(a.e, "keydown", a.Ag, c, a);
  a.Hc = M(a.e, "keyup", a.Bg, c, a)
}
r.detach = function() {
  this.Gc && (qc(this.Gc), qc(this.Jd), qc(this.Hc), this.Hc = this.Jd = this.Gc = k);
  this.e = k;
  this.Oa = this.Pa = -1
};
r.c = function() {
  zg.f.c.call(this);
  this.detach()
};
function Eg(a, b, c, d) {
  d && this.Wb(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
A(Eg, fc);
function W(a, b, c) {
  Md.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ma(b);
      if(d = vg[d]) {
        break
      }
      b = b.f ? b.f.constructor : k
    }
    b = d ? la(d.La) ? d.La() : new d : k
  }
  this.l = b;
  this.Uc(a)
}
A(W, Md);
r = W.prototype;
r.ba = k;
r.h = 0;
r.T = 39;
r.jd = 255;
r.bh = 0;
r.Lb = j;
r.sa = k;
r.Ed = j;
r.hd = m;
r.Qg = k;
r.fb = function() {
  return this.l.fb(this)
};
function Fg(a, b) {
  b && (a.sa ? Ya(a.sa, b) || a.sa.push(b) : a.sa = [b], a.l.Rb(a, b, j))
}
r.Rb = function(a, b) {
  b ? Fg(this, a) : a && this.sa && ($a(this.sa, a), 0 == this.sa.length && (this.sa = k), this.l.Rb(this, a, m))
};
r.i = function() {
  var a = this.l.i(this);
  this.e = a;
  var b = this.Qg || this.l.vc();
  b && a.setAttribute("role", b);
  this.hd || this.l.Sc(a, m);
  this.Lb || this.l.je(a, m)
};
r.Sb = function() {
  return this.l.Sb(this.b())
};
r.Q = function() {
  W.f.Q.call(this);
  this.l.cf(this);
  if(this.T & -2 && (this.Ed && Gg(this, j), this.T & 32)) {
    var a = this.fb();
    if(a) {
      var b = this.Ab || (this.Ab = new zg);
      Ag(b, a);
      P(P(P(Qd(this), b, "key", this.Xe), a, "focus", this.yg), a, "blur", this.Ue)
    }
  }
};
function Gg(a, b) {
  var c = Qd(a), d = a.b();
  b ? (P(P(P(P(c, d, "mouseover", a.Bc), d, "mousedown", a.zc), d, "mouseup", a.Ye), d, "mouseout", a.Ac), H && P(c, d, "dblclick", a.We)) : (Kd(Kd(Kd(Kd(c, d, "mouseover", a.Bc), d, "mousedown", a.zc), d, "mouseup", a.Ye), d, "mouseout", a.Ac), H && Kd(c, d, "dblclick", a.We))
}
r.cb = function() {
  W.f.cb.call(this);
  this.Ab && this.Ab.detach();
  this.Lb && this.isEnabled() && this.l.Vc(this, m)
};
r.c = function() {
  W.f.c.call(this);
  this.Ab && (this.Ab.g(), delete this.Ab);
  delete this.l;
  this.sa = this.ba = k
};
r.Tc = function(a) {
  this.l.Tc(this.b(), a);
  this.Uc(a)
};
r.Uc = aa("ba");
r.Pe = function() {
  var a = this.ba;
  if(!a) {
    return""
  }
  if(!v(a)) {
    if(ga(a)) {
      a = Va(a, ld).join("")
    }else {
      if(Tc && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        md(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Tc || (a = a.replace(/ +/g, " "));
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
r.Sc = function(a) {
  this.hd = a;
  var b = this.b();
  b && this.l.Sc(b, a)
};
r.je = function(a, b) {
  if(b || this.Lb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.l.je(c, a);
    this.isEnabled() && this.l.Vc(this, a);
    this.Lb = a;
    return j
  }
  return m
};
r.isEnabled = function() {
  return!(this.h & 1)
};
function Hg(a, b) {
  Ig(a, 2, b) && a.ka(2, b)
}
r.Id = function() {
  return!!(this.h & 4)
};
r.setActive = function(a) {
  Ig(this, 4, a) && this.ka(4, a)
};
r.ge = function(a) {
  Ig(this, 8, a) && this.ka(8, a)
};
r.ka = function(a, b) {
  this.T & a && b != !!(this.h & a) && (this.l.ka(this, a, b), this.h = b ? this.h | a : this.h & ~a)
};
function X(a, b) {
  return!!(a.jd & b) && !!(a.T & b)
}
function Ig(a, b, c) {
  return!!(a.T & b) && !!(a.h & b) != c && (!(a.bh & b) || a.dispatchEvent(Od(b, c))) && !a.ya
}
r.Bc = function(a) {
  !Jg(a, this.b()) && (this.dispatchEvent("enter") && this.isEnabled() && X(this, 2)) && Hg(this, j)
};
r.Ac = function(a) {
  !Jg(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(m), X(this, 2) && Hg(this, m))
};
function Jg(a, b) {
  return!!a.relatedTarget && gd(b, a.relatedTarget)
}
r.zc = function(a) {
  if(this.isEnabled() && (X(this, 2) && Hg(this, j), hc(a) && (!J || !Lb || !a.ctrlKey))) {
    X(this, 4) && this.setActive(j), this.l.ff(this) && this.fb().focus()
  }
  !this.hd && (hc(a) && (!J || !Lb || !a.ctrlKey)) && a.preventDefault()
};
r.Ye = function(a) {
  this.isEnabled() && (X(this, 2) && Hg(this, j), this.Id() && (this.lb(a) && X(this, 4)) && this.setActive(m))
};
r.We = function(a) {
  this.isEnabled() && this.lb(a)
};
r.lb = function(a) {
  if(X(this, 16)) {
    var b = !(this.h & 16);
    Ig(this, 16, b) && this.ka(16, b)
  }
  X(this, 8) && this.ge(j);
  X(this, 64) && (b = !(this.h & 64), Ig(this, 64, b) && this.ka(64, b));
  b = new cc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.Yd = a.Yd);
  return this.dispatchEvent(b)
};
r.yg = function() {
  X(this, 32) && Ig(this, 32, j) && this.ka(32, j)
};
r.Ue = function() {
  X(this, 4) && this.setActive(m);
  X(this, 32) && Ig(this, 32, m) && this.ka(32, m)
};
r.Xe = function(a) {
  return this.Lb && this.isEnabled() && this.Dd(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
r.Dd = function(a) {
  return 13 == a.keyCode && this.lb(a)
};
la(W) || e(Error("Invalid component class " + W));
la(pg) || e(Error("Invalid renderer class " + pg));
var Mg = ma(W);
vg[Mg] = pg;
ug("goog-control", function() {
  return new W(k)
});
function Ng() {
}
A(Ng, pg);
ea(Ng);
r = Ng.prototype;
r.vc = p("button");
r.aa = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : Ng.f.aa.call(this, a, b, c)
};
r.i = function(a) {
  var b = Ng.f.i.call(this, a), c = a.wc();
  c && this.ie(b, c);
  (c = a.xc()) && this.Yc(b, c);
  a.T & 16 && this.aa(b, 16, !!(a.h & 16));
  return b
};
r.xc = da;
r.Yc = da;
r.wc = function(a) {
  return a.title
};
r.ie = function(a, b) {
  a && (a.title = b || "")
};
r.t = p("goog-button");
function Og() {
}
A(Og, Ng);
ea(Og);
r = Og.prototype;
r.vc = function() {
};
r.i = function(a) {
  a.p && m != a.Ed && Gg(a, m);
  a.Ed = m;
  a.jd &= -256;
  a.p && a.h & 32 && e(Error("Component already rendered"));
  a.h & 32 && a.ka(32, m);
  a.T &= -33;
  return a.Ca().i("button", {"class":rg(this, a).join(" "), disabled:!a.isEnabled(), title:a.wc() || "", value:a.xc() || ""}, a.Pe() || "")
};
r.cf = function(a) {
  P(Qd(a), a.b(), "click", a.lb)
};
r.Sc = da;
r.Ib = da;
r.ff = function(a) {
  return a.isEnabled()
};
r.Vc = da;
r.ka = function(a, b, c) {
  Og.f.ka.call(this, a, b, c);
  if((a = a.b()) && 1 == b) {
    a.disabled = c
  }
};
r.xc = function(a) {
  return a.value
};
r.Yc = function(a, b) {
  a && (a.value = b)
};
r.aa = da;
function Pg(a, b, c) {
  W.call(this, a, b || Og.La(), c)
}
A(Pg, W);
r = Pg.prototype;
r.xc = o("Wf");
r.Yc = function(a) {
  this.Wf = a;
  this.l.Yc(this.b(), a)
};
r.wc = o("Sf");
r.ie = function(a) {
  this.Sf = a;
  this.l.ie(this.b(), a)
};
r.c = function() {
  Pg.f.c.call(this);
  delete this.Wf;
  delete this.Sf
};
r.Q = function() {
  Pg.f.Q.call(this);
  if(this.T & 32) {
    var a = this.fb();
    a && P(Qd(this), a, "keyup", this.Dd)
  }
};
r.Dd = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.lb(a) : 32 == a.keyCode
};
ug("goog-button", function() {
  return new Pg(k)
});
function Qg() {
}
A(Qg, Ng);
ea(Qg);
r = Qg.prototype;
r.i = function(a) {
  var b = {"class":"goog-inline-block " + rg(this, a).join(" "), title:a.wc() || ""}, b = a.Ca().i("div", b, Rg(this, a.ba, a.Ca()));
  this.be(a, b);
  return b
};
r.vc = p("button");
r.be = function(a, b) {
  a.isEnabled() || this.aa(b, 1, j);
  a.h & 8 && this.aa(b, 8, j);
  a.T & 16 && this.aa(b, 16, j);
  a.h & 64 && this.aa(b, 64, j)
};
r.Sb = function(a) {
  return a && a.firstChild.firstChild
};
function Rg(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.t() + "-outer-box"), c.i("div", "goog-inline-block " + (a.t() + "-inner-box"), b))
}
r.t = p("goog-custom-button");
function Sg(a, b, c) {
  Pg.call(this, a, b || Qg.La(), c)
}
A(Sg, Pg);
ug("goog-custom-button", function() {
  return new Sg(k)
});
var Tg = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function Ug(a) {
  var b = {}, a = "" + a, c = "#" == a.charAt(0) ? a : "#" + a;
  if(Vg.test(c)) {
    return b.Dc = Wg(c), b.type = "hex", b
  }
  a: {
    var d = a.match(Xg);
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
    return b.Dc = Yg(c[0], c[1], c[2]), b.type = "rgb", b
  }
  if(Tg && (c = Tg[a.toLowerCase()])) {
    return b.Dc = c, b.type = "named", b
  }
  e(Error(a + " is not a valid color string"))
}
var Zg = /#(.)(.)(.)/;
function Wg(a) {
  Vg.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  4 == a.length && (a = a.replace(Zg, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function $g(a) {
  a = Wg(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function Yg(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || 0 > a || 255 < a || isNaN(b) || 0 > b || 255 < b || isNaN(c) || 0 > c || 255 < c) && e(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = ah(a.toString(16));
  b = ah(b.toString(16));
  c = ah(c.toString(16));
  return"#" + a + b + c
}
var Vg = /^#(?:[0-9a-f]{3}){1,2}$/i, Xg = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function ah(a) {
  return 1 == a.length ? "0" + a : a
}
;function bh() {
}
bh.prototype.kc = k;
var ch;
function dh() {
}
A(dh, bh);
function eh(a) {
  return(a = fh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function gh(a) {
  var b = {};
  fh(a) && (b[0] = j, b[1] = j);
  return b
}
function fh(a) {
  if(!a.af && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.af = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.af
}
ch = new dh;
function hh(a) {
  this.headers = new lb;
  this.Mb = a || k
}
A(hh, wc);
hh.prototype.a = T("goog.net.XhrIo");
var ih = /^https?$/i;
r = hh.prototype;
r.Ga = m;
r.k = k;
r.ed = k;
r.Ld = "";
r.hf = "";
r.Xb = 0;
r.Yb = "";
r.ud = m;
r.Ec = m;
r.Gd = m;
r.ib = m;
r.ad = 0;
r.pb = k;
r.Ff = "";
r.oh = m;
r.send = function(a, b, c, d) {
  this.k && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Ld = a;
  this.Yb = "";
  this.Xb = 0;
  this.hf = b;
  this.ud = m;
  this.Ga = j;
  this.k = this.Mb ? eh(this.Mb) : eh(ch);
  this.ed = this.Mb ? this.Mb.kc || (this.Mb.kc = gh(this.Mb)) : ch.kc || (ch.kc = gh(ch));
  this.k.onreadystatechange = w(this.vf, this);
  try {
    R(this.a, jh(this, "Opening Xhr")), this.Gd = j, this.k.open(b, a, j), this.Gd = m
  }catch(f) {
    R(this.a, jh(this, "Error opening Xhr: " + f.message));
    kh(this, f);
    return
  }
  var a = c || "", g = this.headers.L();
  d && jb(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.ra("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  jb(g, function(a, b) {
    this.k.setRequestHeader(b, a)
  }, this);
  this.Ff && (this.k.responseType = this.Ff);
  "withCredentials" in this.k && (this.k.withCredentials = this.oh);
  try {
    this.pb && (yc.clearTimeout(this.pb), this.pb = k), 0 < this.ad && (R(this.a, jh(this, "Will abort after " + this.ad + "ms if incomplete")), this.pb = yc.setTimeout(w(this.hh, this), this.ad)), R(this.a, jh(this, "Sending request")), this.Ec = j, this.k.send(a), this.Ec = m
  }catch(i) {
    R(this.a, jh(this, "Send error: " + i.message)), kh(this, i)
  }
};
r.hh = function() {
  "undefined" != typeof ba && this.k && (this.Yb = "Timed out after " + this.ad + "ms, aborting", this.Xb = 8, R(this.a, jh(this, this.Yb)), this.dispatchEvent("timeout"), this.abort(8))
};
function kh(a, b) {
  a.Ga = m;
  a.k && (a.ib = j, a.k.abort(), a.ib = m);
  a.Yb = b;
  a.Xb = 5;
  lh(a);
  mh(a)
}
function lh(a) {
  a.ud || (a.ud = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
r.abort = function(a) {
  this.k && this.Ga && (R(this.a, jh(this, "Aborting")), this.Ga = m, this.ib = j, this.k.abort(), this.ib = m, this.Xb = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), mh(this))
};
r.c = function() {
  this.k && (this.Ga && (this.Ga = m, this.ib = j, this.k.abort(), this.ib = m), mh(this, j));
  hh.f.c.call(this)
};
r.vf = function() {
  !this.Gd && !this.Ec && !this.ib ? this.Og() : nh(this)
};
r.Og = function() {
  nh(this)
};
function nh(a) {
  if(a.Ga && "undefined" != typeof ba) {
    if(a.ed[1] && 4 == a.Ma() && 2 == oh(a)) {
      R(a.a, jh(a, "Local request error detected and ignored"))
    }else {
      if(a.Ec && 4 == a.Ma()) {
        yc.setTimeout(w(a.vf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.Ma()) {
          R(a.a, jh(a, "Request complete"));
          a.Ga = m;
          try {
            var b = oh(a), c, d;
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
                var g = ("" + a.Ld).match(bf)[1] || k;
                if(!g && self.location) {
                  var i = self.location.protocol, g = i.substr(0, i.length - 1)
                }
                f = !ih.test(g ? g.toLowerCase() : "")
              }
              c = f
            }
            if(c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success")
            }else {
              a.Xb = 6;
              var l;
              try {
                l = 2 < a.Ma() ? a.k.statusText : ""
              }catch(n) {
                R(a.a, "Can not get status: " + n.message), l = ""
              }
              a.Yb = l + " [" + oh(a) + "]";
              lh(a)
            }
          }finally {
            mh(a)
          }
        }
      }
    }
  }
}
function mh(a, b) {
  if(a.k) {
    var c = a.k, d = a.ed[0] ? da : k;
    a.k = k;
    a.ed = k;
    a.pb && (yc.clearTimeout(a.pb), a.pb = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(f) {
      me(a.a, "Problem encountered resetting onreadystatechange: " + f.message)
    }
  }
}
r.Id = function() {
  return!!this.k
};
r.Ma = function() {
  return this.k ? this.k.readyState : 0
};
function oh(a) {
  try {
    return 2 < a.Ma() ? a.k.status : -1
  }catch(b) {
    return Q(a.a, "Can not get status: " + b.message), -1
  }
}
r.getResponseHeader = function(a) {
  return this.k && 4 == this.Ma() ? this.k.getResponseHeader(a) : h
};
function jh(a, b) {
  return b + " [" + a.hf + " " + a.Ld + " " + oh(a) + "]"
}
;var ph = !(H || J && !K("420+"));
function qh(a, b) {
  this.bd = a;
  this.na = b
}
A(qh, L);
r = qh.prototype;
r.q = k;
r.Sa = -1;
r.Te = m;
r.Ze = "Content-Length Server Date Expires Keep-Alive Content-Type Transfer-Encoding Cache-Control".split(" ");
function rh(a) {
  var b = Ef(a.Ge), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.na, c, b), 1 != b && a.g()) : a.g()
}
r.Dg = function() {
  rh(this);
  if(!this.ya) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.na);
    this.g()
  }
};
r.Tg = function() {
  var a = t.parent;
  if(a) {
    this.Sa = this.q.Ma();
    if(2 <= this.Sa && !this.Te) {
      for(var b = new lb, c = this.Ze.length;c--;) {
        var d = this.Ze[c];
        try {
          b.set(d, this.q.k.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.R() && (this.Te = j, a.__XHRMaster_ongotheaders(this.na, pb(b)), this.ya)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.na, this.Sa);
    ph && 3 == this.Sa && rh(this)
  }else {
    this.g()
  }
};
r.Od = function(a, b, c) {
  this.q = new hh;
  M(this.q, "readystatechange", w(this.Tg, this));
  M(this.q, "complete", w(this.Dg, this));
  this.q.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Ge = new Df(this.q.k, 1048576)
};
r.c = function() {
  qh.f.c.call(this);
  delete this.Ge;
  this.q && this.q.g();
  delete this.bd.ec[this.na];
  delete this.bd
};
function sh() {
  this.ec = {}
}
A(sh, L);
sh.prototype.Ig = function(a, b, c, d) {
  var f = new qh(this, a);
  this.ec[a] = f;
  f.Od(b, c, d)
};
sh.prototype.og = function(a) {
  (a = this.ec[a]) && a.g()
};
sh.prototype.c = function() {
  sh.f.c.call(this);
  for(var a = ua(this.ec);a.length;) {
    a.pop().g()
  }
  delete this.ec
};
var th = new sh;
t.__XHRSlave_makeRequest = w(th.Ig, th);
t.__XHRSlave_dispose = w(th.og, th);
var uh = T("cw.net.demo");
function vh() {
}
vh.prototype.Qe = function() {
  return Boolean(Number((new df(document.location)).Z.get("httpStreaming", "0"))) ? 2 : 1
};
function wh(a) {
  this.o = a
}
var xh = /\s*;\s*/;
r = wh.prototype;
r.isEnabled = function() {
  return navigator.cookieEnabled
};
r.set = function(a, b, c, d, f, g) {
  /[;=\s]/.test(a) && e(Error('Invalid cookie name "' + a + '"'));
  /[;\r\n]/.test(b) && e(Error('Invalid cookie value "' + b + '"'));
  u(c) || (c = -1);
  f = f ? ";domain=" + f : "";
  d = d ? ";path=" + d : "";
  g = g ? ";secure" : "";
  c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(z() + 1E3 * c)).toUTCString();
  this.o.cookie = a + "=" + b + f + d + c + g
};
r.get = function(a, b) {
  for(var c = a + "=", d = (this.o.cookie || "").split(xh), f = 0, g;g = d[f];f++) {
    if(0 == g.indexOf(c)) {
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
  return yh(this).keys
};
r.N = function() {
  return yh(this).Xf
};
r.Na = function() {
  return!this.o.cookie
};
r.R = function() {
  return!this.o.cookie ? 0 : (this.o.cookie || "").split(xh).length
};
r.ra = function(a) {
  return u(this.get(a))
};
r.oc = function(a) {
  for(var b = yh(this).Xf, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return j
    }
  }
  return m
};
r.clear = function() {
  for(var a = yh(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b])
  }
};
function yh(a) {
  for(var a = (a.o.cookie || "").split(xh), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), -1 == d ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{keys:b, Xf:c}
}
var zh = new wh(document);
zh.Xh = 3950;
function Ah() {
  this.Cf = z()
}
var Bh = new Ah;
Ah.prototype.set = aa("Cf");
Ah.prototype.reset = function() {
  this.set(z())
};
Ah.prototype.get = o("Cf");
function Ch(a) {
  this.Rg = a || "";
  this.ah = Bh
}
Ch.prototype.Lf = j;
Ch.prototype.Zg = j;
Ch.prototype.Yg = j;
Ch.prototype.Mf = m;
function Dh(a) {
  return 10 > a ? "0" + a : "" + a
}
function Eh(a, b) {
  var c = (a.Rf - b) / 1E3, d = c.toFixed(3), f = 0;
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
function Fh(a) {
  Ch.call(this, a)
}
A(Fh, Ch);
Fh.prototype.Mf = j;
function Gh(a) {
  this.Sg = w(this.ag, this);
  this.Oe = new Fh;
  this.ef = this.Oe.Lf = m;
  this.e = a;
  this.qg = this.e.ownerDocument || this.e.document;
  var a = Wc(this.e), b = k;
  if(H) {
    b = a.o.createStyleSheet(), Fd(b)
  }else {
    var c = Zc(a.o, "head", h, h)[0];
    c || (b = Zc(a.o, "body", h, h)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    Fd(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
Gh.prototype.ag = function(a) {
  var b = 100 >= this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight, c = this.qg.createElement("div");
  c.className = "logmsg";
  var d = this.Oe, f;
  switch(a.Cb.value) {
    case de.value:
      f = "dbg-sh";
      break;
    case ee.value:
      f = "dbg-sev";
      break;
    case fe.value:
      f = "dbg-w";
      break;
    case ge.value:
      f = "dbg-i";
      break;
    default:
      f = "dbg-f"
  }
  var g = [];
  g.push(d.Rg, " ");
  if(d.Lf) {
    var i = new Date(a.Rf);
    g.push("[", Dh(i.getFullYear() - 2E3) + Dh(i.getMonth() + 1) + Dh(i.getDate()) + " " + Dh(i.getHours()) + ":" + Dh(i.getMinutes()) + ":" + Dh(i.getSeconds()) + "." + Dh(Math.floor(i.getMilliseconds() / 10)), "] ")
  }
  d.Zg && g.push("[", Na(Eh(a, d.ah.get())), "s] ");
  d.Yg && g.push("[", Ha(a.Hg), "] ");
  g.push('<span class="', f, '">', Ga(Na(Ha(a.qf))));
  d.Mf && a.xd && g.push("<br>", Ga(Na(a.wd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  b && (this.e.scrollTop = this.e.scrollHeight)
};
Gh.prototype.clear = function() {
  this.e.innerHTML = ""
};
function Hh(a, b, c, d, f, g) {
  6 == arguments.length ? this.setTransform(a, b, c, d, f, g) : (0 != arguments.length && e(Error("Insufficient matrix parameters")), this.ea = this.ha = 1, this.Y = this.fa = this.ga = this.ia = 0)
}
r = Hh.prototype;
r.L = function() {
  return new Hh(this.ea, this.Y, this.fa, this.ha, this.ga, this.ia)
};
r.setTransform = function(a, b, c, d, f, g) {
  (!ka(a) || !ka(b) || !ka(c) || !ka(d) || !ka(f) || !ka(g)) && e(Error("Invalid transform parameters"));
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
  var d = new Hh, f = Math.cos(a), a = Math.sin(a), b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f), c = this.ea, d = this.fa;
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
r.W = function(a) {
  return this == a ? j : !a ? m : this.ea == a.ea && this.fa == a.fa && this.ga == a.ga && this.Y == a.Y && this.ha == a.ha && this.ia == a.ia
};
function Y(a, b) {
  this.e = a;
  this.ua = b;
  this.rd = m
}
A(Y, wc);
r = Y.prototype;
r.ua = k;
r.e = k;
r.Tf = k;
r.b = o("e");
r.addEventListener = function(a, b, c, d) {
  M(this.e, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  oc(this.e, a, b, c, d)
};
r.c = function() {
  Y.f.c.call(this);
  sc(this.e)
};
function Z(a, b, c, d) {
  Y.call(this, a, b);
  this.qe = c;
  this.ua.de(this, c);
  this.fill = d;
  this.ua.ce(this, d)
}
A(Z, Y);
Z.prototype.fill = k;
Z.prototype.qe = k;
Z.prototype.vg = o("fill");
Z.prototype.xg = o("qe");
function Ih(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
A(Ih, Z);
function Jh(a, b) {
  Y.call(this, a, b)
}
A(Jh, Y);
function Kh(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
A(Kh, Z);
function Lh(a, b) {
  Y.call(this, a, b)
}
A(Lh, Y);
function Mh(a, b) {
  Y.call(this, a, b)
}
A(Mh, Jh);
Mh.prototype.clear = function() {
  ed(this.b())
};
Mh.prototype.$ = function(a, b) {
  Nh(this.b(), {width:a, height:b})
};
function Oh(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
A(Oh, Kh);
function Ph(a, b) {
  Y.call(this, a, b)
}
A(Ph, Lh);
Ph.prototype.$ = function(a, b) {
  Nh(this.b(), {width:a, height:b})
};
function Qh() {
}
;function Rh(a, b) {
  this.qa = a;
  this.Zb = b == k ? 1 : b
}
A(Rh, Qh);
function Sh() {
  this.rb = 1;
  this.qa = "black"
}
;function Th() {
  this.B = [];
  this.d = [];
  this.pa = []
}
Th.prototype.ub = k;
Th.prototype.U = k;
Th.prototype.Jb = j;
var Uh = [2, 2, 6, 6, 0];
r = Th.prototype;
r.clear = function() {
  this.B.length = 0;
  this.d.length = 0;
  this.pa.length = 0;
  delete this.ub;
  delete this.U;
  delete this.Jb;
  return this
};
r.moveTo = function(a, b) {
  0 == this.B[this.B.length - 1] ? this.pa.length -= 2 : (this.B.push(0), this.d.push(1));
  this.pa.push(a, b);
  this.U = this.ub = [a, b];
  return this
};
r.lineTo = function(a) {
  var b = this.B[this.B.length - 1];
  b == k && e(Error("Path cannot start with lineTo"));
  1 != b && (this.B.push(1), this.d.push(0));
  for(b = 0;b < arguments.length;b += 2) {
    var c = arguments[b], d = arguments[b + 1];
    this.pa.push(c, d)
  }
  this.d[this.d.length - 1] += b / 2;
  this.U = [c, d];
  return this
};
r.Fe = function(a) {
  var b = this.B[this.B.length - 1];
  b == k && e(Error("Path cannot start with curve"));
  2 != b && (this.B.push(2), this.d.push(0));
  for(b = 0;b < arguments.length;b += 6) {
    var c = arguments[b + 4], d = arguments[b + 5];
    this.pa.push(arguments[b], arguments[b + 1], arguments[b + 2], arguments[b + 3], c, d)
  }
  this.d[this.d.length - 1] += b / 6;
  this.U = [c, d];
  return this
};
r.close = function() {
  var a = this.B[this.B.length - 1];
  a == k && e(Error("Path cannot start with close"));
  4 != a && (this.B.push(4), this.d.push(1), this.U = this.ub);
  return this
};
r.arcTo = function(a, b, c, d) {
  var f = this.U[0] - a * Math.cos(Vc(c)) + a * Math.cos(Vc(c + d)), g = this.U[1] - b * Math.sin(Vc(c)) + b * Math.sin(Vc(c + d));
  this.B.push(3);
  this.d.push(1);
  this.pa.push(a, b, c, d, f, g);
  this.Jb = m;
  this.U = [f, g];
  return this
};
r.cg = function(a, b, c, d) {
  for(var f = this.U[0] - a * Math.cos(Vc(c)), g = this.U[1] - b * Math.sin(Vc(c)), i = Vc(d), d = Math.ceil(2 * (Math.abs(i) / Math.PI)), i = i / d, c = Vc(c), l = 0;l < d;l++) {
    var n = Math.cos(c), q = Math.sin(c), x = 4 / 3 * Math.sin(i / 2) / (1 + Math.cos(i / 2)), s = f + (n - x * q) * a, y = g + (q + x * n) * b, c = c + i, n = Math.cos(c), q = Math.sin(c);
    this.Fe(s, y, f + (n + x * q) * a, g + (q - x * n) * b, f + n * a, g + q * b)
  }
  return this
};
function Vh(a, b) {
  for(var c = a.pa, d = 0, f = 0, g = a.B.length;f < g;f++) {
    var i = a.B[f], l = Uh[i] * a.d[f];
    b(i, c.slice(d, d + l));
    d += l
  }
}
r.L = function() {
  var a = new this.constructor;
  a.B = this.B.concat();
  a.d = this.d.concat();
  a.pa = this.pa.concat();
  a.ub = this.ub && this.ub.concat();
  a.U = this.U && this.U.concat();
  a.Jb = this.Jb;
  return a
};
var Wh = {};
Wh[0] = Th.prototype.moveTo;
Wh[1] = Th.prototype.lineTo;
Wh[4] = Th.prototype.close;
Wh[2] = Th.prototype.Fe;
Wh[3] = Th.prototype.cg;
Th.prototype.Na = function() {
  return 0 == this.B.length
};
function Xh(a, b, c, d, f) {
  Md.call(this, f);
  this.width = a;
  this.height = b;
  this.la = c || k;
  this.Pb = d || k
}
A(Xh, Md);
r = Xh.prototype;
r.F = k;
r.Ia = 0;
r.ab = 0;
r.Se = function() {
  return this.X()
};
r.X = function() {
  return this.p ? Dd(this.b()) : ka(this.width) && ka(this.height) ? new N(this.width, this.height) : k
};
function Yh(a) {
  var b = a.X();
  return b ? b.width / (a.la ? new N(a.la, a.Pb) : a.X()).width : 0
}
;function Zh(a, b, c, d, f) {
  Xh.call(this, a, b, c, d, f);
  this.Ie = {};
  this.ue = J && !K(526);
  this.gb = new Id(this)
}
var $h;
A(Zh, Xh);
function ai(a, b, c) {
  a = a.M.o.createElementNS("http://www.w3.org/2000/svg", b);
  c && Nh(a, c);
  return a
}
function Nh(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
r = Zh.prototype;
r.tb = function(a, b) {
  (b || this.F).b().appendChild(a.b())
};
r.ce = function(a, b) {
  var c = a.b();
  b instanceof Rh ? (c.setAttribute("fill", b.qa), c.setAttribute("fill-opacity", b.Zb)) : c.setAttribute("fill", "none")
};
r.de = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.qa);
    var d = b.rb;
    v(d) && -1 != d.indexOf("px") ? c.setAttribute("stroke-width", parseFloat(d) / Yh(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
r.i = function() {
  var a = ai(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = ai(this, "g");
  this.td = ai(this, "defs");
  this.F = new Mh(b, this);
  a.appendChild(this.td);
  a.appendChild(b);
  this.e = a;
  if(this.la || this.Ia || this.ab) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.ue ? this.cd() : this.b().setAttribute("viewBox", this.Ia + " " + this.ab + " " + (this.la ? this.la + " " + this.Pb : ""))
  }
};
r.cd = function() {
  if(this.p && (this.la || this.Ia || !this.ab)) {
    var a = this.X();
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
  Bd(this.b(), a, b)
};
r.X = function() {
  if(!I) {
    return this.p ? Dd(this.b()) : Zh.f.X.call(this)
  }
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.p && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = Dd(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Dd(f), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
r.clear = function() {
  this.F.clear();
  ed(this.td);
  this.Ie = {}
};
r.qc = function(a, b, c, d, f, g, i) {
  a = ai(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new Oh(a, this, f, g);
  this.tb(f, i);
  return f
};
r.drawImage = function(a, b, c, d, f, g) {
  a = ai(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new Ph(a, this);
  this.tb(f, g);
  return f
};
r.Q = function() {
  var a = this.X();
  Zh.f.Q.call(this);
  a || this.dispatchEvent("resize");
  if(this.ue) {
    var a = this.width, b = this.height;
    "string" == typeof a && (-1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%")) && P(this.gb, bi(), zc, this.cd);
    this.cd()
  }
};
r.cb = function() {
  Zh.f.cb.call(this);
  this.ue && Kd(this.gb, bi(), zc, this.cd)
};
r.c = function() {
  delete this.Ie;
  delete this.td;
  delete this.F;
  Zh.f.c.call(this)
};
function bi() {
  $h || ($h = new xc(400), $h.start());
  return $h
}
;function ci() {
  return this.e = this.ua.M.b(this.S) || this.e
}
function di(a, b) {
  this.S = a.id;
  Y.call(this, a, b)
}
A(di, Jh);
di.prototype.b = ci;
di.prototype.clear = function() {
  ed(this.b())
};
di.prototype.$ = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  this.ua.F != this && (c.coordorigin = "0 0")
};
function ei(a, b, c, d, f, g, i, l) {
  this.S = a.id;
  Z.call(this, a, b, i, l);
  this.xi = c;
  this.yi = d;
  this.Ki = f;
  this.Li = g
}
A(ei, Kh);
ei.prototype.b = ci;
function fi(a, b) {
  this.S = a.id;
  Y.call(this, a, b)
}
A(fi, Lh);
fi.prototype.b = ci;
fi.prototype.$ = function(a, b) {
  var c = this.b().style;
  c.width = gi(a) + "px";
  c.height = gi(b) + "px"
};
function hi(a, b, c, d, f) {
  Xh.call(this, a, b, c, d, f);
  this.gb = new Id(this)
}
A(hi, Xh);
var ii = document.documentMode && 8 <= document.documentMode;
function gi(a) {
  return Math.round(100 * (parseFloat(a.toString()) - 0.5))
}
function $(a) {
  return Math.round(100 * parseFloat(a.toString()))
}
function ji(a, b) {
  var c = a.M.createElement("g_vml_:" + b);
  c.id = "goog_" + Pa++;
  return c
}
function ki(a) {
  ii && a.p && (a.b().innerHTML = a.b().innerHTML)
}
hi.prototype.tb = function(a, b) {
  (b || this.F).b().appendChild(a.b());
  ki(this)
};
hi.prototype.ce = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    "fill" == f.tagName && c.removeChild(f)
  }
  b instanceof Rh ? "transparent" == b.qa ? c.filled = m : 1 != b.Zb ? (c.filled = j, d = ji(this, "fill"), d.opacity = Math.round(100 * b.Zb) + "%", d.color = b.qa, c.appendChild(d)) : (c.filled = j, c.fillcolor = b.qa) : c.filled = m;
  ki(this)
};
hi.prototype.de = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = j;
    var d = b.rb, d = v(d) && -1 == d.indexOf("px") ? parseFloat(d) : d * Yh(this), f = c.getElementsByTagName("stroke")[0];
    1 > d ? (f = f || ji(this, "stroke"), f.opacity = d, f.Oi = "1px", f.color = b.qa, c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.qa, c.strokeweight = d + "px")
  }else {
    c.stroked = m
  }
  ki(this)
};
function li(a, b, c, d, f) {
  var g = a.style;
  g.position = "absolute";
  g.left = gi(b) + "px";
  g.top = gi(c) + "px";
  g.width = $(d) + "px";
  g.height = $(f) + "px";
  "shape" == a.tagName && (a.coordsize = $(d) + " " + $(f))
}
try {
  eval("document.namespaces")
}catch(mi) {
}
r = hi.prototype;
r.i = function() {
  var a = this.M.o;
  a.namespaces.g_vml_ || (ii ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}");
  var a = this.width, b = this.height, c = this.M.i("div", {style:"overflow:hidden;position:relative;width:" + (v(a) && Ea(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (v(b) && Ea(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = ji(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.la ? $(this.la) + " " + $(this.Pb) : $(a) + " " + $(b);
  d.coordorigin = u(this.Ia) ? $(this.Ia) + " " + $(this.ab) : "0 0";
  c.appendChild(d);
  this.F = new di(d, this);
  M(c, "resize", w(this.Cd, this))
};
r.Cd = function() {
  var a = Dd(this.b()), b = this.F.b().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.b();a && a.currentStyle && "none" != a.currentStyle.display;) {
      a = a.parentNode
    }
    a && a.currentStyle && P(this.gb, a, "propertychange", this.Cd)
  }
  this.dispatchEvent("resize")
};
r.$ = function(a, b) {
  Bd(this.b(), a, b)
};
r.X = function() {
  var a = this.b();
  return new N(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
r.clear = function() {
  this.F.clear()
};
r.qc = function(a, b, c, d, f, g, i) {
  var l = ji(this, "oval");
  li(l, a - c, b - d, 2 * c, 2 * d);
  a = new ei(l, this, a, b, c, d, f, g);
  this.tb(a, i);
  return a
};
r.drawImage = function(a, b, c, d, f, g) {
  var i = ji(this, "image");
  li(i, a, b, c, d);
  ii ? i.src = f : i.setAttribute("src", f);
  a = new fi(i, this);
  this.tb(a, g);
  return a
};
r.Q = function() {
  hi.f.Q.call(this);
  this.Cd();
  ki(this)
};
r.c = function() {
  this.F = k;
  hi.f.c.call(this)
};
function ni(a) {
  Y.call(this, k, a);
  this.P = []
}
A(ni, Jh);
ni.prototype.clear = function() {
  this.P.length && (this.P.length = 0, oi(this.ua))
};
ni.prototype.$ = function() {
};
ni.prototype.appendChild = function(a) {
  this.P.push(a)
};
ni.prototype.za = function() {
  for(var a = 0, b = this.P.length;a < b;a++) {
    pi(this.ua, this.P[a])
  }
};
function qi(a, b, c, d, f, g, i, l) {
  Z.call(this, a, b, i, l);
  this.jg = c;
  this.kg = d;
  this.Gf = f;
  this.Hf = g;
  this.K = new Th;
  this.K.clear();
  this.K.moveTo(this.jg + this.Gf * Math.cos(Vc(0)), this.kg + this.Hf * Math.sin(Vc(0)));
  this.K.arcTo(this.Gf, this.Hf, 0, 360);
  this.K.close();
  this.Pg = new ri(k, b, this.K, i, l)
}
A(qi, Kh);
qi.prototype.za = function(a) {
  this.Pg.za(a)
};
function ri(a, b, c, d, f) {
  Z.call(this, a, b, d, f);
  this.Hb(c)
}
A(ri, Ih);
ri.prototype.Qb = m;
ri.prototype.Hb = function(a) {
  if(!a.Jb) {
    if(a.Jb) {
      a = a.L()
    }else {
      var b = new Th;
      Vh(a, function(a, d) {
        Wh[a].apply(b, d)
      });
      a = b
    }
  }
  this.K = a;
  this.Qb && oi(this.ua)
};
ri.prototype.za = function(a) {
  this.Qb = j;
  a.beginPath();
  Vh(this.K, function(b, c) {
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
function si(a, b, c, d, f, g, i) {
  Y.call(this, a, b);
  this.rh = c;
  this.th = d;
  this.we = f;
  this.Bd = g;
  this.$g = i
}
A(si, Lh);
si.prototype.Qb = m;
si.prototype.$ = function(a, b) {
  this.we = a;
  this.Bd = b;
  this.Qb && oi(this.ua)
};
si.prototype.za = function(a) {
  this.bf ? (this.we && this.Bd && a.drawImage(this.bf, this.rh, this.th, this.we, this.Bd), this.Qb = j) : (a = new Image, a.onload = w(this.zg, this, a), a.src = this.$g)
};
si.prototype.zg = function(a) {
  this.bf = a;
  oi(this.ua)
};
function ti(a, b, c, d, f) {
  Xh.call(this, a, b, c, d, f)
}
A(ti, Xh);
r = ti.prototype;
r.ce = function() {
  oi(this)
};
r.de = function() {
  oi(this)
};
function ui(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.Tf ? b.Tf.L() : new Hh, f = d.ga, g = d.ia;
  (f || g) && c.translate(f, g);
  (d = d.Y) && c.rotate(Math.asin(d))
}
r.i = function() {
  var a = this.M.i("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Ob = this.M.i("canvas");
  a.appendChild(this.Ob);
  this.Gg = this.F = new ni(this);
  this.Vg = 0;
  vi(this)
};
r.getContext = function() {
  this.b() || this.i();
  this.vb || (this.vb = this.Ob.getContext("2d"), this.vb.save());
  return this.vb
};
r.$ = function(a, b) {
  this.width = a;
  this.height = b;
  vi(this);
  oi(this)
};
r.X = function() {
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.p && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = Dd(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Dd(f), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
function vi(a) {
  Bd(a.b(), a.width, a.height);
  var b = a.X();
  b && (Bd(a.Ob, b.width, b.height), a.Ob.width = b.width, a.Ob.height = b.height, a.vb = k)
}
r.reset = function() {
  var a = this.getContext();
  a.restore();
  var b = this.X();
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
function oi(a) {
  if(a.Ji) {
    a.Ii = j
  }else {
    if(a.p) {
      a.reset();
      if(a.la) {
        var b = a.X();
        a.getContext().scale(b.width / a.la, b.height / a.Pb)
      }
      (a.Ia || a.ab) && a.getContext().translate(-a.Ia, -a.ab);
      ui(a, a.F);
      a.F.za(a.vb);
      a.getContext().restore()
    }
  }
}
function pi(a, b) {
  var c = a.getContext();
  ui(a, b);
  if(!b.vg || !b.xg) {
    b.za(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof Rh) {
        0 != d.Zb && (c.globalAlpha = d.Zb, c.fillStyle = d.qa, b.za(c), c.fill(), c.globalAlpha = 1)
      }else {
        var f = c.createLinearGradient(d.Bi(), d.Di(), d.Ci(), d.Ei());
        f.addColorStop(0, d.zi());
        f.addColorStop(1, d.Ai());
        c.fillStyle = f;
        b.za(c);
        c.fill()
      }
    }
    if(d = b.qe) {
      b.za(c), c.strokeStyle = d.qa, d = d.rb, v(d) && -1 != d.indexOf("px") && (d = parseFloat(d) / Yh(a)), c.lineWidth = d, c.stroke()
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
  this.p && (!this.Vg && !(b != this.F && b != this.Gg)) && pi(this, a)
};
r.qc = function(a, b, c, d, f, g, i) {
  a = new qi(k, this, a, b, c, d, f, g);
  this.append(a, i);
  return a
};
r.drawImage = function(a, b, c, d, f, g) {
  a = new si(k, this, a, b, c, d, f);
  this.append(a, g);
  return a
};
r.c = function() {
  this.vb = k;
  ti.f.c.call(this)
};
r.Q = function() {
  var a = this.X();
  ti.f.Q.call(this);
  a || (vi(this), this.dispatchEvent("resize"));
  oi(this)
};
function wi(a) {
  this.w = [];
  xi(this, a)
}
A(wi, wc);
r = wi.prototype;
r.Xa = k;
r.ae = k;
function xi(a, b) {
  b && (E(b, function(a) {
    this.dc(a, m)
  }, a), cb(a.w, b))
}
r.Ad = o("Xa");
r.Re = function() {
  return bb(this.w)
};
r.Xc = function(a) {
  a != this.Xa && (this.dc(this.Xa, m), this.Xa = a, this.dc(a, j));
  this.dispatchEvent("select")
};
r.zd = function() {
  return this.Xa ? Ta(this.w, this.Xa) : -1
};
r.he = function(a) {
  this.Xc(this.w[a] || k)
};
r.clear = function() {
  Za(this.w);
  this.Xa = k
};
r.c = function() {
  wi.f.c.call(this);
  delete this.w;
  this.Xa = k
};
r.dc = function(a, b) {
  a && ("function" == typeof this.ae ? this.ae(a, b) : "function" == typeof a.ge && a.ge(b))
};
function yi() {
}
A(yi, pg);
ea(yi);
var zi = 0;
yi.prototype.i = function(a) {
  var b = rg(this, a);
  return a.Ca().i("div", b ? b.join(" ") : k, Ai(this, a.ba, a.Se(), a.Ca()))
};
function Ai(a, b, c, d) {
  for(var f = [], g = 0, i = 0;g < c.height;g++) {
    for(var l = [], n = 0;n < c.width;n++) {
      var q = b && b[i++];
      l.push(Bi(a, q, d))
    }
    f.push(d.i("tr", a.t() + "-row", l))
  }
  return a.Ee(f, d)
}
yi.prototype.Ee = function(a, b) {
  var c = b.i("table", this.t() + "-table", b.i("tbody", this.t() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  c.setAttribute("role", "grid");
  return c
};
function Bi(a, b, c) {
  a = c.i("td", {"class":a.t() + "-cell", id:a.t() + "-cell-" + zi++}, b);
  a.setAttribute("role", "gridcell");
  return a
}
yi.prototype.Tc = function(a, b) {
  if(a) {
    var c = Zc(document, "tbody", this.t() + "-body", a)[0];
    if(c) {
      var d = 0;
      E(c.rows, function(a) {
        E(a.cells, function(a) {
          ed(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = Wc(a), i = c.rows[0].cells.length;d < b.length;) {
          var l = b[d++];
          f.push(Bi(this, l, g));
          f.length == i && (l = g.i("tr", this.t() + "-row", f), c.appendChild(l), f.length = 0)
        }
        if(0 < f.length) {
          for(;f.length < i;) {
            f.push(Bi(this, "", g))
          }
          l = g.i("tr", this.t() + "-row", f);
          c.appendChild(l)
        }
      }
    }
    Hd(a, j, I)
  }
};
function Ci(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && Ya(Pc(c), a.t() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function Di(a, b, c, d) {
  c && (c = c.parentNode, a = a.t() + "-cell-hover", d ? Qc(c, a) : Rc(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id))
}
yi.prototype.t = p("goog-palette");
function Ei(a, b, c) {
  W.call(this, a, b || yi.La(), c)
}
A(Ei, W);
r = Ei.prototype;
r.n = k;
r.hb = -1;
r.I = k;
r.c = function() {
  Ei.f.c.call(this);
  this.I && (this.I.g(), this.I = k);
  this.n = k
};
r.Uc = function(a) {
  Ei.f.Uc.call(this, a);
  Fi(this);
  this.I ? (this.I.clear(), xi(this.I, a)) : (this.I = new wi(a), this.I.ae = w(this.dc, this), P(Qd(this), this.I, "select", this.Cg));
  this.hb = -1
};
r.Pe = p("");
r.Bc = function(a) {
  Ei.f.Bc.call(this, a);
  var b = Ci(this.l, this, a.target);
  if((!b || !a.relatedTarget || !gd(b, a.relatedTarget)) && b != Gi(this)) {
    a = this.ba, Hi(this, a ? Ta(a, b) : -1)
  }
};
r.Ac = function(a) {
  Ei.f.Ac.call(this, a);
  var b = Ci(this.l, this, a.target);
  (!b || !a.relatedTarget || !gd(b, a.relatedTarget)) && b == Gi(this) && Di(this.l, this, b, m)
};
r.zc = function(a) {
  Ei.f.zc.call(this, a);
  if(this.Id() && (a = Ci(this.l, this, a.target), a != Gi(this))) {
    var b = this.ba;
    Hi(this, b ? Ta(b, a) : -1)
  }
};
r.lb = function() {
  var a = Gi(this);
  return a ? (this.Xc(a), this.dispatchEvent("action")) : m
};
r.Xe = function(a) {
  var b = this.ba, b = b ? b.length : 0, c = this.n.width;
  if(0 == b || !this.isEnabled()) {
    return m
  }
  if(13 == a.keyCode || 32 == a.keyCode) {
    return this.lb(a)
  }
  if(36 == a.keyCode) {
    return Hi(this, 0), j
  }
  if(35 == a.keyCode) {
    return Hi(this, b - 1), j
  }
  var d = 0 > this.hb ? this.zd() : this.hb;
  switch(a.keyCode) {
    case 37:
      -1 == d && (d = b);
      if(0 < d) {
        return Hi(this, d - 1), a.preventDefault(), j
      }
      break;
    case 39:
      if(d < b - 1) {
        return Hi(this, d + 1), a.preventDefault(), j
      }
      break;
    case 38:
      -1 == d && (d = b + c - 1);
      if(d >= c) {
        return Hi(this, d - c), a.preventDefault(), j
      }
      break;
    case 40:
      if(-1 == d && (d = -c), d < b - c) {
        return Hi(this, d + c), a.preventDefault(), j
      }
  }
  return m
};
r.Cg = function() {
};
r.Se = o("n");
r.$ = function(a, b) {
  this.b() && e(Error("Component already rendered"));
  this.n = ka(a) ? new N(a, b) : a;
  Fi(this)
};
function Gi(a) {
  var b = a.ba;
  return b && b[a.hb]
}
function Hi(a, b) {
  b != a.hb && (Ii(a, a.hb, m), a.hb = b, Ii(a, b, j))
}
r.zd = function() {
  return this.I ? this.I.zd() : -1
};
r.Ad = function() {
  return this.I ? this.I.Ad() : k
};
r.he = function(a) {
  this.I && this.I.he(a)
};
r.Xc = function(a) {
  this.I && this.I.Xc(a)
};
function Ii(a, b, c) {
  if(a.b()) {
    var d = a.ba;
    d && (0 <= b && b < d.length) && Di(a.l, a, d[b], c)
  }
}
r.dc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.l.t() + "-cell-selected";
    b ? Qc(c, d) : Rc(c, d)
  }
};
function Fi(a) {
  var b = a.ba;
  if(b) {
    if(a.n && a.n.width) {
      if(b = Math.ceil(b.length / a.n.width), !ka(a.n.height) || a.n.height < b) {
        a.n.height = b
      }
    }else {
      b = Math.ceil(Math.sqrt(b.length)), a.n = new N(b, b)
    }
  }else {
    a.n = new N(0, 0)
  }
}
;function Ji(a, b, c) {
  this.nc = a || [];
  Ei.call(this, k, b || yi.La(), c);
  this.nc = this.nc;
  this.Kc = k;
  this.Tc(Va(this.nc, function(a) {
    var b = this.Ca().i("div", {"class":this.l.t() + "-colorswatch", style:"background-color:" + a});
    b.title = "#" == a.charAt(0) ? "RGB (" + $g(a).join(", ") + ")" : a;
    return b
  }, this))
}
A(Ji, Ei);
Ji.prototype.Kc = k;
function Ki(a) {
  if(a) {
    try {
      return Ug(a).Dc
    }catch(b) {
    }
  }
  return k
}
;function Li(a) {
  a = "" + a;
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
;var Mi, Ni, Oi, Pi, Qi, Ri = T("whiteboard.logger");
window.onerror = function(a, b, c) {
  me(Ri, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Si() {
}
Si.prototype.Of = function(a) {
  this.C = a;
  ag(this.C, "subprotocol:whiteboard")
};
Si.prototype.Nf = function(a, b) {
  Ri.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  Ti = k
};
Si.prototype.Pf = function(a) {
  var a = Li(a), b = a[0], c = a[1];
  "Point" == b ? Mi.qc(c.x, c.y, 5, 5, new Sh, new Rh(c.color), h) : "ClearBoard" == b ? (Mi.g(), Ui()) : Q(Ri, "Strange message from server: " + G(a))
};
Si.prototype.reset = function(a) {
  Ri.info("resetting with reason: " + a);
  this.C.reset(a)
};
var Ti = k, Vi = new Mc(t.window);
function Wi() {
  Ti && (Ti.reset("idle timeout fired"), Ti = k)
}
var Xi = k;
function Yi() {
  Xi != k && Vi.H.clearTimeout(Xi);
  Ti && (Xi = Vi.H.setTimeout(Wi, 2592E5))
}
M(window, ["click", "focus", "keydown", "keypress"], Yi, j);
function Zi() {
  Mi.g();
  Ui();
  var a = Ti;
  Ri.info("Telling server to clear the board.");
  ag(a.C, ya(["ClearBoard", k]))
}
function $i(a) {
  var b = new fc(a), a = b.offsetX, b = b.offsetY;
  Mi.qc(a, b, 5, 5, new Sh, new Rh(Ni), h);
  var c = Ti, d = Ni;
  Ri.info("Telling server about circle at: " + a + ", " + b + " with color " + d);
  ag(c.C, ya(["Point", {x:a, y:b, color:d}]))
}
function Ui() {
  var a;
  a = H && !K("9") ? new hi(800, 600, h, h, h) : J && (!K("420") || Jb) ? new ti(800, 600, h, h, h) : new Zh(800, 600, h, h, h);
  a.i();
  Oi = O("drawArea");
  Rd(a, Oi);
  Mi = a
}
var aj = "#E06666";
function bj(a) {
  var b;
  (a = a.target.Ad()) ? (a = a.style[Qa("background-color")] || "", b = Ki(a)) : b = k;
  b || (b = aj);
  Ni = b;
  zh.set("whiteboard_defaultColor", b);
  a = O("whiteboard-cp-value");
  v("background-color") ? zd(a, b, "background-color") : ta("background-color", ra(zd, a));
  a = O("whiteboard-cp-value");
  a.title = b;
  b = Ug(b).Dc;
  hd(a, b);
  b = $g(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = Yg(b[0], b[1], b[2]);
  v("color") ? zd(a, b, "color") : ta("color", ra(zd, a))
}
function cj() {
  Pi = (new df(document.location)).Z;
  if(Qi = Boolean(Number(Pi.get("logging", "0")))) {
    qe().Wc(ke);
    var a = new Gh(document.getElementById("log"));
    if(j != a.ef) {
      var b = qe(), c = a.Sg;
      b.Vb || (b.Vb = []);
      b.Vb.push(c);
      a.ef = j
    }
  }else {
    qe().Wc(ce)
  }
  Ri.info("Logger works.");
  (a = zh.get("whiteboard_defaultColor")) && (aj = a);
  Ni = aj;
  b = O("whiteboard-controls-left");
  a = O("whiteboard-controls-right");
  c = ad("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  dd(b, c);
  c = ad("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  dd(b, c);
  b = new Ji("#EA9999 #F9CB9C #FFE599 #B6D7A8 #A2C4C9 #9FC5E8 #B4A7D6 #D5A6BD #E06666 #F6B26B #FFD966 #93C47D #76A5AF #6FA8DC #8E7CC3 #C27BA0 #CC0000 #E69138 #F1C232 #6AA84F #45818E #3D85C6 #674EA7 #A64D79".split(" "));
  b.$(8);
  Rd(b, O("whiteboard-cp"));
  M(b, "action", bj);
  c = Ki(aj);
  b.Kc || (b.Kc = Va(b.nc, function(a) {
    return Ki(a)
  }));
  b.he(c ? Ta(b.Kc, c) : -1);
  bj({target:b});
  b = new Sg("Clear board");
  Fg(b, "clear-board-button");
  Rd(b, a);
  M(b, "action", Zi);
  a = O("drawAreaOverlay");
  Hd(a, j);
  M(a, "click", $i, m);
  Ui();
  a = new vh;
  Ti = new Si;
  Yi();
  c = (new df(document.location)).Z;
  b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    Q(uh, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new df(document.location);
  b ? b = new Kf("/_minerva/", c.Ja, t.__demo_mainSocketPort) : (d ? (b = t.__demo_shared_domain, v(b) || e(Error("domain was " + G(b) + "; expected a string.")), c = c.L(), gf(c, "_____random_____." + b)) : c = c.L(), c.Hb("/_minerva/"), jf(c, "", h), b = new Mf(c.toString().replace("_____random_____", "%random%")));
  a = new Tf(b, a, Vi);
  b = Ti;
  u(b.Of) || e(Error("Protocol is missing required method streamStarted"));
  u(b.Nf) || e(Error("Protocol is missing required method streamReset"));
  u(b.Pf) || e(Error("Protocol is missing required method stringReceived"));
  a.Ud = w(b.Of, b);
  a.onreset = w(b.Nf, b);
  a.Vd = w(b.Pf, b);
  a.Wd = u(b.jh) ? w(b.jh, b) : k;
  a.Xd = u(b.kh) ? w(b.kh, b) : k;
  a.start()
}
var dj = ["__whiteboard_init"], ej = t;
!(dj[0] in ej) && ej.execScript && ej.execScript("var " + dj[0]);
for(var fj;dj.length && (fj = dj.shift());) {
  !dj.length && u(cj) ? ej[fj] = cj : ej = ej[fj] ? ej[fj] : ej[fj] = {}
}
;
})();
