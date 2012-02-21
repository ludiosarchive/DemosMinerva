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
  a.Ka = function() {
    return a.wg || (a.wg = new a)
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
  this.Rc = h
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
          c.push(f), f = b[g], Aa(a, a.Rc ? a.Rc.call(b, "" + g, f) : f, c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), Ca(g, c), c.push(":"), Aa(a, a.Rc ? a.Rc.call(b, g, f) : f, c), d = ","))
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
          if(sa(a.Tf)) {
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
    a && this.gd(a)
  }
}
q = qb.prototype;
q.d = 0;
q.V = n("d");
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
q.qc = function(a) {
  for(var b = 0;b < this.m.length;b++) {
    var c = this.m[b];
    if(sb(this.u, c) && this.u[c] == a) {
      return j
    }
  }
  return m
};
q.U = function(a, b) {
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
q.Ma = function() {
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
q.gd = function(a) {
  var b;
  a instanceof qb ? (b = a.ua(), a = a.X()) : (b = va(a), a = ua(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
q.K = function() {
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
yb.prototype.U = function(a) {
  return a instanceof yb && this.qb == a.qb && this.lb.join(",") == a.lb
};
yb.prototype.N = function(a, b) {
  a.push("new SACK(", "" + this.qb, ", ");
  F(this.lb, a, b);
  a.push(")")
};
function zb() {
  this.z = new qb
}
q = zb.prototype;
q.$a = -1;
q.n = 0;
q.append = function(a) {
  var b = vb(a);
  this.z.set(this.$a + 1, [a, b]);
  this.$a += 1;
  this.n += b
};
q.N = function(a) {
  a.push("<Queue with ", "" + this.z.V(), " item(s), counter=#", "" + this.$a, ", size=", "" + this.n, ">")
};
function Ab(a) {
  a = a.z.ua();
  ib(a);
  return a
}
q.Qe = function(a) {
  for(var b = Ab(this), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    (a == k || f >= a) && c.push([f, this.z.get(f)[0]])
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
q.md = m;
q.Zb = function(a, b, c, d, f, g) {
  la(a) ? this.df = j : a && a.handleEvent && la(a.handleEvent) ? this.df = m : e(Error("Invalid listener argument"));
  this.Cb = a;
  this.wf = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Dc = g;
  this.md = m;
  this.key = ++bc;
  this.kb = m
};
q.handleEvent = function(a) {
  return this.df ? this.Cb.call(this.Dc || this.src, a) : this.Cb.handleEvent.call(this.Cb, a)
};
var cc = !H || $b(), dc = !H || $b(), ec = H && !K("8");
!J || K("528");
I && K("1.9b") || H && K("8") || Nb && K("9.5") || J && K("528");
I && !K("8") || H && K("9");
var fc = {ph:"click", uh:"dblclick", Ph:"mousedown", Th:"mouseup", Sh:"mouseover", Rh:"mouseout", Qh:"mousemove", ci:"selectstart", Jh:"keypress", Ih:"keydown", Kh:"keyup", nh:"blur", Ch:"focus", vh:"deactivate", Dh:H ? "focusin" : "DOMFocusIn", Eh:H ? "focusout" : "DOMFocusOut", oh:"change", bi:"select", di:"submit", Hh:"input", Yh:"propertychange", zh:"dragstart", wh:"dragenter", yh:"dragover", xh:"dragleave", Ah:"drop", hi:"touchstart", gi:"touchmove", fi:"touchend", ei:"touchcancel", rh:"contextmenu", 
Bh:"error", Gh:"help", Lh:"load", Mh:"losecapture", Zh:"readystatechange", $h:"resize", ai:"scroll", ji:"unload", Fh:"hashchange", Uh:"pagehide", Vh:"pageshow", Xh:"popstate", sh:"copy", Wh:"paste", th:"cut", kh:"beforecopy", lh:"beforecut", mh:"beforepaste", Oh:"message", qh:"connect", ii:J ? "webkitTransitionEnd" : Nb ? "oTransitionEnd" : "transitionend"};
function L() {
}
L.prototype.sa = m;
L.prototype.g = function() {
  this.sa || (this.sa = j, this.c())
};
L.prototype.c = function() {
  this.dg && gc.apply(k, this.dg)
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
q.Yd = m;
q.Ca = k;
q.Zb = function(a, b) {
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
  this.Yd = Qb ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Ca = a;
  delete this.ec;
  delete this.jb
};
function mc(a) {
  return cc ? 0 == a.Ca.button : "click" == a.type ? j : !!(a.Ca.button & lc[0])
}
q.stopPropagation = function() {
  kc.f.stopPropagation.call(this);
  this.Ca.stopPropagation ? this.Ca.stopPropagation() : this.Ca.cancelBubble = j
};
q.preventDefault = function() {
  kc.f.preventDefault.call(this);
  var a = this.Ca;
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
  this.relatedTarget = this.currentTarget = this.target = this.Ca = k
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
        if(i = o[g], i.Cb == c && i.Dc == f) {
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
    a.addEventListener ? (a == t || !a.sd) && a.addEventListener(b, g, d) : a.attachEvent(b in qc ? qc[b] : qc[b] = "on" + b, g);
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
  nc[a].md = j;
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
        if(a[g].Cb == c && a[g].capture == d && a[g].Dc == f) {
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
  var c = b.src, d = b.type, f = b.wf, g = b.capture;
  c.removeEventListener ? (c == t || !c.sd) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in qc ? qc[d] : qc[d] = "on" + d, f);
  c = ma(c);
  f = oc[d][g][c];
  if(pc[c]) {
    var i = pc[c];
    db(i, b);
    0 == i.length && delete pc[c]
  }
  b.kb = j;
  f.pf = j;
  xc(d, g, c, f);
  delete nc[a];
  return j
}
function xc(a, b, c, d) {
  if(!d.Kc && d.pf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].kb ? d[f].wf.src = k : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.pf = m;
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
    a.Kc ? a.Kc++ : a.Kc = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var o = a[l];
        o && !o.kb && (g &= Ac(o, f) !== m)
      }
    }finally {
      a.Kc--, xc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Ac(a, b) {
  var c = a.handleEvent(b);
  a.md && wc(a.key);
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
q.sd = j;
q.Nc = k;
q.ee = aa("Nc");
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
      for(g = this;g;g = g.Nc) {
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
        for(f = this;!a.jb && f && g.ia;f = f.Nc) {
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
  this.Nc = k
};
function Dc(a, b) {
  this.Gc = a || 1;
  this.jc = b || Ec;
  this.kd = w(this.Yg, this);
  this.Od = y()
}
B(Dc, Cc);
Dc.prototype.enabled = m;
var Ec = t.window;
q = Dc.prototype;
q.oa = k;
q.Yg = function() {
  if(this.enabled) {
    var a = y() - this.Od;
    0 < a && a < 0.8 * this.Gc ? this.oa = this.jc.setTimeout(this.kd, this.Gc - a) : (this.dispatchEvent(Fc), this.enabled && (this.oa = this.jc.setTimeout(this.kd, this.Gc), this.Od = y()))
  }
};
q.start = function() {
  this.enabled = j;
  this.oa || (this.oa = this.jc.setTimeout(this.kd, this.Gc), this.Od = y())
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
  this.ye = a;
  this.Ge = b || k
}
q = Gc.prototype;
q.Ja = m;
q.Wb = m;
q.bc = 0;
q.je = m;
q.Zf = m;
q.ld = 0;
q.cancel = function(a) {
  if(this.Ja) {
    this.dc instanceof Gc && this.dc.cancel()
  }else {
    if(this.H) {
      var b = this.H;
      delete this.H;
      a ? b.cancel(a) : (b.ld--, 0 >= b.ld && b.cancel())
    }
    this.ye ? this.ye.call(this.Ge, this) : this.je = j;
    this.Ja || this.Ub(new Hc)
  }
};
q.Be = function(a, b) {
  Ic(this, a, b);
  this.bc--;
  0 == this.bc && this.Ja && Jc(this)
};
function Ic(a, b, c) {
  a.Ja = j;
  a.dc = c;
  a.Wb = !b;
  Jc(a)
}
function Kc(a) {
  a.Ja && (a.je || e(new Lc), a.je = m)
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
  a.Ja && Jc(a)
}
function Qc(a, b) {
  Oc(a, b, b, h)
}
function Rc(a) {
  return $a(a.oc, function(a) {
    return la(a[1])
  })
}
function Jc(a) {
  a.se && a.Ja && Rc(a) && (t.clearTimeout(a.se), delete a.se);
  a.H && (a.H.ld--, delete a.H);
  for(var b = a.dc, c = m, d = m;a.oc.length && 0 == a.bc;) {
    var f = a.oc.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.Wb ? i : g) {
      try {
        var l = g.call(f || a.Ge, b);
        ga(l) && (a.Wb = a.Wb && (l == b || l instanceof Error), a.dc = b = l);
        b instanceof Gc && (d = j, a.bc++)
      }catch(o) {
        b = o, a.Wb = j, Rc(a) || (c = j)
      }
    }
  }
  a.dc = b;
  d && a.bc && (Oc(b, w(a.Be, a, j), w(a.Be, a, m)), b.Zf = j);
  c && (a.se = t.setTimeout(function() {
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
  b.Ub(a);
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
  this.L = a;
  this.sc = [];
  this.Ke = [];
  this.Yf = w(this.bh, this)
}
Uc.prototype.oa = k;
function Vc(a, b, c, d) {
  a.sc.push([b, c, d]);
  a.oa == k && (a.oa = a.L.setTimeout(a.Yf, 0))
}
Uc.prototype.bh = function() {
  this.oa = k;
  var a = this.sc;
  this.sc = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], f = c[1], c = c[2];
    try {
      d.apply(f, c)
    }catch(g) {
      this.L.setTimeout(function() {
        e(g)
      }, 0)
    }
  }
  if(0 == this.sc.length) {
    a = this.Ke;
    this.Ke = [];
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
q.K = function() {
  return new N(this.width, this.height)
};
q.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
q.Ma = function() {
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
function jd(a, b, c) {
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
q.Ea = dd;
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
q.De = function(a, b, c) {
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
          if(!b[c].kb && b[c].Cb == d && b[c].capture == f && b[c].Dc == g) {
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
Td.prototype.Zd = function() {
  E(this.m, wc);
  this.m.length = 0
};
Td.prototype.c = function() {
  Td.f.c.call(this);
  this.Zd()
};
Td.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Wd() {
}
ea(Wd);
Wd.prototype.Eg = 0;
Wd.Ka();
function Xd(a) {
  this.M = a || dd();
  this.fc = Yd
}
B(Xd, Cc);
Xd.prototype.vg = Wd.Ka();
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
q.Q = k;
q.q = m;
q.e = k;
q.fc = k;
q.H = k;
q.O = k;
q.Qb = k;
q.dh = m;
function $d(a) {
  return a.Q || (a.Q = ":" + (a.vg.Eg++).toString(36))
}
q.b = n("e");
function ae(a) {
  return a.wb || (a.wb = new Td(a))
}
q.getParent = n("H");
q.ee = function(a) {
  this.H && this.H != a && e(Error("Method not supported"));
  Xd.f.ee.call(this, a)
};
q.Ea = n("M");
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
  this.wb && this.wb.Zd();
  this.q = m
};
q.c = function() {
  Xd.f.c.call(this);
  this.q && this.ab();
  this.wb && (this.wb.g(), delete this.wb);
  ce(this, function(a) {
    a.g()
  });
  !this.dh && this.e && qd(this.e);
  this.H = this.e = this.Qb = this.O = k
};
q.Vb = n("e");
q.Hb = function(a) {
  this.q && e(Error("Component already rendered"));
  this.fc = a
};
function ce(a, b) {
  a.O && E(a.O, b, h)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : $d(a), a = this.Qb && c ? (c in this.Qb ? this.Qb[c] : h) || k : k;
    if(c && a) {
      var d = this.Qb;
      c in d && delete d[c];
      db(this.O, a);
      b && (a.ab(), a.e && qd(a.e));
      c = a;
      c == k && e(Error("Unable to set parent component"));
      c.H = k;
      Xd.f.ee.call(c, k)
    }
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function de(a) {
  this.u = new qb;
  a && this.gd(a)
}
function ee(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ma(a) : b.substr(0, 1) + a
}
q = de.prototype;
q.V = function() {
  return this.u.V()
};
q.add = function(a) {
  this.u.set(ee(a), a)
};
q.gd = function(a) {
  for(var a = mb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
q.Zd = function(a) {
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
q.Ma = function() {
  return this.u.Ma()
};
q.contains = function(a) {
  return this.u.aa(ee(a))
};
q.X = function() {
  return this.u.X()
};
q.K = function() {
  return new de(this)
};
q.U = function(a) {
  return this.V() == lb(a) && fe(this, a)
};
function fe(a, b) {
  var c = lb(b);
  if(a.V() > c) {
    return m
  }
  !(b instanceof de) && 5 < c && (b = new de(b));
  return pb(a, function(a) {
    if("function" == typeof b.contains) {
      a = b.contains(a)
    }else {
      if("function" == typeof b.qc) {
        a = b.qc(a)
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
ke.prototype.yd = k;
ke.prototype.xd = k;
var le = 0;
ke.prototype.reset = function(a, b, c, d, f) {
  "number" == typeof f || le++;
  this.Kf = d || y();
  this.Bb = a;
  this.nf = b;
  this.zg = c;
  delete this.yd;
  delete this.xd
};
ke.prototype.Wc = aa("Bb");
function me(a) {
  this.Dg = a
}
me.prototype.H = k;
me.prototype.Bb = k;
me.prototype.O = k;
me.prototype.Yb = k;
function ne(a, b) {
  this.name = a;
  this.value = b
}
ne.prototype.toString = n("name");
var oe = new ne("OFF", Infinity), pe = new ne("SHOUT", 1200), qe = new ne("SEVERE", 1E3), re = new ne("WARNING", 900), se = new ne("INFO", 800), te = new ne("CONFIG", 700), ue = new ne("FINE", 500), ve = new ne("FINEST", 300), we = new ne("ALL", 0);
q = me.prototype;
q.getParent = n("H");
q.Wc = aa("Bb");
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
    a = this.ng(a, b, c);
    b = "log:" + a.nf;
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
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
q.ng = function(a, b, c) {
  var d = new ke(a, "" + b, this.Dg);
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
        var o, r, z = m;
        try {
          o = c.lineNumber || c.qi || "Not available"
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
    d.xd = f
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
  Ae || (Ae = new me(""), ze[""] = Ae, Ae.Wc(te))
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
  this.kg = a;
  this.wd = new Td(this);
  this.uc = new qb
}
B(De, Xd);
q = De.prototype;
q.a = T("goog.ui.media.FlashObject");
q.fh = "window";
q.xe = "#000000";
q.Vf = "sameDomain";
q.Z = function(a, b) {
  this.pb = v(a) ? a : Math.round(a) + "px";
  this.Gd = v(b) ? b : Math.round(b) + "px";
  this.b() && Md(this.b() ? this.b().firstChild : k, this.pb, this.Gd);
  return this
};
q.P = function() {
  De.f.P.call(this);
  var a = this.b(), b;
  b = H ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = H ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = Ga(c, this.fh), d = this.uc.ua(), f = this.uc.X(), g = [], i = 0;i < d.length;i++) {
    var l = Ia(d[i]), o = Ia(f[i]);
    g.push(l + "=" + o)
  }
  b = Ga(b, $d(this), $d(this), "goog-ui-media-flash-object", Ka(this.kg), Ka(g.join("&")), this.xe, this.Vf, c);
  a.innerHTML = b;
  this.pb && this.Gd && this.Z(this.pb, this.Gd);
  P(this.wd, this.b(), ua(fc), ic)
};
q.i = function() {
  this.Af != k && !(0 <= Ra(Jd, this.Af)) && (Q(this.a, "Required flash version not found:" + this.Af), e(Error("Method not supported")));
  var a = this.Ea().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
q.c = function() {
  De.f.c.call(this);
  this.uc = k;
  this.wd.g();
  this.wd = k
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
  b.uc.set("onloadcallback", '__loadFlashObject_callbacks["' + f + '"]()');
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
  this.Q = "_" + Ee();
  this.bd = a;
  this.Ra = b;
  this.Xa = a.Xa
}
B(Ne, L);
q = Ne.prototype;
q.Db = j;
q.qd = m;
q.a = T("cw.net.FlashSocket");
q.N = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.Q);
  a.push("'>")
};
function Oe(a, b, c) {
  "frames" == b ? (a = a.Ra, Pe(a.J), Qe(a.J, c)) : "stillreceiving" == b ? (c = a.Ra, S(c.a, "onstillreceiving"), Pe(c.J)) : "connect" == b ? (c = a.Ra, c.a.info("onconnect"), Pe(c.J), a = c.Nb, c.Nb = k, a.length && (S(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.Zc.mc(a))) : "close" == b ? (a.Db = m, a.g()) : "ioerror" == b ? (a.Db = m, b = a.Ra, Q(b.a, "onioerror: " + G(c)), Re(b.J, m), a.g()) : "securityerror" == b ? (a.Db = m, b = a.Ra, Q(b.a, "onsecurityerror: " + G(c)), 
  Re(b.J, m), a.g()) : e(Error("bad event: " + b))
}
function Se(a) {
  a.qd = j;
  a.Db = m;
  a.g()
}
q.od = function(a, b) {
  try {
    var c = this.Xa.CallFunction(zd("__FC_connect", this.Q, a, b, "<int32/>\n"))
  }catch(d) {
    return ye(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), Se(this)
  }
  '"OK"' != c && e(Error("__FC_connect failed? ret: " + c))
};
q.mc = function(a) {
  try {
    var b = this.Xa.CallFunction(zd("__FC_writeFrames", this.Q, a))
  }catch(c) {
    return ye(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), Se(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (Q(this.a, "Flash no longer knows of " + this.Q + "; disposing."), this.g()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
q.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.Db);
  Ne.f.c.call(this);
  var a = this.Xa;
  delete this.Xa;
  if(this.Db) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(zd("__FC_close", this.Q)))
    }catch(b) {
      ye(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.qd = j
    }
  }
  if(this.qd) {
    a = this.Ra, Q(a.a, "oncrash"), Re(a.J, j)
  }else {
    this.Ra.onclose()
  }
  delete this.Ra;
  delete this.bd.xb[this.Q]
};
function Te(a, b) {
  this.F = a;
  this.Xa = b;
  this.xb = {};
  this.nd = "__FST_" + Ee();
  t[this.nd] = w(this.gg, this);
  var c = b.CallFunction(zd("__FC_setCallbackFunc", this.nd));
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
q.rd = function(a) {
  a = new Ne(this, a);
  return this.xb[a.Q] = a
};
q.eg = function(a, b, c, d) {
  var f = this.xb[a];
  f ? "frames" == b && d ? (Oe(f, "ioerror", "FlashConnector hadError while handling data."), f.g()) : Oe(f, b, c) : Q(this.a, "Cannot dispatch because we have no instance: " + G([a, b, c, d]))
};
q.gg = function(a, b, c, d) {
  try {
    Vc(this.F, this.eg, this, [a, b, c, d])
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
  t[this.nd] = h
};
function Ue(a) {
  this.J = a;
  this.Nb = []
}
B(Ue, L);
q = Ue.prototype;
q.a = T("cw.net.FlashSocketConduit");
q.mc = function(a) {
  this.Nb ? (S(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Nb.push.apply(this.Nb, a)) : (S(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.Zc.mc(a))
};
q.od = function(a, b) {
  this.Zc.od(a, b)
};
q.onclose = function() {
  this.a.info("onclose");
  Re(this.J, m)
};
q.c = function() {
  this.a.info("in disposeInternal.");
  Ue.f.c.call(this);
  this.Zc.g();
  delete this.J
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
  c.xe = "#777777";
  c.Z(300, 30);
  var d = O("minerva-elements");
  d || e(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
  var f = O("minerva-elements-FlashConnectorSwf");
  f || (f = jd("div", {id:"minerva-elements-FlashConnectorSwf"}), d.appendChild(f));
  wb = Me(a.L, c, f);
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
var bf = {Tf:p("<cw.eq.Wildcard>")};
function cf(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function df(a, b, c) {
  var d = fa(a), f = fa(b);
  if(a == bf || b == bf) {
    return j
  }
  if(a != k && "function" == typeof a.U) {
    return c && c.push("running custom equals function on left object"), a.U(b, c)
  }
  if(b != k && "function" == typeof b.U) {
    return c && c.push("running custom equals function on right object"), b.U(a, c)
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
          if(a.Sf == Eb && b.Sf == Eb) {
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
  this.Lg = a;
  this.Pc = b
}
U.prototype.U = function(a, b) {
  return ja(a) && this.constructor == a.constructor && df(this.Pc, a.Pc, b)
};
U.prototype.N = function(a, b) {
  a.push("new ", this.Lg, "(");
  for(var c = "", d = 0;d < this.Pc.length;d++) {
    a.push(c), c = ", ", F(this.Pc[d], a, b)
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
ff.prototype.U = function(a, b) {
  return!(a instanceof ff) ? m : df(gf(this), gf(a), b)
};
ff.prototype.N = function(a, b) {
  a.push("<HelloFrame properties=");
  F(gf(this), a, b);
  a.push(">")
};
function gf(a) {
  return[a.Jb, a.vf, a.Ze, a.zf, a.ic, a.me, a.of, a.mf, a.Rd, a.kf, a.Of, a.Jf, a.Ua, a.Jc]
}
ff.prototype.ca = ef;
ff.prototype.ma = function(a) {
  var b = {};
  b.tnum = this.Jb;
  b.ver = this.vf;
  b.format = this.Ze;
  b["new"] = this.zf;
  b.id = this.ic;
  b.ming = this.me;
  b.pad = this.of;
  b.maxb = this.mf;
  ga(this.Rd) && (b.maxt = this.Rd);
  b.maxia = this.kf;
  b.tcpack = this.Of;
  b.eeds = this.Jf;
  b.sack = this.Ua instanceof yb ? Fe((new hf(this.Ua)).ca()) : this.Ua;
  b.seenack = this.Jc instanceof yb ? Fe((new hf(this.Jc)).ca()) : this.Jc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(za(b), "H")
};
function jf(a) {
  U.call(this, "StringFrame", [a]);
  this.oe = a
}
B(jf, U);
jf.prototype.ca = ef;
jf.prototype.ma = function(a) {
  a.push(this.oe, " ")
};
function kf(a) {
  U.call(this, "CommentFrame", [a]);
  this.$f = a
}
B(kf, U);
kf.prototype.ca = ef;
kf.prototype.ma = function(a) {
  a.push(this.$f, "^")
};
function lf(a) {
  U.call(this, "SeqNumFrame", [a]);
  this.Gf = a
}
B(lf, U);
lf.prototype.ca = ef;
lf.prototype.ma = function(a) {
  a.push("" + this.Gf, "N")
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
  this.ff = a
}
B(nf, U);
nf.prototype.ca = ef;
nf.prototype.ma = function(a) {
  var b = this.ff;
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
  this.xf = a;
  this.we = b
}
B(qf, U);
qf.prototype.ca = ef;
qf.prototype.ma = function(a) {
  a.push(this.xf, "|", "" + Number(this.we), "!")
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
  a instanceof wf ? (this.Gb(b == k ? a.wa : b), xf(this, a.ya), yf(this, a.ob), zf(this, a.la), Af(this, a.Qa), this.mb(a.v), Bf(this, a.R.K()), Cf(this, a.bb)) : a && (c = ("" + a).match(uf)) ? (this.Gb(!!b), xf(this, c[1] || "", j), yf(this, c[2] || "", j), zf(this, c[3] || "", j), Af(this, c[4]), this.mb(c[5] || "", j), Bf(this, c[6] || "", j), Cf(this, c[7] || "", j)) : (this.Gb(!!b), this.R = new Df(k, this, this.wa))
}
q = wf.prototype;
q.ya = "";
q.ob = "";
q.la = "";
q.Qa = k;
q.v = "";
q.bb = "";
q.xg = m;
q.wa = m;
q.toString = function() {
  if(this.qa) {
    return this.qa
  }
  var a = [];
  this.ya && a.push(Ef(this.ya, Ff), ":");
  this.la && (a.push("//"), this.ob && a.push(Ef(this.ob, Ff), "@"), a.push(v(this.la) ? encodeURIComponent(this.la) : k), this.Qa != k && a.push(":", "" + this.Qa));
  this.v && (this.la && "/" != this.v.charAt(0) && a.push("/"), a.push(Ef(this.v, "/" == this.v.charAt(0) ? Gf : Hf)));
  var b = "" + this.R;
  b && a.push("?", b);
  this.bb && a.push("#", Ef(this.bb, If));
  return this.qa = a.join("")
};
q.K = function() {
  var a = this.ya, b = this.ob, c = this.la, d = this.Qa, f = this.v, g = this.R.K(), i = this.bb, l = new wf(k, this.wa);
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
  a.ya = c ? b ? decodeURIComponent(b) : "" : b;
  a.ya && (a.ya = a.ya.replace(/:$/, ""))
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
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.Qa = b) : a.Qa = k
}
q.mb = function(a, b) {
  Jf(this);
  delete this.qa;
  this.v = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function Bf(a, b, c) {
  Jf(a);
  delete a.qa;
  b instanceof Df ? (a.R = b, a.R.te = a, a.R.Gb(a.wa)) : (c || (b = Ef(b, Kf)), a.R = new Df(b, a, a.wa))
}
function Cf(a, b, c) {
  Jf(a);
  delete a.qa;
  a.bb = c ? b ? decodeURIComponent(b) : "" : b
}
function Jf(a) {
  a.xg && e(Error("Tried to modify a read-only Uri"))
}
q.Gb = function(a) {
  this.wa = a;
  this.R && this.R.Gb(a);
  return this
};
function Lf(a) {
  return a instanceof wf ? a.K() : new wf(a, h)
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
  this.Ba = a || k;
  this.te = b || k;
  this.wa = !!c
}
function Of(a) {
  if(!a.o && (a.o = new qb, a.d = 0, a.Ba)) {
    for(var b = a.Ba.split("&"), c = 0;c < b.length;c++) {
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
q.V = function() {
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
q.Ma = function() {
  Of(this);
  return 0 == this.d
};
q.aa = function(a) {
  Of(this);
  a = Pf(this, a);
  return this.o.aa(a)
};
q.qc = function(a) {
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
  if(this.Ba) {
    return this.Ba
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
  return this.Ba = a.join("")
};
function Qf(a) {
  delete a.vb;
  delete a.Ba;
  a.te && delete a.te.qa
}
q.K = function() {
  var a = new Df;
  this.vb && (a.vb = this.vb);
  this.Ba && (a.Ba = this.Ba);
  this.o && (a.o = this.o.K());
  return a
};
function Pf(a, b) {
  var c = "" + b;
  a.wa && (c = c.toLowerCase());
  return c
}
q.Gb = function(a) {
  a && !this.wa && (Of(this), Qf(this), ob(this.o, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.wa = a
};
function Rf(a, b, c, d) {
  this.contentWindow = a;
  this.tc = b;
  this.ne = c;
  this.lg = d
}
Rf.prototype.N = function(a, b) {
  a.push("<XDRFrame frameId=");
  F(this.lg, a, b);
  a.push(", expandedUrl=");
  F(this.tc, a, b);
  a.push(", streams=");
  F(this.ne, a, b);
  a.push(">")
};
function Sf() {
  this.frames = [];
  this.Pd = new qb
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
    if(g = 0 == f.ne.length) {
      g = f.tc;
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
  g = l.K();
  (i = !!f.ya) ? xf(g, f.ya) : i = !!f.ob;
  i ? yf(g, f.ob) : i = !!f.la;
  i ? zf(g, f.la) : i = f.Qa != k;
  var o = f.v;
  if(i) {
    Af(g, f.Qa)
  }else {
    if(i = !!f.v) {
      if("/" != o.charAt(0) && (l.la && !l.v ? o = "/" + o : (l = g.v.lastIndexOf("/"), -1 != l && (o = g.v.substr(0, l + 1) + o))), ".." == o || "." == o) {
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
  i ? g.mb(o) : i = "" !== f.R.toString();
  i ? (l = f.R, l.vb || (l.vb = l.toString() ? decodeURIComponent(l.toString()) : ""), Bf(g, l.vb, h)) : i = !!f.bb;
  i && Cf(g, f.bb);
  f = g.toString();
  g = ("" + t.location).match(uf)[3] || k;
  i = f.match(uf)[3] || k;
  g == i ? (c.a.info("No need to make a real XDRFrame for " + G(b)), c = Sc(new Rf(t, f, [b], k))) : ((g = O("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new Gc, c.Pd.set(d, [i, f, b]), c.a.info("Creating new XDRFrame " + G(d) + "for " + G(b)), c = jd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:f + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = i);
  return c
}
Sf.prototype.ih = function(a) {
  var b = this.Pd.get(a);
  b || e(Error("Unknown frameId " + G(a)));
  this.Pd.remove(b);
  var c = b[0], a = new Rf(O("minerva-xdrframe-" + a).contentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  Mc(c, a)
};
var Vf = new Sf;
t.__XHRTracker_xdrFrameLoaded = w(Vf.ih, Vf);
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
  this.jf = a;
  this.td = [];
  this.Me = !!b;
  this.jg = !!c;
  this.ag = !!d;
  for(b = 0;b < a.length;b++) {
    Oc(a[b], w(this.Ue, this, b, j), w(this.Ue, this, b, m))
  }
  0 == a.length && !this.Me && Mc(this, this.td)
}
B(Zf, Gc);
Zf.prototype.qf = 0;
Zf.prototype.Ue = function(a, b, c) {
  this.qf++;
  this.td[a] = [b, c];
  this.Ja || (this.Me && b ? Mc(this, [a, c]) : this.jg && !b ? this.Ub(c) : this.qf == this.jf.length && Mc(this, this.td));
  this.ag && !b && (c = k);
  return c
};
Zf.prototype.Ub = function(a) {
  Zf.f.Ub.call(this, a);
  E(this.jf, function(a) {
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
  this.gh = a;
  this.lf = b
}
ag.prototype.Md = 0;
ag.prototype.Mc = 0;
ag.prototype.zd = m;
function bg(a) {
  var b = [];
  if(a.zd) {
    return[b, 2]
  }
  var c = a.Md, d = a.gh.responseText;
  for(a.Md = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var f = d.substr(a.Mc, c - a.Mc), f = f.replace(/\r$/, "");
    if(f.length > a.lf) {
      return a.zd = j, [b, 2]
    }
    b.push(f);
    a.Mc = c += 1
  }
  return a.Md - a.Mc - 1 > a.lf ? (a.zd = j, [b, 2]) : [b, 1]
}
;function cg(a, b, c) {
  this.J = b;
  this.na = a;
  this.pd = c
}
B(cg, L);
q = cg.prototype;
q.a = T("cw.net.XHRMaster");
q.Ta = -1;
q.Qd = function(a, b, c) {
  this.pd.__XHRSlave_makeRequest(this.na, a, b, c)
};
q.La = n("Ta");
q.Td = function(a, b) {
  1 != b && ye(this.a, G(this.na) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Pe(this.J);
  Qe(this.J, a)
};
q.Ud = function(a) {
  R(this.a, "ongotheaders_: " + G(a));
  var b = k;
  "Content-Length" in a && (b = Ie(a["Content-Length"]));
  a = this.J;
  R(a.a, a.s() + " got Content-Length: " + b);
  a.za == dg && (b == k && (Q(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), eg(a, 2E3 + 1E3 * (b / 3072)))
};
q.Vd = function(a) {
  1 != a && R(this.a, this.J.s() + "'s XHR's readyState is " + a);
  this.Ta = a;
  2 <= this.Ta && Pe(this.J)
};
q.Sd = function() {
  this.J.g()
};
q.c = function() {
  cg.f.c.call(this);
  delete fg.Fa[this.na];
  this.pd.__XHRSlave_dispose(this.na);
  delete this.pd
};
function gg() {
  this.Fa = {}
}
B(gg, L);
q = gg.prototype;
q.a = T("cw.net.XHRMasterTracker");
q.rd = function(a, b) {
  var c = "_" + Ee(), d = new cg(c, a, b);
  return this.Fa[c] = d
};
q.Td = function(a, b, c) {
  if(I) {
    for(var d = [], f = 0, g = b.length;f < g;f++) {
      d[f] = b[f]
    }
    b = d
  }else {
    b = eb(b)
  }
  (d = this.Fa[a]) ? d.Td(b, c) : ye(this.a, "onframes_: no master for " + G(a))
};
q.Ud = function(a, b) {
  var c = this.Fa[a];
  c ? c.Ud(b) : ye(this.a, "ongotheaders_: no master for " + G(a))
};
q.Vd = function(a, b) {
  var c = this.Fa[a];
  c ? c.Vd(b) : ye(this.a, "onreadystatechange_: no master for " + G(a))
};
q.Sd = function(a) {
  var b = this.Fa[a];
  b ? (delete this.Fa[b.na], b.Sd()) : ye(this.a, "oncomplete_: no master for " + G(a))
};
q.c = function() {
  gg.f.c.call(this);
  for(var a = ua(this.Fa);a.length;) {
    a.pop().g()
  }
  delete this.Fa
};
var fg = new gg;
t.__XHRMaster_onframes = w(fg.Td, fg);
t.__XHRMaster_oncomplete = w(fg.Sd, fg);
t.__XHRMaster_ongotheaders = w(fg.Ud, fg);
t.__XHRMaster_onreadystatechange = w(fg.Vd, fg);
function hg(a, b, c) {
  this.xa = a;
  this.host = b;
  this.port = c
}
function ig(a, b, c) {
  this.host = a;
  this.port = b;
  this.ah = c
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
  this.uf = b;
  this.Va = c;
  this.Ff = d;
  (!(0 == this.xa.indexOf("http://") || 0 == this.xa.indexOf("https://")) || !(0 == this.Va.indexOf("http://") || 0 == this.Va.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.uf.location.href;
  vf(this.xa, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Ff.location.href;
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
mg.prototype.Pe = p(1);
function ng(a) {
  this.Tg = a
}
ng.prototype.N = function(a, b) {
  a.push("<UserContext for ");
  F(this.Tg, a, b);
  a.push(">")
};
function og(a, b, c) {
  this.w = a;
  this.Ug = b ? b : new mg;
  this.F = c ? c : Wc;
  this.kc = new de;
  this.ic = Ee() + Ee();
  this.Sa = new zb;
  this.Jd = new Bb;
  this.lc = k;
  this.dd = [];
  this.Kb = new ng(this);
  J && (this.lc = tc(t, "load", this.Ng, m, this))
}
B(og, L);
q = og.prototype;
q.a = T("cw.net.ClientStream");
q.gf = new yb(-1, []);
q.hf = new yb(-1, []);
q.Cg = 50;
q.Bg = 1048576;
q.Xd = k;
q.Wd = k;
q.onreset = k;
q.sf = k;
q.ke = m;
q.$d = m;
q.h = 1;
q.qe = -1;
q.j = k;
q.A = k;
q.cc = k;
q.le = 0;
q.tf = 0;
q.Ef = 0;
q.N = function(a, b) {
  a.push("<ClientStream id=");
  F(this.ic, a, b);
  a.push(", state=", "" + this.h);
  a.push(", primary=");
  F(this.j, a, b);
  a.push(", secondary=");
  F(this.A, a, b);
  a.push(", resetting=");
  F(this.cc, a, b);
  a.push(">")
};
function pg(a) {
  var b = [-1];
  a.j && b.push(a.j.Eb);
  a.A && b.push(a.A.Eb);
  return Math.max.apply(Math.max, b)
}
function qg(a) {
  if(!(3 > a.h)) {
    var b = 0 != a.Sa.z.V(), c = Cb(a.Jd), d = !c.U(a.hf) && !(a.j && c.U(a.j.Ab) || a.A && c.U(a.A.Ab)), f = pg(a);
    if((b = b && f < a.Sa.$a) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.j.Ob ? (S(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.j, c != d.Ab && (!d.Ga && !d.D.length && rg(d), d.D.push(new hf(c)), d.Ab = c)), b && sg(a.j, a.Sa, f + 1), a.j.Da()) : a.A == k ? a.ke ? (S(a.a, "tryToSend_: creating secondary to send " + g), a.A = tg(a, m), b && sg(a.A, a.Sa, f + 1), a.A.Da()) : (S(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.$d = j) : S(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
q.Ng = function() {
  this.lc = k;
  if(this.j && this.j.yb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.j;
    a.fd = j;
    a.g()
  }
  this.A && this.A.yb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.A, a.fd = j, a.g())
};
function ug(a, b) {
  var c;
  ga(c) || (c = j);
  3 < a.h && e(Error("sendString: Can't send in state " + a.h));
  c && !/^([ -~]*)$/.test(b) && e(Error("sendString: string has illegal chars: " + G(b)));
  a.Sa.append(b);
  qg(a)
}
function tg(a, b) {
  var c;
  a.w instanceof kg ? c = 1 == a.Ug.Pe() ? dg : vg : a.w instanceof ig ? c = wg : e(Error("Don't support endpoint " + G(a.w)));
  a.qe += 1;
  c = new xg(a.F, a, a.qe, c, a.w, b);
  S(a.a, "Created: " + c.s());
  a.kc.add(c);
  return c
}
function yg(a, b, c) {
  var d = new zg(a.F, a, b, c);
  S(a.a, "Created: " + d.s() + ", delay=" + b + ", times=" + c);
  a.kc.add(d);
  return d
}
function Ag(a, b) {
  a.kc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  R(a.a, "Offline: " + b.s());
  a.le = b.Pa ? a.le + b.Pa : 0;
  1 <= a.le && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.Kb, "stream penalty reached limit", m), a.g());
  if(3 < a.h) {
    4 == a.h && b.Rf ? (R(a.a, "Disposing because resettingTransport_ is done."), a.g()) : R(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    var c;
    var d;
    c = b instanceof zg;
    if(!c && b.fd) {
      var f = J ? Yf ? [0, 1] : [9, 20] : [0, 0];
      c = f[0];
      d = f[1];
      S(a.a, "getDelayForNextTransport_: " + G({delay:c, times:d}))
    }else {
      if(d = b.Ae(), b == a.j ? d ? f = ++a.tf : c || (f = a.tf = 0) : d ? f = ++a.Ef : c || (f = a.Ef = 0), c || !f) {
        d = c = 0, S(a.a, "getDelayForNextTransport_: " + G({count:f, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(f, 3), i = Math.floor(4E3 * Math.random()) - 2E3, l = Math.max(0, b.Nf - b.re);
        d = (c = Math.max(0, g + i - l)) ? 1 : 0;
        S(a.a, "getDelayForNextTransport_: " + G({count:f, base:g, variance:i, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    f = c[0];
    c = c[1];
    b == a.j ? (a.j = k, c ? a.j = yg(a, f, c) : (f = pg(a), a.j = tg(a, j), sg(a.j, a.Sa, f + 1)), a.j.Da()) : b == a.A && (a.A = k, c ? (a.A = yg(a, f, c), a.A.Da()) : qg(a))
  }
}
q.reset = function(a) {
  3 < this.h && e(Error("reset: Can't send reset in state " + this.h));
  this.h = 4;
  this.j && this.j.Ob ? (this.a.info("reset: Sending ResetFrame over existing primary."), Bg(this.j, a), this.j.Da()) : (this.j && (R(this.a, "reset: Disposing primary before sending ResetFrame."), this.j.g()), this.A && (R(this.a, "reset: Disposing secondary before sending ResetFrame."), this.A.g()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.cc = tg(this, m), Bg(this.cc, a), this.cc.Da());
  this.onreset && this.onreset.call(this.Kb, a, j)
};
function Cg(a, b, c, d) {
  var f;
  f = a.Jd;
  for(var g = a.Cg, i = a.Bg, l = [], o = m, r = 0, z = c.length;r < z;r++) {
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
  f.Ya.Ma() && f.Ya.clear();
  f = [l, o];
  c = f[0];
  f = f[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(i = c[g], a.Xd && a.Xd.call(a.Kb, i), 4 == a.h || a.sa) {
        return
      }
    }
  }
  d || qg(a);
  if(!(4 == a.h || a.sa) && f) {
    ye(b.a, b.s() + "'s peer caused rwin overflow."), b.g()
  }
}
q.Je = function(a) {
  ye(this.a, "Failed to start " + G(this) + "; error was " + G(a.message));
  this.g()
};
q.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.h && e(Error("ClientStream.start: " + G(this) + " already started"));
  this.Wd && this.Wd(this);
  this.h = 2;
  if(this.w instanceof jg) {
    var a = Uf(this.w.xa, this), b = Uf(this.w.Va, this), a = $f([a, b]);
    Nc(a, w(this.ig, this));
    Pc(a, w(this.Je, this))
  }else {
    if(this.w instanceof hg) {
      if(xb) {
        this.Le()
      }else {
        var a = Ye(this.F, this.w.xa), c = this;
        Nc(a, function(a) {
          xb || (xb = new Te(c.F, a));
          return k
        });
        Nc(a, w(this.Le, this));
        Pc(a, w(this.Je, this))
      }
    }else {
      Dg(this)
    }
  }
};
q.ig = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].tc, f = a[1].tc;
  this.dd.push(a[0]);
  this.dd.push(a[1]);
  this.w = new kg(d, b, f, c);
  Dg(this)
};
q.Le = function() {
  this.w = new ig(this.w.host, this.w.port, xb);
  Dg(this)
};
function Dg(a) {
  a.h = 3;
  a.j = tg(a, j);
  sg(a.j, a.Sa, k);
  a.j.Da()
}
q.c = function() {
  this.a.info(G(this) + " in disposeInternal.");
  this.h = 5;
  for(var a = this.kc.X(), b = 0;b < a.length;b++) {
    a[b].g()
  }
  for(a = 0;a < this.dd.length;a++) {
    db(this.dd[a].ne, this)
  }
  J && this.lc && (wc(this.lc), this.lc = k);
  this.sf && this.sf.call(this.Kb);
  delete this.kc;
  delete this.j;
  delete this.A;
  delete this.cc;
  delete this.Kb;
  og.f.c.call(this)
};
var dg = 1, vg = 2, wg = 3;
function xg(a, b, c, d, f, g) {
  this.F = a;
  this.C = b;
  this.Jb = c;
  this.za = d;
  this.w = f;
  this.D = [];
  this.sb = g;
  this.Ob = !this.yb();
  this.Fb = this.za != dg;
  this.Xf = w(this.Zg, this)
}
B(xg, L);
q = xg.prototype;
q.a = T("cw.net.ClientTransport");
q.r = k;
q.re = k;
q.Nf = k;
q.Qc = k;
q.Ga = m;
q.$c = m;
q.Ab = k;
q.vc = 0;
q.Eb = -1;
q.Oc = -1;
q.Rf = m;
q.fd = m;
q.Pa = 0;
q.Xb = m;
q.N = function(a) {
  a.push("<ClientTransport #", "" + this.Jb, ", becomePrimary=", "" + this.sb, ">")
};
q.s = function() {
  return(this.sb ? "Prim. T#" : "Sec. T#") + this.Jb
};
q.Ae = function() {
  return!(!this.Xb && this.vc)
};
q.yb = function() {
  return this.za == dg || this.za == vg
};
function Eg(a, b) {
  ib(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Cg(a.C, a, b, !a.Fb)
}
function Fg(a, b, c) {
  try {
    var d = tf(b);
    a.vc += 1;
    R(a.a, a.s() + " RECV " + G(d));
    var f;
    1 == a.vc && !d.U(lg) && a.yb() ? (Q(a.a, a.s() + " is closing soon because got bad preamble: " + G(d)), f = j) : f = m;
    if(f) {
      return j
    }
    if(d instanceof jf) {
      if(!/^([ -~]*)$/.test(d.oe)) {
        return a.Xb = j
      }
      a.Oc += 1;
      c.push([a.Oc, d.oe])
    }else {
      if(d instanceof hf) {
        var g = a.C, i = d.Ua;
        g.gf = i;
        var l = g.Sa, o = i.qb, c = m;
        o > l.$a && (c = j);
        for(var r = Ab(l).concat(), d = 0;d < r.length;d++) {
          var z = r[d];
          if(z > o) {
            break
          }
          var s = l.z.get(z)[1];
          l.z.remove(z);
          l.n -= s
        }
        for(d = 0;d < i.lb.length;d++) {
          var x = i.lb[d];
          x > l.$a && (c = j);
          l.z.aa(x) && (s = l.z.get(x)[1], l.z.remove(x), l.n -= s)
        }
        l.z.Ma() && l.z.clear();
        if(c) {
          return Q(a.a, a.s() + " is closing soon because got bad SackFrame"), a.Xb = j
        }
      }else {
        if(d instanceof lf) {
          a.Oc = d.Gf - 1
        }else {
          if(d instanceof nf) {
            a.C.hf = d.ff
          }else {
            if(d instanceof pf) {
              return S(a.a, a.s() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof sf) {
              return a.Xb = j, "stream_attach_failure" == d.reason ? a.Pa += 1 : "acked_unsent_strings" == d.reason && (a.Pa += 0.5), S(a.a, a.s() + " is closing soon because got " + G(d)), j
            }
            if(!(d instanceof kf)) {
              if(d instanceof of) {
                var A = a.C, aj = !a.Fb;
                S(A.a, "Stream is now confirmed to exist at server.");
                A.ke = j;
                A.$d && !aj && (A.$d = m, qg(A))
              }else {
                c.length && (Eg(a, c), cb(c));
                if(d instanceof qf) {
                  var kd = a.C;
                  kd.onreset && kd.onreset.call(kd.Kb, d.xf, d.we);
                  kd.g();
                  return j
                }
                e(Error(a.s() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(Pg) {
    return Pg instanceof V || e(Pg), Q(a.a, a.s() + " is closing soon because got InvalidFrame: " + G(b)), a.Xb = j
  }
  return m
}
function Qe(a, b) {
  a.$c = j;
  try {
    for(var c = m, d = [], f = 0, g = b.length;f < g;f++) {
      if(a.sa) {
        a.a.info(a.s() + " returning from loop because we're disposed.");
        return
      }
      if(c = Fg(a, b[f], d)) {
        break
      }
    }
    d.length && Eg(a, d);
    a.$c = m;
    a.D.length && a.Da();
    c && (S(a.a, a.s() + " closeSoon is true.  Frames were: " + G(b)), a.g())
  }finally {
    a.$c = m
  }
}
q.Zg = function() {
  Q(this.a, this.s() + " timed out due to lack of connection or no data being received.");
  this.g()
};
function Gg(a) {
  a.Qc != k && (a.F.L.clearTimeout(a.Qc), a.Qc = k)
}
function eg(a, b) {
  Gg(a);
  b = Math.round(b);
  a.Qc = a.F.L.setTimeout(a.Xf, b);
  R(a.a, a.s() + "'s receive timeout set to " + b + " ms.")
}
function Pe(a) {
  a.za != dg && (a.za == wg || a.za == vg ? eg(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.za)))
}
function rg(a) {
  var b = new ff;
  b.Jb = a.Jb;
  b.vf = 2;
  b.Ze = 2;
  a.C.ke || (b.zf = j);
  b.ic = a.C.ic;
  b.me = a.Fb;
  b.me && (b.of = 4096);
  b.mf = 3E5;
  b.kf = a.Fb ? Math.floor(10) : 0;
  b.Of = m;
  a.sb && (b.Jf = k, b.Rd = Math.floor((a.Fb ? 358E4 : 25E3) / 1E3));
  b.Ua = Cb(a.C.Jd);
  b.Jc = a.C.gf;
  a.D.push(b);
  a.Ab = b.Ua
}
function Re(a, b) {
  b && (a.Pa += 0.5);
  a.g()
}
q.Da = function() {
  this.Ga && !this.Ob && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.$c) {
    S(this.a, this.s() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ga;
    this.Ga = j;
    !a && !this.D.length && rg(this);
    for(a = 0;a < this.D.length;a++) {
      R(this.a, this.s() + " SEND " + G(this.D[a]))
    }
    if(this.yb()) {
      for(var a = [], b = 0, c = this.D.length;b < c;b++) {
        this.D[b].ma(a), a.push("\n")
      }
      this.D = [];
      a = a.join("");
      b = this.sb ? this.w.xa : this.w.Va;
      this.r = fg.rd(this, this.sb ? this.w.uf : this.w.Ff);
      this.re = this.F.L === Ec ? y() : this.F.L.getTime();
      this.r.Qd(b, "POST", a);
      eg(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Fb ? 0 : this.sb ? 25E3 : 0))
    }else {
      if(this.za == wg) {
        a = [];
        b = 0;
        for(c = this.D.length;b < c;b++) {
          a.push(this.D[b].ca())
        }
        this.D = [];
        this.r ? this.r.mc(a) : (b = this.w, this.r = new Ue(this), this.r.Zc = b.ah.rd(this.r), this.re = this.F.L === Ec ? y() : this.F.L.getTime(), this.r.od(b.host, b.port), this.r.sa || (this.r.mc(a), this.r.sa || eg(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.za))
      }
    }
  }
};
function sg(a, b, c) {
  !a.Ga && !a.D.length && rg(a);
  for(var c = Math.max(c, a.Eb + 1), b = b.Qe(c), c = 0, d = b.length;c < d;c++) {
    var f = b[c], g = f[0], f = f[1];
    (-1 == a.Eb || a.Eb + 1 != g) && a.D.push(new lf(g));
    a.D.push(new jf(f));
    a.Eb = g
  }
}
q.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  xg.f.c.call(this);
  this.Nf = this.F.L === Ec ? y() : this.F.L.getTime();
  this.D = [];
  Gg(this);
  this.r && this.r.g();
  var a = this.C;
  this.C = k;
  Ag(a, this)
};
function Bg(a, b) {
  !a.Ga && !a.D.length && rg(a);
  a.D.push(new qf(b, j));
  a.Rf = j
}
function zg(a, b, c, d) {
  this.F = a;
  this.C = b;
  this.Ie = c;
  this.Ce = d
}
B(zg, L);
q = zg.prototype;
q.Ga = m;
q.Ob = m;
q.zc = k;
q.Ab = k;
q.a = T("cw.net.DoNothingTransport");
function Hg(a) {
  a.zc = a.F.L.setTimeout(function() {
    a.zc = k;
    a.Ce--;
    a.Ce ? Hg(a) : a.g()
  }, a.Ie)
}
q.Da = function() {
  this.Ga && !this.Ob && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ga = j;
  Hg(this)
};
q.N = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.Ie, ">")
};
q.yb = p(m);
q.s = p("Wast. T");
q.Ae = p(m);
q.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  zg.f.c.call(this);
  this.zc != k && this.F.L.clearTimeout(this.zc);
  var a = this.C;
  this.C = k;
  Ag(a, this)
};
function Ig(a, b) {
  a.setAttribute("role", b);
  a.si = b
}
;function Jg() {
}
var Kg;
ea(Jg);
q = Jg.prototype;
q.wc = function() {
};
q.i = function(a) {
  var b = a.Ea().i("div", Lg(this, a).join(" "), a.ba);
  this.be(a, b);
  return b
};
q.Vb = function(a) {
  return a
};
q.Tb = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(H && !K("7")) {
      var d = Mg(Yc(a), b);
      d.push(b);
      ra(c ? Zc : $c, a).apply(k, d)
    }else {
      c ? Zc(a, b) : $c(a, b)
    }
  }
};
q.af = function(a) {
  a.fc == k && (a.fc = "rtl" == (Ld(a.q ? a.e : a.M.p.body, "direction") || ((a.q ? a.e : a.M.p.body).currentStyle ? (a.q ? a.e : a.M.p.body).currentStyle.direction : k) || (a.q ? a.e : a.M.p.body).style && (a.q ? a.e : a.M.p.body).style.direction));
  a.fc && this.Hb(a.b(), j);
  a.isEnabled() && this.Vc(a, a.Lb)
};
q.be = function(a, b) {
  a.isEnabled() || this.$(b, 1, j);
  a.h & 8 && this.$(b, 8, j);
  a.S & 16 && this.$(b, 16, !!(a.h & 16));
  a.S & 64 && this.$(b, 64, !!(a.h & 64))
};
q.Sc = function(a, b) {
  Sd(a, !b, !H && !Nb)
};
q.Hb = function(a, b) {
  this.Tb(a, this.t() + "-rtl", b)
};
q.cf = function(a) {
  var b;
  return a.S & 32 && (b = a.cb()) ? vd(b) : m
};
q.Vc = function(a, b) {
  var c;
  if(a.S & 32 && (c = a.cb())) {
    if(!b && a.h & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.h & 32 && a.Te()
    }
    vd(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
q.ie = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.ja = function(a, b, c) {
  var d = a.b();
  if(d) {
    var f = Ng(this, b);
    f && this.Tb(a, f, c);
    this.$(d, b, c)
  }
};
q.$ = function(a, b, c) {
  Kg || (Kg = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Kg[b]) && a.setAttribute("aria-" + b, c)
};
q.Tc = function(a, b) {
  var c = this.Vb(a);
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
function Lg(a, b) {
  var c = a.t(), d = [c], f = a.t();
  f != c && d.push(f);
  c = b.h;
  for(f = [];c;) {
    var g = c & -c;
    f.push(Ng(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.ta) && d.push.apply(d, c);
  H && !K("7") && d.push.apply(d, Mg(d));
  return d
}
function Mg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  E([], function(d) {
    ab(d, ra(bb, a)) && (!b || bb(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Ng(a, b) {
  if(!a.ze) {
    var c = a.t();
    a.ze = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.ze[b]
}
;function Og(a, b) {
  a || e(Error("Invalid class name " + a));
  la(b) || e(Error("Invalid decorator function " + b))
}
var Qg = {};
function Rg(a, b, c, d, f) {
  if(!H && (!J || !K("525"))) {
    return j
  }
  if(Qb && f) {
    return Sg(a)
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
  return Sg(a)
}
function Sg(a) {
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
function Tg(a) {
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
;function Ug(a, b) {
  a && Vg(this, a, b)
}
B(Ug, Cc);
q = Ug.prototype;
q.e = k;
q.Hc = k;
q.Ld = k;
q.Ic = k;
q.Oa = -1;
q.Na = -1;
var Wg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Xg = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Yg = H || 
J && K("525");
q = Ug.prototype;
q.rg = function(a) {
  if(J && (17 == this.Oa && !a.ctrlKey || 18 == this.Oa && !a.altKey)) {
    this.Na = this.Oa = -1
  }
  Yg && !Rg(a.keyCode, this.Oa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Na = I ? Tg(a.keyCode) : a.keyCode
};
q.sg = function() {
  this.Na = this.Oa = -1
};
q.handleEvent = function(a) {
  var b = a.Ca, c, d;
  H && "keypress" == a.type ? (c = this.Na, d = 13 != c && 27 != c ? b.keyCode : 0) : J && "keypress" == a.type ? (c = this.Na, d = 0 <= b.charCode && 63232 > b.charCode && Sg(c) ? b.charCode : 0) : Nb ? (c = this.Na, d = Sg(c) ? b.keyCode : 0) : (c = b.keyCode || this.Na, d = b.charCode || 0, Qb && 63 == d && 224 == c && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in Wg ? f = Wg[c] : 25 == c && a.shiftKey && (f = 9) : g && g in Xg && (f = Xg[g]);
  a = f == this.Oa;
  this.Oa = f;
  b = new Zg(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.g()
  }
};
q.b = n("e");
function Vg(a, b, c) {
  a.Ic && a.detach();
  a.e = b;
  a.Hc = M(a.e, "keypress", a, c);
  a.Ld = M(a.e, "keydown", a.rg, c, a);
  a.Ic = M(a.e, "keyup", a.sg, c, a)
}
q.detach = function() {
  this.Hc && (wc(this.Hc), wc(this.Ld), wc(this.Ic), this.Ic = this.Ld = this.Hc = k);
  this.e = k;
  this.Na = this.Oa = -1
};
q.c = function() {
  Ug.f.c.call(this);
  this.detach()
};
function Zg(a, b, c, d) {
  d && this.Zb(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
B(Zg, kc);
function W(a, b, c) {
  Xd.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ma(b);
      if(d = Qg[d]) {
        break
      }
      b = b.f ? b.f.constructor : k
    }
    b = d ? la(d.Ka) ? d.Ka() : new d : k
  }
  this.l = b;
  this.Uc(a)
}
B(W, Xd);
q = W.prototype;
q.ba = k;
q.h = 0;
q.S = 39;
q.jd = 255;
q.Sg = 0;
q.Lb = j;
q.ta = k;
q.Fd = j;
q.hd = m;
q.Hg = k;
q.cb = function() {
  return this.l.cb(this)
};
function $g(a, b) {
  b && (a.ta ? bb(a.ta, b) || a.ta.push(b) : a.ta = [b], a.l.Tb(a, b, j))
}
q.Tb = function(a, b) {
  b ? $g(this, a) : a && this.ta && (db(this.ta, a), 0 == this.ta.length && (this.ta = k), this.l.Tb(this, a, m))
};
q.i = function() {
  var a = this.l.i(this);
  this.e = a;
  var b = this.Hg || this.l.wc();
  b && Ig(a, b);
  this.hd || this.l.Sc(a, m);
  this.Lb || this.l.ie(a, m)
};
q.Vb = function() {
  return this.l.Vb(this.b())
};
q.P = function() {
  W.f.P.call(this);
  this.l.af(this);
  if(this.S & -2 && (this.Fd && ah(this, j), this.S & 32)) {
    var a = this.cb();
    if(a) {
      var b = this.zb || (this.zb = new Ug);
      Vg(b, a);
      P(P(P(ae(this), b, "key", this.We), a, "focus", this.pg), a, "blur", this.Te)
    }
  }
};
function ah(a, b) {
  var c = ae(a), d = a.b();
  b ? (P(P(P(P(c, d, "mouseover", a.Cc), d, "mousedown", a.Ac), d, "mouseup", a.Xe), d, "mouseout", a.Bc), H && P(c, d, "dblclick", a.Ve)) : (Vd(Vd(Vd(Vd(c, d, "mouseover", a.Cc), d, "mousedown", a.Ac), d, "mouseup", a.Xe), d, "mouseout", a.Bc), H && Vd(c, d, "dblclick", a.Ve))
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
q.Oe = function() {
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
q.Hb = function(a) {
  W.f.Hb.call(this, a);
  var b = this.b();
  b && this.l.Hb(b, a)
};
q.Sc = function(a) {
  this.hd = a;
  var b = this.b();
  b && this.l.Sc(b, a)
};
q.ie = function(a, b) {
  if(b || this.Lb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.l.ie(c, a);
    this.isEnabled() && this.l.Vc(this, a);
    this.Lb = a;
    return j
  }
  return m
};
q.isEnabled = function() {
  return!(this.h & 1)
};
function bh(a, b) {
  ch(a, 2, b) && a.ja(2, b)
}
q.Kd = function() {
  return!!(this.h & 4)
};
q.setActive = function(a) {
  ch(this, 4, a) && this.ja(4, a)
};
q.fe = function(a) {
  ch(this, 8, a) && this.ja(8, a)
};
q.ja = function(a, b) {
  this.S & a && b != !!(this.h & a) && (this.l.ja(this, a, b), this.h = b ? this.h | a : this.h & ~a)
};
function X(a, b) {
  return!!(a.jd & b) && !!(a.S & b)
}
function ch(a, b, c) {
  return!!(a.S & b) && !!(a.h & b) != c && (!(a.Sg & b) || a.dispatchEvent(Zd(b, c))) && !a.sa
}
q.Cc = function(a) {
  !dh(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && bh(this, j)
};
q.Bc = function(a) {
  !dh(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(m), X(this, 2) && bh(this, m))
};
function dh(a, b) {
  return!!a.relatedTarget && rd(b, a.relatedTarget)
}
q.Ac = function(a) {
  if(this.isEnabled() && (X(this, 2) && bh(this, j), mc(a) && (!J || !Qb || !a.ctrlKey))) {
    X(this, 4) && this.setActive(j), this.l.cf(this) && this.cb().focus()
  }
  !this.hd && mc(a) && (!J || !Qb || !a.ctrlKey) && a.preventDefault()
};
q.Xe = function(a) {
  this.isEnabled() && (X(this, 2) && bh(this, j), this.Kd() && this.ib(a) && X(this, 4) && this.setActive(m))
};
q.Ve = function(a) {
  this.isEnabled() && this.ib(a)
};
q.ib = function(a) {
  if(X(this, 16)) {
    var b = !(this.h & 16);
    ch(this, 16, b) && this.ja(16, b)
  }
  X(this, 8) && this.fe(j);
  X(this, 64) && (b = !(this.h & 64), ch(this, 64, b) && this.ja(64, b));
  b = new hc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.Yd = a.Yd);
  return this.dispatchEvent(b)
};
q.pg = function() {
  X(this, 32) && ch(this, 32, j) && this.ja(32, j)
};
q.Te = function() {
  X(this, 4) && this.setActive(m);
  X(this, 32) && ch(this, 32, m) && this.ja(32, m)
};
q.We = function(a) {
  return this.Lb && this.isEnabled() && this.Ed(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
q.Ed = function(a) {
  return 13 == a.keyCode && this.ib(a)
};
la(W) || e(Error("Invalid component class " + W));
la(Jg) || e(Error("Invalid renderer class " + Jg));
var eh = ma(W);
Qg[eh] = Jg;
Og("goog-control", function() {
  return new W(k)
});
function fh() {
}
B(fh, Jg);
ea(fh);
q = fh.prototype;
q.wc = p("button");
q.$ = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : fh.f.$.call(this, a, b, c)
};
q.i = function(a) {
  var b = fh.f.i.call(this, a), c = a.xc();
  c && this.he(b, c);
  (c = a.yc()) && this.Yc(b, c);
  a.S & 16 && this.$(b, 16, !!(a.h & 16));
  return b
};
q.yc = da;
q.Yc = da;
q.xc = function(a) {
  return a.title
};
q.he = function(a, b) {
  a && (a.title = b || "")
};
q.t = p("goog-button");
function gh() {
}
B(gh, fh);
ea(gh);
q = gh.prototype;
q.wc = function() {
};
q.i = function(a) {
  a.q && m != a.Fd && ah(a, m);
  a.Fd = m;
  a.jd &= -256;
  a.q && a.h & 32 && e(Error("Component already rendered"));
  a.h & 32 && a.ja(32, m);
  a.S &= -33;
  return a.Ea().i("button", {"class":Lg(this, a).join(" "), disabled:!a.isEnabled(), title:a.xc() || "", value:a.yc() || ""}, a.Oe() || "")
};
q.af = function(a) {
  P(ae(a), a.b(), "click", a.ib)
};
q.Sc = da;
q.Hb = da;
q.cf = function(a) {
  return a.isEnabled()
};
q.Vc = da;
q.ja = function(a, b, c) {
  gh.f.ja.call(this, a, b, c);
  if((a = a.b()) && 1 == b) {
    a.disabled = c
  }
};
q.yc = function(a) {
  return a.value
};
q.Yc = function(a, b) {
  a && (a.value = b)
};
q.$ = da;
function hh(a, b, c) {
  W.call(this, a, b || gh.Ka(), c)
}
B(hh, W);
q = hh.prototype;
q.yc = n("Pf");
q.Yc = function(a) {
  this.Pf = a;
  this.l.Yc(this.b(), a)
};
q.xc = n("Lf");
q.he = function(a) {
  this.Lf = a;
  this.l.he(this.b(), a)
};
q.c = function() {
  hh.f.c.call(this);
  delete this.Pf;
  delete this.Lf
};
q.P = function() {
  hh.f.P.call(this);
  if(this.S & 32) {
    var a = this.cb();
    a && P(ae(this), a, "keyup", this.Ed)
  }
};
q.Ed = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.ib(a) : 32 == a.keyCode
};
Og("goog-button", function() {
  return new hh(k)
});
function ih() {
}
B(ih, fh);
ea(ih);
q = ih.prototype;
q.i = function(a) {
  var b = {"class":"goog-inline-block " + Lg(this, a).join(" "), title:a.xc() || ""}, b = a.Ea().i("div", b, jh(this, a.ba, a.Ea()));
  this.be(a, b);
  return b
};
q.wc = p("button");
q.be = function(a, b) {
  a.isEnabled() || this.$(b, 1, j);
  a.h & 8 && this.$(b, 8, j);
  a.S & 16 && this.$(b, 16, j);
  a.h & 64 && this.$(b, 64, j)
};
q.Vb = function(a) {
  return a && a.firstChild.firstChild
};
function jh(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.t() + "-outer-box"), c.i("div", "goog-inline-block " + (a.t() + "-inner-box"), b))
}
q.t = p("goog-custom-button");
function kh(a, b, c) {
  hh.call(this, a, b || ih.Ka(), c)
}
B(kh, hh);
Og("goog-custom-button", function() {
  return new kh(k)
});
var lh = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function mh(a) {
  var b = {}, a = "" + a, c = "#" == a.charAt(0) ? a : "#" + a;
  if(nh.test(c)) {
    return b.Ec = oh(c), b.type = "hex", b
  }
  a: {
    var d = a.match(ph);
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
    return b.Ec = qh(c[0], c[1], c[2]), b.type = "rgb", b
  }
  if(lh && (c = lh[a.toLowerCase()])) {
    return b.Ec = c, b.type = "named", b
  }
  e(Error(a + " is not a valid color string"))
}
var rh = /#(.)(.)(.)/;
function oh(a) {
  nh.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  4 == a.length && (a = a.replace(rh, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function sh(a) {
  a = oh(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function qh(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || 0 > a || 255 < a || isNaN(b) || 0 > b || 255 < b || isNaN(c) || 0 > c || 255 < c) && e(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = th(a.toString(16));
  b = th(b.toString(16));
  c = th(c.toString(16));
  return"#" + a + b + c
}
var nh = /^#(?:[0-9a-f]{3}){1,2}$/i, ph = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function th(a) {
  return 1 == a.length ? "0" + a : a
}
;function uh() {
}
uh.prototype.nc = k;
var vh;
function wh() {
}
B(wh, uh);
function xh(a) {
  return(a = yh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function zh(a) {
  var b = {};
  yh(a) && (b[0] = j, b[1] = j);
  return b
}
wh.prototype.Hd = k;
function yh(a) {
  if(!a.Hd && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Hd = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Hd
}
vh = new wh;
function Ah(a) {
  this.headers = new qb;
  this.Mb = a || k
}
B(Ah, Cc);
Ah.prototype.a = T("goog.net.XhrIo");
var Bh = /^https?$/i;
q = Ah.prototype;
q.Ha = m;
q.k = k;
q.ed = k;
q.Nd = "";
q.ef = "";
q.$b = "";
q.vd = m;
q.Fc = m;
q.Id = m;
q.gb = m;
q.ad = 0;
q.nb = k;
q.Bf = "";
q.eh = m;
q.send = function(a, b, c, d) {
  this.k && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Nd = a;
  this.$b = "";
  this.ef = b;
  this.vd = m;
  this.Ha = j;
  this.k = this.Mb ? xh(this.Mb) : xh(vh);
  this.ed = this.Mb ? this.Mb.nc || (this.Mb.nc = zh(this.Mb)) : vh.nc || (vh.nc = zh(vh));
  this.k.onreadystatechange = w(this.rf, this);
  try {
    R(this.a, Ch(this, "Opening Xhr")), this.Id = j, this.k.open(b, a, j), this.Id = m
  }catch(f) {
    R(this.a, Ch(this, "Error opening Xhr: " + f.message));
    Dh(this, f);
    return
  }
  var a = c || "", g = this.headers.K();
  d && ob(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.aa("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  ob(g, function(a, b) {
    this.k.setRequestHeader(b, a)
  }, this);
  this.Bf && (this.k.responseType = this.Bf);
  "withCredentials" in this.k && (this.k.withCredentials = this.eh);
  try {
    this.nb && (Ec.clearTimeout(this.nb), this.nb = k), 0 < this.ad && (R(this.a, Ch(this, "Will abort after " + this.ad + "ms if incomplete")), this.nb = Ec.setTimeout(w(this.$g, this), this.ad)), R(this.a, Ch(this, "Sending request")), this.Fc = j, this.k.send(a), this.Fc = m
  }catch(i) {
    R(this.a, Ch(this, "Send error: " + i.message)), Dh(this, i)
  }
};
q.$g = function() {
  "undefined" != typeof ba && this.k && (this.$b = "Timed out after " + this.ad + "ms, aborting", R(this.a, Ch(this, this.$b)), this.dispatchEvent("timeout"), this.abort(8))
};
function Dh(a, b) {
  a.Ha = m;
  a.k && (a.gb = j, a.k.abort(), a.gb = m);
  a.$b = b;
  Eh(a);
  Fh(a)
}
function Eh(a) {
  a.vd || (a.vd = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
q.abort = function() {
  this.k && this.Ha && (R(this.a, Ch(this, "Aborting")), this.Ha = m, this.gb = j, this.k.abort(), this.gb = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Fh(this))
};
q.c = function() {
  this.k && (this.Ha && (this.Ha = m, this.gb = j, this.k.abort(), this.gb = m), Fh(this, j));
  Ah.f.c.call(this)
};
q.rf = function() {
  !this.Id && !this.Fc && !this.gb ? this.Fg() : Gh(this)
};
q.Fg = function() {
  Gh(this)
};
function Gh(a) {
  if(a.Ha && "undefined" != typeof ba) {
    if(a.ed[1] && 4 == a.La() && 2 == Hh(a)) {
      R(a.a, Ch(a, "Local request error detected and ignored"))
    }else {
      if(a.Fc && 4 == a.La()) {
        Ec.setTimeout(w(a.rf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.La()) {
          R(a.a, Ch(a, "Request complete"));
          a.Ha = m;
          var b = Hh(a), c;
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
              b = ("" + a.Nd).match(uf)[1] || k, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !Bh.test(b ? b.toLowerCase() : "")
            }
            c = b
          }
          if(c) {
            a.dispatchEvent("complete"), a.dispatchEvent("success")
          }else {
            var d;
            try {
              d = 2 < a.La() ? a.k.statusText : ""
            }catch(f) {
              R(a.a, "Can not get status: " + f.message), d = ""
            }
            a.$b = d + " [" + Hh(a) + "]";
            Eh(a)
          }
          Fh(a)
        }
      }
    }
  }
}
function Fh(a, b) {
  if(a.k) {
    var c = a.k, d = a.ed[0] ? da : k;
    a.k = k;
    a.ed = k;
    a.nb && (Ec.clearTimeout(a.nb), a.nb = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(f) {
      ye(a.a, "Problem encountered resetting onreadystatechange: " + f.message)
    }
  }
}
q.Kd = function() {
  return!!this.k
};
q.La = function() {
  return this.k ? this.k.readyState : 0
};
function Hh(a) {
  try {
    return 2 < a.La() ? a.k.status : -1
  }catch(b) {
    return Q(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.k && 4 == this.La() ? this.k.getResponseHeader(a) : h
};
function Ch(a, b) {
  return b + " [" + a.ef + " " + a.Nd + " " + Hh(a) + "]"
}
;var Ih = !(H || J && !K("420+"));
function Jh(a, b) {
  this.bd = a;
  this.na = b
}
B(Jh, L);
q = Jh.prototype;
q.r = k;
q.Ta = -1;
q.Se = m;
q.Ye = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Kh(a) {
  var b = bg(a.Fe), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.na, c, b), 1 != b && a.g()) : a.g()
}
q.ug = function() {
  Kh(this);
  if(!this.sa) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.na);
    this.g()
  }
};
q.Kg = function() {
  var a = t.parent;
  if(a) {
    this.Ta = this.r.La();
    if(2 <= this.Ta && !this.Se) {
      for(var b = new qb, c = this.Ye.length;c--;) {
        var d = this.Ye[c];
        try {
          b.set(d, this.r.k.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.V() && (this.Se = j, a.__XHRMaster_ongotheaders(this.na, ub(b)), this.sa)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.na, this.Ta);
    Ih && 3 == this.Ta && Kh(this)
  }else {
    this.g()
  }
};
q.Qd = function(a, b, c) {
  this.r = new Ah;
  M(this.r, "readystatechange", w(this.Kg, this));
  M(this.r, "complete", w(this.ug, this));
  this.r.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Fe = new ag(this.r.k, 1048576)
};
q.c = function() {
  Jh.f.c.call(this);
  delete this.Fe;
  this.r && this.r.g();
  delete this.bd.hc[this.na];
  delete this.bd
};
function Lh() {
  this.hc = {}
}
B(Lh, L);
Lh.prototype.Ag = function(a, b, c, d) {
  var f = new Jh(this, a);
  this.hc[a] = f;
  f.Qd(b, c, d)
};
Lh.prototype.fg = function(a) {
  (a = this.hc[a]) && a.g()
};
Lh.prototype.c = function() {
  Lh.f.c.call(this);
  for(var a = ua(this.hc);a.length;) {
    a.pop().g()
  }
  delete this.hc
};
var Mh = new Lh;
t.__XHRSlave_makeRequest = w(Mh.Ag, Mh);
t.__XHRSlave_dispose = w(Mh.fg, Mh);
var Nh = T("cw.net.demo");
function Oh() {
}
Oh.prototype.Pe = function() {
  return Boolean(Number((new wf(document.location)).R.get("httpStreaming", "0"))) ? 2 : 1
};
function Ph(a) {
  this.p = a
}
var Qh = /\s*;\s*/;
q = Ph.prototype;
q.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && J) {
    var b = "COOKIES_TEST_" + y();
    Rh.set(b, "1");
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
  for(var c = a + "=", d = (this.p.cookie || "").split(Qh), f = 0, g;g = d[f];f++) {
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
  return Sh(this).keys
};
q.X = function() {
  return Sh(this).Qf
};
q.Ma = function() {
  return!this.p.cookie
};
q.V = function() {
  return!this.p.cookie ? 0 : (this.p.cookie || "").split(Qh).length
};
q.aa = function(a) {
  return ga(this.get(a))
};
q.qc = function(a) {
  for(var b = Sh(this).Qf, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return j
    }
  }
  return m
};
q.clear = function() {
  for(var a = Sh(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b])
  }
};
function Sh(a) {
  for(var a = (a.p.cookie || "").split(Qh), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), -1 == d ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{keys:b, Qf:c}
}
var Rh = new Ph(document);
Rh.Nh = 3950;
function Th() {
  this.yf = y()
}
var Uh = new Th;
Th.prototype.set = aa("yf");
Th.prototype.reset = function() {
  this.set(y())
};
Th.prototype.get = n("yf");
function Vh(a) {
  this.Ig = a || "";
  this.Rg = Uh
}
Vh.prototype.Hf = j;
Vh.prototype.Pg = j;
Vh.prototype.Og = j;
Vh.prototype.If = m;
function Wh(a) {
  return 10 > a ? "0" + a : "" + a
}
function Xh(a, b) {
  var c = (a.Kf - b) / 1E3, d = c.toFixed(3), f = 0;
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
function Yh(a) {
  Vh.call(this, a)
}
B(Yh, Vh);
Yh.prototype.If = j;
function Zh(a) {
  this.Jg = w(this.Uf, this);
  this.Ne = new Yh;
  this.bf = this.Ne.Hf = m;
  this.e = a;
  this.hg = this.e.ownerDocument || this.e.document;
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
Zh.prototype.Uf = function(a) {
  var b = 100 >= this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight, c = this.hg.createElement("div");
  c.className = "logmsg";
  var d = this.Ne, f;
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
  g.push(d.Ig, " ");
  if(d.Hf) {
    var i = new Date(a.Kf);
    g.push("[", Wh(i.getFullYear() - 2E3) + Wh(i.getMonth() + 1) + Wh(i.getDate()) + " " + Wh(i.getHours()) + ":" + Wh(i.getMinutes()) + ":" + Wh(i.getSeconds()) + "." + Wh(Math.floor(i.getMilliseconds() / 10)), "] ")
  }
  d.Pg && g.push("[", Qa(Xh(a, d.Rg.get())), "s] ");
  d.Og && g.push("[", Ka(a.zg), "] ");
  g.push('<span class="', f, '">', Ja(Qa(Ka(a.nf))));
  d.If && a.yd && g.push("<br>", Ja(Qa(a.xd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  b && (this.e.scrollTop = this.e.scrollHeight)
};
Zh.prototype.clear = function() {
  this.e.innerHTML = ""
};
function $h(a, b, c, d, f, g) {
  6 == arguments.length ? this.setTransform(a, b, c, d, f, g) : (0 != arguments.length && e(Error("Insufficient matrix parameters")), this.da = this.ga = 1, this.Y = this.ea = this.fa = this.ha = 0)
}
q = $h.prototype;
q.K = function() {
  return new $h(this.da, this.Y, this.ea, this.ga, this.fa, this.ha)
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
  var d = new $h, f = Math.cos(a), a = Math.sin(a), b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f), c = this.da, d = this.ea;
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
q.U = function(a) {
  return this == a ? j : !a ? m : this.da == a.da && this.ea == a.ea && this.fa == a.fa && this.Y == a.Y && this.ga == a.ga && this.ha == a.ha
};
function Y(a, b) {
  this.e = a;
  this.va = b;
  this.sd = m
}
B(Y, Cc);
q = Y.prototype;
q.va = k;
q.e = k;
q.Mf = k;
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
  this.pe = c;
  this.va.de(this, c);
  this.fill = d;
  this.va.ce(this, d)
}
B(Z, Y);
Z.prototype.fill = k;
Z.prototype.pe = k;
Z.prototype.mg = n("fill");
Z.prototype.og = n("pe");
function ai(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
B(ai, Z);
function bi(a, b) {
  Y.call(this, a, b)
}
B(bi, Y);
function ci(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
B(ci, Z);
function di(a, b) {
  Y.call(this, a, b)
}
B(di, Y);
function ei(a, b) {
  Y.call(this, a, b)
}
B(ei, bi);
ei.prototype.clear = function() {
  pd(this.b())
};
ei.prototype.Z = function(a, b) {
  fi(this.b(), {width:a, height:b})
};
function gi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
B(gi, ci);
function hi(a, b) {
  Y.call(this, a, b)
}
B(hi, di);
hi.prototype.Z = function(a, b) {
  fi(this.b(), {width:a, height:b})
};
function ii() {
}
;function ji(a, b) {
  this.ra = a;
  this.ac = b || 1
}
B(ji, ii);
function ki() {
  this.pb = 1;
  this.ra = "black"
}
;function li() {
  this.B = [];
  this.d = [];
  this.pa = []
}
li.prototype.tb = k;
li.prototype.T = k;
li.prototype.Ib = j;
var mi = [2, 2, 6, 6, 0];
q = li.prototype;
q.clear = function() {
  this.B.length = 0;
  this.d.length = 0;
  this.pa.length = 0;
  delete this.tb;
  delete this.T;
  delete this.Ib;
  return this
};
q.moveTo = function(a, b) {
  0 == this.B[this.B.length - 1] ? this.pa.length -= 2 : (this.B.push(0), this.d.push(1));
  this.pa.push(a, b);
  this.T = this.tb = [a, b];
  return this
};
q.lineTo = function(a) {
  var b = this.B[this.B.length - 1];
  b == k && e(Error("Path cannot start with lineTo"));
  1 != b && (this.B.push(1), this.d.push(0));
  for(b = 0;b < arguments.length;b += 2) {
    var c = arguments[b], d = arguments[b + 1];
    this.pa.push(c, d)
  }
  this.d[this.d.length - 1] += b / 2;
  this.T = [c, d];
  return this
};
q.Ee = function(a) {
  var b = this.B[this.B.length - 1];
  b == k && e(Error("Path cannot start with curve"));
  2 != b && (this.B.push(2), this.d.push(0));
  for(b = 0;b < arguments.length;b += 6) {
    var c = arguments[b + 4], d = arguments[b + 5];
    this.pa.push(arguments[b], arguments[b + 1], arguments[b + 2], arguments[b + 3], c, d)
  }
  this.d[this.d.length - 1] += b / 6;
  this.T = [c, d];
  return this
};
q.close = function() {
  var a = this.B[this.B.length - 1];
  a == k && e(Error("Path cannot start with close"));
  4 != a && (this.B.push(4), this.d.push(1), this.T = this.tb);
  return this
};
q.arcTo = function(a, b, c, d) {
  var f = this.T[0] - a * Math.cos(af(c)) + a * Math.cos(af(c + d)), g = this.T[1] - b * Math.sin(af(c)) + b * Math.sin(af(c + d));
  this.B.push(3);
  this.d.push(1);
  this.pa.push(a, b, c, d, f, g);
  this.Ib = m;
  this.T = [f, g];
  return this
};
q.Wf = function(a, b, c, d) {
  for(var f = this.T[0] - a * Math.cos(af(c)), g = this.T[1] - b * Math.sin(af(c)), i = af(d), d = Math.ceil(2 * (Math.abs(i) / Math.PI)), i = i / d, c = af(c), l = 0;l < d;l++) {
    var o = Math.cos(c), r = Math.sin(c), z = 4 / 3 * Math.sin(i / 2) / (1 + Math.cos(i / 2)), s = f + (o - z * r) * a, x = g + (r + z * o) * b, c = c + i, o = Math.cos(c), r = Math.sin(c);
    this.Ee(s, x, f + (o + z * r) * a, g + (r - z * o) * b, f + o * a, g + r * b)
  }
  return this
};
function ni(a, b) {
  for(var c = a.pa, d = 0, f = 0, g = a.B.length;f < g;f++) {
    var i = a.B[f], l = mi[i] * a.d[f];
    b(i, c.slice(d, d + l));
    d += l
  }
}
q.K = function() {
  var a = new this.constructor;
  a.B = this.B.concat();
  a.d = this.d.concat();
  a.pa = this.pa.concat();
  a.tb = this.tb && this.tb.concat();
  a.T = this.T && this.T.concat();
  a.Ib = this.Ib;
  return a
};
var oi = {};
oi[0] = li.prototype.moveTo;
oi[1] = li.prototype.lineTo;
oi[4] = li.prototype.close;
oi[2] = li.prototype.Ee;
oi[3] = li.prototype.Wf;
function pi(a) {
  if(a.Ib) {
    return a.K()
  }
  var b = new li;
  ni(a, function(a, d) {
    oi[a].apply(b, d)
  });
  return b
}
li.prototype.Ma = function() {
  return 0 == this.B.length
};
function qi(a, b, c, d, f) {
  Xd.call(this, f);
  this.width = a;
  this.height = b;
  this.ka = c || k;
  this.Rb = d || k
}
B(qi, Xd);
q = qi.prototype;
q.G = k;
q.Ia = 0;
q.Za = 0;
q.Re = function() {
  return this.W()
};
q.W = function() {
  return this.q ? Od(this.b()) : ka(this.width) && ka(this.height) ? new N(this.width, this.height) : k
};
function ri(a) {
  var b = a.W();
  return b ? b.width / (a.ka ? new N(a.ka, a.Rb) : a.W()).width : 0
}
;function si(a, b, c, d, f) {
  qi.call(this, a, b, c, d, f);
  this.He = {};
  this.ue = J && !K(526);
  this.eb = new Td(this)
}
var ti;
B(si, qi);
function ui(a, b, c) {
  a = a.M.p.createElementNS("http://www.w3.org/2000/svg", b);
  c && fi(a, c);
  return a
}
function fi(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
q = si.prototype;
q.rb = function(a, b) {
  (b || this.G).b().appendChild(a.b())
};
q.ce = function(a, b) {
  var c = a.b();
  b instanceof ji ? (c.setAttribute("fill", b.ra), c.setAttribute("fill-opacity", b.ac)) : c.setAttribute("fill", "none")
};
q.de = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.ra);
    var d = b.pb;
    v(d) && -1 != d.indexOf("px") ? c.setAttribute("stroke-width", parseFloat(d) / ri(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
q.i = function() {
  var a = ui(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = ui(this, "g");
  this.ud = ui(this, "defs");
  this.G = new ei(b, this);
  a.appendChild(this.ud);
  a.appendChild(b);
  this.e = a;
  if(this.ka || this.Ia || this.Za) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.ue ? this.cd() : this.b().setAttribute("viewBox", this.Ia + " " + this.Za + " " + (this.ka ? this.ka + " " + this.Rb : ""))
  }
};
q.cd = function() {
  if(this.q && (this.ka || this.Ia || !this.Za)) {
    var a = this.W();
    if(0 == a.width) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.Ia, c = -this.Za, d = a.width / this.ka, a = a.height / this.Rb;
      this.G.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
q.Z = function(a, b) {
  Md(this.b(), a, b)
};
q.W = function() {
  if(!I) {
    return this.q ? Od(this.b()) : si.f.W.call(this)
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
  pd(this.ud);
  this.He = {}
};
q.rc = function(a, b, c, d, f, g, i) {
  a = ui(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new gi(a, this, f, g);
  this.rb(f, i);
  return f
};
q.drawImage = function(a, b, c, d, f, g) {
  a = ui(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new hi(a, this);
  this.rb(f, g);
  return f
};
q.P = function() {
  var a = this.W();
  si.f.P.call(this);
  a || this.dispatchEvent("resize");
  if(this.ue) {
    var a = this.width, b = this.height;
    "string" == typeof a && -1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%") && P(this.eb, vi(), Fc, this.cd);
    this.cd()
  }
};
q.ab = function() {
  si.f.ab.call(this);
  this.ue && Vd(this.eb, vi(), Fc, this.cd)
};
q.c = function() {
  delete this.He;
  delete this.ud;
  delete this.G;
  si.f.c.call(this)
};
function vi() {
  ti || (ti = new Dc(400), ti.start());
  return ti
}
;function wi() {
  return this.e = this.va.M.b(this.Q) || this.e
}
function xi(a, b) {
  this.Q = a.id;
  Y.call(this, a, b)
}
B(xi, bi);
xi.prototype.b = wi;
xi.prototype.clear = function() {
  pd(this.b())
};
xi.prototype.Z = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  this.va.G != this && (c.coordorigin = "0 0")
};
function yi(a, b, c, d, f, g, i, l) {
  this.Q = a.id;
  Z.call(this, a, b, i, l)
}
B(yi, ci);
yi.prototype.b = wi;
function zi(a, b) {
  this.Q = a.id;
  Y.call(this, a, b)
}
B(zi, di);
zi.prototype.b = wi;
zi.prototype.Z = function(a, b) {
  var c = this.b().style;
  c.width = Ai(a) + "px";
  c.height = Ai(b) + "px"
};
function Bi(a, b, c, d, f) {
  qi.call(this, a, b, c, d, f);
  this.eb = new Td(this)
}
B(Bi, qi);
var Ci = document.documentMode && 8 <= document.documentMode;
function Ai(a) {
  return Math.round(100 * (parseFloat(a.toString()) - 0.5))
}
function $(a) {
  return Math.round(100 * parseFloat(a.toString()))
}
function Di(a, b) {
  var c = a.M.createElement("g_vml_:" + b);
  c.id = "goog_" + Sa++;
  return c
}
function Ei(a) {
  Ci && a.q && (a.b().innerHTML = a.b().innerHTML)
}
Bi.prototype.rb = function(a, b) {
  (b || this.G).b().appendChild(a.b());
  Ei(this)
};
Bi.prototype.ce = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    "fill" == f.tagName && c.removeChild(f)
  }
  b instanceof ji ? "transparent" == b.ra ? c.filled = m : 1 != b.ac ? (c.filled = j, d = Di(this, "fill"), d.opacity = Math.round(100 * b.ac) + "%", d.color = b.ra, c.appendChild(d)) : (c.filled = j, c.fillcolor = b.ra) : c.filled = m;
  Ei(this)
};
Bi.prototype.de = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = j;
    var d = b.pb, d = v(d) && -1 == d.indexOf("px") ? parseFloat(d) : d * ri(this), f = c.getElementsByTagName("stroke")[0];
    1 > d ? (f = f || Di(this, "stroke"), f.opacity = d, f.ti = "1px", f.color = b.ra, c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.ra, c.strokeweight = d + "px")
  }else {
    c.stroked = m
  }
  Ei(this)
};
function Fi(a, b, c, d, f) {
  var g = a.style;
  g.position = "absolute";
  g.left = Ai(b) + "px";
  g.top = Ai(c) + "px";
  g.width = $(d) + "px";
  g.height = $(f) + "px";
  "shape" == a.tagName && (a.coordsize = $(d) + " " + $(f))
}
try {
  eval("document.namespaces")
}catch(Gi) {
}
q = Bi.prototype;
q.i = function() {
  var a = this.M.p;
  a.namespaces.g_vml_ || (Ci ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}");
  var a = this.width, b = this.height, c = this.M.i("div", {style:"overflow:hidden;position:relative;width:" + (v(a) && Fa(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (v(b) && Fa(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = Di(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.ka ? $(this.ka) + " " + $(this.Rb) : $(a) + " " + $(b);
  d.coordorigin = ga(this.Ia) ? $(this.Ia) + " " + $(this.Za) : "0 0";
  c.appendChild(d);
  this.G = new xi(d, this);
  M(c, "resize", w(this.Dd, this))
};
q.Dd = function() {
  var a = Od(this.b()), b = this.G.b().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.b();a && a.currentStyle && "none" != a.currentStyle.display;) {
      a = a.parentNode
    }
    a && a.currentStyle && P(this.eb, a, "propertychange", this.Dd)
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
q.rc = function(a, b, c, d, f, g, i) {
  var l = Di(this, "oval");
  Fi(l, a - c, b - d, 2 * c, 2 * d);
  a = new yi(l, this, 0, 0, 0, 0, f, g);
  this.rb(a, i);
  return a
};
q.drawImage = function(a, b, c, d, f, g) {
  var i = Di(this, "image");
  Fi(i, a, b, c, d);
  Ci ? i.src = f : i.setAttribute("src", f);
  a = new zi(i, this);
  this.rb(a, g);
  return a
};
q.P = function() {
  Bi.f.P.call(this);
  this.Dd();
  Ei(this)
};
q.c = function() {
  this.G = k;
  Bi.f.c.call(this)
};
function Hi(a) {
  Y.call(this, k, a);
  this.O = []
}
B(Hi, bi);
Hi.prototype.clear = function() {
  this.O.length && (this.O.length = 0, Ii(this.va))
};
Hi.prototype.Z = function() {
};
Hi.prototype.appendChild = function(a) {
  this.O.push(a)
};
Hi.prototype.Aa = function() {
  for(var a = 0, b = this.O.length;a < b;a++) {
    Ji(this.va, this.O[a])
  }
};
function Ki(a, b, c, d, f, g, i, l) {
  Z.call(this, a, b, i, l);
  this.bg = c;
  this.cg = d;
  this.Cf = f;
  this.Df = g;
  this.v = new li;
  this.v.clear();
  this.v.moveTo(this.bg + this.Cf * Math.cos(af(0)), this.cg + this.Df * Math.sin(af(0)));
  this.v.arcTo(this.Cf, this.Df, 0, 360);
  this.v.close();
  this.Gg = new Li(k, b, this.v, i, l)
}
B(Ki, ci);
Ki.prototype.Aa = function(a) {
  this.Gg.Aa(a)
};
function Li(a, b, c, d, f) {
  Z.call(this, a, b, d, f);
  this.mb(c)
}
B(Li, ai);
Li.prototype.Sb = m;
Li.prototype.mb = function(a) {
  this.v = a.Ib ? a : pi(a);
  this.Sb && Ii(this.va)
};
Li.prototype.Aa = function(a) {
  this.Sb = j;
  a.beginPath();
  ni(this.v, function(b, c) {
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
function Mi(a, b, c, d, f, g, i) {
  Y.call(this, a, b);
  this.hh = c;
  this.jh = d;
  this.ve = f;
  this.Cd = g;
  this.Qg = i
}
B(Mi, di);
Mi.prototype.Sb = m;
Mi.prototype.Z = function(a, b) {
  this.ve = a;
  this.Cd = b;
  this.Sb && Ii(this.va)
};
Mi.prototype.Aa = function(a) {
  this.$e ? (this.ve && this.Cd && a.drawImage(this.$e, this.hh, this.jh, this.ve, this.Cd), this.Sb = j) : (a = new Image, a.onload = w(this.qg, this, a), a.src = this.Qg)
};
Mi.prototype.qg = function(a) {
  this.$e = a;
  Ii(this.va)
};
function Ni(a, b, c, d, f) {
  qi.call(this, a, b, c, d, f)
}
B(Ni, qi);
q = Ni.prototype;
q.ce = function() {
  Ii(this)
};
q.de = function() {
  Ii(this)
};
function Oi(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.Mf ? b.Mf.K() : new $h, f = d.fa, g = d.ha;
  (f || g) && c.translate(f, g);
  (d = d.Y) && c.rotate(Math.asin(d))
}
q.i = function() {
  var a = this.M.i("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Pb = this.M.i("canvas");
  a.appendChild(this.Pb);
  this.yg = this.G = new Hi(this);
  this.Mg = 0;
  Pi(this)
};
q.getContext = function() {
  this.b() || this.i();
  this.ub || (this.ub = this.Pb.getContext("2d"), this.ub.save());
  return this.ub
};
q.Z = function(a, b) {
  this.width = a;
  this.height = b;
  Pi(this);
  Ii(this)
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
function Pi(a) {
  Md(a.b(), a.width, a.height);
  var b = a.W();
  b && (Md(a.Pb, b.width, b.height), a.Pb.width = b.width, a.Pb.height = b.height, a.ub = k)
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
function Ii(a) {
  if(!a.ri && a.q) {
    a.reset();
    if(a.ka) {
      var b = a.W();
      a.getContext().scale(b.width / a.ka, b.height / a.Rb)
    }
    (a.Ia || a.Za) && a.getContext().translate(-a.Ia, -a.Za);
    Oi(a, a.G);
    a.G.Aa(a.ub);
    a.getContext().restore()
  }
}
function Ji(a, b) {
  var c = a.getContext();
  Oi(a, b);
  if(!b.mg || !b.og) {
    b.Aa(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof ji) {
        0 != d.ac && (c.globalAlpha = d.ac, c.fillStyle = d.ra, b.Aa(c), c.fill(), c.globalAlpha = 1)
      }else {
        var f = c.createLinearGradient(d.mi(), d.oi(), d.ni(), d.pi());
        f.addColorStop(0, d.ki());
        f.addColorStop(1, d.li());
        c.fillStyle = f;
        b.Aa(c);
        c.fill()
      }
    }
    if(d = b.pe) {
      b.Aa(c), c.strokeStyle = d.ra, d = d.pb, v(d) && -1 != d.indexOf("px") && (d = parseFloat(d) / ri(a)), c.lineWidth = d, c.stroke()
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
  this.q && !this.Mg && !(b != this.G && b != this.yg) && Ji(this, a)
};
q.rc = function(a, b, c, d, f, g, i) {
  a = new Ki(k, this, a, b, c, d, f, g);
  this.append(a, i);
  return a
};
q.drawImage = function(a, b, c, d, f, g) {
  a = new Mi(k, this, a, b, c, d, f);
  this.append(a, g);
  return a
};
q.c = function() {
  this.ub = k;
  Ni.f.c.call(this)
};
q.P = function() {
  var a = this.W();
  Ni.f.P.call(this);
  a || (Pi(this), this.dispatchEvent("resize"));
  Ii(this)
};
function Qi(a) {
  this.z = [];
  Ri(this, a)
}
B(Qi, Cc);
q = Qi.prototype;
q.Wa = k;
q.ae = k;
function Ri(a, b) {
  b && (E(b, function(a) {
    this.gc(a, m)
  }, a), gb(a.z, b))
}
q.Bd = n("Wa");
q.Qe = function() {
  return fb(this.z)
};
q.Xc = function(a) {
  a != this.Wa && (this.gc(this.Wa, m), this.Wa = a, this.gc(a, j));
  this.dispatchEvent("select")
};
q.Ad = function() {
  return this.Wa ? Xa(this.z, this.Wa) : -1
};
q.ge = function(a) {
  this.Xc(this.z[a] || k)
};
q.clear = function() {
  cb(this.z);
  this.Wa = k
};
q.c = function() {
  Qi.f.c.call(this);
  delete this.z;
  this.Wa = k
};
q.gc = function(a, b) {
  a && ("function" == typeof this.ae ? this.ae(a, b) : "function" == typeof a.fe && a.fe(b))
};
function Si() {
}
B(Si, Jg);
ea(Si);
var Ti = 0;
Si.prototype.i = function(a) {
  var b = Lg(this, a);
  return a.Ea().i("div", b ? b.join(" ") : k, Ui(this, a.ba, a.Re(), a.Ea()))
};
function Ui(a, b, c, d) {
  for(var f = [], g = 0, i = 0;g < c.height;g++) {
    for(var l = [], o = 0;o < c.width;o++) {
      var r = b && b[i++];
      l.push(Vi(a, r, d))
    }
    f.push(d.i("tr", a.t() + "-row", l))
  }
  return a.De(f, d)
}
Si.prototype.De = function(a, b) {
  var c = b.i("table", this.t() + "-table", b.i("tbody", this.t() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Ig(c, "grid");
  return c
};
function Vi(a, b, c) {
  a = c.i("td", {"class":a.t() + "-cell", id:a.t() + "-cell-" + Ti++}, b);
  Ig(a, "gridcell");
  return a
}
Si.prototype.Tc = function(a, b) {
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
          f.push(Vi(this, l, g));
          f.length == i && (l = g.i("tr", this.t() + "-row", f), c.appendChild(l), f.length = 0)
        }
        if(0 < f.length) {
          for(;f.length < i;) {
            f.push(Vi(this, "", g))
          }
          l = g.i("tr", this.t() + "-row", f);
          c.appendChild(l)
        }
      }
    }
    Sd(a, j, I)
  }
};
function Wi(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && bb(Yc(c), a.t() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function Xi(a, b, c, d) {
  c && (c = c.parentNode, a = a.t() + "-cell-hover", d ? Zc(c, a) : $c(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id))
}
Si.prototype.t = p("goog-palette");
function Yi(a, b, c) {
  W.call(this, a, b || Si.Ka(), c)
}
B(Yi, W);
q = Yi.prototype;
q.n = k;
q.fb = -1;
q.I = k;
q.c = function() {
  Yi.f.c.call(this);
  this.I && (this.I.g(), this.I = k);
  this.n = k
};
q.Uc = function(a) {
  Yi.f.Uc.call(this, a);
  Zi(this);
  this.I ? (this.I.clear(), Ri(this.I, a)) : (this.I = new Qi(a), this.I.ae = w(this.gc, this), P(ae(this), this.I, "select", this.tg));
  this.fb = -1
};
q.Oe = p(k);
q.Cc = function(a) {
  Yi.f.Cc.call(this, a);
  var b = Wi(this.l, this, a.target);
  if((!b || !a.relatedTarget || !rd(b, a.relatedTarget)) && b != $i(this)) {
    a = this.ba, bj(this, a ? Xa(a, b) : -1)
  }
};
q.Bc = function(a) {
  Yi.f.Bc.call(this, a);
  var b = Wi(this.l, this, a.target);
  (!b || !a.relatedTarget || !rd(b, a.relatedTarget)) && b == $i(this) && Xi(this.l, this, b, m)
};
q.Ac = function(a) {
  Yi.f.Ac.call(this, a);
  if(this.Kd() && (a = Wi(this.l, this, a.target), a != $i(this))) {
    var b = this.ba;
    bj(this, b ? Xa(b, a) : -1)
  }
};
q.ib = function() {
  var a = $i(this);
  return a ? (this.Xc(a), this.dispatchEvent("action")) : m
};
q.We = function(a) {
  var b = this.ba, b = b ? b.length : 0, c = this.n.width;
  if(0 == b || !this.isEnabled()) {
    return m
  }
  if(13 == a.keyCode || 32 == a.keyCode) {
    return this.ib(a)
  }
  if(36 == a.keyCode) {
    return bj(this, 0), j
  }
  if(35 == a.keyCode) {
    return bj(this, b - 1), j
  }
  var d = 0 > this.fb ? this.Ad() : this.fb;
  switch(a.keyCode) {
    case 37:
      -1 == d && (d = b);
      if(0 < d) {
        return bj(this, d - 1), a.preventDefault(), j
      }
      break;
    case 39:
      if(d < b - 1) {
        return bj(this, d + 1), a.preventDefault(), j
      }
      break;
    case 38:
      -1 == d && (d = b + c - 1);
      if(d >= c) {
        return bj(this, d - c), a.preventDefault(), j
      }
      break;
    case 40:
      if(-1 == d && (d = -c), d < b - c) {
        return bj(this, d + c), a.preventDefault(), j
      }
  }
  return m
};
q.tg = function() {
};
q.Re = n("n");
q.Z = function(a, b) {
  this.b() && e(Error("Component already rendered"));
  this.n = ka(a) ? new N(a, b) : a;
  Zi(this)
};
function $i(a) {
  var b = a.ba;
  return b && b[a.fb]
}
function bj(a, b) {
  b != a.fb && (cj(a, a.fb, m), a.fb = b, cj(a, b, j))
}
q.Ad = function() {
  return this.I ? this.I.Ad() : -1
};
q.Bd = function() {
  return this.I ? this.I.Bd() : k
};
q.ge = function(a) {
  this.I && this.I.ge(a)
};
q.Xc = function(a) {
  this.I && this.I.Xc(a)
};
function cj(a, b, c) {
  if(a.b()) {
    var d = a.ba;
    d && 0 <= b && b < d.length && Xi(a.l, a, d[b], c)
  }
}
q.gc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.l.t() + "-cell-selected";
    b ? Zc(c, d) : $c(c, d)
  }
};
function Zi(a) {
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
;function dj(a, b, c) {
  this.pc = a || [];
  Yi.call(this, k, b || Si.Ka(), c);
  this.pc = this.pc;
  this.Lc = k;
  this.Tc(ej(this))
}
B(dj, Yi);
dj.prototype.Lc = k;
function fj(a) {
  var b = gj(hj);
  a.Lc || (a.Lc = Za(a.pc, function(a) {
    return gj(a)
  }));
  a.ge(b ? Xa(a.Lc, b) : -1)
}
function ej(a) {
  return Za(a.pc, function(a) {
    var c = this.Ea().i("div", {"class":this.l.t() + "-colorswatch", style:"background-color:" + a});
    c.title = "#" == a.charAt(0) ? "RGB (" + sh(a).join(", ") + ")" : a;
    return c
  }, a)
}
function gj(a) {
  if(a) {
    try {
      return mh(a).Ec
    }catch(b) {
    }
  }
  return k
}
;var ij, jj, kj, lj, mj, nj = T("whiteboard.logger");
window.onerror = function(a, b, c) {
  ye(nj, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function oj() {
}
oj.prototype.Wg = function(a) {
  this.C = a;
  ug(this.C, "subprotocol:whiteboard")
};
oj.prototype.Vg = function(a, b) {
  nj.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  pj = k
};
oj.prototype.Xg = function(a) {
  var a = ya(a), b = a[0], c = a[1];
  "Point" == b ? ij.rc(c.x, c.y, 5, 5, new ki, new ji(c.color), h) : "ClearBoard" == b ? (ij.g(), qj()) : Q(nj, "Strange message from server: " + G(a))
};
oj.prototype.reset = function(a) {
  nj.info("resetting with reason: " + a);
  this.C.reset(a)
};
var pj = k, rj = new Uc(t.window);
function sj() {
  pj && (pj.reset("idle timeout fired"), pj = k)
}
var tj = k;
function uj() {
  tj != k && rj.L.clearTimeout(tj);
  pj && (tj = rj.L.setTimeout(sj, 2592E5))
}
M(window, ["click", "focus", "keydown", "keypress"], uj, j);
function vj() {
  ij.g();
  qj();
  var a = pj;
  nj.info("Telling server to clear the board.");
  ug(a.C, za(["ClearBoard", k]))
}
function wj(a) {
  var b = new kc(a), a = b.offsetX, b = b.offsetY;
  ij.rc(a, b, 5, 5, new ki, new ji(jj), h);
  var c = pj, d = jj;
  nj.info("Telling server about circle at: " + a + ", " + b + " with color " + d);
  ug(c.C, za(["Point", {x:a, y:b, color:d}]))
}
function qj() {
  var a;
  a = H && !K("9") ? new Bi(800, 600, h, h, h) : J && (!K("420") || Ob) ? new Ni(800, 600, h, h, h) : new si(800, 600, h, h, h);
  a.i();
  kj = O("drawArea");
  be(a, kj);
  ij = a
}
var hj = "#E06666";
function xj(a) {
  var b;
  (a = a.target.Bd()) ? (a = a.style[Ua("background-color")] || "", b = gj(a)) : b = k;
  b || (b = hj);
  jj = b;
  Rh.set("whiteboard_defaultColor", b);
  a = O("whiteboard-cp-value");
  v("background-color") ? Kd(a, b, "background-color") : ta("background-color", ra(Kd, a));
  a = O("whiteboard-cp-value");
  a.title = b;
  b = mh(b).Ec;
  sd(a, b);
  b = sh(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = qh(b[0], b[1], b[2]);
  v("color") ? Kd(a, b, "color") : ta("color", ra(Kd, a))
}
function yj() {
  lj = (new wf(document.location)).R;
  if(mj = Boolean(Number(lj.get("logging", "0")))) {
    Ce().Wc(we);
    var a = new Zh(document.getElementById("log"));
    if(j != a.bf) {
      var b = Ce(), c = a.Jg;
      b.Yb || (b.Yb = []);
      b.Yb.push(c);
      a.bf = j
    }
  }else {
    Ce().Wc(oe)
  }
  nj.info("Logger works.");
  (a = Rh.get("whiteboard_defaultColor")) && (hj = a);
  jj = hj;
  b = O("whiteboard-controls-left");
  a = O("whiteboard-controls-right");
  c = jd("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  od(b, c);
  c = jd("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  od(b, c);
  b = new dj("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.Z(8);
  be(b, O("whiteboard-cp"));
  M(b, "action", xj);
  fj(b);
  xj({target:b});
  b = new kh("Clear board");
  $g(b, "clear-board-button");
  be(b, a);
  M(b, "action", vj);
  a = O("drawAreaOverlay");
  Sd(a, j);
  M(a, "click", wj, m);
  qj();
  a = new Oh;
  pj = new oj;
  uj();
  c = (new wf(document.location)).R;
  b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    Q(Nh, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new wf(document.location);
  b ? b = new hg("/_minerva/", c.la, t.__demo_mainSocketPort) : (d ? (b = t.__demo_shared_domain, v(b) || e(Error("domain was " + G(b) + "; expected a string.")), c = c.K(), zf(c, "_____random_____." + b)) : c = c.K(), c.mb("/_minerva/"), Bf(c, "", h), b = new jg(c.toString().replace("_____random_____", "%random%")));
  a = new og(b, a, rj);
  b = pj;
  a.Wd = w(b.Wg, b);
  a.onreset = w(b.Vg, b);
  a.Xd = w(b.Xg, b);
  a.start()
}
var zj = ["__whiteboard_init"], Aj = t;
!(zj[0] in Aj) && Aj.execScript && Aj.execScript("var " + zj[0]);
for(var Bj;zj.length && (Bj = zj.shift());) {
  !zj.length && ga(yj) ? Aj[Bj] = yj : Aj = Aj[Bj] ? Aj[Bj] : Aj[Bj] = {}
}
;})();
