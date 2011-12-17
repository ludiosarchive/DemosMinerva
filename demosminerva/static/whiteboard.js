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
}, E = D.forEach ? function(a, b, c) {
  D.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
}, Xa = D.map ? function(a, b, c) {
  return D.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), g = v(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (e[h] = b.call(c, g[h], h, a))
  }
  return e
}, Ya = D.some ? function(a, b, c) {
  return D.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && b.call(c, e[g], g, a)) {
      return j
    }
  }
  return m
}, Za = D.every ? function(a, b, c) {
  return D.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && !b.call(c, e[g], g, a)) {
      return m
    }
  }
  return j
};
function $a(a, b) {
  return 0 <= Wa(a, b)
}
function ab(a) {
  if(!u(a)) {
    for(var b = a.length - 1;0 <= b;b--) {
      delete a[b]
    }
  }
  a.length = 0
}
function bb(a, b) {
  var c = Wa(a, b);
  0 <= c && D.splice.call(a, c, 1)
}
function cb(a) {
  return D.concat.apply(D, arguments)
}
function db(a) {
  if(u(a)) {
    return cb(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
}
function eb(a, b) {
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
function fb(a, b, c, d) {
  D.splice.apply(a, gb(arguments, 1))
}
function gb(a, b, c) {
  return 2 >= arguments.length ? D.slice.call(a, b) : D.slice.call(a, b, c)
}
function hb(a, b) {
  D.sort.call(a, b || ib)
}
function ib(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function jb(a, b, c) {
  this.Gf = a;
  this.le = b.name || k;
  this.Ma = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.Ma[b.M] = b
  }
}
function kb(a) {
  a = Sa(a.Ma);
  hb(a, function(a, c) {
    return a.M - c.M
  });
  return a
}
;function lb() {
  this.t = {};
  this.zb = this.constructor.zb;
  var a = this.zb.Ma, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.Ma = b;
  this.Zb = this.he = k
}
function mb(a, b) {
  for(var c in a.t) {
    a.Ma[c] || b.call(a, Number(c), a.t[c])
  }
}
q = lb.prototype;
q.ec = n("zb");
q.get = function(a, b) {
  return nb(this, a.M, b)
};
q.set = function(a, b) {
  ob(this, a.M, b)
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
  for(var b = kb(this.ec()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(pb(this, d.M) != pb(a, d.M)) {
      return m
    }
    if(pb(this, d.M)) {
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
  for(var b = kb(this.ec()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete this.t[d.M];
    if(pb(a, d.M)) {
      var e = Qa(d);
      if(d.Db) {
        var g;
        g = a;
        var h = d.M;
        qb(g, g.Ma[h]);
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
function pb(a, b) {
  return b in a.t && ga(a.t[b]) && a.t[b] !== k
}
function qb(a, b) {
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
function nb(a, b, c) {
  var d = a.Ma[b];
  qb(a, d);
  if(d.Db) {
    return c = c || 0, 0 <= c && rb(a, b), a.t[b][c]
  }
  u(a.t[b]);
  return b in a.t ? a.t[b] : k
}
function rb(a, b) {
  return a.Ma[b].Db ? (pb(a, b) && u(a.t[b]), pb(a, b) ? a.t[b].length : 0) : pb(a, b) ? 1 : 0
}
function ob(a, b, c) {
  a.t[b] = c;
  a.Zb && (a.Zb[b] = j)
}
function sb(a, b) {
  var c = [], d, e;
  for(e in b) {
    b.hasOwnProperty(e) && (0 == e ? d = b[0] : c.push(new Ka(a, e, b[e])))
  }
  a.zb = new jb(a, d, c);
  a.ec = function() {
    return a.zb
  }
}
;var tb, ub, vb, wb, xb;
function yb() {
  lb.apply(this)
}
z(yb, lb);
yb.prototype.ka = function() {
  return nb(this, 3)
};
function zb() {
  lb.apply(this)
}
z(zb, lb);
sb(yb, {"0":{name:"Point", Eg:"demosminerva.whiteboard_messages.Point"}, 1:{name:"x", Sd:5, type:Number}, 2:{name:"y", Sd:5, type:Number}, 3:{name:"color", Sd:9, type:String}});
sb(zb, {"0":{name:"ClearBoard", Eg:"demosminerva.whiteboard_messages.ClearBoard"}});
function Ab() {
}
Ab.prototype.Nc = function(a, b) {
  return Qa(a) ? this.uc(b) : b
};
Ab.prototype.Md = function(a) {
  new a.Gf;
  f(Error("Unimplemented"))
};
Ab.prototype.Mc = function(a, b) {
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
function Bb() {
}
z(Bb, Ab);
Bb.prototype.Md = function(a, b) {
  var c = new a.Gf;
  c.he = this;
  c.t = b;
  c.Zb = {};
  return c
};
function Cb() {
}
z(Cb, Bb);
Cb.prototype.uc = function(a) {
  for(var b = kb(a.ec()), c = [], d = 0;d < b.length;d++) {
    var e = b[d];
    if(pb(a, e.M)) {
      var g = e.M;
      if(e.Db) {
        c[g] = [];
        for(var h = 0;h < rb(a, e.M);h++) {
          c[g][h] = this.Nc(e, a.get(e, h))
        }
      }else {
        c[g] = this.Nc(e, a.get(e))
      }
    }
  }
  mb(a, function(a, b) {
    c[a] = b
  });
  return c
};
Cb.prototype.Nc = function(a, b) {
  return 8 == a.cc ? b ? 1 : 0 : Ab.prototype.Nc.apply(this, arguments)
};
Cb.prototype.Mc = function(a, b) {
  return 8 == a.cc ? 1 === b : Ab.prototype.Mc.apply(this, arguments)
};
function Db(a) {
  return la(a) || "object" == typeof a && la(a.call) && la(a.apply)
}
;function Eb(a) {
  a = "" + a;
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  f(Error("Invalid JSON string: " + a))
}
function Fb(a) {
  return(new Gb(i)).uc(a)
}
function Gb(a) {
  this.gd = a
}
Gb.prototype.uc = function(a) {
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
      if(u(b)) {
        var d = b.length;
        c.push("[");
        for(var e = "", g = 0;g < d;g++) {
          c.push(e), e = b[g], Hb(a, a.gd ? a.gd.call(b, "" + g, e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" != typeof e && (c.push(d), Ib(g, c), c.push(":"), Hb(a, a.gd ? a.gd.call(b, g, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      f(Error("Unknown type: " + typeof b))
  }
}
var Jb = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Kb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Ib(a, b) {
  b.push('"', a.replace(Kb, function(a) {
    if(a in Jb) {
      return Jb[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return Jb[a] = e + b.toString(16)
  }), '"')
}
;function Lb(a, b, c) {
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
        Ib(a, b)
      }else {
        if(Db(a.u)) {
          a.u(b, c)
        }else {
          if(Db(a.lg)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if("array" == d) {
                d = a.length;
                b.push("[");
                for(var e = "", g = 0;g < d;g++) {
                  b.push(e), Lb(a[g], b, c), e = ", "
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
function F(a, b, c) {
  c || (c = []);
  Lb(a, b, c)
}
function G(a) {
  var b = [];
  F(a, b, i);
  return b.join("")
}
;function Mb(a) {
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
function Nb(a) {
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
function Ob(a) {
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
function Pb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ha(a) || v(a)) {
      E(a, b, c)
    }else {
      for(var d = Ob(a), e = Nb(a), g = e.length, h = 0;h < g;h++) {
        b.call(c, e[h], d && d[h], a)
      }
    }
  }
}
function Qb(a, b) {
  if("function" == typeof a.every) {
    return a.every(b, i)
  }
  if(ha(a) || v(a)) {
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
q = Rb.prototype;
q.d = 0;
q.ca = n("d");
q.ea = function() {
  Sb(this);
  for(var a = [], b = 0;b < this.n.length;b++) {
    a.push(this.z[this.n[b]])
  }
  return a
};
q.xa = function() {
  Sb(this);
  return this.n.concat()
};
q.ha = function(a) {
  return Tb(this.z, a)
};
q.Fc = function(a) {
  for(var b = 0;b < this.n.length;b++) {
    var c = this.n[b];
    if(Tb(this.z, c) && this.z[c] == a) {
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
  var c = b || Ub;
  Sb(this);
  for(var d, e = 0;d = this.n[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function Ub(a, b) {
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
  return Tb(this.z, a) ? (delete this.z[a], this.d--, this.n.length > 2 * this.d && Sb(this), j) : m
};
function Sb(a) {
  if(a.d != a.n.length) {
    for(var b = 0, c = 0;b < a.n.length;) {
      var d = a.n[b];
      Tb(a.z, d) && (a.n[c++] = d);
      b++
    }
    a.n.length = c
  }
  if(a.d != a.n.length) {
    for(var e = {}, c = b = 0;b < a.n.length;) {
      d = a.n[b], Tb(e, d) || (a.n[c++] = d, e[d] = 1), b++
    }
    a.n.length = c
  }
}
q.get = function(a, b) {
  return Tb(this.z, a) ? this.z[a] : b
};
q.set = function(a, b) {
  Tb(this.z, a) || (this.d++, this.n.push(a));
  this.z[a] = b
};
q.xd = function(a) {
  var b;
  a instanceof Rb ? (b = a.xa(), a = a.ea()) : (b = Ta(a), a = Sa(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
q.B = function() {
  return new Rb(this)
};
function Vb(a) {
  Sb(a);
  for(var b = {}, c = 0;c < a.n.length;c++) {
    var d = a.n[c];
    b[d] = a.z[d]
  }
  return b
}
function Tb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function Wb(a) {
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
;var Xb, Yb;
function Zb(a, b) {
  this.tb = a;
  this.ob = b
}
Zb.prototype.m = function(a) {
  return a instanceof Zb && this.tb == a.tb && this.ob.join(",") == a.ob
};
Zb.prototype.u = function(a, b) {
  a.push("new SACK(", "" + this.tb, ", ");
  F(this.ob, a, b);
  a.push(")")
};
function $b() {
  this.D = new Rb
}
q = $b.prototype;
q.cb = -1;
q.o = 0;
q.append = function(a) {
  var b = Wb(a);
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
  hb(a);
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
  this.ab = new Rb
}
bc.prototype.kb = -1;
bc.prototype.o = 0;
function cc(a) {
  var b = a.ab.xa();
  hb(b);
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
var nc = fc, H = gc, oc = jc, I = hc, pc = ic, qc = t.navigator, rc = -1 != (qc && qc.platform || "").indexOf("Mac"), sc;
a: {
  var tc = "", uc;
  if(nc && t.opera) {
    var vc = t.opera.version, tc = "function" == typeof vc ? vc() : vc
  }else {
    if(oc ? uc = /rv\:([^\);]+)(\)|;)/ : H ? uc = /MSIE\s+([^\);]+)(\)|;)/ : I && (uc = /WebKit\/(\S+)/), uc) {
      var wc = uc.exec(kc()), tc = wc ? wc[1] : ""
    }
  }
  if(H) {
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
function J(a) {
  return zc[a] || (zc[a] = 0 <= Ea(sc, a))
}
var Ac = {};
function Bc() {
  return Ac[9] || (Ac[9] = H && document.documentMode && 9 <= document.documentMode)
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
var Ec = !H || Bc(), Fc = !H || Bc(), Gc = H && !J("8");
!I || J("528");
oc && J("1.9b") || H && J("8") || nc && J("9.5") || I && J("528");
!oc || J("8");
var Hc = {Fh:"click", Kh:"dblclick", ei:"mousedown", ii:"mouseup", hi:"mouseover", gi:"mouseout", fi:"mousemove", si:"selectstart", Zh:"keypress", Yh:"keydown", $h:"keyup", Dh:"blur", Sh:"focus", Lh:"deactivate", Th:H ? "focusin" : "DOMFocusIn", Uh:H ? "focusout" : "DOMFocusOut", Eh:"change", ri:"select", ti:"submit", Xh:"input", ni:"propertychange", Ph:"dragstart", Mh:"dragenter", Oh:"dragover", Nh:"dragleave", Qh:"drop", xi:"touchstart", wi:"touchmove", vi:"touchend", ui:"touchcancel", Hh:"contextmenu", 
Rh:"error", Wh:"help", ai:"load", bi:"losecapture", oi:"readystatechange", pi:"resize", qi:"scroll", zi:"unload", Vh:"hashchange", ji:"pagehide", ki:"pageshow", mi:"popstate", Ih:"copy", li:"paste", Jh:"cut", Ah:"beforecopy", Bh:"beforecut", Ch:"beforepaste", di:"message", Gh:"connect", yi:I ? "webkitTransitionEnd" : nc ? "oTransitionEnd" : "transitionend"};
function K() {
}
K.prototype.va = m;
K.prototype.g = function() {
  this.va || (this.va = j, this.c())
};
K.prototype.c = function() {
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
z(Jc, K);
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
  this.offsetX = I || a.offsetX !== i ? a.offsetX : a.layerX;
  this.offsetY = I || a.offsetY !== i ? a.offsetY : a.layerY;
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
var Pc = {}, L = {}, Qc = {}, Rc = {};
function M(a, b, c, d, e) {
  if(b) {
    if(u(b)) {
      for(var g = 0;g < b.length;g++) {
        M(a, b[g], c, d, e)
      }
      return k
    }
    var d = !!d, h = L;
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
  a = M(a, b, c, d, e);
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
  e = L[d][g][c];
  if(Qc[c]) {
    var h = Qc[c];
    bb(h, b);
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
    0 == g && (delete L[a][b][c], L[a][b].d--, 0 == L[a][b].d && (delete L[a][b], L[a].d--), 0 == L[a].d && delete L[a])
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
  var d = L;
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
  var c = Pc[a], d = c.type, e = L;
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
z(cd, K);
q = cd.prototype;
q.Jd = j;
q.dd = k;
q.ze = aa("dd");
q.addEventListener = function(a, b, c, d) {
  M(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Vc(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = L;
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
function md(a, b) {
  kd(a);
  id(a, j, b)
}
q.bc = function(a) {
  kd(this);
  id(this, m, a)
};
function nd(a, b) {
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
  return Ya(a.Cc, function(a) {
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
  md(b, a);
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
      md(a[b], k)
    }
  }
};
var wd = new ud(t.window);
var xd;
function yd(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function zd(a, b) {
  var c = yd(a), d = gb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    $a(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function Ad(a, b) {
  var c = yd(a), d = gb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < e.length;h++) {
    $a(d, e[h]) && (fb(e, h--, 1), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
;function N(a, b) {
  this.width = a;
  this.height = b
}
q = N.prototype;
q.B = function() {
  return new N(this.width, this.height)
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
var Bd = !H || Bc();
!oc && !H || H && Bc() || oc && J("1.9.1");
var Cd = H && !J("9");
function Dd(a) {
  return a ? new Ed(Fd(a)) : xd || (xd = new Ed)
}
function O(a) {
  return v(a) ? document.getElementById(a) : a
}
function Gd(a, b, c, d) {
  a = d || a;
  b = b && "*" != b ? b.toUpperCase() : "";
  if(a.querySelectorAll && a.querySelector && (!I || "CSS1Compat" == document.compatMode || J("528")) && (b || c)) {
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
      b = h.className, "function" == typeof b.split && $a(b.split(/\s+/), c) && (d[e++] = h)
    }
    d.length = e;
    return d
  }
  return a
}
function Hd(a, b) {
  Ra(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Id ? a.setAttribute(Id[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var Id = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Jd(a, b, c) {
  return Kd(document, arguments)
}
function Kd(a, b) {
  var c = b[0], d = b[1];
  if(!Bd && d && (d.name || d.type)) {
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
  d && (v(d) ? c.className = d : u(d) ? zd.apply(k, [c].concat(d)) : Hd(c, d));
  2 < b.length && Ld(a, c, b, 2);
  return c
}
function Ld(a, b, c, d) {
  function e(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && 0 < g.nodeType) ? E(Md(g) ? db(g) : g, e) : e(g)
  }
}
function Nd(a, b) {
  Ld(Fd(a), a, arguments, 1)
}
function Od(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function Pd(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Qd(a, b) {
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
function Fd(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function Rd(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      Od(a), a.appendChild(Fd(a).createTextNode(b))
    }
  }
}
var Sd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Td = {IMG:" ", BR:"\n"};
function Ud(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ka(a) && 0 <= a && 32768 > a) : m
}
function Vd(a) {
  var b = [];
  Wd(a, b, m);
  return b.join("")
}
function Wd(a, b, c) {
  if(!(a.nodeName in Sd)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Td) {
        b.push(Td[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Wd(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Md(a) {
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
function Ed(a) {
  this.q = a || t.document || document
}
q = Ed.prototype;
q.Ha = Dd;
q.b = function(a) {
  return v(a) ? this.q.getElementById(a) : a
};
q.i = function(a, b, c) {
  return Kd(this.q, arguments)
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
q.append = Nd;
q.contains = Qd;
function Xd(a, b) {
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
        a.push('<property id="', d, '">'), Xd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', xa(c), '">'), Xd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function Yd(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, e = arguments;
  d.push("<arguments>");
  for(var g = e.length, h = 1;h < g;h++) {
    Xd(d, e[h])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var Zd;
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
  Zd = c
})();
function $d(a, b, c) {
  a.style[Ha(c)] = b
}
function ae(a, b) {
  var c = Fd(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function be(a, b, c) {
  b instanceof N ? (c = b.height, b = b.width) : c == i && f(Error("missing height argument"));
  a.style.width = ce(b);
  a.style.height = ce(c)
}
function ce(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
function de(a) {
  if("none" != (ae(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style && a.style.display)) {
    return ee(a)
  }
  var b = a.style, c = b.display, d = b.visibility, e = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = ee(a);
  b.display = c;
  b.position = e;
  b.visibility = d;
  return a
}
function ee(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = I && !b && !c;
  return(!ga(b) || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), H && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new N(b.right - b.left, b.bottom - b.top)) : new N(b, c)
}
function fe(a) {
  H ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[I ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var ge = oc ? "MozUserSelect" : I ? "WebkitUserSelect" : k;
function he(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(ge) {
    if(b = b ? "none" : "", a.style[ge] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[ge] = b
      }
    }
  }else {
    if(H || nc) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
;function ie(a) {
  this.hb = a;
  this.n = []
}
z(ie, K);
var je = [];
function P(a, b, c, d) {
  u(c) || (je[0] = c, c = je);
  for(var e = 0;e < c.length;e++) {
    a.n.push(M(b, c[e], d || a, m, a.hb || a))
  }
  return a
}
function ke(a, b, c, d, e, g) {
  if(u(c)) {
    for(var h = 0;h < c.length;h++) {
      ke(a, b, c[h], d, e, g)
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
    b && (b = b.key, Xc(b), bb(a.n, b))
  }
  return a
}
ie.prototype.te = function() {
  E(this.n, Xc);
  this.n.length = 0
};
ie.prototype.c = function() {
  ie.f.c.call(this);
  this.te()
};
ie.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function le() {
}
ea(le);
le.prototype.Wg = 0;
le.Oa();
function Q(a) {
  this.Q = a || Dd();
  this.rc = me
}
z(Q, cd);
Q.prototype.Og = le.Oa();
var me = k;
function ne(a, b) {
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
q = Q.prototype;
q.U = k;
q.r = m;
q.e = k;
q.rc = k;
q.F = k;
q.S = k;
q.Xb = k;
q.th = m;
function oe(a) {
  return a.U || (a.U = ":" + (a.Og.Wg++).toString(36))
}
q.b = n("e");
function pe(a) {
  return a.Ab || (a.Ab = new ie(a))
}
q.getParent = n("F");
q.ze = function(a) {
  this.F && this.F != a && f(Error("Method not supported"));
  Q.f.ze.call(this, a)
};
q.Ha = n("Q");
q.i = function() {
  this.e = this.Q.createElement("div")
};
function qe(a, b) {
  a.r && f(Error("Component already rendered"));
  a.e || a.i();
  b ? b.insertBefore(a.e, k) : a.Q.q.body.appendChild(a.e);
  (!a.F || a.F.r) && a.T()
}
q.T = function() {
  this.r = j;
  re(this, function(a) {
    !a.r && a.b() && a.T()
  })
};
q.eb = function() {
  re(this, function(a) {
    a.r && a.eb()
  });
  this.Ab && this.Ab.te();
  this.r = m
};
q.c = function() {
  Q.f.c.call(this);
  this.r && this.eb();
  this.Ab && (this.Ab.g(), delete this.Ab);
  re(this, function(a) {
    a.g()
  });
  !this.th && this.e && Pd(this.e);
  this.F = this.e = this.Xb = this.S = k
};
q.dc = n("e");
q.Mb = function(a) {
  this.r && f(Error("Component already rendered"));
  this.rc = a
};
function re(a, b) {
  a.S && E(a.S, b, i)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : oe(a), a = this.Xb && c ? (c in this.Xb ? this.Xb[c] : i) || k : k;
    if(c && a) {
      var d = this.Xb;
      c in d && delete d[c];
      bb(this.S, a);
      b && (a.eb(), a.e && Pd(a.e));
      c = a;
      c == k && f(Error("Unable to set parent component"));
      c.F = k;
      Q.f.ze.call(c, k)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function se(a) {
  this.z = new Rb;
  a && this.xd(a)
}
function te(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ma(a) : b.substr(0, 1) + a
}
q = se.prototype;
q.ca = function() {
  return this.z.ca()
};
q.add = function(a) {
  this.z.set(te(a), a)
};
q.xd = function(a) {
  for(var a = Nb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
q.te = function(a) {
  for(var a = Nb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
q.remove = function(a) {
  return this.z.remove(te(a))
};
q.clear = function() {
  this.z.clear()
};
q.Qa = function() {
  return this.z.Qa()
};
q.contains = function(a) {
  return this.z.ha(te(a))
};
q.ea = function() {
  return this.z.ea()
};
q.B = function() {
  return new se(this)
};
q.m = function(a) {
  return this.ca() == Mb(a) && ue(this, a)
};
function ue(a, b) {
  var c = Mb(b);
  if(a.ca() > c) {
    return m
  }
  !(b instanceof se) && 5 < c && (b = new se(b));
  return Qb(a, function(a) {
    if("function" == typeof b.contains) {
      a = b.contains(a)
    }else {
      if("function" == typeof b.Fc) {
        a = b.Fc(a)
      }else {
        if(ha(b) || v(b)) {
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
;function ve(a) {
  return we(a || arguments.callee.caller, [])
}
function we(a, b) {
  var c = [];
  if($a(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(xe(a) + "(");
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
            g = (g = xe(g)) ? g : "[fn]";
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
        c.push(we(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function xe(a) {
  if(ye[a]) {
    return ye[a]
  }
  a = "" + a;
  if(!ye[a]) {
    var b = /function ([^\(]+)/.exec(a);
    ye[a] = b ? b[1] : "[Anonymous]"
  }
  return ye[a]
}
var ye = {};
function ze(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
ze.prototype.Qd = k;
ze.prototype.Pd = k;
var Ae = 0;
ze.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || Ae++;
  this.cg = d || y();
  this.Gb = a;
  this.Hf = b;
  this.Sg = c;
  delete this.Qd;
  delete this.Pd
};
ze.prototype.md = aa("Gb");
function Be(a) {
  this.le = a
}
Be.prototype.F = k;
Be.prototype.Gb = k;
Be.prototype.S = k;
Be.prototype.hc = k;
function Ce(a, b) {
  this.name = a;
  this.value = b
}
Ce.prototype.toString = n("name");
var De = new Ce("OFF", Infinity), Ee = new Ce("SHOUT", 1200), Fe = new Ce("SEVERE", 1E3), Ge = new Ce("WARNING", 900), He = new Ce("INFO", 800), Ie = new Ce("CONFIG", 700), Je = new Ce("FINE", 500), Ke = new Ce("FINEST", 300), Le = new Ce("ALL", 0);
q = Be.prototype;
q.getParent = n("F");
q.md = aa("Gb");
function Me(a) {
  if(a.Gb) {
    return a.Gb
  }
  if(a.F) {
    return Me(a.F)
  }
  Ja("Root logger has no level set.");
  return k
}
q.log = function(a, b, c) {
  if(a.value >= Me(this).value) {
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
  var d = new ze(a, "" + b, this.le);
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
      e = "Message: " + xa(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + xa(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + xa(ve(g) + "-> ")
    }catch(C) {
      e = "Exception trying to expose exception! You win, we lose. " + C
    }
    d.Pd = e
  }
  return d
};
function Ne(a, b) {
  a.log(Fe, b, i)
}
function R(a, b) {
  a.log(Ge, b, i)
}
q.info = function(a, b) {
  this.log(He, a, b)
};
function S(a, b) {
  a.log(Je, b, i)
}
function T(a, b) {
  a.log(Ke, b, i)
}
var Oe = {}, Pe = k;
function Qe() {
  Pe || (Pe = new Be(""), Oe[""] = Pe, Pe.md(Ie))
}
function Re() {
  Qe();
  return Pe
}
function U(a) {
  Qe();
  var b;
  if(!(b = Oe[a])) {
    b = new Be(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = U(a.substr(0, c));
    c.S || (c.S = {});
    c.S[d] = b;
    b.F = c;
    Oe[a] = b
  }
  return b
}
;function Se(a, b) {
  Q.call(this, b);
  this.Cg = a;
  this.Od = new ie(this);
  this.Jc = new Rb
}
z(Se, Q);
q = Se.prototype;
q.a = U("goog.ui.media.FlashObject");
q.vh = "window";
q.Qe = "#000000";
q.ng = "sameDomain";
q.fa = function(a, b) {
  this.sb = v(a) ? a : Math.round(a) + "px";
  this.Zd = v(b) ? b : Math.round(b) + "px";
  this.b() && be(this.b() ? this.b().firstChild : k, this.sb, this.Zd);
  return this
};
q.T = function() {
  Se.f.T.call(this);
  var a = this.b(), b;
  b = H ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = H ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = ta(c, this.vh), d = this.Jc.xa(), e = this.Jc.ea(), g = [], h = 0;h < d.length;h++) {
    var l = va(d[h]), o = va(e[h]);
    g.push(l + "=" + o)
  }
  b = ta(b, oe(this), oe(this), "goog-ui-media-flash-object", xa(this.Cg), xa(g.join("&")), this.Qe, this.ng, c);
  a.innerHTML = b;
  this.sb && this.Zd && this.fa(this.sb, this.Zd);
  P(this.Od, this.b(), Sa(Hc), Kc)
};
q.i = function() {
  this.Uf != k && !(0 <= Ea(Zd, this.Uf)) && (R(this.a, "Required flash version not found:" + this.Uf), f(Error("Method not supported")));
  var a = this.Ha().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
q.c = function() {
  Se.f.c.call(this);
  this.Jc = k;
  this.Od.g();
  this.Od = k
};
function Te() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ y()).toString(36)
}
function Ue(a) {
  return a.substr(0, a.length - 1)
}
var Ve = /^(0|[1-9]\d*)$/, We = /^(0|\-?[1-9]\d*)$/;
function Xe(a) {
  var b = Ye;
  return Ve.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function Ze(a) {
  B.call(this, a)
}
z(Ze, B);
Ze.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function $e(a, b, c) {
  function d() {
    e && delete t.__loadFlashObject_callbacks[e]
  }
  var e;
  if(oc && !J("1.8.1.20")) {
    return td(new Ze("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Ea(Zd, "9"))) {
    return b = Zd, td(new Ze("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  e = "_" + Te();
  var h = new gd(d);
  t.__loadFlashObject_callbacks[e] = function() {
    a.setTimeout(function() {
      d();
      md(h, O(g))
    }, 0)
  };
  b.Jc.set("onloadcallback", '__loadFlashObject_callbacks["' + e + '"]()');
  g = oe(b);
  qe(b, c);
  return h
}
function af(a, b, c) {
  var d = $e(a, b, c), e = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  qd(d, function(b) {
    a.clearTimeout(e);
    return b
  });
  return d
}
;function bf(a, b) {
  this.U = "_" + Te();
  this.sd = a;
  this.Va = b;
  this.$a = a.$a
}
z(bf, K);
q = bf.prototype;
q.Ib = j;
q.Hd = m;
q.a = U("cw.net.FlashSocket");
q.u = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.U);
  a.push("'>")
};
function cf(a, b, c) {
  "frames" == b ? (a = a.Va, df(a.O), ef(a.O, c)) : "stillreceiving" == b ? (c = a.Va, T(c.a, "onstillreceiving"), df(c.O)) : "connect" == b ? (c = a.Va, c.a.info("onconnect"), df(c.O), a = c.Ub, c.Ub = k, a.length && (T(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.pd.Ac(a))) : "close" == b ? (a.Ib = m, a.g()) : "ioerror" == b ? (a.Ib = m, b = a.Va, R(b.a, "onioerror: " + G(c)), ff(b.O, m), a.g()) : "securityerror" == b ? (a.Ib = m, b = a.Va, R(b.a, "onsecurityerror: " + G(c)), 
  ff(b.O, m), a.g()) : f(Error("bad event: " + b))
}
function gf(a) {
  a.Hd = j;
  a.Ib = m;
  a.g()
}
q.Fd = function(a, b) {
  try {
    var c = this.$a.CallFunction(Yd("__FC_connect", this.U, a, b, "<int32/>\n"))
  }catch(d) {
    return Ne(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), gf(this)
  }
  '"OK"' != c && f(Error("__FC_connect failed? ret: " + c))
};
q.Ac = function(a) {
  try {
    var b = this.$a.CallFunction(Yd("__FC_writeFrames", this.U, a))
  }catch(c) {
    return Ne(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), gf(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (R(this.a, "Flash no longer knows of " + this.U + "; disposing."), this.g()) : f(Error("__FC_writeFrames failed? ret: " + b)))
};
q.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.Ib);
  bf.f.c.call(this);
  var a = this.$a;
  delete this.$a;
  if(this.Ib) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(Yd("__FC_close", this.U)))
    }catch(b) {
      Ne(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Hd = j
    }
  }
  if(this.Hd) {
    a = this.Va, R(a.a, "oncrash"), ff(a.O, j)
  }else {
    this.Va.onclose()
  }
  delete this.Va;
  delete this.sd.Bb[this.U]
};
function hf(a, b) {
  this.K = a;
  this.$a = b;
  this.Bb = {};
  this.Dd = "__FST_" + Te();
  t[this.Dd] = w(this.yg, this);
  var c = b.CallFunction(Yd("__FC_setCallbackFunc", this.Dd));
  '"OK"' != c && f(Error("__FC_setCallbackFunc failed? ret: " + c))
}
z(hf, K);
q = hf.prototype;
q.a = U("cw.net.FlashSocketTracker");
q.u = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  F(this.Bb, a, b);
  a.push(">")
};
q.Id = function(a) {
  a = new bf(this, a);
  return this.Bb[a.U] = a
};
q.wg = function(a, b, c, d) {
  var e = this.Bb[a];
  e ? "frames" == b && d ? (cf(e, "ioerror", "FlashConnector hadError while handling data."), e.g()) : cf(e, b, c) : R(this.a, "Cannot dispatch because we have no instance: " + G([a, b, c, d]))
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
  hf.f.c.call(this);
  for(var a = Sa(this.Bb);a.length;) {
    a.pop().g()
  }
  delete this.Bb;
  delete this.$a;
  t[this.Dd] = i
};
function jf(a) {
  this.O = a;
  this.Ub = []
}
z(jf, K);
q = jf.prototype;
q.a = U("cw.net.FlashSocketConduit");
q.Ac = function(a) {
  this.Ub ? (T(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Ub.push.apply(this.Ub, a)) : (T(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.pd.Ac(a))
};
q.Fd = function(a, b) {
  this.pd.Fd(a, b)
};
q.onclose = function() {
  this.a.info("onclose");
  ff(this.O, m)
};
q.c = function() {
  this.a.info("in disposeInternal.");
  jf.f.c.call(this);
  this.pd.g();
  delete this.O
};
var kf = [];
function lf() {
  var a = new gd;
  kf.push(a);
  return a
}
function mf(a) {
  var b = kf;
  kf = [];
  E(b, function(b) {
    md(b, a)
  })
}
function nf(a, b) {
  if(kf.length) {
    return lf()
  }
  var c = new Se(b + "FlashConnector.swf?cb=" + of);
  c.Qe = "#777777";
  c.fa(300, 30);
  var d = O("minerva-elements");
  d || f(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
  var e = O("minerva-elements-FlashConnectorSwf");
  e || (e = Jd("div", {id:"minerva-elements-FlashConnectorSwf"}), d.appendChild(e));
  Xb = af(a.P, c, e);
  nd(Xb, mf);
  return lf()
}
;function pf() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function qf(a) {
  return a * Math.PI / 180
}
;var Ye = Math.pow(2, 53);
var rf = {lg:p("<cw.eq.Wildcard>")};
function sf(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function tf(a, b, c) {
  var d = fa(a), e = fa(b);
  if(a == rf || b == rf) {
    return j
  }
  if(a != k && "function" == typeof a.m) {
    return c && c.push("running custom equals function on left object"), a.m(b, c)
  }
  if(b != k && "function" == typeof b.m) {
    return c && c.push("running custom equals function on right object"), b.m(a, c)
  }
  if(sf(d) || sf(e)) {
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
                if(!tf(a[d], b[d], c)) {
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
                if(!tf(a[g], b[g], c)) {
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
;function V(a) {
  B.call(this, a)
}
z(V, B);
V.prototype.name = "cw.net.InvalidFrame";
function uf() {
  var a = [];
  this.pa(a);
  return a.join("")
}
function vf() {
}
vf.prototype.m = function(a, b) {
  return!(a instanceof vf) ? m : tf(wf(this), wf(a), b)
};
vf.prototype.u = function(a, b) {
  a.push("<HelloFrame properties=");
  F(wf(this), a, b);
  a.push(">")
};
function wf(a) {
  return[a.Pb, a.Qf, a.tf, a.Tf, a.wc, a.He, a.Jf, a.Ff, a.ke, a.Df, a.gg, a.bg, a.ra, a.$c]
}
vf.prototype.ja = uf;
vf.prototype.pa = function(a) {
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
  b.sack = this.ra instanceof Zb ? Ue((new xf(this.ra)).ja()) : this.ra;
  b.seenack = this.$c instanceof Zb ? Ue((new xf(this.$c)).ja()) : this.$c;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push(Fb(b), "H")
};
function yf(a) {
  this.Ob = a
}
yf.prototype.m = function(a) {
  return a instanceof yf && this.Ob == a.Ob
};
yf.prototype.u = function(a, b) {
  a.push("new StringFrame(");
  F(this.Ob, a, b);
  a.push(")")
};
yf.prototype.ja = uf;
yf.prototype.pa = function(a) {
  a.push(this.Ob, " ")
};
function zf(a) {
  this.Ec = a
}
zf.prototype.m = function(a) {
  return a instanceof zf && this.Ec == a.Ec
};
zf.prototype.u = function(a, b) {
  a.push("new CommentFrame(");
  F(this.Ec, a, b);
  a.push(")")
};
zf.prototype.ja = uf;
zf.prototype.pa = function(a) {
  a.push(this.Ec, "^")
};
function Af(a) {
  this.tc = a
}
Af.prototype.m = function(a) {
  return a instanceof Af && this.tc == a.tc
};
Af.prototype.u = function(a) {
  a.push("new SeqNumFrame(", "" + this.tc, ")")
};
Af.prototype.ja = uf;
Af.prototype.pa = function(a) {
  a.push("" + this.tc, "N")
};
function Bf(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = Ye;
    if(We.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var g = Xe(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Zb(a, c)
}
function xf(a) {
  this.ra = a
}
xf.prototype.m = function(a, b) {
  return a instanceof xf && this.ra.m(a.ra, b)
};
xf.prototype.u = function(a, b) {
  a.push("new SackFrame(");
  F(this.ra, a, b);
  a.push(")")
};
xf.prototype.ja = uf;
xf.prototype.pa = function(a) {
  var b = this.ra;
  a.push(b.ob.join(","), "|", "" + b.tb);
  a.push("A")
};
function Cf(a) {
  this.kc = a
}
Cf.prototype.m = function(a, b) {
  return a instanceof Cf && this.kc.m(a.kc, b)
};
Cf.prototype.u = function(a, b) {
  a.push("new StreamStatusFrame(");
  F(this.kc, a, b);
  a.push(")")
};
Cf.prototype.ja = uf;
Cf.prototype.pa = function(a) {
  var b = this.kc;
  a.push(b.ob.join(","), "|", "" + b.tb);
  a.push("T")
};
function Df() {
}
Df.prototype.u = function(a) {
  a.push("new StreamCreatedFrame()")
};
Df.prototype.m = function(a) {
  return a instanceof Df
};
Df.prototype.ja = uf;
Df.prototype.pa = function(a) {
  a.push("C")
};
function Ef() {
}
Ef.prototype.u = function(a) {
  a.push("new YouCloseItFrame()")
};
Ef.prototype.m = function(a) {
  return a instanceof Ef
};
Ef.prototype.ja = uf;
Ef.prototype.pa = function(a) {
  a.push("Y")
};
function Ff(a, b) {
  this.nc = a;
  this.Tb = b
}
Ff.prototype.m = function(a) {
  return a instanceof Ff && this.nc == a.nc && this.Tb == a.Tb
};
Ff.prototype.u = function(a, b) {
  a.push("new ResetFrame(");
  F(this.nc, a, b);
  a.push(", ", "" + this.Tb, ")")
};
Ff.prototype.ja = uf;
Ff.prototype.pa = function(a) {
  a.push(this.nc, "|", "" + Number(this.Tb), "!")
};
var Gf = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Hf(a) {
  this.reason = a
}
Hf.prototype.m = function(a) {
  return a instanceof Hf && this.reason == a.reason
};
Hf.prototype.u = function(a, b) {
  a.push("new TransportKillFrame(");
  F(this.reason, a, b);
  a.push(")")
};
Hf.prototype.ja = uf;
Hf.prototype.pa = function(a) {
  a.push(this.reason, "K")
};
function If(a) {
  a || f(new V("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new yf(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = Bf(Ue(a)), a == k && f(new V("bad sack")), new xf(a)
  }
  if("N" == b) {
    return a = Xe(Ue(a)), a == k && f(new V("bad seqNum")), new Af(a)
  }
  if("T" == b) {
    return a = Bf(Ue(a)), a == k && f(new V("bad lastSackSeen")), new Cf(a)
  }
  if("Y" == b) {
    return 1 != a.length && f(new V("leading garbage")), new Ef
  }
  if("^" == b) {
    return new zf(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && f(new V("leading garbage")), new Df
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && f(new V("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && f(new V("bad applicationLevel")), new Ff(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = Gf[a], a == k && f(new V("unknown kill reason: " + a)), new Hf(a)
  }
  f(new V("Invalid frame type " + b))
}
;var Jf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Kf(a, b) {
  var c = a.match(Jf), d = b.match(Jf);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Lf(a, b) {
  var c;
  a instanceof Lf ? (this.Lb(b == k ? a.za : b), Mf(this, a.Ba), Nf(this, a.rb), Of(this, a.oa), Pf(this, a.Ua), this.pb(a.A), Qf(this, a.$.B()), Rf(this, a.fb)) : a && (c = ("" + a).match(Jf)) ? (this.Lb(!!b), Mf(this, c[1] || "", j), Nf(this, c[2] || "", j), Of(this, c[3] || "", j), Pf(this, c[4]), this.pb(c[5] || "", j), Qf(this, c[6] || "", j), Rf(this, c[7] || "", j)) : (this.Lb(!!b), this.$ = new Sf(k, this, this.za))
}
q = Lf.prototype;
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
  this.Ba && a.push(Tf(this.Ba, Uf), ":");
  this.oa && (a.push("//"), this.rb && a.push(Tf(this.rb, Uf), "@"), a.push(v(this.oa) ? encodeURIComponent(this.oa) : k), this.Ua != k && a.push(":", "" + this.Ua));
  this.A && (this.oa && "/" != this.A.charAt(0) && a.push("/"), a.push(Tf(this.A, "/" == this.A.charAt(0) ? Vf : Wf)));
  var b = "" + this.$;
  b && a.push("?", b);
  this.fb && a.push("#", Tf(this.fb, Xf));
  return this.ua = a.join("")
};
q.B = function() {
  var a = this.Ba, b = this.rb, c = this.oa, d = this.Ua, e = this.A, g = this.$.B(), h = this.fb, l = new Lf(k, this.za);
  a && Mf(l, a);
  b && Nf(l, b);
  c && Of(l, c);
  d && Pf(l, d);
  e && l.pb(e);
  g && Qf(l, g);
  h && Rf(l, h);
  return l
};
function Mf(a, b, c) {
  Yf(a);
  delete a.ua;
  a.Ba = c ? b ? decodeURIComponent(b) : "" : b;
  a.Ba && (a.Ba = a.Ba.replace(/:$/, ""))
}
function Nf(a, b, c) {
  Yf(a);
  delete a.ua;
  a.rb = c ? b ? decodeURIComponent(b) : "" : b
}
function Of(a, b, c) {
  Yf(a);
  delete a.ua;
  a.oa = c ? b ? decodeURIComponent(b) : "" : b
}
function Pf(a, b) {
  Yf(a);
  delete a.ua;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && f(Error("Bad port number " + b)), a.Ua = b) : a.Ua = k
}
q.pb = function(a, b) {
  Yf(this);
  delete this.ua;
  this.A = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function Qf(a, b, c) {
  Yf(a);
  delete a.ua;
  b instanceof Sf ? (a.$ = b, a.$.Ne = a, a.$.Lb(a.za)) : (c || (b = Tf(b, Zf)), a.$ = new Sf(b, a, a.za))
}
function Rf(a, b, c) {
  Yf(a);
  delete a.ua;
  a.fb = c ? b ? decodeURIComponent(b) : "" : b
}
function Yf(a) {
  a.Qg && f(Error("Tried to modify a read-only Uri"))
}
q.Lb = function(a) {
  this.za = a;
  this.$ && this.$.Lb(a);
  return this
};
function $f(a) {
  return a instanceof Lf ? a.B() : new Lf(a, i)
}
var ag = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Tf(a, b) {
  var c = k;
  v(a) && (c = a, ag.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, bg)));
  return c
}
function bg(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Uf = /[#\/\?@]/g, Wf = /[\#\?:]/g, Vf = /[\#\?]/g, Zf = /[\#\?@]/g, Xf = /#/g;
function Sf(a, b, c) {
  this.Ea = a || k;
  this.Ne = b || k;
  this.za = !!c
}
function cg(a) {
  if(!a.p && (a.p = new Rb, a.d = 0, a.Ea)) {
    for(var b = a.Ea.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, g = k;
      0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = dg(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
q = Sf.prototype;
q.p = k;
q.d = k;
q.ca = function() {
  cg(this);
  return this.d
};
q.add = function(a, b) {
  cg(this);
  eg(this);
  a = dg(this, a);
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
  cg(this);
  a = dg(this, a);
  if(this.p.ha(a)) {
    eg(this);
    var b = this.p.get(a);
    u(b) ? this.d -= b.length : this.d--;
    return this.p.remove(a)
  }
  return m
};
q.clear = function() {
  eg(this);
  this.p && this.p.clear();
  this.d = 0
};
q.Qa = function() {
  cg(this);
  return 0 == this.d
};
q.ha = function(a) {
  cg(this);
  a = dg(this, a);
  return this.p.ha(a)
};
q.Fc = function(a) {
  var b = this.ea();
  return $a(b, a)
};
q.xa = function() {
  cg(this);
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
  cg(this);
  if(a) {
    if(a = dg(this, a), this.ha(a)) {
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
      u(d) ? eb(a, d) : a.push(d)
    }
  }
  return a
};
q.set = function(a, b) {
  cg(this);
  eg(this);
  a = dg(this, a);
  if(this.ha(a)) {
    var c = this.p.get(a);
    u(c) ? this.d -= c.length : this.d--
  }
  this.p.set(a, b);
  this.d++;
  return this
};
q.get = function(a, b) {
  cg(this);
  a = dg(this, a);
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
function eg(a) {
  delete a.yb;
  delete a.Ea;
  a.Ne && delete a.Ne.ua
}
q.B = function() {
  var a = new Sf;
  this.yb && (a.yb = this.yb);
  this.Ea && (a.Ea = this.Ea);
  this.p && (a.p = this.p.B());
  return a
};
function dg(a, b) {
  var c = "" + b;
  a.za && (c = c.toLowerCase());
  return c
}
q.Lb = function(a) {
  a && !this.za && (cg(this), eg(this), Pb(this.p, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.za = a
};
q.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Pb(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
function fg(a, b, c, d) {
  this.contentWindow = a;
  this.Ic = b;
  this.Ie = c;
  this.Dg = d
}
fg.prototype.u = function(a, b) {
  a.push("<XDRFrame frameId=");
  F(this.Dg, a, b);
  a.push(", expandedUrl=");
  F(this.Ic, a, b);
  a.push(", streams=");
  F(this.Ie, a, b);
  a.push(">")
};
function gg() {
  this.frames = [];
  this.ie = new Rb
}
gg.prototype.a = U("cw.net.XDRTracker");
function hg(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor(pf()) + ("" + Math.floor(pf()))
  })
}
function ig(a, b) {
  for(var c = jg, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = 0 == e.Ie.length) {
      g = e.Ic;
      var h = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + G(b) + " existing frame " + G(e)), sd(e)
    }
  }
  d = Te() + Te();
  e = hg(a);
  g = t.location;
  g instanceof Lf || (g = $f(g));
  e instanceof Lf || (e = $f(e));
  var l = g;
  g = l.B();
  (h = !!e.Ba) ? Mf(g, e.Ba) : h = !!e.rb;
  h ? Nf(g, e.rb) : h = !!e.oa;
  h ? Of(g, e.oa) : h = e.Ua != k;
  var o = e.A;
  if(h) {
    Pf(g, e.Ua)
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
  h ? (l = e.$, l.yb || (l.yb = l.toString() ? decodeURIComponent(l.toString()) : ""), Qf(g, l.yb, i)) : h = !!e.fb;
  h && Rf(g, e.fb);
  e = g.toString();
  g = ("" + t.location).match(Jf)[3] || k;
  h = e.match(Jf)[3] || k;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + G(b)), c = sd(new fg(t, e, [b], k))) : ((g = O("minerva-elements")) || f(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), h = new gd, c.ie.set(d, [h, e, b]), c.a.info("Creating new XDRFrame " + G(d) + "for " + G(b)), c = Jd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = h);
  return c
}
gg.prototype.yh = function(a) {
  var b = this.ie.get(a);
  b || f(Error("Unknown frameId " + G(a)));
  this.ie.remove(b);
  var c = b[0], a = new fg(O("minerva-xdrframe-" + a).contentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  md(c, a)
};
var jg = new gg;
t.__XHRTracker_xdrFrameLoaded = w(jg.yh, jg);
var kg;
kg = m;
var lg = kc();
lg && (-1 != lg.indexOf("Firefox") || -1 != lg.indexOf("Camino") || -1 != lg.indexOf("iPhone") || -1 != lg.indexOf("iPod") || -1 != lg.indexOf("iPad") || -1 != lg.indexOf("Android") || -1 != lg.indexOf("Chrome") && (kg = j));
var mg = kg;
var of = "4bdfc178fc0e508c0cd5efc3fdb09920";
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function ng(a, b, c, d, e, g) {
  gd.call(this, e, g);
  this.Cf = a;
  this.Kd = [];
  this.ff = !!b;
  this.Bg = !!c;
  this.sg = !!d;
  for(b = 0;b < a.length;b++) {
    pd(a[b], w(this.of, this, b, j), w(this.of, this, b, m))
  }
  0 == a.length && !this.ff && md(this, this.Kd)
}
z(ng, gd);
ng.prototype.Lf = 0;
ng.prototype.of = function(a, b, c) {
  this.Lf++;
  this.Kd[a] = [b, c];
  this.Na || (this.ff && b ? md(this, [a, c]) : this.Bg && !b ? this.bc(c) : this.Lf == this.Cf.length && md(this, this.Kd));
  this.sg && !b && (c = k);
  return c
};
ng.prototype.bc = function(a) {
  ng.f.bc.call(this, a);
  E(this.Cf, function(a) {
    a.cancel()
  })
};
function og(a) {
  a = new ng(a, m, j);
  nd(a, function(a) {
    return Xa(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function pg(a, b) {
  this.wh = a;
  this.Ef = b
}
pg.prototype.ee = 0;
pg.prototype.cd = 0;
pg.prototype.Rd = m;
function qg(a) {
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
;function rg(a, b, c) {
  this.O = b;
  this.qa = a;
  this.Gd = c
}
z(rg, K);
q = rg.prototype;
q.a = U("cw.net.XHRMaster");
q.Xa = -1;
q.je = function(a, b, c) {
  this.Gd.__XHRSlave_makeRequest(this.qa, a, b, c)
};
q.Pa = n("Xa");
q.ne = function(a, b) {
  1 != b && Ne(this.a, G(this.qa) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  df(this.O);
  ef(this.O, a)
};
q.oe = function(a) {
  S(this.a, "ongotheaders_: " + G(a));
  var b = k;
  "Content-Length" in a && (b = Xe(a["Content-Length"]));
  a = this.O;
  S(a.a, a.v() + " got Content-Length: " + b);
  a.Ca == sg && (b == k && (R(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), tg(a, 2E3 + 1E3 * (b / 3072)))
};
q.pe = function(a) {
  1 != a && S(this.a, this.O.v() + "'s XHR's readyState is " + a);
  this.Xa = a;
  2 <= this.Xa && df(this.O)
};
q.me = function() {
  this.O.g()
};
q.c = function() {
  rg.f.c.call(this);
  delete ug.Ia[this.qa];
  this.Gd.__XHRSlave_dispose(this.qa);
  delete this.Gd
};
function vg() {
  this.Ia = {}
}
z(vg, K);
q = vg.prototype;
q.a = U("cw.net.XHRMasterTracker");
q.Id = function(a, b) {
  var c = "_" + Te(), d = new rg(c, a, b);
  return this.Ia[c] = d
};
q.ne = function(a, b, c) {
  var b = cb(b), d = this.Ia[a];
  d ? d.ne(b, c) : Ne(this.a, "onframes_: no master for " + G(a))
};
q.oe = function(a, b) {
  var c = this.Ia[a];
  c ? c.oe(b) : Ne(this.a, "ongotheaders_: no master for " + G(a))
};
q.pe = function(a, b) {
  var c = this.Ia[a];
  c ? c.pe(b) : Ne(this.a, "onreadystatechange_: no master for " + G(a))
};
q.me = function(a) {
  var b = this.Ia[a];
  b ? (delete this.Ia[b.qa], b.me()) : Ne(this.a, "oncomplete_: no master for " + G(a))
};
q.c = function() {
  vg.f.c.call(this);
  for(var a = Sa(this.Ia);a.length;) {
    a.pop().g()
  }
  delete this.Ia
};
var ug = new vg;
t.__XHRMaster_onframes = w(ug.ne, ug);
t.__XHRMaster_oncomplete = w(ug.me, ug);
t.__XHRMaster_ongotheaders = w(ug.oe, ug);
t.__XHRMaster_onreadystatechange = w(ug.pe, ug);
function wg(a, b, c) {
  this.Aa = a;
  this.host = b;
  this.port = c
}
function xg(a, b, c) {
  this.host = a;
  this.port = b;
  this.rh = c
}
function yg(a, b) {
  b || (b = a);
  this.Aa = a;
  this.Ya = b
}
yg.prototype.u = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  F(this.Aa, a, b);
  a.push(", secondaryUrl=");
  F(this.Ya, a, b);
  a.push(">")
};
function zg(a, b, c, d) {
  this.Aa = a;
  this.Pf = b;
  this.Ya = c;
  this.Zf = d;
  (!(0 == this.Aa.indexOf("http://") || 0 == this.Aa.indexOf("https://")) || !(0 == this.Ya.indexOf("http://") || 0 == this.Ya.indexOf("https://"))) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Pf.location.href;
  Kf(this.Aa, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Zf.location.href;
  Kf(this.Ya, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
zg.prototype.u = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  F(this.Aa, a, b);
  a.push(", secondaryUrl=");
  F(this.Ya, a, b);
  a.push(">")
};
var Ag = new zf(";)]}");
function Bg() {
}
Bg.prototype.jf = p(1);
function Cg(a) {
  this.kh = a
}
Cg.prototype.u = function(a, b) {
  a.push("<UserContext for ");
  F(this.kh, a, b);
  a.push(">")
};
function Dg(a, b, c) {
  this.C = a;
  this.lh = b ? b : new Bg;
  this.K = c ? c : wd;
  this.yc = new se;
  this.wc = Te() + Te();
  this.Wa = new $b;
  this.be = new bc;
  this.zc = k;
  this.ud = [];
  this.Qb = new Cg(this);
  I && (this.zc = Uc(t, "load", this.eh, m, this))
}
z(Dg, K);
q = Dg.prototype;
q.a = U("cw.net.ClientStream");
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
  F(this.wc, a, b);
  a.push(", state=", "" + this.h);
  a.push(", primary=");
  F(this.j, a, b);
  a.push(", secondary=");
  F(this.G, a, b);
  a.push(", resetting=");
  F(this.oc, a, b);
  a.push(">")
};
function Eg(a) {
  var b = [-1];
  a.j && b.push(a.j.Jb);
  a.G && b.push(a.G.Jb);
  return Math.max.apply(Math.max, b)
}
function Fg(a) {
  if(!(3 > a.h)) {
    var b = 0 != a.Wa.D.ca(), c = cc(a.be), d = !c.m(a.Bf) && !(a.j && c.m(a.j.Fb) || a.G && c.m(a.G.Fb)), e = Eg(a);
    if((b = b && e < a.Wa.cb) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.j.Vb ? (T(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.j, c != d.Fb && (!d.Ja && !d.J.length && Gg(d), d.J.push(new xf(c)), d.Fb = c)), b && Hg(a.j, a.Wa, e + 1), a.j.Ga()) : a.G == k ? a.Fe ? (T(a.a, "tryToSend_: creating secondary to send " + g), a.G = Ig(a, m), b && Hg(a.G, a.Wa, e + 1), a.G.Ga()) : (T(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.ue = j) : T(a.a, "tryToSend_: need to send " + g + ", but can't right now")
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
function Jg(a, b) {
  var c;
  ga(c) || (c = j);
  3 < a.h && f(Error("sendStrings: Can't send strings in state " + a.h));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || f(Error("sendStrings: string #" + c + " has illegal chars: " + G(d)))
      }
    }
    a.Wa.extend(b);
    Fg(a)
  }
}
function Ig(a, b) {
  var c;
  a.C instanceof zg ? c = 1 == a.lh.jf() ? sg : Kg : a.C instanceof xg ? c = Lg : f(Error("Don't support endpoint " + G(a.C)));
  a.Ke += 1;
  c = new Mg(a.K, a, a.Ke, c, a.C, b);
  T(a.a, "Created: " + c.v());
  a.yc.add(c);
  return c
}
function Ng(a, b, c) {
  var d = new Og(a.K, a, b, c);
  T(a.a, "Created: " + d.v() + ", delay=" + b + ", times=" + c);
  a.yc.add(d);
  return d
}
function Pg(a, b) {
  a.yc.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  S(a.a, "Offline: " + b.v());
  a.Ge = b.Ta ? a.Ge + b.Ta : 0;
  1 <= a.Ge && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.Qb, "stream penalty reached limit", m), a.g());
  if(3 < a.h) {
    4 == a.h && b.jg ? (S(a.a, "Disposing because resettingTransport_ is done."), a.g()) : S(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    var c;
    var d;
    c = b instanceof Og;
    if(!c && b.wd) {
      var e = I ? mg ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      T(a.a, "getDelayForNextTransport_: " + G({delay:c, times:d}))
    }else {
      if(d = b.Te(), b == a.j ? d ? e = ++a.Of : c || (e = a.Of = 0) : d ? e = ++a.Yf : c || (e = a.Yf = 0), c || !e) {
        d = c = 0, T(a.a, "getDelayForNextTransport_: " + G({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(4E3 * Math.random()) - 2E3, l = Math.max(0, b.fg - b.Le);
        d = (c = Math.max(0, g + h - l)) ? 1 : 0;
        T(a.a, "getDelayForNextTransport_: " + G({count:e, base:g, variance:h, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    b == a.j ? (a.j = k, c ? a.j = Ng(a, e, c) : (e = Eg(a), a.j = Ig(a, j), Hg(a.j, a.Wa, e + 1)), a.j.Ga()) : b == a.G && (a.G = k, c ? (a.G = Ng(a, e, c), a.G.Ga()) : Fg(a))
  }
}
q.reset = function(a) {
  3 < this.h && f(Error("reset: Can't send reset in state " + this.h));
  this.h = 4;
  this.j && this.j.Vb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Qg(this.j, a), this.j.Ga()) : (this.j && (S(this.a, "reset: Disposing primary before sending ResetFrame."), this.j.g()), this.G && (S(this.a, "reset: Disposing secondary before sending ResetFrame."), this.G.g()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.oc = Ig(this, m), Qg(this.oc, a), this.oc.Ga());
  this.onreset && this.onreset.call(this.Qb, a, j)
};
function Rg(a, b, c, d) {
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
        var C = Wb(s);
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
  d || Fg(a);
  if(!(4 == a.h || a.va) && e) {
    Ne(b.a, b.v() + "'s peer caused rwin overflow."), b.g()
  }
}
q.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.h && f(Error("ClientStream.start: " + G(this) + " already started"));
  this.h = 2;
  if(this.C instanceof yg) {
    var a = ig(this.C.Aa, this), b = ig(this.C.Ya, this), a = og([a, b]);
    nd(a, w(this.Ag, this))
  }else {
    if(this.C instanceof wg) {
      if(Yb) {
        this.ef()
      }else {
        var a = nf(this.K, this.C.Aa), c = this;
        nd(a, function(a) {
          Yb || (Yb = new hf(c.K, a));
          return k
        });
        nd(a, w(this.ef, this))
      }
    }else {
      Sg(this)
    }
  }
};
q.Ag = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Ic, e = a[1].Ic;
  this.ud.push(a[0]);
  this.ud.push(a[1]);
  this.C = new zg(d, b, e, c);
  Sg(this)
};
q.ef = function() {
  this.C = new xg(this.C.host, this.C.port, Yb);
  Sg(this)
};
function Sg(a) {
  a.h = 3;
  a.j = Ig(a, j);
  Hg(a.j, a.Wa, k);
  a.j.Ga()
}
q.c = function() {
  this.a.info(G(this) + " in disposeInternal.");
  this.h = 5;
  for(var a = this.yc.ea(), b = 0;b < a.length;b++) {
    a[b].g()
  }
  for(a = 0;a < this.ud.length;a++) {
    bb(this.ud[a].Ie, this)
  }
  I && this.zc && (Xc(this.zc), this.zc = k);
  this.Nf && this.Nf.call(this.Qb);
  delete this.yc;
  delete this.j;
  delete this.G;
  delete this.oc;
  delete this.Qb;
  Dg.f.c.call(this)
};
var sg = 1, Kg = 2, Lg = 3;
function Mg(a, b, c, d, e, g) {
  this.K = a;
  this.I = b;
  this.Pb = c;
  this.Ca = d;
  this.C = e;
  this.J = [];
  this.vb = g;
  this.Vb = !this.Cb();
  this.Kb = this.Ca != sg;
  this.pg = w(this.ph, this)
}
z(Mg, K);
q = Mg.prototype;
q.a = U("cw.net.ClientTransport");
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
  return this.Ca == sg || this.Ca == Kg
};
function Tg(a, b) {
  hb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Rg(a.I, a, b, !a.Kb)
}
function Ug(a, b, c) {
  try {
    var d = If(b);
    a.Kc += 1;
    S(a.a, a.v() + " RECV " + G(d));
    var e;
    1 == a.Kc && !d.m(Ag) && a.Cb() ? (R(a.a, a.v() + " is closing soon because got bad preamble: " + G(d)), e = j) : e = m;
    if(e) {
      return j
    }
    if(d instanceof yf) {
      if(!/^([ -~]*)$/.test(d.Ob)) {
        return a.gc = j
      }
      a.ed += 1;
      c.push([a.ed, d.Ob])
    }else {
      if(d instanceof xf) {
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
          return R(a.a, a.v() + " is closing soon because got bad SackFrame"), a.gc = j
        }
      }else {
        if(d instanceof Af) {
          a.ed = d.tc - 1
        }else {
          if(d instanceof Cf) {
            a.I.Bf = d.kc
          }else {
            if(d instanceof Ef) {
              return T(a.a, a.v() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof Hf) {
              return a.gc = j, "stream_attach_failure" == d.reason ? a.Ta += 1 : "acked_unsent_strings" == d.reason && (a.Ta += 0.5), T(a.a, a.v() + " is closing soon because got " + G(d)), j
            }
            if(!(d instanceof zf)) {
              if(d instanceof Df) {
                var C = a.I, pj = !a.Kb;
                T(C.a, "Stream is now confirmed to exist at server.");
                C.Fe = j;
                C.ue && !pj && (C.ue = m, Fg(C))
              }else {
                c.length && (Tg(a, c), ab(c));
                if(d instanceof Ff) {
                  var od = a.I;
                  od.onreset && od.onreset.call(od.Qb, d.nc, d.Tb);
                  od.g();
                  return j
                }
                f(Error(a.v() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(Zg) {
    return Zg instanceof V || f(Zg), R(a.a, a.v() + " is closing soon because got InvalidFrame: " + G(b)), a.gc = j
  }
  return m
}
function ef(a, b) {
  a.qd = j;
  try {
    for(var c = m, d = [], e = 0, g = b.length;e < g;e++) {
      if(a.va) {
        a.a.info(a.v() + " returning from loop because we're disposed.");
        return
      }
      if(c = Ug(a, b[e], d)) {
        break
      }
    }
    d.length && Tg(a, d);
    a.qd = m;
    a.J.length && a.Ga();
    c && (T(a.a, a.v() + " closeSoon is true.  Frames were: " + G(b)), a.g())
  }finally {
    a.qd = m
  }
}
q.ph = function() {
  R(this.a, this.v() + " timed out due to lack of connection or no data being received.");
  this.g()
};
function Vg(a) {
  a.fd != k && (a.K.P.clearTimeout(a.fd), a.fd = k)
}
function tg(a, b) {
  Vg(a);
  b = Math.round(b);
  a.fd = a.K.P.setTimeout(a.pg, b);
  S(a.a, a.v() + "'s receive timeout set to " + b + " ms.")
}
function df(a) {
  a.Ca != sg && (a.Ca == Lg || a.Ca == Kg ? tg(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.Ca)))
}
function Gg(a) {
  var b = new vf;
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
function ff(a, b) {
  b && (a.Ta += 0.5);
  a.g()
}
q.Ga = function() {
  this.Ja && !this.Vb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.qd) {
    T(this.a, this.v() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.Ja;
    this.Ja = j;
    !a && !this.J.length && Gg(this);
    for(a = 0;a < this.J.length;a++) {
      S(this.a, this.v() + " SEND " + G(this.J[a]))
    }
    if(this.Cb()) {
      for(var a = [], b = 0, c = this.J.length;b < c;b++) {
        this.J[b].pa(a), a.push("\n")
      }
      this.J = [];
      a = a.join("");
      b = this.vb ? this.C.Aa : this.C.Ya;
      this.s = ug.Id(this, this.vb ? this.C.Pf : this.C.Zf);
      this.Le = this.K.P === ed ? y() : this.K.P.getTime();
      this.s.je(b, "POST", a);
      tg(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Kb ? 0 : this.vb ? 25E3 : 0))
    }else {
      if(this.Ca == Lg) {
        a = [];
        b = 0;
        for(c = this.J.length;b < c;b++) {
          a.push(this.J[b].ja())
        }
        this.J = [];
        this.s ? this.s.Ac(a) : (b = this.C, this.s = new jf(this), this.s.pd = b.rh.Id(this.s), this.Le = this.K.P === ed ? y() : this.K.P.getTime(), this.s.Fd(b.host, b.port), this.s.va || (this.s.Ac(a), this.s.va || tg(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.Ca))
      }
    }
  }
};
function Hg(a, b, c) {
  !a.Ja && !a.J.length && Gg(a);
  for(var c = Math.max(c, a.Jb + 1), b = b.kf(c), c = 0, d = b.length;c < d;c++) {
    var e = b[c], g = e[0], e = e[1];
    (-1 == a.Jb || a.Jb + 1 != g) && a.J.push(new Af(g));
    a.J.push(new yf(e));
    a.Jb = g
  }
}
q.c = function() {
  this.a.info(this.v() + " in disposeInternal.");
  Mg.f.c.call(this);
  this.fg = this.K.P === ed ? y() : this.K.P.getTime();
  this.J = [];
  Vg(this);
  this.s && this.s.g();
  var a = this.I;
  this.I = k;
  Pg(a, this)
};
function Qg(a, b) {
  !a.Ja && !a.J.length && Gg(a);
  a.J.push(new Ff(b, j));
  a.jg = j
}
function Og(a, b, c, d) {
  this.K = a;
  this.I = b;
  this.bf = c;
  this.We = d
}
z(Og, K);
q = Og.prototype;
q.Ja = m;
q.Vb = m;
q.Qc = k;
q.Fb = k;
q.a = U("cw.net.DoNothingTransport");
function Wg(a) {
  a.Qc = a.K.P.setTimeout(function() {
    a.Qc = k;
    a.We--;
    a.We ? Wg(a) : a.g()
  }, a.bf)
}
q.Ga = function() {
  this.Ja && !this.Vb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ja = j;
  Wg(this)
};
q.u = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.bf, ">")
};
q.Cb = p(m);
q.v = p("Wast. T");
q.Te = p(m);
q.c = function() {
  this.a.info(this.v() + " in disposeInternal.");
  Og.f.c.call(this);
  this.Qc != k && this.K.P.clearTimeout(this.Qc);
  var a = this.I;
  this.I = k;
  Pg(a, this)
};
function Xg(a, b) {
  a.setAttribute("role", b);
  a.Ji = b
}
;function Yg() {
}
var $g;
ea(Yg);
q = Yg.prototype;
q.Lc = function() {
};
q.i = function(a) {
  var b = a.Ha().i("div", ah(this, a).join(" "), a.ia);
  this.we(a, b);
  return b
};
q.dc = function(a) {
  return a
};
q.ac = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(H && !J("7")) {
      var d = bh(yd(a), b);
      d.push(b);
      ra(c ? zd : Ad, a).apply(k, d)
    }else {
      c ? zd(a, b) : Ad(a, b)
    }
  }
};
q.vf = function(a) {
  a.rc == k && (a.rc = "rtl" == (ae(a.r ? a.e : a.Q.q.body, "direction") || ((a.r ? a.e : a.Q.q.body).currentStyle ? (a.r ? a.e : a.Q.q.body).currentStyle.direction : k) || (a.r ? a.e : a.Q.q.body).style && (a.r ? a.e : a.Q.q.body).style.direction));
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
  he(a, !b, !H && !nc)
};
q.Mb = function(a, b) {
  this.ac(a, this.w() + "-rtl", b)
};
q.xf = function(a) {
  var b;
  return a.aa & 32 && (b = a.gb()) ? Ud(b) : m
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
    Ud(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
q.De = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.ma = function(a, b, c) {
  var d = a.b();
  if(d) {
    var e = ch(this, b);
    e && this.ac(a, e, c);
    this.ga(d, b, c)
  }
};
q.ga = function(a, b, c) {
  $g || ($g = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = $g[b]) && a.setAttribute("aria-" + b, c)
};
q.jd = function(a, b) {
  var c = this.dc(a);
  if(c && (Od(c), b)) {
    if(v(b)) {
      Rd(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = Fd(c);
          c.appendChild(v(a) ? b.createTextNode(a) : a)
        }
      };
      u(b) ? E(b, d) : ha(b) && !("nodeType" in b) ? E(db(b), d) : d(b)
    }
  }
};
q.gb = function(a) {
  return a.b()
};
q.w = p("goog-control");
function ah(a, b) {
  var c = a.w(), d = [c], e = a.w();
  e != c && d.push(e);
  c = b.h;
  for(e = [];c;) {
    var g = c & -c;
    e.push(ch(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.wa) && d.push.apply(d, c);
  H && !J("7") && d.push.apply(d, bh(d));
  return d
}
function bh(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  E([], function(d) {
    Za(d, ra($a, a)) && (!b || $a(d, b)) && c.push(d.join("_"))
  });
  return c
}
function ch(a, b) {
  if(!a.Se) {
    var c = a.w();
    a.Se = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Se[b]
}
;function dh(a, b) {
  a || f(Error("Invalid class name " + a));
  la(b) || f(Error("Invalid decorator function " + b))
}
var eh = {};
function fh(a, b, c, d, e) {
  if(!H && (!I || !J("525"))) {
    return j
  }
  if(rc && e) {
    return gh(a)
  }
  if(e && !d || !c && (17 == b || 18 == b) || H && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(H && Bc());
    case 27:
      return!I
  }
  return gh(a)
}
function gh(a) {
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
;function hh(a, b) {
  a && ih(this, a, b)
}
z(hh, cd);
q = hh.prototype;
q.e = k;
q.Yc = k;
q.de = k;
q.Zc = k;
q.Sa = -1;
q.Ra = -1;
var jh = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, kh = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, lh = {61:187, 
59:186}, mh = H || I && J("525");
q = hh.prototype;
q.Kg = function(a) {
  if(I && (17 == this.Sa && !a.ctrlKey || 18 == this.Sa && !a.altKey)) {
    this.Ra = this.Sa = -1
  }
  mh && !fh(a.keyCode, this.Sa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Ra = oc && a.keyCode in lh ? lh[a.keyCode] : a.keyCode
};
q.Lg = function() {
  this.Ra = this.Sa = -1
};
q.handleEvent = function(a) {
  var b = a.Fa, c, d;
  H && "keypress" == a.type ? (c = this.Ra, d = 13 != c && 27 != c ? b.keyCode : 0) : I && "keypress" == a.type ? (c = this.Ra, d = 0 <= b.charCode && 63232 > b.charCode && gh(c) ? b.charCode : 0) : nc ? (c = this.Ra, d = gh(c) ? b.keyCode : 0) : (c = b.keyCode || this.Ra, d = b.charCode || 0, rc && 63 == d && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in jh ? e = jh[c] : 25 == c && a.shiftKey && (e = 9) : g && g in kh && (e = kh[g]);
  a = e == this.Sa;
  this.Sa = e;
  b = new nh(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.g()
  }
};
q.b = n("e");
function ih(a, b, c) {
  a.Zc && a.detach();
  a.e = b;
  a.Yc = M(a.e, "keypress", a, c);
  a.de = M(a.e, "keydown", a.Kg, c, a);
  a.Zc = M(a.e, "keyup", a.Lg, c, a)
}
q.detach = function() {
  this.Yc && (Xc(this.Yc), Xc(this.de), Xc(this.Zc), this.Zc = this.de = this.Yc = k);
  this.e = k;
  this.Ra = this.Sa = -1
};
q.c = function() {
  hh.f.c.call(this);
  this.detach()
};
function nh(a, b, c, d) {
  d && this.ic(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
z(nh, Mc);
function W(a, b, c) {
  Q.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ma(b);
      if(d = eh[d]) {
        break
      }
      b = b.f ? b.f.constructor : k
    }
    b = d ? la(d.Oa) ? d.Oa() : new d : k
  }
  this.l = b;
  this.kd(a)
}
z(W, Q);
q = W.prototype;
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
function oh(a, b) {
  b && (a.wa ? $a(a.wa, b) || a.wa.push(b) : a.wa = [b], a.l.ac(a, b, j))
}
q.ac = function(a, b) {
  b ? oh(this, a) : a && this.wa && (bb(this.wa, a), 0 == this.wa.length && (this.wa = k), this.l.ac(this, a, m))
};
q.i = function() {
  var a = this.l.i(this);
  this.e = a;
  var b = this.Zg || this.l.Lc();
  b && Xg(a, b);
  this.yd || this.l.hd(a, m);
  this.Rb || this.l.De(a, m)
};
q.dc = function() {
  return this.l.dc(this.b())
};
q.T = function() {
  W.f.T.call(this);
  this.l.vf(this);
  if(this.aa & -2 && (this.Yd && ph(this, j), this.aa & 32)) {
    var a = this.gb();
    if(a) {
      var b = this.Eb || (this.Eb = new hh);
      ih(b, a);
      P(P(P(pe(this), b, "key", this.qf), a, "focus", this.Ig), a, "blur", this.nf)
    }
  }
};
function ph(a, b) {
  var c = pe(a), d = a.b();
  b ? (P(P(P(P(c, d, "mouseover", a.Tc), d, "mousedown", a.Rc), d, "mouseup", a.rf), d, "mouseout", a.Sc), H && P(c, d, "dblclick", a.pf)) : (ke(ke(ke(ke(c, d, "mouseover", a.Tc), d, "mousedown", a.Rc), d, "mouseup", a.rf), d, "mouseout", a.Sc), H && ke(c, d, "dblclick", a.pf))
}
q.eb = function() {
  W.f.eb.call(this);
  this.Eb && this.Eb.detach();
  this.Rb && this.isEnabled() && this.l.ld(this, m)
};
q.c = function() {
  W.f.c.call(this);
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
      a = Xa(a, Vd).join("")
    }else {
      if(Cd && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Wd(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Cd || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
q.Mb = function(a) {
  W.f.Mb.call(this, a);
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
function qh(a, b) {
  rh(a, 2, b) && a.ma(2, b)
}
q.ce = function() {
  return!!(this.h & 4)
};
q.setActive = function(a) {
  rh(this, 4, a) && this.ma(4, a)
};
q.Ae = function(a) {
  rh(this, 8, a) && this.ma(8, a)
};
q.ma = function(a, b) {
  this.aa & a && b != !!(this.h & a) && (this.l.ma(this, a, b), this.h = b ? this.h | a : this.h & ~a)
};
function X(a, b) {
  return!!(a.zd & b) && !!(a.aa & b)
}
function rh(a, b, c) {
  return!!(a.aa & b) && !!(a.h & b) != c && (!(a.jh & b) || a.dispatchEvent(ne(b, c))) && !a.va
}
q.Tc = function(a) {
  !sh(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && qh(this, j)
};
q.Sc = function(a) {
  !sh(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(m), X(this, 2) && qh(this, m))
};
function sh(a, b) {
  return!!a.relatedTarget && Qd(b, a.relatedTarget)
}
q.Rc = function(a) {
  if(this.isEnabled() && (X(this, 2) && qh(this, j), Oc(a) && (!I || !rc || !a.ctrlKey))) {
    X(this, 4) && this.setActive(j), this.l.xf(this) && this.gb().focus()
  }
  !this.yd && Oc(a) && (!I || !rc || !a.ctrlKey) && a.preventDefault()
};
q.rf = function(a) {
  this.isEnabled() && (X(this, 2) && qh(this, j), this.ce() && this.lb(a) && X(this, 4) && this.setActive(m))
};
q.pf = function(a) {
  this.isEnabled() && this.lb(a)
};
q.lb = function(a) {
  if(X(this, 16)) {
    var b = !(this.h & 16);
    rh(this, 16, b) && this.ma(16, b)
  }
  X(this, 8) && this.Ae(j);
  X(this, 64) && (b = !(this.h & 64), rh(this, 64, b) && this.ma(64, b));
  b = new Jc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.se = a.se);
  return this.dispatchEvent(b)
};
q.Ig = function() {
  X(this, 32) && rh(this, 32, j) && this.ma(32, j)
};
q.nf = function() {
  X(this, 4) && this.setActive(m);
  X(this, 32) && rh(this, 32, m) && this.ma(32, m)
};
q.qf = function(a) {
  return this.Rb && this.isEnabled() && this.Xd(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
q.Xd = function(a) {
  return 13 == a.keyCode && this.lb(a)
};
la(W) || f(Error("Invalid component class " + W));
la(Yg) || f(Error("Invalid renderer class " + Yg));
var th = ma(W);
eh[th] = Yg;
dh("goog-control", function() {
  return new W(k)
});
function uh() {
}
z(uh, Yg);
ea(uh);
q = uh.prototype;
q.Lc = p("button");
q.ga = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : uh.f.ga.call(this, a, b, c)
};
q.i = function(a) {
  var b = uh.f.i.call(this, a), c = a.Oc();
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
function vh() {
}
z(vh, uh);
ea(vh);
q = vh.prototype;
q.Lc = function() {
};
q.i = function(a) {
  a.r && m != a.Yd && ph(a, m);
  a.Yd = m;
  a.zd &= -256;
  a.r && a.h & 32 && f(Error("Component already rendered"));
  a.h & 32 && a.ma(32, m);
  a.aa &= -33;
  return a.Ha().i("button", {"class":ah(this, a).join(" "), disabled:!a.isEnabled(), title:a.Oc() || "", value:a.Pc() || ""}, a.hf() || "")
};
q.vf = function(a) {
  P(pe(a), a.b(), "click", a.lb)
};
q.hd = da;
q.Mb = da;
q.xf = function(a) {
  return a.isEnabled()
};
q.ld = da;
q.ma = function(a, b, c) {
  vh.f.ma.call(this, a, b, c);
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
function wh(a, b, c) {
  W.call(this, a, b || vh.Oa(), c)
}
z(wh, W);
q = wh.prototype;
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
  wh.f.c.call(this);
  delete this.hg;
  delete this.dg
};
q.T = function() {
  wh.f.T.call(this);
  if(this.aa & 32) {
    var a = this.gb();
    a && P(pe(this), a, "keyup", this.Xd)
  }
};
q.Xd = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.lb(a) : 32 == a.keyCode
};
dh("goog-button", function() {
  return new wh(k)
});
function xh() {
}
z(xh, uh);
ea(xh);
q = xh.prototype;
q.i = function(a) {
  var b = {"class":"goog-inline-block " + ah(this, a).join(" "), title:a.Oc() || ""}, b = a.Ha().i("div", b, yh(this, a.ia, a.Ha()));
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
function yh(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.w() + "-outer-box"), c.i("div", "goog-inline-block " + (a.w() + "-inner-box"), b))
}
q.w = p("goog-custom-button");
function zh(a, b, c) {
  wh.call(this, a, b || xh.Oa(), c)
}
z(zh, wh);
dh("goog-custom-button", function() {
  return new zh(k)
});
var Ah = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
function Bh(a) {
  var b = {}, a = "" + a, c = "#" == a.charAt(0) ? a : "#" + a;
  if(Ch.test(c)) {
    return b.Vc = Dh(c), b.type = "hex", b
  }
  a: {
    var d = a.match(Eh);
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
    return b.Vc = Fh(c[0], c[1], c[2]), b.type = "rgb", b
  }
  if(Ah && (c = Ah[a.toLowerCase()])) {
    return b.Vc = c, b.type = "named", b
  }
  f(Error(a + " is not a valid color string"))
}
var Gh = /#(.)(.)(.)/;
function Dh(a) {
  Ch.test(a) || f(Error("'" + a + "' is not a valid hex color"));
  4 == a.length && (a = a.replace(Gh, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function Hh(a) {
  a = Dh(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function Fh(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || 0 > a || 255 < a || isNaN(b) || 0 > b || 255 < b || isNaN(c) || 0 > c || 255 < c) && f(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = Ih(a.toString(16));
  b = Ih(b.toString(16));
  c = Ih(c.toString(16));
  return"#" + a + b + c
}
var Ch = /^#(?:[0-9a-f]{3}){1,2}$/i, Eh = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function Ih(a) {
  return 1 == a.length ? "0" + a : a
}
;function Jh() {
}
Jh.prototype.Bc = k;
var Kh;
function Lh() {
}
z(Lh, Jh);
function Mh(a) {
  return(a = Nh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Oh(a) {
  var b = {};
  Nh(a) && (b[0] = j, b[1] = j);
  return b
}
Lh.prototype.$d = k;
function Nh(a) {
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
Kh = new Lh;
function Ph(a) {
  this.headers = new Rb;
  this.Sb = a || k
}
z(Ph, cd);
Ph.prototype.a = U("goog.net.XhrIo");
var Qh = /^https?$/i;
q = Ph.prototype;
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
  this.k = this.Sb ? Mh(this.Sb) : Mh(Kh);
  this.vd = this.Sb ? this.Sb.Bc || (this.Sb.Bc = Oh(this.Sb)) : Kh.Bc || (Kh.Bc = Oh(Kh));
  this.k.onreadystatechange = w(this.Mf, this);
  try {
    S(this.a, Rh(this, "Opening Xhr")), this.ae = j, this.k.open(b, a, j), this.ae = m
  }catch(e) {
    S(this.a, Rh(this, "Error opening Xhr: " + e.message));
    Sh(this, e);
    return
  }
  var a = c || "", g = this.headers.B();
  d && Pb(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.ha("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Pb(g, function(a, b) {
    this.k.setRequestHeader(b, a)
  }, this);
  this.Vf && (this.k.responseType = this.Vf);
  "withCredentials" in this.k && (this.k.withCredentials = this.uh);
  try {
    this.qb && (ed.clearTimeout(this.qb), this.qb = k), 0 < this.rd && (S(this.a, Rh(this, "Will abort after " + this.rd + "ms if incomplete")), this.qb = ed.setTimeout(w(this.qh, this), this.rd)), S(this.a, Rh(this, "Sending request")), this.Wc = j, this.k.send(a), this.Wc = m
  }catch(h) {
    S(this.a, Rh(this, "Send error: " + h.message)), Sh(this, h)
  }
};
q.qh = function() {
  "undefined" != typeof ba && this.k && (this.jc = "Timed out after " + this.rd + "ms, aborting", S(this.a, Rh(this, this.jc)), this.dispatchEvent("timeout"), this.abort(8))
};
function Sh(a, b) {
  a.Ka = m;
  a.k && (a.jb = j, a.k.abort(), a.jb = m);
  a.jc = b;
  Th(a);
  Uh(a)
}
function Th(a) {
  a.Nd || (a.Nd = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
q.abort = function() {
  this.k && this.Ka && (S(this.a, Rh(this, "Aborting")), this.Ka = m, this.jb = j, this.k.abort(), this.jb = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Uh(this))
};
q.c = function() {
  this.k && (this.Ka && (this.Ka = m, this.jb = j, this.k.abort(), this.jb = m), Uh(this, j));
  Ph.f.c.call(this)
};
q.Mf = function() {
  !this.ae && !this.Wc && !this.jb ? this.Xg() : Vh(this)
};
q.Xg = function() {
  Vh(this)
};
function Vh(a) {
  if(a.Ka && "undefined" != typeof ba) {
    if(a.vd[1] && 4 == a.Pa() && 2 == Wh(a)) {
      S(a.a, Rh(a, "Local request error detected and ignored"))
    }else {
      if(a.Wc && 4 == a.Pa()) {
        ed.setTimeout(w(a.Mf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.Pa()) {
          S(a.a, Rh(a, "Request complete"));
          a.Ka = m;
          var b = Wh(a), c;
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
              b = ("" + a.fe).match(Jf)[1] || k, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !Qh.test(b ? b.toLowerCase() : "")
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
              S(a.a, "Can not get status: " + e.message), d = ""
            }
            a.jc = d + " [" + Wh(a) + "]";
            Th(a)
          }
          Uh(a)
        }
      }
    }
  }
}
function Uh(a, b) {
  if(a.k) {
    var c = a.k, d = a.vd[0] ? da : k;
    a.k = k;
    a.vd = k;
    a.qb && (ed.clearTimeout(a.qb), a.qb = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(e) {
      Ne(a.a, "Problem encountered resetting onreadystatechange: " + e.message)
    }
  }
}
q.ce = function() {
  return!!this.k
};
q.Pa = function() {
  return this.k ? this.k.readyState : 0
};
function Wh(a) {
  try {
    return 2 < a.Pa() ? a.k.status : -1
  }catch(b) {
    return R(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.k && 4 == this.Pa() ? this.k.getResponseHeader(a) : i
};
function Rh(a, b) {
  return b + " [" + a.zf + " " + a.fe + " " + Wh(a) + "]"
}
;var Xh = !(H || I && !J("420+"));
function Yh(a, b) {
  this.sd = a;
  this.qa = b
}
z(Yh, K);
q = Yh.prototype;
q.s = k;
q.Xa = -1;
q.mf = m;
q.sf = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Zh(a) {
  var b = qg(a.Ze), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.qa, c, b), 1 != b && a.g()) : a.g()
}
q.Ng = function() {
  Zh(this);
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
      for(var b = new Rb, c = this.sf.length;c--;) {
        var d = this.sf[c];
        try {
          b.set(d, this.s.k.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.ca() && (this.mf = j, a.__XHRMaster_ongotheaders(this.qa, Vb(b)), this.va)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.qa, this.Xa);
    Xh && 3 == this.Xa && Zh(this)
  }else {
    this.g()
  }
};
q.je = function(a, b, c) {
  this.s = new Ph;
  M(this.s, "readystatechange", w(this.bh, this));
  M(this.s, "complete", w(this.Ng, this));
  this.s.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.Ze = new pg(this.s.k, 1048576)
};
q.c = function() {
  Yh.f.c.call(this);
  delete this.Ze;
  this.s && this.s.g();
  delete this.sd.vc[this.qa];
  delete this.sd
};
function $h() {
  this.vc = {}
}
z($h, K);
$h.prototype.Tg = function(a, b, c, d) {
  var e = new Yh(this, a);
  this.vc[a] = e;
  e.je(b, c, d)
};
$h.prototype.xg = function(a) {
  (a = this.vc[a]) && a.g()
};
$h.prototype.c = function() {
  $h.f.c.call(this);
  for(var a = Sa(this.vc);a.length;) {
    a.pop().g()
  }
  delete this.vc
};
var ai = new $h;
t.__XHRSlave_makeRequest = w(ai.Tg, ai);
t.__XHRSlave_dispose = w(ai.xg, ai);
var bi = U("cw.net.demo");
function ci() {
}
ci.prototype.jf = function() {
  return Boolean(Number((new Lf(document.location)).$.get("httpStreaming", "0"))) ? 2 : 1
};
function di(a) {
  this.q = a
}
var ei = /\s*;\s*/;
q = di.prototype;
q.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && I) {
    var b = "COOKIES_TEST_" + y();
    fi.set(b, "1");
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
  for(var c = a + "=", d = (this.q.cookie || "").split(ei), e = 0, g;g = d[e];e++) {
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
  return gi(this).keys
};
q.ea = function() {
  return gi(this).ig
};
q.Qa = function() {
  return!this.q.cookie
};
q.ca = function() {
  return!this.q.cookie ? 0 : (this.q.cookie || "").split(ei).length
};
q.ha = function(a) {
  return ga(this.get(a))
};
q.Fc = function(a) {
  for(var b = gi(this).ig, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return j
    }
  }
  return m
};
q.clear = function() {
  for(var a = gi(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b])
  }
};
function gi(a) {
  for(var a = (a.q.cookie || "").split(ei), b = [], c = [], d, e, g = 0;e = a[g];g++) {
    d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)))
  }
  return{keys:b, ig:c}
}
var fi = new di(document);
fi.ci = 3950;
function hi() {
  this.Sf = y()
}
var ii = new hi;
hi.prototype.set = aa("Sf");
hi.prototype.reset = function() {
  this.set(y())
};
hi.prototype.get = n("Sf");
function ji(a) {
  this.$g = a || "";
  this.ih = ii
}
ji.prototype.$f = j;
ji.prototype.gh = j;
ji.prototype.fh = j;
ji.prototype.ag = m;
function ki(a) {
  return 10 > a ? "0" + a : "" + a
}
function li(a, b) {
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
function mi(a) {
  ji.call(this, a)
}
z(mi, ji);
mi.prototype.ag = j;
function ni(a) {
  this.ah = w(this.mg, this);
  this.gf = new mi;
  this.wf = this.gf.$f = m;
  this.e = a;
  this.zg = this.e.ownerDocument || this.e.document;
  var a = Dd(this.e), b = k;
  if(H) {
    b = a.q.createStyleSheet(), fe(b)
  }else {
    var c = Gd(a.q, "head", i, i)[0];
    c || (b = Gd(a.q, "body", i, i)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    fe(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
ni.prototype.mg = function(a) {
  var b = 100 >= this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight, c = this.zg.createElement("div");
  c.className = "logmsg";
  var d = this.gf, e;
  switch(a.Gb.value) {
    case Ee.value:
      e = "dbg-sh";
      break;
    case Fe.value:
      e = "dbg-sev";
      break;
    case Ge.value:
      e = "dbg-w";
      break;
    case He.value:
      e = "dbg-i";
      break;
    default:
      e = "dbg-f"
  }
  var g = [];
  g.push(d.$g, " ");
  if(d.$f) {
    var h = new Date(a.cg);
    g.push("[", ki(h.getFullYear() - 2E3) + ki(h.getMonth() + 1) + ki(h.getDate()) + " " + ki(h.getHours()) + ":" + ki(h.getMinutes()) + ":" + ki(h.getSeconds()) + "." + ki(Math.floor(h.getMilliseconds() / 10)), "] ")
  }
  d.gh && g.push("[", Da(li(a, d.ih.get())), "s] ");
  d.fh && g.push("[", xa(a.Sg), "] ");
  g.push('<span class="', e, '">', wa(Da(xa(a.Hf))));
  d.ag && a.Qd && g.push("<br>", wa(Da(a.Pd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  b && (this.e.scrollTop = this.e.scrollHeight)
};
ni.prototype.clear = function() {
  this.e.innerHTML = ""
};
function oi(a, b, c, d, e, g) {
  6 == arguments.length ? this.setTransform(a, b, c, d, e, g) : (0 != arguments.length && f(Error("Insufficient matrix parameters")), this.V = this.Y = 1, this.R = this.W = this.X = this.Z = 0)
}
q = oi.prototype;
q.B = function() {
  return new oi(this.V, this.R, this.W, this.Y, this.X, this.Z)
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
  var d = new oi, e = Math.cos(a), a = Math.sin(a), b = d.setTransform(e, a, -a, e, b - b * e + c * a, c - b * a - c * e), c = this.V, d = this.W;
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
function Y(a, b) {
  this.e = a;
  this.ya = b;
  this.Jd = m
}
z(Y, cd);
q = Y.prototype;
q.ya = k;
q.e = k;
q.eg = k;
q.b = n("e");
q.addEventListener = function(a, b, c, d) {
  M(this.e, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Vc(this.e, a, b, c, d)
};
q.c = function() {
  Y.f.c.call(this);
  Zc(this.e)
};
function Z(a, b, c, d) {
  Y.call(this, a, b);
  this.Je = c;
  this.ya.ye(this, c);
  this.fill = d;
  this.ya.xe(this, d)
}
z(Z, Y);
Z.prototype.fill = k;
Z.prototype.Je = k;
Z.prototype.Fg = n("fill");
Z.prototype.Hg = n("Je");
function pi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
z(pi, Z);
function qi(a, b) {
  Y.call(this, a, b)
}
z(qi, Y);
function ri(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
z(ri, Z);
function si(a, b) {
  Y.call(this, a, b)
}
z(si, Y);
function ti(a, b) {
  Y.call(this, a, b)
}
z(ti, qi);
ti.prototype.clear = function() {
  Od(this.b())
};
ti.prototype.fa = function(a, b) {
  ui(this.b(), {width:a, height:b})
};
function vi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
z(vi, ri);
function wi(a, b) {
  Y.call(this, a, b)
}
z(wi, si);
wi.prototype.fa = function(a, b) {
  ui(this.b(), {width:a, height:b})
};
function xi() {
}
;function yi(a, b) {
  this.Ed = a;
  this.lc = b || 1
}
z(yi, xi);
yi.prototype.ka = n("Ed");
function zi(a, b) {
  this.sb = a;
  this.Ed = b
}
zi.prototype.ka = n("Ed");
function Ai() {
  this.H = [];
  this.d = [];
  this.ta = []
}
Ai.prototype.wb = k;
Ai.prototype.ba = k;
Ai.prototype.Nb = j;
var Bi = [2, 2, 6, 6, 0];
q = Ai.prototype;
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
  var e = this.ba[0] - a * Math.cos(qf(c)) + a * Math.cos(qf(c + d)), g = this.ba[1] - b * Math.sin(qf(c)) + b * Math.sin(qf(c + d));
  this.H.push(3);
  this.d.push(1);
  this.ta.push(a, b, c, d, e, g);
  this.Nb = m;
  this.ba = [e, g];
  return this
};
q.og = function(a, b, c, d) {
  for(var e = this.ba[0] - a * Math.cos(qf(c)), g = this.ba[1] - b * Math.sin(qf(c)), h = qf(d), d = Math.ceil(2 * (Math.abs(h) / Math.PI)), h = h / d, c = qf(c), l = 0;l < d;l++) {
    var o = Math.cos(c), r = Math.sin(c), A = 4 / 3 * Math.sin(h / 2) / (1 + Math.cos(h / 2)), s = e + (o - A * r) * a, x = g + (r + A * o) * b, c = c + h, o = Math.cos(c), r = Math.sin(c);
    this.Ye(s, x, e + (o + A * r) * a, g + (r - A * o) * b, e + o * a, g + r * b)
  }
  return this
};
function Ci(a, b) {
  for(var c = a.ta, d = 0, e = 0, g = a.H.length;e < g;e++) {
    var h = a.H[e], l = Bi[h] * a.d[e];
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
var Di = {};
Di[0] = Ai.prototype.moveTo;
Di[1] = Ai.prototype.lineTo;
Di[4] = Ai.prototype.close;
Di[2] = Ai.prototype.Ye;
Di[3] = Ai.prototype.og;
function Ei(a) {
  if(a.Nb) {
    return a.B()
  }
  var b = new Ai;
  Ci(a, function(a, d) {
    Di[a].apply(b, d)
  });
  return b
}
Ai.prototype.Qa = function() {
  return 0 == this.H.length
};
function Fi(a, b, c, d, e) {
  Q.call(this, e);
  this.width = a;
  this.height = b;
  this.na = c || k;
  this.Yb = d || k
}
z(Fi, Q);
q = Fi.prototype;
q.L = k;
q.La = 0;
q.bb = 0;
q.lf = function() {
  return this.da()
};
q.da = function() {
  return this.r ? de(this.b()) : ka(this.width) && ka(this.height) ? new N(this.width, this.height) : k
};
function Gi(a) {
  var b = a.da();
  return b ? b.width / (a.na ? new N(a.na, a.Yb) : a.da()).width : 0
}
;function Hi(a, b, c, d, e) {
  Fi.call(this, a, b, c, d, e);
  this.af = {};
  this.Oe = I && !J(526);
  this.hb = new ie(this)
}
var Ii;
z(Hi, Fi);
function Ji(a, b, c) {
  a = a.Q.q.createElementNS("http://www.w3.org/2000/svg", b);
  c && ui(a, c);
  return a
}
function ui(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
q = Hi.prototype;
q.ub = function(a, b) {
  (b || this.L).b().appendChild(a.b())
};
q.xe = function(a, b) {
  var c = a.b();
  b instanceof yi ? (c.setAttribute("fill", b.ka()), c.setAttribute("fill-opacity", b.lc)) : c.setAttribute("fill", "none")
};
q.ye = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.ka());
    var d = b.sb;
    v(d) && -1 != d.indexOf("px") ? c.setAttribute("stroke-width", parseFloat(d) / Gi(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
q.i = function() {
  var a = Ji(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = Ji(this, "g");
  this.Ld = Ji(this, "defs");
  this.L = new ti(b, this);
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
  be(this.b(), a, b)
};
q.da = function() {
  if(!oc) {
    return this.r ? de(this.b()) : Hi.f.da.call(this)
  }
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.r && (c || d)) {
    return k
  }
  var e, g;
  c && (e = this.b().parentNode, g = de(e), a = parseFloat(a) * g.width / 100);
  d && (e = e || this.b().parentNode, g = g || de(e), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
q.clear = function() {
  this.L.clear();
  Od(this.Ld);
  this.af = {}
};
q.Gc = function(a, b, c, d, e, g, h) {
  a = Ji(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  e = new vi(a, this, e, g);
  this.ub(e, h);
  return e
};
q.drawImage = function(a, b, c, d, e, g) {
  a = Ji(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", e);
  e = new wi(a, this);
  this.ub(e, g);
  return e
};
q.T = function() {
  var a = this.da();
  Hi.f.T.call(this);
  a || this.dispatchEvent("resize");
  if(this.Oe) {
    var a = this.width, b = this.height;
    "string" == typeof a && -1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%") && P(this.hb, Ki(), fd, this.td);
    this.td()
  }
};
q.eb = function() {
  Hi.f.eb.call(this);
  this.Oe && ke(this.hb, Ki(), fd, this.td)
};
q.c = function() {
  delete this.af;
  delete this.Ld;
  delete this.L;
  Hi.f.c.call(this)
};
function Ki() {
  Ii || (Ii = new dd(400), Ii.start());
  return Ii
}
;function Li() {
  return this.e = this.ya.Q.b(this.U) || this.e
}
function Mi(a, b) {
  this.U = a.id;
  Y.call(this, a, b)
}
z(Mi, qi);
Mi.prototype.b = Li;
Mi.prototype.clear = function() {
  Od(this.b())
};
Mi.prototype.fa = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  this.ya.L != this && (c.coordorigin = "0 0")
};
function Ni(a, b, c, d, e, g, h, l) {
  this.U = a.id;
  Z.call(this, a, b, h, l)
}
z(Ni, ri);
Ni.prototype.b = Li;
function Oi(a, b) {
  this.U = a.id;
  Y.call(this, a, b)
}
z(Oi, si);
Oi.prototype.b = Li;
Oi.prototype.fa = function(a, b) {
  var c = this.b().style;
  c.width = Pi(a) + "px";
  c.height = Pi(b) + "px"
};
function Qi(a, b, c, d, e) {
  Fi.call(this, a, b, c, d, e);
  this.hb = new ie(this)
}
z(Qi, Fi);
var Ri = document.documentMode && 8 <= document.documentMode;
function Pi(a) {
  return Math.round(100 * (parseFloat(a.toString()) - 0.5))
}
function $(a) {
  return Math.round(100 * parseFloat(a.toString()))
}
function Si(a, b) {
  var c = a.Q.createElement("g_vml_:" + b);
  c.id = "goog_" + Fa++;
  return c
}
function Ti(a) {
  Ri && a.r && (a.b().innerHTML = a.b().innerHTML)
}
Qi.prototype.ub = function(a, b) {
  (b || this.L).b().appendChild(a.b());
  Ti(this)
};
Qi.prototype.xe = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var e = c.childNodes[d];
    "fill" == e.tagName && c.removeChild(e)
  }
  b instanceof yi ? "transparent" == b.ka() ? c.filled = m : 1 != b.lc ? (c.filled = j, d = Si(this, "fill"), d.opacity = Math.round(100 * b.lc) + "%", d.color = b.ka(), c.appendChild(d)) : (c.filled = j, c.fillcolor = b.ka()) : c.filled = m;
  Ti(this)
};
Qi.prototype.ye = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = j;
    var d = b.sb, d = v(d) && -1 == d.indexOf("px") ? parseFloat(d) : d * Gi(this), e = c.getElementsByTagName("stroke")[0];
    1 > d ? (e = e || Si(this, "stroke"), e.opacity = d, e.Ki = "1px", e.color = b.ka(), c.appendChild(e)) : (e && c.removeChild(e), c.strokecolor = b.ka(), c.strokeweight = d + "px")
  }else {
    c.stroked = m
  }
  Ti(this)
};
function Ui(a, b, c, d, e) {
  var g = a.style;
  g.position = "absolute";
  g.left = Pi(b) + "px";
  g.top = Pi(c) + "px";
  g.width = $(d) + "px";
  g.height = $(e) + "px";
  "shape" == a.tagName && (a.coordsize = $(d) + " " + $(e))
}
try {
  eval("document.namespaces")
}catch(Vi) {
}
q = Qi.prototype;
q.i = function() {
  var a = this.Q.q;
  a.namespaces.g_vml_ || (Ri ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}");
  var a = this.width, b = this.height, c = this.Q.i("div", {style:"overflow:hidden;position:relative;width:" + (v(a) && sa(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (v(b) && sa(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = Si(this, "group"), e = d.style;
  e.position = "absolute";
  e.left = e.top = 0;
  e.width = this.width;
  e.height = this.height;
  d.coordsize = this.na ? $(this.na) + " " + $(this.Yb) : $(a) + " " + $(b);
  d.coordorigin = ga(this.La) ? $(this.La) + " " + $(this.bb) : "0 0";
  c.appendChild(d);
  this.L = new Mi(d, this);
  M(c, "resize", w(this.Wd, this))
};
q.Wd = function() {
  var a = de(this.b()), b = this.L.b().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.b();a && a.currentStyle && "none" != a.currentStyle.display;) {
      a = a.parentNode
    }
    a && a.currentStyle && P(this.hb, a, "propertychange", this.Wd)
  }
  this.dispatchEvent("resize")
};
q.fa = function(a, b) {
  be(this.b(), a, b)
};
q.da = function() {
  var a = this.b();
  return new N(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
q.clear = function() {
  this.L.clear()
};
q.Gc = function(a, b, c, d, e, g, h) {
  var l = Si(this, "oval");
  Ui(l, a - c, b - d, 2 * c, 2 * d);
  a = new Ni(l, this, 0, 0, 0, 0, e, g);
  this.ub(a, h);
  return a
};
q.drawImage = function(a, b, c, d, e, g) {
  var h = Si(this, "image");
  Ui(h, a, b, c, d);
  Ri ? h.src = e : h.setAttribute("src", e);
  a = new Oi(h, this);
  this.ub(a, g);
  return a
};
q.T = function() {
  Qi.f.T.call(this);
  this.Wd();
  Ti(this)
};
q.c = function() {
  this.L = k;
  Qi.f.c.call(this)
};
function Wi(a) {
  Y.call(this, k, a);
  this.S = []
}
z(Wi, qi);
Wi.prototype.clear = function() {
  this.S.length && (this.S.length = 0, Xi(this.ya))
};
Wi.prototype.fa = function() {
};
Wi.prototype.appendChild = function(a) {
  this.S.push(a)
};
Wi.prototype.Da = function() {
  for(var a = 0, b = this.S.length;a < b;a++) {
    Yi(this.ya, this.S[a])
  }
};
function Zi(a, b, c, d, e, g, h, l) {
  Z.call(this, a, b, h, l);
  this.tg = c;
  this.ug = d;
  this.Wf = e;
  this.Xf = g;
  this.A = new Ai;
  this.A.clear();
  this.A.moveTo(this.tg + this.Wf * Math.cos(qf(0)), this.ug + this.Xf * Math.sin(qf(0)));
  this.A.arcTo(this.Wf, this.Xf, 0, 360);
  this.A.close();
  this.Yg = new $i(k, b, this.A, h, l)
}
z(Zi, ri);
Zi.prototype.Da = function(a) {
  this.Yg.Da(a)
};
function $i(a, b, c, d, e) {
  Z.call(this, a, b, d, e);
  this.pb(c)
}
z($i, pi);
$i.prototype.$b = m;
$i.prototype.pb = function(a) {
  this.A = a.Nb ? a : Ei(a);
  this.$b && Xi(this.ya)
};
$i.prototype.Da = function(a) {
  this.$b = j;
  a.beginPath();
  Ci(this.A, function(b, c) {
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
function aj(a, b, c, d, e, g, h) {
  Y.call(this, a, b);
  this.xh = c;
  this.zh = d;
  this.Pe = e;
  this.Vd = g;
  this.hh = h
}
z(aj, si);
aj.prototype.$b = m;
aj.prototype.fa = function(a, b) {
  this.Pe = a;
  this.Vd = b;
  this.$b && Xi(this.ya)
};
aj.prototype.Da = function(a) {
  this.uf ? (this.Pe && this.Vd && a.drawImage(this.uf, this.xh, this.zh, this.Pe, this.Vd), this.$b = j) : (a = new Image, a.onload = w(this.Jg, this, a), a.src = this.hh)
};
aj.prototype.Jg = function(a) {
  this.uf = a;
  Xi(this.ya)
};
function bj(a, b, c, d, e) {
  Fi.call(this, a, b, c, d, e)
}
z(bj, Fi);
q = bj.prototype;
q.xe = function() {
  Xi(this)
};
q.ye = function() {
  Xi(this)
};
function cj(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.eg ? b.eg.B() : new oi, e = d.X, g = d.Z;
  (e || g) && c.translate(e, g);
  (d = d.R) && c.rotate(Math.asin(d))
}
q.i = function() {
  var a = this.Q.i("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Wb = this.Q.i("canvas");
  a.appendChild(this.Wb);
  this.Rg = this.L = new Wi(this);
  this.dh = 0;
  dj(this)
};
q.getContext = function() {
  this.b() || this.i();
  this.xb || (this.xb = this.Wb.getContext("2d"), this.xb.save());
  return this.xb
};
q.fa = function(a, b) {
  this.width = a;
  this.height = b;
  dj(this);
  Xi(this)
};
q.da = function() {
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.r && (c || d)) {
    return k
  }
  var e, g;
  c && (e = this.b().parentNode, g = de(e), a = parseFloat(a) * g.width / 100);
  d && (e = e || this.b().parentNode, g = g || de(e), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
function dj(a) {
  be(a.b(), a.width, a.height);
  var b = a.da();
  b && (be(a.Wb, b.width, b.height), a.Wb.width = b.width, a.Wb.height = b.height, a.xb = k)
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
function Xi(a) {
  if(!a.Hi && a.r) {
    a.reset();
    if(a.na) {
      var b = a.da();
      a.getContext().scale(b.width / a.na, b.height / a.Yb)
    }
    (a.La || a.bb) && a.getContext().translate(-a.La, -a.bb);
    cj(a, a.L);
    a.L.Da(a.xb);
    a.getContext().restore()
  }
}
function Yi(a, b) {
  var c = a.getContext();
  cj(a, b);
  if(!b.Fg || !b.Hg) {
    b.Da(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof yi) {
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
      b.Da(c), c.strokeStyle = d.ka(), d = d.sb, v(d) && -1 != d.indexOf("px") && (d = parseFloat(d) / Gi(a)), c.lineWidth = d, c.stroke()
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
  this.r && !this.dh && !(b != this.L && b != this.Rg) && Yi(this, a)
};
q.Gc = function(a, b, c, d, e, g, h) {
  a = new Zi(k, this, a, b, c, d, e, g);
  this.append(a, h);
  return a
};
q.drawImage = function(a, b, c, d, e, g) {
  a = new aj(k, this, a, b, c, d, e);
  this.append(a, g);
  return a
};
q.c = function() {
  this.xb = k;
  bj.f.c.call(this)
};
q.T = function() {
  var a = this.da();
  bj.f.T.call(this);
  a || (dj(this), this.dispatchEvent("resize"));
  Xi(this)
};
function ej(a) {
  this.D = [];
  fj(this, a)
}
z(ej, cd);
q = ej.prototype;
q.Za = k;
q.ve = k;
function fj(a, b) {
  b && (E(b, function(a) {
    this.sc(a, m)
  }, a), eb(a.D, b))
}
q.Ud = n("Za");
q.kf = function() {
  return db(this.D)
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
  ab(this.D);
  this.Za = k
};
q.c = function() {
  ej.f.c.call(this);
  delete this.D;
  this.Za = k
};
q.sc = function(a, b) {
  a && ("function" == typeof this.ve ? this.ve(a, b) : "function" == typeof a.Ae && a.Ae(b))
};
function gj() {
}
z(gj, Yg);
ea(gj);
var hj = 0;
gj.prototype.i = function(a) {
  var b = ah(this, a);
  return a.Ha().i("div", b ? b.join(" ") : k, ij(this, a.ia, a.lf(), a.Ha()))
};
function ij(a, b, c, d) {
  for(var e = [], g = 0, h = 0;g < c.height;g++) {
    for(var l = [], o = 0;o < c.width;o++) {
      var r = b && b[h++];
      l.push(jj(a, r, d))
    }
    e.push(d.i("tr", a.w() + "-row", l))
  }
  return a.Xe(e, d)
}
gj.prototype.Xe = function(a, b) {
  var c = b.i("table", this.w() + "-table", b.i("tbody", this.w() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Xg(c, "grid");
  return c
};
function jj(a, b, c) {
  a = c.i("td", {"class":a.w() + "-cell", id:a.w() + "-cell-" + hj++}, b);
  Xg(a, "gridcell");
  return a
}
gj.prototype.jd = function(a, b) {
  if(a) {
    var c = Gd(document, "tbody", this.w() + "-body", a)[0];
    if(c) {
      var d = 0;
      E(c.rows, function(a) {
        E(a.cells, function(a) {
          Od(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var e = [], g = Dd(a), h = c.rows[0].cells.length;d < b.length;) {
          var l = b[d++];
          e.push(jj(this, l, g));
          e.length == h && (l = g.i("tr", this.w() + "-row", e), c.appendChild(l), e.length = 0)
        }
        if(0 < e.length) {
          for(;e.length < h;) {
            e.push(jj(this, "", g))
          }
          l = g.i("tr", this.w() + "-row", e);
          c.appendChild(l)
        }
      }
    }
    he(a, j, oc)
  }
};
function kj(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && $a(yd(c), a.w() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function lj(a, b, c, d) {
  c && (c = c.parentNode, a = a.w() + "-cell-hover", d ? zd(c, a) : Ad(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id))
}
gj.prototype.w = p("goog-palette");
function mj(a, b, c) {
  W.call(this, a, b || gj.Oa(), c)
}
z(mj, W);
q = mj.prototype;
q.o = k;
q.ib = -1;
q.N = k;
q.c = function() {
  mj.f.c.call(this);
  this.N && (this.N.g(), this.N = k);
  this.o = k
};
q.kd = function(a) {
  mj.f.kd.call(this, a);
  nj(this);
  this.N ? (this.N.clear(), fj(this.N, a)) : (this.N = new ej(a), this.N.ve = w(this.sc, this), P(pe(this), this.N, "select", this.Mg));
  this.ib = -1
};
q.hf = p(k);
q.Tc = function(a) {
  mj.f.Tc.call(this, a);
  var b = kj(this.l, this, a.target);
  if((!b || !a.relatedTarget || !Qd(b, a.relatedTarget)) && b != oj(this)) {
    a = this.ia, qj(this, a ? Wa(a, b) : -1)
  }
};
q.Sc = function(a) {
  mj.f.Sc.call(this, a);
  var b = kj(this.l, this, a.target);
  (!b || !a.relatedTarget || !Qd(b, a.relatedTarget)) && b == oj(this) && lj(this.l, this, b, m)
};
q.Rc = function(a) {
  mj.f.Rc.call(this, a);
  if(this.ce() && (a = kj(this.l, this, a.target), a != oj(this))) {
    var b = this.ia;
    qj(this, b ? Wa(b, a) : -1)
  }
};
q.lb = function() {
  var a = oj(this);
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
    return qj(this, 0), j
  }
  if(35 == a.keyCode) {
    return qj(this, b - 1), j
  }
  var d = 0 > this.ib ? this.Td() : this.ib;
  switch(a.keyCode) {
    case 37:
      -1 == d && (d = b);
      if(0 < d) {
        return qj(this, d - 1), a.preventDefault(), j
      }
      break;
    case 39:
      if(d < b - 1) {
        return qj(this, d + 1), a.preventDefault(), j
      }
      break;
    case 38:
      -1 == d && (d = b + c - 1);
      if(d >= c) {
        return qj(this, d - c), a.preventDefault(), j
      }
      break;
    case 40:
      if(-1 == d && (d = -c), d < b - c) {
        return qj(this, d + c), a.preventDefault(), j
      }
  }
  return m
};
q.Mg = function() {
};
q.lf = n("o");
q.fa = function(a, b) {
  this.b() && f(Error("Component already rendered"));
  this.o = ka(a) ? new N(a, b) : a;
  nj(this)
};
function oj(a) {
  var b = a.ia;
  return b && b[a.ib]
}
function qj(a, b) {
  b != a.ib && (rj(a, a.ib, m), a.ib = b, rj(a, b, j))
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
function rj(a, b, c) {
  if(a.b()) {
    var d = a.ia;
    d && 0 <= b && b < d.length && lj(a.l, a, d[b], c)
  }
}
q.sc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.l.w() + "-cell-selected";
    b ? zd(c, d) : Ad(c, d)
  }
};
function nj(a) {
  var b = a.ia;
  if(b) {
    if(a.o && a.o.width) {
      if(b = Math.ceil(b.length / a.o.width), !ka(a.o.height) || a.o.height < b) {
        a.o.height = b
      }
    }else {
      b = Math.ceil(Math.sqrt(b.length)), a.o = new N(b, b)
    }
  }else {
    a.o = new N(0, 0)
  }
}
;function sj(a, b, c) {
  this.Dc = a || [];
  mj.call(this, k, b || gj.Oa(), c);
  this.Dc = this.Dc;
  this.bd = k;
  this.jd(tj(this))
}
z(sj, mj);
sj.prototype.bd = k;
function uj(a) {
  var b = vj(wj);
  a.bd || (a.bd = Xa(a.Dc, function(a) {
    return vj(a)
  }));
  a.Be(b ? Wa(a.bd, b) : -1)
}
function tj(a) {
  return Xa(a.Dc, function(a) {
    var c = this.Ha().i("div", {"class":this.l.w() + "-colorswatch", style:"background-color:" + a});
    c.title = "#" == a.charAt(0) ? "RGB (" + Hh(a).join(", ") + ")" : a;
    return c
  }, a)
}
function vj(a) {
  if(a) {
    try {
      return Bh(a).Vc
    }catch(b) {
    }
  }
  return k
}
;var xj = U("whiteboard.logger");
window.onerror = function(a, b, c) {
  Ne(xj, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function yj() {
  this.re = new Cb
}
yj.prototype.mh = function(a, b) {
  xj.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  zj = k
};
yj.prototype.nh = function(a) {
  var a = Eb(a), b = a[0], c = a[1];
  1 == b ? (c = this.re.Md(yb.ec(), c), a = nb(c, 1), b = nb(c, 2), c = c.ka(), tb.Gc(a, b, 5, 5, new zi(1, "black"), new yi(c), i)) : 2 == b ? (tb.g(), Aj()) : R(xj, "Strange message from server: " + G(a))
};
yj.prototype.reset = function(a) {
  xj.info("resetting with reason: " + a);
  this.I.reset(a)
};
var zj = k, Bj = new ud(t.window);
function Cj() {
  zj && (zj.reset("idle timeout fired"), zj = k)
}
var Dj = k;
function Ej() {
  Dj != k && Bj.P.clearTimeout(Dj);
  zj && (Dj = Bj.P.setTimeout(Cj, 2592E5))
}
M(window, ["click", "focus", "keydown", "keypress"], Ej, j);
function Fj() {
  tb.g();
  Aj();
  var a = zj;
  xj.info("Telling server to clear the board.");
  Jg(a.I, [Fb([2, a.re.uc(new zb)])])
}
function Gj(a) {
  var b = new Mc(a), a = b.offsetX, c = b.offsetY;
  tb.Gc(a, c, 5, 5, new zi(1, "black"), new yi(ub), i);
  var d = zj, e = ub;
  xj.info("Telling server about circle at: " + a + ", " + c + " with color " + e);
  var b = d.I, g = new yb;
  ob(g, 1, a);
  ob(g, 2, c);
  ob(g, 3, e);
  a = d.re.uc(g);
  Jg(b, [Fb([1, a])])
}
function Aj() {
  var a;
  a = H && !J("9") ? new Qi(800, 600, i, i, i) : I && (!J("420") || pc) ? new bj(800, 600, i, i, i) : new Hi(800, 600, i, i, i);
  a.i();
  vb = O("drawArea");
  qe(a, vb);
  tb = a
}
var wj = "#E06666";
function Hj(a) {
  var b;
  (a = a.target.Ud()) ? (a = a.style[Ha("background-color")] || "", b = vj(a)) : b = k;
  b || (b = wj);
  ub = b;
  fi.set("whiteboard_defaultColor", b);
  a = O("whiteboard-cp-value");
  v("background-color") ? $d(a, b, "background-color") : Ra("background-color", ra($d, a));
  a = O("whiteboard-cp-value");
  a.title = b;
  b = Bh(b).Vc;
  Rd(a, b);
  b = Hh(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = Fh(b[0], b[1], b[2]);
  v("color") ? $d(a, b, "color") : Ra("color", ra($d, a))
}
function Ij() {
  wb = (new Lf(document.location)).$;
  if(xb = Boolean(Number(wb.get("logging", "0")))) {
    Re().md(Le);
    var a = new ni(document.getElementById("log"));
    if(j != a.wf) {
      var b = Re(), c = a.ah;
      b.hc || (b.hc = []);
      b.hc.push(c);
      a.wf = j
    }
  }else {
    Re().md(De)
  }
  xj.info("Logger works.");
  (a = fi.get("whiteboard_defaultColor")) && (wj = a);
  ub = wj;
  b = O("whiteboard-controls-left");
  a = O("whiteboard-controls-right");
  c = Jd("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  Nd(b, c);
  c = Jd("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  Nd(b, c);
  b = new sj("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.fa(8);
  qe(b, O("whiteboard-cp"));
  M(b, "action", Hj);
  uj(b);
  Hj({target:b});
  b = new zh("Clear board");
  oh(b, "clear-board-button");
  qe(b, a);
  M(b, "action", Fj);
  a = O("drawAreaOverlay");
  he(a, j);
  M(a, "click", Gj, m);
  Aj();
  a = new ci;
  zj = new yj;
  Ej();
  c = (new Lf(document.location)).$;
  b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    R(bi, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new Lf(document.location);
  b ? b = new wg("/httpface/", c.oa, t.__demo_mainSocketPort) : (d ? (b = t.__demo_shared_domain, v(b) || f(Error("domain was " + G(b) + "; expected a string.")), c = c.B(), Of(c, "_____random_____." + b)) : c = c.B(), c.pb("/httpface/"), Qf(c, "", i), b = new yg(c.toString().replace("_____random_____", "%random%")));
  a = new Dg(b, a, Bj);
  b = zj;
  a.qe = w(b.nh, b);
  a.onreset = w(b.mh, b);
  zj.I = a;
  Jg(zj.I, ["subprotocol:whiteboard"]);
  a.start()
}
var Jj = "__whiteboard_init".split("."), Kj = t;
!(Jj[0] in Kj) && Kj.execScript && Kj.execScript("var " + Jj[0]);
for(var Lj;Jj.length && (Lj = Jj.shift());) {
  !Jj.length && ga(Ij) ? Kj[Lj] = Ij : Kj = Kj[Lj] ? Kj[Lj] : Kj[Lj] = {}
}
;})();
