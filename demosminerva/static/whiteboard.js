(function(){function e(a) {
  throw a;
}
var i = void 0, j = !0, k = null, m = !1;
function aa(a) {
  return function(b) {
    this[a] = b
  }
}
function n(a) {
  return function() {
    return this[a]
  }
}
function p(a) {
  return function() {
    return a
  }
}
var q, ba = ba || {}, t = this;
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
function da() {
}
function ea(a) {
  a.Ma = function() {
    return a.Pg || (a.Pg = new a)
  }
}
function fa(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function ga(a) {
  return a !== i
}
function u(a) {
  return"array" == fa(a)
}
function ha(a) {
  var b = fa(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function ia(a) {
  return ja(a) && "function" == typeof a.getFullYear
}
function v(a) {
  return"string" == typeof a
}
function x(a) {
  return"number" == typeof a
}
function ka(a) {
  return"function" == fa(a)
}
function ja(a) {
  a = fa(a);
  return"object" == a || "array" == a || "function" == a
}
function la(a) {
  return a[ma] || (a[ma] = ++na)
}
var ma = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), na = 0;
function oa(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function pa(a, b, c) {
  a || e(Error());
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function y(a, b, c) {
  y = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? oa : pa;
  return y.apply(k, arguments)
}
function qa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var z = Date.now || function() {
  return+new Date
};
function B(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.e = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function D(a) {
  this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
B(D, Error);
D.prototype.name = "CustomError";
function ra(a) {
  var b = a.length - 1;
  return 0 <= b && a.indexOf("%", b) == b
}
function sa(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = ("" + arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
var ta = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function ua(a) {
  a = "" + a;
  return!ta.test(a) ? encodeURIComponent(a) : a
}
function va(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function wa(a) {
  if(!xa.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(ya, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(za, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Aa, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Ba, "&quot;"));
  return a
}
var ya = /&/g, za = /</g, Aa = />/g, Ba = /\"/g, xa = /[&<>\"]/;
function Ca(a) {
  return va(a.replace(/  /g, " &#160;"), i)
}
function Da(a, b) {
  for(var c = 0, d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = ("" + b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(d.length, f.length), h = 0;0 == c && h < g;h++) {
    var l = d[h] || "", o = f[h] || "", r = RegExp("(\\d*)(\\D*)", "g"), A = RegExp("(\\d*)(\\D*)", "g");
    do {
      var s = r.exec(l) || ["", "", ""], w = A.exec(o) || ["", "", ""];
      if(0 == s[0].length && 0 == w[0].length) {
        break
      }
      c = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? -1 : (0 == s[1].length ? 0 : parseInt(s[1], 10)) > (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == w[2].length) ? -1 : (0 == s[2].length) > (0 == w[2].length) ? 1 : 0) || (s[2] < w[2] ? -1 : s[2] > w[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
}
var Ea = 2147483648 * Math.random() | 0, Fa = {};
function Ga(a) {
  return Fa[a] || (Fa[a] = ("" + a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
}
;function Ha(a, b) {
  b.unshift(a);
  D.call(this, sa.apply(k, b));
  b.shift()
}
B(Ha, D);
Ha.prototype.name = "AssertionError";
function Ia(a, b) {
  e(new Ha("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ja(a, b, c) {
  this.C = a;
  this.J = b;
  this.me = c.name;
  this.Cb = !!c.Ii;
  this.bc = c.Td;
  this.If = c.type;
  this.df = m;
  switch(this.bc) {
    case Ka:
    ;
    case La:
    ;
    case Ma:
    ;
    case Na:
    ;
    case Oa:
      this.df = j
  }
}
var Ka = 3, La = 4, Ma = 6, Na = 16, Oa = 18;
function Pa(a) {
  return 11 == a.bc || 10 == a.bc
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
function Ta(a, b) {
  var c;
  (c = b in a) && delete a[b];
  return c
}
var Ua = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function Va(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
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
  c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(v(a)) {
    return!v(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Xa = E.forEach ? function(a, b, c) {
  E.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
}, Ya = E.map ? function(a, b, c) {
  return E.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = v(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (f[h] = b.call(c, g[h], h, a))
  }
  return f
}, Za = E.some ? function(a, b, c) {
  return E.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return j
    }
  }
  return m
}, $a = E.every ? function(a, b, c) {
  return E.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && !b.call(c, f[g], g, a)) {
      return m
    }
  }
  return j
};
function ab(a, b) {
  return 0 <= Wa(a, b)
}
function bb(a) {
  if(!u(a)) {
    for(var b = a.length - 1;0 <= b;b--) {
      delete a[b]
    }
  }
  a.length = 0
}
function cb(a, b) {
  var c = Wa(a, b);
  0 <= c && E.splice.call(a, c, 1)
}
function db(a) {
  return E.concat.apply(E, arguments)
}
function eb(a) {
  if(u(a)) {
    return db(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
}
function fb(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], f;
    if(u(d) || (f = ha(d)) && d.hasOwnProperty("callee")) {
      a.push.apply(a, d)
    }else {
      if(f) {
        for(var g = a.length, h = d.length, l = 0;l < h;l++) {
          a[g + l] = d[l]
        }
      }else {
        a.push(d)
      }
    }
  }
}
function gb(a, b, c, d) {
  E.splice.apply(a, hb(arguments, 1))
}
function hb(a, b, c) {
  return 2 >= arguments.length ? E.slice.call(a, b) : E.slice.call(a, b, c)
}
function ib(a, b) {
  E.sort.call(a, b || jb)
}
function jb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function kb(a, b, c) {
  this.Gf = a;
  this.me = b.name || k;
  this.Ka = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.Ka[b.J] = b
  }
}
function lb(a) {
  a = Ra(a.Ka);
  ib(a, function(a, c) {
    return a.J - c.J
  });
  return a
}
;function mb() {
  this.t = {};
  this.yb = this.constructor.yb;
  var a = this.yb.Ka, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.Ka = b;
  this.Yb = this.ie = k
}
function nb(a, b) {
  for(var c in a.t) {
    a.Ka[c] || b.call(a, Number(c), a.t[c])
  }
}
q = mb.prototype;
q.dc = n("yb");
q.get = function(a, b) {
  return ob(this, a.J, b)
};
q.set = function(a, b) {
  pb(this, a.J, b)
};
q.add = function(a, b) {
  var c = a.J;
  this.t[c] || (this.t[c] = []);
  this.t[c].push(b)
};
q.clear = function(a) {
  delete this.t[a.J]
};
q.m = function(a) {
  if(!a || this.constructor != a.constructor) {
    return m
  }
  for(var b = lb(this.dc()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(qb(this, d.J) != qb(a, d.J)) {
      return m
    }
    if(qb(this, d.J)) {
      var f = Pa(d), g = d.J, h = this.t[g], g = a.t[g];
      if(d.Cb) {
        if(h.length != g.length) {
          return m
        }
        for(d = 0;d < h.length;d++) {
          if(!(f ? h[d].m(g[d]) : h[d] == g[d])) {
            return m
          }
        }
      }else {
        if(!(f ? h.m(g) : h == g)) {
          return m
        }
      }
    }
  }
  return j
};
q.We = function(a) {
  for(var b = lb(this.dc()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete this.t[d.J];
    if(qb(a, d.J)) {
      var f = Pa(d);
      if(d.Cb) {
        var g;
        g = a;
        var h = d.J;
        rb(g, g.Ka[h]);
        g = g.t[h] || [];
        for(h = 0;h < g.length;h++) {
          this.add(d, f ? g[h].A() : g[h])
        }
      }else {
        g = a.get(d), this.set(d, f ? g.A() : g)
      }
    }
  }
};
q.A = function() {
  var a = new this.constructor;
  a.We(this);
  return a
};
function qb(a, b) {
  return b in a.t && ga(a.t[b]) && a.t[b] !== k
}
function rb(a, b) {
  if(a.ie) {
    var c = b.J;
    if(!(c in a.Yb)) {
      var d = a.t, f;
      f = a.ie;
      var g = a.t[c];
      if(g == k) {
        f = g
      }else {
        if(b.Cb) {
          var h = [];
          u(g);
          for(var l = 0;l < g.length;l++) {
            h[l] = f.Lc(b, g[l])
          }
          f = h
        }else {
          f = f.Lc(b, g)
        }
      }
      d[c] = f;
      a.Yb[c] = j
    }
  }
}
function ob(a, b, c) {
  var d = a.Ka[b];
  rb(a, d);
  if(d.Cb) {
    return c = c || 0, 0 <= c && sb(a, b), a.t[b][c]
  }
  u(a.t[b]);
  return b in a.t ? a.t[b] : k
}
function sb(a, b) {
  return a.Ka[b].Cb ? (qb(a, b) && u(a.t[b]), qb(a, b) ? a.t[b].length : 0) : qb(a, b) ? 1 : 0
}
function pb(a, b, c) {
  a.t[b] = c;
  a.Yb && (a.Yb[b] = j)
}
function tb(a, b) {
  var c = [], d, f;
  for(f in b) {
    b.hasOwnProperty(f) && (0 == f ? d = b[0] : c.push(new Ja(a, f, b[f])))
  }
  a.yb = new kb(a, d, c);
  a.dc = function() {
    return a.yb
  }
}
;var ub, vb, wb, xb, yb;
function zb() {
  mb.apply(this)
}
B(zb, mb);
zb.prototype.ja = function() {
  return ob(this, 3)
};
function Ab() {
  mb.apply(this)
}
B(Ab, mb);
tb(zb, {"0":{name:"Point", Eg:"demosminerva.whiteboard_messages.Point"}, 1:{name:"x", Td:5, type:Number}, 2:{name:"y", Td:5, type:Number}, 3:{name:"color", Td:9, type:String}});
tb(Ab, {"0":{name:"ClearBoard", Eg:"demosminerva.whiteboard_messages.ClearBoard"}});
function Bb() {
}
Bb.prototype.Mc = function(a, b) {
  return Pa(a) ? this.tc(b) : b
};
Bb.prototype.Nd = function(a) {
  new a.Gf;
  e(Error("Unimplemented"))
};
Bb.prototype.Lc = function(a, b) {
  if(Pa(a)) {
    return this.Nd(a.If.yb, b)
  }
  if(!a.df) {
    return b
  }
  var c = a.If;
  if(c === String) {
    if("number" === typeof b) {
      return"" + b
    }
  }else {
    if(c === Number && "string" === typeof b && /^-?[0-9]+$/.test(b)) {
      return Number(b)
    }
  }
  return b
};
function Cb() {
}
B(Cb, Bb);
Cb.prototype.Nd = function(a, b) {
  var c = new a.Gf;
  c.ie = this;
  c.t = b;
  c.Yb = {};
  return c
};
function Db() {
}
B(Db, Cb);
Db.prototype.tc = function(a) {
  for(var b = lb(a.dc()), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    if(qb(a, f.J)) {
      var g = f.J;
      if(f.Cb) {
        c[g] = [];
        for(var h = 0;h < sb(a, f.J);h++) {
          c[g][h] = this.Mc(f, a.get(f, h))
        }
      }else {
        c[g] = this.Mc(f, a.get(f))
      }
    }
  }
  nb(a, function(a, b) {
    c[a] = b
  });
  return c
};
Db.prototype.Mc = function(a, b) {
  return 8 == a.bc ? b ? 1 : 0 : Bb.prototype.Mc.apply(this, arguments)
};
Db.prototype.Lc = function(a, b) {
  return 8 == a.bc ? 1 === b : Bb.prototype.Lc.apply(this, arguments)
};
function Eb(a) {
  return ka(a) || "object" == typeof a && ka(a.call) && ka(a.apply)
}
;function Fb(a) {
  a = "" + a;
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
function Gb(a) {
  return(new Hb(i)).tc(a)
}
function Hb(a) {
  this.hd = a
}
Hb.prototype.tc = function(a) {
  var b = [];
  Ib(this, a, b);
  return b.join("")
};
function Ib(a, b, c) {
  switch(typeof b) {
    case "string":
      Jb(b, c);
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
      if(u(b)) {
        var d = b.length;
        c.push("[");
        for(var f = "", g = 0;g < d;g++) {
          c.push(f), f = b[g], Ib(a, a.hd ? a.hd.call(b, "" + g, f) : f, c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), Jb(g, c), c.push(":"), Ib(a, a.hd ? a.hd.call(b, g, f) : f, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var Kb = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Lb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Jb(a, b) {
  b.push('"', a.replace(Lb, function(a) {
    if(a in Kb) {
      return Kb[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
    return Kb[a] = f + b.toString(16)
  }), '"')
}
;function Mb(a, b, c) {
  var d = Wa(c, a);
  if(-1 != d) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = fa(a);
    if("boolean" == d || "number" == d || "null" == d || "undefined" == d) {
      b.push("" + a)
    }else {
      if("string" == d) {
        Jb(a, b)
      }else {
        if(Eb(a.u)) {
          a.u(b, c)
        }else {
          if(Eb(a.lg)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if("array" == d) {
                d = a.length;
                b.push("[");
                for(var f = "", g = 0;g < d;g++) {
                  b.push(f), Mb(a[g], b, c), f = ", "
                }
                b.push("]")
              }else {
                if("object" == d) {
                  if(ia(a) && "function" == typeof a.valueOf) {
                    b.push("new Date(", "" + a.valueOf(), ")")
                  }else {
                    for(var d = Sa(a).concat(Ua), f = {}, h = g = 0;h < d.length;) {
                      var l = d[h++], o = ja(l) ? "o" + la(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(f, o) || (f[o] = j, d[g++] = l)
                    }
                    d.length = g;
                    b.push("{");
                    f = "";
                    for(h = 0;h < d.length;h++) {
                      g = d[h], Object.prototype.hasOwnProperty.call(a, g) && (l = a[g], b.push(f), Jb(g, b), b.push(": "), Mb(l, b, c), f = ", ")
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
  Mb(a, b, c)
}
function G(a) {
  var b = [];
  F(a, b, i);
  return b.join("")
}
;function Nb(a) {
  if("function" == typeof a.ba) {
    a = a.ba()
  }else {
    if(ha(a) || v(a)) {
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
function Ob(a) {
  if("function" == typeof a.da) {
    return a.da()
  }
  if(v(a)) {
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
function Pb(a) {
  if("function" == typeof a.wa) {
    return a.wa()
  }
  if("function" != typeof a.da) {
    if(ha(a) || v(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return Sa(a)
  }
}
function Qb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ha(a) || v(a)) {
      Xa(a, b, c)
    }else {
      for(var d = Pb(a), f = Ob(a), g = f.length, h = 0;h < g;h++) {
        b.call(c, f[h], d && d[h], a)
      }
    }
  }
}
function Rb(a, b) {
  if("function" == typeof a.every) {
    return a.every(b, i)
  }
  if(ha(a) || v(a)) {
    return $a(a, b, i)
  }
  for(var c = Pb(a), d = Ob(a), f = d.length, g = 0;g < f;g++) {
    if(!b.call(i, d[g], c && c[g], a)) {
      return m
    }
  }
  return j
}
;function Sb(a, b) {
  this.r = {};
  this.cd = {};
  var c = arguments.length;
  if(1 < c) {
    c % 2 && e(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.yd(a)
  }
}
q = Sb.prototype;
q.f = 0;
q.ba = n("f");
q.da = function() {
  var a = [], b;
  for(b in this.r) {
    ":" == b.charAt(0) && a.push(this.r[b])
  }
  return a
};
q.wa = function() {
  var a = [], b;
  for(b in this.r) {
    ":" == b.charAt(0) && a.push(Tb(this, b))
  }
  return a
};
q.ga = function(a) {
  return":" + a in this.r
};
q.Ec = function(a) {
  for(var b in this.r) {
    if(":" == b.charAt(0) && this.r[b] == a) {
      return j
    }
  }
  return m
};
q.m = function(a, b) {
  if(this === a) {
    return j
  }
  if(this.f != a.ba()) {
    return m
  }
  var c = b || Ub, d;
  for(d in this.r) {
    if(d = Tb(this, d), !c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function Ub(a, b) {
  return a === b
}
q.Oa = function() {
  return 0 == this.f
};
q.clear = function() {
  this.r = {};
  this.f = 0;
  this.cd = {}
};
q.remove = function(a) {
  a = ":" + a;
  return Ta(this.r, a) ? (delete this.cd[a], this.f--, j) : m
};
q.get = function(a, b) {
  var c = ":" + a;
  return c in this.r ? this.r[c] : b
};
q.set = function(a, b) {
  var c = ":" + a;
  c in this.r || (this.f++, x(a) && (this.cd[c] = j));
  this.r[c] = b
};
q.yd = function(a) {
  var b;
  a instanceof Sb ? (b = a.wa(), a = a.da()) : (b = Sa(a), a = Ra(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
q.A = function() {
  return new Sb(this)
};
function Tb(a, b) {
  var c = b.substring(1);
  return a.cd[b] ? Number(c) : c
}
;function Vb(a) {
  var b = fa(a);
  if("string" == b) {
    return 21 + 2 * a.length
  }
  if("number" == b) {
    return 16
  }
  if("boolean" == b) {
    return 12
  }
  if("null" == b || "undefined" == b) {
    return 8
  }
  e(Error("cannot determine size of object type " + b))
}
;function Wb(a, b) {
  this.sb = a;
  this.nb = b
}
Wb.prototype.m = function(a) {
  return a instanceof Wb && this.sb == a.sb && this.nb.join(",") == a.nb
};
Wb.prototype.u = function(a, b) {
  a.push("new SACK(", "" + this.sb, ", ");
  F(this.nb, a, b);
  a.push(")")
};
function Xb() {
  this.B = new Sb
}
q = Xb.prototype;
q.bb = -1;
q.n = 0;
q.append = function(a) {
  var b = Vb(a);
  this.B.set(this.bb + 1, [a, b]);
  this.bb += 1;
  this.n += b
};
q.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
q.u = function(a) {
  a.push("<Queue with ", "" + this.B.ba(), " item(s), counter=#", "" + this.bb, ", size=", "" + this.n, ">")
};
function Yb(a) {
  a = a.B.wa();
  ib(a);
  return a
}
q.kf = function(a) {
  for(var b = Yb(this), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    (a == k || f >= a) && c.push([f, this.B.get(f)[0]])
  }
  return c
};
function Zb() {
  this.$a = new Sb
}
Zb.prototype.jb = -1;
Zb.prototype.n = 0;
function $b(a) {
  var b = a.$a.wa();
  ib(b);
  return new Wb(a.jb, b)
}
var ac = {};
function bc() {
  return j
}
;var cc, dc, ec, fc, gc;
function hc() {
  return t.navigator ? t.navigator.userAgent : k
}
gc = fc = ec = dc = cc = m;
var ic;
if(ic = hc()) {
  var jc = t.navigator;
  cc = 0 == ic.indexOf("Opera");
  dc = !cc && -1 != ic.indexOf("MSIE");
  fc = (ec = !cc && -1 != ic.indexOf("WebKit")) && -1 != ic.indexOf("Mobile");
  gc = !cc && !ec && "Gecko" == jc.product
}
var kc = cc, H = dc, lc = gc, I = ec, mc = fc, nc = t.navigator, oc = -1 != (nc && nc.platform || "").indexOf("Mac"), pc;
a: {
  var qc = "", rc;
  if(kc && t.opera) {
    var sc = t.opera.version, qc = "function" == typeof sc ? sc() : sc
  }else {
    if(lc ? rc = /rv\:([^\);]+)(\)|;)/ : H ? rc = /MSIE\s+([^\);]+)(\)|;)/ : I && (rc = /WebKit\/(\S+)/), rc) {
      var tc = rc.exec(hc()), qc = tc ? tc[1] : ""
    }
  }
  if(H) {
    var uc, vc = t.document;
    uc = vc ? vc.documentMode : i;
    if(uc > parseFloat(qc)) {
      pc = "" + uc;
      break a
    }
  }
  pc = qc
}
var wc = {};
function J(a) {
  return wc[a] || (wc[a] = 0 <= Da(pc, a))
}
var xc = {};
function yc() {
  return xc[9] || (xc[9] = H && document.documentMode && 9 <= document.documentMode)
}
;function zc() {
}
var Ac = 0;
q = zc.prototype;
q.key = 0;
q.mb = m;
q.Dd = m;
q.hc = function(a, b, c, d, f, g) {
  ka(a) ? this.yf = j : a && a.handleEvent && ka(a.handleEvent) ? this.yf = m : e(Error("Invalid listener argument"));
  this.Gb = a;
  this.Rf = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Tc = g;
  this.Dd = m;
  this.key = ++Ac;
  this.mb = m
};
q.handleEvent = function(a) {
  return this.yf ? this.Gb.call(this.Tc || this.src, a) : this.Gb.handleEvent.call(this.Gb, a)
};
var Bc = !H || yc(), Cc = !H || yc(), Dc = H && !J("8");
!I || J("528");
lc && J("1.9b") || H && J("8") || kc && J("9.5") || I && J("528");
!lc || J("8");
var Ec = {Fh:"click", Kh:"dblclick", ei:"mousedown", ii:"mouseup", hi:"mouseover", gi:"mouseout", fi:"mousemove", si:"selectstart", Zh:"keypress", Yh:"keydown", $h:"keyup", Dh:"blur", Sh:"focus", Lh:"deactivate", Th:H ? "focusin" : "DOMFocusIn", Uh:H ? "focusout" : "DOMFocusOut", Eh:"change", ri:"select", ti:"submit", Xh:"input", ni:"propertychange", Ph:"dragstart", Mh:"dragenter", Oh:"dragover", Nh:"dragleave", Qh:"drop", xi:"touchstart", wi:"touchmove", vi:"touchend", ui:"touchcancel", Hh:"contextmenu", 
Rh:"error", Wh:"help", ai:"load", bi:"losecapture", oi:"readystatechange", pi:"resize", qi:"scroll", zi:"unload", Vh:"hashchange", ji:"pagehide", ki:"pageshow", mi:"popstate", Ih:"copy", li:"paste", Jh:"cut", Ah:"beforecopy", Bh:"beforecut", Ch:"beforepaste", di:"message", Gh:"connect", yi:I ? "webkitTransitionEnd" : kc ? "oTransitionEnd" : "transitionend"};
function K() {
}
K.prototype.ua = m;
K.prototype.g = function() {
  this.ua || (this.ua = j, this.c())
};
K.prototype.c = function() {
  this.vg && Fc.apply(k, this.vg)
};
function Fc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? Fc.apply(k, d) : d && "function" == typeof d.g && d.g()
  }
}
;function Gc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
B(Gc, K);
q = Gc.prototype;
q.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
q.lb = m;
q.pc = j;
q.stopPropagation = function() {
  this.lb = j
};
q.preventDefault = function() {
  this.pc = m
};
function Hc(a) {
  a.stopPropagation()
}
;function Ic(a) {
  Ic[" "](a);
  return a
}
Ic[" "] = da;
function Jc(a, b) {
  a && this.hc(a, b)
}
B(Jc, Gc);
var Kc = [1, 4, 2];
q = Jc.prototype;
q.target = k;
q.relatedTarget = k;
q.offsetX = 0;
q.offsetY = 0;
q.clientX = 0;
q.clientY = 0;
q.screenX = 0;
q.screenY = 0;
q.button = 0;
q.keyCode = 0;
q.charCode = 0;
q.ctrlKey = m;
q.altKey = m;
q.shiftKey = m;
q.metaKey = m;
q.te = m;
q.Da = k;
q.hc = function(a, b) {
  var c = this.type = a.type;
  Gc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(lc) {
      var f;
      a: {
        try {
          Ic(d.nodeName);
          f = j;
          break a
        }catch(g) {
        }
        f = m
      }
      f || (d = k)
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
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
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.te = oc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Da = a;
  delete this.pc;
  delete this.lb
};
function Lc(a) {
  return Bc ? 0 == a.Da.button : "click" == a.type ? j : !!(a.Da.button & Kc[0])
}
q.stopPropagation = function() {
  Jc.e.stopPropagation.call(this);
  this.Da.stopPropagation ? this.Da.stopPropagation() : this.Da.cancelBubble = j
};
q.preventDefault = function() {
  Jc.e.preventDefault.call(this);
  var a = this.Da;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, Dc) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
q.c = function() {
  Jc.e.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Da = k
};
var Mc = {}, L = {}, Nc = {}, Oc = {};
function M(a, b, c, d, f) {
  if(b) {
    if(u(b)) {
      for(var g = 0;g < b.length;g++) {
        M(a, b[g], c, d, f)
      }
      return k
    }
    var d = !!d, h = L;
    b in h || (h[b] = {f:0, ka:0});
    h = h[b];
    d in h || (h[d] = {f:0, ka:0}, h.f++);
    var h = h[d], l = la(a), o;
    h.ka++;
    if(h[l]) {
      o = h[l];
      for(g = 0;g < o.length;g++) {
        if(h = o[g], h.Gb == c && h.Tc == f) {
          if(h.mb) {
            break
          }
          return o[g].key
        }
      }
    }else {
      o = h[l] = [], h.f++
    }
    g = Pc();
    g.src = a;
    h = new zc;
    h.hc(c, g, a, b, d, f);
    c = h.key;
    g.key = c;
    o.push(h);
    Mc[c] = h;
    Nc[l] || (Nc[l] = []);
    Nc[l].push(h);
    a.addEventListener ? (a == t || !a.Kd) && a.addEventListener(b, g, d) : a.attachEvent(b in Oc ? Oc[b] : Oc[b] = "on" + b, g);
    return c
  }
  e(Error("Invalid event type"))
}
function Pc() {
  var a = Qc, b = Cc ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Rc(a, b, c, d, f) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      Rc(a, b[g], c, d, f)
    }
    return k
  }
  a = M(a, b, c, d, f);
  Mc[a].Dd = j;
  return a
}
function Sc(a, b, c, d, f) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      Sc(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = Tc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Gb == c && a[g].capture == d && a[g].Tc == f) {
          Uc(a[g].key);
          break
        }
      }
    }
  }
}
function Uc(a) {
  if(!Mc[a]) {
    return m
  }
  var b = Mc[a];
  if(b.mb) {
    return m
  }
  var c = b.src, d = b.type, f = b.Rf, g = b.capture;
  c.removeEventListener ? (c == t || !c.Kd) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in Oc ? Oc[d] : Oc[d] = "on" + d, f);
  c = la(c);
  f = L[d][g][c];
  if(Nc[c]) {
    var h = Nc[c];
    cb(h, b);
    0 == h.length && delete Nc[c]
  }
  b.mb = j;
  f.Kf = j;
  Vc(d, g, c, f);
  delete Mc[a];
  return j
}
function Vc(a, b, c, d) {
  if(!d.ad && d.Kf) {
    for(var f = 0, g = 0;f < d.length;f++) {
      d[f].mb ? d[f].Rf.src = k : (f != g && (d[g] = d[f]), g++)
    }
    d.length = g;
    d.Kf = m;
    0 == g && (delete L[a][b][c], L[a][b].f--, 0 == L[a][b].f && (delete L[a][b], L[a].f--), 0 == L[a].f && delete L[a])
  }
}
function Wc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Qa(Nc, function(a) {
      for(var f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          Uc(g.key), c++
        }
      }
    })
  }else {
    if(a = la(a), Nc[a]) {
      for(var a = Nc[a], f = a.length - 1;0 <= f;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          Uc(g.key), c++
        }
      }
    }
  }
}
function Tc(a, b, c) {
  var d = L;
  return b in d && (d = d[b], c in d && (d = d[c], a = la(a), d[a])) ? d[a] : k
}
function Xc(a, b, c, d, f) {
  var g = 1, b = la(b);
  if(a[b]) {
    a.ka--;
    a = a[b];
    a.ad ? a.ad++ : a.ad = 1;
    try {
      for(var h = a.length, l = 0;l < h;l++) {
        var o = a[l];
        o && !o.mb && (g &= Yc(o, f) !== m)
      }
    }finally {
      a.ad--, Vc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Yc(a, b) {
  var c = a.handleEvent(b);
  a.Dd && Uc(a.key);
  return c
}
function Qc(a, b) {
  if(!Mc[a]) {
    return j
  }
  var c = Mc[a], d = c.type, f = L;
  if(!(d in f)) {
    return j
  }
  var f = f[d], g, h;
  if(!Cc) {
    g = b || ca("window.event");
    var l = j in f, o = m in f;
    if(l) {
      if(0 > g.keyCode || g.returnValue != i) {
        return j
      }
      a: {
        var r = m;
        if(0 == g.keyCode) {
          try {
            g.keyCode = -1;
            break a
          }catch(A) {
            r = j
          }
        }
        if(r || g.returnValue == i) {
          g.returnValue = j
        }
      }
    }
    r = new Jc;
    r.hc(g, this);
    g = j;
    try {
      if(l) {
        for(var s = [], w = r.currentTarget;w;w = w.parentNode) {
          s.push(w)
        }
        h = f[j];
        h.ka = h.f;
        for(var C = s.length - 1;!r.lb && 0 <= C && h.ka;C--) {
          r.currentTarget = s[C], g &= Xc(h, s[C], d, j, r)
        }
        if(o) {
          h = f[m];
          h.ka = h.f;
          for(C = 0;!r.lb && C < s.length && h.ka;C++) {
            r.currentTarget = s[C], g &= Xc(h, s[C], d, m, r)
          }
        }
      }else {
        g = Yc(c, r)
      }
    }finally {
      s && (s.length = 0), r.g()
    }
    return g
  }
  d = new Jc(b, this);
  try {
    g = Yc(c, d)
  }finally {
    d.g()
  }
  return g
}
var Zc = 0;
function $c() {
}
B($c, K);
q = $c.prototype;
q.Kd = j;
q.ed = k;
q.Ae = aa("ed");
q.addEventListener = function(a, b, c, d) {
  M(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Sc(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = L;
  if(b in c) {
    if(v(a)) {
      a = new Gc(a, this)
    }else {
      if(a instanceof Gc) {
        a.target = a.target || this
      }else {
        var d = a, a = new Gc(b, this);
        Va(a, d)
      }
    }
    var d = 1, f, c = c[b], b = j in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.ed) {
        f.push(g)
      }
      g = c[j];
      g.ka = g.f;
      for(var h = f.length - 1;!a.lb && 0 <= h && g.ka;h--) {
        a.currentTarget = f[h], d &= Xc(g, f[h], a.type, j, a) && a.pc != m
      }
    }
    if(m in c) {
      if(g = c[m], g.ka = g.f, b) {
        for(h = 0;!a.lb && h < f.length && g.ka;h++) {
          a.currentTarget = f[h], d &= Xc(g, f[h], a.type, m, a) && a.pc != m
        }
      }else {
        for(f = this;!a.lb && f && g.ka;f = f.ed) {
          a.currentTarget = f, d &= Xc(g, f, a.type, m, a) && a.pc != m
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
q.c = function() {
  $c.e.c.call(this);
  Wc(this);
  this.ed = k
};
function ad(a, b) {
  this.Wc = a || 1;
  this.wc = b || bd;
  this.Bd = y(this.oh, this);
  this.he = z()
}
B(ad, $c);
ad.prototype.enabled = m;
var bd = t.window;
q = ad.prototype;
q.ra = k;
q.oh = function() {
  if(this.enabled) {
    var a = z() - this.he;
    0 < a && a < 0.8 * this.Wc ? this.ra = this.wc.setTimeout(this.Bd, this.Wc - a) : (this.dispatchEvent(cd), this.enabled && (this.ra = this.wc.setTimeout(this.Bd, this.Wc), this.he = z()))
  }
};
q.start = function() {
  this.enabled = j;
  this.ra || (this.ra = this.wc.setTimeout(this.Bd, this.Wc), this.he = z())
};
q.stop = function() {
  this.enabled = m;
  this.ra && (this.wc.clearTimeout(this.ra), this.ra = k)
};
q.c = function() {
  ad.e.c.call(this);
  this.stop();
  delete this.wc
};
var cd = "tick";
Zc++;
Zc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function ed(a, b) {
  this.Bc = [];
  this.Se = a;
  this.af = b || k
}
q = ed.prototype;
q.La = m;
q.ec = m;
q.lc = 0;
q.Fe = m;
q.rg = m;
q.Cd = 0;
q.cancel = function(a) {
  if(this.La) {
    this.oc instanceof ed && this.oc.cancel()
  }else {
    if(this.C) {
      var b = this.C;
      delete this.C;
      a ? b.cancel(a) : (b.Cd--, 0 >= b.Cd && b.cancel())
    }
    this.Se ? this.Se.call(this.af, this) : this.Fe = j;
    this.La || this.ac(new fd)
  }
};
q.Ve = function(a, b) {
  gd(this, a, b);
  this.lc--;
  0 == this.lc && this.La && hd(this)
};
function gd(a, b, c) {
  a.La = j;
  a.oc = c;
  a.ec = !b;
  hd(a)
}
function id(a) {
  a.La && (a.Fe || e(new jd), a.Fe = m)
}
function kd(a, b) {
  id(a);
  gd(a, j, b)
}
q.ac = function(a) {
  id(this);
  gd(this, m, a)
};
function ld(a, b) {
  md(a, b, k, i)
}
function md(a, b, c, d) {
  a.Bc.push([b, c, d]);
  a.La && hd(a)
}
function nd(a, b) {
  md(a, b, b, i)
}
function od(a) {
  return Za(a.Bc, function(a) {
    return ka(a[1])
  })
}
function hd(a) {
  a.Ne && a.La && od(a) && (t.clearTimeout(a.Ne), delete a.Ne);
  a.C && (a.C.Cd--, delete a.C);
  for(var b = a.oc, c = m, d = m;a.Bc.length && 0 == a.lc;) {
    var f = a.Bc.shift(), g = f[0], h = f[1], f = f[2];
    if(g = a.ec ? h : g) {
      try {
        var l = g.call(f || a.af, b);
        ga(l) && (a.ec = a.ec && (l == b || l instanceof Error), a.oc = b = l);
        b instanceof ed && (d = j, a.lc++)
      }catch(o) {
        b = o, a.ec = j, od(a) || (c = j)
      }
    }
  }
  a.oc = b;
  d && a.lc && (md(b, y(a.Ve, a, j), y(a.Ve, a, m)), b.rg = j);
  c && (a.Ne = t.setTimeout(function() {
    ga(b.message) && b.stack && (b.message += "\n" + b.stack);
    e(b)
  }, 0))
}
function pd(a) {
  var b = new ed;
  kd(b, a);
  return b
}
function qd(a) {
  var b = new ed;
  b.ac(a);
  return b
}
function jd() {
  D.call(this)
}
B(jd, D);
jd.prototype.message = "Already called";
function fd() {
  D.call(this)
}
B(fd, D);
fd.prototype.message = "Deferred was cancelled";
function rd(a) {
  this.N = a;
  this.Gc = [];
  this.ef = [];
  this.qg = y(this.sh, this)
}
rd.prototype.ra = k;
function sd(a, b, c, d) {
  a.Gc.push([b, c, d]);
  a.ra == k && (a.ra = a.N.setTimeout(a.qg, 0))
}
rd.prototype.sh = function() {
  this.ra = k;
  var a = this.Gc;
  this.Gc = [];
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
  if(0 == this.Gc.length) {
    a = this.ef;
    this.ef = [];
    for(b = 0;b < a.length;b++) {
      kd(a[b], k)
    }
  }
};
var td = new rd(t.window);
function ud(a, b) {
  switch(fa(b)) {
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
        a.push('<property id="', d, '">'), ud(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', wa(c), '">'), ud(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function vd(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, f = arguments;
  d.push("<arguments>");
  for(var g = f.length, h = 1;h < g;h++) {
    ud(d, f[h])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;function wd() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ z()).toString(36)
}
function xd(a) {
  return a.substr(0, a.length - 1)
}
var yd = /^(0|[1-9]\d*)$/, zd = /^(0|\-?[1-9]\d*)$/;
function Ad(a) {
  var b = Bd;
  return yd.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function Cd(a) {
  this.r = new Sb;
  a && this.yd(a)
}
function Dd(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + la(a) : b.substr(0, 1) + a
}
q = Cd.prototype;
q.ba = function() {
  return this.r.ba()
};
q.add = function(a) {
  this.r.set(Dd(a), a)
};
q.yd = function(a) {
  for(var a = Ob(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
q.ue = function(a) {
  for(var a = Ob(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
q.remove = function(a) {
  return this.r.remove(Dd(a))
};
q.clear = function() {
  this.r.clear()
};
q.Oa = function() {
  return this.r.Oa()
};
q.contains = function(a) {
  return this.r.ga(Dd(a))
};
q.da = function() {
  return this.r.da()
};
q.A = function() {
  return new Cd(this)
};
q.m = function(a) {
  return this.ba() == Nb(a) && Ed(this, a)
};
function Ed(a, b) {
  var c = Nb(b);
  if(a.ba() > c) {
    return m
  }
  !(b instanceof Cd) && 5 < c && (b = new Cd(b));
  return Rb(a, function(a) {
    if("function" == typeof b.contains) {
      a = b.contains(a)
    }else {
      if("function" == typeof b.Ec) {
        a = b.Ec(a)
      }else {
        if(ha(b) || v(b)) {
          a = ab(b, a)
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
;function Fd(a) {
  return Gd(a || arguments.callee.caller, [])
}
function Gd(a, b) {
  var c = [];
  if(ab(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Hd(a) + "(");
      for(var d = a.arguments, f = 0;f < d.length;f++) {
        0 < f && c.push(", ");
        var g;
        g = d[f];
        switch(typeof g) {
          case "object":
            g = g ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            g = "" + g;
            break;
          case "boolean":
            g = g ? "true" : "false";
            break;
          case "function":
            g = (g = Hd(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        c.push(g)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Gd(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Hd(a) {
  if(Id[a]) {
    return Id[a]
  }
  a = "" + a;
  if(!Id[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Id[a] = b ? b[1] : "[Anonymous]"
  }
  return Id[a]
}
var Id = {};
function Jd(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
Jd.prototype.Rd = k;
Jd.prototype.Qd = k;
var Kd = 0;
Jd.prototype.reset = function(a, b, c, d, f) {
  "number" == typeof f || Kd++;
  this.cg = d || z();
  this.Fb = a;
  this.Hf = b;
  this.Sg = c;
  delete this.Rd;
  delete this.Qd
};
Jd.prototype.nd = aa("Fb");
function Ld(a) {
  this.me = a
}
Ld.prototype.C = k;
Ld.prototype.Fb = k;
Ld.prototype.Q = k;
Ld.prototype.gc = k;
function Md(a, b) {
  this.name = a;
  this.value = b
}
Md.prototype.toString = n("name");
var Nd = new Md("OFF", Infinity), Od = new Md("SHOUT", 1200), Pd = new Md("SEVERE", 1E3), Qd = new Md("WARNING", 900), Rd = new Md("INFO", 800), Sd = new Md("CONFIG", 700), Td = new Md("FINE", 500), Ud = new Md("FINEST", 300), Vd = new Md("ALL", 0);
q = Ld.prototype;
q.getParent = n("C");
q.nd = aa("Fb");
function Wd(a) {
  if(a.Fb) {
    return a.Fb
  }
  if(a.C) {
    return Wd(a.C)
  }
  Ia("Root logger has no level set.");
  return k
}
q.log = function(a, b, c) {
  if(a.value >= Wd(this).value) {
    a = this.Gg(a, b, c);
    b = "log:" + a.Hf;
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
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
q.Gg = function(a, b, c) {
  var d = new Jd(a, "" + b, this.me);
  if(c) {
    d.Rd = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var h;
      var l = ca("window.location.href");
      if(v(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var o, r, A = m;
        try {
          o = c.lineNumber || c.Gi || "Not available"
        }catch(s) {
          o = "Not available", A = j
        }
        try {
          r = c.fileName || c.filename || c.sourceURL || l
        }catch(w) {
          r = "Not available", A = j
        }
        h = A || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:o, fileName:r, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + wa(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + wa(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + wa(Fd(g) + "-> ")
    }catch(C) {
      f = "Exception trying to expose exception! You win, we lose. " + C
    }
    d.Qd = f
  }
  return d
};
function Xd(a, b) {
  a.log(Pd, b, i)
}
function N(a, b) {
  a.log(Qd, b, i)
}
q.info = function(a, b) {
  this.log(Rd, a, b)
};
function O(a, b) {
  a.log(Td, b, i)
}
function P(a, b) {
  a.log(Ud, b, i)
}
var Yd = {}, Zd = k;
function $d() {
  Zd || (Zd = new Ld(""), Yd[""] = Zd, Zd.nd(Sd))
}
function ae() {
  $d();
  return Zd
}
function Q(a) {
  $d();
  var b;
  if(!(b = Yd[a])) {
    b = new Ld(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Q(a.substr(0, c));
    c.Q || (c.Q = {});
    c.Q[d] = b;
    b.C = c;
    Yd[a] = b
  }
  return b
}
;function be(a, b) {
  this.T = "_" + wd();
  this.td = a;
  this.Ua = b;
  this.Za = a.Za
}
B(be, K);
q = be.prototype;
q.Hb = j;
q.Id = m;
q.a = Q("cw.net.FlashSocket");
q.u = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.T);
  a.push("'>")
};
function ce(a, b, c) {
  "frames" == b ? (a = a.Ua, de(a.M), ee(a.M, c)) : "stillreceiving" == b ? (c = a.Ua, P(c.a, "onstillreceiving"), de(c.M)) : "connect" == b ? (c = a.Ua, c.a.info("onconnect"), de(c.M), a = c.Tb, c.Tb = k, a.length && (P(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.qd.zc(a))) : "close" == b ? (a.Hb = m, a.g()) : "ioerror" == b ? (a.Hb = m, b = a.Ua, N(b.a, "onioerror: " + G(c)), fe(b.M, m), a.g()) : "securityerror" == b ? (a.Hb = m, b = a.Ua, N(b.a, "onsecurityerror: " + G(c)), 
  fe(b.M, m), a.g()) : e(Error("bad event: " + b))
}
function ge(a) {
  a.Id = j;
  a.Hb = m;
  a.g()
}
q.Gd = function(a, b) {
  try {
    var c = this.Za.CallFunction(vd("__FC_connect", this.T, a, b, "<int32/>\n"))
  }catch(d) {
    return Xd(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), ge(this)
  }
  '"OK"' != c && e(Error("__FC_connect failed? ret: " + c))
};
q.zc = function(a) {
  try {
    var b = this.Za.CallFunction(vd("__FC_writeFrames", this.T, a))
  }catch(c) {
    return Xd(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), ge(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (N(this.a, "Flash no longer knows of " + this.T + "; disposing."), this.g()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
q.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.Hb);
  be.e.c.call(this);
  var a = this.Za;
  delete this.Za;
  if(this.Hb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(vd("__FC_close", this.T)))
    }catch(b) {
      Xd(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Id = j
    }
  }
  if(this.Id) {
    a = this.Ua, N(a.a, "oncrash"), fe(a.M, j)
  }else {
    this.Ua.onclose()
  }
  delete this.Ua;
  delete this.td.Ab[this.T]
};
function he(a, b) {
  this.L = a;
  this.Za = b;
  this.Ab = {};
  this.Ed = "__FST_" + wd();
  t[this.Ed] = y(this.yg, this);
  var c = b.CallFunction(vd("__FC_setCallbackFunc", this.Ed));
  '"OK"' != c && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
B(he, K);
q = he.prototype;
q.a = Q("cw.net.FlashSocketTracker");
q.u = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  F(this.Ab, a, b);
  a.push(">")
};
q.Jd = function(a) {
  a = new be(this, a);
  return this.Ab[a.T] = a
};
q.wg = function(a, b, c, d) {
  var f = this.Ab[a];
  f ? "frames" == b && d ? (ce(f, "ioerror", "FlashConnector hadError while handling data."), f.g()) : ce(f, b, c) : N(this.a, "Cannot dispatch because we have no instance: " + G([a, b, c, d]))
};
q.yg = function(a, b, c, d) {
  try {
    sd(this.L, this.wg, this, [a, b, c, d])
  }catch(f) {
    t.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
q.c = function() {
  he.e.c.call(this);
  for(var a = Ra(this.Ab);a.length;) {
    a.pop().g()
  }
  delete this.Ab;
  delete this.Za;
  t[this.Ed] = i
};
function ie(a) {
  this.M = a;
  this.Tb = []
}
B(ie, K);
q = ie.prototype;
q.a = Q("cw.net.FlashSocketConduit");
q.zc = function(a) {
  this.Tb ? (P(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Tb.push.apply(this.Tb, a)) : (P(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.qd.zc(a))
};
q.Gd = function(a, b) {
  this.qd.Gd(a, b)
};
q.onclose = function() {
  this.a.info("onclose");
  fe(this.M, m)
};
q.c = function() {
  this.a.info("in disposeInternal.");
  ie.e.c.call(this);
  this.qd.g();
  delete this.M
};
function je() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function ke(a) {
  return a * Math.PI / 180
}
;var Bd = Math.pow(2, 53);
var le = {lg:p("<cw.eq.Wildcard>")};
function me(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function ne(a, b, c) {
  var d = fa(a), f = fa(b);
  if(a == le || b == le) {
    return j
  }
  if(a != k && "function" == typeof a.m) {
    return c && c.push("running custom equals function on left object"), a.m(b, c)
  }
  if(b != k && "function" == typeof b.m) {
    return c && c.push("running custom equals function on right object"), b.m(a, c)
  }
  if(me(d) || me(f)) {
    a = a === b
  }else {
    if(a instanceof RegExp && b instanceof RegExp) {
      a = a.toString() === b.toString()
    }else {
      if(ia(a) && ia(b)) {
        a = a.valueOf() === b.valueOf()
      }else {
        if("array" == d && "array" == f) {
          a: {
            if(c && c.push("descending into array"), a.length != b.length) {
              c && c.push("array length mismatch: " + a.length + ", " + b.length), a = m
            }else {
              d = 0;
              for(f = a.length;d < f;d++) {
                if(!ne(a[d], b[d], c)) {
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
          if(a.kg == bc && b.kg == bc) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!ne(a[g], b[g], c)) {
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
;function R(a) {
  D.call(this, a)
}
B(R, D);
R.prototype.name = "cw.net.InvalidFrame";
function oe() {
  var a = [];
  this.oa(a);
  return a.join("")
}
function pe() {
}
pe.prototype.m = function(a, b) {
  return!(a instanceof pe) ? m : ne(qe(this), qe(a), b)
};
pe.prototype.u = function(a, b) {
  a.push("<HelloFrame properties=");
  F(qe(this), a, b);
  a.push(">")
};
function qe(a) {
  return[a.Ob, a.Qf, a.tf, a.Tf, a.vc, a.Ie, a.Jf, a.Ff, a.le, a.Df, a.gg, a.bg, a.qa, a.$c]
}
pe.prototype.ia = oe;
pe.prototype.oa = function(a) {
  var b = {};
  b.tnum = this.Ob;
  b.ver = this.Qf;
  b.format = this.tf;
  b["new"] = this.Tf;
  b.id = this.vc;
  b.ming = this.Ie;
  b.pad = this.Jf;
  b.maxb = this.Ff;
  ga(this.le) && (b.maxt = this.le);
  b.maxia = this.Df;
  b.tcpack = this.gg;
  b.eeds = this.bg;
  b.sack = this.qa instanceof Wb ? xd((new re(this.qa)).ia()) : this.qa;
  b.seenack = this.$c instanceof Wb ? xd((new re(this.$c)).ia()) : this.$c;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push(Gb(b), "H")
};
function se(a) {
  this.Nb = a
}
se.prototype.m = function(a) {
  return a instanceof se && this.Nb == a.Nb
};
se.prototype.u = function(a, b) {
  a.push("new StringFrame(");
  F(this.Nb, a, b);
  a.push(")")
};
se.prototype.ia = oe;
se.prototype.oa = function(a) {
  a.push(this.Nb, " ")
};
function te(a) {
  this.Dc = a
}
te.prototype.m = function(a) {
  return a instanceof te && this.Dc == a.Dc
};
te.prototype.u = function(a, b) {
  a.push("new CommentFrame(");
  F(this.Dc, a, b);
  a.push(")")
};
te.prototype.ia = oe;
te.prototype.oa = function(a) {
  a.push(this.Dc, "^")
};
function ue(a) {
  this.sc = a
}
ue.prototype.m = function(a) {
  return a instanceof ue && this.sc == a.sc
};
ue.prototype.u = function(a) {
  a.push("new SeqNumFrame(", "" + this.sc, ")")
};
ue.prototype.ia = oe;
ue.prototype.oa = function(a) {
  a.push("" + this.sc, "N")
};
function ve(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = Bd;
    if(zd.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var g = Ad(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Wb(a, c)
}
function re(a) {
  this.qa = a
}
re.prototype.m = function(a, b) {
  return a instanceof re && this.qa.m(a.qa, b)
};
re.prototype.u = function(a, b) {
  a.push("new SackFrame(");
  F(this.qa, a, b);
  a.push(")")
};
re.prototype.ia = oe;
re.prototype.oa = function(a) {
  var b = this.qa;
  a.push(b.nb.join(","), "|", "" + b.sb);
  a.push("A")
};
function we(a) {
  this.jc = a
}
we.prototype.m = function(a, b) {
  return a instanceof we && this.jc.m(a.jc, b)
};
we.prototype.u = function(a, b) {
  a.push("new StreamStatusFrame(");
  F(this.jc, a, b);
  a.push(")")
};
we.prototype.ia = oe;
we.prototype.oa = function(a) {
  var b = this.jc;
  a.push(b.nb.join(","), "|", "" + b.sb);
  a.push("T")
};
function xe() {
}
xe.prototype.u = function(a) {
  a.push("new StreamCreatedFrame()")
};
xe.prototype.m = function(a) {
  return a instanceof xe
};
xe.prototype.ia = oe;
xe.prototype.oa = function(a) {
  a.push("C")
};
function ye() {
}
ye.prototype.u = function(a) {
  a.push("new YouCloseItFrame()")
};
ye.prototype.m = function(a) {
  return a instanceof ye
};
ye.prototype.ia = oe;
ye.prototype.oa = function(a) {
  a.push("Y")
};
function ze(a, b) {
  this.mc = a;
  this.Sb = b
}
ze.prototype.m = function(a) {
  return a instanceof ze && this.mc == a.mc && this.Sb == a.Sb
};
ze.prototype.u = function(a, b) {
  a.push("new ResetFrame(");
  F(this.mc, a, b);
  a.push(", ", "" + this.Sb, ")")
};
ze.prototype.ia = oe;
ze.prototype.oa = function(a) {
  a.push(this.mc, "|", "" + Number(this.Sb), "!")
};
var Ae = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Be(a) {
  this.reason = a
}
Be.prototype.m = function(a) {
  return a instanceof Be && this.reason == a.reason
};
Be.prototype.u = function(a, b) {
  a.push("new TransportKillFrame(");
  F(this.reason, a, b);
  a.push(")")
};
Be.prototype.ia = oe;
Be.prototype.oa = function(a) {
  a.push(this.reason, "K")
};
function Ce(a) {
  a || e(new R("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new se(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = ve(xd(a)), a == k && e(new R("bad sack")), new re(a)
  }
  if("N" == b) {
    return a = Ad(xd(a)), a == k && e(new R("bad seqNum")), new ue(a)
  }
  if("T" == b) {
    return a = ve(xd(a)), a == k && e(new R("bad lastSackSeen")), new we(a)
  }
  if("Y" == b) {
    return 1 != a.length && e(new R("leading garbage")), new ye
  }
  if("^" == b) {
    return new te(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && e(new R("leading garbage")), new xe
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && e(new R("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && e(new R("bad applicationLevel")), new ze(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = Ae[a], a == k && e(new R("unknown kill reason: " + a)), new Be(a)
  }
  e(new R("Invalid frame type " + b))
}
;var De = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Ee(a, b) {
  var c = a.match(De), d = b.match(De);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Fe(a, b) {
  var c;
  a instanceof Fe ? (this.Kb(b == k ? a.ya : b), Ge(this, a.za), He(this, a.qb), Ie(this, a.na), Je(this, a.Sa), this.ob(a.z), Ke(this, a.Z.A()), Le(this, a.eb)) : a && (c = ("" + a).match(De)) ? (this.Kb(!!b), Ge(this, c[1] || "", j), He(this, c[2] || "", j), Ie(this, c[3] || "", j), Je(this, c[4]), this.ob(c[5] || "", j), Ke(this, c[6] || "", j), Le(this, c[7] || "", j)) : (this.Kb(!!b), this.Z = new Me(k, this, this.ya))
}
q = Fe.prototype;
q.za = "";
q.qb = "";
q.na = "";
q.Sa = k;
q.z = "";
q.eb = "";
q.Qg = m;
q.ya = m;
q.toString = function() {
  if(this.ta) {
    return this.ta
  }
  var a = [];
  this.za && a.push(Ne(this.za, Oe), ":");
  this.na && (a.push("//"), this.qb && a.push(Ne(this.qb, Oe), "@"), a.push(v(this.na) ? encodeURIComponent(this.na) : k), this.Sa != k && a.push(":", "" + this.Sa));
  this.z && (this.na && "/" != this.z.charAt(0) && a.push("/"), a.push(Ne(this.z, "/" == this.z.charAt(0) ? Pe : Qe)));
  var b = "" + this.Z;
  b && a.push("?", b);
  this.eb && a.push("#", Ne(this.eb, Re));
  return this.ta = a.join("")
};
q.A = function() {
  var a = this.za, b = this.qb, c = this.na, d = this.Sa, f = this.z, g = this.Z.A(), h = this.eb, l = new Fe(k, this.ya);
  a && Ge(l, a);
  b && He(l, b);
  c && Ie(l, c);
  d && Je(l, d);
  f && l.ob(f);
  g && Ke(l, g);
  h && Le(l, h);
  return l
};
function Ge(a, b, c) {
  Se(a);
  delete a.ta;
  a.za = c ? b ? decodeURIComponent(b) : "" : b;
  a.za && (a.za = a.za.replace(/:$/, ""))
}
function He(a, b, c) {
  Se(a);
  delete a.ta;
  a.qb = c ? b ? decodeURIComponent(b) : "" : b
}
function Ie(a, b, c) {
  Se(a);
  delete a.ta;
  a.na = c ? b ? decodeURIComponent(b) : "" : b
}
function Je(a, b) {
  Se(a);
  delete a.ta;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.Sa = b) : a.Sa = k
}
q.ob = function(a, b) {
  Se(this);
  delete this.ta;
  this.z = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function Ke(a, b, c) {
  Se(a);
  delete a.ta;
  b instanceof Me ? (a.Z = b, a.Z.Oe = a, a.Z.Kb(a.ya)) : (c || (b = Ne(b, Te)), a.Z = new Me(b, a, a.ya))
}
function Le(a, b, c) {
  Se(a);
  delete a.ta;
  a.eb = c ? b ? decodeURIComponent(b) : "" : b
}
function Se(a) {
  a.Qg && e(Error("Tried to modify a read-only Uri"))
}
q.Kb = function(a) {
  this.ya = a;
  this.Z && this.Z.Kb(a);
  return this
};
function Ue(a) {
  return a instanceof Fe ? a.A() : new Fe(a, i)
}
var Ve = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Ne(a, b) {
  var c = k;
  v(a) && (c = a, Ve.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, We)));
  return c
}
function We(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Oe = /[#\/\?@]/g, Qe = /[\#\?:]/g, Pe = /[\#\?]/g, Te = /[\#\?@]/g, Re = /#/g;
function Me(a, b, c) {
  this.Ca = a || k;
  this.Oe = b || k;
  this.ya = !!c
}
function Xe(a) {
  if(!a.o && (a.o = new Sb, a.f = 0, a.Ca)) {
    for(var b = a.Ca.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = Ye(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
q = Me.prototype;
q.o = k;
q.f = k;
q.ba = function() {
  Xe(this);
  return this.f
};
q.add = function(a, b) {
  Xe(this);
  Ze(this);
  a = Ye(this, a);
  if(this.ga(a)) {
    var c = this.o.get(a);
    u(c) ? c.push(b) : this.o.set(a, [c, b])
  }else {
    this.o.set(a, b)
  }
  this.f++;
  return this
};
q.remove = function(a) {
  Xe(this);
  a = Ye(this, a);
  if(this.o.ga(a)) {
    Ze(this);
    var b = this.o.get(a);
    u(b) ? this.f -= b.length : this.f--;
    return this.o.remove(a)
  }
  return m
};
q.clear = function() {
  Ze(this);
  this.o && this.o.clear();
  this.f = 0
};
q.Oa = function() {
  Xe(this);
  return 0 == this.f
};
q.ga = function(a) {
  Xe(this);
  a = Ye(this, a);
  return this.o.ga(a)
};
q.Ec = function(a) {
  var b = this.da();
  return ab(b, a)
};
q.wa = function() {
  Xe(this);
  for(var a = this.o.da(), b = this.o.wa(), c = [], d = 0;d < b.length;d++) {
    var f = a[d];
    if(u(f)) {
      for(var g = 0;g < f.length;g++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
q.da = function(a) {
  Xe(this);
  if(a) {
    if(a = Ye(this, a), this.ga(a)) {
      var b = this.o.get(a);
      if(u(b)) {
        return b
      }
      a = [];
      a.push(b)
    }else {
      a = []
    }
  }else {
    for(var b = this.o.da(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      u(d) ? fb(a, d) : a.push(d)
    }
  }
  return a
};
q.set = function(a, b) {
  Xe(this);
  Ze(this);
  a = Ye(this, a);
  if(this.ga(a)) {
    var c = this.o.get(a);
    u(c) ? this.f -= c.length : this.f--
  }
  this.o.set(a, b);
  this.f++;
  return this
};
q.get = function(a, b) {
  Xe(this);
  a = Ye(this, a);
  if(this.ga(a)) {
    var c = this.o.get(a);
    return u(c) ? c[0] : c
  }
  return b
};
q.toString = function() {
  if(this.Ca) {
    return this.Ca
  }
  if(!this.o) {
    return""
  }
  for(var a = [], b = 0, c = this.o.wa(), d = 0;d < c.length;d++) {
    var f = c[d], g = ua(f), f = this.o.get(f);
    if(u(f)) {
      for(var h = 0;h < f.length;h++) {
        0 < b && a.push("&"), a.push(g), "" !== f[h] && a.push("=", ua(f[h])), b++
      }
    }else {
      0 < b && a.push("&"), a.push(g), "" !== f && a.push("=", ua(f)), b++
    }
  }
  return this.Ca = a.join("")
};
function Ze(a) {
  delete a.xb;
  delete a.Ca;
  a.Oe && delete a.Oe.ta
}
q.A = function() {
  var a = new Me;
  this.xb && (a.xb = this.xb);
  this.Ca && (a.Ca = this.Ca);
  this.o && (a.o = this.o.A());
  return a
};
function Ye(a, b) {
  var c = "" + b;
  a.ya && (c = c.toLowerCase());
  return c
}
q.Kb = function(a) {
  a && !this.ya && (Xe(this), Ze(this), Qb(this.o, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ya = a
};
q.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Qb(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
var $e;
function af(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function bf(a, b) {
  var c = af(a), d = hb(arguments, 1), f;
  f = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    ab(f, d[h]) || (f.push(d[h]), g++)
  }
  f = g == d.length;
  a.className = c.join(" ");
  return f
}
function cf(a, b) {
  var c = af(a), d = hb(arguments, 1), f;
  f = c;
  for(var g = 0, h = 0;h < f.length;h++) {
    ab(d, f[h]) && (gb(f, h--, 1), g++)
  }
  f = g == d.length;
  a.className = c.join(" ");
  return f
}
;function S(a, b) {
  this.width = a;
  this.height = b
}
q = S.prototype;
q.A = function() {
  return new S(this.width, this.height)
};
q.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
q.Oa = function() {
  return!(this.width * this.height)
};
q.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
q.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
q.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
q.scale = function(a) {
  this.width *= a;
  this.height *= a;
  return this
};
var df = !H || yc();
!lc && !H || H && yc() || lc && J("1.9.1");
var ef = H && !J("9");
function ff(a) {
  return a ? new gf(hf(a)) : $e || ($e = new gf)
}
function T(a) {
  return v(a) ? document.getElementById(a) : a
}
function jf(a, b, c, d) {
  a = d || a;
  b = b && "*" != b ? b.toUpperCase() : "";
  if(a.querySelectorAll && a.querySelector && (!I || "CSS1Compat" == document.compatMode || J("528")) && (b || c)) {
    return a.querySelectorAll(b + (c ? "." + c : ""))
  }
  if(c && a.getElementsByClassName) {
    a = a.getElementsByClassName(c);
    if(b) {
      for(var d = {}, f = 0, g = 0, h;h = a[g];g++) {
        b == h.nodeName && (d[f++] = h)
      }
      d.length = f;
      return d
    }
    return a
  }
  a = a.getElementsByTagName(b || "*");
  if(c) {
    d = {};
    for(g = f = 0;h = a[g];g++) {
      b = h.className, "function" == typeof b.split && ab(b.split(/\s+/), c) && (d[f++] = h)
    }
    d.length = f;
    return d
  }
  return a
}
function kf(a, b) {
  Qa(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in lf ? a.setAttribute(lf[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var lf = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function mf(a, b, c) {
  return nf(document, arguments)
}
function nf(a, b) {
  var c = b[0], d = b[1];
  if(!df && d && (d.name || d.type)) {
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
  d && (v(d) ? c.className = d : u(d) ? bf.apply(k, [c].concat(d)) : kf(c, d));
  2 < b.length && of(a, c, b, 2);
  return c
}
function of(a, b, c, d) {
  function f(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && 0 < g.nodeType) ? Xa(pf(g) ? eb(g) : g, f) : f(g)
  }
}
function qf(a, b) {
  of(hf(a), a, arguments, 1)
}
function rf(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function sf(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function tf(a, b) {
  if(a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b)
  }
  if("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
}
function hf(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function uf(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      rf(a), a.appendChild(hf(a).createTextNode(b))
    }
  }
}
var vf = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, wf = {IMG:" ", BR:"\n"};
function xf(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, x(a) && 0 <= a && 32768 > a) : m
}
function yf(a) {
  var b = [];
  zf(a, b, m);
  return b.join("")
}
function zf(a, b, c) {
  if(!(a.nodeName in vf)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in wf) {
        b.push(wf[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          zf(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function pf(a) {
  if(a && "number" == typeof a.length) {
    if(ja(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(ka(a)) {
      return"function" == typeof a.item
    }
  }
  return m
}
function gf(a) {
  this.p = a || t.document || document
}
q = gf.prototype;
q.Fa = ff;
q.b = function(a) {
  return v(a) ? this.p.getElementById(a) : a
};
q.i = function(a, b, c) {
  return nf(this.p, arguments)
};
q.createElement = function(a) {
  return this.p.createElement(a)
};
q.createTextNode = function(a) {
  return this.p.createTextNode(a)
};
q.Ye = function(a, b, c) {
  for(var d = this.p, f = !!c, c = ["<tr>"], g = 0;g < b;g++) {
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
q.appendChild = function(a, b) {
  a.appendChild(b)
};
q.append = qf;
q.contains = tf;
function Af(a, b, c, d) {
  this.contentWindow = a;
  this.Hc = b;
  this.Je = c;
  this.Dg = d
}
Af.prototype.u = function(a, b) {
  a.push("<XDRFrame frameId=");
  F(this.Dg, a, b);
  a.push(", expandedUrl=");
  F(this.Hc, a, b);
  a.push(", streams=");
  F(this.Je, a, b);
  a.push(">")
};
function Bf() {
  this.frames = [];
  this.je = new Sb
}
Bf.prototype.a = Q("cw.net.XDRTracker");
function Cf(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor(je()) + ("" + Math.floor(je()))
  })
}
function Df(a, b) {
  for(var c = Ef, d = 0;d < c.frames.length;d++) {
    var f = c.frames[d], g;
    if(g = 0 == f.Je.length) {
      g = f.Hc;
      var h = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + G(b) + " existing frame " + G(f)), pd(f)
    }
  }
  d = wd() + wd();
  f = Cf(a);
  g = t.location;
  g instanceof Fe || (g = Ue(g));
  f instanceof Fe || (f = Ue(f));
  var l = g;
  g = l.A();
  (h = !!f.za) ? Ge(g, f.za) : h = !!f.qb;
  h ? He(g, f.qb) : h = !!f.na;
  h ? Ie(g, f.na) : h = f.Sa != k;
  var o = f.z;
  if(h) {
    Je(g, f.Sa)
  }else {
    if(h = !!f.z) {
      if("/" != o.charAt(0) && (l.na && !l.z ? o = "/" + o : (l = g.z.lastIndexOf("/"), -1 != l && (o = g.z.substr(0, l + 1) + o))), ".." == o || "." == o) {
        o = ""
      }else {
        if(!(-1 == o.indexOf("./") && -1 == o.indexOf("/."))) {
          for(var l = 0 == o.lastIndexOf("/", 0), o = o.split("/"), r = [], A = 0;A < o.length;) {
            var s = o[A++];
            "." == s ? l && A == o.length && r.push("") : ".." == s ? ((1 < r.length || 1 == r.length && "" != r[0]) && r.pop(), l && A == o.length && r.push("")) : (r.push(s), l = j)
          }
          o = r.join("/")
        }
      }
    }
  }
  h ? g.ob(o) : h = "" !== f.Z.toString();
  h ? (l = f.Z, l.xb || (l.xb = l.toString() ? decodeURIComponent(l.toString()) : ""), Ke(g, l.xb, i)) : h = !!f.eb;
  h && Le(g, f.eb);
  f = g.toString();
  g = ("" + t.location).match(De)[3] || k;
  h = f.match(De)[3] || k;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + G(b)), c = pd(new Af(t, f, [b], k))) : (g = T("minerva-elements"), h = new ed, c.je.set(d, [h, f, b]), c.a.info("Creating new XDRFrame " + G(d) + "for " + G(b)), c = mf("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:f + "xdrframe/?domain=" + document.domain + "&id=" + d}), g.appendChild(c), c = h);
  return c
}
Bf.prototype.yh = function(a) {
  var b = this.je.get(a);
  b || e(Error("Unknown frameId " + G(a)));
  this.je.remove(b);
  var c = b[0], a = new Af(T("minerva-xdrframe-" + a).contentWindow || (T("minerva-xdrframe-" + a).contentDocument || T("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (T("minerva-xdrframe-" + a).contentDocument || T("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  kd(c, a)
};
var Ef = new Bf;
t.__XHRTracker_xdrFrameLoaded = y(Ef.yh, Ef);
var Ff;
Ff = m;
var Gf = hc();
Gf && (-1 != Gf.indexOf("Firefox") || -1 != Gf.indexOf("Camino") || -1 != Gf.indexOf("iPhone") || -1 != Gf.indexOf("iPod") || -1 != Gf.indexOf("iPad") || -1 != Gf.indexOf("Android") || -1 != Gf.indexOf("Chrome") && (Ff = j));
var Hf = Ff;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function If(a, b, c, d, f, g) {
  ed.call(this, f, g);
  this.Cf = a;
  this.Ld = [];
  this.ff = !!b;
  this.Bg = !!c;
  this.sg = !!d;
  for(b = 0;b < a.length;b++) {
    md(a[b], y(this.of, this, b, j), y(this.of, this, b, m))
  }
  0 == a.length && !this.ff && kd(this, this.Ld)
}
B(If, ed);
If.prototype.Lf = 0;
If.prototype.of = function(a, b, c) {
  this.Lf++;
  this.Ld[a] = [b, c];
  this.La || (this.ff && b ? kd(this, [a, c]) : this.Bg && !b ? this.ac(c) : this.Lf == this.Cf.length && kd(this, this.Ld));
  this.sg && !b && (c = k);
  return c
};
If.prototype.ac = function(a) {
  If.e.ac.call(this, a);
  Xa(this.Cf, function(a) {
    a.cancel()
  })
};
function Jf(a) {
  a = new If(a, m, j);
  ld(a, function(a) {
    return Ya(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function Kf(a, b) {
  this.wh = a;
  this.Ef = b
}
Kf.prototype.fe = 0;
Kf.prototype.dd = 0;
Kf.prototype.Sd = m;
function Lf(a) {
  var b = [];
  if(a.Sd) {
    return[b, 2]
  }
  var c = a.fe, d = a.wh.responseText;
  for(a.fe = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var f = d.substr(a.dd, c - a.dd), f = f.replace(/\r$/, "");
    if(f.length > a.Ef) {
      return a.Sd = j, [b, 2]
    }
    b.push(f);
    a.dd = c += 1
  }
  return a.fe - a.dd - 1 > a.Ef ? (a.Sd = j, [b, 2]) : [b, 1]
}
;function Mf(a, b, c) {
  this.M = b;
  this.pa = a;
  this.Hd = c
}
B(Mf, K);
q = Mf.prototype;
q.a = Q("cw.net.XHRMaster");
q.Wa = -1;
q.ke = function(a, b, c) {
  this.Hd.__XHRSlave_makeRequest(this.pa, a, b, c)
};
q.Na = n("Wa");
q.oe = function(a, b) {
  1 != b && Xd(this.a, G(this.pa) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  de(this.M);
  ee(this.M, a)
};
q.pe = function(a) {
  O(this.a, "ongotheaders_: " + G(a));
  var b = k;
  "Content-Length" in a && (b = Ad(a["Content-Length"]));
  a = this.M;
  O(a.a, a.v() + " got Content-Length: " + b);
  a.Aa == Nf && (b == k && (N(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Of(a, 2E3 + 1E3 * (b / 3072)))
};
q.qe = function(a) {
  1 != a && O(this.a, this.M.v() + "'s XHR's readyState is " + a);
  this.Wa = a;
  2 <= this.Wa && de(this.M)
};
q.ne = function() {
  this.M.g()
};
q.c = function() {
  Mf.e.c.call(this);
  delete Pf.Ga[this.pa];
  this.Hd.__XHRSlave_dispose(this.pa);
  delete this.Hd
};
function Qf() {
  this.Ga = {}
}
B(Qf, K);
q = Qf.prototype;
q.a = Q("cw.net.XHRMasterTracker");
q.Jd = function(a, b) {
  var c = "_" + wd(), d = new Mf(c, a, b);
  return this.Ga[c] = d
};
q.oe = function(a, b, c) {
  var b = db(b), d = this.Ga[a];
  d ? d.oe(b, c) : Xd(this.a, "onframes_: no master for " + G(a))
};
q.pe = function(a, b) {
  var c = this.Ga[a];
  c ? c.pe(b) : Xd(this.a, "ongotheaders_: no master for " + G(a))
};
q.qe = function(a, b) {
  var c = this.Ga[a];
  c ? c.qe(b) : Xd(this.a, "onreadystatechange_: no master for " + G(a))
};
q.ne = function(a) {
  var b = this.Ga[a];
  b ? (delete this.Ga[b.pa], b.ne()) : Xd(this.a, "oncomplete_: no master for " + G(a))
};
q.c = function() {
  Qf.e.c.call(this);
  for(var a = Ra(this.Ga);a.length;) {
    a.pop().g()
  }
  delete this.Ga
};
var Pf = new Qf;
t.__XHRMaster_onframes = y(Pf.oe, Pf);
t.__XHRMaster_oncomplete = y(Pf.ne, Pf);
t.__XHRMaster_ongotheaders = y(Pf.pe, Pf);
t.__XHRMaster_onreadystatechange = y(Pf.qe, Pf);
function Rf(a, b, c) {
  this.host = a;
  this.port = b;
  this.rh = c
}
function Sf(a, b) {
  b || (b = a);
  this.Ta = a;
  this.Xa = b
}
Sf.prototype.u = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  F(this.Ta, a, b);
  a.push(", secondaryUrl=");
  F(this.Xa, a, b);
  a.push(">")
};
function Tf(a, b, c, d) {
  this.Ta = a;
  this.Pf = b;
  this.Xa = c;
  this.Zf = d;
  (!(0 == this.Ta.indexOf("http://") || 0 == this.Ta.indexOf("https://")) || !(0 == this.Xa.indexOf("http://") || 0 == this.Xa.indexOf("https://"))) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Pf.location.href;
  Ee(this.Ta, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Zf.location.href;
  Ee(this.Xa, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
Tf.prototype.u = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  F(this.Ta, a, b);
  a.push(", secondaryUrl=");
  F(this.Xa, a, b);
  a.push(">")
};
var Uf = new te(";)]}");
function Vf() {
}
Vf.prototype.jf = p(1);
function Wf(a) {
  this.kh = a
}
Wf.prototype.u = function(a, b) {
  a.push("<UserContext for ");
  F(this.kh, a, b);
  a.push(">")
};
function Xf(a, b, c) {
  this.R = a;
  this.lh = b ? b : new Vf;
  this.L = c ? c : td;
  this.xc = new Cd;
  this.vc = wd() + wd();
  this.Va = new Xb;
  this.ce = new Zb;
  this.yc = k;
  this.vd = [];
  this.Pb = new Wf(this);
  I && (this.yc = Rc(t, "load", this.eh, m, this))
}
B(Xf, K);
q = Xf.prototype;
q.a = Q("cw.net.ClientStream");
q.Af = new Wb(-1, []);
q.Bf = new Wb(-1, []);
q.Vg = 50;
q.Ug = 1048576;
q.re = k;
q.onreset = k;
q.Nf = k;
q.Ge = m;
q.ve = m;
q.h = 1;
q.Le = -1;
q.j = k;
q.D = k;
q.nc = k;
q.He = 0;
q.Of = 0;
q.Yf = 0;
q.u = function(a, b) {
  a.push("<ClientStream id=");
  F(this.vc, a, b);
  a.push(", state=", "" + this.h);
  a.push(", primary=");
  F(this.j, a, b);
  a.push(", secondary=");
  F(this.D, a, b);
  a.push(", resetting=");
  F(this.nc, a, b);
  a.push(">")
};
function Yf(a) {
  var b = [-1];
  a.j && b.push(a.j.Ib);
  a.D && b.push(a.D.Ib);
  return Math.max.apply(Math.max, b)
}
function Zf(a) {
  if(1 != a.h) {
    var b = 0 != a.Va.B.ba(), c = $b(a.ce), d = !c.m(a.Bf) && !(a.j && c.m(a.j.Eb) || a.D && c.m(a.D.Eb)), f = Yf(a);
    if((b = b && f < a.Va.bb) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.j.Ub ? (P(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.j, c != d.Eb && (!d.Ha && !d.H.length && $f(d), d.H.push(new re(c)), d.Eb = c)), b && ag(a.j, a.Va, f + 1), a.j.Ea()) : a.D == k ? a.Ge ? (P(a.a, "tryToSend_: creating secondary to send " + g), a.D = bg(a, m), b && ag(a.D, a.Va, f + 1), a.D.Ea()) : (P(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.ve = j) : P(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
q.eh = function() {
  this.yc = k;
  if(this.j && this.j.Bb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.j;
    a.xd = j;
    a.g()
  }
  this.D && this.D.Bb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.D, a.xd = j, a.g())
};
function cg(a, b) {
  var c;
  ga(c) || (c = j);
  3 < a.h && e(Error("sendStrings: Can't send strings in state " + a.h));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || e(Error("sendStrings: string #" + c + " has illegal chars: " + G(d)))
      }
    }
    a.Va.extend(b);
    Zf(a)
  }
}
function bg(a, b) {
  var c;
  a.R instanceof Tf ? c = 1 == a.lh.jf() ? Nf : dg : a.R instanceof Rf ? c = eg : e(Error("Don't support endpoint " + G(a.R)));
  a.Le += 1;
  c = new fg(a.L, a, a.Le, c, a.R, b);
  P(a.a, "Created: " + c.v());
  a.xc.add(c);
  return c
}
function gg(a, b, c) {
  var d = new hg(a.L, a, b, c);
  P(a.a, "Created: " + d.v() + ", delay=" + b + ", times=" + c);
  a.xc.add(d);
  return d
}
function ig(a, b) {
  a.xc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  O(a.a, "Offline: " + b.v());
  a.He = b.Ra ? a.He + b.Ra : 0;
  1 <= a.He && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.Pb, "stream penalty reached limit", m), a.g());
  if(3 < a.h) {
    4 == a.h && b.jg ? (O(a.a, "Disposing because resettingTransport_ is done."), a.g()) : O(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    var c;
    var d;
    c = b instanceof hg;
    if(!c && b.xd) {
      var f = I ? Hf ? [0, 1] : [9, 20] : [0, 0];
      c = f[0];
      d = f[1];
      P(a.a, "getDelayForNextTransport_: " + G({delay:c, times:d}))
    }else {
      if(d = b.Ue(), b == a.j ? d ? f = ++a.Of : c || (f = a.Of = 0) : d ? f = ++a.Yf : c || (f = a.Yf = 0), c || !f) {
        d = c = 0, P(a.a, "getDelayForNextTransport_: " + G({count:f, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(f, 3), h = Math.floor(4E3 * Math.random()) - 2E3, l = Math.max(0, b.fg - b.Me);
        d = (c = Math.max(0, g + h - l)) ? 1 : 0;
        P(a.a, "getDelayForNextTransport_: " + G({count:f, base:g, variance:h, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    f = c[0];
    c = c[1];
    b == a.j ? (a.j = k, c ? a.j = gg(a, f, c) : (f = Yf(a), a.j = bg(a, j), ag(a.j, a.Va, f + 1)), a.j.Ea()) : b == a.D && (a.D = k, c ? (a.D = gg(a, f, c), a.D.Ea()) : Zf(a))
  }
}
q.reset = function(a) {
  3 < this.h && e(Error("reset: Can't send reset in state " + this.h));
  this.h = 4;
  this.j && this.j.Ub ? (this.a.info("reset: Sending ResetFrame over existing primary."), jg(this.j, a), this.j.Ea()) : (this.j && (O(this.a, "reset: Disposing primary before sending ResetFrame."), this.j.g()), this.D && (O(this.a, "reset: Disposing secondary before sending ResetFrame."), this.D.g()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.nc = bg(this, m), jg(this.nc, a), this.nc.Ea());
  this.onreset && this.onreset.call(this.Pb, a, j)
};
function kg(a, b, c, d) {
  var f;
  f = a.ce;
  for(var g = a.Vg, h = a.Ug, l = [], o = m, r = 0, A = c.length;r < A;r++) {
    var s = c[r], w = s[0], s = s[1];
    if(w == f.jb + 1) {
      f.jb += 1;
      for(l.push(s);;) {
        w = f.jb + 1;
        s = f.$a.get(w, ac);
        if(s === ac) {
          break
        }
        l.push(s[0]);
        f.$a.remove(w);
        f.n -= s[1];
        f.jb = w
      }
    }else {
      if(!(w <= f.jb)) {
        if(g != k && f.$a.ba() >= g) {
          o = j;
          break
        }
        var C = Vb(s);
        if(h != k && f.n + C > h) {
          o = j;
          break
        }
        f.$a.set(w, [s, C]);
        f.n += C
      }
    }
  }
  f.$a.Oa() && f.$a.clear();
  f = [l, o];
  c = f[0];
  f = f[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(h = c[g], a.re && a.re.call(a.Pb, h), 4 == a.h || a.ua) {
        return
      }
    }
  }
  d || Zf(a);
  if(!(4 == a.h || a.ua) && f) {
    Xd(b.a, b.v() + "'s peer caused rwin overflow."), b.g()
  }
}
q.start = function() {
  this.onmessage && e(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.h && e(Error("ClientStream.start: " + G(this) + " already started"));
  this.h = 2;
  if(this.R instanceof Sf) {
    var a = Df(this.R.Ta, this), b = Df(this.R.Xa, this);
    ld(Jf([a, b]), y(this.Ag, this))
  }else {
    lg(this)
  }
};
q.Ag = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Hc, f = a[1].Hc;
  this.vd.push(a[0]);
  this.vd.push(a[1]);
  this.R = new Tf(d, b, f, c);
  lg(this)
};
function lg(a) {
  a.h = 3;
  a.j = bg(a, j);
  ag(a.j, a.Va, k);
  a.j.Ea()
}
q.c = function() {
  this.a.info(G(this) + " in disposeInternal.");
  this.h = 5;
  for(var a = this.xc.da(), b = 0;b < a.length;b++) {
    a[b].g()
  }
  for(a = 0;a < this.vd.length;a++) {
    cb(this.vd[a].Je, this)
  }
  I && this.yc && (Uc(this.yc), this.yc = k);
  this.Nf && this.Nf.call(this.Pb);
  delete this.xc;
  delete this.j;
  delete this.D;
  delete this.nc;
  delete this.Pb;
  Xf.e.c.call(this)
};
var Nf = 1, dg = 2, eg = 3;
function fg(a, b, c, d, f, g) {
  this.L = a;
  this.G = b;
  this.Ob = c;
  this.Aa = d;
  this.R = f;
  this.H = [];
  this.ub = g;
  this.Ub = !this.Bb();
  this.Jb = this.Aa != Nf;
  this.pg = y(this.ph, this)
}
B(fg, K);
q = fg.prototype;
q.a = Q("cw.net.ClientTransport");
q.s = k;
q.Me = k;
q.fg = k;
q.gd = k;
q.Ha = m;
q.rd = m;
q.Eb = k;
q.Jc = 0;
q.Ib = -1;
q.fd = -1;
q.jg = m;
q.xd = m;
q.Ra = 0;
q.fc = m;
q.u = function(a) {
  a.push("<ClientTransport #", "" + this.Ob, ", becomePrimary=", "" + this.ub, ">")
};
q.v = function() {
  return(this.ub ? "Prim. T#" : "Sec. T#") + this.Ob
};
q.Ue = function() {
  return!(!this.fc && this.Jc)
};
q.Bb = function() {
  return this.Aa == Nf || this.Aa == dg
};
function mg(a, b) {
  ib(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  kg(a.G, a, b, !a.Jb)
}
function ng(a, b, c) {
  try {
    var d = Ce(b);
    a.Jc += 1;
    O(a.a, a.v() + " RECV " + G(d));
    var f;
    1 == a.Jc && !d.m(Uf) && a.Bb() ? (N(a.a, a.v() + " is closing soon because got bad preamble: " + G(d)), f = j) : f = m;
    if(f) {
      return j
    }
    if(d instanceof se) {
      if(!/^([ -~]*)$/.test(d.Nb)) {
        return a.fc = j
      }
      a.fd += 1;
      c.push([a.fd, d.Nb])
    }else {
      if(d instanceof re) {
        var g = a.G, h = d.qa;
        g.Af = h;
        var l = g.Va, o = h.sb, c = m;
        o > l.bb && (c = j);
        for(var r = Yb(l).concat(), d = 0;d < r.length;d++) {
          var A = r[d];
          if(A > o) {
            break
          }
          var s = l.B.get(A)[1];
          l.B.remove(A);
          l.n -= s
        }
        for(d = 0;d < h.nb.length;d++) {
          var w = h.nb[d];
          w > l.bb && (c = j);
          l.B.ga(w) && (s = l.B.get(w)[1], l.B.remove(w), l.n -= s)
        }
        l.B.Oa() && l.B.clear();
        if(c) {
          return N(a.a, a.v() + " is closing soon because got bad SackFrame"), a.fc = j
        }
      }else {
        if(d instanceof ue) {
          a.fd = d.sc - 1
        }else {
          if(d instanceof we) {
            a.G.Bf = d.jc
          }else {
            if(d instanceof ye) {
              return P(a.a, a.v() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof Be) {
              return a.fc = j, "stream_attach_failure" == d.reason ? a.Ra += 1 : "acked_unsent_strings" == d.reason && (a.Ra += 0.5), P(a.a, a.v() + " is closing soon because got " + G(d)), j
            }
            if(!(d instanceof te)) {
              if(d instanceof xe) {
                var C = a.G, cj = !a.Jb;
                P(C.a, "Stream is now confirmed to exist at server.");
                C.Ge = j;
                C.ve && !cj && (C.ve = m, Zf(C))
              }else {
                c.length && (mg(a, c), bb(c));
                if(d instanceof ze) {
                  var dd = a.G;
                  dd.onreset && dd.onreset.call(dd.Pb, d.mc, d.Sb);
                  dd.g();
                  return j
                }
                e(Error(a.v() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(Pg) {
    return Pg instanceof R || e(Pg), N(a.a, a.v() + " is closing soon because got InvalidFrame: " + G(b)), a.fc = j
  }
  return m
}
function ee(a, b) {
  a.rd = j;
  try {
    for(var c = m, d = [], f = 0, g = b.length;f < g;f++) {
      if(a.ua) {
        a.a.info(a.v() + " returning from loop because we're disposed.");
        return
      }
      if(c = ng(a, b[f], d)) {
        break
      }
    }
    d.length && mg(a, d);
    a.rd = m;
    a.H.length && a.Ea();
    c && (P(a.a, a.v() + " closeSoon is true.  Frames were: " + G(b)), a.g())
  }finally {
    a.rd = m
  }
}
q.ph = function() {
  N(this.a, this.v() + " timed out due to lack of connection or no data being received.");
  this.g()
};
function og(a) {
  a.gd != k && (a.L.N.clearTimeout(a.gd), a.gd = k)
}
function Of(a, b) {
  og(a);
  b = Math.round(b);
  a.gd = a.L.N.setTimeout(a.pg, b);
  O(a.a, a.v() + "'s receive timeout set to " + b + " ms.")
}
function de(a) {
  a.Aa != Nf && (a.Aa == eg || a.Aa == dg ? Of(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.Aa)))
}
function $f(a) {
  var b = new pe;
  b.Ob = a.Ob;
  b.Qf = 2;
  b.tf = 2;
  a.G.Ge || (b.Tf = j);
  b.vc = a.G.vc;
  b.Ie = a.Jb;
  b.Ie && (b.Jf = 4096);
  b.Ff = 3E5;
  b.Df = a.Jb ? Math.floor(10) : 0;
  b.gg = m;
  a.ub && (b.bg = k, b.le = Math.floor((a.Jb ? 358E4 : 25E3) / 1E3));
  b.qa = $b(a.G.ce);
  b.$c = a.G.Af;
  a.H.push(b);
  a.Eb = b.qa
}
function fe(a, b) {
  b && (a.Ra += 0.5);
  a.g()
}
q.Ea = function() {
  this.Ha && !this.Ub && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.rd) {
    P(this.a, this.v() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ha;
    this.Ha = j;
    !a && !this.H.length && $f(this);
    for(a = 0;a < this.H.length;a++) {
      O(this.a, this.v() + " SEND " + G(this.H[a]))
    }
    if(this.Bb()) {
      for(var a = [], b = 0, c = this.H.length;b < c;b++) {
        this.H[b].oa(a), a.push("\n")
      }
      this.H = [];
      a = a.join("");
      b = this.ub ? this.R.Ta : this.R.Xa;
      this.s = Pf.Jd(this, this.ub ? this.R.Pf : this.R.Zf);
      this.Me = this.L.N === bd ? z() : this.L.N.getTime();
      this.s.ke(b, "POST", a);
      Of(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Jb ? 0 : this.ub ? 25E3 : 0))
    }else {
      if(this.Aa == eg) {
        a = [];
        b = 0;
        for(c = this.H.length;b < c;b++) {
          a.push(this.H[b].ia())
        }
        this.H = [];
        this.s ? this.s.zc(a) : (b = this.R, this.s = new ie(this), this.s.qd = b.rh.Jd(this.s), this.Me = this.L.N === bd ? z() : this.L.N.getTime(), this.s.Gd(b.host, b.port), this.s.ua || (this.s.zc(a), this.s.ua || Of(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.Aa))
      }
    }
  }
};
function ag(a, b, c) {
  !a.Ha && !a.H.length && $f(a);
  for(var c = Math.max(c, a.Ib + 1), b = b.kf(c), c = 0, d = b.length;c < d;c++) {
    var f = b[c], g = f[0], f = f[1];
    (-1 == a.Ib || a.Ib + 1 != g) && a.H.push(new ue(g));
    a.H.push(new se(f));
    a.Ib = g
  }
}
q.c = function() {
  this.a.info(this.v() + " in disposeInternal.");
  fg.e.c.call(this);
  this.fg = this.L.N === bd ? z() : this.L.N.getTime();
  this.H = [];
  og(this);
  this.s && this.s.g();
  var a = this.G;
  this.G = k;
  ig(a, this)
};
function jg(a, b) {
  !a.Ha && !a.H.length && $f(a);
  a.H.push(new ze(b, j));
  a.jg = j
}
function hg(a, b, c, d) {
  this.L = a;
  this.G = b;
  this.cf = c;
  this.Xe = d
}
B(hg, K);
q = hg.prototype;
q.Ha = m;
q.Ub = m;
q.Pc = k;
q.Eb = k;
q.a = Q("cw.net.DoNothingTransport");
function pg(a) {
  a.Pc = a.L.N.setTimeout(function() {
    a.Pc = k;
    a.Xe--;
    a.Xe ? pg(a) : a.g()
  }, a.cf)
}
q.Ea = function() {
  this.Ha && !this.Ub && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ha = j;
  pg(this)
};
q.u = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.cf, ">")
};
q.Bb = p(m);
q.v = p("Wast. T");
q.Ue = p(m);
q.c = function() {
  this.a.info(this.v() + " in disposeInternal.");
  hg.e.c.call(this);
  this.Pc != k && this.L.N.clearTimeout(this.Pc);
  var a = this.G;
  this.G = k;
  ig(a, this)
};
function qg(a, b, c) {
  a.style[Ga(c)] = b
}
function rg(a, b) {
  var c = hf(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function sg(a, b, c) {
  b instanceof S ? (c = b.height, b = b.width) : c == i && e(Error("missing height argument"));
  a.style.width = tg(b);
  a.style.height = tg(c)
}
function tg(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
function ug(a) {
  if("none" != (rg(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style && a.style.display)) {
    return vg(a)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = vg(a);
  b.display = c;
  b.position = f;
  b.visibility = d;
  return a
}
function vg(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = I && !b && !c;
  return(!ga(b) || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), H && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new S(b.right - b.left, b.bottom - b.top)) : new S(b, c)
}
function wg(a) {
  H ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[I ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var xg = lc ? "MozUserSelect" : I ? "WebkitUserSelect" : k;
function yg(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(xg) {
    if(b = b ? "none" : "", a.style[xg] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[xg] = b
      }
    }
  }else {
    if(H || kc) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
;function zg(a) {
  this.gb = a;
  this.Zc = []
}
B(zg, K);
var Ag = [];
function U(a, b, c, d) {
  u(c) || (Ag[0] = c, c = Ag);
  for(var f = 0;f < c.length;f++) {
    a.Zc.push(M(b, c[f], d || a, m, a.gb || a))
  }
  return a
}
function Bg(a, b, c, d, f, g) {
  if(u(c)) {
    for(var h = 0;h < c.length;h++) {
      Bg(a, b, c[h], d, f, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.gb || a;
      f = !!f;
      if(b = Tc(b, c, f)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].mb && b[c].Gb == d && b[c].capture == f && b[c].Tc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, Uc(b), cb(a.Zc, b))
  }
  return a
}
zg.prototype.ue = function() {
  Xa(this.Zc, Uc);
  this.Zc.length = 0
};
zg.prototype.c = function() {
  zg.e.c.call(this);
  this.ue()
};
zg.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function Cg() {
}
ea(Cg);
Cg.prototype.Wg = 0;
Cg.Ma();
function V(a) {
  this.O = a || ff();
  this.qc = Dg
}
B(V, $c);
V.prototype.Og = Cg.Ma();
var Dg = k;
function Eg(a, b) {
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
q = V.prototype;
q.T = k;
q.q = m;
q.d = k;
q.qc = k;
q.C = k;
q.Q = k;
q.Wb = k;
q.th = m;
function Fg(a) {
  return a.T || (a.T = ":" + (a.Og.Wg++).toString(36))
}
q.b = n("d");
function Gg(a) {
  return a.zb || (a.zb = new zg(a))
}
q.getParent = n("C");
q.Ae = function(a) {
  this.C && this.C != a && e(Error("Method not supported"));
  V.e.Ae.call(this, a)
};
q.Fa = n("O");
q.i = function() {
  this.d = this.O.createElement("div")
};
function Hg(a, b) {
  a.q && e(Error("Component already rendered"));
  a.d || a.i();
  b ? b.insertBefore(a.d, k) : a.O.p.body.appendChild(a.d);
  (!a.C || a.C.q) && a.S()
}
q.S = function() {
  this.q = j;
  Ig(this, function(a) {
    !a.q && a.b() && a.S()
  })
};
q.cb = function() {
  Ig(this, function(a) {
    a.q && a.cb()
  });
  this.zb && this.zb.ue();
  this.q = m
};
q.c = function() {
  V.e.c.call(this);
  this.q && this.cb();
  this.zb && (this.zb.g(), delete this.zb);
  Ig(this, function(a) {
    a.g()
  });
  !this.th && this.d && sf(this.d);
  this.C = this.d = this.Wb = this.Q = k
};
q.cc = n("d");
q.Lb = function(a) {
  this.q && e(Error("Component already rendered"));
  this.qc = a
};
function Ig(a, b) {
  a.Q && Xa(a.Q, b, i)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : Fg(a), a = this.Wb && c ? (c in this.Wb ? this.Wb[c] : i) || k : k;
    c && a && (Ta(this.Wb, c), cb(this.Q, a), b && (a.cb(), a.d && sf(a.d)), c = a, c == k && e(Error("Unable to set parent component")), c.C = k, V.e.Ae.call(c, k))
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function Jg(a, b) {
  a.setAttribute("role", b);
  a.Ji = b
}
;function Kg() {
}
var Lg;
ea(Kg);
q = Kg.prototype;
q.Kc = function() {
};
q.i = function(a) {
  var b = a.Fa().i("div", Mg(this, a).join(" "), a.ha);
  this.xe(a, b);
  return b
};
q.cc = function(a) {
  return a
};
q.$b = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(H && !J("7")) {
      var d = Ng(af(a), b);
      d.push(b);
      qa(c ? bf : cf, a).apply(k, d)
    }else {
      c ? bf(a, b) : cf(a, b)
    }
  }
};
q.vf = function(a) {
  a.qc == k && (a.qc = "rtl" == (rg(a.q ? a.d : a.O.p.body, "direction") || ((a.q ? a.d : a.O.p.body).currentStyle ? (a.q ? a.d : a.O.p.body).currentStyle.direction : k) || (a.q ? a.d : a.O.p.body).style && (a.q ? a.d : a.O.p.body).style.direction));
  a.qc && this.Lb(a.b(), j);
  a.isEnabled() && this.md(a, a.Qb)
};
q.xe = function(a, b) {
  a.isEnabled() || this.fa(b, 1, j);
  a.h & 8 && this.fa(b, 8, j);
  a.$ & 16 && this.fa(b, 16, !!(a.h & 16));
  a.$ & 64 && this.fa(b, 64, !!(a.h & 64))
};
q.jd = function(a, b) {
  yg(a, !b, !H && !kc)
};
q.Lb = function(a, b) {
  this.$b(a, this.w() + "-rtl", b)
};
q.xf = function(a) {
  var b;
  return a.$ & 32 && (b = a.fb()) ? xf(b) : m
};
q.md = function(a, b) {
  var c;
  if(a.$ & 32 && (c = a.fb())) {
    if(!b && a.h & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.h & 32 && a.nf()
    }
    xf(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
q.Ee = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.la = function(a, b, c) {
  var d = a.b();
  if(d) {
    var f = Og(this, b);
    f && this.$b(a, f, c);
    this.fa(d, b, c)
  }
};
q.fa = function(a, b, c) {
  Lg || (Lg = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Lg[b]) && a.setAttribute("aria-" + b, c)
};
q.kd = function(a, b) {
  var c = this.cc(a);
  if(c && (rf(c), b)) {
    if(v(b)) {
      uf(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = hf(c);
          c.appendChild(v(a) ? b.createTextNode(a) : a)
        }
      };
      u(b) ? Xa(b, d) : ha(b) && !("nodeType" in b) ? Xa(eb(b), d) : d(b)
    }
  }
};
q.fb = function(a) {
  return a.b()
};
q.w = p("goog-control");
function Mg(a, b) {
  var c = a.w(), d = [c], f = a.w();
  f != c && d.push(f);
  c = b.h;
  for(f = [];c;) {
    var g = c & -c;
    f.push(Og(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.va) && d.push.apply(d, c);
  H && !J("7") && d.push.apply(d, Ng(d));
  return d
}
function Ng(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Xa([], function(d) {
    $a(d, qa(ab, a)) && (!b || ab(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Og(a, b) {
  if(!a.Te) {
    var c = a.w();
    a.Te = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Te[b]
}
;function Qg(a, b) {
  a || e(Error("Invalid class name " + a));
  ka(b) || e(Error("Invalid decorator function " + b))
}
var Rg = {};
function Sg(a, b, c, d, f) {
  if(!H && (!I || !J("525"))) {
    return j
  }
  if(oc && f) {
    return Tg(a)
  }
  if(f && !d || !c && (17 == b || 18 == b) || H && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(H && yc());
    case 27:
      return!I
  }
  return Tg(a)
}
function Tg(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || I && 0 == a) {
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
;function Ug(a, b) {
  a && Vg(this, a, b)
}
B(Ug, $c);
q = Ug.prototype;
q.d = k;
q.Xc = k;
q.ee = k;
q.Yc = k;
q.Qa = -1;
q.Pa = -1;
var Wg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Xg = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Yg = {61:187, 
59:186}, Zg = H || I && J("525");
q = Ug.prototype;
q.Kg = function(a) {
  if(I && (17 == this.Qa && !a.ctrlKey || 18 == this.Qa && !a.altKey)) {
    this.Pa = this.Qa = -1
  }
  Zg && !Sg(a.keyCode, this.Qa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Pa = lc && a.keyCode in Yg ? Yg[a.keyCode] : a.keyCode
};
q.Lg = function() {
  this.Pa = this.Qa = -1
};
q.handleEvent = function(a) {
  var b = a.Da, c, d;
  H && "keypress" == a.type ? (c = this.Pa, d = 13 != c && 27 != c ? b.keyCode : 0) : I && "keypress" == a.type ? (c = this.Pa, d = 0 <= b.charCode && 63232 > b.charCode && Tg(c) ? b.charCode : 0) : kc ? (c = this.Pa, d = Tg(c) ? b.keyCode : 0) : (c = b.keyCode || this.Pa, d = b.charCode || 0, oc && 63 == d && !c && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in Wg ? f = Wg[c] : 25 == c && a.shiftKey && (f = 9) : g && g in Xg && (f = Xg[g]);
  a = f == this.Qa;
  this.Qa = f;
  b = new $g(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.g()
  }
};
q.b = n("d");
function Vg(a, b, c) {
  a.Yc && a.detach();
  a.d = b;
  a.Xc = M(a.d, "keypress", a, c);
  a.ee = M(a.d, "keydown", a.Kg, c, a);
  a.Yc = M(a.d, "keyup", a.Lg, c, a)
}
q.detach = function() {
  this.Xc && (Uc(this.Xc), Uc(this.ee), Uc(this.Yc), this.Yc = this.ee = this.Xc = k);
  this.d = k;
  this.Pa = this.Qa = -1
};
q.c = function() {
  Ug.e.c.call(this);
  this.detach()
};
function $g(a, b, c, d) {
  d && this.hc(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
B($g, Jc);
function W(a, b, c) {
  V.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = la(b);
      if(d = Rg[d]) {
        break
      }
      b = b.e ? b.e.constructor : k
    }
    b = d ? ka(d.Ma) ? d.Ma() : new d : k
  }
  this.l = b;
  this.ld(a)
}
B(W, V);
q = W.prototype;
q.ha = k;
q.h = 0;
q.$ = 39;
q.Ad = 255;
q.jh = 0;
q.Qb = j;
q.va = k;
q.Zd = j;
q.zd = m;
q.Zg = k;
q.fb = function() {
  return this.l.fb(this)
};
function ah(a, b) {
  b && (a.va ? ab(a.va, b) || a.va.push(b) : a.va = [b], a.l.$b(a, b, j))
}
q.$b = function(a, b) {
  b ? ah(this, a) : a && this.va && (cb(this.va, a), 0 == this.va.length && (this.va = k), this.l.$b(this, a, m))
};
q.i = function() {
  var a = this.l.i(this);
  this.d = a;
  var b = this.Zg || this.l.Kc();
  b && Jg(a, b);
  this.zd || this.l.jd(a, m);
  this.Qb || this.l.Ee(a, m)
};
q.cc = function() {
  return this.l.cc(this.b())
};
q.S = function() {
  W.e.S.call(this);
  this.l.vf(this);
  if(this.$ & -2 && (this.Zd && bh(this, j), this.$ & 32)) {
    var a = this.fb();
    if(a) {
      var b = this.Db || (this.Db = new Ug);
      Vg(b, a);
      U(U(U(Gg(this), b, "key", this.qf), a, "focus", this.Ig), a, "blur", this.nf)
    }
  }
};
function bh(a, b) {
  var c = Gg(a), d = a.b();
  b ? (U(U(U(U(c, d, "mouseover", a.Sc), d, "mousedown", a.Qc), d, "mouseup", a.rf), d, "mouseout", a.Rc), H && U(c, d, "dblclick", a.pf)) : (Bg(Bg(Bg(Bg(c, d, "mouseover", a.Sc), d, "mousedown", a.Qc), d, "mouseup", a.rf), d, "mouseout", a.Rc), H && Bg(c, d, "dblclick", a.pf))
}
q.cb = function() {
  W.e.cb.call(this);
  this.Db && this.Db.detach();
  this.Qb && this.isEnabled() && this.l.md(this, m)
};
q.c = function() {
  W.e.c.call(this);
  this.Db && (this.Db.g(), delete this.Db);
  delete this.l;
  this.va = this.ha = k
};
q.kd = function(a) {
  this.l.kd(this.b(), a);
  this.ld(a)
};
q.ld = aa("ha");
q.hf = function() {
  var a = this.ha;
  if(!a) {
    return""
  }
  if(!v(a)) {
    if(u(a)) {
      a = Ya(a, yf).join("")
    }else {
      if(ef && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        zf(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      ef || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
q.Lb = function(a) {
  W.e.Lb.call(this, a);
  var b = this.b();
  b && this.l.Lb(b, a)
};
q.jd = function(a) {
  this.zd = a;
  var b = this.b();
  b && this.l.jd(b, a)
};
q.Ee = function(a, b) {
  if(b || this.Qb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.l.Ee(c, a);
    this.isEnabled() && this.l.md(this, a);
    this.Qb = a;
    return j
  }
  return m
};
q.isEnabled = function() {
  return!(this.h & 1)
};
function ch(a, b) {
  dh(a, 2, b) && a.la(2, b)
}
q.de = function() {
  return!!(this.h & 4)
};
q.setActive = function(a) {
  dh(this, 4, a) && this.la(4, a)
};
q.Be = function(a) {
  dh(this, 8, a) && this.la(8, a)
};
q.la = function(a, b) {
  this.$ & a && b != !!(this.h & a) && (this.l.la(this, a, b), this.h = b ? this.h | a : this.h & ~a)
};
function X(a, b) {
  return!!(a.Ad & b) && !!(a.$ & b)
}
function dh(a, b, c) {
  return!!(a.$ & b) && !!(a.h & b) != c && (!(a.jh & b) || a.dispatchEvent(Eg(b, c))) && !a.ua
}
q.Sc = function(a) {
  !eh(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && ch(this, j)
};
q.Rc = function(a) {
  !eh(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(m), X(this, 2) && ch(this, m))
};
function eh(a, b) {
  return!!a.relatedTarget && tf(b, a.relatedTarget)
}
q.Qc = function(a) {
  if(this.isEnabled() && (X(this, 2) && ch(this, j), Lc(a) && (!I || !oc || !a.ctrlKey))) {
    X(this, 4) && this.setActive(j), this.l.xf(this) && this.fb().focus()
  }
  !this.zd && Lc(a) && (!I || !oc || !a.ctrlKey) && a.preventDefault()
};
q.rf = function(a) {
  this.isEnabled() && (X(this, 2) && ch(this, j), this.de() && this.kb(a) && X(this, 4) && this.setActive(m))
};
q.pf = function(a) {
  this.isEnabled() && this.kb(a)
};
q.kb = function(a) {
  if(X(this, 16)) {
    var b = !(this.h & 16);
    dh(this, 16, b) && this.la(16, b)
  }
  X(this, 8) && this.Be(j);
  X(this, 64) && (b = !(this.h & 64), dh(this, 64, b) && this.la(64, b));
  b = new Gc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.te = a.te);
  return this.dispatchEvent(b)
};
q.Ig = function() {
  X(this, 32) && dh(this, 32, j) && this.la(32, j)
};
q.nf = function() {
  X(this, 4) && this.setActive(m);
  X(this, 32) && dh(this, 32, m) && this.la(32, m)
};
q.qf = function(a) {
  return this.Qb && this.isEnabled() && this.Yd(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
q.Yd = function(a) {
  return 13 == a.keyCode && this.kb(a)
};
ka(W) || e(Error("Invalid component class " + W));
ka(Kg) || e(Error("Invalid renderer class " + Kg));
var fh = la(W);
Rg[fh] = Kg;
Qg("goog-control", function() {
  return new W(k)
});
function gh() {
}
B(gh, Kg);
ea(gh);
q = gh.prototype;
q.Kc = p("button");
q.fa = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : gh.e.fa.call(this, a, b, c)
};
q.i = function(a) {
  var b = gh.e.i.call(this, a), c = a.Nc();
  c && this.De(b, c);
  (c = a.Oc()) && this.pd(b, c);
  a.$ & 16 && this.fa(b, 16, !!(a.h & 16));
  return b
};
q.Oc = da;
q.pd = da;
q.Nc = function(a) {
  return a.title
};
q.De = function(a, b) {
  a && (a.title = b || "")
};
q.w = p("goog-button");
function hh() {
}
B(hh, gh);
ea(hh);
q = hh.prototype;
q.Kc = function() {
};
q.i = function(a) {
  a.q && m != a.Zd && bh(a, m);
  a.Zd = m;
  a.Ad &= -256;
  a.q && a.h & 32 && e(Error("Component already rendered"));
  a.h & 32 && a.la(32, m);
  a.$ &= -33;
  return a.Fa().i("button", {"class":Mg(this, a).join(" "), disabled:!a.isEnabled(), title:a.Nc() || "", value:a.Oc() || ""}, a.hf() || "")
};
q.vf = function(a) {
  U(Gg(a), a.b(), "click", a.kb)
};
q.jd = da;
q.Lb = da;
q.xf = function(a) {
  return a.isEnabled()
};
q.md = da;
q.la = function(a, b, c) {
  hh.e.la.call(this, a, b, c);
  if((a = a.b()) && 1 == b) {
    a.disabled = c
  }
};
q.Oc = function(a) {
  return a.value
};
q.pd = function(a, b) {
  a && (a.value = b)
};
q.fa = da;
function ih(a, b, c) {
  W.call(this, a, b || hh.Ma(), c)
}
B(ih, W);
q = ih.prototype;
q.Oc = n("hg");
q.pd = function(a) {
  this.hg = a;
  this.l.pd(this.b(), a)
};
q.Nc = n("dg");
q.De = function(a) {
  this.dg = a;
  this.l.De(this.b(), a)
};
q.c = function() {
  ih.e.c.call(this);
  delete this.hg;
  delete this.dg
};
q.S = function() {
  ih.e.S.call(this);
  if(this.$ & 32) {
    var a = this.fb();
    a && U(Gg(this), a, "keyup", this.Yd)
  }
};
q.Yd = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.kb(a) : 32 == a.keyCode
};
Qg("goog-button", function() {
  return new ih(k)
});
function jh() {
}
B(jh, gh);
ea(jh);
q = jh.prototype;
q.i = function(a) {
  var b = {"class":"goog-inline-block " + Mg(this, a).join(" "), title:a.Nc() || ""}, b = a.Fa().i("div", b, kh(this, a.ha, a.Fa()));
  this.xe(a, b);
  return b
};
q.Kc = p("button");
q.xe = function(a, b) {
  a.isEnabled() || this.fa(b, 1, j);
  a.h & 8 && this.fa(b, 8, j);
  a.$ & 16 && this.fa(b, 16, j);
  a.h & 64 && this.fa(b, 64, j)
};
q.cc = function(a) {
  return a && a.firstChild.firstChild
};
function kh(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.w() + "-outer-box"), c.i("div", "goog-inline-block " + (a.w() + "-inner-box"), b))
}
q.w = p("goog-custom-button");
function lh(a, b, c) {
  ih.call(this, a, b || jh.Ma(), c)
}
B(lh, ih);
Qg("goog-custom-button", function() {
  return new lh(k)
});
var mh = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function nh(a) {
  var b = {}, a = "" + a, c = "#" == a.charAt(0) ? a : "#" + a;
  if(oh.test(c)) {
    return b.Uc = ph(c), b.type = "hex", b
  }
  a: {
    var d = a.match(qh);
    if(d) {
      var c = Number(d[1]), f = Number(d[2]), d = Number(d[3]);
      if(0 <= c && 255 >= c && 0 <= f && 255 >= f && 0 <= d && 255 >= d) {
        c = [c, f, d];
        break a
      }
    }
    c = []
  }
  if(c.length) {
    return b.Uc = rh(c[0], c[1], c[2]), b.type = "rgb", b
  }
  if(mh && (c = mh[a.toLowerCase()])) {
    return b.Uc = c, b.type = "named", b
  }
  e(Error(a + " is not a valid color string"))
}
var sh = /#(.)(.)(.)/;
function ph(a) {
  oh.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  4 == a.length && (a = a.replace(sh, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function th(a) {
  a = ph(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function rh(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || 0 > a || 255 < a || isNaN(b) || 0 > b || 255 < b || isNaN(c) || 0 > c || 255 < c) && e(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = uh(a.toString(16));
  b = uh(b.toString(16));
  c = uh(c.toString(16));
  return"#" + a + b + c
}
var oh = /^#(?:[0-9a-f]{3}){1,2}$/i, qh = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function uh(a) {
  return 1 == a.length ? "0" + a : a
}
;var vh;
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
      }catch(f) {
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
  vh = c
})();
function wh(a, b) {
  V.call(this, b);
  this.Cg = a;
  this.Pd = new zg(this);
  this.Ic = new Sb
}
B(wh, V);
q = wh.prototype;
q.a = Q("goog.ui.media.FlashObject");
q.vh = "window";
q.Re = "#000000";
q.ng = "sameDomain";
q.ea = function(a, b) {
  this.rb = v(a) ? a : Math.round(a) + "px";
  this.$d = v(b) ? b : Math.round(b) + "px";
  this.b() && sg(this.b() ? this.b().firstChild : k, this.rb, this.$d);
  return this
};
q.S = function() {
  wh.e.S.call(this);
  var a = this.b(), b;
  b = H ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = H ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = sa(c, this.vh), d = this.Ic.wa(), f = this.Ic.da(), g = [], h = 0;h < d.length;h++) {
    var l = ua(d[h]), o = ua(f[h]);
    g.push(l + "=" + o)
  }
  b = sa(b, Fg(this), Fg(this), "goog-ui-media-flash-object", wa(this.Cg), wa(g.join("&")), this.Re, this.ng, c);
  a.innerHTML = b;
  this.rb && this.$d && this.ea(this.rb, this.$d);
  U(this.Pd, this.b(), Ra(Ec), Hc)
};
q.i = function() {
  this.Uf != k && !(0 <= Da(vh, this.Uf)) && (N(this.a, "Required flash version not found:" + this.Uf), e(Error("Method not supported")));
  var a = this.Fa().createElement("div");
  a.className = "goog-ui-media-flash";
  this.d = a
};
q.c = function() {
  wh.e.c.call(this);
  this.Ic = k;
  this.Pd.g();
  this.Pd = k
};
function xh(a) {
  D.call(this, a)
}
B(xh, D);
xh.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function yh(a, b, c) {
  function d() {
    f && delete t.__loadFlashObject_callbacks[f]
  }
  var f;
  if(lc && !J("1.8.1.20")) {
    return qd(new xh("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Da(vh, "9"))) {
    return b = vh, qd(new xh("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  f = "_" + wd();
  var h = new ed(d);
  t.__loadFlashObject_callbacks[f] = function() {
    a.setTimeout(function() {
      d();
      kd(h, T(g))
    }, 0)
  };
  b.Ic.set("onloadcallback", '__loadFlashObject_callbacks["' + f + '"]()');
  g = Fg(b);
  Hg(b, c);
  return h
}
function zh(a, b, c) {
  var d = yh(a, b, c), f = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  nd(d, function(b) {
    a.clearTimeout(f);
    return b
  });
  return d
}
;function Ah() {
}
Ah.prototype.Ac = k;
var Bh;
function Ch() {
}
B(Ch, Ah);
function Dh(a) {
  return(a = Eh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Fh(a) {
  var b = {};
  Eh(a) && (b[0] = j, b[1] = j);
  return b
}
Ch.prototype.ae = k;
function Eh(a) {
  if(!a.ae && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.ae = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.ae
}
Bh = new Ch;
function Gh(a) {
  this.headers = new Sb;
  this.Rb = a || k
}
B(Gh, $c);
Gh.prototype.a = Q("goog.net.XhrIo");
var Hh = /^https?$/i;
q = Gh.prototype;
q.Ia = m;
q.k = k;
q.wd = k;
q.ge = "";
q.zf = "";
q.ic = "";
q.Od = m;
q.Vc = m;
q.be = m;
q.ib = m;
q.sd = 0;
q.pb = k;
q.Vf = "";
q.uh = m;
q.send = function(a, b, c, d) {
  this.k && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.ge = a;
  this.ic = "";
  this.zf = b;
  this.Od = m;
  this.Ia = j;
  this.k = this.Rb ? Dh(this.Rb) : Dh(Bh);
  this.wd = this.Rb ? this.Rb.Ac || (this.Rb.Ac = Fh(this.Rb)) : Bh.Ac || (Bh.Ac = Fh(Bh));
  this.k.onreadystatechange = y(this.Mf, this);
  try {
    O(this.a, Ih(this, "Opening Xhr")), this.be = j, this.k.open(b, a, j), this.be = m
  }catch(f) {
    O(this.a, Ih(this, "Error opening Xhr: " + f.message));
    Jh(this, f);
    return
  }
  var a = c || "", g = this.headers.A();
  d && Qb(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.ga("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Qb(g, function(a, b) {
    this.k.setRequestHeader(b, a)
  }, this);
  this.Vf && (this.k.responseType = this.Vf);
  "withCredentials" in this.k && (this.k.withCredentials = this.uh);
  try {
    this.pb && (bd.clearTimeout(this.pb), this.pb = k), 0 < this.sd && (O(this.a, Ih(this, "Will abort after " + this.sd + "ms if incomplete")), this.pb = bd.setTimeout(y(this.qh, this), this.sd)), O(this.a, Ih(this, "Sending request")), this.Vc = j, this.k.send(a), this.Vc = m
  }catch(h) {
    O(this.a, Ih(this, "Send error: " + h.message)), Jh(this, h)
  }
};
q.qh = function() {
  "undefined" != typeof ba && this.k && (this.ic = "Timed out after " + this.sd + "ms, aborting", O(this.a, Ih(this, this.ic)), this.dispatchEvent("timeout"), this.abort(8))
};
function Jh(a, b) {
  a.Ia = m;
  a.k && (a.ib = j, a.k.abort(), a.ib = m);
  a.ic = b;
  Kh(a);
  Lh(a)
}
function Kh(a) {
  a.Od || (a.Od = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
q.abort = function() {
  this.k && this.Ia && (O(this.a, Ih(this, "Aborting")), this.Ia = m, this.ib = j, this.k.abort(), this.ib = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Lh(this))
};
q.c = function() {
  this.k && (this.Ia && (this.Ia = m, this.ib = j, this.k.abort(), this.ib = m), Lh(this, j));
  Gh.e.c.call(this)
};
q.Mf = function() {
  !this.be && !this.Vc && !this.ib ? this.Xg() : Mh(this)
};
q.Xg = function() {
  Mh(this)
};
function Mh(a) {
  if(a.Ia && "undefined" != typeof ba) {
    if(a.wd[1] && 4 == a.Na() && 2 == Nh(a)) {
      O(a.a, Ih(a, "Local request error detected and ignored"))
    }else {
      if(a.Vc && 4 == a.Na()) {
        bd.setTimeout(y(a.Mf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.Na()) {
          O(a.a, Ih(a, "Request complete"));
          a.Ia = m;
          var b = Nh(a), c;
          a: {
            switch(b) {
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
                c = j;
                break a;
              default:
                c = m
            }
          }
          if(!c) {
            if(b = 0 === b) {
              b = ("" + a.ge).match(De)[1] || k, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !Hh.test(b ? b.toLowerCase() : "")
            }
            c = b
          }
          if(c) {
            a.dispatchEvent("complete"), a.dispatchEvent("success")
          }else {
            var d;
            try {
              d = 2 < a.Na() ? a.k.statusText : ""
            }catch(f) {
              O(a.a, "Can not get status: " + f.message), d = ""
            }
            a.ic = d + " [" + Nh(a) + "]";
            Kh(a)
          }
          Lh(a)
        }
      }
    }
  }
}
function Lh(a, b) {
  if(a.k) {
    var c = a.k, d = a.wd[0] ? da : k;
    a.k = k;
    a.wd = k;
    a.pb && (bd.clearTimeout(a.pb), a.pb = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(f) {
      Xd(a.a, "Problem encountered resetting onreadystatechange: " + f.message)
    }
  }
}
q.de = function() {
  return!!this.k
};
q.Na = function() {
  return this.k ? this.k.readyState : 0
};
function Nh(a) {
  try {
    return 2 < a.Na() ? a.k.status : -1
  }catch(b) {
    return N(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.k && 4 == this.Na() ? this.k.getResponseHeader(a) : i
};
function Ih(a, b) {
  return b + " [" + a.zf + " " + a.ge + " " + Nh(a) + "]"
}
;var Oh = !(H || I && !J("420+"));
function Ph(a, b) {
  this.td = a;
  this.pa = b
}
B(Ph, K);
q = Ph.prototype;
q.s = k;
q.Wa = -1;
q.mf = m;
q.sf = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Qh(a) {
  var b = Lf(a.$e), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.pa, c, b), 1 != b && a.g()) : a.g()
}
q.Ng = function() {
  Qh(this);
  if(!this.ua) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.pa);
    this.g()
  }
};
q.bh = function() {
  var a = t.parent;
  if(a) {
    this.Wa = this.s.Na();
    if(2 <= this.Wa && !this.mf) {
      for(var b = new Sb, c = this.sf.length;c--;) {
        var d = this.sf[c];
        try {
          b.set(d, this.s.k.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.ba()) {
        this.mf = j;
        var c = {}, g;
        for(g in b.r) {
          ":" == g.charAt(0) && (c[Tb(b, g)] = b.r[g])
        }
        a.__XHRMaster_ongotheaders(this.pa, c);
        if(this.ua) {
          return
        }
      }
    }
    a.__XHRMaster_onreadystatechange(this.pa, this.Wa);
    Oh && 3 == this.Wa && Qh(this)
  }else {
    this.g()
  }
};
q.ke = function(a, b, c) {
  this.s = new Gh;
  M(this.s, "readystatechange", y(this.bh, this));
  M(this.s, "complete", y(this.Ng, this));
  this.s.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.$e = new Kf(this.s.k, 1048576)
};
q.c = function() {
  Ph.e.c.call(this);
  delete this.$e;
  this.s && this.s.g();
  delete this.td.uc[this.pa];
  delete this.td
};
function Rh() {
  this.uc = {}
}
B(Rh, K);
Rh.prototype.Tg = function(a, b, c, d) {
  var f = new Ph(this, a);
  this.uc[a] = f;
  f.ke(b, c, d)
};
Rh.prototype.xg = function(a) {
  (a = this.uc[a]) && a.g()
};
Rh.prototype.c = function() {
  Rh.e.c.call(this);
  for(var a = Ra(this.uc);a.length;) {
    a.pop().g()
  }
  delete this.uc
};
var Sh = new Rh;
t.__XHRSlave_makeRequest = y(Sh.Tg, Sh);
t.__XHRSlave_dispose = y(Sh.xg, Sh);
function Th(a) {
  this.p = a
}
var Uh = /\s*;\s*/;
q = Th.prototype;
q.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && I) {
    var b = "COOKIES_TEST_" + z();
    Vh.set(b, "1");
    if(!this.get(b)) {
      return m
    }
    this.remove(b)
  }
  return a
};
q.set = function(a, b, c, d, f, g) {
  /[;=\s]/.test(a) && e(Error('Invalid cookie name "' + a + '"'));
  /[;\r\n]/.test(b) && e(Error('Invalid cookie value "' + b + '"'));
  ga(c) || (c = -1);
  f = f ? ";domain=" + f : "";
  d = d ? ";path=" + d : "";
  g = g ? ";secure" : "";
  c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(z() + 1E3 * c)).toUTCString();
  this.p.cookie = a + "=" + b + f + d + c + g
};
q.get = function(a, b) {
  for(var c = a + "=", d = (this.p.cookie || "").split(Uh), f = 0, g;g = d[f];f++) {
    if(0 == g.indexOf(c)) {
      return g.substr(c.length)
    }
  }
  return b
};
q.remove = function(a, b, c) {
  var d = this.ga(a);
  this.set(a, "", 0, b, c);
  return d
};
q.wa = function() {
  return Wh(this).keys
};
q.da = function() {
  return Wh(this).ig
};
q.Oa = function() {
  return!this.p.cookie
};
q.ba = function() {
  return!this.p.cookie ? 0 : (this.p.cookie || "").split(Uh).length
};
q.ga = function(a) {
  return ga(this.get(a))
};
q.Ec = function(a) {
  for(var b = Wh(this).ig, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return j
    }
  }
  return m
};
q.clear = function() {
  for(var a = Wh(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b])
  }
};
function Wh(a) {
  for(var a = (a.p.cookie || "").split(Uh), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), -1 == d ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{keys:b, ig:c}
}
var Vh = new Th(document);
Vh.ci = 3950;
function Xh() {
}
Xh.prototype.jf = function() {
  return Boolean(Number((new Fe(document.location)).Z.get("httpStreaming", "0"))) ? 2 : 1
};
function Yh(a) {
  var b = new wh("/compiled_client/FlashConnector.swf?cb=4bdfc178fc0e508c0cd5efc3fdb09920");
  b.Re = "#777777";
  b.ea(300, 30);
  var c = T("FlashConnectorSwf");
  c || e(Error("no FlashConnectorSwf?"));
  return zh(a.N, b, c)
}
function Zh(a, b, c) {
  var d = new Fe(document.location);
  if(c) {
    var f = d.na, g = t.__demo_mainSocketPort, d = Yh(a);
    ld(d, function(b) {
      b = new he(a, b);
      return new Rf(f, g, b)
    });
    return d
  }
  b ? (b = t.__demo_shared_domain, d = d.A(), Ie(d, "_____random_____." + b)) : d = d.A();
  d.ob("/httpface/");
  Ke(d, "", i);
  d = new Sf(d.toString().replace("_____random_____", "%random%"));
  return pd(d)
}
function $h() {
  var a = ai, b = (new Fe(document.location)).Z, c = "http" != b.get("mode"), b = Boolean(Number(b.get("useSub", "1")));
  return Zh(a, b, c)
}
;function bi() {
  this.Sf = z()
}
var ci = new bi;
bi.prototype.set = aa("Sf");
bi.prototype.reset = function() {
  this.set(z())
};
bi.prototype.get = n("Sf");
function di(a) {
  this.$g = a || "";
  this.ih = ci
}
di.prototype.$f = j;
di.prototype.gh = j;
di.prototype.fh = j;
di.prototype.ag = m;
function ei(a) {
  return 10 > a ? "0" + a : "" + a
}
function fi(a, b) {
  var c = (a.cg - b) / 1E3, d = c.toFixed(3), f = 0;
  if(1 > c) {
    f = 2
  }else {
    for(;100 > c;) {
      f++, c *= 10
    }
  }
  for(;0 < f--;) {
    d = " " + d
  }
  return d
}
function gi(a) {
  di.call(this, a)
}
B(gi, di);
gi.prototype.ag = j;
function hi(a) {
  this.ah = y(this.mg, this);
  this.gf = new gi;
  this.wf = this.gf.$f = m;
  this.d = a;
  this.zg = this.d.ownerDocument || this.d.document;
  var a = ff(this.d), b = k;
  if(H) {
    b = a.p.createStyleSheet(), wg(b)
  }else {
    var c = jf(a.p, "head", i, i)[0];
    c || (b = jf(a.p, "body", i, i)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    wg(b);
    a.appendChild(c, b)
  }
  this.d.className += " logdiv"
}
hi.prototype.mg = function(a) {
  var b = 100 >= this.d.scrollHeight - this.d.scrollTop - this.d.clientHeight, c = this.zg.createElement("div");
  c.className = "logmsg";
  var d = this.gf, f;
  switch(a.Fb.value) {
    case Od.value:
      f = "dbg-sh";
      break;
    case Pd.value:
      f = "dbg-sev";
      break;
    case Qd.value:
      f = "dbg-w";
      break;
    case Rd.value:
      f = "dbg-i";
      break;
    default:
      f = "dbg-f"
  }
  var g = [];
  g.push(d.$g, " ");
  if(d.$f) {
    var h = new Date(a.cg);
    g.push("[", ei(h.getFullYear() - 2E3) + ei(h.getMonth() + 1) + ei(h.getDate()) + " " + ei(h.getHours()) + ":" + ei(h.getMinutes()) + ":" + ei(h.getSeconds()) + "." + ei(Math.floor(h.getMilliseconds() / 10)), "] ")
  }
  d.gh && g.push("[", Ca(fi(a, d.ih.get())), "s] ");
  d.fh && g.push("[", wa(a.Sg), "] ");
  g.push('<span class="', f, '">', va(Ca(wa(a.Hf))));
  d.ag && a.Rd && g.push("<br>", va(Ca(a.Qd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.d.appendChild(c);
  b && (this.d.scrollTop = this.d.scrollHeight)
};
hi.prototype.clear = function() {
  this.d.innerHTML = ""
};
function ii(a, b, c, d, f, g) {
  6 == arguments.length ? this.setTransform(a, b, c, d, f, g) : (0 != arguments.length && e(Error("Insufficient matrix parameters")), this.U = this.X = 1, this.P = this.V = this.W = this.Y = 0)
}
q = ii.prototype;
q.A = function() {
  return new ii(this.U, this.P, this.V, this.X, this.W, this.Y)
};
q.setTransform = function(a, b, c, d, f, g) {
  (!x(a) || !x(b) || !x(c) || !x(d) || !x(f) || !x(g)) && e(Error("Invalid transform parameters"));
  this.U = a;
  this.P = b;
  this.V = c;
  this.X = d;
  this.W = f;
  this.Y = g;
  return this
};
q.We = function(a) {
  this.U = a.U;
  this.P = a.P;
  this.V = a.V;
  this.X = a.X;
  this.W = a.W;
  this.Y = a.Y;
  return this
};
q.scale = function(a, b) {
  this.U *= a;
  this.P *= a;
  this.V *= b;
  this.X *= b;
  return this
};
q.translate = function(a, b) {
  this.W += a * this.U + b * this.V;
  this.Y += a * this.P + b * this.X;
  return this
};
q.rotate = function(a, b, c) {
  var d = new ii, f = Math.cos(a), a = Math.sin(a), b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f), c = this.U, d = this.V;
  this.U = b.U * c + b.P * d;
  this.V = b.V * c + b.X * d;
  this.W += b.W * c + b.Y * d;
  c = this.P;
  d = this.X;
  this.P = b.U * c + b.P * d;
  this.X = b.V * c + b.X * d;
  this.Y += b.W * c + b.Y * d;
  return this
};
q.toString = function() {
  return"matrix(" + [this.U, this.P, this.V, this.X, this.W, this.Y].join() + ")"
};
q.m = function(a) {
  return this == a ? j : !a ? m : this.U == a.U && this.V == a.V && this.W == a.W && this.P == a.P && this.X == a.X && this.Y == a.Y
};
function Y(a, b) {
  this.d = a;
  this.xa = b;
  this.Kd = m
}
B(Y, $c);
q = Y.prototype;
q.xa = k;
q.d = k;
q.eg = k;
q.b = n("d");
q.addEventListener = function(a, b, c, d) {
  M(this.d, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Sc(this.d, a, b, c, d)
};
q.c = function() {
  Y.e.c.call(this);
  Wc(this.d)
};
function Z(a, b, c, d) {
  Y.call(this, a, b);
  this.Ke = c;
  this.xa.ze(this, c);
  this.fill = d;
  this.xa.ye(this, d)
}
B(Z, Y);
Z.prototype.fill = k;
Z.prototype.Ke = k;
Z.prototype.Fg = n("fill");
Z.prototype.Hg = n("Ke");
function ji(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
B(ji, Z);
function ki(a, b) {
  Y.call(this, a, b)
}
B(ki, Y);
function li(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
B(li, Z);
function mi(a, b) {
  Y.call(this, a, b)
}
B(mi, Y);
function ni(a, b) {
  Y.call(this, a, b)
}
B(ni, ki);
ni.prototype.clear = function() {
  rf(this.b())
};
ni.prototype.ea = function(a, b) {
  oi(this.b(), {width:a, height:b})
};
function pi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
B(pi, li);
function qi(a, b) {
  Y.call(this, a, b)
}
B(qi, mi);
qi.prototype.ea = function(a, b) {
  oi(this.b(), {width:a, height:b})
};
function ri() {
}
;function si(a, b) {
  this.Fd = a;
  this.kc = b || 1
}
B(si, ri);
si.prototype.ja = n("Fd");
function ti(a, b) {
  this.rb = a;
  this.Fd = b
}
ti.prototype.ja = n("Fd");
function ui() {
  this.F = [];
  this.f = [];
  this.sa = []
}
ui.prototype.vb = k;
ui.prototype.aa = k;
ui.prototype.Mb = j;
var vi = [2, 2, 6, 6, 0];
q = ui.prototype;
q.clear = function() {
  this.F.length = 0;
  this.f.length = 0;
  this.sa.length = 0;
  delete this.vb;
  delete this.aa;
  delete this.Mb;
  return this
};
q.moveTo = function(a, b) {
  0 == this.F[this.F.length - 1] ? this.sa.length -= 2 : (this.F.push(0), this.f.push(1));
  this.sa.push(a, b);
  this.aa = this.vb = [a, b];
  return this
};
q.lineTo = function(a) {
  var b = this.F[this.F.length - 1];
  b == k && e(Error("Path cannot start with lineTo"));
  1 != b && (this.F.push(1), this.f.push(0));
  for(b = 0;b < arguments.length;b += 2) {
    var c = arguments[b], d = arguments[b + 1];
    this.sa.push(c, d)
  }
  this.f[this.f.length - 1] += b / 2;
  this.aa = [c, d];
  return this
};
q.Ze = function(a) {
  var b = this.F[this.F.length - 1];
  b == k && e(Error("Path cannot start with curve"));
  2 != b && (this.F.push(2), this.f.push(0));
  for(b = 0;b < arguments.length;b += 6) {
    var c = arguments[b + 4], d = arguments[b + 5];
    this.sa.push(arguments[b], arguments[b + 1], arguments[b + 2], arguments[b + 3], c, d)
  }
  this.f[this.f.length - 1] += b / 6;
  this.aa = [c, d];
  return this
};
q.close = function() {
  var a = this.F[this.F.length - 1];
  a == k && e(Error("Path cannot start with close"));
  4 != a && (this.F.push(4), this.f.push(1), this.aa = this.vb);
  return this
};
q.arcTo = function(a, b, c, d) {
  var f = this.aa[0] - a * Math.cos(ke(c)) + a * Math.cos(ke(c + d)), g = this.aa[1] - b * Math.sin(ke(c)) + b * Math.sin(ke(c + d));
  this.F.push(3);
  this.f.push(1);
  this.sa.push(a, b, c, d, f, g);
  this.Mb = m;
  this.aa = [f, g];
  return this
};
q.og = function(a, b, c, d) {
  for(var f = this.aa[0] - a * Math.cos(ke(c)), g = this.aa[1] - b * Math.sin(ke(c)), h = ke(d), d = Math.ceil(2 * (Math.abs(h) / Math.PI)), h = h / d, c = ke(c), l = 0;l < d;l++) {
    var o = Math.cos(c), r = Math.sin(c), A = 4 / 3 * Math.sin(h / 2) / (1 + Math.cos(h / 2)), s = f + (o - A * r) * a, w = g + (r + A * o) * b, c = c + h, o = Math.cos(c), r = Math.sin(c);
    this.Ze(s, w, f + (o + A * r) * a, g + (r - A * o) * b, f + o * a, g + r * b)
  }
  return this
};
function wi(a, b) {
  for(var c = a.sa, d = 0, f = 0, g = a.F.length;f < g;f++) {
    var h = a.F[f], l = vi[h] * a.f[f];
    b(h, c.slice(d, d + l));
    d += l
  }
}
q.A = function() {
  var a = new this.constructor;
  a.F = this.F.concat();
  a.f = this.f.concat();
  a.sa = this.sa.concat();
  a.vb = this.vb && this.vb.concat();
  a.aa = this.aa && this.aa.concat();
  a.Mb = this.Mb;
  return a
};
var xi = {};
xi[0] = ui.prototype.moveTo;
xi[1] = ui.prototype.lineTo;
xi[4] = ui.prototype.close;
xi[2] = ui.prototype.Ze;
xi[3] = ui.prototype.og;
function yi(a) {
  if(a.Mb) {
    return a.A()
  }
  var b = new ui;
  wi(a, function(a, d) {
    xi[a].apply(b, d)
  });
  return b
}
ui.prototype.Oa = function() {
  return 0 == this.F.length
};
function zi(a, b, c, d, f) {
  V.call(this, f);
  this.width = a;
  this.height = b;
  this.ma = c || k;
  this.Xb = d || k
}
B(zi, V);
q = zi.prototype;
q.I = k;
q.Ja = 0;
q.ab = 0;
q.lf = function() {
  return this.ca()
};
q.ca = function() {
  return this.q ? ug(this.b()) : x(this.width) && x(this.height) ? new S(this.width, this.height) : k
};
function Ai(a) {
  var b = a.ca();
  return b ? b.width / (a.ma ? new S(a.ma, a.Xb) : a.ca()).width : 0
}
;function Bi(a, b, c, d, f) {
  zi.call(this, a, b, c, d, f);
  this.bf = {};
  this.Pe = I && !J(526);
  this.gb = new zg(this)
}
var Ci;
B(Bi, zi);
function Di(a, b, c) {
  a = a.O.p.createElementNS("http://www.w3.org/2000/svg", b);
  c && oi(a, c);
  return a
}
function oi(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
q = Bi.prototype;
q.tb = function(a, b) {
  (b || this.I).b().appendChild(a.b())
};
q.ye = function(a, b) {
  var c = a.b();
  b instanceof si ? (c.setAttribute("fill", b.ja()), c.setAttribute("fill-opacity", b.kc)) : c.setAttribute("fill", "none")
};
q.ze = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.ja());
    var d = b.rb;
    v(d) && -1 != d.indexOf("px") ? c.setAttribute("stroke-width", parseFloat(d) / Ai(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
q.i = function() {
  var a = Di(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = Di(this, "g");
  this.Md = Di(this, "defs");
  this.I = new ni(b, this);
  a.appendChild(this.Md);
  a.appendChild(b);
  this.d = a;
  if(this.ma || this.Ja || this.ab) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.Pe ? this.ud() : this.b().setAttribute("viewBox", this.Ja + " " + this.ab + " " + (this.ma ? this.ma + " " + this.Xb : ""))
  }
};
q.ud = function() {
  if(this.q && (this.ma || this.Ja || !this.ab)) {
    var a = this.ca();
    if(0 == a.width) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.Ja, c = -this.ab, d = a.width / this.ma, a = a.height / this.Xb;
      this.I.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
q.ea = function(a, b) {
  sg(this.b(), a, b)
};
q.ca = function() {
  if(!lc) {
    return this.q ? ug(this.b()) : Bi.e.ca.call(this)
  }
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.q && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = ug(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || ug(f), b = parseFloat(b) * g.height / 100);
  return new S(a, b)
};
q.clear = function() {
  this.I.clear();
  rf(this.Md);
  this.bf = {}
};
q.Fc = function(a, b, c, d, f, g, h) {
  a = Di(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new pi(a, this, f, g);
  this.tb(f, h);
  return f
};
q.drawImage = function(a, b, c, d, f, g) {
  a = Di(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new qi(a, this);
  this.tb(f, g);
  return f
};
q.S = function() {
  var a = this.ca();
  Bi.e.S.call(this);
  a || this.dispatchEvent("resize");
  if(this.Pe) {
    var a = this.width, b = this.height;
    "string" == typeof a && -1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%") && U(this.gb, Ei(), cd, this.ud);
    this.ud()
  }
};
q.cb = function() {
  Bi.e.cb.call(this);
  this.Pe && Bg(this.gb, Ei(), cd, this.ud)
};
q.c = function() {
  delete this.bf;
  delete this.Md;
  delete this.I;
  Bi.e.c.call(this)
};
function Ei() {
  Ci || (Ci = new ad(400), Ci.start());
  return Ci
}
;function Fi() {
  return this.d = this.xa.O.b(this.T) || this.d
}
function Gi(a, b) {
  this.T = a.id;
  Y.call(this, a, b)
}
B(Gi, ki);
Gi.prototype.b = Fi;
Gi.prototype.clear = function() {
  rf(this.b())
};
Gi.prototype.ea = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  this.xa.I != this && (c.coordorigin = "0 0")
};
function Hi(a, b, c, d, f, g, h, l) {
  this.T = a.id;
  Z.call(this, a, b, h, l)
}
B(Hi, li);
Hi.prototype.b = Fi;
function Ii(a, b) {
  this.T = a.id;
  Y.call(this, a, b)
}
B(Ii, mi);
Ii.prototype.b = Fi;
Ii.prototype.ea = function(a, b) {
  var c = this.b().style;
  c.width = Ji(a) + "px";
  c.height = Ji(b) + "px"
};
function Ki(a, b, c, d, f) {
  zi.call(this, a, b, c, d, f);
  this.gb = new zg(this)
}
B(Ki, zi);
var Li = document.documentMode && 8 <= document.documentMode;
function Ji(a) {
  return Math.round(100 * (parseFloat(a.toString()) - 0.5))
}
function $(a) {
  return Math.round(100 * parseFloat(a.toString()))
}
function Mi(a, b) {
  var c = a.O.createElement("g_vml_:" + b);
  c.id = "goog_" + Ea++;
  return c
}
function Ni(a) {
  Li && a.q && (a.b().innerHTML = a.b().innerHTML)
}
Ki.prototype.tb = function(a, b) {
  (b || this.I).b().appendChild(a.b());
  Ni(this)
};
Ki.prototype.ye = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    "fill" == f.tagName && c.removeChild(f)
  }
  b instanceof si ? "transparent" == b.ja() ? c.filled = m : 1 != b.kc ? (c.filled = j, d = Mi(this, "fill"), d.opacity = Math.round(100 * b.kc) + "%", d.color = b.ja(), c.appendChild(d)) : (c.filled = j, c.fillcolor = b.ja()) : c.filled = m;
  Ni(this)
};
Ki.prototype.ze = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = j;
    var d = b.rb, d = v(d) && -1 == d.indexOf("px") ? parseFloat(d) : d * Ai(this), f = c.getElementsByTagName("stroke")[0];
    1 > d ? (f = f || Mi(this, "stroke"), f.opacity = d, f.Ki = "1px", f.color = b.ja(), c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.ja(), c.strokeweight = d + "px")
  }else {
    c.stroked = m
  }
  Ni(this)
};
function Oi(a, b, c, d, f) {
  var g = a.style;
  g.position = "absolute";
  g.left = Ji(b) + "px";
  g.top = Ji(c) + "px";
  g.width = $(d) + "px";
  g.height = $(f) + "px";
  "shape" == a.tagName && (a.coordsize = $(d) + " " + $(f))
}
try {
  eval("document.namespaces")
}catch(Pi) {
}
q = Ki.prototype;
q.i = function() {
  var a = this.O.p;
  a.namespaces.g_vml_ || (Li ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}");
  var a = this.width, b = this.height, c = this.O.i("div", {style:"overflow:hidden;position:relative;width:" + (v(a) && ra(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (v(b) && ra(b) ? b : parseFloat(b.toString()) + "px")});
  this.d = c;
  var d = Mi(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.ma ? $(this.ma) + " " + $(this.Xb) : $(a) + " " + $(b);
  d.coordorigin = ga(this.Ja) ? $(this.Ja) + " " + $(this.ab) : "0 0";
  c.appendChild(d);
  this.I = new Gi(d, this);
  M(c, "resize", y(this.Xd, this))
};
q.Xd = function() {
  var a = ug(this.b()), b = this.I.b().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.b();a && a.currentStyle && "none" != a.currentStyle.display;) {
      a = a.parentNode
    }
    a && a.currentStyle && U(this.gb, a, "propertychange", this.Xd)
  }
  this.dispatchEvent("resize")
};
q.ea = function(a, b) {
  sg(this.b(), a, b)
};
q.ca = function() {
  var a = this.b();
  return new S(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
q.clear = function() {
  this.I.clear()
};
q.Fc = function(a, b, c, d, f, g, h) {
  var l = Mi(this, "oval");
  Oi(l, a - c, b - d, 2 * c, 2 * d);
  a = new Hi(l, this, 0, 0, 0, 0, f, g);
  this.tb(a, h);
  return a
};
q.drawImage = function(a, b, c, d, f, g) {
  var h = Mi(this, "image");
  Oi(h, a, b, c, d);
  Li ? h.src = f : h.setAttribute("src", f);
  a = new Ii(h, this);
  this.tb(a, g);
  return a
};
q.S = function() {
  Ki.e.S.call(this);
  this.Xd();
  Ni(this)
};
q.c = function() {
  this.I = k;
  Ki.e.c.call(this)
};
function Qi(a) {
  Y.call(this, k, a);
  this.Q = []
}
B(Qi, ki);
Qi.prototype.clear = function() {
  this.Q.length && (this.Q.length = 0, Ri(this.xa))
};
Qi.prototype.ea = function() {
};
Qi.prototype.appendChild = function(a) {
  this.Q.push(a)
};
Qi.prototype.Ba = function() {
  for(var a = 0, b = this.Q.length;a < b;a++) {
    Si(this.xa, this.Q[a])
  }
};
function Ti(a, b, c, d, f, g, h, l) {
  Z.call(this, a, b, h, l);
  this.tg = c;
  this.ug = d;
  this.Wf = f;
  this.Xf = g;
  this.z = new ui;
  this.z.clear();
  this.z.moveTo(this.tg + this.Wf * Math.cos(ke(0)), this.ug + this.Xf * Math.sin(ke(0)));
  this.z.arcTo(this.Wf, this.Xf, 0, 360);
  this.z.close();
  this.Yg = new Ui(k, b, this.z, h, l)
}
B(Ti, li);
Ti.prototype.Ba = function(a) {
  this.Yg.Ba(a)
};
function Ui(a, b, c, d, f) {
  Z.call(this, a, b, d, f);
  this.ob(c)
}
B(Ui, ji);
Ui.prototype.Zb = m;
Ui.prototype.ob = function(a) {
  this.z = a.Mb ? a : yi(a);
  this.Zb && Ri(this.xa)
};
Ui.prototype.Ba = function(a) {
  this.Zb = j;
  a.beginPath();
  wi(this.z, function(b, c) {
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
function Vi(a, b, c, d, f, g, h) {
  Y.call(this, a, b);
  this.xh = c;
  this.zh = d;
  this.Qe = f;
  this.Wd = g;
  this.hh = h
}
B(Vi, mi);
Vi.prototype.Zb = m;
Vi.prototype.ea = function(a, b) {
  this.Qe = a;
  this.Wd = b;
  this.Zb && Ri(this.xa)
};
Vi.prototype.Ba = function(a) {
  this.uf ? (this.Qe && this.Wd && a.drawImage(this.uf, this.xh, this.zh, this.Qe, this.Wd), this.Zb = j) : (a = new Image, a.onload = y(this.Jg, this, a), a.src = this.hh)
};
Vi.prototype.Jg = function(a) {
  this.uf = a;
  Ri(this.xa)
};
function Wi(a, b, c, d, f) {
  zi.call(this, a, b, c, d, f)
}
B(Wi, zi);
q = Wi.prototype;
q.ye = function() {
  Ri(this)
};
q.ze = function() {
  Ri(this)
};
function Xi(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.eg ? b.eg.A() : new ii, f = d.W, g = d.Y;
  (f || g) && c.translate(f, g);
  (d = d.P) && c.rotate(Math.asin(d))
}
q.i = function() {
  var a = this.O.i("div", {style:"position:relative;overflow:hidden"});
  this.d = a;
  this.Vb = this.O.i("canvas");
  a.appendChild(this.Vb);
  this.Rg = this.I = new Qi(this);
  this.dh = 0;
  Yi(this)
};
q.getContext = function() {
  this.b() || this.i();
  this.wb || (this.wb = this.Vb.getContext("2d"), this.wb.save());
  return this.wb
};
q.ea = function(a, b) {
  this.width = a;
  this.height = b;
  Yi(this);
  Ri(this)
};
q.ca = function() {
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.q && (c || d)) {
    return k
  }
  var f, g;
  c && (f = this.b().parentNode, g = ug(f), a = parseFloat(a) * g.width / 100);
  d && (f = f || this.b().parentNode, g = g || ug(f), b = parseFloat(b) * g.height / 100);
  return new S(a, b)
};
function Yi(a) {
  sg(a.b(), a.width, a.height);
  var b = a.ca();
  b && (sg(a.Vb, b.width, b.height), a.Vb.width = b.width, a.Vb.height = b.height, a.wb = k)
}
q.reset = function() {
  var a = this.getContext();
  a.restore();
  var b = this.ca();
  b.width && b.height && a.clearRect(0, 0, b.width, b.height);
  a.save()
};
q.clear = function() {
  this.reset();
  this.I.clear();
  for(var a = this.b();1 < a.childNodes.length;) {
    a.removeChild(a.lastChild)
  }
};
function Ri(a) {
  if(!a.Hi && a.q) {
    a.reset();
    if(a.ma) {
      var b = a.ca();
      a.getContext().scale(b.width / a.ma, b.height / a.Xb)
    }
    (a.Ja || a.ab) && a.getContext().translate(-a.Ja, -a.ab);
    Xi(a, a.I);
    a.I.Ba(a.wb);
    a.getContext().restore()
  }
}
function Si(a, b) {
  var c = a.getContext();
  Xi(a, b);
  if(!b.Fg || !b.Hg) {
    b.Ba(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof si) {
        0 != d.kc && (c.globalAlpha = d.kc, c.fillStyle = d.ja(), b.Ba(c), c.fill(), c.globalAlpha = 1)
      }else {
        var f = c.createLinearGradient(d.Ci(), d.Ei(), d.Di(), d.Fi());
        f.addColorStop(0, d.Ai());
        f.addColorStop(1, d.Bi());
        c.fillStyle = f;
        b.Ba(c);
        c.fill()
      }
    }
    if(d = b.Ke) {
      b.Ba(c), c.strokeStyle = d.ja(), d = d.rb, v(d) && -1 != d.indexOf("px") && (d = parseFloat(d) / Ai(a)), c.lineWidth = d, c.stroke()
    }
  }
  a.getContext().restore()
}
q.tb = function(a, b) {
  this.append(a, b)
};
q.append = function(a, b) {
  b = b || this.I;
  b.appendChild(a);
  this.q && !this.dh && !(b != this.I && b != this.Rg) && Si(this, a)
};
q.Fc = function(a, b, c, d, f, g, h) {
  a = new Ti(k, this, a, b, c, d, f, g);
  this.append(a, h);
  return a
};
q.drawImage = function(a, b, c, d, f, g) {
  a = new Vi(k, this, a, b, c, d, f);
  this.append(a, g);
  return a
};
q.c = function() {
  this.wb = k;
  Wi.e.c.call(this)
};
q.S = function() {
  var a = this.ca();
  Wi.e.S.call(this);
  a || (Yi(this), this.dispatchEvent("resize"));
  Ri(this)
};
function Zi(a) {
  this.B = [];
  $i(this, a)
}
B(Zi, $c);
q = Zi.prototype;
q.Ya = k;
q.we = k;
function $i(a, b) {
  b && (Xa(b, function(a) {
    this.rc(a, m)
  }, a), fb(a.B, b))
}
q.Vd = n("Ya");
q.kf = function() {
  return eb(this.B)
};
q.od = function(a) {
  a != this.Ya && (this.rc(this.Ya, m), this.Ya = a, this.rc(a, j));
  this.dispatchEvent("select")
};
q.Ud = function() {
  return this.Ya ? Wa(this.B, this.Ya) : -1
};
q.Ce = function(a) {
  this.od(this.B[a] || k)
};
q.clear = function() {
  bb(this.B);
  this.Ya = k
};
q.c = function() {
  Zi.e.c.call(this);
  delete this.B;
  this.Ya = k
};
q.rc = function(a, b) {
  a && ("function" == typeof this.we ? this.we(a, b) : "function" == typeof a.Be && a.Be(b))
};
function aj() {
}
B(aj, Kg);
ea(aj);
var bj = 0;
aj.prototype.i = function(a) {
  var b = Mg(this, a);
  return a.Fa().i("div", b ? b.join(" ") : k, dj(this, a.ha, a.lf(), a.Fa()))
};
function dj(a, b, c, d) {
  for(var f = [], g = 0, h = 0;g < c.height;g++) {
    for(var l = [], o = 0;o < c.width;o++) {
      var r = b && b[h++];
      l.push(ej(a, r, d))
    }
    f.push(d.i("tr", a.w() + "-row", l))
  }
  return a.Ye(f, d)
}
aj.prototype.Ye = function(a, b) {
  var c = b.i("table", this.w() + "-table", b.i("tbody", this.w() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Jg(c, "grid");
  return c
};
function ej(a, b, c) {
  a = c.i("td", {"class":a.w() + "-cell", id:a.w() + "-cell-" + bj++}, b);
  Jg(a, "gridcell");
  return a
}
aj.prototype.kd = function(a, b) {
  if(a) {
    var c = jf(document, "tbody", this.w() + "-body", a)[0];
    if(c) {
      var d = 0;
      Xa(c.rows, function(a) {
        Xa(a.cells, function(a) {
          rf(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = ff(a), h = c.rows[0].cells.length;d < b.length;) {
          var l = b[d++];
          f.push(ej(this, l, g));
          f.length == h && (l = g.i("tr", this.w() + "-row", f), c.appendChild(l), f.length = 0)
        }
        if(0 < f.length) {
          for(;f.length < h;) {
            f.push(ej(this, "", g))
          }
          l = g.i("tr", this.w() + "-row", f);
          c.appendChild(l)
        }
      }
    }
    yg(a, j, lc)
  }
};
function fj(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && ab(af(c), a.w() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function gj(a, b, c, d) {
  c && (c = c.parentNode, a = a.w() + "-cell-hover", d ? bf(c, a) : cf(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id))
}
aj.prototype.w = p("goog-palette");
function hj(a, b, c) {
  W.call(this, a, b || aj.Ma(), c)
}
B(hj, W);
q = hj.prototype;
q.n = k;
q.hb = -1;
q.K = k;
q.c = function() {
  hj.e.c.call(this);
  this.K && (this.K.g(), this.K = k);
  this.n = k
};
q.ld = function(a) {
  hj.e.ld.call(this, a);
  ij(this);
  this.K ? (this.K.clear(), $i(this.K, a)) : (this.K = new Zi(a), this.K.we = y(this.rc, this), U(Gg(this), this.K, "select", this.Mg));
  this.hb = -1
};
q.hf = p(k);
q.Sc = function(a) {
  hj.e.Sc.call(this, a);
  var b = fj(this.l, this, a.target);
  if((!b || !a.relatedTarget || !tf(b, a.relatedTarget)) && b != jj(this)) {
    a = this.ha, kj(this, a ? Wa(a, b) : -1)
  }
};
q.Rc = function(a) {
  hj.e.Rc.call(this, a);
  var b = fj(this.l, this, a.target);
  (!b || !a.relatedTarget || !tf(b, a.relatedTarget)) && b == jj(this) && gj(this.l, this, b, m)
};
q.Qc = function(a) {
  hj.e.Qc.call(this, a);
  if(this.de() && (a = fj(this.l, this, a.target), a != jj(this))) {
    var b = this.ha;
    kj(this, b ? Wa(b, a) : -1)
  }
};
q.kb = function() {
  var a = jj(this);
  return a ? (this.od(a), this.dispatchEvent("action")) : m
};
q.qf = function(a) {
  var b = this.ha, b = b ? b.length : 0, c = this.n.width;
  if(0 == b || !this.isEnabled()) {
    return m
  }
  if(13 == a.keyCode || 32 == a.keyCode) {
    return this.kb(a)
  }
  if(36 == a.keyCode) {
    return kj(this, 0), j
  }
  if(35 == a.keyCode) {
    return kj(this, b - 1), j
  }
  var d = 0 > this.hb ? this.Ud() : this.hb;
  switch(a.keyCode) {
    case 37:
      -1 == d && (d = b);
      if(0 < d) {
        return kj(this, d - 1), a.preventDefault(), j
      }
      break;
    case 39:
      if(d < b - 1) {
        return kj(this, d + 1), a.preventDefault(), j
      }
      break;
    case 38:
      -1 == d && (d = b + c - 1);
      if(d >= c) {
        return kj(this, d - c), a.preventDefault(), j
      }
      break;
    case 40:
      if(-1 == d && (d = -c), d < b - c) {
        return kj(this, d + c), a.preventDefault(), j
      }
  }
  return m
};
q.Mg = function() {
};
q.lf = n("n");
q.ea = function(a, b) {
  this.b() && e(Error("Component already rendered"));
  this.n = x(a) ? new S(a, b) : a;
  ij(this)
};
function jj(a) {
  var b = a.ha;
  return b && b[a.hb]
}
function kj(a, b) {
  b != a.hb && (lj(a, a.hb, m), a.hb = b, lj(a, b, j))
}
q.Ud = function() {
  return this.K ? this.K.Ud() : -1
};
q.Vd = function() {
  return this.K ? this.K.Vd() : k
};
q.Ce = function(a) {
  this.K && this.K.Ce(a)
};
q.od = function(a) {
  this.K && this.K.od(a)
};
function lj(a, b, c) {
  if(a.b()) {
    var d = a.ha;
    d && 0 <= b && b < d.length && gj(a.l, a, d[b], c)
  }
}
q.rc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.l.w() + "-cell-selected";
    b ? bf(c, d) : cf(c, d)
  }
};
function ij(a) {
  var b = a.ha;
  if(b) {
    if(a.n && a.n.width) {
      if(b = Math.ceil(b.length / a.n.width), !x(a.n.height) || a.n.height < b) {
        a.n.height = b
      }
    }else {
      b = Math.ceil(Math.sqrt(b.length)), a.n = new S(b, b)
    }
  }else {
    a.n = new S(0, 0)
  }
}
;function mj(a, b, c) {
  this.Cc = a || [];
  hj.call(this, k, b || aj.Ma(), c);
  this.Cc = this.Cc;
  this.bd = k;
  this.kd(nj(this))
}
B(mj, hj);
mj.prototype.bd = k;
function oj(a) {
  var b = pj(qj);
  a.bd || (a.bd = Ya(a.Cc, function(a) {
    return pj(a)
  }));
  a.Ce(b ? Wa(a.bd, b) : -1)
}
function nj(a) {
  return Ya(a.Cc, function(a) {
    var c = this.Fa().i("div", {"class":this.l.w() + "-colorswatch", style:"background-color:" + a});
    c.title = "#" == a.charAt(0) ? "RGB (" + th(a).join(", ") + ")" : a;
    return c
  }, a)
}
function pj(a) {
  if(a) {
    try {
      return nh(a).Uc
    }catch(b) {
    }
  }
  return k
}
;var rj = Q("whiteboard.logger");
window.onerror = function(a, b, c) {
  Xd(rj, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function sj() {
  this.se = new Db
}
sj.prototype.mh = function(a, b) {
  rj.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  tj = k
};
sj.prototype.nh = function(a) {
  var a = Fb(a), b = a[0], c = a[1];
  1 == b ? (c = this.se.Nd(zb.dc(), c), a = ob(c, 1), b = ob(c, 2), c = c.ja(), ub.Fc(a, b, 5, 5, new ti(1, "black"), new si(c), i)) : 2 == b ? (ub.g(), uj()) : N(rj, "Strange message from server: " + G(a))
};
sj.prototype.reset = function(a) {
  rj.info("resetting with reason: " + a);
  this.G.reset(a)
};
var tj = k, ai = new rd(t.window);
function vj() {
  tj && (tj.reset("idle timeout fired"), tj = k)
}
var wj = k;
function xj() {
  wj != k && ai.N.clearTimeout(wj);
  tj && (wj = ai.N.setTimeout(vj, 2592E5))
}
M(window, ["click", "focus", "keydown", "keypress"], xj, j);
function yj() {
  var a = new Xh;
  tj = new sj;
  xj();
  ld($h(), function(b) {
    tj || e(Error("lastProto falsy?"));
    var b = new Xf(b, a, ai), c = tj;
    b.re = y(c.nh, c);
    b.onreset = y(c.mh, c);
    tj.G = b;
    cg(tj.G, ["subprotocol:whiteboard"]);
    b.start();
    return k
  })
}
function zj() {
  ub.g();
  uj();
  var a = tj;
  rj.info("Telling server to clear the board.");
  cg(a.G, [Gb([2, a.se.tc(new Ab)])])
}
function Aj(a) {
  var b = new Jc(a), a = b.offsetX, c = b.offsetY;
  ub.Fc(a, c, 5, 5, new ti(1, "black"), new si(vb), i);
  var d = tj, f = vb;
  rj.info("Telling server about circle at: " + a + ", " + c + " with color " + f);
  var b = d.G, g = new zb;
  pb(g, 1, a);
  pb(g, 2, c);
  pb(g, 3, f);
  a = d.se.tc(g);
  cg(b, [Gb([1, a])])
}
function uj() {
  var a;
  a = H && !J("9") ? new Ki(800, 600, i, i, i) : I && (!J("420") || mc) ? new Wi(800, 600, i, i, i) : new Bi(800, 600, i, i, i);
  a.i();
  wb = T("drawArea");
  Hg(a, wb);
  ub = a
}
var qj = "#E06666";
function Bj(a) {
  var b;
  (a = a.target.Vd()) ? (a = a.style[Ga("background-color")] || "", b = pj(a)) : b = k;
  b || (b = qj);
  vb = b;
  Vh.set("whiteboard_defaultColor", b);
  a = T("whiteboard-cp-value");
  v("background-color") ? qg(a, b, "background-color") : Qa("background-color", qa(qg, a));
  a = T("whiteboard-cp-value");
  a.title = b;
  b = nh(b).Uc;
  uf(a, b);
  b = th(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = rh(b[0], b[1], b[2]);
  v("color") ? qg(a, b, "color") : Qa("color", qa(qg, a))
}
function Cj() {
  xb = (new Fe(document.location)).Z;
  if(yb = Boolean(Number(xb.get("logging", "0")))) {
    ae().nd(Vd);
    var a = new hi(document.getElementById("log"));
    if(j != a.wf) {
      var b = ae(), c = a.ah;
      b.gc || (b.gc = []);
      b.gc.push(c);
      a.wf = j
    }
  }else {
    ae().nd(Nd)
  }
  rj.info("Logger works.");
  (a = Vh.get("whiteboard_defaultColor")) && (qj = a);
  vb = qj;
  b = T("whiteboard-controls-left");
  a = T("whiteboard-controls-right");
  c = mf("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  qf(b, c);
  c = mf("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  qf(b, c);
  b = new mj("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.ea(8);
  Hg(b, T("whiteboard-cp"));
  M(b, "action", Bj);
  oj(b);
  Bj({target:b});
  b = new lh("Clear board");
  ah(b, "clear-board-button");
  Hg(b, a);
  M(b, "action", zj);
  a = T("drawAreaOverlay");
  yg(a, j);
  M(a, "click", Aj, m);
  uj();
  yj()
}
var Dj = "__whiteboard_init".split("."), Ej = t;
!(Dj[0] in Ej) && Ej.execScript && Ej.execScript("var " + Dj[0]);
for(var Fj;Dj.length && (Fj = Dj.shift());) {
  !Dj.length && ga(Cj) ? Ej[Fj] = Cj : Ej = Ej[Fj] ? Ej[Fj] : Ej[Fj] = {}
}
;})();
