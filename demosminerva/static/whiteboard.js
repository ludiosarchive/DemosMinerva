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
    return a.Rg || (a.Rg = new a)
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
function u(a) {
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
function B(a, b) {
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
B(C, Error);
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
    var j = d[h] || "", m = f[h] || "", p = RegExp("(\\d*)(\\D*)", "g"), z = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = p.exec(j) || ["", "", ""], v = z.exec(m) || ["", "", ""];
      if(r[0].length == 0 && v[0].length == 0) {
        break
      }
      c = Da(r[1].length == 0 ? 0 : parseInt(r[1], 10), v[1].length == 0 ? 0 : parseInt(v[1], 10)) || Da(r[2].length == 0, v[2].length == 0) || Da(r[2], v[2])
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
  this.Pi = a
}
B(Ha, C);
Ha.prototype.name = "AssertionError";
function Ia(a, b) {
  e(new Ha("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ja(a, b, c) {
  this.aa = a;
  this.H = b;
  this.ne = c.name;
  this.yb = !!c.Si;
  this.Ni = !!c.required;
  this.ac = c.Ud;
  this.Jf = c.type;
  this.df = !1;
  switch(this.ac) {
    case Ka:
    ;
    case La:
    ;
    case Ma:
    ;
    case Na:
    ;
    case Oa:
      this.df = !0
  }
  this.Di = c.defaultValue
}
var Ka = 3, La = 4, Ma = 6, Na = 16, Oa = 18;
function Pa(a) {
  return a.ac == 11 || a.ac == 10
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
  this.Hf = a;
  this.ne = b.name || k;
  this.Ei = b.jf || k;
  this.Ai = b.zi;
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
  this.ub = this.constructor.ub;
  var a = this.ub.La, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.La = b;
  this.Xb = this.je = k
}
function lb(a, b) {
  for(var c in a.u) {
    a.La[c] || b.call(a, Number(c), a.u[c])
  }
}
n = kb.prototype;
n.dc = l("ub");
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
  for(var b = jb(this.dc()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(ob(this, d.H) != ob(a, d.H)) {
      return!1
    }
    if(ob(this, d.H)) {
      var f = Pa(d), g = d.H, h = this.u[g], g = a.u[g];
      if(d.yb) {
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
n.We = function(a) {
  for(var b = jb(this.dc()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete this.u[d.H];
    if(ob(a, d.H)) {
      var f = Pa(d);
      if(d.yb) {
        var g;
        g = a;
        var h = d.H;
        pb(g, g.La[h]);
        g = g.u[h] || [];
        for(h = 0;h < g.length;h++) {
          this.add(d, f ? g[h].I() : g[h])
        }
      }else {
        g = a.get(d), this.set(d, f ? g.I() : g)
      }
    }
  }
};
n.I = function() {
  var a = new this.constructor;
  a.We(this);
  return a
};
function ob(a, b) {
  return b in a.u && ga(a.u[b])
}
function pb(a, b) {
  if(a.je) {
    var c = b.H;
    if(!(c in a.Xb)) {
      var d = a.u, f;
      f = a.je;
      var g = a.u[c];
      if(g == k) {
        f = g
      }else {
        if(b.yb) {
          var h = [];
          s(g);
          for(var j = 0;j < g.length;j++) {
            h[j] = f.Qc(b, g[j])
          }
          f = h
        }else {
          f = f.Qc(b, g)
        }
      }
      d[c] = f;
      a.Xb[c] = !0
    }
  }
}
function mb(a, b, c) {
  var d = a.La[b];
  pb(a, d);
  return d.yb ? (c = c || 0, c >= 0 && qb(a, b), a.u[b][c]) : (s(a.u[b]), b in a.u ? a.u[b] : k)
}
function qb(a, b) {
  return a.La[b].yb ? (ob(a, b) && s(a.u[b]), ob(a, b) ? a.u[b].length : 0) : ob(a, b) ? 1 : 0
}
function nb(a, b, c) {
  a.u[b] = c;
  a.Xb && (a.Xb[b] = !0)
}
function rb(a, b) {
  var c = [], d, f;
  for(f in b) {
    b.hasOwnProperty(f) && (f == 0 ? d = b[0] : c.push(new Ja(a, f, b[f])))
  }
  a.ub = new ib(a, d, c);
  a.dc = function() {
    return a.ub
  }
}
;var sb, tb, ub, vb, wb;
function xb() {
  kb.apply(this)
}
B(xb, kb);
xb.prototype.fa = function() {
  return mb(this, 3)
};
function yb() {
  kb.apply(this)
}
B(yb, kb);
rb(xb, {0:{name:"Point", jf:"demosminerva.whiteboard_messages.Point"}, 1:{name:"x", Ud:5, type:Number}, 2:{name:"y", Ud:5, type:Number}, 3:{name:"color", Ud:9, type:String}});
rb(yb, {0:{name:"ClearBoard", jf:"demosminerva.whiteboard_messages.ClearBoard"}});
function zb() {
}
zb.prototype.Rc = function(a, b) {
  return Pa(a) ? this.lb(b) : b
};
zb.prototype.Od = function(a) {
  new a.Hf;
  e(Error("Unimplemented"))
};
zb.prototype.Qc = function(a, b) {
  if(Pa(a)) {
    return this.Od(a.Jf.ub, b)
  }
  if(!a.df) {
    return b
  }
  var c = a.Jf;
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
B(Ab, zb);
Ab.prototype.Od = function(a, b) {
  var c = new a.Hf;
  c.je = this;
  c.u = b;
  c.Xb = {};
  return c
};
function Bb() {
}
B(Bb, Ab);
Bb.prototype.lb = function(a) {
  for(var b = jb(a.dc()), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    if(ob(a, f.H)) {
      var g = f.H;
      if(f.yb) {
        c[g] = [];
        for(var h = 0;h < qb(a, f.H);h++) {
          c[g][h] = this.Rc(f, a.get(f, h))
        }
      }else {
        c[g] = this.Rc(f, a.get(f))
      }
    }
  }
  lb(a, function(a, b) {
    c[a] = b
  });
  return c
};
Bb.prototype.Rc = function(a, b) {
  return a.ac == 8 ? b ? 1 : 0 : zb.prototype.Rc.apply(this, arguments)
};
Bb.prototype.Qc = function(a, b) {
  return a.ac == 8 ? b === 1 : zb.prototype.Qc.apply(this, arguments)
};
function Cb(a) {
  return u(a) || typeof a == "object" && u(a.call) && u(a.apply)
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
Eb.prototype.lb = function(a) {
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
        if(Cb(a.A)) {
          a.A(b, c)
        }else {
          if(Cb(a.ng)) {
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
  if(typeof a.V == "function") {
    a = a.V()
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
  if(typeof a.X == "function") {
    return a.X()
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
  if(typeof a.X != "function") {
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
    a && this.Bd(a)
  }
}
n = Pb.prototype;
n.g = 0;
n.Oe = 0;
n.V = l("g");
n.X = function() {
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
n.ca = function(a) {
  return Rb(this.p, a)
};
n.Ic = function(a) {
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
  if(this.g != a.V()) {
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
n.Pa = function() {
  return this.g == 0
};
n.clear = function() {
  this.p = {};
  this.Oe = this.g = this.l.length = 0
};
n.remove = function(a) {
  return Rb(this.p, a) ? (delete this.p[a], this.g--, this.Oe++, this.l.length > 2 * this.g && Qb(this), !0) : !1
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
  Rb(this.p, a) || (this.g++, this.l.push(a), this.Oe++);
  this.p[a] = b
};
n.Bd = function(a) {
  var b;
  a instanceof Pb ? (b = a.Ea(), a = a.X()) : (b = Sa(a), a = Ra(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
n.I = function() {
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
  this.ob = a;
  this.kb = b
}
Vb.prototype.n = function(a) {
  return a instanceof Vb && this.ob == a.ob && this.kb.join(",") == a.kb
};
Vb.prototype.A = function(a, b) {
  a.push("new SACK(", String(this.ob), ", ");
  F(this.kb, a, b);
  a.push(")")
};
function Wb() {
  this.z = new Pb
}
n = Wb.prototype;
n.tb = -1;
n.w = 0;
n.append = function(a) {
  var b = Ub(a);
  this.z.set(this.tb + 1, [a, b]);
  this.tb += 1;
  this.w += b
};
n.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
n.A = function(a) {
  a.push("<Queue with ", String(this.z.V()), " item(s), counter=#", String(this.tb), ", size=", String(this.w), ">")
};
function Xb(a) {
  Qb(a.z);
  gb(a.z.l);
  return a.z.l
}
function Yb() {
  this.Xa = new Pb
}
Yb.prototype.Ab = -1;
Yb.prototype.w = 0;
function Zb(a) {
  var b = a.Xa.Ea();
  gb(b);
  return new Vb(a.Ab, b)
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
var zc = {Fh:"click", Kh:"dblclick", ei:"mousedown", ii:"mouseup", hi:"mouseover", gi:"mouseout", fi:"mousemove", si:"selectstart", Zh:"keypress", Yh:"keydown", $h:"keyup", Dh:"blur", Sh:"focus", Lh:"deactivate", Th:H ? "focusin" : "DOMFocusIn", Uh:H ? "focusout" : "DOMFocusOut", Eh:"change", ri:"select", ti:"submit", Xh:"input", ni:"propertychange", Ph:"dragstart", Mh:"dragenter", Oh:"dragover", Nh:"dragleave", Qh:"drop", xi:"touchstart", wi:"touchmove", vi:"touchend", ui:"touchcancel", Hh:"contextmenu", 
Rh:"error", Wh:"help", ai:"load", bi:"losecapture", oi:"readystatechange", pi:"resize", qi:"scroll", yi:"unload", Vh:"hashchange", ji:"pagehide", ki:"pageshow", mi:"popstate", Ih:"copy", li:"paste", Jh:"cut", Ah:"beforecopy", Bh:"beforecut", Ch:"beforepaste", di:"message", Gh:"connect"};
var Ac = !H || xc(), Bc = H && !J("8");
function K() {
}
K.prototype.ra = !1;
K.prototype.f = function() {
  if(!this.ra) {
    this.ra = !0, this.c()
  }
};
K.prototype.c = function() {
  this.yg && Cc.apply(k, this.yg)
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
B(Dc, K);
n = Dc.prototype;
n.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
n.ib = !1;
n.sc = !0;
n.stopPropagation = function() {
  this.ib = !0
};
n.preventDefault = function() {
  this.sc = !1
};
function Ec(a) {
  a.stopPropagation()
}
;var Fc = new Function("a", "return a");
function Gc(a, b) {
  a && this.hc(a, b)
}
B(Gc, Dc);
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
n.bh = !1;
n.Ba = k;
n.hc = function(a, b) {
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
  this.bh = nc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Ba = a;
  delete this.sc;
  delete this.ib
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
n.jb = !1;
n.Ed = !1;
n.hc = function(a, b, c, d, f, g) {
  u(a) ? this.yf = !0 : a && a.handleEvent && u(a.handleEvent) ? this.yf = !1 : e(Error("Invalid listener argument"));
  this.Db = a;
  this.Sf = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Yc = g;
  this.Ed = !1;
  this.key = ++Kc;
  this.jb = !1
};
n.handleEvent = function(a) {
  return this.yf ? this.Db.call(this.Yc || this.src, a) : this.Db.handleEvent.call(this.Db, a)
};
var Lc, Mc = (Lc = "ScriptEngine" in o && o.ScriptEngine() == "JScript") ? o.ScriptEngineMajorVersion() + "." + o.ScriptEngineMinorVersion() + "." + o.ScriptEngineBuildVersion() : "0";
function Nc(a, b) {
  this.Df = b;
  this.ab = [];
  a > this.Df && e(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.ab.push(this.ya ? this.ya() : {})
  }
}
B(Nc, K);
Nc.prototype.ya = k;
Nc.prototype.ef = k;
Nc.prototype.getObject = function() {
  return this.ab.length ? this.ab.pop() : this.ya ? this.ya() : {}
};
function Oc(a, b) {
  a.ab.length < a.Df ? a.ab.push(b) : Pc(a, b)
}
function Pc(a, b) {
  if(a.ef) {
    a.ef(b)
  }else {
    if(ja(b)) {
      if(u(b.f)) {
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
  for(var a = this.ab;a.length;) {
    Pc(this, a.pop())
  }
  delete this.ab
};
var Qc, Rc, Sc, Tc, Uc, Vc, Wc, Xc, Yc, Zc, $c;
(function() {
  function a() {
    return{g:0, ma:0}
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
      return z.getObject()
    };
    Yc = function(a) {
      Oc(z, a)
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
    var z = new Nc(0, 600);
    z.ya = d;
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
      h.ma++;
      if(h[j]) {
        m = h[j];
        for(g = 0;g < m.length;g++) {
          if(h = m[g], h.Db == c && h.Yc == f) {
            if(h.jb) {
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
      h.hc(c, g, a, b, d, f);
      c = h.key;
      g.key = c;
      m.push(h);
      ad[c] = h;
      bd[j] || (bd[j] = Sc());
      bd[j].push(h);
      a.addEventListener ? (a == o || !a.Kd) && a.addEventListener(b, g, d) : a.attachEvent(b in cd ? cd[b] : cd[b] = "on" + b, g);
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
  ad[a].Ed = !0;
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
        if(a[g].Db == c && a[g].capture == d && a[g].Yc == f) {
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
  if(b.jb) {
    return!1
  }
  var c = b.src, d = b.type, f = b.Sf, g = b.capture;
  c.removeEventListener ? (c == o || !c.Kd) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in cd ? cd[d] : cd[d] = "on" + d, f);
  c = w(c);
  f = L[d][g][c];
  if(bd[c]) {
    var h = bd[c];
    ab(h, b);
    h.length == 0 && delete bd[c]
  }
  b.jb = !0;
  f.Lf = !0;
  hd(d, g, c, f);
  delete ad[a];
  return!0
}
function hd(a, b, c, d) {
  if(!d.ed && d.Lf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      if(d[f].jb) {
        var h = d[f].Sf;
        h.src = k;
        Wc(h);
        Yc(d[f])
      }else {
        f != g && (d[g] = d[f]), g++
      }
    }
    d.length = g;
    d.Lf = !1;
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
    a.ma--;
    a = a[b];
    a.ed ? a.ed++ : a.ed = 1;
    try {
      for(var h = a.length, j = 0;j < h;j++) {
        var m = a[j];
        m && !m.jb && (g &= kd(m, f) !== !1)
      }
    }finally {
      a.ed--, hd(c, d, b, a)
    }
  }
  return Boolean(g)
}
function kd(a, b) {
  var c = a.handleEvent(b);
  a.Ed && gd(a.key);
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
          }catch(z) {
            p = !0
          }
        }
        if(p || g.returnValue == i) {
          g.returnValue = !0
        }
      }
    }
    p = Zc();
    p.hc(g, this);
    g = !0;
    try {
      if(j) {
        for(var r = Sc(), v = p.currentTarget;v;v = v.parentNode) {
          r.push(v)
        }
        h = f[!0];
        h.ma = h.g;
        for(var A = r.length - 1;!p.ib && A >= 0 && h.ma;A--) {
          p.currentTarget = r[A], g &= jd(h, r[A], d, !0, p)
        }
        if(m) {
          h = f[!1];
          h.ma = h.g;
          for(A = 0;!p.ib && A < r.length && h.ma;A++) {
            p.currentTarget = r[A], g &= jd(h, r[A], d, !1, p)
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
B(md, K);
n = md.prototype;
n.Kd = !0;
n.hd = k;
n.ze = aa("hd");
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
      for(g = this;g;g = g.hd) {
        f.push(g)
      }
      g = c[!0];
      g.ma = g.g;
      for(var h = f.length - 1;!a.ib && h >= 0 && g.ma;h--) {
        a.currentTarget = f[h], d &= jd(g, f[h], a.type, !0, a) && a.sc != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.ma = g.g, b) {
        for(h = 0;!a.ib && h < f.length && g.ma;h++) {
          a.currentTarget = f[h], d &= jd(g, f[h], a.type, !1, a) && a.sc != !1
        }
      }else {
        for(f = this;!a.ib && f && g.ma;f = f.hd) {
          a.currentTarget = f, d &= jd(g, f, a.type, !1, a) && a.sc != !1
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
  this.hd = k
};
function nd(a, b) {
  this.ad = a || 1;
  this.yc = b || od;
  this.Dd = x(this.oh, this);
  this.ie = y()
}
B(nd, md);
nd.prototype.enabled = !1;
var od = o.window;
n = nd.prototype;
n.pa = k;
n.oh = function() {
  if(this.enabled) {
    var a = y() - this.ie;
    if(a > 0 && a < this.ad * 0.8) {
      this.pa = this.yc.setTimeout(this.Dd, this.ad - a)
    }else {
      if(this.dispatchEvent(pd), this.enabled) {
        this.pa = this.yc.setTimeout(this.Dd, this.ad), this.ie = y()
      }
    }
  }
};
n.start = function() {
  this.enabled = !0;
  if(!this.pa) {
    this.pa = this.yc.setTimeout(this.Dd, this.ad), this.ie = y()
  }
};
n.stop = function() {
  this.enabled = !1;
  if(this.pa) {
    this.yc.clearTimeout(this.pa), this.pa = k
  }
};
n.c = function() {
  nd.d.c.call(this);
  this.stop();
  delete this.yc
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
  this.Fc = [];
  this.Se = a;
  this.af = b || k
}
n = qd.prototype;
n.Ma = !1;
n.ec = !1;
n.nc = 0;
n.Ee = !1;
n.tg = !1;
n.cancel = function() {
  this.Ma ? this.rc instanceof qd && this.rc.cancel() : (this.Se ? this.Se.call(this.af, this) : this.Ee = !0, this.Ma || this.$b(new rd(this)))
};
n.Ve = function(a, b) {
  sd(this, a, b);
  this.nc--;
  this.nc == 0 && this.Ma && td(this)
};
function sd(a, b, c) {
  a.Ma = !0;
  a.rc = c;
  a.ec = !b;
  td(a)
}
function ud(a) {
  if(a.Ma) {
    a.Ee || e(new vd(a)), a.Ee = !1
  }
}
function wd(a, b) {
  ud(a);
  sd(a, !0, b)
}
n.$b = function(a) {
  ud(this);
  sd(this, !1, a)
};
function xd(a, b) {
  yd(a, b, k, i)
}
function yd(a, b, c, d) {
  a.Fc.push([b, c, d]);
  a.Ma && td(a)
}
function zd(a, b) {
  yd(a, b, b, i)
}
function Ad(a) {
  return Xa(a.Fc, function(a) {
    return u(a[1])
  })
}
function td(a) {
  a.Le && a.Ma && Ad(a) && (o.clearTimeout(a.Le), delete a.Le);
  for(var b = a.rc, c = !1, d = !1;a.Fc.length && a.nc == 0;) {
    var f = a.Fc.shift(), g = f[0], h = f[1], f = f[2];
    if(g = a.ec ? h : g) {
      try {
        var j = g.call(f || a.af, b);
        if(ga(j)) {
          a.ec = a.ec && (j == b || j instanceof Error), a.rc = b = j
        }
        b instanceof qd && (d = !0, a.nc++)
      }catch(m) {
        b = m, a.ec = !0, Ad(a) || (c = !0)
      }
    }
  }
  a.rc = b;
  if(d && a.nc) {
    yd(b, x(a.Ve, a, !0), x(a.Ve, a, !1)), b.tg = !0
  }
  if(c) {
    a.Le = o.setTimeout(function() {
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
  b.$b(a);
  return b
}
function vd(a) {
  C.call(this);
  this.xg = a
}
B(vd, C);
vd.prototype.message = "Already called";
function rd(a) {
  C.call(this);
  this.xg = a
}
B(rd, C);
rd.prototype.message = "Deferred was cancelled";
function Dd(a) {
  this.M = a;
  this.Mc = [];
  this.ff = [];
  this.sg = x(this.sh, this)
}
Dd.prototype.pa = k;
function Ed(a, b, c, d) {
  a.Mc.push([b, c, d]);
  if(a.pa == k) {
    a.pa = a.M.setTimeout(a.sg, 0)
  }
}
Dd.prototype.sh = function() {
  this.pa = k;
  var a = this.Mc;
  this.Mc = [];
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
  if(this.Mc.length == 0) {
    a = this.ff;
    this.ff = [];
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
  a && this.Bd(a)
}
function Od(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + w(a) : b.substr(0, 1) + a
}
n = Nd.prototype;
n.V = function() {
  return this.p.V()
};
n.add = function(a) {
  this.p.set(Od(a), a)
};
n.Bd = function(a) {
  for(var a = Lb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
n.ue = function(a) {
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
n.Pa = function() {
  return this.p.Pa()
};
n.contains = function(a) {
  return this.p.ca(Od(a))
};
n.X = function() {
  return this.p.X()
};
n.I = function() {
  return new Nd(this)
};
n.n = function(a) {
  return this.V() == Kb(a) && Pd(this, a)
};
function Pd(a, b) {
  var c = Kb(b);
  if(a.V() > c) {
    return!1
  }
  !(b instanceof Nd) && c > 5 && (b = new Nd(b));
  return Ob(a, function(a) {
    if(typeof b.contains == "function") {
      a = b.contains(a)
    }else {
      if(typeof b.Ic == "function") {
        a = b.Ic(a)
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
Ud.prototype.ih = 0;
Ud.prototype.Sd = k;
Ud.prototype.Rd = k;
var Vd = 0;
Ud.prototype.reset = function(a, b, c, d, f) {
  this.ih = typeof f == "number" ? f : Vd++;
  this.dg = d || y();
  this.Cb = a;
  this.If = b;
  this.Ug = c;
  delete this.Sd;
  delete this.Rd
};
Ud.prototype.od = aa("Cb");
function Wd(a) {
  this.ne = a
}
Wd.prototype.aa = k;
Wd.prototype.Cb = k;
Wd.prototype.O = k;
Wd.prototype.gc = k;
function Xd(a, b) {
  this.name = a;
  this.value = b
}
Xd.prototype.toString = l("name");
var Yd = new Xd("OFF", Infinity), Zd = new Xd("SHOUT", 1200), $d = new Xd("SEVERE", 1E3), ae = new Xd("WARNING", 900), be = new Xd("INFO", 800), ce = new Xd("CONFIG", 700), de = new Xd("FINE", 500), ee = new Xd("FINEST", 300), fe = new Xd("ALL", 0);
n = Wd.prototype;
n.getParent = l("aa");
n.od = aa("Cb");
function ge(a) {
  if(a.Cb) {
    return a.Cb
  }
  if(a.aa) {
    return ge(a.aa)
  }
  Ia("Root logger has no level set.");
  return k
}
n.log = function(a, b, c) {
  if(a.value >= ge(this).value) {
    a = this.Ig(a, b, c);
    b = "log:" + a.If;
    o.console && (o.console.timeStamp ? o.console.timeStamp(b) : o.console.markTimeline && o.console.markTimeline(b));
    o.msWriteProfilerMark && o.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.gc) {
        for(var f = 0, g = i;g = c.gc[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
n.Ig = function(a, b, c) {
  var d = new Ud(a, String(b), this.ne);
  if(c) {
    d.Sd = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var h;
      var j = da("window.location.href");
      if(t(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var m, p, z = !1;
        try {
          m = c.lineNumber || c.Oi || "Not available"
        }catch(r) {
          m = "Not available", z = !0
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || j
        }catch(v) {
          p = "Not available", z = !0
        }
        h = z || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:m, fileName:p, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + va(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + va(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + va(Qd(g) + "-> ")
    }catch(A) {
      f = "Exception trying to expose exception! You win, we lose. " + A
    }
    d.Rd = f
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
  je || (je = new Wd(""), ie[""] = je, je.od(ce))
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
    b.aa = c;
    ie[a] = b
  }
  return b
}
;function me(a, b) {
  this.S = "_" + Hd();
  this.vd = a;
  this.Sa = b;
  this.Wa = a.Wa
}
B(me, K);
n = me.prototype;
n.gb = !0;
n.Jc = !1;
n.a = Q("cw.net.FlashSocket");
n.A = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.S);
  a.push("'>")
};
function ne(a, b, c) {
  b == "frames" ? (a = a.Sa, oe(a.L), pe(a.L, c)) : b == "stillreceiving" ? (c = a.Sa, P(c.a, "onstillreceiving"), oe(c.L)) : b == "connect" ? (c = a.Sa, c.a.info("onconnect"), oe(c.L), a = c.Sb, c.Sb = k, a.length && (P(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.rd.Dc(a))) : b == "close" ? (a.gb = !1, a.f()) : b == "ioerror" ? (a.gb = !1, b = a.Sa, N(b.a, "onioerror: " + G(c)), qe(b.L, !1), a.f()) : b == "securityerror" ? (a.gb = !1, b = a.Sa, N(b.a, "onsecurityerror: " + 
  G(c)), qe(b.L, !1), a.f()) : e(Error("bad event: " + b))
}
n.Hd = function(a, b) {
  try {
    var c = this.Wa.CallFunction(Gd("__FC_connect", this.S, a, b, "<int32/>\n"))
  }catch(d) {
    he(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message);
    this.Jc = !0;
    this.gb = !1;
    this.f();
    return
  }
  c != '"OK"' && e(Error("__FC_connect failed? ret: " + c))
};
n.Dc = function(a) {
  try {
    var b = this.Wa.CallFunction(Gd("__FC_writeFrames", this.S, a))
  }catch(c) {
    he(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message);
    this.Jc = !0;
    this.gb = !1;
    this.f();
    return
  }
  b != '"OK"' && (b == '"no such instance"' ? (N(this.a, "Flash no longer knows of " + this.S + "; disposing."), this.f()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
n.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.gb);
  me.d.c.call(this);
  var a = this.Wa;
  delete this.Wa;
  if(this.gb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(Gd("__FC_close", this.S)))
    }catch(b) {
      he(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Jc = !0
    }
  }
  if(this.Jc) {
    a = this.Sa, N(a.a, "oncrash"), qe(a.L, !0)
  }else {
    this.Sa.onclose()
  }
  delete this.Sa;
  delete this.vd.wb[this.S]
};
function re(a, b) {
  this.K = a;
  this.Wa = b;
  this.wb = {};
  this.Fd = "__FST_" + Hd();
  o[this.Fd] = x(this.Bg, this);
  var c = b.CallFunction(Gd("__FC_setCallbackFunc", this.Fd));
  c != '"OK"' && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
B(re, K);
n = re.prototype;
n.a = Q("cw.net.FlashSocketTracker");
n.A = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  F(this.wb, a, b);
  a.push(">")
};
n.Jd = function(a) {
  a = new me(this, a);
  return this.wb[a.S] = a
};
n.zg = function(a, b, c, d) {
  var f = this.wb[a];
  f ? b == "frames" && d ? (ne(f, "ioerror", "FlashConnector hadError while handling data."), f.f()) : ne(f, b, c) : N(this.a, "Cannot dispatch because we have no instance: " + G([a, b, c, d]))
};
n.Bg = function(a, b, c, d) {
  try {
    Ed(this.K, this.zg, this, [a, b, c, d])
  }catch(f) {
    o.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
n.c = function() {
  re.d.c.call(this);
  for(var a = Ra(this.wb);a.length;) {
    a.pop().f()
  }
  delete this.wb;
  delete this.Wa;
  o[this.Fd] = i
};
function se(a) {
  this.L = a;
  this.Sb = []
}
B(se, K);
n = se.prototype;
n.a = Q("cw.net.FlashSocketConduit");
n.Dc = function(a) {
  this.Sb ? (P(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Sb.push.apply(this.Sb, a)) : (P(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.rd.Dc(a))
};
n.Hd = function(a, b) {
  this.rd.Hd(a, b)
};
n.onclose = function() {
  this.a.info("onclose");
  qe(this.L, !1)
};
n.c = function() {
  this.a.info("in disposeInternal.");
  se.d.c.call(this);
  this.rd.f();
  delete this.L
};
function te() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function ue(a) {
  return a * Math.PI / 180
}
;var Md = Math.pow(2, 53);
var ve = {ng:ba("<cw.eq.Wildcard>")};
function we(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function xe(a, b, c) {
  var d = fa(a), f = fa(b);
  if(a == ve || b == ve) {
    return!0
  }else {
    if(a != k && typeof a.n == "function") {
      return c && c.push("running custom equals function on left object"), a.n(b, c)
    }else {
      if(b != k && typeof b.n == "function") {
        return c && c.push("running custom equals function on right object"), b.n(a, c)
      }else {
        if(we(d) || we(f)) {
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
                      if(!xe(a[d], b[d], c)) {
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
                if(a.mg == ac && b.mg == ac) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = !1;
                        break a
                      }
                      if(!xe(a[g], b[g], c)) {
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
B(R, C);
R.prototype.name = "cw.net.InvalidFrame";
function ye() {
  var a = [];
  this.la(a);
  return a.join("")
}
function ze() {
}
ze.prototype.n = function(a, b) {
  return!(a instanceof ze) ? !1 : xe(Ae(this), Ae(a), b)
};
ze.prototype.A = function(a, b) {
  a.push("<HelloFrame properties=");
  F(Ae(this), a, b);
  a.push(">")
};
function Ae(a) {
  return[a.Ob, a.Qf, a.tf, a.Uf, a.xc, a.He, a.Kf, a.Gf, a.me, a.Ef, a.ig, a.cg, a.oa, a.dd]
}
ze.prototype.ea = ye;
ze.prototype.la = function(a) {
  var b = {};
  b.tnum = this.Ob;
  b.ver = this.Qf;
  b.format = this.tf;
  b["new"] = this.Uf;
  b.id = this.xc;
  b.ming = this.He;
  b.pad = this.Kf;
  b.maxb = this.Gf;
  if(ga(this.me)) {
    b.maxt = this.me
  }
  b.maxia = this.Ef;
  b.tcpack = this.ig;
  b.eeds = this.cg;
  b.sack = this.oa instanceof Vb ? Id((new Be(this.oa)).ea()) : this.oa;
  b.seenack = this.dd instanceof Vb ? Id((new Be(this.dd)).ea()) : this.dd;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new Eb).lb(b), "H")
};
function Ce(a) {
  this.Nb = a
}
Ce.prototype.n = function(a) {
  return a instanceof Ce && this.Nb == a.Nb
};
Ce.prototype.A = function(a, b) {
  a.push("new StringFrame(");
  F(this.Nb, a, b);
  a.push(")")
};
Ce.prototype.ea = ye;
Ce.prototype.la = function(a) {
  a.push(this.Nb, " ")
};
function De(a) {
  this.Hc = a
}
De.prototype.n = function(a) {
  return a instanceof De && this.Hc == a.Hc
};
De.prototype.A = function(a, b) {
  a.push("new CommentFrame(");
  F(this.Hc, a, b);
  a.push(")")
};
De.prototype.ea = ye;
De.prototype.la = function(a) {
  a.push(this.Hc, "^")
};
function Ee(a) {
  this.vc = a
}
Ee.prototype.n = function(a) {
  return a instanceof Ee && this.vc == a.vc
};
Ee.prototype.A = function(a) {
  a.push("new SeqNumFrame(", String(this.vc), ")")
};
Ee.prototype.ea = ye;
Ee.prototype.la = function(a) {
  a.push(String(this.vc), "N")
};
function Fe(a) {
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
function Be(a) {
  this.oa = a
}
Be.prototype.n = function(a, b) {
  return a instanceof Be && this.oa.n(a.oa, b)
};
Be.prototype.A = function(a, b) {
  a.push("new SackFrame(");
  F(this.oa, a, b);
  a.push(")")
};
Be.prototype.ea = ye;
Be.prototype.la = function(a) {
  var b = this.oa;
  a.push(b.kb.join(","), "|", String(b.ob));
  a.push("A")
};
function Ge(a) {
  this.kc = a
}
Ge.prototype.n = function(a, b) {
  return a instanceof Ge && this.kc.n(a.kc, b)
};
Ge.prototype.A = function(a, b) {
  a.push("new StreamStatusFrame(");
  F(this.kc, a, b);
  a.push(")")
};
Ge.prototype.ea = ye;
Ge.prototype.la = function(a) {
  var b = this.kc;
  a.push(b.kb.join(","), "|", String(b.ob));
  a.push("T")
};
function He() {
}
He.prototype.A = function(a) {
  a.push("new StreamCreatedFrame()")
};
He.prototype.n = function(a) {
  return a instanceof He
};
He.prototype.ea = ye;
He.prototype.la = function(a) {
  a.push("C")
};
function Ie() {
}
Ie.prototype.A = function(a) {
  a.push("new YouCloseItFrame()")
};
Ie.prototype.n = function(a) {
  return a instanceof Ie
};
Ie.prototype.ea = ye;
Ie.prototype.la = function(a) {
  a.push("Y")
};
function Je(a, b) {
  this.pc = a;
  this.Rb = b
}
Je.prototype.n = function(a) {
  return a instanceof Je && this.pc == a.pc && this.Rb == a.Rb
};
Je.prototype.A = function(a, b) {
  a.push("new ResetFrame(");
  F(this.pc, a, b);
  a.push(", ", String(this.Rb), ")")
};
Je.prototype.ea = ye;
Je.prototype.la = function(a) {
  a.push(this.pc, "|", String(Number(this.Rb)), "!")
};
var Ke = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Le(a) {
  this.reason = a
}
Le.prototype.n = function(a) {
  return a instanceof Le && this.reason == a.reason
};
Le.prototype.A = function(a, b) {
  a.push("new TransportKillFrame(");
  F(this.reason, a, b);
  a.push(")")
};
Le.prototype.ea = ye;
Le.prototype.la = function(a) {
  a.push(this.reason, "K")
};
function Me(a) {
  a || e(new R("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new Ce(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = Fe(Id(a)), a == k && e(new R("bad sack")), new Be(a)
    }else {
      if(b == "N") {
        return a = Ld(Id(a)), a == k && e(new R("bad seqNum")), new Ee(a)
      }else {
        if(b == "T") {
          return a = Fe(Id(a)), a == k && e(new R("bad lastSackSeen")), new Ge(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && e(new R("leading garbage")), new Ie
          }else {
            if(b == "^") {
              return new De(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && e(new R("leading garbage")), new He
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && e(new R("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == k && e(new R("bad applicationLevel")), new Je(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = Ke[a], a == k && e(new R("unknown kill reason: " + a)), new Le(a)
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
;var Ne = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Oe(a, b) {
  var c = a.match(Ne), d = b.match(Ne);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;var Pe;
function Qe(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function Re(a, b) {
  var c = Qe(a), d = fb(arguments, 1), f;
  f = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    Za(f, d[h]) || (f.push(d[h]), g++)
  }
  f = g == d.length;
  a.className = c.join(" ");
  return f
}
function Se(a, b) {
  var c = Qe(a), d = fb(arguments, 1), f;
  f = c;
  for(var g = 0, h = 0;h < f.length;h++) {
    Za(d, f[h]) && (eb(f, h--, 1), g++)
  }
  f = g == d.length;
  a.className = c.join(" ");
  return f
}
;function S(a, b) {
  this.width = a;
  this.height = b
}
n = S.prototype;
n.I = function() {
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
var Te = !H || xc();
!kc && !H || H && xc() || kc && J("1.9.1");
var Ue = H && !J("9");
function Ve(a) {
  return a ? new We(Xe(a)) : Pe || (Pe = new We)
}
function T(a) {
  return t(a) ? document.getElementById(a) : a
}
function Ye(a, b, c, d) {
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
function Ze(a, b) {
  Qa(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in $e ? a.setAttribute($e[d], b) : d.lastIndexOf("aria-", 0) == 0 ? a.setAttribute(d, b) : a[d] = b
  })
}
var $e = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function af(a, b, c) {
  return bf(document, arguments)
}
function bf(a, b) {
  var c = b[0], d = b[1];
  if(!Te && d && (d.name || d.type)) {
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
    t(d) ? c.className = d : s(d) ? Re.apply(k, [c].concat(d)) : Ze(c, d)
  }
  b.length > 2 && cf(a, c, b, 2);
  return c
}
function cf(a, b, c, d) {
  function f(c) {
    c && b.appendChild(t(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && g.nodeType > 0) ? E(df(g) ? cb(g) : g, f) : f(g)
  }
}
function ef(a, b) {
  cf(Xe(a), a, arguments, 1)
}
function ff(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function gf(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function hf(a, b) {
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
function Xe(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
function jf(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && a.firstChild.nodeType == 3) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      ff(a), a.appendChild(Xe(a).createTextNode(b))
    }
  }
}
var kf = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, lf = {IMG:" ", BR:"\n"};
function mf(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ka(a) && a >= 0 && a < 32768) : !1
}
function nf(a) {
  var b = [];
  of(a, b, !1);
  return b.join("")
}
function of(a, b, c) {
  if(!(a.nodeName in kf)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in lf) {
        b.push(lf[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          of(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function df(a) {
  if(a && typeof a.length == "number") {
    if(ja(a)) {
      return typeof a.item == "function" || typeof a.item == "string"
    }else {
      if(u(a)) {
        return typeof a.item == "function"
      }
    }
  }
  return!1
}
function We(a) {
  this.r = a || o.document || document
}
n = We.prototype;
n.Da = Ve;
n.b = function(a) {
  return t(a) ? this.r.getElementById(a) : a
};
n.h = function(a, b, c) {
  return bf(this.r, arguments)
};
n.createElement = function(a) {
  return this.r.createElement(a)
};
n.createTextNode = function(a) {
  return this.r.createTextNode(a)
};
n.Ye = function(a, b, c) {
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
n.append = ef;
n.contains = hf;
function pf(a, b, c, d) {
  this.contentWindow = a;
  this.Nc = b;
  this.Ie = c;
  this.Gg = d
}
pf.prototype.A = function(a, b) {
  a.push("<XDRFrame frameId=");
  F(this.Gg, a, b);
  a.push(", expandedUrl=");
  F(this.Nc, a, b);
  a.push(", streams=");
  F(this.Ie, a, b);
  a.push(">")
};
function qf() {
  this.frames = [];
  this.ke = new Pb
}
qf.prototype.a = Q("cw.net.XDRTracker");
function rf(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + String(Math.floor(te())) + String(Math.floor(te()))
  })
}
function sf(a, b) {
  for(var c = tf, d = 0;d < c.frames.length;d++) {
    var f = c.frames[d], g;
    if(g = f.Ie.length == 0) {
      g = f.Nc;
      var h = String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + G(b) + " existing frame " + G(f)), Bd(f)
    }
  }
  d = Hd() + Hd();
  f = rf(a);
  g = String(window.location).match(Ne)[3] || k;
  h = f.match(Ne)[3] || k;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + G(b)), c = Bd(new pf(o, f, [b], k))) : (g = T("minerva-xdrframes"), h = new qd, c.ke.set(d, [h, f, b]), c.a.info("Creating new XDRFrame " + G(d) + "for " + G(b)), c = af("iframe", {id:"minerva-xdrframe-" + d, width:16, height:16, src:f + "xdrframe/?domain=" + document.domain + "&id=" + d}), g.appendChild(c), c = h);
  return c
}
qf.prototype.yh = function(a) {
  var b = this.ke.get(a);
  b || e(Error("Unknown frameId " + G(a)));
  this.ke.remove(b);
  var c = b[0], a = new pf(T("minerva-xdrframe-" + a).contentWindow || (I ? T("minerva-xdrframe-" + a).document || T("minerva-xdrframe-" + a).contentWindow.document : T("minerva-xdrframe-" + a).contentDocument || T("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (I ? T("minerva-xdrframe-" + a).document || T("minerva-xdrframe-" + a).contentWindow.document : T("minerva-xdrframe-" + a).contentDocument || T("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  wd(c, a)
};
var tf = new qf;
o.__XHRTracker_xdrFrameLoaded = x(tf.yh, tf);
var uf;
uf = !1;
var vf = gc();
vf && (vf.indexOf("Firefox") != -1 || vf.indexOf("Camino") != -1 || vf.indexOf("iPhone") != -1 || vf.indexOf("iPod") != -1 || vf.indexOf("iPad") != -1 || vf.indexOf("Android") != -1 || vf.indexOf("Chrome") != -1 && (uf = !0));
var wf = uf;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function xf(a, b, c, d, f, g) {
  qd.call(this, f, g);
  this.Cf = a;
  this.Md = [];
  this.gf = !!b;
  this.Eg = !!c;
  this.ug = !!d;
  for(b = 0;b < a.length;b++) {
    yd(a[b], x(this.of, this, b, !0), x(this.of, this, b, !1))
  }
  a.length == 0 && !this.gf && wd(this, this.Md)
}
B(xf, qd);
xf.prototype.Mf = 0;
xf.prototype.of = function(a, b, c) {
  this.Mf++;
  this.Md[a] = [b, c];
  this.Ma || (this.gf && b ? wd(this, [a, c]) : this.Eg && !b ? this.$b(c) : this.Mf == this.Cf.length && wd(this, this.Md));
  this.ug && !b && (c = k);
  return c
};
xf.prototype.$b = function(a) {
  xf.d.$b.call(this, a);
  E(this.Cf, function(a) {
    a.cancel()
  })
};
function yf(a) {
  a = new xf(a, !1, !0);
  xd(a, function(a) {
    return Wa(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function zf() {
  if(kc) {
    this.Ya = {}, this.zd = {}, this.td = []
  }
}
zf.prototype.a = Q("goog.net.xhrMonitor");
zf.prototype.Lc = kc;
function Af(a) {
  var b = Bf;
  if(b.Lc) {
    var c = t(a) ? a : ja(a) ? w(a) : "";
    P(b.a, "Pushing context: " + a + " (" + c + ")");
    b.td.push(c)
  }
}
function Cf() {
  var a = Bf;
  if(a.Lc) {
    var b = a.td.pop();
    P(a.a, "Popping context: " + b);
    Df(a, b)
  }
}
function Ef(a) {
  var b = Bf;
  if(b.Lc) {
    a = w(a);
    O(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.td.length;c++) {
      var d = b.td[c];
      Ff(b.Ya, d, a);
      Ff(b.zd, a, d)
    }
  }
}
function Df(a, b) {
  var c = a.zd[b], d = a.Ya[b];
  c && d && (P(a.a, "Updating dependent contexts"), E(c, function(a) {
    E(d, function(b) {
      Ff(this.Ya, a, b);
      Ff(this.zd, b, a)
    }, this)
  }, a))
}
function Ff(a, b, c) {
  a[b] || (a[b] = []);
  Za(a[b], c) || a[b].push(c)
}
var Bf = new zf;
function Gf() {
}
Gf.prototype.Ec = k;
function Hf() {
  return If(Jf)
}
var Jf;
function Kf() {
}
B(Kf, Gf);
function If(a) {
  return(a = Lf(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Mf(a) {
  var b = {};
  Lf(a) && (b[0] = !0, b[1] = !0);
  return b
}
Kf.prototype.ce = k;
function Lf(a) {
  if(!a.ce && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.ce = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.ce
}
Jf = new Kf;
function Nf(a) {
  this.headers = new Pb;
  this.Qb = a || k
}
B(Nf, md);
Nf.prototype.a = Q("goog.net.XhrIo");
var Of = /^https?:?$/i;
n = Nf.prototype;
n.Ia = !1;
n.j = k;
n.yd = k;
n.lc = "";
n.zf = "";
n.ic = 0;
n.jc = "";
n.Pd = !1;
n.$c = !1;
n.de = !1;
n.fb = !1;
n.ud = 0;
n.mb = k;
n.Wf = "";
n.uh = !1;
n.send = function(a, b, c, d) {
  this.j && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.lc = a;
  this.jc = "";
  this.ic = 0;
  this.zf = b;
  this.Pd = !1;
  this.Ia = !0;
  this.j = this.Qb ? If(this.Qb) : new Hf;
  this.yd = this.Qb ? this.Qb.Ec || (this.Qb.Ec = Mf(this.Qb)) : Jf.Ec || (Jf.Ec = Mf(Jf));
  Ef(this.j);
  this.j.onreadystatechange = x(this.Nf, this);
  try {
    O(this.a, Pf(this, "Opening Xhr")), this.de = !0, this.j.open(b, a, !0), this.de = !1
  }catch(f) {
    O(this.a, Pf(this, "Error opening Xhr: " + f.message));
    Qf(this, f);
    return
  }
  var a = c || "", g = this.headers.I();
  d && Nb(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.ca("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Nb(g, function(a, b) {
    this.j.setRequestHeader(b, a)
  }, this);
  if(this.Wf) {
    this.j.responseType = this.Wf
  }
  if("withCredentials" in this.j) {
    this.j.withCredentials = this.uh
  }
  try {
    if(this.mb) {
      od.clearTimeout(this.mb), this.mb = k
    }
    if(this.ud > 0) {
      O(this.a, Pf(this, "Will abort after " + this.ud + "ms if incomplete")), this.mb = od.setTimeout(x(this.qh, this), this.ud)
    }
    O(this.a, Pf(this, "Sending request"));
    this.$c = !0;
    this.j.send(a);
    this.$c = !1
  }catch(h) {
    O(this.a, Pf(this, "Send error: " + h.message)), Qf(this, h)
  }
};
n.dispatchEvent = function(a) {
  if(this.j) {
    Af(this.j);
    try {
      return Nf.d.dispatchEvent.call(this, a)
    }finally {
      Cf()
    }
  }else {
    return Nf.d.dispatchEvent.call(this, a)
  }
};
n.qh = function() {
  if(typeof ca != "undefined" && this.j) {
    this.jc = "Timed out after " + this.ud + "ms, aborting", this.ic = 8, O(this.a, Pf(this, this.jc)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function Qf(a, b) {
  a.Ia = !1;
  if(a.j) {
    a.fb = !0, a.j.abort(), a.fb = !1
  }
  a.jc = b;
  a.ic = 5;
  Rf(a);
  Sf(a)
}
function Rf(a) {
  if(!a.Pd) {
    a.Pd = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
n.abort = function(a) {
  if(this.j && this.Ia) {
    O(this.a, Pf(this, "Aborting")), this.Ia = !1, this.fb = !0, this.j.abort(), this.fb = !1, this.ic = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Sf(this)
  }
};
n.c = function() {
  if(this.j) {
    if(this.Ia) {
      this.Ia = !1, this.fb = !0, this.j.abort(), this.fb = !1
    }
    Sf(this, !0)
  }
  Nf.d.c.call(this)
};
n.Nf = function() {
  !this.de && !this.$c && !this.fb ? this.$g() : Tf(this)
};
n.$g = function() {
  Tf(this)
};
function Tf(a) {
  if(a.Ia && typeof ca != "undefined") {
    if(a.yd[1] && a.Oa() == 4 && Uf(a) == 2) {
      O(a.a, Pf(a, "Local request error detected and ignored"))
    }else {
      if(a.$c && a.Oa() == 4) {
        od.setTimeout(x(a.Nf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.Oa() == 4) {
          O(a.a, Pf(a, "Request complete"));
          a.Ia = !1;
          var b;
          a: {
            switch(Uf(a)) {
              case 0:
                b = t(a.lc) ? a.lc.match(Ne)[1] || k : a.lc.Ga;
                b = !(b ? Of.test(b) : self.location ? Of.test(self.location.protocol) : 1);
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
            a.ic = 6;
            var c;
            try {
              c = a.Oa() > 2 ? a.j.statusText : ""
            }catch(d) {
              O(a.a, "Can not get status: " + d.message), c = ""
            }
            a.jc = c + " [" + Uf(a) + "]";
            Rf(a)
          }
          Sf(a)
        }
      }
    }
  }
}
function Sf(a, b) {
  if(a.j) {
    var c = a.j, d = a.yd[0] ? q : k;
    a.j = k;
    a.yd = k;
    if(a.mb) {
      od.clearTimeout(a.mb), a.mb = k
    }
    b || (Af(c), a.dispatchEvent("ready"), Cf());
    var f = Bf;
    if(f.Lc) {
      var g = w(c);
      O(f.a, "Closing XHR : " + g);
      delete f.zd[g];
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
n.fe = function() {
  return!!this.j
};
n.Oa = function() {
  return this.j ? this.j.readyState : 0
};
function Uf(a) {
  try {
    return a.Oa() > 2 ? a.j.status : -1
  }catch(b) {
    return N(a.a, "Can not get status: " + b.message), -1
  }
}
n.getResponseHeader = function(a) {
  return this.j && this.Oa() == 4 ? this.j.getResponseHeader(a) : i
};
function Pf(a, b) {
  return b + " [" + a.zf + " " + a.lc + " " + Uf(a) + "]"
}
;function Vf(a, b, c) {
  this.L = b;
  this.na = a;
  this.Id = c
}
B(Vf, K);
n = Vf.prototype;
n.a = Q("cw.net.XHRMaster");
n.Ua = -1;
n.le = function(a, b, c) {
  this.Id.__XHRSlave_makeRequest(this.na, a, b, c)
};
n.Oa = l("Ua");
n.pe = function(a, b) {
  b != Wf && he(this.a, G(this.na) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  oe(this.L);
  pe(this.L, a)
};
n.qe = function(a) {
  O(this.a, "ongotheaders_: " + G(a));
  var b = k;
  "Content-Length" in a && (b = Ld(a["Content-Length"]));
  a = this.L;
  O(a.a, a.s() + " got Content-Length: " + b);
  a.wa == Xf && (b == k && (N(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Yf(a, 2E3 + b / 3072 * 1E3))
};
n.re = function(a) {
  a != 1 && O(this.a, this.L.s() + "'s XHR's readyState is " + a);
  this.Ua = a;
  this.Ua >= 2 && oe(this.L)
};
n.oe = function() {
  this.L.f()
};
n.c = function() {
  Vf.d.c.call(this);
  delete Zf.Fa[this.na];
  this.Id.__XHRSlave_dispose(this.na);
  delete this.Id
};
function $f() {
  this.Fa = {}
}
B($f, K);
n = $f.prototype;
n.a = Q("cw.net.XHRMasterTracker");
n.Jd = function(a, b) {
  var c = "_" + Hd(), d = new Vf(c, a, b);
  return this.Fa[c] = d
};
n.pe = function(a, b, c) {
  var b = bb(b), d = this.Fa[a];
  d ? d.pe(b, c) : he(this.a, "onframes_: no master for " + G(a))
};
n.qe = function(a, b) {
  var c = this.Fa[a];
  c ? c.qe(b) : he(this.a, "ongotheaders_: no master for " + G(a))
};
n.re = function(a, b) {
  var c = this.Fa[a];
  c ? c.re(b) : he(this.a, "onreadystatechange_: no master for " + G(a))
};
n.oe = function(a) {
  var b = this.Fa[a];
  b ? (delete this.Fa[b.na], b.oe()) : he(this.a, "oncomplete_: no master for " + G(a))
};
n.c = function() {
  $f.d.c.call(this);
  for(var a = Ra(this.Fa);a.length;) {
    a.pop().f()
  }
  delete this.Fa
};
var Zf = new $f;
o.__XHRMaster_onframes = x(Zf.pe, Zf);
o.__XHRMaster_oncomplete = x(Zf.oe, Zf);
o.__XHRMaster_ongotheaders = x(Zf.qe, Zf);
o.__XHRMaster_onreadystatechange = x(Zf.re, Zf);
function ag(a, b, c) {
  this.host = a;
  this.port = b;
  this.rh = c
}
function bg(a, b) {
  b || (b = a);
  this.Gb = a;
  this.Ib = b
}
function cg(a, b, c, d) {
  this.Gb = a;
  this.Pf = b;
  this.Ib = c;
  this.$f = d;
  (!(this.Gb.indexOf("http://") == 0 || this.Gb.indexOf("https://") == 0) || !(this.Ib.indexOf("http://") == 0 || this.Ib.indexOf("https://") == 0)) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Pf.location.href;
  Oe(this.Gb, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.$f.location.href;
  Oe(this.Ib, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
var dg = new De(";)]}"), eg = "disconnected_" + ld++;
function fg(a, b, c, d) {
  this.K = a;
  this.Rf = b;
  this.Q = c;
  this.Wi = d;
  this.zc = new Nd;
  this.xc = Hd() + Hd();
  this.Ta = new Wb;
  this.ee = new Yb;
  this.Cc = k;
  this.xd = [];
  if(I) {
    this.Cc = dd(o, "load", this.hh, !1, this)
  }
}
B(fg, md);
n = fg.prototype;
n.a = Q("cw.net.Stream");
n.Af = new Vb(-1, []);
n.Bf = new Vb(-1, []);
n.Xg = 50;
n.Wg = 1048576;
n.Fe = !1;
n.ve = !1;
n.i = 1;
n.gg = -1;
n.k = k;
n.B = k;
n.qc = k;
n.Ge = 0;
n.Of = 0;
n.Zf = 0;
n.A = function(a, b) {
  a.push("<Stream id=");
  F(this.xc, a, b);
  a.push(", state=", String(this.i));
  a.push(", primary=");
  F(this.k, a, b);
  a.push(", secondary=");
  F(this.B, a, b);
  a.push(", resetting=");
  F(this.qc, a, b);
  a.push(">")
};
function gg(a) {
  var b = [-1];
  a.k && b.push(a.k.Eb);
  a.B && b.push(a.B.Eb);
  return Math.max.apply(Math.max, b)
}
function hg(a) {
  if(a.i != 1) {
    var b = a.Ta.z.V() != 0, c = Zb(a.ee), d = !c.n(a.Bf) && !(a.k && c.n(a.k.Bb) || a.B && c.n(a.B.Bb)), f = gg(a);
    if((b = b && f < a.Ta.tb) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.k.Tb) {
        P(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.k, c != d.Bb)) {
          !d.Ha && !d.F.length && ig(d), d.F.push(new Be(c)), d.Bb = c
        }
        b && jg(a.k, a.Ta, f + 1);
        a.k.Ca()
      }else {
        a.B == k ? a.Fe ? (P(a.a, "tryToSend_: creating secondary to send " + g), a.B = kg(a, !1), b && jg(a.B, a.Ta, f + 1), a.B.Ca()) : (P(a.a, "tryToSend_: not creating a secondary because Stream might not exist on server"), a.ve = !0) : P(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
n.hh = function() {
  this.Cc = k;
  if(this.k && this.k.xb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.k;
    a.Ad = !0;
    a.f()
  }
  if(this.B && this.B.xb()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.B, a.Ad = !0, a.f()
  }
};
function lg(a, b) {
  var c;
  ga(c) || (c = !0);
  a.i > 3 && e(Error("sendStrings: Can't send strings in state " + a.i));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || e(Error("sendStrings: string #" + c + " has illegal chars: " + G(d)))
      }
    }
    a.Ta.extend(b);
    hg(a)
  }
}
function kg(a, b) {
  var c;
  a.Q instanceof cg ? c = (Boolean(Number((new mg(document.location)).ia.get("httpStreaming", "0"))) ? 2 : 1) == 1 ? Xf : ng : a.Q instanceof ag ? c = og : e(Error("Don't support endpoint " + G(a.Q)));
  a.gg += 1;
  c = new pg(a.K, a, a.gg, c, a.Q, b);
  P(a.a, "Created: " + c.s());
  a.zc.add(c);
  return c
}
function qg(a, b, c) {
  var d = new rg(a.K, a, b, c);
  P(a.a, "Created: " + d.s() + ", delay=" + b + ", times=" + c);
  a.zc.add(d);
  return d
}
function sg(a, b) {
  a.zc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  O(a.a, "Offline: " + b.s());
  b.oc ? a.Ge += b.oc : a.Ge = 0;
  a.Ge >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), tg("stream penalty reached limit", !1), a.f());
  if(a.i > 3) {
    a.i == 4 && b.lg ? (O(a.a, "Disposing because resettingTransport_ is done."), a.f()) : O(a.a, "Not creating a transport because Stream is in state " + a.i)
  }else {
    var c;
    var d;
    c = b instanceof rg;
    if(!c && b.Ad) {
      var f = I ? wf ? [0, 1] : [9, 20] : [0, 0];
      c = f[0];
      d = f[1];
      P(a.a, "getDelayForNextTransport_: " + G({delay:c, times:d}))
    }else {
      d = b.Ue();
      if(b == a.k) {
        if(d) {
          f = ++a.Of
        }else {
          if(!c) {
            f = a.Of = 0
          }
        }
      }else {
        if(d) {
          f = ++a.Zf
        }else {
          if(!c) {
            f = a.Zf = 0
          }
        }
      }
      if(c || !f) {
        d = c = 0, P(a.a, "getDelayForNextTransport_: " + G({count:f, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(f, 3), h = Math.floor(Math.random() * 4E3) - 2E3, j = Math.max(0, b.hg - b.Ke);
        d = (c = Math.max(0, g + h - j)) ? 1 : 0;
        P(a.a, "getDelayForNextTransport_: " + G({count:f, base:g, variance:h, oldDuration:j, delay:c, times:d}))
      }
    }
    c = [c, d];
    f = c[0];
    c = c[1];
    if(b == a.k) {
      a.k = k, c ? a.k = qg(a, f, c) : (f = gg(a), a.k = kg(a, !0), jg(a.k, a.Ta, f + 1)), a.k.Ca()
    }else {
      if(b == a.B) {
        a.B = k, c ? (a.B = qg(a, f, c), a.B.Ca()) : hg(a)
      }
    }
  }
}
n.reset = function(a) {
  this.i > 3 && e(Error("reset: Can't send reset in state " + this.i));
  this.i = 4;
  this.k && this.k.Tb ? (this.a.info("reset: Sending ResetFrame over existing primary."), ug(this.k, a), this.k.Ca()) : (this.k && (O(this.a, "reset: Disposing primary before sending ResetFrame."), this.k.f()), this.B && (O(this.a, "reset: Disposing secondary before sending ResetFrame."), this.B.f()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.qc = kg(this, !1), ug(this.qc, a), this.qc.Ca());
  tg(a, !0)
};
function vg(a, b, c, d) {
  var f;
  f = a.ee;
  for(var g = a.Xg, h = a.Wg, j = [], m = !1, p = 0, z = c.length;p < z;p++) {
    var r = c[p], v = r[0], r = r[1];
    if(v == f.Ab + 1) {
      f.Ab += 1;
      for(j.push(r);;) {
        v = f.Ab + 1;
        r = f.Xa.get(v, $b);
        if(r === $b) {
          break
        }
        j.push(r[0]);
        f.Xa.remove(v);
        f.w -= r[1];
        f.Ab = v
      }
    }else {
      if(!(v <= f.Ab)) {
        if(g != k && f.Xa.V() >= g) {
          m = !0;
          break
        }
        var A = Ub(r);
        if(h != k && f.w + A > h) {
          m = !0;
          break
        }
        f.Xa.set(v, [r, A]);
        f.w += A
      }
    }
  }
  f.Xa.Pa() && f.Xa.clear();
  f = [j, m];
  c = f[0];
  f = f[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(h = a.Rf, j = Db(c[g]), m = j[0], p = j[1], m == 1 ? (m = h.se.Od(xb.dc(), p), h = mb(m, 1), j = mb(m, 2), m = m.fa(), sb.Kc(h, j, 5, 5, new wg(1, "black"), new xg(m), i)) : m == 2 ? (sb.f(), yg()) : N(zg, "Strange message from server: " + G(j)), a.i == 4 || a.ra) {
        return
      }
    }
  }
  d || hg(a);
  if(!(a.i == 4 || a.ra) && f) {
    he(b.a, b.s() + "'s peer caused rwin overflow."), b.f()
  }
}
n.start = function() {
  this.i != 1 && e(Error("Stream.start: " + G(this) + " already started"));
  this.i = 2;
  if(this.Q instanceof bg) {
    var a = sf(this.Q.Gb, this), b = sf(this.Q.Ib, this);
    xd(yf([a, b]), x(this.Dg, this))
  }else {
    Ag(this)
  }
};
n.Dg = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Nc, f = a[1].Nc;
  this.xd.push(a[0]);
  this.xd.push(a[1]);
  this.Q = new cg(d, b, f, c);
  Ag(this)
};
function Ag(a) {
  a.i = 3;
  a.k = kg(a, !0);
  jg(a.k, a.Ta, k);
  a.k.Ca()
}
n.c = function() {
  this.a.info(G(this) + " in disposeInternal.");
  this.i = 5;
  for(var a = this.zc.X(), b = 0;b < a.length;b++) {
    a[b].f()
  }
  for(a = 0;a < this.xd.length;a++) {
    ab(this.xd[a].Ie, this)
  }
  if(I && this.Cc) {
    gd(this.Cc), this.Cc = k
  }
  this.dispatchEvent({type:eg});
  delete this.zc;
  delete this.k;
  delete this.B;
  delete this.qc;
  delete this.Rf;
  fg.d.c.call(this)
};
var Xf = 1, ng = 2, og = 3;
function pg(a, b, c, d, f, g) {
  this.K = a;
  this.D = b;
  this.Ob = c;
  this.wa = d;
  this.Q = f;
  this.F = [];
  this.qb = g;
  this.Tb = !this.xb();
  this.Hb = this.wa != Xf;
  this.rg = x(this.ph, this)
}
B(pg, K);
n = pg.prototype;
n.a = Q("cw.net.ClientTransport");
n.q = k;
n.Ke = k;
n.hg = k;
n.jd = k;
n.Ha = !1;
n.sd = !1;
n.Bb = k;
n.Vd = 0;
n.Eb = -1;
n.te = -1;
n.lg = !1;
n.Ad = !1;
n.oc = 0;
n.fc = !1;
n.A = function(a) {
  a.push("<ClientTransport #", String(this.Ob), ", becomePrimary=", String(this.qb), ">")
};
n.s = function() {
  return(this.qb ? "Prim. T#" : "Sec. T#") + this.Ob
};
n.Ue = function() {
  return!(!this.fc && this.Vd)
};
n.xb = function() {
  return this.wa == Xf || this.wa == ng
};
function Bg(a, b) {
  gb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  vg(a.D, a, b, !a.Hb)
}
function Cg(a, b, c) {
  try {
    var d = Me(b);
    a.Vd += 1;
    O(a.a, a.s() + " RECV " + G(d));
    var f;
    a.Vd == 1 && !d.n(dg) && a.xb() ? (N(a.a, a.s() + " is closing soon because got bad preamble: " + G(d)), f = !0) : f = !1;
    if(f) {
      return!0
    }
    if(d instanceof Ce) {
      if(!/^([ -~]*)$/.test(d.Nb)) {
        return a.fc = !0
      }
      a.te += 1;
      c.push([a.te, d.Nb])
    }else {
      if(d instanceof Be) {
        var g = a.D, h = d.oa;
        g.Af = h;
        var j = g.Ta, m = h.ob, c = !1;
        m > j.tb && (c = !0);
        for(var p = Xb(j).concat(), d = 0;d < p.length;d++) {
          var z = p[d];
          if(z > m) {
            break
          }
          var r = j.z.p[z][1];
          j.z.remove(z);
          j.w -= r
        }
        for(d = 0;d < h.kb.length;d++) {
          var v = h.kb[d];
          v > j.tb && (c = !0);
          j.z.ca(v) && (r = j.z.p[v][1], j.z.remove(v), j.w -= r)
        }
        j.z.Pa() && j.z.clear();
        if(c) {
          return N(a.a, a.s() + " is closing soon because got bad SackFrame"), a.fc = !0
        }
      }else {
        if(d instanceof Ee) {
          a.te = d.vc - 1
        }else {
          if(d instanceof Ge) {
            a.D.Bf = d.kc
          }else {
            if(d instanceof Ie) {
              return P(a.a, a.s() + " is closing soon because got YouCloseItFrame"), !0
            }else {
              if(d instanceof Le) {
                return a.fc = !0, d.reason == "stream_attach_failure" ? a.oc += 1 : d.reason == "acked_unsent_strings" && (a.oc += 0.5), P(a.a, a.s() + " is closing soon because got " + G(d)), !0
              }else {
                if(!(d instanceof De)) {
                  if(d instanceof He) {
                    var A = a.D, nj = !a.Hb;
                    P(A.a, "Stream is now confirmed to exist at server.");
                    A.Fe = !0;
                    if(A.ve && !nj) {
                      A.ve = !1, hg(A)
                    }
                  }else {
                    if(c.length && (Bg(a, c), $a(c)), d instanceof Je) {
                      var oj = a.D;
                      tg(d.pc, d.Rb);
                      oj.f();
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
  }catch(ih) {
    return ih instanceof R || e(ih), N(a.a, a.s() + " is closing soon because got InvalidFrame: " + G(b)), a.fc = !0
  }
  return!1
}
function pe(a, b) {
  a.sd = !0;
  try {
    for(var c = !1, d = [], f = 0, g = b.length;f < g;f++) {
      if(a.ra) {
        a.a.info(a.s() + " returning from loop because we're disposed.");
        return
      }
      if(c = Cg(a, b[f], d)) {
        break
      }
    }
    d.length && Bg(a, d);
    a.sd = !1;
    a.F.length && a.Ca();
    c && (P(a.a, a.s() + " closeSoon is true.  Frames were: " + G(b)), a.f())
  }finally {
    a.sd = !1
  }
}
n.ph = function() {
  N(this.a, this.s() + " timed out due to lack of connection or no data being received.");
  this.f()
};
function Dg(a) {
  if(a.jd != k) {
    a.K.M.clearTimeout(a.jd), a.jd = k
  }
}
function Yf(a, b) {
  Dg(a);
  b = Math.round(b);
  a.jd = a.K.M.setTimeout(a.rg, b);
  O(a.a, a.s() + "'s receive timeout set to " + b + " ms.")
}
function oe(a) {
  a.wa != Xf && (a.wa == og || a.wa == ng ? Yf(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.wa)))
}
function ig(a) {
  var b = new ze;
  b.Ob = a.Ob;
  b.Qf = 2;
  b.tf = 2;
  if(!a.D.Fe) {
    b.Uf = !0
  }
  b.xc = a.D.xc;
  b.He = a.Hb;
  if(b.He) {
    b.Kf = 4096
  }
  b.Gf = 3E5;
  b.Ef = a.Hb ? Math.floor(10) : 0;
  b.ig = !1;
  if(a.qb) {
    b.cg = k, b.me = Math.floor((a.Hb ? 358E4 : 25E3) / 1E3)
  }
  b.oa = Zb(a.D.ee);
  b.dd = a.D.Af;
  a.F.push(b);
  a.Bb = b.oa
}
function qe(a, b) {
  b && (a.oc += 0.5);
  a.f()
}
n.Ca = function() {
  this.Ha && !this.Tb && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.sd) {
    P(this.a, this.s() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ha;
    this.Ha = !0;
    !a && !this.F.length && ig(this);
    for(a = 0;a < this.F.length;a++) {
      O(this.a, this.s() + " SEND " + G(this.F[a]))
    }
    if(this.xb()) {
      for(var a = [], b = 0, c = this.F.length;b < c;b++) {
        this.F[b].la(a), a.push("\n")
      }
      this.F = [];
      a = a.join("");
      b = this.qb ? this.Q.Gb : this.Q.Ib;
      this.q = Zf.Jd(this, this.qb ? this.Q.Pf : this.Q.$f);
      this.Ke = this.K.M === od ? y() : this.K.M.getTime();
      this.q.le(b, "POST", a);
      Yf(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.Hb ? 0 : this.qb ? 25E3 : 0))
    }else {
      if(this.wa == og) {
        a = [];
        b = 0;
        for(c = this.F.length;b < c;b++) {
          a.push(this.F[b].ea())
        }
        this.F = [];
        this.q ? this.q.Dc(a) : (b = this.Q, this.q = new se(this), this.q.rd = b.rh.Jd(this.q), this.Ke = this.K.M === od ? y() : this.K.M.getTime(), this.q.Hd(b.host, b.port), this.q.ra || (this.q.Dc(a), this.q.ra || Yf(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.wa))
      }
    }
  }
};
function jg(a, b, c) {
  !a.Ha && !a.F.length && ig(a);
  for(var d = Math.max(c, a.Eb + 1), f = Xb(b), c = [], g = 0;g < f.length;g++) {
    var h = f[g];
    (d == k || h >= d) && c.push([h, b.z.p[h][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], f = g[0], g = g[1], (a.Eb == -1 || a.Eb + 1 != f) && a.F.push(new Ee(f)), a.F.push(new Ce(g)), a.Eb = f
  }
}
n.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  pg.d.c.call(this);
  this.hg = this.K.M === od ? y() : this.K.M.getTime();
  this.F = [];
  Dg(this);
  this.q && this.q.f();
  var a = this.D;
  this.D = k;
  sg(a, this)
};
function ug(a, b) {
  !a.Ha && !a.F.length && ig(a);
  a.F.push(new Je(b, !0));
  a.lg = !0
}
function rg(a, b, c, d) {
  this.K = a;
  this.D = b;
  this.cf = c;
  this.Xe = d
}
B(rg, K);
n = rg.prototype;
n.Ha = !1;
n.Tb = !1;
n.Uc = k;
n.Bb = k;
n.a = Q("cw.net.DoNothingTransport");
function Eg(a) {
  a.Uc = a.K.M.setTimeout(function() {
    a.Uc = k;
    a.Xe--;
    a.Xe ? Eg(a) : a.f()
  }, a.cf)
}
n.Ca = function() {
  this.Ha && !this.Tb && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ha = !0;
  Eg(this)
};
n.A = function(a) {
  a.push("<DoNothingTransport delay=", String(this.cf), ">")
};
n.xb = ba(!1);
n.s = ba("Wast. T");
n.Ue = ba(!1);
n.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  rg.d.c.call(this);
  this.Uc != k && this.K.M.clearTimeout(this.Uc);
  var a = this.D;
  this.D = k;
  sg(a, this)
};
function Fg(a, b, c) {
  a.style[Ga(c)] = b
}
function Gg(a, b) {
  var c = Xe(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function Hg(a, b, c) {
  b instanceof S ? (c = b.height, b = b.width) : c == i && e(Error("missing height argument"));
  a.style.width = Ig(b);
  a.style.height = Ig(c)
}
function Ig(a) {
  typeof a == "number" && (a = Math.round(a) + "px");
  return a
}
function Jg(a) {
  if((Gg(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style.display) != "none") {
    return Kg(a)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = Kg(a);
  b.display = c;
  b.position = f;
  b.visibility = d;
  return a
}
function Kg(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = I && !b && !c;
  if((!ga(b) || d) && a.getBoundingClientRect) {
    b = a.getBoundingClientRect();
    if(H) {
      a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop
    }
    return new S(b.right - b.left, b.bottom - b.top)
  }
  return new S(b, c)
}
function Lg(a) {
  H ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[I ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var Mg = kc ? "MozUserSelect" : I ? "WebkitUserSelect" : k;
function Ng(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Mg) {
    if(b = b ? "none" : "", a.style[Mg] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[Mg] = b
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
;function Og(a) {
  this.cb = a;
  this.l = []
}
B(Og, K);
var Pg = [];
function U(a, b, c, d) {
  s(c) || (Pg[0] = c, c = Pg);
  for(var f = 0;f < c.length;f++) {
    a.l.push(M(b, c[f], d || a, !1, a.cb || a))
  }
  return a
}
function Qg(a, b, c, d, f, g) {
  if(s(c)) {
    for(var h = 0;h < c.length;h++) {
      Qg(a, b, c[h], d, f, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.cb || a;
      f = !!f;
      if(b = fd(b, c, f)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].jb && b[c].Db == d && b[c].capture == f && b[c].Yc == g) {
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
Og.prototype.ue = function() {
  E(this.l, gd);
  this.l.length = 0
};
Og.prototype.c = function() {
  Og.d.c.call(this);
  this.ue()
};
Og.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Rg() {
}
ea(Rg);
Rg.prototype.Zg = 0;
Rg.Na();
function V(a) {
  this.P = a || Ve();
  this.tc = Sg
}
B(V, md);
V.prototype.Qg = Rg.Na();
var Sg = k;
function Tg(a, b) {
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
n.S = k;
n.t = !1;
n.e = k;
n.tc = k;
n.Yg = k;
n.aa = k;
n.O = k;
n.Vb = k;
n.th = !1;
function Ug(a) {
  return a.S || (a.S = ":" + (a.Qg.Zg++).toString(36))
}
n.b = l("e");
function Vg(a) {
  return a.vb || (a.vb = new Og(a))
}
n.getParent = l("aa");
n.ze = function(a) {
  this.aa && this.aa != a && e(Error("Method not supported"));
  V.d.ze.call(this, a)
};
n.Da = l("P");
n.h = function() {
  this.e = this.P.createElement("div")
};
function Wg(a, b) {
  a.t && e(Error("Component already rendered"));
  a.e || a.h();
  b ? b.insertBefore(a.e, k) : a.P.r.body.appendChild(a.e);
  (!a.aa || a.aa.t) && a.R()
}
n.R = function() {
  this.t = !0;
  Xg(this, function(a) {
    !a.t && a.b() && a.R()
  })
};
n.$a = function() {
  Xg(this, function(a) {
    a.t && a.$a()
  });
  this.vb && this.vb.ue();
  this.t = !1
};
n.c = function() {
  V.d.c.call(this);
  this.t && this.$a();
  this.vb && (this.vb.f(), delete this.vb);
  Xg(this, function(a) {
    a.f()
  });
  !this.th && this.e && gf(this.e);
  this.aa = this.Yg = this.e = this.Vb = this.O = k
};
n.cc = l("e");
n.Lb = function(a) {
  this.t && e(Error("Component already rendered"));
  this.tc = a
};
function Xg(a, b) {
  a.O && E(a.O, b, i)
}
n.removeChild = function(a, b) {
  if(a) {
    var c = t(a) ? a : Ug(a), a = this.Vb && c ? (c in this.Vb ? this.Vb[c] : i) || k : k;
    if(c && a) {
      var d = this.Vb;
      c in d && delete d[c];
      ab(this.O, a);
      b && (a.$a(), a.e && gf(a.e));
      c = a;
      c == k && e(Error("Unable to set parent component"));
      c.aa = k;
      V.d.ze.call(c, k)
    }
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function Yg(a, b) {
  a.setAttribute("role", b);
  a.Ti = b
}
;function Zg() {
}
var $g;
ea(Zg);
n = Zg.prototype;
n.Pc = function() {
};
n.h = function(a) {
  return a.Da().h("div", ah(this, a).join(" "), a.da)
};
n.cc = function(a) {
  return a
};
n.Zb = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(H && !J("7")) {
      var d = bh(Qe(a), b);
      d.push(b);
      pa(c ? Re : Se, a).apply(k, d)
    }else {
      c ? Re(a, b) : Se(a, b)
    }
  }
};
n.vf = function(a) {
  if(a.tc == k) {
    a.tc = "rtl" == (Gg(a.t ? a.e : a.P.r.body, "direction") || ((a.t ? a.e : a.P.r.body).currentStyle ? (a.t ? a.e : a.P.r.body).currentStyle.direction : k) || (a.t ? a.e : a.P.r.body).style.direction)
  }
  a.tc && this.Lb(a.b(), !0);
  a.isEnabled() && this.nd(a, a.Pb)
};
n.kd = function(a, b) {
  Ng(a, !b, !H && !jc)
};
n.Lb = function(a, b) {
  this.Zb(a, this.v() + "-rtl", b)
};
n.xf = function(a) {
  var b;
  return a.va & 32 && (b = a.bb()) ? mf(b) : !1
};
n.nd = function(a, b) {
  var c;
  if(a.va & 32 && (c = a.bb())) {
    if(!b && a.i & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.i & 32 && a.nf()
    }
    if(mf(c) != b) {
      b ? c.tabIndex = 0 : c.removeAttribute("tabIndex")
    }
  }
};
n.De = function(a, b) {
  a.style.display = b ? "" : "none"
};
n.ja = function(a, b, c) {
  var d = a.b();
  if(d) {
    var f = ch(this, b);
    f && this.Zb(a, f, c);
    this.Ac(d, b, c)
  }
};
n.Ac = function(a, b, c) {
  $g || ($g = {1:"disabled", 4:"pressed", 8:"selected", 16:"checked", 64:"expanded"});
  (b = $g[b]) && a.setAttribute("aria-" + b, c)
};
n.ld = function(a, b) {
  var c = this.cc(a);
  if(c && (ff(c), b)) {
    if(t(b)) {
      jf(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = Xe(c);
          c.appendChild(t(a) ? b.createTextNode(a) : a)
        }
      };
      s(b) ? E(b, d) : ha(b) && !("nodeType" in b) ? E(cb(b), d) : d(b)
    }
  }
};
n.bb = function(a) {
  return a.b()
};
n.v = ba("goog-control");
function ah(a, b) {
  var c = a.v(), d = [c], f = a.v();
  f != c && d.push(f);
  c = b.i;
  for(f = [];c;) {
    var g = c & -c;
    f.push(ch(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.sa) && d.push.apply(d, c);
  H && !J("7") && d.push.apply(d, bh(d));
  return d
}
function bh(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  E([], function(d) {
    Ya(d, pa(Za, a)) && (!b || Za(d, b)) && c.push(d.join("_"))
  });
  return c
}
function ch(a, b) {
  if(!a.Te) {
    var c = a.v();
    a.Te = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Te[b]
}
;function dh(a, b) {
  a || e(Error("Invalid class name " + a));
  u(b) || e(Error("Invalid decorator function " + b))
}
var eh = {};
function fh(a, b, c, d, f) {
  if(!H && (!I || !J("525"))) {
    return!0
  }
  if(nc && f) {
    return gh(a)
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
  return gh(a)
}
function gh(a) {
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
;function hh(a, b) {
  a && jh(this, a, b)
}
B(hh, md);
n = hh.prototype;
n.e = k;
n.bd = k;
n.ge = k;
n.cd = k;
n.Ra = -1;
n.Qa = -1;
var kh = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, lh = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, mh = {61:187, 
59:186}, nh = H || I && J("525");
n = hh.prototype;
n.Mg = function(a) {
  if(I && (this.Ra == 17 && !a.ctrlKey || this.Ra == 18 && !a.altKey)) {
    this.Qa = this.Ra = -1
  }
  nh && !fh(a.keyCode, this.Ra, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Qa = kc && a.keyCode in mh ? mh[a.keyCode] : a.keyCode
};
n.Ng = function() {
  this.Qa = this.Ra = -1
};
n.handleEvent = function(a) {
  var b = a.Ba, c, d;
  H && a.type == "keypress" ? (c = this.Qa, d = c != 13 && c != 27 ? b.keyCode : 0) : I && a.type == "keypress" ? (c = this.Qa, d = b.charCode >= 0 && b.charCode < 63232 && gh(c) ? b.charCode : 0) : jc ? (c = this.Qa, d = gh(c) ? b.keyCode : 0) : (c = b.keyCode || this.Qa, d = b.charCode || 0, nc && d == 63 && !c && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in kh ? f = kh[c] : c == 25 && a.shiftKey && (f = 9) : g && g in lh && (f = lh[g]);
  a = f == this.Ra;
  this.Ra = f;
  b = new oh(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.f()
  }
};
n.b = l("e");
function jh(a, b, c) {
  a.cd && a.detach();
  a.e = b;
  a.bd = M(a.e, "keypress", a, c);
  a.ge = M(a.e, "keydown", a.Mg, c, a);
  a.cd = M(a.e, "keyup", a.Ng, c, a)
}
n.detach = function() {
  if(this.bd) {
    gd(this.bd), gd(this.ge), gd(this.cd), this.cd = this.ge = this.bd = k
  }
  this.e = k;
  this.Qa = this.Ra = -1
};
n.c = function() {
  hh.d.c.call(this);
  this.detach()
};
function oh(a, b, c, d) {
  d && this.hc(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
B(oh, Gc);
function W(a, b, c) {
  V.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = w(b);
      if(d = eh[d]) {
        break
      }
      b = b.d ? b.d.constructor : k
    }
    b = d ? u(d.Na) ? d.Na() : new d : k
  }
  this.m = b;
  this.md(a)
}
B(W, V);
n = W.prototype;
n.da = k;
n.i = 0;
n.va = 39;
n.Qe = 255;
n.nh = 0;
n.Pb = !0;
n.sa = k;
n.ae = !0;
n.Cd = !1;
n.bb = function() {
  return this.m.bb(this)
};
function ph(a, b) {
  if(b) {
    a.sa ? Za(a.sa, b) || a.sa.push(b) : a.sa = [b], a.m.Zb(a, b, !0)
  }
}
n.Zb = function(a, b) {
  if(b) {
    ph(this, a)
  }else {
    if(a && this.sa) {
      ab(this.sa, a);
      if(this.sa.length == 0) {
        this.sa = k
      }
      this.m.Zb(this, a, !1)
    }
  }
};
n.h = function() {
  var a = this.m.h(this);
  this.e = a;
  var b = this.m.Pc();
  b && Yg(a, b);
  this.Cd || this.m.kd(a, !1);
  this.Pb || this.m.De(a, !1)
};
n.cc = function() {
  return this.m.cc(this.b())
};
n.R = function() {
  W.d.R.call(this);
  this.m.vf(this);
  if(this.va & -2 && (this.ae && qh(this, !0), this.va & 32)) {
    var a = this.bb();
    if(a) {
      var b = this.zb || (this.zb = new hh);
      jh(b, a);
      U(U(U(Vg(this), b, "key", this.qf), a, "focus", this.Kg), a, "blur", this.nf)
    }
  }
};
function qh(a, b) {
  var c = Vg(a), d = a.b();
  b ? (U(U(U(U(c, d, "mouseover", a.Xc), d, "mousedown", a.Vc), d, "mouseup", a.rf), d, "mouseout", a.Wc), H && U(c, d, "dblclick", a.pf)) : (Qg(Qg(Qg(Qg(c, d, "mouseover", a.Xc), d, "mousedown", a.Vc), d, "mouseup", a.rf), d, "mouseout", a.Wc), H && Qg(c, d, "dblclick", a.pf))
}
n.$a = function() {
  W.d.$a.call(this);
  this.zb && this.zb.detach();
  this.Pb && this.isEnabled() && this.m.nd(this, !1)
};
n.c = function() {
  W.d.c.call(this);
  this.zb && (this.zb.f(), delete this.zb);
  delete this.m;
  this.sa = this.da = k
};
n.ld = function(a) {
  this.m.ld(this.b(), a);
  this.md(a)
};
n.md = aa("da");
n.kf = function() {
  var a = this.da;
  if(!a) {
    return""
  }
  if(!t(a)) {
    if(s(a)) {
      a = Wa(a, nf).join("")
    }else {
      if(Ue && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        of(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Ue || (a = a.replace(/ +/g, " "));
      a != " " && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
n.Lb = function(a) {
  W.d.Lb.call(this, a);
  var b = this.b();
  b && this.m.Lb(b, a)
};
n.kd = function(a) {
  this.Cd = a;
  var b = this.b();
  b && this.m.kd(b, a)
};
n.De = function(a, b) {
  if(b || this.Pb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.m.De(c, a);
    this.isEnabled() && this.m.nd(this, a);
    this.Pb = a;
    return!0
  }
  return!1
};
n.isEnabled = function() {
  return!(this.i & 1)
};
function rh(a, b) {
  sh(a, 2, b) && a.ja(2, b)
}
n.fe = function() {
  return!!(this.i & 4)
};
n.setActive = function(a) {
  sh(this, 4, a) && this.ja(4, a)
};
n.Ae = function(a) {
  sh(this, 8, a) && this.ja(8, a)
};
n.ja = function(a, b) {
  if(this.va & a && b != !!(this.i & a)) {
    this.m.ja(this, a, b), this.i = b ? this.i | a : this.i & ~a
  }
};
function X(a, b) {
  return!!(a.Qe & b) && !!(a.va & b)
}
function sh(a, b, c) {
  return!!(a.va & b) && !!(a.i & b) != c && (!(a.nh & b) || a.dispatchEvent(Tg(b, c))) && !a.ra
}
n.Xc = function(a) {
  !th(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && rh(this, !0)
};
n.Wc = function(a) {
  !th(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(!1), X(this, 2) && rh(this, !1))
};
function th(a, b) {
  return!!a.relatedTarget && hf(b, a.relatedTarget)
}
n.Vc = function(a) {
  if(this.isEnabled() && (X(this, 2) && rh(this, !0), Ic(a) && (!I || !nc || !a.ctrlKey))) {
    X(this, 4) && this.setActive(!0), this.m.xf(this) && this.bb().focus()
  }
  !this.Cd && Ic(a) && (!I || !nc || !a.ctrlKey) && a.preventDefault()
};
n.rf = function(a) {
  this.isEnabled() && (X(this, 2) && rh(this, !0), this.fe() && this.hb(a) && X(this, 4) && this.setActive(!1))
};
n.pf = function(a) {
  this.isEnabled() && this.hb(a)
};
n.hb = function(a) {
  if(X(this, 16)) {
    var b = !(this.i & 16);
    sh(this, 16, b) && this.ja(16, b)
  }
  X(this, 8) && this.Ae(!0);
  X(this, 64) && (b = !(this.i & 64), sh(this, 64, b) && this.ja(64, b));
  b = new Dc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, f = 0;d = c[f];f++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
n.Kg = function() {
  X(this, 32) && sh(this, 32, !0) && this.ja(32, !0)
};
n.nf = function() {
  X(this, 4) && this.setActive(!1);
  X(this, 32) && sh(this, 32, !1) && this.ja(32, !1)
};
n.qf = function(a) {
  return this.Pb && this.isEnabled() && this.$d(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
n.$d = function(a) {
  return a.keyCode == 13 && this.hb(a)
};
u(W) || e(Error("Invalid component class " + W));
u(Zg) || e(Error("Invalid renderer class " + Zg));
var uh = w(W);
eh[uh] = Zg;
dh("goog-control", function() {
  return new W(k)
});
function vh() {
}
B(vh, Zg);
ea(vh);
n = vh.prototype;
n.Pc = ba("button");
n.Ac = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : vh.d.Ac.call(this, a, b, c)
};
n.h = function(a) {
  var b = vh.d.h.call(this, a), c = a.Sc();
  c && this.Ce(b, c);
  (c = a.Tc()) && this.qd(b, c);
  a.va & 16 && this.Ac(b, 16, !1);
  return b
};
n.Tc = q;
n.qd = q;
n.Sc = function(a) {
  return a.title
};
n.Ce = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
n.v = ba("goog-button");
function wh() {
}
B(wh, vh);
ea(wh);
n = wh.prototype;
n.Pc = function() {
};
n.h = function(a) {
  a.t && !1 != a.ae && qh(a, !1);
  a.ae = !1;
  a.Qe &= -256;
  a.t && a.i & 32 && e(Error("Component already rendered"));
  a.i & 32 && a.ja(32, !1);
  a.va &= -33;
  return a.Da().h("button", {"class":ah(this, a).join(" "), disabled:!a.isEnabled(), title:a.Sc() || "", value:a.Tc() || ""}, a.kf() || "")
};
n.vf = function(a) {
  U(Vg(a), a.b(), "click", a.hb)
};
n.kd = q;
n.Lb = q;
n.xf = function(a) {
  return a.isEnabled()
};
n.nd = q;
n.ja = function(a, b, c) {
  wh.d.ja.call(this, a, b, c);
  if((a = a.b()) && b == 1) {
    a.disabled = c
  }
};
n.Tc = function(a) {
  return a.value
};
n.qd = function(a, b) {
  if(a) {
    a.value = b
  }
};
n.Ac = q;
function xh(a, b, c) {
  W.call(this, a, b || wh.Na(), c)
}
B(xh, W);
n = xh.prototype;
n.Tc = l("jg");
n.qd = function(a) {
  this.jg = a;
  this.m.qd(this.b(), a)
};
n.Sc = l("eg");
n.Ce = function(a) {
  this.eg = a;
  this.m.Ce(this.b(), a)
};
n.c = function() {
  xh.d.c.call(this);
  delete this.jg;
  delete this.eg
};
n.R = function() {
  xh.d.R.call(this);
  if(this.va & 32) {
    var a = this.bb();
    a && U(Vg(this), a, "keyup", this.$d)
  }
};
n.$d = function(a) {
  return a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup" ? this.hb(a) : a.keyCode == 32
};
dh("goog-button", function() {
  return new xh(k)
});
function yh() {
}
B(yh, vh);
ea(yh);
yh.prototype.h = function(a) {
  var b = {"class":"goog-inline-block " + ah(this, a).join(" "), title:a.Sc() || ""};
  return a.Da().h("div", b, zh(this, a.da, a.Da()))
};
yh.prototype.Pc = ba("button");
yh.prototype.cc = function(a) {
  return a && a.firstChild.firstChild
};
function zh(a, b, c) {
  return c.h("div", "goog-inline-block " + (a.v() + "-outer-box"), c.h("div", "goog-inline-block " + (a.v() + "-inner-box"), b))
}
yh.prototype.v = ba("goog-custom-button");
function Ah(a, b, c) {
  xh.call(this, a, b || yh.Na(), c)
}
B(Ah, xh);
dh("goog-custom-button", function() {
  return new Ah(k)
});
var Bh = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function Ch(a) {
  var b = {}, a = String(a), c = a.charAt(0) == "#" ? a : "#" + a;
  if(Dh.test(c)) {
    return b.Zc = Eh(c), b.type = "hex", b
  }else {
    a: {
      var d = a.match(Fh);
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
      return b.Zc = Gh(c[0], c[1], c[2]), b.type = "rgb", b
    }else {
      if(Bh && (c = Bh[a.toLowerCase()])) {
        return b.Zc = c, b.type = "named", b
      }
    }
  }
  e(Error(a + " is not a valid color string"))
}
var Hh = /#(.)(.)(.)/;
function Eh(a) {
  Dh.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  a.length == 4 && (a = a.replace(Hh, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function Ih(a) {
  a = Eh(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function Gh(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || a < 0 || a > 255 || isNaN(b) || b < 0 || b > 255 || isNaN(c) || c < 0 || c > 255) && e(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = Jh(a.toString(16));
  b = Jh(b.toString(16));
  c = Jh(c.toString(16));
  return"#" + a + b + c
}
var Dh = /^#(?:[0-9a-f]{3}){1,2}$/i, Fh = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function Jh(a) {
  return a.length == 1 ? "0" + a : a
}
;function mg(a, b) {
  var c;
  a instanceof mg ? (this.Jb(b == k ? a.ua : b), Kh(this, a.Ga), Lh(this, a.Bc), Mh(this, a.Ka), Nh(this, a.Fb), this.Kb(a.N), Oh(this, a.ia.I()), Ph(this, a.bc)) : a && (c = String(a).match(Ne)) ? (this.Jb(!!b), Kh(this, c[1] || "", !0), Lh(this, c[2] || "", !0), Mh(this, c[3] || "", !0), Nh(this, c[4]), this.Kb(c[5] || "", !0), Oh(this, c[6] || "", !0), Ph(this, c[7] || "", !0)) : (this.Jb(!!b), this.ia = new Qh(k, this, this.ua))
}
n = mg.prototype;
n.Ga = "";
n.Bc = "";
n.Ka = "";
n.Fb = k;
n.N = "";
n.bc = "";
n.Sg = !1;
n.ua = !1;
n.toString = function() {
  if(this.qa) {
    return this.qa
  }
  var a = [];
  this.Ga && a.push(Rh(this.Ga, Sh), ":");
  this.Ka && (a.push("//"), this.Bc && a.push(Rh(this.Bc, Sh), "@"), a.push(t(this.Ka) ? encodeURIComponent(this.Ka) : k), this.Fb != k && a.push(":", String(this.Fb)));
  this.N && (this.Ka && this.N.charAt(0) != "/" && a.push("/"), a.push(Rh(this.N, this.N.charAt(0) == "/" ? Th : Uh)));
  var b = String(this.ia);
  b && a.push("?", b);
  this.bc && a.push("#", Rh(this.bc, Vh));
  return this.qa = a.join("")
};
n.I = function() {
  var a = this.Ga, b = this.Bc, c = this.Ka, d = this.Fb, f = this.N, g = this.ia.I(), h = this.bc, j = new mg(k, this.ua);
  a && Kh(j, a);
  b && Lh(j, b);
  c && Mh(j, c);
  d && Nh(j, d);
  f && j.Kb(f);
  g && Oh(j, g);
  h && Ph(j, h);
  return j
};
function Kh(a, b, c) {
  Wh(a);
  delete a.qa;
  a.Ga = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.Ga) {
    a.Ga = a.Ga.replace(/:$/, "")
  }
}
function Lh(a, b, c) {
  Wh(a);
  delete a.qa;
  a.Bc = c ? b ? decodeURIComponent(b) : "" : b
}
function Mh(a, b, c) {
  Wh(a);
  delete a.qa;
  a.Ka = c ? b ? decodeURIComponent(b) : "" : b
}
function Nh(a, b) {
  Wh(a);
  delete a.qa;
  b ? (b = Number(b), (isNaN(b) || b < 0) && e(Error("Bad port number " + b)), a.Fb = b) : a.Fb = k
}
n.Kb = function(a, b) {
  Wh(this);
  delete this.qa;
  this.N = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function Oh(a, b, c) {
  Wh(a);
  delete a.qa;
  b instanceof Qh ? (a.ia = b, a.ia.Me = a, a.ia.Jb(a.ua)) : (c || (b = Rh(b, Xh)), a.ia = new Qh(b, a, a.ua))
}
function Ph(a, b, c) {
  Wh(a);
  delete a.qa;
  a.bc = c ? b ? decodeURIComponent(b) : "" : b
}
function Wh(a) {
  a.Sg && e(Error("Tried to modify a read-only Uri"))
}
n.Jb = function(a) {
  this.ua = a;
  this.ia && this.ia.Jb(a);
  return this
};
var Yh = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Rh(a, b) {
  var c = k;
  t(a) && (c = a, Yh.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, Zh)));
  return c
}
function Zh(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Sh = /[#\/\?@]/g, Uh = /[\#\?:]/g, Th = /[\#\?]/g, Xh = /[\#\?@]/g, Vh = /#/g;
function Qh(a, b, c) {
  this.Aa = a || k;
  this.Me = b || k;
  this.ua = !!c
}
function $h(a) {
  if(!a.o && (a.o = new Pb, a.g = 0, a.Aa)) {
    for(var b = a.Aa.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      d >= 0 ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = ai(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
n = Qh.prototype;
n.o = k;
n.g = k;
n.V = function() {
  $h(this);
  return this.g
};
n.add = function(a, b) {
  $h(this);
  bi(this);
  a = ai(this, a);
  if(this.ca(a)) {
    var c = this.o.get(a);
    s(c) ? c.push(b) : this.o.set(a, [c, b])
  }else {
    this.o.set(a, b)
  }
  this.g++;
  return this
};
n.remove = function(a) {
  $h(this);
  a = ai(this, a);
  if(this.o.ca(a)) {
    bi(this);
    var b = this.o.get(a);
    s(b) ? this.g -= b.length : this.g--;
    return this.o.remove(a)
  }
  return!1
};
n.clear = function() {
  bi(this);
  this.o && this.o.clear();
  this.g = 0
};
n.Pa = function() {
  $h(this);
  return this.g == 0
};
n.ca = function(a) {
  $h(this);
  a = ai(this, a);
  return this.o.ca(a)
};
n.Ic = function(a) {
  var b = this.X();
  return Za(b, a)
};
n.Ea = function() {
  $h(this);
  for(var a = this.o.X(), b = this.o.Ea(), c = [], d = 0;d < b.length;d++) {
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
n.X = function(a) {
  $h(this);
  if(a) {
    if(a = ai(this, a), this.ca(a)) {
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
    for(var b = this.o.X(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      s(d) ? db(a, d) : a.push(d)
    }
  }
  return a
};
n.set = function(a, b) {
  $h(this);
  bi(this);
  a = ai(this, a);
  if(this.ca(a)) {
    var c = this.o.get(a);
    s(c) ? this.g -= c.length : this.g--
  }
  this.o.set(a, b);
  this.g++;
  return this
};
n.get = function(a, b) {
  $h(this);
  a = ai(this, a);
  if(this.ca(a)) {
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
function bi(a) {
  delete a.Ld;
  delete a.Aa;
  a.Me && delete a.Me.qa
}
n.I = function() {
  var a = new Qh;
  if(this.Ld) {
    a.Ld = this.Ld
  }
  if(this.Aa) {
    a.Aa = this.Aa
  }
  if(this.o) {
    a.o = this.o.I()
  }
  return a
};
function ai(a, b) {
  var c = String(b);
  a.ua && (c = c.toLowerCase());
  return c
}
n.Jb = function(a) {
  a && !this.ua && ($h(this), bi(this), Nb(this.o, function(a, c) {
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
var ci;
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
  ci = c
})();
function di(a, b) {
  V.call(this, b);
  this.Fg = a;
  this.Qd = new Og(this);
  this.Oc = new Pb
}
B(di, V);
n = di.prototype;
n.a = Q("goog.ui.media.FlashObject");
n.vh = "window";
n.Re = "#000000";
n.pg = "sameDomain";
n.ba = function(a, b) {
  this.nb = t(a) ? a : Math.round(a) + "px";
  this.be = t(b) ? b : Math.round(b) + "px";
  this.b() && Hg(this.b() ? this.b().firstChild : k, this.nb, this.be);
  return this
};
n.R = function() {
  di.d.R.call(this);
  var a = this.b(), b;
  b = H ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = H ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = ra(c, this.vh), d = this.Oc.Ea(), f = this.Oc.X(), g = [], h = 0;h < d.length;h++) {
    var j = ta(d[h]), m = ta(f[h]);
    g.push(j + "=" + m)
  }
  b = ra(b, Ug(this), Ug(this), "goog-ui-media-flash-object", va(this.Fg), va(g.join("&")), this.Re, this.pg, c);
  a.innerHTML = b;
  this.nb && this.be && this.ba(this.nb, this.be);
  U(this.Qd, this.b(), Ra(zc), Ec)
};
n.h = function() {
  this.Vf != k && !(Ca(ci, this.Vf) >= 0) && (N(this.a, "Required flash version not found:" + this.Vf), e(Error("Method not supported")));
  var a = this.Da().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
n.c = function() {
  di.d.c.call(this);
  this.Oc = k;
  this.Qd.f();
  this.Qd = k
};
function ei(a) {
  C.call(this, a)
}
B(ei, C);
ei.prototype.name = "cw.loadflash.FlashLoadFailed";
o.__loadFlashObject_callbacks = {};
function fi(a, b, c) {
  function d() {
    f && delete o.__loadFlashObject_callbacks[f]
  }
  var f;
  if(kc && !J("1.8.1.20")) {
    return Cd(new ei("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(Ca(ci, "9") >= 0)) {
    return b = ci, Cd(new ei("Need Flash Player 9+; had " + (b ? b : "none")))
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
  b.Oc.set("onloadcallback", '__loadFlashObject_callbacks["' + f + '"]()');
  g = Ug(b);
  Wg(b, c);
  return h
}
function gi(a, b, c) {
  var d = fi(a, b, c), f = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  zd(d, function(b) {
    a.clearTimeout(f);
    return b
  });
  return d
}
;var Wf = 1;
function hi(a, b) {
  this.wh = a;
  this.Ff = b
}
hi.prototype.he = 0;
hi.prototype.gd = 0;
hi.prototype.Td = !1;
function ii(a) {
  var b = [];
  if(a.Td) {
    return[b, 2]
  }
  var c = a.he, d = a.wh.responseText;
  for(a.he = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var f = d.substr(a.gd, c - a.gd), f = f.replace(/\r$/, "");
    if(f.length > a.Ff) {
      return a.Td = !0, [b, 2]
    }
    b.push(f);
    a.gd = c += 1
  }
  return a.he - a.gd - 1 > a.Ff ? (a.Td = !0, [b, 2]) : [b, Wf]
}
;var ji = !(H || I && !J("420+"));
function ki(a, b) {
  this.vd = a;
  this.na = b
}
B(ki, K);
n = ki.prototype;
n.q = k;
n.Ua = -1;
n.mf = !1;
n.sf = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function li(a) {
  var b = ii(a.$e), c = b[0], b = b[1], d = o.parent;
  d ? (d.__XHRMaster_onframes(a.na, c, b), b != Wf && a.f()) : a.f()
}
n.Pg = function() {
  li(this);
  if(!this.ra) {
    var a = o.parent;
    a && a.__XHRMaster_oncomplete(this.na);
    this.f()
  }
};
n.fh = function() {
  var a = o.parent;
  if(a) {
    this.Ua = this.q.Oa();
    if(this.Ua >= 2 && !this.mf) {
      for(var b = new Pb, c = this.sf.length;c--;) {
        var d = this.sf[c];
        try {
          b.set(d, this.q.j.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.V() && (this.mf = !0, a.__XHRMaster_ongotheaders(this.na, Tb(b)), this.ra)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.na, this.Ua);
    ji && this.Ua == 3 && li(this)
  }else {
    this.f()
  }
};
n.le = function(a, b, c) {
  this.q = new Nf;
  M(this.q, "readystatechange", x(this.fh, this));
  M(this.q, "complete", x(this.Pg, this));
  this.q.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.$e = new hi(this.q.j, 1048576)
};
n.c = function() {
  ki.d.c.call(this);
  delete this.$e;
  this.q && this.q.f();
  delete this.vd.wc[this.na];
  delete this.vd
};
function mi() {
  this.wc = {}
}
B(mi, K);
mi.prototype.Vg = function(a, b, c, d) {
  var f = new ki(this, a);
  this.wc[a] = f;
  f.le(b, c, d)
};
mi.prototype.Ag = function(a) {
  (a = this.wc[a]) && a.f()
};
mi.prototype.c = function() {
  mi.d.c.call(this);
  for(var a = Ra(this.wc);a.length;) {
    a.pop().f()
  }
  delete this.wc
};
var ni = new mi;
o.__XHRSlave_makeRequest = x(ni.Vg, ni);
o.__XHRSlave_dispose = x(ni.Ag, ni);
function oi(a) {
  this.r = a
}
var pi = /\s*;\s*/;
n = oi.prototype;
n.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && I) {
    var b = "COOKIES_TEST_" + y();
    qi.set(b, "1");
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
  for(var c = a + "=", d = (this.r.cookie || "").split(pi), f = 0, g;g = d[f];f++) {
    if(g.indexOf(c) == 0) {
      return g.substr(c.length)
    }
  }
  return b
};
n.remove = function(a, b, c) {
  var d = this.ca(a);
  this.set(a, "", 0, b, c);
  return d
};
n.Ea = function() {
  return ri(this).keys
};
n.X = function() {
  return ri(this).kg
};
n.Pa = function() {
  return!this.r.cookie
};
n.V = function() {
  return!this.r.cookie ? 0 : (this.r.cookie || "").split(pi).length
};
n.ca = function(a) {
  return ga(this.get(a))
};
n.Ic = function(a) {
  for(var b = ri(this).kg, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return!0
    }
  }
  return!1
};
n.clear = function() {
  for(var a = ri(this).keys, b = a.length - 1;b >= 0;b--) {
    this.remove(a[b])
  }
};
function ri(a) {
  for(var a = (a.r.cookie || "").split(pi), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), d == -1 ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{keys:b, kg:c}
}
var qi = new oi(document);
qi.ci = 3950;
function si() {
  this.Li = "demosminerva_site_uaid";
  this.Mi = "demosminerva_site_uaid_secure"
}
function ti(a) {
  var b = new di("/compiled_client/FlashConnector.swf?cb=2ae8d8a79afe8f3a96bb49e8a9339914");
  b.Re = "#777777";
  b.ba(300, 30);
  var c = T("FlashConnectorSwf");
  c || e(Error("no FlashConnectorSwf?"));
  return gi(a.M, b, c)
}
function ui(a, b, c) {
  var d = new mg(document.location);
  if(c) {
    var f = d.Ka, d = ti(a);
    xd(d, function(b) {
      b = new re(a, b);
      return new ag(f, 843, b)
    });
    return d
  }else {
    return b ? (b = o.__demo_shared_domain, d = d.I(), Mh(d, "_____random_____." + b)) : d = d.I(), d.Kb("/httpface/"), Oh(d, "", i), d = new bg(d.toString().replace("_____random_____", "%random%")), Bd(d)
  }
}
function vi() {
  var a = wi, b = (new mg(document.location)).ia, c = b.get("mode") != "http", b = Boolean(Number(b.get("useSub", "1")));
  return ui(a, b, c)
}
;function xi() {
  this.Tf = y()
}
var yi = new xi;
xi.prototype.set = aa("Tf");
xi.prototype.reset = function() {
  this.set(y())
};
xi.prototype.get = l("Tf");
function zi(a) {
  this.dh = a || "";
  this.mh = yi
}
zi.prototype.ag = !0;
zi.prototype.kh = !0;
zi.prototype.jh = !0;
zi.prototype.bg = !1;
function Ai(a) {
  return a < 10 ? "0" + a : String(a)
}
function Bi(a, b) {
  var c = (a.dg - b) / 1E3, d = c.toFixed(3), f = 0;
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
function Ci(a) {
  zi.call(this, a)
}
B(Ci, zi);
Ci.prototype.bg = !0;
function Di(a) {
  this.eh = x(this.og, this);
  this.hf = new Ci;
  this.wf = this.hf.ag = !1;
  this.e = a;
  this.Cg = this.e.ownerDocument || this.e.document;
  var a = Ve(this.e), b = k;
  if(H) {
    b = a.r.createStyleSheet(), Lg(b)
  }else {
    var c = Ye(a.r, "head", i, i)[0];
    c || (b = Ye(a.r, "body", i, i)[0], c = a.h("head"), b.parentNode.insertBefore(c, b));
    b = a.h("style");
    Lg(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
Di.prototype.og = function(a) {
  var b = this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight <= 100, c = this.Cg.createElement("div");
  c.className = "logmsg";
  var d = this.hf, f;
  switch(a.Cb.value) {
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
  g.push(d.dh, " ");
  if(d.ag) {
    var h = new Date(a.dg);
    g.push("[", Ai(h.getFullYear() - 2E3) + Ai(h.getMonth() + 1) + Ai(h.getDate()) + " " + Ai(h.getHours()) + ":" + Ai(h.getMinutes()) + ":" + Ai(h.getSeconds()) + "." + Ai(Math.floor(h.getMilliseconds() / 10)), "] ")
  }
  d.kh && g.push("[", Ba(Bi(a, d.mh.get())), "s] ");
  d.jh && g.push("[", va(a.Ug), "] ");
  g.push('<span class="', f, '">', ua(Ba(va(a.If))));
  d.bg && a.Sd && g.push("<br>", ua(Ba(a.Rd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  if(b) {
    this.e.scrollTop = this.e.scrollHeight
  }
};
Di.prototype.clear = function() {
  this.e.innerHTML = ""
};
function Ei(a, b, c, d, f, g) {
  arguments.length == 6 ? this.setTransform(a, b, c, d, f, g) : arguments.length != 0 ? e(Error("Insufficient matrix parameters")) : (this.Y = this.$ = 1, this.T = this.Z = this.ga = this.ha = 0)
}
n = Ei.prototype;
n.I = function() {
  return new Ei(this.Y, this.T, this.Z, this.$, this.ga, this.ha)
};
n.setTransform = function(a, b, c, d, f, g) {
  (!ka(a) || !ka(b) || !ka(c) || !ka(d) || !ka(f) || !ka(g)) && e(Error("Invalid transform parameters"));
  this.Y = a;
  this.T = b;
  this.Z = c;
  this.$ = d;
  this.ga = f;
  this.ha = g;
  return this
};
n.We = function(a) {
  this.Y = a.Y;
  this.T = a.T;
  this.Z = a.Z;
  this.$ = a.$;
  this.ga = a.ga;
  this.ha = a.ha;
  return this
};
n.scale = function(a, b) {
  this.Y *= a;
  this.T *= a;
  this.Z *= b;
  this.$ *= b;
  return this
};
n.translate = function(a, b) {
  this.ga += a * this.Y + b * this.Z;
  this.ha += a * this.T + b * this.$;
  return this
};
n.rotate = function(a, b, c) {
  var d = new Ei, f = Math.cos(a), a = Math.sin(a), b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f), c = this.Y, d = this.Z;
  this.Y = b.Y * c + b.T * d;
  this.Z = b.Z * c + b.$ * d;
  this.ga += b.ga * c + b.ha * d;
  c = this.T;
  d = this.$;
  this.T = b.Y * c + b.T * d;
  this.$ = b.Z * c + b.$ * d;
  this.ha += b.ga * c + b.ha * d;
  return this
};
n.toString = function() {
  return"matrix(" + [this.Y, this.T, this.Z, this.$, this.ga, this.ha].join(",") + ")"
};
n.n = function(a) {
  return this == a ? !0 : !a ? !1 : this.Y == a.Y && this.Z == a.Z && this.ga == a.ga && this.T == a.T && this.$ == a.$ && this.ha == a.ha
};
function Y(a, b) {
  this.e = a;
  this.ta = b;
  this.Kd = !1
}
B(Y, md);
n = Y.prototype;
n.ta = k;
n.e = k;
n.fg = k;
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
  this.Je = c;
  this.ta.ye(this, c);
  this.fill = d;
  this.ta.xe(this, d)
}
B(Z, Y);
Z.prototype.fill = k;
Z.prototype.Je = k;
Z.prototype.Hg = l("fill");
Z.prototype.Jg = l("Je");
function Fi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
B(Fi, Z);
function Gi(a, b) {
  Y.call(this, a, b)
}
B(Gi, Y);
function Hi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
B(Hi, Z);
function Ii(a, b) {
  Y.call(this, a, b)
}
B(Ii, Y);
function Ji(a, b) {
  Y.call(this, a, b)
}
B(Ji, Gi);
Ji.prototype.clear = function() {
  ff(this.b())
};
Ji.prototype.ba = function(a, b) {
  Ki(this.b(), {width:a, height:b})
};
function Li(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
B(Li, Hi);
function Mi(a, b) {
  Y.call(this, a, b)
}
B(Mi, Ii);
Mi.prototype.ba = function(a, b) {
  Ki(this.b(), {width:a, height:b})
};
function Ni() {
}
;function xg(a, b) {
  this.Gd = a;
  this.mc = b || 1
}
B(xg, Ni);
xg.prototype.fa = l("Gd");
function wg(a, b) {
  this.nb = a;
  this.Gd = b
}
wg.prototype.fa = l("Gd");
function Oi() {
  this.C = [];
  this.g = [];
  this.xa = []
}
Oi.prototype.rb = k;
Oi.prototype.U = k;
Oi.prototype.Mb = !0;
var Pi = [2, 2, 6, 6, 0];
n = Oi.prototype;
n.clear = function() {
  this.C.length = 0;
  this.g.length = 0;
  this.xa.length = 0;
  delete this.rb;
  delete this.U;
  delete this.Mb;
  return this
};
n.moveTo = function(a, b) {
  this.C[this.C.length - 1] == 0 ? this.xa.length -= 2 : (this.C.push(0), this.g.push(1));
  this.xa.push(a, b);
  this.U = this.rb = [a, b];
  return this
};
n.lineTo = function(a) {
  var b = this.C[this.C.length - 1];
  b == k && e(Error("Path cannot start with lineTo"));
  b != 1 && (this.C.push(1), this.g.push(0));
  for(b = 0;b < arguments.length;b += 2) {
    var c = arguments[b], d = arguments[b + 1];
    this.xa.push(c, d)
  }
  this.g[this.g.length - 1] += b / 2;
  this.U = [c, d];
  return this
};
n.Ze = function(a) {
  var b = this.C[this.C.length - 1];
  b == k && e(Error("Path cannot start with curve"));
  b != 2 && (this.C.push(2), this.g.push(0));
  for(b = 0;b < arguments.length;b += 6) {
    var c = arguments[b + 4], d = arguments[b + 5];
    this.xa.push(arguments[b], arguments[b + 1], arguments[b + 2], arguments[b + 3], c, d)
  }
  this.g[this.g.length - 1] += b / 6;
  this.U = [c, d];
  return this
};
n.close = function() {
  var a = this.C[this.C.length - 1];
  a == k && e(Error("Path cannot start with close"));
  if(a != 4) {
    this.C.push(4), this.g.push(1), this.U = this.rb
  }
  return this
};
n.arcTo = function(a, b, c, d) {
  var f = this.U[0] - a * Math.cos(ue(c)) + a * Math.cos(ue(c + d)), g = this.U[1] - b * Math.sin(ue(c)) + b * Math.sin(ue(c + d));
  this.C.push(3);
  this.g.push(1);
  this.xa.push(a, b, c, d, f, g);
  this.Mb = !1;
  this.U = [f, g];
  return this
};
n.qg = function(a, b, c, d) {
  var f = this.U[0] - a * Math.cos(ue(c)), g = this.U[1] - b * Math.sin(ue(c)), h = ue(d), d = Math.ceil(Math.abs(h) / Math.PI * 2);
  h /= d;
  for(var c = ue(c), j = 0;j < d;j++) {
    var m = Math.cos(c), p = Math.sin(c), z = 4 / 3 * Math.sin(h / 2) / (1 + Math.cos(h / 2)), r = f + (m - z * p) * a, v = g + (p + z * m) * b;
    c += h;
    m = Math.cos(c);
    p = Math.sin(c);
    this.Ze(r, v, f + (m + z * p) * a, g + (p - z * m) * b, f + m * a, g + p * b)
  }
  return this
};
function Qi(a, b) {
  for(var c = a.xa, d = 0, f = 0, g = a.C.length;f < g;f++) {
    var h = a.C[f], j = Pi[h] * a.g[f];
    b(h, c.slice(d, d + j));
    d += j
  }
}
n.I = function() {
  var a = new this.constructor;
  a.C = this.C.concat();
  a.g = this.g.concat();
  a.xa = this.xa.concat();
  a.rb = this.rb && this.rb.concat();
  a.U = this.U && this.U.concat();
  a.Mb = this.Mb;
  return a
};
var Ri = {};
Ri[0] = Oi.prototype.moveTo;
Ri[1] = Oi.prototype.lineTo;
Ri[4] = Oi.prototype.close;
Ri[2] = Oi.prototype.Ze;
Ri[3] = Oi.prototype.qg;
function Si(a) {
  if(a.Mb) {
    return a.I()
  }
  var b = new Oi;
  Qi(a, function(a, d) {
    Ri[a].apply(b, d)
  });
  return b
}
Oi.prototype.Pa = function() {
  return this.C.length == 0
};
function Ti(a, b, c, d, f) {
  V.call(this, f);
  this.width = a;
  this.height = b;
  this.ka = c || k;
  this.Wb = d || k
}
B(Ti, V);
n = Ti.prototype;
n.G = k;
n.Ja = 0;
n.Za = 0;
n.lf = function() {
  return this.W()
};
n.W = function() {
  return this.t ? Jg(this.b()) : ka(this.width) && ka(this.height) ? new S(this.width, this.height) : k
};
function Ui(a) {
  var b = a.W();
  return b ? b.width / (a.ka ? new S(a.ka, a.Wb) : a.W()).width : 0
}
;function Vi(a, b, c, d, f) {
  Ti.call(this, a, b, c, d, f);
  this.bf = {};
  this.Ne = I && !J(526);
  this.cb = new Og(this)
}
var Wi;
B(Vi, Ti);
function Xi(a, b, c) {
  a = a.P.r.createElementNS("http://www.w3.org/2000/svg", b);
  c && Ki(a, c);
  return a
}
function Ki(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
n = Vi.prototype;
n.pb = function(a, b) {
  (b || this.G).b().appendChild(a.b())
};
n.xe = function(a, b) {
  var c = a.b();
  b instanceof xg ? (c.setAttribute("fill", b.fa()), c.setAttribute("fill-opacity", b.mc)) : c.setAttribute("fill", "none")
};
n.ye = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.fa());
    var d = b.nb;
    t(d) && d.indexOf("px") != -1 ? c.setAttribute("stroke-width", parseFloat(d) / Ui(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
n.h = function() {
  var a = Xi(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = Xi(this, "g");
  this.Nd = Xi(this, "defs");
  this.G = new Ji(b, this);
  a.appendChild(this.Nd);
  a.appendChild(b);
  this.e = a;
  if(this.ka || this.Ja || this.Za) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.Ne ? this.wd() : this.b().setAttribute("viewBox", this.Ja + " " + this.Za + " " + (this.ka ? this.ka + " " + this.Wb : ""))
  }
};
n.wd = function() {
  if(this.t && (this.ka || this.Ja || !this.Za)) {
    var a = this.W();
    if(a.width == 0) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.Ja, c = -this.Za, d = a.width / this.ka, a = a.height / this.Wb;
      this.G.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
n.ba = function(a, b) {
  Hg(this.b(), a, b)
};
n.W = function() {
  if(!kc) {
    return this.t ? Jg(this.b()) : Vi.d.W.call(this)
  }
  var a = this.width, b = this.height, c = t(a) && a.indexOf("%") != -1, d = t(b) && b.indexOf("%") != -1;
  if(!this.t && (c || d)) {
    return k
  }
  var f, g;
  if(c) {
    f = this.b().parentNode, g = Jg(f), a = parseFloat(a) * g.width / 100
  }
  d && (f = f || this.b().parentNode, g = g || Jg(f), b = parseFloat(b) * g.height / 100);
  return new S(a, b)
};
n.clear = function() {
  this.G.clear();
  ff(this.Nd);
  this.bf = {}
};
n.Kc = function(a, b, c, d, f, g, h) {
  a = Xi(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new Li(a, this, f, g);
  this.pb(f, h);
  return f
};
n.drawImage = function(a, b, c, d, f, g) {
  a = Xi(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new Mi(a, this);
  this.pb(f, g);
  return f
};
n.R = function() {
  var a = this.W();
  Vi.d.R.call(this);
  a || this.dispatchEvent("resize");
  if(this.Ne) {
    var a = this.width, b = this.height;
    typeof a == "string" && a.indexOf("%") != -1 && typeof b == "string" && b.indexOf("%") != -1 && U(this.cb, Yi(), pd, this.wd);
    this.wd()
  }
};
n.$a = function() {
  Vi.d.$a.call(this);
  this.Ne && Qg(this.cb, Yi(), pd, this.wd)
};
n.c = function() {
  delete this.bf;
  delete this.Nd;
  delete this.G;
  Vi.d.c.call(this)
};
function Yi() {
  Wi || (Wi = new nd(400), Wi.start());
  return Wi
}
;function Zi() {
  return this.e = this.ta.P.b(this.S) || this.e
}
function $i(a, b) {
  this.S = a.id;
  Y.call(this, a, b)
}
B($i, Gi);
$i.prototype.b = Zi;
$i.prototype.clear = function() {
  ff(this.b())
};
$i.prototype.ba = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  if(this.ta.G != this) {
    c.coordorigin = "0 0"
  }
};
function aj(a, b, c, d, f, g, h, j) {
  this.S = a.id;
  Z.call(this, a, b, h, j);
  this.Bi = c;
  this.Ci = d;
  this.Ui = f;
  this.Vi = g
}
B(aj, Hi);
aj.prototype.b = Zi;
function bj(a, b) {
  this.S = a.id;
  Y.call(this, a, b)
}
B(bj, Ii);
bj.prototype.b = Zi;
bj.prototype.ba = function(a, b) {
  var c = this.b().style;
  c.width = cj(a) + "px";
  c.height = cj(b) + "px"
};
function dj(a, b, c, d, f) {
  Ti.call(this, a, b, c, d, f);
  this.cb = new Og(this)
}
B(dj, Ti);
var ej = document.documentMode && document.documentMode >= 8;
function cj(a) {
  return Math.round((parseFloat(a.toString()) - 0.5) * 100)
}
function $(a) {
  return Math.round(parseFloat(a.toString()) * 100)
}
function fj(a, b) {
  var c = a.P.createElement("g_vml_:" + b);
  c.id = "goog_" + Ea++;
  return c
}
function gj(a) {
  if(ej && a.t) {
    a.b().innerHTML = a.b().innerHTML
  }
}
dj.prototype.pb = function(a, b) {
  (b || this.G).b().appendChild(a.b());
  gj(this)
};
dj.prototype.xe = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    f.tagName == "fill" && c.removeChild(f)
  }
  b instanceof xg ? b.fa() == "transparent" ? c.filled = !1 : b.mc != 1 ? (c.filled = !0, d = fj(this, "fill"), d.opacity = Math.round(b.mc * 100) + "%", d.color = b.fa(), c.appendChild(d)) : (c.filled = !0, c.fillcolor = b.fa()) : c.filled = !1;
  gj(this)
};
dj.prototype.ye = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = !0;
    var d = b.nb;
    t(d) && d.indexOf("px") == -1 ? d = parseFloat(d) : d *= Ui(this);
    var f = c.getElementsByTagName("stroke")[0];
    d < 1 ? (f = f || fj(this, "stroke"), f.opacity = d, f.Xi = "1px", f.color = b.fa(), c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.fa(), c.strokeweight = d + "px")
  }else {
    c.stroked = !1
  }
  gj(this)
};
function hj(a, b, c, d, f) {
  var g = a.style;
  g.position = "absolute";
  g.left = cj(b) + "px";
  g.top = cj(c) + "px";
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
n = dj.prototype;
n.h = function() {
  var a = this.P.r;
  if(!a.namespaces.g_vml_) {
    ej ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}"
  }
  var a = this.width, b = this.height, c = this.P.h("div", {style:"overflow:hidden;position:relative;width:" + (t(a) && qa(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (t(b) && qa(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = fj(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.ka ? $(this.ka) + " " + $(this.Wb) : $(a) + " " + $(b);
  d.coordorigin = ga(this.Ja) ? $(this.Ja) + " " + $(this.Za) : "0 0";
  c.appendChild(d);
  this.G = new $i(d, this);
  M(c, "resize", x(this.Zd, this))
};
n.Zd = function() {
  var a = Jg(this.b()), b = this.G.b().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.b();a && a.currentStyle && a.currentStyle.display != "none";) {
      a = a.parentNode
    }
    a && a.currentStyle && U(this.cb, a, "propertychange", this.Zd)
  }
  this.dispatchEvent("resize")
};
n.ba = function(a, b) {
  Hg(this.b(), a, b)
};
n.W = function() {
  var a = this.b();
  return new S(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
n.clear = function() {
  this.G.clear()
};
n.Kc = function(a, b, c, d, f, g, h) {
  var j = fj(this, "oval");
  hj(j, a - c, b - d, c * 2, d * 2);
  a = new aj(j, this, a, b, c, d, f, g);
  this.pb(a, h);
  return a
};
n.drawImage = function(a, b, c, d, f, g) {
  var h = fj(this, "image");
  hj(h, a, b, c, d);
  ej ? h.src = f : h.setAttribute("src", f);
  a = new bj(h, this);
  this.pb(a, g);
  return a
};
n.R = function() {
  dj.d.R.call(this);
  this.Zd();
  gj(this)
};
n.c = function() {
  this.G = k;
  dj.d.c.call(this)
};
function jj(a) {
  Y.call(this, k, a);
  this.O = []
}
B(jj, Gi);
jj.prototype.clear = function() {
  if(this.O.length) {
    this.O.length = 0, kj(this.ta)
  }
};
jj.prototype.ba = function() {
};
jj.prototype.appendChild = function(a) {
  this.O.push(a)
};
jj.prototype.za = function() {
  for(var a = 0, b = this.O.length;a < b;a++) {
    lj(this.ta, this.O[a])
  }
};
function mj(a, b, c, d, f, g, h, j) {
  Z.call(this, a, b, h, j);
  this.vg = c;
  this.wg = d;
  this.Xf = f;
  this.Yf = g;
  this.N = new Oi;
  this.N.clear();
  this.N.moveTo(this.vg + this.Xf * Math.cos(ue(0)), this.wg + this.Yf * Math.sin(ue(0)));
  this.N.arcTo(this.Xf, this.Yf, 0, 360);
  this.N.close();
  this.ah = new pj(k, b, this.N, h, j)
}
B(mj, Hi);
mj.prototype.za = function(a) {
  this.ah.za(a)
};
function pj(a, b, c, d, f) {
  Z.call(this, a, b, d, f);
  this.Kb(c)
}
B(pj, Fi);
pj.prototype.Yb = !1;
pj.prototype.Kb = function(a) {
  this.N = a.Mb ? a : Si(a);
  this.Yb && kj(this.ta)
};
pj.prototype.za = function(a) {
  this.Yb = !0;
  a.beginPath();
  Qi(this.N, function(b, c) {
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
function qj(a, b, c, d, f, g, h) {
  Y.call(this, a, b);
  this.xh = c;
  this.zh = d;
  this.Pe = f;
  this.Yd = g;
  this.lh = h
}
B(qj, Ii);
qj.prototype.Yb = !1;
qj.prototype.ba = function(a, b) {
  this.Pe = a;
  this.Yd = b;
  this.Yb && kj(this.ta)
};
qj.prototype.za = function(a) {
  this.uf ? (this.Pe && this.Yd && a.drawImage(this.uf, this.xh, this.zh, this.Pe, this.Yd), this.Yb = !0) : (a = new Image, a.onload = x(this.Lg, this, a), a.src = this.lh)
};
qj.prototype.Lg = function(a) {
  this.uf = a;
  kj(this.ta)
};
function rj(a, b, c, d, f) {
  Ti.call(this, a, b, c, d, f)
}
B(rj, Ti);
n = rj.prototype;
n.xe = function() {
  kj(this)
};
n.ye = function() {
  kj(this)
};
function sj(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.fg ? b.fg.I() : new Ei, f = d.ga, g = d.ha;
  (f || g) && c.translate(f, g);
  (d = d.T) && c.rotate(Math.asin(d))
}
n.h = function() {
  var a = this.P.h("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Ub = this.P.h("canvas");
  a.appendChild(this.Ub);
  this.Tg = this.G = new jj(this);
  this.gh = 0;
  tj(this)
};
n.getContext = function() {
  this.b() || this.h();
  if(!this.sb) {
    this.sb = this.Ub.getContext("2d"), this.sb.save()
  }
  return this.sb
};
n.ba = function(a, b) {
  this.width = a;
  this.height = b;
  tj(this);
  kj(this)
};
n.W = function() {
  var a = this.width, b = this.height, c = t(a) && a.indexOf("%") != -1, d = t(b) && b.indexOf("%") != -1;
  if(!this.t && (c || d)) {
    return k
  }
  var f, g;
  if(c) {
    f = this.b().parentNode, g = Jg(f), a = parseFloat(a) * g.width / 100
  }
  d && (f = f || this.b().parentNode, g = g || Jg(f), b = parseFloat(b) * g.height / 100);
  return new S(a, b)
};
function tj(a) {
  Hg(a.b(), a.width, a.height);
  var b = a.W();
  if(b) {
    Hg(a.Ub, b.width, b.height), a.Ub.width = b.width, a.Ub.height = b.height, a.sb = k
  }
}
n.reset = function() {
  var a = this.getContext();
  a.restore();
  var b = this.W();
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
function kj(a) {
  if(a.Ri) {
    a.Qi = !0
  }else {
    if(a.t) {
      a.reset();
      if(a.ka) {
        var b = a.W();
        a.getContext().scale(b.width / a.ka, b.height / a.Wb)
      }
      (a.Ja || a.Za) && a.getContext().translate(-a.Ja, -a.Za);
      sj(a, a.G);
      a.G.za(a.sb);
      a.getContext().restore()
    }
  }
}
function lj(a, b) {
  var c = a.getContext();
  sj(a, b);
  if(!b.Hg || !b.Jg) {
    b.za(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof xg) {
        if(d.mc != 0) {
          c.globalAlpha = d.mc, c.fillStyle = d.fa(), b.za(c), c.fill(), c.globalAlpha = 1
        }
      }else {
        var f = c.createLinearGradient(d.Hi(), d.Ji(), d.Ii(), d.Ki());
        f.addColorStop(0, d.Fi());
        f.addColorStop(1, d.Gi());
        c.fillStyle = f;
        b.za(c);
        c.fill()
      }
    }
    if(d = b.Je) {
      b.za(c), c.strokeStyle = d.fa(), d = d.nb, t(d) && d.indexOf("px") != -1 && (d = parseFloat(d) / Ui(a)), c.lineWidth = d, c.stroke()
    }
  }
  a.getContext().restore()
}
n.pb = function(a, b) {
  this.append(a, b)
};
n.append = function(a, b) {
  b = b || this.G;
  b.appendChild(a);
  this.t && !this.gh && !(b != this.G && b != this.Tg) && lj(this, a)
};
n.Kc = function(a, b, c, d, f, g, h) {
  a = new mj(k, this, a, b, c, d, f, g);
  this.append(a, h);
  return a
};
n.drawImage = function(a, b, c, d, f, g) {
  a = new qj(k, this, a, b, c, d, f);
  this.append(a, g);
  return a
};
n.c = function() {
  this.sb = k;
  rj.d.c.call(this)
};
n.R = function() {
  var a = this.W();
  rj.d.R.call(this);
  a || (tj(this), this.dispatchEvent("resize"));
  kj(this)
};
function uj(a) {
  this.z = [];
  vj(this, a)
}
B(uj, md);
n = uj.prototype;
n.Va = k;
n.we = k;
function vj(a, b) {
  b && (E(b, function(a) {
    this.uc(a, !1)
  }, a), db(a.z, b))
}
n.Xd = l("Va");
n.pd = function(a) {
  if(a != this.Va) {
    this.uc(this.Va, !1), this.Va = a, this.uc(a, !0)
  }
  this.dispatchEvent("select")
};
n.Wd = function() {
  return this.Va ? Va(this.z, this.Va) : -1
};
n.Be = function(a) {
  this.pd(this.z[a] || k)
};
n.clear = function() {
  $a(this.z);
  this.Va = k
};
n.c = function() {
  uj.d.c.call(this);
  delete this.z;
  this.Va = k
};
n.uc = function(a, b) {
  a && (typeof this.we == "function" ? this.we(a, b) : typeof a.Ae == "function" && a.Ae(b))
};
function wj() {
}
B(wj, Zg);
ea(wj);
var xj = 0;
wj.prototype.h = function(a) {
  var b = ah(this, a);
  return a.Da().h("div", b ? b.join(" ") : k, yj(this, a.da, a.lf(), a.Da()))
};
function yj(a, b, c, d) {
  for(var f = [], g = 0, h = 0;g < c.height;g++) {
    for(var j = [], m = 0;m < c.width;m++) {
      var p = b && b[h++];
      j.push(zj(a, p, d))
    }
    f.push(d.h("tr", a.v() + "-row", j))
  }
  return a.Ye(f, d)
}
wj.prototype.Ye = function(a, b) {
  var c = b.h("table", this.v() + "-table", b.h("tbody", this.v() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Yg(c, "grid");
  return c
};
function zj(a, b, c) {
  a = c.h("td", {"class":a.v() + "-cell", id:a.v() + "-cell-" + xj++}, b);
  Yg(a, "gridcell");
  return a
}
wj.prototype.ld = function(a, b) {
  if(a) {
    var c = Ye(document, "tbody", this.v() + "-body", a)[0];
    if(c) {
      var d = 0;
      E(c.rows, function(a) {
        E(a.cells, function(a) {
          ff(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = Ve(a), h = c.rows[0].cells.length;d < b.length;) {
          var j = b[d++];
          f.push(zj(this, j, g));
          if(f.length == h) {
            j = g.h("tr", this.v() + "-row", f), c.appendChild(j), f.length = 0
          }
        }
        if(f.length > 0) {
          for(;f.length < h;) {
            f.push(zj(this, "", g))
          }
          j = g.h("tr", this.v() + "-row", f);
          c.appendChild(j)
        }
      }
    }
    Ng(a, !0, kc)
  }
};
function Aj(a, b, c) {
  for(b = b.b();c && c.nodeType == 1 && c != b;) {
    if(c.tagName == "TD" && Za(Qe(c), a.v() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function Bj(a, b, c, d) {
  if(c) {
    c = c.parentNode, a = a.v() + "-cell-hover", d ? Re(c, a) : Se(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id)
  }
}
wj.prototype.v = ba("goog-palette");
function Cj(a, b, c) {
  W.call(this, a, b || wj.Na(), c)
}
B(Cj, W);
n = Cj.prototype;
n.w = k;
n.eb = -1;
n.J = k;
n.c = function() {
  Cj.d.c.call(this);
  if(this.J) {
    this.J.f(), this.J = k
  }
  this.w = k
};
n.md = function(a) {
  Cj.d.md.call(this, a);
  Dj(this);
  this.J ? (this.J.clear(), vj(this.J, a)) : (this.J = new uj(a), this.J.we = x(this.uc, this), U(Vg(this), this.J, "select", this.Og));
  this.eb = -1
};
n.kf = ba(k);
n.Xc = function(a) {
  Cj.d.Xc.call(this, a);
  var b = Aj(this.m, this, a.target);
  if((!b || !a.relatedTarget || !hf(b, a.relatedTarget)) && b != Ej(this)) {
    a = this.da, Fj(this, a ? Va(a, b) : -1)
  }
};
n.Wc = function(a) {
  Cj.d.Wc.call(this, a);
  var b = Aj(this.m, this, a.target);
  (!b || !a.relatedTarget || !hf(b, a.relatedTarget)) && b == Ej(this) && Bj(this.m, this, b, !1)
};
n.Vc = function(a) {
  Cj.d.Vc.call(this, a);
  if(this.fe() && (a = Aj(this.m, this, a.target), a != Ej(this))) {
    var b = this.da;
    Fj(this, b ? Va(b, a) : -1)
  }
};
n.hb = function() {
  var a = Ej(this);
  return a ? (this.pd(a), this.dispatchEvent("action")) : !1
};
n.qf = function(a) {
  var b = this.da, b = b ? b.length : 0, c = this.w.width;
  if(b == 0 || !this.isEnabled()) {
    return!1
  }
  if(a.keyCode == 13 || a.keyCode == 32) {
    return this.hb(a)
  }
  if(a.keyCode == 36) {
    return Fj(this, 0), !0
  }else {
    if(a.keyCode == 35) {
      return Fj(this, b - 1), !0
    }
  }
  var d = this.eb < 0 ? this.Wd() : this.eb;
  switch(a.keyCode) {
    case 37:
      d == -1 && (d = b);
      if(d > 0) {
        return Fj(this, d - 1), a.preventDefault(), !0
      }
      break;
    case 39:
      if(d < b - 1) {
        return Fj(this, d + 1), a.preventDefault(), !0
      }
      break;
    case 38:
      d == -1 && (d = b + c - 1);
      if(d >= c) {
        return Fj(this, d - c), a.preventDefault(), !0
      }
      break;
    case 40:
      if(d == -1 && (d = -c), d < b - c) {
        return Fj(this, d + c), a.preventDefault(), !0
      }
  }
  return!1
};
n.Og = function() {
};
n.lf = l("w");
n.ba = function(a, b) {
  this.b() && e(Error("Component already rendered"));
  this.w = ka(a) ? new S(a, b) : a;
  Dj(this)
};
function Ej(a) {
  var b = a.da;
  return b && b[a.eb]
}
function Fj(a, b) {
  if(b != a.eb) {
    Gj(a, a.eb, !1), a.eb = b, Gj(a, b, !0)
  }
}
n.Wd = function() {
  return this.J ? this.J.Wd() : -1
};
n.Xd = function() {
  return this.J ? this.J.Xd() : k
};
n.Be = function(a) {
  this.J && this.J.Be(a)
};
n.pd = function(a) {
  this.J && this.J.pd(a)
};
function Gj(a, b, c) {
  if(a.b()) {
    var d = a.da;
    d && b >= 0 && b < d.length && Bj(a.m, a, d[b], c)
  }
}
n.uc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.m.v() + "-cell-selected";
    b ? Re(c, d) : Se(c, d)
  }
};
function Dj(a) {
  var b = a.da;
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
;function Hj(a, b, c) {
  this.Gc = a || [];
  Cj.call(this, k, b || wj.Na(), c);
  this.Gc = this.Gc;
  this.fd = k;
  this.ld(Ij(this))
}
B(Hj, Cj);
Hj.prototype.fd = k;
function Jj(a) {
  var b = Kj(Lj);
  if(!a.fd) {
    a.fd = Wa(a.Gc, function(a) {
      return Kj(a)
    })
  }
  a.Be(b ? Va(a.fd, b) : -1)
}
function Ij(a) {
  return Wa(a.Gc, function(a) {
    var c = this.Da().h("div", {"class":this.m.v() + "-colorswatch", style:"background-color:" + a});
    c.title = a.charAt(0) == "#" ? "RGB (" + Ih(a).join(", ") + ")" : a;
    return c
  }, a)
}
function Kj(a) {
  if(a) {
    try {
      return Ch(a).Zc
    }catch(b) {
    }
  }
  return k
}
;var zg = Q("whiteboard.logger");
window.onerror = function(a, b, c) {
  he(zg, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Mj() {
  this.se = new Bb
}
function tg(a, b) {
  zg.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  Nj = k
}
Mj.prototype.reset = function(a) {
  zg.info("resetting with reason: " + a);
  this.D.reset(a)
};
var Nj = k, wi = new Dd(o.window);
function Oj() {
  Nj && (Nj.reset("idle timeout fired"), Nj = k)
}
var Pj = k;
function Qj() {
  Pj != k && wi.M.clearTimeout(Pj);
  Nj && (Pj = wi.M.setTimeout(Oj, 2592E5))
}
M(window, ["click", "focus", "keydown", "keypress"], Qj, !0);
function Rj() {
  var a = new si;
  Nj = new Mj;
  Qj();
  xd(vi(), function(b) {
    Nj || e(Error("lastProto falsy?"));
    b = new fg(wi, Nj, b, a);
    Nj.D = b;
    lg(Nj.D, ["subprotocol:whiteboard"]);
    b.start();
    return k
  })
}
function Sj() {
  sb.f();
  yg();
  var a = Nj;
  zg.info("Telling server to clear the board.");
  var b = a.D, a = [2, a.se.lb(new yb)], a = (new Eb).lb(a);
  lg(b, [a])
}
function Tj(a) {
  var b = new Gc(a), a = b.offsetX, c = b.offsetY;
  sb.Kc(a, c, 5, 5, new wg(1, "black"), new xg(tb), i);
  var d = Nj, f = tb;
  zg.info("Telling server about circle at: " + a + ", " + c + " with color " + f);
  var b = d.D, g = new xb;
  nb(g, 1, a);
  nb(g, 2, c);
  nb(g, 3, f);
  a = d.se.lb(g);
  lg(b, [(new Eb).lb([1, a])])
}
function yg() {
  var a;
  a = H && !J("9") ? new dj(800, 600, i, i, i) : I && (!J("420") || lc) ? new rj(800, 600, i, i, i) : new Vi(800, 600, i, i, i);
  a.h();
  ub = T("drawArea");
  Wg(a, ub);
  sb = a
}
var Lj = "#E06666";
function Uj(a) {
  var b;
  (a = a.target.Xd()) ? (a = a.style[Ga("background-color")] || "", b = Kj(a)) : b = k;
  b || (b = Lj);
  tb = b;
  qi.set("whiteboard_defaultColor", b);
  a = T("whiteboard-cp-value");
  t("background-color") ? Fg(a, b, "background-color") : Qa("background-color", pa(Fg, a));
  a = T("whiteboard-cp-value");
  a.title = b;
  b = Ch(b).Zc;
  jf(a, b);
  b = Ih(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = Gh(b[0], b[1], b[2]);
  t("color") ? Fg(a, b, "color") : Qa("color", pa(Fg, a))
}
function Vj() {
  vb = (new mg(document.location)).ia;
  if(wb = Boolean(Number(vb.get("logging", "0")))) {
    le().od(fe);
    var a = new Di(document.getElementById("log"));
    if(!0 != a.wf) {
      var b = le(), c = a.eh;
      if(!b.gc) {
        b.gc = []
      }
      b.gc.push(c);
      a.wf = !0
    }
  }else {
    le().od(Yd)
  }
  zg.info("Logger works.");
  (a = qi.get("whiteboard_defaultColor")) && (Lj = a);
  tb = Lj;
  b = T("whiteboard-controls-left");
  a = T("whiteboard-controls-right");
  c = af("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  ef(b, c);
  c = af("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  ef(b, c);
  b = new Hj("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.ba(8);
  Wg(b, T("whiteboard-cp"));
  M(b, "action", Uj);
  Jj(b);
  Uj({target:b});
  b = new Ah("Clear board");
  ph(b, "clear-board-button");
  Wg(b, a);
  M(b, "action", Sj);
  a = T("drawAreaOverlay");
  Ng(a, !0);
  M(a, "click", Tj, !1);
  yg();
  Rj()
}
var Wj = "__whiteboard_init".split("."), Xj = o;
!(Wj[0] in Xj) && Xj.execScript && Xj.execScript("var " + Wj[0]);
for(var Yj;Wj.length && (Yj = Wj.shift());) {
  !Wj.length && ga(Vj) ? Xj[Yj] = Vj : Xj = Xj[Yj] ? Xj[Yj] : Xj[Yj] = {}
}
;})();
