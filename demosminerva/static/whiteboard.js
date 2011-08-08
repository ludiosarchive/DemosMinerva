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
function n(a) {
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
    return a.Ug || (a.Ug = new a)
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
    var j = d[h] || "", m = f[h] || "", p = RegExp("(\\d*)(\\D*)", "g"), z = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = p.exec(j) || ["", "", ""], v = z.exec(m) || ["", "", ""];
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
  this.Ri = a
}
C(Ga, D);
Ga.prototype.name = "AssertionError";
function Ha(a, b) {
  e(new Ga("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ia(a, b, c) {
  this.B = a;
  this.I = b;
  this.oe = c.name;
  this.yb = !!c.Ui;
  this.Pi = !!c.required;
  this.ac = c.Vd;
  this.Lf = c.type;
  this.ef = !1;
  switch(this.ac) {
    case Ja:
    ;
    case Ka:
    ;
    case La:
    ;
    case Ma:
    ;
    case Na:
      this.ef = !0
  }
  this.Hi = c.defaultValue
}
var Ja = 3, Ka = 4, La = 6, Ma = 16, Na = 18;
function Oa(a) {
  return a.ac == 11 || a.ac == 10
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
  this.Jf = a;
  this.oe = b.name || k;
  this.Ii = b.kf || k;
  this.Ei = b.Di;
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
  this.Xb = this.ke = k
}
function kb(a, b) {
  for(var c in a.u) {
    a.La[c] || b.call(a, Number(c), a.u[c])
  }
}
o = jb.prototype;
o.dc = l("ub");
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
  for(var b = ib(this.dc()), c = 0;c < b.length;c++) {
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
o.Xe = function(a) {
  for(var b = ib(this.dc()), c = 0;c < b.length;c++) {
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
  a.Xe(this);
  return a
};
function nb(a, b) {
  return b in a.u && fa(a.u[b])
}
function ob(a, b) {
  if(a.ke) {
    var c = b.I;
    if(!(c in a.Xb)) {
      var d = a.u, f;
      f = a.ke;
      var g = a.u[c];
      if(g == k) {
        f = g
      }else {
        if(b.yb) {
          var h = [];
          t(g);
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
  a.Xb && (a.Xb[b] = !0)
}
function qb(a, b) {
  var c = [], d, f;
  for(f in b) {
    b.hasOwnProperty(f) && (f == 0 ? d = b[0] : c.push(new Ia(a, f, b[f])))
  }
  a.ub = new hb(a, d, c);
  a.dc = function() {
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
qb(wb, {0:{name:"Point", kf:"demosminerva.whiteboard_messages.Point"}, 1:{name:"x", Vd:5, type:Number}, 2:{name:"y", Vd:5, type:Number}, 3:{name:"color", Vd:9, type:String}});
qb(xb, {0:{name:"ClearBoard", kf:"demosminerva.whiteboard_messages.ClearBoard"}});
function yb() {
}
yb.prototype.Rc = function(a, b) {
  return Oa(a) ? this.lb(b) : b
};
yb.prototype.Pd = function(a) {
  new a.Jf;
  e(Error("Unimplemented"))
};
yb.prototype.Qc = function(a, b) {
  if(Oa(a)) {
    return this.Pd(a.Lf.ub, b)
  }
  if(!a.ef) {
    return b
  }
  var c = a.Lf;
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
  var c = new a.Jf;
  c.ke = this;
  c.u = b;
  c.Xb = {};
  return c
};
function Ab() {
}
C(Ab, zb);
Ab.prototype.lb = function(a) {
  for(var b = ib(a.dc()), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    if(nb(a, f.I)) {
      var g = f.I;
      if(f.yb) {
        c[g] = [];
        for(var h = 0;h < pb(a, f.I);h++) {
          c[g][h] = this.Rc(f, a.get(f, h))
        }
      }else {
        c[g] = this.Rc(f, a.get(f))
      }
    }
  }
  kb(a, function(a, b) {
    c[a] = b
  });
  return c
};
Ab.prototype.Rc = function(a, b) {
  return a.ac == 8 ? b ? 1 : 0 : yb.prototype.Rc.apply(this, arguments)
};
Ab.prototype.Qc = function(a, b) {
  return a.ac == 8 ? b === 1 : yb.prototype.Qc.apply(this, arguments)
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
        if(Bb(a.A)) {
          a.A(b, c)
        }else {
          if(Bb(a.qg)) {
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
                      var j = d[h++], m = ia(j) ? "o" + x(j) : (typeof j).charAt(0) + j;
                      Object.prototype.hasOwnProperty.call(f, m) || (f[m] = !0, d[g++] = j)
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
    a && this.Bd(a)
  }
}
o = Ob.prototype;
o.g = 0;
o.Pe = 0;
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
o.Ic = function(a) {
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
  this.Pe = this.g = this.l.length = 0
};
o.remove = function(a) {
  return Qb(this.p, a) ? (delete this.p[a], this.g--, this.Pe++, this.l.length > 2 * this.g && Pb(this), !0) : !1
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
  Qb(this.p, a) || (this.g++, this.l.push(a), this.Pe++);
  this.p[a] = b
};
o.Bd = function(a) {
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
Ub.prototype.A = function(a, b) {
  a.push("new SACK(", String(this.ob), ", ");
  G(this.kb, a, b);
  a.push(")")
};
function Vb() {
  this.z = new Ob
}
o = Vb.prototype;
o.tb = -1;
o.w = 0;
o.append = function(a) {
  var b = Tb(a);
  this.z.set(this.tb + 1, [a, b]);
  this.tb += 1;
  this.w += b
};
o.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
o.A = function(a) {
  a.push("<Queue with ", String(this.z.W()), " item(s), counter=#", String(this.tb), ", size=", String(this.w), ">")
};
function Wb(a) {
  Pb(a.z);
  fb(a.z.l);
  return a.z.l
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
var yc = {Jh:"click", Oh:"dblclick", ii:"mousedown", mi:"mouseup", li:"mouseover", ki:"mouseout", ji:"mousemove", wi:"selectstart", ci:"keypress", bi:"keydown", di:"keyup", Hh:"blur", Wh:"focus", Ph:"deactivate", Xh:I ? "focusin" : "DOMFocusIn", Yh:I ? "focusout" : "DOMFocusOut", Ih:"change", vi:"select", xi:"submit", ai:"input", ri:"propertychange", Th:"dragstart", Qh:"dragenter", Sh:"dragover", Rh:"dragleave", Uh:"drop", Bi:"touchstart", Ai:"touchmove", zi:"touchend", yi:"touchcancel", Lh:"contextmenu", 
Vh:"error", $h:"help", ei:"load", fi:"losecapture", si:"readystatechange", ti:"resize", ui:"scroll", Ci:"unload", Zh:"hashchange", ni:"pagehide", oi:"pageshow", qi:"popstate", Mh:"copy", pi:"paste", Nh:"cut", Eh:"beforecopy", Fh:"beforecut", Gh:"beforepaste", hi:"message", Kh:"connect"};
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
  this.Bg && Bc.apply(k, this.Bg)
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
o.sc = !0;
o.stopPropagation = function() {
  this.ib = !0
};
o.preventDefault = function() {
  this.sc = !1
};
function Dc(a) {
  a.stopPropagation()
}
;var Ec = new Function("a", "return a");
function Fc(a, b) {
  a && this.hc(a, b)
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
o.fh = !1;
o.Ba = k;
o.hc = function(a, b) {
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
  this.fh = mc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Ba = a;
  delete this.sc;
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
o.Fd = !1;
o.hc = function(a, b, c, d, f, g) {
  w(a) ? this.Af = !0 : a && a.handleEvent && w(a.handleEvent) ? this.Af = !1 : e(Error("Invalid listener argument"));
  this.Db = a;
  this.Vf = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Yc = g;
  this.Fd = !1;
  this.key = ++Jc;
  this.jb = !1
};
o.handleEvent = function(a) {
  return this.Af ? this.Db.call(this.Yc || this.src, a) : this.Db.handleEvent.call(this.Db, a)
};
var Kc, Lc = (Kc = "ScriptEngine" in q && q.ScriptEngine() == "JScript") ? q.ScriptEngineMajorVersion() + "." + q.ScriptEngineMinorVersion() + "." + q.ScriptEngineBuildVersion() : "0";
function Mc(a, b) {
  this.Ff = b;
  this.ab = [];
  a > this.Ff && e(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.ab.push(this.ya ? this.ya() : {})
  }
}
C(Mc, L);
Mc.prototype.ya = k;
Mc.prototype.ff = k;
Mc.prototype.getObject = function() {
  return this.ab.length ? this.ab.pop() : this.ya ? this.ya() : {}
};
function Nc(a, b) {
  a.ab.length < a.Ff ? a.ab.push(b) : Oc(a, b)
}
function Oc(a, b) {
  if(a.ff) {
    a.ff(b)
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
      return m.getObject()
    };
    Sc = function(a) {
      Nc(m, a)
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
    var m = new Mc(0, 600);
    m.ya = b;
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
      var h = h[d], j = x(a), m;
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
        m = h[j] = Rc(), h.g++
      }
      g = Tc();
      g.src = a;
      h = Wc();
      h.hc(c, g, a, b, d, f);
      c = h.key;
      g.key = c;
      m.push(h);
      $c[c] = h;
      ad[j] || (ad[j] = Rc());
      ad[j].push(h);
      a.addEventListener ? (a == q || !a.Ld) && a.addEventListener(b, g, d) : a.attachEvent(b in bd ? bd[b] : bd[b] = "on" + b, g);
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
  $c[a].Fd = !0;
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
        if(a[g].Db == c && a[g].capture == d && a[g].Yc == f) {
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
  var c = b.src, d = b.type, f = b.Vf, g = b.capture;
  c.removeEventListener ? (c == q || !c.Ld) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in bd ? bd[d] : bd[d] = "on" + d, f);
  c = x(c);
  f = M[d][g][c];
  if(ad[c]) {
    var h = ad[c];
    $a(h, b);
    h.length == 0 && delete ad[c]
  }
  b.jb = !0;
  f.Nf = !0;
  gd(d, g, c, f);
  delete $c[a];
  return!0
}
function gd(a, b, c, d) {
  if(!d.ed && d.Nf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      if(d[f].jb) {
        var h = d[f].Vf;
        h.src = k;
        Vc(h);
        Xc(d[f])
      }else {
        f != g && (d[g] = d[f]), g++
      }
    }
    d.length = g;
    d.Nf = !1;
    g == 0 && (Sc(d), delete M[a][b][c], M[a][b].g--, M[a][b].g == 0 && (Qc(M[a][b]), delete M[a][b], M[a].g--), M[a].g == 0 && (Qc(M[a]), delete M[a]))
  }
}
function hd(a) {
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
function id(a, b, c, d, f) {
  var g = 1, b = x(b);
  if(a[b]) {
    a.ma--;
    a = a[b];
    a.ed ? a.ed++ : a.ed = 1;
    try {
      for(var h = a.length, j = 0;j < h;j++) {
        var m = a[j];
        m && !m.jb && (g &= jd(m, f) !== !1)
      }
    }finally {
      a.ed--, gd(c, d, b, a)
    }
  }
  return Boolean(g)
}
function jd(a, b) {
  var c = a.handleEvent(b);
  a.Fd && fd(a.key);
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
    p = Yc();
    p.hc(g, this);
    g = !0;
    try {
      if(j) {
        for(var r = Rc(), v = p.currentTarget;v;v = v.parentNode) {
          r.push(v)
        }
        h = f[!0];
        h.ma = h.g;
        for(var A = r.length - 1;!p.ib && A >= 0 && h.ma;A--) {
          p.currentTarget = r[A], g &= id(h, r[A], d, !0, p)
        }
        if(m) {
          h = f[!1];
          h.ma = h.g;
          for(A = 0;!p.ib && A < r.length && h.ma;A++) {
            p.currentTarget = r[A], g &= id(h, r[A], d, !1, p)
          }
        }
      }else {
        g = jd(c, p)
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
    g = jd(c, d)
  }finally {
    d.f()
  }
  return g
});
var kd = 0;
function ld() {
}
C(ld, L);
o = ld.prototype;
o.Ld = !0;
o.hd = k;
o.Ae = aa("hd");
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
      for(g = this;g;g = g.hd) {
        f.push(g)
      }
      g = c[!0];
      g.ma = g.g;
      for(var h = f.length - 1;!a.ib && h >= 0 && g.ma;h--) {
        a.currentTarget = f[h], d &= id(g, f[h], a.type, !0, a) && a.sc != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.ma = g.g, b) {
        for(h = 0;!a.ib && h < f.length && g.ma;h++) {
          a.currentTarget = f[h], d &= id(g, f[h], a.type, !1, a) && a.sc != !1
        }
      }else {
        for(f = this;!a.ib && f && g.ma;f = f.hd) {
          a.currentTarget = f, d &= id(g, f, a.type, !1, a) && a.sc != !1
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
  ld.d.c.call(this);
  hd(this);
  this.hd = k
};
function md(a, b) {
  this.ad = a || 1;
  this.yc = b || nd;
  this.Dd = y(this.sh, this);
  this.je = B()
}
C(md, ld);
md.prototype.enabled = !1;
var nd = q.window;
o = md.prototype;
o.pa = k;
o.sh = function() {
  if(this.enabled) {
    var a = B() - this.je;
    if(a > 0 && a < this.ad * 0.8) {
      this.pa = this.yc.setTimeout(this.Dd, this.ad - a)
    }else {
      if(this.dispatchEvent(od), this.enabled) {
        this.pa = this.yc.setTimeout(this.Dd, this.ad), this.je = B()
      }
    }
  }
};
o.start = function() {
  this.enabled = !0;
  if(!this.pa) {
    this.pa = this.yc.setTimeout(this.Dd, this.ad), this.je = B()
  }
};
o.stop = function() {
  this.enabled = !1;
  if(this.pa) {
    this.yc.clearTimeout(this.pa), this.pa = k
  }
};
o.c = function() {
  md.d.c.call(this);
  this.stop();
  delete this.yc
};
var od = "tick";
kd++;
kd++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function pd(a, b) {
  this.Fc = [];
  this.Te = a;
  this.bf = b || k
}
o = pd.prototype;
o.Ma = !1;
o.ec = !1;
o.nc = 0;
o.Fe = !1;
o.wg = !1;
o.Ed = 0;
o.cancel = function(a) {
  if(this.Ma) {
    this.rc instanceof pd && this.rc.cancel()
  }else {
    if(this.B) {
      var b = this.B;
      delete this.B;
      a ? b.cancel(a) : (b.Ed--, b.Ed <= 0 && b.cancel())
    }
    this.Te ? this.Te.call(this.bf, this) : this.Fe = !0;
    this.Ma || this.$b(new qd(this))
  }
};
o.We = function(a, b) {
  rd(this, a, b);
  this.nc--;
  this.nc == 0 && this.Ma && sd(this)
};
function rd(a, b, c) {
  a.Ma = !0;
  a.rc = c;
  a.ec = !b;
  sd(a)
}
function td(a) {
  if(a.Ma) {
    a.Fe || e(new ud(a)), a.Fe = !1
  }
}
function vd(a, b) {
  td(a);
  rd(a, !0, b)
}
o.$b = function(a) {
  td(this);
  rd(this, !1, a)
};
function wd(a, b) {
  xd(a, b, k, i)
}
function xd(a, b, c, d) {
  a.Fc.push([b, c, d]);
  a.Ma && sd(a)
}
function yd(a, b) {
  xd(a, b, b, i)
}
function zd(a) {
  return Wa(a.Fc, function(a) {
    return w(a[1])
  })
}
function sd(a) {
  a.Me && a.Ma && zd(a) && (q.clearTimeout(a.Me), delete a.Me);
  a.B && (a.B.Ed--, delete a.B);
  for(var b = a.rc, c = !1, d = !1;a.Fc.length && a.nc == 0;) {
    var f = a.Fc.shift(), g = f[0], h = f[1], f = f[2];
    if(g = a.ec ? h : g) {
      try {
        var j = g.call(f || a.bf, b);
        if(fa(j)) {
          a.ec = a.ec && (j == b || j instanceof Error), a.rc = b = j
        }
        b instanceof pd && (d = !0, a.nc++)
      }catch(m) {
        b = m, a.ec = !0, zd(a) || (c = !0)
      }
    }
  }
  a.rc = b;
  if(d && a.nc) {
    xd(b, y(a.We, a, !0), y(a.We, a, !1)), b.wg = !0
  }
  if(c) {
    a.Me = q.setTimeout(function() {
      e(b)
    }, 0)
  }
}
function Ad(a) {
  var b = new pd;
  vd(b, a);
  return b
}
function Bd(a) {
  var b = new pd;
  b.$b(a);
  return b
}
function ud(a) {
  D.call(this);
  this.Ag = a
}
C(ud, D);
ud.prototype.message = "Already called";
function qd(a) {
  D.call(this);
  this.Ag = a
}
C(qd, D);
qd.prototype.message = "Deferred was cancelled";
function Cd(a) {
  this.N = a;
  this.Mc = [];
  this.gf = [];
  this.vg = y(this.wh, this)
}
Cd.prototype.pa = k;
function Dd(a, b, c, d) {
  a.Mc.push([b, c, d]);
  if(a.pa == k) {
    a.pa = a.N.setTimeout(a.vg, 0)
  }
}
Cd.prototype.wh = function() {
  this.pa = k;
  var a = this.Mc;
  this.Mc = [];
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
  if(this.Mc.length == 0) {
    a = this.gf;
    this.gf = [];
    for(b = 0;b < a.length;b++) {
      vd(a[b], k)
    }
  }
};
new Cd(q.window);
function Ed(a, b) {
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
        a.push('<property id="', d, '">'), Ed(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if(typeof b.getFullYear == "function") {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && ea(b[c]) != "function" && (a.push('<property id="', ua(c), '">'), Ed(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function Fd(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, f = arguments;
  d.push("<arguments>");
  for(var g = f.length, h = 1;h < g;h++) {
    Ed(d, f[h])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;function Gd() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ B()).toString(36)
}
function Hd(a) {
  return a.substr(0, a.length - 1)
}
var Id = /^(0|[1-9]\d*)$/, Jd = /^(0|\-?[1-9]\d*)$/;
function Kd(a) {
  var b = Ld;
  return Id.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function Md(a) {
  this.p = new Ob;
  a && this.Bd(a)
}
function Nd(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + x(a) : b.substr(0, 1) + a
}
o = Md.prototype;
o.W = function() {
  return this.p.W()
};
o.add = function(a) {
  this.p.set(Nd(a), a)
};
o.Bd = function(a) {
  for(var a = Kb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
o.ve = function(a) {
  for(var a = Kb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
o.remove = function(a) {
  return this.p.remove(Nd(a))
};
o.clear = function() {
  this.p.clear()
};
o.Pa = function() {
  return this.p.Pa()
};
o.contains = function(a) {
  return this.p.ca(Nd(a))
};
o.Y = function() {
  return this.p.Y()
};
o.J = function() {
  return new Md(this)
};
o.n = function(a) {
  return this.W() == Jb(a) && Od(this, a)
};
function Od(a, b) {
  var c = Jb(b);
  if(a.W() > c) {
    return!1
  }
  !(b instanceof Md) && c > 5 && (b = new Md(b));
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
;function Pd(a) {
  return Qd(a || arguments.callee.caller, [])
}
function Qd(a, b) {
  var c = [];
  if(Ya(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(Rd(a) + "(");
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
            g = (g = Rd(g)) ? g : "[fn]";
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
        c.push(Qd(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Rd(a) {
  if(Sd[a]) {
    return Sd[a]
  }
  a = String(a);
  if(!Sd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Sd[a] = b ? b[1] : "[Anonymous]"
  }
  return Sd[a]
}
var Sd = {};
function Td(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
Td.prototype.lh = 0;
Td.prototype.Td = k;
Td.prototype.Sd = k;
var Ud = 0;
Td.prototype.reset = function(a, b, c, d, f) {
  this.lh = typeof f == "number" ? f : Ud++;
  this.gg = d || B();
  this.Cb = a;
  this.Kf = b;
  this.Xg = c;
  delete this.Td;
  delete this.Sd
};
Td.prototype.od = aa("Cb");
function Vd(a) {
  this.oe = a
}
Vd.prototype.B = k;
Vd.prototype.Cb = k;
Vd.prototype.P = k;
Vd.prototype.gc = k;
function Wd(a, b) {
  this.name = a;
  this.value = b
}
Wd.prototype.toString = l("name");
var Xd = new Wd("OFF", Infinity), Yd = new Wd("SHOUT", 1200), Zd = new Wd("SEVERE", 1E3), $d = new Wd("WARNING", 900), ae = new Wd("INFO", 800), be = new Wd("CONFIG", 700), ce = new Wd("FINE", 500), de = new Wd("FINEST", 300), ee = new Wd("ALL", 0);
o = Vd.prototype;
o.getParent = l("B");
o.od = aa("Cb");
function fe(a) {
  if(a.Cb) {
    return a.Cb
  }
  if(a.B) {
    return fe(a.B)
  }
  Ha("Root logger has no level set.");
  return k
}
o.log = function(a, b, c) {
  if(a.value >= fe(this).value) {
    a = this.Lg(a, b, c);
    b = "log:" + a.Kf;
    q.console && (q.console.timeStamp ? q.console.timeStamp(b) : q.console.markTimeline && q.console.markTimeline(b));
    q.msWriteProfilerMark && q.msWriteProfilerMark(b);
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
o.Lg = function(a, b, c) {
  var d = new Td(a, String(b), this.oe);
  if(c) {
    d.Td = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var h;
      var j = ca("window.location.href");
      if(u(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var m, p, z = !1;
        try {
          m = c.lineNumber || c.Qi || "Not available"
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
      f = "Message: " + ua(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + ua(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ua(Pd(g) + "-> ")
    }catch(A) {
      f = "Exception trying to expose exception! You win, we lose. " + A
    }
    d.Sd = f
  }
  return d
};
function ge(a, b) {
  a.log(Zd, b, i)
}
function O(a, b) {
  a.log($d, b, i)
}
o.info = function(a, b) {
  this.log(ae, a, b)
};
function P(a, b) {
  a.log(ce, b, i)
}
function Q(a, b) {
  a.log(de, b, i)
}
var he = {}, ie = k;
function je() {
  ie || (ie = new Vd(""), he[""] = ie, ie.od(be))
}
function ke() {
  je();
  return ie
}
function R(a) {
  je();
  var b;
  if(!(b = he[a])) {
    b = new Vd(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = R(a.substr(0, c));
    if(!c.P) {
      c.P = {}
    }
    c.P[d] = b;
    b.B = c;
    he[a] = b
  }
  return b
}
;function le(a, b) {
  this.T = "_" + Gd();
  this.vd = a;
  this.Sa = b;
  this.Wa = a.Wa
}
C(le, L);
o = le.prototype;
o.gb = !0;
o.Jc = !1;
o.a = R("cw.net.FlashSocket");
o.A = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.T);
  a.push("'>")
};
function me(a, b, c) {
  b == "frames" ? (a = a.Sa, ne(a.M), oe(a.M, c)) : b == "stillreceiving" ? (c = a.Sa, Q(c.a, "onstillreceiving"), ne(c.M)) : b == "connect" ? (c = a.Sa, c.a.info("onconnect"), ne(c.M), a = c.Sb, c.Sb = k, a.length && (Q(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.rd.Dc(a))) : b == "close" ? (a.gb = !1, a.f()) : b == "ioerror" ? (a.gb = !1, b = a.Sa, O(b.a, "onioerror: " + H(c)), pe(b.M, !1), a.f()) : b == "securityerror" ? (a.gb = !1, b = a.Sa, O(b.a, "onsecurityerror: " + 
  H(c)), pe(b.M, !1), a.f()) : e(Error("bad event: " + b))
}
o.Id = function(a, b) {
  try {
    var c = this.Wa.CallFunction(Fd("__FC_connect", this.T, a, b, "<int32/>\n"))
  }catch(d) {
    ge(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message);
    this.Jc = !0;
    this.gb = !1;
    this.f();
    return
  }
  c != '"OK"' && e(Error("__FC_connect failed? ret: " + c))
};
o.Dc = function(a) {
  try {
    var b = this.Wa.CallFunction(Fd("__FC_writeFrames", this.T, a))
  }catch(c) {
    ge(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message);
    this.Jc = !0;
    this.gb = !1;
    this.f();
    return
  }
  b != '"OK"' && (b == '"no such instance"' ? (O(this.a, "Flash no longer knows of " + this.T + "; disposing."), this.f()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
o.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.gb);
  le.d.c.call(this);
  var a = this.Wa;
  delete this.Wa;
  if(this.gb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(Fd("__FC_close", this.T)))
    }catch(b) {
      ge(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Jc = !0
    }
  }
  if(this.Jc) {
    a = this.Sa, O(a.a, "oncrash"), pe(a.M, !0)
  }else {
    this.Sa.onclose()
  }
  delete this.Sa;
  delete this.vd.wb[this.T]
};
function qe(a, b) {
  this.L = a;
  this.Wa = b;
  this.wb = {};
  this.Gd = "__FST_" + Gd();
  q[this.Gd] = y(this.Eg, this);
  var c = b.CallFunction(Fd("__FC_setCallbackFunc", this.Gd));
  c != '"OK"' && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
C(qe, L);
o = qe.prototype;
o.a = R("cw.net.FlashSocketTracker");
o.A = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  G(this.wb, a, b);
  a.push(">")
};
o.Kd = function(a) {
  a = new le(this, a);
  return this.wb[a.T] = a
};
o.Cg = function(a, b, c, d) {
  var f = this.wb[a];
  f ? b == "frames" && d ? (me(f, "ioerror", "FlashConnector hadError while handling data."), f.f()) : me(f, b, c) : O(this.a, "Cannot dispatch because we have no instance: " + H([a, b, c, d]))
};
o.Eg = function(a, b, c, d) {
  try {
    Dd(this.L, this.Cg, this, [a, b, c, d])
  }catch(f) {
    q.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
o.c = function() {
  qe.d.c.call(this);
  for(var a = Qa(this.wb);a.length;) {
    a.pop().f()
  }
  delete this.wb;
  delete this.Wa;
  q[this.Gd] = i
};
function re(a) {
  this.M = a;
  this.Sb = []
}
C(re, L);
o = re.prototype;
o.a = R("cw.net.FlashSocketConduit");
o.Dc = function(a) {
  this.Sb ? (Q(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Sb.push.apply(this.Sb, a)) : (Q(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.rd.Dc(a))
};
o.Id = function(a, b) {
  this.rd.Id(a, b)
};
o.onclose = function() {
  this.a.info("onclose");
  pe(this.M, !1)
};
o.c = function() {
  this.a.info("in disposeInternal.");
  re.d.c.call(this);
  this.rd.f();
  delete this.M
};
function se() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function te(a) {
  return a * Math.PI / 180
}
;var Ld = Math.pow(2, 53);
var ue = {qg:n("<cw.eq.Wildcard>")};
function ve(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function we(a, b, c) {
  var d = ea(a), f = ea(b);
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
                if(a.pg == $b && b.pg == $b) {
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
;function S(a) {
  D.call(this, a)
}
C(S, D);
S.prototype.name = "cw.net.InvalidFrame";
function xe() {
  var a = [];
  this.la(a);
  return a.join("")
}
function ye() {
}
ye.prototype.n = function(a, b) {
  return!(a instanceof ye) ? !1 : we(ze(this), ze(a), b)
};
ye.prototype.A = function(a, b) {
  a.push("<HelloFrame properties=");
  G(ze(this), a, b);
  a.push(">")
};
function ze(a) {
  return[a.Ob, a.Tf, a.vf, a.Xf, a.xc, a.Ie, a.Mf, a.If, a.ne, a.Gf, a.lg, a.fg, a.oa, a.dd]
}
ye.prototype.ea = xe;
ye.prototype.la = function(a) {
  var b = {};
  b.tnum = this.Ob;
  b.ver = this.Tf;
  b.format = this.vf;
  b["new"] = this.Xf;
  b.id = this.xc;
  b.ming = this.Ie;
  b.pad = this.Mf;
  b.maxb = this.If;
  if(fa(this.ne)) {
    b.maxt = this.ne
  }
  b.maxia = this.Gf;
  b.tcpack = this.lg;
  b.eeds = this.fg;
  b.sack = this.oa instanceof Ub ? Hd((new Ae(this.oa)).ea()) : this.oa;
  b.seenack = this.dd instanceof Ub ? Hd((new Ae(this.dd)).ea()) : this.dd;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new Db).lb(b), "H")
};
function Be(a) {
  this.Nb = a
}
Be.prototype.n = function(a) {
  return a instanceof Be && this.Nb == a.Nb
};
Be.prototype.A = function(a, b) {
  a.push("new StringFrame(");
  G(this.Nb, a, b);
  a.push(")")
};
Be.prototype.ea = xe;
Be.prototype.la = function(a) {
  a.push(this.Nb, " ")
};
function Ce(a) {
  this.Hc = a
}
Ce.prototype.n = function(a) {
  return a instanceof Ce && this.Hc == a.Hc
};
Ce.prototype.A = function(a, b) {
  a.push("new CommentFrame(");
  G(this.Hc, a, b);
  a.push(")")
};
Ce.prototype.ea = xe;
Ce.prototype.la = function(a) {
  a.push(this.Hc, "^")
};
function De(a) {
  this.vc = a
}
De.prototype.n = function(a) {
  return a instanceof De && this.vc == a.vc
};
De.prototype.A = function(a) {
  a.push("new SeqNumFrame(", String(this.vc), ")")
};
De.prototype.ea = xe;
De.prototype.la = function(a) {
  a.push(String(this.vc), "N")
};
function Ee(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return k
  }
  a: {
    var c = b[1], a = Ld;
    if(Jd.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
      var g = Kd(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Ub(a, c)
}
function Ae(a) {
  this.oa = a
}
Ae.prototype.n = function(a, b) {
  return a instanceof Ae && this.oa.n(a.oa, b)
};
Ae.prototype.A = function(a, b) {
  a.push("new SackFrame(");
  G(this.oa, a, b);
  a.push(")")
};
Ae.prototype.ea = xe;
Ae.prototype.la = function(a) {
  var b = this.oa;
  a.push(b.kb.join(","), "|", String(b.ob));
  a.push("A")
};
function Fe(a) {
  this.kc = a
}
Fe.prototype.n = function(a, b) {
  return a instanceof Fe && this.kc.n(a.kc, b)
};
Fe.prototype.A = function(a, b) {
  a.push("new StreamStatusFrame(");
  G(this.kc, a, b);
  a.push(")")
};
Fe.prototype.ea = xe;
Fe.prototype.la = function(a) {
  var b = this.kc;
  a.push(b.kb.join(","), "|", String(b.ob));
  a.push("T")
};
function Ge() {
}
Ge.prototype.A = function(a) {
  a.push("new StreamCreatedFrame()")
};
Ge.prototype.n = function(a) {
  return a instanceof Ge
};
Ge.prototype.ea = xe;
Ge.prototype.la = function(a) {
  a.push("C")
};
function He() {
}
He.prototype.A = function(a) {
  a.push("new YouCloseItFrame()")
};
He.prototype.n = function(a) {
  return a instanceof He
};
He.prototype.ea = xe;
He.prototype.la = function(a) {
  a.push("Y")
};
function Ie(a, b) {
  this.pc = a;
  this.Rb = b
}
Ie.prototype.n = function(a) {
  return a instanceof Ie && this.pc == a.pc && this.Rb == a.Rb
};
Ie.prototype.A = function(a, b) {
  a.push("new ResetFrame(");
  G(this.pc, a, b);
  a.push(", ", String(this.Rb), ")")
};
Ie.prototype.ea = xe;
Ie.prototype.la = function(a) {
  a.push(this.pc, "|", String(Number(this.Rb)), "!")
};
var Je = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Ke(a) {
  this.reason = a
}
Ke.prototype.n = function(a) {
  return a instanceof Ke && this.reason == a.reason
};
Ke.prototype.A = function(a, b) {
  a.push("new TransportKillFrame(");
  G(this.reason, a, b);
  a.push(")")
};
Ke.prototype.ea = xe;
Ke.prototype.la = function(a) {
  a.push(this.reason, "K")
};
function Le(a) {
  a || e(new S("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new Be(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = Ee(Hd(a)), a == k && e(new S("bad sack")), new Ae(a)
    }else {
      if(b == "N") {
        return a = Kd(Hd(a)), a == k && e(new S("bad seqNum")), new De(a)
      }else {
        if(b == "T") {
          return a = Ee(Hd(a)), a == k && e(new S("bad lastSackSeen")), new Fe(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && e(new S("leading garbage")), new He
          }else {
            if(b == "^") {
              return new Ce(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && e(new S("leading garbage")), new Ge
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && e(new S("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == k && e(new S("bad applicationLevel")), new Ie(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = Je[a], a == k && e(new S("unknown kill reason: " + a)), new Ke(a)
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
;var Me = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Ne(a, b) {
  var c = a.match(Me), d = b.match(Me);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;var Oe;
function Pe(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function Qe(a, b) {
  var c = Pe(a), d = eb(arguments, 1), f;
  f = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    Ya(f, d[h]) || (f.push(d[h]), g++)
  }
  f = g == d.length;
  a.className = c.join(" ");
  return f
}
function Re(a, b) {
  var c = Pe(a), d = eb(arguments, 1), f;
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
var Se = !I || wc();
!jc && !I || I && wc() || jc && K("1.9.1");
var Te = I && !K("9");
function Ue(a) {
  return a ? new Ve(We(a)) : Oe || (Oe = new Ve)
}
function U(a) {
  return u(a) ? document.getElementById(a) : a
}
function Xe(a, b, c, d) {
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
function Ye(a, b) {
  Pa(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in Ze ? a.setAttribute(Ze[d], b) : d.lastIndexOf("aria-", 0) == 0 ? a.setAttribute(d, b) : a[d] = b
  })
}
var Ze = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function $e(a, b, c) {
  return af(document, arguments)
}
function af(a, b) {
  var c = b[0], d = b[1];
  if(!Se && d && (d.name || d.type)) {
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
    u(d) ? c.className = d : t(d) ? Qe.apply(k, [c].concat(d)) : Ye(c, d)
  }
  b.length > 2 && bf(a, c, b, 2);
  return c
}
function bf(a, b, c, d) {
  function f(c) {
    c && b.appendChild(u(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && g.nodeType > 0) ? F(cf(g) ? bb(g) : g, f) : f(g)
  }
}
function df(a, b) {
  bf(We(a), a, arguments, 1)
}
function ef(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function ff(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function gf(a, b) {
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
function We(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
function hf(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && a.firstChild.nodeType == 3) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      ef(a), a.appendChild(We(a).createTextNode(b))
    }
  }
}
var jf = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, kf = {IMG:" ", BR:"\n"};
function lf(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ja(a) && a >= 0 && a < 32768) : !1
}
function mf(a) {
  var b = [];
  nf(a, b, !1);
  return b.join("")
}
function nf(a, b, c) {
  if(!(a.nodeName in jf)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in kf) {
        b.push(kf[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          nf(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function cf(a) {
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
function Ve(a) {
  this.r = a || q.document || document
}
o = Ve.prototype;
o.Da = Ue;
o.b = function(a) {
  return u(a) ? this.r.getElementById(a) : a
};
o.h = function(a, b, c) {
  return af(this.r, arguments)
};
o.createElement = function(a) {
  return this.r.createElement(a)
};
o.createTextNode = function(a) {
  return this.r.createTextNode(a)
};
o.Ze = function(a, b, c) {
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
o.append = df;
o.contains = gf;
function of(a, b, c, d) {
  this.contentWindow = a;
  this.Nc = b;
  this.Je = c;
  this.Jg = d
}
of.prototype.A = function(a, b) {
  a.push("<XDRFrame frameId=");
  G(this.Jg, a, b);
  a.push(", expandedUrl=");
  G(this.Nc, a, b);
  a.push(", streams=");
  G(this.Je, a, b);
  a.push(">")
};
function pf() {
  this.frames = [];
  this.le = new Ob
}
pf.prototype.a = R("cw.net.XDRTracker");
function qf(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + String(Math.floor(se())) + String(Math.floor(se()))
  })
}
function rf(a, b) {
  for(var c = sf, d = 0;d < c.frames.length;d++) {
    var f = c.frames[d], g;
    if(g = f.Je.length == 0) {
      g = f.Nc;
      var h = String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + H(b) + " existing frame " + H(f)), Ad(f)
    }
  }
  d = Gd() + Gd();
  f = qf(a);
  g = String(window.location).match(Me)[3] || k;
  h = f.match(Me)[3] || k;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + H(b)), c = Ad(new of(q, f, [b], k))) : (g = U("minerva-xdrframes"), h = new pd, c.le.set(d, [h, f, b]), c.a.info("Creating new XDRFrame " + H(d) + "for " + H(b)), c = $e("iframe", {id:"minerva-xdrframe-" + d, width:16, height:16, src:f + "xdrframe/?domain=" + document.domain + "&id=" + d}), g.appendChild(c), c = h);
  return c
}
pf.prototype.Ch = function(a) {
  var b = this.le.get(a);
  b || e(Error("Unknown frameId " + H(a)));
  this.le.remove(b);
  var c = b[0], a = new of(U("minerva-xdrframe-" + a).contentWindow || (J ? U("minerva-xdrframe-" + a).document || U("minerva-xdrframe-" + a).contentWindow.document : U("minerva-xdrframe-" + a).contentDocument || U("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (J ? U("minerva-xdrframe-" + a).document || U("minerva-xdrframe-" + a).contentWindow.document : U("minerva-xdrframe-" + a).contentDocument || U("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  vd(c, a)
};
var sf = new pf;
q.__XHRTracker_xdrFrameLoaded = y(sf.Ch, sf);
var tf;
tf = !1;
var uf = fc();
uf && (uf.indexOf("Firefox") != -1 || uf.indexOf("Camino") != -1 || uf.indexOf("iPhone") != -1 || uf.indexOf("iPod") != -1 || uf.indexOf("iPad") != -1 || uf.indexOf("Android") != -1 || uf.indexOf("Chrome") != -1 && (tf = !0));
var vf = tf;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function wf(a, b, c, d, f, g) {
  pd.call(this, f, g);
  this.Ef = a;
  this.Nd = [];
  this.hf = !!b;
  this.Hg = !!c;
  this.xg = !!d;
  for(b = 0;b < a.length;b++) {
    xd(a[b], y(this.qf, this, b, !0), y(this.qf, this, b, !1))
  }
  a.length == 0 && !this.hf && vd(this, this.Nd)
}
C(wf, pd);
wf.prototype.Of = 0;
wf.prototype.qf = function(a, b, c) {
  this.Of++;
  this.Nd[a] = [b, c];
  this.Ma || (this.hf && b ? vd(this, [a, c]) : this.Hg && !b ? this.$b(c) : this.Of == this.Ef.length && vd(this, this.Nd));
  this.xg && !b && (c = k);
  return c
};
wf.prototype.$b = function(a) {
  wf.d.$b.call(this, a);
  F(this.Ef, function(a) {
    a.cancel()
  })
};
function xf(a) {
  a = new wf(a, !1, !0);
  wd(a, function(a) {
    return Va(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function yf(a, b) {
  this.Ah = a;
  this.Hf = b
}
yf.prototype.ie = 0;
yf.prototype.gd = 0;
yf.prototype.Ud = !1;
function zf(a) {
  var b = [];
  if(a.Ud) {
    return[b, 2]
  }
  var c = a.ie, d = a.Ah.responseText;
  for(a.ie = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var f = d.substr(a.gd, c - a.gd), f = f.replace(/\r$/, "");
    if(f.length > a.Hf) {
      return a.Ud = !0, [b, 2]
    }
    b.push(f);
    a.gd = c += 1
  }
  return a.ie - a.gd - 1 > a.Hf ? (a.Ud = !0, [b, 2]) : [b, 1]
}
;function Af(a, b, c) {
  this.M = b;
  this.na = a;
  this.Jd = c
}
C(Af, L);
o = Af.prototype;
o.a = R("cw.net.XHRMaster");
o.Ua = -1;
o.me = function(a, b, c) {
  this.Jd.__XHRSlave_makeRequest(this.na, a, b, c)
};
o.Oa = l("Ua");
o.qe = function(a, b) {
  b != 1 && ge(this.a, H(this.na) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  ne(this.M);
  oe(this.M, a)
};
o.re = function(a) {
  P(this.a, "ongotheaders_: " + H(a));
  var b = k;
  "Content-Length" in a && (b = Kd(a["Content-Length"]));
  a = this.M;
  P(a.a, a.s() + " got Content-Length: " + b);
  a.wa == Bf && (b == k && (O(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Cf(a, 2E3 + b / 3072 * 1E3))
};
o.se = function(a) {
  a != 1 && P(this.a, this.M.s() + "'s XHR's readyState is " + a);
  this.Ua = a;
  this.Ua >= 2 && ne(this.M)
};
o.pe = function() {
  this.M.f()
};
o.c = function() {
  Af.d.c.call(this);
  delete Df.Fa[this.na];
  this.Jd.__XHRSlave_dispose(this.na);
  delete this.Jd
};
function Ef() {
  this.Fa = {}
}
C(Ef, L);
o = Ef.prototype;
o.a = R("cw.net.XHRMasterTracker");
o.Kd = function(a, b) {
  var c = "_" + Gd(), d = new Af(c, a, b);
  return this.Fa[c] = d
};
o.qe = function(a, b, c) {
  var b = ab(b), d = this.Fa[a];
  d ? d.qe(b, c) : ge(this.a, "onframes_: no master for " + H(a))
};
o.re = function(a, b) {
  var c = this.Fa[a];
  c ? c.re(b) : ge(this.a, "ongotheaders_: no master for " + H(a))
};
o.se = function(a, b) {
  var c = this.Fa[a];
  c ? c.se(b) : ge(this.a, "onreadystatechange_: no master for " + H(a))
};
o.pe = function(a) {
  var b = this.Fa[a];
  b ? (delete this.Fa[b.na], b.pe()) : ge(this.a, "oncomplete_: no master for " + H(a))
};
o.c = function() {
  Ef.d.c.call(this);
  for(var a = Qa(this.Fa);a.length;) {
    a.pop().f()
  }
  delete this.Fa
};
var Df = new Ef;
q.__XHRMaster_onframes = y(Df.qe, Df);
q.__XHRMaster_oncomplete = y(Df.pe, Df);
q.__XHRMaster_ongotheaders = y(Df.re, Df);
q.__XHRMaster_onreadystatechange = y(Df.se, Df);
function Ff(a, b, c) {
  this.host = a;
  this.port = b;
  this.vh = c
}
function Gf(a, b) {
  b || (b = a);
  this.Gb = a;
  this.Ib = b
}
function Hf(a, b, c, d) {
  this.Gb = a;
  this.Sf = b;
  this.Ib = c;
  this.cg = d;
  (!(this.Gb.indexOf("http://") == 0 || this.Gb.indexOf("https://") == 0) || !(this.Ib.indexOf("http://") == 0 || this.Ib.indexOf("https://") == 0)) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Sf.location.href;
  Ne(this.Gb, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.cg.location.href;
  Ne(this.Ib, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
var If = new Ce(";)]}");
function Jf() {
}
Jf.prototype.mf = n(1);
function Kf(a, b, c, d) {
  this.L = a;
  this.Uf = b;
  this.R = c;
  this.rh = d ? d : new Jf;
  this.zc = new Md;
  this.xc = Gd() + Gd();
  this.Ta = new Vb;
  this.fe = new Xb;
  this.Cc = k;
  this.xd = [];
  if(J) {
    this.Cc = cd(q, "load", this.kh, !1, this)
  }
}
C(Kf, L);
o = Kf.prototype;
o.a = R("cw.net.ClientStream");
o.Cf = new Ub(-1, []);
o.Df = new Ub(-1, []);
o.$g = 50;
o.Zg = 1048576;
o.Qf = k;
o.Ge = !1;
o.we = !1;
o.i = 1;
o.jg = -1;
o.k = k;
o.C = k;
o.qc = k;
o.He = 0;
o.Rf = 0;
o.bg = 0;
o.A = function(a, b) {
  a.push("<ClientStream id=");
  G(this.xc, a, b);
  a.push(", state=", String(this.i));
  a.push(", primary=");
  G(this.k, a, b);
  a.push(", secondary=");
  G(this.C, a, b);
  a.push(", resetting=");
  G(this.qc, a, b);
  a.push(">")
};
function Lf(a) {
  var b = [-1];
  a.k && b.push(a.k.Eb);
  a.C && b.push(a.C.Eb);
  return Math.max.apply(Math.max, b)
}
function Mf(a) {
  if(a.i != 1) {
    var b = a.Ta.z.W() != 0, c = Yb(a.fe), d = !c.n(a.Df) && !(a.k && c.n(a.k.Bb) || a.C && c.n(a.C.Bb)), f = Lf(a);
    if((b = b && f < a.Ta.tb) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.k.Tb) {
        Q(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.k, c != d.Bb)) {
          !d.Ha && !d.G.length && Nf(d), d.G.push(new Ae(c)), d.Bb = c
        }
        b && Of(a.k, a.Ta, f + 1);
        a.k.Ca()
      }else {
        a.C == k ? a.Ge ? (Q(a.a, "tryToSend_: creating secondary to send " + g), a.C = Pf(a, !1), b && Of(a.C, a.Ta, f + 1), a.C.Ca()) : (Q(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.we = !0) : Q(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
o.kh = function() {
  this.Cc = k;
  if(this.k && this.k.xb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.k;
    a.Ad = !0;
    a.f()
  }
  if(this.C && this.C.xb()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.C, a.Ad = !0, a.f()
  }
};
function Qf(a, b) {
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
    Mf(a)
  }
}
function Pf(a, b) {
  var c;
  a.R instanceof Hf ? c = a.rh.mf() == 1 ? Bf : Rf : a.R instanceof Ff ? c = Sf : e(Error("Don't support endpoint " + H(a.R)));
  a.jg += 1;
  c = new Tf(a.L, a, a.jg, c, a.R, b);
  Q(a.a, "Created: " + c.s());
  a.zc.add(c);
  return c
}
function Uf(a, b, c) {
  var d = new Vf(a.L, a, b, c);
  Q(a.a, "Created: " + d.s() + ", delay=" + b + ", times=" + c);
  a.zc.add(d);
  return d
}
function Wf(a, b) {
  a.zc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  P(a.a, "Offline: " + b.s());
  b.oc ? a.He += b.oc : a.He = 0;
  a.He >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), Xf("stream penalty reached limit", !1), a.f());
  if(a.i > 3) {
    a.i == 4 && b.og ? (P(a.a, "Disposing because resettingTransport_ is done."), a.f()) : P(a.a, "Not creating a transport because ClientStream is in state " + a.i)
  }else {
    var c;
    var d;
    c = b instanceof Vf;
    if(!c && b.Ad) {
      var f = J ? vf ? [0, 1] : [9, 20] : [0, 0];
      c = f[0];
      d = f[1];
      Q(a.a, "getDelayForNextTransport_: " + H({delay:c, times:d}))
    }else {
      d = b.Ve();
      if(b == a.k) {
        if(d) {
          f = ++a.Rf
        }else {
          if(!c) {
            f = a.Rf = 0
          }
        }
      }else {
        if(d) {
          f = ++a.bg
        }else {
          if(!c) {
            f = a.bg = 0
          }
        }
      }
      if(c || !f) {
        d = c = 0, Q(a.a, "getDelayForNextTransport_: " + H({count:f, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(f, 3), h = Math.floor(Math.random() * 4E3) - 2E3, j = Math.max(0, b.kg - b.Le);
        d = (c = Math.max(0, g + h - j)) ? 1 : 0;
        Q(a.a, "getDelayForNextTransport_: " + H({count:f, base:g, variance:h, oldDuration:j, delay:c, times:d}))
      }
    }
    c = [c, d];
    f = c[0];
    c = c[1];
    if(b == a.k) {
      a.k = k, c ? a.k = Uf(a, f, c) : (f = Lf(a), a.k = Pf(a, !0), Of(a.k, a.Ta, f + 1)), a.k.Ca()
    }else {
      if(b == a.C) {
        a.C = k, c ? (a.C = Uf(a, f, c), a.C.Ca()) : Mf(a)
      }
    }
  }
}
o.reset = function(a) {
  this.i > 3 && e(Error("reset: Can't send reset in state " + this.i));
  this.i = 4;
  this.k && this.k.Tb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Yf(this.k, a), this.k.Ca()) : (this.k && (P(this.a, "reset: Disposing primary before sending ResetFrame."), this.k.f()), this.C && (P(this.a, "reset: Disposing secondary before sending ResetFrame."), this.C.f()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.qc = Pf(this, !1), Yf(this.qc, a), this.qc.Ca());
  Xf(a, !0)
};
function Zf(a, b, c, d) {
  var f;
  f = a.fe;
  for(var g = a.$g, h = a.Zg, j = [], m = !1, p = 0, z = c.length;p < z;p++) {
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
          m = !0;
          break
        }
        var A = Tb(r);
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
      if(h = a.Uf, j = Cb(c[g]), m = j[0], p = j[1], m == 1 ? (m = h.te.Pd(wb.dc(), p), h = lb(m, 1), j = lb(m, 2), m = m.fa(), rb.Kc(h, j, 5, 5, new $f(1, "black"), new ag(m), i)) : m == 2 ? (rb.f(), bg()) : O(cg, "Strange message from server: " + H(j)), a.i == 4 || a.ra) {
        return
      }
    }
  }
  d || Mf(a);
  if(!(a.i == 4 || a.ra) && f) {
    ge(b.a, b.s() + "'s peer caused rwin overflow."), b.f()
  }
}
o.start = function() {
  this.i != 1 && e(Error("ClientStream.start: " + H(this) + " already started"));
  this.i = 2;
  if(this.R instanceof Gf) {
    var a = rf(this.R.Gb, this), b = rf(this.R.Ib, this);
    wd(xf([a, b]), y(this.Gg, this))
  }else {
    dg(this)
  }
};
o.Gg = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Nc, f = a[1].Nc;
  this.xd.push(a[0]);
  this.xd.push(a[1]);
  this.R = new Hf(d, b, f, c);
  dg(this)
};
function dg(a) {
  a.i = 3;
  a.k = Pf(a, !0);
  Of(a.k, a.Ta, k);
  a.k.Ca()
}
o.c = function() {
  this.a.info(H(this) + " in disposeInternal.");
  this.i = 5;
  for(var a = this.zc.Y(), b = 0;b < a.length;b++) {
    a[b].f()
  }
  for(a = 0;a < this.xd.length;a++) {
    $a(this.xd[a].Je, this)
  }
  if(J && this.Cc) {
    fd(this.Cc), this.Cc = k
  }
  this.Qf && this.Qf();
  delete this.zc;
  delete this.k;
  delete this.C;
  delete this.qc;
  delete this.Uf;
  Kf.d.c.call(this)
};
var Bf = 1, Rf = 2, Sf = 3;
function Tf(a, b, c, d, f, g) {
  this.L = a;
  this.F = b;
  this.Ob = c;
  this.wa = d;
  this.R = f;
  this.G = [];
  this.qb = g;
  this.Tb = !this.xb();
  this.Hb = this.wa != Bf;
  this.ug = y(this.th, this)
}
C(Tf, L);
o = Tf.prototype;
o.a = R("cw.net.ClientTransport");
o.q = k;
o.Le = k;
o.kg = k;
o.jd = k;
o.Ha = !1;
o.sd = !1;
o.Bb = k;
o.Wd = 0;
o.Eb = -1;
o.ue = -1;
o.og = !1;
o.Ad = !1;
o.oc = 0;
o.fc = !1;
o.A = function(a) {
  a.push("<ClientTransport #", String(this.Ob), ", becomePrimary=", String(this.qb), ">")
};
o.s = function() {
  return(this.qb ? "Prim. T#" : "Sec. T#") + this.Ob
};
o.Ve = function() {
  return!(!this.fc && this.Wd)
};
o.xb = function() {
  return this.wa == Bf || this.wa == Rf
};
function eg(a, b) {
  fb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Zf(a.F, a, b, !a.Hb)
}
function fg(a, b, c) {
  try {
    var d = Le(b);
    a.Wd += 1;
    P(a.a, a.s() + " RECV " + H(d));
    var f;
    a.Wd == 1 && !d.n(If) && a.xb() ? (O(a.a, a.s() + " is closing soon because got bad preamble: " + H(d)), f = !0) : f = !1;
    if(f) {
      return!0
    }
    if(d instanceof Be) {
      if(!/^([ -~]*)$/.test(d.Nb)) {
        return a.fc = !0
      }
      a.ue += 1;
      c.push([a.ue, d.Nb])
    }else {
      if(d instanceof Ae) {
        var g = a.F, h = d.oa;
        g.Cf = h;
        var j = g.Ta, m = h.ob, c = !1;
        m > j.tb && (c = !0);
        for(var p = Wb(j).concat(), d = 0;d < p.length;d++) {
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
          return O(a.a, a.s() + " is closing soon because got bad SackFrame"), a.fc = !0
        }
      }else {
        if(d instanceof De) {
          a.ue = d.vc - 1
        }else {
          if(d instanceof Fe) {
            a.F.Df = d.kc
          }else {
            if(d instanceof He) {
              return Q(a.a, a.s() + " is closing soon because got YouCloseItFrame"), !0
            }else {
              if(d instanceof Ke) {
                return a.fc = !0, d.reason == "stream_attach_failure" ? a.oc += 1 : d.reason == "acked_unsent_strings" && (a.oc += 0.5), Q(a.a, a.s() + " is closing soon because got " + H(d)), !0
              }else {
                if(!(d instanceof Ce)) {
                  if(d instanceof Ge) {
                    var A = a.F, lj = !a.Hb;
                    Q(A.a, "Stream is now confirmed to exist at server.");
                    A.Ge = !0;
                    if(A.we && !lj) {
                      A.we = !1, Mf(A)
                    }
                  }else {
                    if(c.length && (eg(a, c), Za(c)), d instanceof Ie) {
                      var mj = a.F;
                      Xf(d.pc, d.Rb);
                      mj.f();
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
  }catch(Zg) {
    return Zg instanceof S || e(Zg), O(a.a, a.s() + " is closing soon because got InvalidFrame: " + H(b)), a.fc = !0
  }
  return!1
}
function oe(a, b) {
  a.sd = !0;
  try {
    for(var c = !1, d = [], f = 0, g = b.length;f < g;f++) {
      if(a.ra) {
        a.a.info(a.s() + " returning from loop because we're disposed.");
        return
      }
      if(c = fg(a, b[f], d)) {
        break
      }
    }
    d.length && eg(a, d);
    a.sd = !1;
    a.G.length && a.Ca();
    c && (Q(a.a, a.s() + " closeSoon is true.  Frames were: " + H(b)), a.f())
  }finally {
    a.sd = !1
  }
}
o.th = function() {
  O(this.a, this.s() + " timed out due to lack of connection or no data being received.");
  this.f()
};
function gg(a) {
  if(a.jd != k) {
    a.L.N.clearTimeout(a.jd), a.jd = k
  }
}
function Cf(a, b) {
  gg(a);
  b = Math.round(b);
  a.jd = a.L.N.setTimeout(a.ug, b);
  P(a.a, a.s() + "'s receive timeout set to " + b + " ms.")
}
function ne(a) {
  a.wa != Bf && (a.wa == Sf || a.wa == Rf ? Cf(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.wa)))
}
function Nf(a) {
  var b = new ye;
  b.Ob = a.Ob;
  b.Tf = 2;
  b.vf = 2;
  if(!a.F.Ge) {
    b.Xf = !0
  }
  b.xc = a.F.xc;
  b.Ie = a.Hb;
  if(b.Ie) {
    b.Mf = 4096
  }
  b.If = 3E5;
  b.Gf = a.Hb ? Math.floor(10) : 0;
  b.lg = !1;
  if(a.qb) {
    b.fg = k, b.ne = Math.floor((a.Hb ? 358E4 : 25E3) / 1E3)
  }
  b.oa = Yb(a.F.fe);
  b.dd = a.F.Cf;
  a.G.push(b);
  a.Bb = b.oa
}
function pe(a, b) {
  b && (a.oc += 0.5);
  a.f()
}
o.Ca = function() {
  this.Ha && !this.Tb && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.sd) {
    Q(this.a, this.s() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ha;
    this.Ha = !0;
    !a && !this.G.length && Nf(this);
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
      this.q = Df.Kd(this, this.qb ? this.R.Sf : this.R.cg);
      this.Le = this.L.N === nd ? B() : this.L.N.getTime();
      this.q.me(b, "POST", a);
      Cf(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.Hb ? 0 : this.qb ? 25E3 : 0))
    }else {
      if(this.wa == Sf) {
        a = [];
        b = 0;
        for(c = this.G.length;b < c;b++) {
          a.push(this.G[b].ea())
        }
        this.G = [];
        this.q ? this.q.Dc(a) : (b = this.R, this.q = new re(this), this.q.rd = b.vh.Kd(this.q), this.Le = this.L.N === nd ? B() : this.L.N.getTime(), this.q.Id(b.host, b.port), this.q.ra || (this.q.Dc(a), this.q.ra || Cf(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.wa))
      }
    }
  }
};
function Of(a, b, c) {
  !a.Ha && !a.G.length && Nf(a);
  for(var d = Math.max(c, a.Eb + 1), f = Wb(b), c = [], g = 0;g < f.length;g++) {
    var h = f[g];
    (d == k || h >= d) && c.push([h, b.z.p[h][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], f = g[0], g = g[1], (a.Eb == -1 || a.Eb + 1 != f) && a.G.push(new De(f)), a.G.push(new Be(g)), a.Eb = f
  }
}
o.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  Tf.d.c.call(this);
  this.kg = this.L.N === nd ? B() : this.L.N.getTime();
  this.G = [];
  gg(this);
  this.q && this.q.f();
  var a = this.F;
  this.F = k;
  Wf(a, this)
};
function Yf(a, b) {
  !a.Ha && !a.G.length && Nf(a);
  a.G.push(new Ie(b, !0));
  a.og = !0
}
function Vf(a, b, c, d) {
  this.L = a;
  this.F = b;
  this.df = c;
  this.Ye = d
}
C(Vf, L);
o = Vf.prototype;
o.Ha = !1;
o.Tb = !1;
o.Uc = k;
o.Bb = k;
o.a = R("cw.net.DoNothingTransport");
function hg(a) {
  a.Uc = a.L.N.setTimeout(function() {
    a.Uc = k;
    a.Ye--;
    a.Ye ? hg(a) : a.f()
  }, a.df)
}
o.Ca = function() {
  this.Ha && !this.Tb && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ha = !0;
  hg(this)
};
o.A = function(a) {
  a.push("<DoNothingTransport delay=", String(this.df), ">")
};
o.xb = n(!1);
o.s = n("Wast. T");
o.Ve = n(!1);
o.c = function() {
  this.a.info(this.s() + " in disposeInternal.");
  Vf.d.c.call(this);
  this.Uc != k && this.L.N.clearTimeout(this.Uc);
  var a = this.F;
  this.F = k;
  Wf(a, this)
};
function ig(a, b, c) {
  a.style[Fa(c)] = b
}
function jg(a, b) {
  var c = We(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function kg(a, b, c) {
  b instanceof T ? (c = b.height, b = b.width) : c == i && e(Error("missing height argument"));
  a.style.width = lg(b);
  a.style.height = lg(c)
}
function lg(a) {
  typeof a == "number" && (a = Math.round(a) + "px");
  return a
}
function mg(a) {
  if((jg(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style.display) != "none") {
    return ng(a)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = ng(a);
  b.display = c;
  b.position = f;
  b.visibility = d;
  return a
}
function ng(a) {
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
function og(a) {
  I ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[J ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var pg = jc ? "MozUserSelect" : J ? "WebkitUserSelect" : k;
function qg(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(pg) {
    if(b = b ? "none" : "", a.style[pg] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[pg] = b
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
;function rg(a) {
  this.cb = a;
  this.l = []
}
C(rg, L);
var sg = [];
function V(a, b, c, d) {
  t(c) || (sg[0] = c, c = sg);
  for(var f = 0;f < c.length;f++) {
    a.l.push(N(b, c[f], d || a, !1, a.cb || a))
  }
  return a
}
function tg(a, b, c, d, f, g) {
  if(t(c)) {
    for(var h = 0;h < c.length;h++) {
      tg(a, b, c[h], d, f, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.cb || a;
      f = !!f;
      if(b = ed(b, c, f)) {
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
      b = b.key, fd(b), $a(a.l, b)
    }
  }
  return a
}
rg.prototype.ve = function() {
  F(this.l, fd);
  this.l.length = 0
};
rg.prototype.c = function() {
  rg.d.c.call(this);
  this.ve()
};
rg.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function ug() {
}
da(ug);
ug.prototype.bh = 0;
ug.Na();
function vg(a) {
  this.Q = a || Ue();
  this.tc = wg
}
C(vg, ld);
vg.prototype.Tg = ug.Na();
var wg = k;
function xg(a, b) {
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
o = vg.prototype;
o.T = k;
o.t = !1;
o.e = k;
o.tc = k;
o.ah = k;
o.B = k;
o.P = k;
o.Vb = k;
o.xh = !1;
function yg(a) {
  return a.T || (a.T = ":" + (a.Tg.bh++).toString(36))
}
o.b = l("e");
function zg(a) {
  return a.vb || (a.vb = new rg(a))
}
o.getParent = l("B");
o.Ae = function(a) {
  this.B && this.B != a && e(Error("Method not supported"));
  vg.d.Ae.call(this, a)
};
o.Da = l("Q");
o.h = function() {
  this.e = this.Q.createElement("div")
};
function Ag(a, b) {
  a.t && e(Error("Component already rendered"));
  a.e || a.h();
  b ? b.insertBefore(a.e, k) : a.Q.r.body.appendChild(a.e);
  (!a.B || a.B.t) && a.S()
}
o.S = function() {
  this.t = !0;
  Bg(this, function(a) {
    !a.t && a.b() && a.S()
  })
};
o.$a = function() {
  Bg(this, function(a) {
    a.t && a.$a()
  });
  this.vb && this.vb.ve();
  this.t = !1
};
o.c = function() {
  vg.d.c.call(this);
  this.t && this.$a();
  this.vb && (this.vb.f(), delete this.vb);
  Bg(this, function(a) {
    a.f()
  });
  !this.xh && this.e && ff(this.e);
  this.B = this.ah = this.e = this.Vb = this.P = k
};
o.cc = l("e");
o.Lb = function(a) {
  this.t && e(Error("Component already rendered"));
  this.tc = a
};
function Bg(a, b) {
  a.P && F(a.P, b, i)
}
o.removeChild = function(a, b) {
  if(a) {
    var c = u(a) ? a : yg(a), a = this.Vb && c ? (c in this.Vb ? this.Vb[c] : i) || k : k;
    if(c && a) {
      var d = this.Vb;
      c in d && delete d[c];
      $a(this.P, a);
      b && (a.$a(), a.e && ff(a.e));
      c = a;
      c == k && e(Error("Unable to set parent component"));
      c.B = k;
      vg.d.Ae.call(c, k)
    }
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function Cg(a, b) {
  a.setAttribute("role", b);
  a.Vi = b
}
;function Dg() {
}
var Eg;
da(Dg);
o = Dg.prototype;
o.Pc = function() {
};
o.h = function(a) {
  return a.Da().h("div", Fg(this, a).join(" "), a.da)
};
o.cc = function(a) {
  return a
};
o.Zb = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(I && !K("7")) {
      var d = Gg(Pe(a), b);
      d.push(b);
      oa(c ? Qe : Re, a).apply(k, d)
    }else {
      c ? Qe(a, b) : Re(a, b)
    }
  }
};
o.xf = function(a) {
  if(a.tc == k) {
    a.tc = "rtl" == (jg(a.t ? a.e : a.Q.r.body, "direction") || ((a.t ? a.e : a.Q.r.body).currentStyle ? (a.t ? a.e : a.Q.r.body).currentStyle.direction : k) || (a.t ? a.e : a.Q.r.body).style.direction)
  }
  a.tc && this.Lb(a.b(), !0);
  a.isEnabled() && this.nd(a, a.Pb)
};
o.kd = function(a, b) {
  qg(a, !b, !I && !ic)
};
o.Lb = function(a, b) {
  this.Zb(a, this.v() + "-rtl", b)
};
o.zf = function(a) {
  var b;
  return a.va & 32 && (b = a.bb()) ? lf(b) : !1
};
o.nd = function(a, b) {
  var c;
  if(a.va & 32 && (c = a.bb())) {
    if(!b && a.i & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.i & 32 && a.pf()
    }
    if(lf(c) != b) {
      b ? c.tabIndex = 0 : c.removeAttribute("tabIndex")
    }
  }
};
o.Ee = function(a, b) {
  a.style.display = b ? "" : "none"
};
o.ja = function(a, b, c) {
  var d = a.b();
  if(d) {
    var f = Hg(this, b);
    f && this.Zb(a, f, c);
    this.Ac(d, b, c)
  }
};
o.Ac = function(a, b, c) {
  Eg || (Eg = {1:"disabled", 4:"pressed", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Eg[b]) && a.setAttribute("aria-" + b, c)
};
o.ld = function(a, b) {
  var c = this.cc(a);
  if(c && (ef(c), b)) {
    if(u(b)) {
      hf(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = We(c);
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
o.v = n("goog-control");
function Fg(a, b) {
  var c = a.v(), d = [c], f = a.v();
  f != c && d.push(f);
  c = b.i;
  for(f = [];c;) {
    var g = c & -c;
    f.push(Hg(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.sa) && d.push.apply(d, c);
  I && !K("7") && d.push.apply(d, Gg(d));
  return d
}
function Gg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  F([], function(d) {
    Xa(d, oa(Ya, a)) && (!b || Ya(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Hg(a, b) {
  if(!a.Ue) {
    var c = a.v();
    a.Ue = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Ue[b]
}
;function Ig(a, b) {
  a || e(Error("Invalid class name " + a));
  w(b) || e(Error("Invalid decorator function " + b))
}
var Jg = {};
function Kg(a, b, c, d, f) {
  if(!I && (!J || !K("525"))) {
    return!0
  }
  if(mc && f) {
    return Lg(a)
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
  return Lg(a)
}
function Lg(a) {
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
;function Mg(a, b) {
  a && Ng(this, a, b)
}
C(Mg, ld);
o = Mg.prototype;
o.e = k;
o.bd = k;
o.he = k;
o.cd = k;
o.Ra = -1;
o.Qa = -1;
var Og = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Pg = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Qg = {61:187, 
59:186}, Rg = I || J && K("525");
o = Mg.prototype;
o.Pg = function(a) {
  if(J && (this.Ra == 17 && !a.ctrlKey || this.Ra == 18 && !a.altKey)) {
    this.Qa = this.Ra = -1
  }
  Rg && !Kg(a.keyCode, this.Ra, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Qa = jc && a.keyCode in Qg ? Qg[a.keyCode] : a.keyCode
};
o.Qg = function() {
  this.Qa = this.Ra = -1
};
o.handleEvent = function(a) {
  var b = a.Ba, c, d;
  I && a.type == "keypress" ? (c = this.Qa, d = c != 13 && c != 27 ? b.keyCode : 0) : J && a.type == "keypress" ? (c = this.Qa, d = b.charCode >= 0 && b.charCode < 63232 && Lg(c) ? b.charCode : 0) : ic ? (c = this.Qa, d = Lg(c) ? b.keyCode : 0) : (c = b.keyCode || this.Qa, d = b.charCode || 0, mc && d == 63 && !c && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in Og ? f = Og[c] : c == 25 && a.shiftKey && (f = 9) : g && g in Pg && (f = Pg[g]);
  a = f == this.Ra;
  this.Ra = f;
  b = new Sg(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.f()
  }
};
o.b = l("e");
function Ng(a, b, c) {
  a.cd && a.detach();
  a.e = b;
  a.bd = N(a.e, "keypress", a, c);
  a.he = N(a.e, "keydown", a.Pg, c, a);
  a.cd = N(a.e, "keyup", a.Qg, c, a)
}
o.detach = function() {
  if(this.bd) {
    fd(this.bd), fd(this.he), fd(this.cd), this.cd = this.he = this.bd = k
  }
  this.e = k;
  this.Qa = this.Ra = -1
};
o.c = function() {
  Mg.d.c.call(this);
  this.detach()
};
function Sg(a, b, c, d) {
  d && this.hc(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(Sg, Fc);
function W(a, b, c) {
  vg.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = x(b);
      if(d = Jg[d]) {
        break
      }
      b = b.d ? b.d.constructor : k
    }
    b = d ? w(d.Na) ? d.Na() : new d : k
  }
  this.m = b;
  this.md(a)
}
C(W, vg);
o = W.prototype;
o.da = k;
o.i = 0;
o.va = 39;
o.Re = 255;
o.qh = 0;
o.Pb = !0;
o.sa = k;
o.be = !0;
o.Cd = !1;
o.bb = function() {
  return this.m.bb(this)
};
function Tg(a, b) {
  if(b) {
    a.sa ? Ya(a.sa, b) || a.sa.push(b) : a.sa = [b], a.m.Zb(a, b, !0)
  }
}
o.Zb = function(a, b) {
  if(b) {
    Tg(this, a)
  }else {
    if(a && this.sa) {
      $a(this.sa, a);
      if(this.sa.length == 0) {
        this.sa = k
      }
      this.m.Zb(this, a, !1)
    }
  }
};
o.h = function() {
  var a = this.m.h(this);
  this.e = a;
  var b = this.m.Pc();
  b && Cg(a, b);
  this.Cd || this.m.kd(a, !1);
  this.Pb || this.m.Ee(a, !1)
};
o.cc = function() {
  return this.m.cc(this.b())
};
o.S = function() {
  W.d.S.call(this);
  this.m.xf(this);
  if(this.va & -2 && (this.be && Ug(this, !0), this.va & 32)) {
    var a = this.bb();
    if(a) {
      var b = this.zb || (this.zb = new Mg);
      Ng(b, a);
      V(V(V(zg(this), b, "key", this.sf), a, "focus", this.Ng), a, "blur", this.pf)
    }
  }
};
function Ug(a, b) {
  var c = zg(a), d = a.b();
  b ? (V(V(V(V(c, d, "mouseover", a.Xc), d, "mousedown", a.Vc), d, "mouseup", a.tf), d, "mouseout", a.Wc), I && V(c, d, "dblclick", a.rf)) : (tg(tg(tg(tg(c, d, "mouseover", a.Xc), d, "mousedown", a.Vc), d, "mouseup", a.tf), d, "mouseout", a.Wc), I && tg(c, d, "dblclick", a.rf))
}
o.$a = function() {
  W.d.$a.call(this);
  this.zb && this.zb.detach();
  this.Pb && this.isEnabled() && this.m.nd(this, !1)
};
o.c = function() {
  W.d.c.call(this);
  this.zb && (this.zb.f(), delete this.zb);
  delete this.m;
  this.sa = this.da = k
};
o.ld = function(a) {
  this.m.ld(this.b(), a);
  this.md(a)
};
o.md = aa("da");
o.lf = function() {
  var a = this.da;
  if(!a) {
    return""
  }
  if(!u(a)) {
    if(t(a)) {
      a = Va(a, mf).join("")
    }else {
      if(Te && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        nf(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Te || (a = a.replace(/ +/g, " "));
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
o.kd = function(a) {
  this.Cd = a;
  var b = this.b();
  b && this.m.kd(b, a)
};
o.Ee = function(a, b) {
  if(b || this.Pb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.m.Ee(c, a);
    this.isEnabled() && this.m.nd(this, a);
    this.Pb = a;
    return!0
  }
  return!1
};
o.isEnabled = function() {
  return!(this.i & 1)
};
function Vg(a, b) {
  Wg(a, 2, b) && a.ja(2, b)
}
o.ge = function() {
  return!!(this.i & 4)
};
o.setActive = function(a) {
  Wg(this, 4, a) && this.ja(4, a)
};
o.Be = function(a) {
  Wg(this, 8, a) && this.ja(8, a)
};
o.ja = function(a, b) {
  if(this.va & a && b != !!(this.i & a)) {
    this.m.ja(this, a, b), this.i = b ? this.i | a : this.i & ~a
  }
};
function X(a, b) {
  return!!(a.Re & b) && !!(a.va & b)
}
function Wg(a, b, c) {
  return!!(a.va & b) && !!(a.i & b) != c && (!(a.qh & b) || a.dispatchEvent(xg(b, c))) && !a.ra
}
o.Xc = function(a) {
  !Xg(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && Vg(this, !0)
};
o.Wc = function(a) {
  !Xg(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(!1), X(this, 2) && Vg(this, !1))
};
function Xg(a, b) {
  return!!a.relatedTarget && gf(b, a.relatedTarget)
}
o.Vc = function(a) {
  if(this.isEnabled() && (X(this, 2) && Vg(this, !0), Hc(a) && (!J || !mc || !a.ctrlKey))) {
    X(this, 4) && this.setActive(!0), this.m.zf(this) && this.bb().focus()
  }
  !this.Cd && Hc(a) && (!J || !mc || !a.ctrlKey) && a.preventDefault()
};
o.tf = function(a) {
  this.isEnabled() && (X(this, 2) && Vg(this, !0), this.ge() && this.hb(a) && X(this, 4) && this.setActive(!1))
};
o.rf = function(a) {
  this.isEnabled() && this.hb(a)
};
o.hb = function(a) {
  if(X(this, 16)) {
    var b = !(this.i & 16);
    Wg(this, 16, b) && this.ja(16, b)
  }
  X(this, 8) && this.Be(!0);
  X(this, 64) && (b = !(this.i & 64), Wg(this, 64, b) && this.ja(64, b));
  b = new Cc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, f = 0;d = c[f];f++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
o.Ng = function() {
  X(this, 32) && Wg(this, 32, !0) && this.ja(32, !0)
};
o.pf = function() {
  X(this, 4) && this.setActive(!1);
  X(this, 32) && Wg(this, 32, !1) && this.ja(32, !1)
};
o.sf = function(a) {
  return this.Pb && this.isEnabled() && this.ae(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
o.ae = function(a) {
  return a.keyCode == 13 && this.hb(a)
};
w(W) || e(Error("Invalid component class " + W));
w(Dg) || e(Error("Invalid renderer class " + Dg));
var Yg = x(W);
Jg[Yg] = Dg;
Ig("goog-control", function() {
  return new W(k)
});
function $g() {
}
C($g, Dg);
da($g);
o = $g.prototype;
o.Pc = n("button");
o.Ac = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : $g.d.Ac.call(this, a, b, c)
};
o.h = function(a) {
  var b = $g.d.h.call(this, a), c = a.Sc();
  c && this.De(b, c);
  (c = a.Tc()) && this.qd(b, c);
  a.va & 16 && this.Ac(b, 16, !1);
  return b
};
o.Tc = s;
o.qd = s;
o.Sc = function(a) {
  return a.title
};
o.De = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
o.v = n("goog-button");
function ah() {
}
C(ah, $g);
da(ah);
o = ah.prototype;
o.Pc = function() {
};
o.h = function(a) {
  a.t && !1 != a.be && Ug(a, !1);
  a.be = !1;
  a.Re &= -256;
  a.t && a.i & 32 && e(Error("Component already rendered"));
  a.i & 32 && a.ja(32, !1);
  a.va &= -33;
  return a.Da().h("button", {"class":Fg(this, a).join(" "), disabled:!a.isEnabled(), title:a.Sc() || "", value:a.Tc() || ""}, a.lf() || "")
};
o.xf = function(a) {
  V(zg(a), a.b(), "click", a.hb)
};
o.kd = s;
o.Lb = s;
o.zf = function(a) {
  return a.isEnabled()
};
o.nd = s;
o.ja = function(a, b, c) {
  ah.d.ja.call(this, a, b, c);
  if((a = a.b()) && b == 1) {
    a.disabled = c
  }
};
o.Tc = function(a) {
  return a.value
};
o.qd = function(a, b) {
  if(a) {
    a.value = b
  }
};
o.Ac = s;
function bh(a, b, c) {
  W.call(this, a, b || ah.Na(), c)
}
C(bh, W);
o = bh.prototype;
o.Tc = l("mg");
o.qd = function(a) {
  this.mg = a;
  this.m.qd(this.b(), a)
};
o.Sc = l("hg");
o.De = function(a) {
  this.hg = a;
  this.m.De(this.b(), a)
};
o.c = function() {
  bh.d.c.call(this);
  delete this.mg;
  delete this.hg
};
o.S = function() {
  bh.d.S.call(this);
  if(this.va & 32) {
    var a = this.bb();
    a && V(zg(this), a, "keyup", this.ae)
  }
};
o.ae = function(a) {
  return a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup" ? this.hb(a) : a.keyCode == 32
};
Ig("goog-button", function() {
  return new bh(k)
});
function ch() {
}
C(ch, $g);
da(ch);
ch.prototype.h = function(a) {
  var b = {"class":"goog-inline-block " + Fg(this, a).join(" "), title:a.Sc() || ""};
  return a.Da().h("div", b, dh(this, a.da, a.Da()))
};
ch.prototype.Pc = n("button");
ch.prototype.cc = function(a) {
  return a && a.firstChild.firstChild
};
function dh(a, b, c) {
  return c.h("div", "goog-inline-block " + (a.v() + "-outer-box"), c.h("div", "goog-inline-block " + (a.v() + "-inner-box"), b))
}
ch.prototype.v = n("goog-custom-button");
function eh(a, b, c) {
  bh.call(this, a, b || ch.Na(), c)
}
C(eh, bh);
Ig("goog-custom-button", function() {
  return new eh(k)
});
var fh = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function gh(a) {
  var b = {}, a = String(a), c = a.charAt(0) == "#" ? a : "#" + a;
  if(hh.test(c)) {
    return b.Zc = ih(c), b.type = "hex", b
  }else {
    a: {
      var d = a.match(jh);
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
      return b.Zc = kh(c[0], c[1], c[2]), b.type = "rgb", b
    }else {
      if(fh && (c = fh[a.toLowerCase()])) {
        return b.Zc = c, b.type = "named", b
      }
    }
  }
  e(Error(a + " is not a valid color string"))
}
var lh = /#(.)(.)(.)/;
function ih(a) {
  hh.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  a.length == 4 && (a = a.replace(lh, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function mh(a) {
  a = ih(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function kh(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || a < 0 || a > 255 || isNaN(b) || b < 0 || b > 255 || isNaN(c) || c < 0 || c > 255) && e(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = nh(a.toString(16));
  b = nh(b.toString(16));
  c = nh(c.toString(16));
  return"#" + a + b + c
}
var hh = /^#(?:[0-9a-f]{3}){1,2}$/i, jh = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function nh(a) {
  return a.length == 1 ? "0" + a : a
}
;function oh(a, b) {
  var c;
  a instanceof oh ? (this.Jb(b == k ? a.ua : b), ph(this, a.Ga), qh(this, a.Bc), rh(this, a.Ka), sh(this, a.Fb), this.Kb(a.O), th(this, a.ia.J()), uh(this, a.bc)) : a && (c = String(a).match(Me)) ? (this.Jb(!!b), ph(this, c[1] || "", !0), qh(this, c[2] || "", !0), rh(this, c[3] || "", !0), sh(this, c[4]), this.Kb(c[5] || "", !0), th(this, c[6] || "", !0), uh(this, c[7] || "", !0)) : (this.Jb(!!b), this.ia = new vh(k, this, this.ua))
}
o = oh.prototype;
o.Ga = "";
o.Bc = "";
o.Ka = "";
o.Fb = k;
o.O = "";
o.bc = "";
o.Vg = !1;
o.ua = !1;
o.toString = function() {
  if(this.qa) {
    return this.qa
  }
  var a = [];
  this.Ga && a.push(wh(this.Ga, xh), ":");
  this.Ka && (a.push("//"), this.Bc && a.push(wh(this.Bc, xh), "@"), a.push(u(this.Ka) ? encodeURIComponent(this.Ka) : k), this.Fb != k && a.push(":", String(this.Fb)));
  this.O && (this.Ka && this.O.charAt(0) != "/" && a.push("/"), a.push(wh(this.O, this.O.charAt(0) == "/" ? yh : zh)));
  var b = String(this.ia);
  b && a.push("?", b);
  this.bc && a.push("#", wh(this.bc, Ah));
  return this.qa = a.join("")
};
o.J = function() {
  var a = this.Ga, b = this.Bc, c = this.Ka, d = this.Fb, f = this.O, g = this.ia.J(), h = this.bc, j = new oh(k, this.ua);
  a && ph(j, a);
  b && qh(j, b);
  c && rh(j, c);
  d && sh(j, d);
  f && j.Kb(f);
  g && th(j, g);
  h && uh(j, h);
  return j
};
function ph(a, b, c) {
  Bh(a);
  delete a.qa;
  a.Ga = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.Ga) {
    a.Ga = a.Ga.replace(/:$/, "")
  }
}
function qh(a, b, c) {
  Bh(a);
  delete a.qa;
  a.Bc = c ? b ? decodeURIComponent(b) : "" : b
}
function rh(a, b, c) {
  Bh(a);
  delete a.qa;
  a.Ka = c ? b ? decodeURIComponent(b) : "" : b
}
function sh(a, b) {
  Bh(a);
  delete a.qa;
  b ? (b = Number(b), (isNaN(b) || b < 0) && e(Error("Bad port number " + b)), a.Fb = b) : a.Fb = k
}
o.Kb = function(a, b) {
  Bh(this);
  delete this.qa;
  this.O = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function th(a, b, c) {
  Bh(a);
  delete a.qa;
  b instanceof vh ? (a.ia = b, a.ia.Ne = a, a.ia.Jb(a.ua)) : (c || (b = wh(b, Ch)), a.ia = new vh(b, a, a.ua))
}
function uh(a, b, c) {
  Bh(a);
  delete a.qa;
  a.bc = c ? b ? decodeURIComponent(b) : "" : b
}
function Bh(a) {
  a.Vg && e(Error("Tried to modify a read-only Uri"))
}
o.Jb = function(a) {
  this.ua = a;
  this.ia && this.ia.Jb(a);
  return this
};
var Dh = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function wh(a, b) {
  var c = k;
  u(a) && (c = a, Dh.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, Eh)));
  return c
}
function Eh(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var xh = /[#\/\?@]/g, zh = /[\#\?:]/g, yh = /[\#\?]/g, Ch = /[\#\?@]/g, Ah = /#/g;
function vh(a, b, c) {
  this.Aa = a || k;
  this.Ne = b || k;
  this.ua = !!c
}
function Fh(a) {
  if(!a.o && (a.o = new Ob, a.g = 0, a.Aa)) {
    for(var b = a.Aa.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      d >= 0 ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = Gh(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
o = vh.prototype;
o.o = k;
o.g = k;
o.W = function() {
  Fh(this);
  return this.g
};
o.add = function(a, b) {
  Fh(this);
  Hh(this);
  a = Gh(this, a);
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
  Fh(this);
  a = Gh(this, a);
  if(this.o.ca(a)) {
    Hh(this);
    var b = this.o.get(a);
    t(b) ? this.g -= b.length : this.g--;
    return this.o.remove(a)
  }
  return!1
};
o.clear = function() {
  Hh(this);
  this.o && this.o.clear();
  this.g = 0
};
o.Pa = function() {
  Fh(this);
  return this.g == 0
};
o.ca = function(a) {
  Fh(this);
  a = Gh(this, a);
  return this.o.ca(a)
};
o.Ic = function(a) {
  var b = this.Y();
  return Ya(b, a)
};
o.Ea = function() {
  Fh(this);
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
  Fh(this);
  if(a) {
    if(a = Gh(this, a), this.ca(a)) {
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
  Fh(this);
  Hh(this);
  a = Gh(this, a);
  if(this.ca(a)) {
    var c = this.o.get(a);
    t(c) ? this.g -= c.length : this.g--
  }
  this.o.set(a, b);
  this.g++;
  return this
};
o.get = function(a, b) {
  Fh(this);
  a = Gh(this, a);
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
function Hh(a) {
  delete a.Md;
  delete a.Aa;
  a.Ne && delete a.Ne.qa
}
o.J = function() {
  var a = new vh;
  if(this.Md) {
    a.Md = this.Md
  }
  if(this.Aa) {
    a.Aa = this.Aa
  }
  if(this.o) {
    a.o = this.o.J()
  }
  return a
};
function Gh(a, b) {
  var c = String(b);
  a.ua && (c = c.toLowerCase());
  return c
}
o.Jb = function(a) {
  a && !this.ua && (Fh(this), Hh(this), Mb(this.o, function(a, c) {
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
var Ih;
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
  Ih = c
})();
function Jh(a, b) {
  vg.call(this, b);
  this.Ig = a;
  this.Rd = new rg(this);
  this.Oc = new Ob
}
C(Jh, vg);
o = Jh.prototype;
o.a = R("goog.ui.media.FlashObject");
o.zh = "window";
o.Se = "#000000";
o.sg = "sameDomain";
o.ba = function(a, b) {
  this.nb = u(a) ? a : Math.round(a) + "px";
  this.ce = u(b) ? b : Math.round(b) + "px";
  this.b() && kg(this.b() ? this.b().firstChild : k, this.nb, this.ce);
  return this
};
o.S = function() {
  Jh.d.S.call(this);
  var a = this.b(), b;
  b = I ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = I ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = qa(c, this.zh), d = this.Oc.Ea(), f = this.Oc.Y(), g = [], h = 0;h < d.length;h++) {
    var j = sa(d[h]), m = sa(f[h]);
    g.push(j + "=" + m)
  }
  b = qa(b, yg(this), yg(this), "goog-ui-media-flash-object", ua(this.Ig), ua(g.join("&")), this.Se, this.sg, c);
  a.innerHTML = b;
  this.nb && this.ce && this.ba(this.nb, this.ce);
  V(this.Rd, this.b(), Qa(yc), Dc)
};
o.h = function() {
  this.Yf != k && !(Ba(Ih, this.Yf) >= 0) && (O(this.a, "Required flash version not found:" + this.Yf), e(Error("Method not supported")));
  var a = this.Da().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
o.c = function() {
  Jh.d.c.call(this);
  this.Oc = k;
  this.Rd.f();
  this.Rd = k
};
function Kh(a) {
  D.call(this, a)
}
C(Kh, D);
Kh.prototype.name = "cw.loadflash.FlashLoadFailed";
q.__loadFlashObject_callbacks = {};
function Lh(a, b, c) {
  function d() {
    f && delete q.__loadFlashObject_callbacks[f]
  }
  var f;
  if(jc && !K("1.8.1.20")) {
    return Bd(new Kh("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(Ba(Ih, "9") >= 0)) {
    return b = Ih, Bd(new Kh("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  f = "_" + Gd();
  var h = new pd(d);
  q.__loadFlashObject_callbacks[f] = function() {
    a.setTimeout(function() {
      d();
      vd(h, U(g))
    }, 0)
  };
  b.Oc.set("onloadcallback", '__loadFlashObject_callbacks["' + f + '"]()');
  g = yg(b);
  Ag(b, c);
  return h
}
function Mh(a, b, c) {
  var d = Lh(a, b, c), f = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  yd(d, function(b) {
    a.clearTimeout(f);
    return b
  });
  return d
}
;function Nh() {
  if(jc) {
    this.Ya = {}, this.zd = {}, this.td = []
  }
}
Nh.prototype.a = R("goog.net.xhrMonitor");
Nh.prototype.Lc = jc;
function Oh(a) {
  var b = Ph;
  if(b.Lc) {
    var c = u(a) ? a : ia(a) ? x(a) : "";
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
    a = x(a);
    P(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.td.length;c++) {
      var d = b.td[c];
      Th(b.Ya, d, a);
      Th(b.zd, a, d)
    }
  }
}
function Rh(a, b) {
  var c = a.zd[b], d = a.Ya[b];
  c && d && (Q(a.a, "Updating dependent contexts"), F(c, function(a) {
    F(d, function(b) {
      Th(this.Ya, a, b);
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
Uh.prototype.Ec = k;
function Vh() {
  return Wh(Xh)
}
var Xh;
function Yh() {
}
C(Yh, Uh);
function Wh(a) {
  return(a = Zh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function $h(a) {
  var b = {};
  Zh(a) && (b[0] = !0, b[1] = !0);
  return b
}
Yh.prototype.de = k;
function Zh(a) {
  if(!a.de && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.de = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.de
}
Xh = new Yh;
function ai(a) {
  this.headers = new Ob;
  this.Qb = a || k
}
C(ai, ld);
ai.prototype.a = R("goog.net.XhrIo");
var bi = /^https?:?$/i;
o = ai.prototype;
o.Ia = !1;
o.j = k;
o.yd = k;
o.lc = "";
o.Bf = "";
o.ic = 0;
o.jc = "";
o.Qd = !1;
o.$c = !1;
o.ee = !1;
o.fb = !1;
o.ud = 0;
o.mb = k;
o.Zf = "";
o.yh = !1;
o.send = function(a, b, c, d) {
  this.j && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.lc = a;
  this.jc = "";
  this.ic = 0;
  this.Bf = b;
  this.Qd = !1;
  this.Ia = !0;
  this.j = this.Qb ? Wh(this.Qb) : new Vh;
  this.yd = this.Qb ? this.Qb.Ec || (this.Qb.Ec = $h(this.Qb)) : Xh.Ec || (Xh.Ec = $h(Xh));
  Sh(this.j);
  this.j.onreadystatechange = y(this.Pf, this);
  try {
    P(this.a, ci(this, "Opening Xhr")), this.ee = !0, this.j.open(b, a, !0), this.ee = !1
  }catch(f) {
    P(this.a, ci(this, "Error opening Xhr: " + f.message));
    di(this, f);
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
  if(this.Zf) {
    this.j.responseType = this.Zf
  }
  if("withCredentials" in this.j) {
    this.j.withCredentials = this.yh
  }
  try {
    if(this.mb) {
      nd.clearTimeout(this.mb), this.mb = k
    }
    if(this.ud > 0) {
      P(this.a, ci(this, "Will abort after " + this.ud + "ms if incomplete")), this.mb = nd.setTimeout(y(this.uh, this), this.ud)
    }
    P(this.a, ci(this, "Sending request"));
    this.$c = !0;
    this.j.send(a);
    this.$c = !1
  }catch(h) {
    P(this.a, ci(this, "Send error: " + h.message)), di(this, h)
  }
};
o.dispatchEvent = function(a) {
  if(this.j) {
    Oh(this.j);
    try {
      return ai.d.dispatchEvent.call(this, a)
    }finally {
      Qh()
    }
  }else {
    return ai.d.dispatchEvent.call(this, a)
  }
};
o.uh = function() {
  if(typeof ba != "undefined" && this.j) {
    this.jc = "Timed out after " + this.ud + "ms, aborting", this.ic = 8, P(this.a, ci(this, this.jc)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function di(a, b) {
  a.Ia = !1;
  if(a.j) {
    a.fb = !0, a.j.abort(), a.fb = !1
  }
  a.jc = b;
  a.ic = 5;
  ei(a);
  fi(a)
}
function ei(a) {
  if(!a.Qd) {
    a.Qd = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
o.abort = function(a) {
  if(this.j && this.Ia) {
    P(this.a, ci(this, "Aborting")), this.Ia = !1, this.fb = !0, this.j.abort(), this.fb = !1, this.ic = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), fi(this)
  }
};
o.c = function() {
  if(this.j) {
    if(this.Ia) {
      this.Ia = !1, this.fb = !0, this.j.abort(), this.fb = !1
    }
    fi(this, !0)
  }
  ai.d.c.call(this)
};
o.Pf = function() {
  !this.ee && !this.$c && !this.fb ? this.dh() : gi(this)
};
o.dh = function() {
  gi(this)
};
function gi(a) {
  if(a.Ia && typeof ba != "undefined") {
    if(a.yd[1] && a.Oa() == 4 && hi(a) == 2) {
      P(a.a, ci(a, "Local request error detected and ignored"))
    }else {
      if(a.$c && a.Oa() == 4) {
        nd.setTimeout(y(a.Pf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.Oa() == 4) {
          P(a.a, ci(a, "Request complete"));
          a.Ia = !1;
          var b;
          a: {
            switch(hi(a)) {
              case 0:
                b = u(a.lc) ? a.lc.match(Me)[1] || k : a.lc.Ga;
                b = !(b ? bi.test(b) : self.location ? bi.test(self.location.protocol) : 1);
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
              P(a.a, "Can not get status: " + d.message), c = ""
            }
            a.jc = c + " [" + hi(a) + "]";
            ei(a)
          }
          fi(a)
        }
      }
    }
  }
}
function fi(a, b) {
  if(a.j) {
    var c = a.j, d = a.yd[0] ? s : k;
    a.j = k;
    a.yd = k;
    if(a.mb) {
      nd.clearTimeout(a.mb), a.mb = k
    }
    b || (Oh(c), a.dispatchEvent("ready"), Qh());
    var f = Ph;
    if(f.Lc) {
      var g = x(c);
      P(f.a, "Closing XHR : " + g);
      delete f.zd[g];
      for(var h in f.Ya) {
        $a(f.Ya[h], g), f.Ya[h].length == 0 && delete f.Ya[h]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(j) {
      ge(a.a, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
o.ge = function() {
  return!!this.j
};
o.Oa = function() {
  return this.j ? this.j.readyState : 0
};
function hi(a) {
  try {
    return a.Oa() > 2 ? a.j.status : -1
  }catch(b) {
    return O(a.a, "Can not get status: " + b.message), -1
  }
}
o.getResponseHeader = function(a) {
  return this.j && this.Oa() == 4 ? this.j.getResponseHeader(a) : i
};
function ci(a, b) {
  return b + " [" + a.Bf + " " + a.lc + " " + hi(a) + "]"
}
;var ii = !(I || J && !K("420+"));
function ji(a, b) {
  this.vd = a;
  this.na = b
}
C(ji, L);
o = ji.prototype;
o.q = k;
o.Ua = -1;
o.of = !1;
o.uf = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function ki(a) {
  var b = zf(a.af), c = b[0], b = b[1], d = q.parent;
  d ? (d.__XHRMaster_onframes(a.na, c, b), b != 1 && a.f()) : a.f()
}
o.Sg = function() {
  ki(this);
  if(!this.ra) {
    var a = q.parent;
    a && a.__XHRMaster_oncomplete(this.na);
    this.f()
  }
};
o.ih = function() {
  var a = q.parent;
  if(a) {
    this.Ua = this.q.Oa();
    if(this.Ua >= 2 && !this.of) {
      for(var b = new Ob, c = this.uf.length;c--;) {
        var d = this.uf[c];
        try {
          b.set(d, this.q.j.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.W() && (this.of = !0, a.__XHRMaster_ongotheaders(this.na, Sb(b)), this.ra)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.na, this.Ua);
    ii && this.Ua == 3 && ki(this)
  }else {
    this.f()
  }
};
o.me = function(a, b, c) {
  this.q = new ai;
  N(this.q, "readystatechange", y(this.ih, this));
  N(this.q, "complete", y(this.Sg, this));
  this.q.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.af = new yf(this.q.j, 1048576)
};
o.c = function() {
  ji.d.c.call(this);
  delete this.af;
  this.q && this.q.f();
  delete this.vd.wc[this.na];
  delete this.vd
};
function li() {
  this.wc = {}
}
C(li, L);
li.prototype.Yg = function(a, b, c, d) {
  var f = new ji(this, a);
  this.wc[a] = f;
  f.me(b, c, d)
};
li.prototype.Dg = function(a) {
  (a = this.wc[a]) && a.f()
};
li.prototype.c = function() {
  li.d.c.call(this);
  for(var a = Qa(this.wc);a.length;) {
    a.pop().f()
  }
  delete this.wc
};
var mi = new li;
q.__XHRSlave_makeRequest = y(mi.Yg, mi);
q.__XHRSlave_dispose = y(mi.Dg, mi);
function ni(a) {
  this.r = a
}
var oi = /\s*;\s*/;
o = ni.prototype;
o.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && J) {
    var b = "COOKIES_TEST_" + B();
    pi.set(b, "1");
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
  for(var c = a + "=", d = (this.r.cookie || "").split(oi), f = 0, g;g = d[f];f++) {
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
  return qi(this).keys
};
o.Y = function() {
  return qi(this).ng
};
o.Pa = function() {
  return!this.r.cookie
};
o.W = function() {
  return!this.r.cookie ? 0 : (this.r.cookie || "").split(oi).length
};
o.ca = function(a) {
  return fa(this.get(a))
};
o.Ic = function(a) {
  for(var b = qi(this).ng, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return!0
    }
  }
  return!1
};
o.clear = function() {
  for(var a = qi(this).keys, b = a.length - 1;b >= 0;b--) {
    this.remove(a[b])
  }
};
function qi(a) {
  for(var a = (a.r.cookie || "").split(oi), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), d == -1 ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{keys:b, ng:c}
}
var pi = new ni(document);
pi.gi = 3950;
function ri() {
}
ri.prototype.mf = function() {
  return Boolean(Number((new oh(document.location)).ia.get("httpStreaming", "0"))) ? 2 : 1
};
function si(a) {
  var b = new Jh("/compiled_client/FlashConnector.swf?cb=2ae8d8a79afe8f3a96bb49e8a9339914");
  b.Se = "#777777";
  b.ba(300, 30);
  var c = U("FlashConnectorSwf");
  c || e(Error("no FlashConnectorSwf?"));
  return Mh(a.N, b, c)
}
function ti(a, b, c) {
  var d = new oh(document.location);
  if(c) {
    var f = d.Ka, d = si(a);
    wd(d, function(b) {
      b = new qe(a, b);
      return new Ff(f, 843, b)
    });
    return d
  }else {
    return b ? (b = q.__demo_shared_domain, d = d.J(), rh(d, "_____random_____." + b)) : d = d.J(), d.Kb("/httpface/"), th(d, "", i), d = new Gf(d.toString().replace("_____random_____", "%random%")), Ad(d)
  }
}
function ui() {
  var a = vi, b = (new oh(document.location)).ia, c = b.get("mode") != "http", b = Boolean(Number(b.get("useSub", "1")));
  return ti(a, b, c)
}
;function wi() {
  this.Wf = B()
}
var xi = new wi;
wi.prototype.set = aa("Wf");
wi.prototype.reset = function() {
  this.set(B())
};
wi.prototype.get = l("Wf");
function yi(a) {
  this.gh = a || "";
  this.ph = xi
}
yi.prototype.dg = !0;
yi.prototype.nh = !0;
yi.prototype.mh = !0;
yi.prototype.eg = !1;
function zi(a) {
  return a < 10 ? "0" + a : String(a)
}
function Ai(a, b) {
  var c = (a.gg - b) / 1E3, d = c.toFixed(3), f = 0;
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
function Bi(a) {
  yi.call(this, a)
}
C(Bi, yi);
Bi.prototype.eg = !0;
function Ci(a) {
  this.hh = y(this.rg, this);
  this.jf = new Bi;
  this.yf = this.jf.dg = !1;
  this.e = a;
  this.Fg = this.e.ownerDocument || this.e.document;
  var a = Ue(this.e), b = k;
  if(I) {
    b = a.r.createStyleSheet(), og(b)
  }else {
    var c = Xe(a.r, "head", i, i)[0];
    c || (b = Xe(a.r, "body", i, i)[0], c = a.h("head"), b.parentNode.insertBefore(c, b));
    b = a.h("style");
    og(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
Ci.prototype.rg = function(a) {
  var b = this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight <= 100, c = this.Fg.createElement("div");
  c.className = "logmsg";
  var d = this.jf, f;
  switch(a.Cb.value) {
    case Yd.value:
      f = "dbg-sh";
      break;
    case Zd.value:
      f = "dbg-sev";
      break;
    case $d.value:
      f = "dbg-w";
      break;
    case ae.value:
      f = "dbg-i";
      break;
    default:
      f = "dbg-f"
  }
  var g = [];
  g.push(d.gh, " ");
  if(d.dg) {
    var h = new Date(a.gg);
    g.push("[", zi(h.getFullYear() - 2E3) + zi(h.getMonth() + 1) + zi(h.getDate()) + " " + zi(h.getHours()) + ":" + zi(h.getMinutes()) + ":" + zi(h.getSeconds()) + "." + zi(Math.floor(h.getMilliseconds() / 10)), "] ")
  }
  d.nh && g.push("[", Aa(Ai(a, d.ph.get())), "s] ");
  d.mh && g.push("[", ua(a.Xg), "] ");
  g.push('<span class="', f, '">', ta(Aa(ua(a.Kf))));
  d.eg && a.Td && g.push("<br>", ta(Aa(a.Sd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  if(b) {
    this.e.scrollTop = this.e.scrollHeight
  }
};
Ci.prototype.clear = function() {
  this.e.innerHTML = ""
};
function Di(a, b, c, d, f, g) {
  arguments.length == 6 ? this.setTransform(a, b, c, d, f, g) : arguments.length != 0 ? e(Error("Insufficient matrix parameters")) : (this.Z = this.aa = 1, this.U = this.$ = this.ga = this.ha = 0)
}
o = Di.prototype;
o.J = function() {
  return new Di(this.Z, this.U, this.$, this.aa, this.ga, this.ha)
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
o.Xe = function(a) {
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
  var d = new Di, f = Math.cos(a), a = Math.sin(a), b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f), c = this.Z, d = this.$;
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
  this.Ld = !1
}
C(Y, ld);
o = Y.prototype;
o.ta = k;
o.e = k;
o.ig = k;
o.b = l("e");
o.addEventListener = function(a, b, c, d) {
  N(this.e, a, b, c, d)
};
o.removeEventListener = function(a, b, c, d) {
  dd(this.e, a, b, c, d)
};
o.c = function() {
  Y.d.c.call(this);
  hd(this.e)
};
function Z(a, b, c, d) {
  Y.call(this, a, b);
  this.Ke = c;
  this.ta.ze(this, c);
  this.fill = d;
  this.ta.ye(this, d)
}
C(Z, Y);
Z.prototype.fill = k;
Z.prototype.Ke = k;
Z.prototype.Kg = l("fill");
Z.prototype.Mg = l("Ke");
function Ei(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(Ei, Z);
function Fi(a, b) {
  Y.call(this, a, b)
}
C(Fi, Y);
function Gi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(Gi, Z);
function Hi(a, b) {
  Y.call(this, a, b)
}
C(Hi, Y);
function Ii(a, b) {
  Y.call(this, a, b)
}
C(Ii, Fi);
Ii.prototype.clear = function() {
  ef(this.b())
};
Ii.prototype.ba = function(a, b) {
  Ji(this.b(), {width:a, height:b})
};
function Ki(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(Ki, Gi);
function Li(a, b) {
  Y.call(this, a, b)
}
C(Li, Hi);
Li.prototype.ba = function(a, b) {
  Ji(this.b(), {width:a, height:b})
};
function Mi() {
}
;function ag(a, b) {
  this.Hd = a;
  this.mc = b || 1
}
C(ag, Mi);
ag.prototype.fa = l("Hd");
function $f(a, b) {
  this.nb = a;
  this.Hd = b
}
$f.prototype.fa = l("Hd");
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
o.$e = function(a) {
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
  var f = this.V[0] - a * Math.cos(te(c)) + a * Math.cos(te(c + d)), g = this.V[1] - b * Math.sin(te(c)) + b * Math.sin(te(c + d));
  this.D.push(3);
  this.g.push(1);
  this.xa.push(a, b, c, d, f, g);
  this.Mb = !1;
  this.V = [f, g];
  return this
};
o.tg = function(a, b, c, d) {
  var f = this.V[0] - a * Math.cos(te(c)), g = this.V[1] - b * Math.sin(te(c)), h = te(d), d = Math.ceil(Math.abs(h) / Math.PI * 2);
  h /= d;
  for(var c = te(c), j = 0;j < d;j++) {
    var m = Math.cos(c), p = Math.sin(c), z = 4 / 3 * Math.sin(h / 2) / (1 + Math.cos(h / 2)), r = f + (m - z * p) * a, v = g + (p + z * m) * b;
    c += h;
    m = Math.cos(c);
    p = Math.sin(c);
    this.$e(r, v, f + (m + z * p) * a, g + (p - z * m) * b, f + m * a, g + p * b)
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
Qi[2] = Ni.prototype.$e;
Qi[3] = Ni.prototype.tg;
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
  vg.call(this, f);
  this.width = a;
  this.height = b;
  this.ka = c || k;
  this.Wb = d || k
}
C(Si, vg);
o = Si.prototype;
o.H = k;
o.Ja = 0;
o.Za = 0;
o.nf = function() {
  return this.X()
};
o.X = function() {
  return this.t ? mg(this.b()) : ja(this.width) && ja(this.height) ? new T(this.width, this.height) : k
};
function Ti(a) {
  var b = a.X();
  return b ? b.width / (a.ka ? new T(a.ka, a.Wb) : a.X()).width : 0
}
;function Ui(a, b, c, d, f) {
  Si.call(this, a, b, c, d, f);
  this.cf = {};
  this.Oe = J && !K(526);
  this.cb = new rg(this)
}
var Vi;
C(Ui, Si);
function Wi(a, b, c) {
  a = a.Q.r.createElementNS("http://www.w3.org/2000/svg", b);
  c && Ji(a, c);
  return a
}
function Ji(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
o = Ui.prototype;
o.pb = function(a, b) {
  (b || this.H).b().appendChild(a.b())
};
o.ye = function(a, b) {
  var c = a.b();
  b instanceof ag ? (c.setAttribute("fill", b.fa()), c.setAttribute("fill-opacity", b.mc)) : c.setAttribute("fill", "none")
};
o.ze = function(a, b) {
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
  this.Od = Wi(this, "defs");
  this.H = new Ii(b, this);
  a.appendChild(this.Od);
  a.appendChild(b);
  this.e = a;
  if(this.ka || this.Ja || this.Za) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.Oe ? this.wd() : this.b().setAttribute("viewBox", this.Ja + " " + this.Za + " " + (this.ka ? this.ka + " " + this.Wb : ""))
  }
};
o.wd = function() {
  if(this.t && (this.ka || this.Ja || !this.Za)) {
    var a = this.X();
    if(a.width == 0) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.Ja, c = -this.Za, d = a.width / this.ka, a = a.height / this.Wb;
      this.H.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
o.ba = function(a, b) {
  kg(this.b(), a, b)
};
o.X = function() {
  if(!jc) {
    return this.t ? mg(this.b()) : Ui.d.X.call(this)
  }
  var a = this.width, b = this.height, c = u(a) && a.indexOf("%") != -1, d = u(b) && b.indexOf("%") != -1;
  if(!this.t && (c || d)) {
    return k
  }
  var f, g;
  if(c) {
    f = this.b().parentNode, g = mg(f), a = parseFloat(a) * g.width / 100
  }
  d && (f = f || this.b().parentNode, g = g || mg(f), b = parseFloat(b) * g.height / 100);
  return new T(a, b)
};
o.clear = function() {
  this.H.clear();
  ef(this.Od);
  this.cf = {}
};
o.Kc = function(a, b, c, d, f, g, h) {
  a = Wi(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new Ki(a, this, f, g);
  this.pb(f, h);
  return f
};
o.drawImage = function(a, b, c, d, f, g) {
  a = Wi(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new Li(a, this);
  this.pb(f, g);
  return f
};
o.S = function() {
  var a = this.X();
  Ui.d.S.call(this);
  a || this.dispatchEvent("resize");
  if(this.Oe) {
    var a = this.width, b = this.height;
    typeof a == "string" && a.indexOf("%") != -1 && typeof b == "string" && b.indexOf("%") != -1 && V(this.cb, Xi(), od, this.wd);
    this.wd()
  }
};
o.$a = function() {
  Ui.d.$a.call(this);
  this.Oe && tg(this.cb, Xi(), od, this.wd)
};
o.c = function() {
  delete this.cf;
  delete this.Od;
  delete this.H;
  Ui.d.c.call(this)
};
function Xi() {
  Vi || (Vi = new md(400), Vi.start());
  return Vi
}
;function Yi() {
  return this.e = this.ta.Q.b(this.T) || this.e
}
function Zi(a, b) {
  this.T = a.id;
  Y.call(this, a, b)
}
C(Zi, Fi);
Zi.prototype.b = Yi;
Zi.prototype.clear = function() {
  ef(this.b())
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
  this.Fi = c;
  this.Gi = d;
  this.Wi = f;
  this.Xi = g
}
C($i, Gi);
$i.prototype.b = Yi;
function aj(a, b) {
  this.T = a.id;
  Y.call(this, a, b)
}
C(aj, Hi);
aj.prototype.b = Yi;
aj.prototype.ba = function(a, b) {
  var c = this.b().style;
  c.width = bj(a) + "px";
  c.height = bj(b) + "px"
};
function cj(a, b, c, d, f) {
  Si.call(this, a, b, c, d, f);
  this.cb = new rg(this)
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
cj.prototype.ye = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    f.tagName == "fill" && c.removeChild(f)
  }
  b instanceof ag ? b.fa() == "transparent" ? c.filled = !1 : b.mc != 1 ? (c.filled = !0, d = ej(this, "fill"), d.opacity = Math.round(b.mc * 100) + "%", d.color = b.fa(), c.appendChild(d)) : (c.filled = !0, c.fillcolor = b.fa()) : c.filled = !1;
  fj(this)
};
cj.prototype.ze = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = !0;
    var d = b.nb;
    u(d) && d.indexOf("px") == -1 ? d = parseFloat(d) : d *= Ti(this);
    var f = c.getElementsByTagName("stroke")[0];
    d < 1 ? (f = f || ej(this, "stroke"), f.opacity = d, f.Yi = "1px", f.color = b.fa(), c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.fa(), c.strokeweight = d + "px")
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
  d.coordsize = this.ka ? $(this.ka) + " " + $(this.Wb) : $(a) + " " + $(b);
  d.coordorigin = fa(this.Ja) ? $(this.Ja) + " " + $(this.Za) : "0 0";
  c.appendChild(d);
  this.H = new Zi(d, this);
  N(c, "resize", y(this.$d, this))
};
o.$d = function() {
  var a = mg(this.b()), b = this.H.b().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.b();a && a.currentStyle && a.currentStyle.display != "none";) {
      a = a.parentNode
    }
    a && a.currentStyle && V(this.cb, a, "propertychange", this.$d)
  }
  this.dispatchEvent("resize")
};
o.ba = function(a, b) {
  kg(this.b(), a, b)
};
o.X = function() {
  var a = this.b();
  return new T(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
o.clear = function() {
  this.H.clear()
};
o.Kc = function(a, b, c, d, f, g, h) {
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
  this.$d();
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
C(ij, Fi);
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
function nj(a, b, c, d, f, g, h, j) {
  Z.call(this, a, b, h, j);
  this.yg = c;
  this.zg = d;
  this.$f = f;
  this.ag = g;
  this.O = new Ni;
  this.O.clear();
  this.O.moveTo(this.yg + this.$f * Math.cos(te(0)), this.zg + this.ag * Math.sin(te(0)));
  this.O.arcTo(this.$f, this.ag, 0, 360);
  this.O.close();
  this.eh = new oj(k, b, this.O, h, j)
}
C(nj, Gi);
nj.prototype.za = function(a) {
  this.eh.za(a)
};
function oj(a, b, c, d, f) {
  Z.call(this, a, b, d, f);
  this.Kb(c)
}
C(oj, Ei);
oj.prototype.Yb = !1;
oj.prototype.Kb = function(a) {
  this.O = a.Mb ? a : Ri(a);
  this.Yb && jj(this.ta)
};
oj.prototype.za = function(a) {
  this.Yb = !0;
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
function pj(a, b, c, d, f, g, h) {
  Y.call(this, a, b);
  this.Bh = c;
  this.Dh = d;
  this.Qe = f;
  this.Zd = g;
  this.oh = h
}
C(pj, Hi);
pj.prototype.Yb = !1;
pj.prototype.ba = function(a, b) {
  this.Qe = a;
  this.Zd = b;
  this.Yb && jj(this.ta)
};
pj.prototype.za = function(a) {
  this.wf ? (this.Qe && this.Zd && a.drawImage(this.wf, this.Bh, this.Dh, this.Qe, this.Zd), this.Yb = !0) : (a = new Image, a.onload = y(this.Og, this, a), a.src = this.oh)
};
pj.prototype.Og = function(a) {
  this.wf = a;
  jj(this.ta)
};
function qj(a, b, c, d, f) {
  Si.call(this, a, b, c, d, f)
}
C(qj, Si);
o = qj.prototype;
o.ye = function() {
  jj(this)
};
o.ze = function() {
  jj(this)
};
function rj(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.ig ? b.ig.J() : new Di, f = d.ga, g = d.ha;
  (f || g) && c.translate(f, g);
  (d = d.U) && c.rotate(Math.asin(d))
}
o.h = function() {
  var a = this.Q.h("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Ub = this.Q.h("canvas");
  a.appendChild(this.Ub);
  this.Wg = this.H = new ij(this);
  this.jh = 0;
  sj(this)
};
o.getContext = function() {
  this.b() || this.h();
  if(!this.sb) {
    this.sb = this.Ub.getContext("2d"), this.sb.save()
  }
  return this.sb
};
o.ba = function(a, b) {
  this.width = a;
  this.height = b;
  sj(this);
  jj(this)
};
o.X = function() {
  var a = this.width, b = this.height, c = u(a) && a.indexOf("%") != -1, d = u(b) && b.indexOf("%") != -1;
  if(!this.t && (c || d)) {
    return k
  }
  var f, g;
  if(c) {
    f = this.b().parentNode, g = mg(f), a = parseFloat(a) * g.width / 100
  }
  d && (f = f || this.b().parentNode, g = g || mg(f), b = parseFloat(b) * g.height / 100);
  return new T(a, b)
};
function sj(a) {
  kg(a.b(), a.width, a.height);
  var b = a.X();
  if(b) {
    kg(a.Ub, b.width, b.height), a.Ub.width = b.width, a.Ub.height = b.height, a.sb = k
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
  if(a.Ti) {
    a.Si = !0
  }else {
    if(a.t) {
      a.reset();
      if(a.ka) {
        var b = a.X();
        a.getContext().scale(b.width / a.ka, b.height / a.Wb)
      }
      (a.Ja || a.Za) && a.getContext().translate(-a.Ja, -a.Za);
      rj(a, a.H);
      a.H.za(a.sb);
      a.getContext().restore()
    }
  }
}
function kj(a, b) {
  var c = a.getContext();
  rj(a, b);
  if(!b.Kg || !b.Mg) {
    b.za(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof ag) {
        if(d.mc != 0) {
          c.globalAlpha = d.mc, c.fillStyle = d.fa(), b.za(c), c.fill(), c.globalAlpha = 1
        }
      }else {
        var f = c.createLinearGradient(d.Li(), d.Ni(), d.Mi(), d.Oi());
        f.addColorStop(0, d.Ji());
        f.addColorStop(1, d.Ki());
        c.fillStyle = f;
        b.za(c);
        c.fill()
      }
    }
    if(d = b.Ke) {
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
  this.t && !this.jh && !(b != this.H && b != this.Wg) && kj(this, a)
};
o.Kc = function(a, b, c, d, f, g, h) {
  a = new nj(k, this, a, b, c, d, f, g);
  this.append(a, h);
  return a
};
o.drawImage = function(a, b, c, d, f, g) {
  a = new pj(k, this, a, b, c, d, f);
  this.append(a, g);
  return a
};
o.c = function() {
  this.sb = k;
  qj.d.c.call(this)
};
o.S = function() {
  var a = this.X();
  qj.d.S.call(this);
  a || (sj(this), this.dispatchEvent("resize"));
  jj(this)
};
function tj(a) {
  this.z = [];
  uj(this, a)
}
C(tj, ld);
o = tj.prototype;
o.Va = k;
o.xe = k;
function uj(a, b) {
  b && (F(b, function(a) {
    this.uc(a, !1)
  }, a), cb(a.z, b))
}
o.Yd = l("Va");
o.pd = function(a) {
  if(a != this.Va) {
    this.uc(this.Va, !1), this.Va = a, this.uc(a, !0)
  }
  this.dispatchEvent("select")
};
o.Xd = function() {
  return this.Va ? Ua(this.z, this.Va) : -1
};
o.Ce = function(a) {
  this.pd(this.z[a] || k)
};
o.clear = function() {
  Za(this.z);
  this.Va = k
};
o.c = function() {
  tj.d.c.call(this);
  delete this.z;
  this.Va = k
};
o.uc = function(a, b) {
  a && (typeof this.xe == "function" ? this.xe(a, b) : typeof a.Be == "function" && a.Be(b))
};
function vj() {
}
C(vj, Dg);
da(vj);
var wj = 0;
vj.prototype.h = function(a) {
  var b = Fg(this, a);
  return a.Da().h("div", b ? b.join(" ") : k, xj(this, a.da, a.nf(), a.Da()))
};
function xj(a, b, c, d) {
  for(var f = [], g = 0, h = 0;g < c.height;g++) {
    for(var j = [], m = 0;m < c.width;m++) {
      var p = b && b[h++];
      j.push(yj(a, p, d))
    }
    f.push(d.h("tr", a.v() + "-row", j))
  }
  return a.Ze(f, d)
}
vj.prototype.Ze = function(a, b) {
  var c = b.h("table", this.v() + "-table", b.h("tbody", this.v() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Cg(c, "grid");
  return c
};
function yj(a, b, c) {
  a = c.h("td", {"class":a.v() + "-cell", id:a.v() + "-cell-" + wj++}, b);
  Cg(a, "gridcell");
  return a
}
vj.prototype.ld = function(a, b) {
  if(a) {
    var c = Xe(document, "tbody", this.v() + "-body", a)[0];
    if(c) {
      var d = 0;
      F(c.rows, function(a) {
        F(a.cells, function(a) {
          ef(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = Ue(a), h = c.rows[0].cells.length;d < b.length;) {
          var j = b[d++];
          f.push(yj(this, j, g));
          if(f.length == h) {
            j = g.h("tr", this.v() + "-row", f), c.appendChild(j), f.length = 0
          }
        }
        if(f.length > 0) {
          for(;f.length < h;) {
            f.push(yj(this, "", g))
          }
          j = g.h("tr", this.v() + "-row", f);
          c.appendChild(j)
        }
      }
    }
    qg(a, !0, jc)
  }
};
function zj(a, b, c) {
  for(b = b.b();c && c.nodeType == 1 && c != b;) {
    if(c.tagName == "TD" && Ya(Pe(c), a.v() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function Aj(a, b, c, d) {
  if(c) {
    c = c.parentNode, a = a.v() + "-cell-hover", d ? Qe(c, a) : Re(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id)
  }
}
vj.prototype.v = n("goog-palette");
function Bj(a, b, c) {
  W.call(this, a, b || vj.Na(), c)
}
C(Bj, W);
o = Bj.prototype;
o.w = k;
o.eb = -1;
o.K = k;
o.c = function() {
  Bj.d.c.call(this);
  if(this.K) {
    this.K.f(), this.K = k
  }
  this.w = k
};
o.md = function(a) {
  Bj.d.md.call(this, a);
  Cj(this);
  this.K ? (this.K.clear(), uj(this.K, a)) : (this.K = new tj(a), this.K.xe = y(this.uc, this), V(zg(this), this.K, "select", this.Rg));
  this.eb = -1
};
o.lf = n(k);
o.Xc = function(a) {
  Bj.d.Xc.call(this, a);
  var b = zj(this.m, this, a.target);
  if((!b || !a.relatedTarget || !gf(b, a.relatedTarget)) && b != Dj(this)) {
    a = this.da, Ej(this, a ? Ua(a, b) : -1)
  }
};
o.Wc = function(a) {
  Bj.d.Wc.call(this, a);
  var b = zj(this.m, this, a.target);
  (!b || !a.relatedTarget || !gf(b, a.relatedTarget)) && b == Dj(this) && Aj(this.m, this, b, !1)
};
o.Vc = function(a) {
  Bj.d.Vc.call(this, a);
  if(this.ge() && (a = zj(this.m, this, a.target), a != Dj(this))) {
    var b = this.da;
    Ej(this, b ? Ua(b, a) : -1)
  }
};
o.hb = function() {
  var a = Dj(this);
  return a ? (this.pd(a), this.dispatchEvent("action")) : !1
};
o.sf = function(a) {
  var b = this.da, b = b ? b.length : 0, c = this.w.width;
  if(b == 0 || !this.isEnabled()) {
    return!1
  }
  if(a.keyCode == 13 || a.keyCode == 32) {
    return this.hb(a)
  }
  if(a.keyCode == 36) {
    return Ej(this, 0), !0
  }else {
    if(a.keyCode == 35) {
      return Ej(this, b - 1), !0
    }
  }
  var d = this.eb < 0 ? this.Xd() : this.eb;
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
o.Rg = function() {
};
o.nf = l("w");
o.ba = function(a, b) {
  this.b() && e(Error("Component already rendered"));
  this.w = ja(a) ? new T(a, b) : a;
  Cj(this)
};
function Dj(a) {
  var b = a.da;
  return b && b[a.eb]
}
function Ej(a, b) {
  if(b != a.eb) {
    Fj(a, a.eb, !1), a.eb = b, Fj(a, b, !0)
  }
}
o.Xd = function() {
  return this.K ? this.K.Xd() : -1
};
o.Yd = function() {
  return this.K ? this.K.Yd() : k
};
o.Ce = function(a) {
  this.K && this.K.Ce(a)
};
o.pd = function(a) {
  this.K && this.K.pd(a)
};
function Fj(a, b, c) {
  if(a.b()) {
    var d = a.da;
    d && b >= 0 && b < d.length && Aj(a.m, a, d[b], c)
  }
}
o.uc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.m.v() + "-cell-selected";
    b ? Qe(c, d) : Re(c, d)
  }
};
function Cj(a) {
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
;function Gj(a, b, c) {
  this.Gc = a || [];
  Bj.call(this, k, b || vj.Na(), c);
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
  a.Ce(b ? Ua(a.fd, b) : -1)
}
function Hj(a) {
  return Va(a.Gc, function(a) {
    var c = this.Da().h("div", {"class":this.m.v() + "-colorswatch", style:"background-color:" + a});
    c.title = a.charAt(0) == "#" ? "RGB (" + mh(a).join(", ") + ")" : a;
    return c
  }, a)
}
function Jj(a) {
  if(a) {
    try {
      return gh(a).Zc
    }catch(b) {
    }
  }
  return k
}
;var cg = R("whiteboard.logger");
window.onerror = function(a, b, c) {
  ge(cg, "window.onerror: message: " + H(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Lj() {
  this.te = new Ab
}
function Xf(a, b) {
  cg.info("streamReset: reasonString=" + H(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  Mj = k
}
Lj.prototype.reset = function(a) {
  cg.info("resetting with reason: " + a);
  this.F.reset(a)
};
var Mj = k, vi = new Cd(q.window);
function Nj() {
  Mj && (Mj.reset("idle timeout fired"), Mj = k)
}
var Oj = k;
function Pj() {
  Oj != k && vi.N.clearTimeout(Oj);
  Mj && (Oj = vi.N.setTimeout(Nj, 2592E5))
}
N(window, ["click", "focus", "keydown", "keypress"], Pj, !0);
function Qj() {
  var a = new ri;
  Mj = new Lj;
  Pj();
  wd(ui(), function(b) {
    Mj || e(Error("lastProto falsy?"));
    b = new Kf(vi, Mj, b, a);
    Mj.F = b;
    Qf(Mj.F, ["subprotocol:whiteboard"]);
    b.start();
    return k
  })
}
function Rj() {
  rb.f();
  bg();
  var a = Mj;
  cg.info("Telling server to clear the board.");
  var b = a.F, a = [2, a.te.lb(new xb)], a = (new Db).lb(a);
  Qf(b, [a])
}
function Sj(a) {
  var b = new Fc(a), a = b.offsetX, c = b.offsetY;
  rb.Kc(a, c, 5, 5, new $f(1, "black"), new ag(sb), i);
  var d = Mj, f = sb;
  cg.info("Telling server about circle at: " + a + ", " + c + " with color " + f);
  var b = d.F, g = new wb;
  mb(g, 1, a);
  mb(g, 2, c);
  mb(g, 3, f);
  a = d.te.lb(g);
  Qf(b, [(new Db).lb([1, a])])
}
function bg() {
  var a;
  a = I && !K("9") ? new cj(800, 600, i, i, i) : J && (!K("420") || kc) ? new qj(800, 600, i, i, i) : new Ui(800, 600, i, i, i);
  a.h();
  tb = U("drawArea");
  Ag(a, tb);
  rb = a
}
var Kj = "#E06666";
function Tj(a) {
  var b;
  (a = a.target.Yd()) ? (a = a.style[Fa("background-color")] || "", b = Jj(a)) : b = k;
  b || (b = Kj);
  sb = b;
  pi.set("whiteboard_defaultColor", b);
  a = U("whiteboard-cp-value");
  u("background-color") ? ig(a, b, "background-color") : Pa("background-color", oa(ig, a));
  a = U("whiteboard-cp-value");
  a.title = b;
  b = gh(b).Zc;
  hf(a, b);
  b = mh(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = kh(b[0], b[1], b[2]);
  u("color") ? ig(a, b, "color") : Pa("color", oa(ig, a))
}
function Uj() {
  ub = (new oh(document.location)).ia;
  if(vb = Boolean(Number(ub.get("logging", "0")))) {
    ke().od(ee);
    var a = new Ci(document.getElementById("log"));
    if(!0 != a.yf) {
      var b = ke(), c = a.hh;
      if(!b.gc) {
        b.gc = []
      }
      b.gc.push(c);
      a.yf = !0
    }
  }else {
    ke().od(Xd)
  }
  cg.info("Logger works.");
  (a = pi.get("whiteboard_defaultColor")) && (Kj = a);
  sb = Kj;
  b = U("whiteboard-controls-left");
  a = U("whiteboard-controls-right");
  c = $e("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  df(b, c);
  c = $e("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  df(b, c);
  b = new Gj("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.ba(8);
  Ag(b, U("whiteboard-cp"));
  N(b, "action", Tj);
  Ij(b);
  Tj({target:b});
  b = new eh("Clear board");
  Tg(b, "clear-board-button");
  Ag(b, a);
  N(b, "action", Rj);
  a = U("drawAreaOverlay");
  qg(a, !0);
  N(a, "click", Sj, !1);
  bg();
  Qj()
}
var Vj = "__whiteboard_init".split("."), Wj = q;
!(Vj[0] in Wj) && Wj.execScript && Wj.execScript("var " + Vj[0]);
for(var Xj;Vj.length && (Xj = Vj.shift());) {
  !Vj.length && fa(Uj) ? Wj[Xj] = Uj : Wj = Wj[Xj] ? Wj[Xj] : Wj[Xj] = {}
}
;})();
