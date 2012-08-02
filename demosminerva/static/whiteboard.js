(function() {
function e(a) {
  throw a;
}
var h = void 0, j = !0, k = null, m = !1;
function aa() {
  return function() {
  }
}
function ba(a) {
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
var ca = ca || {}, t = this;
function da(a) {
  for(var a = a.split("."), b = t, c;c = a.shift();) {
    if(b[c] != k) {
      b = b[c]
    }else {
      return k
    }
  }
  return b
}
function ea() {
}
function fa(a) {
  a.La = function() {
    return a.gf ? a.gf : a.gf = new a
  }
}
function ga(a) {
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
function ha(a) {
  return"array" == ga(a)
}
function ia(a) {
  var b = ga(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function ja(a) {
  return ka(a) && "function" == typeof a.getFullYear
}
function v(a) {
  return"string" == typeof a
}
function la(a) {
  return"number" == typeof a
}
function ma(a) {
  return"function" == ga(a)
}
function ka(a) {
  var b = typeof a;
  return"object" == b && a != k || "function" == b
}
function na(a) {
  return a[oa] || (a[oa] = ++pa)
}
var oa = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), pa = 0;
function qa(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ra(a, b, c) {
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
  w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? qa : ra;
  return w.apply(k, arguments)
}
function sa(a, b) {
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
;function ta(a) {
  return ma(a) || "object" == typeof a && ma(a.call) && ma(a.apply)
}
;function ua(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
function va(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function wa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var xa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function ya(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < xa.length;g++) {
      c = xa[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function za(a) {
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
      if(ha(b)) {
        var d = b.length;
        c.push("[");
        for(var f = "", g = 0;g < d;g++) {
          c.push(f), f = b[g], Aa(a, a.Rc ? a.Rc.call(b, String(g), f) : f, c), f = ","
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
var Da = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Ea = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
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
  Error.captureStackTrace ? Error.captureStackTrace(this, C) : this.stack = Error().stack || "";
  a && (this.message = String(a))
}
A(C, Error);
C.prototype.name = "CustomError";
function Fa(a) {
  var b = a.length - 1;
  return 0 <= b && a.indexOf("%", b) == b
}
function Ga(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
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
  for(var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(d.length, f.length), i = 0;0 == c && i < g;i++) {
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
var Qa = 2147483648 * Math.random() | 0;
function Ra(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  })
}
;function Sa(a, b) {
  b.unshift(a);
  C.call(this, Ga.apply(k, b));
  b.shift();
  this.Ji = a
}
A(Sa, C);
Sa.prototype.name = "AssertionError";
function Ta(a, b) {
  e(new Sa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var D = Array.prototype, Ua = D.indexOf ? function(a, b, c) {
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
}, Va = D.filter ? function(a, b, c) {
  return D.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = [], g = 0, i = v(a) ? a.split("") : a, l = 0;l < d;l++) {
    if(l in i) {
      var n = i[l];
      b.call(c, n, l, a) && (f[g++] = n)
    }
  }
  return f
}, Wa = D.map ? function(a, b, c) {
  return D.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = v(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in g && (f[i] = b.call(c, g[i], i, a))
  }
  return f
}, Xa = D.some ? function(a, b, c) {
  return D.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return j
    }
  }
  return m
}, Ya = D.every ? function(a, b, c) {
  return D.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = v(a) ? a.split("") : a, g = 0;g < d;g++) {
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
  if(!ha(a)) {
    for(var b = a.length - 1;0 <= b;b--) {
      delete a[b]
    }
  }
  a.length = 0
}
function ab(a, b) {
  var c = Ua(a, b);
  0 <= c && D.splice.call(a, c, 1)
}
function bb(a) {
  return D.concat.apply(D, arguments)
}
function cb(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
function db(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], f;
    if(ha(d) || (f = ia(d)) && d.hasOwnProperty("callee")) {
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
  return 2 >= arguments.length ? D.slice.call(a, b) : D.slice.call(a, b, c)
}
function fb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function gb(a, b, c) {
  var d = Ua(c, a);
  if(-1 != d) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = ga(a);
    if("boolean" == d || "number" == d || "null" == d || "undefined" == d) {
      b.push(String(a))
    }else {
      if("string" == d) {
        Ca(a, b)
      }else {
        if(ta(a.O)) {
          a.O(b, c)
        }else {
          if(ta(a.cg)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if("array" == d) {
                d = a.length;
                b.push("[");
                for(var f = "", g = 0;g < d;g++) {
                  b.push(f), gb(a[g], b, c), f = ", "
                }
                b.push("]")
              }else {
                if("object" == d) {
                  if(ja(a) && "function" == typeof a.valueOf) {
                    b.push("new Date(", String(a.valueOf()), ")")
                  }else {
                    for(var d = wa(a).concat(xa), f = {}, i = g = 0;i < d.length;) {
                      var l = d[i++], n = ka(l) ? "o" + na(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(f, n) || (f[n] = j, d[g++] = l)
                    }
                    d.length = g;
                    b.push("{");
                    f = "";
                    for(i = 0;i < d.length;i++) {
                      g = d[i], Object.prototype.hasOwnProperty.call(a, g) && (l = a[g], b.push(f), Ca(g, b), b.push(": "), gb(l, b, c), f = ", ")
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
  gb(a, b, c)
}
function G(a) {
  var b = [];
  F(a, b, h);
  return b.join("")
}
;function hb(a) {
  if("function" == typeof a.R) {
    a = a.R()
  }else {
    if(ia(a) || v(a)) {
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
function ib(a) {
  if("function" == typeof a.N) {
    return a.N()
  }
  if(v(a)) {
    return a.split("")
  }
  if(ia(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return va(a)
}
function jb(a) {
  if("function" == typeof a.ta) {
    return a.ta()
  }
  if("function" != typeof a.N) {
    if(ia(a) || v(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return wa(a)
  }
}
function kb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ia(a) || v(a)) {
      E(a, b, c)
    }else {
      for(var d = jb(a), f = ib(a), g = f.length, i = 0;i < g;i++) {
        b.call(c, f[i], d && d[i], a)
      }
    }
  }
}
function lb(a, b) {
  if("function" == typeof a.every) {
    return a.every(b, h)
  }
  if(ia(a) || v(a)) {
    return Ya(a, b, h)
  }
  for(var c = jb(a), d = ib(a), f = d.length, g = 0;g < f;g++) {
    if(!b.call(h, d[g], c && c[g], a)) {
      return m
    }
  }
  return j
}
;function mb(a, b) {
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
r = mb.prototype;
r.d = 0;
r.xe = 0;
r.R = o("d");
r.N = function() {
  nb(this);
  for(var a = [], b = 0;b < this.m.length;b++) {
    a.push(this.u[this.m[b]])
  }
  return a
};
r.ta = function() {
  nb(this);
  return this.m.concat()
};
r.ra = function(a) {
  return ob(this.u, a)
};
r.oc = function(a) {
  for(var b = 0;b < this.m.length;b++) {
    var c = this.m[b];
    if(ob(this.u, c) && this.u[c] == a) {
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
  var c = b || pb;
  nb(this);
  for(var d, f = 0;d = this.m[f];f++) {
    if(!c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function pb(a, b) {
  return a === b
}
r.Na = function() {
  return 0 == this.d
};
r.clear = function() {
  this.u = {};
  this.xe = this.d = this.m.length = 0
};
r.remove = function(a) {
  return ob(this.u, a) ? (delete this.u[a], this.d--, this.xe++, this.m.length > 2 * this.d && nb(this), j) : m
};
function nb(a) {
  if(a.d != a.m.length) {
    for(var b = 0, c = 0;b < a.m.length;) {
      var d = a.m[b];
      ob(a.u, d) && (a.m[c++] = d);
      b++
    }
    a.m.length = c
  }
  if(a.d != a.m.length) {
    for(var f = {}, c = b = 0;b < a.m.length;) {
      d = a.m[b], ob(f, d) || (a.m[c++] = d, f[d] = 1), b++
    }
    a.m.length = c
  }
}
r.get = function(a, b) {
  return ob(this.u, a) ? this.u[a] : b
};
r.set = function(a, b) {
  ob(this.u, a) || (this.d++, this.m.push(a), this.xe++);
  this.u[a] = b
};
r.hd = function(a) {
  var b;
  a instanceof mb ? (b = a.ta(), a = a.N()) : (b = wa(a), a = va(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
r.L = function() {
  return new mb(this)
};
function qb(a) {
  nb(a);
  for(var b = {}, c = 0;c < a.m.length;c++) {
    var d = a.m[c];
    b[d] = a.u[d]
  }
  return b
}
function ob(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function rb(a) {
  var b = ga(a);
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
;var sb, tb;
function ub(a, b) {
  this.sb = a;
  this.ob = b
}
ub.prototype.W = function(a) {
  return a instanceof ub && this.sb == a.sb && this.ob.join(",") == a.ob
};
ub.prototype.O = function(a, b) {
  a.push("new SACK(", String(this.sb), ", ");
  F(this.ob, a, b);
  a.push(")")
};
function vb() {
  this.w = new mb
}
r = vb.prototype;
r.bb = -1;
r.n = 0;
r.append = function(a) {
  var b = rb(a);
  this.w.set(this.bb + 1, [a, b]);
  this.bb += 1;
  this.n += b
};
r.O = function(a) {
  a.push("<Queue with ", String(this.w.R()), " item(s), counter=#", String(this.bb), ", size=", String(this.n), ">")
};
function wb(a) {
  a = a.w.ta();
  D.sort.call(a, fb);
  return a
}
r.Ue = function(a) {
  for(var b = wb(this), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    (a == k || f >= a) && c.push([f, this.w.get(f)[0]])
  }
  return c
};
function xb() {
  this.Za = new mb
}
xb.prototype.jb = -1;
xb.prototype.n = 0;
function yb(a) {
  var b = a.Za.ta();
  D.sort.call(b, fb);
  return new ub(a.jb, b)
}
var zb = {};
var Ab;
Ab = p(j);
var Bb, Cb, Db, Eb, Fb;
function Gb() {
  return t.navigator ? t.navigator.userAgent : k
}
Fb = Eb = Db = Cb = Bb = m;
var Hb;
if(Hb = Gb()) {
  var Ib = t.navigator;
  Bb = 0 == Hb.indexOf("Opera");
  Cb = !Bb && -1 != Hb.indexOf("MSIE");
  Eb = (Db = !Bb && -1 != Hb.indexOf("WebKit")) && -1 != Hb.indexOf("Mobile");
  Fb = !Bb && !Db && "Gecko" == Ib.product
}
var Jb = Bb, H = Cb, I = Fb, J = Db, Kb = Eb, Lb = t.navigator, Mb = -1 != (Lb && Lb.platform || "").indexOf("Mac"), Nb;
a: {
  var Ob = "", Pb;
  if(Jb && t.opera) {
    var Qb = t.opera.version, Ob = "function" == typeof Qb ? Qb() : Qb
  }else {
    if(I ? Pb = /rv\:([^\);]+)(\)|;)/ : H ? Pb = /MSIE\s+([^\);]+)(\)|;)/ : J && (Pb = /WebKit\/(\S+)/), Pb) {
      var Rb = Pb.exec(Gb()), Ob = Rb ? Rb[1] : ""
    }
  }
  if(H) {
    var Sb, Tb = t.document;
    Sb = Tb ? Tb.documentMode : h;
    if(Sb > parseFloat(Ob)) {
      Nb = String(Sb);
      break a
    }
  }
  Nb = Ob
}
var Ub = {};
function K(a) {
  return Ub[a] || (Ub[a] = 0 <= Pa(Nb, a))
}
var Vb = {};
function Wb() {
  return Vb[9] || (Vb[9] = H && !!document.documentMode && 9 <= document.documentMode)
}
;function Xb() {
}
var Yb = 0;
r = Xb.prototype;
r.key = 0;
r.nb = m;
r.od = m;
r.Wb = function(a, b, c, d, f, g) {
  ma(a) ? this.kf = j : a && a.handleEvent && ma(a.handleEvent) ? this.kf = m : e(Error("Invalid listener argument"));
  this.Db = a;
  this.Df = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Dc = g;
  this.od = m;
  this.key = ++Yb;
  this.nb = m
};
r.handleEvent = function(a) {
  return this.kf ? this.Db.call(this.Dc || this.src, a) : this.Db.handleEvent.call(this.Db, a)
};
var Zb = !H || Wb(), $b = !H || Wb(), ac = H && !K("8");
!J || K("528");
I && K("1.9b") || H && K("8") || Jb && K("9.5") || J && K("528");
I && !K("8") || H && K("9");
var bc = {Ch:"click", Hh:"dblclick", bi:"mousedown", fi:"mouseup", ei:"mouseover", di:"mouseout", ci:"mousemove", ri:"selectstart", Wh:"keypress", Vh:"keydown", Xh:"keyup", Ah:"blur", Ph:"focus", Ih:"deactivate", Qh:H ? "focusin" : "DOMFocusIn", Rh:H ? "focusout" : "DOMFocusOut", Bh:"change", qi:"select", si:"submit", Uh:"input", mi:"propertychange", Mh:"dragstart", Jh:"dragenter", Lh:"dragover", Kh:"dragleave", Nh:"drop", wi:"touchstart", vi:"touchmove", ui:"touchend", ti:"touchcancel", Eh:"contextmenu", 
Oh:"error", Th:"help", Yh:"load", Zh:"losecapture", ni:"readystatechange", oi:"resize", pi:"scroll", yi:"unload", Sh:"hashchange", ii:"pagehide", ji:"pageshow", li:"popstate", Fh:"copy", ki:"paste", Gh:"cut", xh:"beforecopy", yh:"beforecut", zh:"beforepaste", hi:"online", gi:"offline", ai:"message", Dh:"connect", xi:J ? "webkitTransitionEnd" : Jb ? "oTransitionEnd" : "transitionend"};
function L() {
}
L.prototype.ya = m;
L.prototype.g = function() {
  this.ya || (this.ya = j, this.c())
};
L.prototype.c = function() {
  this.pg && cc.apply(k, this.pg);
  if(this.xf) {
    for(;this.xf.length;) {
      this.xf.shift()()
    }
  }
};
function cc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ia(d) ? cc.apply(k, d) : d && "function" == typeof d.g && d.g()
  }
}
;function dc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
r = dc.prototype;
r.c = aa();
r.g = aa();
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
function ec(a) {
  a.stopPropagation()
}
;function fc(a) {
  fc[" "](a);
  return a
}
fc[" "] = ea;
function gc(a, b) {
  a && this.Wb(a, b)
}
A(gc, dc);
var hc = [1, 4, 2];
r = gc.prototype;
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
r.$d = m;
r.Ja = k;
r.Wb = function(a, b) {
  var c = this.type = a.type;
  dc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(I) {
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
  this.$d = Mb ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Ja = a;
  a.defaultPrevented && this.preventDefault();
  delete this.mb
};
function ic(a) {
  return Zb ? 0 == a.Ja.button : "click" == a.type ? j : !!(a.Ja.button & hc[0])
}
r.stopPropagation = function() {
  gc.f.stopPropagation.call(this);
  this.Ja.stopPropagation ? this.Ja.stopPropagation() : this.Ja.cancelBubble = j
};
r.preventDefault = function() {
  gc.f.preventDefault.call(this);
  var a = this.Ja;
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
r.c = aa();
var jc = {}, kc = {}, lc = {}, mc = {};
function M(a, b, c, d, f) {
  if(b) {
    if(ha(b)) {
      for(var g = 0;g < b.length;g++) {
        M(a, b[g], c, d, f)
      }
      return k
    }
    var d = !!d, i = kc;
    b in i || (i[b] = {d:0, ja:0});
    i = i[b];
    d in i || (i[d] = {d:0, ja:0}, i.d++);
    var i = i[d], l = na(a), n;
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
    var q = nc, x = $b ? function(a) {
      return q.call(x.src, x.key, a)
    } : function(a) {
      a = q.call(x.src, x.key, a);
      if(!a) {
        return a
      }
    }, g = x;
    g.src = a;
    i = new Xb;
    i.Wb(c, g, a, b, d, f);
    c = i.key;
    g.key = c;
    n.push(i);
    jc[c] = i;
    lc[l] || (lc[l] = []);
    lc[l].push(i);
    a.addEventListener ? (a == t || !a.td) && a.addEventListener(b, g, d) : a.attachEvent(b in mc ? mc[b] : mc[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function oc(a, b, c, d, f) {
  if(ha(b)) {
    for(var g = 0;g < b.length;g++) {
      oc(a, b[g], c, d, f)
    }
    return k
  }
  a = M(a, b, c, d, f);
  jc[a].od = j;
  return a
}
function pc(a, b, c, d, f) {
  if(ha(b)) {
    for(var g = 0;g < b.length;g++) {
      pc(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = qc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Db == c && a[g].capture == d && a[g].Dc == f) {
          rc(a[g].key);
          break
        }
      }
    }
  }
}
function rc(a) {
  if(!jc[a]) {
    return m
  }
  var b = jc[a];
  if(b.nb) {
    return m
  }
  var c = b.src, d = b.type, f = b.Df, g = b.capture;
  c.removeEventListener ? (c == t || !c.td) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in mc ? mc[d] : mc[d] = "on" + d, f);
  c = na(c);
  lc[c] && (f = lc[c], ab(f, b), 0 == f.length && delete lc[c]);
  b.nb = j;
  if(b = kc[d][g][c]) {
    b.vf = j, sc(d, g, c, b)
  }
  delete jc[a];
  return j
}
function sc(a, b, c, d) {
  if(!d.Kc && d.vf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].nb ? d[f].Df.src = k : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.vf = m;
    0 == g && (delete kc[a][b][c], kc[a][b].d--, 0 == kc[a][b].d && (delete kc[a][b], kc[a].d--), 0 == kc[a].d && delete kc[a])
  }
}
function tc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    ua(lc, function(a) {
      for(var f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          rc(g.key), c++
        }
      }
    })
  }else {
    if(a = na(a), lc[a]) {
      for(var a = lc[a], f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          rc(g.key), c++
        }
      }
    }
  }
}
function qc(a, b, c) {
  var d = kc;
  return b in d && (d = d[b], c in d && (d = d[c], a = na(a), d[a])) ? d[a] : k
}
function uc(a, b, c, d, f) {
  var g = 1, b = na(b);
  if(a[b]) {
    a.ja--;
    a = a[b];
    a.Kc ? a.Kc++ : a.Kc = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var n = a[l];
        n && !n.nb && (g &= vc(n, f) !== m)
      }
    }finally {
      a.Kc--, sc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function vc(a, b) {
  a.od && rc(a.key);
  return a.handleEvent(b)
}
function nc(a, b) {
  if(!jc[a]) {
    return j
  }
  var c = jc[a], d = c.type, f = kc;
  if(!(d in f)) {
    return j
  }
  var f = f[d], g, i;
  if(!$b) {
    g = b || da("window.event");
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
    q = new gc;
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
          q.currentTarget = s[B], g &= uc(i, s[B], d, j, q)
        }
        if(n) {
          i = f[m];
          i.ja = i.d;
          for(B = 0;!q.mb && B < s.length && i.ja;B++) {
            q.currentTarget = s[B], g &= uc(i, s[B], d, m, q)
          }
        }
      }else {
        g = vc(c, q)
      }
    }finally {
      s && (s.length = 0)
    }
    return g
  }
  d = new gc(b, this);
  return g = vc(c, d)
}
var wc = 0;
function xc() {
}
A(xc, L);
r = xc.prototype;
r.td = j;
r.Nc = k;
r.he = ba("Nc");
r.addEventListener = function(a, b, c, d) {
  M(this, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  pc(this, a, b, c, d)
};
r.dispatchEvent = function(a) {
  var b = a.type || a, c = kc;
  if(b in c) {
    if(v(a)) {
      a = new dc(a, this)
    }else {
      if(a instanceof dc) {
        a.target = a.target || this
      }else {
        var d = a, a = new dc(b, this);
        ya(a, d)
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
        a.currentTarget = f[i], d &= uc(g, f[i], a.type, j, a) && a.Sc != m
      }
    }
    if(m in c) {
      if(g = c[m], g.ja = g.d, b) {
        for(i = 0;!a.mb && i < f.length && g.ja;i++) {
          a.currentTarget = f[i], d &= uc(g, f[i], a.type, m, a) && a.Sc != m
        }
      }else {
        for(f = this;!a.mb && f && g.ja;f = f.Nc) {
          a.currentTarget = f, d &= uc(g, f, a.type, m, a) && a.Sc != m
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
  xc.f.c.call(this);
  tc(this);
  this.Nc = k
};
function yc(a, b) {
  this.Gc = a || 1;
  this.gc = b || zc;
  this.md = w(this.ih, this);
  this.Od = z()
}
A(yc, xc);
yc.prototype.enabled = m;
var zc = t.window;
r = yc.prototype;
r.oa = k;
r.ih = function() {
  if(this.enabled) {
    var a = z() - this.Od;
    0 < a && a < 0.8 * this.Gc ? this.oa = this.gc.setTimeout(this.md, this.Gc - a) : (this.dispatchEvent(Ac), this.enabled && (this.oa = this.gc.setTimeout(this.md, this.Gc), this.Od = z()))
  }
};
r.start = function() {
  this.enabled = j;
  this.oa || (this.oa = this.gc.setTimeout(this.md, this.Gc), this.Od = z())
};
r.stop = function() {
  this.enabled = m;
  this.oa && (this.gc.clearTimeout(this.oa), this.oa = k)
};
r.c = function() {
  yc.f.c.call(this);
  this.stop();
  delete this.gc
};
var Ac = "tick";
wc++;
wc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Bc(a, b) {
  this.lc = [];
  this.Be = a;
  this.Je = b || k
}
r = Bc.prototype;
r.Ka = m;
r.Tb = m;
r.$b = 0;
r.me = m;
r.jg = m;
r.nd = 0;
r.cancel = function(a) {
  if(this.Ka) {
    this.bc instanceof Bc && this.bc.cancel()
  }else {
    if(this.G) {
      var b = this.G;
      delete this.G;
      a ? b.cancel(a) : (b.nd--, 0 >= b.nd && b.cancel())
    }
    this.Be ? this.Be.call(this.Je, this) : this.me = j;
    this.Ka || this.wb(new Cc(this))
  }
};
r.Ee = function(a, b) {
  Dc(this, a, b);
  this.$b--;
  0 == this.$b && this.Ka && Ec(this)
};
function Dc(a, b, c) {
  a.Ka = j;
  a.bc = c;
  a.Tb = !b;
  Ec(a)
}
function Fc(a) {
  a.Ka && (a.me || e(new Gc(a)), a.me = m)
}
function Hc(a, b) {
  Fc(a);
  Dc(a, j, b)
}
r.wb = function(a) {
  Fc(this);
  Dc(this, m, a)
};
function Ic(a, b, c, d) {
  a.lc.push([b, c, d]);
  a.Ka && Ec(a)
}
function Jc(a) {
  return Xa(a.lc, function(a) {
    return ma(a[1])
  })
}
function Ec(a) {
  a.ve && (a.Ka && Jc(a)) && (t.clearTimeout(a.ve), delete a.ve);
  a.G && (a.G.nd--, delete a.G);
  for(var b = a.bc, c = m, d = m;a.lc.length && 0 == a.$b;) {
    var f = a.lc.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.Tb ? i : g) {
      try {
        var l = g.call(f || a.Je, b);
        u(l) && (a.Tb = a.Tb && (l == b || l instanceof Error), a.bc = b = l);
        b instanceof Bc && (d = j, a.$b++)
      }catch(n) {
        b = n, a.Tb = j, Jc(a) || (c = j)
      }
    }
  }
  a.bc = b;
  d && a.$b && (Ic(b, w(a.Ee, a, j), w(a.Ee, a, m)), b.jg = j);
  c && (a.ve = t.setTimeout(function() {
    e(b)
  }, 0))
}
function Kc(a) {
  var b = new Bc;
  Hc(b, a);
  return b
}
function Lc(a) {
  var b = new Bc;
  b.wb(a);
  return b
}
function Gc(a) {
  C.call(this);
  this.og = a
}
A(Gc, C);
Gc.prototype.message = "Deferred has already fired";
Gc.prototype.name = "AlreadyCalledError";
function Cc(a) {
  C.call(this);
  this.og = a
}
A(Cc, C);
Cc.prototype.message = "Deferred was cancelled";
Cc.prototype.name = "CancelledError";
function Mc(a) {
  this.H = a;
  this.rc = [];
  this.Ne = [];
  this.ig = w(this.ph, this)
}
Mc.prototype.oa = k;
Mc.prototype.ph = function() {
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
    a = this.Ne;
    this.Ne = [];
    for(b = 0;b < a.length;b++) {
      Hc(a[b], k)
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
  for(var c = Pc(a), d = eb(arguments, 1), f = c.length + d.length, g = c, i = 0;i < d.length;i++) {
    Za(g, d[i]) || g.push(d[i])
  }
  a.className = c.join(" ");
  return c.length == f
}
function Rc(a, b) {
  var c = Pc(a), d = eb(arguments, 1), f, g = d;
  f = Va(c, function(a) {
    return!Za(g, a)
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
var Sc = !H || Wb(), Tc = !I && !H || H && Wb() || I && K("1.9.1"), Uc = H && !K("9");
function Vc() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function Wc(a) {
  return a * Math.PI / 180
}
;function Xc(a) {
  return a ? new Yc(Zc(a)) : Oc || (Oc = new Yc)
}
function O(a) {
  return v(a) ? document.getElementById(a) : a
}
function $c(a, b, c, d) {
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
      b = i.className, "function" == typeof b.split && Za(b.split(/\s+/), c) && (d[f++] = i)
    }
    d.length = f;
    return d
  }
  return a
}
var ad = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function bd(a, b, c) {
  return cd(document, arguments)
}
function cd(a, b) {
  var c = b[0], d = b[1];
  if(!Sc && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', Ia(d.name), '"');
    if(d.type) {
      c.push(' type="', Ia(d.type), '"');
      var f = {};
      ya(f, d);
      d = f;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  var g = a.createElement(c);
  d && (v(d) ? g.className = d : ha(d) ? Qc.apply(k, [g].concat(d)) : ua(d, function(a, b) {
    "style" == b ? g.style.cssText = a : "class" == b ? g.className = a : "for" == b ? g.htmlFor = a : b in ad ? g.setAttribute(ad[b], a) : 0 == b.lastIndexOf("aria-", 0) || 0 == b.lastIndexOf("data-", 0) ? g.setAttribute(b, a) : g[b] = a
  }));
  2 < b.length && dd(a, g, b, 2);
  return g
}
function dd(a, b, c, d) {
  function f(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    if(ia(g) && !(ka(g) && 0 < g.nodeType)) {
      var i = E, l;
      a: {
        if((l = g) && "number" == typeof l.length) {
          if(ka(l)) {
            l = "function" == typeof l.item || "string" == typeof l.item;
            break a
          }
          if(ma(l)) {
            l = "function" == typeof l.item;
            break a
          }
        }
        l = m
      }
      i(l ? cb(g) : g, f)
    }else {
      f(g)
    }
  }
}
function ed(a, b) {
  dd(Zc(a), a, arguments, 1)
}
function fd(a) {
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
function Zc(a) {
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
      fd(a), a.appendChild(Zc(a).createTextNode(b))
    }
  }
}
var jd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, kd = {IMG:" ", BR:"\n"};
function ld(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, la(a) && 0 <= a && 32768 > a) : m
}
function md(a) {
  var b = [];
  nd(a, b, m);
  return b.join("")
}
function nd(a, b, c) {
  if(!(a.nodeName in jd)) {
    if(3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in kd) {
        b.push(kd[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          nd(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Yc(a) {
  this.o = a || t.document || document
}
r = Yc.prototype;
r.Ba = Xc;
r.b = function(a) {
  return v(a) ? this.o.getElementById(a) : a
};
r.i = function(a, b, c) {
  return cd(this.o, arguments)
};
r.createElement = function(a) {
  return this.o.createElement(a)
};
r.createTextNode = function(a) {
  return this.o.createTextNode(a)
};
r.Ge = function(a, b, c) {
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
r.append = ed;
r.Se = function(a) {
  return Tc && a.children != h ? a.children : Va(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
};
r.contains = gd;
function od(a, b) {
  switch(ga(b)) {
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
        a.push('<property id="', d, '">'), od(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != ga(b[c]) && (a.push('<property id="', Ia(c), '">'), od(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function pd(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, f = arguments;
  d.push("<arguments>");
  for(var g = f.length, i = 1;i < g;i++) {
    od(d, f[i])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var qd = m, rd = "";
function sd(a) {
  a = a.match(/[\d]+/g);
  a.length = 3;
  return a.join(".")
}
if(navigator.plugins && navigator.plugins.length) {
  var td = navigator.plugins["Shockwave Flash"];
  td && (qd = j, td.description && (rd = sd(td.description)));
  navigator.plugins["Shockwave Flash 2.0"] && (qd = j, rd = "2.0.0.11")
}else {
  if(navigator.mimeTypes && navigator.mimeTypes.length) {
    var ud = navigator.mimeTypes["application/x-shockwave-flash"];
    (qd = ud && ud.enabledPlugin) && (rd = sd(ud.enabledPlugin.description))
  }else {
    try {
      var vd = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), qd = j, rd = sd(vd.GetVariable("$version"))
    }catch(wd) {
      try {
        vd = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), qd = j, rd = "6.0.21"
      }catch(xd) {
        try {
          vd = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), qd = j, rd = sd(vd.GetVariable("$version"))
        }catch(yd) {
        }
      }
    }
  }
}
var zd = rd;
function Ad(a, b, c) {
  a.style[Ra(c)] = b
}
function Bd(a, b) {
  var c = Zc(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) || "" : ""
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
  var b = a.offsetWidth, c = a.offsetHeight, d = J && !b && !c;
  return(!u(b) || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), H && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new N(b.right - b.left, b.bottom - b.top)) : new N(b, c)
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
    if(H || Jb) {
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
  ha(c) || (Jd[0] = c, c = Jd);
  for(var f = 0;f < c.length;f++) {
    var g = M(b, c[f], d || a, m, a.gb || a);
    a.m.push(g)
  }
  return a
}
function Kd(a, b, c, d, f, g) {
  if(ha(c)) {
    for(var i = 0;i < c.length;i++) {
      Kd(a, b, c[i], d, f, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.gb || a;
      f = !!f;
      if(b = qc(b, c, f)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].nb && b[c].Db == d && b[c].capture == f && b[c].Dc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, rc(b), ab(a.m, b))
  }
  return a
}
Id.prototype.ae = function() {
  E(this.m, rc);
  this.m.length = 0
};
Id.prototype.c = function() {
  Id.f.c.call(this);
  this.ae()
};
Id.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Ld() {
}
fa(Ld);
Ld.prototype.Qg = 0;
Ld.La();
function Md(a) {
  this.M = a || Xc();
  this.cc = Nd
}
A(Md, xc);
Md.prototype.Hg = Ld.La();
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
r.Og = k;
r.G = k;
r.P = k;
r.mc = k;
r.qh = m;
function Pd(a) {
  return a.S || (a.S = ":" + (a.Hg.Qg++).toString(36))
}
r.b = o("e");
function Qd(a) {
  return a.xb || (a.xb = new Id(a))
}
r.getParent = o("G");
r.he = function(a) {
  this.G && this.G != a && e(Error("Method not supported"));
  Md.f.he.call(this, a)
};
r.Ba = o("M");
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
  this.xb && this.xb.ae();
  this.p = m
};
r.c = function() {
  Md.f.c.call(this);
  this.p && this.cb();
  this.xb && (this.xb.g(), delete this.xb);
  Sd(this, function(a) {
    a.g()
  });
  if(!this.qh && this.e) {
    var a = this.e;
    a && a.parentNode && a.parentNode.removeChild(a)
  }
  this.G = this.Og = this.e = this.mc = this.P = k
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
    c && a && (d = this.mc, c in d && delete d[c], ab(this.P, a), b && (a.cb(), a.e && (c = a.e) && c.parentNode && c.parentNode.removeChild(c)), c = a, c == k && e(Error("Unable to set parent component")), c.G = k, Md.f.he.call(c, k))
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function Td(a) {
  this.u = new mb;
  a && this.hd(a)
}
function Ud(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + na(a) : b.substr(0, 1) + a
}
r = Td.prototype;
r.R = function() {
  return this.u.R()
};
r.add = function(a) {
  this.u.set(Ud(a), a)
};
r.hd = function(a) {
  for(var a = ib(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
r.ae = function(a) {
  for(var a = ib(a), b = a.length, c = 0;c < b;c++) {
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
  if(b = this.R() == hb(a)) {
    var c = a, a = hb(c);
    this.R() > a ? b = m : (!(c instanceof Td) && 5 < a && (c = new Td(c)), b = lb(this, function(a) {
      if("function" == typeof c.contains) {
        a = c.contains(a)
      }else {
        if("function" == typeof c.oc) {
          a = c.oc(a)
        }else {
          if(ia(c) || v(c)) {
            a = Za(c, a)
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
  if(Za(b, a)) {
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
            g = String(g);
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
  a = String(a);
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
Zd.prototype.$g = 0;
Zd.prototype.zd = k;
Zd.prototype.yd = k;
var $d = 0;
Zd.prototype.reset = function(a, b, c, d, f) {
  this.$g = "number" == typeof f ? f : $d++;
  this.Uf = d || z();
  this.Cb = a;
  this.tf = b;
  this.Kg = c;
  delete this.zd;
  delete this.yd
};
Zd.prototype.Xc = ba("Cb");
function ae(a) {
  this.Pg = a
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
r.Se = function() {
  this.P || (this.P = {});
  return this.P
};
r.Xc = ba("Cb");
function le(a) {
  if(a.Cb) {
    return a.Cb
  }
  if(a.G) {
    return le(a.G)
  }
  Ta("Root logger has no level set.");
  return k
}
r.log = function(a, b, c) {
  if(a.value >= le(this).value) {
    a = this.zg(a, b, c);
    b = "log:" + a.tf;
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
r.zg = function(a, b, c) {
  var d = new Zd(a, String(b), this.Pg);
  if(c) {
    d.zd = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var i;
      var l = da("window.location.href");
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
      f = "Message: " + Ia(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + Ia(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ia(Vd(g) + "-> ")
    }catch(B) {
      f = "Exception trying to expose exception! You win, we lose. " + B
    }
    d.yd = f
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
  oe || (oe = new ae(""), ne[""] = oe, oe.Xc(he))
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
    c.Se()[d] = b;
    b.G = c;
    ne[a] = b
  }
  return b
}
;function re(a, b) {
  Md.call(this, b);
  this.wg = a;
  this.xd = new Id(this);
  this.tc = new mb
}
A(re, Md);
r = re.prototype;
r.a = T("goog.ui.media.FlashObject");
r.sh = "window";
r.Ae = "#000000";
r.eg = "sameDomain";
r.$ = function(a, b) {
  this.rb = v(a) ? a : Math.round(a) + "px";
  this.Hd = v(b) ? b : Math.round(b) + "px";
  this.b() && Cd(this.b() ? this.b().firstChild : k, this.rb, this.Hd);
  return this
};
r.Q = function() {
  re.f.Q.call(this);
  var a = this.b(), b;
  b = H ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = H ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = Ga(c, this.sh), d = this.tc.ta(), f = this.tc.N(), g = [], i = 0;i < d.length;i++) {
    g.push(encodeURIComponent(String(d[i])) + "=" + encodeURIComponent(String(f[i])))
  }
  b = Ga(b, Pd(this), Pd(this), "goog-ui-media-flash-object", Ia(this.wg), Ia(g.join("&")), this.Ae, this.eg, c);
  a.innerHTML = b;
  this.rb && this.Hd && this.$(this.rb, this.Hd);
  P(this.xd, this.b(), va(bc), ec)
};
r.i = function() {
  this.Hf != k && !(0 <= Pa(zd, this.Hf)) && (Q(this.a, "Required flash version not found:" + this.Hf), e(Error("Method not supported")));
  var a = this.Ba().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
r.c = function() {
  re.f.c.call(this);
  this.tc = k;
  this.xd.g();
  this.xd = k
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
r.qd = function(a, b) {
  try {
    var c = this.Ya.CallFunction(pd("__FC_connect", this.S, a, b, "<int32/>\n"))
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
    var b = this.Ya.CallFunction(pd("__FC_writeFrames", this.S, a))
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
      var b = a.CallFunction(pd("__FC_close", this.S));
      this.a.info("disposeInternal: __FC_close ret: " + b)
    }catch(c) {
      me(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + c.message), this.pc = j
    }
  }
  if(this.pc) {
    a = this.Ra, Q(a.a, "oncrash"), De(a.J, j)
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
  this.pd = "__FST_" + se();
  t[this.pd] = w(this.sg, this);
  var c = b.CallFunction(pd("__FC_setCallbackFunc", this.pd));
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
r.sd = function(a) {
  a = new ze(this, a);
  return this.yb[a.S] = a
};
r.qg = function(a, b, c, d) {
  var f = this.yb[a];
  f ? "frames" == b && d ? (Ae(f, "ioerror", "FlashConnector hadError while handling data."), f.g()) : Ae(f, b, c) : Q(this.a, "Cannot dispatch because we have no instance: " + G([a, b, c, d]))
};
r.sg = function(a, b, c, d) {
  try {
    var f = this.v;
    f.rc.push([this.qg, this, [a, b, c, d]]);
    f.oa == k && (f.oa = f.H.setTimeout(f.ig, 0))
  }catch(g) {
    t.window.setTimeout(function() {
      e(g)
    }, 0)
  }
};
r.c = function() {
  Ee.f.c.call(this);
  for(var a = va(this.yb);a.length;) {
    a.pop().g()
  }
  delete this.yb;
  delete this.Ya;
  t[this.pd] = h
};
function Fe(a) {
  this.J = a;
  this.Nb = []
}
A(Fe, L);
r = Fe.prototype;
r.a = T("cw.net.FlashSocketConduit");
r.jc = function(a) {
  this.Nb ? (S(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Nb.push.apply(this.Nb, a)) : (S(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.$c.jc(a))
};
r.qd = function(a, b) {
  this.$c.qd(a, b)
};
r.onconnect = function() {
  this.a.info("onconnect");
  Be(this.J);
  var a = this.Nb;
  this.Nb = k;
  a.length && (S(this.a, "onconnect: Writing " + a.length + " buffered frame(s)."), this.$c.jc(a))
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
  var a = new Bc;
  Ge.push(a);
  return a
}
function Ie(a) {
  var b = Ge;
  Ge = [];
  E(b, function(b) {
    Hc(b, a)
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
var Ke = {cg:p("<cw.eq.Wildcard>")};
function Le(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function Me(a, b, c) {
  var d = ga(a), f = ga(b);
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
      if(ja(a) && ja(b)) {
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
          if(a.bg == Ab && b.bg == Ab) {
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
  this.Xg = a;
  this.Pc = b
}
U.prototype.W = function(a, b) {
  return ka(a) && this.constructor == a.constructor && Me(this.Pc, a.Pc, b)
};
U.prototype.O = function(a, b) {
  a.push("new ", this.Xg, "(");
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
  return[a.Ea, a.Cf, a.cf, a.Gf, a.fc, a.pe, a.uf, a.sf, a.Rd, a.qf, a.Yf, a.Tf, a.Ua, a.Jc]
}
Oe.prototype.ca = Ne;
Oe.prototype.ma = function(a) {
  var b = {};
  b.tnum = this.Ea;
  b.ver = this.Cf;
  b.format = this.cf;
  b["new"] = this.Gf;
  b.id = this.fc;
  b.ming = this.pe;
  b.pad = this.uf;
  b.maxb = this.sf;
  u(this.Rd) && (b.maxt = this.Rd);
  b.maxia = this.qf;
  b.tcpack = this.Yf;
  b.eeds = this.Tf;
  b.sack = this.Ua instanceof ub ? te((new Qe(this.Ua)).ca()) : this.Ua;
  b.seenack = this.Jc instanceof ub ? te((new Qe(this.Jc)).ca()) : this.Jc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push(za(b), "H")
};
function Re(a) {
  U.call(this, "StringFrame", [a]);
  this.re = a
}
A(Re, U);
Re.prototype.ca = Ne;
Re.prototype.ma = function(a) {
  a.push(this.re, " ")
};
function Se(a) {
  U.call(this, "CommentFrame", [a]);
  this.kg = a
}
A(Se, U);
Se.prototype.ca = Ne;
Se.prototype.ma = function(a) {
  a.push(this.kg, "^")
};
function Te(a) {
  U.call(this, "SeqNumFrame", [a]);
  this.Nf = a
}
A(Te, U);
Te.prototype.ca = Ne;
Te.prototype.ma = function(a) {
  a.push(String(this.Nf), "N")
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
  return new ub(a, c)
}
function Qe(a) {
  U.call(this, "SackFrame", [a]);
  this.Ua = a
}
A(Qe, U);
Qe.prototype.ca = Ne;
Qe.prototype.ma = function(a) {
  var b = this.Ua;
  a.push(b.ob.join(","), "|", String(b.sb));
  a.push("A")
};
function Ve(a) {
  U.call(this, "StreamStatusFrame", [a]);
  this.mf = a
}
A(Ve, U);
Ve.prototype.ca = Ne;
Ve.prototype.ma = function(a) {
  var b = this.mf;
  a.push(b.ob.join(","), "|", String(b.sb));
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
  this.Ef = a;
  this.ze = b
}
A(Ye, U);
Ye.prototype.ca = Ne;
Ye.prototype.ma = function(a) {
  a.push(this.Ef, "|", String(Number(this.ze)), "!")
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
    this.da = u(b) ? b : a.da, ef(this, a.Va), c = a.qb, ff(this), this.qb = c, gf(this, a.Ia), hf(this, a.Fb), this.Hb(a.K), jf(this, a.Z.L()), c = a.eb, ff(this), this.eb = c
  }else {
    if(a && (c = String(a).match(bf))) {
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
r.Ia = "";
r.Fb = k;
r.K = "";
r.eb = "";
r.Ig = m;
r.da = m;
r.toString = function() {
  var a = [], b = this.Va;
  b && a.push(lf(b, mf), ":");
  if(b = this.Ia) {
    a.push("//");
    var c = this.qb;
    c && a.push(lf(c, mf), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.Fb;
    b != k && a.push(":", String(b))
  }
  if(b = this.K) {
    this.Ia && "/" != b.charAt(0) && a.push("/"), a.push(lf(b, "/" == b.charAt(0) ? nf : of))
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
  a.Ia = c ? b ? decodeURIComponent(b) : "" : b
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
  b instanceof kf ? (a.Z = b, a.Z.ge(a.da)) : (c || (b = lf(b, qf)), a.Z = new kf(b, 0, a.da))
}
function ff(a) {
  a.Ig && e(Error("Tried to modify a read-only Uri"))
}
r.ge = function(a) {
  this.da = a;
  this.Z && this.Z.ge(a);
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
  if(!a.s && (a.s = new mb, a.d = 0, a.V)) {
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
  return Za(b, a)
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
    this.ra(a) && (b = bb(b, this.s.get(uf(this, a))))
  }else {
    for(var a = this.s.N(), c = 0;c < a.length;c++) {
      b = bb(b, a[c])
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
  return 0 < c.length ? String(c[0]) : b
};
r.toString = function() {
  if(this.V) {
    return this.V
  }
  if(!this.s) {
    return""
  }
  for(var a = [], b = this.s.ta(), c = 0;c < b.length;c++) {
    for(var d = b[c], f = encodeURIComponent(String(d)), d = this.N(d), g = 0;g < d.length;g++) {
      var i = f;
      "" !== d[g] && (i += "=" + encodeURIComponent(String(d[g])));
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
  var c = String(b);
  a.da && (c = c.toLowerCase());
  return c
}
r.ge = function(a) {
  a && !this.da && (tf(this), this.V = k, kb(this.s, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.V = k, this.s.set(uf(this, d), cb(a)), this.d += a.length))
  }, this));
  this.da = a
};
function vf(a, b, c, d) {
  this.contentWindow = a;
  this.sc = b;
  this.qe = c;
  this.xg = d
}
vf.prototype.O = function(a, b) {
  a.push("<XDRFrame frameId=");
  F(this.xg, a, b);
  a.push(", expandedUrl=");
  F(this.sc, a, b);
  a.push(", streams=");
  F(this.qe, a, b);
  a.push(">")
};
function wf() {
  this.frames = [];
  this.Pd = new mb
}
wf.prototype.a = T("cw.net.XDRTracker");
function xf(a, b) {
  for(var c = yf, d = 0;d < c.frames.length;d++) {
    var f = c.frames[d], g;
    if(g = 0 == f.qe.length) {
      g = f.sc;
      var i = String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + i + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + G(b) + " existing frame " + G(f)), Kc(f)
    }
  }
  d = se() + se();
  f = a.replace(/%random%/g, function() {
    return"ml" + String(Math.floor(Vc())) + String(Math.floor(Vc()))
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
    i = !!g.Ia
  }
  i ? gf(f, g.Ia) : i = g.Fb != k;
  n = g.K;
  if(i) {
    hf(f, g.Fb)
  }else {
    if(i = !!g.K) {
      if("/" != n.charAt(0) && (l.Ia && !l.K ? n = "/" + n : (l = f.K.lastIndexOf("/"), -1 != l && (n = f.K.substr(0, l + 1) + n))), ".." == n || "." == n) {
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
  g = String(t.location).match(bf)[3] || k;
  i = f.match(bf)[3] || k;
  g == i ? (c.a.info("No need to make a real XDRFrame for " + G(b)), c = Kc(new vf(t, f, [b], k))) : ((g = O("minerva-elements")) || e(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), i = new Bc, c.Pd.set(d, [i, f, b]), c.a.info("Creating new XDRFrame " + G(d) + "for " + G(b)), c = bd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:f + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = i);
  return c
}
wf.prototype.vh = function(a) {
  var b = this.Pd.get(a);
  b || e(Error("Unknown frameId " + G(a)));
  this.Pd.remove(b);
  var c = b[0], a = new vf(O("minerva-xdrframe-" + a).contentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  Hc(c, a)
};
var yf = new wf;
t.__XHRTracker_xdrFrameLoaded = w(yf.vh, yf);
var zf;
zf = m;
var Af = Gb();
Af && (-1 != Af.indexOf("Firefox") || -1 != Af.indexOf("Camino") || -1 != Af.indexOf("iPhone") || -1 != Af.indexOf("iPod") || -1 != Af.indexOf("iPad") || -1 != Af.indexOf("Android") || -1 != Af.indexOf("Chrome") && (zf = j));
var Bf = zf;
function Cf(a, b, c, d, f, g) {
  Bc.call(this, f, g);
  this.pf = a;
  this.ud = [];
  this.Pe = !!b;
  this.vg = !!c;
  this.lg = !!d;
  for(b = 0;b < a.length;b++) {
    Ic(a[b], w(this.Ye, this, b, j), w(this.Ye, this, b, m))
  }
  0 == a.length && !this.Pe && Hc(this, this.ud)
}
A(Cf, Bc);
Cf.prototype.wf = 0;
Cf.prototype.Ye = function(a, b, c) {
  this.wf++;
  this.ud[a] = [b, c];
  this.Ka || (this.Pe && b ? Hc(this, [a, c]) : this.vg && !b ? this.wb(c) : this.wf == this.pf.length && Hc(this, this.ud));
  this.lg && !b && (c = k);
  return c
};
Cf.prototype.wb = function(a) {
  Cf.f.wb.call(this, a);
  E(this.pf, function(a) {
    a.cancel()
  })
};
function Df(a, b) {
  this.th = a;
  this.rf = b
}
Df.prototype.Md = 0;
Df.prototype.Mc = 0;
Df.prototype.Ad = m;
function Ef(a) {
  var b = [];
  if(a.Ad) {
    return[b, 2]
  }
  var c = a.Md, d = a.th.responseText;
  for(a.Md = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var f = d.substr(a.Mc, c - a.Mc), f = f.replace(/\r$/, "");
    if(f.length > a.rf) {
      return a.Ad = j, [b, 2]
    }
    b.push(f);
    a.Mc = c += 1
  }
  return a.Md - a.Mc - 1 > a.rf ? (a.Ad = j, [b, 2]) : [b, 1]
}
;function Ff(a, b, c) {
  this.J = b;
  this.na = a;
  this.rd = c
}
A(Ff, L);
r = Ff.prototype;
r.a = T("cw.net.XHRMaster");
r.Sa = -1;
r.Qd = function(a, b, c) {
  this.rd.__XHRSlave_makeRequest(this.na, a, b, c)
};
r.Ma = o("Sa");
r.Td = function(a, b) {
  1 != b && me(this.a, G(this.na) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Be(this.J);
  Ce(this.J, a)
};
r.Ud = function(a) {
  R(this.a, "ongotheaders_: " + G(a));
  var b = k;
  "Content-Length" in a && (b = we(a["Content-Length"]));
  a = this.J;
  R(a.a, a.r() + " got Content-Length: " + b);
  a.xa == Gf && (b == k && (Q(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Hf(a, 2E3 + 1E3 * (b / 3072)))
};
r.Vd = function(a) {
  1 != a && R(this.a, this.J.r() + "'s XHR's readyState is " + a);
  this.Sa = a;
  2 <= this.Sa && Be(this.J)
};
r.Sd = function() {
  this.J.g()
};
r.c = function() {
  Ff.f.c.call(this);
  delete If.Ca[this.na];
  this.rd.__XHRSlave_dispose(this.na);
  delete this.rd
};
function Jf() {
  this.Ca = {}
}
A(Jf, L);
r = Jf.prototype;
r.a = T("cw.net.XHRMasterTracker");
r.sd = function(a, b) {
  var c = "_" + se(), d = new Ff(c, a, b);
  return this.Ca[c] = d
};
r.Td = function(a, b, c) {
  if(I) {
    for(var d = [], f = 0, g = b.length;f < g;f++) {
      d[f] = b[f]
    }
    b = d
  }else {
    b = bb(b)
  }
  (d = this.Ca[a]) ? d.Td(b, c) : me(this.a, "onframes_: no master for " + G(a))
};
r.Ud = function(a, b) {
  var c = this.Ca[a];
  c ? c.Ud(b) : me(this.a, "ongotheaders_: no master for " + G(a))
};
r.Vd = function(a, b) {
  var c = this.Ca[a];
  c ? c.Vd(b) : me(this.a, "onreadystatechange_: no master for " + G(a))
};
r.Sd = function(a) {
  var b = this.Ca[a];
  b ? (delete this.Ca[b.na], b.Sd()) : me(this.a, "oncomplete_: no master for " + G(a))
};
r.c = function() {
  Jf.f.c.call(this);
  for(var a = va(this.Ca);a.length;) {
    a.pop().g()
  }
  delete this.Ca
};
var If = new Jf;
t.__XHRMaster_onframes = w(If.Td, If);
t.__XHRMaster_oncomplete = w(If.Sd, If);
t.__XHRMaster_ongotheaders = w(If.Ud, If);
t.__XHRMaster_onreadystatechange = w(If.Vd, If);
function Kf(a, b, c) {
  this.va = a;
  this.host = b;
  this.port = c
}
function Lf(a, b, c) {
  this.host = a;
  this.port = b;
  this.lh = c
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
  this.Bf = b;
  this.Wa = c;
  this.Mf = d;
  (!(0 == this.va.indexOf("http://") || 0 == this.va.indexOf("https://")) || !(0 == this.Wa.indexOf("http://") || 0 == this.Wa.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Bf.location.href;
  cf(this.va, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Mf.location.href;
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
Pf.prototype.Te = p(1);
function Qf(a) {
  t.setTimeout(function() {
    u(a.message) && a.stack && (a.message += "\n" + a.stack);
    e(a)
  }, 0)
}
function Rf(a) {
  this.gh = a
}
Rf.prototype.O = function(a, b) {
  a.push("<UserContext for ");
  F(this.gh, a, b);
  a.push(">")
};
Rf.prototype.toString = function() {
  return G(this)
};
function Sf(a, b, c, d) {
  U.call(this, "TransportInfo", [a, b, c, d]);
  this.Ea = a;
  this.Hi = b;
  this.Oi = c;
  this.Pi = d
}
A(Sf, U);
function Tf(a, b, c) {
  this.A = a;
  this.hh = b ? b : new Pf;
  this.v = c ? c : Nc;
  this.hc = new Td;
  this.fc = se() + se();
  this.wa = new vb;
  this.Jd = new xb;
  this.ic = k;
  this.ed = [];
  this.Kb = new Rf(this);
  this.hg = w(this.oh, this);
  J && (this.ic = oc(t, "load", this.Zg, m, this))
}
A(Tf, L);
r = Tf.prototype;
r.a = T("cw.net.ClientStream");
r.nf = new ub(-1, []);
r.of = new ub(-1, []);
r.Ng = 50;
r.Mg = 1048576;
r.Xd = k;
r.Wd = k;
r.Yd = k;
r.Zd = k;
r.onreset = k;
r.zf = k;
r.Gb = k;
r.ne = m;
r.be = m;
r.h = "1_UNSTARTED";
r.te = -1;
r.j = k;
r.z = k;
r.ac = k;
r.oe = 0;
r.Af = 0;
r.Lf = 0;
r.O = function(a, b) {
  a.push("<ClientStream id=");
  F(this.fc, a, b);
  a.push(", state=", String(this.h));
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
    var b = 0 != a.wa.w.R(), c = yb(a.Jd), d = !c.W(a.of) && !(a.j && c.W(a.j.Bb) || a.z && c.W(a.z.Bb)), f = Uf(a);
    if((b = b && f < a.wa.bb) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.j.$a ? (S(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.j, c != d.Bb && (!d.Da && !d.D.length && Xf(d), d.D.push(new Qe(c)), d.Bb = c)), b && Yf(a.j, a.wa, f + 1), a.j.Aa()) : a.z == k ? a.ne ? (S(a.a, "tryToSend_: creating secondary to send " + g), a.z = Zf(a, m, j), a.z && (b && Yf(a.z, a.wa, f + 1), a.z.Aa())) : (S(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.be = j) : S(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
function Wf(a) {
  a.Gb != k && (a.v.H.clearTimeout(a.Gb), a.Gb = k)
}
r.oh = function() {
  this.Gb = k;
  Vf(this)
};
function $f(a) {
  a.Gb == k && (a.Gb = a.v.H.setTimeout(a.hg, 6))
}
r.Zg = function() {
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
  a.A instanceof Nf ? d = 1 == a.hh.Te() ? Gf : bg : a.A instanceof Lf ? d = cg : e(Error("Don't support endpoint " + G(a.A)));
  a.te += 1;
  b = new dg(a.v, a, a.te, d, a.A, b);
  S(a.a, "Created: " + b.r());
  if(c) {
    if(a.Yd) {
      c = new Sf(b.Ea, b.Ga, b.Ta, b.$a);
      try {
        a.Yd.call(a.Kb, c)
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
  var c = "4_RESETTING" == a.h && b.ag;
  if(b instanceof dg && !c) {
    if(a.Zd) {
      var d = new Sf(b.Ea, b.Ga, b.Ta, b.$a);
      try {
        a.Zd.call(a.Kb, d)
      }catch(f) {
        Q(a.a, "ontransportdestroyed raised uncaught exception", f), Qf(f)
      }
    }
    if(eg(a)) {
      return
    }
  }
  a.oe = b.Qa ? a.oe + b.Qa : 0;
  1 <= a.oe && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), ig(a, "stream penalty reached limit", m), a.g());
  if("3_STARTED" < a.h) {
    c ? (R(a.a, "Disposing because resettingTransport_ is done."), a.g()) : R(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    c = b instanceof gg;
    if(!c && b.gd) {
      var g = J ? Bf ? [0, 1] : [9, 20] : [0, 0], c = g[0], d = g[1];
      S(a.a, "getDelayForNextTransport_: " + G({delay:c, times:d}))
    }else {
      if(d = b.De(), b == a.j ? d ? g = ++a.Af : c || (g = a.Af = 0) : d ? g = ++a.Lf : c || (g = a.Lf = 0), c || !g) {
        d = c = 0, S(a.a, "getDelayForNextTransport_: " + G({count:g, delay:c, times:d}))
      }else {
        var i = 2E3 * Math.min(g, 3), l = Math.floor(4E3 * Math.random()) - 2E3, n = Math.max(0, b.Xf - b.ue), d = (c = Math.max(0, i + l - n)) ? 1 : 0;
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
      a.j.Aa()
    }else {
      b == a.z && (a.z = k, c ? (a.z = fg(a, g, c), a.z.Aa()) : Vf(a))
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
  this.j && this.j.$a ? (this.a.info("reset: Sending ResetFrame over existing primary."), jg(this.j, a), this.j.Aa()) : (this.j && (R(this.a, "reset: Disposing primary before sending ResetFrame."), this.j.g()), this.z && (R(this.a, "reset: Disposing secondary before sending ResetFrame."), this.z.g()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.ac = Zf(this, m, m), jg(this.ac, a), this.ac.Aa());
  ig(this, a, j)
};
function eg(a) {
  return"4_RESETTING" == a.h || a.ya
}
r.Me = function(a) {
  me(this.a, "Failed to start " + G(this) + "; error was " + G(a.message));
  this.g();
  return k
};
r.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  "1_UNSTARTED" != this.h && e(Error("ClientStream.start: " + G(this) + " already started"));
  this.Wd && this.Wd(this);
  this.h = "2_WAITING_RESOURCES";
  if(this.A instanceof Mf) {
    var a = xf(this.A.va, this), b = xf(this.A.Wa, this), a = new Cf([a, b], m, j);
    Ic(a, function(a) {
      return Wa(a, function(a) {
        return a[1]
      })
    }, k, h);
    b = w(this.ug, this);
    Ic(a, b, k, h);
    b = w(this.Me, this);
    Ic(a, k, b, h)
  }else {
    if(this.A instanceof Kf) {
      if(tb) {
        this.Oe()
      }else {
        a = this.v;
        b = this.A.va;
        if(Ge.length) {
          a = He()
        }else {
          b = new re(b + "FlashConnector.swf?cb=4bdfc178fc0e508c0cd5efc3fdb09920");
          b.Ae = "#777777";
          b.$(300, 30);
          var c = O("minerva-elements");
          c || e(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
          var d = O("minerva-elements-FlashConnectorSwf");
          d || (d = bd("div", {id:"minerva-elements-FlashConnectorSwf"}), c.appendChild(d));
          var f = a.H, g;
          var a = d, i, l = function() {
            i && delete t.__loadFlashObject_callbacks[i]
          };
          if(I && !K("1.8.1.20")) {
            g = Lc(new ye("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
          }else {
            if(0 <= Pa(zd, "9")) {
              var n;
              i = "_" + se();
              var q = new Bc(l);
              t.__loadFlashObject_callbacks[i] = function() {
                f.setTimeout(function() {
                  l();
                  Hc(q, O(n))
                }, 0)
              };
              b.tc.set("onloadcallback", '__loadFlashObject_callbacks["' + i + '"]()');
              n = Pd(b);
              Rd(b, a);
              g = q
            }else {
              g = Lc(new ye("Need Flash Player 9+; had " + (zd ? zd : "none")))
            }
          }
          var x = f.setTimeout(function() {
            g.cancel()
          }, 8E3), a = function(a) {
            f.clearTimeout(x);
            return a
          };
          Ic(g, a, a, h);
          sb = g;
          a = He();
          Ic(sb, Ie, Je)
        }
        var s = this;
        Ic(a, function(a) {
          tb || (tb = new Ee(s.v, a));
          return k
        }, k, h);
        b = w(this.Oe, this);
        Ic(a, b, k, h);
        b = w(this.Me, this);
        Ic(a, k, b, h)
      }
    }else {
      kg(this)
    }
  }
};
r.ug = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].sc, f = a[1].sc;
  this.ed.push(a[0]);
  this.ed.push(a[1]);
  this.A = new Nf(d, b, f, c);
  kg(this)
};
r.Oe = function() {
  this.A = new Lf(this.A.host, this.A.port, tb);
  kg(this)
};
function kg(a) {
  a.h = "3_STARTED";
  a.j = Zf(a, j, j);
  a.j && (Yf(a.j, a.wa, k), a.j.Aa())
}
r.c = function() {
  this.a.info(G(this) + " in disposeInternal.");
  Wf(this);
  this.h = "5_DISCONNECTED";
  for(var a = this.hc.N(), b = 0;b < a.length;b++) {
    a[b].g()
  }
  for(a = 0;a < this.ed.length;a++) {
    ab(this.ed[a].qe, this)
  }
  J && this.ic && (rc(this.ic), this.ic = k);
  this.zf && this.zf.call(this.Kb);
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
  this.Ea = c;
  this.xa = d;
  this.A = f;
  this.D = [];
  this.Ga = g;
  this.$a = !this.zb();
  this.Ta = this.xa != Gf;
  this.gg = w(this.jh, this)
}
A(dg, L);
r = dg.prototype;
r.a = T("cw.net.ClientTransport");
r.q = k;
r.ue = k;
r.Xf = k;
r.Qc = k;
r.Da = m;
r.ad = m;
r.Bb = k;
r.uc = 0;
r.Eb = -1;
r.Oc = -1;
r.ag = m;
r.gd = m;
r.Qa = 0;
r.Ub = m;
r.O = function(a) {
  a.push("<ClientTransport #", String(this.Ea), ", becomePrimary=", String(this.Ga), ">")
};
r.r = function() {
  return(this.Ga ? "Prim. T#" : "Sec. T#") + this.Ea
};
r.De = function() {
  return!(!this.Ub && this.uc)
};
r.zb = function() {
  return this.xa == Gf || this.xa == bg
};
function lg(a, b) {
  D.sort.call(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  } || fb);
  a: {
    var c = a.C, d = !a.Ta, f, g = c.Jd;
    f = c.Ng;
    for(var i = c.Mg, l = [], n = m, q = 0, x = b.length;q < x;q++) {
      var s = b[q], y = s[0], s = s[1];
      if(y == g.jb + 1) {
        g.jb += 1;
        for(l.push(s);;) {
          y = g.jb + 1;
          s = g.Za.get(y, zb);
          if(s === zb) {
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
          var B = rb(s);
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
        if(c.Xd) {
          try {
            c.Xd.call(c.Kb, l)
          }catch(id) {
            Q(c.a, "onstring raised uncaught exception", id), Qf(id)
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
      if(!/^([ -~]*)$/.test(d.re)) {
        return a.Ub = j
      }
      a.Oc += 1;
      c.push([a.Oc, d.re])
    }else {
      if(d instanceof Qe) {
        var g = a.C, i = d.Ua;
        g.nf = i;
        var l = g.wa, n = i.sb, c = m;
        n > l.bb && (c = j);
        for(var q = wb(l).concat(), d = 0;d < q.length;d++) {
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
          a.Oc = d.Nf - 1
        }else {
          if(d instanceof Ve) {
            a.C.of = d.mf
          }else {
            if(d instanceof Xe) {
              return S(a.a, a.r() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof $e) {
              return a.Ub = j, "stream_attach_failure" == d.reason ? a.Qa += 1 : "acked_unsent_strings" == d.reason && (a.Qa += 0.5), S(a.a, a.r() + " is closing soon because got " + G(d)), j
            }
            if(!(d instanceof Se)) {
              if(d instanceof We) {
                var B = a.C, id = !a.Ta;
                S(B.a, "Stream is now confirmed to exist at server.");
                B.ne = j;
                B.be && !id && (B.be = m, Vf(B))
              }else {
                c.length && (lg(a, c), $a(c));
                if(d instanceof Ye) {
                  var Kg = a.C;
                  ig(Kg, d.Ef, d.ze);
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
    a.D.length && a.Aa();
    c && (S(a.a, a.r() + " closeSoon is true.  Frames were: " + G(b)), a.g())
  }finally {
    a.ad = m
  }
}
r.jh = function() {
  Q(this.a, this.r() + " timed out due to lack of connection or no data being received.");
  this.g()
};
function ng(a) {
  a.Qc != k && (a.v.H.clearTimeout(a.Qc), a.Qc = k)
}
function Hf(a, b) {
  ng(a);
  b = Math.round(b);
  a.Qc = a.v.H.setTimeout(a.gg, b);
  R(a.a, a.r() + "'s receive timeout set to " + b + " ms.")
}
function Be(a) {
  a.xa != Gf && (a.xa == cg || a.xa == bg ? Hf(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.xa)))
}
function Xf(a) {
  var b = new Oe;
  b.Ea = a.Ea;
  b.Cf = 2;
  b.cf = 2;
  a.C.ne || (b.Gf = j);
  b.fc = a.C.fc;
  b.pe = a.Ta;
  b.pe && (b.uf = 4096);
  b.sf = 3E5;
  b.qf = a.Ta ? Math.floor(10) : 0;
  b.Yf = m;
  a.Ga && (b.Tf = k, b.Rd = Math.floor((a.Ta ? 358E4 : 25E3) / 1E3));
  b.Ua = yb(a.C.Jd);
  b.Jc = a.C.nf;
  a.D.push(b);
  a.Bb = b.Ua
}
function De(a, b) {
  b && (a.Qa += 0.5);
  a.g()
}
r.Aa = function() {
  this.Da && !this.$a && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.ad) {
    S(this.a, this.r() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Da;
    this.Da = j;
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
      b = this.Ga ? this.A.va : this.A.Wa;
      this.q = If.sd(this, this.Ga ? this.A.Bf : this.A.Mf);
      this.ue = this.v.H === zc ? z() : this.v.H.getTime();
      this.q.Qd(b, "POST", a);
      Hf(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Ta ? 0 : this.Ga ? 25E3 : 0))
    }else {
      if(this.xa == cg) {
        a = [];
        b = 0;
        for(c = this.D.length;b < c;b++) {
          a.push(this.D[b].ca())
        }
        this.D = [];
        this.q ? this.q.jc(a) : (b = this.A, this.q = new Fe(this), c = b.lh.sd(this.q), this.q.$c = c, this.ue = this.v.H === zc ? z() : this.v.H.getTime(), this.q.qd(b.host, b.port), this.q.ya || (this.q.jc(a), this.q.ya || Hf(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.xa))
      }
    }
  }
};
function Yf(a, b, c) {
  !a.Da && !a.D.length && Xf(a);
  for(var c = Math.max(c, a.Eb + 1), b = b.Ue(c), c = 0, d = b.length;c < d;c++) {
    var f = b[c], g = f[0], f = f[1];
    (-1 == a.Eb || a.Eb + 1 != g) && a.D.push(new Te(g));
    a.D.push(new Re(f));
    a.Eb = g
  }
}
r.c = function() {
  this.a.info(this.r() + " in disposeInternal.");
  dg.f.c.call(this);
  this.Xf = this.v.H === zc ? z() : this.v.H.getTime();
  this.D = [];
  ng(this);
  this.q && this.q.g();
  var a = this.C;
  this.C = k;
  hg(a, this)
};
function jg(a, b) {
  !a.Da && !a.D.length && Xf(a);
  a.D.push(new Ye(b, j));
  a.ag = j
}
function gg(a, b, c, d) {
  this.v = a;
  this.C = b;
  this.Le = c;
  this.Fe = d
}
A(gg, L);
r = gg.prototype;
r.Da = m;
r.$a = m;
r.yc = k;
r.Bb = k;
r.a = T("cw.net.DoNothingTransport");
function og(a) {
  a.yc = a.v.H.setTimeout(function() {
    a.yc = k;
    a.Fe--;
    a.Fe ? og(a) : a.g()
  }, a.Le)
}
r.Aa = function() {
  this.Da && !this.$a && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Da = j;
  og(this)
};
r.O = function(a) {
  a.push("<DoNothingTransport delay=", String(this.Le), ">")
};
r.zb = p(m);
r.r = p("Wast. T");
r.De = p(m);
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
fa(pg);
r = pg.prototype;
r.vc = aa();
r.i = function(a) {
  var b = a.Ba().i("div", rg(this, a).join(" "), a.ba);
  this.de(a, b);
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
      sa(c ? Qc : Rc, a).apply(k, d)
    }else {
      c ? Qc(a, b) : Rc(a, b)
    }
  }
};
r.ff = function(a) {
  a.cc == k && (a.cc = "rtl" == (Bd(a.p ? a.e : a.M.o.body, "direction") || ((a.p ? a.e : a.M.o.body).currentStyle ? (a.p ? a.e : a.M.o.body).currentStyle.direction : k) || (a.p ? a.e : a.M.o.body).style && (a.p ? a.e : a.M.o.body).style.direction));
  a.cc && this.Ib(a.b(), j);
  a.isEnabled() && this.Wc(a, a.Lb)
};
r.de = function(a, b) {
  a.isEnabled() || this.aa(b, 1, j);
  a.h & 8 && this.aa(b, 8, j);
  a.T & 16 && this.aa(b, 16, !!(a.h & 16));
  a.T & 64 && this.aa(b, 64, !!(a.h & 64))
};
r.Tc = function(a, b) {
  Hd(a, !b, !H && !Jb)
};
r.Ib = function(a, b) {
  this.Rb(a, this.t() + "-rtl", b)
};
r.jf = function(a) {
  var b;
  return a.T & 32 && (b = a.fb()) ? ld(b) : m
};
r.Wc = function(a, b) {
  var c;
  if(a.T & 32 && (c = a.fb())) {
    if(!b && a.h & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.h & 32 && a.Xe()
    }
    ld(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
r.le = function(a, b) {
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
  if(c && (fd(c), b)) {
    if(v(b)) {
      hd(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = Zc(c);
          c.appendChild(v(a) ? b.createTextNode(a) : a)
        }
      };
      ha(b) ? E(b, d) : ia(b) && !("nodeType" in b) ? E(cb(b), d) : d(b)
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
    Ya(d, sa(Za, a)) && (!b || Za(d, b)) && c.push(d.join("_"))
  });
  return c
}
function tg(a, b) {
  if(!a.Ce) {
    var c = a.t();
    a.Ce = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Ce[b]
}
;function ug(a, b) {
  a || e(Error("Invalid class name " + a));
  ma(b) || e(Error("Invalid decorator function " + b))
}
var vg = {};
function wg(a, b, c, d, f) {
  if(!H && (!J || !K("525"))) {
    return j
  }
  if(Mb && f) {
    return xg(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || H && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(H && Wb());
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
A(zg, xc);
r = zg.prototype;
r.e = k;
r.Hc = k;
r.Ld = k;
r.Ic = k;
r.Pa = -1;
r.Oa = -1;
r.kd = m;
var Bg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Cg = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Dg = H || 
J && K("525"), Eg = Mb && I;
r = zg.prototype;
r.Dg = function(a) {
  if(J && (17 == this.Pa && !a.ctrlKey || 18 == this.Pa && !a.altKey)) {
    this.Oa = this.Pa = -1
  }
  Dg && !wg(a.keyCode, this.Pa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.Oa = I ? yg(a.keyCode) : a.keyCode, Eg && (this.kd = a.altKey))
};
r.Eg = function(a) {
  this.Oa = this.Pa = -1;
  this.kd = a.altKey
};
r.handleEvent = function(a) {
  var b = a.Ja, c, d, f = b.altKey;
  H && "keypress" == a.type ? (c = this.Oa, d = 13 != c && 27 != c ? b.keyCode : 0) : J && "keypress" == a.type ? (c = this.Oa, d = 0 <= b.charCode && 63232 > b.charCode && xg(c) ? b.charCode : 0) : Jb ? (c = this.Oa, d = xg(c) ? b.keyCode : 0) : (c = b.keyCode || this.Oa, d = b.charCode || 0, Eg && (f = this.kd), Mb && (63 == d && 224 == c) && (c = 191));
  var g = c, i = b.keyIdentifier;
  c ? 63232 <= c && c in Bg ? g = Bg[c] : 25 == c && a.shiftKey && (g = 9) : i && i in Cg && (g = Cg[i]);
  a = g == this.Pa;
  this.Pa = g;
  b = new Fg(g, d, a, b);
  b.altKey = f;
  this.dispatchEvent(b)
};
r.b = o("e");
function Ag(a, b, c) {
  a.Ic && a.detach();
  a.e = b;
  a.Hc = M(a.e, "keypress", a, c);
  a.Ld = M(a.e, "keydown", a.Dg, c, a);
  a.Ic = M(a.e, "keyup", a.Eg, c, a)
}
r.detach = function() {
  this.Hc && (rc(this.Hc), rc(this.Ld), rc(this.Ic), this.Ic = this.Ld = this.Hc = k);
  this.e = k;
  this.Oa = this.Pa = -1
};
r.c = function() {
  zg.f.c.call(this);
  this.detach()
};
function Fg(a, b, c, d) {
  d && this.Wb(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
A(Fg, gc);
function W(a, b, c) {
  Md.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = na(b);
      if(d = vg[d]) {
        break
      }
      b = b.f ? b.f.constructor : k
    }
    b = d ? ma(d.La) ? d.La() : new d : k
  }
  this.l = b;
  this.Vc(a)
}
A(W, Md);
r = W.prototype;
r.ba = k;
r.h = 0;
r.T = 39;
r.ld = 255;
r.fh = 0;
r.Lb = j;
r.sa = k;
r.Gd = j;
r.jd = m;
r.Tg = k;
r.fb = function() {
  return this.l.fb(this)
};
function Gg(a, b) {
  b && (a.sa ? Za(a.sa, b) || a.sa.push(b) : a.sa = [b], a.l.Rb(a, b, j))
}
r.Rb = function(a, b) {
  b ? Gg(this, a) : a && this.sa && (ab(this.sa, a), 0 == this.sa.length && (this.sa = k), this.l.Rb(this, a, m))
};
r.i = function() {
  var a = this.l.i(this);
  this.e = a;
  var b = this.Tg || this.l.vc();
  b && a.setAttribute("role", b);
  this.jd || this.l.Tc(a, m);
  this.Lb || this.l.le(a, m)
};
r.Sb = function() {
  return this.l.Sb(this.b())
};
r.Q = function() {
  W.f.Q.call(this);
  this.l.ff(this);
  if(this.T & -2 && (this.Gd && Hg(this, j), this.T & 32)) {
    var a = this.fb();
    if(a) {
      var b = this.Ab || (this.Ab = new zg);
      Ag(b, a);
      P(P(P(Qd(this), b, "key", this.$e), a, "focus", this.Bg), a, "blur", this.Xe)
    }
  }
};
function Hg(a, b) {
  var c = Qd(a), d = a.b();
  b ? (P(P(P(P(c, d, "mouseover", a.Cc), d, "mousedown", a.Ac), d, "mouseup", a.af), d, "mouseout", a.Bc), a.zc != ea && P(c, d, "contextmenu", a.zc), H && P(c, d, "dblclick", a.Ze)) : (Kd(Kd(Kd(Kd(c, d, "mouseover", a.Cc), d, "mousedown", a.Ac), d, "mouseup", a.af), d, "mouseout", a.Bc), a.zc != ea && Kd(c, d, "contextmenu", a.zc), H && Kd(c, d, "dblclick", a.Ze))
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
r.Vc = ba("ba");
r.Re = function() {
  var a = this.ba;
  if(!a) {
    return""
  }
  if(!v(a)) {
    if(ha(a)) {
      a = Wa(a, md).join("")
    }else {
      if(Uc && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        nd(a, b, j);
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
r.Tc = function(a) {
  this.jd = a;
  var b = this.b();
  b && this.l.Tc(b, a)
};
r.le = function(a, b) {
  if(b || this.Lb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.l.le(c, a);
    this.isEnabled() && this.l.Wc(this, a);
    this.Lb = a;
    return j
  }
  return m
};
r.isEnabled = function() {
  return!(this.h & 1)
};
function Ig(a, b) {
  Jg(a, 2, b) && a.ka(2, b)
}
r.Kd = function() {
  return!!(this.h & 4)
};
r.setActive = function(a) {
  Jg(this, 4, a) && this.ka(4, a)
};
r.ie = function(a) {
  Jg(this, 8, a) && this.ka(8, a)
};
r.ka = function(a, b) {
  this.T & a && b != !!(this.h & a) && (this.l.ka(this, a, b), this.h = b ? this.h | a : this.h & ~a)
};
function X(a, b) {
  return!!(a.ld & b) && !!(a.T & b)
}
function Jg(a, b, c) {
  return!!(a.T & b) && !!(a.h & b) != c && (!(a.fh & b) || a.dispatchEvent(Od(b, c))) && !a.ya
}
r.Cc = function(a) {
  !Mg(a, this.b()) && (this.dispatchEvent("enter") && this.isEnabled() && X(this, 2)) && Ig(this, j)
};
r.Bc = function(a) {
  !Mg(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(m), X(this, 2) && Ig(this, m))
};
r.zc = ea;
function Mg(a, b) {
  return!!a.relatedTarget && gd(b, a.relatedTarget)
}
r.Ac = function(a) {
  if(this.isEnabled() && (X(this, 2) && Ig(this, j), ic(a) && (!J || !Mb || !a.ctrlKey))) {
    X(this, 4) && this.setActive(j), this.l.jf(this) && this.fb().focus()
  }
  !this.jd && (ic(a) && (!J || !Mb || !a.ctrlKey)) && a.preventDefault()
};
r.af = function(a) {
  this.isEnabled() && (X(this, 2) && Ig(this, j), this.Kd() && (this.lb(a) && X(this, 4)) && this.setActive(m))
};
r.Ze = function(a) {
  this.isEnabled() && this.lb(a)
};
r.lb = function(a) {
  if(X(this, 16)) {
    var b = !(this.h & 16);
    Jg(this, 16, b) && this.ka(16, b)
  }
  X(this, 8) && this.ie(j);
  X(this, 64) && (b = !(this.h & 64), Jg(this, 64, b) && this.ka(64, b));
  b = new dc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.$d = a.$d);
  return this.dispatchEvent(b)
};
r.Bg = function() {
  X(this, 32) && Jg(this, 32, j) && this.ka(32, j)
};
r.Xe = function() {
  X(this, 4) && this.setActive(m);
  X(this, 32) && Jg(this, 32, m) && this.ka(32, m)
};
r.$e = function(a) {
  return this.Lb && this.isEnabled() && this.Fd(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
r.Fd = function(a) {
  return 13 == a.keyCode && this.lb(a)
};
ma(W) || e(Error("Invalid component class " + W));
ma(pg) || e(Error("Invalid renderer class " + pg));
var Ng = na(W);
vg[Ng] = pg;
ug("goog-control", function() {
  return new W(k)
});
function Og() {
}
A(Og, pg);
fa(Og);
r = Og.prototype;
r.vc = p("button");
r.aa = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : Og.f.aa.call(this, a, b, c)
};
r.i = function(a) {
  var b = Og.f.i.call(this, a), c = a.wc();
  c && this.ke(b, c);
  (c = a.xc()) && this.Zc(b, c);
  a.T & 16 && this.aa(b, 16, !!(a.h & 16));
  return b
};
r.xc = ea;
r.Zc = ea;
r.wc = function(a) {
  return a.title
};
r.ke = function(a, b) {
  a && (a.title = b || "")
};
r.t = p("goog-button");
function Pg() {
}
A(Pg, Og);
fa(Pg);
r = Pg.prototype;
r.vc = aa();
r.i = function(a) {
  a.p && m != a.Gd && Hg(a, m);
  a.Gd = m;
  a.ld &= -256;
  a.p && a.h & 32 && e(Error("Component already rendered"));
  a.h & 32 && a.ka(32, m);
  a.T &= -33;
  return a.Ba().i("button", {"class":rg(this, a).join(" "), disabled:!a.isEnabled(), title:a.wc() || "", value:a.xc() || ""}, a.Re() || "")
};
r.ff = function(a) {
  P(Qd(a), a.b(), "click", a.lb)
};
r.Tc = ea;
r.Ib = ea;
r.jf = function(a) {
  return a.isEnabled()
};
r.Wc = ea;
r.ka = function(a, b, c) {
  Pg.f.ka.call(this, a, b, c);
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
r.aa = ea;
function Qg(a, b, c) {
  W.call(this, a, b || Pg.La(), c)
}
A(Qg, W);
r = Qg.prototype;
r.xc = o("Zf");
r.Zc = function(a) {
  this.Zf = a;
  this.l.Zc(this.b(), a)
};
r.wc = o("Vf");
r.ke = function(a) {
  this.Vf = a;
  this.l.ke(this.b(), a)
};
r.c = function() {
  Qg.f.c.call(this);
  delete this.Zf;
  delete this.Vf
};
r.Q = function() {
  Qg.f.Q.call(this);
  if(this.T & 32) {
    var a = this.fb();
    a && P(Qd(this), a, "keyup", this.Fd)
  }
};
r.Fd = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.lb(a) : 32 == a.keyCode
};
ug("goog-button", function() {
  return new Qg(k)
});
function Rg() {
}
A(Rg, Og);
fa(Rg);
r = Rg.prototype;
r.i = function(a) {
  var b = {"class":"goog-inline-block " + rg(this, a).join(" "), title:a.wc() || ""}, b = a.Ba().i("div", b, Sg(this, a.ba, a.Ba()));
  this.de(a, b);
  return b
};
r.vc = p("button");
r.de = function(a, b) {
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
r.t = p("goog-custom-button");
function Tg(a, b, c) {
  Qg.call(this, a, b || Rg.La(), c)
}
A(Tg, Qg);
ug("goog-custom-button", function() {
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
  var b = {}, a = String(a), c = "#" == a.charAt(0) ? a : "#" + a;
  if(Wg.test(c)) {
    return b.Ec = Xg(c), b.type = "hex", b
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
    return b.Ec = Zg(c[0], c[1], c[2]), b.type = "rgb", b
  }
  if(Ug && (c = Ug[a.toLowerCase()])) {
    return b.Ec = c, b.type = "named", b
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
ch.prototype.kc = k;
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
function gh(a) {
  if(!a.df && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.df = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.df
}
dh = new eh;
function ih(a) {
  this.headers = new mb;
  this.Mb = a || k
}
A(ih, xc);
ih.prototype.a = T("goog.net.XhrIo");
var jh = /^https?$/i;
r = ih.prototype;
r.Fa = m;
r.k = k;
r.fd = k;
r.Nd = "";
r.lf = "";
r.Xb = 0;
r.Yb = "";
r.wd = m;
r.Fc = m;
r.Id = m;
r.ib = m;
r.bd = 0;
r.pb = k;
r.If = "";
r.rh = m;
r.send = function(a, b, c, d) {
  this.k && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Nd = a;
  this.Yb = "";
  this.Xb = 0;
  this.lf = b;
  this.wd = m;
  this.Fa = j;
  this.k = this.Mb ? fh(this.Mb) : fh(dh);
  this.fd = this.Mb ? this.Mb.kc || (this.Mb.kc = hh(this.Mb)) : dh.kc || (dh.kc = hh(dh));
  this.k.onreadystatechange = w(this.yf, this);
  try {
    R(this.a, kh(this, "Opening Xhr")), this.Id = j, this.k.open(b, a, j), this.Id = m
  }catch(f) {
    R(this.a, kh(this, "Error opening Xhr: " + f.message));
    lh(this, f);
    return
  }
  var a = c || "", g = this.headers.L();
  d && kb(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.ra("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  kb(g, function(a, b) {
    this.k.setRequestHeader(b, a)
  }, this);
  this.If && (this.k.responseType = this.If);
  "withCredentials" in this.k && (this.k.withCredentials = this.rh);
  try {
    this.pb && (zc.clearTimeout(this.pb), this.pb = k), 0 < this.bd && (R(this.a, kh(this, "Will abort after " + this.bd + "ms if incomplete")), this.pb = zc.setTimeout(w(this.kh, this), this.bd)), R(this.a, kh(this, "Sending request")), this.Fc = j, this.k.send(a), this.Fc = m
  }catch(i) {
    R(this.a, kh(this, "Send error: " + i.message)), lh(this, i)
  }
};
r.kh = function() {
  "undefined" != typeof ca && this.k && (this.Yb = "Timed out after " + this.bd + "ms, aborting", this.Xb = 8, R(this.a, kh(this, this.Yb)), this.dispatchEvent("timeout"), this.abort(8))
};
function lh(a, b) {
  a.Fa = m;
  a.k && (a.ib = j, a.k.abort(), a.ib = m);
  a.Yb = b;
  a.Xb = 5;
  mh(a);
  nh(a)
}
function mh(a) {
  a.wd || (a.wd = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
r.abort = function(a) {
  this.k && this.Fa && (R(this.a, kh(this, "Aborting")), this.Fa = m, this.ib = j, this.k.abort(), this.ib = m, this.Xb = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), nh(this))
};
r.c = function() {
  this.k && (this.Fa && (this.Fa = m, this.ib = j, this.k.abort(), this.ib = m), nh(this, j));
  ih.f.c.call(this)
};
r.yf = function() {
  !this.Id && !this.Fc && !this.ib ? this.Rg() : oh(this)
};
r.Rg = function() {
  oh(this)
};
function oh(a) {
  if(a.Fa && "undefined" != typeof ca) {
    if(a.fd[1] && 4 == a.Ma() && 2 == ph(a)) {
      R(a.a, kh(a, "Local request error detected and ignored"))
    }else {
      if(a.Fc && 4 == a.Ma()) {
        zc.setTimeout(w(a.yf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.Ma()) {
          R(a.a, kh(a, "Request complete"));
          a.Fa = m;
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
                var g = String(a.Nd).match(bf)[1] || k;
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
              a.Xb = 6;
              var l;
              try {
                l = 2 < a.Ma() ? a.k.statusText : ""
              }catch(n) {
                R(a.a, "Can not get status: " + n.message), l = ""
              }
              a.Yb = l + " [" + ph(a) + "]";
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
    var c = a.k, d = a.fd[0] ? ea : k;
    a.k = k;
    a.fd = k;
    a.pb && (zc.clearTimeout(a.pb), a.pb = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(f) {
      me(a.a, "Problem encountered resetting onreadystatechange: " + f.message)
    }
  }
}
r.Kd = function() {
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
  return b + " [" + a.lf + " " + a.Nd + " " + ph(a) + "]"
}
;var qh = !(H || J && !K("420+"));
function rh(a, b) {
  this.cd = a;
  this.na = b
}
A(rh, L);
r = rh.prototype;
r.q = k;
r.Sa = -1;
r.We = m;
r.bf = "Content-Length Server Date Expires Keep-Alive Content-Type Transfer-Encoding Cache-Control".split(" ");
function sh(a) {
  var b = Ef(a.Ie), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.na, c, b), 1 != b && a.g()) : a.g()
}
r.Gg = function() {
  sh(this);
  if(!this.ya) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.na);
    this.g()
  }
};
r.Wg = function() {
  var a = t.parent;
  if(a) {
    this.Sa = this.q.Ma();
    if(2 <= this.Sa && !this.We) {
      for(var b = new mb, c = this.bf.length;c--;) {
        var d = this.bf[c];
        try {
          b.set(d, this.q.k.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.R() && (this.We = j, a.__XHRMaster_ongotheaders(this.na, qb(b)), this.ya)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.na, this.Sa);
    qh && 3 == this.Sa && sh(this)
  }else {
    this.g()
  }
};
r.Qd = function(a, b, c) {
  this.q = new ih;
  M(this.q, "readystatechange", w(this.Wg, this));
  M(this.q, "complete", w(this.Gg, this));
  this.q.send(a + "io/", b, c, {"Content-Type":"application/octet-stream"});
  this.Ie = new Df(this.q.k, 1048576)
};
r.c = function() {
  rh.f.c.call(this);
  delete this.Ie;
  this.q && this.q.g();
  delete this.cd.ec[this.na];
  delete this.cd
};
function th() {
  this.ec = {}
}
A(th, L);
th.prototype.Lg = function(a, b, c, d) {
  var f = new rh(this, a);
  this.ec[a] = f;
  f.Qd(b, c, d)
};
th.prototype.rg = function(a) {
  (a = this.ec[a]) && a.g()
};
th.prototype.c = function() {
  th.f.c.call(this);
  for(var a = va(this.ec);a.length;) {
    a.pop().g()
  }
  delete this.ec
};
var uh = new th;
t.__XHRSlave_makeRequest = w(uh.Lg, uh);
t.__XHRSlave_dispose = w(uh.rg, uh);
var vh = T("cw.net.demo");
function wh() {
}
wh.prototype.Te = function() {
  return Boolean(Number((new df(document.location)).Z.get("httpStreaming", "0"))) ? 2 : 1
};
function xh(a) {
  this.o = a
}
var yh = /\s*;\s*/;
r = xh.prototype;
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
  var d = this.ra(a);
  this.set(a, "", 0, b, c);
  return d
};
r.ta = function() {
  return zh(this).keys
};
r.N = function() {
  return zh(this).$f
};
r.Na = function() {
  return!this.o.cookie
};
r.R = function() {
  return!this.o.cookie ? 0 : (this.o.cookie || "").split(yh).length
};
r.ra = function(a) {
  return u(this.get(a))
};
r.oc = function(a) {
  for(var b = zh(this).$f, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return j
    }
  }
  return m
};
r.clear = function() {
  for(var a = zh(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b])
  }
};
function zh(a) {
  for(var a = (a.o.cookie || "").split(yh), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), -1 == d ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{keys:b, $f:c}
}
var Ah = new xh(document);
Ah.$h = 3950;
function Bh() {
  this.Ff = z()
}
var Ch = new Bh;
Bh.prototype.set = ba("Ff");
Bh.prototype.reset = function() {
  this.set(z())
};
Bh.prototype.get = o("Ff");
function Dh(a) {
  this.Ug = a || "";
  this.eh = Ch
}
Dh.prototype.Of = j;
Dh.prototype.bh = j;
Dh.prototype.ah = j;
Dh.prototype.Pf = m;
function Eh(a) {
  return 10 > a ? "0" + a : String(a)
}
function Fh(a, b) {
  var c = (a.Uf - b) / 1E3, d = c.toFixed(3), f = 0;
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
Gh.prototype.Pf = j;
function Hh(a) {
  this.Vg = w(this.dg, this);
  this.Qe = new Gh;
  this.hf = this.Qe.Of = m;
  this.e = a;
  this.tg = this.e.ownerDocument || this.e.document;
  var a = Xc(this.e), b = k;
  if(H) {
    a = b = a.o.createStyleSheet(), H ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a.innerHTML = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
  }else {
    var c = $c(a.o, "head", h, h)[0];
    c || (b = $c(a.o, "body", h, h)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    var d = b = a.i("style");
    H ? d.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : d.innerHTML = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}";
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
Hh.prototype.dg = function(a) {
  var b = 100 >= this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight, c = this.tg.createElement("div");
  c.className = "logmsg";
  var d = this.Qe, f;
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
  g.push(d.Ug, " ");
  if(d.Of) {
    var i = new Date(a.Uf);
    g.push("[", Eh(i.getFullYear() - 2E3) + Eh(i.getMonth() + 1) + Eh(i.getDate()) + " " + Eh(i.getHours()) + ":" + Eh(i.getMinutes()) + ":" + Eh(i.getSeconds()) + "." + Eh(Math.floor(i.getMilliseconds() / 10)), "] ")
  }
  d.bh && g.push("[", Oa(Fh(a, d.eh.get())), "s] ");
  d.ah && g.push("[", Ia(a.Kg), "] ");
  g.push('<span class="', f, '">', Ha(Oa(Ia(a.tf))));
  d.Pf && a.zd && g.push("<br>", Ha(Oa(a.yd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  b && (this.e.scrollTop = this.e.scrollHeight)
};
Hh.prototype.clear = function() {
  this.e.innerHTML = ""
};
function Ih(a, b, c, d, f, g) {
  6 == arguments.length ? this.setTransform(a, b, c, d, f, g) : (0 != arguments.length && e(Error("Insufficient matrix parameters")), this.ea = this.ha = 1, this.Y = this.fa = this.ga = this.ia = 0)
}
r = Ih.prototype;
r.L = function() {
  return new Ih(this.ea, this.Y, this.fa, this.ha, this.ga, this.ia)
};
r.setTransform = function(a, b, c, d, f, g) {
  (!la(a) || !la(b) || !la(c) || !la(d) || !la(f) || !la(g)) && e(Error("Invalid transform parameters"));
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
  var d = new Ih, f = Math.cos(a), a = Math.sin(a), b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f), c = this.ea, d = this.fa;
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
  this.td = m
}
A(Y, xc);
r = Y.prototype;
r.ua = k;
r.e = k;
r.Wf = k;
r.b = o("e");
r.addEventListener = function(a, b, c, d) {
  M(this.e, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  pc(this.e, a, b, c, d)
};
r.c = function() {
  Y.f.c.call(this);
  tc(this.e)
};
function Z(a, b, c, d) {
  Y.call(this, a, b);
  this.se = c;
  this.ua.fe(this, c);
  this.fill = d;
  this.ua.ee(this, d)
}
A(Z, Y);
Z.prototype.fill = k;
Z.prototype.se = k;
Z.prototype.yg = o("fill");
Z.prototype.Ag = o("se");
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
  fd(this.b())
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
  this.qa = a;
  this.Zb = b == k ? 1 : b
}
A(Sh, Rh);
function Th() {
  this.rb = 1;
  this.qa = "black"
}
;function Uh() {
  this.B = [];
  this.d = [];
  this.pa = []
}
Uh.prototype.ub = k;
Uh.prototype.U = k;
Uh.prototype.Jb = j;
var Vh = [2, 2, 6, 6, 0];
r = Uh.prototype;
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
r.He = function(a) {
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
  var f = this.U[0] - a * Math.cos(Wc(c)) + a * Math.cos(Wc(c + d)), g = this.U[1] - b * Math.sin(Wc(c)) + b * Math.sin(Wc(c + d));
  this.B.push(3);
  this.d.push(1);
  this.pa.push(a, b, c, d, f, g);
  this.Jb = m;
  this.U = [f, g];
  return this
};
r.fg = function(a, b, c, d) {
  for(var f = this.U[0] - a * Math.cos(Wc(c)), g = this.U[1] - b * Math.sin(Wc(c)), i = Wc(d), d = Math.ceil(2 * (Math.abs(i) / Math.PI)), i = i / d, c = Wc(c), l = 0;l < d;l++) {
    var n = Math.cos(c), q = Math.sin(c), x = 4 / 3 * Math.sin(i / 2) / (1 + Math.cos(i / 2)), s = f + (n - x * q) * a, y = g + (q + x * n) * b, c = c + i, n = Math.cos(c), q = Math.sin(c);
    this.He(s, y, f + (n + x * q) * a, g + (q - x * n) * b, f + n * a, g + q * b)
  }
  return this
};
function Wh(a, b) {
  for(var c = a.pa, d = 0, f = 0, g = a.B.length;f < g;f++) {
    var i = a.B[f], l = Vh[i] * a.d[f];
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
var Xh = {};
Xh[0] = Uh.prototype.moveTo;
Xh[1] = Uh.prototype.lineTo;
Xh[4] = Uh.prototype.close;
Xh[2] = Uh.prototype.He;
Xh[3] = Uh.prototype.fg;
Uh.prototype.Na = function() {
  return 0 == this.B.length
};
function Yh(a, b, c, d, f) {
  Md.call(this, f);
  this.width = a;
  this.height = b;
  this.la = c || k;
  this.Pb = d || k
}
A(Yh, Md);
r = Yh.prototype;
r.F = k;
r.Ha = 0;
r.ab = 0;
r.Ve = function() {
  return this.X()
};
r.X = function() {
  return this.p ? Ed(this.b()) : la(this.width) && la(this.height) ? new N(this.width, this.height) : k
};
function Zh(a) {
  var b = a.X();
  return b ? b.width / (a.la ? new N(a.la, a.Pb) : a.X()).width : 0
}
;function $h(a, b, c, d, f) {
  Yh.call(this, a, b, c, d, f);
  this.Ke = {};
  this.we = J && !K(526);
  this.gb = new Id(this)
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
r.tb = function(a, b) {
  (b || this.F).b().appendChild(a.b())
};
r.ee = function(a, b) {
  var c = a.b();
  b instanceof Sh ? (c.setAttribute("fill", b.qa), c.setAttribute("fill-opacity", b.Zb)) : c.setAttribute("fill", "none")
};
r.fe = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.qa);
    var d = b.rb;
    v(d) && -1 != d.indexOf("px") ? c.setAttribute("stroke-width", parseFloat(d) / Zh(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
r.i = function() {
  var a = bi(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = bi(this, "g");
  this.vd = bi(this, "defs");
  this.F = new Nh(b, this);
  a.appendChild(this.vd);
  a.appendChild(b);
  this.e = a;
  if(this.la || this.Ha || this.ab) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.we ? this.dd() : this.b().setAttribute("viewBox", this.Ha + " " + this.ab + " " + (this.la ? this.la + " " + this.Pb : ""))
  }
};
r.dd = function() {
  if(this.p && (this.la || this.Ha || !this.ab)) {
    var a = this.X();
    if(0 == a.width) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.Ha, c = -this.ab, d = a.width / this.la, a = a.height / this.Pb;
      this.F.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
r.$ = function(a, b) {
  Cd(this.b(), a, b)
};
r.X = function() {
  if(!I) {
    return this.p ? Ed(this.b()) : $h.f.X.call(this)
  }
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.p && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = Ed(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Ed(f), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
r.clear = function() {
  this.F.clear();
  fd(this.vd);
  this.Ke = {}
};
r.qc = function(a, b, c, d, f, g, i) {
  a = bi(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new Ph(a, this, f, g);
  this.tb(f, i);
  return f
};
r.drawImage = function(a, b, c, d, f, g) {
  a = bi(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new Qh(a, this);
  this.tb(f, g);
  return f
};
r.Q = function() {
  var a = this.X();
  $h.f.Q.call(this);
  a || this.dispatchEvent("resize");
  if(this.we) {
    var a = this.width, b = this.height;
    "string" == typeof a && (-1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%")) && P(this.gb, ci(), Ac, this.dd);
    this.dd()
  }
};
r.cb = function() {
  $h.f.cb.call(this);
  this.we && Kd(this.gb, ci(), Ac, this.dd)
};
r.c = function() {
  delete this.Ke;
  delete this.vd;
  delete this.F;
  $h.f.c.call(this)
};
function ci() {
  ai || (ai = new yc(400), ai.start());
  return ai
}
;function di() {
  return this.e = this.ua.M.b(this.S) || this.e
}
function ei(a, b) {
  this.S = a.id;
  Y.call(this, a, b)
}
A(ei, Kh);
ei.prototype.b = di;
ei.prototype.clear = function() {
  fd(this.b())
};
ei.prototype.$ = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  this.ua.F != this && (c.coordorigin = "0 0")
};
function fi(a, b, c, d, f, g, i, l) {
  this.S = a.id;
  Z.call(this, a, b, i, l);
  this.zi = c;
  this.Ai = d;
  this.Mi = f;
  this.Ni = g
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
  this.gb = new Id(this)
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
  c.id = "goog_" + Qa++;
  return c
}
function li(a) {
  ji && a.p && (a.b().innerHTML = a.b().innerHTML)
}
ii.prototype.tb = function(a, b) {
  (b || this.F).b().appendChild(a.b());
  li(this)
};
ii.prototype.ee = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    "fill" == f.tagName && c.removeChild(f)
  }
  b instanceof Sh ? "transparent" == b.qa ? c.filled = m : 1 != b.Zb ? (c.filled = j, d = ki(this, "fill"), d.opacity = Math.round(100 * b.Zb) + "%", d.color = b.qa, c.appendChild(d)) : (c.filled = j, c.fillcolor = b.qa) : c.filled = m;
  li(this)
};
ii.prototype.fe = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = j;
    var d = b.rb, d = v(d) && -1 == d.indexOf("px") ? parseFloat(d) : d * Zh(this), f = c.getElementsByTagName("stroke")[0];
    1 > d ? (f = f || ki(this, "stroke"), f.opacity = d, f.Qi = "1px", f.color = b.qa, c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.qa, c.strokeweight = d + "px")
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
  var a = this.width, b = this.height, c = this.M.i("div", {style:"overflow:hidden;position:relative;width:" + (v(a) && Fa(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (v(b) && Fa(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = ki(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.la ? $(this.la) + " " + $(this.Pb) : $(a) + " " + $(b);
  d.coordorigin = u(this.Ha) ? $(this.Ha) + " " + $(this.ab) : "0 0";
  c.appendChild(d);
  this.F = new ei(d, this);
  M(c, "resize", w(this.Ed, this))
};
r.Ed = function() {
  var a = Ed(this.b()), b = this.F.b().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.b();a && a.currentStyle && "none" != a.currentStyle.display;) {
      a = a.parentNode
    }
    a && a.currentStyle && P(this.gb, a, "propertychange", this.Ed)
  }
  this.dispatchEvent("resize")
};
r.$ = function(a, b) {
  Cd(this.b(), a, b)
};
r.X = function() {
  var a = this.b();
  return new N(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
r.clear = function() {
  this.F.clear()
};
r.qc = function(a, b, c, d, f, g, i) {
  var l = ki(this, "oval");
  mi(l, a - c, b - d, 2 * c, 2 * d);
  a = new fi(l, this, a, b, c, d, f, g);
  this.tb(a, i);
  return a
};
r.drawImage = function(a, b, c, d, f, g) {
  var i = ki(this, "image");
  mi(i, a, b, c, d);
  ji ? i.src = f : i.setAttribute("src", f);
  a = new gi(i, this);
  this.tb(a, g);
  return a
};
r.Q = function() {
  ii.f.Q.call(this);
  this.Ed();
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
  this.P.length && (this.P.length = 0, pi(this.ua))
};
oi.prototype.$ = aa();
oi.prototype.appendChild = function(a) {
  this.P.push(a)
};
oi.prototype.za = function() {
  for(var a = 0, b = this.P.length;a < b;a++) {
    qi(this.ua, this.P[a])
  }
};
function ri(a, b, c, d, f, g, i, l) {
  Z.call(this, a, b, i, l);
  this.mg = c;
  this.ng = d;
  this.Jf = f;
  this.Kf = g;
  this.K = new Uh;
  this.K.clear();
  this.K.moveTo(this.mg + this.Jf * Math.cos(Wc(0)), this.ng + this.Kf * Math.sin(Wc(0)));
  this.K.arcTo(this.Jf, this.Kf, 0, 360);
  this.K.close();
  this.Sg = new si(k, b, this.K, i, l)
}
A(ri, Lh);
ri.prototype.za = function(a) {
  this.Sg.za(a)
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
  this.Qb && pi(this.ua)
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
  this.uh = c;
  this.wh = d;
  this.ye = f;
  this.Dd = g;
  this.dh = i
}
A(ti, Mh);
ti.prototype.Qb = m;
ti.prototype.$ = function(a, b) {
  this.ye = a;
  this.Dd = b;
  this.Qb && pi(this.ua)
};
ti.prototype.za = function(a) {
  this.ef ? (this.ye && this.Dd && a.drawImage(this.ef, this.uh, this.wh, this.ye, this.Dd), this.Qb = j) : (a = new Image, a.onload = w(this.Cg, this, a), a.src = this.dh)
};
ti.prototype.Cg = function(a) {
  this.ef = a;
  pi(this.ua)
};
function ui(a, b, c, d, f) {
  Yh.call(this, a, b, c, d, f)
}
A(ui, Yh);
r = ui.prototype;
r.ee = function() {
  pi(this)
};
r.fe = function() {
  pi(this)
};
function vi(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.Wf ? b.Wf.L() : new Ih, f = d.ga, g = d.ia;
  (f || g) && c.translate(f, g);
  (d = d.Y) && c.rotate(Math.asin(d))
}
r.i = function() {
  var a = this.M.i("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Ob = this.M.i("canvas");
  a.appendChild(this.Ob);
  this.Jg = this.F = new oi(this);
  this.Yg = 0;
  wi(this)
};
r.getContext = function() {
  this.b() || this.i();
  this.vb || (this.vb = this.Ob.getContext("2d"), this.vb.save());
  return this.vb
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
  c && (f = this.b().parentNode, g = Ed(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || Ed(f), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
function wi(a) {
  Cd(a.b(), a.width, a.height);
  var b = a.X();
  b && (Cd(a.Ob, b.width, b.height), a.Ob.width = b.width, a.Ob.height = b.height, a.vb = k)
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
  if(a.Li) {
    a.Ki = j
  }else {
    if(a.p) {
      a.reset();
      if(a.la) {
        var b = a.X();
        a.getContext().scale(b.width / a.la, b.height / a.Pb)
      }
      (a.Ha || a.ab) && a.getContext().translate(-a.Ha, -a.ab);
      vi(a, a.F);
      a.F.za(a.vb);
      a.getContext().restore()
    }
  }
}
function qi(a, b) {
  var c = a.getContext();
  vi(a, b);
  if(!b.yg || !b.Ag) {
    b.za(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof Sh) {
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
    if(d = b.se) {
      b.za(c), c.strokeStyle = d.qa, d = d.rb, v(d) && -1 != d.indexOf("px") && (d = parseFloat(d) / Zh(a)), c.lineWidth = d, c.stroke()
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
  this.p && (!this.Yg && !(b != this.F && b != this.Jg)) && qi(this, a)
};
r.qc = function(a, b, c, d, f, g, i) {
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
  this.vb = k;
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
A(xi, xc);
r = xi.prototype;
r.Xa = k;
r.ce = k;
function yi(a, b) {
  b && (E(b, function(a) {
    this.dc(a, m)
  }, a), db(a.w, b))
}
r.Cd = o("Xa");
r.Ue = function() {
  return cb(this.w)
};
r.Yc = function(a) {
  a != this.Xa && (this.dc(this.Xa, m), this.Xa = a, this.dc(a, j));
  this.dispatchEvent("select")
};
r.Bd = function() {
  return this.Xa ? Ua(this.w, this.Xa) : -1
};
r.je = function(a) {
  this.Yc(this.w[a] || k)
};
r.clear = function() {
  $a(this.w);
  this.Xa = k
};
r.c = function() {
  xi.f.c.call(this);
  delete this.w;
  this.Xa = k
};
r.dc = function(a, b) {
  a && ("function" == typeof this.ce ? this.ce(a, b) : "function" == typeof a.ie && a.ie(b))
};
function zi() {
}
A(zi, pg);
fa(zi);
var Ai = 0;
zi.prototype.i = function(a) {
  var b = rg(this, a);
  return a.Ba().i("div", b ? b.join(" ") : k, Bi(this, a.ba, a.Ve(), a.Ba()))
};
function Bi(a, b, c, d) {
  for(var f = [], g = 0, i = 0;g < c.height;g++) {
    for(var l = [], n = 0;n < c.width;n++) {
      var q = b && b[i++];
      l.push(Ci(a, q, d))
    }
    f.push(d.i("tr", a.t() + "-row", l))
  }
  return a.Ge(f, d)
}
zi.prototype.Ge = function(a, b) {
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
zi.prototype.Uc = function(a, b) {
  if(a) {
    var c = $c(document, "tbody", this.t() + "-body", a)[0];
    if(c) {
      var d = 0;
      E(c.rows, function(a) {
        E(a.cells, function(a) {
          fd(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = Xc(a), i = c.rows[0].cells.length;d < b.length;) {
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
    Hd(a, j, I)
  }
};
function Di(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && Za(Pc(c), a.t() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function Ei(a, b, c, d) {
  c && (c = c.parentNode, a = a.t() + "-cell-hover", d ? Qc(c, a) : Rc(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id))
}
zi.prototype.t = p("goog-palette");
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
r.Vc = function(a) {
  Fi.f.Vc.call(this, a);
  Gi(this);
  this.I ? (this.I.clear(), yi(this.I, a)) : (this.I = new xi(a), a = w(this.dc, this), this.I.ce = a, P(Qd(this), this.I, "select", this.Fg));
  this.hb = -1
};
r.Re = p("");
r.Cc = function(a) {
  Fi.f.Cc.call(this, a);
  var b = Di(this.l, this, a.target);
  if((!b || !a.relatedTarget || !gd(b, a.relatedTarget)) && b != Hi(this)) {
    a = this.ba, Ii(this, a ? Ua(a, b) : -1)
  }
};
r.Bc = function(a) {
  Fi.f.Bc.call(this, a);
  var b = Di(this.l, this, a.target);
  (!b || !a.relatedTarget || !gd(b, a.relatedTarget)) && b == Hi(this) && Ei(this.l, this, b, m)
};
r.Ac = function(a) {
  Fi.f.Ac.call(this, a);
  if(this.Kd() && (a = Di(this.l, this, a.target), a != Hi(this))) {
    var b = this.ba;
    Ii(this, b ? Ua(b, a) : -1)
  }
};
r.lb = function() {
  var a = Hi(this);
  return a ? (this.Yc(a), this.dispatchEvent("action")) : m
};
r.$e = function(a) {
  var b = this.ba, b = b ? b.length : 0, c = this.n.width;
  if(0 == b || !this.isEnabled()) {
    return m
  }
  if(13 == a.keyCode || 32 == a.keyCode) {
    return this.lb(a)
  }
  if(36 == a.keyCode) {
    return Ii(this, 0), j
  }
  if(35 == a.keyCode) {
    return Ii(this, b - 1), j
  }
  var d = 0 > this.hb ? this.Bd() : this.hb;
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
r.Fg = aa();
r.Ve = o("n");
r.$ = function(a, b) {
  this.b() && e(Error("Component already rendered"));
  this.n = la(a) ? new N(a, b) : a;
  Gi(this)
};
function Hi(a) {
  var b = a.ba;
  return b && b[a.hb]
}
function Ii(a, b) {
  b != a.hb && (Ji(a, a.hb, m), a.hb = b, Ji(a, b, j))
}
r.Bd = function() {
  return this.I ? this.I.Bd() : -1
};
r.Cd = function() {
  return this.I ? this.I.Cd() : k
};
r.je = function(a) {
  this.I && this.I.je(a)
};
r.Yc = function(a) {
  this.I && this.I.Yc(a)
};
function Ji(a, b, c) {
  if(a.b()) {
    var d = a.ba;
    d && (0 <= b && b < d.length) && Ei(a.l, a, d[b], c)
  }
}
r.dc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.l.t() + "-cell-selected";
    b ? Qc(c, d) : Rc(c, d)
  }
};
function Gi(a) {
  var b = a.ba;
  if(b) {
    if(a.n && a.n.width) {
      if(b = Math.ceil(b.length / a.n.width), !la(a.n.height) || a.n.height < b) {
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
  this.nc = a || [];
  Fi.call(this, k, b || zi.La(), c);
  this.nc = this.nc;
  this.Lc = k;
  this.Uc(Wa(this.nc, function(a) {
    var b = this.Ba().i("div", {"class":this.l.t() + "-colorswatch", style:"background-color:" + a});
    b.title = "#" == a.charAt(0) ? "RGB (" + ah(a).join(", ") + ")" : a;
    return b
  }, this))
}
A(Ki, Fi);
Ki.prototype.Lc = k;
function Li(a) {
  if(a) {
    try {
      return Vg(a).Ec
    }catch(b) {
    }
  }
  return k
}
;function Mi(a) {
  a = String(a);
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
  me(Si, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Ti() {
}
Ti.prototype.Rf = function(a) {
  this.C = a;
  ag(this.C, "subprotocol:whiteboard")
};
Ti.prototype.Qf = function(a, b) {
  Si.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  Ui = k
};
Ti.prototype.Sf = function(a) {
  var a = Mi(a), b = a[0], c = a[1];
  "Point" == b ? Ni.qc(c.x, c.y, 5, 5, new Th, new Sh(c.color), h) : "ClearBoard" == b ? (Ni.g(), Vi()) : Q(Si, "Strange message from server: " + G(a))
};
Ti.prototype.reset = function(a) {
  Si.info("resetting with reason: " + a);
  this.C.reset(a)
};
var Ui = k, Wi = new Mc(t.window);
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
  ag(a.C, za(["ClearBoard", k]))
}
function aj(a) {
  var b = new gc(a), a = b.offsetX, b = b.offsetY;
  Ni.qc(a, b, 5, 5, new Th, new Sh(Oi), h);
  var c = Ui, d = Oi;
  Si.info("Telling server about circle at: " + a + ", " + b + " with color " + d);
  ag(c.C, za(["Point", {x:a, y:b, color:d}]))
}
function Vi() {
  var a;
  a = H && !K("9") ? new ii(800, 600, h, h, h) : J && (!K("420") || Kb) ? new ui(800, 600, h, h, h) : new $h(800, 600, h, h, h);
  a.i();
  Pi = O("drawArea");
  Rd(a, Pi);
  Ni = a
}
var bj = "#E06666";
function cj(a) {
  var b;
  (a = a.target.Cd()) ? (a = a.style[Ra("background-color")] || "", b = Li(a)) : b = k;
  b || (b = bj);
  Oi = b;
  Ah.set("whiteboard_defaultColor", b);
  a = O("whiteboard-cp-value");
  v("background-color") ? Ad(a, b, "background-color") : ua("background-color", sa(Ad, a));
  a = O("whiteboard-cp-value");
  a.title = b;
  b = Vg(b).Ec;
  hd(a, b);
  b = ah(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = Zg(b[0], b[1], b[2]);
  v("color") ? Ad(a, b, "color") : ua("color", sa(Ad, a))
}
function dj() {
  Qi = (new df(document.location)).Z;
  if(Ri = Boolean(Number(Qi.get("logging", "0")))) {
    qe().Xc(ke);
    var a = new Hh(document.getElementById("log"));
    if(j != a.hf) {
      var b = qe(), c = a.Vg;
      b.Vb || (b.Vb = []);
      b.Vb.push(c);
      a.hf = j
    }
  }else {
    qe().Xc(ce)
  }
  Si.info("Logger works.");
  (a = Ah.get("whiteboard_defaultColor")) && (bj = a);
  Oi = bj;
  b = O("whiteboard-controls-left");
  a = O("whiteboard-controls-right");
  c = bd("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  ed(b, c);
  c = bd("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  ed(b, c);
  b = new Ki("#EA9999 #F9CB9C #FFE599 #B6D7A8 #A2C4C9 #9FC5E8 #B4A7D6 #D5A6BD #E06666 #F6B26B #FFD966 #93C47D #76A5AF #6FA8DC #8E7CC3 #C27BA0 #CC0000 #E69138 #F1C232 #6AA84F #45818E #3D85C6 #674EA7 #A64D79".split(" "));
  b.$(8);
  Rd(b, O("whiteboard-cp"));
  M(b, "action", cj);
  c = Li(bj);
  b.Lc || (b.Lc = Wa(b.nc, function(a) {
    return Li(a)
  }));
  b.je(c ? Ua(b.Lc, c) : -1);
  cj({target:b});
  b = new Tg("Clear board");
  Gg(b, "clear-board-button");
  Rd(b, a);
  M(b, "action", $i);
  a = O("drawAreaOverlay");
  Hd(a, j);
  M(a, "click", aj, m);
  Vi();
  a = new wh;
  Ui = new Ti;
  Zi();
  c = (new df(document.location)).Z;
  b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    Q(vh, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new df(document.location);
  b ? b = new Kf("/_minerva/", c.Ia, t.__demo_mainSocketPort) : (d ? (b = t.__demo_shared_domain, v(b) || e(Error("domain was " + G(b) + "; expected a string.")), c = c.L(), gf(c, "_____random_____." + b)) : c = c.L(), c.Hb("/_minerva/"), jf(c, "", h), b = new Mf(c.toString().replace("_____random_____", "%random%")));
  a = new Tf(b, a, Wi);
  b = Ui;
  u(b.Rf) || e(Error("Protocol is missing required method streamStarted"));
  u(b.Qf) || e(Error("Protocol is missing required method streamReset"));
  u(b.Sf) || e(Error("Protocol is missing required method stringReceived"));
  a.Wd = w(b.Rf, b);
  a.onreset = w(b.Qf, b);
  a.Xd = w(b.Sf, b);
  a.Yd = u(b.mh) ? w(b.mh, b) : k;
  a.Zd = u(b.nh) ? w(b.nh, b) : k;
  a.start()
}
var ej = ["__whiteboard_init"], fj = t;
!(ej[0] in fj) && fj.execScript && fj.execScript("var " + ej[0]);
for(var gj;ej.length && (gj = ej.shift());) {
  !ej.length && u(dj) ? fj[gj] = dj : fj = fj[gj] ? fj[gj] : fj[gj] = {}
}
;
})();
