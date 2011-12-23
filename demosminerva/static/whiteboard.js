(function(){function e(a) {
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
    return a.ug || (a.ug = new a)
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
  a = fa(a);
  return"object" == a || "array" == a || "function" == a
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
  this.Wc = h
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
          c.push(f), f = b[g], Aa(a, a.Wc ? a.Wc.call(b, "" + g, f) : f, c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), Ca(g, c), c.push(":"), Aa(a, a.Wc ? a.Wc.call(b, g, f) : f, c), d = ","))
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
A(C, Error);
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
    var l = d[i] || "", n = f[i] || "", r = RegExp("(\\d*)(\\D*)", "g"), z = RegExp("(\\d*)(\\D*)", "g");
    do {
      var s = r.exec(l) || ["", "", ""], x = z.exec(n) || ["", "", ""];
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
A(Va, C);
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
}, Ya = D.map ? function(a, b, c) {
  return D.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = v(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in g && (f[i] = b.call(c, g[i], i, a))
  }
  return f
}, Za = D.some ? function(a, b, c) {
  return D.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return j
    }
  }
  return m
}, $a = D.every ? function(a, b, c) {
  return D.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && !b.call(c, f[g], g, a)) {
      return m
    }
  }
  return j
};
function ab(a, b) {
  return 0 <= Xa(a, b)
}
function bb(a) {
  if(!u(a)) {
    for(var b = a.length - 1;0 <= b;b--) {
      delete a[b]
    }
  }
  a.length = 0
}
function cb(a, b) {
  var c = Xa(a, b);
  0 <= c && D.splice.call(a, c, 1)
}
function db(a) {
  return D.concat.apply(D, arguments)
}
function eb(a) {
  if(u(a)) {
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
function gb(a, b, c, d) {
  D.splice.apply(a, hb(arguments, 1))
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
        if(sa(a.t)) {
          a.t(b, c)
        }else {
          if(sa(a.Sf)) {
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
                      var l = d[i++], n = ja(l) ? "o" + ma(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(f, n) || (f[n] = j, d[g++] = l)
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
  if("function" == typeof a.V) {
    a = a.V()
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
  if("function" == typeof a.va) {
    return a.va()
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
    return $a(a, b, h)
  }
  for(var c = nb(a), d = mb(a), f = d.length, g = 0;g < f;g++) {
    if(!b.call(h, d[g], c && c[g], a)) {
      return m
    }
  }
  return j
}
;function qb(a, b) {
  this.w = {};
  this.m = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && e(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.md(a)
  }
}
q = qb.prototype;
q.d = 0;
q.V = o("d");
q.X = function() {
  rb(this);
  for(var a = [], b = 0;b < this.m.length;b++) {
    a.push(this.w[this.m[b]])
  }
  return a
};
q.va = function() {
  rb(this);
  return this.m.concat()
};
q.aa = function(a) {
  return sb(this.w, a)
};
q.wc = function(a) {
  for(var b = 0;b < this.m.length;b++) {
    var c = this.m[b];
    if(sb(this.w, c) && this.w[c] == a) {
      return j
    }
  }
  return m
};
q.q = function(a, b) {
  if(this === a) {
    return j
  }
  if(this.d != a.V()) {
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
  this.w = {};
  this.d = this.m.length = 0
};
q.remove = function(a) {
  return sb(this.w, a) ? (delete this.w[a], this.d--, this.m.length > 2 * this.d && rb(this), j) : m
};
function rb(a) {
  if(a.d != a.m.length) {
    for(var b = 0, c = 0;b < a.m.length;) {
      var d = a.m[b];
      sb(a.w, d) && (a.m[c++] = d);
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
  return sb(this.w, a) ? this.w[a] : b
};
q.set = function(a, b) {
  sb(this.w, a) || (this.d++, this.m.push(a));
  this.w[a] = b
};
q.md = function(a) {
  var b;
  a instanceof qb ? (b = a.va(), a = a.X()) : (b = va(a), a = ua(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
q.M = function() {
  return new qb(this)
};
function ub(a) {
  rb(a);
  for(var b = {}, c = 0;c < a.m.length;c++) {
    var d = a.m[c];
    b[d] = a.w[d]
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
yb.prototype.q = function(a) {
  return a instanceof yb && this.qb == a.qb && this.lb.join(",") == a.lb
};
yb.prototype.t = function(a, b) {
  a.push("new SACK(", "" + this.qb, ", ");
  F(this.lb, a, b);
  a.push(")")
};
function zb() {
  this.B = new qb
}
q = zb.prototype;
q.$a = -1;
q.n = 0;
q.append = function(a) {
  var b = vb(a);
  this.B.set(this.$a + 1, [a, b]);
  this.$a += 1;
  this.n += b
};
q.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
q.t = function(a) {
  a.push("<Queue with ", "" + this.B.V(), " item(s), counter=#", "" + this.$a, ", size=", "" + this.n, ">")
};
function Ab(a) {
  a = a.B.va();
  ib(a);
  return a
}
q.Se = function(a) {
  for(var b = Ab(this), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    (a == k || f >= a) && c.push([f, this.B.get(f)[0]])
  }
  return c
};
function Bb() {
  this.Ya = new qb
}
Bb.prototype.hb = -1;
Bb.prototype.n = 0;
function Cb(a) {
  var b = a.Ya.va();
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
var Nb = Fb, H = Gb, Ob = Jb, I = Hb, Pb = Ib, Qb = t.navigator, Rb = -1 != (Qb && Qb.platform || "").indexOf("Mac"), Sb;
a: {
  var Tb = "", Ub;
  if(Nb && t.opera) {
    var Vb = t.opera.version, Tb = "function" == typeof Vb ? Vb() : Vb
  }else {
    if(Ob ? Ub = /rv\:([^\);]+)(\)|;)/ : H ? Ub = /MSIE\s+([^\);]+)(\)|;)/ : I && (Ub = /WebKit\/(\S+)/), Ub) {
      var Wb = Ub.exec(Kb()), Tb = Wb ? Wb[1] : ""
    }
  }
  if(H) {
    var Xb, Yb = t.document;
    Xb = Yb ? Yb.documentMode : h;
    if(Xb > parseFloat(Tb)) {
      Sb = "" + Xb;
      break a
    }
  }
  Sb = Tb
}
var Zb = {};
function J(a) {
  return Zb[a] || (Zb[a] = 0 <= Ra(Sb, a))
}
var $b = {};
function ac() {
  return $b[9] || ($b[9] = H && document.documentMode && 9 <= document.documentMode)
}
;function bc() {
}
var cc = 0;
q = bc.prototype;
q.key = 0;
q.kb = m;
q.rd = m;
q.ac = function(a, b, c, d, f, g) {
  la(a) ? this.ff = j : a && a.handleEvent && la(a.handleEvent) ? this.ff = m : e(Error("Invalid listener argument"));
  this.Cb = a;
  this.xf = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Jc = g;
  this.rd = m;
  this.key = ++cc;
  this.kb = m
};
q.handleEvent = function(a) {
  return this.ff ? this.Cb.call(this.Jc || this.src, a) : this.Cb.handleEvent.call(this.Cb, a)
};
var dc = !H || ac(), ec = !H || ac(), fc = H && !J("8");
!I || J("528");
Ob && J("1.9b") || H && J("8") || Nb && J("9.5") || I && J("528");
!Ob || J("8");
var gc = {lh:"click", qh:"dblclick", Lh:"mousedown", Ph:"mouseup", Oh:"mouseover", Nh:"mouseout", Mh:"mousemove", Zh:"selectstart", Fh:"keypress", Eh:"keydown", Gh:"keyup", jh:"blur", yh:"focus", rh:"deactivate", zh:H ? "focusin" : "DOMFocusIn", Ah:H ? "focusout" : "DOMFocusOut", kh:"change", Yh:"select", $h:"submit", Dh:"input", Uh:"propertychange", vh:"dragstart", sh:"dragenter", uh:"dragover", th:"dragleave", wh:"drop", di:"touchstart", ci:"touchmove", bi:"touchend", ai:"touchcancel", nh:"contextmenu", 
xh:"error", Ch:"help", Hh:"load", Ih:"losecapture", Vh:"readystatechange", Wh:"resize", Xh:"scroll", fi:"unload", Bh:"hashchange", Qh:"pagehide", Rh:"pageshow", Th:"popstate", oh:"copy", Sh:"paste", ph:"cut", gh:"beforecopy", hh:"beforecut", ih:"beforepaste", Kh:"message", mh:"connect", ei:I ? "webkitTransitionEnd" : Nb ? "oTransitionEnd" : "transitionend"};
function K() {
}
K.prototype.ta = m;
K.prototype.g = function() {
  this.ta || (this.ta = j, this.c())
};
K.prototype.c = function() {
  this.bg && hc.apply(k, this.bg)
};
function hc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? hc.apply(k, d) : d && "function" == typeof d.g && d.g()
  }
}
;function ic(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
A(ic, K);
q = ic.prototype;
q.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
q.jb = m;
q.ic = j;
q.stopPropagation = function() {
  this.jb = j
};
q.preventDefault = function() {
  this.ic = m
};
function jc(a) {
  a.stopPropagation()
}
;function kc(a) {
  kc[" "](a);
  return a
}
kc[" "] = da;
function lc(a, b) {
  a && this.ac(a, b)
}
A(lc, ic);
var mc = [1, 4, 2];
q = lc.prototype;
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
q.be = m;
q.Da = k;
q.ac = function(a, b) {
  var c = this.type = a.type;
  ic.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Ob) {
      var f;
      a: {
        try {
          kc(d.nodeName);
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
  this.offsetX = I || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = I || a.offsetY !== h ? a.offsetY : a.layerY;
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
  this.be = Rb ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Da = a;
  delete this.ic;
  delete this.jb
};
function nc(a) {
  return dc ? 0 == a.Da.button : "click" == a.type ? j : !!(a.Da.button & mc[0])
}
q.stopPropagation = function() {
  lc.f.stopPropagation.call(this);
  this.Da.stopPropagation ? this.Da.stopPropagation() : this.Da.cancelBubble = j
};
q.preventDefault = function() {
  lc.f.preventDefault.call(this);
  var a = this.Da;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, fc) {
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
  lc.f.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Da = k
};
var oc = {}, L = {}, pc = {}, qc = {};
function M(a, b, c, d, f) {
  if(b) {
    if(u(b)) {
      for(var g = 0;g < b.length;g++) {
        M(a, b[g], c, d, f)
      }
      return k
    }
    var d = !!d, i = L;
    b in i || (i[b] = {d:0, ia:0});
    i = i[b];
    d in i || (i[d] = {d:0, ia:0}, i.d++);
    var i = i[d], l = ma(a), n;
    i.ia++;
    if(i[l]) {
      n = i[l];
      for(g = 0;g < n.length;g++) {
        if(i = n[g], i.Cb == c && i.Jc == f) {
          if(i.kb) {
            break
          }
          return n[g].key
        }
      }
    }else {
      n = i[l] = [], i.d++
    }
    g = rc();
    g.src = a;
    i = new bc;
    i.ac(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    n.push(i);
    oc[c] = i;
    pc[l] || (pc[l] = []);
    pc[l].push(i);
    a.addEventListener ? (a == t || !a.xd) && a.addEventListener(b, g, d) : a.attachEvent(b in qc ? qc[b] : qc[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function rc() {
  var a = sc, b = ec ? function(c) {
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
  oc[a].rd = j;
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
        if(a[g].Cb == c && a[g].capture == d && a[g].Jc == f) {
          wc(a[g].key);
          break
        }
      }
    }
  }
}
function wc(a) {
  if(!oc[a]) {
    return m
  }
  var b = oc[a];
  if(b.kb) {
    return m
  }
  var c = b.src, d = b.type, f = b.xf, g = b.capture;
  c.removeEventListener ? (c == t || !c.xd) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in qc ? qc[d] : qc[d] = "on" + d, f);
  c = ma(c);
  f = L[d][g][c];
  if(pc[c]) {
    var i = pc[c];
    cb(i, b);
    0 == i.length && delete pc[c]
  }
  b.kb = j;
  f.qf = j;
  xc(d, g, c, f);
  delete oc[a];
  return j
}
function xc(a, b, c, d) {
  if(!d.Qc && d.qf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].kb ? d[f].xf.src = k : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.qf = m;
    0 == g && (delete L[a][b][c], L[a][b].d--, 0 == L[a][b].d && (delete L[a][b], L[a].d--), 0 == L[a].d && delete L[a])
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
  var d = L;
  return b in d && (d = d[b], c in d && (d = d[c], a = ma(a), d[a])) ? d[a] : k
}
function zc(a, b, c, d, f) {
  var g = 1, b = ma(b);
  if(a[b]) {
    a.ia--;
    a = a[b];
    a.Qc ? a.Qc++ : a.Qc = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var n = a[l];
        n && !n.kb && (g &= Ac(n, f) !== m)
      }
    }finally {
      a.Qc--, xc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Ac(a, b) {
  var c = a.handleEvent(b);
  a.rd && wc(a.key);
  return c
}
function sc(a, b) {
  if(!oc[a]) {
    return j
  }
  var c = oc[a], d = c.type, f = L;
  if(!(d in f)) {
    return j
  }
  var f = f[d], g, i;
  if(!ec) {
    g = b || ca("window.event");
    var l = j in f, n = m in f;
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
    r = new lc;
    r.ac(g, this);
    g = j;
    try {
      if(l) {
        for(var s = [], x = r.currentTarget;x;x = x.parentNode) {
          s.push(x)
        }
        i = f[j];
        i.ia = i.d;
        for(var B = s.length - 1;!r.jb && 0 <= B && i.ia;B--) {
          r.currentTarget = s[B], g &= zc(i, s[B], d, j, r)
        }
        if(n) {
          i = f[m];
          i.ia = i.d;
          for(B = 0;!r.jb && B < s.length && i.ia;B++) {
            r.currentTarget = s[B], g &= zc(i, s[B], d, m, r)
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
  d = new lc(b, this);
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
A(Cc, K);
q = Cc.prototype;
q.xd = j;
q.Tc = k;
q.ie = aa("Tc");
q.addEventListener = function(a, b, c, d) {
  M(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  uc(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = L;
  if(b in c) {
    if(v(a)) {
      a = new ic(a, this)
    }else {
      if(a instanceof ic) {
        a.target = a.target || this
      }else {
        var d = a, a = new ic(b, this);
        xa(a, d)
      }
    }
    var d = 1, f, c = c[b], b = j in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.Tc) {
        f.push(g)
      }
      g = c[j];
      g.ia = g.d;
      for(var i = f.length - 1;!a.jb && 0 <= i && g.ia;i--) {
        a.currentTarget = f[i], d &= zc(g, f[i], a.type, j, a) && a.ic != m
      }
    }
    if(m in c) {
      if(g = c[m], g.ia = g.d, b) {
        for(i = 0;!a.jb && i < f.length && g.ia;i++) {
          a.currentTarget = f[i], d &= zc(g, f[i], a.type, m, a) && a.ic != m
        }
      }else {
        for(f = this;!a.jb && f && g.ia;f = f.Tc) {
          a.currentTarget = f, d &= zc(g, f, a.type, m, a) && a.ic != m
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
  this.Tc = k
};
function Dc(a, b) {
  this.Mc = a || 1;
  this.oc = b || Ec;
  this.pd = w(this.Ug, this);
  this.Td = y()
}
A(Dc, Cc);
Dc.prototype.enabled = m;
var Ec = t.window;
q = Dc.prototype;
q.pa = k;
q.Ug = function() {
  if(this.enabled) {
    var a = y() - this.Td;
    0 < a && a < 0.8 * this.Mc ? this.pa = this.oc.setTimeout(this.pd, this.Mc - a) : (this.dispatchEvent(Fc), this.enabled && (this.pa = this.oc.setTimeout(this.pd, this.Mc), this.Td = y()))
  }
};
q.start = function() {
  this.enabled = j;
  this.pa || (this.pa = this.oc.setTimeout(this.pd, this.Mc), this.Td = y())
};
q.stop = function() {
  this.enabled = m;
  this.pa && (this.oc.clearTimeout(this.pa), this.pa = k)
};
q.c = function() {
  Dc.f.c.call(this);
  this.stop();
  delete this.oc
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
  this.tc = [];
  this.Ae = a;
  this.Ie = b || k
}
q = Gc.prototype;
q.Ka = m;
q.Yb = m;
q.ec = 0;
q.ne = m;
q.Yf = m;
q.qd = 0;
q.cancel = function(a) {
  if(this.Ka) {
    this.hc instanceof Gc && this.hc.cancel()
  }else {
    if(this.J) {
      var b = this.J;
      delete this.J;
      a ? b.cancel(a) : (b.qd--, 0 >= b.qd && b.cancel())
    }
    this.Ae ? this.Ae.call(this.Ie, this) : this.ne = j;
    this.Ka || this.Wb(new Hc)
  }
};
q.De = function(a, b) {
  Ic(this, a, b);
  this.ec--;
  0 == this.ec && this.Ka && Jc(this)
};
function Ic(a, b, c) {
  a.Ka = j;
  a.hc = c;
  a.Yb = !b;
  Jc(a)
}
function Kc(a) {
  a.Ka && (a.ne || e(new Lc), a.ne = m)
}
function Mc(a, b) {
  Kc(a);
  Ic(a, j, b)
}
q.Wb = function(a) {
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
  a.tc.push([b, c, d]);
  a.Ka && Jc(a)
}
function Qc(a, b) {
  Oc(a, b, b, h)
}
function Rc(a) {
  return Za(a.tc, function(a) {
    return la(a[1])
  })
}
function Jc(a) {
  a.ve && a.Ka && Rc(a) && (t.clearTimeout(a.ve), delete a.ve);
  a.J && (a.J.qd--, delete a.J);
  for(var b = a.hc, c = m, d = m;a.tc.length && 0 == a.ec;) {
    var f = a.tc.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.Yb ? i : g) {
      try {
        var l = g.call(f || a.Ie, b);
        ga(l) && (a.Yb = a.Yb && (l == b || l instanceof Error), a.hc = b = l);
        b instanceof Gc && (d = j, a.ec++)
      }catch(n) {
        b = n, a.Yb = j, Rc(a) || (c = j)
      }
    }
  }
  a.hc = b;
  d && a.ec && (Oc(b, w(a.De, a, j), w(a.De, a, m)), b.Yf = j);
  c && (a.ve = t.setTimeout(function() {
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
  b.Wb(a);
  return b
}
function Lc() {
  C.call(this)
}
A(Lc, C);
Lc.prototype.message = "Already called";
function Hc() {
  C.call(this)
}
A(Hc, C);
Hc.prototype.message = "Deferred was cancelled";
function Uc(a) {
  this.N = a;
  this.yc = [];
  this.Me = [];
  this.Xf = w(this.Yg, this)
}
Uc.prototype.pa = k;
function Vc(a, b, c, d) {
  a.yc.push([b, c, d]);
  a.pa == k && (a.pa = a.N.setTimeout(a.Xf, 0))
}
Uc.prototype.Yg = function() {
  this.pa = k;
  var a = this.yc;
  this.yc = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], f = c[1], c = c[2];
    try {
      d.apply(f, c)
    }catch(g) {
      this.N.setTimeout(function() {
        e(g)
      }, 0)
    }
  }
  if(0 == this.yc.length) {
    a = this.Me;
    this.Me = [];
    for(b = 0;b < a.length;b++) {
      Mc(a[b], k)
    }
  }
};
var Wc = new Uc(t.window);
var Xc;
function Yc(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function Zc(a, b) {
  var c = Yc(a), d = hb(arguments, 1), f;
  f = c;
  for(var g = 0, i = 0;i < d.length;i++) {
    ab(f, d[i]) || (f.push(d[i]), g++)
  }
  f = g == d.length;
  a.className = c.join(" ");
  return f
}
function $c(a, b) {
  var c = Yc(a), d = hb(arguments, 1), f;
  f = c;
  for(var g = 0, i = 0;i < f.length;i++) {
    ab(d, f[i]) && (gb(f, i--, 1), g++)
  }
  f = g == d.length;
  a.className = c.join(" ");
  return f
}
;function N(a, b) {
  this.width = a;
  this.height = b
}
q = N.prototype;
q.M = function() {
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
var ad = !H || ac();
!Ob && !H || H && ac() || Ob && J("1.9.1");
var bd = H && !J("9");
function cd(a) {
  return a ? new dd(fd(a)) : Xc || (Xc = new dd)
}
function O(a) {
  return v(a) ? document.getElementById(a) : a
}
function gd(a, b, c, d) {
  a = d || a;
  b = b && "*" != b ? b.toUpperCase() : "";
  if(a.querySelectorAll && a.querySelector && (!I || "CSS1Compat" == document.compatMode || J("528")) && (b || c)) {
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
  ta(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in id ? a.setAttribute(id[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var id = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function jd(a, b, c) {
  return kd(document, arguments)
}
function kd(a, b) {
  var c = b[0], d = b[1];
  if(!ad && d && (d.name || d.type)) {
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
  2 < b.length && ld(a, c, b, 2);
  return c
}
function ld(a, b, c, d) {
  function f(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && 0 < g.nodeType) ? E(md(g) ? eb(g) : g, f) : f(g)
  }
}
function nd(a, b) {
  ld(fd(a), a, arguments, 1)
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
function fd(a) {
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
      od(a), a.appendChild(fd(a).createTextNode(b))
    }
  }
}
var sd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, td = {IMG:" ", BR:"\n"};
function ud(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ka(a) && 0 <= a && 32768 > a) : m
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
    if(ja(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(la(a)) {
      return"function" == typeof a.item
    }
  }
  return m
}
function dd(a) {
  this.p = a || t.document || document
}
q = dd.prototype;
q.Fa = cd;
q.b = function(a) {
  return v(a) ? this.p.getElementById(a) : a
};
q.i = function(a, b, c) {
  return kd(this.p, arguments)
};
q.createElement = function(a) {
  return this.p.createElement(a)
};
q.createTextNode = function(a) {
  return this.p.createTextNode(a)
};
q.Fe = function(a, b, c) {
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
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', Ka(c), '">'), xd(a, b[c]), a.push("</property>"))
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
;var zd;
(function() {
  function a(a) {
    a = a.match(/[\d]+/g);
    a.length = 3;
    return a.join(".")
  }
  var b = m, c = "";
  if(navigator.plugins && navigator.plugins.length) {
    var d = navigator.plugins["Shockwave Flash"];
    d && (b = j, d.description && (c = a(d.description)));
    navigator.plugins["Shockwave Flash 2.0"] && (b = j, c = "2.0.0.11")
  }else {
    if(navigator.mimeTypes && navigator.mimeTypes.length) {
      (b = (d = navigator.mimeTypes["application/x-shockwave-flash"]) && d.enabledPlugin) && (c = a(d.enabledPlugin.description))
    }else {
      try {
        d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), b = j, c = a(d.GetVariable("$version"))
      }catch(f) {
        try {
          d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = j, c = "6.0.21"
        }catch(g) {
          try {
            d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = j, c = a(d.GetVariable("$version"))
          }catch(i) {
          }
        }
      }
    }
  }
  zd = c
})();
function Ad(a, b, c) {
  a.style[Ua(c)] = b
}
function Bd(a, b) {
  var c = fd(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function Cd(a, b, c) {
  b instanceof N ? (c = b.height, b = b.width) : c == h && e(Error("missing height argument"));
  a.style.width = Dd(b);
  a.style.height = Dd(c)
}
function Dd(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
function Ed(a) {
  if("none" != (Bd(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style && a.style.display)) {
    return Fd(a)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = Fd(a);
  b.display = c;
  b.position = f;
  b.visibility = d;
  return a
}
function Fd(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = I && !b && !c;
  return(!ga(b) || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), H && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new N(b.right - b.left, b.bottom - b.top)) : new N(b, c)
}
function Gd(a) {
  H ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[I ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var Hd = Ob ? "MozUserSelect" : I ? "WebkitUserSelect" : k;
function Id(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Hd) {
    if(b = b ? "none" : "", a.style[Hd] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[Hd] = b
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
;function Jd(a) {
  this.eb = a;
  this.m = []
}
A(Jd, K);
var Kd = [];
function P(a, b, c, d) {
  u(c) || (Kd[0] = c, c = Kd);
  for(var f = 0;f < c.length;f++) {
    a.m.push(M(b, c[f], d || a, m, a.eb || a))
  }
  return a
}
function Ld(a, b, c, d, f, g) {
  if(u(c)) {
    for(var i = 0;i < c.length;i++) {
      Ld(a, b, c[i], d, f, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.eb || a;
      f = !!f;
      if(b = vc(b, c, f)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].kb && b[c].Cb == d && b[c].capture == f && b[c].Jc == g) {
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
Jd.prototype.ce = function() {
  E(this.m, wc);
  this.m.length = 0
};
Jd.prototype.c = function() {
  Jd.f.c.call(this);
  this.ce()
};
Jd.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Md() {
}
ea(Md);
Md.prototype.Cg = 0;
Md.La();
function Q(a) {
  this.O = a || cd();
  this.jc = Nd
}
A(Q, Cc);
Q.prototype.tg = Md.La();
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
q = Q.prototype;
q.R = k;
q.r = m;
q.e = k;
q.jc = k;
q.J = k;
q.P = k;
q.Sb = k;
q.Zg = m;
function Pd(a) {
  return a.R || (a.R = ":" + (a.tg.Cg++).toString(36))
}
q.b = o("e");
function Qd(a) {
  return a.wb || (a.wb = new Jd(a))
}
q.getParent = o("J");
q.ie = function(a) {
  this.J && this.J != a && e(Error("Method not supported"));
  Q.f.ie.call(this, a)
};
q.Fa = o("O");
q.i = function() {
  this.e = this.O.createElement("div")
};
function Rd(a, b) {
  a.r && e(Error("Component already rendered"));
  a.e || a.i();
  b ? b.insertBefore(a.e, k) : a.O.p.body.appendChild(a.e);
  (!a.J || a.J.r) && a.Q()
}
q.Q = function() {
  this.r = j;
  Sd(this, function(a) {
    !a.r && a.b() && a.Q()
  })
};
q.ab = function() {
  Sd(this, function(a) {
    a.r && a.ab()
  });
  this.wb && this.wb.ce();
  this.r = m
};
q.c = function() {
  Q.f.c.call(this);
  this.r && this.ab();
  this.wb && (this.wb.g(), delete this.wb);
  Sd(this, function(a) {
    a.g()
  });
  !this.Zg && this.e && pd(this.e);
  this.J = this.e = this.Sb = this.P = k
};
q.Xb = o("e");
q.Hb = function(a) {
  this.r && e(Error("Component already rendered"));
  this.jc = a
};
function Sd(a, b) {
  a.P && E(a.P, b, h)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : Pd(a), a = this.Sb && c ? (c in this.Sb ? this.Sb[c] : h) || k : k;
    if(c && a) {
      var d = this.Sb;
      c in d && delete d[c];
      cb(this.P, a);
      b && (a.ab(), a.e && pd(a.e));
      c = a;
      c == k && e(Error("Unable to set parent component"));
      c.J = k;
      Q.f.ie.call(c, k)
    }
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function Td(a) {
  this.w = new qb;
  a && this.md(a)
}
function Ud(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ma(a) : b.substr(0, 1) + a
}
q = Td.prototype;
q.V = function() {
  return this.w.V()
};
q.add = function(a) {
  this.w.set(Ud(a), a)
};
q.md = function(a) {
  for(var a = mb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
q.ce = function(a) {
  for(var a = mb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
q.remove = function(a) {
  return this.w.remove(Ud(a))
};
q.clear = function() {
  this.w.clear()
};
q.Na = function() {
  return this.w.Na()
};
q.contains = function(a) {
  return this.w.aa(Ud(a))
};
q.X = function() {
  return this.w.X()
};
q.M = function() {
  return new Td(this)
};
q.q = function(a) {
  return this.V() == lb(a) && Vd(this, a)
};
function Vd(a, b) {
  var c = lb(b);
  if(a.V() > c) {
    return m
  }
  !(b instanceof Td) && 5 < c && (b = new Td(b));
  return pb(a, function(a) {
    if("function" == typeof b.contains) {
      a = b.contains(a)
    }else {
      if("function" == typeof b.wc) {
        a = b.wc(a)
      }else {
        if(ha(b) || v(b)) {
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
;function Wd(a) {
  return Xd(a || arguments.callee.caller, [])
}
function Xd(a, b) {
  var c = [];
  if(ab(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Yd(a) + "(");
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
            g = (g = Yd(g)) ? g : "[fn]";
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
        c.push(Xd(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Yd(a) {
  if(Zd[a]) {
    return Zd[a]
  }
  a = "" + a;
  if(!Zd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Zd[a] = b ? b[1] : "[Anonymous]"
  }
  return Zd[a]
}
var Zd = {};
function $d(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
$d.prototype.Dd = k;
$d.prototype.Cd = k;
var ae = 0;
$d.prototype.reset = function(a, b, c, d, f) {
  "number" == typeof f || ae++;
  this.Jf = d || y();
  this.Bb = a;
  this.of = b;
  this.xg = c;
  delete this.Dd;
  delete this.Cd
};
$d.prototype.ad = aa("Bb");
function be(a) {
  this.Bg = a
}
be.prototype.J = k;
be.prototype.Bb = k;
be.prototype.P = k;
be.prototype.$b = k;
function ce(a, b) {
  this.name = a;
  this.value = b
}
ce.prototype.toString = o("name");
var de = new ce("OFF", Infinity), ee = new ce("SHOUT", 1200), fe = new ce("SEVERE", 1E3), ge = new ce("WARNING", 900), he = new ce("INFO", 800), ie = new ce("CONFIG", 700), je = new ce("FINE", 500), ke = new ce("FINEST", 300), le = new ce("ALL", 0);
q = be.prototype;
q.getParent = o("J");
q.ad = aa("Bb");
function me(a) {
  if(a.Bb) {
    return a.Bb
  }
  if(a.J) {
    return me(a.J)
  }
  Wa("Root logger has no level set.");
  return k
}
q.log = function(a, b, c) {
  if(a.value >= me(this).value) {
    a = this.lg(a, b, c);
    b = "log:" + a.of;
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.$b) {
        for(var f = 0, g = h;g = c.$b[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
q.lg = function(a, b, c) {
  var d = new $d(a, "" + b, this.Bg);
  if(c) {
    d.Dd = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var i;
      var l = ca("window.location.href");
      if(v(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var n, r, z = m;
        try {
          n = c.lineNumber || c.mi || "Not available"
        }catch(s) {
          n = "Not available", z = j
        }
        try {
          r = c.fileName || c.filename || c.sourceURL || l
        }catch(x) {
          r = "Not available", z = j
        }
        i = z || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:r, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + Ka(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + Ka(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ka(Wd(g) + "-> ")
    }catch(B) {
      f = "Exception trying to expose exception! You win, we lose. " + B
    }
    d.Cd = f
  }
  return d
};
function ne(a, b) {
  a.log(fe, b, h)
}
function R(a, b) {
  a.log(ge, b, h)
}
q.info = function(a, b) {
  this.log(he, a, b)
};
function S(a, b) {
  a.log(je, b, h)
}
function T(a, b) {
  a.log(ke, b, h)
}
var oe = {}, pe = k;
function qe() {
  pe || (pe = new be(""), oe[""] = pe, pe.ad(ie))
}
function re() {
  qe();
  return pe
}
function U(a) {
  qe();
  var b;
  if(!(b = oe[a])) {
    b = new be(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = U(a.substr(0, c));
    c.P || (c.P = {});
    c.P[d] = b;
    b.J = c;
    oe[a] = b
  }
  return b
}
;function se(a, b) {
  Q.call(this, b);
  this.ig = a;
  this.Bd = new Jd(this);
  this.Ac = new qb
}
A(se, Q);
q = se.prototype;
q.a = U("goog.ui.media.FlashObject");
q.ah = "window";
q.ze = "#000000";
q.Uf = "sameDomain";
q.Z = function(a, b) {
  this.pb = v(a) ? a : Math.round(a) + "px";
  this.Ld = v(b) ? b : Math.round(b) + "px";
  this.b() && Cd(this.b() ? this.b().firstChild : k, this.pb, this.Ld);
  return this
};
q.Q = function() {
  se.f.Q.call(this);
  var a = this.b(), b;
  b = H ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = H ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = Ga(c, this.ah), d = this.Ac.va(), f = this.Ac.X(), g = [], i = 0;i < d.length;i++) {
    var l = Ia(d[i]), n = Ia(f[i]);
    g.push(l + "=" + n)
  }
  b = Ga(b, Pd(this), Pd(this), "goog-ui-media-flash-object", Ka(this.ig), Ka(g.join("&")), this.ze, this.Uf, c);
  a.innerHTML = b;
  this.pb && this.Ld && this.Z(this.pb, this.Ld);
  P(this.Bd, this.b(), ua(gc), jc)
};
q.i = function() {
  this.Af != k && !(0 <= Ra(zd, this.Af)) && (R(this.a, "Required flash version not found:" + this.Af), e(Error("Method not supported")));
  var a = this.Fa().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
q.c = function() {
  se.f.c.call(this);
  this.Ac = k;
  this.Bd.g();
  this.Bd = k
};
function te() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ y()).toString(36)
}
function ue(a) {
  return a.substr(0, a.length - 1)
}
var ve = /^(0|[1-9]\d*)$/, we = /^(0|\-?[1-9]\d*)$/;
function xe(a) {
  var b = ye;
  return ve.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function ze(a) {
  C.call(this, a)
}
A(ze, C);
ze.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function Ae(a, b, c) {
  function d() {
    f && delete t.__loadFlashObject_callbacks[f]
  }
  var f;
  if(Ob && !J("1.8.1.20")) {
    return Tc(new ze("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Ra(zd, "9"))) {
    return b = zd, Tc(new ze("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  f = "_" + te();
  var i = new Gc(d);
  t.__loadFlashObject_callbacks[f] = function() {
    a.setTimeout(function() {
      d();
      Mc(i, O(g))
    }, 0)
  };
  b.Ac.set("onloadcallback", '__loadFlashObject_callbacks["' + f + '"]()');
  g = Pd(b);
  Rd(b, c);
  return i
}
function Be(a, b, c) {
  var d = Ae(a, b, c), f = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  Qc(d, function(b) {
    a.clearTimeout(f);
    return b
  });
  return d
}
;function Ce(a, b) {
  this.R = "_" + te();
  this.gd = a;
  this.Sa = b;
  this.Xa = a.Xa
}
A(Ce, K);
q = Ce.prototype;
q.Db = j;
q.vd = m;
q.a = U("cw.net.FlashSocket");
q.t = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.R);
  a.push("'>")
};
function De(a, b, c) {
  "frames" == b ? (a = a.Sa, Ee(a.L), Fe(a.L, c)) : "stillreceiving" == b ? (c = a.Sa, T(c.a, "onstillreceiving"), Ee(c.L)) : "connect" == b ? (c = a.Sa, c.a.info("onconnect"), Ee(c.L), a = c.Pb, c.Pb = k, a.length && (T(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.dd.rc(a))) : "close" == b ? (a.Db = m, a.g()) : "ioerror" == b ? (a.Db = m, b = a.Sa, R(b.a, "onioerror: " + G(c)), Ge(b.L, m), a.g()) : "securityerror" == b ? (a.Db = m, b = a.Sa, R(b.a, "onsecurityerror: " + G(c)), 
  Ge(b.L, m), a.g()) : e(Error("bad event: " + b))
}
function He(a) {
  a.vd = j;
  a.Db = m;
  a.g()
}
q.td = function(a, b) {
  try {
    var c = this.Xa.CallFunction(yd("__FC_connect", this.R, a, b, "<int32/>\n"))
  }catch(d) {
    return ne(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), He(this)
  }
  '"OK"' != c && e(Error("__FC_connect failed? ret: " + c))
};
q.rc = function(a) {
  try {
    var b = this.Xa.CallFunction(yd("__FC_writeFrames", this.R, a))
  }catch(c) {
    return ne(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), He(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (R(this.a, "Flash no longer knows of " + this.R + "; disposing."), this.g()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
q.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.Db);
  Ce.f.c.call(this);
  var a = this.Xa;
  delete this.Xa;
  if(this.Db) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(yd("__FC_close", this.R)))
    }catch(b) {
      ne(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.vd = j
    }
  }
  if(this.vd) {
    a = this.Sa, R(a.a, "oncrash"), Ge(a.L, j)
  }else {
    this.Sa.onclose()
  }
  delete this.Sa;
  delete this.gd.xb[this.R]
};
function Ie(a, b) {
  this.H = a;
  this.Xa = b;
  this.xb = {};
  this.sd = "__FST_" + te();
  t[this.sd] = w(this.eg, this);
  var c = b.CallFunction(yd("__FC_setCallbackFunc", this.sd));
  '"OK"' != c && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
A(Ie, K);
q = Ie.prototype;
q.a = U("cw.net.FlashSocketTracker");
q.t = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  F(this.xb, a, b);
  a.push(">")
};
q.wd = function(a) {
  a = new Ce(this, a);
  return this.xb[a.R] = a
};
q.cg = function(a, b, c, d) {
  var f = this.xb[a];
  f ? "frames" == b && d ? (De(f, "ioerror", "FlashConnector hadError while handling data."), f.g()) : De(f, b, c) : R(this.a, "Cannot dispatch because we have no instance: " + G([a, b, c, d]))
};
q.eg = function(a, b, c, d) {
  try {
    Vc(this.H, this.cg, this, [a, b, c, d])
  }catch(f) {
    t.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
q.c = function() {
  Ie.f.c.call(this);
  for(var a = ua(this.xb);a.length;) {
    a.pop().g()
  }
  delete this.xb;
  delete this.Xa;
  t[this.sd] = h
};
function Je(a) {
  this.L = a;
  this.Pb = []
}
A(Je, K);
q = Je.prototype;
q.a = U("cw.net.FlashSocketConduit");
q.rc = function(a) {
  this.Pb ? (T(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Pb.push.apply(this.Pb, a)) : (T(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.dd.rc(a))
};
q.td = function(a, b) {
  this.dd.td(a, b)
};
q.onclose = function() {
  this.a.info("onclose");
  Ge(this.L, m)
};
q.c = function() {
  this.a.info("in disposeInternal.");
  Je.f.c.call(this);
  this.dd.g();
  delete this.L
};
var Ke = [];
function Le() {
  var a = new Gc;
  Ke.push(a);
  return a
}
function Me(a) {
  var b = Ke;
  Ke = [];
  E(b, function(b) {
    Mc(b, a)
  })
}
function Ne(a, b) {
  if(Ke.length) {
    return Le()
  }
  var c = new se(b + "FlashConnector.swf?cb=" + Oe);
  c.ze = "#777777";
  c.Z(300, 30);
  var d = O("minerva-elements");
  d || e(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
  var f = O("minerva-elements-FlashConnectorSwf");
  f || (f = jd("div", {id:"minerva-elements-FlashConnectorSwf"}), d.appendChild(f));
  wb = Be(a.N, c, f);
  Nc(wb, Me);
  return Le()
}
;function Pe() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function Qe(a) {
  return a * Math.PI / 180
}
;var ye = Math.pow(2, 53);
var Re = {Sf:p("<cw.eq.Wildcard>")};
function Se(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function Te(a, b, c) {
  var d = fa(a), f = fa(b);
  if(a == Re || b == Re) {
    return j
  }
  if(a != k && "function" == typeof a.q) {
    return c && c.push("running custom equals function on left object"), a.q(b, c)
  }
  if(b != k && "function" == typeof b.q) {
    return c && c.push("running custom equals function on right object"), b.q(a, c)
  }
  if(Se(d) || Se(f)) {
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
                if(!Te(a[d], b[d], c)) {
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
          if(a.Rf == Eb && b.Rf == Eb) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!Te(a[g], b[g], c)) {
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
;function V(a) {
  C.call(this, a)
}
A(V, C);
V.prototype.name = "cw.net.InvalidFrame";
function Ue() {
  var a = [];
  this.ma(a);
  return a.join("")
}
function Ve() {
}
Ve.prototype.q = function(a, b) {
  return!(a instanceof Ve) ? m : Te(We(this), We(a), b)
};
Ve.prototype.t = function(a, b) {
  a.push("<HelloFrame properties=");
  F(We(this), a, b);
  a.push(">")
};
function We(a) {
  return[a.Kb, a.wf, a.af, a.zf, a.nc, a.qe, a.pf, a.nf, a.Wd, a.lf, a.Nf, a.If, a.oa, a.Pc]
}
Ve.prototype.ca = Ue;
Ve.prototype.ma = function(a) {
  var b = {};
  b.tnum = this.Kb;
  b.ver = this.wf;
  b.format = this.af;
  b["new"] = this.zf;
  b.id = this.nc;
  b.ming = this.qe;
  b.pad = this.pf;
  b.maxb = this.nf;
  ga(this.Wd) && (b.maxt = this.Wd);
  b.maxia = this.lf;
  b.tcpack = this.Nf;
  b.eeds = this.If;
  b.sack = this.oa instanceof yb ? ue((new Xe(this.oa)).ca()) : this.oa;
  b.seenack = this.Pc instanceof yb ? ue((new Xe(this.Pc)).ca()) : this.Pc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(za(b), "H")
};
function Ye(a) {
  this.Jb = a
}
Ye.prototype.q = function(a) {
  return a instanceof Ye && this.Jb == a.Jb
};
Ye.prototype.t = function(a, b) {
  a.push("new StringFrame(");
  F(this.Jb, a, b);
  a.push(")")
};
Ye.prototype.ca = Ue;
Ye.prototype.ma = function(a) {
  a.push(this.Jb, " ")
};
function Ze(a) {
  this.vc = a
}
Ze.prototype.q = function(a) {
  return a instanceof Ze && this.vc == a.vc
};
Ze.prototype.t = function(a, b) {
  a.push("new CommentFrame(");
  F(this.vc, a, b);
  a.push(")")
};
Ze.prototype.ca = Ue;
Ze.prototype.ma = function(a) {
  a.push(this.vc, "^")
};
function $e(a) {
  this.lc = a
}
$e.prototype.q = function(a) {
  return a instanceof $e && this.lc == a.lc
};
$e.prototype.t = function(a) {
  a.push("new SeqNumFrame(", "" + this.lc, ")")
};
$e.prototype.ca = Ue;
$e.prototype.ma = function(a) {
  a.push("" + this.lc, "N")
};
function af(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = ye;
    if(we.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var g = xe(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new yb(a, c)
}
function Xe(a) {
  this.oa = a
}
Xe.prototype.q = function(a, b) {
  return a instanceof Xe && this.oa.q(a.oa, b)
};
Xe.prototype.t = function(a, b) {
  a.push("new SackFrame(");
  F(this.oa, a, b);
  a.push(")")
};
Xe.prototype.ca = Ue;
Xe.prototype.ma = function(a) {
  var b = this.oa;
  a.push(b.lb.join(","), "|", "" + b.qb);
  a.push("A")
};
function bf(a) {
  this.cc = a
}
bf.prototype.q = function(a, b) {
  return a instanceof bf && this.cc.q(a.cc, b)
};
bf.prototype.t = function(a, b) {
  a.push("new StreamStatusFrame(");
  F(this.cc, a, b);
  a.push(")")
};
bf.prototype.ca = Ue;
bf.prototype.ma = function(a) {
  var b = this.cc;
  a.push(b.lb.join(","), "|", "" + b.qb);
  a.push("T")
};
function cf() {
}
cf.prototype.t = function(a) {
  a.push("new StreamCreatedFrame()")
};
cf.prototype.q = function(a) {
  return a instanceof cf
};
cf.prototype.ca = Ue;
cf.prototype.ma = function(a) {
  a.push("C")
};
function df() {
}
df.prototype.t = function(a) {
  a.push("new YouCloseItFrame()")
};
df.prototype.q = function(a) {
  return a instanceof df
};
df.prototype.ca = Ue;
df.prototype.ma = function(a) {
  a.push("Y")
};
function ef(a, b) {
  this.fc = a;
  this.Ob = b
}
ef.prototype.q = function(a) {
  return a instanceof ef && this.fc == a.fc && this.Ob == a.Ob
};
ef.prototype.t = function(a, b) {
  a.push("new ResetFrame(");
  F(this.fc, a, b);
  a.push(", ", "" + this.Ob, ")")
};
ef.prototype.ca = Ue;
ef.prototype.ma = function(a) {
  a.push(this.fc, "|", "" + Number(this.Ob), "!")
};
var ff = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function gf(a) {
  this.reason = a
}
gf.prototype.q = function(a) {
  return a instanceof gf && this.reason == a.reason
};
gf.prototype.t = function(a, b) {
  a.push("new TransportKillFrame(");
  F(this.reason, a, b);
  a.push(")")
};
gf.prototype.ca = Ue;
gf.prototype.ma = function(a) {
  a.push(this.reason, "K")
};
function hf(a) {
  a || e(new V("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new Ye(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = af(ue(a)), a == k && e(new V("bad sack")), new Xe(a)
  }
  if("N" == b) {
    return a = xe(ue(a)), a == k && e(new V("bad seqNum")), new $e(a)
  }
  if("T" == b) {
    return a = af(ue(a)), a == k && e(new V("bad lastSackSeen")), new bf(a)
  }
  if("Y" == b) {
    return 1 != a.length && e(new V("leading garbage")), new df
  }
  if("^" == b) {
    return new Ze(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && e(new V("leading garbage")), new cf
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && e(new V("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && e(new V("bad applicationLevel")), new ef(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = ff[a], a == k && e(new V("unknown kill reason: " + a)), new gf(a)
  }
  e(new V("Invalid frame type " + b))
}
;var jf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function kf(a, b) {
  var c = a.match(jf), d = b.match(jf);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function lf(a, b) {
  var c;
  a instanceof lf ? (this.Gb(b == k ? a.xa : b), mf(this, a.za), nf(this, a.ob), of(this, a.la), pf(this, a.Ra), this.mb(a.z), qf(this, a.S.M()), rf(this, a.bb)) : a && (c = ("" + a).match(jf)) ? (this.Gb(!!b), mf(this, c[1] || "", j), nf(this, c[2] || "", j), of(this, c[3] || "", j), pf(this, c[4]), this.mb(c[5] || "", j), qf(this, c[6] || "", j), rf(this, c[7] || "", j)) : (this.Gb(!!b), this.S = new sf(k, this, this.xa))
}
q = lf.prototype;
q.za = "";
q.ob = "";
q.la = "";
q.Ra = k;
q.z = "";
q.bb = "";
q.vg = m;
q.xa = m;
q.toString = function() {
  if(this.ra) {
    return this.ra
  }
  var a = [];
  this.za && a.push(tf(this.za, uf), ":");
  this.la && (a.push("//"), this.ob && a.push(tf(this.ob, uf), "@"), a.push(v(this.la) ? encodeURIComponent(this.la) : k), this.Ra != k && a.push(":", "" + this.Ra));
  this.z && (this.la && "/" != this.z.charAt(0) && a.push("/"), a.push(tf(this.z, "/" == this.z.charAt(0) ? vf : wf)));
  var b = "" + this.S;
  b && a.push("?", b);
  this.bb && a.push("#", tf(this.bb, xf));
  return this.ra = a.join("")
};
q.M = function() {
  var a = this.za, b = this.ob, c = this.la, d = this.Ra, f = this.z, g = this.S.M(), i = this.bb, l = new lf(k, this.xa);
  a && mf(l, a);
  b && nf(l, b);
  c && of(l, c);
  d && pf(l, d);
  f && l.mb(f);
  g && qf(l, g);
  i && rf(l, i);
  return l
};
function mf(a, b, c) {
  yf(a);
  delete a.ra;
  a.za = c ? b ? decodeURIComponent(b) : "" : b;
  a.za && (a.za = a.za.replace(/:$/, ""))
}
function nf(a, b, c) {
  yf(a);
  delete a.ra;
  a.ob = c ? b ? decodeURIComponent(b) : "" : b
}
function of(a, b, c) {
  yf(a);
  delete a.ra;
  a.la = c ? b ? decodeURIComponent(b) : "" : b
}
function pf(a, b) {
  yf(a);
  delete a.ra;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.Ra = b) : a.Ra = k
}
q.mb = function(a, b) {
  yf(this);
  delete this.ra;
  this.z = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function qf(a, b, c) {
  yf(a);
  delete a.ra;
  b instanceof sf ? (a.S = b, a.S.we = a, a.S.Gb(a.xa)) : (c || (b = tf(b, zf)), a.S = new sf(b, a, a.xa))
}
function rf(a, b, c) {
  yf(a);
  delete a.ra;
  a.bb = c ? b ? decodeURIComponent(b) : "" : b
}
function yf(a) {
  a.vg && e(Error("Tried to modify a read-only Uri"))
}
q.Gb = function(a) {
  this.xa = a;
  this.S && this.S.Gb(a);
  return this
};
function Af(a) {
  return a instanceof lf ? a.M() : new lf(a, h)
}
var Bf = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function tf(a, b) {
  var c = k;
  v(a) && (c = a, Bf.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, Cf)));
  return c
}
function Cf(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var uf = /[#\/\?@]/g, wf = /[\#\?:]/g, vf = /[\#\?]/g, zf = /[\#\?@]/g, xf = /#/g;
function sf(a, b, c) {
  this.Ca = a || k;
  this.we = b || k;
  this.xa = !!c
}
function Df(a) {
  if(!a.o && (a.o = new qb, a.d = 0, a.Ca)) {
    for(var b = a.Ca.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = Ef(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
q = sf.prototype;
q.o = k;
q.d = k;
q.V = function() {
  Df(this);
  return this.d
};
q.add = function(a, b) {
  Df(this);
  Ff(this);
  a = Ef(this, a);
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
  Df(this);
  a = Ef(this, a);
  if(this.o.aa(a)) {
    Ff(this);
    var b = this.o.get(a);
    u(b) ? this.d -= b.length : this.d--;
    return this.o.remove(a)
  }
  return m
};
q.clear = function() {
  Ff(this);
  this.o && this.o.clear();
  this.d = 0
};
q.Na = function() {
  Df(this);
  return 0 == this.d
};
q.aa = function(a) {
  Df(this);
  a = Ef(this, a);
  return this.o.aa(a)
};
q.wc = function(a) {
  var b = this.X();
  return ab(b, a)
};
q.va = function() {
  Df(this);
  for(var a = this.o.X(), b = this.o.va(), c = [], d = 0;d < b.length;d++) {
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
  Df(this);
  if(a) {
    if(a = Ef(this, a), this.aa(a)) {
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
      u(d) ? fb(a, d) : a.push(d)
    }
  }
  return a
};
q.set = function(a, b) {
  Df(this);
  Ff(this);
  a = Ef(this, a);
  if(this.aa(a)) {
    var c = this.o.get(a);
    u(c) ? this.d -= c.length : this.d--
  }
  this.o.set(a, b);
  this.d++;
  return this
};
q.get = function(a, b) {
  Df(this);
  a = Ef(this, a);
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
  for(var a = [], b = 0, c = this.o.va(), d = 0;d < c.length;d++) {
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
function Ff(a) {
  delete a.vb;
  delete a.Ca;
  a.we && delete a.we.ra
}
q.M = function() {
  var a = new sf;
  this.vb && (a.vb = this.vb);
  this.Ca && (a.Ca = this.Ca);
  this.o && (a.o = this.o.M());
  return a
};
function Ef(a, b) {
  var c = "" + b;
  a.xa && (c = c.toLowerCase());
  return c
}
q.Gb = function(a) {
  a && !this.xa && (Df(this), Ff(this), ob(this.o, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.xa = a
};
q.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    ob(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
function Gf(a, b, c, d) {
  this.contentWindow = a;
  this.zc = b;
  this.re = c;
  this.jg = d
}
Gf.prototype.t = function(a, b) {
  a.push("<XDRFrame frameId=");
  F(this.jg, a, b);
  a.push(", expandedUrl=");
  F(this.zc, a, b);
  a.push(", streams=");
  F(this.re, a, b);
  a.push(">")
};
function Hf() {
  this.frames = [];
  this.Ud = new qb
}
Hf.prototype.a = U("cw.net.XDRTracker");
function If(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor(Pe()) + ("" + Math.floor(Pe()))
  })
}
function Jf(a, b) {
  for(var c = Kf, d = 0;d < c.frames.length;d++) {
    var f = c.frames[d], g;
    if(g = 0 == f.re.length) {
      g = f.zc;
      var i = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + i + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + G(b) + " existing frame " + G(f)), Sc(f)
    }
  }
  d = te() + te();
  f = If(a);
  g = t.location;
  g instanceof lf || (g = Af(g));
  f instanceof lf || (f = Af(f));
  var l = g;
  g = l.M();
  (i = !!f.za) ? mf(g, f.za) : i = !!f.ob;
  i ? nf(g, f.ob) : i = !!f.la;
  i ? of(g, f.la) : i = f.Ra != k;
  var n = f.z;
  if(i) {
    pf(g, f.Ra)
  }else {
    if(i = !!f.z) {
      if("/" != n.charAt(0) && (l.la && !l.z ? n = "/" + n : (l = g.z.lastIndexOf("/"), -1 != l && (n = g.z.substr(0, l + 1) + n))), ".." == n || "." == n) {
        n = ""
      }else {
        if(!(-1 == n.indexOf("./") && -1 == n.indexOf("/."))) {
          for(var l = 0 == n.lastIndexOf("/", 0), n = n.split("/"), r = [], z = 0;z < n.length;) {
            var s = n[z++];
            "." == s ? l && z == n.length && r.push("") : ".." == s ? ((1 < r.length || 1 == r.length && "" != r[0]) && r.pop(), l && z == n.length && r.push("")) : (r.push(s), l = j)
          }
          n = r.join("/")
        }
      }
    }
  }
  i ? g.mb(n) : i = "" !== f.S.toString();
  i ? (l = f.S, l.vb || (l.vb = l.toString() ? decodeURIComponent(l.toString()) : ""), qf(g, l.vb, h)) : i = !!f.bb;
  i && rf(g, f.bb);
  f = g.toString();
  g = ("" + t.location).match(jf)[3] || k;
  i = f.match(jf)[3] || k;
  g == i ? (c.a.info("No need to make a real XDRFrame for " + G(b)), c = Sc(new Gf(t, f, [b], k))) : ((g = O("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new Gc, c.Ud.set(d, [i, f, b]), c.a.info("Creating new XDRFrame " + G(d) + "for " + G(b)), c = jd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:f + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = i);
  return c
}
Hf.prototype.eh = function(a) {
  var b = this.Ud.get(a);
  b || e(Error("Unknown frameId " + G(a)));
  this.Ud.remove(b);
  var c = b[0], a = new Gf(O("minerva-xdrframe-" + a).contentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  Mc(c, a)
};
var Kf = new Hf;
t.__XHRTracker_xdrFrameLoaded = w(Kf.eh, Kf);
var Lf;
Lf = m;
var Mf = Kb();
Mf && (-1 != Mf.indexOf("Firefox") || -1 != Mf.indexOf("Camino") || -1 != Mf.indexOf("iPhone") || -1 != Mf.indexOf("iPod") || -1 != Mf.indexOf("iPad") || -1 != Mf.indexOf("Android") || -1 != Mf.indexOf("Chrome") && (Lf = j));
var Nf = Lf;
var Oe = "4bdfc178fc0e508c0cd5efc3fdb09920";
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function Of(a, b, c, d, f, g) {
  Gc.call(this, f, g);
  this.kf = a;
  this.yd = [];
  this.Oe = !!b;
  this.hg = !!c;
  this.Zf = !!d;
  for(b = 0;b < a.length;b++) {
    Oc(a[b], w(this.We, this, b, j), w(this.We, this, b, m))
  }
  0 == a.length && !this.Oe && Mc(this, this.yd)
}
A(Of, Gc);
Of.prototype.rf = 0;
Of.prototype.We = function(a, b, c) {
  this.rf++;
  this.yd[a] = [b, c];
  this.Ka || (this.Oe && b ? Mc(this, [a, c]) : this.hg && !b ? this.Wb(c) : this.rf == this.kf.length && Mc(this, this.yd));
  this.Zf && !b && (c = k);
  return c
};
Of.prototype.Wb = function(a) {
  Of.f.Wb.call(this, a);
  E(this.kf, function(a) {
    a.cancel()
  })
};
function Pf(a) {
  a = new Of(a, m, j);
  Nc(a, function(a) {
    return Ya(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function Qf(a, b) {
  this.bh = a;
  this.mf = b
}
Qf.prototype.Rd = 0;
Qf.prototype.Sc = 0;
Qf.prototype.Ed = m;
function Rf(a) {
  var b = [];
  if(a.Ed) {
    return[b, 2]
  }
  var c = a.Rd, d = a.bh.responseText;
  for(a.Rd = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var f = d.substr(a.Sc, c - a.Sc), f = f.replace(/\r$/, "");
    if(f.length > a.mf) {
      return a.Ed = j, [b, 2]
    }
    b.push(f);
    a.Sc = c += 1
  }
  return a.Rd - a.Sc - 1 > a.mf ? (a.Ed = j, [b, 2]) : [b, 1]
}
;function Sf(a, b, c) {
  this.L = b;
  this.na = a;
  this.ud = c
}
A(Sf, K);
q = Sf.prototype;
q.a = U("cw.net.XHRMaster");
q.Ua = -1;
q.Vd = function(a, b, c) {
  this.ud.__XHRSlave_makeRequest(this.na, a, b, c)
};
q.Ma = o("Ua");
q.Yd = function(a, b) {
  1 != b && ne(this.a, G(this.na) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Ee(this.L);
  Fe(this.L, a)
};
q.Zd = function(a) {
  S(this.a, "ongotheaders_: " + G(a));
  var b = k;
  "Content-Length" in a && (b = xe(a["Content-Length"]));
  a = this.L;
  S(a.a, a.u() + " got Content-Length: " + b);
  a.Aa == Tf && (b == k && (R(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Uf(a, 2E3 + 1E3 * (b / 3072)))
};
q.$d = function(a) {
  1 != a && S(this.a, this.L.u() + "'s XHR's readyState is " + a);
  this.Ua = a;
  2 <= this.Ua && Ee(this.L)
};
q.Xd = function() {
  this.L.g()
};
q.c = function() {
  Sf.f.c.call(this);
  delete Vf.Ga[this.na];
  this.ud.__XHRSlave_dispose(this.na);
  delete this.ud
};
function Wf() {
  this.Ga = {}
}
A(Wf, K);
q = Wf.prototype;
q.a = U("cw.net.XHRMasterTracker");
q.wd = function(a, b) {
  var c = "_" + te(), d = new Sf(c, a, b);
  return this.Ga[c] = d
};
q.Yd = function(a, b, c) {
  var b = db(b), d = this.Ga[a];
  d ? d.Yd(b, c) : ne(this.a, "onframes_: no master for " + G(a))
};
q.Zd = function(a, b) {
  var c = this.Ga[a];
  c ? c.Zd(b) : ne(this.a, "ongotheaders_: no master for " + G(a))
};
q.$d = function(a, b) {
  var c = this.Ga[a];
  c ? c.$d(b) : ne(this.a, "onreadystatechange_: no master for " + G(a))
};
q.Xd = function(a) {
  var b = this.Ga[a];
  b ? (delete this.Ga[b.na], b.Xd()) : ne(this.a, "oncomplete_: no master for " + G(a))
};
q.c = function() {
  Wf.f.c.call(this);
  for(var a = ua(this.Ga);a.length;) {
    a.pop().g()
  }
  delete this.Ga
};
var Vf = new Wf;
t.__XHRMaster_onframes = w(Vf.Yd, Vf);
t.__XHRMaster_oncomplete = w(Vf.Xd, Vf);
t.__XHRMaster_ongotheaders = w(Vf.Zd, Vf);
t.__XHRMaster_onreadystatechange = w(Vf.$d, Vf);
function Xf(a, b, c) {
  this.ya = a;
  this.host = b;
  this.port = c
}
function Yf(a, b, c) {
  this.host = a;
  this.port = b;
  this.Xg = c
}
function Zf(a, b) {
  b || (b = a);
  this.ya = a;
  this.Va = b
}
Zf.prototype.t = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  F(this.ya, a, b);
  a.push(", secondaryUrl=");
  F(this.Va, a, b);
  a.push(">")
};
function $f(a, b, c, d) {
  this.ya = a;
  this.vf = b;
  this.Va = c;
  this.Ff = d;
  (!(0 == this.ya.indexOf("http://") || 0 == this.ya.indexOf("https://")) || !(0 == this.Va.indexOf("http://") || 0 == this.Va.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.vf.location.href;
  kf(this.ya, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Ff.location.href;
  kf(this.Va, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
$f.prototype.t = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  F(this.ya, a, b);
  a.push(", secondaryUrl=");
  F(this.Va, a, b);
  a.push(">")
};
var ag = new Ze(";)]}");
function bg() {
}
bg.prototype.Re = p(1);
function cg(a) {
  this.Qg = a
}
cg.prototype.t = function(a, b) {
  a.push("<UserContext for ");
  F(this.Qg, a, b);
  a.push(">")
};
function dg(a, b, c) {
  this.A = a;
  this.Rg = b ? b : new bg;
  this.H = c ? c : Wc;
  this.pc = new Td;
  this.nc = te() + te();
  this.Ta = new zb;
  this.Od = new Bb;
  this.qc = k;
  this.jd = [];
  this.Lb = new cg(this);
  I && (this.qc = tc(t, "load", this.Kg, m, this))
}
A(dg, K);
q = dg.prototype;
q.a = U("cw.net.ClientStream");
q.hf = new yb(-1, []);
q.jf = new yb(-1, []);
q.Ag = 50;
q.zg = 1048576;
q.ae = k;
q.onreset = k;
q.tf = k;
q.oe = m;
q.de = m;
q.h = 1;
q.te = -1;
q.j = k;
q.C = k;
q.gc = k;
q.pe = 0;
q.uf = 0;
q.Ef = 0;
q.t = function(a, b) {
  a.push("<ClientStream id=");
  F(this.nc, a, b);
  a.push(", state=", "" + this.h);
  a.push(", primary=");
  F(this.j, a, b);
  a.push(", secondary=");
  F(this.C, a, b);
  a.push(", resetting=");
  F(this.gc, a, b);
  a.push(">")
};
function eg(a) {
  var b = [-1];
  a.j && b.push(a.j.Eb);
  a.C && b.push(a.C.Eb);
  return Math.max.apply(Math.max, b)
}
function fg(a) {
  if(!(3 > a.h)) {
    var b = 0 != a.Ta.B.V(), c = Cb(a.Od), d = !c.q(a.jf) && !(a.j && c.q(a.j.Ab) || a.C && c.q(a.C.Ab)), f = eg(a);
    if((b = b && f < a.Ta.$a) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.j.Qb ? (T(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.j, c != d.Ab && (!d.Ha && !d.G.length && gg(d), d.G.push(new Xe(c)), d.Ab = c)), b && hg(a.j, a.Ta, f + 1), a.j.Ea()) : a.C == k ? a.oe ? (T(a.a, "tryToSend_: creating secondary to send " + g), a.C = ig(a, m), b && hg(a.C, a.Ta, f + 1), a.C.Ea()) : (T(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.de = j) : T(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
q.Kg = function() {
  this.qc = k;
  if(this.j && this.j.yb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.j;
    a.ld = j;
    a.g()
  }
  this.C && this.C.yb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.C, a.ld = j, a.g())
};
function jg(a, b) {
  var c;
  ga(c) || (c = j);
  3 < a.h && e(Error("sendStrings: Can't send strings in state " + a.h));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || e(Error("sendStrings: string #" + c + " has illegal chars: " + G(d)))
      }
    }
    a.Ta.extend(b);
    fg(a)
  }
}
function ig(a, b) {
  var c;
  a.A instanceof $f ? c = 1 == a.Rg.Re() ? Tf : kg : a.A instanceof Yf ? c = lg : e(Error("Don't support endpoint " + G(a.A)));
  a.te += 1;
  c = new mg(a.H, a, a.te, c, a.A, b);
  T(a.a, "Created: " + c.u());
  a.pc.add(c);
  return c
}
function ng(a, b, c) {
  var d = new og(a.H, a, b, c);
  T(a.a, "Created: " + d.u() + ", delay=" + b + ", times=" + c);
  a.pc.add(d);
  return d
}
function pg(a, b) {
  a.pc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  S(a.a, "Offline: " + b.u());
  a.pe = b.Qa ? a.pe + b.Qa : 0;
  1 <= a.pe && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.Lb, "stream penalty reached limit", m), a.g());
  if(3 < a.h) {
    4 == a.h && b.Qf ? (S(a.a, "Disposing because resettingTransport_ is done."), a.g()) : S(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    var c;
    var d;
    c = b instanceof og;
    if(!c && b.ld) {
      var f = I ? Nf ? [0, 1] : [9, 20] : [0, 0];
      c = f[0];
      d = f[1];
      T(a.a, "getDelayForNextTransport_: " + G({delay:c, times:d}))
    }else {
      if(d = b.Ce(), b == a.j ? d ? f = ++a.uf : c || (f = a.uf = 0) : d ? f = ++a.Ef : c || (f = a.Ef = 0), c || !f) {
        d = c = 0, T(a.a, "getDelayForNextTransport_: " + G({count:f, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(f, 3), i = Math.floor(4E3 * Math.random()) - 2E3, l = Math.max(0, b.Mf - b.ue);
        d = (c = Math.max(0, g + i - l)) ? 1 : 0;
        T(a.a, "getDelayForNextTransport_: " + G({count:f, base:g, variance:i, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    f = c[0];
    c = c[1];
    b == a.j ? (a.j = k, c ? a.j = ng(a, f, c) : (f = eg(a), a.j = ig(a, j), hg(a.j, a.Ta, f + 1)), a.j.Ea()) : b == a.C && (a.C = k, c ? (a.C = ng(a, f, c), a.C.Ea()) : fg(a))
  }
}
q.reset = function(a) {
  3 < this.h && e(Error("reset: Can't send reset in state " + this.h));
  this.h = 4;
  this.j && this.j.Qb ? (this.a.info("reset: Sending ResetFrame over existing primary."), qg(this.j, a), this.j.Ea()) : (this.j && (S(this.a, "reset: Disposing primary before sending ResetFrame."), this.j.g()), this.C && (S(this.a, "reset: Disposing secondary before sending ResetFrame."), this.C.g()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.gc = ig(this, m), qg(this.gc, a), this.gc.Ea());
  this.onreset && this.onreset.call(this.Lb, a, j)
};
function rg(a, b, c, d) {
  var f;
  f = a.Od;
  for(var g = a.Ag, i = a.zg, l = [], n = m, r = 0, z = c.length;r < z;r++) {
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
        if(g != k && f.Ya.V() >= g) {
          n = j;
          break
        }
        var B = vb(s);
        if(i != k && f.n + B > i) {
          n = j;
          break
        }
        f.Ya.set(x, [s, B]);
        f.n += B
      }
    }
  }
  f.Ya.Na() && f.Ya.clear();
  f = [l, n];
  c = f[0];
  f = f[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(i = c[g], a.ae && a.ae.call(a.Lb, i), 4 == a.h || a.ta) {
        return
      }
    }
  }
  d || fg(a);
  if(!(4 == a.h || a.ta) && f) {
    ne(b.a, b.u() + "'s peer caused rwin overflow."), b.g()
  }
}
q.Le = function(a) {
  ne(this.a, "Failed to start " + G(this) + "; error was " + G(a.message));
  this.g()
};
q.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.h && e(Error("ClientStream.start: " + G(this) + " already started"));
  this.h = 2;
  if(this.A instanceof Zf) {
    var a = Jf(this.A.ya, this), b = Jf(this.A.Va, this), a = Pf([a, b]);
    Nc(a, w(this.gg, this));
    Pc(a, w(this.Le, this))
  }else {
    if(this.A instanceof Xf) {
      if(xb) {
        this.Ne()
      }else {
        var a = Ne(this.H, this.A.ya), c = this;
        Nc(a, function(a) {
          xb || (xb = new Ie(c.H, a));
          return k
        });
        Nc(a, w(this.Ne, this));
        Pc(a, w(this.Le, this))
      }
    }else {
      sg(this)
    }
  }
};
q.gg = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].zc, f = a[1].zc;
  this.jd.push(a[0]);
  this.jd.push(a[1]);
  this.A = new $f(d, b, f, c);
  sg(this)
};
q.Ne = function() {
  this.A = new Yf(this.A.host, this.A.port, xb);
  sg(this)
};
function sg(a) {
  a.h = 3;
  a.j = ig(a, j);
  hg(a.j, a.Ta, k);
  a.j.Ea()
}
q.c = function() {
  this.a.info(G(this) + " in disposeInternal.");
  this.h = 5;
  for(var a = this.pc.X(), b = 0;b < a.length;b++) {
    a[b].g()
  }
  for(a = 0;a < this.jd.length;a++) {
    cb(this.jd[a].re, this)
  }
  I && this.qc && (wc(this.qc), this.qc = k);
  this.tf && this.tf.call(this.Lb);
  delete this.pc;
  delete this.j;
  delete this.C;
  delete this.gc;
  delete this.Lb;
  dg.f.c.call(this)
};
var Tf = 1, kg = 2, lg = 3;
function mg(a, b, c, d, f, g) {
  this.H = a;
  this.F = b;
  this.Kb = c;
  this.Aa = d;
  this.A = f;
  this.G = [];
  this.sb = g;
  this.Qb = !this.yb();
  this.Fb = this.Aa != Tf;
  this.Wf = w(this.Vg, this)
}
A(mg, K);
q = mg.prototype;
q.a = U("cw.net.ClientTransport");
q.s = k;
q.ue = k;
q.Mf = k;
q.Vc = k;
q.Ha = m;
q.ed = m;
q.Ab = k;
q.Bc = 0;
q.Eb = -1;
q.Uc = -1;
q.Qf = m;
q.ld = m;
q.Qa = 0;
q.Zb = m;
q.t = function(a) {
  a.push("<ClientTransport #", "" + this.Kb, ", becomePrimary=", "" + this.sb, ">")
};
q.u = function() {
  return(this.sb ? "Prim. T#" : "Sec. T#") + this.Kb
};
q.Ce = function() {
  return!(!this.Zb && this.Bc)
};
q.yb = function() {
  return this.Aa == Tf || this.Aa == kg
};
function tg(a, b) {
  ib(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  rg(a.F, a, b, !a.Fb)
}
function ug(a, b, c) {
  try {
    var d = hf(b);
    a.Bc += 1;
    S(a.a, a.u() + " RECV " + G(d));
    var f;
    1 == a.Bc && !d.q(ag) && a.yb() ? (R(a.a, a.u() + " is closing soon because got bad preamble: " + G(d)), f = j) : f = m;
    if(f) {
      return j
    }
    if(d instanceof Ye) {
      if(!/^([ -~]*)$/.test(d.Jb)) {
        return a.Zb = j
      }
      a.Uc += 1;
      c.push([a.Uc, d.Jb])
    }else {
      if(d instanceof Xe) {
        var g = a.F, i = d.oa;
        g.hf = i;
        var l = g.Ta, n = i.qb, c = m;
        n > l.$a && (c = j);
        for(var r = Ab(l).concat(), d = 0;d < r.length;d++) {
          var z = r[d];
          if(z > n) {
            break
          }
          var s = l.B.get(z)[1];
          l.B.remove(z);
          l.n -= s
        }
        for(d = 0;d < i.lb.length;d++) {
          var x = i.lb[d];
          x > l.$a && (c = j);
          l.B.aa(x) && (s = l.B.get(x)[1], l.B.remove(x), l.n -= s)
        }
        l.B.Na() && l.B.clear();
        if(c) {
          return R(a.a, a.u() + " is closing soon because got bad SackFrame"), a.Zb = j
        }
      }else {
        if(d instanceof $e) {
          a.Uc = d.lc - 1
        }else {
          if(d instanceof bf) {
            a.F.jf = d.cc
          }else {
            if(d instanceof df) {
              return T(a.a, a.u() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof gf) {
              return a.Zb = j, "stream_attach_failure" == d.reason ? a.Qa += 1 : "acked_unsent_strings" == d.reason && (a.Qa += 0.5), T(a.a, a.u() + " is closing soon because got " + G(d)), j
            }
            if(!(d instanceof Ze)) {
              if(d instanceof cf) {
                var B = a.F, Ui = !a.Fb;
                T(B.a, "Stream is now confirmed to exist at server.");
                B.oe = j;
                B.de && !Ui && (B.de = m, fg(B))
              }else {
                c.length && (tg(a, c), bb(c));
                if(d instanceof ef) {
                  var ed = a.F;
                  ed.onreset && ed.onreset.call(ed.Lb, d.fc, d.Ob);
                  ed.g();
                  return j
                }
                e(Error(a.u() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(Ig) {
    return Ig instanceof V || e(Ig), R(a.a, a.u() + " is closing soon because got InvalidFrame: " + G(b)), a.Zb = j
  }
  return m
}
function Fe(a, b) {
  a.ed = j;
  try {
    for(var c = m, d = [], f = 0, g = b.length;f < g;f++) {
      if(a.ta) {
        a.a.info(a.u() + " returning from loop because we're disposed.");
        return
      }
      if(c = ug(a, b[f], d)) {
        break
      }
    }
    d.length && tg(a, d);
    a.ed = m;
    a.G.length && a.Ea();
    c && (T(a.a, a.u() + " closeSoon is true.  Frames were: " + G(b)), a.g())
  }finally {
    a.ed = m
  }
}
q.Vg = function() {
  R(this.a, this.u() + " timed out due to lack of connection or no data being received.");
  this.g()
};
function vg(a) {
  a.Vc != k && (a.H.N.clearTimeout(a.Vc), a.Vc = k)
}
function Uf(a, b) {
  vg(a);
  b = Math.round(b);
  a.Vc = a.H.N.setTimeout(a.Wf, b);
  S(a.a, a.u() + "'s receive timeout set to " + b + " ms.")
}
function Ee(a) {
  a.Aa != Tf && (a.Aa == lg || a.Aa == kg ? Uf(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.Aa)))
}
function gg(a) {
  var b = new Ve;
  b.Kb = a.Kb;
  b.wf = 2;
  b.af = 2;
  a.F.oe || (b.zf = j);
  b.nc = a.F.nc;
  b.qe = a.Fb;
  b.qe && (b.pf = 4096);
  b.nf = 3E5;
  b.lf = a.Fb ? Math.floor(10) : 0;
  b.Nf = m;
  a.sb && (b.If = k, b.Wd = Math.floor((a.Fb ? 358E4 : 25E3) / 1E3));
  b.oa = Cb(a.F.Od);
  b.Pc = a.F.hf;
  a.G.push(b);
  a.Ab = b.oa
}
function Ge(a, b) {
  b && (a.Qa += 0.5);
  a.g()
}
q.Ea = function() {
  this.Ha && !this.Qb && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.ed) {
    T(this.a, this.u() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ha;
    this.Ha = j;
    !a && !this.G.length && gg(this);
    for(a = 0;a < this.G.length;a++) {
      S(this.a, this.u() + " SEND " + G(this.G[a]))
    }
    if(this.yb()) {
      for(var a = [], b = 0, c = this.G.length;b < c;b++) {
        this.G[b].ma(a), a.push("\n")
      }
      this.G = [];
      a = a.join("");
      b = this.sb ? this.A.ya : this.A.Va;
      this.s = Vf.wd(this, this.sb ? this.A.vf : this.A.Ff);
      this.ue = this.H.N === Ec ? y() : this.H.N.getTime();
      this.s.Vd(b, "POST", a);
      Uf(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Fb ? 0 : this.sb ? 25E3 : 0))
    }else {
      if(this.Aa == lg) {
        a = [];
        b = 0;
        for(c = this.G.length;b < c;b++) {
          a.push(this.G[b].ca())
        }
        this.G = [];
        this.s ? this.s.rc(a) : (b = this.A, this.s = new Je(this), this.s.dd = b.Xg.wd(this.s), this.ue = this.H.N === Ec ? y() : this.H.N.getTime(), this.s.td(b.host, b.port), this.s.ta || (this.s.rc(a), this.s.ta || Uf(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.Aa))
      }
    }
  }
};
function hg(a, b, c) {
  !a.Ha && !a.G.length && gg(a);
  for(var c = Math.max(c, a.Eb + 1), b = b.Se(c), c = 0, d = b.length;c < d;c++) {
    var f = b[c], g = f[0], f = f[1];
    (-1 == a.Eb || a.Eb + 1 != g) && a.G.push(new $e(g));
    a.G.push(new Ye(f));
    a.Eb = g
  }
}
q.c = function() {
  this.a.info(this.u() + " in disposeInternal.");
  mg.f.c.call(this);
  this.Mf = this.H.N === Ec ? y() : this.H.N.getTime();
  this.G = [];
  vg(this);
  this.s && this.s.g();
  var a = this.F;
  this.F = k;
  pg(a, this)
};
function qg(a, b) {
  !a.Ha && !a.G.length && gg(a);
  a.G.push(new ef(b, j));
  a.Qf = j
}
function og(a, b, c, d) {
  this.H = a;
  this.F = b;
  this.Ke = c;
  this.Ee = d
}
A(og, K);
q = og.prototype;
q.Ha = m;
q.Qb = m;
q.Fc = k;
q.Ab = k;
q.a = U("cw.net.DoNothingTransport");
function wg(a) {
  a.Fc = a.H.N.setTimeout(function() {
    a.Fc = k;
    a.Ee--;
    a.Ee ? wg(a) : a.g()
  }, a.Ke)
}
q.Ea = function() {
  this.Ha && !this.Qb && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ha = j;
  wg(this)
};
q.t = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.Ke, ">")
};
q.yb = p(m);
q.u = p("Wast. T");
q.Ce = p(m);
q.c = function() {
  this.a.info(this.u() + " in disposeInternal.");
  og.f.c.call(this);
  this.Fc != k && this.H.N.clearTimeout(this.Fc);
  var a = this.F;
  this.F = k;
  pg(a, this)
};
var xg = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function yg(a) {
  var b = {}, a = "" + a, c = "#" == a.charAt(0) ? a : "#" + a;
  if(zg.test(c)) {
    return b.Kc = Ag(c), b.type = "hex", b
  }
  a: {
    var d = a.match(Bg);
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
    return b.Kc = Cg(c[0], c[1], c[2]), b.type = "rgb", b
  }
  if(xg && (c = xg[a.toLowerCase()])) {
    return b.Kc = c, b.type = "named", b
  }
  e(Error(a + " is not a valid color string"))
}
var Dg = /#(.)(.)(.)/;
function Ag(a) {
  zg.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  4 == a.length && (a = a.replace(Dg, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function Eg(a) {
  a = Ag(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function Cg(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || 0 > a || 255 < a || isNaN(b) || 0 > b || 255 < b || isNaN(c) || 0 > c || 255 < c) && e(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = Fg(a.toString(16));
  b = Fg(b.toString(16));
  c = Fg(c.toString(16));
  return"#" + a + b + c
}
var zg = /^#(?:[0-9a-f]{3}){1,2}$/i, Bg = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function Fg(a) {
  return 1 == a.length ? "0" + a : a
}
;function Gg() {
}
Gg.prototype.sc = k;
var Hg;
function Jg() {
}
A(Jg, Gg);
function Kg(a) {
  return(a = Lg(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Mg(a) {
  var b = {};
  Lg(a) && (b[0] = j, b[1] = j);
  return b
}
Jg.prototype.Md = k;
function Lg(a) {
  if(!a.Md && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Md = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Md
}
Hg = new Jg;
function Ng(a) {
  this.headers = new qb;
  this.Nb = a || k
}
A(Ng, Cc);
Ng.prototype.a = U("goog.net.XhrIo");
var Og = /^https?$/i;
q = Ng.prototype;
q.Ia = m;
q.k = k;
q.kd = k;
q.Sd = "";
q.gf = "";
q.bc = "";
q.Ad = m;
q.Lc = m;
q.Nd = m;
q.gb = m;
q.fd = 0;
q.nb = k;
q.Bf = "";
q.$g = m;
q.send = function(a, b, c, d) {
  this.k && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Sd = a;
  this.bc = "";
  this.gf = b;
  this.Ad = m;
  this.Ia = j;
  this.k = this.Nb ? Kg(this.Nb) : Kg(Hg);
  this.kd = this.Nb ? this.Nb.sc || (this.Nb.sc = Mg(this.Nb)) : Hg.sc || (Hg.sc = Mg(Hg));
  this.k.onreadystatechange = w(this.sf, this);
  try {
    S(this.a, Pg(this, "Opening Xhr")), this.Nd = j, this.k.open(b, a, j), this.Nd = m
  }catch(f) {
    S(this.a, Pg(this, "Error opening Xhr: " + f.message));
    Qg(this, f);
    return
  }
  var a = c || "", g = this.headers.M();
  d && ob(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.aa("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  ob(g, function(a, b) {
    this.k.setRequestHeader(b, a)
  }, this);
  this.Bf && (this.k.responseType = this.Bf);
  "withCredentials" in this.k && (this.k.withCredentials = this.$g);
  try {
    this.nb && (Ec.clearTimeout(this.nb), this.nb = k), 0 < this.fd && (S(this.a, Pg(this, "Will abort after " + this.fd + "ms if incomplete")), this.nb = Ec.setTimeout(w(this.Wg, this), this.fd)), S(this.a, Pg(this, "Sending request")), this.Lc = j, this.k.send(a), this.Lc = m
  }catch(i) {
    S(this.a, Pg(this, "Send error: " + i.message)), Qg(this, i)
  }
};
q.Wg = function() {
  "undefined" != typeof ba && this.k && (this.bc = "Timed out after " + this.fd + "ms, aborting", S(this.a, Pg(this, this.bc)), this.dispatchEvent("timeout"), this.abort(8))
};
function Qg(a, b) {
  a.Ia = m;
  a.k && (a.gb = j, a.k.abort(), a.gb = m);
  a.bc = b;
  Rg(a);
  Sg(a)
}
function Rg(a) {
  a.Ad || (a.Ad = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
q.abort = function() {
  this.k && this.Ia && (S(this.a, Pg(this, "Aborting")), this.Ia = m, this.gb = j, this.k.abort(), this.gb = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Sg(this))
};
q.c = function() {
  this.k && (this.Ia && (this.Ia = m, this.gb = j, this.k.abort(), this.gb = m), Sg(this, j));
  Ng.f.c.call(this)
};
q.sf = function() {
  !this.Nd && !this.Lc && !this.gb ? this.Dg() : Tg(this)
};
q.Dg = function() {
  Tg(this)
};
function Tg(a) {
  if(a.Ia && "undefined" != typeof ba) {
    if(a.kd[1] && 4 == a.Ma() && 2 == Ug(a)) {
      S(a.a, Pg(a, "Local request error detected and ignored"))
    }else {
      if(a.Lc && 4 == a.Ma()) {
        Ec.setTimeout(w(a.sf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.Ma()) {
          S(a.a, Pg(a, "Request complete"));
          a.Ia = m;
          var b = Ug(a), c;
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
              b = ("" + a.Sd).match(jf)[1] || k, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !Og.test(b ? b.toLowerCase() : "")
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
              S(a.a, "Can not get status: " + f.message), d = ""
            }
            a.bc = d + " [" + Ug(a) + "]";
            Rg(a)
          }
          Sg(a)
        }
      }
    }
  }
}
function Sg(a, b) {
  if(a.k) {
    var c = a.k, d = a.kd[0] ? da : k;
    a.k = k;
    a.kd = k;
    a.nb && (Ec.clearTimeout(a.nb), a.nb = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(f) {
      ne(a.a, "Problem encountered resetting onreadystatechange: " + f.message)
    }
  }
}
q.Pd = function() {
  return!!this.k
};
q.Ma = function() {
  return this.k ? this.k.readyState : 0
};
function Ug(a) {
  try {
    return 2 < a.Ma() ? a.k.status : -1
  }catch(b) {
    return R(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.k && 4 == this.Ma() ? this.k.getResponseHeader(a) : h
};
function Pg(a, b) {
  return b + " [" + a.gf + " " + a.Sd + " " + Ug(a) + "]"
}
;var Vg = !(H || I && !J("420+"));
function Wg(a, b) {
  this.gd = a;
  this.na = b
}
A(Wg, K);
q = Wg.prototype;
q.s = k;
q.Ua = -1;
q.Ue = m;
q.$e = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Xg(a) {
  var b = Rf(a.He), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.na, c, b), 1 != b && a.g()) : a.g()
}
q.sg = function() {
  Xg(this);
  if(!this.ta) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.na);
    this.g()
  }
};
q.Ig = function() {
  var a = t.parent;
  if(a) {
    this.Ua = this.s.Ma();
    if(2 <= this.Ua && !this.Ue) {
      for(var b = new qb, c = this.$e.length;c--;) {
        var d = this.$e[c];
        try {
          b.set(d, this.s.k.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.V() && (this.Ue = j, a.__XHRMaster_ongotheaders(this.na, ub(b)), this.ta)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.na, this.Ua);
    Vg && 3 == this.Ua && Xg(this)
  }else {
    this.g()
  }
};
q.Vd = function(a, b, c) {
  this.s = new Ng;
  M(this.s, "readystatechange", w(this.Ig, this));
  M(this.s, "complete", w(this.sg, this));
  this.s.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.He = new Qf(this.s.k, 1048576)
};
q.c = function() {
  Wg.f.c.call(this);
  delete this.He;
  this.s && this.s.g();
  delete this.gd.mc[this.na];
  delete this.gd
};
function Yg() {
  this.mc = {}
}
A(Yg, K);
Yg.prototype.yg = function(a, b, c, d) {
  var f = new Wg(this, a);
  this.mc[a] = f;
  f.Vd(b, c, d)
};
Yg.prototype.dg = function(a) {
  (a = this.mc[a]) && a.g()
};
Yg.prototype.c = function() {
  Yg.f.c.call(this);
  for(var a = ua(this.mc);a.length;) {
    a.pop().g()
  }
  delete this.mc
};
var Zg = new Yg;
t.__XHRSlave_makeRequest = w(Zg.yg, Zg);
t.__XHRSlave_dispose = w(Zg.dg, Zg);
var $g = U("cw.net.demo");
function ah() {
}
ah.prototype.Re = function() {
  return Boolean(Number((new lf(document.location)).S.get("httpStreaming", "0"))) ? 2 : 1
};
function bh(a) {
  this.p = a
}
var ch = /\s*;\s*/;
q = bh.prototype;
q.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && I) {
    var b = "COOKIES_TEST_" + y();
    dh.set(b, "1");
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
  for(var c = a + "=", d = (this.p.cookie || "").split(ch), f = 0, g;g = d[f];f++) {
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
q.va = function() {
  return eh(this).keys
};
q.X = function() {
  return eh(this).Pf
};
q.Na = function() {
  return!this.p.cookie
};
q.V = function() {
  return!this.p.cookie ? 0 : (this.p.cookie || "").split(ch).length
};
q.aa = function(a) {
  return ga(this.get(a))
};
q.wc = function(a) {
  for(var b = eh(this).Pf, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return j
    }
  }
  return m
};
q.clear = function() {
  for(var a = eh(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b])
  }
};
function eh(a) {
  for(var a = (a.p.cookie || "").split(ch), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), -1 == d ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{keys:b, Pf:c}
}
var dh = new bh(document);
dh.Jh = 3950;
function fh() {
  this.yf = y()
}
var gh = new fh;
fh.prototype.set = aa("yf");
fh.prototype.reset = function() {
  this.set(y())
};
fh.prototype.get = o("yf");
function hh(a) {
  this.Gg = a || "";
  this.Og = gh
}
hh.prototype.Gf = j;
hh.prototype.Mg = j;
hh.prototype.Lg = j;
hh.prototype.Hf = m;
function ih(a) {
  return 10 > a ? "0" + a : "" + a
}
function jh(a, b) {
  var c = (a.Jf - b) / 1E3, d = c.toFixed(3), f = 0;
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
function kh(a) {
  hh.call(this, a)
}
A(kh, hh);
kh.prototype.Hf = j;
function lh(a) {
  this.Hg = w(this.Tf, this);
  this.Pe = new kh;
  this.df = this.Pe.Gf = m;
  this.e = a;
  this.fg = this.e.ownerDocument || this.e.document;
  var a = cd(this.e), b = k;
  if(H) {
    b = a.p.createStyleSheet(), Gd(b)
  }else {
    var c = gd(a.p, "head", h, h)[0];
    c || (b = gd(a.p, "body", h, h)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    Gd(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
lh.prototype.Tf = function(a) {
  var b = 100 >= this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight, c = this.fg.createElement("div");
  c.className = "logmsg";
  var d = this.Pe, f;
  switch(a.Bb.value) {
    case ee.value:
      f = "dbg-sh";
      break;
    case fe.value:
      f = "dbg-sev";
      break;
    case ge.value:
      f = "dbg-w";
      break;
    case he.value:
      f = "dbg-i";
      break;
    default:
      f = "dbg-f"
  }
  var g = [];
  g.push(d.Gg, " ");
  if(d.Gf) {
    var i = new Date(a.Jf);
    g.push("[", ih(i.getFullYear() - 2E3) + ih(i.getMonth() + 1) + ih(i.getDate()) + " " + ih(i.getHours()) + ":" + ih(i.getMinutes()) + ":" + ih(i.getSeconds()) + "." + ih(Math.floor(i.getMilliseconds() / 10)), "] ")
  }
  d.Mg && g.push("[", Qa(jh(a, d.Og.get())), "s] ");
  d.Lg && g.push("[", Ka(a.xg), "] ");
  g.push('<span class="', f, '">', Ja(Qa(Ka(a.of))));
  d.Hf && a.Dd && g.push("<br>", Ja(Qa(a.Cd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  b && (this.e.scrollTop = this.e.scrollHeight)
};
lh.prototype.clear = function() {
  this.e.innerHTML = ""
};
function mh(a, b, c, d, f, g) {
  6 == arguments.length ? this.setTransform(a, b, c, d, f, g) : (0 != arguments.length && e(Error("Insufficient matrix parameters")), this.da = this.ga = 1, this.Y = this.ea = this.fa = this.ha = 0)
}
q = mh.prototype;
q.M = function() {
  return new mh(this.da, this.Y, this.ea, this.ga, this.fa, this.ha)
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
  var d = new mh, f = Math.cos(a), a = Math.sin(a), b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f), c = this.da, d = this.ea;
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
q.q = function(a) {
  return this == a ? j : !a ? m : this.da == a.da && this.ea == a.ea && this.fa == a.fa && this.Y == a.Y && this.ga == a.ga && this.ha == a.ha
};
function W(a, b) {
  this.e = a;
  this.wa = b;
  this.xd = m
}
A(W, Cc);
q = W.prototype;
q.wa = k;
q.e = k;
q.Lf = k;
q.b = o("e");
q.addEventListener = function(a, b, c, d) {
  M(this.e, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  uc(this.e, a, b, c, d)
};
q.c = function() {
  W.f.c.call(this);
  yc(this.e)
};
function X(a, b, c, d) {
  W.call(this, a, b);
  this.se = c;
  this.wa.he(this, c);
  this.fill = d;
  this.wa.ge(this, d)
}
A(X, W);
X.prototype.fill = k;
X.prototype.se = k;
X.prototype.kg = o("fill");
X.prototype.mg = o("se");
function nh(a, b, c, d) {
  X.call(this, a, b, c, d)
}
A(nh, X);
function oh(a, b) {
  W.call(this, a, b)
}
A(oh, W);
function ph(a, b, c, d) {
  X.call(this, a, b, c, d)
}
A(ph, X);
function qh(a, b) {
  W.call(this, a, b)
}
A(qh, W);
function rh(a, b) {
  W.call(this, a, b)
}
A(rh, oh);
rh.prototype.clear = function() {
  od(this.b())
};
rh.prototype.Z = function(a, b) {
  sh(this.b(), {width:a, height:b})
};
function th(a, b, c, d) {
  X.call(this, a, b, c, d)
}
A(th, ph);
function uh(a, b) {
  W.call(this, a, b)
}
A(uh, qh);
uh.prototype.Z = function(a, b) {
  sh(this.b(), {width:a, height:b})
};
function vh() {
}
;function wh(a, b) {
  this.sa = a;
  this.dc = b || 1
}
A(wh, vh);
function xh() {
  this.pb = 1;
  this.sa = "black"
}
;function yh() {
  this.D = [];
  this.d = [];
  this.qa = []
}
yh.prototype.tb = k;
yh.prototype.U = k;
yh.prototype.Ib = j;
var zh = [2, 2, 6, 6, 0];
q = yh.prototype;
q.clear = function() {
  this.D.length = 0;
  this.d.length = 0;
  this.qa.length = 0;
  delete this.tb;
  delete this.U;
  delete this.Ib;
  return this
};
q.moveTo = function(a, b) {
  0 == this.D[this.D.length - 1] ? this.qa.length -= 2 : (this.D.push(0), this.d.push(1));
  this.qa.push(a, b);
  this.U = this.tb = [a, b];
  return this
};
q.lineTo = function(a) {
  var b = this.D[this.D.length - 1];
  b == k && e(Error("Path cannot start with lineTo"));
  1 != b && (this.D.push(1), this.d.push(0));
  for(b = 0;b < arguments.length;b += 2) {
    var c = arguments[b], d = arguments[b + 1];
    this.qa.push(c, d)
  }
  this.d[this.d.length - 1] += b / 2;
  this.U = [c, d];
  return this
};
q.Ge = function(a) {
  var b = this.D[this.D.length - 1];
  b == k && e(Error("Path cannot start with curve"));
  2 != b && (this.D.push(2), this.d.push(0));
  for(b = 0;b < arguments.length;b += 6) {
    var c = arguments[b + 4], d = arguments[b + 5];
    this.qa.push(arguments[b], arguments[b + 1], arguments[b + 2], arguments[b + 3], c, d)
  }
  this.d[this.d.length - 1] += b / 6;
  this.U = [c, d];
  return this
};
q.close = function() {
  var a = this.D[this.D.length - 1];
  a == k && e(Error("Path cannot start with close"));
  4 != a && (this.D.push(4), this.d.push(1), this.U = this.tb);
  return this
};
q.arcTo = function(a, b, c, d) {
  var f = this.U[0] - a * Math.cos(Qe(c)) + a * Math.cos(Qe(c + d)), g = this.U[1] - b * Math.sin(Qe(c)) + b * Math.sin(Qe(c + d));
  this.D.push(3);
  this.d.push(1);
  this.qa.push(a, b, c, d, f, g);
  this.Ib = m;
  this.U = [f, g];
  return this
};
q.Vf = function(a, b, c, d) {
  for(var f = this.U[0] - a * Math.cos(Qe(c)), g = this.U[1] - b * Math.sin(Qe(c)), i = Qe(d), d = Math.ceil(2 * (Math.abs(i) / Math.PI)), i = i / d, c = Qe(c), l = 0;l < d;l++) {
    var n = Math.cos(c), r = Math.sin(c), z = 4 / 3 * Math.sin(i / 2) / (1 + Math.cos(i / 2)), s = f + (n - z * r) * a, x = g + (r + z * n) * b, c = c + i, n = Math.cos(c), r = Math.sin(c);
    this.Ge(s, x, f + (n + z * r) * a, g + (r - z * n) * b, f + n * a, g + r * b)
  }
  return this
};
function Ah(a, b) {
  for(var c = a.qa, d = 0, f = 0, g = a.D.length;f < g;f++) {
    var i = a.D[f], l = zh[i] * a.d[f];
    b(i, c.slice(d, d + l));
    d += l
  }
}
q.M = function() {
  var a = new this.constructor;
  a.D = this.D.concat();
  a.d = this.d.concat();
  a.qa = this.qa.concat();
  a.tb = this.tb && this.tb.concat();
  a.U = this.U && this.U.concat();
  a.Ib = this.Ib;
  return a
};
var Bh = {};
Bh[0] = yh.prototype.moveTo;
Bh[1] = yh.prototype.lineTo;
Bh[4] = yh.prototype.close;
Bh[2] = yh.prototype.Ge;
Bh[3] = yh.prototype.Vf;
function Ch(a) {
  if(a.Ib) {
    return a.M()
  }
  var b = new yh;
  Ah(a, function(a, d) {
    Bh[a].apply(b, d)
  });
  return b
}
yh.prototype.Na = function() {
  return 0 == this.D.length
};
function Dh(a, b, c, d, f) {
  Q.call(this, f);
  this.width = a;
  this.height = b;
  this.ka = c || k;
  this.Tb = d || k
}
A(Dh, Q);
q = Dh.prototype;
q.I = k;
q.Ja = 0;
q.Za = 0;
q.Te = function() {
  return this.W()
};
q.W = function() {
  return this.r ? Ed(this.b()) : ka(this.width) && ka(this.height) ? new N(this.width, this.height) : k
};
function Eh(a) {
  var b = a.W();
  return b ? b.width / (a.ka ? new N(a.ka, a.Tb) : a.W()).width : 0
}
;function Fh(a, b, c, d, f) {
  Dh.call(this, a, b, c, d, f);
  this.Je = {};
  this.xe = I && !J(526);
  this.eb = new Jd(this)
}
var Gh;
A(Fh, Dh);
function Hh(a, b, c) {
  a = a.O.p.createElementNS("http://www.w3.org/2000/svg", b);
  c && sh(a, c);
  return a
}
function sh(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
q = Fh.prototype;
q.rb = function(a, b) {
  (b || this.I).b().appendChild(a.b())
};
q.ge = function(a, b) {
  var c = a.b();
  b instanceof wh ? (c.setAttribute("fill", b.sa), c.setAttribute("fill-opacity", b.dc)) : c.setAttribute("fill", "none")
};
q.he = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.sa);
    var d = b.pb;
    v(d) && -1 != d.indexOf("px") ? c.setAttribute("stroke-width", parseFloat(d) / Eh(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
q.i = function() {
  var a = Hh(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = Hh(this, "g");
  this.zd = Hh(this, "defs");
  this.I = new rh(b, this);
  a.appendChild(this.zd);
  a.appendChild(b);
  this.e = a;
  if(this.ka || this.Ja || this.Za) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.xe ? this.hd() : this.b().setAttribute("viewBox", this.Ja + " " + this.Za + " " + (this.ka ? this.ka + " " + this.Tb : ""))
  }
};
q.hd = function() {
  if(this.r && (this.ka || this.Ja || !this.Za)) {
    var a = this.W();
    if(0 == a.width) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.Ja, c = -this.Za, d = a.width / this.ka, a = a.height / this.Tb;
      this.I.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
q.Z = function(a, b) {
  Cd(this.b(), a, b)
};
q.W = function() {
  if(!Ob) {
    return this.r ? Ed(this.b()) : Fh.f.W.call(this)
  }
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.r && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = Ed(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Ed(f), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
q.clear = function() {
  this.I.clear();
  od(this.zd);
  this.Je = {}
};
q.xc = function(a, b, c, d, f, g, i) {
  a = Hh(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new th(a, this, f, g);
  this.rb(f, i);
  return f
};
q.drawImage = function(a, b, c, d, f, g) {
  a = Hh(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new uh(a, this);
  this.rb(f, g);
  return f
};
q.Q = function() {
  var a = this.W();
  Fh.f.Q.call(this);
  a || this.dispatchEvent("resize");
  if(this.xe) {
    var a = this.width, b = this.height;
    "string" == typeof a && -1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%") && P(this.eb, Ih(), Fc, this.hd);
    this.hd()
  }
};
q.ab = function() {
  Fh.f.ab.call(this);
  this.xe && Ld(this.eb, Ih(), Fc, this.hd)
};
q.c = function() {
  delete this.Je;
  delete this.zd;
  delete this.I;
  Fh.f.c.call(this)
};
function Ih() {
  Gh || (Gh = new Dc(400), Gh.start());
  return Gh
}
;function Jh() {
  return this.e = this.wa.O.b(this.R) || this.e
}
function Kh(a, b) {
  this.R = a.id;
  W.call(this, a, b)
}
A(Kh, oh);
Kh.prototype.b = Jh;
Kh.prototype.clear = function() {
  od(this.b())
};
Kh.prototype.Z = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = Y(a) + "px";
  d.height = Y(b) + "px";
  c.coordsize = Y(a) + " " + Y(b);
  this.wa.I != this && (c.coordorigin = "0 0")
};
function Lh(a, b, c, d, f, g, i, l) {
  this.R = a.id;
  X.call(this, a, b, i, l)
}
A(Lh, ph);
Lh.prototype.b = Jh;
function Mh(a, b) {
  this.R = a.id;
  W.call(this, a, b)
}
A(Mh, qh);
Mh.prototype.b = Jh;
Mh.prototype.Z = function(a, b) {
  var c = this.b().style;
  c.width = Nh(a) + "px";
  c.height = Nh(b) + "px"
};
function Oh(a, b, c, d, f) {
  Dh.call(this, a, b, c, d, f);
  this.eb = new Jd(this)
}
A(Oh, Dh);
var Ph = document.documentMode && 8 <= document.documentMode;
function Nh(a) {
  return Math.round(100 * (parseFloat(a.toString()) - 0.5))
}
function Y(a) {
  return Math.round(100 * parseFloat(a.toString()))
}
function Qh(a, b) {
  var c = a.O.createElement("g_vml_:" + b);
  c.id = "goog_" + Sa++;
  return c
}
function Rh(a) {
  Ph && a.r && (a.b().innerHTML = a.b().innerHTML)
}
Oh.prototype.rb = function(a, b) {
  (b || this.I).b().appendChild(a.b());
  Rh(this)
};
Oh.prototype.ge = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    "fill" == f.tagName && c.removeChild(f)
  }
  b instanceof wh ? "transparent" == b.sa ? c.filled = m : 1 != b.dc ? (c.filled = j, d = Qh(this, "fill"), d.opacity = Math.round(100 * b.dc) + "%", d.color = b.sa, c.appendChild(d)) : (c.filled = j, c.fillcolor = b.sa) : c.filled = m;
  Rh(this)
};
Oh.prototype.he = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = j;
    var d = b.pb, d = v(d) && -1 == d.indexOf("px") ? parseFloat(d) : d * Eh(this), f = c.getElementsByTagName("stroke")[0];
    1 > d ? (f = f || Qh(this, "stroke"), f.opacity = d, f.pi = "1px", f.color = b.sa, c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.sa, c.strokeweight = d + "px")
  }else {
    c.stroked = m
  }
  Rh(this)
};
function Sh(a, b, c, d, f) {
  var g = a.style;
  g.position = "absolute";
  g.left = Nh(b) + "px";
  g.top = Nh(c) + "px";
  g.width = Y(d) + "px";
  g.height = Y(f) + "px";
  "shape" == a.tagName && (a.coordsize = Y(d) + " " + Y(f))
}
try {
  eval("document.namespaces")
}catch(Th) {
}
q = Oh.prototype;
q.i = function() {
  var a = this.O.p;
  a.namespaces.g_vml_ || (Ph ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}");
  var a = this.width, b = this.height, c = this.O.i("div", {style:"overflow:hidden;position:relative;width:" + (v(a) && Fa(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (v(b) && Fa(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = Qh(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.ka ? Y(this.ka) + " " + Y(this.Tb) : Y(a) + " " + Y(b);
  d.coordorigin = ga(this.Ja) ? Y(this.Ja) + " " + Y(this.Za) : "0 0";
  c.appendChild(d);
  this.I = new Kh(d, this);
  M(c, "resize", w(this.Id, this))
};
q.Id = function() {
  var a = Ed(this.b()), b = this.I.b().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.b();a && a.currentStyle && "none" != a.currentStyle.display;) {
      a = a.parentNode
    }
    a && a.currentStyle && P(this.eb, a, "propertychange", this.Id)
  }
  this.dispatchEvent("resize")
};
q.Z = function(a, b) {
  Cd(this.b(), a, b)
};
q.W = function() {
  var a = this.b();
  return new N(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
q.clear = function() {
  this.I.clear()
};
q.xc = function(a, b, c, d, f, g, i) {
  var l = Qh(this, "oval");
  Sh(l, a - c, b - d, 2 * c, 2 * d);
  a = new Lh(l, this, 0, 0, 0, 0, f, g);
  this.rb(a, i);
  return a
};
q.drawImage = function(a, b, c, d, f, g) {
  var i = Qh(this, "image");
  Sh(i, a, b, c, d);
  Ph ? i.src = f : i.setAttribute("src", f);
  a = new Mh(i, this);
  this.rb(a, g);
  return a
};
q.Q = function() {
  Oh.f.Q.call(this);
  this.Id();
  Rh(this)
};
q.c = function() {
  this.I = k;
  Oh.f.c.call(this)
};
function Uh(a) {
  W.call(this, k, a);
  this.P = []
}
A(Uh, oh);
Uh.prototype.clear = function() {
  this.P.length && (this.P.length = 0, Vh(this.wa))
};
Uh.prototype.Z = function() {
};
Uh.prototype.appendChild = function(a) {
  this.P.push(a)
};
Uh.prototype.Ba = function() {
  for(var a = 0, b = this.P.length;a < b;a++) {
    Wh(this.wa, this.P[a])
  }
};
function Xh(a, b, c, d, f, g, i, l) {
  X.call(this, a, b, i, l);
  this.$f = c;
  this.ag = d;
  this.Cf = f;
  this.Df = g;
  this.z = new yh;
  this.z.clear();
  this.z.moveTo(this.$f + this.Cf * Math.cos(Qe(0)), this.ag + this.Df * Math.sin(Qe(0)));
  this.z.arcTo(this.Cf, this.Df, 0, 360);
  this.z.close();
  this.Eg = new Yh(k, b, this.z, i, l)
}
A(Xh, ph);
Xh.prototype.Ba = function(a) {
  this.Eg.Ba(a)
};
function Yh(a, b, c, d, f) {
  X.call(this, a, b, d, f);
  this.mb(c)
}
A(Yh, nh);
Yh.prototype.Ub = m;
Yh.prototype.mb = function(a) {
  this.z = a.Ib ? a : Ch(a);
  this.Ub && Vh(this.wa)
};
Yh.prototype.Ba = function(a) {
  this.Ub = j;
  a.beginPath();
  Ah(this.z, function(b, c) {
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
function Zh(a, b, c, d, f, g, i) {
  W.call(this, a, b);
  this.dh = c;
  this.fh = d;
  this.ye = f;
  this.Hd = g;
  this.Ng = i
}
A(Zh, qh);
Zh.prototype.Ub = m;
Zh.prototype.Z = function(a, b) {
  this.ye = a;
  this.Hd = b;
  this.Ub && Vh(this.wa)
};
Zh.prototype.Ba = function(a) {
  this.bf ? (this.ye && this.Hd && a.drawImage(this.bf, this.dh, this.fh, this.ye, this.Hd), this.Ub = j) : (a = new Image, a.onload = w(this.og, this, a), a.src = this.Ng)
};
Zh.prototype.og = function(a) {
  this.bf = a;
  Vh(this.wa)
};
function $h(a, b, c, d, f) {
  Dh.call(this, a, b, c, d, f)
}
A($h, Dh);
q = $h.prototype;
q.ge = function() {
  Vh(this)
};
q.he = function() {
  Vh(this)
};
function ai(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.Lf ? b.Lf.M() : new mh, f = d.fa, g = d.ha;
  (f || g) && c.translate(f, g);
  (d = d.Y) && c.rotate(Math.asin(d))
}
q.i = function() {
  var a = this.O.i("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Rb = this.O.i("canvas");
  a.appendChild(this.Rb);
  this.wg = this.I = new Uh(this);
  this.Jg = 0;
  bi(this)
};
q.getContext = function() {
  this.b() || this.i();
  this.ub || (this.ub = this.Rb.getContext("2d"), this.ub.save());
  return this.ub
};
q.Z = function(a, b) {
  this.width = a;
  this.height = b;
  bi(this);
  Vh(this)
};
q.W = function() {
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.r && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = Ed(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Ed(f), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
function bi(a) {
  Cd(a.b(), a.width, a.height);
  var b = a.W();
  b && (Cd(a.Rb, b.width, b.height), a.Rb.width = b.width, a.Rb.height = b.height, a.ub = k)
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
  this.I.clear();
  for(var a = this.b();1 < a.childNodes.length;) {
    a.removeChild(a.lastChild)
  }
};
function Vh(a) {
  if(!a.ni && a.r) {
    a.reset();
    if(a.ka) {
      var b = a.W();
      a.getContext().scale(b.width / a.ka, b.height / a.Tb)
    }
    (a.Ja || a.Za) && a.getContext().translate(-a.Ja, -a.Za);
    ai(a, a.I);
    a.I.Ba(a.ub);
    a.getContext().restore()
  }
}
function Wh(a, b) {
  var c = a.getContext();
  ai(a, b);
  if(!b.kg || !b.mg) {
    b.Ba(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof wh) {
        0 != d.dc && (c.globalAlpha = d.dc, c.fillStyle = d.sa, b.Ba(c), c.fill(), c.globalAlpha = 1)
      }else {
        var f = c.createLinearGradient(d.ii(), d.ki(), d.ji(), d.li());
        f.addColorStop(0, d.gi());
        f.addColorStop(1, d.hi());
        c.fillStyle = f;
        b.Ba(c);
        c.fill()
      }
    }
    if(d = b.se) {
      b.Ba(c), c.strokeStyle = d.sa, d = d.pb, v(d) && -1 != d.indexOf("px") && (d = parseFloat(d) / Eh(a)), c.lineWidth = d, c.stroke()
    }
  }
  a.getContext().restore()
}
q.rb = function(a, b) {
  this.append(a, b)
};
q.append = function(a, b) {
  b = b || this.I;
  b.appendChild(a);
  this.r && !this.Jg && !(b != this.I && b != this.wg) && Wh(this, a)
};
q.xc = function(a, b, c, d, f, g, i) {
  a = new Xh(k, this, a, b, c, d, f, g);
  this.append(a, i);
  return a
};
q.drawImage = function(a, b, c, d, f, g) {
  a = new Zh(k, this, a, b, c, d, f);
  this.append(a, g);
  return a
};
q.c = function() {
  this.ub = k;
  $h.f.c.call(this)
};
q.Q = function() {
  var a = this.W();
  $h.f.Q.call(this);
  a || (bi(this), this.dispatchEvent("resize"));
  Vh(this)
};
function ci(a, b) {
  a.setAttribute("role", b);
  a.oi = b
}
;function di() {
}
var ei;
ea(di);
q = di.prototype;
q.Cc = function() {
};
q.i = function(a) {
  var b = a.Fa().i("div", fi(this, a).join(" "), a.ba);
  this.fe(a, b);
  return b
};
q.Xb = function(a) {
  return a
};
q.Vb = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(H && !J("7")) {
      var d = gi(Yc(a), b);
      d.push(b);
      ra(c ? Zc : $c, a).apply(k, d)
    }else {
      c ? Zc(a, b) : $c(a, b)
    }
  }
};
q.cf = function(a) {
  a.jc == k && (a.jc = "rtl" == (Bd(a.r ? a.e : a.O.p.body, "direction") || ((a.r ? a.e : a.O.p.body).currentStyle ? (a.r ? a.e : a.O.p.body).currentStyle.direction : k) || (a.r ? a.e : a.O.p.body).style && (a.r ? a.e : a.O.p.body).style.direction));
  a.jc && this.Hb(a.b(), j);
  a.isEnabled() && this.$c(a, a.Mb)
};
q.fe = function(a, b) {
  a.isEnabled() || this.$(b, 1, j);
  a.h & 8 && this.$(b, 8, j);
  a.T & 16 && this.$(b, 16, !!(a.h & 16));
  a.T & 64 && this.$(b, 64, !!(a.h & 64))
};
q.Xc = function(a, b) {
  Id(a, !b, !H && !Nb)
};
q.Hb = function(a, b) {
  this.Vb(a, this.v() + "-rtl", b)
};
q.ef = function(a) {
  var b;
  return a.T & 32 && (b = a.cb()) ? ud(b) : m
};
q.$c = function(a, b) {
  var c;
  if(a.T & 32 && (c = a.cb())) {
    if(!b && a.h & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.h & 32 && a.Ve()
    }
    ud(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
q.me = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.ja = function(a, b, c) {
  var d = a.b();
  if(d) {
    var f = hi(this, b);
    f && this.Vb(a, f, c);
    this.$(d, b, c)
  }
};
q.$ = function(a, b, c) {
  ei || (ei = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = ei[b]) && a.setAttribute("aria-" + b, c)
};
q.Yc = function(a, b) {
  var c = this.Xb(a);
  if(c && (od(c), b)) {
    if(v(b)) {
      rd(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = fd(c);
          c.appendChild(v(a) ? b.createTextNode(a) : a)
        }
      };
      u(b) ? E(b, d) : ha(b) && !("nodeType" in b) ? E(eb(b), d) : d(b)
    }
  }
};
q.cb = function(a) {
  return a.b()
};
q.v = p("goog-control");
function fi(a, b) {
  var c = a.v(), d = [c], f = a.v();
  f != c && d.push(f);
  c = b.h;
  for(f = [];c;) {
    var g = c & -c;
    f.push(hi(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.ua) && d.push.apply(d, c);
  H && !J("7") && d.push.apply(d, gi(d));
  return d
}
function gi(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  E([], function(d) {
    $a(d, ra(ab, a)) && (!b || ab(d, b)) && c.push(d.join("_"))
  });
  return c
}
function hi(a, b) {
  if(!a.Be) {
    var c = a.v();
    a.Be = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Be[b]
}
;function ii(a, b) {
  a || e(Error("Invalid class name " + a));
  la(b) || e(Error("Invalid decorator function " + b))
}
var ji = {};
function ki(a, b, c, d, f) {
  if(!H && (!I || !J("525"))) {
    return j
  }
  if(Rb && f) {
    return li(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || H && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(H && ac());
    case 27:
      return!I
  }
  return li(a)
}
function li(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || I && 0 == a) {
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
;function mi(a, b) {
  a && ni(this, a, b)
}
A(mi, Cc);
q = mi.prototype;
q.e = k;
q.Nc = k;
q.Qd = k;
q.Oc = k;
q.Pa = -1;
q.Oa = -1;
var oi = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, pi = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, qi = {61:187, 
59:186}, ri = H || I && J("525");
q = mi.prototype;
q.pg = function(a) {
  if(I && (17 == this.Pa && !a.ctrlKey || 18 == this.Pa && !a.altKey)) {
    this.Oa = this.Pa = -1
  }
  ri && !ki(a.keyCode, this.Pa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Oa = Ob && a.keyCode in qi ? qi[a.keyCode] : a.keyCode
};
q.qg = function() {
  this.Oa = this.Pa = -1
};
q.handleEvent = function(a) {
  var b = a.Da, c, d;
  H && "keypress" == a.type ? (c = this.Oa, d = 13 != c && 27 != c ? b.keyCode : 0) : I && "keypress" == a.type ? (c = this.Oa, d = 0 <= b.charCode && 63232 > b.charCode && li(c) ? b.charCode : 0) : Nb ? (c = this.Oa, d = li(c) ? b.keyCode : 0) : (c = b.keyCode || this.Oa, d = b.charCode || 0, Rb && 63 == d && !c && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in oi ? f = oi[c] : 25 == c && a.shiftKey && (f = 9) : g && g in pi && (f = pi[g]);
  a = f == this.Pa;
  this.Pa = f;
  b = new si(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.g()
  }
};
q.b = o("e");
function ni(a, b, c) {
  a.Oc && a.detach();
  a.e = b;
  a.Nc = M(a.e, "keypress", a, c);
  a.Qd = M(a.e, "keydown", a.pg, c, a);
  a.Oc = M(a.e, "keyup", a.qg, c, a)
}
q.detach = function() {
  this.Nc && (wc(this.Nc), wc(this.Qd), wc(this.Oc), this.Oc = this.Qd = this.Nc = k);
  this.e = k;
  this.Oa = this.Pa = -1
};
q.c = function() {
  mi.f.c.call(this);
  this.detach()
};
function si(a, b, c, d) {
  d && this.ac(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
A(si, lc);
function Z(a, b, c) {
  Q.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ma(b);
      if(d = ji[d]) {
        break
      }
      b = b.f ? b.f.constructor : k
    }
    b = d ? la(d.La) ? d.La() : new d : k
  }
  this.l = b;
  this.Zc(a)
}
A(Z, Q);
q = Z.prototype;
q.ba = k;
q.h = 0;
q.T = 39;
q.od = 255;
q.Pg = 0;
q.Mb = j;
q.ua = k;
q.Kd = j;
q.nd = m;
q.Fg = k;
q.cb = function() {
  return this.l.cb(this)
};
function ti(a, b) {
  b && (a.ua ? ab(a.ua, b) || a.ua.push(b) : a.ua = [b], a.l.Vb(a, b, j))
}
q.Vb = function(a, b) {
  b ? ti(this, a) : a && this.ua && (cb(this.ua, a), 0 == this.ua.length && (this.ua = k), this.l.Vb(this, a, m))
};
q.i = function() {
  var a = this.l.i(this);
  this.e = a;
  var b = this.Fg || this.l.Cc();
  b && ci(a, b);
  this.nd || this.l.Xc(a, m);
  this.Mb || this.l.me(a, m)
};
q.Xb = function() {
  return this.l.Xb(this.b())
};
q.Q = function() {
  Z.f.Q.call(this);
  this.l.cf(this);
  if(this.T & -2 && (this.Kd && ui(this, j), this.T & 32)) {
    var a = this.cb();
    if(a) {
      var b = this.zb || (this.zb = new mi);
      ni(b, a);
      P(P(P(Qd(this), b, "key", this.Ye), a, "focus", this.ng), a, "blur", this.Ve)
    }
  }
};
function ui(a, b) {
  var c = Qd(a), d = a.b();
  b ? (P(P(P(P(c, d, "mouseover", a.Ic), d, "mousedown", a.Gc), d, "mouseup", a.Ze), d, "mouseout", a.Hc), H && P(c, d, "dblclick", a.Xe)) : (Ld(Ld(Ld(Ld(c, d, "mouseover", a.Ic), d, "mousedown", a.Gc), d, "mouseup", a.Ze), d, "mouseout", a.Hc), H && Ld(c, d, "dblclick", a.Xe))
}
q.ab = function() {
  Z.f.ab.call(this);
  this.zb && this.zb.detach();
  this.Mb && this.isEnabled() && this.l.$c(this, m)
};
q.c = function() {
  Z.f.c.call(this);
  this.zb && (this.zb.g(), delete this.zb);
  delete this.l;
  this.ua = this.ba = k
};
q.Yc = function(a) {
  this.l.Yc(this.b(), a);
  this.Zc(a)
};
q.Zc = aa("ba");
q.Qe = function() {
  var a = this.ba;
  if(!a) {
    return""
  }
  if(!v(a)) {
    if(u(a)) {
      a = Ya(a, vd).join("")
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
q.Hb = function(a) {
  Z.f.Hb.call(this, a);
  var b = this.b();
  b && this.l.Hb(b, a)
};
q.Xc = function(a) {
  this.nd = a;
  var b = this.b();
  b && this.l.Xc(b, a)
};
q.me = function(a, b) {
  if(b || this.Mb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.l.me(c, a);
    this.isEnabled() && this.l.$c(this, a);
    this.Mb = a;
    return j
  }
  return m
};
q.isEnabled = function() {
  return!(this.h & 1)
};
function vi(a, b) {
  wi(a, 2, b) && a.ja(2, b)
}
q.Pd = function() {
  return!!(this.h & 4)
};
q.setActive = function(a) {
  wi(this, 4, a) && this.ja(4, a)
};
q.je = function(a) {
  wi(this, 8, a) && this.ja(8, a)
};
q.ja = function(a, b) {
  this.T & a && b != !!(this.h & a) && (this.l.ja(this, a, b), this.h = b ? this.h | a : this.h & ~a)
};
function $(a, b) {
  return!!(a.od & b) && !!(a.T & b)
}
function wi(a, b, c) {
  return!!(a.T & b) && !!(a.h & b) != c && (!(a.Pg & b) || a.dispatchEvent(Od(b, c))) && !a.ta
}
q.Ic = function(a) {
  !xi(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && $(this, 2) && vi(this, j)
};
q.Hc = function(a) {
  !xi(a, this.b()) && this.dispatchEvent("leave") && ($(this, 4) && this.setActive(m), $(this, 2) && vi(this, m))
};
function xi(a, b) {
  return!!a.relatedTarget && qd(b, a.relatedTarget)
}
q.Gc = function(a) {
  if(this.isEnabled() && ($(this, 2) && vi(this, j), nc(a) && (!I || !Rb || !a.ctrlKey))) {
    $(this, 4) && this.setActive(j), this.l.ef(this) && this.cb().focus()
  }
  !this.nd && nc(a) && (!I || !Rb || !a.ctrlKey) && a.preventDefault()
};
q.Ze = function(a) {
  this.isEnabled() && ($(this, 2) && vi(this, j), this.Pd() && this.ib(a) && $(this, 4) && this.setActive(m))
};
q.Xe = function(a) {
  this.isEnabled() && this.ib(a)
};
q.ib = function(a) {
  if($(this, 16)) {
    var b = !(this.h & 16);
    wi(this, 16, b) && this.ja(16, b)
  }
  $(this, 8) && this.je(j);
  $(this, 64) && (b = !(this.h & 64), wi(this, 64, b) && this.ja(64, b));
  b = new ic("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.be = a.be);
  return this.dispatchEvent(b)
};
q.ng = function() {
  $(this, 32) && wi(this, 32, j) && this.ja(32, j)
};
q.Ve = function() {
  $(this, 4) && this.setActive(m);
  $(this, 32) && wi(this, 32, m) && this.ja(32, m)
};
q.Ye = function(a) {
  return this.Mb && this.isEnabled() && this.Jd(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
q.Jd = function(a) {
  return 13 == a.keyCode && this.ib(a)
};
la(Z) || e(Error("Invalid component class " + Z));
la(di) || e(Error("Invalid renderer class " + di));
var yi = ma(Z);
ji[yi] = di;
ii("goog-control", function() {
  return new Z(k)
});
function zi() {
}
A(zi, di);
ea(zi);
q = zi.prototype;
q.Cc = p("button");
q.$ = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : zi.f.$.call(this, a, b, c)
};
q.i = function(a) {
  var b = zi.f.i.call(this, a), c = a.Dc();
  c && this.le(b, c);
  (c = a.Ec()) && this.cd(b, c);
  a.T & 16 && this.$(b, 16, !!(a.h & 16));
  return b
};
q.Ec = da;
q.cd = da;
q.Dc = function(a) {
  return a.title
};
q.le = function(a, b) {
  a && (a.title = b || "")
};
q.v = p("goog-button");
function Ai() {
}
A(Ai, zi);
ea(Ai);
q = Ai.prototype;
q.Cc = function() {
};
q.i = function(a) {
  a.r && m != a.Kd && ui(a, m);
  a.Kd = m;
  a.od &= -256;
  a.r && a.h & 32 && e(Error("Component already rendered"));
  a.h & 32 && a.ja(32, m);
  a.T &= -33;
  return a.Fa().i("button", {"class":fi(this, a).join(" "), disabled:!a.isEnabled(), title:a.Dc() || "", value:a.Ec() || ""}, a.Qe() || "")
};
q.cf = function(a) {
  P(Qd(a), a.b(), "click", a.ib)
};
q.Xc = da;
q.Hb = da;
q.ef = function(a) {
  return a.isEnabled()
};
q.$c = da;
q.ja = function(a, b, c) {
  Ai.f.ja.call(this, a, b, c);
  if((a = a.b()) && 1 == b) {
    a.disabled = c
  }
};
q.Ec = function(a) {
  return a.value
};
q.cd = function(a, b) {
  a && (a.value = b)
};
q.$ = da;
function Bi(a, b, c) {
  Z.call(this, a, b || Ai.La(), c)
}
A(Bi, Z);
q = Bi.prototype;
q.Ec = o("Of");
q.cd = function(a) {
  this.Of = a;
  this.l.cd(this.b(), a)
};
q.Dc = o("Kf");
q.le = function(a) {
  this.Kf = a;
  this.l.le(this.b(), a)
};
q.c = function() {
  Bi.f.c.call(this);
  delete this.Of;
  delete this.Kf
};
q.Q = function() {
  Bi.f.Q.call(this);
  if(this.T & 32) {
    var a = this.cb();
    a && P(Qd(this), a, "keyup", this.Jd)
  }
};
q.Jd = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.ib(a) : 32 == a.keyCode
};
ii("goog-button", function() {
  return new Bi(k)
});
function Ci() {
}
A(Ci, zi);
ea(Ci);
q = Ci.prototype;
q.i = function(a) {
  var b = {"class":"goog-inline-block " + fi(this, a).join(" "), title:a.Dc() || ""}, b = a.Fa().i("div", b, Di(this, a.ba, a.Fa()));
  this.fe(a, b);
  return b
};
q.Cc = p("button");
q.fe = function(a, b) {
  a.isEnabled() || this.$(b, 1, j);
  a.h & 8 && this.$(b, 8, j);
  a.T & 16 && this.$(b, 16, j);
  a.h & 64 && this.$(b, 64, j)
};
q.Xb = function(a) {
  return a && a.firstChild.firstChild
};
function Di(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.v() + "-outer-box"), c.i("div", "goog-inline-block " + (a.v() + "-inner-box"), b))
}
q.v = p("goog-custom-button");
function Ei(a, b, c) {
  Bi.call(this, a, b || Ci.La(), c)
}
A(Ei, Bi);
ii("goog-custom-button", function() {
  return new Ei(k)
});
function Fi(a) {
  this.B = [];
  Gi(this, a)
}
A(Fi, Cc);
q = Fi.prototype;
q.Wa = k;
q.ee = k;
function Gi(a, b) {
  b && (E(b, function(a) {
    this.kc(a, m)
  }, a), fb(a.B, b))
}
q.Gd = o("Wa");
q.Se = function() {
  return eb(this.B)
};
q.bd = function(a) {
  a != this.Wa && (this.kc(this.Wa, m), this.Wa = a, this.kc(a, j));
  this.dispatchEvent("select")
};
q.Fd = function() {
  return this.Wa ? Xa(this.B, this.Wa) : -1
};
q.ke = function(a) {
  this.bd(this.B[a] || k)
};
q.clear = function() {
  bb(this.B);
  this.Wa = k
};
q.c = function() {
  Fi.f.c.call(this);
  delete this.B;
  this.Wa = k
};
q.kc = function(a, b) {
  a && ("function" == typeof this.ee ? this.ee(a, b) : "function" == typeof a.je && a.je(b))
};
function Hi() {
}
A(Hi, di);
ea(Hi);
var Ii = 0;
Hi.prototype.i = function(a) {
  var b = fi(this, a);
  return a.Fa().i("div", b ? b.join(" ") : k, Ji(this, a.ba, a.Te(), a.Fa()))
};
function Ji(a, b, c, d) {
  for(var f = [], g = 0, i = 0;g < c.height;g++) {
    for(var l = [], n = 0;n < c.width;n++) {
      var r = b && b[i++];
      l.push(Ki(a, r, d))
    }
    f.push(d.i("tr", a.v() + "-row", l))
  }
  return a.Fe(f, d)
}
Hi.prototype.Fe = function(a, b) {
  var c = b.i("table", this.v() + "-table", b.i("tbody", this.v() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  ci(c, "grid");
  return c
};
function Ki(a, b, c) {
  a = c.i("td", {"class":a.v() + "-cell", id:a.v() + "-cell-" + Ii++}, b);
  ci(a, "gridcell");
  return a
}
Hi.prototype.Yc = function(a, b) {
  if(a) {
    var c = gd(document, "tbody", this.v() + "-body", a)[0];
    if(c) {
      var d = 0;
      E(c.rows, function(a) {
        E(a.cells, function(a) {
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
          f.push(Ki(this, l, g));
          f.length == i && (l = g.i("tr", this.v() + "-row", f), c.appendChild(l), f.length = 0)
        }
        if(0 < f.length) {
          for(;f.length < i;) {
            f.push(Ki(this, "", g))
          }
          l = g.i("tr", this.v() + "-row", f);
          c.appendChild(l)
        }
      }
    }
    Id(a, j, Ob)
  }
};
function Li(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && ab(Yc(c), a.v() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function Mi(a, b, c, d) {
  c && (c = c.parentNode, a = a.v() + "-cell-hover", d ? Zc(c, a) : $c(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id))
}
Hi.prototype.v = p("goog-palette");
function Ni(a, b, c) {
  Z.call(this, a, b || Hi.La(), c)
}
A(Ni, Z);
q = Ni.prototype;
q.n = k;
q.fb = -1;
q.K = k;
q.c = function() {
  Ni.f.c.call(this);
  this.K && (this.K.g(), this.K = k);
  this.n = k
};
q.Zc = function(a) {
  Ni.f.Zc.call(this, a);
  Oi(this);
  this.K ? (this.K.clear(), Gi(this.K, a)) : (this.K = new Fi(a), this.K.ee = w(this.kc, this), P(Qd(this), this.K, "select", this.rg));
  this.fb = -1
};
q.Qe = p(k);
q.Ic = function(a) {
  Ni.f.Ic.call(this, a);
  var b = Li(this.l, this, a.target);
  if((!b || !a.relatedTarget || !qd(b, a.relatedTarget)) && b != Pi(this)) {
    a = this.ba, Qi(this, a ? Xa(a, b) : -1)
  }
};
q.Hc = function(a) {
  Ni.f.Hc.call(this, a);
  var b = Li(this.l, this, a.target);
  (!b || !a.relatedTarget || !qd(b, a.relatedTarget)) && b == Pi(this) && Mi(this.l, this, b, m)
};
q.Gc = function(a) {
  Ni.f.Gc.call(this, a);
  if(this.Pd() && (a = Li(this.l, this, a.target), a != Pi(this))) {
    var b = this.ba;
    Qi(this, b ? Xa(b, a) : -1)
  }
};
q.ib = function() {
  var a = Pi(this);
  return a ? (this.bd(a), this.dispatchEvent("action")) : m
};
q.Ye = function(a) {
  var b = this.ba, b = b ? b.length : 0, c = this.n.width;
  if(0 == b || !this.isEnabled()) {
    return m
  }
  if(13 == a.keyCode || 32 == a.keyCode) {
    return this.ib(a)
  }
  if(36 == a.keyCode) {
    return Qi(this, 0), j
  }
  if(35 == a.keyCode) {
    return Qi(this, b - 1), j
  }
  var d = 0 > this.fb ? this.Fd() : this.fb;
  switch(a.keyCode) {
    case 37:
      -1 == d && (d = b);
      if(0 < d) {
        return Qi(this, d - 1), a.preventDefault(), j
      }
      break;
    case 39:
      if(d < b - 1) {
        return Qi(this, d + 1), a.preventDefault(), j
      }
      break;
    case 38:
      -1 == d && (d = b + c - 1);
      if(d >= c) {
        return Qi(this, d - c), a.preventDefault(), j
      }
      break;
    case 40:
      if(-1 == d && (d = -c), d < b - c) {
        return Qi(this, d + c), a.preventDefault(), j
      }
  }
  return m
};
q.rg = function() {
};
q.Te = o("n");
q.Z = function(a, b) {
  this.b() && e(Error("Component already rendered"));
  this.n = ka(a) ? new N(a, b) : a;
  Oi(this)
};
function Pi(a) {
  var b = a.ba;
  return b && b[a.fb]
}
function Qi(a, b) {
  b != a.fb && (Ri(a, a.fb, m), a.fb = b, Ri(a, b, j))
}
q.Fd = function() {
  return this.K ? this.K.Fd() : -1
};
q.Gd = function() {
  return this.K ? this.K.Gd() : k
};
q.ke = function(a) {
  this.K && this.K.ke(a)
};
q.bd = function(a) {
  this.K && this.K.bd(a)
};
function Ri(a, b, c) {
  if(a.b()) {
    var d = a.ba;
    d && 0 <= b && b < d.length && Mi(a.l, a, d[b], c)
  }
}
q.kc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.l.v() + "-cell-selected";
    b ? Zc(c, d) : $c(c, d)
  }
};
function Oi(a) {
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
;function Si(a, b, c) {
  this.uc = a || [];
  Ni.call(this, k, b || Hi.La(), c);
  this.uc = this.uc;
  this.Rc = k;
  this.Yc(Ti(this))
}
A(Si, Ni);
Si.prototype.Rc = k;
function Vi(a) {
  var b = Wi(Xi);
  a.Rc || (a.Rc = Ya(a.uc, function(a) {
    return Wi(a)
  }));
  a.ke(b ? Xa(a.Rc, b) : -1)
}
function Ti(a) {
  return Ya(a.uc, function(a) {
    var c = this.Fa().i("div", {"class":this.l.v() + "-colorswatch", style:"background-color:" + a});
    c.title = "#" == a.charAt(0) ? "RGB (" + Eg(a).join(", ") + ")" : a;
    return c
  }, a)
}
function Wi(a) {
  if(a) {
    try {
      return yg(a).Kc
    }catch(b) {
    }
  }
  return k
}
;var Yi, Zi, $i, aj, bj, cj = U("whiteboard.logger");
window.onerror = function(a, b, c) {
  ne(cj, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function dj() {
}
dj.prototype.Sg = function(a, b) {
  cj.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  ej = k
};
dj.prototype.Tg = function(a) {
  var a = ya(a), b = a[0], c = a[1];
  "Point" == b ? Yi.xc(c.x, c.y, 5, 5, new xh, new wh(c.color), h) : "ClearBoard" == b ? (Yi.g(), fj()) : R(cj, "Strange message from server: " + G(a))
};
dj.prototype.reset = function(a) {
  cj.info("resetting with reason: " + a);
  this.F.reset(a)
};
var ej = k, gj = new Uc(t.window);
function hj() {
  ej && (ej.reset("idle timeout fired"), ej = k)
}
var ij = k;
function jj() {
  ij != k && gj.N.clearTimeout(ij);
  ej && (ij = gj.N.setTimeout(hj, 2592E5))
}
M(window, ["click", "focus", "keydown", "keypress"], jj, j);
function kj() {
  Yi.g();
  fj();
  var a = ej;
  cj.info("Telling server to clear the board.");
  jg(a.F, [za(["ClearBoard", k])])
}
function lj(a) {
  var b = new lc(a), a = b.offsetX, b = b.offsetY;
  Yi.xc(a, b, 5, 5, new xh, new wh(Zi), h);
  var c = ej, d = Zi;
  cj.info("Telling server about circle at: " + a + ", " + b + " with color " + d);
  jg(c.F, [za(["Point", {x:a, y:b, color:d}])])
}
function fj() {
  var a;
  a = H && !J("9") ? new Oh(800, 600, h, h, h) : I && (!J("420") || Pb) ? new $h(800, 600, h, h, h) : new Fh(800, 600, h, h, h);
  a.i();
  $i = O("drawArea");
  Rd(a, $i);
  Yi = a
}
var Xi = "#E06666";
function mj(a) {
  var b;
  (a = a.target.Gd()) ? (a = a.style[Ua("background-color")] || "", b = Wi(a)) : b = k;
  b || (b = Xi);
  Zi = b;
  dh.set("whiteboard_defaultColor", b);
  a = O("whiteboard-cp-value");
  v("background-color") ? Ad(a, b, "background-color") : ta("background-color", ra(Ad, a));
  a = O("whiteboard-cp-value");
  a.title = b;
  b = yg(b).Kc;
  rd(a, b);
  b = Eg(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = Cg(b[0], b[1], b[2]);
  v("color") ? Ad(a, b, "color") : ta("color", ra(Ad, a))
}
function nj() {
  aj = (new lf(document.location)).S;
  if(bj = Boolean(Number(aj.get("logging", "0")))) {
    re().ad(le);
    var a = new lh(document.getElementById("log"));
    if(j != a.df) {
      var b = re(), c = a.Hg;
      b.$b || (b.$b = []);
      b.$b.push(c);
      a.df = j
    }
  }else {
    re().ad(de)
  }
  cj.info("Logger works.");
  (a = dh.get("whiteboard_defaultColor")) && (Xi = a);
  Zi = Xi;
  b = O("whiteboard-controls-left");
  a = O("whiteboard-controls-right");
  c = jd("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  nd(b, c);
  c = jd("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  nd(b, c);
  b = new Si("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.Z(8);
  Rd(b, O("whiteboard-cp"));
  M(b, "action", mj);
  Vi(b);
  mj({target:b});
  b = new Ei("Clear board");
  ti(b, "clear-board-button");
  Rd(b, a);
  M(b, "action", kj);
  a = O("drawAreaOverlay");
  Id(a, j);
  M(a, "click", lj, m);
  fj();
  a = new ah;
  ej = new dj;
  jj();
  c = (new lf(document.location)).S;
  b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    R($g, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new lf(document.location);
  b ? b = new Xf("/_minerva/", c.la, t.__demo_mainSocketPort) : (d ? (b = t.__demo_shared_domain, v(b) || e(Error("domain was " + G(b) + "; expected a string.")), c = c.M(), of(c, "_____random_____." + b)) : c = c.M(), c.mb("/_minerva/"), qf(c, "", h), b = new Zf(c.toString().replace("_____random_____", "%random%")));
  a = new dg(b, a, gj);
  b = ej;
  a.ae = w(b.Tg, b);
  a.onreset = w(b.Sg, b);
  ej.F = a;
  jg(ej.F, ["subprotocol:whiteboard"]);
  a.start()
}
var oj = "__whiteboard_init".split("."), pj = t;
!(oj[0] in pj) && pj.execScript && pj.execScript("var " + oj[0]);
for(var qj;oj.length && (qj = oj.shift());) {
  !oj.length && ga(nj) ? pj[qj] = nj : pj = pj[qj] ? pj[qj] : pj[qj] = {}
}
;})();
