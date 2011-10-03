(function(){function f(a) {
  throw a;
}
var i = void 0, j = true, k = null, m = false;
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
var r, ba = ba || {}, t = this;
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
function u() {
}
function da(a) {
  a.Oa = function() {
    return a.Xg || (a.Xg = new a)
  }
}
function ea(a) {
  var b = typeof a;
  if(b == "object") {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }else {
        if(a instanceof Object) {
          return b
        }
      }
      var c = Object.prototype.toString.call(a);
      if(c == "[object Window]") {
        return"object"
      }
      if(c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(b == "function" && typeof a.call == "undefined") {
      return"object"
    }
  }
  return b
}
function fa(a) {
  return a !== i
}
function v(a) {
  return ea(a) == "array"
}
function ga(a) {
  var b = ea(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function ha(a) {
  return ia(a) && typeof a.getFullYear == "function"
}
function w(a) {
  return typeof a == "string"
}
function ja(a) {
  return typeof a == "number"
}
function z(a) {
  return ea(a) == "function"
}
function ia(a) {
  a = ea(a);
  return a == "object" || a == "array" || a == "function"
}
function ka(a) {
  return a[la] || (a[la] = ++ma)
}
var la = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), ma = 0;
function na(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function oa(a, b, c) {
  a || f(Error());
  if(arguments.length > 2) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }else {
    return function() {
      return a.apply(b, arguments)
    }
  }
}
function A(a, b, c) {
  A = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? na : oa;
  return A.apply(k, arguments)
}
function pa(a, b) {
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
  a.d = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function qa(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = String(a)
  }
}
C(qa, Error);
qa.prototype.name = "CustomError";
function ra(a) {
  var b = a.length - 1;
  return b >= 0 && a.indexOf("%", b) == b
}
function sa(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
var ta = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function ua(a) {
  a = String(a);
  return!ta.test(a) ? encodeURIComponent(a) : a
}
function va(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function wa(a) {
  if(!xa.test(a)) {
    return a
  }
  a.indexOf("&") != -1 && (a = a.replace(ya, "&amp;"));
  a.indexOf("<") != -1 && (a = a.replace(za, "&lt;"));
  a.indexOf(">") != -1 && (a = a.replace(Aa, "&gt;"));
  a.indexOf('"') != -1 && (a = a.replace(Ba, "&quot;"));
  return a
}
var ya = /&/g, za = /</g, Aa = />/g, Ba = /\"/g, xa = /[&<>\"]/;
function Ca(a) {
  return va(a.replace(/  /g, " &#160;"), i)
}
function Da(a, b) {
  for(var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(d.length, e.length), h = 0;c == 0 && h < g;h++) {
    var l = d[h] || "", n = e[h] || "", q = RegExp("(\\d*)(\\D*)", "g"), x = RegExp("(\\d*)(\\D*)", "g");
    do {
      var s = q.exec(l) || ["", "", ""], y = x.exec(n) || ["", "", ""];
      if(s[0].length == 0 && y[0].length == 0) {
        break
      }
      c = Ea(s[1].length == 0 ? 0 : parseInt(s[1], 10), y[1].length == 0 ? 0 : parseInt(y[1], 10)) || Ea(s[2].length == 0, y[2].length == 0) || Ea(s[2], y[2])
    }while(c == 0)
  }
  return c
}
function Ea(a, b) {
  if(a < b) {
    return-1
  }else {
    if(a > b) {
      return 1
    }
  }
  return 0
}
var Fa = Math.random() * 2147483648 | 0, Ga = {};
function Ha(a) {
  return Ga[a] || (Ga[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
}
;function Ia(a, b) {
  b.unshift(a);
  qa.call(this, sa.apply(k, b));
  b.shift();
  this.Yi = a
}
C(Ia, qa);
Ia.prototype.name = "AssertionError";
function Ja(a, b) {
  f(new Ia("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ka(a, b, c) {
  this.D = a;
  this.K = b;
  this.oe = c.name;
  this.Fb = !!c.aj;
  this.Wi = !!c.required;
  this.ec = c.Vd;
  this.Pf = c.type;
  this.hf = m;
  switch(this.ec) {
    case La:
    ;
    case Ma:
    ;
    case Na:
    ;
    case Oa:
    ;
    case Pa:
      this.hf = j
  }
  this.Oi = c.defaultValue
}
var La = 3, Ma = 4, Na = 6, Oa = 16, Pa = 18;
function Qa(a) {
  return a.ec == 11 || a.ec == 10
}
;function Ra(a, b) {
  for(var c in a) {
    b.call(i, a[c], c, a)
  }
}
function Sa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Ta(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Ua = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function Va(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < Ua.length;g++) {
      c = Ua[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var E = Array.prototype, Wa = E.indexOf ? function(a, b, c) {
  return E.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(w(a)) {
    return!w(b) || b.length != 1 ? -1 : a.indexOf(b, c)
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
  for(var d = a.length, e = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
}, Xa = E.map ? function(a, b, c) {
  return E.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), g = w(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (e[h] = b.call(c, g[h], h, a))
  }
  return e
}, Ya = E.some ? function(a, b, c) {
  return E.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && b.call(c, e[g], g, a)) {
      return j
    }
  }
  return m
}, Za = E.every ? function(a, b, c) {
  return E.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && !b.call(c, e[g], g, a)) {
      return m
    }
  }
  return j
};
function $a(a, b) {
  return Wa(a, b) >= 0
}
function ab(a) {
  if(!v(a)) {
    for(var b = a.length - 1;b >= 0;b--) {
      delete a[b]
    }
  }
  a.length = 0
}
function bb(a, b) {
  var c = Wa(a, b);
  c >= 0 && E.splice.call(a, c, 1)
}
function cb(a) {
  return E.concat.apply(E, arguments)
}
function db(a) {
  if(v(a)) {
    return cb(a)
  }else {
    for(var b = [], c = 0, d = a.length;c < d;c++) {
      b[c] = a[c]
    }
    return b
  }
}
function eb(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], e;
    if(v(d) || (e = ga(d)) && d.hasOwnProperty("callee")) {
      a.push.apply(a, d)
    }else {
      if(e) {
        for(var g = a.length, h = d.length, l = 0;l < h;l++) {
          a[g + l] = d[l]
        }
      }else {
        a.push(d)
      }
    }
  }
}
function fb(a, b, c, d) {
  E.splice.apply(a, gb(arguments, 1))
}
function gb(a, b, c) {
  return arguments.length <= 2 ? E.slice.call(a, b) : E.slice.call(a, b, c)
}
function hb(a, b) {
  E.sort.call(a, b || ib)
}
function ib(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function jb(a, b, c) {
  this.Nf = a;
  this.oe = b.name || k;
  this.Pi = b.nf || k;
  this.Li = b.Ki;
  this.Ma = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.Ma[b.K] = b
  }
}
function kb(a) {
  a = Sa(a.Ma);
  hb(a, function(a, c) {
    return a.K - c.K
  });
  return a
}
;function lb() {
  this.r = {};
  this.Bb = this.constructor.Bb;
  var a = this.Bb.Ma, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.Ma = b;
  this.ac = this.ke = k
}
function mb(a, b) {
  for(var c in a.r) {
    a.Ma[c] || b.call(a, Number(c), a.r[c])
  }
}
r = lb.prototype;
r.gc = o("Bb");
r.get = function(a, b) {
  return nb(this, a.K, b)
};
r.set = function(a, b) {
  ob(this, a.K, b)
};
r.add = function(a, b) {
  var c = a.K;
  this.r[c] || (this.r[c] = []);
  this.r[c].push(b)
};
r.clear = function(a) {
  delete this.r[a.K]
};
r.n = function(a) {
  if(!a || this.constructor != a.constructor) {
    return m
  }
  for(var b = kb(this.gc()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(pb(this, d.K) != pb(a, d.K)) {
      return m
    }
    if(pb(this, d.K)) {
      var e = Qa(d), g = d.K, h = this.r[g], g = a.r[g];
      if(d.Fb) {
        if(h.length != g.length) {
          return m
        }
        for(d = 0;d < h.length;d++) {
          if(!(e ? h[d].n(g[d]) : h[d] == g[d])) {
            return m
          }
        }
      }else {
        if(!(e ? h.n(g) : h == g)) {
          return m
        }
      }
    }
  }
  return j
};
r.$e = function(a) {
  for(var b = kb(this.gc()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete this.r[d.K];
    if(pb(a, d.K)) {
      var e = Qa(d);
      if(d.Fb) {
        var g;
        g = a;
        var h = d.K;
        qb(g, g.Ma[h]);
        g = g.r[h] || [];
        for(h = 0;h < g.length;h++) {
          this.add(d, e ? g[h].A() : g[h])
        }
      }else {
        g = a.get(d), this.set(d, e ? g.A() : g)
      }
    }
  }
};
r.A = function() {
  var a = new this.constructor;
  a.$e(this);
  return a
};
function pb(a, b) {
  return b in a.r && fa(a.r[b]) && a.r[b] !== k
}
function qb(a, b) {
  if(a.ke) {
    var c = b.K;
    if(!(c in a.ac)) {
      var d = a.r, e;
      e = a.ke;
      var g = a.r[c];
      if(g == k) {
        e = g
      }else {
        if(b.Fb) {
          var h = [];
          v(g);
          for(var l = 0;l < g.length;l++) {
            h[l] = e.Pc(b, g[l])
          }
          e = h
        }else {
          e = e.Pc(b, g)
        }
      }
      d[c] = e;
      a.ac[c] = j
    }
  }
}
function nb(a, b, c) {
  var d = a.Ma[b];
  qb(a, d);
  return d.Fb ? (c = c || 0, c >= 0 && rb(a, b), a.r[b][c]) : (v(a.r[b]), b in a.r ? a.r[b] : k)
}
function rb(a, b) {
  return a.Ma[b].Fb ? (pb(a, b) && v(a.r[b]), pb(a, b) ? a.r[b].length : 0) : pb(a, b) ? 1 : 0
}
function ob(a, b, c) {
  a.r[b] = c;
  a.ac && (a.ac[b] = j)
}
function sb(a, b) {
  var c = [], d, e;
  for(e in b) {
    b.hasOwnProperty(e) && (e == 0 ? d = b[0] : c.push(new Ka(a, e, b[e])))
  }
  a.Bb = new jb(a, d, c);
  a.gc = function() {
    return a.Bb
  }
}
;var tb, ub, vb, wb, xb;
function yb() {
  lb.apply(this)
}
C(yb, lb);
yb.prototype.ha = function() {
  return nb(this, 3)
};
function zb() {
  lb.apply(this)
}
C(zb, lb);
sb(yb, {0:{name:"Point", nf:"demosminerva.whiteboard_messages.Point"}, 1:{name:"x", Vd:5, type:Number}, 2:{name:"y", Vd:5, type:Number}, 3:{name:"color", Vd:9, type:String}});
sb(zb, {0:{name:"ClearBoard", nf:"demosminerva.whiteboard_messages.ClearBoard"}});
function Ab() {
}
Ab.prototype.Qc = function(a, b) {
  return Qa(a) ? this.pb(b) : b
};
Ab.prototype.Pd = function(a) {
  new a.Nf;
  f(Error("Unimplemented"))
};
Ab.prototype.Pc = function(a, b) {
  if(Qa(a)) {
    return this.Pd(a.Pf.Bb, b)
  }
  if(!a.hf) {
    return b
  }
  var c = a.Pf;
  if(c === String) {
    if(typeof b === "number") {
      return String(b)
    }
  }else {
    if(c === Number && typeof b === "string" && /^-?[0-9]+$/.test(b)) {
      return Number(b)
    }
  }
  return b
};
function Bb() {
}
C(Bb, Ab);
Bb.prototype.Pd = function(a, b) {
  var c = new a.Nf;
  c.ke = this;
  c.r = b;
  c.ac = {};
  return c
};
function Cb() {
}
C(Cb, Bb);
Cb.prototype.pb = function(a) {
  for(var b = kb(a.gc()), c = [], d = 0;d < b.length;d++) {
    var e = b[d];
    if(pb(a, e.K)) {
      var g = e.K;
      if(e.Fb) {
        c[g] = [];
        for(var h = 0;h < rb(a, e.K);h++) {
          c[g][h] = this.Qc(e, a.get(e, h))
        }
      }else {
        c[g] = this.Qc(e, a.get(e))
      }
    }
  }
  mb(a, function(a, b) {
    c[a] = b
  });
  return c
};
Cb.prototype.Qc = function(a, b) {
  return a.ec == 8 ? b ? 1 : 0 : Ab.prototype.Qc.apply(this, arguments)
};
Cb.prototype.Pc = function(a, b) {
  return a.ec == 8 ? b === 1 : Ab.prototype.Pc.apply(this, arguments)
};
function Db(a) {
  return z(a) || typeof a == "object" && z(a.call) && z(a.apply)
}
;function Eb(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  f(Error("Invalid JSON string: " + a))
}
function Fb() {
}
Fb.prototype.pb = function(a) {
  var b = [];
  Gb(this, a, b);
  return b.join("")
};
function Gb(a, b, c) {
  switch(typeof b) {
    case "string":
      Hb(b, c);
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
        for(var e = "", g = 0;g < d;g++) {
          c.push(e), Gb(a, b[g], c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(e in b) {
        Object.prototype.hasOwnProperty.call(b, e) && (g = b[e], typeof g != "function" && (c.push(d), Hb(e, c), c.push(":"), Gb(a, g, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      f(Error("Unknown type: " + typeof b))
  }
}
var Ib = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\u000b"}, Jb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Hb(a, b) {
  b.push('"', a.replace(Jb, function(a) {
    if(a in Ib) {
      return Ib[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    b < 16 ? e += "000" : b < 256 ? e += "00" : b < 4096 && (e += "0");
    return Ib[a] = e + b.toString(16)
  }), '"')
}
;function Kb(a, b, c) {
  var d = Wa(c, a);
  if(d != -1) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = ea(a);
    if(d == "boolean" || d == "number" || d == "null" || d == "undefined") {
      b.push(String(a))
    }else {
      if(d == "string") {
        Hb(a, b)
      }else {
        if(Db(a.s)) {
          a.s(b, c)
        }else {
          if(Db(a.tg)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if(d == "array") {
                d = a.length;
                b.push("[");
                for(var e = "", g = 0;g < d;g++) {
                  b.push(e), Kb(a[g], b, c), e = ", "
                }
                b.push("]")
              }else {
                if(d == "object") {
                  if(ha(a) && typeof a.valueOf == "function") {
                    b.push("new Date(", String(a.valueOf()), ")")
                  }else {
                    for(var d = Ta(a).concat(Ua), e = {}, h = g = 0;h < d.length;) {
                      var l = d[h++], n = ia(l) ? "o" + ka(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(e, n) || (e[n] = j, d[g++] = l)
                    }
                    d.length = g;
                    b.push("{");
                    e = "";
                    for(h = 0;h < d.length;h++) {
                      g = d[h], Object.prototype.hasOwnProperty.call(a, g) && (l = a[g], b.push(e), Hb(g, b), b.push(": "), Kb(l, b, c), e = ", ")
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
  Kb(a, b, c)
}
function H(a) {
  var b = [];
  G(a, b, i);
  return b.join("")
}
;function Lb(a) {
  if(typeof a.W == "function") {
    a = a.W()
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
function Mb(a) {
  if(typeof a.Y == "function") {
    return a.Y()
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
  return Sa(a)
}
function Nb(a) {
  if(typeof a.Ha == "function") {
    return a.Ha()
  }
  if(typeof a.Y != "function") {
    if(ga(a) || w(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return Ta(a)
  }
}
function Ob(a, b, c) {
  if(typeof a.forEach == "function") {
    a.forEach(b, c)
  }else {
    if(ga(a) || w(a)) {
      F(a, b, c)
    }else {
      for(var d = Nb(a), e = Mb(a), g = e.length, h = 0;h < g;h++) {
        b.call(c, e[h], d && d[h], a)
      }
    }
  }
}
function Pb(a, b) {
  if(typeof a.every == "function") {
    return a.every(b, i)
  }
  if(ga(a) || w(a)) {
    return Za(a, b, i)
  }
  for(var c = Nb(a), d = Mb(a), e = d.length, g = 0;g < e;g++) {
    if(!b.call(i, d[g], c && c[g], a)) {
      return m
    }
  }
  return j
}
;function Qb(a, b) {
  this.p = {};
  this.l = [];
  var c = arguments.length;
  if(c > 1) {
    c % 2 && f(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.Bd(a)
  }
}
r = Qb.prototype;
r.e = 0;
r.Re = 0;
r.W = o("e");
r.Y = function() {
  Rb(this);
  for(var a = [], b = 0;b < this.l.length;b++) {
    a.push(this.p[this.l[b]])
  }
  return a
};
r.Ha = function() {
  Rb(this);
  return this.l.concat()
};
r.ea = function(a) {
  return Sb(this.p, a)
};
r.Ic = function(a) {
  for(var b = 0;b < this.l.length;b++) {
    var c = this.l[b];
    if(Sb(this.p, c) && this.p[c] == a) {
      return j
    }
  }
  return m
};
r.n = function(a, b) {
  if(this === a) {
    return j
  }
  if(this.e != a.W()) {
    return m
  }
  var c = b || Tb;
  Rb(this);
  for(var d, e = 0;d = this.l[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function Tb(a, b) {
  return a === b
}
r.Qa = function() {
  return this.e == 0
};
r.clear = function() {
  this.p = {};
  this.Re = this.e = this.l.length = 0
};
r.remove = function(a) {
  return Sb(this.p, a) ? (delete this.p[a], this.e--, this.Re++, this.l.length > 2 * this.e && Rb(this), j) : m
};
function Rb(a) {
  if(a.e != a.l.length) {
    for(var b = 0, c = 0;b < a.l.length;) {
      var d = a.l[b];
      Sb(a.p, d) && (a.l[c++] = d);
      b++
    }
    a.l.length = c
  }
  if(a.e != a.l.length) {
    for(var e = {}, c = b = 0;b < a.l.length;) {
      d = a.l[b], Sb(e, d) || (a.l[c++] = d, e[d] = 1), b++
    }
    a.l.length = c
  }
}
r.get = function(a, b) {
  return Sb(this.p, a) ? this.p[a] : b
};
r.set = function(a, b) {
  Sb(this.p, a) || (this.e++, this.l.push(a), this.Re++);
  this.p[a] = b
};
r.Bd = function(a) {
  var b;
  a instanceof Qb ? (b = a.Ha(), a = a.Y()) : (b = Ta(a), a = Sa(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
r.A = function() {
  return new Qb(this)
};
function Ub(a) {
  Rb(a);
  for(var b = {}, c = 0;c < a.l.length;c++) {
    var d = a.l[c];
    b[d] = a.p[d]
  }
  return b
}
function Sb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function Vb(a) {
  var b = ea(a);
  if(b == "string") {
    return 21 + 2 * a.length
  }else {
    if(b == "number") {
      return 16
    }else {
      if(b == "boolean") {
        return 12
      }else {
        if(b == "null" || b == "undefined") {
          return 8
        }else {
          f(Error("cannot determine size of object type " + b))
        }
      }
    }
  }
}
;function Wb(a, b) {
  this.ub = a;
  this.ob = b
}
Wb.prototype.n = function(a) {
  return a instanceof Wb && this.ub == a.ub && this.ob.join(",") == a.ob
};
Wb.prototype.s = function(a, b) {
  a.push("new SACK(", String(this.ub), ", ");
  G(this.ob, a, b);
  a.push(")")
};
function Xb() {
  this.v = new Qb
}
r = Xb.prototype;
r.zb = -1;
r.w = 0;
r.append = function(a) {
  var b = Vb(a);
  this.v.set(this.zb + 1, [a, b]);
  this.zb += 1;
  this.w += b
};
r.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
r.s = function(a) {
  a.push("<Queue with ", String(this.v.W()), " item(s), counter=#", String(this.zb), ", size=", String(this.w), ">")
};
function Yb(a) {
  Rb(a.v);
  hb(a.v.l);
  return a.v.l
}
r.qf = function(a) {
  for(var b = Yb(this), c = [], d = 0;d < b.length;d++) {
    var e = b[d];
    (a == k || e >= a) && c.push([e, this.v.p[e][0]])
  }
  return c
};
function Zb() {
  this.ab = new Qb
}
Zb.prototype.Hb = -1;
Zb.prototype.w = 0;
function $b(a) {
  var b = a.ab.Ha();
  hb(b);
  return new Wb(a.Hb, b)
}
var ac = {};
function bc() {
  return j
}
;var cc, dc, ec, fc, gc;
function hc() {
  return t.navigator ? t.navigator.userAgent : k
}
gc = fc = ec = dc = cc = m;
var ic;
if(ic = hc()) {
  var jc = t.navigator;
  cc = ic.indexOf("Opera") == 0;
  dc = !cc && ic.indexOf("MSIE") != -1;
  fc = (ec = !cc && ic.indexOf("WebKit") != -1) && ic.indexOf("Mobile") != -1;
  gc = !cc && !ec && jc.product == "Gecko"
}
var kc = cc, I = dc, lc = gc, J = ec, mc = fc, nc = t.navigator, oc = (nc && nc.platform || "").indexOf("Mac") != -1, pc;
a: {
  var qc = "", rc;
  if(kc && t.opera) {
    var sc = t.opera.version, qc = typeof sc == "function" ? sc() : sc
  }else {
    if(lc ? rc = /rv\:([^\);]+)(\)|;)/ : I ? rc = /MSIE\s+([^\);]+)(\)|;)/ : J && (rc = /WebKit\/(\S+)/), rc) {
      var tc = rc.exec(hc()), qc = tc ? tc[1] : ""
    }
  }
  if(I) {
    var uc, vc = t.document;
    uc = vc ? vc.documentMode : i;
    if(uc > parseFloat(qc)) {
      pc = String(uc);
      break a
    }
  }
  pc = qc
}
var wc = {};
function K(a) {
  return wc[a] || (wc[a] = Da(pc, a) >= 0)
}
var xc = {};
function yc() {
  return xc[9] || (xc[9] = I && document.documentMode && document.documentMode >= 9)
}
;var zc;
var Ac = {Qh:"click", Vh:"dblclick", pi:"mousedown", ti:"mouseup", si:"mouseover", ri:"mouseout", qi:"mousemove", Di:"selectstart", ji:"keypress", ii:"keydown", ki:"keyup", Oh:"blur", ci:"focus", Wh:"deactivate", di:I ? "focusin" : "DOMFocusIn", ei:I ? "focusout" : "DOMFocusOut", Ph:"change", Ci:"select", Ei:"submit", hi:"input", yi:"propertychange", $h:"dragstart", Xh:"dragenter", Zh:"dragover", Yh:"dragleave", ai:"drop", Ii:"touchstart", Hi:"touchmove", Gi:"touchend", Fi:"touchcancel", Sh:"contextmenu", 
bi:"error", gi:"help", li:"load", mi:"losecapture", zi:"readystatechange", Ai:"resize", Bi:"scroll", Ji:"unload", fi:"hashchange", ui:"pagehide", vi:"pageshow", xi:"popstate", Th:"copy", wi:"paste", Uh:"cut", Lh:"beforecopy", Mh:"beforecut", Nh:"beforepaste", oi:"message", Rh:"connect"};
var Bc = !I || yc(), Cc = I && !K("8");
function L() {
}
L.prototype.va = m;
L.prototype.f = function() {
  if(!this.va) {
    this.va = j, this.c()
  }
};
L.prototype.c = function() {
  this.Eg && Dc.apply(k, this.Eg)
};
function Dc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ga(d) ? Dc.apply(k, d) : d && typeof d.f == "function" && d.f()
  }
}
;function Ec(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
C(Ec, L);
r = Ec.prototype;
r.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
r.mb = m;
r.vc = j;
r.stopPropagation = function() {
  this.mb = j
};
r.preventDefault = function() {
  this.vc = m
};
function Fc(a) {
  a.stopPropagation()
}
;function Gc(a) {
  Gc[" "](a);
  return a
}
Gc[" "] = u;
function Hc(a, b) {
  a && this.kc(a, b)
}
C(Hc, Ec);
var Ic = [1, 4, 2];
r = Hc.prototype;
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
r.ih = m;
r.Ea = k;
r.kc = function(a, b) {
  var c = this.type = a.type;
  Ec.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(lc) {
      var e;
      a: {
        try {
          Gc(d.nodeName);
          e = j;
          break a
        }catch(g) {
        }
        e = m
      }
      e || (d = k)
    }
  }else {
    if(c == "mouseover") {
      d = a.fromElement
    }else {
      if(c == "mouseout") {
        d = a.toElement
      }
    }
  }
  this.relatedTarget = d;
  this.offsetX = a.offsetX !== i ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== i ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== i ? a.clientX : a.pageX;
  this.clientY = a.clientY !== i ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.ih = oc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Ea = a;
  delete this.vc;
  delete this.mb
};
function Jc(a) {
  return Bc ? a.Ea.button == 0 : a.type == "click" ? j : !!(a.Ea.button & Ic[0])
}
r.stopPropagation = function() {
  Hc.d.stopPropagation.call(this);
  this.Ea.stopPropagation ? this.Ea.stopPropagation() : this.Ea.cancelBubble = j
};
r.preventDefault = function() {
  Hc.d.preventDefault.call(this);
  var a = this.Ea;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, Cc) {
      try {
        if(a.ctrlKey || a.keyCode >= 112 && a.keyCode <= 123) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
r.c = function() {
  Hc.d.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Ea = k
};
function Kc() {
}
var Lc = 0;
r = Kc.prototype;
r.key = 0;
r.nb = m;
r.Fd = m;
r.kc = function(a, b, c, d, e, g) {
  z(a) ? this.Ef = j : a && a.handleEvent && z(a.handleEvent) ? this.Ef = m : f(Error("Invalid listener argument"));
  this.Kb = a;
  this.Yf = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Xc = g;
  this.Fd = m;
  this.key = ++Lc;
  this.nb = m
};
r.handleEvent = function(a) {
  return this.Ef ? this.Kb.call(this.Xc || this.src, a) : this.Kb.handleEvent.call(this.Kb, a)
};
var Mc, Nc = (Mc = "ScriptEngine" in t && t.ScriptEngine() == "JScript") ? t.ScriptEngineMajorVersion() + "." + t.ScriptEngineMinorVersion() + "." + t.ScriptEngineBuildVersion() : "0";
function Oc(a, b) {
  this.Jf = b;
  this.gb = [];
  a > this.Jf && f(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.gb.push(this.Ba ? this.Ba() : {})
  }
}
C(Oc, L);
Oc.prototype.Ba = k;
Oc.prototype.jf = k;
function Pc(a) {
  return a.gb.length ? a.gb.pop() : a.Ba ? a.Ba() : {}
}
function Qc(a, b) {
  a.gb.length < a.Jf ? a.gb.push(b) : Rc(a, b)
}
function Rc(a, b) {
  if(a.jf) {
    a.jf(b)
  }else {
    if(ia(b)) {
      if(z(b.f)) {
        b.f()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
Oc.prototype.c = function() {
  Oc.d.c.call(this);
  for(var a = this.gb;a.length;) {
    Rc(this, a.pop())
  }
  delete this.gb
};
var Sc, Tc, Uc, Vc, Wc, Xc, Yc, Zc, $c, ad, bd;
(function() {
  function a() {
    return{e:0, pa:0}
  }
  function b() {
    return[]
  }
  function c() {
    function a(b) {
      b = h.call(a.src, a.key, b);
      if(!b) {
        return b
      }
    }
    return a
  }
  function d() {
    return new Kc
  }
  function e() {
    return new Hc
  }
  var g = Mc && !(Da(Nc, "5.7") >= 0), h;
  Xc = function(a) {
    h = a
  };
  if(g) {
    Sc = function() {
      return Pc(l)
    };
    Tc = function(a) {
      Qc(l, a)
    };
    Uc = function() {
      return Pc(n)
    };
    Vc = function(a) {
      Qc(n, a)
    };
    Wc = function() {
      return Pc(q)
    };
    Yc = function() {
      Qc(q, c())
    };
    Zc = function() {
      return Pc(x)
    };
    $c = function(a) {
      Qc(x, a)
    };
    ad = function() {
      return Pc(s)
    };
    bd = function(a) {
      Qc(s, a)
    };
    var l = new Oc(0, 600);
    l.Ba = a;
    var n = new Oc(0, 600);
    n.Ba = b;
    var q = new Oc(0, 600);
    q.Ba = c;
    var x = new Oc(0, 600);
    x.Ba = d;
    var s = new Oc(0, 600);
    s.Ba = e
  }else {
    Sc = a, Tc = u, Uc = b, Vc = u, Wc = c, Yc = u, Zc = d, $c = u, ad = e, bd = u
  }
})();
var cd = {}, M = {}, dd = {}, ed = {};
function N(a, b, c, d, e) {
  if(b) {
    if(v(b)) {
      for(var g = 0;g < b.length;g++) {
        N(a, b[g], c, d, e)
      }
      return k
    }else {
      var d = !!d, h = M;
      b in h || (h[b] = Sc());
      h = h[b];
      d in h || (h[d] = Sc(), h.e++);
      var h = h[d], l = ka(a), n;
      h.pa++;
      if(h[l]) {
        n = h[l];
        for(g = 0;g < n.length;g++) {
          if(h = n[g], h.Kb == c && h.Xc == e) {
            if(h.nb) {
              break
            }
            return n[g].key
          }
        }
      }else {
        n = h[l] = Uc(), h.e++
      }
      g = Wc();
      g.src = a;
      h = Zc();
      h.kc(c, g, a, b, d, e);
      c = h.key;
      g.key = c;
      n.push(h);
      cd[c] = h;
      dd[l] || (dd[l] = Uc());
      dd[l].push(h);
      a.addEventListener ? (a == t || !a.Md) && a.addEventListener(b, g, d) : a.attachEvent(b in ed ? ed[b] : ed[b] = "on" + b, g);
      return c
    }
  }else {
    f(Error("Invalid event type"))
  }
}
function fd(a, b, c, d, e) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      fd(a, b[g], c, d, e)
    }
    return k
  }
  a = N(a, b, c, d, e);
  cd[a].Fd = j;
  return a
}
function gd(a, b, c, d, e) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      gd(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = hd(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Kb == c && a[g].capture == d && a[g].Xc == e) {
          id(a[g].key);
          break
        }
      }
    }
  }
}
function id(a) {
  if(!cd[a]) {
    return m
  }
  var b = cd[a];
  if(b.nb) {
    return m
  }
  var c = b.src, d = b.type, e = b.Yf, g = b.capture;
  c.removeEventListener ? (c == t || !c.Md) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in ed ? ed[d] : ed[d] = "on" + d, e);
  c = ka(c);
  e = M[d][g][c];
  if(dd[c]) {
    var h = dd[c];
    bb(h, b);
    h.length == 0 && delete dd[c]
  }
  b.nb = j;
  e.Rf = j;
  jd(d, g, c, e);
  delete cd[a];
  return j
}
function jd(a, b, c, d) {
  if(!d.dd && d.Rf) {
    for(var e = 0, g = 0;e < d.length;e++) {
      if(d[e].nb) {
        var h = d[e].Yf;
        h.src = k;
        Yc(h);
        $c(d[e])
      }else {
        e != g && (d[g] = d[e]), g++
      }
    }
    d.length = g;
    d.Rf = m;
    g == 0 && (Vc(d), delete M[a][b][c], M[a][b].e--, M[a][b].e == 0 && (Tc(M[a][b]), delete M[a][b], M[a].e--), M[a].e == 0 && (Tc(M[a]), delete M[a]))
  }
}
function kd(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Ra(dd, function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          id(g.key), c++
        }
      }
    })
  }else {
    if(a = ka(a), dd[a]) {
      for(var a = dd[a], e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          id(g.key), c++
        }
      }
    }
  }
}
function hd(a, b, c) {
  var d = M;
  return b in d && (d = d[b], c in d && (d = d[c], a = ka(a), d[a])) ? d[a] : k
}
function ld(a, b, c, d, e) {
  var g = 1, b = ka(b);
  if(a[b]) {
    a.pa--;
    a = a[b];
    a.dd ? a.dd++ : a.dd = 1;
    try {
      for(var h = a.length, l = 0;l < h;l++) {
        var n = a[l];
        n && !n.nb && (g &= md(n, e) !== m)
      }
    }finally {
      a.dd--, jd(c, d, b, a)
    }
  }
  return Boolean(g)
}
function md(a, b) {
  var c = a.handleEvent(b);
  a.Fd && id(a.key);
  return c
}
Xc(function(a, b) {
  if(!cd[a]) {
    return j
  }
  var c = cd[a], d = c.type, e = M;
  if(!(d in e)) {
    return j
  }
  var e = e[d], g, h;
  zc === i && (zc = I && !t.addEventListener);
  if(zc) {
    g = b || ca("window.event");
    var l = j in e, n = m in e;
    if(l) {
      if(g.keyCode < 0 || g.returnValue != i) {
        return j
      }
      a: {
        var q = m;
        if(g.keyCode == 0) {
          try {
            g.keyCode = -1;
            break a
          }catch(x) {
            q = j
          }
        }
        if(q || g.returnValue == i) {
          g.returnValue = j
        }
      }
    }
    q = ad();
    q.kc(g, this);
    g = j;
    try {
      if(l) {
        for(var s = Uc(), y = q.currentTarget;y;y = y.parentNode) {
          s.push(y)
        }
        h = e[j];
        h.pa = h.e;
        for(var D = s.length - 1;!q.mb && D >= 0 && h.pa;D--) {
          q.currentTarget = s[D], g &= ld(h, s[D], d, j, q)
        }
        if(n) {
          h = e[m];
          h.pa = h.e;
          for(D = 0;!q.mb && D < s.length && h.pa;D++) {
            q.currentTarget = s[D], g &= ld(h, s[D], d, m, q)
          }
        }
      }else {
        g = md(c, q)
      }
    }finally {
      if(s) {
        s.length = 0, Vc(s)
      }
      q.f();
      bd(q)
    }
    return g
  }
  d = new Hc(b, this);
  try {
    g = md(c, d)
  }finally {
    d.f()
  }
  return g
});
var od = 0;
function pd() {
}
C(pd, L);
r = pd.prototype;
r.Md = j;
r.gd = k;
r.Ce = aa("gd");
r.addEventListener = function(a, b, c, d) {
  N(this, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  gd(this, a, b, c, d)
};
r.dispatchEvent = function(a) {
  var b = a.type || a, c = M;
  if(b in c) {
    if(w(a)) {
      a = new Ec(a, this)
    }else {
      if(a instanceof Ec) {
        a.target = a.target || this
      }else {
        var d = a, a = new Ec(b, this);
        Va(a, d)
      }
    }
    var d = 1, e, c = c[b], b = j in c, g;
    if(b) {
      e = [];
      for(g = this;g;g = g.gd) {
        e.push(g)
      }
      g = c[j];
      g.pa = g.e;
      for(var h = e.length - 1;!a.mb && h >= 0 && g.pa;h--) {
        a.currentTarget = e[h], d &= ld(g, e[h], a.type, j, a) && a.vc != m
      }
    }
    if(m in c) {
      if(g = c[m], g.pa = g.e, b) {
        for(h = 0;!a.mb && h < e.length && g.pa;h++) {
          a.currentTarget = e[h], d &= ld(g, e[h], a.type, m, a) && a.vc != m
        }
      }else {
        for(e = this;!a.mb && e && g.pa;e = e.gd) {
          a.currentTarget = e, d &= ld(g, e, a.type, m, a) && a.vc != m
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
  pd.d.c.call(this);
  kd(this);
  this.gd = k
};
function qd(a, b) {
  this.$c = a || 1;
  this.Bc = b || rd;
  this.Dd = A(this.zh, this);
  this.je = B()
}
C(qd, pd);
qd.prototype.enabled = m;
var rd = t.window;
r = qd.prototype;
r.ta = k;
r.zh = function() {
  if(this.enabled) {
    var a = B() - this.je;
    if(a > 0 && a < this.$c * 0.8) {
      this.ta = this.Bc.setTimeout(this.Dd, this.$c - a)
    }else {
      if(this.dispatchEvent(sd), this.enabled) {
        this.ta = this.Bc.setTimeout(this.Dd, this.$c), this.je = B()
      }
    }
  }
};
r.start = function() {
  this.enabled = j;
  if(!this.ta) {
    this.ta = this.Bc.setTimeout(this.Dd, this.$c), this.je = B()
  }
};
r.stop = function() {
  this.enabled = m;
  if(this.ta) {
    this.Bc.clearTimeout(this.ta), this.ta = k
  }
};
r.c = function() {
  qd.d.c.call(this);
  this.stop();
  delete this.Bc
};
var sd = "tick";
od++;
od++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function td(a, b) {
  this.Fc = [];
  this.We = a;
  this.ef = b || k
}
r = td.prototype;
r.Na = m;
r.hc = m;
r.qc = 0;
r.He = m;
r.zg = m;
r.Ed = 0;
r.cancel = function(a) {
  if(this.Na) {
    this.uc instanceof td && this.uc.cancel()
  }else {
    if(this.D) {
      var b = this.D;
      delete this.D;
      a ? b.cancel(a) : (b.Ed--, b.Ed <= 0 && b.cancel())
    }
    this.We ? this.We.call(this.ef, this) : this.He = j;
    this.Na || this.dc(new ud(this))
  }
};
r.Ze = function(a, b) {
  vd(this, a, b);
  this.qc--;
  this.qc == 0 && this.Na && wd(this)
};
function vd(a, b, c) {
  a.Na = j;
  a.uc = c;
  a.hc = !b;
  wd(a)
}
function xd(a) {
  if(a.Na) {
    a.He || f(new yd(a)), a.He = m
  }
}
function zd(a, b) {
  xd(a);
  vd(a, j, b)
}
r.dc = function(a) {
  xd(this);
  vd(this, m, a)
};
function Ad(a, b) {
  Bd(a, b, k, i)
}
function Bd(a, b, c, d) {
  a.Fc.push([b, c, d]);
  a.Na && wd(a)
}
function Cd(a, b) {
  Bd(a, b, b, i)
}
function Dd(a) {
  return Ya(a.Fc, function(a) {
    return z(a[1])
  })
}
function wd(a) {
  a.Oe && a.Na && Dd(a) && (t.clearTimeout(a.Oe), delete a.Oe);
  a.D && (a.D.Ed--, delete a.D);
  for(var b = a.uc, c = m, d = m;a.Fc.length && a.qc == 0;) {
    var e = a.Fc.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.hc ? h : g) {
      try {
        var l = g.call(e || a.ef, b);
        if(fa(l)) {
          a.hc = a.hc && (l == b || l instanceof Error), a.uc = b = l
        }
        b instanceof td && (d = j, a.qc++)
      }catch(n) {
        b = n, a.hc = j, Dd(a) || (c = j)
      }
    }
  }
  a.uc = b;
  if(d && a.qc) {
    Bd(b, A(a.Ze, a, j), A(a.Ze, a, m)), b.zg = j
  }
  if(c) {
    a.Oe = t.setTimeout(function() {
      fa(b.message) && b.stack && (b.message += "\n" + b.stack);
      f(b)
    }, 0)
  }
}
function Ed(a) {
  var b = new td;
  zd(b, a);
  return b
}
function Fd(a) {
  var b = new td;
  b.dc(a);
  return b
}
function yd(a) {
  qa.call(this);
  this.Dg = a
}
C(yd, qa);
yd.prototype.message = "Already called";
function ud(a) {
  qa.call(this);
  this.Dg = a
}
C(ud, qa);
ud.prototype.message = "Deferred was cancelled";
function Gd(a) {
  this.O = a;
  this.Lc = [];
  this.kf = [];
  this.yg = A(this.Dh, this)
}
Gd.prototype.ta = k;
function Hd(a, b, c, d) {
  a.Lc.push([b, c, d]);
  if(a.ta == k) {
    a.ta = a.O.setTimeout(a.yg, 0)
  }
}
Gd.prototype.Dh = function() {
  this.ta = k;
  var a = this.Lc;
  this.Lc = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], e = c[1], c = c[2];
    try {
      d.apply(e, c)
    }catch(g) {
      this.O.setTimeout(function() {
        f(g)
      }, 0)
    }
  }
  if(this.Lc.length == 0) {
    a = this.kf;
    this.kf = [];
    for(b = 0;b < a.length;b++) {
      zd(a[b], k)
    }
  }
};
var Id = new Gd(t.window);
function Jd(a, b) {
  switch(ea(b)) {
    case "string":
      a.push("<string>", wa(b), "</string>");
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
        a.push('<property id="', d, '">'), Jd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if(typeof b.getFullYear == "function") {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && ea(b[c]) != "function" && (a.push('<property id="', wa(c), '">'), Jd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function Kd(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, e = arguments;
  d.push("<arguments>");
  for(var g = e.length, h = 1;h < g;h++) {
    Jd(d, e[h])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;function Ld() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ B()).toString(36)
}
function Md(a) {
  return a.substr(0, a.length - 1)
}
var Nd = /^(0|[1-9]\d*)$/, Od = /^(0|\-?[1-9]\d*)$/;
function Pd(a) {
  var b = Qd;
  return Nd.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function Rd(a) {
  this.p = new Qb;
  a && this.Bd(a)
}
function Sd(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + ka(a) : b.substr(0, 1) + a
}
r = Rd.prototype;
r.W = function() {
  return this.p.W()
};
r.add = function(a) {
  this.p.set(Sd(a), a)
};
r.Bd = function(a) {
  for(var a = Mb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
r.we = function(a) {
  for(var a = Mb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
r.remove = function(a) {
  return this.p.remove(Sd(a))
};
r.clear = function() {
  this.p.clear()
};
r.Qa = function() {
  return this.p.Qa()
};
r.contains = function(a) {
  return this.p.ea(Sd(a))
};
r.Y = function() {
  return this.p.Y()
};
r.A = function() {
  return new Rd(this)
};
r.n = function(a) {
  return this.W() == Lb(a) && Td(this, a)
};
function Td(a, b) {
  var c = Lb(b);
  if(a.W() > c) {
    return m
  }
  !(b instanceof Rd) && c > 5 && (b = new Rd(b));
  return Pb(a, function(a) {
    if(typeof b.contains == "function") {
      a = b.contains(a)
    }else {
      if(typeof b.Ic == "function") {
        a = b.Ic(a)
      }else {
        if(ga(b) || w(b)) {
          a = $a(b, a)
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
;function Ud(a) {
  return Vd(a || arguments.callee.caller, [])
}
function Vd(a, b) {
  var c = [];
  if($a(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(Wd(a) + "(");
      for(var d = a.arguments, e = 0;e < d.length;e++) {
        e > 0 && c.push(", ");
        var g;
        g = d[e];
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
            g = (g = Wd(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g
        }
        g.length > 40 && (g = g.substr(0, 40) + "...");
        c.push(g)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Vd(a.caller, b))
      }catch(h) {
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
  a = String(a);
  if(!Xd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Xd[a] = b ? b[1] : "[Anonymous]"
  }
  return Xd[a]
}
var Xd = {};
function Yd(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Yd.prototype.ph = 0;
Yd.prototype.Td = k;
Yd.prototype.Sd = k;
var Zd = 0;
Yd.prototype.reset = function(a, b, c, d, e) {
  this.ph = typeof e == "number" ? e : Zd++;
  this.jg = d || B();
  this.Jb = a;
  this.Of = b;
  this.$g = c;
  delete this.Td;
  delete this.Sd
};
Yd.prototype.nd = aa("Jb");
function $d(a) {
  this.oe = a
}
$d.prototype.D = k;
$d.prototype.Jb = k;
$d.prototype.P = k;
$d.prototype.jc = k;
function ae(a, b) {
  this.name = a;
  this.value = b
}
ae.prototype.toString = o("name");
var be = new ae("OFF", Infinity), ce = new ae("SHOUT", 1200), de = new ae("SEVERE", 1E3), ee = new ae("WARNING", 900), fe = new ae("INFO", 800), ge = new ae("CONFIG", 700), he = new ae("FINE", 500), ie = new ae("FINEST", 300), je = new ae("ALL", 0);
r = $d.prototype;
r.getParent = o("D");
r.nd = aa("Jb");
function ke(a) {
  if(a.Jb) {
    return a.Jb
  }
  if(a.D) {
    return ke(a.D)
  }
  Ja("Root logger has no level set.");
  return k
}
r.log = function(a, b, c) {
  if(a.value >= ke(this).value) {
    a = this.Og(a, b, c);
    b = "log:" + a.Of;
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.jc) {
        for(var e = 0, g = i;g = c.jc[e];e++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
r.Og = function(a, b, c) {
  var d = new Yd(a, String(b), this.oe);
  if(c) {
    d.Td = c;
    var e;
    var g = arguments.callee.caller;
    try {
      var h;
      var l = ca("window.location.href");
      if(w(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var n, q, x = m;
        try {
          n = c.lineNumber || c.Xi || "Not available"
        }catch(s) {
          n = "Not available", x = j
        }
        try {
          q = c.fileName || c.filename || c.sourceURL || l
        }catch(y) {
          q = "Not available", x = j
        }
        h = x || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:q, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + wa(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + wa(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + wa(Ud(g) + "-> ")
    }catch(D) {
      e = "Exception trying to expose exception! You win, we lose. " + D
    }
    d.Sd = e
  }
  return d
};
function le(a, b) {
  a.log(de, b, i)
}
function O(a, b) {
  a.log(ee, b, i)
}
r.info = function(a, b) {
  this.log(fe, a, b)
};
function P(a, b) {
  a.log(he, b, i)
}
function Q(a, b) {
  a.log(ie, b, i)
}
var me = {}, ne = k;
function oe() {
  ne || (ne = new $d(""), me[""] = ne, ne.nd(ge))
}
function pe() {
  oe();
  return ne
}
function R(a) {
  oe();
  var b;
  if(!(b = me[a])) {
    b = new $d(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = R(a.substr(0, c));
    if(!c.P) {
      c.P = {}
    }
    c.P[d] = b;
    b.D = c;
    me[a] = b
  }
  return b
}
;function qe(a, b) {
  this.S = "_" + Ld();
  this.ud = a;
  this.Va = b;
  this.$a = a.$a
}
C(qe, L);
r = qe.prototype;
r.Lb = j;
r.Kd = m;
r.a = R("cw.net.FlashSocket");
r.s = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.S);
  a.push("'>")
};
function re(a, b, c) {
  b == "frames" ? (a = a.Va, se(a.N), te(a.N, c)) : b == "stillreceiving" ? (c = a.Va, Q(c.a, "onstillreceiving"), se(c.N)) : b == "connect" ? (c = a.Va, c.a.info("onconnect"), se(c.N), a = c.Wb, c.Wb = k, a.length && (Q(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.qd.Ec(a))) : b == "close" ? (a.Lb = m, a.f()) : b == "ioerror" ? (a.Lb = m, b = a.Va, O(b.a, "onioerror: " + H(c)), ue(b.N, m), a.f()) : b == "securityerror" ? (a.Lb = m, b = a.Va, O(b.a, "onsecurityerror: " + H(c)), 
  ue(b.N, m), a.f()) : f(Error("bad event: " + b))
}
function ve(a) {
  a.Kd = j;
  a.Lb = m;
  a.f()
}
r.Id = function(a, b) {
  try {
    var c = this.$a.CallFunction(Kd("__FC_connect", this.S, a, b, "<int32/>\n"))
  }catch(d) {
    return le(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), ve(this)
  }
  c != '"OK"' && f(Error("__FC_connect failed? ret: " + c))
};
r.Ec = function(a) {
  try {
    var b = this.$a.CallFunction(Kd("__FC_writeFrames", this.S, a))
  }catch(c) {
    return le(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), ve(this)
  }
  b != '"OK"' && (b == '"no such instance"' ? (O(this.a, "Flash no longer knows of " + this.S + "; disposing."), this.f()) : f(Error("__FC_writeFrames failed? ret: " + b)))
};
r.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.Lb);
  qe.d.c.call(this);
  var a = this.$a;
  delete this.$a;
  if(this.Lb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(Kd("__FC_close", this.S)))
    }catch(b) {
      le(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Kd = j
    }
  }
  if(this.Kd) {
    a = this.Va, O(a.a, "oncrash"), ue(a.N, j)
  }else {
    this.Va.onclose()
  }
  delete this.Va;
  delete this.ud.Db[this.S]
};
function we(a, b) {
  this.M = a;
  this.$a = b;
  this.Db = {};
  this.Gd = "__FST_" + Ld();
  t[this.Gd] = A(this.Hg, this);
  var c = b.CallFunction(Kd("__FC_setCallbackFunc", this.Gd));
  c != '"OK"' && f(Error("__FC_setCallbackFunc failed? ret: " + c))
}
C(we, L);
r = we.prototype;
r.a = R("cw.net.FlashSocketTracker");
r.s = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  G(this.Db, a, b);
  a.push(">")
};
r.Ld = function(a) {
  a = new qe(this, a);
  return this.Db[a.S] = a
};
r.Fg = function(a, b, c, d) {
  var e = this.Db[a];
  e ? b == "frames" && d ? (re(e, "ioerror", "FlashConnector hadError while handling data."), e.f()) : re(e, b, c) : O(this.a, "Cannot dispatch because we have no instance: " + H([a, b, c, d]))
};
r.Hg = function(a, b, c, d) {
  try {
    Hd(this.M, this.Fg, this, [a, b, c, d])
  }catch(e) {
    t.window.setTimeout(function() {
      f(e)
    }, 0)
  }
};
r.c = function() {
  we.d.c.call(this);
  for(var a = Sa(this.Db);a.length;) {
    a.pop().f()
  }
  delete this.Db;
  delete this.$a;
  t[this.Gd] = i
};
function xe(a) {
  this.N = a;
  this.Wb = []
}
C(xe, L);
r = xe.prototype;
r.a = R("cw.net.FlashSocketConduit");
r.Ec = function(a) {
  this.Wb ? (Q(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Wb.push.apply(this.Wb, a)) : (Q(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.qd.Ec(a))
};
r.Id = function(a, b) {
  this.qd.Id(a, b)
};
r.onclose = function() {
  this.a.info("onclose");
  ue(this.N, m)
};
r.c = function() {
  this.a.info("in disposeInternal.");
  xe.d.c.call(this);
  this.qd.f();
  delete this.N
};
function ye() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function ze(a) {
  return a * Math.PI / 180
}
;var Qd = Math.pow(2, 53);
var Ae = {tg:p("<cw.eq.Wildcard>")};
function Be(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function Ce(a, b, c) {
  var d = ea(a), e = ea(b);
  if(a == Ae || b == Ae) {
    return j
  }else {
    if(a != k && typeof a.n == "function") {
      return c && c.push("running custom equals function on left object"), a.n(b, c)
    }else {
      if(b != k && typeof b.n == "function") {
        return c && c.push("running custom equals function on right object"), b.n(a, c)
      }else {
        if(Be(d) || Be(e)) {
          a = a === b
        }else {
          if(a instanceof RegExp && b instanceof RegExp) {
            a = a.toString() === b.toString()
          }else {
            if(ha(a) && ha(b)) {
              a = a.valueOf() === b.valueOf()
            }else {
              if(d == "array" && e == "array") {
                a: {
                  if(c && c.push("descending into array"), a.length != b.length) {
                    c && c.push("array length mismatch: " + a.length + ", " + b.length), a = m
                  }else {
                    d = 0;
                    for(e = a.length;d < e;d++) {
                      if(!Ce(a[d], b[d], c)) {
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
                if(a.sg == bc && b.sg == bc) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = m;
                        break a
                      }
                      if(!Ce(a[g], b[g], c)) {
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
    }
  }
}
;function S(a) {
  qa.call(this, a)
}
C(S, qa);
S.prototype.name = "cw.net.InvalidFrame";
function De() {
  var a = [];
  this.oa(a);
  return a.join("")
}
function Ee() {
}
Ee.prototype.n = function(a, b) {
  return!(a instanceof Ee) ? m : Ce(Fe(this), Fe(a), b)
};
Ee.prototype.s = function(a, b) {
  a.push("<HelloFrame properties=");
  G(Fe(this), a, b);
  a.push(">")
};
function Fe(a) {
  return[a.Sb, a.Xf, a.zf, a.$f, a.Ac, a.Ke, a.Qf, a.Mf, a.ne, a.Kf, a.og, a.ig, a.ra, a.cd]
}
Ee.prototype.ga = De;
Ee.prototype.oa = function(a) {
  var b = {};
  b.tnum = this.Sb;
  b.ver = this.Xf;
  b.format = this.zf;
  b["new"] = this.$f;
  b.id = this.Ac;
  b.ming = this.Ke;
  b.pad = this.Qf;
  b.maxb = this.Mf;
  if(fa(this.ne)) {
    b.maxt = this.ne
  }
  b.maxia = this.Kf;
  b.tcpack = this.og;
  b.eeds = this.ig;
  b.sack = this.ra instanceof Wb ? Md((new Ge(this.ra)).ga()) : this.ra;
  b.seenack = this.cd instanceof Wb ? Md((new Ge(this.cd)).ga()) : this.cd;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new Fb).pb(b), "H")
};
function He(a) {
  this.Rb = a
}
He.prototype.n = function(a) {
  return a instanceof He && this.Rb == a.Rb
};
He.prototype.s = function(a, b) {
  a.push("new StringFrame(");
  G(this.Rb, a, b);
  a.push(")")
};
He.prototype.ga = De;
He.prototype.oa = function(a) {
  a.push(this.Rb, " ")
};
function Ie(a) {
  this.Hc = a
}
Ie.prototype.n = function(a) {
  return a instanceof Ie && this.Hc == a.Hc
};
Ie.prototype.s = function(a, b) {
  a.push("new CommentFrame(");
  G(this.Hc, a, b);
  a.push(")")
};
Ie.prototype.ga = De;
Ie.prototype.oa = function(a) {
  a.push(this.Hc, "^")
};
function Je(a) {
  this.yc = a
}
Je.prototype.n = function(a) {
  return a instanceof Je && this.yc == a.yc
};
Je.prototype.s = function(a) {
  a.push("new SeqNumFrame(", String(this.yc), ")")
};
Je.prototype.ga = De;
Je.prototype.oa = function(a) {
  a.push(String(this.yc), "N")
};
function Ke(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return k
  }
  a: {
    var c = b[1], a = Qd;
    if(Od.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
    for(var b = b[0].split(","), d = 0, e = b.length;d < e;d++) {
      var g = Pd(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Wb(a, c)
}
function Ge(a) {
  this.ra = a
}
Ge.prototype.n = function(a, b) {
  return a instanceof Ge && this.ra.n(a.ra, b)
};
Ge.prototype.s = function(a, b) {
  a.push("new SackFrame(");
  G(this.ra, a, b);
  a.push(")")
};
Ge.prototype.ga = De;
Ge.prototype.oa = function(a) {
  var b = this.ra;
  a.push(b.ob.join(","), "|", String(b.ub));
  a.push("A")
};
function Le(a) {
  this.nc = a
}
Le.prototype.n = function(a, b) {
  return a instanceof Le && this.nc.n(a.nc, b)
};
Le.prototype.s = function(a, b) {
  a.push("new StreamStatusFrame(");
  G(this.nc, a, b);
  a.push(")")
};
Le.prototype.ga = De;
Le.prototype.oa = function(a) {
  var b = this.nc;
  a.push(b.ob.join(","), "|", String(b.ub));
  a.push("T")
};
function Me() {
}
Me.prototype.s = function(a) {
  a.push("new StreamCreatedFrame()")
};
Me.prototype.n = function(a) {
  return a instanceof Me
};
Me.prototype.ga = De;
Me.prototype.oa = function(a) {
  a.push("C")
};
function Ne() {
}
Ne.prototype.s = function(a) {
  a.push("new YouCloseItFrame()")
};
Ne.prototype.n = function(a) {
  return a instanceof Ne
};
Ne.prototype.ga = De;
Ne.prototype.oa = function(a) {
  a.push("Y")
};
function Oe(a, b) {
  this.sc = a;
  this.Vb = b
}
Oe.prototype.n = function(a) {
  return a instanceof Oe && this.sc == a.sc && this.Vb == a.Vb
};
Oe.prototype.s = function(a, b) {
  a.push("new ResetFrame(");
  G(this.sc, a, b);
  a.push(", ", String(this.Vb), ")")
};
Oe.prototype.ga = De;
Oe.prototype.oa = function(a) {
  a.push(this.sc, "|", String(Number(this.Vb)), "!")
};
var Pe = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Qe(a) {
  this.reason = a
}
Qe.prototype.n = function(a) {
  return a instanceof Qe && this.reason == a.reason
};
Qe.prototype.s = function(a, b) {
  a.push("new TransportKillFrame(");
  G(this.reason, a, b);
  a.push(")")
};
Qe.prototype.ga = De;
Qe.prototype.oa = function(a) {
  a.push(this.reason, "K")
};
function Re(a) {
  a || f(new S("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new He(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = Ke(Md(a)), a == k && f(new S("bad sack")), new Ge(a)
    }else {
      if(b == "N") {
        return a = Pd(Md(a)), a == k && f(new S("bad seqNum")), new Je(a)
      }else {
        if(b == "T") {
          return a = Ke(Md(a)), a == k && f(new S("bad lastSackSeen")), new Le(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && f(new S("leading garbage")), new Ne
          }else {
            if(b == "^") {
              return new Ie(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && f(new S("leading garbage")), new Me
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && f(new S("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && f(new S("bad applicationLevel")), new Oe(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = Pe[a], a == k && f(new S("unknown kill reason: " + a)), new Qe(a)
                  }else {
                    f(new S("Invalid frame type " + b))
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
;var Se = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Te(a, b) {
  var c = a.match(Se), d = b.match(Se);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Ue(a, b) {
  var c;
  a instanceof Ue ? (this.Ob(b == k ? a.ya : b), Ve(this, a.sa), We(this, a.sb), Xe(this, a.na), Ye(this, a.Ta), this.qb(a.z), Ze(this, a.U.A()), $e(this, a.fb)) : a && (c = String(a).match(Se)) ? (this.Ob(!!b), Ve(this, c[1] || "", j), We(this, c[2] || "", j), Xe(this, c[3] || "", j), Ye(this, c[4]), this.qb(c[5] || "", j), Ze(this, c[6] || "", j), $e(this, c[7] || "", j)) : (this.Ob(!!b), this.U = new af(k, this, this.ya))
}
r = Ue.prototype;
r.sa = "";
r.sb = "";
r.na = "";
r.Ta = k;
r.z = "";
r.fb = "";
r.Yg = m;
r.ya = m;
r.toString = function() {
  if(this.ua) {
    return this.ua
  }
  var a = [];
  this.sa && a.push(bf(this.sa, cf), ":");
  this.na && (a.push("//"), this.sb && a.push(bf(this.sb, cf), "@"), a.push(w(this.na) ? encodeURIComponent(this.na) : k), this.Ta != k && a.push(":", String(this.Ta)));
  this.z && (this.na && this.z.charAt(0) != "/" && a.push("/"), a.push(bf(this.z, this.z.charAt(0) == "/" ? df : ef)));
  var b = String(this.U);
  b && a.push("?", b);
  this.fb && a.push("#", bf(this.fb, ff));
  return this.ua = a.join("")
};
r.A = function() {
  var a = this.sa, b = this.sb, c = this.na, d = this.Ta, e = this.z, g = this.U.A(), h = this.fb, l = new Ue(k, this.ya);
  a && Ve(l, a);
  b && We(l, b);
  c && Xe(l, c);
  d && Ye(l, d);
  e && l.qb(e);
  g && Ze(l, g);
  h && $e(l, h);
  return l
};
function Ve(a, b, c) {
  gf(a);
  delete a.ua;
  a.sa = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.sa) {
    a.sa = a.sa.replace(/:$/, "")
  }
}
function We(a, b, c) {
  gf(a);
  delete a.ua;
  a.sb = c ? b ? decodeURIComponent(b) : "" : b
}
function Xe(a, b, c) {
  gf(a);
  delete a.ua;
  a.na = c ? b ? decodeURIComponent(b) : "" : b
}
function Ye(a, b) {
  gf(a);
  delete a.ua;
  b ? (b = Number(b), (isNaN(b) || b < 0) && f(Error("Bad port number " + b)), a.Ta = b) : a.Ta = k
}
r.qb = function(a, b) {
  gf(this);
  delete this.ua;
  this.z = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function Ze(a, b, c) {
  gf(a);
  delete a.ua;
  b instanceof af ? (a.U = b, a.U.Pe = a, a.U.Ob(a.ya)) : (c || (b = bf(b, hf)), a.U = new af(b, a, a.ya))
}
function $e(a, b, c) {
  gf(a);
  delete a.ua;
  a.fb = c ? b ? decodeURIComponent(b) : "" : b
}
function gf(a) {
  a.Yg && f(Error("Tried to modify a read-only Uri"))
}
r.Ob = function(a) {
  this.ya = a;
  this.U && this.U.Ob(a);
  return this
};
function jf(a) {
  return a instanceof Ue ? a.A() : new Ue(a, i)
}
var kf = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function bf(a, b) {
  var c = k;
  w(a) && (c = a, kf.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, lf)));
  return c
}
function lf(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var cf = /[#\/\?@]/g, ef = /[\#\?:]/g, df = /[\#\?]/g, hf = /[\#\?@]/g, ff = /#/g;
function af(a, b, c) {
  this.Da = a || k;
  this.Pe = b || k;
  this.ya = !!c
}
function mf(a) {
  if(!a.o && (a.o = new Qb, a.e = 0, a.Da)) {
    for(var b = a.Da.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, g = k;
      d >= 0 ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = nf(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
r = af.prototype;
r.o = k;
r.e = k;
r.W = function() {
  mf(this);
  return this.e
};
r.add = function(a, b) {
  mf(this);
  of(this);
  a = nf(this, a);
  if(this.ea(a)) {
    var c = this.o.get(a);
    v(c) ? c.push(b) : this.o.set(a, [c, b])
  }else {
    this.o.set(a, b)
  }
  this.e++;
  return this
};
r.remove = function(a) {
  mf(this);
  a = nf(this, a);
  if(this.o.ea(a)) {
    of(this);
    var b = this.o.get(a);
    v(b) ? this.e -= b.length : this.e--;
    return this.o.remove(a)
  }
  return m
};
r.clear = function() {
  of(this);
  this.o && this.o.clear();
  this.e = 0
};
r.Qa = function() {
  mf(this);
  return this.e == 0
};
r.ea = function(a) {
  mf(this);
  a = nf(this, a);
  return this.o.ea(a)
};
r.Ic = function(a) {
  var b = this.Y();
  return $a(b, a)
};
r.Ha = function() {
  mf(this);
  for(var a = this.o.Y(), b = this.o.Ha(), c = [], d = 0;d < b.length;d++) {
    var e = a[d];
    if(v(e)) {
      for(var g = 0;g < e.length;g++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
r.Y = function(a) {
  mf(this);
  if(a) {
    if(a = nf(this, a), this.ea(a)) {
      var b = this.o.get(a);
      if(v(b)) {
        return b
      }else {
        a = [], a.push(b)
      }
    }else {
      a = []
    }
  }else {
    for(var b = this.o.Y(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      v(d) ? eb(a, d) : a.push(d)
    }
  }
  return a
};
r.set = function(a, b) {
  mf(this);
  of(this);
  a = nf(this, a);
  if(this.ea(a)) {
    var c = this.o.get(a);
    v(c) ? this.e -= c.length : this.e--
  }
  this.o.set(a, b);
  this.e++;
  return this
};
r.get = function(a, b) {
  mf(this);
  a = nf(this, a);
  if(this.ea(a)) {
    var c = this.o.get(a);
    return v(c) ? c[0] : c
  }else {
    return b
  }
};
r.toString = function() {
  if(this.Da) {
    return this.Da
  }
  if(!this.o) {
    return""
  }
  for(var a = [], b = 0, c = this.o.Ha(), d = 0;d < c.length;d++) {
    var e = c[d], g = ua(e), e = this.o.get(e);
    if(v(e)) {
      for(var h = 0;h < e.length;h++) {
        b > 0 && a.push("&"), a.push(g), e[h] !== "" && a.push("=", ua(e[h])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(g), e !== "" && a.push("=", ua(e)), b++
    }
  }
  return this.Da = a.join("")
};
function of(a) {
  delete a.Ab;
  delete a.Da;
  a.Pe && delete a.Pe.ua
}
r.A = function() {
  var a = new af;
  if(this.Ab) {
    a.Ab = this.Ab
  }
  if(this.Da) {
    a.Da = this.Da
  }
  if(this.o) {
    a.o = this.o.A()
  }
  return a
};
function nf(a, b) {
  var c = String(b);
  a.ya && (c = c.toLowerCase());
  return c
}
r.Ob = function(a) {
  a && !this.ya && (mf(this), of(this), Ob(this.o, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ya = a
};
r.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Ob(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
var pf;
function qf(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function rf(a, b) {
  var c = qf(a), d = gb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    $a(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function sf(a, b) {
  var c = qf(a), d = gb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < e.length;h++) {
    $a(d, e[h]) && (fb(e, h--, 1), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
;function T(a, b) {
  this.width = a;
  this.height = b
}
r = T.prototype;
r.A = function() {
  return new T(this.width, this.height)
};
r.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
r.Qa = function() {
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
var tf = !I || yc();
!lc && !I || I && yc() || lc && K("1.9.1");
var uf = I && !K("9");
function vf(a) {
  return a ? new wf(xf(a)) : pf || (pf = new wf)
}
function U(a) {
  return w(a) ? document.getElementById(a) : a
}
function yf(a, b, c, d) {
  a = d || a;
  b = b && b != "*" ? b.toUpperCase() : "";
  if(a.querySelectorAll && a.querySelector && (!J || document.compatMode == "CSS1Compat" || K("528")) && (b || c)) {
    return a.querySelectorAll(b + (c ? "." + c : ""))
  }
  if(c && a.getElementsByClassName) {
    if(a = a.getElementsByClassName(c), b) {
      for(var d = {}, e = 0, g = 0, h;h = a[g];g++) {
        b == h.nodeName && (d[e++] = h)
      }
      d.length = e;
      return d
    }else {
      return a
    }
  }
  a = a.getElementsByTagName(b || "*");
  if(c) {
    d = {};
    for(g = e = 0;h = a[g];g++) {
      b = h.className, typeof b.split == "function" && $a(b.split(/\s+/), c) && (d[e++] = h)
    }
    d.length = e;
    return d
  }else {
    return a
  }
}
function zf(a, b) {
  Ra(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in Af ? a.setAttribute(Af[d], b) : d.lastIndexOf("aria-", 0) == 0 ? a.setAttribute(d, b) : a[d] = b
  })
}
var Af = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Bf(a, b, c) {
  return Cf(document, arguments)
}
function Cf(a, b) {
  var c = b[0], d = b[1];
  if(!tf && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', wa(d.name), '"');
    if(d.type) {
      c.push(' type="', wa(d.type), '"');
      var e = {};
      Va(e, d);
      d = e;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  if(d) {
    w(d) ? c.className = d : v(d) ? rf.apply(k, [c].concat(d)) : zf(c, d)
  }
  b.length > 2 && Df(a, c, b, 2);
  return c
}
function Df(a, b, c, d) {
  function e(c) {
    c && b.appendChild(w(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && g.nodeType > 0) ? F(Ef(g) ? db(g) : g, e) : e(g)
  }
}
function Ff(a, b) {
  Df(xf(a), a, arguments, 1)
}
function Gf(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function Hf(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function If(a, b) {
  if(a.contains && b.nodeType == 1) {
    return a == b || a.contains(b)
  }
  if(typeof a.compareDocumentPosition != "undefined") {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
}
function xf(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
function Jf(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && a.firstChild.nodeType == 3) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      Gf(a), a.appendChild(xf(a).createTextNode(b))
    }
  }
}
var Kf = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Lf = {IMG:" ", BR:"\n"};
function Mf(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ja(a) && a >= 0 && a < 32768) : m
}
function Nf(a) {
  var b = [];
  Of(a, b, m);
  return b.join("")
}
function Of(a, b, c) {
  if(!(a.nodeName in Kf)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Lf) {
        b.push(Lf[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Of(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Ef(a) {
  if(a && typeof a.length == "number") {
    if(ia(a)) {
      return typeof a.item == "function" || typeof a.item == "string"
    }else {
      if(z(a)) {
        return typeof a.item == "function"
      }
    }
  }
  return m
}
function wf(a) {
  this.B = a || t.document || document
}
r = wf.prototype;
r.Ga = vf;
r.b = function(a) {
  return w(a) ? this.B.getElementById(a) : a
};
r.i = function(a, b, c) {
  return Cf(this.B, arguments)
};
r.createElement = function(a) {
  return this.B.createElement(a)
};
r.createTextNode = function(a) {
  return this.B.createTextNode(a)
};
r.bf = function(a, b, c) {
  for(var d = this.B, e = !!c, c = ["<tr>"], g = 0;g < b;g++) {
    c.push(e ? "<td>&nbsp;</td>" : "<td></td>")
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
r.append = Ff;
r.contains = If;
function Pf(a, b, c, d) {
  this.contentWindow = a;
  this.Mc = b;
  this.Le = c;
  this.Mg = d
}
Pf.prototype.s = function(a, b) {
  a.push("<XDRFrame frameId=");
  G(this.Mg, a, b);
  a.push(", expandedUrl=");
  G(this.Mc, a, b);
  a.push(", streams=");
  G(this.Le, a, b);
  a.push(">")
};
function Qf() {
  this.frames = [];
  this.le = new Qb
}
Qf.prototype.a = R("cw.net.XDRTracker");
function Rf(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + String(Math.floor(ye())) + String(Math.floor(ye()))
  })
}
function Sf(a, b) {
  for(var c = Tf, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = e.Le.length == 0) {
      g = e.Mc;
      var h = String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + H(b) + " existing frame " + H(e)), Ed(e)
    }
  }
  d = Ld() + Ld();
  e = Rf(a);
  g = t.location;
  g instanceof Ue || (g = jf(g));
  e instanceof Ue || (e = jf(e));
  var l = g;
  g = l.A();
  (h = !!e.sa) ? Ve(g, e.sa) : h = !!e.sb;
  h ? We(g, e.sb) : h = !!e.na;
  h ? Xe(g, e.na) : h = e.Ta != k;
  var n = e.z;
  if(h) {
    Ye(g, e.Ta)
  }else {
    if(h = !!e.z) {
      if(n.charAt(0) != "/" && (l.na && !l.z ? n = "/" + n : (l = g.z.lastIndexOf("/"), l != -1 && (n = g.z.substr(0, l + 1) + n))), n == ".." || n == ".") {
        n = ""
      }else {
        if(!(n.indexOf("./") == -1 && n.indexOf("/.") == -1)) {
          for(var l = n.lastIndexOf("/", 0) == 0, n = n.split("/"), q = [], x = 0;x < n.length;) {
            var s = n[x++];
            s == "." ? l && x == n.length && q.push("") : s == ".." ? ((q.length > 1 || q.length == 1 && q[0] != "") && q.pop(), l && x == n.length && q.push("")) : (q.push(s), l = j)
          }
          n = q.join("/")
        }
      }
    }
  }
  h ? g.qb(n) : h = e.U.toString() !== "";
  if(h) {
    l = e.U;
    if(!l.Ab) {
      l.Ab = l.toString() ? decodeURIComponent(l.toString()) : ""
    }
    Ze(g, l.Ab, i)
  }else {
    h = !!e.fb
  }
  h && $e(g, e.fb);
  e = g.toString();
  g = String(t.location).match(Se)[3] || k;
  h = e.match(Se)[3] || k;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + H(b)), c = Ed(new Pf(t, e, [b], k))) : (g = U("minerva-elements"), h = new td, c.le.set(d, [h, e, b]), c.a.info("Creating new XDRFrame " + H(d) + "for " + H(b)), c = Bf("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + d}), g.appendChild(c), c = h);
  return c
}
Qf.prototype.Jh = function(a) {
  var b = this.le.get(a);
  b || f(Error("Unknown frameId " + H(a)));
  this.le.remove(b);
  var c = b[0], a = new Pf(U("minerva-xdrframe-" + a).contentWindow || (J ? U("minerva-xdrframe-" + a).document || U("minerva-xdrframe-" + a).contentWindow.document : U("minerva-xdrframe-" + a).contentDocument || U("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (J ? U("minerva-xdrframe-" + a).document || U("minerva-xdrframe-" + a).contentWindow.document : U("minerva-xdrframe-" + a).contentDocument || U("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  zd(c, a)
};
var Tf = new Qf;
t.__XHRTracker_xdrFrameLoaded = A(Tf.Jh, Tf);
var Uf;
Uf = m;
var Vf = hc();
Vf && (Vf.indexOf("Firefox") != -1 || Vf.indexOf("Camino") != -1 || Vf.indexOf("iPhone") != -1 || Vf.indexOf("iPod") != -1 || Vf.indexOf("iPad") != -1 || Vf.indexOf("Android") != -1 || Vf.indexOf("Chrome") != -1 && (Uf = j));
var Wf = Uf;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function Xf(a, b, c, d, e, g) {
  td.call(this, e, g);
  this.If = a;
  this.Nd = [];
  this.lf = !!b;
  this.Kg = !!c;
  this.Ag = !!d;
  for(b = 0;b < a.length;b++) {
    Bd(a[b], A(this.uf, this, b, j), A(this.uf, this, b, m))
  }
  a.length == 0 && !this.lf && zd(this, this.Nd)
}
C(Xf, td);
Xf.prototype.Sf = 0;
Xf.prototype.uf = function(a, b, c) {
  this.Sf++;
  this.Nd[a] = [b, c];
  this.Na || (this.lf && b ? zd(this, [a, c]) : this.Kg && !b ? this.dc(c) : this.Sf == this.If.length && zd(this, this.Nd));
  this.Ag && !b && (c = k);
  return c
};
Xf.prototype.dc = function(a) {
  Xf.d.dc.call(this, a);
  F(this.If, function(a) {
    a.cancel()
  })
};
function Yf(a) {
  a = new Xf(a, m, j);
  Ad(a, function(a) {
    return Xa(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function Zf(a, b) {
  this.Hh = a;
  this.Lf = b
}
Zf.prototype.ie = 0;
Zf.prototype.fd = 0;
Zf.prototype.Ud = m;
function $f(a) {
  var b = [];
  if(a.Ud) {
    return[b, 2]
  }
  var c = a.ie, d = a.Hh.responseText;
  for(a.ie = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var e = d.substr(a.fd, c - a.fd), e = e.replace(/\r$/, "");
    if(e.length > a.Lf) {
      return a.Ud = j, [b, 2]
    }
    b.push(e);
    a.fd = c += 1
  }
  return a.ie - a.fd - 1 > a.Lf ? (a.Ud = j, [b, 2]) : [b, 1]
}
;function ag(a, b, c) {
  this.N = b;
  this.qa = a;
  this.Jd = c
}
C(ag, L);
r = ag.prototype;
r.a = R("cw.net.XHRMaster");
r.Xa = -1;
r.me = function(a, b, c) {
  this.Jd.__XHRSlave_makeRequest(this.qa, a, b, c)
};
r.Pa = o("Xa");
r.qe = function(a, b) {
  b != 1 && le(this.a, H(this.qa) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  se(this.N);
  te(this.N, a)
};
r.re = function(a) {
  P(this.a, "ongotheaders_: " + H(a));
  var b = k;
  "Content-Length" in a && (b = Pd(a["Content-Length"]));
  a = this.N;
  P(a.a, a.t() + " got Content-Length: " + b);
  a.za == bg && (b == k && (O(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), cg(a, 2E3 + b / 3072 * 1E3))
};
r.se = function(a) {
  a != 1 && P(this.a, this.N.t() + "'s XHR's readyState is " + a);
  this.Xa = a;
  this.Xa >= 2 && se(this.N)
};
r.pe = function() {
  this.N.f()
};
r.c = function() {
  ag.d.c.call(this);
  delete dg.Ia[this.qa];
  this.Jd.__XHRSlave_dispose(this.qa);
  delete this.Jd
};
function eg() {
  this.Ia = {}
}
C(eg, L);
r = eg.prototype;
r.a = R("cw.net.XHRMasterTracker");
r.Ld = function(a, b) {
  var c = "_" + Ld(), d = new ag(c, a, b);
  return this.Ia[c] = d
};
r.qe = function(a, b, c) {
  var b = cb(b), d = this.Ia[a];
  d ? d.qe(b, c) : le(this.a, "onframes_: no master for " + H(a))
};
r.re = function(a, b) {
  var c = this.Ia[a];
  c ? c.re(b) : le(this.a, "ongotheaders_: no master for " + H(a))
};
r.se = function(a, b) {
  var c = this.Ia[a];
  c ? c.se(b) : le(this.a, "onreadystatechange_: no master for " + H(a))
};
r.pe = function(a) {
  var b = this.Ia[a];
  b ? (delete this.Ia[b.qa], b.pe()) : le(this.a, "oncomplete_: no master for " + H(a))
};
r.c = function() {
  eg.d.c.call(this);
  for(var a = Sa(this.Ia);a.length;) {
    a.pop().f()
  }
  delete this.Ia
};
var dg = new eg;
t.__XHRMaster_onframes = A(dg.qe, dg);
t.__XHRMaster_oncomplete = A(dg.pe, dg);
t.__XHRMaster_ongotheaders = A(dg.re, dg);
t.__XHRMaster_onreadystatechange = A(dg.se, dg);
function fg(a, b, c) {
  this.host = a;
  this.port = b;
  this.Ch = c
}
function gg(a, b) {
  b || (b = a);
  this.Ua = a;
  this.Ya = b
}
gg.prototype.s = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  G(this.Ua, a, b);
  a.push(", secondaryUrl=");
  G(this.Ya, a, b);
  a.push(">")
};
function hg(a, b, c, d) {
  this.Ua = a;
  this.Wf = b;
  this.Ya = c;
  this.fg = d;
  (!(this.Ua.indexOf("http://") == 0 || this.Ua.indexOf("https://") == 0) || !(this.Ya.indexOf("http://") == 0 || this.Ya.indexOf("https://") == 0)) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Wf.location.href;
  Te(this.Ua, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.fg.location.href;
  Te(this.Ya, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
hg.prototype.s = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  G(this.Ua, a, b);
  a.push(", secondaryUrl=");
  G(this.Ya, a, b);
  a.push(">")
};
var ig = new Ie(";)]}");
function jg() {
}
jg.prototype.pf = p(1);
function kg(a) {
  this.vh = a
}
kg.prototype.s = function(a, b) {
  a.push("<UserContext for ");
  G(this.vh, a, b);
  a.push(">")
};
function lg(a, b, c) {
  this.Q = a;
  this.wh = b ? b : new jg;
  this.M = c ? c : Id;
  this.Cc = new Rd;
  this.Ac = Ld() + Ld();
  this.Wa = new Xb;
  this.fe = new Zb;
  this.Dc = k;
  this.wd = [];
  this.Tb = new kg(this);
  if(J) {
    this.Dc = fd(t, "load", this.oh, m, this)
  }
}
C(lg, L);
r = lg.prototype;
r.a = R("cw.net.ClientStream");
r.Gf = new Wb(-1, []);
r.Hf = new Wb(-1, []);
r.dh = 50;
r.bh = 1048576;
r.te = k;
r.onreset = k;
r.Uf = k;
r.Ie = m;
r.xe = m;
r.h = 1;
r.mg = -1;
r.k = k;
r.F = k;
r.tc = k;
r.Je = 0;
r.Vf = 0;
r.eg = 0;
r.s = function(a, b) {
  a.push("<ClientStream id=");
  G(this.Ac, a, b);
  a.push(", state=", String(this.h));
  a.push(", primary=");
  G(this.k, a, b);
  a.push(", secondary=");
  G(this.F, a, b);
  a.push(", resetting=");
  G(this.tc, a, b);
  a.push(">")
};
function mg(a) {
  var b = [-1];
  a.k && b.push(a.k.Mb);
  a.F && b.push(a.F.Mb);
  return Math.max.apply(Math.max, b)
}
function ng(a) {
  if(a.h != 1) {
    var b = a.Wa.v.W() != 0, c = $b(a.fe), d = !c.n(a.Hf) && !(a.k && c.n(a.k.Ib) || a.F && c.n(a.F.Ib)), e = mg(a);
    if((b = b && e < a.Wa.zb) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.k.Xb) {
        Q(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.k, c != d.Ib)) {
          !d.Ja && !d.I.length && og(d), d.I.push(new Ge(c)), d.Ib = c
        }
        b && pg(a.k, a.Wa, e + 1);
        a.k.Fa()
      }else {
        a.F == k ? a.Ie ? (Q(a.a, "tryToSend_: creating secondary to send " + g), a.F = qg(a, m), b && pg(a.F, a.Wa, e + 1), a.F.Fa()) : (Q(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.xe = j) : Q(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
r.oh = function() {
  this.Dc = k;
  if(this.k && this.k.Eb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.k;
    a.Ad = j;
    a.f()
  }
  if(this.F && this.F.Eb()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.F, a.Ad = j, a.f()
  }
};
function rg(a, b) {
  var c;
  fa(c) || (c = j);
  a.h > 3 && f(Error("sendStrings: Can't send strings in state " + a.h));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || f(Error("sendStrings: string #" + c + " has illegal chars: " + H(d)))
      }
    }
    a.Wa.extend(b);
    ng(a)
  }
}
function qg(a, b) {
  var c;
  a.Q instanceof hg ? c = a.wh.pf() == 1 ? bg : sg : a.Q instanceof fg ? c = tg : f(Error("Don't support endpoint " + H(a.Q)));
  a.mg += 1;
  c = new ug(a.M, a, a.mg, c, a.Q, b);
  Q(a.a, "Created: " + c.t());
  a.Cc.add(c);
  return c
}
function vg(a, b, c) {
  var d = new wg(a.M, a, b, c);
  Q(a.a, "Created: " + d.t() + ", delay=" + b + ", times=" + c);
  a.Cc.add(d);
  return d
}
function xg(a, b) {
  a.Cc.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  P(a.a, "Offline: " + b.t());
  b.rc ? a.Je += b.rc : a.Je = 0;
  a.Je >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.Tb, "stream penalty reached limit", m), a.f());
  if(a.h > 3) {
    a.h == 4 && b.rg ? (P(a.a, "Disposing because resettingTransport_ is done."), a.f()) : P(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    var c;
    var d;
    c = b instanceof wg;
    if(!c && b.Ad) {
      var e = J ? Wf ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      Q(a.a, "getDelayForNextTransport_: " + H({delay:c, times:d}))
    }else {
      d = b.Ye();
      if(b == a.k) {
        if(d) {
          e = ++a.Vf
        }else {
          if(!c) {
            e = a.Vf = 0
          }
        }
      }else {
        if(d) {
          e = ++a.eg
        }else {
          if(!c) {
            e = a.eg = 0
          }
        }
      }
      if(c || !e) {
        d = c = 0, Q(a.a, "getDelayForNextTransport_: " + H({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(Math.random() * 4E3) - 2E3, l = Math.max(0, b.ng - b.Ne);
        d = (c = Math.max(0, g + h - l)) ? 1 : 0;
        Q(a.a, "getDelayForNextTransport_: " + H({count:e, base:g, variance:h, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    if(b == a.k) {
      a.k = k, c ? a.k = vg(a, e, c) : (e = mg(a), a.k = qg(a, j), pg(a.k, a.Wa, e + 1)), a.k.Fa()
    }else {
      if(b == a.F) {
        a.F = k, c ? (a.F = vg(a, e, c), a.F.Fa()) : ng(a)
      }
    }
  }
}
r.reset = function(a) {
  this.h > 3 && f(Error("reset: Can't send reset in state " + this.h));
  this.h = 4;
  this.k && this.k.Xb ? (this.a.info("reset: Sending ResetFrame over existing primary."), yg(this.k, a), this.k.Fa()) : (this.k && (P(this.a, "reset: Disposing primary before sending ResetFrame."), this.k.f()), this.F && (P(this.a, "reset: Disposing secondary before sending ResetFrame."), this.F.f()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.tc = qg(this, m), yg(this.tc, a), this.tc.Fa());
  this.onreset && this.onreset.call(this.Tb, a, j)
};
function zg(a, b, c, d) {
  var e;
  e = a.fe;
  for(var g = a.dh, h = a.bh, l = [], n = m, q = 0, x = c.length;q < x;q++) {
    var s = c[q], y = s[0], s = s[1];
    if(y == e.Hb + 1) {
      e.Hb += 1;
      for(l.push(s);;) {
        y = e.Hb + 1;
        s = e.ab.get(y, ac);
        if(s === ac) {
          break
        }
        l.push(s[0]);
        e.ab.remove(y);
        e.w -= s[1];
        e.Hb = y
      }
    }else {
      if(!(y <= e.Hb)) {
        if(g != k && e.ab.W() >= g) {
          n = j;
          break
        }
        var D = Vb(s);
        if(h != k && e.w + D > h) {
          n = j;
          break
        }
        e.ab.set(y, [s, D]);
        e.w += D
      }
    }
  }
  e.ab.Qa() && e.ab.clear();
  e = [l, n];
  c = e[0];
  e = e[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(h = c[g], a.te && a.te.call(a.Tb, h), a.h == 4 || a.va) {
        return
      }
    }
  }
  d || ng(a);
  if(!(a.h == 4 || a.va) && e) {
    le(b.a, b.t() + "'s peer caused rwin overflow."), b.f()
  }
}
r.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  this.h != 1 && f(Error("ClientStream.start: " + H(this) + " already started"));
  this.h = 2;
  if(this.Q instanceof gg) {
    var a = Sf(this.Q.Ua, this), b = Sf(this.Q.Ya, this);
    Ad(Yf([a, b]), A(this.Jg, this))
  }else {
    Ag(this)
  }
};
r.Jg = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Mc, e = a[1].Mc;
  this.wd.push(a[0]);
  this.wd.push(a[1]);
  this.Q = new hg(d, b, e, c);
  Ag(this)
};
function Ag(a) {
  a.h = 3;
  a.k = qg(a, j);
  pg(a.k, a.Wa, k);
  a.k.Fa()
}
r.c = function() {
  this.a.info(H(this) + " in disposeInternal.");
  this.h = 5;
  for(var a = this.Cc.Y(), b = 0;b < a.length;b++) {
    a[b].f()
  }
  for(a = 0;a < this.wd.length;a++) {
    bb(this.wd[a].Le, this)
  }
  if(J && this.Dc) {
    id(this.Dc), this.Dc = k
  }
  this.Uf && this.Uf.call(this.Tb);
  delete this.Cc;
  delete this.k;
  delete this.F;
  delete this.tc;
  delete this.Tb;
  lg.d.c.call(this)
};
var bg = 1, sg = 2, tg = 3;
function ug(a, b, c, d, e, g) {
  this.M = a;
  this.H = b;
  this.Sb = c;
  this.za = d;
  this.Q = e;
  this.I = [];
  this.wb = g;
  this.Xb = !this.Eb();
  this.Nb = this.za != bg;
  this.xg = A(this.Ah, this)
}
C(ug, L);
r = ug.prototype;
r.a = R("cw.net.ClientTransport");
r.q = k;
r.Ne = k;
r.ng = k;
r.hd = k;
r.Ja = m;
r.rd = m;
r.Ib = k;
r.Wd = 0;
r.Mb = -1;
r.ve = -1;
r.rg = m;
r.Ad = m;
r.rc = 0;
r.ic = m;
r.s = function(a) {
  a.push("<ClientTransport #", String(this.Sb), ", becomePrimary=", String(this.wb), ">")
};
r.t = function() {
  return(this.wb ? "Prim. T#" : "Sec. T#") + this.Sb
};
r.Ye = function() {
  return!(!this.ic && this.Wd)
};
r.Eb = function() {
  return this.za == bg || this.za == sg
};
function Bg(a, b) {
  hb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  zg(a.H, a, b, !a.Nb)
}
function Cg(a, b, c) {
  try {
    var d = Re(b);
    a.Wd += 1;
    P(a.a, a.t() + " RECV " + H(d));
    var e;
    a.Wd == 1 && !d.n(ig) && a.Eb() ? (O(a.a, a.t() + " is closing soon because got bad preamble: " + H(d)), e = j) : e = m;
    if(e) {
      return j
    }
    if(d instanceof He) {
      if(!/^([ -~]*)$/.test(d.Rb)) {
        return a.ic = j
      }
      a.ve += 1;
      c.push([a.ve, d.Rb])
    }else {
      if(d instanceof Ge) {
        var g = a.H, h = d.ra;
        g.Gf = h;
        var l = g.Wa, n = h.ub, c = m;
        n > l.zb && (c = j);
        for(var q = Yb(l).concat(), d = 0;d < q.length;d++) {
          var x = q[d];
          if(x > n) {
            break
          }
          var s = l.v.p[x][1];
          l.v.remove(x);
          l.w -= s
        }
        for(d = 0;d < h.ob.length;d++) {
          var y = h.ob[d];
          y > l.zb && (c = j);
          l.v.ea(y) && (s = l.v.p[y][1], l.v.remove(y), l.w -= s)
        }
        l.v.Qa() && l.v.clear();
        if(c) {
          return O(a.a, a.t() + " is closing soon because got bad SackFrame"), a.ic = j
        }
      }else {
        if(d instanceof Je) {
          a.ve = d.yc - 1
        }else {
          if(d instanceof Le) {
            a.H.Hf = d.nc
          }else {
            if(d instanceof Ne) {
              return Q(a.a, a.t() + " is closing soon because got YouCloseItFrame"), j
            }else {
              if(d instanceof Qe) {
                return a.ic = j, d.reason == "stream_attach_failure" ? a.rc += 1 : d.reason == "acked_unsent_strings" && (a.rc += 0.5), Q(a.a, a.t() + " is closing soon because got " + H(d)), j
              }else {
                if(!(d instanceof Ie)) {
                  if(d instanceof Me) {
                    var D = a.H, yj = !a.Nb;
                    Q(D.a, "Stream is now confirmed to exist at server.");
                    D.Ie = j;
                    if(D.xe && !yj) {
                      D.xe = m, ng(D)
                    }
                  }else {
                    if(c.length && (Bg(a, c), ab(c)), d instanceof Oe) {
                      var nd = a.H;
                      nd.onreset && nd.onreset.call(nd.Tb, d.sc, d.Vb);
                      nd.f();
                      return j
                    }else {
                      f(Error(a.t() + " had unexpected state in framesReceived_."))
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }catch(hh) {
    return hh instanceof S || f(hh), O(a.a, a.t() + " is closing soon because got InvalidFrame: " + H(b)), a.ic = j
  }
  return m
}
function te(a, b) {
  a.rd = j;
  try {
    for(var c = m, d = [], e = 0, g = b.length;e < g;e++) {
      if(a.va) {
        a.a.info(a.t() + " returning from loop because we're disposed.");
        return
      }
      if(c = Cg(a, b[e], d)) {
        break
      }
    }
    d.length && Bg(a, d);
    a.rd = m;
    a.I.length && a.Fa();
    c && (Q(a.a, a.t() + " closeSoon is true.  Frames were: " + H(b)), a.f())
  }finally {
    a.rd = m
  }
}
r.Ah = function() {
  O(this.a, this.t() + " timed out due to lack of connection or no data being received.");
  this.f()
};
function Dg(a) {
  if(a.hd != k) {
    a.M.O.clearTimeout(a.hd), a.hd = k
  }
}
function cg(a, b) {
  Dg(a);
  b = Math.round(b);
  a.hd = a.M.O.setTimeout(a.xg, b);
  P(a.a, a.t() + "'s receive timeout set to " + b + " ms.")
}
function se(a) {
  a.za != bg && (a.za == tg || a.za == sg ? cg(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.za)))
}
function og(a) {
  var b = new Ee;
  b.Sb = a.Sb;
  b.Xf = 2;
  b.zf = 2;
  if(!a.H.Ie) {
    b.$f = j
  }
  b.Ac = a.H.Ac;
  b.Ke = a.Nb;
  if(b.Ke) {
    b.Qf = 4096
  }
  b.Mf = 3E5;
  b.Kf = a.Nb ? Math.floor(10) : 0;
  b.og = m;
  if(a.wb) {
    b.ig = k, b.ne = Math.floor((a.Nb ? 358E4 : 25E3) / 1E3)
  }
  b.ra = $b(a.H.fe);
  b.cd = a.H.Gf;
  a.I.push(b);
  a.Ib = b.ra
}
function ue(a, b) {
  b && (a.rc += 0.5);
  a.f()
}
r.Fa = function() {
  this.Ja && !this.Xb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.rd) {
    Q(this.a, this.t() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ja;
    this.Ja = j;
    !a && !this.I.length && og(this);
    for(a = 0;a < this.I.length;a++) {
      P(this.a, this.t() + " SEND " + H(this.I[a]))
    }
    if(this.Eb()) {
      for(var a = [], b = 0, c = this.I.length;b < c;b++) {
        this.I[b].oa(a), a.push("\n")
      }
      this.I = [];
      a = a.join("");
      b = this.wb ? this.Q.Ua : this.Q.Ya;
      this.q = dg.Ld(this, this.wb ? this.Q.Wf : this.Q.fg);
      this.Ne = this.M.O === rd ? B() : this.M.O.getTime();
      this.q.me(b, "POST", a);
      cg(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.Nb ? 0 : this.wb ? 25E3 : 0))
    }else {
      if(this.za == tg) {
        a = [];
        b = 0;
        for(c = this.I.length;b < c;b++) {
          a.push(this.I[b].ga())
        }
        this.I = [];
        this.q ? this.q.Ec(a) : (b = this.Q, this.q = new xe(this), this.q.qd = b.Ch.Ld(this.q), this.Ne = this.M.O === rd ? B() : this.M.O.getTime(), this.q.Id(b.host, b.port), this.q.va || (this.q.Ec(a), this.q.va || cg(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.za))
      }
    }
  }
};
function pg(a, b, c) {
  !a.Ja && !a.I.length && og(a);
  for(var c = Math.max(c, a.Mb + 1), b = b.qf(c), c = 0, d = b.length;c < d;c++) {
    var e = b[c], g = e[0], e = e[1];
    (a.Mb == -1 || a.Mb + 1 != g) && a.I.push(new Je(g));
    a.I.push(new He(e));
    a.Mb = g
  }
}
r.c = function() {
  this.a.info(this.t() + " in disposeInternal.");
  ug.d.c.call(this);
  this.ng = this.M.O === rd ? B() : this.M.O.getTime();
  this.I = [];
  Dg(this);
  this.q && this.q.f();
  var a = this.H;
  this.H = k;
  xg(a, this)
};
function yg(a, b) {
  !a.Ja && !a.I.length && og(a);
  a.I.push(new Oe(b, j));
  a.rg = j
}
function wg(a, b, c, d) {
  this.M = a;
  this.H = b;
  this.gf = c;
  this.af = d
}
C(wg, L);
r = wg.prototype;
r.Ja = m;
r.Xb = m;
r.Tc = k;
r.Ib = k;
r.a = R("cw.net.DoNothingTransport");
function Eg(a) {
  a.Tc = a.M.O.setTimeout(function() {
    a.Tc = k;
    a.af--;
    a.af ? Eg(a) : a.f()
  }, a.gf)
}
r.Fa = function() {
  this.Ja && !this.Xb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ja = j;
  Eg(this)
};
r.s = function(a) {
  a.push("<DoNothingTransport delay=", String(this.gf), ">")
};
r.Eb = p(m);
r.t = p("Wast. T");
r.Ye = p(m);
r.c = function() {
  this.a.info(this.t() + " in disposeInternal.");
  wg.d.c.call(this);
  this.Tc != k && this.M.O.clearTimeout(this.Tc);
  var a = this.H;
  this.H = k;
  xg(a, this)
};
function Fg(a, b, c) {
  a.style[Ha(c)] = b
}
function Gg(a, b) {
  var c;
  a: {
    c = xf(a);
    if(c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k))) {
      c = c[b] || c.getPropertyValue(b);
      break a
    }
    c = ""
  }
  return c || (a.currentStyle ? a.currentStyle[b] : k) || a.style[b]
}
function Hg(a, b, c) {
  b instanceof T ? (c = b.height, b = b.width) : c == i && f(Error("missing height argument"));
  a.style.width = Ig(b);
  a.style.height = Ig(c)
}
function Ig(a) {
  typeof a == "number" && (a = Math.round(a) + "px");
  return a
}
function Jg(a) {
  if(Gg(a, "display") != "none") {
    return Kg(a)
  }
  var b = a.style, c = b.display, d = b.visibility, e = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = Kg(a);
  b.display = c;
  b.position = e;
  b.visibility = d;
  return a
}
function Kg(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = J && !b && !c;
  if((!fa(b) || d) && a.getBoundingClientRect) {
    b = a.getBoundingClientRect();
    if(I) {
      a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop
    }
    return new T(b.right - b.left, b.bottom - b.top)
  }
  return new T(b, c)
}
function Lg(a) {
  I ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[J ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var Mg = lc ? "MozUserSelect" : J ? "WebkitUserSelect" : k;
function Ng(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Mg) {
    if(b = b ? "none" : "", a.style[Mg] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[Mg] = b
      }
    }
  }else {
    if(I || kc) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
;function Og(a) {
  this.ib = a;
  this.l = []
}
C(Og, L);
var Pg = [];
function V(a, b, c, d) {
  v(c) || (Pg[0] = c, c = Pg);
  for(var e = 0;e < c.length;e++) {
    a.l.push(N(b, c[e], d || a, m, a.ib || a))
  }
  return a
}
function Qg(a, b, c, d, e, g) {
  if(v(c)) {
    for(var h = 0;h < c.length;h++) {
      Qg(a, b, c[h], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.ib || a;
      e = !!e;
      if(b = hd(b, c, e)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].nb && b[c].Kb == d && b[c].capture == e && b[c].Xc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    if(b) {
      b = b.key, id(b), bb(a.l, b)
    }
  }
  return a
}
Og.prototype.we = function() {
  F(this.l, id);
  this.l.length = 0
};
Og.prototype.c = function() {
  Og.d.c.call(this);
  this.we()
};
Og.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Rg() {
}
da(Rg);
Rg.prototype.fh = 0;
Rg.Oa();
function Sg(a) {
  this.ma = a || vf();
  this.wc = Tg
}
C(Sg, pd);
Sg.prototype.Wg = Rg.Oa();
var Tg = k;
function Ug(a, b) {
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
  f(Error("Invalid component state"))
}
r = Sg.prototype;
r.S = k;
r.C = m;
r.g = k;
r.wc = k;
r.eh = k;
r.D = k;
r.P = k;
r.Zb = k;
r.Eh = m;
function Vg(a) {
  return a.S || (a.S = ":" + (a.Wg.fh++).toString(36))
}
r.b = o("g");
function Wg(a) {
  return a.Cb || (a.Cb = new Og(a))
}
r.getParent = o("D");
r.Ce = function(a) {
  this.D && this.D != a && f(Error("Method not supported"));
  Sg.d.Ce.call(this, a)
};
r.Ga = o("ma");
r.i = function() {
  this.g = this.ma.createElement("div")
};
function Xg(a, b) {
  a.C && f(Error("Component already rendered"));
  a.g || a.i();
  b ? b.insertBefore(a.g, k) : a.ma.B.body.appendChild(a.g);
  (!a.D || a.D.C) && a.R()
}
r.R = function() {
  this.C = j;
  Yg(this, function(a) {
    !a.C && a.b() && a.R()
  })
};
r.eb = function() {
  Yg(this, function(a) {
    a.C && a.eb()
  });
  this.Cb && this.Cb.we();
  this.C = m
};
r.c = function() {
  Sg.d.c.call(this);
  this.C && this.eb();
  this.Cb && (this.Cb.f(), delete this.Cb);
  Yg(this, function(a) {
    a.f()
  });
  !this.Eh && this.g && Hf(this.g);
  this.D = this.eh = this.g = this.Zb = this.P = k
};
r.fc = o("g");
r.Pb = function(a) {
  this.C && f(Error("Component already rendered"));
  this.wc = a
};
function Yg(a, b) {
  a.P && F(a.P, b, i)
}
r.removeChild = function(a, b) {
  if(a) {
    var c = w(a) ? a : Vg(a), a = this.Zb && c ? (c in this.Zb ? this.Zb[c] : i) || k : k;
    if(c && a) {
      var d = this.Zb;
      c in d && delete d[c];
      bb(this.P, a);
      b && (a.eb(), a.g && Hf(a.g));
      c = a;
      c == k && f(Error("Unable to set parent component"));
      c.D = k;
      Sg.d.Ce.call(c, k)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function Zg(a, b) {
  a.setAttribute("role", b);
  a.bj = b
}
;function $g() {
}
var ah;
da($g);
r = $g.prototype;
r.Oc = function() {
};
r.i = function(a) {
  var b = a.Ga().i("div", bh(this, a).join(" "), a.fa);
  this.ze(a, b);
  return b
};
r.fc = function(a) {
  return a
};
r.cc = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(I && !K("7")) {
      var d = ch(qf(a), b);
      d.push(b);
      pa(c ? rf : sf, a).apply(k, d)
    }else {
      c ? rf(a, b) : sf(a, b)
    }
  }
};
r.Bf = function(a) {
  if(a.wc == k) {
    a.wc = "rtl" == Gg(a.C ? a.g : a.ma.B.body, "direction")
  }
  a.wc && this.Pb(a.b(), j);
  a.isEnabled() && this.md(a, a.Ub)
};
r.ze = function(a, b) {
  a.isEnabled() || this.da(b, 1, j);
  a.h & 8 && this.da(b, 8, j);
  a.ca & 16 && this.da(b, 16, !!(a.h & 16));
  a.ca & 64 && this.da(b, 64, !!(a.h & 64))
};
r.jd = function(a, b) {
  Ng(a, !b, !I && !kc)
};
r.Pb = function(a, b) {
  this.cc(a, this.u() + "-rtl", b)
};
r.Df = function(a) {
  var b;
  return a.ca & 32 && (b = a.hb()) ? Mf(b) : m
};
r.md = function(a, b) {
  var c;
  if(a.ca & 32 && (c = a.hb())) {
    if(!b && a.h & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.h & 32 && a.tf()
    }
    if(Mf(c) != b) {
      b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex"))
    }
  }
};
r.Ge = function(a, b) {
  a.style.display = b ? "" : "none"
};
r.ka = function(a, b, c) {
  var d = a.b();
  if(d) {
    var e = dh(this, b);
    e && this.cc(a, e, c);
    this.da(d, b, c)
  }
};
r.da = function(a, b, c) {
  ah || (ah = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = ah[b]) && a.setAttribute("aria-" + b, c)
};
r.kd = function(a, b) {
  var c = this.fc(a);
  if(c && (Gf(c), b)) {
    if(w(b)) {
      Jf(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = xf(c);
          c.appendChild(w(a) ? b.createTextNode(a) : a)
        }
      };
      v(b) ? F(b, d) : ga(b) && !("nodeType" in b) ? F(db(b), d) : d(b)
    }
  }
};
r.hb = function(a) {
  return a.b()
};
r.u = p("goog-control");
function bh(a, b) {
  var c = a.u(), d = [c], e = a.u();
  e != c && d.push(e);
  c = b.h;
  for(e = [];c;) {
    var g = c & -c;
    e.push(dh(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.wa) && d.push.apply(d, c);
  I && !K("7") && d.push.apply(d, ch(d));
  return d
}
function ch(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  F([], function(d) {
    Za(d, pa($a, a)) && (!b || $a(d, b)) && c.push(d.join("_"))
  });
  return c
}
function dh(a, b) {
  if(!a.Xe) {
    var c = a.u();
    a.Xe = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Xe[b]
}
;function eh(a, b) {
  a || f(Error("Invalid class name " + a));
  z(b) || f(Error("Invalid decorator function " + b))
}
var fh = {};
function gh(a, b, c, d, e) {
  if(!I && (!J || !K("525"))) {
    return j
  }
  if(oc && e) {
    return ih(a)
  }
  if(e && !d) {
    return m
  }
  if(!c && (b == 17 || b == 18)) {
    return m
  }
  if(I && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(I && yc());
    case 27:
      return!J
  }
  return ih(a)
}
function ih(a) {
  if(a >= 48 && a <= 57) {
    return j
  }
  if(a >= 96 && a <= 106) {
    return j
  }
  if(a >= 65 && a <= 90) {
    return j
  }
  if(J && a == 0) {
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
;function jh(a, b) {
  a && kh(this, a, b)
}
C(jh, pd);
r = jh.prototype;
r.g = k;
r.ad = k;
r.he = k;
r.bd = k;
r.Sa = -1;
r.Ra = -1;
var lh = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, mh = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, nh = {61:187, 
59:186}, oh = I || J && K("525");
r = jh.prototype;
r.Sg = function(a) {
  if(J && (this.Sa == 17 && !a.ctrlKey || this.Sa == 18 && !a.altKey)) {
    this.Ra = this.Sa = -1
  }
  oh && !gh(a.keyCode, this.Sa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Ra = lc && a.keyCode in nh ? nh[a.keyCode] : a.keyCode
};
r.Tg = function() {
  this.Ra = this.Sa = -1
};
r.handleEvent = function(a) {
  var b = a.Ea, c, d;
  I && a.type == "keypress" ? (c = this.Ra, d = c != 13 && c != 27 ? b.keyCode : 0) : J && a.type == "keypress" ? (c = this.Ra, d = b.charCode >= 0 && b.charCode < 63232 && ih(c) ? b.charCode : 0) : kc ? (c = this.Ra, d = ih(c) ? b.keyCode : 0) : (c = b.keyCode || this.Ra, d = b.charCode || 0, oc && d == 63 && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in lh ? e = lh[c] : c == 25 && a.shiftKey && (e = 9) : g && g in mh && (e = mh[g]);
  a = e == this.Sa;
  this.Sa = e;
  b = new ph(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.f()
  }
};
r.b = o("g");
function kh(a, b, c) {
  a.bd && a.detach();
  a.g = b;
  a.ad = N(a.g, "keypress", a, c);
  a.he = N(a.g, "keydown", a.Sg, c, a);
  a.bd = N(a.g, "keyup", a.Tg, c, a)
}
r.detach = function() {
  if(this.ad) {
    id(this.ad), id(this.he), id(this.bd), this.bd = this.he = this.ad = k
  }
  this.g = k;
  this.Ra = this.Sa = -1
};
r.c = function() {
  jh.d.c.call(this);
  this.detach()
};
function ph(a, b, c, d) {
  d && this.kc(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(ph, Hc);
function W(a, b, c) {
  Sg.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ka(b);
      if(d = fh[d]) {
        break
      }
      b = b.d ? b.d.constructor : k
    }
    b = d ? z(d.Oa) ? d.Oa() : new d : k
  }
  this.m = b;
  this.ld(a)
}
C(W, Sg);
r = W.prototype;
r.fa = k;
r.h = 0;
r.ca = 39;
r.Te = 255;
r.uh = 0;
r.Ub = j;
r.wa = k;
r.be = j;
r.Cd = m;
r.jh = k;
r.hb = function() {
  return this.m.hb(this)
};
function qh(a, b) {
  if(b) {
    a.wa ? $a(a.wa, b) || a.wa.push(b) : a.wa = [b], a.m.cc(a, b, j)
  }
}
r.cc = function(a, b) {
  if(b) {
    qh(this, a)
  }else {
    if(a && this.wa) {
      bb(this.wa, a);
      if(this.wa.length == 0) {
        this.wa = k
      }
      this.m.cc(this, a, m)
    }
  }
};
r.i = function() {
  var a = this.m.i(this);
  this.g = a;
  var b = this.jh || this.m.Oc();
  b && Zg(a, b);
  this.Cd || this.m.jd(a, m);
  this.Ub || this.m.Ge(a, m)
};
r.fc = function() {
  return this.m.fc(this.b())
};
r.R = function() {
  W.d.R.call(this);
  this.m.Bf(this);
  if(this.ca & -2 && (this.be && rh(this, j), this.ca & 32)) {
    var a = this.hb();
    if(a) {
      var b = this.Gb || (this.Gb = new jh);
      kh(b, a);
      V(V(V(Wg(this), b, "key", this.wf), a, "focus", this.Qg), a, "blur", this.tf)
    }
  }
};
function rh(a, b) {
  var c = Wg(a), d = a.b();
  b ? (V(V(V(V(c, d, "mouseover", a.Wc), d, "mousedown", a.Uc), d, "mouseup", a.xf), d, "mouseout", a.Vc), I && V(c, d, "dblclick", a.vf)) : (Qg(Qg(Qg(Qg(c, d, "mouseover", a.Wc), d, "mousedown", a.Uc), d, "mouseup", a.xf), d, "mouseout", a.Vc), I && Qg(c, d, "dblclick", a.vf))
}
r.eb = function() {
  W.d.eb.call(this);
  this.Gb && this.Gb.detach();
  this.Ub && this.isEnabled() && this.m.md(this, m)
};
r.c = function() {
  W.d.c.call(this);
  this.Gb && (this.Gb.f(), delete this.Gb);
  delete this.m;
  this.wa = this.fa = k
};
r.kd = function(a) {
  this.m.kd(this.b(), a);
  this.ld(a)
};
r.ld = aa("fa");
r.of = function() {
  var a = this.fa;
  if(!a) {
    return""
  }
  if(!w(a)) {
    if(v(a)) {
      a = Xa(a, Nf).join("")
    }else {
      if(uf && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Of(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      uf || (a = a.replace(/ +/g, " "));
      a != " " && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
r.Pb = function(a) {
  W.d.Pb.call(this, a);
  var b = this.b();
  b && this.m.Pb(b, a)
};
r.jd = function(a) {
  this.Cd = a;
  var b = this.b();
  b && this.m.jd(b, a)
};
r.Ge = function(a, b) {
  if(b || this.Ub != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.m.Ge(c, a);
    this.isEnabled() && this.m.md(this, a);
    this.Ub = a;
    return j
  }
  return m
};
r.isEnabled = function() {
  return!(this.h & 1)
};
function sh(a, b) {
  th(a, 2, b) && a.ka(2, b)
}
r.ge = function() {
  return!!(this.h & 4)
};
r.setActive = function(a) {
  th(this, 4, a) && this.ka(4, a)
};
r.De = function(a) {
  th(this, 8, a) && this.ka(8, a)
};
r.ka = function(a, b) {
  if(this.ca & a && b != !!(this.h & a)) {
    this.m.ka(this, a, b), this.h = b ? this.h | a : this.h & ~a
  }
};
function X(a, b) {
  return!!(a.Te & b) && !!(a.ca & b)
}
function th(a, b, c) {
  return!!(a.ca & b) && !!(a.h & b) != c && (!(a.uh & b) || a.dispatchEvent(Ug(b, c))) && !a.va
}
r.Wc = function(a) {
  !uh(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && sh(this, j)
};
r.Vc = function(a) {
  !uh(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(m), X(this, 2) && sh(this, m))
};
function uh(a, b) {
  return!!a.relatedTarget && If(b, a.relatedTarget)
}
r.Uc = function(a) {
  if(this.isEnabled() && (X(this, 2) && sh(this, j), Jc(a) && (!J || !oc || !a.ctrlKey))) {
    X(this, 4) && this.setActive(j), this.m.Df(this) && this.hb().focus()
  }
  !this.Cd && Jc(a) && (!J || !oc || !a.ctrlKey) && a.preventDefault()
};
r.xf = function(a) {
  this.isEnabled() && (X(this, 2) && sh(this, j), this.ge() && this.lb(a) && X(this, 4) && this.setActive(m))
};
r.vf = function(a) {
  this.isEnabled() && this.lb(a)
};
r.lb = function(a) {
  if(X(this, 16)) {
    var b = !(this.h & 16);
    th(this, 16, b) && this.ka(16, b)
  }
  X(this, 8) && this.De(j);
  X(this, 64) && (b = !(this.h & 64), th(this, 64, b) && this.ka(64, b));
  b = new Ec("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, e = 0;d = c[e];e++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
r.Qg = function() {
  X(this, 32) && th(this, 32, j) && this.ka(32, j)
};
r.tf = function() {
  X(this, 4) && this.setActive(m);
  X(this, 32) && th(this, 32, m) && this.ka(32, m)
};
r.wf = function(a) {
  return this.Ub && this.isEnabled() && this.ae(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
r.ae = function(a) {
  return a.keyCode == 13 && this.lb(a)
};
z(W) || f(Error("Invalid component class " + W));
z($g) || f(Error("Invalid renderer class " + $g));
var vh = ka(W);
fh[vh] = $g;
eh("goog-control", function() {
  return new W(k)
});
function wh() {
}
C(wh, $g);
da(wh);
r = wh.prototype;
r.Oc = p("button");
r.da = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : wh.d.da.call(this, a, b, c)
};
r.i = function(a) {
  var b = wh.d.i.call(this, a), c = a.Rc();
  c && this.Fe(b, c);
  (c = a.Sc()) && this.pd(b, c);
  a.ca & 16 && this.da(b, 16, !!(a.h & 16));
  return b
};
r.Sc = u;
r.pd = u;
r.Rc = function(a) {
  return a.title
};
r.Fe = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
r.u = p("goog-button");
function xh() {
}
C(xh, wh);
da(xh);
r = xh.prototype;
r.Oc = function() {
};
r.i = function(a) {
  a.C && m != a.be && rh(a, m);
  a.be = m;
  a.Te &= -256;
  a.C && a.h & 32 && f(Error("Component already rendered"));
  a.h & 32 && a.ka(32, m);
  a.ca &= -33;
  return a.Ga().i("button", {"class":bh(this, a).join(" "), disabled:!a.isEnabled(), title:a.Rc() || "", value:a.Sc() || ""}, a.of() || "")
};
r.Bf = function(a) {
  V(Wg(a), a.b(), "click", a.lb)
};
r.jd = u;
r.Pb = u;
r.Df = function(a) {
  return a.isEnabled()
};
r.md = u;
r.ka = function(a, b, c) {
  xh.d.ka.call(this, a, b, c);
  if((a = a.b()) && b == 1) {
    a.disabled = c
  }
};
r.Sc = function(a) {
  return a.value
};
r.pd = function(a, b) {
  if(a) {
    a.value = b
  }
};
r.da = u;
function yh(a, b, c) {
  W.call(this, a, b || xh.Oa(), c)
}
C(yh, W);
r = yh.prototype;
r.Sc = o("pg");
r.pd = function(a) {
  this.pg = a;
  this.m.pd(this.b(), a)
};
r.Rc = o("kg");
r.Fe = function(a) {
  this.kg = a;
  this.m.Fe(this.b(), a)
};
r.c = function() {
  yh.d.c.call(this);
  delete this.pg;
  delete this.kg
};
r.R = function() {
  yh.d.R.call(this);
  if(this.ca & 32) {
    var a = this.hb();
    a && V(Wg(this), a, "keyup", this.ae)
  }
};
r.ae = function(a) {
  return a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup" ? this.lb(a) : a.keyCode == 32
};
eh("goog-button", function() {
  return new yh(k)
});
function zh() {
}
C(zh, wh);
da(zh);
r = zh.prototype;
r.i = function(a) {
  var b = {"class":"goog-inline-block " + bh(this, a).join(" "), title:a.Rc() || ""}, b = a.Ga().i("div", b, Ah(this, a.fa, a.Ga()));
  this.ze(a, b);
  return b
};
r.Oc = p("button");
r.ze = function(a, b) {
  a.isEnabled() || this.da(b, 1, j);
  a.h & 8 && this.da(b, 8, j);
  a.ca & 16 && this.da(b, 16, j);
  a.h & 64 && this.da(b, 64, j)
};
r.fc = function(a) {
  return a && a.firstChild.firstChild
};
function Ah(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.u() + "-outer-box"), c.i("div", "goog-inline-block " + (a.u() + "-inner-box"), b))
}
r.u = p("goog-custom-button");
function Bh(a, b, c) {
  yh.call(this, a, b || zh.Oa(), c)
}
C(Bh, yh);
eh("goog-custom-button", function() {
  return new Bh(k)
});
var Ch = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function Dh(a) {
  var b = {}, a = String(a), c = a.charAt(0) == "#" ? a : "#" + a;
  if(Eh.test(c)) {
    return b.Yc = Fh(c), b.type = "hex", b
  }else {
    a: {
      var d = a.match(Gh);
      if(d) {
        var c = Number(d[1]), e = Number(d[2]), d = Number(d[3]);
        if(c >= 0 && c <= 255 && e >= 0 && e <= 255 && d >= 0 && d <= 255) {
          c = [c, e, d];
          break a
        }
      }
      c = []
    }
    if(c.length) {
      return b.Yc = Hh(c[0], c[1], c[2]), b.type = "rgb", b
    }else {
      if(Ch && (c = Ch[a.toLowerCase()])) {
        return b.Yc = c, b.type = "named", b
      }
    }
  }
  f(Error(a + " is not a valid color string"))
}
var Ih = /#(.)(.)(.)/;
function Fh(a) {
  Eh.test(a) || f(Error("'" + a + "' is not a valid hex color"));
  a.length == 4 && (a = a.replace(Ih, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function Jh(a) {
  a = Fh(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function Hh(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || a < 0 || a > 255 || isNaN(b) || b < 0 || b > 255 || isNaN(c) || c < 0 || c > 255) && f(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = Kh(a.toString(16));
  b = Kh(b.toString(16));
  c = Kh(c.toString(16));
  return"#" + a + b + c
}
var Eh = /^#(?:[0-9a-f]{3}){1,2}$/i, Gh = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function Kh(a) {
  return a.length == 1 ? "0" + a : a
}
;var Lh;
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
      }catch(e) {
        try {
          d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = j, c = "6.0.21"
        }catch(g) {
          try {
            d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = j, c = a(d.GetVariable("$version"))
          }catch(h) {
          }
        }
      }
    }
  }
  Lh = c
})();
function Mh(a, b) {
  Sg.call(this, b);
  this.Lg = a;
  this.Rd = new Og(this);
  this.Nc = new Qb
}
C(Mh, Sg);
r = Mh.prototype;
r.a = R("goog.ui.media.FlashObject");
r.Gh = "window";
r.Ue = "#000000";
r.vg = "sameDomain";
r.ba = function(a, b) {
  this.tb = w(a) ? a : Math.round(a) + "px";
  this.ce = w(b) ? b : Math.round(b) + "px";
  this.b() && Hg(this.b() ? this.b().firstChild : k, this.tb, this.ce);
  return this
};
r.R = function() {
  Mh.d.R.call(this);
  var a = this.b(), b;
  b = I ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = I ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = sa(c, this.Gh), d = this.Nc.Ha(), e = this.Nc.Y(), g = [], h = 0;h < d.length;h++) {
    var l = ua(d[h]), n = ua(e[h]);
    g.push(l + "=" + n)
  }
  b = sa(b, Vg(this), Vg(this), "goog-ui-media-flash-object", wa(this.Lg), wa(g.join("&")), this.Ue, this.vg, c);
  a.innerHTML = b;
  this.tb && this.ce && this.ba(this.tb, this.ce);
  V(this.Rd, this.b(), Sa(Ac), Fc)
};
r.i = function() {
  this.ag != k && !(Da(Lh, this.ag) >= 0) && (O(this.a, "Required flash version not found:" + this.ag), f(Error("Method not supported")));
  var a = this.Ga().createElement("div");
  a.className = "goog-ui-media-flash";
  this.g = a
};
r.c = function() {
  Mh.d.c.call(this);
  this.Nc = k;
  this.Rd.f();
  this.Rd = k
};
function Nh(a) {
  qa.call(this, a)
}
C(Nh, qa);
Nh.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function Oh(a, b, c) {
  function d() {
    e && delete t.__loadFlashObject_callbacks[e]
  }
  var e;
  if(lc && !K("1.8.1.20")) {
    return Fd(new Nh("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(Da(Lh, "9") >= 0)) {
    return b = Lh, Fd(new Nh("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  e = "_" + Ld();
  var h = new td(d);
  t.__loadFlashObject_callbacks[e] = function() {
    a.setTimeout(function() {
      d();
      zd(h, U(g))
    }, 0)
  };
  b.Nc.set("onloadcallback", '__loadFlashObject_callbacks["' + e + '"]()');
  g = Vg(b);
  Xg(b, c);
  return h
}
function Ph(a, b, c) {
  var d = Oh(a, b, c), e = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  Cd(d, function(b) {
    a.clearTimeout(e);
    return b
  });
  return d
}
;function Qh() {
  if(lc) {
    this.bb = {}, this.yd = {}, this.sd = []
  }
}
Qh.prototype.a = R("goog.net.xhrMonitor");
Qh.prototype.Kc = lc;
function Rh(a) {
  var b = Sh;
  if(b.Kc) {
    var c = w(a) ? a : ia(a) ? ka(a) : "";
    Q(b.a, "Pushing context: " + a + " (" + c + ")");
    b.sd.push(c)
  }
}
function Th() {
  var a = Sh;
  if(a.Kc) {
    var b = a.sd.pop();
    Q(a.a, "Popping context: " + b);
    Uh(a, b)
  }
}
function Vh(a) {
  var b = Sh;
  if(b.Kc) {
    a = ka(a);
    P(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.sd.length;c++) {
      var d = b.sd[c];
      Wh(b.bb, d, a);
      Wh(b.yd, a, d)
    }
  }
}
function Uh(a, b) {
  var c = a.yd[b], d = a.bb[b];
  c && d && (Q(a.a, "Updating dependent contexts"), F(c, function(a) {
    F(d, function(b) {
      Wh(this.bb, a, b);
      Wh(this.yd, b, a)
    }, this)
  }, a))
}
function Wh(a, b, c) {
  a[b] || (a[b] = []);
  $a(a[b], c) || a[b].push(c)
}
var Sh = new Qh;
function Xh() {
}
Xh.prototype.Ve = k;
function Yh(a) {
  var b;
  if(!(b = a.Ve)) {
    b = {}, Zh(a) && (b[0] = j, b[1] = j), b = a.Ve = b
  }
  return b
}
;var $h;
function ai() {
}
C(ai, Xh);
function bi(a) {
  return(a = Zh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
ai.prototype.de = k;
function Zh(a) {
  if(!a.de && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.de = d
      }catch(e) {
      }
    }
    f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.de
}
$h = new ai;
function ci(a) {
  this.headers = new Qb;
  this.zd = a || k
}
C(ci, pd);
ci.prototype.a = R("goog.net.XhrIo");
var di = /^https?:?$/i;
r = ci.prototype;
r.Ka = m;
r.j = k;
r.xd = k;
r.oc = "";
r.Ff = "";
r.lc = 0;
r.mc = "";
r.Qd = m;
r.Zc = m;
r.ee = m;
r.kb = m;
r.td = 0;
r.rb = k;
r.bg = "";
r.Fh = m;
r.send = function(a, b, c, d) {
  this.j && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.oc = a;
  this.mc = "";
  this.lc = 0;
  this.Ff = b;
  this.Qd = m;
  this.Ka = j;
  this.j = this.zd ? bi(this.zd) : bi($h);
  this.xd = this.zd ? Yh(this.zd) : Yh($h);
  Vh(this.j);
  this.j.onreadystatechange = A(this.Tf, this);
  try {
    P(this.a, ei(this, "Opening Xhr")), this.ee = j, this.j.open(b, a, j), this.ee = m
  }catch(e) {
    P(this.a, ei(this, "Error opening Xhr: " + e.message));
    fi(this, e);
    return
  }
  var a = c || "", g = this.headers.A();
  d && Ob(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.ea("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Ob(g, function(a, b) {
    this.j.setRequestHeader(b, a)
  }, this);
  if(this.bg) {
    this.j.responseType = this.bg
  }
  if("withCredentials" in this.j) {
    this.j.withCredentials = this.Fh
  }
  try {
    if(this.rb) {
      rd.clearTimeout(this.rb), this.rb = k
    }
    if(this.td > 0) {
      P(this.a, ei(this, "Will abort after " + this.td + "ms if incomplete")), this.rb = rd.setTimeout(A(this.Bh, this), this.td)
    }
    P(this.a, ei(this, "Sending request"));
    this.Zc = j;
    this.j.send(a);
    this.Zc = m
  }catch(h) {
    P(this.a, ei(this, "Send error: " + h.message)), fi(this, h)
  }
};
r.dispatchEvent = function(a) {
  if(this.j) {
    Rh(this.j);
    try {
      return ci.d.dispatchEvent.call(this, a)
    }finally {
      Th()
    }
  }else {
    return ci.d.dispatchEvent.call(this, a)
  }
};
r.Bh = function() {
  if(typeof ba != "undefined" && this.j) {
    this.mc = "Timed out after " + this.td + "ms, aborting", this.lc = 8, P(this.a, ei(this, this.mc)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function fi(a, b) {
  a.Ka = m;
  if(a.j) {
    a.kb = j, a.j.abort(), a.kb = m
  }
  a.mc = b;
  a.lc = 5;
  gi(a);
  hi(a)
}
function gi(a) {
  if(!a.Qd) {
    a.Qd = j, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
r.abort = function(a) {
  if(this.j && this.Ka) {
    P(this.a, ei(this, "Aborting")), this.Ka = m, this.kb = j, this.j.abort(), this.kb = m, this.lc = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), hi(this)
  }
};
r.c = function() {
  if(this.j) {
    if(this.Ka) {
      this.Ka = m, this.kb = j, this.j.abort(), this.kb = m
    }
    hi(this, j)
  }
  ci.d.c.call(this)
};
r.Tf = function() {
  !this.ee && !this.Zc && !this.kb ? this.gh() : ii(this)
};
r.gh = function() {
  ii(this)
};
function ii(a) {
  if(a.Ka && typeof ba != "undefined") {
    if(a.xd[1] && a.Pa() == 4 && ji(a) == 2) {
      P(a.a, ei(a, "Local request error detected and ignored"))
    }else {
      if(a.Zc && a.Pa() == 4) {
        rd.setTimeout(A(a.Tf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.Pa() == 4) {
          P(a.a, ei(a, "Request complete"));
          a.Ka = m;
          var b;
          a: {
            switch(ji(a)) {
              case 0:
                b = w(a.oc) ? a.oc.match(Se)[1] || k : a.oc.sa;
                b = !(b ? di.test(b) : self.location ? di.test(self.location.protocol) : 1);
                break a;
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
                b = j;
                break a;
              default:
                b = m
            }
          }
          if(b) {
            a.dispatchEvent("complete"), a.dispatchEvent("success")
          }else {
            a.lc = 6;
            var c;
            try {
              c = a.Pa() > 2 ? a.j.statusText : ""
            }catch(d) {
              P(a.a, "Can not get status: " + d.message), c = ""
            }
            a.mc = c + " [" + ji(a) + "]";
            gi(a)
          }
          hi(a)
        }
      }
    }
  }
}
function hi(a, b) {
  if(a.j) {
    var c = a.j, d = a.xd[0] ? u : k;
    a.j = k;
    a.xd = k;
    if(a.rb) {
      rd.clearTimeout(a.rb), a.rb = k
    }
    b || (Rh(c), a.dispatchEvent("ready"), Th());
    var e = Sh;
    if(e.Kc) {
      var g = ka(c);
      P(e.a, "Closing XHR : " + g);
      delete e.yd[g];
      for(var h in e.bb) {
        bb(e.bb[h], g), e.bb[h].length == 0 && delete e.bb[h]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(l) {
      le(a.a, "Problem encountered resetting onreadystatechange: " + l.message)
    }
  }
}
r.ge = function() {
  return!!this.j
};
r.Pa = function() {
  return this.j ? this.j.readyState : 0
};
function ji(a) {
  try {
    return a.Pa() > 2 ? a.j.status : -1
  }catch(b) {
    return O(a.a, "Can not get status: " + b.message), -1
  }
}
r.getResponseHeader = function(a) {
  return this.j && this.Pa() == 4 ? this.j.getResponseHeader(a) : i
};
function ei(a, b) {
  return b + " [" + a.Ff + " " + a.oc + " " + ji(a) + "]"
}
;var ki = !(I || J && !K("420+"));
function li(a, b) {
  this.ud = a;
  this.qa = b
}
C(li, L);
r = li.prototype;
r.q = k;
r.Xa = -1;
r.sf = m;
r.yf = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function mi(a) {
  var b = $f(a.df), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.qa, c, b), b != 1 && a.f()) : a.f()
}
r.Vg = function() {
  mi(this);
  if(!this.va) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.qa);
    this.f()
  }
};
r.mh = function() {
  var a = t.parent;
  if(a) {
    this.Xa = this.q.Pa();
    if(this.Xa >= 2 && !this.sf) {
      for(var b = new Qb, c = this.yf.length;c--;) {
        var d = this.yf[c];
        try {
          b.set(d, this.q.j.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.W() && (this.sf = j, a.__XHRMaster_ongotheaders(this.qa, Ub(b)), this.va)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.qa, this.Xa);
    ki && this.Xa == 3 && mi(this)
  }else {
    this.f()
  }
};
r.me = function(a, b, c) {
  this.q = new ci;
  N(this.q, "readystatechange", A(this.mh, this));
  N(this.q, "complete", A(this.Vg, this));
  this.q.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.df = new Zf(this.q.j, 1048576)
};
r.c = function() {
  li.d.c.call(this);
  delete this.df;
  this.q && this.q.f();
  delete this.ud.zc[this.qa];
  delete this.ud
};
function ni() {
  this.zc = {}
}
C(ni, L);
ni.prototype.ah = function(a, b, c, d) {
  var e = new li(this, a);
  this.zc[a] = e;
  e.me(b, c, d)
};
ni.prototype.Gg = function(a) {
  (a = this.zc[a]) && a.f()
};
ni.prototype.c = function() {
  ni.d.c.call(this);
  for(var a = Sa(this.zc);a.length;) {
    a.pop().f()
  }
  delete this.zc
};
var oi = new ni;
t.__XHRSlave_makeRequest = A(oi.ah, oi);
t.__XHRSlave_dispose = A(oi.Gg, oi);
function pi(a) {
  this.B = a
}
var qi = /\s*;\s*/;
r = pi.prototype;
r.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && J) {
    var b = "COOKIES_TEST_" + B();
    ri.set(b, "1");
    if(!this.get(b)) {
      return m
    }
    this.remove(b)
  }
  return a
};
r.set = function(a, b, c, d, e, g) {
  /[;=\s]/.test(a) && f(Error('Invalid cookie name "' + a + '"'));
  /[;\r\n]/.test(b) && f(Error('Invalid cookie value "' + b + '"'));
  fa(c) || (c = -1);
  e = e ? ";domain=" + e : "";
  d = d ? ";path=" + d : "";
  g = g ? ";secure" : "";
  c = c < 0 ? "" : c == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(B() + c * 1E3)).toUTCString();
  this.B.cookie = a + "=" + b + e + d + c + g
};
r.get = function(a, b) {
  for(var c = a + "=", d = (this.B.cookie || "").split(qi), e = 0, g;g = d[e];e++) {
    if(g.indexOf(c) == 0) {
      return g.substr(c.length)
    }
  }
  return b
};
r.remove = function(a, b, c) {
  var d = this.ea(a);
  this.set(a, "", 0, b, c);
  return d
};
r.Ha = function() {
  return si(this).keys
};
r.Y = function() {
  return si(this).qg
};
r.Qa = function() {
  return!this.B.cookie
};
r.W = function() {
  return!this.B.cookie ? 0 : (this.B.cookie || "").split(qi).length
};
r.ea = function(a) {
  return fa(this.get(a))
};
r.Ic = function(a) {
  for(var b = si(this).qg, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return j
    }
  }
  return m
};
r.clear = function() {
  for(var a = si(this).keys, b = a.length - 1;b >= 0;b--) {
    this.remove(a[b])
  }
};
function si(a) {
  for(var a = (a.B.cookie || "").split(qi), b = [], c = [], d, e, g = 0;e = a[g];g++) {
    d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)))
  }
  return{keys:b, qg:c}
}
var ri = new pi(document);
ri.ni = 3950;
function ti() {
}
ti.prototype.pf = function() {
  return Boolean(Number((new Ue(document.location)).U.get("httpStreaming", "0"))) ? 2 : 1
};
function ui(a) {
  var b = new Mh("/compiled_client/FlashConnector.swf?cb=2ae8d8a79afe8f3a96bb49e8a9339914");
  b.Ue = "#777777";
  b.ba(300, 30);
  var c = U("FlashConnectorSwf");
  c || f(Error("no FlashConnectorSwf?"));
  return Ph(a.O, b, c)
}
function vi(a, b, c) {
  var d = new Ue(document.location);
  if(c) {
    var e = d.na, d = ui(a);
    Ad(d, function(b) {
      b = new we(a, b);
      return new fg(e, 843, b)
    });
    return d
  }else {
    return b ? (b = t.__demo_shared_domain, d = d.A(), Xe(d, "_____random_____." + b)) : d = d.A(), d.qb("/httpface/"), Ze(d, "", i), d = new gg(d.toString().replace("_____random_____", "%random%")), Ed(d)
  }
}
function wi() {
  var a = xi, b = (new Ue(document.location)).U, c = b.get("mode") != "http", b = Boolean(Number(b.get("useSub", "1")));
  return vi(a, b, c)
}
;function yi() {
  this.Zf = B()
}
var zi = new yi;
yi.prototype.set = aa("Zf");
yi.prototype.reset = function() {
  this.set(B())
};
yi.prototype.get = o("Zf");
function Ai(a) {
  this.kh = a || "";
  this.th = zi
}
Ai.prototype.gg = j;
Ai.prototype.rh = j;
Ai.prototype.qh = j;
Ai.prototype.hg = m;
function Bi(a) {
  return a < 10 ? "0" + a : String(a)
}
function Ci(a, b) {
  var c = (a.jg - b) / 1E3, d = c.toFixed(3), e = 0;
  if(c < 1) {
    e = 2
  }else {
    for(;c < 100;) {
      e++, c *= 10
    }
  }
  for(;e-- > 0;) {
    d = " " + d
  }
  return d
}
function Di(a) {
  Ai.call(this, a)
}
C(Di, Ai);
Di.prototype.hg = j;
function Ei(a) {
  this.lh = A(this.ug, this);
  this.mf = new Di;
  this.Cf = this.mf.gg = m;
  this.g = a;
  this.Ig = this.g.ownerDocument || this.g.document;
  var a = vf(this.g), b = k;
  if(I) {
    b = a.B.createStyleSheet(), Lg(b)
  }else {
    var c = yf(a.B, "head", i, i)[0];
    c || (b = yf(a.B, "body", i, i)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    Lg(b);
    a.appendChild(c, b)
  }
  this.g.className += " logdiv"
}
Ei.prototype.ug = function(a) {
  var b = this.g.scrollHeight - this.g.scrollTop - this.g.clientHeight <= 100, c = this.Ig.createElement("div");
  c.className = "logmsg";
  var d = this.mf, e;
  switch(a.Jb.value) {
    case ce.value:
      e = "dbg-sh";
      break;
    case de.value:
      e = "dbg-sev";
      break;
    case ee.value:
      e = "dbg-w";
      break;
    case fe.value:
      e = "dbg-i";
      break;
    default:
      e = "dbg-f"
  }
  var g = [];
  g.push(d.kh, " ");
  if(d.gg) {
    var h = new Date(a.jg);
    g.push("[", Bi(h.getFullYear() - 2E3) + Bi(h.getMonth() + 1) + Bi(h.getDate()) + " " + Bi(h.getHours()) + ":" + Bi(h.getMinutes()) + ":" + Bi(h.getSeconds()) + "." + Bi(Math.floor(h.getMilliseconds() / 10)), "] ")
  }
  d.rh && g.push("[", Ca(Ci(a, d.th.get())), "s] ");
  d.qh && g.push("[", wa(a.$g), "] ");
  g.push('<span class="', e, '">', va(Ca(wa(a.Of))));
  d.hg && a.Td && g.push("<br>", va(Ca(a.Sd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.g.appendChild(c);
  if(b) {
    this.g.scrollTop = this.g.scrollHeight
  }
};
Ei.prototype.clear = function() {
  this.g.innerHTML = ""
};
function Fi(a, b, c, d, e, g) {
  arguments.length == 6 ? this.setTransform(a, b, c, d, e, g) : arguments.length != 0 ? f(Error("Insufficient matrix parameters")) : (this.Z = this.aa = 1, this.T = this.$ = this.ia = this.ja = 0)
}
r = Fi.prototype;
r.A = function() {
  return new Fi(this.Z, this.T, this.$, this.aa, this.ia, this.ja)
};
r.setTransform = function(a, b, c, d, e, g) {
  (!ja(a) || !ja(b) || !ja(c) || !ja(d) || !ja(e) || !ja(g)) && f(Error("Invalid transform parameters"));
  this.Z = a;
  this.T = b;
  this.$ = c;
  this.aa = d;
  this.ia = e;
  this.ja = g;
  return this
};
r.$e = function(a) {
  this.Z = a.Z;
  this.T = a.T;
  this.$ = a.$;
  this.aa = a.aa;
  this.ia = a.ia;
  this.ja = a.ja;
  return this
};
r.scale = function(a, b) {
  this.Z *= a;
  this.T *= a;
  this.$ *= b;
  this.aa *= b;
  return this
};
r.translate = function(a, b) {
  this.ia += a * this.Z + b * this.$;
  this.ja += a * this.T + b * this.aa;
  return this
};
r.rotate = function(a, b, c) {
  var d = new Fi, e = Math.cos(a), a = Math.sin(a), b = d.setTransform(e, a, -a, e, b - b * e + c * a, c - b * a - c * e), c = this.Z, d = this.$;
  this.Z = b.Z * c + b.T * d;
  this.$ = b.$ * c + b.aa * d;
  this.ia += b.ia * c + b.ja * d;
  c = this.T;
  d = this.aa;
  this.T = b.Z * c + b.T * d;
  this.aa = b.$ * c + b.aa * d;
  this.ja += b.ia * c + b.ja * d;
  return this
};
r.toString = function() {
  return"matrix(" + [this.Z, this.T, this.$, this.aa, this.ia, this.ja].join(",") + ")"
};
r.n = function(a) {
  return this == a ? j : !a ? m : this.Z == a.Z && this.$ == a.$ && this.ia == a.ia && this.T == a.T && this.aa == a.aa && this.ja == a.ja
};
function Y(a, b) {
  this.g = a;
  this.xa = b;
  this.Md = m
}
C(Y, pd);
r = Y.prototype;
r.xa = k;
r.g = k;
r.lg = k;
r.b = o("g");
r.addEventListener = function(a, b, c, d) {
  N(this.g, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  gd(this.g, a, b, c, d)
};
r.c = function() {
  Y.d.c.call(this);
  kd(this.g)
};
function Z(a, b, c, d) {
  Y.call(this, a, b);
  this.Me = c;
  this.xa.Be(this, c);
  this.fill = d;
  this.xa.Ae(this, d)
}
C(Z, Y);
Z.prototype.fill = k;
Z.prototype.Me = k;
Z.prototype.Ng = o("fill");
Z.prototype.Pg = o("Me");
function Gi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(Gi, Z);
function Hi(a, b) {
  Y.call(this, a, b)
}
C(Hi, Y);
function Ii(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(Ii, Z);
function Ji(a, b) {
  Y.call(this, a, b)
}
C(Ji, Y);
function Ki(a, b) {
  Y.call(this, a, b)
}
C(Ki, Hi);
Ki.prototype.clear = function() {
  Gf(this.b())
};
Ki.prototype.ba = function(a, b) {
  Li(this.b(), {width:a, height:b})
};
function Mi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(Mi, Ii);
function Ni(a, b) {
  Y.call(this, a, b)
}
C(Ni, Ji);
Ni.prototype.ba = function(a, b) {
  Li(this.b(), {width:a, height:b})
};
function Oi() {
}
;function Pi(a, b) {
  this.Hd = a;
  this.pc = b || 1
}
C(Pi, Oi);
Pi.prototype.ha = o("Hd");
function Qi(a, b) {
  this.tb = a;
  this.Hd = b
}
Qi.prototype.ha = o("Hd");
function Ri() {
  this.G = [];
  this.e = [];
  this.Aa = []
}
Ri.prototype.xb = k;
Ri.prototype.V = k;
Ri.prototype.Qb = j;
var Si = [2, 2, 6, 6, 0];
r = Ri.prototype;
r.clear = function() {
  this.G.length = 0;
  this.e.length = 0;
  this.Aa.length = 0;
  delete this.xb;
  delete this.V;
  delete this.Qb;
  return this
};
r.moveTo = function(a, b) {
  this.G[this.G.length - 1] == 0 ? this.Aa.length -= 2 : (this.G.push(0), this.e.push(1));
  this.Aa.push(a, b);
  this.V = this.xb = [a, b];
  return this
};
r.lineTo = function(a) {
  var b = this.G[this.G.length - 1];
  b == k && f(Error("Path cannot start with lineTo"));
  b != 1 && (this.G.push(1), this.e.push(0));
  for(b = 0;b < arguments.length;b += 2) {
    var c = arguments[b], d = arguments[b + 1];
    this.Aa.push(c, d)
  }
  this.e[this.e.length - 1] += b / 2;
  this.V = [c, d];
  return this
};
r.cf = function(a) {
  var b = this.G[this.G.length - 1];
  b == k && f(Error("Path cannot start with curve"));
  b != 2 && (this.G.push(2), this.e.push(0));
  for(b = 0;b < arguments.length;b += 6) {
    var c = arguments[b + 4], d = arguments[b + 5];
    this.Aa.push(arguments[b], arguments[b + 1], arguments[b + 2], arguments[b + 3], c, d)
  }
  this.e[this.e.length - 1] += b / 6;
  this.V = [c, d];
  return this
};
r.close = function() {
  var a = this.G[this.G.length - 1];
  a == k && f(Error("Path cannot start with close"));
  if(a != 4) {
    this.G.push(4), this.e.push(1), this.V = this.xb
  }
  return this
};
r.arcTo = function(a, b, c, d) {
  var e = this.V[0] - a * Math.cos(ze(c)) + a * Math.cos(ze(c + d)), g = this.V[1] - b * Math.sin(ze(c)) + b * Math.sin(ze(c + d));
  this.G.push(3);
  this.e.push(1);
  this.Aa.push(a, b, c, d, e, g);
  this.Qb = m;
  this.V = [e, g];
  return this
};
r.wg = function(a, b, c, d) {
  var e = this.V[0] - a * Math.cos(ze(c)), g = this.V[1] - b * Math.sin(ze(c)), h = ze(d), d = Math.ceil(Math.abs(h) / Math.PI * 2);
  h /= d;
  for(var c = ze(c), l = 0;l < d;l++) {
    var n = Math.cos(c), q = Math.sin(c), x = 4 / 3 * Math.sin(h / 2) / (1 + Math.cos(h / 2)), s = e + (n - x * q) * a, y = g + (q + x * n) * b;
    c += h;
    n = Math.cos(c);
    q = Math.sin(c);
    this.cf(s, y, e + (n + x * q) * a, g + (q - x * n) * b, e + n * a, g + q * b)
  }
  return this
};
function Ti(a, b) {
  for(var c = a.Aa, d = 0, e = 0, g = a.G.length;e < g;e++) {
    var h = a.G[e], l = Si[h] * a.e[e];
    b(h, c.slice(d, d + l));
    d += l
  }
}
r.A = function() {
  var a = new this.constructor;
  a.G = this.G.concat();
  a.e = this.e.concat();
  a.Aa = this.Aa.concat();
  a.xb = this.xb && this.xb.concat();
  a.V = this.V && this.V.concat();
  a.Qb = this.Qb;
  return a
};
var Ui = {};
Ui[0] = Ri.prototype.moveTo;
Ui[1] = Ri.prototype.lineTo;
Ui[4] = Ri.prototype.close;
Ui[2] = Ri.prototype.cf;
Ui[3] = Ri.prototype.wg;
function Vi(a) {
  if(a.Qb) {
    return a.A()
  }
  var b = new Ri;
  Ti(a, function(a, d) {
    Ui[a].apply(b, d)
  });
  return b
}
Ri.prototype.Qa = function() {
  return this.G.length == 0
};
function Wi(a, b, c, d, e) {
  Sg.call(this, e);
  this.width = a;
  this.height = b;
  this.la = c || k;
  this.$b = d || k
}
C(Wi, Sg);
r = Wi.prototype;
r.J = k;
r.La = 0;
r.cb = 0;
r.rf = function() {
  return this.X()
};
r.X = function() {
  return this.C ? Jg(this.b()) : ja(this.width) && ja(this.height) ? new T(this.width, this.height) : k
};
function Xi(a) {
  var b = a.X();
  return b ? b.width / (a.la ? new T(a.la, a.$b) : a.X()).width : 0
}
;function Yi(a, b, c, d, e) {
  Wi.call(this, a, b, c, d, e);
  this.ff = {};
  this.Qe = J && !K(526);
  this.ib = new Og(this)
}
var Zi;
C(Yi, Wi);
function $i(a, b, c) {
  a = a.ma.B.createElementNS("http://www.w3.org/2000/svg", b);
  c && Li(a, c);
  return a
}
function Li(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
r = Yi.prototype;
r.vb = function(a, b) {
  (b || this.J).b().appendChild(a.b())
};
r.Ae = function(a, b) {
  var c = a.b();
  b instanceof Pi ? (c.setAttribute("fill", b.ha()), c.setAttribute("fill-opacity", b.pc)) : c.setAttribute("fill", "none")
};
r.Be = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.ha());
    var d = b.tb;
    w(d) && d.indexOf("px") != -1 ? c.setAttribute("stroke-width", parseFloat(d) / Xi(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
r.i = function() {
  var a = $i(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = $i(this, "g");
  this.Od = $i(this, "defs");
  this.J = new Ki(b, this);
  a.appendChild(this.Od);
  a.appendChild(b);
  this.g = a;
  if(this.la || this.La || this.cb) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.Qe ? this.vd() : this.b().setAttribute("viewBox", this.La + " " + this.cb + " " + (this.la ? this.la + " " + this.$b : ""))
  }
};
r.vd = function() {
  if(this.C && (this.la || this.La || !this.cb)) {
    var a = this.X();
    if(a.width == 0) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.La, c = -this.cb, d = a.width / this.la, a = a.height / this.$b;
      this.J.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
r.ba = function(a, b) {
  Hg(this.b(), a, b)
};
r.X = function() {
  if(!lc) {
    return this.C ? Jg(this.b()) : Yi.d.X.call(this)
  }
  var a = this.width, b = this.height, c = w(a) && a.indexOf("%") != -1, d = w(b) && b.indexOf("%") != -1;
  if(!this.C && (c || d)) {
    return k
  }
  var e, g;
  if(c) {
    e = this.b().parentNode, g = Jg(e), a = parseFloat(a) * g.width / 100
  }
  d && (e = e || this.b().parentNode, g = g || Jg(e), b = parseFloat(b) * g.height / 100);
  return new T(a, b)
};
r.clear = function() {
  this.J.clear();
  Gf(this.Od);
  this.ff = {}
};
r.Jc = function(a, b, c, d, e, g, h) {
  a = $i(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  e = new Mi(a, this, e, g);
  this.vb(e, h);
  return e
};
r.drawImage = function(a, b, c, d, e, g) {
  a = $i(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", e);
  e = new Ni(a, this);
  this.vb(e, g);
  return e
};
r.R = function() {
  var a = this.X();
  Yi.d.R.call(this);
  a || this.dispatchEvent("resize");
  if(this.Qe) {
    var a = this.width, b = this.height;
    typeof a == "string" && a.indexOf("%") != -1 && typeof b == "string" && b.indexOf("%") != -1 && V(this.ib, aj(), sd, this.vd);
    this.vd()
  }
};
r.eb = function() {
  Yi.d.eb.call(this);
  this.Qe && Qg(this.ib, aj(), sd, this.vd)
};
r.c = function() {
  delete this.ff;
  delete this.Od;
  delete this.J;
  Yi.d.c.call(this)
};
function aj() {
  Zi || (Zi = new qd(400), Zi.start());
  return Zi
}
;function bj() {
  return this.g = this.xa.ma.b(this.S) || this.g
}
function cj(a, b) {
  this.S = a.id;
  Y.call(this, a, b)
}
C(cj, Hi);
cj.prototype.b = bj;
cj.prototype.clear = function() {
  Gf(this.b())
};
cj.prototype.ba = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  if(this.xa.J != this) {
    c.coordorigin = "0 0"
  }
};
function dj(a, b, c, d, e, g, h, l) {
  this.S = a.id;
  Z.call(this, a, b, h, l);
  this.Mi = c;
  this.Ni = d;
  this.cj = e;
  this.dj = g
}
C(dj, Ii);
dj.prototype.b = bj;
function ej(a, b) {
  this.S = a.id;
  Y.call(this, a, b)
}
C(ej, Ji);
ej.prototype.b = bj;
ej.prototype.ba = function(a, b) {
  var c = this.b().style;
  c.width = fj(a) + "px";
  c.height = fj(b) + "px"
};
function gj(a, b, c, d, e) {
  Wi.call(this, a, b, c, d, e);
  this.ib = new Og(this)
}
C(gj, Wi);
var hj = document.documentMode && document.documentMode >= 8;
function fj(a) {
  return Math.round((parseFloat(a.toString()) - 0.5) * 100)
}
function $(a) {
  return Math.round(parseFloat(a.toString()) * 100)
}
function ij(a, b) {
  var c = a.ma.createElement("g_vml_:" + b);
  c.id = "goog_" + Fa++;
  return c
}
function jj(a) {
  if(hj && a.C) {
    a.b().innerHTML = a.b().innerHTML
  }
}
gj.prototype.vb = function(a, b) {
  (b || this.J).b().appendChild(a.b());
  jj(this)
};
gj.prototype.Ae = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var e = c.childNodes[d];
    e.tagName == "fill" && c.removeChild(e)
  }
  b instanceof Pi ? b.ha() == "transparent" ? c.filled = m : b.pc != 1 ? (c.filled = j, d = ij(this, "fill"), d.opacity = Math.round(b.pc * 100) + "%", d.color = b.ha(), c.appendChild(d)) : (c.filled = j, c.fillcolor = b.ha()) : c.filled = m;
  jj(this)
};
gj.prototype.Be = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = j;
    var d = b.tb;
    w(d) && d.indexOf("px") == -1 ? d = parseFloat(d) : d *= Xi(this);
    var e = c.getElementsByTagName("stroke")[0];
    d < 1 ? (e = e || ij(this, "stroke"), e.opacity = d, e.ej = "1px", e.color = b.ha(), c.appendChild(e)) : (e && c.removeChild(e), c.strokecolor = b.ha(), c.strokeweight = d + "px")
  }else {
    c.stroked = m
  }
  jj(this)
};
function kj(a, b, c, d, e) {
  var g = a.style;
  g.position = "absolute";
  g.left = fj(b) + "px";
  g.top = fj(c) + "px";
  g.width = $(d) + "px";
  g.height = $(e) + "px";
  if(a.tagName == "shape") {
    a.coordsize = $(d) + " " + $(e)
  }
}
try {
  eval("document.namespaces")
}catch(lj) {
}
r = gj.prototype;
r.i = function() {
  var a = this.ma.B;
  if(!a.namespaces.g_vml_) {
    hj ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}"
  }
  var a = this.width, b = this.height, c = this.ma.i("div", {style:"overflow:hidden;position:relative;width:" + (w(a) && ra(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (w(b) && ra(b) ? b : parseFloat(b.toString()) + "px")});
  this.g = c;
  var d = ij(this, "group"), e = d.style;
  e.position = "absolute";
  e.left = e.top = 0;
  e.width = this.width;
  e.height = this.height;
  d.coordsize = this.la ? $(this.la) + " " + $(this.$b) : $(a) + " " + $(b);
  d.coordorigin = fa(this.La) ? $(this.La) + " " + $(this.cb) : "0 0";
  c.appendChild(d);
  this.J = new cj(d, this);
  N(c, "resize", A(this.$d, this))
};
r.$d = function() {
  var a = Jg(this.b()), b = this.J.b().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.b();a && a.currentStyle && a.currentStyle.display != "none";) {
      a = a.parentNode
    }
    a && a.currentStyle && V(this.ib, a, "propertychange", this.$d)
  }
  this.dispatchEvent("resize")
};
r.ba = function(a, b) {
  Hg(this.b(), a, b)
};
r.X = function() {
  var a = this.b();
  return new T(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
r.clear = function() {
  this.J.clear()
};
r.Jc = function(a, b, c, d, e, g, h) {
  var l = ij(this, "oval");
  kj(l, a - c, b - d, c * 2, d * 2);
  a = new dj(l, this, a, b, c, d, e, g);
  this.vb(a, h);
  return a
};
r.drawImage = function(a, b, c, d, e, g) {
  var h = ij(this, "image");
  kj(h, a, b, c, d);
  hj ? h.src = e : h.setAttribute("src", e);
  a = new ej(h, this);
  this.vb(a, g);
  return a
};
r.R = function() {
  gj.d.R.call(this);
  this.$d();
  jj(this)
};
r.c = function() {
  this.J = k;
  gj.d.c.call(this)
};
function mj(a) {
  Y.call(this, k, a);
  this.P = []
}
C(mj, Hi);
mj.prototype.clear = function() {
  if(this.P.length) {
    this.P.length = 0, nj(this.xa)
  }
};
mj.prototype.ba = function() {
};
mj.prototype.appendChild = function(a) {
  this.P.push(a)
};
mj.prototype.Ca = function() {
  for(var a = 0, b = this.P.length;a < b;a++) {
    oj(this.xa, this.P[a])
  }
};
function pj(a, b, c, d, e, g, h, l) {
  Z.call(this, a, b, h, l);
  this.Bg = c;
  this.Cg = d;
  this.cg = e;
  this.dg = g;
  this.z = new Ri;
  this.z.clear();
  this.z.moveTo(this.Bg + this.cg * Math.cos(ze(0)), this.Cg + this.dg * Math.sin(ze(0)));
  this.z.arcTo(this.cg, this.dg, 0, 360);
  this.z.close();
  this.hh = new qj(k, b, this.z, h, l)
}
C(pj, Ii);
pj.prototype.Ca = function(a) {
  this.hh.Ca(a)
};
function qj(a, b, c, d, e) {
  Z.call(this, a, b, d, e);
  this.qb(c)
}
C(qj, Gi);
qj.prototype.bc = m;
qj.prototype.qb = function(a) {
  this.z = a.Qb ? a : Vi(a);
  this.bc && nj(this.xa)
};
qj.prototype.Ca = function(a) {
  this.bc = j;
  a.beginPath();
  Ti(this.z, function(b, c) {
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
        f(Error("Canvas paths cannot contain arcs"));
      case 4:
        a.closePath()
    }
  })
};
function rj(a, b, c, d, e, g, h) {
  Y.call(this, a, b);
  this.Ih = c;
  this.Kh = d;
  this.Se = e;
  this.Zd = g;
  this.sh = h
}
C(rj, Ji);
rj.prototype.bc = m;
rj.prototype.ba = function(a, b) {
  this.Se = a;
  this.Zd = b;
  this.bc && nj(this.xa)
};
rj.prototype.Ca = function(a) {
  this.Af ? (this.Se && this.Zd && a.drawImage(this.Af, this.Ih, this.Kh, this.Se, this.Zd), this.bc = j) : (a = new Image, a.onload = A(this.Rg, this, a), a.src = this.sh)
};
rj.prototype.Rg = function(a) {
  this.Af = a;
  nj(this.xa)
};
function sj(a, b, c, d, e) {
  Wi.call(this, a, b, c, d, e)
}
C(sj, Wi);
r = sj.prototype;
r.Ae = function() {
  nj(this)
};
r.Be = function() {
  nj(this)
};
function tj(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.lg ? b.lg.A() : new Fi, e = d.ia, g = d.ja;
  (e || g) && c.translate(e, g);
  (d = d.T) && c.rotate(Math.asin(d))
}
r.i = function() {
  var a = this.ma.i("div", {style:"position:relative;overflow:hidden"});
  this.g = a;
  this.Yb = this.ma.i("canvas");
  a.appendChild(this.Yb);
  this.Zg = this.J = new mj(this);
  this.nh = 0;
  uj(this)
};
r.getContext = function() {
  this.b() || this.i();
  if(!this.yb) {
    this.yb = this.Yb.getContext("2d"), this.yb.save()
  }
  return this.yb
};
r.ba = function(a, b) {
  this.width = a;
  this.height = b;
  uj(this);
  nj(this)
};
r.X = function() {
  var a = this.width, b = this.height, c = w(a) && a.indexOf("%") != -1, d = w(b) && b.indexOf("%") != -1;
  if(!this.C && (c || d)) {
    return k
  }
  var e, g;
  if(c) {
    e = this.b().parentNode, g = Jg(e), a = parseFloat(a) * g.width / 100
  }
  d && (e = e || this.b().parentNode, g = g || Jg(e), b = parseFloat(b) * g.height / 100);
  return new T(a, b)
};
function uj(a) {
  Hg(a.b(), a.width, a.height);
  var b = a.X();
  if(b) {
    Hg(a.Yb, b.width, b.height), a.Yb.width = b.width, a.Yb.height = b.height, a.yb = k
  }
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
  this.J.clear();
  for(var a = this.b();a.childNodes.length > 1;) {
    a.removeChild(a.lastChild)
  }
};
function nj(a) {
  if(a.$i) {
    a.Zi = j
  }else {
    if(a.C) {
      a.reset();
      if(a.la) {
        var b = a.X();
        a.getContext().scale(b.width / a.la, b.height / a.$b)
      }
      (a.La || a.cb) && a.getContext().translate(-a.La, -a.cb);
      tj(a, a.J);
      a.J.Ca(a.yb);
      a.getContext().restore()
    }
  }
}
function oj(a, b) {
  var c = a.getContext();
  tj(a, b);
  if(!b.Ng || !b.Pg) {
    b.Ca(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof Pi) {
        if(d.pc != 0) {
          c.globalAlpha = d.pc, c.fillStyle = d.ha(), b.Ca(c), c.fill(), c.globalAlpha = 1
        }
      }else {
        var e = c.createLinearGradient(d.Si(), d.Ui(), d.Ti(), d.Vi());
        e.addColorStop(0, d.Qi());
        e.addColorStop(1, d.Ri());
        c.fillStyle = e;
        b.Ca(c);
        c.fill()
      }
    }
    if(d = b.Me) {
      b.Ca(c), c.strokeStyle = d.ha(), d = d.tb, w(d) && d.indexOf("px") != -1 && (d = parseFloat(d) / Xi(a)), c.lineWidth = d, c.stroke()
    }
  }
  a.getContext().restore()
}
r.vb = function(a, b) {
  this.append(a, b)
};
r.append = function(a, b) {
  b = b || this.J;
  b.appendChild(a);
  this.C && !this.nh && !(b != this.J && b != this.Zg) && oj(this, a)
};
r.Jc = function(a, b, c, d, e, g, h) {
  a = new pj(k, this, a, b, c, d, e, g);
  this.append(a, h);
  return a
};
r.drawImage = function(a, b, c, d, e, g) {
  a = new rj(k, this, a, b, c, d, e);
  this.append(a, g);
  return a
};
r.c = function() {
  this.yb = k;
  sj.d.c.call(this)
};
r.R = function() {
  var a = this.X();
  sj.d.R.call(this);
  a || (uj(this), this.dispatchEvent("resize"));
  nj(this)
};
function vj(a) {
  this.v = [];
  wj(this, a)
}
C(vj, pd);
r = vj.prototype;
r.Za = k;
r.ye = k;
function wj(a, b) {
  b && (F(b, function(a) {
    this.xc(a, m)
  }, a), eb(a.v, b))
}
r.Yd = o("Za");
r.qf = function() {
  return db(this.v)
};
r.od = function(a) {
  if(a != this.Za) {
    this.xc(this.Za, m), this.Za = a, this.xc(a, j)
  }
  this.dispatchEvent("select")
};
r.Xd = function() {
  return this.Za ? Wa(this.v, this.Za) : -1
};
r.Ee = function(a) {
  this.od(this.v[a] || k)
};
r.clear = function() {
  ab(this.v);
  this.Za = k
};
r.c = function() {
  vj.d.c.call(this);
  delete this.v;
  this.Za = k
};
r.xc = function(a, b) {
  a && (typeof this.ye == "function" ? this.ye(a, b) : typeof a.De == "function" && a.De(b))
};
function xj() {
}
C(xj, $g);
da(xj);
var zj = 0;
xj.prototype.i = function(a) {
  var b = bh(this, a);
  return a.Ga().i("div", b ? b.join(" ") : k, Aj(this, a.fa, a.rf(), a.Ga()))
};
function Aj(a, b, c, d) {
  for(var e = [], g = 0, h = 0;g < c.height;g++) {
    for(var l = [], n = 0;n < c.width;n++) {
      var q = b && b[h++];
      l.push(Bj(a, q, d))
    }
    e.push(d.i("tr", a.u() + "-row", l))
  }
  return a.bf(e, d)
}
xj.prototype.bf = function(a, b) {
  var c = b.i("table", this.u() + "-table", b.i("tbody", this.u() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Zg(c, "grid");
  return c
};
function Bj(a, b, c) {
  a = c.i("td", {"class":a.u() + "-cell", id:a.u() + "-cell-" + zj++}, b);
  Zg(a, "gridcell");
  return a
}
xj.prototype.kd = function(a, b) {
  if(a) {
    var c = yf(document, "tbody", this.u() + "-body", a)[0];
    if(c) {
      var d = 0;
      F(c.rows, function(a) {
        F(a.cells, function(a) {
          Gf(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var e = [], g = vf(a), h = c.rows[0].cells.length;d < b.length;) {
          var l = b[d++];
          e.push(Bj(this, l, g));
          if(e.length == h) {
            l = g.i("tr", this.u() + "-row", e), c.appendChild(l), e.length = 0
          }
        }
        if(e.length > 0) {
          for(;e.length < h;) {
            e.push(Bj(this, "", g))
          }
          l = g.i("tr", this.u() + "-row", e);
          c.appendChild(l)
        }
      }
    }
    Ng(a, j, lc)
  }
};
function Cj(a, b, c) {
  for(b = b.b();c && c.nodeType == 1 && c != b;) {
    if(c.tagName == "TD" && $a(qf(c), a.u() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function Dj(a, b, c, d) {
  if(c) {
    c = c.parentNode, a = a.u() + "-cell-hover", d ? rf(c, a) : sf(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id)
  }
}
xj.prototype.u = p("goog-palette");
function Ej(a, b, c) {
  W.call(this, a, b || xj.Oa(), c)
}
C(Ej, W);
r = Ej.prototype;
r.w = k;
r.jb = -1;
r.L = k;
r.c = function() {
  Ej.d.c.call(this);
  if(this.L) {
    this.L.f(), this.L = k
  }
  this.w = k
};
r.ld = function(a) {
  Ej.d.ld.call(this, a);
  Fj(this);
  this.L ? (this.L.clear(), wj(this.L, a)) : (this.L = new vj(a), this.L.ye = A(this.xc, this), V(Wg(this), this.L, "select", this.Ug));
  this.jb = -1
};
r.of = p(k);
r.Wc = function(a) {
  Ej.d.Wc.call(this, a);
  var b = Cj(this.m, this, a.target);
  if((!b || !a.relatedTarget || !If(b, a.relatedTarget)) && b != Gj(this)) {
    a = this.fa, Hj(this, a ? Wa(a, b) : -1)
  }
};
r.Vc = function(a) {
  Ej.d.Vc.call(this, a);
  var b = Cj(this.m, this, a.target);
  (!b || !a.relatedTarget || !If(b, a.relatedTarget)) && b == Gj(this) && Dj(this.m, this, b, m)
};
r.Uc = function(a) {
  Ej.d.Uc.call(this, a);
  if(this.ge() && (a = Cj(this.m, this, a.target), a != Gj(this))) {
    var b = this.fa;
    Hj(this, b ? Wa(b, a) : -1)
  }
};
r.lb = function() {
  var a = Gj(this);
  return a ? (this.od(a), this.dispatchEvent("action")) : m
};
r.wf = function(a) {
  var b = this.fa, b = b ? b.length : 0, c = this.w.width;
  if(b == 0 || !this.isEnabled()) {
    return m
  }
  if(a.keyCode == 13 || a.keyCode == 32) {
    return this.lb(a)
  }
  if(a.keyCode == 36) {
    return Hj(this, 0), j
  }else {
    if(a.keyCode == 35) {
      return Hj(this, b - 1), j
    }
  }
  var d = this.jb < 0 ? this.Xd() : this.jb;
  switch(a.keyCode) {
    case 37:
      d == -1 && (d = b);
      if(d > 0) {
        return Hj(this, d - 1), a.preventDefault(), j
      }
      break;
    case 39:
      if(d < b - 1) {
        return Hj(this, d + 1), a.preventDefault(), j
      }
      break;
    case 38:
      d == -1 && (d = b + c - 1);
      if(d >= c) {
        return Hj(this, d - c), a.preventDefault(), j
      }
      break;
    case 40:
      if(d == -1 && (d = -c), d < b - c) {
        return Hj(this, d + c), a.preventDefault(), j
      }
  }
  return m
};
r.Ug = function() {
};
r.rf = o("w");
r.ba = function(a, b) {
  this.b() && f(Error("Component already rendered"));
  this.w = ja(a) ? new T(a, b) : a;
  Fj(this)
};
function Gj(a) {
  var b = a.fa;
  return b && b[a.jb]
}
function Hj(a, b) {
  if(b != a.jb) {
    Ij(a, a.jb, m), a.jb = b, Ij(a, b, j)
  }
}
r.Xd = function() {
  return this.L ? this.L.Xd() : -1
};
r.Yd = function() {
  return this.L ? this.L.Yd() : k
};
r.Ee = function(a) {
  this.L && this.L.Ee(a)
};
r.od = function(a) {
  this.L && this.L.od(a)
};
function Ij(a, b, c) {
  if(a.b()) {
    var d = a.fa;
    d && b >= 0 && b < d.length && Dj(a.m, a, d[b], c)
  }
}
r.xc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.m.u() + "-cell-selected";
    b ? rf(c, d) : sf(c, d)
  }
};
function Fj(a) {
  var b = a.fa;
  if(b) {
    if(a.w && a.w.width) {
      if(b = Math.ceil(b.length / a.w.width), !ja(a.w.height) || a.w.height < b) {
        a.w.height = b
      }
    }else {
      b = Math.ceil(Math.sqrt(b.length)), a.w = new T(b, b)
    }
  }else {
    a.w = new T(0, 0)
  }
}
;function Jj(a, b, c) {
  this.Gc = a || [];
  Ej.call(this, k, b || xj.Oa(), c);
  this.Gc = this.Gc;
  this.ed = k;
  this.kd(Kj(this))
}
C(Jj, Ej);
Jj.prototype.ed = k;
function Lj(a) {
  var b = Mj(Nj);
  if(!a.ed) {
    a.ed = Xa(a.Gc, function(a) {
      return Mj(a)
    })
  }
  a.Ee(b ? Wa(a.ed, b) : -1)
}
function Kj(a) {
  return Xa(a.Gc, function(a) {
    var c = this.Ga().i("div", {"class":this.m.u() + "-colorswatch", style:"background-color:" + a});
    c.title = a.charAt(0) == "#" ? "RGB (" + Jh(a).join(", ") + ")" : a;
    return c
  }, a)
}
function Mj(a) {
  if(a) {
    try {
      return Dh(a).Yc
    }catch(b) {
    }
  }
  return k
}
;var Oj = R("whiteboard.logger");
window.onerror = function(a, b, c) {
  le(Oj, "window.onerror: message: " + H(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Pj() {
  this.ue = new Cb
}
Pj.prototype.xh = function(a, b) {
  Oj.info("streamReset: reasonString=" + H(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  Qj = k
};
Pj.prototype.yh = function(a) {
  var a = Eb(a), b = a[0], c = a[1];
  b == 1 ? (c = this.ue.Pd(yb.gc(), c), a = nb(c, 1), b = nb(c, 2), c = c.ha(), tb.Jc(a, b, 5, 5, new Qi(1, "black"), new Pi(c), i)) : b == 2 ? (tb.f(), Rj()) : O(Oj, "Strange message from server: " + H(a))
};
Pj.prototype.reset = function(a) {
  Oj.info("resetting with reason: " + a);
  this.H.reset(a)
};
var Qj = k, xi = new Gd(t.window);
function Sj() {
  Qj && (Qj.reset("idle timeout fired"), Qj = k)
}
var Tj = k;
function Uj() {
  Tj != k && xi.O.clearTimeout(Tj);
  Qj && (Tj = xi.O.setTimeout(Sj, 2592E5))
}
N(window, ["click", "focus", "keydown", "keypress"], Uj, j);
function Vj() {
  var a = new ti;
  Qj = new Pj;
  Uj();
  Ad(wi(), function(b) {
    Qj || f(Error("lastProto falsy?"));
    var b = new lg(b, a, xi), c = Qj;
    b.te = A(c.yh, c);
    b.onreset = A(c.xh, c);
    Qj.H = b;
    rg(Qj.H, ["subprotocol:whiteboard"]);
    b.start();
    return k
  })
}
function Wj() {
  tb.f();
  Rj();
  var a = Qj;
  Oj.info("Telling server to clear the board.");
  var b = a.H, a = [2, a.ue.pb(new zb)], a = (new Fb).pb(a);
  rg(b, [a])
}
function Xj(a) {
  var b = new Hc(a), a = b.offsetX, c = b.offsetY;
  tb.Jc(a, c, 5, 5, new Qi(1, "black"), new Pi(ub), i);
  var d = Qj, e = ub;
  Oj.info("Telling server about circle at: " + a + ", " + c + " with color " + e);
  var b = d.H, g = new yb;
  ob(g, 1, a);
  ob(g, 2, c);
  ob(g, 3, e);
  a = d.ue.pb(g);
  rg(b, [(new Fb).pb([1, a])])
}
function Rj() {
  var a;
  a = I && !K("9") ? new gj(800, 600, i, i, i) : J && (!K("420") || mc) ? new sj(800, 600, i, i, i) : new Yi(800, 600, i, i, i);
  a.i();
  vb = U("drawArea");
  Xg(a, vb);
  tb = a
}
var Nj = "#E06666";
function Yj(a) {
  var b;
  (a = a.target.Yd()) ? (a = a.style[Ha("background-color")] || "", b = Mj(a)) : b = k;
  b || (b = Nj);
  ub = b;
  ri.set("whiteboard_defaultColor", b);
  a = U("whiteboard-cp-value");
  w("background-color") ? Fg(a, b, "background-color") : Ra("background-color", pa(Fg, a));
  a = U("whiteboard-cp-value");
  a.title = b;
  b = Dh(b).Yc;
  Jf(a, b);
  b = Jh(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = Hh(b[0], b[1], b[2]);
  w("color") ? Fg(a, b, "color") : Ra("color", pa(Fg, a))
}
function Zj() {
  wb = (new Ue(document.location)).U;
  if(xb = Boolean(Number(wb.get("logging", "0")))) {
    pe().nd(je);
    var a = new Ei(document.getElementById("log"));
    if(j != a.Cf) {
      var b = pe(), c = a.lh;
      if(!b.jc) {
        b.jc = []
      }
      b.jc.push(c);
      a.Cf = j
    }
  }else {
    pe().nd(be)
  }
  Oj.info("Logger works.");
  (a = ri.get("whiteboard_defaultColor")) && (Nj = a);
  ub = Nj;
  b = U("whiteboard-controls-left");
  a = U("whiteboard-controls-right");
  c = Bf("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  Ff(b, c);
  c = Bf("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  Ff(b, c);
  b = new Jj("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.ba(8);
  Xg(b, U("whiteboard-cp"));
  N(b, "action", Yj);
  Lj(b);
  Yj({target:b});
  b = new Bh("Clear board");
  qh(b, "clear-board-button");
  Xg(b, a);
  N(b, "action", Wj);
  a = U("drawAreaOverlay");
  Ng(a, j);
  N(a, "click", Xj, m);
  Rj();
  Vj()
}
var $j = "__whiteboard_init".split("."), ak = t;
!($j[0] in ak) && ak.execScript && ak.execScript("var " + $j[0]);
for(var bk;$j.length && (bk = $j.shift());) {
  !$j.length && fa(Zj) ? ak[bk] = Zj : ak = ak[bk] ? ak[bk] : ak[bk] = {}
}
;})();
