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
    return a.yg || (a.yg = new a)
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
function ga(a) {
  return a !== h
}
function u(a) {
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
var y = Date.now || function() {
  return+new Date
};
function B(a, b) {
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
var wa = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
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
  a = "" + a;
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
function za(a) {
  var b = [];
  Aa(new Ba, a, b);
  return b.join("")
}
function Ba() {
  this.Sc = h
}
function Aa(a, b, c) {
  switch(typeof b) {
    case "string":
      Ca(b, c);
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
      if(u(b)) {
        var d = b.length;
        c.push("[");
        for(var f = "", g = 0;g < d;g++) {
          c.push(f), f = b[g], Aa(a, a.Sc ? a.Sc.call(b, "" + g, f) : f, c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), Ca(g, c), c.push(":"), Aa(a, a.Sc ? a.Sc.call(b, g, f) : f, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var Da = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Ea = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Ca(a, b) {
  b.push('"', a.replace(Ea, function(a) {
    if(a in Da) {
      return Da[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
    return Da[a] = f + b.toString(16)
  }), '"')
}
;function C(a) {
  this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
B(C, Error);
C.prototype.name = "CustomError";
function Fa(a) {
  var b = a.length - 1;
  return 0 <= b && a.indexOf("%", b) == b
}
function Ga(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = ("" + arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
var Ha = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function Ia(a) {
  a = "" + a;
  return!Ha.test(a) ? encodeURIComponent(a) : a
}
function Ja(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function Ka(a) {
  if(!La.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(Ma, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(Na, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Oa, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Pa, "&quot;"));
  return a
}
var Ma = /&/g, Na = /</g, Oa = />/g, Pa = /\"/g, La = /[&<>\"]/;
function Qa(a) {
  return Ja(a.replace(/  /g, " &#160;"), h)
}
function Ra(a, b) {
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
var Sa = 2147483648 * Math.random() | 0, Ta = {};
function Ua(a) {
  return Ta[a] || (Ta[a] = ("" + a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
}
;function Va(a, b) {
  b.unshift(a);
  C.call(this, Ga.apply(k, b));
  b.shift()
}
B(Va, C);
Va.prototype.name = "AssertionError";
function Wa(a, b) {
  e(new Va("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var D = Array.prototype, Xa = D.indexOf ? function(a, b, c) {
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
}, Ya = D.filter ? function(a, b, c) {
  return D.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = [], g = 0, i = v(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in i) {
      var o = i[l];
      b.call(c, o, l, a) && (f[g++] = o)
    }
  }
  return f
}, Za = D.map ? function(a, b, c) {
  return D.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = v(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in g && (f[i] = b.call(c, g[i], i, a))
  }
  return f
}, $a = D.some ? function(a, b, c) {
  return D.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return j
    }
  }
  return m
}, ab = D.every ? function(a, b, c) {
  return D.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && !b.call(c, f[g], g, a)) {
      return m
    }
  }
  return j
};
function bb(a, b) {
  return 0 <= Xa(a, b)
}
function cb(a) {
  if(!u(a)) {
    for(var b = a.length - 1;0 <= b;b--) {
      delete a[b]
    }
  }
  a.length = 0
}
function db(a, b) {
  var c = Xa(a, b);
  0 <= c && D.splice.call(a, c, 1)
}
function eb(a) {
  return D.concat.apply(D, arguments)
}
function fb(a) {
  if(u(a)) {
    return eb(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
}
function gb(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], f;
    if(u(d) || (f = ha(d)) && d.hasOwnProperty("callee")) {
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
function hb(a, b, c) {
  return 2 >= arguments.length ? D.slice.call(a, b) : D.slice.call(a, b, c)
}
function ib(a, b) {
  D.sort.call(a, b || jb)
}
function jb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function kb(a, b, c) {
  var d = Xa(c, a);
  if(-1 != d) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = fa(a);
    if("boolean" == d || "number" == d || "null" == d || "undefined" == d) {
      b.push("" + a)
    }else {
      if("string" == d) {
        Ca(a, b)
      }else {
        if(sa(a.N)) {
          a.N(b, c)
        }else {
          if(sa(a.Uf)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if("array" == d) {
                d = a.length;
                b.push("[");
                for(var f = "", g = 0;g < d;g++) {
                  b.push(f), kb(a[g], b, c), f = ", "
                }
                b.push("]")
              }else {
                if("object" == d) {
                  if(ia(a) && "function" == typeof a.valueOf) {
                    b.push("new Date(", "" + a.valueOf(), ")")
                  }else {
                    for(var d = va(a).concat(wa), f = {}, i = g = 0;i < d.length;) {
                      var l = d[i++], o = ja(l) ? "o" + ma(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(f, o) || (f[o] = j, d[g++] = l)
                    }
                    d.length = g;
                    b.push("{");
                    f = "";
                    for(i = 0;i < d.length;i++) {
                      g = d[i], Object.prototype.hasOwnProperty.call(a, g) && (l = a[g], b.push(f), Ca(g, b), b.push(": "), kb(l, b, c), f = ", ")
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
  kb(a, b, c)
}
function G(a) {
  var b = [];
  F(a, b, h);
  return b.join("")
}
;function lb(a) {
  if("function" == typeof a.Q) {
    a = a.Q()
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
function mb(a) {
  if("function" == typeof a.X) {
    return a.X()
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
function nb(a) {
  if("function" == typeof a.ua) {
    return a.ua()
  }
  if("function" != typeof a.X) {
    if(ha(a) || v(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return va(a)
  }
}
function ob(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ha(a) || v(a)) {
      E(a, b, c)
    }else {
      for(var d = nb(a), f = mb(a), g = f.length, i = 0;i < g;i++) {
        b.call(c, f[i], d && d[i], a)
      }
    }
  }
}
function pb(a, b) {
  if("function" == typeof a.every) {
    return a.every(b, h)
  }
  if(ha(a) || v(a)) {
    return ab(a, b, h)
  }
  for(var c = nb(a), d = mb(a), f = d.length, g = 0;g < f;g++) {
    if(!b.call(h, d[g], c && c[g], a)) {
      return m
    }
  }
  return j
}
;function qb(a, b) {
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
q = qb.prototype;
q.d = 0;
q.Q = n("d");
q.X = function() {
  rb(this);
  for(var a = [], b = 0;b < this.m.length;b++) {
    a.push(this.u[this.m[b]])
  }
  return a
};
q.ua = function() {
  rb(this);
  return this.m.concat()
};
q.aa = function(a) {
  return sb(this.u, a)
};
q.rc = function(a) {
  for(var b = 0;b < this.m.length;b++) {
    var c = this.m[b];
    if(sb(this.u, c) && this.u[c] == a) {
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
  var c = b || tb;
  rb(this);
  for(var d, f = 0;d = this.m[f];f++) {
    if(!c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function tb(a, b) {
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
  return sb(this.u, a) ? (delete this.u[a], this.d--, this.m.length > 2 * this.d && rb(this), j) : m
};
function rb(a) {
  if(a.d != a.m.length) {
    for(var b = 0, c = 0;b < a.m.length;) {
      var d = a.m[b];
      sb(a.u, d) && (a.m[c++] = d);
      b++
    }
    a.m.length = c
  }
  if(a.d != a.m.length) {
    for(var f = {}, c = b = 0;b < a.m.length;) {
      d = a.m[b], sb(f, d) || (a.m[c++] = d, f[d] = 1), b++
    }
    a.m.length = c
  }
}
q.get = function(a, b) {
  return sb(this.u, a) ? this.u[a] : b
};
q.set = function(a, b) {
  sb(this.u, a) || (this.d++, this.m.push(a));
  this.u[a] = b
};
q.hd = function(a) {
  var b;
  a instanceof qb ? (b = a.ua(), a = a.X()) : (b = va(a), a = ua(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
q.L = function() {
  return new qb(this)
};
function ub(a) {
  rb(a);
  for(var b = {}, c = 0;c < a.m.length;c++) {
    var d = a.m[c];
    b[d] = a.u[d]
  }
  return b
}
function sb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function vb(a) {
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
;var wb, xb;
function yb(a, b) {
  this.qb = a;
  this.lb = b
}
yb.prototype.V = function(a) {
  return a instanceof yb && this.qb == a.qb && this.lb.join(",") == a.lb
};
yb.prototype.N = function(a, b) {
  a.push("new SACK(", "" + this.qb, ", ");
  F(this.lb, a, b);
  a.push(")")
};
function zb() {
  this.w = new qb
}
q = zb.prototype;
q.$a = -1;
q.n = 0;
q.append = function(a) {
  var b = vb(a);
  this.w.set(this.$a + 1, [a, b]);
  this.$a += 1;
  this.n += b
};
q.N = function(a) {
  a.push("<Queue with ", "" + this.w.Q(), " item(s), counter=#", "" + this.$a, ", size=", "" + this.n, ">")
};
function Ab(a) {
  a = a.w.ua();
  ib(a);
  return a
}
q.Re = function(a) {
  for(var b = Ab(this), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    (a == k || f >= a) && c.push([f, this.w.get(f)[0]])
  }
  return c
};
function Bb() {
  this.Ya = new qb
}
Bb.prototype.hb = -1;
Bb.prototype.n = 0;
function Cb(a) {
  var b = a.Ya.ua();
  ib(b);
  return new yb(a.hb, b)
}
var Db = {};
function Eb() {
  return j
}
;var Fb, Gb, Hb, Ib, Jb;
function Kb() {
  return t.navigator ? t.navigator.userAgent : k
}
Jb = Ib = Hb = Gb = Fb = m;
var Lb;
if(Lb = Kb()) {
  var Mb = t.navigator;
  Fb = 0 == Lb.indexOf("Opera");
  Gb = !Fb && -1 != Lb.indexOf("MSIE");
  Ib = (Hb = !Fb && -1 != Lb.indexOf("WebKit")) && -1 != Lb.indexOf("Mobile");
  Jb = !Fb && !Hb && "Gecko" == Mb.product
}
var Nb = Fb, H = Gb, I = Jb, J = Hb, Ob = Ib, Pb = t.navigator, Qb = -1 != (Pb && Pb.platform || "").indexOf("Mac"), Rb;
a: {
  var Sb = "", Tb;
  if(Nb && t.opera) {
    var Ub = t.opera.version, Sb = "function" == typeof Ub ? Ub() : Ub
  }else {
    if(I ? Tb = /rv\:([^\);]+)(\)|;)/ : H ? Tb = /MSIE\s+([^\);]+)(\)|;)/ : J && (Tb = /WebKit\/(\S+)/), Tb) {
      var Vb = Tb.exec(Kb()), Sb = Vb ? Vb[1] : ""
    }
  }
  if(H) {
    var Wb, Xb = t.document;
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
  return Yb[a] || (Yb[a] = 0 <= Ra(Rb, a))
}
var Zb = {};
function $b() {
  return Zb[9] || (Zb[9] = H && !!document.documentMode && 9 <= document.documentMode)
}
;function ac() {
}
var bc = 0;
q = ac.prototype;
q.key = 0;
q.kb = m;
q.nd = m;
q.$b = function(a, b, c, d, f, g) {
  la(a) ? this.ef = j : a && a.handleEvent && la(a.handleEvent) ? this.ef = m : e(Error("Invalid listener argument"));
  this.Cb = a;
  this.xf = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Ec = g;
  this.nd = m;
  this.key = ++bc;
  this.kb = m
};
q.handleEvent = function(a) {
  return this.ef ? this.Cb.call(this.Ec || this.src, a) : this.Cb.handleEvent.call(this.Cb, a)
};
var cc = !H || $b(), dc = !H || $b(), ec = H && !K("8");
!J || K("528");
I && K("1.9b") || H && K("8") || Nb && K("9.5") || J && K("528");
I && !K("8") || H && K("9");
var fc = {sh:"click", xh:"dblclick", Sh:"mousedown", Wh:"mouseup", Vh:"mouseover", Uh:"mouseout", Th:"mousemove", fi:"selectstart", Mh:"keypress", Lh:"keydown", Nh:"keyup", qh:"blur", Fh:"focus", yh:"deactivate", Gh:H ? "focusin" : "DOMFocusIn", Hh:H ? "focusout" : "DOMFocusOut", rh:"change", ei:"select", gi:"submit", Kh:"input", ai:"propertychange", Ch:"dragstart", zh:"dragenter", Bh:"dragover", Ah:"dragleave", Dh:"drop", ki:"touchstart", ji:"touchmove", ii:"touchend", hi:"touchcancel", uh:"contextmenu", 
Eh:"error", Jh:"help", Oh:"load", Ph:"losecapture", bi:"readystatechange", ci:"resize", di:"scroll", mi:"unload", Ih:"hashchange", Xh:"pagehide", Yh:"pageshow", $h:"popstate", vh:"copy", Zh:"paste", wh:"cut", nh:"beforecopy", oh:"beforecut", ph:"beforepaste", Rh:"message", th:"connect", li:J ? "webkitTransitionEnd" : Nb ? "oTransitionEnd" : "transitionend"};
function L() {
}
L.prototype.sa = m;
L.prototype.g = function() {
  this.sa || (this.sa = j, this.c())
};
L.prototype.c = function() {
  this.fg && gc.apply(k, this.fg)
};
function gc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? gc.apply(k, d) : d && "function" == typeof d.g && d.g()
  }
}
;function hc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
B(hc, L);
q = hc.prototype;
q.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
q.jb = m;
q.fc = j;
q.stopPropagation = function() {
  this.jb = j
};
q.preventDefault = function() {
  this.fc = m
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
  a && this.$b(a, b)
}
B(kc, hc);
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
q.$b = function(a, b) {
  var c = this.type = a.type;
  hc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(I) {
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
  delete this.fc;
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
    if(u(b)) {
      for(var g = 0;g < b.length;g++) {
        M(a, b[g], c, d, f)
      }
      return k
    }
    var d = !!d, i = oc;
    b in i || (i[b] = {d:0, ia:0});
    i = i[b];
    d in i || (i[d] = {d:0, ia:0}, i.d++);
    var i = i[d], l = ma(a), o;
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
    i.$b(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    o.push(i);
    nc[c] = i;
    pc[l] || (pc[l] = []);
    pc[l].push(i);
    a.addEventListener ? (a == t || !a.td) && a.addEventListener(b, g, d) : a.attachEvent(b in qc ? qc[b] : qc[b] = "on" + b, g);
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
  if(u(b)) {
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
  if(u(b)) {
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
  var c = b.src, d = b.type, f = b.xf, g = b.capture;
  c.removeEventListener ? (c == t || !c.td) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in qc ? qc[d] : qc[d] = "on" + d, f);
  c = ma(c);
  f = oc[d][g][c];
  if(pc[c]) {
    var i = pc[c];
    db(i, b);
    0 == i.length && delete pc[c]
  }
  b.kb = j;
  f.qf = j;
  xc(d, g, c, f);
  delete nc[a];
  return j
}
function xc(a, b, c, d) {
  if(!d.Lc && d.qf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].kb ? d[f].xf.src = k : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.qf = m;
    0 == g && (delete oc[a][b][c], oc[a][b].d--, 0 == oc[a][b].d && (delete oc[a][b], oc[a].d--), 0 == oc[a].d && delete oc[a])
  }
}
function yc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    ta(pc, function(a) {
      for(var f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          wc(g.key), c++
        }
      }
    })
  }else {
    if(a = ma(a), pc[a]) {
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
  return b in d && (d = d[b], c in d && (d = d[c], a = ma(a), d[a])) ? d[a] : k
}
function zc(a, b, c, d, f) {
  var g = 1, b = ma(b);
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
    r.$b(g, this);
    g = j;
    try {
      if(l) {
        for(var s = [], x = r.currentTarget;x;x = x.parentNode) {
          s.push(x)
        }
        i = f[j];
        i.ia = i.d;
        for(var A = s.length - 1;!r.jb && 0 <= A && i.ia;A--) {
          r.currentTarget = s[A], g &= zc(i, s[A], d, j, r)
        }
        if(o) {
          i = f[m];
          i.ia = i.d;
          for(A = 0;!r.jb && A < s.length && i.ia;A++) {
            r.currentTarget = s[A], g &= zc(i, s[A], d, m, r)
          }
        }
      }else {
        g = Ac(c, r)
      }
    }finally {
      s && (s.length = 0), r.g()
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
B(Cc, L);
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
    if(v(a)) {
      a = new hc(a, this)
    }else {
      if(a instanceof hc) {
        a.target = a.target || this
      }else {
        var d = a, a = new hc(b, this);
        xa(a, d)
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
        a.currentTarget = f[i], d &= zc(g, f[i], a.type, j, a) && a.fc != m
      }
    }
    if(m in c) {
      if(g = c[m], g.ia = g.d, b) {
        for(i = 0;!a.jb && i < f.length && g.ia;i++) {
          a.currentTarget = f[i], d &= zc(g, f[i], a.type, m, a) && a.fc != m
        }
      }else {
        for(f = this;!a.jb && f && g.ia;f = f.Oc) {
          a.currentTarget = f, d &= zc(g, f, a.type, m, a) && a.fc != m
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
  this.kc = b || Ec;
  this.ld = w(this.$g, this);
  this.Pd = y()
}
B(Dc, Cc);
Dc.prototype.enabled = m;
var Ec = t.window;
q = Dc.prototype;
q.oa = k;
q.$g = function() {
  if(this.enabled) {
    var a = y() - this.Pd;
    0 < a && a < 0.8 * this.Hc ? this.oa = this.kc.setTimeout(this.ld, this.Hc - a) : (this.dispatchEvent(Fc), this.enabled && (this.oa = this.kc.setTimeout(this.ld, this.Hc), this.Pd = y()))
  }
};
q.start = function() {
  this.enabled = j;
  this.oa || (this.oa = this.kc.setTimeout(this.ld, this.Hc), this.Pd = y())
};
q.stop = function() {
  this.enabled = m;
  this.oa && (this.kc.clearTimeout(this.oa), this.oa = k)
};
q.c = function() {
  Dc.f.c.call(this);
  this.stop();
  delete this.kc
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
  this.pc = [];
  this.ze = a;
  this.He = b || k
}
q = Gc.prototype;
q.Ka = m;
q.Xb = m;
q.cc = 0;
q.ke = m;
q.ag = m;
q.md = 0;
q.cancel = function(a) {
  if(this.Ka) {
    this.ec instanceof Gc && this.ec.cancel()
  }else {
    if(this.H) {
      var b = this.H;
      delete this.H;
      a ? b.cancel(a) : (b.md--, 0 >= b.md && b.cancel())
    }
    this.ze ? this.ze.call(this.He, this) : this.ke = j;
    this.Ka || this.Vb(new Hc)
  }
};
q.Ce = function(a, b) {
  Ic(this, a, b);
  this.cc--;
  0 == this.cc && this.Ka && Jc(this)
};
function Ic(a, b, c) {
  a.Ka = j;
  a.ec = c;
  a.Xb = !b;
  Jc(a)
}
function Kc(a) {
  a.Ka && (a.ke || e(new Lc), a.ke = m)
}
function Mc(a, b) {
  Kc(a);
  Ic(a, j, b)
}
q.Vb = function(a) {
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
  a.pc.push([b, c, d]);
  a.Ka && Jc(a)
}
function Qc(a, b) {
  Oc(a, b, b, h)
}
function Rc(a) {
  return $a(a.pc, function(a) {
    return la(a[1])
  })
}
function Jc(a) {
  a.te && a.Ka && Rc(a) && (t.clearTimeout(a.te), delete a.te);
  a.H && (a.H.md--, delete a.H);
  for(var b = a.ec, c = m, d = m;a.pc.length && 0 == a.cc;) {
    var f = a.pc.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.Xb ? i : g) {
      try {
        var l = g.call(f || a.He, b);
        ga(l) && (a.Xb = a.Xb && (l == b || l instanceof Error), a.ec = b = l);
        b instanceof Gc && (d = j, a.cc++)
      }catch(o) {
        b = o, a.Xb = j, Rc(a) || (c = j)
      }
    }
  }
  a.ec = b;
  d && a.cc && (Oc(b, w(a.Ce, a, j), w(a.Ce, a, m)), b.ag = j);
  c && (a.te = t.setTimeout(function() {
    ga(b.message) && b.stack && (b.message += "\n" + b.stack);
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
  b.Vb(a);
  return b
}
function Lc() {
  C.call(this)
}
B(Lc, C);
Lc.prototype.message = "Already called";
function Hc() {
  C.call(this)
}
B(Hc, C);
Hc.prototype.message = "Deferred was cancelled";
function Uc(a) {
  this.I = a;
  this.tc = [];
  this.Le = [];
  this.$f = w(this.fh, this)
}
Uc.prototype.oa = k;
function Vc(a, b, c, d) {
  a.tc.push([b, c, d]);
  a.oa == k && (a.oa = a.I.setTimeout(a.$f, 0))
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
var Wc = new Uc(t.window);
var Xc;
function Yc(a) {
  a = a.className;
  return v(a) && a.match(/\S+/g) || []
}
function Zc(a, b) {
  for(var c = Yc(a), d = hb(arguments, 1), f = c.length + d.length, g = c, i = 0;i < d.length;i++) {
    bb(g, d[i]) || g.push(d[i])
  }
  a.className = c.join(" ");
  return c.length == f
}
function $c(a, b) {
  var c = Yc(a), d = hb(arguments, 1), f = ad(c, d);
  a.className = f.join(" ");
  return f.length == c.length - d.length
}
function ad(a, b) {
  return Ya(a, function(a) {
    return!bb(b, a)
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
var bd = !H || $b();
!I && !H || H && $b() || I && K("1.9.1");
var cd = H && !K("9");
function dd(a) {
  return a ? new ed(fd(a)) : Xc || (Xc = new ed)
}
function O(a) {
  return v(a) ? document.getElementById(a) : a
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
      b = i.className, "function" == typeof b.split && bb(b.split(/\s+/), c) && (d[f++] = i)
    }
    d.length = f;
    return d
  }
  return a
}
function hd(a, b) {
  ta(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in id ? a.setAttribute(id[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var id = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function kd(a, b, c) {
  return ld(document, arguments)
}
function ld(a, b) {
  var c = b[0], d = b[1];
  if(!bd && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', Ka(d.name), '"');
    if(d.type) {
      c.push(' type="', Ka(d.type), '"');
      var f = {};
      xa(f, d);
      d = f;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  d && (v(d) ? c.className = d : u(d) ? Zc.apply(k, [c].concat(d)) : hd(c, d));
  2 < b.length && md(a, c, b, 2);
  return c
}
function md(a, b, c, d) {
  function f(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && 0 < g.nodeType) ? E(nd(g) ? fb(g) : g, f) : f(g)
  }
}
function od(a, b) {
  md(fd(a), a, arguments, 1)
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
function fd(a) {
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
      pd(a), a.appendChild(fd(a).createTextNode(b))
    }
  }
}
var td = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, ud = {IMG:" ", BR:"\n"};
function vd(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ka(a) && 0 <= a && 32768 > a) : m
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
    if(ja(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(la(a)) {
      return"function" == typeof a.item
    }
  }
  return m
}
function ed(a) {
  this.p = a || t.document || document
}
q = ed.prototype;
q.Fa = dd;
q.b = function(a) {
  return v(a) ? this.p.getElementById(a) : a
};
q.i = function(a, b, c) {
  return ld(this.p, arguments)
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
      a.push("<string>", Ka(b), "</string>");
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
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', Ka(c), '">'), yd(a, b[c]), a.push("</property>"))
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
  a.style[Ua(c)] = b
}
function Ld(a, b) {
  var c = fd(a);
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
  return(!ga(b) || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), H && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new N(b.right - b.left, b.bottom - b.top)) : new N(b, c)
}
function Qd(a) {
  H ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[J ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var Rd = I ? "MozUserSelect" : J ? "WebkitUserSelect" : k;
function Sd(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Rd) {
    if(b = b ? "none" : "", a.style[Rd] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[Rd] = b
      }
    }
  }else {
    if(H || Nb) {
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
B(Td, L);
var Ud = [];
function P(a, b, c, d) {
  u(c) || (Ud[0] = c, c = Ud);
  for(var f = 0;f < c.length;f++) {
    a.m.push(M(b, c[f], d || a, m, a.eb || a))
  }
  return a
}
function Vd(a, b, c, d, f, g) {
  if(u(c)) {
    for(var i = 0;i < c.length;i++) {
      Vd(a, b, c[i], d, f, g)
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
    b && (b = b.key, wc(b), db(a.m, b))
  }
  return a
}
Td.prototype.$d = function() {
  E(this.m, wc);
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
Wd.prototype.Gg = 0;
Wd.La();
function Xd(a) {
  this.M = a || dd();
  this.gc = Yd
}
B(Xd, Cc);
Xd.prototype.xg = Wd.La();
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
q.gc = k;
q.H = k;
q.O = k;
q.Rb = k;
q.gh = m;
function $d(a) {
  return a.R || (a.R = ":" + (a.xg.Gg++).toString(36))
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
  this.H = this.e = this.Rb = this.O = k
};
q.Wb = n("e");
q.Ib = function(a) {
  this.q && e(Error("Component already rendered"));
  this.gc = a
};
function ce(a, b) {
  a.O && E(a.O, b, h)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : $d(a), a = this.Rb && c ? (c in this.Rb ? this.Rb[c] : h) || k : k;
    if(c && a) {
      var d = this.Rb;
      c in d && delete d[c];
      db(this.O, a);
      b && (a.ab(), a.e && qd(a.e));
      c = a;
      c == k && e(Error("Unable to set parent component"));
      c.H = k;
      Xd.f.fe.call(c, k)
    }
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function de(a) {
  this.u = new qb;
  a && this.hd(a)
}
function ee(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ma(a) : b.substr(0, 1) + a
}
q = de.prototype;
q.Q = function() {
  return this.u.Q()
};
q.add = function(a) {
  this.u.set(ee(a), a)
};
q.hd = function(a) {
  for(var a = mb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
q.$d = function(a) {
  for(var a = mb(a), b = a.length, c = 0;c < b;c++) {
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
  return this.Q() == lb(a) && fe(this, a)
};
function fe(a, b) {
  var c = lb(b);
  if(a.Q() > c) {
    return m
  }
  !(b instanceof de) && 5 < c && (b = new de(b));
  return pb(a, function(a) {
    if("function" == typeof b.contains) {
      a = b.contains(a)
    }else {
      if("function" == typeof b.rc) {
        a = b.rc(a)
      }else {
        if(ha(b) || v(b)) {
          a = bb(b, a)
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
  if(bb(b, a)) {
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
  this.Lf = d || y();
  this.Bb = a;
  this.of = b;
  this.Bg = c;
  delete this.zd;
  delete this.yd
};
ke.prototype.Xc = aa("Bb");
function me(a) {
  this.Fg = a
}
me.prototype.H = k;
me.prototype.Bb = k;
me.prototype.O = k;
me.prototype.Zb = k;
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
  Wa("Root logger has no level set.");
  return k
}
q.log = function(a, b, c) {
  if(a.value >= xe(this).value) {
    a = this.pg(a, b, c);
    b = "log:" + a.of;
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.Zb) {
        for(var f = 0, g = h;g = c.Zb[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
q.pg = function(a, b, c) {
  var d = new ke(a, "" + b, this.Fg);
  if(c) {
    d.zd = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var i;
      var l = ca("window.location.href");
      if(v(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var o, r, z = m;
        try {
          o = c.lineNumber || c.ti || "Not available"
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
      f = "Message: " + Ka(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + Ka(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ka(ge(g) + "-> ")
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
function Q(a, b) {
  a.log(re, b, h)
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
  this.mg = a;
  this.xd = new Td(this);
  this.vc = new qb
}
B(De, Xd);
q = De.prototype;
q.a = T("goog.ui.media.FlashObject");
q.ih = "window";
q.ye = "#000000";
q.Wf = "sameDomain";
q.Z = function(a, b) {
  this.pb = v(a) ? a : Math.round(a) + "px";
  this.Hd = v(b) ? b : Math.round(b) + "px";
  this.b() && Md(this.b() ? this.b().firstChild : k, this.pb, this.Hd);
  return this
};
q.P = function() {
  De.f.P.call(this);
  var a = this.b(), b;
  b = H ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = H ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = Ga(c, this.ih), d = this.vc.ua(), f = this.vc.X(), g = [], i = 0;i < d.length;i++) {
    var l = Ia(d[i]), o = Ia(f[i]);
    g.push(l + "=" + o)
  }
  b = Ga(b, $d(this), $d(this), "goog-ui-media-flash-object", Ka(this.mg), Ka(g.join("&")), this.ye, this.Wf, c);
  a.innerHTML = b;
  this.pb && this.Hd && this.Z(this.pb, this.Hd);
  P(this.xd, this.b(), ua(fc), ic)
};
q.i = function() {
  this.Bf != k && !(0 <= Ra(Jd, this.Bf)) && (Q(this.a, "Required flash version not found:" + this.Bf), e(Error("Method not supported")));
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
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ y()).toString(36)
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
  C.call(this, a)
}
B(Ke, C);
Ke.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function Le(a, b, c) {
  function d() {
    f && delete t.__loadFlashObject_callbacks[f]
  }
  var f;
  if(I && !K("1.8.1.20")) {
    return Tc(new Ke("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Ra(Jd, "9"))) {
    return Tc(new Ke("Need Flash Player 9+; had " + (Jd ? Jd : "none")))
  }
  var g;
  f = "_" + Ee();
  var i = new Gc(d);
  t.__loadFlashObject_callbacks[f] = function() {
    a.setTimeout(function() {
      d();
      Mc(i, O(g))
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
  Qc(d, function(b) {
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
B(Ne, L);
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
  "frames" == b ? (a = a.Sa, Pe(a.K), Qe(a.K, c)) : "stillreceiving" == b ? (c = a.Sa, S(c.a, "onstillreceiving"), Pe(c.K)) : "connect" == b ? (c = a.Sa, c.a.info("onconnect"), Pe(c.K), a = c.Ob, c.Ob = k, a.length && (S(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.$c.nc(a))) : "close" == b ? (a.Db = m, a.g()) : "ioerror" == b ? (a.Db = m, b = a.Sa, Q(b.a, "onioerror: " + G(c)), Re(b.K, m), a.g()) : "securityerror" == b ? (a.Db = m, b = a.Sa, Q(b.a, "onsecurityerror: " + G(c)), 
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
q.nc = function(a) {
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
  t[this.od] = w(this.ig, this);
  var c = b.CallFunction(zd("__FC_setCallbackFunc", this.od));
  '"OK"' != c && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
B(Te, L);
q = Te.prototype;
q.a = T("cw.net.FlashSocketTracker");
q.N = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  F(this.xb, a, b);
  a.push(">")
};
q.sd = function(a) {
  a = new Ne(this, a);
  return this.xb[a.R] = a
};
q.gg = function(a, b, c, d) {
  var f = this.xb[a];
  f ? "frames" == b && d ? (Oe(f, "ioerror", "FlashConnector hadError while handling data."), f.g()) : Oe(f, b, c) : Q(this.a, "Cannot dispatch because we have no instance: " + G([a, b, c, d]))
};
q.ig = function(a, b, c, d) {
  try {
    Vc(this.v, this.gg, this, [a, b, c, d])
  }catch(f) {
    t.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
q.c = function() {
  Te.f.c.call(this);
  for(var a = ua(this.xb);a.length;) {
    a.pop().g()
  }
  delete this.xb;
  delete this.Xa;
  t[this.od] = h
};
function Ue(a) {
  this.K = a;
  this.Ob = []
}
B(Ue, L);
q = Ue.prototype;
q.a = T("cw.net.FlashSocketConduit");
q.nc = function(a) {
  this.Ob ? (S(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Ob.push.apply(this.Ob, a)) : (S(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.$c.nc(a))
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
  var a = new Gc;
  Ve.push(a);
  return a
}
function Xe(a) {
  var b = Ve;
  Ve = [];
  E(b, function(b) {
    Mc(b, a)
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
  f || (f = kd("div", {id:"minerva-elements-FlashConnectorSwf"}), d.appendChild(f));
  wb = Me(a.I, c, f);
  Nc(wb, Xe);
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
var bf = {Uf:p("<cw.eq.Wildcard>")};
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
          if(a.Tf == Eb && b.Tf == Eb) {
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
  this.Ng = a;
  this.Qc = b
}
U.prototype.V = function(a, b) {
  return ja(a) && this.constructor == a.constructor && df(this.Qc, a.Qc, b)
};
U.prototype.N = function(a, b) {
  a.push("new ", this.Ng, "(");
  for(var c = "", d = 0;d < this.Qc.length;d++) {
    a.push(c), c = ", ", F(this.Qc[d], a, b)
  }
  a.push(")")
};
function V(a) {
  C.call(this, a)
}
B(V, C);
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
  F(gf(this), a, b);
  a.push(">")
};
function gf(a) {
  return[a.Kb, a.wf, a.$e, a.Af, a.jc, a.ne, a.pf, a.nf, a.Sd, a.lf, a.Pf, a.Kf, a.Ua, a.Kc]
}
ff.prototype.ca = ef;
ff.prototype.ma = function(a) {
  var b = {};
  b.tnum = this.Kb;
  b.ver = this.wf;
  b.format = this.$e;
  b["new"] = this.Af;
  b.id = this.jc;
  b.ming = this.ne;
  b.pad = this.pf;
  b.maxb = this.nf;
  ga(this.Sd) && (b.maxt = this.Sd);
  b.maxia = this.lf;
  b.tcpack = this.Pf;
  b.eeds = this.Kf;
  b.sack = this.Ua instanceof yb ? Fe((new hf(this.Ua)).ca()) : this.Ua;
  b.seenack = this.Kc instanceof yb ? Fe((new hf(this.Kc)).ca()) : this.Kc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(za(b), "H")
};
function jf(a) {
  U.call(this, "StringFrame", [a]);
  this.pe = a
}
B(jf, U);
jf.prototype.ca = ef;
jf.prototype.ma = function(a) {
  a.push(this.pe, " ")
};
function kf(a) {
  U.call(this, "CommentFrame", [a]);
  this.bg = a
}
B(kf, U);
kf.prototype.ca = ef;
kf.prototype.ma = function(a) {
  a.push(this.bg, "^")
};
function lf(a) {
  U.call(this, "SeqNumFrame", [a]);
  this.Hf = a
}
B(lf, U);
lf.prototype.ca = ef;
lf.prototype.ma = function(a) {
  a.push("" + this.Hf, "N")
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
  return new yb(a, c)
}
function hf(a) {
  U.call(this, "SackFrame", [a]);
  this.Ua = a
}
B(hf, U);
hf.prototype.ca = ef;
hf.prototype.ma = function(a) {
  var b = this.Ua;
  a.push(b.lb.join(","), "|", "" + b.qb);
  a.push("A")
};
function nf(a) {
  U.call(this, "StreamStatusFrame", [a]);
  this.gf = a
}
B(nf, U);
nf.prototype.ca = ef;
nf.prototype.ma = function(a) {
  var b = this.gf;
  a.push(b.lb.join(","), "|", "" + b.qb);
  a.push("T")
};
function of() {
  U.call(this, "StreamCreatedFrame", [])
}
B(of, U);
of.prototype.ca = ef;
of.prototype.ma = function(a) {
  a.push("C")
};
function pf() {
  U.call(this, "YouCloseItFrame", [])
}
B(pf, U);
pf.prototype.ca = ef;
pf.prototype.ma = function(a) {
  a.push("Y")
};
function qf(a, b) {
  U.call(this, "ResetFrame", [a, b]);
  this.yf = a;
  this.xe = b
}
B(qf, U);
qf.prototype.ca = ef;
qf.prototype.ma = function(a) {
  a.push(this.yf, "|", "" + Number(this.xe), "!")
};
var rf = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function sf(a) {
  U.call(this, "TransportKillFrame", [a]);
  this.reason = a
}
B(sf, U);
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
q.zg = m;
q.wa = m;
q.toString = function() {
  if(this.qa) {
    return this.qa
  }
  var a = [];
  this.za && a.push(Ef(this.za, Ff), ":");
  this.la && (a.push("//"), this.ob && a.push(Ef(this.ob, Ff), "@"), a.push(v(this.la) ? encodeURIComponent(this.la) : k), this.Ra != k && a.push(":", "" + this.Ra));
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
  a.zg && e(Error("Tried to modify a read-only Uri"))
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
  v(a) && (c = a, Mf.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, Nf)));
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
  if(!a.o && (a.o = new qb, a.d = 0, a.Ca)) {
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
    u(c) ? c.push(b) : this.o.set(a, [c, b])
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
    u(b) ? this.d -= b.length : this.d--;
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
  return bb(b, a)
};
q.ua = function() {
  Of(this);
  for(var a = this.o.X(), b = this.o.ua(), c = [], d = 0;d < b.length;d++) {
    var f = a[d];
    if(u(f)) {
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
  if(a) {
    if(a = Pf(this, a), this.aa(a)) {
      var b = this.o.get(a);
      if(u(b)) {
        return b
      }
      a = [];
      a.push(b)
    }else {
      a = []
    }
  }else {
    for(var b = this.o.X(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      u(d) ? gb(a, d) : a.push(d)
    }
  }
  return a
};
q.set = function(a, b) {
  Of(this);
  Qf(this);
  a = Pf(this, a);
  if(this.aa(a)) {
    var c = this.o.get(a);
    u(c) ? this.d -= c.length : this.d--
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
    return u(c) ? c[0] : c
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
    var f = c[d], g = Ia(f), f = this.o.get(f);
    if(u(f)) {
      for(var i = 0;i < f.length;i++) {
        0 < b && a.push("&"), a.push(g), "" !== f[i] && a.push("=", Ia(f[i])), b++
      }
    }else {
      0 < b && a.push("&"), a.push(g), "" !== f && a.push("=", Ia(f)), b++
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
  a && !this.wa && (Of(this), Qf(this), ob(this.o, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.wa = a
};
function Rf(a, b, c, d) {
  this.contentWindow = a;
  this.uc = b;
  this.oe = c;
  this.ng = d
}
Rf.prototype.N = function(a, b) {
  a.push("<XDRFrame frameId=");
  F(this.ng, a, b);
  a.push(", expandedUrl=");
  F(this.uc, a, b);
  a.push(", streams=");
  F(this.oe, a, b);
  a.push(">")
};
function Sf() {
  this.frames = [];
  this.Qd = new qb
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
      return c.a.info("Giving " + G(b) + " existing frame " + G(f)), Sc(f)
    }
  }
  d = Ee() + Ee();
  f = Tf(a);
  g = t.location;
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
        if(!(-1 == o.indexOf("./") && -1 == o.indexOf("/."))) {
          for(var l = 0 == o.lastIndexOf("/", 0), o = o.split("/"), r = [], z = 0;z < o.length;) {
            var s = o[z++];
            "." == s ? l && z == o.length && r.push("") : ".." == s ? ((1 < r.length || 1 == r.length && "" != r[0]) && r.pop(), l && z == o.length && r.push("")) : (r.push(s), l = j)
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
  g = ("" + t.location).match(uf)[3] || k;
  i = f.match(uf)[3] || k;
  g == i ? (c.a.info("No need to make a real XDRFrame for " + G(b)), c = Sc(new Rf(t, f, [b], k))) : ((g = O("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new Gc, c.Qd.set(d, [i, f, b]), c.a.info("Creating new XDRFrame " + G(d) + "for " + G(b)), c = kd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:f + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = i);
  return c
}
Sf.prototype.lh = function(a) {
  var b = this.Qd.get(a);
  b || e(Error("Unknown frameId " + G(a)));
  this.Qd.remove(b);
  var c = b[0], a = new Rf(O("minerva-xdrframe-" + a).contentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  Mc(c, a)
};
var Vf = new Sf;
t.__XHRTracker_xdrFrameLoaded = w(Vf.lh, Vf);
var Wf;
Wf = m;
var Xf = Kb();
Xf && (-1 != Xf.indexOf("Firefox") || -1 != Xf.indexOf("Camino") || -1 != Xf.indexOf("iPhone") || -1 != Xf.indexOf("iPod") || -1 != Xf.indexOf("iPad") || -1 != Xf.indexOf("Android") || -1 != Xf.indexOf("Chrome") && (Wf = j));
var Yf = Wf;
var Ze = "4bdfc178fc0e508c0cd5efc3fdb09920";
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function Zf(a, b, c, d, f, g) {
  Gc.call(this, f, g);
  this.kf = a;
  this.ud = [];
  this.Ne = !!b;
  this.lg = !!c;
  this.cg = !!d;
  for(b = 0;b < a.length;b++) {
    Oc(a[b], w(this.Ve, this, b, j), w(this.Ve, this, b, m))
  }
  0 == a.length && !this.Ne && Mc(this, this.ud)
}
B(Zf, Gc);
Zf.prototype.rf = 0;
Zf.prototype.Ve = function(a, b, c) {
  this.rf++;
  this.ud[a] = [b, c];
  this.Ka || (this.Ne && b ? Mc(this, [a, c]) : this.lg && !b ? this.Vb(c) : this.rf == this.kf.length && Mc(this, this.ud));
  this.cg && !b && (c = k);
  return c
};
Zf.prototype.Vb = function(a) {
  Zf.f.Vb.call(this, a);
  E(this.kf, function(a) {
    a.cancel()
  })
};
function $f(a) {
  a = new Zf(a, m, j);
  Nc(a, function(a) {
    return Za(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function ag(a, b) {
  this.jh = a;
  this.mf = b
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
    if(f.length > a.mf) {
      return a.Ad = j, [b, 2]
    }
    b.push(f);
    a.Nc = c += 1
  }
  return a.Nd - a.Nc - 1 > a.mf ? (a.Ad = j, [b, 2]) : [b, 1]
}
;function cg(a, b, c) {
  this.K = b;
  this.na = a;
  this.qd = c
}
B(cg, L);
q = cg.prototype;
q.a = T("cw.net.XHRMaster");
q.Ta = -1;
q.Rd = function(a, b, c) {
  this.qd.__XHRSlave_makeRequest(this.na, a, b, c)
};
q.Ma = n("Ta");
q.Ud = function(a, b) {
  1 != b && ye(this.a, G(this.na) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Pe(this.K);
  Qe(this.K, a)
};
q.Vd = function(a) {
  R(this.a, "ongotheaders_: " + G(a));
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
B(gg, L);
q = gg.prototype;
q.a = T("cw.net.XHRMasterTracker");
q.sd = function(a, b) {
  var c = "_" + Ee(), d = new cg(c, a, b);
  return this.Ga[c] = d
};
q.Ud = function(a, b, c) {
  if(I) {
    for(var d = [], f = 0, g = b.length;f < g;f++) {
      d[f] = b[f]
    }
    b = d
  }else {
    b = eb(b)
  }
  (d = this.Ga[a]) ? d.Ud(b, c) : ye(this.a, "onframes_: no master for " + G(a))
};
q.Vd = function(a, b) {
  var c = this.Ga[a];
  c ? c.Vd(b) : ye(this.a, "ongotheaders_: no master for " + G(a))
};
q.Wd = function(a, b) {
  var c = this.Ga[a];
  c ? c.Wd(b) : ye(this.a, "onreadystatechange_: no master for " + G(a))
};
q.Td = function(a) {
  var b = this.Ga[a];
  b ? (delete this.Ga[b.na], b.Td()) : ye(this.a, "oncomplete_: no master for " + G(a))
};
q.c = function() {
  gg.f.c.call(this);
  for(var a = ua(this.Ga);a.length;) {
    a.pop().g()
  }
  delete this.Ga
};
var fg = new gg;
t.__XHRMaster_onframes = w(fg.Ud, fg);
t.__XHRMaster_oncomplete = w(fg.Td, fg);
t.__XHRMaster_ongotheaders = w(fg.Vd, fg);
t.__XHRMaster_onreadystatechange = w(fg.Wd, fg);
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
  F(this.xa, a, b);
  a.push(", secondaryUrl=");
  F(this.Va, a, b);
  a.push(">")
};
function kg(a, b, c, d) {
  this.xa = a;
  this.vf = b;
  this.Va = c;
  this.Gf = d;
  (!(0 == this.xa.indexOf("http://") || 0 == this.xa.indexOf("https://")) || !(0 == this.Va.indexOf("http://") || 0 == this.Va.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.vf.location.href;
  vf(this.xa, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Gf.location.href;
  vf(this.Va, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
kg.prototype.N = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  F(this.xa, a, b);
  a.push(", secondaryUrl=");
  F(this.Va, a, b);
  a.push(">")
};
var lg = new kf(";)]}");
function mg() {
}
mg.prototype.Qe = p(1);
function ng(a) {
  this.Vg = a
}
ng.prototype.N = function(a, b) {
  a.push("<UserContext for ");
  F(this.Vg, a, b);
  a.push(">")
};
function og(a, b, c) {
  this.A = a;
  this.Wg = b ? b : new mg;
  this.v = c ? c : Wc;
  this.lc = new de;
  this.jc = Ee() + Ee();
  this.ya = new zb;
  this.Kd = new Bb;
  this.mc = k;
  this.ed = [];
  this.Lb = new ng(this);
  this.Zf = w(this.eh, this);
  J && (this.mc = tc(t, "load", this.Pg, m, this))
}
B(og, L);
q = og.prototype;
q.a = T("cw.net.ClientStream");
q.hf = new yb(-1, []);
q.jf = new yb(-1, []);
q.Eg = 50;
q.Dg = 1048576;
q.Yd = k;
q.Xd = k;
q.onreset = k;
q.tf = k;
q.Gb = k;
q.le = m;
q.ae = m;
q.h = 1;
q.re = -1;
q.j = k;
q.B = k;
q.dc = k;
q.me = 0;
q.uf = 0;
q.Ff = 0;
q.N = function(a, b) {
  a.push("<ClientStream id=");
  F(this.jc, a, b);
  a.push(", state=", "" + this.h);
  a.push(", primary=");
  F(this.j, a, b);
  a.push(", secondary=");
  F(this.B, a, b);
  a.push(", resetting=");
  F(this.dc, a, b);
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
    var b = 0 != a.ya.w.Q(), c = Cb(a.Kd), d = !c.V(a.jf) && !(a.j && c.V(a.j.Ab) || a.B && c.V(a.B.Ab)), f = pg(a);
    if((b = b && f < a.ya.$a) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.j.Pb ? (S(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.j, c != d.Ab && (!d.Ha && !d.F.length && sg(d), d.F.push(new hf(c)), d.Ab = c)), b && tg(a.j, a.ya, f + 1), a.j.Ea()) : a.B == k ? a.le ? (S(a.a, "tryToSend_: creating secondary to send " + g), a.B = ug(a, m), b && tg(a.B, a.ya, f + 1), a.B.Ea()) : (S(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.ae = j) : S(a.a, "tryToSend_: need to send " + g + ", but can't right now")
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
  a.Gb == k && (a.Gb = a.v.I.setTimeout(a.Zf, 6))
}
q.Pg = function() {
  this.mc = k;
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
  ga(c) || (c = j);
  3 < a.h && e(Error("sendString: Can't send in state " + a.h));
  c && !/^([ -~]*)$/.test(b) && e(Error("sendString: string has illegal chars: " + G(b)));
  a.ya.append(b);
  vg(a)
}
function ug(a, b) {
  var c;
  a.A instanceof kg ? c = 1 == a.Wg.Qe() ? dg : xg : a.A instanceof ig ? c = yg : e(Error("Don't support endpoint " + G(a.A)));
  a.re += 1;
  c = new zg(a.v, a, a.re, c, a.A, b);
  S(a.a, "Created: " + c.s());
  a.lc.add(c);
  return c
}
function Ag(a, b, c) {
  var d = new Bg(a.v, a, b, c);
  S(a.a, "Created: " + d.s() + ", delay=" + b + ", times=" + c);
  a.lc.add(d);
  return d
}
function Cg(a, b) {
  a.lc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  R(a.a, "Offline: " + b.s());
  a.me = b.Qa ? a.me + b.Qa : 0;
  1 <= a.me && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.Lb, "stream penalty reached limit", m), a.g());
  if(3 < a.h) {
    4 == a.h && b.Sf ? (R(a.a, "Disposing because resettingTransport_ is done."), a.g()) : R(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    var c;
    var d;
    c = b instanceof Bg;
    if(!c && b.gd) {
      var f = J ? Yf ? [0, 1] : [9, 20] : [0, 0];
      c = f[0];
      d = f[1];
      S(a.a, "getDelayForNextTransport_: " + G({delay:c, times:d}))
    }else {
      if(d = b.Be(), b == a.j ? d ? f = ++a.uf : c || (f = a.uf = 0) : d ? f = ++a.Ff : c || (f = a.Ff = 0), c || !f) {
        d = c = 0, S(a.a, "getDelayForNextTransport_: " + G({count:f, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(f, 3), i = Math.floor(4E3 * Math.random()) - 2E3, l = Math.max(0, b.Of - b.se);
        d = (c = Math.max(0, g + i - l)) ? 1 : 0;
        S(a.a, "getDelayForNextTransport_: " + G({count:f, base:g, variance:i, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    f = c[0];
    c = c[1];
    b == a.j ? (a.j = k, c ? a.j = Ag(a, f, c) : (f = pg(a), a.j = ug(a, j), tg(a.j, a.ya, f + 1)), a.j.Ea()) : b == a.B && (a.B = k, c ? (a.B = Ag(a, f, c), a.B.Ea()) : qg(a))
  }
}
q.reset = function(a) {
  3 < this.h && e(Error("reset: Can't send reset in state " + this.h));
  rg(this);
  0 != this.ya.w.Q() && Q(this.a, "reset: strings in send queue will never be sent: " + G(this.ya));
  this.h = 4;
  this.j && this.j.Pb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Dg(this.j, a), this.j.Ea()) : (this.j && (R(this.a, "reset: Disposing primary before sending ResetFrame."), this.j.g()), this.B && (R(this.a, "reset: Disposing secondary before sending ResetFrame."), this.B.g()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.dc = ug(this, m), Dg(this.dc, a), this.dc.Ea());
  this.onreset && this.onreset.call(this.Lb, a, j)
};
function Eg(a, b, c, d) {
  var f;
  f = a.Kd;
  for(var g = a.Eg, i = a.Dg, l = [], o = m, r = 0, z = c.length;r < z;r++) {
    var s = c[r], x = s[0], s = s[1];
    if(x == f.hb + 1) {
      f.hb += 1;
      for(l.push(s);;) {
        x = f.hb + 1;
        s = f.Ya.get(x, Db);
        if(s === Db) {
          break
        }
        l.push(s[0]);
        f.Ya.remove(x);
        f.n -= s[1];
        f.hb = x
      }
    }else {
      if(!(x <= f.hb)) {
        if(g != k && f.Ya.Q() >= g) {
          o = j;
          break
        }
        var A = vb(s);
        if(i != k && f.n + A > i) {
          o = j;
          break
        }
        f.Ya.set(x, [s, A]);
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
      if(i = c[g], a.Yd && a.Yd.call(a.Lb, i), 4 == a.h || a.sa) {
        return
      }
    }
  }
  d || vg(a);
  if(!(4 == a.h || a.sa) && f) {
    ye(b.a, b.s() + "'s peer caused rwin overflow."), b.g()
  }
}
q.Ke = function(a) {
  ye(this.a, "Failed to start " + G(this) + "; error was " + G(a.message));
  this.g()
};
q.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.h && e(Error("ClientStream.start: " + G(this) + " already started"));
  this.Xd && this.Xd(this);
  this.h = 2;
  if(this.A instanceof jg) {
    var a = Uf(this.A.xa, this), b = Uf(this.A.Va, this), a = $f([a, b]);
    Nc(a, w(this.kg, this));
    Pc(a, w(this.Ke, this))
  }else {
    if(this.A instanceof hg) {
      if(xb) {
        this.Me()
      }else {
        var a = Ye(this.v, this.A.xa), c = this;
        Nc(a, function(a) {
          xb || (xb = new Te(c.v, a));
          return k
        });
        Nc(a, w(this.Me, this));
        Pc(a, w(this.Ke, this))
      }
    }else {
      Fg(this)
    }
  }
};
q.kg = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].uc, f = a[1].uc;
  this.ed.push(a[0]);
  this.ed.push(a[1]);
  this.A = new kg(d, b, f, c);
  Fg(this)
};
q.Me = function() {
  this.A = new ig(this.A.host, this.A.port, xb);
  Fg(this)
};
function Fg(a) {
  a.h = 3;
  a.j = ug(a, j);
  tg(a.j, a.ya, k);
  a.j.Ea()
}
q.c = function() {
  this.a.info(G(this) + " in disposeInternal.");
  rg(this);
  this.h = 5;
  for(var a = this.lc.X(), b = 0;b < a.length;b++) {
    a[b].g()
  }
  for(a = 0;a < this.ed.length;a++) {
    db(this.ed[a].oe, this)
  }
  J && this.mc && (wc(this.mc), this.mc = k);
  this.tf && this.tf.call(this.Lb);
  delete this.lc;
  delete this.j;
  delete this.B;
  delete this.dc;
  delete this.Lb;
  og.f.c.call(this)
};
var dg = 1, xg = 2, yg = 3;
function zg(a, b, c, d, f, g) {
  this.v = a;
  this.D = b;
  this.Kb = c;
  this.Aa = d;
  this.A = f;
  this.F = [];
  this.sb = g;
  this.Pb = !this.yb();
  this.Fb = this.Aa != dg;
  this.Yf = w(this.ah, this)
}
B(zg, L);
q = zg.prototype;
q.a = T("cw.net.ClientTransport");
q.r = k;
q.se = k;
q.Of = k;
q.Rc = k;
q.Ha = m;
q.ad = m;
q.Ab = k;
q.wc = 0;
q.Eb = -1;
q.Pc = -1;
q.Sf = m;
q.gd = m;
q.Qa = 0;
q.Yb = m;
q.N = function(a) {
  a.push("<ClientTransport #", "" + this.Kb, ", becomePrimary=", "" + this.sb, ">")
};
q.s = function() {
  return(this.sb ? "Prim. T#" : "Sec. T#") + this.Kb
};
q.Be = function() {
  return!(!this.Yb && this.wc)
};
q.yb = function() {
  return this.Aa == dg || this.Aa == xg
};
function Gg(a, b) {
  ib(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Eg(a.D, a, b, !a.Fb)
}
function Hg(a, b, c) {
  try {
    var d = tf(b);
    a.wc += 1;
    R(a.a, a.s() + " RECV " + G(d));
    var f;
    1 == a.wc && !d.V(lg) && a.yb() ? (Q(a.a, a.s() + " is closing soon because got bad preamble: " + G(d)), f = j) : f = m;
    if(f) {
      return j
    }
    if(d instanceof jf) {
      if(!/^([ -~]*)$/.test(d.pe)) {
        return a.Yb = j
      }
      a.Pc += 1;
      c.push([a.Pc, d.pe])
    }else {
      if(d instanceof hf) {
        var g = a.D, i = d.Ua;
        g.hf = i;
        var l = g.ya, o = i.qb, c = m;
        o > l.$a && (c = j);
        for(var r = Ab(l).concat(), d = 0;d < r.length;d++) {
          var z = r[d];
          if(z > o) {
            break
          }
          var s = l.w.get(z)[1];
          l.w.remove(z);
          l.n -= s
        }
        for(d = 0;d < i.lb.length;d++) {
          var x = i.lb[d];
          x > l.$a && (c = j);
          l.w.aa(x) && (s = l.w.get(x)[1], l.w.remove(x), l.n -= s)
        }
        l.w.Na() && l.w.clear();
        if(c) {
          return Q(a.a, a.s() + " is closing soon because got bad SackFrame"), a.Yb = j
        }
      }else {
        if(d instanceof lf) {
          a.Pc = d.Hf - 1
        }else {
          if(d instanceof nf) {
            a.D.jf = d.gf
          }else {
            if(d instanceof pf) {
              return S(a.a, a.s() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof sf) {
              return a.Yb = j, "stream_attach_failure" == d.reason ? a.Qa += 1 : "acked_unsent_strings" == d.reason && (a.Qa += 0.5), S(a.a, a.s() + " is closing soon because got " + G(d)), j
            }
            if(!(d instanceof kf)) {
              if(d instanceof of) {
                var A = a.D, cj = !a.Fb;
                S(A.a, "Stream is now confirmed to exist at server.");
                A.le = j;
                A.ae && !cj && (A.ae = m, qg(A))
              }else {
                c.length && (Gg(a, c), cb(c));
                if(d instanceof qf) {
                  var jd = a.D;
                  jd.onreset && jd.onreset.call(jd.Lb, d.yf, d.xe);
                  jd.g();
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
    return Rg instanceof V || e(Rg), Q(a.a, a.s() + " is closing soon because got InvalidFrame: " + G(b)), a.Yb = j
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
      if(c = Hg(a, b[f], d)) {
        break
      }
    }
    d.length && Gg(a, d);
    a.ad = m;
    a.F.length && a.Ea();
    c && (S(a.a, a.s() + " closeSoon is true.  Frames were: " + G(b)), a.g())
  }finally {
    a.ad = m
  }
}
q.ah = function() {
  Q(this.a, this.s() + " timed out due to lack of connection or no data being received.");
  this.g()
};
function Ig(a) {
  a.Rc != k && (a.v.I.clearTimeout(a.Rc), a.Rc = k)
}
function eg(a, b) {
  Ig(a);
  b = Math.round(b);
  a.Rc = a.v.I.setTimeout(a.Yf, b);
  R(a.a, a.s() + "'s receive timeout set to " + b + " ms.")
}
function Pe(a) {
  a.Aa != dg && (a.Aa == yg || a.Aa == xg ? eg(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.Aa)))
}
function sg(a) {
  var b = new ff;
  b.Kb = a.Kb;
  b.wf = 2;
  b.$e = 2;
  a.D.le || (b.Af = j);
  b.jc = a.D.jc;
  b.ne = a.Fb;
  b.ne && (b.pf = 4096);
  b.nf = 3E5;
  b.lf = a.Fb ? Math.floor(10) : 0;
  b.Pf = m;
  a.sb && (b.Kf = k, b.Sd = Math.floor((a.Fb ? 358E4 : 25E3) / 1E3));
  b.Ua = Cb(a.D.Kd);
  b.Kc = a.D.hf;
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
    !a && !this.F.length && sg(this);
    for(a = 0;a < this.F.length;a++) {
      R(this.a, this.s() + " SEND " + G(this.F[a]))
    }
    if(this.yb()) {
      for(var a = [], b = 0, c = this.F.length;b < c;b++) {
        this.F[b].ma(a), a.push("\n")
      }
      this.F = [];
      a = a.join("");
      b = this.sb ? this.A.xa : this.A.Va;
      this.r = fg.sd(this, this.sb ? this.A.vf : this.A.Gf);
      this.se = this.v.I === Ec ? y() : this.v.I.getTime();
      this.r.Rd(b, "POST", a);
      eg(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Fb ? 0 : this.sb ? 25E3 : 0))
    }else {
      if(this.Aa == yg) {
        a = [];
        b = 0;
        for(c = this.F.length;b < c;b++) {
          a.push(this.F[b].ca())
        }
        this.F = [];
        this.r ? this.r.nc(a) : (b = this.A, this.r = new Ue(this), this.r.$c = b.dh.sd(this.r), this.se = this.v.I === Ec ? y() : this.v.I.getTime(), this.r.pd(b.host, b.port), this.r.sa || (this.r.nc(a), this.r.sa || eg(this, 8E3)))
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
    (-1 == a.Eb || a.Eb + 1 != g) && a.F.push(new lf(g));
    a.F.push(new jf(f));
    a.Eb = g
  }
}
q.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  zg.f.c.call(this);
  this.Of = this.v.I === Ec ? y() : this.v.I.getTime();
  this.F = [];
  Ig(this);
  this.r && this.r.g();
  var a = this.D;
  this.D = k;
  Cg(a, this)
};
function Dg(a, b) {
  !a.Ha && !a.F.length && sg(a);
  a.F.push(new qf(b, j));
  a.Sf = j
}
function Bg(a, b, c, d) {
  this.v = a;
  this.D = b;
  this.Je = c;
  this.De = d
}
B(Bg, L);
q = Bg.prototype;
q.Ha = m;
q.Pb = m;
q.Ac = k;
q.Ab = k;
q.a = T("cw.net.DoNothingTransport");
function Jg(a) {
  a.Ac = a.v.I.setTimeout(function() {
    a.Ac = k;
    a.De--;
    a.De ? Jg(a) : a.g()
  }, a.Je)
}
q.Ea = function() {
  this.Ha && !this.Pb && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ha = j;
  Jg(this)
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
  this.Ac != k && this.v.I.clearTimeout(this.Ac);
  var a = this.D;
  this.D = k;
  Cg(a, this)
};
function Kg(a, b) {
  a.setAttribute("role", b);
  a.vi = b
}
;function Lg() {
}
var Mg;
ea(Lg);
q = Lg.prototype;
q.xc = function() {
};
q.i = function(a) {
  var b = a.Fa().i("div", Ng(this, a).join(" "), a.ba);
  this.ce(a, b);
  return b
};
q.Wb = function(a) {
  return a
};
q.Ub = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(H && !K("7")) {
      var d = Og(Yc(a), b);
      d.push(b);
      ra(c ? Zc : $c, a).apply(k, d)
    }else {
      c ? Zc(a, b) : $c(a, b)
    }
  }
};
q.bf = function(a) {
  a.gc == k && (a.gc = "rtl" == (Ld(a.q ? a.e : a.M.p.body, "direction") || ((a.q ? a.e : a.M.p.body).currentStyle ? (a.q ? a.e : a.M.p.body).currentStyle.direction : k) || (a.q ? a.e : a.M.p.body).style && (a.q ? a.e : a.M.p.body).style.direction));
  a.gc && this.Ib(a.b(), j);
  a.isEnabled() && this.Wc(a, a.Mb)
};
q.ce = function(a, b) {
  a.isEnabled() || this.$(b, 1, j);
  a.h & 8 && this.$(b, 8, j);
  a.T & 16 && this.$(b, 16, !!(a.h & 16));
  a.T & 64 && this.$(b, 64, !!(a.h & 64))
};
q.Tc = function(a, b) {
  Sd(a, !b, !H && !Nb)
};
q.Ib = function(a, b) {
  this.Ub(a, this.t() + "-rtl", b)
};
q.df = function(a) {
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
    var f = Pg(this, b);
    f && this.Ub(a, f, c);
    this.$(d, b, c)
  }
};
q.$ = function(a, b, c) {
  Mg || (Mg = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Mg[b]) && a.setAttribute("aria-" + b, c)
};
q.Uc = function(a, b) {
  var c = this.Wb(a);
  if(c && (pd(c), b)) {
    if(v(b)) {
      sd(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = fd(c);
          c.appendChild(v(a) ? b.createTextNode(a) : a)
        }
      };
      u(b) ? E(b, d) : ha(b) && !("nodeType" in b) ? E(fb(b), d) : d(b)
    }
  }
};
q.cb = function(a) {
  return a.b()
};
q.t = p("goog-control");
function Ng(a, b) {
  var c = a.t(), d = [c], f = a.t();
  f != c && d.push(f);
  c = b.h;
  for(f = [];c;) {
    var g = c & -c;
    f.push(Pg(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.ta) && d.push.apply(d, c);
  H && !K("7") && d.push.apply(d, Og(d));
  return d
}
function Og(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  E([], function(d) {
    ab(d, ra(bb, a)) && (!b || bb(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Pg(a, b) {
  if(!a.Ae) {
    var c = a.t();
    a.Ae = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Ae[b]
}
;function Qg(a, b) {
  a || e(Error("Invalid class name " + a));
  la(b) || e(Error("Invalid decorator function " + b))
}
var Sg = {};
function Tg(a, b, c, d, f) {
  if(!H && (!J || !K("525"))) {
    return j
  }
  if(Qb && f) {
    return Ug(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || H && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(H && $b());
    case 27:
      return!J
  }
  return Ug(a)
}
function Ug(a) {
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
function Vg(a) {
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
;function Wg(a, b) {
  a && Xg(this, a, b)
}
B(Wg, Cc);
q = Wg.prototype;
q.e = k;
q.Ic = k;
q.Md = k;
q.Jc = k;
q.Pa = -1;
q.Oa = -1;
var Yg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Zg = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, $g = H || 
J && K("525");
q = Wg.prototype;
q.tg = function(a) {
  if(J && (17 == this.Pa && !a.ctrlKey || 18 == this.Pa && !a.altKey)) {
    this.Oa = this.Pa = -1
  }
  $g && !Tg(a.keyCode, this.Pa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Oa = I ? Vg(a.keyCode) : a.keyCode
};
q.ug = function() {
  this.Oa = this.Pa = -1
};
q.handleEvent = function(a) {
  var b = a.Da, c, d;
  H && "keypress" == a.type ? (c = this.Oa, d = 13 != c && 27 != c ? b.keyCode : 0) : J && "keypress" == a.type ? (c = this.Oa, d = 0 <= b.charCode && 63232 > b.charCode && Ug(c) ? b.charCode : 0) : Nb ? (c = this.Oa, d = Ug(c) ? b.keyCode : 0) : (c = b.keyCode || this.Oa, d = b.charCode || 0, Qb && 63 == d && 224 == c && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in Yg ? f = Yg[c] : 25 == c && a.shiftKey && (f = 9) : g && g in Zg && (f = Zg[g]);
  a = f == this.Pa;
  this.Pa = f;
  b = new ah(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.g()
  }
};
q.b = n("e");
function Xg(a, b, c) {
  a.Jc && a.detach();
  a.e = b;
  a.Ic = M(a.e, "keypress", a, c);
  a.Md = M(a.e, "keydown", a.tg, c, a);
  a.Jc = M(a.e, "keyup", a.ug, c, a)
}
q.detach = function() {
  this.Ic && (wc(this.Ic), wc(this.Md), wc(this.Jc), this.Jc = this.Md = this.Ic = k);
  this.e = k;
  this.Oa = this.Pa = -1
};
q.c = function() {
  Wg.f.c.call(this);
  this.detach()
};
function ah(a, b, c, d) {
  d && this.$b(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
B(ah, kc);
function W(a, b, c) {
  Xd.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ma(b);
      if(d = Sg[d]) {
        break
      }
      b = b.f ? b.f.constructor : k
    }
    b = d ? la(d.La) ? d.La() : new d : k
  }
  this.l = b;
  this.Vc(a)
}
B(W, Xd);
q = W.prototype;
q.ba = k;
q.h = 0;
q.T = 39;
q.kd = 255;
q.Ug = 0;
q.Mb = j;
q.ta = k;
q.Gd = j;
q.jd = m;
q.Jg = k;
q.cb = function() {
  return this.l.cb(this)
};
function bh(a, b) {
  b && (a.ta ? bb(a.ta, b) || a.ta.push(b) : a.ta = [b], a.l.Ub(a, b, j))
}
q.Ub = function(a, b) {
  b ? bh(this, a) : a && this.ta && (db(this.ta, a), 0 == this.ta.length && (this.ta = k), this.l.Ub(this, a, m))
};
q.i = function() {
  var a = this.l.i(this);
  this.e = a;
  var b = this.Jg || this.l.xc();
  b && Kg(a, b);
  this.jd || this.l.Tc(a, m);
  this.Mb || this.l.je(a, m)
};
q.Wb = function() {
  return this.l.Wb(this.b())
};
q.P = function() {
  W.f.P.call(this);
  this.l.bf(this);
  if(this.T & -2 && (this.Gd && ch(this, j), this.T & 32)) {
    var a = this.cb();
    if(a) {
      var b = this.zb || (this.zb = new Wg);
      Xg(b, a);
      P(P(P(ae(this), b, "key", this.Xe), a, "focus", this.rg), a, "blur", this.Ue)
    }
  }
};
function ch(a, b) {
  var c = ae(a), d = a.b();
  b ? (P(P(P(P(c, d, "mouseover", a.Dc), d, "mousedown", a.Bc), d, "mouseup", a.Ye), d, "mouseout", a.Cc), H && P(c, d, "dblclick", a.We)) : (Vd(Vd(Vd(Vd(c, d, "mouseover", a.Dc), d, "mousedown", a.Bc), d, "mouseup", a.Ye), d, "mouseout", a.Cc), H && Vd(c, d, "dblclick", a.We))
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
  if(!v(a)) {
    if(u(a)) {
      a = Za(a, wd).join("")
    }else {
      if(cd && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        xd(a, b, j);
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
function dh(a, b) {
  eh(a, 2, b) && a.ja(2, b)
}
q.Ld = function() {
  return!!(this.h & 4)
};
q.setActive = function(a) {
  eh(this, 4, a) && this.ja(4, a)
};
q.ge = function(a) {
  eh(this, 8, a) && this.ja(8, a)
};
q.ja = function(a, b) {
  this.T & a && b != !!(this.h & a) && (this.l.ja(this, a, b), this.h = b ? this.h | a : this.h & ~a)
};
function X(a, b) {
  return!!(a.kd & b) && !!(a.T & b)
}
function eh(a, b, c) {
  return!!(a.T & b) && !!(a.h & b) != c && (!(a.Ug & b) || a.dispatchEvent(Zd(b, c))) && !a.sa
}
q.Dc = function(a) {
  !fh(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && dh(this, j)
};
q.Cc = function(a) {
  !fh(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(m), X(this, 2) && dh(this, m))
};
function fh(a, b) {
  return!!a.relatedTarget && rd(b, a.relatedTarget)
}
q.Bc = function(a) {
  if(this.isEnabled() && (X(this, 2) && dh(this, j), mc(a) && (!J || !Qb || !a.ctrlKey))) {
    X(this, 4) && this.setActive(j), this.l.df(this) && this.cb().focus()
  }
  !this.jd && mc(a) && (!J || !Qb || !a.ctrlKey) && a.preventDefault()
};
q.Ye = function(a) {
  this.isEnabled() && (X(this, 2) && dh(this, j), this.Ld() && this.ib(a) && X(this, 4) && this.setActive(m))
};
q.We = function(a) {
  this.isEnabled() && this.ib(a)
};
q.ib = function(a) {
  if(X(this, 16)) {
    var b = !(this.h & 16);
    eh(this, 16, b) && this.ja(16, b)
  }
  X(this, 8) && this.ge(j);
  X(this, 64) && (b = !(this.h & 64), eh(this, 64, b) && this.ja(64, b));
  b = new hc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.Zd = a.Zd);
  return this.dispatchEvent(b)
};
q.rg = function() {
  X(this, 32) && eh(this, 32, j) && this.ja(32, j)
};
q.Ue = function() {
  X(this, 4) && this.setActive(m);
  X(this, 32) && eh(this, 32, m) && this.ja(32, m)
};
q.Xe = function(a) {
  return this.Mb && this.isEnabled() && this.Fd(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
q.Fd = function(a) {
  return 13 == a.keyCode && this.ib(a)
};
la(W) || e(Error("Invalid component class " + W));
la(Lg) || e(Error("Invalid renderer class " + Lg));
var gh = ma(W);
Sg[gh] = Lg;
Qg("goog-control", function() {
  return new W(k)
});
function hh() {
}
B(hh, Lg);
ea(hh);
q = hh.prototype;
q.xc = p("button");
q.$ = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : hh.f.$.call(this, a, b, c)
};
q.i = function(a) {
  var b = hh.f.i.call(this, a), c = a.yc();
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
function ih() {
}
B(ih, hh);
ea(ih);
q = ih.prototype;
q.xc = function() {
};
q.i = function(a) {
  a.q && m != a.Gd && ch(a, m);
  a.Gd = m;
  a.kd &= -256;
  a.q && a.h & 32 && e(Error("Component already rendered"));
  a.h & 32 && a.ja(32, m);
  a.T &= -33;
  return a.Fa().i("button", {"class":Ng(this, a).join(" "), disabled:!a.isEnabled(), title:a.yc() || "", value:a.zc() || ""}, a.Pe() || "")
};
q.bf = function(a) {
  P(ae(a), a.b(), "click", a.ib)
};
q.Tc = da;
q.Ib = da;
q.df = function(a) {
  return a.isEnabled()
};
q.Wc = da;
q.ja = function(a, b, c) {
  ih.f.ja.call(this, a, b, c);
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
function jh(a, b, c) {
  W.call(this, a, b || ih.La(), c)
}
B(jh, W);
q = jh.prototype;
q.zc = n("Qf");
q.Zc = function(a) {
  this.Qf = a;
  this.l.Zc(this.b(), a)
};
q.yc = n("Mf");
q.ie = function(a) {
  this.Mf = a;
  this.l.ie(this.b(), a)
};
q.c = function() {
  jh.f.c.call(this);
  delete this.Qf;
  delete this.Mf
};
q.P = function() {
  jh.f.P.call(this);
  if(this.T & 32) {
    var a = this.cb();
    a && P(ae(this), a, "keyup", this.Fd)
  }
};
q.Fd = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.ib(a) : 32 == a.keyCode
};
Qg("goog-button", function() {
  return new jh(k)
});
function kh() {
}
B(kh, hh);
ea(kh);
q = kh.prototype;
q.i = function(a) {
  var b = {"class":"goog-inline-block " + Ng(this, a).join(" "), title:a.yc() || ""}, b = a.Fa().i("div", b, lh(this, a.ba, a.Fa()));
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
q.Wb = function(a) {
  return a && a.firstChild.firstChild
};
function lh(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.t() + "-outer-box"), c.i("div", "goog-inline-block " + (a.t() + "-inner-box"), b))
}
q.t = p("goog-custom-button");
function mh(a, b, c) {
  jh.call(this, a, b || kh.La(), c)
}
B(mh, jh);
Qg("goog-custom-button", function() {
  return new mh(k)
});
var nh = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function oh(a) {
  var b = {}, a = "" + a, c = "#" == a.charAt(0) ? a : "#" + a;
  if(ph.test(c)) {
    return b.Fc = qh(c), b.type = "hex", b
  }
  a: {
    var d = a.match(rh);
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
    return b.Fc = sh(c[0], c[1], c[2]), b.type = "rgb", b
  }
  if(nh && (c = nh[a.toLowerCase()])) {
    return b.Fc = c, b.type = "named", b
  }
  e(Error(a + " is not a valid color string"))
}
var th = /#(.)(.)(.)/;
function qh(a) {
  ph.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  4 == a.length && (a = a.replace(th, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function uh(a) {
  a = qh(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function sh(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || 0 > a || 255 < a || isNaN(b) || 0 > b || 255 < b || isNaN(c) || 0 > c || 255 < c) && e(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = vh(a.toString(16));
  b = vh(b.toString(16));
  c = vh(c.toString(16));
  return"#" + a + b + c
}
var ph = /^#(?:[0-9a-f]{3}){1,2}$/i, rh = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function vh(a) {
  return 1 == a.length ? "0" + a : a
}
;function wh() {
}
wh.prototype.oc = k;
var xh;
function yh() {
}
B(yh, wh);
function zh(a) {
  return(a = Ah(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Bh(a) {
  var b = {};
  Ah(a) && (b[0] = j, b[1] = j);
  return b
}
yh.prototype.Id = k;
function Ah(a) {
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
xh = new yh;
function Ch(a) {
  this.headers = new qb;
  this.Nb = a || k
}
B(Ch, Cc);
Ch.prototype.a = T("goog.net.XhrIo");
var Dh = /^https?$/i;
q = Ch.prototype;
q.Ia = m;
q.k = k;
q.fd = k;
q.Od = "";
q.ff = "";
q.ac = "";
q.wd = m;
q.Gc = m;
q.Jd = m;
q.gb = m;
q.bd = 0;
q.nb = k;
q.Cf = "";
q.hh = m;
q.send = function(a, b, c, d) {
  this.k && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Od = a;
  this.ac = "";
  this.ff = b;
  this.wd = m;
  this.Ia = j;
  this.k = this.Nb ? zh(this.Nb) : zh(xh);
  this.fd = this.Nb ? this.Nb.oc || (this.Nb.oc = Bh(this.Nb)) : xh.oc || (xh.oc = Bh(xh));
  this.k.onreadystatechange = w(this.sf, this);
  try {
    R(this.a, Eh(this, "Opening Xhr")), this.Jd = j, this.k.open(b, a, j), this.Jd = m
  }catch(f) {
    R(this.a, Eh(this, "Error opening Xhr: " + f.message));
    Fh(this, f);
    return
  }
  var a = c || "", g = this.headers.L();
  d && ob(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.aa("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  ob(g, function(a, b) {
    this.k.setRequestHeader(b, a)
  }, this);
  this.Cf && (this.k.responseType = this.Cf);
  "withCredentials" in this.k && (this.k.withCredentials = this.hh);
  try {
    this.nb && (Ec.clearTimeout(this.nb), this.nb = k), 0 < this.bd && (R(this.a, Eh(this, "Will abort after " + this.bd + "ms if incomplete")), this.nb = Ec.setTimeout(w(this.bh, this), this.bd)), R(this.a, Eh(this, "Sending request")), this.Gc = j, this.k.send(a), this.Gc = m
  }catch(i) {
    R(this.a, Eh(this, "Send error: " + i.message)), Fh(this, i)
  }
};
q.bh = function() {
  "undefined" != typeof ba && this.k && (this.ac = "Timed out after " + this.bd + "ms, aborting", R(this.a, Eh(this, this.ac)), this.dispatchEvent("timeout"), this.abort(8))
};
function Fh(a, b) {
  a.Ia = m;
  a.k && (a.gb = j, a.k.abort(), a.gb = m);
  a.ac = b;
  Gh(a);
  Hh(a)
}
function Gh(a) {
  a.wd || (a.wd = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
q.abort = function() {
  this.k && this.Ia && (R(this.a, Eh(this, "Aborting")), this.Ia = m, this.gb = j, this.k.abort(), this.gb = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Hh(this))
};
q.c = function() {
  this.k && (this.Ia && (this.Ia = m, this.gb = j, this.k.abort(), this.gb = m), Hh(this, j));
  Ch.f.c.call(this)
};
q.sf = function() {
  !this.Jd && !this.Gc && !this.gb ? this.Hg() : Ih(this)
};
q.Hg = function() {
  Ih(this)
};
function Ih(a) {
  if(a.Ia && "undefined" != typeof ba) {
    if(a.fd[1] && 4 == a.Ma() && 2 == Jh(a)) {
      R(a.a, Eh(a, "Local request error detected and ignored"))
    }else {
      if(a.Gc && 4 == a.Ma()) {
        Ec.setTimeout(w(a.sf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.Ma()) {
          R(a.a, Eh(a, "Request complete"));
          a.Ia = m;
          var b = Jh(a), c;
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
              b = ("" + a.Od).match(uf)[1] || k, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !Dh.test(b ? b.toLowerCase() : "")
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
            a.ac = d + " [" + Jh(a) + "]";
            Gh(a)
          }
          Hh(a)
        }
      }
    }
  }
}
function Hh(a, b) {
  if(a.k) {
    var c = a.k, d = a.fd[0] ? da : k;
    a.k = k;
    a.fd = k;
    a.nb && (Ec.clearTimeout(a.nb), a.nb = k);
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
function Jh(a) {
  try {
    return 2 < a.Ma() ? a.k.status : -1
  }catch(b) {
    return Q(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.k && 4 == this.Ma() ? this.k.getResponseHeader(a) : h
};
function Eh(a, b) {
  return b + " [" + a.ff + " " + a.Od + " " + Jh(a) + "]"
}
;var Kh = !(H || J && !K("420+"));
function Lh(a, b) {
  this.cd = a;
  this.na = b
}
B(Lh, L);
q = Lh.prototype;
q.r = k;
q.Ta = -1;
q.Te = m;
q.Ze = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Mh(a) {
  var b = bg(a.Ge), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.na, c, b), 1 != b && a.g()) : a.g()
}
q.wg = function() {
  Mh(this);
  if(!this.sa) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.na);
    this.g()
  }
};
q.Mg = function() {
  var a = t.parent;
  if(a) {
    this.Ta = this.r.Ma();
    if(2 <= this.Ta && !this.Te) {
      for(var b = new qb, c = this.Ze.length;c--;) {
        var d = this.Ze[c];
        try {
          b.set(d, this.r.k.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.Q() && (this.Te = j, a.__XHRMaster_ongotheaders(this.na, ub(b)), this.sa)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.na, this.Ta);
    Kh && 3 == this.Ta && Mh(this)
  }else {
    this.g()
  }
};
q.Rd = function(a, b, c) {
  this.r = new Ch;
  M(this.r, "readystatechange", w(this.Mg, this));
  M(this.r, "complete", w(this.wg, this));
  this.r.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Ge = new ag(this.r.k, 1048576)
};
q.c = function() {
  Lh.f.c.call(this);
  delete this.Ge;
  this.r && this.r.g();
  delete this.cd.ic[this.na];
  delete this.cd
};
function Nh() {
  this.ic = {}
}
B(Nh, L);
Nh.prototype.Cg = function(a, b, c, d) {
  var f = new Lh(this, a);
  this.ic[a] = f;
  f.Rd(b, c, d)
};
Nh.prototype.hg = function(a) {
  (a = this.ic[a]) && a.g()
};
Nh.prototype.c = function() {
  Nh.f.c.call(this);
  for(var a = ua(this.ic);a.length;) {
    a.pop().g()
  }
  delete this.ic
};
var Oh = new Nh;
t.__XHRSlave_makeRequest = w(Oh.Cg, Oh);
t.__XHRSlave_dispose = w(Oh.hg, Oh);
var Ph = T("cw.net.demo");
function Qh() {
}
Qh.prototype.Qe = function() {
  return Boolean(Number((new wf(document.location)).S.get("httpStreaming", "0"))) ? 2 : 1
};
function Rh(a) {
  this.p = a
}
var Sh = /\s*;\s*/;
q = Rh.prototype;
q.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && J) {
    var b = "COOKIES_TEST_" + y();
    Th.set(b, "1");
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
  ga(c) || (c = -1);
  f = f ? ";domain=" + f : "";
  d = d ? ";path=" + d : "";
  g = g ? ";secure" : "";
  c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(y() + 1E3 * c)).toUTCString();
  this.p.cookie = a + "=" + b + f + d + c + g
};
q.get = function(a, b) {
  for(var c = a + "=", d = (this.p.cookie || "").split(Sh), f = 0, g;g = d[f];f++) {
    if(0 == g.indexOf(c)) {
      return g.substr(c.length)
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
  return Uh(this).keys
};
q.X = function() {
  return Uh(this).Rf
};
q.Na = function() {
  return!this.p.cookie
};
q.Q = function() {
  return!this.p.cookie ? 0 : (this.p.cookie || "").split(Sh).length
};
q.aa = function(a) {
  return ga(this.get(a))
};
q.rc = function(a) {
  for(var b = Uh(this).Rf, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return j
    }
  }
  return m
};
q.clear = function() {
  for(var a = Uh(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b])
  }
};
function Uh(a) {
  for(var a = (a.p.cookie || "").split(Sh), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), -1 == d ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{keys:b, Rf:c}
}
var Th = new Rh(document);
Th.Qh = 3950;
function Vh() {
  this.zf = y()
}
var Wh = new Vh;
Vh.prototype.set = aa("zf");
Vh.prototype.reset = function() {
  this.set(y())
};
Vh.prototype.get = n("zf");
function Xh(a) {
  this.Kg = a || "";
  this.Tg = Wh
}
Xh.prototype.If = j;
Xh.prototype.Rg = j;
Xh.prototype.Qg = j;
Xh.prototype.Jf = m;
function Yh(a) {
  return 10 > a ? "0" + a : "" + a
}
function Zh(a, b) {
  var c = (a.Lf - b) / 1E3, d = c.toFixed(3), f = 0;
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
function $h(a) {
  Xh.call(this, a)
}
B($h, Xh);
$h.prototype.Jf = j;
function ai(a) {
  this.Lg = w(this.Vf, this);
  this.Oe = new $h;
  this.cf = this.Oe.If = m;
  this.e = a;
  this.jg = this.e.ownerDocument || this.e.document;
  var a = dd(this.e), b = k;
  if(H) {
    b = a.p.createStyleSheet(), Qd(b)
  }else {
    var c = gd(a.p, "head", h, h)[0];
    c || (b = gd(a.p, "body", h, h)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    Qd(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
ai.prototype.Vf = function(a) {
  var b = 100 >= this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight, c = this.jg.createElement("div");
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
  g.push(d.Kg, " ");
  if(d.If) {
    var i = new Date(a.Lf);
    g.push("[", Yh(i.getFullYear() - 2E3) + Yh(i.getMonth() + 1) + Yh(i.getDate()) + " " + Yh(i.getHours()) + ":" + Yh(i.getMinutes()) + ":" + Yh(i.getSeconds()) + "." + Yh(Math.floor(i.getMilliseconds() / 10)), "] ")
  }
  d.Rg && g.push("[", Qa(Zh(a, d.Tg.get())), "s] ");
  d.Qg && g.push("[", Ka(a.Bg), "] ");
  g.push('<span class="', f, '">', Ja(Qa(Ka(a.of))));
  d.Jf && a.zd && g.push("<br>", Ja(Qa(a.yd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  b && (this.e.scrollTop = this.e.scrollHeight)
};
ai.prototype.clear = function() {
  this.e.innerHTML = ""
};
function bi(a, b, c, d, f, g) {
  6 == arguments.length ? this.setTransform(a, b, c, d, f, g) : (0 != arguments.length && e(Error("Insufficient matrix parameters")), this.da = this.ga = 1, this.Y = this.ea = this.fa = this.ha = 0)
}
q = bi.prototype;
q.L = function() {
  return new bi(this.da, this.Y, this.ea, this.ga, this.fa, this.ha)
};
q.setTransform = function(a, b, c, d, f, g) {
  (!ka(a) || !ka(b) || !ka(c) || !ka(d) || !ka(f) || !ka(g)) && e(Error("Invalid transform parameters"));
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
  var d = new bi, f = Math.cos(a), a = Math.sin(a), b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f), c = this.da, d = this.ea;
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
B(Y, Cc);
q = Y.prototype;
q.va = k;
q.e = k;
q.Nf = k;
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
B(Z, Y);
Z.prototype.fill = k;
Z.prototype.qe = k;
Z.prototype.og = n("fill");
Z.prototype.qg = n("qe");
function ci(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
B(ci, Z);
function di(a, b) {
  Y.call(this, a, b)
}
B(di, Y);
function ei(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
B(ei, Z);
function fi(a, b) {
  Y.call(this, a, b)
}
B(fi, Y);
function gi(a, b) {
  Y.call(this, a, b)
}
B(gi, di);
gi.prototype.clear = function() {
  pd(this.b())
};
gi.prototype.Z = function(a, b) {
  hi(this.b(), {width:a, height:b})
};
function ii(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
B(ii, ei);
function ji(a, b) {
  Y.call(this, a, b)
}
B(ji, fi);
ji.prototype.Z = function(a, b) {
  hi(this.b(), {width:a, height:b})
};
function ki() {
}
;function li(a, b) {
  this.ra = a;
  this.bc = b || 1
}
B(li, ki);
function mi() {
  this.pb = 1;
  this.ra = "black"
}
;function ni() {
  this.C = [];
  this.d = [];
  this.pa = []
}
ni.prototype.tb = k;
ni.prototype.U = k;
ni.prototype.Jb = j;
var oi = [2, 2, 6, 6, 0];
q = ni.prototype;
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
q.Xf = function(a, b, c, d) {
  for(var f = this.U[0] - a * Math.cos(af(c)), g = this.U[1] - b * Math.sin(af(c)), i = af(d), d = Math.ceil(2 * (Math.abs(i) / Math.PI)), i = i / d, c = af(c), l = 0;l < d;l++) {
    var o = Math.cos(c), r = Math.sin(c), z = 4 / 3 * Math.sin(i / 2) / (1 + Math.cos(i / 2)), s = f + (o - z * r) * a, x = g + (r + z * o) * b, c = c + i, o = Math.cos(c), r = Math.sin(c);
    this.Fe(s, x, f + (o + z * r) * a, g + (r - z * o) * b, f + o * a, g + r * b)
  }
  return this
};
function pi(a, b) {
  for(var c = a.pa, d = 0, f = 0, g = a.C.length;f < g;f++) {
    var i = a.C[f], l = oi[i] * a.d[f];
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
var qi = {};
qi[0] = ni.prototype.moveTo;
qi[1] = ni.prototype.lineTo;
qi[4] = ni.prototype.close;
qi[2] = ni.prototype.Fe;
qi[3] = ni.prototype.Xf;
function ri(a) {
  if(a.Jb) {
    return a.L()
  }
  var b = new ni;
  pi(a, function(a, d) {
    qi[a].apply(b, d)
  });
  return b
}
ni.prototype.Na = function() {
  return 0 == this.C.length
};
function si(a, b, c, d, f) {
  Xd.call(this, f);
  this.width = a;
  this.height = b;
  this.ka = c || k;
  this.Sb = d || k
}
B(si, Xd);
q = si.prototype;
q.G = k;
q.Ja = 0;
q.Za = 0;
q.Se = function() {
  return this.W()
};
q.W = function() {
  return this.q ? Od(this.b()) : ka(this.width) && ka(this.height) ? new N(this.width, this.height) : k
};
function ti(a) {
  var b = a.W();
  return b ? b.width / (a.ka ? new N(a.ka, a.Sb) : a.W()).width : 0
}
;function ui(a, b, c, d, f) {
  si.call(this, a, b, c, d, f);
  this.Ie = {};
  this.ve = J && !K(526);
  this.eb = new Td(this)
}
var vi;
B(ui, si);
function wi(a, b, c) {
  a = a.M.p.createElementNS("http://www.w3.org/2000/svg", b);
  c && hi(a, c);
  return a
}
function hi(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
q = ui.prototype;
q.rb = function(a, b) {
  (b || this.G).b().appendChild(a.b())
};
q.de = function(a, b) {
  var c = a.b();
  b instanceof li ? (c.setAttribute("fill", b.ra), c.setAttribute("fill-opacity", b.bc)) : c.setAttribute("fill", "none")
};
q.ee = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.ra);
    var d = b.pb;
    v(d) && -1 != d.indexOf("px") ? c.setAttribute("stroke-width", parseFloat(d) / ti(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
q.i = function() {
  var a = wi(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = wi(this, "g");
  this.vd = wi(this, "defs");
  this.G = new gi(b, this);
  a.appendChild(this.vd);
  a.appendChild(b);
  this.e = a;
  if(this.ka || this.Ja || this.Za) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.ve ? this.dd() : this.b().setAttribute("viewBox", this.Ja + " " + this.Za + " " + (this.ka ? this.ka + " " + this.Sb : ""))
  }
};
q.dd = function() {
  if(this.q && (this.ka || this.Ja || !this.Za)) {
    var a = this.W();
    if(0 == a.width) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.Ja, c = -this.Za, d = a.width / this.ka, a = a.height / this.Sb;
      this.G.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
q.Z = function(a, b) {
  Md(this.b(), a, b)
};
q.W = function() {
  if(!I) {
    return this.q ? Od(this.b()) : ui.f.W.call(this)
  }
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
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
  a = wi(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new ii(a, this, f, g);
  this.rb(f, i);
  return f
};
q.drawImage = function(a, b, c, d, f, g) {
  a = wi(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new ji(a, this);
  this.rb(f, g);
  return f
};
q.P = function() {
  var a = this.W();
  ui.f.P.call(this);
  a || this.dispatchEvent("resize");
  if(this.ve) {
    var a = this.width, b = this.height;
    "string" == typeof a && -1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%") && P(this.eb, xi(), Fc, this.dd);
    this.dd()
  }
};
q.ab = function() {
  ui.f.ab.call(this);
  this.ve && Vd(this.eb, xi(), Fc, this.dd)
};
q.c = function() {
  delete this.Ie;
  delete this.vd;
  delete this.G;
  ui.f.c.call(this)
};
function xi() {
  vi || (vi = new Dc(400), vi.start());
  return vi
}
;function yi() {
  return this.e = this.va.M.b(this.R) || this.e
}
function zi(a, b) {
  this.R = a.id;
  Y.call(this, a, b)
}
B(zi, di);
zi.prototype.b = yi;
zi.prototype.clear = function() {
  pd(this.b())
};
zi.prototype.Z = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  this.va.G != this && (c.coordorigin = "0 0")
};
function Ai(a, b, c, d, f, g, i, l) {
  this.R = a.id;
  Z.call(this, a, b, i, l)
}
B(Ai, ei);
Ai.prototype.b = yi;
function Bi(a, b) {
  this.R = a.id;
  Y.call(this, a, b)
}
B(Bi, fi);
Bi.prototype.b = yi;
Bi.prototype.Z = function(a, b) {
  var c = this.b().style;
  c.width = Ci(a) + "px";
  c.height = Ci(b) + "px"
};
function Di(a, b, c, d, f) {
  si.call(this, a, b, c, d, f);
  this.eb = new Td(this)
}
B(Di, si);
var Ei = document.documentMode && 8 <= document.documentMode;
function Ci(a) {
  return Math.round(100 * (parseFloat(a.toString()) - 0.5))
}
function $(a) {
  return Math.round(100 * parseFloat(a.toString()))
}
function Fi(a, b) {
  var c = a.M.createElement("g_vml_:" + b);
  c.id = "goog_" + Sa++;
  return c
}
function Gi(a) {
  Ei && a.q && (a.b().innerHTML = a.b().innerHTML)
}
Di.prototype.rb = function(a, b) {
  (b || this.G).b().appendChild(a.b());
  Gi(this)
};
Di.prototype.de = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    "fill" == f.tagName && c.removeChild(f)
  }
  b instanceof li ? "transparent" == b.ra ? c.filled = m : 1 != b.bc ? (c.filled = j, d = Fi(this, "fill"), d.opacity = Math.round(100 * b.bc) + "%", d.color = b.ra, c.appendChild(d)) : (c.filled = j, c.fillcolor = b.ra) : c.filled = m;
  Gi(this)
};
Di.prototype.ee = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = j;
    var d = b.pb, d = v(d) && -1 == d.indexOf("px") ? parseFloat(d) : d * ti(this), f = c.getElementsByTagName("stroke")[0];
    1 > d ? (f = f || Fi(this, "stroke"), f.opacity = d, f.wi = "1px", f.color = b.ra, c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.ra, c.strokeweight = d + "px")
  }else {
    c.stroked = m
  }
  Gi(this)
};
function Hi(a, b, c, d, f) {
  var g = a.style;
  g.position = "absolute";
  g.left = Ci(b) + "px";
  g.top = Ci(c) + "px";
  g.width = $(d) + "px";
  g.height = $(f) + "px";
  "shape" == a.tagName && (a.coordsize = $(d) + " " + $(f))
}
try {
  eval("document.namespaces")
}catch(Ii) {
}
q = Di.prototype;
q.i = function() {
  var a = this.M.p;
  a.namespaces.g_vml_ || (Ei ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}");
  var a = this.width, b = this.height, c = this.M.i("div", {style:"overflow:hidden;position:relative;width:" + (v(a) && Fa(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (v(b) && Fa(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = Fi(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.ka ? $(this.ka) + " " + $(this.Sb) : $(a) + " " + $(b);
  d.coordorigin = ga(this.Ja) ? $(this.Ja) + " " + $(this.Za) : "0 0";
  c.appendChild(d);
  this.G = new zi(d, this);
  M(c, "resize", w(this.Ed, this))
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
  var l = Fi(this, "oval");
  Hi(l, a - c, b - d, 2 * c, 2 * d);
  a = new Ai(l, this, 0, 0, 0, 0, f, g);
  this.rb(a, i);
  return a
};
q.drawImage = function(a, b, c, d, f, g) {
  var i = Fi(this, "image");
  Hi(i, a, b, c, d);
  Ei ? i.src = f : i.setAttribute("src", f);
  a = new Bi(i, this);
  this.rb(a, g);
  return a
};
q.P = function() {
  Di.f.P.call(this);
  this.Ed();
  Gi(this)
};
q.c = function() {
  this.G = k;
  Di.f.c.call(this)
};
function Ji(a) {
  Y.call(this, k, a);
  this.O = []
}
B(Ji, di);
Ji.prototype.clear = function() {
  this.O.length && (this.O.length = 0, Ki(this.va))
};
Ji.prototype.Z = function() {
};
Ji.prototype.appendChild = function(a) {
  this.O.push(a)
};
Ji.prototype.Ba = function() {
  for(var a = 0, b = this.O.length;a < b;a++) {
    Li(this.va, this.O[a])
  }
};
function Mi(a, b, c, d, f, g, i, l) {
  Z.call(this, a, b, i, l);
  this.dg = c;
  this.eg = d;
  this.Df = f;
  this.Ef = g;
  this.z = new ni;
  this.z.clear();
  this.z.moveTo(this.dg + this.Df * Math.cos(af(0)), this.eg + this.Ef * Math.sin(af(0)));
  this.z.arcTo(this.Df, this.Ef, 0, 360);
  this.z.close();
  this.Ig = new Ni(k, b, this.z, i, l)
}
B(Mi, ei);
Mi.prototype.Ba = function(a) {
  this.Ig.Ba(a)
};
function Ni(a, b, c, d, f) {
  Z.call(this, a, b, d, f);
  this.mb(c)
}
B(Ni, ci);
Ni.prototype.Tb = m;
Ni.prototype.mb = function(a) {
  this.z = a.Jb ? a : ri(a);
  this.Tb && Ki(this.va)
};
Ni.prototype.Ba = function(a) {
  this.Tb = j;
  a.beginPath();
  pi(this.z, function(b, c) {
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
function Oi(a, b, c, d, f, g, i) {
  Y.call(this, a, b);
  this.kh = c;
  this.mh = d;
  this.we = f;
  this.Dd = g;
  this.Sg = i
}
B(Oi, fi);
Oi.prototype.Tb = m;
Oi.prototype.Z = function(a, b) {
  this.we = a;
  this.Dd = b;
  this.Tb && Ki(this.va)
};
Oi.prototype.Ba = function(a) {
  this.af ? (this.we && this.Dd && a.drawImage(this.af, this.kh, this.mh, this.we, this.Dd), this.Tb = j) : (a = new Image, a.onload = w(this.sg, this, a), a.src = this.Sg)
};
Oi.prototype.sg = function(a) {
  this.af = a;
  Ki(this.va)
};
function Pi(a, b, c, d, f) {
  si.call(this, a, b, c, d, f)
}
B(Pi, si);
q = Pi.prototype;
q.de = function() {
  Ki(this)
};
q.ee = function() {
  Ki(this)
};
function Qi(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.Nf ? b.Nf.L() : new bi, f = d.fa, g = d.ha;
  (f || g) && c.translate(f, g);
  (d = d.Y) && c.rotate(Math.asin(d))
}
q.i = function() {
  var a = this.M.i("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Qb = this.M.i("canvas");
  a.appendChild(this.Qb);
  this.Ag = this.G = new Ji(this);
  this.Og = 0;
  Ri(this)
};
q.getContext = function() {
  this.b() || this.i();
  this.ub || (this.ub = this.Qb.getContext("2d"), this.ub.save());
  return this.ub
};
q.Z = function(a, b) {
  this.width = a;
  this.height = b;
  Ri(this);
  Ki(this)
};
q.W = function() {
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.q && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = Od(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Od(f), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
function Ri(a) {
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
function Ki(a) {
  if(!a.ui && a.q) {
    a.reset();
    if(a.ka) {
      var b = a.W();
      a.getContext().scale(b.width / a.ka, b.height / a.Sb)
    }
    (a.Ja || a.Za) && a.getContext().translate(-a.Ja, -a.Za);
    Qi(a, a.G);
    a.G.Ba(a.ub);
    a.getContext().restore()
  }
}
function Li(a, b) {
  var c = a.getContext();
  Qi(a, b);
  if(!b.og || !b.qg) {
    b.Ba(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof li) {
        0 != d.bc && (c.globalAlpha = d.bc, c.fillStyle = d.ra, b.Ba(c), c.fill(), c.globalAlpha = 1)
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
      b.Ba(c), c.strokeStyle = d.ra, d = d.pb, v(d) && -1 != d.indexOf("px") && (d = parseFloat(d) / ti(a)), c.lineWidth = d, c.stroke()
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
  this.q && !this.Og && !(b != this.G && b != this.Ag) && Li(this, a)
};
q.sc = function(a, b, c, d, f, g, i) {
  a = new Mi(k, this, a, b, c, d, f, g);
  this.append(a, i);
  return a
};
q.drawImage = function(a, b, c, d, f, g) {
  a = new Oi(k, this, a, b, c, d, f);
  this.append(a, g);
  return a
};
q.c = function() {
  this.ub = k;
  Pi.f.c.call(this)
};
q.P = function() {
  var a = this.W();
  Pi.f.P.call(this);
  a || (Ri(this), this.dispatchEvent("resize"));
  Ki(this)
};
function Si(a) {
  this.w = [];
  Ti(this, a)
}
B(Si, Cc);
q = Si.prototype;
q.Wa = k;
q.be = k;
function Ti(a, b) {
  b && (E(b, function(a) {
    this.hc(a, m)
  }, a), gb(a.w, b))
}
q.Cd = n("Wa");
q.Re = function() {
  return fb(this.w)
};
q.Yc = function(a) {
  a != this.Wa && (this.hc(this.Wa, m), this.Wa = a, this.hc(a, j));
  this.dispatchEvent("select")
};
q.Bd = function() {
  return this.Wa ? Xa(this.w, this.Wa) : -1
};
q.he = function(a) {
  this.Yc(this.w[a] || k)
};
q.clear = function() {
  cb(this.w);
  this.Wa = k
};
q.c = function() {
  Si.f.c.call(this);
  delete this.w;
  this.Wa = k
};
q.hc = function(a, b) {
  a && ("function" == typeof this.be ? this.be(a, b) : "function" == typeof a.ge && a.ge(b))
};
function Ui() {
}
B(Ui, Lg);
ea(Ui);
var Vi = 0;
Ui.prototype.i = function(a) {
  var b = Ng(this, a);
  return a.Fa().i("div", b ? b.join(" ") : k, Wi(this, a.ba, a.Se(), a.Fa()))
};
function Wi(a, b, c, d) {
  for(var f = [], g = 0, i = 0;g < c.height;g++) {
    for(var l = [], o = 0;o < c.width;o++) {
      var r = b && b[i++];
      l.push(Xi(a, r, d))
    }
    f.push(d.i("tr", a.t() + "-row", l))
  }
  return a.Ee(f, d)
}
Ui.prototype.Ee = function(a, b) {
  var c = b.i("table", this.t() + "-table", b.i("tbody", this.t() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Kg(c, "grid");
  return c
};
function Xi(a, b, c) {
  a = c.i("td", {"class":a.t() + "-cell", id:a.t() + "-cell-" + Vi++}, b);
  Kg(a, "gridcell");
  return a
}
Ui.prototype.Uc = function(a, b) {
  if(a) {
    var c = gd(document, "tbody", this.t() + "-body", a)[0];
    if(c) {
      var d = 0;
      E(c.rows, function(a) {
        E(a.cells, function(a) {
          pd(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = dd(a), i = c.rows[0].cells.length;d < b.length;) {
          var l = b[d++];
          f.push(Xi(this, l, g));
          f.length == i && (l = g.i("tr", this.t() + "-row", f), c.appendChild(l), f.length = 0)
        }
        if(0 < f.length) {
          for(;f.length < i;) {
            f.push(Xi(this, "", g))
          }
          l = g.i("tr", this.t() + "-row", f);
          c.appendChild(l)
        }
      }
    }
    Sd(a, j, I)
  }
};
function Yi(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && bb(Yc(c), a.t() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function Zi(a, b, c, d) {
  c && (c = c.parentNode, a = a.t() + "-cell-hover", d ? Zc(c, a) : $c(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id))
}
Ui.prototype.t = p("goog-palette");
function $i(a, b, c) {
  W.call(this, a, b || Ui.La(), c)
}
B($i, W);
q = $i.prototype;
q.n = k;
q.fb = -1;
q.J = k;
q.c = function() {
  $i.f.c.call(this);
  this.J && (this.J.g(), this.J = k);
  this.n = k
};
q.Vc = function(a) {
  $i.f.Vc.call(this, a);
  aj(this);
  this.J ? (this.J.clear(), Ti(this.J, a)) : (this.J = new Si(a), this.J.be = w(this.hc, this), P(ae(this), this.J, "select", this.vg));
  this.fb = -1
};
q.Pe = p(k);
q.Dc = function(a) {
  $i.f.Dc.call(this, a);
  var b = Yi(this.l, this, a.target);
  if((!b || !a.relatedTarget || !rd(b, a.relatedTarget)) && b != bj(this)) {
    a = this.ba, dj(this, a ? Xa(a, b) : -1)
  }
};
q.Cc = function(a) {
  $i.f.Cc.call(this, a);
  var b = Yi(this.l, this, a.target);
  (!b || !a.relatedTarget || !rd(b, a.relatedTarget)) && b == bj(this) && Zi(this.l, this, b, m)
};
q.Bc = function(a) {
  $i.f.Bc.call(this, a);
  if(this.Ld() && (a = Yi(this.l, this, a.target), a != bj(this))) {
    var b = this.ba;
    dj(this, b ? Xa(b, a) : -1)
  }
};
q.ib = function() {
  var a = bj(this);
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
q.vg = function() {
};
q.Se = n("n");
q.Z = function(a, b) {
  this.b() && e(Error("Component already rendered"));
  this.n = ka(a) ? new N(a, b) : a;
  aj(this)
};
function bj(a) {
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
    d && 0 <= b && b < d.length && Zi(a.l, a, d[b], c)
  }
}
q.hc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.l.t() + "-cell-selected";
    b ? Zc(c, d) : $c(c, d)
  }
};
function aj(a) {
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
;function fj(a, b, c) {
  this.qc = a || [];
  $i.call(this, k, b || Ui.La(), c);
  this.qc = this.qc;
  this.Mc = k;
  this.Uc(gj(this))
}
B(fj, $i);
fj.prototype.Mc = k;
function hj(a) {
  var b = ij(jj);
  a.Mc || (a.Mc = Za(a.qc, function(a) {
    return ij(a)
  }));
  a.he(b ? Xa(a.Mc, b) : -1)
}
function gj(a) {
  return Za(a.qc, function(a) {
    var c = this.Fa().i("div", {"class":this.l.t() + "-colorswatch", style:"background-color:" + a});
    c.title = "#" == a.charAt(0) ? "RGB (" + uh(a).join(", ") + ")" : a;
    return c
  }, a)
}
function ij(a) {
  if(a) {
    try {
      return oh(a).Fc
    }catch(b) {
    }
  }
  return k
}
;var kj, lj, mj, nj, oj, pj = T("whiteboard.logger");
window.onerror = function(a, b, c) {
  ye(pj, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function qj() {
}
qj.prototype.Yg = function(a) {
  this.D = a;
  wg(this.D, "subprotocol:whiteboard")
};
qj.prototype.Xg = function(a, b) {
  pj.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  rj = k
};
qj.prototype.Zg = function(a) {
  var a = ya(a), b = a[0], c = a[1];
  "Point" == b ? kj.sc(c.x, c.y, 5, 5, new mi, new li(c.color), h) : "ClearBoard" == b ? (kj.g(), sj()) : Q(pj, "Strange message from server: " + G(a))
};
qj.prototype.reset = function(a) {
  pj.info("resetting with reason: " + a);
  this.D.reset(a)
};
var rj = k, tj = new Uc(t.window);
function uj() {
  rj && (rj.reset("idle timeout fired"), rj = k)
}
var vj = k;
function wj() {
  vj != k && tj.I.clearTimeout(vj);
  rj && (vj = tj.I.setTimeout(uj, 2592E5))
}
M(window, ["click", "focus", "keydown", "keypress"], wj, j);
function xj() {
  kj.g();
  sj();
  var a = rj;
  pj.info("Telling server to clear the board.");
  wg(a.D, za(["ClearBoard", k]))
}
function yj(a) {
  var b = new kc(a), a = b.offsetX, b = b.offsetY;
  kj.sc(a, b, 5, 5, new mi, new li(lj), h);
  var c = rj, d = lj;
  pj.info("Telling server about circle at: " + a + ", " + b + " with color " + d);
  wg(c.D, za(["Point", {x:a, y:b, color:d}]))
}
function sj() {
  var a;
  a = H && !K("9") ? new Di(800, 600, h, h, h) : J && (!K("420") || Ob) ? new Pi(800, 600, h, h, h) : new ui(800, 600, h, h, h);
  a.i();
  mj = O("drawArea");
  be(a, mj);
  kj = a
}
var jj = "#E06666";
function zj(a) {
  var b;
  (a = a.target.Cd()) ? (a = a.style[Ua("background-color")] || "", b = ij(a)) : b = k;
  b || (b = jj);
  lj = b;
  Th.set("whiteboard_defaultColor", b);
  a = O("whiteboard-cp-value");
  v("background-color") ? Kd(a, b, "background-color") : ta("background-color", ra(Kd, a));
  a = O("whiteboard-cp-value");
  a.title = b;
  b = oh(b).Fc;
  sd(a, b);
  b = uh(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = sh(b[0], b[1], b[2]);
  v("color") ? Kd(a, b, "color") : ta("color", ra(Kd, a))
}
function Aj() {
  nj = (new wf(document.location)).S;
  if(oj = Boolean(Number(nj.get("logging", "0")))) {
    Ce().Xc(we);
    var a = new ai(document.getElementById("log"));
    if(j != a.cf) {
      var b = Ce(), c = a.Lg;
      b.Zb || (b.Zb = []);
      b.Zb.push(c);
      a.cf = j
    }
  }else {
    Ce().Xc(oe)
  }
  pj.info("Logger works.");
  (a = Th.get("whiteboard_defaultColor")) && (jj = a);
  lj = jj;
  b = O("whiteboard-controls-left");
  a = O("whiteboard-controls-right");
  c = kd("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  od(b, c);
  c = kd("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  od(b, c);
  b = new fj("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.Z(8);
  be(b, O("whiteboard-cp"));
  M(b, "action", zj);
  hj(b);
  zj({target:b});
  b = new mh("Clear board");
  bh(b, "clear-board-button");
  be(b, a);
  M(b, "action", xj);
  a = O("drawAreaOverlay");
  Sd(a, j);
  M(a, "click", yj, m);
  sj();
  a = new Qh;
  rj = new qj;
  wj();
  c = (new wf(document.location)).S;
  b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    Q(Ph, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new wf(document.location);
  b ? b = new hg("/_minerva/", c.la, t.__demo_mainSocketPort) : (d ? (b = t.__demo_shared_domain, v(b) || e(Error("domain was " + G(b) + "; expected a string.")), c = c.L(), zf(c, "_____random_____." + b)) : c = c.L(), c.mb("/_minerva/"), Bf(c, "", h), b = new jg(c.toString().replace("_____random_____", "%random%")));
  a = new og(b, a, tj);
  b = rj;
  a.Xd = w(b.Yg, b);
  a.onreset = w(b.Xg, b);
  a.Yd = w(b.Zg, b);
  a.start()
}
var Bj = ["__whiteboard_init"], Cj = t;
!(Bj[0] in Cj) && Cj.execScript && Cj.execScript("var " + Bj[0]);
for(var Dj;Bj.length && (Dj = Bj.shift());) {
  !Bj.length && ga(Aj) ? Cj[Dj] = Aj : Cj = Cj[Dj] ? Cj[Dj] : Cj[Dj] = {}
}
;})();
