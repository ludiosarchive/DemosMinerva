(function(){function e(a) {
  throw a;
}
var i = void 0, k = null;
function aa() {
  return function() {
  }
}
function ba(a) {
  return function(b) {
    this[a] = b
  }
}
function l(a) {
  return function() {
    return this[a]
  }
}
function ca(a) {
  return function() {
    return a
  }
}
var m, da = da || {}, o = this;
function ea(a) {
  for(var a = a.split("."), b = o, c;c = a.shift();) {
    if(b[c] != k) {
      b = b[c]
    }else {
      return k
    }
  }
  return b
}
function q() {
}
function fa(a) {
  a.Ma = function() {
    return a.Mg || (a.Mg = new a)
  }
}
function ga(a) {
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
function ha(a) {
  return a !== i
}
function s(a) {
  return ga(a) == "array"
}
function ia(a) {
  var b = ga(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function ja(a) {
  return ka(a) && typeof a.getFullYear == "function"
}
function t(a) {
  return typeof a == "string"
}
function la(a) {
  return typeof a == "number"
}
function u(a) {
  return ga(a) == "function"
}
function ka(a) {
  a = ga(a);
  return a == "object" || a == "array" || a == "function"
}
function w(a) {
  return a[ma] || (a[ma] = ++na)
}
var ma = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), na = 0;
function oa(a) {
  return a.call.apply(a.bind, arguments)
}
function pa(a, b) {
  var c = b || o;
  if(arguments.length > 2) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var b = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(b, d);
      return a.apply(c, b)
    }
  }else {
    return function() {
      return a.apply(c, arguments)
    }
  }
}
function x() {
  x = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? oa : pa;
  return x.apply(k, arguments)
}
function qa(a) {
  var b = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = Array.prototype.slice.call(arguments);
    c.unshift.apply(c, b);
    return a.apply(this, c)
  }
}
var y = Date.now || function() {
  return+new Date
};
function z(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.d = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function A(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = String(a)
  }
}
z(A, Error);
A.prototype.name = "CustomError";
function ra(a) {
  var b = a.length - 1;
  return b >= 0 && a.indexOf("%", b) == b
}
function sa(a) {
  for(var b = 1;b < arguments.length;b++) {
    var c = String(arguments[b]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, c)
  }
  return a
}
var ta = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function ua(a) {
  a = String(a);
  if(!ta.test(a)) {
    return encodeURIComponent(a)
  }
  return a
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
  for(var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(d.length, f.length), h = 0;c == 0 && h < g;h++) {
    var j = d[h] || "", n = f[h] || "", p = RegExp("(\\d*)(\\D*)", "g"), B = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = p.exec(j) || ["", "", ""], v = B.exec(n) || ["", "", ""];
      if(r[0].length == 0 && v[0].length == 0) {
        break
      }
      c = Ea(r[1].length == 0 ? 0 : parseInt(r[1], 10), v[1].length == 0 ? 0 : parseInt(v[1], 10)) || Ea(r[2].length == 0, v[2].length == 0) || Ea(r[2], v[2])
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
  A.call(this, sa.apply(k, b));
  b.shift();
  this.Fi = a
}
z(Ia, A);
Ia.prototype.name = "AssertionError";
function Ja(a) {
  e(new Ia("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ka(a, b, c) {
  this.$ = a;
  this.H = b;
  this.je = c.name;
  this.zb = !!c.Gi;
  this.Di = !!c.required;
  this.Xb = c.Rd;
  this.Df = c.type;
  this.$e = !1;
  switch(this.Xb) {
    case La:
    ;
    case Ma:
    ;
    case Na:
    ;
    case Oa:
    ;
    case Pa:
      this.$e = !0
  }
  this.vi = c.defaultValue
}
var La = 3, Ma = 4, Na = 6, Oa = 16, Pa = 18;
function Qa(a) {
  return a.Xb == 11 || a.Xb == 10
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
var Ua = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
function Va(a) {
  for(var b, c, d = 1;d < arguments.length;d++) {
    c = arguments[d];
    for(b in c) {
      a[b] = c[b]
    }
    for(var f = 0;f < Ua.length;f++) {
      b = Ua[f], Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
    }
  }
}
;var D = Array.prototype, Wa = D.indexOf ? function(a, b, c) {
  return D.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(t(a)) {
    if(!t(b) || b.length != 1) {
      return-1
    }
    return a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Xa = D.forEach ? function(a, b, c) {
  D.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = t(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
}, Ya = D.map ? function(a, b, c) {
  return D.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = t(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (f[h] = b.call(c, g[h], h, a))
  }
  return f
}, Za = D.some ? function(a, b, c) {
  return D.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = t(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return!0
    }
  }
  return!1
}, $a = D.every ? function(a, b, c) {
  return D.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = t(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && !b.call(c, f[g], g, a)) {
      return!1
    }
  }
  return!0
};
function ab(a, b) {
  return Wa(a, b) >= 0
}
function bb(a) {
  if(!s(a)) {
    for(var b = a.length - 1;b >= 0;b--) {
      delete a[b]
    }
  }
  a.length = 0
}
function cb(a, b) {
  var c = Wa(a, b);
  c >= 0 && D.splice.call(a, c, 1)
}
function db() {
  return D.concat.apply(D, arguments)
}
function eb(a) {
  if(s(a)) {
    return db(a)
  }else {
    for(var b = [], c = 0, d = a.length;c < d;c++) {
      b[c] = a[c]
    }
    return b
  }
}
function fb(a) {
  for(var b = 1;b < arguments.length;b++) {
    var c = arguments[b], d;
    if(s(c) || (d = ia(c)) && c.hasOwnProperty("callee")) {
      a.push.apply(a, c)
    }else {
      if(d) {
        for(var f = a.length, g = c.length, h = 0;h < g;h++) {
          a[f + h] = c[h]
        }
      }else {
        a.push(c)
      }
    }
  }
}
function gb(a) {
  D.splice.apply(a, hb(arguments, 1))
}
function hb(a, b, c) {
  return arguments.length <= 2 ? D.slice.call(a, b) : D.slice.call(a, b, c)
}
function ib(a, b) {
  D.sort.call(a, b || jb)
}
function jb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function kb(a, b, c) {
  this.Bf = a;
  this.je = b.name || k;
  this.wi = b.df || k;
  this.si = b.ri;
  this.La = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.La[b.H] = b
  }
}
function lb(a) {
  a = Sa(a.La);
  ib(a, function(a, c) {
    return a.H - c.H
  });
  return a
}
;function mb() {
  this.q = {};
  this.vb = this.constructor.vb;
  var a = this.vb.La, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.La = b;
  this.Ld = this.ge = k
}
function nb(a, b) {
  for(var c in a.q) {
    a.La[c] || b.call(a, c, a.q[c])
  }
}
m = mb.prototype;
m.$b = l("vb");
m.get = function(a, b) {
  return ob(this, a.H, b)
};
m.set = function(a, b) {
  this.q[a.H] = b
};
m.add = function(a, b) {
  var c = a.H;
  this.q[c] || (this.q[c] = []);
  this.q[c].push(b)
};
m.clear = function(a) {
  delete this.q[a.H]
};
m.n = function(a) {
  if(!a || this.constructor != a.constructor) {
    return!1
  }
  for(var b = lb(this.$b()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(pb(this, d.H) != pb(a, d.H)) {
      return!1
    }
    if(pb(this, d.H)) {
      var f = Qa(d), g = d.H, h = this.q[g], g = a.q[g];
      if(d.zb) {
        if(h.length != g.length) {
          return!1
        }
        for(d = 0;d < h.length;d++) {
          if(!(f ? h[d].n(g[d]) : h[d] == g[d])) {
            return!1
          }
        }
      }else {
        if(!(f ? h.n(g) : h == g)) {
          return!1
        }
      }
    }
  }
  return!0
};
m.Re = function(a) {
  for(var b = lb(this.$b()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete this.q[d.H];
    if(pb(a, d.H)) {
      var f = Qa(d);
      if(d.zb) {
        var g;
        g = a;
        var h = d.H;
        qb(g, g.La[h]);
        g = g.q[h] || [];
        for(h = 0;h < g.length;h++) {
          this.add(d, f ? g[h].L() : g[h])
        }
      }else {
        g = a.get(d), this.set(d, f ? g.L() : g)
      }
    }
  }
};
m.L = function() {
  var a = new this.constructor;
  a.Re(this);
  return a
};
function pb(a, b) {
  return b in a.q && ha(a.q[b])
}
function qb(a, b) {
  if(a.ge) {
    var c = b.H;
    if(!(c in a.Ld)) {
      var d = a.q, f;
      f = a.ge;
      var g = a.q[c];
      if(g == k) {
        f = g
      }else {
        if(b.zb) {
          var h = [];
          s(g);
          for(var j = 0;j < g.length;j++) {
            h[j] = f.Mc(b, g[j])
          }
          f = h
        }else {
          f = f.Mc(b, g)
        }
      }
      d[c] = f;
      a.Ld[c] = !0
    }
  }
}
function ob(a, b, c) {
  var d = a.La[b];
  qb(a, d);
  return d.zb ? (c = c || 0, rb(a, b), a.q[b][c]) : (s(a.q[b]), a.q[b])
}
function rb(a, b) {
  return a.La[b].zb ? (pb(a, b) && s(a.q[b]), pb(a, b) ? a.q[b].length : 0) : pb(a, b) ? 1 : 0
}
function sb(a, b) {
  var c = [], d, f;
  for(f in b) {
    b.hasOwnProperty(f) && (f == 0 ? d = b[0] : c.push(new Ka(a, f, b[f])))
  }
  a.vb = new kb(a, d, c);
  a.$b = function() {
    return a.vb
  }
}
;var tb, ub, vb, wb, xb;
function yb() {
  mb.apply(this)
}
z(yb, mb);
yb.prototype.ea = function() {
  return ob(this, 3)
};
function zb() {
  mb.apply(this)
}
z(zb, mb);
sb(yb, {0:{name:"Point", df:"browsernode.whiteboard_messages.Point"}, 1:{name:"x", Rd:5, type:Number}, 2:{name:"y", Rd:5, type:Number}, 3:{name:"color", Rd:9, type:String}});
sb(zb, {0:{name:"ClearBoard", df:"browsernode.whiteboard_messages.ClearBoard"}});
function Ab() {
}
Ab.prototype.Nc = function(a, b) {
  return Qa(a) ? this.nb(b) : b
};
Ab.prototype.Kd = function(a) {
  new a.Bf;
  e(Error("Unimplemented"))
};
Ab.prototype.Mc = function(a, b) {
  if(Qa(a)) {
    return this.Kd(a.Df.vb, b)
  }
  if(!a.$e) {
    return b
  }
  var c = a.Df;
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
z(Bb, Ab);
Bb.prototype.Kd = function(a, b) {
  var c = new a.Bf;
  c.ge = this;
  c.q = b;
  c.Ld = {};
  return c
};
function Cb() {
}
z(Cb, Bb);
Cb.prototype.nb = function(a) {
  for(var b = lb(a.$b()), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    if(pb(a, f.H)) {
      var g = f.H;
      if(f.zb) {
        c[g] = [];
        for(var h = 0;h < rb(a, f.H);h++) {
          c[g][h] = this.Nc(f, a.get(f, h))
        }
      }else {
        c[g] = this.Nc(f, a.get(f))
      }
    }
  }
  nb(a, function(a, b) {
    c[a] = b
  });
  return c
};
Cb.prototype.Nc = function(a, b) {
  if(a.Xb == 8) {
    return b ? 1 : 0
  }
  return Ab.prototype.Nc.apply(this, arguments)
};
Cb.prototype.Mc = function(a, b) {
  if(a.Xb == 8) {
    return b === 1
  }
  return Ab.prototype.Mc.apply(this, arguments)
};
function Db(a) {
  return u(a) || typeof a == "object" && u(a.call) && u(a.apply)
}
;function Eb(a) {
  var a = String(a), b;
  b = /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
  if(b) {
    try {
      return eval("(" + a + ")")
    }catch(c) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
function Fb() {
}
Fb.prototype.nb = function(a) {
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
      if(s(b)) {
        var d = b.length;
        c.push("[");
        for(var f = "", g = 0;g < d;g++) {
          c.push(f), Gb(a, b[g], c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (g = b[f], typeof g != "function" && (c.push(d), Hb(f, c), c.push(":"), Gb(a, g, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var Ib = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, Jb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Hb(a, b) {
  b.push('"', a.replace(Jb, function(a) {
    if(a in Ib) {
      return Ib[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    b < 16 ? f += "000" : b < 256 ? f += "00" : b < 4096 && (f += "0");
    return Ib[a] = f + b.toString(16)
  }), '"')
}
;function Kb(a, b, c) {
  var d = Wa(c, a);
  if(d != -1) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = ga(a);
    if(d == "boolean" || d == "number" || d == "null" || d == "undefined") {
      b.push(String(a))
    }else {
      if(d == "string") {
        Hb(a, b)
      }else {
        if(Db(a.F)) {
          a.F(b, c)
        }else {
          if(Db(a.lg)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if(d == "array") {
                d = a.length;
                b.push("[");
                for(var f = "", g = 0;g < d;g++) {
                  b.push(f), Kb(a[g], b, c), f = ", "
                }
                b.push("]")
              }else {
                if(d == "object") {
                  if(ja(a) && typeof a.valueOf == "function") {
                    b.push("new Date(", String(a.valueOf()), ")")
                  }else {
                    for(var d = Ta(a).concat(Ua), f = {}, h = g = 0;h < d.length;) {
                      var j = d[h++], n = ka(j) ? "o" + w(j) : (typeof j).charAt(0) + j;
                      Object.prototype.hasOwnProperty.call(f, n) || (f[n] = !0, d[g++] = j)
                    }
                    d.length = g;
                    b.push("{");
                    f = "";
                    for(h = 0;h < d.length;h++) {
                      g = d[h], Object.prototype.hasOwnProperty.call(a, g) && (j = a[g], b.push(f), Hb(g, b), b.push(": "), Kb(j, b, c), f = ", ")
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
function E(a, b, c) {
  c || (c = []);
  Kb(a, b, c)
}
function F(a) {
  var b = [];
  E(a, b, i);
  return b.join("")
}
;function Lb(a) {
  if(typeof a.U == "function") {
    return a.U()
  }
  if(ia(a) || t(a)) {
    return a.length
  }
  var b = 0, c;
  for(c in a) {
    b++
  }
  return b
}
function Mb(a) {
  if(typeof a.W == "function") {
    return a.W()
  }
  if(t(a)) {
    return a.split("")
  }
  if(ia(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Sa(a)
}
function Nb(a) {
  if(typeof a.Ea == "function") {
    return a.Ea()
  }
  if(typeof a.W != "function") {
    if(ia(a) || t(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return Ta(a)
  }
}
function Ob(a, b) {
  if(typeof a.contains == "function") {
    return a.contains(b)
  }
  if(typeof a.Fc == "function") {
    return a.Fc(b)
  }
  if(ia(a) || t(a)) {
    return ab(a, b)
  }
  var c;
  a: {
    for(c in a) {
      if(a[c] == b) {
        c = !0;
        break a
      }
    }
    c = !1
  }
  return c
}
function Pb(a, b, c) {
  if(typeof a.forEach == "function") {
    a.forEach(b, c)
  }else {
    if(ia(a) || t(a)) {
      Xa(a, b, c)
    }else {
      for(var d = Nb(a), f = Mb(a), g = f.length, h = 0;h < g;h++) {
        b.call(c, f[h], d && d[h], a)
      }
    }
  }
}
function Qb(a, b) {
  if(typeof a.every == "function") {
    return a.every(b, i)
  }
  if(ia(a) || t(a)) {
    return $a(a, b, i)
  }
  for(var c = Nb(a), d = Mb(a), f = d.length, g = 0;g < f;g++) {
    if(!b.call(i, d[g], c && c[g], a)) {
      return!1
    }
  }
  return!0
}
;function Rb(a) {
  this.p = {};
  this.h = [];
  var b = arguments.length;
  if(b > 1) {
    b % 2 && e(Error("Uneven number of arguments"));
    for(var c = 0;c < b;c += 2) {
      this.set(arguments[c], arguments[c + 1])
    }
  }else {
    a && this.yd(a)
  }
}
m = Rb.prototype;
m.f = 0;
m.Je = 0;
m.U = l("f");
m.W = function() {
  Sb(this);
  for(var a = [], b = 0;b < this.h.length;b++) {
    a.push(this.p[this.h[b]])
  }
  return a
};
m.Ea = function() {
  Sb(this);
  return this.h.concat()
};
m.ba = function(a) {
  return Tb(this.p, a)
};
m.Fc = function(a) {
  for(var b = 0;b < this.h.length;b++) {
    var c = this.h[b];
    if(Tb(this.p, c) && this.p[c] == a) {
      return!0
    }
  }
  return!1
};
m.n = function(a, b) {
  if(this === a) {
    return!0
  }
  if(this.f != a.U()) {
    return!1
  }
  var c = b || Ub;
  Sb(this);
  for(var d, f = 0;d = this.h[f];f++) {
    if(!c(this.get(d), a.get(d))) {
      return!1
    }
  }
  return!0
};
function Ub(a, b) {
  return a === b
}
m.Oa = function() {
  return this.f == 0
};
m.clear = function() {
  this.p = {};
  this.Je = this.f = this.h.length = 0
};
m.remove = function(a) {
  if(Tb(this.p, a)) {
    return delete this.p[a], this.f--, this.Je++, this.h.length > 2 * this.f && Sb(this), !0
  }
  return!1
};
function Sb(a) {
  if(a.f != a.h.length) {
    for(var b = 0, c = 0;b < a.h.length;) {
      var d = a.h[b];
      Tb(a.p, d) && (a.h[c++] = d);
      b++
    }
    a.h.length = c
  }
  if(a.f != a.h.length) {
    for(var f = {}, c = b = 0;b < a.h.length;) {
      d = a.h[b], Tb(f, d) || (a.h[c++] = d, f[d] = 1), b++
    }
    a.h.length = c
  }
}
m.get = function(a, b) {
  if(Tb(this.p, a)) {
    return this.p[a]
  }
  return b
};
m.set = function(a, b) {
  Tb(this.p, a) || (this.f++, this.h.push(a), this.Je++);
  this.p[a] = b
};
m.yd = function(a) {
  var b;
  a instanceof Rb ? (b = a.Ea(), a = a.W()) : (b = Ta(a), a = Sa(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
m.L = function() {
  return new Rb(this)
};
function Vb(a) {
  Sb(a);
  for(var b = {}, c = 0;c < a.h.length;c++) {
    var d = a.h[c];
    b[d] = a.p[d]
  }
  return b
}
function Tb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function Wb(a) {
  var b = ga(a);
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
          e(Error("cannot determine size of object type " + b))
        }
      }
    }
  }
}
;function Yb(a, b) {
  this.qb = a;
  this.mb = b
}
Yb.prototype.n = function(a) {
  return a instanceof Yb && this.qb == a.qb && this.mb.join(",") == a.mb
};
Yb.prototype.F = function(a, b) {
  a.push("new SACK(", String(this.qb), ", ");
  E(this.mb, a, b);
  a.push(")")
};
function Zb() {
  this.A = new Rb
}
m = Zb.prototype;
m.ub = -1;
m.w = 0;
m.append = function(a) {
  var b = Wb(a);
  this.A.set(this.ub + 1, [a, b]);
  this.ub += 1;
  this.w += b
};
m.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
m.F = function(a) {
  a.push("<Queue with ", String(this.A.U()), " item(s), counter=#", String(this.ub), ", size=", String(this.w), ">")
};
function $b(a) {
  Sb(a.A);
  ib(a.A.h);
  return a.A.h
}
function ac() {
  this.Ya = new Rb
}
ac.prototype.Bb = -1;
ac.prototype.w = 0;
function bc(a) {
  var b = a.Ya.Ea();
  ib(b);
  return new Yb(a.Bb, b)
}
var cc = {};
function dc() {
  return!0
}
;var ec, fc, gc, hc, ic;
function jc() {
  return o.navigator ? o.navigator.userAgent : k
}
ic = hc = gc = fc = ec = !1;
var kc;
if(kc = jc()) {
  var lc = o.navigator;
  ec = kc.indexOf("Opera") == 0;
  fc = !ec && kc.indexOf("MSIE") != -1;
  hc = (gc = !ec && kc.indexOf("WebKit") != -1) && kc.indexOf("Mobile") != -1;
  ic = !ec && !gc && lc.product == "Gecko"
}
var mc = ec, G = fc, nc = ic, H = gc, oc = hc, pc = o.navigator, qc = (pc && pc.platform || "").indexOf("Mac") != -1, rc;
a: {
  var sc = "", tc;
  if(mc && o.opera) {
    var uc = o.opera.version, sc = typeof uc == "function" ? uc() : uc
  }else {
    if(nc ? tc = /rv\:([^\);]+)(\)|;)/ : G ? tc = /MSIE\s+([^\);]+)(\)|;)/ : H && (tc = /WebKit\/(\S+)/), tc) {
      var vc = tc.exec(jc()), sc = vc ? vc[1] : ""
    }
  }
  if(G) {
    var wc, xc = o.document;
    wc = xc ? xc.documentMode : i;
    if(wc > parseFloat(sc)) {
      rc = String(wc);
      break a
    }
  }
  rc = sc
}
var yc = {};
function I(a) {
  return yc[a] || (yc[a] = Da(rc, a) >= 0)
}
;var zc;
var Ac = {xh:"click", Ch:"dblclick", Xh:"mousedown", ai:"mouseup", $h:"mouseover", Zh:"mouseout", Yh:"mousemove", ki:"selectstart", Rh:"keypress", Qh:"keydown", Sh:"keyup", vh:"blur", Kh:"focus", Dh:"deactivate", Lh:G ? "focusin" : "DOMFocusIn", Mh:G ? "focusout" : "DOMFocusOut", wh:"change", ji:"select", li:"submit", Ph:"input", fi:"propertychange", Hh:"dragstart", Eh:"dragenter", Gh:"dragover", Fh:"dragleave", Ih:"drop", pi:"touchstart", oi:"touchmove", ni:"touchend", mi:"touchcancel", zh:"contextmenu", 
Jh:"error", Oh:"help", Th:"load", Uh:"losecapture", gi:"readystatechange", hi:"resize", ii:"scroll", qi:"unload", Nh:"hashchange", bi:"pagehide", ci:"pageshow", ei:"popstate", Ah:"copy", di:"paste", Bh:"cut", Wh:"message", yh:"connect"};
var Bc = !G || I("9"), Cc = G && !I("8");
function J() {
  Dc && (Ec[w(this)] = this)
}
var Dc = !1, Ec = {};
J.prototype.ya = !1;
J.prototype.g = function() {
  if(!this.ya && (this.ya = !0, this.c(), Dc)) {
    var a = w(this);
    Ec.hasOwnProperty(a) || e(Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call"));
    delete Ec[a]
  }
};
J.prototype.c = aa();
function Fc(a, b) {
  J.call(this);
  this.type = a;
  this.currentTarget = this.target = b
}
z(Fc, J);
m = Fc.prototype;
m.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
m.lb = !1;
m.oc = !0;
m.stopPropagation = function() {
  this.lb = !0
};
m.preventDefault = function() {
  this.oc = !1
};
function Gc(a) {
  a.stopPropagation()
}
;var Hc = new Function("a", "return a");
function Ic(a, b) {
  a && this.dc(a, b)
}
z(Ic, Fc);
var Jc = [1, 4, 2];
m = Ic.prototype;
m.target = k;
m.relatedTarget = k;
m.offsetX = 0;
m.offsetY = 0;
m.clientX = 0;
m.clientY = 0;
m.screenX = 0;
m.screenY = 0;
m.button = 0;
m.keyCode = 0;
m.charCode = 0;
m.ctrlKey = !1;
m.altKey = !1;
m.shiftKey = !1;
m.metaKey = !1;
m.Yg = !1;
m.Ba = k;
m.dc = function(a, b) {
  var c = this.type = a.type;
  Fc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(nc) {
      var f;
      a: {
        try {
          Hc(d.nodeName);
          f = !0;
          break a
        }catch(g) {
        }
        f = !1
      }
      f || (d = k)
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
  this.Yg = qc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Ba = a;
  delete this.oc;
  delete this.lb
};
function Kc(a) {
  return Bc ? a.Ba.button == 0 : a.type == "click" ? !0 : !!(a.Ba.button & Jc[0])
}
m.stopPropagation = function() {
  Ic.d.stopPropagation.call(this);
  this.Ba.stopPropagation ? this.Ba.stopPropagation() : this.Ba.cancelBubble = !0
};
m.preventDefault = function() {
  Ic.d.preventDefault.call(this);
  var a = this.Ba;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, Cc) {
      try {
        if(a.ctrlKey || a.keyCode >= 112 && a.keyCode <= 123) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
m.c = function() {
  Ic.d.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Ba = k
};
function Lc() {
}
var Mc = 0;
m = Lc.prototype;
m.key = 0;
m.Hb = !1;
m.Bd = !1;
m.dc = function(a, b, c, d, f, g) {
  u(a) ? this.sf = !0 : a && a.handleEvent && u(a.handleEvent) ? this.sf = !1 : e(Error("Invalid listener argument"));
  this.Eb = a;
  this.Nf = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Uc = g;
  this.Bd = !1;
  this.key = ++Mc;
  this.Hb = !1
};
m.handleEvent = function(a) {
  if(this.sf) {
    return this.Eb.call(this.Uc || this.src, a)
  }
  return this.Eb.handleEvent.call(this.Eb, a)
};
var Nc, Oc = (Nc = "ScriptEngine" in o && o.ScriptEngine() == "JScript") ? o.ScriptEngineMajorVersion() + "." + o.ScriptEngineMinorVersion() + "." + o.ScriptEngineBuildVersion() : "0";
function K(a, b) {
  J.call(this);
  this.xf = b;
  this.eb = [];
  a > this.xf && e(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.eb.push(this.xa ? this.xa() : {})
  }
}
z(K, J);
K.prototype.xa = k;
K.prototype.af = k;
K.prototype.getObject = function() {
  if(this.eb.length) {
    return this.eb.pop()
  }
  return this.xa ? this.xa() : {}
};
function Pc(a, b) {
  a.eb.length < a.xf ? a.eb.push(b) : Qc(a, b)
}
function Qc(a, b) {
  if(a.af) {
    a.af(b)
  }else {
    if(ka(b)) {
      if(u(b.g)) {
        b.g()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
K.prototype.c = function() {
  K.d.c.call(this);
  for(var a = this.eb;a.length;) {
    Qc(this, a.pop())
  }
  delete this.eb
};
var Rc, Sc, Tc, Uc, Vc, Wc, Xc, Yc, Zc, $c, cd;
(function() {
  function a() {
    return{f:0, la:0}
  }
  function b() {
    return[]
  }
  function c() {
    function a(b) {
      return h.call(a.src, a.key, b)
    }
    return a
  }
  function d() {
    return new Lc
  }
  function f() {
    return new Ic
  }
  var g = Nc && !(Da(Oc, "5.7") >= 0), h;
  Wc = function(a) {
    h = a
  };
  if(g) {
    Rc = function() {
      return j.getObject()
    };
    Sc = function(a) {
      Pc(j, a)
    };
    Tc = function() {
      return n.getObject()
    };
    Uc = function(a) {
      Pc(n, a)
    };
    Vc = function() {
      return p.getObject()
    };
    Xc = function() {
      Pc(p, c())
    };
    Yc = function() {
      return B.getObject()
    };
    Zc = function(a) {
      Pc(B, a)
    };
    $c = function() {
      return r.getObject()
    };
    cd = function(a) {
      Pc(r, a)
    };
    var j = new K(0, 600);
    j.xa = a;
    var n = new K(0, 600);
    n.xa = b;
    var p = new K(0, 600);
    p.xa = c;
    var B = new K(0, 600);
    B.xa = d;
    var r = new K(0, 600);
    r.xa = f
  }else {
    Rc = a, Sc = q, Tc = b, Uc = q, Vc = c, Xc = q, Yc = d, Zc = q, $c = f, cd = q
  }
})();
var dd = {}, L = {}, ed = {}, fd = {};
function M(a, b, c, d, f) {
  if(b) {
    if(s(b)) {
      for(var g = 0;g < b.length;g++) {
        M(a, b[g], c, d, f)
      }
      return k
    }else {
      var d = !!d, h = L;
      b in h || (h[b] = Rc());
      h = h[b];
      d in h || (h[d] = Rc(), h.f++);
      var h = h[d], j = w(a), n;
      h.la++;
      if(h[j]) {
        n = h[j];
        for(g = 0;g < n.length;g++) {
          if(h = n[g], h.Eb == c && h.Uc == f) {
            if(h.Hb) {
              break
            }
            return n[g].key
          }
        }
      }else {
        n = h[j] = Tc(), h.f++
      }
      g = Vc();
      g.src = a;
      h = Yc();
      h.dc(c, g, a, b, d, f);
      c = h.key;
      g.key = c;
      n.push(h);
      dd[c] = h;
      ed[j] || (ed[j] = Tc());
      ed[j].push(h);
      a.addEventListener ? (a == o || !a.Hd) && a.addEventListener(b, g, d) : a.attachEvent(gd(b), g);
      return c
    }
  }else {
    e(Error("Invalid event type"))
  }
}
function hd(a, b, c, d, f) {
  if(s(b)) {
    for(var g = 0;g < b.length;g++) {
      hd(a, b[g], c, d, f)
    }
    return k
  }
  a = M(a, b, c, d, f);
  dd[a].Bd = !0;
  return a
}
function id(a, b, c, d, f) {
  if(s(b)) {
    for(var g = 0;g < b.length;g++) {
      id(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = jd(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Eb == c && a[g].capture == d && a[g].Uc == f) {
          kd(a[g].key);
          break
        }
      }
    }
  }
}
function kd(a) {
  if(dd[a]) {
    var b = dd[a];
    if(!b.Hb) {
      var c = b.src, d = b.type, f = b.Nf, g = b.capture;
      c.removeEventListener ? (c == o || !c.Hd) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(gd(d), f);
      c = w(c);
      f = L[d][g][c];
      if(ed[c]) {
        var h = ed[c];
        cb(h, b);
        h.length == 0 && delete ed[c]
      }
      b.Hb = !0;
      f.Ff = !0;
      ld(d, g, c, f);
      delete dd[a]
    }
  }
}
function ld(a, b, c, d) {
  if(!d.ad && d.Ff) {
    for(var f = 0, g = 0;f < d.length;f++) {
      if(d[f].Hb) {
        var h = d[f].Nf;
        h.src = k;
        Xc(h);
        Zc(d[f])
      }else {
        f != g && (d[g] = d[f]), g++
      }
    }
    d.length = g;
    d.Ff = !1;
    g == 0 && (Uc(d), delete L[a][b][c], L[a][b].f--, L[a][b].f == 0 && (Sc(L[a][b]), delete L[a][b], L[a].f--), L[a].f == 0 && (Sc(L[a]), delete L[a]))
  }
}
function md(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Ra(ed, function(a) {
      for(var f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          kd(g.key), c++
        }
      }
    })
  }else {
    if(a = w(a), ed[a]) {
      for(var a = ed[a], f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          kd(g.key), c++
        }
      }
    }
  }
}
function jd(a, b, c) {
  var d = L;
  if(b in d && (d = d[b], c in d && (d = d[c], a = w(a), d[a]))) {
    return d[a]
  }
  return k
}
function gd(a) {
  if(a in fd) {
    return fd[a]
  }
  return fd[a] = "on" + a
}
function nd(a, b, c, d, f) {
  var g = 1, b = w(b);
  if(a[b]) {
    a.la--;
    a = a[b];
    a.ad ? a.ad++ : a.ad = 1;
    try {
      for(var h = a.length, j = 0;j < h;j++) {
        var n = a[j];
        n && !n.Hb && (g &= od(n, f) !== !1)
      }
    }finally {
      a.ad--, ld(c, d, b, a)
    }
  }
  return Boolean(g)
}
function od(a, b) {
  var c = a.handleEvent(b);
  a.Bd && kd(a.key);
  return c
}
Wc(function(a, b) {
  if(!dd[a]) {
    return!0
  }
  var c = dd[a], d = c.type, f = L;
  if(!(d in f)) {
    return!0
  }
  var f = f[d], g, h;
  zc === i && (zc = G && !o.addEventListener);
  if(zc) {
    g = b || ea("window.event");
    var j = !0 in f, n = !1 in f;
    if(j) {
      if(g.keyCode < 0 || g.returnValue != i) {
        return!0
      }
      a: {
        var p = !1;
        if(g.keyCode == 0) {
          try {
            g.keyCode = -1;
            break a
          }catch(B) {
            p = !0
          }
        }
        if(p || g.returnValue == i) {
          g.returnValue = !0
        }
      }
    }
    p = $c();
    p.dc(g, this);
    g = !0;
    try {
      if(j) {
        for(var r = Tc(), v = p.currentTarget;v;v = v.parentNode) {
          r.push(v)
        }
        h = f[!0];
        h.la = h.f;
        for(var C = r.length - 1;!p.lb && C >= 0 && h.la;C--) {
          p.currentTarget = r[C], g &= nd(h, r[C], d, !0, p)
        }
        if(n) {
          h = f[!1];
          h.la = h.f;
          for(C = 0;!p.lb && C < r.length && h.la;C++) {
            p.currentTarget = r[C], g &= nd(h, r[C], d, !1, p)
          }
        }
      }else {
        g = od(c, p)
      }
    }finally {
      if(r) {
        r.length = 0, Uc(r)
      }
      p.g();
      cd(p)
    }
    return g
  }
  d = new Ic(b, this);
  try {
    g = od(c, d)
  }finally {
    d.g()
  }
  return g
});
var pd = 0;
function qd() {
  J.call(this)
}
z(qd, J);
m = qd.prototype;
m.Hd = !0;
m.dd = k;
m.ve = ba("dd");
m.addEventListener = function(a, b, c, d) {
  M(this, a, b, c, d)
};
m.removeEventListener = function(a, b, c, d) {
  id(this, a, b, c, d)
};
m.dispatchEvent = function(a) {
  var b = a.type || a, c = L;
  if(b in c) {
    if(t(a)) {
      a = new Fc(a, this)
    }else {
      if(a instanceof Fc) {
        a.target = a.target || this
      }else {
        var d = a, a = new Fc(b, this);
        Va(a, d)
      }
    }
    var d = 1, f, c = c[b], b = !0 in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.dd) {
        f.push(g)
      }
      g = c[!0];
      g.la = g.f;
      for(var h = f.length - 1;!a.lb && h >= 0 && g.la;h--) {
        a.currentTarget = f[h], d &= nd(g, f[h], a.type, !0, a) && a.oc != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.la = g.f, b) {
        for(h = 0;!a.lb && h < f.length && g.la;h++) {
          a.currentTarget = f[h], d &= nd(g, f[h], a.type, !1, a) && a.oc != !1
        }
      }else {
        for(f = this;!a.lb && f && g.la;f = f.dd) {
          a.currentTarget = f, d &= nd(g, f, a.type, !1, a) && a.oc != !1
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
m.c = function() {
  qd.d.c.call(this);
  md(this);
  this.dd = k
};
function rd(a, b) {
  J.call(this);
  this.Xc = a || 1;
  this.uc = b || sd;
  this.Ad = x(this.kh, this);
  this.fe = y()
}
z(rd, qd);
rd.prototype.enabled = !1;
var sd = o.window;
m = rd.prototype;
m.oa = k;
m.kh = function() {
  if(this.enabled) {
    var a = y() - this.fe;
    if(a > 0 && a < this.Xc * 0.8) {
      this.oa = this.uc.setTimeout(this.Ad, this.Xc - a)
    }else {
      if(this.dispatchEvent(td), this.enabled) {
        this.oa = this.uc.setTimeout(this.Ad, this.Xc), this.fe = y()
      }
    }
  }
};
m.start = function() {
  this.enabled = !0;
  if(!this.oa) {
    this.oa = this.uc.setTimeout(this.Ad, this.Xc), this.fe = y()
  }
};
m.stop = function() {
  this.enabled = !1;
  if(this.oa) {
    this.uc.clearTimeout(this.oa), this.oa = k
  }
};
m.c = function() {
  rd.d.c.call(this);
  this.stop();
  delete this.uc
};
var td = "tick";
pd++;
pd++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function ud(a, b) {
  this.Bc = [];
  this.Ne = a;
  this.Xe = b || k
}
m = ud.prototype;
m.cb = !1;
m.ac = !1;
m.jc = 0;
m.Ae = !1;
m.rg = !1;
m.cancel = function() {
  if(this.cb) {
    this.nc instanceof ud && this.nc.cancel()
  }else {
    if(this.Ne ? this.Ne.call(this.Xe, this) : this.Ae = !0, !this.cb) {
      var a = new vd(this);
      wd(this);
      xd(this, !1, a)
    }
  }
};
m.Qe = function(a, b) {
  xd(this, a, b);
  this.jc--;
  this.jc == 0 && this.cb && yd(this)
};
function xd(a, b, c) {
  a.cb = !0;
  a.nc = c;
  a.ac = !b;
  yd(a)
}
function wd(a) {
  if(a.cb) {
    a.Ae || e(new zd(a)), a.Ae = !1
  }
}
function Ad(a, b) {
  wd(a);
  xd(a, !0, b)
}
function Bd(a, b) {
  Cd(a, b, k, i)
}
function Cd(a, b, c, d) {
  a.Bc.push([b, c, d]);
  a.cb && yd(a)
}
function Dd(a, b) {
  Cd(a, b, b, i)
}
function Ed(a) {
  return Za(a.Bc, function(a) {
    return u(a[1])
  })
}
function yd(a) {
  a.Ge && a.cb && Ed(a) && (o.clearTimeout(a.Ge), delete a.Ge);
  for(var b = a.nc, c = !1, d = !1;a.Bc.length && a.jc == 0;) {
    var f = a.Bc.shift(), g = f[0], h = f[1], f = f[2];
    if(g = a.ac ? h : g) {
      try {
        var j = g.call(f || a.Xe, b);
        if(ha(j)) {
          a.ac = a.ac && (j == b || j instanceof Error), a.nc = b = j
        }
        b instanceof ud && (d = !0, a.jc++)
      }catch(n) {
        b = n, a.ac = !0, Ed(a) || (c = !0)
      }
    }
  }
  a.nc = b;
  if(d && a.jc) {
    Cd(b, x(a.Qe, a, !0), x(a.Qe, a, !1)), b.rg = !0
  }
  if(c) {
    a.Ge = o.setTimeout(function() {
      e(b)
    }, 0)
  }
}
function Fd(a) {
  var b = new ud;
  Ad(b, a);
  return b
}
function Gd(a) {
  var b = new ud;
  wd(b);
  xd(b, !1, a);
  return b
}
function zd(a) {
  A.call(this);
  this.ug = a
}
z(zd, A);
zd.prototype.message = "Already called";
function vd(a) {
  A.call(this);
  this.ug = a
}
z(vd, A);
vd.prototype.message = "Deferred was cancelled";
function Hd(a) {
  this.M = a;
  this.Jc = [];
  this.bf = [];
  this.qg = x(this.oh, this)
}
Hd.prototype.oa = k;
function Id(a, b, c, d) {
  a.Jc.push([b, c, d]);
  if(a.oa == k) {
    a.oa = a.M.setTimeout(a.qg, 0)
  }
}
Hd.prototype.oh = function() {
  this.oa = k;
  var a = this.Jc;
  this.Jc = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], f = c[1], c = c[2];
    try {
      d.apply(f, c)
    }catch(g) {
      this.M.setTimeout(function() {
        e(g)
      }, 0)
    }
  }
  if(this.Jc.length == 0) {
    a = this.bf;
    this.bf = [];
    for(b = 0;b < a.length;b++) {
      Ad(a[b], k)
    }
  }
};
new Hd(o.window);
function Jd(a, b) {
  switch(ga(b)) {
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
          Object.prototype.hasOwnProperty.call(b, c) && ga(b[c]) != "function" && (a.push('<property id="', wa(c), '">'), Jd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function Kd(a) {
  var b = ['<invoke name="', a, '" returntype="javascript">'], c = b, d = arguments;
  c.push("<arguments>");
  for(var f = d.length, g = 1;g < f;g++) {
    Jd(c, d[g])
  }
  c.push("</arguments>");
  b.push("</invoke>");
  return b.join("")
}
;function Ld() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ y()).toString(36)
}
function Md(a) {
  return a.substr(0, a.length - 1)
}
var Nd = /^(0|[1-9]\d*)$/, Od = /^(0|\-?[1-9]\d*)$/;
function Pd(a) {
  var b = Qd;
  if(Nd.test(a) && (a = parseInt(a, 10), a <= b)) {
    return a
  }
  return k
}
;function Rd(a) {
  this.p = new Rb;
  a && this.yd(a)
}
function Sd(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + w(a) : b.substr(0, 1) + a
}
m = Rd.prototype;
m.U = function() {
  return this.p.U()
};
m.add = function(a) {
  this.p.set(Sd(a), a)
};
m.yd = function(a) {
  for(var a = Mb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
m.qe = function(a) {
  for(var a = Mb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
m.remove = function(a) {
  return this.p.remove(Sd(a))
};
m.clear = function() {
  this.p.clear()
};
m.Oa = function() {
  return this.p.Oa()
};
m.contains = function(a) {
  return this.p.ba(Sd(a))
};
m.W = function() {
  return this.p.W()
};
m.L = function() {
  return new Rd(this)
};
m.n = function(a) {
  return this.U() == Lb(a) && Td(this, a)
};
function Td(a, b) {
  var c = Lb(b);
  if(a.U() > c) {
    return!1
  }
  !(b instanceof Rd) && c > 5 && (b = new Rd(b));
  return Qb(a, function(a) {
    return Ob(b, a)
  })
}
;function Ud(a) {
  return Vd(a || arguments.callee.caller, [])
}
function Vd(a, b) {
  var c = [];
  if(ab(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(Wd(a) + "(");
      for(var d = a.arguments, f = 0;f < d.length;f++) {
        f > 0 && c.push(", ");
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
  a = String(a);
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
Yd.prototype.eh = 0;
Yd.prototype.Pd = k;
Yd.prototype.Od = k;
var Zd = 0;
Yd.prototype.reset = function(a, b, c, d, f) {
  this.eh = typeof f == "number" ? f : Zd++;
  this.bg = d || y();
  this.Db = a;
  this.Cf = b;
  this.Pg = c;
  delete this.Pd;
  delete this.Od
};
Yd.prototype.md = ba("Db");
function $d(a) {
  this.je = a
}
$d.prototype.$ = k;
$d.prototype.Db = k;
$d.prototype.O = k;
$d.prototype.cc = k;
function ae(a, b) {
  this.name = a;
  this.value = b
}
ae.prototype.toString = l("name");
var be = new ae("OFF", Infinity), ce = new ae("SHOUT", 1200), de = new ae("SEVERE", 1E3), ee = new ae("WARNING", 900), fe = new ae("INFO", 800), ge = new ae("CONFIG", 700), he = new ae("FINE", 500), ie = new ae("FINEST", 300), je = new ae("ALL", 0);
m = $d.prototype;
m.getParent = l("$");
m.md = ba("Db");
function ke(a) {
  if(a.Db) {
    return a.Db
  }
  if(a.$) {
    return ke(a.$)
  }
  Ja("Root logger has no level set.");
  return k
}
m.log = function(a, b, c) {
  if(a.value >= ke(this).value) {
    a = this.Bg(a, b, c);
    o.console && o.console.markTimeline && o.console.markTimeline("log:" + a.Cf);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.cc) {
        for(var f = 0, g = i;g = c.cc[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
m.Bg = function(a, b, c) {
  var d = new Yd(a, String(b), this.je);
  if(c) {
    d.Pd = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var h;
      var j = ea("window.location.href");
      if(t(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var n, p, B = !1;
        try {
          n = c.lineNumber || c.Ei || "Not available"
        }catch(r) {
          n = "Not available", B = !0
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || j
        }catch(v) {
          p = "Not available", B = !0
        }
        h = B || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:p, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + wa(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + wa(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + wa(Ud(g) + "-> ")
    }catch(C) {
      f = "Exception trying to expose exception! You win, we lose. " + C
    }
    d.Od = f
  }
  return d
};
function le(a, b) {
  a.log(de, b, i)
}
function N(a, b) {
  a.log(ee, b, i)
}
m.info = function(a, b) {
  this.log(fe, a, b)
};
function O(a, b) {
  a.log(he, b, i)
}
function P(a, b) {
  a.log(ie, b, i)
}
var me = {}, ne = k;
function oe() {
  ne || (ne = new $d(""), me[""] = ne, ne.md(ge))
}
function pe() {
  oe();
  return ne
}
function Q(a) {
  oe();
  var b;
  if(!(b = me[a])) {
    b = new $d(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Q(a.substr(0, c));
    if(!c.O) {
      c.O = {}
    }
    c.O[d] = b;
    b.$ = c;
    me[a] = b
  }
  return b
}
;function qe(a, b) {
  J.call(this);
  this.R = "_" + Ld();
  this.td = a;
  this.Sa = b;
  this.Xa = a.Xa
}
z(qe, J);
m = qe.prototype;
m.jb = !0;
m.Gc = !1;
m.a = Q("cw.net.FlashSocket");
m.F = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.R);
  a.push("'>")
};
function re(a, b, c) {
  b == "frames" ? (a = a.Sa, se(a.K), te(a.K, c)) : b == "stillreceiving" ? (c = a.Sa, P(c.a, "onstillreceiving"), se(c.K)) : b == "connect" ? (c = a.Sa, c.a.info("onconnect"), se(c.K), a = c.Rb, c.Rb = k, a.length && (P(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.pd.zc(a))) : b == "close" ? (a.jb = !1, a.g()) : b == "ioerror" ? (a.jb = !1, b = a.Sa, N(b.a, "onioerror: " + F(c)), ue(b.K, !1), a.g()) : b == "securityerror" ? (a.jb = !1, b = a.Sa, N(b.a, "onsecurityerror: " + 
  F(c)), ue(b.K, !1), a.g()) : e(Error("bad event: " + b))
}
m.Ed = function(a, b) {
  try {
    var c = this.Xa.CallFunction(Kd("__FC_connect", this.R, a, b, "<int32/>\n"))
  }catch(d) {
    le(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message);
    this.Gc = !0;
    this.jb = !1;
    this.g();
    return
  }
  c != '"OK"' && e(Error("__FC_connect failed? ret: " + c))
};
m.zc = function(a) {
  try {
    var b = this.Xa.CallFunction(Kd("__FC_writeFrames", this.R, a))
  }catch(c) {
    le(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message);
    this.Gc = !0;
    this.jb = !1;
    this.g();
    return
  }
  b != '"OK"' && (b == '"no such instance"' ? (N(this.a, "Flash no longer knows of " + this.R + "; disposing."), this.g()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
m.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.jb);
  qe.d.c.call(this);
  var a = this.Xa;
  delete this.Xa;
  if(this.jb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(Kd("__FC_close", this.R)))
    }catch(b) {
      le(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Gc = !0
    }
  }
  if(this.Gc) {
    a = this.Sa, N(a.a, "oncrash"), ue(a.K, !0)
  }else {
    this.Sa.onclose()
  }
  delete this.Sa;
  delete this.td.xb[this.R]
};
function ve(a, b) {
  J.call(this);
  this.J = a;
  this.Xa = b;
  this.xb = {};
  this.Cd = "__FST_" + Ld();
  o[this.Cd] = x(this.xg, this);
  var c = b.CallFunction(Kd("__FC_setCallbackFunc", this.Cd));
  c != '"OK"' && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
z(ve, J);
m = ve.prototype;
m.a = Q("cw.net.FlashSocketTracker");
m.F = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  E(this.xb, a, b);
  a.push(">")
};
m.Gd = function(a) {
  a = new qe(this, a);
  return this.xb[a.R] = a
};
m.vg = function(a, b, c, d) {
  var f = this.xb[a];
  f ? b == "frames" && d ? (re(f, "ioerror", "FlashConnector hadError while handling data."), f.g()) : re(f, b, c) : N(this.a, "Cannot dispatch because we have no instance: " + F([a, b, c, d]))
};
m.xg = function(a, b, c, d) {
  try {
    Id(this.J, this.vg, this, [a, b, c, d])
  }catch(f) {
    o.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
m.c = function() {
  ve.d.c.call(this);
  for(var a = Sa(this.xb);a.length;) {
    a.pop().g()
  }
  delete this.xb;
  delete this.Xa;
  o[this.Cd] = i
};
function we(a) {
  J.call(this);
  this.K = a;
  this.Rb = []
}
z(we, J);
m = we.prototype;
m.a = Q("cw.net.FlashSocketConduit");
m.zc = function(a) {
  this.Rb ? (P(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Rb.push.apply(this.Rb, a)) : (P(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.pd.zc(a))
};
m.Ed = function(a, b) {
  this.pd.Ed(a, b)
};
m.onclose = function() {
  this.a.info("onclose");
  ue(this.K, !1)
};
m.c = function() {
  this.a.info("in disposeInternal.");
  we.d.c.call(this);
  this.pd.g();
  delete this.K
};
function xe(a) {
  return a * Math.PI / 180
}
;var Qd = Math.pow(2, 53);
var ye = {lg:ca("<cw.eq.Wildcard>")};
function ze(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function Ae(a, b, c) {
  var d = ga(a), f = ga(b);
  if(a == ye || b == ye) {
    return!0
  }else {
    if(a != k && typeof a.n == "function") {
      return c && c.push("running custom equals function on left object"), a.n(b, c)
    }else {
      if(b != k && typeof b.n == "function") {
        return c && c.push("running custom equals function on right object"), b.n(a, c)
      }else {
        if(ze(d) || ze(f)) {
          a = a === b
        }else {
          if(a instanceof RegExp && b instanceof RegExp) {
            a = a.toString() === b.toString()
          }else {
            if(ja(a) && ja(b)) {
              a = a.valueOf() === b.valueOf()
            }else {
              if(d == "array" && f == "array") {
                a: {
                  if(c && c.push("descending into array"), a.length != b.length) {
                    c && c.push("array length mismatch: " + a.length + ", " + b.length), a = !1
                  }else {
                    d = 0;
                    for(f = a.length;d < f;d++) {
                      if(!Ae(a[d], b[d], c)) {
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
                if(a.kg == dc && b.kg == dc) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = !1;
                        break a
                      }
                      if(!Ae(a[g], b[g], c)) {
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
;function R(a) {
  A.call(this, a)
}
z(R, A);
R.prototype.name = "cw.net.InvalidFrame";
function Be() {
  var a = [];
  this.ka(a);
  return a.join("")
}
function Ce() {
}
Ce.prototype.n = function(a, b) {
  if(!(a instanceof Ce)) {
    return!1
  }
  return Ae(De(this), De(a), b)
};
Ce.prototype.F = function(a, b) {
  a.push("<HelloFrame properties=");
  E(De(this), a, b);
  a.push(">")
};
function De(a) {
  return[a.Nb, a.Lf, a.nf, a.Pf, a.tc, a.Ue, a.De, a.Ef, a.Af, a.ie, a.yf, a.gg, a.$f, a.na, a.$c]
}
Ce.prototype.da = Be;
Ce.prototype.ka = function(a) {
  var b = {};
  b.tnum = this.Nb;
  b.ver = this.Lf;
  b.format = this.nf;
  b["new"] = this.Pf;
  b.id = this.tc;
  b.cred = this.Ue;
  b.ming = this.De;
  b.pad = this.Ef;
  b.maxb = this.Af;
  if(ha(this.ie)) {
    b.maxt = this.ie
  }
  b.maxia = this.yf;
  b.tcpack = this.gg;
  b.eeds = this.$f;
  b.sack = this.na instanceof Yb ? Md((new Ee(this.na)).da()) : this.na;
  b.seenack = this.$c instanceof Yb ? Md((new Ee(this.$c)).da()) : this.$c;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new Fb).nb(b), "H")
};
function Fe(a) {
  this.Mb = a
}
Fe.prototype.n = function(a) {
  return a instanceof Fe && this.Mb == a.Mb
};
Fe.prototype.F = function(a, b) {
  a.push("new StringFrame(");
  E(this.Mb, a, b);
  a.push(")")
};
Fe.prototype.da = Be;
Fe.prototype.ka = function(a) {
  a.push(this.Mb, " ")
};
function Ge(a) {
  this.Ec = a
}
Ge.prototype.n = function(a) {
  return a instanceof Ge && this.Ec == a.Ec
};
Ge.prototype.F = function(a, b) {
  a.push("new CommentFrame(");
  E(this.Ec, a, b);
  a.push(")")
};
Ge.prototype.da = Be;
Ge.prototype.ka = function(a) {
  a.push(this.Ec, "^")
};
function He(a) {
  this.rc = a
}
He.prototype.n = function(a) {
  return a instanceof He && this.rc == a.rc
};
He.prototype.F = function(a) {
  a.push("new SeqNumFrame(", String(this.rc), ")")
};
He.prototype.da = Be;
He.prototype.ka = function(a) {
  a.push(String(this.rc), "N")
};
function Ie(a) {
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
    for(var b = b[0].split(","), d = 0, f = b.length;d < f;d++) {
      var g = Pd(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Yb(a, c)
}
function Ee(a) {
  this.na = a
}
Ee.prototype.n = function(a, b) {
  return a instanceof Ee && this.na.n(a.na, b)
};
Ee.prototype.F = function(a, b) {
  a.push("new SackFrame(");
  E(this.na, a, b);
  a.push(")")
};
Ee.prototype.da = Be;
Ee.prototype.ka = function(a) {
  var b = this.na;
  a.push(b.mb.join(","), "|", String(b.qb));
  a.push("A")
};
function Je(a) {
  this.gc = a
}
Je.prototype.n = function(a, b) {
  return a instanceof Je && this.gc.n(a.gc, b)
};
Je.prototype.F = function(a, b) {
  a.push("new StreamStatusFrame(");
  E(this.gc, a, b);
  a.push(")")
};
Je.prototype.da = Be;
Je.prototype.ka = function(a) {
  var b = this.gc;
  a.push(b.mb.join(","), "|", String(b.qb));
  a.push("T")
};
function Ke() {
}
Ke.prototype.F = function(a) {
  a.push("new StreamCreatedFrame()")
};
Ke.prototype.n = function(a) {
  return a instanceof Ke
};
Ke.prototype.da = Be;
Ke.prototype.ka = function(a) {
  a.push("C")
};
function Le() {
}
Le.prototype.F = function(a) {
  a.push("new YouCloseItFrame()")
};
Le.prototype.n = function(a) {
  return a instanceof Le
};
Le.prototype.da = Be;
Le.prototype.ka = function(a) {
  a.push("Y")
};
function Me(a, b) {
  this.lc = a;
  this.Qb = b
}
Me.prototype.n = function(a) {
  return a instanceof Me && this.lc == a.lc && this.Qb == a.Qb
};
Me.prototype.F = function(a, b) {
  a.push("new ResetFrame(");
  E(this.lc, a, b);
  a.push(", ", String(this.Qb), ")")
};
Me.prototype.da = Be;
Me.prototype.ka = function(a) {
  a.push(this.lc, "|", String(Number(this.Qb)), "!")
};
var Ne = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Oe(a) {
  this.reason = a
}
Oe.prototype.n = function(a) {
  return a instanceof Oe && this.reason == a.reason
};
Oe.prototype.F = function(a, b) {
  a.push("new TransportKillFrame(");
  E(this.reason, a, b);
  a.push(")")
};
Oe.prototype.da = Be;
Oe.prototype.ka = function(a) {
  a.push(this.reason, "K")
};
function Pe(a) {
  a || e(new R("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new Fe(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = Ie(Md(a)), a == k && e(new R("bad sack")), new Ee(a)
    }else {
      if(b == "N") {
        return a = Pd(Md(a)), a == k && e(new R("bad seqNum")), new He(a)
      }else {
        if(b == "T") {
          return a = Ie(Md(a)), a == k && e(new R("bad lastSackSeen")), new Je(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && e(new R("leading garbage")), new Le
          }else {
            if(b == "^") {
              return new Ge(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && e(new R("leading garbage")), new Ke
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && e(new R("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == k && e(new R("bad applicationLevel")), new Me(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = Ne[a], a == k && e(new R("unknown kill reason: " + a)), new Oe(a)
                  }else {
                    e(new R("Invalid frame type " + b))
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
;var Qe;
Qe = !1;
var Se = jc();
Se && (Se.indexOf("Firefox") != -1 || Se.indexOf("Camino") != -1 || Se.indexOf("iPhone") != -1 || Se.indexOf("iPod") != -1 || Se.indexOf("iPad") != -1 || Se.indexOf("Android") != -1 || Se.indexOf("Chrome") != -1 && (Qe = !0));
var Te = Qe;
var Ue = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Ve(a, b) {
  var c = a.match(Ue), d = b.match(Ue);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function We() {
  if(nc) {
    this.Za = {}, this.wd = {}, this.rd = []
  }
}
We.prototype.a = Q("goog.net.xhrMonitor");
We.prototype.Ic = nc;
function Xe(a) {
  var b = Ye;
  if(b.Ic) {
    var c = t(a) ? a : ka(a) ? w(a) : "";
    P(b.a, "Pushing context: " + a + " (" + c + ")");
    b.rd.push(c)
  }
}
function Ze() {
  var a = Ye;
  if(a.Ic) {
    var b = a.rd.pop();
    P(a.a, "Popping context: " + b);
    $e(a, b)
  }
}
function af(a) {
  var b = Ye;
  if(b.Ic) {
    a = w(a);
    O(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.rd.length;c++) {
      var d = b.rd[c];
      bf(b.Za, d, a);
      bf(b.wd, a, d)
    }
  }
}
function $e(a, b) {
  var c = a.wd[b], d = a.Za[b];
  c && d && (P(a.a, "Updating dependent contexts"), Xa(c, function(a) {
    Xa(d, function(b) {
      bf(this.Za, a, b);
      bf(this.wd, b, a)
    }, this)
  }, a))
}
function bf(a, b, c) {
  a[b] || (a[b] = []);
  ab(a[b], c) || a[b].push(c)
}
var Ye = new We;
function cf() {
}
cf.prototype.Ac = k;
function df() {
  return ef(ff)
}
var ff;
function gf() {
}
z(gf, cf);
function ef(a) {
  return(a = hf(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function jf(a) {
  var b = {};
  hf(a) && (b[0] = !0, b[1] = !0);
  return b
}
gf.prototype.$d = k;
function hf(a) {
  if(!a.$d && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.$d = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.$d
}
ff = new gf;
function kf(a) {
  J.call(this);
  this.headers = new Rb;
  this.Pb = a || k
}
z(kf, qd);
kf.prototype.a = Q("goog.net.XhrIo");
var lf = /^https?:?$/i;
m = kf.prototype;
m.Ia = !1;
m.j = k;
m.vd = k;
m.hc = "";
m.uf = "";
m.ec = 0;
m.fc = "";
m.Md = !1;
m.Wc = !1;
m.ae = !1;
m.ib = !1;
m.sd = 0;
m.ob = k;
m.Rf = "";
m.qh = !1;
m.send = function(a, b, c, d) {
  this.j && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.hc = a;
  this.fc = "";
  this.ec = 0;
  this.uf = b;
  this.Md = !1;
  this.Ia = !0;
  this.j = this.Pb ? ef(this.Pb) : new df;
  this.vd = this.Pb ? this.Pb.Ac || (this.Pb.Ac = jf(this.Pb)) : ff.Ac || (ff.Ac = jf(ff));
  af(this.j);
  this.j.onreadystatechange = x(this.Hf, this);
  try {
    O(this.a, mf(this, "Opening Xhr")), this.ae = !0, this.j.open(b, a, !0), this.ae = !1
  }catch(f) {
    O(this.a, mf(this, "Error opening Xhr: " + f.message));
    nf(this, f);
    return
  }
  var a = c || "", g = this.headers.L();
  d && Pb(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.ba("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Pb(g, function(a, b) {
    this.j.setRequestHeader(b, a)
  }, this);
  if(this.Rf) {
    this.j.responseType = this.Rf
  }
  if("withCredentials" in this.j) {
    this.j.withCredentials = this.qh
  }
  try {
    if(this.ob) {
      sd.clearTimeout(this.ob), this.ob = k
    }
    if(this.sd > 0) {
      O(this.a, mf(this, "Will abort after " + this.sd + "ms if incomplete")), this.ob = sd.setTimeout(x(this.mh, this), this.sd)
    }
    O(this.a, mf(this, "Sending request"));
    this.Wc = !0;
    this.j.send(a);
    this.Wc = !1
  }catch(h) {
    O(this.a, mf(this, "Send error: " + h.message)), nf(this, h)
  }
};
m.dispatchEvent = function(a) {
  if(this.j) {
    Xe(this.j);
    try {
      return kf.d.dispatchEvent.call(this, a)
    }finally {
      Ze()
    }
  }else {
    return kf.d.dispatchEvent.call(this, a)
  }
};
m.mh = function() {
  if(typeof da != "undefined" && this.j) {
    this.fc = "Timed out after " + this.sd + "ms, aborting", this.ec = 8, O(this.a, mf(this, this.fc)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function nf(a, b) {
  a.Ia = !1;
  if(a.j) {
    a.ib = !0, a.j.abort(), a.ib = !1
  }
  a.fc = b;
  a.ec = 5;
  of(a);
  pf(a)
}
function of(a) {
  if(!a.Md) {
    a.Md = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
m.abort = function(a) {
  if(this.j && this.Ia) {
    O(this.a, mf(this, "Aborting")), this.Ia = !1, this.ib = !0, this.j.abort(), this.ib = !1, this.ec = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), pf(this)
  }
};
m.c = function() {
  if(this.j) {
    if(this.Ia) {
      this.Ia = !1, this.ib = !0, this.j.abort(), this.ib = !1
    }
    pf(this, !0)
  }
  kf.d.c.call(this)
};
m.Hf = function() {
  !this.ae && !this.Wc && !this.ib ? this.Vg() : qf(this)
};
m.Vg = function() {
  qf(this)
};
function qf(a) {
  if(a.Ia && typeof da != "undefined") {
    if(a.vd[1] && a.Na() == 4 && rf(a) == 2) {
      O(a.a, mf(a, "Local request error detected and ignored"))
    }else {
      if(a.Wc && a.Na() == 4) {
        sd.setTimeout(x(a.Hf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.Na() == 4) {
          O(a.a, mf(a, "Request complete"));
          a.Ia = !1;
          var b;
          a: {
            switch(rf(a)) {
              case 0:
                b = (b = t(a.hc) ? a.hc.match(Ue)[1] || k : a.hc.Ga) ? lf.test(b) : self.location ? lf.test(self.location.protocol) : !0;
                b = !b;
                break a;
              case 200:
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
            a.ec = 6;
            var c;
            try {
              c = a.Na() > 2 ? a.j.statusText : ""
            }catch(d) {
              O(a.a, "Can not get status: " + d.message), c = ""
            }
            a.fc = c + " [" + rf(a) + "]";
            of(a)
          }
          pf(a)
        }
      }
    }
  }
}
function pf(a, b) {
  if(a.j) {
    var c = a.j, d = a.vd[0] ? q : k;
    a.j = k;
    a.vd = k;
    if(a.ob) {
      sd.clearTimeout(a.ob), a.ob = k
    }
    b || (Xe(c), a.dispatchEvent("ready"), Ze());
    var f = Ye;
    if(f.Ic) {
      var g = w(c);
      O(f.a, "Closing XHR : " + g);
      delete f.wd[g];
      for(var h in f.Za) {
        cb(f.Za[h], g), f.Za[h].length == 0 && delete f.Za[h]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(j) {
      le(a.a, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
m.ce = function() {
  return!!this.j
};
m.Na = function() {
  return this.j ? this.j.readyState : 0
};
function rf(a) {
  try {
    return a.Na() > 2 ? a.j.status : -1
  }catch(b) {
    return N(a.a, "Can not get status: " + b.message), -1
  }
}
m.getResponseHeader = function(a) {
  return this.j && this.Na() == 4 ? this.j.getResponseHeader(a) : i
};
function mf(a, b) {
  return b + " [" + a.uf + " " + a.hc + " " + rf(a) + "]"
}
;function sf(a, b, c) {
  J.call(this);
  this.K = b;
  this.ma = a;
  this.Fd = c
}
z(sf, J);
m = sf.prototype;
m.a = Q("cw.net.XHRMaster");
m.Ua = -1;
m.he = function(a, b, c) {
  this.Fd.__XHRSlave_makeRequest(this.ma, a, b, c)
};
m.Na = l("Ua");
m.le = function(a, b) {
  b != tf && le(this.a, F(this.ma) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  se(this.K);
  te(this.K, a)
};
m.me = function(a) {
  O(this.a, "ongotheaders_: " + F(a));
  var b = k;
  "Content-Length" in a && (b = Pd(a["Content-Length"]));
  a = this.K;
  O(a.a, a.t() + " got Content-Length: " + b);
  a.va == uf && (b == k && (N(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), vf(a, 2E3 + b / 3072 * 1E3))
};
m.ne = function(a) {
  a != 1 && O(this.a, this.K.t() + "'s XHR's readyState is " + a);
  this.Ua = a;
  this.Ua >= 2 && se(this.K)
};
m.ke = function() {
  this.K.g()
};
m.c = function() {
  sf.d.c.call(this);
  delete wf.Fa[this.ma];
  this.Fd.__XHRSlave_dispose(this.ma);
  delete this.Fd
};
function xf() {
  J.call(this);
  this.Fa = {}
}
z(xf, J);
m = xf.prototype;
m.a = Q("cw.net.XHRMasterTracker");
m.Gd = function(a, b) {
  var c = "_" + Ld(), d = new sf(c, a, b);
  return this.Fa[c] = d
};
m.le = function(a, b, c) {
  var b = db(b), d = this.Fa[a];
  d ? d.le(b, c) : le(this.a, "onframes_: no master for " + F(a))
};
m.me = function(a, b) {
  var c = this.Fa[a];
  c ? c.me(b) : le(this.a, "ongotheaders_: no master for " + F(a))
};
m.ne = function(a, b) {
  var c = this.Fa[a];
  c ? c.ne(b) : le(this.a, "onreadystatechange_: no master for " + F(a))
};
m.ke = function(a) {
  var b = this.Fa[a];
  b ? (delete this.Fa[b.ma], b.ke()) : le(this.a, "oncomplete_: no master for " + F(a))
};
m.c = function() {
  xf.d.c.call(this);
  for(var a = Sa(this.Fa);a.length;) {
    a.pop().g()
  }
  delete this.Fa
};
var wf = new xf;
o.__XHRMaster_onframes = x(wf.le, wf);
o.__XHRMaster_oncomplete = x(wf.ke, wf);
o.__XHRMaster_ongotheaders = x(wf.me, wf);
o.__XHRMaster_onreadystatechange = x(wf.ne, wf);
function yf() {
  zf.info("Waiting for XDRFrames (may take a while)...");
  var a = new ud, b = o.__XDRSetup.done.length, c;
  o.__XDRSetup.done = {push:function() {
    b += 1;
    c = 2 - b;
    c || (zf.info("Got XDRFrames after waiting."), Ad(a, k))
  }};
  c = 2 - b;
  c || (zf.info("Already had all XDRFrames."), Ad(a, k));
  return a
}
var zf = Q("cw.net.waitForXDRFrames");
function Af(a, b, c) {
  this.host = a;
  this.port = b;
  this.nh = c
}
function Bf(a, b, c, d) {
  this.ed = a;
  this.Kf = b;
  this.gd = c;
  this.Wf = d;
  (!(this.ed.indexOf("http://") == 0 || this.ed.indexOf("https://") == 0) || !(this.gd.indexOf("http://") == 0 || this.gd.indexOf("https://") == 0)) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Kf.location.href;
  Ve(this.ed, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Wf.location.href;
  Ve(this.gd, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
var Cf = new Ge(";)]}"), Df = "disconnected_" + pd++;
function Ef(a, b, c, d) {
  J.call(this);
  this.J = a;
  this.Mf = b;
  this.qa = c;
  this.Zf = d;
  this.vc = new Rd;
  this.tc = Ld() + Ld();
  this.Ta = new Zb;
  this.be = new ac;
  this.yc = k;
  if(H) {
    this.yc = hd(o, "load", this.dh, !1, this)
  }
}
z(Ef, qd);
m = Ef.prototype;
m.a = Q("cw.net.Stream");
m.vf = new Yb(-1, []);
m.wf = new Yb(-1, []);
m.Sg = 50;
m.Rg = 1048576;
m.Be = !1;
m.re = !1;
m.l = 1;
m.eg = -1;
m.k = k;
m.B = k;
m.mc = k;
m.Ce = 0;
m.Jf = 0;
m.Vf = 0;
m.Wg = !0;
m.F = function(a, b) {
  a.push("<Stream id=");
  E(this.tc, a, b);
  a.push(", state=", String(this.l));
  a.push(", primary=");
  E(this.k, a, b);
  a.push(", secondary=");
  E(this.B, a, b);
  a.push(", resetting=");
  E(this.mc, a, b)
};
function Ff(a) {
  var b = [-1];
  a.k && b.push(a.k.Fb);
  a.B && b.push(a.B.Fb);
  return Math.max.apply(Math.max, b)
}
function Gf(a) {
  if(a.l != 1) {
    var b = a.Ta.A.U() != 0, c = bc(a.be), d = !c.n(a.wf) && !(a.k && c.n(a.k.Cb) || a.B && c.n(a.B.Cb)), f = Ff(a);
    if((b = b && f < a.Ta.ub) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.k.Sb) {
        P(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.k, c != d.Cb)) {
          !d.Ha && !d.D.length && Hf(d), d.D.push(new Ee(c)), d.Cb = c
        }
        b && If(a.k, a.Ta, f + 1);
        a.k.Ca()
      }else {
        a.B == k ? a.Be ? (P(a.a, "tryToSend_: creating secondary to send " + g), a.B = Jf(a, !1), b && If(a.B, a.Ta, f + 1), a.B.Ca()) : (P(a.a, "tryToSend_: not creating a secondary because Stream might not exist on server"), a.re = !0) : P(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
m.dh = function() {
  this.yc = k;
  if(this.k && this.k.yb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.k;
    a.xd = !0;
    a.g()
  }
  if(this.B && this.B.yb()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.B, a.xd = !0, a.g()
  }
};
function Kf(a, b) {
  a.l > 2 && e(Error("sendStrings: Can't send strings in state " + a.l));
  if(b.length) {
    if(a.Wg) {
      for(var c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || e(Error("sendStrings: string #" + c + " has illegal chars: " + F(d)))
      }
    }
    a.Ta.extend(b);
    Gf(a)
  }
}
function Jf(a, b) {
  var c;
  a.qa instanceof Bf ? c = (Boolean(Number((new Lf(document.location)).ha.get("httpStreaming", "0"))) ? 2 : 1) == 1 ? uf : Mf : a.qa instanceof Af ? c = Nf : e(Error("Don't support endpoint " + F(a.qa)));
  a.eg += 1;
  c = new Of(a.J, a, a.eg, c, a.qa, b);
  P(a.a, "Created: " + c.t());
  a.vc.add(c);
  return c
}
function Pf(a, b, c) {
  var d = new Qf(a.J, a, b, c);
  P(a.a, "Created: " + d.t() + ", delay=" + b + ", times=" + c);
  a.vc.add(d);
  return d
}
function Rf(a, b) {
  a.vc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  O(a.a, "Offline: " + b.t());
  b.kc ? a.Ce += b.kc : a.Ce = 0;
  a.Ce >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), Sf("stream penalty reached limit", !1), a.g());
  if(a.l > 2) {
    a.l == 3 && b.jg ? (O(a.a, "Disposing because resettingTransport_ is done."), a.g()) : O(a.a, "Not creating a transport because Stream is in state " + a.l)
  }else {
    var c;
    var d;
    c = b instanceof Qf;
    if(!c && b.xd) {
      var f = H ? Te ? [0, 1] : [9, 20] : [0, 0];
      c = f[0];
      d = f[1];
      P(a.a, "getDelayForNextTransport_: " + F({delay:c, times:d}))
    }else {
      d = b.Pe();
      if(b == a.k) {
        if(d) {
          f = ++a.Jf
        }else {
          if(!c) {
            f = a.Jf = 0
          }
        }
      }else {
        if(d) {
          f = ++a.Vf
        }else {
          if(!c) {
            f = a.Vf = 0
          }
        }
      }
      if(c || !f) {
        d = c = 0, P(a.a, "getDelayForNextTransport_: " + F({count:f, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(f, 3), h = Math.floor(Math.random() * 4E3) - 2E3, j = Math.max(0, b.fg - b.Fe);
        d = (c = Math.max(0, g + h - j)) ? 1 : 0;
        P(a.a, "getDelayForNextTransport_: " + F({count:f, base:g, variance:h, oldDuration:j, delay:c, times:d}))
      }
    }
    c = [c, d];
    f = c[0];
    c = c[1];
    if(b == a.k) {
      a.k = k, c ? a.k = Pf(a, f, c) : (f = Ff(a), a.k = Jf(a, !0), If(a.k, a.Ta, f + 1)), a.k.Ca()
    }else {
      if(b == a.B) {
        a.B = k, c ? (a.B = Pf(a, f, c), a.B.Ca()) : Gf(a)
      }
    }
  }
}
m.reset = function(a) {
  this.l > 2 && e(Error("reset: Can't send reset in state " + this.l));
  this.l = 3;
  this.k && this.k.Sb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Tf(this.k, a), this.k.Ca()) : (this.k && (O(this.a, "reset: Disposing primary before sending ResetFrame."), this.k.g()), this.B && (O(this.a, "reset: Disposing secondary before sending ResetFrame."), this.B.g()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.mc = Jf(this, !1), Tf(this.mc, a), this.mc.Ca());
  Sf(a, !0)
};
function Uf(a, b, c, d) {
  var f;
  f = a.be;
  for(var g = a.Sg, h = a.Rg, j = [], n = !1, p = 0, B = c.length;p < B;p++) {
    var r = c[p], v = r[0], r = r[1];
    if(v == f.Bb + 1) {
      f.Bb += 1;
      for(j.push(r);;) {
        v = f.Bb + 1;
        r = f.Ya.get(v, cc);
        if(r === cc) {
          break
        }
        j.push(r[0]);
        f.Ya.remove(v);
        f.w -= r[1];
        f.Bb = v
      }
    }else {
      if(!(v <= f.Bb)) {
        if(g != k && f.Ya.U() >= g) {
          n = !0;
          break
        }
        var C = Wb(r);
        if(h != k && f.w + C > h) {
          n = !0;
          break
        }
        f.Ya.set(v, [r, C]);
        f.w += C
      }
    }
  }
  f.Ya.Oa() && f.Ya.clear();
  f = [j, n];
  c = f[0];
  f = f[1];
  if(c) {
    g = a.Mf;
    tb.ag();
    try {
      for(h = 0;h < c.length;h++) {
        var j = g, Xb = Eb(c[h]), ad = Xb[0], bd = Xb[1];
        if(ad == 1) {
          var Re = j.oe.Kd(yb.$b(), bd), dj = ob(Re, 1), ej = ob(Re, 2), fj = Re.ea();
          tb.Hc(dj, ej, 5, 5, new Vf(1, "black"), new Wf(fj), i)
        }else {
          ad == 2 ? (tb.g(), Xf()) : N(Yf, "Strange message from server: " + F(Xb))
        }
      }
    }finally {
      tb.Sf()
    }
  }
  a.l == 3 || a.ya || (d || Gf(a), f && a.l == 2 && (le(b.a, b.t() + "'s peer caused rwin overflow."), b.g()))
}
m.start = function() {
  this.l = 2;
  this.k = Jf(this, !0);
  If(this.k, this.Ta, k);
  this.k.Ca()
};
m.c = function() {
  this.a.info(F(this) + " in disposeInternal.");
  this.l = 4;
  for(var a = this.vc.W(), b = 0;b < a.length;b++) {
    a[b].g()
  }
  this.dispatchEvent({type:Df});
  if(H && this.yc) {
    kd(this.yc), this.yc = k
  }
  delete this.vc;
  delete this.k;
  delete this.B;
  delete this.mc;
  delete this.Mf;
  Ef.d.c.call(this)
};
var uf = 1, Mf = 2, Nf = 3;
function Of(a, b, c, d, f, g) {
  J.call(this);
  this.J = a;
  this.z = b;
  this.Nb = c;
  this.va = d;
  this.qa = f;
  this.D = [];
  this.rb = g;
  this.Sb = !this.yb();
  this.Ib = this.va != uf;
  this.pg = x(this.lh, this)
}
z(Of, J);
m = Of.prototype;
m.a = Q("cw.net.ClientTransport");
m.r = k;
m.Fe = k;
m.fg = k;
m.fd = k;
m.Ha = !1;
m.qd = !1;
m.Cb = k;
m.Sd = 0;
m.Fb = -1;
m.pe = -1;
m.jg = !1;
m.xd = !1;
m.kc = 0;
m.bc = !1;
m.F = function(a) {
  a.push("<ClientTransport #", String(this.Nb), ", becomePrimary=", String(this.rb), ">")
};
m.t = function() {
  return(this.rb ? "Prim. T#" : "Sec. T#") + this.Nb
};
m.Pe = function() {
  return!(!this.bc && this.Sd)
};
m.yb = function() {
  return this.va == uf || this.va == Mf
};
function Zf(a, b) {
  ib(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Uf(a.z, a, b, !a.Ib)
}
function $f(a, b, c) {
  try {
    var d = Pe(b);
    a.Sd += 1;
    O(a.a, a.t() + " RECV " + F(d));
    var f;
    a.Sd == 1 && !d.n(Cf) && a.yb() ? (N(a.a, a.t() + " is closing soon because got bad preamble: " + F(d)), f = !0) : f = !1;
    if(f) {
      return!0
    }
    if(d instanceof Fe) {
      if(!/^([ -~]*)$/.test(d.Mb)) {
        return a.bc = !0
      }
      a.pe += 1;
      c.push([a.pe, d.Mb])
    }else {
      if(d instanceof Ee) {
        var g = a.z, h = d.na;
        g.vf = h;
        var j = g.Ta, n = h.qb, c = !1;
        n > j.ub && (c = !0);
        for(var p = $b(j).concat(), d = 0;d < p.length;d++) {
          var B = p[d];
          if(B > n) {
            break
          }
          var r = j.A.p[B][1];
          j.A.remove(B);
          j.w -= r
        }
        for(d = 0;d < h.mb.length;d++) {
          var v = h.mb[d];
          v > j.ub && (c = !0);
          j.A.ba(v) && (r = j.A.p[v][1], j.A.remove(v), j.w -= r)
        }
        j.A.Oa() && j.A.clear();
        if(c) {
          return N(a.a, a.t() + " is closing soon because got bad SackFrame"), a.bc = !0
        }
      }else {
        if(d instanceof He) {
          a.pe = d.rc - 1
        }else {
          if(d instanceof Je) {
            a.z.wf = d.gc
          }else {
            if(d instanceof Le) {
              return P(a.a, a.t() + " is closing soon because got YouCloseItFrame"), !0
            }else {
              if(d instanceof Oe) {
                return a.bc = !0, d.reason == "stream_attach_failure" ? a.kc += 1 : d.reason == "acked_unsent_strings" && (a.kc += 0.5), P(a.a, a.t() + " is closing soon because got " + F(d)), !0
              }else {
                if(!(d instanceof Ge)) {
                  if(d instanceof Ke) {
                    var C = a.z, Xb = !a.Ib;
                    P(C.a, "Stream is now confirmed to exist at server.");
                    C.Be = !0;
                    if(C.re && !Xb) {
                      C.re = !1, Gf(C)
                    }
                  }else {
                    if(c.length && (Zf(a, c), bb(c)), d instanceof Me) {
                      var ad = a.z;
                      Sf(d.lc, d.Qb);
                      ad.g();
                      return!0
                    }else {
                      e(Error(a.t() + " had unexpected state in framesReceived_."))
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }catch(bd) {
    return bd instanceof R || e(bd), N(a.a, a.t() + " is closing soon because got InvalidFrame: " + F(b)), a.bc = !0
  }
  return!1
}
function te(a, b) {
  a.qd = !0;
  try {
    for(var c = !1, d = [], f = 0, g = b.length;f < g;f++) {
      if(a.ya) {
        a.a.info(a.t() + " returning from loop because we're disposed.");
        return
      }
      if(c = $f(a, b[f], d)) {
        break
      }
    }
    d.length && Zf(a, d);
    a.qd = !1;
    a.D.length && a.Ca();
    c && (P(a.a, a.t() + " closeSoon is true.  Frames were: " + F(b)), a.g())
  }finally {
    a.qd = !1
  }
}
m.lh = function() {
  N(this.a, this.t() + " timed out due to lack of connection or no data being received.");
  this.g()
};
function ag(a) {
  if(a.fd != k) {
    a.J.M.clearTimeout(a.fd), a.fd = k
  }
}
function vf(a, b) {
  ag(a);
  b = Math.round(b);
  a.fd = a.J.M.setTimeout(a.pg, b);
  O(a.a, a.t() + "'s receive timeout set to " + b + " ms.")
}
function se(a) {
  a.va != uf && (a.va == Nf || a.va == Mf ? vf(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.va)))
}
function Hf(a) {
  var b = new Ce;
  b.Nb = a.Nb;
  b.Lf = 2;
  b.nf = 2;
  if(!a.z.Be) {
    b.Pf = !0;
    var c = bg.get(window.location.protocol == "https:" ? a.z.Zf.Kg : a.z.Zf.Ig);
    b.Ue = (ha(c) ? c : k) + "|" + o.CSRF_TOKEN
  }
  b.tc = a.z.tc;
  b.De = a.Ib;
  if(b.De) {
    b.Ef = 4096
  }
  b.Af = 3E5;
  b.yf = a.Ib ? Math.floor(10) : 0;
  b.gg = !1;
  if(a.rb) {
    b.$f = k, b.ie = Math.floor((a.Ib ? 358E4 : 25E3) / 1E3)
  }
  b.na = bc(a.z.be);
  b.$c = a.z.vf;
  a.D.push(b);
  a.Cb = b.na
}
function ue(a, b) {
  b && (a.kc += 0.5);
  a.g()
}
m.Ca = function() {
  this.Ha && !this.Sb && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.qd) {
    P(this.a, this.t() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ha;
    this.Ha = !0;
    !a && !this.D.length && Hf(this);
    for(a = 0;a < this.D.length;a++) {
      O(this.a, this.t() + " SEND " + F(this.D[a]))
    }
    if(this.yb()) {
      for(var a = [], b = 0, c = this.D.length;b < c;b++) {
        this.D[b].ka(a), a.push("\n")
      }
      this.D = [];
      a = a.join("");
      b = this.rb ? this.qa.ed : this.qa.gd;
      this.r = wf.Gd(this, this.rb ? this.qa.Kf : this.qa.Wf);
      this.Fe = this.J.M === sd ? y() : this.J.M.getTime();
      this.r.he(b, "POST", a);
      vf(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.Ib ? 0 : this.rb ? 25E3 : 2))
    }else {
      if(this.va == Nf) {
        a = [];
        b = 0;
        for(c = this.D.length;b < c;b++) {
          a.push(this.D[b].da())
        }
        this.D = [];
        this.r ? this.r.zc(a) : (b = this.qa, this.r = new we(this), this.r.pd = b.nh.Gd(this.r), this.Fe = this.J.M === sd ? y() : this.J.M.getTime(), this.r.Ed(b.host, b.port), this.r.ya || (this.r.zc(a), this.r.ya || vf(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.va))
      }
    }
  }
};
function If(a, b, c) {
  !a.Ha && !a.D.length && Hf(a);
  for(var d = Math.max(c, a.Fb + 1), f = $b(b), c = [], g = 0;g < f.length;g++) {
    var h = f[g];
    (d == k || h >= d) && c.push([h, b.A.p[h][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], f = g[0], g = g[1], (a.Fb == -1 || a.Fb + 1 != f) && a.D.push(new He(f)), a.D.push(new Fe(g)), a.Fb = f
  }
}
m.c = function() {
  this.a.info(this.t() + " in disposeInternal.");
  Of.d.c.call(this);
  this.fg = this.J.M === sd ? y() : this.J.M.getTime();
  this.D = [];
  ag(this);
  this.r && this.r.g();
  var a = this.z;
  this.z = k;
  Rf(a, this)
};
function Tf(a, b) {
  !a.Ha && !a.D.length && Hf(a);
  a.D.push(new Me(b, !0));
  a.jg = !0
}
function Qf(a, b, c, d) {
  J.call(this);
  this.J = a;
  this.z = b;
  this.Ze = c;
  this.Se = d
}
z(Qf, J);
m = Qf.prototype;
m.Ha = !1;
m.Sb = !1;
m.Qc = k;
m.Cb = k;
m.a = Q("cw.net.DoNothingTransport");
function cg(a) {
  a.Qc = a.J.M.setTimeout(function() {
    a.Qc = k;
    a.Se--;
    a.Se ? cg(a) : a.g()
  }, a.Ze)
}
m.Ca = function() {
  this.Ha && !this.Sb && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ha = !0;
  cg(this)
};
m.F = function(a) {
  a.push("<DoNothingTransport delay=", String(this.Ze), ">")
};
m.yb = ca(!1);
m.t = ca("Wast. T");
m.Pe = ca(!1);
m.c = function() {
  this.a.info(this.t() + " in disposeInternal.");
  Qf.d.c.call(this);
  this.Qc != k && this.J.M.clearTimeout(this.Qc);
  var a = this.z;
  this.z = k;
  Rf(a, this)
};
function Lf(a, b) {
  var c;
  a instanceof Lf ? (this.Jb(b == k ? a.ta : b), dg(this, a.Ga), eg(this, a.xc), fg(this, a.ab), gg(this, a.Gb), this.Wa(a.N), hg(this, a.ha.L()), ig(this, a.Yb)) : a && (c = String(a).match(Ue)) ? (this.Jb(!!b), dg(this, c[1] || "", !0), eg(this, c[2] || "", !0), fg(this, c[3] || "", !0), gg(this, c[4]), this.Wa(c[5] || "", !0), hg(this, c[6] || "", !0), ig(this, c[7] || "", !0)) : (this.Jb(!!b), this.ha = new jg(k, this, this.ta))
}
m = Lf.prototype;
m.Ga = "";
m.xc = "";
m.ab = "";
m.Gb = k;
m.N = "";
m.Yb = "";
m.Ng = !1;
m.ta = !1;
m.toString = function() {
  if(this.pa) {
    return this.pa
  }
  var a = [];
  this.Ga && a.push(kg(this.Ga, lg), ":");
  if(this.ab) {
    a.push("//");
    this.xc && a.push(kg(this.xc, lg), "@");
    var b;
    b = this.ab;
    b = t(b) ? encodeURIComponent(b) : k;
    a.push(b);
    this.Gb != k && a.push(":", String(this.Gb))
  }
  this.N && (this.ab && this.N.charAt(0) != "/" && a.push("/"), a.push(kg(this.N, this.N.charAt(0) == "/" ? mg : ng)));
  (b = String(this.ha)) && a.push("?", b);
  this.Yb && a.push("#", kg(this.Yb, og));
  return this.pa = a.join("")
};
m.L = function() {
  var a = this.Ga, b = this.xc, c = this.ab, d = this.Gb, f = this.N, g = this.ha.L(), h = this.Yb, j = new Lf(k, this.ta);
  a && dg(j, a);
  b && eg(j, b);
  c && fg(j, c);
  d && gg(j, d);
  f && j.Wa(f);
  g && hg(j, g);
  h && ig(j, h);
  return j
};
function dg(a, b, c) {
  pg(a);
  delete a.pa;
  a.Ga = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.Ga) {
    a.Ga = a.Ga.replace(/:$/, "")
  }
}
function eg(a, b, c) {
  pg(a);
  delete a.pa;
  a.xc = c ? b ? decodeURIComponent(b) : "" : b
}
function fg(a, b, c) {
  pg(a);
  delete a.pa;
  a.ab = c ? b ? decodeURIComponent(b) : "" : b
}
function gg(a, b) {
  pg(a);
  delete a.pa;
  b ? (b = Number(b), (isNaN(b) || b < 0) && e(Error("Bad port number " + b)), a.Gb = b) : a.Gb = k
}
m.Wa = function(a, b) {
  pg(this);
  delete this.pa;
  this.N = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function hg(a, b, c) {
  pg(a);
  delete a.pa;
  b instanceof jg ? (a.ha = b, a.ha.He = a, a.ha.Jb(a.ta)) : (c || (b = kg(b, qg)), a.ha = new jg(b, a, a.ta))
}
function ig(a, b, c) {
  pg(a);
  delete a.pa;
  a.Yb = c ? b ? decodeURIComponent(b) : "" : b
}
function pg(a) {
  a.Ng && e(Error("Tried to modify a read-only Uri"))
}
m.Jb = function(a) {
  this.ta = a;
  this.ha && this.ha.Jb(a);
  return this
};
var rg = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function kg(a, b) {
  var c = k;
  t(a) && (c = a, rg.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, sg)));
  return c
}
function sg(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var lg = /[#\/\?@]/g, ng = /[\#\?:]/g, mg = /[\#\?]/g, qg = /[\#\?@]/g, og = /#/g;
function jg(a, b, c) {
  this.Aa = a || k;
  this.He = b || k;
  this.ta = !!c
}
function tg(a) {
  if(!a.o && (a.o = new Rb, a.Aa)) {
    for(var b = a.Aa.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      d >= 0 ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = ug(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
m = jg.prototype;
m.o = k;
m.f = k;
m.U = function() {
  tg(this);
  return this.f
};
m.add = function(a, b) {
  tg(this);
  vg(this);
  a = ug(this, a);
  if(this.ba(a)) {
    var c = this.o.get(a);
    s(c) ? c.push(b) : this.o.set(a, [c, b])
  }else {
    this.o.set(a, b)
  }
  this.f++;
  return this
};
m.remove = function(a) {
  tg(this);
  a = ug(this, a);
  if(this.o.ba(a)) {
    vg(this);
    var b = this.o.get(a);
    s(b) ? this.f -= b.length : this.f--;
    return this.o.remove(a)
  }
  return!1
};
m.clear = function() {
  vg(this);
  this.o && this.o.clear();
  this.f = 0
};
m.Oa = function() {
  tg(this);
  return this.f == 0
};
m.ba = function(a) {
  tg(this);
  a = ug(this, a);
  return this.o.ba(a)
};
m.Fc = function(a) {
  var b = this.W();
  return ab(b, a)
};
m.Ea = function() {
  tg(this);
  for(var a = this.o.W(), b = this.o.Ea(), c = [], d = 0;d < b.length;d++) {
    var f = a[d];
    if(s(f)) {
      for(var g = 0;g < f.length;g++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
m.W = function(a) {
  tg(this);
  if(a) {
    if(a = ug(this, a), this.ba(a)) {
      var b = this.o.get(a);
      if(s(b)) {
        return b
      }else {
        a = [], a.push(b)
      }
    }else {
      a = []
    }
  }else {
    for(var b = this.o.W(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      s(d) ? fb(a, d) : a.push(d)
    }
  }
  return a
};
m.set = function(a, b) {
  tg(this);
  vg(this);
  a = ug(this, a);
  if(this.ba(a)) {
    var c = this.o.get(a);
    s(c) ? this.f -= c.length : this.f--
  }
  this.o.set(a, b);
  this.f++;
  return this
};
m.get = function(a, b) {
  tg(this);
  a = ug(this, a);
  if(this.ba(a)) {
    var c = this.o.get(a);
    return s(c) ? c[0] : c
  }else {
    return b
  }
};
m.toString = function() {
  if(this.Aa) {
    return this.Aa
  }
  if(!this.o) {
    return""
  }
  for(var a = [], b = 0, c = this.o.Ea(), d = 0;d < c.length;d++) {
    var f = c[d], g = ua(f), f = this.o.get(f);
    if(s(f)) {
      for(var h = 0;h < f.length;h++) {
        b > 0 && a.push("&"), a.push(g), f[h] !== "" && a.push("=", ua(f[h])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(g), f !== "" && a.push("=", ua(f)), b++
    }
  }
  return this.Aa = a.join("")
};
function vg(a) {
  delete a.Id;
  delete a.Aa;
  a.He && delete a.He.pa
}
m.L = function() {
  var a = new jg;
  if(this.Id) {
    a.Id = this.Id
  }
  if(this.Aa) {
    a.Aa = this.Aa
  }
  if(this.o) {
    a.o = this.o.L()
  }
  return a
};
function ug(a, b) {
  var c = String(b);
  a.ta && (c = c.toLowerCase());
  return c
}
m.Jb = function(a) {
  a && !this.ta && (tg(this), vg(this), Pb(this.o, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ta = a
};
m.extend = function() {
  for(var a = 0;a < arguments.length;a++) {
    Pb(arguments[a], function(a, c) {
      this.add(c, a)
    }, this)
  }
};
var wg;
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
      }catch(f) {
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
  wg = c
})();
function S(a, b) {
  this.width = a;
  this.height = b
}
m = S.prototype;
m.L = function() {
  return new S(this.width, this.height)
};
m.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
m.Oa = function() {
  return!(this.width * this.height)
};
m.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
m.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
m.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
m.scale = function(a) {
  this.width *= a;
  this.height *= a;
  return this
};
var xg;
function yg(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function zg(a) {
  var b = yg(a), c = hb(arguments, 1), d;
  d = b;
  for(var f = 0, g = 0;g < c.length;g++) {
    ab(d, c[g]) || (d.push(c[g]), f++)
  }
  d = f == c.length;
  a.className = b.join(" ");
  return d
}
function Ag(a) {
  var b = yg(a), c = hb(arguments, 1), d;
  d = b;
  for(var f = 0, g = 0;g < d.length;g++) {
    ab(c, d[g]) && (gb(d, g--, 1), f++)
  }
  d = f == c.length;
  a.className = b.join(" ");
  return d
}
;var Bg = !G || I("9");
!nc && !G || G && I("9") || nc && I("1.9.1");
var Cg = G && !I("9");
function Dg(a) {
  return a ? new Eg(Fg(a)) : xg || (xg = new Eg)
}
function T(a) {
  return t(a) ? document.getElementById(a) : a
}
function Gg(a, b, c, d) {
  a = d || a;
  b = b && b != "*" ? b.toUpperCase() : "";
  if(a.querySelectorAll && a.querySelector && (!H || document.compatMode == "CSS1Compat" || I("528")) && (b || c)) {
    return a.querySelectorAll(b + (c ? "." + c : ""))
  }
  if(c && a.getElementsByClassName) {
    if(a = a.getElementsByClassName(c), b) {
      for(var d = {}, f = 0, g = 0, h;h = a[g];g++) {
        b == h.nodeName && (d[f++] = h)
      }
      d.length = f;
      return d
    }else {
      return a
    }
  }
  a = a.getElementsByTagName(b || "*");
  if(c) {
    d = {};
    for(g = f = 0;h = a[g];g++) {
      b = h.className, typeof b.split == "function" && ab(b.split(/\s+/), c) && (d[f++] = h)
    }
    d.length = f;
    return d
  }else {
    return a
  }
}
function Hg(a, b) {
  Ra(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in Ig ? a.setAttribute(Ig[d], b) : a[d] = b
  })
}
var Ig = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Jg() {
  return Kg(document, arguments)
}
function Kg(a, b) {
  var c = b[0], d = b[1];
  if(!Bg && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', wa(d.name), '"');
    if(d.type) {
      c.push(' type="', wa(d.type), '"');
      var f = {};
      Va(f, d);
      d = f;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  if(d) {
    t(d) ? c.className = d : s(d) ? zg.apply(k, [c].concat(d)) : Hg(c, d)
  }
  b.length > 2 && Lg(a, c, b, 2);
  return c
}
function Lg(a, b, c, d) {
  function f(c) {
    c && b.appendChild(t(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ia(g) && !(ka(g) && g.nodeType > 0) ? Xa(Mg(g) ? eb(g) : g, f) : f(g)
  }
}
function Ng(a) {
  Lg(Fg(a), a, arguments, 1)
}
function Og(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function Pg(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Qg(a, b) {
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
function Fg(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
function Rg(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && a.firstChild.nodeType == 3) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      Og(a), a.appendChild(Fg(a).createTextNode(b))
    }
  }
}
var Sg = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Tg = {IMG:" ", BR:"\n"};
function Ug(a) {
  var b = a.getAttributeNode("tabindex");
  if(b && b.specified) {
    return a = a.tabIndex, la(a) && a >= 0
  }
  return!1
}
function Vg(a) {
  var b = [];
  Wg(a, b, !1);
  return b.join("")
}
function Wg(a, b, c) {
  if(!(a.nodeName in Sg)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Tg) {
        b.push(Tg[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Wg(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Mg(a) {
  if(a && typeof a.length == "number") {
    if(ka(a)) {
      return typeof a.item == "function" || typeof a.item == "string"
    }else {
      if(u(a)) {
        return typeof a.item == "function"
      }
    }
  }
  return!1
}
function Eg(a) {
  this.s = a || o.document || document
}
m = Eg.prototype;
m.Da = Dg;
m.b = function(a) {
  return t(a) ? this.s.getElementById(a) : a
};
m.i = function() {
  return Kg(this.s, arguments)
};
m.createElement = function(a) {
  return this.s.createElement(a)
};
m.createTextNode = function(a) {
  return this.s.createTextNode(a)
};
m.Te = function(a, b, c) {
  for(var d = this.s, f = !!c, c = ["<tr>"], g = 0;g < b;g++) {
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
m.appendChild = function(a, b) {
  a.appendChild(b)
};
m.append = Ng;
m.contains = Qg;
function Xg(a, b, c) {
  a.style[Ha(c)] = b
}
function Yg(a, b) {
  var c = Fg(a);
  if(c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k))) {
    return c[b] || c.getPropertyValue(b)
  }
  return""
}
function Zg(a, b, c) {
  b instanceof S ? (c = b.height, b = b.width) : c == i && e(Error("missing height argument"));
  a.style.width = $g(b);
  a.style.height = $g(c)
}
function $g(a) {
  typeof a == "number" && (a = Math.round(a) + "px");
  return a
}
function ah(a) {
  if((Yg(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style.display) != "none") {
    return new S(a.offsetWidth, a.offsetHeight)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  var g = a.offsetWidth, a = a.offsetHeight;
  b.display = c;
  b.position = f;
  b.visibility = d;
  return new S(g, a)
}
function bh(a) {
  G ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[H ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var ch = nc ? "MozUserSelect" : H ? "WebkitUserSelect" : k;
function dh(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(ch) {
    if(b = b ? "none" : "", a.style[ch] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[ch] = b
      }
    }
  }else {
    if(G || mc) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
;function eh(a) {
  J.call(this);
  this.gb = a
}
z(eh, J);
var fh = new K(0, 100), gh = [];
function U(a, b, c, d) {
  s(c) || (gh[0] = c, c = gh);
  for(var f = 0;f < c.length;f++) {
    var g = a, h = M(b, c[f], d || a, !1, a.gb || a);
    g.h ? g.h[h] = !0 : g.Qa ? (g.h = fh.getObject(), g.h[g.Qa] = !0, g.Qa = k, g.h[h] = !0) : g.Qa = h
  }
  return a
}
function hh(a, b, c, d, f, g) {
  if(a.Qa || a.h) {
    if(s(c)) {
      for(var h = 0;h < c.length;h++) {
        hh(a, b, c[h], d, f, g)
      }
    }else {
      a: {
        d = d || a;
        g = g || a.gb || a;
        f = !!f;
        if(b = jd(b, c, f)) {
          for(c = 0;c < b.length;c++) {
            if(b[c].Eb == d && b[c].capture == f && b[c].Uc == g) {
              b = b[c];
              break a
            }
          }
        }
        b = k
      }
      if(b) {
        if(b = b.key, kd(b), a.h) {
          c = a.h, b in c && delete c[b]
        }else {
          if(a.Qa == b) {
            a.Qa = k
          }
        }
      }
    }
  }
  return a
}
eh.prototype.qe = function() {
  if(this.h) {
    for(var a in this.h) {
      kd(a), delete this.h[a]
    }
    Pc(fh, this.h);
    this.h = k
  }else {
    this.Qa && kd(this.Qa)
  }
};
eh.prototype.c = function() {
  eh.d.c.call(this);
  this.qe()
};
eh.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function ih() {
}
fa(ih);
ih.prototype.Ug = 0;
ih.Ma();
function V(a) {
  J.call(this);
  this.P = a || Dg();
  this.pc = jh
}
z(V, qd);
V.prototype.Lg = ih.Ma();
var jh = k;
function kh(a, b) {
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
m = V.prototype;
m.R = k;
m.u = !1;
m.e = k;
m.pc = k;
m.Tg = k;
m.$ = k;
m.O = k;
m.Cc = k;
m.ph = !1;
function lh(a) {
  return a.R || (a.R = ":" + (a.Lg.Ug++).toString(36))
}
m.b = l("e");
function mh(a) {
  return a.wb || (a.wb = new eh(a))
}
m.getParent = l("$");
m.ve = function(a) {
  this.$ && this.$ != a && e(Error("Method not supported"));
  V.d.ve.call(this, a)
};
m.Da = l("P");
m.i = function() {
  this.e = this.P.createElement("div")
};
function nh(a, b) {
  a.u && e(Error("Component already rendered"));
  a.e || a.i();
  b ? b.insertBefore(a.e, k) : a.P.s.body.appendChild(a.e);
  (!a.$ || a.$.u) && a.Q()
}
m.Q = function() {
  this.u = !0;
  oh(this, function(a) {
    !a.u && a.b() && a.Q()
  })
};
m.bb = function() {
  oh(this, function(a) {
    a.u && a.bb()
  });
  this.wb && this.wb.qe();
  this.u = !1
};
m.c = function() {
  V.d.c.call(this);
  this.u && this.bb();
  this.wb && (this.wb.g(), delete this.wb);
  oh(this, function(a) {
    a.g()
  });
  !this.ph && this.e && Pg(this.e);
  this.$ = this.Tg = this.e = this.Cc = this.O = k
};
m.Zb = l("e");
m.Kb = function(a) {
  this.u && e(Error("Component already rendered"));
  this.pc = a
};
function oh(a, b) {
  a.O && Xa(a.O, b, i)
}
m.removeChild = function(a, b) {
  if(a) {
    var c = t(a) ? a : lh(a), d;
    this.Cc && c ? (d = this.Cc, d = c in d ? d[c] : i, d = d || k) : d = k;
    a = d;
    if(c && a) {
      d = this.Cc, c in d && delete d[c], cb(this.O, a), b && (a.bb(), a.e && Pg(a.e)), c = a, c == k && e(Error("Unable to set parent component")), c.$ = k, V.d.ve.call(c, k)
    }
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function ph(a, b) {
  V.call(this, b);
  this.zg = a;
  this.Nd = new eh(this);
  this.Kc = new Rb
}
z(ph, V);
m = ph.prototype;
m.a = Q("goog.ui.media.FlashObject");
m.rh = "window";
m.Me = "#000000";
m.ng = "sameDomain";
m.aa = function(a, b) {
  this.pb = t(a) ? a : Math.round(a) + "px";
  this.Zd = t(b) ? b : Math.round(b) + "px";
  this.b() && Zg(this.b() ? this.b().firstChild : k, this.pb, this.Zd);
  return this
};
m.Q = function() {
  ph.d.Q.call(this);
  var a = this.b(), b;
  b = G ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = G ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = sa(c, this.rh), d = this.Kc.Ea(), f = this.Kc.W(), g = [], h = 0;h < d.length;h++) {
    var j = ua(d[h]), n = ua(f[h]);
    g.push(j + "=" + n)
  }
  b = sa(b, lh(this), lh(this), "goog-ui-media-flash-object", wa(this.zg), wa(g.join("&")), this.Me, this.ng, c);
  a.innerHTML = b;
  this.pb && this.Zd && this.aa(this.pb, this.Zd);
  U(this.Nd, this.b(), Sa(Ac), Gc)
};
m.i = function() {
  this.Qf != k && !(Da(wg, this.Qf) >= 0) && (N(this.a, "Required flash version not found:" + this.Qf), e(Error("Method not supported")));
  var a = this.Da().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
m.c = function() {
  ph.d.c.call(this);
  this.Kc = k;
  this.Nd.g();
  this.Nd = k
};
function qh(a) {
  A.call(this, a)
}
z(qh, A);
qh.prototype.name = "cw.loadflash.FlashLoadFailed";
o.__loadFlashObject_callbacks = {};
function rh(a, b, c) {
  function d() {
    f && delete o.__loadFlashObject_callbacks[f]
  }
  var f;
  if(nc && !I("1.8.1.20")) {
    return Gd(new qh("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(Da(wg, "9") >= 0)) {
    return Gd(new qh("Need Flash Player 9+, had " + wg))
  }
  var g;
  f = "_" + Ld();
  var h = new ud(d);
  o.__loadFlashObject_callbacks[f] = function() {
    a.setTimeout(function() {
      d();
      Ad(h, T(g))
    }, 0)
  };
  b.Kc.set("onloadcallback", '__loadFlashObject_callbacks["' + f + '"]()');
  g = lh(b);
  nh(b, c);
  return h
}
function sh(a, b, c) {
  var d = rh(a, b, c), f = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  Dd(d, function(b) {
    a.clearTimeout(f);
    return b
  });
  return d
}
;var tf = 1;
function th(a, b) {
  this.sh = a;
  this.zf = b
}
th.prototype.ee = 0;
th.prototype.cd = 0;
th.prototype.Qd = !1;
function uh(a) {
  var b = [];
  if(a.Qd) {
    return[b, 2]
  }
  var c = a.ee, d = a.sh.responseText;
  for(a.ee = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var f = d.substr(a.cd, c - a.cd), f = f.replace(/\r$/, "");
    if(f.length > a.zf) {
      return a.Qd = !0, [b, 2]
    }
    b.push(f);
    a.cd = c += 1
  }
  return a.ee - a.cd - 1 > a.zf ? (a.Qd = !0, [b, 2]) : [b, tf]
}
;var vh = !(G || H && !I("420+"));
function wh(a, b) {
  this.td = a;
  this.ma = b
}
z(wh, J);
m = wh.prototype;
m.r = k;
m.Ua = -1;
m.gf = !1;
m.mf = ["Content-Length", "Server", "Date", "Expires", "Keep-Alive", "Content-Type", "Transfer-Encoding", "Cache-Control"];
function xh(a) {
  var b = uh(a.We), c = b[0], b = b[1], d = o.parent;
  d ? (d.__XHRMaster_onframes(a.ma, c, b), b != tf && a.g()) : a.g()
}
m.Jg = function() {
  xh(this);
  if(!this.ya) {
    var a = o.parent;
    a && a.__XHRMaster_oncomplete(this.ma);
    this.g()
  }
};
m.ah = function() {
  var a = o.parent;
  if(a) {
    this.Ua = this.r.Na();
    if(this.Ua >= 2 && !this.gf) {
      for(var b = new Rb, c = this.mf.length;c--;) {
        var d = this.mf[c];
        try {
          b.set(d, this.r.j.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.U() && (this.gf = !0, a.__XHRMaster_ongotheaders(this.ma, Vb(b)), this.ya)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.ma, this.Ua);
    vh && this.Ua == 3 && xh(this)
  }else {
    this.g()
  }
};
m.he = function(a, b, c) {
  this.r = new kf;
  M(this.r, "readystatechange", x(this.ah, this));
  M(this.r, "complete", x(this.Jg, this));
  this.r.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.We = new th(this.r.j, 1048576)
};
m.c = function() {
  wh.d.c.call(this);
  delete this.We;
  this.r && this.r.g();
  delete this.td.sc[this.ma];
  delete this.td
};
function yh() {
  J.call(this);
  this.sc = {}
}
z(yh, J);
yh.prototype.Qg = function(a, b, c, d) {
  var f = new wh(this, a);
  this.sc[a] = f;
  f.he(b, c, d)
};
yh.prototype.wg = function(a) {
  (a = this.sc[a]) && a.g()
};
yh.prototype.c = function() {
  yh.d.c.call(this);
  for(var a = Sa(this.sc);a.length;) {
    a.pop().g()
  }
  delete this.sc
};
var zh = new yh;
o.__XHRSlave_makeRequest = x(zh.Qg, zh);
o.__XHRSlave_dispose = x(zh.wg, zh);
function Ah(a) {
  this.s = a
}
var Bh = /\s*;\s*/;
m = Ah.prototype;
m.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && H) {
    var b = "COOKIES_TEST_" + y();
    bg.set(b, "1");
    if(!this.get(b)) {
      return!1
    }
    this.remove(b)
  }
  return a
};
m.set = function(a, b, c, d, f, g) {
  /[;=\s]/.test(a) && e(Error('Invalid cookie name "' + a + '"'));
  /[;\r\n]/.test(b) && e(Error('Invalid cookie value "' + b + '"'));
  ha(c) || (c = -1);
  f = f ? ";domain=" + f : "";
  d = d ? ";path=" + d : "";
  g = g ? ";secure" : "";
  c = c < 0 ? "" : c == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(y() + c * 1E3)).toUTCString();
  this.s.cookie = a + "=" + b + f + d + c + g
};
m.get = function(a, b) {
  for(var c = a + "=", d = (this.s.cookie || "").split(Bh), f = 0, g;g = d[f];f++) {
    if(g.indexOf(c) == 0) {
      return g.substr(c.length)
    }
  }
  return b
};
m.remove = function(a, b, c) {
  var d = this.ba(a);
  this.set(a, "", 0, b, c);
  return d
};
m.Ea = function() {
  return Ch(this).tf
};
m.W = function() {
  return Ch(this).ig
};
m.Oa = function() {
  return!this.s.cookie
};
m.U = function() {
  if(!this.s.cookie) {
    return 0
  }
  return(this.s.cookie || "").split(Bh).length
};
m.ba = function(a) {
  return ha(this.get(a))
};
m.Fc = function(a) {
  for(var b = Ch(this).ig, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return!0
    }
  }
  return!1
};
m.clear = function() {
  for(var a = Ch(this).tf, b = a.length - 1;b >= 0;b--) {
    this.remove(a[b])
  }
};
function Ch(a) {
  for(var a = (a.s.cookie || "").split(Bh), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), d == -1 ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{tf:b, ig:c}
}
var bg = new Ah(document);
bg.Vh = 3950;
function Dh() {
  this.Ig = "browsernode_site_uaid";
  this.Kg = "browsernode_site_uaid_secure"
}
function Eh(a) {
  var b = new ph("/compiled_client/FlashConnector.swf?cb=2ae8d8a79afe8f3a96bb49e8a9339914");
  b.Me = "#777777";
  b.aa(300, 30);
  var c = T("FlashConnectorSwf");
  c || e(Error("no FlashConnectorSwf?"));
  return sh(a.M, b, c)
}
function Fh(a, b, c) {
  var d = new Lf(document.location);
  if(c) {
    var f = d.ab, b = Eh(a);
    Bd(b, function(b) {
      b = new ve(a, b);
      return new Af(f, 843, b)
    });
    return b
  }else {
    return b ? (b = yf(), Bd(b, function() {
      var a = T("xdrframe-1").contentWindow || (H ? T("xdrframe-1").document || T("xdrframe-1").contentWindow.document : T("xdrframe-1").contentDocument || T("xdrframe-1").contentWindow.document).parentWindow || (H ? T("xdrframe-1").document || T("xdrframe-1").contentWindow.document : T("xdrframe-1").contentDocument || T("xdrframe-1").contentWindow.document).defaultView, b = T("xdrframe-2").contentWindow || (H ? T("xdrframe-2").document || T("xdrframe-2").contentWindow.document : T("xdrframe-2").contentDocument || 
      T("xdrframe-2").contentWindow.document).parentWindow || (H ? T("xdrframe-2").document || T("xdrframe-2").contentWindow.document : T("xdrframe-2").contentDocument || T("xdrframe-2").contentWindow.document).defaultView;
      a || e(Error("could not get primaryWindow xdrframe"));
      b || e(Error("could not get secondaryWindow xdrframe"));
      var c = new Lf(o.__XDRSetup.baseurl1);
      c.Wa("/httpface/");
      var d = new Lf(o.__XDRSetup.baseurl2);
      d.Wa("/httpface/");
      return new Bf(c.toString(), a, d.toString(), b)
    }), b) : (b = d.L(), b.Wa("/httpface/"), hg(b, "", i), b = new Bf(b.toString(), o, b.toString(), o), Fd(b))
  }
}
function Gh() {
  var a = Hh, b = (new Lf(document.location)).ha, c = b.get("mode") != "http", b = Boolean(Number(b.get("useSub", "1")));
  return Fh(a, b, c)
}
;function Ih(a, b) {
  a.setAttribute("role", b);
  a.Hi = b
}
;function Jh() {
}
var Kh;
fa(Jh);
m = Jh.prototype;
m.Lc = aa();
m.i = function(a) {
  return a.Da().i("div", Lh(this, a).join(" "), a.ca)
};
m.Zb = function(a) {
  return a
};
m.Wb = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(G && !I("7")) {
      var d = Mh(yg(a), b);
      d.push(b);
      qa(c ? zg : Ag, a).apply(k, d)
    }else {
      c ? zg(a, b) : Ag(a, b)
    }
  }
};
m.pf = function(a) {
  if(a.pc == k) {
    a.pc = "rtl" == (Yg(a.u ? a.e : a.P.s.body, "direction") || ((a.u ? a.e : a.P.s.body).currentStyle ? (a.u ? a.e : a.P.s.body).currentStyle.direction : k) || (a.u ? a.e : a.P.s.body).style.direction)
  }
  a.pc && this.Kb(a.b(), !0);
  a.isEnabled() && this.ld(a, a.Ob)
};
m.hd = function(a, b) {
  dh(a, !b, !G && !mc)
};
m.Kb = function(a, b) {
  this.Wb(a, this.v() + "-rtl", b)
};
m.rf = function(a) {
  var b;
  if(a.ua & 32 && (b = a.fb())) {
    return Ug(b)
  }
  return!1
};
m.ld = function(a, b) {
  var c;
  if(a.ua & 32 && (c = a.fb())) {
    if(!b && a.l & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.l & 32 && a.hf()
    }
    if(Ug(c) != b) {
      b ? c.tabIndex = 0 : c.removeAttribute("tabIndex")
    }
  }
};
m.ze = function(a, b) {
  a.style.display = b ? "" : "none"
};
m.ia = function(a, b, c) {
  var d = a.b();
  if(d) {
    var f = Nh(this, b);
    f && this.Wb(a, f, c);
    this.wc(d, b, c)
  }
};
m.wc = function(a, b, c) {
  Kh || (Kh = {1:"disabled", 4:"pressed", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Kh[b]) && a.setAttribute("aria-" + b, c)
};
m.jd = function(a, b) {
  var c = this.Zb(a);
  if(c && (Og(c), b)) {
    if(t(b)) {
      Rg(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = Fg(c);
          c.appendChild(t(a) ? b.createTextNode(a) : a)
        }
      };
      s(b) ? Xa(b, d) : ia(b) && !("nodeType" in b) ? Xa(eb(b), d) : d(b)
    }
  }
};
m.fb = function(a) {
  return a.b()
};
m.v = ca("goog-control");
function Lh(a, b) {
  var c = a.v(), d = [c], f = a.v();
  f != c && d.push(f);
  c = b.l;
  for(f = [];c;) {
    var g = c & -c;
    f.push(Nh(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.ra) && d.push.apply(d, c);
  G && !I("7") && d.push.apply(d, Mh(d));
  return d
}
function Mh(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Xa([], function(d) {
    $a(d, qa(ab, a)) && (!b || ab(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Nh(a, b) {
  if(!a.Oe) {
    var c = a.v();
    a.Oe = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Oe[b]
}
;function Oh(a, b) {
  a || e(Error("Invalid class name " + a));
  u(b) || e(Error("Invalid decorator function " + b))
}
var Ph = {};
function Qh(a, b, c, d, f) {
  if(!G && (!H || !I("525"))) {
    return!0
  }
  if(qc && f) {
    return Rh(a)
  }
  if(f && !d) {
    return!1
  }
  if(!c && (b == 17 || b == 18)) {
    return!1
  }
  if(G && d && b == a) {
    return!1
  }
  switch(a) {
    case 13:
      return!0;
    case 27:
      return!H
  }
  return Rh(a)
}
function Rh(a) {
  if(a >= 48 && a <= 57) {
    return!0
  }
  if(a >= 96 && a <= 106) {
    return!0
  }
  if(a >= 65 && a <= 90) {
    return!0
  }
  if(H && a == 0) {
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
;function Sh(a, b) {
  J.call(this);
  a && Th(this, a, b)
}
z(Sh, qd);
m = Sh.prototype;
m.e = k;
m.Yc = k;
m.de = k;
m.Zc = k;
m.Ra = -1;
m.Pa = -1;
var Uh = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Vh = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Wh = {61:187, 
59:186}, Xh = G || H && I("525");
m = Sh.prototype;
m.Fg = function(a) {
  if(H && (this.Ra == 17 && !a.ctrlKey || this.Ra == 18 && !a.altKey)) {
    this.Pa = this.Ra = -1
  }
  Xh && !Qh(a.keyCode, this.Ra, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Pa = nc && a.keyCode in Wh ? Wh[a.keyCode] : a.keyCode
};
m.Gg = function() {
  this.Pa = this.Ra = -1
};
m.handleEvent = function(a) {
  var b = a.Ba, c, d;
  G && a.type == "keypress" ? (c = this.Pa, d = c != 13 && c != 27 ? b.keyCode : 0) : H && a.type == "keypress" ? (c = this.Pa, d = b.charCode >= 0 && b.charCode < 63232 && Rh(c) ? b.charCode : 0) : mc ? (c = this.Pa, d = Rh(c) ? b.keyCode : 0) : (c = b.keyCode || this.Pa, d = b.charCode || 0, qc && d == 63 && !c && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in Uh ? f = Uh[c] : c == 25 && a.shiftKey && (f = 9) : g && g in Vh && (f = Vh[g]);
  a = f == this.Ra;
  this.Ra = f;
  b = new Yh(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.g()
  }
};
m.b = l("e");
function Th(a, b, c) {
  a.Zc && a.detach();
  a.e = b;
  a.Yc = M(a.e, "keypress", a, c);
  a.de = M(a.e, "keydown", a.Fg, c, a);
  a.Zc = M(a.e, "keyup", a.Gg, c, a)
}
m.detach = function() {
  if(this.Yc) {
    kd(this.Yc), kd(this.de), kd(this.Zc), this.Zc = this.de = this.Yc = k
  }
  this.e = k;
  this.Pa = this.Ra = -1
};
m.c = function() {
  Sh.d.c.call(this);
  this.detach()
};
function Yh(a, b, c, d) {
  d && this.dc(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
z(Yh, Ic);
function W(a, b, c) {
  V.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = w(b);
      if(d = Ph[d]) {
        break
      }
      b = b.d ? b.d.constructor : k
    }
    b = d ? u(d.Ma) ? d.Ma() : new d : k
  }
  this.m = b;
  this.kd(a)
}
z(W, V);
m = W.prototype;
m.ca = k;
m.l = 0;
m.ua = 39;
m.Le = 255;
m.jh = 0;
m.Ob = !0;
m.ra = k;
m.Yd = !0;
m.zd = !1;
m.fb = function() {
  return this.m.fb(this)
};
function Zh(a, b) {
  if(b) {
    a.ra ? ab(a.ra, b) || a.ra.push(b) : a.ra = [b], a.m.Wb(a, b, !0)
  }
}
m.Wb = function(a, b) {
  if(b) {
    Zh(this, a)
  }else {
    if(a && this.ra) {
      cb(this.ra, a);
      if(this.ra.length == 0) {
        this.ra = k
      }
      this.m.Wb(this, a, !1)
    }
  }
};
m.i = function() {
  var a = this.m.i(this);
  this.e = a;
  var b = this.m.Lc();
  b && Ih(a, b);
  this.zd || this.m.hd(a, !1);
  this.Ob || this.m.ze(a, !1)
};
m.Zb = function() {
  return this.m.Zb(this.b())
};
m.Q = function() {
  W.d.Q.call(this);
  this.m.pf(this);
  if(this.ua & -2 && (this.Yd && $h(this, !0), this.ua & 32)) {
    var a = this.fb();
    if(a) {
      var b = this.Ab || (this.Ab = new Sh);
      Th(b, a);
      U(U(U(mh(this), b, "key", this.kf), a, "focus", this.Dg), a, "blur", this.hf)
    }
  }
};
function $h(a, b) {
  var c = mh(a), d = a.b();
  b ? (U(U(U(U(c, d, "mouseover", a.Tc), d, "mousedown", a.Rc), d, "mouseup", a.lf), d, "mouseout", a.Sc), G && U(c, d, "dblclick", a.jf)) : (hh(hh(hh(hh(c, d, "mouseover", a.Tc), d, "mousedown", a.Rc), d, "mouseup", a.lf), d, "mouseout", a.Sc), G && hh(c, d, "dblclick", a.jf))
}
m.bb = function() {
  W.d.bb.call(this);
  this.Ab && this.Ab.detach();
  this.Ob && this.isEnabled() && this.m.ld(this, !1)
};
m.c = function() {
  W.d.c.call(this);
  this.Ab && (this.Ab.g(), delete this.Ab);
  delete this.m;
  this.ra = this.ca = k
};
m.jd = function(a) {
  this.m.jd(this.b(), a);
  this.kd(a)
};
m.kd = ba("ca");
m.ef = function() {
  var a = this.ca;
  if(!a) {
    return""
  }
  if(!t(a)) {
    if(s(a)) {
      a = Ya(a, Vg).join("")
    }else {
      if(Cg && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Wg(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      G || (a = a.replace(/ +/g, " "));
      a != " " && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
m.Kb = function(a) {
  W.d.Kb.call(this, a);
  var b = this.b();
  b && this.m.Kb(b, a)
};
m.hd = function(a) {
  this.zd = a;
  var b = this.b();
  b && this.m.hd(b, a)
};
m.ze = function(a, b) {
  if(b || this.Ob != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.m.ze(c, a);
    this.isEnabled() && this.m.ld(this, a);
    this.Ob = a;
    return!0
  }
  return!1
};
m.isEnabled = function() {
  return!(this.l & 1)
};
function ai(a, b) {
  bi(a, 2, b) && a.ia(2, b)
}
m.ce = function() {
  return!!(this.l & 4)
};
m.setActive = function(a) {
  bi(this, 4, a) && this.ia(4, a)
};
m.we = function(a) {
  bi(this, 8, a) && this.ia(8, a)
};
m.ia = function(a, b) {
  if(this.ua & a && b != !!(this.l & a)) {
    this.m.ia(this, a, b), this.l = b ? this.l | a : this.l & ~a
  }
};
function X(a, b) {
  return!!(a.Le & b) && !!(a.ua & b)
}
function bi(a, b, c) {
  return!!(a.ua & b) && !!(a.l & b) != c && (!(a.jh & b) || a.dispatchEvent(kh(b, c))) && !a.ya
}
m.Tc = function(a) {
  !ci(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && ai(this, !0)
};
m.Sc = function(a) {
  !ci(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(!1), X(this, 2) && ai(this, !1))
};
function ci(a, b) {
  return!!a.relatedTarget && Qg(b, a.relatedTarget)
}
m.Rc = function(a) {
  if(this.isEnabled() && (X(this, 2) && ai(this, !0), Kc(a) && (!H || !qc || !a.ctrlKey))) {
    X(this, 4) && this.setActive(!0), this.m.rf(this) && this.fb().focus()
  }
  !this.zd && Kc(a) && (!H || !qc || !a.ctrlKey) && a.preventDefault()
};
m.lf = function(a) {
  this.isEnabled() && (X(this, 2) && ai(this, !0), this.ce() && this.kb(a) && X(this, 4) && this.setActive(!1))
};
m.jf = function(a) {
  this.isEnabled() && this.kb(a)
};
m.kb = function(a) {
  if(X(this, 16)) {
    var b = !(this.l & 16);
    bi(this, 16, b) && this.ia(16, b)
  }
  X(this, 8) && this.we(!0);
  X(this, 64) && (b = !(this.l & 64), bi(this, 64, b) && this.ia(64, b));
  b = new Fc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, f = 0;d = c[f];f++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
m.Dg = function() {
  X(this, 32) && bi(this, 32, !0) && this.ia(32, !0)
};
m.hf = function() {
  X(this, 4) && this.setActive(!1);
  X(this, 32) && bi(this, 32, !1) && this.ia(32, !1)
};
m.kf = function(a) {
  if(this.Ob && this.isEnabled() && this.Xd(a)) {
    return a.preventDefault(), a.stopPropagation(), !0
  }
  return!1
};
m.Xd = function(a) {
  return a.keyCode == 13 && this.kb(a)
};
u(W) || e(Error("Invalid component class " + W));
u(Jh) || e(Error("Invalid renderer class " + Jh));
var di = w(W);
Ph[di] = Jh;
Oh("goog-control", function() {
  return new W(k)
});
function ei() {
}
z(ei, Jh);
fa(ei);
m = ei.prototype;
m.Lc = ca("button");
m.wc = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : ei.d.wc.call(this, a, b, c)
};
m.i = function(a) {
  var b = ei.d.i.call(this, a), c = a.Oc();
  c && this.ye(b, c);
  (c = a.Pc()) && this.od(b, c);
  a.ua & 16 && this.wc(b, 16, !1);
  return b
};
m.Pc = q;
m.od = q;
m.Oc = function(a) {
  return a.title
};
m.ye = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
m.v = ca("goog-button");
function fi() {
}
z(fi, ei);
fa(fi);
m = fi.prototype;
m.Lc = aa();
m.i = function(a) {
  a.u && !1 != a.Yd && $h(a, !1);
  a.Yd = !1;
  a.Le &= -256;
  a.u && a.l & 32 && e(Error("Component already rendered"));
  a.l & 32 && a.ia(32, !1);
  a.ua &= -33;
  return a.Da().i("button", {"class":Lh(this, a).join(" "), disabled:!a.isEnabled(), title:a.Oc() || "", value:a.Pc() || ""}, a.ef() || "")
};
m.pf = function(a) {
  U(mh(a), a.b(), "click", a.kb)
};
m.hd = q;
m.Kb = q;
m.rf = function(a) {
  return a.isEnabled()
};
m.ld = q;
m.ia = function(a, b, c) {
  fi.d.ia.call(this, a, b, c);
  if((a = a.b()) && b == 1) {
    a.disabled = c
  }
};
m.Pc = function(a) {
  return a.value
};
m.od = function(a, b) {
  if(a) {
    a.value = b
  }
};
m.wc = q;
function gi(a, b, c) {
  W.call(this, a, b || fi.Ma(), c)
}
z(gi, W);
m = gi.prototype;
m.Pc = l("hg");
m.od = function(a) {
  this.hg = a;
  this.m.od(this.b(), a)
};
m.Oc = l("cg");
m.ye = function(a) {
  this.cg = a;
  this.m.ye(this.b(), a)
};
m.c = function() {
  gi.d.c.call(this);
  delete this.hg;
  delete this.cg
};
m.Q = function() {
  gi.d.Q.call(this);
  if(this.ua & 32) {
    var a = this.fb();
    a && U(mh(this), a, "keyup", this.Xd)
  }
};
m.Xd = function(a) {
  if(a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup") {
    return this.kb(a)
  }
  return a.keyCode == 32
};
Oh("goog-button", function() {
  return new gi(k)
});
function hi() {
}
z(hi, ei);
fa(hi);
hi.prototype.i = function(a) {
  var b = {"class":"goog-inline-block " + Lh(this, a).join(" "), title:a.Oc() || ""};
  return a.Da().i("div", b, ii(this, a.ca, a.Da()))
};
hi.prototype.Lc = ca("button");
hi.prototype.Zb = function(a) {
  return a && a.firstChild.firstChild
};
function ii(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.v() + "-outer-box"), c.i("div", "goog-inline-block " + (a.v() + "-inner-box"), b))
}
hi.prototype.v = ca("goog-custom-button");
function ji(a, b, c) {
  gi.call(this, a, b || hi.Ma(), c)
}
z(ji, gi);
Oh("goog-custom-button", function() {
  return new ji(k)
});
var ki = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function li(a) {
  var b = {}, a = String(a), c = a.charAt(0) == "#" ? a : "#" + a;
  if(mi.test(c)) {
    return b.Vc = ni(c), b.type = "hex", b
  }else {
    a: {
      var d = a.match(oi);
      if(d) {
        var c = Number(d[1]), f = Number(d[2]), d = Number(d[3]);
        if(c >= 0 && c <= 255 && f >= 0 && f <= 255 && d >= 0 && d <= 255) {
          c = [c, f, d];
          break a
        }
      }
      c = []
    }
    if(c.length) {
      return b.Vc = pi(c[0], c[1], c[2]), b.type = "rgb", b
    }else {
      if(ki && (c = ki[a.toLowerCase()])) {
        return b.Vc = c, b.type = "named", b
      }
    }
  }
  e(Error(a + " is not a valid color string"))
}
var qi = /#(.)(.)(.)/;
function ni(a) {
  mi.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  a.length == 4 && (a = a.replace(qi, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function ri(a) {
  a = ni(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function pi(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || a < 0 || a > 255 || isNaN(b) || b < 0 || b > 255 || isNaN(c) || c < 0 || c > 255) && e(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = si(a.toString(16));
  b = si(b.toString(16));
  c = si(c.toString(16));
  return"#" + a + b + c
}
var mi = /^#(?:[0-9a-f]{3}){1,2}$/i, oi = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function si(a) {
  return a.length == 1 ? "0" + a : a
}
function ti(a) {
  var b, c = [255, 255, 255];
  b = Math.min(Math.max(0.45, 0), 1);
  return[Math.round(b * c[0] + (1 - b) * a[0]), Math.round(b * c[1] + (1 - b) * a[1]), Math.round(b * c[2] + (1 - b) * a[2])]
}
;function ui() {
  this.Of = y()
}
var vi = new ui;
ui.prototype.set = ba("Of");
ui.prototype.reset = function() {
  this.set(y())
};
ui.prototype.get = l("Of");
function wi(a) {
  this.Zg = a || "";
  this.ih = vi
}
wi.prototype.Xf = !0;
wi.prototype.gh = !0;
wi.prototype.fh = !0;
wi.prototype.Yf = !1;
function xi(a) {
  if(a < 10) {
    return"0" + a
  }
  return String(a)
}
function yi(a, b) {
  var c = (a.bg - b) / 1E3, d = c.toFixed(3), f = 0;
  if(c < 1) {
    f = 2
  }else {
    for(;c < 100;) {
      f++, c *= 10
    }
  }
  for(;f-- > 0;) {
    d = " " + d
  }
  return d
}
function zi(a) {
  wi.call(this, a)
}
z(zi, wi);
zi.prototype.Yf = !0;
function Ai(a) {
  this.$g = x(this.mg, this);
  this.cf = new zi;
  this.qf = this.cf.Xf = !1;
  this.e = a;
  this.yg = this.e.ownerDocument || this.e.document;
  var a = Dg(this.e), b = k;
  if(G) {
    b = a.s.createStyleSheet(), bh(b)
  }else {
    var c = Gg(a.s, "head", i, i)[0];
    c || (b = Gg(a.s, "body", i, i)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    bh(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
Ai.prototype.mg = function(a) {
  var b = this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight <= 100, c = this.yg.createElement("div");
  c.className = "logmsg";
  var d = this.cf, f;
  switch(a.Db.value) {
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
  g.push(d.Zg, " ");
  if(d.Xf) {
    var h = new Date(a.bg);
    g.push("[", xi(h.getFullYear() - 2E3) + xi(h.getMonth() + 1) + xi(h.getDate()) + " " + xi(h.getHours()) + ":" + xi(h.getMinutes()) + ":" + xi(h.getSeconds()) + "." + xi(Math.floor(h.getMilliseconds() / 10)), "] ")
  }
  d.gh && g.push("[", Ca(yi(a, d.ih.get())), "s] ");
  d.fh && g.push("[", wa(a.Pg), "] ");
  g.push('<span class="', f, '">', va(Ca(wa(a.Cf))));
  d.Yf && a.Pd && g.push("<br>", va(Ca(a.Od || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  if(b) {
    this.e.scrollTop = this.e.scrollHeight
  }
};
Ai.prototype.clear = function() {
  this.e.innerHTML = ""
};
function Bi(a, b, c, d, f, g) {
  arguments.length == 6 ? this.setTransform(a, b, c, d, f, g) : arguments.length != 0 ? e(Error("Insufficient matrix parameters")) : (this.X = this.Z = 1, this.S = this.Y = this.fa = this.ga = 0)
}
m = Bi.prototype;
m.L = function() {
  return new Bi(this.X, this.S, this.Y, this.Z, this.fa, this.ga)
};
m.setTransform = function(a, b, c, d, f, g) {
  (!la(a) || !la(b) || !la(c) || !la(d) || !la(f) || !la(g)) && e(Error("Invalid transform parameters"));
  this.X = a;
  this.S = b;
  this.Y = c;
  this.Z = d;
  this.fa = f;
  this.ga = g;
  return this
};
m.Re = function(a) {
  this.X = a.X;
  this.S = a.S;
  this.Y = a.Y;
  this.Z = a.Z;
  this.fa = a.fa;
  this.ga = a.ga;
  return this
};
m.scale = function(a, b) {
  this.X *= a;
  this.S *= a;
  this.Y *= b;
  this.Z *= b;
  return this
};
m.translate = function(a, b) {
  this.fa += a * this.X + b * this.Y;
  this.ga += a * this.S + b * this.Z;
  return this
};
m.rotate = function(a, b, c) {
  var d = new Bi, f = Math.cos(a), a = Math.sin(a), b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f), c = this.X, d = this.Y;
  this.X = b.X * c + b.S * d;
  this.Y = b.Y * c + b.Z * d;
  this.fa += b.fa * c + b.ga * d;
  c = this.S;
  d = this.Z;
  this.S = b.X * c + b.S * d;
  this.Z = b.Y * c + b.Z * d;
  this.ga += b.fa * c + b.ga * d;
  return this
};
m.toString = function() {
  return"matrix(" + [this.X, this.S, this.Y, this.Z, this.fa, this.ga].join(",") + ")"
};
m.n = function(a) {
  if(this == a) {
    return!0
  }
  if(!a) {
    return!1
  }
  return this.X == a.X && this.Y == a.Y && this.fa == a.fa && this.S == a.S && this.Z == a.Z && this.ga == a.ga
};
function Y(a, b) {
  J.call(this);
  this.e = a;
  this.sa = b;
  this.Hd = !1
}
z(Y, qd);
m = Y.prototype;
m.sa = k;
m.e = k;
m.dg = k;
m.b = l("e");
m.addEventListener = function(a, b, c, d) {
  M(this.e, a, b, c, d)
};
m.removeEventListener = function(a, b, c, d) {
  id(this.e, a, b, c, d)
};
m.c = function() {
  Y.d.c.call(this);
  md(this.e)
};
function Z(a, b, c, d) {
  Y.call(this, a, b);
  this.Ee = c;
  this.sa.ue(this, c);
  this.fill = d;
  this.sa.te(this, d)
}
z(Z, Y);
Z.prototype.fill = k;
Z.prototype.Ee = k;
Z.prototype.Ag = l("fill");
Z.prototype.Cg = l("Ee");
function Ci(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
z(Ci, Z);
function Di(a, b) {
  Y.call(this, a, b)
}
z(Di, Y);
function Ei(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
z(Ei, Z);
function Fi(a, b) {
  Y.call(this, a, b)
}
z(Fi, Y);
function Gi(a, b) {
  Y.call(this, a, b)
}
z(Gi, Di);
Gi.prototype.clear = function() {
  Og(this.b())
};
Gi.prototype.aa = function(a, b) {
  Hi(this.b(), {width:a, height:b})
};
function Ii(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
z(Ii, Ei);
function Ji(a, b) {
  Y.call(this, a, b)
}
z(Ji, Fi);
Ji.prototype.aa = function(a, b) {
  Hi(this.b(), {width:a, height:b})
};
function Ki() {
}
;function Wf(a, b) {
  this.Dd = a;
  this.ic = b || 1
}
z(Wf, Ki);
Wf.prototype.ea = l("Dd");
function Vf(a, b) {
  this.pb = a;
  this.Dd = b
}
Vf.prototype.ea = l("Dd");
function Li() {
  this.C = [];
  this.f = [];
  this.wa = []
}
Li.prototype.sb = k;
Li.prototype.T = k;
Li.prototype.Lb = !0;
var Mi = [2, 2, 6, 6, 0];
m = Li.prototype;
m.clear = function() {
  this.C.length = 0;
  this.f.length = 0;
  this.wa.length = 0;
  delete this.sb;
  delete this.T;
  delete this.Lb;
  return this
};
m.moveTo = function(a, b) {
  this.C[this.C.length - 1] == 0 ? this.wa.length -= 2 : (this.C.push(0), this.f.push(1));
  this.wa.push(a, b);
  this.T = this.sb = [a, b];
  return this
};
m.lineTo = function() {
  var a = this.C[this.C.length - 1];
  a == k && e(Error("Path cannot start with lineTo"));
  a != 1 && (this.C.push(1), this.f.push(0));
  for(a = 0;a < arguments.length;a += 2) {
    var b = arguments[a], c = arguments[a + 1];
    this.wa.push(b, c)
  }
  this.f[this.f.length - 1] += a / 2;
  this.T = [b, c];
  return this
};
m.Ve = function() {
  var a = this.C[this.C.length - 1];
  a == k && e(Error("Path cannot start with curve"));
  a != 2 && (this.C.push(2), this.f.push(0));
  for(a = 0;a < arguments.length;a += 6) {
    var b = arguments[a + 4], c = arguments[a + 5];
    this.wa.push(arguments[a], arguments[a + 1], arguments[a + 2], arguments[a + 3], b, c)
  }
  this.f[this.f.length - 1] += a / 6;
  this.T = [b, c];
  return this
};
m.close = function() {
  var a = this.C[this.C.length - 1];
  a == k && e(Error("Path cannot start with close"));
  if(a != 4) {
    this.C.push(4), this.f.push(1), this.T = this.sb
  }
  return this
};
m.arcTo = function(a, b, c, d) {
  var f = this.T[0] - a * Math.cos(xe(c)) + a * Math.cos(xe(c + d)), g = this.T[1] - b * Math.sin(xe(c)) + b * Math.sin(xe(c + d));
  this.C.push(3);
  this.f.push(1);
  this.wa.push(a, b, c, d, f, g);
  this.Lb = !1;
  this.T = [f, g];
  return this
};
m.og = function(a, b, c, d) {
  var f = this.T[0] - a * Math.cos(xe(c)), g = this.T[1] - b * Math.sin(xe(c)), h = xe(d), d = Math.ceil(Math.abs(h) / Math.PI * 2);
  h /= d;
  for(var c = xe(c), j = 0;j < d;j++) {
    var n = Math.cos(c), p = Math.sin(c), B = 4 / 3 * Math.sin(h / 2) / (1 + Math.cos(h / 2)), r = f + (n - B * p) * a, v = g + (p + B * n) * b;
    c += h;
    n = Math.cos(c);
    p = Math.sin(c);
    this.Ve(r, v, f + (n + B * p) * a, g + (p - B * n) * b, f + n * a, g + p * b)
  }
  return this
};
function Ni(a, b) {
  for(var c = a.wa, d = 0, f = 0, g = a.C.length;f < g;f++) {
    var h = a.C[f], j = Mi[h] * a.f[f];
    b(h, c.slice(d, d + j));
    d += j
  }
}
m.L = function() {
  var a = new this.constructor;
  a.C = this.C.concat();
  a.f = this.f.concat();
  a.wa = this.wa.concat();
  a.sb = this.sb && this.sb.concat();
  a.T = this.T && this.T.concat();
  a.Lb = this.Lb;
  return a
};
var Oi = {};
Oi[0] = Li.prototype.moveTo;
Oi[1] = Li.prototype.lineTo;
Oi[4] = Li.prototype.close;
Oi[2] = Li.prototype.Ve;
Oi[3] = Li.prototype.og;
function Pi(a) {
  if(a.Lb) {
    return a.L()
  }
  var b = new Li;
  Ni(a, function(a, d) {
    Oi[a].apply(b, d)
  });
  return b
}
Li.prototype.Oa = function() {
  return this.C.length == 0
};
function Qi(a, b, c, d, f) {
  V.call(this, f);
  this.width = a;
  this.height = b;
  this.ja = c || k;
  this.Ub = d || k
}
z(Qi, V);
m = Qi.prototype;
m.G = k;
m.Ka = 0;
m.$a = 0;
m.ff = function() {
  return this.V()
};
m.V = function() {
  if(this.u) {
    return ah(this.b())
  }
  if(la(this.width) && la(this.height)) {
    return new S(this.width, this.height)
  }
  return k
};
function Ri(a) {
  var b = a.V();
  return b ? b.width / (a.ja ? new S(a.ja, a.Ub) : a.V()).width : 0
}
m.ag = aa();
m.Sf = aa();
function Si(a, b, c, d, f) {
  Qi.call(this, a, b, c, d, f);
  this.Ye = {};
  this.Ie = H && !I(526);
  this.gb = new eh(this)
}
var Ti;
z(Si, Qi);
function Ui(a, b, c) {
  a = a.P.s.createElementNS("http://www.w3.org/2000/svg", b);
  c && Hi(a, c);
  return a
}
function Hi(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
m = Si.prototype;
m.Ja = function(a, b) {
  (b || this.G).b().appendChild(a.b())
};
m.te = function(a, b) {
  var c = a.b();
  b instanceof Wf ? (c.setAttribute("fill", b.ea()), c.setAttribute("fill-opacity", b.ic)) : c.setAttribute("fill", "none")
};
m.ue = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.ea());
    var d = b.pb;
    t(d) && d.indexOf("px") != -1 ? c.setAttribute("stroke-width", parseFloat(d) / Ri(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
m.i = function() {
  var a = Ui(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = Ui(this, "g");
  this.Jd = Ui(this, "defs");
  this.G = new Gi(b, this);
  a.appendChild(this.Jd);
  a.appendChild(b);
  this.e = a;
  if(this.ja || this.Ka || this.$a) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.Ie ? this.ud() : this.b().setAttribute("viewBox", this.Ka + " " + this.$a + " " + (this.ja ? this.ja + " " + this.Ub : ""))
  }
};
m.ud = function() {
  if(this.u && (this.ja || this.Ka || !this.$a)) {
    var a = this.V();
    if(a.width == 0) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.Ka, c = -this.$a, d = a.width / this.ja, a = a.height / this.Ub;
      this.G.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
m.aa = aa();
m.V = function() {
  if(!nc) {
    return this.u ? ah(this.b()) : Si.d.V.call(this)
  }
  var a = this.width, b = this.height, c = t(a) && a.indexOf("%") != -1, d = t(b) && b.indexOf("%") != -1;
  if(!this.u && (c || d)) {
    return k
  }
  var f, g;
  if(c) {
    f = this.b().parentNode, g = ah(f), a = parseFloat(a) * g.width / 100
  }
  d && (f = f || this.b().parentNode, g = g || ah(f), b = parseFloat(b) * g.height / 100);
  return new S(a, b)
};
m.clear = function() {
  this.G.clear();
  Og(this.Jd);
  this.Ye = {}
};
m.Hc = function(a, b, c, d, f, g, h) {
  a = Ui(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new Ii(a, this, f, g);
  this.Ja(f, h);
  return f
};
m.drawImage = function(a, b, c, d, f, g) {
  a = Ui(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new Ji(a, this);
  this.Ja(f, g);
  return f
};
m.Q = function() {
  var a = this.V();
  Si.d.Q.call(this);
  a || this.dispatchEvent("resize");
  if(this.Ie) {
    var a = this.width, b = this.height;
    typeof a == "string" && a.indexOf("%") != -1 && typeof b == "string" && b.indexOf("%") != -1 && U(this.gb, Vi(), td, this.ud);
    this.ud()
  }
};
m.bb = function() {
  Si.d.bb.call(this);
  this.Ie && hh(this.gb, Vi(), td, this.ud)
};
m.c = function() {
  delete this.Ye;
  delete this.Jd;
  delete this.G;
  Si.d.c.call(this)
};
function Vi() {
  Ti || (Ti = new rd(400), Ti.start());
  return Ti
}
;function Wi() {
  return this.e = this.sa.P.b(this.R) || this.e
}
function Xi(a, b) {
  this.R = a.id;
  Y.call(this, a, b)
}
z(Xi, Di);
Xi.prototype.b = Wi;
Xi.prototype.clear = function() {
  Og(this.b())
};
Xi.prototype.aa = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  if(this.sa.G != this) {
    c.coordorigin = "0 0"
  }
};
function Yi(a, b, c, d, f, g, h, j) {
  this.R = a.id;
  Z.call(this, a, b, h, j);
  this.ti = c;
  this.ui = d;
  this.Ii = f;
  this.Ji = g
}
z(Yi, Ei);
Yi.prototype.b = Wi;
function Zi(a, b) {
  this.R = a.id;
  Y.call(this, a, b)
}
z(Zi, Fi);
Zi.prototype.b = Wi;
Zi.prototype.aa = function(a, b) {
  var c = this.b().style;
  c.width = $i(a) + "px";
  c.height = $i(b) + "px"
};
function aj(a, b, c, d, f) {
  Qi.call(this, a, b, c, d, f);
  this.gb = new eh(this)
}
z(aj, Qi);
var bj = document.documentMode && document.documentMode >= 8;
function $i(a) {
  return Math.round((parseFloat(a.toString()) - 0.5) * 100)
}
function $(a) {
  return Math.round(parseFloat(a.toString()) * 100)
}
function cj(a, b) {
  var c = a.P.createElement("g_vml_:" + b);
  c.id = "goog_" + Fa++;
  return c
}
function gj(a) {
  if(bj && a.u) {
    a.b().innerHTML = a.b().innerHTML
  }
}
aj.prototype.Ja = function(a, b) {
  (b || this.G).b().appendChild(a.b());
  gj(this)
};
aj.prototype.te = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    f.tagName == "fill" && c.removeChild(f)
  }
  b instanceof Wf ? b.ea() == "transparent" ? c.filled = !1 : b.ic != 1 ? (c.filled = !0, d = cj(this, "fill"), d.opacity = Math.round(b.ic * 100) + "%", d.color = b.ea(), c.appendChild(d)) : (c.filled = !0, c.fillcolor = b.ea()) : c.filled = !1;
  gj(this)
};
aj.prototype.ue = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = !0;
    var d = b.pb;
    t(d) && d.indexOf("px") == -1 ? d = parseFloat(d) : d *= Ri(this);
    var f = c.getElementsByTagName("stroke")[0];
    d < 1 ? (f = f || cj(this, "stroke"), f.opacity = d, f.Ki = "1px", f.color = b.ea(), c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.ea(), c.strokeweight = d + "px")
  }else {
    c.stroked = !1
  }
  gj(this)
};
function hj(a, b, c, d, f) {
  var g = a.style;
  g.position = "absolute";
  g.left = $i(b) + "px";
  g.top = $i(c) + "px";
  g.width = $(d) + "px";
  g.height = $(f) + "px";
  if(a.tagName == "shape") {
    a.coordsize = $(d) + " " + $(f)
  }
}
try {
  eval("document.namespaces")
}catch(ij) {
}
m = aj.prototype;
m.i = function() {
  var a = this.P.s;
  if(!a.namespaces.g_vml_) {
    bj ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}"
  }
  var a = this.width, b = this.height, c = this.P.i("div", {style:"overflow:hidden;position:relative;width:" + (t(a) && ra(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (t(b) && ra(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = cj(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.ja ? $(this.ja) + " " + $(this.Ub) : $(a) + " " + $(b);
  d.coordorigin = ha(this.Ka) ? $(this.Ka) + " " + $(this.$a) : "0 0";
  c.appendChild(d);
  this.G = new Xi(d, this);
  M(c, "resize", x(this.Wd, this))
};
m.Wd = function() {
  var a = ah(this.b()), b = this.G.b().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.b();a && a.currentStyle && a.currentStyle.display != "none";) {
      a = a.parentNode
    }
    a && a.currentStyle && U(this.gb, a, "propertychange", this.Wd)
  }
  this.dispatchEvent("resize")
};
m.aa = aa();
m.V = function() {
  var a = this.b();
  return new S(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
m.clear = function() {
  this.G.clear()
};
m.Hc = function(a, b, c, d, f, g, h) {
  var j = cj(this, "oval");
  hj(j, a - c, b - d, c * 2, d * 2);
  a = new Yi(j, this, a, b, c, d, f, g);
  this.Ja(a, h);
  return a
};
m.drawImage = function(a, b, c, d, f, g) {
  var h = cj(this, "image");
  hj(h, a, b, c, d);
  bj ? h.src = f : h.setAttribute("src", f);
  a = new Zi(h, this);
  this.Ja(a, g);
  return a
};
m.Q = function() {
  aj.d.Q.call(this);
  this.Wd();
  gj(this)
};
m.c = function() {
  this.G = k;
  aj.d.c.call(this)
};
function jj(a) {
  Y.call(this, k, a);
  this.O = []
}
z(jj, Di);
jj.prototype.clear = function() {
  if(this.O.length) {
    this.O.length = 0, kj(this.sa)
  }
};
jj.prototype.aa = aa();
jj.prototype.appendChild = function(a) {
  this.O.push(a)
};
jj.prototype.za = function() {
  for(var a = 0, b = this.O.length;a < b;a++) {
    lj(this.sa, this.O[a])
  }
};
function mj(a, b, c, d, f, g, h, j) {
  Z.call(this, a, b, h, j);
  this.sg = c;
  this.tg = d;
  this.Tf = f;
  this.Uf = g;
  this.N = new Li;
  this.N.clear();
  this.N.moveTo(this.sg + this.Tf * Math.cos(xe(0)), this.tg + this.Uf * Math.sin(xe(0)));
  this.N.arcTo(this.Tf, this.Uf, 0, 360);
  this.N.close();
  this.Xg = new nj(k, b, this.N, h, j)
}
z(mj, Ei);
mj.prototype.za = function(a) {
  this.Xg.za(a)
};
function nj(a, b, c, d, f) {
  Z.call(this, a, b, d, f);
  this.Wa(c)
}
z(nj, Ci);
nj.prototype.Vb = !1;
nj.prototype.Wa = function(a) {
  this.N = a.Lb ? a : Pi(a);
  this.Vb && kj(this.sa)
};
nj.prototype.za = function(a) {
  this.Vb = !0;
  a.beginPath();
  Ni(this.N, function(b, c) {
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
function oj(a, b, c, d, f, g, h) {
  Y.call(this, a, b);
  this.th = c;
  this.uh = d;
  this.Ke = f;
  this.Vd = g;
  this.hh = h
}
z(oj, Fi);
oj.prototype.Vb = !1;
oj.prototype.aa = function(a, b) {
  this.Ke = a;
  this.Vd = b;
  this.Vb && kj(this.sa)
};
oj.prototype.za = function(a) {
  this.of ? (this.Ke && this.Vd && a.drawImage(this.of, this.th, this.uh, this.Ke, this.Vd), this.Vb = !0) : (a = new Image, a.onload = x(this.Eg, this, a), a.src = this.hh)
};
oj.prototype.Eg = function(a) {
  this.of = a;
  kj(this.sa)
};
function pj(a, b, c, d, f) {
  Qi.call(this, a, b, c, d, f)
}
z(pj, Qi);
m = pj.prototype;
m.te = function() {
  kj(this)
};
m.ue = function() {
  kj(this)
};
function qj(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.dg ? b.dg.L() : new Bi, f = d.fa, g = d.ga;
  (f || g) && c.translate(f, g);
  (d = d.S) && c.rotate(Math.asin(d))
}
m.i = function() {
  var a = this.P.i("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Tb = this.P.i("canvas");
  a.appendChild(this.Tb);
  this.Og = this.G = new jj(this);
  this.bh = 0;
  rj(this)
};
m.getContext = function() {
  this.b() || this.i();
  if(!this.tb) {
    this.tb = this.Tb.getContext("2d"), this.tb.save()
  }
  return this.tb
};
m.aa = function(a, b) {
  this.width = a;
  this.height = b;
  rj(this);
  kj(this)
};
m.V = function() {
  var a = this.width, b = this.height, c = t(a) && a.indexOf("%") != -1, d = t(b) && b.indexOf("%") != -1;
  if(!this.u && (c || d)) {
    return k
  }
  var f, g;
  if(c) {
    f = this.b().parentNode, g = ah(f), a = parseFloat(a) * g.width / 100
  }
  d && (f = f || this.b().parentNode, g = g || ah(f), b = parseFloat(b) * g.height / 100);
  return new S(a, b)
};
function rj(a) {
  Zg(a.b(), a.width, a.height);
  var b = a.V();
  if(b) {
    Zg(a.Tb, b.width, b.height), a.Tb.width = b.width, a.Tb.height = b.height, a.tb = k
  }
}
m.reset = function() {
  var a = this.getContext();
  a.restore();
  var b = this.V();
  b.width && b.height && a.clearRect(0, 0, b.width, b.height);
  a.save()
};
m.clear = function() {
  this.reset();
  this.G.clear();
  for(var a = this.b();a.childNodes.length > 1;) {
    a.removeChild(a.lastChild)
  }
};
function kj(a) {
  if(a.If) {
    a.Gf = !0
  }else {
    if(a.u) {
      a.reset();
      if(a.ja) {
        var b = a.V();
        a.getContext().scale(b.width / a.ja, b.height / a.Ub)
      }
      (a.Ka || a.$a) && a.getContext().translate(-a.Ka, -a.$a);
      qj(a, a.G);
      a.G.za(a.tb);
      a.getContext().restore()
    }
  }
}
function lj(a, b) {
  var c = a.getContext();
  qj(a, b);
  if(!b.Ag || !b.Cg) {
    b.za(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof Wf) {
        if(d.ic != 0) {
          c.globalAlpha = d.ic, c.fillStyle = d.ea(), b.za(c), c.fill(), c.globalAlpha = 1
        }
      }else {
        var f = c.createLinearGradient(d.zi(), d.Bi(), d.Ai(), d.Ci());
        f.addColorStop(0, d.xi());
        f.addColorStop(1, d.yi());
        c.fillStyle = f;
        b.za(c);
        c.fill()
      }
    }
    if(d = b.Ee) {
      b.za(c), c.strokeStyle = d.ea(), d = d.pb, t(d) && d.indexOf("px") != -1 && (d = parseFloat(d) / Ri(a)), c.lineWidth = d, c.stroke()
    }
  }
  a.getContext().restore()
}
m.Ja = function(a, b) {
  b = b || this.G;
  b.appendChild(a);
  this.u && !this.bh && !(b != this.G && b != this.Og) && lj(this, a)
};
m.Hc = function(a, b, c, d, f, g, h) {
  a = new mj(k, this, a, b, c, d, f, g);
  this.Ja(a, h);
  return a
};
m.drawImage = function(a, b, c, d, f, g) {
  a = new oj(k, this, a, b, c, d, f);
  this.Ja(a, g);
  return a
};
m.c = function() {
  this.tb = k;
  pj.d.c.call(this)
};
m.Q = function() {
  var a = this.V();
  pj.d.Q.call(this);
  a || (rj(this), this.dispatchEvent("resize"));
  kj(this)
};
m.ag = function() {
  this.If = !0
};
m.Sf = function() {
  this.If = !1;
  if(this.Gf) {
    kj(this), this.Gf = !1
  }
};
function sj(a) {
  J.call(this);
  this.A = [];
  tj(this, a)
}
z(sj, qd);
m = sj.prototype;
m.Va = k;
m.se = k;
function tj(a, b) {
  b && (Xa(b, function(a) {
    this.qc(a, !1)
  }, a), fb(a.A, b))
}
m.Ud = l("Va");
m.nd = function(a) {
  if(a != this.Va) {
    this.qc(this.Va, !1), this.Va = a, this.qc(a, !0)
  }
  this.dispatchEvent("select")
};
m.Td = function() {
  return this.Va ? Wa(this.A, this.Va) : -1
};
m.xe = function(a) {
  this.nd(this.A[a] || k)
};
m.clear = function() {
  bb(this.A);
  this.Va = k
};
m.c = function() {
  sj.d.c.call(this);
  delete this.A;
  this.Va = k
};
m.qc = function(a, b) {
  a && (typeof this.se == "function" ? this.se(a, b) : typeof a.we == "function" && a.we(b))
};
function uj() {
}
z(uj, Jh);
fa(uj);
var vj = 0;
uj.prototype.i = function(a) {
  var b = Lh(this, a);
  return a.Da().i("div", b ? b.join(" ") : k, wj(this, a.ca, a.ff(), a.Da()))
};
function wj(a, b, c, d) {
  for(var f = [], g = 0, h = 0;g < c.height;g++) {
    for(var j = [], n = 0;n < c.width;n++) {
      var p = b && b[h++];
      j.push(xj(a, p, d))
    }
    f.push(d.i("tr", a.v() + "-row", j))
  }
  return a.Te(f, d)
}
uj.prototype.Te = function(a, b) {
  var c = b.i("table", this.v() + "-table", b.i("tbody", this.v() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Ih(c, "grid");
  return c
};
function xj(a, b, c) {
  a = c.i("td", {"class":a.v() + "-cell", id:a.v() + "-cell-" + vj++}, b);
  Ih(a, "gridcell");
  return a
}
uj.prototype.jd = function(a, b) {
  if(a) {
    var c = Gg(document, "tbody", this.v() + "-body", a)[0];
    if(c) {
      var d = 0;
      Xa(c.rows, function(a) {
        Xa(a.cells, function(a) {
          Og(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = Dg(a), h = c.rows[0].cells.length;d < b.length;) {
          var j = b[d++];
          f.push(xj(this, j, g));
          if(f.length == h) {
            j = g.i("tr", this.v() + "-row", f), c.appendChild(j), f.length = 0
          }
        }
        if(f.length > 0) {
          for(;f.length < h;) {
            f.push(xj(this, "", g))
          }
          j = g.i("tr", this.v() + "-row", f);
          c.appendChild(j)
        }
      }
    }
    dh(a, !0, nc)
  }
};
function yj(a, b, c) {
  for(b = b.b();c && c.nodeType == 1 && c != b;) {
    if(c.tagName == "TD" && ab(yg(c), a.v() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function zj(a, b, c, d) {
  if(c) {
    c = c.parentNode, a = a.v() + "-cell-hover", d ? zg(c, a) : Ag(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id)
  }
}
uj.prototype.v = ca("goog-palette");
function Aj(a, b, c) {
  W.call(this, a, b || uj.Ma(), c)
}
z(Aj, W);
m = Aj.prototype;
m.w = k;
m.hb = -1;
m.I = k;
m.c = function() {
  Aj.d.c.call(this);
  if(this.I) {
    this.I.g(), this.I = k
  }
  this.w = k
};
m.kd = function(a) {
  Aj.d.kd.call(this, a);
  Bj(this);
  this.I ? (this.I.clear(), tj(this.I, a)) : (this.I = new sj(a), this.I.se = x(this.qc, this), U(mh(this), this.I, "select", this.Hg));
  this.hb = -1
};
m.ef = ca(k);
m.Tc = function(a) {
  Aj.d.Tc.call(this, a);
  var b = yj(this.m, this, a.target);
  if((!b || !a.relatedTarget || !Qg(b, a.relatedTarget)) && b != Cj(this)) {
    a = this.ca, Dj(this, a ? Wa(a, b) : -1)
  }
};
m.Sc = function(a) {
  Aj.d.Sc.call(this, a);
  var b = yj(this.m, this, a.target);
  (!b || !a.relatedTarget || !Qg(b, a.relatedTarget)) && b == Cj(this) && zj(this.m, this, b, !1)
};
m.Rc = function(a) {
  Aj.d.Rc.call(this, a);
  if(this.ce() && (a = yj(this.m, this, a.target), a != Cj(this))) {
    var b = this.ca;
    Dj(this, b ? Wa(b, a) : -1)
  }
};
m.kb = function() {
  var a = Cj(this);
  if(a) {
    return this.nd(a), this.dispatchEvent("action")
  }
  return!1
};
m.kf = function(a) {
  var b = this.ca, b = b ? b.length : 0, c = this.w.width;
  if(b == 0 || !this.isEnabled()) {
    return!1
  }
  if(a.keyCode == 13 || a.keyCode == 32) {
    return this.kb(a)
  }
  if(a.keyCode == 36) {
    return Dj(this, 0), !0
  }else {
    if(a.keyCode == 35) {
      return Dj(this, b - 1), !0
    }
  }
  var d = this.hb < 0 ? this.Td() : this.hb;
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
m.Hg = aa();
m.ff = l("w");
m.aa = function(a, b) {
  this.b() && e(Error("Component already rendered"));
  this.w = la(a) ? new S(a, b) : a;
  Bj(this)
};
function Cj(a) {
  var b = a.ca;
  return b && b[a.hb]
}
function Dj(a, b) {
  if(b != a.hb) {
    Ej(a, a.hb, !1), a.hb = b, Ej(a, b, !0)
  }
}
m.Td = function() {
  return this.I ? this.I.Td() : -1
};
m.Ud = function() {
  return this.I ? this.I.Ud() : k
};
m.xe = function(a) {
  this.I && this.I.xe(a)
};
m.nd = function(a) {
  this.I && this.I.nd(a)
};
function Ej(a, b, c) {
  if(a.b()) {
    var d = a.ca;
    d && b >= 0 && b < d.length && zj(a.m, a, d[b], c)
  }
}
m.qc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.m.v() + "-cell-selected";
    b ? zg(c, d) : Ag(c, d)
  }
};
function Bj(a) {
  var b = a.ca;
  if(b) {
    if(a.w && a.w.width) {
      if(b = Math.ceil(b.length / a.w.width), !la(a.w.height) || a.w.height < b) {
        a.w.height = b
      }
    }else {
      b = Math.ceil(Math.sqrt(b.length)), a.w = new S(b, b)
    }
  }else {
    a.w = new S(0, 0)
  }
}
;function Fj(a, b, c) {
  this.Dc = a || [];
  Aj.call(this, k, b || uj.Ma(), c);
  this.Dc = this.Dc;
  this.bd = k;
  this.jd(Gj(this))
}
z(Fj, Aj);
Fj.prototype.bd = k;
function Hj(a) {
  var b = Ij(Jj);
  if(!a.bd) {
    a.bd = Ya(a.Dc, function(a) {
      return Ij(a)
    })
  }
  a.xe(b ? Wa(a.bd, b) : -1)
}
function Gj(a) {
  return Ya(a.Dc, function(a) {
    var c = this.Da().i("div", {"class":this.m.v() + "-colorswatch", style:"background-color:" + a});
    c.title = a.charAt(0) == "#" ? "RGB (" + ri(a).join(", ") + ")" : a;
    return c
  }, a)
}
function Ij(a) {
  if(a) {
    try {
      return li(a).Vc
    }catch(b) {
    }
  }
  return k
}
;var Yf = Q("whiteboard.logger");
window.onerror = function(a, b, c) {
  le(Yf, "window.onerror: message: " + F(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Kj() {
  this.oe = new Cb
}
function Sf(a, b) {
  Yf.info("streamReset: reasonString=" + F(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  Lj = k
}
Kj.prototype.reset = function(a) {
  Yf.info("resetting with reason: " + a);
  this.z.reset(a)
};
var Lj = k, Hh = new Hd(o.window);
function Mj() {
  Lj && (Lj.reset("idle timeout fired"), Lj = k)
}
var Nj = k;
function Oj() {
  Nj != k && Hh.M.clearTimeout(Nj);
  Lj && (Nj = Hh.M.setTimeout(Mj, 2592E5))
}
M(window, ["click", "focus", "keydown", "keypress"], Oj, !0);
function Pj() {
  var a = new Dh;
  Lj = new Kj;
  Oj();
  Bd(Gh(), function(b) {
    Lj || e(Error("lastProto falsy?"));
    b = new Ef(Hh, Lj, b, a);
    Lj.z = b;
    Kf(Lj.z, ["subprotocol:whiteboard"]);
    b.start();
    return k
  })
}
function Qj() {
  tb.g();
  Xf();
  var a = Lj;
  Yf.info("Telling server to clear the board.");
  var b = a.z, a = [2, a.oe.nb(new zb)], a = (new Fb).nb(a);
  Kf(b, [a])
}
function Rj(a) {
  var b = new Ic(a), a = b.offsetX, c = b.offsetY;
  tb.Hc(a, c, 5, 5, new Vf(1, "black"), new Wf(ub), i);
  var d = Lj, f = ub;
  Yf.info("Telling server about circle at: " + a + ", " + c + " with color " + f);
  var b = d.z, g = new yb;
  g.q[1] = a;
  g.q[2] = c;
  g.q[3] = f;
  a = d.oe.nb(g);
  Kf(b, [(new Fb).nb([1, a])])
}
function Xf() {
  var a;
  a = G && !I("9") ? new aj(800, 600, i, i, i) : H && (!I("420") || I("534") && !I("534.10") || oc) ? new pj(800, 600, i, i, i) : new Si(800, 600, i, i, i);
  a.i();
  vb = T("drawArea");
  nh(a, vb);
  tb = a
}
var Jj = "#E06666";
function Sj(a) {
  var b;
  (a = a.target.Ud()) ? (a = a.style[Ha("background-color")] || "", b = Ij(a)) : b = k;
  b || (b = Jj);
  ub = b;
  bg.set("whiteboard_defaultColor", b);
  a = T("whiteboard-cp-value");
  t("background-color") ? Xg(a, b, "background-color") : Ra("background-color", qa(Xg, a));
  a = T("whiteboard-cp-value");
  a.title = b;
  b = li(b).Vc;
  Rg(a, b);
  b = ri(b);
  b = pi(ti(b)[0], ti(b)[1], ti(b)[2]);
  t("color") ? Xg(a, b, "color") : Ra("color", qa(Xg, a))
}
function Tj() {
  wb = (new Lf(document.location)).ha;
  if(xb = Boolean(Number(wb.get("logging", "0")))) {
    pe().md(je);
    var a = new Ai(document.getElementById("log"));
    if(!0 != a.qf) {
      var b = pe(), c = a.$g;
      if(!b.cc) {
        b.cc = []
      }
      b.cc.push(c);
      a.qf = !0
    }
  }else {
    pe().md(be)
  }
  Yf.info("Logger works.");
  (a = bg.get("whiteboard_defaultColor")) && (Jj = a);
  ub = Jj;
  b = T("whiteboard-controls-left");
  a = T("whiteboard-controls-right");
  c = Jg("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  Ng(b, c);
  c = Jg("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  Ng(b, c);
  b = new Fj(["#EA9999", "#F9CB9C", "#FFE599", "#B6D7A8", "#A2C4C9", "#9FC5E8", "#B4A7D6", "#D5A6BD", "#E06666", "#F6B26B", "#FFD966", "#93C47D", "#76A5AF", "#6FA8DC", "#8E7CC3", "#C27BA0", "#CC0000", "#E69138", "#F1C232", "#6AA84F", "#45818E", "#3D85C6", "#674EA7", "#A64D79"]);
  b.aa(8);
  nh(b, T("whiteboard-cp"));
  M(b, "action", Sj);
  Hj(b);
  Sj({target:b});
  b = new ji("Clear board");
  Zh(b, "clear-board-button");
  nh(b, a);
  M(b, "action", Qj);
  a = T("drawAreaOverlay");
  dh(a, !0);
  M(a, "click", Rj, !1);
  Xf();
  Pj()
}
var Uj = "__whiteboard_init".split("."), Vj = o;
!(Uj[0] in Vj) && Vj.execScript && Vj.execScript("var " + Uj[0]);
for(var Wj;Uj.length && (Wj = Uj.shift());) {
  !Uj.length && ha(Tj) ? Vj[Wj] = Tj : Vj = Vj[Wj] ? Vj[Wj] : Vj[Wj] = {}
}
;})();
