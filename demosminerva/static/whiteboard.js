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
function q(a) {
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
  this.Oc = h
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
          c.push(f), f = b[g], za(a, a.Oc ? a.Oc.call(b, "" + g, f) : f, c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), Ba(g, c), c.push(":"), za(a, a.Oc ? a.Oc.call(b, g, f) : f, c), d = ","))
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
    var l = d[i] || "", n = f[i] || "", p = RegExp("(\\d*)(\\D*)", "g"), x = RegExp("(\\d*)(\\D*)", "g");
    do {
      var s = p.exec(l) || ["", "", ""], y = x.exec(n) || ["", "", ""];
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
  b.shift()
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
          if(sa(a.Xf)) {
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
  if("function" == typeof a.ua) {
    return a.ua()
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
    a && this.ed(a)
  }
}
r = lb.prototype;
r.d = 0;
r.R = o("d");
r.N = function() {
  mb(this);
  for(var a = [], b = 0;b < this.m.length;b++) {
    a.push(this.u[this.m[b]])
  }
  return a
};
r.ua = function() {
  mb(this);
  return this.m.concat()
};
r.sa = function(a) {
  return nb(this.u, a)
};
r.nc = function(a) {
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
  this.d = this.m.length = 0
};
r.remove = function(a) {
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
r.get = function(a, b) {
  return nb(this.u, a) ? this.u[a] : b
};
r.set = function(a, b) {
  nb(this.u, a) || (this.d++, this.m.push(a));
  this.u[a] = b
};
r.ed = function(a) {
  var b;
  a instanceof lb ? (b = a.ua(), a = a.N()) : (b = va(a), a = ua(a));
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
  this.rb = a;
  this.nb = b
}
tb.prototype.W = function(a) {
  return a instanceof tb && this.rb == a.rb && this.nb.join(",") == a.nb
};
tb.prototype.O = function(a, b) {
  a.push("new SACK(", "" + this.rb, ", ");
  F(this.nb, a, b);
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
  a = a.w.ua();
  D.sort.call(a, eb);
  return a
}
r.Qe = function(a) {
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
  D.sort.call(b, eb);
  return new tb(a.jb, b)
}
var yb = {};
var zb;
zb = q(j);
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
r.mb = m;
r.kd = m;
r.Wb = function(a, b, c, d, f, g) {
  la(a) ? this.ef = j : a && a.handleEvent && la(a.handleEvent) ? this.ef = m : e(Error("Invalid listener argument"));
  this.Cb = a;
  this.xf = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Ac = g;
  this.kd = m;
  this.key = ++Xb;
  this.mb = m
};
r.handleEvent = function(a) {
  return this.ef ? this.Cb.call(this.Ac || this.src, a) : this.Cb.handleEvent.call(this.Cb, a)
};
var Yb = !H || Vb(), Zb = !H || Vb(), $b = H && !K("8");
!J || K("528");
I && K("1.9b") || H && K("8") || Ib && K("9.5") || J && K("528");
I && !K("8") || H && K("9");
var ac = {th:"click", yh:"dblclick", Th:"mousedown", Xh:"mouseup", Wh:"mouseover", Vh:"mouseout", Uh:"mousemove", ii:"selectstart", Nh:"keypress", Mh:"keydown", Oh:"keyup", rh:"blur", Gh:"focus", zh:"deactivate", Hh:H ? "focusin" : "DOMFocusIn", Ih:H ? "focusout" : "DOMFocusOut", sh:"change", hi:"select", ji:"submit", Lh:"input", di:"propertychange", Dh:"dragstart", Ah:"dragenter", Ch:"dragover", Bh:"dragleave", Eh:"drop", ni:"touchstart", mi:"touchmove", li:"touchend", ki:"touchcancel", vh:"contextmenu", 
Fh:"error", Kh:"help", Ph:"load", Qh:"losecapture", ei:"readystatechange", fi:"resize", gi:"scroll", pi:"unload", Jh:"hashchange", $h:"pagehide", ai:"pageshow", ci:"popstate", wh:"copy", bi:"paste", xh:"cut", oh:"beforecopy", ph:"beforecut", qh:"beforepaste", Zh:"online", Yh:"offline", Sh:"message", uh:"connect", oi:J ? "webkitTransitionEnd" : Ib ? "oTransitionEnd" : "transitionend"};
function L() {
}
L.prototype.ca = m;
L.prototype.g = function() {
  this.ca || (this.ca = j, this.c())
};
L.prototype.c = function() {
  this.ig && bc.apply(k, this.ig)
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
r.lb = m;
r.defaultPrevented = m;
r.Pc = j;
r.stopPropagation = function() {
  this.lb = j
};
r.preventDefault = function() {
  this.defaultPrevented = j;
  this.Pc = m
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
  delete this.lb
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
    b in i || (i[b] = {d:0, ka:0});
    i = i[b];
    d in i || (i[d] = {d:0, ka:0}, i.d++);
    var i = i[d], l = ma(a), n;
    i.ka++;
    if(i[l]) {
      n = i[l];
      for(g = 0;g < n.length;g++) {
        if(i = n[g], i.Cb == c && i.Ac == f) {
          if(i.mb) {
            break
          }
          return n[g].key
        }
      }
    }else {
      n = i[l] = [], i.d++
    }
    var p = mc, x = Zb ? function(a) {
      return p.call(x.src, x.key, a)
    } : function(a) {
      a = p.call(x.src, x.key, a);
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
    a.addEventListener ? (a == t || !a.qd) && a.addEventListener(b, g, d) : a.attachEvent(b in lc ? lc[b] : lc[b] = "on" + b, g);
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
  ic[a].kd = j;
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
        if(a[g].Cb == c && a[g].capture == d && a[g].Ac == f) {
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
  if(b.mb) {
    return m
  }
  var c = b.src, d = b.type, f = b.xf, g = b.capture;
  c.removeEventListener ? (c == t || !c.qd) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in lc ? lc[d] : lc[d] = "on" + d, f);
  c = ma(c);
  f = jc[d][g][c];
  if(kc[c]) {
    var i = kc[c];
    $a(i, b);
    0 == i.length && delete kc[c]
  }
  b.mb = j;
  f.qf = j;
  rc(d, g, c, f);
  delete ic[a];
  return j
}
function rc(a, b, c, d) {
  if(!d.Hc && d.qf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].mb ? d[f].xf.src = k : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.qf = m;
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
    a.ka--;
    a = a[b];
    a.Hc ? a.Hc++ : a.Hc = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var n = a[l];
        n && !n.mb && (g &= uc(n, f) !== m)
      }
    }finally {
      a.Hc--, rc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function uc(a, b) {
  var c = a.handleEvent(b);
  a.kd && qc(a.key);
  return c
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
        var p = m;
        if(0 == g.keyCode) {
          try {
            g.keyCode = -1;
            break a
          }catch(x) {
            p = j
          }
        }
        if(p || g.returnValue == h) {
          g.returnValue = j
        }
      }
    }
    p = new fc;
    p.Wb(g, this);
    g = j;
    try {
      if(l) {
        for(var s = [], y = p.currentTarget;y;y = y.parentNode) {
          s.push(y)
        }
        i = f[j];
        i.ka = i.d;
        for(var B = s.length - 1;!p.lb && 0 <= B && i.ka;B--) {
          p.currentTarget = s[B], g &= tc(i, s[B], d, j, p)
        }
        if(n) {
          i = f[m];
          i.ka = i.d;
          for(B = 0;!p.lb && B < s.length && i.ka;B++) {
            p.currentTarget = s[B], g &= tc(i, s[B], d, m, p)
          }
        }
      }else {
        g = uc(c, p)
      }
    }finally {
      s && (s.length = 0), p.g()
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
r.qd = j;
r.Kc = k;
r.fe = aa("Kc");
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
      for(g = this;g;g = g.Kc) {
        f.push(g)
      }
      g = c[j];
      g.ka = g.d;
      for(var i = f.length - 1;!a.lb && 0 <= i && g.ka;i--) {
        a.currentTarget = f[i], d &= tc(g, f[i], a.type, j, a) && a.Pc != m
      }
    }
    if(m in c) {
      if(g = c[m], g.ka = g.d, b) {
        for(i = 0;!a.lb && i < f.length && g.ka;i++) {
          a.currentTarget = f[i], d &= tc(g, f[i], a.type, m, a) && a.Pc != m
        }
      }else {
        for(f = this;!a.lb && f && g.ka;f = f.Kc) {
          a.currentTarget = f, d &= tc(g, f, a.type, m, a) && a.Pc != m
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
  this.Kc = k
};
function xc(a, b) {
  this.Dc = a || 1;
  this.fc = b || yc;
  this.hd = w(this.Zg, this);
  this.Md = z()
}
A(xc, wc);
xc.prototype.enabled = m;
var yc = t.window;
r = xc.prototype;
r.pa = k;
r.Zg = function() {
  if(this.enabled) {
    var a = z() - this.Md;
    0 < a && a < 0.8 * this.Dc ? this.pa = this.fc.setTimeout(this.hd, this.Dc - a) : (this.dispatchEvent(zc), this.enabled && (this.pa = this.fc.setTimeout(this.hd, this.Dc), this.Md = z()))
  }
};
r.start = function() {
  this.enabled = j;
  this.pa || (this.pa = this.fc.setTimeout(this.hd, this.Dc), this.Md = z())
};
r.stop = function() {
  this.enabled = m;
  this.pa && (this.fc.clearTimeout(this.pa), this.pa = k)
};
r.c = function() {
  xc.f.c.call(this);
  this.stop();
  delete this.fc
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
  this.kc = [];
  this.ye = a;
  this.Ge = b || k
}
r = Ac.prototype;
r.Ka = m;
r.Tb = m;
r.Zb = 0;
r.ke = m;
r.dg = m;
r.jd = 0;
r.cancel = function(a) {
  if(this.Ka) {
    this.ac instanceof Ac && this.ac.cancel()
  }else {
    if(this.G) {
      var b = this.G;
      delete this.G;
      a ? b.cancel(a) : (b.jd--, 0 >= b.jd && b.cancel())
    }
    this.ye ? this.ye.call(this.Ge, this) : this.ke = j;
    this.Ka || this.vb(new Bc)
  }
};
r.Be = function(a, b) {
  Cc(this, a, b);
  this.Zb--;
  0 == this.Zb && this.Ka && Dc(this)
};
function Cc(a, b, c) {
  a.Ka = j;
  a.ac = c;
  a.Tb = !b;
  Dc(a)
}
function Ec(a) {
  a.Ka && (a.ke || e(new Fc), a.ke = m)
}
function Gc(a, b) {
  Ec(a);
  Cc(a, j, b)
}
r.vb = function(a) {
  Ec(this);
  Cc(this, m, a)
};
function Hc(a, b) {
  Ic(a, b, k, h)
}
function Ic(a, b, c, d) {
  a.kc.push([b, c, d]);
  a.Ka && Dc(a)
}
function Jc(a) {
  return Wa(a.kc, function(a) {
    return la(a[1])
  })
}
function Dc(a) {
  a.te && (a.Ka && Jc(a)) && (t.clearTimeout(a.te), delete a.te);
  a.G && (a.G.jd--, delete a.G);
  for(var b = a.ac, c = m, d = m;a.kc.length && 0 == a.Zb;) {
    var f = a.kc.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.Tb ? i : g) {
      try {
        var l = g.call(f || a.Ge, b);
        u(l) && (a.Tb = a.Tb && (l == b || l instanceof Error), a.ac = b = l);
        b instanceof Ac && (d = j, a.Zb++)
      }catch(n) {
        b = n, a.Tb = j, Jc(a) || (c = j)
      }
    }
  }
  a.ac = b;
  d && a.Zb && (Ic(b, w(a.Be, a, j), w(a.Be, a, m)), b.dg = j);
  c && (a.te = t.setTimeout(function() {
    e(new Kc(b))
  }, 0))
}
function Lc(a) {
  var b = new Ac;
  Gc(b, a);
  return b
}
function Mc(a) {
  var b = new Ac;
  b.vb(a);
  return b
}
function Fc() {
  C.call(this)
}
A(Fc, C);
Fc.prototype.message = "Already called";
function Bc() {
  C.call(this)
}
A(Bc, C);
Bc.prototype.message = "Deferred was cancelled";
function Kc(a) {
  C.call(this);
  this.message = "Unhandled Error in Deferred: " + (a.message || "[No message]")
}
A(Kc, C);
function Nc(a) {
  this.H = a;
  this.pc = [];
  this.Ke = [];
  this.cg = w(this.gh, this)
}
Nc.prototype.pa = k;
Nc.prototype.gh = function() {
  this.pa = k;
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
      Gc(a[b], k)
    }
  }
};
var Oc = new Nc(t.window);
var Pc;
function Qc(a) {
  a = a.className;
  return v(a) && a.match(/\S+/g) || []
}
function Rc(a, b) {
  for(var c = Qc(a), d = db(arguments, 1), f = c.length + d.length, g = c, i = 0;i < d.length;i++) {
    Ya(g, d[i]) || g.push(d[i])
  }
  a.className = c.join(" ");
  return c.length == f
}
function Sc(a, b) {
  var c = Qc(a), d = db(arguments, 1), f, g = d;
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
var Tc = !H || Vb();
!I && !H || H && Vb() || I && K("1.9.1");
var Uc = H && !K("9");
function Vc(a) {
  return a ? new Wc(Xc(a)) : Pc || (Pc = new Wc)
}
function O(a) {
  return v(a) ? document.getElementById(a) : a
}
function Yc(a, b, c, d) {
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
var Zc = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function $c(a, b, c) {
  return ad(document, arguments)
}
function ad(a, b) {
  var c = b[0], d = b[1];
  if(!Tc && d && (d.name || d.type)) {
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
  d && (v(d) ? g.className = d : ga(d) ? Rc.apply(k, [g].concat(d)) : ta(d, function(a, b) {
    "style" == b ? g.style.cssText = a : "class" == b ? g.className = a : "for" == b ? g.htmlFor = a : b in Zc ? g.setAttribute(Zc[b], a) : 0 == b.lastIndexOf("aria-", 0) ? g.setAttribute(b, a) : g[b] = a
  }));
  2 < b.length && bd(a, g, b, 2);
  return g
}
function bd(a, b, c, d) {
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
function cd(a, b) {
  bd(Xc(a), a, arguments, 1)
}
function dd(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function fd(a, b) {
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
function Xc(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function gd(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      dd(a), a.appendChild(Xc(a).createTextNode(b))
    }
  }
}
var hd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, id = {IMG:" ", BR:"\n"};
function jd(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ka(a) && 0 <= a && 32768 > a) : m
}
function kd(a) {
  var b = [];
  ld(a, b, m);
  return b.join("")
}
function ld(a, b, c) {
  if(!(a.nodeName in hd)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in id) {
        b.push(id[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          ld(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Wc(a) {
  this.o = a || t.document || document
}
r = Wc.prototype;
r.Ca = Vc;
r.b = function(a) {
  return v(a) ? this.o.getElementById(a) : a
};
r.i = function(a, b, c) {
  return ad(this.o, arguments)
};
r.createElement = function(a) {
  return this.o.createElement(a)
};
r.createTextNode = function(a) {
  return this.o.createTextNode(a)
};
r.De = function(a, b, c) {
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
r.append = cd;
r.contains = fd;
function md(a, b) {
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
        a.push('<property id="', d, '">'), md(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', Ha(c), '">'), md(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function nd(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, f = arguments;
  d.push("<arguments>");
  for(var g = f.length, i = 1;i < g;i++) {
    md(d, f[i])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var od = m, pd = "";
function qd(a) {
  a = a.match(/[\d]+/g);
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var rd = navigator.plugins["Shockwave Flash"];
  rd && (od = j, rd.description && (pd = qd(rd.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (od = j, pd = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var sd = navigator.mimeTypes["application/x-shockwave-flash"];
    (od = sd && sd.enabledPlugin) && (pd = qd(sd.enabledPlugin.description))
  }else {
    try {
      var td = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), od = j, pd = qd(td.GetVariable("$version"))
    }catch(ud) {
      try {
        td = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), od = j, pd = "6.0.21"
      }catch(vd) {
        try {
          td = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), od = j, pd = qd(td.GetVariable("$version"))
        }catch(wd) {
        }
      }
    }
  }
}
var xd = pd;
function yd(a, b, c) {
  a.style[Qa(c)] = b
}
function zd(a, b) {
  var c = Xc(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) || "" : ""
}
function Ad(a, b, c) {
  b instanceof N ? (c = b.height, b = b.width) : c == h && e(Error("missing height argument"));
  a.style.width = Bd(b);
  a.style.height = Bd(c)
}
function Bd(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
function Cd(a) {
  if("none" != (zd(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style && a.style.display)) {
    return Dd(a)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = Dd(a);
  b.display = c;
  b.position = f;
  b.visibility = d;
  return a
}
function Dd(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = J && !b && !c;
  return(!u(b) || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), H && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new N(b.right - b.left, b.bottom - b.top)) : new N(b, c)
}
function Ed(a) {
  H ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[J ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var Fd = I ? "MozUserSelect" : J ? "WebkitUserSelect" : k;
function Gd(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Fd) {
    if(b = b ? "none" : "", a.style[Fd] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[Fd] = b
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
;function Hd(a) {
  this.gb = a;
  this.m = []
}
A(Hd, L);
var Id = [];
function P(a, b, c, d) {
  ga(c) || (Id[0] = c, c = Id);
  for(var f = 0;f < c.length;f++) {
    a.m.push(M(b, c[f], d || a, m, a.gb || a))
  }
  return a
}
function Jd(a, b, c, d, f, g) {
  if(ga(c)) {
    for(var i = 0;i < c.length;i++) {
      Jd(a, b, c[i], d, f, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.gb || a;
      f = !!f;
      if(b = pc(b, c, f)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].mb && b[c].Cb == d && b[c].capture == f && b[c].Ac == g) {
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
Hd.prototype.Zd = function() {
  E(this.m, qc);
  this.m.length = 0
};
Hd.prototype.c = function() {
  Hd.f.c.call(this);
  this.Zd()
};
Hd.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Kd() {
}
ea(Kd);
Kd.prototype.Ig = 0;
Kd.La();
function Ld(a) {
  this.M = a || Vc();
  this.bc = Md
}
A(Ld, wc);
Ld.prototype.Ag = Kd.La();
var Md = k;
function Nd(a, b) {
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
r = Ld.prototype;
r.S = k;
r.p = m;
r.e = k;
r.bc = k;
r.G = k;
r.P = k;
r.lc = k;
r.hh = m;
function Od(a) {
  return a.S || (a.S = ":" + (a.Ag.Ig++).toString(36))
}
r.b = o("e");
function Pd(a) {
  return a.wb || (a.wb = new Hd(a))
}
r.getParent = o("G");
r.fe = function(a) {
  this.G && this.G != a && e(Error("Method not supported"));
  Ld.f.fe.call(this, a)
};
r.Ca = o("M");
r.i = function() {
  this.e = this.M.createElement("div")
};
function Qd(a, b) {
  a.p && e(Error("Component already rendered"));
  a.e || a.i();
  b ? b.insertBefore(a.e, k) : a.M.o.body.appendChild(a.e);
  (!a.G || a.G.p) && a.Q()
}
r.Q = function() {
  this.p = j;
  Rd(this, function(a) {
    !a.p && a.b() && a.Q()
  })
};
r.cb = function() {
  Rd(this, function(a) {
    a.p && a.cb()
  });
  this.wb && this.wb.Zd();
  this.p = m
};
r.c = function() {
  Ld.f.c.call(this);
  this.p && this.cb();
  this.wb && (this.wb.g(), delete this.wb);
  Rd(this, function(a) {
    a.g()
  });
  if(!this.hh && this.e) {
    var a = this.e;
    a && a.parentNode && a.parentNode.removeChild(a)
  }
  this.G = this.e = this.lc = this.P = k
};
r.Sb = o("e");
r.Ib = function(a) {
  this.p && e(Error("Component already rendered"));
  this.bc = a
};
function Rd(a, b) {
  a.P && E(a.P, b, h)
}
r.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : Od(a), d;
    this.lc && c ? (d = this.lc, d = (c in d ? d[c] : h) || k) : d = k;
    a = d;
    c && a && (d = this.lc, c in d && delete d[c], $a(this.P, a), b && (a.cb(), a.e && (c = a.e) && c.parentNode && c.parentNode.removeChild(c)), c = a, c == k && e(Error("Unable to set parent component")), c.G = k, Ld.f.fe.call(c, k))
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function Sd(a) {
  this.u = new lb;
  a && this.ed(a)
}
function Td(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ma(a) : b.substr(0, 1) + a
}
r = Sd.prototype;
r.R = function() {
  return this.u.R()
};
r.add = function(a) {
  this.u.set(Td(a), a)
};
r.ed = function(a) {
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
  return this.u.remove(Td(a))
};
r.clear = function() {
  this.u.clear()
};
r.Na = function() {
  return this.u.Na()
};
r.contains = function(a) {
  return this.u.sa(Td(a))
};
r.N = function() {
  return this.u.N()
};
r.L = function() {
  return new Sd(this)
};
r.W = function(a) {
  var b;
  if(b = this.R() == gb(a)) {
    var c = a, a = gb(c);
    this.R() > a ? b = m : (!(c instanceof Sd) && 5 < a && (c = new Sd(c)), b = kb(this, function(a) {
      if("function" == typeof c.contains) {
        a = c.contains(a)
      }else {
        if("function" == typeof c.nc) {
          a = c.nc(a)
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
function Ud(a) {
  return Vd(a || arguments.callee.caller, [])
}
function Vd(a, b) {
  var c = [];
  if(Ya(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Wd(a) + "(");
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
            g = (g = Wd(g)) ? g : "[fn]";
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
        c.push(Vd(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Wd(a) {
  if(Xd[a]) {
    return Xd[a]
  }
  a = "" + a;
  if(!Xd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Xd[a] = b ? b[1] : "[Anonymous]"
  }
  return Xd[a]
}
var Xd = {};
function Yd(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
Yd.prototype.wd = k;
Yd.prototype.vd = k;
var Zd = 0;
Yd.prototype.reset = function(a, b, c, d, f) {
  "number" == typeof f || Zd++;
  this.Of = d || z();
  this.Bb = a;
  this.of = b;
  this.Dg = c;
  delete this.wd;
  delete this.vd
};
Yd.prototype.Uc = aa("Bb");
function $d(a) {
  this.Hg = a
}
$d.prototype.G = k;
$d.prototype.Bb = k;
$d.prototype.P = k;
$d.prototype.Vb = k;
function ae(a, b) {
  this.name = a;
  this.value = b
}
ae.prototype.toString = o("name");
var be = new ae("OFF", Infinity), ce = new ae("SHOUT", 1200), de = new ae("SEVERE", 1E3), ee = new ae("WARNING", 900), fe = new ae("INFO", 800), ge = new ae("CONFIG", 700), he = new ae("FINE", 500), ie = new ae("FINEST", 300), je = new ae("ALL", 0);
r = $d.prototype;
r.getParent = o("G");
r.Uc = aa("Bb");
function ke(a) {
  if(a.Bb) {
    return a.Bb
  }
  if(a.G) {
    return ke(a.G)
  }
  Sa("Root logger has no level set.");
  return k
}
r.log = function(a, b, c) {
  if(a.value >= ke(this).value) {
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
r.sg = function(a, b, c) {
  var d = new Yd(a, "" + b, this.Hg);
  if(c) {
    d.wd = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var i;
      var l = ca("window.location.href");
      if(v(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var n, p, x = m;
        try {
          n = c.lineNumber || c.wi || "Not available"
        }catch(s) {
          n = "Not available", x = j
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || l
        }catch(y) {
          p = "Not available", x = j
        }
        i = x || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:p, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + Ha(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + Ha(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ha(Ud(g) + "-> ")
    }catch(B) {
      f = "Exception trying to expose exception! You win, we lose. " + B
    }
    d.vd = f
  }
  return d
};
function le(a, b) {
  a.log(de, b, h)
}
function Q(a, b, c) {
  a.log(ee, b, c)
}
r.info = function(a, b) {
  this.log(fe, a, b)
};
function R(a, b) {
  a.log(he, b, h)
}
function S(a, b) {
  a.log(ie, b, h)
}
var me = {}, ne = k;
function oe() {
  ne || (ne = new $d(""), me[""] = ne, ne.Uc(ge))
}
function pe() {
  oe();
  return ne
}
function T(a) {
  oe();
  var b;
  if(!(b = me[a])) {
    b = new $d(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = T(a.substr(0, c));
    c.P || (c.P = {});
    c.P[d] = b;
    b.G = c;
    me[a] = b
  }
  return b
}
;function qe(a, b) {
  Ld.call(this, b);
  this.pg = a;
  this.ud = new Hd(this);
  this.rc = new lb
}
A(qe, Ld);
r = qe.prototype;
r.a = T("goog.ui.media.FlashObject");
r.jh = "window";
r.xe = "#000000";
r.Zf = "sameDomain";
r.$ = function(a, b) {
  this.qb = v(a) ? a : Math.round(a) + "px";
  this.Ed = v(b) ? b : Math.round(b) + "px";
  this.b() && Ad(this.b() ? this.b().firstChild : k, this.qb, this.Ed);
  return this
};
r.Q = function() {
  qe.f.Q.call(this);
  var a = this.b(), b;
  b = H ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = H ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = Fa(c, this.jh), d = this.rc.ua(), f = this.rc.N(), g = [], i = 0;i < d.length;i++) {
    g.push(encodeURIComponent("" + d[i]) + "=" + encodeURIComponent("" + f[i]))
  }
  b = Fa(b, Od(this), Od(this), "goog-ui-media-flash-object", Ha(this.pg), Ha(g.join("&")), this.xe, this.Zf, c);
  a.innerHTML = b;
  this.qb && this.Ed && this.$(this.qb, this.Ed);
  P(this.ud, this.b(), ua(ac), dc)
};
r.i = function() {
  this.Bf != k && !(0 <= Oa(xd, this.Bf)) && (Q(this.a, "Required flash version not found:" + this.Bf), e(Error("Method not supported")));
  var a = this.Ca().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
r.c = function() {
  qe.f.c.call(this);
  this.rc = k;
  this.ud.g();
  this.ud = k
};
function re() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ z()).toString(36)
}
function se(a) {
  return a.substr(0, a.length - 1)
}
var te = /^(0|[1-9]\d*)$/, ue = /^(0|\-?[1-9]\d*)$/;
function ve(a) {
  var b = we;
  return te.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function xe(a) {
  C.call(this, a)
}
A(xe, C);
xe.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function ye(a, b) {
  this.S = "_" + re();
  this.$c = a;
  this.Ra = b;
  this.Ya = a.Ya
}
A(ye, L);
r = ye.prototype;
r.Db = j;
r.od = m;
r.a = T("cw.net.FlashSocket");
r.O = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.S);
  a.push("'>")
};
function ze(a, b, c) {
  if("frames" == b) {
    a = a.Ra, Ae(a.J), Be(a.J, c)
  }else {
    if("stillreceiving" == b) {
      c = a.Ra, S(c.a, "onstillreceiving"), Ae(c.J)
    }else {
      if("connect" == b) {
        a.Ra.onconnect()
      }else {
        "close" == b ? (a.Db = m, a.g()) : "ioerror" == b ? (a.Db = m, b = a.Ra, Q(b.a, "onioerror: " + G(c)), Ce(b.J, m), a.g()) : "securityerror" == b ? (a.Db = m, b = a.Ra, Q(b.a, "onsecurityerror: " + G(c)), Ce(b.J, m), a.g()) : e(Error("bad event: " + b))
      }
    }
  }
}
function De(a) {
  a.od = j;
  a.Db = m;
  a.g()
}
r.md = function(a, b) {
  try {
    var c = this.Ya.CallFunction(nd("__FC_connect", this.S, a, b, "<int32/>\n"))
  }catch(d) {
    return le(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), De(this)
  }
  '"OK"' != c && e(Error("__FC_connect failed? ret: " + c))
};
r.ic = function(a) {
  try {
    var b = this.Ya.CallFunction(nd("__FC_writeFrames", this.S, a))
  }catch(c) {
    return le(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), De(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (Q(this.a, "Flash no longer knows of " + this.S + "; disposing."), this.g()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
r.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.Db);
  ye.f.c.call(this);
  var a = this.Ya;
  delete this.Ya;
  if(this.Db) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(nd("__FC_close", this.S)))
    }catch(b) {
      le(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.od = j
    }
  }
  if(this.od) {
    a = this.Ra, Q(a.a, "oncrash"), Ce(a.J, j)
  }else {
    this.Ra.onclose()
  }
  delete this.Ra;
  delete this.$c.xb[this.S]
};
function Ee(a, b) {
  this.v = a;
  this.Ya = b;
  this.xb = {};
  this.ld = "__FST_" + re();
  t[this.ld] = w(this.lg, this);
  var c = b.CallFunction(nd("__FC_setCallbackFunc", this.ld));
  '"OK"' != c && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
A(Ee, L);
r = Ee.prototype;
r.a = T("cw.net.FlashSocketTracker");
r.O = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  F(this.xb, a, b);
  a.push(">")
};
r.pd = function(a) {
  a = new ye(this, a);
  return this.xb[a.S] = a
};
r.jg = function(a, b, c, d) {
  var f = this.xb[a];
  f ? "frames" == b && d ? (ze(f, "ioerror", "FlashConnector hadError while handling data."), f.g()) : ze(f, b, c) : Q(this.a, "Cannot dispatch because we have no instance: " + G([a, b, c, d]))
};
r.lg = function(a, b, c, d) {
  try {
    var f = this.v;
    f.pc.push([this.jg, this, [a, b, c, d]]);
    f.pa == k && (f.pa = f.H.setTimeout(f.cg, 0))
  }catch(g) {
    t.window.setTimeout(function() {
      e(g)
    }, 0)
  }
};
r.c = function() {
  Ee.f.c.call(this);
  for(var a = ua(this.xb);a.length;) {
    a.pop().g()
  }
  delete this.xb;
  delete this.Ya;
  t[this.ld] = h
};
function Fe(a) {
  this.J = a;
  this.Nb = []
}
A(Fe, L);
r = Fe.prototype;
r.a = T("cw.net.FlashSocketConduit");
r.ic = function(a) {
  this.Nb ? (S(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Nb.push.apply(this.Nb, a)) : (S(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.Xc.ic(a))
};
r.md = function(a, b) {
  this.Xc.md(a, b)
};
r.onconnect = function() {
  this.a.info("onconnect");
  Ae(this.J);
  var a = this.Nb;
  this.Nb = k;
  a.length && (S(this.a, "onconnect: Writing " + a.length + " buffered frame(s)."), this.Xc.ic(a))
};
r.onclose = function() {
  this.a.info("onclose");
  Ce(this.J, m)
};
r.c = function() {
  this.a.info("in disposeInternal.");
  Fe.f.c.call(this);
  this.Xc.g();
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
    b.vb(a)
  });
  return k
}
;function Ke() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function Le(a) {
  return a * Math.PI / 180
}
;var we = Math.pow(2, 53);
var Me = {Xf:q("<cw.eq.Wildcard>")};
function Ne(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function Oe(a, b, c) {
  var d = fa(a), f = fa(b);
  if(a == Me || b == Me) {
    return j
  }
  if(a != k && "function" == typeof a.W) {
    return c && c.push("running custom equals function on left object"), a.W(b, c)
  }
  if(b != k && "function" == typeof b.W) {
    return c && c.push("running custom equals function on right object"), b.W(a, c)
  }
  if(Ne(d) || Ne(f)) {
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
                if(!Oe(a[d], b[d], c)) {
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
                if(!Oe(a[g], b[g], c)) {
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
U.prototype.W = function(a, b) {
  return ja(a) && this.constructor == a.constructor && Oe(this.Mc, a.Mc, b)
};
U.prototype.O = function(a, b) {
  a.push("new ", this.Pg, "(");
  for(var c = "", d = 0;d < this.Mc.length;d++) {
    a.push(c), c = ", ", F(this.Mc[d], a, b)
  }
  a.push(")")
};
function V(a) {
  C.call(this, a)
}
A(V, C);
V.prototype.name = "cw.net.InvalidFrame";
function Pe() {
  var a = [];
  this.na(a);
  return a.join("")
}
function Qe() {
}
Qe.prototype.W = function(a, b) {
  return!(a instanceof Qe) ? m : Oe(Re(this), Re(a), b)
};
Qe.prototype.O = function(a, b) {
  a.push("<HelloFrame properties=");
  F(Re(this), a, b);
  a.push(">")
};
function Re(a) {
  return[a.Fa, a.wf, a.Ze, a.Af, a.ec, a.ne, a.pf, a.nf, a.Pd, a.lf, a.Sf, a.Nf, a.Ua, a.Gc]
}
Qe.prototype.da = Pe;
Qe.prototype.na = function(a) {
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
  b.sack = this.Ua instanceof tb ? se((new Se(this.Ua)).da()) : this.Ua;
  b.seenack = this.Gc instanceof tb ? se((new Se(this.Gc)).da()) : this.Gc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(ya(b), "H")
};
function Te(a) {
  U.call(this, "StringFrame", [a]);
  this.pe = a
}
A(Te, U);
Te.prototype.da = Pe;
Te.prototype.na = function(a) {
  a.push(this.pe, " ")
};
function Ue(a) {
  U.call(this, "CommentFrame", [a]);
  this.eg = a
}
A(Ue, U);
Ue.prototype.da = Pe;
Ue.prototype.na = function(a) {
  a.push(this.eg, "^")
};
function Ve(a) {
  U.call(this, "SeqNumFrame", [a]);
  this.Hf = a
}
A(Ve, U);
Ve.prototype.da = Pe;
Ve.prototype.na = function(a) {
  a.push("" + this.Hf, "N")
};
function We(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = we;
    if(ue.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var g = ve(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new tb(a, c)
}
function Se(a) {
  U.call(this, "SackFrame", [a]);
  this.Ua = a
}
A(Se, U);
Se.prototype.da = Pe;
Se.prototype.na = function(a) {
  var b = this.Ua;
  a.push(b.nb.join(","), "|", "" + b.rb);
  a.push("A")
};
function Xe(a) {
  U.call(this, "StreamStatusFrame", [a]);
  this.gf = a
}
A(Xe, U);
Xe.prototype.da = Pe;
Xe.prototype.na = function(a) {
  var b = this.gf;
  a.push(b.nb.join(","), "|", "" + b.rb);
  a.push("T")
};
function Ye() {
  U.call(this, "StreamCreatedFrame", [])
}
A(Ye, U);
Ye.prototype.da = Pe;
Ye.prototype.na = function(a) {
  a.push("C")
};
function Ze() {
  U.call(this, "YouCloseItFrame", [])
}
A(Ze, U);
Ze.prototype.da = Pe;
Ze.prototype.na = function(a) {
  a.push("Y")
};
function $e(a, b) {
  U.call(this, "ResetFrame", [a, b]);
  this.yf = a;
  this.we = b
}
A($e, U);
$e.prototype.da = Pe;
$e.prototype.na = function(a) {
  a.push(this.yf, "|", "" + Number(this.we), "!")
};
var af = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function bf(a) {
  U.call(this, "TransportKillFrame", [a]);
  this.reason = a
}
A(bf, U);
bf.prototype.da = Pe;
bf.prototype.na = function(a) {
  a.push(this.reason, "K")
};
function cf(a) {
  a || e(new V("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new Te(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = We(se(a)), a == k && e(new V("bad sack")), new Se(a)
  }
  if("N" == b) {
    return a = ve(se(a)), a == k && e(new V("bad seqNum")), new Ve(a)
  }
  if("T" == b) {
    return a = We(se(a)), a == k && e(new V("bad lastSackSeen")), new Xe(a)
  }
  if("Y" == b) {
    return 1 != a.length && e(new V("leading garbage")), new Ze
  }
  if("^" == b) {
    return new Ue(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && e(new V("leading garbage")), new Ye
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && e(new V("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && e(new V("bad applicationLevel")), new $e(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = af[a], a == k && e(new V("unknown kill reason: " + a)), new bf(a)
  }
  e(new V("Invalid frame type " + b))
}
;var df = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function ef(a, b) {
  var c = a.match(df), d = b.match(df);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function ff(a, b) {
  var c;
  if(a instanceof ff) {
    this.ea = u(b) ? b : a.ea, gf(this, a.Va), c = a.pb, hf(this), this.pb = c, jf(this, a.Ja), kf(this, a.Fb), this.Hb(a.K), lf(this, a.Z.L()), c = a.eb, hf(this), this.eb = c
  }else {
    if(a && (c = ("" + a).match(df))) {
      this.ea = !!b;
      gf(this, c[1] || "", j);
      var d = c[2] || "";
      hf(this);
      this.pb = d ? decodeURIComponent(d) : "";
      jf(this, c[3] || "", j);
      kf(this, c[4]);
      this.Hb(c[5] || "", j);
      lf(this, c[6] || "", j);
      c = c[7] || "";
      hf(this);
      this.eb = c ? decodeURIComponent(c) : ""
    }else {
      this.ea = !!b, this.Z = new mf(k, 0, this.ea)
    }
  }
}
r = ff.prototype;
r.Va = "";
r.pb = "";
r.Ja = "";
r.Fb = k;
r.K = "";
r.eb = "";
r.Bg = m;
r.ea = m;
r.toString = function() {
  var a = [], b = this.Va;
  b && a.push(nf(b, of), ":");
  if(b = this.Ja) {
    a.push("//");
    var c = this.pb;
    c && a.push(nf(c, of), "@");
    a.push(encodeURIComponent("" + b));
    b = this.Fb;
    b != k && a.push(":", "" + b)
  }
  if(b = this.K) {
    this.Ja && "/" != b.charAt(0) && a.push("/"), a.push(nf(b, "/" == b.charAt(0) ? pf : qf))
  }
  (b = this.Z.toString()) && a.push("?", b);
  (b = this.eb) && a.push("#", nf(b, rf));
  return a.join("")
};
r.L = function() {
  return new ff(this)
};
function gf(a, b, c) {
  hf(a);
  a.Va = c ? b ? decodeURIComponent(b) : "" : b;
  a.Va && (a.Va = a.Va.replace(/:$/, ""))
}
function jf(a, b, c) {
  hf(a);
  a.Ja = c ? b ? decodeURIComponent(b) : "" : b
}
function kf(a, b) {
  hf(a);
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.Fb = b) : a.Fb = k
}
r.Hb = function(a, b) {
  hf(this);
  this.K = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function lf(a, b, c) {
  hf(a);
  b instanceof mf ? (a.Z = b, a.Z.ee(a.ea)) : (c || (b = nf(b, sf)), a.Z = new mf(b, 0, a.ea))
}
function hf(a) {
  a.Bg && e(Error("Tried to modify a read-only Uri"))
}
r.ee = function(a) {
  this.ea = a;
  this.Z && this.Z.ee(a);
  return this
};
function tf(a) {
  return a instanceof ff ? a.L() : new ff(a, h)
}
function nf(a, b) {
  return v(a) ? encodeURI(a).replace(b, uf) : k
}
function uf(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var of = /[#\/\?@]/g, qf = /[\#\?:]/g, pf = /[\#\?]/g, sf = /[\#\?@]/g, rf = /#/g;
function mf(a, b, c) {
  this.V = a || k;
  this.ea = !!c
}
function vf(a) {
  if(!a.s && (a.s = new lb, a.d = 0, a.V)) {
    for(var b = a.V.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = wf(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
r = mf.prototype;
r.s = k;
r.d = k;
r.R = function() {
  vf(this);
  return this.d
};
r.add = function(a, b) {
  vf(this);
  this.V = k;
  var a = wf(this, a), c = this.s.get(a);
  c || this.s.set(a, c = []);
  c.push(b);
  this.d++;
  return this
};
r.remove = function(a) {
  vf(this);
  a = wf(this, a);
  return this.s.sa(a) ? (this.V = k, this.d -= this.s.get(a).length, this.s.remove(a)) : m
};
r.clear = function() {
  this.s = this.V = k;
  this.d = 0
};
r.Na = function() {
  vf(this);
  return 0 == this.d
};
r.sa = function(a) {
  vf(this);
  a = wf(this, a);
  return this.s.sa(a)
};
r.nc = function(a) {
  var b = this.N();
  return Ya(b, a)
};
r.ua = function() {
  vf(this);
  for(var a = this.s.N(), b = this.s.ua(), c = [], d = 0;d < b.length;d++) {
    for(var f = a[d], g = 0;g < f.length;g++) {
      c.push(b[d])
    }
  }
  return c
};
r.N = function(a) {
  vf(this);
  var b = [];
  if(a) {
    this.sa(a) && (b = ab(b, this.s.get(wf(this, a))))
  }else {
    for(var a = this.s.N(), c = 0;c < a.length;c++) {
      b = ab(b, a[c])
    }
  }
  return b
};
r.set = function(a, b) {
  vf(this);
  this.V = k;
  a = wf(this, a);
  this.sa(a) && (this.d -= this.s.get(a).length);
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
  for(var a = [], b = this.s.ua(), c = 0;c < b.length;c++) {
    for(var d = b[c], f = encodeURIComponent("" + d), d = this.N(d), g = 0;g < d.length;g++) {
      var i = f;
      "" !== d[g] && (i += "=" + encodeURIComponent("" + d[g]));
      a.push(i)
    }
  }
  return this.V = a.join("&")
};
r.L = function() {
  var a = new mf;
  a.V = this.V;
  this.s && (a.s = this.s.L());
  return a
};
function wf(a, b) {
  var c = "" + b;
  a.ea && (c = c.toLowerCase());
  return c
}
r.ee = function(a) {
  a && !this.ea && (vf(this), this.V = k, jb(this.s, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.V = k, this.s.set(wf(this, d), a), this.d += a.length))
  }, this));
  this.ea = a
};
function xf(a, b, c, d) {
  this.contentWindow = a;
  this.qc = b;
  this.oe = c;
  this.qg = d
}
xf.prototype.O = function(a, b) {
  a.push("<XDRFrame frameId=");
  F(this.qg, a, b);
  a.push(", expandedUrl=");
  F(this.qc, a, b);
  a.push(", streams=");
  F(this.oe, a, b);
  a.push(">")
};
function yf() {
  this.frames = [];
  this.Nd = new lb
}
yf.prototype.a = T("cw.net.XDRTracker");
function zf(a, b) {
  for(var c = Af, d = 0;d < c.frames.length;d++) {
    var f = c.frames[d], g;
    if(g = 0 == f.oe.length) {
      g = f.qc;
      var i = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + i + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + G(b) + " existing frame " + G(f)), Lc(f)
    }
  }
  d = re() + re();
  f = a.replace(/%random%/g, function() {
    return"ml" + Math.floor(Ke()) + ("" + Math.floor(Ke()))
  });
  g = t.location;
  g instanceof ff || (g = tf(g));
  f instanceof ff || (f = tf(f));
  var l = g;
  g = f;
  f = l.L();
  (i = !!g.Va) ? gf(f, g.Va) : i = !!g.pb;
  if(i) {
    var n = g.pb;
    hf(f);
    f.pb = n
  }else {
    i = !!g.Ja
  }
  i ? jf(f, g.Ja) : i = g.Fb != k;
  n = g.K;
  if(i) {
    kf(f, g.Fb)
  }else {
    if(i = !!g.K) {
      if("/" != n.charAt(0) && (l.Ja && !l.K ? n = "/" + n : (l = f.K.lastIndexOf("/"), -1 != l && (n = f.K.substr(0, l + 1) + n))), ".." == n || "." == n) {
        n = ""
      }else {
        if(-1 != n.indexOf("./") || -1 != n.indexOf("/.")) {
          for(var l = 0 == n.lastIndexOf("/", 0), n = n.split("/"), p = [], x = 0;x < n.length;) {
            var s = n[x++];
            "." == s ? l && x == n.length && p.push("") : ".." == s ? ((1 < p.length || 1 == p.length && "" != p[0]) && p.pop(), l && x == n.length && p.push("")) : (p.push(s), l = j)
          }
          n = p.join("/")
        }
      }
    }
  }
  i ? f.Hb(n) : i = "" !== g.Z.toString();
  i ? lf(f, g.Z.toString() ? decodeURIComponent(g.Z.toString()) : "") : i = !!g.eb;
  i && (g = g.eb, hf(f), f.eb = g);
  f = f.toString();
  g = ("" + t.location).match(df)[3] || k;
  i = f.match(df)[3] || k;
  g == i ? (c.a.info("No need to make a real XDRFrame for " + G(b)), c = Lc(new xf(t, f, [b], k))) : ((g = O("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new Ac, c.Nd.set(d, [i, f, b]), c.a.info("Creating new XDRFrame " + G(d) + "for " + G(b)), c = $c("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:f + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = i);
  return c
}
yf.prototype.mh = function(a) {
  var b = this.Nd.get(a);
  b || e(Error("Unknown frameId " + G(a)));
  this.Nd.remove(b);
  var c = b[0], a = new xf(O("minerva-xdrframe-" + a).contentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  Gc(c, a)
};
var Af = new yf;
t.__XHRTracker_xdrFrameLoaded = w(Af.mh, Af);
var Bf;
Bf = m;
var Cf = Fb();
Cf && (-1 != Cf.indexOf("Firefox") || -1 != Cf.indexOf("Camino") || -1 != Cf.indexOf("iPhone") || -1 != Cf.indexOf("iPod") || -1 != Cf.indexOf("iPad") || -1 != Cf.indexOf("Android") || -1 != Cf.indexOf("Chrome") && (Bf = j));
var Df = Bf;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function Ef(a, b, c, d, f, g) {
  Ac.call(this, f, g);
  this.kf = a;
  this.rd = [];
  this.Me = !!b;
  this.og = !!c;
  this.fg = !!d;
  for(b = 0;b < a.length;b++) {
    Ic(a[b], w(this.Ue, this, b, j), w(this.Ue, this, b, m))
  }
  0 == a.length && !this.Me && Gc(this, this.rd)
}
A(Ef, Ac);
Ef.prototype.rf = 0;
Ef.prototype.Ue = function(a, b, c) {
  this.rf++;
  this.rd[a] = [b, c];
  this.Ka || (this.Me && b ? Gc(this, [a, c]) : this.og && !b ? this.vb(c) : this.rf == this.kf.length && Gc(this, this.rd));
  this.fg && !b && (c = k);
  return c
};
Ef.prototype.vb = function(a) {
  Ef.f.vb.call(this, a);
  E(this.kf, function(a) {
    a.cancel()
  })
};
function Ff(a, b) {
  this.kh = a;
  this.mf = b
}
Ff.prototype.Kd = 0;
Ff.prototype.Jc = 0;
Ff.prototype.xd = m;
function Gf(a) {
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
;function Hf(a, b, c) {
  this.J = b;
  this.oa = a;
  this.nd = c
}
A(Hf, L);
r = Hf.prototype;
r.a = T("cw.net.XHRMaster");
r.Sa = -1;
r.Od = function(a, b, c) {
  this.nd.__XHRSlave_makeRequest(this.oa, a, b, c)
};
r.Ma = o("Sa");
r.Rd = function(a, b) {
  1 != b && le(this.a, G(this.oa) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Ae(this.J);
  Be(this.J, a)
};
r.Sd = function(a) {
  R(this.a, "ongotheaders_: " + G(a));
  var b = k;
  "Content-Length" in a && (b = ve(a["Content-Length"]));
  a = this.J;
  R(a.a, a.r() + " got Content-Length: " + b);
  a.ya == If && (b == k && (Q(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Jf(a, 2E3 + 1E3 * (b / 3072)))
};
r.Td = function(a) {
  1 != a && R(this.a, this.J.r() + "'s XHR's readyState is " + a);
  this.Sa = a;
  2 <= this.Sa && Ae(this.J)
};
r.Qd = function() {
  this.J.g()
};
r.c = function() {
  Hf.f.c.call(this);
  delete Kf.Da[this.oa];
  this.nd.__XHRSlave_dispose(this.oa);
  delete this.nd
};
function Lf() {
  this.Da = {}
}
A(Lf, L);
r = Lf.prototype;
r.a = T("cw.net.XHRMasterTracker");
r.pd = function(a, b) {
  var c = "_" + re(), d = new Hf(c, a, b);
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
  (d = this.Da[a]) ? d.Rd(b, c) : le(this.a, "onframes_: no master for " + G(a))
};
r.Sd = function(a, b) {
  var c = this.Da[a];
  c ? c.Sd(b) : le(this.a, "ongotheaders_: no master for " + G(a))
};
r.Td = function(a, b) {
  var c = this.Da[a];
  c ? c.Td(b) : le(this.a, "onreadystatechange_: no master for " + G(a))
};
r.Qd = function(a) {
  var b = this.Da[a];
  b ? (delete this.Da[b.oa], b.Qd()) : le(this.a, "oncomplete_: no master for " + G(a))
};
r.c = function() {
  Lf.f.c.call(this);
  for(var a = ua(this.Da);a.length;) {
    a.pop().g()
  }
  delete this.Da
};
var Kf = new Lf;
t.__XHRMaster_onframes = w(Kf.Rd, Kf);
t.__XHRMaster_oncomplete = w(Kf.Qd, Kf);
t.__XHRMaster_ongotheaders = w(Kf.Sd, Kf);
t.__XHRMaster_onreadystatechange = w(Kf.Td, Kf);
function Mf(a, b, c) {
  this.wa = a;
  this.host = b;
  this.port = c
}
function Nf(a, b, c) {
  this.host = a;
  this.port = b;
  this.bh = c
}
function Of(a, b) {
  b || (b = a);
  this.wa = a;
  this.Wa = b
}
Of.prototype.O = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  F(this.wa, a, b);
  a.push(", secondaryUrl=");
  F(this.Wa, a, b);
  a.push(">")
};
function Pf(a, b, c, d) {
  this.wa = a;
  this.vf = b;
  this.Wa = c;
  this.Gf = d;
  (!(0 == this.wa.indexOf("http://") || 0 == this.wa.indexOf("https://")) || !(0 == this.Wa.indexOf("http://") || 0 == this.Wa.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.vf.location.href;
  ef(this.wa, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Gf.location.href;
  ef(this.Wa, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
Pf.prototype.O = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  F(this.wa, a, b);
  a.push(", secondaryUrl=");
  F(this.Wa, a, b);
  a.push(">")
};
var Qf = new Ue(";)]}");
function Rf() {
}
Rf.prototype.Pe = q(1);
function Sf(a) {
  t.setTimeout(function() {
    u(a.message) && a.stack && (a.message += "\n" + a.stack);
    e(a)
  }, 0)
}
function Tf(a) {
  this.Xg = a
}
Tf.prototype.O = function(a, b) {
  a.push("<UserContext for ");
  F(this.Xg, a, b);
  a.push(">")
};
function Uf(a, b, c, d) {
  U.call(this, "TransportInfo", [a, b, c, d]);
  this.Fa = a
}
A(Uf, U);
function Vf(a, b, c) {
  this.A = a;
  this.Yg = b ? b : new Rf;
  this.v = c ? c : Oc;
  this.gc = new Sd;
  this.ec = re() + re();
  this.xa = new ub;
  this.Hd = new wb;
  this.hc = k;
  this.bd = [];
  this.Kb = new Tf(this);
  this.bg = w(this.fh, this);
  J && (this.hc = nc(t, "load", this.Rg, m, this))
}
A(Vf, L);
r = Vf.prototype;
r.a = T("cw.net.ClientStream");
r.hf = new tb(-1, []);
r.jf = new tb(-1, []);
r.Gg = 50;
r.Fg = 1048576;
r.Vd = k;
r.Ud = k;
r.Wd = k;
r.Xd = k;
r.onreset = k;
r.tf = k;
r.Gb = k;
r.le = m;
r.$d = m;
r.h = 1;
r.re = -1;
r.j = k;
r.z = k;
r.$b = k;
r.me = 0;
r.uf = 0;
r.Ff = 0;
r.O = function(a, b) {
  a.push("<ClientStream id=");
  F(this.ec, a, b);
  a.push(", state=", "" + this.h);
  a.push(", primary=");
  F(this.j, a, b);
  a.push(", secondary=");
  F(this.z, a, b);
  a.push(", resetting=");
  F(this.$b, a, b);
  a.push(">")
};
function Wf(a) {
  var b = [-1];
  a.j && b.push(a.j.Eb);
  a.z && b.push(a.z.Eb);
  return Math.max.apply(Math.max, b)
}
function Xf(a) {
  if(!(3 > a.h)) {
    Yf(a);
    var b = 0 != a.xa.w.R(), c = xb(a.Hd), d = !c.W(a.jf) && !(a.j && c.W(a.j.Ab) || a.z && c.W(a.z.Ab)), f = Wf(a);
    if((b = b && f < a.xa.bb) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.j.$a ? (S(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.j, c != d.Ab && (!d.Ea && !d.D.length && Zf(d), d.D.push(new Se(c)), d.Ab = c)), b && $f(a.j, a.xa, f + 1), a.j.Ba()) : a.z == k ? a.le ? (S(a.a, "tryToSend_: creating secondary to send " + g), a.z = ag(a, m, j), a.z && (b && $f(a.z, a.xa, f + 1), a.z.Ba())) : (S(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.$d = j) : S(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
function Yf(a) {
  a.Gb != k && (a.v.H.clearTimeout(a.Gb), a.Gb = k)
}
r.fh = function() {
  this.Gb = k;
  Xf(this)
};
function bg(a) {
  a.Gb == k && (a.Gb = a.v.H.setTimeout(a.bg, 6))
}
r.Rg = function() {
  this.hc = k;
  if(this.j && this.j.yb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.j;
    a.dd = j;
    a.g()
  }
  this.z && this.z.yb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.z, a.dd = j, a.g())
};
function cg(a, b) {
  var c;
  u(c) || (c = j);
  3 < a.h && e(Error("sendString: Can't send in state " + a.h));
  c && (v(b) || e(Error("sendString: not a string: " + G(b))), /^([ -~]*)$/.test(b) || e(Error("sendString: string has illegal chars: " + G(b))));
  a.xa.append(b);
  bg(a)
}
function ag(a, b, c) {
  var d;
  a.A instanceof Pf ? d = 1 == a.Yg.Pe() ? If : dg : a.A instanceof Nf ? d = eg : e(Error("Don't support endpoint " + G(a.A)));
  a.re += 1;
  b = new fg(a.v, a, a.re, d, a.A, b);
  S(a.a, "Created: " + b.r());
  if(c) {
    if(a.Wd) {
      c = new Uf(b.Fa, b.Ha, b.Ta, b.$a);
      try {
        a.Wd.call(a.Kb, c)
      }catch(f) {
        Q(a.a, "ontransportcreated raised uncaught exception", f), Sf(f)
      }
    }
    if(4 == a.h || a.ca) {
      return k
    }
  }
  a.gc.add(b);
  return b
}
function gg(a, b, c) {
  var d = new hg(a.v, a, b, c);
  S(a.a, "Created: " + d.r() + ", delay=" + b + ", times=" + c);
  a.gc.add(d);
  return d
}
function ig(a, b) {
  a.gc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  R(a.a, "Offline: " + b.r());
  var c = 4 == a.h && b.Vf;
  if(b instanceof fg && !c) {
    if(a.Xd) {
      var d = new Uf(b.Fa, b.Ha, b.Ta, b.$a);
      try {
        a.Xd.call(a.Kb, d)
      }catch(f) {
        Q(a.a, "ontransportdestroyed raised uncaught exception", f), Sf(f)
      }
    }
    if(4 == a.h || a.ca) {
      return
    }
  }
  a.me = b.Qa ? a.me + b.Qa : 0;
  1 <= a.me && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), jg(a, "stream penalty reached limit", m), a.g());
  if(3 < a.h) {
    c ? (R(a.a, "Disposing because resettingTransport_ is done."), a.g()) : R(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    c = b instanceof hg;
    if(!c && b.dd) {
      var g = J ? Df ? [0, 1] : [9, 20] : [0, 0], c = g[0], d = g[1];
      S(a.a, "getDelayForNextTransport_: " + G({delay:c, times:d}))
    }else {
      if(d = b.Ae(), b == a.j ? d ? g = ++a.uf : c || (g = a.uf = 0) : d ? g = ++a.Ff : c || (g = a.Ff = 0), c || !g) {
        d = c = 0, S(a.a, "getDelayForNextTransport_: " + G({count:g, delay:c, times:d}))
      }else {
        var i = 2E3 * Math.min(g, 3), l = Math.floor(4E3 * Math.random()) - 2E3, n = Math.max(0, b.Rf - b.se), d = (c = Math.max(0, i + l - n)) ? 1 : 0;
        S(a.a, "getDelayForNextTransport_: " + G({count:g, base:i, variance:l, oldDuration:n, delay:c, times:d}))
      }
    }
    c = [c, d];
    g = c[0];
    c = c[1];
    if(b == a.j) {
      a.j = k;
      if(c) {
        a.j = gg(a, g, c)
      }else {
        g = Wf(a);
        a.j = ag(a, j, j);
        if(!a.j) {
          return
        }
        $f(a.j, a.xa, g + 1)
      }
      a.j.Ba()
    }else {
      b == a.z && (a.z = k, c ? (a.z = gg(a, g, c), a.z.Ba()) : Xf(a))
    }
  }
}
function jg(a, b, c) {
  if(a.onreset) {
    try {
      a.onreset.call(a.Kb, b, c)
    }catch(d) {
      Q(a.a, "onreset raised uncaught exception", d), Sf(d)
    }
  }
}
r.reset = function(a) {
  3 < this.h && e(Error("reset: Can't send reset in state " + this.h));
  Yf(this);
  0 != this.xa.w.R() && Q(this.a, "reset: strings in send queue will never be sent: " + G(this.xa));
  this.h = 4;
  this.j && this.j.$a ? (this.a.info("reset: Sending ResetFrame over existing primary."), kg(this.j, a), this.j.Ba()) : (this.j && (R(this.a, "reset: Disposing primary before sending ResetFrame."), this.j.g()), this.z && (R(this.a, "reset: Disposing secondary before sending ResetFrame."), this.z.g()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.$b = ag(this, m, m), kg(this.$b, a), this.$b.Ba());
  jg(this, a, j)
};
r.Je = function(a) {
  le(this.a, "Failed to start " + G(this) + "; error was " + G(a.message));
  this.g();
  return k
};
r.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.h && e(Error("ClientStream.start: " + G(this) + " already started"));
  this.Ud && this.Ud(this);
  this.h = 2;
  if(this.A instanceof Of) {
    var a = zf(this.A.wa, this), b = zf(this.A.Wa, this), a = new Ef([a, b], m, j);
    Hc(a, function(a) {
      return Va(a, function(a) {
        return a[1]
      })
    });
    Hc(a, w(this.ng, this));
    b = w(this.Je, this);
    Ic(a, k, b, h)
  }else {
    if(this.A instanceof Mf) {
      if(sb) {
        this.Le()
      }else {
        a = this.v;
        b = this.A.wa;
        if(Ge.length) {
          a = He()
        }else {
          b = new qe(b + "FlashConnector.swf?cb=4bdfc178fc0e508c0cd5efc3fdb09920");
          b.xe = "#777777";
          b.$(300, 30);
          var c = O("minerva-elements");
          c || e(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
          var d = O("minerva-elements-FlashConnectorSwf");
          d || (d = $c("div", {id:"minerva-elements-FlashConnectorSwf"}), c.appendChild(d));
          var f = a.H, g;
          var a = d, i, l = function() {
            i && delete t.__loadFlashObject_callbacks[i]
          };
          if(I && !K("1.8.1.20")) {
            g = Mc(new xe("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
          }else {
            if(0 <= Oa(xd, "9")) {
              var n;
              i = "_" + re();
              var p = new Ac(l);
              t.__loadFlashObject_callbacks[i] = function() {
                f.setTimeout(function() {
                  l();
                  Gc(p, O(n))
                }, 0)
              };
              b.rc.set("onloadcallback", '__loadFlashObject_callbacks["' + i + '"]()');
              n = Od(b);
              Qd(b, a);
              g = p
            }else {
              g = Mc(new xe("Need Flash Player 9+; had " + (xd ? xd : "none")))
            }
          }
          var x = f.setTimeout(function() {
            g.cancel()
          }, 8E3), a = function(a) {
            f.clearTimeout(x);
            return a
          };
          Ic(g, a, a, h);
          rb = g;
          a = He();
          Ic(rb, Ie, Je)
        }
        var s = this;
        Hc(a, function(a) {
          sb || (sb = new Ee(s.v, a));
          return k
        });
        Hc(a, w(this.Le, this));
        b = w(this.Je, this);
        Ic(a, k, b, h)
      }
    }else {
      lg(this)
    }
  }
};
r.ng = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].qc, f = a[1].qc;
  this.bd.push(a[0]);
  this.bd.push(a[1]);
  this.A = new Pf(d, b, f, c);
  lg(this)
};
r.Le = function() {
  this.A = new Nf(this.A.host, this.A.port, sb);
  lg(this)
};
function lg(a) {
  a.h = 3;
  a.j = ag(a, j, j);
  a.j && ($f(a.j, a.xa, k), a.j.Ba())
}
r.c = function() {
  this.a.info(G(this) + " in disposeInternal.");
  Yf(this);
  this.h = 5;
  for(var a = this.gc.N(), b = 0;b < a.length;b++) {
    a[b].g()
  }
  for(a = 0;a < this.bd.length;a++) {
    $a(this.bd[a].oe, this)
  }
  J && this.hc && (qc(this.hc), this.hc = k);
  this.tf && this.tf.call(this.Kb);
  delete this.gc;
  delete this.j;
  delete this.z;
  delete this.$b;
  delete this.Kb;
  Vf.f.c.call(this)
};
var If = 1, dg = 2, eg = 3;
function fg(a, b, c, d, f, g) {
  this.v = a;
  this.C = b;
  this.Fa = c;
  this.ya = d;
  this.A = f;
  this.D = [];
  this.Ha = g;
  this.$a = !this.yb();
  this.Ta = this.ya != If;
  this.ag = w(this.$g, this)
}
A(fg, L);
r = fg.prototype;
r.a = T("cw.net.ClientTransport");
r.q = k;
r.se = k;
r.Rf = k;
r.Nc = k;
r.Ea = m;
r.Yc = m;
r.Ab = k;
r.sc = 0;
r.Eb = -1;
r.Lc = -1;
r.Vf = m;
r.dd = m;
r.Qa = 0;
r.Ub = m;
r.O = function(a) {
  a.push("<ClientTransport #", "" + this.Fa, ", becomePrimary=", "" + this.Ha, ">")
};
r.r = function() {
  return(this.Ha ? "Prim. T#" : "Sec. T#") + this.Fa
};
r.Ae = function() {
  return!(!this.Ub && this.sc)
};
r.yb = function() {
  return this.ya == If || this.ya == dg
};
function mg(a, b) {
  D.sort.call(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  } || eb);
  a: {
    var c = a.C, d = !a.Ta, f, g = c.Hd;
    f = c.Gg;
    for(var i = c.Fg, l = [], n = m, p = 0, x = b.length;p < x;p++) {
      var s = b[p], y = s[0], s = s[1];
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
          }catch(ed) {
            Q(c.a, "onstring raised uncaught exception", ed), Sf(ed)
          }
        }
        if(4 == c.h || c.ca) {
          break a
        }
      }
    }
    d || bg(c);
    if(!(4 == c.h || c.ca) && f) {
      le(a.a, a.r() + "'s peer caused rwin overflow."), a.g()
    }
  }
}
function ng(a, b, c) {
  try {
    var d = cf(b);
    a.sc += 1;
    R(a.a, a.r() + " RECV " + G(d));
    var f;
    1 == a.sc && !d.W(Qf) && a.yb() ? (Q(a.a, a.r() + " is closing soon because got bad preamble: " + G(d)), f = j) : f = m;
    if(f) {
      return j
    }
    if(d instanceof Te) {
      if(!/^([ -~]*)$/.test(d.pe)) {
        return a.Ub = j
      }
      a.Lc += 1;
      c.push([a.Lc, d.pe])
    }else {
      if(d instanceof Se) {
        var g = a.C, i = d.Ua;
        g.hf = i;
        var l = g.xa, n = i.rb, c = m;
        n > l.bb && (c = j);
        for(var p = vb(l).concat(), d = 0;d < p.length;d++) {
          var x = p[d];
          if(x > n) {
            break
          }
          var s = l.w.get(x)[1];
          l.w.remove(x);
          l.n -= s
        }
        for(d = 0;d < i.nb.length;d++) {
          var y = i.nb[d];
          y > l.bb && (c = j);
          l.w.sa(y) && (s = l.w.get(y)[1], l.w.remove(y), l.n -= s)
        }
        l.w.Na() && l.w.clear();
        if(c) {
          return Q(a.a, a.r() + " is closing soon because got bad SackFrame"), a.Ub = j
        }
      }else {
        if(d instanceof Ve) {
          a.Lc = d.Hf - 1
        }else {
          if(d instanceof Xe) {
            a.C.jf = d.gf
          }else {
            if(d instanceof Ze) {
              return S(a.a, a.r() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof bf) {
              return a.Ub = j, "stream_attach_failure" == d.reason ? a.Qa += 1 : "acked_unsent_strings" == d.reason && (a.Qa += 0.5), S(a.a, a.r() + " is closing soon because got " + G(d)), j
            }
            if(!(d instanceof Ue)) {
              if(d instanceof Ye) {
                var B = a.C, ed = !a.Ta;
                S(B.a, "Stream is now confirmed to exist at server.");
                B.le = j;
                B.$d && !ed && (B.$d = m, Xf(B))
              }else {
                c.length && (mg(a, c), Za(c));
                if(d instanceof $e) {
                  var Mg = a.C;
                  jg(Mg, d.yf, d.we);
                  Mg.g();
                  return j
                }
                e(Error(a.r() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(Ng) {
    return Ng instanceof V || e(Ng), Q(a.a, a.r() + " is closing soon because got InvalidFrame: " + G(b)), a.Ub = j
  }
  return m
}
function Be(a, b) {
  a.Yc = j;
  try {
    for(var c = m, d = [], f = 0, g = b.length;f < g;f++) {
      if(a.ca) {
        a.a.info(a.r() + " returning from loop because we're disposed.");
        return
      }
      if(c = ng(a, b[f], d)) {
        break
      }
    }
    d.length && mg(a, d);
    a.Yc = m;
    a.D.length && a.Ba();
    c && (S(a.a, a.r() + " closeSoon is true.  Frames were: " + G(b)), a.g())
  }finally {
    a.Yc = m
  }
}
r.$g = function() {
  Q(this.a, this.r() + " timed out due to lack of connection or no data being received.");
  this.g()
};
function og(a) {
  a.Nc != k && (a.v.H.clearTimeout(a.Nc), a.Nc = k)
}
function Jf(a, b) {
  og(a);
  b = Math.round(b);
  a.Nc = a.v.H.setTimeout(a.ag, b);
  R(a.a, a.r() + "'s receive timeout set to " + b + " ms.")
}
function Ae(a) {
  a.ya != If && (a.ya == eg || a.ya == dg ? Jf(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ya)))
}
function Zf(a) {
  var b = new Qe;
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
  a.Ab = b.Ua
}
function Ce(a, b) {
  b && (a.Qa += 0.5);
  a.g()
}
r.Ba = function() {
  this.Ea && !this.$a && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.Yc) {
    S(this.a, this.r() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ea;
    this.Ea = j;
    !a && !this.D.length && Zf(this);
    for(a = 0;a < this.D.length;a++) {
      R(this.a, this.r() + " SEND " + G(this.D[a]))
    }
    if(this.yb()) {
      for(var a = [], b = 0, c = this.D.length;b < c;b++) {
        this.D[b].na(a), a.push("\n")
      }
      this.D = [];
      a = a.join("");
      b = this.Ha ? this.A.wa : this.A.Wa;
      this.q = Kf.pd(this, this.Ha ? this.A.vf : this.A.Gf);
      this.se = this.v.H === yc ? z() : this.v.H.getTime();
      this.q.Od(b, "POST", a);
      Jf(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Ta ? 0 : this.Ha ? 25E3 : 0))
    }else {
      if(this.ya == eg) {
        a = [];
        b = 0;
        for(c = this.D.length;b < c;b++) {
          a.push(this.D[b].da())
        }
        this.D = [];
        this.q ? this.q.ic(a) : (b = this.A, this.q = new Fe(this), this.q.Xc = b.bh.pd(this.q), this.se = this.v.H === yc ? z() : this.v.H.getTime(), this.q.md(b.host, b.port), this.q.ca || (this.q.ic(a), this.q.ca || Jf(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.ya))
      }
    }
  }
};
function $f(a, b, c) {
  !a.Ea && !a.D.length && Zf(a);
  for(var c = Math.max(c, a.Eb + 1), b = b.Qe(c), c = 0, d = b.length;c < d;c++) {
    var f = b[c], g = f[0], f = f[1];
    (-1 == a.Eb || a.Eb + 1 != g) && a.D.push(new Ve(g));
    a.D.push(new Te(f));
    a.Eb = g
  }
}
r.c = function() {
  this.a.info(this.r() + " in disposeInternal.");
  fg.f.c.call(this);
  this.Rf = this.v.H === yc ? z() : this.v.H.getTime();
  this.D = [];
  og(this);
  this.q && this.q.g();
  var a = this.C;
  this.C = k;
  ig(a, this)
};
function kg(a, b) {
  !a.Ea && !a.D.length && Zf(a);
  a.D.push(new $e(b, j));
  a.Vf = j
}
function hg(a, b, c, d) {
  this.v = a;
  this.C = b;
  this.Ie = c;
  this.Ce = d
}
A(hg, L);
r = hg.prototype;
r.Ea = m;
r.$a = m;
r.wc = k;
r.Ab = k;
r.a = T("cw.net.DoNothingTransport");
function pg(a) {
  a.wc = a.v.H.setTimeout(function() {
    a.wc = k;
    a.Ce--;
    a.Ce ? pg(a) : a.g()
  }, a.Ie)
}
r.Ba = function() {
  this.Ea && !this.$a && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ea = j;
  pg(this)
};
r.O = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.Ie, ">")
};
r.yb = q(m);
r.r = q("Wast. T");
r.Ae = q(m);
r.c = function() {
  this.a.info(this.r() + " in disposeInternal.");
  hg.f.c.call(this);
  this.wc != k && this.v.H.clearTimeout(this.wc);
  var a = this.C;
  this.C = k;
  ig(a, this)
};
function qg() {
}
var rg;
ea(qg);
r = qg.prototype;
r.tc = function() {
};
r.i = function(a) {
  var b = a.Ca().i("div", sg(this, a).join(" "), a.ba);
  this.be(a, b);
  return b
};
r.Sb = function(a) {
  return a
};
r.Rb = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(H && !K("7")) {
      var d = tg(Qc(a), b);
      d.push(b);
      ra(c ? Rc : Sc, a).apply(k, d)
    }else {
      c ? Rc(a, b) : Sc(a, b)
    }
  }
};
r.af = function(a) {
  a.bc == k && (a.bc = "rtl" == (zd(a.p ? a.e : a.M.o.body, "direction") || ((a.p ? a.e : a.M.o.body).currentStyle ? (a.p ? a.e : a.M.o.body).currentStyle.direction : k) || (a.p ? a.e : a.M.o.body).style && (a.p ? a.e : a.M.o.body).style.direction));
  a.bc && this.Ib(a.b(), j);
  a.isEnabled() && this.Tc(a, a.Lb)
};
r.be = function(a, b) {
  a.isEnabled() || this.aa(b, 1, j);
  a.h & 8 && this.aa(b, 8, j);
  a.T & 16 && this.aa(b, 16, !!(a.h & 16));
  a.T & 64 && this.aa(b, 64, !!(a.h & 64))
};
r.Qc = function(a, b) {
  Gd(a, !b, !H && !Ib)
};
r.Ib = function(a, b) {
  this.Rb(a, this.t() + "-rtl", b)
};
r.df = function(a) {
  var b;
  return a.T & 32 && (b = a.fb()) ? jd(b) : m
};
r.Tc = function(a, b) {
  var c;
  if(a.T & 32 && (c = a.fb())) {
    if(!b && a.h & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.h & 32 && a.Te()
    }
    jd(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
r.je = function(a, b) {
  a.style.display = b ? "" : "none"
};
r.la = function(a, b, c) {
  var d = a.b();
  if(d) {
    var f = ug(this, b);
    f && this.Rb(a, f, c);
    this.aa(d, b, c)
  }
};
r.aa = function(a, b, c) {
  rg || (rg = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = rg[b]) && a.setAttribute("aria-" + b, c)
};
r.Rc = function(a, b) {
  var c = this.Sb(a);
  if(c && (dd(c), b)) {
    if(v(b)) {
      gd(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = Xc(c);
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
r.t = q("goog-control");
function sg(a, b) {
  var c = a.t(), d = [c], f = a.t();
  f != c && d.push(f);
  c = b.h;
  for(f = [];c;) {
    var g = c & -c;
    f.push(ug(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.ta) && d.push.apply(d, c);
  H && !K("7") && d.push.apply(d, tg(d));
  return d
}
function tg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  E([], function(d) {
    Xa(d, ra(Ya, a)) && (!b || Ya(d, b)) && c.push(d.join("_"))
  });
  return c
}
function ug(a, b) {
  if(!a.ze) {
    var c = a.t();
    a.ze = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.ze[b]
}
;function vg(a, b) {
  a || e(Error("Invalid class name " + a));
  la(b) || e(Error("Invalid decorator function " + b))
}
var wg = {};
function xg(a, b, c, d, f) {
  if(!H && (!J || !K("525"))) {
    return j
  }
  if(Lb && f) {
    return yg(a)
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
  return yg(a)
}
function yg(a) {
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
function zg(a) {
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
;function Ag(a, b) {
  a && Bg(this, a, b)
}
A(Ag, wc);
r = Ag.prototype;
r.e = k;
r.Ec = k;
r.Jd = k;
r.Fc = k;
r.Pa = -1;
r.Oa = -1;
var Cg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Dg = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Eg = H || 
J && K("525");
r = Ag.prototype;
r.wg = function(a) {
  if(J && (17 == this.Pa && !a.ctrlKey || 18 == this.Pa && !a.altKey)) {
    this.Oa = this.Pa = -1
  }
  Eg && !xg(a.keyCode, this.Pa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Oa = I ? zg(a.keyCode) : a.keyCode
};
r.xg = function() {
  this.Oa = this.Pa = -1
};
r.handleEvent = function(a) {
  var b = a.Aa, c, d;
  H && "keypress" == a.type ? (c = this.Oa, d = 13 != c && 27 != c ? b.keyCode : 0) : J && "keypress" == a.type ? (c = this.Oa, d = 0 <= b.charCode && 63232 > b.charCode && yg(c) ? b.charCode : 0) : Ib ? (c = this.Oa, d = yg(c) ? b.keyCode : 0) : (c = b.keyCode || this.Oa, d = b.charCode || 0, Lb && (63 == d && 224 == c) && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in Cg ? f = Cg[c] : 25 == c && a.shiftKey && (f = 9) : g && g in Dg && (f = Dg[g]);
  a = f == this.Pa;
  this.Pa = f;
  b = new Fg(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.g()
  }
};
r.b = o("e");
function Bg(a, b, c) {
  a.Fc && a.detach();
  a.e = b;
  a.Ec = M(a.e, "keypress", a, c);
  a.Jd = M(a.e, "keydown", a.wg, c, a);
  a.Fc = M(a.e, "keyup", a.xg, c, a)
}
r.detach = function() {
  this.Ec && (qc(this.Ec), qc(this.Jd), qc(this.Fc), this.Fc = this.Jd = this.Ec = k);
  this.e = k;
  this.Oa = this.Pa = -1
};
r.c = function() {
  Ag.f.c.call(this);
  this.detach()
};
function Fg(a, b, c, d) {
  d && this.Wb(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
A(Fg, fc);
function W(a, b, c) {
  Ld.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ma(b);
      if(d = wg[d]) {
        break
      }
      b = b.f ? b.f.constructor : k
    }
    b = d ? la(d.La) ? d.La() : new d : k
  }
  this.l = b;
  this.Sc(a)
}
A(W, Ld);
r = W.prototype;
r.ba = k;
r.h = 0;
r.T = 39;
r.gd = 255;
r.Wg = 0;
r.Lb = j;
r.ta = k;
r.Dd = j;
r.fd = m;
r.Lg = k;
r.fb = function() {
  return this.l.fb(this)
};
function Gg(a, b) {
  b && (a.ta ? Ya(a.ta, b) || a.ta.push(b) : a.ta = [b], a.l.Rb(a, b, j))
}
r.Rb = function(a, b) {
  b ? Gg(this, a) : a && this.ta && ($a(this.ta, a), 0 == this.ta.length && (this.ta = k), this.l.Rb(this, a, m))
};
r.i = function() {
  var a = this.l.i(this);
  this.e = a;
  var b = this.Lg || this.l.tc();
  b && a.setAttribute("role", b);
  this.fd || this.l.Qc(a, m);
  this.Lb || this.l.je(a, m)
};
r.Sb = function() {
  return this.l.Sb(this.b())
};
r.Q = function() {
  W.f.Q.call(this);
  this.l.af(this);
  if(this.T & -2 && (this.Dd && Hg(this, j), this.T & 32)) {
    var a = this.fb();
    if(a) {
      var b = this.zb || (this.zb = new Ag);
      Bg(b, a);
      P(P(P(Pd(this), b, "key", this.We), a, "focus", this.ug), a, "blur", this.Te)
    }
  }
};
function Hg(a, b) {
  var c = Pd(a), d = a.b();
  b ? (P(P(P(P(c, d, "mouseover", a.zc), d, "mousedown", a.xc), d, "mouseup", a.Xe), d, "mouseout", a.yc), H && P(c, d, "dblclick", a.Ve)) : (Jd(Jd(Jd(Jd(c, d, "mouseover", a.zc), d, "mousedown", a.xc), d, "mouseup", a.Xe), d, "mouseout", a.yc), H && Jd(c, d, "dblclick", a.Ve))
}
r.cb = function() {
  W.f.cb.call(this);
  this.zb && this.zb.detach();
  this.Lb && this.isEnabled() && this.l.Tc(this, m)
};
r.c = function() {
  W.f.c.call(this);
  this.zb && (this.zb.g(), delete this.zb);
  delete this.l;
  this.ta = this.ba = k
};
r.Rc = function(a) {
  this.l.Rc(this.b(), a);
  this.Sc(a)
};
r.Sc = aa("ba");
r.Oe = function() {
  var a = this.ba;
  if(!a) {
    return""
  }
  if(!v(a)) {
    if(ga(a)) {
      a = Va(a, kd).join("")
    }else {
      if(Uc && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        ld(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Uc || (a = a.replace(/ +/g, " "));
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
r.Qc = function(a) {
  this.fd = a;
  var b = this.b();
  b && this.l.Qc(b, a)
};
r.je = function(a, b) {
  if(b || this.Lb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.l.je(c, a);
    this.isEnabled() && this.l.Tc(this, a);
    this.Lb = a;
    return j
  }
  return m
};
r.isEnabled = function() {
  return!(this.h & 1)
};
function Ig(a, b) {
  Jg(a, 2, b) && a.la(2, b)
}
r.Id = function() {
  return!!(this.h & 4)
};
r.setActive = function(a) {
  Jg(this, 4, a) && this.la(4, a)
};
r.ge = function(a) {
  Jg(this, 8, a) && this.la(8, a)
};
r.la = function(a, b) {
  this.T & a && b != !!(this.h & a) && (this.l.la(this, a, b), this.h = b ? this.h | a : this.h & ~a)
};
function X(a, b) {
  return!!(a.gd & b) && !!(a.T & b)
}
function Jg(a, b, c) {
  return!!(a.T & b) && !!(a.h & b) != c && (!(a.Wg & b) || a.dispatchEvent(Nd(b, c))) && !a.ca
}
r.zc = function(a) {
  !Kg(a, this.b()) && (this.dispatchEvent("enter") && this.isEnabled() && X(this, 2)) && Ig(this, j)
};
r.yc = function(a) {
  !Kg(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(m), X(this, 2) && Ig(this, m))
};
function Kg(a, b) {
  return!!a.relatedTarget && fd(b, a.relatedTarget)
}
r.xc = function(a) {
  if(this.isEnabled() && (X(this, 2) && Ig(this, j), hc(a) && (!J || !Lb || !a.ctrlKey))) {
    X(this, 4) && this.setActive(j), this.l.df(this) && this.fb().focus()
  }
  !this.fd && (hc(a) && (!J || !Lb || !a.ctrlKey)) && a.preventDefault()
};
r.Xe = function(a) {
  this.isEnabled() && (X(this, 2) && Ig(this, j), this.Id() && (this.kb(a) && X(this, 4)) && this.setActive(m))
};
r.Ve = function(a) {
  this.isEnabled() && this.kb(a)
};
r.kb = function(a) {
  if(X(this, 16)) {
    var b = !(this.h & 16);
    Jg(this, 16, b) && this.la(16, b)
  }
  X(this, 8) && this.ge(j);
  X(this, 64) && (b = !(this.h & 64), Jg(this, 64, b) && this.la(64, b));
  b = new cc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.Yd = a.Yd);
  return this.dispatchEvent(b)
};
r.ug = function() {
  X(this, 32) && Jg(this, 32, j) && this.la(32, j)
};
r.Te = function() {
  X(this, 4) && this.setActive(m);
  X(this, 32) && Jg(this, 32, m) && this.la(32, m)
};
r.We = function(a) {
  return this.Lb && this.isEnabled() && this.Cd(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
r.Cd = function(a) {
  return 13 == a.keyCode && this.kb(a)
};
la(W) || e(Error("Invalid component class " + W));
la(qg) || e(Error("Invalid renderer class " + qg));
var Lg = ma(W);
wg[Lg] = qg;
vg("goog-control", function() {
  return new W(k)
});
function Og() {
}
A(Og, qg);
ea(Og);
r = Og.prototype;
r.tc = q("button");
r.aa = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : Og.f.aa.call(this, a, b, c)
};
r.i = function(a) {
  var b = Og.f.i.call(this, a), c = a.uc();
  c && this.ie(b, c);
  (c = a.vc()) && this.Wc(b, c);
  a.T & 16 && this.aa(b, 16, !!(a.h & 16));
  return b
};
r.vc = da;
r.Wc = da;
r.uc = function(a) {
  return a.title
};
r.ie = function(a, b) {
  a && (a.title = b || "")
};
r.t = q("goog-button");
function Pg() {
}
A(Pg, Og);
ea(Pg);
r = Pg.prototype;
r.tc = function() {
};
r.i = function(a) {
  a.p && m != a.Dd && Hg(a, m);
  a.Dd = m;
  a.gd &= -256;
  a.p && a.h & 32 && e(Error("Component already rendered"));
  a.h & 32 && a.la(32, m);
  a.T &= -33;
  return a.Ca().i("button", {"class":sg(this, a).join(" "), disabled:!a.isEnabled(), title:a.uc() || "", value:a.vc() || ""}, a.Oe() || "")
};
r.af = function(a) {
  P(Pd(a), a.b(), "click", a.kb)
};
r.Qc = da;
r.Ib = da;
r.df = function(a) {
  return a.isEnabled()
};
r.Tc = da;
r.la = function(a, b, c) {
  Pg.f.la.call(this, a, b, c);
  if((a = a.b()) && 1 == b) {
    a.disabled = c
  }
};
r.vc = function(a) {
  return a.value
};
r.Wc = function(a, b) {
  a && (a.value = b)
};
r.aa = da;
function Qg(a, b, c) {
  W.call(this, a, b || Pg.La(), c)
}
A(Qg, W);
r = Qg.prototype;
r.vc = o("Tf");
r.Wc = function(a) {
  this.Tf = a;
  this.l.Wc(this.b(), a)
};
r.uc = o("Pf");
r.ie = function(a) {
  this.Pf = a;
  this.l.ie(this.b(), a)
};
r.c = function() {
  Qg.f.c.call(this);
  delete this.Tf;
  delete this.Pf
};
r.Q = function() {
  Qg.f.Q.call(this);
  if(this.T & 32) {
    var a = this.fb();
    a && P(Pd(this), a, "keyup", this.Cd)
  }
};
r.Cd = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.kb(a) : 32 == a.keyCode
};
vg("goog-button", function() {
  return new Qg(k)
});
function Rg() {
}
A(Rg, Og);
ea(Rg);
r = Rg.prototype;
r.i = function(a) {
  var b = {"class":"goog-inline-block " + sg(this, a).join(" "), title:a.uc() || ""}, b = a.Ca().i("div", b, Sg(this, a.ba, a.Ca()));
  this.be(a, b);
  return b
};
r.tc = q("button");
r.be = function(a, b) {
  a.isEnabled() || this.aa(b, 1, j);
  a.h & 8 && this.aa(b, 8, j);
  a.T & 16 && this.aa(b, 16, j);
  a.h & 64 && this.aa(b, 64, j)
};
r.Sb = function(a) {
  return a && a.firstChild.firstChild
};
function Sg(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.t() + "-outer-box"), c.i("div", "goog-inline-block " + (a.t() + "-inner-box"), b))
}
r.t = q("goog-custom-button");
function Tg(a, b, c) {
  Qg.call(this, a, b || Rg.La(), c)
}
A(Tg, Qg);
vg("goog-custom-button", function() {
  return new Tg(k)
});
var Ug = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function Vg(a) {
  var b = {}, a = "" + a, c = "#" == a.charAt(0) ? a : "#" + a;
  if(Wg.test(c)) {
    return b.Bc = Xg(c), b.type = "hex", b
  }
  a: {
    var d = a.match(Yg);
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
    return b.Bc = Zg(c[0], c[1], c[2]), b.type = "rgb", b
  }
  if(Ug && (c = Ug[a.toLowerCase()])) {
    return b.Bc = c, b.type = "named", b
  }
  e(Error(a + " is not a valid color string"))
}
var $g = /#(.)(.)(.)/;
function Xg(a) {
  Wg.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  4 == a.length && (a = a.replace($g, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function ah(a) {
  a = Xg(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function Zg(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || 0 > a || 255 < a || isNaN(b) || 0 > b || 255 < b || isNaN(c) || 0 > c || 255 < c) && e(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = bh(a.toString(16));
  b = bh(b.toString(16));
  c = bh(c.toString(16));
  return"#" + a + b + c
}
var Wg = /^#(?:[0-9a-f]{3}){1,2}$/i, Yg = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function bh(a) {
  return 1 == a.length ? "0" + a : a
}
;function ch() {
}
ch.prototype.jc = k;
var dh;
function eh() {
}
A(eh, ch);
function fh(a) {
  return(a = gh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function hh(a) {
  var b = {};
  gh(a) && (b[0] = j, b[1] = j);
  return b
}
eh.prototype.Fd = k;
function gh(a) {
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
dh = new eh;
function ih(a) {
  this.headers = new lb;
  this.Mb = a || k
}
A(ih, wc);
ih.prototype.a = T("goog.net.XhrIo");
var jh = /^https?$/i;
r = ih.prototype;
r.Ga = m;
r.k = k;
r.cd = k;
r.Ld = "";
r.ff = "";
r.Xb = "";
r.td = m;
r.Cc = m;
r.Gd = m;
r.ib = m;
r.Zc = 0;
r.ob = k;
r.Cf = "";
r.ih = m;
r.send = function(a, b, c, d) {
  this.k && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Ld = a;
  this.Xb = "";
  this.ff = b;
  this.td = m;
  this.Ga = j;
  this.k = this.Mb ? fh(this.Mb) : fh(dh);
  this.cd = this.Mb ? this.Mb.jc || (this.Mb.jc = hh(this.Mb)) : dh.jc || (dh.jc = hh(dh));
  this.k.onreadystatechange = w(this.sf, this);
  try {
    R(this.a, kh(this, "Opening Xhr")), this.Gd = j, this.k.open(b, a, j), this.Gd = m
  }catch(f) {
    R(this.a, kh(this, "Error opening Xhr: " + f.message));
    lh(this, f);
    return
  }
  var a = c || "", g = this.headers.L();
  d && jb(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.sa("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  jb(g, function(a, b) {
    this.k.setRequestHeader(b, a)
  }, this);
  this.Cf && (this.k.responseType = this.Cf);
  "withCredentials" in this.k && (this.k.withCredentials = this.ih);
  try {
    this.ob && (yc.clearTimeout(this.ob), this.ob = k), 0 < this.Zc && (R(this.a, kh(this, "Will abort after " + this.Zc + "ms if incomplete")), this.ob = yc.setTimeout(w(this.ah, this), this.Zc)), R(this.a, kh(this, "Sending request")), this.Cc = j, this.k.send(a), this.Cc = m
  }catch(i) {
    R(this.a, kh(this, "Send error: " + i.message)), lh(this, i)
  }
};
r.ah = function() {
  "undefined" != typeof ba && this.k && (this.Xb = "Timed out after " + this.Zc + "ms, aborting", R(this.a, kh(this, this.Xb)), this.dispatchEvent("timeout"), this.abort(8))
};
function lh(a, b) {
  a.Ga = m;
  a.k && (a.ib = j, a.k.abort(), a.ib = m);
  a.Xb = b;
  mh(a);
  nh(a)
}
function mh(a) {
  a.td || (a.td = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
r.abort = function() {
  this.k && this.Ga && (R(this.a, kh(this, "Aborting")), this.Ga = m, this.ib = j, this.k.abort(), this.ib = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), nh(this))
};
r.c = function() {
  this.k && (this.Ga && (this.Ga = m, this.ib = j, this.k.abort(), this.ib = m), nh(this, j));
  ih.f.c.call(this)
};
r.sf = function() {
  !this.Gd && !this.Cc && !this.ib ? this.Jg() : oh(this)
};
r.Jg = function() {
  oh(this)
};
function oh(a) {
  if(a.Ga && "undefined" != typeof ba) {
    if(a.cd[1] && 4 == a.Ma() && 2 == ph(a)) {
      R(a.a, kh(a, "Local request error detected and ignored"))
    }else {
      if(a.Cc && 4 == a.Ma()) {
        yc.setTimeout(w(a.sf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.Ma()) {
          R(a.a, kh(a, "Request complete"));
          a.Ga = m;
          try {
            var b = ph(a), c, d;
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
                var g = ("" + a.Ld).match(df)[1] || k;
                if(!g && self.location) {
                  var i = self.location.protocol, g = i.substr(0, i.length - 1)
                }
                f = !jh.test(g ? g.toLowerCase() : "")
              }
              c = f
            }
            if(c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success")
            }else {
              var l;
              try {
                l = 2 < a.Ma() ? a.k.statusText : ""
              }catch(n) {
                R(a.a, "Can not get status: " + n.message), l = ""
              }
              a.Xb = l + " [" + ph(a) + "]";
              mh(a)
            }
          }finally {
            nh(a)
          }
        }
      }
    }
  }
}
function nh(a, b) {
  if(a.k) {
    var c = a.k, d = a.cd[0] ? da : k;
    a.k = k;
    a.cd = k;
    a.ob && (yc.clearTimeout(a.ob), a.ob = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(f) {
      le(a.a, "Problem encountered resetting onreadystatechange: " + f.message)
    }
  }
}
r.Id = function() {
  return!!this.k
};
r.Ma = function() {
  return this.k ? this.k.readyState : 0
};
function ph(a) {
  try {
    return 2 < a.Ma() ? a.k.status : -1
  }catch(b) {
    return Q(a.a, "Can not get status: " + b.message), -1
  }
}
r.getResponseHeader = function(a) {
  return this.k && 4 == this.Ma() ? this.k.getResponseHeader(a) : h
};
function kh(a, b) {
  return b + " [" + a.ff + " " + a.Ld + " " + ph(a) + "]"
}
;var qh = !(H || J && !K("420+"));
function rh(a, b) {
  this.$c = a;
  this.oa = b
}
A(rh, L);
r = rh.prototype;
r.q = k;
r.Sa = -1;
r.Se = m;
r.Ye = "Content-Length Server Date Expires Keep-Alive Content-Type Transfer-Encoding Cache-Control".split(" ");
function sh(a) {
  var b = Gf(a.Fe), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.oa, c, b), 1 != b && a.g()) : a.g()
}
r.zg = function() {
  sh(this);
  if(!this.ca) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.oa);
    this.g()
  }
};
r.Og = function() {
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
      if(b.R() && (this.Se = j, a.__XHRMaster_ongotheaders(this.oa, pb(b)), this.ca)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.oa, this.Sa);
    qh && 3 == this.Sa && sh(this)
  }else {
    this.g()
  }
};
r.Od = function(a, b, c) {
  this.q = new ih;
  M(this.q, "readystatechange", w(this.Og, this));
  M(this.q, "complete", w(this.zg, this));
  this.q.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Fe = new Ff(this.q.k, 1048576)
};
r.c = function() {
  rh.f.c.call(this);
  delete this.Fe;
  this.q && this.q.g();
  delete this.$c.dc[this.oa];
  delete this.$c
};
function th() {
  this.dc = {}
}
A(th, L);
th.prototype.Eg = function(a, b, c, d) {
  var f = new rh(this, a);
  this.dc[a] = f;
  f.Od(b, c, d)
};
th.prototype.kg = function(a) {
  (a = this.dc[a]) && a.g()
};
th.prototype.c = function() {
  th.f.c.call(this);
  for(var a = ua(this.dc);a.length;) {
    a.pop().g()
  }
  delete this.dc
};
var uh = new th;
t.__XHRSlave_makeRequest = w(uh.Eg, uh);
t.__XHRSlave_dispose = w(uh.kg, uh);
var vh = T("cw.net.demo");
function wh() {
}
wh.prototype.Pe = function() {
  return Boolean(Number((new ff(document.location)).Z.get("httpStreaming", "0"))) ? 2 : 1
};
function xh(a) {
  this.o = a
}
var yh = /\s*;\s*/;
r = xh.prototype;
r.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && J) {
    var b = "COOKIES_TEST_" + z();
    zh.set(b, "1");
    if(!this.get(b)) {
      return m
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
  c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(z() + 1E3 * c)).toUTCString();
  this.o.cookie = a + "=" + b + f + d + c + g
};
r.get = function(a, b) {
  for(var c = a + "=", d = (this.o.cookie || "").split(yh), f = 0, g;g = d[f];f++) {
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
  var d = this.sa(a);
  this.set(a, "", 0, b, c);
  return d
};
r.ua = function() {
  return Ah(this).keys
};
r.N = function() {
  return Ah(this).Uf
};
r.Na = function() {
  return!this.o.cookie
};
r.R = function() {
  return!this.o.cookie ? 0 : (this.o.cookie || "").split(yh).length
};
r.sa = function(a) {
  return u(this.get(a))
};
r.nc = function(a) {
  for(var b = Ah(this).Uf, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return j
    }
  }
  return m
};
r.clear = function() {
  for(var a = Ah(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b])
  }
};
function Ah(a) {
  for(var a = (a.o.cookie || "").split(yh), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), -1 == d ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{keys:b, Uf:c}
}
var zh = new xh(document);
zh.Rh = 3950;
function Bh() {
  this.zf = z()
}
var Ch = new Bh;
Bh.prototype.set = aa("zf");
Bh.prototype.reset = function() {
  this.set(z())
};
Bh.prototype.get = o("zf");
function Dh(a) {
  this.Mg = a || "";
  this.Vg = Ch
}
Dh.prototype.If = j;
Dh.prototype.Tg = j;
Dh.prototype.Sg = j;
Dh.prototype.Jf = m;
function Eh(a) {
  return 10 > a ? "0" + a : "" + a
}
function Fh(a, b) {
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
function Gh(a) {
  Dh.call(this, a)
}
A(Gh, Dh);
Gh.prototype.Jf = j;
function Hh(a) {
  this.Ng = w(this.Yf, this);
  this.Ne = new Gh;
  this.cf = this.Ne.If = m;
  this.e = a;
  this.mg = this.e.ownerDocument || this.e.document;
  var a = Vc(this.e), b = k;
  if(H) {
    b = a.o.createStyleSheet(), Ed(b)
  }else {
    var c = Yc(a.o, "head", h, h)[0];
    c || (b = Yc(a.o, "body", h, h)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    Ed(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
Hh.prototype.Yf = function(a) {
  var b = 100 >= this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight, c = this.mg.createElement("div");
  c.className = "logmsg";
  var d = this.Ne, f;
  switch(a.Bb.value) {
    case ce.value:
      f = "dbg-sh";
      break;
    case de.value:
      f = "dbg-sev";
      break;
    case ee.value:
      f = "dbg-w";
      break;
    case fe.value:
      f = "dbg-i";
      break;
    default:
      f = "dbg-f"
  }
  var g = [];
  g.push(d.Mg, " ");
  if(d.If) {
    var i = new Date(a.Of);
    g.push("[", Eh(i.getFullYear() - 2E3) + Eh(i.getMonth() + 1) + Eh(i.getDate()) + " " + Eh(i.getHours()) + ":" + Eh(i.getMinutes()) + ":" + Eh(i.getSeconds()) + "." + Eh(Math.floor(i.getMilliseconds() / 10)), "] ")
  }
  d.Tg && g.push("[", Na(Fh(a, d.Vg.get())), "s] ");
  d.Sg && g.push("[", Ha(a.Dg), "] ");
  g.push('<span class="', f, '">', Ga(Na(Ha(a.of))));
  d.Jf && a.wd && g.push("<br>", Ga(Na(a.vd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  b && (this.e.scrollTop = this.e.scrollHeight)
};
Hh.prototype.clear = function() {
  this.e.innerHTML = ""
};
function Ih(a, b, c, d, f, g) {
  6 == arguments.length ? this.setTransform(a, b, c, d, f, g) : (0 != arguments.length && e(Error("Insufficient matrix parameters")), this.fa = this.ia = 1, this.Y = this.ga = this.ha = this.ja = 0)
}
r = Ih.prototype;
r.L = function() {
  return new Ih(this.fa, this.Y, this.ga, this.ia, this.ha, this.ja)
};
r.setTransform = function(a, b, c, d, f, g) {
  (!ka(a) || !ka(b) || !ka(c) || !ka(d) || !ka(f) || !ka(g)) && e(Error("Invalid transform parameters"));
  this.fa = a;
  this.Y = b;
  this.ga = c;
  this.ia = d;
  this.ha = f;
  this.ja = g;
  return this
};
r.scale = function(a, b) {
  this.fa *= a;
  this.Y *= a;
  this.ga *= b;
  this.ia *= b;
  return this
};
r.translate = function(a, b) {
  this.ha += a * this.fa + b * this.ga;
  this.ja += a * this.Y + b * this.ia;
  return this
};
r.rotate = function(a, b, c) {
  var d = new Ih, f = Math.cos(a), a = Math.sin(a), b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f), c = this.fa, d = this.ga;
  this.fa = b.fa * c + b.Y * d;
  this.ga = b.ga * c + b.ia * d;
  this.ha += b.ha * c + b.ja * d;
  c = this.Y;
  d = this.ia;
  this.Y = b.fa * c + b.Y * d;
  this.ia = b.ga * c + b.ia * d;
  this.ja += b.ha * c + b.ja * d;
  return this
};
r.toString = function() {
  return"matrix(" + [this.fa, this.Y, this.ga, this.ia, this.ha, this.ja].join() + ")"
};
r.W = function(a) {
  return this == a ? j : !a ? m : this.fa == a.fa && this.ga == a.ga && this.ha == a.ha && this.Y == a.Y && this.ia == a.ia && this.ja == a.ja
};
function Y(a, b) {
  this.e = a;
  this.va = b;
  this.qd = m
}
A(Y, wc);
r = Y.prototype;
r.va = k;
r.e = k;
r.Qf = k;
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
  this.va.de(this, c);
  this.fill = d;
  this.va.ce(this, d)
}
A(Z, Y);
Z.prototype.fill = k;
Z.prototype.qe = k;
Z.prototype.rg = o("fill");
Z.prototype.tg = o("qe");
function Jh(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
A(Jh, Z);
function Kh(a, b) {
  Y.call(this, a, b)
}
A(Kh, Y);
function Lh(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
A(Lh, Z);
function Mh(a, b) {
  Y.call(this, a, b)
}
A(Mh, Y);
function Nh(a, b) {
  Y.call(this, a, b)
}
A(Nh, Kh);
Nh.prototype.clear = function() {
  dd(this.b())
};
Nh.prototype.$ = function(a, b) {
  Oh(this.b(), {width:a, height:b})
};
function Ph(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
A(Ph, Lh);
function Qh(a, b) {
  Y.call(this, a, b)
}
A(Qh, Mh);
Qh.prototype.$ = function(a, b) {
  Oh(this.b(), {width:a, height:b})
};
function Rh() {
}
;function Sh(a, b) {
  this.ra = a;
  this.Yb = b == k ? 1 : b
}
A(Sh, Rh);
function Th() {
  this.qb = 1;
  this.ra = "black"
}
;function Uh() {
  this.B = [];
  this.d = [];
  this.qa = []
}
Uh.prototype.tb = k;
Uh.prototype.U = k;
Uh.prototype.Jb = j;
var Vh = [2, 2, 6, 6, 0];
r = Uh.prototype;
r.clear = function() {
  this.B.length = 0;
  this.d.length = 0;
  this.qa.length = 0;
  delete this.tb;
  delete this.U;
  delete this.Jb;
  return this
};
r.moveTo = function(a, b) {
  0 == this.B[this.B.length - 1] ? this.qa.length -= 2 : (this.B.push(0), this.d.push(1));
  this.qa.push(a, b);
  this.U = this.tb = [a, b];
  return this
};
r.lineTo = function(a) {
  var b = this.B[this.B.length - 1];
  b == k && e(Error("Path cannot start with lineTo"));
  1 != b && (this.B.push(1), this.d.push(0));
  for(b = 0;b < arguments.length;b += 2) {
    var c = arguments[b], d = arguments[b + 1];
    this.qa.push(c, d)
  }
  this.d[this.d.length - 1] += b / 2;
  this.U = [c, d];
  return this
};
r.Ee = function(a) {
  var b = this.B[this.B.length - 1];
  b == k && e(Error("Path cannot start with curve"));
  2 != b && (this.B.push(2), this.d.push(0));
  for(b = 0;b < arguments.length;b += 6) {
    var c = arguments[b + 4], d = arguments[b + 5];
    this.qa.push(arguments[b], arguments[b + 1], arguments[b + 2], arguments[b + 3], c, d)
  }
  this.d[this.d.length - 1] += b / 6;
  this.U = [c, d];
  return this
};
r.close = function() {
  var a = this.B[this.B.length - 1];
  a == k && e(Error("Path cannot start with close"));
  4 != a && (this.B.push(4), this.d.push(1), this.U = this.tb);
  return this
};
r.arcTo = function(a, b, c, d) {
  var f = this.U[0] - a * Math.cos(Le(c)) + a * Math.cos(Le(c + d)), g = this.U[1] - b * Math.sin(Le(c)) + b * Math.sin(Le(c + d));
  this.B.push(3);
  this.d.push(1);
  this.qa.push(a, b, c, d, f, g);
  this.Jb = m;
  this.U = [f, g];
  return this
};
r.$f = function(a, b, c, d) {
  for(var f = this.U[0] - a * Math.cos(Le(c)), g = this.U[1] - b * Math.sin(Le(c)), i = Le(d), d = Math.ceil(2 * (Math.abs(i) / Math.PI)), i = i / d, c = Le(c), l = 0;l < d;l++) {
    var n = Math.cos(c), p = Math.sin(c), x = 4 / 3 * Math.sin(i / 2) / (1 + Math.cos(i / 2)), s = f + (n - x * p) * a, y = g + (p + x * n) * b, c = c + i, n = Math.cos(c), p = Math.sin(c);
    this.Ee(s, y, f + (n + x * p) * a, g + (p - x * n) * b, f + n * a, g + p * b)
  }
  return this
};
function Wh(a, b) {
  for(var c = a.qa, d = 0, f = 0, g = a.B.length;f < g;f++) {
    var i = a.B[f], l = Vh[i] * a.d[f];
    b(i, c.slice(d, d + l));
    d += l
  }
}
r.L = function() {
  var a = new this.constructor;
  a.B = this.B.concat();
  a.d = this.d.concat();
  a.qa = this.qa.concat();
  a.tb = this.tb && this.tb.concat();
  a.U = this.U && this.U.concat();
  a.Jb = this.Jb;
  return a
};
var Xh = {};
Xh[0] = Uh.prototype.moveTo;
Xh[1] = Uh.prototype.lineTo;
Xh[4] = Uh.prototype.close;
Xh[2] = Uh.prototype.Ee;
Xh[3] = Uh.prototype.$f;
Uh.prototype.Na = function() {
  return 0 == this.B.length
};
function Yh(a, b, c, d, f) {
  Ld.call(this, f);
  this.width = a;
  this.height = b;
  this.ma = c || k;
  this.Pb = d || k
}
A(Yh, Ld);
r = Yh.prototype;
r.F = k;
r.Ia = 0;
r.ab = 0;
r.Re = function() {
  return this.X()
};
r.X = function() {
  return this.p ? Cd(this.b()) : ka(this.width) && ka(this.height) ? new N(this.width, this.height) : k
};
function Zh(a) {
  var b = a.X();
  return b ? b.width / (a.ma ? new N(a.ma, a.Pb) : a.X()).width : 0
}
;function $h(a, b, c, d, f) {
  Yh.call(this, a, b, c, d, f);
  this.He = {};
  this.ue = J && !K(526);
  this.gb = new Hd(this)
}
var ai;
A($h, Yh);
function bi(a, b, c) {
  a = a.M.o.createElementNS("http://www.w3.org/2000/svg", b);
  c && Oh(a, c);
  return a
}
function Oh(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
r = $h.prototype;
r.sb = function(a, b) {
  (b || this.F).b().appendChild(a.b())
};
r.ce = function(a, b) {
  var c = a.b();
  b instanceof Sh ? (c.setAttribute("fill", b.ra), c.setAttribute("fill-opacity", b.Yb)) : c.setAttribute("fill", "none")
};
r.de = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.ra);
    var d = b.qb;
    v(d) && -1 != d.indexOf("px") ? c.setAttribute("stroke-width", parseFloat(d) / Zh(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
r.i = function() {
  var a = bi(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = bi(this, "g");
  this.sd = bi(this, "defs");
  this.F = new Nh(b, this);
  a.appendChild(this.sd);
  a.appendChild(b);
  this.e = a;
  if(this.ma || this.Ia || this.ab) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.ue ? this.ad() : this.b().setAttribute("viewBox", this.Ia + " " + this.ab + " " + (this.ma ? this.ma + " " + this.Pb : ""))
  }
};
r.ad = function() {
  if(this.p && (this.ma || this.Ia || !this.ab)) {
    var a = this.X();
    if(0 == a.width) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.Ia, c = -this.ab, d = a.width / this.ma, a = a.height / this.Pb;
      this.F.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
r.$ = function(a, b) {
  Ad(this.b(), a, b)
};
r.X = function() {
  if(!I) {
    return this.p ? Cd(this.b()) : $h.f.X.call(this)
  }
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.p && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = Cd(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Cd(f), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
r.clear = function() {
  this.F.clear();
  dd(this.sd);
  this.He = {}
};
r.oc = function(a, b, c, d, f, g, i) {
  a = bi(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new Ph(a, this, f, g);
  this.sb(f, i);
  return f
};
r.drawImage = function(a, b, c, d, f, g) {
  a = bi(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new Qh(a, this);
  this.sb(f, g);
  return f
};
r.Q = function() {
  var a = this.X();
  $h.f.Q.call(this);
  a || this.dispatchEvent("resize");
  if(this.ue) {
    var a = this.width, b = this.height;
    "string" == typeof a && (-1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%")) && P(this.gb, ci(), zc, this.ad);
    this.ad()
  }
};
r.cb = function() {
  $h.f.cb.call(this);
  this.ue && Jd(this.gb, ci(), zc, this.ad)
};
r.c = function() {
  delete this.He;
  delete this.sd;
  delete this.F;
  $h.f.c.call(this)
};
function ci() {
  ai || (ai = new xc(400), ai.start());
  return ai
}
;function di() {
  return this.e = this.va.M.b(this.S) || this.e
}
function ei(a, b) {
  this.S = a.id;
  Y.call(this, a, b)
}
A(ei, Kh);
ei.prototype.b = di;
ei.prototype.clear = function() {
  dd(this.b())
};
ei.prototype.$ = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  this.va.F != this && (c.coordorigin = "0 0")
};
function fi(a, b, c, d, f, g, i, l) {
  this.S = a.id;
  Z.call(this, a, b, i, l)
}
A(fi, Lh);
fi.prototype.b = di;
function gi(a, b) {
  this.S = a.id;
  Y.call(this, a, b)
}
A(gi, Mh);
gi.prototype.b = di;
gi.prototype.$ = function(a, b) {
  var c = this.b().style;
  c.width = hi(a) + "px";
  c.height = hi(b) + "px"
};
function ii(a, b, c, d, f) {
  Yh.call(this, a, b, c, d, f);
  this.gb = new Hd(this)
}
A(ii, Yh);
var ji = document.documentMode && 8 <= document.documentMode;
function hi(a) {
  return Math.round(100 * (parseFloat(a.toString()) - 0.5))
}
function $(a) {
  return Math.round(100 * parseFloat(a.toString()))
}
function ki(a, b) {
  var c = a.M.createElement("g_vml_:" + b);
  c.id = "goog_" + Pa++;
  return c
}
function li(a) {
  ji && a.p && (a.b().innerHTML = a.b().innerHTML)
}
ii.prototype.sb = function(a, b) {
  (b || this.F).b().appendChild(a.b());
  li(this)
};
ii.prototype.ce = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    "fill" == f.tagName && c.removeChild(f)
  }
  b instanceof Sh ? "transparent" == b.ra ? c.filled = m : 1 != b.Yb ? (c.filled = j, d = ki(this, "fill"), d.opacity = Math.round(100 * b.Yb) + "%", d.color = b.ra, c.appendChild(d)) : (c.filled = j, c.fillcolor = b.ra) : c.filled = m;
  li(this)
};
ii.prototype.de = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = j;
    var d = b.qb, d = v(d) && -1 == d.indexOf("px") ? parseFloat(d) : d * Zh(this), f = c.getElementsByTagName("stroke")[0];
    1 > d ? (f = f || ki(this, "stroke"), f.opacity = d, f.yi = "1px", f.color = b.ra, c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.ra, c.strokeweight = d + "px")
  }else {
    c.stroked = m
  }
  li(this)
};
function mi(a, b, c, d, f) {
  var g = a.style;
  g.position = "absolute";
  g.left = hi(b) + "px";
  g.top = hi(c) + "px";
  g.width = $(d) + "px";
  g.height = $(f) + "px";
  "shape" == a.tagName && (a.coordsize = $(d) + " " + $(f))
}
try {
  eval("document.namespaces")
}catch(ni) {
}
r = ii.prototype;
r.i = function() {
  var a = this.M.o;
  a.namespaces.g_vml_ || (ji ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}");
  var a = this.width, b = this.height, c = this.M.i("div", {style:"overflow:hidden;position:relative;width:" + (v(a) && Ea(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (v(b) && Ea(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = ki(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.ma ? $(this.ma) + " " + $(this.Pb) : $(a) + " " + $(b);
  d.coordorigin = u(this.Ia) ? $(this.Ia) + " " + $(this.ab) : "0 0";
  c.appendChild(d);
  this.F = new ei(d, this);
  M(c, "resize", w(this.Bd, this))
};
r.Bd = function() {
  var a = Cd(this.b()), b = this.F.b().style;
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
r.$ = function(a, b) {
  Ad(this.b(), a, b)
};
r.X = function() {
  var a = this.b();
  return new N(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
r.clear = function() {
  this.F.clear()
};
r.oc = function(a, b, c, d, f, g, i) {
  var l = ki(this, "oval");
  mi(l, a - c, b - d, 2 * c, 2 * d);
  a = new fi(l, this, 0, 0, 0, 0, f, g);
  this.sb(a, i);
  return a
};
r.drawImage = function(a, b, c, d, f, g) {
  var i = ki(this, "image");
  mi(i, a, b, c, d);
  ji ? i.src = f : i.setAttribute("src", f);
  a = new gi(i, this);
  this.sb(a, g);
  return a
};
r.Q = function() {
  ii.f.Q.call(this);
  this.Bd();
  li(this)
};
r.c = function() {
  this.F = k;
  ii.f.c.call(this)
};
function oi(a) {
  Y.call(this, k, a);
  this.P = []
}
A(oi, Kh);
oi.prototype.clear = function() {
  this.P.length && (this.P.length = 0, pi(this.va))
};
oi.prototype.$ = function() {
};
oi.prototype.appendChild = function(a) {
  this.P.push(a)
};
oi.prototype.za = function() {
  for(var a = 0, b = this.P.length;a < b;a++) {
    qi(this.va, this.P[a])
  }
};
function ri(a, b, c, d, f, g, i, l) {
  Z.call(this, a, b, i, l);
  this.gg = c;
  this.hg = d;
  this.Df = f;
  this.Ef = g;
  this.K = new Uh;
  this.K.clear();
  this.K.moveTo(this.gg + this.Df * Math.cos(Le(0)), this.hg + this.Ef * Math.sin(Le(0)));
  this.K.arcTo(this.Df, this.Ef, 0, 360);
  this.K.close();
  this.Kg = new si(k, b, this.K, i, l)
}
A(ri, Lh);
ri.prototype.za = function(a) {
  this.Kg.za(a)
};
function si(a, b, c, d, f) {
  Z.call(this, a, b, d, f);
  this.Hb(c)
}
A(si, Jh);
si.prototype.Qb = m;
si.prototype.Hb = function(a) {
  if(!a.Jb) {
    if(a.Jb) {
      a = a.L()
    }else {
      var b = new Uh;
      Wh(a, function(a, d) {
        Xh[a].apply(b, d)
      });
      a = b
    }
  }
  this.K = a;
  this.Qb && pi(this.va)
};
si.prototype.za = function(a) {
  this.Qb = j;
  a.beginPath();
  Wh(this.K, function(b, c) {
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
function ti(a, b, c, d, f, g, i) {
  Y.call(this, a, b);
  this.lh = c;
  this.nh = d;
  this.ve = f;
  this.Ad = g;
  this.Ug = i
}
A(ti, Mh);
ti.prototype.Qb = m;
ti.prototype.$ = function(a, b) {
  this.ve = a;
  this.Ad = b;
  this.Qb && pi(this.va)
};
ti.prototype.za = function(a) {
  this.$e ? (this.ve && this.Ad && a.drawImage(this.$e, this.lh, this.nh, this.ve, this.Ad), this.Qb = j) : (a = new Image, a.onload = w(this.vg, this, a), a.src = this.Ug)
};
ti.prototype.vg = function(a) {
  this.$e = a;
  pi(this.va)
};
function ui(a, b, c, d, f) {
  Yh.call(this, a, b, c, d, f)
}
A(ui, Yh);
r = ui.prototype;
r.ce = function() {
  pi(this)
};
r.de = function() {
  pi(this)
};
function vi(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.Qf ? b.Qf.L() : new Ih, f = d.ha, g = d.ja;
  (f || g) && c.translate(f, g);
  (d = d.Y) && c.rotate(Math.asin(d))
}
r.i = function() {
  var a = this.M.i("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Ob = this.M.i("canvas");
  a.appendChild(this.Ob);
  this.Cg = this.F = new oi(this);
  this.Qg = 0;
  wi(this)
};
r.getContext = function() {
  this.b() || this.i();
  this.ub || (this.ub = this.Ob.getContext("2d"), this.ub.save());
  return this.ub
};
r.$ = function(a, b) {
  this.width = a;
  this.height = b;
  wi(this);
  pi(this)
};
r.X = function() {
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.p && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = Cd(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Cd(f), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
function wi(a) {
  Ad(a.b(), a.width, a.height);
  var b = a.X();
  b && (Ad(a.Ob, b.width, b.height), a.Ob.width = b.width, a.Ob.height = b.height, a.ub = k)
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
function pi(a) {
  if(!a.xi && a.p) {
    a.reset();
    if(a.ma) {
      var b = a.X();
      a.getContext().scale(b.width / a.ma, b.height / a.Pb)
    }
    (a.Ia || a.ab) && a.getContext().translate(-a.Ia, -a.ab);
    vi(a, a.F);
    a.F.za(a.ub);
    a.getContext().restore()
  }
}
function qi(a, b) {
  var c = a.getContext();
  vi(a, b);
  if(!b.rg || !b.tg) {
    b.za(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof Sh) {
        0 != d.Yb && (c.globalAlpha = d.Yb, c.fillStyle = d.ra, b.za(c), c.fill(), c.globalAlpha = 1)
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
      b.za(c), c.strokeStyle = d.ra, d = d.qb, v(d) && -1 != d.indexOf("px") && (d = parseFloat(d) / Zh(a)), c.lineWidth = d, c.stroke()
    }
  }
  a.getContext().restore()
}
r.sb = function(a, b) {
  this.append(a, b)
};
r.append = function(a, b) {
  b = b || this.F;
  b.appendChild(a);
  this.p && (!this.Qg && !(b != this.F && b != this.Cg)) && qi(this, a)
};
r.oc = function(a, b, c, d, f, g, i) {
  a = new ri(k, this, a, b, c, d, f, g);
  this.append(a, i);
  return a
};
r.drawImage = function(a, b, c, d, f, g) {
  a = new ti(k, this, a, b, c, d, f);
  this.append(a, g);
  return a
};
r.c = function() {
  this.ub = k;
  ui.f.c.call(this)
};
r.Q = function() {
  var a = this.X();
  ui.f.Q.call(this);
  a || (wi(this), this.dispatchEvent("resize"));
  pi(this)
};
function xi(a) {
  this.w = [];
  yi(this, a)
}
A(xi, wc);
r = xi.prototype;
r.Xa = k;
r.ae = k;
function yi(a, b) {
  b && (E(b, function(a) {
    this.cc(a, m)
  }, a), cb(a.w, b))
}
r.zd = o("Xa");
r.Qe = function() {
  return bb(this.w)
};
r.Vc = function(a) {
  a != this.Xa && (this.cc(this.Xa, m), this.Xa = a, this.cc(a, j));
  this.dispatchEvent("select")
};
r.yd = function() {
  return this.Xa ? Ta(this.w, this.Xa) : -1
};
r.he = function(a) {
  this.Vc(this.w[a] || k)
};
r.clear = function() {
  Za(this.w);
  this.Xa = k
};
r.c = function() {
  xi.f.c.call(this);
  delete this.w;
  this.Xa = k
};
r.cc = function(a, b) {
  a && ("function" == typeof this.ae ? this.ae(a, b) : "function" == typeof a.ge && a.ge(b))
};
function zi() {
}
A(zi, qg);
ea(zi);
var Ai = 0;
zi.prototype.i = function(a) {
  var b = sg(this, a);
  return a.Ca().i("div", b ? b.join(" ") : k, Bi(this, a.ba, a.Re(), a.Ca()))
};
function Bi(a, b, c, d) {
  for(var f = [], g = 0, i = 0;g < c.height;g++) {
    for(var l = [], n = 0;n < c.width;n++) {
      var p = b && b[i++];
      l.push(Ci(a, p, d))
    }
    f.push(d.i("tr", a.t() + "-row", l))
  }
  return a.De(f, d)
}
zi.prototype.De = function(a, b) {
  var c = b.i("table", this.t() + "-table", b.i("tbody", this.t() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  c.setAttribute("role", "grid");
  return c
};
function Ci(a, b, c) {
  a = c.i("td", {"class":a.t() + "-cell", id:a.t() + "-cell-" + Ai++}, b);
  a.setAttribute("role", "gridcell");
  return a
}
zi.prototype.Rc = function(a, b) {
  if(a) {
    var c = Yc(document, "tbody", this.t() + "-body", a)[0];
    if(c) {
      var d = 0;
      E(c.rows, function(a) {
        E(a.cells, function(a) {
          dd(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = Vc(a), i = c.rows[0].cells.length;d < b.length;) {
          var l = b[d++];
          f.push(Ci(this, l, g));
          f.length == i && (l = g.i("tr", this.t() + "-row", f), c.appendChild(l), f.length = 0)
        }
        if(0 < f.length) {
          for(;f.length < i;) {
            f.push(Ci(this, "", g))
          }
          l = g.i("tr", this.t() + "-row", f);
          c.appendChild(l)
        }
      }
    }
    Gd(a, j, I)
  }
};
function Di(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && Ya(Qc(c), a.t() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function Ei(a, b, c, d) {
  c && (c = c.parentNode, a = a.t() + "-cell-hover", d ? Rc(c, a) : Sc(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id))
}
zi.prototype.t = q("goog-palette");
function Fi(a, b, c) {
  W.call(this, a, b || zi.La(), c)
}
A(Fi, W);
r = Fi.prototype;
r.n = k;
r.hb = -1;
r.I = k;
r.c = function() {
  Fi.f.c.call(this);
  this.I && (this.I.g(), this.I = k);
  this.n = k
};
r.Sc = function(a) {
  Fi.f.Sc.call(this, a);
  Gi(this);
  this.I ? (this.I.clear(), yi(this.I, a)) : (this.I = new xi(a), this.I.ae = w(this.cc, this), P(Pd(this), this.I, "select", this.yg));
  this.hb = -1
};
r.Oe = q(k);
r.zc = function(a) {
  Fi.f.zc.call(this, a);
  var b = Di(this.l, this, a.target);
  if((!b || !a.relatedTarget || !fd(b, a.relatedTarget)) && b != Hi(this)) {
    a = this.ba, Ii(this, a ? Ta(a, b) : -1)
  }
};
r.yc = function(a) {
  Fi.f.yc.call(this, a);
  var b = Di(this.l, this, a.target);
  (!b || !a.relatedTarget || !fd(b, a.relatedTarget)) && b == Hi(this) && Ei(this.l, this, b, m)
};
r.xc = function(a) {
  Fi.f.xc.call(this, a);
  if(this.Id() && (a = Di(this.l, this, a.target), a != Hi(this))) {
    var b = this.ba;
    Ii(this, b ? Ta(b, a) : -1)
  }
};
r.kb = function() {
  var a = Hi(this);
  return a ? (this.Vc(a), this.dispatchEvent("action")) : m
};
r.We = function(a) {
  var b = this.ba, b = b ? b.length : 0, c = this.n.width;
  if(0 == b || !this.isEnabled()) {
    return m
  }
  if(13 == a.keyCode || 32 == a.keyCode) {
    return this.kb(a)
  }
  if(36 == a.keyCode) {
    return Ii(this, 0), j
  }
  if(35 == a.keyCode) {
    return Ii(this, b - 1), j
  }
  var d = 0 > this.hb ? this.yd() : this.hb;
  switch(a.keyCode) {
    case 37:
      -1 == d && (d = b);
      if(0 < d) {
        return Ii(this, d - 1), a.preventDefault(), j
      }
      break;
    case 39:
      if(d < b - 1) {
        return Ii(this, d + 1), a.preventDefault(), j
      }
      break;
    case 38:
      -1 == d && (d = b + c - 1);
      if(d >= c) {
        return Ii(this, d - c), a.preventDefault(), j
      }
      break;
    case 40:
      if(-1 == d && (d = -c), d < b - c) {
        return Ii(this, d + c), a.preventDefault(), j
      }
  }
  return m
};
r.yg = function() {
};
r.Re = o("n");
r.$ = function(a, b) {
  this.b() && e(Error("Component already rendered"));
  this.n = ka(a) ? new N(a, b) : a;
  Gi(this)
};
function Hi(a) {
  var b = a.ba;
  return b && b[a.hb]
}
function Ii(a, b) {
  b != a.hb && (Ji(a, a.hb, m), a.hb = b, Ji(a, b, j))
}
r.yd = function() {
  return this.I ? this.I.yd() : -1
};
r.zd = function() {
  return this.I ? this.I.zd() : k
};
r.he = function(a) {
  this.I && this.I.he(a)
};
r.Vc = function(a) {
  this.I && this.I.Vc(a)
};
function Ji(a, b, c) {
  if(a.b()) {
    var d = a.ba;
    d && (0 <= b && b < d.length) && Ei(a.l, a, d[b], c)
  }
}
r.cc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.l.t() + "-cell-selected";
    b ? Rc(c, d) : Sc(c, d)
  }
};
function Gi(a) {
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
;function Ki(a, b, c) {
  this.mc = a || [];
  Fi.call(this, k, b || zi.La(), c);
  this.mc = this.mc;
  this.Ic = k;
  this.Rc(Va(this.mc, function(a) {
    var b = this.Ca().i("div", {"class":this.l.t() + "-colorswatch", style:"background-color:" + a});
    b.title = "#" == a.charAt(0) ? "RGB (" + ah(a).join(", ") + ")" : a;
    return b
  }, this))
}
A(Ki, Fi);
Ki.prototype.Ic = k;
function Li(a) {
  if(a) {
    try {
      return Vg(a).Bc
    }catch(b) {
    }
  }
  return k
}
;function Mi(a) {
  a = "" + a;
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
;var Ni, Oi, Pi, Qi, Ri, Si = T("whiteboard.logger");
window.onerror = function(a, b, c) {
  le(Si, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Ti() {
}
Ti.prototype.Lf = function(a) {
  this.C = a;
  cg(this.C, "subprotocol:whiteboard")
};
Ti.prototype.Kf = function(a, b) {
  Si.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  Ui = k
};
Ti.prototype.Mf = function(a) {
  var a = Mi(a), b = a[0], c = a[1];
  "Point" == b ? Ni.oc(c.x, c.y, 5, 5, new Th, new Sh(c.color), h) : "ClearBoard" == b ? (Ni.g(), Vi()) : Q(Si, "Strange message from server: " + G(a))
};
Ti.prototype.reset = function(a) {
  Si.info("resetting with reason: " + a);
  this.C.reset(a)
};
var Ui = k, Wi = new Nc(t.window);
function Xi() {
  Ui && (Ui.reset("idle timeout fired"), Ui = k)
}
var Yi = k;
function Zi() {
  Yi != k && Wi.H.clearTimeout(Yi);
  Ui && (Yi = Wi.H.setTimeout(Xi, 2592E5))
}
M(window, ["click", "focus", "keydown", "keypress"], Zi, j);
function $i() {
  Ni.g();
  Vi();
  var a = Ui;
  Si.info("Telling server to clear the board.");
  cg(a.C, ya(["ClearBoard", k]))
}
function aj(a) {
  var b = new fc(a), a = b.offsetX, b = b.offsetY;
  Ni.oc(a, b, 5, 5, new Th, new Sh(Oi), h);
  var c = Ui, d = Oi;
  Si.info("Telling server about circle at: " + a + ", " + b + " with color " + d);
  cg(c.C, ya(["Point", {x:a, y:b, color:d}]))
}
function Vi() {
  var a;
  a = H && !K("9") ? new ii(800, 600, h, h, h) : J && (!K("420") || Jb) ? new ui(800, 600, h, h, h) : new $h(800, 600, h, h, h);
  a.i();
  Pi = O("drawArea");
  Qd(a, Pi);
  Ni = a
}
var bj = "#E06666";
function cj(a) {
  var b;
  (a = a.target.zd()) ? (a = a.style[Qa("background-color")] || "", b = Li(a)) : b = k;
  b || (b = bj);
  Oi = b;
  zh.set("whiteboard_defaultColor", b);
  a = O("whiteboard-cp-value");
  v("background-color") ? yd(a, b, "background-color") : ta("background-color", ra(yd, a));
  a = O("whiteboard-cp-value");
  a.title = b;
  b = Vg(b).Bc;
  gd(a, b);
  b = ah(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = Zg(b[0], b[1], b[2]);
  v("color") ? yd(a, b, "color") : ta("color", ra(yd, a))
}
function dj() {
  Qi = (new ff(document.location)).Z;
  if(Ri = Boolean(Number(Qi.get("logging", "0")))) {
    pe().Uc(je);
    var a = new Hh(document.getElementById("log"));
    if(j != a.cf) {
      var b = pe(), c = a.Ng;
      b.Vb || (b.Vb = []);
      b.Vb.push(c);
      a.cf = j
    }
  }else {
    pe().Uc(be)
  }
  Si.info("Logger works.");
  (a = zh.get("whiteboard_defaultColor")) && (bj = a);
  Oi = bj;
  b = O("whiteboard-controls-left");
  a = O("whiteboard-controls-right");
  c = $c("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  cd(b, c);
  c = $c("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  cd(b, c);
  b = new Ki("#EA9999 #F9CB9C #FFE599 #B6D7A8 #A2C4C9 #9FC5E8 #B4A7D6 #D5A6BD #E06666 #F6B26B #FFD966 #93C47D #76A5AF #6FA8DC #8E7CC3 #C27BA0 #CC0000 #E69138 #F1C232 #6AA84F #45818E #3D85C6 #674EA7 #A64D79".split(" "));
  b.$(8);
  Qd(b, O("whiteboard-cp"));
  M(b, "action", cj);
  c = Li(bj);
  b.Ic || (b.Ic = Va(b.mc, function(a) {
    return Li(a)
  }));
  b.he(c ? Ta(b.Ic, c) : -1);
  cj({target:b});
  b = new Tg("Clear board");
  Gg(b, "clear-board-button");
  Qd(b, a);
  M(b, "action", $i);
  a = O("drawAreaOverlay");
  Gd(a, j);
  M(a, "click", aj, m);
  Vi();
  a = new wh;
  Ui = new Ti;
  Zi();
  c = (new ff(document.location)).Z;
  b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    Q(vh, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new ff(document.location);
  b ? b = new Mf("/_minerva/", c.Ja, t.__demo_mainSocketPort) : (d ? (b = t.__demo_shared_domain, v(b) || e(Error("domain was " + G(b) + "; expected a string.")), c = c.L(), jf(c, "_____random_____." + b)) : c = c.L(), c.Hb("/_minerva/"), lf(c, "", h), b = new Of(c.toString().replace("_____random_____", "%random%")));
  a = new Vf(b, a, Wi);
  b = Ui;
  u(b.Lf) || e(Error("Protocol is missing required method streamStarted"));
  u(b.Kf) || e(Error("Protocol is missing required method streamReset"));
  u(b.Mf) || e(Error("Protocol is missing required method stringReceived"));
  a.Ud = w(b.Lf, b);
  a.onreset = w(b.Kf, b);
  a.Vd = w(b.Mf, b);
  a.Wd = u(b.dh) ? w(b.dh, b) : k;
  a.Xd = u(b.eh) ? w(b.eh, b) : k;
  a.start()
}
var ej = ["__whiteboard_init"], fj = t;
!(ej[0] in fj) && fj.execScript && fj.execScript("var " + ej[0]);
for(var gj;ej.length && (gj = ej.shift());) {
  !ej.length && u(dj) ? fj[gj] = dj : fj = fj[gj] ? fj[gj] : fj[gj] = {}
}
;
})();
