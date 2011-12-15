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
  a.Oa = function() {
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
function w(a, b, c) {
  w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? pa : qa;
  return w.apply(k, arguments)
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
      var s = r.exec(l) || ["", "", ""], x = A.exec(o) || ["", "", ""];
      if(0 == s[0].length && 0 == x[0].length) {
        break
      }
      c = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == x[1].length ? 0 : parseInt(x[1], 10)) ? -1 : (0 == s[1].length ? 0 : parseInt(s[1], 10)) > (0 == x[1].length ? 0 : parseInt(x[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == x[2].length) ? -1 : (0 == s[2].length) > (0 == x[2].length) ? 1 : 0) || (s[2] < x[2] ? -1 : s[2] > x[2] ? 1 : 0)
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
  this.F = a;
  this.M = b;
  this.le = c.name;
  this.Db = !!c.Ii;
  this.cc = c.Sd;
  this.If = c.type;
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
  this.Gf = a;
  this.le = b.name || k;
  this.Ma = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.Ma[b.M] = b
  }
}
function lb(a) {
  a = Sa(a.Ma);
  ib(a, function(a, c) {
    return a.M - c.M
  });
  return a
}
;function mb() {
  this.t = {};
  this.zb = this.constructor.zb;
  var a = this.zb.Ma, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.Ma = b;
  this.Zb = this.he = k
}
function nb(a, b) {
  for(var c in a.t) {
    a.Ma[c] || b.call(a, Number(c), a.t[c])
  }
}
q = mb.prototype;
q.ec = n("zb");
q.get = function(a, b) {
  return ob(this, a.M, b)
};
q.set = function(a, b) {
  pb(this, a.M, b)
};
q.add = function(a, b) {
  var c = a.M;
  this.t[c] || (this.t[c] = []);
  this.t[c].push(b)
};
q.clear = function(a) {
  delete this.t[a.M]
};
q.m = function(a) {
  if(!a || this.constructor != a.constructor) {
    return m
  }
  for(var b = lb(this.ec()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(qb(this, d.M) != qb(a, d.M)) {
      return m
    }
    if(qb(this, d.M)) {
      var e = Qa(d), g = d.M, h = this.t[g], g = a.t[g];
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
    delete this.t[d.M];
    if(qb(a, d.M)) {
      var e = Qa(d);
      if(d.Db) {
        var g;
        g = a;
        var h = d.M;
        rb(g, g.Ma[h]);
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
    var c = b.M;
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
  var d = a.Ma[b];
  rb(a, d);
  if(d.Db) {
    return c = c || 0, 0 <= c && sb(a, b), a.t[b][c]
  }
  u(a.t[b]);
  return b in a.t ? a.t[b] : k
}
function sb(a, b) {
  return a.Ma[b].Db ? (qb(a, b) && u(a.t[b]), qb(a, b) ? a.t[b].length : 0) : qb(a, b) ? 1 : 0
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
tb(zb, {"0":{name:"Point", Eg:"demosminerva.whiteboard_messages.Point"}, 1:{name:"x", Sd:5, type:Number}, 2:{name:"y", Sd:5, type:Number}, 3:{name:"color", Sd:9, type:String}});
tb(Ab, {"0":{name:"ClearBoard", Eg:"demosminerva.whiteboard_messages.ClearBoard"}});
function Bb() {
}
Bb.prototype.Nc = function(a, b) {
  return Qa(a) ? this.uc(b) : b
};
Bb.prototype.Md = function(a) {
  new a.Gf;
  f(Error("Unimplemented"))
};
Bb.prototype.Mc = function(a, b) {
  if(Qa(a)) {
    return this.Md(a.If.zb, b)
  }
  if(!a.cf) {
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
z(Cb, Bb);
Cb.prototype.Md = function(a, b) {
  var c = new a.Gf;
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
    if(qb(a, e.M)) {
      var g = e.M;
      if(e.Db) {
        c[g] = [];
        for(var h = 0;h < sb(a, e.M);h++) {
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
          if(Eb(a.lg)) {
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
q.Qa = function() {
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
;var Yb;
function Zb(a, b) {
  this.tb = a;
  this.ob = b
}
Zb.prototype.m = function(a) {
  return a instanceof Zb && this.tb == a.tb && this.ob.join(",") == a.ob
};
Zb.prototype.u = function(a, b) {
  a.push("new SACK(", "" + this.tb, ", ");
  E(this.ob, a, b);
  a.push(")")
};
function $b() {
  this.D = new Sb
}
q = $b.prototype;
q.cb = -1;
q.o = 0;
q.append = function(a) {
  var b = Xb(a);
  this.D.set(this.cb + 1, [a, b]);
  this.cb += 1;
  this.o += b
};
q.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
q.u = function(a) {
  a.push("<Queue with ", "" + this.D.ca(), " item(s), counter=#", "" + this.cb, ", size=", "" + this.o, ">")
};
function ac(a) {
  a = a.D.xa();
  ib(a);
  return a
}
q.kf = function(a) {
  for(var b = ac(this), c = [], d = 0;d < b.length;d++) {
    var e = b[d];
    (a == k || e >= a) && c.push([e, this.D.get(e)[0]])
  }
  return c
};
function bc() {
  this.ab = new Sb
}
bc.prototype.kb = -1;
bc.prototype.o = 0;
function cc(a) {
  var b = a.ab.xa();
  ib(b);
  return new Zb(a.kb, b)
}
var dc = {};
function ec() {
  return j
}
;var fc, gc, hc, ic, jc;
function kc() {
  return t.navigator ? t.navigator.userAgent : k
}
jc = ic = hc = gc = fc = m;
var lc;
if(lc = kc()) {
  var mc = t.navigator;
  fc = 0 == lc.indexOf("Opera");
  gc = !fc && -1 != lc.indexOf("MSIE");
  ic = (hc = !fc && -1 != lc.indexOf("WebKit")) && -1 != lc.indexOf("Mobile");
  jc = !fc && !hc && "Gecko" == mc.product
}
var nc = fc, G = gc, oc = jc, H = hc, pc = ic, qc = t.navigator, rc = -1 != (qc && qc.platform || "").indexOf("Mac"), sc;
a: {
  var tc = "", uc;
  if(nc && t.opera) {
    var vc = t.opera.version, tc = "function" == typeof vc ? vc() : vc
  }else {
    if(oc ? uc = /rv\:([^\);]+)(\)|;)/ : G ? uc = /MSIE\s+([^\);]+)(\)|;)/ : H && (uc = /WebKit\/(\S+)/), uc) {
      var wc = uc.exec(kc()), tc = wc ? wc[1] : ""
    }
  }
  if(G) {
    var xc, yc = t.document;
    xc = yc ? yc.documentMode : i;
    if(xc > parseFloat(tc)) {
      sc = "" + xc;
      break a
    }
  }
  sc = tc
}
var zc = {};
function I(a) {
  return zc[a] || (zc[a] = 0 <= Ea(sc, a))
}
var Ac = {};
function Bc() {
  return Ac[9] || (Ac[9] = G && document.documentMode && 9 <= document.documentMode)
}
;function Cc() {
}
var Dc = 0;
q = Cc.prototype;
q.key = 0;
q.nb = m;
q.Cd = m;
q.ic = function(a, b, c, d, e, g) {
  la(a) ? this.yf = j : a && a.handleEvent && la(a.handleEvent) ? this.yf = m : f(Error("Invalid listener argument"));
  this.Hb = a;
  this.Rf = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Uc = g;
  this.Cd = m;
  this.key = ++Dc;
  this.nb = m
};
q.handleEvent = function(a) {
  return this.yf ? this.Hb.call(this.Uc || this.src, a) : this.Hb.handleEvent.call(this.Hb, a)
};
var Ec = !G || Bc(), Fc = !G || Bc(), Gc = G && !I("8");
!H || I("528");
oc && I("1.9b") || G && I("8") || nc && I("9.5") || H && I("528");
!oc || I("8");
var Hc = {Fh:"click", Kh:"dblclick", ei:"mousedown", ii:"mouseup", hi:"mouseover", gi:"mouseout", fi:"mousemove", si:"selectstart", Zh:"keypress", Yh:"keydown", $h:"keyup", Dh:"blur", Sh:"focus", Lh:"deactivate", Th:G ? "focusin" : "DOMFocusIn", Uh:G ? "focusout" : "DOMFocusOut", Eh:"change", ri:"select", ti:"submit", Xh:"input", ni:"propertychange", Ph:"dragstart", Mh:"dragenter", Oh:"dragover", Nh:"dragleave", Qh:"drop", xi:"touchstart", wi:"touchmove", vi:"touchend", ui:"touchcancel", Hh:"contextmenu", 
Rh:"error", Wh:"help", ai:"load", bi:"losecapture", oi:"readystatechange", pi:"resize", qi:"scroll", zi:"unload", Vh:"hashchange", ji:"pagehide", ki:"pageshow", mi:"popstate", Ih:"copy", li:"paste", Jh:"cut", Ah:"beforecopy", Bh:"beforecut", Ch:"beforepaste", di:"message", Gh:"connect", yi:H ? "webkitTransitionEnd" : nc ? "oTransitionEnd" : "transitionend"};
function J() {
}
J.prototype.va = m;
J.prototype.g = function() {
  this.va || (this.va = j, this.c())
};
J.prototype.c = function() {
  this.vg && Ic.apply(k, this.vg)
};
function Ic(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? Ic.apply(k, d) : d && "function" == typeof d.g && d.g()
  }
}
;function Jc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
z(Jc, J);
q = Jc.prototype;
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
function Kc(a) {
  a.stopPropagation()
}
;function Lc(a) {
  Lc[" "](a);
  return a
}
Lc[" "] = da;
function Mc(a, b) {
  a && this.ic(a, b)
}
z(Mc, Jc);
var Nc = [1, 4, 2];
q = Mc.prototype;
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
q.Fa = k;
q.ic = function(a, b) {
  var c = this.type = a.type;
  Jc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(oc) {
      var e;
      a: {
        try {
          Lc(d.nodeName);
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
  this.se = rc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Fa = a;
  delete this.qc;
  delete this.mb
};
function Oc(a) {
  return Ec ? 0 == a.Fa.button : "click" == a.type ? j : !!(a.Fa.button & Nc[0])
}
q.stopPropagation = function() {
  Mc.f.stopPropagation.call(this);
  this.Fa.stopPropagation ? this.Fa.stopPropagation() : this.Fa.cancelBubble = j
};
q.preventDefault = function() {
  Mc.f.preventDefault.call(this);
  var a = this.Fa;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, Gc) {
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
  Mc.f.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Fa = k
};
var Pc = {}, K = {}, Qc = {}, Rc = {};
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
    g = Sc();
    g.src = a;
    h = new Cc;
    h.ic(c, g, a, b, d, e);
    c = h.key;
    g.key = c;
    o.push(h);
    Pc[c] = h;
    Qc[l] || (Qc[l] = []);
    Qc[l].push(h);
    a.addEventListener ? (a == t || !a.Jd) && a.addEventListener(b, g, d) : a.attachEvent(b in Rc ? Rc[b] : Rc[b] = "on" + b, g);
    return c
  }
  f(Error("Invalid event type"))
}
function Sc() {
  var a = Tc, b = Fc ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Uc(a, b, c, d, e) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      Uc(a, b[g], c, d, e)
    }
    return k
  }
  a = L(a, b, c, d, e);
  Pc[a].Cd = j;
  return a
}
function Vc(a, b, c, d, e) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      Vc(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = Wc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Hb == c && a[g].capture == d && a[g].Uc == e) {
          Xc(a[g].key);
          break
        }
      }
    }
  }
}
function Xc(a) {
  if(!Pc[a]) {
    return m
  }
  var b = Pc[a];
  if(b.nb) {
    return m
  }
  var c = b.src, d = b.type, e = b.Rf, g = b.capture;
  c.removeEventListener ? (c == t || !c.Jd) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in Rc ? Rc[d] : Rc[d] = "on" + d, e);
  c = ma(c);
  e = K[d][g][c];
  if(Qc[c]) {
    var h = Qc[c];
    cb(h, b);
    0 == h.length && delete Qc[c]
  }
  b.nb = j;
  e.Kf = j;
  Yc(d, g, c, e);
  delete Pc[a];
  return j
}
function Yc(a, b, c, d) {
  if(!d.ad && d.Kf) {
    for(var e = 0, g = 0;e < d.length;e++) {
      d[e].nb ? d[e].Rf.src = k : (e != g && (d[g] = d[e]), g++)
    }
    d.length = g;
    d.Kf = m;
    0 == g && (delete K[a][b][c], K[a][b].d--, 0 == K[a][b].d && (delete K[a][b], K[a].d--), 0 == K[a].d && delete K[a])
  }
}
function Zc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Ra(Qc, function(a) {
      for(var e = a.length - 1;0 <= e;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          Xc(g.key), c++
        }
      }
    })
  }else {
    if(a = ma(a), Qc[a]) {
      for(var a = Qc[a], e = a.length - 1;0 <= e;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          Xc(g.key), c++
        }
      }
    }
  }
}
function Wc(a, b, c) {
  var d = K;
  return b in d && (d = d[b], c in d && (d = d[c], a = ma(a), d[a])) ? d[a] : k
}
function $c(a, b, c, d, e) {
  var g = 1, b = ma(b);
  if(a[b]) {
    a.la--;
    a = a[b];
    a.ad ? a.ad++ : a.ad = 1;
    try {
      for(var h = a.length, l = 0;l < h;l++) {
        var o = a[l];
        o && !o.nb && (g &= ad(o, e) !== m)
      }
    }finally {
      a.ad--, Yc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function ad(a, b) {
  var c = a.handleEvent(b);
  a.Cd && Xc(a.key);
  return c
}
function Tc(a, b) {
  if(!Pc[a]) {
    return j
  }
  var c = Pc[a], d = c.type, e = K;
  if(!(d in e)) {
    return j
  }
  var e = e[d], g, h;
  if(!Fc) {
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
    r = new Mc;
    r.ic(g, this);
    g = j;
    try {
      if(l) {
        for(var s = [], x = r.currentTarget;x;x = x.parentNode) {
          s.push(x)
        }
        h = e[j];
        h.la = h.d;
        for(var C = s.length - 1;!r.mb && 0 <= C && h.la;C--) {
          r.currentTarget = s[C], g &= $c(h, s[C], d, j, r)
        }
        if(o) {
          h = e[m];
          h.la = h.d;
          for(C = 0;!r.mb && C < s.length && h.la;C++) {
            r.currentTarget = s[C], g &= $c(h, s[C], d, m, r)
          }
        }
      }else {
        g = ad(c, r)
      }
    }finally {
      s && (s.length = 0), r.g()
    }
    return g
  }
  d = new Mc(b, this);
  try {
    g = ad(c, d)
  }finally {
    d.g()
  }
  return g
}
var bd = 0;
function cd() {
}
z(cd, J);
q = cd.prototype;
q.Jd = j;
q.dd = k;
q.ze = aa("dd");
q.addEventListener = function(a, b, c, d) {
  L(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Vc(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = K;
  if(b in c) {
    if(v(a)) {
      a = new Jc(a, this)
    }else {
      if(a instanceof Jc) {
        a.target = a.target || this
      }else {
        var d = a, a = new Jc(b, this);
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
        a.currentTarget = e[h], d &= $c(g, e[h], a.type, j, a) && a.qc != m
      }
    }
    if(m in c) {
      if(g = c[m], g.la = g.d, b) {
        for(h = 0;!a.mb && h < e.length && g.la;h++) {
          a.currentTarget = e[h], d &= $c(g, e[h], a.type, m, a) && a.qc != m
        }
      }else {
        for(e = this;!a.mb && e && g.la;e = e.dd) {
          a.currentTarget = e, d &= $c(g, e, a.type, m, a) && a.qc != m
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
  cd.f.c.call(this);
  Zc(this);
  this.dd = k
};
function dd(a, b) {
  this.Xc = a || 1;
  this.xc = b || ed;
  this.Ad = w(this.oh, this);
  this.ge = y()
}
z(dd, cd);
dd.prototype.enabled = m;
var ed = t.window;
q = dd.prototype;
q.sa = k;
q.oh = function() {
  if(this.enabled) {
    var a = y() - this.ge;
    0 < a && a < 0.8 * this.Xc ? this.sa = this.xc.setTimeout(this.Ad, this.Xc - a) : (this.dispatchEvent(fd), this.enabled && (this.sa = this.xc.setTimeout(this.Ad, this.Xc), this.ge = y()))
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
  dd.f.c.call(this);
  this.stop();
  delete this.xc
};
var fd = "tick";
bd++;
bd++;
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
q.Na = m;
q.fc = m;
q.mc = 0;
q.Ee = m;
q.rg = m;
q.Bd = 0;
q.cancel = function(a) {
  if(this.Na) {
    this.pc instanceof gd && this.pc.cancel()
  }else {
    if(this.F) {
      var b = this.F;
      delete this.F;
      a ? b.cancel(a) : (b.Bd--, 0 >= b.Bd && b.cancel())
    }
    this.Re ? this.Re.call(this.$e, this) : this.Ee = j;
    this.Na || this.bc(new hd)
  }
};
q.Ue = function(a, b) {
  id(this, a, b);
  this.mc--;
  0 == this.mc && this.Na && jd(this)
};
function id(a, b, c) {
  a.Na = j;
  a.pc = c;
  a.fc = !b;
  jd(a)
}
function kd(a) {
  a.Na && (a.Ee || f(new ld), a.Ee = m)
}
function nd(a, b) {
  kd(a);
  id(a, j, b)
}
q.bc = function(a) {
  kd(this);
  id(this, m, a)
};
function od(a, b) {
  pd(a, b, k, i)
}
function pd(a, b, c, d) {
  a.Cc.push([b, c, d]);
  a.Na && jd(a)
}
function qd(a, b) {
  pd(a, b, b, i)
}
function rd(a) {
  return Za(a.Cc, function(a) {
    return la(a[1])
  })
}
function jd(a) {
  a.Me && a.Na && rd(a) && (t.clearTimeout(a.Me), delete a.Me);
  a.F && (a.F.Bd--, delete a.F);
  for(var b = a.pc, c = m, d = m;a.Cc.length && 0 == a.mc;) {
    var e = a.Cc.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.fc ? h : g) {
      try {
        var l = g.call(e || a.$e, b);
        ga(l) && (a.fc = a.fc && (l == b || l instanceof Error), a.pc = b = l);
        b instanceof gd && (d = j, a.mc++)
      }catch(o) {
        b = o, a.fc = j, rd(a) || (c = j)
      }
    }
  }
  a.pc = b;
  d && a.mc && (pd(b, w(a.Ue, a, j), w(a.Ue, a, m)), b.rg = j);
  c && (a.Me = t.setTimeout(function() {
    ga(b.message) && b.stack && (b.message += "\n" + b.stack);
    f(b)
  }, 0))
}
function sd(a) {
  var b = new gd;
  nd(b, a);
  return b
}
function td(a) {
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
function ud(a) {
  this.P = a;
  this.Hc = [];
  this.df = [];
  this.qg = w(this.sh, this)
}
ud.prototype.sa = k;
function vd(a, b, c, d) {
  a.Hc.push([b, c, d]);
  a.sa == k && (a.sa = a.P.setTimeout(a.qg, 0))
}
ud.prototype.sh = function() {
  this.sa = k;
  var a = this.Hc;
  this.Hc = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], e = c[1], c = c[2];
    try {
      d.apply(e, c)
    }catch(g) {
      this.P.setTimeout(function() {
        f(g)
      }, 0)
    }
  }
  if(0 == this.Hc.length) {
    a = this.df;
    this.df = [];
    for(b = 0;b < a.length;b++) {
      nd(a[b], k)
    }
  }
};
var wd = new ud(t.window);
function xd(a, b) {
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
        a.push('<property id="', d, '">'), xd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', xa(c), '">'), xd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function yd(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, e = arguments;
  d.push("<arguments>");
  for(var g = e.length, h = 1;h < g;h++) {
    xd(d, e[h])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;function zd() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ y()).toString(36)
}
function Ad(a) {
  return a.substr(0, a.length - 1)
}
var Bd = /^(0|[1-9]\d*)$/, Cd = /^(0|\-?[1-9]\d*)$/;
function Dd(a) {
  var b = Ed;
  return Bd.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function Fd(a) {
  this.z = new Sb;
  a && this.xd(a)
}
function Gd(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ma(a) : b.substr(0, 1) + a
}
q = Fd.prototype;
q.ca = function() {
  return this.z.ca()
};
q.add = function(a) {
  this.z.set(Gd(a), a)
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
  return this.z.remove(Gd(a))
};
q.clear = function() {
  this.z.clear()
};
q.Qa = function() {
  return this.z.Qa()
};
q.contains = function(a) {
  return this.z.ha(Gd(a))
};
q.ea = function() {
  return this.z.ea()
};
q.B = function() {
  return new Fd(this)
};
q.m = function(a) {
  return this.ca() == Nb(a) && Hd(this, a)
};
function Hd(a, b) {
  var c = Nb(b);
  if(a.ca() > c) {
    return m
  }
  !(b instanceof Fd) && 5 < c && (b = new Fd(b));
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
;function Id(a) {
  return Jd(a || arguments.callee.caller, [])
}
function Jd(a, b) {
  var c = [];
  if(ab(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Kd(a) + "(");
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
            g = (g = Kd(g)) ? g : "[fn]";
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
        c.push(Jd(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Kd(a) {
  if(Ld[a]) {
    return Ld[a]
  }
  a = "" + a;
  if(!Ld[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Ld[a] = b ? b[1] : "[Anonymous]"
  }
  return Ld[a]
}
var Ld = {};
function Md(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Md.prototype.Qd = k;
Md.prototype.Pd = k;
var Nd = 0;
Md.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || Nd++;
  this.cg = d || y();
  this.Gb = a;
  this.Hf = b;
  this.Sg = c;
  delete this.Qd;
  delete this.Pd
};
Md.prototype.md = aa("Gb");
function Od(a) {
  this.le = a
}
Od.prototype.F = k;
Od.prototype.Gb = k;
Od.prototype.S = k;
Od.prototype.hc = k;
function Pd(a, b) {
  this.name = a;
  this.value = b
}
Pd.prototype.toString = n("name");
var Qd = new Pd("OFF", Infinity), Rd = new Pd("SHOUT", 1200), Sd = new Pd("SEVERE", 1E3), Td = new Pd("WARNING", 900), Ud = new Pd("INFO", 800), Vd = new Pd("CONFIG", 700), Wd = new Pd("FINE", 500), Xd = new Pd("FINEST", 300), Yd = new Pd("ALL", 0);
q = Od.prototype;
q.getParent = n("F");
q.md = aa("Gb");
function Zd(a) {
  if(a.Gb) {
    return a.Gb
  }
  if(a.F) {
    return Zd(a.F)
  }
  Ja("Root logger has no level set.");
  return k
}
q.log = function(a, b, c) {
  if(a.value >= Zd(this).value) {
    a = this.Gg(a, b, c);
    b = "log:" + a.Hf;
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
q.Gg = function(a, b, c) {
  var d = new Md(a, "" + b, this.le);
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
          o = c.lineNumber || c.Gi || "Not available"
        }catch(s) {
          o = "Not available", A = j
        }
        try {
          r = c.fileName || c.filename || c.sourceURL || l
        }catch(x) {
          r = "Not available", A = j
        }
        h = A || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:o, fileName:r, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + xa(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + xa(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + xa(Id(g) + "-> ")
    }catch(C) {
      e = "Exception trying to expose exception! You win, we lose. " + C
    }
    d.Pd = e
  }
  return d
};
function $d(a, b) {
  a.log(Sd, b, i)
}
function M(a, b) {
  a.log(Td, b, i)
}
q.info = function(a, b) {
  this.log(Ud, a, b)
};
function N(a, b) {
  a.log(Wd, b, i)
}
function O(a, b) {
  a.log(Xd, b, i)
}
var ae = {}, be = k;
function ce() {
  be || (be = new Od(""), ae[""] = be, be.md(Vd))
}
function de() {
  ce();
  return be
}
function P(a) {
  ce();
  var b;
  if(!(b = ae[a])) {
    b = new Od(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = P(a.substr(0, c));
    c.S || (c.S = {});
    c.S[d] = b;
    b.F = c;
    ae[a] = b
  }
  return b
}
;function ee(a, b) {
  this.U = "_" + zd();
  this.sd = a;
  this.Va = b;
  this.$a = a.$a
}
z(ee, J);
q = ee.prototype;
q.Ib = j;
q.Hd = m;
q.a = P("cw.net.FlashSocket");
q.u = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.U);
  a.push("'>")
};
function fe(a, b, c) {
  "frames" == b ? (a = a.Va, ge(a.O), he(a.O, c)) : "stillreceiving" == b ? (c = a.Va, O(c.a, "onstillreceiving"), ge(c.O)) : "connect" == b ? (c = a.Va, c.a.info("onconnect"), ge(c.O), a = c.Ub, c.Ub = k, a.length && (O(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.pd.Ac(a))) : "close" == b ? (a.Ib = m, a.g()) : "ioerror" == b ? (a.Ib = m, b = a.Va, M(b.a, "onioerror: " + F(c)), ie(b.O, m), a.g()) : "securityerror" == b ? (a.Ib = m, b = a.Va, M(b.a, "onsecurityerror: " + F(c)), 
  ie(b.O, m), a.g()) : f(Error("bad event: " + b))
}
function je(a) {
  a.Hd = j;
  a.Ib = m;
  a.g()
}
q.Fd = function(a, b) {
  try {
    var c = this.$a.CallFunction(yd("__FC_connect", this.U, a, b, "<int32/>\n"))
  }catch(d) {
    return $d(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), je(this)
  }
  '"OK"' != c && f(Error("__FC_connect failed? ret: " + c))
};
q.Ac = function(a) {
  try {
    var b = this.$a.CallFunction(yd("__FC_writeFrames", this.U, a))
  }catch(c) {
    return $d(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), je(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (M(this.a, "Flash no longer knows of " + this.U + "; disposing."), this.g()) : f(Error("__FC_writeFrames failed? ret: " + b)))
};
q.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.Ib);
  ee.f.c.call(this);
  var a = this.$a;
  delete this.$a;
  if(this.Ib) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(yd("__FC_close", this.U)))
    }catch(b) {
      $d(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Hd = j
    }
  }
  if(this.Hd) {
    a = this.Va, M(a.a, "oncrash"), ie(a.O, j)
  }else {
    this.Va.onclose()
  }
  delete this.Va;
  delete this.sd.Bb[this.U]
};
function ke(a, b) {
  this.K = a;
  this.$a = b;
  this.Bb = {};
  this.Dd = "__FST_" + zd();
  t[this.Dd] = w(this.yg, this);
  var c = b.CallFunction(yd("__FC_setCallbackFunc", this.Dd));
  '"OK"' != c && f(Error("__FC_setCallbackFunc failed? ret: " + c))
}
z(ke, J);
q = ke.prototype;
q.a = P("cw.net.FlashSocketTracker");
q.u = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  E(this.Bb, a, b);
  a.push(">")
};
q.Id = function(a) {
  a = new ee(this, a);
  return this.Bb[a.U] = a
};
q.wg = function(a, b, c, d) {
  var e = this.Bb[a];
  e ? "frames" == b && d ? (fe(e, "ioerror", "FlashConnector hadError while handling data."), e.g()) : fe(e, b, c) : M(this.a, "Cannot dispatch because we have no instance: " + F([a, b, c, d]))
};
q.yg = function(a, b, c, d) {
  try {
    vd(this.K, this.wg, this, [a, b, c, d])
  }catch(e) {
    t.window.setTimeout(function() {
      f(e)
    }, 0)
  }
};
q.c = function() {
  ke.f.c.call(this);
  for(var a = Sa(this.Bb);a.length;) {
    a.pop().g()
  }
  delete this.Bb;
  delete this.$a;
  t[this.Dd] = i
};
function le(a) {
  this.O = a;
  this.Ub = []
}
z(le, J);
q = le.prototype;
q.a = P("cw.net.FlashSocketConduit");
q.Ac = function(a) {
  this.Ub ? (O(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Ub.push.apply(this.Ub, a)) : (O(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.pd.Ac(a))
};
q.Fd = function(a, b) {
  this.pd.Fd(a, b)
};
q.onclose = function() {
  this.a.info("onclose");
  ie(this.O, m)
};
q.c = function() {
  this.a.info("in disposeInternal.");
  le.f.c.call(this);
  this.pd.g();
  delete this.O
};
function me() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function ne(a) {
  return a * Math.PI / 180
}
;var Ed = Math.pow(2, 53);
var oe = {lg:p("<cw.eq.Wildcard>")};
function pe(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function qe(a, b, c) {
  var d = fa(a), e = fa(b);
  if(a == oe || b == oe) {
    return j
  }
  if(a != k && "function" == typeof a.m) {
    return c && c.push("running custom equals function on left object"), a.m(b, c)
  }
  if(b != k && "function" == typeof b.m) {
    return c && c.push("running custom equals function on right object"), b.m(a, c)
  }
  if(pe(d) || pe(e)) {
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
                if(!qe(a[d], b[d], c)) {
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
          if(a.kg == ec && b.kg == ec) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!qe(a[g], b[g], c)) {
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
function re() {
  var a = [];
  this.pa(a);
  return a.join("")
}
function se() {
}
se.prototype.m = function(a, b) {
  return!(a instanceof se) ? m : qe(te(this), te(a), b)
};
se.prototype.u = function(a, b) {
  a.push("<HelloFrame properties=");
  E(te(this), a, b);
  a.push(">")
};
function te(a) {
  return[a.Pb, a.Qf, a.tf, a.Tf, a.wc, a.He, a.Jf, a.Ff, a.ke, a.Df, a.gg, a.bg, a.ra, a.$c]
}
se.prototype.ja = re;
se.prototype.pa = function(a) {
  var b = {};
  b.tnum = this.Pb;
  b.ver = this.Qf;
  b.format = this.tf;
  b["new"] = this.Tf;
  b.id = this.wc;
  b.ming = this.He;
  b.pad = this.Jf;
  b.maxb = this.Ff;
  ga(this.ke) && (b.maxt = this.ke);
  b.maxia = this.Df;
  b.tcpack = this.gg;
  b.eeds = this.bg;
  b.sack = this.ra instanceof Zb ? Ad((new ue(this.ra)).ja()) : this.ra;
  b.seenack = this.$c instanceof Zb ? Ad((new ue(this.$c)).ja()) : this.$c;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push(Gb(b), "H")
};
function ve(a) {
  this.Ob = a
}
ve.prototype.m = function(a) {
  return a instanceof ve && this.Ob == a.Ob
};
ve.prototype.u = function(a, b) {
  a.push("new StringFrame(");
  E(this.Ob, a, b);
  a.push(")")
};
ve.prototype.ja = re;
ve.prototype.pa = function(a) {
  a.push(this.Ob, " ")
};
function we(a) {
  this.Ec = a
}
we.prototype.m = function(a) {
  return a instanceof we && this.Ec == a.Ec
};
we.prototype.u = function(a, b) {
  a.push("new CommentFrame(");
  E(this.Ec, a, b);
  a.push(")")
};
we.prototype.ja = re;
we.prototype.pa = function(a) {
  a.push(this.Ec, "^")
};
function xe(a) {
  this.tc = a
}
xe.prototype.m = function(a) {
  return a instanceof xe && this.tc == a.tc
};
xe.prototype.u = function(a) {
  a.push("new SeqNumFrame(", "" + this.tc, ")")
};
xe.prototype.ja = re;
xe.prototype.pa = function(a) {
  a.push("" + this.tc, "N")
};
function ye(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = Ed;
    if(Cd.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var g = Dd(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Zb(a, c)
}
function ue(a) {
  this.ra = a
}
ue.prototype.m = function(a, b) {
  return a instanceof ue && this.ra.m(a.ra, b)
};
ue.prototype.u = function(a, b) {
  a.push("new SackFrame(");
  E(this.ra, a, b);
  a.push(")")
};
ue.prototype.ja = re;
ue.prototype.pa = function(a) {
  var b = this.ra;
  a.push(b.ob.join(","), "|", "" + b.tb);
  a.push("A")
};
function ze(a) {
  this.kc = a
}
ze.prototype.m = function(a, b) {
  return a instanceof ze && this.kc.m(a.kc, b)
};
ze.prototype.u = function(a, b) {
  a.push("new StreamStatusFrame(");
  E(this.kc, a, b);
  a.push(")")
};
ze.prototype.ja = re;
ze.prototype.pa = function(a) {
  var b = this.kc;
  a.push(b.ob.join(","), "|", "" + b.tb);
  a.push("T")
};
function Ae() {
}
Ae.prototype.u = function(a) {
  a.push("new StreamCreatedFrame()")
};
Ae.prototype.m = function(a) {
  return a instanceof Ae
};
Ae.prototype.ja = re;
Ae.prototype.pa = function(a) {
  a.push("C")
};
function Be() {
}
Be.prototype.u = function(a) {
  a.push("new YouCloseItFrame()")
};
Be.prototype.m = function(a) {
  return a instanceof Be
};
Be.prototype.ja = re;
Be.prototype.pa = function(a) {
  a.push("Y")
};
function Ce(a, b) {
  this.nc = a;
  this.Tb = b
}
Ce.prototype.m = function(a) {
  return a instanceof Ce && this.nc == a.nc && this.Tb == a.Tb
};
Ce.prototype.u = function(a, b) {
  a.push("new ResetFrame(");
  E(this.nc, a, b);
  a.push(", ", "" + this.Tb, ")")
};
Ce.prototype.ja = re;
Ce.prototype.pa = function(a) {
  a.push(this.nc, "|", "" + Number(this.Tb), "!")
};
var De = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Ee(a) {
  this.reason = a
}
Ee.prototype.m = function(a) {
  return a instanceof Ee && this.reason == a.reason
};
Ee.prototype.u = function(a, b) {
  a.push("new TransportKillFrame(");
  E(this.reason, a, b);
  a.push(")")
};
Ee.prototype.ja = re;
Ee.prototype.pa = function(a) {
  a.push(this.reason, "K")
};
function Fe(a) {
  a || f(new Q("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new ve(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = ye(Ad(a)), a == k && f(new Q("bad sack")), new ue(a)
  }
  if("N" == b) {
    return a = Dd(Ad(a)), a == k && f(new Q("bad seqNum")), new xe(a)
  }
  if("T" == b) {
    return a = ye(Ad(a)), a == k && f(new Q("bad lastSackSeen")), new ze(a)
  }
  if("Y" == b) {
    return 1 != a.length && f(new Q("leading garbage")), new Be
  }
  if("^" == b) {
    return new we(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && f(new Q("leading garbage")), new Ae
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && f(new Q("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && f(new Q("bad applicationLevel")), new Ce(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = De[a], a == k && f(new Q("unknown kill reason: " + a)), new Ee(a)
  }
  f(new Q("Invalid frame type " + b))
}
;var Ge = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function He(a, b) {
  var c = a.match(Ge), d = b.match(Ge);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Ie(a, b) {
  var c;
  a instanceof Ie ? (this.Lb(b == k ? a.za : b), Je(this, a.Ba), Ke(this, a.rb), Le(this, a.oa), Me(this, a.Ua), this.pb(a.A), Ne(this, a.$.B()), Oe(this, a.fb)) : a && (c = ("" + a).match(Ge)) ? (this.Lb(!!b), Je(this, c[1] || "", j), Ke(this, c[2] || "", j), Le(this, c[3] || "", j), Me(this, c[4]), this.pb(c[5] || "", j), Ne(this, c[6] || "", j), Oe(this, c[7] || "", j)) : (this.Lb(!!b), this.$ = new Pe(k, this, this.za))
}
q = Ie.prototype;
q.Ba = "";
q.rb = "";
q.oa = "";
q.Ua = k;
q.A = "";
q.fb = "";
q.Qg = m;
q.za = m;
q.toString = function() {
  if(this.ua) {
    return this.ua
  }
  var a = [];
  this.Ba && a.push(Qe(this.Ba, Re), ":");
  this.oa && (a.push("//"), this.rb && a.push(Qe(this.rb, Re), "@"), a.push(v(this.oa) ? encodeURIComponent(this.oa) : k), this.Ua != k && a.push(":", "" + this.Ua));
  this.A && (this.oa && "/" != this.A.charAt(0) && a.push("/"), a.push(Qe(this.A, "/" == this.A.charAt(0) ? Se : Te)));
  var b = "" + this.$;
  b && a.push("?", b);
  this.fb && a.push("#", Qe(this.fb, Ue));
  return this.ua = a.join("")
};
q.B = function() {
  var a = this.Ba, b = this.rb, c = this.oa, d = this.Ua, e = this.A, g = this.$.B(), h = this.fb, l = new Ie(k, this.za);
  a && Je(l, a);
  b && Ke(l, b);
  c && Le(l, c);
  d && Me(l, d);
  e && l.pb(e);
  g && Ne(l, g);
  h && Oe(l, h);
  return l
};
function Je(a, b, c) {
  Ve(a);
  delete a.ua;
  a.Ba = c ? b ? decodeURIComponent(b) : "" : b;
  a.Ba && (a.Ba = a.Ba.replace(/:$/, ""))
}
function Ke(a, b, c) {
  Ve(a);
  delete a.ua;
  a.rb = c ? b ? decodeURIComponent(b) : "" : b
}
function Le(a, b, c) {
  Ve(a);
  delete a.ua;
  a.oa = c ? b ? decodeURIComponent(b) : "" : b
}
function Me(a, b) {
  Ve(a);
  delete a.ua;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && f(Error("Bad port number " + b)), a.Ua = b) : a.Ua = k
}
q.pb = function(a, b) {
  Ve(this);
  delete this.ua;
  this.A = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function Ne(a, b, c) {
  Ve(a);
  delete a.ua;
  b instanceof Pe ? (a.$ = b, a.$.Ne = a, a.$.Lb(a.za)) : (c || (b = Qe(b, We)), a.$ = new Pe(b, a, a.za))
}
function Oe(a, b, c) {
  Ve(a);
  delete a.ua;
  a.fb = c ? b ? decodeURIComponent(b) : "" : b
}
function Ve(a) {
  a.Qg && f(Error("Tried to modify a read-only Uri"))
}
q.Lb = function(a) {
  this.za = a;
  this.$ && this.$.Lb(a);
  return this
};
function Xe(a) {
  return a instanceof Ie ? a.B() : new Ie(a, i)
}
var Ye = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Qe(a, b) {
  var c = k;
  v(a) && (c = a, Ye.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, Ze)));
  return c
}
function Ze(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Re = /[#\/\?@]/g, Te = /[\#\?:]/g, Se = /[\#\?]/g, We = /[\#\?@]/g, Ue = /#/g;
function Pe(a, b, c) {
  this.Ea = a || k;
  this.Ne = b || k;
  this.za = !!c
}
function $e(a) {
  if(!a.p && (a.p = new Sb, a.d = 0, a.Ea)) {
    for(var b = a.Ea.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, g = k;
      0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = af(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
q = Pe.prototype;
q.p = k;
q.d = k;
q.ca = function() {
  $e(this);
  return this.d
};
q.add = function(a, b) {
  $e(this);
  bf(this);
  a = af(this, a);
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
  $e(this);
  a = af(this, a);
  if(this.p.ha(a)) {
    bf(this);
    var b = this.p.get(a);
    u(b) ? this.d -= b.length : this.d--;
    return this.p.remove(a)
  }
  return m
};
q.clear = function() {
  bf(this);
  this.p && this.p.clear();
  this.d = 0
};
q.Qa = function() {
  $e(this);
  return 0 == this.d
};
q.ha = function(a) {
  $e(this);
  a = af(this, a);
  return this.p.ha(a)
};
q.Fc = function(a) {
  var b = this.ea();
  return ab(b, a)
};
q.xa = function() {
  $e(this);
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
  $e(this);
  if(a) {
    if(a = af(this, a), this.ha(a)) {
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
  $e(this);
  bf(this);
  a = af(this, a);
  if(this.ha(a)) {
    var c = this.p.get(a);
    u(c) ? this.d -= c.length : this.d--
  }
  this.p.set(a, b);
  this.d++;
  return this
};
q.get = function(a, b) {
  $e(this);
  a = af(this, a);
  if(this.ha(a)) {
    var c = this.p.get(a);
    return u(c) ? c[0] : c
  }
  return b
};
q.toString = function() {
  if(this.Ea) {
    return this.Ea
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
  return this.Ea = a.join("")
};
function bf(a) {
  delete a.yb;
  delete a.Ea;
  a.Ne && delete a.Ne.ua
}
q.B = function() {
  var a = new Pe;
  this.yb && (a.yb = this.yb);
  this.Ea && (a.Ea = this.Ea);
  this.p && (a.p = this.p.B());
  return a
};
function af(a, b) {
  var c = "" + b;
  a.za && (c = c.toLowerCase());
  return c
}
q.Lb = function(a) {
  a && !this.za && ($e(this), bf(this), Qb(this.p, function(a, c) {
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
var cf;
function df(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function ef(a, b) {
  var c = df(a), d = hb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    ab(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function ff(a, b) {
  var c = df(a), d = hb(arguments, 1), e;
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
q.Qa = function() {
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
var gf = !G || Bc();
!oc && !G || G && Bc() || oc && I("1.9.1");
var hf = G && !I("9");
function jf(a) {
  return a ? new kf(lf(a)) : cf || (cf = new kf)
}
function S(a) {
  return v(a) ? document.getElementById(a) : a
}
function mf(a, b, c, d) {
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
function nf(a, b) {
  Ra(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in of ? a.setAttribute(of[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var of = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function pf(a, b, c) {
  return qf(document, arguments)
}
function qf(a, b) {
  var c = b[0], d = b[1];
  if(!gf && d && (d.name || d.type)) {
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
  d && (v(d) ? c.className = d : u(d) ? ef.apply(k, [c].concat(d)) : nf(c, d));
  2 < b.length && rf(a, c, b, 2);
  return c
}
function rf(a, b, c, d) {
  function e(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && 0 < g.nodeType) ? Xa(sf(g) ? eb(g) : g, e) : e(g)
  }
}
function tf(a, b) {
  rf(lf(a), a, arguments, 1)
}
function uf(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function vf(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function wf(a, b) {
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
function lf(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function xf(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      uf(a), a.appendChild(lf(a).createTextNode(b))
    }
  }
}
var yf = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, zf = {IMG:" ", BR:"\n"};
function Af(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ka(a) && 0 <= a && 32768 > a) : m
}
function Bf(a) {
  var b = [];
  Cf(a, b, m);
  return b.join("")
}
function Cf(a, b, c) {
  if(!(a.nodeName in yf)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in zf) {
        b.push(zf[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Cf(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function sf(a) {
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
function kf(a) {
  this.q = a || t.document || document
}
q = kf.prototype;
q.Ha = jf;
q.b = function(a) {
  return v(a) ? this.q.getElementById(a) : a
};
q.i = function(a, b, c) {
  return qf(this.q, arguments)
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
q.append = tf;
q.contains = wf;
function Df(a, b, c, d) {
  this.contentWindow = a;
  this.Ic = b;
  this.Ie = c;
  this.Dg = d
}
Df.prototype.u = function(a, b) {
  a.push("<XDRFrame frameId=");
  E(this.Dg, a, b);
  a.push(", expandedUrl=");
  E(this.Ic, a, b);
  a.push(", streams=");
  E(this.Ie, a, b);
  a.push(">")
};
function Ef() {
  this.frames = [];
  this.ie = new Sb
}
Ef.prototype.a = P("cw.net.XDRTracker");
function Ff(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor(me()) + ("" + Math.floor(me()))
  })
}
function Gf(a, b) {
  for(var c = Hf, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = 0 == e.Ie.length) {
      g = e.Ic;
      var h = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + F(b) + " existing frame " + F(e)), sd(e)
    }
  }
  d = zd() + zd();
  e = Ff(a);
  g = t.location;
  g instanceof Ie || (g = Xe(g));
  e instanceof Ie || (e = Xe(e));
  var l = g;
  g = l.B();
  (h = !!e.Ba) ? Je(g, e.Ba) : h = !!e.rb;
  h ? Ke(g, e.rb) : h = !!e.oa;
  h ? Le(g, e.oa) : h = e.Ua != k;
  var o = e.A;
  if(h) {
    Me(g, e.Ua)
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
  h ? (l = e.$, l.yb || (l.yb = l.toString() ? decodeURIComponent(l.toString()) : ""), Ne(g, l.yb, i)) : h = !!e.fb;
  h && Oe(g, e.fb);
  e = g.toString();
  g = ("" + t.location).match(Ge)[3] || k;
  h = e.match(Ge)[3] || k;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + F(b)), c = sd(new Df(t, e, [b], k))) : ((g = S("minerva-elements")) || f(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), h = new gd, c.ie.set(d, [h, e, b]), c.a.info("Creating new XDRFrame " + F(d) + "for " + F(b)), c = pf("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = h);
  return c
}
Ef.prototype.yh = function(a) {
  var b = this.ie.get(a);
  b || f(Error("Unknown frameId " + F(a)));
  this.ie.remove(b);
  var c = b[0], a = new Df(S("minerva-xdrframe-" + a).contentWindow || (S("minerva-xdrframe-" + a).contentDocument || S("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (S("minerva-xdrframe-" + a).contentDocument || S("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  nd(c, a)
};
var Hf = new Ef;
t.__XHRTracker_xdrFrameLoaded = w(Hf.yh, Hf);
var If;
If = m;
var Jf = kc();
Jf && (-1 != Jf.indexOf("Firefox") || -1 != Jf.indexOf("Camino") || -1 != Jf.indexOf("iPhone") || -1 != Jf.indexOf("iPod") || -1 != Jf.indexOf("iPad") || -1 != Jf.indexOf("Android") || -1 != Jf.indexOf("Chrome") && (If = j));
var Kf = If;
var Lf;
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
  Lf = c
})();
function Mf(a, b, c) {
  a.style[Ha(c)] = b
}
function Nf(a, b) {
  var c = lf(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function Of(a, b, c) {
  b instanceof R ? (c = b.height, b = b.width) : c == i && f(Error("missing height argument"));
  a.style.width = Pf(b);
  a.style.height = Pf(c)
}
function Pf(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
function Qf(a) {
  if("none" != (Nf(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style && a.style.display)) {
    return Rf(a)
  }
  var b = a.style, c = b.display, d = b.visibility, e = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = Rf(a);
  b.display = c;
  b.position = e;
  b.visibility = d;
  return a
}
function Rf(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = H && !b && !c;
  return(!ga(b) || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), G && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new R(b.right - b.left, b.bottom - b.top)) : new R(b, c)
}
function Sf(a) {
  G ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[H ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var Tf = oc ? "MozUserSelect" : H ? "WebkitUserSelect" : k;
function Uf(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Tf) {
    if(b = b ? "none" : "", a.style[Tf] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[Tf] = b
      }
    }
  }else {
    if(G || nc) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
;function Vf(a) {
  this.hb = a;
  this.n = []
}
z(Vf, J);
var Wf = [];
function T(a, b, c, d) {
  u(c) || (Wf[0] = c, c = Wf);
  for(var e = 0;e < c.length;e++) {
    a.n.push(L(b, c[e], d || a, m, a.hb || a))
  }
  return a
}
function Xf(a, b, c, d, e, g) {
  if(u(c)) {
    for(var h = 0;h < c.length;h++) {
      Xf(a, b, c[h], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.hb || a;
      e = !!e;
      if(b = Wc(b, c, e)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].nb && b[c].Hb == d && b[c].capture == e && b[c].Uc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, Xc(b), cb(a.n, b))
  }
  return a
}
Vf.prototype.te = function() {
  Xa(this.n, Xc);
  this.n.length = 0
};
Vf.prototype.c = function() {
  Vf.f.c.call(this);
  this.te()
};
Vf.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Yf() {
}
ea(Yf);
Yf.prototype.Wg = 0;
Yf.Oa();
function U(a) {
  this.Q = a || jf();
  this.rc = Zf
}
z(U, cd);
U.prototype.Og = Yf.Oa();
var Zf = k;
function $f(a, b) {
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
q.F = k;
q.S = k;
q.Xb = k;
q.th = m;
function ag(a) {
  return a.U || (a.U = ":" + (a.Og.Wg++).toString(36))
}
q.b = n("e");
function bg(a) {
  return a.Ab || (a.Ab = new Vf(a))
}
q.getParent = n("F");
q.ze = function(a) {
  this.F && this.F != a && f(Error("Method not supported"));
  U.f.ze.call(this, a)
};
q.Ha = n("Q");
q.i = function() {
  this.e = this.Q.createElement("div")
};
function cg(a, b) {
  a.r && f(Error("Component already rendered"));
  a.e || a.i();
  b ? b.insertBefore(a.e, k) : a.Q.q.body.appendChild(a.e);
  (!a.F || a.F.r) && a.T()
}
q.T = function() {
  this.r = j;
  dg(this, function(a) {
    !a.r && a.b() && a.T()
  })
};
q.eb = function() {
  dg(this, function(a) {
    a.r && a.eb()
  });
  this.Ab && this.Ab.te();
  this.r = m
};
q.c = function() {
  U.f.c.call(this);
  this.r && this.eb();
  this.Ab && (this.Ab.g(), delete this.Ab);
  dg(this, function(a) {
    a.g()
  });
  !this.th && this.e && vf(this.e);
  this.F = this.e = this.Xb = this.S = k
};
q.dc = n("e");
q.Mb = function(a) {
  this.r && f(Error("Component already rendered"));
  this.rc = a
};
function dg(a, b) {
  a.S && Xa(a.S, b, i)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : ag(a), a = this.Xb && c ? (c in this.Xb ? this.Xb[c] : i) || k : k;
    if(c && a) {
      var d = this.Xb;
      c in d && delete d[c];
      cb(this.S, a);
      b && (a.eb(), a.e && vf(a.e));
      c = a;
      c == k && f(Error("Unable to set parent component"));
      c.F = k;
      U.f.ze.call(c, k)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function eg(a, b) {
  U.call(this, b);
  this.Cg = a;
  this.Od = new Vf(this);
  this.Jc = new Sb
}
z(eg, U);
q = eg.prototype;
q.a = P("goog.ui.media.FlashObject");
q.vh = "window";
q.Qe = "#000000";
q.ng = "sameDomain";
q.fa = function(a, b) {
  this.sb = v(a) ? a : Math.round(a) + "px";
  this.Zd = v(b) ? b : Math.round(b) + "px";
  this.b() && Of(this.b() ? this.b().firstChild : k, this.sb, this.Zd);
  return this
};
q.T = function() {
  eg.f.T.call(this);
  var a = this.b(), b;
  b = G ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = G ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = ta(c, this.vh), d = this.Jc.xa(), e = this.Jc.ea(), g = [], h = 0;h < d.length;h++) {
    var l = va(d[h]), o = va(e[h]);
    g.push(l + "=" + o)
  }
  b = ta(b, ag(this), ag(this), "goog-ui-media-flash-object", xa(this.Cg), xa(g.join("&")), this.Qe, this.ng, c);
  a.innerHTML = b;
  this.sb && this.Zd && this.fa(this.sb, this.Zd);
  T(this.Od, this.b(), Sa(Hc), Kc)
};
q.i = function() {
  this.Uf != k && !(0 <= Ea(Lf, this.Uf)) && (M(this.a, "Required flash version not found:" + this.Uf), f(Error("Method not supported")));
  var a = this.Ha().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
q.c = function() {
  eg.f.c.call(this);
  this.Jc = k;
  this.Od.g();
  this.Od = k
};
function fg(a) {
  B.call(this, a)
}
z(fg, B);
fg.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function gg(a, b, c) {
  function d() {
    e && delete t.__loadFlashObject_callbacks[e]
  }
  var e;
  if(oc && !I("1.8.1.20")) {
    return td(new fg("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Ea(Lf, "9"))) {
    return b = Lf, td(new fg("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  e = "_" + zd();
  var h = new gd(d);
  t.__loadFlashObject_callbacks[e] = function() {
    a.setTimeout(function() {
      d();
      nd(h, S(g))
    }, 0)
  };
  b.Jc.set("onloadcallback", '__loadFlashObject_callbacks["' + e + '"]()');
  g = ag(b);
  cg(b, c);
  return h
}
function hg(a, b, c) {
  var d = gg(a, b, c), e = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  qd(d, function(b) {
    a.clearTimeout(e);
    return b
  });
  return d
}
;/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function ig(a, b, c, d, e, g) {
  gd.call(this, e, g);
  this.Cf = a;
  this.Kd = [];
  this.ff = !!b;
  this.Bg = !!c;
  this.sg = !!d;
  for(b = 0;b < a.length;b++) {
    pd(a[b], w(this.of, this, b, j), w(this.of, this, b, m))
  }
  0 == a.length && !this.ff && nd(this, this.Kd)
}
z(ig, gd);
ig.prototype.Lf = 0;
ig.prototype.of = function(a, b, c) {
  this.Lf++;
  this.Kd[a] = [b, c];
  this.Na || (this.ff && b ? nd(this, [a, c]) : this.Bg && !b ? this.bc(c) : this.Lf == this.Cf.length && nd(this, this.Kd));
  this.sg && !b && (c = k);
  return c
};
ig.prototype.bc = function(a) {
  ig.f.bc.call(this, a);
  Xa(this.Cf, function(a) {
    a.cancel()
  })
};
function jg(a) {
  a = new ig(a, m, j);
  od(a, function(a) {
    return Ya(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function kg(a, b) {
  this.wh = a;
  this.Ef = b
}
kg.prototype.ee = 0;
kg.prototype.cd = 0;
kg.prototype.Rd = m;
function lg(a) {
  var b = [];
  if(a.Rd) {
    return[b, 2]
  }
  var c = a.ee, d = a.wh.responseText;
  for(a.ee = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var e = d.substr(a.cd, c - a.cd), e = e.replace(/\r$/, "");
    if(e.length > a.Ef) {
      return a.Rd = j, [b, 2]
    }
    b.push(e);
    a.cd = c += 1
  }
  return a.ee - a.cd - 1 > a.Ef ? (a.Rd = j, [b, 2]) : [b, 1]
}
;function mg(a, b, c) {
  this.O = b;
  this.qa = a;
  this.Gd = c
}
z(mg, J);
q = mg.prototype;
q.a = P("cw.net.XHRMaster");
q.Xa = -1;
q.je = function(a, b, c) {
  this.Gd.__XHRSlave_makeRequest(this.qa, a, b, c)
};
q.Pa = n("Xa");
q.ne = function(a, b) {
  1 != b && $d(this.a, F(this.qa) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  ge(this.O);
  he(this.O, a)
};
q.oe = function(a) {
  N(this.a, "ongotheaders_: " + F(a));
  var b = k;
  "Content-Length" in a && (b = Dd(a["Content-Length"]));
  a = this.O;
  N(a.a, a.v() + " got Content-Length: " + b);
  a.Ca == ng && (b == k && (M(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), og(a, 2E3 + 1E3 * (b / 3072)))
};
q.pe = function(a) {
  1 != a && N(this.a, this.O.v() + "'s XHR's readyState is " + a);
  this.Xa = a;
  2 <= this.Xa && ge(this.O)
};
q.me = function() {
  this.O.g()
};
q.c = function() {
  mg.f.c.call(this);
  delete pg.Ia[this.qa];
  this.Gd.__XHRSlave_dispose(this.qa);
  delete this.Gd
};
function qg() {
  this.Ia = {}
}
z(qg, J);
q = qg.prototype;
q.a = P("cw.net.XHRMasterTracker");
q.Id = function(a, b) {
  var c = "_" + zd(), d = new mg(c, a, b);
  return this.Ia[c] = d
};
q.ne = function(a, b, c) {
  var b = db(b), d = this.Ia[a];
  d ? d.ne(b, c) : $d(this.a, "onframes_: no master for " + F(a))
};
q.oe = function(a, b) {
  var c = this.Ia[a];
  c ? c.oe(b) : $d(this.a, "ongotheaders_: no master for " + F(a))
};
q.pe = function(a, b) {
  var c = this.Ia[a];
  c ? c.pe(b) : $d(this.a, "onreadystatechange_: no master for " + F(a))
};
q.me = function(a) {
  var b = this.Ia[a];
  b ? (delete this.Ia[b.qa], b.me()) : $d(this.a, "oncomplete_: no master for " + F(a))
};
q.c = function() {
  qg.f.c.call(this);
  for(var a = Sa(this.Ia);a.length;) {
    a.pop().g()
  }
  delete this.Ia
};
var pg = new qg;
t.__XHRMaster_onframes = w(pg.ne, pg);
t.__XHRMaster_oncomplete = w(pg.me, pg);
t.__XHRMaster_ongotheaders = w(pg.oe, pg);
t.__XHRMaster_onreadystatechange = w(pg.pe, pg);
function rg(a, b, c) {
  this.Aa = a;
  this.host = b;
  this.port = c
}
function sg(a, b, c) {
  this.host = a;
  this.port = b;
  this.rh = c
}
function tg(a, b) {
  b || (b = a);
  this.Aa = a;
  this.Ya = b
}
tg.prototype.u = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  E(this.Aa, a, b);
  a.push(", secondaryUrl=");
  E(this.Ya, a, b);
  a.push(">")
};
function ug(a, b, c, d) {
  this.Aa = a;
  this.Pf = b;
  this.Ya = c;
  this.Zf = d;
  (!(0 == this.Aa.indexOf("http://") || 0 == this.Aa.indexOf("https://")) || !(0 == this.Ya.indexOf("http://") || 0 == this.Ya.indexOf("https://"))) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Pf.location.href;
  He(this.Aa, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Zf.location.href;
  He(this.Ya, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
ug.prototype.u = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  E(this.Aa, a, b);
  a.push(", secondaryUrl=");
  E(this.Ya, a, b);
  a.push(">")
};
var vg = new we(";)]}");
function wg() {
}
wg.prototype.jf = p(1);
function xg(a) {
  this.kh = a
}
xg.prototype.u = function(a, b) {
  a.push("<UserContext for ");
  E(this.kh, a, b);
  a.push(">")
};
function yg(a, b, c) {
  this.C = a;
  this.lh = b ? b : new wg;
  this.K = c ? c : wd;
  this.yc = new Fd;
  this.wc = zd() + zd();
  this.Wa = new $b;
  this.be = new bc;
  this.zc = k;
  this.ud = [];
  this.Qb = new xg(this);
  H && (this.zc = Uc(t, "load", this.eh, m, this))
}
z(yg, J);
q = yg.prototype;
q.a = P("cw.net.ClientStream");
q.Af = new Zb(-1, []);
q.Bf = new Zb(-1, []);
q.Vg = 50;
q.Ug = 1048576;
q.qe = k;
q.onreset = k;
q.Nf = k;
q.Fe = m;
q.ue = m;
q.h = 1;
q.Ke = -1;
q.j = k;
q.G = k;
q.oc = k;
q.Ge = 0;
q.Of = 0;
q.Yf = 0;
q.u = function(a, b) {
  a.push("<ClientStream id=");
  E(this.wc, a, b);
  a.push(", state=", "" + this.h);
  a.push(", primary=");
  E(this.j, a, b);
  a.push(", secondary=");
  E(this.G, a, b);
  a.push(", resetting=");
  E(this.oc, a, b);
  a.push(">")
};
function zg(a) {
  var b = [-1];
  a.j && b.push(a.j.Jb);
  a.G && b.push(a.G.Jb);
  return Math.max.apply(Math.max, b)
}
function Ag(a) {
  if(1 != a.h) {
    var b = 0 != a.Wa.D.ca(), c = cc(a.be), d = !c.m(a.Bf) && !(a.j && c.m(a.j.Fb) || a.G && c.m(a.G.Fb)), e = zg(a);
    if((b = b && e < a.Wa.cb) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.j.Vb ? (O(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.j, c != d.Fb && (!d.Ja && !d.J.length && Bg(d), d.J.push(new ue(c)), d.Fb = c)), b && Cg(a.j, a.Wa, e + 1), a.j.Ga()) : a.G == k ? a.Fe ? (O(a.a, "tryToSend_: creating secondary to send " + g), a.G = Dg(a, m), b && Cg(a.G, a.Wa, e + 1), a.G.Ga()) : (O(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.ue = j) : O(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
q.eh = function() {
  this.zc = k;
  if(this.j && this.j.Cb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.j;
    a.wd = j;
    a.g()
  }
  this.G && this.G.Cb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.G, a.wd = j, a.g())
};
function Eg(a, b) {
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
    Ag(a)
  }
}
function Dg(a, b) {
  var c;
  a.C instanceof ug ? c = 1 == a.lh.jf() ? ng : Fg : a.C instanceof sg ? c = Gg : f(Error("Don't support endpoint " + F(a.C)));
  a.Ke += 1;
  c = new Hg(a.K, a, a.Ke, c, a.C, b);
  O(a.a, "Created: " + c.v());
  a.yc.add(c);
  return c
}
function Ig(a, b, c) {
  var d = new Jg(a.K, a, b, c);
  O(a.a, "Created: " + d.v() + ", delay=" + b + ", times=" + c);
  a.yc.add(d);
  return d
}
function Kg(a, b) {
  a.yc.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  N(a.a, "Offline: " + b.v());
  a.Ge = b.Ta ? a.Ge + b.Ta : 0;
  1 <= a.Ge && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.Qb, "stream penalty reached limit", m), a.g());
  if(3 < a.h) {
    4 == a.h && b.jg ? (N(a.a, "Disposing because resettingTransport_ is done."), a.g()) : N(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    var c;
    var d;
    c = b instanceof Jg;
    if(!c && b.wd) {
      var e = H ? Kf ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      O(a.a, "getDelayForNextTransport_: " + F({delay:c, times:d}))
    }else {
      if(d = b.Te(), b == a.j ? d ? e = ++a.Of : c || (e = a.Of = 0) : d ? e = ++a.Yf : c || (e = a.Yf = 0), c || !e) {
        d = c = 0, O(a.a, "getDelayForNextTransport_: " + F({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(4E3 * Math.random()) - 2E3, l = Math.max(0, b.fg - b.Le);
        d = (c = Math.max(0, g + h - l)) ? 1 : 0;
        O(a.a, "getDelayForNextTransport_: " + F({count:e, base:g, variance:h, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    b == a.j ? (a.j = k, c ? a.j = Ig(a, e, c) : (e = zg(a), a.j = Dg(a, j), Cg(a.j, a.Wa, e + 1)), a.j.Ga()) : b == a.G && (a.G = k, c ? (a.G = Ig(a, e, c), a.G.Ga()) : Ag(a))
  }
}
q.reset = function(a) {
  3 < this.h && f(Error("reset: Can't send reset in state " + this.h));
  this.h = 4;
  this.j && this.j.Vb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Lg(this.j, a), this.j.Ga()) : (this.j && (N(this.a, "reset: Disposing primary before sending ResetFrame."), this.j.g()), this.G && (N(this.a, "reset: Disposing secondary before sending ResetFrame."), this.G.g()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.oc = Dg(this, m), Lg(this.oc, a), this.oc.Ga());
  this.onreset && this.onreset.call(this.Qb, a, j)
};
function Mg(a, b, c, d) {
  var e;
  e = a.be;
  for(var g = a.Vg, h = a.Ug, l = [], o = m, r = 0, A = c.length;r < A;r++) {
    var s = c[r], x = s[0], s = s[1];
    if(x == e.kb + 1) {
      e.kb += 1;
      for(l.push(s);;) {
        x = e.kb + 1;
        s = e.ab.get(x, dc);
        if(s === dc) {
          break
        }
        l.push(s[0]);
        e.ab.remove(x);
        e.o -= s[1];
        e.kb = x
      }
    }else {
      if(!(x <= e.kb)) {
        if(g != k && e.ab.ca() >= g) {
          o = j;
          break
        }
        var C = Xb(s);
        if(h != k && e.o + C > h) {
          o = j;
          break
        }
        e.ab.set(x, [s, C]);
        e.o += C
      }
    }
  }
  e.ab.Qa() && e.ab.clear();
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
  d || Ag(a);
  if(!(4 == a.h || a.va) && e) {
    $d(b.a, b.v() + "'s peer caused rwin overflow."), b.g()
  }
}
function Ng(a, b) {
  var c = new eg(b + "FlashConnector.swf?cb=4bdfc178fc0e508c0cd5efc3fdb09920");
  c.Qe = "#777777";
  c.fa(300, 30);
  var d = S("minerva-elements");
  d || f(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
  var e = S("minerva-elements-FlashConnectorSwf");
  e || (e = pf("div", {id:"minerva-elements-FlashConnectorSwf"}), d.appendChild(e));
  return hg(a.K.P, c, e)
}
q.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.h && f(Error("ClientStream.start: " + F(this) + " already started"));
  this.h = 2;
  if(this.C instanceof tg) {
    var a = Gf(this.C.Aa, this), b = Gf(this.C.Ya, this), a = jg([a, b]);
    od(a, w(this.Ag, this))
  }else {
    if(this.C instanceof rg) {
      if(Yb) {
        this.ef()
      }else {
        var a = Ng(this, this.C.Aa), c = this;
        od(a, function(a) {
          Yb = new ke(c.K, a);
          return k
        });
        od(a, w(this.ef, this))
      }
    }else {
      Og(this)
    }
  }
};
q.ef = function() {
  this.C = new sg(this.C.host, this.C.port, Yb);
  Og(this)
};
q.Ag = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Ic, e = a[1].Ic;
  this.ud.push(a[0]);
  this.ud.push(a[1]);
  this.C = new ug(d, b, e, c);
  Og(this)
};
function Og(a) {
  a.h = 3;
  a.j = Dg(a, j);
  Cg(a.j, a.Wa, k);
  a.j.Ga()
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
  H && this.zc && (Xc(this.zc), this.zc = k);
  this.Nf && this.Nf.call(this.Qb);
  delete this.yc;
  delete this.j;
  delete this.G;
  delete this.oc;
  delete this.Qb;
  yg.f.c.call(this)
};
var ng = 1, Fg = 2, Gg = 3;
function Hg(a, b, c, d, e, g) {
  this.K = a;
  this.I = b;
  this.Pb = c;
  this.Ca = d;
  this.C = e;
  this.J = [];
  this.vb = g;
  this.Vb = !this.Cb();
  this.Kb = this.Ca != ng;
  this.pg = w(this.ph, this)
}
z(Hg, J);
q = Hg.prototype;
q.a = P("cw.net.ClientTransport");
q.s = k;
q.Le = k;
q.fg = k;
q.fd = k;
q.Ja = m;
q.qd = m;
q.Fb = k;
q.Kc = 0;
q.Jb = -1;
q.ed = -1;
q.jg = m;
q.wd = m;
q.Ta = 0;
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
  return this.Ca == ng || this.Ca == Fg
};
function Pg(a, b) {
  ib(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Mg(a.I, a, b, !a.Kb)
}
function Qg(a, b, c) {
  try {
    var d = Fe(b);
    a.Kc += 1;
    N(a.a, a.v() + " RECV " + F(d));
    var e;
    1 == a.Kc && !d.m(vg) && a.Cb() ? (M(a.a, a.v() + " is closing soon because got bad preamble: " + F(d)), e = j) : e = m;
    if(e) {
      return j
    }
    if(d instanceof ve) {
      if(!/^([ -~]*)$/.test(d.Ob)) {
        return a.gc = j
      }
      a.ed += 1;
      c.push([a.ed, d.Ob])
    }else {
      if(d instanceof ue) {
        var g = a.I, h = d.ra;
        g.Af = h;
        var l = g.Wa, o = h.tb, c = m;
        o > l.cb && (c = j);
        for(var r = ac(l).concat(), d = 0;d < r.length;d++) {
          var A = r[d];
          if(A > o) {
            break
          }
          var s = l.D.get(A)[1];
          l.D.remove(A);
          l.o -= s
        }
        for(d = 0;d < h.ob.length;d++) {
          var x = h.ob[d];
          x > l.cb && (c = j);
          l.D.ha(x) && (s = l.D.get(x)[1], l.D.remove(x), l.o -= s)
        }
        l.D.Qa() && l.D.clear();
        if(c) {
          return M(a.a, a.v() + " is closing soon because got bad SackFrame"), a.gc = j
        }
      }else {
        if(d instanceof xe) {
          a.ed = d.tc - 1
        }else {
          if(d instanceof ze) {
            a.I.Bf = d.kc
          }else {
            if(d instanceof Be) {
              return O(a.a, a.v() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof Ee) {
              return a.gc = j, "stream_attach_failure" == d.reason ? a.Ta += 1 : "acked_unsent_strings" == d.reason && (a.Ta += 0.5), O(a.a, a.v() + " is closing soon because got " + F(d)), j
            }
            if(!(d instanceof we)) {
              if(d instanceof Ae) {
                var C = a.I, kj = !a.Kb;
                O(C.a, "Stream is now confirmed to exist at server.");
                C.Fe = j;
                C.ue && !kj && (C.ue = m, Ag(C))
              }else {
                c.length && (Pg(a, c), bb(c));
                if(d instanceof Ce) {
                  var md = a.I;
                  md.onreset && md.onreset.call(md.Qb, d.nc, d.Tb);
                  md.g();
                  return j
                }
                f(Error(a.v() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(Wg) {
    return Wg instanceof Q || f(Wg), M(a.a, a.v() + " is closing soon because got InvalidFrame: " + F(b)), a.gc = j
  }
  return m
}
function he(a, b) {
  a.qd = j;
  try {
    for(var c = m, d = [], e = 0, g = b.length;e < g;e++) {
      if(a.va) {
        a.a.info(a.v() + " returning from loop because we're disposed.");
        return
      }
      if(c = Qg(a, b[e], d)) {
        break
      }
    }
    d.length && Pg(a, d);
    a.qd = m;
    a.J.length && a.Ga();
    c && (O(a.a, a.v() + " closeSoon is true.  Frames were: " + F(b)), a.g())
  }finally {
    a.qd = m
  }
}
q.ph = function() {
  M(this.a, this.v() + " timed out due to lack of connection or no data being received.");
  this.g()
};
function Rg(a) {
  a.fd != k && (a.K.P.clearTimeout(a.fd), a.fd = k)
}
function og(a, b) {
  Rg(a);
  b = Math.round(b);
  a.fd = a.K.P.setTimeout(a.pg, b);
  N(a.a, a.v() + "'s receive timeout set to " + b + " ms.")
}
function ge(a) {
  a.Ca != ng && (a.Ca == Gg || a.Ca == Fg ? og(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.Ca)))
}
function Bg(a) {
  var b = new se;
  b.Pb = a.Pb;
  b.Qf = 2;
  b.tf = 2;
  a.I.Fe || (b.Tf = j);
  b.wc = a.I.wc;
  b.He = a.Kb;
  b.He && (b.Jf = 4096);
  b.Ff = 3E5;
  b.Df = a.Kb ? Math.floor(10) : 0;
  b.gg = m;
  a.vb && (b.bg = k, b.ke = Math.floor((a.Kb ? 358E4 : 25E3) / 1E3));
  b.ra = cc(a.I.be);
  b.$c = a.I.Af;
  a.J.push(b);
  a.Fb = b.ra
}
function ie(a, b) {
  b && (a.Ta += 0.5);
  a.g()
}
q.Ga = function() {
  this.Ja && !this.Vb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.qd) {
    O(this.a, this.v() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ja;
    this.Ja = j;
    !a && !this.J.length && Bg(this);
    for(a = 0;a < this.J.length;a++) {
      N(this.a, this.v() + " SEND " + F(this.J[a]))
    }
    if(this.Cb()) {
      for(var a = [], b = 0, c = this.J.length;b < c;b++) {
        this.J[b].pa(a), a.push("\n")
      }
      this.J = [];
      a = a.join("");
      b = this.vb ? this.C.Aa : this.C.Ya;
      this.s = pg.Id(this, this.vb ? this.C.Pf : this.C.Zf);
      this.Le = this.K.P === ed ? y() : this.K.P.getTime();
      this.s.je(b, "POST", a);
      og(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Kb ? 0 : this.vb ? 25E3 : 0))
    }else {
      if(this.Ca == Gg) {
        a = [];
        b = 0;
        for(c = this.J.length;b < c;b++) {
          a.push(this.J[b].ja())
        }
        this.J = [];
        this.s ? this.s.Ac(a) : (b = this.C, this.s = new le(this), this.s.pd = b.rh.Id(this.s), this.Le = this.K.P === ed ? y() : this.K.P.getTime(), this.s.Fd(b.host, b.port), this.s.va || (this.s.Ac(a), this.s.va || og(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.Ca))
      }
    }
  }
};
function Cg(a, b, c) {
  !a.Ja && !a.J.length && Bg(a);
  for(var c = Math.max(c, a.Jb + 1), b = b.kf(c), c = 0, d = b.length;c < d;c++) {
    var e = b[c], g = e[0], e = e[1];
    (-1 == a.Jb || a.Jb + 1 != g) && a.J.push(new xe(g));
    a.J.push(new ve(e));
    a.Jb = g
  }
}
q.c = function() {
  this.a.info(this.v() + " in disposeInternal.");
  Hg.f.c.call(this);
  this.fg = this.K.P === ed ? y() : this.K.P.getTime();
  this.J = [];
  Rg(this);
  this.s && this.s.g();
  var a = this.I;
  this.I = k;
  Kg(a, this)
};
function Lg(a, b) {
  !a.Ja && !a.J.length && Bg(a);
  a.J.push(new Ce(b, j));
  a.jg = j
}
function Jg(a, b, c, d) {
  this.K = a;
  this.I = b;
  this.bf = c;
  this.We = d
}
z(Jg, J);
q = Jg.prototype;
q.Ja = m;
q.Vb = m;
q.Qc = k;
q.Fb = k;
q.a = P("cw.net.DoNothingTransport");
function Sg(a) {
  a.Qc = a.K.P.setTimeout(function() {
    a.Qc = k;
    a.We--;
    a.We ? Sg(a) : a.g()
  }, a.bf)
}
q.Ga = function() {
  this.Ja && !this.Vb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ja = j;
  Sg(this)
};
q.u = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.bf, ">")
};
q.Cb = p(m);
q.v = p("Wast. T");
q.Te = p(m);
q.c = function() {
  this.a.info(this.v() + " in disposeInternal.");
  Jg.f.c.call(this);
  this.Qc != k && this.K.P.clearTimeout(this.Qc);
  var a = this.I;
  this.I = k;
  Kg(a, this)
};
function Tg(a, b) {
  a.setAttribute("role", b);
  a.Ji = b
}
;function Ug() {
}
var Vg;
ea(Ug);
q = Ug.prototype;
q.Lc = function() {
};
q.i = function(a) {
  var b = a.Ha().i("div", Xg(this, a).join(" "), a.ia);
  this.we(a, b);
  return b
};
q.dc = function(a) {
  return a
};
q.ac = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(G && !I("7")) {
      var d = Yg(df(a), b);
      d.push(b);
      ra(c ? ef : ff, a).apply(k, d)
    }else {
      c ? ef(a, b) : ff(a, b)
    }
  }
};
q.vf = function(a) {
  a.rc == k && (a.rc = "rtl" == (Nf(a.r ? a.e : a.Q.q.body, "direction") || ((a.r ? a.e : a.Q.q.body).currentStyle ? (a.r ? a.e : a.Q.q.body).currentStyle.direction : k) || (a.r ? a.e : a.Q.q.body).style && (a.r ? a.e : a.Q.q.body).style.direction));
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
  Uf(a, !b, !G && !nc)
};
q.Mb = function(a, b) {
  this.ac(a, this.w() + "-rtl", b)
};
q.xf = function(a) {
  var b;
  return a.aa & 32 && (b = a.gb()) ? Af(b) : m
};
q.ld = function(a, b) {
  var c;
  if(a.aa & 32 && (c = a.gb())) {
    if(!b && a.h & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.h & 32 && a.nf()
    }
    Af(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
q.De = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.ma = function(a, b, c) {
  var d = a.b();
  if(d) {
    var e = Zg(this, b);
    e && this.ac(a, e, c);
    this.ga(d, b, c)
  }
};
q.ga = function(a, b, c) {
  Vg || (Vg = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Vg[b]) && a.setAttribute("aria-" + b, c)
};
q.jd = function(a, b) {
  var c = this.dc(a);
  if(c && (uf(c), b)) {
    if(v(b)) {
      xf(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = lf(c);
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
function Xg(a, b) {
  var c = a.w(), d = [c], e = a.w();
  e != c && d.push(e);
  c = b.h;
  for(e = [];c;) {
    var g = c & -c;
    e.push(Zg(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.wa) && d.push.apply(d, c);
  G && !I("7") && d.push.apply(d, Yg(d));
  return d
}
function Yg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Xa([], function(d) {
    $a(d, ra(ab, a)) && (!b || ab(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Zg(a, b) {
  if(!a.Se) {
    var c = a.w();
    a.Se = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Se[b]
}
;function $g(a, b) {
  a || f(Error("Invalid class name " + a));
  la(b) || f(Error("Invalid decorator function " + b))
}
var ah = {};
function bh(a, b, c, d, e) {
  if(!G && (!H || !I("525"))) {
    return j
  }
  if(rc && e) {
    return ch(a)
  }
  if(e && !d || !c && (17 == b || 18 == b) || G && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(G && Bc());
    case 27:
      return!H
  }
  return ch(a)
}
function ch(a) {
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
;function dh(a, b) {
  a && eh(this, a, b)
}
z(dh, cd);
q = dh.prototype;
q.e = k;
q.Yc = k;
q.de = k;
q.Zc = k;
q.Sa = -1;
q.Ra = -1;
var fh = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, gh = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, hh = {61:187, 
59:186}, ih = G || H && I("525");
q = dh.prototype;
q.Kg = function(a) {
  if(H && (17 == this.Sa && !a.ctrlKey || 18 == this.Sa && !a.altKey)) {
    this.Ra = this.Sa = -1
  }
  ih && !bh(a.keyCode, this.Sa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Ra = oc && a.keyCode in hh ? hh[a.keyCode] : a.keyCode
};
q.Lg = function() {
  this.Ra = this.Sa = -1
};
q.handleEvent = function(a) {
  var b = a.Fa, c, d;
  G && "keypress" == a.type ? (c = this.Ra, d = 13 != c && 27 != c ? b.keyCode : 0) : H && "keypress" == a.type ? (c = this.Ra, d = 0 <= b.charCode && 63232 > b.charCode && ch(c) ? b.charCode : 0) : nc ? (c = this.Ra, d = ch(c) ? b.keyCode : 0) : (c = b.keyCode || this.Ra, d = b.charCode || 0, rc && 63 == d && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in fh ? e = fh[c] : 25 == c && a.shiftKey && (e = 9) : g && g in gh && (e = gh[g]);
  a = e == this.Sa;
  this.Sa = e;
  b = new jh(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.g()
  }
};
q.b = n("e");
function eh(a, b, c) {
  a.Zc && a.detach();
  a.e = b;
  a.Yc = L(a.e, "keypress", a, c);
  a.de = L(a.e, "keydown", a.Kg, c, a);
  a.Zc = L(a.e, "keyup", a.Lg, c, a)
}
q.detach = function() {
  this.Yc && (Xc(this.Yc), Xc(this.de), Xc(this.Zc), this.Zc = this.de = this.Yc = k);
  this.e = k;
  this.Ra = this.Sa = -1
};
q.c = function() {
  dh.f.c.call(this);
  this.detach()
};
function jh(a, b, c, d) {
  d && this.ic(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
z(jh, Mc);
function V(a, b, c) {
  U.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ma(b);
      if(d = ah[d]) {
        break
      }
      b = b.f ? b.f.constructor : k
    }
    b = d ? la(d.Oa) ? d.Oa() : new d : k
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
q.jh = 0;
q.Rb = j;
q.wa = k;
q.Yd = j;
q.yd = m;
q.Zg = k;
q.gb = function() {
  return this.l.gb(this)
};
function kh(a, b) {
  b && (a.wa ? ab(a.wa, b) || a.wa.push(b) : a.wa = [b], a.l.ac(a, b, j))
}
q.ac = function(a, b) {
  b ? kh(this, a) : a && this.wa && (cb(this.wa, a), 0 == this.wa.length && (this.wa = k), this.l.ac(this, a, m))
};
q.i = function() {
  var a = this.l.i(this);
  this.e = a;
  var b = this.Zg || this.l.Lc();
  b && Tg(a, b);
  this.yd || this.l.hd(a, m);
  this.Rb || this.l.De(a, m)
};
q.dc = function() {
  return this.l.dc(this.b())
};
q.T = function() {
  V.f.T.call(this);
  this.l.vf(this);
  if(this.aa & -2 && (this.Yd && lh(this, j), this.aa & 32)) {
    var a = this.gb();
    if(a) {
      var b = this.Eb || (this.Eb = new dh);
      eh(b, a);
      T(T(T(bg(this), b, "key", this.qf), a, "focus", this.Ig), a, "blur", this.nf)
    }
  }
};
function lh(a, b) {
  var c = bg(a), d = a.b();
  b ? (T(T(T(T(c, d, "mouseover", a.Tc), d, "mousedown", a.Rc), d, "mouseup", a.rf), d, "mouseout", a.Sc), G && T(c, d, "dblclick", a.pf)) : (Xf(Xf(Xf(Xf(c, d, "mouseover", a.Tc), d, "mousedown", a.Rc), d, "mouseup", a.rf), d, "mouseout", a.Sc), G && Xf(c, d, "dblclick", a.pf))
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
q.hf = function() {
  var a = this.ia;
  if(!a) {
    return""
  }
  if(!v(a)) {
    if(u(a)) {
      a = Ya(a, Bf).join("")
    }else {
      if(hf && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Cf(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      hf || (a = a.replace(/ +/g, " "));
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
function mh(a, b) {
  nh(a, 2, b) && a.ma(2, b)
}
q.ce = function() {
  return!!(this.h & 4)
};
q.setActive = function(a) {
  nh(this, 4, a) && this.ma(4, a)
};
q.Ae = function(a) {
  nh(this, 8, a) && this.ma(8, a)
};
q.ma = function(a, b) {
  this.aa & a && b != !!(this.h & a) && (this.l.ma(this, a, b), this.h = b ? this.h | a : this.h & ~a)
};
function W(a, b) {
  return!!(a.zd & b) && !!(a.aa & b)
}
function nh(a, b, c) {
  return!!(a.aa & b) && !!(a.h & b) != c && (!(a.jh & b) || a.dispatchEvent($f(b, c))) && !a.va
}
q.Tc = function(a) {
  !oh(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && W(this, 2) && mh(this, j)
};
q.Sc = function(a) {
  !oh(a, this.b()) && this.dispatchEvent("leave") && (W(this, 4) && this.setActive(m), W(this, 2) && mh(this, m))
};
function oh(a, b) {
  return!!a.relatedTarget && wf(b, a.relatedTarget)
}
q.Rc = function(a) {
  if(this.isEnabled() && (W(this, 2) && mh(this, j), Oc(a) && (!H || !rc || !a.ctrlKey))) {
    W(this, 4) && this.setActive(j), this.l.xf(this) && this.gb().focus()
  }
  !this.yd && Oc(a) && (!H || !rc || !a.ctrlKey) && a.preventDefault()
};
q.rf = function(a) {
  this.isEnabled() && (W(this, 2) && mh(this, j), this.ce() && this.lb(a) && W(this, 4) && this.setActive(m))
};
q.pf = function(a) {
  this.isEnabled() && this.lb(a)
};
q.lb = function(a) {
  if(W(this, 16)) {
    var b = !(this.h & 16);
    nh(this, 16, b) && this.ma(16, b)
  }
  W(this, 8) && this.Ae(j);
  W(this, 64) && (b = !(this.h & 64), nh(this, 64, b) && this.ma(64, b));
  b = new Jc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.se = a.se);
  return this.dispatchEvent(b)
};
q.Ig = function() {
  W(this, 32) && nh(this, 32, j) && this.ma(32, j)
};
q.nf = function() {
  W(this, 4) && this.setActive(m);
  W(this, 32) && nh(this, 32, m) && this.ma(32, m)
};
q.qf = function(a) {
  return this.Rb && this.isEnabled() && this.Xd(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
q.Xd = function(a) {
  return 13 == a.keyCode && this.lb(a)
};
la(V) || f(Error("Invalid component class " + V));
la(Ug) || f(Error("Invalid renderer class " + Ug));
var ph = ma(V);
ah[ph] = Ug;
$g("goog-control", function() {
  return new V(k)
});
function qh() {
}
z(qh, Ug);
ea(qh);
q = qh.prototype;
q.Lc = p("button");
q.ga = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : qh.f.ga.call(this, a, b, c)
};
q.i = function(a) {
  var b = qh.f.i.call(this, a), c = a.Oc();
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
function rh() {
}
z(rh, qh);
ea(rh);
q = rh.prototype;
q.Lc = function() {
};
q.i = function(a) {
  a.r && m != a.Yd && lh(a, m);
  a.Yd = m;
  a.zd &= -256;
  a.r && a.h & 32 && f(Error("Component already rendered"));
  a.h & 32 && a.ma(32, m);
  a.aa &= -33;
  return a.Ha().i("button", {"class":Xg(this, a).join(" "), disabled:!a.isEnabled(), title:a.Oc() || "", value:a.Pc() || ""}, a.hf() || "")
};
q.vf = function(a) {
  T(bg(a), a.b(), "click", a.lb)
};
q.hd = da;
q.Mb = da;
q.xf = function(a) {
  return a.isEnabled()
};
q.ld = da;
q.ma = function(a, b, c) {
  rh.f.ma.call(this, a, b, c);
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
function sh(a, b, c) {
  V.call(this, a, b || rh.Oa(), c)
}
z(sh, V);
q = sh.prototype;
q.Pc = n("hg");
q.od = function(a) {
  this.hg = a;
  this.l.od(this.b(), a)
};
q.Oc = n("dg");
q.Ce = function(a) {
  this.dg = a;
  this.l.Ce(this.b(), a)
};
q.c = function() {
  sh.f.c.call(this);
  delete this.hg;
  delete this.dg
};
q.T = function() {
  sh.f.T.call(this);
  if(this.aa & 32) {
    var a = this.gb();
    a && T(bg(this), a, "keyup", this.Xd)
  }
};
q.Xd = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.lb(a) : 32 == a.keyCode
};
$g("goog-button", function() {
  return new sh(k)
});
function th() {
}
z(th, qh);
ea(th);
q = th.prototype;
q.i = function(a) {
  var b = {"class":"goog-inline-block " + Xg(this, a).join(" "), title:a.Oc() || ""}, b = a.Ha().i("div", b, uh(this, a.ia, a.Ha()));
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
function uh(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.w() + "-outer-box"), c.i("div", "goog-inline-block " + (a.w() + "-inner-box"), b))
}
q.w = p("goog-custom-button");
function vh(a, b, c) {
  sh.call(this, a, b || th.Oa(), c)
}
z(vh, sh);
$g("goog-custom-button", function() {
  return new vh(k)
});
var wh = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function xh(a) {
  var b = {}, a = "" + a, c = "#" == a.charAt(0) ? a : "#" + a;
  if(yh.test(c)) {
    return b.Vc = zh(c), b.type = "hex", b
  }
  a: {
    var d = a.match(Ah);
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
    return b.Vc = Bh(c[0], c[1], c[2]), b.type = "rgb", b
  }
  if(wh && (c = wh[a.toLowerCase()])) {
    return b.Vc = c, b.type = "named", b
  }
  f(Error(a + " is not a valid color string"))
}
var Ch = /#(.)(.)(.)/;
function zh(a) {
  yh.test(a) || f(Error("'" + a + "' is not a valid hex color"));
  4 == a.length && (a = a.replace(Ch, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function Dh(a) {
  a = zh(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function Bh(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || 0 > a || 255 < a || isNaN(b) || 0 > b || 255 < b || isNaN(c) || 0 > c || 255 < c) && f(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = Eh(a.toString(16));
  b = Eh(b.toString(16));
  c = Eh(c.toString(16));
  return"#" + a + b + c
}
var yh = /^#(?:[0-9a-f]{3}){1,2}$/i, Ah = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function Eh(a) {
  return 1 == a.length ? "0" + a : a
}
;function Fh() {
}
Fh.prototype.Bc = k;
var Gh;
function Hh() {
}
z(Hh, Fh);
function Ih(a) {
  return(a = Jh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Kh(a) {
  var b = {};
  Jh(a) && (b[0] = j, b[1] = j);
  return b
}
Hh.prototype.$d = k;
function Jh(a) {
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
Gh = new Hh;
function Lh(a) {
  this.headers = new Sb;
  this.Sb = a || k
}
z(Lh, cd);
Lh.prototype.a = P("goog.net.XhrIo");
var Mh = /^https?$/i;
q = Lh.prototype;
q.Ka = m;
q.k = k;
q.vd = k;
q.fe = "";
q.zf = "";
q.jc = "";
q.Nd = m;
q.Wc = m;
q.ae = m;
q.jb = m;
q.rd = 0;
q.qb = k;
q.Vf = "";
q.uh = m;
q.send = function(a, b, c, d) {
  this.k && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.fe = a;
  this.jc = "";
  this.zf = b;
  this.Nd = m;
  this.Ka = j;
  this.k = this.Sb ? Ih(this.Sb) : Ih(Gh);
  this.vd = this.Sb ? this.Sb.Bc || (this.Sb.Bc = Kh(this.Sb)) : Gh.Bc || (Gh.Bc = Kh(Gh));
  this.k.onreadystatechange = w(this.Mf, this);
  try {
    N(this.a, Nh(this, "Opening Xhr")), this.ae = j, this.k.open(b, a, j), this.ae = m
  }catch(e) {
    N(this.a, Nh(this, "Error opening Xhr: " + e.message));
    Oh(this, e);
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
  this.Vf && (this.k.responseType = this.Vf);
  "withCredentials" in this.k && (this.k.withCredentials = this.uh);
  try {
    this.qb && (ed.clearTimeout(this.qb), this.qb = k), 0 < this.rd && (N(this.a, Nh(this, "Will abort after " + this.rd + "ms if incomplete")), this.qb = ed.setTimeout(w(this.qh, this), this.rd)), N(this.a, Nh(this, "Sending request")), this.Wc = j, this.k.send(a), this.Wc = m
  }catch(h) {
    N(this.a, Nh(this, "Send error: " + h.message)), Oh(this, h)
  }
};
q.qh = function() {
  "undefined" != typeof ba && this.k && (this.jc = "Timed out after " + this.rd + "ms, aborting", N(this.a, Nh(this, this.jc)), this.dispatchEvent("timeout"), this.abort(8))
};
function Oh(a, b) {
  a.Ka = m;
  a.k && (a.jb = j, a.k.abort(), a.jb = m);
  a.jc = b;
  Ph(a);
  Qh(a)
}
function Ph(a) {
  a.Nd || (a.Nd = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
q.abort = function() {
  this.k && this.Ka && (N(this.a, Nh(this, "Aborting")), this.Ka = m, this.jb = j, this.k.abort(), this.jb = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Qh(this))
};
q.c = function() {
  this.k && (this.Ka && (this.Ka = m, this.jb = j, this.k.abort(), this.jb = m), Qh(this, j));
  Lh.f.c.call(this)
};
q.Mf = function() {
  !this.ae && !this.Wc && !this.jb ? this.Xg() : Rh(this)
};
q.Xg = function() {
  Rh(this)
};
function Rh(a) {
  if(a.Ka && "undefined" != typeof ba) {
    if(a.vd[1] && 4 == a.Pa() && 2 == Sh(a)) {
      N(a.a, Nh(a, "Local request error detected and ignored"))
    }else {
      if(a.Wc && 4 == a.Pa()) {
        ed.setTimeout(w(a.Mf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.Pa()) {
          N(a.a, Nh(a, "Request complete"));
          a.Ka = m;
          var b = Sh(a), c;
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
              b = ("" + a.fe).match(Ge)[1] || k, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !Mh.test(b ? b.toLowerCase() : "")
            }
            c = b
          }
          if(c) {
            a.dispatchEvent("complete"), a.dispatchEvent("success")
          }else {
            var d;
            try {
              d = 2 < a.Pa() ? a.k.statusText : ""
            }catch(e) {
              N(a.a, "Can not get status: " + e.message), d = ""
            }
            a.jc = d + " [" + Sh(a) + "]";
            Ph(a)
          }
          Qh(a)
        }
      }
    }
  }
}
function Qh(a, b) {
  if(a.k) {
    var c = a.k, d = a.vd[0] ? da : k;
    a.k = k;
    a.vd = k;
    a.qb && (ed.clearTimeout(a.qb), a.qb = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(e) {
      $d(a.a, "Problem encountered resetting onreadystatechange: " + e.message)
    }
  }
}
q.ce = function() {
  return!!this.k
};
q.Pa = function() {
  return this.k ? this.k.readyState : 0
};
function Sh(a) {
  try {
    return 2 < a.Pa() ? a.k.status : -1
  }catch(b) {
    return M(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.k && 4 == this.Pa() ? this.k.getResponseHeader(a) : i
};
function Nh(a, b) {
  return b + " [" + a.zf + " " + a.fe + " " + Sh(a) + "]"
}
;var Th = !(G || H && !I("420+"));
function Uh(a, b) {
  this.sd = a;
  this.qa = b
}
z(Uh, J);
q = Uh.prototype;
q.s = k;
q.Xa = -1;
q.mf = m;
q.sf = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Vh(a) {
  var b = lg(a.Ze), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.qa, c, b), 1 != b && a.g()) : a.g()
}
q.Ng = function() {
  Vh(this);
  if(!this.va) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.qa);
    this.g()
  }
};
q.bh = function() {
  var a = t.parent;
  if(a) {
    this.Xa = this.s.Pa();
    if(2 <= this.Xa && !this.mf) {
      for(var b = new Sb, c = this.sf.length;c--;) {
        var d = this.sf[c];
        try {
          b.set(d, this.s.k.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.ca() && (this.mf = j, a.__XHRMaster_ongotheaders(this.qa, Wb(b)), this.va)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.qa, this.Xa);
    Th && 3 == this.Xa && Vh(this)
  }else {
    this.g()
  }
};
q.je = function(a, b, c) {
  this.s = new Lh;
  L(this.s, "readystatechange", w(this.bh, this));
  L(this.s, "complete", w(this.Ng, this));
  this.s.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.Ze = new kg(this.s.k, 1048576)
};
q.c = function() {
  Uh.f.c.call(this);
  delete this.Ze;
  this.s && this.s.g();
  delete this.sd.vc[this.qa];
  delete this.sd
};
function Wh() {
  this.vc = {}
}
z(Wh, J);
Wh.prototype.Tg = function(a, b, c, d) {
  var e = new Uh(this, a);
  this.vc[a] = e;
  e.je(b, c, d)
};
Wh.prototype.xg = function(a) {
  (a = this.vc[a]) && a.g()
};
Wh.prototype.c = function() {
  Wh.f.c.call(this);
  for(var a = Sa(this.vc);a.length;) {
    a.pop().g()
  }
  delete this.vc
};
var Xh = new Wh;
t.__XHRSlave_makeRequest = w(Xh.Tg, Xh);
t.__XHRSlave_dispose = w(Xh.xg, Xh);
function Yh() {
}
Yh.prototype.jf = function() {
  return Boolean(Number((new Ie(document.location)).$.get("httpStreaming", "0"))) ? 2 : 1
};
function Zh() {
  var a = (new Ie(document.location)).$, b = "http" != a.get("mode"), c = Boolean(Number(a.get("useSub", "1"))), a = new Ie(document.location);
  b ? b = new rg("/httpface/", a.oa, t.__demo_mainSocketPort) : (c ? (b = t.__demo_shared_domain, a = a.B(), Le(a, "_____random_____." + b)) : a = a.B(), a.pb("/httpface/"), Ne(a, "", i), b = new tg(a.toString().replace("_____random_____", "%random%")));
  return sd(b)
}
;function $h(a) {
  this.q = a
}
var ai = /\s*;\s*/;
q = $h.prototype;
q.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && H) {
    var b = "COOKIES_TEST_" + y();
    bi.set(b, "1");
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
  for(var c = a + "=", d = (this.q.cookie || "").split(ai), e = 0, g;g = d[e];e++) {
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
  return ci(this).keys
};
q.ea = function() {
  return ci(this).ig
};
q.Qa = function() {
  return!this.q.cookie
};
q.ca = function() {
  return!this.q.cookie ? 0 : (this.q.cookie || "").split(ai).length
};
q.ha = function(a) {
  return ga(this.get(a))
};
q.Fc = function(a) {
  for(var b = ci(this).ig, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return j
    }
  }
  return m
};
q.clear = function() {
  for(var a = ci(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b])
  }
};
function ci(a) {
  for(var a = (a.q.cookie || "").split(ai), b = [], c = [], d, e, g = 0;e = a[g];g++) {
    d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)))
  }
  return{keys:b, ig:c}
}
var bi = new $h(document);
bi.ci = 3950;
function di() {
  this.Sf = y()
}
var ei = new di;
di.prototype.set = aa("Sf");
di.prototype.reset = function() {
  this.set(y())
};
di.prototype.get = n("Sf");
function fi(a) {
  this.$g = a || "";
  this.ih = ei
}
fi.prototype.$f = j;
fi.prototype.gh = j;
fi.prototype.fh = j;
fi.prototype.ag = m;
function gi(a) {
  return 10 > a ? "0" + a : "" + a
}
function hi(a, b) {
  var c = (a.cg - b) / 1E3, d = c.toFixed(3), e = 0;
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
ii.prototype.ag = j;
function ji(a) {
  this.ah = w(this.mg, this);
  this.gf = new ii;
  this.wf = this.gf.$f = m;
  this.e = a;
  this.zg = this.e.ownerDocument || this.e.document;
  var a = jf(this.e), b = k;
  if(G) {
    b = a.q.createStyleSheet(), Sf(b)
  }else {
    var c = mf(a.q, "head", i, i)[0];
    c || (b = mf(a.q, "body", i, i)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    Sf(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
ji.prototype.mg = function(a) {
  var b = 100 >= this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight, c = this.zg.createElement("div");
  c.className = "logmsg";
  var d = this.gf, e;
  switch(a.Gb.value) {
    case Rd.value:
      e = "dbg-sh";
      break;
    case Sd.value:
      e = "dbg-sev";
      break;
    case Td.value:
      e = "dbg-w";
      break;
    case Ud.value:
      e = "dbg-i";
      break;
    default:
      e = "dbg-f"
  }
  var g = [];
  g.push(d.$g, " ");
  if(d.$f) {
    var h = new Date(a.cg);
    g.push("[", gi(h.getFullYear() - 2E3) + gi(h.getMonth() + 1) + gi(h.getDate()) + " " + gi(h.getHours()) + ":" + gi(h.getMinutes()) + ":" + gi(h.getSeconds()) + "." + gi(Math.floor(h.getMilliseconds() / 10)), "] ")
  }
  d.gh && g.push("[", Da(hi(a, d.ih.get())), "s] ");
  d.fh && g.push("[", xa(a.Sg), "] ");
  g.push('<span class="', e, '">', wa(Da(xa(a.Hf))));
  d.ag && a.Qd && g.push("<br>", wa(Da(a.Pd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  b && (this.e.scrollTop = this.e.scrollHeight)
};
ji.prototype.clear = function() {
  this.e.innerHTML = ""
};
function ki(a, b, c, d, e, g) {
  6 == arguments.length ? this.setTransform(a, b, c, d, e, g) : (0 != arguments.length && f(Error("Insufficient matrix parameters")), this.V = this.Y = 1, this.R = this.W = this.X = this.Z = 0)
}
q = ki.prototype;
q.B = function() {
  return new ki(this.V, this.R, this.W, this.Y, this.X, this.Z)
};
q.setTransform = function(a, b, c, d, e, g) {
  (!ka(a) || !ka(b) || !ka(c) || !ka(d) || !ka(e) || !ka(g)) && f(Error("Invalid transform parameters"));
  this.V = a;
  this.R = b;
  this.W = c;
  this.Y = d;
  this.X = e;
  this.Z = g;
  return this
};
q.Ve = function(a) {
  this.V = a.V;
  this.R = a.R;
  this.W = a.W;
  this.Y = a.Y;
  this.X = a.X;
  this.Z = a.Z;
  return this
};
q.scale = function(a, b) {
  this.V *= a;
  this.R *= a;
  this.W *= b;
  this.Y *= b;
  return this
};
q.translate = function(a, b) {
  this.X += a * this.V + b * this.W;
  this.Z += a * this.R + b * this.Y;
  return this
};
q.rotate = function(a, b, c) {
  var d = new ki, e = Math.cos(a), a = Math.sin(a), b = d.setTransform(e, a, -a, e, b - b * e + c * a, c - b * a - c * e), c = this.V, d = this.W;
  this.V = b.V * c + b.R * d;
  this.W = b.W * c + b.Y * d;
  this.X += b.X * c + b.Z * d;
  c = this.R;
  d = this.Y;
  this.R = b.V * c + b.R * d;
  this.Y = b.W * c + b.Y * d;
  this.Z += b.X * c + b.Z * d;
  return this
};
q.toString = function() {
  return"matrix(" + [this.V, this.R, this.W, this.Y, this.X, this.Z].join() + ")"
};
q.m = function(a) {
  return this == a ? j : !a ? m : this.V == a.V && this.W == a.W && this.X == a.X && this.R == a.R && this.Y == a.Y && this.Z == a.Z
};
function X(a, b) {
  this.e = a;
  this.ya = b;
  this.Jd = m
}
z(X, cd);
q = X.prototype;
q.ya = k;
q.e = k;
q.eg = k;
q.b = n("e");
q.addEventListener = function(a, b, c, d) {
  L(this.e, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Vc(this.e, a, b, c, d)
};
q.c = function() {
  X.f.c.call(this);
  Zc(this.e)
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
Y.prototype.Fg = n("fill");
Y.prototype.Hg = n("Je");
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
  uf(this.b())
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
  this.H = [];
  this.d = [];
  this.ta = []
}
Z.prototype.wb = k;
Z.prototype.ba = k;
Z.prototype.Nb = j;
var wi = [2, 2, 6, 6, 0];
q = Z.prototype;
q.clear = function() {
  this.H.length = 0;
  this.d.length = 0;
  this.ta.length = 0;
  delete this.wb;
  delete this.ba;
  delete this.Nb;
  return this
};
q.moveTo = function(a, b) {
  0 == this.H[this.H.length - 1] ? this.ta.length -= 2 : (this.H.push(0), this.d.push(1));
  this.ta.push(a, b);
  this.ba = this.wb = [a, b];
  return this
};
q.lineTo = function(a) {
  var b = this.H[this.H.length - 1];
  b == k && f(Error("Path cannot start with lineTo"));
  1 != b && (this.H.push(1), this.d.push(0));
  for(b = 0;b < arguments.length;b += 2) {
    var c = arguments[b], d = arguments[b + 1];
    this.ta.push(c, d)
  }
  this.d[this.d.length - 1] += b / 2;
  this.ba = [c, d];
  return this
};
q.Ye = function(a) {
  var b = this.H[this.H.length - 1];
  b == k && f(Error("Path cannot start with curve"));
  2 != b && (this.H.push(2), this.d.push(0));
  for(b = 0;b < arguments.length;b += 6) {
    var c = arguments[b + 4], d = arguments[b + 5];
    this.ta.push(arguments[b], arguments[b + 1], arguments[b + 2], arguments[b + 3], c, d)
  }
  this.d[this.d.length - 1] += b / 6;
  this.ba = [c, d];
  return this
};
q.close = function() {
  var a = this.H[this.H.length - 1];
  a == k && f(Error("Path cannot start with close"));
  4 != a && (this.H.push(4), this.d.push(1), this.ba = this.wb);
  return this
};
q.arcTo = function(a, b, c, d) {
  var e = this.ba[0] - a * Math.cos(ne(c)) + a * Math.cos(ne(c + d)), g = this.ba[1] - b * Math.sin(ne(c)) + b * Math.sin(ne(c + d));
  this.H.push(3);
  this.d.push(1);
  this.ta.push(a, b, c, d, e, g);
  this.Nb = m;
  this.ba = [e, g];
  return this
};
q.og = function(a, b, c, d) {
  for(var e = this.ba[0] - a * Math.cos(ne(c)), g = this.ba[1] - b * Math.sin(ne(c)), h = ne(d), d = Math.ceil(2 * (Math.abs(h) / Math.PI)), h = h / d, c = ne(c), l = 0;l < d;l++) {
    var o = Math.cos(c), r = Math.sin(c), A = 4 / 3 * Math.sin(h / 2) / (1 + Math.cos(h / 2)), s = e + (o - A * r) * a, x = g + (r + A * o) * b, c = c + h, o = Math.cos(c), r = Math.sin(c);
    this.Ye(s, x, e + (o + A * r) * a, g + (r - A * o) * b, e + o * a, g + r * b)
  }
  return this
};
function xi(a, b) {
  for(var c = a.ta, d = 0, e = 0, g = a.H.length;e < g;e++) {
    var h = a.H[e], l = wi[h] * a.d[e];
    b(h, c.slice(d, d + l));
    d += l
  }
}
q.B = function() {
  var a = new this.constructor;
  a.H = this.H.concat();
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
yi[3] = Z.prototype.og;
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
Z.prototype.Qa = function() {
  return 0 == this.H.length
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
q.L = k;
q.La = 0;
q.bb = 0;
q.lf = function() {
  return this.da()
};
q.da = function() {
  return this.r ? Qf(this.b()) : ka(this.width) && ka(this.height) ? new R(this.width, this.height) : k
};
function Bi(a) {
  var b = a.da();
  return b ? b.width / (a.na ? new R(a.na, a.Yb) : a.da()).width : 0
}
;function Ci(a, b, c, d, e) {
  Ai.call(this, a, b, c, d, e);
  this.af = {};
  this.Oe = H && !I(526);
  this.hb = new Vf(this)
}
var Di;
z(Ci, Ai);
function Ei(a, b, c) {
  a = a.Q.q.createElementNS("http://www.w3.org/2000/svg", b);
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
  (b || this.L).b().appendChild(a.b())
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
  this.L = new pi(b, this);
  a.appendChild(this.Ld);
  a.appendChild(b);
  this.e = a;
  if(this.na || this.La || this.bb) {
    this.b().setAttribute("preserveAspectRatio", "none"), this.Oe ? this.td() : this.b().setAttribute("viewBox", this.La + " " + this.bb + " " + (this.na ? this.na + " " + this.Yb : ""))
  }
};
q.td = function() {
  if(this.r && (this.na || this.La || !this.bb)) {
    var a = this.da();
    if(0 == a.width) {
      this.b().style.visibility = "hidden"
    }else {
      this.b().style.visibility = "";
      var b = -this.La, c = -this.bb, d = a.width / this.na, a = a.height / this.Yb;
      this.L.b().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
q.fa = function(a, b) {
  Of(this.b(), a, b)
};
q.da = function() {
  if(!oc) {
    return this.r ? Qf(this.b()) : Ci.f.da.call(this)
  }
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.r && (c || d)) {
    return k
  }
  var e, g;
  c && (e = this.b().parentNode, g = Qf(e), a = parseFloat(a) * g.width / 100);
  d && (e = e || this.b().parentNode, g = g || Qf(e), b = parseFloat(b) * g.height / 100);
  return new R(a, b)
};
q.clear = function() {
  this.L.clear();
  uf(this.Ld);
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
    "string" == typeof a && -1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%") && T(this.hb, Fi(), fd, this.td);
    this.td()
  }
};
q.eb = function() {
  Ci.f.eb.call(this);
  this.Oe && Xf(this.hb, Fi(), fd, this.td)
};
q.c = function() {
  delete this.af;
  delete this.Ld;
  delete this.L;
  Ci.f.c.call(this)
};
function Fi() {
  Di || (Di = new dd(400), Di.start());
  return Di
}
;function Gi() {
  return this.e = this.ya.Q.b(this.U) || this.e
}
function Hi(a, b) {
  this.U = a.id;
  X.call(this, a, b)
}
z(Hi, mi);
Hi.prototype.b = Gi;
Hi.prototype.clear = function() {
  uf(this.b())
};
Hi.prototype.fa = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  this.ya.L != this && (c.coordorigin = "0 0")
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
  this.hb = new Vf(this)
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
  var c = a.Q.createElement("g_vml_:" + b);
  c.id = "goog_" + Fa++;
  return c
}
function Oi(a) {
  Mi && a.r && (a.b().innerHTML = a.b().innerHTML)
}
Li.prototype.ub = function(a, b) {
  (b || this.L).b().appendChild(a.b());
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
    1 > d ? (e = e || Ni(this, "stroke"), e.opacity = d, e.Ki = "1px", e.color = b.ka(), c.appendChild(e)) : (e && c.removeChild(e), c.strokecolor = b.ka(), c.strokeweight = d + "px")
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
  var a = this.Q.q;
  a.namespaces.g_vml_ || (Mi ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}");
  var a = this.width, b = this.height, c = this.Q.i("div", {style:"overflow:hidden;position:relative;width:" + (v(a) && sa(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (v(b) && sa(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = Ni(this, "group"), e = d.style;
  e.position = "absolute";
  e.left = e.top = 0;
  e.width = this.width;
  e.height = this.height;
  d.coordsize = this.na ? $(this.na) + " " + $(this.Yb) : $(a) + " " + $(b);
  d.coordorigin = ga(this.La) ? $(this.La) + " " + $(this.bb) : "0 0";
  c.appendChild(d);
  this.L = new Hi(d, this);
  L(c, "resize", w(this.Wd, this))
};
q.Wd = function() {
  var a = Qf(this.b()), b = this.L.b().style;
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
  Of(this.b(), a, b)
};
q.da = function() {
  var a = this.b();
  return new R(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
q.clear = function() {
  this.L.clear()
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
  this.L = k;
  Li.f.c.call(this)
};
function Ri(a) {
  X.call(this, k, a);
  this.S = []
}
z(Ri, mi);
Ri.prototype.clear = function() {
  this.S.length && (this.S.length = 0, Si(this.ya))
};
Ri.prototype.fa = function() {
};
Ri.prototype.appendChild = function(a) {
  this.S.push(a)
};
Ri.prototype.Da = function() {
  for(var a = 0, b = this.S.length;a < b;a++) {
    Ti(this.ya, this.S[a])
  }
};
function Ui(a, b, c, d, e, g, h, l) {
  Y.call(this, a, b, h, l);
  this.tg = c;
  this.ug = d;
  this.Wf = e;
  this.Xf = g;
  this.A = new Z;
  this.A.clear();
  this.A.moveTo(this.tg + this.Wf * Math.cos(ne(0)), this.ug + this.Xf * Math.sin(ne(0)));
  this.A.arcTo(this.Wf, this.Xf, 0, 360);
  this.A.close();
  this.Yg = new Vi(k, b, this.A, h, l)
}
z(Ui, ni);
Ui.prototype.Da = function(a) {
  this.Yg.Da(a)
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
Vi.prototype.Da = function(a) {
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
  this.xh = c;
  this.zh = d;
  this.Pe = e;
  this.Vd = g;
  this.hh = h
}
z(Wi, oi);
Wi.prototype.$b = m;
Wi.prototype.fa = function(a, b) {
  this.Pe = a;
  this.Vd = b;
  this.$b && Si(this.ya)
};
Wi.prototype.Da = function(a) {
  this.uf ? (this.Pe && this.Vd && a.drawImage(this.uf, this.xh, this.zh, this.Pe, this.Vd), this.$b = j) : (a = new Image, a.onload = w(this.Jg, this, a), a.src = this.hh)
};
Wi.prototype.Jg = function(a) {
  this.uf = a;
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
  var d = b.eg ? b.eg.B() : new ki, e = d.X, g = d.Z;
  (e || g) && c.translate(e, g);
  (d = d.R) && c.rotate(Math.asin(d))
}
q.i = function() {
  var a = this.Q.i("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Wb = this.Q.i("canvas");
  a.appendChild(this.Wb);
  this.Rg = this.L = new Ri(this);
  this.dh = 0;
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
  c && (e = this.b().parentNode, g = Qf(e), a = parseFloat(a) * g.width / 100);
  d && (e = e || this.b().parentNode, g = g || Qf(e), b = parseFloat(b) * g.height / 100);
  return new R(a, b)
};
function Zi(a) {
  Of(a.b(), a.width, a.height);
  var b = a.da();
  b && (Of(a.Wb, b.width, b.height), a.Wb.width = b.width, a.Wb.height = b.height, a.xb = k)
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
  this.L.clear();
  for(var a = this.b();1 < a.childNodes.length;) {
    a.removeChild(a.lastChild)
  }
};
function Si(a) {
  if(!a.Hi && a.r) {
    a.reset();
    if(a.na) {
      var b = a.da();
      a.getContext().scale(b.width / a.na, b.height / a.Yb)
    }
    (a.La || a.bb) && a.getContext().translate(-a.La, -a.bb);
    Yi(a, a.L);
    a.L.Da(a.xb);
    a.getContext().restore()
  }
}
function Ti(a, b) {
  var c = a.getContext();
  Yi(a, b);
  if(!b.Fg || !b.Hg) {
    b.Da(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof ui) {
        0 != d.lc && (c.globalAlpha = d.lc, c.fillStyle = d.ka(), b.Da(c), c.fill(), c.globalAlpha = 1)
      }else {
        var e = c.createLinearGradient(d.Ci(), d.Ei(), d.Di(), d.Fi());
        e.addColorStop(0, d.Ai());
        e.addColorStop(1, d.Bi());
        c.fillStyle = e;
        b.Da(c);
        c.fill()
      }
    }
    if(d = b.Je) {
      b.Da(c), c.strokeStyle = d.ka(), d = d.sb, v(d) && -1 != d.indexOf("px") && (d = parseFloat(d) / Bi(a)), c.lineWidth = d, c.stroke()
    }
  }
  a.getContext().restore()
}
q.ub = function(a, b) {
  this.append(a, b)
};
q.append = function(a, b) {
  b = b || this.L;
  b.appendChild(a);
  this.r && !this.dh && !(b != this.L && b != this.Rg) && Ti(this, a)
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
  this.D = [];
  aj(this, a)
}
z($i, cd);
q = $i.prototype;
q.Za = k;
q.ve = k;
function aj(a, b) {
  b && (Xa(b, function(a) {
    this.sc(a, m)
  }, a), fb(a.D, b))
}
q.Ud = n("Za");
q.kf = function() {
  return eb(this.D)
};
q.nd = function(a) {
  a != this.Za && (this.sc(this.Za, m), this.Za = a, this.sc(a, j));
  this.dispatchEvent("select")
};
q.Td = function() {
  return this.Za ? Wa(this.D, this.Za) : -1
};
q.Be = function(a) {
  this.nd(this.D[a] || k)
};
q.clear = function() {
  bb(this.D);
  this.Za = k
};
q.c = function() {
  $i.f.c.call(this);
  delete this.D;
  this.Za = k
};
q.sc = function(a, b) {
  a && ("function" == typeof this.ve ? this.ve(a, b) : "function" == typeof a.Ae && a.Ae(b))
};
function bj() {
}
z(bj, Ug);
ea(bj);
var cj = 0;
bj.prototype.i = function(a) {
  var b = Xg(this, a);
  return a.Ha().i("div", b ? b.join(" ") : k, dj(this, a.ia, a.lf(), a.Ha()))
};
function dj(a, b, c, d) {
  for(var e = [], g = 0, h = 0;g < c.height;g++) {
    for(var l = [], o = 0;o < c.width;o++) {
      var r = b && b[h++];
      l.push(ej(a, r, d))
    }
    e.push(d.i("tr", a.w() + "-row", l))
  }
  return a.Xe(e, d)
}
bj.prototype.Xe = function(a, b) {
  var c = b.i("table", this.w() + "-table", b.i("tbody", this.w() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Tg(c, "grid");
  return c
};
function ej(a, b, c) {
  a = c.i("td", {"class":a.w() + "-cell", id:a.w() + "-cell-" + cj++}, b);
  Tg(a, "gridcell");
  return a
}
bj.prototype.jd = function(a, b) {
  if(a) {
    var c = mf(document, "tbody", this.w() + "-body", a)[0];
    if(c) {
      var d = 0;
      Xa(c.rows, function(a) {
        Xa(a.cells, function(a) {
          uf(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var e = [], g = jf(a), h = c.rows[0].cells.length;d < b.length;) {
          var l = b[d++];
          e.push(ej(this, l, g));
          e.length == h && (l = g.i("tr", this.w() + "-row", e), c.appendChild(l), e.length = 0)
        }
        if(0 < e.length) {
          for(;e.length < h;) {
            e.push(ej(this, "", g))
          }
          l = g.i("tr", this.w() + "-row", e);
          c.appendChild(l)
        }
      }
    }
    Uf(a, j, oc)
  }
};
function fj(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && ab(df(c), a.w() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function gj(a, b, c, d) {
  c && (c = c.parentNode, a = a.w() + "-cell-hover", d ? ef(c, a) : ff(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id))
}
bj.prototype.w = p("goog-palette");
function hj(a, b, c) {
  V.call(this, a, b || bj.Oa(), c)
}
z(hj, V);
q = hj.prototype;
q.o = k;
q.ib = -1;
q.N = k;
q.c = function() {
  hj.f.c.call(this);
  this.N && (this.N.g(), this.N = k);
  this.o = k
};
q.kd = function(a) {
  hj.f.kd.call(this, a);
  ij(this);
  this.N ? (this.N.clear(), aj(this.N, a)) : (this.N = new $i(a), this.N.ve = w(this.sc, this), T(bg(this), this.N, "select", this.Mg));
  this.ib = -1
};
q.hf = p(k);
q.Tc = function(a) {
  hj.f.Tc.call(this, a);
  var b = fj(this.l, this, a.target);
  if((!b || !a.relatedTarget || !wf(b, a.relatedTarget)) && b != jj(this)) {
    a = this.ia, lj(this, a ? Wa(a, b) : -1)
  }
};
q.Sc = function(a) {
  hj.f.Sc.call(this, a);
  var b = fj(this.l, this, a.target);
  (!b || !a.relatedTarget || !wf(b, a.relatedTarget)) && b == jj(this) && gj(this.l, this, b, m)
};
q.Rc = function(a) {
  hj.f.Rc.call(this, a);
  if(this.ce() && (a = fj(this.l, this, a.target), a != jj(this))) {
    var b = this.ia;
    lj(this, b ? Wa(b, a) : -1)
  }
};
q.lb = function() {
  var a = jj(this);
  return a ? (this.nd(a), this.dispatchEvent("action")) : m
};
q.qf = function(a) {
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
q.Mg = function() {
};
q.lf = n("o");
q.fa = function(a, b) {
  this.b() && f(Error("Component already rendered"));
  this.o = ka(a) ? new R(a, b) : a;
  ij(this)
};
function jj(a) {
  var b = a.ia;
  return b && b[a.ib]
}
function lj(a, b) {
  b != a.ib && (mj(a, a.ib, m), a.ib = b, mj(a, b, j))
}
q.Td = function() {
  return this.N ? this.N.Td() : -1
};
q.Ud = function() {
  return this.N ? this.N.Ud() : k
};
q.Be = function(a) {
  this.N && this.N.Be(a)
};
q.nd = function(a) {
  this.N && this.N.nd(a)
};
function mj(a, b, c) {
  if(a.b()) {
    var d = a.ia;
    d && 0 <= b && b < d.length && gj(a.l, a, d[b], c)
  }
}
q.sc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.l.w() + "-cell-selected";
    b ? ef(c, d) : ff(c, d)
  }
};
function ij(a) {
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
  hj.call(this, k, b || bj.Oa(), c);
  this.Dc = this.Dc;
  this.bd = k;
  this.jd(oj(this))
}
z(nj, hj);
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
    var c = this.Ha().i("div", {"class":this.l.w() + "-colorswatch", style:"background-color:" + a});
    c.title = "#" == a.charAt(0) ? "RGB (" + Dh(a).join(", ") + ")" : a;
    return c
  }, a)
}
function qj(a) {
  if(a) {
    try {
      return xh(a).Vc
    }catch(b) {
    }
  }
  return k
}
;var sj = P("whiteboard.logger");
window.onerror = function(a, b, c) {
  $d(sj, "window.onerror: message: " + F(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function tj() {
  this.re = new Db
}
tj.prototype.mh = function(a, b) {
  sj.info("streamReset: reasonString=" + F(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  uj = k
};
tj.prototype.nh = function(a) {
  var a = Fb(a), b = a[0], c = a[1];
  1 == b ? (c = this.re.Md(zb.ec(), c), a = ob(c, 1), b = ob(c, 2), c = c.ka(), ub.Gc(a, b, 5, 5, new vi(1, "black"), new ui(c), i)) : 2 == b ? (ub.g(), vj()) : M(sj, "Strange message from server: " + F(a))
};
tj.prototype.reset = function(a) {
  sj.info("resetting with reason: " + a);
  this.I.reset(a)
};
var uj = k, wj = new ud(t.window);
function xj() {
  uj && (uj.reset("idle timeout fired"), uj = k)
}
var yj = k;
function zj() {
  yj != k && wj.P.clearTimeout(yj);
  uj && (yj = wj.P.setTimeout(xj, 2592E5))
}
L(window, ["click", "focus", "keydown", "keypress"], zj, j);
function Aj() {
  var a = new Yh;
  uj = new tj;
  zj();
  od(Zh(), function(b) {
    uj || f(Error("lastProto falsy?"));
    var b = new yg(b, a, wj), c = uj;
    b.qe = w(c.nh, c);
    b.onreset = w(c.mh, c);
    uj.I = b;
    Eg(uj.I, ["subprotocol:whiteboard"]);
    b.start();
    return k
  })
}
function Bj() {
  ub.g();
  vj();
  var a = uj;
  sj.info("Telling server to clear the board.");
  Eg(a.I, [Gb([2, a.re.uc(new Ab)])])
}
function Cj(a) {
  var b = new Mc(a), a = b.offsetX, c = b.offsetY;
  ub.Gc(a, c, 5, 5, new vi(1, "black"), new ui(vb), i);
  var d = uj, e = vb;
  sj.info("Telling server about circle at: " + a + ", " + c + " with color " + e);
  var b = d.I, g = new zb;
  pb(g, 1, a);
  pb(g, 2, c);
  pb(g, 3, e);
  a = d.re.uc(g);
  Eg(b, [Gb([1, a])])
}
function vj() {
  var a;
  a = G && !I("9") ? new Li(800, 600, i, i, i) : H && (!I("420") || pc) ? new Xi(800, 600, i, i, i) : new Ci(800, 600, i, i, i);
  a.i();
  wb = S("drawArea");
  cg(a, wb);
  ub = a
}
var rj = "#E06666";
function Dj(a) {
  var b;
  (a = a.target.Ud()) ? (a = a.style[Ha("background-color")] || "", b = qj(a)) : b = k;
  b || (b = rj);
  vb = b;
  bi.set("whiteboard_defaultColor", b);
  a = S("whiteboard-cp-value");
  v("background-color") ? Mf(a, b, "background-color") : Ra("background-color", ra(Mf, a));
  a = S("whiteboard-cp-value");
  a.title = b;
  b = xh(b).Vc;
  xf(a, b);
  b = Dh(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = Bh(b[0], b[1], b[2]);
  v("color") ? Mf(a, b, "color") : Ra("color", ra(Mf, a))
}
function Ej() {
  xb = (new Ie(document.location)).$;
  if(yb = Boolean(Number(xb.get("logging", "0")))) {
    de().md(Yd);
    var a = new ji(document.getElementById("log"));
    if(j != a.wf) {
      var b = de(), c = a.ah;
      b.hc || (b.hc = []);
      b.hc.push(c);
      a.wf = j
    }
  }else {
    de().md(Qd)
  }
  sj.info("Logger works.");
  (a = bi.get("whiteboard_defaultColor")) && (rj = a);
  vb = rj;
  b = S("whiteboard-controls-left");
  a = S("whiteboard-controls-right");
  c = pf("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  tf(b, c);
  c = pf("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  tf(b, c);
  b = new nj("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.fa(8);
  cg(b, S("whiteboard-cp"));
  L(b, "action", Dj);
  pj(b);
  Dj({target:b});
  b = new vh("Clear board");
  kh(b, "clear-board-button");
  cg(b, a);
  L(b, "action", Bj);
  a = S("drawAreaOverlay");
  Uf(a, j);
  L(a, "click", Cj, m);
  vj();
  Aj()
}
var Fj = "__whiteboard_init".split("."), Gj = t;
!(Fj[0] in Gj) && Gj.execScript && Gj.execScript("var " + Fj[0]);
for(var Hj;Fj.length && (Hj = Fj.shift());) {
  !Fj.length && ga(Ej) ? Gj[Hj] = Ej : Gj = Gj[Hj] ? Gj[Hj] : Gj[Hj] = {}
}
;})();
