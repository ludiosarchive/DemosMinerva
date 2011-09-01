(function(){function f(a) {
  throw a;
}
var i = void 0, k = null;
function aa(a) {
  return function(b) {
    this[a] = b
  }
}
function m(a) {
  return function() {
    return this[a]
  }
}
function n(a) {
  return function() {
    return a
  }
}
var p, ba = ba || {}, r = this;
function ca(a) {
  for(var a = a.split("."), b = r, c;c = a.shift();) {
    if(b[c] != k) {
      b = b[c]
    }else {
      return k
    }
  }
  return b
}
function s() {
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
function t(a) {
  return ea(a) == "array"
}
function ga(a) {
  var b = ea(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function ha(a) {
  return ia(a) && typeof a.getFullYear == "function"
}
function u(a) {
  return typeof a == "string"
}
function ja(a) {
  return typeof a == "number"
}
function x(a) {
  return ea(a) == "function"
}
function ia(a) {
  a = ea(a);
  return a == "object" || a == "array" || a == "function"
}
function y(a) {
  return a[ka] || (a[ka] = ++la)
}
var ka = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), la = 0;
function ma(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function na(a, b, c) {
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
function z(a, b, c) {
  z = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ma : na;
  return z.apply(k, arguments)
}
function oa(a, b) {
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
  a.d = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function D(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = String(a)
  }
}
C(D, Error);
D.prototype.name = "CustomError";
function pa(a) {
  var b = a.length - 1;
  return b >= 0 && a.indexOf("%", b) == b
}
function qa(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
var ra = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function sa(a) {
  a = String(a);
  return!ra.test(a) ? encodeURIComponent(a) : a
}
function ta(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function ua(a) {
  if(!va.test(a)) {
    return a
  }
  a.indexOf("&") != -1 && (a = a.replace(wa, "&amp;"));
  a.indexOf("<") != -1 && (a = a.replace(xa, "&lt;"));
  a.indexOf(">") != -1 && (a = a.replace(ya, "&gt;"));
  a.indexOf('"') != -1 && (a = a.replace(za, "&quot;"));
  return a
}
var wa = /&/g, xa = /</g, ya = />/g, za = /\"/g, va = /[&<>\"]/;
function Aa(a) {
  return ta(a.replace(/  /g, " &#160;"), i)
}
function Ba(a, b) {
  for(var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(d.length, e.length), h = 0;c == 0 && h < g;h++) {
    var j = d[h] || "", l = e[h] || "", o = RegExp("(\\d*)(\\D*)", "g"), v = RegExp("(\\d*)(\\D*)", "g");
    do {
      var q = o.exec(j) || ["", "", ""], w = v.exec(l) || ["", "", ""];
      if(q[0].length == 0 && w[0].length == 0) {
        break
      }
      c = Ca(q[1].length == 0 ? 0 : parseInt(q[1], 10), w[1].length == 0 ? 0 : parseInt(w[1], 10)) || Ca(q[2].length == 0, w[2].length == 0) || Ca(q[2], w[2])
    }while(c == 0)
  }
  return c
}
function Ca(a, b) {
  if(a < b) {
    return-1
  }else {
    if(a > b) {
      return 1
    }
  }
  return 0
}
var Da = Math.random() * 2147483648 | 0, Ea = {};
function Fa(a) {
  return Ea[a] || (Ea[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
}
;function Ga(a, b) {
  b.unshift(a);
  D.call(this, qa.apply(k, b));
  b.shift();
  this.Xi = a
}
C(Ga, D);
Ga.prototype.name = "AssertionError";
function Ha(a, b) {
  f(new Ga("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ia(a, b, c) {
  this.D = a;
  this.K = b;
  this.oe = c.name;
  this.Gb = !!c.$i;
  this.Vi = !!c.required;
  this.ec = c.Vd;
  this.Pf = c.type;
  this.hf = !1;
  switch(this.ec) {
    case Ja:
    ;
    case Ka:
    ;
    case La:
    ;
    case Ma:
    ;
    case Na:
      this.hf = !0
  }
  this.Ni = c.defaultValue
}
var Ja = 3, Ka = 4, La = 6, Ma = 16, Na = 18;
function Oa(a) {
  return a.ec == 11 || a.ec == 10
}
;function Pa(a, b) {
  for(var c in a) {
    b.call(i, a[c], c, a)
  }
}
function Qa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Ra(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Sa = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function Ta(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < Sa.length;g++) {
      c = Sa[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var E = Array.prototype, Ua = E.indexOf ? function(a, b, c) {
  return E.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(u(a)) {
    return!u(b) || b.length != 1 ? -1 : a.indexOf(b, c)
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
  for(var d = a.length, e = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
}, Va = E.map ? function(a, b, c) {
  return E.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), g = u(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (e[h] = b.call(c, g[h], h, a))
  }
  return e
}, Wa = E.some ? function(a, b, c) {
  return E.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && b.call(c, e[g], g, a)) {
      return!0
    }
  }
  return!1
}, Xa = E.every ? function(a, b, c) {
  return E.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && !b.call(c, e[g], g, a)) {
      return!1
    }
  }
  return!0
};
function Ya(a, b) {
  return Ua(a, b) >= 0
}
function Za(a) {
  if(!t(a)) {
    for(var b = a.length - 1;b >= 0;b--) {
      delete a[b]
    }
  }
  a.length = 0
}
function $a(a, b) {
  var c = Ua(a, b);
  c >= 0 && E.splice.call(a, c, 1)
}
function ab(a) {
  return E.concat.apply(E, arguments)
}
function bb(a) {
  if(t(a)) {
    return ab(a)
  }else {
    for(var b = [], c = 0, d = a.length;c < d;c++) {
      b[c] = a[c]
    }
    return b
  }
}
function cb(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], e;
    if(t(d) || (e = ga(d)) && d.hasOwnProperty("callee")) {
      a.push.apply(a, d)
    }else {
      if(e) {
        for(var g = a.length, h = d.length, j = 0;j < h;j++) {
          a[g + j] = d[j]
        }
      }else {
        a.push(d)
      }
    }
  }
}
function db(a, b, c, d) {
  E.splice.apply(a, eb(arguments, 1))
}
function eb(a, b, c) {
  return arguments.length <= 2 ? E.slice.call(a, b) : E.slice.call(a, b, c)
}
function fb(a, b) {
  E.sort.call(a, b || gb)
}
function gb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function hb(a, b, c) {
  this.Nf = a;
  this.oe = b.name || k;
  this.Oi = b.nf || k;
  this.Ki = b.Ji;
  this.Ma = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.Ma[b.K] = b
  }
}
function ib(a) {
  a = Qa(a.Ma);
  fb(a, function(a, c) {
    return a.K - c.K
  });
  return a
}
;function jb() {
  this.r = {};
  this.Cb = this.constructor.Cb;
  var a = this.Cb.Ma, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.Ma = b;
  this.ac = this.ke = k
}
function kb(a, b) {
  for(var c in a.r) {
    a.Ma[c] || b.call(a, Number(c), a.r[c])
  }
}
p = jb.prototype;
p.gc = m("Cb");
p.get = function(a, b) {
  return lb(this, a.K, b)
};
p.set = function(a, b) {
  mb(this, a.K, b)
};
p.add = function(a, b) {
  var c = a.K;
  this.r[c] || (this.r[c] = []);
  this.r[c].push(b)
};
p.clear = function(a) {
  delete this.r[a.K]
};
p.n = function(a) {
  if(!a || this.constructor != a.constructor) {
    return!1
  }
  for(var b = ib(this.gc()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(nb(this, d.K) != nb(a, d.K)) {
      return!1
    }
    if(nb(this, d.K)) {
      var e = Oa(d), g = d.K, h = this.r[g], g = a.r[g];
      if(d.Gb) {
        if(h.length != g.length) {
          return!1
        }
        for(d = 0;d < h.length;d++) {
          if(!(e ? h[d].n(g[d]) : h[d] == g[d])) {
            return!1
          }
        }
      }else {
        if(!(e ? h.n(g) : h == g)) {
          return!1
        }
      }
    }
  }
  return!0
};
p.$e = function(a) {
  for(var b = ib(this.gc()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete this.r[d.K];
    if(nb(a, d.K)) {
      var e = Oa(d);
      if(d.Gb) {
        var g;
        g = a;
        var h = d.K;
        ob(g, g.Ma[h]);
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
p.A = function() {
  var a = new this.constructor;
  a.$e(this);
  return a
};
function nb(a, b) {
  return b in a.r && fa(a.r[b]) && a.r[b] !== k
}
function ob(a, b) {
  if(a.ke) {
    var c = b.K;
    if(!(c in a.ac)) {
      var d = a.r, e;
      e = a.ke;
      var g = a.r[c];
      if(g == k) {
        e = g
      }else {
        if(b.Gb) {
          var h = [];
          t(g);
          for(var j = 0;j < g.length;j++) {
            h[j] = e.Qc(b, g[j])
          }
          e = h
        }else {
          e = e.Qc(b, g)
        }
      }
      d[c] = e;
      a.ac[c] = !0
    }
  }
}
function lb(a, b, c) {
  var d = a.Ma[b];
  ob(a, d);
  return d.Gb ? (c = c || 0, c >= 0 && pb(a, b), a.r[b][c]) : (t(a.r[b]), b in a.r ? a.r[b] : k)
}
function pb(a, b) {
  return a.Ma[b].Gb ? (nb(a, b) && t(a.r[b]), nb(a, b) ? a.r[b].length : 0) : nb(a, b) ? 1 : 0
}
function mb(a, b, c) {
  a.r[b] = c;
  a.ac && (a.ac[b] = !0)
}
function qb(a, b) {
  var c = [], d, e;
  for(e in b) {
    b.hasOwnProperty(e) && (e == 0 ? d = b[0] : c.push(new Ia(a, e, b[e])))
  }
  a.Cb = new hb(a, d, c);
  a.gc = function() {
    return a.Cb
  }
}
;var rb, sb, tb, ub, vb;
function wb() {
  jb.apply(this)
}
C(wb, jb);
wb.prototype.ha = function() {
  return lb(this, 3)
};
function xb() {
  jb.apply(this)
}
C(xb, jb);
qb(wb, {0:{name:"Point", nf:"demosminerva.whiteboard_messages.Point"}, 1:{name:"x", Vd:5, type:Number}, 2:{name:"y", Vd:5, type:Number}, 3:{name:"color", Vd:9, type:String}});
qb(xb, {0:{name:"ClearBoard", nf:"demosminerva.whiteboard_messages.ClearBoard"}});
function yb() {
}
yb.prototype.Rc = function(a, b) {
  return Oa(a) ? this.qb(b) : b
};
yb.prototype.Pd = function(a) {
  new a.Nf;
  f(Error("Unimplemented"))
};
yb.prototype.Qc = function(a, b) {
  if(Oa(a)) {
    return this.Pd(a.Pf.Cb, b)
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
function zb() {
}
C(zb, yb);
zb.prototype.Pd = function(a, b) {
  var c = new a.Nf;
  c.ke = this;
  c.r = b;
  c.ac = {};
  return c
};
function Ab() {
}
C(Ab, zb);
Ab.prototype.qb = function(a) {
  for(var b = ib(a.gc()), c = [], d = 0;d < b.length;d++) {
    var e = b[d];
    if(nb(a, e.K)) {
      var g = e.K;
      if(e.Gb) {
        c[g] = [];
        for(var h = 0;h < pb(a, e.K);h++) {
          c[g][h] = this.Rc(e, a.get(e, h))
        }
      }else {
        c[g] = this.Rc(e, a.get(e))
      }
    }
  }
  kb(a, function(a, b) {
    c[a] = b
  });
  return c
};
Ab.prototype.Rc = function(a, b) {
  return a.ec == 8 ? b ? 1 : 0 : yb.prototype.Rc.apply(this, arguments)
};
Ab.prototype.Qc = function(a, b) {
  return a.ec == 8 ? b === 1 : yb.prototype.Qc.apply(this, arguments)
};
function Bb(a) {
  return x(a) || typeof a == "object" && x(a.call) && x(a.apply)
}
;function Cb(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  f(Error("Invalid JSON string: " + a))
}
function Db() {
}
Db.prototype.qb = function(a) {
  var b = [];
  Eb(this, a, b);
  return b.join("")
};
function Eb(a, b, c) {
  switch(typeof b) {
    case "string":
      Fb(b, c);
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
      if(t(b)) {
        var d = b.length;
        c.push("[");
        for(var e = "", g = 0;g < d;g++) {
          c.push(e), Eb(a, b[g], c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(e in b) {
        Object.prototype.hasOwnProperty.call(b, e) && (g = b[e], typeof g != "function" && (c.push(d), Fb(e, c), c.push(":"), Eb(a, g, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      f(Error("Unknown type: " + typeof b))
  }
}
var Gb = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\u000b"}, Hb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Fb(a, b) {
  b.push('"', a.replace(Hb, function(a) {
    if(a in Gb) {
      return Gb[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    b < 16 ? e += "000" : b < 256 ? e += "00" : b < 4096 && (e += "0");
    return Gb[a] = e + b.toString(16)
  }), '"')
}
;function Ib(a, b, c) {
  var d = Ua(c, a);
  if(d != -1) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = ea(a);
    if(d == "boolean" || d == "number" || d == "null" || d == "undefined") {
      b.push(String(a))
    }else {
      if(d == "string") {
        Fb(a, b)
      }else {
        if(Bb(a.s)) {
          a.s(b, c)
        }else {
          if(Bb(a.tg)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if(d == "array") {
                d = a.length;
                b.push("[");
                for(var e = "", g = 0;g < d;g++) {
                  b.push(e), Ib(a[g], b, c), e = ", "
                }
                b.push("]")
              }else {
                if(d == "object") {
                  if(ha(a) && typeof a.valueOf == "function") {
                    b.push("new Date(", String(a.valueOf()), ")")
                  }else {
                    for(var d = Ra(a).concat(Sa), e = {}, h = g = 0;h < d.length;) {
                      var j = d[h++], l = ia(j) ? "o" + y(j) : (typeof j).charAt(0) + j;
                      Object.prototype.hasOwnProperty.call(e, l) || (e[l] = !0, d[g++] = j)
                    }
                    d.length = g;
                    b.push("{");
                    e = "";
                    for(h = 0;h < d.length;h++) {
                      g = d[h], Object.prototype.hasOwnProperty.call(a, g) && (j = a[g], b.push(e), Fb(g, b), b.push(": "), Ib(j, b, c), e = ", ")
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
  Ib(a, b, c)
}
function H(a) {
  var b = [];
  G(a, b, i);
  return b.join("")
}
;function Jb(a) {
  if(typeof a.W == "function") {
    a = a.W()
  }else {
    if(ga(a) || u(a)) {
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
function Kb(a) {
  if(typeof a.Y == "function") {
    return a.Y()
  }
  if(u(a)) {
    return a.split("")
  }
  if(ga(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Qa(a)
}
function Lb(a) {
  if(typeof a.Ha == "function") {
    return a.Ha()
  }
  if(typeof a.Y != "function") {
    if(ga(a) || u(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return Ra(a)
  }
}
function Mb(a, b, c) {
  if(typeof a.forEach == "function") {
    a.forEach(b, c)
  }else {
    if(ga(a) || u(a)) {
      F(a, b, c)
    }else {
      for(var d = Lb(a), e = Kb(a), g = e.length, h = 0;h < g;h++) {
        b.call(c, e[h], d && d[h], a)
      }
    }
  }
}
function Nb(a, b) {
  if(typeof a.every == "function") {
    return a.every(b, i)
  }
  if(ga(a) || u(a)) {
    return Xa(a, b, i)
  }
  for(var c = Lb(a), d = Kb(a), e = d.length, g = 0;g < e;g++) {
    if(!b.call(i, d[g], c && c[g], a)) {
      return!1
    }
  }
  return!0
}
;function Ob(a, b) {
  this.p = {};
  this.l = [];
  var c = arguments.length;
  if(c > 1) {
    c % 2 && f(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.Cd(a)
  }
}
p = Ob.prototype;
p.f = 0;
p.Re = 0;
p.W = m("f");
p.Y = function() {
  Pb(this);
  for(var a = [], b = 0;b < this.l.length;b++) {
    a.push(this.p[this.l[b]])
  }
  return a
};
p.Ha = function() {
  Pb(this);
  return this.l.concat()
};
p.ea = function(a) {
  return Qb(this.p, a)
};
p.Ic = function(a) {
  for(var b = 0;b < this.l.length;b++) {
    var c = this.l[b];
    if(Qb(this.p, c) && this.p[c] == a) {
      return!0
    }
  }
  return!1
};
p.n = function(a, b) {
  if(this === a) {
    return!0
  }
  if(this.f != a.W()) {
    return!1
  }
  var c = b || Rb;
  Pb(this);
  for(var d, e = 0;d = this.l[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return!1
    }
  }
  return!0
};
function Rb(a, b) {
  return a === b
}
p.Qa = function() {
  return this.f == 0
};
p.clear = function() {
  this.p = {};
  this.Re = this.f = this.l.length = 0
};
p.remove = function(a) {
  return Qb(this.p, a) ? (delete this.p[a], this.f--, this.Re++, this.l.length > 2 * this.f && Pb(this), !0) : !1
};
function Pb(a) {
  if(a.f != a.l.length) {
    for(var b = 0, c = 0;b < a.l.length;) {
      var d = a.l[b];
      Qb(a.p, d) && (a.l[c++] = d);
      b++
    }
    a.l.length = c
  }
  if(a.f != a.l.length) {
    for(var e = {}, c = b = 0;b < a.l.length;) {
      d = a.l[b], Qb(e, d) || (a.l[c++] = d, e[d] = 1), b++
    }
    a.l.length = c
  }
}
p.get = function(a, b) {
  return Qb(this.p, a) ? this.p[a] : b
};
p.set = function(a, b) {
  Qb(this.p, a) || (this.f++, this.l.push(a), this.Re++);
  this.p[a] = b
};
p.Cd = function(a) {
  var b;
  a instanceof Ob ? (b = a.Ha(), a = a.Y()) : (b = Ra(a), a = Qa(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
p.A = function() {
  return new Ob(this)
};
function Sb(a) {
  Pb(a);
  for(var b = {}, c = 0;c < a.l.length;c++) {
    var d = a.l[c];
    b[d] = a.p[d]
  }
  return b
}
function Qb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function Tb(a) {
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
;function Ub(a, b) {
  this.vb = a;
  this.pb = b
}
Ub.prototype.n = function(a) {
  return a instanceof Ub && this.vb == a.vb && this.pb.join(",") == a.pb
};
Ub.prototype.s = function(a, b) {
  a.push("new SACK(", String(this.vb), ", ");
  G(this.pb, a, b);
  a.push(")")
};
function Vb() {
  this.v = new Ob
}
p = Vb.prototype;
p.Ab = -1;
p.w = 0;
p.append = function(a) {
  var b = Tb(a);
  this.v.set(this.Ab + 1, [a, b]);
  this.Ab += 1;
  this.w += b
};
p.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
p.s = function(a) {
  a.push("<Queue with ", String(this.v.W()), " item(s), counter=#", String(this.Ab), ", size=", String(this.w), ">")
};
function Wb(a) {
  Pb(a.v);
  fb(a.v.l);
  return a.v.l
}
p.qf = function(a) {
  for(var b = Wb(this), c = [], d = 0;d < b.length;d++) {
    var e = b[d];
    (a == k || e >= a) && c.push([e, this.v.p[e][0]])
  }
  return c
};
function Xb() {
  this.ab = new Ob
}
Xb.prototype.Ib = -1;
Xb.prototype.w = 0;
function Yb(a) {
  var b = a.ab.Ha();
  fb(b);
  return new Ub(a.Ib, b)
}
var Zb = {};
function $b() {
  return!0
}
;var ac, bc, cc, dc, ec;
function fc() {
  return r.navigator ? r.navigator.userAgent : k
}
ec = dc = cc = bc = ac = !1;
var gc;
if(gc = fc()) {
  var hc = r.navigator;
  ac = gc.indexOf("Opera") == 0;
  bc = !ac && gc.indexOf("MSIE") != -1;
  dc = (cc = !ac && gc.indexOf("WebKit") != -1) && gc.indexOf("Mobile") != -1;
  ec = !ac && !cc && hc.product == "Gecko"
}
var ic = ac, I = bc, jc = ec, J = cc, kc = dc, lc = r.navigator, mc = (lc && lc.platform || "").indexOf("Mac") != -1, nc;
a: {
  var oc = "", pc;
  if(ic && r.opera) {
    var qc = r.opera.version, oc = typeof qc == "function" ? qc() : qc
  }else {
    if(jc ? pc = /rv\:([^\);]+)(\)|;)/ : I ? pc = /MSIE\s+([^\);]+)(\)|;)/ : J && (pc = /WebKit\/(\S+)/), pc) {
      var rc = pc.exec(fc()), oc = rc ? rc[1] : ""
    }
  }
  if(I) {
    var sc, tc = r.document;
    sc = tc ? tc.documentMode : i;
    if(sc > parseFloat(oc)) {
      nc = String(sc);
      break a
    }
  }
  nc = oc
}
var uc = {};
function K(a) {
  return uc[a] || (uc[a] = Ba(nc, a) >= 0)
}
var vc = {};
function wc() {
  return vc[9] || (vc[9] = I && document.documentMode && document.documentMode >= 9)
}
;var xc;
var yc = {Ph:"click", Uh:"dblclick", oi:"mousedown", si:"mouseup", ri:"mouseover", qi:"mouseout", pi:"mousemove", Ci:"selectstart", ii:"keypress", hi:"keydown", ji:"keyup", Nh:"blur", bi:"focus", Vh:"deactivate", ci:I ? "focusin" : "DOMFocusIn", di:I ? "focusout" : "DOMFocusOut", Oh:"change", Bi:"select", Di:"submit", gi:"input", xi:"propertychange", Zh:"dragstart", Wh:"dragenter", Yh:"dragover", Xh:"dragleave", $h:"drop", Hi:"touchstart", Gi:"touchmove", Fi:"touchend", Ei:"touchcancel", Rh:"contextmenu", 
ai:"error", fi:"help", ki:"load", li:"losecapture", yi:"readystatechange", zi:"resize", Ai:"scroll", Ii:"unload", ei:"hashchange", ti:"pagehide", ui:"pageshow", wi:"popstate", Sh:"copy", vi:"paste", Th:"cut", Kh:"beforecopy", Lh:"beforecut", Mh:"beforepaste", ni:"message", Qh:"connect"};
var zc = !I || wc(), Ac = I && !K("8");
function L() {
}
L.prototype.va = !1;
L.prototype.e = function() {
  if(!this.va) {
    this.va = !0, this.c()
  }
};
L.prototype.c = function() {
  this.Eg && Bc.apply(k, this.Eg)
};
function Bc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ga(d) ? Bc.apply(k, d) : d && typeof d.e == "function" && d.e()
  }
}
;function Cc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
C(Cc, L);
p = Cc.prototype;
p.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
p.nb = !1;
p.vc = !0;
p.stopPropagation = function() {
  this.nb = !0
};
p.preventDefault = function() {
  this.vc = !1
};
function Dc(a) {
  a.stopPropagation()
}
;function Ec(a) {
  Ec[" "](a);
  return a
}
Ec[" "] = s;
function Fc(a, b) {
  a && this.kc(a, b)
}
C(Fc, Cc);
var Gc = [1, 4, 2];
p = Fc.prototype;
p.target = k;
p.relatedTarget = k;
p.offsetX = 0;
p.offsetY = 0;
p.clientX = 0;
p.clientY = 0;
p.screenX = 0;
p.screenY = 0;
p.button = 0;
p.keyCode = 0;
p.charCode = 0;
p.ctrlKey = !1;
p.altKey = !1;
p.shiftKey = !1;
p.metaKey = !1;
p.ih = !1;
p.Ea = k;
p.kc = function(a, b) {
  var c = this.type = a.type;
  Cc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(jc) {
      var e;
      a: {
        try {
          Ec(d.nodeName);
          e = !0;
          break a
        }catch(g) {
        }
        e = !1
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
  this.ih = mc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Ea = a;
  delete this.vc;
  delete this.nb
};
function Hc(a) {
  return zc ? a.Ea.button == 0 : a.type == "click" ? !0 : !!(a.Ea.button & Gc[0])
}
p.stopPropagation = function() {
  Fc.d.stopPropagation.call(this);
  this.Ea.stopPropagation ? this.Ea.stopPropagation() : this.Ea.cancelBubble = !0
};
p.preventDefault = function() {
  Fc.d.preventDefault.call(this);
  var a = this.Ea;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, Ac) {
      try {
        if(a.ctrlKey || a.keyCode >= 112 && a.keyCode <= 123) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
p.c = function() {
  Fc.d.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Ea = k
};
function Ic() {
}
var Jc = 0;
p = Ic.prototype;
p.key = 0;
p.ob = !1;
p.Gd = !1;
p.kc = function(a, b, c, d, e, g) {
  x(a) ? this.Ef = !0 : a && a.handleEvent && x(a.handleEvent) ? this.Ef = !1 : f(Error("Invalid listener argument"));
  this.Lb = a;
  this.Yf = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Yc = g;
  this.Gd = !1;
  this.key = ++Jc;
  this.ob = !1
};
p.handleEvent = function(a) {
  return this.Ef ? this.Lb.call(this.Yc || this.src, a) : this.Lb.handleEvent.call(this.Lb, a)
};
var Kc, Lc = (Kc = "ScriptEngine" in r && r.ScriptEngine() == "JScript") ? r.ScriptEngineMajorVersion() + "." + r.ScriptEngineMinorVersion() + "." + r.ScriptEngineBuildVersion() : "0";
function Mc(a, b) {
  this.Jf = b;
  this.gb = [];
  a > this.Jf && f(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.gb.push(this.Ba ? this.Ba() : {})
  }
}
C(Mc, L);
Mc.prototype.Ba = k;
Mc.prototype.jf = k;
function Nc(a) {
  return a.gb.length ? a.gb.pop() : a.Ba ? a.Ba() : {}
}
function Oc(a, b) {
  a.gb.length < a.Jf ? a.gb.push(b) : Pc(a, b)
}
function Pc(a, b) {
  if(a.jf) {
    a.jf(b)
  }else {
    if(ia(b)) {
      if(x(b.e)) {
        b.e()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
Mc.prototype.c = function() {
  Mc.d.c.call(this);
  for(var a = this.gb;a.length;) {
    Pc(this, a.pop())
  }
  delete this.gb
};
var Qc, Rc, Sc, Tc, Uc, Vc, Wc, Xc, Yc, Zc, $c;
(function() {
  function a() {
    return{f:0, pa:0}
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
    return new Ic
  }
  function e() {
    return new Fc
  }
  var g = Kc && !(Ba(Lc, "5.7") >= 0), h;
  Vc = function(a) {
    h = a
  };
  if(g) {
    Qc = function() {
      return Nc(j)
    };
    Rc = function(a) {
      Oc(j, a)
    };
    Sc = function() {
      return Nc(l)
    };
    Tc = function(a) {
      Oc(l, a)
    };
    Uc = function() {
      return Nc(o)
    };
    Wc = function() {
      Oc(o, c())
    };
    Xc = function() {
      return Nc(v)
    };
    Yc = function(a) {
      Oc(v, a)
    };
    Zc = function() {
      return Nc(q)
    };
    $c = function(a) {
      Oc(q, a)
    };
    var j = new Mc(0, 600);
    j.Ba = a;
    var l = new Mc(0, 600);
    l.Ba = b;
    var o = new Mc(0, 600);
    o.Ba = c;
    var v = new Mc(0, 600);
    v.Ba = d;
    var q = new Mc(0, 600);
    q.Ba = e
  }else {
    Qc = a, Rc = s, Sc = b, Tc = s, Uc = c, Wc = s, Xc = d, Yc = s, Zc = e, $c = s
  }
})();
var ad = {}, M = {}, bd = {}, cd = {};
function N(a, b, c, d, e) {
  if(b) {
    if(t(b)) {
      for(var g = 0;g < b.length;g++) {
        N(a, b[g], c, d, e)
      }
      return k
    }else {
      var d = !!d, h = M;
      b in h || (h[b] = Qc());
      h = h[b];
      d in h || (h[d] = Qc(), h.f++);
      var h = h[d], j = y(a), l;
      h.pa++;
      if(h[j]) {
        l = h[j];
        for(g = 0;g < l.length;g++) {
          if(h = l[g], h.Lb == c && h.Yc == e) {
            if(h.ob) {
              break
            }
            return l[g].key
          }
        }
      }else {
        l = h[j] = Sc(), h.f++
      }
      g = Uc();
      g.src = a;
      h = Xc();
      h.kc(c, g, a, b, d, e);
      c = h.key;
      g.key = c;
      l.push(h);
      ad[c] = h;
      bd[j] || (bd[j] = Sc());
      bd[j].push(h);
      a.addEventListener ? (a == r || !a.Md) && a.addEventListener(b, g, d) : a.attachEvent(b in cd ? cd[b] : cd[b] = "on" + b, g);
      return c
    }
  }else {
    f(Error("Invalid event type"))
  }
}
function dd(a, b, c, d, e) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      dd(a, b[g], c, d, e)
    }
    return k
  }
  a = N(a, b, c, d, e);
  ad[a].Gd = !0;
  return a
}
function ed(a, b, c, d, e) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      ed(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = fd(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Lb == c && a[g].capture == d && a[g].Yc == e) {
          gd(a[g].key);
          break
        }
      }
    }
  }
}
function gd(a) {
  if(!ad[a]) {
    return!1
  }
  var b = ad[a];
  if(b.ob) {
    return!1
  }
  var c = b.src, d = b.type, e = b.Yf, g = b.capture;
  c.removeEventListener ? (c == r || !c.Md) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in cd ? cd[d] : cd[d] = "on" + d, e);
  c = y(c);
  e = M[d][g][c];
  if(bd[c]) {
    var h = bd[c];
    $a(h, b);
    h.length == 0 && delete bd[c]
  }
  b.ob = !0;
  e.Rf = !0;
  hd(d, g, c, e);
  delete ad[a];
  return!0
}
function hd(a, b, c, d) {
  if(!d.ed && d.Rf) {
    for(var e = 0, g = 0;e < d.length;e++) {
      if(d[e].ob) {
        var h = d[e].Yf;
        h.src = k;
        Wc(h);
        Yc(d[e])
      }else {
        e != g && (d[g] = d[e]), g++
      }
    }
    d.length = g;
    d.Rf = !1;
    g == 0 && (Tc(d), delete M[a][b][c], M[a][b].f--, M[a][b].f == 0 && (Rc(M[a][b]), delete M[a][b], M[a].f--), M[a].f == 0 && (Rc(M[a]), delete M[a]))
  }
}
function id(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Pa(bd, function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          gd(g.key), c++
        }
      }
    })
  }else {
    if(a = y(a), bd[a]) {
      for(var a = bd[a], e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          gd(g.key), c++
        }
      }
    }
  }
}
function fd(a, b, c) {
  var d = M;
  return b in d && (d = d[b], c in d && (d = d[c], a = y(a), d[a])) ? d[a] : k
}
function jd(a, b, c, d, e) {
  var g = 1, b = y(b);
  if(a[b]) {
    a.pa--;
    a = a[b];
    a.ed ? a.ed++ : a.ed = 1;
    try {
      for(var h = a.length, j = 0;j < h;j++) {
        var l = a[j];
        l && !l.ob && (g &= kd(l, e) !== !1)
      }
    }finally {
      a.ed--, hd(c, d, b, a)
    }
  }
  return Boolean(g)
}
function kd(a, b) {
  var c = a.handleEvent(b);
  a.Gd && gd(a.key);
  return c
}
Vc(function(a, b) {
  if(!ad[a]) {
    return!0
  }
  var c = ad[a], d = c.type, e = M;
  if(!(d in e)) {
    return!0
  }
  var e = e[d], g, h;
  xc === i && (xc = I && !r.addEventListener);
  if(xc) {
    g = b || ca("window.event");
    var j = !0 in e, l = !1 in e;
    if(j) {
      if(g.keyCode < 0 || g.returnValue != i) {
        return!0
      }
      a: {
        var o = !1;
        if(g.keyCode == 0) {
          try {
            g.keyCode = -1;
            break a
          }catch(v) {
            o = !0
          }
        }
        if(o || g.returnValue == i) {
          g.returnValue = !0
        }
      }
    }
    o = Zc();
    o.kc(g, this);
    g = !0;
    try {
      if(j) {
        for(var q = Sc(), w = o.currentTarget;w;w = w.parentNode) {
          q.push(w)
        }
        h = e[!0];
        h.pa = h.f;
        for(var B = q.length - 1;!o.nb && B >= 0 && h.pa;B--) {
          o.currentTarget = q[B], g &= jd(h, q[B], d, !0, o)
        }
        if(l) {
          h = e[!1];
          h.pa = h.f;
          for(B = 0;!o.nb && B < q.length && h.pa;B++) {
            o.currentTarget = q[B], g &= jd(h, q[B], d, !1, o)
          }
        }
      }else {
        g = kd(c, o)
      }
    }finally {
      if(q) {
        q.length = 0, Tc(q)
      }
      o.e();
      $c(o)
    }
    return g
  }
  d = new Fc(b, this);
  try {
    g = kd(c, d)
  }finally {
    d.e()
  }
  return g
});
var md = 0;
function nd() {
}
C(nd, L);
p = nd.prototype;
p.Md = !0;
p.hd = k;
p.Ce = aa("hd");
p.addEventListener = function(a, b, c, d) {
  N(this, a, b, c, d)
};
p.removeEventListener = function(a, b, c, d) {
  ed(this, a, b, c, d)
};
p.dispatchEvent = function(a) {
  var b = a.type || a, c = M;
  if(b in c) {
    if(u(a)) {
      a = new Cc(a, this)
    }else {
      if(a instanceof Cc) {
        a.target = a.target || this
      }else {
        var d = a, a = new Cc(b, this);
        Ta(a, d)
      }
    }
    var d = 1, e, c = c[b], b = !0 in c, g;
    if(b) {
      e = [];
      for(g = this;g;g = g.hd) {
        e.push(g)
      }
      g = c[!0];
      g.pa = g.f;
      for(var h = e.length - 1;!a.nb && h >= 0 && g.pa;h--) {
        a.currentTarget = e[h], d &= jd(g, e[h], a.type, !0, a) && a.vc != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.pa = g.f, b) {
        for(h = 0;!a.nb && h < e.length && g.pa;h++) {
          a.currentTarget = e[h], d &= jd(g, e[h], a.type, !1, a) && a.vc != !1
        }
      }else {
        for(e = this;!a.nb && e && g.pa;e = e.hd) {
          a.currentTarget = e, d &= jd(g, e, a.type, !1, a) && a.vc != !1
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
p.c = function() {
  nd.d.c.call(this);
  id(this);
  this.hd = k
};
function od(a, b) {
  this.ad = a || 1;
  this.Bc = b || pd;
  this.Ed = z(this.yh, this);
  this.je = A()
}
C(od, nd);
od.prototype.enabled = !1;
var pd = r.window;
p = od.prototype;
p.ta = k;
p.yh = function() {
  if(this.enabled) {
    var a = A() - this.je;
    if(a > 0 && a < this.ad * 0.8) {
      this.ta = this.Bc.setTimeout(this.Ed, this.ad - a)
    }else {
      if(this.dispatchEvent(qd), this.enabled) {
        this.ta = this.Bc.setTimeout(this.Ed, this.ad), this.je = A()
      }
    }
  }
};
p.start = function() {
  this.enabled = !0;
  if(!this.ta) {
    this.ta = this.Bc.setTimeout(this.Ed, this.ad), this.je = A()
  }
};
p.stop = function() {
  this.enabled = !1;
  if(this.ta) {
    this.Bc.clearTimeout(this.ta), this.ta = k
  }
};
p.c = function() {
  od.d.c.call(this);
  this.stop();
  delete this.Bc
};
var qd = "tick";
md++;
md++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function rd(a, b) {
  this.Fc = [];
  this.We = a;
  this.ef = b || k
}
p = rd.prototype;
p.Na = !1;
p.hc = !1;
p.qc = 0;
p.He = !1;
p.zg = !1;
p.Fd = 0;
p.cancel = function(a) {
  if(this.Na) {
    this.uc instanceof rd && this.uc.cancel()
  }else {
    if(this.D) {
      var b = this.D;
      delete this.D;
      a ? b.cancel(a) : (b.Fd--, b.Fd <= 0 && b.cancel())
    }
    this.We ? this.We.call(this.ef, this) : this.He = !0;
    this.Na || this.dc(new sd(this))
  }
};
p.Ze = function(a, b) {
  td(this, a, b);
  this.qc--;
  this.qc == 0 && this.Na && ud(this)
};
function td(a, b, c) {
  a.Na = !0;
  a.uc = c;
  a.hc = !b;
  ud(a)
}
function vd(a) {
  if(a.Na) {
    a.He || f(new wd(a)), a.He = !1
  }
}
function xd(a, b) {
  vd(a);
  td(a, !0, b)
}
p.dc = function(a) {
  vd(this);
  td(this, !1, a)
};
function yd(a, b) {
  zd(a, b, k, i)
}
function zd(a, b, c, d) {
  a.Fc.push([b, c, d]);
  a.Na && ud(a)
}
function Ad(a, b) {
  zd(a, b, b, i)
}
function Bd(a) {
  return Wa(a.Fc, function(a) {
    return x(a[1])
  })
}
function ud(a) {
  a.Oe && a.Na && Bd(a) && (r.clearTimeout(a.Oe), delete a.Oe);
  a.D && (a.D.Fd--, delete a.D);
  for(var b = a.uc, c = !1, d = !1;a.Fc.length && a.qc == 0;) {
    var e = a.Fc.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.hc ? h : g) {
      try {
        var j = g.call(e || a.ef, b);
        if(fa(j)) {
          a.hc = a.hc && (j == b || j instanceof Error), a.uc = b = j
        }
        b instanceof rd && (d = !0, a.qc++)
      }catch(l) {
        b = l, a.hc = !0, Bd(a) || (c = !0)
      }
    }
  }
  a.uc = b;
  if(d && a.qc) {
    zd(b, z(a.Ze, a, !0), z(a.Ze, a, !1)), b.zg = !0
  }
  if(c) {
    a.Oe = r.setTimeout(function() {
      fa(b.message) && b.stack && (b.message += "\n" + b.stack);
      f(b)
    }, 0)
  }
}
function Cd(a) {
  var b = new rd;
  xd(b, a);
  return b
}
function Dd(a) {
  var b = new rd;
  b.dc(a);
  return b
}
function wd(a) {
  D.call(this);
  this.Dg = a
}
C(wd, D);
wd.prototype.message = "Already called";
function sd(a) {
  D.call(this);
  this.Dg = a
}
C(sd, D);
sd.prototype.message = "Deferred was cancelled";
function Ed(a) {
  this.O = a;
  this.Mc = [];
  this.kf = [];
  this.yg = z(this.Ch, this)
}
Ed.prototype.ta = k;
function Fd(a, b, c, d) {
  a.Mc.push([b, c, d]);
  if(a.ta == k) {
    a.ta = a.O.setTimeout(a.yg, 0)
  }
}
Ed.prototype.Ch = function() {
  this.ta = k;
  var a = this.Mc;
  this.Mc = [];
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
  if(this.Mc.length == 0) {
    a = this.kf;
    this.kf = [];
    for(b = 0;b < a.length;b++) {
      xd(a[b], k)
    }
  }
};
var Gd = new Ed(r.window);
function Hd(a, b) {
  switch(ea(b)) {
    case "string":
      a.push("<string>", ua(b), "</string>");
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
        a.push('<property id="', d, '">'), Hd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if(typeof b.getFullYear == "function") {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && ea(b[c]) != "function" && (a.push('<property id="', ua(c), '">'), Hd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function Id(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, e = arguments;
  d.push("<arguments>");
  for(var g = e.length, h = 1;h < g;h++) {
    Hd(d, e[h])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;function Jd() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ A()).toString(36)
}
function Kd(a) {
  return a.substr(0, a.length - 1)
}
var Ld = /^(0|[1-9]\d*)$/, Md = /^(0|\-?[1-9]\d*)$/;
function Nd(a) {
  var b = Od;
  return Ld.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function Pd(a) {
  this.p = new Ob;
  a && this.Cd(a)
}
function Qd(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + y(a) : b.substr(0, 1) + a
}
p = Pd.prototype;
p.W = function() {
  return this.p.W()
};
p.add = function(a) {
  this.p.set(Qd(a), a)
};
p.Cd = function(a) {
  for(var a = Kb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
p.we = function(a) {
  for(var a = Kb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
p.remove = function(a) {
  return this.p.remove(Qd(a))
};
p.clear = function() {
  this.p.clear()
};
p.Qa = function() {
  return this.p.Qa()
};
p.contains = function(a) {
  return this.p.ea(Qd(a))
};
p.Y = function() {
  return this.p.Y()
};
p.A = function() {
  return new Pd(this)
};
p.n = function(a) {
  return this.W() == Jb(a) && Rd(this, a)
};
function Rd(a, b) {
  var c = Jb(b);
  if(a.W() > c) {
    return!1
  }
  !(b instanceof Pd) && c > 5 && (b = new Pd(b));
  return Nb(a, function(a) {
    if(typeof b.contains == "function") {
      a = b.contains(a)
    }else {
      if(typeof b.Ic == "function") {
        a = b.Ic(a)
      }else {
        if(ga(b) || u(b)) {
          a = Ya(b, a)
        }else {
          a: {
            for(var c in b) {
              if(b[c] == a) {
                a = !0;
                break a
              }
            }
            a = !1
          }
        }
      }
    }
    return a
  })
}
;function Sd(a) {
  return Td(a || arguments.callee.caller, [])
}
function Td(a, b) {
  var c = [];
  if(Ya(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(Ud(a) + "(");
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
            g = (g = Ud(g)) ? g : "[fn]";
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
        c.push(Td(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Ud(a) {
  if(Vd[a]) {
    return Vd[a]
  }
  a = String(a);
  if(!Vd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Vd[a] = b ? b[1] : "[Anonymous]"
  }
  return Vd[a]
}
var Vd = {};
function Wd(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Wd.prototype.oh = 0;
Wd.prototype.Td = k;
Wd.prototype.Sd = k;
var Xd = 0;
Wd.prototype.reset = function(a, b, c, d, e) {
  this.oh = typeof e == "number" ? e : Xd++;
  this.jg = d || A();
  this.Kb = a;
  this.Of = b;
  this.$g = c;
  delete this.Td;
  delete this.Sd
};
Wd.prototype.od = aa("Kb");
function Yd(a) {
  this.oe = a
}
Yd.prototype.D = k;
Yd.prototype.Kb = k;
Yd.prototype.P = k;
Yd.prototype.jc = k;
function Zd(a, b) {
  this.name = a;
  this.value = b
}
Zd.prototype.toString = m("name");
var $d = new Zd("OFF", Infinity), ae = new Zd("SHOUT", 1200), be = new Zd("SEVERE", 1E3), ce = new Zd("WARNING", 900), de = new Zd("INFO", 800), ee = new Zd("CONFIG", 700), fe = new Zd("FINE", 500), ge = new Zd("FINEST", 300), he = new Zd("ALL", 0);
p = Yd.prototype;
p.getParent = m("D");
p.od = aa("Kb");
function ie(a) {
  if(a.Kb) {
    return a.Kb
  }
  if(a.D) {
    return ie(a.D)
  }
  Ha("Root logger has no level set.");
  return k
}
p.log = function(a, b, c) {
  if(a.value >= ie(this).value) {
    a = this.Og(a, b, c);
    b = "log:" + a.Of;
    r.console && (r.console.timeStamp ? r.console.timeStamp(b) : r.console.markTimeline && r.console.markTimeline(b));
    r.msWriteProfilerMark && r.msWriteProfilerMark(b);
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
p.Og = function(a, b, c) {
  var d = new Wd(a, String(b), this.oe);
  if(c) {
    d.Td = c;
    var e;
    var g = arguments.callee.caller;
    try {
      var h;
      var j = ca("window.location.href");
      if(u(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var l, o, v = !1;
        try {
          l = c.lineNumber || c.Wi || "Not available"
        }catch(q) {
          l = "Not available", v = !0
        }
        try {
          o = c.fileName || c.filename || c.sourceURL || j
        }catch(w) {
          o = "Not available", v = !0
        }
        h = v || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:l, fileName:o, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + ua(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + ua(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ua(Sd(g) + "-> ")
    }catch(B) {
      e = "Exception trying to expose exception! You win, we lose. " + B
    }
    d.Sd = e
  }
  return d
};
function je(a, b) {
  a.log(be, b, i)
}
function O(a, b) {
  a.log(ce, b, i)
}
p.info = function(a, b) {
  this.log(de, a, b)
};
function P(a, b) {
  a.log(fe, b, i)
}
function Q(a, b) {
  a.log(ge, b, i)
}
var ke = {}, le = k;
function me() {
  le || (le = new Yd(""), ke[""] = le, le.od(ee))
}
function ne() {
  me();
  return le
}
function R(a) {
  me();
  var b;
  if(!(b = ke[a])) {
    b = new Yd(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = R(a.substr(0, c));
    if(!c.P) {
      c.P = {}
    }
    c.P[d] = b;
    b.D = c;
    ke[a] = b
  }
  return b
}
;function oe(a, b) {
  this.S = "_" + Jd();
  this.vd = a;
  this.Va = b;
  this.$a = a.$a
}
C(oe, L);
p = oe.prototype;
p.lb = !0;
p.Jc = !1;
p.a = R("cw.net.FlashSocket");
p.s = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.S);
  a.push("'>")
};
function pe(a, b, c) {
  b == "frames" ? (a = a.Va, qe(a.N), re(a.N, c)) : b == "stillreceiving" ? (c = a.Va, Q(c.a, "onstillreceiving"), qe(c.N)) : b == "connect" ? (c = a.Va, c.a.info("onconnect"), qe(c.N), a = c.Wb, c.Wb = k, a.length && (Q(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.rd.Ec(a))) : b == "close" ? (a.lb = !1, a.e()) : b == "ioerror" ? (a.lb = !1, b = a.Va, O(b.a, "onioerror: " + H(c)), se(b.N, !1), a.e()) : b == "securityerror" ? (a.lb = !1, b = a.Va, O(b.a, "onsecurityerror: " + 
  H(c)), se(b.N, !1), a.e()) : f(Error("bad event: " + b))
}
p.Jd = function(a, b) {
  try {
    var c = this.$a.CallFunction(Id("__FC_connect", this.S, a, b, "<int32/>\n"))
  }catch(d) {
    je(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message);
    this.Jc = !0;
    this.lb = !1;
    this.e();
    return
  }
  c != '"OK"' && f(Error("__FC_connect failed? ret: " + c))
};
p.Ec = function(a) {
  try {
    var b = this.$a.CallFunction(Id("__FC_writeFrames", this.S, a))
  }catch(c) {
    je(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message);
    this.Jc = !0;
    this.lb = !1;
    this.e();
    return
  }
  b != '"OK"' && (b == '"no such instance"' ? (O(this.a, "Flash no longer knows of " + this.S + "; disposing."), this.e()) : f(Error("__FC_writeFrames failed? ret: " + b)))
};
p.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.lb);
  oe.d.c.call(this);
  var a = this.$a;
  delete this.$a;
  if(this.lb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(Id("__FC_close", this.S)))
    }catch(b) {
      je(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Jc = !0
    }
  }
  if(this.Jc) {
    a = this.Va, O(a.a, "oncrash"), se(a.N, !0)
  }else {
    this.Va.onclose()
  }
  delete this.Va;
  delete this.vd.Eb[this.S]
};
function te(a, b) {
  this.M = a;
  this.$a = b;
  this.Eb = {};
  this.Hd = "__FST_" + Jd();
  r[this.Hd] = z(this.Hg, this);
  var c = b.CallFunction(Id("__FC_setCallbackFunc", this.Hd));
  c != '"OK"' && f(Error("__FC_setCallbackFunc failed? ret: " + c))
}
C(te, L);
p = te.prototype;
p.a = R("cw.net.FlashSocketTracker");
p.s = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  G(this.Eb, a, b);
  a.push(">")
};
p.Ld = function(a) {
  a = new oe(this, a);
  return this.Eb[a.S] = a
};
p.Fg = function(a, b, c, d) {
  var e = this.Eb[a];
  e ? b == "frames" && d ? (pe(e, "ioerror", "FlashConnector hadError while handling data."), e.e()) : pe(e, b, c) : O(this.a, "Cannot dispatch because we have no instance: " + H([a, b, c, d]))
};
p.Hg = function(a, b, c, d) {
  try {
    Fd(this.M, this.Fg, this, [a, b, c, d])
  }catch(e) {
    r.window.setTimeout(function() {
      f(e)
    }, 0)
  }
};
p.c = function() {
  te.d.c.call(this);
  for(var a = Qa(this.Eb);a.length;) {
    a.pop().e()
  }
  delete this.Eb;
  delete this.$a;
  r[this.Hd] = i
};
function ue(a) {
  this.N = a;
  this.Wb = []
}
C(ue, L);
p = ue.prototype;
p.a = R("cw.net.FlashSocketConduit");
p.Ec = function(a) {
  this.Wb ? (Q(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Wb.push.apply(this.Wb, a)) : (Q(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.rd.Ec(a))
};
p.Jd = function(a, b) {
  this.rd.Jd(a, b)
};
p.onclose = function() {
  this.a.info("onclose");
  se(this.N, !1)
};
p.c = function() {
  this.a.info("in disposeInternal.");
  ue.d.c.call(this);
  this.rd.e();
  delete this.N
};
function ve() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function we(a) {
  return a * Math.PI / 180
}
;var Od = Math.pow(2, 53);
var xe = {tg:n("<cw.eq.Wildcard>")};
function ye(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function ze(a, b, c) {
  var d = ea(a), e = ea(b);
  if(a == xe || b == xe) {
    return!0
  }else {
    if(a != k && typeof a.n == "function") {
      return c && c.push("running custom equals function on left object"), a.n(b, c)
    }else {
      if(b != k && typeof b.n == "function") {
        return c && c.push("running custom equals function on right object"), b.n(a, c)
      }else {
        if(ye(d) || ye(e)) {
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
                    c && c.push("array length mismatch: " + a.length + ", " + b.length), a = !1
                  }else {
                    d = 0;
                    for(e = a.length;d < e;d++) {
                      if(!ze(a[d], b[d], c)) {
                        c && c.push("earlier comparisons indicate mismatch at array item #" + d);
                        a = !1;
                        break a
                      }
                    }
                    c && c.push("ascending from array");
                    a = !0
                  }
                }
              }else {
                if(a.sg == $b && b.sg == $b) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = !1;
                        break a
                      }
                      if(!ze(a[g], b[g], c)) {
                        c && c.push("earlier comparisons indicate mismatch at property " + g);
                        a = !1;
                        break a
                      }
                    }
                    for(g in b) {
                      if(!(g in a)) {
                        c && c.push("property " + g + " missing on left object");
                        a = !1;
                        break a
                      }
                    }
                    c && c.push("ascending from object");
                    a = !0
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
  D.call(this, a)
}
C(S, D);
S.prototype.name = "cw.net.InvalidFrame";
function Ae() {
  var a = [];
  this.oa(a);
  return a.join("")
}
function Be() {
}
Be.prototype.n = function(a, b) {
  return!(a instanceof Be) ? !1 : ze(Ce(this), Ce(a), b)
};
Be.prototype.s = function(a, b) {
  a.push("<HelloFrame properties=");
  G(Ce(this), a, b);
  a.push(">")
};
function Ce(a) {
  return[a.Sb, a.Xf, a.zf, a.$f, a.Ac, a.Ke, a.Qf, a.Mf, a.ne, a.Kf, a.og, a.ig, a.ra, a.dd]
}
Be.prototype.ga = Ae;
Be.prototype.oa = function(a) {
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
  b.sack = this.ra instanceof Ub ? Kd((new De(this.ra)).ga()) : this.ra;
  b.seenack = this.dd instanceof Ub ? Kd((new De(this.dd)).ga()) : this.dd;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new Db).qb(b), "H")
};
function Ee(a) {
  this.Rb = a
}
Ee.prototype.n = function(a) {
  return a instanceof Ee && this.Rb == a.Rb
};
Ee.prototype.s = function(a, b) {
  a.push("new StringFrame(");
  G(this.Rb, a, b);
  a.push(")")
};
Ee.prototype.ga = Ae;
Ee.prototype.oa = function(a) {
  a.push(this.Rb, " ")
};
function Fe(a) {
  this.Hc = a
}
Fe.prototype.n = function(a) {
  return a instanceof Fe && this.Hc == a.Hc
};
Fe.prototype.s = function(a, b) {
  a.push("new CommentFrame(");
  G(this.Hc, a, b);
  a.push(")")
};
Fe.prototype.ga = Ae;
Fe.prototype.oa = function(a) {
  a.push(this.Hc, "^")
};
function Ge(a) {
  this.yc = a
}
Ge.prototype.n = function(a) {
  return a instanceof Ge && this.yc == a.yc
};
Ge.prototype.s = function(a) {
  a.push("new SeqNumFrame(", String(this.yc), ")")
};
Ge.prototype.ga = Ae;
Ge.prototype.oa = function(a) {
  a.push(String(this.yc), "N")
};
function He(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return k
  }
  a: {
    var c = b[1], a = Od;
    if(Md.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
      var g = Nd(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Ub(a, c)
}
function De(a) {
  this.ra = a
}
De.prototype.n = function(a, b) {
  return a instanceof De && this.ra.n(a.ra, b)
};
De.prototype.s = function(a, b) {
  a.push("new SackFrame(");
  G(this.ra, a, b);
  a.push(")")
};
De.prototype.ga = Ae;
De.prototype.oa = function(a) {
  var b = this.ra;
  a.push(b.pb.join(","), "|", String(b.vb));
  a.push("A")
};
function Ie(a) {
  this.nc = a
}
Ie.prototype.n = function(a, b) {
  return a instanceof Ie && this.nc.n(a.nc, b)
};
Ie.prototype.s = function(a, b) {
  a.push("new StreamStatusFrame(");
  G(this.nc, a, b);
  a.push(")")
};
Ie.prototype.ga = Ae;
Ie.prototype.oa = function(a) {
  var b = this.nc;
  a.push(b.pb.join(","), "|", String(b.vb));
  a.push("T")
};
function Je() {
}
Je.prototype.s = function(a) {
  a.push("new StreamCreatedFrame()")
};
Je.prototype.n = function(a) {
  return a instanceof Je
};
Je.prototype.ga = Ae;
Je.prototype.oa = function(a) {
  a.push("C")
};
function Ke() {
}
Ke.prototype.s = function(a) {
  a.push("new YouCloseItFrame()")
};
Ke.prototype.n = function(a) {
  return a instanceof Ke
};
Ke.prototype.ga = Ae;
Ke.prototype.oa = function(a) {
  a.push("Y")
};
function Le(a, b) {
  this.sc = a;
  this.Vb = b
}
Le.prototype.n = function(a) {
  return a instanceof Le && this.sc == a.sc && this.Vb == a.Vb
};
Le.prototype.s = function(a, b) {
  a.push("new ResetFrame(");
  G(this.sc, a, b);
  a.push(", ", String(this.Vb), ")")
};
Le.prototype.ga = Ae;
Le.prototype.oa = function(a) {
  a.push(this.sc, "|", String(Number(this.Vb)), "!")
};
var Me = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Ne(a) {
  this.reason = a
}
Ne.prototype.n = function(a) {
  return a instanceof Ne && this.reason == a.reason
};
Ne.prototype.s = function(a, b) {
  a.push("new TransportKillFrame(");
  G(this.reason, a, b);
  a.push(")")
};
Ne.prototype.ga = Ae;
Ne.prototype.oa = function(a) {
  a.push(this.reason, "K")
};
function Oe(a) {
  a || f(new S("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new Ee(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = He(Kd(a)), a == k && f(new S("bad sack")), new De(a)
    }else {
      if(b == "N") {
        return a = Nd(Kd(a)), a == k && f(new S("bad seqNum")), new Ge(a)
      }else {
        if(b == "T") {
          return a = He(Kd(a)), a == k && f(new S("bad lastSackSeen")), new Ie(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && f(new S("leading garbage")), new Ke
          }else {
            if(b == "^") {
              return new Fe(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && f(new S("leading garbage")), new Je
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && f(new S("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == k && f(new S("bad applicationLevel")), new Le(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = Me[a], a == k && f(new S("unknown kill reason: " + a)), new Ne(a)
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
;var Pe = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Qe(a, b) {
  var c = a.match(Pe), d = b.match(Pe);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Re(a, b) {
  var c;
  a instanceof Re ? (this.Ob(b == k ? a.ya : b), Se(this, a.sa), Te(this, a.tb), Ue(this, a.na), Ve(this, a.Ta), this.rb(a.z), We(this, a.U.A()), Xe(this, a.fb)) : a && (c = String(a).match(Pe)) ? (this.Ob(!!b), Se(this, c[1] || "", !0), Te(this, c[2] || "", !0), Ue(this, c[3] || "", !0), Ve(this, c[4]), this.rb(c[5] || "", !0), We(this, c[6] || "", !0), Xe(this, c[7] || "", !0)) : (this.Ob(!!b), this.U = new Ye(k, this, this.ya))
}
p = Re.prototype;
p.sa = "";
p.tb = "";
p.na = "";
p.Ta = k;
p.z = "";
p.fb = "";
p.Yg = !1;
p.ya = !1;
p.toString = function() {
  if(this.ua) {
    return this.ua
  }
  var a = [];
  this.sa && a.push(Ze(this.sa, $e), ":");
  this.na && (a.push("//"), this.tb && a.push(Ze(this.tb, $e), "@"), a.push(u(this.na) ? encodeURIComponent(this.na) : k), this.Ta != k && a.push(":", String(this.Ta)));
  this.z && (this.na && this.z.charAt(0) != "/" && a.push("/"), a.push(Ze(this.z, this.z.charAt(0) == "/" ? af : bf)));
  var b = String(this.U);
  b && a.push("?", b);
  this.fb && a.push("#", Ze(this.fb, cf));
  return this.ua = a.join("")
};
p.A = function() {
  var a = this.sa, b = this.tb, c = this.na, d = this.Ta, e = this.z, g = this.U.A(), h = this.fb, j = new Re(k, this.ya);
  a && Se(j, a);
  b && Te(j, b);
  c && Ue(j, c);
  d && Ve(j, d);
  e && j.rb(e);
  g && We(j, g);
  h && Xe(j, h);
  return j
};
function Se(a, b, c) {
  df(a);
  delete a.ua;
  a.sa = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.sa) {
    a.sa = a.sa.replace(/:$/, "")
  }
}
function Te(a, b, c) {
  df(a);
  delete a.ua;
  a.tb = c ? b ? decodeURIComponent(b) : "" : b
}
function Ue(a, b, c) {
  df(a);
  delete a.ua;
  a.na = c ? b ? decodeURIComponent(b) : "" : b
}
function Ve(a, b) {
  df(a);
  delete a.ua;
  b ? (b = Number(b), (isNaN(b) || b < 0) && f(Error("Bad port number " + b)), a.Ta = b) : a.Ta = k
}
p.rb = function(a, b) {
  df(this);
  delete this.ua;
  this.z = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function We(a, b, c) {
  df(a);
  delete a.ua;
  b instanceof Ye ? (a.U = b, a.U.Pe = a, a.U.Ob(a.ya)) : (c || (b = Ze(b, ef)), a.U = new Ye(b, a, a.ya))
}
function Xe(a, b, c) {
  df(a);
  delete a.ua;
  a.fb = c ? b ? decodeURIComponent(b) : "" : b
}
function df(a) {
  a.Yg && f(Error("Tried to modify a read-only Uri"))
}
p.Ob = function(a) {
  this.ya = a;
  this.U && this.U.Ob(a);
  return this
};
function ff(a) {
  return a instanceof Re ? a.A() : new Re(a, i)
}
var gf = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Ze(a, b) {
  var c = k;
  u(a) && (c = a, gf.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, hf)));
  return c
}
function hf(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var $e = /[#\/\?@]/g, bf = /[\#\?:]/g, af = /[\#\?]/g, ef = /[\#\?@]/g, cf = /#/g;
function Ye(a, b, c) {
  this.Da = a || k;
  this.Pe = b || k;
  this.ya = !!c
}
function jf(a) {
  if(!a.o && (a.o = new Ob, a.f = 0, a.Da)) {
    for(var b = a.Da.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, g = k;
      d >= 0 ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = kf(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
p = Ye.prototype;
p.o = k;
p.f = k;
p.W = function() {
  jf(this);
  return this.f
};
p.add = function(a, b) {
  jf(this);
  lf(this);
  a = kf(this, a);
  if(this.ea(a)) {
    var c = this.o.get(a);
    t(c) ? c.push(b) : this.o.set(a, [c, b])
  }else {
    this.o.set(a, b)
  }
  this.f++;
  return this
};
p.remove = function(a) {
  jf(this);
  a = kf(this, a);
  if(this.o.ea(a)) {
    lf(this);
    var b = this.o.get(a);
    t(b) ? this.f -= b.length : this.f--;
    return this.o.remove(a)
  }
  return!1
};
p.clear = function() {
  lf(this);
  this.o && this.o.clear();
  this.f = 0
};
p.Qa = function() {
  jf(this);
  return this.f == 0
};
p.ea = function(a) {
  jf(this);
  a = kf(this, a);
  return this.o.ea(a)
};
p.Ic = function(a) {
  var b = this.Y();
  return Ya(b, a)
};
p.Ha = function() {
  jf(this);
  for(var a = this.o.Y(), b = this.o.Ha(), c = [], d = 0;d < b.length;d++) {
    var e = a[d];
    if(t(e)) {
      for(var g = 0;g < e.length;g++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
p.Y = function(a) {
  jf(this);
  if(a) {
    if(a = kf(this, a), this.ea(a)) {
      var b = this.o.get(a);
      if(t(b)) {
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
      t(d) ? cb(a, d) : a.push(d)
    }
  }
  return a
};
p.set = function(a, b) {
  jf(this);
  lf(this);
  a = kf(this, a);
  if(this.ea(a)) {
    var c = this.o.get(a);
    t(c) ? this.f -= c.length : this.f--
  }
  this.o.set(a, b);
  this.f++;
  return this
};
p.get = function(a, b) {
  jf(this);
  a = kf(this, a);
  if(this.ea(a)) {
    var c = this.o.get(a);
    return t(c) ? c[0] : c
  }else {
    return b
  }
};
p.toString = function() {
  if(this.Da) {
    return this.Da
  }
  if(!this.o) {
    return""
  }
  for(var a = [], b = 0, c = this.o.Ha(), d = 0;d < c.length;d++) {
    var e = c[d], g = sa(e), e = this.o.get(e);
    if(t(e)) {
      for(var h = 0;h < e.length;h++) {
        b > 0 && a.push("&"), a.push(g), e[h] !== "" && a.push("=", sa(e[h])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(g), e !== "" && a.push("=", sa(e)), b++
    }
  }
  return this.Da = a.join("")
};
function lf(a) {
  delete a.Bb;
  delete a.Da;
  a.Pe && delete a.Pe.ua
}
p.A = function() {
  var a = new Ye;
  if(this.Bb) {
    a.Bb = this.Bb
  }
  if(this.Da) {
    a.Da = this.Da
  }
  if(this.o) {
    a.o = this.o.A()
  }
  return a
};
function kf(a, b) {
  var c = String(b);
  a.ya && (c = c.toLowerCase());
  return c
}
p.Ob = function(a) {
  a && !this.ya && (jf(this), lf(this), Mb(this.o, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ya = a
};
p.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Mb(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
var mf;
function nf(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function of(a, b) {
  var c = nf(a), d = eb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    Ya(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function pf(a, b) {
  var c = nf(a), d = eb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < e.length;h++) {
    Ya(d, e[h]) && (db(e, h--, 1), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
;function T(a, b) {
  this.width = a;
  this.height = b
}
p = T.prototype;
p.A = function() {
  return new T(this.width, this.height)
};
p.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
p.Qa = function() {
  return!(this.width * this.height)
};
p.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
p.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
p.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
p.scale = function(a) {
  this.width *= a;
  this.height *= a;
  return this
};
var qf = !I || wc();
!jc && !I || I && wc() || jc && K("1.9.1");
var rf = I && !K("9");
function sf(a) {
  return a ? new tf(uf(a)) : mf || (mf = new tf)
}
function U(a) {
  return u(a) ? document.getElementById(a) : a
}
function vf(a, b, c, d) {
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
      b = h.className, typeof b.split == "function" && Ya(b.split(/\s+/), c) && (d[e++] = h)
    }
    d.length = e;
    return d
  }else {
    return a
  }
}
function wf(a, b) {
  Pa(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in xf ? a.setAttribute(xf[d], b) : d.lastIndexOf("aria-", 0) == 0 ? a.setAttribute(d, b) : a[d] = b
  })
}
var xf = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function yf(a, b, c) {
  return zf(document, arguments)
}
function zf(a, b) {
  var c = b[0], d = b[1];
  if(!qf && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', ua(d.name), '"');
    if(d.type) {
      c.push(' type="', ua(d.type), '"');
      var e = {};
      Ta(e, d);
      d = e;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  if(d) {
    u(d) ? c.className = d : t(d) ? of.apply(k, [c].concat(d)) : wf(c, d)
  }
  b.length > 2 && Af(a, c, b, 2);
  return c
}
function Af(a, b, c, d) {
  function e(c) {
    c && b.appendChild(u(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && g.nodeType > 0) ? F(Bf(g) ? bb(g) : g, e) : e(g)
  }
}
function Cf(a, b) {
  Af(uf(a), a, arguments, 1)
}
function Df(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function Ef(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Ff(a, b) {
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
function uf(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
function Gf(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && a.firstChild.nodeType == 3) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      Df(a), a.appendChild(uf(a).createTextNode(b))
    }
  }
}
var Hf = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, If = {IMG:" ", BR:"\n"};
function Jf(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ja(a) && a >= 0 && a < 32768) : !1
}
function Kf(a) {
  var b = [];
  Lf(a, b, !1);
  return b.join("")
}
function Lf(a, b, c) {
  if(!(a.nodeName in Hf)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in If) {
        b.push(If[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Lf(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Bf(a) {
  if(a && typeof a.length == "number") {
    if(ia(a)) {
      return typeof a.item == "function" || typeof a.item == "string"
    }else {
      if(x(a)) {
        return typeof a.item == "function"
      }
    }
  }
  return!1
}
function tf(a) {
  this.B = a || r.document || document
}
p = tf.prototype;
p.Ga = sf;
p.b = function(a) {
  return u(a) ? this.B.getElementById(a) : a
};
p.i = function(a, b, c) {
  return zf(this.B, arguments)
};
p.createElement = function(a) {
  return this.B.createElement(a)
};
p.createTextNode = function(a) {
  return this.B.createTextNode(a)
};
p.bf = function(a, b, c) {
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
p.appendChild = function(a, b) {
  a.appendChild(b)
};
p.append = Cf;
p.contains = Ff;
function Mf(a, b, c, d) {
  this.contentWindow = a;
  this.Nc = b;
  this.Le = c;
  this.Mg = d
}
Mf.prototype.s = function(a, b) {
  a.push("<XDRFrame frameId=");
  G(this.Mg, a, b);
  a.push(", expandedUrl=");
  G(this.Nc, a, b);
  a.push(", streams=");
  G(this.Le, a, b);
  a.push(">")
};
function Nf() {
  this.frames = [];
  this.le = new Ob
}
Nf.prototype.a = R("cw.net.XDRTracker");
function Of(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + String(Math.floor(ve())) + String(Math.floor(ve()))
  })
}
function Pf(a, b) {
  for(var c = Qf, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = e.Le.length == 0) {
      g = e.Nc;
      var h = String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + H(b) + " existing frame " + H(e)), Cd(e)
    }
  }
  d = Jd() + Jd();
  e = Of(a);
  g = r.location;
  g instanceof Re || (g = ff(g));
  e instanceof Re || (e = ff(e));
  var j = g;
  g = j.A();
  (h = !!e.sa) ? Se(g, e.sa) : h = !!e.tb;
  h ? Te(g, e.tb) : h = !!e.na;
  h ? Ue(g, e.na) : h = e.Ta != k;
  var l = e.z;
  if(h) {
    Ve(g, e.Ta)
  }else {
    if(h = !!e.z) {
      if(l.charAt(0) != "/" && (j.na && !j.z ? l = "/" + l : (j = g.z.lastIndexOf("/"), j != -1 && (l = g.z.substr(0, j + 1) + l))), l == ".." || l == ".") {
        l = ""
      }else {
        if(!(l.indexOf("./") == -1 && l.indexOf("/.") == -1)) {
          for(var j = l.lastIndexOf("/", 0) == 0, l = l.split("/"), o = [], v = 0;v < l.length;) {
            var q = l[v++];
            q == "." ? j && v == l.length && o.push("") : q == ".." ? ((o.length > 1 || o.length == 1 && o[0] != "") && o.pop(), j && v == l.length && o.push("")) : (o.push(q), j = !0)
          }
          l = o.join("/")
        }
      }
    }
  }
  h ? g.rb(l) : h = e.U.toString() !== "";
  if(h) {
    j = e.U;
    if(!j.Bb) {
      j.Bb = j.toString() ? decodeURIComponent(j.toString()) : ""
    }
    We(g, j.Bb, i)
  }else {
    h = !!e.fb
  }
  h && Xe(g, e.fb);
  e = g.toString();
  g = String(r.location).match(Pe)[3] || k;
  h = e.match(Pe)[3] || k;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + H(b)), c = Cd(new Mf(r, e, [b], k))) : (g = U("minerva-elements"), h = new rd, c.le.set(d, [h, e, b]), c.a.info("Creating new XDRFrame " + H(d) + "for " + H(b)), c = yf("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + d}), g.appendChild(c), c = h);
  return c
}
Nf.prototype.Ih = function(a) {
  var b = this.le.get(a);
  b || f(Error("Unknown frameId " + H(a)));
  this.le.remove(b);
  var c = b[0], a = new Mf(U("minerva-xdrframe-" + a).contentWindow || (J ? U("minerva-xdrframe-" + a).document || U("minerva-xdrframe-" + a).contentWindow.document : U("minerva-xdrframe-" + a).contentDocument || U("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (J ? U("minerva-xdrframe-" + a).document || U("minerva-xdrframe-" + a).contentWindow.document : U("minerva-xdrframe-" + a).contentDocument || U("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  xd(c, a)
};
var Qf = new Nf;
r.__XHRTracker_xdrFrameLoaded = z(Qf.Ih, Qf);
var Rf;
Rf = !1;
var Sf = fc();
Sf && (Sf.indexOf("Firefox") != -1 || Sf.indexOf("Camino") != -1 || Sf.indexOf("iPhone") != -1 || Sf.indexOf("iPod") != -1 || Sf.indexOf("iPad") != -1 || Sf.indexOf("Android") != -1 || Sf.indexOf("Chrome") != -1 && (Rf = !0));
var Tf = Rf;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function Uf(a, b, c, d, e, g) {
  rd.call(this, e, g);
  this.If = a;
  this.Nd = [];
  this.lf = !!b;
  this.Kg = !!c;
  this.Ag = !!d;
  for(b = 0;b < a.length;b++) {
    zd(a[b], z(this.uf, this, b, !0), z(this.uf, this, b, !1))
  }
  a.length == 0 && !this.lf && xd(this, this.Nd)
}
C(Uf, rd);
Uf.prototype.Sf = 0;
Uf.prototype.uf = function(a, b, c) {
  this.Sf++;
  this.Nd[a] = [b, c];
  this.Na || (this.lf && b ? xd(this, [a, c]) : this.Kg && !b ? this.dc(c) : this.Sf == this.If.length && xd(this, this.Nd));
  this.Ag && !b && (c = k);
  return c
};
Uf.prototype.dc = function(a) {
  Uf.d.dc.call(this, a);
  F(this.If, function(a) {
    a.cancel()
  })
};
function Vf(a) {
  a = new Uf(a, !1, !0);
  yd(a, function(a) {
    return Va(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function Wf(a, b) {
  this.Gh = a;
  this.Lf = b
}
Wf.prototype.ie = 0;
Wf.prototype.gd = 0;
Wf.prototype.Ud = !1;
function Xf(a) {
  var b = [];
  if(a.Ud) {
    return[b, 2]
  }
  var c = a.ie, d = a.Gh.responseText;
  for(a.ie = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var e = d.substr(a.gd, c - a.gd), e = e.replace(/\r$/, "");
    if(e.length > a.Lf) {
      return a.Ud = !0, [b, 2]
    }
    b.push(e);
    a.gd = c += 1
  }
  return a.ie - a.gd - 1 > a.Lf ? (a.Ud = !0, [b, 2]) : [b, 1]
}
;function Yf(a, b, c) {
  this.N = b;
  this.qa = a;
  this.Kd = c
}
C(Yf, L);
p = Yf.prototype;
p.a = R("cw.net.XHRMaster");
p.Xa = -1;
p.me = function(a, b, c) {
  this.Kd.__XHRSlave_makeRequest(this.qa, a, b, c)
};
p.Pa = m("Xa");
p.qe = function(a, b) {
  b != 1 && je(this.a, H(this.qa) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  qe(this.N);
  re(this.N, a)
};
p.re = function(a) {
  P(this.a, "ongotheaders_: " + H(a));
  var b = k;
  "Content-Length" in a && (b = Nd(a["Content-Length"]));
  a = this.N;
  P(a.a, a.t() + " got Content-Length: " + b);
  a.za == Zf && (b == k && (O(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), $f(a, 2E3 + b / 3072 * 1E3))
};
p.se = function(a) {
  a != 1 && P(this.a, this.N.t() + "'s XHR's readyState is " + a);
  this.Xa = a;
  this.Xa >= 2 && qe(this.N)
};
p.pe = function() {
  this.N.e()
};
p.c = function() {
  Yf.d.c.call(this);
  delete ag.Ia[this.qa];
  this.Kd.__XHRSlave_dispose(this.qa);
  delete this.Kd
};
function bg() {
  this.Ia = {}
}
C(bg, L);
p = bg.prototype;
p.a = R("cw.net.XHRMasterTracker");
p.Ld = function(a, b) {
  var c = "_" + Jd(), d = new Yf(c, a, b);
  return this.Ia[c] = d
};
p.qe = function(a, b, c) {
  var b = ab(b), d = this.Ia[a];
  d ? d.qe(b, c) : je(this.a, "onframes_: no master for " + H(a))
};
p.re = function(a, b) {
  var c = this.Ia[a];
  c ? c.re(b) : je(this.a, "ongotheaders_: no master for " + H(a))
};
p.se = function(a, b) {
  var c = this.Ia[a];
  c ? c.se(b) : je(this.a, "onreadystatechange_: no master for " + H(a))
};
p.pe = function(a) {
  var b = this.Ia[a];
  b ? (delete this.Ia[b.qa], b.pe()) : je(this.a, "oncomplete_: no master for " + H(a))
};
p.c = function() {
  bg.d.c.call(this);
  for(var a = Qa(this.Ia);a.length;) {
    a.pop().e()
  }
  delete this.Ia
};
var ag = new bg;
r.__XHRMaster_onframes = z(ag.qe, ag);
r.__XHRMaster_oncomplete = z(ag.pe, ag);
r.__XHRMaster_ongotheaders = z(ag.re, ag);
r.__XHRMaster_onreadystatechange = z(ag.se, ag);
function cg(a, b, c) {
  this.host = a;
  this.port = b;
  this.Bh = c
}
function dg(a, b) {
  b || (b = a);
  this.Ua = a;
  this.Ya = b
}
dg.prototype.s = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  G(this.Ua, a, b);
  a.push(", secondaryUrl=");
  G(this.Ya, a, b);
  a.push(">")
};
function eg(a, b, c, d) {
  this.Ua = a;
  this.Wf = b;
  this.Ya = c;
  this.fg = d;
  (!(this.Ua.indexOf("http://") == 0 || this.Ua.indexOf("https://") == 0) || !(this.Ya.indexOf("http://") == 0 || this.Ya.indexOf("https://") == 0)) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Wf.location.href;
  Qe(this.Ua, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.fg.location.href;
  Qe(this.Ya, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
eg.prototype.s = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  G(this.Ua, a, b);
  a.push(", secondaryUrl=");
  G(this.Ya, a, b);
  a.push(">")
};
var fg = new Fe(";)]}");
function gg() {
}
gg.prototype.pf = n(1);
function hg(a) {
  this.uh = a
}
hg.prototype.s = function(a, b) {
  a.push("<UserContext for ");
  G(this.uh, a, b);
  a.push(">")
};
function ig(a, b, c) {
  this.Q = a;
  this.vh = b ? b : new gg;
  this.M = c ? c : Gd;
  this.Cc = new Pd;
  this.Ac = Jd() + Jd();
  this.Wa = new Vb;
  this.fe = new Xb;
  this.Dc = k;
  this.xd = [];
  this.Tb = new hg(this);
  if(J) {
    this.Dc = dd(r, "load", this.nh, !1, this)
  }
}
C(ig, L);
p = ig.prototype;
p.a = R("cw.net.ClientStream");
p.Gf = new Ub(-1, []);
p.Hf = new Ub(-1, []);
p.dh = 50;
p.bh = 1048576;
p.te = k;
p.onreset = k;
p.Uf = k;
p.Ie = !1;
p.xe = !1;
p.h = 1;
p.mg = -1;
p.k = k;
p.F = k;
p.tc = k;
p.Je = 0;
p.Vf = 0;
p.eg = 0;
p.s = function(a, b) {
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
function jg(a) {
  var b = [-1];
  a.k && b.push(a.k.Mb);
  a.F && b.push(a.F.Mb);
  return Math.max.apply(Math.max, b)
}
function kg(a) {
  if(a.h != 1) {
    var b = a.Wa.v.W() != 0, c = Yb(a.fe), d = !c.n(a.Hf) && !(a.k && c.n(a.k.Jb) || a.F && c.n(a.F.Jb)), e = jg(a);
    if((b = b && e < a.Wa.Ab) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.k.Xb) {
        Q(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.k, c != d.Jb)) {
          !d.Ja && !d.I.length && lg(d), d.I.push(new De(c)), d.Jb = c
        }
        b && mg(a.k, a.Wa, e + 1);
        a.k.Fa()
      }else {
        a.F == k ? a.Ie ? (Q(a.a, "tryToSend_: creating secondary to send " + g), a.F = ng(a, !1), b && mg(a.F, a.Wa, e + 1), a.F.Fa()) : (Q(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.xe = !0) : Q(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
p.nh = function() {
  this.Dc = k;
  if(this.k && this.k.Fb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.k;
    a.Bd = !0;
    a.e()
  }
  if(this.F && this.F.Fb()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.F, a.Bd = !0, a.e()
  }
};
function og(a, b) {
  var c;
  fa(c) || (c = !0);
  a.h > 3 && f(Error("sendStrings: Can't send strings in state " + a.h));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || f(Error("sendStrings: string #" + c + " has illegal chars: " + H(d)))
      }
    }
    a.Wa.extend(b);
    kg(a)
  }
}
function ng(a, b) {
  var c;
  a.Q instanceof eg ? c = a.vh.pf() == 1 ? Zf : pg : a.Q instanceof cg ? c = qg : f(Error("Don't support endpoint " + H(a.Q)));
  a.mg += 1;
  c = new rg(a.M, a, a.mg, c, a.Q, b);
  Q(a.a, "Created: " + c.t());
  a.Cc.add(c);
  return c
}
function sg(a, b, c) {
  var d = new tg(a.M, a, b, c);
  Q(a.a, "Created: " + d.t() + ", delay=" + b + ", times=" + c);
  a.Cc.add(d);
  return d
}
function ug(a, b) {
  a.Cc.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  P(a.a, "Offline: " + b.t());
  b.rc ? a.Je += b.rc : a.Je = 0;
  a.Je >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.Tb, "stream penalty reached limit", !1), a.e());
  if(a.h > 3) {
    a.h == 4 && b.rg ? (P(a.a, "Disposing because resettingTransport_ is done."), a.e()) : P(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    var c;
    var d;
    c = b instanceof tg;
    if(!c && b.Bd) {
      var e = J ? Tf ? [0, 1] : [9, 20] : [0, 0];
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
        var g = 2E3 * Math.min(e, 3), h = Math.floor(Math.random() * 4E3) - 2E3, j = Math.max(0, b.ng - b.Ne);
        d = (c = Math.max(0, g + h - j)) ? 1 : 0;
        Q(a.a, "getDelayForNextTransport_: " + H({count:e, base:g, variance:h, oldDuration:j, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    if(b == a.k) {
      a.k = k, c ? a.k = sg(a, e, c) : (e = jg(a), a.k = ng(a, !0), mg(a.k, a.Wa, e + 1)), a.k.Fa()
    }else {
      if(b == a.F) {
        a.F = k, c ? (a.F = sg(a, e, c), a.F.Fa()) : kg(a)
      }
    }
  }
}
p.reset = function(a) {
  this.h > 3 && f(Error("reset: Can't send reset in state " + this.h));
  this.h = 4;
  this.k && this.k.Xb ? (this.a.info("reset: Sending ResetFrame over existing primary."), vg(this.k, a), this.k.Fa()) : (this.k && (P(this.a, "reset: Disposing primary before sending ResetFrame."), this.k.e()), this.F && (P(this.a, "reset: Disposing secondary before sending ResetFrame."), this.F.e()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.tc = ng(this, !1), vg(this.tc, a), this.tc.Fa());
  this.onreset && this.onreset.call(this.Tb, a, !0)
};
function wg(a, b, c, d) {
  var e;
  e = a.fe;
  for(var g = a.dh, h = a.bh, j = [], l = !1, o = 0, v = c.length;o < v;o++) {
    var q = c[o], w = q[0], q = q[1];
    if(w == e.Ib + 1) {
      e.Ib += 1;
      for(j.push(q);;) {
        w = e.Ib + 1;
        q = e.ab.get(w, Zb);
        if(q === Zb) {
          break
        }
        j.push(q[0]);
        e.ab.remove(w);
        e.w -= q[1];
        e.Ib = w
      }
    }else {
      if(!(w <= e.Ib)) {
        if(g != k && e.ab.W() >= g) {
          l = !0;
          break
        }
        var B = Tb(q);
        if(h != k && e.w + B > h) {
          l = !0;
          break
        }
        e.ab.set(w, [q, B]);
        e.w += B
      }
    }
  }
  e.ab.Qa() && e.ab.clear();
  e = [j, l];
  c = e[0];
  e = e[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(h = c[g], a.te && a.te.call(a.Tb, h), a.h == 4 || a.va) {
        return
      }
    }
  }
  d || kg(a);
  if(!(a.h == 4 || a.va) && e) {
    je(b.a, b.t() + "'s peer caused rwin overflow."), b.e()
  }
}
p.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  this.h != 1 && f(Error("ClientStream.start: " + H(this) + " already started"));
  this.h = 2;
  if(this.Q instanceof dg) {
    var a = Pf(this.Q.Ua, this), b = Pf(this.Q.Ya, this);
    yd(Vf([a, b]), z(this.Jg, this))
  }else {
    xg(this)
  }
};
p.Jg = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Nc, e = a[1].Nc;
  this.xd.push(a[0]);
  this.xd.push(a[1]);
  this.Q = new eg(d, b, e, c);
  xg(this)
};
function xg(a) {
  a.h = 3;
  a.k = ng(a, !0);
  mg(a.k, a.Wa, k);
  a.k.Fa()
}
p.c = function() {
  this.a.info(H(this) + " in disposeInternal.");
  this.h = 5;
  for(var a = this.Cc.Y(), b = 0;b < a.length;b++) {
    a[b].e()
  }
  for(a = 0;a < this.xd.length;a++) {
    $a(this.xd[a].Le, this)
  }
  if(J && this.Dc) {
    gd(this.Dc), this.Dc = k
  }
  this.Uf && this.Uf.call(this.Tb);
  delete this.Cc;
  delete this.k;
  delete this.F;
  delete this.tc;
  delete this.Tb;
  ig.d.c.call(this)
};
var Zf = 1, pg = 2, qg = 3;
function rg(a, b, c, d, e, g) {
  this.M = a;
  this.H = b;
  this.Sb = c;
  this.za = d;
  this.Q = e;
  this.I = [];
  this.xb = g;
  this.Xb = !this.Fb();
  this.Nb = this.za != Zf;
  this.xg = z(this.zh, this)
}
C(rg, L);
p = rg.prototype;
p.a = R("cw.net.ClientTransport");
p.q = k;
p.Ne = k;
p.ng = k;
p.jd = k;
p.Ja = !1;
p.sd = !1;
p.Jb = k;
p.Wd = 0;
p.Mb = -1;
p.ve = -1;
p.rg = !1;
p.Bd = !1;
p.rc = 0;
p.ic = !1;
p.s = function(a) {
  a.push("<ClientTransport #", String(this.Sb), ", becomePrimary=", String(this.xb), ">")
};
p.t = function() {
  return(this.xb ? "Prim. T#" : "Sec. T#") + this.Sb
};
p.Ye = function() {
  return!(!this.ic && this.Wd)
};
p.Fb = function() {
  return this.za == Zf || this.za == pg
};
function yg(a, b) {
  fb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  wg(a.H, a, b, !a.Nb)
}
function zg(a, b, c) {
  try {
    var d = Oe(b);
    a.Wd += 1;
    P(a.a, a.t() + " RECV " + H(d));
    var e;
    a.Wd == 1 && !d.n(fg) && a.Fb() ? (O(a.a, a.t() + " is closing soon because got bad preamble: " + H(d)), e = !0) : e = !1;
    if(e) {
      return!0
    }
    if(d instanceof Ee) {
      if(!/^([ -~]*)$/.test(d.Rb)) {
        return a.ic = !0
      }
      a.ve += 1;
      c.push([a.ve, d.Rb])
    }else {
      if(d instanceof De) {
        var g = a.H, h = d.ra;
        g.Gf = h;
        var j = g.Wa, l = h.vb, c = !1;
        l > j.Ab && (c = !0);
        for(var o = Wb(j).concat(), d = 0;d < o.length;d++) {
          var v = o[d];
          if(v > l) {
            break
          }
          var q = j.v.p[v][1];
          j.v.remove(v);
          j.w -= q
        }
        for(d = 0;d < h.pb.length;d++) {
          var w = h.pb[d];
          w > j.Ab && (c = !0);
          j.v.ea(w) && (q = j.v.p[w][1], j.v.remove(w), j.w -= q)
        }
        j.v.Qa() && j.v.clear();
        if(c) {
          return O(a.a, a.t() + " is closing soon because got bad SackFrame"), a.ic = !0
        }
      }else {
        if(d instanceof Ge) {
          a.ve = d.yc - 1
        }else {
          if(d instanceof Ie) {
            a.H.Hf = d.nc
          }else {
            if(d instanceof Ke) {
              return Q(a.a, a.t() + " is closing soon because got YouCloseItFrame"), !0
            }else {
              if(d instanceof Ne) {
                return a.ic = !0, d.reason == "stream_attach_failure" ? a.rc += 1 : d.reason == "acked_unsent_strings" && (a.rc += 0.5), Q(a.a, a.t() + " is closing soon because got " + H(d)), !0
              }else {
                if(!(d instanceof Fe)) {
                  if(d instanceof Je) {
                    var B = a.H, vj = !a.Nb;
                    Q(B.a, "Stream is now confirmed to exist at server.");
                    B.Ie = !0;
                    if(B.xe && !vj) {
                      B.xe = !1, kg(B)
                    }
                  }else {
                    if(c.length && (yg(a, c), Za(c)), d instanceof Le) {
                      var ld = a.H;
                      ld.onreset && ld.onreset.call(ld.Tb, d.sc, d.Vb);
                      ld.e();
                      return!0
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
  }catch(eh) {
    return eh instanceof S || f(eh), O(a.a, a.t() + " is closing soon because got InvalidFrame: " + H(b)), a.ic = !0
  }
  return!1
}
function re(a, b) {
  a.sd = !0;
  try {
    for(var c = !1, d = [], e = 0, g = b.length;e < g;e++) {
      if(a.va) {
        a.a.info(a.t() + " returning from loop because we're disposed.");
        return
      }
      if(c = zg(a, b[e], d)) {
        break
      }
    }
    d.length && yg(a, d);
    a.sd = !1;
    a.I.length && a.Fa();
    c && (Q(a.a, a.t() + " closeSoon is true.  Frames were: " + H(b)), a.e())
  }finally {
    a.sd = !1
  }
}
p.zh = function() {
  O(this.a, this.t() + " timed out due to lack of connection or no data being received.");
  this.e()
};
function Ag(a) {
  if(a.jd != k) {
    a.M.O.clearTimeout(a.jd), a.jd = k
  }
}
function $f(a, b) {
  Ag(a);
  b = Math.round(b);
  a.jd = a.M.O.setTimeout(a.xg, b);
  P(a.a, a.t() + "'s receive timeout set to " + b + " ms.")
}
function qe(a) {
  a.za != Zf && (a.za == qg || a.za == pg ? $f(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.za)))
}
function lg(a) {
  var b = new Be;
  b.Sb = a.Sb;
  b.Xf = 2;
  b.zf = 2;
  if(!a.H.Ie) {
    b.$f = !0
  }
  b.Ac = a.H.Ac;
  b.Ke = a.Nb;
  if(b.Ke) {
    b.Qf = 4096
  }
  b.Mf = 3E5;
  b.Kf = a.Nb ? Math.floor(10) : 0;
  b.og = !1;
  if(a.xb) {
    b.ig = k, b.ne = Math.floor((a.Nb ? 358E4 : 25E3) / 1E3)
  }
  b.ra = Yb(a.H.fe);
  b.dd = a.H.Gf;
  a.I.push(b);
  a.Jb = b.ra
}
function se(a, b) {
  b && (a.rc += 0.5);
  a.e()
}
p.Fa = function() {
  this.Ja && !this.Xb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.sd) {
    Q(this.a, this.t() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ja;
    this.Ja = !0;
    !a && !this.I.length && lg(this);
    for(a = 0;a < this.I.length;a++) {
      P(this.a, this.t() + " SEND " + H(this.I[a]))
    }
    if(this.Fb()) {
      for(var a = [], b = 0, c = this.I.length;b < c;b++) {
        this.I[b].oa(a), a.push("\n")
      }
      this.I = [];
      a = a.join("");
      b = this.xb ? this.Q.Ua : this.Q.Ya;
      this.q = ag.Ld(this, this.xb ? this.Q.Wf : this.Q.fg);
      this.Ne = this.M.O === pd ? A() : this.M.O.getTime();
      this.q.me(b, "POST", a);
      $f(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.Nb ? 0 : this.xb ? 25E3 : 0))
    }else {
      if(this.za == qg) {
        a = [];
        b = 0;
        for(c = this.I.length;b < c;b++) {
          a.push(this.I[b].ga())
        }
        this.I = [];
        this.q ? this.q.Ec(a) : (b = this.Q, this.q = new ue(this), this.q.rd = b.Bh.Ld(this.q), this.Ne = this.M.O === pd ? A() : this.M.O.getTime(), this.q.Jd(b.host, b.port), this.q.va || (this.q.Ec(a), this.q.va || $f(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.za))
      }
    }
  }
};
function mg(a, b, c) {
  !a.Ja && !a.I.length && lg(a);
  for(var c = Math.max(c, a.Mb + 1), b = b.qf(c), c = 0, d = b.length;c < d;c++) {
    var e = b[c], g = e[0], e = e[1];
    (a.Mb == -1 || a.Mb + 1 != g) && a.I.push(new Ge(g));
    a.I.push(new Ee(e));
    a.Mb = g
  }
}
p.c = function() {
  this.a.info(this.t() + " in disposeInternal.");
  rg.d.c.call(this);
  this.ng = this.M.O === pd ? A() : this.M.O.getTime();
  this.I = [];
  Ag(this);
  this.q && this.q.e();
  var a = this.H;
  this.H = k;
  ug(a, this)
};
function vg(a, b) {
  !a.Ja && !a.I.length && lg(a);
  a.I.push(new Le(b, !0));
  a.rg = !0
}
function tg(a, b, c, d) {
  this.M = a;
  this.H = b;
  this.gf = c;
  this.af = d
}
C(tg, L);
p = tg.prototype;
p.Ja = !1;
p.Xb = !1;
p.Uc = k;
p.Jb = k;
p.a = R("cw.net.DoNothingTransport");
function Bg(a) {
  a.Uc = a.M.O.setTimeout(function() {
    a.Uc = k;
    a.af--;
    a.af ? Bg(a) : a.e()
  }, a.gf)
}
p.Fa = function() {
  this.Ja && !this.Xb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ja = !0;
  Bg(this)
};
p.s = function(a) {
  a.push("<DoNothingTransport delay=", String(this.gf), ">")
};
p.Fb = n(!1);
p.t = n("Wast. T");
p.Ye = n(!1);
p.c = function() {
  this.a.info(this.t() + " in disposeInternal.");
  tg.d.c.call(this);
  this.Uc != k && this.M.O.clearTimeout(this.Uc);
  var a = this.H;
  this.H = k;
  ug(a, this)
};
function Cg(a, b, c) {
  a.style[Fa(c)] = b
}
function Dg(a, b) {
  var c;
  a: {
    c = uf(a);
    if(c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k))) {
      c = c[b] || c.getPropertyValue(b);
      break a
    }
    c = ""
  }
  return c || (a.currentStyle ? a.currentStyle[b] : k) || a.style[b]
}
function Eg(a, b, c) {
  b instanceof T ? (c = b.height, b = b.width) : c == i && f(Error("missing height argument"));
  a.style.width = Fg(b);
  a.style.height = Fg(c)
}
function Fg(a) {
  typeof a == "number" && (a = Math.round(a) + "px");
  return a
}
function Gg(a) {
  if(Dg(a, "display") != "none") {
    return Hg(a)
  }
  var b = a.style, c = b.display, d = b.visibility, e = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = Hg(a);
  b.display = c;
  b.position = e;
  b.visibility = d;
  return a
}
function Hg(a) {
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
function Ig(a) {
  I ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[J ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var Jg = jc ? "MozUserSelect" : J ? "WebkitUserSelect" : k;
function Kg(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Jg) {
    if(b = b ? "none" : "", a.style[Jg] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[Jg] = b
      }
    }
  }else {
    if(I || ic) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
;function Lg(a) {
  this.ib = a;
  this.l = []
}
C(Lg, L);
var Mg = [];
function V(a, b, c, d) {
  t(c) || (Mg[0] = c, c = Mg);
  for(var e = 0;e < c.length;e++) {
    a.l.push(N(b, c[e], d || a, !1, a.ib || a))
  }
  return a
}
function Ng(a, b, c, d, e, g) {
  if(t(c)) {
    for(var h = 0;h < c.length;h++) {
      Ng(a, b, c[h], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.ib || a;
      e = !!e;
      if(b = fd(b, c, e)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].ob && b[c].Lb == d && b[c].capture == e && b[c].Yc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    if(b) {
      b = b.key, gd(b), $a(a.l, b)
    }
  }
  return a
}
Lg.prototype.we = function() {
  F(this.l, gd);
  this.l.length = 0
};
Lg.prototype.c = function() {
  Lg.d.c.call(this);
  this.we()
};
Lg.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Og() {
}
da(Og);
Og.prototype.fh = 0;
Og.Oa();
function Pg(a) {
  this.ma = a || sf();
  this.wc = Qg
}
C(Pg, nd);
Pg.prototype.Wg = Og.Oa();
var Qg = k;
function Rg(a, b) {
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
p = Pg.prototype;
p.S = k;
p.C = !1;
p.g = k;
p.wc = k;
p.eh = k;
p.D = k;
p.P = k;
p.Zb = k;
p.Dh = !1;
function Sg(a) {
  return a.S || (a.S = ":" + (a.Wg.fh++).toString(36))
}
p.b = m("g");
function Tg(a) {
  return a.Db || (a.Db = new Lg(a))
}
p.getParent = m("D");
p.Ce = function(a) {
  this.D && this.D != a && f(Error("Method not supported"));
  Pg.d.Ce.call(this, a)
};
p.Ga = m("ma");
p.i = function() {
  this.g = this.ma.createElement("div")
};
function Ug(a, b) {
  a.C && f(Error("Component already rendered"));
  a.g || a.i();
  b ? b.insertBefore(a.g, k) : a.ma.B.body.appendChild(a.g);
  (!a.D || a.D.C) && a.R()
}
p.R = function() {
  this.C = !0;
  Vg(this, function(a) {
    !a.C && a.b() && a.R()
  })
};
p.eb = function() {
  Vg(this, function(a) {
    a.C && a.eb()
  });
  this.Db && this.Db.we();
  this.C = !1
};
p.c = function() {
  Pg.d.c.call(this);
  this.C && this.eb();
  this.Db && (this.Db.e(), delete this.Db);
  Vg(this, function(a) {
    a.e()
  });
  !this.Dh && this.g && Ef(this.g);
  this.D = this.eh = this.g = this.Zb = this.P = k
};
p.fc = m("g");
p.Pb = function(a) {
  this.C && f(Error("Component already rendered"));
  this.wc = a
};
function Vg(a, b) {
  a.P && F(a.P, b, i)
}
p.removeChild = function(a, b) {
  if(a) {
    var c = u(a) ? a : Sg(a), a = this.Zb && c ? (c in this.Zb ? this.Zb[c] : i) || k : k;
    if(c && a) {
      var d = this.Zb;
      c in d && delete d[c];
      $a(this.P, a);
      b && (a.eb(), a.g && Ef(a.g));
      c = a;
      c == k && f(Error("Unable to set parent component"));
      c.D = k;
      Pg.d.Ce.call(c, k)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function Wg(a, b) {
  a.setAttribute("role", b);
  a.aj = b
}
;function Xg() {
}
var Yg;
da(Xg);
p = Xg.prototype;
p.Pc = function() {
};
p.i = function(a) {
  var b = a.Ga().i("div", Zg(this, a).join(" "), a.fa);
  this.ze(a, b);
  return b
};
p.fc = function(a) {
  return a
};
p.cc = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(I && !K("7")) {
      var d = $g(nf(a), b);
      d.push(b);
      oa(c ? of : pf, a).apply(k, d)
    }else {
      c ? of(a, b) : pf(a, b)
    }
  }
};
p.Bf = function(a) {
  if(a.wc == k) {
    a.wc = "rtl" == Dg(a.C ? a.g : a.ma.B.body, "direction")
  }
  a.wc && this.Pb(a.b(), !0);
  a.isEnabled() && this.nd(a, a.Ub)
};
p.ze = function(a, b) {
  a.isEnabled() || this.da(b, 1, !0);
  a.h & 8 && this.da(b, 8, !0);
  a.ca & 16 && this.da(b, 16, !!(a.h & 16));
  a.ca & 64 && this.da(b, 64, !!(a.h & 64))
};
p.kd = function(a, b) {
  Kg(a, !b, !I && !ic)
};
p.Pb = function(a, b) {
  this.cc(a, this.u() + "-rtl", b)
};
p.Df = function(a) {
  var b;
  return a.ca & 32 && (b = a.hb()) ? Jf(b) : !1
};
p.nd = function(a, b) {
  var c;
  if(a.ca & 32 && (c = a.hb())) {
    if(!b && a.h & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.h & 32 && a.tf()
    }
    if(Jf(c) != b) {
      b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex"))
    }
  }
};
p.Ge = function(a, b) {
  a.style.display = b ? "" : "none"
};
p.ka = function(a, b, c) {
  var d = a.b();
  if(d) {
    var e = ah(this, b);
    e && this.cc(a, e, c);
    this.da(d, b, c)
  }
};
p.da = function(a, b, c) {
  Yg || (Yg = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Yg[b]) && a.setAttribute("aria-" + b, c)
};
p.ld = function(a, b) {
  var c = this.fc(a);
  if(c && (Df(c), b)) {
    if(u(b)) {
      Gf(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = uf(c);
          c.appendChild(u(a) ? b.createTextNode(a) : a)
        }
      };
      t(b) ? F(b, d) : ga(b) && !("nodeType" in b) ? F(bb(b), d) : d(b)
    }
  }
};
p.hb = function(a) {
  return a.b()
};
p.u = n("goog-control");
function Zg(a, b) {
  var c = a.u(), d = [c], e = a.u();
  e != c && d.push(e);
  c = b.h;
  for(e = [];c;) {
    var g = c & -c;
    e.push(ah(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.wa) && d.push.apply(d, c);
  I && !K("7") && d.push.apply(d, $g(d));
  return d
}
function $g(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  F([], function(d) {
    Xa(d, oa(Ya, a)) && (!b || Ya(d, b)) && c.push(d.join("_"))
  });
  return c
}
function ah(a, b) {
  if(!a.Xe) {
    var c = a.u();
    a.Xe = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Xe[b]
}
;function bh(a, b) {
  a || f(Error("Invalid class name " + a));
  x(b) || f(Error("Invalid decorator function " + b))
}
var ch = {};
function dh(a, b, c, d, e) {
  if(!I && (!J || !K("525"))) {
    return!0
  }
  if(mc && e) {
    return fh(a)
  }
  if(e && !d) {
    return!1
  }
  if(!c && (b == 17 || b == 18)) {
    return!1
  }
  if(I && d && b == a) {
    return!1
  }
  switch(a) {
    case 13:
      return!(I && wc());
    case 27:
      return!J
  }
  return fh(a)
}
function fh(a) {
  if(a >= 48 && a <= 57) {
    return!0
  }
  if(a >= 96 && a <= 106) {
    return!0
  }
  if(a >= 65 && a <= 90) {
    return!0
  }
  if(J && a == 0) {
    return!0
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
      return!0;
    default:
      return!1
  }
}
;function gh(a, b) {
  a && hh(this, a, b)
}
C(gh, nd);
p = gh.prototype;
p.g = k;
p.bd = k;
p.he = k;
p.cd = k;
p.Sa = -1;
p.Ra = -1;
var ih = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, jh = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, kh = {61:187, 
59:186}, lh = I || J && K("525");
p = gh.prototype;
p.Sg = function(a) {
  if(J && (this.Sa == 17 && !a.ctrlKey || this.Sa == 18 && !a.altKey)) {
    this.Ra = this.Sa = -1
  }
  lh && !dh(a.keyCode, this.Sa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Ra = jc && a.keyCode in kh ? kh[a.keyCode] : a.keyCode
};
p.Tg = function() {
  this.Ra = this.Sa = -1
};
p.handleEvent = function(a) {
  var b = a.Ea, c, d;
  I && a.type == "keypress" ? (c = this.Ra, d = c != 13 && c != 27 ? b.keyCode : 0) : J && a.type == "keypress" ? (c = this.Ra, d = b.charCode >= 0 && b.charCode < 63232 && fh(c) ? b.charCode : 0) : ic ? (c = this.Ra, d = fh(c) ? b.keyCode : 0) : (c = b.keyCode || this.Ra, d = b.charCode || 0, mc && d == 63 && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in ih ? e = ih[c] : c == 25 && a.shiftKey && (e = 9) : g && g in jh && (e = jh[g]);
  a = e == this.Sa;
  this.Sa = e;
  b = new mh(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.e()
  }
};
p.b = m("g");
function hh(a, b, c) {
  a.cd && a.detach();
  a.g = b;
  a.bd = N(a.g, "keypress", a, c);
  a.he = N(a.g, "keydown", a.Sg, c, a);
  a.cd = N(a.g, "keyup", a.Tg, c, a)
}
p.detach = function() {
  if(this.bd) {
    gd(this.bd), gd(this.he), gd(this.cd), this.cd = this.he = this.bd = k
  }
  this.g = k;
  this.Ra = this.Sa = -1
};
p.c = function() {
  gh.d.c.call(this);
  this.detach()
};
function mh(a, b, c, d) {
  d && this.kc(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(mh, Fc);
function W(a, b, c) {
  Pg.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = y(b);
      if(d = ch[d]) {
        break
      }
      b = b.d ? b.d.constructor : k
    }
    b = d ? x(d.Oa) ? d.Oa() : new d : k
  }
  this.m = b;
  this.md(a)
}
C(W, Pg);
p = W.prototype;
p.fa = k;
p.h = 0;
p.ca = 39;
p.Te = 255;
p.th = 0;
p.Ub = !0;
p.wa = k;
p.be = !0;
p.Dd = !1;
p.hb = function() {
  return this.m.hb(this)
};
function nh(a, b) {
  if(b) {
    a.wa ? Ya(a.wa, b) || a.wa.push(b) : a.wa = [b], a.m.cc(a, b, !0)
  }
}
p.cc = function(a, b) {
  if(b) {
    nh(this, a)
  }else {
    if(a && this.wa) {
      $a(this.wa, a);
      if(this.wa.length == 0) {
        this.wa = k
      }
      this.m.cc(this, a, !1)
    }
  }
};
p.i = function() {
  var a = this.m.i(this);
  this.g = a;
  var b = this.m.Pc();
  b && Wg(a, b);
  this.Dd || this.m.kd(a, !1);
  this.Ub || this.m.Ge(a, !1)
};
p.fc = function() {
  return this.m.fc(this.b())
};
p.R = function() {
  W.d.R.call(this);
  this.m.Bf(this);
  if(this.ca & -2 && (this.be && oh(this, !0), this.ca & 32)) {
    var a = this.hb();
    if(a) {
      var b = this.Hb || (this.Hb = new gh);
      hh(b, a);
      V(V(V(Tg(this), b, "key", this.wf), a, "focus", this.Qg), a, "blur", this.tf)
    }
  }
};
function oh(a, b) {
  var c = Tg(a), d = a.b();
  b ? (V(V(V(V(c, d, "mouseover", a.Xc), d, "mousedown", a.Vc), d, "mouseup", a.xf), d, "mouseout", a.Wc), I && V(c, d, "dblclick", a.vf)) : (Ng(Ng(Ng(Ng(c, d, "mouseover", a.Xc), d, "mousedown", a.Vc), d, "mouseup", a.xf), d, "mouseout", a.Wc), I && Ng(c, d, "dblclick", a.vf))
}
p.eb = function() {
  W.d.eb.call(this);
  this.Hb && this.Hb.detach();
  this.Ub && this.isEnabled() && this.m.nd(this, !1)
};
p.c = function() {
  W.d.c.call(this);
  this.Hb && (this.Hb.e(), delete this.Hb);
  delete this.m;
  this.wa = this.fa = k
};
p.ld = function(a) {
  this.m.ld(this.b(), a);
  this.md(a)
};
p.md = aa("fa");
p.of = function() {
  var a = this.fa;
  if(!a) {
    return""
  }
  if(!u(a)) {
    if(t(a)) {
      a = Va(a, Kf).join("")
    }else {
      if(rf && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Lf(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      rf || (a = a.replace(/ +/g, " "));
      a != " " && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
p.Pb = function(a) {
  W.d.Pb.call(this, a);
  var b = this.b();
  b && this.m.Pb(b, a)
};
p.kd = function(a) {
  this.Dd = a;
  var b = this.b();
  b && this.m.kd(b, a)
};
p.Ge = function(a, b) {
  if(b || this.Ub != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.m.Ge(c, a);
    this.isEnabled() && this.m.nd(this, a);
    this.Ub = a;
    return!0
  }
  return!1
};
p.isEnabled = function() {
  return!(this.h & 1)
};
function ph(a, b) {
  qh(a, 2, b) && a.ka(2, b)
}
p.ge = function() {
  return!!(this.h & 4)
};
p.setActive = function(a) {
  qh(this, 4, a) && this.ka(4, a)
};
p.De = function(a) {
  qh(this, 8, a) && this.ka(8, a)
};
p.ka = function(a, b) {
  if(this.ca & a && b != !!(this.h & a)) {
    this.m.ka(this, a, b), this.h = b ? this.h | a : this.h & ~a
  }
};
function X(a, b) {
  return!!(a.Te & b) && !!(a.ca & b)
}
function qh(a, b, c) {
  return!!(a.ca & b) && !!(a.h & b) != c && (!(a.th & b) || a.dispatchEvent(Rg(b, c))) && !a.va
}
p.Xc = function(a) {
  !rh(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && ph(this, !0)
};
p.Wc = function(a) {
  !rh(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(!1), X(this, 2) && ph(this, !1))
};
function rh(a, b) {
  return!!a.relatedTarget && Ff(b, a.relatedTarget)
}
p.Vc = function(a) {
  if(this.isEnabled() && (X(this, 2) && ph(this, !0), Hc(a) && (!J || !mc || !a.ctrlKey))) {
    X(this, 4) && this.setActive(!0), this.m.Df(this) && this.hb().focus()
  }
  !this.Dd && Hc(a) && (!J || !mc || !a.ctrlKey) && a.preventDefault()
};
p.xf = function(a) {
  this.isEnabled() && (X(this, 2) && ph(this, !0), this.ge() && this.mb(a) && X(this, 4) && this.setActive(!1))
};
p.vf = function(a) {
  this.isEnabled() && this.mb(a)
};
p.mb = function(a) {
  if(X(this, 16)) {
    var b = !(this.h & 16);
    qh(this, 16, b) && this.ka(16, b)
  }
  X(this, 8) && this.De(!0);
  X(this, 64) && (b = !(this.h & 64), qh(this, 64, b) && this.ka(64, b));
  b = new Cc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, e = 0;d = c[e];e++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
p.Qg = function() {
  X(this, 32) && qh(this, 32, !0) && this.ka(32, !0)
};
p.tf = function() {
  X(this, 4) && this.setActive(!1);
  X(this, 32) && qh(this, 32, !1) && this.ka(32, !1)
};
p.wf = function(a) {
  return this.Ub && this.isEnabled() && this.ae(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
p.ae = function(a) {
  return a.keyCode == 13 && this.mb(a)
};
x(W) || f(Error("Invalid component class " + W));
x(Xg) || f(Error("Invalid renderer class " + Xg));
var sh = y(W);
ch[sh] = Xg;
bh("goog-control", function() {
  return new W(k)
});
function th() {
}
C(th, Xg);
da(th);
p = th.prototype;
p.Pc = n("button");
p.da = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : th.d.da.call(this, a, b, c)
};
p.i = function(a) {
  var b = th.d.i.call(this, a), c = a.Sc();
  c && this.Fe(b, c);
  (c = a.Tc()) && this.qd(b, c);
  a.ca & 16 && this.da(b, 16, !!(a.h & 16));
  return b
};
p.Tc = s;
p.qd = s;
p.Sc = function(a) {
  return a.title
};
p.Fe = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
p.u = n("goog-button");
function uh() {
}
C(uh, th);
da(uh);
p = uh.prototype;
p.Pc = function() {
};
p.i = function(a) {
  a.C && !1 != a.be && oh(a, !1);
  a.be = !1;
  a.Te &= -256;
  a.C && a.h & 32 && f(Error("Component already rendered"));
  a.h & 32 && a.ka(32, !1);
  a.ca &= -33;
  return a.Ga().i("button", {"class":Zg(this, a).join(" "), disabled:!a.isEnabled(), title:a.Sc() || "", value:a.Tc() || ""}, a.of() || "")
};
p.Bf = function(a) {
  V(Tg(a), a.b(), "click", a.mb)
};
p.kd = s;
p.Pb = s;
p.Df = function(a) {
  return a.isEnabled()
};
p.nd = s;
p.ka = function(a, b, c) {
  uh.d.ka.call(this, a, b, c);
  if((a = a.b()) && b == 1) {
    a.disabled = c
  }
};
p.Tc = function(a) {
  return a.value
};
p.qd = function(a, b) {
  if(a) {
    a.value = b
  }
};
p.da = s;
function vh(a, b, c) {
  W.call(this, a, b || uh.Oa(), c)
}
C(vh, W);
p = vh.prototype;
p.Tc = m("pg");
p.qd = function(a) {
  this.pg = a;
  this.m.qd(this.b(), a)
};
p.Sc = m("kg");
p.Fe = function(a) {
  this.kg = a;
  this.m.Fe(this.b(), a)
};
p.c = function() {
  vh.d.c.call(this);
  delete this.pg;
  delete this.kg
};
p.R = function() {
  vh.d.R.call(this);
  if(this.ca & 32) {
    var a = this.hb();
    a && V(Tg(this), a, "keyup", this.ae)
  }
};
p.ae = function(a) {
  return a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup" ? this.mb(a) : a.keyCode == 32
};
bh("goog-button", function() {
  return new vh(k)
});
function wh() {
}
C(wh, th);
da(wh);
p = wh.prototype;
p.i = function(a) {
  var b = {"class":"goog-inline-block " + Zg(this, a).join(" "), title:a.Sc() || ""}, b = a.Ga().i("div", b, xh(this, a.fa, a.Ga()));
  this.ze(a, b);
  return b
};
p.Pc = n("button");
p.ze = function(a, b) {
  a.isEnabled() || this.da(b, 1, !0);
  a.h & 8 && this.da(b, 8, !0);
  a.ca & 16 && this.da(b, 16, !0);
  a.h & 64 && this.da(b, 64, !0)
};
p.fc = function(a) {
  return a && a.firstChild.firstChild
};
function xh(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.u() + "-outer-box"), c.i("div", "goog-inline-block " + (a.u() + "-inner-box"), b))
}
p.u = n("goog-custom-button");
function yh(a, b, c) {
  vh.call(this, a, b || wh.Oa(), c)
}
C(yh, vh);
bh("goog-custom-button", function() {
  return new yh(k)
});
var zh = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function Ah(a) {
  var b = {}, a = String(a), c = a.charAt(0) == "#" ? a : "#" + a;
  if(Bh.test(c)) {
    return b.Zc = Ch(c), b.type = "hex", b
  }else {
    a: {
      var d = a.match(Dh);
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
      return b.Zc = Eh(c[0], c[1], c[2]), b.type = "rgb", b
    }else {
      if(zh && (c = zh[a.toLowerCase()])) {
        return b.Zc = c, b.type = "named", b
      }
    }
  }
  f(Error(a + " is not a valid color string"))
}
var Fh = /#(.)(.)(.)/;
function Ch(a) {
  Bh.test(a) || f(Error("'" + a + "' is not a valid hex color"));
  a.length == 4 && (a = a.replace(Fh, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function Gh(a) {
  a = Ch(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function Eh(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || a < 0 || a > 255 || isNaN(b) || b < 0 || b > 255 || isNaN(c) || c < 0 || c > 255) && f(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = Hh(a.toString(16));
  b = Hh(b.toString(16));
  c = Hh(c.toString(16));
  return"#" + a + b + c
}
var Bh = /^#(?:[0-9a-f]{3}){1,2}$/i, Dh = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function Hh(a) {
  return a.length == 1 ? "0" + a : a
}
;var Ih;
(function() {
  function a(a) {
    a = a.match(/[\d]+/g);
    a.length = 3;
    return a.join(".")
  }
  var b = !1, c = "";
  if(navigator.plugins && navigator.plugins.length) {
    var d = navigator.plugins["Shockwave Flash"];
    d && (b = !0, d.description && (c = a(d.description)));
    navigator.plugins["Shockwave Flash 2.0"] && (b = !0, c = "2.0.0.11")
  }else {
    if(navigator.mimeTypes && navigator.mimeTypes.length) {
      (b = (d = navigator.mimeTypes["application/x-shockwave-flash"]) && d.enabledPlugin) && (c = a(d.enabledPlugin.description))
    }else {
      try {
        d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), b = !0, c = a(d.GetVariable("$version"))
      }catch(e) {
        try {
          d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = !0, c = "6.0.21"
        }catch(g) {
          try {
            d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = !0, c = a(d.GetVariable("$version"))
          }catch(h) {
          }
        }
      }
    }
  }
  Ih = c
})();
function Jh(a, b) {
  Pg.call(this, b);
  this.Lg = a;
  this.Rd = new Lg(this);
  this.Oc = new Ob
}
C(Jh, Pg);
p = Jh.prototype;
p.a = R("goog.ui.media.FlashObject");
p.Fh = "window";
p.Ue = "#000000";
p.vg = "sameDomain";
p.ba = function(a, b) {
  this.ub = u(a) ? a : Math.round(a) + "px";
  this.ce = u(b) ? b : Math.round(b) + "px";
  this.b() && Eg(this.b() ? this.b().firstChild : k, this.ub, this.ce);
  return this
};
p.R = function() {
  Jh.d.R.call(this);
  var a = this.b(), b;
  b = I ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = I ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = qa(c, this.Fh), d = this.Oc.Ha(), e = this.Oc.Y(), g = [], h = 0;h < d.length;h++) {
    var j = sa(d[h]), l = sa(e[h]);
    g.push(j + "=" + l)
  }
  b = qa(b, Sg(this), Sg(this), "goog-ui-media-flash-object", ua(this.Lg), ua(g.join("&")), this.Ue, this.vg, c);
  a.innerHTML = b;
  this.ub && this.ce && this.ba(this.ub, this.ce);
  V(this.Rd, this.b(), Qa(yc), Dc)
};
p.i = function() {
  this.ag != k && !(Ba(Ih, this.ag) >= 0) && (O(this.a, "Required flash version not found:" + this.ag), f(Error("Method not supported")));
  var a = this.Ga().createElement("div");
  a.className = "goog-ui-media-flash";
  this.g = a
};
p.c = function() {
  Jh.d.c.call(this);
  this.Oc = k;
  this.Rd.e();
  this.Rd = k
};
function Kh(a) {
  D.call(this, a)
}
C(Kh, D);
Kh.prototype.name = "cw.loadflash.FlashLoadFailed";
r.__loadFlashObject_callbacks = {};
function Lh(a, b, c) {
  function d() {
    e && delete r.__loadFlashObject_callbacks[e]
  }
  var e;
  if(jc && !K("1.8.1.20")) {
    return Dd(new Kh("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(Ba(Ih, "9") >= 0)) {
    return b = Ih, Dd(new Kh("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  e = "_" + Jd();
  var h = new rd(d);
  r.__loadFlashObject_callbacks[e] = function() {
    a.setTimeout(function() {
      d();
      xd(h, U(g))
    }, 0)
  };
  b.Oc.set("onloadcallback", '__loadFlashObject_callbacks["' + e + '"]()');
  g = Sg(b);
  Ug(b, c);
  return h
}
function Mh(a, b, c) {
  var d = Lh(a, b, c), e = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  Ad(d, function(b) {
    a.clearTimeout(e);
    return b
  });
  return d
}
;function Nh() {
  if(jc) {
    this.bb = {}, this.zd = {}, this.td = []
  }
}
Nh.prototype.a = R("goog.net.xhrMonitor");
Nh.prototype.Lc = jc;
function Oh(a) {
  var b = Ph;
  if(b.Lc) {
    var c = u(a) ? a : ia(a) ? y(a) : "";
    Q(b.a, "Pushing context: " + a + " (" + c + ")");
    b.td.push(c)
  }
}
function Qh() {
  var a = Ph;
  if(a.Lc) {
    var b = a.td.pop();
    Q(a.a, "Popping context: " + b);
    Rh(a, b)
  }
}
function Sh(a) {
  var b = Ph;
  if(b.Lc) {
    a = y(a);
    P(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.td.length;c++) {
      var d = b.td[c];
      Th(b.bb, d, a);
      Th(b.zd, a, d)
    }
  }
}
function Rh(a, b) {
  var c = a.zd[b], d = a.bb[b];
  c && d && (Q(a.a, "Updating dependent contexts"), F(c, function(a) {
    F(d, function(b) {
      Th(this.bb, a, b);
      Th(this.zd, b, a)
    }, this)
  }, a))
}
function Th(a, b, c) {
  a[b] || (a[b] = []);
  Ya(a[b], c) || a[b].push(c)
}
var Ph = new Nh;
function Uh() {
}
Uh.prototype.Ve = k;
function Vh(a) {
  var b;
  if(!(b = a.Ve)) {
    b = {}, Wh(a) && (b[0] = !0, b[1] = !0), b = a.Ve = b
  }
  return b
}
;var Xh;
function Yh() {
}
C(Yh, Uh);
function Zh(a) {
  return(a = Wh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
Yh.prototype.de = k;
function Wh(a) {
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
Xh = new Yh;
function $h(a) {
  this.headers = new Ob;
  this.Ad = a || k
}
C($h, nd);
$h.prototype.a = R("goog.net.XhrIo");
var ai = /^https?:?$/i;
p = $h.prototype;
p.Ka = !1;
p.j = k;
p.yd = k;
p.oc = "";
p.Ff = "";
p.lc = 0;
p.mc = "";
p.Qd = !1;
p.$c = !1;
p.ee = !1;
p.kb = !1;
p.ud = 0;
p.sb = k;
p.bg = "";
p.Eh = !1;
p.send = function(a, b, c, d) {
  this.j && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.oc = a;
  this.mc = "";
  this.lc = 0;
  this.Ff = b;
  this.Qd = !1;
  this.Ka = !0;
  this.j = this.Ad ? Zh(this.Ad) : Zh(Xh);
  this.yd = this.Ad ? Vh(this.Ad) : Vh(Xh);
  Sh(this.j);
  this.j.onreadystatechange = z(this.Tf, this);
  try {
    P(this.a, bi(this, "Opening Xhr")), this.ee = !0, this.j.open(b, a, !0), this.ee = !1
  }catch(e) {
    P(this.a, bi(this, "Error opening Xhr: " + e.message));
    ci(this, e);
    return
  }
  var a = c || "", g = this.headers.A();
  d && Mb(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.ea("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Mb(g, function(a, b) {
    this.j.setRequestHeader(b, a)
  }, this);
  if(this.bg) {
    this.j.responseType = this.bg
  }
  if("withCredentials" in this.j) {
    this.j.withCredentials = this.Eh
  }
  try {
    if(this.sb) {
      pd.clearTimeout(this.sb), this.sb = k
    }
    if(this.ud > 0) {
      P(this.a, bi(this, "Will abort after " + this.ud + "ms if incomplete")), this.sb = pd.setTimeout(z(this.Ah, this), this.ud)
    }
    P(this.a, bi(this, "Sending request"));
    this.$c = !0;
    this.j.send(a);
    this.$c = !1
  }catch(h) {
    P(this.a, bi(this, "Send error: " + h.message)), ci(this, h)
  }
};
p.dispatchEvent = function(a) {
  if(this.j) {
    Oh(this.j);
    try {
      return $h.d.dispatchEvent.call(this, a)
    }finally {
      Qh()
    }
  }else {
    return $h.d.dispatchEvent.call(this, a)
  }
};
p.Ah = function() {
  if(typeof ba != "undefined" && this.j) {
    this.mc = "Timed out after " + this.ud + "ms, aborting", this.lc = 8, P(this.a, bi(this, this.mc)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function ci(a, b) {
  a.Ka = !1;
  if(a.j) {
    a.kb = !0, a.j.abort(), a.kb = !1
  }
  a.mc = b;
  a.lc = 5;
  di(a);
  ei(a)
}
function di(a) {
  if(!a.Qd) {
    a.Qd = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
p.abort = function(a) {
  if(this.j && this.Ka) {
    P(this.a, bi(this, "Aborting")), this.Ka = !1, this.kb = !0, this.j.abort(), this.kb = !1, this.lc = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ei(this)
  }
};
p.c = function() {
  if(this.j) {
    if(this.Ka) {
      this.Ka = !1, this.kb = !0, this.j.abort(), this.kb = !1
    }
    ei(this, !0)
  }
  $h.d.c.call(this)
};
p.Tf = function() {
  !this.ee && !this.$c && !this.kb ? this.gh() : fi(this)
};
p.gh = function() {
  fi(this)
};
function fi(a) {
  if(a.Ka && typeof ba != "undefined") {
    if(a.yd[1] && a.Pa() == 4 && gi(a) == 2) {
      P(a.a, bi(a, "Local request error detected and ignored"))
    }else {
      if(a.$c && a.Pa() == 4) {
        pd.setTimeout(z(a.Tf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.Pa() == 4) {
          P(a.a, bi(a, "Request complete"));
          a.Ka = !1;
          var b;
          a: {
            switch(gi(a)) {
              case 0:
                b = u(a.oc) ? a.oc.match(Pe)[1] || k : a.oc.sa;
                b = !(b ? ai.test(b) : self.location ? ai.test(self.location.protocol) : 1);
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
                b = !0;
                break a;
              default:
                b = !1
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
            a.mc = c + " [" + gi(a) + "]";
            di(a)
          }
          ei(a)
        }
      }
    }
  }
}
function ei(a, b) {
  if(a.j) {
    var c = a.j, d = a.yd[0] ? s : k;
    a.j = k;
    a.yd = k;
    if(a.sb) {
      pd.clearTimeout(a.sb), a.sb = k
    }
    b || (Oh(c), a.dispatchEvent("ready"), Qh());
    var e = Ph;
    if(e.Lc) {
      var g = y(c);
      P(e.a, "Closing XHR : " + g);
      delete e.zd[g];
      for(var h in e.bb) {
        $a(e.bb[h], g), e.bb[h].length == 0 && delete e.bb[h]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(j) {
      je(a.a, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
p.ge = function() {
  return!!this.j
};
p.Pa = function() {
  return this.j ? this.j.readyState : 0
};
function gi(a) {
  try {
    return a.Pa() > 2 ? a.j.status : -1
  }catch(b) {
    return O(a.a, "Can not get status: " + b.message), -1
  }
}
p.getResponseHeader = function(a) {
  return this.j && this.Pa() == 4 ? this.j.getResponseHeader(a) : i
};
function bi(a, b) {
  return b + " [" + a.Ff + " " + a.oc + " " + gi(a) + "]"
}
;var hi = !(I || J && !K("420+"));
function ii(a, b) {
  this.vd = a;
  this.qa = b
}
C(ii, L);
p = ii.prototype;
p.q = k;
p.Xa = -1;
p.sf = !1;
p.yf = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function ji(a) {
  var b = Xf(a.df), c = b[0], b = b[1], d = r.parent;
  d ? (d.__XHRMaster_onframes(a.qa, c, b), b != 1 && a.e()) : a.e()
}
p.Vg = function() {
  ji(this);
  if(!this.va) {
    var a = r.parent;
    a && a.__XHRMaster_oncomplete(this.qa);
    this.e()
  }
};
p.lh = function() {
  var a = r.parent;
  if(a) {
    this.Xa = this.q.Pa();
    if(this.Xa >= 2 && !this.sf) {
      for(var b = new Ob, c = this.yf.length;c--;) {
        var d = this.yf[c];
        try {
          b.set(d, this.q.j.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.W() && (this.sf = !0, a.__XHRMaster_ongotheaders(this.qa, Sb(b)), this.va)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.qa, this.Xa);
    hi && this.Xa == 3 && ji(this)
  }else {
    this.e()
  }
};
p.me = function(a, b, c) {
  this.q = new $h;
  N(this.q, "readystatechange", z(this.lh, this));
  N(this.q, "complete", z(this.Vg, this));
  this.q.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.df = new Wf(this.q.j, 1048576)
};
p.c = function() {
  ii.d.c.call(this);
  delete this.df;
  this.q && this.q.e();
  delete this.vd.zc[this.qa];
  delete this.vd
};
function ki() {
  this.zc = {}
}
C(ki, L);
ki.prototype.ah = function(a, b, c, d) {
  var e = new ii(this, a);
  this.zc[a] = e;
  e.me(b, c, d)
};
ki.prototype.Gg = function(a) {
  (a = this.zc[a]) && a.e()
};
ki.prototype.c = function() {
  ki.d.c.call(this);
  for(var a = Qa(this.zc);a.length;) {
    a.pop().e()
  }
  delete this.zc
};
var li = new ki;
r.__XHRSlave_makeRequest = z(li.ah, li);
r.__XHRSlave_dispose = z(li.Gg, li);
function mi(a) {
  this.B = a
}
var ni = /\s*;\s*/;
p = mi.prototype;
p.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && J) {
    var b = "COOKIES_TEST_" + A();
    oi.set(b, "1");
    if(!this.get(b)) {
      return!1
    }
    this.remove(b)
  }
  return a
};
p.set = function(a, b, c, d, e, g) {
  /[;=\s]/.test(a) && f(Error('Invalid cookie name "' + a + '"'));
  /[;\r\n]/.test(b) && f(Error('Invalid cookie value "' + b + '"'));
  fa(c) || (c = -1);
  e = e ? ";domain=" + e : "";
  d = d ? ";path=" + d : "";
  g = g ? ";secure" : "";
  c = c < 0 ? "" : c == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(A() + c * 1E3)).toUTCString();
  this.B.cookie = a + "=" + b + e + d + c + g
};
p.get = function(a, b) {
  for(var c = a + "=", d = (this.B.cookie || "").split(ni), e = 0, g;g = d[e];e++) {
    if(g.indexOf(c) == 0) {
      return g.substr(c.length)
    }
  }
  return b
};
p.remove = function(a, b, c) {
  var d = this.ea(a);
  this.set(a, "", 0, b, c);
  return d
};
p.Ha = function() {
  return pi(this).keys
};
p.Y = function() {
  return pi(this).qg
};
p.Qa = function() {
  return!this.B.cookie
};
p.W = function() {
  return!this.B.cookie ? 0 : (this.B.cookie || "").split(ni).length
};
p.ea = function(a) {
  return fa(this.get(a))
};
p.Ic = function(a) {
  for(var b = pi(this).qg, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return!0
    }
  }
  return!1
};
p.clear = function() {
  for(var a = pi(this).keys, b = a.length - 1;b >= 0;b--) {
    this.remove(a[b])
  }
};
function pi(a) {
  for(var a = (a.B.cookie || "").split(ni), b = [], c = [], d, e, g = 0;e = a[g];g++) {
    d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)))
  }
  return{keys:b, qg:c}
}
var oi = new mi(document);
oi.mi = 3950;
function qi() {
}
qi.prototype.pf = function() {
  return Boolean(Number((new Re(document.location)).U.get("httpStreaming", "0"))) ? 2 : 1
};
function ri(a) {
  var b = new Jh("/compiled_client/FlashConnector.swf?cb=2ae8d8a79afe8f3a96bb49e8a9339914");
  b.Ue = "#777777";
  b.ba(300, 30);
  var c = U("FlashConnectorSwf");
  c || f(Error("no FlashConnectorSwf?"));
  return Mh(a.O, b, c)
}
function si(a, b, c) {
  var d = new Re(document.location);
  if(c) {
    var e = d.na, d = ri(a);
    yd(d, function(b) {
      b = new te(a, b);
      return new cg(e, 843, b)
    });
    return d
  }else {
    return b ? (b = r.__demo_shared_domain, d = d.A(), Ue(d, "_____random_____." + b)) : d = d.A(), d.rb("/httpface/"), We(d, "", i), d = new dg(d.toString().replace("_____random_____", "%random%")), Cd(d)
  }
}
function ti() {
  var a = ui, b = (new Re(document.location)).U, c = b.get("mode") != "http", b = Boolean(Number(b.get("useSub", "1")));
  return si(a, b, c)
}
;function vi() {
  this.Zf = A()
}
var wi = new vi;
vi.prototype.set = aa("Zf");
vi.prototype.reset = function() {
  this.set(A())
};
vi.prototype.get = m("Zf");
function xi(a) {
  this.jh = a || "";
  this.sh = wi
}
xi.prototype.gg = !0;
xi.prototype.qh = !0;
xi.prototype.ph = !0;
xi.prototype.hg = !1;
function yi(a) {
  return a < 10 ? "0" + a : String(a)
}
function zi(a, b) {
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
function Ai(a) {
  xi.call(this, a)
}
C(Ai, xi);
Ai.prototype.hg = !0;
function Bi(a) {
  this.kh = z(this.ug, this);
  this.mf = new Ai;
  this.Cf = this.mf.gg = !1;
  this.g = a;
  this.Ig = this.g.ownerDocument || this.g.document;
  var a = sf(this.g), b = k;
  if(I) {
    b = a.B.createStyleSheet(), Ig(b)
  }else {
    var c = vf(a.B, "head", i, i)[0];
    c || (b = vf(a.B, "body", i, i)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    Ig(b);
    a.appendChild(c, b)
  }
  this.g.className += " logdiv"
}
Bi.prototype.ug = function(a) {
  var b = this.g.scrollHeight - this.g.scrollTop - this.g.clientHeight <= 100, c = this.Ig.createElement("div");
  c.className = "logmsg";
  var d = this.mf, e;
  switch(a.Kb.value) {
    case ae.value:
      e = "dbg-sh";
      break;
    case be.value:
      e = "dbg-sev";
      break;
    case ce.value:
      e = "dbg-w";
      break;
    case de.value:
      e = "dbg-i";
      break;
    default:
      e = "dbg-f"
  }
  var g = [];
  g.push(d.jh, " ");
  if(d.gg) {
    var h = new Date(a.jg);
    g.push("[", yi(h.getFullYear() - 2E3) + yi(h.getMonth() + 1) + yi(h.getDate()) + " " + yi(h.getHours()) + ":" + yi(h.getMinutes()) + ":" + yi(h.getSeconds()) + "." + yi(Math.floor(h.getMilliseconds() / 10)), "] ")
  }
  d.qh && g.push("[", Aa(zi(a, d.sh.get())), "s] ");
  d.ph && g.push("[", ua(a.$g), "] ");
  g.push('<span class="', e, '">', ta(Aa(ua(a.Of))));
  d.hg && a.Td && g.push("<br>", ta(Aa(a.Sd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.g.appendChild(c);
  if(b) {
    this.g.scrollTop = this.g.scrollHeight
  }
};
Bi.prototype.clear = function() {
  this.g.innerHTML = ""
};
function Ci(a, b, c, d, e, g) {
  arguments.length == 6 ? this.setTransform(a, b, c, d, e, g) : arguments.length != 0 ? f(Error("Insufficient matrix parameters")) : (this.Z = this.aa = 1, this.T = this.$ = this.ia = this.ja = 0)
}
p = Ci.prototype;
p.A = function() {
  return new Ci(this.Z, this.T, this.$, this.aa, this.ia, this.ja)
};
p.setTransform = function(a, b, c, d, e, g) {
  (!ja(a) || !ja(b) || !ja(c) || !ja(d) || !ja(e) || !ja(g)) && f(Error("Invalid transform parameters"));
  this.Z = a;
  this.T = b;
  this.$ = c;
  this.aa = d;
  this.ia = e;
  this.ja = g;
  return this
};
p.$e = function(a) {
  this.Z = a.Z;
  this.T = a.T;
  this.$ = a.$;
  this.aa = a.aa;
  this.ia = a.ia;
  this.ja = a.ja;
  return this
};
p.scale = function(a, b) {
  this.Z *= a;
  this.T *= a;
  this.$ *= b;
  this.aa *= b;
  return this
};
p.translate = function(a, b) {
  this.ia += a * this.Z + b * this.$;
  this.ja += a * this.T + b * this.aa;
  return this
};
p.rotate = function(a, b, c) {
  var d = new Ci, e = Math.cos(a), a = Math.sin(a), b = d.setTransform(e, a, -a, e, b - b * e + c * a, c - b * a - c * e), c = this.Z, d = this.$;
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
p.toString = function() {
  return"matrix(" + [this.Z, this.T, this.$, this.aa, this.ia, this.ja].join(",") + ")"
};
p.n = function(a) {
  return this == a ? !0 : !a ? !1 : this.Z == a.Z && this.$ == a.$ && this.ia == a.ia && this.T == a.T && this.aa == a.aa && this.ja == a.ja
};
function Y(a, b) {
  this.g = a;
  this.xa = b;
  this.Md = !1
}
C(Y, nd);
p = Y.prototype;
p.xa = k;
p.g = k;
p.lg = k;
p.b = m("g");
p.addEventListener = function(a, b, c, d) {
  N(this.g, a, b, c, d)
};
p.removeEventListener = function(a, b, c, d) {
  ed(this.g, a, b, c, d)
};
p.c = function() {
  Y.d.c.call(this);
  id(this.g)
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
Z.prototype.Ng = m("fill");
Z.prototype.Pg = m("Me");
function Di(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(Di, Z);
function Ei(a, b) {
  Y.call(this, a, b)
}
C(Ei, Y);
function Fi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(Fi, Z);
function Gi(a, b) {
  Y.call(this, a, b)
}
C(Gi, Y);
function Hi(a, b) {
  Y.call(this, a, b)
}
C(Hi, Ei);
Hi.prototype.clear = function() {
  Df(this.b())
};
Hi.prototype.ba = function(a, b) {
  Ii(this.b(), {width:a, height:b})
};
function Ji(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(Ji, Fi);
function Ki(a, b) {
  Y.call(this, a, b)
}
C(Ki, Gi);
Ki.prototype.ba = function(a, b) {
  Ii(this.b(), {width:a, height:b})
};
function Li() {
}
;function Mi(a, b) {
  this.Id = a;
  this.pc = b || 1
}
C(Mi, Li);
Mi.prototype.ha = m("Id");
function Ni(a, b) {
  this.ub = a;
  this.Id = b
}
Ni.prototype.ha = m("Id");
function Oi() {
  this.G = [];
  this.f = [];
  this.Aa = []
}
Oi.prototype.yb = k;
Oi.prototype.V = k;
Oi.prototype.Qb = !0;
var Pi = [2, 2, 6, 6, 0];
p = Oi.prototype;
p.clear = function() {
  this.G.length = 0;
  this.f.length = 0;
  this.Aa.length = 0;
  delete this.yb;
  delete this.V;
  delete this.Qb;
  return this
};
p.moveTo = function(a, b) {
  this.G[this.G.length - 1] == 0 ? this.Aa.length -= 2 : (this.G.push(0), this.f.push(1));
  this.Aa.push(a, b);
  this.V = this.yb = [a, b];
  return this
};
p.lineTo = function(a) {
  var b = this.G[this.G.length - 1];
  b == k && f(Error("Path cannot start with lineTo"));
  b != 1 && (this.G.push(1), this.f.push(0));
  for(b = 0;b < arguments.length;b += 2) {
    var c = arguments[b], d = arguments[b + 1];
    this.Aa.push(c, d)
  }
  this.f[this.f.length - 1] += b / 2;
  this.V = [c, d];
  return this
};
p.cf = function(a) {
  var b = this.G[this.G.length - 1];
  b == k && f(Error("Path cannot start with curve"));
  b != 2 && (this.G.push(2), this.f.push(0));
  for(b = 0;b < arguments.length;b += 6) {
    var c = arguments[b + 4], d = arguments[b + 5];
    this.Aa.push(arguments[b], arguments[b + 1], arguments[b + 2], arguments[b + 3], c, d)
  }
  this.f[this.f.length - 1] += b / 6;
  this.V = [c, d];
  return this
};
p.close = function() {
  var a = this.G[this.G.length - 1];
  a == k && f(Error("Path cannot start with close"));
  if(a != 4) {
    this.G.push(4), this.f.push(1), this.V = this.yb
  }
  return this
};
p.arcTo = function(a, b, c, d) {
  var e = this.V[0] - a * Math.cos(we(c)) + a * Math.cos(we(c + d)), g = this.V[1] - b * Math.sin(we(c)) + b * Math.sin(we(c + d));
  this.G.push(3);
  this.f.push(1);
  this.Aa.push(a, b, c, d, e, g);
  this.Qb = !1;
  this.V = [e, g];
  return this
};
p.wg = function(a, b, c, d) {
  var e = this.V[0] - a * Math.cos(we(c)), g = this.V[1] - b * Math.sin(we(c)), h = we(d), d = Math.ceil(Math.abs(h) / Math.PI * 2);
  h /= d;
  for(var c = we(c), j = 0;j < d;j++) {
    var l = Math.cos(c), o = Math.sin(c), v = 4 / 3 * Math.sin(h / 2) / (1 + Math.cos(h / 2)), q = e + (l - v * o) * a, w = g + (o + v * l) * b;
    c += h;
    l = Math.cos(c);
    o = Math.sin(c);
    this.cf(q, w, e + (l + v * o) * a, g + (o - v * l) * b, e + l * a, g + o * b)
  }
  return this
};
function Qi(a, b) {
  for(var c = a.Aa, d = 0, e = 0, g = a.G.length;e < g;e++) {
    var h = a.G[e], j = Pi[h] * a.f[e];
    b(h, c.slice(d, d + j));
    d += j
  }
}
p.A = function() {
  var a = new this.constructor;
  a.G = this.G.concat();
  a.f = this.f.concat();
  a.Aa = this.Aa.concat();
  a.yb = this.yb && this.yb.concat();
  a.V = this.V && this.V.concat();
  a.Qb = this.Qb;
  return a
};
var Ri = {};
Ri[0] = Oi.prototype.moveTo;
Ri[1] = Oi.prototype.lineTo;
Ri[4] = Oi.prototype.close;
Ri[2] = Oi.prototype.cf;
Ri[3] = Oi.prototype.wg;
function Si(a) {
  if(a.Qb) {
    return a.A()
  }
  var b = new Oi;
  Qi(a, function(a, d) {
    Ri[a].apply(b, d)
  });
  return b
}
Oi.prototype.Qa = function() {
  return this.G.length == 0
};
function Ti(a, b, c, d, e) {
  Pg.call(this, e);
  this.width = a;
  this.height = b;
  this.la = c || k;
  this.$b = d || k
}
C(Ti, Pg);
p = Ti.prototype;
p.J = k;
p.La = 0;
p.cb = 0;
p.rf = function() {
  return this.X()
};
p.X = function() {
  return this.C ? Gg(this.b()) : ja(this.width) && ja(this.height) ? new T(this.width, this.height) : k
};
function Ui(a) {
  var b = a.X();
  return b ? b.width / (a.la ? new T(a.la, a.$b) : a.X()).width : 0
}
;function Vi(a, b, c, d, e) {
  Ti.call(this, a, b, c, d, e);
  this.ff = {};
  this.Qe = J && !K(526);
  this.ib = new Lg(this)
}
var Wi;
C(Vi, Ti);
function Xi(a, b, c) {
  a = a.ma.B.createElementNS("http://www.w3.org/2000/svg", b);
  c && Ii(a, c);
  return a
}
function Ii(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
p = Vi.prototype;
p.wb = function(a, b) {
  (b || this.J).b().appendChild(a.b())
};
p.Ae = function(a, b) {
  var c = a.b();
  b instanceof Mi ? (c.setAttribute("fill", b.ha()), c.setAttribute("fill-opacity", b.pc)) : c.setAttribute("fill", "none")
};
p.Be = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.ha());
    var d = b.ub;
    u(d) && d.indexOf("px") != -1 ? c.setAttribute("stroke-width", parseFloat(d) / Ui(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
p.i = function() {
  var a = Xi(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = Xi(this, "g");
  this.Od = Xi(this, "defs");
  this.J = new Hi(b, this);
  a.appendChild(this.Od);
  a.appendChild(b);
  this.g = a;
  if(this.la || this.La || this.cb) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.Qe ? this.wd() : this.b().setAttribute("viewBox", this.La + " " + this.cb + " " + (this.la ? this.la + " " + this.$b : ""))
  }
};
p.wd = function() {
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
p.ba = function(a, b) {
  Eg(this.b(), a, b)
};
p.X = function() {
  if(!jc) {
    return this.C ? Gg(this.b()) : Vi.d.X.call(this)
  }
  var a = this.width, b = this.height, c = u(a) && a.indexOf("%") != -1, d = u(b) && b.indexOf("%") != -1;
  if(!this.C && (c || d)) {
    return k
  }
  var e, g;
  if(c) {
    e = this.b().parentNode, g = Gg(e), a = parseFloat(a) * g.width / 100
  }
  d && (e = e || this.b().parentNode, g = g || Gg(e), b = parseFloat(b) * g.height / 100);
  return new T(a, b)
};
p.clear = function() {
  this.J.clear();
  Df(this.Od);
  this.ff = {}
};
p.Kc = function(a, b, c, d, e, g, h) {
  a = Xi(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  e = new Ji(a, this, e, g);
  this.wb(e, h);
  return e
};
p.drawImage = function(a, b, c, d, e, g) {
  a = Xi(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", e);
  e = new Ki(a, this);
  this.wb(e, g);
  return e
};
p.R = function() {
  var a = this.X();
  Vi.d.R.call(this);
  a || this.dispatchEvent("resize");
  if(this.Qe) {
    var a = this.width, b = this.height;
    typeof a == "string" && a.indexOf("%") != -1 && typeof b == "string" && b.indexOf("%") != -1 && V(this.ib, Yi(), qd, this.wd);
    this.wd()
  }
};
p.eb = function() {
  Vi.d.eb.call(this);
  this.Qe && Ng(this.ib, Yi(), qd, this.wd)
};
p.c = function() {
  delete this.ff;
  delete this.Od;
  delete this.J;
  Vi.d.c.call(this)
};
function Yi() {
  Wi || (Wi = new od(400), Wi.start());
  return Wi
}
;function Zi() {
  return this.g = this.xa.ma.b(this.S) || this.g
}
function $i(a, b) {
  this.S = a.id;
  Y.call(this, a, b)
}
C($i, Ei);
$i.prototype.b = Zi;
$i.prototype.clear = function() {
  Df(this.b())
};
$i.prototype.ba = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  if(this.xa.J != this) {
    c.coordorigin = "0 0"
  }
};
function aj(a, b, c, d, e, g, h, j) {
  this.S = a.id;
  Z.call(this, a, b, h, j);
  this.Li = c;
  this.Mi = d;
  this.bj = e;
  this.cj = g
}
C(aj, Fi);
aj.prototype.b = Zi;
function bj(a, b) {
  this.S = a.id;
  Y.call(this, a, b)
}
C(bj, Gi);
bj.prototype.b = Zi;
bj.prototype.ba = function(a, b) {
  var c = this.b().style;
  c.width = cj(a) + "px";
  c.height = cj(b) + "px"
};
function dj(a, b, c, d, e) {
  Ti.call(this, a, b, c, d, e);
  this.ib = new Lg(this)
}
C(dj, Ti);
var ej = document.documentMode && document.documentMode >= 8;
function cj(a) {
  return Math.round((parseFloat(a.toString()) - 0.5) * 100)
}
function $(a) {
  return Math.round(parseFloat(a.toString()) * 100)
}
function fj(a, b) {
  var c = a.ma.createElement("g_vml_:" + b);
  c.id = "goog_" + Da++;
  return c
}
function gj(a) {
  if(ej && a.C) {
    a.b().innerHTML = a.b().innerHTML
  }
}
dj.prototype.wb = function(a, b) {
  (b || this.J).b().appendChild(a.b());
  gj(this)
};
dj.prototype.Ae = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var e = c.childNodes[d];
    e.tagName == "fill" && c.removeChild(e)
  }
  b instanceof Mi ? b.ha() == "transparent" ? c.filled = !1 : b.pc != 1 ? (c.filled = !0, d = fj(this, "fill"), d.opacity = Math.round(b.pc * 100) + "%", d.color = b.ha(), c.appendChild(d)) : (c.filled = !0, c.fillcolor = b.ha()) : c.filled = !1;
  gj(this)
};
dj.prototype.Be = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = !0;
    var d = b.ub;
    u(d) && d.indexOf("px") == -1 ? d = parseFloat(d) : d *= Ui(this);
    var e = c.getElementsByTagName("stroke")[0];
    d < 1 ? (e = e || fj(this, "stroke"), e.opacity = d, e.dj = "1px", e.color = b.ha(), c.appendChild(e)) : (e && c.removeChild(e), c.strokecolor = b.ha(), c.strokeweight = d + "px")
  }else {
    c.stroked = !1
  }
  gj(this)
};
function hj(a, b, c, d, e) {
  var g = a.style;
  g.position = "absolute";
  g.left = cj(b) + "px";
  g.top = cj(c) + "px";
  g.width = $(d) + "px";
  g.height = $(e) + "px";
  if(a.tagName == "shape") {
    a.coordsize = $(d) + " " + $(e)
  }
}
try {
  eval("document.namespaces")
}catch(ij) {
}
p = dj.prototype;
p.i = function() {
  var a = this.ma.B;
  if(!a.namespaces.g_vml_) {
    ej ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}"
  }
  var a = this.width, b = this.height, c = this.ma.i("div", {style:"overflow:hidden;position:relative;width:" + (u(a) && pa(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (u(b) && pa(b) ? b : parseFloat(b.toString()) + "px")});
  this.g = c;
  var d = fj(this, "group"), e = d.style;
  e.position = "absolute";
  e.left = e.top = 0;
  e.width = this.width;
  e.height = this.height;
  d.coordsize = this.la ? $(this.la) + " " + $(this.$b) : $(a) + " " + $(b);
  d.coordorigin = fa(this.La) ? $(this.La) + " " + $(this.cb) : "0 0";
  c.appendChild(d);
  this.J = new $i(d, this);
  N(c, "resize", z(this.$d, this))
};
p.$d = function() {
  var a = Gg(this.b()), b = this.J.b().style;
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
p.ba = function(a, b) {
  Eg(this.b(), a, b)
};
p.X = function() {
  var a = this.b();
  return new T(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
p.clear = function() {
  this.J.clear()
};
p.Kc = function(a, b, c, d, e, g, h) {
  var j = fj(this, "oval");
  hj(j, a - c, b - d, c * 2, d * 2);
  a = new aj(j, this, a, b, c, d, e, g);
  this.wb(a, h);
  return a
};
p.drawImage = function(a, b, c, d, e, g) {
  var h = fj(this, "image");
  hj(h, a, b, c, d);
  ej ? h.src = e : h.setAttribute("src", e);
  a = new bj(h, this);
  this.wb(a, g);
  return a
};
p.R = function() {
  dj.d.R.call(this);
  this.$d();
  gj(this)
};
p.c = function() {
  this.J = k;
  dj.d.c.call(this)
};
function jj(a) {
  Y.call(this, k, a);
  this.P = []
}
C(jj, Ei);
jj.prototype.clear = function() {
  if(this.P.length) {
    this.P.length = 0, kj(this.xa)
  }
};
jj.prototype.ba = function() {
};
jj.prototype.appendChild = function(a) {
  this.P.push(a)
};
jj.prototype.Ca = function() {
  for(var a = 0, b = this.P.length;a < b;a++) {
    lj(this.xa, this.P[a])
  }
};
function mj(a, b, c, d, e, g, h, j) {
  Z.call(this, a, b, h, j);
  this.Bg = c;
  this.Cg = d;
  this.cg = e;
  this.dg = g;
  this.z = new Oi;
  this.z.clear();
  this.z.moveTo(this.Bg + this.cg * Math.cos(we(0)), this.Cg + this.dg * Math.sin(we(0)));
  this.z.arcTo(this.cg, this.dg, 0, 360);
  this.z.close();
  this.hh = new nj(k, b, this.z, h, j)
}
C(mj, Fi);
mj.prototype.Ca = function(a) {
  this.hh.Ca(a)
};
function nj(a, b, c, d, e) {
  Z.call(this, a, b, d, e);
  this.rb(c)
}
C(nj, Di);
nj.prototype.bc = !1;
nj.prototype.rb = function(a) {
  this.z = a.Qb ? a : Si(a);
  this.bc && kj(this.xa)
};
nj.prototype.Ca = function(a) {
  this.bc = !0;
  a.beginPath();
  Qi(this.z, function(b, c) {
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
function oj(a, b, c, d, e, g, h) {
  Y.call(this, a, b);
  this.Hh = c;
  this.Jh = d;
  this.Se = e;
  this.Zd = g;
  this.rh = h
}
C(oj, Gi);
oj.prototype.bc = !1;
oj.prototype.ba = function(a, b) {
  this.Se = a;
  this.Zd = b;
  this.bc && kj(this.xa)
};
oj.prototype.Ca = function(a) {
  this.Af ? (this.Se && this.Zd && a.drawImage(this.Af, this.Hh, this.Jh, this.Se, this.Zd), this.bc = !0) : (a = new Image, a.onload = z(this.Rg, this, a), a.src = this.rh)
};
oj.prototype.Rg = function(a) {
  this.Af = a;
  kj(this.xa)
};
function pj(a, b, c, d, e) {
  Ti.call(this, a, b, c, d, e)
}
C(pj, Ti);
p = pj.prototype;
p.Ae = function() {
  kj(this)
};
p.Be = function() {
  kj(this)
};
function qj(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.lg ? b.lg.A() : new Ci, e = d.ia, g = d.ja;
  (e || g) && c.translate(e, g);
  (d = d.T) && c.rotate(Math.asin(d))
}
p.i = function() {
  var a = this.ma.i("div", {style:"position:relative;overflow:hidden"});
  this.g = a;
  this.Yb = this.ma.i("canvas");
  a.appendChild(this.Yb);
  this.Zg = this.J = new jj(this);
  this.mh = 0;
  rj(this)
};
p.getContext = function() {
  this.b() || this.i();
  if(!this.zb) {
    this.zb = this.Yb.getContext("2d"), this.zb.save()
  }
  return this.zb
};
p.ba = function(a, b) {
  this.width = a;
  this.height = b;
  rj(this);
  kj(this)
};
p.X = function() {
  var a = this.width, b = this.height, c = u(a) && a.indexOf("%") != -1, d = u(b) && b.indexOf("%") != -1;
  if(!this.C && (c || d)) {
    return k
  }
  var e, g;
  if(c) {
    e = this.b().parentNode, g = Gg(e), a = parseFloat(a) * g.width / 100
  }
  d && (e = e || this.b().parentNode, g = g || Gg(e), b = parseFloat(b) * g.height / 100);
  return new T(a, b)
};
function rj(a) {
  Eg(a.b(), a.width, a.height);
  var b = a.X();
  if(b) {
    Eg(a.Yb, b.width, b.height), a.Yb.width = b.width, a.Yb.height = b.height, a.zb = k
  }
}
p.reset = function() {
  var a = this.getContext();
  a.restore();
  var b = this.X();
  b.width && b.height && a.clearRect(0, 0, b.width, b.height);
  a.save()
};
p.clear = function() {
  this.reset();
  this.J.clear();
  for(var a = this.b();a.childNodes.length > 1;) {
    a.removeChild(a.lastChild)
  }
};
function kj(a) {
  if(a.Zi) {
    a.Yi = !0
  }else {
    if(a.C) {
      a.reset();
      if(a.la) {
        var b = a.X();
        a.getContext().scale(b.width / a.la, b.height / a.$b)
      }
      (a.La || a.cb) && a.getContext().translate(-a.La, -a.cb);
      qj(a, a.J);
      a.J.Ca(a.zb);
      a.getContext().restore()
    }
  }
}
function lj(a, b) {
  var c = a.getContext();
  qj(a, b);
  if(!b.Ng || !b.Pg) {
    b.Ca(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof Mi) {
        if(d.pc != 0) {
          c.globalAlpha = d.pc, c.fillStyle = d.ha(), b.Ca(c), c.fill(), c.globalAlpha = 1
        }
      }else {
        var e = c.createLinearGradient(d.Ri(), d.Ti(), d.Si(), d.Ui());
        e.addColorStop(0, d.Pi());
        e.addColorStop(1, d.Qi());
        c.fillStyle = e;
        b.Ca(c);
        c.fill()
      }
    }
    if(d = b.Me) {
      b.Ca(c), c.strokeStyle = d.ha(), d = d.ub, u(d) && d.indexOf("px") != -1 && (d = parseFloat(d) / Ui(a)), c.lineWidth = d, c.stroke()
    }
  }
  a.getContext().restore()
}
p.wb = function(a, b) {
  this.append(a, b)
};
p.append = function(a, b) {
  b = b || this.J;
  b.appendChild(a);
  this.C && !this.mh && !(b != this.J && b != this.Zg) && lj(this, a)
};
p.Kc = function(a, b, c, d, e, g, h) {
  a = new mj(k, this, a, b, c, d, e, g);
  this.append(a, h);
  return a
};
p.drawImage = function(a, b, c, d, e, g) {
  a = new oj(k, this, a, b, c, d, e);
  this.append(a, g);
  return a
};
p.c = function() {
  this.zb = k;
  pj.d.c.call(this)
};
p.R = function() {
  var a = this.X();
  pj.d.R.call(this);
  a || (rj(this), this.dispatchEvent("resize"));
  kj(this)
};
function sj(a) {
  this.v = [];
  tj(this, a)
}
C(sj, nd);
p = sj.prototype;
p.Za = k;
p.ye = k;
function tj(a, b) {
  b && (F(b, function(a) {
    this.xc(a, !1)
  }, a), cb(a.v, b))
}
p.Yd = m("Za");
p.qf = function() {
  return bb(this.v)
};
p.pd = function(a) {
  if(a != this.Za) {
    this.xc(this.Za, !1), this.Za = a, this.xc(a, !0)
  }
  this.dispatchEvent("select")
};
p.Xd = function() {
  return this.Za ? Ua(this.v, this.Za) : -1
};
p.Ee = function(a) {
  this.pd(this.v[a] || k)
};
p.clear = function() {
  Za(this.v);
  this.Za = k
};
p.c = function() {
  sj.d.c.call(this);
  delete this.v;
  this.Za = k
};
p.xc = function(a, b) {
  a && (typeof this.ye == "function" ? this.ye(a, b) : typeof a.De == "function" && a.De(b))
};
function uj() {
}
C(uj, Xg);
da(uj);
var wj = 0;
uj.prototype.i = function(a) {
  var b = Zg(this, a);
  return a.Ga().i("div", b ? b.join(" ") : k, xj(this, a.fa, a.rf(), a.Ga()))
};
function xj(a, b, c, d) {
  for(var e = [], g = 0, h = 0;g < c.height;g++) {
    for(var j = [], l = 0;l < c.width;l++) {
      var o = b && b[h++];
      j.push(yj(a, o, d))
    }
    e.push(d.i("tr", a.u() + "-row", j))
  }
  return a.bf(e, d)
}
uj.prototype.bf = function(a, b) {
  var c = b.i("table", this.u() + "-table", b.i("tbody", this.u() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Wg(c, "grid");
  return c
};
function yj(a, b, c) {
  a = c.i("td", {"class":a.u() + "-cell", id:a.u() + "-cell-" + wj++}, b);
  Wg(a, "gridcell");
  return a
}
uj.prototype.ld = function(a, b) {
  if(a) {
    var c = vf(document, "tbody", this.u() + "-body", a)[0];
    if(c) {
      var d = 0;
      F(c.rows, function(a) {
        F(a.cells, function(a) {
          Df(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var e = [], g = sf(a), h = c.rows[0].cells.length;d < b.length;) {
          var j = b[d++];
          e.push(yj(this, j, g));
          if(e.length == h) {
            j = g.i("tr", this.u() + "-row", e), c.appendChild(j), e.length = 0
          }
        }
        if(e.length > 0) {
          for(;e.length < h;) {
            e.push(yj(this, "", g))
          }
          j = g.i("tr", this.u() + "-row", e);
          c.appendChild(j)
        }
      }
    }
    Kg(a, !0, jc)
  }
};
function zj(a, b, c) {
  for(b = b.b();c && c.nodeType == 1 && c != b;) {
    if(c.tagName == "TD" && Ya(nf(c), a.u() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function Aj(a, b, c, d) {
  if(c) {
    c = c.parentNode, a = a.u() + "-cell-hover", d ? of(c, a) : pf(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id)
  }
}
uj.prototype.u = n("goog-palette");
function Bj(a, b, c) {
  W.call(this, a, b || uj.Oa(), c)
}
C(Bj, W);
p = Bj.prototype;
p.w = k;
p.jb = -1;
p.L = k;
p.c = function() {
  Bj.d.c.call(this);
  if(this.L) {
    this.L.e(), this.L = k
  }
  this.w = k
};
p.md = function(a) {
  Bj.d.md.call(this, a);
  Cj(this);
  this.L ? (this.L.clear(), tj(this.L, a)) : (this.L = new sj(a), this.L.ye = z(this.xc, this), V(Tg(this), this.L, "select", this.Ug));
  this.jb = -1
};
p.of = n(k);
p.Xc = function(a) {
  Bj.d.Xc.call(this, a);
  var b = zj(this.m, this, a.target);
  if((!b || !a.relatedTarget || !Ff(b, a.relatedTarget)) && b != Dj(this)) {
    a = this.fa, Ej(this, a ? Ua(a, b) : -1)
  }
};
p.Wc = function(a) {
  Bj.d.Wc.call(this, a);
  var b = zj(this.m, this, a.target);
  (!b || !a.relatedTarget || !Ff(b, a.relatedTarget)) && b == Dj(this) && Aj(this.m, this, b, !1)
};
p.Vc = function(a) {
  Bj.d.Vc.call(this, a);
  if(this.ge() && (a = zj(this.m, this, a.target), a != Dj(this))) {
    var b = this.fa;
    Ej(this, b ? Ua(b, a) : -1)
  }
};
p.mb = function() {
  var a = Dj(this);
  return a ? (this.pd(a), this.dispatchEvent("action")) : !1
};
p.wf = function(a) {
  var b = this.fa, b = b ? b.length : 0, c = this.w.width;
  if(b == 0 || !this.isEnabled()) {
    return!1
  }
  if(a.keyCode == 13 || a.keyCode == 32) {
    return this.mb(a)
  }
  if(a.keyCode == 36) {
    return Ej(this, 0), !0
  }else {
    if(a.keyCode == 35) {
      return Ej(this, b - 1), !0
    }
  }
  var d = this.jb < 0 ? this.Xd() : this.jb;
  switch(a.keyCode) {
    case 37:
      d == -1 && (d = b);
      if(d > 0) {
        return Ej(this, d - 1), a.preventDefault(), !0
      }
      break;
    case 39:
      if(d < b - 1) {
        return Ej(this, d + 1), a.preventDefault(), !0
      }
      break;
    case 38:
      d == -1 && (d = b + c - 1);
      if(d >= c) {
        return Ej(this, d - c), a.preventDefault(), !0
      }
      break;
    case 40:
      if(d == -1 && (d = -c), d < b - c) {
        return Ej(this, d + c), a.preventDefault(), !0
      }
  }
  return!1
};
p.Ug = function() {
};
p.rf = m("w");
p.ba = function(a, b) {
  this.b() && f(Error("Component already rendered"));
  this.w = ja(a) ? new T(a, b) : a;
  Cj(this)
};
function Dj(a) {
  var b = a.fa;
  return b && b[a.jb]
}
function Ej(a, b) {
  if(b != a.jb) {
    Fj(a, a.jb, !1), a.jb = b, Fj(a, b, !0)
  }
}
p.Xd = function() {
  return this.L ? this.L.Xd() : -1
};
p.Yd = function() {
  return this.L ? this.L.Yd() : k
};
p.Ee = function(a) {
  this.L && this.L.Ee(a)
};
p.pd = function(a) {
  this.L && this.L.pd(a)
};
function Fj(a, b, c) {
  if(a.b()) {
    var d = a.fa;
    d && b >= 0 && b < d.length && Aj(a.m, a, d[b], c)
  }
}
p.xc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.m.u() + "-cell-selected";
    b ? of(c, d) : pf(c, d)
  }
};
function Cj(a) {
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
;function Gj(a, b, c) {
  this.Gc = a || [];
  Bj.call(this, k, b || uj.Oa(), c);
  this.Gc = this.Gc;
  this.fd = k;
  this.ld(Hj(this))
}
C(Gj, Bj);
Gj.prototype.fd = k;
function Ij(a) {
  var b = Jj(Kj);
  if(!a.fd) {
    a.fd = Va(a.Gc, function(a) {
      return Jj(a)
    })
  }
  a.Ee(b ? Ua(a.fd, b) : -1)
}
function Hj(a) {
  return Va(a.Gc, function(a) {
    var c = this.Ga().i("div", {"class":this.m.u() + "-colorswatch", style:"background-color:" + a});
    c.title = a.charAt(0) == "#" ? "RGB (" + Gh(a).join(", ") + ")" : a;
    return c
  }, a)
}
function Jj(a) {
  if(a) {
    try {
      return Ah(a).Zc
    }catch(b) {
    }
  }
  return k
}
;var Lj = R("whiteboard.logger");
window.onerror = function(a, b, c) {
  je(Lj, "window.onerror: message: " + H(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Mj() {
  this.ue = new Ab
}
Mj.prototype.wh = function(a, b) {
  Lj.info("streamReset: reasonString=" + H(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  Nj = k
};
Mj.prototype.xh = function(a) {
  var a = Cb(a), b = a[0], c = a[1];
  b == 1 ? (c = this.ue.Pd(wb.gc(), c), a = lb(c, 1), b = lb(c, 2), c = c.ha(), rb.Kc(a, b, 5, 5, new Ni(1, "black"), new Mi(c), i)) : b == 2 ? (rb.e(), Oj()) : O(Lj, "Strange message from server: " + H(a))
};
Mj.prototype.reset = function(a) {
  Lj.info("resetting with reason: " + a);
  this.H.reset(a)
};
var Nj = k, ui = new Ed(r.window);
function Pj() {
  Nj && (Nj.reset("idle timeout fired"), Nj = k)
}
var Qj = k;
function Rj() {
  Qj != k && ui.O.clearTimeout(Qj);
  Nj && (Qj = ui.O.setTimeout(Pj, 2592E5))
}
N(window, ["click", "focus", "keydown", "keypress"], Rj, !0);
function Sj() {
  var a = new qi;
  Nj = new Mj;
  Rj();
  yd(ti(), function(b) {
    Nj || f(Error("lastProto falsy?"));
    var b = new ig(b, a, ui), c = Nj;
    b.te = z(c.xh, c);
    b.onreset = z(c.wh, c);
    Nj.H = b;
    og(Nj.H, ["subprotocol:whiteboard"]);
    b.start();
    return k
  })
}
function Tj() {
  rb.e();
  Oj();
  var a = Nj;
  Lj.info("Telling server to clear the board.");
  var b = a.H, a = [2, a.ue.qb(new xb)], a = (new Db).qb(a);
  og(b, [a])
}
function Uj(a) {
  var b = new Fc(a), a = b.offsetX, c = b.offsetY;
  rb.Kc(a, c, 5, 5, new Ni(1, "black"), new Mi(sb), i);
  var d = Nj, e = sb;
  Lj.info("Telling server about circle at: " + a + ", " + c + " with color " + e);
  var b = d.H, g = new wb;
  mb(g, 1, a);
  mb(g, 2, c);
  mb(g, 3, e);
  a = d.ue.qb(g);
  og(b, [(new Db).qb([1, a])])
}
function Oj() {
  var a;
  a = I && !K("9") ? new dj(800, 600, i, i, i) : J && (!K("420") || kc) ? new pj(800, 600, i, i, i) : new Vi(800, 600, i, i, i);
  a.i();
  tb = U("drawArea");
  Ug(a, tb);
  rb = a
}
var Kj = "#E06666";
function Vj(a) {
  var b;
  (a = a.target.Yd()) ? (a = a.style[Fa("background-color")] || "", b = Jj(a)) : b = k;
  b || (b = Kj);
  sb = b;
  oi.set("whiteboard_defaultColor", b);
  a = U("whiteboard-cp-value");
  u("background-color") ? Cg(a, b, "background-color") : Pa("background-color", oa(Cg, a));
  a = U("whiteboard-cp-value");
  a.title = b;
  b = Ah(b).Zc;
  Gf(a, b);
  b = Gh(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = Eh(b[0], b[1], b[2]);
  u("color") ? Cg(a, b, "color") : Pa("color", oa(Cg, a))
}
function Wj() {
  ub = (new Re(document.location)).U;
  if(vb = Boolean(Number(ub.get("logging", "0")))) {
    ne().od(he);
    var a = new Bi(document.getElementById("log"));
    if(!0 != a.Cf) {
      var b = ne(), c = a.kh;
      if(!b.jc) {
        b.jc = []
      }
      b.jc.push(c);
      a.Cf = !0
    }
  }else {
    ne().od($d)
  }
  Lj.info("Logger works.");
  (a = oi.get("whiteboard_defaultColor")) && (Kj = a);
  sb = Kj;
  b = U("whiteboard-controls-left");
  a = U("whiteboard-controls-right");
  c = yf("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  Cf(b, c);
  c = yf("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  Cf(b, c);
  b = new Gj("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.ba(8);
  Ug(b, U("whiteboard-cp"));
  N(b, "action", Vj);
  Ij(b);
  Vj({target:b});
  b = new yh("Clear board");
  nh(b, "clear-board-button");
  Ug(b, a);
  N(b, "action", Tj);
  a = U("drawAreaOverlay");
  Kg(a, !0);
  N(a, "click", Uj, !1);
  Oj();
  Sj()
}
var Xj = "__whiteboard_init".split("."), Yj = r;
!(Xj[0] in Yj) && Yj.execScript && Yj.execScript("var " + Xj[0]);
for(var Zj;Xj.length && (Zj = Xj.shift());) {
  !Xj.length && fa(Wj) ? Yj[Zj] = Wj : Yj = Yj[Zj] ? Yj[Zj] : Yj[Zj] = {}
}
;})();
