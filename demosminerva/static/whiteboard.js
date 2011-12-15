(function(){function f(a) {
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
  a.Na = function() {
    return a.Og || (a.Og = new a)
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
function ka(a) {
  return"number" == typeof a
}
function la(a) {
  return"function" == fa(a)
}
function ja(a) {
  a = fa(a);
  return"object" == a || "array" == a || "function" == a
}
function ma(a) {
  return a[na] || (a[na] = ++oa)
}
var na = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), oa = 0;
function pa(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function qa(a, b, c) {
  a || f(Error());
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
function x(a, b, c) {
  x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? pa : qa;
  return x.apply(k, arguments)
}
function ra(a, b) {
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
  a.f = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function B(a) {
  this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
z(B, Error);
B.prototype.name = "CustomError";
function sa(a) {
  var b = a.length - 1;
  return 0 <= b && a.indexOf("%", b) == b
}
function ta(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = ("" + arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
var ua = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function va(a) {
  a = "" + a;
  return!ua.test(a) ? encodeURIComponent(a) : a
}
function wa(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function xa(a) {
  if(!ya.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(za, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(Aa, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Ba, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Ca, "&quot;"));
  return a
}
var za = /&/g, Aa = /</g, Ba = />/g, Ca = /\"/g, ya = /[&<>\"]/;
function Da(a) {
  return wa(a.replace(/  /g, " &#160;"), i)
}
function Ea(a, b) {
  for(var c = 0, d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = ("" + b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(d.length, e.length), h = 0;0 == c && h < g;h++) {
    var l = d[h] || "", o = e[h] || "", r = RegExp("(\\d*)(\\D*)", "g"), A = RegExp("(\\d*)(\\D*)", "g");
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
var Fa = 2147483648 * Math.random() | 0, Ga = {};
function Ha(a) {
  return Ga[a] || (Ga[a] = ("" + a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
}
;function Ia(a, b) {
  b.unshift(a);
  B.call(this, ta.apply(k, b));
  b.shift()
}
z(Ia, B);
Ia.prototype.name = "AssertionError";
function Ja(a, b) {
  f(new Ia("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ka(a, b, c) {
  this.D = a;
  this.K = b;
  this.le = c.name;
  this.Db = !!c.Hi;
  this.cc = c.Sd;
  this.Hf = c.type;
  this.cf = m;
  switch(this.cc) {
    case La:
    ;
    case Ma:
    ;
    case Na:
    ;
    case Oa:
    ;
    case Pa:
      this.cf = j
  }
}
var La = 3, Ma = 4, Na = 6, Oa = 16, Pa = 18;
function Qa(a) {
  return 11 == a.cc || 10 == a.cc
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
;var D = Array.prototype, Wa = D.indexOf ? function(a, b, c) {
  return D.indexOf.call(a, b, c)
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
}, Xa = D.forEach ? function(a, b, c) {
  D.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
}, Ya = D.map ? function(a, b, c) {
  return D.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), g = v(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (e[h] = b.call(c, g[h], h, a))
  }
  return e
}, Za = D.some ? function(a, b, c) {
  return D.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && b.call(c, e[g], g, a)) {
      return j
    }
  }
  return m
}, $a = D.every ? function(a, b, c) {
  return D.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && !b.call(c, e[g], g, a)) {
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
  0 <= c && D.splice.call(a, c, 1)
}
function db(a) {
  return D.concat.apply(D, arguments)
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
    var d = arguments[c], e;
    if(u(d) || (e = ha(d)) && d.hasOwnProperty("callee")) {
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
function gb(a, b, c, d) {
  D.splice.apply(a, hb(arguments, 1))
}
function hb(a, b, c) {
  return 2 >= arguments.length ? D.slice.call(a, b) : D.slice.call(a, b, c)
}
function ib(a, b) {
  D.sort.call(a, b || jb)
}
function jb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function kb(a, b, c) {
  this.Ff = a;
  this.le = b.name || k;
  this.La = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.La[b.K] = b
  }
}
function lb(a) {
  a = Sa(a.La);
  ib(a, function(a, c) {
    return a.K - c.K
  });
  return a
}
;function mb() {
  this.t = {};
  this.zb = this.constructor.zb;
  var a = this.zb.La, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.La = b;
  this.Zb = this.he = k
}
function nb(a, b) {
  for(var c in a.t) {
    a.La[c] || b.call(a, Number(c), a.t[c])
  }
}
q = mb.prototype;
q.ec = n("zb");
q.get = function(a, b) {
  return ob(this, a.K, b)
};
q.set = function(a, b) {
  pb(this, a.K, b)
};
q.add = function(a, b) {
  var c = a.K;
  this.t[c] || (this.t[c] = []);
  this.t[c].push(b)
};
q.clear = function(a) {
  delete this.t[a.K]
};
q.m = function(a) {
  if(!a || this.constructor != a.constructor) {
    return m
  }
  for(var b = lb(this.ec()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(qb(this, d.K) != qb(a, d.K)) {
      return m
    }
    if(qb(this, d.K)) {
      var e = Qa(d), g = d.K, h = this.t[g], g = a.t[g];
      if(d.Db) {
        if(h.length != g.length) {
          return m
        }
        for(d = 0;d < h.length;d++) {
          if(!(e ? h[d].m(g[d]) : h[d] == g[d])) {
            return m
          }
        }
      }else {
        if(!(e ? h.m(g) : h == g)) {
          return m
        }
      }
    }
  }
  return j
};
q.Ve = function(a) {
  for(var b = lb(this.ec()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete this.t[d.K];
    if(qb(a, d.K)) {
      var e = Qa(d);
      if(d.Db) {
        var g;
        g = a;
        var h = d.K;
        rb(g, g.La[h]);
        g = g.t[h] || [];
        for(h = 0;h < g.length;h++) {
          this.add(d, e ? g[h].B() : g[h])
        }
      }else {
        g = a.get(d), this.set(d, e ? g.B() : g)
      }
    }
  }
};
q.B = function() {
  var a = new this.constructor;
  a.Ve(this);
  return a
};
function qb(a, b) {
  return b in a.t && ga(a.t[b]) && a.t[b] !== k
}
function rb(a, b) {
  if(a.he) {
    var c = b.K;
    if(!(c in a.Zb)) {
      var d = a.t, e;
      e = a.he;
      var g = a.t[c];
      if(g == k) {
        e = g
      }else {
        if(b.Db) {
          var h = [];
          u(g);
          for(var l = 0;l < g.length;l++) {
            h[l] = e.Mc(b, g[l])
          }
          e = h
        }else {
          e = e.Mc(b, g)
        }
      }
      d[c] = e;
      a.Zb[c] = j
    }
  }
}
function ob(a, b, c) {
  var d = a.La[b];
  rb(a, d);
  if(d.Db) {
    return c = c || 0, 0 <= c && sb(a, b), a.t[b][c]
  }
  u(a.t[b]);
  return b in a.t ? a.t[b] : k
}
function sb(a, b) {
  return a.La[b].Db ? (qb(a, b) && u(a.t[b]), qb(a, b) ? a.t[b].length : 0) : qb(a, b) ? 1 : 0
}
function pb(a, b, c) {
  a.t[b] = c;
  a.Zb && (a.Zb[b] = j)
}
function tb(a, b) {
  var c = [], d, e;
  for(e in b) {
    b.hasOwnProperty(e) && (0 == e ? d = b[0] : c.push(new Ka(a, e, b[e])))
  }
  a.zb = new kb(a, d, c);
  a.ec = function() {
    return a.zb
  }
}
;var ub, vb, wb, xb, yb;
function zb() {
  mb.apply(this)
}
z(zb, mb);
zb.prototype.ka = function() {
  return ob(this, 3)
};
function Ab() {
  mb.apply(this)
}
z(Ab, mb);
tb(zb, {"0":{name:"Point", Dg:"demosminerva.whiteboard_messages.Point"}, 1:{name:"x", Sd:5, type:Number}, 2:{name:"y", Sd:5, type:Number}, 3:{name:"color", Sd:9, type:String}});
tb(Ab, {"0":{name:"ClearBoard", Dg:"demosminerva.whiteboard_messages.ClearBoard"}});
function Bb() {
}
Bb.prototype.Nc = function(a, b) {
  return Qa(a) ? this.uc(b) : b
};
Bb.prototype.Md = function(a) {
  new a.Ff;
  f(Error("Unimplemented"))
};
Bb.prototype.Mc = function(a, b) {
  if(Qa(a)) {
    return this.Md(a.Hf.zb, b)
  }
  if(!a.cf) {
    return b
  }
  var c = a.Hf;
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
z(Cb, Bb);
Cb.prototype.Md = function(a, b) {
  var c = new a.Ff;
  c.he = this;
  c.t = b;
  c.Zb = {};
  return c
};
function Db() {
}
z(Db, Cb);
Db.prototype.uc = function(a) {
  for(var b = lb(a.ec()), c = [], d = 0;d < b.length;d++) {
    var e = b[d];
    if(qb(a, e.K)) {
      var g = e.K;
      if(e.Db) {
        c[g] = [];
        for(var h = 0;h < sb(a, e.K);h++) {
          c[g][h] = this.Nc(e, a.get(e, h))
        }
      }else {
        c[g] = this.Nc(e, a.get(e))
      }
    }
  }
  nb(a, function(a, b) {
    c[a] = b
  });
  return c
};
Db.prototype.Nc = function(a, b) {
  return 8 == a.cc ? b ? 1 : 0 : Bb.prototype.Nc.apply(this, arguments)
};
Db.prototype.Mc = function(a, b) {
  return 8 == a.cc ? 1 === b : Bb.prototype.Mc.apply(this, arguments)
};
function Eb(a) {
  return la(a) || "object" == typeof a && la(a.call) && la(a.apply)
}
;function Fb(a) {
  a = "" + a;
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  f(Error("Invalid JSON string: " + a))
}
function Gb(a) {
  return(new Hb(i)).uc(a)
}
function Hb(a) {
  this.gd = a
}
Hb.prototype.uc = function(a) {
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
        for(var e = "", g = 0;g < d;g++) {
          c.push(e), e = b[g], Ib(a, a.gd ? a.gd.call(b, "" + g, e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" != typeof e && (c.push(d), Jb(g, c), c.push(":"), Ib(a, a.gd ? a.gd.call(b, g, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      f(Error("Unknown type: " + typeof b))
  }
}
var Kb = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Lb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Jb(a, b) {
  b.push('"', a.replace(Lb, function(a) {
    if(a in Kb) {
      return Kb[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return Kb[a] = e + b.toString(16)
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
          if(Eb(a.kg)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if("array" == d) {
                d = a.length;
                b.push("[");
                for(var e = "", g = 0;g < d;g++) {
                  b.push(e), Mb(a[g], b, c), e = ", "
                }
                b.push("]")
              }else {
                if("object" == d) {
                  if(ia(a) && "function" == typeof a.valueOf) {
                    b.push("new Date(", "" + a.valueOf(), ")")
                  }else {
                    for(var d = Ta(a).concat(Ua), e = {}, h = g = 0;h < d.length;) {
                      var l = d[h++], o = ja(l) ? "o" + ma(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(e, o) || (e[o] = j, d[g++] = l)
                    }
                    d.length = g;
                    b.push("{");
                    e = "";
                    for(h = 0;h < d.length;h++) {
                      g = d[h], Object.prototype.hasOwnProperty.call(a, g) && (l = a[g], b.push(e), Jb(g, b), b.push(": "), Mb(l, b, c), e = ", ")
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
  Mb(a, b, c)
}
function F(a) {
  var b = [];
  E(a, b, i);
  return b.join("")
}
;function Nb(a) {
  if("function" == typeof a.ca) {
    a = a.ca()
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
  if("function" == typeof a.ea) {
    return a.ea()
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
  return Sa(a)
}
function Pb(a) {
  if("function" == typeof a.xa) {
    return a.xa()
  }
  if("function" != typeof a.ea) {
    if(ha(a) || v(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return Ta(a)
  }
}
function Qb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ha(a) || v(a)) {
      Xa(a, b, c)
    }else {
      for(var d = Pb(a), e = Ob(a), g = e.length, h = 0;h < g;h++) {
        b.call(c, e[h], d && d[h], a)
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
  for(var c = Pb(a), d = Ob(a), e = d.length, g = 0;g < e;g++) {
    if(!b.call(i, d[g], c && c[g], a)) {
      return m
    }
  }
  return j
}
;function Sb(a, b) {
  this.z = {};
  this.n = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && f(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.xd(a)
  }
}
q = Sb.prototype;
q.d = 0;
q.ca = n("d");
q.ea = function() {
  Tb(this);
  for(var a = [], b = 0;b < this.n.length;b++) {
    a.push(this.z[this.n[b]])
  }
  return a
};
q.xa = function() {
  Tb(this);
  return this.n.concat()
};
q.ha = function(a) {
  return Ub(this.z, a)
};
q.Fc = function(a) {
  for(var b = 0;b < this.n.length;b++) {
    var c = this.n[b];
    if(Ub(this.z, c) && this.z[c] == a) {
      return j
    }
  }
  return m
};
q.m = function(a, b) {
  if(this === a) {
    return j
  }
  if(this.d != a.ca()) {
    return m
  }
  var c = b || Vb;
  Tb(this);
  for(var d, e = 0;d = this.n[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function Vb(a, b) {
  return a === b
}
q.Pa = function() {
  return 0 == this.d
};
q.clear = function() {
  this.z = {};
  this.d = this.n.length = 0
};
q.remove = function(a) {
  return Ub(this.z, a) ? (delete this.z[a], this.d--, this.n.length > 2 * this.d && Tb(this), j) : m
};
function Tb(a) {
  if(a.d != a.n.length) {
    for(var b = 0, c = 0;b < a.n.length;) {
      var d = a.n[b];
      Ub(a.z, d) && (a.n[c++] = d);
      b++
    }
    a.n.length = c
  }
  if(a.d != a.n.length) {
    for(var e = {}, c = b = 0;b < a.n.length;) {
      d = a.n[b], Ub(e, d) || (a.n[c++] = d, e[d] = 1), b++
    }
    a.n.length = c
  }
}
q.get = function(a, b) {
  return Ub(this.z, a) ? this.z[a] : b
};
q.set = function(a, b) {
  Ub(this.z, a) || (this.d++, this.n.push(a));
  this.z[a] = b
};
q.xd = function(a) {
  var b;
  a instanceof Sb ? (b = a.xa(), a = a.ea()) : (b = Ta(a), a = Sa(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
q.B = function() {
  return new Sb(this)
};
function Wb(a) {
  Tb(a);
  for(var b = {}, c = 0;c < a.n.length;c++) {
    var d = a.n[c];
    b[d] = a.z[d]
  }
  return b
}
function Ub(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function Xb(a) {
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
  f(Error("cannot determine size of object type " + b))
}
;function Yb(a, b) {
  this.tb = a;
  this.ob = b
}
Yb.prototype.m = function(a) {
  return a instanceof Yb && this.tb == a.tb && this.ob.join(",") == a.ob
};
Yb.prototype.u = function(a, b) {
  a.push("new SACK(", "" + this.tb, ", ");
  E(this.ob, a, b);
  a.push(")")
};
function Zb() {
  this.C = new Sb
}
q = Zb.prototype;
q.cb = -1;
q.o = 0;
q.append = function(a) {
  var b = Xb(a);
  this.C.set(this.cb + 1, [a, b]);
  this.cb += 1;
  this.o += b
};
q.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
q.u = function(a) {
  a.push("<Queue with ", "" + this.C.ca(), " item(s), counter=#", "" + this.cb, ", size=", "" + this.o, ">")
};
function $b(a) {
  a = a.C.xa();
  ib(a);
  return a
}
q.jf = function(a) {
  for(var b = $b(this), c = [], d = 0;d < b.length;d++) {
    var e = b[d];
    (a == k || e >= a) && c.push([e, this.C.get(e)[0]])
  }
  return c
};
function ac() {
  this.ab = new Sb
}
ac.prototype.kb = -1;
ac.prototype.o = 0;
function bc(a) {
  var b = a.ab.xa();
  ib(b);
  return new Yb(a.kb, b)
}
var cc = {};
function dc() {
  return j
}
;var ec, fc, gc, hc, ic;
function jc() {
  return t.navigator ? t.navigator.userAgent : k
}
ic = hc = gc = fc = ec = m;
var kc;
if(kc = jc()) {
  var lc = t.navigator;
  ec = 0 == kc.indexOf("Opera");
  fc = !ec && -1 != kc.indexOf("MSIE");
  hc = (gc = !ec && -1 != kc.indexOf("WebKit")) && -1 != kc.indexOf("Mobile");
  ic = !ec && !gc && "Gecko" == lc.product
}
var mc = ec, G = fc, nc = ic, H = gc, oc = hc, pc = t.navigator, qc = -1 != (pc && pc.platform || "").indexOf("Mac"), rc;
a: {
  var sc = "", tc;
  if(mc && t.opera) {
    var uc = t.opera.version, sc = "function" == typeof uc ? uc() : uc
  }else {
    if(nc ? tc = /rv\:([^\);]+)(\)|;)/ : G ? tc = /MSIE\s+([^\);]+)(\)|;)/ : H && (tc = /WebKit\/(\S+)/), tc) {
      var vc = tc.exec(jc()), sc = vc ? vc[1] : ""
    }
  }
  if(G) {
    var wc, xc = t.document;
    wc = xc ? xc.documentMode : i;
    if(wc > parseFloat(sc)) {
      rc = "" + wc;
      break a
    }
  }
  rc = sc
}
var yc = {};
function I(a) {
  return yc[a] || (yc[a] = 0 <= Ea(rc, a))
}
var zc = {};
function Ac() {
  return zc[9] || (zc[9] = G && document.documentMode && 9 <= document.documentMode)
}
;function Bc() {
}
var Cc = 0;
q = Bc.prototype;
q.key = 0;
q.nb = m;
q.Cd = m;
q.ic = function(a, b, c, d, e, g) {
  la(a) ? this.xf = j : a && a.handleEvent && la(a.handleEvent) ? this.xf = m : f(Error("Invalid listener argument"));
  this.Hb = a;
  this.Qf = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Uc = g;
  this.Cd = m;
  this.key = ++Cc;
  this.nb = m
};
q.handleEvent = function(a) {
  return this.xf ? this.Hb.call(this.Uc || this.src, a) : this.Hb.handleEvent.call(this.Hb, a)
};
var Dc = !G || Ac(), Ec = !G || Ac(), Fc = G && !I("8");
!H || I("528");
nc && I("1.9b") || G && I("8") || mc && I("9.5") || H && I("528");
!nc || I("8");
var Gc = {Eh:"click", Jh:"dblclick", di:"mousedown", hi:"mouseup", gi:"mouseover", fi:"mouseout", ei:"mousemove", ri:"selectstart", Yh:"keypress", Xh:"keydown", Zh:"keyup", Ch:"blur", Rh:"focus", Kh:"deactivate", Sh:G ? "focusin" : "DOMFocusIn", Th:G ? "focusout" : "DOMFocusOut", Dh:"change", qi:"select", si:"submit", Wh:"input", mi:"propertychange", Oh:"dragstart", Lh:"dragenter", Nh:"dragover", Mh:"dragleave", Ph:"drop", wi:"touchstart", vi:"touchmove", ui:"touchend", ti:"touchcancel", Gh:"contextmenu", 
Qh:"error", Vh:"help", $h:"load", ai:"losecapture", ni:"readystatechange", oi:"resize", pi:"scroll", yi:"unload", Uh:"hashchange", ii:"pagehide", ji:"pageshow", li:"popstate", Hh:"copy", ki:"paste", Ih:"cut", zh:"beforecopy", Ah:"beforecut", Bh:"beforepaste", ci:"message", Fh:"connect", xi:H ? "webkitTransitionEnd" : mc ? "oTransitionEnd" : "transitionend"};
function J() {
}
J.prototype.va = m;
J.prototype.g = function() {
  this.va || (this.va = j, this.c())
};
J.prototype.c = function() {
  this.ug && Hc.apply(k, this.ug)
};
function Hc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? Hc.apply(k, d) : d && "function" == typeof d.g && d.g()
  }
}
;function Ic(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
z(Ic, J);
q = Ic.prototype;
q.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
q.mb = m;
q.qc = j;
q.stopPropagation = function() {
  this.mb = j
};
q.preventDefault = function() {
  this.qc = m
};
function Jc(a) {
  a.stopPropagation()
}
;function Kc(a) {
  Kc[" "](a);
  return a
}
Kc[" "] = da;
function Lc(a, b) {
  a && this.ic(a, b)
}
z(Lc, Ic);
var Mc = [1, 4, 2];
q = Lc.prototype;
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
q.se = m;
q.Ea = k;
q.ic = function(a, b) {
  var c = this.type = a.type;
  Ic.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(nc) {
      var e;
      a: {
        try {
          Kc(d.nodeName);
          e = j;
          break a
        }catch(g) {
        }
        e = m
      }
      e || (d = k)
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = H || a.offsetX !== i ? a.offsetX : a.layerX;
  this.offsetY = H || a.offsetY !== i ? a.offsetY : a.layerY;
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
  this.se = qc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Ea = a;
  delete this.qc;
  delete this.mb
};
function Nc(a) {
  return Dc ? 0 == a.Ea.button : "click" == a.type ? j : !!(a.Ea.button & Mc[0])
}
q.stopPropagation = function() {
  Lc.f.stopPropagation.call(this);
  this.Ea.stopPropagation ? this.Ea.stopPropagation() : this.Ea.cancelBubble = j
};
q.preventDefault = function() {
  Lc.f.preventDefault.call(this);
  var a = this.Ea;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, Fc) {
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
  Lc.f.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Ea = k
};
var Oc = {}, K = {}, Pc = {}, Qc = {};
function L(a, b, c, d, e) {
  if(b) {
    if(u(b)) {
      for(var g = 0;g < b.length;g++) {
        L(a, b[g], c, d, e)
      }
      return k
    }
    var d = !!d, h = K;
    b in h || (h[b] = {d:0, la:0});
    h = h[b];
    d in h || (h[d] = {d:0, la:0}, h.d++);
    var h = h[d], l = ma(a), o;
    h.la++;
    if(h[l]) {
      o = h[l];
      for(g = 0;g < o.length;g++) {
        if(h = o[g], h.Hb == c && h.Uc == e) {
          if(h.nb) {
            break
          }
          return o[g].key
        }
      }
    }else {
      o = h[l] = [], h.d++
    }
    g = Rc();
    g.src = a;
    h = new Bc;
    h.ic(c, g, a, b, d, e);
    c = h.key;
    g.key = c;
    o.push(h);
    Oc[c] = h;
    Pc[l] || (Pc[l] = []);
    Pc[l].push(h);
    a.addEventListener ? (a == t || !a.Jd) && a.addEventListener(b, g, d) : a.attachEvent(b in Qc ? Qc[b] : Qc[b] = "on" + b, g);
    return c
  }
  f(Error("Invalid event type"))
}
function Rc() {
  var a = Sc, b = Ec ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Tc(a, b, c, d, e) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      Tc(a, b[g], c, d, e)
    }
    return k
  }
  a = L(a, b, c, d, e);
  Oc[a].Cd = j;
  return a
}
function Uc(a, b, c, d, e) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      Uc(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = Vc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Hb == c && a[g].capture == d && a[g].Uc == e) {
          Wc(a[g].key);
          break
        }
      }
    }
  }
}
function Wc(a) {
  if(!Oc[a]) {
    return m
  }
  var b = Oc[a];
  if(b.nb) {
    return m
  }
  var c = b.src, d = b.type, e = b.Qf, g = b.capture;
  c.removeEventListener ? (c == t || !c.Jd) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in Qc ? Qc[d] : Qc[d] = "on" + d, e);
  c = ma(c);
  e = K[d][g][c];
  if(Pc[c]) {
    var h = Pc[c];
    cb(h, b);
    0 == h.length && delete Pc[c]
  }
  b.nb = j;
  e.Jf = j;
  Xc(d, g, c, e);
  delete Oc[a];
  return j
}
function Xc(a, b, c, d) {
  if(!d.ad && d.Jf) {
    for(var e = 0, g = 0;e < d.length;e++) {
      d[e].nb ? d[e].Qf.src = k : (e != g && (d[g] = d[e]), g++)
    }
    d.length = g;
    d.Jf = m;
    0 == g && (delete K[a][b][c], K[a][b].d--, 0 == K[a][b].d && (delete K[a][b], K[a].d--), 0 == K[a].d && delete K[a])
  }
}
function Yc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Ra(Pc, function(a) {
      for(var e = a.length - 1;0 <= e;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          Wc(g.key), c++
        }
      }
    })
  }else {
    if(a = ma(a), Pc[a]) {
      for(var a = Pc[a], e = a.length - 1;0 <= e;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          Wc(g.key), c++
        }
      }
    }
  }
}
function Vc(a, b, c) {
  var d = K;
  return b in d && (d = d[b], c in d && (d = d[c], a = ma(a), d[a])) ? d[a] : k
}
function Zc(a, b, c, d, e) {
  var g = 1, b = ma(b);
  if(a[b]) {
    a.la--;
    a = a[b];
    a.ad ? a.ad++ : a.ad = 1;
    try {
      for(var h = a.length, l = 0;l < h;l++) {
        var o = a[l];
        o && !o.nb && (g &= $c(o, e) !== m)
      }
    }finally {
      a.ad--, Xc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function $c(a, b) {
  var c = a.handleEvent(b);
  a.Cd && Wc(a.key);
  return c
}
function Sc(a, b) {
  if(!Oc[a]) {
    return j
  }
  var c = Oc[a], d = c.type, e = K;
  if(!(d in e)) {
    return j
  }
  var e = e[d], g, h;
  if(!Ec) {
    g = b || ca("window.event");
    var l = j in e, o = m in e;
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
    r = new Lc;
    r.ic(g, this);
    g = j;
    try {
      if(l) {
        for(var s = [], w = r.currentTarget;w;w = w.parentNode) {
          s.push(w)
        }
        h = e[j];
        h.la = h.d;
        for(var C = s.length - 1;!r.mb && 0 <= C && h.la;C--) {
          r.currentTarget = s[C], g &= Zc(h, s[C], d, j, r)
        }
        if(o) {
          h = e[m];
          h.la = h.d;
          for(C = 0;!r.mb && C < s.length && h.la;C++) {
            r.currentTarget = s[C], g &= Zc(h, s[C], d, m, r)
          }
        }
      }else {
        g = $c(c, r)
      }
    }finally {
      s && (s.length = 0), r.g()
    }
    return g
  }
  d = new Lc(b, this);
  try {
    g = $c(c, d)
  }finally {
    d.g()
  }
  return g
}
var ad = 0;
function bd() {
}
z(bd, J);
q = bd.prototype;
q.Jd = j;
q.dd = k;
q.ze = aa("dd");
q.addEventListener = function(a, b, c, d) {
  L(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Uc(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = K;
  if(b in c) {
    if(v(a)) {
      a = new Ic(a, this)
    }else {
      if(a instanceof Ic) {
        a.target = a.target || this
      }else {
        var d = a, a = new Ic(b, this);
        Va(a, d)
      }
    }
    var d = 1, e, c = c[b], b = j in c, g;
    if(b) {
      e = [];
      for(g = this;g;g = g.dd) {
        e.push(g)
      }
      g = c[j];
      g.la = g.d;
      for(var h = e.length - 1;!a.mb && 0 <= h && g.la;h--) {
        a.currentTarget = e[h], d &= Zc(g, e[h], a.type, j, a) && a.qc != m
      }
    }
    if(m in c) {
      if(g = c[m], g.la = g.d, b) {
        for(h = 0;!a.mb && h < e.length && g.la;h++) {
          a.currentTarget = e[h], d &= Zc(g, e[h], a.type, m, a) && a.qc != m
        }
      }else {
        for(e = this;!a.mb && e && g.la;e = e.dd) {
          a.currentTarget = e, d &= Zc(g, e, a.type, m, a) && a.qc != m
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
  bd.f.c.call(this);
  Yc(this);
  this.dd = k
};
function cd(a, b) {
  this.Xc = a || 1;
  this.xc = b || dd;
  this.Ad = x(this.nh, this);
  this.ge = y()
}
z(cd, bd);
cd.prototype.enabled = m;
var dd = t.window;
q = cd.prototype;
q.sa = k;
q.nh = function() {
  if(this.enabled) {
    var a = y() - this.ge;
    0 < a && a < 0.8 * this.Xc ? this.sa = this.xc.setTimeout(this.Ad, this.Xc - a) : (this.dispatchEvent(ed), this.enabled && (this.sa = this.xc.setTimeout(this.Ad, this.Xc), this.ge = y()))
  }
};
q.start = function() {
  this.enabled = j;
  this.sa || (this.sa = this.xc.setTimeout(this.Ad, this.Xc), this.ge = y())
};
q.stop = function() {
  this.enabled = m;
  this.sa && (this.xc.clearTimeout(this.sa), this.sa = k)
};
q.c = function() {
  cd.f.c.call(this);
  this.stop();
  delete this.xc
};
var ed = "tick";
ad++;
ad++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function gd(a, b) {
  this.Cc = [];
  this.Re = a;
  this.$e = b || k
}
q = gd.prototype;
q.Ma = m;
q.fc = m;
q.mc = 0;
q.Ee = m;
q.qg = m;
q.Bd = 0;
q.cancel = function(a) {
  if(this.Ma) {
    this.pc instanceof gd && this.pc.cancel()
  }else {
    if(this.D) {
      var b = this.D;
      delete this.D;
      a ? b.cancel(a) : (b.Bd--, 0 >= b.Bd && b.cancel())
    }
    this.Re ? this.Re.call(this.$e, this) : this.Ee = j;
    this.Ma || this.bc(new hd)
  }
};
q.Ue = function(a, b) {
  id(this, a, b);
  this.mc--;
  0 == this.mc && this.Ma && jd(this)
};
function id(a, b, c) {
  a.Ma = j;
  a.pc = c;
  a.fc = !b;
  jd(a)
}
function kd(a) {
  a.Ma && (a.Ee || f(new ld), a.Ee = m)
}
function md(a, b) {
  kd(a);
  id(a, j, b)
}
q.bc = function(a) {
  kd(this);
  id(this, m, a)
};
function nd(a, b) {
  od(a, b, k, i)
}
function od(a, b, c, d) {
  a.Cc.push([b, c, d]);
  a.Ma && jd(a)
}
function pd(a, b) {
  od(a, b, b, i)
}
function qd(a) {
  return Za(a.Cc, function(a) {
    return la(a[1])
  })
}
function jd(a) {
  a.Me && a.Ma && qd(a) && (t.clearTimeout(a.Me), delete a.Me);
  a.D && (a.D.Bd--, delete a.D);
  for(var b = a.pc, c = m, d = m;a.Cc.length && 0 == a.mc;) {
    var e = a.Cc.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.fc ? h : g) {
      try {
        var l = g.call(e || a.$e, b);
        ga(l) && (a.fc = a.fc && (l == b || l instanceof Error), a.pc = b = l);
        b instanceof gd && (d = j, a.mc++)
      }catch(o) {
        b = o, a.fc = j, qd(a) || (c = j)
      }
    }
  }
  a.pc = b;
  d && a.mc && (od(b, x(a.Ue, a, j), x(a.Ue, a, m)), b.qg = j);
  c && (a.Me = t.setTimeout(function() {
    ga(b.message) && b.stack && (b.message += "\n" + b.stack);
    f(b)
  }, 0))
}
function rd(a) {
  var b = new gd;
  md(b, a);
  return b
}
function sd(a) {
  var b = new gd;
  b.bc(a);
  return b
}
function ld() {
  B.call(this)
}
z(ld, B);
ld.prototype.message = "Already called";
function hd() {
  B.call(this)
}
z(hd, B);
hd.prototype.message = "Deferred was cancelled";
function td(a) {
  this.O = a;
  this.Hc = [];
  this.df = [];
  this.pg = x(this.rh, this)
}
td.prototype.sa = k;
function ud(a, b, c, d) {
  a.Hc.push([b, c, d]);
  a.sa == k && (a.sa = a.O.setTimeout(a.pg, 0))
}
td.prototype.rh = function() {
  this.sa = k;
  var a = this.Hc;
  this.Hc = [];
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
  if(0 == this.Hc.length) {
    a = this.df;
    this.df = [];
    for(b = 0;b < a.length;b++) {
      md(a[b], k)
    }
  }
};
var vd = new td(t.window);
function wd(a, b) {
  switch(fa(b)) {
    case "string":
      a.push("<string>", xa(b), "</string>");
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
        a.push('<property id="', d, '">'), wd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', xa(c), '">'), wd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function xd(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, e = arguments;
  d.push("<arguments>");
  for(var g = e.length, h = 1;h < g;h++) {
    wd(d, e[h])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;function yd() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ y()).toString(36)
}
function zd(a) {
  return a.substr(0, a.length - 1)
}
var Ad = /^(0|[1-9]\d*)$/, Bd = /^(0|\-?[1-9]\d*)$/;
function Cd(a) {
  var b = Dd;
  return Ad.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function Ed(a) {
  this.z = new Sb;
  a && this.xd(a)
}
function Fd(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ma(a) : b.substr(0, 1) + a
}
q = Ed.prototype;
q.ca = function() {
  return this.z.ca()
};
q.add = function(a) {
  this.z.set(Fd(a), a)
};
q.xd = function(a) {
  for(var a = Ob(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
q.te = function(a) {
  for(var a = Ob(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
q.remove = function(a) {
  return this.z.remove(Fd(a))
};
q.clear = function() {
  this.z.clear()
};
q.Pa = function() {
  return this.z.Pa()
};
q.contains = function(a) {
  return this.z.ha(Fd(a))
};
q.ea = function() {
  return this.z.ea()
};
q.B = function() {
  return new Ed(this)
};
q.m = function(a) {
  return this.ca() == Nb(a) && Gd(this, a)
};
function Gd(a, b) {
  var c = Nb(b);
  if(a.ca() > c) {
    return m
  }
  !(b instanceof Ed) && 5 < c && (b = new Ed(b));
  return Rb(a, function(a) {
    if("function" == typeof b.contains) {
      a = b.contains(a)
    }else {
      if("function" == typeof b.Fc) {
        a = b.Fc(a)
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
;function Hd(a) {
  return Id(a || arguments.callee.caller, [])
}
function Id(a, b) {
  var c = [];
  if(ab(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Jd(a) + "(");
      for(var d = a.arguments, e = 0;e < d.length;e++) {
        0 < e && c.push(", ");
        var g;
        g = d[e];
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
            g = (g = Jd(g)) ? g : "[fn]";
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
        c.push(Id(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Jd(a) {
  if(Kd[a]) {
    return Kd[a]
  }
  a = "" + a;
  if(!Kd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Kd[a] = b ? b[1] : "[Anonymous]"
  }
  return Kd[a]
}
var Kd = {};
function Ld(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Ld.prototype.Qd = k;
Ld.prototype.Pd = k;
var Md = 0;
Ld.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || Md++;
  this.bg = d || y();
  this.Gb = a;
  this.Gf = b;
  this.Rg = c;
  delete this.Qd;
  delete this.Pd
};
Ld.prototype.md = aa("Gb");
function Nd(a) {
  this.le = a
}
Nd.prototype.D = k;
Nd.prototype.Gb = k;
Nd.prototype.R = k;
Nd.prototype.hc = k;
function Od(a, b) {
  this.name = a;
  this.value = b
}
Od.prototype.toString = n("name");
var Pd = new Od("OFF", Infinity), Qd = new Od("SHOUT", 1200), Rd = new Od("SEVERE", 1E3), Sd = new Od("WARNING", 900), Td = new Od("INFO", 800), Ud = new Od("CONFIG", 700), Vd = new Od("FINE", 500), Wd = new Od("FINEST", 300), Xd = new Od("ALL", 0);
q = Nd.prototype;
q.getParent = n("D");
q.md = aa("Gb");
function Yd(a) {
  if(a.Gb) {
    return a.Gb
  }
  if(a.D) {
    return Yd(a.D)
  }
  Ja("Root logger has no level set.");
  return k
}
q.log = function(a, b, c) {
  if(a.value >= Yd(this).value) {
    a = this.Fg(a, b, c);
    b = "log:" + a.Gf;
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.hc) {
        for(var e = 0, g = i;g = c.hc[e];e++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
q.Fg = function(a, b, c) {
  var d = new Ld(a, "" + b, this.le);
  if(c) {
    d.Qd = c;
    var e;
    var g = arguments.callee.caller;
    try {
      var h;
      var l = ca("window.location.href");
      if(v(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var o, r, A = m;
        try {
          o = c.lineNumber || c.Fi || "Not available"
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
      e = "Message: " + xa(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + xa(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + xa(Hd(g) + "-> ")
    }catch(C) {
      e = "Exception trying to expose exception! You win, we lose. " + C
    }
    d.Pd = e
  }
  return d
};
function Zd(a, b) {
  a.log(Rd, b, i)
}
function M(a, b) {
  a.log(Sd, b, i)
}
q.info = function(a, b) {
  this.log(Td, a, b)
};
function N(a, b) {
  a.log(Vd, b, i)
}
function O(a, b) {
  a.log(Wd, b, i)
}
var $d = {}, ae = k;
function be() {
  ae || (ae = new Nd(""), $d[""] = ae, ae.md(Ud))
}
function ce() {
  be();
  return ae
}
function P(a) {
  be();
  var b;
  if(!(b = $d[a])) {
    b = new Nd(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = P(a.substr(0, c));
    c.R || (c.R = {});
    c.R[d] = b;
    b.D = c;
    $d[a] = b
  }
  return b
}
;function de(a, b) {
  this.U = "_" + yd();
  this.sd = a;
  this.Va = b;
  this.$a = a.$a
}
z(de, J);
q = de.prototype;
q.Ib = j;
q.Hd = m;
q.a = P("cw.net.FlashSocket");
q.u = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.U);
  a.push("'>")
};
function ee(a, b, c) {
  "frames" == b ? (a = a.Va, fe(a.N), ge(a.N, c)) : "stillreceiving" == b ? (c = a.Va, O(c.a, "onstillreceiving"), fe(c.N)) : "connect" == b ? (c = a.Va, c.a.info("onconnect"), fe(c.N), a = c.Ub, c.Ub = k, a.length && (O(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.pd.Ac(a))) : "close" == b ? (a.Ib = m, a.g()) : "ioerror" == b ? (a.Ib = m, b = a.Va, M(b.a, "onioerror: " + F(c)), he(b.N, m), a.g()) : "securityerror" == b ? (a.Ib = m, b = a.Va, M(b.a, "onsecurityerror: " + F(c)), 
  he(b.N, m), a.g()) : f(Error("bad event: " + b))
}
function ie(a) {
  a.Hd = j;
  a.Ib = m;
  a.g()
}
q.Fd = function(a, b) {
  try {
    var c = this.$a.CallFunction(xd("__FC_connect", this.U, a, b, "<int32/>\n"))
  }catch(d) {
    return Zd(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), ie(this)
  }
  '"OK"' != c && f(Error("__FC_connect failed? ret: " + c))
};
q.Ac = function(a) {
  try {
    var b = this.$a.CallFunction(xd("__FC_writeFrames", this.U, a))
  }catch(c) {
    return Zd(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), ie(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (M(this.a, "Flash no longer knows of " + this.U + "; disposing."), this.g()) : f(Error("__FC_writeFrames failed? ret: " + b)))
};
q.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.Ib);
  de.f.c.call(this);
  var a = this.$a;
  delete this.$a;
  if(this.Ib) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(xd("__FC_close", this.U)))
    }catch(b) {
      Zd(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Hd = j
    }
  }
  if(this.Hd) {
    a = this.Va, M(a.a, "oncrash"), he(a.N, j)
  }else {
    this.Va.onclose()
  }
  delete this.Va;
  delete this.sd.Bb[this.U]
};
function je(a, b) {
  this.M = a;
  this.$a = b;
  this.Bb = {};
  this.Dd = "__FST_" + yd();
  t[this.Dd] = x(this.xg, this);
  var c = b.CallFunction(xd("__FC_setCallbackFunc", this.Dd));
  '"OK"' != c && f(Error("__FC_setCallbackFunc failed? ret: " + c))
}
z(je, J);
q = je.prototype;
q.a = P("cw.net.FlashSocketTracker");
q.u = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  E(this.Bb, a, b);
  a.push(">")
};
q.Id = function(a) {
  a = new de(this, a);
  return this.Bb[a.U] = a
};
q.vg = function(a, b, c, d) {
  var e = this.Bb[a];
  e ? "frames" == b && d ? (ee(e, "ioerror", "FlashConnector hadError while handling data."), e.g()) : ee(e, b, c) : M(this.a, "Cannot dispatch because we have no instance: " + F([a, b, c, d]))
};
q.xg = function(a, b, c, d) {
  try {
    ud(this.M, this.vg, this, [a, b, c, d])
  }catch(e) {
    t.window.setTimeout(function() {
      f(e)
    }, 0)
  }
};
q.c = function() {
  je.f.c.call(this);
  for(var a = Sa(this.Bb);a.length;) {
    a.pop().g()
  }
  delete this.Bb;
  delete this.$a;
  t[this.Dd] = i
};
function ke(a) {
  this.N = a;
  this.Ub = []
}
z(ke, J);
q = ke.prototype;
q.a = P("cw.net.FlashSocketConduit");
q.Ac = function(a) {
  this.Ub ? (O(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Ub.push.apply(this.Ub, a)) : (O(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.pd.Ac(a))
};
q.Fd = function(a, b) {
  this.pd.Fd(a, b)
};
q.onclose = function() {
  this.a.info("onclose");
  he(this.N, m)
};
q.c = function() {
  this.a.info("in disposeInternal.");
  ke.f.c.call(this);
  this.pd.g();
  delete this.N
};
function le() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function me(a) {
  return a * Math.PI / 180
}
;var Dd = Math.pow(2, 53);
var ne = {kg:p("<cw.eq.Wildcard>")};
function oe(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function pe(a, b, c) {
  var d = fa(a), e = fa(b);
  if(a == ne || b == ne) {
    return j
  }
  if(a != k && "function" == typeof a.m) {
    return c && c.push("running custom equals function on left object"), a.m(b, c)
  }
  if(b != k && "function" == typeof b.m) {
    return c && c.push("running custom equals function on right object"), b.m(a, c)
  }
  if(oe(d) || oe(e)) {
    a = a === b
  }else {
    if(a instanceof RegExp && b instanceof RegExp) {
      a = a.toString() === b.toString()
    }else {
      if(ia(a) && ia(b)) {
        a = a.valueOf() === b.valueOf()
      }else {
        if("array" == d && "array" == e) {
          a: {
            if(c && c.push("descending into array"), a.length != b.length) {
              c && c.push("array length mismatch: " + a.length + ", " + b.length), a = m
            }else {
              d = 0;
              for(e = a.length;d < e;d++) {
                if(!pe(a[d], b[d], c)) {
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
          if(a.jg == dc && b.jg == dc) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!pe(a[g], b[g], c)) {
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
;function Q(a) {
  B.call(this, a)
}
z(Q, B);
Q.prototype.name = "cw.net.InvalidFrame";
function qe() {
  var a = [];
  this.pa(a);
  return a.join("")
}
function re() {
}
re.prototype.m = function(a, b) {
  return!(a instanceof re) ? m : pe(se(this), se(a), b)
};
re.prototype.u = function(a, b) {
  a.push("<HelloFrame properties=");
  E(se(this), a, b);
  a.push(">")
};
function se(a) {
  return[a.Pb, a.Pf, a.sf, a.Sf, a.wc, a.He, a.If, a.Ef, a.ke, a.Cf, a.fg, a.ag, a.ra, a.$c]
}
re.prototype.ja = qe;
re.prototype.pa = function(a) {
  var b = {};
  b.tnum = this.Pb;
  b.ver = this.Pf;
  b.format = this.sf;
  b["new"] = this.Sf;
  b.id = this.wc;
  b.ming = this.He;
  b.pad = this.If;
  b.maxb = this.Ef;
  ga(this.ke) && (b.maxt = this.ke);
  b.maxia = this.Cf;
  b.tcpack = this.fg;
  b.eeds = this.ag;
  b.sack = this.ra instanceof Yb ? zd((new te(this.ra)).ja()) : this.ra;
  b.seenack = this.$c instanceof Yb ? zd((new te(this.$c)).ja()) : this.$c;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push(Gb(b), "H")
};
function ue(a) {
  this.Ob = a
}
ue.prototype.m = function(a) {
  return a instanceof ue && this.Ob == a.Ob
};
ue.prototype.u = function(a, b) {
  a.push("new StringFrame(");
  E(this.Ob, a, b);
  a.push(")")
};
ue.prototype.ja = qe;
ue.prototype.pa = function(a) {
  a.push(this.Ob, " ")
};
function ve(a) {
  this.Ec = a
}
ve.prototype.m = function(a) {
  return a instanceof ve && this.Ec == a.Ec
};
ve.prototype.u = function(a, b) {
  a.push("new CommentFrame(");
  E(this.Ec, a, b);
  a.push(")")
};
ve.prototype.ja = qe;
ve.prototype.pa = function(a) {
  a.push(this.Ec, "^")
};
function we(a) {
  this.tc = a
}
we.prototype.m = function(a) {
  return a instanceof we && this.tc == a.tc
};
we.prototype.u = function(a) {
  a.push("new SeqNumFrame(", "" + this.tc, ")")
};
we.prototype.ja = qe;
we.prototype.pa = function(a) {
  a.push("" + this.tc, "N")
};
function xe(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = Dd;
    if(Bd.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var g = Cd(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Yb(a, c)
}
function te(a) {
  this.ra = a
}
te.prototype.m = function(a, b) {
  return a instanceof te && this.ra.m(a.ra, b)
};
te.prototype.u = function(a, b) {
  a.push("new SackFrame(");
  E(this.ra, a, b);
  a.push(")")
};
te.prototype.ja = qe;
te.prototype.pa = function(a) {
  var b = this.ra;
  a.push(b.ob.join(","), "|", "" + b.tb);
  a.push("A")
};
function ye(a) {
  this.kc = a
}
ye.prototype.m = function(a, b) {
  return a instanceof ye && this.kc.m(a.kc, b)
};
ye.prototype.u = function(a, b) {
  a.push("new StreamStatusFrame(");
  E(this.kc, a, b);
  a.push(")")
};
ye.prototype.ja = qe;
ye.prototype.pa = function(a) {
  var b = this.kc;
  a.push(b.ob.join(","), "|", "" + b.tb);
  a.push("T")
};
function ze() {
}
ze.prototype.u = function(a) {
  a.push("new StreamCreatedFrame()")
};
ze.prototype.m = function(a) {
  return a instanceof ze
};
ze.prototype.ja = qe;
ze.prototype.pa = function(a) {
  a.push("C")
};
function Ae() {
}
Ae.prototype.u = function(a) {
  a.push("new YouCloseItFrame()")
};
Ae.prototype.m = function(a) {
  return a instanceof Ae
};
Ae.prototype.ja = qe;
Ae.prototype.pa = function(a) {
  a.push("Y")
};
function Be(a, b) {
  this.nc = a;
  this.Tb = b
}
Be.prototype.m = function(a) {
  return a instanceof Be && this.nc == a.nc && this.Tb == a.Tb
};
Be.prototype.u = function(a, b) {
  a.push("new ResetFrame(");
  E(this.nc, a, b);
  a.push(", ", "" + this.Tb, ")")
};
Be.prototype.ja = qe;
Be.prototype.pa = function(a) {
  a.push(this.nc, "|", "" + Number(this.Tb), "!")
};
var Ce = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function De(a) {
  this.reason = a
}
De.prototype.m = function(a) {
  return a instanceof De && this.reason == a.reason
};
De.prototype.u = function(a, b) {
  a.push("new TransportKillFrame(");
  E(this.reason, a, b);
  a.push(")")
};
De.prototype.ja = qe;
De.prototype.pa = function(a) {
  a.push(this.reason, "K")
};
function Ee(a) {
  a || f(new Q("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new ue(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = xe(zd(a)), a == k && f(new Q("bad sack")), new te(a)
  }
  if("N" == b) {
    return a = Cd(zd(a)), a == k && f(new Q("bad seqNum")), new we(a)
  }
  if("T" == b) {
    return a = xe(zd(a)), a == k && f(new Q("bad lastSackSeen")), new ye(a)
  }
  if("Y" == b) {
    return 1 != a.length && f(new Q("leading garbage")), new Ae
  }
  if("^" == b) {
    return new ve(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && f(new Q("leading garbage")), new ze
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && f(new Q("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && f(new Q("bad applicationLevel")), new Be(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = Ce[a], a == k && f(new Q("unknown kill reason: " + a)), new De(a)
  }
  f(new Q("Invalid frame type " + b))
}
;var Fe = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Ge(a, b) {
  var c = a.match(Fe), d = b.match(Fe);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function He(a, b) {
  var c;
  a instanceof He ? (this.Lb(b == k ? a.za : b), Ie(this, a.Aa), Je(this, a.rb), Ke(this, a.oa), Le(this, a.Ta), this.pb(a.A), Me(this, a.$.B()), Ne(this, a.fb)) : a && (c = ("" + a).match(Fe)) ? (this.Lb(!!b), Ie(this, c[1] || "", j), Je(this, c[2] || "", j), Ke(this, c[3] || "", j), Le(this, c[4]), this.pb(c[5] || "", j), Me(this, c[6] || "", j), Ne(this, c[7] || "", j)) : (this.Lb(!!b), this.$ = new Oe(k, this, this.za))
}
q = He.prototype;
q.Aa = "";
q.rb = "";
q.oa = "";
q.Ta = k;
q.A = "";
q.fb = "";
q.Pg = m;
q.za = m;
q.toString = function() {
  if(this.ua) {
    return this.ua
  }
  var a = [];
  this.Aa && a.push(Pe(this.Aa, Qe), ":");
  this.oa && (a.push("//"), this.rb && a.push(Pe(this.rb, Qe), "@"), a.push(v(this.oa) ? encodeURIComponent(this.oa) : k), this.Ta != k && a.push(":", "" + this.Ta));
  this.A && (this.oa && "/" != this.A.charAt(0) && a.push("/"), a.push(Pe(this.A, "/" == this.A.charAt(0) ? Re : Se)));
  var b = "" + this.$;
  b && a.push("?", b);
  this.fb && a.push("#", Pe(this.fb, Te));
  return this.ua = a.join("")
};
q.B = function() {
  var a = this.Aa, b = this.rb, c = this.oa, d = this.Ta, e = this.A, g = this.$.B(), h = this.fb, l = new He(k, this.za);
  a && Ie(l, a);
  b && Je(l, b);
  c && Ke(l, c);
  d && Le(l, d);
  e && l.pb(e);
  g && Me(l, g);
  h && Ne(l, h);
  return l
};
function Ie(a, b, c) {
  Ue(a);
  delete a.ua;
  a.Aa = c ? b ? decodeURIComponent(b) : "" : b;
  a.Aa && (a.Aa = a.Aa.replace(/:$/, ""))
}
function Je(a, b, c) {
  Ue(a);
  delete a.ua;
  a.rb = c ? b ? decodeURIComponent(b) : "" : b
}
function Ke(a, b, c) {
  Ue(a);
  delete a.ua;
  a.oa = c ? b ? decodeURIComponent(b) : "" : b
}
function Le(a, b) {
  Ue(a);
  delete a.ua;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && f(Error("Bad port number " + b)), a.Ta = b) : a.Ta = k
}
q.pb = function(a, b) {
  Ue(this);
  delete this.ua;
  this.A = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function Me(a, b, c) {
  Ue(a);
  delete a.ua;
  b instanceof Oe ? (a.$ = b, a.$.Ne = a, a.$.Lb(a.za)) : (c || (b = Pe(b, Ve)), a.$ = new Oe(b, a, a.za))
}
function Ne(a, b, c) {
  Ue(a);
  delete a.ua;
  a.fb = c ? b ? decodeURIComponent(b) : "" : b
}
function Ue(a) {
  a.Pg && f(Error("Tried to modify a read-only Uri"))
}
q.Lb = function(a) {
  this.za = a;
  this.$ && this.$.Lb(a);
  return this
};
function We(a) {
  return a instanceof He ? a.B() : new He(a, i)
}
var Xe = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Pe(a, b) {
  var c = k;
  v(a) && (c = a, Xe.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, Ye)));
  return c
}
function Ye(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Qe = /[#\/\?@]/g, Se = /[\#\?:]/g, Re = /[\#\?]/g, Ve = /[\#\?@]/g, Te = /#/g;
function Oe(a, b, c) {
  this.Da = a || k;
  this.Ne = b || k;
  this.za = !!c
}
function Ze(a) {
  if(!a.p && (a.p = new Sb, a.d = 0, a.Da)) {
    for(var b = a.Da.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, g = k;
      0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = $e(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
q = Oe.prototype;
q.p = k;
q.d = k;
q.ca = function() {
  Ze(this);
  return this.d
};
q.add = function(a, b) {
  Ze(this);
  af(this);
  a = $e(this, a);
  if(this.ha(a)) {
    var c = this.p.get(a);
    u(c) ? c.push(b) : this.p.set(a, [c, b])
  }else {
    this.p.set(a, b)
  }
  this.d++;
  return this
};
q.remove = function(a) {
  Ze(this);
  a = $e(this, a);
  if(this.p.ha(a)) {
    af(this);
    var b = this.p.get(a);
    u(b) ? this.d -= b.length : this.d--;
    return this.p.remove(a)
  }
  return m
};
q.clear = function() {
  af(this);
  this.p && this.p.clear();
  this.d = 0
};
q.Pa = function() {
  Ze(this);
  return 0 == this.d
};
q.ha = function(a) {
  Ze(this);
  a = $e(this, a);
  return this.p.ha(a)
};
q.Fc = function(a) {
  var b = this.ea();
  return ab(b, a)
};
q.xa = function() {
  Ze(this);
  for(var a = this.p.ea(), b = this.p.xa(), c = [], d = 0;d < b.length;d++) {
    var e = a[d];
    if(u(e)) {
      for(var g = 0;g < e.length;g++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
q.ea = function(a) {
  Ze(this);
  if(a) {
    if(a = $e(this, a), this.ha(a)) {
      var b = this.p.get(a);
      if(u(b)) {
        return b
      }
      a = [];
      a.push(b)
    }else {
      a = []
    }
  }else {
    for(var b = this.p.ea(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      u(d) ? fb(a, d) : a.push(d)
    }
  }
  return a
};
q.set = function(a, b) {
  Ze(this);
  af(this);
  a = $e(this, a);
  if(this.ha(a)) {
    var c = this.p.get(a);
    u(c) ? this.d -= c.length : this.d--
  }
  this.p.set(a, b);
  this.d++;
  return this
};
q.get = function(a, b) {
  Ze(this);
  a = $e(this, a);
  if(this.ha(a)) {
    var c = this.p.get(a);
    return u(c) ? c[0] : c
  }
  return b
};
q.toString = function() {
  if(this.Da) {
    return this.Da
  }
  if(!this.p) {
    return""
  }
  for(var a = [], b = 0, c = this.p.xa(), d = 0;d < c.length;d++) {
    var e = c[d], g = va(e), e = this.p.get(e);
    if(u(e)) {
      for(var h = 0;h < e.length;h++) {
        0 < b && a.push("&"), a.push(g), "" !== e[h] && a.push("=", va(e[h])), b++
      }
    }else {
      0 < b && a.push("&"), a.push(g), "" !== e && a.push("=", va(e)), b++
    }
  }
  return this.Da = a.join("")
};
function af(a) {
  delete a.yb;
  delete a.Da;
  a.Ne && delete a.Ne.ua
}
q.B = function() {
  var a = new Oe;
  this.yb && (a.yb = this.yb);
  this.Da && (a.Da = this.Da);
  this.p && (a.p = this.p.B());
  return a
};
function $e(a, b) {
  var c = "" + b;
  a.za && (c = c.toLowerCase());
  return c
}
q.Lb = function(a) {
  a && !this.za && (Ze(this), af(this), Qb(this.p, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.za = a
};
q.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Qb(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
var bf;
function cf(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function df(a, b) {
  var c = cf(a), d = hb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    ab(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function ef(a, b) {
  var c = cf(a), d = hb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < e.length;h++) {
    ab(d, e[h]) && (gb(e, h--, 1), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
;function R(a, b) {
  this.width = a;
  this.height = b
}
q = R.prototype;
q.B = function() {
  return new R(this.width, this.height)
};
q.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
q.Pa = function() {
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
var ff = !G || Ac();
!nc && !G || G && Ac() || nc && I("1.9.1");
var gf = G && !I("9");
function hf(a) {
  return a ? new jf(kf(a)) : bf || (bf = new jf)
}
function S(a) {
  return v(a) ? document.getElementById(a) : a
}
function lf(a, b, c, d) {
  a = d || a;
  b = b && "*" != b ? b.toUpperCase() : "";
  if(a.querySelectorAll && a.querySelector && (!H || "CSS1Compat" == document.compatMode || I("528")) && (b || c)) {
    return a.querySelectorAll(b + (c ? "." + c : ""))
  }
  if(c && a.getElementsByClassName) {
    a = a.getElementsByClassName(c);
    if(b) {
      for(var d = {}, e = 0, g = 0, h;h = a[g];g++) {
        b == h.nodeName && (d[e++] = h)
      }
      d.length = e;
      return d
    }
    return a
  }
  a = a.getElementsByTagName(b || "*");
  if(c) {
    d = {};
    for(g = e = 0;h = a[g];g++) {
      b = h.className, "function" == typeof b.split && ab(b.split(/\s+/), c) && (d[e++] = h)
    }
    d.length = e;
    return d
  }
  return a
}
function mf(a, b) {
  Ra(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in nf ? a.setAttribute(nf[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var nf = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function of(a, b, c) {
  return pf(document, arguments)
}
function pf(a, b) {
  var c = b[0], d = b[1];
  if(!ff && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', xa(d.name), '"');
    if(d.type) {
      c.push(' type="', xa(d.type), '"');
      var e = {};
      Va(e, d);
      d = e;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  d && (v(d) ? c.className = d : u(d) ? df.apply(k, [c].concat(d)) : mf(c, d));
  2 < b.length && qf(a, c, b, 2);
  return c
}
function qf(a, b, c, d) {
  function e(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && 0 < g.nodeType) ? Xa(rf(g) ? eb(g) : g, e) : e(g)
  }
}
function sf(a, b) {
  qf(kf(a), a, arguments, 1)
}
function tf(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function uf(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function vf(a, b) {
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
function kf(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function wf(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      tf(a), a.appendChild(kf(a).createTextNode(b))
    }
  }
}
var xf = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, yf = {IMG:" ", BR:"\n"};
function zf(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ka(a) && 0 <= a && 32768 > a) : m
}
function Af(a) {
  var b = [];
  Bf(a, b, m);
  return b.join("")
}
function Bf(a, b, c) {
  if(!(a.nodeName in xf)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in yf) {
        b.push(yf[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Bf(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function rf(a) {
  if(a && "number" == typeof a.length) {
    if(ja(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(la(a)) {
      return"function" == typeof a.item
    }
  }
  return m
}
function jf(a) {
  this.q = a || t.document || document
}
q = jf.prototype;
q.Ga = hf;
q.b = function(a) {
  return v(a) ? this.q.getElementById(a) : a
};
q.i = function(a, b, c) {
  return pf(this.q, arguments)
};
q.createElement = function(a) {
  return this.q.createElement(a)
};
q.createTextNode = function(a) {
  return this.q.createTextNode(a)
};
q.Xe = function(a, b, c) {
  for(var d = this.q, e = !!c, c = ["<tr>"], g = 0;g < b;g++) {
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
q.appendChild = function(a, b) {
  a.appendChild(b)
};
q.append = sf;
q.contains = vf;
function Cf(a, b, c, d) {
  this.contentWindow = a;
  this.Ic = b;
  this.Ie = c;
  this.Cg = d
}
Cf.prototype.u = function(a, b) {
  a.push("<XDRFrame frameId=");
  E(this.Cg, a, b);
  a.push(", expandedUrl=");
  E(this.Ic, a, b);
  a.push(", streams=");
  E(this.Ie, a, b);
  a.push(">")
};
function Df() {
  this.frames = [];
  this.ie = new Sb
}
Df.prototype.a = P("cw.net.XDRTracker");
function Ef(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor(le()) + ("" + Math.floor(le()))
  })
}
function Ff(a, b) {
  for(var c = Gf, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = 0 == e.Ie.length) {
      g = e.Ic;
      var h = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + F(b) + " existing frame " + F(e)), rd(e)
    }
  }
  d = yd() + yd();
  e = Ef(a);
  g = t.location;
  g instanceof He || (g = We(g));
  e instanceof He || (e = We(e));
  var l = g;
  g = l.B();
  (h = !!e.Aa) ? Ie(g, e.Aa) : h = !!e.rb;
  h ? Je(g, e.rb) : h = !!e.oa;
  h ? Ke(g, e.oa) : h = e.Ta != k;
  var o = e.A;
  if(h) {
    Le(g, e.Ta)
  }else {
    if(h = !!e.A) {
      if("/" != o.charAt(0) && (l.oa && !l.A ? o = "/" + o : (l = g.A.lastIndexOf("/"), -1 != l && (o = g.A.substr(0, l + 1) + o))), ".." == o || "." == o) {
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
  h ? g.pb(o) : h = "" !== e.$.toString();
  h ? (l = e.$, l.yb || (l.yb = l.toString() ? decodeURIComponent(l.toString()) : ""), Me(g, l.yb, i)) : h = !!e.fb;
  h && Ne(g, e.fb);
  e = g.toString();
  g = ("" + t.location).match(Fe)[3] || k;
  h = e.match(Fe)[3] || k;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + F(b)), c = rd(new Cf(t, e, [b], k))) : (g = S("minerva-elements"), h = new gd, c.ie.set(d, [h, e, b]), c.a.info("Creating new XDRFrame " + F(d) + "for " + F(b)), c = of("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + d}), g.appendChild(c), c = h);
  return c
}
Df.prototype.xh = function(a) {
  var b = this.ie.get(a);
  b || f(Error("Unknown frameId " + F(a)));
  this.ie.remove(b);
  var c = b[0], a = new Cf(S("minerva-xdrframe-" + a).contentWindow || (S("minerva-xdrframe-" + a).contentDocument || S("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (S("minerva-xdrframe-" + a).contentDocument || S("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  md(c, a)
};
var Gf = new Df;
t.__XHRTracker_xdrFrameLoaded = x(Gf.xh, Gf);
var Hf;
Hf = m;
var If = jc();
If && (-1 != If.indexOf("Firefox") || -1 != If.indexOf("Camino") || -1 != If.indexOf("iPhone") || -1 != If.indexOf("iPod") || -1 != If.indexOf("iPad") || -1 != If.indexOf("Android") || -1 != If.indexOf("Chrome") && (Hf = j));
var Jf = Hf;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function Kf(a, b, c, d, e, g) {
  gd.call(this, e, g);
  this.Bf = a;
  this.Kd = [];
  this.ef = !!b;
  this.Ag = !!c;
  this.rg = !!d;
  for(b = 0;b < a.length;b++) {
    od(a[b], x(this.nf, this, b, j), x(this.nf, this, b, m))
  }
  0 == a.length && !this.ef && md(this, this.Kd)
}
z(Kf, gd);
Kf.prototype.Kf = 0;
Kf.prototype.nf = function(a, b, c) {
  this.Kf++;
  this.Kd[a] = [b, c];
  this.Ma || (this.ef && b ? md(this, [a, c]) : this.Ag && !b ? this.bc(c) : this.Kf == this.Bf.length && md(this, this.Kd));
  this.rg && !b && (c = k);
  return c
};
Kf.prototype.bc = function(a) {
  Kf.f.bc.call(this, a);
  Xa(this.Bf, function(a) {
    a.cancel()
  })
};
function Lf(a) {
  a = new Kf(a, m, j);
  nd(a, function(a) {
    return Ya(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function Mf(a, b) {
  this.vh = a;
  this.Df = b
}
Mf.prototype.ee = 0;
Mf.prototype.cd = 0;
Mf.prototype.Rd = m;
function Nf(a) {
  var b = [];
  if(a.Rd) {
    return[b, 2]
  }
  var c = a.ee, d = a.vh.responseText;
  for(a.ee = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var e = d.substr(a.cd, c - a.cd), e = e.replace(/\r$/, "");
    if(e.length > a.Df) {
      return a.Rd = j, [b, 2]
    }
    b.push(e);
    a.cd = c += 1
  }
  return a.ee - a.cd - 1 > a.Df ? (a.Rd = j, [b, 2]) : [b, 1]
}
;function Of(a, b, c) {
  this.N = b;
  this.qa = a;
  this.Gd = c
}
z(Of, J);
q = Of.prototype;
q.a = P("cw.net.XHRMaster");
q.Xa = -1;
q.je = function(a, b, c) {
  this.Gd.__XHRSlave_makeRequest(this.qa, a, b, c)
};
q.Oa = n("Xa");
q.ne = function(a, b) {
  1 != b && Zd(this.a, F(this.qa) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  fe(this.N);
  ge(this.N, a)
};
q.oe = function(a) {
  N(this.a, "ongotheaders_: " + F(a));
  var b = k;
  "Content-Length" in a && (b = Cd(a["Content-Length"]));
  a = this.N;
  N(a.a, a.v() + " got Content-Length: " + b);
  a.Ba == Pf && (b == k && (M(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Qf(a, 2E3 + 1E3 * (b / 3072)))
};
q.pe = function(a) {
  1 != a && N(this.a, this.N.v() + "'s XHR's readyState is " + a);
  this.Xa = a;
  2 <= this.Xa && fe(this.N)
};
q.me = function() {
  this.N.g()
};
q.c = function() {
  Of.f.c.call(this);
  delete Rf.Ha[this.qa];
  this.Gd.__XHRSlave_dispose(this.qa);
  delete this.Gd
};
function Sf() {
  this.Ha = {}
}
z(Sf, J);
q = Sf.prototype;
q.a = P("cw.net.XHRMasterTracker");
q.Id = function(a, b) {
  var c = "_" + yd(), d = new Of(c, a, b);
  return this.Ha[c] = d
};
q.ne = function(a, b, c) {
  var b = db(b), d = this.Ha[a];
  d ? d.ne(b, c) : Zd(this.a, "onframes_: no master for " + F(a))
};
q.oe = function(a, b) {
  var c = this.Ha[a];
  c ? c.oe(b) : Zd(this.a, "ongotheaders_: no master for " + F(a))
};
q.pe = function(a, b) {
  var c = this.Ha[a];
  c ? c.pe(b) : Zd(this.a, "onreadystatechange_: no master for " + F(a))
};
q.me = function(a) {
  var b = this.Ha[a];
  b ? (delete this.Ha[b.qa], b.me()) : Zd(this.a, "oncomplete_: no master for " + F(a))
};
q.c = function() {
  Sf.f.c.call(this);
  for(var a = Sa(this.Ha);a.length;) {
    a.pop().g()
  }
  delete this.Ha
};
var Rf = new Sf;
t.__XHRMaster_onframes = x(Rf.ne, Rf);
t.__XHRMaster_oncomplete = x(Rf.me, Rf);
t.__XHRMaster_ongotheaders = x(Rf.oe, Rf);
t.__XHRMaster_onreadystatechange = x(Rf.pe, Rf);
function Tf(a, b, c) {
  this.host = a;
  this.port = b;
  this.qh = c
}
function Uf(a, b) {
  b || (b = a);
  this.Ua = a;
  this.Ya = b
}
Uf.prototype.u = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  E(this.Ua, a, b);
  a.push(", secondaryUrl=");
  E(this.Ya, a, b);
  a.push(">")
};
function Vf(a, b, c, d) {
  this.Ua = a;
  this.Of = b;
  this.Ya = c;
  this.Yf = d;
  (!(0 == this.Ua.indexOf("http://") || 0 == this.Ua.indexOf("https://")) || !(0 == this.Ya.indexOf("http://") || 0 == this.Ya.indexOf("https://"))) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Of.location.href;
  Ge(this.Ua, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Yf.location.href;
  Ge(this.Ya, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
Vf.prototype.u = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  E(this.Ua, a, b);
  a.push(", secondaryUrl=");
  E(this.Ya, a, b);
  a.push(">")
};
var Wf = new ve(";)]}");
function Xf() {
}
Xf.prototype.hf = p(1);
function Yf(a) {
  this.jh = a
}
Yf.prototype.u = function(a, b) {
  a.push("<UserContext for ");
  E(this.jh, a, b);
  a.push(">")
};
function Zf(a, b, c) {
  this.S = a;
  this.kh = b ? b : new Xf;
  this.M = c ? c : vd;
  this.yc = new Ed;
  this.wc = yd() + yd();
  this.Wa = new Zb;
  this.be = new ac;
  this.zc = k;
  this.ud = [];
  this.Qb = new Yf(this);
  H && (this.zc = Tc(t, "load", this.dh, m, this))
}
z(Zf, J);
q = Zf.prototype;
q.a = P("cw.net.ClientStream");
q.zf = new Yb(-1, []);
q.Af = new Yb(-1, []);
q.Ug = 50;
q.Tg = 1048576;
q.qe = k;
q.onreset = k;
q.Mf = k;
q.Fe = m;
q.ue = m;
q.h = 1;
q.Ke = -1;
q.j = k;
q.F = k;
q.oc = k;
q.Ge = 0;
q.Nf = 0;
q.Xf = 0;
q.u = function(a, b) {
  a.push("<ClientStream id=");
  E(this.wc, a, b);
  a.push(", state=", "" + this.h);
  a.push(", primary=");
  E(this.j, a, b);
  a.push(", secondary=");
  E(this.F, a, b);
  a.push(", resetting=");
  E(this.oc, a, b);
  a.push(">")
};
function $f(a) {
  var b = [-1];
  a.j && b.push(a.j.Jb);
  a.F && b.push(a.F.Jb);
  return Math.max.apply(Math.max, b)
}
function ag(a) {
  if(1 != a.h) {
    var b = 0 != a.Wa.C.ca(), c = bc(a.be), d = !c.m(a.Af) && !(a.j && c.m(a.j.Fb) || a.F && c.m(a.F.Fb)), e = $f(a);
    if((b = b && e < a.Wa.cb) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.j.Vb ? (O(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.j, c != d.Fb && (!d.Ia && !d.I.length && bg(d), d.I.push(new te(c)), d.Fb = c)), b && cg(a.j, a.Wa, e + 1), a.j.Fa()) : a.F == k ? a.Fe ? (O(a.a, "tryToSend_: creating secondary to send " + g), a.F = dg(a, m), b && cg(a.F, a.Wa, e + 1), a.F.Fa()) : (O(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.ue = j) : O(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
q.dh = function() {
  this.zc = k;
  if(this.j && this.j.Cb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.j;
    a.wd = j;
    a.g()
  }
  this.F && this.F.Cb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.F, a.wd = j, a.g())
};
function eg(a, b) {
  var c;
  ga(c) || (c = j);
  3 < a.h && f(Error("sendStrings: Can't send strings in state " + a.h));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || f(Error("sendStrings: string #" + c + " has illegal chars: " + F(d)))
      }
    }
    a.Wa.extend(b);
    ag(a)
  }
}
function dg(a, b) {
  var c;
  a.S instanceof Vf ? c = 1 == a.kh.hf() ? Pf : fg : a.S instanceof Tf ? c = gg : f(Error("Don't support endpoint " + F(a.S)));
  a.Ke += 1;
  c = new hg(a.M, a, a.Ke, c, a.S, b);
  O(a.a, "Created: " + c.v());
  a.yc.add(c);
  return c
}
function ig(a, b, c) {
  var d = new jg(a.M, a, b, c);
  O(a.a, "Created: " + d.v() + ", delay=" + b + ", times=" + c);
  a.yc.add(d);
  return d
}
function kg(a, b) {
  a.yc.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  N(a.a, "Offline: " + b.v());
  a.Ge = b.Sa ? a.Ge + b.Sa : 0;
  1 <= a.Ge && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.Qb, "stream penalty reached limit", m), a.g());
  if(3 < a.h) {
    4 == a.h && b.ig ? (N(a.a, "Disposing because resettingTransport_ is done."), a.g()) : N(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    var c;
    var d;
    c = b instanceof jg;
    if(!c && b.wd) {
      var e = H ? Jf ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      O(a.a, "getDelayForNextTransport_: " + F({delay:c, times:d}))
    }else {
      if(d = b.Te(), b == a.j ? d ? e = ++a.Nf : c || (e = a.Nf = 0) : d ? e = ++a.Xf : c || (e = a.Xf = 0), c || !e) {
        d = c = 0, O(a.a, "getDelayForNextTransport_: " + F({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(4E3 * Math.random()) - 2E3, l = Math.max(0, b.eg - b.Le);
        d = (c = Math.max(0, g + h - l)) ? 1 : 0;
        O(a.a, "getDelayForNextTransport_: " + F({count:e, base:g, variance:h, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    b == a.j ? (a.j = k, c ? a.j = ig(a, e, c) : (e = $f(a), a.j = dg(a, j), cg(a.j, a.Wa, e + 1)), a.j.Fa()) : b == a.F && (a.F = k, c ? (a.F = ig(a, e, c), a.F.Fa()) : ag(a))
  }
}
q.reset = function(a) {
  3 < this.h && f(Error("reset: Can't send reset in state " + this.h));
  this.h = 4;
  this.j && this.j.Vb ? (this.a.info("reset: Sending ResetFrame over existing primary."), lg(this.j, a), this.j.Fa()) : (this.j && (N(this.a, "reset: Disposing primary before sending ResetFrame."), this.j.g()), this.F && (N(this.a, "reset: Disposing secondary before sending ResetFrame."), this.F.g()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.oc = dg(this, m), lg(this.oc, a), this.oc.Fa());
  this.onreset && this.onreset.call(this.Qb, a, j)
};
function mg(a, b, c, d) {
  var e;
  e = a.be;
  for(var g = a.Ug, h = a.Tg, l = [], o = m, r = 0, A = c.length;r < A;r++) {
    var s = c[r], w = s[0], s = s[1];
    if(w == e.kb + 1) {
      e.kb += 1;
      for(l.push(s);;) {
        w = e.kb + 1;
        s = e.ab.get(w, cc);
        if(s === cc) {
          break
        }
        l.push(s[0]);
        e.ab.remove(w);
        e.o -= s[1];
        e.kb = w
      }
    }else {
      if(!(w <= e.kb)) {
        if(g != k && e.ab.ca() >= g) {
          o = j;
          break
        }
        var C = Xb(s);
        if(h != k && e.o + C > h) {
          o = j;
          break
        }
        e.ab.set(w, [s, C]);
        e.o += C
      }
    }
  }
  e.ab.Pa() && e.ab.clear();
  e = [l, o];
  c = e[0];
  e = e[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(h = c[g], a.qe && a.qe.call(a.Qb, h), 4 == a.h || a.va) {
        return
      }
    }
  }
  d || ag(a);
  if(!(4 == a.h || a.va) && e) {
    Zd(b.a, b.v() + "'s peer caused rwin overflow."), b.g()
  }
}
q.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.h && f(Error("ClientStream.start: " + F(this) + " already started"));
  this.h = 2;
  if(this.S instanceof Uf) {
    var a = Ff(this.S.Ua, this), b = Ff(this.S.Ya, this);
    nd(Lf([a, b]), x(this.zg, this))
  }else {
    ng(this)
  }
};
q.zg = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Ic, e = a[1].Ic;
  this.ud.push(a[0]);
  this.ud.push(a[1]);
  this.S = new Vf(d, b, e, c);
  ng(this)
};
function ng(a) {
  a.h = 3;
  a.j = dg(a, j);
  cg(a.j, a.Wa, k);
  a.j.Fa()
}
q.c = function() {
  this.a.info(F(this) + " in disposeInternal.");
  this.h = 5;
  for(var a = this.yc.ea(), b = 0;b < a.length;b++) {
    a[b].g()
  }
  for(a = 0;a < this.ud.length;a++) {
    cb(this.ud[a].Ie, this)
  }
  H && this.zc && (Wc(this.zc), this.zc = k);
  this.Mf && this.Mf.call(this.Qb);
  delete this.yc;
  delete this.j;
  delete this.F;
  delete this.oc;
  delete this.Qb;
  Zf.f.c.call(this)
};
var Pf = 1, fg = 2, gg = 3;
function hg(a, b, c, d, e, g) {
  this.M = a;
  this.H = b;
  this.Pb = c;
  this.Ba = d;
  this.S = e;
  this.I = [];
  this.vb = g;
  this.Vb = !this.Cb();
  this.Kb = this.Ba != Pf;
  this.og = x(this.oh, this)
}
z(hg, J);
q = hg.prototype;
q.a = P("cw.net.ClientTransport");
q.s = k;
q.Le = k;
q.eg = k;
q.fd = k;
q.Ia = m;
q.qd = m;
q.Fb = k;
q.Kc = 0;
q.Jb = -1;
q.ed = -1;
q.ig = m;
q.wd = m;
q.Sa = 0;
q.gc = m;
q.u = function(a) {
  a.push("<ClientTransport #", "" + this.Pb, ", becomePrimary=", "" + this.vb, ">")
};
q.v = function() {
  return(this.vb ? "Prim. T#" : "Sec. T#") + this.Pb
};
q.Te = function() {
  return!(!this.gc && this.Kc)
};
q.Cb = function() {
  return this.Ba == Pf || this.Ba == fg
};
function og(a, b) {
  ib(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  mg(a.H, a, b, !a.Kb)
}
function pg(a, b, c) {
  try {
    var d = Ee(b);
    a.Kc += 1;
    N(a.a, a.v() + " RECV " + F(d));
    var e;
    1 == a.Kc && !d.m(Wf) && a.Cb() ? (M(a.a, a.v() + " is closing soon because got bad preamble: " + F(d)), e = j) : e = m;
    if(e) {
      return j
    }
    if(d instanceof ue) {
      if(!/^([ -~]*)$/.test(d.Ob)) {
        return a.gc = j
      }
      a.ed += 1;
      c.push([a.ed, d.Ob])
    }else {
      if(d instanceof te) {
        var g = a.H, h = d.ra;
        g.zf = h;
        var l = g.Wa, o = h.tb, c = m;
        o > l.cb && (c = j);
        for(var r = $b(l).concat(), d = 0;d < r.length;d++) {
          var A = r[d];
          if(A > o) {
            break
          }
          var s = l.C.get(A)[1];
          l.C.remove(A);
          l.o -= s
        }
        for(d = 0;d < h.ob.length;d++) {
          var w = h.ob[d];
          w > l.cb && (c = j);
          l.C.ha(w) && (s = l.C.get(w)[1], l.C.remove(w), l.o -= s)
        }
        l.C.Pa() && l.C.clear();
        if(c) {
          return M(a.a, a.v() + " is closing soon because got bad SackFrame"), a.gc = j
        }
      }else {
        if(d instanceof we) {
          a.ed = d.tc - 1
        }else {
          if(d instanceof ye) {
            a.H.Af = d.kc
          }else {
            if(d instanceof Ae) {
              return O(a.a, a.v() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof De) {
              return a.gc = j, "stream_attach_failure" == d.reason ? a.Sa += 1 : "acked_unsent_strings" == d.reason && (a.Sa += 0.5), O(a.a, a.v() + " is closing soon because got " + F(d)), j
            }
            if(!(d instanceof ve)) {
              if(d instanceof ze) {
                var C = a.H, dj = !a.Kb;
                O(C.a, "Stream is now confirmed to exist at server.");
                C.Fe = j;
                C.ue && !dj && (C.ue = m, ag(C))
              }else {
                c.length && (og(a, c), bb(c));
                if(d instanceof Be) {
                  var fd = a.H;
                  fd.onreset && fd.onreset.call(fd.Qb, d.nc, d.Tb);
                  fd.g();
                  return j
                }
                f(Error(a.v() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(Pg) {
    return Pg instanceof Q || f(Pg), M(a.a, a.v() + " is closing soon because got InvalidFrame: " + F(b)), a.gc = j
  }
  return m
}
function ge(a, b) {
  a.qd = j;
  try {
    for(var c = m, d = [], e = 0, g = b.length;e < g;e++) {
      if(a.va) {
        a.a.info(a.v() + " returning from loop because we're disposed.");
        return
      }
      if(c = pg(a, b[e], d)) {
        break
      }
    }
    d.length && og(a, d);
    a.qd = m;
    a.I.length && a.Fa();
    c && (O(a.a, a.v() + " closeSoon is true.  Frames were: " + F(b)), a.g())
  }finally {
    a.qd = m
  }
}
q.oh = function() {
  M(this.a, this.v() + " timed out due to lack of connection or no data being received.");
  this.g()
};
function qg(a) {
  a.fd != k && (a.M.O.clearTimeout(a.fd), a.fd = k)
}
function Qf(a, b) {
  qg(a);
  b = Math.round(b);
  a.fd = a.M.O.setTimeout(a.og, b);
  N(a.a, a.v() + "'s receive timeout set to " + b + " ms.")
}
function fe(a) {
  a.Ba != Pf && (a.Ba == gg || a.Ba == fg ? Qf(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.Ba)))
}
function bg(a) {
  var b = new re;
  b.Pb = a.Pb;
  b.Pf = 2;
  b.sf = 2;
  a.H.Fe || (b.Sf = j);
  b.wc = a.H.wc;
  b.He = a.Kb;
  b.He && (b.If = 4096);
  b.Ef = 3E5;
  b.Cf = a.Kb ? Math.floor(10) : 0;
  b.fg = m;
  a.vb && (b.ag = k, b.ke = Math.floor((a.Kb ? 358E4 : 25E3) / 1E3));
  b.ra = bc(a.H.be);
  b.$c = a.H.zf;
  a.I.push(b);
  a.Fb = b.ra
}
function he(a, b) {
  b && (a.Sa += 0.5);
  a.g()
}
q.Fa = function() {
  this.Ia && !this.Vb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.qd) {
    O(this.a, this.v() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ia;
    this.Ia = j;
    !a && !this.I.length && bg(this);
    for(a = 0;a < this.I.length;a++) {
      N(this.a, this.v() + " SEND " + F(this.I[a]))
    }
    if(this.Cb()) {
      for(var a = [], b = 0, c = this.I.length;b < c;b++) {
        this.I[b].pa(a), a.push("\n")
      }
      this.I = [];
      a = a.join("");
      b = this.vb ? this.S.Ua : this.S.Ya;
      this.s = Rf.Id(this, this.vb ? this.S.Of : this.S.Yf);
      this.Le = this.M.O === dd ? y() : this.M.O.getTime();
      this.s.je(b, "POST", a);
      Qf(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Kb ? 0 : this.vb ? 25E3 : 0))
    }else {
      if(this.Ba == gg) {
        a = [];
        b = 0;
        for(c = this.I.length;b < c;b++) {
          a.push(this.I[b].ja())
        }
        this.I = [];
        this.s ? this.s.Ac(a) : (b = this.S, this.s = new ke(this), this.s.pd = b.qh.Id(this.s), this.Le = this.M.O === dd ? y() : this.M.O.getTime(), this.s.Fd(b.host, b.port), this.s.va || (this.s.Ac(a), this.s.va || Qf(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.Ba))
      }
    }
  }
};
function cg(a, b, c) {
  !a.Ia && !a.I.length && bg(a);
  for(var c = Math.max(c, a.Jb + 1), b = b.jf(c), c = 0, d = b.length;c < d;c++) {
    var e = b[c], g = e[0], e = e[1];
    (-1 == a.Jb || a.Jb + 1 != g) && a.I.push(new we(g));
    a.I.push(new ue(e));
    a.Jb = g
  }
}
q.c = function() {
  this.a.info(this.v() + " in disposeInternal.");
  hg.f.c.call(this);
  this.eg = this.M.O === dd ? y() : this.M.O.getTime();
  this.I = [];
  qg(this);
  this.s && this.s.g();
  var a = this.H;
  this.H = k;
  kg(a, this)
};
function lg(a, b) {
  !a.Ia && !a.I.length && bg(a);
  a.I.push(new Be(b, j));
  a.ig = j
}
function jg(a, b, c, d) {
  this.M = a;
  this.H = b;
  this.bf = c;
  this.We = d
}
z(jg, J);
q = jg.prototype;
q.Ia = m;
q.Vb = m;
q.Qc = k;
q.Fb = k;
q.a = P("cw.net.DoNothingTransport");
function rg(a) {
  a.Qc = a.M.O.setTimeout(function() {
    a.Qc = k;
    a.We--;
    a.We ? rg(a) : a.g()
  }, a.bf)
}
q.Fa = function() {
  this.Ia && !this.Vb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ia = j;
  rg(this)
};
q.u = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.bf, ">")
};
q.Cb = p(m);
q.v = p("Wast. T");
q.Te = p(m);
q.c = function() {
  this.a.info(this.v() + " in disposeInternal.");
  jg.f.c.call(this);
  this.Qc != k && this.M.O.clearTimeout(this.Qc);
  var a = this.H;
  this.H = k;
  kg(a, this)
};
function sg(a, b, c) {
  a.style[Ha(c)] = b
}
function tg(a, b) {
  var c = kf(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function ug(a, b, c) {
  b instanceof R ? (c = b.height, b = b.width) : c == i && f(Error("missing height argument"));
  a.style.width = vg(b);
  a.style.height = vg(c)
}
function vg(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
function wg(a) {
  if("none" != (tg(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style && a.style.display)) {
    return xg(a)
  }
  var b = a.style, c = b.display, d = b.visibility, e = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = xg(a);
  b.display = c;
  b.position = e;
  b.visibility = d;
  return a
}
function xg(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = H && !b && !c;
  return(!ga(b) || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), G && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new R(b.right - b.left, b.bottom - b.top)) : new R(b, c)
}
function yg(a) {
  G ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[H ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var zg = nc ? "MozUserSelect" : H ? "WebkitUserSelect" : k;
function Ag(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(zg) {
    if(b = b ? "none" : "", a.style[zg] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[zg] = b
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
;function Bg(a) {
  this.hb = a;
  this.n = []
}
z(Bg, J);
var Cg = [];
function T(a, b, c, d) {
  u(c) || (Cg[0] = c, c = Cg);
  for(var e = 0;e < c.length;e++) {
    a.n.push(L(b, c[e], d || a, m, a.hb || a))
  }
  return a
}
function Dg(a, b, c, d, e, g) {
  if(u(c)) {
    for(var h = 0;h < c.length;h++) {
      Dg(a, b, c[h], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.hb || a;
      e = !!e;
      if(b = Vc(b, c, e)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].nb && b[c].Hb == d && b[c].capture == e && b[c].Uc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, Wc(b), cb(a.n, b))
  }
  return a
}
Bg.prototype.te = function() {
  Xa(this.n, Wc);
  this.n.length = 0
};
Bg.prototype.c = function() {
  Bg.f.c.call(this);
  this.te()
};
Bg.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Eg() {
}
ea(Eg);
Eg.prototype.Vg = 0;
Eg.Na();
function U(a) {
  this.P = a || hf();
  this.rc = Fg
}
z(U, bd);
U.prototype.Ng = Eg.Na();
var Fg = k;
function Gg(a, b) {
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
q = U.prototype;
q.U = k;
q.r = m;
q.e = k;
q.rc = k;
q.D = k;
q.R = k;
q.Xb = k;
q.sh = m;
function Hg(a) {
  return a.U || (a.U = ":" + (a.Ng.Vg++).toString(36))
}
q.b = n("e");
function Ig(a) {
  return a.Ab || (a.Ab = new Bg(a))
}
q.getParent = n("D");
q.ze = function(a) {
  this.D && this.D != a && f(Error("Method not supported"));
  U.f.ze.call(this, a)
};
q.Ga = n("P");
q.i = function() {
  this.e = this.P.createElement("div")
};
function Jg(a, b) {
  a.r && f(Error("Component already rendered"));
  a.e || a.i();
  b ? b.insertBefore(a.e, k) : a.P.q.body.appendChild(a.e);
  (!a.D || a.D.r) && a.T()
}
q.T = function() {
  this.r = j;
  Kg(this, function(a) {
    !a.r && a.b() && a.T()
  })
};
q.eb = function() {
  Kg(this, function(a) {
    a.r && a.eb()
  });
  this.Ab && this.Ab.te();
  this.r = m
};
q.c = function() {
  U.f.c.call(this);
  this.r && this.eb();
  this.Ab && (this.Ab.g(), delete this.Ab);
  Kg(this, function(a) {
    a.g()
  });
  !this.sh && this.e && uf(this.e);
  this.D = this.e = this.Xb = this.R = k
};
q.dc = n("e");
q.Mb = function(a) {
  this.r && f(Error("Component already rendered"));
  this.rc = a
};
function Kg(a, b) {
  a.R && Xa(a.R, b, i)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : Hg(a), a = this.Xb && c ? (c in this.Xb ? this.Xb[c] : i) || k : k;
    if(c && a) {
      var d = this.Xb;
      c in d && delete d[c];
      cb(this.R, a);
      b && (a.eb(), a.e && uf(a.e));
      c = a;
      c == k && f(Error("Unable to set parent component"));
      c.D = k;
      U.f.ze.call(c, k)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function Lg(a, b) {
  a.setAttribute("role", b);
  a.Ii = b
}
;function Mg() {
}
var Ng;
ea(Mg);
q = Mg.prototype;
q.Lc = function() {
};
q.i = function(a) {
  var b = a.Ga().i("div", Og(this, a).join(" "), a.ia);
  this.we(a, b);
  return b
};
q.dc = function(a) {
  return a
};
q.ac = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(G && !I("7")) {
      var d = Qg(cf(a), b);
      d.push(b);
      ra(c ? df : ef, a).apply(k, d)
    }else {
      c ? df(a, b) : ef(a, b)
    }
  }
};
q.uf = function(a) {
  a.rc == k && (a.rc = "rtl" == (tg(a.r ? a.e : a.P.q.body, "direction") || ((a.r ? a.e : a.P.q.body).currentStyle ? (a.r ? a.e : a.P.q.body).currentStyle.direction : k) || (a.r ? a.e : a.P.q.body).style && (a.r ? a.e : a.P.q.body).style.direction));
  a.rc && this.Mb(a.b(), j);
  a.isEnabled() && this.ld(a, a.Rb)
};
q.we = function(a, b) {
  a.isEnabled() || this.ga(b, 1, j);
  a.h & 8 && this.ga(b, 8, j);
  a.aa & 16 && this.ga(b, 16, !!(a.h & 16));
  a.aa & 64 && this.ga(b, 64, !!(a.h & 64))
};
q.hd = function(a, b) {
  Ag(a, !b, !G && !mc)
};
q.Mb = function(a, b) {
  this.ac(a, this.w() + "-rtl", b)
};
q.wf = function(a) {
  var b;
  return a.aa & 32 && (b = a.gb()) ? zf(b) : m
};
q.ld = function(a, b) {
  var c;
  if(a.aa & 32 && (c = a.gb())) {
    if(!b && a.h & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.h & 32 && a.mf()
    }
    zf(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
q.De = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.ma = function(a, b, c) {
  var d = a.b();
  if(d) {
    var e = Rg(this, b);
    e && this.ac(a, e, c);
    this.ga(d, b, c)
  }
};
q.ga = function(a, b, c) {
  Ng || (Ng = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Ng[b]) && a.setAttribute("aria-" + b, c)
};
q.jd = function(a, b) {
  var c = this.dc(a);
  if(c && (tf(c), b)) {
    if(v(b)) {
      wf(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = kf(c);
          c.appendChild(v(a) ? b.createTextNode(a) : a)
        }
      };
      u(b) ? Xa(b, d) : ha(b) && !("nodeType" in b) ? Xa(eb(b), d) : d(b)
    }
  }
};
q.gb = function(a) {
  return a.b()
};
q.w = p("goog-control");
function Og(a, b) {
  var c = a.w(), d = [c], e = a.w();
  e != c && d.push(e);
  c = b.h;
  for(e = [];c;) {
    var g = c & -c;
    e.push(Rg(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.wa) && d.push.apply(d, c);
  G && !I("7") && d.push.apply(d, Qg(d));
  return d
}
function Qg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Xa([], function(d) {
    $a(d, ra(ab, a)) && (!b || ab(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Rg(a, b) {
  if(!a.Se) {
    var c = a.w();
    a.Se = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Se[b]
}
;function Sg(a, b) {
  a || f(Error("Invalid class name " + a));
  la(b) || f(Error("Invalid decorator function " + b))
}
var Tg = {};
function Ug(a, b, c, d, e) {
  if(!G && (!H || !I("525"))) {
    return j
  }
  if(qc && e) {
    return Vg(a)
  }
  if(e && !d || !c && (17 == b || 18 == b) || G && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(G && Ac());
    case 27:
      return!H
  }
  return Vg(a)
}
function Vg(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || H && 0 == a) {
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
;function Wg(a, b) {
  a && Xg(this, a, b)
}
z(Wg, bd);
q = Wg.prototype;
q.e = k;
q.Yc = k;
q.de = k;
q.Zc = k;
q.Ra = -1;
q.Qa = -1;
var Yg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Zg = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, $g = {61:187, 
59:186}, ah = G || H && I("525");
q = Wg.prototype;
q.Jg = function(a) {
  if(H && (17 == this.Ra && !a.ctrlKey || 18 == this.Ra && !a.altKey)) {
    this.Qa = this.Ra = -1
  }
  ah && !Ug(a.keyCode, this.Ra, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Qa = nc && a.keyCode in $g ? $g[a.keyCode] : a.keyCode
};
q.Kg = function() {
  this.Qa = this.Ra = -1
};
q.handleEvent = function(a) {
  var b = a.Ea, c, d;
  G && "keypress" == a.type ? (c = this.Qa, d = 13 != c && 27 != c ? b.keyCode : 0) : H && "keypress" == a.type ? (c = this.Qa, d = 0 <= b.charCode && 63232 > b.charCode && Vg(c) ? b.charCode : 0) : mc ? (c = this.Qa, d = Vg(c) ? b.keyCode : 0) : (c = b.keyCode || this.Qa, d = b.charCode || 0, qc && 63 == d && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in Yg ? e = Yg[c] : 25 == c && a.shiftKey && (e = 9) : g && g in Zg && (e = Zg[g]);
  a = e == this.Ra;
  this.Ra = e;
  b = new bh(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.g()
  }
};
q.b = n("e");
function Xg(a, b, c) {
  a.Zc && a.detach();
  a.e = b;
  a.Yc = L(a.e, "keypress", a, c);
  a.de = L(a.e, "keydown", a.Jg, c, a);
  a.Zc = L(a.e, "keyup", a.Kg, c, a)
}
q.detach = function() {
  this.Yc && (Wc(this.Yc), Wc(this.de), Wc(this.Zc), this.Zc = this.de = this.Yc = k);
  this.e = k;
  this.Qa = this.Ra = -1
};
q.c = function() {
  Wg.f.c.call(this);
  this.detach()
};
function bh(a, b, c, d) {
  d && this.ic(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
z(bh, Lc);
function V(a, b, c) {
  U.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ma(b);
      if(d = Tg[d]) {
        break
      }
      b = b.f ? b.f.constructor : k
    }
    b = d ? la(d.Na) ? d.Na() : new d : k
  }
  this.l = b;
  this.kd(a)
}
z(V, U);
q = V.prototype;
q.ia = k;
q.h = 0;
q.aa = 39;
q.zd = 255;
q.ih = 0;
q.Rb = j;
q.wa = k;
q.Yd = j;
q.yd = m;
q.Yg = k;
q.gb = function() {
  return this.l.gb(this)
};
function ch(a, b) {
  b && (a.wa ? ab(a.wa, b) || a.wa.push(b) : a.wa = [b], a.l.ac(a, b, j))
}
q.ac = function(a, b) {
  b ? ch(this, a) : a && this.wa && (cb(this.wa, a), 0 == this.wa.length && (this.wa = k), this.l.ac(this, a, m))
};
q.i = function() {
  var a = this.l.i(this);
  this.e = a;
  var b = this.Yg || this.l.Lc();
  b && Lg(a, b);
  this.yd || this.l.hd(a, m);
  this.Rb || this.l.De(a, m)
};
q.dc = function() {
  return this.l.dc(this.b())
};
q.T = function() {
  V.f.T.call(this);
  this.l.uf(this);
  if(this.aa & -2 && (this.Yd && dh(this, j), this.aa & 32)) {
    var a = this.gb();
    if(a) {
      var b = this.Eb || (this.Eb = new Wg);
      Xg(b, a);
      T(T(T(Ig(this), b, "key", this.pf), a, "focus", this.Hg), a, "blur", this.mf)
    }
  }
};
function dh(a, b) {
  var c = Ig(a), d = a.b();
  b ? (T(T(T(T(c, d, "mouseover", a.Tc), d, "mousedown", a.Rc), d, "mouseup", a.qf), d, "mouseout", a.Sc), G && T(c, d, "dblclick", a.of)) : (Dg(Dg(Dg(Dg(c, d, "mouseover", a.Tc), d, "mousedown", a.Rc), d, "mouseup", a.qf), d, "mouseout", a.Sc), G && Dg(c, d, "dblclick", a.of))
}
q.eb = function() {
  V.f.eb.call(this);
  this.Eb && this.Eb.detach();
  this.Rb && this.isEnabled() && this.l.ld(this, m)
};
q.c = function() {
  V.f.c.call(this);
  this.Eb && (this.Eb.g(), delete this.Eb);
  delete this.l;
  this.wa = this.ia = k
};
q.jd = function(a) {
  this.l.jd(this.b(), a);
  this.kd(a)
};
q.kd = aa("ia");
q.gf = function() {
  var a = this.ia;
  if(!a) {
    return""
  }
  if(!v(a)) {
    if(u(a)) {
      a = Ya(a, Af).join("")
    }else {
      if(gf && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Bf(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      gf || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
q.Mb = function(a) {
  V.f.Mb.call(this, a);
  var b = this.b();
  b && this.l.Mb(b, a)
};
q.hd = function(a) {
  this.yd = a;
  var b = this.b();
  b && this.l.hd(b, a)
};
q.De = function(a, b) {
  if(b || this.Rb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.l.De(c, a);
    this.isEnabled() && this.l.ld(this, a);
    this.Rb = a;
    return j
  }
  return m
};
q.isEnabled = function() {
  return!(this.h & 1)
};
function eh(a, b) {
  fh(a, 2, b) && a.ma(2, b)
}
q.ce = function() {
  return!!(this.h & 4)
};
q.setActive = function(a) {
  fh(this, 4, a) && this.ma(4, a)
};
q.Ae = function(a) {
  fh(this, 8, a) && this.ma(8, a)
};
q.ma = function(a, b) {
  this.aa & a && b != !!(this.h & a) && (this.l.ma(this, a, b), this.h = b ? this.h | a : this.h & ~a)
};
function W(a, b) {
  return!!(a.zd & b) && !!(a.aa & b)
}
function fh(a, b, c) {
  return!!(a.aa & b) && !!(a.h & b) != c && (!(a.ih & b) || a.dispatchEvent(Gg(b, c))) && !a.va
}
q.Tc = function(a) {
  !gh(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && W(this, 2) && eh(this, j)
};
q.Sc = function(a) {
  !gh(a, this.b()) && this.dispatchEvent("leave") && (W(this, 4) && this.setActive(m), W(this, 2) && eh(this, m))
};
function gh(a, b) {
  return!!a.relatedTarget && vf(b, a.relatedTarget)
}
q.Rc = function(a) {
  if(this.isEnabled() && (W(this, 2) && eh(this, j), Nc(a) && (!H || !qc || !a.ctrlKey))) {
    W(this, 4) && this.setActive(j), this.l.wf(this) && this.gb().focus()
  }
  !this.yd && Nc(a) && (!H || !qc || !a.ctrlKey) && a.preventDefault()
};
q.qf = function(a) {
  this.isEnabled() && (W(this, 2) && eh(this, j), this.ce() && this.lb(a) && W(this, 4) && this.setActive(m))
};
q.of = function(a) {
  this.isEnabled() && this.lb(a)
};
q.lb = function(a) {
  if(W(this, 16)) {
    var b = !(this.h & 16);
    fh(this, 16, b) && this.ma(16, b)
  }
  W(this, 8) && this.Ae(j);
  W(this, 64) && (b = !(this.h & 64), fh(this, 64, b) && this.ma(64, b));
  b = new Ic("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.se = a.se);
  return this.dispatchEvent(b)
};
q.Hg = function() {
  W(this, 32) && fh(this, 32, j) && this.ma(32, j)
};
q.mf = function() {
  W(this, 4) && this.setActive(m);
  W(this, 32) && fh(this, 32, m) && this.ma(32, m)
};
q.pf = function(a) {
  return this.Rb && this.isEnabled() && this.Xd(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
q.Xd = function(a) {
  return 13 == a.keyCode && this.lb(a)
};
la(V) || f(Error("Invalid component class " + V));
la(Mg) || f(Error("Invalid renderer class " + Mg));
var hh = ma(V);
Tg[hh] = Mg;
Sg("goog-control", function() {
  return new V(k)
});
function ih() {
}
z(ih, Mg);
ea(ih);
q = ih.prototype;
q.Lc = p("button");
q.ga = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : ih.f.ga.call(this, a, b, c)
};
q.i = function(a) {
  var b = ih.f.i.call(this, a), c = a.Oc();
  c && this.Ce(b, c);
  (c = a.Pc()) && this.od(b, c);
  a.aa & 16 && this.ga(b, 16, !!(a.h & 16));
  return b
};
q.Pc = da;
q.od = da;
q.Oc = function(a) {
  return a.title
};
q.Ce = function(a, b) {
  a && (a.title = b || "")
};
q.w = p("goog-button");
function jh() {
}
z(jh, ih);
ea(jh);
q = jh.prototype;
q.Lc = function() {
};
q.i = function(a) {
  a.r && m != a.Yd && dh(a, m);
  a.Yd = m;
  a.zd &= -256;
  a.r && a.h & 32 && f(Error("Component already rendered"));
  a.h & 32 && a.ma(32, m);
  a.aa &= -33;
  return a.Ga().i("button", {"class":Og(this, a).join(" "), disabled:!a.isEnabled(), title:a.Oc() || "", value:a.Pc() || ""}, a.gf() || "")
};
q.uf = function(a) {
  T(Ig(a), a.b(), "click", a.lb)
};
q.hd = da;
q.Mb = da;
q.wf = function(a) {
  return a.isEnabled()
};
q.ld = da;
q.ma = function(a, b, c) {
  jh.f.ma.call(this, a, b, c);
  if((a = a.b()) && 1 == b) {
    a.disabled = c
  }
};
q.Pc = function(a) {
  return a.value
};
q.od = function(a, b) {
  a && (a.value = b)
};
q.ga = da;
function kh(a, b, c) {
  V.call(this, a, b || jh.Na(), c)
}
z(kh, V);
q = kh.prototype;
q.Pc = n("gg");
q.od = function(a) {
  this.gg = a;
  this.l.od(this.b(), a)
};
q.Oc = n("cg");
q.Ce = function(a) {
  this.cg = a;
  this.l.Ce(this.b(), a)
};
q.c = function() {
  kh.f.c.call(this);
  delete this.gg;
  delete this.cg
};
q.T = function() {
  kh.f.T.call(this);
  if(this.aa & 32) {
    var a = this.gb();
    a && T(Ig(this), a, "keyup", this.Xd)
  }
};
q.Xd = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.lb(a) : 32 == a.keyCode
};
Sg("goog-button", function() {
  return new kh(k)
});
function lh() {
}
z(lh, ih);
ea(lh);
q = lh.prototype;
q.i = function(a) {
  var b = {"class":"goog-inline-block " + Og(this, a).join(" "), title:a.Oc() || ""}, b = a.Ga().i("div", b, mh(this, a.ia, a.Ga()));
  this.we(a, b);
  return b
};
q.Lc = p("button");
q.we = function(a, b) {
  a.isEnabled() || this.ga(b, 1, j);
  a.h & 8 && this.ga(b, 8, j);
  a.aa & 16 && this.ga(b, 16, j);
  a.h & 64 && this.ga(b, 64, j)
};
q.dc = function(a) {
  return a && a.firstChild.firstChild
};
function mh(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.w() + "-outer-box"), c.i("div", "goog-inline-block " + (a.w() + "-inner-box"), b))
}
q.w = p("goog-custom-button");
function nh(a, b, c) {
  kh.call(this, a, b || lh.Na(), c)
}
z(nh, kh);
Sg("goog-custom-button", function() {
  return new nh(k)
});
var oh = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function ph(a) {
  var b = {}, a = "" + a, c = "#" == a.charAt(0) ? a : "#" + a;
  if(qh.test(c)) {
    return b.Vc = rh(c), b.type = "hex", b
  }
  a: {
    var d = a.match(sh);
    if(d) {
      var c = Number(d[1]), e = Number(d[2]), d = Number(d[3]);
      if(0 <= c && 255 >= c && 0 <= e && 255 >= e && 0 <= d && 255 >= d) {
        c = [c, e, d];
        break a
      }
    }
    c = []
  }
  if(c.length) {
    return b.Vc = th(c[0], c[1], c[2]), b.type = "rgb", b
  }
  if(oh && (c = oh[a.toLowerCase()])) {
    return b.Vc = c, b.type = "named", b
  }
  f(Error(a + " is not a valid color string"))
}
var uh = /#(.)(.)(.)/;
function rh(a) {
  qh.test(a) || f(Error("'" + a + "' is not a valid hex color"));
  4 == a.length && (a = a.replace(uh, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function vh(a) {
  a = rh(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function th(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || 0 > a || 255 < a || isNaN(b) || 0 > b || 255 < b || isNaN(c) || 0 > c || 255 < c) && f(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = wh(a.toString(16));
  b = wh(b.toString(16));
  c = wh(c.toString(16));
  return"#" + a + b + c
}
var qh = /^#(?:[0-9a-f]{3}){1,2}$/i, sh = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function wh(a) {
  return 1 == a.length ? "0" + a : a
}
;var xh;
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
  xh = c
})();
function yh(a, b) {
  U.call(this, b);
  this.Bg = a;
  this.Od = new Bg(this);
  this.Jc = new Sb
}
z(yh, U);
q = yh.prototype;
q.a = P("goog.ui.media.FlashObject");
q.uh = "window";
q.Qe = "#000000";
q.mg = "sameDomain";
q.fa = function(a, b) {
  this.sb = v(a) ? a : Math.round(a) + "px";
  this.Zd = v(b) ? b : Math.round(b) + "px";
  this.b() && ug(this.b() ? this.b().firstChild : k, this.sb, this.Zd);
  return this
};
q.T = function() {
  yh.f.T.call(this);
  var a = this.b(), b;
  b = G ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = G ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = ta(c, this.uh), d = this.Jc.xa(), e = this.Jc.ea(), g = [], h = 0;h < d.length;h++) {
    var l = va(d[h]), o = va(e[h]);
    g.push(l + "=" + o)
  }
  b = ta(b, Hg(this), Hg(this), "goog-ui-media-flash-object", xa(this.Bg), xa(g.join("&")), this.Qe, this.mg, c);
  a.innerHTML = b;
  this.sb && this.Zd && this.fa(this.sb, this.Zd);
  T(this.Od, this.b(), Sa(Gc), Jc)
};
q.i = function() {
  this.Tf != k && !(0 <= Ea(xh, this.Tf)) && (M(this.a, "Required flash version not found:" + this.Tf), f(Error("Method not supported")));
  var a = this.Ga().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
q.c = function() {
  yh.f.c.call(this);
  this.Jc = k;
  this.Od.g();
  this.Od = k
};
function zh(a) {
  B.call(this, a)
}
z(zh, B);
zh.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function Ah(a, b, c) {
  function d() {
    e && delete t.__loadFlashObject_callbacks[e]
  }
  var e;
  if(nc && !I("1.8.1.20")) {
    return sd(new zh("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Ea(xh, "9"))) {
    return b = xh, sd(new zh("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  e = "_" + yd();
  var h = new gd(d);
  t.__loadFlashObject_callbacks[e] = function() {
    a.setTimeout(function() {
      d();
      md(h, S(g))
    }, 0)
  };
  b.Jc.set("onloadcallback", '__loadFlashObject_callbacks["' + e + '"]()');
  g = Hg(b);
  Jg(b, c);
  return h
}
function Bh(a, b, c) {
  var d = Ah(a, b, c), e = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  pd(d, function(b) {
    a.clearTimeout(e);
    return b
  });
  return d
}
;function Ch() {
}
Ch.prototype.Bc = k;
var Dh;
function Eh() {
}
z(Eh, Ch);
function Fh(a) {
  return(a = Gh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Hh(a) {
  var b = {};
  Gh(a) && (b[0] = j, b[1] = j);
  return b
}
Eh.prototype.$d = k;
function Gh(a) {
  if(!a.$d && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.$d = d
      }catch(e) {
      }
    }
    f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.$d
}
Dh = new Eh;
function Ih(a) {
  this.headers = new Sb;
  this.Sb = a || k
}
z(Ih, bd);
Ih.prototype.a = P("goog.net.XhrIo");
var Jh = /^https?$/i;
q = Ih.prototype;
q.Ja = m;
q.k = k;
q.vd = k;
q.fe = "";
q.yf = "";
q.jc = "";
q.Nd = m;
q.Wc = m;
q.ae = m;
q.jb = m;
q.rd = 0;
q.qb = k;
q.Uf = "";
q.th = m;
q.send = function(a, b, c, d) {
  this.k && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.fe = a;
  this.jc = "";
  this.yf = b;
  this.Nd = m;
  this.Ja = j;
  this.k = this.Sb ? Fh(this.Sb) : Fh(Dh);
  this.vd = this.Sb ? this.Sb.Bc || (this.Sb.Bc = Hh(this.Sb)) : Dh.Bc || (Dh.Bc = Hh(Dh));
  this.k.onreadystatechange = x(this.Lf, this);
  try {
    N(this.a, Kh(this, "Opening Xhr")), this.ae = j, this.k.open(b, a, j), this.ae = m
  }catch(e) {
    N(this.a, Kh(this, "Error opening Xhr: " + e.message));
    Lh(this, e);
    return
  }
  var a = c || "", g = this.headers.B();
  d && Qb(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.ha("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Qb(g, function(a, b) {
    this.k.setRequestHeader(b, a)
  }, this);
  this.Uf && (this.k.responseType = this.Uf);
  "withCredentials" in this.k && (this.k.withCredentials = this.th);
  try {
    this.qb && (dd.clearTimeout(this.qb), this.qb = k), 0 < this.rd && (N(this.a, Kh(this, "Will abort after " + this.rd + "ms if incomplete")), this.qb = dd.setTimeout(x(this.ph, this), this.rd)), N(this.a, Kh(this, "Sending request")), this.Wc = j, this.k.send(a), this.Wc = m
  }catch(h) {
    N(this.a, Kh(this, "Send error: " + h.message)), Lh(this, h)
  }
};
q.ph = function() {
  "undefined" != typeof ba && this.k && (this.jc = "Timed out after " + this.rd + "ms, aborting", N(this.a, Kh(this, this.jc)), this.dispatchEvent("timeout"), this.abort(8))
};
function Lh(a, b) {
  a.Ja = m;
  a.k && (a.jb = j, a.k.abort(), a.jb = m);
  a.jc = b;
  Mh(a);
  Nh(a)
}
function Mh(a) {
  a.Nd || (a.Nd = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
q.abort = function() {
  this.k && this.Ja && (N(this.a, Kh(this, "Aborting")), this.Ja = m, this.jb = j, this.k.abort(), this.jb = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Nh(this))
};
q.c = function() {
  this.k && (this.Ja && (this.Ja = m, this.jb = j, this.k.abort(), this.jb = m), Nh(this, j));
  Ih.f.c.call(this)
};
q.Lf = function() {
  !this.ae && !this.Wc && !this.jb ? this.Wg() : Oh(this)
};
q.Wg = function() {
  Oh(this)
};
function Oh(a) {
  if(a.Ja && "undefined" != typeof ba) {
    if(a.vd[1] && 4 == a.Oa() && 2 == Ph(a)) {
      N(a.a, Kh(a, "Local request error detected and ignored"))
    }else {
      if(a.Wc && 4 == a.Oa()) {
        dd.setTimeout(x(a.Lf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.Oa()) {
          N(a.a, Kh(a, "Request complete"));
          a.Ja = m;
          var b = Ph(a), c;
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
              b = ("" + a.fe).match(Fe)[1] || k, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !Jh.test(b ? b.toLowerCase() : "")
            }
            c = b
          }
          if(c) {
            a.dispatchEvent("complete"), a.dispatchEvent("success")
          }else {
            var d;
            try {
              d = 2 < a.Oa() ? a.k.statusText : ""
            }catch(e) {
              N(a.a, "Can not get status: " + e.message), d = ""
            }
            a.jc = d + " [" + Ph(a) + "]";
            Mh(a)
          }
          Nh(a)
        }
      }
    }
  }
}
function Nh(a, b) {
  if(a.k) {
    var c = a.k, d = a.vd[0] ? da : k;
    a.k = k;
    a.vd = k;
    a.qb && (dd.clearTimeout(a.qb), a.qb = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(e) {
      Zd(a.a, "Problem encountered resetting onreadystatechange: " + e.message)
    }
  }
}
q.ce = function() {
  return!!this.k
};
q.Oa = function() {
  return this.k ? this.k.readyState : 0
};
function Ph(a) {
  try {
    return 2 < a.Oa() ? a.k.status : -1
  }catch(b) {
    return M(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.k && 4 == this.Oa() ? this.k.getResponseHeader(a) : i
};
function Kh(a, b) {
  return b + " [" + a.yf + " " + a.fe + " " + Ph(a) + "]"
}
;var Qh = !(G || H && !I("420+"));
function Rh(a, b) {
  this.sd = a;
  this.qa = b
}
z(Rh, J);
q = Rh.prototype;
q.s = k;
q.Xa = -1;
q.lf = m;
q.rf = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Sh(a) {
  var b = Nf(a.Ze), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.qa, c, b), 1 != b && a.g()) : a.g()
}
q.Mg = function() {
  Sh(this);
  if(!this.va) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.qa);
    this.g()
  }
};
q.ah = function() {
  var a = t.parent;
  if(a) {
    this.Xa = this.s.Oa();
    if(2 <= this.Xa && !this.lf) {
      for(var b = new Sb, c = this.rf.length;c--;) {
        var d = this.rf[c];
        try {
          b.set(d, this.s.k.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.ca() && (this.lf = j, a.__XHRMaster_ongotheaders(this.qa, Wb(b)), this.va)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.qa, this.Xa);
    Qh && 3 == this.Xa && Sh(this)
  }else {
    this.g()
  }
};
q.je = function(a, b, c) {
  this.s = new Ih;
  L(this.s, "readystatechange", x(this.ah, this));
  L(this.s, "complete", x(this.Mg, this));
  this.s.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.Ze = new Mf(this.s.k, 1048576)
};
q.c = function() {
  Rh.f.c.call(this);
  delete this.Ze;
  this.s && this.s.g();
  delete this.sd.vc[this.qa];
  delete this.sd
};
function Th() {
  this.vc = {}
}
z(Th, J);
Th.prototype.Sg = function(a, b, c, d) {
  var e = new Rh(this, a);
  this.vc[a] = e;
  e.je(b, c, d)
};
Th.prototype.wg = function(a) {
  (a = this.vc[a]) && a.g()
};
Th.prototype.c = function() {
  Th.f.c.call(this);
  for(var a = Sa(this.vc);a.length;) {
    a.pop().g()
  }
  delete this.vc
};
var Uh = new Th;
t.__XHRSlave_makeRequest = x(Uh.Sg, Uh);
t.__XHRSlave_dispose = x(Uh.wg, Uh);
function Vh(a) {
  this.q = a
}
var Wh = /\s*;\s*/;
q = Vh.prototype;
q.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && H) {
    var b = "COOKIES_TEST_" + y();
    Xh.set(b, "1");
    if(!this.get(b)) {
      return m
    }
    this.remove(b)
  }
  return a
};
q.set = function(a, b, c, d, e, g) {
  /[;=\s]/.test(a) && f(Error('Invalid cookie name "' + a + '"'));
  /[;\r\n]/.test(b) && f(Error('Invalid cookie value "' + b + '"'));
  ga(c) || (c = -1);
  e = e ? ";domain=" + e : "";
  d = d ? ";path=" + d : "";
  g = g ? ";secure" : "";
  c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(y() + 1E3 * c)).toUTCString();
  this.q.cookie = a + "=" + b + e + d + c + g
};
q.get = function(a, b) {
  for(var c = a + "=", d = (this.q.cookie || "").split(Wh), e = 0, g;g = d[e];e++) {
    if(0 == g.indexOf(c)) {
      return g.substr(c.length)
    }
  }
  return b
};
q.remove = function(a, b, c) {
  var d = this.ha(a);
  this.set(a, "", 0, b, c);
  return d
};
q.xa = function() {
  return Yh(this).keys
};
q.ea = function() {
  return Yh(this).hg
};
q.Pa = function() {
  return!this.q.cookie
};
q.ca = function() {
  return!this.q.cookie ? 0 : (this.q.cookie || "").split(Wh).length
};
q.ha = function(a) {
  return ga(this.get(a))
};
q.Fc = function(a) {
  for(var b = Yh(this).hg, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return j
    }
  }
  return m
};
q.clear = function() {
  for(var a = Yh(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b])
  }
};
function Yh(a) {
  for(var a = (a.q.cookie || "").split(Wh), b = [], c = [], d, e, g = 0;e = a[g];g++) {
    d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)))
  }
  return{keys:b, hg:c}
}
var Xh = new Vh(document);
Xh.bi = 3950;
function Zh() {
}
Zh.prototype.hf = function() {
  return Boolean(Number((new He(document.location)).$.get("httpStreaming", "0"))) ? 2 : 1
};
function $h(a) {
  var b = new yh("/httpface/FlashConnector.swf?cb=4bdfc178fc0e508c0cd5efc3fdb09920");
  b.Qe = "#777777";
  b.fa(300, 30);
  var c = S("FlashConnectorSwf");
  c || f(Error("no FlashConnectorSwf?"));
  return Bh(a.O, b, c)
}
function ai(a, b, c) {
  var d = new He(document.location);
  if(c) {
    var e = d.oa, g = t.__demo_mainSocketPort, d = $h(a);
    nd(d, function(b) {
      b = new je(a, b);
      return new Tf(e, g, b)
    });
    return d
  }
  b ? (b = t.__demo_shared_domain, d = d.B(), Ke(d, "_____random_____." + b)) : d = d.B();
  d.pb("/httpface/");
  Me(d, "", i);
  d = new Uf(d.toString().replace("_____random_____", "%random%"));
  return rd(d)
}
function bi() {
  var a = ci, b = (new He(document.location)).$, c = "http" != b.get("mode"), b = Boolean(Number(b.get("useSub", "1")));
  return ai(a, b, c)
}
;function di() {
  this.Rf = y()
}
var ei = new di;
di.prototype.set = aa("Rf");
di.prototype.reset = function() {
  this.set(y())
};
di.prototype.get = n("Rf");
function fi(a) {
  this.Zg = a || "";
  this.hh = ei
}
fi.prototype.Zf = j;
fi.prototype.fh = j;
fi.prototype.eh = j;
fi.prototype.$f = m;
function gi(a) {
  return 10 > a ? "0" + a : "" + a
}
function hi(a, b) {
  var c = (a.bg - b) / 1E3, d = c.toFixed(3), e = 0;
  if(1 > c) {
    e = 2
  }else {
    for(;100 > c;) {
      e++, c *= 10
    }
  }
  for(;0 < e--;) {
    d = " " + d
  }
  return d
}
function ii(a) {
  fi.call(this, a)
}
z(ii, fi);
ii.prototype.$f = j;
function ji(a) {
  this.$g = x(this.lg, this);
  this.ff = new ii;
  this.vf = this.ff.Zf = m;
  this.e = a;
  this.yg = this.e.ownerDocument || this.e.document;
  var a = hf(this.e), b = k;
  if(G) {
    b = a.q.createStyleSheet(), yg(b)
  }else {
    var c = lf(a.q, "head", i, i)[0];
    c || (b = lf(a.q, "body", i, i)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    yg(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
ji.prototype.lg = function(a) {
  var b = 100 >= this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight, c = this.yg.createElement("div");
  c.className = "logmsg";
  var d = this.ff, e;
  switch(a.Gb.value) {
    case Qd.value:
      e = "dbg-sh";
      break;
    case Rd.value:
      e = "dbg-sev";
      break;
    case Sd.value:
      e = "dbg-w";
      break;
    case Td.value:
      e = "dbg-i";
      break;
    default:
      e = "dbg-f"
  }
  var g = [];
  g.push(d.Zg, " ");
  if(d.Zf) {
    var h = new Date(a.bg);
    g.push("[", gi(h.getFullYear() - 2E3) + gi(h.getMonth() + 1) + gi(h.getDate()) + " " + gi(h.getHours()) + ":" + gi(h.getMinutes()) + ":" + gi(h.getSeconds()) + "." + gi(Math.floor(h.getMilliseconds() / 10)), "] ")
  }
  d.fh && g.push("[", Da(hi(a, d.hh.get())), "s] ");
  d.eh && g.push("[", xa(a.Rg), "] ");
  g.push('<span class="', e, '">', wa(Da(xa(a.Gf))));
  d.$f && a.Qd && g.push("<br>", wa(Da(a.Pd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  b && (this.e.scrollTop = this.e.scrollHeight)
};
ji.prototype.clear = function() {
  this.e.innerHTML = ""
};
function ki(a, b, c, d, e, g) {
  6 == arguments.length ? this.setTransform(a, b, c, d, e, g) : (0 != arguments.length && f(Error("Insufficient matrix parameters")), this.V = this.Y = 1, this.Q = this.W = this.X = this.Z = 0)
}
q = ki.prototype;
q.B = function() {
  return new ki(this.V, this.Q, this.W, this.Y, this.X, this.Z)
};
q.setTransform = function(a, b, c, d, e, g) {
  (!ka(a) || !ka(b) || !ka(c) || !ka(d) || !ka(e) || !ka(g)) && f(Error("Invalid transform parameters"));
  this.V = a;
  this.Q = b;
  this.W = c;
  this.Y = d;
  this.X = e;
  this.Z = g;
  return this
};
q.Ve = function(a) {
  this.V = a.V;
  this.Q = a.Q;
  this.W = a.W;
  this.Y = a.Y;
  this.X = a.X;
  this.Z = a.Z;
  return this
};
q.scale = function(a, b) {
  this.V *= a;
  this.Q *= a;
  this.W *= b;
  this.Y *= b;
  return this
};
q.translate = function(a, b) {
  this.X += a * this.V + b * this.W;
  this.Z += a * this.Q + b * this.Y;
  return this
};
q.rotate = function(a, b, c) {
  var d = new ki, e = Math.cos(a), a = Math.sin(a), b = d.setTransform(e, a, -a, e, b - b * e + c * a, c - b * a - c * e), c = this.V, d = this.W;
  this.V = b.V * c + b.Q * d;
  this.W = b.W * c + b.Y * d;
  this.X += b.X * c + b.Z * d;
  c = this.Q;
  d = this.Y;
  this.Q = b.V * c + b.Q * d;
  this.Y = b.W * c + b.Y * d;
  this.Z += b.X * c + b.Z * d;
  return this
};
q.toString = function() {
  return"matrix(" + [this.V, this.Q, this.W, this.Y, this.X, this.Z].join() + ")"
};
q.m = function(a) {
  return this == a ? j : !a ? m : this.V == a.V && this.W == a.W && this.X == a.X && this.Q == a.Q && this.Y == a.Y && this.Z == a.Z
};
function X(a, b) {
  this.e = a;
  this.ya = b;
  this.Jd = m
}
z(X, bd);
q = X.prototype;
q.ya = k;
q.e = k;
q.dg = k;
q.b = n("e");
q.addEventListener = function(a, b, c, d) {
  L(this.e, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Uc(this.e, a, b, c, d)
};
q.c = function() {
  X.f.c.call(this);
  Yc(this.e)
};
function Y(a, b, c, d) {
  X.call(this, a, b);
  this.Je = c;
  this.ya.ye(this, c);
  this.fill = d;
  this.ya.xe(this, d)
}
z(Y, X);
Y.prototype.fill = k;
Y.prototype.Je = k;
Y.prototype.Eg = n("fill");
Y.prototype.Gg = n("Je");
function li(a, b, c, d) {
  Y.call(this, a, b, c, d)
}
z(li, Y);
function mi(a, b) {
  X.call(this, a, b)
}
z(mi, X);
function ni(a, b, c, d) {
  Y.call(this, a, b, c, d)
}
z(ni, Y);
function oi(a, b) {
  X.call(this, a, b)
}
z(oi, X);
function pi(a, b) {
  X.call(this, a, b)
}
z(pi, mi);
pi.prototype.clear = function() {
  tf(this.b())
};
pi.prototype.fa = function(a, b) {
  qi(this.b(), {width:a, height:b})
};
function ri(a, b, c, d) {
  Y.call(this, a, b, c, d)
}
z(ri, ni);
function si(a, b) {
  X.call(this, a, b)
}
z(si, oi);
si.prototype.fa = function(a, b) {
  qi(this.b(), {width:a, height:b})
};
function ti() {
}
;function ui(a, b) {
  this.Ed = a;
  this.lc = b || 1
}
z(ui, ti);
ui.prototype.ka = n("Ed");
function vi(a, b) {
  this.sb = a;
  this.Ed = b
}
vi.prototype.ka = n("Ed");
function Z() {
  this.G = [];
  this.d = [];
  this.ta = []
}
Z.prototype.wb = k;
Z.prototype.ba = k;
Z.prototype.Nb = j;
var wi = [2, 2, 6, 6, 0];
q = Z.prototype;
q.clear = function() {
  this.G.length = 0;
  this.d.length = 0;
  this.ta.length = 0;
  delete this.wb;
  delete this.ba;
  delete this.Nb;
  return this
};
q.moveTo = function(a, b) {
  0 == this.G[this.G.length - 1] ? this.ta.length -= 2 : (this.G.push(0), this.d.push(1));
  this.ta.push(a, b);
  this.ba = this.wb = [a, b];
  return this
};
q.lineTo = function(a) {
  var b = this.G[this.G.length - 1];
  b == k && f(Error("Path cannot start with lineTo"));
  1 != b && (this.G.push(1), this.d.push(0));
  for(b = 0;b < arguments.length;b += 2) {
    var c = arguments[b], d = arguments[b + 1];
    this.ta.push(c, d)
  }
  this.d[this.d.length - 1] += b / 2;
  this.ba = [c, d];
  return this
};
q.Ye = function(a) {
  var b = this.G[this.G.length - 1];
  b == k && f(Error("Path cannot start with curve"));
  2 != b && (this.G.push(2), this.d.push(0));
  for(b = 0;b < arguments.length;b += 6) {
    var c = arguments[b + 4], d = arguments[b + 5];
    this.ta.push(arguments[b], arguments[b + 1], arguments[b + 2], arguments[b + 3], c, d)
  }
  this.d[this.d.length - 1] += b / 6;
  this.ba = [c, d];
  return this
};
q.close = function() {
  var a = this.G[this.G.length - 1];
  a == k && f(Error("Path cannot start with close"));
  4 != a && (this.G.push(4), this.d.push(1), this.ba = this.wb);
  return this
};
q.arcTo = function(a, b, c, d) {
  var e = this.ba[0] - a * Math.cos(me(c)) + a * Math.cos(me(c + d)), g = this.ba[1] - b * Math.sin(me(c)) + b * Math.sin(me(c + d));
  this.G.push(3);
  this.d.push(1);
  this.ta.push(a, b, c, d, e, g);
  this.Nb = m;
  this.ba = [e, g];
  return this
};
q.ng = function(a, b, c, d) {
  for(var e = this.ba[0] - a * Math.cos(me(c)), g = this.ba[1] - b * Math.sin(me(c)), h = me(d), d = Math.ceil(2 * (Math.abs(h) / Math.PI)), h = h / d, c = me(c), l = 0;l < d;l++) {
    var o = Math.cos(c), r = Math.sin(c), A = 4 / 3 * Math.sin(h / 2) / (1 + Math.cos(h / 2)), s = e + (o - A * r) * a, w = g + (r + A * o) * b, c = c + h, o = Math.cos(c), r = Math.sin(c);
    this.Ye(s, w, e + (o + A * r) * a, g + (r - A * o) * b, e + o * a, g + r * b)
  }
  return this
};
function xi(a, b) {
  for(var c = a.ta, d = 0, e = 0, g = a.G.length;e < g;e++) {
    var h = a.G[e], l = wi[h] * a.d[e];
    b(h, c.slice(d, d + l));
    d += l
  }
}
q.B = function() {
  var a = new this.constructor;
  a.G = this.G.concat();
  a.d = this.d.concat();
  a.ta = this.ta.concat();
  a.wb = this.wb && this.wb.concat();
  a.ba = this.ba && this.ba.concat();
  a.Nb = this.Nb;
  return a
};
var yi = {};
yi[0] = Z.prototype.moveTo;
yi[1] = Z.prototype.lineTo;
yi[4] = Z.prototype.close;
yi[2] = Z.prototype.Ye;
yi[3] = Z.prototype.ng;
function zi(a) {
  if(a.Nb) {
    return a.B()
  }
  var b = new Z;
  xi(a, function(a, d) {
    yi[a].apply(b, d)
  });
  return b
}
Z.prototype.Pa = function() {
  return 0 == this.G.length
};
function Ai(a, b, c, d, e) {
  U.call(this, e);
  this.width = a;
  this.height = b;
  this.na = c || k;
  this.Yb = d || k
}
z(Ai, U);
q = Ai.prototype;
q.J = k;
q.Ka = 0;
q.bb = 0;
q.kf = function() {
  return this.da()
};
q.da = function() {
  return this.r ? wg(this.b()) : ka(this.width) && ka(this.height) ? new R(this.width, this.height) : k
};
function Bi(a) {
  var b = a.da();
  return b ? b.width / (a.na ? new R(a.na, a.Yb) : a.da()).width : 0
}
;function Ci(a, b, c, d, e) {
  Ai.call(this, a, b, c, d, e);
  this.af = {};
  this.Oe = H && !I(526);
  this.hb = new Bg(this)
}
var Di;
z(Ci, Ai);
function Ei(a, b, c) {
  a = a.P.q.createElementNS("http://www.w3.org/2000/svg", b);
  c && qi(a, c);
  return a
}
function qi(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
q = Ci.prototype;
q.ub = function(a, b) {
  (b || this.J).b().appendChild(a.b())
};
q.xe = function(a, b) {
  var c = a.b();
  b instanceof ui ? (c.setAttribute("fill", b.ka()), c.setAttribute("fill-opacity", b.lc)) : c.setAttribute("fill", "none")
};
q.ye = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.ka());
    var d = b.sb;
    v(d) && -1 != d.indexOf("px") ? c.setAttribute("stroke-width", parseFloat(d) / Bi(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
q.i = function() {
  var a = Ei(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = Ei(this, "g");
  this.Ld = Ei(this, "defs");
  this.J = new pi(b, this);
  a.appendChild(this.Ld);
  a.appendChild(b);
  this.e = a;
  if(this.na || this.Ka || this.bb) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.Oe ? this.td() : this.b().setAttribute("viewBox", this.Ka + " " + this.bb + " " + (this.na ? this.na + " " + this.Yb : ""))
  }
};
q.td = function() {
  if(this.r && (this.na || this.Ka || !this.bb)) {
    var a = this.da();
    if(0 == a.width) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.Ka, c = -this.bb, d = a.width / this.na, a = a.height / this.Yb;
      this.J.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
q.fa = function(a, b) {
  ug(this.b(), a, b)
};
q.da = function() {
  if(!nc) {
    return this.r ? wg(this.b()) : Ci.f.da.call(this)
  }
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.r && (c || d)) {
    return k
  }
  var e, g;
  c && (e = this.b().parentNode, g = wg(e), a = parseFloat(a) * g.width / 100);
  d && (e = e || this.b().parentNode, g = g || wg(e), b = parseFloat(b) * g.height / 100);
  return new R(a, b)
};
q.clear = function() {
  this.J.clear();
  tf(this.Ld);
  this.af = {}
};
q.Gc = function(a, b, c, d, e, g, h) {
  a = Ei(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  e = new ri(a, this, e, g);
  this.ub(e, h);
  return e
};
q.drawImage = function(a, b, c, d, e, g) {
  a = Ei(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", e);
  e = new si(a, this);
  this.ub(e, g);
  return e
};
q.T = function() {
  var a = this.da();
  Ci.f.T.call(this);
  a || this.dispatchEvent("resize");
  if(this.Oe) {
    var a = this.width, b = this.height;
    "string" == typeof a && -1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%") && T(this.hb, Fi(), ed, this.td);
    this.td()
  }
};
q.eb = function() {
  Ci.f.eb.call(this);
  this.Oe && Dg(this.hb, Fi(), ed, this.td)
};
q.c = function() {
  delete this.af;
  delete this.Ld;
  delete this.J;
  Ci.f.c.call(this)
};
function Fi() {
  Di || (Di = new cd(400), Di.start());
  return Di
}
;function Gi() {
  return this.e = this.ya.P.b(this.U) || this.e
}
function Hi(a, b) {
  this.U = a.id;
  X.call(this, a, b)
}
z(Hi, mi);
Hi.prototype.b = Gi;
Hi.prototype.clear = function() {
  tf(this.b())
};
Hi.prototype.fa = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  this.ya.J != this && (c.coordorigin = "0 0")
};
function Ii(a, b, c, d, e, g, h, l) {
  this.U = a.id;
  Y.call(this, a, b, h, l)
}
z(Ii, ni);
Ii.prototype.b = Gi;
function Ji(a, b) {
  this.U = a.id;
  X.call(this, a, b)
}
z(Ji, oi);
Ji.prototype.b = Gi;
Ji.prototype.fa = function(a, b) {
  var c = this.b().style;
  c.width = Ki(a) + "px";
  c.height = Ki(b) + "px"
};
function Li(a, b, c, d, e) {
  Ai.call(this, a, b, c, d, e);
  this.hb = new Bg(this)
}
z(Li, Ai);
var Mi = document.documentMode && 8 <= document.documentMode;
function Ki(a) {
  return Math.round(100 * (parseFloat(a.toString()) - 0.5))
}
function $(a) {
  return Math.round(100 * parseFloat(a.toString()))
}
function Ni(a, b) {
  var c = a.P.createElement("g_vml_:" + b);
  c.id = "goog_" + Fa++;
  return c
}
function Oi(a) {
  Mi && a.r && (a.b().innerHTML = a.b().innerHTML)
}
Li.prototype.ub = function(a, b) {
  (b || this.J).b().appendChild(a.b());
  Oi(this)
};
Li.prototype.xe = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var e = c.childNodes[d];
    "fill" == e.tagName && c.removeChild(e)
  }
  b instanceof ui ? "transparent" == b.ka() ? c.filled = m : 1 != b.lc ? (c.filled = j, d = Ni(this, "fill"), d.opacity = Math.round(100 * b.lc) + "%", d.color = b.ka(), c.appendChild(d)) : (c.filled = j, c.fillcolor = b.ka()) : c.filled = m;
  Oi(this)
};
Li.prototype.ye = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = j;
    var d = b.sb, d = v(d) && -1 == d.indexOf("px") ? parseFloat(d) : d * Bi(this), e = c.getElementsByTagName("stroke")[0];
    1 > d ? (e = e || Ni(this, "stroke"), e.opacity = d, e.Ji = "1px", e.color = b.ka(), c.appendChild(e)) : (e && c.removeChild(e), c.strokecolor = b.ka(), c.strokeweight = d + "px")
  }else {
    c.stroked = m
  }
  Oi(this)
};
function Pi(a, b, c, d, e) {
  var g = a.style;
  g.position = "absolute";
  g.left = Ki(b) + "px";
  g.top = Ki(c) + "px";
  g.width = $(d) + "px";
  g.height = $(e) + "px";
  "shape" == a.tagName && (a.coordsize = $(d) + " " + $(e))
}
try {
  eval("document.namespaces")
}catch(Qi) {
}
q = Li.prototype;
q.i = function() {
  var a = this.P.q;
  a.namespaces.g_vml_ || (Mi ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}");
  var a = this.width, b = this.height, c = this.P.i("div", {style:"overflow:hidden;position:relative;width:" + (v(a) && sa(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (v(b) && sa(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = Ni(this, "group"), e = d.style;
  e.position = "absolute";
  e.left = e.top = 0;
  e.width = this.width;
  e.height = this.height;
  d.coordsize = this.na ? $(this.na) + " " + $(this.Yb) : $(a) + " " + $(b);
  d.coordorigin = ga(this.Ka) ? $(this.Ka) + " " + $(this.bb) : "0 0";
  c.appendChild(d);
  this.J = new Hi(d, this);
  L(c, "resize", x(this.Wd, this))
};
q.Wd = function() {
  var a = wg(this.b()), b = this.J.b().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.b();a && a.currentStyle && "none" != a.currentStyle.display;) {
      a = a.parentNode
    }
    a && a.currentStyle && T(this.hb, a, "propertychange", this.Wd)
  }
  this.dispatchEvent("resize")
};
q.fa = function(a, b) {
  ug(this.b(), a, b)
};
q.da = function() {
  var a = this.b();
  return new R(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
q.clear = function() {
  this.J.clear()
};
q.Gc = function(a, b, c, d, e, g, h) {
  var l = Ni(this, "oval");
  Pi(l, a - c, b - d, 2 * c, 2 * d);
  a = new Ii(l, this, 0, 0, 0, 0, e, g);
  this.ub(a, h);
  return a
};
q.drawImage = function(a, b, c, d, e, g) {
  var h = Ni(this, "image");
  Pi(h, a, b, c, d);
  Mi ? h.src = e : h.setAttribute("src", e);
  a = new Ji(h, this);
  this.ub(a, g);
  return a
};
q.T = function() {
  Li.f.T.call(this);
  this.Wd();
  Oi(this)
};
q.c = function() {
  this.J = k;
  Li.f.c.call(this)
};
function Ri(a) {
  X.call(this, k, a);
  this.R = []
}
z(Ri, mi);
Ri.prototype.clear = function() {
  this.R.length && (this.R.length = 0, Si(this.ya))
};
Ri.prototype.fa = function() {
};
Ri.prototype.appendChild = function(a) {
  this.R.push(a)
};
Ri.prototype.Ca = function() {
  for(var a = 0, b = this.R.length;a < b;a++) {
    Ti(this.ya, this.R[a])
  }
};
function Ui(a, b, c, d, e, g, h, l) {
  Y.call(this, a, b, h, l);
  this.sg = c;
  this.tg = d;
  this.Vf = e;
  this.Wf = g;
  this.A = new Z;
  this.A.clear();
  this.A.moveTo(this.sg + this.Vf * Math.cos(me(0)), this.tg + this.Wf * Math.sin(me(0)));
  this.A.arcTo(this.Vf, this.Wf, 0, 360);
  this.A.close();
  this.Xg = new Vi(k, b, this.A, h, l)
}
z(Ui, ni);
Ui.prototype.Ca = function(a) {
  this.Xg.Ca(a)
};
function Vi(a, b, c, d, e) {
  Y.call(this, a, b, d, e);
  this.pb(c)
}
z(Vi, li);
Vi.prototype.$b = m;
Vi.prototype.pb = function(a) {
  this.A = a.Nb ? a : zi(a);
  this.$b && Si(this.ya)
};
Vi.prototype.Ca = function(a) {
  this.$b = j;
  a.beginPath();
  xi(this.A, function(b, c) {
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
function Wi(a, b, c, d, e, g, h) {
  X.call(this, a, b);
  this.wh = c;
  this.yh = d;
  this.Pe = e;
  this.Vd = g;
  this.gh = h
}
z(Wi, oi);
Wi.prototype.$b = m;
Wi.prototype.fa = function(a, b) {
  this.Pe = a;
  this.Vd = b;
  this.$b && Si(this.ya)
};
Wi.prototype.Ca = function(a) {
  this.tf ? (this.Pe && this.Vd && a.drawImage(this.tf, this.wh, this.yh, this.Pe, this.Vd), this.$b = j) : (a = new Image, a.onload = x(this.Ig, this, a), a.src = this.gh)
};
Wi.prototype.Ig = function(a) {
  this.tf = a;
  Si(this.ya)
};
function Xi(a, b, c, d, e) {
  Ai.call(this, a, b, c, d, e)
}
z(Xi, Ai);
q = Xi.prototype;
q.xe = function() {
  Si(this)
};
q.ye = function() {
  Si(this)
};
function Yi(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.dg ? b.dg.B() : new ki, e = d.X, g = d.Z;
  (e || g) && c.translate(e, g);
  (d = d.Q) && c.rotate(Math.asin(d))
}
q.i = function() {
  var a = this.P.i("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Wb = this.P.i("canvas");
  a.appendChild(this.Wb);
  this.Qg = this.J = new Ri(this);
  this.bh = 0;
  Zi(this)
};
q.getContext = function() {
  this.b() || this.i();
  this.xb || (this.xb = this.Wb.getContext("2d"), this.xb.save());
  return this.xb
};
q.fa = function(a, b) {
  this.width = a;
  this.height = b;
  Zi(this);
  Si(this)
};
q.da = function() {
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.r && (c || d)) {
    return k
  }
  var e, g;
  c && (e = this.b().parentNode, g = wg(e), a = parseFloat(a) * g.width / 100);
  d && (e = e || this.b().parentNode, g = g || wg(e), b = parseFloat(b) * g.height / 100);
  return new R(a, b)
};
function Zi(a) {
  ug(a.b(), a.width, a.height);
  var b = a.da();
  b && (ug(a.Wb, b.width, b.height), a.Wb.width = b.width, a.Wb.height = b.height, a.xb = k)
}
q.reset = function() {
  var a = this.getContext();
  a.restore();
  var b = this.da();
  b.width && b.height && a.clearRect(0, 0, b.width, b.height);
  a.save()
};
q.clear = function() {
  this.reset();
  this.J.clear();
  for(var a = this.b();1 < a.childNodes.length;) {
    a.removeChild(a.lastChild)
  }
};
function Si(a) {
  if(!a.Gi && a.r) {
    a.reset();
    if(a.na) {
      var b = a.da();
      a.getContext().scale(b.width / a.na, b.height / a.Yb)
    }
    (a.Ka || a.bb) && a.getContext().translate(-a.Ka, -a.bb);
    Yi(a, a.J);
    a.J.Ca(a.xb);
    a.getContext().restore()
  }
}
function Ti(a, b) {
  var c = a.getContext();
  Yi(a, b);
  if(!b.Eg || !b.Gg) {
    b.Ca(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof ui) {
        0 != d.lc && (c.globalAlpha = d.lc, c.fillStyle = d.ka(), b.Ca(c), c.fill(), c.globalAlpha = 1)
      }else {
        var e = c.createLinearGradient(d.Bi(), d.Di(), d.Ci(), d.Ei());
        e.addColorStop(0, d.zi());
        e.addColorStop(1, d.Ai());
        c.fillStyle = e;
        b.Ca(c);
        c.fill()
      }
    }
    if(d = b.Je) {
      b.Ca(c), c.strokeStyle = d.ka(), d = d.sb, v(d) && -1 != d.indexOf("px") && (d = parseFloat(d) / Bi(a)), c.lineWidth = d, c.stroke()
    }
  }
  a.getContext().restore()
}
q.ub = function(a, b) {
  this.append(a, b)
};
q.append = function(a, b) {
  b = b || this.J;
  b.appendChild(a);
  this.r && !this.bh && !(b != this.J && b != this.Qg) && Ti(this, a)
};
q.Gc = function(a, b, c, d, e, g, h) {
  a = new Ui(k, this, a, b, c, d, e, g);
  this.append(a, h);
  return a
};
q.drawImage = function(a, b, c, d, e, g) {
  a = new Wi(k, this, a, b, c, d, e);
  this.append(a, g);
  return a
};
q.c = function() {
  this.xb = k;
  Xi.f.c.call(this)
};
q.T = function() {
  var a = this.da();
  Xi.f.T.call(this);
  a || (Zi(this), this.dispatchEvent("resize"));
  Si(this)
};
function $i(a) {
  this.C = [];
  aj(this, a)
}
z($i, bd);
q = $i.prototype;
q.Za = k;
q.ve = k;
function aj(a, b) {
  b && (Xa(b, function(a) {
    this.sc(a, m)
  }, a), fb(a.C, b))
}
q.Ud = n("Za");
q.jf = function() {
  return eb(this.C)
};
q.nd = function(a) {
  a != this.Za && (this.sc(this.Za, m), this.Za = a, this.sc(a, j));
  this.dispatchEvent("select")
};
q.Td = function() {
  return this.Za ? Wa(this.C, this.Za) : -1
};
q.Be = function(a) {
  this.nd(this.C[a] || k)
};
q.clear = function() {
  bb(this.C);
  this.Za = k
};
q.c = function() {
  $i.f.c.call(this);
  delete this.C;
  this.Za = k
};
q.sc = function(a, b) {
  a && ("function" == typeof this.ve ? this.ve(a, b) : "function" == typeof a.Ae && a.Ae(b))
};
function bj() {
}
z(bj, Mg);
ea(bj);
var cj = 0;
bj.prototype.i = function(a) {
  var b = Og(this, a);
  return a.Ga().i("div", b ? b.join(" ") : k, ej(this, a.ia, a.kf(), a.Ga()))
};
function ej(a, b, c, d) {
  for(var e = [], g = 0, h = 0;g < c.height;g++) {
    for(var l = [], o = 0;o < c.width;o++) {
      var r = b && b[h++];
      l.push(fj(a, r, d))
    }
    e.push(d.i("tr", a.w() + "-row", l))
  }
  return a.Xe(e, d)
}
bj.prototype.Xe = function(a, b) {
  var c = b.i("table", this.w() + "-table", b.i("tbody", this.w() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Lg(c, "grid");
  return c
};
function fj(a, b, c) {
  a = c.i("td", {"class":a.w() + "-cell", id:a.w() + "-cell-" + cj++}, b);
  Lg(a, "gridcell");
  return a
}
bj.prototype.jd = function(a, b) {
  if(a) {
    var c = lf(document, "tbody", this.w() + "-body", a)[0];
    if(c) {
      var d = 0;
      Xa(c.rows, function(a) {
        Xa(a.cells, function(a) {
          tf(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var e = [], g = hf(a), h = c.rows[0].cells.length;d < b.length;) {
          var l = b[d++];
          e.push(fj(this, l, g));
          e.length == h && (l = g.i("tr", this.w() + "-row", e), c.appendChild(l), e.length = 0)
        }
        if(0 < e.length) {
          for(;e.length < h;) {
            e.push(fj(this, "", g))
          }
          l = g.i("tr", this.w() + "-row", e);
          c.appendChild(l)
        }
      }
    }
    Ag(a, j, nc)
  }
};
function gj(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && ab(cf(c), a.w() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function hj(a, b, c, d) {
  c && (c = c.parentNode, a = a.w() + "-cell-hover", d ? df(c, a) : ef(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id))
}
bj.prototype.w = p("goog-palette");
function ij(a, b, c) {
  V.call(this, a, b || bj.Na(), c)
}
z(ij, V);
q = ij.prototype;
q.o = k;
q.ib = -1;
q.L = k;
q.c = function() {
  ij.f.c.call(this);
  this.L && (this.L.g(), this.L = k);
  this.o = k
};
q.kd = function(a) {
  ij.f.kd.call(this, a);
  jj(this);
  this.L ? (this.L.clear(), aj(this.L, a)) : (this.L = new $i(a), this.L.ve = x(this.sc, this), T(Ig(this), this.L, "select", this.Lg));
  this.ib = -1
};
q.gf = p(k);
q.Tc = function(a) {
  ij.f.Tc.call(this, a);
  var b = gj(this.l, this, a.target);
  if((!b || !a.relatedTarget || !vf(b, a.relatedTarget)) && b != kj(this)) {
    a = this.ia, lj(this, a ? Wa(a, b) : -1)
  }
};
q.Sc = function(a) {
  ij.f.Sc.call(this, a);
  var b = gj(this.l, this, a.target);
  (!b || !a.relatedTarget || !vf(b, a.relatedTarget)) && b == kj(this) && hj(this.l, this, b, m)
};
q.Rc = function(a) {
  ij.f.Rc.call(this, a);
  if(this.ce() && (a = gj(this.l, this, a.target), a != kj(this))) {
    var b = this.ia;
    lj(this, b ? Wa(b, a) : -1)
  }
};
q.lb = function() {
  var a = kj(this);
  return a ? (this.nd(a), this.dispatchEvent("action")) : m
};
q.pf = function(a) {
  var b = this.ia, b = b ? b.length : 0, c = this.o.width;
  if(0 == b || !this.isEnabled()) {
    return m
  }
  if(13 == a.keyCode || 32 == a.keyCode) {
    return this.lb(a)
  }
  if(36 == a.keyCode) {
    return lj(this, 0), j
  }
  if(35 == a.keyCode) {
    return lj(this, b - 1), j
  }
  var d = 0 > this.ib ? this.Td() : this.ib;
  switch(a.keyCode) {
    case 37:
      -1 == d && (d = b);
      if(0 < d) {
        return lj(this, d - 1), a.preventDefault(), j
      }
      break;
    case 39:
      if(d < b - 1) {
        return lj(this, d + 1), a.preventDefault(), j
      }
      break;
    case 38:
      -1 == d && (d = b + c - 1);
      if(d >= c) {
        return lj(this, d - c), a.preventDefault(), j
      }
      break;
    case 40:
      if(-1 == d && (d = -c), d < b - c) {
        return lj(this, d + c), a.preventDefault(), j
      }
  }
  return m
};
q.Lg = function() {
};
q.kf = n("o");
q.fa = function(a, b) {
  this.b() && f(Error("Component already rendered"));
  this.o = ka(a) ? new R(a, b) : a;
  jj(this)
};
function kj(a) {
  var b = a.ia;
  return b && b[a.ib]
}
function lj(a, b) {
  b != a.ib && (mj(a, a.ib, m), a.ib = b, mj(a, b, j))
}
q.Td = function() {
  return this.L ? this.L.Td() : -1
};
q.Ud = function() {
  return this.L ? this.L.Ud() : k
};
q.Be = function(a) {
  this.L && this.L.Be(a)
};
q.nd = function(a) {
  this.L && this.L.nd(a)
};
function mj(a, b, c) {
  if(a.b()) {
    var d = a.ia;
    d && 0 <= b && b < d.length && hj(a.l, a, d[b], c)
  }
}
q.sc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.l.w() + "-cell-selected";
    b ? df(c, d) : ef(c, d)
  }
};
function jj(a) {
  var b = a.ia;
  if(b) {
    if(a.o && a.o.width) {
      if(b = Math.ceil(b.length / a.o.width), !ka(a.o.height) || a.o.height < b) {
        a.o.height = b
      }
    }else {
      b = Math.ceil(Math.sqrt(b.length)), a.o = new R(b, b)
    }
  }else {
    a.o = new R(0, 0)
  }
}
;function nj(a, b, c) {
  this.Dc = a || [];
  ij.call(this, k, b || bj.Na(), c);
  this.Dc = this.Dc;
  this.bd = k;
  this.jd(oj(this))
}
z(nj, ij);
nj.prototype.bd = k;
function pj(a) {
  var b = qj(rj);
  a.bd || (a.bd = Ya(a.Dc, function(a) {
    return qj(a)
  }));
  a.Be(b ? Wa(a.bd, b) : -1)
}
function oj(a) {
  return Ya(a.Dc, function(a) {
    var c = this.Ga().i("div", {"class":this.l.w() + "-colorswatch", style:"background-color:" + a});
    c.title = "#" == a.charAt(0) ? "RGB (" + vh(a).join(", ") + ")" : a;
    return c
  }, a)
}
function qj(a) {
  if(a) {
    try {
      return ph(a).Vc
    }catch(b) {
    }
  }
  return k
}
;var sj = P("whiteboard.logger");
window.onerror = function(a, b, c) {
  Zd(sj, "window.onerror: message: " + F(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function tj() {
  this.re = new Db
}
tj.prototype.lh = function(a, b) {
  sj.info("streamReset: reasonString=" + F(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  uj = k
};
tj.prototype.mh = function(a) {
  var a = Fb(a), b = a[0], c = a[1];
  1 == b ? (c = this.re.Md(zb.ec(), c), a = ob(c, 1), b = ob(c, 2), c = c.ka(), ub.Gc(a, b, 5, 5, new vi(1, "black"), new ui(c), i)) : 2 == b ? (ub.g(), vj()) : M(sj, "Strange message from server: " + F(a))
};
tj.prototype.reset = function(a) {
  sj.info("resetting with reason: " + a);
  this.H.reset(a)
};
var uj = k, ci = new td(t.window);
function wj() {
  uj && (uj.reset("idle timeout fired"), uj = k)
}
var xj = k;
function yj() {
  xj != k && ci.O.clearTimeout(xj);
  uj && (xj = ci.O.setTimeout(wj, 2592E5))
}
L(window, ["click", "focus", "keydown", "keypress"], yj, j);
function zj() {
  var a = new Zh;
  uj = new tj;
  yj();
  nd(bi(), function(b) {
    uj || f(Error("lastProto falsy?"));
    var b = new Zf(b, a, ci), c = uj;
    b.qe = x(c.mh, c);
    b.onreset = x(c.lh, c);
    uj.H = b;
    eg(uj.H, ["subprotocol:whiteboard"]);
    b.start();
    return k
  })
}
function Aj() {
  ub.g();
  vj();
  var a = uj;
  sj.info("Telling server to clear the board.");
  eg(a.H, [Gb([2, a.re.uc(new Ab)])])
}
function Bj(a) {
  var b = new Lc(a), a = b.offsetX, c = b.offsetY;
  ub.Gc(a, c, 5, 5, new vi(1, "black"), new ui(vb), i);
  var d = uj, e = vb;
  sj.info("Telling server about circle at: " + a + ", " + c + " with color " + e);
  var b = d.H, g = new zb;
  pb(g, 1, a);
  pb(g, 2, c);
  pb(g, 3, e);
  a = d.re.uc(g);
  eg(b, [Gb([1, a])])
}
function vj() {
  var a;
  a = G && !I("9") ? new Li(800, 600, i, i, i) : H && (!I("420") || oc) ? new Xi(800, 600, i, i, i) : new Ci(800, 600, i, i, i);
  a.i();
  wb = S("drawArea");
  Jg(a, wb);
  ub = a
}
var rj = "#E06666";
function Cj(a) {
  var b;
  (a = a.target.Ud()) ? (a = a.style[Ha("background-color")] || "", b = qj(a)) : b = k;
  b || (b = rj);
  vb = b;
  Xh.set("whiteboard_defaultColor", b);
  a = S("whiteboard-cp-value");
  v("background-color") ? sg(a, b, "background-color") : Ra("background-color", ra(sg, a));
  a = S("whiteboard-cp-value");
  a.title = b;
  b = ph(b).Vc;
  wf(a, b);
  b = vh(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = th(b[0], b[1], b[2]);
  v("color") ? sg(a, b, "color") : Ra("color", ra(sg, a))
}
function Dj() {
  xb = (new He(document.location)).$;
  if(yb = Boolean(Number(xb.get("logging", "0")))) {
    ce().md(Xd);
    var a = new ji(document.getElementById("log"));
    if(j != a.vf) {
      var b = ce(), c = a.$g;
      b.hc || (b.hc = []);
      b.hc.push(c);
      a.vf = j
    }
  }else {
    ce().md(Pd)
  }
  sj.info("Logger works.");
  (a = Xh.get("whiteboard_defaultColor")) && (rj = a);
  vb = rj;
  b = S("whiteboard-controls-left");
  a = S("whiteboard-controls-right");
  c = of("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  sf(b, c);
  c = of("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  sf(b, c);
  b = new nj("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.fa(8);
  Jg(b, S("whiteboard-cp"));
  L(b, "action", Cj);
  pj(b);
  Cj({target:b});
  b = new nh("Clear board");
  ch(b, "clear-board-button");
  Jg(b, a);
  L(b, "action", Aj);
  a = S("drawAreaOverlay");
  Ag(a, j);
  L(a, "click", Bj, m);
  vj();
  zj()
}
var Ej = "__whiteboard_init".split("."), Fj = t;
!(Ej[0] in Fj) && Fj.execScript && Fj.execScript("var " + Ej[0]);
for(var Gj;Ej.length && (Gj = Ej.shift());) {
  !Ej.length && ga(Dj) ? Fj[Gj] = Dj : Fj = Fj[Gj] ? Fj[Gj] : Fj[Gj] = {}
}
;})();
