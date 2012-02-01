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
  this.key = ++bc;
  this.kb = m
};
q.handleEvent = function(a) {
  return this.ff ? this.Cb.call(this.Jc || this.src, a) : this.Cb.handleEvent.call(this.Cb, a)
};
var cc = !H || $b(), dc = !H || $b(), ec = H && !K("8");
!J || K("528");
I && K("1.9b") || H && K("8") || Nb && K("9.5") || J && K("528");
!I || K("8");
var fc = {lh:"click", qh:"dblclick", Lh:"mousedown", Ph:"mouseup", Oh:"mouseover", Nh:"mouseout", Mh:"mousemove", Zh:"selectstart", Fh:"keypress", Eh:"keydown", Gh:"keyup", jh:"blur", yh:"focus", rh:"deactivate", zh:H ? "focusin" : "DOMFocusIn", Ah:H ? "focusout" : "DOMFocusOut", kh:"change", Yh:"select", $h:"submit", Dh:"input", Uh:"propertychange", vh:"dragstart", sh:"dragenter", uh:"dragover", th:"dragleave", wh:"drop", di:"touchstart", ci:"touchmove", bi:"touchend", ai:"touchcancel", nh:"contextmenu", 
xh:"error", Ch:"help", Hh:"load", Ih:"losecapture", Vh:"readystatechange", Wh:"resize", Xh:"scroll", fi:"unload", Bh:"hashchange", Qh:"pagehide", Rh:"pageshow", Th:"popstate", oh:"copy", Sh:"paste", ph:"cut", gh:"beforecopy", hh:"beforecut", ih:"beforepaste", Kh:"message", mh:"connect", ei:J ? "webkitTransitionEnd" : Nb ? "oTransitionEnd" : "transitionend"};
function L() {
}
L.prototype.ta = m;
L.prototype.g = function() {
  this.ta || (this.ta = j, this.c())
};
L.prototype.c = function() {
  this.bg && gc.apply(k, this.bg)
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
A(hc, L);
q = hc.prototype;
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
function ic(a) {
  a.stopPropagation()
}
;function jc(a) {
  jc[" "](a);
  return a
}
jc[" "] = da;
function kc(a, b) {
  a && this.ac(a, b)
}
A(kc, hc);
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
q.be = m;
q.Da = k;
q.ac = function(a, b) {
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
  this.be = Qb ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Da = a;
  delete this.ic;
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
var nc = {}, M = {}, oc = {}, pc = {};
function N(a, b, c, d, f) {
  if(b) {
    if(u(b)) {
      for(var g = 0;g < b.length;g++) {
        N(a, b[g], c, d, f)
      }
      return k
    }
    var d = !!d, i = M;
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
    g = qc();
    g.src = a;
    i = new ac;
    i.ac(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    n.push(i);
    nc[c] = i;
    oc[l] || (oc[l] = []);
    oc[l].push(i);
    a.addEventListener ? (a == t || !a.xd) && a.addEventListener(b, g, d) : a.attachEvent(b in pc ? pc[b] : pc[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function qc() {
  var a = rc, b = dc ? function(c) {
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
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      sc(a, b[g], c, d, f)
    }
    return k
  }
  a = N(a, b, c, d, f);
  nc[a].rd = j;
  return a
}
function tc(a, b, c, d, f) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      tc(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = uc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Cb == c && a[g].capture == d && a[g].Jc == f) {
          vc(a[g].key);
          break
        }
      }
    }
  }
}
function vc(a) {
  if(!nc[a]) {
    return m
  }
  var b = nc[a];
  if(b.kb) {
    return m
  }
  var c = b.src, d = b.type, f = b.xf, g = b.capture;
  c.removeEventListener ? (c == t || !c.xd) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in pc ? pc[d] : pc[d] = "on" + d, f);
  c = ma(c);
  f = M[d][g][c];
  if(oc[c]) {
    var i = oc[c];
    cb(i, b);
    0 == i.length && delete oc[c]
  }
  b.kb = j;
  f.qf = j;
  wc(d, g, c, f);
  delete nc[a];
  return j
}
function wc(a, b, c, d) {
  if(!d.Qc && d.qf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].kb ? d[f].xf.src = k : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.qf = m;
    0 == g && (delete M[a][b][c], M[a][b].d--, 0 == M[a][b].d && (delete M[a][b], M[a].d--), 0 == M[a].d && delete M[a])
  }
}
function xc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    ta(oc, function(a) {
      for(var f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          vc(g.key), c++
        }
      }
    })
  }else {
    if(a = ma(a), oc[a]) {
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
  var d = M;
  return b in d && (d = d[b], c in d && (d = d[c], a = ma(a), d[a])) ? d[a] : k
}
function yc(a, b, c, d, f) {
  var g = 1, b = ma(b);
  if(a[b]) {
    a.ia--;
    a = a[b];
    a.Qc ? a.Qc++ : a.Qc = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var n = a[l];
        n && !n.kb && (g &= zc(n, f) !== m)
      }
    }finally {
      a.Qc--, wc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function zc(a, b) {
  var c = a.handleEvent(b);
  a.rd && vc(a.key);
  return c
}
function rc(a, b) {
  if(!nc[a]) {
    return j
  }
  var c = nc[a], d = c.type, f = M;
  if(!(d in f)) {
    return j
  }
  var f = f[d], g, i;
  if(!dc) {
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
    r = new kc;
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
          r.currentTarget = s[B], g &= yc(i, s[B], d, j, r)
        }
        if(n) {
          i = f[m];
          i.ia = i.d;
          for(B = 0;!r.jb && B < s.length && i.ia;B++) {
            r.currentTarget = s[B], g &= yc(i, s[B], d, m, r)
          }
        }
      }else {
        g = zc(c, r)
      }
    }finally {
      s && (s.length = 0), r.g()
    }
    return g
  }
  d = new kc(b, this);
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
A(Bc, L);
q = Bc.prototype;
q.xd = j;
q.Tc = k;
q.ie = aa("Tc");
q.addEventListener = function(a, b, c, d) {
  N(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  tc(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = M;
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
      for(g = this;g;g = g.Tc) {
        f.push(g)
      }
      g = c[j];
      g.ia = g.d;
      for(var i = f.length - 1;!a.jb && 0 <= i && g.ia;i--) {
        a.currentTarget = f[i], d &= yc(g, f[i], a.type, j, a) && a.ic != m
      }
    }
    if(m in c) {
      if(g = c[m], g.ia = g.d, b) {
        for(i = 0;!a.jb && i < f.length && g.ia;i++) {
          a.currentTarget = f[i], d &= yc(g, f[i], a.type, m, a) && a.ic != m
        }
      }else {
        for(f = this;!a.jb && f && g.ia;f = f.Tc) {
          a.currentTarget = f, d &= yc(g, f, a.type, m, a) && a.ic != m
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
  this.Tc = k
};
function Cc(a, b) {
  this.Mc = a || 1;
  this.oc = b || Dc;
  this.pd = w(this.Ug, this);
  this.Td = y()
}
A(Cc, Bc);
Cc.prototype.enabled = m;
var Dc = t.window;
q = Cc.prototype;
q.pa = k;
q.Ug = function() {
  if(this.enabled) {
    var a = y() - this.Td;
    0 < a && a < 0.8 * this.Mc ? this.pa = this.oc.setTimeout(this.pd, this.Mc - a) : (this.dispatchEvent(Ec), this.enabled && (this.pa = this.oc.setTimeout(this.pd, this.Mc), this.Td = y()))
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
  Cc.f.c.call(this);
  this.stop();
  delete this.oc
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
  this.tc = [];
  this.Ae = a;
  this.Ie = b || k
}
q = Fc.prototype;
q.Ka = m;
q.Yb = m;
q.ec = 0;
q.ne = m;
q.Yf = m;
q.qd = 0;
q.cancel = function(a) {
  if(this.Ka) {
    this.hc instanceof Fc && this.hc.cancel()
  }else {
    if(this.J) {
      var b = this.J;
      delete this.J;
      a ? b.cancel(a) : (b.qd--, 0 >= b.qd && b.cancel())
    }
    this.Ae ? this.Ae.call(this.Ie, this) : this.ne = j;
    this.Ka || this.Wb(new Gc)
  }
};
q.De = function(a, b) {
  Hc(this, a, b);
  this.ec--;
  0 == this.ec && this.Ka && Ic(this)
};
function Hc(a, b, c) {
  a.Ka = j;
  a.hc = c;
  a.Yb = !b;
  Ic(a)
}
function Jc(a) {
  a.Ka && (a.ne || e(new Kc), a.ne = m)
}
function Lc(a, b) {
  Jc(a);
  Hc(a, j, b)
}
q.Wb = function(a) {
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
  a.tc.push([b, c, d]);
  a.Ka && Ic(a)
}
function Pc(a, b) {
  Nc(a, b, b, h)
}
function Qc(a) {
  return Za(a.tc, function(a) {
    return la(a[1])
  })
}
function Ic(a) {
  a.ve && a.Ka && Qc(a) && (t.clearTimeout(a.ve), delete a.ve);
  a.J && (a.J.qd--, delete a.J);
  for(var b = a.hc, c = m, d = m;a.tc.length && 0 == a.ec;) {
    var f = a.tc.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.Yb ? i : g) {
      try {
        var l = g.call(f || a.Ie, b);
        ga(l) && (a.Yb = a.Yb && (l == b || l instanceof Error), a.hc = b = l);
        b instanceof Fc && (d = j, a.ec++)
      }catch(n) {
        b = n, a.Yb = j, Qc(a) || (c = j)
      }
    }
  }
  a.hc = b;
  d && a.ec && (Nc(b, w(a.De, a, j), w(a.De, a, m)), b.Yf = j);
  c && (a.ve = t.setTimeout(function() {
    ga(b.message) && b.stack && (b.message += "\n" + b.stack);
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
  b.Wb(a);
  return b
}
function Kc() {
  C.call(this)
}
A(Kc, C);
Kc.prototype.message = "Already called";
function Gc() {
  C.call(this)
}
A(Gc, C);
Gc.prototype.message = "Deferred was cancelled";
function Tc(a) {
  this.N = a;
  this.yc = [];
  this.Me = [];
  this.Xf = w(this.Yg, this)
}
Tc.prototype.pa = k;
function Uc(a, b, c, d) {
  a.yc.push([b, c, d]);
  a.pa == k && (a.pa = a.N.setTimeout(a.Xf, 0))
}
Tc.prototype.Yg = function() {
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
      Lc(a[b], k)
    }
  }
};
var Vc = new Tc(t.window);
var Wc;
function Xc(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function Yc(a, b) {
  var c = Xc(a), d = hb(arguments, 1), f;
  f = c;
  for(var g = 0, i = 0;i < d.length;i++) {
    ab(f, d[i]) || (f.push(d[i]), g++)
  }
  f = g == d.length;
  a.className = c.join(" ");
  return f
}
function Zc(a, b) {
  var c = Xc(a), d = hb(arguments, 1), f;
  f = c;
  for(var g = 0, i = 0;i < f.length;i++) {
    ab(d, f[i]) && (gb(f, i--, 1), g++)
  }
  f = g == d.length;
  a.className = c.join(" ");
  return f
}
;function O(a, b) {
  this.width = a;
  this.height = b
}
q = O.prototype;
q.M = function() {
  return new O(this.width, this.height)
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
var $c = !H || $b();
!I && !H || H && $b() || I && K("1.9.1");
var ad = H && !K("9");
function bd(a) {
  return a ? new cd(dd(a)) : Wc || (Wc = new cd)
}
function P(a) {
  return v(a) ? document.getElementById(a) : a
}
function ed(a, b, c, d) {
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
function fd(a, b) {
  ta(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in gd ? a.setAttribute(gd[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var gd = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function hd(a, b, c) {
  return jd(document, arguments)
}
function jd(a, b) {
  var c = b[0], d = b[1];
  if(!$c && d && (d.name || d.type)) {
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
  d && (v(d) ? c.className = d : u(d) ? Yc.apply(k, [c].concat(d)) : fd(c, d));
  2 < b.length && kd(a, c, b, 2);
  return c
}
function kd(a, b, c, d) {
  function f(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && 0 < g.nodeType) ? E(ld(g) ? eb(g) : g, f) : f(g)
  }
}
function md(a, b) {
  kd(dd(a), a, arguments, 1)
}
function nd(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function od(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function pd(a, b) {
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
function dd(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function qd(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      nd(a), a.appendChild(dd(a).createTextNode(b))
    }
  }
}
var rd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, sd = {IMG:" ", BR:"\n"};
function td(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ka(a) && 0 <= a && 32768 > a) : m
}
function ud(a) {
  var b = [];
  vd(a, b, m);
  return b.join("")
}
function vd(a, b, c) {
  if(!(a.nodeName in rd)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in sd) {
        b.push(sd[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          vd(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function ld(a) {
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
function cd(a) {
  this.p = a || t.document || document
}
q = cd.prototype;
q.Fa = bd;
q.b = function(a) {
  return v(a) ? this.p.getElementById(a) : a
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
q.append = md;
q.contains = pd;
function wd(a, b) {
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
        a.push('<property id="', d, '">'), wd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', Ka(c), '">'), wd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function xd(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, f = arguments;
  d.push("<arguments>");
  for(var g = f.length, i = 1;i < g;i++) {
    wd(d, f[i])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var yd = m, zd = "";
function Ad(a) {
  a = a.match(/[\d]+/g);
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var Bd = navigator.plugins["Shockwave Flash"];
  Bd && (yd = j, Bd.description && (zd = Ad(Bd.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (yd = j, zd = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var Cd = navigator.mimeTypes["application/x-shockwave-flash"];
    (yd = Cd && Cd.enabledPlugin) && (zd = Ad(Cd.enabledPlugin.description))
  }else {
    try {
      var Dd = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), yd = j, zd = Ad(Dd.GetVariable("$version"))
    }catch(Ed) {
      try {
        Dd = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), yd = j, zd = "6.0.21"
      }catch(Fd) {
        try {
          Dd = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), yd = j, zd = Ad(Dd.GetVariable("$version"))
        }catch(Gd) {
        }
      }
    }
  }
}
var Hd = zd;
function Id(a, b, c) {
  a.style[Ua(c)] = b
}
function Jd(a, b) {
  var c = dd(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function Kd(a, b, c) {
  b instanceof O ? (c = b.height, b = b.width) : c == h && e(Error("missing height argument"));
  a.style.width = Ld(b);
  a.style.height = Ld(c)
}
function Ld(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
function Md(a) {
  if("none" != (Jd(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style && a.style.display)) {
    return Nd(a)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = Nd(a);
  b.display = c;
  b.position = f;
  b.visibility = d;
  return a
}
function Nd(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = J && !b && !c;
  return(!ga(b) || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), H && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new O(b.right - b.left, b.bottom - b.top)) : new O(b, c)
}
function Od(a) {
  H ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[J ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var Pd = I ? "MozUserSelect" : J ? "WebkitUserSelect" : k;
function Qd(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Pd) {
    if(b = b ? "none" : "", a.style[Pd] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[Pd] = b
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
;function Rd(a) {
  this.eb = a;
  this.m = []
}
A(Rd, L);
var Sd = [];
function Q(a, b, c, d) {
  u(c) || (Sd[0] = c, c = Sd);
  for(var f = 0;f < c.length;f++) {
    a.m.push(N(b, c[f], d || a, m, a.eb || a))
  }
  return a
}
function Td(a, b, c, d, f, g) {
  if(u(c)) {
    for(var i = 0;i < c.length;i++) {
      Td(a, b, c[i], d, f, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.eb || a;
      f = !!f;
      if(b = uc(b, c, f)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].kb && b[c].Cb == d && b[c].capture == f && b[c].Jc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, vc(b), cb(a.m, b))
  }
  return a
}
Rd.prototype.ce = function() {
  E(this.m, vc);
  this.m.length = 0
};
Rd.prototype.c = function() {
  Rd.f.c.call(this);
  this.ce()
};
Rd.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Ud() {
}
ea(Ud);
Ud.prototype.Cg = 0;
Ud.La();
function Vd(a) {
  this.O = a || bd();
  this.jc = Wd
}
A(Vd, Bc);
Vd.prototype.tg = Ud.La();
var Wd = k;
function Xd(a, b) {
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
q = Vd.prototype;
q.R = k;
q.r = m;
q.e = k;
q.jc = k;
q.J = k;
q.P = k;
q.Sb = k;
q.Zg = m;
function Yd(a) {
  return a.R || (a.R = ":" + (a.tg.Cg++).toString(36))
}
q.b = o("e");
function Zd(a) {
  return a.wb || (a.wb = new Rd(a))
}
q.getParent = o("J");
q.ie = function(a) {
  this.J && this.J != a && e(Error("Method not supported"));
  Vd.f.ie.call(this, a)
};
q.Fa = o("O");
q.i = function() {
  this.e = this.O.createElement("div")
};
function $d(a, b) {
  a.r && e(Error("Component already rendered"));
  a.e || a.i();
  b ? b.insertBefore(a.e, k) : a.O.p.body.appendChild(a.e);
  (!a.J || a.J.r) && a.Q()
}
q.Q = function() {
  this.r = j;
  ae(this, function(a) {
    !a.r && a.b() && a.Q()
  })
};
q.ab = function() {
  ae(this, function(a) {
    a.r && a.ab()
  });
  this.wb && this.wb.ce();
  this.r = m
};
q.c = function() {
  Vd.f.c.call(this);
  this.r && this.ab();
  this.wb && (this.wb.g(), delete this.wb);
  ae(this, function(a) {
    a.g()
  });
  !this.Zg && this.e && od(this.e);
  this.J = this.e = this.Sb = this.P = k
};
q.Xb = o("e");
q.Hb = function(a) {
  this.r && e(Error("Component already rendered"));
  this.jc = a
};
function ae(a, b) {
  a.P && E(a.P, b, h)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : Yd(a), a = this.Sb && c ? (c in this.Sb ? this.Sb[c] : h) || k : k;
    if(c && a) {
      var d = this.Sb;
      c in d && delete d[c];
      cb(this.P, a);
      b && (a.ab(), a.e && od(a.e));
      c = a;
      c == k && e(Error("Unable to set parent component"));
      c.J = k;
      Vd.f.ie.call(c, k)
    }
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function be(a) {
  this.w = new qb;
  a && this.md(a)
}
function ce(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ma(a) : b.substr(0, 1) + a
}
q = be.prototype;
q.V = function() {
  return this.w.V()
};
q.add = function(a) {
  this.w.set(ce(a), a)
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
  return this.w.remove(ce(a))
};
q.clear = function() {
  this.w.clear()
};
q.Na = function() {
  return this.w.Na()
};
q.contains = function(a) {
  return this.w.aa(ce(a))
};
q.X = function() {
  return this.w.X()
};
q.M = function() {
  return new be(this)
};
q.q = function(a) {
  return this.V() == lb(a) && de(this, a)
};
function de(a, b) {
  var c = lb(b);
  if(a.V() > c) {
    return m
  }
  !(b instanceof be) && 5 < c && (b = new be(b));
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
;function ee(a) {
  return fe(a || arguments.callee.caller, [])
}
function fe(a, b) {
  var c = [];
  if(ab(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(ge(a) + "(");
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
            g = (g = ge(g)) ? g : "[fn]";
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
        c.push(fe(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function ge(a) {
  if(he[a]) {
    return he[a]
  }
  a = "" + a;
  if(!he[a]) {
    var b = /function ([^\(]+)/.exec(a);
    he[a] = b ? b[1] : "[Anonymous]"
  }
  return he[a]
}
var he = {};
function ie(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
ie.prototype.Dd = k;
ie.prototype.Cd = k;
var je = 0;
ie.prototype.reset = function(a, b, c, d, f) {
  "number" == typeof f || je++;
  this.Jf = d || y();
  this.Bb = a;
  this.of = b;
  this.xg = c;
  delete this.Dd;
  delete this.Cd
};
ie.prototype.ad = aa("Bb");
function ke(a) {
  this.Bg = a
}
ke.prototype.J = k;
ke.prototype.Bb = k;
ke.prototype.P = k;
ke.prototype.$b = k;
function le(a, b) {
  this.name = a;
  this.value = b
}
le.prototype.toString = o("name");
var me = new le("OFF", Infinity), ne = new le("SHOUT", 1200), oe = new le("SEVERE", 1E3), pe = new le("WARNING", 900), qe = new le("INFO", 800), re = new le("CONFIG", 700), se = new le("FINE", 500), te = new le("FINEST", 300), ue = new le("ALL", 0);
q = ke.prototype;
q.getParent = o("J");
q.ad = aa("Bb");
function ve(a) {
  if(a.Bb) {
    return a.Bb
  }
  if(a.J) {
    return ve(a.J)
  }
  Wa("Root logger has no level set.");
  return k
}
q.log = function(a, b, c) {
  if(a.value >= ve(this).value) {
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
  var d = new ie(a, "" + b, this.Bg);
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
      f = "Message: " + Ka(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + Ka(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ka(ee(g) + "-> ")
    }catch(B) {
      f = "Exception trying to expose exception! You win, we lose. " + B
    }
    d.Cd = f
  }
  return d
};
function we(a, b) {
  a.log(oe, b, h)
}
function R(a, b) {
  a.log(pe, b, h)
}
q.info = function(a, b) {
  this.log(qe, a, b)
};
function S(a, b) {
  a.log(se, b, h)
}
function T(a, b) {
  a.log(te, b, h)
}
var xe = {}, ye = k;
function ze() {
  ye || (ye = new ke(""), xe[""] = ye, ye.ad(re))
}
function Ae() {
  ze();
  return ye
}
function U(a) {
  ze();
  var b;
  if(!(b = xe[a])) {
    b = new ke(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = U(a.substr(0, c));
    c.P || (c.P = {});
    c.P[d] = b;
    b.J = c;
    xe[a] = b
  }
  return b
}
;function Be(a, b) {
  Vd.call(this, b);
  this.ig = a;
  this.Bd = new Rd(this);
  this.Ac = new qb
}
A(Be, Vd);
q = Be.prototype;
q.a = U("goog.ui.media.FlashObject");
q.ah = "window";
q.ze = "#000000";
q.Uf = "sameDomain";
q.Z = function(a, b) {
  this.pb = v(a) ? a : Math.round(a) + "px";
  this.Ld = v(b) ? b : Math.round(b) + "px";
  this.b() && Kd(this.b() ? this.b().firstChild : k, this.pb, this.Ld);
  return this
};
q.Q = function() {
  Be.f.Q.call(this);
  var a = this.b(), b;
  b = H ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = H ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = Ga(c, this.ah), d = this.Ac.va(), f = this.Ac.X(), g = [], i = 0;i < d.length;i++) {
    var l = Ia(d[i]), n = Ia(f[i]);
    g.push(l + "=" + n)
  }
  b = Ga(b, Yd(this), Yd(this), "goog-ui-media-flash-object", Ka(this.ig), Ka(g.join("&")), this.ze, this.Uf, c);
  a.innerHTML = b;
  this.pb && this.Ld && this.Z(this.pb, this.Ld);
  Q(this.Bd, this.b(), ua(fc), ic)
};
q.i = function() {
  this.Af != k && !(0 <= Ra(Hd, this.Af)) && (R(this.a, "Required flash version not found:" + this.Af), e(Error("Method not supported")));
  var a = this.Fa().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
q.c = function() {
  Be.f.c.call(this);
  this.Ac = k;
  this.Bd.g();
  this.Bd = k
};
function Ce() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ y()).toString(36)
}
function De(a) {
  return a.substr(0, a.length - 1)
}
var Ee = /^(0|[1-9]\d*)$/, Fe = /^(0|\-?[1-9]\d*)$/;
function Ge(a) {
  var b = He;
  return Ee.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function Ie(a) {
  C.call(this, a)
}
A(Ie, C);
Ie.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function Je(a, b, c) {
  function d() {
    f && delete t.__loadFlashObject_callbacks[f]
  }
  var f;
  if(I && !K("1.8.1.20")) {
    return Sc(new Ie("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Ra(Hd, "9"))) {
    return Sc(new Ie("Need Flash Player 9+; had " + (Hd ? Hd : "none")))
  }
  var g;
  f = "_" + Ce();
  var i = new Fc(d);
  t.__loadFlashObject_callbacks[f] = function() {
    a.setTimeout(function() {
      d();
      Lc(i, P(g))
    }, 0)
  };
  b.Ac.set("onloadcallback", '__loadFlashObject_callbacks["' + f + '"]()');
  g = Yd(b);
  $d(b, c);
  return i
}
function Ke(a, b, c) {
  var d = Je(a, b, c), f = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  Pc(d, function(b) {
    a.clearTimeout(f);
    return b
  });
  return d
}
;function Le(a, b) {
  this.R = "_" + Ce();
  this.gd = a;
  this.Sa = b;
  this.Xa = a.Xa
}
A(Le, L);
q = Le.prototype;
q.Db = j;
q.vd = m;
q.a = U("cw.net.FlashSocket");
q.t = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.R);
  a.push("'>")
};
function Me(a, b, c) {
  "frames" == b ? (a = a.Sa, Ne(a.L), Oe(a.L, c)) : "stillreceiving" == b ? (c = a.Sa, T(c.a, "onstillreceiving"), Ne(c.L)) : "connect" == b ? (c = a.Sa, c.a.info("onconnect"), Ne(c.L), a = c.Pb, c.Pb = k, a.length && (T(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.dd.rc(a))) : "close" == b ? (a.Db = m, a.g()) : "ioerror" == b ? (a.Db = m, b = a.Sa, R(b.a, "onioerror: " + G(c)), Pe(b.L, m), a.g()) : "securityerror" == b ? (a.Db = m, b = a.Sa, R(b.a, "onsecurityerror: " + G(c)), 
  Pe(b.L, m), a.g()) : e(Error("bad event: " + b))
}
function Qe(a) {
  a.vd = j;
  a.Db = m;
  a.g()
}
q.td = function(a, b) {
  try {
    var c = this.Xa.CallFunction(xd("__FC_connect", this.R, a, b, "<int32/>\n"))
  }catch(d) {
    return we(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), Qe(this)
  }
  '"OK"' != c && e(Error("__FC_connect failed? ret: " + c))
};
q.rc = function(a) {
  try {
    var b = this.Xa.CallFunction(xd("__FC_writeFrames", this.R, a))
  }catch(c) {
    return we(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), Qe(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (R(this.a, "Flash no longer knows of " + this.R + "; disposing."), this.g()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
q.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.Db);
  Le.f.c.call(this);
  var a = this.Xa;
  delete this.Xa;
  if(this.Db) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(xd("__FC_close", this.R)))
    }catch(b) {
      we(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.vd = j
    }
  }
  if(this.vd) {
    a = this.Sa, R(a.a, "oncrash"), Pe(a.L, j)
  }else {
    this.Sa.onclose()
  }
  delete this.Sa;
  delete this.gd.xb[this.R]
};
function Re(a, b) {
  this.H = a;
  this.Xa = b;
  this.xb = {};
  this.sd = "__FST_" + Ce();
  t[this.sd] = w(this.eg, this);
  var c = b.CallFunction(xd("__FC_setCallbackFunc", this.sd));
  '"OK"' != c && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
A(Re, L);
q = Re.prototype;
q.a = U("cw.net.FlashSocketTracker");
q.t = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  F(this.xb, a, b);
  a.push(">")
};
q.wd = function(a) {
  a = new Le(this, a);
  return this.xb[a.R] = a
};
q.cg = function(a, b, c, d) {
  var f = this.xb[a];
  f ? "frames" == b && d ? (Me(f, "ioerror", "FlashConnector hadError while handling data."), f.g()) : Me(f, b, c) : R(this.a, "Cannot dispatch because we have no instance: " + G([a, b, c, d]))
};
q.eg = function(a, b, c, d) {
  try {
    Uc(this.H, this.cg, this, [a, b, c, d])
  }catch(f) {
    t.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
q.c = function() {
  Re.f.c.call(this);
  for(var a = ua(this.xb);a.length;) {
    a.pop().g()
  }
  delete this.xb;
  delete this.Xa;
  t[this.sd] = h
};
function Se(a) {
  this.L = a;
  this.Pb = []
}
A(Se, L);
q = Se.prototype;
q.a = U("cw.net.FlashSocketConduit");
q.rc = function(a) {
  this.Pb ? (T(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Pb.push.apply(this.Pb, a)) : (T(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.dd.rc(a))
};
q.td = function(a, b) {
  this.dd.td(a, b)
};
q.onclose = function() {
  this.a.info("onclose");
  Pe(this.L, m)
};
q.c = function() {
  this.a.info("in disposeInternal.");
  Se.f.c.call(this);
  this.dd.g();
  delete this.L
};
var Te = [];
function Ue() {
  var a = new Fc;
  Te.push(a);
  return a
}
function Ve(a) {
  var b = Te;
  Te = [];
  E(b, function(b) {
    Lc(b, a)
  })
}
function We(a, b) {
  if(Te.length) {
    return Ue()
  }
  var c = new Be(b + "FlashConnector.swf?cb=" + Xe);
  c.ze = "#777777";
  c.Z(300, 30);
  var d = P("minerva-elements");
  d || e(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
  var f = P("minerva-elements-FlashConnectorSwf");
  f || (f = hd("div", {id:"minerva-elements-FlashConnectorSwf"}), d.appendChild(f));
  wb = Ke(a.N, c, f);
  Mc(wb, Ve);
  return Ue()
}
;function Ye() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function Ze(a) {
  return a * Math.PI / 180
}
;var He = Math.pow(2, 53);
var $e = {Sf:p("<cw.eq.Wildcard>")};
function af(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function bf(a, b, c) {
  var d = fa(a), f = fa(b);
  if(a == $e || b == $e) {
    return j
  }
  if(a != k && "function" == typeof a.q) {
    return c && c.push("running custom equals function on left object"), a.q(b, c)
  }
  if(b != k && "function" == typeof b.q) {
    return c && c.push("running custom equals function on right object"), b.q(a, c)
  }
  if(af(d) || af(f)) {
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
                if(!bf(a[d], b[d], c)) {
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
                if(!bf(a[g], b[g], c)) {
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
function cf() {
  var a = [];
  this.ma(a);
  return a.join("")
}
function df() {
}
df.prototype.q = function(a, b) {
  return!(a instanceof df) ? m : bf(ef(this), ef(a), b)
};
df.prototype.t = function(a, b) {
  a.push("<HelloFrame properties=");
  F(ef(this), a, b);
  a.push(">")
};
function ef(a) {
  return[a.Kb, a.wf, a.af, a.zf, a.nc, a.qe, a.pf, a.nf, a.Wd, a.lf, a.Nf, a.If, a.oa, a.Pc]
}
df.prototype.ca = cf;
df.prototype.ma = function(a) {
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
  b.sack = this.oa instanceof yb ? De((new ff(this.oa)).ca()) : this.oa;
  b.seenack = this.Pc instanceof yb ? De((new ff(this.Pc)).ca()) : this.Pc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(za(b), "H")
};
function gf(a) {
  this.Jb = a
}
gf.prototype.q = function(a) {
  return a instanceof gf && this.Jb == a.Jb
};
gf.prototype.t = function(a, b) {
  a.push("new StringFrame(");
  F(this.Jb, a, b);
  a.push(")")
};
gf.prototype.ca = cf;
gf.prototype.ma = function(a) {
  a.push(this.Jb, " ")
};
function hf(a) {
  this.vc = a
}
hf.prototype.q = function(a) {
  return a instanceof hf && this.vc == a.vc
};
hf.prototype.t = function(a, b) {
  a.push("new CommentFrame(");
  F(this.vc, a, b);
  a.push(")")
};
hf.prototype.ca = cf;
hf.prototype.ma = function(a) {
  a.push(this.vc, "^")
};
function jf(a) {
  this.lc = a
}
jf.prototype.q = function(a) {
  return a instanceof jf && this.lc == a.lc
};
jf.prototype.t = function(a) {
  a.push("new SeqNumFrame(", "" + this.lc, ")")
};
jf.prototype.ca = cf;
jf.prototype.ma = function(a) {
  a.push("" + this.lc, "N")
};
function kf(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = He;
    if(Fe.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var g = Ge(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new yb(a, c)
}
function ff(a) {
  this.oa = a
}
ff.prototype.q = function(a, b) {
  return a instanceof ff && this.oa.q(a.oa, b)
};
ff.prototype.t = function(a, b) {
  a.push("new SackFrame(");
  F(this.oa, a, b);
  a.push(")")
};
ff.prototype.ca = cf;
ff.prototype.ma = function(a) {
  var b = this.oa;
  a.push(b.lb.join(","), "|", "" + b.qb);
  a.push("A")
};
function lf(a) {
  this.cc = a
}
lf.prototype.q = function(a, b) {
  return a instanceof lf && this.cc.q(a.cc, b)
};
lf.prototype.t = function(a, b) {
  a.push("new StreamStatusFrame(");
  F(this.cc, a, b);
  a.push(")")
};
lf.prototype.ca = cf;
lf.prototype.ma = function(a) {
  var b = this.cc;
  a.push(b.lb.join(","), "|", "" + b.qb);
  a.push("T")
};
function mf() {
}
mf.prototype.t = function(a) {
  a.push("new StreamCreatedFrame()")
};
mf.prototype.q = function(a) {
  return a instanceof mf
};
mf.prototype.ca = cf;
mf.prototype.ma = function(a) {
  a.push("C")
};
function nf() {
}
nf.prototype.t = function(a) {
  a.push("new YouCloseItFrame()")
};
nf.prototype.q = function(a) {
  return a instanceof nf
};
nf.prototype.ca = cf;
nf.prototype.ma = function(a) {
  a.push("Y")
};
function of(a, b) {
  this.fc = a;
  this.Ob = b
}
of.prototype.q = function(a) {
  return a instanceof of && this.fc == a.fc && this.Ob == a.Ob
};
of.prototype.t = function(a, b) {
  a.push("new ResetFrame(");
  F(this.fc, a, b);
  a.push(", ", "" + this.Ob, ")")
};
of.prototype.ca = cf;
of.prototype.ma = function(a) {
  a.push(this.fc, "|", "" + Number(this.Ob), "!")
};
var pf = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function qf(a) {
  this.reason = a
}
qf.prototype.q = function(a) {
  return a instanceof qf && this.reason == a.reason
};
qf.prototype.t = function(a, b) {
  a.push("new TransportKillFrame(");
  F(this.reason, a, b);
  a.push(")")
};
qf.prototype.ca = cf;
qf.prototype.ma = function(a) {
  a.push(this.reason, "K")
};
function rf(a) {
  a || e(new V("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new gf(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = kf(De(a)), a == k && e(new V("bad sack")), new ff(a)
  }
  if("N" == b) {
    return a = Ge(De(a)), a == k && e(new V("bad seqNum")), new jf(a)
  }
  if("T" == b) {
    return a = kf(De(a)), a == k && e(new V("bad lastSackSeen")), new lf(a)
  }
  if("Y" == b) {
    return 1 != a.length && e(new V("leading garbage")), new nf
  }
  if("^" == b) {
    return new hf(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && e(new V("leading garbage")), new mf
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && e(new V("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && e(new V("bad applicationLevel")), new of(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = pf[a], a == k && e(new V("unknown kill reason: " + a)), new qf(a)
  }
  e(new V("Invalid frame type " + b))
}
;var sf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function tf(a, b) {
  var c = a.match(sf), d = b.match(sf);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function uf(a, b) {
  var c;
  a instanceof uf ? (this.Gb(b == k ? a.xa : b), vf(this, a.za), wf(this, a.ob), xf(this, a.la), yf(this, a.Ra), this.mb(a.z), zf(this, a.S.M()), Af(this, a.bb)) : a && (c = ("" + a).match(sf)) ? (this.Gb(!!b), vf(this, c[1] || "", j), wf(this, c[2] || "", j), xf(this, c[3] || "", j), yf(this, c[4]), this.mb(c[5] || "", j), zf(this, c[6] || "", j), Af(this, c[7] || "", j)) : (this.Gb(!!b), this.S = new Bf(k, this, this.xa))
}
q = uf.prototype;
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
  this.za && a.push(Cf(this.za, Df), ":");
  this.la && (a.push("//"), this.ob && a.push(Cf(this.ob, Df), "@"), a.push(v(this.la) ? encodeURIComponent(this.la) : k), this.Ra != k && a.push(":", "" + this.Ra));
  this.z && (this.la && "/" != this.z.charAt(0) && a.push("/"), a.push(Cf(this.z, "/" == this.z.charAt(0) ? Ef : Ff)));
  var b = "" + this.S;
  b && a.push("?", b);
  this.bb && a.push("#", Cf(this.bb, Gf));
  return this.ra = a.join("")
};
q.M = function() {
  var a = this.za, b = this.ob, c = this.la, d = this.Ra, f = this.z, g = this.S.M(), i = this.bb, l = new uf(k, this.xa);
  a && vf(l, a);
  b && wf(l, b);
  c && xf(l, c);
  d && yf(l, d);
  f && l.mb(f);
  g && zf(l, g);
  i && Af(l, i);
  return l
};
function vf(a, b, c) {
  Hf(a);
  delete a.ra;
  a.za = c ? b ? decodeURIComponent(b) : "" : b;
  a.za && (a.za = a.za.replace(/:$/, ""))
}
function wf(a, b, c) {
  Hf(a);
  delete a.ra;
  a.ob = c ? b ? decodeURIComponent(b) : "" : b
}
function xf(a, b, c) {
  Hf(a);
  delete a.ra;
  a.la = c ? b ? decodeURIComponent(b) : "" : b
}
function yf(a, b) {
  Hf(a);
  delete a.ra;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.Ra = b) : a.Ra = k
}
q.mb = function(a, b) {
  Hf(this);
  delete this.ra;
  this.z = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function zf(a, b, c) {
  Hf(a);
  delete a.ra;
  b instanceof Bf ? (a.S = b, a.S.we = a, a.S.Gb(a.xa)) : (c || (b = Cf(b, If)), a.S = new Bf(b, a, a.xa))
}
function Af(a, b, c) {
  Hf(a);
  delete a.ra;
  a.bb = c ? b ? decodeURIComponent(b) : "" : b
}
function Hf(a) {
  a.vg && e(Error("Tried to modify a read-only Uri"))
}
q.Gb = function(a) {
  this.xa = a;
  this.S && this.S.Gb(a);
  return this
};
function Jf(a) {
  return a instanceof uf ? a.M() : new uf(a, h)
}
var Kf = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Cf(a, b) {
  var c = k;
  v(a) && (c = a, Kf.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, Lf)));
  return c
}
function Lf(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Df = /[#\/\?@]/g, Ff = /[\#\?:]/g, Ef = /[\#\?]/g, If = /[\#\?@]/g, Gf = /#/g;
function Bf(a, b, c) {
  this.Ca = a || k;
  this.we = b || k;
  this.xa = !!c
}
function Mf(a) {
  if(!a.o && (a.o = new qb, a.d = 0, a.Ca)) {
    for(var b = a.Ca.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = Nf(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
q = Bf.prototype;
q.o = k;
q.d = k;
q.V = function() {
  Mf(this);
  return this.d
};
q.add = function(a, b) {
  Mf(this);
  Of(this);
  a = Nf(this, a);
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
  Mf(this);
  a = Nf(this, a);
  if(this.o.aa(a)) {
    Of(this);
    var b = this.o.get(a);
    u(b) ? this.d -= b.length : this.d--;
    return this.o.remove(a)
  }
  return m
};
q.clear = function() {
  Of(this);
  this.o && this.o.clear();
  this.d = 0
};
q.Na = function() {
  Mf(this);
  return 0 == this.d
};
q.aa = function(a) {
  Mf(this);
  a = Nf(this, a);
  return this.o.aa(a)
};
q.wc = function(a) {
  var b = this.X();
  return ab(b, a)
};
q.va = function() {
  Mf(this);
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
  Mf(this);
  if(a) {
    if(a = Nf(this, a), this.aa(a)) {
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
  Mf(this);
  Of(this);
  a = Nf(this, a);
  if(this.aa(a)) {
    var c = this.o.get(a);
    u(c) ? this.d -= c.length : this.d--
  }
  this.o.set(a, b);
  this.d++;
  return this
};
q.get = function(a, b) {
  Mf(this);
  a = Nf(this, a);
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
function Of(a) {
  delete a.vb;
  delete a.Ca;
  a.we && delete a.we.ra
}
q.M = function() {
  var a = new Bf;
  this.vb && (a.vb = this.vb);
  this.Ca && (a.Ca = this.Ca);
  this.o && (a.o = this.o.M());
  return a
};
function Nf(a, b) {
  var c = "" + b;
  a.xa && (c = c.toLowerCase());
  return c
}
q.Gb = function(a) {
  a && !this.xa && (Mf(this), Of(this), ob(this.o, function(a, c) {
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
function Pf(a, b, c, d) {
  this.contentWindow = a;
  this.zc = b;
  this.re = c;
  this.jg = d
}
Pf.prototype.t = function(a, b) {
  a.push("<XDRFrame frameId=");
  F(this.jg, a, b);
  a.push(", expandedUrl=");
  F(this.zc, a, b);
  a.push(", streams=");
  F(this.re, a, b);
  a.push(">")
};
function Qf() {
  this.frames = [];
  this.Ud = new qb
}
Qf.prototype.a = U("cw.net.XDRTracker");
function Rf(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor(Ye()) + ("" + Math.floor(Ye()))
  })
}
function Sf(a, b) {
  for(var c = Tf, d = 0;d < c.frames.length;d++) {
    var f = c.frames[d], g;
    if(g = 0 == f.re.length) {
      g = f.zc;
      var i = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + i + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + G(b) + " existing frame " + G(f)), Rc(f)
    }
  }
  d = Ce() + Ce();
  f = Rf(a);
  g = t.location;
  g instanceof uf || (g = Jf(g));
  f instanceof uf || (f = Jf(f));
  var l = g;
  g = l.M();
  (i = !!f.za) ? vf(g, f.za) : i = !!f.ob;
  i ? wf(g, f.ob) : i = !!f.la;
  i ? xf(g, f.la) : i = f.Ra != k;
  var n = f.z;
  if(i) {
    yf(g, f.Ra)
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
  i ? (l = f.S, l.vb || (l.vb = l.toString() ? decodeURIComponent(l.toString()) : ""), zf(g, l.vb, h)) : i = !!f.bb;
  i && Af(g, f.bb);
  f = g.toString();
  g = ("" + t.location).match(sf)[3] || k;
  i = f.match(sf)[3] || k;
  g == i ? (c.a.info("No need to make a real XDRFrame for " + G(b)), c = Rc(new Pf(t, f, [b], k))) : ((g = P("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new Fc, c.Ud.set(d, [i, f, b]), c.a.info("Creating new XDRFrame " + G(d) + "for " + G(b)), c = hd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:f + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = i);
  return c
}
Qf.prototype.eh = function(a) {
  var b = this.Ud.get(a);
  b || e(Error("Unknown frameId " + G(a)));
  this.Ud.remove(b);
  var c = b[0], a = new Pf(P("minerva-xdrframe-" + a).contentWindow || (P("minerva-xdrframe-" + a).contentDocument || P("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (P("minerva-xdrframe-" + a).contentDocument || P("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  Lc(c, a)
};
var Tf = new Qf;
t.__XHRTracker_xdrFrameLoaded = w(Tf.eh, Tf);
var Uf;
Uf = m;
var Vf = Kb();
Vf && (-1 != Vf.indexOf("Firefox") || -1 != Vf.indexOf("Camino") || -1 != Vf.indexOf("iPhone") || -1 != Vf.indexOf("iPod") || -1 != Vf.indexOf("iPad") || -1 != Vf.indexOf("Android") || -1 != Vf.indexOf("Chrome") && (Uf = j));
var Wf = Uf;
var Xe = "4bdfc178fc0e508c0cd5efc3fdb09920";
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function Xf(a, b, c, d, f, g) {
  Fc.call(this, f, g);
  this.kf = a;
  this.yd = [];
  this.Oe = !!b;
  this.hg = !!c;
  this.Zf = !!d;
  for(b = 0;b < a.length;b++) {
    Nc(a[b], w(this.We, this, b, j), w(this.We, this, b, m))
  }
  0 == a.length && !this.Oe && Lc(this, this.yd)
}
A(Xf, Fc);
Xf.prototype.rf = 0;
Xf.prototype.We = function(a, b, c) {
  this.rf++;
  this.yd[a] = [b, c];
  this.Ka || (this.Oe && b ? Lc(this, [a, c]) : this.hg && !b ? this.Wb(c) : this.rf == this.kf.length && Lc(this, this.yd));
  this.Zf && !b && (c = k);
  return c
};
Xf.prototype.Wb = function(a) {
  Xf.f.Wb.call(this, a);
  E(this.kf, function(a) {
    a.cancel()
  })
};
function Yf(a) {
  a = new Xf(a, m, j);
  Mc(a, function(a) {
    return Ya(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function Zf(a, b) {
  this.bh = a;
  this.mf = b
}
Zf.prototype.Rd = 0;
Zf.prototype.Sc = 0;
Zf.prototype.Ed = m;
function $f(a) {
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
;function ag(a, b, c) {
  this.L = b;
  this.na = a;
  this.ud = c
}
A(ag, L);
q = ag.prototype;
q.a = U("cw.net.XHRMaster");
q.Ua = -1;
q.Vd = function(a, b, c) {
  this.ud.__XHRSlave_makeRequest(this.na, a, b, c)
};
q.Ma = o("Ua");
q.Yd = function(a, b) {
  1 != b && we(this.a, G(this.na) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Ne(this.L);
  Oe(this.L, a)
};
q.Zd = function(a) {
  S(this.a, "ongotheaders_: " + G(a));
  var b = k;
  "Content-Length" in a && (b = Ge(a["Content-Length"]));
  a = this.L;
  S(a.a, a.u() + " got Content-Length: " + b);
  a.Aa == bg && (b == k && (R(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), cg(a, 2E3 + 1E3 * (b / 3072)))
};
q.$d = function(a) {
  1 != a && S(this.a, this.L.u() + "'s XHR's readyState is " + a);
  this.Ua = a;
  2 <= this.Ua && Ne(this.L)
};
q.Xd = function() {
  this.L.g()
};
q.c = function() {
  ag.f.c.call(this);
  delete dg.Ga[this.na];
  this.ud.__XHRSlave_dispose(this.na);
  delete this.ud
};
function eg() {
  this.Ga = {}
}
A(eg, L);
q = eg.prototype;
q.a = U("cw.net.XHRMasterTracker");
q.wd = function(a, b) {
  var c = "_" + Ce(), d = new ag(c, a, b);
  return this.Ga[c] = d
};
q.Yd = function(a, b, c) {
  if(I) {
    for(var d = [], f = 0, g = b.length;f < g;f++) {
      d[f] = b[f]
    }
    b = d
  }else {
    b = db(b)
  }
  (d = this.Ga[a]) ? d.Yd(b, c) : we(this.a, "onframes_: no master for " + G(a))
};
q.Zd = function(a, b) {
  var c = this.Ga[a];
  c ? c.Zd(b) : we(this.a, "ongotheaders_: no master for " + G(a))
};
q.$d = function(a, b) {
  var c = this.Ga[a];
  c ? c.$d(b) : we(this.a, "onreadystatechange_: no master for " + G(a))
};
q.Xd = function(a) {
  var b = this.Ga[a];
  b ? (delete this.Ga[b.na], b.Xd()) : we(this.a, "oncomplete_: no master for " + G(a))
};
q.c = function() {
  eg.f.c.call(this);
  for(var a = ua(this.Ga);a.length;) {
    a.pop().g()
  }
  delete this.Ga
};
var dg = new eg;
t.__XHRMaster_onframes = w(dg.Yd, dg);
t.__XHRMaster_oncomplete = w(dg.Xd, dg);
t.__XHRMaster_ongotheaders = w(dg.Zd, dg);
t.__XHRMaster_onreadystatechange = w(dg.$d, dg);
function fg(a, b, c) {
  this.ya = a;
  this.host = b;
  this.port = c
}
function gg(a, b, c) {
  this.host = a;
  this.port = b;
  this.Xg = c
}
function hg(a, b) {
  b || (b = a);
  this.ya = a;
  this.Va = b
}
hg.prototype.t = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  F(this.ya, a, b);
  a.push(", secondaryUrl=");
  F(this.Va, a, b);
  a.push(">")
};
function ig(a, b, c, d) {
  this.ya = a;
  this.vf = b;
  this.Va = c;
  this.Ff = d;
  (!(0 == this.ya.indexOf("http://") || 0 == this.ya.indexOf("https://")) || !(0 == this.Va.indexOf("http://") || 0 == this.Va.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.vf.location.href;
  tf(this.ya, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Ff.location.href;
  tf(this.Va, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
ig.prototype.t = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  F(this.ya, a, b);
  a.push(", secondaryUrl=");
  F(this.Va, a, b);
  a.push(">")
};
var jg = new hf(";)]}");
function kg() {
}
kg.prototype.Re = p(1);
function lg(a) {
  this.Qg = a
}
lg.prototype.t = function(a, b) {
  a.push("<UserContext for ");
  F(this.Qg, a, b);
  a.push(">")
};
function mg(a, b, c) {
  this.A = a;
  this.Rg = b ? b : new kg;
  this.H = c ? c : Vc;
  this.pc = new be;
  this.nc = Ce() + Ce();
  this.Ta = new zb;
  this.Od = new Bb;
  this.qc = k;
  this.jd = [];
  this.Lb = new lg(this);
  J && (this.qc = sc(t, "load", this.Kg, m, this))
}
A(mg, L);
q = mg.prototype;
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
function ng(a) {
  var b = [-1];
  a.j && b.push(a.j.Eb);
  a.C && b.push(a.C.Eb);
  return Math.max.apply(Math.max, b)
}
function og(a) {
  if(!(3 > a.h)) {
    var b = 0 != a.Ta.B.V(), c = Cb(a.Od), d = !c.q(a.jf) && !(a.j && c.q(a.j.Ab) || a.C && c.q(a.C.Ab)), f = ng(a);
    if((b = b && f < a.Ta.$a) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.j.Qb ? (T(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.j, c != d.Ab && (!d.Ha && !d.G.length && pg(d), d.G.push(new ff(c)), d.Ab = c)), b && qg(a.j, a.Ta, f + 1), a.j.Ea()) : a.C == k ? a.oe ? (T(a.a, "tryToSend_: creating secondary to send " + g), a.C = rg(a, m), b && qg(a.C, a.Ta, f + 1), a.C.Ea()) : (T(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.de = j) : T(a.a, "tryToSend_: need to send " + g + ", but can't right now")
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
function sg(a, b) {
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
    og(a)
  }
}
function rg(a, b) {
  var c;
  a.A instanceof ig ? c = 1 == a.Rg.Re() ? bg : tg : a.A instanceof gg ? c = ug : e(Error("Don't support endpoint " + G(a.A)));
  a.te += 1;
  c = new vg(a.H, a, a.te, c, a.A, b);
  T(a.a, "Created: " + c.u());
  a.pc.add(c);
  return c
}
function wg(a, b, c) {
  var d = new xg(a.H, a, b, c);
  T(a.a, "Created: " + d.u() + ", delay=" + b + ", times=" + c);
  a.pc.add(d);
  return d
}
function yg(a, b) {
  a.pc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  S(a.a, "Offline: " + b.u());
  a.pe = b.Qa ? a.pe + b.Qa : 0;
  1 <= a.pe && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.Lb, "stream penalty reached limit", m), a.g());
  if(3 < a.h) {
    4 == a.h && b.Qf ? (S(a.a, "Disposing because resettingTransport_ is done."), a.g()) : S(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    var c;
    var d;
    c = b instanceof xg;
    if(!c && b.ld) {
      var f = J ? Wf ? [0, 1] : [9, 20] : [0, 0];
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
    b == a.j ? (a.j = k, c ? a.j = wg(a, f, c) : (f = ng(a), a.j = rg(a, j), qg(a.j, a.Ta, f + 1)), a.j.Ea()) : b == a.C && (a.C = k, c ? (a.C = wg(a, f, c), a.C.Ea()) : og(a))
  }
}
q.reset = function(a) {
  3 < this.h && e(Error("reset: Can't send reset in state " + this.h));
  this.h = 4;
  this.j && this.j.Qb ? (this.a.info("reset: Sending ResetFrame over existing primary."), zg(this.j, a), this.j.Ea()) : (this.j && (S(this.a, "reset: Disposing primary before sending ResetFrame."), this.j.g()), this.C && (S(this.a, "reset: Disposing secondary before sending ResetFrame."), this.C.g()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.gc = rg(this, m), zg(this.gc, a), this.gc.Ea());
  this.onreset && this.onreset.call(this.Lb, a, j)
};
function Ag(a, b, c, d) {
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
  d || og(a);
  if(!(4 == a.h || a.ta) && f) {
    we(b.a, b.u() + "'s peer caused rwin overflow."), b.g()
  }
}
q.Le = function(a) {
  we(this.a, "Failed to start " + G(this) + "; error was " + G(a.message));
  this.g()
};
q.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.h && e(Error("ClientStream.start: " + G(this) + " already started"));
  this.h = 2;
  if(this.A instanceof hg) {
    var a = Sf(this.A.ya, this), b = Sf(this.A.Va, this), a = Yf([a, b]);
    Mc(a, w(this.gg, this));
    Oc(a, w(this.Le, this))
  }else {
    if(this.A instanceof fg) {
      if(xb) {
        this.Ne()
      }else {
        var a = We(this.H, this.A.ya), c = this;
        Mc(a, function(a) {
          xb || (xb = new Re(c.H, a));
          return k
        });
        Mc(a, w(this.Ne, this));
        Oc(a, w(this.Le, this))
      }
    }else {
      Bg(this)
    }
  }
};
q.gg = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].zc, f = a[1].zc;
  this.jd.push(a[0]);
  this.jd.push(a[1]);
  this.A = new ig(d, b, f, c);
  Bg(this)
};
q.Ne = function() {
  this.A = new gg(this.A.host, this.A.port, xb);
  Bg(this)
};
function Bg(a) {
  a.h = 3;
  a.j = rg(a, j);
  qg(a.j, a.Ta, k);
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
  J && this.qc && (vc(this.qc), this.qc = k);
  this.tf && this.tf.call(this.Lb);
  delete this.pc;
  delete this.j;
  delete this.C;
  delete this.gc;
  delete this.Lb;
  mg.f.c.call(this)
};
var bg = 1, tg = 2, ug = 3;
function vg(a, b, c, d, f, g) {
  this.H = a;
  this.F = b;
  this.Kb = c;
  this.Aa = d;
  this.A = f;
  this.G = [];
  this.sb = g;
  this.Qb = !this.yb();
  this.Fb = this.Aa != bg;
  this.Wf = w(this.Vg, this)
}
A(vg, L);
q = vg.prototype;
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
  return this.Aa == bg || this.Aa == tg
};
function Cg(a, b) {
  ib(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Ag(a.F, a, b, !a.Fb)
}
function Dg(a, b, c) {
  try {
    var d = rf(b);
    a.Bc += 1;
    S(a.a, a.u() + " RECV " + G(d));
    var f;
    1 == a.Bc && !d.q(jg) && a.yb() ? (R(a.a, a.u() + " is closing soon because got bad preamble: " + G(d)), f = j) : f = m;
    if(f) {
      return j
    }
    if(d instanceof gf) {
      if(!/^([ -~]*)$/.test(d.Jb)) {
        return a.Zb = j
      }
      a.Uc += 1;
      c.push([a.Uc, d.Jb])
    }else {
      if(d instanceof ff) {
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
        if(d instanceof jf) {
          a.Uc = d.lc - 1
        }else {
          if(d instanceof lf) {
            a.F.jf = d.cc
          }else {
            if(d instanceof nf) {
              return T(a.a, a.u() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof qf) {
              return a.Zb = j, "stream_attach_failure" == d.reason ? a.Qa += 1 : "acked_unsent_strings" == d.reason && (a.Qa += 0.5), T(a.a, a.u() + " is closing soon because got " + G(d)), j
            }
            if(!(d instanceof hf)) {
              if(d instanceof mf) {
                var B = a.F, $i = !a.Fb;
                T(B.a, "Stream is now confirmed to exist at server.");
                B.oe = j;
                B.de && !$i && (B.de = m, og(B))
              }else {
                c.length && (Cg(a, c), bb(c));
                if(d instanceof of) {
                  var id = a.F;
                  id.onreset && id.onreset.call(id.Lb, d.fc, d.Ob);
                  id.g();
                  return j
                }
                e(Error(a.u() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(Og) {
    return Og instanceof V || e(Og), R(a.a, a.u() + " is closing soon because got InvalidFrame: " + G(b)), a.Zb = j
  }
  return m
}
function Oe(a, b) {
  a.ed = j;
  try {
    for(var c = m, d = [], f = 0, g = b.length;f < g;f++) {
      if(a.ta) {
        a.a.info(a.u() + " returning from loop because we're disposed.");
        return
      }
      if(c = Dg(a, b[f], d)) {
        break
      }
    }
    d.length && Cg(a, d);
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
function Eg(a) {
  a.Vc != k && (a.H.N.clearTimeout(a.Vc), a.Vc = k)
}
function cg(a, b) {
  Eg(a);
  b = Math.round(b);
  a.Vc = a.H.N.setTimeout(a.Wf, b);
  S(a.a, a.u() + "'s receive timeout set to " + b + " ms.")
}
function Ne(a) {
  a.Aa != bg && (a.Aa == ug || a.Aa == tg ? cg(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.Aa)))
}
function pg(a) {
  var b = new df;
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
function Pe(a, b) {
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
    !a && !this.G.length && pg(this);
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
      this.s = dg.wd(this, this.sb ? this.A.vf : this.A.Ff);
      this.ue = this.H.N === Dc ? y() : this.H.N.getTime();
      this.s.Vd(b, "POST", a);
      cg(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Fb ? 0 : this.sb ? 25E3 : 0))
    }else {
      if(this.Aa == ug) {
        a = [];
        b = 0;
        for(c = this.G.length;b < c;b++) {
          a.push(this.G[b].ca())
        }
        this.G = [];
        this.s ? this.s.rc(a) : (b = this.A, this.s = new Se(this), this.s.dd = b.Xg.wd(this.s), this.ue = this.H.N === Dc ? y() : this.H.N.getTime(), this.s.td(b.host, b.port), this.s.ta || (this.s.rc(a), this.s.ta || cg(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.Aa))
      }
    }
  }
};
function qg(a, b, c) {
  !a.Ha && !a.G.length && pg(a);
  for(var c = Math.max(c, a.Eb + 1), b = b.Se(c), c = 0, d = b.length;c < d;c++) {
    var f = b[c], g = f[0], f = f[1];
    (-1 == a.Eb || a.Eb + 1 != g) && a.G.push(new jf(g));
    a.G.push(new gf(f));
    a.Eb = g
  }
}
q.c = function() {
  this.a.info(this.u() + " in disposeInternal.");
  vg.f.c.call(this);
  this.Mf = this.H.N === Dc ? y() : this.H.N.getTime();
  this.G = [];
  Eg(this);
  this.s && this.s.g();
  var a = this.F;
  this.F = k;
  yg(a, this)
};
function zg(a, b) {
  !a.Ha && !a.G.length && pg(a);
  a.G.push(new of(b, j));
  a.Qf = j
}
function xg(a, b, c, d) {
  this.H = a;
  this.F = b;
  this.Ke = c;
  this.Ee = d
}
A(xg, L);
q = xg.prototype;
q.Ha = m;
q.Qb = m;
q.Fc = k;
q.Ab = k;
q.a = U("cw.net.DoNothingTransport");
function Fg(a) {
  a.Fc = a.H.N.setTimeout(function() {
    a.Fc = k;
    a.Ee--;
    a.Ee ? Fg(a) : a.g()
  }, a.Ke)
}
q.Ea = function() {
  this.Ha && !this.Qb && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ha = j;
  Fg(this)
};
q.t = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.Ke, ">")
};
q.yb = p(m);
q.u = p("Wast. T");
q.Ce = p(m);
q.c = function() {
  this.a.info(this.u() + " in disposeInternal.");
  xg.f.c.call(this);
  this.Fc != k && this.H.N.clearTimeout(this.Fc);
  var a = this.F;
  this.F = k;
  yg(a, this)
};
function Gg(a, b) {
  a.setAttribute("role", b);
  a.oi = b
}
;function Hg() {
}
var Ig;
ea(Hg);
q = Hg.prototype;
q.Cc = function() {
};
q.i = function(a) {
  var b = a.Fa().i("div", Jg(this, a).join(" "), a.ba);
  this.fe(a, b);
  return b
};
q.Xb = function(a) {
  return a
};
q.Vb = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(H && !K("7")) {
      var d = Kg(Xc(a), b);
      d.push(b);
      ra(c ? Yc : Zc, a).apply(k, d)
    }else {
      c ? Yc(a, b) : Zc(a, b)
    }
  }
};
q.cf = function(a) {
  a.jc == k && (a.jc = "rtl" == (Jd(a.r ? a.e : a.O.p.body, "direction") || ((a.r ? a.e : a.O.p.body).currentStyle ? (a.r ? a.e : a.O.p.body).currentStyle.direction : k) || (a.r ? a.e : a.O.p.body).style && (a.r ? a.e : a.O.p.body).style.direction));
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
  Qd(a, !b, !H && !Nb)
};
q.Hb = function(a, b) {
  this.Vb(a, this.v() + "-rtl", b)
};
q.ef = function(a) {
  var b;
  return a.T & 32 && (b = a.cb()) ? td(b) : m
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
    td(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
q.me = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.ja = function(a, b, c) {
  var d = a.b();
  if(d) {
    var f = Lg(this, b);
    f && this.Vb(a, f, c);
    this.$(d, b, c)
  }
};
q.$ = function(a, b, c) {
  Ig || (Ig = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Ig[b]) && a.setAttribute("aria-" + b, c)
};
q.Yc = function(a, b) {
  var c = this.Xb(a);
  if(c && (nd(c), b)) {
    if(v(b)) {
      qd(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = dd(c);
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
function Jg(a, b) {
  var c = a.v(), d = [c], f = a.v();
  f != c && d.push(f);
  c = b.h;
  for(f = [];c;) {
    var g = c & -c;
    f.push(Lg(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.ua) && d.push.apply(d, c);
  H && !K("7") && d.push.apply(d, Kg(d));
  return d
}
function Kg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  E([], function(d) {
    $a(d, ra(ab, a)) && (!b || ab(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Lg(a, b) {
  if(!a.Be) {
    var c = a.v();
    a.Be = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Be[b]
}
;function Mg(a, b) {
  a || e(Error("Invalid class name " + a));
  la(b) || e(Error("Invalid decorator function " + b))
}
var Ng = {};
function Pg(a, b, c, d, f) {
  if(!H && (!J || !K("525"))) {
    return j
  }
  if(Qb && f) {
    return Qg(a)
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
  return Qg(a)
}
function Qg(a) {
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
;function Rg(a, b) {
  a && Sg(this, a, b)
}
A(Rg, Bc);
q = Rg.prototype;
q.e = k;
q.Nc = k;
q.Qd = k;
q.Oc = k;
q.Pa = -1;
q.Oa = -1;
var Tg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Ug = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Vg = {61:187, 
59:186}, Wg = H || J && K("525");
q = Rg.prototype;
q.pg = function(a) {
  if(J && (17 == this.Pa && !a.ctrlKey || 18 == this.Pa && !a.altKey)) {
    this.Oa = this.Pa = -1
  }
  Wg && !Pg(a.keyCode, this.Pa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Oa = I && a.keyCode in Vg ? Vg[a.keyCode] : a.keyCode
};
q.qg = function() {
  this.Oa = this.Pa = -1
};
q.handleEvent = function(a) {
  var b = a.Da, c, d;
  H && "keypress" == a.type ? (c = this.Oa, d = 13 != c && 27 != c ? b.keyCode : 0) : J && "keypress" == a.type ? (c = this.Oa, d = 0 <= b.charCode && 63232 > b.charCode && Qg(c) ? b.charCode : 0) : Nb ? (c = this.Oa, d = Qg(c) ? b.keyCode : 0) : (c = b.keyCode || this.Oa, d = b.charCode || 0, Qb && 63 == d && !c && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in Tg ? f = Tg[c] : 25 == c && a.shiftKey && (f = 9) : g && g in Ug && (f = Ug[g]);
  a = f == this.Pa;
  this.Pa = f;
  b = new Xg(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.g()
  }
};
q.b = o("e");
function Sg(a, b, c) {
  a.Oc && a.detach();
  a.e = b;
  a.Nc = N(a.e, "keypress", a, c);
  a.Qd = N(a.e, "keydown", a.pg, c, a);
  a.Oc = N(a.e, "keyup", a.qg, c, a)
}
q.detach = function() {
  this.Nc && (vc(this.Nc), vc(this.Qd), vc(this.Oc), this.Oc = this.Qd = this.Nc = k);
  this.e = k;
  this.Oa = this.Pa = -1
};
q.c = function() {
  Rg.f.c.call(this);
  this.detach()
};
function Xg(a, b, c, d) {
  d && this.ac(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
A(Xg, kc);
function W(a, b, c) {
  Vd.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ma(b);
      if(d = Ng[d]) {
        break
      }
      b = b.f ? b.f.constructor : k
    }
    b = d ? la(d.La) ? d.La() : new d : k
  }
  this.l = b;
  this.Zc(a)
}
A(W, Vd);
q = W.prototype;
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
function Yg(a, b) {
  b && (a.ua ? ab(a.ua, b) || a.ua.push(b) : a.ua = [b], a.l.Vb(a, b, j))
}
q.Vb = function(a, b) {
  b ? Yg(this, a) : a && this.ua && (cb(this.ua, a), 0 == this.ua.length && (this.ua = k), this.l.Vb(this, a, m))
};
q.i = function() {
  var a = this.l.i(this);
  this.e = a;
  var b = this.Fg || this.l.Cc();
  b && Gg(a, b);
  this.nd || this.l.Xc(a, m);
  this.Mb || this.l.me(a, m)
};
q.Xb = function() {
  return this.l.Xb(this.b())
};
q.Q = function() {
  W.f.Q.call(this);
  this.l.cf(this);
  if(this.T & -2 && (this.Kd && Zg(this, j), this.T & 32)) {
    var a = this.cb();
    if(a) {
      var b = this.zb || (this.zb = new Rg);
      Sg(b, a);
      Q(Q(Q(Zd(this), b, "key", this.Ye), a, "focus", this.ng), a, "blur", this.Ve)
    }
  }
};
function Zg(a, b) {
  var c = Zd(a), d = a.b();
  b ? (Q(Q(Q(Q(c, d, "mouseover", a.Ic), d, "mousedown", a.Gc), d, "mouseup", a.Ze), d, "mouseout", a.Hc), H && Q(c, d, "dblclick", a.Xe)) : (Td(Td(Td(Td(c, d, "mouseover", a.Ic), d, "mousedown", a.Gc), d, "mouseup", a.Ze), d, "mouseout", a.Hc), H && Td(c, d, "dblclick", a.Xe))
}
q.ab = function() {
  W.f.ab.call(this);
  this.zb && this.zb.detach();
  this.Mb && this.isEnabled() && this.l.$c(this, m)
};
q.c = function() {
  W.f.c.call(this);
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
      a = Ya(a, ud).join("")
    }else {
      if(ad && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        vd(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      ad || (a = a.replace(/ +/g, " "));
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
function $g(a, b) {
  ah(a, 2, b) && a.ja(2, b)
}
q.Pd = function() {
  return!!(this.h & 4)
};
q.setActive = function(a) {
  ah(this, 4, a) && this.ja(4, a)
};
q.je = function(a) {
  ah(this, 8, a) && this.ja(8, a)
};
q.ja = function(a, b) {
  this.T & a && b != !!(this.h & a) && (this.l.ja(this, a, b), this.h = b ? this.h | a : this.h & ~a)
};
function X(a, b) {
  return!!(a.od & b) && !!(a.T & b)
}
function ah(a, b, c) {
  return!!(a.T & b) && !!(a.h & b) != c && (!(a.Pg & b) || a.dispatchEvent(Xd(b, c))) && !a.ta
}
q.Ic = function(a) {
  !bh(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && $g(this, j)
};
q.Hc = function(a) {
  !bh(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(m), X(this, 2) && $g(this, m))
};
function bh(a, b) {
  return!!a.relatedTarget && pd(b, a.relatedTarget)
}
q.Gc = function(a) {
  if(this.isEnabled() && (X(this, 2) && $g(this, j), mc(a) && (!J || !Qb || !a.ctrlKey))) {
    X(this, 4) && this.setActive(j), this.l.ef(this) && this.cb().focus()
  }
  !this.nd && mc(a) && (!J || !Qb || !a.ctrlKey) && a.preventDefault()
};
q.Ze = function(a) {
  this.isEnabled() && (X(this, 2) && $g(this, j), this.Pd() && this.ib(a) && X(this, 4) && this.setActive(m))
};
q.Xe = function(a) {
  this.isEnabled() && this.ib(a)
};
q.ib = function(a) {
  if(X(this, 16)) {
    var b = !(this.h & 16);
    ah(this, 16, b) && this.ja(16, b)
  }
  X(this, 8) && this.je(j);
  X(this, 64) && (b = !(this.h & 64), ah(this, 64, b) && this.ja(64, b));
  b = new hc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.be = a.be);
  return this.dispatchEvent(b)
};
q.ng = function() {
  X(this, 32) && ah(this, 32, j) && this.ja(32, j)
};
q.Ve = function() {
  X(this, 4) && this.setActive(m);
  X(this, 32) && ah(this, 32, m) && this.ja(32, m)
};
q.Ye = function(a) {
  return this.Mb && this.isEnabled() && this.Jd(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
q.Jd = function(a) {
  return 13 == a.keyCode && this.ib(a)
};
la(W) || e(Error("Invalid component class " + W));
la(Hg) || e(Error("Invalid renderer class " + Hg));
var ch = ma(W);
Ng[ch] = Hg;
Mg("goog-control", function() {
  return new W(k)
});
function dh() {
}
A(dh, Hg);
ea(dh);
q = dh.prototype;
q.Cc = p("button");
q.$ = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : dh.f.$.call(this, a, b, c)
};
q.i = function(a) {
  var b = dh.f.i.call(this, a), c = a.Dc();
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
function eh() {
}
A(eh, dh);
ea(eh);
q = eh.prototype;
q.Cc = function() {
};
q.i = function(a) {
  a.r && m != a.Kd && Zg(a, m);
  a.Kd = m;
  a.od &= -256;
  a.r && a.h & 32 && e(Error("Component already rendered"));
  a.h & 32 && a.ja(32, m);
  a.T &= -33;
  return a.Fa().i("button", {"class":Jg(this, a).join(" "), disabled:!a.isEnabled(), title:a.Dc() || "", value:a.Ec() || ""}, a.Qe() || "")
};
q.cf = function(a) {
  Q(Zd(a), a.b(), "click", a.ib)
};
q.Xc = da;
q.Hb = da;
q.ef = function(a) {
  return a.isEnabled()
};
q.$c = da;
q.ja = function(a, b, c) {
  eh.f.ja.call(this, a, b, c);
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
function fh(a, b, c) {
  W.call(this, a, b || eh.La(), c)
}
A(fh, W);
q = fh.prototype;
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
  fh.f.c.call(this);
  delete this.Of;
  delete this.Kf
};
q.Q = function() {
  fh.f.Q.call(this);
  if(this.T & 32) {
    var a = this.cb();
    a && Q(Zd(this), a, "keyup", this.Jd)
  }
};
q.Jd = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.ib(a) : 32 == a.keyCode
};
Mg("goog-button", function() {
  return new fh(k)
});
function gh() {
}
A(gh, dh);
ea(gh);
q = gh.prototype;
q.i = function(a) {
  var b = {"class":"goog-inline-block " + Jg(this, a).join(" "), title:a.Dc() || ""}, b = a.Fa().i("div", b, hh(this, a.ba, a.Fa()));
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
function hh(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.v() + "-outer-box"), c.i("div", "goog-inline-block " + (a.v() + "-inner-box"), b))
}
q.v = p("goog-custom-button");
function ih(a, b, c) {
  fh.call(this, a, b || gh.La(), c)
}
A(ih, fh);
Mg("goog-custom-button", function() {
  return new ih(k)
});
var jh = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function kh(a) {
  var b = {}, a = "" + a, c = "#" == a.charAt(0) ? a : "#" + a;
  if(lh.test(c)) {
    return b.Kc = mh(c), b.type = "hex", b
  }
  a: {
    var d = a.match(nh);
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
    return b.Kc = oh(c[0], c[1], c[2]), b.type = "rgb", b
  }
  if(jh && (c = jh[a.toLowerCase()])) {
    return b.Kc = c, b.type = "named", b
  }
  e(Error(a + " is not a valid color string"))
}
var ph = /#(.)(.)(.)/;
function mh(a) {
  lh.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  4 == a.length && (a = a.replace(ph, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function qh(a) {
  a = mh(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function oh(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || 0 > a || 255 < a || isNaN(b) || 0 > b || 255 < b || isNaN(c) || 0 > c || 255 < c) && e(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = rh(a.toString(16));
  b = rh(b.toString(16));
  c = rh(c.toString(16));
  return"#" + a + b + c
}
var lh = /^#(?:[0-9a-f]{3}){1,2}$/i, nh = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function rh(a) {
  return 1 == a.length ? "0" + a : a
}
;function sh() {
}
sh.prototype.sc = k;
var th;
function uh() {
}
A(uh, sh);
function vh(a) {
  return(a = wh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function xh(a) {
  var b = {};
  wh(a) && (b[0] = j, b[1] = j);
  return b
}
uh.prototype.Md = k;
function wh(a) {
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
th = new uh;
function yh(a) {
  this.headers = new qb;
  this.Nb = a || k
}
A(yh, Bc);
yh.prototype.a = U("goog.net.XhrIo");
var zh = /^https?$/i;
q = yh.prototype;
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
  this.k = this.Nb ? vh(this.Nb) : vh(th);
  this.kd = this.Nb ? this.Nb.sc || (this.Nb.sc = xh(this.Nb)) : th.sc || (th.sc = xh(th));
  this.k.onreadystatechange = w(this.sf, this);
  try {
    S(this.a, Ah(this, "Opening Xhr")), this.Nd = j, this.k.open(b, a, j), this.Nd = m
  }catch(f) {
    S(this.a, Ah(this, "Error opening Xhr: " + f.message));
    Bh(this, f);
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
    this.nb && (Dc.clearTimeout(this.nb), this.nb = k), 0 < this.fd && (S(this.a, Ah(this, "Will abort after " + this.fd + "ms if incomplete")), this.nb = Dc.setTimeout(w(this.Wg, this), this.fd)), S(this.a, Ah(this, "Sending request")), this.Lc = j, this.k.send(a), this.Lc = m
  }catch(i) {
    S(this.a, Ah(this, "Send error: " + i.message)), Bh(this, i)
  }
};
q.Wg = function() {
  "undefined" != typeof ba && this.k && (this.bc = "Timed out after " + this.fd + "ms, aborting", S(this.a, Ah(this, this.bc)), this.dispatchEvent("timeout"), this.abort(8))
};
function Bh(a, b) {
  a.Ia = m;
  a.k && (a.gb = j, a.k.abort(), a.gb = m);
  a.bc = b;
  Ch(a);
  Dh(a)
}
function Ch(a) {
  a.Ad || (a.Ad = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
q.abort = function() {
  this.k && this.Ia && (S(this.a, Ah(this, "Aborting")), this.Ia = m, this.gb = j, this.k.abort(), this.gb = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Dh(this))
};
q.c = function() {
  this.k && (this.Ia && (this.Ia = m, this.gb = j, this.k.abort(), this.gb = m), Dh(this, j));
  yh.f.c.call(this)
};
q.sf = function() {
  !this.Nd && !this.Lc && !this.gb ? this.Dg() : Eh(this)
};
q.Dg = function() {
  Eh(this)
};
function Eh(a) {
  if(a.Ia && "undefined" != typeof ba) {
    if(a.kd[1] && 4 == a.Ma() && 2 == Fh(a)) {
      S(a.a, Ah(a, "Local request error detected and ignored"))
    }else {
      if(a.Lc && 4 == a.Ma()) {
        Dc.setTimeout(w(a.sf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.Ma()) {
          S(a.a, Ah(a, "Request complete"));
          a.Ia = m;
          var b = Fh(a), c;
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
              b = ("" + a.Sd).match(sf)[1] || k, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !zh.test(b ? b.toLowerCase() : "")
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
            a.bc = d + " [" + Fh(a) + "]";
            Ch(a)
          }
          Dh(a)
        }
      }
    }
  }
}
function Dh(a, b) {
  if(a.k) {
    var c = a.k, d = a.kd[0] ? da : k;
    a.k = k;
    a.kd = k;
    a.nb && (Dc.clearTimeout(a.nb), a.nb = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(f) {
      we(a.a, "Problem encountered resetting onreadystatechange: " + f.message)
    }
  }
}
q.Pd = function() {
  return!!this.k
};
q.Ma = function() {
  return this.k ? this.k.readyState : 0
};
function Fh(a) {
  try {
    return 2 < a.Ma() ? a.k.status : -1
  }catch(b) {
    return R(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.k && 4 == this.Ma() ? this.k.getResponseHeader(a) : h
};
function Ah(a, b) {
  return b + " [" + a.gf + " " + a.Sd + " " + Fh(a) + "]"
}
;var Gh = !(H || J && !K("420+"));
function Hh(a, b) {
  this.gd = a;
  this.na = b
}
A(Hh, L);
q = Hh.prototype;
q.s = k;
q.Ua = -1;
q.Ue = m;
q.$e = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Ih(a) {
  var b = $f(a.He), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.na, c, b), 1 != b && a.g()) : a.g()
}
q.sg = function() {
  Ih(this);
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
    Gh && 3 == this.Ua && Ih(this)
  }else {
    this.g()
  }
};
q.Vd = function(a, b, c) {
  this.s = new yh;
  N(this.s, "readystatechange", w(this.Ig, this));
  N(this.s, "complete", w(this.sg, this));
  this.s.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.He = new Zf(this.s.k, 1048576)
};
q.c = function() {
  Hh.f.c.call(this);
  delete this.He;
  this.s && this.s.g();
  delete this.gd.mc[this.na];
  delete this.gd
};
function Jh() {
  this.mc = {}
}
A(Jh, L);
Jh.prototype.yg = function(a, b, c, d) {
  var f = new Hh(this, a);
  this.mc[a] = f;
  f.Vd(b, c, d)
};
Jh.prototype.dg = function(a) {
  (a = this.mc[a]) && a.g()
};
Jh.prototype.c = function() {
  Jh.f.c.call(this);
  for(var a = ua(this.mc);a.length;) {
    a.pop().g()
  }
  delete this.mc
};
var Kh = new Jh;
t.__XHRSlave_makeRequest = w(Kh.yg, Kh);
t.__XHRSlave_dispose = w(Kh.dg, Kh);
var Lh = U("cw.net.demo");
function Mh() {
}
Mh.prototype.Re = function() {
  return Boolean(Number((new uf(document.location)).S.get("httpStreaming", "0"))) ? 2 : 1
};
function Nh(a) {
  this.p = a
}
var Oh = /\s*;\s*/;
q = Nh.prototype;
q.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && J) {
    var b = "COOKIES_TEST_" + y();
    Ph.set(b, "1");
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
  for(var c = a + "=", d = (this.p.cookie || "").split(Oh), f = 0, g;g = d[f];f++) {
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
  return Qh(this).keys
};
q.X = function() {
  return Qh(this).Pf
};
q.Na = function() {
  return!this.p.cookie
};
q.V = function() {
  return!this.p.cookie ? 0 : (this.p.cookie || "").split(Oh).length
};
q.aa = function(a) {
  return ga(this.get(a))
};
q.wc = function(a) {
  for(var b = Qh(this).Pf, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return j
    }
  }
  return m
};
q.clear = function() {
  for(var a = Qh(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b])
  }
};
function Qh(a) {
  for(var a = (a.p.cookie || "").split(Oh), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), -1 == d ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{keys:b, Pf:c}
}
var Ph = new Nh(document);
Ph.Jh = 3950;
function Rh() {
  this.yf = y()
}
var Sh = new Rh;
Rh.prototype.set = aa("yf");
Rh.prototype.reset = function() {
  this.set(y())
};
Rh.prototype.get = o("yf");
function Th(a) {
  this.Gg = a || "";
  this.Og = Sh
}
Th.prototype.Gf = j;
Th.prototype.Mg = j;
Th.prototype.Lg = j;
Th.prototype.Hf = m;
function Uh(a) {
  return 10 > a ? "0" + a : "" + a
}
function Vh(a, b) {
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
function Wh(a) {
  Th.call(this, a)
}
A(Wh, Th);
Wh.prototype.Hf = j;
function Xh(a) {
  this.Hg = w(this.Tf, this);
  this.Pe = new Wh;
  this.df = this.Pe.Gf = m;
  this.e = a;
  this.fg = this.e.ownerDocument || this.e.document;
  var a = bd(this.e), b = k;
  if(H) {
    b = a.p.createStyleSheet(), Od(b)
  }else {
    var c = ed(a.p, "head", h, h)[0];
    c || (b = ed(a.p, "body", h, h)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    Od(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
Xh.prototype.Tf = function(a) {
  var b = 100 >= this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight, c = this.fg.createElement("div");
  c.className = "logmsg";
  var d = this.Pe, f;
  switch(a.Bb.value) {
    case ne.value:
      f = "dbg-sh";
      break;
    case oe.value:
      f = "dbg-sev";
      break;
    case pe.value:
      f = "dbg-w";
      break;
    case qe.value:
      f = "dbg-i";
      break;
    default:
      f = "dbg-f"
  }
  var g = [];
  g.push(d.Gg, " ");
  if(d.Gf) {
    var i = new Date(a.Jf);
    g.push("[", Uh(i.getFullYear() - 2E3) + Uh(i.getMonth() + 1) + Uh(i.getDate()) + " " + Uh(i.getHours()) + ":" + Uh(i.getMinutes()) + ":" + Uh(i.getSeconds()) + "." + Uh(Math.floor(i.getMilliseconds() / 10)), "] ")
  }
  d.Mg && g.push("[", Qa(Vh(a, d.Og.get())), "s] ");
  d.Lg && g.push("[", Ka(a.xg), "] ");
  g.push('<span class="', f, '">', Ja(Qa(Ka(a.of))));
  d.Hf && a.Dd && g.push("<br>", Ja(Qa(a.Cd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  b && (this.e.scrollTop = this.e.scrollHeight)
};
Xh.prototype.clear = function() {
  this.e.innerHTML = ""
};
function Yh(a, b, c, d, f, g) {
  6 == arguments.length ? this.setTransform(a, b, c, d, f, g) : (0 != arguments.length && e(Error("Insufficient matrix parameters")), this.da = this.ga = 1, this.Y = this.ea = this.fa = this.ha = 0)
}
q = Yh.prototype;
q.M = function() {
  return new Yh(this.da, this.Y, this.ea, this.ga, this.fa, this.ha)
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
  var d = new Yh, f = Math.cos(a), a = Math.sin(a), b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f), c = this.da, d = this.ea;
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
function Y(a, b) {
  this.e = a;
  this.wa = b;
  this.xd = m
}
A(Y, Bc);
q = Y.prototype;
q.wa = k;
q.e = k;
q.Lf = k;
q.b = o("e");
q.addEventListener = function(a, b, c, d) {
  N(this.e, a, b, c, d)
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
  this.se = c;
  this.wa.he(this, c);
  this.fill = d;
  this.wa.ge(this, d)
}
A(Z, Y);
Z.prototype.fill = k;
Z.prototype.se = k;
Z.prototype.kg = o("fill");
Z.prototype.mg = o("se");
function Zh(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
A(Zh, Z);
function $h(a, b) {
  Y.call(this, a, b)
}
A($h, Y);
function ai(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
A(ai, Z);
function bi(a, b) {
  Y.call(this, a, b)
}
A(bi, Y);
function ci(a, b) {
  Y.call(this, a, b)
}
A(ci, $h);
ci.prototype.clear = function() {
  nd(this.b())
};
ci.prototype.Z = function(a, b) {
  di(this.b(), {width:a, height:b})
};
function ei(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
A(ei, ai);
function fi(a, b) {
  Y.call(this, a, b)
}
A(fi, bi);
fi.prototype.Z = function(a, b) {
  di(this.b(), {width:a, height:b})
};
function gi() {
}
;function hi(a, b) {
  this.sa = a;
  this.dc = b || 1
}
A(hi, gi);
function ii() {
  this.pb = 1;
  this.sa = "black"
}
;function ji() {
  this.D = [];
  this.d = [];
  this.qa = []
}
ji.prototype.tb = k;
ji.prototype.U = k;
ji.prototype.Ib = j;
var ki = [2, 2, 6, 6, 0];
q = ji.prototype;
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
  var f = this.U[0] - a * Math.cos(Ze(c)) + a * Math.cos(Ze(c + d)), g = this.U[1] - b * Math.sin(Ze(c)) + b * Math.sin(Ze(c + d));
  this.D.push(3);
  this.d.push(1);
  this.qa.push(a, b, c, d, f, g);
  this.Ib = m;
  this.U = [f, g];
  return this
};
q.Vf = function(a, b, c, d) {
  for(var f = this.U[0] - a * Math.cos(Ze(c)), g = this.U[1] - b * Math.sin(Ze(c)), i = Ze(d), d = Math.ceil(2 * (Math.abs(i) / Math.PI)), i = i / d, c = Ze(c), l = 0;l < d;l++) {
    var n = Math.cos(c), r = Math.sin(c), z = 4 / 3 * Math.sin(i / 2) / (1 + Math.cos(i / 2)), s = f + (n - z * r) * a, x = g + (r + z * n) * b, c = c + i, n = Math.cos(c), r = Math.sin(c);
    this.Ge(s, x, f + (n + z * r) * a, g + (r - z * n) * b, f + n * a, g + r * b)
  }
  return this
};
function li(a, b) {
  for(var c = a.qa, d = 0, f = 0, g = a.D.length;f < g;f++) {
    var i = a.D[f], l = ki[i] * a.d[f];
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
var mi = {};
mi[0] = ji.prototype.moveTo;
mi[1] = ji.prototype.lineTo;
mi[4] = ji.prototype.close;
mi[2] = ji.prototype.Ge;
mi[3] = ji.prototype.Vf;
function ni(a) {
  if(a.Ib) {
    return a.M()
  }
  var b = new ji;
  li(a, function(a, d) {
    mi[a].apply(b, d)
  });
  return b
}
ji.prototype.Na = function() {
  return 0 == this.D.length
};
function oi(a, b, c, d, f) {
  Vd.call(this, f);
  this.width = a;
  this.height = b;
  this.ka = c || k;
  this.Tb = d || k
}
A(oi, Vd);
q = oi.prototype;
q.I = k;
q.Ja = 0;
q.Za = 0;
q.Te = function() {
  return this.W()
};
q.W = function() {
  return this.r ? Md(this.b()) : ka(this.width) && ka(this.height) ? new O(this.width, this.height) : k
};
function pi(a) {
  var b = a.W();
  return b ? b.width / (a.ka ? new O(a.ka, a.Tb) : a.W()).width : 0
}
;function qi(a, b, c, d, f) {
  oi.call(this, a, b, c, d, f);
  this.Je = {};
  this.xe = J && !K(526);
  this.eb = new Rd(this)
}
var ri;
A(qi, oi);
function si(a, b, c) {
  a = a.O.p.createElementNS("http://www.w3.org/2000/svg", b);
  c && di(a, c);
  return a
}
function di(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
q = qi.prototype;
q.rb = function(a, b) {
  (b || this.I).b().appendChild(a.b())
};
q.ge = function(a, b) {
  var c = a.b();
  b instanceof hi ? (c.setAttribute("fill", b.sa), c.setAttribute("fill-opacity", b.dc)) : c.setAttribute("fill", "none")
};
q.he = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.sa);
    var d = b.pb;
    v(d) && -1 != d.indexOf("px") ? c.setAttribute("stroke-width", parseFloat(d) / pi(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
q.i = function() {
  var a = si(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = si(this, "g");
  this.zd = si(this, "defs");
  this.I = new ci(b, this);
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
  Kd(this.b(), a, b)
};
q.W = function() {
  if(!I) {
    return this.r ? Md(this.b()) : qi.f.W.call(this)
  }
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.r && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = Md(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Md(f), b = parseFloat(b) * g.height / 100);
  return new O(a, b)
};
q.clear = function() {
  this.I.clear();
  nd(this.zd);
  this.Je = {}
};
q.xc = function(a, b, c, d, f, g, i) {
  a = si(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new ei(a, this, f, g);
  this.rb(f, i);
  return f
};
q.drawImage = function(a, b, c, d, f, g) {
  a = si(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new fi(a, this);
  this.rb(f, g);
  return f
};
q.Q = function() {
  var a = this.W();
  qi.f.Q.call(this);
  a || this.dispatchEvent("resize");
  if(this.xe) {
    var a = this.width, b = this.height;
    "string" == typeof a && -1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%") && Q(this.eb, ti(), Ec, this.hd);
    this.hd()
  }
};
q.ab = function() {
  qi.f.ab.call(this);
  this.xe && Td(this.eb, ti(), Ec, this.hd)
};
q.c = function() {
  delete this.Je;
  delete this.zd;
  delete this.I;
  qi.f.c.call(this)
};
function ti() {
  ri || (ri = new Cc(400), ri.start());
  return ri
}
;function ui() {
  return this.e = this.wa.O.b(this.R) || this.e
}
function vi(a, b) {
  this.R = a.id;
  Y.call(this, a, b)
}
A(vi, $h);
vi.prototype.b = ui;
vi.prototype.clear = function() {
  nd(this.b())
};
vi.prototype.Z = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  this.wa.I != this && (c.coordorigin = "0 0")
};
function wi(a, b, c, d, f, g, i, l) {
  this.R = a.id;
  Z.call(this, a, b, i, l)
}
A(wi, ai);
wi.prototype.b = ui;
function xi(a, b) {
  this.R = a.id;
  Y.call(this, a, b)
}
A(xi, bi);
xi.prototype.b = ui;
xi.prototype.Z = function(a, b) {
  var c = this.b().style;
  c.width = yi(a) + "px";
  c.height = yi(b) + "px"
};
function zi(a, b, c, d, f) {
  oi.call(this, a, b, c, d, f);
  this.eb = new Rd(this)
}
A(zi, oi);
var Ai = document.documentMode && 8 <= document.documentMode;
function yi(a) {
  return Math.round(100 * (parseFloat(a.toString()) - 0.5))
}
function $(a) {
  return Math.round(100 * parseFloat(a.toString()))
}
function Bi(a, b) {
  var c = a.O.createElement("g_vml_:" + b);
  c.id = "goog_" + Sa++;
  return c
}
function Ci(a) {
  Ai && a.r && (a.b().innerHTML = a.b().innerHTML)
}
zi.prototype.rb = function(a, b) {
  (b || this.I).b().appendChild(a.b());
  Ci(this)
};
zi.prototype.ge = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    "fill" == f.tagName && c.removeChild(f)
  }
  b instanceof hi ? "transparent" == b.sa ? c.filled = m : 1 != b.dc ? (c.filled = j, d = Bi(this, "fill"), d.opacity = Math.round(100 * b.dc) + "%", d.color = b.sa, c.appendChild(d)) : (c.filled = j, c.fillcolor = b.sa) : c.filled = m;
  Ci(this)
};
zi.prototype.he = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = j;
    var d = b.pb, d = v(d) && -1 == d.indexOf("px") ? parseFloat(d) : d * pi(this), f = c.getElementsByTagName("stroke")[0];
    1 > d ? (f = f || Bi(this, "stroke"), f.opacity = d, f.pi = "1px", f.color = b.sa, c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.sa, c.strokeweight = d + "px")
  }else {
    c.stroked = m
  }
  Ci(this)
};
function Di(a, b, c, d, f) {
  var g = a.style;
  g.position = "absolute";
  g.left = yi(b) + "px";
  g.top = yi(c) + "px";
  g.width = $(d) + "px";
  g.height = $(f) + "px";
  "shape" == a.tagName && (a.coordsize = $(d) + " " + $(f))
}
try {
  eval("document.namespaces")
}catch(Ei) {
}
q = zi.prototype;
q.i = function() {
  var a = this.O.p;
  a.namespaces.g_vml_ || (Ai ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}");
  var a = this.width, b = this.height, c = this.O.i("div", {style:"overflow:hidden;position:relative;width:" + (v(a) && Fa(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (v(b) && Fa(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = Bi(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.ka ? $(this.ka) + " " + $(this.Tb) : $(a) + " " + $(b);
  d.coordorigin = ga(this.Ja) ? $(this.Ja) + " " + $(this.Za) : "0 0";
  c.appendChild(d);
  this.I = new vi(d, this);
  N(c, "resize", w(this.Id, this))
};
q.Id = function() {
  var a = Md(this.b()), b = this.I.b().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.b();a && a.currentStyle && "none" != a.currentStyle.display;) {
      a = a.parentNode
    }
    a && a.currentStyle && Q(this.eb, a, "propertychange", this.Id)
  }
  this.dispatchEvent("resize")
};
q.Z = function(a, b) {
  Kd(this.b(), a, b)
};
q.W = function() {
  var a = this.b();
  return new O(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
q.clear = function() {
  this.I.clear()
};
q.xc = function(a, b, c, d, f, g, i) {
  var l = Bi(this, "oval");
  Di(l, a - c, b - d, 2 * c, 2 * d);
  a = new wi(l, this, 0, 0, 0, 0, f, g);
  this.rb(a, i);
  return a
};
q.drawImage = function(a, b, c, d, f, g) {
  var i = Bi(this, "image");
  Di(i, a, b, c, d);
  Ai ? i.src = f : i.setAttribute("src", f);
  a = new xi(i, this);
  this.rb(a, g);
  return a
};
q.Q = function() {
  zi.f.Q.call(this);
  this.Id();
  Ci(this)
};
q.c = function() {
  this.I = k;
  zi.f.c.call(this)
};
function Fi(a) {
  Y.call(this, k, a);
  this.P = []
}
A(Fi, $h);
Fi.prototype.clear = function() {
  this.P.length && (this.P.length = 0, Gi(this.wa))
};
Fi.prototype.Z = function() {
};
Fi.prototype.appendChild = function(a) {
  this.P.push(a)
};
Fi.prototype.Ba = function() {
  for(var a = 0, b = this.P.length;a < b;a++) {
    Hi(this.wa, this.P[a])
  }
};
function Ii(a, b, c, d, f, g, i, l) {
  Z.call(this, a, b, i, l);
  this.$f = c;
  this.ag = d;
  this.Cf = f;
  this.Df = g;
  this.z = new ji;
  this.z.clear();
  this.z.moveTo(this.$f + this.Cf * Math.cos(Ze(0)), this.ag + this.Df * Math.sin(Ze(0)));
  this.z.arcTo(this.Cf, this.Df, 0, 360);
  this.z.close();
  this.Eg = new Ji(k, b, this.z, i, l)
}
A(Ii, ai);
Ii.prototype.Ba = function(a) {
  this.Eg.Ba(a)
};
function Ji(a, b, c, d, f) {
  Z.call(this, a, b, d, f);
  this.mb(c)
}
A(Ji, Zh);
Ji.prototype.Ub = m;
Ji.prototype.mb = function(a) {
  this.z = a.Ib ? a : ni(a);
  this.Ub && Gi(this.wa)
};
Ji.prototype.Ba = function(a) {
  this.Ub = j;
  a.beginPath();
  li(this.z, function(b, c) {
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
function Ki(a, b, c, d, f, g, i) {
  Y.call(this, a, b);
  this.dh = c;
  this.fh = d;
  this.ye = f;
  this.Hd = g;
  this.Ng = i
}
A(Ki, bi);
Ki.prototype.Ub = m;
Ki.prototype.Z = function(a, b) {
  this.ye = a;
  this.Hd = b;
  this.Ub && Gi(this.wa)
};
Ki.prototype.Ba = function(a) {
  this.bf ? (this.ye && this.Hd && a.drawImage(this.bf, this.dh, this.fh, this.ye, this.Hd), this.Ub = j) : (a = new Image, a.onload = w(this.og, this, a), a.src = this.Ng)
};
Ki.prototype.og = function(a) {
  this.bf = a;
  Gi(this.wa)
};
function Li(a, b, c, d, f) {
  oi.call(this, a, b, c, d, f)
}
A(Li, oi);
q = Li.prototype;
q.ge = function() {
  Gi(this)
};
q.he = function() {
  Gi(this)
};
function Mi(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.Lf ? b.Lf.M() : new Yh, f = d.fa, g = d.ha;
  (f || g) && c.translate(f, g);
  (d = d.Y) && c.rotate(Math.asin(d))
}
q.i = function() {
  var a = this.O.i("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Rb = this.O.i("canvas");
  a.appendChild(this.Rb);
  this.wg = this.I = new Fi(this);
  this.Jg = 0;
  Ni(this)
};
q.getContext = function() {
  this.b() || this.i();
  this.ub || (this.ub = this.Rb.getContext("2d"), this.ub.save());
  return this.ub
};
q.Z = function(a, b) {
  this.width = a;
  this.height = b;
  Ni(this);
  Gi(this)
};
q.W = function() {
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.r && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = Md(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Md(f), b = parseFloat(b) * g.height / 100);
  return new O(a, b)
};
function Ni(a) {
  Kd(a.b(), a.width, a.height);
  var b = a.W();
  b && (Kd(a.Rb, b.width, b.height), a.Rb.width = b.width, a.Rb.height = b.height, a.ub = k)
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
function Gi(a) {
  if(!a.ni && a.r) {
    a.reset();
    if(a.ka) {
      var b = a.W();
      a.getContext().scale(b.width / a.ka, b.height / a.Tb)
    }
    (a.Ja || a.Za) && a.getContext().translate(-a.Ja, -a.Za);
    Mi(a, a.I);
    a.I.Ba(a.ub);
    a.getContext().restore()
  }
}
function Hi(a, b) {
  var c = a.getContext();
  Mi(a, b);
  if(!b.kg || !b.mg) {
    b.Ba(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof hi) {
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
      b.Ba(c), c.strokeStyle = d.sa, d = d.pb, v(d) && -1 != d.indexOf("px") && (d = parseFloat(d) / pi(a)), c.lineWidth = d, c.stroke()
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
  this.r && !this.Jg && !(b != this.I && b != this.wg) && Hi(this, a)
};
q.xc = function(a, b, c, d, f, g, i) {
  a = new Ii(k, this, a, b, c, d, f, g);
  this.append(a, i);
  return a
};
q.drawImage = function(a, b, c, d, f, g) {
  a = new Ki(k, this, a, b, c, d, f);
  this.append(a, g);
  return a
};
q.c = function() {
  this.ub = k;
  Li.f.c.call(this)
};
q.Q = function() {
  var a = this.W();
  Li.f.Q.call(this);
  a || (Ni(this), this.dispatchEvent("resize"));
  Gi(this)
};
function Oi(a) {
  this.B = [];
  Pi(this, a)
}
A(Oi, Bc);
q = Oi.prototype;
q.Wa = k;
q.ee = k;
function Pi(a, b) {
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
  Oi.f.c.call(this);
  delete this.B;
  this.Wa = k
};
q.kc = function(a, b) {
  a && ("function" == typeof this.ee ? this.ee(a, b) : "function" == typeof a.je && a.je(b))
};
function Qi() {
}
A(Qi, Hg);
ea(Qi);
var Ri = 0;
Qi.prototype.i = function(a) {
  var b = Jg(this, a);
  return a.Fa().i("div", b ? b.join(" ") : k, Si(this, a.ba, a.Te(), a.Fa()))
};
function Si(a, b, c, d) {
  for(var f = [], g = 0, i = 0;g < c.height;g++) {
    for(var l = [], n = 0;n < c.width;n++) {
      var r = b && b[i++];
      l.push(Ti(a, r, d))
    }
    f.push(d.i("tr", a.v() + "-row", l))
  }
  return a.Fe(f, d)
}
Qi.prototype.Fe = function(a, b) {
  var c = b.i("table", this.v() + "-table", b.i("tbody", this.v() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Gg(c, "grid");
  return c
};
function Ti(a, b, c) {
  a = c.i("td", {"class":a.v() + "-cell", id:a.v() + "-cell-" + Ri++}, b);
  Gg(a, "gridcell");
  return a
}
Qi.prototype.Yc = function(a, b) {
  if(a) {
    var c = ed(document, "tbody", this.v() + "-body", a)[0];
    if(c) {
      var d = 0;
      E(c.rows, function(a) {
        E(a.cells, function(a) {
          nd(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = bd(a), i = c.rows[0].cells.length;d < b.length;) {
          var l = b[d++];
          f.push(Ti(this, l, g));
          f.length == i && (l = g.i("tr", this.v() + "-row", f), c.appendChild(l), f.length = 0)
        }
        if(0 < f.length) {
          for(;f.length < i;) {
            f.push(Ti(this, "", g))
          }
          l = g.i("tr", this.v() + "-row", f);
          c.appendChild(l)
        }
      }
    }
    Qd(a, j, I)
  }
};
function Ui(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && ab(Xc(c), a.v() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function Vi(a, b, c, d) {
  c && (c = c.parentNode, a = a.v() + "-cell-hover", d ? Yc(c, a) : Zc(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id))
}
Qi.prototype.v = p("goog-palette");
function Wi(a, b, c) {
  W.call(this, a, b || Qi.La(), c)
}
A(Wi, W);
q = Wi.prototype;
q.n = k;
q.fb = -1;
q.K = k;
q.c = function() {
  Wi.f.c.call(this);
  this.K && (this.K.g(), this.K = k);
  this.n = k
};
q.Zc = function(a) {
  Wi.f.Zc.call(this, a);
  Xi(this);
  this.K ? (this.K.clear(), Pi(this.K, a)) : (this.K = new Oi(a), this.K.ee = w(this.kc, this), Q(Zd(this), this.K, "select", this.rg));
  this.fb = -1
};
q.Qe = p(k);
q.Ic = function(a) {
  Wi.f.Ic.call(this, a);
  var b = Ui(this.l, this, a.target);
  if((!b || !a.relatedTarget || !pd(b, a.relatedTarget)) && b != Yi(this)) {
    a = this.ba, Zi(this, a ? Xa(a, b) : -1)
  }
};
q.Hc = function(a) {
  Wi.f.Hc.call(this, a);
  var b = Ui(this.l, this, a.target);
  (!b || !a.relatedTarget || !pd(b, a.relatedTarget)) && b == Yi(this) && Vi(this.l, this, b, m)
};
q.Gc = function(a) {
  Wi.f.Gc.call(this, a);
  if(this.Pd() && (a = Ui(this.l, this, a.target), a != Yi(this))) {
    var b = this.ba;
    Zi(this, b ? Xa(b, a) : -1)
  }
};
q.ib = function() {
  var a = Yi(this);
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
    return Zi(this, 0), j
  }
  if(35 == a.keyCode) {
    return Zi(this, b - 1), j
  }
  var d = 0 > this.fb ? this.Fd() : this.fb;
  switch(a.keyCode) {
    case 37:
      -1 == d && (d = b);
      if(0 < d) {
        return Zi(this, d - 1), a.preventDefault(), j
      }
      break;
    case 39:
      if(d < b - 1) {
        return Zi(this, d + 1), a.preventDefault(), j
      }
      break;
    case 38:
      -1 == d && (d = b + c - 1);
      if(d >= c) {
        return Zi(this, d - c), a.preventDefault(), j
      }
      break;
    case 40:
      if(-1 == d && (d = -c), d < b - c) {
        return Zi(this, d + c), a.preventDefault(), j
      }
  }
  return m
};
q.rg = function() {
};
q.Te = o("n");
q.Z = function(a, b) {
  this.b() && e(Error("Component already rendered"));
  this.n = ka(a) ? new O(a, b) : a;
  Xi(this)
};
function Yi(a) {
  var b = a.ba;
  return b && b[a.fb]
}
function Zi(a, b) {
  b != a.fb && (aj(a, a.fb, m), a.fb = b, aj(a, b, j))
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
function aj(a, b, c) {
  if(a.b()) {
    var d = a.ba;
    d && 0 <= b && b < d.length && Vi(a.l, a, d[b], c)
  }
}
q.kc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.l.v() + "-cell-selected";
    b ? Yc(c, d) : Zc(c, d)
  }
};
function Xi(a) {
  var b = a.ba;
  if(b) {
    if(a.n && a.n.width) {
      if(b = Math.ceil(b.length / a.n.width), !ka(a.n.height) || a.n.height < b) {
        a.n.height = b
      }
    }else {
      b = Math.ceil(Math.sqrt(b.length)), a.n = new O(b, b)
    }
  }else {
    a.n = new O(0, 0)
  }
}
;function bj(a, b, c) {
  this.uc = a || [];
  Wi.call(this, k, b || Qi.La(), c);
  this.uc = this.uc;
  this.Rc = k;
  this.Yc(cj(this))
}
A(bj, Wi);
bj.prototype.Rc = k;
function dj(a) {
  var b = ej(fj);
  a.Rc || (a.Rc = Ya(a.uc, function(a) {
    return ej(a)
  }));
  a.ke(b ? Xa(a.Rc, b) : -1)
}
function cj(a) {
  return Ya(a.uc, function(a) {
    var c = this.Fa().i("div", {"class":this.l.v() + "-colorswatch", style:"background-color:" + a});
    c.title = "#" == a.charAt(0) ? "RGB (" + qh(a).join(", ") + ")" : a;
    return c
  }, a)
}
function ej(a) {
  if(a) {
    try {
      return kh(a).Kc
    }catch(b) {
    }
  }
  return k
}
;var gj, hj, ij, jj, kj, lj = U("whiteboard.logger");
window.onerror = function(a, b, c) {
  we(lj, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function mj() {
}
mj.prototype.Sg = function(a, b) {
  lj.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  nj = k
};
mj.prototype.Tg = function(a) {
  var a = ya(a), b = a[0], c = a[1];
  "Point" == b ? gj.xc(c.x, c.y, 5, 5, new ii, new hi(c.color), h) : "ClearBoard" == b ? (gj.g(), oj()) : R(lj, "Strange message from server: " + G(a))
};
mj.prototype.reset = function(a) {
  lj.info("resetting with reason: " + a);
  this.F.reset(a)
};
var nj = k, pj = new Tc(t.window);
function qj() {
  nj && (nj.reset("idle timeout fired"), nj = k)
}
var rj = k;
function sj() {
  rj != k && pj.N.clearTimeout(rj);
  nj && (rj = pj.N.setTimeout(qj, 2592E5))
}
N(window, ["click", "focus", "keydown", "keypress"], sj, j);
function tj() {
  gj.g();
  oj();
  var a = nj;
  lj.info("Telling server to clear the board.");
  sg(a.F, [za(["ClearBoard", k])])
}
function uj(a) {
  var b = new kc(a), a = b.offsetX, b = b.offsetY;
  gj.xc(a, b, 5, 5, new ii, new hi(hj), h);
  var c = nj, d = hj;
  lj.info("Telling server about circle at: " + a + ", " + b + " with color " + d);
  sg(c.F, [za(["Point", {x:a, y:b, color:d}])])
}
function oj() {
  var a;
  a = H && !K("9") ? new zi(800, 600, h, h, h) : J && (!K("420") || Ob) ? new Li(800, 600, h, h, h) : new qi(800, 600, h, h, h);
  a.i();
  ij = P("drawArea");
  $d(a, ij);
  gj = a
}
var fj = "#E06666";
function vj(a) {
  var b;
  (a = a.target.Gd()) ? (a = a.style[Ua("background-color")] || "", b = ej(a)) : b = k;
  b || (b = fj);
  hj = b;
  Ph.set("whiteboard_defaultColor", b);
  a = P("whiteboard-cp-value");
  v("background-color") ? Id(a, b, "background-color") : ta("background-color", ra(Id, a));
  a = P("whiteboard-cp-value");
  a.title = b;
  b = kh(b).Kc;
  qd(a, b);
  b = qh(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = oh(b[0], b[1], b[2]);
  v("color") ? Id(a, b, "color") : ta("color", ra(Id, a))
}
function wj() {
  jj = (new uf(document.location)).S;
  if(kj = Boolean(Number(jj.get("logging", "0")))) {
    Ae().ad(ue);
    var a = new Xh(document.getElementById("log"));
    if(j != a.df) {
      var b = Ae(), c = a.Hg;
      b.$b || (b.$b = []);
      b.$b.push(c);
      a.df = j
    }
  }else {
    Ae().ad(me)
  }
  lj.info("Logger works.");
  (a = Ph.get("whiteboard_defaultColor")) && (fj = a);
  hj = fj;
  b = P("whiteboard-controls-left");
  a = P("whiteboard-controls-right");
  c = hd("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  md(b, c);
  c = hd("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  md(b, c);
  b = new bj("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.Z(8);
  $d(b, P("whiteboard-cp"));
  N(b, "action", vj);
  dj(b);
  vj({target:b});
  b = new ih("Clear board");
  Yg(b, "clear-board-button");
  $d(b, a);
  N(b, "action", tj);
  a = P("drawAreaOverlay");
  Qd(a, j);
  N(a, "click", uj, m);
  oj();
  a = new Mh;
  nj = new mj;
  sj();
  c = (new uf(document.location)).S;
  b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    R(Lh, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new uf(document.location);
  b ? b = new fg("/_minerva/", c.la, t.__demo_mainSocketPort) : (d ? (b = t.__demo_shared_domain, v(b) || e(Error("domain was " + G(b) + "; expected a string.")), c = c.M(), xf(c, "_____random_____." + b)) : c = c.M(), c.mb("/_minerva/"), zf(c, "", h), b = new hg(c.toString().replace("_____random_____", "%random%")));
  a = new mg(b, a, pj);
  b = nj;
  a.ae = w(b.Tg, b);
  a.onreset = w(b.Sg, b);
  nj.F = a;
  sg(nj.F, ["subprotocol:whiteboard"]);
  a.start()
}
var xj = ["__whiteboard_init"], yj = t;
!(xj[0] in yj) && yj.execScript && yj.execScript("var " + xj[0]);
for(var zj;xj.length && (zj = xj.shift());) {
  !xj.length && ga(wj) ? yj[zj] = wj : yj = yj[zj] ? yj[zj] : yj[zj] = {}
}
;})();
