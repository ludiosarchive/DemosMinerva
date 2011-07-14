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
  a.Ma = function() {
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
  a || e(Error());
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
  this.Ai = a
}
z(Ha, C);
Ha.prototype.name = "AssertionError";
function Ia(a, b) {
  e(new Ha("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ja(a, b, c) {
  this.$ = a;
  this.H = b;
  this.ie = c.name;
  this.zb = !!c.Di;
  this.yi = !!c.required;
  this.Yb = c.Qd;
  this.Af = c.type;
  this.Ye = !1;
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
      this.Ye = !0
  }
  this.oi = c.defaultValue
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
var Ta = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
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
}, E = D.forEach ? function(a, b, c) {
  D.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = t(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
}, Wa = D.map ? function(a, b, c) {
  return D.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = t(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (f[h] = b.call(c, g[h], h, a))
  }
  return f
}, Xa = D.some ? function(a, b, c) {
  return D.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = t(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return!0
    }
  }
  return!1
}, Ya = D.every ? function(a, b, c) {
  return D.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = t(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && !b.call(c, f[g], g, a)) {
      return!1
    }
  }
  return!0
};
function Za(a, b) {
  return Va(a, b) >= 0
}
function $a(a) {
  if(!s(a)) {
    for(var b = a.length - 1;b >= 0;b--) {
      delete a[b]
    }
  }
  a.length = 0
}
function ab(a, b) {
  var c = Va(a, b);
  c >= 0 && D.splice.call(a, c, 1)
}
function bb(a) {
  return D.concat.apply(D, arguments)
}
function cb(a) {
  if(s(a)) {
    return bb(a)
  }else {
    for(var b = [], c = 0, d = a.length;c < d;c++) {
      b[c] = a[c]
    }
    return b
  }
}
function db(a, b) {
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
function eb(a, b, c, d) {
  D.splice.apply(a, fb(arguments, 1))
}
function fb(a, b, c) {
  return arguments.length <= 2 ? D.slice.call(a, b) : D.slice.call(a, b, c)
}
function gb(a, b) {
  D.sort.call(a, b || hb)
}
function hb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function ib(a, b, c) {
  this.yf = a;
  this.ie = b.name || k;
  this.pi = b.bf || k;
  this.li = b.ki;
  this.La = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.La[b.H] = b
  }
}
function jb(a) {
  a = Ra(a.La);
  gb(a, function(a, c) {
    return a.H - c.H
  });
  return a
}
;function kb() {
  this.u = {};
  this.vb = this.constructor.vb;
  var a = this.vb.La, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.La = b;
  this.Vb = this.fe = k
}
function lb(a, b) {
  for(var c in a.u) {
    a.La[c] || b.call(a, c, a.u[c])
  }
}
n = kb.prototype;
n.ac = l("vb");
n.get = function(a, b) {
  return mb(this, a.H, b)
};
n.set = function(a, b) {
  nb(this, a.H, b)
};
n.add = function(a, b) {
  var c = a.H;
  this.u[c] || (this.u[c] = []);
  this.u[c].push(b)
};
n.clear = function(a) {
  delete this.u[a.H]
};
n.n = function(a) {
  if(!a || this.constructor != a.constructor) {
    return!1
  }
  for(var b = jb(this.ac()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(ob(this, d.H) != ob(a, d.H)) {
      return!1
    }
    if(ob(this, d.H)) {
      var f = Pa(d), g = d.H, h = this.u[g], g = a.u[g];
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
n.Qe = function(a) {
  for(var b = jb(this.ac()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete this.u[d.H];
    if(ob(a, d.H)) {
      var f = Pa(d);
      if(d.zb) {
        var g;
        g = a;
        var h = d.H;
        pb(g, g.La[h]);
        g = g.u[h] || [];
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
  a.Qe(this);
  return a
};
function ob(a, b) {
  return b in a.u && ga(a.u[b])
}
function pb(a, b) {
  if(a.fe) {
    var c = b.H;
    if(!(c in a.Vb)) {
      var d = a.u, f;
      f = a.fe;
      var g = a.u[c];
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
      a.Vb[c] = !0
    }
  }
}
function mb(a, b, c) {
  var d = a.La[b];
  pb(a, d);
  return d.zb ? (c = c || 0, c >= 0 && qb(a, b), a.u[b][c]) : (s(a.u[b]), b in a.u ? a.u[b] : k)
}
function qb(a, b) {
  return a.La[b].zb ? (ob(a, b) && s(a.u[b]), ob(a, b) ? a.u[b].length : 0) : ob(a, b) ? 1 : 0
}
function nb(a, b, c) {
  a.u[b] = c;
  a.Vb && (a.Vb[b] = !0)
}
function rb(a, b) {
  var c = [], d, f;
  for(f in b) {
    b.hasOwnProperty(f) && (f == 0 ? d = b[0] : c.push(new Ja(a, f, b[f])))
  }
  a.vb = new ib(a, d, c);
  a.ac = function() {
    return a.vb
  }
}
;var sb, tb, ub, vb, wb;
function xb() {
  kb.apply(this)
}
z(xb, kb);
xb.prototype.ea = function() {
  return mb(this, 3)
};
function yb() {
  kb.apply(this)
}
z(yb, kb);
rb(xb, {0:{name:"Point", bf:"demosminerva.whiteboard_messages.Point"}, 1:{name:"x", Qd:5, type:Number}, 2:{name:"y", Qd:5, type:Number}, 3:{name:"color", Qd:9, type:String}});
rb(yb, {0:{name:"ClearBoard", bf:"demosminerva.whiteboard_messages.ClearBoard"}});
function zb() {
}
zb.prototype.Nc = function(a, b) {
  return Pa(a) ? this.mb(b) : b
};
zb.prototype.Kd = function(a) {
  new a.yf;
  e(Error("Unimplemented"))
};
zb.prototype.Mc = function(a, b) {
  if(Pa(a)) {
    return this.Kd(a.Af.vb, b)
  }
  if(!a.Ye) {
    return b
  }
  var c = a.Af;
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
  var c = new a.yf;
  c.fe = this;
  c.u = b;
  c.Vb = {};
  return c
};
function Bb() {
}
z(Bb, Ab);
Bb.prototype.mb = function(a) {
  for(var b = jb(a.ac()), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    if(ob(a, f.H)) {
      var g = f.H;
      if(f.zb) {
        c[g] = [];
        for(var h = 0;h < qb(a, f.H);h++) {
          c[g][h] = this.Nc(f, a.get(f, h))
        }
      }else {
        c[g] = this.Nc(f, a.get(f))
      }
    }
  }
  lb(a, function(a, b) {
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
Eb.prototype.mb = function(a) {
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
          if(Cb(a.dg)) {
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
function F(a, b, c) {
  c || (c = []);
  Jb(a, b, c)
}
function G(a) {
  var b = [];
  F(a, b, i);
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
      E(a, b, c)
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
    return Ya(a, b, i)
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
  this.l = [];
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
n.Ie = 0;
n.U = l("g");
n.W = function() {
  Qb(this);
  for(var a = [], b = 0;b < this.l.length;b++) {
    a.push(this.p[this.l[b]])
  }
  return a
};
n.Ea = function() {
  Qb(this);
  return this.l.concat()
};
n.ba = function(a) {
  return Rb(this.p, a)
};
n.Fc = function(a) {
  for(var b = 0;b < this.l.length;b++) {
    var c = this.l[b];
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
  for(var d, f = 0;d = this.l[f];f++) {
    if(!c(this.get(d), a.get(d))) {
      return!1
    }
  }
  return!0
};
function Sb(a, b) {
  return a === b
}
n.Oa = function() {
  return this.g == 0
};
n.clear = function() {
  this.p = {};
  this.Ie = this.g = this.l.length = 0
};
n.remove = function(a) {
  return Rb(this.p, a) ? (delete this.p[a], this.g--, this.Ie++, this.l.length > 2 * this.g && Qb(this), !0) : !1
};
function Qb(a) {
  if(a.g != a.l.length) {
    for(var b = 0, c = 0;b < a.l.length;) {
      var d = a.l[b];
      Rb(a.p, d) && (a.l[c++] = d);
      b++
    }
    a.l.length = c
  }
  if(a.g != a.l.length) {
    for(var f = {}, c = b = 0;b < a.l.length;) {
      d = a.l[b], Rb(f, d) || (a.l[c++] = d, f[d] = 1), b++
    }
    a.l.length = c
  }
}
n.get = function(a, b) {
  return Rb(this.p, a) ? this.p[a] : b
};
n.set = function(a, b) {
  Rb(this.p, a) || (this.g++, this.l.push(a), this.Ie++);
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
  for(var b = {}, c = 0;c < a.l.length;c++) {
    var d = a.l[c];
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
  this.pb = a;
  this.lb = b
}
Vb.prototype.n = function(a) {
  return a instanceof Vb && this.pb == a.pb && this.lb.join(",") == a.lb
};
Vb.prototype.F = function(a, b) {
  a.push("new SACK(", String(this.pb), ", ");
  F(this.lb, a, b);
  a.push(")")
};
function Wb() {
  this.z = new Pb
}
n = Wb.prototype;
n.ub = -1;
n.w = 0;
n.append = function(a) {
  var b = Ub(a);
  this.z.set(this.ub + 1, [a, b]);
  this.ub += 1;
  this.w += b
};
n.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
n.F = function(a) {
  a.push("<Queue with ", String(this.z.U()), " item(s), counter=#", String(this.ub), ", size=", String(this.w), ">")
};
function Xb(a) {
  Qb(a.z);
  gb(a.z.l);
  return a.z.l
}
function Yb() {
  this.Xa = new Pb
}
Yb.prototype.Bb = -1;
Yb.prototype.w = 0;
function Zb(a) {
  var b = a.Xa.Ea();
  gb(b);
  return new Vb(a.Bb, b)
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
var jc = bc, H = cc, kc = fc, I = dc, lc = ec, mc = o.navigator, nc = (mc && mc.platform || "").indexOf("Mac") != -1, oc;
a: {
  var pc = "", qc;
  if(jc && o.opera) {
    var rc = o.opera.version, pc = typeof rc == "function" ? rc() : rc
  }else {
    if(kc ? qc = /rv\:([^\);]+)(\)|;)/ : H ? qc = /MSIE\s+([^\);]+)(\)|;)/ : I && (qc = /WebKit\/(\S+)/), qc) {
      var sc = qc.exec(gc()), pc = sc ? sc[1] : ""
    }
  }
  if(H) {
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
function J(a) {
  return vc[a] || (vc[a] = Ca(oc, a) >= 0)
}
var wc = {};
function xc() {
  return wc[9] || (wc[9] = H && document.documentMode && document.documentMode >= 9)
}
;var yc;
var zc = {qh:"click", vh:"dblclick", Qh:"mousedown", Uh:"mouseup", Th:"mouseover", Sh:"mouseout", Rh:"mousemove", di:"selectstart", Kh:"keypress", Jh:"keydown", Lh:"keyup", oh:"blur", Dh:"focus", wh:"deactivate", Eh:H ? "focusin" : "DOMFocusIn", Fh:H ? "focusout" : "DOMFocusOut", ph:"change", ci:"select", ei:"submit", Ih:"input", Zh:"propertychange", Ah:"dragstart", xh:"dragenter", zh:"dragover", yh:"dragleave", Bh:"drop", ii:"touchstart", hi:"touchmove", gi:"touchend", fi:"touchcancel", sh:"contextmenu", 
Ch:"error", Hh:"help", Mh:"load", Nh:"losecapture", $h:"readystatechange", ai:"resize", bi:"scroll", ji:"unload", Gh:"hashchange", Vh:"pagehide", Wh:"pageshow", Yh:"popstate", th:"copy", Xh:"paste", uh:"cut", lh:"beforecopy", mh:"beforecut", nh:"beforepaste", Ph:"message", rh:"connect"};
var Ac = !H || xc(), Bc = H && !J("8");
function K() {
}
K.prototype.qa = !1;
K.prototype.f = function() {
  if(!this.qa) {
    this.qa = !0, this.c()
  }
};
K.prototype.c = function() {
  this.ng && Cc.apply(k, this.ng)
};
function Cc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? Cc.apply(k, d) : d && typeof d.f == "function" && d.f()
  }
}
;function Dc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
z(Dc, K);
n = Dc.prototype;
n.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
n.jb = !1;
n.pc = !0;
n.stopPropagation = function() {
  this.jb = !0
};
n.preventDefault = function() {
  this.pc = !1
};
function Ec(a) {
  a.stopPropagation()
}
;var Fc = new Function("a", "return a");
function Gc(a, b) {
  a && this.ec(a, b)
}
z(Gc, Dc);
var Hc = [1, 4, 2];
n = Gc.prototype;
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
  Dc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(kc) {
      var f;
      a: {
        try {
          Fc(d.nodeName);
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
  delete this.jb
};
function Ic(a) {
  return Ac ? a.Ba.button == 0 : a.type == "click" ? !0 : !!(a.Ba.button & Hc[0])
}
n.stopPropagation = function() {
  Gc.d.stopPropagation.call(this);
  this.Ba.stopPropagation ? this.Ba.stopPropagation() : this.Ba.cancelBubble = !0
};
n.preventDefault = function() {
  Gc.d.preventDefault.call(this);
  var a = this.Ba;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, Bc) {
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
  Gc.d.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Ba = k
};
function Jc() {
}
var Kc = 0;
n = Jc.prototype;
n.key = 0;
n.kb = !1;
n.Bd = !1;
n.ec = function(a, b, c, d, f, g) {
  v(a) ? this.qf = !0 : a && a.handleEvent && v(a.handleEvent) ? this.qf = !1 : e(Error("Invalid listener argument"));
  this.Eb = a;
  this.If = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Uc = g;
  this.Bd = !1;
  this.key = ++Kc;
  this.kb = !1
};
n.handleEvent = function(a) {
  return this.qf ? this.Eb.call(this.Uc || this.src, a) : this.Eb.handleEvent.call(this.Eb, a)
};
var Lc, Mc = (Lc = "ScriptEngine" in o && o.ScriptEngine() == "JScript") ? o.ScriptEngineMajorVersion() + "." + o.ScriptEngineMinorVersion() + "." + o.ScriptEngineBuildVersion() : "0";
function Nc(a, b) {
  this.uf = b;
  this.bb = [];
  a > this.uf && e(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.bb.push(this.ya ? this.ya() : {})
  }
}
z(Nc, K);
Nc.prototype.ya = k;
Nc.prototype.Ze = k;
Nc.prototype.getObject = function() {
  return this.bb.length ? this.bb.pop() : this.ya ? this.ya() : {}
};
function Oc(a, b) {
  a.bb.length < a.uf ? a.bb.push(b) : Pc(a, b)
}
function Pc(a, b) {
  if(a.Ze) {
    a.Ze(b)
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
Nc.prototype.c = function() {
  Nc.d.c.call(this);
  for(var a = this.bb;a.length;) {
    Pc(this, a.pop())
  }
  delete this.bb
};
var Qc, Rc, Sc, Tc, Uc, Vc, Wc, Xc, Yc, Zc, $c;
(function() {
  function a() {
    return{g:0, la:0}
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
    return new Jc
  }
  function f() {
    return new Gc
  }
  var g = Lc && !(Ca(Mc, "5.7") >= 0), h;
  Vc = function(a) {
    h = a
  };
  if(g) {
    Qc = function() {
      return j.getObject()
    };
    Rc = function(a) {
      Oc(j, a)
    };
    Sc = function() {
      return m.getObject()
    };
    Tc = function(a) {
      Oc(m, a)
    };
    Uc = function() {
      return p.getObject()
    };
    Wc = function() {
      Oc(p, c())
    };
    Xc = function() {
      return A.getObject()
    };
    Yc = function(a) {
      Oc(A, a)
    };
    Zc = function() {
      return r.getObject()
    };
    $c = function(a) {
      Oc(r, a)
    };
    var j = new Nc(0, 600);
    j.ya = a;
    var m = new Nc(0, 600);
    m.ya = b;
    var p = new Nc(0, 600);
    p.ya = c;
    var A = new Nc(0, 600);
    A.ya = d;
    var r = new Nc(0, 600);
    r.ya = f
  }else {
    Qc = a, Rc = q, Sc = b, Tc = q, Uc = c, Wc = q, Xc = d, Yc = q, Zc = f, $c = q
  }
})();
var ad = {}, L = {}, bd = {}, cd = {};
function M(a, b, c, d, f) {
  if(b) {
    if(s(b)) {
      for(var g = 0;g < b.length;g++) {
        M(a, b[g], c, d, f)
      }
      return k
    }else {
      var d = !!d, h = L;
      b in h || (h[b] = Qc());
      h = h[b];
      d in h || (h[d] = Qc(), h.g++);
      var h = h[d], j = w(a), m;
      h.la++;
      if(h[j]) {
        m = h[j];
        for(g = 0;g < m.length;g++) {
          if(h = m[g], h.Eb == c && h.Uc == f) {
            if(h.kb) {
              break
            }
            return m[g].key
          }
        }
      }else {
        m = h[j] = Sc(), h.g++
      }
      g = Uc();
      g.src = a;
      h = Xc();
      h.ec(c, g, a, b, d, f);
      c = h.key;
      g.key = c;
      m.push(h);
      ad[c] = h;
      bd[j] || (bd[j] = Sc());
      bd[j].push(h);
      a.addEventListener ? (a == o || !a.Hd) && a.addEventListener(b, g, d) : a.attachEvent(b in cd ? cd[b] : cd[b] = "on" + b, g);
      return c
    }
  }else {
    e(Error("Invalid event type"))
  }
}
function dd(a, b, c, d, f) {
  if(s(b)) {
    for(var g = 0;g < b.length;g++) {
      dd(a, b[g], c, d, f)
    }
    return k
  }
  a = M(a, b, c, d, f);
  ad[a].Bd = !0;
  return a
}
function ed(a, b, c, d, f) {
  if(s(b)) {
    for(var g = 0;g < b.length;g++) {
      ed(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = fd(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Eb == c && a[g].capture == d && a[g].Uc == f) {
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
  if(b.kb) {
    return!1
  }
  var c = b.src, d = b.type, f = b.If, g = b.capture;
  c.removeEventListener ? (c == o || !c.Hd) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in cd ? cd[d] : cd[d] = "on" + d, f);
  c = w(c);
  f = L[d][g][c];
  if(bd[c]) {
    var h = bd[c];
    ab(h, b);
    h.length == 0 && delete bd[c]
  }
  b.kb = !0;
  f.Cf = !0;
  hd(d, g, c, f);
  delete ad[a];
  return!0
}
function hd(a, b, c, d) {
  if(!d.ad && d.Cf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      if(d[f].kb) {
        var h = d[f].If;
        h.src = k;
        Wc(h);
        Yc(d[f])
      }else {
        f != g && (d[g] = d[f]), g++
      }
    }
    d.length = g;
    d.Cf = !1;
    g == 0 && (Tc(d), delete L[a][b][c], L[a][b].g--, L[a][b].g == 0 && (Rc(L[a][b]), delete L[a][b], L[a].g--), L[a].g == 0 && (Rc(L[a]), delete L[a]))
  }
}
function id(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Qa(bd, function(a) {
      for(var f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          gd(g.key), c++
        }
      }
    })
  }else {
    if(a = w(a), bd[a]) {
      for(var a = bd[a], f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          gd(g.key), c++
        }
      }
    }
  }
}
function fd(a, b, c) {
  var d = L;
  return b in d && (d = d[b], c in d && (d = d[c], a = w(a), d[a])) ? d[a] : k
}
function jd(a, b, c, d, f) {
  var g = 1, b = w(b);
  if(a[b]) {
    a.la--;
    a = a[b];
    a.ad ? a.ad++ : a.ad = 1;
    try {
      for(var h = a.length, j = 0;j < h;j++) {
        var m = a[j];
        m && !m.kb && (g &= kd(m, f) !== !1)
      }
    }finally {
      a.ad--, hd(c, d, b, a)
    }
  }
  return Boolean(g)
}
function kd(a, b) {
  var c = a.handleEvent(b);
  a.Bd && gd(a.key);
  return c
}
Vc(function(a, b) {
  if(!ad[a]) {
    return!0
  }
  var c = ad[a], d = c.type, f = L;
  if(!(d in f)) {
    return!0
  }
  var f = f[d], g, h;
  yc === i && (yc = H && !o.addEventListener);
  if(yc) {
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
    p = Zc();
    p.ec(g, this);
    g = !0;
    try {
      if(j) {
        for(var r = Sc(), u = p.currentTarget;u;u = u.parentNode) {
          r.push(u)
        }
        h = f[!0];
        h.la = h.g;
        for(var B = r.length - 1;!p.jb && B >= 0 && h.la;B--) {
          p.currentTarget = r[B], g &= jd(h, r[B], d, !0, p)
        }
        if(m) {
          h = f[!1];
          h.la = h.g;
          for(B = 0;!p.jb && B < r.length && h.la;B++) {
            p.currentTarget = r[B], g &= jd(h, r[B], d, !1, p)
          }
        }
      }else {
        g = kd(c, p)
      }
    }finally {
      if(r) {
        r.length = 0, Tc(r)
      }
      p.f();
      $c(p)
    }
    return g
  }
  d = new Gc(b, this);
  try {
    g = kd(c, d)
  }finally {
    d.f()
  }
  return g
});
var ld = 0;
function md() {
}
z(md, K);
n = md.prototype;
n.Hd = !0;
n.dd = k;
n.ue = aa("dd");
n.addEventListener = function(a, b, c, d) {
  M(this, a, b, c, d)
};
n.removeEventListener = function(a, b, c, d) {
  ed(this, a, b, c, d)
};
n.dispatchEvent = function(a) {
  var b = a.type || a, c = L;
  if(b in c) {
    if(t(a)) {
      a = new Dc(a, this)
    }else {
      if(a instanceof Dc) {
        a.target = a.target || this
      }else {
        var d = a, a = new Dc(b, this);
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
      for(var h = f.length - 1;!a.jb && h >= 0 && g.la;h--) {
        a.currentTarget = f[h], d &= jd(g, f[h], a.type, !0, a) && a.pc != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.la = g.g, b) {
        for(h = 0;!a.jb && h < f.length && g.la;h++) {
          a.currentTarget = f[h], d &= jd(g, f[h], a.type, !1, a) && a.pc != !1
        }
      }else {
        for(f = this;!a.jb && f && g.la;f = f.dd) {
          a.currentTarget = f, d &= jd(g, f, a.type, !1, a) && a.pc != !1
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
  md.d.c.call(this);
  id(this);
  this.dd = k
};
function nd(a, b) {
  this.Xc = a || 1;
  this.vc = b || od;
  this.Ad = x(this.$g, this);
  this.ee = y()
}
z(nd, md);
nd.prototype.enabled = !1;
var od = o.window;
n = nd.prototype;
n.oa = k;
n.$g = function() {
  if(this.enabled) {
    var a = y() - this.ee;
    if(a > 0 && a < this.Xc * 0.8) {
      this.oa = this.vc.setTimeout(this.Ad, this.Xc - a)
    }else {
      if(this.dispatchEvent(pd), this.enabled) {
        this.oa = this.vc.setTimeout(this.Ad, this.Xc), this.ee = y()
      }
    }
  }
};
n.start = function() {
  this.enabled = !0;
  if(!this.oa) {
    this.oa = this.vc.setTimeout(this.Ad, this.Xc), this.ee = y()
  }
};
n.stop = function() {
  this.enabled = !1;
  if(this.oa) {
    this.vc.clearTimeout(this.oa), this.oa = k
  }
};
n.c = function() {
  nd.d.c.call(this);
  this.stop();
  delete this.vc
};
var pd = "tick";
ld++;
ld++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function qd(a, b) {
  this.Cc = [];
  this.Me = a;
  this.Ve = b || k
}
n = qd.prototype;
n.ab = !1;
n.bc = !1;
n.kc = 0;
n.ze = !1;
n.jg = !1;
n.cancel = function() {
  if(this.ab) {
    this.oc instanceof qd && this.oc.cancel()
  }else {
    if(this.Me ? this.Me.call(this.Ve, this) : this.ze = !0, !this.ab) {
      var a = new rd(this);
      sd(this);
      td(this, !1, a)
    }
  }
};
n.Pe = function(a, b) {
  td(this, a, b);
  this.kc--;
  this.kc == 0 && this.ab && ud(this)
};
function td(a, b, c) {
  a.ab = !0;
  a.oc = c;
  a.bc = !b;
  ud(a)
}
function sd(a) {
  if(a.ab) {
    a.ze || e(new vd(a)), a.ze = !1
  }
}
function wd(a, b) {
  sd(a);
  td(a, !0, b)
}
function xd(a, b) {
  yd(a, b, k, i)
}
function yd(a, b, c, d) {
  a.Cc.push([b, c, d]);
  a.ab && ud(a)
}
function zd(a, b) {
  yd(a, b, b, i)
}
function Ad(a) {
  return Xa(a.Cc, function(a) {
    return v(a[1])
  })
}
function ud(a) {
  a.Fe && a.ab && Ad(a) && (o.clearTimeout(a.Fe), delete a.Fe);
  for(var b = a.oc, c = !1, d = !1;a.Cc.length && a.kc == 0;) {
    var f = a.Cc.shift(), g = f[0], h = f[1], f = f[2];
    if(g = a.bc ? h : g) {
      try {
        var j = g.call(f || a.Ve, b);
        if(ga(j)) {
          a.bc = a.bc && (j == b || j instanceof Error), a.oc = b = j
        }
        b instanceof qd && (d = !0, a.kc++)
      }catch(m) {
        b = m, a.bc = !0, Ad(a) || (c = !0)
      }
    }
  }
  a.oc = b;
  if(d && a.kc) {
    yd(b, x(a.Pe, a, !0), x(a.Pe, a, !1)), b.jg = !0
  }
  if(c) {
    a.Fe = o.setTimeout(function() {
      e(b)
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
  sd(b);
  td(b, !1, a);
  return b
}
function vd(a) {
  C.call(this);
  this.mg = a
}
z(vd, C);
vd.prototype.message = "Already called";
function rd(a) {
  C.call(this);
  this.mg = a
}
z(rd, C);
rd.prototype.message = "Deferred was cancelled";
function Dd(a) {
  this.M = a;
  this.Jc = [];
  this.$e = [];
  this.ig = x(this.eh, this)
}
Dd.prototype.oa = k;
function Ed(a, b, c, d) {
  a.Jc.push([b, c, d]);
  if(a.oa == k) {
    a.oa = a.M.setTimeout(a.ig, 0)
  }
}
Dd.prototype.eh = function() {
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
    a = this.$e;
    this.$e = [];
    for(b = 0;b < a.length;b++) {
      wd(a[b], k)
    }
  }
};
new Dd(o.window);
function Fd(a, b) {
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
        a.push('<property id="', d, '">'), Fd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if(typeof b.getFullYear == "function") {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && fa(b[c]) != "function" && (a.push('<property id="', va(c), '">'), Fd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function Gd(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, f = arguments;
  d.push("<arguments>");
  for(var g = f.length, h = 1;h < g;h++) {
    Fd(d, f[h])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;function Hd() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ y()).toString(36)
}
function Id(a) {
  return a.substr(0, a.length - 1)
}
var Jd = /^(0|[1-9]\d*)$/, Kd = /^(0|\-?[1-9]\d*)$/;
function Ld(a) {
  var b = Md;
  return Jd.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function Nd(a) {
  this.p = new Pb;
  a && this.yd(a)
}
function Od(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + w(a) : b.substr(0, 1) + a
}
n = Nd.prototype;
n.U = function() {
  return this.p.U()
};
n.add = function(a) {
  this.p.set(Od(a), a)
};
n.yd = function(a) {
  for(var a = Lb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
n.pe = function(a) {
  for(var a = Lb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
n.remove = function(a) {
  return this.p.remove(Od(a))
};
n.clear = function() {
  this.p.clear()
};
n.Oa = function() {
  return this.p.Oa()
};
n.contains = function(a) {
  return this.p.ba(Od(a))
};
n.W = function() {
  return this.p.W()
};
n.L = function() {
  return new Nd(this)
};
n.n = function(a) {
  return this.U() == Kb(a) && Pd(this, a)
};
function Pd(a, b) {
  var c = Kb(b);
  if(a.U() > c) {
    return!1
  }
  !(b instanceof Nd) && c > 5 && (b = new Nd(b));
  return Ob(a, function(a) {
    if(typeof b.contains == "function") {
      a = b.contains(a)
    }else {
      if(typeof b.Fc == "function") {
        a = b.Fc(a)
      }else {
        if(ha(b) || t(b)) {
          a = Za(b, a)
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
;function Qd(a) {
  return Rd(a || arguments.callee.caller, [])
}
function Rd(a, b) {
  var c = [];
  if(Za(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(Sd(a) + "(");
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
            g = (g = Sd(g)) ? g : "[fn]";
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
        c.push(Rd(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Sd(a) {
  if(Td[a]) {
    return Td[a]
  }
  a = String(a);
  if(!Td[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Td[a] = b ? b[1] : "[Anonymous]"
  }
  return Td[a]
}
var Td = {};
function Ud(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
Ud.prototype.Ug = 0;
Ud.prototype.Od = k;
Ud.prototype.Nd = k;
var Vd = 0;
Ud.prototype.reset = function(a, b, c, d, f) {
  this.Ug = typeof f == "number" ? f : Vd++;
  this.Uf = d || y();
  this.Db = a;
  this.zf = b;
  this.Gg = c;
  delete this.Od;
  delete this.Nd
};
Ud.prototype.md = aa("Db");
function Wd(a) {
  this.ie = a
}
Wd.prototype.$ = k;
Wd.prototype.Db = k;
Wd.prototype.O = k;
Wd.prototype.dc = k;
function Xd(a, b) {
  this.name = a;
  this.value = b
}
Xd.prototype.toString = l("name");
var Yd = new Xd("OFF", Infinity), Zd = new Xd("SHOUT", 1200), $d = new Xd("SEVERE", 1E3), ae = new Xd("WARNING", 900), be = new Xd("INFO", 800), ce = new Xd("CONFIG", 700), de = new Xd("FINE", 500), ee = new Xd("FINEST", 300), fe = new Xd("ALL", 0);
n = Wd.prototype;
n.getParent = l("$");
n.md = aa("Db");
function ge(a) {
  if(a.Db) {
    return a.Db
  }
  if(a.$) {
    return ge(a.$)
  }
  Ia("Root logger has no level set.");
  return k
}
n.log = function(a, b, c) {
  if(a.value >= ge(this).value) {
    a = this.ug(a, b, c);
    o.console && o.console.markTimeline && o.console.markTimeline("log:" + a.zf);
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
  var d = new Ud(a, String(b), this.ie);
  if(c) {
    d.Od = c;
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
          m = c.lineNumber || c.zi || "Not available"
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
      f = "Message: " + va(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + va(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + va(Qd(g) + "-> ")
    }catch(B) {
      f = "Exception trying to expose exception! You win, we lose. " + B
    }
    d.Nd = f
  }
  return d
};
function he(a, b) {
  a.log($d, b, i)
}
function N(a, b) {
  a.log(ae, b, i)
}
n.info = function(a, b) {
  this.log(be, a, b)
};
function O(a, b) {
  a.log(de, b, i)
}
function P(a, b) {
  a.log(ee, b, i)
}
var ie = {}, je = k;
function ke() {
  je || (je = new Wd(""), ie[""] = je, je.md(ce))
}
function le() {
  ke();
  return je
}
function Q(a) {
  ke();
  var b;
  if(!(b = ie[a])) {
    b = new Wd(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Q(a.substr(0, c));
    if(!c.O) {
      c.O = {}
    }
    c.O[d] = b;
    b.$ = c;
    ie[a] = b
  }
  return b
}
;function me(a, b) {
  this.R = "_" + Hd();
  this.td = a;
  this.Ra = b;
  this.Wa = a.Wa
}
z(me, K);
n = me.prototype;
n.hb = !0;
n.Gc = !1;
n.a = Q("cw.net.FlashSocket");
n.F = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.R);
  a.push("'>")
};
function ne(a, b, c) {
  b == "frames" ? (a = a.Ra, oe(a.K), pe(a.K, c)) : b == "stillreceiving" ? (c = a.Ra, P(c.a, "onstillreceiving"), oe(c.K)) : b == "connect" ? (c = a.Ra, c.a.info("onconnect"), oe(c.K), a = c.Qb, c.Qb = k, a.length && (P(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.pd.Ac(a))) : b == "close" ? (a.hb = !1, a.f()) : b == "ioerror" ? (a.hb = !1, b = a.Ra, N(b.a, "onioerror: " + G(c)), qe(b.K, !1), a.f()) : b == "securityerror" ? (a.hb = !1, b = a.Ra, N(b.a, "onsecurityerror: " + 
  G(c)), qe(b.K, !1), a.f()) : e(Error("bad event: " + b))
}
n.Ed = function(a, b) {
  try {
    var c = this.Wa.CallFunction(Gd("__FC_connect", this.R, a, b, "<int32/>\n"))
  }catch(d) {
    he(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message);
    this.Gc = !0;
    this.hb = !1;
    this.f();
    return
  }
  c != '"OK"' && e(Error("__FC_connect failed? ret: " + c))
};
n.Ac = function(a) {
  try {
    var b = this.Wa.CallFunction(Gd("__FC_writeFrames", this.R, a))
  }catch(c) {
    he(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message);
    this.Gc = !0;
    this.hb = !1;
    this.f();
    return
  }
  b != '"OK"' && (b == '"no such instance"' ? (N(this.a, "Flash no longer knows of " + this.R + "; disposing."), this.f()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
n.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.hb);
  me.d.c.call(this);
  var a = this.Wa;
  delete this.Wa;
  if(this.hb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(Gd("__FC_close", this.R)))
    }catch(b) {
      he(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Gc = !0
    }
  }
  if(this.Gc) {
    a = this.Ra, N(a.a, "oncrash"), qe(a.K, !0)
  }else {
    this.Ra.onclose()
  }
  delete this.Ra;
  delete this.td.xb[this.R]
};
function re(a, b) {
  this.J = a;
  this.Wa = b;
  this.xb = {};
  this.Cd = "__FST_" + Hd();
  o[this.Cd] = x(this.qg, this);
  var c = b.CallFunction(Gd("__FC_setCallbackFunc", this.Cd));
  c != '"OK"' && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
z(re, K);
n = re.prototype;
n.a = Q("cw.net.FlashSocketTracker");
n.F = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  F(this.xb, a, b);
  a.push(">")
};
n.Gd = function(a) {
  a = new me(this, a);
  return this.xb[a.R] = a
};
n.og = function(a, b, c, d) {
  var f = this.xb[a];
  f ? b == "frames" && d ? (ne(f, "ioerror", "FlashConnector hadError while handling data."), f.f()) : ne(f, b, c) : N(this.a, "Cannot dispatch because we have no instance: " + G([a, b, c, d]))
};
n.qg = function(a, b, c, d) {
  try {
    Ed(this.J, this.og, this, [a, b, c, d])
  }catch(f) {
    o.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
n.c = function() {
  re.d.c.call(this);
  for(var a = Ra(this.xb);a.length;) {
    a.pop().f()
  }
  delete this.xb;
  delete this.Wa;
  o[this.Cd] = i
};
function se(a) {
  this.K = a;
  this.Qb = []
}
z(se, K);
n = se.prototype;
n.a = Q("cw.net.FlashSocketConduit");
n.Ac = function(a) {
  this.Qb ? (P(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Qb.push.apply(this.Qb, a)) : (P(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.pd.Ac(a))
};
n.Ed = function(a, b) {
  this.pd.Ed(a, b)
};
n.onclose = function() {
  this.a.info("onclose");
  qe(this.K, !1)
};
n.c = function() {
  this.a.info("in disposeInternal.");
  se.d.c.call(this);
  this.pd.f();
  delete this.K
};
function te(a) {
  return a * Math.PI / 180
}
;var Md = Math.pow(2, 53);
var ue = {dg:ba("<cw.eq.Wildcard>")};
function ve(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function we(a, b, c) {
  var d = fa(a), f = fa(b);
  if(a == ue || b == ue) {
    return!0
  }else {
    if(a != k && typeof a.n == "function") {
      return c && c.push("running custom equals function on left object"), a.n(b, c)
    }else {
      if(b != k && typeof b.n == "function") {
        return c && c.push("running custom equals function on right object"), b.n(a, c)
      }else {
        if(ve(d) || ve(f)) {
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
                      if(!we(a[d], b[d], c)) {
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
                if(a.cg == ac && b.cg == ac) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = !1;
                        break a
                      }
                      if(!we(a[g], b[g], c)) {
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
function xe() {
  var a = [];
  this.ka(a);
  return a.join("")
}
function ye() {
}
ye.prototype.n = function(a, b) {
  return!(a instanceof ye) ? !1 : we(ze(this), ze(a), b)
};
ye.prototype.F = function(a, b) {
  a.push("<HelloFrame properties=");
  F(ze(this), a, b);
  a.push(">")
};
function ze(a) {
  return[a.Mb, a.Gf, a.lf, a.Kf, a.uc, a.Ce, a.Bf, a.xf, a.he, a.vf, a.Zf, a.Tf, a.na, a.$c]
}
ye.prototype.da = xe;
ye.prototype.ka = function(a) {
  var b = {};
  b.tnum = this.Mb;
  b.ver = this.Gf;
  b.format = this.lf;
  b["new"] = this.Kf;
  b.id = this.uc;
  b.ming = this.Ce;
  b.pad = this.Bf;
  b.maxb = this.xf;
  if(ga(this.he)) {
    b.maxt = this.he
  }
  b.maxia = this.vf;
  b.tcpack = this.Zf;
  b.eeds = this.Tf;
  b.sack = this.na instanceof Vb ? Id((new Ae(this.na)).da()) : this.na;
  b.seenack = this.$c instanceof Vb ? Id((new Ae(this.$c)).da()) : this.$c;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new Eb).mb(b), "H")
};
function Be(a) {
  this.Lb = a
}
Be.prototype.n = function(a) {
  return a instanceof Be && this.Lb == a.Lb
};
Be.prototype.F = function(a, b) {
  a.push("new StringFrame(");
  F(this.Lb, a, b);
  a.push(")")
};
Be.prototype.da = xe;
Be.prototype.ka = function(a) {
  a.push(this.Lb, " ")
};
function Ce(a) {
  this.Ec = a
}
Ce.prototype.n = function(a) {
  return a instanceof Ce && this.Ec == a.Ec
};
Ce.prototype.F = function(a, b) {
  a.push("new CommentFrame(");
  F(this.Ec, a, b);
  a.push(")")
};
Ce.prototype.da = xe;
Ce.prototype.ka = function(a) {
  a.push(this.Ec, "^")
};
function De(a) {
  this.sc = a
}
De.prototype.n = function(a) {
  return a instanceof De && this.sc == a.sc
};
De.prototype.F = function(a) {
  a.push("new SeqNumFrame(", String(this.sc), ")")
};
De.prototype.da = xe;
De.prototype.ka = function(a) {
  a.push(String(this.sc), "N")
};
function Ee(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return k
  }
  a: {
    var c = b[1], a = Md;
    if(Kd.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
      var g = Ld(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Vb(a, c)
}
function Ae(a) {
  this.na = a
}
Ae.prototype.n = function(a, b) {
  return a instanceof Ae && this.na.n(a.na, b)
};
Ae.prototype.F = function(a, b) {
  a.push("new SackFrame(");
  F(this.na, a, b);
  a.push(")")
};
Ae.prototype.da = xe;
Ae.prototype.ka = function(a) {
  var b = this.na;
  a.push(b.lb.join(","), "|", String(b.pb));
  a.push("A")
};
function Fe(a) {
  this.hc = a
}
Fe.prototype.n = function(a, b) {
  return a instanceof Fe && this.hc.n(a.hc, b)
};
Fe.prototype.F = function(a, b) {
  a.push("new StreamStatusFrame(");
  F(this.hc, a, b);
  a.push(")")
};
Fe.prototype.da = xe;
Fe.prototype.ka = function(a) {
  var b = this.hc;
  a.push(b.lb.join(","), "|", String(b.pb));
  a.push("T")
};
function Ge() {
}
Ge.prototype.F = function(a) {
  a.push("new StreamCreatedFrame()")
};
Ge.prototype.n = function(a) {
  return a instanceof Ge
};
Ge.prototype.da = xe;
Ge.prototype.ka = function(a) {
  a.push("C")
};
function He() {
}
He.prototype.F = function(a) {
  a.push("new YouCloseItFrame()")
};
He.prototype.n = function(a) {
  return a instanceof He
};
He.prototype.da = xe;
He.prototype.ka = function(a) {
  a.push("Y")
};
function Ie(a, b) {
  this.mc = a;
  this.Pb = b
}
Ie.prototype.n = function(a) {
  return a instanceof Ie && this.mc == a.mc && this.Pb == a.Pb
};
Ie.prototype.F = function(a, b) {
  a.push("new ResetFrame(");
  F(this.mc, a, b);
  a.push(", ", String(this.Pb), ")")
};
Ie.prototype.da = xe;
Ie.prototype.ka = function(a) {
  a.push(this.mc, "|", String(Number(this.Pb)), "!")
};
var Je = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Ke(a) {
  this.reason = a
}
Ke.prototype.n = function(a) {
  return a instanceof Ke && this.reason == a.reason
};
Ke.prototype.F = function(a, b) {
  a.push("new TransportKillFrame(");
  F(this.reason, a, b);
  a.push(")")
};
Ke.prototype.da = xe;
Ke.prototype.ka = function(a) {
  a.push(this.reason, "K")
};
function Le(a) {
  a || e(new R("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new Be(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = Ee(Id(a)), a == k && e(new R("bad sack")), new Ae(a)
    }else {
      if(b == "N") {
        return a = Ld(Id(a)), a == k && e(new R("bad seqNum")), new De(a)
      }else {
        if(b == "T") {
          return a = Ee(Id(a)), a == k && e(new R("bad lastSackSeen")), new Fe(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && e(new R("leading garbage")), new He
          }else {
            if(b == "^") {
              return new Ce(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && e(new R("leading garbage")), new Ge
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && e(new R("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == k && e(new R("bad applicationLevel")), new Ie(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = Je[a], a == k && e(new R("unknown kill reason: " + a)), new Ke(a)
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
;var Me;
Me = !1;
var Ne = gc();
Ne && (Ne.indexOf("Firefox") != -1 || Ne.indexOf("Camino") != -1 || Ne.indexOf("iPhone") != -1 || Ne.indexOf("iPod") != -1 || Ne.indexOf("iPad") != -1 || Ne.indexOf("Android") != -1 || Ne.indexOf("Chrome") != -1 && (Me = !0));
var Oe = Me;
var Pe = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Qe(a, b) {
  var c = a.match(Pe), d = b.match(Pe);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Re() {
  if(kc) {
    this.Ya = {}, this.wd = {}, this.rd = []
  }
}
Re.prototype.a = Q("goog.net.xhrMonitor");
Re.prototype.Ic = kc;
function Se(a) {
  var b = Te;
  if(b.Ic) {
    var c = t(a) ? a : ja(a) ? w(a) : "";
    P(b.a, "Pushing context: " + a + " (" + c + ")");
    b.rd.push(c)
  }
}
function Ue() {
  var a = Te;
  if(a.Ic) {
    var b = a.rd.pop();
    P(a.a, "Popping context: " + b);
    Ve(a, b)
  }
}
function We(a) {
  var b = Te;
  if(b.Ic) {
    a = w(a);
    O(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.rd.length;c++) {
      var d = b.rd[c];
      Xe(b.Ya, d, a);
      Xe(b.wd, a, d)
    }
  }
}
function Ve(a, b) {
  var c = a.wd[b], d = a.Ya[b];
  c && d && (P(a.a, "Updating dependent contexts"), E(c, function(a) {
    E(d, function(b) {
      Xe(this.Ya, a, b);
      Xe(this.wd, b, a)
    }, this)
  }, a))
}
function Xe(a, b, c) {
  a[b] || (a[b] = []);
  Za(a[b], c) || a[b].push(c)
}
var Te = new Re;
function Ye() {
}
Ye.prototype.Bc = k;
function Ze() {
  return $e(af)
}
var af;
function bf() {
}
z(bf, Ye);
function $e(a) {
  return(a = cf(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function df(a) {
  var b = {};
  cf(a) && (b[0] = !0, b[1] = !0);
  return b
}
bf.prototype.Zd = k;
function cf(a) {
  if(!a.Zd && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Zd = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Zd
}
af = new bf;
function ef(a) {
  this.headers = new Pb;
  this.Ob = a || k
}
z(ef, md);
ef.prototype.a = Q("goog.net.XhrIo");
var ff = /^https?:?$/i;
n = ef.prototype;
n.Ia = !1;
n.i = k;
n.vd = k;
n.ic = "";
n.rf = "";
n.fc = 0;
n.gc = "";
n.Ld = !1;
n.Wc = !1;
n.$d = !1;
n.gb = !1;
n.sd = 0;
n.nb = k;
n.Mf = "";
n.gh = !1;
n.send = function(a, b, c, d) {
  this.i && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.ic = a;
  this.gc = "";
  this.fc = 0;
  this.rf = b;
  this.Ld = !1;
  this.Ia = !0;
  this.i = this.Ob ? $e(this.Ob) : new Ze;
  this.vd = this.Ob ? this.Ob.Bc || (this.Ob.Bc = df(this.Ob)) : af.Bc || (af.Bc = df(af));
  We(this.i);
  this.i.onreadystatechange = x(this.Df, this);
  try {
    O(this.a, gf(this, "Opening Xhr")), this.$d = !0, this.i.open(b, a, !0), this.$d = !1
  }catch(f) {
    O(this.a, gf(this, "Error opening Xhr: " + f.message));
    hf(this, f);
    return
  }
  var a = c || "", g = this.headers.L();
  d && Nb(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.ba("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Nb(g, function(a, b) {
    this.i.setRequestHeader(b, a)
  }, this);
  if(this.Mf) {
    this.i.responseType = this.Mf
  }
  if("withCredentials" in this.i) {
    this.i.withCredentials = this.gh
  }
  try {
    if(this.nb) {
      od.clearTimeout(this.nb), this.nb = k
    }
    if(this.sd > 0) {
      O(this.a, gf(this, "Will abort after " + this.sd + "ms if incomplete")), this.nb = od.setTimeout(x(this.bh, this), this.sd)
    }
    O(this.a, gf(this, "Sending request"));
    this.Wc = !0;
    this.i.send(a);
    this.Wc = !1
  }catch(h) {
    O(this.a, gf(this, "Send error: " + h.message)), hf(this, h)
  }
};
n.dispatchEvent = function(a) {
  if(this.i) {
    Se(this.i);
    try {
      return ef.d.dispatchEvent.call(this, a)
    }finally {
      Ue()
    }
  }else {
    return ef.d.dispatchEvent.call(this, a)
  }
};
n.bh = function() {
  if(typeof ca != "undefined" && this.i) {
    this.gc = "Timed out after " + this.sd + "ms, aborting", this.fc = 8, O(this.a, gf(this, this.gc)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function hf(a, b) {
  a.Ia = !1;
  if(a.i) {
    a.gb = !0, a.i.abort(), a.gb = !1
  }
  a.gc = b;
  a.fc = 5;
  jf(a);
  kf(a)
}
function jf(a) {
  if(!a.Ld) {
    a.Ld = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
n.abort = function(a) {
  if(this.i && this.Ia) {
    O(this.a, gf(this, "Aborting")), this.Ia = !1, this.gb = !0, this.i.abort(), this.gb = !1, this.fc = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), kf(this)
  }
};
n.c = function() {
  if(this.i) {
    if(this.Ia) {
      this.Ia = !1, this.gb = !0, this.i.abort(), this.gb = !1
    }
    kf(this, !0)
  }
  ef.d.c.call(this)
};
n.Df = function() {
  !this.$d && !this.Wc && !this.gb ? this.Mg() : lf(this)
};
n.Mg = function() {
  lf(this)
};
function lf(a) {
  if(a.Ia && typeof ca != "undefined") {
    if(a.vd[1] && a.Na() == 4 && mf(a) == 2) {
      O(a.a, gf(a, "Local request error detected and ignored"))
    }else {
      if(a.Wc && a.Na() == 4) {
        od.setTimeout(x(a.Df, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.Na() == 4) {
          O(a.a, gf(a, "Request complete"));
          a.Ia = !1;
          var b;
          a: {
            switch(mf(a)) {
              case 0:
                b = t(a.ic) ? a.ic.match(Pe)[1] || k : a.ic.Ga;
                b = !(b ? ff.test(b) : self.location ? ff.test(self.location.protocol) : 1);
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
              c = a.Na() > 2 ? a.i.statusText : ""
            }catch(d) {
              O(a.a, "Can not get status: " + d.message), c = ""
            }
            a.gc = c + " [" + mf(a) + "]";
            jf(a)
          }
          kf(a)
        }
      }
    }
  }
}
function kf(a, b) {
  if(a.i) {
    var c = a.i, d = a.vd[0] ? q : k;
    a.i = k;
    a.vd = k;
    if(a.nb) {
      od.clearTimeout(a.nb), a.nb = k
    }
    b || (Se(c), a.dispatchEvent("ready"), Ue());
    var f = Te;
    if(f.Ic) {
      var g = w(c);
      O(f.a, "Closing XHR : " + g);
      delete f.wd[g];
      for(var h in f.Ya) {
        ab(f.Ya[h], g), f.Ya[h].length == 0 && delete f.Ya[h]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(j) {
      he(a.a, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
n.be = function() {
  return!!this.i
};
n.Na = function() {
  return this.i ? this.i.readyState : 0
};
function mf(a) {
  try {
    return a.Na() > 2 ? a.i.status : -1
  }catch(b) {
    return N(a.a, "Can not get status: " + b.message), -1
  }
}
n.getResponseHeader = function(a) {
  return this.i && this.Na() == 4 ? this.i.getResponseHeader(a) : i
};
function gf(a, b) {
  return b + " [" + a.rf + " " + a.ic + " " + mf(a) + "]"
}
;function nf(a, b, c) {
  this.K = b;
  this.ma = a;
  this.Fd = c
}
z(nf, K);
n = nf.prototype;
n.a = Q("cw.net.XHRMaster");
n.Ta = -1;
n.ge = function(a, b, c) {
  this.Fd.__XHRSlave_makeRequest(this.ma, a, b, c)
};
n.Na = l("Ta");
n.ke = function(a, b) {
  b != of && he(this.a, G(this.ma) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  oe(this.K);
  pe(this.K, a)
};
n.le = function(a) {
  O(this.a, "ongotheaders_: " + G(a));
  var b = k;
  "Content-Length" in a && (b = Ld(a["Content-Length"]));
  a = this.K;
  O(a.a, a.s() + " got Content-Length: " + b);
  a.wa == pf && (b == k && (N(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), qf(a, 2E3 + b / 3072 * 1E3))
};
n.me = function(a) {
  a != 1 && O(this.a, this.K.s() + "'s XHR's readyState is " + a);
  this.Ta = a;
  this.Ta >= 2 && oe(this.K)
};
n.je = function() {
  this.K.f()
};
n.c = function() {
  nf.d.c.call(this);
  delete rf.Fa[this.ma];
  this.Fd.__XHRSlave_dispose(this.ma);
  delete this.Fd
};
function sf() {
  this.Fa = {}
}
z(sf, K);
n = sf.prototype;
n.a = Q("cw.net.XHRMasterTracker");
n.Gd = function(a, b) {
  var c = "_" + Hd(), d = new nf(c, a, b);
  return this.Fa[c] = d
};
n.ke = function(a, b, c) {
  var b = bb(b), d = this.Fa[a];
  d ? d.ke(b, c) : he(this.a, "onframes_: no master for " + G(a))
};
n.le = function(a, b) {
  var c = this.Fa[a];
  c ? c.le(b) : he(this.a, "ongotheaders_: no master for " + G(a))
};
n.me = function(a, b) {
  var c = this.Fa[a];
  c ? c.me(b) : he(this.a, "onreadystatechange_: no master for " + G(a))
};
n.je = function(a) {
  var b = this.Fa[a];
  b ? (delete this.Fa[b.ma], b.je()) : he(this.a, "oncomplete_: no master for " + G(a))
};
n.c = function() {
  sf.d.c.call(this);
  for(var a = Ra(this.Fa);a.length;) {
    a.pop().f()
  }
  delete this.Fa
};
var rf = new sf;
o.__XHRMaster_onframes = x(rf.ke, rf);
o.__XHRMaster_oncomplete = x(rf.je, rf);
o.__XHRMaster_ongotheaders = x(rf.le, rf);
o.__XHRMaster_onreadystatechange = x(rf.me, rf);
function tf() {
  uf.info("Waiting for XDRFrames (may take a while)...");
  var a = new qd, b = o.__XDRSetup.done.length, c;
  o.__XDRSetup.done = {push:function() {
    b += 1;
    c = 2 - b;
    c || (uf.info("Got XDRFrames after waiting."), wd(a, k))
  }};
  c = 2 - b;
  c || (uf.info("Already had all XDRFrames."), wd(a, k));
  return a
}
var uf = Q("cw.net.waitForXDRFrames");
function vf(a, b, c) {
  this.host = a;
  this.port = b;
  this.dh = c
}
function wf(a, b, c, d) {
  this.ed = a;
  this.Ff = b;
  this.gd = c;
  this.Qf = d;
  (!(this.ed.indexOf("http://") == 0 || this.ed.indexOf("https://") == 0) || !(this.gd.indexOf("http://") == 0 || this.gd.indexOf("https://") == 0)) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Ff.location.href;
  Qe(this.ed, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Qf.location.href;
  Qe(this.gd, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
var xf = new Ce(";)]}"), yf = "disconnected_" + ld++;
function zf(a, b, c, d) {
  this.J = a;
  this.Hf = b;
  this.ra = c;
  this.Hi = d;
  this.wc = new Nd;
  this.uc = Hd() + Hd();
  this.Sa = new Wb;
  this.ae = new Yb;
  this.zc = k;
  if(I) {
    this.zc = dd(o, "load", this.Tg, !1, this)
  }
}
z(zf, md);
n = zf.prototype;
n.a = Q("cw.net.Stream");
n.sf = new Vb(-1, []);
n.tf = new Vb(-1, []);
n.Jg = 50;
n.Ig = 1048576;
n.Ae = !1;
n.qe = !1;
n.k = 1;
n.Xf = -1;
n.j = k;
n.A = k;
n.nc = k;
n.Be = 0;
n.Ef = 0;
n.Pf = 0;
n.F = function(a, b) {
  a.push("<Stream id=");
  F(this.uc, a, b);
  a.push(", state=", String(this.k));
  a.push(", primary=");
  F(this.j, a, b);
  a.push(", secondary=");
  F(this.A, a, b);
  a.push(", resetting=");
  F(this.nc, a, b)
};
function Af(a) {
  var b = [-1];
  a.j && b.push(a.j.Fb);
  a.A && b.push(a.A.Fb);
  return Math.max.apply(Math.max, b)
}
function Bf(a) {
  if(a.k != 1) {
    var b = a.Sa.z.U() != 0, c = Zb(a.ae), d = !c.n(a.tf) && !(a.j && c.n(a.j.Cb) || a.A && c.n(a.A.Cb)), f = Af(a);
    if((b = b && f < a.Sa.ub) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.j.Rb) {
        P(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.j, c != d.Cb)) {
          !d.Ha && !d.D.length && Cf(d), d.D.push(new Ae(c)), d.Cb = c
        }
        b && Df(a.j, a.Sa, f + 1);
        a.j.Ca()
      }else {
        a.A == k ? a.Ae ? (P(a.a, "tryToSend_: creating secondary to send " + g), a.A = Ef(a, !1), b && Df(a.A, a.Sa, f + 1), a.A.Ca()) : (P(a.a, "tryToSend_: not creating a secondary because Stream might not exist on server"), a.qe = !0) : P(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
n.Tg = function() {
  this.zc = k;
  if(this.j && this.j.yb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.j;
    a.xd = !0;
    a.f()
  }
  if(this.A && this.A.yb()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.A, a.xd = !0, a.f()
  }
};
function Ff(a, b) {
  var c;
  ga(c) || (c = !0);
  a.k > 2 && e(Error("sendStrings: Can't send strings in state " + a.k));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || e(Error("sendStrings: string #" + c + " has illegal chars: " + G(d)))
      }
    }
    a.Sa.extend(b);
    Bf(a)
  }
}
function Ef(a, b) {
  var c;
  a.ra instanceof wf ? c = (Boolean(Number((new Gf(document.location)).ha.get("httpStreaming", "0"))) ? 2 : 1) == 1 ? pf : Hf : a.ra instanceof vf ? c = If : e(Error("Don't support endpoint " + G(a.ra)));
  a.Xf += 1;
  c = new Jf(a.J, a, a.Xf, c, a.ra, b);
  P(a.a, "Created: " + c.s());
  a.wc.add(c);
  return c
}
function Kf(a, b, c) {
  var d = new Lf(a.J, a, b, c);
  P(a.a, "Created: " + d.s() + ", delay=" + b + ", times=" + c);
  a.wc.add(d);
  return d
}
function Mf(a, b) {
  a.wc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  O(a.a, "Offline: " + b.s());
  b.lc ? a.Be += b.lc : a.Be = 0;
  a.Be >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), Nf("stream penalty reached limit", !1), a.f());
  if(a.k > 2) {
    a.k == 3 && b.bg ? (O(a.a, "Disposing because resettingTransport_ is done."), a.f()) : O(a.a, "Not creating a transport because Stream is in state " + a.k)
  }else {
    var c;
    var d;
    c = b instanceof Lf;
    if(!c && b.xd) {
      var f = I ? Oe ? [0, 1] : [9, 20] : [0, 0];
      c = f[0];
      d = f[1];
      P(a.a, "getDelayForNextTransport_: " + G({delay:c, times:d}))
    }else {
      d = b.Oe();
      if(b == a.j) {
        if(d) {
          f = ++a.Ef
        }else {
          if(!c) {
            f = a.Ef = 0
          }
        }
      }else {
        if(d) {
          f = ++a.Pf
        }else {
          if(!c) {
            f = a.Pf = 0
          }
        }
      }
      if(c || !f) {
        d = c = 0, P(a.a, "getDelayForNextTransport_: " + G({count:f, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(f, 3), h = Math.floor(Math.random() * 4E3) - 2E3, j = Math.max(0, b.Yf - b.Ee);
        d = (c = Math.max(0, g + h - j)) ? 1 : 0;
        P(a.a, "getDelayForNextTransport_: " + G({count:f, base:g, variance:h, oldDuration:j, delay:c, times:d}))
      }
    }
    c = [c, d];
    f = c[0];
    c = c[1];
    if(b == a.j) {
      a.j = k, c ? a.j = Kf(a, f, c) : (f = Af(a), a.j = Ef(a, !0), Df(a.j, a.Sa, f + 1)), a.j.Ca()
    }else {
      if(b == a.A) {
        a.A = k, c ? (a.A = Kf(a, f, c), a.A.Ca()) : Bf(a)
      }
    }
  }
}
n.reset = function(a) {
  this.k > 2 && e(Error("reset: Can't send reset in state " + this.k));
  this.k = 3;
  this.j && this.j.Rb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Of(this.j, a), this.j.Ca()) : (this.j && (O(this.a, "reset: Disposing primary before sending ResetFrame."), this.j.f()), this.A && (O(this.a, "reset: Disposing secondary before sending ResetFrame."), this.A.f()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.nc = Ef(this, !1), Of(this.nc, a), this.nc.Ca());
  Nf(a, !0)
};
function Pf(a, b, c, d) {
  var f;
  f = a.ae;
  for(var g = a.Jg, h = a.Ig, j = [], m = !1, p = 0, A = c.length;p < A;p++) {
    var r = c[p], u = r[0], r = r[1];
    if(u == f.Bb + 1) {
      f.Bb += 1;
      for(j.push(r);;) {
        u = f.Bb + 1;
        r = f.Xa.get(u, $b);
        if(r === $b) {
          break
        }
        j.push(r[0]);
        f.Xa.remove(u);
        f.w -= r[1];
        f.Bb = u
      }
    }else {
      if(!(u <= f.Bb)) {
        if(g != k && f.Xa.U() >= g) {
          m = !0;
          break
        }
        var B = Ub(r);
        if(h != k && f.w + B > h) {
          m = !0;
          break
        }
        f.Xa.set(u, [r, B]);
        f.w += B
      }
    }
  }
  f.Xa.Oa() && f.Xa.clear();
  f = [j, m];
  c = f[0];
  f = f[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(h = a.Hf, j = Db(c[g]), m = j[0], p = j[1], m == 1 ? (m = h.ne.Kd(xb.ac(), p), h = mb(m, 1), j = mb(m, 2), m = m.ea(), sb.Hc(h, j, 5, 5, new Qf(1, "black"), new Rf(m), i)) : m == 2 ? (sb.f(), Sf()) : N(Tf, "Strange message from server: " + G(j)), a.k == 3 || a.qa) {
        return
      }
    }
  }
  d || Bf(a);
  if(!(a.k == 3 || a.qa) && f) {
    he(b.a, b.s() + "'s peer caused rwin overflow."), b.f()
  }
}
n.start = function() {
  this.k = 2;
  this.j = Ef(this, !0);
  Df(this.j, this.Sa, k);
  this.j.Ca()
};
n.c = function() {
  this.a.info(G(this) + " in disposeInternal.");
  this.k = 4;
  for(var a = this.wc.W(), b = 0;b < a.length;b++) {
    a[b].f()
  }
  this.dispatchEvent({type:yf});
  if(I && this.zc) {
    gd(this.zc), this.zc = k
  }
  delete this.wc;
  delete this.j;
  delete this.A;
  delete this.nc;
  delete this.Hf;
  zf.d.c.call(this)
};
var pf = 1, Hf = 2, If = 3;
function Jf(a, b, c, d, f, g) {
  this.J = a;
  this.C = b;
  this.Mb = c;
  this.wa = d;
  this.ra = f;
  this.D = [];
  this.rb = g;
  this.Rb = !this.yb();
  this.Hb = this.wa != pf;
  this.hg = x(this.ah, this)
}
z(Jf, K);
n = Jf.prototype;
n.a = Q("cw.net.ClientTransport");
n.q = k;
n.Ee = k;
n.Yf = k;
n.fd = k;
n.Ha = !1;
n.qd = !1;
n.Cb = k;
n.Rd = 0;
n.Fb = -1;
n.oe = -1;
n.bg = !1;
n.xd = !1;
n.lc = 0;
n.cc = !1;
n.F = function(a) {
  a.push("<ClientTransport #", String(this.Mb), ", becomePrimary=", String(this.rb), ">")
};
n.s = function() {
  return(this.rb ? "Prim. T#" : "Sec. T#") + this.Mb
};
n.Oe = function() {
  return!(!this.cc && this.Rd)
};
n.yb = function() {
  return this.wa == pf || this.wa == Hf
};
function Uf(a, b) {
  gb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Pf(a.C, a, b, !a.Hb)
}
function Vf(a, b, c) {
  try {
    var d = Le(b);
    a.Rd += 1;
    O(a.a, a.s() + " RECV " + G(d));
    var f;
    a.Rd == 1 && !d.n(xf) && a.yb() ? (N(a.a, a.s() + " is closing soon because got bad preamble: " + G(d)), f = !0) : f = !1;
    if(f) {
      return!0
    }
    if(d instanceof Be) {
      if(!/^([ -~]*)$/.test(d.Lb)) {
        return a.cc = !0
      }
      a.oe += 1;
      c.push([a.oe, d.Lb])
    }else {
      if(d instanceof Ae) {
        var g = a.C, h = d.na;
        g.sf = h;
        var j = g.Sa, m = h.pb, c = !1;
        m > j.ub && (c = !0);
        for(var p = Xb(j).concat(), d = 0;d < p.length;d++) {
          var A = p[d];
          if(A > m) {
            break
          }
          var r = j.z.p[A][1];
          j.z.remove(A);
          j.w -= r
        }
        for(d = 0;d < h.lb.length;d++) {
          var u = h.lb[d];
          u > j.ub && (c = !0);
          j.z.ba(u) && (r = j.z.p[u][1], j.z.remove(u), j.w -= r)
        }
        j.z.Oa() && j.z.clear();
        if(c) {
          return N(a.a, a.s() + " is closing soon because got bad SackFrame"), a.cc = !0
        }
      }else {
        if(d instanceof De) {
          a.oe = d.sc - 1
        }else {
          if(d instanceof Fe) {
            a.C.tf = d.hc
          }else {
            if(d instanceof He) {
              return P(a.a, a.s() + " is closing soon because got YouCloseItFrame"), !0
            }else {
              if(d instanceof Ke) {
                return a.cc = !0, d.reason == "stream_attach_failure" ? a.lc += 1 : d.reason == "acked_unsent_strings" && (a.lc += 0.5), P(a.a, a.s() + " is closing soon because got " + G(d)), !0
              }else {
                if(!(d instanceof Ce)) {
                  if(d instanceof Ge) {
                    var B = a.C, $i = !a.Hb;
                    P(B.a, "Stream is now confirmed to exist at server.");
                    B.Ae = !0;
                    if(B.qe && !$i) {
                      B.qe = !1, Bf(B)
                    }
                  }else {
                    if(c.length && (Uf(a, c), $a(c)), d instanceof Ie) {
                      var aj = a.C;
                      Nf(d.mc, d.Pb);
                      aj.f();
                      return!0
                    }else {
                      e(Error(a.s() + " had unexpected state in framesReceived_."))
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }catch(Rg) {
    return Rg instanceof R || e(Rg), N(a.a, a.s() + " is closing soon because got InvalidFrame: " + G(b)), a.cc = !0
  }
  return!1
}
function pe(a, b) {
  a.qd = !0;
  try {
    for(var c = !1, d = [], f = 0, g = b.length;f < g;f++) {
      if(a.qa) {
        a.a.info(a.s() + " returning from loop because we're disposed.");
        return
      }
      if(c = Vf(a, b[f], d)) {
        break
      }
    }
    d.length && Uf(a, d);
    a.qd = !1;
    a.D.length && a.Ca();
    c && (P(a.a, a.s() + " closeSoon is true.  Frames were: " + G(b)), a.f())
  }finally {
    a.qd = !1
  }
}
n.ah = function() {
  N(this.a, this.s() + " timed out due to lack of connection or no data being received.");
  this.f()
};
function Wf(a) {
  if(a.fd != k) {
    a.J.M.clearTimeout(a.fd), a.fd = k
  }
}
function qf(a, b) {
  Wf(a);
  b = Math.round(b);
  a.fd = a.J.M.setTimeout(a.hg, b);
  O(a.a, a.s() + "'s receive timeout set to " + b + " ms.")
}
function oe(a) {
  a.wa != pf && (a.wa == If || a.wa == Hf ? qf(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.wa)))
}
function Cf(a) {
  var b = new ye;
  b.Mb = a.Mb;
  b.Gf = 2;
  b.lf = 2;
  if(!a.C.Ae) {
    b.Kf = !0
  }
  b.uc = a.C.uc;
  b.Ce = a.Hb;
  if(b.Ce) {
    b.Bf = 4096
  }
  b.xf = 3E5;
  b.vf = a.Hb ? Math.floor(10) : 0;
  b.Zf = !1;
  if(a.rb) {
    b.Tf = k, b.he = Math.floor((a.Hb ? 358E4 : 25E3) / 1E3)
  }
  b.na = Zb(a.C.ae);
  b.$c = a.C.sf;
  a.D.push(b);
  a.Cb = b.na
}
function qe(a, b) {
  b && (a.lc += 0.5);
  a.f()
}
n.Ca = function() {
  this.Ha && !this.Rb && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.qd) {
    P(this.a, this.s() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ha;
    this.Ha = !0;
    !a && !this.D.length && Cf(this);
    for(a = 0;a < this.D.length;a++) {
      O(this.a, this.s() + " SEND " + G(this.D[a]))
    }
    if(this.yb()) {
      for(var a = [], b = 0, c = this.D.length;b < c;b++) {
        this.D[b].ka(a), a.push("\n")
      }
      this.D = [];
      a = a.join("");
      b = this.rb ? this.ra.ed : this.ra.gd;
      this.q = rf.Gd(this, this.rb ? this.ra.Ff : this.ra.Qf);
      this.Ee = this.J.M === od ? y() : this.J.M.getTime();
      this.q.ge(b, "POST", a);
      qf(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.Hb ? 0 : this.rb ? 25E3 : 0))
    }else {
      if(this.wa == If) {
        a = [];
        b = 0;
        for(c = this.D.length;b < c;b++) {
          a.push(this.D[b].da())
        }
        this.D = [];
        this.q ? this.q.Ac(a) : (b = this.ra, this.q = new se(this), this.q.pd = b.dh.Gd(this.q), this.Ee = this.J.M === od ? y() : this.J.M.getTime(), this.q.Ed(b.host, b.port), this.q.qa || (this.q.Ac(a), this.q.qa || qf(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.wa))
      }
    }
  }
};
function Df(a, b, c) {
  !a.Ha && !a.D.length && Cf(a);
  for(var d = Math.max(c, a.Fb + 1), f = Xb(b), c = [], g = 0;g < f.length;g++) {
    var h = f[g];
    (d == k || h >= d) && c.push([h, b.z.p[h][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], f = g[0], g = g[1], (a.Fb == -1 || a.Fb + 1 != f) && a.D.push(new De(f)), a.D.push(new Be(g)), a.Fb = f
  }
}
n.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  Jf.d.c.call(this);
  this.Yf = this.J.M === od ? y() : this.J.M.getTime();
  this.D = [];
  Wf(this);
  this.q && this.q.f();
  var a = this.C;
  this.C = k;
  Mf(a, this)
};
function Of(a, b) {
  !a.Ha && !a.D.length && Cf(a);
  a.D.push(new Ie(b, !0));
  a.bg = !0
}
function Lf(a, b, c, d) {
  this.J = a;
  this.C = b;
  this.Xe = c;
  this.Re = d
}
z(Lf, K);
n = Lf.prototype;
n.Ha = !1;
n.Rb = !1;
n.Qc = k;
n.Cb = k;
n.a = Q("cw.net.DoNothingTransport");
function Xf(a) {
  a.Qc = a.J.M.setTimeout(function() {
    a.Qc = k;
    a.Re--;
    a.Re ? Xf(a) : a.f()
  }, a.Xe)
}
n.Ca = function() {
  this.Ha && !this.Rb && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ha = !0;
  Xf(this)
};
n.F = function(a) {
  a.push("<DoNothingTransport delay=", String(this.Xe), ">")
};
n.yb = ba(!1);
n.s = ba("Wast. T");
n.Oe = ba(!1);
n.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  Lf.d.c.call(this);
  this.Qc != k && this.J.M.clearTimeout(this.Qc);
  var a = this.C;
  this.C = k;
  Mf(a, this)
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
n.Oa = function() {
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
var Yf;
function Zf(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function $f(a, b) {
  var c = Zf(a), d = fb(arguments, 1), f;
  f = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    Za(f, d[h]) || (f.push(d[h]), g++)
  }
  f = g == d.length;
  a.className = c.join(" ");
  return f
}
function ag(a, b) {
  var c = Zf(a), d = fb(arguments, 1), f;
  f = c;
  for(var g = 0, h = 0;h < f.length;h++) {
    Za(d, f[h]) && (eb(f, h--, 1), g++)
  }
  f = g == d.length;
  a.className = c.join(" ");
  return f
}
;var bg = !H || xc();
!kc && !H || H && xc() || kc && J("1.9.1");
var cg = H && !J("9");
function dg(a) {
  return a ? new eg(fg(a)) : Yf || (Yf = new eg)
}
function T(a) {
  return t(a) ? document.getElementById(a) : a
}
function gg(a, b, c, d) {
  a = d || a;
  b = b && b != "*" ? b.toUpperCase() : "";
  if(a.querySelectorAll && a.querySelector && (!I || document.compatMode == "CSS1Compat" || J("528")) && (b || c)) {
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
      b = h.className, typeof b.split == "function" && Za(b.split(/\s+/), c) && (d[f++] = h)
    }
    d.length = f;
    return d
  }else {
    return a
  }
}
function hg(a, b) {
  Qa(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in ig ? a.setAttribute(ig[d], b) : d.lastIndexOf("aria-", 0) == 0 ? a.setAttribute(d, b) : a[d] = b
  })
}
var ig = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function jg(a, b, c) {
  return kg(document, arguments)
}
function kg(a, b) {
  var c = b[0], d = b[1];
  if(!bg && d && (d.name || d.type)) {
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
    t(d) ? c.className = d : s(d) ? $f.apply(k, [c].concat(d)) : hg(c, d)
  }
  b.length > 2 && lg(a, c, b, 2);
  return c
}
function lg(a, b, c, d) {
  function f(c) {
    c && b.appendChild(t(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && g.nodeType > 0) ? E(mg(g) ? cb(g) : g, f) : f(g)
  }
}
function ng(a, b) {
  lg(fg(a), a, arguments, 1)
}
function og(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function pg(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function qg(a, b) {
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
function fg(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
function rg(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && a.firstChild.nodeType == 3) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      og(a), a.appendChild(fg(a).createTextNode(b))
    }
  }
}
var sg = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, tg = {IMG:" ", BR:"\n"};
function ug(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ka(a) && a >= 0 && a < 32768) : !1
}
function vg(a) {
  var b = [];
  wg(a, b, !1);
  return b.join("")
}
function wg(a, b, c) {
  if(!(a.nodeName in sg)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in tg) {
        b.push(tg[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          wg(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function mg(a) {
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
function eg(a) {
  this.r = a || o.document || document
}
n = eg.prototype;
n.Da = dg;
n.b = function(a) {
  return t(a) ? this.r.getElementById(a) : a
};
n.h = function(a, b, c) {
  return kg(this.r, arguments)
};
n.createElement = function(a) {
  return this.r.createElement(a)
};
n.createTextNode = function(a) {
  return this.r.createTextNode(a)
};
n.Se = function(a, b, c) {
  for(var d = this.r, f = !!c, c = ["<tr>"], g = 0;g < b;g++) {
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
n.append = ng;
n.contains = qg;
function xg(a, b, c) {
  a.style[Ga(c)] = b
}
function yg(a, b) {
  var c = fg(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function zg(a, b, c) {
  b instanceof S ? (c = b.height, b = b.width) : c == i && e(Error("missing height argument"));
  a.style.width = Ag(b);
  a.style.height = Ag(c)
}
function Ag(a) {
  typeof a == "number" && (a = Math.round(a) + "px");
  return a
}
function Bg(a) {
  if((yg(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style.display) != "none") {
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
function Cg(a) {
  H ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[I ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var Dg = kc ? "MozUserSelect" : I ? "WebkitUserSelect" : k;
function Eg(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Dg) {
    if(b = b ? "none" : "", a.style[Dg] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[Dg] = b
      }
    }
  }else {
    if(H || jc) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
;function Fg(a) {
  this.eb = a;
  this.l = []
}
z(Fg, K);
var Gg = [];
function U(a, b, c, d) {
  s(c) || (Gg[0] = c, c = Gg);
  for(var f = 0;f < c.length;f++) {
    a.l.push(M(b, c[f], d || a, !1, a.eb || a))
  }
  return a
}
function Hg(a, b, c, d, f, g) {
  if(s(c)) {
    for(var h = 0;h < c.length;h++) {
      Hg(a, b, c[h], d, f, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.eb || a;
      f = !!f;
      if(b = fd(b, c, f)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].kb && b[c].Eb == d && b[c].capture == f && b[c].Uc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    if(b) {
      b = b.key, gd(b), ab(a.l, b)
    }
  }
  return a
}
Fg.prototype.pe = function() {
  E(this.l, gd);
  this.l.length = 0
};
Fg.prototype.c = function() {
  Fg.d.c.call(this);
  this.pe()
};
Fg.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Ig() {
}
ea(Ig);
Ig.prototype.Lg = 0;
Ig.Ma();
function V(a) {
  this.P = a || dg();
  this.qc = Jg
}
z(V, md);
V.prototype.Cg = Ig.Ma();
var Jg = k;
function Kg(a, b) {
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
n.t = !1;
n.e = k;
n.qc = k;
n.Kg = k;
n.$ = k;
n.O = k;
n.Tb = k;
n.fh = !1;
function Lg(a) {
  return a.R || (a.R = ":" + (a.Cg.Lg++).toString(36))
}
n.b = l("e");
function Mg(a) {
  return a.wb || (a.wb = new Fg(a))
}
n.getParent = l("$");
n.ue = function(a) {
  this.$ && this.$ != a && e(Error("Method not supported"));
  V.d.ue.call(this, a)
};
n.Da = l("P");
n.h = function() {
  this.e = this.P.createElement("div")
};
function Ng(a, b) {
  a.t && e(Error("Component already rendered"));
  a.e || a.h();
  b ? b.insertBefore(a.e, k) : a.P.r.body.appendChild(a.e);
  (!a.$ || a.$.t) && a.Q()
}
n.Q = function() {
  this.t = !0;
  Og(this, function(a) {
    !a.t && a.b() && a.Q()
  })
};
n.$a = function() {
  Og(this, function(a) {
    a.t && a.$a()
  });
  this.wb && this.wb.pe();
  this.t = !1
};
n.c = function() {
  V.d.c.call(this);
  this.t && this.$a();
  this.wb && (this.wb.f(), delete this.wb);
  Og(this, function(a) {
    a.f()
  });
  !this.fh && this.e && pg(this.e);
  this.$ = this.Kg = this.e = this.Tb = this.O = k
};
n.$b = l("e");
n.Jb = function(a) {
  this.t && e(Error("Component already rendered"));
  this.qc = a
};
function Og(a, b) {
  a.O && E(a.O, b, i)
}
n.removeChild = function(a, b) {
  if(a) {
    var c = t(a) ? a : Lg(a), a = this.Tb && c ? (c in this.Tb ? this.Tb[c] : i) || k : k;
    if(c && a) {
      var d = this.Tb;
      c in d && delete d[c];
      ab(this.O, a);
      b && (a.$a(), a.e && pg(a.e));
      c = a;
      c == k && e(Error("Unable to set parent component"));
      c.$ = k;
      V.d.ue.call(c, k)
    }
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function Pg(a, b) {
  a.setAttribute("role", b);
  a.Ei = b
}
;function Qg() {
}
var Sg;
ea(Qg);
n = Qg.prototype;
n.Lc = function() {
};
n.h = function(a) {
  return a.Da().h("div", Tg(this, a).join(" "), a.ca)
};
n.$b = function(a) {
  return a
};
n.Xb = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(H && !J("7")) {
      var d = Ug(Zf(a), b);
      d.push(b);
      pa(c ? $f : ag, a).apply(k, d)
    }else {
      c ? $f(a, b) : ag(a, b)
    }
  }
};
n.nf = function(a) {
  if(a.qc == k) {
    a.qc = "rtl" == (yg(a.t ? a.e : a.P.r.body, "direction") || ((a.t ? a.e : a.P.r.body).currentStyle ? (a.t ? a.e : a.P.r.body).currentStyle.direction : k) || (a.t ? a.e : a.P.r.body).style.direction)
  }
  a.qc && this.Jb(a.b(), !0);
  a.isEnabled() && this.ld(a, a.Nb)
};
n.hd = function(a, b) {
  Eg(a, !b, !H && !jc)
};
n.Jb = function(a, b) {
  this.Xb(a, this.v() + "-rtl", b)
};
n.pf = function(a) {
  var b;
  return a.va & 32 && (b = a.cb()) ? ug(b) : !1
};
n.ld = function(a, b) {
  var c;
  if(a.va & 32 && (c = a.cb())) {
    if(!b && a.k & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.k & 32 && a.ff()
    }
    if(ug(c) != b) {
      b ? c.tabIndex = 0 : c.removeAttribute("tabIndex")
    }
  }
};
n.ye = function(a, b) {
  a.style.display = b ? "" : "none"
};
n.ia = function(a, b, c) {
  var d = a.b();
  if(d) {
    var f = Vg(this, b);
    f && this.Xb(a, f, c);
    this.xc(d, b, c)
  }
};
n.xc = function(a, b, c) {
  Sg || (Sg = {1:"disabled", 4:"pressed", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Sg[b]) && a.setAttribute("aria-" + b, c)
};
n.jd = function(a, b) {
  var c = this.$b(a);
  if(c && (og(c), b)) {
    if(t(b)) {
      rg(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = fg(c);
          c.appendChild(t(a) ? b.createTextNode(a) : a)
        }
      };
      s(b) ? E(b, d) : ha(b) && !("nodeType" in b) ? E(cb(b), d) : d(b)
    }
  }
};
n.cb = function(a) {
  return a.b()
};
n.v = ba("goog-control");
function Tg(a, b) {
  var c = a.v(), d = [c], f = a.v();
  f != c && d.push(f);
  c = b.k;
  for(f = [];c;) {
    var g = c & -c;
    f.push(Vg(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.sa) && d.push.apply(d, c);
  H && !J("7") && d.push.apply(d, Ug(d));
  return d
}
function Ug(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  E([], function(d) {
    Ya(d, pa(Za, a)) && (!b || Za(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Vg(a, b) {
  if(!a.Ne) {
    var c = a.v();
    a.Ne = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Ne[b]
}
;function Wg(a, b) {
  a || e(Error("Invalid class name " + a));
  v(b) || e(Error("Invalid decorator function " + b))
}
var Xg = {};
function Yg(a, b, c, d, f) {
  if(!H && (!I || !J("525"))) {
    return!0
  }
  if(nc && f) {
    return Zg(a)
  }
  if(f && !d) {
    return!1
  }
  if(!c && (b == 17 || b == 18)) {
    return!1
  }
  if(H && d && b == a) {
    return!1
  }
  switch(a) {
    case 13:
      return!(H && xc());
    case 27:
      return!I
  }
  return Zg(a)
}
function Zg(a) {
  if(a >= 48 && a <= 57) {
    return!0
  }
  if(a >= 96 && a <= 106) {
    return!0
  }
  if(a >= 65 && a <= 90) {
    return!0
  }
  if(I && a == 0) {
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
;function $g(a, b) {
  a && ah(this, a, b)
}
z($g, md);
n = $g.prototype;
n.e = k;
n.Yc = k;
n.ce = k;
n.Zc = k;
n.Qa = -1;
n.Pa = -1;
var bh = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, ch = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, dh = {61:187, 
59:186}, eh = H || I && J("525");
n = $g.prototype;
n.yg = function(a) {
  if(I && (this.Qa == 17 && !a.ctrlKey || this.Qa == 18 && !a.altKey)) {
    this.Pa = this.Qa = -1
  }
  eh && !Yg(a.keyCode, this.Qa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Pa = kc && a.keyCode in dh ? dh[a.keyCode] : a.keyCode
};
n.zg = function() {
  this.Pa = this.Qa = -1
};
n.handleEvent = function(a) {
  var b = a.Ba, c, d;
  H && a.type == "keypress" ? (c = this.Pa, d = c != 13 && c != 27 ? b.keyCode : 0) : I && a.type == "keypress" ? (c = this.Pa, d = b.charCode >= 0 && b.charCode < 63232 && Zg(c) ? b.charCode : 0) : jc ? (c = this.Pa, d = Zg(c) ? b.keyCode : 0) : (c = b.keyCode || this.Pa, d = b.charCode || 0, nc && d == 63 && !c && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in bh ? f = bh[c] : c == 25 && a.shiftKey && (f = 9) : g && g in ch && (f = ch[g]);
  a = f == this.Qa;
  this.Qa = f;
  b = new fh(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.f()
  }
};
n.b = l("e");
function ah(a, b, c) {
  a.Zc && a.detach();
  a.e = b;
  a.Yc = M(a.e, "keypress", a, c);
  a.ce = M(a.e, "keydown", a.yg, c, a);
  a.Zc = M(a.e, "keyup", a.zg, c, a)
}
n.detach = function() {
  if(this.Yc) {
    gd(this.Yc), gd(this.ce), gd(this.Zc), this.Zc = this.ce = this.Yc = k
  }
  this.e = k;
  this.Pa = this.Qa = -1
};
n.c = function() {
  $g.d.c.call(this);
  this.detach()
};
function fh(a, b, c, d) {
  d && this.ec(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
z(fh, Gc);
function W(a, b, c) {
  V.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = w(b);
      if(d = Xg[d]) {
        break
      }
      b = b.d ? b.d.constructor : k
    }
    b = d ? v(d.Ma) ? d.Ma() : new d : k
  }
  this.m = b;
  this.kd(a)
}
z(W, V);
n = W.prototype;
n.ca = k;
n.k = 0;
n.va = 39;
n.Ke = 255;
n.Zg = 0;
n.Nb = !0;
n.sa = k;
n.Xd = !0;
n.zd = !1;
n.cb = function() {
  return this.m.cb(this)
};
function gh(a, b) {
  if(b) {
    a.sa ? Za(a.sa, b) || a.sa.push(b) : a.sa = [b], a.m.Xb(a, b, !0)
  }
}
n.Xb = function(a, b) {
  if(b) {
    gh(this, a)
  }else {
    if(a && this.sa) {
      ab(this.sa, a);
      if(this.sa.length == 0) {
        this.sa = k
      }
      this.m.Xb(this, a, !1)
    }
  }
};
n.h = function() {
  var a = this.m.h(this);
  this.e = a;
  var b = this.m.Lc();
  b && Pg(a, b);
  this.zd || this.m.hd(a, !1);
  this.Nb || this.m.ye(a, !1)
};
n.$b = function() {
  return this.m.$b(this.b())
};
n.Q = function() {
  W.d.Q.call(this);
  this.m.nf(this);
  if(this.va & -2 && (this.Xd && hh(this, !0), this.va & 32)) {
    var a = this.cb();
    if(a) {
      var b = this.Ab || (this.Ab = new $g);
      ah(b, a);
      U(U(U(Mg(this), b, "key", this.hf), a, "focus", this.wg), a, "blur", this.ff)
    }
  }
};
function hh(a, b) {
  var c = Mg(a), d = a.b();
  b ? (U(U(U(U(c, d, "mouseover", a.Tc), d, "mousedown", a.Rc), d, "mouseup", a.jf), d, "mouseout", a.Sc), H && U(c, d, "dblclick", a.gf)) : (Hg(Hg(Hg(Hg(c, d, "mouseover", a.Tc), d, "mousedown", a.Rc), d, "mouseup", a.jf), d, "mouseout", a.Sc), H && Hg(c, d, "dblclick", a.gf))
}
n.$a = function() {
  W.d.$a.call(this);
  this.Ab && this.Ab.detach();
  this.Nb && this.isEnabled() && this.m.ld(this, !1)
};
n.c = function() {
  W.d.c.call(this);
  this.Ab && (this.Ab.f(), delete this.Ab);
  delete this.m;
  this.sa = this.ca = k
};
n.jd = function(a) {
  this.m.jd(this.b(), a);
  this.kd(a)
};
n.kd = aa("ca");
n.cf = function() {
  var a = this.ca;
  if(!a) {
    return""
  }
  if(!t(a)) {
    if(s(a)) {
      a = Wa(a, vg).join("")
    }else {
      if(cg && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        wg(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      cg || (a = a.replace(/ +/g, " "));
      a != " " && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
n.Jb = function(a) {
  W.d.Jb.call(this, a);
  var b = this.b();
  b && this.m.Jb(b, a)
};
n.hd = function(a) {
  this.zd = a;
  var b = this.b();
  b && this.m.hd(b, a)
};
n.ye = function(a, b) {
  if(b || this.Nb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.m.ye(c, a);
    this.isEnabled() && this.m.ld(this, a);
    this.Nb = a;
    return!0
  }
  return!1
};
n.isEnabled = function() {
  return!(this.k & 1)
};
function ih(a, b) {
  jh(a, 2, b) && a.ia(2, b)
}
n.be = function() {
  return!!(this.k & 4)
};
n.setActive = function(a) {
  jh(this, 4, a) && this.ia(4, a)
};
n.ve = function(a) {
  jh(this, 8, a) && this.ia(8, a)
};
n.ia = function(a, b) {
  if(this.va & a && b != !!(this.k & a)) {
    this.m.ia(this, a, b), this.k = b ? this.k | a : this.k & ~a
  }
};
function X(a, b) {
  return!!(a.Ke & b) && !!(a.va & b)
}
function jh(a, b, c) {
  return!!(a.va & b) && !!(a.k & b) != c && (!(a.Zg & b) || a.dispatchEvent(Kg(b, c))) && !a.qa
}
n.Tc = function(a) {
  !kh(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && ih(this, !0)
};
n.Sc = function(a) {
  !kh(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(!1), X(this, 2) && ih(this, !1))
};
function kh(a, b) {
  return!!a.relatedTarget && qg(b, a.relatedTarget)
}
n.Rc = function(a) {
  if(this.isEnabled() && (X(this, 2) && ih(this, !0), Ic(a) && (!I || !nc || !a.ctrlKey))) {
    X(this, 4) && this.setActive(!0), this.m.pf(this) && this.cb().focus()
  }
  !this.zd && Ic(a) && (!I || !nc || !a.ctrlKey) && a.preventDefault()
};
n.jf = function(a) {
  this.isEnabled() && (X(this, 2) && ih(this, !0), this.be() && this.ib(a) && X(this, 4) && this.setActive(!1))
};
n.gf = function(a) {
  this.isEnabled() && this.ib(a)
};
n.ib = function(a) {
  if(X(this, 16)) {
    var b = !(this.k & 16);
    jh(this, 16, b) && this.ia(16, b)
  }
  X(this, 8) && this.ve(!0);
  X(this, 64) && (b = !(this.k & 64), jh(this, 64, b) && this.ia(64, b));
  b = new Dc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, f = 0;d = c[f];f++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
n.wg = function() {
  X(this, 32) && jh(this, 32, !0) && this.ia(32, !0)
};
n.ff = function() {
  X(this, 4) && this.setActive(!1);
  X(this, 32) && jh(this, 32, !1) && this.ia(32, !1)
};
n.hf = function(a) {
  return this.Nb && this.isEnabled() && this.Wd(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
n.Wd = function(a) {
  return a.keyCode == 13 && this.ib(a)
};
v(W) || e(Error("Invalid component class " + W));
v(Qg) || e(Error("Invalid renderer class " + Qg));
var lh = w(W);
Xg[lh] = Qg;
Wg("goog-control", function() {
  return new W(k)
});
function mh() {
}
z(mh, Qg);
ea(mh);
n = mh.prototype;
n.Lc = ba("button");
n.xc = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : mh.d.xc.call(this, a, b, c)
};
n.h = function(a) {
  var b = mh.d.h.call(this, a), c = a.Oc();
  c && this.xe(b, c);
  (c = a.Pc()) && this.od(b, c);
  a.va & 16 && this.xc(b, 16, !1);
  return b
};
n.Pc = q;
n.od = q;
n.Oc = function(a) {
  return a.title
};
n.xe = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
n.v = ba("goog-button");
function nh() {
}
z(nh, mh);
ea(nh);
n = nh.prototype;
n.Lc = function() {
};
n.h = function(a) {
  a.t && !1 != a.Xd && hh(a, !1);
  a.Xd = !1;
  a.Ke &= -256;
  a.t && a.k & 32 && e(Error("Component already rendered"));
  a.k & 32 && a.ia(32, !1);
  a.va &= -33;
  return a.Da().h("button", {"class":Tg(this, a).join(" "), disabled:!a.isEnabled(), title:a.Oc() || "", value:a.Pc() || ""}, a.cf() || "")
};
n.nf = function(a) {
  U(Mg(a), a.b(), "click", a.ib)
};
n.hd = q;
n.Jb = q;
n.pf = function(a) {
  return a.isEnabled()
};
n.ld = q;
n.ia = function(a, b, c) {
  nh.d.ia.call(this, a, b, c);
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
function oh(a, b, c) {
  W.call(this, a, b || nh.Ma(), c)
}
z(oh, W);
n = oh.prototype;
n.Pc = l("$f");
n.od = function(a) {
  this.$f = a;
  this.m.od(this.b(), a)
};
n.Oc = l("Vf");
n.xe = function(a) {
  this.Vf = a;
  this.m.xe(this.b(), a)
};
n.c = function() {
  oh.d.c.call(this);
  delete this.$f;
  delete this.Vf
};
n.Q = function() {
  oh.d.Q.call(this);
  if(this.va & 32) {
    var a = this.cb();
    a && U(Mg(this), a, "keyup", this.Wd)
  }
};
n.Wd = function(a) {
  return a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup" ? this.ib(a) : a.keyCode == 32
};
Wg("goog-button", function() {
  return new oh(k)
});
function ph() {
}
z(ph, mh);
ea(ph);
ph.prototype.h = function(a) {
  var b = {"class":"goog-inline-block " + Tg(this, a).join(" "), title:a.Oc() || ""};
  return a.Da().h("div", b, qh(this, a.ca, a.Da()))
};
ph.prototype.Lc = ba("button");
ph.prototype.$b = function(a) {
  return a && a.firstChild.firstChild
};
function qh(a, b, c) {
  return c.h("div", "goog-inline-block " + (a.v() + "-outer-box"), c.h("div", "goog-inline-block " + (a.v() + "-inner-box"), b))
}
ph.prototype.v = ba("goog-custom-button");
function rh(a, b, c) {
  oh.call(this, a, b || ph.Ma(), c)
}
z(rh, oh);
Wg("goog-custom-button", function() {
  return new rh(k)
});
var sh = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function th(a) {
  var b = {}, a = String(a), c = a.charAt(0) == "#" ? a : "#" + a;
  if(uh.test(c)) {
    return b.Vc = vh(c), b.type = "hex", b
  }else {
    a: {
      var d = a.match(wh);
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
      return b.Vc = xh(c[0], c[1], c[2]), b.type = "rgb", b
    }else {
      if(sh && (c = sh[a.toLowerCase()])) {
        return b.Vc = c, b.type = "named", b
      }
    }
  }
  e(Error(a + " is not a valid color string"))
}
var yh = /#(.)(.)(.)/;
function vh(a) {
  uh.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  a.length == 4 && (a = a.replace(yh, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function zh(a) {
  a = vh(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function xh(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || a < 0 || a > 255 || isNaN(b) || b < 0 || b > 255 || isNaN(c) || c < 0 || c > 255) && e(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = Ah(a.toString(16));
  b = Ah(b.toString(16));
  c = Ah(c.toString(16));
  return"#" + a + b + c
}
var uh = /^#(?:[0-9a-f]{3}){1,2}$/i, wh = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function Ah(a) {
  return a.length == 1 ? "0" + a : a
}
;function Gf(a, b) {
  var c;
  a instanceof Gf ? (this.Ib(b == k ? a.ua : b), Bh(this, a.Ga), Ch(this, a.yc), Dh(this, a.Ka), Eh(this, a.Gb), this.Va(a.N), Fh(this, a.ha.L()), Gh(this, a.Zb)) : a && (c = String(a).match(Pe)) ? (this.Ib(!!b), Bh(this, c[1] || "", !0), Ch(this, c[2] || "", !0), Dh(this, c[3] || "", !0), Eh(this, c[4]), this.Va(c[5] || "", !0), Fh(this, c[6] || "", !0), Gh(this, c[7] || "", !0)) : (this.Ib(!!b), this.ha = new Hh(k, this, this.ua))
}
n = Gf.prototype;
n.Ga = "";
n.yc = "";
n.Ka = "";
n.Gb = k;
n.N = "";
n.Zb = "";
n.Eg = !1;
n.ua = !1;
n.toString = function() {
  if(this.pa) {
    return this.pa
  }
  var a = [];
  this.Ga && a.push(Ih(this.Ga, Jh), ":");
  this.Ka && (a.push("//"), this.yc && a.push(Ih(this.yc, Jh), "@"), a.push(t(this.Ka) ? encodeURIComponent(this.Ka) : k), this.Gb != k && a.push(":", String(this.Gb)));
  this.N && (this.Ka && this.N.charAt(0) != "/" && a.push("/"), a.push(Ih(this.N, this.N.charAt(0) == "/" ? Kh : Lh)));
  var b = String(this.ha);
  b && a.push("?", b);
  this.Zb && a.push("#", Ih(this.Zb, Mh));
  return this.pa = a.join("")
};
n.L = function() {
  var a = this.Ga, b = this.yc, c = this.Ka, d = this.Gb, f = this.N, g = this.ha.L(), h = this.Zb, j = new Gf(k, this.ua);
  a && Bh(j, a);
  b && Ch(j, b);
  c && Dh(j, c);
  d && Eh(j, d);
  f && j.Va(f);
  g && Fh(j, g);
  h && Gh(j, h);
  return j
};
function Bh(a, b, c) {
  Nh(a);
  delete a.pa;
  a.Ga = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.Ga) {
    a.Ga = a.Ga.replace(/:$/, "")
  }
}
function Ch(a, b, c) {
  Nh(a);
  delete a.pa;
  a.yc = c ? b ? decodeURIComponent(b) : "" : b
}
function Dh(a, b, c) {
  Nh(a);
  delete a.pa;
  a.Ka = c ? b ? decodeURIComponent(b) : "" : b
}
function Eh(a, b) {
  Nh(a);
  delete a.pa;
  b ? (b = Number(b), (isNaN(b) || b < 0) && e(Error("Bad port number " + b)), a.Gb = b) : a.Gb = k
}
n.Va = function(a, b) {
  Nh(this);
  delete this.pa;
  this.N = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function Fh(a, b, c) {
  Nh(a);
  delete a.pa;
  b instanceof Hh ? (a.ha = b, a.ha.Ge = a, a.ha.Ib(a.ua)) : (c || (b = Ih(b, Oh)), a.ha = new Hh(b, a, a.ua))
}
function Gh(a, b, c) {
  Nh(a);
  delete a.pa;
  a.Zb = c ? b ? decodeURIComponent(b) : "" : b
}
function Nh(a) {
  a.Eg && e(Error("Tried to modify a read-only Uri"))
}
n.Ib = function(a) {
  this.ua = a;
  this.ha && this.ha.Ib(a);
  return this
};
var Ph = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Ih(a, b) {
  var c = k;
  t(a) && (c = a, Ph.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, Qh)));
  return c
}
function Qh(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Jh = /[#\/\?@]/g, Lh = /[\#\?:]/g, Kh = /[\#\?]/g, Oh = /[\#\?@]/g, Mh = /#/g;
function Hh(a, b, c) {
  this.Aa = a || k;
  this.Ge = b || k;
  this.ua = !!c
}
function Rh(a) {
  if(!a.o && (a.o = new Pb, a.g = 0, a.Aa)) {
    for(var b = a.Aa.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      d >= 0 ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = Sh(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
n = Hh.prototype;
n.o = k;
n.g = k;
n.U = function() {
  Rh(this);
  return this.g
};
n.add = function(a, b) {
  Rh(this);
  Th(this);
  a = Sh(this, a);
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
  Rh(this);
  a = Sh(this, a);
  if(this.o.ba(a)) {
    Th(this);
    var b = this.o.get(a);
    s(b) ? this.g -= b.length : this.g--;
    return this.o.remove(a)
  }
  return!1
};
n.clear = function() {
  Th(this);
  this.o && this.o.clear();
  this.g = 0
};
n.Oa = function() {
  Rh(this);
  return this.g == 0
};
n.ba = function(a) {
  Rh(this);
  a = Sh(this, a);
  return this.o.ba(a)
};
n.Fc = function(a) {
  var b = this.W();
  return Za(b, a)
};
n.Ea = function() {
  Rh(this);
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
  Rh(this);
  if(a) {
    if(a = Sh(this, a), this.ba(a)) {
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
      s(d) ? db(a, d) : a.push(d)
    }
  }
  return a
};
n.set = function(a, b) {
  Rh(this);
  Th(this);
  a = Sh(this, a);
  if(this.ba(a)) {
    var c = this.o.get(a);
    s(c) ? this.g -= c.length : this.g--
  }
  this.o.set(a, b);
  this.g++;
  return this
};
n.get = function(a, b) {
  Rh(this);
  a = Sh(this, a);
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
function Th(a) {
  delete a.Id;
  delete a.Aa;
  a.Ge && delete a.Ge.pa
}
n.L = function() {
  var a = new Hh;
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
function Sh(a, b) {
  var c = String(b);
  a.ua && (c = c.toLowerCase());
  return c
}
n.Ib = function(a) {
  a && !this.ua && (Rh(this), Th(this), Nb(this.o, function(a, c) {
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
var Uh;
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
  Uh = c
})();
function Vh(a, b) {
  V.call(this, b);
  this.sg = a;
  this.Md = new Fg(this);
  this.Kc = new Pb
}
z(Vh, V);
n = Vh.prototype;
n.a = Q("goog.ui.media.FlashObject");
n.hh = "window";
n.Le = "#000000";
n.fg = "sameDomain";
n.aa = function(a, b) {
  this.ob = t(a) ? a : Math.round(a) + "px";
  this.Yd = t(b) ? b : Math.round(b) + "px";
  this.b() && zg(this.b() ? this.b().firstChild : k, this.ob, this.Yd);
  return this
};
n.Q = function() {
  Vh.d.Q.call(this);
  var a = this.b(), b;
  b = H ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = H ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = ra(c, this.hh), d = this.Kc.Ea(), f = this.Kc.W(), g = [], h = 0;h < d.length;h++) {
    var j = ta(d[h]), m = ta(f[h]);
    g.push(j + "=" + m)
  }
  b = ra(b, Lg(this), Lg(this), "goog-ui-media-flash-object", va(this.sg), va(g.join("&")), this.Le, this.fg, c);
  a.innerHTML = b;
  this.ob && this.Yd && this.aa(this.ob, this.Yd);
  U(this.Md, this.b(), Ra(zc), Ec)
};
n.h = function() {
  this.Lf != k && !(Ca(Uh, this.Lf) >= 0) && (N(this.a, "Required flash version not found:" + this.Lf), e(Error("Method not supported")));
  var a = this.Da().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
n.c = function() {
  Vh.d.c.call(this);
  this.Kc = k;
  this.Md.f();
  this.Md = k
};
function Wh(a) {
  C.call(this, a)
}
z(Wh, C);
Wh.prototype.name = "cw.loadflash.FlashLoadFailed";
o.__loadFlashObject_callbacks = {};
function Xh(a, b, c) {
  function d() {
    f && delete o.__loadFlashObject_callbacks[f]
  }
  var f;
  if(kc && !J("1.8.1.20")) {
    return Cd(new Wh("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(Ca(Uh, "9") >= 0)) {
    return b = Uh, Cd(new Wh("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  f = "_" + Hd();
  var h = new qd(d);
  o.__loadFlashObject_callbacks[f] = function() {
    a.setTimeout(function() {
      d();
      wd(h, T(g))
    }, 0)
  };
  b.Kc.set("onloadcallback", '__loadFlashObject_callbacks["' + f + '"]()');
  g = Lg(b);
  Ng(b, c);
  return h
}
function Yh(a, b, c) {
  var d = Xh(a, b, c), f = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  zd(d, function(b) {
    a.clearTimeout(f);
    return b
  });
  return d
}
;var of = 1;
function Zh(a, b) {
  this.ih = a;
  this.wf = b
}
Zh.prototype.de = 0;
Zh.prototype.cd = 0;
Zh.prototype.Pd = !1;
function $h(a) {
  var b = [];
  if(a.Pd) {
    return[b, 2]
  }
  var c = a.de, d = a.ih.responseText;
  for(a.de = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var f = d.substr(a.cd, c - a.cd), f = f.replace(/\r$/, "");
    if(f.length > a.wf) {
      return a.Pd = !0, [b, 2]
    }
    b.push(f);
    a.cd = c += 1
  }
  return a.de - a.cd - 1 > a.wf ? (a.Pd = !0, [b, 2]) : [b, of]
}
;var ai = !(H || I && !J("420+"));
function bi(a, b) {
  this.td = a;
  this.ma = b
}
z(bi, K);
n = bi.prototype;
n.q = k;
n.Ta = -1;
n.ef = !1;
n.kf = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function ci(a) {
  var b = $h(a.Ue), c = b[0], b = b[1], d = o.parent;
  d ? (d.__XHRMaster_onframes(a.ma, c, b), b != of && a.f()) : a.f()
}
n.Bg = function() {
  ci(this);
  if(!this.qa) {
    var a = o.parent;
    a && a.__XHRMaster_oncomplete(this.ma);
    this.f()
  }
};
n.Rg = function() {
  var a = o.parent;
  if(a) {
    this.Ta = this.q.Na();
    if(this.Ta >= 2 && !this.ef) {
      for(var b = new Pb, c = this.kf.length;c--;) {
        var d = this.kf[c];
        try {
          b.set(d, this.q.i.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.U() && (this.ef = !0, a.__XHRMaster_ongotheaders(this.ma, Tb(b)), this.qa)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.ma, this.Ta);
    ai && this.Ta == 3 && ci(this)
  }else {
    this.f()
  }
};
n.ge = function(a, b, c) {
  this.q = new ef;
  M(this.q, "readystatechange", x(this.Rg, this));
  M(this.q, "complete", x(this.Bg, this));
  this.q.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.Ue = new Zh(this.q.i, 1048576)
};
n.c = function() {
  bi.d.c.call(this);
  delete this.Ue;
  this.q && this.q.f();
  delete this.td.tc[this.ma];
  delete this.td
};
function di() {
  this.tc = {}
}
z(di, K);
di.prototype.Hg = function(a, b, c, d) {
  var f = new bi(this, a);
  this.tc[a] = f;
  f.ge(b, c, d)
};
di.prototype.pg = function(a) {
  (a = this.tc[a]) && a.f()
};
di.prototype.c = function() {
  di.d.c.call(this);
  for(var a = Ra(this.tc);a.length;) {
    a.pop().f()
  }
  delete this.tc
};
var ei = new di;
o.__XHRSlave_makeRequest = x(ei.Hg, ei);
o.__XHRSlave_dispose = x(ei.pg, ei);
function fi(a) {
  this.r = a
}
var gi = /\s*;\s*/;
n = fi.prototype;
n.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && I) {
    var b = "COOKIES_TEST_" + y();
    hi.set(b, "1");
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
  this.r.cookie = a + "=" + b + f + d + c + g
};
n.get = function(a, b) {
  for(var c = a + "=", d = (this.r.cookie || "").split(gi), f = 0, g;g = d[f];f++) {
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
  return ii(this).keys
};
n.W = function() {
  return ii(this).ag
};
n.Oa = function() {
  return!this.r.cookie
};
n.U = function() {
  return!this.r.cookie ? 0 : (this.r.cookie || "").split(gi).length
};
n.ba = function(a) {
  return ga(this.get(a))
};
n.Fc = function(a) {
  for(var b = ii(this).ag, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return!0
    }
  }
  return!1
};
n.clear = function() {
  for(var a = ii(this).keys, b = a.length - 1;b >= 0;b--) {
    this.remove(a[b])
  }
};
function ii(a) {
  for(var a = (a.r.cookie || "").split(gi), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), d == -1 ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{keys:b, ag:c}
}
var hi = new fi(document);
hi.Oh = 3950;
function ji() {
  this.wi = "demosminerva_site_uaid";
  this.xi = "demosminerva_site_uaid_secure"
}
function ki(a) {
  var b = new Vh("/compiled_client/FlashConnector.swf?cb=2ae8d8a79afe8f3a96bb49e8a9339914");
  b.Le = "#777777";
  b.aa(300, 30);
  var c = T("FlashConnectorSwf");
  c || e(Error("no FlashConnectorSwf?"));
  return Yh(a.M, b, c)
}
function li(a, b, c) {
  var d = new Gf(document.location);
  if(c) {
    var f = d.Ka, b = ki(a);
    xd(b, function(b) {
      b = new re(a, b);
      return new vf(f, 843, b)
    });
    return b
  }else {
    return b ? (b = tf(), xd(b, function() {
      var a = T("xdrframe-1").contentWindow || (I ? T("xdrframe-1").document || T("xdrframe-1").contentWindow.document : T("xdrframe-1").contentDocument || T("xdrframe-1").contentWindow.document).parentWindow || (I ? T("xdrframe-1").document || T("xdrframe-1").contentWindow.document : T("xdrframe-1").contentDocument || T("xdrframe-1").contentWindow.document).defaultView, b = T("xdrframe-2").contentWindow || (I ? T("xdrframe-2").document || T("xdrframe-2").contentWindow.document : T("xdrframe-2").contentDocument || 
      T("xdrframe-2").contentWindow.document).parentWindow || (I ? T("xdrframe-2").document || T("xdrframe-2").contentWindow.document : T("xdrframe-2").contentDocument || T("xdrframe-2").contentWindow.document).defaultView;
      a || e(Error("could not get primaryWindow xdrframe"));
      b || e(Error("could not get secondaryWindow xdrframe"));
      var c = new Gf(o.__XDRSetup.baseurl1);
      c.Va("/httpface/");
      var d = new Gf(o.__XDRSetup.baseurl2);
      d.Va("/httpface/");
      return new wf(c.toString(), a, d.toString(), b)
    }), b) : (b = d.L(), b.Va("/httpface/"), Fh(b, "", i), b = new wf(b.toString(), o, b.toString(), o), Bd(b))
  }
}
function mi() {
  var a = ni, b = (new Gf(document.location)).ha, c = b.get("mode") != "http", b = Boolean(Number(b.get("useSub", "1")));
  return li(a, b, c)
}
;function oi() {
  this.Jf = y()
}
var pi = new oi;
oi.prototype.set = aa("Jf");
oi.prototype.reset = function() {
  this.set(y())
};
oi.prototype.get = l("Jf");
function qi(a) {
  this.Pg = a || "";
  this.Yg = pi
}
qi.prototype.Rf = !0;
qi.prototype.Wg = !0;
qi.prototype.Vg = !0;
qi.prototype.Sf = !1;
function ri(a) {
  return a < 10 ? "0" + a : String(a)
}
function si(a, b) {
  var c = (a.Uf - b) / 1E3, d = c.toFixed(3), f = 0;
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
function ti(a) {
  qi.call(this, a)
}
z(ti, qi);
ti.prototype.Sf = !0;
function ui(a) {
  this.Qg = x(this.eg, this);
  this.af = new ti;
  this.of = this.af.Rf = !1;
  this.e = a;
  this.rg = this.e.ownerDocument || this.e.document;
  var a = dg(this.e), b = k;
  if(H) {
    b = a.r.createStyleSheet(), Cg(b)
  }else {
    var c = gg(a.r, "head", i, i)[0];
    c || (b = gg(a.r, "body", i, i)[0], c = a.h("head"), b.parentNode.insertBefore(c, b));
    b = a.h("style");
    Cg(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
ui.prototype.eg = function(a) {
  var b = this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight <= 100, c = this.rg.createElement("div");
  c.className = "logmsg";
  var d = this.af, f;
  switch(a.Db.value) {
    case Zd.value:
      f = "dbg-sh";
      break;
    case $d.value:
      f = "dbg-sev";
      break;
    case ae.value:
      f = "dbg-w";
      break;
    case be.value:
      f = "dbg-i";
      break;
    default:
      f = "dbg-f"
  }
  var g = [];
  g.push(d.Pg, " ");
  if(d.Rf) {
    var h = new Date(a.Uf);
    g.push("[", ri(h.getFullYear() - 2E3) + ri(h.getMonth() + 1) + ri(h.getDate()) + " " + ri(h.getHours()) + ":" + ri(h.getMinutes()) + ":" + ri(h.getSeconds()) + "." + ri(Math.floor(h.getMilliseconds() / 10)), "] ")
  }
  d.Wg && g.push("[", Ba(si(a, d.Yg.get())), "s] ");
  d.Vg && g.push("[", va(a.Gg), "] ");
  g.push('<span class="', f, '">', ua(Ba(va(a.zf))));
  d.Sf && a.Od && g.push("<br>", ua(Ba(a.Nd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  if(b) {
    this.e.scrollTop = this.e.scrollHeight
  }
};
ui.prototype.clear = function() {
  this.e.innerHTML = ""
};
function vi(a, b, c, d, f, g) {
  arguments.length == 6 ? this.setTransform(a, b, c, d, f, g) : arguments.length != 0 ? e(Error("Insufficient matrix parameters")) : (this.X = this.Z = 1, this.S = this.Y = this.fa = this.ga = 0)
}
n = vi.prototype;
n.L = function() {
  return new vi(this.X, this.S, this.Y, this.Z, this.fa, this.ga)
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
n.Qe = function(a) {
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
  var d = new vi, f = Math.cos(a), a = Math.sin(a), b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f), c = this.X, d = this.Y;
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
z(Y, md);
n = Y.prototype;
n.ta = k;
n.e = k;
n.Wf = k;
n.b = l("e");
n.addEventListener = function(a, b, c, d) {
  M(this.e, a, b, c, d)
};
n.removeEventListener = function(a, b, c, d) {
  ed(this.e, a, b, c, d)
};
n.c = function() {
  Y.d.c.call(this);
  id(this.e)
};
function Z(a, b, c, d) {
  Y.call(this, a, b);
  this.De = c;
  this.ta.te(this, c);
  this.fill = d;
  this.ta.se(this, d)
}
z(Z, Y);
Z.prototype.fill = k;
Z.prototype.De = k;
Z.prototype.tg = l("fill");
Z.prototype.vg = l("De");
function wi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
z(wi, Z);
function xi(a, b) {
  Y.call(this, a, b)
}
z(xi, Y);
function yi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
z(yi, Z);
function zi(a, b) {
  Y.call(this, a, b)
}
z(zi, Y);
function Ai(a, b) {
  Y.call(this, a, b)
}
z(Ai, xi);
Ai.prototype.clear = function() {
  og(this.b())
};
Ai.prototype.aa = function(a, b) {
  Bi(this.b(), {width:a, height:b})
};
function Ci(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
z(Ci, yi);
function Di(a, b) {
  Y.call(this, a, b)
}
z(Di, zi);
Di.prototype.aa = function(a, b) {
  Bi(this.b(), {width:a, height:b})
};
function Ei() {
}
;function Rf(a, b) {
  this.Dd = a;
  this.jc = b || 1
}
z(Rf, Ei);
Rf.prototype.ea = l("Dd");
function Qf(a, b) {
  this.ob = a;
  this.Dd = b
}
Qf.prototype.ea = l("Dd");
function Fi() {
  this.B = [];
  this.g = [];
  this.xa = []
}
Fi.prototype.sb = k;
Fi.prototype.T = k;
Fi.prototype.Kb = !0;
var Gi = [2, 2, 6, 6, 0];
n = Fi.prototype;
n.clear = function() {
  this.B.length = 0;
  this.g.length = 0;
  this.xa.length = 0;
  delete this.sb;
  delete this.T;
  delete this.Kb;
  return this
};
n.moveTo = function(a, b) {
  this.B[this.B.length - 1] == 0 ? this.xa.length -= 2 : (this.B.push(0), this.g.push(1));
  this.xa.push(a, b);
  this.T = this.sb = [a, b];
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
n.Te = function(a) {
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
    this.B.push(4), this.g.push(1), this.T = this.sb
  }
  return this
};
n.arcTo = function(a, b, c, d) {
  var f = this.T[0] - a * Math.cos(te(c)) + a * Math.cos(te(c + d)), g = this.T[1] - b * Math.sin(te(c)) + b * Math.sin(te(c + d));
  this.B.push(3);
  this.g.push(1);
  this.xa.push(a, b, c, d, f, g);
  this.Kb = !1;
  this.T = [f, g];
  return this
};
n.gg = function(a, b, c, d) {
  var f = this.T[0] - a * Math.cos(te(c)), g = this.T[1] - b * Math.sin(te(c)), h = te(d), d = Math.ceil(Math.abs(h) / Math.PI * 2);
  h /= d;
  for(var c = te(c), j = 0;j < d;j++) {
    var m = Math.cos(c), p = Math.sin(c), A = 4 / 3 * Math.sin(h / 2) / (1 + Math.cos(h / 2)), r = f + (m - A * p) * a, u = g + (p + A * m) * b;
    c += h;
    m = Math.cos(c);
    p = Math.sin(c);
    this.Te(r, u, f + (m + A * p) * a, g + (p - A * m) * b, f + m * a, g + p * b)
  }
  return this
};
function Hi(a, b) {
  for(var c = a.xa, d = 0, f = 0, g = a.B.length;f < g;f++) {
    var h = a.B[f], j = Gi[h] * a.g[f];
    b(h, c.slice(d, d + j));
    d += j
  }
}
n.L = function() {
  var a = new this.constructor;
  a.B = this.B.concat();
  a.g = this.g.concat();
  a.xa = this.xa.concat();
  a.sb = this.sb && this.sb.concat();
  a.T = this.T && this.T.concat();
  a.Kb = this.Kb;
  return a
};
var Ii = {};
Ii[0] = Fi.prototype.moveTo;
Ii[1] = Fi.prototype.lineTo;
Ii[4] = Fi.prototype.close;
Ii[2] = Fi.prototype.Te;
Ii[3] = Fi.prototype.gg;
function Ji(a) {
  if(a.Kb) {
    return a.L()
  }
  var b = new Fi;
  Hi(a, function(a, d) {
    Ii[a].apply(b, d)
  });
  return b
}
Fi.prototype.Oa = function() {
  return this.B.length == 0
};
function Ki(a, b, c, d, f) {
  V.call(this, f);
  this.width = a;
  this.height = b;
  this.ja = c || k;
  this.Ub = d || k
}
z(Ki, V);
n = Ki.prototype;
n.G = k;
n.Ja = 0;
n.Za = 0;
n.df = function() {
  return this.V()
};
n.V = function() {
  return this.t ? Bg(this.b()) : ka(this.width) && ka(this.height) ? new S(this.width, this.height) : k
};
function Li(a) {
  var b = a.V();
  return b ? b.width / (a.ja ? new S(a.ja, a.Ub) : a.V()).width : 0
}
;function Mi(a, b, c, d, f) {
  Ki.call(this, a, b, c, d, f);
  this.We = {};
  this.He = I && !J(526);
  this.eb = new Fg(this)
}
var Ni;
z(Mi, Ki);
function Oi(a, b, c) {
  a = a.P.r.createElementNS("http://www.w3.org/2000/svg", b);
  c && Bi(a, c);
  return a
}
function Bi(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
n = Mi.prototype;
n.qb = function(a, b) {
  (b || this.G).b().appendChild(a.b())
};
n.se = function(a, b) {
  var c = a.b();
  b instanceof Rf ? (c.setAttribute("fill", b.ea()), c.setAttribute("fill-opacity", b.jc)) : c.setAttribute("fill", "none")
};
n.te = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.ea());
    var d = b.ob;
    t(d) && d.indexOf("px") != -1 ? c.setAttribute("stroke-width", parseFloat(d) / Li(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
n.h = function() {
  var a = Oi(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = Oi(this, "g");
  this.Jd = Oi(this, "defs");
  this.G = new Ai(b, this);
  a.appendChild(this.Jd);
  a.appendChild(b);
  this.e = a;
  if(this.ja || this.Ja || this.Za) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.He ? this.ud() : this.b().setAttribute("viewBox", this.Ja + " " + this.Za + " " + (this.ja ? this.ja + " " + this.Ub : ""))
  }
};
n.ud = function() {
  if(this.t && (this.ja || this.Ja || !this.Za)) {
    var a = this.V();
    if(a.width == 0) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.Ja, c = -this.Za, d = a.width / this.ja, a = a.height / this.Ub;
      this.G.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
n.aa = function(a, b) {
  zg(this.b(), a, b)
};
n.V = function() {
  if(!kc) {
    return this.t ? Bg(this.b()) : Mi.d.V.call(this)
  }
  var a = this.width, b = this.height, c = t(a) && a.indexOf("%") != -1, d = t(b) && b.indexOf("%") != -1;
  if(!this.t && (c || d)) {
    return k
  }
  var f, g;
  if(c) {
    f = this.b().parentNode, g = Bg(f), a = parseFloat(a) * g.width / 100
  }
  d && (f = f || this.b().parentNode, g = g || Bg(f), b = parseFloat(b) * g.height / 100);
  return new S(a, b)
};
n.clear = function() {
  this.G.clear();
  og(this.Jd);
  this.We = {}
};
n.Hc = function(a, b, c, d, f, g, h) {
  a = Oi(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new Ci(a, this, f, g);
  this.qb(f, h);
  return f
};
n.drawImage = function(a, b, c, d, f, g) {
  a = Oi(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new Di(a, this);
  this.qb(f, g);
  return f
};
n.Q = function() {
  var a = this.V();
  Mi.d.Q.call(this);
  a || this.dispatchEvent("resize");
  if(this.He) {
    var a = this.width, b = this.height;
    typeof a == "string" && a.indexOf("%") != -1 && typeof b == "string" && b.indexOf("%") != -1 && U(this.eb, Pi(), pd, this.ud);
    this.ud()
  }
};
n.$a = function() {
  Mi.d.$a.call(this);
  this.He && Hg(this.eb, Pi(), pd, this.ud)
};
n.c = function() {
  delete this.We;
  delete this.Jd;
  delete this.G;
  Mi.d.c.call(this)
};
function Pi() {
  Ni || (Ni = new nd(400), Ni.start());
  return Ni
}
;function Qi() {
  return this.e = this.ta.P.b(this.R) || this.e
}
function Ri(a, b) {
  this.R = a.id;
  Y.call(this, a, b)
}
z(Ri, xi);
Ri.prototype.b = Qi;
Ri.prototype.clear = function() {
  og(this.b())
};
Ri.prototype.aa = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  if(this.ta.G != this) {
    c.coordorigin = "0 0"
  }
};
function Si(a, b, c, d, f, g, h, j) {
  this.R = a.id;
  Z.call(this, a, b, h, j);
  this.mi = c;
  this.ni = d;
  this.Fi = f;
  this.Gi = g
}
z(Si, yi);
Si.prototype.b = Qi;
function Ti(a, b) {
  this.R = a.id;
  Y.call(this, a, b)
}
z(Ti, zi);
Ti.prototype.b = Qi;
Ti.prototype.aa = function(a, b) {
  var c = this.b().style;
  c.width = Ui(a) + "px";
  c.height = Ui(b) + "px"
};
function Vi(a, b, c, d, f) {
  Ki.call(this, a, b, c, d, f);
  this.eb = new Fg(this)
}
z(Vi, Ki);
var Wi = document.documentMode && document.documentMode >= 8;
function Ui(a) {
  return Math.round((parseFloat(a.toString()) - 0.5) * 100)
}
function $(a) {
  return Math.round(parseFloat(a.toString()) * 100)
}
function Xi(a, b) {
  var c = a.P.createElement("g_vml_:" + b);
  c.id = "goog_" + Ea++;
  return c
}
function Yi(a) {
  if(Wi && a.t) {
    a.b().innerHTML = a.b().innerHTML
  }
}
Vi.prototype.qb = function(a, b) {
  (b || this.G).b().appendChild(a.b());
  Yi(this)
};
Vi.prototype.se = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    f.tagName == "fill" && c.removeChild(f)
  }
  b instanceof Rf ? b.ea() == "transparent" ? c.filled = !1 : b.jc != 1 ? (c.filled = !0, d = Xi(this, "fill"), d.opacity = Math.round(b.jc * 100) + "%", d.color = b.ea(), c.appendChild(d)) : (c.filled = !0, c.fillcolor = b.ea()) : c.filled = !1;
  Yi(this)
};
Vi.prototype.te = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = !0;
    var d = b.ob;
    t(d) && d.indexOf("px") == -1 ? d = parseFloat(d) : d *= Li(this);
    var f = c.getElementsByTagName("stroke")[0];
    d < 1 ? (f = f || Xi(this, "stroke"), f.opacity = d, f.Ii = "1px", f.color = b.ea(), c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.ea(), c.strokeweight = d + "px")
  }else {
    c.stroked = !1
  }
  Yi(this)
};
function Zi(a, b, c, d, f) {
  var g = a.style;
  g.position = "absolute";
  g.left = Ui(b) + "px";
  g.top = Ui(c) + "px";
  g.width = $(d) + "px";
  g.height = $(f) + "px";
  if(a.tagName == "shape") {
    a.coordsize = $(d) + " " + $(f)
  }
}
try {
  eval("document.namespaces")
}catch(bj) {
}
n = Vi.prototype;
n.h = function() {
  var a = this.P.r;
  if(!a.namespaces.g_vml_) {
    Wi ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}"
  }
  var a = this.width, b = this.height, c = this.P.h("div", {style:"overflow:hidden;position:relative;width:" + (t(a) && qa(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (t(b) && qa(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = Xi(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.ja ? $(this.ja) + " " + $(this.Ub) : $(a) + " " + $(b);
  d.coordorigin = ga(this.Ja) ? $(this.Ja) + " " + $(this.Za) : "0 0";
  c.appendChild(d);
  this.G = new Ri(d, this);
  M(c, "resize", x(this.Vd, this))
};
n.Vd = function() {
  var a = Bg(this.b()), b = this.G.b().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.b();a && a.currentStyle && a.currentStyle.display != "none";) {
      a = a.parentNode
    }
    a && a.currentStyle && U(this.eb, a, "propertychange", this.Vd)
  }
  this.dispatchEvent("resize")
};
n.aa = function(a, b) {
  zg(this.b(), a, b)
};
n.V = function() {
  var a = this.b();
  return new S(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
n.clear = function() {
  this.G.clear()
};
n.Hc = function(a, b, c, d, f, g, h) {
  var j = Xi(this, "oval");
  Zi(j, a - c, b - d, c * 2, d * 2);
  a = new Si(j, this, a, b, c, d, f, g);
  this.qb(a, h);
  return a
};
n.drawImage = function(a, b, c, d, f, g) {
  var h = Xi(this, "image");
  Zi(h, a, b, c, d);
  Wi ? h.src = f : h.setAttribute("src", f);
  a = new Ti(h, this);
  this.qb(a, g);
  return a
};
n.Q = function() {
  Vi.d.Q.call(this);
  this.Vd();
  Yi(this)
};
n.c = function() {
  this.G = k;
  Vi.d.c.call(this)
};
function cj(a) {
  Y.call(this, k, a);
  this.O = []
}
z(cj, xi);
cj.prototype.clear = function() {
  if(this.O.length) {
    this.O.length = 0, dj(this.ta)
  }
};
cj.prototype.aa = function() {
};
cj.prototype.appendChild = function(a) {
  this.O.push(a)
};
cj.prototype.za = function() {
  for(var a = 0, b = this.O.length;a < b;a++) {
    ej(this.ta, this.O[a])
  }
};
function fj(a, b, c, d, f, g, h, j) {
  Z.call(this, a, b, h, j);
  this.kg = c;
  this.lg = d;
  this.Nf = f;
  this.Of = g;
  this.N = new Fi;
  this.N.clear();
  this.N.moveTo(this.kg + this.Nf * Math.cos(te(0)), this.lg + this.Of * Math.sin(te(0)));
  this.N.arcTo(this.Nf, this.Of, 0, 360);
  this.N.close();
  this.Ng = new gj(k, b, this.N, h, j)
}
z(fj, yi);
fj.prototype.za = function(a) {
  this.Ng.za(a)
};
function gj(a, b, c, d, f) {
  Z.call(this, a, b, d, f);
  this.Va(c)
}
z(gj, wi);
gj.prototype.Wb = !1;
gj.prototype.Va = function(a) {
  this.N = a.Kb ? a : Ji(a);
  this.Wb && dj(this.ta)
};
gj.prototype.za = function(a) {
  this.Wb = !0;
  a.beginPath();
  Hi(this.N, function(b, c) {
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
function hj(a, b, c, d, f, g, h) {
  Y.call(this, a, b);
  this.jh = c;
  this.kh = d;
  this.Je = f;
  this.Ud = g;
  this.Xg = h
}
z(hj, zi);
hj.prototype.Wb = !1;
hj.prototype.aa = function(a, b) {
  this.Je = a;
  this.Ud = b;
  this.Wb && dj(this.ta)
};
hj.prototype.za = function(a) {
  this.mf ? (this.Je && this.Ud && a.drawImage(this.mf, this.jh, this.kh, this.Je, this.Ud), this.Wb = !0) : (a = new Image, a.onload = x(this.xg, this, a), a.src = this.Xg)
};
hj.prototype.xg = function(a) {
  this.mf = a;
  dj(this.ta)
};
function ij(a, b, c, d, f) {
  Ki.call(this, a, b, c, d, f)
}
z(ij, Ki);
n = ij.prototype;
n.se = function() {
  dj(this)
};
n.te = function() {
  dj(this)
};
function jj(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.Wf ? b.Wf.L() : new vi, f = d.fa, g = d.ga;
  (f || g) && c.translate(f, g);
  (d = d.S) && c.rotate(Math.asin(d))
}
n.h = function() {
  var a = this.P.h("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Sb = this.P.h("canvas");
  a.appendChild(this.Sb);
  this.Fg = this.G = new cj(this);
  this.Sg = 0;
  kj(this)
};
n.getContext = function() {
  this.b() || this.h();
  if(!this.tb) {
    this.tb = this.Sb.getContext("2d"), this.tb.save()
  }
  return this.tb
};
n.aa = function(a, b) {
  this.width = a;
  this.height = b;
  kj(this);
  dj(this)
};
n.V = function() {
  var a = this.width, b = this.height, c = t(a) && a.indexOf("%") != -1, d = t(b) && b.indexOf("%") != -1;
  if(!this.t && (c || d)) {
    return k
  }
  var f, g;
  if(c) {
    f = this.b().parentNode, g = Bg(f), a = parseFloat(a) * g.width / 100
  }
  d && (f = f || this.b().parentNode, g = g || Bg(f), b = parseFloat(b) * g.height / 100);
  return new S(a, b)
};
function kj(a) {
  zg(a.b(), a.width, a.height);
  var b = a.V();
  if(b) {
    zg(a.Sb, b.width, b.height), a.Sb.width = b.width, a.Sb.height = b.height, a.tb = k
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
function dj(a) {
  if(a.Ci) {
    a.Bi = !0
  }else {
    if(a.t) {
      a.reset();
      if(a.ja) {
        var b = a.V();
        a.getContext().scale(b.width / a.ja, b.height / a.Ub)
      }
      (a.Ja || a.Za) && a.getContext().translate(-a.Ja, -a.Za);
      jj(a, a.G);
      a.G.za(a.tb);
      a.getContext().restore()
    }
  }
}
function ej(a, b) {
  var c = a.getContext();
  jj(a, b);
  if(!b.tg || !b.vg) {
    b.za(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof Rf) {
        if(d.jc != 0) {
          c.globalAlpha = d.jc, c.fillStyle = d.ea(), b.za(c), c.fill(), c.globalAlpha = 1
        }
      }else {
        var f = c.createLinearGradient(d.si(), d.ui(), d.ti(), d.vi());
        f.addColorStop(0, d.qi());
        f.addColorStop(1, d.ri());
        c.fillStyle = f;
        b.za(c);
        c.fill()
      }
    }
    if(d = b.De) {
      b.za(c), c.strokeStyle = d.ea(), d = d.ob, t(d) && d.indexOf("px") != -1 && (d = parseFloat(d) / Li(a)), c.lineWidth = d, c.stroke()
    }
  }
  a.getContext().restore()
}
n.qb = function(a, b) {
  this.append(a, b)
};
n.append = function(a, b) {
  b = b || this.G;
  b.appendChild(a);
  this.t && !this.Sg && !(b != this.G && b != this.Fg) && ej(this, a)
};
n.Hc = function(a, b, c, d, f, g, h) {
  a = new fj(k, this, a, b, c, d, f, g);
  this.append(a, h);
  return a
};
n.drawImage = function(a, b, c, d, f, g) {
  a = new hj(k, this, a, b, c, d, f);
  this.append(a, g);
  return a
};
n.c = function() {
  this.tb = k;
  ij.d.c.call(this)
};
n.Q = function() {
  var a = this.V();
  ij.d.Q.call(this);
  a || (kj(this), this.dispatchEvent("resize"));
  dj(this)
};
function lj(a) {
  this.z = [];
  mj(this, a)
}
z(lj, md);
n = lj.prototype;
n.Ua = k;
n.re = k;
function mj(a, b) {
  b && (E(b, function(a) {
    this.rc(a, !1)
  }, a), db(a.z, b))
}
n.Td = l("Ua");
n.nd = function(a) {
  if(a != this.Ua) {
    this.rc(this.Ua, !1), this.Ua = a, this.rc(a, !0)
  }
  this.dispatchEvent("select")
};
n.Sd = function() {
  return this.Ua ? Va(this.z, this.Ua) : -1
};
n.we = function(a) {
  this.nd(this.z[a] || k)
};
n.clear = function() {
  $a(this.z);
  this.Ua = k
};
n.c = function() {
  lj.d.c.call(this);
  delete this.z;
  this.Ua = k
};
n.rc = function(a, b) {
  a && (typeof this.re == "function" ? this.re(a, b) : typeof a.ve == "function" && a.ve(b))
};
function nj() {
}
z(nj, Qg);
ea(nj);
var oj = 0;
nj.prototype.h = function(a) {
  var b = Tg(this, a);
  return a.Da().h("div", b ? b.join(" ") : k, pj(this, a.ca, a.df(), a.Da()))
};
function pj(a, b, c, d) {
  for(var f = [], g = 0, h = 0;g < c.height;g++) {
    for(var j = [], m = 0;m < c.width;m++) {
      var p = b && b[h++];
      j.push(qj(a, p, d))
    }
    f.push(d.h("tr", a.v() + "-row", j))
  }
  return a.Se(f, d)
}
nj.prototype.Se = function(a, b) {
  var c = b.h("table", this.v() + "-table", b.h("tbody", this.v() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Pg(c, "grid");
  return c
};
function qj(a, b, c) {
  a = c.h("td", {"class":a.v() + "-cell", id:a.v() + "-cell-" + oj++}, b);
  Pg(a, "gridcell");
  return a
}
nj.prototype.jd = function(a, b) {
  if(a) {
    var c = gg(document, "tbody", this.v() + "-body", a)[0];
    if(c) {
      var d = 0;
      E(c.rows, function(a) {
        E(a.cells, function(a) {
          og(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = dg(a), h = c.rows[0].cells.length;d < b.length;) {
          var j = b[d++];
          f.push(qj(this, j, g));
          if(f.length == h) {
            j = g.h("tr", this.v() + "-row", f), c.appendChild(j), f.length = 0
          }
        }
        if(f.length > 0) {
          for(;f.length < h;) {
            f.push(qj(this, "", g))
          }
          j = g.h("tr", this.v() + "-row", f);
          c.appendChild(j)
        }
      }
    }
    Eg(a, !0, kc)
  }
};
function rj(a, b, c) {
  for(b = b.b();c && c.nodeType == 1 && c != b;) {
    if(c.tagName == "TD" && Za(Zf(c), a.v() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function sj(a, b, c, d) {
  if(c) {
    c = c.parentNode, a = a.v() + "-cell-hover", d ? $f(c, a) : ag(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id)
  }
}
nj.prototype.v = ba("goog-palette");
function tj(a, b, c) {
  W.call(this, a, b || nj.Ma(), c)
}
z(tj, W);
n = tj.prototype;
n.w = k;
n.fb = -1;
n.I = k;
n.c = function() {
  tj.d.c.call(this);
  if(this.I) {
    this.I.f(), this.I = k
  }
  this.w = k
};
n.kd = function(a) {
  tj.d.kd.call(this, a);
  uj(this);
  this.I ? (this.I.clear(), mj(this.I, a)) : (this.I = new lj(a), this.I.re = x(this.rc, this), U(Mg(this), this.I, "select", this.Ag));
  this.fb = -1
};
n.cf = ba(k);
n.Tc = function(a) {
  tj.d.Tc.call(this, a);
  var b = rj(this.m, this, a.target);
  if((!b || !a.relatedTarget || !qg(b, a.relatedTarget)) && b != vj(this)) {
    a = this.ca, wj(this, a ? Va(a, b) : -1)
  }
};
n.Sc = function(a) {
  tj.d.Sc.call(this, a);
  var b = rj(this.m, this, a.target);
  (!b || !a.relatedTarget || !qg(b, a.relatedTarget)) && b == vj(this) && sj(this.m, this, b, !1)
};
n.Rc = function(a) {
  tj.d.Rc.call(this, a);
  if(this.be() && (a = rj(this.m, this, a.target), a != vj(this))) {
    var b = this.ca;
    wj(this, b ? Va(b, a) : -1)
  }
};
n.ib = function() {
  var a = vj(this);
  return a ? (this.nd(a), this.dispatchEvent("action")) : !1
};
n.hf = function(a) {
  var b = this.ca, b = b ? b.length : 0, c = this.w.width;
  if(b == 0 || !this.isEnabled()) {
    return!1
  }
  if(a.keyCode == 13 || a.keyCode == 32) {
    return this.ib(a)
  }
  if(a.keyCode == 36) {
    return wj(this, 0), !0
  }else {
    if(a.keyCode == 35) {
      return wj(this, b - 1), !0
    }
  }
  var d = this.fb < 0 ? this.Sd() : this.fb;
  switch(a.keyCode) {
    case 37:
      d == -1 && (d = b);
      if(d > 0) {
        return wj(this, d - 1), a.preventDefault(), !0
      }
      break;
    case 39:
      if(d < b - 1) {
        return wj(this, d + 1), a.preventDefault(), !0
      }
      break;
    case 38:
      d == -1 && (d = b + c - 1);
      if(d >= c) {
        return wj(this, d - c), a.preventDefault(), !0
      }
      break;
    case 40:
      if(d == -1 && (d = -c), d < b - c) {
        return wj(this, d + c), a.preventDefault(), !0
      }
  }
  return!1
};
n.Ag = function() {
};
n.df = l("w");
n.aa = function(a, b) {
  this.b() && e(Error("Component already rendered"));
  this.w = ka(a) ? new S(a, b) : a;
  uj(this)
};
function vj(a) {
  var b = a.ca;
  return b && b[a.fb]
}
function wj(a, b) {
  if(b != a.fb) {
    xj(a, a.fb, !1), a.fb = b, xj(a, b, !0)
  }
}
n.Sd = function() {
  return this.I ? this.I.Sd() : -1
};
n.Td = function() {
  return this.I ? this.I.Td() : k
};
n.we = function(a) {
  this.I && this.I.we(a)
};
n.nd = function(a) {
  this.I && this.I.nd(a)
};
function xj(a, b, c) {
  if(a.b()) {
    var d = a.ca;
    d && b >= 0 && b < d.length && sj(a.m, a, d[b], c)
  }
}
n.rc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.m.v() + "-cell-selected";
    b ? $f(c, d) : ag(c, d)
  }
};
function uj(a) {
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
;function yj(a, b, c) {
  this.Dc = a || [];
  tj.call(this, k, b || nj.Ma(), c);
  this.Dc = this.Dc;
  this.bd = k;
  this.jd(zj(this))
}
z(yj, tj);
yj.prototype.bd = k;
function Aj(a) {
  var b = Bj(Cj);
  if(!a.bd) {
    a.bd = Wa(a.Dc, function(a) {
      return Bj(a)
    })
  }
  a.we(b ? Va(a.bd, b) : -1)
}
function zj(a) {
  return Wa(a.Dc, function(a) {
    var c = this.Da().h("div", {"class":this.m.v() + "-colorswatch", style:"background-color:" + a});
    c.title = a.charAt(0) == "#" ? "RGB (" + zh(a).join(", ") + ")" : a;
    return c
  }, a)
}
function Bj(a) {
  if(a) {
    try {
      return th(a).Vc
    }catch(b) {
    }
  }
  return k
}
;var Tf = Q("whiteboard.logger");
window.onerror = function(a, b, c) {
  he(Tf, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Dj() {
  this.ne = new Bb
}
function Nf(a, b) {
  Tf.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  Ej = k
}
Dj.prototype.reset = function(a) {
  Tf.info("resetting with reason: " + a);
  this.C.reset(a)
};
var Ej = k, ni = new Dd(o.window);
function Fj() {
  Ej && (Ej.reset("idle timeout fired"), Ej = k)
}
var Gj = k;
function Hj() {
  Gj != k && ni.M.clearTimeout(Gj);
  Ej && (Gj = ni.M.setTimeout(Fj, 2592E5))
}
M(window, ["click", "focus", "keydown", "keypress"], Hj, !0);
function Ij() {
  var a = new ji;
  Ej = new Dj;
  Hj();
  xd(mi(), function(b) {
    Ej || e(Error("lastProto falsy?"));
    b = new zf(ni, Ej, b, a);
    Ej.C = b;
    Ff(Ej.C, ["subprotocol:whiteboard"]);
    b.start();
    return k
  })
}
function Jj() {
  sb.f();
  Sf();
  var a = Ej;
  Tf.info("Telling server to clear the board.");
  var b = a.C, a = [2, a.ne.mb(new yb)], a = (new Eb).mb(a);
  Ff(b, [a])
}
function Kj(a) {
  var b = new Gc(a), a = b.offsetX, c = b.offsetY;
  sb.Hc(a, c, 5, 5, new Qf(1, "black"), new Rf(tb), i);
  var d = Ej, f = tb;
  Tf.info("Telling server about circle at: " + a + ", " + c + " with color " + f);
  var b = d.C, g = new xb;
  nb(g, 1, a);
  nb(g, 2, c);
  nb(g, 3, f);
  a = d.ne.mb(g);
  Ff(b, [(new Eb).mb([1, a])])
}
function Sf() {
  var a;
  a = H && !J("9") ? new Vi(800, 600, i, i, i) : I && (!J("420") || lc) ? new ij(800, 600, i, i, i) : new Mi(800, 600, i, i, i);
  a.h();
  ub = T("drawArea");
  Ng(a, ub);
  sb = a
}
var Cj = "#E06666";
function Lj(a) {
  var b;
  (a = a.target.Td()) ? (a = a.style[Ga("background-color")] || "", b = Bj(a)) : b = k;
  b || (b = Cj);
  tb = b;
  hi.set("whiteboard_defaultColor", b);
  a = T("whiteboard-cp-value");
  t("background-color") ? xg(a, b, "background-color") : Qa("background-color", pa(xg, a));
  a = T("whiteboard-cp-value");
  a.title = b;
  b = th(b).Vc;
  rg(a, b);
  b = zh(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = xh(b[0], b[1], b[2]);
  t("color") ? xg(a, b, "color") : Qa("color", pa(xg, a))
}
function Mj() {
  vb = (new Gf(document.location)).ha;
  if(wb = Boolean(Number(vb.get("logging", "0")))) {
    le().md(fe);
    var a = new ui(document.getElementById("log"));
    if(!0 != a.of) {
      var b = le(), c = a.Qg;
      if(!b.dc) {
        b.dc = []
      }
      b.dc.push(c);
      a.of = !0
    }
  }else {
    le().md(Yd)
  }
  Tf.info("Logger works.");
  (a = hi.get("whiteboard_defaultColor")) && (Cj = a);
  tb = Cj;
  b = T("whiteboard-controls-left");
  a = T("whiteboard-controls-right");
  c = jg("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  ng(b, c);
  c = jg("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  ng(b, c);
  b = new yj("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.aa(8);
  Ng(b, T("whiteboard-cp"));
  M(b, "action", Lj);
  Aj(b);
  Lj({target:b});
  b = new rh("Clear board");
  gh(b, "clear-board-button");
  Ng(b, a);
  M(b, "action", Jj);
  a = T("drawAreaOverlay");
  Eg(a, !0);
  M(a, "click", Kj, !1);
  Sf();
  Ij()
}
var Nj = "__whiteboard_init".split("."), Oj = o;
!(Nj[0] in Oj) && Oj.execScript && Oj.execScript("var " + Nj[0]);
for(var Pj;Nj.length && (Pj = Nj.shift());) {
  !Nj.length && ga(Mj) ? Oj[Pj] = Mj : Oj = Oj[Pj] ? Oj[Pj] : Oj[Pj] = {}
}
;})();
