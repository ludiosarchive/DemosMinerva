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
    return a.Vg || (a.Vg = new a)
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
  this.Vi = a
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
  this.Gb = !!c.Yi;
  this.Ti = !!c.required;
  this.ec = c.Vd;
  this.Nf = c.type;
  this.gf = !1;
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
      this.gf = !0
  }
  this.Li = c.defaultValue
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
  this.Lf = a;
  this.oe = b.name || k;
  this.Mi = b.mf || k;
  this.Ii = b.Hi;
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
  this.t = {};
  this.Cb = this.constructor.Cb;
  var a = this.Cb.Ma, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.Ma = b;
  this.ac = this.ke = k
}
function kb(a, b) {
  for(var c in a.t) {
    a.Ma[c] || b.call(a, Number(c), a.t[c])
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
  this.t[c] || (this.t[c] = []);
  this.t[c].push(b)
};
p.clear = function(a) {
  delete this.t[a.K]
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
      var e = Oa(d), g = d.K, h = this.t[g], g = a.t[g];
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
p.Ze = function(a) {
  for(var b = ib(this.gc()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete this.t[d.K];
    if(nb(a, d.K)) {
      var e = Oa(d);
      if(d.Gb) {
        var g;
        g = a;
        var h = d.K;
        ob(g, g.Ma[h]);
        g = g.t[h] || [];
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
  a.Ze(this);
  return a
};
function nb(a, b) {
  return b in a.t && fa(a.t[b])
}
function ob(a, b) {
  if(a.ke) {
    var c = b.K;
    if(!(c in a.ac)) {
      var d = a.t, e;
      e = a.ke;
      var g = a.t[c];
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
  return d.Gb ? (c = c || 0, c >= 0 && pb(a, b), a.t[b][c]) : (t(a.t[b]), b in a.t ? a.t[b] : k)
}
function pb(a, b) {
  return a.Ma[b].Gb ? (nb(a, b) && t(a.t[b]), nb(a, b) ? a.t[b].length : 0) : nb(a, b) ? 1 : 0
}
function mb(a, b, c) {
  a.t[b] = c;
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
wb.prototype.fa = function() {
  return lb(this, 3)
};
function xb() {
  jb.apply(this)
}
C(xb, jb);
qb(wb, {0:{name:"Point", mf:"demosminerva.whiteboard_messages.Point"}, 1:{name:"x", Vd:5, type:Number}, 2:{name:"y", Vd:5, type:Number}, 3:{name:"color", Vd:9, type:String}});
qb(xb, {0:{name:"ClearBoard", mf:"demosminerva.whiteboard_messages.ClearBoard"}});
function yb() {
}
yb.prototype.Rc = function(a, b) {
  return Oa(a) ? this.qb(b) : b
};
yb.prototype.Pd = function(a) {
  new a.Lf;
  f(Error("Unimplemented"))
};
yb.prototype.Qc = function(a, b) {
  if(Oa(a)) {
    return this.Pd(a.Nf.Cb, b)
  }
  if(!a.gf) {
    return b
  }
  var c = a.Nf;
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
  var c = new a.Lf;
  c.ke = this;
  c.t = b;
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
        if(Bb(a.r)) {
          a.r(b, c)
        }else {
          if(Bb(a.rg)) {
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
  if(typeof a.Ga == "function") {
    return a.Ga()
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
p.Qe = 0;
p.W = m("f");
p.Y = function() {
  Pb(this);
  for(var a = [], b = 0;b < this.l.length;b++) {
    a.push(this.p[this.l[b]])
  }
  return a
};
p.Ga = function() {
  Pb(this);
  return this.l.concat()
};
p.ca = function(a) {
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
  this.Qe = this.f = this.l.length = 0
};
p.remove = function(a) {
  return Qb(this.p, a) ? (delete this.p[a], this.f--, this.Qe++, this.l.length > 2 * this.f && Pb(this), !0) : !1
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
  Qb(this.p, a) || (this.f++, this.l.push(a), this.Qe++);
  this.p[a] = b
};
p.Cd = function(a) {
  var b;
  a instanceof Ob ? (b = a.Ga(), a = a.Y()) : (b = Ra(a), a = Qa(a));
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
Ub.prototype.r = function(a, b) {
  a.push("new SACK(", String(this.vb), ", ");
  G(this.pb, a, b);
  a.push(")")
};
function Vb() {
  this.w = new Ob
}
p = Vb.prototype;
p.Ab = -1;
p.v = 0;
p.append = function(a) {
  var b = Tb(a);
  this.w.set(this.Ab + 1, [a, b]);
  this.Ab += 1;
  this.v += b
};
p.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
p.r = function(a) {
  a.push("<Queue with ", String(this.w.W()), " item(s), counter=#", String(this.Ab), ", size=", String(this.v), ">")
};
function Wb(a) {
  Pb(a.w);
  fb(a.w.l);
  return a.w.l
}
function Xb() {
  this.ab = new Ob
}
Xb.prototype.Ib = -1;
Xb.prototype.v = 0;
function Yb(a) {
  var b = a.ab.Ga();
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
var yc = {Nh:"click", Sh:"dblclick", mi:"mousedown", qi:"mouseup", pi:"mouseover", oi:"mouseout", ni:"mousemove", Ai:"selectstart", gi:"keypress", fi:"keydown", hi:"keyup", Lh:"blur", $h:"focus", Th:"deactivate", ai:I ? "focusin" : "DOMFocusIn", bi:I ? "focusout" : "DOMFocusOut", Mh:"change", zi:"select", Bi:"submit", ei:"input", vi:"propertychange", Xh:"dragstart", Uh:"dragenter", Wh:"dragover", Vh:"dragleave", Yh:"drop", Fi:"touchstart", Ei:"touchmove", Di:"touchend", Ci:"touchcancel", Ph:"contextmenu", 
Zh:"error", di:"help", ii:"load", ji:"losecapture", wi:"readystatechange", xi:"resize", yi:"scroll", Gi:"unload", ci:"hashchange", ri:"pagehide", si:"pageshow", ui:"popstate", Qh:"copy", ti:"paste", Rh:"cut", Ih:"beforecopy", Jh:"beforecut", Kh:"beforepaste", li:"message", Oh:"connect"};
var zc = !I || wc(), Ac = I && !K("8");
function L() {
}
L.prototype.ua = !1;
L.prototype.e = function() {
  if(!this.ua) {
    this.ua = !0, this.c()
  }
};
L.prototype.c = function() {
  this.Cg && Bc.apply(k, this.Cg)
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
p.gh = !1;
p.Da = k;
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
  this.gh = mc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Da = a;
  delete this.vc;
  delete this.nb
};
function Hc(a) {
  return zc ? a.Da.button == 0 : a.type == "click" ? !0 : !!(a.Da.button & Gc[0])
}
p.stopPropagation = function() {
  Fc.d.stopPropagation.call(this);
  this.Da.stopPropagation ? this.Da.stopPropagation() : this.Da.cancelBubble = !0
};
p.preventDefault = function() {
  Fc.d.preventDefault.call(this);
  var a = this.Da;
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
  this.relatedTarget = this.currentTarget = this.target = this.Da = k
};
function Ic() {
}
var Jc = 0;
p = Ic.prototype;
p.key = 0;
p.ob = !1;
p.Gd = !1;
p.kc = function(a, b, c, d, e, g) {
  x(a) ? this.Cf = !0 : a && a.handleEvent && x(a.handleEvent) ? this.Cf = !1 : f(Error("Invalid listener argument"));
  this.Lb = a;
  this.Wf = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Yc = g;
  this.Gd = !1;
  this.key = ++Jc;
  this.ob = !1
};
p.handleEvent = function(a) {
  return this.Cf ? this.Lb.call(this.Yc || this.src, a) : this.Lb.handleEvent.call(this.Lb, a)
};
var Kc, Lc = (Kc = "ScriptEngine" in r && r.ScriptEngine() == "JScript") ? r.ScriptEngineMajorVersion() + "." + r.ScriptEngineMinorVersion() + "." + r.ScriptEngineBuildVersion() : "0";
function Mc(a, b) {
  this.Hf = b;
  this.gb = [];
  a > this.Hf && f(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.gb.push(this.Aa ? this.Aa() : {})
  }
}
C(Mc, L);
Mc.prototype.Aa = k;
Mc.prototype.hf = k;
Mc.prototype.getObject = function() {
  return this.gb.length ? this.gb.pop() : this.Aa ? this.Aa() : {}
};
function Nc(a, b) {
  a.gb.length < a.Hf ? a.gb.push(b) : Oc(a, b)
}
function Oc(a, b) {
  if(a.hf) {
    a.hf(b)
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
    Oc(this, a.pop())
  }
  delete this.gb
};
var Pc, Qc, Rc, Sc, Tc, Uc, Vc, Wc, Xc, Yc, Zc;
(function() {
  function a() {
    return{f:0, oa:0}
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
  Uc = function(a) {
    h = a
  };
  if(g) {
    Pc = function() {
      return j.getObject()
    };
    Qc = function(a) {
      Nc(j, a)
    };
    Rc = function() {
      return l.getObject()
    };
    Sc = function(a) {
      Nc(l, a)
    };
    Tc = function() {
      return o.getObject()
    };
    Vc = function() {
      Nc(o, c())
    };
    Wc = function() {
      return v.getObject()
    };
    Xc = function(a) {
      Nc(v, a)
    };
    Yc = function() {
      return q.getObject()
    };
    Zc = function(a) {
      Nc(q, a)
    };
    var j = new Mc(0, 600);
    j.Aa = a;
    var l = new Mc(0, 600);
    l.Aa = b;
    var o = new Mc(0, 600);
    o.Aa = c;
    var v = new Mc(0, 600);
    v.Aa = d;
    var q = new Mc(0, 600);
    q.Aa = e
  }else {
    Pc = a, Qc = s, Rc = b, Sc = s, Tc = c, Vc = s, Wc = d, Xc = s, Yc = e, Zc = s
  }
})();
var $c = {}, M = {}, ad = {}, bd = {};
function N(a, b, c, d, e) {
  if(b) {
    if(t(b)) {
      for(var g = 0;g < b.length;g++) {
        N(a, b[g], c, d, e)
      }
      return k
    }else {
      var d = !!d, h = M;
      b in h || (h[b] = Pc());
      h = h[b];
      d in h || (h[d] = Pc(), h.f++);
      var h = h[d], j = y(a), l;
      h.oa++;
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
        l = h[j] = Rc(), h.f++
      }
      g = Tc();
      g.src = a;
      h = Wc();
      h.kc(c, g, a, b, d, e);
      c = h.key;
      g.key = c;
      l.push(h);
      $c[c] = h;
      ad[j] || (ad[j] = Rc());
      ad[j].push(h);
      a.addEventListener ? (a == r || !a.Md) && a.addEventListener(b, g, d) : a.attachEvent(b in bd ? bd[b] : bd[b] = "on" + b, g);
      return c
    }
  }else {
    f(Error("Invalid event type"))
  }
}
function cd(a, b, c, d, e) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      cd(a, b[g], c, d, e)
    }
    return k
  }
  a = N(a, b, c, d, e);
  $c[a].Gd = !0;
  return a
}
function dd(a, b, c, d, e) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      dd(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = ed(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Lb == c && a[g].capture == d && a[g].Yc == e) {
          fd(a[g].key);
          break
        }
      }
    }
  }
}
function fd(a) {
  if(!$c[a]) {
    return!1
  }
  var b = $c[a];
  if(b.ob) {
    return!1
  }
  var c = b.src, d = b.type, e = b.Wf, g = b.capture;
  c.removeEventListener ? (c == r || !c.Md) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in bd ? bd[d] : bd[d] = "on" + d, e);
  c = y(c);
  e = M[d][g][c];
  if(ad[c]) {
    var h = ad[c];
    $a(h, b);
    h.length == 0 && delete ad[c]
  }
  b.ob = !0;
  e.Pf = !0;
  gd(d, g, c, e);
  delete $c[a];
  return!0
}
function gd(a, b, c, d) {
  if(!d.ed && d.Pf) {
    for(var e = 0, g = 0;e < d.length;e++) {
      if(d[e].ob) {
        var h = d[e].Wf;
        h.src = k;
        Vc(h);
        Xc(d[e])
      }else {
        e != g && (d[g] = d[e]), g++
      }
    }
    d.length = g;
    d.Pf = !1;
    g == 0 && (Sc(d), delete M[a][b][c], M[a][b].f--, M[a][b].f == 0 && (Qc(M[a][b]), delete M[a][b], M[a].f--), M[a].f == 0 && (Qc(M[a]), delete M[a]))
  }
}
function hd(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Pa(ad, function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          fd(g.key), c++
        }
      }
    })
  }else {
    if(a = y(a), ad[a]) {
      for(var a = ad[a], e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          fd(g.key), c++
        }
      }
    }
  }
}
function ed(a, b, c) {
  var d = M;
  return b in d && (d = d[b], c in d && (d = d[c], a = y(a), d[a])) ? d[a] : k
}
function id(a, b, c, d, e) {
  var g = 1, b = y(b);
  if(a[b]) {
    a.oa--;
    a = a[b];
    a.ed ? a.ed++ : a.ed = 1;
    try {
      for(var h = a.length, j = 0;j < h;j++) {
        var l = a[j];
        l && !l.ob && (g &= jd(l, e) !== !1)
      }
    }finally {
      a.ed--, gd(c, d, b, a)
    }
  }
  return Boolean(g)
}
function jd(a, b) {
  var c = a.handleEvent(b);
  a.Gd && fd(a.key);
  return c
}
Uc(function(a, b) {
  if(!$c[a]) {
    return!0
  }
  var c = $c[a], d = c.type, e = M;
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
    o = Yc();
    o.kc(g, this);
    g = !0;
    try {
      if(j) {
        for(var q = Rc(), w = o.currentTarget;w;w = w.parentNode) {
          q.push(w)
        }
        h = e[!0];
        h.oa = h.f;
        for(var B = q.length - 1;!o.nb && B >= 0 && h.oa;B--) {
          o.currentTarget = q[B], g &= id(h, q[B], d, !0, o)
        }
        if(l) {
          h = e[!1];
          h.oa = h.f;
          for(B = 0;!o.nb && B < q.length && h.oa;B++) {
            o.currentTarget = q[B], g &= id(h, q[B], d, !1, o)
          }
        }
      }else {
        g = jd(c, o)
      }
    }finally {
      if(q) {
        q.length = 0, Sc(q)
      }
      o.e();
      Zc(o)
    }
    return g
  }
  d = new Fc(b, this);
  try {
    g = jd(c, d)
  }finally {
    d.e()
  }
  return g
});
var kd = 0;
function md() {
}
C(md, L);
p = md.prototype;
p.Md = !0;
p.hd = k;
p.Be = aa("hd");
p.addEventListener = function(a, b, c, d) {
  N(this, a, b, c, d)
};
p.removeEventListener = function(a, b, c, d) {
  dd(this, a, b, c, d)
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
      g.oa = g.f;
      for(var h = e.length - 1;!a.nb && h >= 0 && g.oa;h--) {
        a.currentTarget = e[h], d &= id(g, e[h], a.type, !0, a) && a.vc != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.oa = g.f, b) {
        for(h = 0;!a.nb && h < e.length && g.oa;h++) {
          a.currentTarget = e[h], d &= id(g, e[h], a.type, !1, a) && a.vc != !1
        }
      }else {
        for(e = this;!a.nb && e && g.oa;e = e.hd) {
          a.currentTarget = e, d &= id(g, e, a.type, !1, a) && a.vc != !1
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
  md.d.c.call(this);
  hd(this);
  this.hd = k
};
function nd(a, b) {
  this.ad = a || 1;
  this.Bc = b || od;
  this.Ed = z(this.wh, this);
  this.je = A()
}
C(nd, md);
nd.prototype.enabled = !1;
var od = r.window;
p = nd.prototype;
p.sa = k;
p.wh = function() {
  if(this.enabled) {
    var a = A() - this.je;
    if(a > 0 && a < this.ad * 0.8) {
      this.sa = this.Bc.setTimeout(this.Ed, this.ad - a)
    }else {
      if(this.dispatchEvent(pd), this.enabled) {
        this.sa = this.Bc.setTimeout(this.Ed, this.ad), this.je = A()
      }
    }
  }
};
p.start = function() {
  this.enabled = !0;
  if(!this.sa) {
    this.sa = this.Bc.setTimeout(this.Ed, this.ad), this.je = A()
  }
};
p.stop = function() {
  this.enabled = !1;
  if(this.sa) {
    this.Bc.clearTimeout(this.sa), this.sa = k
  }
};
p.c = function() {
  nd.d.c.call(this);
  this.stop();
  delete this.Bc
};
var pd = "tick";
kd++;
kd++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function qd(a, b) {
  this.Fc = [];
  this.Ve = a;
  this.df = b || k
}
p = qd.prototype;
p.Na = !1;
p.hc = !1;
p.qc = 0;
p.Ge = !1;
p.xg = !1;
p.Fd = 0;
p.cancel = function(a) {
  if(this.Na) {
    this.uc instanceof qd && this.uc.cancel()
  }else {
    if(this.D) {
      var b = this.D;
      delete this.D;
      a ? b.cancel(a) : (b.Fd--, b.Fd <= 0 && b.cancel())
    }
    this.Ve ? this.Ve.call(this.df, this) : this.Ge = !0;
    this.Na || this.dc(new rd(this))
  }
};
p.Ye = function(a, b) {
  sd(this, a, b);
  this.qc--;
  this.qc == 0 && this.Na && td(this)
};
function sd(a, b, c) {
  a.Na = !0;
  a.uc = c;
  a.hc = !b;
  td(a)
}
function ud(a) {
  if(a.Na) {
    a.Ge || f(new vd(a)), a.Ge = !1
  }
}
function wd(a, b) {
  ud(a);
  sd(a, !0, b)
}
p.dc = function(a) {
  ud(this);
  sd(this, !1, a)
};
function xd(a, b) {
  yd(a, b, k, i)
}
function yd(a, b, c, d) {
  a.Fc.push([b, c, d]);
  a.Na && td(a)
}
function zd(a, b) {
  yd(a, b, b, i)
}
function Ad(a) {
  return Wa(a.Fc, function(a) {
    return x(a[1])
  })
}
function td(a) {
  a.Ne && a.Na && Ad(a) && (r.clearTimeout(a.Ne), delete a.Ne);
  a.D && (a.D.Fd--, delete a.D);
  for(var b = a.uc, c = !1, d = !1;a.Fc.length && a.qc == 0;) {
    var e = a.Fc.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.hc ? h : g) {
      try {
        var j = g.call(e || a.df, b);
        if(fa(j)) {
          a.hc = a.hc && (j == b || j instanceof Error), a.uc = b = j
        }
        b instanceof qd && (d = !0, a.qc++)
      }catch(l) {
        b = l, a.hc = !0, Ad(a) || (c = !0)
      }
    }
  }
  a.uc = b;
  if(d && a.qc) {
    yd(b, z(a.Ye, a, !0), z(a.Ye, a, !1)), b.xg = !0
  }
  if(c) {
    a.Ne = r.setTimeout(function() {
      fa(b.message) && b.stack && (b.message += "\n" + b.stack);
      f(b)
    }, 0)
  }
}
function Bd(a) {
  var b = new qd;
  wd(b, a);
  return b
}
function Cd(a) {
  var b = new qd;
  b.dc(a);
  return b
}
function vd(a) {
  D.call(this);
  this.Bg = a
}
C(vd, D);
vd.prototype.message = "Already called";
function rd(a) {
  D.call(this);
  this.Bg = a
}
C(rd, D);
rd.prototype.message = "Deferred was cancelled";
function Dd(a) {
  this.O = a;
  this.Mc = [];
  this.jf = [];
  this.wg = z(this.Ah, this)
}
Dd.prototype.sa = k;
function Ed(a, b, c, d) {
  a.Mc.push([b, c, d]);
  if(a.sa == k) {
    a.sa = a.O.setTimeout(a.wg, 0)
  }
}
Dd.prototype.Ah = function() {
  this.sa = k;
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
    a = this.jf;
    this.jf = [];
    for(b = 0;b < a.length;b++) {
      wd(a[b], k)
    }
  }
};
var Fd = new Dd(r.window);
function Gd(a, b) {
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
        a.push('<property id="', d, '">'), Gd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if(typeof b.getFullYear == "function") {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && ea(b[c]) != "function" && (a.push('<property id="', ua(c), '">'), Gd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function Hd(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, e = arguments;
  d.push("<arguments>");
  for(var g = e.length, h = 1;h < g;h++) {
    Gd(d, e[h])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;function Id() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ A()).toString(36)
}
function Jd(a) {
  return a.substr(0, a.length - 1)
}
var Kd = /^(0|[1-9]\d*)$/, Ld = /^(0|\-?[1-9]\d*)$/;
function Md(a) {
  var b = Nd;
  return Kd.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function Od(a) {
  this.p = new Ob;
  a && this.Cd(a)
}
function Pd(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + y(a) : b.substr(0, 1) + a
}
p = Od.prototype;
p.W = function() {
  return this.p.W()
};
p.add = function(a) {
  this.p.set(Pd(a), a)
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
  return this.p.remove(Pd(a))
};
p.clear = function() {
  this.p.clear()
};
p.Qa = function() {
  return this.p.Qa()
};
p.contains = function(a) {
  return this.p.ca(Pd(a))
};
p.Y = function() {
  return this.p.Y()
};
p.A = function() {
  return new Od(this)
};
p.n = function(a) {
  return this.W() == Jb(a) && Qd(this, a)
};
function Qd(a, b) {
  var c = Jb(b);
  if(a.W() > c) {
    return!1
  }
  !(b instanceof Od) && c > 5 && (b = new Od(b));
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
;function Rd(a) {
  return Sd(a || arguments.callee.caller, [])
}
function Sd(a, b) {
  var c = [];
  if(Ya(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(Td(a) + "(");
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
            g = (g = Td(g)) ? g : "[fn]";
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
        c.push(Sd(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Td(a) {
  if(Ud[a]) {
    return Ud[a]
  }
  a = String(a);
  if(!Ud[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Ud[a] = b ? b[1] : "[Anonymous]"
  }
  return Ud[a]
}
var Ud = {};
function Vd(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Vd.prototype.mh = 0;
Vd.prototype.Td = k;
Vd.prototype.Sd = k;
var Wd = 0;
Vd.prototype.reset = function(a, b, c, d, e) {
  this.mh = typeof e == "number" ? e : Wd++;
  this.hg = d || A();
  this.Kb = a;
  this.Mf = b;
  this.Yg = c;
  delete this.Td;
  delete this.Sd
};
Vd.prototype.od = aa("Kb");
function Xd(a) {
  this.oe = a
}
Xd.prototype.D = k;
Xd.prototype.Kb = k;
Xd.prototype.P = k;
Xd.prototype.jc = k;
function Yd(a, b) {
  this.name = a;
  this.value = b
}
Yd.prototype.toString = m("name");
var Zd = new Yd("OFF", Infinity), $d = new Yd("SHOUT", 1200), ae = new Yd("SEVERE", 1E3), be = new Yd("WARNING", 900), ce = new Yd("INFO", 800), de = new Yd("CONFIG", 700), ee = new Yd("FINE", 500), fe = new Yd("FINEST", 300), ge = new Yd("ALL", 0);
p = Xd.prototype;
p.getParent = m("D");
p.od = aa("Kb");
function he(a) {
  if(a.Kb) {
    return a.Kb
  }
  if(a.D) {
    return he(a.D)
  }
  Ha("Root logger has no level set.");
  return k
}
p.log = function(a, b, c) {
  if(a.value >= he(this).value) {
    a = this.Mg(a, b, c);
    b = "log:" + a.Mf;
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
p.Mg = function(a, b, c) {
  var d = new Vd(a, String(b), this.oe);
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
          l = c.lineNumber || c.Ui || "Not available"
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
      e = "Message: " + ua(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + ua(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ua(Rd(g) + "-> ")
    }catch(B) {
      e = "Exception trying to expose exception! You win, we lose. " + B
    }
    d.Sd = e
  }
  return d
};
function ie(a, b) {
  a.log(ae, b, i)
}
function O(a, b) {
  a.log(be, b, i)
}
p.info = function(a, b) {
  this.log(ce, a, b)
};
function P(a, b) {
  a.log(ee, b, i)
}
function Q(a, b) {
  a.log(fe, b, i)
}
var je = {}, ke = k;
function le() {
  ke || (ke = new Xd(""), je[""] = ke, ke.od(de))
}
function me() {
  le();
  return ke
}
function R(a) {
  le();
  var b;
  if(!(b = je[a])) {
    b = new Xd(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = R(a.substr(0, c));
    if(!c.P) {
      c.P = {}
    }
    c.P[d] = b;
    b.D = c;
    je[a] = b
  }
  return b
}
;function ne(a, b) {
  this.S = "_" + Id();
  this.vd = a;
  this.Va = b;
  this.$a = a.$a
}
C(ne, L);
p = ne.prototype;
p.lb = !0;
p.Jc = !1;
p.a = R("cw.net.FlashSocket");
p.r = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.S);
  a.push("'>")
};
function oe(a, b, c) {
  b == "frames" ? (a = a.Va, pe(a.N), qe(a.N, c)) : b == "stillreceiving" ? (c = a.Va, Q(c.a, "onstillreceiving"), pe(c.N)) : b == "connect" ? (c = a.Va, c.a.info("onconnect"), pe(c.N), a = c.Wb, c.Wb = k, a.length && (Q(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.rd.Ec(a))) : b == "close" ? (a.lb = !1, a.e()) : b == "ioerror" ? (a.lb = !1, b = a.Va, O(b.a, "onioerror: " + H(c)), re(b.N, !1), a.e()) : b == "securityerror" ? (a.lb = !1, b = a.Va, O(b.a, "onsecurityerror: " + 
  H(c)), re(b.N, !1), a.e()) : f(Error("bad event: " + b))
}
p.Jd = function(a, b) {
  try {
    var c = this.$a.CallFunction(Hd("__FC_connect", this.S, a, b, "<int32/>\n"))
  }catch(d) {
    ie(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message);
    this.Jc = !0;
    this.lb = !1;
    this.e();
    return
  }
  c != '"OK"' && f(Error("__FC_connect failed? ret: " + c))
};
p.Ec = function(a) {
  try {
    var b = this.$a.CallFunction(Hd("__FC_writeFrames", this.S, a))
  }catch(c) {
    ie(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message);
    this.Jc = !0;
    this.lb = !1;
    this.e();
    return
  }
  b != '"OK"' && (b == '"no such instance"' ? (O(this.a, "Flash no longer knows of " + this.S + "; disposing."), this.e()) : f(Error("__FC_writeFrames failed? ret: " + b)))
};
p.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.lb);
  ne.d.c.call(this);
  var a = this.$a;
  delete this.$a;
  if(this.lb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(Hd("__FC_close", this.S)))
    }catch(b) {
      ie(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Jc = !0
    }
  }
  if(this.Jc) {
    a = this.Va, O(a.a, "oncrash"), re(a.N, !0)
  }else {
    this.Va.onclose()
  }
  delete this.Va;
  delete this.vd.Eb[this.S]
};
function se(a, b) {
  this.M = a;
  this.$a = b;
  this.Eb = {};
  this.Hd = "__FST_" + Id();
  r[this.Hd] = z(this.Fg, this);
  var c = b.CallFunction(Hd("__FC_setCallbackFunc", this.Hd));
  c != '"OK"' && f(Error("__FC_setCallbackFunc failed? ret: " + c))
}
C(se, L);
p = se.prototype;
p.a = R("cw.net.FlashSocketTracker");
p.r = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  G(this.Eb, a, b);
  a.push(">")
};
p.Ld = function(a) {
  a = new ne(this, a);
  return this.Eb[a.S] = a
};
p.Dg = function(a, b, c, d) {
  var e = this.Eb[a];
  e ? b == "frames" && d ? (oe(e, "ioerror", "FlashConnector hadError while handling data."), e.e()) : oe(e, b, c) : O(this.a, "Cannot dispatch because we have no instance: " + H([a, b, c, d]))
};
p.Fg = function(a, b, c, d) {
  try {
    Ed(this.M, this.Dg, this, [a, b, c, d])
  }catch(e) {
    r.window.setTimeout(function() {
      f(e)
    }, 0)
  }
};
p.c = function() {
  se.d.c.call(this);
  for(var a = Qa(this.Eb);a.length;) {
    a.pop().e()
  }
  delete this.Eb;
  delete this.$a;
  r[this.Hd] = i
};
function te(a) {
  this.N = a;
  this.Wb = []
}
C(te, L);
p = te.prototype;
p.a = R("cw.net.FlashSocketConduit");
p.Ec = function(a) {
  this.Wb ? (Q(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Wb.push.apply(this.Wb, a)) : (Q(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.rd.Ec(a))
};
p.Jd = function(a, b) {
  this.rd.Jd(a, b)
};
p.onclose = function() {
  this.a.info("onclose");
  re(this.N, !1)
};
p.c = function() {
  this.a.info("in disposeInternal.");
  te.d.c.call(this);
  this.rd.e();
  delete this.N
};
function ue() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function ve(a) {
  return a * Math.PI / 180
}
;var Nd = Math.pow(2, 53);
var we = {rg:n("<cw.eq.Wildcard>")};
function xe(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function ye(a, b, c) {
  var d = ea(a), e = ea(b);
  if(a == we || b == we) {
    return!0
  }else {
    if(a != k && typeof a.n == "function") {
      return c && c.push("running custom equals function on left object"), a.n(b, c)
    }else {
      if(b != k && typeof b.n == "function") {
        return c && c.push("running custom equals function on right object"), b.n(a, c)
      }else {
        if(xe(d) || xe(e)) {
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
                      if(!ye(a[d], b[d], c)) {
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
                if(a.qg == $b && b.qg == $b) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = !1;
                        break a
                      }
                      if(!ye(a[g], b[g], c)) {
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
function ze() {
  var a = [];
  this.na(a);
  return a.join("")
}
function Ae() {
}
Ae.prototype.n = function(a, b) {
  return!(a instanceof Ae) ? !1 : ye(Be(this), Be(a), b)
};
Ae.prototype.r = function(a, b) {
  a.push("<HelloFrame properties=");
  G(Be(this), a, b);
  a.push(">")
};
function Be(a) {
  return[a.Sb, a.Vf, a.xf, a.Yf, a.Ac, a.Je, a.Of, a.Kf, a.ne, a.If, a.mg, a.gg, a.qa, a.dd]
}
Ae.prototype.ea = ze;
Ae.prototype.na = function(a) {
  var b = {};
  b.tnum = this.Sb;
  b.ver = this.Vf;
  b.format = this.xf;
  b["new"] = this.Yf;
  b.id = this.Ac;
  b.ming = this.Je;
  b.pad = this.Of;
  b.maxb = this.Kf;
  if(fa(this.ne)) {
    b.maxt = this.ne
  }
  b.maxia = this.If;
  b.tcpack = this.mg;
  b.eeds = this.gg;
  b.sack = this.qa instanceof Ub ? Jd((new Ce(this.qa)).ea()) : this.qa;
  b.seenack = this.dd instanceof Ub ? Jd((new Ce(this.dd)).ea()) : this.dd;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new Db).qb(b), "H")
};
function De(a) {
  this.Rb = a
}
De.prototype.n = function(a) {
  return a instanceof De && this.Rb == a.Rb
};
De.prototype.r = function(a, b) {
  a.push("new StringFrame(");
  G(this.Rb, a, b);
  a.push(")")
};
De.prototype.ea = ze;
De.prototype.na = function(a) {
  a.push(this.Rb, " ")
};
function Ee(a) {
  this.Hc = a
}
Ee.prototype.n = function(a) {
  return a instanceof Ee && this.Hc == a.Hc
};
Ee.prototype.r = function(a, b) {
  a.push("new CommentFrame(");
  G(this.Hc, a, b);
  a.push(")")
};
Ee.prototype.ea = ze;
Ee.prototype.na = function(a) {
  a.push(this.Hc, "^")
};
function Fe(a) {
  this.yc = a
}
Fe.prototype.n = function(a) {
  return a instanceof Fe && this.yc == a.yc
};
Fe.prototype.r = function(a) {
  a.push("new SeqNumFrame(", String(this.yc), ")")
};
Fe.prototype.ea = ze;
Fe.prototype.na = function(a) {
  a.push(String(this.yc), "N")
};
function Ge(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return k
  }
  a: {
    var c = b[1], a = Nd;
    if(Ld.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
      var g = Md(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Ub(a, c)
}
function Ce(a) {
  this.qa = a
}
Ce.prototype.n = function(a, b) {
  return a instanceof Ce && this.qa.n(a.qa, b)
};
Ce.prototype.r = function(a, b) {
  a.push("new SackFrame(");
  G(this.qa, a, b);
  a.push(")")
};
Ce.prototype.ea = ze;
Ce.prototype.na = function(a) {
  var b = this.qa;
  a.push(b.pb.join(","), "|", String(b.vb));
  a.push("A")
};
function He(a) {
  this.nc = a
}
He.prototype.n = function(a, b) {
  return a instanceof He && this.nc.n(a.nc, b)
};
He.prototype.r = function(a, b) {
  a.push("new StreamStatusFrame(");
  G(this.nc, a, b);
  a.push(")")
};
He.prototype.ea = ze;
He.prototype.na = function(a) {
  var b = this.nc;
  a.push(b.pb.join(","), "|", String(b.vb));
  a.push("T")
};
function Ie() {
}
Ie.prototype.r = function(a) {
  a.push("new StreamCreatedFrame()")
};
Ie.prototype.n = function(a) {
  return a instanceof Ie
};
Ie.prototype.ea = ze;
Ie.prototype.na = function(a) {
  a.push("C")
};
function Je() {
}
Je.prototype.r = function(a) {
  a.push("new YouCloseItFrame()")
};
Je.prototype.n = function(a) {
  return a instanceof Je
};
Je.prototype.ea = ze;
Je.prototype.na = function(a) {
  a.push("Y")
};
function Ke(a, b) {
  this.sc = a;
  this.Vb = b
}
Ke.prototype.n = function(a) {
  return a instanceof Ke && this.sc == a.sc && this.Vb == a.Vb
};
Ke.prototype.r = function(a, b) {
  a.push("new ResetFrame(");
  G(this.sc, a, b);
  a.push(", ", String(this.Vb), ")")
};
Ke.prototype.ea = ze;
Ke.prototype.na = function(a) {
  a.push(this.sc, "|", String(Number(this.Vb)), "!")
};
var Le = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Me(a) {
  this.reason = a
}
Me.prototype.n = function(a) {
  return a instanceof Me && this.reason == a.reason
};
Me.prototype.r = function(a, b) {
  a.push("new TransportKillFrame(");
  G(this.reason, a, b);
  a.push(")")
};
Me.prototype.ea = ze;
Me.prototype.na = function(a) {
  a.push(this.reason, "K")
};
function Ne(a) {
  a || f(new S("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new De(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = Ge(Jd(a)), a == k && f(new S("bad sack")), new Ce(a)
    }else {
      if(b == "N") {
        return a = Md(Jd(a)), a == k && f(new S("bad seqNum")), new Fe(a)
      }else {
        if(b == "T") {
          return a = Ge(Jd(a)), a == k && f(new S("bad lastSackSeen")), new He(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && f(new S("leading garbage")), new Je
          }else {
            if(b == "^") {
              return new Ee(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && f(new S("leading garbage")), new Ie
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && f(new S("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == k && f(new S("bad applicationLevel")), new Ke(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = Le[a], a == k && f(new S("unknown kill reason: " + a)), new Me(a)
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
;var Oe = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Pe(a, b) {
  var c = a.match(Oe), d = b.match(Oe);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Qe(a, b) {
  var c;
  a instanceof Qe ? (this.Ob(b == k ? a.xa : b), Re(this, a.ra), Se(this, a.tb), Te(this, a.ma), Ue(this, a.Ta), this.rb(a.z), Ve(this, a.U.A()), We(this, a.fb)) : a && (c = String(a).match(Oe)) ? (this.Ob(!!b), Re(this, c[1] || "", !0), Se(this, c[2] || "", !0), Te(this, c[3] || "", !0), Ue(this, c[4]), this.rb(c[5] || "", !0), Ve(this, c[6] || "", !0), We(this, c[7] || "", !0)) : (this.Ob(!!b), this.U = new Xe(k, this, this.xa))
}
p = Qe.prototype;
p.ra = "";
p.tb = "";
p.ma = "";
p.Ta = k;
p.z = "";
p.fb = "";
p.Wg = !1;
p.xa = !1;
p.toString = function() {
  if(this.ta) {
    return this.ta
  }
  var a = [];
  this.ra && a.push(Ye(this.ra, Ze), ":");
  this.ma && (a.push("//"), this.tb && a.push(Ye(this.tb, Ze), "@"), a.push(u(this.ma) ? encodeURIComponent(this.ma) : k), this.Ta != k && a.push(":", String(this.Ta)));
  this.z && (this.ma && this.z.charAt(0) != "/" && a.push("/"), a.push(Ye(this.z, this.z.charAt(0) == "/" ? $e : af)));
  var b = String(this.U);
  b && a.push("?", b);
  this.fb && a.push("#", Ye(this.fb, bf));
  return this.ta = a.join("")
};
p.A = function() {
  var a = this.ra, b = this.tb, c = this.ma, d = this.Ta, e = this.z, g = this.U.A(), h = this.fb, j = new Qe(k, this.xa);
  a && Re(j, a);
  b && Se(j, b);
  c && Te(j, c);
  d && Ue(j, d);
  e && j.rb(e);
  g && Ve(j, g);
  h && We(j, h);
  return j
};
function Re(a, b, c) {
  cf(a);
  delete a.ta;
  a.ra = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.ra) {
    a.ra = a.ra.replace(/:$/, "")
  }
}
function Se(a, b, c) {
  cf(a);
  delete a.ta;
  a.tb = c ? b ? decodeURIComponent(b) : "" : b
}
function Te(a, b, c) {
  cf(a);
  delete a.ta;
  a.ma = c ? b ? decodeURIComponent(b) : "" : b
}
function Ue(a, b) {
  cf(a);
  delete a.ta;
  b ? (b = Number(b), (isNaN(b) || b < 0) && f(Error("Bad port number " + b)), a.Ta = b) : a.Ta = k
}
p.rb = function(a, b) {
  cf(this);
  delete this.ta;
  this.z = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function Ve(a, b, c) {
  cf(a);
  delete a.ta;
  b instanceof Xe ? (a.U = b, a.U.Oe = a, a.U.Ob(a.xa)) : (c || (b = Ye(b, df)), a.U = new Xe(b, a, a.xa))
}
function We(a, b, c) {
  cf(a);
  delete a.ta;
  a.fb = c ? b ? decodeURIComponent(b) : "" : b
}
function cf(a) {
  a.Wg && f(Error("Tried to modify a read-only Uri"))
}
p.Ob = function(a) {
  this.xa = a;
  this.U && this.U.Ob(a);
  return this
};
function ef(a) {
  return a instanceof Qe ? a.A() : new Qe(a, i)
}
var ff = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Ye(a, b) {
  var c = k;
  u(a) && (c = a, ff.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, gf)));
  return c
}
function gf(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Ze = /[#\/\?@]/g, af = /[\#\?:]/g, $e = /[\#\?]/g, df = /[\#\?@]/g, bf = /#/g;
function Xe(a, b, c) {
  this.Ca = a || k;
  this.Oe = b || k;
  this.xa = !!c
}
function hf(a) {
  if(!a.o && (a.o = new Ob, a.f = 0, a.Ca)) {
    for(var b = a.Ca.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, g = k;
      d >= 0 ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = jf(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
p = Xe.prototype;
p.o = k;
p.f = k;
p.W = function() {
  hf(this);
  return this.f
};
p.add = function(a, b) {
  hf(this);
  kf(this);
  a = jf(this, a);
  if(this.ca(a)) {
    var c = this.o.get(a);
    t(c) ? c.push(b) : this.o.set(a, [c, b])
  }else {
    this.o.set(a, b)
  }
  this.f++;
  return this
};
p.remove = function(a) {
  hf(this);
  a = jf(this, a);
  if(this.o.ca(a)) {
    kf(this);
    var b = this.o.get(a);
    t(b) ? this.f -= b.length : this.f--;
    return this.o.remove(a)
  }
  return!1
};
p.clear = function() {
  kf(this);
  this.o && this.o.clear();
  this.f = 0
};
p.Qa = function() {
  hf(this);
  return this.f == 0
};
p.ca = function(a) {
  hf(this);
  a = jf(this, a);
  return this.o.ca(a)
};
p.Ic = function(a) {
  var b = this.Y();
  return Ya(b, a)
};
p.Ga = function() {
  hf(this);
  for(var a = this.o.Y(), b = this.o.Ga(), c = [], d = 0;d < b.length;d++) {
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
  hf(this);
  if(a) {
    if(a = jf(this, a), this.ca(a)) {
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
  hf(this);
  kf(this);
  a = jf(this, a);
  if(this.ca(a)) {
    var c = this.o.get(a);
    t(c) ? this.f -= c.length : this.f--
  }
  this.o.set(a, b);
  this.f++;
  return this
};
p.get = function(a, b) {
  hf(this);
  a = jf(this, a);
  if(this.ca(a)) {
    var c = this.o.get(a);
    return t(c) ? c[0] : c
  }else {
    return b
  }
};
p.toString = function() {
  if(this.Ca) {
    return this.Ca
  }
  if(!this.o) {
    return""
  }
  for(var a = [], b = 0, c = this.o.Ga(), d = 0;d < c.length;d++) {
    var e = c[d], g = sa(e), e = this.o.get(e);
    if(t(e)) {
      for(var h = 0;h < e.length;h++) {
        b > 0 && a.push("&"), a.push(g), e[h] !== "" && a.push("=", sa(e[h])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(g), e !== "" && a.push("=", sa(e)), b++
    }
  }
  return this.Ca = a.join("")
};
function kf(a) {
  delete a.Bb;
  delete a.Ca;
  a.Oe && delete a.Oe.ta
}
p.A = function() {
  var a = new Xe;
  if(this.Bb) {
    a.Bb = this.Bb
  }
  if(this.Ca) {
    a.Ca = this.Ca
  }
  if(this.o) {
    a.o = this.o.A()
  }
  return a
};
function jf(a, b) {
  var c = String(b);
  a.xa && (c = c.toLowerCase());
  return c
}
p.Ob = function(a) {
  a && !this.xa && (hf(this), kf(this), Mb(this.o, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.xa = a
};
p.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Mb(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
var lf;
function mf(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function nf(a, b) {
  var c = mf(a), d = eb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    Ya(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function of(a, b) {
  var c = mf(a), d = eb(arguments, 1), e;
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
var pf = !I || wc();
!jc && !I || I && wc() || jc && K("1.9.1");
var qf = I && !K("9");
function rf(a) {
  return a ? new sf(tf(a)) : lf || (lf = new sf)
}
function U(a) {
  return u(a) ? document.getElementById(a) : a
}
function uf(a, b, c, d) {
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
function vf(a, b) {
  Pa(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in wf ? a.setAttribute(wf[d], b) : d.lastIndexOf("aria-", 0) == 0 ? a.setAttribute(d, b) : a[d] = b
  })
}
var wf = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function xf(a, b, c) {
  return yf(document, arguments)
}
function yf(a, b) {
  var c = b[0], d = b[1];
  if(!pf && d && (d.name || d.type)) {
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
    u(d) ? c.className = d : t(d) ? nf.apply(k, [c].concat(d)) : vf(c, d)
  }
  b.length > 2 && zf(a, c, b, 2);
  return c
}
function zf(a, b, c, d) {
  function e(c) {
    c && b.appendChild(u(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && g.nodeType > 0) ? F(Af(g) ? bb(g) : g, e) : e(g)
  }
}
function Bf(a, b) {
  zf(tf(a), a, arguments, 1)
}
function Cf(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function Df(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Ef(a, b) {
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
function tf(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
function Ff(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && a.firstChild.nodeType == 3) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      Cf(a), a.appendChild(tf(a).createTextNode(b))
    }
  }
}
var Gf = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Hf = {IMG:" ", BR:"\n"};
function If(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ja(a) && a >= 0 && a < 32768) : !1
}
function Jf(a) {
  var b = [];
  Kf(a, b, !1);
  return b.join("")
}
function Kf(a, b, c) {
  if(!(a.nodeName in Gf)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Hf) {
        b.push(Hf[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Kf(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Af(a) {
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
function sf(a) {
  this.B = a || r.document || document
}
p = sf.prototype;
p.Fa = rf;
p.b = function(a) {
  return u(a) ? this.B.getElementById(a) : a
};
p.h = function(a, b, c) {
  return yf(this.B, arguments)
};
p.createElement = function(a) {
  return this.B.createElement(a)
};
p.createTextNode = function(a) {
  return this.B.createTextNode(a)
};
p.af = function(a, b, c) {
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
p.append = Bf;
p.contains = Ef;
function Lf(a, b, c, d) {
  this.contentWindow = a;
  this.Nc = b;
  this.Ke = c;
  this.Kg = d
}
Lf.prototype.r = function(a, b) {
  a.push("<XDRFrame frameId=");
  G(this.Kg, a, b);
  a.push(", expandedUrl=");
  G(this.Nc, a, b);
  a.push(", streams=");
  G(this.Ke, a, b);
  a.push(">")
};
function Mf() {
  this.frames = [];
  this.le = new Ob
}
Mf.prototype.a = R("cw.net.XDRTracker");
function Nf(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + String(Math.floor(ue())) + String(Math.floor(ue()))
  })
}
function Of(a, b) {
  for(var c = Pf, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = e.Ke.length == 0) {
      g = e.Nc;
      var h = String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + H(b) + " existing frame " + H(e)), Bd(e)
    }
  }
  d = Id() + Id();
  e = Nf(a);
  g = r.location;
  g instanceof Qe || (g = ef(g));
  e instanceof Qe || (e = ef(e));
  var j = g;
  g = j.A();
  (h = !!e.ra) ? Re(g, e.ra) : h = !!e.tb;
  h ? Se(g, e.tb) : h = !!e.ma;
  h ? Te(g, e.ma) : h = e.Ta != k;
  var l = e.z;
  if(h) {
    Ue(g, e.Ta)
  }else {
    if(h = !!e.z) {
      if(l.charAt(0) != "/" && (j.ma && !j.z ? l = "/" + l : (j = g.z.lastIndexOf("/"), j != -1 && (l = g.z.substr(0, j + 1) + l))), l == ".." || l == ".") {
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
    Ve(g, j.Bb, i)
  }else {
    h = !!e.fb
  }
  h && We(g, e.fb);
  e = g.toString();
  g = String(r.location).match(Oe)[3] || k;
  h = e.match(Oe)[3] || k;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + H(b)), c = Bd(new Lf(r, e, [b], k))) : (g = U("minerva-elements"), h = new qd, c.le.set(d, [h, e, b]), c.a.info("Creating new XDRFrame " + H(d) + "for " + H(b)), c = xf("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + d}), g.appendChild(c), c = h);
  return c
}
Mf.prototype.Gh = function(a) {
  var b = this.le.get(a);
  b || f(Error("Unknown frameId " + H(a)));
  this.le.remove(b);
  var c = b[0], a = new Lf(U("minerva-xdrframe-" + a).contentWindow || (J ? U("minerva-xdrframe-" + a).document || U("minerva-xdrframe-" + a).contentWindow.document : U("minerva-xdrframe-" + a).contentDocument || U("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (J ? U("minerva-xdrframe-" + a).document || U("minerva-xdrframe-" + a).contentWindow.document : U("minerva-xdrframe-" + a).contentDocument || U("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  wd(c, a)
};
var Pf = new Mf;
r.__XHRTracker_xdrFrameLoaded = z(Pf.Gh, Pf);
var Qf;
Qf = !1;
var Rf = fc();
Rf && (Rf.indexOf("Firefox") != -1 || Rf.indexOf("Camino") != -1 || Rf.indexOf("iPhone") != -1 || Rf.indexOf("iPod") != -1 || Rf.indexOf("iPad") != -1 || Rf.indexOf("Android") != -1 || Rf.indexOf("Chrome") != -1 && (Qf = !0));
var Sf = Qf;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function Tf(a, b, c, d, e, g) {
  qd.call(this, e, g);
  this.Gf = a;
  this.Nd = [];
  this.kf = !!b;
  this.Ig = !!c;
  this.yg = !!d;
  for(b = 0;b < a.length;b++) {
    yd(a[b], z(this.sf, this, b, !0), z(this.sf, this, b, !1))
  }
  a.length == 0 && !this.kf && wd(this, this.Nd)
}
C(Tf, qd);
Tf.prototype.Qf = 0;
Tf.prototype.sf = function(a, b, c) {
  this.Qf++;
  this.Nd[a] = [b, c];
  this.Na || (this.kf && b ? wd(this, [a, c]) : this.Ig && !b ? this.dc(c) : this.Qf == this.Gf.length && wd(this, this.Nd));
  this.yg && !b && (c = k);
  return c
};
Tf.prototype.dc = function(a) {
  Tf.d.dc.call(this, a);
  F(this.Gf, function(a) {
    a.cancel()
  })
};
function Uf(a) {
  a = new Tf(a, !1, !0);
  xd(a, function(a) {
    return Va(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function Vf(a, b) {
  this.Eh = a;
  this.Jf = b
}
Vf.prototype.ie = 0;
Vf.prototype.gd = 0;
Vf.prototype.Ud = !1;
function Wf(a) {
  var b = [];
  if(a.Ud) {
    return[b, 2]
  }
  var c = a.ie, d = a.Eh.responseText;
  for(a.ie = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var e = d.substr(a.gd, c - a.gd), e = e.replace(/\r$/, "");
    if(e.length > a.Jf) {
      return a.Ud = !0, [b, 2]
    }
    b.push(e);
    a.gd = c += 1
  }
  return a.ie - a.gd - 1 > a.Jf ? (a.Ud = !0, [b, 2]) : [b, 1]
}
;function Xf(a, b, c) {
  this.N = b;
  this.pa = a;
  this.Kd = c
}
C(Xf, L);
p = Xf.prototype;
p.a = R("cw.net.XHRMaster");
p.Xa = -1;
p.me = function(a, b, c) {
  this.Kd.__XHRSlave_makeRequest(this.pa, a, b, c)
};
p.Pa = m("Xa");
p.qe = function(a, b) {
  b != 1 && ie(this.a, H(this.pa) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  pe(this.N);
  qe(this.N, a)
};
p.re = function(a) {
  P(this.a, "ongotheaders_: " + H(a));
  var b = k;
  "Content-Length" in a && (b = Md(a["Content-Length"]));
  a = this.N;
  P(a.a, a.s() + " got Content-Length: " + b);
  a.ya == Yf && (b == k && (O(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Zf(a, 2E3 + b / 3072 * 1E3))
};
p.se = function(a) {
  a != 1 && P(this.a, this.N.s() + "'s XHR's readyState is " + a);
  this.Xa = a;
  this.Xa >= 2 && pe(this.N)
};
p.pe = function() {
  this.N.e()
};
p.c = function() {
  Xf.d.c.call(this);
  delete $f.Ha[this.pa];
  this.Kd.__XHRSlave_dispose(this.pa);
  delete this.Kd
};
function ag() {
  this.Ha = {}
}
C(ag, L);
p = ag.prototype;
p.a = R("cw.net.XHRMasterTracker");
p.Ld = function(a, b) {
  var c = "_" + Id(), d = new Xf(c, a, b);
  return this.Ha[c] = d
};
p.qe = function(a, b, c) {
  var b = ab(b), d = this.Ha[a];
  d ? d.qe(b, c) : ie(this.a, "onframes_: no master for " + H(a))
};
p.re = function(a, b) {
  var c = this.Ha[a];
  c ? c.re(b) : ie(this.a, "ongotheaders_: no master for " + H(a))
};
p.se = function(a, b) {
  var c = this.Ha[a];
  c ? c.se(b) : ie(this.a, "onreadystatechange_: no master for " + H(a))
};
p.pe = function(a) {
  var b = this.Ha[a];
  b ? (delete this.Ha[b.pa], b.pe()) : ie(this.a, "oncomplete_: no master for " + H(a))
};
p.c = function() {
  ag.d.c.call(this);
  for(var a = Qa(this.Ha);a.length;) {
    a.pop().e()
  }
  delete this.Ha
};
var $f = new ag;
r.__XHRMaster_onframes = z($f.qe, $f);
r.__XHRMaster_oncomplete = z($f.pe, $f);
r.__XHRMaster_ongotheaders = z($f.re, $f);
r.__XHRMaster_onreadystatechange = z($f.se, $f);
function bg(a, b, c) {
  this.host = a;
  this.port = b;
  this.zh = c
}
function cg(a, b) {
  b || (b = a);
  this.Ua = a;
  this.Ya = b
}
cg.prototype.r = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  G(this.Ua, a, b);
  a.push(", secondaryUrl=");
  G(this.Ya, a, b);
  a.push(">")
};
function dg(a, b, c, d) {
  this.Ua = a;
  this.Uf = b;
  this.Ya = c;
  this.dg = d;
  (!(this.Ua.indexOf("http://") == 0 || this.Ua.indexOf("https://") == 0) || !(this.Ya.indexOf("http://") == 0 || this.Ya.indexOf("https://") == 0)) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Uf.location.href;
  Pe(this.Ua, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.dg.location.href;
  Pe(this.Ya, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
dg.prototype.r = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  G(this.Ua, a, b);
  a.push(", secondaryUrl=");
  G(this.Ya, a, b);
  a.push(">")
};
var eg = new Ee(";)]}");
function fg() {
}
fg.prototype.of = n(1);
function gg(a) {
  this.sh = a
}
gg.prototype.r = function(a, b) {
  a.push("<UserContext for ");
  G(this.sh, a, b);
  a.push(">")
};
function hg(a, b, c) {
  this.Q = a;
  this.th = b ? b : new fg;
  this.M = c ? c : Fd;
  this.Cc = new Od;
  this.Ac = Id() + Id();
  this.Wa = new Vb;
  this.fe = new Xb;
  this.Dc = k;
  this.xd = [];
  this.Tb = new gg(this);
  if(J) {
    this.Dc = cd(r, "load", this.lh, !1, this)
  }
}
C(hg, L);
p = hg.prototype;
p.a = R("cw.net.ClientStream");
p.Ef = new Ub(-1, []);
p.Ff = new Ub(-1, []);
p.ah = 50;
p.$g = 1048576;
p.te = k;
p.onreset = k;
p.Sf = k;
p.He = !1;
p.xe = !1;
p.i = 1;
p.kg = -1;
p.k = k;
p.F = k;
p.tc = k;
p.Ie = 0;
p.Tf = 0;
p.cg = 0;
p.r = function(a, b) {
  a.push("<ClientStream id=");
  G(this.Ac, a, b);
  a.push(", state=", String(this.i));
  a.push(", primary=");
  G(this.k, a, b);
  a.push(", secondary=");
  G(this.F, a, b);
  a.push(", resetting=");
  G(this.tc, a, b);
  a.push(">")
};
function ig(a) {
  var b = [-1];
  a.k && b.push(a.k.Mb);
  a.F && b.push(a.F.Mb);
  return Math.max.apply(Math.max, b)
}
function jg(a) {
  if(a.i != 1) {
    var b = a.Wa.w.W() != 0, c = Yb(a.fe), d = !c.n(a.Ff) && !(a.k && c.n(a.k.Jb) || a.F && c.n(a.F.Jb)), e = ig(a);
    if((b = b && e < a.Wa.Ab) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.k.Xb) {
        Q(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.k, c != d.Jb)) {
          !d.Ia && !d.I.length && kg(d), d.I.push(new Ce(c)), d.Jb = c
        }
        b && lg(a.k, a.Wa, e + 1);
        a.k.Ea()
      }else {
        a.F == k ? a.He ? (Q(a.a, "tryToSend_: creating secondary to send " + g), a.F = mg(a, !1), b && lg(a.F, a.Wa, e + 1), a.F.Ea()) : (Q(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.xe = !0) : Q(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
p.lh = function() {
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
function ng(a, b) {
  var c;
  fa(c) || (c = !0);
  a.i > 3 && f(Error("sendStrings: Can't send strings in state " + a.i));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || f(Error("sendStrings: string #" + c + " has illegal chars: " + H(d)))
      }
    }
    a.Wa.extend(b);
    jg(a)
  }
}
function mg(a, b) {
  var c;
  a.Q instanceof dg ? c = a.th.of() == 1 ? Yf : og : a.Q instanceof bg ? c = pg : f(Error("Don't support endpoint " + H(a.Q)));
  a.kg += 1;
  c = new qg(a.M, a, a.kg, c, a.Q, b);
  Q(a.a, "Created: " + c.s());
  a.Cc.add(c);
  return c
}
function rg(a, b, c) {
  var d = new sg(a.M, a, b, c);
  Q(a.a, "Created: " + d.s() + ", delay=" + b + ", times=" + c);
  a.Cc.add(d);
  return d
}
function tg(a, b) {
  a.Cc.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  P(a.a, "Offline: " + b.s());
  b.rc ? a.Ie += b.rc : a.Ie = 0;
  a.Ie >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.Tb, "stream penalty reached limit", !1), a.e());
  if(a.i > 3) {
    a.i == 4 && b.pg ? (P(a.a, "Disposing because resettingTransport_ is done."), a.e()) : P(a.a, "Not creating a transport because ClientStream is in state " + a.i)
  }else {
    var c;
    var d;
    c = b instanceof sg;
    if(!c && b.Bd) {
      var e = J ? Sf ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      Q(a.a, "getDelayForNextTransport_: " + H({delay:c, times:d}))
    }else {
      d = b.Xe();
      if(b == a.k) {
        if(d) {
          e = ++a.Tf
        }else {
          if(!c) {
            e = a.Tf = 0
          }
        }
      }else {
        if(d) {
          e = ++a.cg
        }else {
          if(!c) {
            e = a.cg = 0
          }
        }
      }
      if(c || !e) {
        d = c = 0, Q(a.a, "getDelayForNextTransport_: " + H({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(Math.random() * 4E3) - 2E3, j = Math.max(0, b.lg - b.Me);
        d = (c = Math.max(0, g + h - j)) ? 1 : 0;
        Q(a.a, "getDelayForNextTransport_: " + H({count:e, base:g, variance:h, oldDuration:j, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    if(b == a.k) {
      a.k = k, c ? a.k = rg(a, e, c) : (e = ig(a), a.k = mg(a, !0), lg(a.k, a.Wa, e + 1)), a.k.Ea()
    }else {
      if(b == a.F) {
        a.F = k, c ? (a.F = rg(a, e, c), a.F.Ea()) : jg(a)
      }
    }
  }
}
p.reset = function(a) {
  this.i > 3 && f(Error("reset: Can't send reset in state " + this.i));
  this.i = 4;
  this.k && this.k.Xb ? (this.a.info("reset: Sending ResetFrame over existing primary."), ug(this.k, a), this.k.Ea()) : (this.k && (P(this.a, "reset: Disposing primary before sending ResetFrame."), this.k.e()), this.F && (P(this.a, "reset: Disposing secondary before sending ResetFrame."), this.F.e()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.tc = mg(this, !1), ug(this.tc, a), this.tc.Ea());
  this.onreset && this.onreset.call(this.Tb, a, !0)
};
function vg(a, b, c, d) {
  var e;
  e = a.fe;
  for(var g = a.ah, h = a.$g, j = [], l = !1, o = 0, v = c.length;o < v;o++) {
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
        e.v -= q[1];
        e.Ib = w
      }
    }else {
      if(!(w <= e.Ib)) {
        if(g != k && e.ab.W() >= g) {
          l = !0;
          break
        }
        var B = Tb(q);
        if(h != k && e.v + B > h) {
          l = !0;
          break
        }
        e.ab.set(w, [q, B]);
        e.v += B
      }
    }
  }
  e.ab.Qa() && e.ab.clear();
  e = [j, l];
  c = e[0];
  e = e[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(h = c[g], a.te && a.te.call(a.Tb, h), a.i == 4 || a.ua) {
        return
      }
    }
  }
  d || jg(a);
  if(!(a.i == 4 || a.ua) && e) {
    ie(b.a, b.s() + "'s peer caused rwin overflow."), b.e()
  }
}
p.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  this.i != 1 && f(Error("ClientStream.start: " + H(this) + " already started"));
  this.i = 2;
  if(this.Q instanceof cg) {
    var a = Of(this.Q.Ua, this), b = Of(this.Q.Ya, this);
    xd(Uf([a, b]), z(this.Hg, this))
  }else {
    wg(this)
  }
};
p.Hg = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Nc, e = a[1].Nc;
  this.xd.push(a[0]);
  this.xd.push(a[1]);
  this.Q = new dg(d, b, e, c);
  wg(this)
};
function wg(a) {
  a.i = 3;
  a.k = mg(a, !0);
  lg(a.k, a.Wa, k);
  a.k.Ea()
}
p.c = function() {
  this.a.info(H(this) + " in disposeInternal.");
  this.i = 5;
  for(var a = this.Cc.Y(), b = 0;b < a.length;b++) {
    a[b].e()
  }
  for(a = 0;a < this.xd.length;a++) {
    $a(this.xd[a].Ke, this)
  }
  if(J && this.Dc) {
    fd(this.Dc), this.Dc = k
  }
  this.Sf && this.Sf.call(this.Tb);
  delete this.Cc;
  delete this.k;
  delete this.F;
  delete this.tc;
  delete this.Tb;
  hg.d.c.call(this)
};
var Yf = 1, og = 2, pg = 3;
function qg(a, b, c, d, e, g) {
  this.M = a;
  this.H = b;
  this.Sb = c;
  this.ya = d;
  this.Q = e;
  this.I = [];
  this.xb = g;
  this.Xb = !this.Fb();
  this.Nb = this.ya != Yf;
  this.vg = z(this.xh, this)
}
C(qg, L);
p = qg.prototype;
p.a = R("cw.net.ClientTransport");
p.q = k;
p.Me = k;
p.lg = k;
p.jd = k;
p.Ia = !1;
p.sd = !1;
p.Jb = k;
p.Wd = 0;
p.Mb = -1;
p.ve = -1;
p.pg = !1;
p.Bd = !1;
p.rc = 0;
p.ic = !1;
p.r = function(a) {
  a.push("<ClientTransport #", String(this.Sb), ", becomePrimary=", String(this.xb), ">")
};
p.s = function() {
  return(this.xb ? "Prim. T#" : "Sec. T#") + this.Sb
};
p.Xe = function() {
  return!(!this.ic && this.Wd)
};
p.Fb = function() {
  return this.ya == Yf || this.ya == og
};
function xg(a, b) {
  fb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  vg(a.H, a, b, !a.Nb)
}
function yg(a, b, c) {
  try {
    var d = Ne(b);
    a.Wd += 1;
    P(a.a, a.s() + " RECV " + H(d));
    var e;
    a.Wd == 1 && !d.n(eg) && a.Fb() ? (O(a.a, a.s() + " is closing soon because got bad preamble: " + H(d)), e = !0) : e = !1;
    if(e) {
      return!0
    }
    if(d instanceof De) {
      if(!/^([ -~]*)$/.test(d.Rb)) {
        return a.ic = !0
      }
      a.ve += 1;
      c.push([a.ve, d.Rb])
    }else {
      if(d instanceof Ce) {
        var g = a.H, h = d.qa;
        g.Ef = h;
        var j = g.Wa, l = h.vb, c = !1;
        l > j.Ab && (c = !0);
        for(var o = Wb(j).concat(), d = 0;d < o.length;d++) {
          var v = o[d];
          if(v > l) {
            break
          }
          var q = j.w.p[v][1];
          j.w.remove(v);
          j.v -= q
        }
        for(d = 0;d < h.pb.length;d++) {
          var w = h.pb[d];
          w > j.Ab && (c = !0);
          j.w.ca(w) && (q = j.w.p[w][1], j.w.remove(w), j.v -= q)
        }
        j.w.Qa() && j.w.clear();
        if(c) {
          return O(a.a, a.s() + " is closing soon because got bad SackFrame"), a.ic = !0
        }
      }else {
        if(d instanceof Fe) {
          a.ve = d.yc - 1
        }else {
          if(d instanceof He) {
            a.H.Ff = d.nc
          }else {
            if(d instanceof Je) {
              return Q(a.a, a.s() + " is closing soon because got YouCloseItFrame"), !0
            }else {
              if(d instanceof Me) {
                return a.ic = !0, d.reason == "stream_attach_failure" ? a.rc += 1 : d.reason == "acked_unsent_strings" && (a.rc += 0.5), Q(a.a, a.s() + " is closing soon because got " + H(d)), !0
              }else {
                if(!(d instanceof Ee)) {
                  if(d instanceof Ie) {
                    var B = a.H, uj = !a.Nb;
                    Q(B.a, "Stream is now confirmed to exist at server.");
                    B.He = !0;
                    if(B.xe && !uj) {
                      B.xe = !1, jg(B)
                    }
                  }else {
                    if(c.length && (xg(a, c), Za(c)), d instanceof Ke) {
                      var ld = a.H;
                      ld.onreset && ld.onreset.call(ld.Tb, d.sc, d.Vb);
                      ld.e();
                      return!0
                    }else {
                      f(Error(a.s() + " had unexpected state in framesReceived_."))
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }catch(dh) {
    return dh instanceof S || f(dh), O(a.a, a.s() + " is closing soon because got InvalidFrame: " + H(b)), a.ic = !0
  }
  return!1
}
function qe(a, b) {
  a.sd = !0;
  try {
    for(var c = !1, d = [], e = 0, g = b.length;e < g;e++) {
      if(a.ua) {
        a.a.info(a.s() + " returning from loop because we're disposed.");
        return
      }
      if(c = yg(a, b[e], d)) {
        break
      }
    }
    d.length && xg(a, d);
    a.sd = !1;
    a.I.length && a.Ea();
    c && (Q(a.a, a.s() + " closeSoon is true.  Frames were: " + H(b)), a.e())
  }finally {
    a.sd = !1
  }
}
p.xh = function() {
  O(this.a, this.s() + " timed out due to lack of connection or no data being received.");
  this.e()
};
function zg(a) {
  if(a.jd != k) {
    a.M.O.clearTimeout(a.jd), a.jd = k
  }
}
function Zf(a, b) {
  zg(a);
  b = Math.round(b);
  a.jd = a.M.O.setTimeout(a.vg, b);
  P(a.a, a.s() + "'s receive timeout set to " + b + " ms.")
}
function pe(a) {
  a.ya != Yf && (a.ya == pg || a.ya == og ? Zf(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ya)))
}
function kg(a) {
  var b = new Ae;
  b.Sb = a.Sb;
  b.Vf = 2;
  b.xf = 2;
  if(!a.H.He) {
    b.Yf = !0
  }
  b.Ac = a.H.Ac;
  b.Je = a.Nb;
  if(b.Je) {
    b.Of = 4096
  }
  b.Kf = 3E5;
  b.If = a.Nb ? Math.floor(10) : 0;
  b.mg = !1;
  if(a.xb) {
    b.gg = k, b.ne = Math.floor((a.Nb ? 358E4 : 25E3) / 1E3)
  }
  b.qa = Yb(a.H.fe);
  b.dd = a.H.Ef;
  a.I.push(b);
  a.Jb = b.qa
}
function re(a, b) {
  b && (a.rc += 0.5);
  a.e()
}
p.Ea = function() {
  this.Ia && !this.Xb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.sd) {
    Q(this.a, this.s() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ia;
    this.Ia = !0;
    !a && !this.I.length && kg(this);
    for(a = 0;a < this.I.length;a++) {
      P(this.a, this.s() + " SEND " + H(this.I[a]))
    }
    if(this.Fb()) {
      for(var a = [], b = 0, c = this.I.length;b < c;b++) {
        this.I[b].na(a), a.push("\n")
      }
      this.I = [];
      a = a.join("");
      b = this.xb ? this.Q.Ua : this.Q.Ya;
      this.q = $f.Ld(this, this.xb ? this.Q.Uf : this.Q.dg);
      this.Me = this.M.O === od ? A() : this.M.O.getTime();
      this.q.me(b, "POST", a);
      Zf(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.Nb ? 0 : this.xb ? 25E3 : 0))
    }else {
      if(this.ya == pg) {
        a = [];
        b = 0;
        for(c = this.I.length;b < c;b++) {
          a.push(this.I[b].ea())
        }
        this.I = [];
        this.q ? this.q.Ec(a) : (b = this.Q, this.q = new te(this), this.q.rd = b.zh.Ld(this.q), this.Me = this.M.O === od ? A() : this.M.O.getTime(), this.q.Jd(b.host, b.port), this.q.ua || (this.q.Ec(a), this.q.ua || Zf(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.ya))
      }
    }
  }
};
function lg(a, b, c) {
  !a.Ia && !a.I.length && kg(a);
  for(var d = Math.max(c, a.Mb + 1), e = Wb(b), c = [], g = 0;g < e.length;g++) {
    var h = e[g];
    (d == k || h >= d) && c.push([h, b.w.p[h][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], e = g[0], g = g[1], (a.Mb == -1 || a.Mb + 1 != e) && a.I.push(new Fe(e)), a.I.push(new De(g)), a.Mb = e
  }
}
p.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  qg.d.c.call(this);
  this.lg = this.M.O === od ? A() : this.M.O.getTime();
  this.I = [];
  zg(this);
  this.q && this.q.e();
  var a = this.H;
  this.H = k;
  tg(a, this)
};
function ug(a, b) {
  !a.Ia && !a.I.length && kg(a);
  a.I.push(new Ke(b, !0));
  a.pg = !0
}
function sg(a, b, c, d) {
  this.M = a;
  this.H = b;
  this.ff = c;
  this.$e = d
}
C(sg, L);
p = sg.prototype;
p.Ia = !1;
p.Xb = !1;
p.Uc = k;
p.Jb = k;
p.a = R("cw.net.DoNothingTransport");
function Ag(a) {
  a.Uc = a.M.O.setTimeout(function() {
    a.Uc = k;
    a.$e--;
    a.$e ? Ag(a) : a.e()
  }, a.ff)
}
p.Ea = function() {
  this.Ia && !this.Xb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ia = !0;
  Ag(this)
};
p.r = function(a) {
  a.push("<DoNothingTransport delay=", String(this.ff), ">")
};
p.Fb = n(!1);
p.s = n("Wast. T");
p.Xe = n(!1);
p.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  sg.d.c.call(this);
  this.Uc != k && this.M.O.clearTimeout(this.Uc);
  var a = this.H;
  this.H = k;
  tg(a, this)
};
function Bg(a, b, c) {
  a.style[Fa(c)] = b
}
function Cg(a, b) {
  var c;
  a: {
    c = tf(a);
    if(c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k))) {
      c = c[b] || c.getPropertyValue(b);
      break a
    }
    c = ""
  }
  return c || (a.currentStyle ? a.currentStyle[b] : k) || a.style[b]
}
function Dg(a, b, c) {
  b instanceof T ? (c = b.height, b = b.width) : c == i && f(Error("missing height argument"));
  a.style.width = Eg(b);
  a.style.height = Eg(c)
}
function Eg(a) {
  typeof a == "number" && (a = Math.round(a) + "px");
  return a
}
function Fg(a) {
  if(Cg(a, "display") != "none") {
    return Gg(a)
  }
  var b = a.style, c = b.display, d = b.visibility, e = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = Gg(a);
  b.display = c;
  b.position = e;
  b.visibility = d;
  return a
}
function Gg(a) {
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
function Hg(a) {
  I ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[J ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var Ig = jc ? "MozUserSelect" : J ? "WebkitUserSelect" : k;
function Jg(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Ig) {
    if(b = b ? "none" : "", a.style[Ig] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[Ig] = b
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
;function Kg(a) {
  this.ib = a;
  this.l = []
}
C(Kg, L);
var Lg = [];
function V(a, b, c, d) {
  t(c) || (Lg[0] = c, c = Lg);
  for(var e = 0;e < c.length;e++) {
    a.l.push(N(b, c[e], d || a, !1, a.ib || a))
  }
  return a
}
function Mg(a, b, c, d, e, g) {
  if(t(c)) {
    for(var h = 0;h < c.length;h++) {
      Mg(a, b, c[h], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.ib || a;
      e = !!e;
      if(b = ed(b, c, e)) {
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
      b = b.key, fd(b), $a(a.l, b)
    }
  }
  return a
}
Kg.prototype.we = function() {
  F(this.l, fd);
  this.l.length = 0
};
Kg.prototype.c = function() {
  Kg.d.c.call(this);
  this.we()
};
Kg.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Ng() {
}
da(Ng);
Ng.prototype.dh = 0;
Ng.Oa();
function Og(a) {
  this.la = a || rf();
  this.wc = Pg
}
C(Og, md);
Og.prototype.Ug = Ng.Oa();
var Pg = k;
function Qg(a, b) {
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
p = Og.prototype;
p.S = k;
p.C = !1;
p.g = k;
p.wc = k;
p.bh = k;
p.D = k;
p.P = k;
p.Zb = k;
p.Bh = !1;
function Rg(a) {
  return a.S || (a.S = ":" + (a.Ug.dh++).toString(36))
}
p.b = m("g");
function Sg(a) {
  return a.Db || (a.Db = new Kg(a))
}
p.getParent = m("D");
p.Be = function(a) {
  this.D && this.D != a && f(Error("Method not supported"));
  Og.d.Be.call(this, a)
};
p.Fa = m("la");
p.h = function() {
  this.g = this.la.createElement("div")
};
function Tg(a, b) {
  a.C && f(Error("Component already rendered"));
  a.g || a.h();
  b ? b.insertBefore(a.g, k) : a.la.B.body.appendChild(a.g);
  (!a.D || a.D.C) && a.R()
}
p.R = function() {
  this.C = !0;
  Ug(this, function(a) {
    !a.C && a.b() && a.R()
  })
};
p.eb = function() {
  Ug(this, function(a) {
    a.C && a.eb()
  });
  this.Db && this.Db.we();
  this.C = !1
};
p.c = function() {
  Og.d.c.call(this);
  this.C && this.eb();
  this.Db && (this.Db.e(), delete this.Db);
  Ug(this, function(a) {
    a.e()
  });
  !this.Bh && this.g && Df(this.g);
  this.D = this.bh = this.g = this.Zb = this.P = k
};
p.fc = m("g");
p.Pb = function(a) {
  this.C && f(Error("Component already rendered"));
  this.wc = a
};
function Ug(a, b) {
  a.P && F(a.P, b, i)
}
p.removeChild = function(a, b) {
  if(a) {
    var c = u(a) ? a : Rg(a), a = this.Zb && c ? (c in this.Zb ? this.Zb[c] : i) || k : k;
    if(c && a) {
      var d = this.Zb;
      c in d && delete d[c];
      $a(this.P, a);
      b && (a.eb(), a.g && Df(a.g));
      c = a;
      c == k && f(Error("Unable to set parent component"));
      c.D = k;
      Og.d.Be.call(c, k)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function Vg(a, b) {
  a.setAttribute("role", b);
  a.Zi = b
}
;function Wg() {
}
var Xg;
da(Wg);
p = Wg.prototype;
p.Pc = function() {
};
p.h = function(a) {
  var b = a.Fa().h("div", Yg(this, a).join(" "), a.da);
  a.isEnabled() || this.Ja(b, 1, !0);
  a.i & 8 && this.Ja(b, 8, !0);
  a.ja & 16 && this.Ja(b, 16, !!(a.i & 16));
  a.ja & 64 && this.Ja(b, 64, !!(a.i & 64));
  return b
};
p.fc = function(a) {
  return a
};
p.cc = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(I && !K("7")) {
      var d = Zg(mf(a), b);
      d.push(b);
      oa(c ? nf : of, a).apply(k, d)
    }else {
      c ? nf(a, b) : of(a, b)
    }
  }
};
p.zf = function(a) {
  if(a.wc == k) {
    a.wc = "rtl" == Cg(a.C ? a.g : a.la.B.body, "direction")
  }
  a.wc && this.Pb(a.b(), !0);
  a.isEnabled() && this.nd(a, a.Ub)
};
p.kd = function(a, b) {
  Jg(a, !b, !I && !ic)
};
p.Pb = function(a, b) {
  this.cc(a, this.u() + "-rtl", b)
};
p.Bf = function(a) {
  var b;
  return a.ja & 32 && (b = a.hb()) ? If(b) : !1
};
p.nd = function(a, b) {
  var c;
  if(a.ja & 32 && (c = a.hb())) {
    if(!b && a.i & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.i & 32 && a.rf()
    }
    if(If(c) != b) {
      b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex"))
    }
  }
};
p.Fe = function(a, b) {
  a.style.display = b ? "" : "none"
};
p.ia = function(a, b, c) {
  var d = a.b();
  if(d) {
    var e = $g(this, b);
    e && this.cc(a, e, c);
    this.Ja(d, b, c)
  }
};
p.Ja = function(a, b, c) {
  Xg || (Xg = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Xg[b]) && a.setAttribute("aria-" + b, c)
};
p.ld = function(a, b) {
  var c = this.fc(a);
  if(c && (Cf(c), b)) {
    if(u(b)) {
      Ff(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = tf(c);
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
function Yg(a, b) {
  var c = a.u(), d = [c], e = a.u();
  e != c && d.push(e);
  c = b.i;
  for(e = [];c;) {
    var g = c & -c;
    e.push($g(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.va) && d.push.apply(d, c);
  I && !K("7") && d.push.apply(d, Zg(d));
  return d
}
function Zg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  F([], function(d) {
    Xa(d, oa(Ya, a)) && (!b || Ya(d, b)) && c.push(d.join("_"))
  });
  return c
}
function $g(a, b) {
  if(!a.We) {
    var c = a.u();
    a.We = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.We[b]
}
;function ah(a, b) {
  a || f(Error("Invalid class name " + a));
  x(b) || f(Error("Invalid decorator function " + b))
}
var bh = {};
function ch(a, b, c, d, e) {
  if(!I && (!J || !K("525"))) {
    return!0
  }
  if(mc && e) {
    return eh(a)
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
  return eh(a)
}
function eh(a) {
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
;function fh(a, b) {
  a && gh(this, a, b)
}
C(fh, md);
p = fh.prototype;
p.g = k;
p.bd = k;
p.he = k;
p.cd = k;
p.Sa = -1;
p.Ra = -1;
var hh = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, ih = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, jh = {61:187, 
59:186}, kh = I || J && K("525");
p = fh.prototype;
p.Qg = function(a) {
  if(J && (this.Sa == 17 && !a.ctrlKey || this.Sa == 18 && !a.altKey)) {
    this.Ra = this.Sa = -1
  }
  kh && !ch(a.keyCode, this.Sa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Ra = jc && a.keyCode in jh ? jh[a.keyCode] : a.keyCode
};
p.Rg = function() {
  this.Ra = this.Sa = -1
};
p.handleEvent = function(a) {
  var b = a.Da, c, d;
  I && a.type == "keypress" ? (c = this.Ra, d = c != 13 && c != 27 ? b.keyCode : 0) : J && a.type == "keypress" ? (c = this.Ra, d = b.charCode >= 0 && b.charCode < 63232 && eh(c) ? b.charCode : 0) : ic ? (c = this.Ra, d = eh(c) ? b.keyCode : 0) : (c = b.keyCode || this.Ra, d = b.charCode || 0, mc && d == 63 && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in hh ? e = hh[c] : c == 25 && a.shiftKey && (e = 9) : g && g in ih && (e = ih[g]);
  a = e == this.Sa;
  this.Sa = e;
  b = new lh(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.e()
  }
};
p.b = m("g");
function gh(a, b, c) {
  a.cd && a.detach();
  a.g = b;
  a.bd = N(a.g, "keypress", a, c);
  a.he = N(a.g, "keydown", a.Qg, c, a);
  a.cd = N(a.g, "keyup", a.Rg, c, a)
}
p.detach = function() {
  if(this.bd) {
    fd(this.bd), fd(this.he), fd(this.cd), this.cd = this.he = this.bd = k
  }
  this.g = k;
  this.Ra = this.Sa = -1
};
p.c = function() {
  fh.d.c.call(this);
  this.detach()
};
function lh(a, b, c, d) {
  d && this.kc(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(lh, Fc);
function W(a, b, c) {
  Og.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = y(b);
      if(d = bh[d]) {
        break
      }
      b = b.d ? b.d.constructor : k
    }
    b = d ? x(d.Oa) ? d.Oa() : new d : k
  }
  this.m = b;
  this.md(a)
}
C(W, Og);
p = W.prototype;
p.da = k;
p.i = 0;
p.ja = 39;
p.Se = 255;
p.rh = 0;
p.Ub = !0;
p.va = k;
p.be = !0;
p.Dd = !1;
p.hb = function() {
  return this.m.hb(this)
};
function mh(a, b) {
  if(b) {
    a.va ? Ya(a.va, b) || a.va.push(b) : a.va = [b], a.m.cc(a, b, !0)
  }
}
p.cc = function(a, b) {
  if(b) {
    mh(this, a)
  }else {
    if(a && this.va) {
      $a(this.va, a);
      if(this.va.length == 0) {
        this.va = k
      }
      this.m.cc(this, a, !1)
    }
  }
};
p.h = function() {
  var a = this.m.h(this);
  this.g = a;
  var b = this.m.Pc();
  b && Vg(a, b);
  this.Dd || this.m.kd(a, !1);
  this.Ub || this.m.Fe(a, !1)
};
p.fc = function() {
  return this.m.fc(this.b())
};
p.R = function() {
  W.d.R.call(this);
  this.m.zf(this);
  if(this.ja & -2 && (this.be && nh(this, !0), this.ja & 32)) {
    var a = this.hb();
    if(a) {
      var b = this.Hb || (this.Hb = new fh);
      gh(b, a);
      V(V(V(Sg(this), b, "key", this.uf), a, "focus", this.Og), a, "blur", this.rf)
    }
  }
};
function nh(a, b) {
  var c = Sg(a), d = a.b();
  b ? (V(V(V(V(c, d, "mouseover", a.Xc), d, "mousedown", a.Vc), d, "mouseup", a.vf), d, "mouseout", a.Wc), I && V(c, d, "dblclick", a.tf)) : (Mg(Mg(Mg(Mg(c, d, "mouseover", a.Xc), d, "mousedown", a.Vc), d, "mouseup", a.vf), d, "mouseout", a.Wc), I && Mg(c, d, "dblclick", a.tf))
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
  this.va = this.da = k
};
p.ld = function(a) {
  this.m.ld(this.b(), a);
  this.md(a)
};
p.md = aa("da");
p.nf = function() {
  var a = this.da;
  if(!a) {
    return""
  }
  if(!u(a)) {
    if(t(a)) {
      a = Va(a, Jf).join("")
    }else {
      if(qf && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Kf(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      qf || (a = a.replace(/ +/g, " "));
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
p.Fe = function(a, b) {
  if(b || this.Ub != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.m.Fe(c, a);
    this.isEnabled() && this.m.nd(this, a);
    this.Ub = a;
    return!0
  }
  return!1
};
p.isEnabled = function() {
  return!(this.i & 1)
};
function oh(a, b) {
  ph(a, 2, b) && a.ia(2, b)
}
p.ge = function() {
  return!!(this.i & 4)
};
p.setActive = function(a) {
  ph(this, 4, a) && this.ia(4, a)
};
p.Ce = function(a) {
  ph(this, 8, a) && this.ia(8, a)
};
p.ia = function(a, b) {
  if(this.ja & a && b != !!(this.i & a)) {
    this.m.ia(this, a, b), this.i = b ? this.i | a : this.i & ~a
  }
};
function X(a, b) {
  return!!(a.Se & b) && !!(a.ja & b)
}
function ph(a, b, c) {
  return!!(a.ja & b) && !!(a.i & b) != c && (!(a.rh & b) || a.dispatchEvent(Qg(b, c))) && !a.ua
}
p.Xc = function(a) {
  !qh(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && oh(this, !0)
};
p.Wc = function(a) {
  !qh(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(!1), X(this, 2) && oh(this, !1))
};
function qh(a, b) {
  return!!a.relatedTarget && Ef(b, a.relatedTarget)
}
p.Vc = function(a) {
  if(this.isEnabled() && (X(this, 2) && oh(this, !0), Hc(a) && (!J || !mc || !a.ctrlKey))) {
    X(this, 4) && this.setActive(!0), this.m.Bf(this) && this.hb().focus()
  }
  !this.Dd && Hc(a) && (!J || !mc || !a.ctrlKey) && a.preventDefault()
};
p.vf = function(a) {
  this.isEnabled() && (X(this, 2) && oh(this, !0), this.ge() && this.mb(a) && X(this, 4) && this.setActive(!1))
};
p.tf = function(a) {
  this.isEnabled() && this.mb(a)
};
p.mb = function(a) {
  if(X(this, 16)) {
    var b = !(this.i & 16);
    ph(this, 16, b) && this.ia(16, b)
  }
  X(this, 8) && this.Ce(!0);
  X(this, 64) && (b = !(this.i & 64), ph(this, 64, b) && this.ia(64, b));
  b = new Cc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, e = 0;d = c[e];e++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
p.Og = function() {
  X(this, 32) && ph(this, 32, !0) && this.ia(32, !0)
};
p.rf = function() {
  X(this, 4) && this.setActive(!1);
  X(this, 32) && ph(this, 32, !1) && this.ia(32, !1)
};
p.uf = function(a) {
  return this.Ub && this.isEnabled() && this.ae(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
p.ae = function(a) {
  return a.keyCode == 13 && this.mb(a)
};
x(W) || f(Error("Invalid component class " + W));
x(Wg) || f(Error("Invalid renderer class " + Wg));
var rh = y(W);
bh[rh] = Wg;
ah("goog-control", function() {
  return new W(k)
});
function sh() {
}
C(sh, Wg);
da(sh);
p = sh.prototype;
p.Pc = n("button");
p.Ja = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : sh.d.Ja.call(this, a, b, c)
};
p.h = function(a) {
  var b = sh.d.h.call(this, a), c = a.Sc();
  c && this.Ee(b, c);
  (c = a.Tc()) && this.qd(b, c);
  a.ja & 16 && this.Ja(b, 16, !1);
  return b
};
p.Tc = s;
p.qd = s;
p.Sc = function(a) {
  return a.title
};
p.Ee = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
p.u = n("goog-button");
function th() {
}
C(th, sh);
da(th);
p = th.prototype;
p.Pc = function() {
};
p.h = function(a) {
  a.C && !1 != a.be && nh(a, !1);
  a.be = !1;
  a.Se &= -256;
  a.C && a.i & 32 && f(Error("Component already rendered"));
  a.i & 32 && a.ia(32, !1);
  a.ja &= -33;
  return a.Fa().h("button", {"class":Yg(this, a).join(" "), disabled:!a.isEnabled(), title:a.Sc() || "", value:a.Tc() || ""}, a.nf() || "")
};
p.zf = function(a) {
  V(Sg(a), a.b(), "click", a.mb)
};
p.kd = s;
p.Pb = s;
p.Bf = function(a) {
  return a.isEnabled()
};
p.nd = s;
p.ia = function(a, b, c) {
  th.d.ia.call(this, a, b, c);
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
p.Ja = s;
function uh(a, b, c) {
  W.call(this, a, b || th.Oa(), c)
}
C(uh, W);
p = uh.prototype;
p.Tc = m("ng");
p.qd = function(a) {
  this.ng = a;
  this.m.qd(this.b(), a)
};
p.Sc = m("ig");
p.Ee = function(a) {
  this.ig = a;
  this.m.Ee(this.b(), a)
};
p.c = function() {
  uh.d.c.call(this);
  delete this.ng;
  delete this.ig
};
p.R = function() {
  uh.d.R.call(this);
  if(this.ja & 32) {
    var a = this.hb();
    a && V(Sg(this), a, "keyup", this.ae)
  }
};
p.ae = function(a) {
  return a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup" ? this.mb(a) : a.keyCode == 32
};
ah("goog-button", function() {
  return new uh(k)
});
function vh() {
}
C(vh, sh);
da(vh);
vh.prototype.h = function(a) {
  var b = {"class":"goog-inline-block " + Yg(this, a).join(" "), title:a.Sc() || ""};
  return a.Fa().h("div", b, wh(this, a.da, a.Fa()))
};
vh.prototype.Pc = n("button");
vh.prototype.fc = function(a) {
  return a && a.firstChild.firstChild
};
function wh(a, b, c) {
  return c.h("div", "goog-inline-block " + (a.u() + "-outer-box"), c.h("div", "goog-inline-block " + (a.u() + "-inner-box"), b))
}
vh.prototype.u = n("goog-custom-button");
function xh(a, b, c) {
  uh.call(this, a, b || vh.Oa(), c)
}
C(xh, uh);
ah("goog-custom-button", function() {
  return new xh(k)
});
var yh = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function zh(a) {
  var b = {}, a = String(a), c = a.charAt(0) == "#" ? a : "#" + a;
  if(Ah.test(c)) {
    return b.Zc = Bh(c), b.type = "hex", b
  }else {
    a: {
      var d = a.match(Ch);
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
      return b.Zc = Dh(c[0], c[1], c[2]), b.type = "rgb", b
    }else {
      if(yh && (c = yh[a.toLowerCase()])) {
        return b.Zc = c, b.type = "named", b
      }
    }
  }
  f(Error(a + " is not a valid color string"))
}
var Eh = /#(.)(.)(.)/;
function Bh(a) {
  Ah.test(a) || f(Error("'" + a + "' is not a valid hex color"));
  a.length == 4 && (a = a.replace(Eh, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function Fh(a) {
  a = Bh(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function Dh(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || a < 0 || a > 255 || isNaN(b) || b < 0 || b > 255 || isNaN(c) || c < 0 || c > 255) && f(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = Gh(a.toString(16));
  b = Gh(b.toString(16));
  c = Gh(c.toString(16));
  return"#" + a + b + c
}
var Ah = /^#(?:[0-9a-f]{3}){1,2}$/i, Ch = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function Gh(a) {
  return a.length == 1 ? "0" + a : a
}
;var Hh;
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
  Hh = c
})();
function Ih(a, b) {
  Og.call(this, b);
  this.Jg = a;
  this.Rd = new Kg(this);
  this.Oc = new Ob
}
C(Ih, Og);
p = Ih.prototype;
p.a = R("goog.ui.media.FlashObject");
p.Dh = "window";
p.Te = "#000000";
p.tg = "sameDomain";
p.ba = function(a, b) {
  this.ub = u(a) ? a : Math.round(a) + "px";
  this.ce = u(b) ? b : Math.round(b) + "px";
  this.b() && Dg(this.b() ? this.b().firstChild : k, this.ub, this.ce);
  return this
};
p.R = function() {
  Ih.d.R.call(this);
  var a = this.b(), b;
  b = I ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = I ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = qa(c, this.Dh), d = this.Oc.Ga(), e = this.Oc.Y(), g = [], h = 0;h < d.length;h++) {
    var j = sa(d[h]), l = sa(e[h]);
    g.push(j + "=" + l)
  }
  b = qa(b, Rg(this), Rg(this), "goog-ui-media-flash-object", ua(this.Jg), ua(g.join("&")), this.Te, this.tg, c);
  a.innerHTML = b;
  this.ub && this.ce && this.ba(this.ub, this.ce);
  V(this.Rd, this.b(), Qa(yc), Dc)
};
p.h = function() {
  this.Zf != k && !(Ba(Hh, this.Zf) >= 0) && (O(this.a, "Required flash version not found:" + this.Zf), f(Error("Method not supported")));
  var a = this.Fa().createElement("div");
  a.className = "goog-ui-media-flash";
  this.g = a
};
p.c = function() {
  Ih.d.c.call(this);
  this.Oc = k;
  this.Rd.e();
  this.Rd = k
};
function Jh(a) {
  D.call(this, a)
}
C(Jh, D);
Jh.prototype.name = "cw.loadflash.FlashLoadFailed";
r.__loadFlashObject_callbacks = {};
function Kh(a, b, c) {
  function d() {
    e && delete r.__loadFlashObject_callbacks[e]
  }
  var e;
  if(jc && !K("1.8.1.20")) {
    return Cd(new Jh("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(Ba(Hh, "9") >= 0)) {
    return b = Hh, Cd(new Jh("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  e = "_" + Id();
  var h = new qd(d);
  r.__loadFlashObject_callbacks[e] = function() {
    a.setTimeout(function() {
      d();
      wd(h, U(g))
    }, 0)
  };
  b.Oc.set("onloadcallback", '__loadFlashObject_callbacks["' + e + '"]()');
  g = Rg(b);
  Tg(b, c);
  return h
}
function Lh(a, b, c) {
  var d = Kh(a, b, c), e = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  zd(d, function(b) {
    a.clearTimeout(e);
    return b
  });
  return d
}
;function Mh() {
  if(jc) {
    this.bb = {}, this.zd = {}, this.td = []
  }
}
Mh.prototype.a = R("goog.net.xhrMonitor");
Mh.prototype.Lc = jc;
function Nh(a) {
  var b = Oh;
  if(b.Lc) {
    var c = u(a) ? a : ia(a) ? y(a) : "";
    Q(b.a, "Pushing context: " + a + " (" + c + ")");
    b.td.push(c)
  }
}
function Ph() {
  var a = Oh;
  if(a.Lc) {
    var b = a.td.pop();
    Q(a.a, "Popping context: " + b);
    Qh(a, b)
  }
}
function Rh(a) {
  var b = Oh;
  if(b.Lc) {
    a = y(a);
    P(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.td.length;c++) {
      var d = b.td[c];
      Sh(b.bb, d, a);
      Sh(b.zd, a, d)
    }
  }
}
function Qh(a, b) {
  var c = a.zd[b], d = a.bb[b];
  c && d && (Q(a.a, "Updating dependent contexts"), F(c, function(a) {
    F(d, function(b) {
      Sh(this.bb, a, b);
      Sh(this.zd, b, a)
    }, this)
  }, a))
}
function Sh(a, b, c) {
  a[b] || (a[b] = []);
  Ya(a[b], c) || a[b].push(c)
}
var Oh = new Mh;
function Th() {
}
Th.prototype.Ue = k;
function Uh(a) {
  var b;
  if(!(b = a.Ue)) {
    b = {}, Vh(a) && (b[0] = !0, b[1] = !0), b = a.Ue = b
  }
  return b
}
;var Wh;
function Xh() {
}
C(Xh, Th);
function Yh(a) {
  return(a = Vh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
Xh.prototype.de = k;
function Vh(a) {
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
Wh = new Xh;
function Zh(a) {
  this.headers = new Ob;
  this.Ad = a || k
}
C(Zh, md);
Zh.prototype.a = R("goog.net.XhrIo");
var $h = /^https?:?$/i;
p = Zh.prototype;
p.Ka = !1;
p.j = k;
p.yd = k;
p.oc = "";
p.Df = "";
p.lc = 0;
p.mc = "";
p.Qd = !1;
p.$c = !1;
p.ee = !1;
p.kb = !1;
p.ud = 0;
p.sb = k;
p.$f = "";
p.Ch = !1;
p.send = function(a, b, c, d) {
  this.j && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.oc = a;
  this.mc = "";
  this.lc = 0;
  this.Df = b;
  this.Qd = !1;
  this.Ka = !0;
  this.j = this.Ad ? Yh(this.Ad) : Yh(Wh);
  this.yd = this.Ad ? Uh(this.Ad) : Uh(Wh);
  Rh(this.j);
  this.j.onreadystatechange = z(this.Rf, this);
  try {
    P(this.a, ai(this, "Opening Xhr")), this.ee = !0, this.j.open(b, a, !0), this.ee = !1
  }catch(e) {
    P(this.a, ai(this, "Error opening Xhr: " + e.message));
    bi(this, e);
    return
  }
  var a = c || "", g = this.headers.A();
  d && Mb(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.ca("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Mb(g, function(a, b) {
    this.j.setRequestHeader(b, a)
  }, this);
  if(this.$f) {
    this.j.responseType = this.$f
  }
  if("withCredentials" in this.j) {
    this.j.withCredentials = this.Ch
  }
  try {
    if(this.sb) {
      od.clearTimeout(this.sb), this.sb = k
    }
    if(this.ud > 0) {
      P(this.a, ai(this, "Will abort after " + this.ud + "ms if incomplete")), this.sb = od.setTimeout(z(this.yh, this), this.ud)
    }
    P(this.a, ai(this, "Sending request"));
    this.$c = !0;
    this.j.send(a);
    this.$c = !1
  }catch(h) {
    P(this.a, ai(this, "Send error: " + h.message)), bi(this, h)
  }
};
p.dispatchEvent = function(a) {
  if(this.j) {
    Nh(this.j);
    try {
      return Zh.d.dispatchEvent.call(this, a)
    }finally {
      Ph()
    }
  }else {
    return Zh.d.dispatchEvent.call(this, a)
  }
};
p.yh = function() {
  if(typeof ba != "undefined" && this.j) {
    this.mc = "Timed out after " + this.ud + "ms, aborting", this.lc = 8, P(this.a, ai(this, this.mc)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function bi(a, b) {
  a.Ka = !1;
  if(a.j) {
    a.kb = !0, a.j.abort(), a.kb = !1
  }
  a.mc = b;
  a.lc = 5;
  ci(a);
  di(a)
}
function ci(a) {
  if(!a.Qd) {
    a.Qd = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
p.abort = function(a) {
  if(this.j && this.Ka) {
    P(this.a, ai(this, "Aborting")), this.Ka = !1, this.kb = !0, this.j.abort(), this.kb = !1, this.lc = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), di(this)
  }
};
p.c = function() {
  if(this.j) {
    if(this.Ka) {
      this.Ka = !1, this.kb = !0, this.j.abort(), this.kb = !1
    }
    di(this, !0)
  }
  Zh.d.c.call(this)
};
p.Rf = function() {
  !this.ee && !this.$c && !this.kb ? this.eh() : ei(this)
};
p.eh = function() {
  ei(this)
};
function ei(a) {
  if(a.Ka && typeof ba != "undefined") {
    if(a.yd[1] && a.Pa() == 4 && fi(a) == 2) {
      P(a.a, ai(a, "Local request error detected and ignored"))
    }else {
      if(a.$c && a.Pa() == 4) {
        od.setTimeout(z(a.Rf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.Pa() == 4) {
          P(a.a, ai(a, "Request complete"));
          a.Ka = !1;
          var b;
          a: {
            switch(fi(a)) {
              case 0:
                b = u(a.oc) ? a.oc.match(Oe)[1] || k : a.oc.ra;
                b = !(b ? $h.test(b) : self.location ? $h.test(self.location.protocol) : 1);
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
            a.mc = c + " [" + fi(a) + "]";
            ci(a)
          }
          di(a)
        }
      }
    }
  }
}
function di(a, b) {
  if(a.j) {
    var c = a.j, d = a.yd[0] ? s : k;
    a.j = k;
    a.yd = k;
    if(a.sb) {
      od.clearTimeout(a.sb), a.sb = k
    }
    b || (Nh(c), a.dispatchEvent("ready"), Ph());
    var e = Oh;
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
      ie(a.a, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
p.ge = function() {
  return!!this.j
};
p.Pa = function() {
  return this.j ? this.j.readyState : 0
};
function fi(a) {
  try {
    return a.Pa() > 2 ? a.j.status : -1
  }catch(b) {
    return O(a.a, "Can not get status: " + b.message), -1
  }
}
p.getResponseHeader = function(a) {
  return this.j && this.Pa() == 4 ? this.j.getResponseHeader(a) : i
};
function ai(a, b) {
  return b + " [" + a.Df + " " + a.oc + " " + fi(a) + "]"
}
;var gi = !(I || J && !K("420+"));
function hi(a, b) {
  this.vd = a;
  this.pa = b
}
C(hi, L);
p = hi.prototype;
p.q = k;
p.Xa = -1;
p.qf = !1;
p.wf = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function ii(a) {
  var b = Wf(a.cf), c = b[0], b = b[1], d = r.parent;
  d ? (d.__XHRMaster_onframes(a.pa, c, b), b != 1 && a.e()) : a.e()
}
p.Tg = function() {
  ii(this);
  if(!this.ua) {
    var a = r.parent;
    a && a.__XHRMaster_oncomplete(this.pa);
    this.e()
  }
};
p.jh = function() {
  var a = r.parent;
  if(a) {
    this.Xa = this.q.Pa();
    if(this.Xa >= 2 && !this.qf) {
      for(var b = new Ob, c = this.wf.length;c--;) {
        var d = this.wf[c];
        try {
          b.set(d, this.q.j.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.W() && (this.qf = !0, a.__XHRMaster_ongotheaders(this.pa, Sb(b)), this.ua)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.pa, this.Xa);
    gi && this.Xa == 3 && ii(this)
  }else {
    this.e()
  }
};
p.me = function(a, b, c) {
  this.q = new Zh;
  N(this.q, "readystatechange", z(this.jh, this));
  N(this.q, "complete", z(this.Tg, this));
  this.q.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.cf = new Vf(this.q.j, 1048576)
};
p.c = function() {
  hi.d.c.call(this);
  delete this.cf;
  this.q && this.q.e();
  delete this.vd.zc[this.pa];
  delete this.vd
};
function ji() {
  this.zc = {}
}
C(ji, L);
ji.prototype.Zg = function(a, b, c, d) {
  var e = new hi(this, a);
  this.zc[a] = e;
  e.me(b, c, d)
};
ji.prototype.Eg = function(a) {
  (a = this.zc[a]) && a.e()
};
ji.prototype.c = function() {
  ji.d.c.call(this);
  for(var a = Qa(this.zc);a.length;) {
    a.pop().e()
  }
  delete this.zc
};
var ki = new ji;
r.__XHRSlave_makeRequest = z(ki.Zg, ki);
r.__XHRSlave_dispose = z(ki.Eg, ki);
function li(a) {
  this.B = a
}
var mi = /\s*;\s*/;
p = li.prototype;
p.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && J) {
    var b = "COOKIES_TEST_" + A();
    ni.set(b, "1");
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
  for(var c = a + "=", d = (this.B.cookie || "").split(mi), e = 0, g;g = d[e];e++) {
    if(g.indexOf(c) == 0) {
      return g.substr(c.length)
    }
  }
  return b
};
p.remove = function(a, b, c) {
  var d = this.ca(a);
  this.set(a, "", 0, b, c);
  return d
};
p.Ga = function() {
  return oi(this).keys
};
p.Y = function() {
  return oi(this).og
};
p.Qa = function() {
  return!this.B.cookie
};
p.W = function() {
  return!this.B.cookie ? 0 : (this.B.cookie || "").split(mi).length
};
p.ca = function(a) {
  return fa(this.get(a))
};
p.Ic = function(a) {
  for(var b = oi(this).og, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return!0
    }
  }
  return!1
};
p.clear = function() {
  for(var a = oi(this).keys, b = a.length - 1;b >= 0;b--) {
    this.remove(a[b])
  }
};
function oi(a) {
  for(var a = (a.B.cookie || "").split(mi), b = [], c = [], d, e, g = 0;e = a[g];g++) {
    d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)))
  }
  return{keys:b, og:c}
}
var ni = new li(document);
ni.ki = 3950;
function pi() {
}
pi.prototype.of = function() {
  return Boolean(Number((new Qe(document.location)).U.get("httpStreaming", "0"))) ? 2 : 1
};
function qi(a) {
  var b = new Ih("/compiled_client/FlashConnector.swf?cb=2ae8d8a79afe8f3a96bb49e8a9339914");
  b.Te = "#777777";
  b.ba(300, 30);
  var c = U("FlashConnectorSwf");
  c || f(Error("no FlashConnectorSwf?"));
  return Lh(a.O, b, c)
}
function ri(a, b, c) {
  var d = new Qe(document.location);
  if(c) {
    var e = d.ma, d = qi(a);
    xd(d, function(b) {
      b = new se(a, b);
      return new bg(e, 843, b)
    });
    return d
  }else {
    return b ? (b = r.__demo_shared_domain, d = d.A(), Te(d, "_____random_____." + b)) : d = d.A(), d.rb("/httpface/"), Ve(d, "", i), d = new cg(d.toString().replace("_____random_____", "%random%")), Bd(d)
  }
}
function si() {
  var a = ti, b = (new Qe(document.location)).U, c = b.get("mode") != "http", b = Boolean(Number(b.get("useSub", "1")));
  return ri(a, b, c)
}
;function ui() {
  this.Xf = A()
}
var vi = new ui;
ui.prototype.set = aa("Xf");
ui.prototype.reset = function() {
  this.set(A())
};
ui.prototype.get = m("Xf");
function wi(a) {
  this.hh = a || "";
  this.qh = vi
}
wi.prototype.eg = !0;
wi.prototype.oh = !0;
wi.prototype.nh = !0;
wi.prototype.fg = !1;
function xi(a) {
  return a < 10 ? "0" + a : String(a)
}
function yi(a, b) {
  var c = (a.hg - b) / 1E3, d = c.toFixed(3), e = 0;
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
function zi(a) {
  wi.call(this, a)
}
C(zi, wi);
zi.prototype.fg = !0;
function Ai(a) {
  this.ih = z(this.sg, this);
  this.lf = new zi;
  this.Af = this.lf.eg = !1;
  this.g = a;
  this.Gg = this.g.ownerDocument || this.g.document;
  var a = rf(this.g), b = k;
  if(I) {
    b = a.B.createStyleSheet(), Hg(b)
  }else {
    var c = uf(a.B, "head", i, i)[0];
    c || (b = uf(a.B, "body", i, i)[0], c = a.h("head"), b.parentNode.insertBefore(c, b));
    b = a.h("style");
    Hg(b);
    a.appendChild(c, b)
  }
  this.g.className += " logdiv"
}
Ai.prototype.sg = function(a) {
  var b = this.g.scrollHeight - this.g.scrollTop - this.g.clientHeight <= 100, c = this.Gg.createElement("div");
  c.className = "logmsg";
  var d = this.lf, e;
  switch(a.Kb.value) {
    case $d.value:
      e = "dbg-sh";
      break;
    case ae.value:
      e = "dbg-sev";
      break;
    case be.value:
      e = "dbg-w";
      break;
    case ce.value:
      e = "dbg-i";
      break;
    default:
      e = "dbg-f"
  }
  var g = [];
  g.push(d.hh, " ");
  if(d.eg) {
    var h = new Date(a.hg);
    g.push("[", xi(h.getFullYear() - 2E3) + xi(h.getMonth() + 1) + xi(h.getDate()) + " " + xi(h.getHours()) + ":" + xi(h.getMinutes()) + ":" + xi(h.getSeconds()) + "." + xi(Math.floor(h.getMilliseconds() / 10)), "] ")
  }
  d.oh && g.push("[", Aa(yi(a, d.qh.get())), "s] ");
  d.nh && g.push("[", ua(a.Yg), "] ");
  g.push('<span class="', e, '">', ta(Aa(ua(a.Mf))));
  d.fg && a.Td && g.push("<br>", ta(Aa(a.Sd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.g.appendChild(c);
  if(b) {
    this.g.scrollTop = this.g.scrollHeight
  }
};
Ai.prototype.clear = function() {
  this.g.innerHTML = ""
};
function Bi(a, b, c, d, e, g) {
  arguments.length == 6 ? this.setTransform(a, b, c, d, e, g) : arguments.length != 0 ? f(Error("Insufficient matrix parameters")) : (this.Z = this.aa = 1, this.T = this.$ = this.ga = this.ha = 0)
}
p = Bi.prototype;
p.A = function() {
  return new Bi(this.Z, this.T, this.$, this.aa, this.ga, this.ha)
};
p.setTransform = function(a, b, c, d, e, g) {
  (!ja(a) || !ja(b) || !ja(c) || !ja(d) || !ja(e) || !ja(g)) && f(Error("Invalid transform parameters"));
  this.Z = a;
  this.T = b;
  this.$ = c;
  this.aa = d;
  this.ga = e;
  this.ha = g;
  return this
};
p.Ze = function(a) {
  this.Z = a.Z;
  this.T = a.T;
  this.$ = a.$;
  this.aa = a.aa;
  this.ga = a.ga;
  this.ha = a.ha;
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
  this.ga += a * this.Z + b * this.$;
  this.ha += a * this.T + b * this.aa;
  return this
};
p.rotate = function(a, b, c) {
  var d = new Bi, e = Math.cos(a), a = Math.sin(a), b = d.setTransform(e, a, -a, e, b - b * e + c * a, c - b * a - c * e), c = this.Z, d = this.$;
  this.Z = b.Z * c + b.T * d;
  this.$ = b.$ * c + b.aa * d;
  this.ga += b.ga * c + b.ha * d;
  c = this.T;
  d = this.aa;
  this.T = b.Z * c + b.T * d;
  this.aa = b.$ * c + b.aa * d;
  this.ha += b.ga * c + b.ha * d;
  return this
};
p.toString = function() {
  return"matrix(" + [this.Z, this.T, this.$, this.aa, this.ga, this.ha].join(",") + ")"
};
p.n = function(a) {
  return this == a ? !0 : !a ? !1 : this.Z == a.Z && this.$ == a.$ && this.ga == a.ga && this.T == a.T && this.aa == a.aa && this.ha == a.ha
};
function Y(a, b) {
  this.g = a;
  this.wa = b;
  this.Md = !1
}
C(Y, md);
p = Y.prototype;
p.wa = k;
p.g = k;
p.jg = k;
p.b = m("g");
p.addEventListener = function(a, b, c, d) {
  N(this.g, a, b, c, d)
};
p.removeEventListener = function(a, b, c, d) {
  dd(this.g, a, b, c, d)
};
p.c = function() {
  Y.d.c.call(this);
  hd(this.g)
};
function Z(a, b, c, d) {
  Y.call(this, a, b);
  this.Le = c;
  this.wa.Ae(this, c);
  this.fill = d;
  this.wa.ze(this, d)
}
C(Z, Y);
Z.prototype.fill = k;
Z.prototype.Le = k;
Z.prototype.Lg = m("fill");
Z.prototype.Ng = m("Le");
function Ci(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(Ci, Z);
function Di(a, b) {
  Y.call(this, a, b)
}
C(Di, Y);
function Ei(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(Ei, Z);
function Fi(a, b) {
  Y.call(this, a, b)
}
C(Fi, Y);
function Gi(a, b) {
  Y.call(this, a, b)
}
C(Gi, Di);
Gi.prototype.clear = function() {
  Cf(this.b())
};
Gi.prototype.ba = function(a, b) {
  Hi(this.b(), {width:a, height:b})
};
function Ii(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(Ii, Ei);
function Ji(a, b) {
  Y.call(this, a, b)
}
C(Ji, Fi);
Ji.prototype.ba = function(a, b) {
  Hi(this.b(), {width:a, height:b})
};
function Ki() {
}
;function Li(a, b) {
  this.Id = a;
  this.pc = b || 1
}
C(Li, Ki);
Li.prototype.fa = m("Id");
function Mi(a, b) {
  this.ub = a;
  this.Id = b
}
Mi.prototype.fa = m("Id");
function Ni() {
  this.G = [];
  this.f = [];
  this.za = []
}
Ni.prototype.yb = k;
Ni.prototype.V = k;
Ni.prototype.Qb = !0;
var Oi = [2, 2, 6, 6, 0];
p = Ni.prototype;
p.clear = function() {
  this.G.length = 0;
  this.f.length = 0;
  this.za.length = 0;
  delete this.yb;
  delete this.V;
  delete this.Qb;
  return this
};
p.moveTo = function(a, b) {
  this.G[this.G.length - 1] == 0 ? this.za.length -= 2 : (this.G.push(0), this.f.push(1));
  this.za.push(a, b);
  this.V = this.yb = [a, b];
  return this
};
p.lineTo = function(a) {
  var b = this.G[this.G.length - 1];
  b == k && f(Error("Path cannot start with lineTo"));
  b != 1 && (this.G.push(1), this.f.push(0));
  for(b = 0;b < arguments.length;b += 2) {
    var c = arguments[b], d = arguments[b + 1];
    this.za.push(c, d)
  }
  this.f[this.f.length - 1] += b / 2;
  this.V = [c, d];
  return this
};
p.bf = function(a) {
  var b = this.G[this.G.length - 1];
  b == k && f(Error("Path cannot start with curve"));
  b != 2 && (this.G.push(2), this.f.push(0));
  for(b = 0;b < arguments.length;b += 6) {
    var c = arguments[b + 4], d = arguments[b + 5];
    this.za.push(arguments[b], arguments[b + 1], arguments[b + 2], arguments[b + 3], c, d)
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
  var e = this.V[0] - a * Math.cos(ve(c)) + a * Math.cos(ve(c + d)), g = this.V[1] - b * Math.sin(ve(c)) + b * Math.sin(ve(c + d));
  this.G.push(3);
  this.f.push(1);
  this.za.push(a, b, c, d, e, g);
  this.Qb = !1;
  this.V = [e, g];
  return this
};
p.ug = function(a, b, c, d) {
  var e = this.V[0] - a * Math.cos(ve(c)), g = this.V[1] - b * Math.sin(ve(c)), h = ve(d), d = Math.ceil(Math.abs(h) / Math.PI * 2);
  h /= d;
  for(var c = ve(c), j = 0;j < d;j++) {
    var l = Math.cos(c), o = Math.sin(c), v = 4 / 3 * Math.sin(h / 2) / (1 + Math.cos(h / 2)), q = e + (l - v * o) * a, w = g + (o + v * l) * b;
    c += h;
    l = Math.cos(c);
    o = Math.sin(c);
    this.bf(q, w, e + (l + v * o) * a, g + (o - v * l) * b, e + l * a, g + o * b)
  }
  return this
};
function Pi(a, b) {
  for(var c = a.za, d = 0, e = 0, g = a.G.length;e < g;e++) {
    var h = a.G[e], j = Oi[h] * a.f[e];
    b(h, c.slice(d, d + j));
    d += j
  }
}
p.A = function() {
  var a = new this.constructor;
  a.G = this.G.concat();
  a.f = this.f.concat();
  a.za = this.za.concat();
  a.yb = this.yb && this.yb.concat();
  a.V = this.V && this.V.concat();
  a.Qb = this.Qb;
  return a
};
var Qi = {};
Qi[0] = Ni.prototype.moveTo;
Qi[1] = Ni.prototype.lineTo;
Qi[4] = Ni.prototype.close;
Qi[2] = Ni.prototype.bf;
Qi[3] = Ni.prototype.ug;
function Ri(a) {
  if(a.Qb) {
    return a.A()
  }
  var b = new Ni;
  Pi(a, function(a, d) {
    Qi[a].apply(b, d)
  });
  return b
}
Ni.prototype.Qa = function() {
  return this.G.length == 0
};
function Si(a, b, c, d, e) {
  Og.call(this, e);
  this.width = a;
  this.height = b;
  this.ka = c || k;
  this.$b = d || k
}
C(Si, Og);
p = Si.prototype;
p.J = k;
p.La = 0;
p.cb = 0;
p.pf = function() {
  return this.X()
};
p.X = function() {
  return this.C ? Fg(this.b()) : ja(this.width) && ja(this.height) ? new T(this.width, this.height) : k
};
function Ti(a) {
  var b = a.X();
  return b ? b.width / (a.ka ? new T(a.ka, a.$b) : a.X()).width : 0
}
;function Ui(a, b, c, d, e) {
  Si.call(this, a, b, c, d, e);
  this.ef = {};
  this.Pe = J && !K(526);
  this.ib = new Kg(this)
}
var Vi;
C(Ui, Si);
function Wi(a, b, c) {
  a = a.la.B.createElementNS("http://www.w3.org/2000/svg", b);
  c && Hi(a, c);
  return a
}
function Hi(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
p = Ui.prototype;
p.wb = function(a, b) {
  (b || this.J).b().appendChild(a.b())
};
p.ze = function(a, b) {
  var c = a.b();
  b instanceof Li ? (c.setAttribute("fill", b.fa()), c.setAttribute("fill-opacity", b.pc)) : c.setAttribute("fill", "none")
};
p.Ae = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.fa());
    var d = b.ub;
    u(d) && d.indexOf("px") != -1 ? c.setAttribute("stroke-width", parseFloat(d) / Ti(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
p.h = function() {
  var a = Wi(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = Wi(this, "g");
  this.Od = Wi(this, "defs");
  this.J = new Gi(b, this);
  a.appendChild(this.Od);
  a.appendChild(b);
  this.g = a;
  if(this.ka || this.La || this.cb) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.Pe ? this.wd() : this.b().setAttribute("viewBox", this.La + " " + this.cb + " " + (this.ka ? this.ka + " " + this.$b : ""))
  }
};
p.wd = function() {
  if(this.C && (this.ka || this.La || !this.cb)) {
    var a = this.X();
    if(a.width == 0) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.La, c = -this.cb, d = a.width / this.ka, a = a.height / this.$b;
      this.J.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
p.ba = function(a, b) {
  Dg(this.b(), a, b)
};
p.X = function() {
  if(!jc) {
    return this.C ? Fg(this.b()) : Ui.d.X.call(this)
  }
  var a = this.width, b = this.height, c = u(a) && a.indexOf("%") != -1, d = u(b) && b.indexOf("%") != -1;
  if(!this.C && (c || d)) {
    return k
  }
  var e, g;
  if(c) {
    e = this.b().parentNode, g = Fg(e), a = parseFloat(a) * g.width / 100
  }
  d && (e = e || this.b().parentNode, g = g || Fg(e), b = parseFloat(b) * g.height / 100);
  return new T(a, b)
};
p.clear = function() {
  this.J.clear();
  Cf(this.Od);
  this.ef = {}
};
p.Kc = function(a, b, c, d, e, g, h) {
  a = Wi(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  e = new Ii(a, this, e, g);
  this.wb(e, h);
  return e
};
p.drawImage = function(a, b, c, d, e, g) {
  a = Wi(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", e);
  e = new Ji(a, this);
  this.wb(e, g);
  return e
};
p.R = function() {
  var a = this.X();
  Ui.d.R.call(this);
  a || this.dispatchEvent("resize");
  if(this.Pe) {
    var a = this.width, b = this.height;
    typeof a == "string" && a.indexOf("%") != -1 && typeof b == "string" && b.indexOf("%") != -1 && V(this.ib, Xi(), pd, this.wd);
    this.wd()
  }
};
p.eb = function() {
  Ui.d.eb.call(this);
  this.Pe && Mg(this.ib, Xi(), pd, this.wd)
};
p.c = function() {
  delete this.ef;
  delete this.Od;
  delete this.J;
  Ui.d.c.call(this)
};
function Xi() {
  Vi || (Vi = new nd(400), Vi.start());
  return Vi
}
;function Yi() {
  return this.g = this.wa.la.b(this.S) || this.g
}
function Zi(a, b) {
  this.S = a.id;
  Y.call(this, a, b)
}
C(Zi, Di);
Zi.prototype.b = Yi;
Zi.prototype.clear = function() {
  Cf(this.b())
};
Zi.prototype.ba = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  if(this.wa.J != this) {
    c.coordorigin = "0 0"
  }
};
function $i(a, b, c, d, e, g, h, j) {
  this.S = a.id;
  Z.call(this, a, b, h, j);
  this.Ji = c;
  this.Ki = d;
  this.$i = e;
  this.aj = g
}
C($i, Ei);
$i.prototype.b = Yi;
function aj(a, b) {
  this.S = a.id;
  Y.call(this, a, b)
}
C(aj, Fi);
aj.prototype.b = Yi;
aj.prototype.ba = function(a, b) {
  var c = this.b().style;
  c.width = bj(a) + "px";
  c.height = bj(b) + "px"
};
function cj(a, b, c, d, e) {
  Si.call(this, a, b, c, d, e);
  this.ib = new Kg(this)
}
C(cj, Si);
var dj = document.documentMode && document.documentMode >= 8;
function bj(a) {
  return Math.round((parseFloat(a.toString()) - 0.5) * 100)
}
function $(a) {
  return Math.round(parseFloat(a.toString()) * 100)
}
function ej(a, b) {
  var c = a.la.createElement("g_vml_:" + b);
  c.id = "goog_" + Da++;
  return c
}
function fj(a) {
  if(dj && a.C) {
    a.b().innerHTML = a.b().innerHTML
  }
}
cj.prototype.wb = function(a, b) {
  (b || this.J).b().appendChild(a.b());
  fj(this)
};
cj.prototype.ze = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var e = c.childNodes[d];
    e.tagName == "fill" && c.removeChild(e)
  }
  b instanceof Li ? b.fa() == "transparent" ? c.filled = !1 : b.pc != 1 ? (c.filled = !0, d = ej(this, "fill"), d.opacity = Math.round(b.pc * 100) + "%", d.color = b.fa(), c.appendChild(d)) : (c.filled = !0, c.fillcolor = b.fa()) : c.filled = !1;
  fj(this)
};
cj.prototype.Ae = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = !0;
    var d = b.ub;
    u(d) && d.indexOf("px") == -1 ? d = parseFloat(d) : d *= Ti(this);
    var e = c.getElementsByTagName("stroke")[0];
    d < 1 ? (e = e || ej(this, "stroke"), e.opacity = d, e.bj = "1px", e.color = b.fa(), c.appendChild(e)) : (e && c.removeChild(e), c.strokecolor = b.fa(), c.strokeweight = d + "px")
  }else {
    c.stroked = !1
  }
  fj(this)
};
function gj(a, b, c, d, e) {
  var g = a.style;
  g.position = "absolute";
  g.left = bj(b) + "px";
  g.top = bj(c) + "px";
  g.width = $(d) + "px";
  g.height = $(e) + "px";
  if(a.tagName == "shape") {
    a.coordsize = $(d) + " " + $(e)
  }
}
try {
  eval("document.namespaces")
}catch(hj) {
}
p = cj.prototype;
p.h = function() {
  var a = this.la.B;
  if(!a.namespaces.g_vml_) {
    dj ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}"
  }
  var a = this.width, b = this.height, c = this.la.h("div", {style:"overflow:hidden;position:relative;width:" + (u(a) && pa(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (u(b) && pa(b) ? b : parseFloat(b.toString()) + "px")});
  this.g = c;
  var d = ej(this, "group"), e = d.style;
  e.position = "absolute";
  e.left = e.top = 0;
  e.width = this.width;
  e.height = this.height;
  d.coordsize = this.ka ? $(this.ka) + " " + $(this.$b) : $(a) + " " + $(b);
  d.coordorigin = fa(this.La) ? $(this.La) + " " + $(this.cb) : "0 0";
  c.appendChild(d);
  this.J = new Zi(d, this);
  N(c, "resize", z(this.$d, this))
};
p.$d = function() {
  var a = Fg(this.b()), b = this.J.b().style;
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
  Dg(this.b(), a, b)
};
p.X = function() {
  var a = this.b();
  return new T(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
p.clear = function() {
  this.J.clear()
};
p.Kc = function(a, b, c, d, e, g, h) {
  var j = ej(this, "oval");
  gj(j, a - c, b - d, c * 2, d * 2);
  a = new $i(j, this, a, b, c, d, e, g);
  this.wb(a, h);
  return a
};
p.drawImage = function(a, b, c, d, e, g) {
  var h = ej(this, "image");
  gj(h, a, b, c, d);
  dj ? h.src = e : h.setAttribute("src", e);
  a = new aj(h, this);
  this.wb(a, g);
  return a
};
p.R = function() {
  cj.d.R.call(this);
  this.$d();
  fj(this)
};
p.c = function() {
  this.J = k;
  cj.d.c.call(this)
};
function ij(a) {
  Y.call(this, k, a);
  this.P = []
}
C(ij, Di);
ij.prototype.clear = function() {
  if(this.P.length) {
    this.P.length = 0, jj(this.wa)
  }
};
ij.prototype.ba = function() {
};
ij.prototype.appendChild = function(a) {
  this.P.push(a)
};
ij.prototype.Ba = function() {
  for(var a = 0, b = this.P.length;a < b;a++) {
    kj(this.wa, this.P[a])
  }
};
function lj(a, b, c, d, e, g, h, j) {
  Z.call(this, a, b, h, j);
  this.zg = c;
  this.Ag = d;
  this.ag = e;
  this.bg = g;
  this.z = new Ni;
  this.z.clear();
  this.z.moveTo(this.zg + this.ag * Math.cos(ve(0)), this.Ag + this.bg * Math.sin(ve(0)));
  this.z.arcTo(this.ag, this.bg, 0, 360);
  this.z.close();
  this.fh = new mj(k, b, this.z, h, j)
}
C(lj, Ei);
lj.prototype.Ba = function(a) {
  this.fh.Ba(a)
};
function mj(a, b, c, d, e) {
  Z.call(this, a, b, d, e);
  this.rb(c)
}
C(mj, Ci);
mj.prototype.bc = !1;
mj.prototype.rb = function(a) {
  this.z = a.Qb ? a : Ri(a);
  this.bc && jj(this.wa)
};
mj.prototype.Ba = function(a) {
  this.bc = !0;
  a.beginPath();
  Pi(this.z, function(b, c) {
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
function nj(a, b, c, d, e, g, h) {
  Y.call(this, a, b);
  this.Fh = c;
  this.Hh = d;
  this.Re = e;
  this.Zd = g;
  this.ph = h
}
C(nj, Fi);
nj.prototype.bc = !1;
nj.prototype.ba = function(a, b) {
  this.Re = a;
  this.Zd = b;
  this.bc && jj(this.wa)
};
nj.prototype.Ba = function(a) {
  this.yf ? (this.Re && this.Zd && a.drawImage(this.yf, this.Fh, this.Hh, this.Re, this.Zd), this.bc = !0) : (a = new Image, a.onload = z(this.Pg, this, a), a.src = this.ph)
};
nj.prototype.Pg = function(a) {
  this.yf = a;
  jj(this.wa)
};
function oj(a, b, c, d, e) {
  Si.call(this, a, b, c, d, e)
}
C(oj, Si);
p = oj.prototype;
p.ze = function() {
  jj(this)
};
p.Ae = function() {
  jj(this)
};
function pj(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.jg ? b.jg.A() : new Bi, e = d.ga, g = d.ha;
  (e || g) && c.translate(e, g);
  (d = d.T) && c.rotate(Math.asin(d))
}
p.h = function() {
  var a = this.la.h("div", {style:"position:relative;overflow:hidden"});
  this.g = a;
  this.Yb = this.la.h("canvas");
  a.appendChild(this.Yb);
  this.Xg = this.J = new ij(this);
  this.kh = 0;
  qj(this)
};
p.getContext = function() {
  this.b() || this.h();
  if(!this.zb) {
    this.zb = this.Yb.getContext("2d"), this.zb.save()
  }
  return this.zb
};
p.ba = function(a, b) {
  this.width = a;
  this.height = b;
  qj(this);
  jj(this)
};
p.X = function() {
  var a = this.width, b = this.height, c = u(a) && a.indexOf("%") != -1, d = u(b) && b.indexOf("%") != -1;
  if(!this.C && (c || d)) {
    return k
  }
  var e, g;
  if(c) {
    e = this.b().parentNode, g = Fg(e), a = parseFloat(a) * g.width / 100
  }
  d && (e = e || this.b().parentNode, g = g || Fg(e), b = parseFloat(b) * g.height / 100);
  return new T(a, b)
};
function qj(a) {
  Dg(a.b(), a.width, a.height);
  var b = a.X();
  if(b) {
    Dg(a.Yb, b.width, b.height), a.Yb.width = b.width, a.Yb.height = b.height, a.zb = k
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
function jj(a) {
  if(a.Xi) {
    a.Wi = !0
  }else {
    if(a.C) {
      a.reset();
      if(a.ka) {
        var b = a.X();
        a.getContext().scale(b.width / a.ka, b.height / a.$b)
      }
      (a.La || a.cb) && a.getContext().translate(-a.La, -a.cb);
      pj(a, a.J);
      a.J.Ba(a.zb);
      a.getContext().restore()
    }
  }
}
function kj(a, b) {
  var c = a.getContext();
  pj(a, b);
  if(!b.Lg || !b.Ng) {
    b.Ba(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof Li) {
        if(d.pc != 0) {
          c.globalAlpha = d.pc, c.fillStyle = d.fa(), b.Ba(c), c.fill(), c.globalAlpha = 1
        }
      }else {
        var e = c.createLinearGradient(d.Pi(), d.Ri(), d.Qi(), d.Si());
        e.addColorStop(0, d.Ni());
        e.addColorStop(1, d.Oi());
        c.fillStyle = e;
        b.Ba(c);
        c.fill()
      }
    }
    if(d = b.Le) {
      b.Ba(c), c.strokeStyle = d.fa(), d = d.ub, u(d) && d.indexOf("px") != -1 && (d = parseFloat(d) / Ti(a)), c.lineWidth = d, c.stroke()
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
  this.C && !this.kh && !(b != this.J && b != this.Xg) && kj(this, a)
};
p.Kc = function(a, b, c, d, e, g, h) {
  a = new lj(k, this, a, b, c, d, e, g);
  this.append(a, h);
  return a
};
p.drawImage = function(a, b, c, d, e, g) {
  a = new nj(k, this, a, b, c, d, e);
  this.append(a, g);
  return a
};
p.c = function() {
  this.zb = k;
  oj.d.c.call(this)
};
p.R = function() {
  var a = this.X();
  oj.d.R.call(this);
  a || (qj(this), this.dispatchEvent("resize"));
  jj(this)
};
function rj(a) {
  this.w = [];
  sj(this, a)
}
C(rj, md);
p = rj.prototype;
p.Za = k;
p.ye = k;
function sj(a, b) {
  b && (F(b, function(a) {
    this.xc(a, !1)
  }, a), cb(a.w, b))
}
p.Yd = m("Za");
p.pd = function(a) {
  if(a != this.Za) {
    this.xc(this.Za, !1), this.Za = a, this.xc(a, !0)
  }
  this.dispatchEvent("select")
};
p.Xd = function() {
  return this.Za ? Ua(this.w, this.Za) : -1
};
p.De = function(a) {
  this.pd(this.w[a] || k)
};
p.clear = function() {
  Za(this.w);
  this.Za = k
};
p.c = function() {
  rj.d.c.call(this);
  delete this.w;
  this.Za = k
};
p.xc = function(a, b) {
  a && (typeof this.ye == "function" ? this.ye(a, b) : typeof a.Ce == "function" && a.Ce(b))
};
function tj() {
}
C(tj, Wg);
da(tj);
var vj = 0;
tj.prototype.h = function(a) {
  var b = Yg(this, a);
  return a.Fa().h("div", b ? b.join(" ") : k, wj(this, a.da, a.pf(), a.Fa()))
};
function wj(a, b, c, d) {
  for(var e = [], g = 0, h = 0;g < c.height;g++) {
    for(var j = [], l = 0;l < c.width;l++) {
      var o = b && b[h++];
      j.push(xj(a, o, d))
    }
    e.push(d.h("tr", a.u() + "-row", j))
  }
  return a.af(e, d)
}
tj.prototype.af = function(a, b) {
  var c = b.h("table", this.u() + "-table", b.h("tbody", this.u() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Vg(c, "grid");
  return c
};
function xj(a, b, c) {
  a = c.h("td", {"class":a.u() + "-cell", id:a.u() + "-cell-" + vj++}, b);
  Vg(a, "gridcell");
  return a
}
tj.prototype.ld = function(a, b) {
  if(a) {
    var c = uf(document, "tbody", this.u() + "-body", a)[0];
    if(c) {
      var d = 0;
      F(c.rows, function(a) {
        F(a.cells, function(a) {
          Cf(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var e = [], g = rf(a), h = c.rows[0].cells.length;d < b.length;) {
          var j = b[d++];
          e.push(xj(this, j, g));
          if(e.length == h) {
            j = g.h("tr", this.u() + "-row", e), c.appendChild(j), e.length = 0
          }
        }
        if(e.length > 0) {
          for(;e.length < h;) {
            e.push(xj(this, "", g))
          }
          j = g.h("tr", this.u() + "-row", e);
          c.appendChild(j)
        }
      }
    }
    Jg(a, !0, jc)
  }
};
function yj(a, b, c) {
  for(b = b.b();c && c.nodeType == 1 && c != b;) {
    if(c.tagName == "TD" && Ya(mf(c), a.u() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function zj(a, b, c, d) {
  if(c) {
    c = c.parentNode, a = a.u() + "-cell-hover", d ? nf(c, a) : of(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id)
  }
}
tj.prototype.u = n("goog-palette");
function Aj(a, b, c) {
  W.call(this, a, b || tj.Oa(), c)
}
C(Aj, W);
p = Aj.prototype;
p.v = k;
p.jb = -1;
p.L = k;
p.c = function() {
  Aj.d.c.call(this);
  if(this.L) {
    this.L.e(), this.L = k
  }
  this.v = k
};
p.md = function(a) {
  Aj.d.md.call(this, a);
  Bj(this);
  this.L ? (this.L.clear(), sj(this.L, a)) : (this.L = new rj(a), this.L.ye = z(this.xc, this), V(Sg(this), this.L, "select", this.Sg));
  this.jb = -1
};
p.nf = n(k);
p.Xc = function(a) {
  Aj.d.Xc.call(this, a);
  var b = yj(this.m, this, a.target);
  if((!b || !a.relatedTarget || !Ef(b, a.relatedTarget)) && b != Cj(this)) {
    a = this.da, Dj(this, a ? Ua(a, b) : -1)
  }
};
p.Wc = function(a) {
  Aj.d.Wc.call(this, a);
  var b = yj(this.m, this, a.target);
  (!b || !a.relatedTarget || !Ef(b, a.relatedTarget)) && b == Cj(this) && zj(this.m, this, b, !1)
};
p.Vc = function(a) {
  Aj.d.Vc.call(this, a);
  if(this.ge() && (a = yj(this.m, this, a.target), a != Cj(this))) {
    var b = this.da;
    Dj(this, b ? Ua(b, a) : -1)
  }
};
p.mb = function() {
  var a = Cj(this);
  return a ? (this.pd(a), this.dispatchEvent("action")) : !1
};
p.uf = function(a) {
  var b = this.da, b = b ? b.length : 0, c = this.v.width;
  if(b == 0 || !this.isEnabled()) {
    return!1
  }
  if(a.keyCode == 13 || a.keyCode == 32) {
    return this.mb(a)
  }
  if(a.keyCode == 36) {
    return Dj(this, 0), !0
  }else {
    if(a.keyCode == 35) {
      return Dj(this, b - 1), !0
    }
  }
  var d = this.jb < 0 ? this.Xd() : this.jb;
  switch(a.keyCode) {
    case 37:
      d == -1 && (d = b);
      if(d > 0) {
        return Dj(this, d - 1), a.preventDefault(), !0
      }
      break;
    case 39:
      if(d < b - 1) {
        return Dj(this, d + 1), a.preventDefault(), !0
      }
      break;
    case 38:
      d == -1 && (d = b + c - 1);
      if(d >= c) {
        return Dj(this, d - c), a.preventDefault(), !0
      }
      break;
    case 40:
      if(d == -1 && (d = -c), d < b - c) {
        return Dj(this, d + c), a.preventDefault(), !0
      }
  }
  return!1
};
p.Sg = function() {
};
p.pf = m("v");
p.ba = function(a, b) {
  this.b() && f(Error("Component already rendered"));
  this.v = ja(a) ? new T(a, b) : a;
  Bj(this)
};
function Cj(a) {
  var b = a.da;
  return b && b[a.jb]
}
function Dj(a, b) {
  if(b != a.jb) {
    Ej(a, a.jb, !1), a.jb = b, Ej(a, b, !0)
  }
}
p.Xd = function() {
  return this.L ? this.L.Xd() : -1
};
p.Yd = function() {
  return this.L ? this.L.Yd() : k
};
p.De = function(a) {
  this.L && this.L.De(a)
};
p.pd = function(a) {
  this.L && this.L.pd(a)
};
function Ej(a, b, c) {
  if(a.b()) {
    var d = a.da;
    d && b >= 0 && b < d.length && zj(a.m, a, d[b], c)
  }
}
p.xc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.m.u() + "-cell-selected";
    b ? nf(c, d) : of(c, d)
  }
};
function Bj(a) {
  var b = a.da;
  if(b) {
    if(a.v && a.v.width) {
      if(b = Math.ceil(b.length / a.v.width), !ja(a.v.height) || a.v.height < b) {
        a.v.height = b
      }
    }else {
      b = Math.ceil(Math.sqrt(b.length)), a.v = new T(b, b)
    }
  }else {
    a.v = new T(0, 0)
  }
}
;function Fj(a, b, c) {
  this.Gc = a || [];
  Aj.call(this, k, b || tj.Oa(), c);
  this.Gc = this.Gc;
  this.fd = k;
  this.ld(Gj(this))
}
C(Fj, Aj);
Fj.prototype.fd = k;
function Hj(a) {
  var b = Ij(Jj);
  if(!a.fd) {
    a.fd = Va(a.Gc, function(a) {
      return Ij(a)
    })
  }
  a.De(b ? Ua(a.fd, b) : -1)
}
function Gj(a) {
  return Va(a.Gc, function(a) {
    var c = this.Fa().h("div", {"class":this.m.u() + "-colorswatch", style:"background-color:" + a});
    c.title = a.charAt(0) == "#" ? "RGB (" + Fh(a).join(", ") + ")" : a;
    return c
  }, a)
}
function Ij(a) {
  if(a) {
    try {
      return zh(a).Zc
    }catch(b) {
    }
  }
  return k
}
;var Kj = R("whiteboard.logger");
window.onerror = function(a, b, c) {
  ie(Kj, "window.onerror: message: " + H(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Lj() {
  this.ue = new Ab
}
Lj.prototype.uh = function(a, b) {
  Kj.info("streamReset: reasonString=" + H(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  Mj = k
};
Lj.prototype.vh = function(a) {
  var a = Cb(a), b = a[0], c = a[1];
  b == 1 ? (c = this.ue.Pd(wb.gc(), c), a = lb(c, 1), b = lb(c, 2), c = c.fa(), rb.Kc(a, b, 5, 5, new Mi(1, "black"), new Li(c), i)) : b == 2 ? (rb.e(), Nj()) : O(Kj, "Strange message from server: " + H(a))
};
Lj.prototype.reset = function(a) {
  Kj.info("resetting with reason: " + a);
  this.H.reset(a)
};
var Mj = k, ti = new Dd(r.window);
function Oj() {
  Mj && (Mj.reset("idle timeout fired"), Mj = k)
}
var Pj = k;
function Qj() {
  Pj != k && ti.O.clearTimeout(Pj);
  Mj && (Pj = ti.O.setTimeout(Oj, 2592E5))
}
N(window, ["click", "focus", "keydown", "keypress"], Qj, !0);
function Rj() {
  var a = new pi;
  Mj = new Lj;
  Qj();
  xd(si(), function(b) {
    Mj || f(Error("lastProto falsy?"));
    var b = new hg(b, a, ti), c = Mj;
    b.te = z(c.vh, c);
    b.onreset = z(c.uh, c);
    Mj.H = b;
    ng(Mj.H, ["subprotocol:whiteboard"]);
    b.start();
    return k
  })
}
function Sj() {
  rb.e();
  Nj();
  var a = Mj;
  Kj.info("Telling server to clear the board.");
  var b = a.H, a = [2, a.ue.qb(new xb)], a = (new Db).qb(a);
  ng(b, [a])
}
function Tj(a) {
  var b = new Fc(a), a = b.offsetX, c = b.offsetY;
  rb.Kc(a, c, 5, 5, new Mi(1, "black"), new Li(sb), i);
  var d = Mj, e = sb;
  Kj.info("Telling server about circle at: " + a + ", " + c + " with color " + e);
  var b = d.H, g = new wb;
  mb(g, 1, a);
  mb(g, 2, c);
  mb(g, 3, e);
  a = d.ue.qb(g);
  ng(b, [(new Db).qb([1, a])])
}
function Nj() {
  var a;
  a = I && !K("9") ? new cj(800, 600, i, i, i) : J && (!K("420") || kc) ? new oj(800, 600, i, i, i) : new Ui(800, 600, i, i, i);
  a.h();
  tb = U("drawArea");
  Tg(a, tb);
  rb = a
}
var Jj = "#E06666";
function Uj(a) {
  var b;
  (a = a.target.Yd()) ? (a = a.style[Fa("background-color")] || "", b = Ij(a)) : b = k;
  b || (b = Jj);
  sb = b;
  ni.set("whiteboard_defaultColor", b);
  a = U("whiteboard-cp-value");
  u("background-color") ? Bg(a, b, "background-color") : Pa("background-color", oa(Bg, a));
  a = U("whiteboard-cp-value");
  a.title = b;
  b = zh(b).Zc;
  Ff(a, b);
  b = Fh(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = Dh(b[0], b[1], b[2]);
  u("color") ? Bg(a, b, "color") : Pa("color", oa(Bg, a))
}
function Vj() {
  ub = (new Qe(document.location)).U;
  if(vb = Boolean(Number(ub.get("logging", "0")))) {
    me().od(ge);
    var a = new Ai(document.getElementById("log"));
    if(!0 != a.Af) {
      var b = me(), c = a.ih;
      if(!b.jc) {
        b.jc = []
      }
      b.jc.push(c);
      a.Af = !0
    }
  }else {
    me().od(Zd)
  }
  Kj.info("Logger works.");
  (a = ni.get("whiteboard_defaultColor")) && (Jj = a);
  sb = Jj;
  b = U("whiteboard-controls-left");
  a = U("whiteboard-controls-right");
  c = xf("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  Bf(b, c);
  c = xf("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  Bf(b, c);
  b = new Fj("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.ba(8);
  Tg(b, U("whiteboard-cp"));
  N(b, "action", Uj);
  Hj(b);
  Uj({target:b});
  b = new xh("Clear board");
  mh(b, "clear-board-button");
  Tg(b, a);
  N(b, "action", Sj);
  a = U("drawAreaOverlay");
  Jg(a, !0);
  N(a, "click", Tj, !1);
  Nj();
  Rj()
}
var Wj = "__whiteboard_init".split("."), Xj = r;
!(Wj[0] in Xj) && Xj.execScript && Xj.execScript("var " + Wj[0]);
for(var Yj;Wj.length && (Yj = Wj.shift());) {
  !Wj.length && fa(Vj) ? Xj[Yj] = Vj : Xj = Xj[Yj] ? Xj[Yj] : Xj[Yj] = {}
}
;})();
