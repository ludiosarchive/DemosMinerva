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
    return a.Eg || (a.Eg = new a)
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
  this.Zb = c.Rd;
  this.Bf = c.type;
  this.Ze = !1;
  switch(this.Zb) {
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
  this.mi = c.defaultValue
}
var Ka = 3, La = 4, Ma = 6, Na = 16, Oa = 18;
function Pa(a) {
  return a.Zb == 11 || a.Zb == 10
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
  this.ji = b.ii;
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
  this.w = {};
  this.wb = this.constructor.wb;
  var a = this.wb.Ma, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.Ma = b;
  this.Wb = this.ge = k
}
function mb(a, b) {
  for(var c in a.w) {
    a.Ma[c] || b.call(a, c, a.w[c])
  }
}
n = lb.prototype;
n.bc = l("wb");
n.get = function(a, b) {
  return nb(this, a.H, b)
};
n.set = function(a, b) {
  ob(this, a.H, b)
};
n.add = function(a, b) {
  var c = a.H;
  this.w[c] || (this.w[c] = []);
  this.w[c].push(b)
};
n.clear = function(a) {
  delete this.w[a.H]
};
n.n = function(a) {
  if(!a || this.constructor != a.constructor) {
    return!1
  }
  for(var b = kb(this.bc()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(pb(this, d.H) != pb(a, d.H)) {
      return!1
    }
    if(pb(this, d.H)) {
      var f = Pa(d), g = d.H, h = this.w[g], g = a.w[g];
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
  for(var b = kb(this.bc()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete this.w[d.H];
    if(pb(a, d.H)) {
      var f = Pa(d);
      if(d.Ab) {
        var g;
        g = a;
        var h = d.H;
        qb(g, g.Ma[h]);
        g = g.w[h] || [];
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
function pb(a, b) {
  return b in a.w && ga(a.w[b])
}
function qb(a, b) {
  if(a.ge) {
    var c = b.H;
    if(!(c in a.Wb)) {
      var d = a.w, f;
      f = a.ge;
      var g = a.w[c];
      if(g == k) {
        f = g
      }else {
        if(b.Ab) {
          var h = [];
          s(g);
          for(var j = 0;j < g.length;j++) {
            h[j] = f.Nc(b, g[j])
          }
          f = h
        }else {
          f = f.Nc(b, g)
        }
      }
      d[c] = f;
      a.Wb[c] = !0
    }
  }
}
function nb(a, b, c) {
  var d = a.Ma[b];
  qb(a, d);
  return d.Ab ? (c = c || 0, rb(a, b), a.w[b][c]) : (s(a.w[b]), a.w[b])
}
function rb(a, b) {
  return a.Ma[b].Ab ? (pb(a, b) && s(a.w[b]), pb(a, b) ? a.w[b].length : 0) : pb(a, b) ? 1 : 0
}
function ob(a, b, c) {
  a.w[b] = c;
  a.Wb && (a.Wb[b] = !0)
}
function sb(a, b) {
  var c = [], d, f;
  for(f in b) {
    b.hasOwnProperty(f) && (f == 0 ? d = b[0] : c.push(new Ja(a, f, b[f])))
  }
  a.wb = new jb(a, d, c);
  a.bc = function() {
    return a.wb
  }
}
;var tb, ub, vb, wb, xb;
function yb() {
  lb.apply(this)
}
z(yb, lb);
yb.prototype.ea = function() {
  return nb(this, 3)
};
function zb() {
  lb.apply(this)
}
z(zb, lb);
sb(yb, {0:{name:"Point", cf:"demosminerva.whiteboard_messages.Point"}, 1:{name:"x", Rd:5, type:Number}, 2:{name:"y", Rd:5, type:Number}, 3:{name:"color", Rd:9, type:String}});
sb(zb, {0:{name:"ClearBoard", cf:"demosminerva.whiteboard_messages.ClearBoard"}});
function Ab() {
}
Ab.prototype.Oc = function(a, b) {
  return Pa(a) ? this.ob(b) : b
};
Ab.prototype.Ld = function(a) {
  new a.zf;
  e(Error("Unimplemented"))
};
Ab.prototype.Nc = function(a, b) {
  if(Pa(a)) {
    return this.Ld(a.Bf.wb, b)
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
function Bb() {
}
z(Bb, Ab);
Bb.prototype.Ld = function(a, b) {
  var c = new a.zf;
  c.ge = this;
  c.w = b;
  c.Wb = {};
  return c
};
function Cb() {
}
z(Cb, Bb);
Cb.prototype.ob = function(a) {
  for(var b = kb(a.bc()), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    if(pb(a, f.H)) {
      var g = f.H;
      if(f.Ab) {
        c[g] = [];
        for(var h = 0;h < rb(a, f.H);h++) {
          c[g][h] = this.Oc(f, a.get(f, h))
        }
      }else {
        c[g] = this.Oc(f, a.get(f))
      }
    }
  }
  mb(a, function(a, b) {
    c[a] = b
  });
  return c
};
Cb.prototype.Oc = function(a, b) {
  return a.Zb == 8 ? b ? 1 : 0 : Ab.prototype.Oc.apply(this, arguments)
};
Cb.prototype.Nc = function(a, b) {
  return a.Zb == 8 ? b === 1 : Ab.prototype.Nc.apply(this, arguments)
};
function Db(a) {
  return v(a) || typeof a == "object" && v(a.call) && v(a.apply)
}
;function Eb(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
function Fb() {
}
Fb.prototype.ob = function(a) {
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
var Ib = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\u000b"}, Jb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
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
        Hb(a, b)
      }else {
        if(Db(a.F)) {
          a.F(b, c)
        }else {
          if(Db(a.eg)) {
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
function Mb(a) {
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
function Nb(a) {
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
function Ob(a, b, c) {
  if(typeof a.forEach == "function") {
    a.forEach(b, c)
  }else {
    if(ha(a) || t(a)) {
      Wa(a, b, c)
    }else {
      for(var d = Nb(a), f = Mb(a), g = f.length, h = 0;h < g;h++) {
        b.call(c, f[h], d && d[h], a)
      }
    }
  }
}
function Pb(a, b) {
  if(typeof a.every == "function") {
    return a.every(b, i)
  }
  if(ha(a) || t(a)) {
    return Za(a, b, i)
  }
  for(var c = Nb(a), d = Mb(a), f = d.length, g = 0;g < f;g++) {
    if(!b.call(i, d[g], c && c[g], a)) {
      return!1
    }
  }
  return!0
}
;function Qb(a, b) {
  this.p = {};
  this.h = [];
  var c = arguments.length;
  if(c > 1) {
    c % 2 && e(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.zd(a)
  }
}
n = Qb.prototype;
n.g = 0;
n.Je = 0;
n.U = l("g");
n.W = function() {
  Rb(this);
  for(var a = [], b = 0;b < this.h.length;b++) {
    a.push(this.p[this.h[b]])
  }
  return a
};
n.Ea = function() {
  Rb(this);
  return this.h.concat()
};
n.ba = function(a) {
  return Sb(this.p, a)
};
n.Gc = function(a) {
  for(var b = 0;b < this.h.length;b++) {
    var c = this.h[b];
    if(Sb(this.p, c) && this.p[c] == a) {
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
  var c = b || Tb;
  Rb(this);
  for(var d, f = 0;d = this.h[f];f++) {
    if(!c(this.get(d), a.get(d))) {
      return!1
    }
  }
  return!0
};
function Tb(a, b) {
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
  return Sb(this.p, a) ? (delete this.p[a], this.g--, this.Je++, this.h.length > 2 * this.g && Rb(this), !0) : !1
};
function Rb(a) {
  if(a.g != a.h.length) {
    for(var b = 0, c = 0;b < a.h.length;) {
      var d = a.h[b];
      Sb(a.p, d) && (a.h[c++] = d);
      b++
    }
    a.h.length = c
  }
  if(a.g != a.h.length) {
    for(var f = {}, c = b = 0;b < a.h.length;) {
      d = a.h[b], Sb(f, d) || (a.h[c++] = d, f[d] = 1), b++
    }
    a.h.length = c
  }
}
n.get = function(a, b) {
  return Sb(this.p, a) ? this.p[a] : b
};
n.set = function(a, b) {
  Sb(this.p, a) || (this.g++, this.h.push(a), this.Je++);
  this.p[a] = b
};
n.zd = function(a) {
  var b;
  a instanceof Qb ? (b = a.Ea(), a = a.W()) : (b = Sa(a), a = Ra(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
n.L = function() {
  return new Qb(this)
};
function Ub(a) {
  Rb(a);
  for(var b = {}, c = 0;c < a.h.length;c++) {
    var d = a.h[c];
    b[d] = a.p[d]
  }
  return b
}
function Sb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function Vb(a) {
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
;function Wb(a, b) {
  this.rb = a;
  this.nb = b
}
Wb.prototype.n = function(a) {
  return a instanceof Wb && this.rb == a.rb && this.nb.join(",") == a.nb
};
Wb.prototype.F = function(a, b) {
  a.push("new SACK(", String(this.rb), ", ");
  E(this.nb, a, b);
  a.push(")")
};
function Xb() {
  this.z = new Qb
}
n = Xb.prototype;
n.vb = -1;
n.v = 0;
n.append = function(a) {
  var b = Vb(a);
  this.z.set(this.vb + 1, [a, b]);
  this.vb += 1;
  this.v += b
};
n.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
n.F = function(a) {
  a.push("<Queue with ", String(this.z.U()), " item(s), counter=#", String(this.vb), ", size=", String(this.v), ">")
};
function Yb(a) {
  Rb(a.z);
  hb(a.z.h);
  return a.z.h
}
function Zb() {
  this.Za = new Qb
}
Zb.prototype.Cb = -1;
Zb.prototype.v = 0;
function $b(a) {
  var b = a.Za.Ea();
  hb(b);
  return new Wb(a.Cb, b)
}
var ac = {};
function bc() {
  return!0
}
;var cc, dc, ec, fc, gc;
function hc() {
  return o.navigator ? o.navigator.userAgent : k
}
gc = fc = ec = dc = cc = !1;
var ic;
if(ic = hc()) {
  var jc = o.navigator;
  cc = ic.indexOf("Opera") == 0;
  dc = !cc && ic.indexOf("MSIE") != -1;
  fc = (ec = !cc && ic.indexOf("WebKit") != -1) && ic.indexOf("Mobile") != -1;
  gc = !cc && !ec && jc.product == "Gecko"
}
var kc = cc, G = dc, lc = gc, H = ec, mc = fc, nc = o.navigator, oc = (nc && nc.platform || "").indexOf("Mac") != -1, pc;
a: {
  var qc = "", rc;
  if(kc && o.opera) {
    var sc = o.opera.version, qc = typeof sc == "function" ? sc() : sc
  }else {
    if(lc ? rc = /rv\:([^\);]+)(\)|;)/ : G ? rc = /MSIE\s+([^\);]+)(\)|;)/ : H && (rc = /WebKit\/(\S+)/), rc) {
      var tc = rc.exec(hc()), qc = tc ? tc[1] : ""
    }
  }
  if(G) {
    var uc, vc = o.document;
    uc = vc ? vc.documentMode : i;
    if(uc > parseFloat(qc)) {
      pc = String(uc);
      break a
    }
  }
  pc = qc
}
var wc = {};
function I(a) {
  return wc[a] || (wc[a] = Ca(pc, a) >= 0)
}
;var xc;
var yc = {oh:"click", th:"dblclick", Oh:"mousedown", Sh:"mouseup", Rh:"mouseover", Qh:"mouseout", Ph:"mousemove", bi:"selectstart", Ih:"keypress", Hh:"keydown", Jh:"keyup", mh:"blur", Bh:"focus", uh:"deactivate", Ch:G ? "focusin" : "DOMFocusIn", Dh:G ? "focusout" : "DOMFocusOut", nh:"change", ai:"select", ci:"submit", Gh:"input", Xh:"propertychange", yh:"dragstart", vh:"dragenter", xh:"dragover", wh:"dragleave", zh:"drop", gi:"touchstart", fi:"touchmove", ei:"touchend", di:"touchcancel", qh:"contextmenu", 
Ah:"error", Fh:"help", Kh:"load", Lh:"losecapture", Yh:"readystatechange", Zh:"resize", $h:"scroll", hi:"unload", Eh:"hashchange", Th:"pagehide", Uh:"pageshow", Wh:"popstate", rh:"copy", Vh:"paste", sh:"cut", Nh:"message", ph:"connect"};
var zc = !G || I("9"), Ac = G && !I("8");
function J() {
}
J.prototype.qa = !1;
J.prototype.f = function() {
  if(!this.qa) {
    this.qa = !0, this.c()
  }
};
J.prototype.c = function() {
  this.og && Bc.apply(k, this.og)
};
function Bc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? Bc.apply(k, d) : d && typeof d.f == "function" && d.f()
  }
}
;function Cc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
z(Cc, J);
n = Cc.prototype;
n.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
n.lb = !1;
n.qc = !0;
n.stopPropagation = function() {
  this.lb = !0
};
n.preventDefault = function() {
  this.qc = !1
};
function Dc(a) {
  a.stopPropagation()
}
;var Ec = new Function("a", "return a");
function Fc(a, b) {
  a && this.fc(a, b)
}
z(Fc, Cc);
var Gc = [1, 4, 2];
n = Fc.prototype;
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
n.Pg = !1;
n.Ba = k;
n.fc = function(a, b) {
  var c = this.type = a.type;
  Cc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(lc) {
      var f;
      a: {
        try {
          Ec(d.nodeName);
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
  this.Pg = oc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Ba = a;
  delete this.qc;
  delete this.lb
};
function Hc(a) {
  return zc ? a.Ba.button == 0 : a.type == "click" ? !0 : !!(a.Ba.button & Gc[0])
}
n.stopPropagation = function() {
  Fc.d.stopPropagation.call(this);
  this.Ba.stopPropagation ? this.Ba.stopPropagation() : this.Ba.cancelBubble = !0
};
n.preventDefault = function() {
  Fc.d.preventDefault.call(this);
  var a = this.Ba;
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
n.c = function() {
  Fc.d.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Ba = k
};
function Ic() {
}
var Jc = 0;
n = Ic.prototype;
n.key = 0;
n.mb = !1;
n.Cd = !1;
n.fc = function(a, b, c, d, f, g) {
  v(a) ? this.rf = !0 : a && a.handleEvent && v(a.handleEvent) ? this.rf = !1 : e(Error("Invalid listener argument"));
  this.Fb = a;
  this.Jf = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Vc = g;
  this.Cd = !1;
  this.key = ++Jc;
  this.mb = !1
};
n.handleEvent = function(a) {
  return this.rf ? this.Fb.call(this.Vc || this.src, a) : this.Fb.handleEvent.call(this.Fb, a)
};
var Kc, Lc = (Kc = "ScriptEngine" in o && o.ScriptEngine() == "JScript") ? o.ScriptEngineMajorVersion() + "." + o.ScriptEngineMinorVersion() + "." + o.ScriptEngineBuildVersion() : "0";
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
function Mc(a, b) {
  a.eb.length < a.vf ? a.eb.push(b) : Nc(a, b)
}
function Nc(a, b) {
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
    Nc(this, a.pop())
  }
  delete this.eb
};
var Oc, Pc, Qc, Rc, Sc, Tc, Uc, Vc, Wc, Xc, Yc;
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
    return new Ic
  }
  function f() {
    return new Fc
  }
  var g = Kc && !(Ca(Lc, "5.7") >= 0), h;
  Tc = function(a) {
    h = a
  };
  if(g) {
    Oc = function() {
      return j.getObject()
    };
    Pc = function(a) {
      Mc(j, a)
    };
    Qc = function() {
      return m.getObject()
    };
    Rc = function(a) {
      Mc(m, a)
    };
    Sc = function() {
      return p.getObject()
    };
    Uc = function() {
      Mc(p, c())
    };
    Vc = function() {
      return A.getObject()
    };
    Wc = function(a) {
      Mc(A, a)
    };
    Xc = function() {
      return r.getObject()
    };
    Yc = function(a) {
      Mc(r, a)
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
    Oc = a, Pc = q, Qc = b, Rc = q, Sc = c, Uc = q, Vc = d, Wc = q, Xc = f, Yc = q
  }
})();
var Zc = {}, L = {}, $c = {}, ad = {};
function M(a, b, c, d, f) {
  if(b) {
    if(s(b)) {
      for(var g = 0;g < b.length;g++) {
        M(a, b[g], c, d, f)
      }
      return k
    }else {
      var d = !!d, h = L;
      b in h || (h[b] = Oc());
      h = h[b];
      d in h || (h[d] = Oc(), h.g++);
      var h = h[d], j = w(a), m;
      h.la++;
      if(h[j]) {
        m = h[j];
        for(g = 0;g < m.length;g++) {
          if(h = m[g], h.Fb == c && h.Vc == f) {
            if(h.mb) {
              break
            }
            return m[g].key
          }
        }
      }else {
        m = h[j] = Qc(), h.g++
      }
      g = Sc();
      g.src = a;
      h = Vc();
      h.fc(c, g, a, b, d, f);
      c = h.key;
      g.key = c;
      m.push(h);
      Zc[c] = h;
      $c[j] || ($c[j] = Qc());
      $c[j].push(h);
      a.addEventListener ? (a == o || !a.Id) && a.addEventListener(b, g, d) : a.attachEvent(b in ad ? ad[b] : ad[b] = "on" + b, g);
      return c
    }
  }else {
    e(Error("Invalid event type"))
  }
}
function bd(a, b, c, d, f) {
  if(s(b)) {
    for(var g = 0;g < b.length;g++) {
      bd(a, b[g], c, d, f)
    }
    return k
  }
  a = M(a, b, c, d, f);
  Zc[a].Cd = !0;
  return a
}
function cd(a, b, c, d, f) {
  if(s(b)) {
    for(var g = 0;g < b.length;g++) {
      cd(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = dd(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Fb == c && a[g].capture == d && a[g].Vc == f) {
          ed(a[g].key);
          break
        }
      }
    }
  }
}
function ed(a) {
  if(Zc[a]) {
    var b = Zc[a];
    if(!b.mb) {
      var c = b.src, d = b.type, f = b.Jf, g = b.capture;
      c.removeEventListener ? (c == o || !c.Id) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in ad ? ad[d] : ad[d] = "on" + d, f);
      c = w(c);
      f = L[d][g][c];
      if($c[c]) {
        var h = $c[c];
        bb(h, b);
        h.length == 0 && delete $c[c]
      }
      b.mb = !0;
      f.Df = !0;
      fd(d, g, c, f);
      delete Zc[a]
    }
  }
}
function fd(a, b, c, d) {
  if(!d.bd && d.Df) {
    for(var f = 0, g = 0;f < d.length;f++) {
      if(d[f].mb) {
        var h = d[f].Jf;
        h.src = k;
        Uc(h);
        Wc(d[f])
      }else {
        f != g && (d[g] = d[f]), g++
      }
    }
    d.length = g;
    d.Df = !1;
    g == 0 && (Rc(d), delete L[a][b][c], L[a][b].g--, L[a][b].g == 0 && (Pc(L[a][b]), delete L[a][b], L[a].g--), L[a].g == 0 && (Pc(L[a]), delete L[a]))
  }
}
function gd(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Qa($c, function(a) {
      for(var f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          ed(g.key), c++
        }
      }
    })
  }else {
    if(a = w(a), $c[a]) {
      for(var a = $c[a], f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          ed(g.key), c++
        }
      }
    }
  }
}
function dd(a, b, c) {
  var d = L;
  return b in d && (d = d[b], c in d && (d = d[c], a = w(a), d[a])) ? d[a] : k
}
function hd(a, b, c, d, f) {
  var g = 1, b = w(b);
  if(a[b]) {
    a.la--;
    a = a[b];
    a.bd ? a.bd++ : a.bd = 1;
    try {
      for(var h = a.length, j = 0;j < h;j++) {
        var m = a[j];
        m && !m.mb && (g &= id(m, f) !== !1)
      }
    }finally {
      a.bd--, fd(c, d, b, a)
    }
  }
  return Boolean(g)
}
function id(a, b) {
  var c = a.handleEvent(b);
  a.Cd && ed(a.key);
  return c
}
Tc(function(a, b) {
  if(!Zc[a]) {
    return!0
  }
  var c = Zc[a], d = c.type, f = L;
  if(!(d in f)) {
    return!0
  }
  var f = f[d], g, h;
  xc === i && (xc = G && !o.addEventListener);
  if(xc) {
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
    p = Xc();
    p.fc(g, this);
    g = !0;
    try {
      if(j) {
        for(var r = Qc(), u = p.currentTarget;u;u = u.parentNode) {
          r.push(u)
        }
        h = f[!0];
        h.la = h.g;
        for(var B = r.length - 1;!p.lb && B >= 0 && h.la;B--) {
          p.currentTarget = r[B], g &= hd(h, r[B], d, !0, p)
        }
        if(m) {
          h = f[!1];
          h.la = h.g;
          for(B = 0;!p.lb && B < r.length && h.la;B++) {
            p.currentTarget = r[B], g &= hd(h, r[B], d, !1, p)
          }
        }
      }else {
        g = id(c, p)
      }
    }finally {
      if(r) {
        r.length = 0, Rc(r)
      }
      p.f();
      Yc(p)
    }
    return g
  }
  d = new Fc(b, this);
  try {
    g = id(c, d)
  }finally {
    d.f()
  }
  return g
});
var jd = 0;
function kd() {
}
z(kd, J);
n = kd.prototype;
n.Id = !0;
n.ed = k;
n.ve = aa("ed");
n.addEventListener = function(a, b, c, d) {
  M(this, a, b, c, d)
};
n.removeEventListener = function(a, b, c, d) {
  cd(this, a, b, c, d)
};
n.dispatchEvent = function(a) {
  var b = a.type || a, c = L;
  if(b in c) {
    if(t(a)) {
      a = new Cc(a, this)
    }else {
      if(a instanceof Cc) {
        a.target = a.target || this
      }else {
        var d = a, a = new Cc(b, this);
        Ua(a, d)
      }
    }
    var d = 1, f, c = c[b], b = !0 in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.ed) {
        f.push(g)
      }
      g = c[!0];
      g.la = g.g;
      for(var h = f.length - 1;!a.lb && h >= 0 && g.la;h--) {
        a.currentTarget = f[h], d &= hd(g, f[h], a.type, !0, a) && a.qc != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.la = g.g, b) {
        for(h = 0;!a.lb && h < f.length && g.la;h++) {
          a.currentTarget = f[h], d &= hd(g, f[h], a.type, !1, a) && a.qc != !1
        }
      }else {
        for(f = this;!a.lb && f && g.la;f = f.ed) {
          a.currentTarget = f, d &= hd(g, f, a.type, !1, a) && a.qc != !1
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
  kd.d.c.call(this);
  gd(this);
  this.ed = k
};
function ld(a, b) {
  this.Yc = a || 1;
  this.wc = b || md;
  this.Bd = x(this.ah, this);
  this.fe = y()
}
z(ld, kd);
ld.prototype.enabled = !1;
var md = o.window;
n = ld.prototype;
n.oa = k;
n.ah = function() {
  if(this.enabled) {
    var a = y() - this.fe;
    if(a > 0 && a < this.Yc * 0.8) {
      this.oa = this.wc.setTimeout(this.Bd, this.Yc - a)
    }else {
      if(this.dispatchEvent(nd), this.enabled) {
        this.oa = this.wc.setTimeout(this.Bd, this.Yc), this.fe = y()
      }
    }
  }
};
n.start = function() {
  this.enabled = !0;
  if(!this.oa) {
    this.oa = this.wc.setTimeout(this.Bd, this.Yc), this.fe = y()
  }
};
n.stop = function() {
  this.enabled = !1;
  if(this.oa) {
    this.wc.clearTimeout(this.oa), this.oa = k
  }
};
n.c = function() {
  ld.d.c.call(this);
  this.stop();
  delete this.wc
};
var nd = "tick";
jd++;
jd++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function od(a, b) {
  this.Dc = [];
  this.Ne = a;
  this.We = b || k
}
n = od.prototype;
n.cb = !1;
n.cc = !1;
n.lc = 0;
n.Ae = !1;
n.kg = !1;
n.cancel = function() {
  if(this.cb) {
    this.pc instanceof od && this.pc.cancel()
  }else {
    if(this.Ne ? this.Ne.call(this.We, this) : this.Ae = !0, !this.cb) {
      var a = new pd(this);
      qd(this);
      rd(this, !1, a)
    }
  }
};
n.Qe = function(a, b) {
  rd(this, a, b);
  this.lc--;
  this.lc == 0 && this.cb && sd(this)
};
function rd(a, b, c) {
  a.cb = !0;
  a.pc = c;
  a.cc = !b;
  sd(a)
}
function qd(a) {
  if(a.cb) {
    a.Ae || e(new td(a)), a.Ae = !1
  }
}
function ud(a, b) {
  qd(a);
  rd(a, !0, b)
}
function vd(a, b) {
  wd(a, b, k, i)
}
function wd(a, b, c, d) {
  a.Dc.push([b, c, d]);
  a.cb && sd(a)
}
function xd(a, b) {
  wd(a, b, b, i)
}
function yd(a) {
  return Ya(a.Dc, function(a) {
    return v(a[1])
  })
}
function sd(a) {
  a.Ge && a.cb && yd(a) && (o.clearTimeout(a.Ge), delete a.Ge);
  for(var b = a.pc, c = !1, d = !1;a.Dc.length && a.lc == 0;) {
    var f = a.Dc.shift(), g = f[0], h = f[1], f = f[2];
    if(g = a.cc ? h : g) {
      try {
        var j = g.call(f || a.We, b);
        if(ga(j)) {
          a.cc = a.cc && (j == b || j instanceof Error), a.pc = b = j
        }
        b instanceof od && (d = !0, a.lc++)
      }catch(m) {
        b = m, a.cc = !0, yd(a) || (c = !0)
      }
    }
  }
  a.pc = b;
  if(d && a.lc) {
    wd(b, x(a.Qe, a, !0), x(a.Qe, a, !1)), b.kg = !0
  }
  if(c) {
    a.Ge = o.setTimeout(function() {
      e(b)
    }, 0)
  }
}
function zd(a) {
  var b = new od;
  ud(b, a);
  return b
}
function Ad(a) {
  var b = new od;
  qd(b);
  rd(b, !1, a);
  return b
}
function td(a) {
  C.call(this);
  this.ng = a
}
z(td, C);
td.prototype.message = "Already called";
function pd(a) {
  C.call(this);
  this.ng = a
}
z(pd, C);
pd.prototype.message = "Deferred was cancelled";
function Bd(a) {
  this.M = a;
  this.Kc = [];
  this.af = [];
  this.jg = x(this.fh, this)
}
Bd.prototype.oa = k;
function Cd(a, b, c, d) {
  a.Kc.push([b, c, d]);
  if(a.oa == k) {
    a.oa = a.M.setTimeout(a.jg, 0)
  }
}
Bd.prototype.fh = function() {
  this.oa = k;
  var a = this.Kc;
  this.Kc = [];
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
  if(this.Kc.length == 0) {
    a = this.af;
    this.af = [];
    for(b = 0;b < a.length;b++) {
      ud(a[b], k)
    }
  }
};
new Bd(o.window);
function Dd(a, b) {
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
        a.push('<property id="', d, '">'), Dd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if(typeof b.getFullYear == "function") {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && fa(b[c]) != "function" && (a.push('<property id="', va(c), '">'), Dd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function Ed(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, f = arguments;
  d.push("<arguments>");
  for(var g = f.length, h = 1;h < g;h++) {
    Dd(d, f[h])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;function Fd() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ y()).toString(36)
}
function Gd(a) {
  return a.substr(0, a.length - 1)
}
var Hd = /^(0|[1-9]\d*)$/, Id = /^(0|\-?[1-9]\d*)$/;
function Jd(a) {
  var b = Kd;
  return Hd.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function Ld(a) {
  this.p = new Qb;
  a && this.zd(a)
}
function Md(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + w(a) : b.substr(0, 1) + a
}
n = Ld.prototype;
n.U = function() {
  return this.p.U()
};
n.add = function(a) {
  this.p.set(Md(a), a)
};
n.zd = function(a) {
  for(var a = Mb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
n.qe = function(a) {
  for(var a = Mb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
n.remove = function(a) {
  return this.p.remove(Md(a))
};
n.clear = function() {
  this.p.clear()
};
n.Pa = function() {
  return this.p.Pa()
};
n.contains = function(a) {
  return this.p.ba(Md(a))
};
n.W = function() {
  return this.p.W()
};
n.L = function() {
  return new Ld(this)
};
n.n = function(a) {
  return this.U() == Lb(a) && Nd(this, a)
};
function Nd(a, b) {
  var c = Lb(b);
  if(a.U() > c) {
    return!1
  }
  !(b instanceof Ld) && c > 5 && (b = new Ld(b));
  return Pb(a, function(a) {
    if(typeof b.contains == "function") {
      a = b.contains(a)
    }else {
      if(typeof b.Gc == "function") {
        a = b.Gc(a)
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
;function Od(a) {
  return Pd(a || arguments.callee.caller, [])
}
function Pd(a, b) {
  var c = [];
  if($a(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(Qd(a) + "(");
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
            g = (g = Qd(g)) ? g : "[fn]";
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
        c.push(Pd(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Qd(a) {
  if(Rd[a]) {
    return Rd[a]
  }
  a = String(a);
  if(!Rd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Rd[a] = b ? b[1] : "[Anonymous]"
  }
  return Rd[a]
}
var Rd = {};
function Sd(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
Sd.prototype.Vg = 0;
Sd.prototype.Pd = k;
Sd.prototype.Od = k;
var Td = 0;
Sd.prototype.reset = function(a, b, c, d, f) {
  this.Vg = typeof f == "number" ? f : Td++;
  this.Vf = d || y();
  this.Eb = a;
  this.Af = b;
  this.Hg = c;
  delete this.Pd;
  delete this.Od
};
Sd.prototype.nd = aa("Eb");
function Ud(a) {
  this.je = a
}
Ud.prototype.$ = k;
Ud.prototype.Eb = k;
Ud.prototype.O = k;
Ud.prototype.ec = k;
function Vd(a, b) {
  this.name = a;
  this.value = b
}
Vd.prototype.toString = l("name");
var Wd = new Vd("OFF", Infinity), Xd = new Vd("SHOUT", 1200), Yd = new Vd("SEVERE", 1E3), Zd = new Vd("WARNING", 900), $d = new Vd("INFO", 800), ae = new Vd("CONFIG", 700), be = new Vd("FINE", 500), ce = new Vd("FINEST", 300), de = new Vd("ALL", 0);
n = Ud.prototype;
n.getParent = l("$");
n.nd = aa("Eb");
function ee(a) {
  if(a.Eb) {
    return a.Eb
  }
  if(a.$) {
    return ee(a.$)
  }
  Ia("Root logger has no level set.");
  return k
}
n.log = function(a, b, c) {
  if(a.value >= ee(this).value) {
    a = this.vg(a, b, c);
    o.console && o.console.markTimeline && o.console.markTimeline("log:" + a.Af);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.ec) {
        for(var f = 0, g = i;g = c.ec[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
n.vg = function(a, b, c) {
  var d = new Sd(a, String(b), this.je);
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
      f = "Message: " + va(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + va(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + va(Od(g) + "-> ")
    }catch(B) {
      f = "Exception trying to expose exception! You win, we lose. " + B
    }
    d.Od = f
  }
  return d
};
function fe(a, b) {
  a.log(Yd, b, i)
}
function N(a, b) {
  a.log(Zd, b, i)
}
n.info = function(a, b) {
  this.log($d, a, b)
};
function O(a, b) {
  a.log(be, b, i)
}
function P(a, b) {
  a.log(ce, b, i)
}
var ge = {}, he = k;
function ie() {
  he || (he = new Ud(""), ge[""] = he, he.nd(ae))
}
function je() {
  ie();
  return he
}
function Q(a) {
  ie();
  var b;
  if(!(b = ge[a])) {
    b = new Ud(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Q(a.substr(0, c));
    if(!c.O) {
      c.O = {}
    }
    c.O[d] = b;
    b.$ = c;
    ge[a] = b
  }
  return b
}
;function ke(a, b) {
  this.R = "_" + Fd();
  this.ud = a;
  this.Ta = b;
  this.Ya = a.Ya
}
z(ke, J);
n = ke.prototype;
n.jb = !0;
n.Hc = !1;
n.a = Q("cw.net.FlashSocket");
n.F = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.R);
  a.push("'>")
};
function le(a, b, c) {
  b == "frames" ? (a = a.Ta, me(a.K), ne(a.K, c)) : b == "stillreceiving" ? (c = a.Ta, P(c.a, "onstillreceiving"), me(c.K)) : b == "connect" ? (c = a.Ta, c.a.info("onconnect"), me(c.K), a = c.Rb, c.Rb = k, a.length && (P(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.qd.Bc(a))) : b == "close" ? (a.jb = !1, a.f()) : b == "ioerror" ? (a.jb = !1, b = a.Ta, N(b.a, "onioerror: " + F(c)), oe(b.K, !1), a.f()) : b == "securityerror" ? (a.jb = !1, b = a.Ta, N(b.a, "onsecurityerror: " + 
  F(c)), oe(b.K, !1), a.f()) : e(Error("bad event: " + b))
}
n.Fd = function(a, b) {
  try {
    var c = this.Ya.CallFunction(Ed("__FC_connect", this.R, a, b, "<int32/>\n"))
  }catch(d) {
    fe(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message);
    this.Hc = !0;
    this.jb = !1;
    this.f();
    return
  }
  c != '"OK"' && e(Error("__FC_connect failed? ret: " + c))
};
n.Bc = function(a) {
  try {
    var b = this.Ya.CallFunction(Ed("__FC_writeFrames", this.R, a))
  }catch(c) {
    fe(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message);
    this.Hc = !0;
    this.jb = !1;
    this.f();
    return
  }
  b != '"OK"' && (b == '"no such instance"' ? (N(this.a, "Flash no longer knows of " + this.R + "; disposing."), this.f()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
n.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.jb);
  ke.d.c.call(this);
  var a = this.Ya;
  delete this.Ya;
  if(this.jb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(Ed("__FC_close", this.R)))
    }catch(b) {
      fe(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Hc = !0
    }
  }
  if(this.Hc) {
    a = this.Ta, N(a.a, "oncrash"), oe(a.K, !0)
  }else {
    this.Ta.onclose()
  }
  delete this.Ta;
  delete this.ud.yb[this.R]
};
function pe(a, b) {
  this.J = a;
  this.Ya = b;
  this.yb = {};
  this.Dd = "__FST_" + Fd();
  o[this.Dd] = x(this.rg, this);
  var c = b.CallFunction(Ed("__FC_setCallbackFunc", this.Dd));
  c != '"OK"' && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
z(pe, J);
n = pe.prototype;
n.a = Q("cw.net.FlashSocketTracker");
n.F = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  E(this.yb, a, b);
  a.push(">")
};
n.Hd = function(a) {
  a = new ke(this, a);
  return this.yb[a.R] = a
};
n.pg = function(a, b, c, d) {
  var f = this.yb[a];
  f ? b == "frames" && d ? (le(f, "ioerror", "FlashConnector hadError while handling data."), f.f()) : le(f, b, c) : N(this.a, "Cannot dispatch because we have no instance: " + F([a, b, c, d]))
};
n.rg = function(a, b, c, d) {
  try {
    Cd(this.J, this.pg, this, [a, b, c, d])
  }catch(f) {
    o.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
n.c = function() {
  pe.d.c.call(this);
  for(var a = Ra(this.yb);a.length;) {
    a.pop().f()
  }
  delete this.yb;
  delete this.Ya;
  o[this.Dd] = i
};
function qe(a) {
  this.K = a;
  this.Rb = []
}
z(qe, J);
n = qe.prototype;
n.a = Q("cw.net.FlashSocketConduit");
n.Bc = function(a) {
  this.Rb ? (P(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Rb.push.apply(this.Rb, a)) : (P(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.qd.Bc(a))
};
n.Fd = function(a, b) {
  this.qd.Fd(a, b)
};
n.onclose = function() {
  this.a.info("onclose");
  oe(this.K, !1)
};
n.c = function() {
  this.a.info("in disposeInternal.");
  qe.d.c.call(this);
  this.qd.f();
  delete this.K
};
function re(a) {
  return a * Math.PI / 180
}
;var Kd = Math.pow(2, 53);
var se = {eg:ba("<cw.eq.Wildcard>")};
function te(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function ue(a, b, c) {
  var d = fa(a), f = fa(b);
  if(a == se || b == se) {
    return!0
  }else {
    if(a != k && typeof a.n == "function") {
      return c && c.push("running custom equals function on left object"), a.n(b, c)
    }else {
      if(b != k && typeof b.n == "function") {
        return c && c.push("running custom equals function on right object"), b.n(a, c)
      }else {
        if(te(d) || te(f)) {
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
                      if(!ue(a[d], b[d], c)) {
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
                if(a.dg == bc && b.dg == bc) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = !1;
                        break a
                      }
                      if(!ue(a[g], b[g], c)) {
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
function ve() {
  var a = [];
  this.ka(a);
  return a.join("")
}
function we() {
}
we.prototype.n = function(a, b) {
  return!(a instanceof we) ? !1 : ue(xe(this), xe(a), b)
};
we.prototype.F = function(a, b) {
  a.push("<HelloFrame properties=");
  E(xe(this), a, b);
  a.push(">")
};
function xe(a) {
  return[a.Nb, a.Hf, a.mf, a.Lf, a.vc, a.De, a.Cf, a.yf, a.ie, a.wf, a.$f, a.Uf, a.na, a.ad]
}
we.prototype.da = ve;
we.prototype.ka = function(a) {
  var b = {};
  b.tnum = this.Nb;
  b.ver = this.Hf;
  b.format = this.mf;
  b["new"] = this.Lf;
  b.id = this.vc;
  b.ming = this.De;
  b.pad = this.Cf;
  b.maxb = this.yf;
  if(ga(this.ie)) {
    b.maxt = this.ie
  }
  b.maxia = this.wf;
  b.tcpack = this.$f;
  b.eeds = this.Uf;
  b.sack = this.na instanceof Wb ? Gd((new ye(this.na)).da()) : this.na;
  b.seenack = this.ad instanceof Wb ? Gd((new ye(this.ad)).da()) : this.ad;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new Fb).ob(b), "H")
};
function ze(a) {
  this.Mb = a
}
ze.prototype.n = function(a) {
  return a instanceof ze && this.Mb == a.Mb
};
ze.prototype.F = function(a, b) {
  a.push("new StringFrame(");
  E(this.Mb, a, b);
  a.push(")")
};
ze.prototype.da = ve;
ze.prototype.ka = function(a) {
  a.push(this.Mb, " ")
};
function Ae(a) {
  this.Fc = a
}
Ae.prototype.n = function(a) {
  return a instanceof Ae && this.Fc == a.Fc
};
Ae.prototype.F = function(a, b) {
  a.push("new CommentFrame(");
  E(this.Fc, a, b);
  a.push(")")
};
Ae.prototype.da = ve;
Ae.prototype.ka = function(a) {
  a.push(this.Fc, "^")
};
function Be(a) {
  this.tc = a
}
Be.prototype.n = function(a) {
  return a instanceof Be && this.tc == a.tc
};
Be.prototype.F = function(a) {
  a.push("new SeqNumFrame(", String(this.tc), ")")
};
Be.prototype.da = ve;
Be.prototype.ka = function(a) {
  a.push(String(this.tc), "N")
};
function Ce(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return k
  }
  a: {
    var c = b[1], a = Kd;
    if(Id.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
      var g = Jd(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Wb(a, c)
}
function ye(a) {
  this.na = a
}
ye.prototype.n = function(a, b) {
  return a instanceof ye && this.na.n(a.na, b)
};
ye.prototype.F = function(a, b) {
  a.push("new SackFrame(");
  E(this.na, a, b);
  a.push(")")
};
ye.prototype.da = ve;
ye.prototype.ka = function(a) {
  var b = this.na;
  a.push(b.nb.join(","), "|", String(b.rb));
  a.push("A")
};
function De(a) {
  this.ic = a
}
De.prototype.n = function(a, b) {
  return a instanceof De && this.ic.n(a.ic, b)
};
De.prototype.F = function(a, b) {
  a.push("new StreamStatusFrame(");
  E(this.ic, a, b);
  a.push(")")
};
De.prototype.da = ve;
De.prototype.ka = function(a) {
  var b = this.ic;
  a.push(b.nb.join(","), "|", String(b.rb));
  a.push("T")
};
function Ee() {
}
Ee.prototype.F = function(a) {
  a.push("new StreamCreatedFrame()")
};
Ee.prototype.n = function(a) {
  return a instanceof Ee
};
Ee.prototype.da = ve;
Ee.prototype.ka = function(a) {
  a.push("C")
};
function Fe() {
}
Fe.prototype.F = function(a) {
  a.push("new YouCloseItFrame()")
};
Fe.prototype.n = function(a) {
  return a instanceof Fe
};
Fe.prototype.da = ve;
Fe.prototype.ka = function(a) {
  a.push("Y")
};
function Ge(a, b) {
  this.nc = a;
  this.Qb = b
}
Ge.prototype.n = function(a) {
  return a instanceof Ge && this.nc == a.nc && this.Qb == a.Qb
};
Ge.prototype.F = function(a, b) {
  a.push("new ResetFrame(");
  E(this.nc, a, b);
  a.push(", ", String(this.Qb), ")")
};
Ge.prototype.da = ve;
Ge.prototype.ka = function(a) {
  a.push(this.nc, "|", String(Number(this.Qb)), "!")
};
var He = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Ie(a) {
  this.reason = a
}
Ie.prototype.n = function(a) {
  return a instanceof Ie && this.reason == a.reason
};
Ie.prototype.F = function(a, b) {
  a.push("new TransportKillFrame(");
  E(this.reason, a, b);
  a.push(")")
};
Ie.prototype.da = ve;
Ie.prototype.ka = function(a) {
  a.push(this.reason, "K")
};
function Je(a) {
  a || e(new R("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new ze(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = Ce(Gd(a)), a == k && e(new R("bad sack")), new ye(a)
    }else {
      if(b == "N") {
        return a = Jd(Gd(a)), a == k && e(new R("bad seqNum")), new Be(a)
      }else {
        if(b == "T") {
          return a = Ce(Gd(a)), a == k && e(new R("bad lastSackSeen")), new De(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && e(new R("leading garbage")), new Fe
          }else {
            if(b == "^") {
              return new Ae(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && e(new R("leading garbage")), new Ee
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && e(new R("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == k && e(new R("bad applicationLevel")), new Ge(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = He[a], a == k && e(new R("unknown kill reason: " + a)), new Ie(a)
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
;var Ke;
Ke = !1;
var Le = hc();
Le && (Le.indexOf("Firefox") != -1 || Le.indexOf("Camino") != -1 || Le.indexOf("iPhone") != -1 || Le.indexOf("iPod") != -1 || Le.indexOf("iPad") != -1 || Le.indexOf("Android") != -1 || Le.indexOf("Chrome") != -1 && (Ke = !0));
var Me = Ke;
var Ne = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Oe(a, b) {
  var c = a.match(Ne), d = b.match(Ne);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Pe() {
  if(lc) {
    this.$a = {}, this.xd = {}, this.sd = []
  }
}
Pe.prototype.a = Q("goog.net.xhrMonitor");
Pe.prototype.Jc = lc;
function Qe(a) {
  var b = Re;
  if(b.Jc) {
    var c = t(a) ? a : ja(a) ? w(a) : "";
    P(b.a, "Pushing context: " + a + " (" + c + ")");
    b.sd.push(c)
  }
}
function Se() {
  var a = Re;
  if(a.Jc) {
    var b = a.sd.pop();
    P(a.a, "Popping context: " + b);
    Te(a, b)
  }
}
function Ue(a) {
  var b = Re;
  if(b.Jc) {
    a = w(a);
    O(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.sd.length;c++) {
      var d = b.sd[c];
      Ve(b.$a, d, a);
      Ve(b.xd, a, d)
    }
  }
}
function Te(a, b) {
  var c = a.xd[b], d = a.$a[b];
  c && d && (P(a.a, "Updating dependent contexts"), Wa(c, function(a) {
    Wa(d, function(b) {
      Ve(this.$a, a, b);
      Ve(this.xd, b, a)
    }, this)
  }, a))
}
function Ve(a, b, c) {
  a[b] || (a[b] = []);
  $a(a[b], c) || a[b].push(c)
}
var Re = new Pe;
function We() {
}
We.prototype.Cc = k;
function Xe() {
  return Ye(Ze)
}
var Ze;
function $e() {
}
z($e, We);
function Ye(a) {
  return(a = af(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function bf(a) {
  var b = {};
  af(a) && (b[0] = !0, b[1] = !0);
  return b
}
$e.prototype.$d = k;
function af(a) {
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
Ze = new $e;
function cf(a) {
  this.headers = new Qb;
  this.Pb = a || k
}
z(cf, kd);
cf.prototype.a = Q("goog.net.XhrIo");
var df = /^https?:?$/i;
n = cf.prototype;
n.Ia = !1;
n.j = k;
n.wd = k;
n.jc = "";
n.sf = "";
n.gc = 0;
n.hc = "";
n.Md = !1;
n.Xc = !1;
n.ae = !1;
n.ib = !1;
n.td = 0;
n.pb = k;
n.Nf = "";
n.hh = !1;
n.send = function(a, b, c, d) {
  this.j && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.jc = a;
  this.hc = "";
  this.gc = 0;
  this.sf = b;
  this.Md = !1;
  this.Ia = !0;
  this.j = this.Pb ? Ye(this.Pb) : new Xe;
  this.wd = this.Pb ? this.Pb.Cc || (this.Pb.Cc = bf(this.Pb)) : Ze.Cc || (Ze.Cc = bf(Ze));
  Ue(this.j);
  this.j.onreadystatechange = x(this.Ef, this);
  try {
    O(this.a, ef(this, "Opening Xhr")), this.ae = !0, this.j.open(b, a, !0), this.ae = !1
  }catch(f) {
    O(this.a, ef(this, "Error opening Xhr: " + f.message));
    ff(this, f);
    return
  }
  var a = c || "", g = this.headers.L();
  d && Ob(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.ba("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Ob(g, function(a, b) {
    this.j.setRequestHeader(b, a)
  }, this);
  if(this.Nf) {
    this.j.responseType = this.Nf
  }
  if("withCredentials" in this.j) {
    this.j.withCredentials = this.hh
  }
  try {
    if(this.pb) {
      md.clearTimeout(this.pb), this.pb = k
    }
    if(this.td > 0) {
      O(this.a, ef(this, "Will abort after " + this.td + "ms if incomplete")), this.pb = md.setTimeout(x(this.dh, this), this.td)
    }
    O(this.a, ef(this, "Sending request"));
    this.Xc = !0;
    this.j.send(a);
    this.Xc = !1
  }catch(h) {
    O(this.a, ef(this, "Send error: " + h.message)), ff(this, h)
  }
};
n.dispatchEvent = function(a) {
  if(this.j) {
    Qe(this.j);
    try {
      return cf.d.dispatchEvent.call(this, a)
    }finally {
      Se()
    }
  }else {
    return cf.d.dispatchEvent.call(this, a)
  }
};
n.dh = function() {
  if(typeof ca != "undefined" && this.j) {
    this.hc = "Timed out after " + this.td + "ms, aborting", this.gc = 8, O(this.a, ef(this, this.hc)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function ff(a, b) {
  a.Ia = !1;
  if(a.j) {
    a.ib = !0, a.j.abort(), a.ib = !1
  }
  a.hc = b;
  a.gc = 5;
  gf(a);
  hf(a)
}
function gf(a) {
  if(!a.Md) {
    a.Md = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
n.abort = function(a) {
  if(this.j && this.Ia) {
    O(this.a, ef(this, "Aborting")), this.Ia = !1, this.ib = !0, this.j.abort(), this.ib = !1, this.gc = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), hf(this)
  }
};
n.c = function() {
  if(this.j) {
    if(this.Ia) {
      this.Ia = !1, this.ib = !0, this.j.abort(), this.ib = !1
    }
    hf(this, !0)
  }
  cf.d.c.call(this)
};
n.Ef = function() {
  !this.ae && !this.Xc && !this.ib ? this.Ng() : jf(this)
};
n.Ng = function() {
  jf(this)
};
function jf(a) {
  if(a.Ia && typeof ca != "undefined") {
    if(a.wd[1] && a.Oa() == 4 && kf(a) == 2) {
      O(a.a, ef(a, "Local request error detected and ignored"))
    }else {
      if(a.Xc && a.Oa() == 4) {
        md.setTimeout(x(a.Ef, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.Oa() == 4) {
          O(a.a, ef(a, "Request complete"));
          a.Ia = !1;
          var b;
          a: {
            switch(kf(a)) {
              case 0:
                b = t(a.jc) ? a.jc.match(Ne)[1] || k : a.jc.Ga;
                b = !(b ? df.test(b) : self.location ? df.test(self.location.protocol) : 1);
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
            a.gc = 6;
            var c;
            try {
              c = a.Oa() > 2 ? a.j.statusText : ""
            }catch(d) {
              O(a.a, "Can not get status: " + d.message), c = ""
            }
            a.hc = c + " [" + kf(a) + "]";
            gf(a)
          }
          hf(a)
        }
      }
    }
  }
}
function hf(a, b) {
  if(a.j) {
    var c = a.j, d = a.wd[0] ? q : k;
    a.j = k;
    a.wd = k;
    if(a.pb) {
      md.clearTimeout(a.pb), a.pb = k
    }
    b || (Qe(c), a.dispatchEvent("ready"), Se());
    var f = Re;
    if(f.Jc) {
      var g = w(c);
      O(f.a, "Closing XHR : " + g);
      delete f.xd[g];
      for(var h in f.$a) {
        bb(f.$a[h], g), f.$a[h].length == 0 && delete f.$a[h]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(j) {
      fe(a.a, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
n.ce = function() {
  return!!this.j
};
n.Oa = function() {
  return this.j ? this.j.readyState : 0
};
function kf(a) {
  try {
    return a.Oa() > 2 ? a.j.status : -1
  }catch(b) {
    return N(a.a, "Can not get status: " + b.message), -1
  }
}
n.getResponseHeader = function(a) {
  return this.j && this.Oa() == 4 ? this.j.getResponseHeader(a) : i
};
function ef(a, b) {
  return b + " [" + a.sf + " " + a.jc + " " + kf(a) + "]"
}
;function lf(a, b, c) {
  this.K = b;
  this.ma = a;
  this.Gd = c
}
z(lf, J);
n = lf.prototype;
n.a = Q("cw.net.XHRMaster");
n.Va = -1;
n.he = function(a, b, c) {
  this.Gd.__XHRSlave_makeRequest(this.ma, a, b, c)
};
n.Oa = l("Va");
n.le = function(a, b) {
  b != mf && fe(this.a, F(this.ma) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  me(this.K);
  ne(this.K, a)
};
n.me = function(a) {
  O(this.a, "ongotheaders_: " + F(a));
  var b = k;
  "Content-Length" in a && (b = Jd(a["Content-Length"]));
  a = this.K;
  O(a.a, a.s() + " got Content-Length: " + b);
  a.wa == nf && (b == k && (N(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), of(a, 2E3 + b / 3072 * 1E3))
};
n.ne = function(a) {
  a != 1 && O(this.a, this.K.s() + "'s XHR's readyState is " + a);
  this.Va = a;
  this.Va >= 2 && me(this.K)
};
n.ke = function() {
  this.K.f()
};
n.c = function() {
  lf.d.c.call(this);
  delete pf.Fa[this.ma];
  this.Gd.__XHRSlave_dispose(this.ma);
  delete this.Gd
};
function qf() {
  this.Fa = {}
}
z(qf, J);
n = qf.prototype;
n.a = Q("cw.net.XHRMasterTracker");
n.Hd = function(a, b) {
  var c = "_" + Fd(), d = new lf(c, a, b);
  return this.Fa[c] = d
};
n.le = function(a, b, c) {
  var b = cb(b), d = this.Fa[a];
  d ? d.le(b, c) : fe(this.a, "onframes_: no master for " + F(a))
};
n.me = function(a, b) {
  var c = this.Fa[a];
  c ? c.me(b) : fe(this.a, "ongotheaders_: no master for " + F(a))
};
n.ne = function(a, b) {
  var c = this.Fa[a];
  c ? c.ne(b) : fe(this.a, "onreadystatechange_: no master for " + F(a))
};
n.ke = function(a) {
  var b = this.Fa[a];
  b ? (delete this.Fa[b.ma], b.ke()) : fe(this.a, "oncomplete_: no master for " + F(a))
};
n.c = function() {
  qf.d.c.call(this);
  for(var a = Ra(this.Fa);a.length;) {
    a.pop().f()
  }
  delete this.Fa
};
var pf = new qf;
o.__XHRMaster_onframes = x(pf.le, pf);
o.__XHRMaster_oncomplete = x(pf.ke, pf);
o.__XHRMaster_ongotheaders = x(pf.me, pf);
o.__XHRMaster_onreadystatechange = x(pf.ne, pf);
function rf() {
  sf.info("Waiting for XDRFrames (may take a while)...");
  var a = new od, b = o.__XDRSetup.done.length, c;
  o.__XDRSetup.done = {push:function() {
    b += 1;
    c = 2 - b;
    c || (sf.info("Got XDRFrames after waiting."), ud(a, k))
  }};
  c = 2 - b;
  c || (sf.info("Already had all XDRFrames."), ud(a, k));
  return a
}
var sf = Q("cw.net.waitForXDRFrames");
function tf(a, b, c) {
  this.host = a;
  this.port = b;
  this.eh = c
}
function uf(a, b, c, d) {
  this.fd = a;
  this.Gf = b;
  this.hd = c;
  this.Rf = d;
  (!(this.fd.indexOf("http://") == 0 || this.fd.indexOf("https://") == 0) || !(this.hd.indexOf("http://") == 0 || this.hd.indexOf("https://") == 0)) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Gf.location.href;
  Oe(this.fd, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Rf.location.href;
  Oe(this.hd, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
var vf = new Ae(";)]}"), wf = "disconnected_" + jd++;
function xf(a, b, c, d) {
  this.J = a;
  this.If = b;
  this.ra = c;
  this.Fi = d;
  this.xc = new Ld;
  this.vc = Fd() + Fd();
  this.Ua = new Xb;
  this.be = new Zb;
  this.Ac = k;
  if(H) {
    this.Ac = bd(o, "load", this.Ug, !1, this)
  }
}
z(xf, kd);
n = xf.prototype;
n.a = Q("cw.net.Stream");
n.tf = new Wb(-1, []);
n.uf = new Wb(-1, []);
n.Kg = 50;
n.Jg = 1048576;
n.Be = !1;
n.re = !1;
n.l = 1;
n.Yf = -1;
n.k = k;
n.A = k;
n.oc = k;
n.Ce = 0;
n.Ff = 0;
n.Qf = 0;
n.F = function(a, b) {
  a.push("<Stream id=");
  E(this.vc, a, b);
  a.push(", state=", String(this.l));
  a.push(", primary=");
  E(this.k, a, b);
  a.push(", secondary=");
  E(this.A, a, b);
  a.push(", resetting=");
  E(this.oc, a, b)
};
function yf(a) {
  var b = [-1];
  a.k && b.push(a.k.Gb);
  a.A && b.push(a.A.Gb);
  return Math.max.apply(Math.max, b)
}
function zf(a) {
  if(a.l != 1) {
    var b = a.Ua.z.U() != 0, c = $b(a.be), d = !c.n(a.uf) && !(a.k && c.n(a.k.Db) || a.A && c.n(a.A.Db)), f = yf(a);
    if((b = b && f < a.Ua.vb) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.k.Sb) {
        P(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.k, c != d.Db)) {
          !d.Ha && !d.D.length && Af(d), d.D.push(new ye(c)), d.Db = c
        }
        b && Bf(a.k, a.Ua, f + 1);
        a.k.Ca()
      }else {
        a.A == k ? a.Be ? (P(a.a, "tryToSend_: creating secondary to send " + g), a.A = Cf(a, !1), b && Bf(a.A, a.Ua, f + 1), a.A.Ca()) : (P(a.a, "tryToSend_: not creating a secondary because Stream might not exist on server"), a.re = !0) : P(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
n.Ug = function() {
  this.Ac = k;
  if(this.k && this.k.zb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.k;
    a.yd = !0;
    a.f()
  }
  if(this.A && this.A.zb()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.A, a.yd = !0, a.f()
  }
};
function Df(a, b) {
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
    zf(a)
  }
}
function Cf(a, b) {
  var c;
  a.ra instanceof uf ? c = (Boolean(Number((new Ef(document.location)).ha.get("httpStreaming", "0"))) ? 2 : 1) == 1 ? nf : Ff : a.ra instanceof tf ? c = Gf : e(Error("Don't support endpoint " + F(a.ra)));
  a.Yf += 1;
  c = new Hf(a.J, a, a.Yf, c, a.ra, b);
  P(a.a, "Created: " + c.s());
  a.xc.add(c);
  return c
}
function If(a, b, c) {
  var d = new Jf(a.J, a, b, c);
  P(a.a, "Created: " + d.s() + ", delay=" + b + ", times=" + c);
  a.xc.add(d);
  return d
}
function Kf(a, b) {
  a.xc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  O(a.a, "Offline: " + b.s());
  b.mc ? a.Ce += b.mc : a.Ce = 0;
  a.Ce >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), Lf("stream penalty reached limit", !1), a.f());
  if(a.l > 2) {
    a.l == 3 && b.cg ? (O(a.a, "Disposing because resettingTransport_ is done."), a.f()) : O(a.a, "Not creating a transport because Stream is in state " + a.l)
  }else {
    var c;
    var d;
    c = b instanceof Jf;
    if(!c && b.yd) {
      var f = H ? Me ? [0, 1] : [9, 20] : [0, 0];
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
      a.k = k, c ? a.k = If(a, f, c) : (f = yf(a), a.k = Cf(a, !0), Bf(a.k, a.Ua, f + 1)), a.k.Ca()
    }else {
      if(b == a.A) {
        a.A = k, c ? (a.A = If(a, f, c), a.A.Ca()) : zf(a)
      }
    }
  }
}
n.reset = function(a) {
  this.l > 2 && e(Error("reset: Can't send reset in state " + this.l));
  this.l = 3;
  this.k && this.k.Sb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Mf(this.k, a), this.k.Ca()) : (this.k && (O(this.a, "reset: Disposing primary before sending ResetFrame."), this.k.f()), this.A && (O(this.a, "reset: Disposing secondary before sending ResetFrame."), this.A.f()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.oc = Cf(this, !1), Mf(this.oc, a), this.oc.Ca());
  Lf(a, !0)
};
function Nf(a, b, c, d) {
  var f;
  f = a.be;
  for(var g = a.Kg, h = a.Jg, j = [], m = !1, p = 0, A = c.length;p < A;p++) {
    var r = c[p], u = r[0], r = r[1];
    if(u == f.Cb + 1) {
      f.Cb += 1;
      for(j.push(r);;) {
        u = f.Cb + 1;
        r = f.Za.get(u, ac);
        if(r === ac) {
          break
        }
        j.push(r[0]);
        f.Za.remove(u);
        f.v -= r[1];
        f.Cb = u
      }
    }else {
      if(!(u <= f.Cb)) {
        if(g != k && f.Za.U() >= g) {
          m = !0;
          break
        }
        var B = Vb(r);
        if(h != k && f.v + B > h) {
          m = !0;
          break
        }
        f.Za.set(u, [r, B]);
        f.v += B
      }
    }
  }
  f.Za.Pa() && f.Za.clear();
  f = [j, m];
  c = f[0];
  f = f[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(h = a.If, j = Eb(c[g]), m = j[0], p = j[1], m == 1 ? (m = h.oe.Ld(yb.bc(), p), h = nb(m, 1), j = nb(m, 2), m = m.ea(), tb.Ic(h, j, 5, 5, new Of(1, "black"), new Pf(m), i)) : m == 2 ? (tb.f(), Qf()) : N(Rf, "Strange message from server: " + F(j)), a.l == 3 || a.qa) {
        return
      }
    }
  }
  d || zf(a);
  if(!(a.l == 3 || a.qa) && f) {
    fe(b.a, b.s() + "'s peer caused rwin overflow."), b.f()
  }
}
n.start = function() {
  this.l = 2;
  this.k = Cf(this, !0);
  Bf(this.k, this.Ua, k);
  this.k.Ca()
};
n.c = function() {
  this.a.info(F(this) + " in disposeInternal.");
  this.l = 4;
  for(var a = this.xc.W(), b = 0;b < a.length;b++) {
    a[b].f()
  }
  this.dispatchEvent({type:wf});
  if(H && this.Ac) {
    ed(this.Ac), this.Ac = k
  }
  delete this.xc;
  delete this.k;
  delete this.A;
  delete this.oc;
  delete this.If;
  xf.d.c.call(this)
};
var nf = 1, Ff = 2, Gf = 3;
function Hf(a, b, c, d, f, g) {
  this.J = a;
  this.C = b;
  this.Nb = c;
  this.wa = d;
  this.ra = f;
  this.D = [];
  this.sb = g;
  this.Sb = !this.zb();
  this.Ib = this.wa != nf;
  this.ig = x(this.bh, this)
}
z(Hf, J);
n = Hf.prototype;
n.a = Q("cw.net.ClientTransport");
n.q = k;
n.Fe = k;
n.Zf = k;
n.gd = k;
n.Ha = !1;
n.rd = !1;
n.Db = k;
n.Sd = 0;
n.Gb = -1;
n.pe = -1;
n.cg = !1;
n.yd = !1;
n.mc = 0;
n.dc = !1;
n.F = function(a) {
  a.push("<ClientTransport #", String(this.Nb), ", becomePrimary=", String(this.sb), ">")
};
n.s = function() {
  return(this.sb ? "Prim. T#" : "Sec. T#") + this.Nb
};
n.Pe = function() {
  return!(!this.dc && this.Sd)
};
n.zb = function() {
  return this.wa == nf || this.wa == Ff
};
function Sf(a, b) {
  hb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Nf(a.C, a, b, !a.Ib)
}
function Tf(a, b, c) {
  try {
    var d = Je(b);
    a.Sd += 1;
    O(a.a, a.s() + " RECV " + F(d));
    var f;
    a.Sd == 1 && !d.n(vf) && a.zb() ? (N(a.a, a.s() + " is closing soon because got bad preamble: " + F(d)), f = !0) : f = !1;
    if(f) {
      return!0
    }
    if(d instanceof ze) {
      if(!/^([ -~]*)$/.test(d.Mb)) {
        return a.dc = !0
      }
      a.pe += 1;
      c.push([a.pe, d.Mb])
    }else {
      if(d instanceof ye) {
        var g = a.C, h = d.na;
        g.tf = h;
        var j = g.Ua, m = h.rb, c = !1;
        m > j.vb && (c = !0);
        for(var p = Yb(j).concat(), d = 0;d < p.length;d++) {
          var A = p[d];
          if(A > m) {
            break
          }
          var r = j.z.p[A][1];
          j.z.remove(A);
          j.v -= r
        }
        for(d = 0;d < h.nb.length;d++) {
          var u = h.nb[d];
          u > j.vb && (c = !0);
          j.z.ba(u) && (r = j.z.p[u][1], j.z.remove(u), j.v -= r)
        }
        j.z.Pa() && j.z.clear();
        if(c) {
          return N(a.a, a.s() + " is closing soon because got bad SackFrame"), a.dc = !0
        }
      }else {
        if(d instanceof Be) {
          a.pe = d.tc - 1
        }else {
          if(d instanceof De) {
            a.C.uf = d.ic
          }else {
            if(d instanceof Fe) {
              return P(a.a, a.s() + " is closing soon because got YouCloseItFrame"), !0
            }else {
              if(d instanceof Ie) {
                return a.dc = !0, d.reason == "stream_attach_failure" ? a.mc += 1 : d.reason == "acked_unsent_strings" && (a.mc += 0.5), P(a.a, a.s() + " is closing soon because got " + F(d)), !0
              }else {
                if(!(d instanceof Ae)) {
                  if(d instanceof Ee) {
                    var B = a.C, Zi = !a.Ib;
                    P(B.a, "Stream is now confirmed to exist at server.");
                    B.Be = !0;
                    if(B.re && !Zi) {
                      B.re = !1, zf(B)
                    }
                  }else {
                    if(c.length && (Sf(a, c), ab(c)), d instanceof Ge) {
                      var $i = a.C;
                      Lf(d.nc, d.Qb);
                      $i.f();
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
  }catch(Qg) {
    return Qg instanceof R || e(Qg), N(a.a, a.s() + " is closing soon because got InvalidFrame: " + F(b)), a.dc = !0
  }
  return!1
}
function ne(a, b) {
  a.rd = !0;
  try {
    for(var c = !1, d = [], f = 0, g = b.length;f < g;f++) {
      if(a.qa) {
        a.a.info(a.s() + " returning from loop because we're disposed.");
        return
      }
      if(c = Tf(a, b[f], d)) {
        break
      }
    }
    d.length && Sf(a, d);
    a.rd = !1;
    a.D.length && a.Ca();
    c && (P(a.a, a.s() + " closeSoon is true.  Frames were: " + F(b)), a.f())
  }finally {
    a.rd = !1
  }
}
n.bh = function() {
  N(this.a, this.s() + " timed out due to lack of connection or no data being received.");
  this.f()
};
function Uf(a) {
  if(a.gd != k) {
    a.J.M.clearTimeout(a.gd), a.gd = k
  }
}
function of(a, b) {
  Uf(a);
  b = Math.round(b);
  a.gd = a.J.M.setTimeout(a.ig, b);
  O(a.a, a.s() + "'s receive timeout set to " + b + " ms.")
}
function me(a) {
  a.wa != nf && (a.wa == Gf || a.wa == Ff ? of(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.wa)))
}
function Af(a) {
  var b = new we;
  b.Nb = a.Nb;
  b.Hf = 2;
  b.mf = 2;
  if(!a.C.Be) {
    b.Lf = !0
  }
  b.vc = a.C.vc;
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
  b.na = $b(a.C.be);
  b.ad = a.C.tf;
  a.D.push(b);
  a.Db = b.na
}
function oe(a, b) {
  b && (a.mc += 0.5);
  a.f()
}
n.Ca = function() {
  this.Ha && !this.Sb && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.rd) {
    P(this.a, this.s() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ha;
    this.Ha = !0;
    !a && !this.D.length && Af(this);
    for(a = 0;a < this.D.length;a++) {
      O(this.a, this.s() + " SEND " + F(this.D[a]))
    }
    if(this.zb()) {
      for(var a = [], b = 0, c = this.D.length;b < c;b++) {
        this.D[b].ka(a), a.push("\n")
      }
      this.D = [];
      a = a.join("");
      b = this.sb ? this.ra.fd : this.ra.hd;
      this.q = pf.Hd(this, this.sb ? this.ra.Gf : this.ra.Rf);
      this.Fe = this.J.M === md ? y() : this.J.M.getTime();
      this.q.he(b, "POST", a);
      of(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.Ib ? 0 : this.sb ? 25E3 : 0))
    }else {
      if(this.wa == Gf) {
        a = [];
        b = 0;
        for(c = this.D.length;b < c;b++) {
          a.push(this.D[b].da())
        }
        this.D = [];
        this.q ? this.q.Bc(a) : (b = this.ra, this.q = new qe(this), this.q.qd = b.eh.Hd(this.q), this.Fe = this.J.M === md ? y() : this.J.M.getTime(), this.q.Fd(b.host, b.port), this.q.qa || (this.q.Bc(a), this.q.qa || of(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.wa))
      }
    }
  }
};
function Bf(a, b, c) {
  !a.Ha && !a.D.length && Af(a);
  for(var d = Math.max(c, a.Gb + 1), f = Yb(b), c = [], g = 0;g < f.length;g++) {
    var h = f[g];
    (d == k || h >= d) && c.push([h, b.z.p[h][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], f = g[0], g = g[1], (a.Gb == -1 || a.Gb + 1 != f) && a.D.push(new Be(f)), a.D.push(new ze(g)), a.Gb = f
  }
}
n.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  Hf.d.c.call(this);
  this.Zf = this.J.M === md ? y() : this.J.M.getTime();
  this.D = [];
  Uf(this);
  this.q && this.q.f();
  var a = this.C;
  this.C = k;
  Kf(a, this)
};
function Mf(a, b) {
  !a.Ha && !a.D.length && Af(a);
  a.D.push(new Ge(b, !0));
  a.cg = !0
}
function Jf(a, b, c, d) {
  this.J = a;
  this.C = b;
  this.Ye = c;
  this.Se = d
}
z(Jf, J);
n = Jf.prototype;
n.Ha = !1;
n.Sb = !1;
n.Rc = k;
n.Db = k;
n.a = Q("cw.net.DoNothingTransport");
function Vf(a) {
  a.Rc = a.J.M.setTimeout(function() {
    a.Rc = k;
    a.Se--;
    a.Se ? Vf(a) : a.f()
  }, a.Ye)
}
n.Ca = function() {
  this.Ha && !this.Sb && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ha = !0;
  Vf(this)
};
n.F = function(a) {
  a.push("<DoNothingTransport delay=", String(this.Ye), ">")
};
n.zb = ba(!1);
n.s = ba("Wast. T");
n.Pe = ba(!1);
n.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  Jf.d.c.call(this);
  this.Rc != k && this.J.M.clearTimeout(this.Rc);
  var a = this.C;
  this.C = k;
  Kf(a, this)
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
var Wf;
function Xf(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function Yf(a, b) {
  var c = Xf(a), d = gb(arguments, 1), f;
  f = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    $a(f, d[h]) || (f.push(d[h]), g++)
  }
  f = g == d.length;
  a.className = c.join(" ");
  return f
}
function Zf(a, b) {
  var c = Xf(a), d = gb(arguments, 1), f;
  f = c;
  for(var g = 0, h = 0;h < f.length;h++) {
    $a(d, f[h]) && (fb(f, h--, 1), g++)
  }
  f = g == d.length;
  a.className = c.join(" ");
  return f
}
;var $f = !G || I("9");
!lc && !G || G && I("9") || lc && I("1.9.1");
var ag = G && !I("9");
function bg(a) {
  return a ? new cg(dg(a)) : Wf || (Wf = new cg)
}
function T(a) {
  return t(a) ? document.getElementById(a) : a
}
function eg(a, b, c, d) {
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
function fg(a, b) {
  Qa(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in gg ? a.setAttribute(gg[d], b) : a[d] = b
  })
}
var gg = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function hg(a, b, c) {
  return ig(document, arguments)
}
function ig(a, b) {
  var c = b[0], d = b[1];
  if(!$f && d && (d.name || d.type)) {
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
    t(d) ? c.className = d : s(d) ? Yf.apply(k, [c].concat(d)) : fg(c, d)
  }
  b.length > 2 && jg(a, c, b, 2);
  return c
}
function jg(a, b, c, d) {
  function f(c) {
    c && b.appendChild(t(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && g.nodeType > 0) ? Wa(kg(g) ? db(g) : g, f) : f(g)
  }
}
function lg(a, b) {
  jg(dg(a), a, arguments, 1)
}
function mg(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function ng(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function og(a, b) {
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
function dg(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
function pg(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && a.firstChild.nodeType == 3) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      mg(a), a.appendChild(dg(a).createTextNode(b))
    }
  }
}
var qg = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, rg = {IMG:" ", BR:"\n"};
function sg(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ka(a) && a >= 0) : !1
}
function tg(a) {
  var b = [];
  ug(a, b, !1);
  return b.join("")
}
function ug(a, b, c) {
  if(!(a.nodeName in qg)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in rg) {
        b.push(rg[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          ug(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function kg(a) {
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
function cg(a) {
  this.r = a || o.document || document
}
n = cg.prototype;
n.Da = bg;
n.b = function(a) {
  return t(a) ? this.r.getElementById(a) : a
};
n.i = function(a, b, c) {
  return ig(this.r, arguments)
};
n.createElement = function(a) {
  return this.r.createElement(a)
};
n.createTextNode = function(a) {
  return this.r.createTextNode(a)
};
n.Te = function(a, b, c) {
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
n.append = lg;
n.contains = og;
function vg(a, b, c) {
  a.style[Ga(c)] = b
}
function wg(a, b) {
  var c = dg(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function xg(a, b, c) {
  b instanceof S ? (c = b.height, b = b.width) : c == i && e(Error("missing height argument"));
  a.style.width = yg(b);
  a.style.height = yg(c)
}
function yg(a) {
  typeof a == "number" && (a = Math.round(a) + "px");
  return a
}
function zg(a) {
  if((wg(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style.display) != "none") {
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
function Ag(a) {
  G ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[H ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var Bg = lc ? "MozUserSelect" : H ? "WebkitUserSelect" : k;
function Cg(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Bg) {
    if(b = b ? "none" : "", a.style[Bg] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[Bg] = b
      }
    }
  }else {
    if(G || kc) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
;function Dg(a) {
  this.gb = a
}
z(Dg, J);
var Eg = new K(0, 100), Fg = [];
function U(a, b, c, d) {
  s(c) || (Fg[0] = c, c = Fg);
  for(var f = 0;f < c.length;f++) {
    var g = a, h = M(b, c[f], d || a, !1, a.gb || a);
    g.h ? g.h[h] = !0 : g.Ra ? (g.h = Eg.getObject(), g.h[g.Ra] = !0, g.Ra = k, g.h[h] = !0) : g.Ra = h
  }
  return a
}
function Gg(a, b, c, d, f, g) {
  if(a.Ra || a.h) {
    if(s(c)) {
      for(var h = 0;h < c.length;h++) {
        Gg(a, b, c[h], d, f, g)
      }
    }else {
      a: {
        d = d || a;
        g = g || a.gb || a;
        f = !!f;
        if(b = dd(b, c, f)) {
          for(c = 0;c < b.length;c++) {
            if(!b[c].mb && b[c].Fb == d && b[c].capture == f && b[c].Vc == g) {
              b = b[c];
              break a
            }
          }
        }
        b = k
      }
      if(b) {
        if(b = b.key, ed(b), a.h) {
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
Dg.prototype.qe = function() {
  if(this.h) {
    for(var a in this.h) {
      ed(a), delete this.h[a]
    }
    Mc(Eg, this.h);
    this.h = k
  }else {
    this.Ra && ed(this.Ra)
  }
};
Dg.prototype.c = function() {
  Dg.d.c.call(this);
  this.qe()
};
Dg.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Hg() {
}
ea(Hg);
Hg.prototype.Mg = 0;
Hg.Na();
function V(a) {
  this.P = a || bg();
  this.rc = Ig
}
z(V, kd);
V.prototype.Dg = Hg.Na();
var Ig = k;
function Jg(a, b) {
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
n.rc = k;
n.Lg = k;
n.$ = k;
n.O = k;
n.Ub = k;
n.gh = !1;
function Kg(a) {
  return a.R || (a.R = ":" + (a.Dg.Mg++).toString(36))
}
n.b = l("e");
function Lg(a) {
  return a.xb || (a.xb = new Dg(a))
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
function Mg(a, b) {
  a.t && e(Error("Component already rendered"));
  a.e || a.i();
  b ? b.insertBefore(a.e, k) : a.P.r.body.appendChild(a.e);
  (!a.$ || a.$.t) && a.Q()
}
n.Q = function() {
  this.t = !0;
  Ng(this, function(a) {
    !a.t && a.b() && a.Q()
  })
};
n.bb = function() {
  Ng(this, function(a) {
    a.t && a.bb()
  });
  this.xb && this.xb.qe();
  this.t = !1
};
n.c = function() {
  V.d.c.call(this);
  this.t && this.bb();
  this.xb && (this.xb.f(), delete this.xb);
  Ng(this, function(a) {
    a.f()
  });
  !this.gh && this.e && ng(this.e);
  this.$ = this.Lg = this.e = this.Ub = this.O = k
};
n.ac = l("e");
n.Kb = function(a) {
  this.t && e(Error("Component already rendered"));
  this.rc = a
};
function Ng(a, b) {
  a.O && Wa(a.O, b, i)
}
n.removeChild = function(a, b) {
  if(a) {
    var c = t(a) ? a : Kg(a), a = this.Ub && c ? (c in this.Ub ? this.Ub[c] : i) || k : k;
    if(c && a) {
      var d = this.Ub;
      c in d && delete d[c];
      bb(this.O, a);
      b && (a.bb(), a.e && ng(a.e));
      c = a;
      c == k && e(Error("Unable to set parent component"));
      c.$ = k;
      V.d.ve.call(c, k)
    }
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function Og(a, b) {
  a.setAttribute("role", b);
  a.Ci = b
}
;function Pg() {
}
var Rg;
ea(Pg);
n = Pg.prototype;
n.Mc = function() {
};
n.i = function(a) {
  return a.Da().i("div", Sg(this, a).join(" "), a.ca)
};
n.ac = function(a) {
  return a
};
n.Yb = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(G && !I("7")) {
      var d = Tg(Xf(a), b);
      d.push(b);
      pa(c ? Yf : Zf, a).apply(k, d)
    }else {
      c ? Yf(a, b) : Zf(a, b)
    }
  }
};
n.of = function(a) {
  if(a.rc == k) {
    a.rc = "rtl" == (wg(a.t ? a.e : a.P.r.body, "direction") || ((a.t ? a.e : a.P.r.body).currentStyle ? (a.t ? a.e : a.P.r.body).currentStyle.direction : k) || (a.t ? a.e : a.P.r.body).style.direction)
  }
  a.rc && this.Kb(a.b(), !0);
  a.isEnabled() && this.md(a, a.Ob)
};
n.jd = function(a, b) {
  Cg(a, !b, !G && !kc)
};
n.Kb = function(a, b) {
  this.Yb(a, this.u() + "-rtl", b)
};
n.qf = function(a) {
  var b;
  return a.va & 32 && (b = a.fb()) ? sg(b) : !1
};
n.md = function(a, b) {
  var c;
  if(a.va & 32 && (c = a.fb())) {
    if(!b && a.l & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.l & 32 && a.gf()
    }
    if(sg(c) != b) {
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
    var f = Ug(this, b);
    f && this.Yb(a, f, c);
    this.yc(d, b, c)
  }
};
n.yc = function(a, b, c) {
  Rg || (Rg = {1:"disabled", 4:"pressed", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Rg[b]) && a.setAttribute("aria-" + b, c)
};
n.kd = function(a, b) {
  var c = this.ac(a);
  if(c && (mg(c), b)) {
    if(t(b)) {
      pg(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = dg(c);
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
n.u = ba("goog-control");
function Sg(a, b) {
  var c = a.u(), d = [c], f = a.u();
  f != c && d.push(f);
  c = b.l;
  for(f = [];c;) {
    var g = c & -c;
    f.push(Ug(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.sa) && d.push.apply(d, c);
  G && !I("7") && d.push.apply(d, Tg(d));
  return d
}
function Tg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Wa([], function(d) {
    Za(d, pa($a, a)) && (!b || $a(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Ug(a, b) {
  if(!a.Oe) {
    var c = a.u();
    a.Oe = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Oe[b]
}
;function Vg(a, b) {
  a || e(Error("Invalid class name " + a));
  v(b) || e(Error("Invalid decorator function " + b))
}
var Wg = {};
function Xg(a, b, c, d, f) {
  if(!G && (!H || !I("525"))) {
    return!0
  }
  if(oc && f) {
    return Yg(a)
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
  return Yg(a)
}
function Yg(a) {
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
;function Zg(a, b) {
  a && $g(this, a, b)
}
z(Zg, kd);
n = Zg.prototype;
n.e = k;
n.Zc = k;
n.de = k;
n.$c = k;
n.Sa = -1;
n.Qa = -1;
var ah = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, bh = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, ch = {61:187, 
59:186}, dh = G || H && I("525");
n = Zg.prototype;
n.zg = function(a) {
  if(H && (this.Sa == 17 && !a.ctrlKey || this.Sa == 18 && !a.altKey)) {
    this.Qa = this.Sa = -1
  }
  dh && !Xg(a.keyCode, this.Sa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Qa = lc && a.keyCode in ch ? ch[a.keyCode] : a.keyCode
};
n.Ag = function() {
  this.Qa = this.Sa = -1
};
n.handleEvent = function(a) {
  var b = a.Ba, c, d;
  G && a.type == "keypress" ? (c = this.Qa, d = c != 13 && c != 27 ? b.keyCode : 0) : H && a.type == "keypress" ? (c = this.Qa, d = b.charCode >= 0 && b.charCode < 63232 && Yg(c) ? b.charCode : 0) : kc ? (c = this.Qa, d = Yg(c) ? b.keyCode : 0) : (c = b.keyCode || this.Qa, d = b.charCode || 0, oc && d == 63 && !c && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in ah ? f = ah[c] : c == 25 && a.shiftKey && (f = 9) : g && g in bh && (f = bh[g]);
  a = f == this.Sa;
  this.Sa = f;
  b = new eh(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.f()
  }
};
n.b = l("e");
function $g(a, b, c) {
  a.$c && a.detach();
  a.e = b;
  a.Zc = M(a.e, "keypress", a, c);
  a.de = M(a.e, "keydown", a.zg, c, a);
  a.$c = M(a.e, "keyup", a.Ag, c, a)
}
n.detach = function() {
  if(this.Zc) {
    ed(this.Zc), ed(this.de), ed(this.$c), this.$c = this.de = this.Zc = k
  }
  this.e = k;
  this.Qa = this.Sa = -1
};
n.c = function() {
  Zg.d.c.call(this);
  this.detach()
};
function eh(a, b, c, d) {
  d && this.fc(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
z(eh, Fc);
function W(a, b, c) {
  V.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = w(b);
      if(d = Wg[d]) {
        break
      }
      b = b.d ? b.d.constructor : k
    }
    b = d ? v(d.Na) ? d.Na() : new d : k
  }
  this.m = b;
  this.ld(a)
}
z(W, V);
n = W.prototype;
n.ca = k;
n.l = 0;
n.va = 39;
n.Le = 255;
n.$g = 0;
n.Ob = !0;
n.sa = k;
n.Yd = !0;
n.Ad = !1;
n.fb = function() {
  return this.m.fb(this)
};
function fh(a, b) {
  if(b) {
    a.sa ? $a(a.sa, b) || a.sa.push(b) : a.sa = [b], a.m.Yb(a, b, !0)
  }
}
n.Yb = function(a, b) {
  if(b) {
    fh(this, a)
  }else {
    if(a && this.sa) {
      bb(this.sa, a);
      if(this.sa.length == 0) {
        this.sa = k
      }
      this.m.Yb(this, a, !1)
    }
  }
};
n.i = function() {
  var a = this.m.i(this);
  this.e = a;
  var b = this.m.Mc();
  b && Og(a, b);
  this.Ad || this.m.jd(a, !1);
  this.Ob || this.m.ze(a, !1)
};
n.ac = function() {
  return this.m.ac(this.b())
};
n.Q = function() {
  W.d.Q.call(this);
  this.m.of(this);
  if(this.va & -2 && (this.Yd && gh(this, !0), this.va & 32)) {
    var a = this.fb();
    if(a) {
      var b = this.Bb || (this.Bb = new Zg);
      $g(b, a);
      U(U(U(Lg(this), b, "key", this.jf), a, "focus", this.xg), a, "blur", this.gf)
    }
  }
};
function gh(a, b) {
  var c = Lg(a), d = a.b();
  b ? (U(U(U(U(c, d, "mouseover", a.Uc), d, "mousedown", a.Sc), d, "mouseup", a.kf), d, "mouseout", a.Tc), G && U(c, d, "dblclick", a.hf)) : (Gg(Gg(Gg(Gg(c, d, "mouseover", a.Uc), d, "mousedown", a.Sc), d, "mouseup", a.kf), d, "mouseout", a.Tc), G && Gg(c, d, "dblclick", a.hf))
}
n.bb = function() {
  W.d.bb.call(this);
  this.Bb && this.Bb.detach();
  this.Ob && this.isEnabled() && this.m.md(this, !1)
};
n.c = function() {
  W.d.c.call(this);
  this.Bb && (this.Bb.f(), delete this.Bb);
  delete this.m;
  this.sa = this.ca = k
};
n.kd = function(a) {
  this.m.kd(this.b(), a);
  this.ld(a)
};
n.ld = aa("ca");
n.df = function() {
  var a = this.ca;
  if(!a) {
    return""
  }
  if(!t(a)) {
    if(s(a)) {
      a = Xa(a, tg).join("")
    }else {
      if(ag && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        ug(a, b, !0);
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
n.jd = function(a) {
  this.Ad = a;
  var b = this.b();
  b && this.m.jd(b, a)
};
n.ze = function(a, b) {
  if(b || this.Ob != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.m.ze(c, a);
    this.isEnabled() && this.m.md(this, a);
    this.Ob = a;
    return!0
  }
  return!1
};
n.isEnabled = function() {
  return!(this.l & 1)
};
function hh(a, b) {
  ih(a, 2, b) && a.ia(2, b)
}
n.ce = function() {
  return!!(this.l & 4)
};
n.setActive = function(a) {
  ih(this, 4, a) && this.ia(4, a)
};
n.we = function(a) {
  ih(this, 8, a) && this.ia(8, a)
};
n.ia = function(a, b) {
  if(this.va & a && b != !!(this.l & a)) {
    this.m.ia(this, a, b), this.l = b ? this.l | a : this.l & ~a
  }
};
function X(a, b) {
  return!!(a.Le & b) && !!(a.va & b)
}
function ih(a, b, c) {
  return!!(a.va & b) && !!(a.l & b) != c && (!(a.$g & b) || a.dispatchEvent(Jg(b, c))) && !a.qa
}
n.Uc = function(a) {
  !jh(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && hh(this, !0)
};
n.Tc = function(a) {
  !jh(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(!1), X(this, 2) && hh(this, !1))
};
function jh(a, b) {
  return!!a.relatedTarget && og(b, a.relatedTarget)
}
n.Sc = function(a) {
  if(this.isEnabled() && (X(this, 2) && hh(this, !0), Hc(a) && (!H || !oc || !a.ctrlKey))) {
    X(this, 4) && this.setActive(!0), this.m.qf(this) && this.fb().focus()
  }
  !this.Ad && Hc(a) && (!H || !oc || !a.ctrlKey) && a.preventDefault()
};
n.kf = function(a) {
  this.isEnabled() && (X(this, 2) && hh(this, !0), this.ce() && this.kb(a) && X(this, 4) && this.setActive(!1))
};
n.hf = function(a) {
  this.isEnabled() && this.kb(a)
};
n.kb = function(a) {
  if(X(this, 16)) {
    var b = !(this.l & 16);
    ih(this, 16, b) && this.ia(16, b)
  }
  X(this, 8) && this.we(!0);
  X(this, 64) && (b = !(this.l & 64), ih(this, 64, b) && this.ia(64, b));
  b = new Cc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, f = 0;d = c[f];f++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
n.xg = function() {
  X(this, 32) && ih(this, 32, !0) && this.ia(32, !0)
};
n.gf = function() {
  X(this, 4) && this.setActive(!1);
  X(this, 32) && ih(this, 32, !1) && this.ia(32, !1)
};
n.jf = function(a) {
  return this.Ob && this.isEnabled() && this.Xd(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
n.Xd = function(a) {
  return a.keyCode == 13 && this.kb(a)
};
v(W) || e(Error("Invalid component class " + W));
v(Pg) || e(Error("Invalid renderer class " + Pg));
var kh = w(W);
Wg[kh] = Pg;
Vg("goog-control", function() {
  return new W(k)
});
function lh() {
}
z(lh, Pg);
ea(lh);
n = lh.prototype;
n.Mc = ba("button");
n.yc = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : lh.d.yc.call(this, a, b, c)
};
n.i = function(a) {
  var b = lh.d.i.call(this, a), c = a.Pc();
  c && this.ye(b, c);
  (c = a.Qc()) && this.pd(b, c);
  a.va & 16 && this.yc(b, 16, !1);
  return b
};
n.Qc = q;
n.pd = q;
n.Pc = function(a) {
  return a.title
};
n.ye = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
n.u = ba("goog-button");
function mh() {
}
z(mh, lh);
ea(mh);
n = mh.prototype;
n.Mc = function() {
};
n.i = function(a) {
  a.t && !1 != a.Yd && gh(a, !1);
  a.Yd = !1;
  a.Le &= -256;
  a.t && a.l & 32 && e(Error("Component already rendered"));
  a.l & 32 && a.ia(32, !1);
  a.va &= -33;
  return a.Da().i("button", {"class":Sg(this, a).join(" "), disabled:!a.isEnabled(), title:a.Pc() || "", value:a.Qc() || ""}, a.df() || "")
};
n.of = function(a) {
  U(Lg(a), a.b(), "click", a.kb)
};
n.jd = q;
n.Kb = q;
n.qf = function(a) {
  return a.isEnabled()
};
n.md = q;
n.ia = function(a, b, c) {
  mh.d.ia.call(this, a, b, c);
  if((a = a.b()) && b == 1) {
    a.disabled = c
  }
};
n.Qc = function(a) {
  return a.value
};
n.pd = function(a, b) {
  if(a) {
    a.value = b
  }
};
n.yc = q;
function nh(a, b, c) {
  W.call(this, a, b || mh.Na(), c)
}
z(nh, W);
n = nh.prototype;
n.Qc = l("ag");
n.pd = function(a) {
  this.ag = a;
  this.m.pd(this.b(), a)
};
n.Pc = l("Wf");
n.ye = function(a) {
  this.Wf = a;
  this.m.ye(this.b(), a)
};
n.c = function() {
  nh.d.c.call(this);
  delete this.ag;
  delete this.Wf
};
n.Q = function() {
  nh.d.Q.call(this);
  if(this.va & 32) {
    var a = this.fb();
    a && U(Lg(this), a, "keyup", this.Xd)
  }
};
n.Xd = function(a) {
  return a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup" ? this.kb(a) : a.keyCode == 32
};
Vg("goog-button", function() {
  return new nh(k)
});
function oh() {
}
z(oh, lh);
ea(oh);
oh.prototype.i = function(a) {
  var b = {"class":"goog-inline-block " + Sg(this, a).join(" "), title:a.Pc() || ""};
  return a.Da().i("div", b, ph(this, a.ca, a.Da()))
};
oh.prototype.Mc = ba("button");
oh.prototype.ac = function(a) {
  return a && a.firstChild.firstChild
};
function ph(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.u() + "-outer-box"), c.i("div", "goog-inline-block " + (a.u() + "-inner-box"), b))
}
oh.prototype.u = ba("goog-custom-button");
function qh(a, b, c) {
  nh.call(this, a, b || oh.Na(), c)
}
z(qh, nh);
Vg("goog-custom-button", function() {
  return new qh(k)
});
var rh = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function sh(a) {
  var b = {}, a = String(a), c = a.charAt(0) == "#" ? a : "#" + a;
  if(th.test(c)) {
    return b.Wc = uh(c), b.type = "hex", b
  }else {
    a: {
      var d = a.match(vh);
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
      return b.Wc = wh(c[0], c[1], c[2]), b.type = "rgb", b
    }else {
      if(rh && (c = rh[a.toLowerCase()])) {
        return b.Wc = c, b.type = "named", b
      }
    }
  }
  e(Error(a + " is not a valid color string"))
}
var xh = /#(.)(.)(.)/;
function uh(a) {
  th.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  a.length == 4 && (a = a.replace(xh, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function yh(a) {
  a = uh(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function wh(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || a < 0 || a > 255 || isNaN(b) || b < 0 || b > 255 || isNaN(c) || c < 0 || c > 255) && e(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = zh(a.toString(16));
  b = zh(b.toString(16));
  c = zh(c.toString(16));
  return"#" + a + b + c
}
var th = /^#(?:[0-9a-f]{3}){1,2}$/i, vh = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function zh(a) {
  return a.length == 1 ? "0" + a : a
}
function Ah(a) {
  var b, c = [255, 255, 255];
  b = Math.min(Math.max(0.45, 0), 1);
  return[Math.round(b * c[0] + (1 - b) * a[0]), Math.round(b * c[1] + (1 - b) * a[1]), Math.round(b * c[2] + (1 - b) * a[2])]
}
;function Ef(a, b) {
  var c;
  a instanceof Ef ? (this.Jb(b == k ? a.ua : b), Bh(this, a.Ga), Ch(this, a.zc), Dh(this, a.La), Eh(this, a.Hb), this.Xa(a.N), Fh(this, a.ha.L()), Gh(this, a.$b)) : a && (c = String(a).match(Ne)) ? (this.Jb(!!b), Bh(this, c[1] || "", !0), Ch(this, c[2] || "", !0), Dh(this, c[3] || "", !0), Eh(this, c[4]), this.Xa(c[5] || "", !0), Fh(this, c[6] || "", !0), Gh(this, c[7] || "", !0)) : (this.Jb(!!b), this.ha = new Hh(k, this, this.ua))
}
n = Ef.prototype;
n.Ga = "";
n.zc = "";
n.La = "";
n.Hb = k;
n.N = "";
n.$b = "";
n.Fg = !1;
n.ua = !1;
n.toString = function() {
  if(this.pa) {
    return this.pa
  }
  var a = [];
  this.Ga && a.push(Ih(this.Ga, Jh), ":");
  this.La && (a.push("//"), this.zc && a.push(Ih(this.zc, Jh), "@"), a.push(t(this.La) ? encodeURIComponent(this.La) : k), this.Hb != k && a.push(":", String(this.Hb)));
  this.N && (this.La && this.N.charAt(0) != "/" && a.push("/"), a.push(Ih(this.N, this.N.charAt(0) == "/" ? Kh : Lh)));
  var b = String(this.ha);
  b && a.push("?", b);
  this.$b && a.push("#", Ih(this.$b, Mh));
  return this.pa = a.join("")
};
n.L = function() {
  var a = this.Ga, b = this.zc, c = this.La, d = this.Hb, f = this.N, g = this.ha.L(), h = this.$b, j = new Ef(k, this.ua);
  a && Bh(j, a);
  b && Ch(j, b);
  c && Dh(j, c);
  d && Eh(j, d);
  f && j.Xa(f);
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
  a.zc = c ? b ? decodeURIComponent(b) : "" : b
}
function Dh(a, b, c) {
  Nh(a);
  delete a.pa;
  a.La = c ? b ? decodeURIComponent(b) : "" : b
}
function Eh(a, b) {
  Nh(a);
  delete a.pa;
  b ? (b = Number(b), (isNaN(b) || b < 0) && e(Error("Bad port number " + b)), a.Hb = b) : a.Hb = k
}
n.Xa = function(a, b) {
  Nh(this);
  delete this.pa;
  this.N = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function Fh(a, b, c) {
  Nh(a);
  delete a.pa;
  b instanceof Hh ? (a.ha = b, a.ha.He = a, a.ha.Jb(a.ua)) : (c || (b = Ih(b, Oh)), a.ha = new Hh(b, a, a.ua))
}
function Gh(a, b, c) {
  Nh(a);
  delete a.pa;
  a.$b = c ? b ? decodeURIComponent(b) : "" : b
}
function Nh(a) {
  a.Fg && e(Error("Tried to modify a read-only Uri"))
}
n.Jb = function(a) {
  this.ua = a;
  this.ha && this.ha.Jb(a);
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
  this.He = b || k;
  this.ua = !!c
}
function Rh(a) {
  if(!a.o && (a.o = new Qb, a.Aa)) {
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
n.Pa = function() {
  Rh(this);
  return this.g == 0
};
n.ba = function(a) {
  Rh(this);
  a = Sh(this, a);
  return this.o.ba(a)
};
n.Gc = function(a) {
  var b = this.W();
  return $a(b, a)
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
      s(d) ? eb(a, d) : a.push(d)
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
  delete a.Jd;
  delete a.Aa;
  a.He && delete a.He.pa
}
n.L = function() {
  var a = new Hh;
  if(this.Jd) {
    a.Jd = this.Jd
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
n.Jb = function(a) {
  a && !this.ua && (Rh(this), Th(this), Ob(this.o, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ua = a
};
n.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Ob(arguments[b], function(a, b) {
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
  this.tg = a;
  this.Nd = new Dg(this);
  this.Lc = new Qb
}
z(Vh, V);
n = Vh.prototype;
n.a = Q("goog.ui.media.FlashObject");
n.ih = "window";
n.Me = "#000000";
n.gg = "sameDomain";
n.aa = function(a, b) {
  this.qb = t(a) ? a : Math.round(a) + "px";
  this.Zd = t(b) ? b : Math.round(b) + "px";
  this.b() && xg(this.b() ? this.b().firstChild : k, this.qb, this.Zd);
  return this
};
n.Q = function() {
  Vh.d.Q.call(this);
  var a = this.b(), b;
  b = G ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = G ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = ra(c, this.ih), d = this.Lc.Ea(), f = this.Lc.W(), g = [], h = 0;h < d.length;h++) {
    var j = ta(d[h]), m = ta(f[h]);
    g.push(j + "=" + m)
  }
  b = ra(b, Kg(this), Kg(this), "goog-ui-media-flash-object", va(this.tg), va(g.join("&")), this.Me, this.gg, c);
  a.innerHTML = b;
  this.qb && this.Zd && this.aa(this.qb, this.Zd);
  U(this.Nd, this.b(), Ra(yc), Dc)
};
n.i = function() {
  this.Mf != k && !(Ca(Uh, this.Mf) >= 0) && (N(this.a, "Required flash version not found:" + this.Mf), e(Error("Method not supported")));
  var a = this.Da().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
n.c = function() {
  Vh.d.c.call(this);
  this.Lc = k;
  this.Nd.f();
  this.Nd = k
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
  if(lc && !I("1.8.1.20")) {
    return Ad(new Wh("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(Ca(Uh, "9") >= 0)) {
    return b = Uh, Ad(new Wh("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  f = "_" + Fd();
  var h = new od(d);
  o.__loadFlashObject_callbacks[f] = function() {
    a.setTimeout(function() {
      d();
      ud(h, T(g))
    }, 0)
  };
  b.Lc.set("onloadcallback", '__loadFlashObject_callbacks["' + f + '"]()');
  g = Kg(b);
  Mg(b, c);
  return h
}
function Yh(a, b, c) {
  var d = Xh(a, b, c), f = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  xd(d, function(b) {
    a.clearTimeout(f);
    return b
  });
  return d
}
;var mf = 1;
function Zh(a, b) {
  this.jh = a;
  this.xf = b
}
Zh.prototype.ee = 0;
Zh.prototype.dd = 0;
Zh.prototype.Qd = !1;
function $h(a) {
  var b = [];
  if(a.Qd) {
    return[b, 2]
  }
  var c = a.ee, d = a.jh.responseText;
  for(a.ee = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var f = d.substr(a.dd, c - a.dd), f = f.replace(/\r$/, "");
    if(f.length > a.xf) {
      return a.Qd = !0, [b, 2]
    }
    b.push(f);
    a.dd = c += 1
  }
  return a.ee - a.dd - 1 > a.xf ? (a.Qd = !0, [b, 2]) : [b, mf]
}
;var ai = !(G || H && !I("420+"));
function bi(a, b) {
  this.ud = a;
  this.ma = b
}
z(bi, J);
n = bi.prototype;
n.q = k;
n.Va = -1;
n.ff = !1;
n.lf = ["Content-Length", "Server", "Date", "Expires", "Keep-Alive", "Content-Type", "Transfer-Encoding", "Cache-Control"];
function ci(a) {
  var b = $h(a.Ve), c = b[0], b = b[1], d = o.parent;
  d ? (d.__XHRMaster_onframes(a.ma, c, b), b != mf && a.f()) : a.f()
}
n.Cg = function() {
  ci(this);
  if(!this.qa) {
    var a = o.parent;
    a && a.__XHRMaster_oncomplete(this.ma);
    this.f()
  }
};
n.Sg = function() {
  var a = o.parent;
  if(a) {
    this.Va = this.q.Oa();
    if(this.Va >= 2 && !this.ff) {
      for(var b = new Qb, c = this.lf.length;c--;) {
        var d = this.lf[c];
        try {
          b.set(d, this.q.j.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.U() && (this.ff = !0, a.__XHRMaster_ongotheaders(this.ma, Ub(b)), this.qa)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.ma, this.Va);
    ai && this.Va == 3 && ci(this)
  }else {
    this.f()
  }
};
n.he = function(a, b, c) {
  this.q = new cf;
  M(this.q, "readystatechange", x(this.Sg, this));
  M(this.q, "complete", x(this.Cg, this));
  this.q.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.Ve = new Zh(this.q.j, 1048576)
};
n.c = function() {
  bi.d.c.call(this);
  delete this.Ve;
  this.q && this.q.f();
  delete this.ud.uc[this.ma];
  delete this.ud
};
function di() {
  this.uc = {}
}
z(di, J);
di.prototype.Ig = function(a, b, c, d) {
  var f = new bi(this, a);
  this.uc[a] = f;
  f.he(b, c, d)
};
di.prototype.qg = function(a) {
  (a = this.uc[a]) && a.f()
};
di.prototype.c = function() {
  di.d.c.call(this);
  for(var a = Ra(this.uc);a.length;) {
    a.pop().f()
  }
  delete this.uc
};
var ei = new di;
o.__XHRSlave_makeRequest = x(ei.Ig, ei);
o.__XHRSlave_dispose = x(ei.qg, ei);
function fi(a) {
  this.r = a
}
var gi = /\s*;\s*/;
n = fi.prototype;
n.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && H) {
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
  return ii(this).bg
};
n.Pa = function() {
  return!this.r.cookie
};
n.U = function() {
  return!this.r.cookie ? 0 : (this.r.cookie || "").split(gi).length
};
n.ba = function(a) {
  return ga(this.get(a))
};
n.Gc = function(a) {
  for(var b = ii(this).bg, c = 0;c < b.length;c++) {
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
  return{keys:b, bg:c}
}
var hi = new fi(document);
hi.Mh = 3950;
function ji() {
  this.ui = "demosminerva_site_uaid";
  this.vi = "demosminerva_site_uaid_secure"
}
function ki(a) {
  var b = new Vh("/compiled_client/FlashConnector.swf?cb=2ae8d8a79afe8f3a96bb49e8a9339914");
  b.Me = "#777777";
  b.aa(300, 30);
  var c = T("FlashConnectorSwf");
  c || e(Error("no FlashConnectorSwf?"));
  return Yh(a.M, b, c)
}
function li(a, b, c) {
  var d = new Ef(document.location);
  if(c) {
    var f = d.La, b = ki(a);
    vd(b, function(b) {
      b = new pe(a, b);
      return new tf(f, 843, b)
    });
    return b
  }else {
    return b ? (b = rf(), vd(b, function() {
      var a = T("xdrframe-1").contentWindow || (H ? T("xdrframe-1").document || T("xdrframe-1").contentWindow.document : T("xdrframe-1").contentDocument || T("xdrframe-1").contentWindow.document).parentWindow || (H ? T("xdrframe-1").document || T("xdrframe-1").contentWindow.document : T("xdrframe-1").contentDocument || T("xdrframe-1").contentWindow.document).defaultView, b = T("xdrframe-2").contentWindow || (H ? T("xdrframe-2").document || T("xdrframe-2").contentWindow.document : T("xdrframe-2").contentDocument || 
      T("xdrframe-2").contentWindow.document).parentWindow || (H ? T("xdrframe-2").document || T("xdrframe-2").contentWindow.document : T("xdrframe-2").contentDocument || T("xdrframe-2").contentWindow.document).defaultView;
      a || e(Error("could not get primaryWindow xdrframe"));
      b || e(Error("could not get secondaryWindow xdrframe"));
      var c = new Ef(o.__XDRSetup.baseurl1);
      c.Xa("/httpface/");
      var d = new Ef(o.__XDRSetup.baseurl2);
      d.Xa("/httpface/");
      return new uf(c.toString(), a, d.toString(), b)
    }), b) : (b = d.L(), b.Xa("/httpface/"), Fh(b, "", i), b = new uf(b.toString(), o, b.toString(), o), zd(b))
  }
}
function mi() {
  var a = ni, b = (new Ef(document.location)).ha, c = b.get("mode") != "http", b = Boolean(Number(b.get("useSub", "1")));
  return li(a, b, c)
}
;function oi() {
  this.Kf = y()
}
var pi = new oi;
oi.prototype.set = aa("Kf");
oi.prototype.reset = function() {
  this.set(y())
};
oi.prototype.get = l("Kf");
function qi(a) {
  this.Qg = a || "";
  this.Zg = pi
}
qi.prototype.Sf = !0;
qi.prototype.Xg = !0;
qi.prototype.Wg = !0;
qi.prototype.Tf = !1;
function ri(a) {
  return a < 10 ? "0" + a : String(a)
}
function si(a, b) {
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
function ti(a) {
  qi.call(this, a)
}
z(ti, qi);
ti.prototype.Tf = !0;
function ui(a) {
  this.Rg = x(this.fg, this);
  this.bf = new ti;
  this.pf = this.bf.Sf = !1;
  this.e = a;
  this.sg = this.e.ownerDocument || this.e.document;
  var a = bg(this.e), b = k;
  if(G) {
    b = a.r.createStyleSheet(), Ag(b)
  }else {
    var c = eg(a.r, "head", i, i)[0];
    c || (b = eg(a.r, "body", i, i)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    Ag(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
ui.prototype.fg = function(a) {
  var b = this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight <= 100, c = this.sg.createElement("div");
  c.className = "logmsg";
  var d = this.bf, f;
  switch(a.Eb.value) {
    case Xd.value:
      f = "dbg-sh";
      break;
    case Yd.value:
      f = "dbg-sev";
      break;
    case Zd.value:
      f = "dbg-w";
      break;
    case $d.value:
      f = "dbg-i";
      break;
    default:
      f = "dbg-f"
  }
  var g = [];
  g.push(d.Qg, " ");
  if(d.Sf) {
    var h = new Date(a.Vf);
    g.push("[", ri(h.getFullYear() - 2E3) + ri(h.getMonth() + 1) + ri(h.getDate()) + " " + ri(h.getHours()) + ":" + ri(h.getMinutes()) + ":" + ri(h.getSeconds()) + "." + ri(Math.floor(h.getMilliseconds() / 10)), "] ")
  }
  d.Xg && g.push("[", Ba(si(a, d.Zg.get())), "s] ");
  d.Wg && g.push("[", va(a.Hg), "] ");
  g.push('<span class="', f, '">', ua(Ba(va(a.Af))));
  d.Tf && a.Pd && g.push("<br>", ua(Ba(a.Od || "")));
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
  this.Id = !1
}
z(Y, kd);
n = Y.prototype;
n.ta = k;
n.e = k;
n.Xf = k;
n.b = l("e");
n.addEventListener = function(a, b, c, d) {
  M(this.e, a, b, c, d)
};
n.removeEventListener = function(a, b, c, d) {
  cd(this.e, a, b, c, d)
};
n.c = function() {
  Y.d.c.call(this);
  gd(this.e)
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
Z.prototype.ug = l("fill");
Z.prototype.wg = l("Ee");
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
  mg(this.b())
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
;function Pf(a, b) {
  this.Ed = a;
  this.kc = b || 1
}
z(Pf, Ei);
Pf.prototype.ea = l("Ed");
function Of(a, b) {
  this.qb = a;
  this.Ed = b
}
Of.prototype.ea = l("Ed");
function Fi() {
  this.B = [];
  this.g = [];
  this.xa = []
}
Fi.prototype.tb = k;
Fi.prototype.T = k;
Fi.prototype.Lb = !0;
var Gi = [2, 2, 6, 6, 0];
n = Fi.prototype;
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
  var f = this.T[0] - a * Math.cos(re(c)) + a * Math.cos(re(c + d)), g = this.T[1] - b * Math.sin(re(c)) + b * Math.sin(re(c + d));
  this.B.push(3);
  this.g.push(1);
  this.xa.push(a, b, c, d, f, g);
  this.Lb = !1;
  this.T = [f, g];
  return this
};
n.hg = function(a, b, c, d) {
  var f = this.T[0] - a * Math.cos(re(c)), g = this.T[1] - b * Math.sin(re(c)), h = re(d), d = Math.ceil(Math.abs(h) / Math.PI * 2);
  h /= d;
  for(var c = re(c), j = 0;j < d;j++) {
    var m = Math.cos(c), p = Math.sin(c), A = 4 / 3 * Math.sin(h / 2) / (1 + Math.cos(h / 2)), r = f + (m - A * p) * a, u = g + (p + A * m) * b;
    c += h;
    m = Math.cos(c);
    p = Math.sin(c);
    this.Ue(r, u, f + (m + A * p) * a, g + (p - A * m) * b, f + m * a, g + p * b)
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
  a.tb = this.tb && this.tb.concat();
  a.T = this.T && this.T.concat();
  a.Lb = this.Lb;
  return a
};
var Ii = {};
Ii[0] = Fi.prototype.moveTo;
Ii[1] = Fi.prototype.lineTo;
Ii[4] = Fi.prototype.close;
Ii[2] = Fi.prototype.Ue;
Ii[3] = Fi.prototype.hg;
function Ji(a) {
  if(a.Lb) {
    return a.L()
  }
  var b = new Fi;
  Hi(a, function(a, d) {
    Ii[a].apply(b, d)
  });
  return b
}
Fi.prototype.Pa = function() {
  return this.B.length == 0
};
function Ki(a, b, c, d, f) {
  V.call(this, f);
  this.width = a;
  this.height = b;
  this.ja = c || k;
  this.Vb = d || k
}
z(Ki, V);
n = Ki.prototype;
n.G = k;
n.Ka = 0;
n.ab = 0;
n.ef = function() {
  return this.V()
};
n.V = function() {
  return this.t ? zg(this.b()) : ka(this.width) && ka(this.height) ? new S(this.width, this.height) : k
};
function Li(a) {
  var b = a.V();
  return b ? b.width / (a.ja ? new S(a.ja, a.Vb) : a.V()).width : 0
}
;function Mi(a, b, c, d, f) {
  Ki.call(this, a, b, c, d, f);
  this.Xe = {};
  this.Ie = H && !I(526);
  this.gb = new Dg(this)
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
n.Ja = function(a, b) {
  (b || this.G).b().appendChild(a.b())
};
n.te = function(a, b) {
  var c = a.b();
  b instanceof Pf ? (c.setAttribute("fill", b.ea()), c.setAttribute("fill-opacity", b.kc)) : c.setAttribute("fill", "none")
};
n.ue = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.ea());
    var d = b.qb;
    t(d) && d.indexOf("px") != -1 ? c.setAttribute("stroke-width", parseFloat(d) / Li(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
n.i = function() {
  var a = Oi(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = Oi(this, "g");
  this.Kd = Oi(this, "defs");
  this.G = new Ai(b, this);
  a.appendChild(this.Kd);
  a.appendChild(b);
  this.e = a;
  if(this.ja || this.Ka || this.ab) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.Ie ? this.vd() : this.b().setAttribute("viewBox", this.Ka + " " + this.ab + " " + (this.ja ? this.ja + " " + this.Vb : ""))
  }
};
n.vd = function() {
  if(this.t && (this.ja || this.Ka || !this.ab)) {
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
  xg(this.b(), a, b)
};
n.V = function() {
  if(!lc) {
    return this.t ? zg(this.b()) : Mi.d.V.call(this)
  }
  var a = this.width, b = this.height, c = t(a) && a.indexOf("%") != -1, d = t(b) && b.indexOf("%") != -1;
  if(!this.t && (c || d)) {
    return k
  }
  var f, g;
  if(c) {
    f = this.b().parentNode, g = zg(f), a = parseFloat(a) * g.width / 100
  }
  d && (f = f || this.b().parentNode, g = g || zg(f), b = parseFloat(b) * g.height / 100);
  return new S(a, b)
};
n.clear = function() {
  this.G.clear();
  mg(this.Kd);
  this.Xe = {}
};
n.Ic = function(a, b, c, d, f, g, h) {
  a = Oi(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new Ci(a, this, f, g);
  this.Ja(f, h);
  return f
};
n.drawImage = function(a, b, c, d, f, g) {
  a = Oi(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new Di(a, this);
  this.Ja(f, g);
  return f
};
n.Q = function() {
  var a = this.V();
  Mi.d.Q.call(this);
  a || this.dispatchEvent("resize");
  if(this.Ie) {
    var a = this.width, b = this.height;
    typeof a == "string" && a.indexOf("%") != -1 && typeof b == "string" && b.indexOf("%") != -1 && U(this.gb, Pi(), nd, this.vd);
    this.vd()
  }
};
n.bb = function() {
  Mi.d.bb.call(this);
  this.Ie && Gg(this.gb, Pi(), nd, this.vd)
};
n.c = function() {
  delete this.Xe;
  delete this.Kd;
  delete this.G;
  Mi.d.c.call(this)
};
function Pi() {
  Ni || (Ni = new ld(400), Ni.start());
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
  mg(this.b())
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
  this.ki = c;
  this.li = d;
  this.Di = f;
  this.Ei = g
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
  this.gb = new Dg(this)
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
Vi.prototype.Ja = function(a, b) {
  (b || this.G).b().appendChild(a.b());
  Yi(this)
};
Vi.prototype.te = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    f.tagName == "fill" && c.removeChild(f)
  }
  b instanceof Pf ? b.ea() == "transparent" ? c.filled = !1 : b.kc != 1 ? (c.filled = !0, d = Xi(this, "fill"), d.opacity = Math.round(b.kc * 100) + "%", d.color = b.ea(), c.appendChild(d)) : (c.filled = !0, c.fillcolor = b.ea()) : c.filled = !1;
  Yi(this)
};
Vi.prototype.ue = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = !0;
    var d = b.qb;
    t(d) && d.indexOf("px") == -1 ? d = parseFloat(d) : d *= Li(this);
    var f = c.getElementsByTagName("stroke")[0];
    d < 1 ? (f = f || Xi(this, "stroke"), f.opacity = d, f.Gi = "1px", f.color = b.ea(), c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.ea(), c.strokeweight = d + "px")
  }else {
    c.stroked = !1
  }
  Yi(this)
};
function aj(a, b, c, d, f) {
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
n.i = function() {
  var a = this.P.r;
  if(!a.namespaces.g_vml_) {
    Wi ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}"
  }
  var a = this.width, b = this.height, c = this.P.i("div", {style:"overflow:hidden;position:relative;width:" + (t(a) && qa(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (t(b) && qa(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = Xi(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.ja ? $(this.ja) + " " + $(this.Vb) : $(a) + " " + $(b);
  d.coordorigin = ga(this.Ka) ? $(this.Ka) + " " + $(this.ab) : "0 0";
  c.appendChild(d);
  this.G = new Ri(d, this);
  M(c, "resize", x(this.Wd, this))
};
n.Wd = function() {
  var a = zg(this.b()), b = this.G.b().style;
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
  xg(this.b(), a, b)
};
n.V = function() {
  var a = this.b();
  return new S(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
n.clear = function() {
  this.G.clear()
};
n.Ic = function(a, b, c, d, f, g, h) {
  var j = Xi(this, "oval");
  aj(j, a - c, b - d, c * 2, d * 2);
  a = new Si(j, this, a, b, c, d, f, g);
  this.Ja(a, h);
  return a
};
n.drawImage = function(a, b, c, d, f, g) {
  var h = Xi(this, "image");
  aj(h, a, b, c, d);
  Wi ? h.src = f : h.setAttribute("src", f);
  a = new Ti(h, this);
  this.Ja(a, g);
  return a
};
n.Q = function() {
  Vi.d.Q.call(this);
  this.Wd();
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
  this.lg = c;
  this.mg = d;
  this.Of = f;
  this.Pf = g;
  this.N = new Fi;
  this.N.clear();
  this.N.moveTo(this.lg + this.Of * Math.cos(re(0)), this.mg + this.Pf * Math.sin(re(0)));
  this.N.arcTo(this.Of, this.Pf, 0, 360);
  this.N.close();
  this.Og = new gj(k, b, this.N, h, j)
}
z(fj, yi);
fj.prototype.za = function(a) {
  this.Og.za(a)
};
function gj(a, b, c, d, f) {
  Z.call(this, a, b, d, f);
  this.Xa(c)
}
z(gj, wi);
gj.prototype.Xb = !1;
gj.prototype.Xa = function(a) {
  this.N = a.Lb ? a : Ji(a);
  this.Xb && dj(this.ta)
};
gj.prototype.za = function(a) {
  this.Xb = !0;
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
  this.kh = c;
  this.lh = d;
  this.Ke = f;
  this.Vd = g;
  this.Yg = h
}
z(hj, zi);
hj.prototype.Xb = !1;
hj.prototype.aa = function(a, b) {
  this.Ke = a;
  this.Vd = b;
  this.Xb && dj(this.ta)
};
hj.prototype.za = function(a) {
  this.nf ? (this.Ke && this.Vd && a.drawImage(this.nf, this.kh, this.lh, this.Ke, this.Vd), this.Xb = !0) : (a = new Image, a.onload = x(this.yg, this, a), a.src = this.Yg)
};
hj.prototype.yg = function(a) {
  this.nf = a;
  dj(this.ta)
};
function ij(a, b, c, d, f) {
  Ki.call(this, a, b, c, d, f)
}
z(ij, Ki);
n = ij.prototype;
n.te = function() {
  dj(this)
};
n.ue = function() {
  dj(this)
};
function jj(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.Xf ? b.Xf.L() : new vi, f = d.fa, g = d.ga;
  (f || g) && c.translate(f, g);
  (d = d.S) && c.rotate(Math.asin(d))
}
n.i = function() {
  var a = this.P.i("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Tb = this.P.i("canvas");
  a.appendChild(this.Tb);
  this.Gg = this.G = new cj(this);
  this.Tg = 0;
  kj(this)
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
    f = this.b().parentNode, g = zg(f), a = parseFloat(a) * g.width / 100
  }
  d && (f = f || this.b().parentNode, g = g || zg(f), b = parseFloat(b) * g.height / 100);
  return new S(a, b)
};
function kj(a) {
  xg(a.b(), a.width, a.height);
  var b = a.V();
  if(b) {
    xg(a.Tb, b.width, b.height), a.Tb.width = b.width, a.Tb.height = b.height, a.ub = k
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
  if(a.Ai) {
    a.zi = !0
  }else {
    if(a.t) {
      a.reset();
      if(a.ja) {
        var b = a.V();
        a.getContext().scale(b.width / a.ja, b.height / a.Vb)
      }
      (a.Ka || a.ab) && a.getContext().translate(-a.Ka, -a.ab);
      jj(a, a.G);
      a.G.za(a.ub);
      a.getContext().restore()
    }
  }
}
function ej(a, b) {
  var c = a.getContext();
  jj(a, b);
  if(!b.ug || !b.wg) {
    b.za(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof Pf) {
        if(d.kc != 0) {
          c.globalAlpha = d.kc, c.fillStyle = d.ea(), b.za(c), c.fill(), c.globalAlpha = 1
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
      b.za(c), c.strokeStyle = d.ea(), d = d.qb, t(d) && d.indexOf("px") != -1 && (d = parseFloat(d) / Li(a)), c.lineWidth = d, c.stroke()
    }
  }
  a.getContext().restore()
}
n.Ja = function(a, b) {
  b = b || this.G;
  b.appendChild(a);
  this.t && !this.Tg && !(b != this.G && b != this.Gg) && ej(this, a)
};
n.Ic = function(a, b, c, d, f, g, h) {
  a = new fj(k, this, a, b, c, d, f, g);
  this.Ja(a, h);
  return a
};
n.drawImage = function(a, b, c, d, f, g) {
  a = new hj(k, this, a, b, c, d, f);
  this.Ja(a, g);
  return a
};
n.c = function() {
  this.ub = k;
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
z(lj, kd);
n = lj.prototype;
n.Wa = k;
n.se = k;
function mj(a, b) {
  b && (Wa(b, function(a) {
    this.sc(a, !1)
  }, a), eb(a.z, b))
}
n.Ud = l("Wa");
n.od = function(a) {
  if(a != this.Wa) {
    this.sc(this.Wa, !1), this.Wa = a, this.sc(a, !0)
  }
  this.dispatchEvent("select")
};
n.Td = function() {
  return this.Wa ? Va(this.z, this.Wa) : -1
};
n.xe = function(a) {
  this.od(this.z[a] || k)
};
n.clear = function() {
  ab(this.z);
  this.Wa = k
};
n.c = function() {
  lj.d.c.call(this);
  delete this.z;
  this.Wa = k
};
n.sc = function(a, b) {
  a && (typeof this.se == "function" ? this.se(a, b) : typeof a.we == "function" && a.we(b))
};
function nj() {
}
z(nj, Pg);
ea(nj);
var oj = 0;
nj.prototype.i = function(a) {
  var b = Sg(this, a);
  return a.Da().i("div", b ? b.join(" ") : k, pj(this, a.ca, a.ef(), a.Da()))
};
function pj(a, b, c, d) {
  for(var f = [], g = 0, h = 0;g < c.height;g++) {
    for(var j = [], m = 0;m < c.width;m++) {
      var p = b && b[h++];
      j.push(qj(a, p, d))
    }
    f.push(d.i("tr", a.u() + "-row", j))
  }
  return a.Te(f, d)
}
nj.prototype.Te = function(a, b) {
  var c = b.i("table", this.u() + "-table", b.i("tbody", this.u() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Og(c, "grid");
  return c
};
function qj(a, b, c) {
  a = c.i("td", {"class":a.u() + "-cell", id:a.u() + "-cell-" + oj++}, b);
  Og(a, "gridcell");
  return a
}
nj.prototype.kd = function(a, b) {
  if(a) {
    var c = eg(document, "tbody", this.u() + "-body", a)[0];
    if(c) {
      var d = 0;
      Wa(c.rows, function(a) {
        Wa(a.cells, function(a) {
          mg(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = bg(a), h = c.rows[0].cells.length;d < b.length;) {
          var j = b[d++];
          f.push(qj(this, j, g));
          if(f.length == h) {
            j = g.i("tr", this.u() + "-row", f), c.appendChild(j), f.length = 0
          }
        }
        if(f.length > 0) {
          for(;f.length < h;) {
            f.push(qj(this, "", g))
          }
          j = g.i("tr", this.u() + "-row", f);
          c.appendChild(j)
        }
      }
    }
    Cg(a, !0, lc)
  }
};
function rj(a, b, c) {
  for(b = b.b();c && c.nodeType == 1 && c != b;) {
    if(c.tagName == "TD" && $a(Xf(c), a.u() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function sj(a, b, c, d) {
  if(c) {
    c = c.parentNode, a = a.u() + "-cell-hover", d ? Yf(c, a) : Zf(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id)
  }
}
nj.prototype.u = ba("goog-palette");
function tj(a, b, c) {
  W.call(this, a, b || nj.Na(), c)
}
z(tj, W);
n = tj.prototype;
n.v = k;
n.hb = -1;
n.I = k;
n.c = function() {
  tj.d.c.call(this);
  if(this.I) {
    this.I.f(), this.I = k
  }
  this.v = k
};
n.ld = function(a) {
  tj.d.ld.call(this, a);
  uj(this);
  this.I ? (this.I.clear(), mj(this.I, a)) : (this.I = new lj(a), this.I.se = x(this.sc, this), U(Lg(this), this.I, "select", this.Bg));
  this.hb = -1
};
n.df = ba(k);
n.Uc = function(a) {
  tj.d.Uc.call(this, a);
  var b = rj(this.m, this, a.target);
  if((!b || !a.relatedTarget || !og(b, a.relatedTarget)) && b != vj(this)) {
    a = this.ca, wj(this, a ? Va(a, b) : -1)
  }
};
n.Tc = function(a) {
  tj.d.Tc.call(this, a);
  var b = rj(this.m, this, a.target);
  (!b || !a.relatedTarget || !og(b, a.relatedTarget)) && b == vj(this) && sj(this.m, this, b, !1)
};
n.Sc = function(a) {
  tj.d.Sc.call(this, a);
  if(this.ce() && (a = rj(this.m, this, a.target), a != vj(this))) {
    var b = this.ca;
    wj(this, b ? Va(b, a) : -1)
  }
};
n.kb = function() {
  var a = vj(this);
  return a ? (this.od(a), this.dispatchEvent("action")) : !1
};
n.jf = function(a) {
  var b = this.ca, b = b ? b.length : 0, c = this.v.width;
  if(b == 0 || !this.isEnabled()) {
    return!1
  }
  if(a.keyCode == 13 || a.keyCode == 32) {
    return this.kb(a)
  }
  if(a.keyCode == 36) {
    return wj(this, 0), !0
  }else {
    if(a.keyCode == 35) {
      return wj(this, b - 1), !0
    }
  }
  var d = this.hb < 0 ? this.Td() : this.hb;
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
n.Bg = function() {
};
n.ef = l("v");
n.aa = function(a, b) {
  this.b() && e(Error("Component already rendered"));
  this.v = ka(a) ? new S(a, b) : a;
  uj(this)
};
function vj(a) {
  var b = a.ca;
  return b && b[a.hb]
}
function wj(a, b) {
  if(b != a.hb) {
    xj(a, a.hb, !1), a.hb = b, xj(a, b, !0)
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
n.od = function(a) {
  this.I && this.I.od(a)
};
function xj(a, b, c) {
  if(a.b()) {
    var d = a.ca;
    d && b >= 0 && b < d.length && sj(a.m, a, d[b], c)
  }
}
n.sc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.m.u() + "-cell-selected";
    b ? Yf(c, d) : Zf(c, d)
  }
};
function uj(a) {
  var b = a.ca;
  if(b) {
    if(a.v && a.v.width) {
      if(b = Math.ceil(b.length / a.v.width), !ka(a.v.height) || a.v.height < b) {
        a.v.height = b
      }
    }else {
      b = Math.ceil(Math.sqrt(b.length)), a.v = new S(b, b)
    }
  }else {
    a.v = new S(0, 0)
  }
}
;function yj(a, b, c) {
  this.Ec = a || [];
  tj.call(this, k, b || nj.Na(), c);
  this.Ec = this.Ec;
  this.cd = k;
  this.kd(zj(this))
}
z(yj, tj);
yj.prototype.cd = k;
function Aj(a) {
  var b = Bj(Cj);
  if(!a.cd) {
    a.cd = Xa(a.Ec, function(a) {
      return Bj(a)
    })
  }
  a.xe(b ? Va(a.cd, b) : -1)
}
function zj(a) {
  return Xa(a.Ec, function(a) {
    var c = this.Da().i("div", {"class":this.m.u() + "-colorswatch", style:"background-color:" + a});
    c.title = a.charAt(0) == "#" ? "RGB (" + yh(a).join(", ") + ")" : a;
    return c
  }, a)
}
function Bj(a) {
  if(a) {
    try {
      return sh(a).Wc
    }catch(b) {
    }
  }
  return k
}
;var Rf = Q("whiteboard.logger");
window.onerror = function(a, b, c) {
  fe(Rf, "window.onerror: message: " + F(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Dj() {
  this.oe = new Cb
}
function Lf(a, b) {
  Rf.info("streamReset: reasonString=" + F(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  Ej = k
}
Dj.prototype.reset = function(a) {
  Rf.info("resetting with reason: " + a);
  this.C.reset(a)
};
var Ej = k, ni = new Bd(o.window);
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
  vd(mi(), function(b) {
    Ej || e(Error("lastProto falsy?"));
    b = new xf(ni, Ej, b, a);
    Ej.C = b;
    Df(Ej.C, ["subprotocol:whiteboard"]);
    b.start();
    return k
  })
}
function Jj() {
  tb.f();
  Qf();
  var a = Ej;
  Rf.info("Telling server to clear the board.");
  var b = a.C, a = [2, a.oe.ob(new zb)], a = (new Fb).ob(a);
  Df(b, [a])
}
function Kj(a) {
  var b = new Fc(a), a = b.offsetX, c = b.offsetY;
  tb.Ic(a, c, 5, 5, new Of(1, "black"), new Pf(ub), i);
  var d = Ej, f = ub;
  Rf.info("Telling server about circle at: " + a + ", " + c + " with color " + f);
  var b = d.C, g = new yb;
  ob(g, 1, a);
  ob(g, 2, c);
  ob(g, 3, f);
  a = d.oe.ob(g);
  Df(b, [(new Fb).ob([1, a])])
}
function Qf() {
  var a;
  a = G && !I("9") ? new Vi(800, 600, i, i, i) : H && (!I("420") || mc) ? new ij(800, 600, i, i, i) : new Mi(800, 600, i, i, i);
  a.i();
  vb = T("drawArea");
  Mg(a, vb);
  tb = a
}
var Cj = "#E06666";
function Lj(a) {
  var b;
  (a = a.target.Ud()) ? (a = a.style[Ga("background-color")] || "", b = Bj(a)) : b = k;
  b || (b = Cj);
  ub = b;
  hi.set("whiteboard_defaultColor", b);
  a = T("whiteboard-cp-value");
  t("background-color") ? vg(a, b, "background-color") : Qa("background-color", pa(vg, a));
  a = T("whiteboard-cp-value");
  a.title = b;
  b = sh(b).Wc;
  pg(a, b);
  b = yh(b);
  b = wh(Ah(b)[0], Ah(b)[1], Ah(b)[2]);
  t("color") ? vg(a, b, "color") : Qa("color", pa(vg, a))
}
function Mj() {
  wb = (new Ef(document.location)).ha;
  if(xb = Boolean(Number(wb.get("logging", "0")))) {
    je().nd(de);
    var a = new ui(document.getElementById("log"));
    if(!0 != a.pf) {
      var b = je(), c = a.Rg;
      if(!b.ec) {
        b.ec = []
      }
      b.ec.push(c);
      a.pf = !0
    }
  }else {
    je().nd(Wd)
  }
  Rf.info("Logger works.");
  (a = hi.get("whiteboard_defaultColor")) && (Cj = a);
  ub = Cj;
  b = T("whiteboard-controls-left");
  a = T("whiteboard-controls-right");
  c = hg("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  lg(b, c);
  c = hg("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  lg(b, c);
  b = new yj(["#EA9999", "#F9CB9C", "#FFE599", "#B6D7A8", "#A2C4C9", "#9FC5E8", "#B4A7D6", "#D5A6BD", "#E06666", "#F6B26B", "#FFD966", "#93C47D", "#76A5AF", "#6FA8DC", "#8E7CC3", "#C27BA0", "#CC0000", "#E69138", "#F1C232", "#6AA84F", "#45818E", "#3D85C6", "#674EA7", "#A64D79"]);
  b.aa(8);
  Mg(b, T("whiteboard-cp"));
  M(b, "action", Lj);
  Aj(b);
  Lj({target:b});
  b = new qh("Clear board");
  fh(b, "clear-board-button");
  Mg(b, a);
  M(b, "action", Jj);
  a = T("drawAreaOverlay");
  Cg(a, !0);
  M(a, "click", Kj, !1);
  Qf();
  Ij()
}
var Nj = "__whiteboard_init".split("."), Oj = o;
!(Nj[0] in Oj) && Oj.execScript && Oj.execScript("var " + Nj[0]);
for(var Pj;Nj.length && (Pj = Nj.shift());) {
  !Nj.length && ga(Mj) ? Oj[Pj] = Mj : Oj = Oj[Pj] ? Oj[Pj] : Oj[Pj] = {}
}
;})();
