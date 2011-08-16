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
function m(a) {
  return function() {
    return a
  }
}
var o, ba = ba || {}, q = this;
function ca(a) {
  for(var a = a.split("."), b = q, c;c = a.shift();) {
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
  a.Na = function() {
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
function w(a) {
  return ea(a) == "function"
}
function ia(a) {
  a = ea(a);
  return a == "object" || a == "array" || a == "function"
}
function x(a) {
  return a[ka] || (a[ka] = ++la)
}
var ka = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), la = 0;
function ma(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function na(a, b, c) {
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
function y(a, b, c) {
  y = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ma : na;
  return y.apply(k, arguments)
}
function oa(a, b) {
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
  for(var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(d.length, f.length), h = 0;c == 0 && h < g;h++) {
    var j = d[h] || "", n = f[h] || "", p = RegExp("(\\d*)(\\D*)", "g"), z = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = p.exec(j) || ["", "", ""], v = z.exec(n) || ["", "", ""];
      if(r[0].length == 0 && v[0].length == 0) {
        break
      }
      c = Ca(r[1].length == 0 ? 0 : parseInt(r[1], 10), v[1].length == 0 ? 0 : parseInt(v[1], 10)) || Ca(r[2].length == 0, v[2].length == 0) || Ca(r[2], v[2])
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
  e(new Ga("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ia(a, b, c) {
  this.B = a;
  this.I = b;
  this.pe = c.name;
  this.yb = !!c.Yi;
  this.Ti = !!c.required;
  this.bc = c.Wd;
  this.Nf = c.type;
  this.gf = !1;
  switch(this.bc) {
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
  return a.bc == 11 || a.bc == 10
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
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
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
  for(var d = a.length, f = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
}, Va = E.map ? function(a, b, c) {
  return E.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = u(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (f[h] = b.call(c, g[h], h, a))
  }
  return f
}, Wa = E.some ? function(a, b, c) {
  return E.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return!0
    }
  }
  return!1
}, Xa = E.every ? function(a, b, c) {
  return E.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && !b.call(c, f[g], g, a)) {
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
    var d = arguments[c], f;
    if(t(d) || (f = ga(d)) && d.hasOwnProperty("callee")) {
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
  this.pe = b.name || k;
  this.Mi = b.mf || k;
  this.Ii = b.Hi;
  this.La = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.La[b.I] = b
  }
}
function ib(a) {
  a = Qa(a.La);
  fb(a, function(a, c) {
    return a.I - c.I
  });
  return a
}
;function jb() {
  this.u = {};
  this.ub = this.constructor.ub;
  var a = this.ub.La, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.La = b;
  this.Yb = this.le = k
}
function kb(a, b) {
  for(var c in a.u) {
    a.La[c] || b.call(a, Number(c), a.u[c])
  }
}
o = jb.prototype;
o.ec = l("ub");
o.get = function(a, b) {
  return lb(this, a.I, b)
};
o.set = function(a, b) {
  mb(this, a.I, b)
};
o.add = function(a, b) {
  var c = a.I;
  this.u[c] || (this.u[c] = []);
  this.u[c].push(b)
};
o.clear = function(a) {
  delete this.u[a.I]
};
o.n = function(a) {
  if(!a || this.constructor != a.constructor) {
    return!1
  }
  for(var b = ib(this.ec()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(nb(this, d.I) != nb(a, d.I)) {
      return!1
    }
    if(nb(this, d.I)) {
      var f = Oa(d), g = d.I, h = this.u[g], g = a.u[g];
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
o.Ze = function(a) {
  for(var b = ib(this.ec()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete this.u[d.I];
    if(nb(a, d.I)) {
      var f = Oa(d);
      if(d.yb) {
        var g;
        g = a;
        var h = d.I;
        ob(g, g.La[h]);
        g = g.u[h] || [];
        for(h = 0;h < g.length;h++) {
          this.add(d, f ? g[h].J() : g[h])
        }
      }else {
        g = a.get(d), this.set(d, f ? g.J() : g)
      }
    }
  }
};
o.J = function() {
  var a = new this.constructor;
  a.Ze(this);
  return a
};
function nb(a, b) {
  return b in a.u && fa(a.u[b])
}
function ob(a, b) {
  if(a.le) {
    var c = b.I;
    if(!(c in a.Yb)) {
      var d = a.u, f;
      f = a.le;
      var g = a.u[c];
      if(g == k) {
        f = g
      }else {
        if(b.yb) {
          var h = [];
          t(g);
          for(var j = 0;j < g.length;j++) {
            h[j] = f.Rc(b, g[j])
          }
          f = h
        }else {
          f = f.Rc(b, g)
        }
      }
      d[c] = f;
      a.Yb[c] = !0
    }
  }
}
function lb(a, b, c) {
  var d = a.La[b];
  ob(a, d);
  return d.yb ? (c = c || 0, c >= 0 && pb(a, b), a.u[b][c]) : (t(a.u[b]), b in a.u ? a.u[b] : k)
}
function pb(a, b) {
  return a.La[b].yb ? (nb(a, b) && t(a.u[b]), nb(a, b) ? a.u[b].length : 0) : nb(a, b) ? 1 : 0
}
function mb(a, b, c) {
  a.u[b] = c;
  a.Yb && (a.Yb[b] = !0)
}
function qb(a, b) {
  var c = [], d, f;
  for(f in b) {
    b.hasOwnProperty(f) && (f == 0 ? d = b[0] : c.push(new Ia(a, f, b[f])))
  }
  a.ub = new hb(a, d, c);
  a.ec = function() {
    return a.ub
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
qb(wb, {0:{name:"Point", mf:"demosminerva.whiteboard_messages.Point"}, 1:{name:"x", Wd:5, type:Number}, 2:{name:"y", Wd:5, type:Number}, 3:{name:"color", Wd:9, type:String}});
qb(xb, {0:{name:"ClearBoard", mf:"demosminerva.whiteboard_messages.ClearBoard"}});
function yb() {
}
yb.prototype.Sc = function(a, b) {
  return Oa(a) ? this.lb(b) : b
};
yb.prototype.Qd = function(a) {
  new a.Lf;
  e(Error("Unimplemented"))
};
yb.prototype.Rc = function(a, b) {
  if(Oa(a)) {
    return this.Qd(a.Nf.ub, b)
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
zb.prototype.Qd = function(a, b) {
  var c = new a.Lf;
  c.le = this;
  c.u = b;
  c.Yb = {};
  return c
};
function Ab() {
}
C(Ab, zb);
Ab.prototype.lb = function(a) {
  for(var b = ib(a.ec()), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    if(nb(a, f.I)) {
      var g = f.I;
      if(f.yb) {
        c[g] = [];
        for(var h = 0;h < pb(a, f.I);h++) {
          c[g][h] = this.Sc(f, a.get(f, h))
        }
      }else {
        c[g] = this.Sc(f, a.get(f))
      }
    }
  }
  kb(a, function(a, b) {
    c[a] = b
  });
  return c
};
Ab.prototype.Sc = function(a, b) {
  return a.bc == 8 ? b ? 1 : 0 : yb.prototype.Sc.apply(this, arguments)
};
Ab.prototype.Rc = function(a, b) {
  return a.bc == 8 ? b === 1 : yb.prototype.Rc.apply(this, arguments)
};
function Bb(a) {
  return w(a) || typeof a == "object" && w(a.call) && w(a.apply)
}
;function Cb(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
function Db() {
}
Db.prototype.lb = function(a) {
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
        for(var f = "", g = 0;g < d;g++) {
          c.push(f), Eb(a, b[g], c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (g = b[f], typeof g != "function" && (c.push(d), Fb(f, c), c.push(":"), Eb(a, g, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var Gb = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\u000b"}, Hb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Fb(a, b) {
  b.push('"', a.replace(Hb, function(a) {
    if(a in Gb) {
      return Gb[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    b < 16 ? f += "000" : b < 256 ? f += "00" : b < 4096 && (f += "0");
    return Gb[a] = f + b.toString(16)
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
        if(Bb(a.z)) {
          a.z(b, c)
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
                for(var f = "", g = 0;g < d;g++) {
                  b.push(f), Ib(a[g], b, c), f = ", "
                }
                b.push("]")
              }else {
                if(d == "object") {
                  if(ha(a) && typeof a.valueOf == "function") {
                    b.push("new Date(", String(a.valueOf()), ")")
                  }else {
                    for(var d = Ra(a).concat(Sa), f = {}, h = g = 0;h < d.length;) {
                      var j = d[h++], n = ia(j) ? "o" + x(j) : (typeof j).charAt(0) + j;
                      Object.prototype.hasOwnProperty.call(f, n) || (f[n] = !0, d[g++] = j)
                    }
                    d.length = g;
                    b.push("{");
                    f = "";
                    for(h = 0;h < d.length;h++) {
                      g = d[h], Object.prototype.hasOwnProperty.call(a, g) && (j = a[g], b.push(f), Fb(g, b), b.push(": "), Ib(j, b, c), f = ", ")
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
  if(typeof a.Ea == "function") {
    return a.Ea()
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
      for(var d = Lb(a), f = Kb(a), g = f.length, h = 0;h < g;h++) {
        b.call(c, f[h], d && d[h], a)
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
  for(var c = Lb(a), d = Kb(a), f = d.length, g = 0;g < f;g++) {
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
    c % 2 && e(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.Cd(a)
  }
}
o = Ob.prototype;
o.g = 0;
o.Re = 0;
o.W = l("g");
o.Y = function() {
  Pb(this);
  for(var a = [], b = 0;b < this.l.length;b++) {
    a.push(this.p[this.l[b]])
  }
  return a
};
o.Ea = function() {
  Pb(this);
  return this.l.concat()
};
o.ca = function(a) {
  return Qb(this.p, a)
};
o.Jc = function(a) {
  for(var b = 0;b < this.l.length;b++) {
    var c = this.l[b];
    if(Qb(this.p, c) && this.p[c] == a) {
      return!0
    }
  }
  return!1
};
o.n = function(a, b) {
  if(this === a) {
    return!0
  }
  if(this.g != a.W()) {
    return!1
  }
  var c = b || Rb;
  Pb(this);
  for(var d, f = 0;d = this.l[f];f++) {
    if(!c(this.get(d), a.get(d))) {
      return!1
    }
  }
  return!0
};
function Rb(a, b) {
  return a === b
}
o.Pa = function() {
  return this.g == 0
};
o.clear = function() {
  this.p = {};
  this.Re = this.g = this.l.length = 0
};
o.remove = function(a) {
  return Qb(this.p, a) ? (delete this.p[a], this.g--, this.Re++, this.l.length > 2 * this.g && Pb(this), !0) : !1
};
function Pb(a) {
  if(a.g != a.l.length) {
    for(var b = 0, c = 0;b < a.l.length;) {
      var d = a.l[b];
      Qb(a.p, d) && (a.l[c++] = d);
      b++
    }
    a.l.length = c
  }
  if(a.g != a.l.length) {
    for(var f = {}, c = b = 0;b < a.l.length;) {
      d = a.l[b], Qb(f, d) || (a.l[c++] = d, f[d] = 1), b++
    }
    a.l.length = c
  }
}
o.get = function(a, b) {
  return Qb(this.p, a) ? this.p[a] : b
};
o.set = function(a, b) {
  Qb(this.p, a) || (this.g++, this.l.push(a), this.Re++);
  this.p[a] = b
};
o.Cd = function(a) {
  var b;
  a instanceof Ob ? (b = a.Ea(), a = a.Y()) : (b = Ra(a), a = Qa(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
o.J = function() {
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
          e(Error("cannot determine size of object type " + b))
        }
      }
    }
  }
}
;function Ub(a, b) {
  this.ob = a;
  this.kb = b
}
Ub.prototype.n = function(a) {
  return a instanceof Ub && this.ob == a.ob && this.kb.join(",") == a.kb
};
Ub.prototype.z = function(a, b) {
  a.push("new SACK(", String(this.ob), ", ");
  G(this.kb, a, b);
  a.push(")")
};
function Vb() {
  this.A = new Ob
}
o = Vb.prototype;
o.tb = -1;
o.w = 0;
o.append = function(a) {
  var b = Tb(a);
  this.A.set(this.tb + 1, [a, b]);
  this.tb += 1;
  this.w += b
};
o.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
o.z = function(a) {
  a.push("<Queue with ", String(this.A.W()), " item(s), counter=#", String(this.tb), ", size=", String(this.w), ">")
};
function Wb(a) {
  Pb(a.A);
  fb(a.A.l);
  return a.A.l
}
function Xb() {
  this.Xa = new Ob
}
Xb.prototype.Ab = -1;
Xb.prototype.w = 0;
function Yb(a) {
  var b = a.Xa.Ea();
  fb(b);
  return new Ub(a.Ab, b)
}
var Zb = {};
function $b() {
  return!0
}
;var ac, bc, cc, dc, ec;
function fc() {
  return q.navigator ? q.navigator.userAgent : k
}
ec = dc = cc = bc = ac = !1;
var gc;
if(gc = fc()) {
  var hc = q.navigator;
  ac = gc.indexOf("Opera") == 0;
  bc = !ac && gc.indexOf("MSIE") != -1;
  dc = (cc = !ac && gc.indexOf("WebKit") != -1) && gc.indexOf("Mobile") != -1;
  ec = !ac && !cc && hc.product == "Gecko"
}
var ic = ac, I = bc, jc = ec, J = cc, kc = dc, lc = q.navigator, mc = (lc && lc.platform || "").indexOf("Mac") != -1, nc;
a: {
  var oc = "", pc;
  if(ic && q.opera) {
    var qc = q.opera.version, oc = typeof qc == "function" ? qc() : qc
  }else {
    if(jc ? pc = /rv\:([^\);]+)(\)|;)/ : I ? pc = /MSIE\s+([^\);]+)(\)|;)/ : J && (pc = /WebKit\/(\S+)/), pc) {
      var rc = pc.exec(fc()), oc = rc ? rc[1] : ""
    }
  }
  if(I) {
    var sc, tc = q.document;
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
L.prototype.ra = !1;
L.prototype.f = function() {
  if(!this.ra) {
    this.ra = !0, this.c()
  }
};
L.prototype.c = function() {
  this.Cg && Bc.apply(k, this.Cg)
};
function Bc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ga(d) ? Bc.apply(k, d) : d && typeof d.f == "function" && d.f()
  }
}
;function Cc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
C(Cc, L);
o = Cc.prototype;
o.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
o.ib = !1;
o.tc = !0;
o.stopPropagation = function() {
  this.ib = !0
};
o.preventDefault = function() {
  this.tc = !1
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
  a && this.ic(a, b)
}
C(Fc, Cc);
var Gc = [1, 4, 2];
o = Fc.prototype;
o.target = k;
o.relatedTarget = k;
o.offsetX = 0;
o.offsetY = 0;
o.clientX = 0;
o.clientY = 0;
o.screenX = 0;
o.screenY = 0;
o.button = 0;
o.keyCode = 0;
o.charCode = 0;
o.ctrlKey = !1;
o.altKey = !1;
o.shiftKey = !1;
o.metaKey = !1;
o.gh = !1;
o.Ba = k;
o.ic = function(a, b) {
  var c = this.type = a.type;
  Cc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(jc) {
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
  this.gh = mc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Ba = a;
  delete this.tc;
  delete this.ib
};
function Hc(a) {
  return zc ? a.Ba.button == 0 : a.type == "click" ? !0 : !!(a.Ba.button & Gc[0])
}
o.stopPropagation = function() {
  Fc.d.stopPropagation.call(this);
  this.Ba.stopPropagation ? this.Ba.stopPropagation() : this.Ba.cancelBubble = !0
};
o.preventDefault = function() {
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
o.c = function() {
  Fc.d.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Ba = k
};
function Ic() {
}
var Jc = 0;
o = Ic.prototype;
o.key = 0;
o.jb = !1;
o.Gd = !1;
o.ic = function(a, b, c, d, f, g) {
  w(a) ? this.Cf = !0 : a && a.handleEvent && w(a.handleEvent) ? this.Cf = !1 : e(Error("Invalid listener argument"));
  this.Db = a;
  this.Wf = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Zc = g;
  this.Gd = !1;
  this.key = ++Jc;
  this.jb = !1
};
o.handleEvent = function(a) {
  return this.Cf ? this.Db.call(this.Zc || this.src, a) : this.Db.handleEvent.call(this.Db, a)
};
var Kc, Lc = (Kc = "ScriptEngine" in q && q.ScriptEngine() == "JScript") ? q.ScriptEngineMajorVersion() + "." + q.ScriptEngineMinorVersion() + "." + q.ScriptEngineBuildVersion() : "0";
function Mc(a, b) {
  this.Hf = b;
  this.ab = [];
  a > this.Hf && e(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.ab.push(this.ya ? this.ya() : {})
  }
}
C(Mc, L);
Mc.prototype.ya = k;
Mc.prototype.hf = k;
Mc.prototype.getObject = function() {
  return this.ab.length ? this.ab.pop() : this.ya ? this.ya() : {}
};
function Nc(a, b) {
  a.ab.length < a.Hf ? a.ab.push(b) : Oc(a, b)
}
function Oc(a, b) {
  if(a.hf) {
    a.hf(b)
  }else {
    if(ia(b)) {
      if(w(b.f)) {
        b.f()
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
  for(var a = this.ab;a.length;) {
    Oc(this, a.pop())
  }
  delete this.ab
};
var Pc, Qc, Rc, Sc, Tc, Uc, Vc, Wc, Xc, Yc, Zc;
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
    return new Ic
  }
  function f() {
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
      return n.getObject()
    };
    Sc = function(a) {
      Nc(n, a)
    };
    Tc = function() {
      return p.getObject()
    };
    Vc = function() {
      Nc(p, c())
    };
    Wc = function() {
      return z.getObject()
    };
    Xc = function(a) {
      Nc(z, a)
    };
    Yc = function() {
      return r.getObject()
    };
    Zc = function(a) {
      Nc(r, a)
    };
    var j = new Mc(0, 600);
    j.ya = a;
    var n = new Mc(0, 600);
    n.ya = b;
    var p = new Mc(0, 600);
    p.ya = c;
    var z = new Mc(0, 600);
    z.ya = d;
    var r = new Mc(0, 600);
    r.ya = f
  }else {
    Pc = a, Qc = s, Rc = b, Sc = s, Tc = c, Vc = s, Wc = d, Xc = s, Yc = f, Zc = s
  }
})();
var $c = {}, M = {}, ad = {}, bd = {};
function N(a, b, c, d, f) {
  if(b) {
    if(t(b)) {
      for(var g = 0;g < b.length;g++) {
        N(a, b[g], c, d, f)
      }
      return k
    }else {
      var d = !!d, h = M;
      b in h || (h[b] = Pc());
      h = h[b];
      d in h || (h[d] = Pc(), h.g++);
      var h = h[d], j = x(a), n;
      h.ma++;
      if(h[j]) {
        n = h[j];
        for(g = 0;g < n.length;g++) {
          if(h = n[g], h.Db == c && h.Zc == f) {
            if(h.jb) {
              break
            }
            return n[g].key
          }
        }
      }else {
        n = h[j] = Rc(), h.g++
      }
      g = Tc();
      g.src = a;
      h = Wc();
      h.ic(c, g, a, b, d, f);
      c = h.key;
      g.key = c;
      n.push(h);
      $c[c] = h;
      ad[j] || (ad[j] = Rc());
      ad[j].push(h);
      a.addEventListener ? (a == q || !a.Md) && a.addEventListener(b, g, d) : a.attachEvent(b in bd ? bd[b] : bd[b] = "on" + b, g);
      return c
    }
  }else {
    e(Error("Invalid event type"))
  }
}
function cd(a, b, c, d, f) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      cd(a, b[g], c, d, f)
    }
    return k
  }
  a = N(a, b, c, d, f);
  $c[a].Gd = !0;
  return a
}
function dd(a, b, c, d, f) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      dd(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = ed(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Db == c && a[g].capture == d && a[g].Zc == f) {
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
  if(b.jb) {
    return!1
  }
  var c = b.src, d = b.type, f = b.Wf, g = b.capture;
  c.removeEventListener ? (c == q || !c.Md) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in bd ? bd[d] : bd[d] = "on" + d, f);
  c = x(c);
  f = M[d][g][c];
  if(ad[c]) {
    var h = ad[c];
    $a(h, b);
    h.length == 0 && delete ad[c]
  }
  b.jb = !0;
  f.Pf = !0;
  hd(d, g, c, f);
  delete $c[a];
  return!0
}
function hd(a, b, c, d) {
  if(!d.fd && d.Pf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      if(d[f].jb) {
        var h = d[f].Wf;
        h.src = k;
        Vc(h);
        Xc(d[f])
      }else {
        f != g && (d[g] = d[f]), g++
      }
    }
    d.length = g;
    d.Pf = !1;
    g == 0 && (Sc(d), delete M[a][b][c], M[a][b].g--, M[a][b].g == 0 && (Qc(M[a][b]), delete M[a][b], M[a].g--), M[a].g == 0 && (Qc(M[a]), delete M[a]))
  }
}
function id(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Pa(ad, function(a) {
      for(var f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          fd(g.key), c++
        }
      }
    })
  }else {
    if(a = x(a), ad[a]) {
      for(var a = ad[a], f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          fd(g.key), c++
        }
      }
    }
  }
}
function ed(a, b, c) {
  var d = M;
  return b in d && (d = d[b], c in d && (d = d[c], a = x(a), d[a])) ? d[a] : k
}
function jd(a, b, c, d, f) {
  var g = 1, b = x(b);
  if(a[b]) {
    a.ma--;
    a = a[b];
    a.fd ? a.fd++ : a.fd = 1;
    try {
      for(var h = a.length, j = 0;j < h;j++) {
        var n = a[j];
        n && !n.jb && (g &= kd(n, f) !== !1)
      }
    }finally {
      a.fd--, hd(c, d, b, a)
    }
  }
  return Boolean(g)
}
function kd(a, b) {
  var c = a.handleEvent(b);
  a.Gd && fd(a.key);
  return c
}
Uc(function(a, b) {
  if(!$c[a]) {
    return!0
  }
  var c = $c[a], d = c.type, f = M;
  if(!(d in f)) {
    return!0
  }
  var f = f[d], g, h;
  xc === i && (xc = I && !q.addEventListener);
  if(xc) {
    g = b || ca("window.event");
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
          }catch(z) {
            p = !0
          }
        }
        if(p || g.returnValue == i) {
          g.returnValue = !0
        }
      }
    }
    p = Yc();
    p.ic(g, this);
    g = !0;
    try {
      if(j) {
        for(var r = Rc(), v = p.currentTarget;v;v = v.parentNode) {
          r.push(v)
        }
        h = f[!0];
        h.ma = h.g;
        for(var A = r.length - 1;!p.ib && A >= 0 && h.ma;A--) {
          p.currentTarget = r[A], g &= jd(h, r[A], d, !0, p)
        }
        if(n) {
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
        r.length = 0, Sc(r)
      }
      p.f();
      Zc(p)
    }
    return g
  }
  d = new Fc(b, this);
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
C(md, L);
o = md.prototype;
o.Md = !0;
o.jd = k;
o.Ce = aa("jd");
o.addEventListener = function(a, b, c, d) {
  N(this, a, b, c, d)
};
o.removeEventListener = function(a, b, c, d) {
  dd(this, a, b, c, d)
};
o.dispatchEvent = function(a) {
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
    var d = 1, f, c = c[b], b = !0 in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.jd) {
        f.push(g)
      }
      g = c[!0];
      g.ma = g.g;
      for(var h = f.length - 1;!a.ib && h >= 0 && g.ma;h--) {
        a.currentTarget = f[h], d &= jd(g, f[h], a.type, !0, a) && a.tc != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.ma = g.g, b) {
        for(h = 0;!a.ib && h < f.length && g.ma;h++) {
          a.currentTarget = f[h], d &= jd(g, f[h], a.type, !1, a) && a.tc != !1
        }
      }else {
        for(f = this;!a.ib && f && g.ma;f = f.jd) {
          a.currentTarget = f, d &= jd(g, f, a.type, !1, a) && a.tc != !1
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
o.c = function() {
  md.d.c.call(this);
  id(this);
  this.jd = k
};
function nd(a, b) {
  this.bd = a || 1;
  this.zc = b || od;
  this.Ed = y(this.wh, this);
  this.ke = B()
}
C(nd, md);
nd.prototype.enabled = !1;
var od = q.window;
o = nd.prototype;
o.pa = k;
o.wh = function() {
  if(this.enabled) {
    var a = B() - this.ke;
    if(a > 0 && a < this.bd * 0.8) {
      this.pa = this.zc.setTimeout(this.Ed, this.bd - a)
    }else {
      if(this.dispatchEvent(pd), this.enabled) {
        this.pa = this.zc.setTimeout(this.Ed, this.bd), this.ke = B()
      }
    }
  }
};
o.start = function() {
  this.enabled = !0;
  if(!this.pa) {
    this.pa = this.zc.setTimeout(this.Ed, this.bd), this.ke = B()
  }
};
o.stop = function() {
  this.enabled = !1;
  if(this.pa) {
    this.zc.clearTimeout(this.pa), this.pa = k
  }
};
o.c = function() {
  nd.d.c.call(this);
  this.stop();
  delete this.zc
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
  this.Gc = [];
  this.Ve = a;
  this.df = b || k
}
o = qd.prototype;
o.Ma = !1;
o.fc = !1;
o.oc = 0;
o.He = !1;
o.xg = !1;
o.Fd = 0;
o.cancel = function(a) {
  if(this.Ma) {
    this.sc instanceof qd && this.sc.cancel()
  }else {
    if(this.B) {
      var b = this.B;
      delete this.B;
      a ? b.cancel(a) : (b.Fd--, b.Fd <= 0 && b.cancel())
    }
    this.Ve ? this.Ve.call(this.df, this) : this.He = !0;
    this.Ma || this.ac(new rd(this))
  }
};
o.Ye = function(a, b) {
  sd(this, a, b);
  this.oc--;
  this.oc == 0 && this.Ma && td(this)
};
function sd(a, b, c) {
  a.Ma = !0;
  a.sc = c;
  a.fc = !b;
  td(a)
}
function ud(a) {
  if(a.Ma) {
    a.He || e(new vd(a)), a.He = !1
  }
}
function wd(a, b) {
  ud(a);
  sd(a, !0, b)
}
o.ac = function(a) {
  ud(this);
  sd(this, !1, a)
};
function xd(a, b) {
  yd(a, b, k, i)
}
function yd(a, b, c, d) {
  a.Gc.push([b, c, d]);
  a.Ma && td(a)
}
function zd(a, b) {
  yd(a, b, b, i)
}
function Ad(a) {
  return Wa(a.Gc, function(a) {
    return w(a[1])
  })
}
function td(a) {
  a.Oe && a.Ma && Ad(a) && (q.clearTimeout(a.Oe), delete a.Oe);
  a.B && (a.B.Fd--, delete a.B);
  for(var b = a.sc, c = !1, d = !1;a.Gc.length && a.oc == 0;) {
    var f = a.Gc.shift(), g = f[0], h = f[1], f = f[2];
    if(g = a.fc ? h : g) {
      try {
        var j = g.call(f || a.df, b);
        if(fa(j)) {
          a.fc = a.fc && (j == b || j instanceof Error), a.sc = b = j
        }
        b instanceof qd && (d = !0, a.oc++)
      }catch(n) {
        b = n, a.fc = !0, Ad(a) || (c = !0)
      }
    }
  }
  a.sc = b;
  if(d && a.oc) {
    yd(b, y(a.Ye, a, !0), y(a.Ye, a, !1)), b.xg = !0
  }
  if(c) {
    a.Oe = q.setTimeout(function() {
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
  b.ac(a);
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
  this.N = a;
  this.Nc = [];
  this.jf = [];
  this.wg = y(this.Ah, this)
}
Dd.prototype.pa = k;
function Ed(a, b, c, d) {
  a.Nc.push([b, c, d]);
  if(a.pa == k) {
    a.pa = a.N.setTimeout(a.wg, 0)
  }
}
Dd.prototype.Ah = function() {
  this.pa = k;
  var a = this.Nc;
  this.Nc = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], f = c[1], c = c[2];
    try {
      d.apply(f, c)
    }catch(g) {
      this.N.setTimeout(function() {
        e(g)
      }, 0)
    }
  }
  if(this.Nc.length == 0) {
    a = this.jf;
    this.jf = [];
    for(b = 0;b < a.length;b++) {
      wd(a[b], k)
    }
  }
};
var Fd = new Dd(q.window);
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
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, f = arguments;
  d.push("<arguments>");
  for(var g = f.length, h = 1;h < g;h++) {
    Gd(d, f[h])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;function Id() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ B()).toString(36)
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
  return b == "object" && a || b == "function" ? "o" + x(a) : b.substr(0, 1) + a
}
o = Od.prototype;
o.W = function() {
  return this.p.W()
};
o.add = function(a) {
  this.p.set(Pd(a), a)
};
o.Cd = function(a) {
  for(var a = Kb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
o.xe = function(a) {
  for(var a = Kb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
o.remove = function(a) {
  return this.p.remove(Pd(a))
};
o.clear = function() {
  this.p.clear()
};
o.Pa = function() {
  return this.p.Pa()
};
o.contains = function(a) {
  return this.p.ca(Pd(a))
};
o.Y = function() {
  return this.p.Y()
};
o.J = function() {
  return new Od(this)
};
o.n = function(a) {
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
      if(typeof b.Jc == "function") {
        a = b.Jc(a)
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
function Vd(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
Vd.prototype.mh = 0;
Vd.prototype.Ud = k;
Vd.prototype.Td = k;
var Wd = 0;
Vd.prototype.reset = function(a, b, c, d, f) {
  this.mh = typeof f == "number" ? f : Wd++;
  this.hg = d || B();
  this.Cb = a;
  this.Mf = b;
  this.Yg = c;
  delete this.Ud;
  delete this.Td
};
Vd.prototype.pd = aa("Cb");
function Xd(a) {
  this.pe = a
}
Xd.prototype.B = k;
Xd.prototype.Cb = k;
Xd.prototype.P = k;
Xd.prototype.hc = k;
function Yd(a, b) {
  this.name = a;
  this.value = b
}
Yd.prototype.toString = l("name");
var Zd = new Yd("OFF", Infinity), $d = new Yd("SHOUT", 1200), ae = new Yd("SEVERE", 1E3), be = new Yd("WARNING", 900), ce = new Yd("INFO", 800), de = new Yd("CONFIG", 700), ee = new Yd("FINE", 500), fe = new Yd("FINEST", 300), ge = new Yd("ALL", 0);
o = Xd.prototype;
o.getParent = l("B");
o.pd = aa("Cb");
function he(a) {
  if(a.Cb) {
    return a.Cb
  }
  if(a.B) {
    return he(a.B)
  }
  Ha("Root logger has no level set.");
  return k
}
o.log = function(a, b, c) {
  if(a.value >= he(this).value) {
    a = this.Mg(a, b, c);
    b = "log:" + a.Mf;
    q.console && (q.console.timeStamp ? q.console.timeStamp(b) : q.console.markTimeline && q.console.markTimeline(b));
    q.msWriteProfilerMark && q.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.hc) {
        for(var f = 0, g = i;g = c.hc[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
o.Mg = function(a, b, c) {
  var d = new Vd(a, String(b), this.pe);
  if(c) {
    d.Ud = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var h;
      var j = ca("window.location.href");
      if(u(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var n, p, z = !1;
        try {
          n = c.lineNumber || c.Ui || "Not available"
        }catch(r) {
          n = "Not available", z = !0
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || j
        }catch(v) {
          p = "Not available", z = !0
        }
        h = z || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:p, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + ua(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + ua(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ua(Rd(g) + "-> ")
    }catch(A) {
      f = "Exception trying to expose exception! You win, we lose. " + A
    }
    d.Td = f
  }
  return d
};
function ie(a, b) {
  a.log(ae, b, i)
}
function O(a, b) {
  a.log(be, b, i)
}
o.info = function(a, b) {
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
  ke || (ke = new Xd(""), je[""] = ke, ke.pd(de))
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
    b.B = c;
    je[a] = b
  }
  return b
}
;function ne(a, b) {
  this.T = "_" + Id();
  this.wd = a;
  this.Sa = b;
  this.Wa = a.Wa
}
C(ne, L);
o = ne.prototype;
o.gb = !0;
o.Kc = !1;
o.a = R("cw.net.FlashSocket");
o.z = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.T);
  a.push("'>")
};
function oe(a, b, c) {
  b == "frames" ? (a = a.Sa, pe(a.M), qe(a.M, c)) : b == "stillreceiving" ? (c = a.Sa, Q(c.a, "onstillreceiving"), pe(c.M)) : b == "connect" ? (c = a.Sa, c.a.info("onconnect"), pe(c.M), a = c.Tb, c.Tb = k, a.length && (Q(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.sd.Ec(a))) : b == "close" ? (a.gb = !1, a.f()) : b == "ioerror" ? (a.gb = !1, b = a.Sa, O(b.a, "onioerror: " + H(c)), re(b.M, !1), a.f()) : b == "securityerror" ? (a.gb = !1, b = a.Sa, O(b.a, "onsecurityerror: " + 
  H(c)), re(b.M, !1), a.f()) : e(Error("bad event: " + b))
}
o.Jd = function(a, b) {
  try {
    var c = this.Wa.CallFunction(Hd("__FC_connect", this.T, a, b, "<int32/>\n"))
  }catch(d) {
    ie(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message);
    this.Kc = !0;
    this.gb = !1;
    this.f();
    return
  }
  c != '"OK"' && e(Error("__FC_connect failed? ret: " + c))
};
o.Ec = function(a) {
  try {
    var b = this.Wa.CallFunction(Hd("__FC_writeFrames", this.T, a))
  }catch(c) {
    ie(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message);
    this.Kc = !0;
    this.gb = !1;
    this.f();
    return
  }
  b != '"OK"' && (b == '"no such instance"' ? (O(this.a, "Flash no longer knows of " + this.T + "; disposing."), this.f()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
o.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.gb);
  ne.d.c.call(this);
  var a = this.Wa;
  delete this.Wa;
  if(this.gb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(Hd("__FC_close", this.T)))
    }catch(b) {
      ie(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Kc = !0
    }
  }
  if(this.Kc) {
    a = this.Sa, O(a.a, "oncrash"), re(a.M, !0)
  }else {
    this.Sa.onclose()
  }
  delete this.Sa;
  delete this.wd.wb[this.T]
};
function se(a, b) {
  this.L = a;
  this.Wa = b;
  this.wb = {};
  this.Hd = "__FST_" + Id();
  q[this.Hd] = y(this.Fg, this);
  var c = b.CallFunction(Hd("__FC_setCallbackFunc", this.Hd));
  c != '"OK"' && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
C(se, L);
o = se.prototype;
o.a = R("cw.net.FlashSocketTracker");
o.z = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  G(this.wb, a, b);
  a.push(">")
};
o.Ld = function(a) {
  a = new ne(this, a);
  return this.wb[a.T] = a
};
o.Dg = function(a, b, c, d) {
  var f = this.wb[a];
  f ? b == "frames" && d ? (oe(f, "ioerror", "FlashConnector hadError while handling data."), f.f()) : oe(f, b, c) : O(this.a, "Cannot dispatch because we have no instance: " + H([a, b, c, d]))
};
o.Fg = function(a, b, c, d) {
  try {
    Ed(this.L, this.Dg, this, [a, b, c, d])
  }catch(f) {
    q.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
o.c = function() {
  se.d.c.call(this);
  for(var a = Qa(this.wb);a.length;) {
    a.pop().f()
  }
  delete this.wb;
  delete this.Wa;
  q[this.Hd] = i
};
function te(a) {
  this.M = a;
  this.Tb = []
}
C(te, L);
o = te.prototype;
o.a = R("cw.net.FlashSocketConduit");
o.Ec = function(a) {
  this.Tb ? (Q(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Tb.push.apply(this.Tb, a)) : (Q(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.sd.Ec(a))
};
o.Jd = function(a, b) {
  this.sd.Jd(a, b)
};
o.onclose = function() {
  this.a.info("onclose");
  re(this.M, !1)
};
o.c = function() {
  this.a.info("in disposeInternal.");
  te.d.c.call(this);
  this.sd.f();
  delete this.M
};
function ue() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function ve(a) {
  return a * Math.PI / 180
}
;var Nd = Math.pow(2, 53);
var we = {rg:m("<cw.eq.Wildcard>")};
function xe(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function ye(a, b, c) {
  var d = ea(a), f = ea(b);
  if(a == we || b == we) {
    return!0
  }else {
    if(a != k && typeof a.n == "function") {
      return c && c.push("running custom equals function on left object"), a.n(b, c)
    }else {
      if(b != k && typeof b.n == "function") {
        return c && c.push("running custom equals function on right object"), b.n(a, c)
      }else {
        if(xe(d) || xe(f)) {
          a = a === b
        }else {
          if(a instanceof RegExp && b instanceof RegExp) {
            a = a.toString() === b.toString()
          }else {
            if(ha(a) && ha(b)) {
              a = a.valueOf() === b.valueOf()
            }else {
              if(d == "array" && f == "array") {
                a: {
                  if(c && c.push("descending into array"), a.length != b.length) {
                    c && c.push("array length mismatch: " + a.length + ", " + b.length), a = !1
                  }else {
                    d = 0;
                    for(f = a.length;d < f;d++) {
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
  this.la(a);
  return a.join("")
}
function Ae() {
}
Ae.prototype.n = function(a, b) {
  return!(a instanceof Ae) ? !1 : ye(Be(this), Be(a), b)
};
Ae.prototype.z = function(a, b) {
  a.push("<HelloFrame properties=");
  G(Be(this), a, b);
  a.push(">")
};
function Be(a) {
  return[a.Ob, a.Vf, a.xf, a.Yf, a.yc, a.Ke, a.Of, a.Kf, a.oe, a.If, a.mg, a.gg, a.oa, a.ed]
}
Ae.prototype.ea = ze;
Ae.prototype.la = function(a) {
  var b = {};
  b.tnum = this.Ob;
  b.ver = this.Vf;
  b.format = this.xf;
  b["new"] = this.Yf;
  b.id = this.yc;
  b.ming = this.Ke;
  b.pad = this.Of;
  b.maxb = this.Kf;
  if(fa(this.oe)) {
    b.maxt = this.oe
  }
  b.maxia = this.If;
  b.tcpack = this.mg;
  b.eeds = this.gg;
  b.sack = this.oa instanceof Ub ? Jd((new Ce(this.oa)).ea()) : this.oa;
  b.seenack = this.ed instanceof Ub ? Jd((new Ce(this.ed)).ea()) : this.ed;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new Db).lb(b), "H")
};
function De(a) {
  this.Nb = a
}
De.prototype.n = function(a) {
  return a instanceof De && this.Nb == a.Nb
};
De.prototype.z = function(a, b) {
  a.push("new StringFrame(");
  G(this.Nb, a, b);
  a.push(")")
};
De.prototype.ea = ze;
De.prototype.la = function(a) {
  a.push(this.Nb, " ")
};
function Ee(a) {
  this.Ic = a
}
Ee.prototype.n = function(a) {
  return a instanceof Ee && this.Ic == a.Ic
};
Ee.prototype.z = function(a, b) {
  a.push("new CommentFrame(");
  G(this.Ic, a, b);
  a.push(")")
};
Ee.prototype.ea = ze;
Ee.prototype.la = function(a) {
  a.push(this.Ic, "^")
};
function Fe(a) {
  this.wc = a
}
Fe.prototype.n = function(a) {
  return a instanceof Fe && this.wc == a.wc
};
Fe.prototype.z = function(a) {
  a.push("new SeqNumFrame(", String(this.wc), ")")
};
Fe.prototype.ea = ze;
Fe.prototype.la = function(a) {
  a.push(String(this.wc), "N")
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
    for(var b = b[0].split(","), d = 0, f = b.length;d < f;d++) {
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
  this.oa = a
}
Ce.prototype.n = function(a, b) {
  return a instanceof Ce && this.oa.n(a.oa, b)
};
Ce.prototype.z = function(a, b) {
  a.push("new SackFrame(");
  G(this.oa, a, b);
  a.push(")")
};
Ce.prototype.ea = ze;
Ce.prototype.la = function(a) {
  var b = this.oa;
  a.push(b.kb.join(","), "|", String(b.ob));
  a.push("A")
};
function He(a) {
  this.lc = a
}
He.prototype.n = function(a, b) {
  return a instanceof He && this.lc.n(a.lc, b)
};
He.prototype.z = function(a, b) {
  a.push("new StreamStatusFrame(");
  G(this.lc, a, b);
  a.push(")")
};
He.prototype.ea = ze;
He.prototype.la = function(a) {
  var b = this.lc;
  a.push(b.kb.join(","), "|", String(b.ob));
  a.push("T")
};
function Ie() {
}
Ie.prototype.z = function(a) {
  a.push("new StreamCreatedFrame()")
};
Ie.prototype.n = function(a) {
  return a instanceof Ie
};
Ie.prototype.ea = ze;
Ie.prototype.la = function(a) {
  a.push("C")
};
function Je() {
}
Je.prototype.z = function(a) {
  a.push("new YouCloseItFrame()")
};
Je.prototype.n = function(a) {
  return a instanceof Je
};
Je.prototype.ea = ze;
Je.prototype.la = function(a) {
  a.push("Y")
};
function Ke(a, b) {
  this.qc = a;
  this.Sb = b
}
Ke.prototype.n = function(a) {
  return a instanceof Ke && this.qc == a.qc && this.Sb == a.Sb
};
Ke.prototype.z = function(a, b) {
  a.push("new ResetFrame(");
  G(this.qc, a, b);
  a.push(", ", String(this.Sb), ")")
};
Ke.prototype.ea = ze;
Ke.prototype.la = function(a) {
  a.push(this.qc, "|", String(Number(this.Sb)), "!")
};
var Le = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Me(a) {
  this.reason = a
}
Me.prototype.n = function(a) {
  return a instanceof Me && this.reason == a.reason
};
Me.prototype.z = function(a, b) {
  a.push("new TransportKillFrame(");
  G(this.reason, a, b);
  a.push(")")
};
Me.prototype.ea = ze;
Me.prototype.la = function(a) {
  a.push(this.reason, "K")
};
function Ne(a) {
  a || e(new S("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new De(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = Ge(Jd(a)), a == k && e(new S("bad sack")), new Ce(a)
    }else {
      if(b == "N") {
        return a = Md(Jd(a)), a == k && e(new S("bad seqNum")), new Fe(a)
      }else {
        if(b == "T") {
          return a = Ge(Jd(a)), a == k && e(new S("bad lastSackSeen")), new He(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && e(new S("leading garbage")), new Je
          }else {
            if(b == "^") {
              return new Ee(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && e(new S("leading garbage")), new Ie
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && e(new S("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == k && e(new S("bad applicationLevel")), new Ke(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = Le[a], a == k && e(new S("unknown kill reason: " + a)), new Me(a)
                  }else {
                    e(new S("Invalid frame type " + b))
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
;var Qe;
function Re(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function Se(a, b) {
  var c = Re(a), d = eb(arguments, 1), f;
  f = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    Ya(f, d[h]) || (f.push(d[h]), g++)
  }
  f = g == d.length;
  a.className = c.join(" ");
  return f
}
function Te(a, b) {
  var c = Re(a), d = eb(arguments, 1), f;
  f = c;
  for(var g = 0, h = 0;h < f.length;h++) {
    Ya(d, f[h]) && (db(f, h--, 1), g++)
  }
  f = g == d.length;
  a.className = c.join(" ");
  return f
}
;function T(a, b) {
  this.width = a;
  this.height = b
}
o = T.prototype;
o.J = function() {
  return new T(this.width, this.height)
};
o.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
o.Pa = function() {
  return!(this.width * this.height)
};
o.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
o.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
o.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
o.scale = function(a) {
  this.width *= a;
  this.height *= a;
  return this
};
var Ue = !I || wc();
!jc && !I || I && wc() || jc && K("1.9.1");
var Ve = I && !K("9");
function We(a) {
  return a ? new Xe(Ye(a)) : Qe || (Qe = new Xe)
}
function U(a) {
  return u(a) ? document.getElementById(a) : a
}
function Ze(a, b, c, d) {
  a = d || a;
  b = b && b != "*" ? b.toUpperCase() : "";
  if(a.querySelectorAll && a.querySelector && (!J || document.compatMode == "CSS1Compat" || K("528")) && (b || c)) {
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
      b = h.className, typeof b.split == "function" && Ya(b.split(/\s+/), c) && (d[f++] = h)
    }
    d.length = f;
    return d
  }else {
    return a
  }
}
function $e(a, b) {
  Pa(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in af ? a.setAttribute(af[d], b) : d.lastIndexOf("aria-", 0) == 0 ? a.setAttribute(d, b) : a[d] = b
  })
}
var af = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function bf(a, b, c) {
  return cf(document, arguments)
}
function cf(a, b) {
  var c = b[0], d = b[1];
  if(!Ue && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', ua(d.name), '"');
    if(d.type) {
      c.push(' type="', ua(d.type), '"');
      var f = {};
      Ta(f, d);
      d = f;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  if(d) {
    u(d) ? c.className = d : t(d) ? Se.apply(k, [c].concat(d)) : $e(c, d)
  }
  b.length > 2 && df(a, c, b, 2);
  return c
}
function df(a, b, c, d) {
  function f(c) {
    c && b.appendChild(u(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && g.nodeType > 0) ? F(ef(g) ? bb(g) : g, f) : f(g)
  }
}
function ff(a, b) {
  df(Ye(a), a, arguments, 1)
}
function gf(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function hf(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function jf(a, b) {
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
function Ye(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
function kf(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && a.firstChild.nodeType == 3) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      gf(a), a.appendChild(Ye(a).createTextNode(b))
    }
  }
}
var lf = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, mf = {IMG:" ", BR:"\n"};
function nf(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ja(a) && a >= 0 && a < 32768) : !1
}
function of(a) {
  var b = [];
  pf(a, b, !1);
  return b.join("")
}
function pf(a, b, c) {
  if(!(a.nodeName in lf)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in mf) {
        b.push(mf[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          pf(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function ef(a) {
  if(a && typeof a.length == "number") {
    if(ia(a)) {
      return typeof a.item == "function" || typeof a.item == "string"
    }else {
      if(w(a)) {
        return typeof a.item == "function"
      }
    }
  }
  return!1
}
function Xe(a) {
  this.r = a || q.document || document
}
o = Xe.prototype;
o.Da = We;
o.b = function(a) {
  return u(a) ? this.r.getElementById(a) : a
};
o.h = function(a, b, c) {
  return cf(this.r, arguments)
};
o.createElement = function(a) {
  return this.r.createElement(a)
};
o.createTextNode = function(a) {
  return this.r.createTextNode(a)
};
o.af = function(a, b, c) {
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
o.appendChild = function(a, b) {
  a.appendChild(b)
};
o.append = ff;
o.contains = jf;
function qf(a, b, c, d) {
  this.contentWindow = a;
  this.Oc = b;
  this.Le = c;
  this.Kg = d
}
qf.prototype.z = function(a, b) {
  a.push("<XDRFrame frameId=");
  G(this.Kg, a, b);
  a.push(", expandedUrl=");
  G(this.Oc, a, b);
  a.push(", streams=");
  G(this.Le, a, b);
  a.push(">")
};
function rf() {
  this.frames = [];
  this.me = new Ob
}
rf.prototype.a = R("cw.net.XDRTracker");
function sf(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + String(Math.floor(ue())) + String(Math.floor(ue()))
  })
}
function tf(a, b) {
  for(var c = uf, d = 0;d < c.frames.length;d++) {
    var f = c.frames[d], g;
    if(g = f.Le.length == 0) {
      g = f.Oc;
      var h = String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + H(b) + " existing frame " + H(f)), Bd(f)
    }
  }
  d = Id() + Id();
  f = sf(a);
  g = String(window.location).match(Oe)[3] || k;
  h = f.match(Oe)[3] || k;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + H(b)), c = Bd(new qf(q, f, [b], k))) : (g = U("minerva-elements"), h = new qd, c.me.set(d, [h, f, b]), c.a.info("Creating new XDRFrame " + H(d) + "for " + H(b)), c = bf("iframe", {id:"minerva-xdrframe-" + d, width:16, height:16, src:f + "xdrframe/?domain=" + document.domain + "&id=" + d}), g.appendChild(c), c = h);
  return c
}
rf.prototype.Gh = function(a) {
  var b = this.me.get(a);
  b || e(Error("Unknown frameId " + H(a)));
  this.me.remove(b);
  var c = b[0], a = new qf(U("minerva-xdrframe-" + a).contentWindow || (J ? U("minerva-xdrframe-" + a).document || U("minerva-xdrframe-" + a).contentWindow.document : U("minerva-xdrframe-" + a).contentDocument || U("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (J ? U("minerva-xdrframe-" + a).document || U("minerva-xdrframe-" + a).contentWindow.document : U("minerva-xdrframe-" + a).contentDocument || U("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  wd(c, a)
};
var uf = new rf;
q.__XHRTracker_xdrFrameLoaded = y(uf.Gh, uf);
var vf;
vf = !1;
var wf = fc();
wf && (wf.indexOf("Firefox") != -1 || wf.indexOf("Camino") != -1 || wf.indexOf("iPhone") != -1 || wf.indexOf("iPod") != -1 || wf.indexOf("iPad") != -1 || wf.indexOf("Android") != -1 || wf.indexOf("Chrome") != -1 && (vf = !0));
var xf = vf;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function yf(a, b, c, d, f, g) {
  qd.call(this, f, g);
  this.Gf = a;
  this.Od = [];
  this.kf = !!b;
  this.Ig = !!c;
  this.yg = !!d;
  for(b = 0;b < a.length;b++) {
    yd(a[b], y(this.sf, this, b, !0), y(this.sf, this, b, !1))
  }
  a.length == 0 && !this.kf && wd(this, this.Od)
}
C(yf, qd);
yf.prototype.Qf = 0;
yf.prototype.sf = function(a, b, c) {
  this.Qf++;
  this.Od[a] = [b, c];
  this.Ma || (this.kf && b ? wd(this, [a, c]) : this.Ig && !b ? this.ac(c) : this.Qf == this.Gf.length && wd(this, this.Od));
  this.yg && !b && (c = k);
  return c
};
yf.prototype.ac = function(a) {
  yf.d.ac.call(this, a);
  F(this.Gf, function(a) {
    a.cancel()
  })
};
function zf(a) {
  a = new yf(a, !1, !0);
  xd(a, function(a) {
    return Va(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function Af(a, b) {
  this.Eh = a;
  this.Jf = b
}
Af.prototype.je = 0;
Af.prototype.hd = 0;
Af.prototype.Vd = !1;
function Bf(a) {
  var b = [];
  if(a.Vd) {
    return[b, 2]
  }
  var c = a.je, d = a.Eh.responseText;
  for(a.je = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var f = d.substr(a.hd, c - a.hd), f = f.replace(/\r$/, "");
    if(f.length > a.Jf) {
      return a.Vd = !0, [b, 2]
    }
    b.push(f);
    a.hd = c += 1
  }
  return a.je - a.hd - 1 > a.Jf ? (a.Vd = !0, [b, 2]) : [b, 1]
}
;function Cf(a, b, c) {
  this.M = b;
  this.na = a;
  this.Kd = c
}
C(Cf, L);
o = Cf.prototype;
o.a = R("cw.net.XHRMaster");
o.Ua = -1;
o.ne = function(a, b, c) {
  this.Kd.__XHRSlave_makeRequest(this.na, a, b, c)
};
o.Oa = l("Ua");
o.re = function(a, b) {
  b != 1 && ie(this.a, H(this.na) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  pe(this.M);
  qe(this.M, a)
};
o.se = function(a) {
  P(this.a, "ongotheaders_: " + H(a));
  var b = k;
  "Content-Length" in a && (b = Md(a["Content-Length"]));
  a = this.M;
  P(a.a, a.s() + " got Content-Length: " + b);
  a.wa == Df && (b == k && (O(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Ef(a, 2E3 + b / 3072 * 1E3))
};
o.te = function(a) {
  a != 1 && P(this.a, this.M.s() + "'s XHR's readyState is " + a);
  this.Ua = a;
  this.Ua >= 2 && pe(this.M)
};
o.qe = function() {
  this.M.f()
};
o.c = function() {
  Cf.d.c.call(this);
  delete Ff.Fa[this.na];
  this.Kd.__XHRSlave_dispose(this.na);
  delete this.Kd
};
function Gf() {
  this.Fa = {}
}
C(Gf, L);
o = Gf.prototype;
o.a = R("cw.net.XHRMasterTracker");
o.Ld = function(a, b) {
  var c = "_" + Id(), d = new Cf(c, a, b);
  return this.Fa[c] = d
};
o.re = function(a, b, c) {
  var b = ab(b), d = this.Fa[a];
  d ? d.re(b, c) : ie(this.a, "onframes_: no master for " + H(a))
};
o.se = function(a, b) {
  var c = this.Fa[a];
  c ? c.se(b) : ie(this.a, "ongotheaders_: no master for " + H(a))
};
o.te = function(a, b) {
  var c = this.Fa[a];
  c ? c.te(b) : ie(this.a, "onreadystatechange_: no master for " + H(a))
};
o.qe = function(a) {
  var b = this.Fa[a];
  b ? (delete this.Fa[b.na], b.qe()) : ie(this.a, "oncomplete_: no master for " + H(a))
};
o.c = function() {
  Gf.d.c.call(this);
  for(var a = Qa(this.Fa);a.length;) {
    a.pop().f()
  }
  delete this.Fa
};
var Ff = new Gf;
q.__XHRMaster_onframes = y(Ff.re, Ff);
q.__XHRMaster_oncomplete = y(Ff.qe, Ff);
q.__XHRMaster_ongotheaders = y(Ff.se, Ff);
q.__XHRMaster_onreadystatechange = y(Ff.te, Ff);
function Hf(a, b, c) {
  this.host = a;
  this.port = b;
  this.zh = c
}
function If(a, b) {
  b || (b = a);
  this.Gb = a;
  this.Ib = b
}
function Jf(a, b, c, d) {
  this.Gb = a;
  this.Uf = b;
  this.Ib = c;
  this.dg = d;
  (!(this.Gb.indexOf("http://") == 0 || this.Gb.indexOf("https://") == 0) || !(this.Ib.indexOf("http://") == 0 || this.Ib.indexOf("https://") == 0)) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Uf.location.href;
  Pe(this.Gb, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.dg.location.href;
  Pe(this.Ib, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
var Kf = new Ee(";)]}");
function Lf() {
}
Lf.prototype.of = m(1);
function Mf(a) {
  this.sh = a
}
Mf.prototype.z = function(a, b) {
  a.push("<UserContext for ");
  G(this.sh, a, b);
  a.push(">")
};
function Nf(a, b, c) {
  this.R = a;
  this.th = b ? b : new Lf;
  this.L = c ? c : Fd;
  this.Ac = new Od;
  this.yc = Id() + Id();
  this.Ta = new Vb;
  this.ge = new Xb;
  this.Dc = k;
  this.yd = [];
  this.Pb = new Mf(this);
  if(J) {
    this.Dc = cd(q, "load", this.lh, !1, this)
  }
}
C(Nf, L);
o = Nf.prototype;
o.a = R("cw.net.ClientStream");
o.Ef = new Ub(-1, []);
o.Ff = new Ub(-1, []);
o.ah = 50;
o.$g = 1048576;
o.ue = k;
o.onreset = k;
o.Sf = k;
o.Ie = !1;
o.ye = !1;
o.i = 1;
o.kg = -1;
o.k = k;
o.C = k;
o.rc = k;
o.Je = 0;
o.Tf = 0;
o.cg = 0;
o.z = function(a, b) {
  a.push("<ClientStream id=");
  G(this.yc, a, b);
  a.push(", state=", String(this.i));
  a.push(", primary=");
  G(this.k, a, b);
  a.push(", secondary=");
  G(this.C, a, b);
  a.push(", resetting=");
  G(this.rc, a, b);
  a.push(">")
};
function Of(a) {
  var b = [-1];
  a.k && b.push(a.k.Eb);
  a.C && b.push(a.C.Eb);
  return Math.max.apply(Math.max, b)
}
function Pf(a) {
  if(a.i != 1) {
    var b = a.Ta.A.W() != 0, c = Yb(a.ge), d = !c.n(a.Ff) && !(a.k && c.n(a.k.Bb) || a.C && c.n(a.C.Bb)), f = Of(a);
    if((b = b && f < a.Ta.tb) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.k.Ub) {
        Q(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.k, c != d.Bb)) {
          !d.Ha && !d.G.length && Qf(d), d.G.push(new Ce(c)), d.Bb = c
        }
        b && Rf(a.k, a.Ta, f + 1);
        a.k.Ca()
      }else {
        a.C == k ? a.Ie ? (Q(a.a, "tryToSend_: creating secondary to send " + g), a.C = Sf(a, !1), b && Rf(a.C, a.Ta, f + 1), a.C.Ca()) : (Q(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.ye = !0) : Q(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
o.lh = function() {
  this.Dc = k;
  if(this.k && this.k.xb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.k;
    a.Bd = !0;
    a.f()
  }
  if(this.C && this.C.xb()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.C, a.Bd = !0, a.f()
  }
};
function Tf(a, b) {
  var c;
  fa(c) || (c = !0);
  a.i > 3 && e(Error("sendStrings: Can't send strings in state " + a.i));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || e(Error("sendStrings: string #" + c + " has illegal chars: " + H(d)))
      }
    }
    a.Ta.extend(b);
    Pf(a)
  }
}
function Sf(a, b) {
  var c;
  a.R instanceof Jf ? c = a.th.of() == 1 ? Df : Uf : a.R instanceof Hf ? c = Vf : e(Error("Don't support endpoint " + H(a.R)));
  a.kg += 1;
  c = new Wf(a.L, a, a.kg, c, a.R, b);
  Q(a.a, "Created: " + c.s());
  a.Ac.add(c);
  return c
}
function Xf(a, b, c) {
  var d = new Yf(a.L, a, b, c);
  Q(a.a, "Created: " + d.s() + ", delay=" + b + ", times=" + c);
  a.Ac.add(d);
  return d
}
function Zf(a, b) {
  a.Ac.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  P(a.a, "Offline: " + b.s());
  b.pc ? a.Je += b.pc : a.Je = 0;
  a.Je >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.Pb, "stream penalty reached limit", !1), a.f());
  if(a.i > 3) {
    a.i == 4 && b.pg ? (P(a.a, "Disposing because resettingTransport_ is done."), a.f()) : P(a.a, "Not creating a transport because ClientStream is in state " + a.i)
  }else {
    var c;
    var d;
    c = b instanceof Yf;
    if(!c && b.Bd) {
      var f = J ? xf ? [0, 1] : [9, 20] : [0, 0];
      c = f[0];
      d = f[1];
      Q(a.a, "getDelayForNextTransport_: " + H({delay:c, times:d}))
    }else {
      d = b.Xe();
      if(b == a.k) {
        if(d) {
          f = ++a.Tf
        }else {
          if(!c) {
            f = a.Tf = 0
          }
        }
      }else {
        if(d) {
          f = ++a.cg
        }else {
          if(!c) {
            f = a.cg = 0
          }
        }
      }
      if(c || !f) {
        d = c = 0, Q(a.a, "getDelayForNextTransport_: " + H({count:f, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(f, 3), h = Math.floor(Math.random() * 4E3) - 2E3, j = Math.max(0, b.lg - b.Ne);
        d = (c = Math.max(0, g + h - j)) ? 1 : 0;
        Q(a.a, "getDelayForNextTransport_: " + H({count:f, base:g, variance:h, oldDuration:j, delay:c, times:d}))
      }
    }
    c = [c, d];
    f = c[0];
    c = c[1];
    if(b == a.k) {
      a.k = k, c ? a.k = Xf(a, f, c) : (f = Of(a), a.k = Sf(a, !0), Rf(a.k, a.Ta, f + 1)), a.k.Ca()
    }else {
      if(b == a.C) {
        a.C = k, c ? (a.C = Xf(a, f, c), a.C.Ca()) : Pf(a)
      }
    }
  }
}
o.reset = function(a) {
  this.i > 3 && e(Error("reset: Can't send reset in state " + this.i));
  this.i = 4;
  this.k && this.k.Ub ? (this.a.info("reset: Sending ResetFrame over existing primary."), $f(this.k, a), this.k.Ca()) : (this.k && (P(this.a, "reset: Disposing primary before sending ResetFrame."), this.k.f()), this.C && (P(this.a, "reset: Disposing secondary before sending ResetFrame."), this.C.f()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.rc = Sf(this, !1), $f(this.rc, a), this.rc.Ca());
  this.onreset && this.onreset.call(this.Pb, a, !0)
};
function ag(a, b, c, d) {
  var f;
  f = a.ge;
  for(var g = a.ah, h = a.$g, j = [], n = !1, p = 0, z = c.length;p < z;p++) {
    var r = c[p], v = r[0], r = r[1];
    if(v == f.Ab + 1) {
      f.Ab += 1;
      for(j.push(r);;) {
        v = f.Ab + 1;
        r = f.Xa.get(v, Zb);
        if(r === Zb) {
          break
        }
        j.push(r[0]);
        f.Xa.remove(v);
        f.w -= r[1];
        f.Ab = v
      }
    }else {
      if(!(v <= f.Ab)) {
        if(g != k && f.Xa.W() >= g) {
          n = !0;
          break
        }
        var A = Tb(r);
        if(h != k && f.w + A > h) {
          n = !0;
          break
        }
        f.Xa.set(v, [r, A]);
        f.w += A
      }
    }
  }
  f.Xa.Pa() && f.Xa.clear();
  f = [j, n];
  c = f[0];
  f = f[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(h = c[g], a.ue && a.ue.call(a.Pb, h), a.i == 4 || a.ra) {
        return
      }
    }
  }
  d || Pf(a);
  if(!(a.i == 4 || a.ra) && f) {
    ie(b.a, b.s() + "'s peer caused rwin overflow."), b.f()
  }
}
o.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  this.i != 1 && e(Error("ClientStream.start: " + H(this) + " already started"));
  this.i = 2;
  if(this.R instanceof If) {
    var a = tf(this.R.Gb, this), b = tf(this.R.Ib, this);
    xd(zf([a, b]), y(this.Hg, this))
  }else {
    bg(this)
  }
};
o.Hg = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Oc, f = a[1].Oc;
  this.yd.push(a[0]);
  this.yd.push(a[1]);
  this.R = new Jf(d, b, f, c);
  bg(this)
};
function bg(a) {
  a.i = 3;
  a.k = Sf(a, !0);
  Rf(a.k, a.Ta, k);
  a.k.Ca()
}
o.c = function() {
  this.a.info(H(this) + " in disposeInternal.");
  this.i = 5;
  for(var a = this.Ac.Y(), b = 0;b < a.length;b++) {
    a[b].f()
  }
  for(a = 0;a < this.yd.length;a++) {
    $a(this.yd[a].Le, this)
  }
  if(J && this.Dc) {
    fd(this.Dc), this.Dc = k
  }
  this.Sf && this.Sf.call(this.Pb);
  delete this.Ac;
  delete this.k;
  delete this.C;
  delete this.rc;
  delete this.Pb;
  Nf.d.c.call(this)
};
var Df = 1, Uf = 2, Vf = 3;
function Wf(a, b, c, d, f, g) {
  this.L = a;
  this.F = b;
  this.Ob = c;
  this.wa = d;
  this.R = f;
  this.G = [];
  this.qb = g;
  this.Ub = !this.xb();
  this.Hb = this.wa != Df;
  this.vg = y(this.xh, this)
}
C(Wf, L);
o = Wf.prototype;
o.a = R("cw.net.ClientTransport");
o.q = k;
o.Ne = k;
o.lg = k;
o.kd = k;
o.Ha = !1;
o.td = !1;
o.Bb = k;
o.Xd = 0;
o.Eb = -1;
o.we = -1;
o.pg = !1;
o.Bd = !1;
o.pc = 0;
o.gc = !1;
o.z = function(a) {
  a.push("<ClientTransport #", String(this.Ob), ", becomePrimary=", String(this.qb), ">")
};
o.s = function() {
  return(this.qb ? "Prim. T#" : "Sec. T#") + this.Ob
};
o.Xe = function() {
  return!(!this.gc && this.Xd)
};
o.xb = function() {
  return this.wa == Df || this.wa == Uf
};
function cg(a, b) {
  fb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  ag(a.F, a, b, !a.Hb)
}
function dg(a, b, c) {
  try {
    var d = Ne(b);
    a.Xd += 1;
    P(a.a, a.s() + " RECV " + H(d));
    var f;
    a.Xd == 1 && !d.n(Kf) && a.xb() ? (O(a.a, a.s() + " is closing soon because got bad preamble: " + H(d)), f = !0) : f = !1;
    if(f) {
      return!0
    }
    if(d instanceof De) {
      if(!/^([ -~]*)$/.test(d.Nb)) {
        return a.gc = !0
      }
      a.we += 1;
      c.push([a.we, d.Nb])
    }else {
      if(d instanceof Ce) {
        var g = a.F, h = d.oa;
        g.Ef = h;
        var j = g.Ta, n = h.ob, c = !1;
        n > j.tb && (c = !0);
        for(var p = Wb(j).concat(), d = 0;d < p.length;d++) {
          var z = p[d];
          if(z > n) {
            break
          }
          var r = j.A.p[z][1];
          j.A.remove(z);
          j.w -= r
        }
        for(d = 0;d < h.kb.length;d++) {
          var v = h.kb[d];
          v > j.tb && (c = !0);
          j.A.ca(v) && (r = j.A.p[v][1], j.A.remove(v), j.w -= r)
        }
        j.A.Pa() && j.A.clear();
        if(c) {
          return O(a.a, a.s() + " is closing soon because got bad SackFrame"), a.gc = !0
        }
      }else {
        if(d instanceof Fe) {
          a.we = d.wc - 1
        }else {
          if(d instanceof He) {
            a.F.Ff = d.lc
          }else {
            if(d instanceof Je) {
              return Q(a.a, a.s() + " is closing soon because got YouCloseItFrame"), !0
            }else {
              if(d instanceof Me) {
                return a.gc = !0, d.reason == "stream_attach_failure" ? a.pc += 1 : d.reason == "acked_unsent_strings" && (a.pc += 0.5), Q(a.a, a.s() + " is closing soon because got " + H(d)), !0
              }else {
                if(!(d instanceof Ee)) {
                  if(d instanceof Ie) {
                    var A = a.F, nj = !a.Hb;
                    Q(A.a, "Stream is now confirmed to exist at server.");
                    A.Ie = !0;
                    if(A.ye && !nj) {
                      A.ye = !1, Pf(A)
                    }
                  }else {
                    if(c.length && (cg(a, c), Za(c)), d instanceof Ke) {
                      var gd = a.F;
                      gd.onreset && gd.onreset.call(gd.Pb, d.qc, d.Sb);
                      gd.f();
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
  }catch(bh) {
    return bh instanceof S || e(bh), O(a.a, a.s() + " is closing soon because got InvalidFrame: " + H(b)), a.gc = !0
  }
  return!1
}
function qe(a, b) {
  a.td = !0;
  try {
    for(var c = !1, d = [], f = 0, g = b.length;f < g;f++) {
      if(a.ra) {
        a.a.info(a.s() + " returning from loop because we're disposed.");
        return
      }
      if(c = dg(a, b[f], d)) {
        break
      }
    }
    d.length && cg(a, d);
    a.td = !1;
    a.G.length && a.Ca();
    c && (Q(a.a, a.s() + " closeSoon is true.  Frames were: " + H(b)), a.f())
  }finally {
    a.td = !1
  }
}
o.xh = function() {
  O(this.a, this.s() + " timed out due to lack of connection or no data being received.");
  this.f()
};
function eg(a) {
  if(a.kd != k) {
    a.L.N.clearTimeout(a.kd), a.kd = k
  }
}
function Ef(a, b) {
  eg(a);
  b = Math.round(b);
  a.kd = a.L.N.setTimeout(a.vg, b);
  P(a.a, a.s() + "'s receive timeout set to " + b + " ms.")
}
function pe(a) {
  a.wa != Df && (a.wa == Vf || a.wa == Uf ? Ef(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.wa)))
}
function Qf(a) {
  var b = new Ae;
  b.Ob = a.Ob;
  b.Vf = 2;
  b.xf = 2;
  if(!a.F.Ie) {
    b.Yf = !0
  }
  b.yc = a.F.yc;
  b.Ke = a.Hb;
  if(b.Ke) {
    b.Of = 4096
  }
  b.Kf = 3E5;
  b.If = a.Hb ? Math.floor(10) : 0;
  b.mg = !1;
  if(a.qb) {
    b.gg = k, b.oe = Math.floor((a.Hb ? 358E4 : 25E3) / 1E3)
  }
  b.oa = Yb(a.F.ge);
  b.ed = a.F.Ef;
  a.G.push(b);
  a.Bb = b.oa
}
function re(a, b) {
  b && (a.pc += 0.5);
  a.f()
}
o.Ca = function() {
  this.Ha && !this.Ub && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.td) {
    Q(this.a, this.s() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ha;
    this.Ha = !0;
    !a && !this.G.length && Qf(this);
    for(a = 0;a < this.G.length;a++) {
      P(this.a, this.s() + " SEND " + H(this.G[a]))
    }
    if(this.xb()) {
      for(var a = [], b = 0, c = this.G.length;b < c;b++) {
        this.G[b].la(a), a.push("\n")
      }
      this.G = [];
      a = a.join("");
      b = this.qb ? this.R.Gb : this.R.Ib;
      this.q = Ff.Ld(this, this.qb ? this.R.Uf : this.R.dg);
      this.Ne = this.L.N === od ? B() : this.L.N.getTime();
      this.q.ne(b, "POST", a);
      Ef(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.Hb ? 0 : this.qb ? 25E3 : 0))
    }else {
      if(this.wa == Vf) {
        a = [];
        b = 0;
        for(c = this.G.length;b < c;b++) {
          a.push(this.G[b].ea())
        }
        this.G = [];
        this.q ? this.q.Ec(a) : (b = this.R, this.q = new te(this), this.q.sd = b.zh.Ld(this.q), this.Ne = this.L.N === od ? B() : this.L.N.getTime(), this.q.Jd(b.host, b.port), this.q.ra || (this.q.Ec(a), this.q.ra || Ef(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.wa))
      }
    }
  }
};
function Rf(a, b, c) {
  !a.Ha && !a.G.length && Qf(a);
  for(var d = Math.max(c, a.Eb + 1), f = Wb(b), c = [], g = 0;g < f.length;g++) {
    var h = f[g];
    (d == k || h >= d) && c.push([h, b.A.p[h][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], f = g[0], g = g[1], (a.Eb == -1 || a.Eb + 1 != f) && a.G.push(new Fe(f)), a.G.push(new De(g)), a.Eb = f
  }
}
o.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  Wf.d.c.call(this);
  this.lg = this.L.N === od ? B() : this.L.N.getTime();
  this.G = [];
  eg(this);
  this.q && this.q.f();
  var a = this.F;
  this.F = k;
  Zf(a, this)
};
function $f(a, b) {
  !a.Ha && !a.G.length && Qf(a);
  a.G.push(new Ke(b, !0));
  a.pg = !0
}
function Yf(a, b, c, d) {
  this.L = a;
  this.F = b;
  this.ff = c;
  this.$e = d
}
C(Yf, L);
o = Yf.prototype;
o.Ha = !1;
o.Ub = !1;
o.Vc = k;
o.Bb = k;
o.a = R("cw.net.DoNothingTransport");
function fg(a) {
  a.Vc = a.L.N.setTimeout(function() {
    a.Vc = k;
    a.$e--;
    a.$e ? fg(a) : a.f()
  }, a.ff)
}
o.Ca = function() {
  this.Ha && !this.Ub && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ha = !0;
  fg(this)
};
o.z = function(a) {
  a.push("<DoNothingTransport delay=", String(this.ff), ">")
};
o.xb = m(!1);
o.s = m("Wast. T");
o.Xe = m(!1);
o.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  Yf.d.c.call(this);
  this.Vc != k && this.L.N.clearTimeout(this.Vc);
  var a = this.F;
  this.F = k;
  Zf(a, this)
};
function gg(a, b, c) {
  a.style[Fa(c)] = b
}
function hg(a, b) {
  var c = Ye(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function ig(a, b, c) {
  b instanceof T ? (c = b.height, b = b.width) : c == i && e(Error("missing height argument"));
  a.style.width = jg(b);
  a.style.height = jg(c)
}
function jg(a) {
  typeof a == "number" && (a = Math.round(a) + "px");
  return a
}
function kg(a) {
  if((hg(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style.display) != "none") {
    return lg(a)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = lg(a);
  b.display = c;
  b.position = f;
  b.visibility = d;
  return a
}
function lg(a) {
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
function mg(a) {
  I ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[J ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var ng = jc ? "MozUserSelect" : J ? "WebkitUserSelect" : k;
function og(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(ng) {
    if(b = b ? "none" : "", a.style[ng] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[ng] = b
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
;function pg(a) {
  this.cb = a;
  this.l = []
}
C(pg, L);
var qg = [];
function V(a, b, c, d) {
  t(c) || (qg[0] = c, c = qg);
  for(var f = 0;f < c.length;f++) {
    a.l.push(N(b, c[f], d || a, !1, a.cb || a))
  }
  return a
}
function rg(a, b, c, d, f, g) {
  if(t(c)) {
    for(var h = 0;h < c.length;h++) {
      rg(a, b, c[h], d, f, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.cb || a;
      f = !!f;
      if(b = ed(b, c, f)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].jb && b[c].Db == d && b[c].capture == f && b[c].Zc == g) {
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
pg.prototype.xe = function() {
  F(this.l, fd);
  this.l.length = 0
};
pg.prototype.c = function() {
  pg.d.c.call(this);
  this.xe()
};
pg.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function sg() {
}
da(sg);
sg.prototype.dh = 0;
sg.Na();
function tg(a) {
  this.Q = a || We();
  this.uc = ug
}
C(tg, md);
tg.prototype.Ug = sg.Na();
var ug = k;
function vg(a, b) {
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
o = tg.prototype;
o.T = k;
o.t = !1;
o.e = k;
o.uc = k;
o.bh = k;
o.B = k;
o.P = k;
o.Wb = k;
o.Bh = !1;
function wg(a) {
  return a.T || (a.T = ":" + (a.Ug.dh++).toString(36))
}
o.b = l("e");
function xg(a) {
  return a.vb || (a.vb = new pg(a))
}
o.getParent = l("B");
o.Ce = function(a) {
  this.B && this.B != a && e(Error("Method not supported"));
  tg.d.Ce.call(this, a)
};
o.Da = l("Q");
o.h = function() {
  this.e = this.Q.createElement("div")
};
function yg(a, b) {
  a.t && e(Error("Component already rendered"));
  a.e || a.h();
  b ? b.insertBefore(a.e, k) : a.Q.r.body.appendChild(a.e);
  (!a.B || a.B.t) && a.S()
}
o.S = function() {
  this.t = !0;
  zg(this, function(a) {
    !a.t && a.b() && a.S()
  })
};
o.$a = function() {
  zg(this, function(a) {
    a.t && a.$a()
  });
  this.vb && this.vb.xe();
  this.t = !1
};
o.c = function() {
  tg.d.c.call(this);
  this.t && this.$a();
  this.vb && (this.vb.f(), delete this.vb);
  zg(this, function(a) {
    a.f()
  });
  !this.Bh && this.e && hf(this.e);
  this.B = this.bh = this.e = this.Wb = this.P = k
};
o.dc = l("e");
o.Lb = function(a) {
  this.t && e(Error("Component already rendered"));
  this.uc = a
};
function zg(a, b) {
  a.P && F(a.P, b, i)
}
o.removeChild = function(a, b) {
  if(a) {
    var c = u(a) ? a : wg(a), a = this.Wb && c ? (c in this.Wb ? this.Wb[c] : i) || k : k;
    if(c && a) {
      var d = this.Wb;
      c in d && delete d[c];
      $a(this.P, a);
      b && (a.$a(), a.e && hf(a.e));
      c = a;
      c == k && e(Error("Unable to set parent component"));
      c.B = k;
      tg.d.Ce.call(c, k)
    }
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function Ag(a, b) {
  a.setAttribute("role", b);
  a.Zi = b
}
;function Bg() {
}
var Cg;
da(Bg);
o = Bg.prototype;
o.Qc = function() {
};
o.h = function(a) {
  return a.Da().h("div", Dg(this, a).join(" "), a.da)
};
o.dc = function(a) {
  return a
};
o.$b = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(I && !K("7")) {
      var d = Eg(Re(a), b);
      d.push(b);
      oa(c ? Se : Te, a).apply(k, d)
    }else {
      c ? Se(a, b) : Te(a, b)
    }
  }
};
o.zf = function(a) {
  if(a.uc == k) {
    a.uc = "rtl" == (hg(a.t ? a.e : a.Q.r.body, "direction") || ((a.t ? a.e : a.Q.r.body).currentStyle ? (a.t ? a.e : a.Q.r.body).currentStyle.direction : k) || (a.t ? a.e : a.Q.r.body).style.direction)
  }
  a.uc && this.Lb(a.b(), !0);
  a.isEnabled() && this.od(a, a.Qb)
};
o.ld = function(a, b) {
  og(a, !b, !I && !ic)
};
o.Lb = function(a, b) {
  this.$b(a, this.v() + "-rtl", b)
};
o.Bf = function(a) {
  var b;
  return a.va & 32 && (b = a.bb()) ? nf(b) : !1
};
o.od = function(a, b) {
  var c;
  if(a.va & 32 && (c = a.bb())) {
    if(!b && a.i & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.i & 32 && a.rf()
    }
    if(nf(c) != b) {
      b ? c.tabIndex = 0 : c.removeAttribute("tabIndex")
    }
  }
};
o.Ge = function(a, b) {
  a.style.display = b ? "" : "none"
};
o.ja = function(a, b, c) {
  var d = a.b();
  if(d) {
    var f = Fg(this, b);
    f && this.$b(a, f, c);
    this.Bc(d, b, c)
  }
};
o.Bc = function(a, b, c) {
  Cg || (Cg = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Cg[b]) && a.setAttribute("aria-" + b, c)
};
o.md = function(a, b) {
  var c = this.dc(a);
  if(c && (gf(c), b)) {
    if(u(b)) {
      kf(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = Ye(c);
          c.appendChild(u(a) ? b.createTextNode(a) : a)
        }
      };
      t(b) ? F(b, d) : ga(b) && !("nodeType" in b) ? F(bb(b), d) : d(b)
    }
  }
};
o.bb = function(a) {
  return a.b()
};
o.v = m("goog-control");
function Dg(a, b) {
  var c = a.v(), d = [c], f = a.v();
  f != c && d.push(f);
  c = b.i;
  for(f = [];c;) {
    var g = c & -c;
    f.push(Fg(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.sa) && d.push.apply(d, c);
  I && !K("7") && d.push.apply(d, Eg(d));
  return d
}
function Eg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  F([], function(d) {
    Xa(d, oa(Ya, a)) && (!b || Ya(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Fg(a, b) {
  if(!a.We) {
    var c = a.v();
    a.We = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.We[b]
}
;function Gg(a, b) {
  a || e(Error("Invalid class name " + a));
  w(b) || e(Error("Invalid decorator function " + b))
}
var Hg = {};
function Ig(a, b, c, d, f) {
  if(!I && (!J || !K("525"))) {
    return!0
  }
  if(mc && f) {
    return Jg(a)
  }
  if(f && !d) {
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
  return Jg(a)
}
function Jg(a) {
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
;function Kg(a, b) {
  a && Lg(this, a, b)
}
C(Kg, md);
o = Kg.prototype;
o.e = k;
o.cd = k;
o.ie = k;
o.dd = k;
o.Ra = -1;
o.Qa = -1;
var Mg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Ng = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Og = {61:187, 
59:186}, Pg = I || J && K("525");
o = Kg.prototype;
o.Qg = function(a) {
  if(J && (this.Ra == 17 && !a.ctrlKey || this.Ra == 18 && !a.altKey)) {
    this.Qa = this.Ra = -1
  }
  Pg && !Ig(a.keyCode, this.Ra, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Qa = jc && a.keyCode in Og ? Og[a.keyCode] : a.keyCode
};
o.Rg = function() {
  this.Qa = this.Ra = -1
};
o.handleEvent = function(a) {
  var b = a.Ba, c, d;
  I && a.type == "keypress" ? (c = this.Qa, d = c != 13 && c != 27 ? b.keyCode : 0) : J && a.type == "keypress" ? (c = this.Qa, d = b.charCode >= 0 && b.charCode < 63232 && Jg(c) ? b.charCode : 0) : ic ? (c = this.Qa, d = Jg(c) ? b.keyCode : 0) : (c = b.keyCode || this.Qa, d = b.charCode || 0, mc && d == 63 && !c && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in Mg ? f = Mg[c] : c == 25 && a.shiftKey && (f = 9) : g && g in Ng && (f = Ng[g]);
  a = f == this.Ra;
  this.Ra = f;
  b = new Qg(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.f()
  }
};
o.b = l("e");
function Lg(a, b, c) {
  a.dd && a.detach();
  a.e = b;
  a.cd = N(a.e, "keypress", a, c);
  a.ie = N(a.e, "keydown", a.Qg, c, a);
  a.dd = N(a.e, "keyup", a.Rg, c, a)
}
o.detach = function() {
  if(this.cd) {
    fd(this.cd), fd(this.ie), fd(this.dd), this.dd = this.ie = this.cd = k
  }
  this.e = k;
  this.Qa = this.Ra = -1
};
o.c = function() {
  Kg.d.c.call(this);
  this.detach()
};
function Qg(a, b, c, d) {
  d && this.ic(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(Qg, Fc);
function W(a, b, c) {
  tg.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = x(b);
      if(d = Hg[d]) {
        break
      }
      b = b.d ? b.d.constructor : k
    }
    b = d ? w(d.Na) ? d.Na() : new d : k
  }
  this.m = b;
  this.nd(a)
}
C(W, tg);
o = W.prototype;
o.da = k;
o.i = 0;
o.va = 39;
o.Te = 255;
o.rh = 0;
o.Qb = !0;
o.sa = k;
o.ce = !0;
o.Dd = !1;
o.bb = function() {
  return this.m.bb(this)
};
function Rg(a, b) {
  if(b) {
    a.sa ? Ya(a.sa, b) || a.sa.push(b) : a.sa = [b], a.m.$b(a, b, !0)
  }
}
o.$b = function(a, b) {
  if(b) {
    Rg(this, a)
  }else {
    if(a && this.sa) {
      $a(this.sa, a);
      if(this.sa.length == 0) {
        this.sa = k
      }
      this.m.$b(this, a, !1)
    }
  }
};
o.h = function() {
  var a = this.m.h(this);
  this.e = a;
  var b = this.m.Qc();
  b && Ag(a, b);
  this.Dd || this.m.ld(a, !1);
  this.Qb || this.m.Ge(a, !1)
};
o.dc = function() {
  return this.m.dc(this.b())
};
o.S = function() {
  W.d.S.call(this);
  this.m.zf(this);
  if(this.va & -2 && (this.ce && Sg(this, !0), this.va & 32)) {
    var a = this.bb();
    if(a) {
      var b = this.zb || (this.zb = new Kg);
      Lg(b, a);
      V(V(V(xg(this), b, "key", this.uf), a, "focus", this.Og), a, "blur", this.rf)
    }
  }
};
function Sg(a, b) {
  var c = xg(a), d = a.b();
  b ? (V(V(V(V(c, d, "mouseover", a.Yc), d, "mousedown", a.Wc), d, "mouseup", a.vf), d, "mouseout", a.Xc), I && V(c, d, "dblclick", a.tf)) : (rg(rg(rg(rg(c, d, "mouseover", a.Yc), d, "mousedown", a.Wc), d, "mouseup", a.vf), d, "mouseout", a.Xc), I && rg(c, d, "dblclick", a.tf))
}
o.$a = function() {
  W.d.$a.call(this);
  this.zb && this.zb.detach();
  this.Qb && this.isEnabled() && this.m.od(this, !1)
};
o.c = function() {
  W.d.c.call(this);
  this.zb && (this.zb.f(), delete this.zb);
  delete this.m;
  this.sa = this.da = k
};
o.md = function(a) {
  this.m.md(this.b(), a);
  this.nd(a)
};
o.nd = aa("da");
o.nf = function() {
  var a = this.da;
  if(!a) {
    return""
  }
  if(!u(a)) {
    if(t(a)) {
      a = Va(a, of).join("")
    }else {
      if(Ve && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        pf(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Ve || (a = a.replace(/ +/g, " "));
      a != " " && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
o.Lb = function(a) {
  W.d.Lb.call(this, a);
  var b = this.b();
  b && this.m.Lb(b, a)
};
o.ld = function(a) {
  this.Dd = a;
  var b = this.b();
  b && this.m.ld(b, a)
};
o.Ge = function(a, b) {
  if(b || this.Qb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.m.Ge(c, a);
    this.isEnabled() && this.m.od(this, a);
    this.Qb = a;
    return!0
  }
  return!1
};
o.isEnabled = function() {
  return!(this.i & 1)
};
function Tg(a, b) {
  Ug(a, 2, b) && a.ja(2, b)
}
o.he = function() {
  return!!(this.i & 4)
};
o.setActive = function(a) {
  Ug(this, 4, a) && this.ja(4, a)
};
o.De = function(a) {
  Ug(this, 8, a) && this.ja(8, a)
};
o.ja = function(a, b) {
  if(this.va & a && b != !!(this.i & a)) {
    this.m.ja(this, a, b), this.i = b ? this.i | a : this.i & ~a
  }
};
function X(a, b) {
  return!!(a.Te & b) && !!(a.va & b)
}
function Ug(a, b, c) {
  return!!(a.va & b) && !!(a.i & b) != c && (!(a.rh & b) || a.dispatchEvent(vg(b, c))) && !a.ra
}
o.Yc = function(a) {
  !Vg(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && Tg(this, !0)
};
o.Xc = function(a) {
  !Vg(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(!1), X(this, 2) && Tg(this, !1))
};
function Vg(a, b) {
  return!!a.relatedTarget && jf(b, a.relatedTarget)
}
o.Wc = function(a) {
  if(this.isEnabled() && (X(this, 2) && Tg(this, !0), Hc(a) && (!J || !mc || !a.ctrlKey))) {
    X(this, 4) && this.setActive(!0), this.m.Bf(this) && this.bb().focus()
  }
  !this.Dd && Hc(a) && (!J || !mc || !a.ctrlKey) && a.preventDefault()
};
o.vf = function(a) {
  this.isEnabled() && (X(this, 2) && Tg(this, !0), this.he() && this.hb(a) && X(this, 4) && this.setActive(!1))
};
o.tf = function(a) {
  this.isEnabled() && this.hb(a)
};
o.hb = function(a) {
  if(X(this, 16)) {
    var b = !(this.i & 16);
    Ug(this, 16, b) && this.ja(16, b)
  }
  X(this, 8) && this.De(!0);
  X(this, 64) && (b = !(this.i & 64), Ug(this, 64, b) && this.ja(64, b));
  b = new Cc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, f = 0;d = c[f];f++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
o.Og = function() {
  X(this, 32) && Ug(this, 32, !0) && this.ja(32, !0)
};
o.rf = function() {
  X(this, 4) && this.setActive(!1);
  X(this, 32) && Ug(this, 32, !1) && this.ja(32, !1)
};
o.uf = function(a) {
  return this.Qb && this.isEnabled() && this.be(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
o.be = function(a) {
  return a.keyCode == 13 && this.hb(a)
};
w(W) || e(Error("Invalid component class " + W));
w(Bg) || e(Error("Invalid renderer class " + Bg));
var Wg = x(W);
Hg[Wg] = Bg;
Gg("goog-control", function() {
  return new W(k)
});
function Xg() {
}
C(Xg, Bg);
da(Xg);
o = Xg.prototype;
o.Qc = m("button");
o.Bc = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : Xg.d.Bc.call(this, a, b, c)
};
o.h = function(a) {
  var b = Xg.d.h.call(this, a), c = a.Tc();
  c && this.Fe(b, c);
  (c = a.Uc()) && this.rd(b, c);
  a.va & 16 && this.Bc(b, 16, !1);
  return b
};
o.Uc = s;
o.rd = s;
o.Tc = function(a) {
  return a.title
};
o.Fe = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
o.v = m("goog-button");
function Yg() {
}
C(Yg, Xg);
da(Yg);
o = Yg.prototype;
o.Qc = function() {
};
o.h = function(a) {
  a.t && !1 != a.ce && Sg(a, !1);
  a.ce = !1;
  a.Te &= -256;
  a.t && a.i & 32 && e(Error("Component already rendered"));
  a.i & 32 && a.ja(32, !1);
  a.va &= -33;
  return a.Da().h("button", {"class":Dg(this, a).join(" "), disabled:!a.isEnabled(), title:a.Tc() || "", value:a.Uc() || ""}, a.nf() || "")
};
o.zf = function(a) {
  V(xg(a), a.b(), "click", a.hb)
};
o.ld = s;
o.Lb = s;
o.Bf = function(a) {
  return a.isEnabled()
};
o.od = s;
o.ja = function(a, b, c) {
  Yg.d.ja.call(this, a, b, c);
  if((a = a.b()) && b == 1) {
    a.disabled = c
  }
};
o.Uc = function(a) {
  return a.value
};
o.rd = function(a, b) {
  if(a) {
    a.value = b
  }
};
o.Bc = s;
function Zg(a, b, c) {
  W.call(this, a, b || Yg.Na(), c)
}
C(Zg, W);
o = Zg.prototype;
o.Uc = l("ng");
o.rd = function(a) {
  this.ng = a;
  this.m.rd(this.b(), a)
};
o.Tc = l("ig");
o.Fe = function(a) {
  this.ig = a;
  this.m.Fe(this.b(), a)
};
o.c = function() {
  Zg.d.c.call(this);
  delete this.ng;
  delete this.ig
};
o.S = function() {
  Zg.d.S.call(this);
  if(this.va & 32) {
    var a = this.bb();
    a && V(xg(this), a, "keyup", this.be)
  }
};
o.be = function(a) {
  return a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup" ? this.hb(a) : a.keyCode == 32
};
Gg("goog-button", function() {
  return new Zg(k)
});
function $g() {
}
C($g, Xg);
da($g);
$g.prototype.h = function(a) {
  var b = {"class":"goog-inline-block " + Dg(this, a).join(" "), title:a.Tc() || ""};
  return a.Da().h("div", b, ah(this, a.da, a.Da()))
};
$g.prototype.Qc = m("button");
$g.prototype.dc = function(a) {
  return a && a.firstChild.firstChild
};
function ah(a, b, c) {
  return c.h("div", "goog-inline-block " + (a.v() + "-outer-box"), c.h("div", "goog-inline-block " + (a.v() + "-inner-box"), b))
}
$g.prototype.v = m("goog-custom-button");
function ch(a, b, c) {
  Zg.call(this, a, b || $g.Na(), c)
}
C(ch, Zg);
Gg("goog-custom-button", function() {
  return new ch(k)
});
var dh = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function eh(a) {
  var b = {}, a = String(a), c = a.charAt(0) == "#" ? a : "#" + a;
  if(fh.test(c)) {
    return b.$c = gh(c), b.type = "hex", b
  }else {
    a: {
      var d = a.match(hh);
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
      return b.$c = ih(c[0], c[1], c[2]), b.type = "rgb", b
    }else {
      if(dh && (c = dh[a.toLowerCase()])) {
        return b.$c = c, b.type = "named", b
      }
    }
  }
  e(Error(a + " is not a valid color string"))
}
var jh = /#(.)(.)(.)/;
function gh(a) {
  fh.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  a.length == 4 && (a = a.replace(jh, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function kh(a) {
  a = gh(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function ih(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || a < 0 || a > 255 || isNaN(b) || b < 0 || b > 255 || isNaN(c) || c < 0 || c > 255) && e(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = lh(a.toString(16));
  b = lh(b.toString(16));
  c = lh(c.toString(16));
  return"#" + a + b + c
}
var fh = /^#(?:[0-9a-f]{3}){1,2}$/i, hh = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function lh(a) {
  return a.length == 1 ? "0" + a : a
}
;function mh(a, b) {
  var c;
  a instanceof mh ? (this.Jb(b == k ? a.ua : b), nh(this, a.Ga), oh(this, a.Cc), ph(this, a.Ka), qh(this, a.Fb), this.Kb(a.O), rh(this, a.ia.J()), sh(this, a.cc)) : a && (c = String(a).match(Oe)) ? (this.Jb(!!b), nh(this, c[1] || "", !0), oh(this, c[2] || "", !0), ph(this, c[3] || "", !0), qh(this, c[4]), this.Kb(c[5] || "", !0), rh(this, c[6] || "", !0), sh(this, c[7] || "", !0)) : (this.Jb(!!b), this.ia = new th(k, this, this.ua))
}
o = mh.prototype;
o.Ga = "";
o.Cc = "";
o.Ka = "";
o.Fb = k;
o.O = "";
o.cc = "";
o.Wg = !1;
o.ua = !1;
o.toString = function() {
  if(this.qa) {
    return this.qa
  }
  var a = [];
  this.Ga && a.push(uh(this.Ga, vh), ":");
  this.Ka && (a.push("//"), this.Cc && a.push(uh(this.Cc, vh), "@"), a.push(u(this.Ka) ? encodeURIComponent(this.Ka) : k), this.Fb != k && a.push(":", String(this.Fb)));
  this.O && (this.Ka && this.O.charAt(0) != "/" && a.push("/"), a.push(uh(this.O, this.O.charAt(0) == "/" ? wh : xh)));
  var b = String(this.ia);
  b && a.push("?", b);
  this.cc && a.push("#", uh(this.cc, yh));
  return this.qa = a.join("")
};
o.J = function() {
  var a = this.Ga, b = this.Cc, c = this.Ka, d = this.Fb, f = this.O, g = this.ia.J(), h = this.cc, j = new mh(k, this.ua);
  a && nh(j, a);
  b && oh(j, b);
  c && ph(j, c);
  d && qh(j, d);
  f && j.Kb(f);
  g && rh(j, g);
  h && sh(j, h);
  return j
};
function nh(a, b, c) {
  zh(a);
  delete a.qa;
  a.Ga = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.Ga) {
    a.Ga = a.Ga.replace(/:$/, "")
  }
}
function oh(a, b, c) {
  zh(a);
  delete a.qa;
  a.Cc = c ? b ? decodeURIComponent(b) : "" : b
}
function ph(a, b, c) {
  zh(a);
  delete a.qa;
  a.Ka = c ? b ? decodeURIComponent(b) : "" : b
}
function qh(a, b) {
  zh(a);
  delete a.qa;
  b ? (b = Number(b), (isNaN(b) || b < 0) && e(Error("Bad port number " + b)), a.Fb = b) : a.Fb = k
}
o.Kb = function(a, b) {
  zh(this);
  delete this.qa;
  this.O = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function rh(a, b, c) {
  zh(a);
  delete a.qa;
  b instanceof th ? (a.ia = b, a.ia.Pe = a, a.ia.Jb(a.ua)) : (c || (b = uh(b, Ah)), a.ia = new th(b, a, a.ua))
}
function sh(a, b, c) {
  zh(a);
  delete a.qa;
  a.cc = c ? b ? decodeURIComponent(b) : "" : b
}
function zh(a) {
  a.Wg && e(Error("Tried to modify a read-only Uri"))
}
o.Jb = function(a) {
  this.ua = a;
  this.ia && this.ia.Jb(a);
  return this
};
var Bh = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function uh(a, b) {
  var c = k;
  u(a) && (c = a, Bh.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, Ch)));
  return c
}
function Ch(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var vh = /[#\/\?@]/g, xh = /[\#\?:]/g, wh = /[\#\?]/g, Ah = /[\#\?@]/g, yh = /#/g;
function th(a, b, c) {
  this.Aa = a || k;
  this.Pe = b || k;
  this.ua = !!c
}
function Dh(a) {
  if(!a.o && (a.o = new Ob, a.g = 0, a.Aa)) {
    for(var b = a.Aa.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      d >= 0 ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = Eh(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
o = th.prototype;
o.o = k;
o.g = k;
o.W = function() {
  Dh(this);
  return this.g
};
o.add = function(a, b) {
  Dh(this);
  Fh(this);
  a = Eh(this, a);
  if(this.ca(a)) {
    var c = this.o.get(a);
    t(c) ? c.push(b) : this.o.set(a, [c, b])
  }else {
    this.o.set(a, b)
  }
  this.g++;
  return this
};
o.remove = function(a) {
  Dh(this);
  a = Eh(this, a);
  if(this.o.ca(a)) {
    Fh(this);
    var b = this.o.get(a);
    t(b) ? this.g -= b.length : this.g--;
    return this.o.remove(a)
  }
  return!1
};
o.clear = function() {
  Fh(this);
  this.o && this.o.clear();
  this.g = 0
};
o.Pa = function() {
  Dh(this);
  return this.g == 0
};
o.ca = function(a) {
  Dh(this);
  a = Eh(this, a);
  return this.o.ca(a)
};
o.Jc = function(a) {
  var b = this.Y();
  return Ya(b, a)
};
o.Ea = function() {
  Dh(this);
  for(var a = this.o.Y(), b = this.o.Ea(), c = [], d = 0;d < b.length;d++) {
    var f = a[d];
    if(t(f)) {
      for(var g = 0;g < f.length;g++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
o.Y = function(a) {
  Dh(this);
  if(a) {
    if(a = Eh(this, a), this.ca(a)) {
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
o.set = function(a, b) {
  Dh(this);
  Fh(this);
  a = Eh(this, a);
  if(this.ca(a)) {
    var c = this.o.get(a);
    t(c) ? this.g -= c.length : this.g--
  }
  this.o.set(a, b);
  this.g++;
  return this
};
o.get = function(a, b) {
  Dh(this);
  a = Eh(this, a);
  if(this.ca(a)) {
    var c = this.o.get(a);
    return t(c) ? c[0] : c
  }else {
    return b
  }
};
o.toString = function() {
  if(this.Aa) {
    return this.Aa
  }
  if(!this.o) {
    return""
  }
  for(var a = [], b = 0, c = this.o.Ea(), d = 0;d < c.length;d++) {
    var f = c[d], g = sa(f), f = this.o.get(f);
    if(t(f)) {
      for(var h = 0;h < f.length;h++) {
        b > 0 && a.push("&"), a.push(g), f[h] !== "" && a.push("=", sa(f[h])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(g), f !== "" && a.push("=", sa(f)), b++
    }
  }
  return this.Aa = a.join("")
};
function Fh(a) {
  delete a.Nd;
  delete a.Aa;
  a.Pe && delete a.Pe.qa
}
o.J = function() {
  var a = new th;
  if(this.Nd) {
    a.Nd = this.Nd
  }
  if(this.Aa) {
    a.Aa = this.Aa
  }
  if(this.o) {
    a.o = this.o.J()
  }
  return a
};
function Eh(a, b) {
  var c = String(b);
  a.ua && (c = c.toLowerCase());
  return c
}
o.Jb = function(a) {
  a && !this.ua && (Dh(this), Fh(this), Mb(this.o, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ua = a
};
o.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Mb(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
var Gh;
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
  Gh = c
})();
function Hh(a, b) {
  tg.call(this, b);
  this.Jg = a;
  this.Sd = new pg(this);
  this.Pc = new Ob
}
C(Hh, tg);
o = Hh.prototype;
o.a = R("goog.ui.media.FlashObject");
o.Dh = "window";
o.Ue = "#000000";
o.tg = "sameDomain";
o.ba = function(a, b) {
  this.nb = u(a) ? a : Math.round(a) + "px";
  this.de = u(b) ? b : Math.round(b) + "px";
  this.b() && ig(this.b() ? this.b().firstChild : k, this.nb, this.de);
  return this
};
o.S = function() {
  Hh.d.S.call(this);
  var a = this.b(), b;
  b = I ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = I ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = qa(c, this.Dh), d = this.Pc.Ea(), f = this.Pc.Y(), g = [], h = 0;h < d.length;h++) {
    var j = sa(d[h]), n = sa(f[h]);
    g.push(j + "=" + n)
  }
  b = qa(b, wg(this), wg(this), "goog-ui-media-flash-object", ua(this.Jg), ua(g.join("&")), this.Ue, this.tg, c);
  a.innerHTML = b;
  this.nb && this.de && this.ba(this.nb, this.de);
  V(this.Sd, this.b(), Qa(yc), Dc)
};
o.h = function() {
  this.Zf != k && !(Ba(Gh, this.Zf) >= 0) && (O(this.a, "Required flash version not found:" + this.Zf), e(Error("Method not supported")));
  var a = this.Da().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
o.c = function() {
  Hh.d.c.call(this);
  this.Pc = k;
  this.Sd.f();
  this.Sd = k
};
function Ih(a) {
  D.call(this, a)
}
C(Ih, D);
Ih.prototype.name = "cw.loadflash.FlashLoadFailed";
q.__loadFlashObject_callbacks = {};
function Jh(a, b, c) {
  function d() {
    f && delete q.__loadFlashObject_callbacks[f]
  }
  var f;
  if(jc && !K("1.8.1.20")) {
    return Cd(new Ih("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(Ba(Gh, "9") >= 0)) {
    return b = Gh, Cd(new Ih("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  f = "_" + Id();
  var h = new qd(d);
  q.__loadFlashObject_callbacks[f] = function() {
    a.setTimeout(function() {
      d();
      wd(h, U(g))
    }, 0)
  };
  b.Pc.set("onloadcallback", '__loadFlashObject_callbacks["' + f + '"]()');
  g = wg(b);
  yg(b, c);
  return h
}
function Kh(a, b, c) {
  var d = Jh(a, b, c), f = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  zd(d, function(b) {
    a.clearTimeout(f);
    return b
  });
  return d
}
;function Lh() {
  if(jc) {
    this.Ya = {}, this.Ad = {}, this.ud = []
  }
}
Lh.prototype.a = R("goog.net.xhrMonitor");
Lh.prototype.Mc = jc;
function Mh(a) {
  var b = Nh;
  if(b.Mc) {
    var c = u(a) ? a : ia(a) ? x(a) : "";
    Q(b.a, "Pushing context: " + a + " (" + c + ")");
    b.ud.push(c)
  }
}
function Oh() {
  var a = Nh;
  if(a.Mc) {
    var b = a.ud.pop();
    Q(a.a, "Popping context: " + b);
    Ph(a, b)
  }
}
function Qh(a) {
  var b = Nh;
  if(b.Mc) {
    a = x(a);
    P(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.ud.length;c++) {
      var d = b.ud[c];
      Rh(b.Ya, d, a);
      Rh(b.Ad, a, d)
    }
  }
}
function Ph(a, b) {
  var c = a.Ad[b], d = a.Ya[b];
  c && d && (Q(a.a, "Updating dependent contexts"), F(c, function(a) {
    F(d, function(b) {
      Rh(this.Ya, a, b);
      Rh(this.Ad, b, a)
    }, this)
  }, a))
}
function Rh(a, b, c) {
  a[b] || (a[b] = []);
  Ya(a[b], c) || a[b].push(c)
}
var Nh = new Lh;
function Sh() {
}
Sh.prototype.Fc = k;
function Th() {
  return Uh(Vh)
}
var Vh;
function Wh() {
}
C(Wh, Sh);
function Uh(a) {
  return(a = Xh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Yh(a) {
  var b = {};
  Xh(a) && (b[0] = !0, b[1] = !0);
  return b
}
Wh.prototype.ee = k;
function Xh(a) {
  if(!a.ee && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.ee = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.ee
}
Vh = new Wh;
function Zh(a) {
  this.headers = new Ob;
  this.Rb = a || k
}
C(Zh, md);
Zh.prototype.a = R("goog.net.XhrIo");
var $h = /^https?:?$/i;
o = Zh.prototype;
o.Ia = !1;
o.j = k;
o.zd = k;
o.mc = "";
o.Df = "";
o.jc = 0;
o.kc = "";
o.Rd = !1;
o.ad = !1;
o.fe = !1;
o.fb = !1;
o.vd = 0;
o.mb = k;
o.$f = "";
o.Ch = !1;
o.send = function(a, b, c, d) {
  this.j && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.mc = a;
  this.kc = "";
  this.jc = 0;
  this.Df = b;
  this.Rd = !1;
  this.Ia = !0;
  this.j = this.Rb ? Uh(this.Rb) : new Th;
  this.zd = this.Rb ? this.Rb.Fc || (this.Rb.Fc = Yh(this.Rb)) : Vh.Fc || (Vh.Fc = Yh(Vh));
  Qh(this.j);
  this.j.onreadystatechange = y(this.Rf, this);
  try {
    P(this.a, ai(this, "Opening Xhr")), this.fe = !0, this.j.open(b, a, !0), this.fe = !1
  }catch(f) {
    P(this.a, ai(this, "Error opening Xhr: " + f.message));
    bi(this, f);
    return
  }
  var a = c || "", g = this.headers.J();
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
    if(this.mb) {
      od.clearTimeout(this.mb), this.mb = k
    }
    if(this.vd > 0) {
      P(this.a, ai(this, "Will abort after " + this.vd + "ms if incomplete")), this.mb = od.setTimeout(y(this.yh, this), this.vd)
    }
    P(this.a, ai(this, "Sending request"));
    this.ad = !0;
    this.j.send(a);
    this.ad = !1
  }catch(h) {
    P(this.a, ai(this, "Send error: " + h.message)), bi(this, h)
  }
};
o.dispatchEvent = function(a) {
  if(this.j) {
    Mh(this.j);
    try {
      return Zh.d.dispatchEvent.call(this, a)
    }finally {
      Oh()
    }
  }else {
    return Zh.d.dispatchEvent.call(this, a)
  }
};
o.yh = function() {
  if(typeof ba != "undefined" && this.j) {
    this.kc = "Timed out after " + this.vd + "ms, aborting", this.jc = 8, P(this.a, ai(this, this.kc)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function bi(a, b) {
  a.Ia = !1;
  if(a.j) {
    a.fb = !0, a.j.abort(), a.fb = !1
  }
  a.kc = b;
  a.jc = 5;
  ci(a);
  di(a)
}
function ci(a) {
  if(!a.Rd) {
    a.Rd = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
o.abort = function(a) {
  if(this.j && this.Ia) {
    P(this.a, ai(this, "Aborting")), this.Ia = !1, this.fb = !0, this.j.abort(), this.fb = !1, this.jc = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), di(this)
  }
};
o.c = function() {
  if(this.j) {
    if(this.Ia) {
      this.Ia = !1, this.fb = !0, this.j.abort(), this.fb = !1
    }
    di(this, !0)
  }
  Zh.d.c.call(this)
};
o.Rf = function() {
  !this.fe && !this.ad && !this.fb ? this.eh() : ei(this)
};
o.eh = function() {
  ei(this)
};
function ei(a) {
  if(a.Ia && typeof ba != "undefined") {
    if(a.zd[1] && a.Oa() == 4 && fi(a) == 2) {
      P(a.a, ai(a, "Local request error detected and ignored"))
    }else {
      if(a.ad && a.Oa() == 4) {
        od.setTimeout(y(a.Rf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.Oa() == 4) {
          P(a.a, ai(a, "Request complete"));
          a.Ia = !1;
          var b;
          a: {
            switch(fi(a)) {
              case 0:
                b = u(a.mc) ? a.mc.match(Oe)[1] || k : a.mc.Ga;
                b = !(b ? $h.test(b) : self.location ? $h.test(self.location.protocol) : 1);
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
            a.jc = 6;
            var c;
            try {
              c = a.Oa() > 2 ? a.j.statusText : ""
            }catch(d) {
              P(a.a, "Can not get status: " + d.message), c = ""
            }
            a.kc = c + " [" + fi(a) + "]";
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
    var c = a.j, d = a.zd[0] ? s : k;
    a.j = k;
    a.zd = k;
    if(a.mb) {
      od.clearTimeout(a.mb), a.mb = k
    }
    b || (Mh(c), a.dispatchEvent("ready"), Oh());
    var f = Nh;
    if(f.Mc) {
      var g = x(c);
      P(f.a, "Closing XHR : " + g);
      delete f.Ad[g];
      for(var h in f.Ya) {
        $a(f.Ya[h], g), f.Ya[h].length == 0 && delete f.Ya[h]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(j) {
      ie(a.a, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
o.he = function() {
  return!!this.j
};
o.Oa = function() {
  return this.j ? this.j.readyState : 0
};
function fi(a) {
  try {
    return a.Oa() > 2 ? a.j.status : -1
  }catch(b) {
    return O(a.a, "Can not get status: " + b.message), -1
  }
}
o.getResponseHeader = function(a) {
  return this.j && this.Oa() == 4 ? this.j.getResponseHeader(a) : i
};
function ai(a, b) {
  return b + " [" + a.Df + " " + a.mc + " " + fi(a) + "]"
}
;var gi = !(I || J && !K("420+"));
function hi(a, b) {
  this.wd = a;
  this.na = b
}
C(hi, L);
o = hi.prototype;
o.q = k;
o.Ua = -1;
o.qf = !1;
o.wf = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function ii(a) {
  var b = Bf(a.cf), c = b[0], b = b[1], d = q.parent;
  d ? (d.__XHRMaster_onframes(a.na, c, b), b != 1 && a.f()) : a.f()
}
o.Tg = function() {
  ii(this);
  if(!this.ra) {
    var a = q.parent;
    a && a.__XHRMaster_oncomplete(this.na);
    this.f()
  }
};
o.jh = function() {
  var a = q.parent;
  if(a) {
    this.Ua = this.q.Oa();
    if(this.Ua >= 2 && !this.qf) {
      for(var b = new Ob, c = this.wf.length;c--;) {
        var d = this.wf[c];
        try {
          b.set(d, this.q.j.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.W() && (this.qf = !0, a.__XHRMaster_ongotheaders(this.na, Sb(b)), this.ra)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.na, this.Ua);
    gi && this.Ua == 3 && ii(this)
  }else {
    this.f()
  }
};
o.ne = function(a, b, c) {
  this.q = new Zh;
  N(this.q, "readystatechange", y(this.jh, this));
  N(this.q, "complete", y(this.Tg, this));
  this.q.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.cf = new Af(this.q.j, 1048576)
};
o.c = function() {
  hi.d.c.call(this);
  delete this.cf;
  this.q && this.q.f();
  delete this.wd.xc[this.na];
  delete this.wd
};
function ji() {
  this.xc = {}
}
C(ji, L);
ji.prototype.Zg = function(a, b, c, d) {
  var f = new hi(this, a);
  this.xc[a] = f;
  f.ne(b, c, d)
};
ji.prototype.Eg = function(a) {
  (a = this.xc[a]) && a.f()
};
ji.prototype.c = function() {
  ji.d.c.call(this);
  for(var a = Qa(this.xc);a.length;) {
    a.pop().f()
  }
  delete this.xc
};
var ki = new ji;
q.__XHRSlave_makeRequest = y(ki.Zg, ki);
q.__XHRSlave_dispose = y(ki.Eg, ki);
function li(a) {
  this.r = a
}
var mi = /\s*;\s*/;
o = li.prototype;
o.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && J) {
    var b = "COOKIES_TEST_" + B();
    ni.set(b, "1");
    if(!this.get(b)) {
      return!1
    }
    this.remove(b)
  }
  return a
};
o.set = function(a, b, c, d, f, g) {
  /[;=\s]/.test(a) && e(Error('Invalid cookie name "' + a + '"'));
  /[;\r\n]/.test(b) && e(Error('Invalid cookie value "' + b + '"'));
  fa(c) || (c = -1);
  f = f ? ";domain=" + f : "";
  d = d ? ";path=" + d : "";
  g = g ? ";secure" : "";
  c = c < 0 ? "" : c == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(B() + c * 1E3)).toUTCString();
  this.r.cookie = a + "=" + b + f + d + c + g
};
o.get = function(a, b) {
  for(var c = a + "=", d = (this.r.cookie || "").split(mi), f = 0, g;g = d[f];f++) {
    if(g.indexOf(c) == 0) {
      return g.substr(c.length)
    }
  }
  return b
};
o.remove = function(a, b, c) {
  var d = this.ca(a);
  this.set(a, "", 0, b, c);
  return d
};
o.Ea = function() {
  return oi(this).keys
};
o.Y = function() {
  return oi(this).og
};
o.Pa = function() {
  return!this.r.cookie
};
o.W = function() {
  return!this.r.cookie ? 0 : (this.r.cookie || "").split(mi).length
};
o.ca = function(a) {
  return fa(this.get(a))
};
o.Jc = function(a) {
  for(var b = oi(this).og, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return!0
    }
  }
  return!1
};
o.clear = function() {
  for(var a = oi(this).keys, b = a.length - 1;b >= 0;b--) {
    this.remove(a[b])
  }
};
function oi(a) {
  for(var a = (a.r.cookie || "").split(mi), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), d == -1 ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{keys:b, og:c}
}
var ni = new li(document);
ni.ki = 3950;
function pi() {
}
pi.prototype.of = function() {
  return Boolean(Number((new mh(document.location)).ia.get("httpStreaming", "0"))) ? 2 : 1
};
function qi(a) {
  var b = new Hh("/compiled_client/FlashConnector.swf?cb=2ae8d8a79afe8f3a96bb49e8a9339914");
  b.Ue = "#777777";
  b.ba(300, 30);
  var c = U("FlashConnectorSwf");
  c || e(Error("no FlashConnectorSwf?"));
  return Kh(a.N, b, c)
}
function ri(a, b, c) {
  var d = new mh(document.location);
  if(c) {
    var f = d.Ka, d = qi(a);
    xd(d, function(b) {
      b = new se(a, b);
      return new Hf(f, 843, b)
    });
    return d
  }else {
    return b ? (b = q.__demo_shared_domain, d = d.J(), ph(d, "_____random_____." + b)) : d = d.J(), d.Kb("/httpface/"), rh(d, "", i), d = new If(d.toString().replace("_____random_____", "%random%")), Bd(d)
  }
}
function si() {
  var a = ti, b = (new mh(document.location)).ia, c = b.get("mode") != "http", b = Boolean(Number(b.get("useSub", "1")));
  return ri(a, b, c)
}
;function ui() {
  this.Xf = B()
}
var vi = new ui;
ui.prototype.set = aa("Xf");
ui.prototype.reset = function() {
  this.set(B())
};
ui.prototype.get = l("Xf");
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
  var c = (a.hg - b) / 1E3, d = c.toFixed(3), f = 0;
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
C(zi, wi);
zi.prototype.fg = !0;
function Ai(a) {
  this.ih = y(this.sg, this);
  this.lf = new zi;
  this.Af = this.lf.eg = !1;
  this.e = a;
  this.Gg = this.e.ownerDocument || this.e.document;
  var a = We(this.e), b = k;
  if(I) {
    b = a.r.createStyleSheet(), mg(b)
  }else {
    var c = Ze(a.r, "head", i, i)[0];
    c || (b = Ze(a.r, "body", i, i)[0], c = a.h("head"), b.parentNode.insertBefore(c, b));
    b = a.h("style");
    mg(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
Ai.prototype.sg = function(a) {
  var b = this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight <= 100, c = this.Gg.createElement("div");
  c.className = "logmsg";
  var d = this.lf, f;
  switch(a.Cb.value) {
    case $d.value:
      f = "dbg-sh";
      break;
    case ae.value:
      f = "dbg-sev";
      break;
    case be.value:
      f = "dbg-w";
      break;
    case ce.value:
      f = "dbg-i";
      break;
    default:
      f = "dbg-f"
  }
  var g = [];
  g.push(d.hh, " ");
  if(d.eg) {
    var h = new Date(a.hg);
    g.push("[", xi(h.getFullYear() - 2E3) + xi(h.getMonth() + 1) + xi(h.getDate()) + " " + xi(h.getHours()) + ":" + xi(h.getMinutes()) + ":" + xi(h.getSeconds()) + "." + xi(Math.floor(h.getMilliseconds() / 10)), "] ")
  }
  d.oh && g.push("[", Aa(yi(a, d.qh.get())), "s] ");
  d.nh && g.push("[", ua(a.Yg), "] ");
  g.push('<span class="', f, '">', ta(Aa(ua(a.Mf))));
  d.fg && a.Ud && g.push("<br>", ta(Aa(a.Td || "")));
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
  arguments.length == 6 ? this.setTransform(a, b, c, d, f, g) : arguments.length != 0 ? e(Error("Insufficient matrix parameters")) : (this.Z = this.aa = 1, this.U = this.$ = this.ga = this.ha = 0)
}
o = Bi.prototype;
o.J = function() {
  return new Bi(this.Z, this.U, this.$, this.aa, this.ga, this.ha)
};
o.setTransform = function(a, b, c, d, f, g) {
  (!ja(a) || !ja(b) || !ja(c) || !ja(d) || !ja(f) || !ja(g)) && e(Error("Invalid transform parameters"));
  this.Z = a;
  this.U = b;
  this.$ = c;
  this.aa = d;
  this.ga = f;
  this.ha = g;
  return this
};
o.Ze = function(a) {
  this.Z = a.Z;
  this.U = a.U;
  this.$ = a.$;
  this.aa = a.aa;
  this.ga = a.ga;
  this.ha = a.ha;
  return this
};
o.scale = function(a, b) {
  this.Z *= a;
  this.U *= a;
  this.$ *= b;
  this.aa *= b;
  return this
};
o.translate = function(a, b) {
  this.ga += a * this.Z + b * this.$;
  this.ha += a * this.U + b * this.aa;
  return this
};
o.rotate = function(a, b, c) {
  var d = new Bi, f = Math.cos(a), a = Math.sin(a), b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f), c = this.Z, d = this.$;
  this.Z = b.Z * c + b.U * d;
  this.$ = b.$ * c + b.aa * d;
  this.ga += b.ga * c + b.ha * d;
  c = this.U;
  d = this.aa;
  this.U = b.Z * c + b.U * d;
  this.aa = b.$ * c + b.aa * d;
  this.ha += b.ga * c + b.ha * d;
  return this
};
o.toString = function() {
  return"matrix(" + [this.Z, this.U, this.$, this.aa, this.ga, this.ha].join(",") + ")"
};
o.n = function(a) {
  return this == a ? !0 : !a ? !1 : this.Z == a.Z && this.$ == a.$ && this.ga == a.ga && this.U == a.U && this.aa == a.aa && this.ha == a.ha
};
function Y(a, b) {
  this.e = a;
  this.ta = b;
  this.Md = !1
}
C(Y, md);
o = Y.prototype;
o.ta = k;
o.e = k;
o.jg = k;
o.b = l("e");
o.addEventListener = function(a, b, c, d) {
  N(this.e, a, b, c, d)
};
o.removeEventListener = function(a, b, c, d) {
  dd(this.e, a, b, c, d)
};
o.c = function() {
  Y.d.c.call(this);
  id(this.e)
};
function Z(a, b, c, d) {
  Y.call(this, a, b);
  this.Me = c;
  this.ta.Be(this, c);
  this.fill = d;
  this.ta.Ae(this, d)
}
C(Z, Y);
Z.prototype.fill = k;
Z.prototype.Me = k;
Z.prototype.Lg = l("fill");
Z.prototype.Ng = l("Me");
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
  gf(this.b())
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
  this.nc = b || 1
}
C(Li, Ki);
Li.prototype.fa = l("Id");
function Mi(a, b) {
  this.nb = a;
  this.Id = b
}
Mi.prototype.fa = l("Id");
function Ni() {
  this.D = [];
  this.g = [];
  this.xa = []
}
Ni.prototype.rb = k;
Ni.prototype.V = k;
Ni.prototype.Mb = !0;
var Oi = [2, 2, 6, 6, 0];
o = Ni.prototype;
o.clear = function() {
  this.D.length = 0;
  this.g.length = 0;
  this.xa.length = 0;
  delete this.rb;
  delete this.V;
  delete this.Mb;
  return this
};
o.moveTo = function(a, b) {
  this.D[this.D.length - 1] == 0 ? this.xa.length -= 2 : (this.D.push(0), this.g.push(1));
  this.xa.push(a, b);
  this.V = this.rb = [a, b];
  return this
};
o.lineTo = function(a) {
  var b = this.D[this.D.length - 1];
  b == k && e(Error("Path cannot start with lineTo"));
  b != 1 && (this.D.push(1), this.g.push(0));
  for(b = 0;b < arguments.length;b += 2) {
    var c = arguments[b], d = arguments[b + 1];
    this.xa.push(c, d)
  }
  this.g[this.g.length - 1] += b / 2;
  this.V = [c, d];
  return this
};
o.bf = function(a) {
  var b = this.D[this.D.length - 1];
  b == k && e(Error("Path cannot start with curve"));
  b != 2 && (this.D.push(2), this.g.push(0));
  for(b = 0;b < arguments.length;b += 6) {
    var c = arguments[b + 4], d = arguments[b + 5];
    this.xa.push(arguments[b], arguments[b + 1], arguments[b + 2], arguments[b + 3], c, d)
  }
  this.g[this.g.length - 1] += b / 6;
  this.V = [c, d];
  return this
};
o.close = function() {
  var a = this.D[this.D.length - 1];
  a == k && e(Error("Path cannot start with close"));
  if(a != 4) {
    this.D.push(4), this.g.push(1), this.V = this.rb
  }
  return this
};
o.arcTo = function(a, b, c, d) {
  var f = this.V[0] - a * Math.cos(ve(c)) + a * Math.cos(ve(c + d)), g = this.V[1] - b * Math.sin(ve(c)) + b * Math.sin(ve(c + d));
  this.D.push(3);
  this.g.push(1);
  this.xa.push(a, b, c, d, f, g);
  this.Mb = !1;
  this.V = [f, g];
  return this
};
o.ug = function(a, b, c, d) {
  var f = this.V[0] - a * Math.cos(ve(c)), g = this.V[1] - b * Math.sin(ve(c)), h = ve(d), d = Math.ceil(Math.abs(h) / Math.PI * 2);
  h /= d;
  for(var c = ve(c), j = 0;j < d;j++) {
    var n = Math.cos(c), p = Math.sin(c), z = 4 / 3 * Math.sin(h / 2) / (1 + Math.cos(h / 2)), r = f + (n - z * p) * a, v = g + (p + z * n) * b;
    c += h;
    n = Math.cos(c);
    p = Math.sin(c);
    this.bf(r, v, f + (n + z * p) * a, g + (p - z * n) * b, f + n * a, g + p * b)
  }
  return this
};
function Pi(a, b) {
  for(var c = a.xa, d = 0, f = 0, g = a.D.length;f < g;f++) {
    var h = a.D[f], j = Oi[h] * a.g[f];
    b(h, c.slice(d, d + j));
    d += j
  }
}
o.J = function() {
  var a = new this.constructor;
  a.D = this.D.concat();
  a.g = this.g.concat();
  a.xa = this.xa.concat();
  a.rb = this.rb && this.rb.concat();
  a.V = this.V && this.V.concat();
  a.Mb = this.Mb;
  return a
};
var Qi = {};
Qi[0] = Ni.prototype.moveTo;
Qi[1] = Ni.prototype.lineTo;
Qi[4] = Ni.prototype.close;
Qi[2] = Ni.prototype.bf;
Qi[3] = Ni.prototype.ug;
function Ri(a) {
  if(a.Mb) {
    return a.J()
  }
  var b = new Ni;
  Pi(a, function(a, d) {
    Qi[a].apply(b, d)
  });
  return b
}
Ni.prototype.Pa = function() {
  return this.D.length == 0
};
function Si(a, b, c, d, f) {
  tg.call(this, f);
  this.width = a;
  this.height = b;
  this.ka = c || k;
  this.Xb = d || k
}
C(Si, tg);
o = Si.prototype;
o.H = k;
o.Ja = 0;
o.Za = 0;
o.pf = function() {
  return this.X()
};
o.X = function() {
  return this.t ? kg(this.b()) : ja(this.width) && ja(this.height) ? new T(this.width, this.height) : k
};
function Ti(a) {
  var b = a.X();
  return b ? b.width / (a.ka ? new T(a.ka, a.Xb) : a.X()).width : 0
}
;function Ui(a, b, c, d, f) {
  Si.call(this, a, b, c, d, f);
  this.ef = {};
  this.Qe = J && !K(526);
  this.cb = new pg(this)
}
var Vi;
C(Ui, Si);
function Wi(a, b, c) {
  a = a.Q.r.createElementNS("http://www.w3.org/2000/svg", b);
  c && Hi(a, c);
  return a
}
function Hi(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
o = Ui.prototype;
o.pb = function(a, b) {
  (b || this.H).b().appendChild(a.b())
};
o.Ae = function(a, b) {
  var c = a.b();
  b instanceof Li ? (c.setAttribute("fill", b.fa()), c.setAttribute("fill-opacity", b.nc)) : c.setAttribute("fill", "none")
};
o.Be = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.fa());
    var d = b.nb;
    u(d) && d.indexOf("px") != -1 ? c.setAttribute("stroke-width", parseFloat(d) / Ti(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
o.h = function() {
  var a = Wi(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = Wi(this, "g");
  this.Pd = Wi(this, "defs");
  this.H = new Gi(b, this);
  a.appendChild(this.Pd);
  a.appendChild(b);
  this.e = a;
  if(this.ka || this.Ja || this.Za) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.Qe ? this.xd() : this.b().setAttribute("viewBox", this.Ja + " " + this.Za + " " + (this.ka ? this.ka + " " + this.Xb : ""))
  }
};
o.xd = function() {
  if(this.t && (this.ka || this.Ja || !this.Za)) {
    var a = this.X();
    if(a.width == 0) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.Ja, c = -this.Za, d = a.width / this.ka, a = a.height / this.Xb;
      this.H.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
o.ba = function(a, b) {
  ig(this.b(), a, b)
};
o.X = function() {
  if(!jc) {
    return this.t ? kg(this.b()) : Ui.d.X.call(this)
  }
  var a = this.width, b = this.height, c = u(a) && a.indexOf("%") != -1, d = u(b) && b.indexOf("%") != -1;
  if(!this.t && (c || d)) {
    return k
  }
  var f, g;
  if(c) {
    f = this.b().parentNode, g = kg(f), a = parseFloat(a) * g.width / 100
  }
  d && (f = f || this.b().parentNode, g = g || kg(f), b = parseFloat(b) * g.height / 100);
  return new T(a, b)
};
o.clear = function() {
  this.H.clear();
  gf(this.Pd);
  this.ef = {}
};
o.Lc = function(a, b, c, d, f, g, h) {
  a = Wi(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new Ii(a, this, f, g);
  this.pb(f, h);
  return f
};
o.drawImage = function(a, b, c, d, f, g) {
  a = Wi(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new Ji(a, this);
  this.pb(f, g);
  return f
};
o.S = function() {
  var a = this.X();
  Ui.d.S.call(this);
  a || this.dispatchEvent("resize");
  if(this.Qe) {
    var a = this.width, b = this.height;
    typeof a == "string" && a.indexOf("%") != -1 && typeof b == "string" && b.indexOf("%") != -1 && V(this.cb, Xi(), pd, this.xd);
    this.xd()
  }
};
o.$a = function() {
  Ui.d.$a.call(this);
  this.Qe && rg(this.cb, Xi(), pd, this.xd)
};
o.c = function() {
  delete this.ef;
  delete this.Pd;
  delete this.H;
  Ui.d.c.call(this)
};
function Xi() {
  Vi || (Vi = new nd(400), Vi.start());
  return Vi
}
;function Yi() {
  return this.e = this.ta.Q.b(this.T) || this.e
}
function Zi(a, b) {
  this.T = a.id;
  Y.call(this, a, b)
}
C(Zi, Di);
Zi.prototype.b = Yi;
Zi.prototype.clear = function() {
  gf(this.b())
};
Zi.prototype.ba = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  if(this.ta.H != this) {
    c.coordorigin = "0 0"
  }
};
function $i(a, b, c, d, f, g, h, j) {
  this.T = a.id;
  Z.call(this, a, b, h, j);
  this.Ji = c;
  this.Ki = d;
  this.$i = f;
  this.aj = g
}
C($i, Ei);
$i.prototype.b = Yi;
function aj(a, b) {
  this.T = a.id;
  Y.call(this, a, b)
}
C(aj, Fi);
aj.prototype.b = Yi;
aj.prototype.ba = function(a, b) {
  var c = this.b().style;
  c.width = bj(a) + "px";
  c.height = bj(b) + "px"
};
function cj(a, b, c, d, f) {
  Si.call(this, a, b, c, d, f);
  this.cb = new pg(this)
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
  var c = a.Q.createElement("g_vml_:" + b);
  c.id = "goog_" + Da++;
  return c
}
function fj(a) {
  if(dj && a.t) {
    a.b().innerHTML = a.b().innerHTML
  }
}
cj.prototype.pb = function(a, b) {
  (b || this.H).b().appendChild(a.b());
  fj(this)
};
cj.prototype.Ae = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    f.tagName == "fill" && c.removeChild(f)
  }
  b instanceof Li ? b.fa() == "transparent" ? c.filled = !1 : b.nc != 1 ? (c.filled = !0, d = ej(this, "fill"), d.opacity = Math.round(b.nc * 100) + "%", d.color = b.fa(), c.appendChild(d)) : (c.filled = !0, c.fillcolor = b.fa()) : c.filled = !1;
  fj(this)
};
cj.prototype.Be = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = !0;
    var d = b.nb;
    u(d) && d.indexOf("px") == -1 ? d = parseFloat(d) : d *= Ti(this);
    var f = c.getElementsByTagName("stroke")[0];
    d < 1 ? (f = f || ej(this, "stroke"), f.opacity = d, f.bj = "1px", f.color = b.fa(), c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.fa(), c.strokeweight = d + "px")
  }else {
    c.stroked = !1
  }
  fj(this)
};
function gj(a, b, c, d, f) {
  var g = a.style;
  g.position = "absolute";
  g.left = bj(b) + "px";
  g.top = bj(c) + "px";
  g.width = $(d) + "px";
  g.height = $(f) + "px";
  if(a.tagName == "shape") {
    a.coordsize = $(d) + " " + $(f)
  }
}
try {
  eval("document.namespaces")
}catch(hj) {
}
o = cj.prototype;
o.h = function() {
  var a = this.Q.r;
  if(!a.namespaces.g_vml_) {
    dj ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}"
  }
  var a = this.width, b = this.height, c = this.Q.h("div", {style:"overflow:hidden;position:relative;width:" + (u(a) && pa(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (u(b) && pa(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = ej(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.ka ? $(this.ka) + " " + $(this.Xb) : $(a) + " " + $(b);
  d.coordorigin = fa(this.Ja) ? $(this.Ja) + " " + $(this.Za) : "0 0";
  c.appendChild(d);
  this.H = new Zi(d, this);
  N(c, "resize", y(this.ae, this))
};
o.ae = function() {
  var a = kg(this.b()), b = this.H.b().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.b();a && a.currentStyle && a.currentStyle.display != "none";) {
      a = a.parentNode
    }
    a && a.currentStyle && V(this.cb, a, "propertychange", this.ae)
  }
  this.dispatchEvent("resize")
};
o.ba = function(a, b) {
  ig(this.b(), a, b)
};
o.X = function() {
  var a = this.b();
  return new T(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
o.clear = function() {
  this.H.clear()
};
o.Lc = function(a, b, c, d, f, g, h) {
  var j = ej(this, "oval");
  gj(j, a - c, b - d, c * 2, d * 2);
  a = new $i(j, this, a, b, c, d, f, g);
  this.pb(a, h);
  return a
};
o.drawImage = function(a, b, c, d, f, g) {
  var h = ej(this, "image");
  gj(h, a, b, c, d);
  dj ? h.src = f : h.setAttribute("src", f);
  a = new aj(h, this);
  this.pb(a, g);
  return a
};
o.S = function() {
  cj.d.S.call(this);
  this.ae();
  fj(this)
};
o.c = function() {
  this.H = k;
  cj.d.c.call(this)
};
function ij(a) {
  Y.call(this, k, a);
  this.P = []
}
C(ij, Di);
ij.prototype.clear = function() {
  if(this.P.length) {
    this.P.length = 0, jj(this.ta)
  }
};
ij.prototype.ba = function() {
};
ij.prototype.appendChild = function(a) {
  this.P.push(a)
};
ij.prototype.za = function() {
  for(var a = 0, b = this.P.length;a < b;a++) {
    kj(this.ta, this.P[a])
  }
};
function lj(a, b, c, d, f, g, h, j) {
  Z.call(this, a, b, h, j);
  this.zg = c;
  this.Ag = d;
  this.ag = f;
  this.bg = g;
  this.O = new Ni;
  this.O.clear();
  this.O.moveTo(this.zg + this.ag * Math.cos(ve(0)), this.Ag + this.bg * Math.sin(ve(0)));
  this.O.arcTo(this.ag, this.bg, 0, 360);
  this.O.close();
  this.fh = new mj(k, b, this.O, h, j)
}
C(lj, Ei);
lj.prototype.za = function(a) {
  this.fh.za(a)
};
function mj(a, b, c, d, f) {
  Z.call(this, a, b, d, f);
  this.Kb(c)
}
C(mj, Ci);
mj.prototype.Zb = !1;
mj.prototype.Kb = function(a) {
  this.O = a.Mb ? a : Ri(a);
  this.Zb && jj(this.ta)
};
mj.prototype.za = function(a) {
  this.Zb = !0;
  a.beginPath();
  Pi(this.O, function(b, c) {
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
  this.Fh = c;
  this.Hh = d;
  this.Se = f;
  this.$d = g;
  this.ph = h
}
C(oj, Fi);
oj.prototype.Zb = !1;
oj.prototype.ba = function(a, b) {
  this.Se = a;
  this.$d = b;
  this.Zb && jj(this.ta)
};
oj.prototype.za = function(a) {
  this.yf ? (this.Se && this.$d && a.drawImage(this.yf, this.Fh, this.Hh, this.Se, this.$d), this.Zb = !0) : (a = new Image, a.onload = y(this.Pg, this, a), a.src = this.ph)
};
oj.prototype.Pg = function(a) {
  this.yf = a;
  jj(this.ta)
};
function pj(a, b, c, d, f) {
  Si.call(this, a, b, c, d, f)
}
C(pj, Si);
o = pj.prototype;
o.Ae = function() {
  jj(this)
};
o.Be = function() {
  jj(this)
};
function qj(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.jg ? b.jg.J() : new Bi, f = d.ga, g = d.ha;
  (f || g) && c.translate(f, g);
  (d = d.U) && c.rotate(Math.asin(d))
}
o.h = function() {
  var a = this.Q.h("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Vb = this.Q.h("canvas");
  a.appendChild(this.Vb);
  this.Xg = this.H = new ij(this);
  this.kh = 0;
  rj(this)
};
o.getContext = function() {
  this.b() || this.h();
  if(!this.sb) {
    this.sb = this.Vb.getContext("2d"), this.sb.save()
  }
  return this.sb
};
o.ba = function(a, b) {
  this.width = a;
  this.height = b;
  rj(this);
  jj(this)
};
o.X = function() {
  var a = this.width, b = this.height, c = u(a) && a.indexOf("%") != -1, d = u(b) && b.indexOf("%") != -1;
  if(!this.t && (c || d)) {
    return k
  }
  var f, g;
  if(c) {
    f = this.b().parentNode, g = kg(f), a = parseFloat(a) * g.width / 100
  }
  d && (f = f || this.b().parentNode, g = g || kg(f), b = parseFloat(b) * g.height / 100);
  return new T(a, b)
};
function rj(a) {
  ig(a.b(), a.width, a.height);
  var b = a.X();
  if(b) {
    ig(a.Vb, b.width, b.height), a.Vb.width = b.width, a.Vb.height = b.height, a.sb = k
  }
}
o.reset = function() {
  var a = this.getContext();
  a.restore();
  var b = this.X();
  b.width && b.height && a.clearRect(0, 0, b.width, b.height);
  a.save()
};
o.clear = function() {
  this.reset();
  this.H.clear();
  for(var a = this.b();a.childNodes.length > 1;) {
    a.removeChild(a.lastChild)
  }
};
function jj(a) {
  if(a.Xi) {
    a.Wi = !0
  }else {
    if(a.t) {
      a.reset();
      if(a.ka) {
        var b = a.X();
        a.getContext().scale(b.width / a.ka, b.height / a.Xb)
      }
      (a.Ja || a.Za) && a.getContext().translate(-a.Ja, -a.Za);
      qj(a, a.H);
      a.H.za(a.sb);
      a.getContext().restore()
    }
  }
}
function kj(a, b) {
  var c = a.getContext();
  qj(a, b);
  if(!b.Lg || !b.Ng) {
    b.za(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof Li) {
        if(d.nc != 0) {
          c.globalAlpha = d.nc, c.fillStyle = d.fa(), b.za(c), c.fill(), c.globalAlpha = 1
        }
      }else {
        var f = c.createLinearGradient(d.Pi(), d.Ri(), d.Qi(), d.Si());
        f.addColorStop(0, d.Ni());
        f.addColorStop(1, d.Oi());
        c.fillStyle = f;
        b.za(c);
        c.fill()
      }
    }
    if(d = b.Me) {
      b.za(c), c.strokeStyle = d.fa(), d = d.nb, u(d) && d.indexOf("px") != -1 && (d = parseFloat(d) / Ti(a)), c.lineWidth = d, c.stroke()
    }
  }
  a.getContext().restore()
}
o.pb = function(a, b) {
  this.append(a, b)
};
o.append = function(a, b) {
  b = b || this.H;
  b.appendChild(a);
  this.t && !this.kh && !(b != this.H && b != this.Xg) && kj(this, a)
};
o.Lc = function(a, b, c, d, f, g, h) {
  a = new lj(k, this, a, b, c, d, f, g);
  this.append(a, h);
  return a
};
o.drawImage = function(a, b, c, d, f, g) {
  a = new oj(k, this, a, b, c, d, f);
  this.append(a, g);
  return a
};
o.c = function() {
  this.sb = k;
  pj.d.c.call(this)
};
o.S = function() {
  var a = this.X();
  pj.d.S.call(this);
  a || (rj(this), this.dispatchEvent("resize"));
  jj(this)
};
function sj(a) {
  this.A = [];
  tj(this, a)
}
C(sj, md);
o = sj.prototype;
o.Va = k;
o.ze = k;
function tj(a, b) {
  b && (F(b, function(a) {
    this.vc(a, !1)
  }, a), cb(a.A, b))
}
o.Zd = l("Va");
o.qd = function(a) {
  if(a != this.Va) {
    this.vc(this.Va, !1), this.Va = a, this.vc(a, !0)
  }
  this.dispatchEvent("select")
};
o.Yd = function() {
  return this.Va ? Ua(this.A, this.Va) : -1
};
o.Ee = function(a) {
  this.qd(this.A[a] || k)
};
o.clear = function() {
  Za(this.A);
  this.Va = k
};
o.c = function() {
  sj.d.c.call(this);
  delete this.A;
  this.Va = k
};
o.vc = function(a, b) {
  a && (typeof this.ze == "function" ? this.ze(a, b) : typeof a.De == "function" && a.De(b))
};
function uj() {
}
C(uj, Bg);
da(uj);
var vj = 0;
uj.prototype.h = function(a) {
  var b = Dg(this, a);
  return a.Da().h("div", b ? b.join(" ") : k, wj(this, a.da, a.pf(), a.Da()))
};
function wj(a, b, c, d) {
  for(var f = [], g = 0, h = 0;g < c.height;g++) {
    for(var j = [], n = 0;n < c.width;n++) {
      var p = b && b[h++];
      j.push(xj(a, p, d))
    }
    f.push(d.h("tr", a.v() + "-row", j))
  }
  return a.af(f, d)
}
uj.prototype.af = function(a, b) {
  var c = b.h("table", this.v() + "-table", b.h("tbody", this.v() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Ag(c, "grid");
  return c
};
function xj(a, b, c) {
  a = c.h("td", {"class":a.v() + "-cell", id:a.v() + "-cell-" + vj++}, b);
  Ag(a, "gridcell");
  return a
}
uj.prototype.md = function(a, b) {
  if(a) {
    var c = Ze(document, "tbody", this.v() + "-body", a)[0];
    if(c) {
      var d = 0;
      F(c.rows, function(a) {
        F(a.cells, function(a) {
          gf(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = We(a), h = c.rows[0].cells.length;d < b.length;) {
          var j = b[d++];
          f.push(xj(this, j, g));
          if(f.length == h) {
            j = g.h("tr", this.v() + "-row", f), c.appendChild(j), f.length = 0
          }
        }
        if(f.length > 0) {
          for(;f.length < h;) {
            f.push(xj(this, "", g))
          }
          j = g.h("tr", this.v() + "-row", f);
          c.appendChild(j)
        }
      }
    }
    og(a, !0, jc)
  }
};
function yj(a, b, c) {
  for(b = b.b();c && c.nodeType == 1 && c != b;) {
    if(c.tagName == "TD" && Ya(Re(c), a.v() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function zj(a, b, c, d) {
  if(c) {
    c = c.parentNode, a = a.v() + "-cell-hover", d ? Se(c, a) : Te(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id)
  }
}
uj.prototype.v = m("goog-palette");
function Aj(a, b, c) {
  W.call(this, a, b || uj.Na(), c)
}
C(Aj, W);
o = Aj.prototype;
o.w = k;
o.eb = -1;
o.K = k;
o.c = function() {
  Aj.d.c.call(this);
  if(this.K) {
    this.K.f(), this.K = k
  }
  this.w = k
};
o.nd = function(a) {
  Aj.d.nd.call(this, a);
  Bj(this);
  this.K ? (this.K.clear(), tj(this.K, a)) : (this.K = new sj(a), this.K.ze = y(this.vc, this), V(xg(this), this.K, "select", this.Sg));
  this.eb = -1
};
o.nf = m(k);
o.Yc = function(a) {
  Aj.d.Yc.call(this, a);
  var b = yj(this.m, this, a.target);
  if((!b || !a.relatedTarget || !jf(b, a.relatedTarget)) && b != Cj(this)) {
    a = this.da, Dj(this, a ? Ua(a, b) : -1)
  }
};
o.Xc = function(a) {
  Aj.d.Xc.call(this, a);
  var b = yj(this.m, this, a.target);
  (!b || !a.relatedTarget || !jf(b, a.relatedTarget)) && b == Cj(this) && zj(this.m, this, b, !1)
};
o.Wc = function(a) {
  Aj.d.Wc.call(this, a);
  if(this.he() && (a = yj(this.m, this, a.target), a != Cj(this))) {
    var b = this.da;
    Dj(this, b ? Ua(b, a) : -1)
  }
};
o.hb = function() {
  var a = Cj(this);
  return a ? (this.qd(a), this.dispatchEvent("action")) : !1
};
o.uf = function(a) {
  var b = this.da, b = b ? b.length : 0, c = this.w.width;
  if(b == 0 || !this.isEnabled()) {
    return!1
  }
  if(a.keyCode == 13 || a.keyCode == 32) {
    return this.hb(a)
  }
  if(a.keyCode == 36) {
    return Dj(this, 0), !0
  }else {
    if(a.keyCode == 35) {
      return Dj(this, b - 1), !0
    }
  }
  var d = this.eb < 0 ? this.Yd() : this.eb;
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
o.Sg = function() {
};
o.pf = l("w");
o.ba = function(a, b) {
  this.b() && e(Error("Component already rendered"));
  this.w = ja(a) ? new T(a, b) : a;
  Bj(this)
};
function Cj(a) {
  var b = a.da;
  return b && b[a.eb]
}
function Dj(a, b) {
  if(b != a.eb) {
    Ej(a, a.eb, !1), a.eb = b, Ej(a, b, !0)
  }
}
o.Yd = function() {
  return this.K ? this.K.Yd() : -1
};
o.Zd = function() {
  return this.K ? this.K.Zd() : k
};
o.Ee = function(a) {
  this.K && this.K.Ee(a)
};
o.qd = function(a) {
  this.K && this.K.qd(a)
};
function Ej(a, b, c) {
  if(a.b()) {
    var d = a.da;
    d && b >= 0 && b < d.length && zj(a.m, a, d[b], c)
  }
}
o.vc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.m.v() + "-cell-selected";
    b ? Se(c, d) : Te(c, d)
  }
};
function Bj(a) {
  var b = a.da;
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
;function Fj(a, b, c) {
  this.Hc = a || [];
  Aj.call(this, k, b || uj.Na(), c);
  this.Hc = this.Hc;
  this.gd = k;
  this.md(Gj(this))
}
C(Fj, Aj);
Fj.prototype.gd = k;
function Hj(a) {
  var b = Ij(Jj);
  if(!a.gd) {
    a.gd = Va(a.Hc, function(a) {
      return Ij(a)
    })
  }
  a.Ee(b ? Ua(a.gd, b) : -1)
}
function Gj(a) {
  return Va(a.Hc, function(a) {
    var c = this.Da().h("div", {"class":this.m.v() + "-colorswatch", style:"background-color:" + a});
    c.title = a.charAt(0) == "#" ? "RGB (" + kh(a).join(", ") + ")" : a;
    return c
  }, a)
}
function Ij(a) {
  if(a) {
    try {
      return eh(a).$c
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
  this.ve = new Ab
}
Lj.prototype.uh = function(a, b) {
  Kj.info("streamReset: reasonString=" + H(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  Mj = k
};
Lj.prototype.vh = function(a) {
  var a = Cb(a), b = a[0], c = a[1];
  b == 1 ? (c = this.ve.Qd(wb.ec(), c), a = lb(c, 1), b = lb(c, 2), c = c.fa(), rb.Lc(a, b, 5, 5, new Mi(1, "black"), new Li(c), i)) : b == 2 ? (rb.f(), Nj()) : O(Kj, "Strange message from server: " + H(a))
};
Lj.prototype.reset = function(a) {
  Kj.info("resetting with reason: " + a);
  this.F.reset(a)
};
var Mj = k, ti = new Dd(q.window);
function Oj() {
  Mj && (Mj.reset("idle timeout fired"), Mj = k)
}
var Pj = k;
function Qj() {
  Pj != k && ti.N.clearTimeout(Pj);
  Mj && (Pj = ti.N.setTimeout(Oj, 2592E5))
}
N(window, ["click", "focus", "keydown", "keypress"], Qj, !0);
function Rj() {
  var a = new pi;
  Mj = new Lj;
  Qj();
  xd(si(), function(b) {
    Mj || e(Error("lastProto falsy?"));
    var b = new Nf(b, a, ti), c = Mj;
    b.ue = y(c.vh, c);
    b.onreset = y(c.uh, c);
    Mj.F = b;
    Tf(Mj.F, ["subprotocol:whiteboard"]);
    b.start();
    return k
  })
}
function Sj() {
  rb.f();
  Nj();
  var a = Mj;
  Kj.info("Telling server to clear the board.");
  var b = a.F, a = [2, a.ve.lb(new xb)], a = (new Db).lb(a);
  Tf(b, [a])
}
function Tj(a) {
  var b = new Fc(a), a = b.offsetX, c = b.offsetY;
  rb.Lc(a, c, 5, 5, new Mi(1, "black"), new Li(sb), i);
  var d = Mj, f = sb;
  Kj.info("Telling server about circle at: " + a + ", " + c + " with color " + f);
  var b = d.F, g = new wb;
  mb(g, 1, a);
  mb(g, 2, c);
  mb(g, 3, f);
  a = d.ve.lb(g);
  Tf(b, [(new Db).lb([1, a])])
}
function Nj() {
  var a;
  a = I && !K("9") ? new cj(800, 600, i, i, i) : J && (!K("420") || kc) ? new pj(800, 600, i, i, i) : new Ui(800, 600, i, i, i);
  a.h();
  tb = U("drawArea");
  yg(a, tb);
  rb = a
}
var Jj = "#E06666";
function Uj(a) {
  var b;
  (a = a.target.Zd()) ? (a = a.style[Fa("background-color")] || "", b = Ij(a)) : b = k;
  b || (b = Jj);
  sb = b;
  ni.set("whiteboard_defaultColor", b);
  a = U("whiteboard-cp-value");
  u("background-color") ? gg(a, b, "background-color") : Pa("background-color", oa(gg, a));
  a = U("whiteboard-cp-value");
  a.title = b;
  b = eh(b).$c;
  kf(a, b);
  b = kh(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = ih(b[0], b[1], b[2]);
  u("color") ? gg(a, b, "color") : Pa("color", oa(gg, a))
}
function Vj() {
  ub = (new mh(document.location)).ia;
  if(vb = Boolean(Number(ub.get("logging", "0")))) {
    me().pd(ge);
    var a = new Ai(document.getElementById("log"));
    if(!0 != a.Af) {
      var b = me(), c = a.ih;
      if(!b.hc) {
        b.hc = []
      }
      b.hc.push(c);
      a.Af = !0
    }
  }else {
    me().pd(Zd)
  }
  Kj.info("Logger works.");
  (a = ni.get("whiteboard_defaultColor")) && (Jj = a);
  sb = Jj;
  b = U("whiteboard-controls-left");
  a = U("whiteboard-controls-right");
  c = bf("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  ff(b, c);
  c = bf("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  ff(b, c);
  b = new Fj("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.ba(8);
  yg(b, U("whiteboard-cp"));
  N(b, "action", Uj);
  Hj(b);
  Uj({target:b});
  b = new ch("Clear board");
  Rg(b, "clear-board-button");
  yg(b, a);
  N(b, "action", Sj);
  a = U("drawAreaOverlay");
  og(a, !0);
  N(a, "click", Tj, !1);
  Nj();
  Rj()
}
var Wj = "__whiteboard_init".split("."), Xj = q;
!(Wj[0] in Xj) && Xj.execScript && Xj.execScript("var " + Wj[0]);
for(var Yj;Wj.length && (Yj = Wj.shift());) {
  !Wj.length && fa(Vj) ? Xj[Yj] = Vj : Xj = Xj[Yj] ? Xj[Yj] : Xj[Yj] = {}
}
;})();
