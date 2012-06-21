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
    return a.ff ? a.ff : a.ff = new a
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
  this.Rc = h
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
          c.push(f), f = b[g], za(a, a.Rc ? a.Rc.call(b, "" + g, f) : f, c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), Ba(g, c), c.push(":"), za(a, a.Rc ? a.Rc.call(b, g, f) : f, c), d = ","))
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
  this.Ji = a
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
          if(sa(a.bg)) {
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
    a && this.hd(a)
  }
}
r = lb.prototype;
r.d = 0;
r.we = 0;
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
  this.we = this.d = this.m.length = 0
};
r.remove = function(a) {
  return nb(this.u, a) ? (delete this.u[a], this.d--, this.we++, this.m.length > 2 * this.d && mb(this), j) : m
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
  nb(this.u, a) || (this.d++, this.m.push(a), this.we++);
  this.u[a] = b
};
r.hd = function(a) {
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
r.Te = function(a) {
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
r.nd = m;
r.Wb = function(a, b, c, d, f, g) {
  la(a) ? this.jf = j : a && a.handleEvent && la(a.handleEvent) ? this.jf = m : e(Error("Invalid listener argument"));
  this.Db = a;
  this.Cf = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Dc = g;
  this.nd = m;
  this.key = ++Xb;
  this.nb = m
};
r.handleEvent = function(a) {
  return this.jf ? this.Db.call(this.Dc || this.src, a) : this.Db.handleEvent.call(this.Db, a)
};
var Yb = !H || Vb(), Zb = !H || Vb(), $b = H && !K("8");
!J || K("528");
I && K("1.9b") || H && K("8") || Ib && K("9.5") || J && K("528");
I && !K("8") || H && K("9");
var ac = {Bh:"click", Gh:"dblclick", ai:"mousedown", ei:"mouseup", di:"mouseover", ci:"mouseout", bi:"mousemove", qi:"selectstart", Vh:"keypress", Uh:"keydown", Wh:"keyup", zh:"blur", Oh:"focus", Hh:"deactivate", Ph:H ? "focusin" : "DOMFocusIn", Qh:H ? "focusout" : "DOMFocusOut", Ah:"change", pi:"select", ri:"submit", Th:"input", li:"propertychange", Lh:"dragstart", Ih:"dragenter", Kh:"dragover", Jh:"dragleave", Mh:"drop", vi:"touchstart", ui:"touchmove", ti:"touchend", si:"touchcancel", Dh:"contextmenu", 
Nh:"error", Sh:"help", Xh:"load", Yh:"losecapture", mi:"readystatechange", ni:"resize", oi:"scroll", xi:"unload", Rh:"hashchange", hi:"pagehide", ii:"pageshow", ki:"popstate", Eh:"copy", ji:"paste", Fh:"cut", wh:"beforecopy", xh:"beforecut", yh:"beforepaste", gi:"online", fi:"offline", $h:"message", Ch:"connect", wi:J ? "webkitTransitionEnd" : Ib ? "oTransitionEnd" : "transitionend"};
function L() {
}
L.prototype.ya = m;
L.prototype.g = function() {
  this.ya || (this.ya = j, this.c())
};
L.prototype.c = function() {
  this.og && bc.apply(k, this.og);
  if(this.wf) {
    for(;this.wf.length;) {
      this.wf.shift()()
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
r.Sc = j;
r.stopPropagation = function() {
  this.mb = j
};
r.preventDefault = function() {
  this.defaultPrevented = j;
  this.Sc = m
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
r.Zd = m;
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
  this.Zd = Lb ? a.metaKey : a.ctrlKey;
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
        if(i = n[g], i.Db == c && i.Dc == f) {
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
    a.addEventListener ? (a == t || !a.sd) && a.addEventListener(b, g, d) : a.attachEvent(b in lc ? lc[b] : lc[b] = "on" + b, g);
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
  ic[a].nd = j;
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
        if(a[g].Db == c && a[g].capture == d && a[g].Dc == f) {
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
  var c = b.src, d = b.type, f = b.Cf, g = b.capture;
  c.removeEventListener ? (c == t || !c.sd) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in lc ? lc[d] : lc[d] = "on" + d, f);
  c = ma(c);
  kc[c] && (f = kc[c], $a(f, b), 0 == f.length && delete kc[c]);
  b.nb = j;
  if(b = jc[d][g][c]) {
    b.uf = j, rc(d, g, c, b)
  }
  delete ic[a];
  return j
}
function rc(a, b, c, d) {
  if(!d.Kc && d.uf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].nb ? d[f].Cf.src = k : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.uf = m;
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
    a.Kc ? a.Kc++ : a.Kc = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var n = a[l];
        n && !n.nb && (g &= uc(n, f) !== m)
      }
    }finally {
      a.Kc--, rc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function uc(a, b) {
  a.nd && qc(a.key);
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
function wc(a) {
  this.u = new lb;
  a && this.hd(a)
}
function xc(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ma(a) : b.substr(0, 1) + a
}
r = wc.prototype;
r.R = function() {
  return this.u.R()
};
r.add = function(a) {
  this.u.set(xc(a), a)
};
r.hd = function(a) {
  for(var a = hb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
r.$d = function(a) {
  for(var a = hb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
r.remove = function(a) {
  return this.u.remove(xc(a))
};
r.clear = function() {
  this.u.clear()
};
r.Na = function() {
  return this.u.Na()
};
r.contains = function(a) {
  return this.u.ra(xc(a))
};
r.N = function() {
  return this.u.N()
};
r.L = function() {
  return new wc(this)
};
r.W = function(a) {
  var b;
  if(b = this.R() == gb(a)) {
    var c = a, a = gb(c);
    this.R() > a ? b = m : (!(c instanceof wc) && 5 < a && (c = new wc(c)), b = kb(this, function(a) {
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
function yc(a) {
  return zc(a || arguments.callee.caller, [])
}
function zc(a, b) {
  var c = [];
  if(Ya(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Ac(a) + "(");
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
            g = (g = Ac(g)) ? g : "[fn]";
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
        c.push(zc(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Ac(a) {
  if(Bc[a]) {
    return Bc[a]
  }
  a = "" + a;
  if(!Bc[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Bc[a] = b ? b[1] : "[Anonymous]"
  }
  return Bc[a]
}
var Bc = {};
function Cc(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
Cc.prototype.Zg = 0;
Cc.prototype.yd = k;
Cc.prototype.xd = k;
var Dc = 0;
Cc.prototype.reset = function(a, b, c, d, f) {
  this.Zg = "number" == typeof f ? f : Dc++;
  this.Tf = d || z();
  this.Cb = a;
  this.sf = b;
  this.Jg = c;
  delete this.yd;
  delete this.xd
};
Cc.prototype.Xc = aa("Cb");
function Ec(a) {
  this.Og = a
}
Ec.prototype.G = k;
Ec.prototype.Cb = k;
Ec.prototype.P = k;
Ec.prototype.Vb = k;
function Fc(a, b) {
  this.name = a;
  this.value = b
}
Fc.prototype.toString = o("name");
var Gc = new Fc("OFF", Infinity), Hc = new Fc("SHOUT", 1200), Ic = new Fc("SEVERE", 1E3), Jc = new Fc("WARNING", 900), Kc = new Fc("INFO", 800), Lc = new Fc("CONFIG", 700), Mc = new Fc("FINE", 500), Nc = new Fc("FINEST", 300), Oc = new Fc("ALL", 0);
r = Ec.prototype;
r.getParent = o("G");
r.Re = function() {
  this.P || (this.P = {});
  return this.P
};
r.Xc = aa("Cb");
function Pc(a) {
  if(a.Cb) {
    return a.Cb
  }
  if(a.G) {
    return Pc(a.G)
  }
  Sa("Root logger has no level set.");
  return k
}
r.log = function(a, b, c) {
  if(a.value >= Pc(this).value) {
    a = this.yg(a, b, c);
    b = "log:" + a.sf;
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
r.yg = function(a, b, c) {
  var d = new Cc(a, "" + b, this.Og);
  if(c) {
    d.yd = c;
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
          n = c.lineNumber || c.Ii || "Not available"
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
      f = "Message: " + Ha(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + Ha(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ha(yc(g) + "-> ")
    }catch(B) {
      f = "Exception trying to expose exception! You win, we lose. " + B
    }
    d.xd = f
  }
  return d
};
function Qc(a, b) {
  a.log(Ic, b, h)
}
function N(a, b, c) {
  a.log(Jc, b, c)
}
r.info = function(a, b) {
  this.log(Kc, a, b)
};
function O(a, b) {
  a.log(Mc, b, h)
}
function P(a, b) {
  a.log(Nc, b, h)
}
var Rc = {}, Sc = k;
function Tc() {
  Sc || (Sc = new Ec(""), Rc[""] = Sc, Sc.Xc(Lc))
}
function Uc() {
  Tc();
  return Sc
}
function Q(a) {
  Tc();
  var b;
  if(!(b = Rc[a])) {
    b = new Ec(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Q(a.substr(0, c));
    c.Re()[d] = b;
    b.G = c;
    Rc[a] = b
  }
  return b
}
;function Vc() {
}
A(Vc, L);
r = Vc.prototype;
r.sd = j;
r.Nc = k;
r.ge = aa("Nc");
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
      for(g = this;g;g = g.Nc) {
        f.push(g)
      }
      g = c[j];
      g.ja = g.d;
      for(var i = f.length - 1;!a.mb && 0 <= i && g.ja;i--) {
        a.currentTarget = f[i], d &= tc(g, f[i], a.type, j, a) && a.Sc != m
      }
    }
    if(m in c) {
      if(g = c[m], g.ja = g.d, b) {
        for(i = 0;!a.mb && i < f.length && g.ja;i++) {
          a.currentTarget = f[i], d &= tc(g, f[i], a.type, m, a) && a.Sc != m
        }
      }else {
        for(f = this;!a.mb && f && g.ja;f = f.Nc) {
          a.currentTarget = f, d &= tc(g, f, a.type, m, a) && a.Sc != m
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
  Vc.f.c.call(this);
  sc(this);
  this.Nc = k
};
function Wc(a, b) {
  this.Gc = a || 1;
  this.gc = b || Xc;
  this.ld = w(this.hh, this);
  this.Nd = z()
}
A(Wc, Vc);
Wc.prototype.enabled = m;
var Xc = t.window;
r = Wc.prototype;
r.oa = k;
r.hh = function() {
  if(this.enabled) {
    var a = z() - this.Nd;
    0 < a && a < 0.8 * this.Gc ? this.oa = this.gc.setTimeout(this.ld, this.Gc - a) : (this.dispatchEvent(Yc), this.enabled && (this.oa = this.gc.setTimeout(this.ld, this.Gc), this.Nd = z()))
  }
};
r.start = function() {
  this.enabled = j;
  this.oa || (this.oa = this.gc.setTimeout(this.ld, this.Gc), this.Nd = z())
};
r.stop = function() {
  this.enabled = m;
  this.oa && (this.gc.clearTimeout(this.oa), this.oa = k)
};
r.c = function() {
  Wc.f.c.call(this);
  this.stop();
  delete this.gc
};
var Yc = "tick";
vc++;
vc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Zc(a, b) {
  this.lc = [];
  this.Ae = a;
  this.Ie = b || k
}
r = Zc.prototype;
r.Ka = m;
r.Tb = m;
r.$b = 0;
r.le = m;
r.ig = m;
r.md = 0;
r.cancel = function(a) {
  if(this.Ka) {
    this.bc instanceof Zc && this.bc.cancel()
  }else {
    if(this.G) {
      var b = this.G;
      delete this.G;
      a ? b.cancel(a) : (b.md--, 0 >= b.md && b.cancel())
    }
    this.Ae ? this.Ae.call(this.Ie, this) : this.le = j;
    this.Ka || this.wb(new $c(this))
  }
};
r.De = function(a, b) {
  ad(this, a, b);
  this.$b--;
  0 == this.$b && this.Ka && bd(this)
};
function ad(a, b, c) {
  a.Ka = j;
  a.bc = c;
  a.Tb = !b;
  bd(a)
}
function cd(a) {
  a.Ka && (a.le || e(new dd(a)), a.le = m)
}
function ed(a, b) {
  cd(a);
  ad(a, j, b)
}
r.wb = function(a) {
  cd(this);
  ad(this, m, a)
};
function gd(a, b, c, d) {
  a.lc.push([b, c, d]);
  a.Ka && bd(a)
}
function hd(a) {
  return Wa(a.lc, function(a) {
    return la(a[1])
  })
}
function bd(a) {
  a.ue && (a.Ka && hd(a)) && (t.clearTimeout(a.ue), delete a.ue);
  a.G && (a.G.md--, delete a.G);
  for(var b = a.bc, c = m, d = m;a.lc.length && 0 == a.$b;) {
    var f = a.lc.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.Tb ? i : g) {
      try {
        var l = g.call(f || a.Ie, b);
        u(l) && (a.Tb = a.Tb && (l == b || l instanceof Error), a.bc = b = l);
        b instanceof Zc && (d = j, a.$b++)
      }catch(n) {
        b = n, a.Tb = j, hd(a) || (c = j)
      }
    }
  }
  a.bc = b;
  d && a.$b && (gd(b, w(a.De, a, j), w(a.De, a, m)), b.ig = j);
  c && (a.ue = t.setTimeout(function() {
    e(new id(b))
  }, 0))
}
function jd(a) {
  var b = new Zc;
  ed(b, a);
  return b
}
function kd(a) {
  var b = new Zc;
  b.wb(a);
  return b
}
function dd(a) {
  C.call(this);
  this.ng = a
}
A(dd, C);
dd.prototype.message = "Already called";
function $c(a) {
  C.call(this);
  this.ng = a
}
A($c, C);
$c.prototype.message = "Deferred was cancelled";
function id(a) {
  C.call(this);
  this.yi = a;
  this.message = "Unhandled Error in Deferred: " + (a.message || "[No message]")
}
A(id, C);
function ld(a) {
  this.H = a;
  this.rc = [];
  this.Me = [];
  this.hg = w(this.oh, this)
}
ld.prototype.oa = k;
ld.prototype.oh = function() {
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
      ed(a[b], k)
    }
  }
};
var md = new ld(t.window);
var nd;
function od(a) {
  a = a.className;
  return v(a) && a.match(/\S+/g) || []
}
function pd(a, b) {
  for(var c = od(a), d = db(arguments, 1), f = c.length + d.length, g = c, i = 0;i < d.length;i++) {
    Ya(g, d[i]) || g.push(d[i])
  }
  a.className = c.join(" ");
  return c.length == f
}
function qd(a, b) {
  var c = od(a), d = db(arguments, 1), f, g = d;
  f = Ua(c, function(a) {
    return!Ya(g, a)
  });
  a.className = f.join(" ");
  return f.length == c.length - d.length
}
;function R(a, b) {
  this.width = a;
  this.height = b
}
r = R.prototype;
r.L = function() {
  return new R(this.width, this.height)
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
var rd = !H || Vb(), sd = !I && !H || H && Vb() || I && K("1.9.1"), td = H && !K("9");
function ud() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function vd(a) {
  return a * Math.PI / 180
}
;function wd(a) {
  return a ? new xd(yd(a)) : nd || (nd = new xd)
}
function S(a) {
  return v(a) ? document.getElementById(a) : a
}
function zd(a, b, c, d) {
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
var Ad = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Bd(a, b, c) {
  return Cd(document, arguments)
}
function Cd(a, b) {
  var c = b[0], d = b[1];
  if(!rd && d && (d.name || d.type)) {
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
  d && (v(d) ? g.className = d : ga(d) ? pd.apply(k, [g].concat(d)) : ta(d, function(a, b) {
    "style" == b ? g.style.cssText = a : "class" == b ? g.className = a : "for" == b ? g.htmlFor = a : b in Ad ? g.setAttribute(Ad[b], a) : 0 == b.lastIndexOf("aria-", 0) ? g.setAttribute(b, a) : g[b] = a
  }));
  2 < b.length && Dd(a, g, b, 2);
  return g
}
function Dd(a, b, c, d) {
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
function Ed(a, b) {
  Dd(yd(a), a, arguments, 1)
}
function Fd(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function Gd(a, b) {
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
function yd(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function Hd(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      Fd(a), a.appendChild(yd(a).createTextNode(b))
    }
  }
}
var Id = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Jd = {IMG:" ", BR:"\n"};
function Kd(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ka(a) && 0 <= a && 32768 > a) : m
}
function Ld(a) {
  var b = [];
  Md(a, b, m);
  return b.join("")
}
function Md(a, b, c) {
  if(!(a.nodeName in Id)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Jd) {
        b.push(Jd[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Md(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function xd(a) {
  this.o = a || t.document || document
}
r = xd.prototype;
r.Ca = wd;
r.b = function(a) {
  return v(a) ? this.o.getElementById(a) : a
};
r.i = function(a, b, c) {
  return Cd(this.o, arguments)
};
r.createElement = function(a) {
  return this.o.createElement(a)
};
r.createTextNode = function(a) {
  return this.o.createTextNode(a)
};
r.Fe = function(a, b, c) {
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
r.append = Ed;
r.Re = function(a) {
  return sd && a.children != h ? a.children : Ua(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
};
r.contains = Gd;
function Nd(a, b) {
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
        a.push('<property id="', d, '">'), Nd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', Ha(c), '">'), Nd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function Od(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, f = arguments;
  d.push("<arguments>");
  for(var g = f.length, i = 1;i < g;i++) {
    Nd(d, f[i])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var Pd = m, Qd = "";
function Rd(a) {
  a = a.match(/[\d]+/g);
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var Sd = navigator.plugins["Shockwave Flash"];
  Sd && (Pd = j, Sd.description && (Qd = Rd(Sd.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (Pd = j, Qd = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var Td = navigator.mimeTypes["application/x-shockwave-flash"];
    (Pd = Td && Td.enabledPlugin) && (Qd = Rd(Td.enabledPlugin.description))
  }else {
    try {
      var Ud = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), Pd = j, Qd = Rd(Ud.GetVariable("$version"))
    }catch(Vd) {
      try {
        Ud = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), Pd = j, Qd = "6.0.21"
      }catch(Wd) {
        try {
          Ud = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Pd = j, Qd = Rd(Ud.GetVariable("$version"))
        }catch(Xd) {
        }
      }
    }
  }
}
var Yd = Qd;
function Zd(a, b, c) {
  a.style[Qa(c)] = b
}
function $d(a, b) {
  var c = yd(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) || "" : ""
}
function ae(a, b, c) {
  b instanceof R ? (c = b.height, b = b.width) : c == h && e(Error("missing height argument"));
  a.style.width = be(b);
  a.style.height = be(c)
}
function be(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
function ce(a) {
  if("none" != ($d(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style && a.style.display)) {
    return de(a)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = de(a);
  b.display = c;
  b.position = f;
  b.visibility = d;
  return a
}
function de(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = J && !b && !c;
  return(!u(b) || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), H && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new R(b.right - b.left, b.bottom - b.top)) : new R(b, c)
}
var ee = I ? "MozUserSelect" : J ? "WebkitUserSelect" : k;
function fe(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(ee) {
    if(b = b ? "none" : "", a.style[ee] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[ee] = b
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
;function ge(a) {
  this.gb = a;
  this.m = []
}
A(ge, L);
var he = [];
function T(a, b, c, d) {
  ga(c) || (he[0] = c, c = he);
  for(var f = 0;f < c.length;f++) {
    var g = M(b, c[f], d || a, m, a.gb || a);
    a.m.push(g)
  }
  return a
}
function ie(a, b, c, d, f, g) {
  if(ga(c)) {
    for(var i = 0;i < c.length;i++) {
      ie(a, b, c[i], d, f, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.gb || a;
      f = !!f;
      if(b = pc(b, c, f)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].nb && b[c].Db == d && b[c].capture == f && b[c].Dc == g) {
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
ge.prototype.$d = function() {
  E(this.m, qc);
  this.m.length = 0
};
ge.prototype.c = function() {
  ge.f.c.call(this);
  this.$d()
};
ge.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function je() {
}
ea(je);
je.prototype.Pg = 0;
je.La();
function ke(a) {
  this.M = a || wd();
  this.cc = le
}
A(ke, Vc);
ke.prototype.Gg = je.La();
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
r.S = k;
r.p = m;
r.e = k;
r.cc = k;
r.Ng = k;
r.G = k;
r.P = k;
r.mc = k;
r.ph = m;
function ne(a) {
  return a.S || (a.S = ":" + (a.Gg.Pg++).toString(36))
}
r.b = o("e");
function oe(a) {
  return a.xb || (a.xb = new ge(a))
}
r.getParent = o("G");
r.ge = function(a) {
  this.G && this.G != a && e(Error("Method not supported"));
  ke.f.ge.call(this, a)
};
r.Ca = o("M");
r.i = function() {
  this.e = this.M.createElement("div")
};
function pe(a, b) {
  a.p && e(Error("Component already rendered"));
  a.e || a.i();
  b ? b.insertBefore(a.e, k) : a.M.o.body.appendChild(a.e);
  (!a.G || a.G.p) && a.Q()
}
r.Q = function() {
  this.p = j;
  qe(this, function(a) {
    !a.p && a.b() && a.Q()
  })
};
r.cb = function() {
  qe(this, function(a) {
    a.p && a.cb()
  });
  this.xb && this.xb.$d();
  this.p = m
};
r.c = function() {
  ke.f.c.call(this);
  this.p && this.cb();
  this.xb && (this.xb.g(), delete this.xb);
  qe(this, function(a) {
    a.g()
  });
  if(!this.ph && this.e) {
    var a = this.e;
    a && a.parentNode && a.parentNode.removeChild(a)
  }
  this.G = this.Ng = this.e = this.mc = this.P = k
};
r.Sb = o("e");
r.Ib = function(a) {
  this.p && e(Error("Component already rendered"));
  this.cc = a
};
function qe(a, b) {
  a.P && E(a.P, b, h)
}
r.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : ne(a), d;
    this.mc && c ? (d = this.mc, d = (c in d ? d[c] : h) || k) : d = k;
    a = d;
    c && a && (d = this.mc, c in d && delete d[c], $a(this.P, a), b && (a.cb(), a.e && (c = a.e) && c.parentNode && c.parentNode.removeChild(c)), c = a, c == k && e(Error("Unable to set parent component")), c.G = k, ke.f.ge.call(c, k))
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function re(a, b) {
  ke.call(this, b);
  this.vg = a;
  this.wd = new ge(this);
  this.tc = new lb
}
A(re, ke);
r = re.prototype;
r.a = Q("goog.ui.media.FlashObject");
r.rh = "window";
r.ze = "#000000";
r.dg = "sameDomain";
r.$ = function(a, b) {
  this.rb = v(a) ? a : Math.round(a) + "px";
  this.Gd = v(b) ? b : Math.round(b) + "px";
  this.b() && ae(this.b() ? this.b().firstChild : k, this.rb, this.Gd);
  return this
};
r.Q = function() {
  re.f.Q.call(this);
  var a = this.b(), b;
  b = H ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = H ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = Fa(c, this.rh), d = this.tc.ta(), f = this.tc.N(), g = [], i = 0;i < d.length;i++) {
    g.push(encodeURIComponent("" + d[i]) + "=" + encodeURIComponent("" + f[i]))
  }
  b = Fa(b, ne(this), ne(this), "goog-ui-media-flash-object", Ha(this.vg), Ha(g.join("&")), this.ze, this.dg, c);
  a.innerHTML = b;
  this.rb && this.Gd && this.$(this.rb, this.Gd);
  T(this.wd, this.b(), ua(ac), dc)
};
r.i = function() {
  this.Gf != k && !(0 <= Oa(Yd, this.Gf)) && (N(this.a, "Required flash version not found:" + this.Gf), e(Error("Method not supported")));
  var a = this.Ca().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
r.c = function() {
  re.f.c.call(this);
  this.tc = k;
  this.wd.g();
  this.wd = k
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
  this.cd = a;
  this.Ra = b;
  this.Ya = a.Ya
}
A(ze, L);
r = ze.prototype;
r.kb = j;
r.pc = m;
r.a = Q("cw.net.FlashSocket");
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
      c = a.Ra, P(c.a, "onstillreceiving"), Be(c.J)
    }else {
      if("connect" == b) {
        a.Ra.onconnect()
      }else {
        "close" == b ? (a.kb = m, a.g()) : "ioerror" == b ? (a.kb = m, b = a.Ra, N(b.a, "onioerror: " + G(c)), De(b.J, m), a.g()) : "securityerror" == b ? (a.kb = m, b = a.Ra, N(b.a, "onsecurityerror: " + G(c)), De(b.J, m), a.g()) : e(Error("bad event: " + b))
      }
    }
  }
}
r.pd = function(a, b) {
  try {
    var c = this.Ya.CallFunction(Od("__FC_connect", this.S, a, b, "<int32/>\n"))
  }catch(d) {
    Qc(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message);
    this.pc = j;
    this.kb = m;
    this.g();
    return
  }
  '"OK"' != c && e(Error("__FC_connect failed? ret: " + c))
};
r.jc = function(a) {
  try {
    var b = this.Ya.CallFunction(Od("__FC_writeFrames", this.S, a))
  }catch(c) {
    Qc(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message);
    this.pc = j;
    this.kb = m;
    this.g();
    return
  }
  '"OK"' != b && ('"no such instance"' == b ? (N(this.a, "Flash no longer knows of " + this.S + "; disposing."), this.g()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
r.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.kb);
  ze.f.c.call(this);
  var a = this.Ya;
  delete this.Ya;
  if(this.kb) {
    try {
      var b = a.CallFunction(Od("__FC_close", this.S));
      this.a.info("disposeInternal: __FC_close ret: " + b)
    }catch(c) {
      Qc(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + c.message), this.pc = j
    }
  }
  if(this.pc) {
    a = this.Ra, N(a.a, "oncrash"), De(a.J, j)
  }else {
    this.Ra.onclose()
  }
  delete this.Ra;
  delete this.cd.yb[this.S]
};
function Ee(a, b) {
  this.v = a;
  this.Ya = b;
  this.yb = {};
  this.od = "__FST_" + se();
  t[this.od] = w(this.rg, this);
  var c = b.CallFunction(Od("__FC_setCallbackFunc", this.od));
  '"OK"' != c && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
A(Ee, L);
r = Ee.prototype;
r.a = Q("cw.net.FlashSocketTracker");
r.O = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  F(this.yb, a, b);
  a.push(">")
};
r.rd = function(a) {
  a = new ze(this, a);
  return this.yb[a.S] = a
};
r.pg = function(a, b, c, d) {
  var f = this.yb[a];
  f ? "frames" == b && d ? (Ae(f, "ioerror", "FlashConnector hadError while handling data."), f.g()) : Ae(f, b, c) : N(this.a, "Cannot dispatch because we have no instance: " + G([a, b, c, d]))
};
r.rg = function(a, b, c, d) {
  try {
    var f = this.v;
    f.rc.push([this.pg, this, [a, b, c, d]]);
    f.oa == k && (f.oa = f.H.setTimeout(f.hg, 0))
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
  t[this.od] = h
};
function Fe(a) {
  this.J = a;
  this.Nb = []
}
A(Fe, L);
r = Fe.prototype;
r.a = Q("cw.net.FlashSocketConduit");
r.jc = function(a) {
  this.Nb ? (P(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Nb.push.apply(this.Nb, a)) : (P(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.$c.jc(a))
};
r.pd = function(a, b) {
  this.$c.pd(a, b)
};
r.onconnect = function() {
  this.a.info("onconnect");
  Be(this.J);
  var a = this.Nb;
  this.Nb = k;
  a.length && (P(this.a, "onconnect: Writing " + a.length + " buffered frame(s)."), this.$c.jc(a))
};
r.onclose = function() {
  this.a.info("onclose");
  De(this.J, m)
};
r.c = function() {
  this.a.info("in disposeInternal.");
  Fe.f.c.call(this);
  this.$c.g();
  delete this.J
};
var Ge = [];
function He() {
  var a = new Zc;
  Ge.push(a);
  return a
}
function Ie(a) {
  var b = Ge;
  Ge = [];
  E(b, function(b) {
    ed(b, a)
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
var Ke = {bg:p("<cw.eq.Wildcard>")};
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
          if(a.ag == zb && b.ag == zb) {
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
  this.Wg = a;
  this.Pc = b
}
U.prototype.W = function(a, b) {
  return ja(a) && this.constructor == a.constructor && Me(this.Pc, a.Pc, b)
};
U.prototype.O = function(a, b) {
  a.push("new ", this.Wg, "(");
  for(var c = "", d = 0;d < this.Pc.length;d++) {
    a.push(c), c = ", ", F(this.Pc[d], a, b)
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
  return[a.Fa, a.Bf, a.bf, a.Ff, a.fc, a.oe, a.tf, a.rf, a.Qd, a.pf, a.Xf, a.Sf, a.Ua, a.Jc]
}
Oe.prototype.ca = Ne;
Oe.prototype.ma = function(a) {
  var b = {};
  b.tnum = this.Fa;
  b.ver = this.Bf;
  b.format = this.bf;
  b["new"] = this.Ff;
  b.id = this.fc;
  b.ming = this.oe;
  b.pad = this.tf;
  b.maxb = this.rf;
  u(this.Qd) && (b.maxt = this.Qd);
  b.maxia = this.pf;
  b.tcpack = this.Xf;
  b.eeds = this.Sf;
  b.sack = this.Ua instanceof tb ? te((new Qe(this.Ua)).ca()) : this.Ua;
  b.seenack = this.Jc instanceof tb ? te((new Qe(this.Jc)).ca()) : this.Jc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(ya(b), "H")
};
function Re(a) {
  U.call(this, "StringFrame", [a]);
  this.qe = a
}
A(Re, U);
Re.prototype.ca = Ne;
Re.prototype.ma = function(a) {
  a.push(this.qe, " ")
};
function Se(a) {
  U.call(this, "CommentFrame", [a]);
  this.jg = a
}
A(Se, U);
Se.prototype.ca = Ne;
Se.prototype.ma = function(a) {
  a.push(this.jg, "^")
};
function Te(a) {
  U.call(this, "SeqNumFrame", [a]);
  this.Mf = a
}
A(Te, U);
Te.prototype.ca = Ne;
Te.prototype.ma = function(a) {
  a.push("" + this.Mf, "N")
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
  this.lf = a
}
A(Ve, U);
Ve.prototype.ca = Ne;
Ve.prototype.ma = function(a) {
  var b = this.lf;
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
  this.Df = a;
  this.ye = b
}
A(Ye, U);
Ye.prototype.ca = Ne;
Ye.prototype.ma = function(a) {
  a.push(this.Df, "|", "" + Number(this.ye), "!")
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
r.Hg = m;
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
  b instanceof kf ? (a.Z = b, a.Z.fe(a.da)) : (c || (b = lf(b, qf)), a.Z = new kf(b, 0, a.da))
}
function ff(a) {
  a.Hg && e(Error("Tried to modify a read-only Uri"))
}
r.fe = function(a) {
  this.da = a;
  this.Z && this.Z.fe(a);
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
r.fe = function(a) {
  a && !this.da && (tf(this), this.V = k, jb(this.s, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.V = k, this.s.set(uf(this, d), bb(a)), this.d += a.length))
  }, this));
  this.da = a
};
function vf(a, b, c, d) {
  this.contentWindow = a;
  this.sc = b;
  this.pe = c;
  this.wg = d
}
vf.prototype.O = function(a, b) {
  a.push("<XDRFrame frameId=");
  F(this.wg, a, b);
  a.push(", expandedUrl=");
  F(this.sc, a, b);
  a.push(", streams=");
  F(this.pe, a, b);
  a.push(">")
};
function wf() {
  this.frames = [];
  this.Od = new lb
}
wf.prototype.a = Q("cw.net.XDRTracker");
function xf(a, b) {
  for(var c = yf, d = 0;d < c.frames.length;d++) {
    var f = c.frames[d], g;
    if(g = 0 == f.pe.length) {
      g = f.sc;
      var i = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + i + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + G(b) + " existing frame " + G(f)), jd(f)
    }
  }
  d = se() + se();
  f = a.replace(/%random%/g, function() {
    return"ml" + Math.floor(ud()) + ("" + Math.floor(ud()))
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
  g == i ? (c.a.info("No need to make a real XDRFrame for " + G(b)), c = jd(new vf(t, f, [b], k))) : ((g = S("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new Zc, c.Od.set(d, [i, f, b]), c.a.info("Creating new XDRFrame " + G(d) + "for " + G(b)), c = Bd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:f + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = i);
  return c
}
wf.prototype.uh = function(a) {
  var b = this.Od.get(a);
  b || e(Error("Unknown frameId " + G(a)));
  this.Od.remove(b);
  var c = b[0], a = new vf(S("minerva-xdrframe-" + a).contentWindow || (S("minerva-xdrframe-" + a).contentDocument || S("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (S("minerva-xdrframe-" + a).contentDocument || S("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  ed(c, a)
};
var yf = new wf;
t.__XHRTracker_xdrFrameLoaded = w(yf.uh, yf);
var zf;
zf = m;
var Af = Fb();
Af && (-1 != Af.indexOf("Firefox") || -1 != Af.indexOf("Camino") || -1 != Af.indexOf("iPhone") || -1 != Af.indexOf("iPod") || -1 != Af.indexOf("iPad") || -1 != Af.indexOf("Android") || -1 != Af.indexOf("Chrome") && (zf = j));
var Bf = zf;
function Cf(a, b, c, d, f, g) {
  Zc.call(this, f, g);
  this.of = a;
  this.td = [];
  this.Oe = !!b;
  this.ug = !!c;
  this.kg = !!d;
  for(b = 0;b < a.length;b++) {
    gd(a[b], w(this.Xe, this, b, j), w(this.Xe, this, b, m))
  }
  0 == a.length && !this.Oe && ed(this, this.td)
}
A(Cf, Zc);
Cf.prototype.vf = 0;
Cf.prototype.Xe = function(a, b, c) {
  this.vf++;
  this.td[a] = [b, c];
  this.Ka || (this.Oe && b ? ed(this, [a, c]) : this.ug && !b ? this.wb(c) : this.vf == this.of.length && ed(this, this.td));
  this.kg && !b && (c = k);
  return c
};
Cf.prototype.wb = function(a) {
  Cf.f.wb.call(this, a);
  E(this.of, function(a) {
    a.cancel()
  })
};
function Df(a, b) {
  this.sh = a;
  this.qf = b
}
Df.prototype.Ld = 0;
Df.prototype.Mc = 0;
Df.prototype.zd = m;
function Ef(a) {
  var b = [];
  if(a.zd) {
    return[b, 2]
  }
  var c = a.Ld, d = a.sh.responseText;
  for(a.Ld = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var f = d.substr(a.Mc, c - a.Mc), f = f.replace(/\r$/, "");
    if(f.length > a.qf) {
      return a.zd = j, [b, 2]
    }
    b.push(f);
    a.Mc = c += 1
  }
  return a.Ld - a.Mc - 1 > a.qf ? (a.zd = j, [b, 2]) : [b, 1]
}
;function Ff(a, b, c) {
  this.J = b;
  this.na = a;
  this.qd = c
}
A(Ff, L);
r = Ff.prototype;
r.a = Q("cw.net.XHRMaster");
r.Sa = -1;
r.Pd = function(a, b, c) {
  this.qd.__XHRSlave_makeRequest(this.na, a, b, c)
};
r.Ma = o("Sa");
r.Sd = function(a, b) {
  1 != b && Qc(this.a, G(this.na) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Be(this.J);
  Ce(this.J, a)
};
r.Td = function(a) {
  O(this.a, "ongotheaders_: " + G(a));
  var b = k;
  "Content-Length" in a && (b = we(a["Content-Length"]));
  a = this.J;
  O(a.a, a.r() + " got Content-Length: " + b);
  a.xa == Gf && (b == k && (N(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Hf(a, 2E3 + 1E3 * (b / 3072)))
};
r.Ud = function(a) {
  1 != a && O(this.a, this.J.r() + "'s XHR's readyState is " + a);
  this.Sa = a;
  2 <= this.Sa && Be(this.J)
};
r.Rd = function() {
  this.J.g()
};
r.c = function() {
  Ff.f.c.call(this);
  delete If.Da[this.na];
  this.qd.__XHRSlave_dispose(this.na);
  delete this.qd
};
function Jf() {
  this.Da = {}
}
A(Jf, L);
r = Jf.prototype;
r.a = Q("cw.net.XHRMasterTracker");
r.rd = function(a, b) {
  var c = "_" + se(), d = new Ff(c, a, b);
  return this.Da[c] = d
};
r.Sd = function(a, b, c) {
  if(I) {
    for(var d = [], f = 0, g = b.length;f < g;f++) {
      d[f] = b[f]
    }
    b = d
  }else {
    b = ab(b)
  }
  (d = this.Da[a]) ? d.Sd(b, c) : Qc(this.a, "onframes_: no master for " + G(a))
};
r.Td = function(a, b) {
  var c = this.Da[a];
  c ? c.Td(b) : Qc(this.a, "ongotheaders_: no master for " + G(a))
};
r.Ud = function(a, b) {
  var c = this.Da[a];
  c ? c.Ud(b) : Qc(this.a, "onreadystatechange_: no master for " + G(a))
};
r.Rd = function(a) {
  var b = this.Da[a];
  b ? (delete this.Da[b.na], b.Rd()) : Qc(this.a, "oncomplete_: no master for " + G(a))
};
r.c = function() {
  Jf.f.c.call(this);
  for(var a = ua(this.Da);a.length;) {
    a.pop().g()
  }
  delete this.Da
};
var If = new Jf;
t.__XHRMaster_onframes = w(If.Sd, If);
t.__XHRMaster_oncomplete = w(If.Rd, If);
t.__XHRMaster_ongotheaders = w(If.Td, If);
t.__XHRMaster_onreadystatechange = w(If.Ud, If);
function Kf(a, b, c) {
  this.va = a;
  this.host = b;
  this.port = c
}
function Lf(a, b, c) {
  this.host = a;
  this.port = b;
  this.kh = c
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
  this.Af = b;
  this.Wa = c;
  this.Lf = d;
  (!(0 == this.va.indexOf("http://") || 0 == this.va.indexOf("https://")) || !(0 == this.Wa.indexOf("http://") || 0 == this.Wa.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Af.location.href;
  cf(this.va, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Lf.location.href;
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
Pf.prototype.Se = p(1);
function Qf(a) {
  t.setTimeout(function() {
    u(a.message) && a.stack && (a.message += "\n" + a.stack);
    e(a)
  }, 0)
}
function Rf(a) {
  this.fh = a
}
Rf.prototype.O = function(a, b) {
  a.push("<UserContext for ");
  F(this.fh, a, b);
  a.push(">")
};
Rf.prototype.toString = function() {
  return G(this)
};
function Sf(a, b, c, d) {
  U.call(this, "TransportInfo", [a, b, c, d]);
  this.Fa = a;
  this.Hi = b;
  this.Oi = c;
  this.Pi = d
}
A(Sf, U);
function Tf(a, b, c) {
  this.A = a;
  this.gh = b ? b : new Pf;
  this.v = c ? c : md;
  this.hc = new wc;
  this.fc = se() + se();
  this.wa = new ub;
  this.Id = new wb;
  this.ic = k;
  this.ed = [];
  this.Kb = new Rf(this);
  this.gg = w(this.nh, this);
  J && (this.ic = nc(t, "load", this.Yg, m, this))
}
A(Tf, L);
r = Tf.prototype;
r.a = Q("cw.net.ClientStream");
r.mf = new tb(-1, []);
r.nf = new tb(-1, []);
r.Mg = 50;
r.Lg = 1048576;
r.Wd = k;
r.Vd = k;
r.Xd = k;
r.Yd = k;
r.onreset = k;
r.yf = k;
r.Gb = k;
r.me = m;
r.ae = m;
r.h = "1_UNSTARTED";
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
    var b = 0 != a.wa.w.R(), c = xb(a.Id), d = !c.W(a.nf) && !(a.j && c.W(a.j.Bb) || a.z && c.W(a.z.Bb)), f = Uf(a);
    if((b = b && f < a.wa.bb) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.j.$a ? (P(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.j, c != d.Bb && (!d.Ea && !d.D.length && Xf(d), d.D.push(new Qe(c)), d.Bb = c)), b && Yf(a.j, a.wa, f + 1), a.j.Ba()) : a.z == k ? a.me ? (P(a.a, "tryToSend_: creating secondary to send " + g), a.z = Zf(a, m, j), a.z && (b && Yf(a.z, a.wa, f + 1), a.z.Ba())) : (P(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.ae = j) : P(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
function Wf(a) {
  a.Gb != k && (a.v.H.clearTimeout(a.Gb), a.Gb = k)
}
r.nh = function() {
  this.Gb = k;
  Vf(this)
};
function $f(a) {
  a.Gb == k && (a.Gb = a.v.H.setTimeout(a.gg, 6))
}
r.Yg = function() {
  this.ic = k;
  if(this.j && this.j.zb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.j;
    a.gd = j;
    a.g()
  }
  this.z && this.z.zb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.z, a.gd = j, a.g())
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
  a.A instanceof Nf ? d = 1 == a.gh.Se() ? Gf : bg : a.A instanceof Lf ? d = cg : e(Error("Don't support endpoint " + G(a.A)));
  a.se += 1;
  b = new dg(a.v, a, a.se, d, a.A, b);
  P(a.a, "Created: " + b.r());
  if(c) {
    if(a.Xd) {
      c = new Sf(b.Fa, b.Ha, b.Ta, b.$a);
      try {
        a.Xd.call(a.Kb, c)
      }catch(f) {
        N(a.a, "ontransportcreated raised uncaught exception", f), Qf(f)
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
  P(a.a, "Created: " + d.r() + ", delay=" + b + ", times=" + c);
  a.hc.add(d);
  return d
}
function hg(a, b) {
  a.hc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  O(a.a, "Offline: " + b.r());
  var c = "4_RESETTING" == a.h && b.$f;
  if(b instanceof dg && !c) {
    if(a.Yd) {
      var d = new Sf(b.Fa, b.Ha, b.Ta, b.$a);
      try {
        a.Yd.call(a.Kb, d)
      }catch(f) {
        N(a.a, "ontransportdestroyed raised uncaught exception", f), Qf(f)
      }
    }
    if(eg(a)) {
      return
    }
  }
  a.ne = b.Qa ? a.ne + b.Qa : 0;
  1 <= a.ne && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), ig(a, "stream penalty reached limit", m), a.g());
  if("3_STARTED" < a.h) {
    c ? (O(a.a, "Disposing because resettingTransport_ is done."), a.g()) : O(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    c = b instanceof gg;
    if(!c && b.gd) {
      var g = J ? Bf ? [0, 1] : [9, 20] : [0, 0], c = g[0], d = g[1];
      P(a.a, "getDelayForNextTransport_: " + G({delay:c, times:d}))
    }else {
      if(d = b.Ce(), b == a.j ? d ? g = ++a.zf : c || (g = a.zf = 0) : d ? g = ++a.Kf : c || (g = a.Kf = 0), c || !g) {
        d = c = 0, P(a.a, "getDelayForNextTransport_: " + G({count:g, delay:c, times:d}))
      }else {
        var i = 2E3 * Math.min(g, 3), l = Math.floor(4E3 * Math.random()) - 2E3, n = Math.max(0, b.Wf - b.te), d = (c = Math.max(0, i + l - n)) ? 1 : 0;
        P(a.a, "getDelayForNextTransport_: " + G({count:g, base:i, variance:l, oldDuration:n, delay:c, times:d}))
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
      N(a.a, "onreset raised uncaught exception", d), Qf(d)
    }
  }
}
r.reset = function(a) {
  "3_STARTED" < this.h && e(Error("reset: Can't send reset in state " + this.h));
  Wf(this);
  0 != this.wa.w.R() && N(this.a, "reset: strings in send queue will never be sent: " + G(this.wa));
  this.h = "4_RESETTING";
  this.j && this.j.$a ? (this.a.info("reset: Sending ResetFrame over existing primary."), jg(this.j, a), this.j.Ba()) : (this.j && (O(this.a, "reset: Disposing primary before sending ResetFrame."), this.j.g()), this.z && (O(this.a, "reset: Disposing secondary before sending ResetFrame."), this.z.g()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.ac = Zf(this, m, m), jg(this.ac, a), this.ac.Ba());
  ig(this, a, j)
};
function eg(a) {
  return"4_RESETTING" == a.h || a.ya
}
r.Le = function(a) {
  Qc(this.a, "Failed to start " + G(this) + "; error was " + G(a.message));
  this.g();
  return k
};
r.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  "1_UNSTARTED" != this.h && e(Error("ClientStream.start: " + G(this) + " already started"));
  this.Vd && this.Vd(this);
  this.h = "2_WAITING_RESOURCES";
  if(this.A instanceof Mf) {
    var a = xf(this.A.va, this), b = xf(this.A.Wa, this), a = new Cf([a, b], m, j);
    gd(a, function(a) {
      return Va(a, function(a) {
        return a[1]
      })
    }, k, h);
    b = w(this.tg, this);
    gd(a, b, k, h);
    b = w(this.Le, this);
    gd(a, k, b, h)
  }else {
    if(this.A instanceof Kf) {
      if(sb) {
        this.Ne()
      }else {
        a = this.v;
        b = this.A.va;
        if(Ge.length) {
          a = He()
        }else {
          b = new re(b + "FlashConnector.swf?cb=4bdfc178fc0e508c0cd5efc3fdb09920");
          b.ze = "#777777";
          b.$(300, 30);
          var c = S("minerva-elements");
          c || e(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
          var d = S("minerva-elements-FlashConnectorSwf");
          d || (d = Bd("div", {id:"minerva-elements-FlashConnectorSwf"}), c.appendChild(d));
          var f = a.H, g;
          var a = d, i, l = function() {
            i && delete t.__loadFlashObject_callbacks[i]
          };
          if(I && !K("1.8.1.20")) {
            g = kd(new ye("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
          }else {
            if(0 <= Oa(Yd, "9")) {
              var n;
              i = "_" + se();
              var q = new Zc(l);
              t.__loadFlashObject_callbacks[i] = function() {
                f.setTimeout(function() {
                  l();
                  ed(q, S(n))
                }, 0)
              };
              b.tc.set("onloadcallback", '__loadFlashObject_callbacks["' + i + '"]()');
              n = ne(b);
              pe(b, a);
              g = q
            }else {
              g = kd(new ye("Need Flash Player 9+; had " + (Yd ? Yd : "none")))
            }
          }
          var x = f.setTimeout(function() {
            g.cancel()
          }, 8E3), a = function(a) {
            f.clearTimeout(x);
            return a
          };
          gd(g, a, a, h);
          rb = g;
          a = He();
          gd(rb, Ie, Je)
        }
        var s = this;
        gd(a, function(a) {
          sb || (sb = new Ee(s.v, a));
          return k
        }, k, h);
        b = w(this.Ne, this);
        gd(a, b, k, h);
        b = w(this.Le, this);
        gd(a, k, b, h)
      }
    }else {
      kg(this)
    }
  }
};
r.tg = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].sc, f = a[1].sc;
  this.ed.push(a[0]);
  this.ed.push(a[1]);
  this.A = new Nf(d, b, f, c);
  kg(this)
};
r.Ne = function() {
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
  for(a = 0;a < this.ed.length;a++) {
    $a(this.ed[a].pe, this)
  }
  J && this.ic && (qc(this.ic), this.ic = k);
  this.yf && this.yf.call(this.Kb);
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
  this.fg = w(this.ih, this)
}
A(dg, L);
r = dg.prototype;
r.a = Q("cw.net.ClientTransport");
r.q = k;
r.te = k;
r.Wf = k;
r.Qc = k;
r.Ea = m;
r.ad = m;
r.Bb = k;
r.uc = 0;
r.Eb = -1;
r.Oc = -1;
r.$f = m;
r.gd = m;
r.Qa = 0;
r.Ub = m;
r.O = function(a) {
  a.push("<ClientTransport #", "" + this.Fa, ", becomePrimary=", "" + this.Ha, ">")
};
r.r = function() {
  return(this.Ha ? "Prim. T#" : "Sec. T#") + this.Fa
};
r.Ce = function() {
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
    var c = a.C, d = !a.Ta, f, g = c.Id;
    f = c.Mg;
    for(var i = c.Lg, l = [], n = m, q = 0, x = b.length;q < x;q++) {
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
        if(c.Wd) {
          try {
            c.Wd.call(c.Kb, l)
          }catch(fd) {
            N(c.a, "onstring raised uncaught exception", fd), Qf(fd)
          }
        }
        if(eg(c)) {
          break a
        }
      }
    }
    d || $f(c);
    !eg(c) && f && (Qc(a.a, a.r() + "'s peer caused rwin overflow."), a.g())
  }
}
function mg(a, b, c) {
  try {
    var d = af(b);
    a.uc += 1;
    O(a.a, a.r() + " RECV " + G(d));
    var f;
    1 == a.uc && !d.W(Of) && a.zb() ? (N(a.a, a.r() + " is closing soon because got bad preamble: " + G(d)), f = j) : f = m;
    if(f) {
      return j
    }
    if(d instanceof Re) {
      if(!/^([ -~]*)$/.test(d.qe)) {
        return a.Ub = j
      }
      a.Oc += 1;
      c.push([a.Oc, d.qe])
    }else {
      if(d instanceof Qe) {
        var g = a.C, i = d.Ua;
        g.mf = i;
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
          return N(a.a, a.r() + " is closing soon because got bad SackFrame"), a.Ub = j
        }
      }else {
        if(d instanceof Te) {
          a.Oc = d.Mf - 1
        }else {
          if(d instanceof Ve) {
            a.C.nf = d.lf
          }else {
            if(d instanceof Xe) {
              return P(a.a, a.r() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof $e) {
              return a.Ub = j, "stream_attach_failure" == d.reason ? a.Qa += 1 : "acked_unsent_strings" == d.reason && (a.Qa += 0.5), P(a.a, a.r() + " is closing soon because got " + G(d)), j
            }
            if(!(d instanceof Se)) {
              if(d instanceof We) {
                var B = a.C, fd = !a.Ta;
                P(B.a, "Stream is now confirmed to exist at server.");
                B.me = j;
                B.ae && !fd && (B.ae = m, Vf(B))
              }else {
                c.length && (lg(a, c), Za(c));
                if(d instanceof Ye) {
                  var Kg = a.C;
                  ig(Kg, d.Df, d.ye);
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
    return Lg instanceof V || e(Lg), N(a.a, a.r() + " is closing soon because got InvalidFrame: " + G(b)), a.Ub = j
  }
  return m
}
function Ce(a, b) {
  a.ad = j;
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
    a.ad = m;
    a.D.length && a.Ba();
    c && (P(a.a, a.r() + " closeSoon is true.  Frames were: " + G(b)), a.g())
  }finally {
    a.ad = m
  }
}
r.ih = function() {
  N(this.a, this.r() + " timed out due to lack of connection or no data being received.");
  this.g()
};
function ng(a) {
  a.Qc != k && (a.v.H.clearTimeout(a.Qc), a.Qc = k)
}
function Hf(a, b) {
  ng(a);
  b = Math.round(b);
  a.Qc = a.v.H.setTimeout(a.fg, b);
  O(a.a, a.r() + "'s receive timeout set to " + b + " ms.")
}
function Be(a) {
  a.xa != Gf && (a.xa == cg || a.xa == bg ? Hf(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.xa)))
}
function Xf(a) {
  var b = new Oe;
  b.Fa = a.Fa;
  b.Bf = 2;
  b.bf = 2;
  a.C.me || (b.Ff = j);
  b.fc = a.C.fc;
  b.oe = a.Ta;
  b.oe && (b.tf = 4096);
  b.rf = 3E5;
  b.pf = a.Ta ? Math.floor(10) : 0;
  b.Xf = m;
  a.Ha && (b.Sf = k, b.Qd = Math.floor((a.Ta ? 358E4 : 25E3) / 1E3));
  b.Ua = xb(a.C.Id);
  b.Jc = a.C.mf;
  a.D.push(b);
  a.Bb = b.Ua
}
function De(a, b) {
  b && (a.Qa += 0.5);
  a.g()
}
r.Ba = function() {
  this.Ea && !this.$a && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.ad) {
    P(this.a, this.r() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ea;
    this.Ea = j;
    !a && !this.D.length && Xf(this);
    for(a = 0;a < this.D.length;a++) {
      O(this.a, this.r() + " SEND " + G(this.D[a]))
    }
    if(this.zb()) {
      for(var a = [], b = 0, c = this.D.length;b < c;b++) {
        this.D[b].ma(a), a.push("\n")
      }
      this.D = [];
      a = a.join("");
      b = this.Ha ? this.A.va : this.A.Wa;
      this.q = If.rd(this, this.Ha ? this.A.Af : this.A.Lf);
      this.te = this.v.H === Xc ? z() : this.v.H.getTime();
      this.q.Pd(b, "POST", a);
      Hf(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Ta ? 0 : this.Ha ? 25E3 : 0))
    }else {
      if(this.xa == cg) {
        a = [];
        b = 0;
        for(c = this.D.length;b < c;b++) {
          a.push(this.D[b].ca())
        }
        this.D = [];
        this.q ? this.q.jc(a) : (b = this.A, this.q = new Fe(this), c = b.kh.rd(this.q), this.q.$c = c, this.te = this.v.H === Xc ? z() : this.v.H.getTime(), this.q.pd(b.host, b.port), this.q.ya || (this.q.jc(a), this.q.ya || Hf(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.xa))
      }
    }
  }
};
function Yf(a, b, c) {
  !a.Ea && !a.D.length && Xf(a);
  for(var c = Math.max(c, a.Eb + 1), b = b.Te(c), c = 0, d = b.length;c < d;c++) {
    var f = b[c], g = f[0], f = f[1];
    (-1 == a.Eb || a.Eb + 1 != g) && a.D.push(new Te(g));
    a.D.push(new Re(f));
    a.Eb = g
  }
}
r.c = function() {
  this.a.info(this.r() + " in disposeInternal.");
  dg.f.c.call(this);
  this.Wf = this.v.H === Xc ? z() : this.v.H.getTime();
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
  a.$f = j
}
function gg(a, b, c, d) {
  this.v = a;
  this.C = b;
  this.Ke = c;
  this.Ee = d
}
A(gg, L);
r = gg.prototype;
r.Ea = m;
r.$a = m;
r.yc = k;
r.Bb = k;
r.a = Q("cw.net.DoNothingTransport");
function og(a) {
  a.yc = a.v.H.setTimeout(function() {
    a.yc = k;
    a.Ee--;
    a.Ee ? og(a) : a.g()
  }, a.Ke)
}
r.Ba = function() {
  this.Ea && !this.$a && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ea = j;
  og(this)
};
r.O = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.Ke, ">")
};
r.zb = p(m);
r.r = p("Wast. T");
r.Ce = p(m);
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
  this.ce(a, b);
  return b
};
r.Sb = function(a) {
  return a
};
r.Rb = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(H && !K("7")) {
      var d = sg(od(a), b);
      d.push(b);
      ra(c ? pd : qd, a).apply(k, d)
    }else {
      c ? pd(a, b) : qd(a, b)
    }
  }
};
r.ef = function(a) {
  a.cc == k && (a.cc = "rtl" == ($d(a.p ? a.e : a.M.o.body, "direction") || ((a.p ? a.e : a.M.o.body).currentStyle ? (a.p ? a.e : a.M.o.body).currentStyle.direction : k) || (a.p ? a.e : a.M.o.body).style && (a.p ? a.e : a.M.o.body).style.direction));
  a.cc && this.Ib(a.b(), j);
  a.isEnabled() && this.Wc(a, a.Lb)
};
r.ce = function(a, b) {
  a.isEnabled() || this.aa(b, 1, j);
  a.h & 8 && this.aa(b, 8, j);
  a.T & 16 && this.aa(b, 16, !!(a.h & 16));
  a.T & 64 && this.aa(b, 64, !!(a.h & 64))
};
r.Tc = function(a, b) {
  fe(a, !b, !H && !Ib)
};
r.Ib = function(a, b) {
  this.Rb(a, this.t() + "-rtl", b)
};
r.hf = function(a) {
  var b;
  return a.T & 32 && (b = a.fb()) ? Kd(b) : m
};
r.Wc = function(a, b) {
  var c;
  if(a.T & 32 && (c = a.fb())) {
    if(!b && a.h & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.h & 32 && a.We()
    }
    Kd(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
r.ke = function(a, b) {
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
r.Uc = function(a, b) {
  var c = this.Sb(a);
  if(c && (Fd(c), b)) {
    if(v(b)) {
      Hd(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = yd(c);
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
  if(!a.Be) {
    var c = a.t();
    a.Be = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Be[b]
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
A(zg, Vc);
r = zg.prototype;
r.e = k;
r.Hc = k;
r.Kd = k;
r.Ic = k;
r.Pa = -1;
r.Oa = -1;
var Bg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Cg = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Dg = H || 
J && K("525");
r = zg.prototype;
r.Cg = function(a) {
  if(J && (17 == this.Pa && !a.ctrlKey || 18 == this.Pa && !a.altKey)) {
    this.Oa = this.Pa = -1
  }
  Dg && !wg(a.keyCode, this.Pa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Oa = I ? yg(a.keyCode) : a.keyCode
};
r.Dg = function() {
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
  a.Ic && a.detach();
  a.e = b;
  a.Hc = M(a.e, "keypress", a, c);
  a.Kd = M(a.e, "keydown", a.Cg, c, a);
  a.Ic = M(a.e, "keyup", a.Dg, c, a)
}
r.detach = function() {
  this.Hc && (qc(this.Hc), qc(this.Kd), qc(this.Ic), this.Ic = this.Kd = this.Hc = k);
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
  ke.call(this, c);
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
  this.Vc(a)
}
A(W, ke);
r = W.prototype;
r.ba = k;
r.h = 0;
r.T = 39;
r.kd = 255;
r.eh = 0;
r.Lb = j;
r.sa = k;
r.Fd = j;
r.jd = m;
r.Sg = k;
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
  var b = this.Sg || this.l.vc();
  b && a.setAttribute("role", b);
  this.jd || this.l.Tc(a, m);
  this.Lb || this.l.ke(a, m)
};
r.Sb = function() {
  return this.l.Sb(this.b())
};
r.Q = function() {
  W.f.Q.call(this);
  this.l.ef(this);
  if(this.T & -2 && (this.Fd && Gg(this, j), this.T & 32)) {
    var a = this.fb();
    if(a) {
      var b = this.Ab || (this.Ab = new zg);
      Ag(b, a);
      T(T(T(oe(this), b, "key", this.Ze), a, "focus", this.Ag), a, "blur", this.We)
    }
  }
};
function Gg(a, b) {
  var c = oe(a), d = a.b();
  b ? (T(T(T(T(c, d, "mouseover", a.Cc), d, "mousedown", a.Ac), d, "mouseup", a.$e), d, "mouseout", a.Bc), a.zc != da && T(c, d, "contextmenu", a.zc), H && T(c, d, "dblclick", a.Ye)) : (ie(ie(ie(ie(c, d, "mouseover", a.Cc), d, "mousedown", a.Ac), d, "mouseup", a.$e), d, "mouseout", a.Bc), a.zc != da && ie(c, d, "contextmenu", a.zc), H && ie(c, d, "dblclick", a.Ye))
}
r.cb = function() {
  W.f.cb.call(this);
  this.Ab && this.Ab.detach();
  this.Lb && this.isEnabled() && this.l.Wc(this, m)
};
r.c = function() {
  W.f.c.call(this);
  this.Ab && (this.Ab.g(), delete this.Ab);
  delete this.l;
  this.sa = this.ba = k
};
r.Uc = function(a) {
  this.l.Uc(this.b(), a);
  this.Vc(a)
};
r.Vc = aa("ba");
r.Qe = function() {
  var a = this.ba;
  if(!a) {
    return""
  }
  if(!v(a)) {
    if(ga(a)) {
      a = Va(a, Ld).join("")
    }else {
      if(td && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Md(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      td || (a = a.replace(/ +/g, " "));
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
r.Tc = function(a) {
  this.jd = a;
  var b = this.b();
  b && this.l.Tc(b, a)
};
r.ke = function(a, b) {
  if(b || this.Lb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.l.ke(c, a);
    this.isEnabled() && this.l.Wc(this, a);
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
r.Jd = function() {
  return!!(this.h & 4)
};
r.setActive = function(a) {
  Ig(this, 4, a) && this.ka(4, a)
};
r.he = function(a) {
  Ig(this, 8, a) && this.ka(8, a)
};
r.ka = function(a, b) {
  this.T & a && b != !!(this.h & a) && (this.l.ka(this, a, b), this.h = b ? this.h | a : this.h & ~a)
};
function X(a, b) {
  return!!(a.kd & b) && !!(a.T & b)
}
function Ig(a, b, c) {
  return!!(a.T & b) && !!(a.h & b) != c && (!(a.eh & b) || a.dispatchEvent(me(b, c))) && !a.ya
}
r.Cc = function(a) {
  !Jg(a, this.b()) && (this.dispatchEvent("enter") && this.isEnabled() && X(this, 2)) && Hg(this, j)
};
r.Bc = function(a) {
  !Jg(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(m), X(this, 2) && Hg(this, m))
};
r.zc = da;
function Jg(a, b) {
  return!!a.relatedTarget && Gd(b, a.relatedTarget)
}
r.Ac = function(a) {
  if(this.isEnabled() && (X(this, 2) && Hg(this, j), hc(a) && (!J || !Lb || !a.ctrlKey))) {
    X(this, 4) && this.setActive(j), this.l.hf(this) && this.fb().focus()
  }
  !this.jd && (hc(a) && (!J || !Lb || !a.ctrlKey)) && a.preventDefault()
};
r.$e = function(a) {
  this.isEnabled() && (X(this, 2) && Hg(this, j), this.Jd() && (this.lb(a) && X(this, 4)) && this.setActive(m))
};
r.Ye = function(a) {
  this.isEnabled() && this.lb(a)
};
r.lb = function(a) {
  if(X(this, 16)) {
    var b = !(this.h & 16);
    Ig(this, 16, b) && this.ka(16, b)
  }
  X(this, 8) && this.he(j);
  X(this, 64) && (b = !(this.h & 64), Ig(this, 64, b) && this.ka(64, b));
  b = new cc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.Zd = a.Zd);
  return this.dispatchEvent(b)
};
r.Ag = function() {
  X(this, 32) && Ig(this, 32, j) && this.ka(32, j)
};
r.We = function() {
  X(this, 4) && this.setActive(m);
  X(this, 32) && Ig(this, 32, m) && this.ka(32, m)
};
r.Ze = function(a) {
  return this.Lb && this.isEnabled() && this.Ed(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
r.Ed = function(a) {
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
  c && this.je(b, c);
  (c = a.xc()) && this.Zc(b, c);
  a.T & 16 && this.aa(b, 16, !!(a.h & 16));
  return b
};
r.xc = da;
r.Zc = da;
r.wc = function(a) {
  return a.title
};
r.je = function(a, b) {
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
  a.p && m != a.Fd && Gg(a, m);
  a.Fd = m;
  a.kd &= -256;
  a.p && a.h & 32 && e(Error("Component already rendered"));
  a.h & 32 && a.ka(32, m);
  a.T &= -33;
  return a.Ca().i("button", {"class":rg(this, a).join(" "), disabled:!a.isEnabled(), title:a.wc() || "", value:a.xc() || ""}, a.Qe() || "")
};
r.ef = function(a) {
  T(oe(a), a.b(), "click", a.lb)
};
r.Tc = da;
r.Ib = da;
r.hf = function(a) {
  return a.isEnabled()
};
r.Wc = da;
r.ka = function(a, b, c) {
  Og.f.ka.call(this, a, b, c);
  if((a = a.b()) && 1 == b) {
    a.disabled = c
  }
};
r.xc = function(a) {
  return a.value
};
r.Zc = function(a, b) {
  a && (a.value = b)
};
r.aa = da;
function Pg(a, b, c) {
  W.call(this, a, b || Og.La(), c)
}
A(Pg, W);
r = Pg.prototype;
r.xc = o("Yf");
r.Zc = function(a) {
  this.Yf = a;
  this.l.Zc(this.b(), a)
};
r.wc = o("Uf");
r.je = function(a) {
  this.Uf = a;
  this.l.je(this.b(), a)
};
r.c = function() {
  Pg.f.c.call(this);
  delete this.Yf;
  delete this.Uf
};
r.Q = function() {
  Pg.f.Q.call(this);
  if(this.T & 32) {
    var a = this.fb();
    a && T(oe(this), a, "keyup", this.Ed)
  }
};
r.Ed = function(a) {
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
  this.ce(a, b);
  return b
};
r.vc = p("button");
r.ce = function(a, b) {
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
    return b.Ec = Wg(c), b.type = "hex", b
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
    return b.Ec = Yg(c[0], c[1], c[2]), b.type = "rgb", b
  }
  if(Tg && (c = Tg[a.toLowerCase()])) {
    return b.Ec = c, b.type = "named", b
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
ch = new dh;
function hh(a) {
  this.headers = new lb;
  this.Mb = a || k
}
A(hh, Vc);
hh.prototype.a = Q("goog.net.XhrIo");
var ih = /^https?$/i;
r = hh.prototype;
r.Ga = m;
r.k = k;
r.fd = k;
r.Md = "";
r.kf = "";
r.Xb = 0;
r.Yb = "";
r.vd = m;
r.Fc = m;
r.Hd = m;
r.ib = m;
r.bd = 0;
r.pb = k;
r.Hf = "";
r.qh = m;
r.send = function(a, b, c, d) {
  this.k && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Md = a;
  this.Yb = "";
  this.Xb = 0;
  this.kf = b;
  this.vd = m;
  this.Ga = j;
  this.k = this.Mb ? eh(this.Mb) : eh(ch);
  this.fd = this.Mb ? this.Mb.kc || (this.Mb.kc = gh(this.Mb)) : ch.kc || (ch.kc = gh(ch));
  this.k.onreadystatechange = w(this.xf, this);
  try {
    O(this.a, jh(this, "Opening Xhr")), this.Hd = j, this.k.open(b, a, j), this.Hd = m
  }catch(f) {
    O(this.a, jh(this, "Error opening Xhr: " + f.message));
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
  this.Hf && (this.k.responseType = this.Hf);
  "withCredentials" in this.k && (this.k.withCredentials = this.qh);
  try {
    this.pb && (Xc.clearTimeout(this.pb), this.pb = k), 0 < this.bd && (O(this.a, jh(this, "Will abort after " + this.bd + "ms if incomplete")), this.pb = Xc.setTimeout(w(this.jh, this), this.bd)), O(this.a, jh(this, "Sending request")), this.Fc = j, this.k.send(a), this.Fc = m
  }catch(i) {
    O(this.a, jh(this, "Send error: " + i.message)), kh(this, i)
  }
};
r.jh = function() {
  "undefined" != typeof ba && this.k && (this.Yb = "Timed out after " + this.bd + "ms, aborting", this.Xb = 8, O(this.a, jh(this, this.Yb)), this.dispatchEvent("timeout"), this.abort(8))
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
  a.vd || (a.vd = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
r.abort = function(a) {
  this.k && this.Ga && (O(this.a, jh(this, "Aborting")), this.Ga = m, this.ib = j, this.k.abort(), this.ib = m, this.Xb = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), mh(this))
};
r.c = function() {
  this.k && (this.Ga && (this.Ga = m, this.ib = j, this.k.abort(), this.ib = m), mh(this, j));
  hh.f.c.call(this)
};
r.xf = function() {
  !this.Hd && !this.Fc && !this.ib ? this.Qg() : nh(this)
};
r.Qg = function() {
  nh(this)
};
function nh(a) {
  if(a.Ga && "undefined" != typeof ba) {
    if(a.fd[1] && 4 == a.Ma() && 2 == oh(a)) {
      O(a.a, jh(a, "Local request error detected and ignored"))
    }else {
      if(a.Fc && 4 == a.Ma()) {
        Xc.setTimeout(w(a.xf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.Ma()) {
          O(a.a, jh(a, "Request complete"));
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
                var g = ("" + a.Md).match(bf)[1] || k;
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
                O(a.a, "Can not get status: " + n.message), l = ""
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
    var c = a.k, d = a.fd[0] ? da : k;
    a.k = k;
    a.fd = k;
    a.pb && (Xc.clearTimeout(a.pb), a.pb = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(f) {
      Qc(a.a, "Problem encountered resetting onreadystatechange: " + f.message)
    }
  }
}
r.Jd = function() {
  return!!this.k
};
r.Ma = function() {
  return this.k ? this.k.readyState : 0
};
function oh(a) {
  try {
    return 2 < a.Ma() ? a.k.status : -1
  }catch(b) {
    return N(a.a, "Can not get status: " + b.message), -1
  }
}
r.getResponseHeader = function(a) {
  return this.k && 4 == this.Ma() ? this.k.getResponseHeader(a) : h
};
function jh(a, b) {
  return b + " [" + a.kf + " " + a.Md + " " + oh(a) + "]"
}
;var ph = !(H || J && !K("420+"));
function qh(a, b) {
  this.cd = a;
  this.na = b
}
A(qh, L);
r = qh.prototype;
r.q = k;
r.Sa = -1;
r.Ve = m;
r.af = "Content-Length Server Date Expires Keep-Alive Content-Type Transfer-Encoding Cache-Control".split(" ");
function rh(a) {
  var b = Ef(a.He), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.na, c, b), 1 != b && a.g()) : a.g()
}
r.Fg = function() {
  rh(this);
  if(!this.ya) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.na);
    this.g()
  }
};
r.Vg = function() {
  var a = t.parent;
  if(a) {
    this.Sa = this.q.Ma();
    if(2 <= this.Sa && !this.Ve) {
      for(var b = new lb, c = this.af.length;c--;) {
        var d = this.af[c];
        try {
          b.set(d, this.q.k.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.R() && (this.Ve = j, a.__XHRMaster_ongotheaders(this.na, pb(b)), this.ya)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.na, this.Sa);
    ph && 3 == this.Sa && rh(this)
  }else {
    this.g()
  }
};
r.Pd = function(a, b, c) {
  this.q = new hh;
  M(this.q, "readystatechange", w(this.Vg, this));
  M(this.q, "complete", w(this.Fg, this));
  this.q.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.He = new Df(this.q.k, 1048576)
};
r.c = function() {
  qh.f.c.call(this);
  delete this.He;
  this.q && this.q.g();
  delete this.cd.ec[this.na];
  delete this.cd
};
function sh() {
  this.ec = {}
}
A(sh, L);
sh.prototype.Kg = function(a, b, c, d) {
  var f = new qh(this, a);
  this.ec[a] = f;
  f.Pd(b, c, d)
};
sh.prototype.qg = function(a) {
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
t.__XHRSlave_makeRequest = w(th.Kg, th);
t.__XHRSlave_dispose = w(th.qg, th);
var uh = Q("cw.net.demo");
function vh() {
}
vh.prototype.Se = function() {
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
  return yh(this).Zf
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
  for(var b = yh(this).Zf, c = 0;c < b.length;c++) {
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
  return{keys:b, Zf:c}
}
var zh = new wh(document);
zh.Zh = 3950;
function Ah() {
  this.Ef = z()
}
var Bh = new Ah;
Ah.prototype.set = aa("Ef");
Ah.prototype.reset = function() {
  this.set(z())
};
Ah.prototype.get = o("Ef");
function Ch(a) {
  this.Tg = a || "";
  this.dh = Bh
}
Ch.prototype.Nf = j;
Ch.prototype.ah = j;
Ch.prototype.$g = j;
Ch.prototype.Of = m;
function Dh(a) {
  return 10 > a ? "0" + a : "" + a
}
function Eh(a, b) {
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
function Fh(a) {
  Ch.call(this, a)
}
A(Fh, Ch);
Fh.prototype.Of = j;
function Gh(a) {
  this.Ug = w(this.cg, this);
  this.Pe = new Fh;
  this.gf = this.Pe.Nf = m;
  this.e = a;
  this.sg = this.e.ownerDocument || this.e.document;
  var a = wd(this.e), b = k;
  if(H) {
    a = b = a.o.createStyleSheet(), H ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a.innerHTML = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
  }else {
    var c = zd(a.o, "head", h, h)[0];
    c || (b = zd(a.o, "body", h, h)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    var d = b = a.i("style");
    H ? d.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : d.innerHTML = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}";
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
Gh.prototype.cg = function(a) {
  var b = 100 >= this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight, c = this.sg.createElement("div");
  c.className = "logmsg";
  var d = this.Pe, f;
  switch(a.Cb.value) {
    case Hc.value:
      f = "dbg-sh";
      break;
    case Ic.value:
      f = "dbg-sev";
      break;
    case Jc.value:
      f = "dbg-w";
      break;
    case Kc.value:
      f = "dbg-i";
      break;
    default:
      f = "dbg-f"
  }
  var g = [];
  g.push(d.Tg, " ");
  if(d.Nf) {
    var i = new Date(a.Tf);
    g.push("[", Dh(i.getFullYear() - 2E3) + Dh(i.getMonth() + 1) + Dh(i.getDate()) + " " + Dh(i.getHours()) + ":" + Dh(i.getMinutes()) + ":" + Dh(i.getSeconds()) + "." + Dh(Math.floor(i.getMilliseconds() / 10)), "] ")
  }
  d.ah && g.push("[", Na(Eh(a, d.dh.get())), "s] ");
  d.$g && g.push("[", Ha(a.Jg), "] ");
  g.push('<span class="', f, '">', Ga(Na(Ha(a.sf))));
  d.Of && a.yd && g.push("<br>", Ga(Na(a.xd || "")));
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
  this.sd = m
}
A(Y, Vc);
r = Y.prototype;
r.ua = k;
r.e = k;
r.Vf = k;
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
  this.re = c;
  this.ua.ee(this, c);
  this.fill = d;
  this.ua.de(this, d)
}
A(Z, Y);
Z.prototype.fill = k;
Z.prototype.re = k;
Z.prototype.xg = o("fill");
Z.prototype.zg = o("re");
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
  Fd(this.b())
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
r.Ge = function(a) {
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
  var f = this.U[0] - a * Math.cos(vd(c)) + a * Math.cos(vd(c + d)), g = this.U[1] - b * Math.sin(vd(c)) + b * Math.sin(vd(c + d));
  this.B.push(3);
  this.d.push(1);
  this.pa.push(a, b, c, d, f, g);
  this.Jb = m;
  this.U = [f, g];
  return this
};
r.eg = function(a, b, c, d) {
  for(var f = this.U[0] - a * Math.cos(vd(c)), g = this.U[1] - b * Math.sin(vd(c)), i = vd(d), d = Math.ceil(2 * (Math.abs(i) / Math.PI)), i = i / d, c = vd(c), l = 0;l < d;l++) {
    var n = Math.cos(c), q = Math.sin(c), x = 4 / 3 * Math.sin(i / 2) / (1 + Math.cos(i / 2)), s = f + (n - x * q) * a, y = g + (q + x * n) * b, c = c + i, n = Math.cos(c), q = Math.sin(c);
    this.Ge(s, y, f + (n + x * q) * a, g + (q - x * n) * b, f + n * a, g + q * b)
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
Wh[2] = Th.prototype.Ge;
Wh[3] = Th.prototype.eg;
Th.prototype.Na = function() {
  return 0 == this.B.length
};
function Xh(a, b, c, d, f) {
  ke.call(this, f);
  this.width = a;
  this.height = b;
  this.la = c || k;
  this.Pb = d || k
}
A(Xh, ke);
r = Xh.prototype;
r.F = k;
r.Ia = 0;
r.ab = 0;
r.Ue = function() {
  return this.X()
};
r.X = function() {
  return this.p ? ce(this.b()) : ka(this.width) && ka(this.height) ? new R(this.width, this.height) : k
};
function Yh(a) {
  var b = a.X();
  return b ? b.width / (a.la ? new R(a.la, a.Pb) : a.X()).width : 0
}
;function Zh(a, b, c, d, f) {
  Xh.call(this, a, b, c, d, f);
  this.Je = {};
  this.ve = J && !K(526);
  this.gb = new ge(this)
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
r.de = function(a, b) {
  var c = a.b();
  b instanceof Rh ? (c.setAttribute("fill", b.qa), c.setAttribute("fill-opacity", b.Zb)) : c.setAttribute("fill", "none")
};
r.ee = function(a, b) {
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
  this.ud = ai(this, "defs");
  this.F = new Mh(b, this);
  a.appendChild(this.ud);
  a.appendChild(b);
  this.e = a;
  if(this.la || this.Ia || this.ab) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.ve ? this.dd() : this.b().setAttribute("viewBox", this.Ia + " " + this.ab + " " + (this.la ? this.la + " " + this.Pb : ""))
  }
};
r.dd = function() {
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
  ae(this.b(), a, b)
};
r.X = function() {
  if(!I) {
    return this.p ? ce(this.b()) : Zh.f.X.call(this)
  }
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.p && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = ce(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || ce(f), b = parseFloat(b) * g.height / 100);
  return new R(a, b)
};
r.clear = function() {
  this.F.clear();
  Fd(this.ud);
  this.Je = {}
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
  if(this.ve) {
    var a = this.width, b = this.height;
    "string" == typeof a && (-1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%")) && T(this.gb, bi(), Yc, this.dd);
    this.dd()
  }
};
r.cb = function() {
  Zh.f.cb.call(this);
  this.ve && ie(this.gb, bi(), Yc, this.dd)
};
r.c = function() {
  delete this.Je;
  delete this.ud;
  delete this.F;
  Zh.f.c.call(this)
};
function bi() {
  $h || ($h = new Wc(400), $h.start());
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
  Fd(this.b())
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
  this.zi = c;
  this.Ai = d;
  this.Mi = f;
  this.Ni = g
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
  this.gb = new ge(this)
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
hi.prototype.de = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    "fill" == f.tagName && c.removeChild(f)
  }
  b instanceof Rh ? "transparent" == b.qa ? c.filled = m : 1 != b.Zb ? (c.filled = j, d = ji(this, "fill"), d.opacity = Math.round(100 * b.Zb) + "%", d.color = b.qa, c.appendChild(d)) : (c.filled = j, c.fillcolor = b.qa) : c.filled = m;
  ki(this)
};
hi.prototype.ee = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = j;
    var d = b.rb, d = v(d) && -1 == d.indexOf("px") ? parseFloat(d) : d * Yh(this), f = c.getElementsByTagName("stroke")[0];
    1 > d ? (f = f || ji(this, "stroke"), f.opacity = d, f.Qi = "1px", f.color = b.qa, c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.qa, c.strokeweight = d + "px")
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
  M(c, "resize", w(this.Dd, this))
};
r.Dd = function() {
  var a = ce(this.b()), b = this.F.b().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.b();a && a.currentStyle && "none" != a.currentStyle.display;) {
      a = a.parentNode
    }
    a && a.currentStyle && T(this.gb, a, "propertychange", this.Dd)
  }
  this.dispatchEvent("resize")
};
r.$ = function(a, b) {
  ae(this.b(), a, b)
};
r.X = function() {
  var a = this.b();
  return new R(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
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
  this.Dd();
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
  this.lg = c;
  this.mg = d;
  this.If = f;
  this.Jf = g;
  this.K = new Th;
  this.K.clear();
  this.K.moveTo(this.lg + this.If * Math.cos(vd(0)), this.mg + this.Jf * Math.sin(vd(0)));
  this.K.arcTo(this.If, this.Jf, 0, 360);
  this.K.close();
  this.Rg = new ri(k, b, this.K, i, l)
}
A(qi, Kh);
qi.prototype.za = function(a) {
  this.Rg.za(a)
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
  this.th = c;
  this.vh = d;
  this.xe = f;
  this.Cd = g;
  this.bh = i
}
A(si, Lh);
si.prototype.Qb = m;
si.prototype.$ = function(a, b) {
  this.xe = a;
  this.Cd = b;
  this.Qb && oi(this.ua)
};
si.prototype.za = function(a) {
  this.df ? (this.xe && this.Cd && a.drawImage(this.df, this.th, this.vh, this.xe, this.Cd), this.Qb = j) : (a = new Image, a.onload = w(this.Bg, this, a), a.src = this.bh)
};
si.prototype.Bg = function(a) {
  this.df = a;
  oi(this.ua)
};
function ti(a, b, c, d, f) {
  Xh.call(this, a, b, c, d, f)
}
A(ti, Xh);
r = ti.prototype;
r.de = function() {
  oi(this)
};
r.ee = function() {
  oi(this)
};
function ui(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.Vf ? b.Vf.L() : new Hh, f = d.ga, g = d.ia;
  (f || g) && c.translate(f, g);
  (d = d.Y) && c.rotate(Math.asin(d))
}
r.i = function() {
  var a = this.M.i("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Ob = this.M.i("canvas");
  a.appendChild(this.Ob);
  this.Ig = this.F = new ni(this);
  this.Xg = 0;
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
  c && (f = this.b().parentNode, g = ce(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || ce(f), b = parseFloat(b) * g.height / 100);
  return new R(a, b)
};
function vi(a) {
  ae(a.b(), a.width, a.height);
  var b = a.X();
  b && (ae(a.Ob, b.width, b.height), a.Ob.width = b.width, a.Ob.height = b.height, a.vb = k)
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
  if(a.Li) {
    a.Ki = j
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
  if(!b.xg || !b.zg) {
    b.za(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof Rh) {
        0 != d.Zb && (c.globalAlpha = d.Zb, c.fillStyle = d.qa, b.za(c), c.fill(), c.globalAlpha = 1)
      }else {
        var f = c.createLinearGradient(d.Di(), d.Fi(), d.Ei(), d.Gi());
        f.addColorStop(0, d.Bi());
        f.addColorStop(1, d.Ci());
        c.fillStyle = f;
        b.za(c);
        c.fill()
      }
    }
    if(d = b.re) {
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
  this.p && (!this.Xg && !(b != this.F && b != this.Ig)) && pi(this, a)
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
A(wi, Vc);
r = wi.prototype;
r.Xa = k;
r.be = k;
function xi(a, b) {
  b && (E(b, function(a) {
    this.dc(a, m)
  }, a), cb(a.w, b))
}
r.Bd = o("Xa");
r.Te = function() {
  return bb(this.w)
};
r.Yc = function(a) {
  a != this.Xa && (this.dc(this.Xa, m), this.Xa = a, this.dc(a, j));
  this.dispatchEvent("select")
};
r.Ad = function() {
  return this.Xa ? Ta(this.w, this.Xa) : -1
};
r.ie = function(a) {
  this.Yc(this.w[a] || k)
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
  a && ("function" == typeof this.be ? this.be(a, b) : "function" == typeof a.he && a.he(b))
};
function yi() {
}
A(yi, pg);
ea(yi);
var zi = 0;
yi.prototype.i = function(a) {
  var b = rg(this, a);
  return a.Ca().i("div", b ? b.join(" ") : k, Ai(this, a.ba, a.Ue(), a.Ca()))
};
function Ai(a, b, c, d) {
  for(var f = [], g = 0, i = 0;g < c.height;g++) {
    for(var l = [], n = 0;n < c.width;n++) {
      var q = b && b[i++];
      l.push(Bi(a, q, d))
    }
    f.push(d.i("tr", a.t() + "-row", l))
  }
  return a.Fe(f, d)
}
yi.prototype.Fe = function(a, b) {
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
yi.prototype.Uc = function(a, b) {
  if(a) {
    var c = zd(document, "tbody", this.t() + "-body", a)[0];
    if(c) {
      var d = 0;
      E(c.rows, function(a) {
        E(a.cells, function(a) {
          Fd(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = wd(a), i = c.rows[0].cells.length;d < b.length;) {
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
    fe(a, j, I)
  }
};
function Ci(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && Ya(od(c), a.t() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function Di(a, b, c, d) {
  c && (c = c.parentNode, a = a.t() + "-cell-hover", d ? pd(c, a) : qd(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id))
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
r.Vc = function(a) {
  Ei.f.Vc.call(this, a);
  Fi(this);
  this.I ? (this.I.clear(), xi(this.I, a)) : (this.I = new wi(a), a = w(this.dc, this), this.I.be = a, T(oe(this), this.I, "select", this.Eg));
  this.hb = -1
};
r.Qe = p("");
r.Cc = function(a) {
  Ei.f.Cc.call(this, a);
  var b = Ci(this.l, this, a.target);
  if((!b || !a.relatedTarget || !Gd(b, a.relatedTarget)) && b != Gi(this)) {
    a = this.ba, Hi(this, a ? Ta(a, b) : -1)
  }
};
r.Bc = function(a) {
  Ei.f.Bc.call(this, a);
  var b = Ci(this.l, this, a.target);
  (!b || !a.relatedTarget || !Gd(b, a.relatedTarget)) && b == Gi(this) && Di(this.l, this, b, m)
};
r.Ac = function(a) {
  Ei.f.Ac.call(this, a);
  if(this.Jd() && (a = Ci(this.l, this, a.target), a != Gi(this))) {
    var b = this.ba;
    Hi(this, b ? Ta(b, a) : -1)
  }
};
r.lb = function() {
  var a = Gi(this);
  return a ? (this.Yc(a), this.dispatchEvent("action")) : m
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
    return Hi(this, 0), j
  }
  if(35 == a.keyCode) {
    return Hi(this, b - 1), j
  }
  var d = 0 > this.hb ? this.Ad() : this.hb;
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
r.Eg = function() {
};
r.Ue = o("n");
r.$ = function(a, b) {
  this.b() && e(Error("Component already rendered"));
  this.n = ka(a) ? new R(a, b) : a;
  Fi(this)
};
function Gi(a) {
  var b = a.ba;
  return b && b[a.hb]
}
function Hi(a, b) {
  b != a.hb && (Ii(a, a.hb, m), a.hb = b, Ii(a, b, j))
}
r.Ad = function() {
  return this.I ? this.I.Ad() : -1
};
r.Bd = function() {
  return this.I ? this.I.Bd() : k
};
r.ie = function(a) {
  this.I && this.I.ie(a)
};
r.Yc = function(a) {
  this.I && this.I.Yc(a)
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
    b ? pd(c, d) : qd(c, d)
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
      b = Math.ceil(Math.sqrt(b.length)), a.n = new R(b, b)
    }
  }else {
    a.n = new R(0, 0)
  }
}
;function Ji(a, b, c) {
  this.nc = a || [];
  Ei.call(this, k, b || yi.La(), c);
  this.nc = this.nc;
  this.Lc = k;
  this.Uc(Va(this.nc, function(a) {
    var b = this.Ca().i("div", {"class":this.l.t() + "-colorswatch", style:"background-color:" + a});
    b.title = "#" == a.charAt(0) ? "RGB (" + $g(a).join(", ") + ")" : a;
    return b
  }, this))
}
A(Ji, Ei);
Ji.prototype.Lc = k;
function Ki(a) {
  if(a) {
    try {
      return Ug(a).Ec
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
;var Mi, Ni, Oi, Pi, Qi, Ri = Q("whiteboard.logger");
window.onerror = function(a, b, c) {
  Qc(Ri, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Si() {
}
Si.prototype.Qf = function(a) {
  this.C = a;
  ag(this.C, "subprotocol:whiteboard")
};
Si.prototype.Pf = function(a, b) {
  Ri.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  Ti = k
};
Si.prototype.Rf = function(a) {
  var a = Li(a), b = a[0], c = a[1];
  "Point" == b ? Mi.qc(c.x, c.y, 5, 5, new Sh, new Rh(c.color), h) : "ClearBoard" == b ? (Mi.g(), Ui()) : N(Ri, "Strange message from server: " + G(a))
};
Si.prototype.reset = function(a) {
  Ri.info("resetting with reason: " + a);
  this.C.reset(a)
};
var Ti = k, Vi = new ld(t.window);
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
  Oi = S("drawArea");
  pe(a, Oi);
  Mi = a
}
var aj = "#E06666";
function bj(a) {
  var b;
  (a = a.target.Bd()) ? (a = a.style[Qa("background-color")] || "", b = Ki(a)) : b = k;
  b || (b = aj);
  Ni = b;
  zh.set("whiteboard_defaultColor", b);
  a = S("whiteboard-cp-value");
  v("background-color") ? Zd(a, b, "background-color") : ta("background-color", ra(Zd, a));
  a = S("whiteboard-cp-value");
  a.title = b;
  b = Ug(b).Ec;
  Hd(a, b);
  b = $g(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = Yg(b[0], b[1], b[2]);
  v("color") ? Zd(a, b, "color") : ta("color", ra(Zd, a))
}
function cj() {
  Pi = (new df(document.location)).Z;
  if(Qi = Boolean(Number(Pi.get("logging", "0")))) {
    Uc().Xc(Oc);
    var a = new Gh(document.getElementById("log"));
    if(j != a.gf) {
      var b = Uc(), c = a.Ug;
      b.Vb || (b.Vb = []);
      b.Vb.push(c);
      a.gf = j
    }
  }else {
    Uc().Xc(Gc)
  }
  Ri.info("Logger works.");
  (a = zh.get("whiteboard_defaultColor")) && (aj = a);
  Ni = aj;
  b = S("whiteboard-controls-left");
  a = S("whiteboard-controls-right");
  c = Bd("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  Ed(b, c);
  c = Bd("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  Ed(b, c);
  b = new Ji("#EA9999 #F9CB9C #FFE599 #B6D7A8 #A2C4C9 #9FC5E8 #B4A7D6 #D5A6BD #E06666 #F6B26B #FFD966 #93C47D #76A5AF #6FA8DC #8E7CC3 #C27BA0 #CC0000 #E69138 #F1C232 #6AA84F #45818E #3D85C6 #674EA7 #A64D79".split(" "));
  b.$(8);
  pe(b, S("whiteboard-cp"));
  M(b, "action", bj);
  c = Ki(aj);
  b.Lc || (b.Lc = Va(b.nc, function(a) {
    return Ki(a)
  }));
  b.ie(c ? Ta(b.Lc, c) : -1);
  bj({target:b});
  b = new Sg("Clear board");
  Fg(b, "clear-board-button");
  pe(b, a);
  M(b, "action", Zi);
  a = S("drawAreaOverlay");
  fe(a, j);
  M(a, "click", $i, m);
  Ui();
  a = new vh;
  Ti = new Si;
  Yi();
  c = (new df(document.location)).Z;
  b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    N(uh, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new df(document.location);
  b ? b = new Kf("/_minerva/", c.Ja, t.__demo_mainSocketPort) : (d ? (b = t.__demo_shared_domain, v(b) || e(Error("domain was " + G(b) + "; expected a string.")), c = c.L(), gf(c, "_____random_____." + b)) : c = c.L(), c.Hb("/_minerva/"), jf(c, "", h), b = new Mf(c.toString().replace("_____random_____", "%random%")));
  a = new Tf(b, a, Vi);
  b = Ti;
  u(b.Qf) || e(Error("Protocol is missing required method streamStarted"));
  u(b.Pf) || e(Error("Protocol is missing required method streamReset"));
  u(b.Rf) || e(Error("Protocol is missing required method stringReceived"));
  a.Vd = w(b.Qf, b);
  a.onreset = w(b.Pf, b);
  a.Wd = w(b.Rf, b);
  a.Xd = u(b.lh) ? w(b.lh, b) : k;
  a.Yd = u(b.mh) ? w(b.mh, b) : k;
  a.start()
}
var dj = ["__whiteboard_init"], ej = t;
!(dj[0] in ej) && ej.execScript && ej.execScript("var " + dj[0]);
for(var fj;dj.length && (fj = dj.shift());) {
  !dj.length && u(cj) ? ej[fj] = cj : ej = ej[fj] ? ej[fj] : ej[fj] = {}
}
;
})();
