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
    return a.Yg || (a.Yg = new a)
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
  this.Zi = a
}
C(Ia, qa);
Ia.prototype.name = "AssertionError";
function Ja(a, b) {
  f(new Ia("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ka(a, b, c) {
  this.D = a;
  this.K = b;
  this.pe = c.name;
  this.Eb = !!c.bj;
  this.Xi = !!c.required;
  this.dc = c.Wd;
  this.Qf = c.type;
  this.jf = m;
  switch(this.dc) {
    case La:
    ;
    case Ma:
    ;
    case Na:
    ;
    case Oa:
    ;
    case Pa:
      this.jf = j
  }
  this.Pi = c.defaultValue
}
var La = 3, Ma = 4, Na = 6, Oa = 16, Pa = 18;
function Qa(a) {
  return a.dc == 11 || a.dc == 10
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
  this.Of = a;
  this.pe = b.name || k;
  this.Qi = b.of || k;
  this.Mi = b.Li;
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
  this.Ab = this.constructor.Ab;
  var a = this.Ab.Ma, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.Ma = b;
  this.$b = this.le = k
}
function mb(a, b) {
  for(var c in a.r) {
    a.Ma[c] || b.call(a, Number(c), a.r[c])
  }
}
r = lb.prototype;
r.fc = o("Ab");
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
  for(var b = kb(this.fc()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(pb(this, d.K) != pb(a, d.K)) {
      return m
    }
    if(pb(this, d.K)) {
      var e = Qa(d), g = d.K, h = this.r[g], g = a.r[g];
      if(d.Eb) {
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
r.af = function(a) {
  for(var b = kb(this.fc()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete this.r[d.K];
    if(pb(a, d.K)) {
      var e = Qa(d);
      if(d.Eb) {
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
  a.af(this);
  return a
};
function pb(a, b) {
  return b in a.r && fa(a.r[b]) && a.r[b] !== k
}
function qb(a, b) {
  if(a.le) {
    var c = b.K;
    if(!(c in a.$b)) {
      var d = a.r, e;
      e = a.le;
      var g = a.r[c];
      if(g == k) {
        e = g
      }else {
        if(b.Eb) {
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
      a.$b[c] = j
    }
  }
}
function nb(a, b, c) {
  var d = a.Ma[b];
  qb(a, d);
  return d.Eb ? (c = c || 0, c >= 0 && rb(a, b), a.r[b][c]) : (v(a.r[b]), b in a.r ? a.r[b] : k)
}
function rb(a, b) {
  return a.Ma[b].Eb ? (pb(a, b) && v(a.r[b]), pb(a, b) ? a.r[b].length : 0) : pb(a, b) ? 1 : 0
}
function ob(a, b, c) {
  a.r[b] = c;
  a.$b && (a.$b[b] = j)
}
function sb(a, b) {
  var c = [], d, e;
  for(e in b) {
    b.hasOwnProperty(e) && (e == 0 ? d = b[0] : c.push(new Ka(a, e, b[e])))
  }
  a.Ab = new jb(a, d, c);
  a.fc = function() {
    return a.Ab
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
sb(yb, {"0":{name:"Point", of:"demosminerva.whiteboard_messages.Point"}, 1:{name:"x", Wd:5, type:Number}, 2:{name:"y", Wd:5, type:Number}, 3:{name:"color", Wd:9, type:String}});
sb(zb, {"0":{name:"ClearBoard", of:"demosminerva.whiteboard_messages.ClearBoard"}});
function Ab() {
}
Ab.prototype.Qc = function(a, b) {
  return Qa(a) ? this.yc(b) : b
};
Ab.prototype.Qd = function(a) {
  new a.Of;
  f(Error("Unimplemented"))
};
Ab.prototype.Pc = function(a, b) {
  if(Qa(a)) {
    return this.Qd(a.Qf.Ab, b)
  }
  if(!a.jf) {
    return b
  }
  var c = a.Qf;
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
Bb.prototype.Qd = function(a, b) {
  var c = new a.Of;
  c.le = this;
  c.r = b;
  c.$b = {};
  return c
};
function Cb() {
}
C(Cb, Bb);
Cb.prototype.yc = function(a) {
  for(var b = kb(a.fc()), c = [], d = 0;d < b.length;d++) {
    var e = b[d];
    if(pb(a, e.K)) {
      var g = e.K;
      if(e.Eb) {
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
  return a.dc == 8 ? b ? 1 : 0 : Ab.prototype.Qc.apply(this, arguments)
};
Cb.prototype.Pc = function(a, b) {
  return a.dc == 8 ? b === 1 : Ab.prototype.Pc.apply(this, arguments)
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
function Fb(a) {
  return(new Gb(i)).yc(a)
}
function Gb(a) {
  this.jd = a
}
Gb.prototype.yc = function(a) {
  var b = [];
  Hb(this, a, b);
  return b.join("")
};
function Hb(a, b, c) {
  switch(typeof b) {
    case "string":
      Ib(b, c);
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
          c.push(e), e = b[g], Hb(a, a.jd ? a.jd.call(b, String(g), e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], typeof e != "function" && (c.push(d), Ib(g, c), c.push(":"), Hb(a, a.jd ? a.jd.call(b, g, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      f(Error("Unknown type: " + typeof b))
  }
}
var Jb = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\u000b"}, Kb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Ib(a, b) {
  b.push('"', a.replace(Kb, function(a) {
    if(a in Jb) {
      return Jb[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    b < 16 ? e += "000" : b < 256 ? e += "00" : b < 4096 && (e += "0");
    return Jb[a] = e + b.toString(16)
  }), '"')
}
;function Lb(a, b, c) {
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
        Ib(a, b)
      }else {
        if(Db(a.s)) {
          a.s(b, c)
        }else {
          if(Db(a.ug)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if(d == "array") {
                d = a.length;
                b.push("[");
                for(var e = "", g = 0;g < d;g++) {
                  b.push(e), Lb(a[g], b, c), e = ", "
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
                      g = d[h], Object.prototype.hasOwnProperty.call(a, g) && (l = a[g], b.push(e), Ib(g, b), b.push(": "), Lb(l, b, c), e = ", ")
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
  Lb(a, b, c)
}
function H(a) {
  var b = [];
  G(a, b, i);
  return b.join("")
}
;function Mb(a) {
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
function Nb(a) {
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
function Ob(a) {
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
function Pb(a, b, c) {
  if(typeof a.forEach == "function") {
    a.forEach(b, c)
  }else {
    if(ga(a) || w(a)) {
      F(a, b, c)
    }else {
      for(var d = Ob(a), e = Nb(a), g = e.length, h = 0;h < g;h++) {
        b.call(c, e[h], d && d[h], a)
      }
    }
  }
}
function Qb(a, b) {
  if(typeof a.every == "function") {
    return a.every(b, i)
  }
  if(ga(a) || w(a)) {
    return Za(a, b, i)
  }
  for(var c = Ob(a), d = Nb(a), e = d.length, g = 0;g < e;g++) {
    if(!b.call(i, d[g], c && c[g], a)) {
      return m
    }
  }
  return j
}
;function Rb(a, b) {
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
r = Rb.prototype;
r.e = 0;
r.Se = 0;
r.W = o("e");
r.Y = function() {
  Sb(this);
  for(var a = [], b = 0;b < this.l.length;b++) {
    a.push(this.p[this.l[b]])
  }
  return a
};
r.Ha = function() {
  Sb(this);
  return this.l.concat()
};
r.ea = function(a) {
  return Tb(this.p, a)
};
r.Ic = function(a) {
  for(var b = 0;b < this.l.length;b++) {
    var c = this.l[b];
    if(Tb(this.p, c) && this.p[c] == a) {
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
  var c = b || Ub;
  Sb(this);
  for(var d, e = 0;d = this.l[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function Ub(a, b) {
  return a === b
}
r.Qa = function() {
  return this.e == 0
};
r.clear = function() {
  this.p = {};
  this.Se = this.e = this.l.length = 0
};
r.remove = function(a) {
  return Tb(this.p, a) ? (delete this.p[a], this.e--, this.Se++, this.l.length > 2 * this.e && Sb(this), j) : m
};
function Sb(a) {
  if(a.e != a.l.length) {
    for(var b = 0, c = 0;b < a.l.length;) {
      var d = a.l[b];
      Tb(a.p, d) && (a.l[c++] = d);
      b++
    }
    a.l.length = c
  }
  if(a.e != a.l.length) {
    for(var e = {}, c = b = 0;b < a.l.length;) {
      d = a.l[b], Tb(e, d) || (a.l[c++] = d, e[d] = 1), b++
    }
    a.l.length = c
  }
}
r.get = function(a, b) {
  return Tb(this.p, a) ? this.p[a] : b
};
r.set = function(a, b) {
  Tb(this.p, a) || (this.e++, this.l.push(a), this.Se++);
  this.p[a] = b
};
r.Cd = function(a) {
  var b;
  a instanceof Rb ? (b = a.Ha(), a = a.Y()) : (b = Ta(a), a = Sa(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
r.A = function() {
  return new Rb(this)
};
function Vb(a) {
  Sb(a);
  for(var b = {}, c = 0;c < a.l.length;c++) {
    var d = a.l[c];
    b[d] = a.p[d]
  }
  return b
}
function Tb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function Wb(a) {
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
;function Xb(a, b) {
  this.tb = a;
  this.ob = b
}
Xb.prototype.n = function(a) {
  return a instanceof Xb && this.tb == a.tb && this.ob.join(",") == a.ob
};
Xb.prototype.s = function(a, b) {
  a.push("new SACK(", String(this.tb), ", ");
  G(this.ob, a, b);
  a.push(")")
};
function Yb() {
  this.v = new Rb
}
r = Yb.prototype;
r.yb = -1;
r.w = 0;
r.append = function(a) {
  var b = Wb(a);
  this.v.set(this.yb + 1, [a, b]);
  this.yb += 1;
  this.w += b
};
r.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
r.s = function(a) {
  a.push("<Queue with ", String(this.v.W()), " item(s), counter=#", String(this.yb), ", size=", String(this.w), ">")
};
function Zb(a) {
  Sb(a.v);
  hb(a.v.l);
  return a.v.l
}
r.rf = function(a) {
  for(var b = Zb(this), c = [], d = 0;d < b.length;d++) {
    var e = b[d];
    (a == k || e >= a) && c.push([e, this.v.p[e][0]])
  }
  return c
};
function $b() {
  this.ab = new Rb
}
$b.prototype.Gb = -1;
$b.prototype.w = 0;
function ac(a) {
  var b = a.ab.Ha();
  hb(b);
  return new Xb(a.Gb, b)
}
var bc = {};
function cc() {
  return j
}
;var dc, ec, fc, gc, hc;
function ic() {
  return t.navigator ? t.navigator.userAgent : k
}
hc = gc = fc = ec = dc = m;
var jc;
if(jc = ic()) {
  var kc = t.navigator;
  dc = jc.indexOf("Opera") == 0;
  ec = !dc && jc.indexOf("MSIE") != -1;
  gc = (fc = !dc && jc.indexOf("WebKit") != -1) && jc.indexOf("Mobile") != -1;
  hc = !dc && !fc && kc.product == "Gecko"
}
var lc = dc, I = ec, mc = hc, J = fc, nc = gc, oc = t.navigator, pc = (oc && oc.platform || "").indexOf("Mac") != -1, qc;
a: {
  var rc = "", sc;
  if(lc && t.opera) {
    var tc = t.opera.version, rc = typeof tc == "function" ? tc() : tc
  }else {
    if(mc ? sc = /rv\:([^\);]+)(\)|;)/ : I ? sc = /MSIE\s+([^\);]+)(\)|;)/ : J && (sc = /WebKit\/(\S+)/), sc) {
      var uc = sc.exec(ic()), rc = uc ? uc[1] : ""
    }
  }
  if(I) {
    var vc, wc = t.document;
    vc = wc ? wc.documentMode : i;
    if(vc > parseFloat(rc)) {
      qc = String(vc);
      break a
    }
  }
  qc = rc
}
var xc = {};
function K(a) {
  return xc[a] || (xc[a] = Da(qc, a) >= 0)
}
var yc = {};
function zc() {
  return yc[9] || (yc[9] = I && document.documentMode && document.documentMode >= 9)
}
;var Ac = !I || zc(), Bc = !I || zc(), Cc = I && !K("8");
var Dc = {Rh:"click", Wh:"dblclick", qi:"mousedown", ui:"mouseup", ti:"mouseover", si:"mouseout", ri:"mousemove", Ei:"selectstart", ki:"keypress", ji:"keydown", li:"keyup", Ph:"blur", di:"focus", Xh:"deactivate", ei:I ? "focusin" : "DOMFocusIn", fi:I ? "focusout" : "DOMFocusOut", Qh:"change", Di:"select", Fi:"submit", ii:"input", zi:"propertychange", ai:"dragstart", Yh:"dragenter", $h:"dragover", Zh:"dragleave", bi:"drop", Ji:"touchstart", Ii:"touchmove", Hi:"touchend", Gi:"touchcancel", Th:"contextmenu", 
ci:"error", hi:"help", mi:"load", ni:"losecapture", Ai:"readystatechange", Bi:"resize", Ci:"scroll", Ki:"unload", gi:"hashchange", vi:"pagehide", wi:"pageshow", yi:"popstate", Uh:"copy", xi:"paste", Vh:"cut", Mh:"beforecopy", Nh:"beforecut", Oh:"beforepaste", pi:"message", Sh:"connect"};
function L() {
}
L.prototype.va = m;
L.prototype.f = function() {
  if(!this.va) {
    this.va = j, this.c()
  }
};
L.prototype.c = function() {
  this.Fg && Ec.apply(k, this.Fg)
};
function Ec(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ga(d) ? Ec.apply(k, d) : d && typeof d.f == "function" && d.f()
  }
}
;function Fc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
C(Fc, L);
r = Fc.prototype;
r.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
r.mb = m;
r.uc = j;
r.stopPropagation = function() {
  this.mb = j
};
r.preventDefault = function() {
  this.uc = m
};
function Gc(a) {
  a.stopPropagation()
}
;function Hc(a) {
  Hc[" "](a);
  return a
}
Hc[" "] = u;
function Ic(a, b) {
  a && this.jc(a, b)
}
C(Ic, Fc);
var Jc = [1, 4, 2];
r = Ic.prototype;
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
r.jh = m;
r.Ea = k;
r.jc = function(a, b) {
  var c = this.type = a.type;
  Fc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(mc) {
      var e;
      a: {
        try {
          Hc(d.nodeName);
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
  this.jh = pc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Ea = a;
  delete this.uc;
  delete this.mb
};
function Kc(a) {
  return Ac ? a.Ea.button == 0 : a.type == "click" ? j : !!(a.Ea.button & Jc[0])
}
r.stopPropagation = function() {
  Ic.d.stopPropagation.call(this);
  this.Ea.stopPropagation ? this.Ea.stopPropagation() : this.Ea.cancelBubble = j
};
r.preventDefault = function() {
  Ic.d.preventDefault.call(this);
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
  Ic.d.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Ea = k
};
function Lc() {
}
var Mc = 0;
r = Lc.prototype;
r.key = 0;
r.nb = m;
r.Gd = m;
r.jc = function(a, b, c, d, e, g) {
  z(a) ? this.Ff = j : a && a.handleEvent && z(a.handleEvent) ? this.Ff = m : f(Error("Invalid listener argument"));
  this.Jb = a;
  this.Zf = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Xc = g;
  this.Gd = m;
  this.key = ++Mc;
  this.nb = m
};
r.handleEvent = function(a) {
  return this.Ff ? this.Jb.call(this.Xc || this.src, a) : this.Jb.handleEvent.call(this.Jb, a)
};
var Nc, Oc = (Nc = "ScriptEngine" in t && t.ScriptEngine() == "JScript") ? t.ScriptEngineMajorVersion() + "." + t.ScriptEngineMinorVersion() + "." + t.ScriptEngineBuildVersion() : "0";
function Pc(a, b) {
  this.Kf = b;
  this.gb = [];
  a > this.Kf && f(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.gb.push(this.Ba ? this.Ba() : {})
  }
}
C(Pc, L);
Pc.prototype.Ba = k;
Pc.prototype.kf = k;
function Qc(a) {
  return a.gb.length ? a.gb.pop() : a.Ba ? a.Ba() : {}
}
function Rc(a, b) {
  a.gb.length < a.Kf ? a.gb.push(b) : Sc(a, b)
}
function Sc(a, b) {
  if(a.kf) {
    a.kf(b)
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
Pc.prototype.c = function() {
  Pc.d.c.call(this);
  for(var a = this.gb;a.length;) {
    Sc(this, a.pop())
  }
  delete this.gb
};
var Tc, Uc, Vc, Wc, Xc, Yc, Zc, $c, ad, bd, cd;
(function() {
  function a() {
    return{e:0, pa:0}
  }
  function b() {
    return[]
  }
  function c() {
    var a = Bc ? function(b) {
      return h.call(a.src, a.key, b)
    } : function(b) {
      b = h.call(a.src, a.key, b);
      if(!b) {
        return b
      }
    };
    return a
  }
  function d() {
    return new Lc
  }
  function e() {
    return new Ic
  }
  var g = Nc && !(Da(Oc, "5.7") >= 0), h;
  Yc = function(a) {
    h = a
  };
  if(g) {
    Tc = function() {
      return Qc(l)
    };
    Uc = function(a) {
      Rc(l, a)
    };
    Vc = function() {
      return Qc(n)
    };
    Wc = function(a) {
      Rc(n, a)
    };
    Xc = function() {
      return Qc(q)
    };
    Zc = function() {
      Rc(q, c())
    };
    $c = function() {
      return Qc(x)
    };
    ad = function(a) {
      Rc(x, a)
    };
    bd = function() {
      return Qc(s)
    };
    cd = function(a) {
      Rc(s, a)
    };
    var l = new Pc(0, 600);
    l.Ba = a;
    var n = new Pc(0, 600);
    n.Ba = b;
    var q = new Pc(0, 600);
    q.Ba = c;
    var x = new Pc(0, 600);
    x.Ba = d;
    var s = new Pc(0, 600);
    s.Ba = e
  }else {
    Tc = a, Uc = u, Vc = b, Wc = u, Xc = c, Zc = u, $c = d, ad = u, bd = e, cd = u
  }
})();
var dd = {}, M = {}, ed = {}, fd = {};
function N(a, b, c, d, e) {
  if(b) {
    if(v(b)) {
      for(var g = 0;g < b.length;g++) {
        N(a, b[g], c, d, e)
      }
      return k
    }else {
      var d = !!d, h = M;
      b in h || (h[b] = Tc());
      h = h[b];
      d in h || (h[d] = Tc(), h.e++);
      var h = h[d], l = ka(a), n;
      h.pa++;
      if(h[l]) {
        n = h[l];
        for(g = 0;g < n.length;g++) {
          if(h = n[g], h.Jb == c && h.Xc == e) {
            if(h.nb) {
              break
            }
            return n[g].key
          }
        }
      }else {
        n = h[l] = Vc(), h.e++
      }
      g = Xc();
      g.src = a;
      h = $c();
      h.jc(c, g, a, b, d, e);
      c = h.key;
      g.key = c;
      n.push(h);
      dd[c] = h;
      ed[l] || (ed[l] = Vc());
      ed[l].push(h);
      a.addEventListener ? (a == t || !a.Nd) && a.addEventListener(b, g, d) : a.attachEvent(b in fd ? fd[b] : fd[b] = "on" + b, g);
      return c
    }
  }else {
    f(Error("Invalid event type"))
  }
}
function gd(a, b, c, d, e) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      gd(a, b[g], c, d, e)
    }
    return k
  }
  a = N(a, b, c, d, e);
  dd[a].Gd = j;
  return a
}
function hd(a, b, c, d, e) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      hd(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = id(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Jb == c && a[g].capture == d && a[g].Xc == e) {
          jd(a[g].key);
          break
        }
      }
    }
  }
}
function jd(a) {
  if(!dd[a]) {
    return m
  }
  var b = dd[a];
  if(b.nb) {
    return m
  }
  var c = b.src, d = b.type, e = b.Zf, g = b.capture;
  c.removeEventListener ? (c == t || !c.Nd) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in fd ? fd[d] : fd[d] = "on" + d, e);
  c = ka(c);
  e = M[d][g][c];
  if(ed[c]) {
    var h = ed[c];
    bb(h, b);
    h.length == 0 && delete ed[c]
  }
  b.nb = j;
  e.Sf = j;
  kd(d, g, c, e);
  delete dd[a];
  return j
}
function kd(a, b, c, d) {
  if(!d.dd && d.Sf) {
    for(var e = 0, g = 0;e < d.length;e++) {
      if(d[e].nb) {
        var h = d[e].Zf;
        h.src = k;
        Zc(h);
        ad(d[e])
      }else {
        e != g && (d[g] = d[e]), g++
      }
    }
    d.length = g;
    d.Sf = m;
    g == 0 && (Wc(d), delete M[a][b][c], M[a][b].e--, M[a][b].e == 0 && (Uc(M[a][b]), delete M[a][b], M[a].e--), M[a].e == 0 && (Uc(M[a]), delete M[a]))
  }
}
function ld(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Ra(ed, function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          jd(g.key), c++
        }
      }
    })
  }else {
    if(a = ka(a), ed[a]) {
      for(var a = ed[a], e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          jd(g.key), c++
        }
      }
    }
  }
}
function id(a, b, c) {
  var d = M;
  return b in d && (d = d[b], c in d && (d = d[c], a = ka(a), d[a])) ? d[a] : k
}
function nd(a, b, c, d, e) {
  var g = 1, b = ka(b);
  if(a[b]) {
    a.pa--;
    a = a[b];
    a.dd ? a.dd++ : a.dd = 1;
    try {
      for(var h = a.length, l = 0;l < h;l++) {
        var n = a[l];
        n && !n.nb && (g &= od(n, e) !== m)
      }
    }finally {
      a.dd--, kd(c, d, b, a)
    }
  }
  return Boolean(g)
}
function od(a, b) {
  var c = a.handleEvent(b);
  a.Gd && jd(a.key);
  return c
}
Yc(function(a, b) {
  if(!dd[a]) {
    return j
  }
  var c = dd[a], d = c.type, e = M;
  if(!(d in e)) {
    return j
  }
  var e = e[d], g, h;
  if(!Bc) {
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
    q = bd();
    q.jc(g, this);
    g = j;
    try {
      if(l) {
        for(var s = Vc(), y = q.currentTarget;y;y = y.parentNode) {
          s.push(y)
        }
        h = e[j];
        h.pa = h.e;
        for(var D = s.length - 1;!q.mb && D >= 0 && h.pa;D--) {
          q.currentTarget = s[D], g &= nd(h, s[D], d, j, q)
        }
        if(n) {
          h = e[m];
          h.pa = h.e;
          for(D = 0;!q.mb && D < s.length && h.pa;D++) {
            q.currentTarget = s[D], g &= nd(h, s[D], d, m, q)
          }
        }
      }else {
        g = od(c, q)
      }
    }finally {
      if(s) {
        s.length = 0, Wc(s)
      }
      q.f();
      cd(q)
    }
    return g
  }
  d = new Ic(b, this);
  try {
    g = od(c, d)
  }finally {
    d.f()
  }
  return g
});
var pd = 0;
function qd() {
}
C(qd, L);
r = qd.prototype;
r.Nd = j;
r.gd = k;
r.De = aa("gd");
r.addEventListener = function(a, b, c, d) {
  N(this, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  hd(this, a, b, c, d)
};
r.dispatchEvent = function(a) {
  var b = a.type || a, c = M;
  if(b in c) {
    if(w(a)) {
      a = new Fc(a, this)
    }else {
      if(a instanceof Fc) {
        a.target = a.target || this
      }else {
        var d = a, a = new Fc(b, this);
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
        a.currentTarget = e[h], d &= nd(g, e[h], a.type, j, a) && a.uc != m
      }
    }
    if(m in c) {
      if(g = c[m], g.pa = g.e, b) {
        for(h = 0;!a.mb && h < e.length && g.pa;h++) {
          a.currentTarget = e[h], d &= nd(g, e[h], a.type, m, a) && a.uc != m
        }
      }else {
        for(e = this;!a.mb && e && g.pa;e = e.gd) {
          a.currentTarget = e, d &= nd(g, e, a.type, m, a) && a.uc != m
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
  qd.d.c.call(this);
  ld(this);
  this.gd = k
};
function rd(a, b) {
  this.$c = a || 1;
  this.Bc = b || sd;
  this.Ed = A(this.Ah, this);
  this.ke = B()
}
C(rd, qd);
rd.prototype.enabled = m;
var sd = t.window;
r = rd.prototype;
r.ta = k;
r.Ah = function() {
  if(this.enabled) {
    var a = B() - this.ke;
    if(a > 0 && a < this.$c * 0.8) {
      this.ta = this.Bc.setTimeout(this.Ed, this.$c - a)
    }else {
      if(this.dispatchEvent(td), this.enabled) {
        this.ta = this.Bc.setTimeout(this.Ed, this.$c), this.ke = B()
      }
    }
  }
};
r.start = function() {
  this.enabled = j;
  if(!this.ta) {
    this.ta = this.Bc.setTimeout(this.Ed, this.$c), this.ke = B()
  }
};
r.stop = function() {
  this.enabled = m;
  if(this.ta) {
    this.Bc.clearTimeout(this.ta), this.ta = k
  }
};
r.c = function() {
  rd.d.c.call(this);
  this.stop();
  delete this.Bc
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
  this.Fc = [];
  this.Xe = a;
  this.ff = b || k
}
r = ud.prototype;
r.Na = m;
r.gc = m;
r.pc = 0;
r.Ie = m;
r.Ag = m;
r.Fd = 0;
r.cancel = function(a) {
  if(this.Na) {
    this.tc instanceof ud && this.tc.cancel()
  }else {
    if(this.D) {
      var b = this.D;
      delete this.D;
      a ? b.cancel(a) : (b.Fd--, b.Fd <= 0 && b.cancel())
    }
    this.Xe ? this.Xe.call(this.ff, this) : this.Ie = j;
    this.Na || this.cc(new vd(this))
  }
};
r.$e = function(a, b) {
  wd(this, a, b);
  this.pc--;
  this.pc == 0 && this.Na && xd(this)
};
function wd(a, b, c) {
  a.Na = j;
  a.tc = c;
  a.gc = !b;
  xd(a)
}
function yd(a) {
  if(a.Na) {
    a.Ie || f(new zd(a)), a.Ie = m
  }
}
function Ad(a, b) {
  yd(a);
  wd(a, j, b)
}
r.cc = function(a) {
  yd(this);
  wd(this, m, a)
};
function Bd(a, b) {
  Cd(a, b, k, i)
}
function Cd(a, b, c, d) {
  a.Fc.push([b, c, d]);
  a.Na && xd(a)
}
function Dd(a, b) {
  Cd(a, b, b, i)
}
function Ed(a) {
  return Ya(a.Fc, function(a) {
    return z(a[1])
  })
}
function xd(a) {
  a.Pe && a.Na && Ed(a) && (t.clearTimeout(a.Pe), delete a.Pe);
  a.D && (a.D.Fd--, delete a.D);
  for(var b = a.tc, c = m, d = m;a.Fc.length && a.pc == 0;) {
    var e = a.Fc.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.gc ? h : g) {
      try {
        var l = g.call(e || a.ff, b);
        if(fa(l)) {
          a.gc = a.gc && (l == b || l instanceof Error), a.tc = b = l
        }
        b instanceof ud && (d = j, a.pc++)
      }catch(n) {
        b = n, a.gc = j, Ed(a) || (c = j)
      }
    }
  }
  a.tc = b;
  if(d && a.pc) {
    Cd(b, A(a.$e, a, j), A(a.$e, a, m)), b.Ag = j
  }
  if(c) {
    a.Pe = t.setTimeout(function() {
      fa(b.message) && b.stack && (b.message += "\n" + b.stack);
      f(b)
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
  b.cc(a);
  return b
}
function zd(a) {
  qa.call(this);
  this.Eg = a
}
C(zd, qa);
zd.prototype.message = "Already called";
function vd(a) {
  qa.call(this);
  this.Eg = a
}
C(vd, qa);
vd.prototype.message = "Deferred was cancelled";
function Hd(a) {
  this.O = a;
  this.Lc = [];
  this.lf = [];
  this.zg = A(this.Eh, this)
}
Hd.prototype.ta = k;
function Id(a, b, c, d) {
  a.Lc.push([b, c, d]);
  if(a.ta == k) {
    a.ta = a.O.setTimeout(a.zg, 0)
  }
}
Hd.prototype.Eh = function() {
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
    a = this.lf;
    this.lf = [];
    for(b = 0;b < a.length;b++) {
      Ad(a[b], k)
    }
  }
};
var Jd = new Hd(t.window);
function Kd(a, b) {
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
        a.push('<property id="', d, '">'), Kd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if(typeof b.getFullYear == "function") {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && ea(b[c]) != "function" && (a.push('<property id="', wa(c), '">'), Kd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function Ld(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, e = arguments;
  d.push("<arguments>");
  for(var g = e.length, h = 1;h < g;h++) {
    Kd(d, e[h])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;function Md() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ B()).toString(36)
}
function Nd(a) {
  return a.substr(0, a.length - 1)
}
var Od = /^(0|[1-9]\d*)$/, Pd = /^(0|\-?[1-9]\d*)$/;
function Qd(a) {
  var b = Rd;
  return Od.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function Sd(a) {
  this.p = new Rb;
  a && this.Cd(a)
}
function Td(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + ka(a) : b.substr(0, 1) + a
}
r = Sd.prototype;
r.W = function() {
  return this.p.W()
};
r.add = function(a) {
  this.p.set(Td(a), a)
};
r.Cd = function(a) {
  for(var a = Nb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
r.xe = function(a) {
  for(var a = Nb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
r.remove = function(a) {
  return this.p.remove(Td(a))
};
r.clear = function() {
  this.p.clear()
};
r.Qa = function() {
  return this.p.Qa()
};
r.contains = function(a) {
  return this.p.ea(Td(a))
};
r.Y = function() {
  return this.p.Y()
};
r.A = function() {
  return new Sd(this)
};
r.n = function(a) {
  return this.W() == Mb(a) && Ud(this, a)
};
function Ud(a, b) {
  var c = Mb(b);
  if(a.W() > c) {
    return m
  }
  !(b instanceof Sd) && c > 5 && (b = new Sd(b));
  return Qb(a, function(a) {
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
;function Vd(a) {
  return Wd(a || arguments.callee.caller, [])
}
function Wd(a, b) {
  var c = [];
  if($a(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(Xd(a) + "(");
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
            g = (g = Xd(g)) ? g : "[fn]";
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
        c.push(Wd(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Xd(a) {
  if(Yd[a]) {
    return Yd[a]
  }
  a = String(a);
  if(!Yd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Yd[a] = b ? b[1] : "[Anonymous]"
  }
  return Yd[a]
}
var Yd = {};
function Zd(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Zd.prototype.qh = 0;
Zd.prototype.Ud = k;
Zd.prototype.Td = k;
var $d = 0;
Zd.prototype.reset = function(a, b, c, d, e) {
  this.qh = typeof e == "number" ? e : $d++;
  this.kg = d || B();
  this.Ib = a;
  this.Pf = b;
  this.ah = c;
  delete this.Ud;
  delete this.Td
};
Zd.prototype.od = aa("Ib");
function ae(a) {
  this.pe = a
}
ae.prototype.D = k;
ae.prototype.Ib = k;
ae.prototype.P = k;
ae.prototype.ic = k;
function be(a, b) {
  this.name = a;
  this.value = b
}
be.prototype.toString = o("name");
var ce = new be("OFF", Infinity), de = new be("SHOUT", 1200), ee = new be("SEVERE", 1E3), fe = new be("WARNING", 900), ge = new be("INFO", 800), he = new be("CONFIG", 700), ie = new be("FINE", 500), je = new be("FINEST", 300), ke = new be("ALL", 0);
r = ae.prototype;
r.getParent = o("D");
r.od = aa("Ib");
function le(a) {
  if(a.Ib) {
    return a.Ib
  }
  if(a.D) {
    return le(a.D)
  }
  Ja("Root logger has no level set.");
  return k
}
r.log = function(a, b, c) {
  if(a.value >= le(this).value) {
    a = this.Pg(a, b, c);
    b = "log:" + a.Pf;
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.ic) {
        for(var e = 0, g = i;g = c.ic[e];e++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
r.Pg = function(a, b, c) {
  var d = new Zd(a, String(b), this.pe);
  if(c) {
    d.Ud = c;
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
          n = c.lineNumber || c.Yi || "Not available"
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
      e = "Message: " + wa(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + wa(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + wa(Vd(g) + "-> ")
    }catch(D) {
      e = "Exception trying to expose exception! You win, we lose. " + D
    }
    d.Td = e
  }
  return d
};
function me(a, b) {
  a.log(ee, b, i)
}
function O(a, b) {
  a.log(fe, b, i)
}
r.info = function(a, b) {
  this.log(ge, a, b)
};
function P(a, b) {
  a.log(ie, b, i)
}
function Q(a, b) {
  a.log(je, b, i)
}
var ne = {}, oe = k;
function pe() {
  oe || (oe = new ae(""), ne[""] = oe, oe.od(he))
}
function qe() {
  pe();
  return oe
}
function R(a) {
  pe();
  var b;
  if(!(b = ne[a])) {
    b = new ae(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = R(a.substr(0, c));
    if(!c.P) {
      c.P = {}
    }
    c.P[d] = b;
    b.D = c;
    ne[a] = b
  }
  return b
}
;function re(a, b) {
  this.S = "_" + Md();
  this.vd = a;
  this.Va = b;
  this.$a = a.$a
}
C(re, L);
r = re.prototype;
r.Kb = j;
r.Ld = m;
r.a = R("cw.net.FlashSocket");
r.s = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.S);
  a.push("'>")
};
function se(a, b, c) {
  b == "frames" ? (a = a.Va, te(a.N), ue(a.N, c)) : b == "stillreceiving" ? (c = a.Va, Q(c.a, "onstillreceiving"), te(c.N)) : b == "connect" ? (c = a.Va, c.a.info("onconnect"), te(c.N), a = c.Vb, c.Vb = k, a.length && (Q(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.rd.Ec(a))) : b == "close" ? (a.Kb = m, a.f()) : b == "ioerror" ? (a.Kb = m, b = a.Va, O(b.a, "onioerror: " + H(c)), ve(b.N, m), a.f()) : b == "securityerror" ? (a.Kb = m, b = a.Va, O(b.a, "onsecurityerror: " + H(c)), 
  ve(b.N, m), a.f()) : f(Error("bad event: " + b))
}
function we(a) {
  a.Ld = j;
  a.Kb = m;
  a.f()
}
r.Jd = function(a, b) {
  try {
    var c = this.$a.CallFunction(Ld("__FC_connect", this.S, a, b, "<int32/>\n"))
  }catch(d) {
    return me(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), we(this)
  }
  c != '"OK"' && f(Error("__FC_connect failed? ret: " + c))
};
r.Ec = function(a) {
  try {
    var b = this.$a.CallFunction(Ld("__FC_writeFrames", this.S, a))
  }catch(c) {
    return me(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), we(this)
  }
  b != '"OK"' && (b == '"no such instance"' ? (O(this.a, "Flash no longer knows of " + this.S + "; disposing."), this.f()) : f(Error("__FC_writeFrames failed? ret: " + b)))
};
r.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.Kb);
  re.d.c.call(this);
  var a = this.$a;
  delete this.$a;
  if(this.Kb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(Ld("__FC_close", this.S)))
    }catch(b) {
      me(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Ld = j
    }
  }
  if(this.Ld) {
    a = this.Va, O(a.a, "oncrash"), ve(a.N, j)
  }else {
    this.Va.onclose()
  }
  delete this.Va;
  delete this.vd.Cb[this.S]
};
function xe(a, b) {
  this.M = a;
  this.$a = b;
  this.Cb = {};
  this.Hd = "__FST_" + Md();
  t[this.Hd] = A(this.Ig, this);
  var c = b.CallFunction(Ld("__FC_setCallbackFunc", this.Hd));
  c != '"OK"' && f(Error("__FC_setCallbackFunc failed? ret: " + c))
}
C(xe, L);
r = xe.prototype;
r.a = R("cw.net.FlashSocketTracker");
r.s = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  G(this.Cb, a, b);
  a.push(">")
};
r.Md = function(a) {
  a = new re(this, a);
  return this.Cb[a.S] = a
};
r.Gg = function(a, b, c, d) {
  var e = this.Cb[a];
  e ? b == "frames" && d ? (se(e, "ioerror", "FlashConnector hadError while handling data."), e.f()) : se(e, b, c) : O(this.a, "Cannot dispatch because we have no instance: " + H([a, b, c, d]))
};
r.Ig = function(a, b, c, d) {
  try {
    Id(this.M, this.Gg, this, [a, b, c, d])
  }catch(e) {
    t.window.setTimeout(function() {
      f(e)
    }, 0)
  }
};
r.c = function() {
  xe.d.c.call(this);
  for(var a = Sa(this.Cb);a.length;) {
    a.pop().f()
  }
  delete this.Cb;
  delete this.$a;
  t[this.Hd] = i
};
function ye(a) {
  this.N = a;
  this.Vb = []
}
C(ye, L);
r = ye.prototype;
r.a = R("cw.net.FlashSocketConduit");
r.Ec = function(a) {
  this.Vb ? (Q(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Vb.push.apply(this.Vb, a)) : (Q(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.rd.Ec(a))
};
r.Jd = function(a, b) {
  this.rd.Jd(a, b)
};
r.onclose = function() {
  this.a.info("onclose");
  ve(this.N, m)
};
r.c = function() {
  this.a.info("in disposeInternal.");
  ye.d.c.call(this);
  this.rd.f();
  delete this.N
};
function ze() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function Ae(a) {
  return a * Math.PI / 180
}
;var Rd = Math.pow(2, 53);
var Be = {ug:p("<cw.eq.Wildcard>")};
function Ce(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function De(a, b, c) {
  var d = ea(a), e = ea(b);
  if(a == Be || b == Be) {
    return j
  }else {
    if(a != k && typeof a.n == "function") {
      return c && c.push("running custom equals function on left object"), a.n(b, c)
    }else {
      if(b != k && typeof b.n == "function") {
        return c && c.push("running custom equals function on right object"), b.n(a, c)
      }else {
        if(Ce(d) || Ce(e)) {
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
                      if(!De(a[d], b[d], c)) {
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
                if(a.tg == cc && b.tg == cc) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = m;
                        break a
                      }
                      if(!De(a[g], b[g], c)) {
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
function Ee() {
  var a = [];
  this.oa(a);
  return a.join("")
}
function Fe() {
}
Fe.prototype.n = function(a, b) {
  return!(a instanceof Fe) ? m : De(Ge(this), Ge(a), b)
};
Fe.prototype.s = function(a, b) {
  a.push("<HelloFrame properties=");
  G(Ge(this), a, b);
  a.push(">")
};
function Ge(a) {
  return[a.Rb, a.Yf, a.Af, a.ag, a.Ac, a.Le, a.Rf, a.Nf, a.oe, a.Lf, a.pg, a.jg, a.ra, a.cd]
}
Fe.prototype.ga = Ee;
Fe.prototype.oa = function(a) {
  var b = {};
  b.tnum = this.Rb;
  b.ver = this.Yf;
  b.format = this.Af;
  b["new"] = this.ag;
  b.id = this.Ac;
  b.ming = this.Le;
  b.pad = this.Rf;
  b.maxb = this.Nf;
  if(fa(this.oe)) {
    b.maxt = this.oe
  }
  b.maxia = this.Lf;
  b.tcpack = this.pg;
  b.eeds = this.jg;
  b.sack = this.ra instanceof Xb ? Nd((new He(this.ra)).ga()) : this.ra;
  b.seenack = this.cd instanceof Xb ? Nd((new He(this.cd)).ga()) : this.cd;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push(Fb(b), "H")
};
function Ie(a) {
  this.Qb = a
}
Ie.prototype.n = function(a) {
  return a instanceof Ie && this.Qb == a.Qb
};
Ie.prototype.s = function(a, b) {
  a.push("new StringFrame(");
  G(this.Qb, a, b);
  a.push(")")
};
Ie.prototype.ga = Ee;
Ie.prototype.oa = function(a) {
  a.push(this.Qb, " ")
};
function Je(a) {
  this.Hc = a
}
Je.prototype.n = function(a) {
  return a instanceof Je && this.Hc == a.Hc
};
Je.prototype.s = function(a, b) {
  a.push("new CommentFrame(");
  G(this.Hc, a, b);
  a.push(")")
};
Je.prototype.ga = Ee;
Je.prototype.oa = function(a) {
  a.push(this.Hc, "^")
};
function Ke(a) {
  this.xc = a
}
Ke.prototype.n = function(a) {
  return a instanceof Ke && this.xc == a.xc
};
Ke.prototype.s = function(a) {
  a.push("new SeqNumFrame(", String(this.xc), ")")
};
Ke.prototype.ga = Ee;
Ke.prototype.oa = function(a) {
  a.push(String(this.xc), "N")
};
function Le(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return k
  }
  a: {
    var c = b[1], a = Rd;
    if(Pd.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
      var g = Qd(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Xb(a, c)
}
function He(a) {
  this.ra = a
}
He.prototype.n = function(a, b) {
  return a instanceof He && this.ra.n(a.ra, b)
};
He.prototype.s = function(a, b) {
  a.push("new SackFrame(");
  G(this.ra, a, b);
  a.push(")")
};
He.prototype.ga = Ee;
He.prototype.oa = function(a) {
  var b = this.ra;
  a.push(b.ob.join(","), "|", String(b.tb));
  a.push("A")
};
function Me(a) {
  this.mc = a
}
Me.prototype.n = function(a, b) {
  return a instanceof Me && this.mc.n(a.mc, b)
};
Me.prototype.s = function(a, b) {
  a.push("new StreamStatusFrame(");
  G(this.mc, a, b);
  a.push(")")
};
Me.prototype.ga = Ee;
Me.prototype.oa = function(a) {
  var b = this.mc;
  a.push(b.ob.join(","), "|", String(b.tb));
  a.push("T")
};
function Ne() {
}
Ne.prototype.s = function(a) {
  a.push("new StreamCreatedFrame()")
};
Ne.prototype.n = function(a) {
  return a instanceof Ne
};
Ne.prototype.ga = Ee;
Ne.prototype.oa = function(a) {
  a.push("C")
};
function Oe() {
}
Oe.prototype.s = function(a) {
  a.push("new YouCloseItFrame()")
};
Oe.prototype.n = function(a) {
  return a instanceof Oe
};
Oe.prototype.ga = Ee;
Oe.prototype.oa = function(a) {
  a.push("Y")
};
function Pe(a, b) {
  this.rc = a;
  this.Ub = b
}
Pe.prototype.n = function(a) {
  return a instanceof Pe && this.rc == a.rc && this.Ub == a.Ub
};
Pe.prototype.s = function(a, b) {
  a.push("new ResetFrame(");
  G(this.rc, a, b);
  a.push(", ", String(this.Ub), ")")
};
Pe.prototype.ga = Ee;
Pe.prototype.oa = function(a) {
  a.push(this.rc, "|", String(Number(this.Ub)), "!")
};
var Qe = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Re(a) {
  this.reason = a
}
Re.prototype.n = function(a) {
  return a instanceof Re && this.reason == a.reason
};
Re.prototype.s = function(a, b) {
  a.push("new TransportKillFrame(");
  G(this.reason, a, b);
  a.push(")")
};
Re.prototype.ga = Ee;
Re.prototype.oa = function(a) {
  a.push(this.reason, "K")
};
function Se(a) {
  a || f(new S("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new Ie(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = Le(Nd(a)), a == k && f(new S("bad sack")), new He(a)
    }else {
      if(b == "N") {
        return a = Qd(Nd(a)), a == k && f(new S("bad seqNum")), new Ke(a)
      }else {
        if(b == "T") {
          return a = Le(Nd(a)), a == k && f(new S("bad lastSackSeen")), new Me(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && f(new S("leading garbage")), new Oe
          }else {
            if(b == "^") {
              return new Je(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && f(new S("leading garbage")), new Ne
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && f(new S("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && f(new S("bad applicationLevel")), new Pe(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = Qe[a], a == k && f(new S("unknown kill reason: " + a)), new Re(a)
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
;var Te = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Ue(a, b) {
  var c = a.match(Te), d = b.match(Te);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Ve(a, b) {
  var c;
  a instanceof Ve ? (this.Nb(b == k ? a.ya : b), We(this, a.sa), Xe(this, a.rb), Ye(this, a.na), Ze(this, a.Ta), this.pb(a.z), $e(this, a.U.A()), af(this, a.fb)) : a && (c = String(a).match(Te)) ? (this.Nb(!!b), We(this, c[1] || "", j), Xe(this, c[2] || "", j), Ye(this, c[3] || "", j), Ze(this, c[4]), this.pb(c[5] || "", j), $e(this, c[6] || "", j), af(this, c[7] || "", j)) : (this.Nb(!!b), this.U = new bf(k, this, this.ya))
}
r = Ve.prototype;
r.sa = "";
r.rb = "";
r.na = "";
r.Ta = k;
r.z = "";
r.fb = "";
r.Zg = m;
r.ya = m;
r.toString = function() {
  if(this.ua) {
    return this.ua
  }
  var a = [];
  this.sa && a.push(cf(this.sa, df), ":");
  this.na && (a.push("//"), this.rb && a.push(cf(this.rb, df), "@"), a.push(w(this.na) ? encodeURIComponent(this.na) : k), this.Ta != k && a.push(":", String(this.Ta)));
  this.z && (this.na && this.z.charAt(0) != "/" && a.push("/"), a.push(cf(this.z, this.z.charAt(0) == "/" ? ef : ff)));
  var b = String(this.U);
  b && a.push("?", b);
  this.fb && a.push("#", cf(this.fb, gf));
  return this.ua = a.join("")
};
r.A = function() {
  var a = this.sa, b = this.rb, c = this.na, d = this.Ta, e = this.z, g = this.U.A(), h = this.fb, l = new Ve(k, this.ya);
  a && We(l, a);
  b && Xe(l, b);
  c && Ye(l, c);
  d && Ze(l, d);
  e && l.pb(e);
  g && $e(l, g);
  h && af(l, h);
  return l
};
function We(a, b, c) {
  hf(a);
  delete a.ua;
  a.sa = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.sa) {
    a.sa = a.sa.replace(/:$/, "")
  }
}
function Xe(a, b, c) {
  hf(a);
  delete a.ua;
  a.rb = c ? b ? decodeURIComponent(b) : "" : b
}
function Ye(a, b, c) {
  hf(a);
  delete a.ua;
  a.na = c ? b ? decodeURIComponent(b) : "" : b
}
function Ze(a, b) {
  hf(a);
  delete a.ua;
  b ? (b = Number(b), (isNaN(b) || b < 0) && f(Error("Bad port number " + b)), a.Ta = b) : a.Ta = k
}
r.pb = function(a, b) {
  hf(this);
  delete this.ua;
  this.z = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function $e(a, b, c) {
  hf(a);
  delete a.ua;
  b instanceof bf ? (a.U = b, a.U.Qe = a, a.U.Nb(a.ya)) : (c || (b = cf(b, jf)), a.U = new bf(b, a, a.ya))
}
function af(a, b, c) {
  hf(a);
  delete a.ua;
  a.fb = c ? b ? decodeURIComponent(b) : "" : b
}
function hf(a) {
  a.Zg && f(Error("Tried to modify a read-only Uri"))
}
r.Nb = function(a) {
  this.ya = a;
  this.U && this.U.Nb(a);
  return this
};
function kf(a) {
  return a instanceof Ve ? a.A() : new Ve(a, i)
}
var lf = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function cf(a, b) {
  var c = k;
  w(a) && (c = a, lf.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, mf)));
  return c
}
function mf(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var df = /[#\/\?@]/g, ff = /[\#\?:]/g, ef = /[\#\?]/g, jf = /[\#\?@]/g, gf = /#/g;
function bf(a, b, c) {
  this.Da = a || k;
  this.Qe = b || k;
  this.ya = !!c
}
function nf(a) {
  if(!a.o && (a.o = new Rb, a.e = 0, a.Da)) {
    for(var b = a.Da.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, g = k;
      d >= 0 ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = of(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
r = bf.prototype;
r.o = k;
r.e = k;
r.W = function() {
  nf(this);
  return this.e
};
r.add = function(a, b) {
  nf(this);
  pf(this);
  a = of(this, a);
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
  nf(this);
  a = of(this, a);
  if(this.o.ea(a)) {
    pf(this);
    var b = this.o.get(a);
    v(b) ? this.e -= b.length : this.e--;
    return this.o.remove(a)
  }
  return m
};
r.clear = function() {
  pf(this);
  this.o && this.o.clear();
  this.e = 0
};
r.Qa = function() {
  nf(this);
  return this.e == 0
};
r.ea = function(a) {
  nf(this);
  a = of(this, a);
  return this.o.ea(a)
};
r.Ic = function(a) {
  var b = this.Y();
  return $a(b, a)
};
r.Ha = function() {
  nf(this);
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
  nf(this);
  if(a) {
    if(a = of(this, a), this.ea(a)) {
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
  nf(this);
  pf(this);
  a = of(this, a);
  if(this.ea(a)) {
    var c = this.o.get(a);
    v(c) ? this.e -= c.length : this.e--
  }
  this.o.set(a, b);
  this.e++;
  return this
};
r.get = function(a, b) {
  nf(this);
  a = of(this, a);
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
function pf(a) {
  delete a.zb;
  delete a.Da;
  a.Qe && delete a.Qe.ua
}
r.A = function() {
  var a = new bf;
  if(this.zb) {
    a.zb = this.zb
  }
  if(this.Da) {
    a.Da = this.Da
  }
  if(this.o) {
    a.o = this.o.A()
  }
  return a
};
function of(a, b) {
  var c = String(b);
  a.ya && (c = c.toLowerCase());
  return c
}
r.Nb = function(a) {
  a && !this.ya && (nf(this), pf(this), Pb(this.o, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ya = a
};
r.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Pb(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
var qf;
function rf(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function sf(a, b) {
  var c = rf(a), d = gb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    $a(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function tf(a, b) {
  var c = rf(a), d = gb(arguments, 1), e;
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
var uf = !I || zc();
!mc && !I || I && zc() || mc && K("1.9.1");
var vf = I && !K("9");
function wf(a) {
  return a ? new xf(yf(a)) : qf || (qf = new xf)
}
function U(a) {
  return w(a) ? document.getElementById(a) : a
}
function zf(a, b, c, d) {
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
function Af(a, b) {
  Ra(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in Bf ? a.setAttribute(Bf[d], b) : d.lastIndexOf("aria-", 0) == 0 ? a.setAttribute(d, b) : a[d] = b
  })
}
var Bf = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Cf(a, b, c) {
  return Df(document, arguments)
}
function Df(a, b) {
  var c = b[0], d = b[1];
  if(!uf && d && (d.name || d.type)) {
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
    w(d) ? c.className = d : v(d) ? sf.apply(k, [c].concat(d)) : Af(c, d)
  }
  b.length > 2 && Ef(a, c, b, 2);
  return c
}
function Ef(a, b, c, d) {
  function e(c) {
    c && b.appendChild(w(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && g.nodeType > 0) ? F(Ff(g) ? db(g) : g, e) : e(g)
  }
}
function Gf(a, b) {
  Ef(yf(a), a, arguments, 1)
}
function Hf(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function If(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Jf(a, b) {
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
function yf(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
function Kf(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && a.firstChild.nodeType == 3) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      Hf(a), a.appendChild(yf(a).createTextNode(b))
    }
  }
}
var Lf = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Mf = {IMG:" ", BR:"\n"};
function Nf(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ja(a) && a >= 0 && a < 32768) : m
}
function Of(a) {
  var b = [];
  Pf(a, b, m);
  return b.join("")
}
function Pf(a, b, c) {
  if(!(a.nodeName in Lf)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Mf) {
        b.push(Mf[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Pf(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Ff(a) {
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
function xf(a) {
  this.B = a || t.document || document
}
r = xf.prototype;
r.Ga = wf;
r.b = function(a) {
  return w(a) ? this.B.getElementById(a) : a
};
r.i = function(a, b, c) {
  return Df(this.B, arguments)
};
r.createElement = function(a) {
  return this.B.createElement(a)
};
r.createTextNode = function(a) {
  return this.B.createTextNode(a)
};
r.cf = function(a, b, c) {
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
r.append = Gf;
r.contains = Jf;
function Qf(a, b, c, d) {
  this.contentWindow = a;
  this.Mc = b;
  this.Me = c;
  this.Ng = d
}
Qf.prototype.s = function(a, b) {
  a.push("<XDRFrame frameId=");
  G(this.Ng, a, b);
  a.push(", expandedUrl=");
  G(this.Mc, a, b);
  a.push(", streams=");
  G(this.Me, a, b);
  a.push(">")
};
function Rf() {
  this.frames = [];
  this.me = new Rb
}
Rf.prototype.a = R("cw.net.XDRTracker");
function Sf(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + String(Math.floor(ze())) + String(Math.floor(ze()))
  })
}
function Tf(a, b) {
  for(var c = Uf, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = e.Me.length == 0) {
      g = e.Mc;
      var h = String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + H(b) + " existing frame " + H(e)), Fd(e)
    }
  }
  d = Md() + Md();
  e = Sf(a);
  g = t.location;
  g instanceof Ve || (g = kf(g));
  e instanceof Ve || (e = kf(e));
  var l = g;
  g = l.A();
  (h = !!e.sa) ? We(g, e.sa) : h = !!e.rb;
  h ? Xe(g, e.rb) : h = !!e.na;
  h ? Ye(g, e.na) : h = e.Ta != k;
  var n = e.z;
  if(h) {
    Ze(g, e.Ta)
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
  h ? g.pb(n) : h = e.U.toString() !== "";
  if(h) {
    l = e.U;
    if(!l.zb) {
      l.zb = l.toString() ? decodeURIComponent(l.toString()) : ""
    }
    $e(g, l.zb, i)
  }else {
    h = !!e.fb
  }
  h && af(g, e.fb);
  e = g.toString();
  g = String(t.location).match(Te)[3] || k;
  h = e.match(Te)[3] || k;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + H(b)), c = Fd(new Qf(t, e, [b], k))) : (g = U("minerva-elements"), h = new ud, c.me.set(d, [h, e, b]), c.a.info("Creating new XDRFrame " + H(d) + "for " + H(b)), c = Cf("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + d}), g.appendChild(c), c = h);
  return c
}
Rf.prototype.Kh = function(a) {
  var b = this.me.get(a);
  b || f(Error("Unknown frameId " + H(a)));
  this.me.remove(b);
  var c = b[0], a = new Qf(U("minerva-xdrframe-" + a).contentWindow || (J ? U("minerva-xdrframe-" + a).document || U("minerva-xdrframe-" + a).contentWindow.document : U("minerva-xdrframe-" + a).contentDocument || U("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (J ? U("minerva-xdrframe-" + a).document || U("minerva-xdrframe-" + a).contentWindow.document : U("minerva-xdrframe-" + a).contentDocument || U("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  Ad(c, a)
};
var Uf = new Rf;
t.__XHRTracker_xdrFrameLoaded = A(Uf.Kh, Uf);
var Vf;
Vf = m;
var Wf = ic();
Wf && (Wf.indexOf("Firefox") != -1 || Wf.indexOf("Camino") != -1 || Wf.indexOf("iPhone") != -1 || Wf.indexOf("iPod") != -1 || Wf.indexOf("iPad") != -1 || Wf.indexOf("Android") != -1 || Wf.indexOf("Chrome") != -1 && (Vf = j));
var Xf = Vf;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function Yf(a, b, c, d, e, g) {
  ud.call(this, e, g);
  this.Jf = a;
  this.Od = [];
  this.mf = !!b;
  this.Lg = !!c;
  this.Bg = !!d;
  for(b = 0;b < a.length;b++) {
    Cd(a[b], A(this.vf, this, b, j), A(this.vf, this, b, m))
  }
  a.length == 0 && !this.mf && Ad(this, this.Od)
}
C(Yf, ud);
Yf.prototype.Tf = 0;
Yf.prototype.vf = function(a, b, c) {
  this.Tf++;
  this.Od[a] = [b, c];
  this.Na || (this.mf && b ? Ad(this, [a, c]) : this.Lg && !b ? this.cc(c) : this.Tf == this.Jf.length && Ad(this, this.Od));
  this.Bg && !b && (c = k);
  return c
};
Yf.prototype.cc = function(a) {
  Yf.d.cc.call(this, a);
  F(this.Jf, function(a) {
    a.cancel()
  })
};
function Zf(a) {
  a = new Yf(a, m, j);
  Bd(a, function(a) {
    return Xa(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function $f(a, b) {
  this.Ih = a;
  this.Mf = b
}
$f.prototype.je = 0;
$f.prototype.fd = 0;
$f.prototype.Vd = m;
function ag(a) {
  var b = [];
  if(a.Vd) {
    return[b, 2]
  }
  var c = a.je, d = a.Ih.responseText;
  for(a.je = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var e = d.substr(a.fd, c - a.fd), e = e.replace(/\r$/, "");
    if(e.length > a.Mf) {
      return a.Vd = j, [b, 2]
    }
    b.push(e);
    a.fd = c += 1
  }
  return a.je - a.fd - 1 > a.Mf ? (a.Vd = j, [b, 2]) : [b, 1]
}
;function bg(a, b, c) {
  this.N = b;
  this.qa = a;
  this.Kd = c
}
C(bg, L);
r = bg.prototype;
r.a = R("cw.net.XHRMaster");
r.Xa = -1;
r.ne = function(a, b, c) {
  this.Kd.__XHRSlave_makeRequest(this.qa, a, b, c)
};
r.Pa = o("Xa");
r.re = function(a, b) {
  b != 1 && me(this.a, H(this.qa) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  te(this.N);
  ue(this.N, a)
};
r.se = function(a) {
  P(this.a, "ongotheaders_: " + H(a));
  var b = k;
  "Content-Length" in a && (b = Qd(a["Content-Length"]));
  a = this.N;
  P(a.a, a.t() + " got Content-Length: " + b);
  a.za == cg && (b == k && (O(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), dg(a, 2E3 + b / 3072 * 1E3))
};
r.te = function(a) {
  a != 1 && P(this.a, this.N.t() + "'s XHR's readyState is " + a);
  this.Xa = a;
  this.Xa >= 2 && te(this.N)
};
r.qe = function() {
  this.N.f()
};
r.c = function() {
  bg.d.c.call(this);
  delete eg.Ia[this.qa];
  this.Kd.__XHRSlave_dispose(this.qa);
  delete this.Kd
};
function fg() {
  this.Ia = {}
}
C(fg, L);
r = fg.prototype;
r.a = R("cw.net.XHRMasterTracker");
r.Md = function(a, b) {
  var c = "_" + Md(), d = new bg(c, a, b);
  return this.Ia[c] = d
};
r.re = function(a, b, c) {
  var b = cb(b), d = this.Ia[a];
  d ? d.re(b, c) : me(this.a, "onframes_: no master for " + H(a))
};
r.se = function(a, b) {
  var c = this.Ia[a];
  c ? c.se(b) : me(this.a, "ongotheaders_: no master for " + H(a))
};
r.te = function(a, b) {
  var c = this.Ia[a];
  c ? c.te(b) : me(this.a, "onreadystatechange_: no master for " + H(a))
};
r.qe = function(a) {
  var b = this.Ia[a];
  b ? (delete this.Ia[b.qa], b.qe()) : me(this.a, "oncomplete_: no master for " + H(a))
};
r.c = function() {
  fg.d.c.call(this);
  for(var a = Sa(this.Ia);a.length;) {
    a.pop().f()
  }
  delete this.Ia
};
var eg = new fg;
t.__XHRMaster_onframes = A(eg.re, eg);
t.__XHRMaster_oncomplete = A(eg.qe, eg);
t.__XHRMaster_ongotheaders = A(eg.se, eg);
t.__XHRMaster_onreadystatechange = A(eg.te, eg);
function gg(a, b, c) {
  this.host = a;
  this.port = b;
  this.Dh = c
}
function hg(a, b) {
  b || (b = a);
  this.Ua = a;
  this.Ya = b
}
hg.prototype.s = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  G(this.Ua, a, b);
  a.push(", secondaryUrl=");
  G(this.Ya, a, b);
  a.push(">")
};
function ig(a, b, c, d) {
  this.Ua = a;
  this.Xf = b;
  this.Ya = c;
  this.gg = d;
  (!(this.Ua.indexOf("http://") == 0 || this.Ua.indexOf("https://") == 0) || !(this.Ya.indexOf("http://") == 0 || this.Ya.indexOf("https://") == 0)) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Xf.location.href;
  Ue(this.Ua, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.gg.location.href;
  Ue(this.Ya, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
ig.prototype.s = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  G(this.Ua, a, b);
  a.push(", secondaryUrl=");
  G(this.Ya, a, b);
  a.push(">")
};
var jg = new Je(";)]}");
function kg() {
}
kg.prototype.qf = p(1);
function lg(a) {
  this.wh = a
}
lg.prototype.s = function(a, b) {
  a.push("<UserContext for ");
  G(this.wh, a, b);
  a.push(">")
};
function mg(a, b, c) {
  this.Q = a;
  this.xh = b ? b : new kg;
  this.M = c ? c : Jd;
  this.Cc = new Sd;
  this.Ac = Md() + Md();
  this.Wa = new Yb;
  this.ge = new $b;
  this.Dc = k;
  this.xd = [];
  this.Sb = new lg(this);
  if(J) {
    this.Dc = gd(t, "load", this.ph, m, this)
  }
}
C(mg, L);
r = mg.prototype;
r.a = R("cw.net.ClientStream");
r.Hf = new Xb(-1, []);
r.If = new Xb(-1, []);
r.eh = 50;
r.dh = 1048576;
r.ue = k;
r.onreset = k;
r.Vf = k;
r.Je = m;
r.ye = m;
r.h = 1;
r.ng = -1;
r.k = k;
r.F = k;
r.sc = k;
r.Ke = 0;
r.Wf = 0;
r.fg = 0;
r.s = function(a, b) {
  a.push("<ClientStream id=");
  G(this.Ac, a, b);
  a.push(", state=", String(this.h));
  a.push(", primary=");
  G(this.k, a, b);
  a.push(", secondary=");
  G(this.F, a, b);
  a.push(", resetting=");
  G(this.sc, a, b);
  a.push(">")
};
function ng(a) {
  var b = [-1];
  a.k && b.push(a.k.Lb);
  a.F && b.push(a.F.Lb);
  return Math.max.apply(Math.max, b)
}
function og(a) {
  if(a.h != 1) {
    var b = a.Wa.v.W() != 0, c = ac(a.ge), d = !c.n(a.If) && !(a.k && c.n(a.k.Hb) || a.F && c.n(a.F.Hb)), e = ng(a);
    if((b = b && e < a.Wa.yb) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.k.Wb) {
        Q(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.k, c != d.Hb)) {
          !d.Ja && !d.I.length && pg(d), d.I.push(new He(c)), d.Hb = c
        }
        b && qg(a.k, a.Wa, e + 1);
        a.k.Fa()
      }else {
        a.F == k ? a.Je ? (Q(a.a, "tryToSend_: creating secondary to send " + g), a.F = rg(a, m), b && qg(a.F, a.Wa, e + 1), a.F.Fa()) : (Q(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.ye = j) : Q(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
r.ph = function() {
  this.Dc = k;
  if(this.k && this.k.Db()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.k;
    a.Bd = j;
    a.f()
  }
  if(this.F && this.F.Db()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.F, a.Bd = j, a.f()
  }
};
function sg(a, b) {
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
    og(a)
  }
}
function rg(a, b) {
  var c;
  a.Q instanceof ig ? c = a.xh.qf() == 1 ? cg : tg : a.Q instanceof gg ? c = ug : f(Error("Don't support endpoint " + H(a.Q)));
  a.ng += 1;
  c = new vg(a.M, a, a.ng, c, a.Q, b);
  Q(a.a, "Created: " + c.t());
  a.Cc.add(c);
  return c
}
function wg(a, b, c) {
  var d = new xg(a.M, a, b, c);
  Q(a.a, "Created: " + d.t() + ", delay=" + b + ", times=" + c);
  a.Cc.add(d);
  return d
}
function yg(a, b) {
  a.Cc.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  P(a.a, "Offline: " + b.t());
  b.qc ? a.Ke += b.qc : a.Ke = 0;
  a.Ke >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.Sb, "stream penalty reached limit", m), a.f());
  if(a.h > 3) {
    a.h == 4 && b.sg ? (P(a.a, "Disposing because resettingTransport_ is done."), a.f()) : P(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    var c;
    var d;
    c = b instanceof xg;
    if(!c && b.Bd) {
      var e = J ? Xf ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      Q(a.a, "getDelayForNextTransport_: " + H({delay:c, times:d}))
    }else {
      d = b.Ze();
      if(b == a.k) {
        if(d) {
          e = ++a.Wf
        }else {
          if(!c) {
            e = a.Wf = 0
          }
        }
      }else {
        if(d) {
          e = ++a.fg
        }else {
          if(!c) {
            e = a.fg = 0
          }
        }
      }
      if(c || !e) {
        d = c = 0, Q(a.a, "getDelayForNextTransport_: " + H({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(Math.random() * 4E3) - 2E3, l = Math.max(0, b.og - b.Oe);
        d = (c = Math.max(0, g + h - l)) ? 1 : 0;
        Q(a.a, "getDelayForNextTransport_: " + H({count:e, base:g, variance:h, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    if(b == a.k) {
      a.k = k, c ? a.k = wg(a, e, c) : (e = ng(a), a.k = rg(a, j), qg(a.k, a.Wa, e + 1)), a.k.Fa()
    }else {
      if(b == a.F) {
        a.F = k, c ? (a.F = wg(a, e, c), a.F.Fa()) : og(a)
      }
    }
  }
}
r.reset = function(a) {
  this.h > 3 && f(Error("reset: Can't send reset in state " + this.h));
  this.h = 4;
  this.k && this.k.Wb ? (this.a.info("reset: Sending ResetFrame over existing primary."), zg(this.k, a), this.k.Fa()) : (this.k && (P(this.a, "reset: Disposing primary before sending ResetFrame."), this.k.f()), this.F && (P(this.a, "reset: Disposing secondary before sending ResetFrame."), this.F.f()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.sc = rg(this, m), zg(this.sc, a), this.sc.Fa());
  this.onreset && this.onreset.call(this.Sb, a, j)
};
function Ag(a, b, c, d) {
  var e;
  e = a.ge;
  for(var g = a.eh, h = a.dh, l = [], n = m, q = 0, x = c.length;q < x;q++) {
    var s = c[q], y = s[0], s = s[1];
    if(y == e.Gb + 1) {
      e.Gb += 1;
      for(l.push(s);;) {
        y = e.Gb + 1;
        s = e.ab.get(y, bc);
        if(s === bc) {
          break
        }
        l.push(s[0]);
        e.ab.remove(y);
        e.w -= s[1];
        e.Gb = y
      }
    }else {
      if(!(y <= e.Gb)) {
        if(g != k && e.ab.W() >= g) {
          n = j;
          break
        }
        var D = Wb(s);
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
      if(h = c[g], a.ue && a.ue.call(a.Sb, h), a.h == 4 || a.va) {
        return
      }
    }
  }
  d || og(a);
  if(!(a.h == 4 || a.va) && e) {
    me(b.a, b.t() + "'s peer caused rwin overflow."), b.f()
  }
}
r.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  this.h != 1 && f(Error("ClientStream.start: " + H(this) + " already started"));
  this.h = 2;
  if(this.Q instanceof hg) {
    var a = Tf(this.Q.Ua, this), b = Tf(this.Q.Ya, this);
    Bd(Zf([a, b]), A(this.Kg, this))
  }else {
    Bg(this)
  }
};
r.Kg = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Mc, e = a[1].Mc;
  this.xd.push(a[0]);
  this.xd.push(a[1]);
  this.Q = new ig(d, b, e, c);
  Bg(this)
};
function Bg(a) {
  a.h = 3;
  a.k = rg(a, j);
  qg(a.k, a.Wa, k);
  a.k.Fa()
}
r.c = function() {
  this.a.info(H(this) + " in disposeInternal.");
  this.h = 5;
  for(var a = this.Cc.Y(), b = 0;b < a.length;b++) {
    a[b].f()
  }
  for(a = 0;a < this.xd.length;a++) {
    bb(this.xd[a].Me, this)
  }
  if(J && this.Dc) {
    jd(this.Dc), this.Dc = k
  }
  this.Vf && this.Vf.call(this.Sb);
  delete this.Cc;
  delete this.k;
  delete this.F;
  delete this.sc;
  delete this.Sb;
  mg.d.c.call(this)
};
var cg = 1, tg = 2, ug = 3;
function vg(a, b, c, d, e, g) {
  this.M = a;
  this.H = b;
  this.Rb = c;
  this.za = d;
  this.Q = e;
  this.I = [];
  this.vb = g;
  this.Wb = !this.Db();
  this.Mb = this.za != cg;
  this.yg = A(this.Bh, this)
}
C(vg, L);
r = vg.prototype;
r.a = R("cw.net.ClientTransport");
r.q = k;
r.Oe = k;
r.og = k;
r.hd = k;
r.Ja = m;
r.sd = m;
r.Hb = k;
r.Xd = 0;
r.Lb = -1;
r.we = -1;
r.sg = m;
r.Bd = m;
r.qc = 0;
r.hc = m;
r.s = function(a) {
  a.push("<ClientTransport #", String(this.Rb), ", becomePrimary=", String(this.vb), ">")
};
r.t = function() {
  return(this.vb ? "Prim. T#" : "Sec. T#") + this.Rb
};
r.Ze = function() {
  return!(!this.hc && this.Xd)
};
r.Db = function() {
  return this.za == cg || this.za == tg
};
function Cg(a, b) {
  hb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Ag(a.H, a, b, !a.Mb)
}
function Dg(a, b, c) {
  try {
    var d = Se(b);
    a.Xd += 1;
    P(a.a, a.t() + " RECV " + H(d));
    var e;
    a.Xd == 1 && !d.n(jg) && a.Db() ? (O(a.a, a.t() + " is closing soon because got bad preamble: " + H(d)), e = j) : e = m;
    if(e) {
      return j
    }
    if(d instanceof Ie) {
      if(!/^([ -~]*)$/.test(d.Qb)) {
        return a.hc = j
      }
      a.we += 1;
      c.push([a.we, d.Qb])
    }else {
      if(d instanceof He) {
        var g = a.H, h = d.ra;
        g.Hf = h;
        var l = g.Wa, n = h.tb, c = m;
        n > l.yb && (c = j);
        for(var q = Zb(l).concat(), d = 0;d < q.length;d++) {
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
          y > l.yb && (c = j);
          l.v.ea(y) && (s = l.v.p[y][1], l.v.remove(y), l.w -= s)
        }
        l.v.Qa() && l.v.clear();
        if(c) {
          return O(a.a, a.t() + " is closing soon because got bad SackFrame"), a.hc = j
        }
      }else {
        if(d instanceof Ke) {
          a.we = d.xc - 1
        }else {
          if(d instanceof Me) {
            a.H.If = d.mc
          }else {
            if(d instanceof Oe) {
              return Q(a.a, a.t() + " is closing soon because got YouCloseItFrame"), j
            }else {
              if(d instanceof Re) {
                return a.hc = j, d.reason == "stream_attach_failure" ? a.qc += 1 : d.reason == "acked_unsent_strings" && (a.qc += 0.5), Q(a.a, a.t() + " is closing soon because got " + H(d)), j
              }else {
                if(!(d instanceof Je)) {
                  if(d instanceof Ne) {
                    var D = a.H, zj = !a.Mb;
                    Q(D.a, "Stream is now confirmed to exist at server.");
                    D.Je = j;
                    if(D.ye && !zj) {
                      D.ye = m, og(D)
                    }
                  }else {
                    if(c.length && (Cg(a, c), ab(c)), d instanceof Pe) {
                      var md = a.H;
                      md.onreset && md.onreset.call(md.Sb, d.rc, d.Ub);
                      md.f();
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
  }catch(ih) {
    return ih instanceof S || f(ih), O(a.a, a.t() + " is closing soon because got InvalidFrame: " + H(b)), a.hc = j
  }
  return m
}
function ue(a, b) {
  a.sd = j;
  try {
    for(var c = m, d = [], e = 0, g = b.length;e < g;e++) {
      if(a.va) {
        a.a.info(a.t() + " returning from loop because we're disposed.");
        return
      }
      if(c = Dg(a, b[e], d)) {
        break
      }
    }
    d.length && Cg(a, d);
    a.sd = m;
    a.I.length && a.Fa();
    c && (Q(a.a, a.t() + " closeSoon is true.  Frames were: " + H(b)), a.f())
  }finally {
    a.sd = m
  }
}
r.Bh = function() {
  O(this.a, this.t() + " timed out due to lack of connection or no data being received.");
  this.f()
};
function Eg(a) {
  if(a.hd != k) {
    a.M.O.clearTimeout(a.hd), a.hd = k
  }
}
function dg(a, b) {
  Eg(a);
  b = Math.round(b);
  a.hd = a.M.O.setTimeout(a.yg, b);
  P(a.a, a.t() + "'s receive timeout set to " + b + " ms.")
}
function te(a) {
  a.za != cg && (a.za == ug || a.za == tg ? dg(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.za)))
}
function pg(a) {
  var b = new Fe;
  b.Rb = a.Rb;
  b.Yf = 2;
  b.Af = 2;
  if(!a.H.Je) {
    b.ag = j
  }
  b.Ac = a.H.Ac;
  b.Le = a.Mb;
  if(b.Le) {
    b.Rf = 4096
  }
  b.Nf = 3E5;
  b.Lf = a.Mb ? Math.floor(10) : 0;
  b.pg = m;
  if(a.vb) {
    b.jg = k, b.oe = Math.floor((a.Mb ? 358E4 : 25E3) / 1E3)
  }
  b.ra = ac(a.H.ge);
  b.cd = a.H.Hf;
  a.I.push(b);
  a.Hb = b.ra
}
function ve(a, b) {
  b && (a.qc += 0.5);
  a.f()
}
r.Fa = function() {
  this.Ja && !this.Wb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.sd) {
    Q(this.a, this.t() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ja;
    this.Ja = j;
    !a && !this.I.length && pg(this);
    for(a = 0;a < this.I.length;a++) {
      P(this.a, this.t() + " SEND " + H(this.I[a]))
    }
    if(this.Db()) {
      for(var a = [], b = 0, c = this.I.length;b < c;b++) {
        this.I[b].oa(a), a.push("\n")
      }
      this.I = [];
      a = a.join("");
      b = this.vb ? this.Q.Ua : this.Q.Ya;
      this.q = eg.Md(this, this.vb ? this.Q.Xf : this.Q.gg);
      this.Oe = this.M.O === sd ? B() : this.M.O.getTime();
      this.q.ne(b, "POST", a);
      dg(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.Mb ? 0 : this.vb ? 25E3 : 0))
    }else {
      if(this.za == ug) {
        a = [];
        b = 0;
        for(c = this.I.length;b < c;b++) {
          a.push(this.I[b].ga())
        }
        this.I = [];
        this.q ? this.q.Ec(a) : (b = this.Q, this.q = new ye(this), this.q.rd = b.Dh.Md(this.q), this.Oe = this.M.O === sd ? B() : this.M.O.getTime(), this.q.Jd(b.host, b.port), this.q.va || (this.q.Ec(a), this.q.va || dg(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.za))
      }
    }
  }
};
function qg(a, b, c) {
  !a.Ja && !a.I.length && pg(a);
  for(var c = Math.max(c, a.Lb + 1), b = b.rf(c), c = 0, d = b.length;c < d;c++) {
    var e = b[c], g = e[0], e = e[1];
    (a.Lb == -1 || a.Lb + 1 != g) && a.I.push(new Ke(g));
    a.I.push(new Ie(e));
    a.Lb = g
  }
}
r.c = function() {
  this.a.info(this.t() + " in disposeInternal.");
  vg.d.c.call(this);
  this.og = this.M.O === sd ? B() : this.M.O.getTime();
  this.I = [];
  Eg(this);
  this.q && this.q.f();
  var a = this.H;
  this.H = k;
  yg(a, this)
};
function zg(a, b) {
  !a.Ja && !a.I.length && pg(a);
  a.I.push(new Pe(b, j));
  a.sg = j
}
function xg(a, b, c, d) {
  this.M = a;
  this.H = b;
  this.hf = c;
  this.bf = d
}
C(xg, L);
r = xg.prototype;
r.Ja = m;
r.Wb = m;
r.Tc = k;
r.Hb = k;
r.a = R("cw.net.DoNothingTransport");
function Fg(a) {
  a.Tc = a.M.O.setTimeout(function() {
    a.Tc = k;
    a.bf--;
    a.bf ? Fg(a) : a.f()
  }, a.hf)
}
r.Fa = function() {
  this.Ja && !this.Wb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ja = j;
  Fg(this)
};
r.s = function(a) {
  a.push("<DoNothingTransport delay=", String(this.hf), ">")
};
r.Db = p(m);
r.t = p("Wast. T");
r.Ze = p(m);
r.c = function() {
  this.a.info(this.t() + " in disposeInternal.");
  xg.d.c.call(this);
  this.Tc != k && this.M.O.clearTimeout(this.Tc);
  var a = this.H;
  this.H = k;
  yg(a, this)
};
function Gg(a, b, c) {
  a.style[Ha(c)] = b
}
function Hg(a, b) {
  var c;
  a: {
    c = yf(a);
    if(c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k))) {
      c = c[b] || c.getPropertyValue(b);
      break a
    }
    c = ""
  }
  return c || (a.currentStyle ? a.currentStyle[b] : k) || a.style[b]
}
function Ig(a, b, c) {
  b instanceof T ? (c = b.height, b = b.width) : c == i && f(Error("missing height argument"));
  a.style.width = Jg(b);
  a.style.height = Jg(c)
}
function Jg(a) {
  typeof a == "number" && (a = Math.round(a) + "px");
  return a
}
function Kg(a) {
  if(Hg(a, "display") != "none") {
    return Lg(a)
  }
  var b = a.style, c = b.display, d = b.visibility, e = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = Lg(a);
  b.display = c;
  b.position = e;
  b.visibility = d;
  return a
}
function Lg(a) {
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
function Mg(a) {
  I ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[J ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var Ng = mc ? "MozUserSelect" : J ? "WebkitUserSelect" : k;
function Og(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Ng) {
    if(b = b ? "none" : "", a.style[Ng] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[Ng] = b
      }
    }
  }else {
    if(I || lc) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
;function Pg(a) {
  this.ib = a;
  this.l = []
}
C(Pg, L);
var Qg = [];
function V(a, b, c, d) {
  v(c) || (Qg[0] = c, c = Qg);
  for(var e = 0;e < c.length;e++) {
    a.l.push(N(b, c[e], d || a, m, a.ib || a))
  }
  return a
}
function Rg(a, b, c, d, e, g) {
  if(v(c)) {
    for(var h = 0;h < c.length;h++) {
      Rg(a, b, c[h], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.ib || a;
      e = !!e;
      if(b = id(b, c, e)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].nb && b[c].Jb == d && b[c].capture == e && b[c].Xc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    if(b) {
      b = b.key, jd(b), bb(a.l, b)
    }
  }
  return a
}
Pg.prototype.xe = function() {
  F(this.l, jd);
  this.l.length = 0
};
Pg.prototype.c = function() {
  Pg.d.c.call(this);
  this.xe()
};
Pg.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Sg() {
}
da(Sg);
Sg.prototype.gh = 0;
Sg.Oa();
function Tg(a) {
  this.ma = a || wf();
  this.vc = Ug
}
C(Tg, qd);
Tg.prototype.Xg = Sg.Oa();
var Ug = k;
function Vg(a, b) {
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
r = Tg.prototype;
r.S = k;
r.C = m;
r.g = k;
r.vc = k;
r.fh = k;
r.D = k;
r.P = k;
r.Yb = k;
r.Fh = m;
function Wg(a) {
  return a.S || (a.S = ":" + (a.Xg.gh++).toString(36))
}
r.b = o("g");
function Xg(a) {
  return a.Bb || (a.Bb = new Pg(a))
}
r.getParent = o("D");
r.De = function(a) {
  this.D && this.D != a && f(Error("Method not supported"));
  Tg.d.De.call(this, a)
};
r.Ga = o("ma");
r.i = function() {
  this.g = this.ma.createElement("div")
};
function Yg(a, b) {
  a.C && f(Error("Component already rendered"));
  a.g || a.i();
  b ? b.insertBefore(a.g, k) : a.ma.B.body.appendChild(a.g);
  (!a.D || a.D.C) && a.R()
}
r.R = function() {
  this.C = j;
  Zg(this, function(a) {
    !a.C && a.b() && a.R()
  })
};
r.eb = function() {
  Zg(this, function(a) {
    a.C && a.eb()
  });
  this.Bb && this.Bb.xe();
  this.C = m
};
r.c = function() {
  Tg.d.c.call(this);
  this.C && this.eb();
  this.Bb && (this.Bb.f(), delete this.Bb);
  Zg(this, function(a) {
    a.f()
  });
  !this.Fh && this.g && If(this.g);
  this.D = this.fh = this.g = this.Yb = this.P = k
};
r.ec = o("g");
r.Ob = function(a) {
  this.C && f(Error("Component already rendered"));
  this.vc = a
};
function Zg(a, b) {
  a.P && F(a.P, b, i)
}
r.removeChild = function(a, b) {
  if(a) {
    var c = w(a) ? a : Wg(a), a = this.Yb && c ? (c in this.Yb ? this.Yb[c] : i) || k : k;
    if(c && a) {
      var d = this.Yb;
      c in d && delete d[c];
      bb(this.P, a);
      b && (a.eb(), a.g && If(a.g));
      c = a;
      c == k && f(Error("Unable to set parent component"));
      c.D = k;
      Tg.d.De.call(c, k)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function $g(a, b) {
  a.setAttribute("role", b);
  a.cj = b
}
;function ah() {
}
var bh;
da(ah);
r = ah.prototype;
r.Oc = function() {
};
r.i = function(a) {
  var b = a.Ga().i("div", ch(this, a).join(" "), a.fa);
  this.Ae(a, b);
  return b
};
r.ec = function(a) {
  return a
};
r.bc = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(I && !K("7")) {
      var d = dh(rf(a), b);
      d.push(b);
      pa(c ? sf : tf, a).apply(k, d)
    }else {
      c ? sf(a, b) : tf(a, b)
    }
  }
};
r.Cf = function(a) {
  if(a.vc == k) {
    a.vc = "rtl" == Hg(a.C ? a.g : a.ma.B.body, "direction")
  }
  a.vc && this.Ob(a.b(), j);
  a.isEnabled() && this.nd(a, a.Tb)
};
r.Ae = function(a, b) {
  a.isEnabled() || this.da(b, 1, j);
  a.h & 8 && this.da(b, 8, j);
  a.ca & 16 && this.da(b, 16, !!(a.h & 16));
  a.ca & 64 && this.da(b, 64, !!(a.h & 64))
};
r.kd = function(a, b) {
  Og(a, !b, !I && !lc)
};
r.Ob = function(a, b) {
  this.bc(a, this.u() + "-rtl", b)
};
r.Ef = function(a) {
  var b;
  return a.ca & 32 && (b = a.hb()) ? Nf(b) : m
};
r.nd = function(a, b) {
  var c;
  if(a.ca & 32 && (c = a.hb())) {
    if(!b && a.h & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.h & 32 && a.uf()
    }
    if(Nf(c) != b) {
      b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex"))
    }
  }
};
r.He = function(a, b) {
  a.style.display = b ? "" : "none"
};
r.ka = function(a, b, c) {
  var d = a.b();
  if(d) {
    var e = eh(this, b);
    e && this.bc(a, e, c);
    this.da(d, b, c)
  }
};
r.da = function(a, b, c) {
  bh || (bh = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = bh[b]) && a.setAttribute("aria-" + b, c)
};
r.ld = function(a, b) {
  var c = this.ec(a);
  if(c && (Hf(c), b)) {
    if(w(b)) {
      Kf(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = yf(c);
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
function ch(a, b) {
  var c = a.u(), d = [c], e = a.u();
  e != c && d.push(e);
  c = b.h;
  for(e = [];c;) {
    var g = c & -c;
    e.push(eh(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.wa) && d.push.apply(d, c);
  I && !K("7") && d.push.apply(d, dh(d));
  return d
}
function dh(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  F([], function(d) {
    Za(d, pa($a, a)) && (!b || $a(d, b)) && c.push(d.join("_"))
  });
  return c
}
function eh(a, b) {
  if(!a.Ye) {
    var c = a.u();
    a.Ye = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Ye[b]
}
;function fh(a, b) {
  a || f(Error("Invalid class name " + a));
  z(b) || f(Error("Invalid decorator function " + b))
}
var gh = {};
function hh(a, b, c, d, e) {
  if(!I && (!J || !K("525"))) {
    return j
  }
  if(pc && e) {
    return jh(a)
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
      return!(I && zc());
    case 27:
      return!J
  }
  return jh(a)
}
function jh(a) {
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
;function kh(a, b) {
  a && lh(this, a, b)
}
C(kh, qd);
r = kh.prototype;
r.g = k;
r.ad = k;
r.ie = k;
r.bd = k;
r.Sa = -1;
r.Ra = -1;
var mh = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, nh = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, oh = {61:187, 
59:186}, ph = I || J && K("525");
r = kh.prototype;
r.Tg = function(a) {
  if(J && (this.Sa == 17 && !a.ctrlKey || this.Sa == 18 && !a.altKey)) {
    this.Ra = this.Sa = -1
  }
  ph && !hh(a.keyCode, this.Sa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Ra = mc && a.keyCode in oh ? oh[a.keyCode] : a.keyCode
};
r.Ug = function() {
  this.Ra = this.Sa = -1
};
r.handleEvent = function(a) {
  var b = a.Ea, c, d;
  I && a.type == "keypress" ? (c = this.Ra, d = c != 13 && c != 27 ? b.keyCode : 0) : J && a.type == "keypress" ? (c = this.Ra, d = b.charCode >= 0 && b.charCode < 63232 && jh(c) ? b.charCode : 0) : lc ? (c = this.Ra, d = jh(c) ? b.keyCode : 0) : (c = b.keyCode || this.Ra, d = b.charCode || 0, pc && d == 63 && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in mh ? e = mh[c] : c == 25 && a.shiftKey && (e = 9) : g && g in nh && (e = nh[g]);
  a = e == this.Sa;
  this.Sa = e;
  b = new qh(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.f()
  }
};
r.b = o("g");
function lh(a, b, c) {
  a.bd && a.detach();
  a.g = b;
  a.ad = N(a.g, "keypress", a, c);
  a.ie = N(a.g, "keydown", a.Tg, c, a);
  a.bd = N(a.g, "keyup", a.Ug, c, a)
}
r.detach = function() {
  if(this.ad) {
    jd(this.ad), jd(this.ie), jd(this.bd), this.bd = this.ie = this.ad = k
  }
  this.g = k;
  this.Ra = this.Sa = -1
};
r.c = function() {
  kh.d.c.call(this);
  this.detach()
};
function qh(a, b, c, d) {
  d && this.jc(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(qh, Ic);
function W(a, b, c) {
  Tg.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ka(b);
      if(d = gh[d]) {
        break
      }
      b = b.d ? b.d.constructor : k
    }
    b = d ? z(d.Oa) ? d.Oa() : new d : k
  }
  this.m = b;
  this.md(a)
}
C(W, Tg);
r = W.prototype;
r.fa = k;
r.h = 0;
r.ca = 39;
r.Ue = 255;
r.vh = 0;
r.Tb = j;
r.wa = k;
r.ce = j;
r.Dd = m;
r.kh = k;
r.hb = function() {
  return this.m.hb(this)
};
function rh(a, b) {
  if(b) {
    a.wa ? $a(a.wa, b) || a.wa.push(b) : a.wa = [b], a.m.bc(a, b, j)
  }
}
r.bc = function(a, b) {
  if(b) {
    rh(this, a)
  }else {
    if(a && this.wa) {
      bb(this.wa, a);
      if(this.wa.length == 0) {
        this.wa = k
      }
      this.m.bc(this, a, m)
    }
  }
};
r.i = function() {
  var a = this.m.i(this);
  this.g = a;
  var b = this.kh || this.m.Oc();
  b && $g(a, b);
  this.Dd || this.m.kd(a, m);
  this.Tb || this.m.He(a, m)
};
r.ec = function() {
  return this.m.ec(this.b())
};
r.R = function() {
  W.d.R.call(this);
  this.m.Cf(this);
  if(this.ca & -2 && (this.ce && sh(this, j), this.ca & 32)) {
    var a = this.hb();
    if(a) {
      var b = this.Fb || (this.Fb = new kh);
      lh(b, a);
      V(V(V(Xg(this), b, "key", this.xf), a, "focus", this.Rg), a, "blur", this.uf)
    }
  }
};
function sh(a, b) {
  var c = Xg(a), d = a.b();
  b ? (V(V(V(V(c, d, "mouseover", a.Wc), d, "mousedown", a.Uc), d, "mouseup", a.yf), d, "mouseout", a.Vc), I && V(c, d, "dblclick", a.wf)) : (Rg(Rg(Rg(Rg(c, d, "mouseover", a.Wc), d, "mousedown", a.Uc), d, "mouseup", a.yf), d, "mouseout", a.Vc), I && Rg(c, d, "dblclick", a.wf))
}
r.eb = function() {
  W.d.eb.call(this);
  this.Fb && this.Fb.detach();
  this.Tb && this.isEnabled() && this.m.nd(this, m)
};
r.c = function() {
  W.d.c.call(this);
  this.Fb && (this.Fb.f(), delete this.Fb);
  delete this.m;
  this.wa = this.fa = k
};
r.ld = function(a) {
  this.m.ld(this.b(), a);
  this.md(a)
};
r.md = aa("fa");
r.pf = function() {
  var a = this.fa;
  if(!a) {
    return""
  }
  if(!w(a)) {
    if(v(a)) {
      a = Xa(a, Of).join("")
    }else {
      if(vf && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Pf(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      vf || (a = a.replace(/ +/g, " "));
      a != " " && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
r.Ob = function(a) {
  W.d.Ob.call(this, a);
  var b = this.b();
  b && this.m.Ob(b, a)
};
r.kd = function(a) {
  this.Dd = a;
  var b = this.b();
  b && this.m.kd(b, a)
};
r.He = function(a, b) {
  if(b || this.Tb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.m.He(c, a);
    this.isEnabled() && this.m.nd(this, a);
    this.Tb = a;
    return j
  }
  return m
};
r.isEnabled = function() {
  return!(this.h & 1)
};
function th(a, b) {
  uh(a, 2, b) && a.ka(2, b)
}
r.he = function() {
  return!!(this.h & 4)
};
r.setActive = function(a) {
  uh(this, 4, a) && this.ka(4, a)
};
r.Ee = function(a) {
  uh(this, 8, a) && this.ka(8, a)
};
r.ka = function(a, b) {
  if(this.ca & a && b != !!(this.h & a)) {
    this.m.ka(this, a, b), this.h = b ? this.h | a : this.h & ~a
  }
};
function X(a, b) {
  return!!(a.Ue & b) && !!(a.ca & b)
}
function uh(a, b, c) {
  return!!(a.ca & b) && !!(a.h & b) != c && (!(a.vh & b) || a.dispatchEvent(Vg(b, c))) && !a.va
}
r.Wc = function(a) {
  !vh(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && th(this, j)
};
r.Vc = function(a) {
  !vh(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(m), X(this, 2) && th(this, m))
};
function vh(a, b) {
  return!!a.relatedTarget && Jf(b, a.relatedTarget)
}
r.Uc = function(a) {
  if(this.isEnabled() && (X(this, 2) && th(this, j), Kc(a) && (!J || !pc || !a.ctrlKey))) {
    X(this, 4) && this.setActive(j), this.m.Ef(this) && this.hb().focus()
  }
  !this.Dd && Kc(a) && (!J || !pc || !a.ctrlKey) && a.preventDefault()
};
r.yf = function(a) {
  this.isEnabled() && (X(this, 2) && th(this, j), this.he() && this.lb(a) && X(this, 4) && this.setActive(m))
};
r.wf = function(a) {
  this.isEnabled() && this.lb(a)
};
r.lb = function(a) {
  if(X(this, 16)) {
    var b = !(this.h & 16);
    uh(this, 16, b) && this.ka(16, b)
  }
  X(this, 8) && this.Ee(j);
  X(this, 64) && (b = !(this.h & 64), uh(this, 64, b) && this.ka(64, b));
  b = new Fc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, e = 0;d = c[e];e++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
r.Rg = function() {
  X(this, 32) && uh(this, 32, j) && this.ka(32, j)
};
r.uf = function() {
  X(this, 4) && this.setActive(m);
  X(this, 32) && uh(this, 32, m) && this.ka(32, m)
};
r.xf = function(a) {
  return this.Tb && this.isEnabled() && this.be(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
r.be = function(a) {
  return a.keyCode == 13 && this.lb(a)
};
z(W) || f(Error("Invalid component class " + W));
z(ah) || f(Error("Invalid renderer class " + ah));
var wh = ka(W);
gh[wh] = ah;
fh("goog-control", function() {
  return new W(k)
});
function xh() {
}
C(xh, ah);
da(xh);
r = xh.prototype;
r.Oc = p("button");
r.da = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : xh.d.da.call(this, a, b, c)
};
r.i = function(a) {
  var b = xh.d.i.call(this, a), c = a.Rc();
  c && this.Ge(b, c);
  (c = a.Sc()) && this.qd(b, c);
  a.ca & 16 && this.da(b, 16, !!(a.h & 16));
  return b
};
r.Sc = u;
r.qd = u;
r.Rc = function(a) {
  return a.title
};
r.Ge = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
r.u = p("goog-button");
function yh() {
}
C(yh, xh);
da(yh);
r = yh.prototype;
r.Oc = function() {
};
r.i = function(a) {
  a.C && m != a.ce && sh(a, m);
  a.ce = m;
  a.Ue &= -256;
  a.C && a.h & 32 && f(Error("Component already rendered"));
  a.h & 32 && a.ka(32, m);
  a.ca &= -33;
  return a.Ga().i("button", {"class":ch(this, a).join(" "), disabled:!a.isEnabled(), title:a.Rc() || "", value:a.Sc() || ""}, a.pf() || "")
};
r.Cf = function(a) {
  V(Xg(a), a.b(), "click", a.lb)
};
r.kd = u;
r.Ob = u;
r.Ef = function(a) {
  return a.isEnabled()
};
r.nd = u;
r.ka = function(a, b, c) {
  yh.d.ka.call(this, a, b, c);
  if((a = a.b()) && b == 1) {
    a.disabled = c
  }
};
r.Sc = function(a) {
  return a.value
};
r.qd = function(a, b) {
  if(a) {
    a.value = b
  }
};
r.da = u;
function zh(a, b, c) {
  W.call(this, a, b || yh.Oa(), c)
}
C(zh, W);
r = zh.prototype;
r.Sc = o("qg");
r.qd = function(a) {
  this.qg = a;
  this.m.qd(this.b(), a)
};
r.Rc = o("lg");
r.Ge = function(a) {
  this.lg = a;
  this.m.Ge(this.b(), a)
};
r.c = function() {
  zh.d.c.call(this);
  delete this.qg;
  delete this.lg
};
r.R = function() {
  zh.d.R.call(this);
  if(this.ca & 32) {
    var a = this.hb();
    a && V(Xg(this), a, "keyup", this.be)
  }
};
r.be = function(a) {
  return a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup" ? this.lb(a) : a.keyCode == 32
};
fh("goog-button", function() {
  return new zh(k)
});
function Ah() {
}
C(Ah, xh);
da(Ah);
r = Ah.prototype;
r.i = function(a) {
  var b = {"class":"goog-inline-block " + ch(this, a).join(" "), title:a.Rc() || ""}, b = a.Ga().i("div", b, Bh(this, a.fa, a.Ga()));
  this.Ae(a, b);
  return b
};
r.Oc = p("button");
r.Ae = function(a, b) {
  a.isEnabled() || this.da(b, 1, j);
  a.h & 8 && this.da(b, 8, j);
  a.ca & 16 && this.da(b, 16, j);
  a.h & 64 && this.da(b, 64, j)
};
r.ec = function(a) {
  return a && a.firstChild.firstChild
};
function Bh(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.u() + "-outer-box"), c.i("div", "goog-inline-block " + (a.u() + "-inner-box"), b))
}
r.u = p("goog-custom-button");
function Ch(a, b, c) {
  zh.call(this, a, b || Ah.Oa(), c)
}
C(Ch, zh);
fh("goog-custom-button", function() {
  return new Ch(k)
});
var Dh = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function Eh(a) {
  var b = {}, a = String(a), c = a.charAt(0) == "#" ? a : "#" + a;
  if(Fh.test(c)) {
    return b.Yc = Gh(c), b.type = "hex", b
  }else {
    a: {
      var d = a.match(Hh);
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
      return b.Yc = Ih(c[0], c[1], c[2]), b.type = "rgb", b
    }else {
      if(Dh && (c = Dh[a.toLowerCase()])) {
        return b.Yc = c, b.type = "named", b
      }
    }
  }
  f(Error(a + " is not a valid color string"))
}
var Jh = /#(.)(.)(.)/;
function Gh(a) {
  Fh.test(a) || f(Error("'" + a + "' is not a valid hex color"));
  a.length == 4 && (a = a.replace(Jh, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function Kh(a) {
  a = Gh(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function Ih(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || a < 0 || a > 255 || isNaN(b) || b < 0 || b > 255 || isNaN(c) || c < 0 || c > 255) && f(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = Lh(a.toString(16));
  b = Lh(b.toString(16));
  c = Lh(c.toString(16));
  return"#" + a + b + c
}
var Fh = /^#(?:[0-9a-f]{3}){1,2}$/i, Hh = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function Lh(a) {
  return a.length == 1 ? "0" + a : a
}
;var Mh;
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
  Mh = c
})();
function Nh(a, b) {
  Tg.call(this, b);
  this.Mg = a;
  this.Sd = new Pg(this);
  this.Nc = new Rb
}
C(Nh, Tg);
r = Nh.prototype;
r.a = R("goog.ui.media.FlashObject");
r.Hh = "window";
r.Ve = "#000000";
r.wg = "sameDomain";
r.ba = function(a, b) {
  this.sb = w(a) ? a : Math.round(a) + "px";
  this.de = w(b) ? b : Math.round(b) + "px";
  this.b() && Ig(this.b() ? this.b().firstChild : k, this.sb, this.de);
  return this
};
r.R = function() {
  Nh.d.R.call(this);
  var a = this.b(), b;
  b = I ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = I ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = sa(c, this.Hh), d = this.Nc.Ha(), e = this.Nc.Y(), g = [], h = 0;h < d.length;h++) {
    var l = ua(d[h]), n = ua(e[h]);
    g.push(l + "=" + n)
  }
  b = sa(b, Wg(this), Wg(this), "goog-ui-media-flash-object", wa(this.Mg), wa(g.join("&")), this.Ve, this.wg, c);
  a.innerHTML = b;
  this.sb && this.de && this.ba(this.sb, this.de);
  V(this.Sd, this.b(), Sa(Dc), Gc)
};
r.i = function() {
  this.bg != k && !(Da(Mh, this.bg) >= 0) && (O(this.a, "Required flash version not found:" + this.bg), f(Error("Method not supported")));
  var a = this.Ga().createElement("div");
  a.className = "goog-ui-media-flash";
  this.g = a
};
r.c = function() {
  Nh.d.c.call(this);
  this.Nc = k;
  this.Sd.f();
  this.Sd = k
};
function Oh(a) {
  qa.call(this, a)
}
C(Oh, qa);
Oh.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function Ph(a, b, c) {
  function d() {
    e && delete t.__loadFlashObject_callbacks[e]
  }
  var e;
  if(mc && !K("1.8.1.20")) {
    return Gd(new Oh("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(Da(Mh, "9") >= 0)) {
    return b = Mh, Gd(new Oh("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  e = "_" + Md();
  var h = new ud(d);
  t.__loadFlashObject_callbacks[e] = function() {
    a.setTimeout(function() {
      d();
      Ad(h, U(g))
    }, 0)
  };
  b.Nc.set("onloadcallback", '__loadFlashObject_callbacks["' + e + '"]()');
  g = Wg(b);
  Yg(b, c);
  return h
}
function Qh(a, b, c) {
  var d = Ph(a, b, c), e = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  Dd(d, function(b) {
    a.clearTimeout(e);
    return b
  });
  return d
}
;function Rh() {
  if(mc) {
    this.bb = {}, this.zd = {}, this.td = []
  }
}
Rh.prototype.a = R("goog.net.xhrMonitor");
Rh.prototype.Kc = mc;
function Sh(a) {
  var b = Th;
  if(b.Kc) {
    var c = w(a) ? a : ia(a) ? ka(a) : "";
    Q(b.a, "Pushing context: " + a + " (" + c + ")");
    b.td.push(c)
  }
}
function Uh() {
  var a = Th;
  if(a.Kc) {
    var b = a.td.pop();
    Q(a.a, "Popping context: " + b);
    Vh(a, b)
  }
}
function Wh(a) {
  var b = Th;
  if(b.Kc) {
    a = ka(a);
    P(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.td.length;c++) {
      var d = b.td[c];
      Xh(b.bb, d, a);
      Xh(b.zd, a, d)
    }
  }
}
function Vh(a, b) {
  var c = a.zd[b], d = a.bb[b];
  c && d && (Q(a.a, "Updating dependent contexts"), F(c, function(a) {
    F(d, function(b) {
      Xh(this.bb, a, b);
      Xh(this.zd, b, a)
    }, this)
  }, a))
}
function Xh(a, b, c) {
  a[b] || (a[b] = []);
  $a(a[b], c) || a[b].push(c)
}
var Th = new Rh;
function Yh() {
}
Yh.prototype.We = k;
function Zh(a) {
  var b;
  if(!(b = a.We)) {
    b = {}, $h(a) && (b[0] = j, b[1] = j), b = a.We = b
  }
  return b
}
;var ai;
function bi() {
}
C(bi, Yh);
function ci(a) {
  return(a = $h(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
bi.prototype.ee = k;
function $h(a) {
  if(!a.ee && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.ee = d
      }catch(e) {
      }
    }
    f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.ee
}
ai = new bi;
function di(a) {
  this.headers = new Rb;
  this.Ad = a || k
}
C(di, qd);
di.prototype.a = R("goog.net.XhrIo");
var ei = /^https?:?$/i;
r = di.prototype;
r.Ka = m;
r.j = k;
r.yd = k;
r.nc = "";
r.Gf = "";
r.kc = 0;
r.lc = "";
r.Rd = m;
r.Zc = m;
r.fe = m;
r.kb = m;
r.ud = 0;
r.qb = k;
r.cg = "";
r.Gh = m;
r.send = function(a, b, c, d) {
  this.j && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.nc = a;
  this.lc = "";
  this.kc = 0;
  this.Gf = b;
  this.Rd = m;
  this.Ka = j;
  this.j = this.Ad ? ci(this.Ad) : ci(ai);
  this.yd = this.Ad ? Zh(this.Ad) : Zh(ai);
  Wh(this.j);
  this.j.onreadystatechange = A(this.Uf, this);
  try {
    P(this.a, fi(this, "Opening Xhr")), this.fe = j, this.j.open(b, a, j), this.fe = m
  }catch(e) {
    P(this.a, fi(this, "Error opening Xhr: " + e.message));
    gi(this, e);
    return
  }
  var a = c || "", g = this.headers.A();
  d && Pb(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.ea("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Pb(g, function(a, b) {
    this.j.setRequestHeader(b, a)
  }, this);
  if(this.cg) {
    this.j.responseType = this.cg
  }
  if("withCredentials" in this.j) {
    this.j.withCredentials = this.Gh
  }
  try {
    if(this.qb) {
      sd.clearTimeout(this.qb), this.qb = k
    }
    if(this.ud > 0) {
      P(this.a, fi(this, "Will abort after " + this.ud + "ms if incomplete")), this.qb = sd.setTimeout(A(this.Ch, this), this.ud)
    }
    P(this.a, fi(this, "Sending request"));
    this.Zc = j;
    this.j.send(a);
    this.Zc = m
  }catch(h) {
    P(this.a, fi(this, "Send error: " + h.message)), gi(this, h)
  }
};
r.dispatchEvent = function(a) {
  if(this.j) {
    Sh(this.j);
    try {
      return di.d.dispatchEvent.call(this, a)
    }finally {
      Uh()
    }
  }else {
    return di.d.dispatchEvent.call(this, a)
  }
};
r.Ch = function() {
  if(typeof ba != "undefined" && this.j) {
    this.lc = "Timed out after " + this.ud + "ms, aborting", this.kc = 8, P(this.a, fi(this, this.lc)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function gi(a, b) {
  a.Ka = m;
  if(a.j) {
    a.kb = j, a.j.abort(), a.kb = m
  }
  a.lc = b;
  a.kc = 5;
  hi(a);
  ii(a)
}
function hi(a) {
  if(!a.Rd) {
    a.Rd = j, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
r.abort = function(a) {
  if(this.j && this.Ka) {
    P(this.a, fi(this, "Aborting")), this.Ka = m, this.kb = j, this.j.abort(), this.kb = m, this.kc = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ii(this)
  }
};
r.c = function() {
  if(this.j) {
    if(this.Ka) {
      this.Ka = m, this.kb = j, this.j.abort(), this.kb = m
    }
    ii(this, j)
  }
  di.d.c.call(this)
};
r.Uf = function() {
  !this.fe && !this.Zc && !this.kb ? this.hh() : ji(this)
};
r.hh = function() {
  ji(this)
};
function ji(a) {
  if(a.Ka && typeof ba != "undefined") {
    if(a.yd[1] && a.Pa() == 4 && ki(a) == 2) {
      P(a.a, fi(a, "Local request error detected and ignored"))
    }else {
      if(a.Zc && a.Pa() == 4) {
        sd.setTimeout(A(a.Uf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.Pa() == 4) {
          P(a.a, fi(a, "Request complete"));
          a.Ka = m;
          var b;
          a: {
            switch(ki(a)) {
              case 0:
                b = w(a.nc) ? a.nc.match(Te)[1] || k : a.nc.sa;
                b = !(b ? ei.test(b) : self.location ? ei.test(self.location.protocol) : 1);
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
            a.kc = 6;
            var c;
            try {
              c = a.Pa() > 2 ? a.j.statusText : ""
            }catch(d) {
              P(a.a, "Can not get status: " + d.message), c = ""
            }
            a.lc = c + " [" + ki(a) + "]";
            hi(a)
          }
          ii(a)
        }
      }
    }
  }
}
function ii(a, b) {
  if(a.j) {
    var c = a.j, d = a.yd[0] ? u : k;
    a.j = k;
    a.yd = k;
    if(a.qb) {
      sd.clearTimeout(a.qb), a.qb = k
    }
    b || (Sh(c), a.dispatchEvent("ready"), Uh());
    var e = Th;
    if(e.Kc) {
      var g = ka(c);
      P(e.a, "Closing XHR : " + g);
      delete e.zd[g];
      for(var h in e.bb) {
        bb(e.bb[h], g), e.bb[h].length == 0 && delete e.bb[h]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(l) {
      me(a.a, "Problem encountered resetting onreadystatechange: " + l.message)
    }
  }
}
r.he = function() {
  return!!this.j
};
r.Pa = function() {
  return this.j ? this.j.readyState : 0
};
function ki(a) {
  try {
    return a.Pa() > 2 ? a.j.status : -1
  }catch(b) {
    return O(a.a, "Can not get status: " + b.message), -1
  }
}
r.getResponseHeader = function(a) {
  return this.j && this.Pa() == 4 ? this.j.getResponseHeader(a) : i
};
function fi(a, b) {
  return b + " [" + a.Gf + " " + a.nc + " " + ki(a) + "]"
}
;var li = !(I || J && !K("420+"));
function mi(a, b) {
  this.vd = a;
  this.qa = b
}
C(mi, L);
r = mi.prototype;
r.q = k;
r.Xa = -1;
r.tf = m;
r.zf = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function ni(a) {
  var b = ag(a.ef), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.qa, c, b), b != 1 && a.f()) : a.f()
}
r.Wg = function() {
  ni(this);
  if(!this.va) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.qa);
    this.f()
  }
};
r.nh = function() {
  var a = t.parent;
  if(a) {
    this.Xa = this.q.Pa();
    if(this.Xa >= 2 && !this.tf) {
      for(var b = new Rb, c = this.zf.length;c--;) {
        var d = this.zf[c];
        try {
          b.set(d, this.q.j.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.W() && (this.tf = j, a.__XHRMaster_ongotheaders(this.qa, Vb(b)), this.va)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.qa, this.Xa);
    li && this.Xa == 3 && ni(this)
  }else {
    this.f()
  }
};
r.ne = function(a, b, c) {
  this.q = new di;
  N(this.q, "readystatechange", A(this.nh, this));
  N(this.q, "complete", A(this.Wg, this));
  this.q.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.ef = new $f(this.q.j, 1048576)
};
r.c = function() {
  mi.d.c.call(this);
  delete this.ef;
  this.q && this.q.f();
  delete this.vd.zc[this.qa];
  delete this.vd
};
function oi() {
  this.zc = {}
}
C(oi, L);
oi.prototype.bh = function(a, b, c, d) {
  var e = new mi(this, a);
  this.zc[a] = e;
  e.ne(b, c, d)
};
oi.prototype.Hg = function(a) {
  (a = this.zc[a]) && a.f()
};
oi.prototype.c = function() {
  oi.d.c.call(this);
  for(var a = Sa(this.zc);a.length;) {
    a.pop().f()
  }
  delete this.zc
};
var pi = new oi;
t.__XHRSlave_makeRequest = A(pi.bh, pi);
t.__XHRSlave_dispose = A(pi.Hg, pi);
function qi(a) {
  this.B = a
}
var ri = /\s*;\s*/;
r = qi.prototype;
r.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && J) {
    var b = "COOKIES_TEST_" + B();
    si.set(b, "1");
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
  for(var c = a + "=", d = (this.B.cookie || "").split(ri), e = 0, g;g = d[e];e++) {
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
  return ti(this).keys
};
r.Y = function() {
  return ti(this).rg
};
r.Qa = function() {
  return!this.B.cookie
};
r.W = function() {
  return!this.B.cookie ? 0 : (this.B.cookie || "").split(ri).length
};
r.ea = function(a) {
  return fa(this.get(a))
};
r.Ic = function(a) {
  for(var b = ti(this).rg, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return j
    }
  }
  return m
};
r.clear = function() {
  for(var a = ti(this).keys, b = a.length - 1;b >= 0;b--) {
    this.remove(a[b])
  }
};
function ti(a) {
  for(var a = (a.B.cookie || "").split(ri), b = [], c = [], d, e, g = 0;e = a[g];g++) {
    d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)))
  }
  return{keys:b, rg:c}
}
var si = new qi(document);
si.oi = 3950;
function ui() {
}
ui.prototype.qf = function() {
  return Boolean(Number((new Ve(document.location)).U.get("httpStreaming", "0"))) ? 2 : 1
};
function vi(a) {
  var b = new Nh("/compiled_client/FlashConnector.swf?cb=4bdfc178fc0e508c0cd5efc3fdb09920");
  b.Ve = "#777777";
  b.ba(300, 30);
  var c = U("FlashConnectorSwf");
  c || f(Error("no FlashConnectorSwf?"));
  return Qh(a.O, b, c)
}
function wi(a, b, c) {
  var d = new Ve(document.location);
  if(c) {
    var e = d.na, g = t.__demo_mainSocketPort, d = vi(a);
    Bd(d, function(b) {
      b = new xe(a, b);
      return new gg(e, g, b)
    });
    return d
  }else {
    return b ? (b = t.__demo_shared_domain, d = d.A(), Ye(d, "_____random_____." + b)) : d = d.A(), d.pb("/httpface/"), $e(d, "", i), d = new hg(d.toString().replace("_____random_____", "%random%")), Fd(d)
  }
}
function xi() {
  var a = yi, b = (new Ve(document.location)).U, c = b.get("mode") != "http", b = Boolean(Number(b.get("useSub", "1")));
  return wi(a, b, c)
}
;function zi() {
  this.$f = B()
}
var Ai = new zi;
zi.prototype.set = aa("$f");
zi.prototype.reset = function() {
  this.set(B())
};
zi.prototype.get = o("$f");
function Bi(a) {
  this.lh = a || "";
  this.uh = Ai
}
Bi.prototype.hg = j;
Bi.prototype.sh = j;
Bi.prototype.rh = j;
Bi.prototype.ig = m;
function Ci(a) {
  return a < 10 ? "0" + a : String(a)
}
function Di(a, b) {
  var c = (a.kg - b) / 1E3, d = c.toFixed(3), e = 0;
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
function Ei(a) {
  Bi.call(this, a)
}
C(Ei, Bi);
Ei.prototype.ig = j;
function Fi(a) {
  this.mh = A(this.vg, this);
  this.nf = new Ei;
  this.Df = this.nf.hg = m;
  this.g = a;
  this.Jg = this.g.ownerDocument || this.g.document;
  var a = wf(this.g), b = k;
  if(I) {
    b = a.B.createStyleSheet(), Mg(b)
  }else {
    var c = zf(a.B, "head", i, i)[0];
    c || (b = zf(a.B, "body", i, i)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    Mg(b);
    a.appendChild(c, b)
  }
  this.g.className += " logdiv"
}
Fi.prototype.vg = function(a) {
  var b = this.g.scrollHeight - this.g.scrollTop - this.g.clientHeight <= 100, c = this.Jg.createElement("div");
  c.className = "logmsg";
  var d = this.nf, e;
  switch(a.Ib.value) {
    case de.value:
      e = "dbg-sh";
      break;
    case ee.value:
      e = "dbg-sev";
      break;
    case fe.value:
      e = "dbg-w";
      break;
    case ge.value:
      e = "dbg-i";
      break;
    default:
      e = "dbg-f"
  }
  var g = [];
  g.push(d.lh, " ");
  if(d.hg) {
    var h = new Date(a.kg);
    g.push("[", Ci(h.getFullYear() - 2E3) + Ci(h.getMonth() + 1) + Ci(h.getDate()) + " " + Ci(h.getHours()) + ":" + Ci(h.getMinutes()) + ":" + Ci(h.getSeconds()) + "." + Ci(Math.floor(h.getMilliseconds() / 10)), "] ")
  }
  d.sh && g.push("[", Ca(Di(a, d.uh.get())), "s] ");
  d.rh && g.push("[", wa(a.ah), "] ");
  g.push('<span class="', e, '">', va(Ca(wa(a.Pf))));
  d.ig && a.Ud && g.push("<br>", va(Ca(a.Td || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.g.appendChild(c);
  if(b) {
    this.g.scrollTop = this.g.scrollHeight
  }
};
Fi.prototype.clear = function() {
  this.g.innerHTML = ""
};
function Gi(a, b, c, d, e, g) {
  arguments.length == 6 ? this.setTransform(a, b, c, d, e, g) : arguments.length != 0 ? f(Error("Insufficient matrix parameters")) : (this.Z = this.aa = 1, this.T = this.$ = this.ia = this.ja = 0)
}
r = Gi.prototype;
r.A = function() {
  return new Gi(this.Z, this.T, this.$, this.aa, this.ia, this.ja)
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
r.af = function(a) {
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
  var d = new Gi, e = Math.cos(a), a = Math.sin(a), b = d.setTransform(e, a, -a, e, b - b * e + c * a, c - b * a - c * e), c = this.Z, d = this.$;
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
  this.Nd = m
}
C(Y, qd);
r = Y.prototype;
r.xa = k;
r.g = k;
r.mg = k;
r.b = o("g");
r.addEventListener = function(a, b, c, d) {
  N(this.g, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
  hd(this.g, a, b, c, d)
};
r.c = function() {
  Y.d.c.call(this);
  ld(this.g)
};
function Z(a, b, c, d) {
  Y.call(this, a, b);
  this.Ne = c;
  this.xa.Ce(this, c);
  this.fill = d;
  this.xa.Be(this, d)
}
C(Z, Y);
Z.prototype.fill = k;
Z.prototype.Ne = k;
Z.prototype.Og = o("fill");
Z.prototype.Qg = o("Ne");
function Hi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(Hi, Z);
function Ii(a, b) {
  Y.call(this, a, b)
}
C(Ii, Y);
function Ji(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(Ji, Z);
function Ki(a, b) {
  Y.call(this, a, b)
}
C(Ki, Y);
function Li(a, b) {
  Y.call(this, a, b)
}
C(Li, Ii);
Li.prototype.clear = function() {
  Hf(this.b())
};
Li.prototype.ba = function(a, b) {
  Mi(this.b(), {width:a, height:b})
};
function Ni(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
C(Ni, Ji);
function Oi(a, b) {
  Y.call(this, a, b)
}
C(Oi, Ki);
Oi.prototype.ba = function(a, b) {
  Mi(this.b(), {width:a, height:b})
};
function Pi() {
}
;function Qi(a, b) {
  this.Id = a;
  this.oc = b || 1
}
C(Qi, Pi);
Qi.prototype.ha = o("Id");
function Ri(a, b) {
  this.sb = a;
  this.Id = b
}
Ri.prototype.ha = o("Id");
function Si() {
  this.G = [];
  this.e = [];
  this.Aa = []
}
Si.prototype.wb = k;
Si.prototype.V = k;
Si.prototype.Pb = j;
var Ti = [2, 2, 6, 6, 0];
r = Si.prototype;
r.clear = function() {
  this.G.length = 0;
  this.e.length = 0;
  this.Aa.length = 0;
  delete this.wb;
  delete this.V;
  delete this.Pb;
  return this
};
r.moveTo = function(a, b) {
  this.G[this.G.length - 1] == 0 ? this.Aa.length -= 2 : (this.G.push(0), this.e.push(1));
  this.Aa.push(a, b);
  this.V = this.wb = [a, b];
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
r.df = function(a) {
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
    this.G.push(4), this.e.push(1), this.V = this.wb
  }
  return this
};
r.arcTo = function(a, b, c, d) {
  var e = this.V[0] - a * Math.cos(Ae(c)) + a * Math.cos(Ae(c + d)), g = this.V[1] - b * Math.sin(Ae(c)) + b * Math.sin(Ae(c + d));
  this.G.push(3);
  this.e.push(1);
  this.Aa.push(a, b, c, d, e, g);
  this.Pb = m;
  this.V = [e, g];
  return this
};
r.xg = function(a, b, c, d) {
  var e = this.V[0] - a * Math.cos(Ae(c)), g = this.V[1] - b * Math.sin(Ae(c)), h = Ae(d), d = Math.ceil(Math.abs(h) / Math.PI * 2);
  h /= d;
  for(var c = Ae(c), l = 0;l < d;l++) {
    var n = Math.cos(c), q = Math.sin(c), x = 4 / 3 * Math.sin(h / 2) / (1 + Math.cos(h / 2)), s = e + (n - x * q) * a, y = g + (q + x * n) * b;
    c += h;
    n = Math.cos(c);
    q = Math.sin(c);
    this.df(s, y, e + (n + x * q) * a, g + (q - x * n) * b, e + n * a, g + q * b)
  }
  return this
};
function Ui(a, b) {
  for(var c = a.Aa, d = 0, e = 0, g = a.G.length;e < g;e++) {
    var h = a.G[e], l = Ti[h] * a.e[e];
    b(h, c.slice(d, d + l));
    d += l
  }
}
r.A = function() {
  var a = new this.constructor;
  a.G = this.G.concat();
  a.e = this.e.concat();
  a.Aa = this.Aa.concat();
  a.wb = this.wb && this.wb.concat();
  a.V = this.V && this.V.concat();
  a.Pb = this.Pb;
  return a
};
var Vi = {};
Vi[0] = Si.prototype.moveTo;
Vi[1] = Si.prototype.lineTo;
Vi[4] = Si.prototype.close;
Vi[2] = Si.prototype.df;
Vi[3] = Si.prototype.xg;
function Wi(a) {
  if(a.Pb) {
    return a.A()
  }
  var b = new Si;
  Ui(a, function(a, d) {
    Vi[a].apply(b, d)
  });
  return b
}
Si.prototype.Qa = function() {
  return this.G.length == 0
};
function Xi(a, b, c, d, e) {
  Tg.call(this, e);
  this.width = a;
  this.height = b;
  this.la = c || k;
  this.Zb = d || k
}
C(Xi, Tg);
r = Xi.prototype;
r.J = k;
r.La = 0;
r.cb = 0;
r.sf = function() {
  return this.X()
};
r.X = function() {
  return this.C ? Kg(this.b()) : ja(this.width) && ja(this.height) ? new T(this.width, this.height) : k
};
function Yi(a) {
  var b = a.X();
  return b ? b.width / (a.la ? new T(a.la, a.Zb) : a.X()).width : 0
}
;function Zi(a, b, c, d, e) {
  Xi.call(this, a, b, c, d, e);
  this.gf = {};
  this.Re = J && !K(526);
  this.ib = new Pg(this)
}
var $i;
C(Zi, Xi);
function aj(a, b, c) {
  a = a.ma.B.createElementNS("http://www.w3.org/2000/svg", b);
  c && Mi(a, c);
  return a
}
function Mi(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
r = Zi.prototype;
r.ub = function(a, b) {
  (b || this.J).b().appendChild(a.b())
};
r.Be = function(a, b) {
  var c = a.b();
  b instanceof Qi ? (c.setAttribute("fill", b.ha()), c.setAttribute("fill-opacity", b.oc)) : c.setAttribute("fill", "none")
};
r.Ce = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.ha());
    var d = b.sb;
    w(d) && d.indexOf("px") != -1 ? c.setAttribute("stroke-width", parseFloat(d) / Yi(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
r.i = function() {
  var a = aj(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = aj(this, "g");
  this.Pd = aj(this, "defs");
  this.J = new Li(b, this);
  a.appendChild(this.Pd);
  a.appendChild(b);
  this.g = a;
  if(this.la || this.La || this.cb) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.Re ? this.wd() : this.b().setAttribute("viewBox", this.La + " " + this.cb + " " + (this.la ? this.la + " " + this.Zb : ""))
  }
};
r.wd = function() {
  if(this.C && (this.la || this.La || !this.cb)) {
    var a = this.X();
    if(a.width == 0) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.La, c = -this.cb, d = a.width / this.la, a = a.height / this.Zb;
      this.J.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
r.ba = function(a, b) {
  Ig(this.b(), a, b)
};
r.X = function() {
  if(!mc) {
    return this.C ? Kg(this.b()) : Zi.d.X.call(this)
  }
  var a = this.width, b = this.height, c = w(a) && a.indexOf("%") != -1, d = w(b) && b.indexOf("%") != -1;
  if(!this.C && (c || d)) {
    return k
  }
  var e, g;
  if(c) {
    e = this.b().parentNode, g = Kg(e), a = parseFloat(a) * g.width / 100
  }
  d && (e = e || this.b().parentNode, g = g || Kg(e), b = parseFloat(b) * g.height / 100);
  return new T(a, b)
};
r.clear = function() {
  this.J.clear();
  Hf(this.Pd);
  this.gf = {}
};
r.Jc = function(a, b, c, d, e, g, h) {
  a = aj(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  e = new Ni(a, this, e, g);
  this.ub(e, h);
  return e
};
r.drawImage = function(a, b, c, d, e, g) {
  a = aj(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", e);
  e = new Oi(a, this);
  this.ub(e, g);
  return e
};
r.R = function() {
  var a = this.X();
  Zi.d.R.call(this);
  a || this.dispatchEvent("resize");
  if(this.Re) {
    var a = this.width, b = this.height;
    typeof a == "string" && a.indexOf("%") != -1 && typeof b == "string" && b.indexOf("%") != -1 && V(this.ib, bj(), td, this.wd);
    this.wd()
  }
};
r.eb = function() {
  Zi.d.eb.call(this);
  this.Re && Rg(this.ib, bj(), td, this.wd)
};
r.c = function() {
  delete this.gf;
  delete this.Pd;
  delete this.J;
  Zi.d.c.call(this)
};
function bj() {
  $i || ($i = new rd(400), $i.start());
  return $i
}
;function cj() {
  return this.g = this.xa.ma.b(this.S) || this.g
}
function dj(a, b) {
  this.S = a.id;
  Y.call(this, a, b)
}
C(dj, Ii);
dj.prototype.b = cj;
dj.prototype.clear = function() {
  Hf(this.b())
};
dj.prototype.ba = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  if(this.xa.J != this) {
    c.coordorigin = "0 0"
  }
};
function ej(a, b, c, d, e, g, h, l) {
  this.S = a.id;
  Z.call(this, a, b, h, l);
  this.Ni = c;
  this.Oi = d;
  this.dj = e;
  this.ej = g
}
C(ej, Ji);
ej.prototype.b = cj;
function fj(a, b) {
  this.S = a.id;
  Y.call(this, a, b)
}
C(fj, Ki);
fj.prototype.b = cj;
fj.prototype.ba = function(a, b) {
  var c = this.b().style;
  c.width = gj(a) + "px";
  c.height = gj(b) + "px"
};
function hj(a, b, c, d, e) {
  Xi.call(this, a, b, c, d, e);
  this.ib = new Pg(this)
}
C(hj, Xi);
var ij = document.documentMode && document.documentMode >= 8;
function gj(a) {
  return Math.round((parseFloat(a.toString()) - 0.5) * 100)
}
function $(a) {
  return Math.round(parseFloat(a.toString()) * 100)
}
function jj(a, b) {
  var c = a.ma.createElement("g_vml_:" + b);
  c.id = "goog_" + Fa++;
  return c
}
function kj(a) {
  if(ij && a.C) {
    a.b().innerHTML = a.b().innerHTML
  }
}
hj.prototype.ub = function(a, b) {
  (b || this.J).b().appendChild(a.b());
  kj(this)
};
hj.prototype.Be = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var e = c.childNodes[d];
    e.tagName == "fill" && c.removeChild(e)
  }
  b instanceof Qi ? b.ha() == "transparent" ? c.filled = m : b.oc != 1 ? (c.filled = j, d = jj(this, "fill"), d.opacity = Math.round(b.oc * 100) + "%", d.color = b.ha(), c.appendChild(d)) : (c.filled = j, c.fillcolor = b.ha()) : c.filled = m;
  kj(this)
};
hj.prototype.Ce = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = j;
    var d = b.sb;
    w(d) && d.indexOf("px") == -1 ? d = parseFloat(d) : d *= Yi(this);
    var e = c.getElementsByTagName("stroke")[0];
    d < 1 ? (e = e || jj(this, "stroke"), e.opacity = d, e.fj = "1px", e.color = b.ha(), c.appendChild(e)) : (e && c.removeChild(e), c.strokecolor = b.ha(), c.strokeweight = d + "px")
  }else {
    c.stroked = m
  }
  kj(this)
};
function lj(a, b, c, d, e) {
  var g = a.style;
  g.position = "absolute";
  g.left = gj(b) + "px";
  g.top = gj(c) + "px";
  g.width = $(d) + "px";
  g.height = $(e) + "px";
  if(a.tagName == "shape") {
    a.coordsize = $(d) + " " + $(e)
  }
}
try {
  eval("document.namespaces")
}catch(mj) {
}
r = hj.prototype;
r.i = function() {
  var a = this.ma.B;
  if(!a.namespaces.g_vml_) {
    ij ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}"
  }
  var a = this.width, b = this.height, c = this.ma.i("div", {style:"overflow:hidden;position:relative;width:" + (w(a) && ra(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (w(b) && ra(b) ? b : parseFloat(b.toString()) + "px")});
  this.g = c;
  var d = jj(this, "group"), e = d.style;
  e.position = "absolute";
  e.left = e.top = 0;
  e.width = this.width;
  e.height = this.height;
  d.coordsize = this.la ? $(this.la) + " " + $(this.Zb) : $(a) + " " + $(b);
  d.coordorigin = fa(this.La) ? $(this.La) + " " + $(this.cb) : "0 0";
  c.appendChild(d);
  this.J = new dj(d, this);
  N(c, "resize", A(this.ae, this))
};
r.ae = function() {
  var a = Kg(this.b()), b = this.J.b().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.b();a && a.currentStyle && a.currentStyle.display != "none";) {
      a = a.parentNode
    }
    a && a.currentStyle && V(this.ib, a, "propertychange", this.ae)
  }
  this.dispatchEvent("resize")
};
r.ba = function(a, b) {
  Ig(this.b(), a, b)
};
r.X = function() {
  var a = this.b();
  return new T(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
r.clear = function() {
  this.J.clear()
};
r.Jc = function(a, b, c, d, e, g, h) {
  var l = jj(this, "oval");
  lj(l, a - c, b - d, c * 2, d * 2);
  a = new ej(l, this, a, b, c, d, e, g);
  this.ub(a, h);
  return a
};
r.drawImage = function(a, b, c, d, e, g) {
  var h = jj(this, "image");
  lj(h, a, b, c, d);
  ij ? h.src = e : h.setAttribute("src", e);
  a = new fj(h, this);
  this.ub(a, g);
  return a
};
r.R = function() {
  hj.d.R.call(this);
  this.ae();
  kj(this)
};
r.c = function() {
  this.J = k;
  hj.d.c.call(this)
};
function nj(a) {
  Y.call(this, k, a);
  this.P = []
}
C(nj, Ii);
nj.prototype.clear = function() {
  if(this.P.length) {
    this.P.length = 0, oj(this.xa)
  }
};
nj.prototype.ba = function() {
};
nj.prototype.appendChild = function(a) {
  this.P.push(a)
};
nj.prototype.Ca = function() {
  for(var a = 0, b = this.P.length;a < b;a++) {
    pj(this.xa, this.P[a])
  }
};
function qj(a, b, c, d, e, g, h, l) {
  Z.call(this, a, b, h, l);
  this.Cg = c;
  this.Dg = d;
  this.dg = e;
  this.eg = g;
  this.z = new Si;
  this.z.clear();
  this.z.moveTo(this.Cg + this.dg * Math.cos(Ae(0)), this.Dg + this.eg * Math.sin(Ae(0)));
  this.z.arcTo(this.dg, this.eg, 0, 360);
  this.z.close();
  this.ih = new rj(k, b, this.z, h, l)
}
C(qj, Ji);
qj.prototype.Ca = function(a) {
  this.ih.Ca(a)
};
function rj(a, b, c, d, e) {
  Z.call(this, a, b, d, e);
  this.pb(c)
}
C(rj, Hi);
rj.prototype.ac = m;
rj.prototype.pb = function(a) {
  this.z = a.Pb ? a : Wi(a);
  this.ac && oj(this.xa)
};
rj.prototype.Ca = function(a) {
  this.ac = j;
  a.beginPath();
  Ui(this.z, function(b, c) {
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
function sj(a, b, c, d, e, g, h) {
  Y.call(this, a, b);
  this.Jh = c;
  this.Lh = d;
  this.Te = e;
  this.$d = g;
  this.th = h
}
C(sj, Ki);
sj.prototype.ac = m;
sj.prototype.ba = function(a, b) {
  this.Te = a;
  this.$d = b;
  this.ac && oj(this.xa)
};
sj.prototype.Ca = function(a) {
  this.Bf ? (this.Te && this.$d && a.drawImage(this.Bf, this.Jh, this.Lh, this.Te, this.$d), this.ac = j) : (a = new Image, a.onload = A(this.Sg, this, a), a.src = this.th)
};
sj.prototype.Sg = function(a) {
  this.Bf = a;
  oj(this.xa)
};
function tj(a, b, c, d, e) {
  Xi.call(this, a, b, c, d, e)
}
C(tj, Xi);
r = tj.prototype;
r.Be = function() {
  oj(this)
};
r.Ce = function() {
  oj(this)
};
function uj(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.mg ? b.mg.A() : new Gi, e = d.ia, g = d.ja;
  (e || g) && c.translate(e, g);
  (d = d.T) && c.rotate(Math.asin(d))
}
r.i = function() {
  var a = this.ma.i("div", {style:"position:relative;overflow:hidden"});
  this.g = a;
  this.Xb = this.ma.i("canvas");
  a.appendChild(this.Xb);
  this.$g = this.J = new nj(this);
  this.oh = 0;
  vj(this)
};
r.getContext = function() {
  this.b() || this.i();
  if(!this.xb) {
    this.xb = this.Xb.getContext("2d"), this.xb.save()
  }
  return this.xb
};
r.ba = function(a, b) {
  this.width = a;
  this.height = b;
  vj(this);
  oj(this)
};
r.X = function() {
  var a = this.width, b = this.height, c = w(a) && a.indexOf("%") != -1, d = w(b) && b.indexOf("%") != -1;
  if(!this.C && (c || d)) {
    return k
  }
  var e, g;
  if(c) {
    e = this.b().parentNode, g = Kg(e), a = parseFloat(a) * g.width / 100
  }
  d && (e = e || this.b().parentNode, g = g || Kg(e), b = parseFloat(b) * g.height / 100);
  return new T(a, b)
};
function vj(a) {
  Ig(a.b(), a.width, a.height);
  var b = a.X();
  if(b) {
    Ig(a.Xb, b.width, b.height), a.Xb.width = b.width, a.Xb.height = b.height, a.xb = k
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
function oj(a) {
  if(a.aj) {
    a.$i = j
  }else {
    if(a.C) {
      a.reset();
      if(a.la) {
        var b = a.X();
        a.getContext().scale(b.width / a.la, b.height / a.Zb)
      }
      (a.La || a.cb) && a.getContext().translate(-a.La, -a.cb);
      uj(a, a.J);
      a.J.Ca(a.xb);
      a.getContext().restore()
    }
  }
}
function pj(a, b) {
  var c = a.getContext();
  uj(a, b);
  if(!b.Og || !b.Qg) {
    b.Ca(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof Qi) {
        if(d.oc != 0) {
          c.globalAlpha = d.oc, c.fillStyle = d.ha(), b.Ca(c), c.fill(), c.globalAlpha = 1
        }
      }else {
        var e = c.createLinearGradient(d.Ti(), d.Vi(), d.Ui(), d.Wi());
        e.addColorStop(0, d.Ri());
        e.addColorStop(1, d.Si());
        c.fillStyle = e;
        b.Ca(c);
        c.fill()
      }
    }
    if(d = b.Ne) {
      b.Ca(c), c.strokeStyle = d.ha(), d = d.sb, w(d) && d.indexOf("px") != -1 && (d = parseFloat(d) / Yi(a)), c.lineWidth = d, c.stroke()
    }
  }
  a.getContext().restore()
}
r.ub = function(a, b) {
  this.append(a, b)
};
r.append = function(a, b) {
  b = b || this.J;
  b.appendChild(a);
  this.C && !this.oh && !(b != this.J && b != this.$g) && pj(this, a)
};
r.Jc = function(a, b, c, d, e, g, h) {
  a = new qj(k, this, a, b, c, d, e, g);
  this.append(a, h);
  return a
};
r.drawImage = function(a, b, c, d, e, g) {
  a = new sj(k, this, a, b, c, d, e);
  this.append(a, g);
  return a
};
r.c = function() {
  this.xb = k;
  tj.d.c.call(this)
};
r.R = function() {
  var a = this.X();
  tj.d.R.call(this);
  a || (vj(this), this.dispatchEvent("resize"));
  oj(this)
};
function wj(a) {
  this.v = [];
  xj(this, a)
}
C(wj, qd);
r = wj.prototype;
r.Za = k;
r.ze = k;
function xj(a, b) {
  b && (F(b, function(a) {
    this.wc(a, m)
  }, a), eb(a.v, b))
}
r.Zd = o("Za");
r.rf = function() {
  return db(this.v)
};
r.pd = function(a) {
  if(a != this.Za) {
    this.wc(this.Za, m), this.Za = a, this.wc(a, j)
  }
  this.dispatchEvent("select")
};
r.Yd = function() {
  return this.Za ? Wa(this.v, this.Za) : -1
};
r.Fe = function(a) {
  this.pd(this.v[a] || k)
};
r.clear = function() {
  ab(this.v);
  this.Za = k
};
r.c = function() {
  wj.d.c.call(this);
  delete this.v;
  this.Za = k
};
r.wc = function(a, b) {
  a && (typeof this.ze == "function" ? this.ze(a, b) : typeof a.Ee == "function" && a.Ee(b))
};
function yj() {
}
C(yj, ah);
da(yj);
var Aj = 0;
yj.prototype.i = function(a) {
  var b = ch(this, a);
  return a.Ga().i("div", b ? b.join(" ") : k, Bj(this, a.fa, a.sf(), a.Ga()))
};
function Bj(a, b, c, d) {
  for(var e = [], g = 0, h = 0;g < c.height;g++) {
    for(var l = [], n = 0;n < c.width;n++) {
      var q = b && b[h++];
      l.push(Cj(a, q, d))
    }
    e.push(d.i("tr", a.u() + "-row", l))
  }
  return a.cf(e, d)
}
yj.prototype.cf = function(a, b) {
  var c = b.i("table", this.u() + "-table", b.i("tbody", this.u() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  $g(c, "grid");
  return c
};
function Cj(a, b, c) {
  a = c.i("td", {"class":a.u() + "-cell", id:a.u() + "-cell-" + Aj++}, b);
  $g(a, "gridcell");
  return a
}
yj.prototype.ld = function(a, b) {
  if(a) {
    var c = zf(document, "tbody", this.u() + "-body", a)[0];
    if(c) {
      var d = 0;
      F(c.rows, function(a) {
        F(a.cells, function(a) {
          Hf(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var e = [], g = wf(a), h = c.rows[0].cells.length;d < b.length;) {
          var l = b[d++];
          e.push(Cj(this, l, g));
          if(e.length == h) {
            l = g.i("tr", this.u() + "-row", e), c.appendChild(l), e.length = 0
          }
        }
        if(e.length > 0) {
          for(;e.length < h;) {
            e.push(Cj(this, "", g))
          }
          l = g.i("tr", this.u() + "-row", e);
          c.appendChild(l)
        }
      }
    }
    Og(a, j, mc)
  }
};
function Dj(a, b, c) {
  for(b = b.b();c && c.nodeType == 1 && c != b;) {
    if(c.tagName == "TD" && $a(rf(c), a.u() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function Ej(a, b, c, d) {
  if(c) {
    c = c.parentNode, a = a.u() + "-cell-hover", d ? sf(c, a) : tf(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id)
  }
}
yj.prototype.u = p("goog-palette");
function Fj(a, b, c) {
  W.call(this, a, b || yj.Oa(), c)
}
C(Fj, W);
r = Fj.prototype;
r.w = k;
r.jb = -1;
r.L = k;
r.c = function() {
  Fj.d.c.call(this);
  if(this.L) {
    this.L.f(), this.L = k
  }
  this.w = k
};
r.md = function(a) {
  Fj.d.md.call(this, a);
  Gj(this);
  this.L ? (this.L.clear(), xj(this.L, a)) : (this.L = new wj(a), this.L.ze = A(this.wc, this), V(Xg(this), this.L, "select", this.Vg));
  this.jb = -1
};
r.pf = p(k);
r.Wc = function(a) {
  Fj.d.Wc.call(this, a);
  var b = Dj(this.m, this, a.target);
  if((!b || !a.relatedTarget || !Jf(b, a.relatedTarget)) && b != Hj(this)) {
    a = this.fa, Ij(this, a ? Wa(a, b) : -1)
  }
};
r.Vc = function(a) {
  Fj.d.Vc.call(this, a);
  var b = Dj(this.m, this, a.target);
  (!b || !a.relatedTarget || !Jf(b, a.relatedTarget)) && b == Hj(this) && Ej(this.m, this, b, m)
};
r.Uc = function(a) {
  Fj.d.Uc.call(this, a);
  if(this.he() && (a = Dj(this.m, this, a.target), a != Hj(this))) {
    var b = this.fa;
    Ij(this, b ? Wa(b, a) : -1)
  }
};
r.lb = function() {
  var a = Hj(this);
  return a ? (this.pd(a), this.dispatchEvent("action")) : m
};
r.xf = function(a) {
  var b = this.fa, b = b ? b.length : 0, c = this.w.width;
  if(b == 0 || !this.isEnabled()) {
    return m
  }
  if(a.keyCode == 13 || a.keyCode == 32) {
    return this.lb(a)
  }
  if(a.keyCode == 36) {
    return Ij(this, 0), j
  }else {
    if(a.keyCode == 35) {
      return Ij(this, b - 1), j
    }
  }
  var d = this.jb < 0 ? this.Yd() : this.jb;
  switch(a.keyCode) {
    case 37:
      d == -1 && (d = b);
      if(d > 0) {
        return Ij(this, d - 1), a.preventDefault(), j
      }
      break;
    case 39:
      if(d < b - 1) {
        return Ij(this, d + 1), a.preventDefault(), j
      }
      break;
    case 38:
      d == -1 && (d = b + c - 1);
      if(d >= c) {
        return Ij(this, d - c), a.preventDefault(), j
      }
      break;
    case 40:
      if(d == -1 && (d = -c), d < b - c) {
        return Ij(this, d + c), a.preventDefault(), j
      }
  }
  return m
};
r.Vg = function() {
};
r.sf = o("w");
r.ba = function(a, b) {
  this.b() && f(Error("Component already rendered"));
  this.w = ja(a) ? new T(a, b) : a;
  Gj(this)
};
function Hj(a) {
  var b = a.fa;
  return b && b[a.jb]
}
function Ij(a, b) {
  if(b != a.jb) {
    Jj(a, a.jb, m), a.jb = b, Jj(a, b, j)
  }
}
r.Yd = function() {
  return this.L ? this.L.Yd() : -1
};
r.Zd = function() {
  return this.L ? this.L.Zd() : k
};
r.Fe = function(a) {
  this.L && this.L.Fe(a)
};
r.pd = function(a) {
  this.L && this.L.pd(a)
};
function Jj(a, b, c) {
  if(a.b()) {
    var d = a.fa;
    d && b >= 0 && b < d.length && Ej(a.m, a, d[b], c)
  }
}
r.wc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.m.u() + "-cell-selected";
    b ? sf(c, d) : tf(c, d)
  }
};
function Gj(a) {
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
;function Kj(a, b, c) {
  this.Gc = a || [];
  Fj.call(this, k, b || yj.Oa(), c);
  this.Gc = this.Gc;
  this.ed = k;
  this.ld(Lj(this))
}
C(Kj, Fj);
Kj.prototype.ed = k;
function Mj(a) {
  var b = Nj(Oj);
  if(!a.ed) {
    a.ed = Xa(a.Gc, function(a) {
      return Nj(a)
    })
  }
  a.Fe(b ? Wa(a.ed, b) : -1)
}
function Lj(a) {
  return Xa(a.Gc, function(a) {
    var c = this.Ga().i("div", {"class":this.m.u() + "-colorswatch", style:"background-color:" + a});
    c.title = a.charAt(0) == "#" ? "RGB (" + Kh(a).join(", ") + ")" : a;
    return c
  }, a)
}
function Nj(a) {
  if(a) {
    try {
      return Eh(a).Yc
    }catch(b) {
    }
  }
  return k
}
;var Pj = R("whiteboard.logger");
window.onerror = function(a, b, c) {
  me(Pj, "window.onerror: message: " + H(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Qj() {
  this.ve = new Cb
}
Qj.prototype.yh = function(a, b) {
  Pj.info("streamReset: reasonString=" + H(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  Rj = k
};
Qj.prototype.zh = function(a) {
  var a = Eb(a), b = a[0], c = a[1];
  b == 1 ? (c = this.ve.Qd(yb.fc(), c), a = nb(c, 1), b = nb(c, 2), c = c.ha(), tb.Jc(a, b, 5, 5, new Ri(1, "black"), new Qi(c), i)) : b == 2 ? (tb.f(), Sj()) : O(Pj, "Strange message from server: " + H(a))
};
Qj.prototype.reset = function(a) {
  Pj.info("resetting with reason: " + a);
  this.H.reset(a)
};
var Rj = k, yi = new Hd(t.window);
function Tj() {
  Rj && (Rj.reset("idle timeout fired"), Rj = k)
}
var Uj = k;
function Vj() {
  Uj != k && yi.O.clearTimeout(Uj);
  Rj && (Uj = yi.O.setTimeout(Tj, 2592E5))
}
N(window, ["click", "focus", "keydown", "keypress"], Vj, j);
function Wj() {
  var a = new ui;
  Rj = new Qj;
  Vj();
  Bd(xi(), function(b) {
    Rj || f(Error("lastProto falsy?"));
    var b = new mg(b, a, yi), c = Rj;
    b.ue = A(c.zh, c);
    b.onreset = A(c.yh, c);
    Rj.H = b;
    sg(Rj.H, ["subprotocol:whiteboard"]);
    b.start();
    return k
  })
}
function Xj() {
  tb.f();
  Sj();
  var a = Rj;
  Pj.info("Telling server to clear the board.");
  sg(a.H, [Fb([2, a.ve.yc(new zb)])])
}
function Yj(a) {
  var b = new Ic(a), a = b.offsetX, c = b.offsetY;
  tb.Jc(a, c, 5, 5, new Ri(1, "black"), new Qi(ub), i);
  var d = Rj, e = ub;
  Pj.info("Telling server about circle at: " + a + ", " + c + " with color " + e);
  var b = d.H, g = new yb;
  ob(g, 1, a);
  ob(g, 2, c);
  ob(g, 3, e);
  a = d.ve.yc(g);
  sg(b, [Fb([1, a])])
}
function Sj() {
  var a;
  a = I && !K("9") ? new hj(800, 600, i, i, i) : J && (!K("420") || nc) ? new tj(800, 600, i, i, i) : new Zi(800, 600, i, i, i);
  a.i();
  vb = U("drawArea");
  Yg(a, vb);
  tb = a
}
var Oj = "#E06666";
function Zj(a) {
  var b;
  (a = a.target.Zd()) ? (a = a.style[Ha("background-color")] || "", b = Nj(a)) : b = k;
  b || (b = Oj);
  ub = b;
  si.set("whiteboard_defaultColor", b);
  a = U("whiteboard-cp-value");
  w("background-color") ? Gg(a, b, "background-color") : Ra("background-color", pa(Gg, a));
  a = U("whiteboard-cp-value");
  a.title = b;
  b = Eh(b).Yc;
  Kf(a, b);
  b = Kh(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = Ih(b[0], b[1], b[2]);
  w("color") ? Gg(a, b, "color") : Ra("color", pa(Gg, a))
}
function $j() {
  wb = (new Ve(document.location)).U;
  if(xb = Boolean(Number(wb.get("logging", "0")))) {
    qe().od(ke);
    var a = new Fi(document.getElementById("log"));
    if(j != a.Df) {
      var b = qe(), c = a.mh;
      if(!b.ic) {
        b.ic = []
      }
      b.ic.push(c);
      a.Df = j
    }
  }else {
    qe().od(ce)
  }
  Pj.info("Logger works.");
  (a = si.get("whiteboard_defaultColor")) && (Oj = a);
  ub = Oj;
  b = U("whiteboard-controls-left");
  a = U("whiteboard-controls-right");
  c = Cf("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  Gf(b, c);
  c = Cf("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  Gf(b, c);
  b = new Kj("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.ba(8);
  Yg(b, U("whiteboard-cp"));
  N(b, "action", Zj);
  Mj(b);
  Zj({target:b});
  b = new Ch("Clear board");
  rh(b, "clear-board-button");
  Yg(b, a);
  N(b, "action", Xj);
  a = U("drawAreaOverlay");
  Og(a, j);
  N(a, "click", Yj, m);
  Sj();
  Wj()
}
var ak = "__whiteboard_init".split("."), bk = t;
!(ak[0] in bk) && bk.execScript && bk.execScript("var " + ak[0]);
for(var ck;ak.length && (ck = ak.shift());) {
  !ak.length && fa($j) ? bk[ck] = $j : bk = bk[ck] ? bk[ck] : bk[ck] = {}
}
;})();
