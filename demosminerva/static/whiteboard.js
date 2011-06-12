(function(){function e(a) {
  throw a;
}
var i = void 0, k = null;
function aa(a) {
  return function(b) {
    this[a] = b
  }
}
function l(a) {
  return function() {
    return this[a]
  }
}
function ba(a) {
  return function() {
    return a
  }
}
var n, ca = ca || {}, o = this;
function da(a) {
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
function ea(a) {
  a.Na = function() {
    return a.Dg || (a.Dg = new a)
  }
}
function fa(a) {
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
function ga(a) {
  return a !== i
}
function s(a) {
  return fa(a) == "array"
}
function ha(a) {
  var b = fa(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function ia(a) {
  return ja(a) && typeof a.getFullYear == "function"
}
function t(a) {
  return typeof a == "string"
}
function ka(a) {
  return typeof a == "number"
}
function v(a) {
  return fa(a) == "function"
}
function ja(a) {
  a = fa(a);
  return a == "object" || a == "array" || a == "function"
}
function w(a) {
  return a[la] || (a[la] = ++ma)
}
var la = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), ma = 0;
function na(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function oa(a, b, c) {
  var d = b || o;
  if(arguments.length > 2) {
    var f = Array.prototype.slice.call(arguments, 2);
    return function() {
      var b = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(b, f);
      return a.apply(d, b)
    }
  }else {
    return function() {
      return a.apply(d, arguments)
    }
  }
}
function x(a, b, c) {
  x = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? na : oa;
  return x.apply(k, arguments)
}
function pa(a, b) {
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
function z(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.d = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function C(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = String(a)
  }
}
z(C, Error);
C.prototype.name = "CustomError";
function qa(a) {
  var b = a.length - 1;
  return b >= 0 && a.indexOf("%", b) == b
}
function ra(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
var sa = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function ta(a) {
  a = String(a);
  return!sa.test(a) ? encodeURIComponent(a) : a
}
function ua(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function va(a) {
  if(!wa.test(a)) {
    return a
  }
  a.indexOf("&") != -1 && (a = a.replace(xa, "&amp;"));
  a.indexOf("<") != -1 && (a = a.replace(ya, "&lt;"));
  a.indexOf(">") != -1 && (a = a.replace(za, "&gt;"));
  a.indexOf('"') != -1 && (a = a.replace(Aa, "&quot;"));
  return a
}
var xa = /&/g, ya = /</g, za = />/g, Aa = /\"/g, wa = /[&<>\"]/;
function Ba(a) {
  return ua(a.replace(/  /g, " &#160;"), i)
}
function Ca(a, b) {
  for(var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(d.length, f.length), h = 0;c == 0 && h < g;h++) {
    var j = d[h] || "", m = f[h] || "", p = RegExp("(\\d*)(\\D*)", "g"), A = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = p.exec(j) || ["", "", ""], u = A.exec(m) || ["", "", ""];
      if(r[0].length == 0 && u[0].length == 0) {
        break
      }
      c = Da(r[1].length == 0 ? 0 : parseInt(r[1], 10), u[1].length == 0 ? 0 : parseInt(u[1], 10)) || Da(r[2].length == 0, u[2].length == 0) || Da(r[2], u[2])
    }while(c == 0)
  }
  return c
}
function Da(a, b) {
  if(a < b) {
    return-1
  }else {
    if(a > b) {
      return 1
    }
  }
  return 0
}
var Ea = Math.random() * 2147483648 | 0, Fa = {};
function Ga(a) {
  return Fa[a] || (Fa[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
}
;function Ha(a, b) {
  b.unshift(a);
  C.call(this, ra.apply(k, b));
  b.shift();
  this.yi = a
}
z(Ha, C);
Ha.prototype.name = "AssertionError";
function Ia(a, b) {
  e(new Ha("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ja(a, b, c) {
  this.$ = a;
  this.H = b;
  this.je = c.name;
  this.Ab = !!c.Bi;
  this.wi = !!c.required;
  this.Yb = c.Rd;
  this.Bf = c.type;
  this.Ze = !1;
  switch(this.Yb) {
    case Ka:
    ;
    case La:
    ;
    case Ma:
    ;
    case Na:
    ;
    case Oa:
      this.Ze = !0
  }
  this.li = c.defaultValue
}
var Ka = 3, La = 4, Ma = 6, Na = 16, Oa = 18;
function Pa(a) {
  return a.Yb == 11 || a.Yb == 10
}
;function Qa(a, b) {
  for(var c in a) {
    b.call(i, a[c], c, a)
  }
}
function Ra(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Sa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Ta = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
function Ua(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < Ta.length;g++) {
      c = Ta[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var D = Array.prototype, Va = D.indexOf ? function(a, b, c) {
  return D.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(t(a)) {
    return!t(b) || b.length != 1 ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Wa = D.forEach ? function(a, b, c) {
  D.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = t(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
}, Xa = D.map ? function(a, b, c) {
  return D.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = t(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (f[h] = b.call(c, g[h], h, a))
  }
  return f
}, Ya = D.some ? function(a, b, c) {
  return D.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = t(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return!0
    }
  }
  return!1
}, Za = D.every ? function(a, b, c) {
  return D.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = t(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && !b.call(c, f[g], g, a)) {
      return!1
    }
  }
  return!0
};
function $a(a, b) {
  return Va(a, b) >= 0
}
function ab(a) {
  if(!s(a)) {
    for(var b = a.length - 1;b >= 0;b--) {
      delete a[b]
    }
  }
  a.length = 0
}
function bb(a, b) {
  var c = Va(a, b);
  c >= 0 && D.splice.call(a, c, 1)
}
function cb(a) {
  return D.concat.apply(D, arguments)
}
function db(a) {
  if(s(a)) {
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
    var d = arguments[c], f;
    if(s(d) || (f = ha(d)) && d.hasOwnProperty("callee")) {
      a.push.apply(a, d)
    }else {
      if(f) {
        for(var g = a.length, h = d.length, j = 0;j < h;j++) {
          a[g + j] = d[j]
        }
      }else {
        a.push(d)
      }
    }
  }
}
function fb(a, b, c, d) {
  D.splice.apply(a, gb(arguments, 1))
}
function gb(a, b, c) {
  return arguments.length <= 2 ? D.slice.call(a, b) : D.slice.call(a, b, c)
}
function hb(a, b) {
  D.sort.call(a, b || ib)
}
function ib(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function jb(a, b, c) {
  this.zf = a;
  this.je = b.name || k;
  this.ni = b.cf || k;
  this.ii = b.hi;
  this.Ma = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.Ma[b.H] = b
  }
}
function kb(a) {
  a = Ra(a.Ma);
  hb(a, function(a, c) {
    return a.H - c.H
  });
  return a
}
;function lb() {
  this.q = {};
  this.wb = this.constructor.wb;
  var a = this.wb.Ma, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.Ma = b;
  this.Ld = this.ge = k
}
function mb(a, b) {
  for(var c in a.q) {
    a.Ma[c] || b.call(a, c, a.q[c])
  }
}
n = lb.prototype;
n.ac = l("wb");
n.get = function(a, b) {
  return nb(this, a.H, b)
};
n.set = function(a, b) {
  this.q[a.H] = b
};
n.add = function(a, b) {
  var c = a.H;
  this.q[c] || (this.q[c] = []);
  this.q[c].push(b)
};
n.clear = function(a) {
  delete this.q[a.H]
};
n.n = function(a) {
  if(!a || this.constructor != a.constructor) {
    return!1
  }
  for(var b = kb(this.ac()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(ob(this, d.H) != ob(a, d.H)) {
      return!1
    }
    if(ob(this, d.H)) {
      var f = Pa(d), g = d.H, h = this.q[g], g = a.q[g];
      if(d.Ab) {
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
n.Re = function(a) {
  for(var b = kb(this.ac()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete this.q[d.H];
    if(ob(a, d.H)) {
      var f = Pa(d);
      if(d.Ab) {
        var g;
        g = a;
        var h = d.H;
        pb(g, g.Ma[h]);
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
n.L = function() {
  var a = new this.constructor;
  a.Re(this);
  return a
};
function ob(a, b) {
  return b in a.q && ga(a.q[b])
}
function pb(a, b) {
  if(a.ge) {
    var c = b.H;
    if(!(c in a.Ld)) {
      var d = a.q, f;
      f = a.ge;
      var g = a.q[c];
      if(g == k) {
        f = g
      }else {
        if(b.Ab) {
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
function nb(a, b, c) {
  var d = a.Ma[b];
  pb(a, d);
  return d.Ab ? (c = c || 0, qb(a, b), a.q[b][c]) : (s(a.q[b]), a.q[b])
}
function qb(a, b) {
  return a.Ma[b].Ab ? (ob(a, b) && s(a.q[b]), ob(a, b) ? a.q[b].length : 0) : ob(a, b) ? 1 : 0
}
function rb(a, b) {
  var c = [], d, f;
  for(f in b) {
    b.hasOwnProperty(f) && (f == 0 ? d = b[0] : c.push(new Ja(a, f, b[f])))
  }
  a.wb = new jb(a, d, c);
  a.ac = function() {
    return a.wb
  }
}
;var sb, tb, ub, vb, wb;
function xb() {
  lb.apply(this)
}
z(xb, lb);
xb.prototype.ea = function() {
  return nb(this, 3)
};
function yb() {
  lb.apply(this)
}
z(yb, lb);
rb(xb, {0:{name:"Point", cf:"demosminerva.whiteboard_messages.Point"}, 1:{name:"x", Rd:5, type:Number}, 2:{name:"y", Rd:5, type:Number}, 3:{name:"color", Rd:9, type:String}});
rb(yb, {0:{name:"ClearBoard", cf:"demosminerva.whiteboard_messages.ClearBoard"}});
function zb() {
}
zb.prototype.Nc = function(a, b) {
  return Pa(a) ? this.ob(b) : b
};
zb.prototype.Kd = function(a) {
  new a.zf;
  e(Error("Unimplemented"))
};
zb.prototype.Mc = function(a, b) {
  if(Pa(a)) {
    return this.Kd(a.Bf.wb, b)
  }
  if(!a.Ze) {
    return b
  }
  var c = a.Bf;
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
function Ab() {
}
z(Ab, zb);
Ab.prototype.Kd = function(a, b) {
  var c = new a.zf;
  c.ge = this;
  c.q = b;
  c.Ld = {};
  return c
};
function Bb() {
}
z(Bb, Ab);
Bb.prototype.ob = function(a) {
  for(var b = kb(a.ac()), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    if(ob(a, f.H)) {
      var g = f.H;
      if(f.Ab) {
        c[g] = [];
        for(var h = 0;h < qb(a, f.H);h++) {
          c[g][h] = this.Nc(f, a.get(f, h))
        }
      }else {
        c[g] = this.Nc(f, a.get(f))
      }
    }
  }
  mb(a, function(a, b) {
    c[a] = b
  });
  return c
};
Bb.prototype.Nc = function(a, b) {
  return a.Yb == 8 ? b ? 1 : 0 : zb.prototype.Nc.apply(this, arguments)
};
Bb.prototype.Mc = function(a, b) {
  return a.Yb == 8 ? b === 1 : zb.prototype.Mc.apply(this, arguments)
};
function Cb(a) {
  return v(a) || typeof a == "object" && v(a.call) && v(a.apply)
}
;function Db(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
function Eb() {
}
Eb.prototype.ob = function(a) {
  var b = [];
  Fb(this, a, b);
  return b.join("")
};
function Fb(a, b, c) {
  switch(typeof b) {
    case "string":
      Gb(b, c);
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
          c.push(f), Fb(a, b[g], c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (g = b[f], typeof g != "function" && (c.push(d), Gb(f, c), c.push(":"), Fb(a, g, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var Hb = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\u000b"}, Ib = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Gb(a, b) {
  b.push('"', a.replace(Ib, function(a) {
    if(a in Hb) {
      return Hb[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    b < 16 ? f += "000" : b < 256 ? f += "00" : b < 4096 && (f += "0");
    return Hb[a] = f + b.toString(16)
  }), '"')
}
;function Jb(a, b, c) {
  var d = Va(c, a);
  if(d != -1) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = fa(a);
    if(d == "boolean" || d == "number" || d == "null" || d == "undefined") {
      b.push(String(a))
    }else {
      if(d == "string") {
        Gb(a, b)
      }else {
        if(Cb(a.F)) {
          a.F(b, c)
        }else {
          if(Cb(a.eg)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if(d == "array") {
                d = a.length;
                b.push("[");
                for(var f = "", g = 0;g < d;g++) {
                  b.push(f), Jb(a[g], b, c), f = ", "
                }
                b.push("]")
              }else {
                if(d == "object") {
                  if(ia(a) && typeof a.valueOf == "function") {
                    b.push("new Date(", String(a.valueOf()), ")")
                  }else {
                    for(var d = Sa(a).concat(Ta), f = {}, h = g = 0;h < d.length;) {
                      var j = d[h++], m = ja(j) ? "o" + w(j) : (typeof j).charAt(0) + j;
                      Object.prototype.hasOwnProperty.call(f, m) || (f[m] = !0, d[g++] = j)
                    }
                    d.length = g;
                    b.push("{");
                    f = "";
                    for(h = 0;h < d.length;h++) {
                      g = d[h], Object.prototype.hasOwnProperty.call(a, g) && (j = a[g], b.push(f), Gb(g, b), b.push(": "), Jb(j, b, c), f = ", ")
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
  Jb(a, b, c)
}
function F(a) {
  var b = [];
  E(a, b, i);
  return b.join("")
}
;function Kb(a) {
  if(typeof a.U == "function") {
    a = a.U()
  }else {
    if(ha(a) || t(a)) {
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
function Lb(a) {
  if(typeof a.W == "function") {
    return a.W()
  }
  if(t(a)) {
    return a.split("")
  }
  if(ha(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Ra(a)
}
function Mb(a) {
  if(typeof a.Ea == "function") {
    return a.Ea()
  }
  if(typeof a.W != "function") {
    if(ha(a) || t(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return Sa(a)
  }
}
function Nb(a, b, c) {
  if(typeof a.forEach == "function") {
    a.forEach(b, c)
  }else {
    if(ha(a) || t(a)) {
      Wa(a, b, c)
    }else {
      for(var d = Mb(a), f = Lb(a), g = f.length, h = 0;h < g;h++) {
        b.call(c, f[h], d && d[h], a)
      }
    }
  }
}
function Ob(a, b) {
  if(typeof a.every == "function") {
    return a.every(b, i)
  }
  if(ha(a) || t(a)) {
    return Za(a, b, i)
  }
  for(var c = Mb(a), d = Lb(a), f = d.length, g = 0;g < f;g++) {
    if(!b.call(i, d[g], c && c[g], a)) {
      return!1
    }
  }
  return!0
}
;function Pb(a, b) {
  this.p = {};
  this.h = [];
  var c = arguments.length;
  if(c > 1) {
    c % 2 && e(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.yd(a)
  }
}
n = Pb.prototype;
n.g = 0;
n.Je = 0;
n.U = l("g");
n.W = function() {
  Qb(this);
  for(var a = [], b = 0;b < this.h.length;b++) {
    a.push(this.p[this.h[b]])
  }
  return a
};
n.Ea = function() {
  Qb(this);
  return this.h.concat()
};
n.ba = function(a) {
  return Rb(this.p, a)
};
n.Fc = function(a) {
  for(var b = 0;b < this.h.length;b++) {
    var c = this.h[b];
    if(Rb(this.p, c) && this.p[c] == a) {
      return!0
    }
  }
  return!1
};
n.n = function(a, b) {
  if(this === a) {
    return!0
  }
  if(this.g != a.U()) {
    return!1
  }
  var c = b || Sb;
  Qb(this);
  for(var d, f = 0;d = this.h[f];f++) {
    if(!c(this.get(d), a.get(d))) {
      return!1
    }
  }
  return!0
};
function Sb(a, b) {
  return a === b
}
n.Pa = function() {
  return this.g == 0
};
n.clear = function() {
  this.p = {};
  this.Je = this.g = this.h.length = 0
};
n.remove = function(a) {
  return Rb(this.p, a) ? (delete this.p[a], this.g--, this.Je++, this.h.length > 2 * this.g && Qb(this), !0) : !1
};
function Qb(a) {
  if(a.g != a.h.length) {
    for(var b = 0, c = 0;b < a.h.length;) {
      var d = a.h[b];
      Rb(a.p, d) && (a.h[c++] = d);
      b++
    }
    a.h.length = c
  }
  if(a.g != a.h.length) {
    for(var f = {}, c = b = 0;b < a.h.length;) {
      d = a.h[b], Rb(f, d) || (a.h[c++] = d, f[d] = 1), b++
    }
    a.h.length = c
  }
}
n.get = function(a, b) {
  return Rb(this.p, a) ? this.p[a] : b
};
n.set = function(a, b) {
  Rb(this.p, a) || (this.g++, this.h.push(a), this.Je++);
  this.p[a] = b
};
n.yd = function(a) {
  var b;
  a instanceof Pb ? (b = a.Ea(), a = a.W()) : (b = Sa(a), a = Ra(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
n.L = function() {
  return new Pb(this)
};
function Tb(a) {
  Qb(a);
  for(var b = {}, c = 0;c < a.h.length;c++) {
    var d = a.h[c];
    b[d] = a.p[d]
  }
  return b
}
function Rb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function Ub(a) {
  var b = fa(a);
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
;function Vb(a, b) {
  this.rb = a;
  this.nb = b
}
Vb.prototype.n = function(a) {
  return a instanceof Vb && this.rb == a.rb && this.nb.join(",") == a.nb
};
Vb.prototype.F = function(a, b) {
  a.push("new SACK(", String(this.rb), ", ");
  E(this.nb, a, b);
  a.push(")")
};
function Wb() {
  this.z = new Pb
}
n = Wb.prototype;
n.vb = -1;
n.w = 0;
n.append = function(a) {
  var b = Ub(a);
  this.z.set(this.vb + 1, [a, b]);
  this.vb += 1;
  this.w += b
};
n.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
n.F = function(a) {
  a.push("<Queue with ", String(this.z.U()), " item(s), counter=#", String(this.vb), ", size=", String(this.w), ">")
};
function Xb(a) {
  Qb(a.z);
  hb(a.z.h);
  return a.z.h
}
function Yb() {
  this.Za = new Pb
}
Yb.prototype.Cb = -1;
Yb.prototype.w = 0;
function Zb(a) {
  var b = a.Za.Ea();
  hb(b);
  return new Vb(a.Cb, b)
}
var $b = {};
function ac() {
  return!0
}
;var bc, cc, dc, ec, fc;
function gc() {
  return o.navigator ? o.navigator.userAgent : k
}
fc = ec = dc = cc = bc = !1;
var hc;
if(hc = gc()) {
  var ic = o.navigator;
  bc = hc.indexOf("Opera") == 0;
  cc = !bc && hc.indexOf("MSIE") != -1;
  ec = (dc = !bc && hc.indexOf("WebKit") != -1) && hc.indexOf("Mobile") != -1;
  fc = !bc && !dc && ic.product == "Gecko"
}
var jc = bc, G = cc, kc = fc, H = dc, lc = ec, mc = o.navigator, nc = (mc && mc.platform || "").indexOf("Mac") != -1, oc;
a: {
  var pc = "", qc;
  if(jc && o.opera) {
    var rc = o.opera.version, pc = typeof rc == "function" ? rc() : rc
  }else {
    if(kc ? qc = /rv\:([^\);]+)(\)|;)/ : G ? qc = /MSIE\s+([^\);]+)(\)|;)/ : H && (qc = /WebKit\/(\S+)/), qc) {
      var sc = qc.exec(gc()), pc = sc ? sc[1] : ""
    }
  }
  if(G) {
    var tc, uc = o.document;
    tc = uc ? uc.documentMode : i;
    if(tc > parseFloat(pc)) {
      oc = String(tc);
      break a
    }
  }
  oc = pc
}
var vc = {};
function I(a) {
  return vc[a] || (vc[a] = Ca(oc, a) >= 0)
}
;var wc;
var xc = {nh:"click", sh:"dblclick", Nh:"mousedown", Rh:"mouseup", Qh:"mouseover", Ph:"mouseout", Oh:"mousemove", ai:"selectstart", Hh:"keypress", Gh:"keydown", Ih:"keyup", lh:"blur", Ah:"focus", th:"deactivate", Bh:G ? "focusin" : "DOMFocusIn", Ch:G ? "focusout" : "DOMFocusOut", mh:"change", $h:"select", bi:"submit", Fh:"input", Wh:"propertychange", xh:"dragstart", uh:"dragenter", wh:"dragover", vh:"dragleave", yh:"drop", fi:"touchstart", ei:"touchmove", di:"touchend", ci:"touchcancel", ph:"contextmenu", 
zh:"error", Eh:"help", Jh:"load", Kh:"losecapture", Xh:"readystatechange", Yh:"resize", Zh:"scroll", gi:"unload", Dh:"hashchange", Sh:"pagehide", Th:"pageshow", Vh:"popstate", qh:"copy", Uh:"paste", rh:"cut", Mh:"message", oh:"connect"};
var yc = !G || I("9"), zc = G && !I("8");
function J() {
}
J.prototype.qa = !1;
J.prototype.f = function() {
  if(!this.qa) {
    this.qa = !0, this.c()
  }
};
J.prototype.c = function() {
  Ac(this.mi)
};
function Ac(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? Ac.apply(k, d) : d && typeof d.f == "function" && d.f()
  }
}
;function Bc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
z(Bc, J);
n = Bc.prototype;
n.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
n.lb = !1;
n.pc = !0;
n.stopPropagation = function() {
  this.lb = !0
};
n.preventDefault = function() {
  this.pc = !1
};
function Cc(a) {
  a.stopPropagation()
}
;var Dc = new Function("a", "return a");
function Ec(a, b) {
  a && this.ec(a, b)
}
z(Ec, Bc);
var Fc = [1, 4, 2];
n = Ec.prototype;
n.target = k;
n.relatedTarget = k;
n.offsetX = 0;
n.offsetY = 0;
n.clientX = 0;
n.clientY = 0;
n.screenX = 0;
n.screenY = 0;
n.button = 0;
n.keyCode = 0;
n.charCode = 0;
n.ctrlKey = !1;
n.altKey = !1;
n.shiftKey = !1;
n.metaKey = !1;
n.Og = !1;
n.Ba = k;
n.ec = function(a, b) {
  var c = this.type = a.type;
  Bc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(kc) {
      var f;
      a: {
        try {
          Dc(d.nodeName);
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
  this.Og = nc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Ba = a;
  delete this.pc;
  delete this.lb
};
function Gc(a) {
  return yc ? a.Ba.button == 0 : a.type == "click" ? !0 : !!(a.Ba.button & Fc[0])
}
n.stopPropagation = function() {
  Ec.d.stopPropagation.call(this);
  this.Ba.stopPropagation ? this.Ba.stopPropagation() : this.Ba.cancelBubble = !0
};
n.preventDefault = function() {
  Ec.d.preventDefault.call(this);
  var a = this.Ba;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, zc) {
      try {
        if(a.ctrlKey || a.keyCode >= 112 && a.keyCode <= 123) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
n.c = function() {
  Ec.d.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Ba = k
};
function Hc() {
}
var Ic = 0;
n = Hc.prototype;
n.key = 0;
n.mb = !1;
n.Bd = !1;
n.ec = function(a, b, c, d, f, g) {
  v(a) ? this.rf = !0 : a && a.handleEvent && v(a.handleEvent) ? this.rf = !1 : e(Error("Invalid listener argument"));
  this.Fb = a;
  this.Jf = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Uc = g;
  this.Bd = !1;
  this.key = ++Ic;
  this.mb = !1
};
n.handleEvent = function(a) {
  return this.rf ? this.Fb.call(this.Uc || this.src, a) : this.Fb.handleEvent.call(this.Fb, a)
};
var Jc, Kc = (Jc = "ScriptEngine" in o && o.ScriptEngine() == "JScript") ? o.ScriptEngineMajorVersion() + "." + o.ScriptEngineMinorVersion() + "." + o.ScriptEngineBuildVersion() : "0";
function K(a, b) {
  this.vf = b;
  this.eb = [];
  a > this.vf && e(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.eb.push(this.ya ? this.ya() : {})
  }
}
z(K, J);
K.prototype.ya = k;
K.prototype.$e = k;
K.prototype.getObject = function() {
  return this.eb.length ? this.eb.pop() : this.ya ? this.ya() : {}
};
function Lc(a, b) {
  a.eb.length < a.vf ? a.eb.push(b) : Mc(a, b)
}
function Mc(a, b) {
  if(a.$e) {
    a.$e(b)
  }else {
    if(ja(b)) {
      if(v(b.f)) {
        b.f()
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
    Mc(this, a.pop())
  }
  delete this.eb
};
var Nc, Oc, Pc, Qc, Rc, Sc, Tc, Uc, Vc, Wc, Xc;
(function() {
  function a() {
    return{g:0, la:0}
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
    return new Hc
  }
  function f() {
    return new Ec
  }
  var g = Jc && !(Ca(Kc, "5.7") >= 0), h;
  Sc = function(a) {
    h = a
  };
  if(g) {
    Nc = function() {
      return j.getObject()
    };
    Oc = function(a) {
      Lc(j, a)
    };
    Pc = function() {
      return m.getObject()
    };
    Qc = function(a) {
      Lc(m, a)
    };
    Rc = function() {
      return p.getObject()
    };
    Tc = function() {
      Lc(p, c())
    };
    Uc = function() {
      return A.getObject()
    };
    Vc = function(a) {
      Lc(A, a)
    };
    Wc = function() {
      return r.getObject()
    };
    Xc = function(a) {
      Lc(r, a)
    };
    var j = new K(0, 600);
    j.ya = a;
    var m = new K(0, 600);
    m.ya = b;
    var p = new K(0, 600);
    p.ya = c;
    var A = new K(0, 600);
    A.ya = d;
    var r = new K(0, 600);
    r.ya = f
  }else {
    Nc = a, Oc = q, Pc = b, Qc = q, Rc = c, Tc = q, Uc = d, Vc = q, Wc = f, Xc = q
  }
})();
var Yc = {}, L = {}, Zc = {}, $c = {};
function M(a, b, c, d, f) {
  if(b) {
    if(s(b)) {
      for(var g = 0;g < b.length;g++) {
        M(a, b[g], c, d, f)
      }
      return k
    }else {
      var d = !!d, h = L;
      b in h || (h[b] = Nc());
      h = h[b];
      d in h || (h[d] = Nc(), h.g++);
      var h = h[d], j = w(a), m;
      h.la++;
      if(h[j]) {
        m = h[j];
        for(g = 0;g < m.length;g++) {
          if(h = m[g], h.Fb == c && h.Uc == f) {
            if(h.mb) {
              break
            }
            return m[g].key
          }
        }
      }else {
        m = h[j] = Pc(), h.g++
      }
      g = Rc();
      g.src = a;
      h = Uc();
      h.ec(c, g, a, b, d, f);
      c = h.key;
      g.key = c;
      m.push(h);
      Yc[c] = h;
      Zc[j] || (Zc[j] = Pc());
      Zc[j].push(h);
      a.addEventListener ? (a == o || !a.Hd) && a.addEventListener(b, g, d) : a.attachEvent(b in $c ? $c[b] : $c[b] = "on" + b, g);
      return c
    }
  }else {
    e(Error("Invalid event type"))
  }
}
function ad(a, b, c, d, f) {
  if(s(b)) {
    for(var g = 0;g < b.length;g++) {
      ad(a, b[g], c, d, f)
    }
    return k
  }
  a = M(a, b, c, d, f);
  Yc[a].Bd = !0;
  return a
}
function bd(a, b, c, d, f) {
  if(s(b)) {
    for(var g = 0;g < b.length;g++) {
      bd(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = cd(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Fb == c && a[g].capture == d && a[g].Uc == f) {
          dd(a[g].key);
          break
        }
      }
    }
  }
}
function dd(a) {
  if(Yc[a]) {
    var b = Yc[a];
    if(!b.mb) {
      var c = b.src, d = b.type, f = b.Jf, g = b.capture;
      c.removeEventListener ? (c == o || !c.Hd) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in $c ? $c[d] : $c[d] = "on" + d, f);
      c = w(c);
      f = L[d][g][c];
      if(Zc[c]) {
        var h = Zc[c];
        bb(h, b);
        h.length == 0 && delete Zc[c]
      }
      b.mb = !0;
      f.Df = !0;
      ed(d, g, c, f);
      delete Yc[a]
    }
  }
}
function ed(a, b, c, d) {
  if(!d.ad && d.Df) {
    for(var f = 0, g = 0;f < d.length;f++) {
      if(d[f].mb) {
        var h = d[f].Jf;
        h.src = k;
        Tc(h);
        Vc(d[f])
      }else {
        f != g && (d[g] = d[f]), g++
      }
    }
    d.length = g;
    d.Df = !1;
    g == 0 && (Qc(d), delete L[a][b][c], L[a][b].g--, L[a][b].g == 0 && (Oc(L[a][b]), delete L[a][b], L[a].g--), L[a].g == 0 && (Oc(L[a]), delete L[a]))
  }
}
function fd(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Qa(Zc, function(a) {
      for(var f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          dd(g.key), c++
        }
      }
    })
  }else {
    if(a = w(a), Zc[a]) {
      for(var a = Zc[a], f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          dd(g.key), c++
        }
      }
    }
  }
}
function cd(a, b, c) {
  var d = L;
  return b in d && (d = d[b], c in d && (d = d[c], a = w(a), d[a])) ? d[a] : k
}
function gd(a, b, c, d, f) {
  var g = 1, b = w(b);
  if(a[b]) {
    a.la--;
    a = a[b];
    a.ad ? a.ad++ : a.ad = 1;
    try {
      for(var h = a.length, j = 0;j < h;j++) {
        var m = a[j];
        m && !m.mb && (g &= hd(m, f) !== !1)
      }
    }finally {
      a.ad--, ed(c, d, b, a)
    }
  }
  return Boolean(g)
}
function hd(a, b) {
  var c = a.handleEvent(b);
  a.Bd && dd(a.key);
  return c
}
Sc(function(a, b) {
  if(!Yc[a]) {
    return!0
  }
  var c = Yc[a], d = c.type, f = L;
  if(!(d in f)) {
    return!0
  }
  var f = f[d], g, h;
  wc === i && (wc = G && !o.addEventListener);
  if(wc) {
    g = b || da("window.event");
    var j = !0 in f, m = !1 in f;
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
          }catch(A) {
            p = !0
          }
        }
        if(p || g.returnValue == i) {
          g.returnValue = !0
        }
      }
    }
    p = Wc();
    p.ec(g, this);
    g = !0;
    try {
      if(j) {
        for(var r = Pc(), u = p.currentTarget;u;u = u.parentNode) {
          r.push(u)
        }
        h = f[!0];
        h.la = h.g;
        for(var B = r.length - 1;!p.lb && B >= 0 && h.la;B--) {
          p.currentTarget = r[B], g &= gd(h, r[B], d, !0, p)
        }
        if(m) {
          h = f[!1];
          h.la = h.g;
          for(B = 0;!p.lb && B < r.length && h.la;B++) {
            p.currentTarget = r[B], g &= gd(h, r[B], d, !1, p)
          }
        }
      }else {
        g = hd(c, p)
      }
    }finally {
      if(r) {
        r.length = 0, Qc(r)
      }
      p.f();
      Xc(p)
    }
    return g
  }
  d = new Ec(b, this);
  try {
    g = hd(c, d)
  }finally {
    d.f()
  }
  return g
});
var id = 0;
function jd() {
}
z(jd, J);
n = jd.prototype;
n.Hd = !0;
n.dd = k;
n.ve = aa("dd");
n.addEventListener = function(a, b, c, d) {
  M(this, a, b, c, d)
};
n.removeEventListener = function(a, b, c, d) {
  bd(this, a, b, c, d)
};
n.dispatchEvent = function(a) {
  var b = a.type || a, c = L;
  if(b in c) {
    if(t(a)) {
      a = new Bc(a, this)
    }else {
      if(a instanceof Bc) {
        a.target = a.target || this
      }else {
        var d = a, a = new Bc(b, this);
        Ua(a, d)
      }
    }
    var d = 1, f, c = c[b], b = !0 in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.dd) {
        f.push(g)
      }
      g = c[!0];
      g.la = g.g;
      for(var h = f.length - 1;!a.lb && h >= 0 && g.la;h--) {
        a.currentTarget = f[h], d &= gd(g, f[h], a.type, !0, a) && a.pc != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.la = g.g, b) {
        for(h = 0;!a.lb && h < f.length && g.la;h++) {
          a.currentTarget = f[h], d &= gd(g, f[h], a.type, !1, a) && a.pc != !1
        }
      }else {
        for(f = this;!a.lb && f && g.la;f = f.dd) {
          a.currentTarget = f, d &= gd(g, f, a.type, !1, a) && a.pc != !1
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
n.c = function() {
  jd.d.c.call(this);
  fd(this);
  this.dd = k
};
function kd(a, b) {
  this.Xc = a || 1;
  this.vc = b || ld;
  this.Ad = x(this.$g, this);
  this.fe = y()
}
z(kd, jd);
kd.prototype.enabled = !1;
var ld = o.window;
n = kd.prototype;
n.oa = k;
n.$g = function() {
  if(this.enabled) {
    var a = y() - this.fe;
    if(a > 0 && a < this.Xc * 0.8) {
      this.oa = this.vc.setTimeout(this.Ad, this.Xc - a)
    }else {
      if(this.dispatchEvent(md), this.enabled) {
        this.oa = this.vc.setTimeout(this.Ad, this.Xc), this.fe = y()
      }
    }
  }
};
n.start = function() {
  this.enabled = !0;
  if(!this.oa) {
    this.oa = this.vc.setTimeout(this.Ad, this.Xc), this.fe = y()
  }
};
n.stop = function() {
  this.enabled = !1;
  if(this.oa) {
    this.vc.clearTimeout(this.oa), this.oa = k
  }
};
n.c = function() {
  kd.d.c.call(this);
  this.stop();
  delete this.vc
};
var md = "tick";
id++;
id++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function nd(a, b) {
  this.Cc = [];
  this.Ne = a;
  this.We = b || k
}
n = nd.prototype;
n.cb = !1;
n.bc = !1;
n.kc = 0;
n.Ae = !1;
n.kg = !1;
n.cancel = function() {
  if(this.cb) {
    this.oc instanceof nd && this.oc.cancel()
  }else {
    if(this.Ne ? this.Ne.call(this.We, this) : this.Ae = !0, !this.cb) {
      var a = new od(this);
      pd(this);
      qd(this, !1, a)
    }
  }
};
n.Qe = function(a, b) {
  qd(this, a, b);
  this.kc--;
  this.kc == 0 && this.cb && rd(this)
};
function qd(a, b, c) {
  a.cb = !0;
  a.oc = c;
  a.bc = !b;
  rd(a)
}
function pd(a) {
  if(a.cb) {
    a.Ae || e(new sd(a)), a.Ae = !1
  }
}
function td(a, b) {
  pd(a);
  qd(a, !0, b)
}
function ud(a, b) {
  vd(a, b, k, i)
}
function vd(a, b, c, d) {
  a.Cc.push([b, c, d]);
  a.cb && rd(a)
}
function wd(a, b) {
  vd(a, b, b, i)
}
function xd(a) {
  return Ya(a.Cc, function(a) {
    return v(a[1])
  })
}
function rd(a) {
  a.Ge && a.cb && xd(a) && (o.clearTimeout(a.Ge), delete a.Ge);
  for(var b = a.oc, c = !1, d = !1;a.Cc.length && a.kc == 0;) {
    var f = a.Cc.shift(), g = f[0], h = f[1], f = f[2];
    if(g = a.bc ? h : g) {
      try {
        var j = g.call(f || a.We, b);
        if(ga(j)) {
          a.bc = a.bc && (j == b || j instanceof Error), a.oc = b = j
        }
        b instanceof nd && (d = !0, a.kc++)
      }catch(m) {
        b = m, a.bc = !0, xd(a) || (c = !0)
      }
    }
  }
  a.oc = b;
  if(d && a.kc) {
    vd(b, x(a.Qe, a, !0), x(a.Qe, a, !1)), b.kg = !0
  }
  if(c) {
    a.Ge = o.setTimeout(function() {
      e(b)
    }, 0)
  }
}
function yd(a) {
  var b = new nd;
  td(b, a);
  return b
}
function zd(a) {
  var b = new nd;
  pd(b);
  qd(b, !1, a);
  return b
}
function sd(a) {
  C.call(this);
  this.ng = a
}
z(sd, C);
sd.prototype.message = "Already called";
function od(a) {
  C.call(this);
  this.ng = a
}
z(od, C);
od.prototype.message = "Deferred was cancelled";
function Ad(a) {
  this.M = a;
  this.Jc = [];
  this.af = [];
  this.jg = x(this.eh, this)
}
Ad.prototype.oa = k;
function Bd(a, b, c, d) {
  a.Jc.push([b, c, d]);
  if(a.oa == k) {
    a.oa = a.M.setTimeout(a.jg, 0)
  }
}
Ad.prototype.eh = function() {
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
    a = this.af;
    this.af = [];
    for(b = 0;b < a.length;b++) {
      td(a[b], k)
    }
  }
};
new Ad(o.window);
function Cd(a, b) {
  switch(fa(b)) {
    case "string":
      a.push("<string>", va(b), "</string>");
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
        a.push('<property id="', d, '">'), Cd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if(typeof b.getFullYear == "function") {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && fa(b[c]) != "function" && (a.push('<property id="', va(c), '">'), Cd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function Dd(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, f = arguments;
  d.push("<arguments>");
  for(var g = f.length, h = 1;h < g;h++) {
    Cd(d, f[h])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;function Ed() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ y()).toString(36)
}
function Fd(a) {
  return a.substr(0, a.length - 1)
}
var Gd = /^(0|[1-9]\d*)$/, Hd = /^(0|\-?[1-9]\d*)$/;
function Id(a) {
  var b = Jd;
  return Gd.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function Kd(a) {
  this.p = new Pb;
  a && this.yd(a)
}
function Ld(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + w(a) : b.substr(0, 1) + a
}
n = Kd.prototype;
n.U = function() {
  return this.p.U()
};
n.add = function(a) {
  this.p.set(Ld(a), a)
};
n.yd = function(a) {
  for(var a = Lb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
n.qe = function(a) {
  for(var a = Lb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
n.remove = function(a) {
  return this.p.remove(Ld(a))
};
n.clear = function() {
  this.p.clear()
};
n.Pa = function() {
  return this.p.Pa()
};
n.contains = function(a) {
  return this.p.ba(Ld(a))
};
n.W = function() {
  return this.p.W()
};
n.L = function() {
  return new Kd(this)
};
n.n = function(a) {
  return this.U() == Kb(a) && Md(this, a)
};
function Md(a, b) {
  var c = Kb(b);
  if(a.U() > c) {
    return!1
  }
  !(b instanceof Kd) && c > 5 && (b = new Kd(b));
  return Ob(a, function(a) {
    if(typeof b.contains == "function") {
      a = b.contains(a)
    }else {
      if(typeof b.Fc == "function") {
        a = b.Fc(a)
      }else {
        if(ha(b) || t(b)) {
          a = $a(b, a)
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
;function Nd(a) {
  return Od(a || arguments.callee.caller, [])
}
function Od(a, b) {
  var c = [];
  if($a(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(Pd(a) + "(");
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
            g = (g = Pd(g)) ? g : "[fn]";
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
        c.push(Od(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Pd(a) {
  if(Qd[a]) {
    return Qd[a]
  }
  a = String(a);
  if(!Qd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Qd[a] = b ? b[1] : "[Anonymous]"
  }
  return Qd[a]
}
var Qd = {};
function Rd(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
Rd.prototype.Ug = 0;
Rd.prototype.Pd = k;
Rd.prototype.Od = k;
var Sd = 0;
Rd.prototype.reset = function(a, b, c, d, f) {
  this.Ug = typeof f == "number" ? f : Sd++;
  this.Vf = d || y();
  this.Eb = a;
  this.Af = b;
  this.Gg = c;
  delete this.Pd;
  delete this.Od
};
Rd.prototype.md = aa("Eb");
function Td(a) {
  this.je = a
}
Td.prototype.$ = k;
Td.prototype.Eb = k;
Td.prototype.O = k;
Td.prototype.dc = k;
function Ud(a, b) {
  this.name = a;
  this.value = b
}
Ud.prototype.toString = l("name");
var Vd = new Ud("OFF", Infinity), Wd = new Ud("SHOUT", 1200), Xd = new Ud("SEVERE", 1E3), Yd = new Ud("WARNING", 900), Zd = new Ud("INFO", 800), $d = new Ud("CONFIG", 700), ae = new Ud("FINE", 500), be = new Ud("FINEST", 300), ce = new Ud("ALL", 0);
n = Td.prototype;
n.getParent = l("$");
n.md = aa("Eb");
function de(a) {
  if(a.Eb) {
    return a.Eb
  }
  if(a.$) {
    return de(a.$)
  }
  Ia("Root logger has no level set.");
  return k
}
n.log = function(a, b, c) {
  if(a.value >= de(this).value) {
    a = this.ug(a, b, c);
    o.console && o.console.markTimeline && o.console.markTimeline("log:" + a.Af);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.dc) {
        for(var f = 0, g = i;g = c.dc[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
n.ug = function(a, b, c) {
  var d = new Rd(a, String(b), this.je);
  if(c) {
    d.Pd = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var h;
      var j = da("window.location.href");
      if(t(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var m, p, A = !1;
        try {
          m = c.lineNumber || c.xi || "Not available"
        }catch(r) {
          m = "Not available", A = !0
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || j
        }catch(u) {
          p = "Not available", A = !0
        }
        h = A || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:m, fileName:p, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + va(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + va(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + va(Nd(g) + "-> ")
    }catch(B) {
      f = "Exception trying to expose exception! You win, we lose. " + B
    }
    d.Od = f
  }
  return d
};
function ee(a, b) {
  a.log(Xd, b, i)
}
function N(a, b) {
  a.log(Yd, b, i)
}
n.info = function(a, b) {
  this.log(Zd, a, b)
};
function O(a, b) {
  a.log(ae, b, i)
}
function P(a, b) {
  a.log(be, b, i)
}
var fe = {}, ge = k;
function he() {
  ge || (ge = new Td(""), fe[""] = ge, ge.md($d))
}
function ie() {
  he();
  return ge
}
function Q(a) {
  he();
  var b;
  if(!(b = fe[a])) {
    b = new Td(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Q(a.substr(0, c));
    if(!c.O) {
      c.O = {}
    }
    c.O[d] = b;
    b.$ = c;
    fe[a] = b
  }
  return b
}
;function je(a, b) {
  this.R = "_" + Ed();
  this.td = a;
  this.Ta = b;
  this.Ya = a.Ya
}
z(je, J);
n = je.prototype;
n.jb = !0;
n.Gc = !1;
n.a = Q("cw.net.FlashSocket");
n.F = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.R);
  a.push("'>")
};
function ke(a, b, c) {
  b == "frames" ? (a = a.Ta, le(a.K), me(a.K, c)) : b == "stillreceiving" ? (c = a.Ta, P(c.a, "onstillreceiving"), le(c.K)) : b == "connect" ? (c = a.Ta, c.a.info("onconnect"), le(c.K), a = c.Rb, c.Rb = k, a.length && (P(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.pd.Ac(a))) : b == "close" ? (a.jb = !1, a.f()) : b == "ioerror" ? (a.jb = !1, b = a.Ta, N(b.a, "onioerror: " + F(c)), ne(b.K, !1), a.f()) : b == "securityerror" ? (a.jb = !1, b = a.Ta, N(b.a, "onsecurityerror: " + 
  F(c)), ne(b.K, !1), a.f()) : e(Error("bad event: " + b))
}
n.Ed = function(a, b) {
  try {
    var c = this.Ya.CallFunction(Dd("__FC_connect", this.R, a, b, "<int32/>\n"))
  }catch(d) {
    ee(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message);
    this.Gc = !0;
    this.jb = !1;
    this.f();
    return
  }
  c != '"OK"' && e(Error("__FC_connect failed? ret: " + c))
};
n.Ac = function(a) {
  try {
    var b = this.Ya.CallFunction(Dd("__FC_writeFrames", this.R, a))
  }catch(c) {
    ee(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message);
    this.Gc = !0;
    this.jb = !1;
    this.f();
    return
  }
  b != '"OK"' && (b == '"no such instance"' ? (N(this.a, "Flash no longer knows of " + this.R + "; disposing."), this.f()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
n.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.jb);
  je.d.c.call(this);
  var a = this.Ya;
  delete this.Ya;
  if(this.jb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(Dd("__FC_close", this.R)))
    }catch(b) {
      ee(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Gc = !0
    }
  }
  if(this.Gc) {
    a = this.Ta, N(a.a, "oncrash"), ne(a.K, !0)
  }else {
    this.Ta.onclose()
  }
  delete this.Ta;
  delete this.td.yb[this.R]
};
function oe(a, b) {
  this.J = a;
  this.Ya = b;
  this.yb = {};
  this.Cd = "__FST_" + Ed();
  o[this.Cd] = x(this.qg, this);
  var c = b.CallFunction(Dd("__FC_setCallbackFunc", this.Cd));
  c != '"OK"' && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
z(oe, J);
n = oe.prototype;
n.a = Q("cw.net.FlashSocketTracker");
n.F = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  E(this.yb, a, b);
  a.push(">")
};
n.Gd = function(a) {
  a = new je(this, a);
  return this.yb[a.R] = a
};
n.og = function(a, b, c, d) {
  var f = this.yb[a];
  f ? b == "frames" && d ? (ke(f, "ioerror", "FlashConnector hadError while handling data."), f.f()) : ke(f, b, c) : N(this.a, "Cannot dispatch because we have no instance: " + F([a, b, c, d]))
};
n.qg = function(a, b, c, d) {
  try {
    Bd(this.J, this.og, this, [a, b, c, d])
  }catch(f) {
    o.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
n.c = function() {
  oe.d.c.call(this);
  for(var a = Ra(this.yb);a.length;) {
    a.pop().f()
  }
  delete this.yb;
  delete this.Ya;
  o[this.Cd] = i
};
function pe(a) {
  this.K = a;
  this.Rb = []
}
z(pe, J);
n = pe.prototype;
n.a = Q("cw.net.FlashSocketConduit");
n.Ac = function(a) {
  this.Rb ? (P(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Rb.push.apply(this.Rb, a)) : (P(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.pd.Ac(a))
};
n.Ed = function(a, b) {
  this.pd.Ed(a, b)
};
n.onclose = function() {
  this.a.info("onclose");
  ne(this.K, !1)
};
n.c = function() {
  this.a.info("in disposeInternal.");
  pe.d.c.call(this);
  this.pd.f();
  delete this.K
};
function qe(a) {
  return a * Math.PI / 180
}
;var Jd = Math.pow(2, 53);
var re = {eg:ba("<cw.eq.Wildcard>")};
function se(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function te(a, b, c) {
  var d = fa(a), f = fa(b);
  if(a == re || b == re) {
    return!0
  }else {
    if(a != k && typeof a.n == "function") {
      return c && c.push("running custom equals function on left object"), a.n(b, c)
    }else {
      if(b != k && typeof b.n == "function") {
        return c && c.push("running custom equals function on right object"), b.n(a, c)
      }else {
        if(se(d) || se(f)) {
          a = a === b
        }else {
          if(a instanceof RegExp && b instanceof RegExp) {
            a = a.toString() === b.toString()
          }else {
            if(ia(a) && ia(b)) {
              a = a.valueOf() === b.valueOf()
            }else {
              if(d == "array" && f == "array") {
                a: {
                  if(c && c.push("descending into array"), a.length != b.length) {
                    c && c.push("array length mismatch: " + a.length + ", " + b.length), a = !1
                  }else {
                    d = 0;
                    for(f = a.length;d < f;d++) {
                      if(!te(a[d], b[d], c)) {
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
                if(a.dg == ac && b.dg == ac) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = !1;
                        break a
                      }
                      if(!te(a[g], b[g], c)) {
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
  C.call(this, a)
}
z(R, C);
R.prototype.name = "cw.net.InvalidFrame";
function ue() {
  var a = [];
  this.ka(a);
  return a.join("")
}
function ve() {
}
ve.prototype.n = function(a, b) {
  return!(a instanceof ve) ? !1 : te(we(this), we(a), b)
};
ve.prototype.F = function(a, b) {
  a.push("<HelloFrame properties=");
  E(we(this), a, b);
  a.push(">")
};
function we(a) {
  return[a.Nb, a.Hf, a.mf, a.Lf, a.uc, a.De, a.Cf, a.yf, a.ie, a.wf, a.$f, a.Uf, a.na, a.$c]
}
ve.prototype.da = ue;
ve.prototype.ka = function(a) {
  var b = {};
  b.tnum = this.Nb;
  b.ver = this.Hf;
  b.format = this.mf;
  b["new"] = this.Lf;
  b.id = this.uc;
  b.ming = this.De;
  b.pad = this.Cf;
  b.maxb = this.yf;
  if(ga(this.ie)) {
    b.maxt = this.ie
  }
  b.maxia = this.wf;
  b.tcpack = this.$f;
  b.eeds = this.Uf;
  b.sack = this.na instanceof Vb ? Fd((new xe(this.na)).da()) : this.na;
  b.seenack = this.$c instanceof Vb ? Fd((new xe(this.$c)).da()) : this.$c;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new Eb).ob(b), "H")
};
function ye(a) {
  this.Mb = a
}
ye.prototype.n = function(a) {
  return a instanceof ye && this.Mb == a.Mb
};
ye.prototype.F = function(a, b) {
  a.push("new StringFrame(");
  E(this.Mb, a, b);
  a.push(")")
};
ye.prototype.da = ue;
ye.prototype.ka = function(a) {
  a.push(this.Mb, " ")
};
function ze(a) {
  this.Ec = a
}
ze.prototype.n = function(a) {
  return a instanceof ze && this.Ec == a.Ec
};
ze.prototype.F = function(a, b) {
  a.push("new CommentFrame(");
  E(this.Ec, a, b);
  a.push(")")
};
ze.prototype.da = ue;
ze.prototype.ka = function(a) {
  a.push(this.Ec, "^")
};
function Ae(a) {
  this.sc = a
}
Ae.prototype.n = function(a) {
  return a instanceof Ae && this.sc == a.sc
};
Ae.prototype.F = function(a) {
  a.push("new SeqNumFrame(", String(this.sc), ")")
};
Ae.prototype.da = ue;
Ae.prototype.ka = function(a) {
  a.push(String(this.sc), "N")
};
function Be(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return k
  }
  a: {
    var c = b[1], a = Jd;
    if(Hd.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
      var g = Id(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Vb(a, c)
}
function xe(a) {
  this.na = a
}
xe.prototype.n = function(a, b) {
  return a instanceof xe && this.na.n(a.na, b)
};
xe.prototype.F = function(a, b) {
  a.push("new SackFrame(");
  E(this.na, a, b);
  a.push(")")
};
xe.prototype.da = ue;
xe.prototype.ka = function(a) {
  var b = this.na;
  a.push(b.nb.join(","), "|", String(b.rb));
  a.push("A")
};
function Ce(a) {
  this.hc = a
}
Ce.prototype.n = function(a, b) {
  return a instanceof Ce && this.hc.n(a.hc, b)
};
Ce.prototype.F = function(a, b) {
  a.push("new StreamStatusFrame(");
  E(this.hc, a, b);
  a.push(")")
};
Ce.prototype.da = ue;
Ce.prototype.ka = function(a) {
  var b = this.hc;
  a.push(b.nb.join(","), "|", String(b.rb));
  a.push("T")
};
function De() {
}
De.prototype.F = function(a) {
  a.push("new StreamCreatedFrame()")
};
De.prototype.n = function(a) {
  return a instanceof De
};
De.prototype.da = ue;
De.prototype.ka = function(a) {
  a.push("C")
};
function Ee() {
}
Ee.prototype.F = function(a) {
  a.push("new YouCloseItFrame()")
};
Ee.prototype.n = function(a) {
  return a instanceof Ee
};
Ee.prototype.da = ue;
Ee.prototype.ka = function(a) {
  a.push("Y")
};
function Fe(a, b) {
  this.mc = a;
  this.Qb = b
}
Fe.prototype.n = function(a) {
  return a instanceof Fe && this.mc == a.mc && this.Qb == a.Qb
};
Fe.prototype.F = function(a, b) {
  a.push("new ResetFrame(");
  E(this.mc, a, b);
  a.push(", ", String(this.Qb), ")")
};
Fe.prototype.da = ue;
Fe.prototype.ka = function(a) {
  a.push(this.mc, "|", String(Number(this.Qb)), "!")
};
var Ge = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function He(a) {
  this.reason = a
}
He.prototype.n = function(a) {
  return a instanceof He && this.reason == a.reason
};
He.prototype.F = function(a, b) {
  a.push("new TransportKillFrame(");
  E(this.reason, a, b);
  a.push(")")
};
He.prototype.da = ue;
He.prototype.ka = function(a) {
  a.push(this.reason, "K")
};
function Ie(a) {
  a || e(new R("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new ye(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = Be(Fd(a)), a == k && e(new R("bad sack")), new xe(a)
    }else {
      if(b == "N") {
        return a = Id(Fd(a)), a == k && e(new R("bad seqNum")), new Ae(a)
      }else {
        if(b == "T") {
          return a = Be(Fd(a)), a == k && e(new R("bad lastSackSeen")), new Ce(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && e(new R("leading garbage")), new Ee
          }else {
            if(b == "^") {
              return new ze(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && e(new R("leading garbage")), new De
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && e(new R("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == k && e(new R("bad applicationLevel")), new Fe(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = Ge[a], a == k && e(new R("unknown kill reason: " + a)), new He(a)
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
;var Je;
Je = !1;
var Ke = gc();
Ke && (Ke.indexOf("Firefox") != -1 || Ke.indexOf("Camino") != -1 || Ke.indexOf("iPhone") != -1 || Ke.indexOf("iPod") != -1 || Ke.indexOf("iPad") != -1 || Ke.indexOf("Android") != -1 || Ke.indexOf("Chrome") != -1 && (Je = !0));
var Le = Je;
var Me = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Ne(a, b) {
  var c = a.match(Me), d = b.match(Me);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Oe() {
  if(kc) {
    this.$a = {}, this.wd = {}, this.rd = []
  }
}
Oe.prototype.a = Q("goog.net.xhrMonitor");
Oe.prototype.Ic = kc;
function Pe(a) {
  var b = Qe;
  if(b.Ic) {
    var c = t(a) ? a : ja(a) ? w(a) : "";
    P(b.a, "Pushing context: " + a + " (" + c + ")");
    b.rd.push(c)
  }
}
function Re() {
  var a = Qe;
  if(a.Ic) {
    var b = a.rd.pop();
    P(a.a, "Popping context: " + b);
    Se(a, b)
  }
}
function Te(a) {
  var b = Qe;
  if(b.Ic) {
    a = w(a);
    O(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.rd.length;c++) {
      var d = b.rd[c];
      Ue(b.$a, d, a);
      Ue(b.wd, a, d)
    }
  }
}
function Se(a, b) {
  var c = a.wd[b], d = a.$a[b];
  c && d && (P(a.a, "Updating dependent contexts"), Wa(c, function(a) {
    Wa(d, function(b) {
      Ue(this.$a, a, b);
      Ue(this.wd, b, a)
    }, this)
  }, a))
}
function Ue(a, b, c) {
  a[b] || (a[b] = []);
  $a(a[b], c) || a[b].push(c)
}
var Qe = new Oe;
function Ve() {
}
Ve.prototype.Bc = k;
function We() {
  return Xe(Ye)
}
var Ye;
function Ze() {
}
z(Ze, Ve);
function Xe(a) {
  return(a = $e(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function af(a) {
  var b = {};
  $e(a) && (b[0] = !0, b[1] = !0);
  return b
}
Ze.prototype.$d = k;
function $e(a) {
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
Ye = new Ze;
function bf(a) {
  this.headers = new Pb;
  this.Pb = a || k
}
z(bf, jd);
bf.prototype.a = Q("goog.net.XhrIo");
var cf = /^https?:?$/i;
n = bf.prototype;
n.Ia = !1;
n.j = k;
n.vd = k;
n.ic = "";
n.sf = "";
n.fc = 0;
n.gc = "";
n.Md = !1;
n.Wc = !1;
n.ae = !1;
n.ib = !1;
n.sd = 0;
n.pb = k;
n.Nf = "";
n.gh = !1;
n.send = function(a, b, c, d) {
  this.j && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.ic = a;
  this.gc = "";
  this.fc = 0;
  this.sf = b;
  this.Md = !1;
  this.Ia = !0;
  this.j = this.Pb ? Xe(this.Pb) : new We;
  this.vd = this.Pb ? this.Pb.Bc || (this.Pb.Bc = af(this.Pb)) : Ye.Bc || (Ye.Bc = af(Ye));
  Te(this.j);
  this.j.onreadystatechange = x(this.Ef, this);
  try {
    O(this.a, df(this, "Opening Xhr")), this.ae = !0, this.j.open(b, a, !0), this.ae = !1
  }catch(f) {
    O(this.a, df(this, "Error opening Xhr: " + f.message));
    ef(this, f);
    return
  }
  var a = c || "", g = this.headers.L();
  d && Nb(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.ba("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Nb(g, function(a, b) {
    this.j.setRequestHeader(b, a)
  }, this);
  if(this.Nf) {
    this.j.responseType = this.Nf
  }
  if("withCredentials" in this.j) {
    this.j.withCredentials = this.gh
  }
  try {
    if(this.pb) {
      ld.clearTimeout(this.pb), this.pb = k
    }
    if(this.sd > 0) {
      O(this.a, df(this, "Will abort after " + this.sd + "ms if incomplete")), this.pb = ld.setTimeout(x(this.bh, this), this.sd)
    }
    O(this.a, df(this, "Sending request"));
    this.Wc = !0;
    this.j.send(a);
    this.Wc = !1
  }catch(h) {
    O(this.a, df(this, "Send error: " + h.message)), ef(this, h)
  }
};
n.dispatchEvent = function(a) {
  if(this.j) {
    Pe(this.j);
    try {
      return bf.d.dispatchEvent.call(this, a)
    }finally {
      Re()
    }
  }else {
    return bf.d.dispatchEvent.call(this, a)
  }
};
n.bh = function() {
  if(typeof ca != "undefined" && this.j) {
    this.gc = "Timed out after " + this.sd + "ms, aborting", this.fc = 8, O(this.a, df(this, this.gc)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function ef(a, b) {
  a.Ia = !1;
  if(a.j) {
    a.ib = !0, a.j.abort(), a.ib = !1
  }
  a.gc = b;
  a.fc = 5;
  ff(a);
  gf(a)
}
function ff(a) {
  if(!a.Md) {
    a.Md = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
n.abort = function(a) {
  if(this.j && this.Ia) {
    O(this.a, df(this, "Aborting")), this.Ia = !1, this.ib = !0, this.j.abort(), this.ib = !1, this.fc = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), gf(this)
  }
};
n.c = function() {
  if(this.j) {
    if(this.Ia) {
      this.Ia = !1, this.ib = !0, this.j.abort(), this.ib = !1
    }
    gf(this, !0)
  }
  bf.d.c.call(this)
};
n.Ef = function() {
  !this.ae && !this.Wc && !this.ib ? this.Mg() : hf(this)
};
n.Mg = function() {
  hf(this)
};
function hf(a) {
  if(a.Ia && typeof ca != "undefined") {
    if(a.vd[1] && a.Oa() == 4 && jf(a) == 2) {
      O(a.a, df(a, "Local request error detected and ignored"))
    }else {
      if(a.Wc && a.Oa() == 4) {
        ld.setTimeout(x(a.Ef, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.Oa() == 4) {
          O(a.a, df(a, "Request complete"));
          a.Ia = !1;
          var b;
          a: {
            switch(jf(a)) {
              case 0:
                b = t(a.ic) ? a.ic.match(Me)[1] || k : a.ic.Ga;
                b = !(b ? cf.test(b) : self.location ? cf.test(self.location.protocol) : 1);
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
            a.fc = 6;
            var c;
            try {
              c = a.Oa() > 2 ? a.j.statusText : ""
            }catch(d) {
              O(a.a, "Can not get status: " + d.message), c = ""
            }
            a.gc = c + " [" + jf(a) + "]";
            ff(a)
          }
          gf(a)
        }
      }
    }
  }
}
function gf(a, b) {
  if(a.j) {
    var c = a.j, d = a.vd[0] ? q : k;
    a.j = k;
    a.vd = k;
    if(a.pb) {
      ld.clearTimeout(a.pb), a.pb = k
    }
    b || (Pe(c), a.dispatchEvent("ready"), Re());
    var f = Qe;
    if(f.Ic) {
      var g = w(c);
      O(f.a, "Closing XHR : " + g);
      delete f.wd[g];
      for(var h in f.$a) {
        bb(f.$a[h], g), f.$a[h].length == 0 && delete f.$a[h]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(j) {
      ee(a.a, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
n.ce = function() {
  return!!this.j
};
n.Oa = function() {
  return this.j ? this.j.readyState : 0
};
function jf(a) {
  try {
    return a.Oa() > 2 ? a.j.status : -1
  }catch(b) {
    return N(a.a, "Can not get status: " + b.message), -1
  }
}
n.getResponseHeader = function(a) {
  return this.j && this.Oa() == 4 ? this.j.getResponseHeader(a) : i
};
function df(a, b) {
  return b + " [" + a.sf + " " + a.ic + " " + jf(a) + "]"
}
;function kf(a, b, c) {
  this.K = b;
  this.ma = a;
  this.Fd = c
}
z(kf, J);
n = kf.prototype;
n.a = Q("cw.net.XHRMaster");
n.Va = -1;
n.he = function(a, b, c) {
  this.Fd.__XHRSlave_makeRequest(this.ma, a, b, c)
};
n.Oa = l("Va");
n.le = function(a, b) {
  b != lf && ee(this.a, F(this.ma) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  le(this.K);
  me(this.K, a)
};
n.me = function(a) {
  O(this.a, "ongotheaders_: " + F(a));
  var b = k;
  "Content-Length" in a && (b = Id(a["Content-Length"]));
  a = this.K;
  O(a.a, a.t() + " got Content-Length: " + b);
  a.wa == mf && (b == k && (N(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), nf(a, 2E3 + b / 3072 * 1E3))
};
n.ne = function(a) {
  a != 1 && O(this.a, this.K.t() + "'s XHR's readyState is " + a);
  this.Va = a;
  this.Va >= 2 && le(this.K)
};
n.ke = function() {
  this.K.f()
};
n.c = function() {
  kf.d.c.call(this);
  delete of.Fa[this.ma];
  this.Fd.__XHRSlave_dispose(this.ma);
  delete this.Fd
};
function pf() {
  this.Fa = {}
}
z(pf, J);
n = pf.prototype;
n.a = Q("cw.net.XHRMasterTracker");
n.Gd = function(a, b) {
  var c = "_" + Ed(), d = new kf(c, a, b);
  return this.Fa[c] = d
};
n.le = function(a, b, c) {
  var b = cb(b), d = this.Fa[a];
  d ? d.le(b, c) : ee(this.a, "onframes_: no master for " + F(a))
};
n.me = function(a, b) {
  var c = this.Fa[a];
  c ? c.me(b) : ee(this.a, "ongotheaders_: no master for " + F(a))
};
n.ne = function(a, b) {
  var c = this.Fa[a];
  c ? c.ne(b) : ee(this.a, "onreadystatechange_: no master for " + F(a))
};
n.ke = function(a) {
  var b = this.Fa[a];
  b ? (delete this.Fa[b.ma], b.ke()) : ee(this.a, "oncomplete_: no master for " + F(a))
};
n.c = function() {
  pf.d.c.call(this);
  for(var a = Ra(this.Fa);a.length;) {
    a.pop().f()
  }
  delete this.Fa
};
var of = new pf;
o.__XHRMaster_onframes = x(of.le, of);
o.__XHRMaster_oncomplete = x(of.ke, of);
o.__XHRMaster_ongotheaders = x(of.me, of);
o.__XHRMaster_onreadystatechange = x(of.ne, of);
function qf() {
  rf.info("Waiting for XDRFrames (may take a while)...");
  var a = new nd, b = o.__XDRSetup.done.length, c;
  o.__XDRSetup.done = {push:function() {
    b += 1;
    c = 2 - b;
    c || (rf.info("Got XDRFrames after waiting."), td(a, k))
  }};
  c = 2 - b;
  c || (rf.info("Already had all XDRFrames."), td(a, k));
  return a
}
var rf = Q("cw.net.waitForXDRFrames");
function sf(a, b, c) {
  this.host = a;
  this.port = b;
  this.dh = c
}
function tf(a, b, c, d) {
  this.ed = a;
  this.Gf = b;
  this.gd = c;
  this.Rf = d;
  (!(this.ed.indexOf("http://") == 0 || this.ed.indexOf("https://") == 0) || !(this.gd.indexOf("http://") == 0 || this.gd.indexOf("https://") == 0)) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Gf.location.href;
  Ne(this.ed, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Rf.location.href;
  Ne(this.gd, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
var uf = new ze(";)]}"), vf = "disconnected_" + id++;
function wf(a, b, c, d) {
  this.J = a;
  this.If = b;
  this.ra = c;
  this.Fi = d;
  this.wc = new Kd;
  this.uc = Ed() + Ed();
  this.Ua = new Wb;
  this.be = new Yb;
  this.zc = k;
  if(H) {
    this.zc = ad(o, "load", this.Tg, !1, this)
  }
}
z(wf, jd);
n = wf.prototype;
n.a = Q("cw.net.Stream");
n.tf = new Vb(-1, []);
n.uf = new Vb(-1, []);
n.Jg = 50;
n.Ig = 1048576;
n.Be = !1;
n.re = !1;
n.l = 1;
n.Yf = -1;
n.k = k;
n.A = k;
n.nc = k;
n.Ce = 0;
n.Ff = 0;
n.Qf = 0;
n.F = function(a, b) {
  a.push("<Stream id=");
  E(this.uc, a, b);
  a.push(", state=", String(this.l));
  a.push(", primary=");
  E(this.k, a, b);
  a.push(", secondary=");
  E(this.A, a, b);
  a.push(", resetting=");
  E(this.nc, a, b)
};
function xf(a) {
  var b = [-1];
  a.k && b.push(a.k.Gb);
  a.A && b.push(a.A.Gb);
  return Math.max.apply(Math.max, b)
}
function yf(a) {
  if(a.l != 1) {
    var b = a.Ua.z.U() != 0, c = Zb(a.be), d = !c.n(a.uf) && !(a.k && c.n(a.k.Db) || a.A && c.n(a.A.Db)), f = xf(a);
    if((b = b && f < a.Ua.vb) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.k.Sb) {
        P(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.k, c != d.Db)) {
          !d.Ha && !d.D.length && zf(d), d.D.push(new xe(c)), d.Db = c
        }
        b && Af(a.k, a.Ua, f + 1);
        a.k.Ca()
      }else {
        a.A == k ? a.Be ? (P(a.a, "tryToSend_: creating secondary to send " + g), a.A = Bf(a, !1), b && Af(a.A, a.Ua, f + 1), a.A.Ca()) : (P(a.a, "tryToSend_: not creating a secondary because Stream might not exist on server"), a.re = !0) : P(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
n.Tg = function() {
  this.zc = k;
  if(this.k && this.k.zb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.k;
    a.xd = !0;
    a.f()
  }
  if(this.A && this.A.zb()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.A, a.xd = !0, a.f()
  }
};
function Cf(a, b) {
  var c;
  ga(c) || (c = !0);
  a.l > 2 && e(Error("sendStrings: Can't send strings in state " + a.l));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || e(Error("sendStrings: string #" + c + " has illegal chars: " + F(d)))
      }
    }
    a.Ua.extend(b);
    yf(a)
  }
}
function Bf(a, b) {
  var c;
  a.ra instanceof tf ? c = (Boolean(Number((new Df(document.location)).ha.get("httpStreaming", "0"))) ? 2 : 1) == 1 ? mf : Ef : a.ra instanceof sf ? c = Ff : e(Error("Don't support endpoint " + F(a.ra)));
  a.Yf += 1;
  c = new Gf(a.J, a, a.Yf, c, a.ra, b);
  P(a.a, "Created: " + c.t());
  a.wc.add(c);
  return c
}
function Hf(a, b, c) {
  var d = new If(a.J, a, b, c);
  P(a.a, "Created: " + d.t() + ", delay=" + b + ", times=" + c);
  a.wc.add(d);
  return d
}
function Jf(a, b) {
  a.wc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  O(a.a, "Offline: " + b.t());
  b.lc ? a.Ce += b.lc : a.Ce = 0;
  a.Ce >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), Kf("stream penalty reached limit", !1), a.f());
  if(a.l > 2) {
    a.l == 3 && b.cg ? (O(a.a, "Disposing because resettingTransport_ is done."), a.f()) : O(a.a, "Not creating a transport because Stream is in state " + a.l)
  }else {
    var c;
    var d;
    c = b instanceof If;
    if(!c && b.xd) {
      var f = H ? Le ? [0, 1] : [9, 20] : [0, 0];
      c = f[0];
      d = f[1];
      P(a.a, "getDelayForNextTransport_: " + F({delay:c, times:d}))
    }else {
      d = b.Pe();
      if(b == a.k) {
        if(d) {
          f = ++a.Ff
        }else {
          if(!c) {
            f = a.Ff = 0
          }
        }
      }else {
        if(d) {
          f = ++a.Qf
        }else {
          if(!c) {
            f = a.Qf = 0
          }
        }
      }
      if(c || !f) {
        d = c = 0, P(a.a, "getDelayForNextTransport_: " + F({count:f, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(f, 3), h = Math.floor(Math.random() * 4E3) - 2E3, j = Math.max(0, b.Zf - b.Fe);
        d = (c = Math.max(0, g + h - j)) ? 1 : 0;
        P(a.a, "getDelayForNextTransport_: " + F({count:f, base:g, variance:h, oldDuration:j, delay:c, times:d}))
      }
    }
    c = [c, d];
    f = c[0];
    c = c[1];
    if(b == a.k) {
      a.k = k, c ? a.k = Hf(a, f, c) : (f = xf(a), a.k = Bf(a, !0), Af(a.k, a.Ua, f + 1)), a.k.Ca()
    }else {
      if(b == a.A) {
        a.A = k, c ? (a.A = Hf(a, f, c), a.A.Ca()) : yf(a)
      }
    }
  }
}
n.reset = function(a) {
  this.l > 2 && e(Error("reset: Can't send reset in state " + this.l));
  this.l = 3;
  this.k && this.k.Sb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Lf(this.k, a), this.k.Ca()) : (this.k && (O(this.a, "reset: Disposing primary before sending ResetFrame."), this.k.f()), this.A && (O(this.a, "reset: Disposing secondary before sending ResetFrame."), this.A.f()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.nc = Bf(this, !1), Lf(this.nc, a), this.nc.Ca());
  Kf(a, !0)
};
function Mf(a, b, c, d) {
  var f;
  f = a.be;
  for(var g = a.Jg, h = a.Ig, j = [], m = !1, p = 0, A = c.length;p < A;p++) {
    var r = c[p], u = r[0], r = r[1];
    if(u == f.Cb + 1) {
      f.Cb += 1;
      for(j.push(r);;) {
        u = f.Cb + 1;
        r = f.Za.get(u, $b);
        if(r === $b) {
          break
        }
        j.push(r[0]);
        f.Za.remove(u);
        f.w -= r[1];
        f.Cb = u
      }
    }else {
      if(!(u <= f.Cb)) {
        if(g != k && f.Za.U() >= g) {
          m = !0;
          break
        }
        var B = Ub(r);
        if(h != k && f.w + B > h) {
          m = !0;
          break
        }
        f.Za.set(u, [r, B]);
        f.w += B
      }
    }
  }
  f.Za.Pa() && f.Za.clear();
  f = [j, m];
  c = f[0];
  f = f[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(h = a.If, j = Db(c[g]), m = j[0], p = j[1], m == 1 ? (m = h.oe.Kd(xb.ac(), p), h = nb(m, 1), j = nb(m, 2), m = m.ea(), sb.Hc(h, j, 5, 5, new Nf(1, "black"), new Of(m), i)) : m == 2 ? (sb.f(), Pf()) : N(Qf, "Strange message from server: " + F(j)), a.l == 3 || a.qa) {
        return
      }
    }
  }
  d || yf(a);
  if(!(a.l == 3 || a.qa) && f) {
    ee(b.a, b.t() + "'s peer caused rwin overflow."), b.f()
  }
}
n.start = function() {
  this.l = 2;
  this.k = Bf(this, !0);
  Af(this.k, this.Ua, k);
  this.k.Ca()
};
n.c = function() {
  this.a.info(F(this) + " in disposeInternal.");
  this.l = 4;
  for(var a = this.wc.W(), b = 0;b < a.length;b++) {
    a[b].f()
  }
  this.dispatchEvent({type:vf});
  if(H && this.zc) {
    dd(this.zc), this.zc = k
  }
  delete this.wc;
  delete this.k;
  delete this.A;
  delete this.nc;
  delete this.If;
  wf.d.c.call(this)
};
var mf = 1, Ef = 2, Ff = 3;
function Gf(a, b, c, d, f, g) {
  this.J = a;
  this.C = b;
  this.Nb = c;
  this.wa = d;
  this.ra = f;
  this.D = [];
  this.sb = g;
  this.Sb = !this.zb();
  this.Ib = this.wa != mf;
  this.ig = x(this.ah, this)
}
z(Gf, J);
n = Gf.prototype;
n.a = Q("cw.net.ClientTransport");
n.r = k;
n.Fe = k;
n.Zf = k;
n.fd = k;
n.Ha = !1;
n.qd = !1;
n.Db = k;
n.Sd = 0;
n.Gb = -1;
n.pe = -1;
n.cg = !1;
n.xd = !1;
n.lc = 0;
n.cc = !1;
n.F = function(a) {
  a.push("<ClientTransport #", String(this.Nb), ", becomePrimary=", String(this.sb), ">")
};
n.t = function() {
  return(this.sb ? "Prim. T#" : "Sec. T#") + this.Nb
};
n.Pe = function() {
  return!(!this.cc && this.Sd)
};
n.zb = function() {
  return this.wa == mf || this.wa == Ef
};
function Rf(a, b) {
  hb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Mf(a.C, a, b, !a.Ib)
}
function Sf(a, b, c) {
  try {
    var d = Ie(b);
    a.Sd += 1;
    O(a.a, a.t() + " RECV " + F(d));
    var f;
    a.Sd == 1 && !d.n(uf) && a.zb() ? (N(a.a, a.t() + " is closing soon because got bad preamble: " + F(d)), f = !0) : f = !1;
    if(f) {
      return!0
    }
    if(d instanceof ye) {
      if(!/^([ -~]*)$/.test(d.Mb)) {
        return a.cc = !0
      }
      a.pe += 1;
      c.push([a.pe, d.Mb])
    }else {
      if(d instanceof xe) {
        var g = a.C, h = d.na;
        g.tf = h;
        var j = g.Ua, m = h.rb, c = !1;
        m > j.vb && (c = !0);
        for(var p = Xb(j).concat(), d = 0;d < p.length;d++) {
          var A = p[d];
          if(A > m) {
            break
          }
          var r = j.z.p[A][1];
          j.z.remove(A);
          j.w -= r
        }
        for(d = 0;d < h.nb.length;d++) {
          var u = h.nb[d];
          u > j.vb && (c = !0);
          j.z.ba(u) && (r = j.z.p[u][1], j.z.remove(u), j.w -= r)
        }
        j.z.Pa() && j.z.clear();
        if(c) {
          return N(a.a, a.t() + " is closing soon because got bad SackFrame"), a.cc = !0
        }
      }else {
        if(d instanceof Ae) {
          a.pe = d.sc - 1
        }else {
          if(d instanceof Ce) {
            a.C.uf = d.hc
          }else {
            if(d instanceof Ee) {
              return P(a.a, a.t() + " is closing soon because got YouCloseItFrame"), !0
            }else {
              if(d instanceof He) {
                return a.cc = !0, d.reason == "stream_attach_failure" ? a.lc += 1 : d.reason == "acked_unsent_strings" && (a.lc += 0.5), P(a.a, a.t() + " is closing soon because got " + F(d)), !0
              }else {
                if(!(d instanceof ze)) {
                  if(d instanceof De) {
                    var B = a.C, Yi = !a.Ib;
                    P(B.a, "Stream is now confirmed to exist at server.");
                    B.Be = !0;
                    if(B.re && !Yi) {
                      B.re = !1, yf(B)
                    }
                  }else {
                    if(c.length && (Rf(a, c), ab(c)), d instanceof Fe) {
                      var Zi = a.C;
                      Kf(d.mc, d.Qb);
                      Zi.f();
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
  }catch(Pg) {
    return Pg instanceof R || e(Pg), N(a.a, a.t() + " is closing soon because got InvalidFrame: " + F(b)), a.cc = !0
  }
  return!1
}
function me(a, b) {
  a.qd = !0;
  try {
    for(var c = !1, d = [], f = 0, g = b.length;f < g;f++) {
      if(a.qa) {
        a.a.info(a.t() + " returning from loop because we're disposed.");
        return
      }
      if(c = Sf(a, b[f], d)) {
        break
      }
    }
    d.length && Rf(a, d);
    a.qd = !1;
    a.D.length && a.Ca();
    c && (P(a.a, a.t() + " closeSoon is true.  Frames were: " + F(b)), a.f())
  }finally {
    a.qd = !1
  }
}
n.ah = function() {
  N(this.a, this.t() + " timed out due to lack of connection or no data being received.");
  this.f()
};
function Tf(a) {
  if(a.fd != k) {
    a.J.M.clearTimeout(a.fd), a.fd = k
  }
}
function nf(a, b) {
  Tf(a);
  b = Math.round(b);
  a.fd = a.J.M.setTimeout(a.ig, b);
  O(a.a, a.t() + "'s receive timeout set to " + b + " ms.")
}
function le(a) {
  a.wa != mf && (a.wa == Ff || a.wa == Ef ? nf(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.wa)))
}
function zf(a) {
  var b = new ve;
  b.Nb = a.Nb;
  b.Hf = 2;
  b.mf = 2;
  if(!a.C.Be) {
    b.Lf = !0
  }
  b.uc = a.C.uc;
  b.De = a.Ib;
  if(b.De) {
    b.Cf = 4096
  }
  b.yf = 3E5;
  b.wf = a.Ib ? Math.floor(10) : 0;
  b.$f = !1;
  if(a.sb) {
    b.Uf = k, b.ie = Math.floor((a.Ib ? 358E4 : 25E3) / 1E3)
  }
  b.na = Zb(a.C.be);
  b.$c = a.C.tf;
  a.D.push(b);
  a.Db = b.na
}
function ne(a, b) {
  b && (a.lc += 0.5);
  a.f()
}
n.Ca = function() {
  this.Ha && !this.Sb && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.qd) {
    P(this.a, this.t() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ha;
    this.Ha = !0;
    !a && !this.D.length && zf(this);
    for(a = 0;a < this.D.length;a++) {
      O(this.a, this.t() + " SEND " + F(this.D[a]))
    }
    if(this.zb()) {
      for(var a = [], b = 0, c = this.D.length;b < c;b++) {
        this.D[b].ka(a), a.push("\n")
      }
      this.D = [];
      a = a.join("");
      b = this.sb ? this.ra.ed : this.ra.gd;
      this.r = of.Gd(this, this.sb ? this.ra.Gf : this.ra.Rf);
      this.Fe = this.J.M === ld ? y() : this.J.M.getTime();
      this.r.he(b, "POST", a);
      nf(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.Ib ? 0 : this.sb ? 25E3 : 0))
    }else {
      if(this.wa == Ff) {
        a = [];
        b = 0;
        for(c = this.D.length;b < c;b++) {
          a.push(this.D[b].da())
        }
        this.D = [];
        this.r ? this.r.Ac(a) : (b = this.ra, this.r = new pe(this), this.r.pd = b.dh.Gd(this.r), this.Fe = this.J.M === ld ? y() : this.J.M.getTime(), this.r.Ed(b.host, b.port), this.r.qa || (this.r.Ac(a), this.r.qa || nf(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.wa))
      }
    }
  }
};
function Af(a, b, c) {
  !a.Ha && !a.D.length && zf(a);
  for(var d = Math.max(c, a.Gb + 1), f = Xb(b), c = [], g = 0;g < f.length;g++) {
    var h = f[g];
    (d == k || h >= d) && c.push([h, b.z.p[h][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], f = g[0], g = g[1], (a.Gb == -1 || a.Gb + 1 != f) && a.D.push(new Ae(f)), a.D.push(new ye(g)), a.Gb = f
  }
}
n.c = function() {
  this.a.info(this.t() + " in disposeInternal.");
  Gf.d.c.call(this);
  this.Zf = this.J.M === ld ? y() : this.J.M.getTime();
  this.D = [];
  Tf(this);
  this.r && this.r.f();
  var a = this.C;
  this.C = k;
  Jf(a, this)
};
function Lf(a, b) {
  !a.Ha && !a.D.length && zf(a);
  a.D.push(new Fe(b, !0));
  a.cg = !0
}
function If(a, b, c, d) {
  this.J = a;
  this.C = b;
  this.Ye = c;
  this.Se = d
}
z(If, J);
n = If.prototype;
n.Ha = !1;
n.Sb = !1;
n.Qc = k;
n.Db = k;
n.a = Q("cw.net.DoNothingTransport");
function Uf(a) {
  a.Qc = a.J.M.setTimeout(function() {
    a.Qc = k;
    a.Se--;
    a.Se ? Uf(a) : a.f()
  }, a.Ye)
}
n.Ca = function() {
  this.Ha && !this.Sb && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ha = !0;
  Uf(this)
};
n.F = function(a) {
  a.push("<DoNothingTransport delay=", String(this.Ye), ">")
};
n.zb = ba(!1);
n.t = ba("Wast. T");
n.Pe = ba(!1);
n.c = function() {
  this.a.info(this.t() + " in disposeInternal.");
  If.d.c.call(this);
  this.Qc != k && this.J.M.clearTimeout(this.Qc);
  var a = this.C;
  this.C = k;
  Jf(a, this)
};
function S(a, b) {
  this.width = a;
  this.height = b
}
n = S.prototype;
n.L = function() {
  return new S(this.width, this.height)
};
n.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
n.Pa = function() {
  return!(this.width * this.height)
};
n.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
n.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
n.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
n.scale = function(a) {
  this.width *= a;
  this.height *= a;
  return this
};
var Vf;
function Wf(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function Xf(a, b) {
  var c = Wf(a), d = gb(arguments, 1), f;
  f = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    $a(f, d[h]) || (f.push(d[h]), g++)
  }
  f = g == d.length;
  a.className = c.join(" ");
  return f
}
function Yf(a, b) {
  var c = Wf(a), d = gb(arguments, 1), f;
  f = c;
  for(var g = 0, h = 0;h < f.length;h++) {
    $a(d, f[h]) && (fb(f, h--, 1), g++)
  }
  f = g == d.length;
  a.className = c.join(" ");
  return f
}
;var Zf = !G || I("9");
!kc && !G || G && I("9") || kc && I("1.9.1");
var $f = G && !I("9");
function ag(a) {
  return a ? new bg(cg(a)) : Vf || (Vf = new bg)
}
function T(a) {
  return t(a) ? document.getElementById(a) : a
}
function dg(a, b, c, d) {
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
      b = h.className, typeof b.split == "function" && $a(b.split(/\s+/), c) && (d[f++] = h)
    }
    d.length = f;
    return d
  }else {
    return a
  }
}
function eg(a, b) {
  Qa(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in fg ? a.setAttribute(fg[d], b) : a[d] = b
  })
}
var fg = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function gg(a, b, c) {
  return hg(document, arguments)
}
function hg(a, b) {
  var c = b[0], d = b[1];
  if(!Zf && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', va(d.name), '"');
    if(d.type) {
      c.push(' type="', va(d.type), '"');
      var f = {};
      Ua(f, d);
      d = f;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  if(d) {
    t(d) ? c.className = d : s(d) ? Xf.apply(k, [c].concat(d)) : eg(c, d)
  }
  b.length > 2 && ig(a, c, b, 2);
  return c
}
function ig(a, b, c, d) {
  function f(c) {
    c && b.appendChild(t(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && g.nodeType > 0) ? Wa(jg(g) ? db(g) : g, f) : f(g)
  }
}
function kg(a, b) {
  ig(cg(a), a, arguments, 1)
}
function lg(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function mg(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function ng(a, b) {
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
function cg(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
function og(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && a.firstChild.nodeType == 3) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      lg(a), a.appendChild(cg(a).createTextNode(b))
    }
  }
}
var pg = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, qg = {IMG:" ", BR:"\n"};
function rg(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ka(a) && a >= 0) : !1
}
function sg(a) {
  var b = [];
  tg(a, b, !1);
  return b.join("")
}
function tg(a, b, c) {
  if(!(a.nodeName in pg)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in qg) {
        b.push(qg[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          tg(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function jg(a) {
  if(a && typeof a.length == "number") {
    if(ja(a)) {
      return typeof a.item == "function" || typeof a.item == "string"
    }else {
      if(v(a)) {
        return typeof a.item == "function"
      }
    }
  }
  return!1
}
function bg(a) {
  this.s = a || o.document || document
}
n = bg.prototype;
n.Da = ag;
n.b = function(a) {
  return t(a) ? this.s.getElementById(a) : a
};
n.i = function(a, b, c) {
  return hg(this.s, arguments)
};
n.createElement = function(a) {
  return this.s.createElement(a)
};
n.createTextNode = function(a) {
  return this.s.createTextNode(a)
};
n.Te = function(a, b, c) {
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
n.appendChild = function(a, b) {
  a.appendChild(b)
};
n.append = kg;
n.contains = ng;
function ug(a, b, c) {
  a.style[Ga(c)] = b
}
function vg(a, b) {
  var c = cg(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function wg(a, b, c) {
  b instanceof S ? (c = b.height, b = b.width) : c == i && e(Error("missing height argument"));
  a.style.width = xg(b);
  a.style.height = xg(c)
}
function xg(a) {
  typeof a == "number" && (a = Math.round(a) + "px");
  return a
}
function yg(a) {
  if((vg(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style.display) != "none") {
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
function zg(a) {
  G ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[H ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var Ag = kc ? "MozUserSelect" : H ? "WebkitUserSelect" : k;
function Bg(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Ag) {
    if(b = b ? "none" : "", a.style[Ag] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[Ag] = b
      }
    }
  }else {
    if(G || jc) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
;function Cg(a) {
  this.gb = a
}
z(Cg, J);
var Dg = new K(0, 100), Eg = [];
function U(a, b, c, d) {
  s(c) || (Eg[0] = c, c = Eg);
  for(var f = 0;f < c.length;f++) {
    var g = a, h = M(b, c[f], d || a, !1, a.gb || a);
    g.h ? g.h[h] = !0 : g.Ra ? (g.h = Dg.getObject(), g.h[g.Ra] = !0, g.Ra = k, g.h[h] = !0) : g.Ra = h
  }
  return a
}
function Fg(a, b, c, d, f, g) {
  if(a.Ra || a.h) {
    if(s(c)) {
      for(var h = 0;h < c.length;h++) {
        Fg(a, b, c[h], d, f, g)
      }
    }else {
      a: {
        d = d || a;
        g = g || a.gb || a;
        f = !!f;
        if(b = cd(b, c, f)) {
          for(c = 0;c < b.length;c++) {
            if(!b[c].mb && b[c].Fb == d && b[c].capture == f && b[c].Uc == g) {
              b = b[c];
              break a
            }
          }
        }
        b = k
      }
      if(b) {
        if(b = b.key, dd(b), a.h) {
          c = a.h, b in c && delete c[b]
        }else {
          if(a.Ra == b) {
            a.Ra = k
          }
        }
      }
    }
  }
  return a
}
Cg.prototype.qe = function() {
  if(this.h) {
    for(var a in this.h) {
      dd(a), delete this.h[a]
    }
    Lc(Dg, this.h);
    this.h = k
  }else {
    this.Ra && dd(this.Ra)
  }
};
Cg.prototype.c = function() {
  Cg.d.c.call(this);
  this.qe()
};
Cg.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Gg() {
}
ea(Gg);
Gg.prototype.Lg = 0;
Gg.Na();
function V(a) {
  this.P = a || ag();
  this.qc = Hg
}
z(V, jd);
V.prototype.Cg = Gg.Na();
var Hg = k;
function Ig(a, b) {
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
n = V.prototype;
n.R = k;
n.u = !1;
n.e = k;
n.qc = k;
n.Kg = k;
n.$ = k;
n.O = k;
n.Ub = k;
n.fh = !1;
function Jg(a) {
  return a.R || (a.R = ":" + (a.Cg.Lg++).toString(36))
}
n.b = l("e");
function Kg(a) {
  return a.xb || (a.xb = new Cg(a))
}
n.getParent = l("$");
n.ve = function(a) {
  this.$ && this.$ != a && e(Error("Method not supported"));
  V.d.ve.call(this, a)
};
n.Da = l("P");
n.i = function() {
  this.e = this.P.createElement("div")
};
function Lg(a, b) {
  a.u && e(Error("Component already rendered"));
  a.e || a.i();
  b ? b.insertBefore(a.e, k) : a.P.s.body.appendChild(a.e);
  (!a.$ || a.$.u) && a.Q()
}
n.Q = function() {
  this.u = !0;
  Mg(this, function(a) {
    !a.u && a.b() && a.Q()
  })
};
n.bb = function() {
  Mg(this, function(a) {
    a.u && a.bb()
  });
  this.xb && this.xb.qe();
  this.u = !1
};
n.c = function() {
  V.d.c.call(this);
  this.u && this.bb();
  this.xb && (this.xb.f(), delete this.xb);
  Mg(this, function(a) {
    a.f()
  });
  !this.fh && this.e && mg(this.e);
  this.$ = this.Kg = this.e = this.Ub = this.O = k
};
n.$b = l("e");
n.Kb = function(a) {
  this.u && e(Error("Component already rendered"));
  this.qc = a
};
function Mg(a, b) {
  a.O && Wa(a.O, b, i)
}
n.removeChild = function(a, b) {
  if(a) {
    var c = t(a) ? a : Jg(a), a = this.Ub && c ? (c in this.Ub ? this.Ub[c] : i) || k : k;
    if(c && a) {
      var d = this.Ub;
      c in d && delete d[c];
      bb(this.O, a);
      b && (a.bb(), a.e && mg(a.e));
      c = a;
      c == k && e(Error("Unable to set parent component"));
      c.$ = k;
      V.d.ve.call(c, k)
    }
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function Ng(a, b) {
  a.setAttribute("role", b);
  a.Ci = b
}
;function Og() {
}
var Qg;
ea(Og);
n = Og.prototype;
n.Lc = function() {
};
n.i = function(a) {
  return a.Da().i("div", Rg(this, a).join(" "), a.ca)
};
n.$b = function(a) {
  return a
};
n.Xb = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(G && !I("7")) {
      var d = Sg(Wf(a), b);
      d.push(b);
      pa(c ? Xf : Yf, a).apply(k, d)
    }else {
      c ? Xf(a, b) : Yf(a, b)
    }
  }
};
n.of = function(a) {
  if(a.qc == k) {
    a.qc = "rtl" == (vg(a.u ? a.e : a.P.s.body, "direction") || ((a.u ? a.e : a.P.s.body).currentStyle ? (a.u ? a.e : a.P.s.body).currentStyle.direction : k) || (a.u ? a.e : a.P.s.body).style.direction)
  }
  a.qc && this.Kb(a.b(), !0);
  a.isEnabled() && this.ld(a, a.Ob)
};
n.hd = function(a, b) {
  Bg(a, !b, !G && !jc)
};
n.Kb = function(a, b) {
  this.Xb(a, this.v() + "-rtl", b)
};
n.qf = function(a) {
  var b;
  return a.va & 32 && (b = a.fb()) ? rg(b) : !1
};
n.ld = function(a, b) {
  var c;
  if(a.va & 32 && (c = a.fb())) {
    if(!b && a.l & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.l & 32 && a.gf()
    }
    if(rg(c) != b) {
      b ? c.tabIndex = 0 : c.removeAttribute("tabIndex")
    }
  }
};
n.ze = function(a, b) {
  a.style.display = b ? "" : "none"
};
n.ia = function(a, b, c) {
  var d = a.b();
  if(d) {
    var f = Tg(this, b);
    f && this.Xb(a, f, c);
    this.xc(d, b, c)
  }
};
n.xc = function(a, b, c) {
  Qg || (Qg = {1:"disabled", 4:"pressed", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Qg[b]) && a.setAttribute("aria-" + b, c)
};
n.jd = function(a, b) {
  var c = this.$b(a);
  if(c && (lg(c), b)) {
    if(t(b)) {
      og(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = cg(c);
          c.appendChild(t(a) ? b.createTextNode(a) : a)
        }
      };
      s(b) ? Wa(b, d) : ha(b) && !("nodeType" in b) ? Wa(db(b), d) : d(b)
    }
  }
};
n.fb = function(a) {
  return a.b()
};
n.v = ba("goog-control");
function Rg(a, b) {
  var c = a.v(), d = [c], f = a.v();
  f != c && d.push(f);
  c = b.l;
  for(f = [];c;) {
    var g = c & -c;
    f.push(Tg(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.sa) && d.push.apply(d, c);
  G && !I("7") && d.push.apply(d, Sg(d));
  return d
}
function Sg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Wa([], function(d) {
    Za(d, pa($a, a)) && (!b || $a(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Tg(a, b) {
  if(!a.Oe) {
    var c = a.v();
    a.Oe = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Oe[b]
}
;function Ug(a, b) {
  a || e(Error("Invalid class name " + a));
  v(b) || e(Error("Invalid decorator function " + b))
}
var Vg = {};
function Wg(a, b, c, d, f) {
  if(!G && (!H || !I("525"))) {
    return!0
  }
  if(nc && f) {
    return Xg(a)
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
      return!(G && I("9"));
    case 27:
      return!H
  }
  return Xg(a)
}
function Xg(a) {
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
;function Yg(a, b) {
  a && Zg(this, a, b)
}
z(Yg, jd);
n = Yg.prototype;
n.e = k;
n.Yc = k;
n.de = k;
n.Zc = k;
n.Sa = -1;
n.Qa = -1;
var $g = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, ah = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, bh = {61:187, 
59:186}, ch = G || H && I("525");
n = Yg.prototype;
n.yg = function(a) {
  if(H && (this.Sa == 17 && !a.ctrlKey || this.Sa == 18 && !a.altKey)) {
    this.Qa = this.Sa = -1
  }
  ch && !Wg(a.keyCode, this.Sa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Qa = kc && a.keyCode in bh ? bh[a.keyCode] : a.keyCode
};
n.zg = function() {
  this.Qa = this.Sa = -1
};
n.handleEvent = function(a) {
  var b = a.Ba, c, d;
  G && a.type == "keypress" ? (c = this.Qa, d = c != 13 && c != 27 ? b.keyCode : 0) : H && a.type == "keypress" ? (c = this.Qa, d = b.charCode >= 0 && b.charCode < 63232 && Xg(c) ? b.charCode : 0) : jc ? (c = this.Qa, d = Xg(c) ? b.keyCode : 0) : (c = b.keyCode || this.Qa, d = b.charCode || 0, nc && d == 63 && !c && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in $g ? f = $g[c] : c == 25 && a.shiftKey && (f = 9) : g && g in ah && (f = ah[g]);
  a = f == this.Sa;
  this.Sa = f;
  b = new dh(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.f()
  }
};
n.b = l("e");
function Zg(a, b, c) {
  a.Zc && a.detach();
  a.e = b;
  a.Yc = M(a.e, "keypress", a, c);
  a.de = M(a.e, "keydown", a.yg, c, a);
  a.Zc = M(a.e, "keyup", a.zg, c, a)
}
n.detach = function() {
  if(this.Yc) {
    dd(this.Yc), dd(this.de), dd(this.Zc), this.Zc = this.de = this.Yc = k
  }
  this.e = k;
  this.Qa = this.Sa = -1
};
n.c = function() {
  Yg.d.c.call(this);
  this.detach()
};
function dh(a, b, c, d) {
  d && this.ec(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
z(dh, Ec);
function W(a, b, c) {
  V.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = w(b);
      if(d = Vg[d]) {
        break
      }
      b = b.d ? b.d.constructor : k
    }
    b = d ? v(d.Na) ? d.Na() : new d : k
  }
  this.m = b;
  this.kd(a)
}
z(W, V);
n = W.prototype;
n.ca = k;
n.l = 0;
n.va = 39;
n.Le = 255;
n.Zg = 0;
n.Ob = !0;
n.sa = k;
n.Yd = !0;
n.zd = !1;
n.fb = function() {
  return this.m.fb(this)
};
function eh(a, b) {
  if(b) {
    a.sa ? $a(a.sa, b) || a.sa.push(b) : a.sa = [b], a.m.Xb(a, b, !0)
  }
}
n.Xb = function(a, b) {
  if(b) {
    eh(this, a)
  }else {
    if(a && this.sa) {
      bb(this.sa, a);
      if(this.sa.length == 0) {
        this.sa = k
      }
      this.m.Xb(this, a, !1)
    }
  }
};
n.i = function() {
  var a = this.m.i(this);
  this.e = a;
  var b = this.m.Lc();
  b && Ng(a, b);
  this.zd || this.m.hd(a, !1);
  this.Ob || this.m.ze(a, !1)
};
n.$b = function() {
  return this.m.$b(this.b())
};
n.Q = function() {
  W.d.Q.call(this);
  this.m.of(this);
  if(this.va & -2 && (this.Yd && fh(this, !0), this.va & 32)) {
    var a = this.fb();
    if(a) {
      var b = this.Bb || (this.Bb = new Yg);
      Zg(b, a);
      U(U(U(Kg(this), b, "key", this.jf), a, "focus", this.wg), a, "blur", this.gf)
    }
  }
};
function fh(a, b) {
  var c = Kg(a), d = a.b();
  b ? (U(U(U(U(c, d, "mouseover", a.Tc), d, "mousedown", a.Rc), d, "mouseup", a.kf), d, "mouseout", a.Sc), G && U(c, d, "dblclick", a.hf)) : (Fg(Fg(Fg(Fg(c, d, "mouseover", a.Tc), d, "mousedown", a.Rc), d, "mouseup", a.kf), d, "mouseout", a.Sc), G && Fg(c, d, "dblclick", a.hf))
}
n.bb = function() {
  W.d.bb.call(this);
  this.Bb && this.Bb.detach();
  this.Ob && this.isEnabled() && this.m.ld(this, !1)
};
n.c = function() {
  W.d.c.call(this);
  this.Bb && (this.Bb.f(), delete this.Bb);
  delete this.m;
  this.sa = this.ca = k
};
n.jd = function(a) {
  this.m.jd(this.b(), a);
  this.kd(a)
};
n.kd = aa("ca");
n.df = function() {
  var a = this.ca;
  if(!a) {
    return""
  }
  if(!t(a)) {
    if(s(a)) {
      a = Xa(a, sg).join("")
    }else {
      if($f && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        tg(a, b, !0);
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
n.Kb = function(a) {
  W.d.Kb.call(this, a);
  var b = this.b();
  b && this.m.Kb(b, a)
};
n.hd = function(a) {
  this.zd = a;
  var b = this.b();
  b && this.m.hd(b, a)
};
n.ze = function(a, b) {
  if(b || this.Ob != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.m.ze(c, a);
    this.isEnabled() && this.m.ld(this, a);
    this.Ob = a;
    return!0
  }
  return!1
};
n.isEnabled = function() {
  return!(this.l & 1)
};
function gh(a, b) {
  hh(a, 2, b) && a.ia(2, b)
}
n.ce = function() {
  return!!(this.l & 4)
};
n.setActive = function(a) {
  hh(this, 4, a) && this.ia(4, a)
};
n.we = function(a) {
  hh(this, 8, a) && this.ia(8, a)
};
n.ia = function(a, b) {
  if(this.va & a && b != !!(this.l & a)) {
    this.m.ia(this, a, b), this.l = b ? this.l | a : this.l & ~a
  }
};
function X(a, b) {
  return!!(a.Le & b) && !!(a.va & b)
}
function hh(a, b, c) {
  return!!(a.va & b) && !!(a.l & b) != c && (!(a.Zg & b) || a.dispatchEvent(Ig(b, c))) && !a.qa
}
n.Tc = function(a) {
  !ih(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && gh(this, !0)
};
n.Sc = function(a) {
  !ih(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(!1), X(this, 2) && gh(this, !1))
};
function ih(a, b) {
  return!!a.relatedTarget && ng(b, a.relatedTarget)
}
n.Rc = function(a) {
  if(this.isEnabled() && (X(this, 2) && gh(this, !0), Gc(a) && (!H || !nc || !a.ctrlKey))) {
    X(this, 4) && this.setActive(!0), this.m.qf(this) && this.fb().focus()
  }
  !this.zd && Gc(a) && (!H || !nc || !a.ctrlKey) && a.preventDefault()
};
n.kf = function(a) {
  this.isEnabled() && (X(this, 2) && gh(this, !0), this.ce() && this.kb(a) && X(this, 4) && this.setActive(!1))
};
n.hf = function(a) {
  this.isEnabled() && this.kb(a)
};
n.kb = function(a) {
  if(X(this, 16)) {
    var b = !(this.l & 16);
    hh(this, 16, b) && this.ia(16, b)
  }
  X(this, 8) && this.we(!0);
  X(this, 64) && (b = !(this.l & 64), hh(this, 64, b) && this.ia(64, b));
  b = new Bc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, f = 0;d = c[f];f++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
n.wg = function() {
  X(this, 32) && hh(this, 32, !0) && this.ia(32, !0)
};
n.gf = function() {
  X(this, 4) && this.setActive(!1);
  X(this, 32) && hh(this, 32, !1) && this.ia(32, !1)
};
n.jf = function(a) {
  return this.Ob && this.isEnabled() && this.Xd(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
n.Xd = function(a) {
  return a.keyCode == 13 && this.kb(a)
};
v(W) || e(Error("Invalid component class " + W));
v(Og) || e(Error("Invalid renderer class " + Og));
var jh = w(W);
Vg[jh] = Og;
Ug("goog-control", function() {
  return new W(k)
});
function kh() {
}
z(kh, Og);
ea(kh);
n = kh.prototype;
n.Lc = ba("button");
n.xc = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : kh.d.xc.call(this, a, b, c)
};
n.i = function(a) {
  var b = kh.d.i.call(this, a), c = a.Oc();
  c && this.ye(b, c);
  (c = a.Pc()) && this.od(b, c);
  a.va & 16 && this.xc(b, 16, !1);
  return b
};
n.Pc = q;
n.od = q;
n.Oc = function(a) {
  return a.title
};
n.ye = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
n.v = ba("goog-button");
function lh() {
}
z(lh, kh);
ea(lh);
n = lh.prototype;
n.Lc = function() {
};
n.i = function(a) {
  a.u && !1 != a.Yd && fh(a, !1);
  a.Yd = !1;
  a.Le &= -256;
  a.u && a.l & 32 && e(Error("Component already rendered"));
  a.l & 32 && a.ia(32, !1);
  a.va &= -33;
  return a.Da().i("button", {"class":Rg(this, a).join(" "), disabled:!a.isEnabled(), title:a.Oc() || "", value:a.Pc() || ""}, a.df() || "")
};
n.of = function(a) {
  U(Kg(a), a.b(), "click", a.kb)
};
n.hd = q;
n.Kb = q;
n.qf = function(a) {
  return a.isEnabled()
};
n.ld = q;
n.ia = function(a, b, c) {
  lh.d.ia.call(this, a, b, c);
  if((a = a.b()) && b == 1) {
    a.disabled = c
  }
};
n.Pc = function(a) {
  return a.value
};
n.od = function(a, b) {
  if(a) {
    a.value = b
  }
};
n.xc = q;
function mh(a, b, c) {
  W.call(this, a, b || lh.Na(), c)
}
z(mh, W);
n = mh.prototype;
n.Pc = l("ag");
n.od = function(a) {
  this.ag = a;
  this.m.od(this.b(), a)
};
n.Oc = l("Wf");
n.ye = function(a) {
  this.Wf = a;
  this.m.ye(this.b(), a)
};
n.c = function() {
  mh.d.c.call(this);
  delete this.ag;
  delete this.Wf
};
n.Q = function() {
  mh.d.Q.call(this);
  if(this.va & 32) {
    var a = this.fb();
    a && U(Kg(this), a, "keyup", this.Xd)
  }
};
n.Xd = function(a) {
  return a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup" ? this.kb(a) : a.keyCode == 32
};
Ug("goog-button", function() {
  return new mh(k)
});
function nh() {
}
z(nh, kh);
ea(nh);
nh.prototype.i = function(a) {
  var b = {"class":"goog-inline-block " + Rg(this, a).join(" "), title:a.Oc() || ""};
  return a.Da().i("div", b, oh(this, a.ca, a.Da()))
};
nh.prototype.Lc = ba("button");
nh.prototype.$b = function(a) {
  return a && a.firstChild.firstChild
};
function oh(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.v() + "-outer-box"), c.i("div", "goog-inline-block " + (a.v() + "-inner-box"), b))
}
nh.prototype.v = ba("goog-custom-button");
function ph(a, b, c) {
  mh.call(this, a, b || nh.Na(), c)
}
z(ph, mh);
Ug("goog-custom-button", function() {
  return new ph(k)
});
var qh = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function rh(a) {
  var b = {}, a = String(a), c = a.charAt(0) == "#" ? a : "#" + a;
  if(sh.test(c)) {
    return b.Vc = th(c), b.type = "hex", b
  }else {
    a: {
      var d = a.match(uh);
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
      return b.Vc = vh(c[0], c[1], c[2]), b.type = "rgb", b
    }else {
      if(qh && (c = qh[a.toLowerCase()])) {
        return b.Vc = c, b.type = "named", b
      }
    }
  }
  e(Error(a + " is not a valid color string"))
}
var wh = /#(.)(.)(.)/;
function th(a) {
  sh.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  a.length == 4 && (a = a.replace(wh, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function xh(a) {
  a = th(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function vh(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || a < 0 || a > 255 || isNaN(b) || b < 0 || b > 255 || isNaN(c) || c < 0 || c > 255) && e(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = yh(a.toString(16));
  b = yh(b.toString(16));
  c = yh(c.toString(16));
  return"#" + a + b + c
}
var sh = /^#(?:[0-9a-f]{3}){1,2}$/i, uh = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function yh(a) {
  return a.length == 1 ? "0" + a : a
}
function zh(a) {
  var b, c = [255, 255, 255];
  b = Math.min(Math.max(0.45, 0), 1);
  return[Math.round(b * c[0] + (1 - b) * a[0]), Math.round(b * c[1] + (1 - b) * a[1]), Math.round(b * c[2] + (1 - b) * a[2])]
}
;function Df(a, b) {
  var c;
  a instanceof Df ? (this.Jb(b == k ? a.ua : b), Ah(this, a.Ga), Bh(this, a.yc), Ch(this, a.La), Dh(this, a.Hb), this.Xa(a.N), Eh(this, a.ha.L()), Fh(this, a.Zb)) : a && (c = String(a).match(Me)) ? (this.Jb(!!b), Ah(this, c[1] || "", !0), Bh(this, c[2] || "", !0), Ch(this, c[3] || "", !0), Dh(this, c[4]), this.Xa(c[5] || "", !0), Eh(this, c[6] || "", !0), Fh(this, c[7] || "", !0)) : (this.Jb(!!b), this.ha = new Gh(k, this, this.ua))
}
n = Df.prototype;
n.Ga = "";
n.yc = "";
n.La = "";
n.Hb = k;
n.N = "";
n.Zb = "";
n.Eg = !1;
n.ua = !1;
n.toString = function() {
  if(this.pa) {
    return this.pa
  }
  var a = [];
  this.Ga && a.push(Hh(this.Ga, Ih), ":");
  this.La && (a.push("//"), this.yc && a.push(Hh(this.yc, Ih), "@"), a.push(t(this.La) ? encodeURIComponent(this.La) : k), this.Hb != k && a.push(":", String(this.Hb)));
  this.N && (this.La && this.N.charAt(0) != "/" && a.push("/"), a.push(Hh(this.N, this.N.charAt(0) == "/" ? Jh : Kh)));
  var b = String(this.ha);
  b && a.push("?", b);
  this.Zb && a.push("#", Hh(this.Zb, Lh));
  return this.pa = a.join("")
};
n.L = function() {
  var a = this.Ga, b = this.yc, c = this.La, d = this.Hb, f = this.N, g = this.ha.L(), h = this.Zb, j = new Df(k, this.ua);
  a && Ah(j, a);
  b && Bh(j, b);
  c && Ch(j, c);
  d && Dh(j, d);
  f && j.Xa(f);
  g && Eh(j, g);
  h && Fh(j, h);
  return j
};
function Ah(a, b, c) {
  Mh(a);
  delete a.pa;
  a.Ga = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.Ga) {
    a.Ga = a.Ga.replace(/:$/, "")
  }
}
function Bh(a, b, c) {
  Mh(a);
  delete a.pa;
  a.yc = c ? b ? decodeURIComponent(b) : "" : b
}
function Ch(a, b, c) {
  Mh(a);
  delete a.pa;
  a.La = c ? b ? decodeURIComponent(b) : "" : b
}
function Dh(a, b) {
  Mh(a);
  delete a.pa;
  b ? (b = Number(b), (isNaN(b) || b < 0) && e(Error("Bad port number " + b)), a.Hb = b) : a.Hb = k
}
n.Xa = function(a, b) {
  Mh(this);
  delete this.pa;
  this.N = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function Eh(a, b, c) {
  Mh(a);
  delete a.pa;
  b instanceof Gh ? (a.ha = b, a.ha.He = a, a.ha.Jb(a.ua)) : (c || (b = Hh(b, Nh)), a.ha = new Gh(b, a, a.ua))
}
function Fh(a, b, c) {
  Mh(a);
  delete a.pa;
  a.Zb = c ? b ? decodeURIComponent(b) : "" : b
}
function Mh(a) {
  a.Eg && e(Error("Tried to modify a read-only Uri"))
}
n.Jb = function(a) {
  this.ua = a;
  this.ha && this.ha.Jb(a);
  return this
};
var Oh = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Hh(a, b) {
  var c = k;
  t(a) && (c = a, Oh.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, Ph)));
  return c
}
function Ph(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Ih = /[#\/\?@]/g, Kh = /[\#\?:]/g, Jh = /[\#\?]/g, Nh = /[\#\?@]/g, Lh = /#/g;
function Gh(a, b, c) {
  this.Aa = a || k;
  this.He = b || k;
  this.ua = !!c
}
function Qh(a) {
  if(!a.o && (a.o = new Pb, a.Aa)) {
    for(var b = a.Aa.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      d >= 0 ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = Rh(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
n = Gh.prototype;
n.o = k;
n.g = k;
n.U = function() {
  Qh(this);
  return this.g
};
n.add = function(a, b) {
  Qh(this);
  Sh(this);
  a = Rh(this, a);
  if(this.ba(a)) {
    var c = this.o.get(a);
    s(c) ? c.push(b) : this.o.set(a, [c, b])
  }else {
    this.o.set(a, b)
  }
  this.g++;
  return this
};
n.remove = function(a) {
  Qh(this);
  a = Rh(this, a);
  if(this.o.ba(a)) {
    Sh(this);
    var b = this.o.get(a);
    s(b) ? this.g -= b.length : this.g--;
    return this.o.remove(a)
  }
  return!1
};
n.clear = function() {
  Sh(this);
  this.o && this.o.clear();
  this.g = 0
};
n.Pa = function() {
  Qh(this);
  return this.g == 0
};
n.ba = function(a) {
  Qh(this);
  a = Rh(this, a);
  return this.o.ba(a)
};
n.Fc = function(a) {
  var b = this.W();
  return $a(b, a)
};
n.Ea = function() {
  Qh(this);
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
n.W = function(a) {
  Qh(this);
  if(a) {
    if(a = Rh(this, a), this.ba(a)) {
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
      s(d) ? eb(a, d) : a.push(d)
    }
  }
  return a
};
n.set = function(a, b) {
  Qh(this);
  Sh(this);
  a = Rh(this, a);
  if(this.ba(a)) {
    var c = this.o.get(a);
    s(c) ? this.g -= c.length : this.g--
  }
  this.o.set(a, b);
  this.g++;
  return this
};
n.get = function(a, b) {
  Qh(this);
  a = Rh(this, a);
  if(this.ba(a)) {
    var c = this.o.get(a);
    return s(c) ? c[0] : c
  }else {
    return b
  }
};
n.toString = function() {
  if(this.Aa) {
    return this.Aa
  }
  if(!this.o) {
    return""
  }
  for(var a = [], b = 0, c = this.o.Ea(), d = 0;d < c.length;d++) {
    var f = c[d], g = ta(f), f = this.o.get(f);
    if(s(f)) {
      for(var h = 0;h < f.length;h++) {
        b > 0 && a.push("&"), a.push(g), f[h] !== "" && a.push("=", ta(f[h])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(g), f !== "" && a.push("=", ta(f)), b++
    }
  }
  return this.Aa = a.join("")
};
function Sh(a) {
  delete a.Id;
  delete a.Aa;
  a.He && delete a.He.pa
}
n.L = function() {
  var a = new Gh;
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
function Rh(a, b) {
  var c = String(b);
  a.ua && (c = c.toLowerCase());
  return c
}
n.Jb = function(a) {
  a && !this.ua && (Qh(this), Sh(this), Nb(this.o, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ua = a
};
n.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Nb(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
var Th;
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
  Th = c
})();
function Uh(a, b) {
  V.call(this, b);
  this.sg = a;
  this.Nd = new Cg(this);
  this.Kc = new Pb
}
z(Uh, V);
n = Uh.prototype;
n.a = Q("goog.ui.media.FlashObject");
n.hh = "window";
n.Me = "#000000";
n.gg = "sameDomain";
n.aa = function(a, b) {
  this.qb = t(a) ? a : Math.round(a) + "px";
  this.Zd = t(b) ? b : Math.round(b) + "px";
  this.b() && wg(this.b() ? this.b().firstChild : k, this.qb, this.Zd);
  return this
};
n.Q = function() {
  Uh.d.Q.call(this);
  var a = this.b(), b;
  b = G ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = G ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = ra(c, this.hh), d = this.Kc.Ea(), f = this.Kc.W(), g = [], h = 0;h < d.length;h++) {
    var j = ta(d[h]), m = ta(f[h]);
    g.push(j + "=" + m)
  }
  b = ra(b, Jg(this), Jg(this), "goog-ui-media-flash-object", va(this.sg), va(g.join("&")), this.Me, this.gg, c);
  a.innerHTML = b;
  this.qb && this.Zd && this.aa(this.qb, this.Zd);
  U(this.Nd, this.b(), Ra(xc), Cc)
};
n.i = function() {
  this.Mf != k && !(Ca(Th, this.Mf) >= 0) && (N(this.a, "Required flash version not found:" + this.Mf), e(Error("Method not supported")));
  var a = this.Da().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
n.c = function() {
  Uh.d.c.call(this);
  this.Kc = k;
  this.Nd.f();
  this.Nd = k
};
function Vh(a) {
  C.call(this, a)
}
z(Vh, C);
Vh.prototype.name = "cw.loadflash.FlashLoadFailed";
o.__loadFlashObject_callbacks = {};
function Wh(a, b, c) {
  function d() {
    f && delete o.__loadFlashObject_callbacks[f]
  }
  var f;
  if(kc && !I("1.8.1.20")) {
    return zd(new Vh("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(Ca(Th, "9") >= 0)) {
    return b = Th, zd(new Vh("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  f = "_" + Ed();
  var h = new nd(d);
  o.__loadFlashObject_callbacks[f] = function() {
    a.setTimeout(function() {
      d();
      td(h, T(g))
    }, 0)
  };
  b.Kc.set("onloadcallback", '__loadFlashObject_callbacks["' + f + '"]()');
  g = Jg(b);
  Lg(b, c);
  return h
}
function Xh(a, b, c) {
  var d = Wh(a, b, c), f = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  wd(d, function(b) {
    a.clearTimeout(f);
    return b
  });
  return d
}
;var lf = 1;
function Yh(a, b) {
  this.ih = a;
  this.xf = b
}
Yh.prototype.ee = 0;
Yh.prototype.cd = 0;
Yh.prototype.Qd = !1;
function Zh(a) {
  var b = [];
  if(a.Qd) {
    return[b, 2]
  }
  var c = a.ee, d = a.ih.responseText;
  for(a.ee = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var f = d.substr(a.cd, c - a.cd), f = f.replace(/\r$/, "");
    if(f.length > a.xf) {
      return a.Qd = !0, [b, 2]
    }
    b.push(f);
    a.cd = c += 1
  }
  return a.ee - a.cd - 1 > a.xf ? (a.Qd = !0, [b, 2]) : [b, lf]
}
;var $h = !(G || H && !I("420+"));
function ai(a, b) {
  this.td = a;
  this.ma = b
}
z(ai, J);
n = ai.prototype;
n.r = k;
n.Va = -1;
n.ff = !1;
n.lf = ["Content-Length", "Server", "Date", "Expires", "Keep-Alive", "Content-Type", "Transfer-Encoding", "Cache-Control"];
function bi(a) {
  var b = Zh(a.Ve), c = b[0], b = b[1], d = o.parent;
  d ? (d.__XHRMaster_onframes(a.ma, c, b), b != lf && a.f()) : a.f()
}
n.Bg = function() {
  bi(this);
  if(!this.qa) {
    var a = o.parent;
    a && a.__XHRMaster_oncomplete(this.ma);
    this.f()
  }
};
n.Rg = function() {
  var a = o.parent;
  if(a) {
    this.Va = this.r.Oa();
    if(this.Va >= 2 && !this.ff) {
      for(var b = new Pb, c = this.lf.length;c--;) {
        var d = this.lf[c];
        try {
          b.set(d, this.r.j.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.U() && (this.ff = !0, a.__XHRMaster_ongotheaders(this.ma, Tb(b)), this.qa)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.ma, this.Va);
    $h && this.Va == 3 && bi(this)
  }else {
    this.f()
  }
};
n.he = function(a, b, c) {
  this.r = new bf;
  M(this.r, "readystatechange", x(this.Rg, this));
  M(this.r, "complete", x(this.Bg, this));
  this.r.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.Ve = new Yh(this.r.j, 1048576)
};
n.c = function() {
  ai.d.c.call(this);
  delete this.Ve;
  this.r && this.r.f();
  delete this.td.tc[this.ma];
  delete this.td
};
function ci() {
  this.tc = {}
}
z(ci, J);
ci.prototype.Hg = function(a, b, c, d) {
  var f = new ai(this, a);
  this.tc[a] = f;
  f.he(b, c, d)
};
ci.prototype.pg = function(a) {
  (a = this.tc[a]) && a.f()
};
ci.prototype.c = function() {
  ci.d.c.call(this);
  for(var a = Ra(this.tc);a.length;) {
    a.pop().f()
  }
  delete this.tc
};
var di = new ci;
o.__XHRSlave_makeRequest = x(di.Hg, di);
o.__XHRSlave_dispose = x(di.pg, di);
function ei(a) {
  this.s = a
}
var fi = /\s*;\s*/;
n = ei.prototype;
n.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && H) {
    var b = "COOKIES_TEST_" + y();
    gi.set(b, "1");
    if(!this.get(b)) {
      return!1
    }
    this.remove(b)
  }
  return a
};
n.set = function(a, b, c, d, f, g) {
  /[;=\s]/.test(a) && e(Error('Invalid cookie name "' + a + '"'));
  /[;\r\n]/.test(b) && e(Error('Invalid cookie value "' + b + '"'));
  ga(c) || (c = -1);
  f = f ? ";domain=" + f : "";
  d = d ? ";path=" + d : "";
  g = g ? ";secure" : "";
  c = c < 0 ? "" : c == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(y() + c * 1E3)).toUTCString();
  this.s.cookie = a + "=" + b + f + d + c + g
};
n.get = function(a, b) {
  for(var c = a + "=", d = (this.s.cookie || "").split(fi), f = 0, g;g = d[f];f++) {
    if(g.indexOf(c) == 0) {
      return g.substr(c.length)
    }
  }
  return b
};
n.remove = function(a, b, c) {
  var d = this.ba(a);
  this.set(a, "", 0, b, c);
  return d
};
n.Ea = function() {
  return hi(this).keys
};
n.W = function() {
  return hi(this).bg
};
n.Pa = function() {
  return!this.s.cookie
};
n.U = function() {
  return!this.s.cookie ? 0 : (this.s.cookie || "").split(fi).length
};
n.ba = function(a) {
  return ga(this.get(a))
};
n.Fc = function(a) {
  for(var b = hi(this).bg, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return!0
    }
  }
  return!1
};
n.clear = function() {
  for(var a = hi(this).keys, b = a.length - 1;b >= 0;b--) {
    this.remove(a[b])
  }
};
function hi(a) {
  for(var a = (a.s.cookie || "").split(fi), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), d == -1 ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{keys:b, bg:c}
}
var gi = new ei(document);
gi.Lh = 3950;
function ii() {
  this.ui = "demosminerva_site_uaid";
  this.vi = "demosminerva_site_uaid_secure"
}
function ji(a) {
  var b = new Uh("/compiled_client/FlashConnector.swf?cb=2ae8d8a79afe8f3a96bb49e8a9339914");
  b.Me = "#777777";
  b.aa(300, 30);
  var c = T("FlashConnectorSwf");
  c || e(Error("no FlashConnectorSwf?"));
  return Xh(a.M, b, c)
}
function ki(a, b, c) {
  var d = new Df(document.location);
  if(c) {
    var f = d.La, b = ji(a);
    ud(b, function(b) {
      b = new oe(a, b);
      return new sf(f, 843, b)
    });
    return b
  }else {
    return b ? (b = qf(), ud(b, function() {
      var a = T("xdrframe-1").contentWindow || (H ? T("xdrframe-1").document || T("xdrframe-1").contentWindow.document : T("xdrframe-1").contentDocument || T("xdrframe-1").contentWindow.document).parentWindow || (H ? T("xdrframe-1").document || T("xdrframe-1").contentWindow.document : T("xdrframe-1").contentDocument || T("xdrframe-1").contentWindow.document).defaultView, b = T("xdrframe-2").contentWindow || (H ? T("xdrframe-2").document || T("xdrframe-2").contentWindow.document : T("xdrframe-2").contentDocument || 
      T("xdrframe-2").contentWindow.document).parentWindow || (H ? T("xdrframe-2").document || T("xdrframe-2").contentWindow.document : T("xdrframe-2").contentDocument || T("xdrframe-2").contentWindow.document).defaultView;
      a || e(Error("could not get primaryWindow xdrframe"));
      b || e(Error("could not get secondaryWindow xdrframe"));
      var c = new Df(o.__XDRSetup.baseurl1);
      c.Xa("/httpface/");
      var d = new Df(o.__XDRSetup.baseurl2);
      d.Xa("/httpface/");
      return new tf(c.toString(), a, d.toString(), b)
    }), b) : (b = d.L(), b.Xa("/httpface/"), Eh(b, "", i), b = new tf(b.toString(), o, b.toString(), o), yd(b))
  }
}
function li() {
  var a = mi, b = (new Df(document.location)).ha, c = b.get("mode") != "http", b = Boolean(Number(b.get("useSub", "1")));
  return ki(a, b, c)
}
;function ni() {
  this.Kf = y()
}
var oi = new ni;
ni.prototype.set = aa("Kf");
ni.prototype.reset = function() {
  this.set(y())
};
ni.prototype.get = l("Kf");
function pi(a) {
  this.Pg = a || "";
  this.Yg = oi
}
pi.prototype.Sf = !0;
pi.prototype.Wg = !0;
pi.prototype.Vg = !0;
pi.prototype.Tf = !1;
function qi(a) {
  return a < 10 ? "0" + a : String(a)
}
function ri(a, b) {
  var c = (a.Vf - b) / 1E3, d = c.toFixed(3), f = 0;
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
function si(a) {
  pi.call(this, a)
}
z(si, pi);
si.prototype.Tf = !0;
function ti(a) {
  this.Qg = x(this.fg, this);
  this.bf = new si;
  this.pf = this.bf.Sf = !1;
  this.e = a;
  this.rg = this.e.ownerDocument || this.e.document;
  var a = ag(this.e), b = k;
  if(G) {
    b = a.s.createStyleSheet(), zg(b)
  }else {
    var c = dg(a.s, "head", i, i)[0];
    c || (b = dg(a.s, "body", i, i)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    zg(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
ti.prototype.fg = function(a) {
  var b = this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight <= 100, c = this.rg.createElement("div");
  c.className = "logmsg";
  var d = this.bf, f;
  switch(a.Eb.value) {
    case Wd.value:
      f = "dbg-sh";
      break;
    case Xd.value:
      f = "dbg-sev";
      break;
    case Yd.value:
      f = "dbg-w";
      break;
    case Zd.value:
      f = "dbg-i";
      break;
    default:
      f = "dbg-f"
  }
  var g = [];
  g.push(d.Pg, " ");
  if(d.Sf) {
    var h = new Date(a.Vf);
    g.push("[", qi(h.getFullYear() - 2E3) + qi(h.getMonth() + 1) + qi(h.getDate()) + " " + qi(h.getHours()) + ":" + qi(h.getMinutes()) + ":" + qi(h.getSeconds()) + "." + qi(Math.floor(h.getMilliseconds() / 10)), "] ")
  }
  d.Wg && g.push("[", Ba(ri(a, d.Yg.get())), "s] ");
  d.Vg && g.push("[", va(a.Gg), "] ");
  g.push('<span class="', f, '">', ua(Ba(va(a.Af))));
  d.Tf && a.Pd && g.push("<br>", ua(Ba(a.Od || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  if(b) {
    this.e.scrollTop = this.e.scrollHeight
  }
};
ti.prototype.clear = function() {
  this.e.innerHTML = ""
};
function ui(a, b, c, d, f, g) {
  arguments.length == 6 ? this.setTransform(a, b, c, d, f, g) : arguments.length != 0 ? e(Error("Insufficient matrix parameters")) : (this.X = this.Z = 1, this.S = this.Y = this.fa = this.ga = 0)
}
n = ui.prototype;
n.L = function() {
  return new ui(this.X, this.S, this.Y, this.Z, this.fa, this.ga)
};
n.setTransform = function(a, b, c, d, f, g) {
  (!ka(a) || !ka(b) || !ka(c) || !ka(d) || !ka(f) || !ka(g)) && e(Error("Invalid transform parameters"));
  this.X = a;
  this.S = b;
  this.Y = c;
  this.Z = d;
  this.fa = f;
  this.ga = g;
  return this
};
n.Re = function(a) {
  this.X = a.X;
  this.S = a.S;
  this.Y = a.Y;
  this.Z = a.Z;
  this.fa = a.fa;
  this.ga = a.ga;
  return this
};
n.scale = function(a, b) {
  this.X *= a;
  this.S *= a;
  this.Y *= b;
  this.Z *= b;
  return this
};
n.translate = function(a, b) {
  this.fa += a * this.X + b * this.Y;
  this.ga += a * this.S + b * this.Z;
  return this
};
n.rotate = function(a, b, c) {
  var d = new ui, f = Math.cos(a), a = Math.sin(a), b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f), c = this.X, d = this.Y;
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
n.toString = function() {
  return"matrix(" + [this.X, this.S, this.Y, this.Z, this.fa, this.ga].join(",") + ")"
};
n.n = function(a) {
  return this == a ? !0 : !a ? !1 : this.X == a.X && this.Y == a.Y && this.fa == a.fa && this.S == a.S && this.Z == a.Z && this.ga == a.ga
};
function Y(a, b) {
  this.e = a;
  this.ta = b;
  this.Hd = !1
}
z(Y, jd);
n = Y.prototype;
n.ta = k;
n.e = k;
n.Xf = k;
n.b = l("e");
n.addEventListener = function(a, b, c, d) {
  M(this.e, a, b, c, d)
};
n.removeEventListener = function(a, b, c, d) {
  bd(this.e, a, b, c, d)
};
n.c = function() {
  Y.d.c.call(this);
  fd(this.e)
};
function Z(a, b, c, d) {
  Y.call(this, a, b);
  this.Ee = c;
  this.ta.ue(this, c);
  this.fill = d;
  this.ta.te(this, d)
}
z(Z, Y);
Z.prototype.fill = k;
Z.prototype.Ee = k;
Z.prototype.tg = l("fill");
Z.prototype.vg = l("Ee");
function vi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
z(vi, Z);
function wi(a, b) {
  Y.call(this, a, b)
}
z(wi, Y);
function xi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
z(xi, Z);
function yi(a, b) {
  Y.call(this, a, b)
}
z(yi, Y);
function zi(a, b) {
  Y.call(this, a, b)
}
z(zi, wi);
zi.prototype.clear = function() {
  lg(this.b())
};
zi.prototype.aa = function(a, b) {
  Ai(this.b(), {width:a, height:b})
};
function Bi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
z(Bi, xi);
function Ci(a, b) {
  Y.call(this, a, b)
}
z(Ci, yi);
Ci.prototype.aa = function(a, b) {
  Ai(this.b(), {width:a, height:b})
};
function Di() {
}
;function Of(a, b) {
  this.Dd = a;
  this.jc = b || 1
}
z(Of, Di);
Of.prototype.ea = l("Dd");
function Nf(a, b) {
  this.qb = a;
  this.Dd = b
}
Nf.prototype.ea = l("Dd");
function Ei() {
  this.B = [];
  this.g = [];
  this.xa = []
}
Ei.prototype.tb = k;
Ei.prototype.T = k;
Ei.prototype.Lb = !0;
var Fi = [2, 2, 6, 6, 0];
n = Ei.prototype;
n.clear = function() {
  this.B.length = 0;
  this.g.length = 0;
  this.xa.length = 0;
  delete this.tb;
  delete this.T;
  delete this.Lb;
  return this
};
n.moveTo = function(a, b) {
  this.B[this.B.length - 1] == 0 ? this.xa.length -= 2 : (this.B.push(0), this.g.push(1));
  this.xa.push(a, b);
  this.T = this.tb = [a, b];
  return this
};
n.lineTo = function(a) {
  var b = this.B[this.B.length - 1];
  b == k && e(Error("Path cannot start with lineTo"));
  b != 1 && (this.B.push(1), this.g.push(0));
  for(b = 0;b < arguments.length;b += 2) {
    var c = arguments[b], d = arguments[b + 1];
    this.xa.push(c, d)
  }
  this.g[this.g.length - 1] += b / 2;
  this.T = [c, d];
  return this
};
n.Ue = function(a) {
  var b = this.B[this.B.length - 1];
  b == k && e(Error("Path cannot start with curve"));
  b != 2 && (this.B.push(2), this.g.push(0));
  for(b = 0;b < arguments.length;b += 6) {
    var c = arguments[b + 4], d = arguments[b + 5];
    this.xa.push(arguments[b], arguments[b + 1], arguments[b + 2], arguments[b + 3], c, d)
  }
  this.g[this.g.length - 1] += b / 6;
  this.T = [c, d];
  return this
};
n.close = function() {
  var a = this.B[this.B.length - 1];
  a == k && e(Error("Path cannot start with close"));
  if(a != 4) {
    this.B.push(4), this.g.push(1), this.T = this.tb
  }
  return this
};
n.arcTo = function(a, b, c, d) {
  var f = this.T[0] - a * Math.cos(qe(c)) + a * Math.cos(qe(c + d)), g = this.T[1] - b * Math.sin(qe(c)) + b * Math.sin(qe(c + d));
  this.B.push(3);
  this.g.push(1);
  this.xa.push(a, b, c, d, f, g);
  this.Lb = !1;
  this.T = [f, g];
  return this
};
n.hg = function(a, b, c, d) {
  var f = this.T[0] - a * Math.cos(qe(c)), g = this.T[1] - b * Math.sin(qe(c)), h = qe(d), d = Math.ceil(Math.abs(h) / Math.PI * 2);
  h /= d;
  for(var c = qe(c), j = 0;j < d;j++) {
    var m = Math.cos(c), p = Math.sin(c), A = 4 / 3 * Math.sin(h / 2) / (1 + Math.cos(h / 2)), r = f + (m - A * p) * a, u = g + (p + A * m) * b;
    c += h;
    m = Math.cos(c);
    p = Math.sin(c);
    this.Ue(r, u, f + (m + A * p) * a, g + (p - A * m) * b, f + m * a, g + p * b)
  }
  return this
};
function Gi(a, b) {
  for(var c = a.xa, d = 0, f = 0, g = a.B.length;f < g;f++) {
    var h = a.B[f], j = Fi[h] * a.g[f];
    b(h, c.slice(d, d + j));
    d += j
  }
}
n.L = function() {
  var a = new this.constructor;
  a.B = this.B.concat();
  a.g = this.g.concat();
  a.xa = this.xa.concat();
  a.tb = this.tb && this.tb.concat();
  a.T = this.T && this.T.concat();
  a.Lb = this.Lb;
  return a
};
var Hi = {};
Hi[0] = Ei.prototype.moveTo;
Hi[1] = Ei.prototype.lineTo;
Hi[4] = Ei.prototype.close;
Hi[2] = Ei.prototype.Ue;
Hi[3] = Ei.prototype.hg;
function Ii(a) {
  if(a.Lb) {
    return a.L()
  }
  var b = new Ei;
  Gi(a, function(a, d) {
    Hi[a].apply(b, d)
  });
  return b
}
Ei.prototype.Pa = function() {
  return this.B.length == 0
};
function Ji(a, b, c, d, f) {
  V.call(this, f);
  this.width = a;
  this.height = b;
  this.ja = c || k;
  this.Vb = d || k
}
z(Ji, V);
n = Ji.prototype;
n.G = k;
n.Ka = 0;
n.ab = 0;
n.ef = function() {
  return this.V()
};
n.V = function() {
  return this.u ? yg(this.b()) : ka(this.width) && ka(this.height) ? new S(this.width, this.height) : k
};
function Ki(a) {
  var b = a.V();
  return b ? b.width / (a.ja ? new S(a.ja, a.Vb) : a.V()).width : 0
}
;function Li(a, b, c, d, f) {
  Ji.call(this, a, b, c, d, f);
  this.Xe = {};
  this.Ie = H && !I(526);
  this.gb = new Cg(this)
}
var Mi;
z(Li, Ji);
function Ni(a, b, c) {
  a = a.P.s.createElementNS("http://www.w3.org/2000/svg", b);
  c && Ai(a, c);
  return a
}
function Ai(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
n = Li.prototype;
n.Ja = function(a, b) {
  (b || this.G).b().appendChild(a.b())
};
n.te = function(a, b) {
  var c = a.b();
  b instanceof Of ? (c.setAttribute("fill", b.ea()), c.setAttribute("fill-opacity", b.jc)) : c.setAttribute("fill", "none")
};
n.ue = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.ea());
    var d = b.qb;
    t(d) && d.indexOf("px") != -1 ? c.setAttribute("stroke-width", parseFloat(d) / Ki(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
n.i = function() {
  var a = Ni(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = Ni(this, "g");
  this.Jd = Ni(this, "defs");
  this.G = new zi(b, this);
  a.appendChild(this.Jd);
  a.appendChild(b);
  this.e = a;
  if(this.ja || this.Ka || this.ab) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.Ie ? this.ud() : this.b().setAttribute("viewBox", this.Ka + " " + this.ab + " " + (this.ja ? this.ja + " " + this.Vb : ""))
  }
};
n.ud = function() {
  if(this.u && (this.ja || this.Ka || !this.ab)) {
    var a = this.V();
    if(a.width == 0) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.Ka, c = -this.ab, d = a.width / this.ja, a = a.height / this.Vb;
      this.G.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
n.aa = function(a, b) {
  wg(this.b(), a, b)
};
n.V = function() {
  if(!kc) {
    return this.u ? yg(this.b()) : Li.d.V.call(this)
  }
  var a = this.width, b = this.height, c = t(a) && a.indexOf("%") != -1, d = t(b) && b.indexOf("%") != -1;
  if(!this.u && (c || d)) {
    return k
  }
  var f, g;
  if(c) {
    f = this.b().parentNode, g = yg(f), a = parseFloat(a) * g.width / 100
  }
  d && (f = f || this.b().parentNode, g = g || yg(f), b = parseFloat(b) * g.height / 100);
  return new S(a, b)
};
n.clear = function() {
  this.G.clear();
  lg(this.Jd);
  this.Xe = {}
};
n.Hc = function(a, b, c, d, f, g, h) {
  a = Ni(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new Bi(a, this, f, g);
  this.Ja(f, h);
  return f
};
n.drawImage = function(a, b, c, d, f, g) {
  a = Ni(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new Ci(a, this);
  this.Ja(f, g);
  return f
};
n.Q = function() {
  var a = this.V();
  Li.d.Q.call(this);
  a || this.dispatchEvent("resize");
  if(this.Ie) {
    var a = this.width, b = this.height;
    typeof a == "string" && a.indexOf("%") != -1 && typeof b == "string" && b.indexOf("%") != -1 && U(this.gb, Oi(), md, this.ud);
    this.ud()
  }
};
n.bb = function() {
  Li.d.bb.call(this);
  this.Ie && Fg(this.gb, Oi(), md, this.ud)
};
n.c = function() {
  delete this.Xe;
  delete this.Jd;
  delete this.G;
  Li.d.c.call(this)
};
function Oi() {
  Mi || (Mi = new kd(400), Mi.start());
  return Mi
}
;function Pi() {
  return this.e = this.ta.P.b(this.R) || this.e
}
function Qi(a, b) {
  this.R = a.id;
  Y.call(this, a, b)
}
z(Qi, wi);
Qi.prototype.b = Pi;
Qi.prototype.clear = function() {
  lg(this.b())
};
Qi.prototype.aa = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  if(this.ta.G != this) {
    c.coordorigin = "0 0"
  }
};
function Ri(a, b, c, d, f, g, h, j) {
  this.R = a.id;
  Z.call(this, a, b, h, j);
  this.ji = c;
  this.ki = d;
  this.Di = f;
  this.Ei = g
}
z(Ri, xi);
Ri.prototype.b = Pi;
function Si(a, b) {
  this.R = a.id;
  Y.call(this, a, b)
}
z(Si, yi);
Si.prototype.b = Pi;
Si.prototype.aa = function(a, b) {
  var c = this.b().style;
  c.width = Ti(a) + "px";
  c.height = Ti(b) + "px"
};
function Ui(a, b, c, d, f) {
  Ji.call(this, a, b, c, d, f);
  this.gb = new Cg(this)
}
z(Ui, Ji);
var Vi = document.documentMode && document.documentMode >= 8;
function Ti(a) {
  return Math.round((parseFloat(a.toString()) - 0.5) * 100)
}
function $(a) {
  return Math.round(parseFloat(a.toString()) * 100)
}
function Wi(a, b) {
  var c = a.P.createElement("g_vml_:" + b);
  c.id = "goog_" + Ea++;
  return c
}
function Xi(a) {
  if(Vi && a.u) {
    a.b().innerHTML = a.b().innerHTML
  }
}
Ui.prototype.Ja = function(a, b) {
  (b || this.G).b().appendChild(a.b());
  Xi(this)
};
Ui.prototype.te = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    f.tagName == "fill" && c.removeChild(f)
  }
  b instanceof Of ? b.ea() == "transparent" ? c.filled = !1 : b.jc != 1 ? (c.filled = !0, d = Wi(this, "fill"), d.opacity = Math.round(b.jc * 100) + "%", d.color = b.ea(), c.appendChild(d)) : (c.filled = !0, c.fillcolor = b.ea()) : c.filled = !1;
  Xi(this)
};
Ui.prototype.ue = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = !0;
    var d = b.qb;
    t(d) && d.indexOf("px") == -1 ? d = parseFloat(d) : d *= Ki(this);
    var f = c.getElementsByTagName("stroke")[0];
    d < 1 ? (f = f || Wi(this, "stroke"), f.opacity = d, f.Gi = "1px", f.color = b.ea(), c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.ea(), c.strokeweight = d + "px")
  }else {
    c.stroked = !1
  }
  Xi(this)
};
function $i(a, b, c, d, f) {
  var g = a.style;
  g.position = "absolute";
  g.left = Ti(b) + "px";
  g.top = Ti(c) + "px";
  g.width = $(d) + "px";
  g.height = $(f) + "px";
  if(a.tagName == "shape") {
    a.coordsize = $(d) + " " + $(f)
  }
}
try {
  eval("document.namespaces")
}catch(aj) {
}
n = Ui.prototype;
n.i = function() {
  var a = this.P.s;
  if(!a.namespaces.g_vml_) {
    Vi ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}"
  }
  var a = this.width, b = this.height, c = this.P.i("div", {style:"overflow:hidden;position:relative;width:" + (t(a) && qa(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (t(b) && qa(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = Wi(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.ja ? $(this.ja) + " " + $(this.Vb) : $(a) + " " + $(b);
  d.coordorigin = ga(this.Ka) ? $(this.Ka) + " " + $(this.ab) : "0 0";
  c.appendChild(d);
  this.G = new Qi(d, this);
  M(c, "resize", x(this.Wd, this))
};
n.Wd = function() {
  var a = yg(this.b()), b = this.G.b().style;
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
n.aa = function(a, b) {
  wg(this.b(), a, b)
};
n.V = function() {
  var a = this.b();
  return new S(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
n.clear = function() {
  this.G.clear()
};
n.Hc = function(a, b, c, d, f, g, h) {
  var j = Wi(this, "oval");
  $i(j, a - c, b - d, c * 2, d * 2);
  a = new Ri(j, this, a, b, c, d, f, g);
  this.Ja(a, h);
  return a
};
n.drawImage = function(a, b, c, d, f, g) {
  var h = Wi(this, "image");
  $i(h, a, b, c, d);
  Vi ? h.src = f : h.setAttribute("src", f);
  a = new Si(h, this);
  this.Ja(a, g);
  return a
};
n.Q = function() {
  Ui.d.Q.call(this);
  this.Wd();
  Xi(this)
};
n.c = function() {
  this.G = k;
  Ui.d.c.call(this)
};
function bj(a) {
  Y.call(this, k, a);
  this.O = []
}
z(bj, wi);
bj.prototype.clear = function() {
  if(this.O.length) {
    this.O.length = 0, cj(this.ta)
  }
};
bj.prototype.aa = function() {
};
bj.prototype.appendChild = function(a) {
  this.O.push(a)
};
bj.prototype.za = function() {
  for(var a = 0, b = this.O.length;a < b;a++) {
    dj(this.ta, this.O[a])
  }
};
function ej(a, b, c, d, f, g, h, j) {
  Z.call(this, a, b, h, j);
  this.lg = c;
  this.mg = d;
  this.Of = f;
  this.Pf = g;
  this.N = new Ei;
  this.N.clear();
  this.N.moveTo(this.lg + this.Of * Math.cos(qe(0)), this.mg + this.Pf * Math.sin(qe(0)));
  this.N.arcTo(this.Of, this.Pf, 0, 360);
  this.N.close();
  this.Ng = new fj(k, b, this.N, h, j)
}
z(ej, xi);
ej.prototype.za = function(a) {
  this.Ng.za(a)
};
function fj(a, b, c, d, f) {
  Z.call(this, a, b, d, f);
  this.Xa(c)
}
z(fj, vi);
fj.prototype.Wb = !1;
fj.prototype.Xa = function(a) {
  this.N = a.Lb ? a : Ii(a);
  this.Wb && cj(this.ta)
};
fj.prototype.za = function(a) {
  this.Wb = !0;
  a.beginPath();
  Gi(this.N, function(b, c) {
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
function gj(a, b, c, d, f, g, h) {
  Y.call(this, a, b);
  this.jh = c;
  this.kh = d;
  this.Ke = f;
  this.Vd = g;
  this.Xg = h
}
z(gj, yi);
gj.prototype.Wb = !1;
gj.prototype.aa = function(a, b) {
  this.Ke = a;
  this.Vd = b;
  this.Wb && cj(this.ta)
};
gj.prototype.za = function(a) {
  this.nf ? (this.Ke && this.Vd && a.drawImage(this.nf, this.jh, this.kh, this.Ke, this.Vd), this.Wb = !0) : (a = new Image, a.onload = x(this.xg, this, a), a.src = this.Xg)
};
gj.prototype.xg = function(a) {
  this.nf = a;
  cj(this.ta)
};
function hj(a, b, c, d, f) {
  Ji.call(this, a, b, c, d, f)
}
z(hj, Ji);
n = hj.prototype;
n.te = function() {
  cj(this)
};
n.ue = function() {
  cj(this)
};
function ij(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.Xf ? b.Xf.L() : new ui, f = d.fa, g = d.ga;
  (f || g) && c.translate(f, g);
  (d = d.S) && c.rotate(Math.asin(d))
}
n.i = function() {
  var a = this.P.i("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Tb = this.P.i("canvas");
  a.appendChild(this.Tb);
  this.Fg = this.G = new bj(this);
  this.Sg = 0;
  jj(this)
};
n.getContext = function() {
  this.b() || this.i();
  if(!this.ub) {
    this.ub = this.Tb.getContext("2d"), this.ub.save()
  }
  return this.ub
};
n.aa = function(a, b) {
  this.width = a;
  this.height = b;
  jj(this);
  cj(this)
};
n.V = function() {
  var a = this.width, b = this.height, c = t(a) && a.indexOf("%") != -1, d = t(b) && b.indexOf("%") != -1;
  if(!this.u && (c || d)) {
    return k
  }
  var f, g;
  if(c) {
    f = this.b().parentNode, g = yg(f), a = parseFloat(a) * g.width / 100
  }
  d && (f = f || this.b().parentNode, g = g || yg(f), b = parseFloat(b) * g.height / 100);
  return new S(a, b)
};
function jj(a) {
  wg(a.b(), a.width, a.height);
  var b = a.V();
  if(b) {
    wg(a.Tb, b.width, b.height), a.Tb.width = b.width, a.Tb.height = b.height, a.ub = k
  }
}
n.reset = function() {
  var a = this.getContext();
  a.restore();
  var b = this.V();
  b.width && b.height && a.clearRect(0, 0, b.width, b.height);
  a.save()
};
n.clear = function() {
  this.reset();
  this.G.clear();
  for(var a = this.b();a.childNodes.length > 1;) {
    a.removeChild(a.lastChild)
  }
};
function cj(a) {
  if(a.Ai) {
    a.zi = !0
  }else {
    if(a.u) {
      a.reset();
      if(a.ja) {
        var b = a.V();
        a.getContext().scale(b.width / a.ja, b.height / a.Vb)
      }
      (a.Ka || a.ab) && a.getContext().translate(-a.Ka, -a.ab);
      ij(a, a.G);
      a.G.za(a.ub);
      a.getContext().restore()
    }
  }
}
function dj(a, b) {
  var c = a.getContext();
  ij(a, b);
  if(!b.tg || !b.vg) {
    b.za(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof Of) {
        if(d.jc != 0) {
          c.globalAlpha = d.jc, c.fillStyle = d.ea(), b.za(c), c.fill(), c.globalAlpha = 1
        }
      }else {
        var f = c.createLinearGradient(d.qi(), d.si(), d.ri(), d.ti());
        f.addColorStop(0, d.oi());
        f.addColorStop(1, d.pi());
        c.fillStyle = f;
        b.za(c);
        c.fill()
      }
    }
    if(d = b.Ee) {
      b.za(c), c.strokeStyle = d.ea(), d = d.qb, t(d) && d.indexOf("px") != -1 && (d = parseFloat(d) / Ki(a)), c.lineWidth = d, c.stroke()
    }
  }
  a.getContext().restore()
}
n.Ja = function(a, b) {
  b = b || this.G;
  b.appendChild(a);
  this.u && !this.Sg && !(b != this.G && b != this.Fg) && dj(this, a)
};
n.Hc = function(a, b, c, d, f, g, h) {
  a = new ej(k, this, a, b, c, d, f, g);
  this.Ja(a, h);
  return a
};
n.drawImage = function(a, b, c, d, f, g) {
  a = new gj(k, this, a, b, c, d, f);
  this.Ja(a, g);
  return a
};
n.c = function() {
  this.ub = k;
  hj.d.c.call(this)
};
n.Q = function() {
  var a = this.V();
  hj.d.Q.call(this);
  a || (jj(this), this.dispatchEvent("resize"));
  cj(this)
};
function kj(a) {
  this.z = [];
  lj(this, a)
}
z(kj, jd);
n = kj.prototype;
n.Wa = k;
n.se = k;
function lj(a, b) {
  b && (Wa(b, function(a) {
    this.rc(a, !1)
  }, a), eb(a.z, b))
}
n.Ud = l("Wa");
n.nd = function(a) {
  if(a != this.Wa) {
    this.rc(this.Wa, !1), this.Wa = a, this.rc(a, !0)
  }
  this.dispatchEvent("select")
};
n.Td = function() {
  return this.Wa ? Va(this.z, this.Wa) : -1
};
n.xe = function(a) {
  this.nd(this.z[a] || k)
};
n.clear = function() {
  ab(this.z);
  this.Wa = k
};
n.c = function() {
  kj.d.c.call(this);
  delete this.z;
  this.Wa = k
};
n.rc = function(a, b) {
  a && (typeof this.se == "function" ? this.se(a, b) : typeof a.we == "function" && a.we(b))
};
function mj() {
}
z(mj, Og);
ea(mj);
var nj = 0;
mj.prototype.i = function(a) {
  var b = Rg(this, a);
  return a.Da().i("div", b ? b.join(" ") : k, oj(this, a.ca, a.ef(), a.Da()))
};
function oj(a, b, c, d) {
  for(var f = [], g = 0, h = 0;g < c.height;g++) {
    for(var j = [], m = 0;m < c.width;m++) {
      var p = b && b[h++];
      j.push(pj(a, p, d))
    }
    f.push(d.i("tr", a.v() + "-row", j))
  }
  return a.Te(f, d)
}
mj.prototype.Te = function(a, b) {
  var c = b.i("table", this.v() + "-table", b.i("tbody", this.v() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Ng(c, "grid");
  return c
};
function pj(a, b, c) {
  a = c.i("td", {"class":a.v() + "-cell", id:a.v() + "-cell-" + nj++}, b);
  Ng(a, "gridcell");
  return a
}
mj.prototype.jd = function(a, b) {
  if(a) {
    var c = dg(document, "tbody", this.v() + "-body", a)[0];
    if(c) {
      var d = 0;
      Wa(c.rows, function(a) {
        Wa(a.cells, function(a) {
          lg(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = ag(a), h = c.rows[0].cells.length;d < b.length;) {
          var j = b[d++];
          f.push(pj(this, j, g));
          if(f.length == h) {
            j = g.i("tr", this.v() + "-row", f), c.appendChild(j), f.length = 0
          }
        }
        if(f.length > 0) {
          for(;f.length < h;) {
            f.push(pj(this, "", g))
          }
          j = g.i("tr", this.v() + "-row", f);
          c.appendChild(j)
        }
      }
    }
    Bg(a, !0, kc)
  }
};
function qj(a, b, c) {
  for(b = b.b();c && c.nodeType == 1 && c != b;) {
    if(c.tagName == "TD" && $a(Wf(c), a.v() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function rj(a, b, c, d) {
  if(c) {
    c = c.parentNode, a = a.v() + "-cell-hover", d ? Xf(c, a) : Yf(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id)
  }
}
mj.prototype.v = ba("goog-palette");
function sj(a, b, c) {
  W.call(this, a, b || mj.Na(), c)
}
z(sj, W);
n = sj.prototype;
n.w = k;
n.hb = -1;
n.I = k;
n.c = function() {
  sj.d.c.call(this);
  if(this.I) {
    this.I.f(), this.I = k
  }
  this.w = k
};
n.kd = function(a) {
  sj.d.kd.call(this, a);
  tj(this);
  this.I ? (this.I.clear(), lj(this.I, a)) : (this.I = new kj(a), this.I.se = x(this.rc, this), U(Kg(this), this.I, "select", this.Ag));
  this.hb = -1
};
n.df = ba(k);
n.Tc = function(a) {
  sj.d.Tc.call(this, a);
  var b = qj(this.m, this, a.target);
  if((!b || !a.relatedTarget || !ng(b, a.relatedTarget)) && b != uj(this)) {
    a = this.ca, vj(this, a ? Va(a, b) : -1)
  }
};
n.Sc = function(a) {
  sj.d.Sc.call(this, a);
  var b = qj(this.m, this, a.target);
  (!b || !a.relatedTarget || !ng(b, a.relatedTarget)) && b == uj(this) && rj(this.m, this, b, !1)
};
n.Rc = function(a) {
  sj.d.Rc.call(this, a);
  if(this.ce() && (a = qj(this.m, this, a.target), a != uj(this))) {
    var b = this.ca;
    vj(this, b ? Va(b, a) : -1)
  }
};
n.kb = function() {
  var a = uj(this);
  return a ? (this.nd(a), this.dispatchEvent("action")) : !1
};
n.jf = function(a) {
  var b = this.ca, b = b ? b.length : 0, c = this.w.width;
  if(b == 0 || !this.isEnabled()) {
    return!1
  }
  if(a.keyCode == 13 || a.keyCode == 32) {
    return this.kb(a)
  }
  if(a.keyCode == 36) {
    return vj(this, 0), !0
  }else {
    if(a.keyCode == 35) {
      return vj(this, b - 1), !0
    }
  }
  var d = this.hb < 0 ? this.Td() : this.hb;
  switch(a.keyCode) {
    case 37:
      d == -1 && (d = b);
      if(d > 0) {
        return vj(this, d - 1), a.preventDefault(), !0
      }
      break;
    case 39:
      if(d < b - 1) {
        return vj(this, d + 1), a.preventDefault(), !0
      }
      break;
    case 38:
      d == -1 && (d = b + c - 1);
      if(d >= c) {
        return vj(this, d - c), a.preventDefault(), !0
      }
      break;
    case 40:
      if(d == -1 && (d = -c), d < b - c) {
        return vj(this, d + c), a.preventDefault(), !0
      }
  }
  return!1
};
n.Ag = function() {
};
n.ef = l("w");
n.aa = function(a, b) {
  this.b() && e(Error("Component already rendered"));
  this.w = ka(a) ? new S(a, b) : a;
  tj(this)
};
function uj(a) {
  var b = a.ca;
  return b && b[a.hb]
}
function vj(a, b) {
  if(b != a.hb) {
    wj(a, a.hb, !1), a.hb = b, wj(a, b, !0)
  }
}
n.Td = function() {
  return this.I ? this.I.Td() : -1
};
n.Ud = function() {
  return this.I ? this.I.Ud() : k
};
n.xe = function(a) {
  this.I && this.I.xe(a)
};
n.nd = function(a) {
  this.I && this.I.nd(a)
};
function wj(a, b, c) {
  if(a.b()) {
    var d = a.ca;
    d && b >= 0 && b < d.length && rj(a.m, a, d[b], c)
  }
}
n.rc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.m.v() + "-cell-selected";
    b ? Xf(c, d) : Yf(c, d)
  }
};
function tj(a) {
  var b = a.ca;
  if(b) {
    if(a.w && a.w.width) {
      if(b = Math.ceil(b.length / a.w.width), !ka(a.w.height) || a.w.height < b) {
        a.w.height = b
      }
    }else {
      b = Math.ceil(Math.sqrt(b.length)), a.w = new S(b, b)
    }
  }else {
    a.w = new S(0, 0)
  }
}
;function xj(a, b, c) {
  this.Dc = a || [];
  sj.call(this, k, b || mj.Na(), c);
  this.Dc = this.Dc;
  this.bd = k;
  this.jd(yj(this))
}
z(xj, sj);
xj.prototype.bd = k;
function zj(a) {
  var b = Aj(Bj);
  if(!a.bd) {
    a.bd = Xa(a.Dc, function(a) {
      return Aj(a)
    })
  }
  a.xe(b ? Va(a.bd, b) : -1)
}
function yj(a) {
  return Xa(a.Dc, function(a) {
    var c = this.Da().i("div", {"class":this.m.v() + "-colorswatch", style:"background-color:" + a});
    c.title = a.charAt(0) == "#" ? "RGB (" + xh(a).join(", ") + ")" : a;
    return c
  }, a)
}
function Aj(a) {
  if(a) {
    try {
      return rh(a).Vc
    }catch(b) {
    }
  }
  return k
}
;var Qf = Q("whiteboard.logger");
window.onerror = function(a, b, c) {
  ee(Qf, "window.onerror: message: " + F(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Cj() {
  this.oe = new Bb
}
function Kf(a, b) {
  Qf.info("streamReset: reasonString=" + F(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  Dj = k
}
Cj.prototype.reset = function(a) {
  Qf.info("resetting with reason: " + a);
  this.C.reset(a)
};
var Dj = k, mi = new Ad(o.window);
function Ej() {
  Dj && (Dj.reset("idle timeout fired"), Dj = k)
}
var Fj = k;
function Gj() {
  Fj != k && mi.M.clearTimeout(Fj);
  Dj && (Fj = mi.M.setTimeout(Ej, 2592E5))
}
M(window, ["click", "focus", "keydown", "keypress"], Gj, !0);
function Hj() {
  var a = new ii;
  Dj = new Cj;
  Gj();
  ud(li(), function(b) {
    Dj || e(Error("lastProto falsy?"));
    b = new wf(mi, Dj, b, a);
    Dj.C = b;
    Cf(Dj.C, ["subprotocol:whiteboard"]);
    b.start();
    return k
  })
}
function Ij() {
  sb.f();
  Pf();
  var a = Dj;
  Qf.info("Telling server to clear the board.");
  var b = a.C, a = [2, a.oe.ob(new yb)], a = (new Eb).ob(a);
  Cf(b, [a])
}
function Jj(a) {
  var b = new Ec(a), a = b.offsetX, c = b.offsetY;
  sb.Hc(a, c, 5, 5, new Nf(1, "black"), new Of(tb), i);
  var d = Dj, f = tb;
  Qf.info("Telling server about circle at: " + a + ", " + c + " with color " + f);
  var b = d.C, g = new xb;
  g.q[1] = a;
  g.q[2] = c;
  g.q[3] = f;
  a = d.oe.ob(g);
  Cf(b, [(new Eb).ob([1, a])])
}
function Pf() {
  var a;
  a = G && !I("9") ? new Ui(800, 600, i, i, i) : H && (!I("420") || lc) ? new hj(800, 600, i, i, i) : new Li(800, 600, i, i, i);
  a.i();
  ub = T("drawArea");
  Lg(a, ub);
  sb = a
}
var Bj = "#E06666";
function Kj(a) {
  var b;
  (a = a.target.Ud()) ? (a = a.style[Ga("background-color")] || "", b = Aj(a)) : b = k;
  b || (b = Bj);
  tb = b;
  gi.set("whiteboard_defaultColor", b);
  a = T("whiteboard-cp-value");
  t("background-color") ? ug(a, b, "background-color") : Qa("background-color", pa(ug, a));
  a = T("whiteboard-cp-value");
  a.title = b;
  b = rh(b).Vc;
  og(a, b);
  b = xh(b);
  b = vh(zh(b)[0], zh(b)[1], zh(b)[2]);
  t("color") ? ug(a, b, "color") : Qa("color", pa(ug, a))
}
function Lj() {
  vb = (new Df(document.location)).ha;
  if(wb = Boolean(Number(vb.get("logging", "0")))) {
    ie().md(ce);
    var a = new ti(document.getElementById("log"));
    if(!0 != a.pf) {
      var b = ie(), c = a.Qg;
      if(!b.dc) {
        b.dc = []
      }
      b.dc.push(c);
      a.pf = !0
    }
  }else {
    ie().md(Vd)
  }
  Qf.info("Logger works.");
  (a = gi.get("whiteboard_defaultColor")) && (Bj = a);
  tb = Bj;
  b = T("whiteboard-controls-left");
  a = T("whiteboard-controls-right");
  c = gg("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  kg(b, c);
  c = gg("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  kg(b, c);
  b = new xj(["#EA9999", "#F9CB9C", "#FFE599", "#B6D7A8", "#A2C4C9", "#9FC5E8", "#B4A7D6", "#D5A6BD", "#E06666", "#F6B26B", "#FFD966", "#93C47D", "#76A5AF", "#6FA8DC", "#8E7CC3", "#C27BA0", "#CC0000", "#E69138", "#F1C232", "#6AA84F", "#45818E", "#3D85C6", "#674EA7", "#A64D79"]);
  b.aa(8);
  Lg(b, T("whiteboard-cp"));
  M(b, "action", Kj);
  zj(b);
  Kj({target:b});
  b = new ph("Clear board");
  eh(b, "clear-board-button");
  Lg(b, a);
  M(b, "action", Ij);
  a = T("drawAreaOverlay");
  Bg(a, !0);
  M(a, "click", Jj, !1);
  Pf();
  Hj()
}
var Mj = "__whiteboard_init".split("."), Nj = o;
!(Mj[0] in Nj) && Nj.execScript && Nj.execScript("var " + Mj[0]);
for(var Oj;Mj.length && (Oj = Mj.shift());) {
  !Mj.length && ga(Lj) ? Nj[Oj] = Lj : Nj = Nj[Oj] ? Nj[Oj] : Nj[Oj] = {}
}
;})();
