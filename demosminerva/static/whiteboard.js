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
    return a.Qg || (a.Qg = new a)
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
  this.Db = !!c.Ji;
  this.cc = c.Sd;
  this.Jf = c.type;
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
  this.Hf = a;
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
sb(yb, {"0":{name:"Point", Fg:"demosminerva.whiteboard_messages.Point"}, 1:{name:"x", Sd:5, type:Number}, 2:{name:"y", Sd:5, type:Number}, 3:{name:"color", Sd:9, type:String}});
sb(zb, {"0":{name:"ClearBoard", Fg:"demosminerva.whiteboard_messages.ClearBoard"}});
function Ab() {
}
Ab.prototype.Nc = function(a, b) {
  return Qa(a) ? this.uc(b) : b
};
Ab.prototype.Md = function(a) {
  new a.Hf;
  f(Error("Unimplemented"))
};
Ab.prototype.Mc = function(a, b) {
  if(Qa(a)) {
    return this.Md(a.Jf.zb, b)
  }
  if(!a.cf) {
    return b
  }
  var c = a.Jf;
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
  var c = new a.Hf;
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
          if(Db(a.mg)) {
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
q.lf = function(a) {
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
  la(a) ? this.zf = j : a && a.handleEvent && la(a.handleEvent) ? this.zf = m : f(Error("Invalid listener argument"));
  this.Hb = a;
  this.Sf = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.Uc = g;
  this.Cd = m;
  this.key = ++Dc;
  this.nb = m
};
q.handleEvent = function(a) {
  return this.zf ? this.Hb.call(this.Uc || this.src, a) : this.Hb.handleEvent.call(this.Hb, a)
};
var Ec = !H || Bc(), Fc = !H || Bc(), Gc = H && !J("8");
!I || J("528");
oc && J("1.9b") || H && J("8") || nc && J("9.5") || I && J("528");
!oc || J("8");
var Hc = {Gh:"click", Lh:"dblclick", fi:"mousedown", ji:"mouseup", ii:"mouseover", hi:"mouseout", gi:"mousemove", ti:"selectstart", $h:"keypress", Zh:"keydown", ai:"keyup", Eh:"blur", Th:"focus", Mh:"deactivate", Uh:H ? "focusin" : "DOMFocusIn", Vh:H ? "focusout" : "DOMFocusOut", Fh:"change", si:"select", ui:"submit", Yh:"input", oi:"propertychange", Qh:"dragstart", Nh:"dragenter", Ph:"dragover", Oh:"dragleave", Rh:"drop", yi:"touchstart", xi:"touchmove", wi:"touchend", vi:"touchcancel", Ih:"contextmenu", 
Sh:"error", Xh:"help", bi:"load", ci:"losecapture", pi:"readystatechange", qi:"resize", ri:"scroll", Ai:"unload", Wh:"hashchange", ki:"pagehide", li:"pageshow", ni:"popstate", Jh:"copy", mi:"paste", Kh:"cut", Bh:"beforecopy", Ch:"beforecut", Dh:"beforepaste", ei:"message", Hh:"connect", zi:I ? "webkitTransitionEnd" : nc ? "oTransitionEnd" : "transitionend"};
function K() {
}
K.prototype.va = m;
K.prototype.g = function() {
  this.va || (this.va = j, this.c())
};
K.prototype.c = function() {
  this.wg && Ic.apply(k, this.wg)
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
  var c = b.src, d = b.type, e = b.Sf, g = b.capture;
  c.removeEventListener ? (c == t || !c.Jd) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in Rc ? Rc[d] : Rc[d] = "on" + d, e);
  c = ma(c);
  e = L[d][g][c];
  if(Qc[c]) {
    var h = Qc[c];
    bb(h, b);
    0 == h.length && delete Qc[c]
  }
  b.nb = j;
  e.Lf = j;
  Yc(d, g, c, e);
  delete Pc[a];
  return j
}
function Yc(a, b, c, d) {
  if(!d.ad && d.Lf) {
    for(var e = 0, g = 0;e < d.length;e++) {
      d[e].nb ? d[e].Sf.src = k : (e != g && (d[g] = d[e]), g++)
    }
    d.length = g;
    d.Lf = m;
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
  this.Ad = w(this.ph, this);
  this.ge = y()
}
z(dd, cd);
dd.prototype.enabled = m;
var ed = t.window;
q = dd.prototype;
q.sa = k;
q.ph = function() {
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
q.sg = m;
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
function qd(a, b) {
  pd(a, k, b, i)
}
function pd(a, b, c, d) {
  a.Cc.push([b, c, d]);
  a.Na && jd(a)
}
function rd(a, b) {
  pd(a, b, b, i)
}
function sd(a) {
  return Ya(a.Cc, function(a) {
    return la(a[1])
  })
}
function jd(a) {
  a.Me && a.Na && sd(a) && (t.clearTimeout(a.Me), delete a.Me);
  a.F && (a.F.Bd--, delete a.F);
  for(var b = a.pc, c = m, d = m;a.Cc.length && 0 == a.mc;) {
    var e = a.Cc.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.fc ? h : g) {
      try {
        var l = g.call(e || a.$e, b);
        ga(l) && (a.fc = a.fc && (l == b || l instanceof Error), a.pc = b = l);
        b instanceof gd && (d = j, a.mc++)
      }catch(o) {
        b = o, a.fc = j, sd(a) || (c = j)
      }
    }
  }
  a.pc = b;
  d && a.mc && (pd(b, w(a.Ue, a, j), w(a.Ue, a, m)), b.sg = j);
  c && (a.Me = t.setTimeout(function() {
    ga(b.message) && b.stack && (b.message += "\n" + b.stack);
    f(b)
  }, 0))
}
function td(a) {
  var b = new gd;
  md(b, a);
  return b
}
function ud(a) {
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
function vd(a) {
  this.P = a;
  this.Hc = [];
  this.ef = [];
  this.rg = w(this.th, this)
}
vd.prototype.sa = k;
function wd(a, b, c, d) {
  a.Hc.push([b, c, d]);
  a.sa == k && (a.sa = a.P.setTimeout(a.rg, 0))
}
vd.prototype.th = function() {
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
    a = this.ef;
    this.ef = [];
    for(b = 0;b < a.length;b++) {
      md(a[b], k)
    }
  }
};
var xd = new vd(t.window);
var yd;
function zd(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function Ad(a, b) {
  var c = zd(a), d = gb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    $a(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function Bd(a, b) {
  var c = zd(a), d = gb(arguments, 1), e;
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
var Cd = !H || Bc();
!oc && !H || H && Bc() || oc && J("1.9.1");
var Dd = H && !J("9");
function Ed(a) {
  return a ? new Fd(Gd(a)) : yd || (yd = new Fd)
}
function O(a) {
  return v(a) ? document.getElementById(a) : a
}
function Hd(a, b, c, d) {
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
function Id(a, b) {
  Ra(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Jd ? a.setAttribute(Jd[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var Jd = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Kd(a, b, c) {
  return Ld(document, arguments)
}
function Ld(a, b) {
  var c = b[0], d = b[1];
  if(!Cd && d && (d.name || d.type)) {
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
  d && (v(d) ? c.className = d : u(d) ? Ad.apply(k, [c].concat(d)) : Id(c, d));
  2 < b.length && Md(a, c, b, 2);
  return c
}
function Md(a, b, c, d) {
  function e(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && 0 < g.nodeType) ? E(Nd(g) ? db(g) : g, e) : e(g)
  }
}
function Od(a, b) {
  Md(Gd(a), a, arguments, 1)
}
function Pd(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function Qd(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Rd(a, b) {
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
function Gd(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function Sd(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      Pd(a), a.appendChild(Gd(a).createTextNode(b))
    }
  }
}
var Td = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Ud = {IMG:" ", BR:"\n"};
function Vd(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, ka(a) && 0 <= a && 32768 > a) : m
}
function Wd(a) {
  var b = [];
  Xd(a, b, m);
  return b.join("")
}
function Xd(a, b, c) {
  if(!(a.nodeName in Td)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Ud) {
        b.push(Ud[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Xd(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Nd(a) {
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
function Fd(a) {
  this.q = a || t.document || document
}
q = Fd.prototype;
q.Ha = Ed;
q.b = function(a) {
  return v(a) ? this.q.getElementById(a) : a
};
q.i = function(a, b, c) {
  return Ld(this.q, arguments)
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
q.append = Od;
q.contains = Rd;
function Yd(a, b) {
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
        a.push('<property id="', d, '">'), Yd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', xa(c), '">'), Yd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function Zd(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, e = arguments;
  d.push("<arguments>");
  for(var g = e.length, h = 1;h < g;h++) {
    Yd(d, e[h])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var $d;
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
  $d = c
})();
function ae(a, b, c) {
  a.style[Ha(c)] = b
}
function be(a, b) {
  var c = Gd(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function ce(a, b, c) {
  b instanceof N ? (c = b.height, b = b.width) : c == i && f(Error("missing height argument"));
  a.style.width = de(b);
  a.style.height = de(c)
}
function de(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
function ee(a) {
  if("none" != (be(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style && a.style.display)) {
    return fe(a)
  }
  var b = a.style, c = b.display, d = b.visibility, e = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = fe(a);
  b.display = c;
  b.position = e;
  b.visibility = d;
  return a
}
function fe(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = I && !b && !c;
  return(!ga(b) || d) && a.getBoundingClientRect ? (b = a.getBoundingClientRect(), H && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop), new N(b.right - b.left, b.bottom - b.top)) : new N(b, c)
}
function ge(a) {
  H ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[I ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var he = oc ? "MozUserSelect" : I ? "WebkitUserSelect" : k;
function ie(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(he) {
    if(b = b ? "none" : "", a.style[he] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[he] = b
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
;function je(a) {
  this.hb = a;
  this.n = []
}
z(je, K);
var ke = [];
function P(a, b, c, d) {
  u(c) || (ke[0] = c, c = ke);
  for(var e = 0;e < c.length;e++) {
    a.n.push(M(b, c[e], d || a, m, a.hb || a))
  }
  return a
}
function le(a, b, c, d, e, g) {
  if(u(c)) {
    for(var h = 0;h < c.length;h++) {
      le(a, b, c[h], d, e, g)
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
je.prototype.te = function() {
  E(this.n, Xc);
  this.n.length = 0
};
je.prototype.c = function() {
  je.f.c.call(this);
  this.te()
};
je.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function me() {
}
ea(me);
me.prototype.Xg = 0;
me.Oa();
function Q(a) {
  this.Q = a || Ed();
  this.rc = ne
}
z(Q, cd);
Q.prototype.Pg = me.Oa();
var ne = k;
function oe(a, b) {
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
q.uh = m;
function pe(a) {
  return a.U || (a.U = ":" + (a.Pg.Xg++).toString(36))
}
q.b = n("e");
function qe(a) {
  return a.Ab || (a.Ab = new je(a))
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
function re(a, b) {
  a.r && f(Error("Component already rendered"));
  a.e || a.i();
  b ? b.insertBefore(a.e, k) : a.Q.q.body.appendChild(a.e);
  (!a.F || a.F.r) && a.T()
}
q.T = function() {
  this.r = j;
  se(this, function(a) {
    !a.r && a.b() && a.T()
  })
};
q.eb = function() {
  se(this, function(a) {
    a.r && a.eb()
  });
  this.Ab && this.Ab.te();
  this.r = m
};
q.c = function() {
  Q.f.c.call(this);
  this.r && this.eb();
  this.Ab && (this.Ab.g(), delete this.Ab);
  se(this, function(a) {
    a.g()
  });
  !this.uh && this.e && Qd(this.e);
  this.F = this.e = this.Xb = this.S = k
};
q.dc = n("e");
q.Mb = function(a) {
  this.r && f(Error("Component already rendered"));
  this.rc = a
};
function se(a, b) {
  a.S && E(a.S, b, i)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : pe(a), a = this.Xb && c ? (c in this.Xb ? this.Xb[c] : i) || k : k;
    if(c && a) {
      var d = this.Xb;
      c in d && delete d[c];
      bb(this.S, a);
      b && (a.eb(), a.e && Qd(a.e));
      c = a;
      c == k && f(Error("Unable to set parent component"));
      c.F = k;
      Q.f.ze.call(c, k)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function te(a) {
  this.z = new Rb;
  a && this.xd(a)
}
function ue(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ma(a) : b.substr(0, 1) + a
}
q = te.prototype;
q.ca = function() {
  return this.z.ca()
};
q.add = function(a) {
  this.z.set(ue(a), a)
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
  return this.z.remove(ue(a))
};
q.clear = function() {
  this.z.clear()
};
q.Qa = function() {
  return this.z.Qa()
};
q.contains = function(a) {
  return this.z.ha(ue(a))
};
q.ea = function() {
  return this.z.ea()
};
q.B = function() {
  return new te(this)
};
q.m = function(a) {
  return this.ca() == Mb(a) && ve(this, a)
};
function ve(a, b) {
  var c = Mb(b);
  if(a.ca() > c) {
    return m
  }
  !(b instanceof te) && 5 < c && (b = new te(b));
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
;function we(a) {
  return xe(a || arguments.callee.caller, [])
}
function xe(a, b) {
  var c = [];
  if($a(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(ye(a) + "(");
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
            g = (g = ye(g)) ? g : "[fn]";
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
        c.push(xe(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function ye(a) {
  if(ze[a]) {
    return ze[a]
  }
  a = "" + a;
  if(!ze[a]) {
    var b = /function ([^\(]+)/.exec(a);
    ze[a] = b ? b[1] : "[Anonymous]"
  }
  return ze[a]
}
var ze = {};
function Ae(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Ae.prototype.Qd = k;
Ae.prototype.Pd = k;
var Be = 0;
Ae.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || Be++;
  this.dg = d || y();
  this.Gb = a;
  this.If = b;
  this.Tg = c;
  delete this.Qd;
  delete this.Pd
};
Ae.prototype.md = aa("Gb");
function Ce(a) {
  this.le = a
}
Ce.prototype.F = k;
Ce.prototype.Gb = k;
Ce.prototype.S = k;
Ce.prototype.hc = k;
function De(a, b) {
  this.name = a;
  this.value = b
}
De.prototype.toString = n("name");
var Ee = new De("OFF", Infinity), Fe = new De("SHOUT", 1200), Ge = new De("SEVERE", 1E3), He = new De("WARNING", 900), Ie = new De("INFO", 800), Je = new De("CONFIG", 700), Ke = new De("FINE", 500), Le = new De("FINEST", 300), Me = new De("ALL", 0);
q = Ce.prototype;
q.getParent = n("F");
q.md = aa("Gb");
function Ne(a) {
  if(a.Gb) {
    return a.Gb
  }
  if(a.F) {
    return Ne(a.F)
  }
  Ja("Root logger has no level set.");
  return k
}
q.log = function(a, b, c) {
  if(a.value >= Ne(this).value) {
    a = this.Hg(a, b, c);
    b = "log:" + a.If;
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
q.Hg = function(a, b, c) {
  var d = new Ae(a, "" + b, this.le);
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
          o = c.lineNumber || c.Hi || "Not available"
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
      e = "Message: " + xa(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + xa(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + xa(we(g) + "-> ")
    }catch(C) {
      e = "Exception trying to expose exception! You win, we lose. " + C
    }
    d.Pd = e
  }
  return d
};
function Oe(a, b) {
  a.log(Ge, b, i)
}
function R(a, b) {
  a.log(He, b, i)
}
q.info = function(a, b) {
  this.log(Ie, a, b)
};
function S(a, b) {
  a.log(Ke, b, i)
}
function T(a, b) {
  a.log(Le, b, i)
}
var Pe = {}, Qe = k;
function Re() {
  Qe || (Qe = new Ce(""), Pe[""] = Qe, Qe.md(Je))
}
function Se() {
  Re();
  return Qe
}
function U(a) {
  Re();
  var b;
  if(!(b = Pe[a])) {
    b = new Ce(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = U(a.substr(0, c));
    c.S || (c.S = {});
    c.S[d] = b;
    b.F = c;
    Pe[a] = b
  }
  return b
}
;function Te(a, b) {
  Q.call(this, b);
  this.Dg = a;
  this.Od = new je(this);
  this.Jc = new Rb
}
z(Te, Q);
q = Te.prototype;
q.a = U("goog.ui.media.FlashObject");
q.wh = "window";
q.Qe = "#000000";
q.og = "sameDomain";
q.fa = function(a, b) {
  this.sb = v(a) ? a : Math.round(a) + "px";
  this.Zd = v(b) ? b : Math.round(b) + "px";
  this.b() && ce(this.b() ? this.b().firstChild : k, this.sb, this.Zd);
  return this
};
q.T = function() {
  Te.f.T.call(this);
  var a = this.b(), b;
  b = H ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = H ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = ta(c, this.wh), d = this.Jc.xa(), e = this.Jc.ea(), g = [], h = 0;h < d.length;h++) {
    var l = va(d[h]), o = va(e[h]);
    g.push(l + "=" + o)
  }
  b = ta(b, pe(this), pe(this), "goog-ui-media-flash-object", xa(this.Dg), xa(g.join("&")), this.Qe, this.og, c);
  a.innerHTML = b;
  this.sb && this.Zd && this.fa(this.sb, this.Zd);
  P(this.Od, this.b(), Sa(Hc), Kc)
};
q.i = function() {
  this.Vf != k && !(0 <= Ea($d, this.Vf)) && (R(this.a, "Required flash version not found:" + this.Vf), f(Error("Method not supported")));
  var a = this.Ha().createElement("div");
  a.className = "goog-ui-media-flash";
  this.e = a
};
q.c = function() {
  Te.f.c.call(this);
  this.Jc = k;
  this.Od.g();
  this.Od = k
};
function Ue() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ y()).toString(36)
}
function Ve(a) {
  return a.substr(0, a.length - 1)
}
var We = /^(0|[1-9]\d*)$/, Xe = /^(0|\-?[1-9]\d*)$/;
function Ye(a) {
  var b = Ze;
  return We.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function $e(a) {
  B.call(this, a)
}
z($e, B);
$e.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function af(a, b, c) {
  function d() {
    e && delete t.__loadFlashObject_callbacks[e]
  }
  var e;
  if(oc && !J("1.8.1.20")) {
    return ud(new $e("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Ea($d, "9"))) {
    return b = $d, ud(new $e("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  e = "_" + Ue();
  var h = new gd(d);
  t.__loadFlashObject_callbacks[e] = function() {
    a.setTimeout(function() {
      d();
      md(h, O(g))
    }, 0)
  };
  b.Jc.set("onloadcallback", '__loadFlashObject_callbacks["' + e + '"]()');
  g = pe(b);
  re(b, c);
  return h
}
function bf(a, b, c) {
  var d = af(a, b, c), e = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  rd(d, function(b) {
    a.clearTimeout(e);
    return b
  });
  return d
}
;function cf(a, b) {
  this.U = "_" + Ue();
  this.sd = a;
  this.Va = b;
  this.$a = a.$a
}
z(cf, K);
q = cf.prototype;
q.Ib = j;
q.Hd = m;
q.a = U("cw.net.FlashSocket");
q.u = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.U);
  a.push("'>")
};
function df(a, b, c) {
  "frames" == b ? (a = a.Va, ef(a.O), ff(a.O, c)) : "stillreceiving" == b ? (c = a.Va, T(c.a, "onstillreceiving"), ef(c.O)) : "connect" == b ? (c = a.Va, c.a.info("onconnect"), ef(c.O), a = c.Ub, c.Ub = k, a.length && (T(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.pd.Ac(a))) : "close" == b ? (a.Ib = m, a.g()) : "ioerror" == b ? (a.Ib = m, b = a.Va, R(b.a, "onioerror: " + G(c)), gf(b.O, m), a.g()) : "securityerror" == b ? (a.Ib = m, b = a.Va, R(b.a, "onsecurityerror: " + G(c)), 
  gf(b.O, m), a.g()) : f(Error("bad event: " + b))
}
function hf(a) {
  a.Hd = j;
  a.Ib = m;
  a.g()
}
q.Fd = function(a, b) {
  try {
    var c = this.$a.CallFunction(Zd("__FC_connect", this.U, a, b, "<int32/>\n"))
  }catch(d) {
    return Oe(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), hf(this)
  }
  '"OK"' != c && f(Error("__FC_connect failed? ret: " + c))
};
q.Ac = function(a) {
  try {
    var b = this.$a.CallFunction(Zd("__FC_writeFrames", this.U, a))
  }catch(c) {
    return Oe(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), hf(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (R(this.a, "Flash no longer knows of " + this.U + "; disposing."), this.g()) : f(Error("__FC_writeFrames failed? ret: " + b)))
};
q.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.Ib);
  cf.f.c.call(this);
  var a = this.$a;
  delete this.$a;
  if(this.Ib) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(Zd("__FC_close", this.U)))
    }catch(b) {
      Oe(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Hd = j
    }
  }
  if(this.Hd) {
    a = this.Va, R(a.a, "oncrash"), gf(a.O, j)
  }else {
    this.Va.onclose()
  }
  delete this.Va;
  delete this.sd.Bb[this.U]
};
function jf(a, b) {
  this.K = a;
  this.$a = b;
  this.Bb = {};
  this.Dd = "__FST_" + Ue();
  t[this.Dd] = w(this.zg, this);
  var c = b.CallFunction(Zd("__FC_setCallbackFunc", this.Dd));
  '"OK"' != c && f(Error("__FC_setCallbackFunc failed? ret: " + c))
}
z(jf, K);
q = jf.prototype;
q.a = U("cw.net.FlashSocketTracker");
q.u = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  F(this.Bb, a, b);
  a.push(">")
};
q.Id = function(a) {
  a = new cf(this, a);
  return this.Bb[a.U] = a
};
q.xg = function(a, b, c, d) {
  var e = this.Bb[a];
  e ? "frames" == b && d ? (df(e, "ioerror", "FlashConnector hadError while handling data."), e.g()) : df(e, b, c) : R(this.a, "Cannot dispatch because we have no instance: " + G([a, b, c, d]))
};
q.zg = function(a, b, c, d) {
  try {
    wd(this.K, this.xg, this, [a, b, c, d])
  }catch(e) {
    t.window.setTimeout(function() {
      f(e)
    }, 0)
  }
};
q.c = function() {
  jf.f.c.call(this);
  for(var a = Sa(this.Bb);a.length;) {
    a.pop().g()
  }
  delete this.Bb;
  delete this.$a;
  t[this.Dd] = i
};
function kf(a) {
  this.O = a;
  this.Ub = []
}
z(kf, K);
q = kf.prototype;
q.a = U("cw.net.FlashSocketConduit");
q.Ac = function(a) {
  this.Ub ? (T(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Ub.push.apply(this.Ub, a)) : (T(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.pd.Ac(a))
};
q.Fd = function(a, b) {
  this.pd.Fd(a, b)
};
q.onclose = function() {
  this.a.info("onclose");
  gf(this.O, m)
};
q.c = function() {
  this.a.info("in disposeInternal.");
  kf.f.c.call(this);
  this.pd.g();
  delete this.O
};
var lf = [];
function mf() {
  var a = new gd;
  lf.push(a);
  return a
}
function nf(a) {
  var b = lf;
  lf = [];
  E(b, function(b) {
    md(b, a)
  })
}
function of(a, b) {
  if(lf.length) {
    return mf()
  }
  var c = new Te(b + "FlashConnector.swf?cb=" + pf);
  c.Qe = "#777777";
  c.fa(300, 30);
  var d = O("minerva-elements");
  d || f(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
  var e = O("minerva-elements-FlashConnectorSwf");
  e || (e = Kd("div", {id:"minerva-elements-FlashConnectorSwf"}), d.appendChild(e));
  Xb = bf(a.P, c, e);
  nd(Xb, nf);
  return mf()
}
;function qf() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
function rf(a) {
  return a * Math.PI / 180
}
;var Ze = Math.pow(2, 53);
var sf = {mg:p("<cw.eq.Wildcard>")};
function tf(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function uf(a, b, c) {
  var d = fa(a), e = fa(b);
  if(a == sf || b == sf) {
    return j
  }
  if(a != k && "function" == typeof a.m) {
    return c && c.push("running custom equals function on left object"), a.m(b, c)
  }
  if(b != k && "function" == typeof b.m) {
    return c && c.push("running custom equals function on right object"), b.m(a, c)
  }
  if(tf(d) || tf(e)) {
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
                if(!uf(a[d], b[d], c)) {
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
          if(a.lg == ec && b.lg == ec) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!uf(a[g], b[g], c)) {
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
function vf() {
  var a = [];
  this.pa(a);
  return a.join("")
}
function wf() {
}
wf.prototype.m = function(a, b) {
  return!(a instanceof wf) ? m : uf(xf(this), xf(a), b)
};
wf.prototype.u = function(a, b) {
  a.push("<HelloFrame properties=");
  F(xf(this), a, b);
  a.push(">")
};
function xf(a) {
  return[a.Pb, a.Rf, a.uf, a.Uf, a.wc, a.He, a.Kf, a.Gf, a.ke, a.Ef, a.hg, a.cg, a.ra, a.$c]
}
wf.prototype.ja = vf;
wf.prototype.pa = function(a) {
  var b = {};
  b.tnum = this.Pb;
  b.ver = this.Rf;
  b.format = this.uf;
  b["new"] = this.Uf;
  b.id = this.wc;
  b.ming = this.He;
  b.pad = this.Kf;
  b.maxb = this.Gf;
  ga(this.ke) && (b.maxt = this.ke);
  b.maxia = this.Ef;
  b.tcpack = this.hg;
  b.eeds = this.cg;
  b.sack = this.ra instanceof Zb ? Ve((new yf(this.ra)).ja()) : this.ra;
  b.seenack = this.$c instanceof Zb ? Ve((new yf(this.$c)).ja()) : this.$c;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push(Fb(b), "H")
};
function zf(a) {
  this.Ob = a
}
zf.prototype.m = function(a) {
  return a instanceof zf && this.Ob == a.Ob
};
zf.prototype.u = function(a, b) {
  a.push("new StringFrame(");
  F(this.Ob, a, b);
  a.push(")")
};
zf.prototype.ja = vf;
zf.prototype.pa = function(a) {
  a.push(this.Ob, " ")
};
function Af(a) {
  this.Ec = a
}
Af.prototype.m = function(a) {
  return a instanceof Af && this.Ec == a.Ec
};
Af.prototype.u = function(a, b) {
  a.push("new CommentFrame(");
  F(this.Ec, a, b);
  a.push(")")
};
Af.prototype.ja = vf;
Af.prototype.pa = function(a) {
  a.push(this.Ec, "^")
};
function Bf(a) {
  this.tc = a
}
Bf.prototype.m = function(a) {
  return a instanceof Bf && this.tc == a.tc
};
Bf.prototype.u = function(a) {
  a.push("new SeqNumFrame(", "" + this.tc, ")")
};
Bf.prototype.ja = vf;
Bf.prototype.pa = function(a) {
  a.push("" + this.tc, "N")
};
function Cf(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = Ze;
    if(Xe.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var g = Ye(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Zb(a, c)
}
function yf(a) {
  this.ra = a
}
yf.prototype.m = function(a, b) {
  return a instanceof yf && this.ra.m(a.ra, b)
};
yf.prototype.u = function(a, b) {
  a.push("new SackFrame(");
  F(this.ra, a, b);
  a.push(")")
};
yf.prototype.ja = vf;
yf.prototype.pa = function(a) {
  var b = this.ra;
  a.push(b.ob.join(","), "|", "" + b.tb);
  a.push("A")
};
function Df(a) {
  this.kc = a
}
Df.prototype.m = function(a, b) {
  return a instanceof Df && this.kc.m(a.kc, b)
};
Df.prototype.u = function(a, b) {
  a.push("new StreamStatusFrame(");
  F(this.kc, a, b);
  a.push(")")
};
Df.prototype.ja = vf;
Df.prototype.pa = function(a) {
  var b = this.kc;
  a.push(b.ob.join(","), "|", "" + b.tb);
  a.push("T")
};
function Ef() {
}
Ef.prototype.u = function(a) {
  a.push("new StreamCreatedFrame()")
};
Ef.prototype.m = function(a) {
  return a instanceof Ef
};
Ef.prototype.ja = vf;
Ef.prototype.pa = function(a) {
  a.push("C")
};
function Ff() {
}
Ff.prototype.u = function(a) {
  a.push("new YouCloseItFrame()")
};
Ff.prototype.m = function(a) {
  return a instanceof Ff
};
Ff.prototype.ja = vf;
Ff.prototype.pa = function(a) {
  a.push("Y")
};
function Gf(a, b) {
  this.nc = a;
  this.Tb = b
}
Gf.prototype.m = function(a) {
  return a instanceof Gf && this.nc == a.nc && this.Tb == a.Tb
};
Gf.prototype.u = function(a, b) {
  a.push("new ResetFrame(");
  F(this.nc, a, b);
  a.push(", ", "" + this.Tb, ")")
};
Gf.prototype.ja = vf;
Gf.prototype.pa = function(a) {
  a.push(this.nc, "|", "" + Number(this.Tb), "!")
};
var Hf = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function If(a) {
  this.reason = a
}
If.prototype.m = function(a) {
  return a instanceof If && this.reason == a.reason
};
If.prototype.u = function(a, b) {
  a.push("new TransportKillFrame(");
  F(this.reason, a, b);
  a.push(")")
};
If.prototype.ja = vf;
If.prototype.pa = function(a) {
  a.push(this.reason, "K")
};
function Jf(a) {
  a || f(new V("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new zf(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = Cf(Ve(a)), a == k && f(new V("bad sack")), new yf(a)
  }
  if("N" == b) {
    return a = Ye(Ve(a)), a == k && f(new V("bad seqNum")), new Bf(a)
  }
  if("T" == b) {
    return a = Cf(Ve(a)), a == k && f(new V("bad lastSackSeen")), new Df(a)
  }
  if("Y" == b) {
    return 1 != a.length && f(new V("leading garbage")), new Ff
  }
  if("^" == b) {
    return new Af(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && f(new V("leading garbage")), new Ef
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && f(new V("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && f(new V("bad applicationLevel")), new Gf(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = Hf[a], a == k && f(new V("unknown kill reason: " + a)), new If(a)
  }
  f(new V("Invalid frame type " + b))
}
;var Kf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Lf(a, b) {
  var c = a.match(Kf), d = b.match(Kf);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Mf(a, b) {
  var c;
  a instanceof Mf ? (this.Lb(b == k ? a.za : b), Nf(this, a.Ba), Of(this, a.rb), Pf(this, a.oa), Qf(this, a.Ua), this.pb(a.A), Rf(this, a.$.B()), Sf(this, a.fb)) : a && (c = ("" + a).match(Kf)) ? (this.Lb(!!b), Nf(this, c[1] || "", j), Of(this, c[2] || "", j), Pf(this, c[3] || "", j), Qf(this, c[4]), this.pb(c[5] || "", j), Rf(this, c[6] || "", j), Sf(this, c[7] || "", j)) : (this.Lb(!!b), this.$ = new Tf(k, this, this.za))
}
q = Mf.prototype;
q.Ba = "";
q.rb = "";
q.oa = "";
q.Ua = k;
q.A = "";
q.fb = "";
q.Rg = m;
q.za = m;
q.toString = function() {
  if(this.ua) {
    return this.ua
  }
  var a = [];
  this.Ba && a.push(Uf(this.Ba, Vf), ":");
  this.oa && (a.push("//"), this.rb && a.push(Uf(this.rb, Vf), "@"), a.push(v(this.oa) ? encodeURIComponent(this.oa) : k), this.Ua != k && a.push(":", "" + this.Ua));
  this.A && (this.oa && "/" != this.A.charAt(0) && a.push("/"), a.push(Uf(this.A, "/" == this.A.charAt(0) ? Wf : Xf)));
  var b = "" + this.$;
  b && a.push("?", b);
  this.fb && a.push("#", Uf(this.fb, Yf));
  return this.ua = a.join("")
};
q.B = function() {
  var a = this.Ba, b = this.rb, c = this.oa, d = this.Ua, e = this.A, g = this.$.B(), h = this.fb, l = new Mf(k, this.za);
  a && Nf(l, a);
  b && Of(l, b);
  c && Pf(l, c);
  d && Qf(l, d);
  e && l.pb(e);
  g && Rf(l, g);
  h && Sf(l, h);
  return l
};
function Nf(a, b, c) {
  Zf(a);
  delete a.ua;
  a.Ba = c ? b ? decodeURIComponent(b) : "" : b;
  a.Ba && (a.Ba = a.Ba.replace(/:$/, ""))
}
function Of(a, b, c) {
  Zf(a);
  delete a.ua;
  a.rb = c ? b ? decodeURIComponent(b) : "" : b
}
function Pf(a, b, c) {
  Zf(a);
  delete a.ua;
  a.oa = c ? b ? decodeURIComponent(b) : "" : b
}
function Qf(a, b) {
  Zf(a);
  delete a.ua;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && f(Error("Bad port number " + b)), a.Ua = b) : a.Ua = k
}
q.pb = function(a, b) {
  Zf(this);
  delete this.ua;
  this.A = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function Rf(a, b, c) {
  Zf(a);
  delete a.ua;
  b instanceof Tf ? (a.$ = b, a.$.Ne = a, a.$.Lb(a.za)) : (c || (b = Uf(b, $f)), a.$ = new Tf(b, a, a.za))
}
function Sf(a, b, c) {
  Zf(a);
  delete a.ua;
  a.fb = c ? b ? decodeURIComponent(b) : "" : b
}
function Zf(a) {
  a.Rg && f(Error("Tried to modify a read-only Uri"))
}
q.Lb = function(a) {
  this.za = a;
  this.$ && this.$.Lb(a);
  return this
};
function ag(a) {
  return a instanceof Mf ? a.B() : new Mf(a, i)
}
var bg = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Uf(a, b) {
  var c = k;
  v(a) && (c = a, bg.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, cg)));
  return c
}
function cg(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Vf = /[#\/\?@]/g, Xf = /[\#\?:]/g, Wf = /[\#\?]/g, $f = /[\#\?@]/g, Yf = /#/g;
function Tf(a, b, c) {
  this.Ea = a || k;
  this.Ne = b || k;
  this.za = !!c
}
function dg(a) {
  if(!a.p && (a.p = new Rb, a.d = 0, a.Ea)) {
    for(var b = a.Ea.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, g = k;
      0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = eg(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
q = Tf.prototype;
q.p = k;
q.d = k;
q.ca = function() {
  dg(this);
  return this.d
};
q.add = function(a, b) {
  dg(this);
  fg(this);
  a = eg(this, a);
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
  dg(this);
  a = eg(this, a);
  if(this.p.ha(a)) {
    fg(this);
    var b = this.p.get(a);
    u(b) ? this.d -= b.length : this.d--;
    return this.p.remove(a)
  }
  return m
};
q.clear = function() {
  fg(this);
  this.p && this.p.clear();
  this.d = 0
};
q.Qa = function() {
  dg(this);
  return 0 == this.d
};
q.ha = function(a) {
  dg(this);
  a = eg(this, a);
  return this.p.ha(a)
};
q.Fc = function(a) {
  var b = this.ea();
  return $a(b, a)
};
q.xa = function() {
  dg(this);
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
  dg(this);
  if(a) {
    if(a = eg(this, a), this.ha(a)) {
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
  dg(this);
  fg(this);
  a = eg(this, a);
  if(this.ha(a)) {
    var c = this.p.get(a);
    u(c) ? this.d -= c.length : this.d--
  }
  this.p.set(a, b);
  this.d++;
  return this
};
q.get = function(a, b) {
  dg(this);
  a = eg(this, a);
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
function fg(a) {
  delete a.yb;
  delete a.Ea;
  a.Ne && delete a.Ne.ua
}
q.B = function() {
  var a = new Tf;
  this.yb && (a.yb = this.yb);
  this.Ea && (a.Ea = this.Ea);
  this.p && (a.p = this.p.B());
  return a
};
function eg(a, b) {
  var c = "" + b;
  a.za && (c = c.toLowerCase());
  return c
}
q.Lb = function(a) {
  a && !this.za && (dg(this), fg(this), Pb(this.p, function(a, c) {
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
function gg(a, b, c, d) {
  this.contentWindow = a;
  this.Ic = b;
  this.Ie = c;
  this.Eg = d
}
gg.prototype.u = function(a, b) {
  a.push("<XDRFrame frameId=");
  F(this.Eg, a, b);
  a.push(", expandedUrl=");
  F(this.Ic, a, b);
  a.push(", streams=");
  F(this.Ie, a, b);
  a.push(">")
};
function hg() {
  this.frames = [];
  this.ie = new Rb
}
hg.prototype.a = U("cw.net.XDRTracker");
function ig(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor(qf()) + ("" + Math.floor(qf()))
  })
}
function jg(a, b) {
  for(var c = kg, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = 0 == e.Ie.length) {
      g = e.Ic;
      var h = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + G(b) + " existing frame " + G(e)), td(e)
    }
  }
  d = Ue() + Ue();
  e = ig(a);
  g = t.location;
  g instanceof Mf || (g = ag(g));
  e instanceof Mf || (e = ag(e));
  var l = g;
  g = l.B();
  (h = !!e.Ba) ? Nf(g, e.Ba) : h = !!e.rb;
  h ? Of(g, e.rb) : h = !!e.oa;
  h ? Pf(g, e.oa) : h = e.Ua != k;
  var o = e.A;
  if(h) {
    Qf(g, e.Ua)
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
  h ? (l = e.$, l.yb || (l.yb = l.toString() ? decodeURIComponent(l.toString()) : ""), Rf(g, l.yb, i)) : h = !!e.fb;
  h && Sf(g, e.fb);
  e = g.toString();
  g = ("" + t.location).match(Kf)[3] || k;
  h = e.match(Kf)[3] || k;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + G(b)), c = td(new gg(t, e, [b], k))) : ((g = O("minerva-elements")) || f(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), h = new gd, c.ie.set(d, [h, e, b]), c.a.info("Creating new XDRFrame " + G(d) + "for " + G(b)), c = Kd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = h);
  return c
}
hg.prototype.zh = function(a) {
  var b = this.ie.get(a);
  b || f(Error("Unknown frameId " + G(a)));
  this.ie.remove(b);
  var c = b[0], a = new gg(O("minerva-xdrframe-" + a).contentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (O("minerva-xdrframe-" + a).contentDocument || O("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  md(c, a)
};
var kg = new hg;
t.__XHRTracker_xdrFrameLoaded = w(kg.zh, kg);
var lg;
lg = m;
var mg = kc();
mg && (-1 != mg.indexOf("Firefox") || -1 != mg.indexOf("Camino") || -1 != mg.indexOf("iPhone") || -1 != mg.indexOf("iPod") || -1 != mg.indexOf("iPad") || -1 != mg.indexOf("Android") || -1 != mg.indexOf("Chrome") && (lg = j));
var ng = lg;
var pf = "4bdfc178fc0e508c0cd5efc3fdb09920";
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function og(a, b, c, d, e, g) {
  gd.call(this, e, g);
  this.Df = a;
  this.Kd = [];
  this.gf = !!b;
  this.Cg = !!c;
  this.tg = !!d;
  for(b = 0;b < a.length;b++) {
    pd(a[b], w(this.pf, this, b, j), w(this.pf, this, b, m))
  }
  0 == a.length && !this.gf && md(this, this.Kd)
}
z(og, gd);
og.prototype.Mf = 0;
og.prototype.pf = function(a, b, c) {
  this.Mf++;
  this.Kd[a] = [b, c];
  this.Na || (this.gf && b ? md(this, [a, c]) : this.Cg && !b ? this.bc(c) : this.Mf == this.Df.length && md(this, this.Kd));
  this.tg && !b && (c = k);
  return c
};
og.prototype.bc = function(a) {
  og.f.bc.call(this, a);
  E(this.Df, function(a) {
    a.cancel()
  })
};
function pg(a) {
  a = new og(a, m, j);
  nd(a, function(a) {
    return Xa(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function qg(a, b) {
  this.xh = a;
  this.Ff = b
}
qg.prototype.ee = 0;
qg.prototype.cd = 0;
qg.prototype.Rd = m;
function rg(a) {
  var b = [];
  if(a.Rd) {
    return[b, 2]
  }
  var c = a.ee, d = a.xh.responseText;
  for(a.ee = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var e = d.substr(a.cd, c - a.cd), e = e.replace(/\r$/, "");
    if(e.length > a.Ff) {
      return a.Rd = j, [b, 2]
    }
    b.push(e);
    a.cd = c += 1
  }
  return a.ee - a.cd - 1 > a.Ff ? (a.Rd = j, [b, 2]) : [b, 1]
}
;function sg(a, b, c) {
  this.O = b;
  this.qa = a;
  this.Gd = c
}
z(sg, K);
q = sg.prototype;
q.a = U("cw.net.XHRMaster");
q.Xa = -1;
q.je = function(a, b, c) {
  this.Gd.__XHRSlave_makeRequest(this.qa, a, b, c)
};
q.Pa = n("Xa");
q.ne = function(a, b) {
  1 != b && Oe(this.a, G(this.qa) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  ef(this.O);
  ff(this.O, a)
};
q.oe = function(a) {
  S(this.a, "ongotheaders_: " + G(a));
  var b = k;
  "Content-Length" in a && (b = Ye(a["Content-Length"]));
  a = this.O;
  S(a.a, a.v() + " got Content-Length: " + b);
  a.Ca == tg && (b == k && (R(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), ug(a, 2E3 + 1E3 * (b / 3072)))
};
q.pe = function(a) {
  1 != a && S(this.a, this.O.v() + "'s XHR's readyState is " + a);
  this.Xa = a;
  2 <= this.Xa && ef(this.O)
};
q.me = function() {
  this.O.g()
};
q.c = function() {
  sg.f.c.call(this);
  delete vg.Ia[this.qa];
  this.Gd.__XHRSlave_dispose(this.qa);
  delete this.Gd
};
function wg() {
  this.Ia = {}
}
z(wg, K);
q = wg.prototype;
q.a = U("cw.net.XHRMasterTracker");
q.Id = function(a, b) {
  var c = "_" + Ue(), d = new sg(c, a, b);
  return this.Ia[c] = d
};
q.ne = function(a, b, c) {
  var b = cb(b), d = this.Ia[a];
  d ? d.ne(b, c) : Oe(this.a, "onframes_: no master for " + G(a))
};
q.oe = function(a, b) {
  var c = this.Ia[a];
  c ? c.oe(b) : Oe(this.a, "ongotheaders_: no master for " + G(a))
};
q.pe = function(a, b) {
  var c = this.Ia[a];
  c ? c.pe(b) : Oe(this.a, "onreadystatechange_: no master for " + G(a))
};
q.me = function(a) {
  var b = this.Ia[a];
  b ? (delete this.Ia[b.qa], b.me()) : Oe(this.a, "oncomplete_: no master for " + G(a))
};
q.c = function() {
  wg.f.c.call(this);
  for(var a = Sa(this.Ia);a.length;) {
    a.pop().g()
  }
  delete this.Ia
};
var vg = new wg;
t.__XHRMaster_onframes = w(vg.ne, vg);
t.__XHRMaster_oncomplete = w(vg.me, vg);
t.__XHRMaster_ongotheaders = w(vg.oe, vg);
t.__XHRMaster_onreadystatechange = w(vg.pe, vg);
function xg(a, b, c) {
  this.Aa = a;
  this.host = b;
  this.port = c
}
function yg(a, b, c) {
  this.host = a;
  this.port = b;
  this.sh = c
}
function zg(a, b) {
  b || (b = a);
  this.Aa = a;
  this.Ya = b
}
zg.prototype.u = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  F(this.Aa, a, b);
  a.push(", secondaryUrl=");
  F(this.Ya, a, b);
  a.push(">")
};
function Ag(a, b, c, d) {
  this.Aa = a;
  this.Qf = b;
  this.Ya = c;
  this.$f = d;
  (!(0 == this.Aa.indexOf("http://") || 0 == this.Aa.indexOf("https://")) || !(0 == this.Ya.indexOf("http://") || 0 == this.Ya.indexOf("https://"))) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Qf.location.href;
  Lf(this.Aa, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.$f.location.href;
  Lf(this.Ya, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
Ag.prototype.u = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  F(this.Aa, a, b);
  a.push(", secondaryUrl=");
  F(this.Ya, a, b);
  a.push(">")
};
var Bg = new Af(";)]}");
function Cg() {
}
Cg.prototype.kf = p(1);
function Dg(a) {
  this.lh = a
}
Dg.prototype.u = function(a, b) {
  a.push("<UserContext for ");
  F(this.lh, a, b);
  a.push(">")
};
function Eg(a, b, c) {
  this.C = a;
  this.mh = b ? b : new Cg;
  this.K = c ? c : xd;
  this.yc = new te;
  this.wc = Ue() + Ue();
  this.Wa = new $b;
  this.be = new bc;
  this.zc = k;
  this.ud = [];
  this.Qb = new Dg(this);
  I && (this.zc = Uc(t, "load", this.fh, m, this))
}
z(Eg, K);
q = Eg.prototype;
q.a = U("cw.net.ClientStream");
q.Bf = new Zb(-1, []);
q.Cf = new Zb(-1, []);
q.Wg = 50;
q.Vg = 1048576;
q.qe = k;
q.onreset = k;
q.Of = k;
q.Fe = m;
q.ue = m;
q.h = 1;
q.Ke = -1;
q.j = k;
q.G = k;
q.oc = k;
q.Ge = 0;
q.Pf = 0;
q.Zf = 0;
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
function Fg(a) {
  var b = [-1];
  a.j && b.push(a.j.Jb);
  a.G && b.push(a.G.Jb);
  return Math.max.apply(Math.max, b)
}
function Gg(a) {
  if(!(3 > a.h)) {
    var b = 0 != a.Wa.D.ca(), c = cc(a.be), d = !c.m(a.Cf) && !(a.j && c.m(a.j.Fb) || a.G && c.m(a.G.Fb)), e = Fg(a);
    if((b = b && e < a.Wa.cb) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.j.Vb ? (T(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.j, c != d.Fb && (!d.Ja && !d.J.length && Hg(d), d.J.push(new yf(c)), d.Fb = c)), b && Ig(a.j, a.Wa, e + 1), a.j.Ga()) : a.G == k ? a.Fe ? (T(a.a, "tryToSend_: creating secondary to send " + g), a.G = Jg(a, m), b && Ig(a.G, a.Wa, e + 1), a.G.Ga()) : (T(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.ue = j) : T(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
q.fh = function() {
  this.zc = k;
  if(this.j && this.j.Cb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.j;
    a.wd = j;
    a.g()
  }
  this.G && this.G.Cb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.G, a.wd = j, a.g())
};
function Kg(a, b) {
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
    Gg(a)
  }
}
function Jg(a, b) {
  var c;
  a.C instanceof Ag ? c = 1 == a.mh.kf() ? tg : Lg : a.C instanceof yg ? c = Mg : f(Error("Don't support endpoint " + G(a.C)));
  a.Ke += 1;
  c = new Ng(a.K, a, a.Ke, c, a.C, b);
  T(a.a, "Created: " + c.v());
  a.yc.add(c);
  return c
}
function Og(a, b, c) {
  var d = new Pg(a.K, a, b, c);
  T(a.a, "Created: " + d.v() + ", delay=" + b + ", times=" + c);
  a.yc.add(d);
  return d
}
function Qg(a, b) {
  a.yc.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  S(a.a, "Offline: " + b.v());
  a.Ge = b.Ta ? a.Ge + b.Ta : 0;
  1 <= a.Ge && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.Qb, "stream penalty reached limit", m), a.g());
  if(3 < a.h) {
    4 == a.h && b.kg ? (S(a.a, "Disposing because resettingTransport_ is done."), a.g()) : S(a.a, "Not creating a transport because ClientStream is in state " + a.h)
  }else {
    var c;
    var d;
    c = b instanceof Pg;
    if(!c && b.wd) {
      var e = I ? ng ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      T(a.a, "getDelayForNextTransport_: " + G({delay:c, times:d}))
    }else {
      if(d = b.Te(), b == a.j ? d ? e = ++a.Pf : c || (e = a.Pf = 0) : d ? e = ++a.Zf : c || (e = a.Zf = 0), c || !e) {
        d = c = 0, T(a.a, "getDelayForNextTransport_: " + G({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(4E3 * Math.random()) - 2E3, l = Math.max(0, b.gg - b.Le);
        d = (c = Math.max(0, g + h - l)) ? 1 : 0;
        T(a.a, "getDelayForNextTransport_: " + G({count:e, base:g, variance:h, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    b == a.j ? (a.j = k, c ? a.j = Og(a, e, c) : (e = Fg(a), a.j = Jg(a, j), Ig(a.j, a.Wa, e + 1)), a.j.Ga()) : b == a.G && (a.G = k, c ? (a.G = Og(a, e, c), a.G.Ga()) : Gg(a))
  }
}
q.reset = function(a) {
  3 < this.h && f(Error("reset: Can't send reset in state " + this.h));
  this.h = 4;
  this.j && this.j.Vb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Rg(this.j, a), this.j.Ga()) : (this.j && (S(this.a, "reset: Disposing primary before sending ResetFrame."), this.j.g()), this.G && (S(this.a, "reset: Disposing secondary before sending ResetFrame."), this.G.g()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.oc = Jg(this, m), Rg(this.oc, a), this.oc.Ga());
  this.onreset && this.onreset.call(this.Qb, a, j)
};
function Sg(a, b, c, d) {
  var e;
  e = a.be;
  for(var g = a.Wg, h = a.Vg, l = [], o = m, r = 0, A = c.length;r < A;r++) {
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
  d || Gg(a);
  if(!(4 == a.h || a.va) && e) {
    Oe(b.a, b.v() + "'s peer caused rwin overflow."), b.g()
  }
}
q.df = function(a) {
  Oe(this.a, "Failed to start " + G(this) + "; error was " + G(a.message));
  this.g()
};
q.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.h && f(Error("ClientStream.start: " + G(this) + " already started"));
  this.h = 2;
  if(this.C instanceof zg) {
    var a = jg(this.C.Aa, this), b = jg(this.C.Ya, this), a = pg([a, b]);
    nd(a, w(this.Bg, this));
    qd(a, w(this.df, this))
  }else {
    if(this.C instanceof xg) {
      if(Yb) {
        this.ff()
      }else {
        var a = of(this.K, this.C.Aa), c = this;
        nd(a, function(a) {
          Yb || (Yb = new jf(c.K, a));
          return k
        });
        nd(a, w(this.ff, this));
        qd(a, w(this.df, this))
      }
    }else {
      Tg(this)
    }
  }
};
q.Bg = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].Ic, e = a[1].Ic;
  this.ud.push(a[0]);
  this.ud.push(a[1]);
  this.C = new Ag(d, b, e, c);
  Tg(this)
};
q.ff = function() {
  this.C = new yg(this.C.host, this.C.port, Yb);
  Tg(this)
};
function Tg(a) {
  a.h = 3;
  a.j = Jg(a, j);
  Ig(a.j, a.Wa, k);
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
  this.Of && this.Of.call(this.Qb);
  delete this.yc;
  delete this.j;
  delete this.G;
  delete this.oc;
  delete this.Qb;
  Eg.f.c.call(this)
};
var tg = 1, Lg = 2, Mg = 3;
function Ng(a, b, c, d, e, g) {
  this.K = a;
  this.I = b;
  this.Pb = c;
  this.Ca = d;
  this.C = e;
  this.J = [];
  this.vb = g;
  this.Vb = !this.Cb();
  this.Kb = this.Ca != tg;
  this.qg = w(this.qh, this)
}
z(Ng, K);
q = Ng.prototype;
q.a = U("cw.net.ClientTransport");
q.s = k;
q.Le = k;
q.gg = k;
q.fd = k;
q.Ja = m;
q.qd = m;
q.Fb = k;
q.Kc = 0;
q.Jb = -1;
q.ed = -1;
q.kg = m;
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
  return this.Ca == tg || this.Ca == Lg
};
function Ug(a, b) {
  hb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Sg(a.I, a, b, !a.Kb)
}
function Vg(a, b, c) {
  try {
    var d = Jf(b);
    a.Kc += 1;
    S(a.a, a.v() + " RECV " + G(d));
    var e;
    1 == a.Kc && !d.m(Bg) && a.Cb() ? (R(a.a, a.v() + " is closing soon because got bad preamble: " + G(d)), e = j) : e = m;
    if(e) {
      return j
    }
    if(d instanceof zf) {
      if(!/^([ -~]*)$/.test(d.Ob)) {
        return a.gc = j
      }
      a.ed += 1;
      c.push([a.ed, d.Ob])
    }else {
      if(d instanceof yf) {
        var g = a.I, h = d.ra;
        g.Bf = h;
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
        if(d instanceof Bf) {
          a.ed = d.tc - 1
        }else {
          if(d instanceof Df) {
            a.I.Cf = d.kc
          }else {
            if(d instanceof Ff) {
              return T(a.a, a.v() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof If) {
              return a.gc = j, "stream_attach_failure" == d.reason ? a.Ta += 1 : "acked_unsent_strings" == d.reason && (a.Ta += 0.5), T(a.a, a.v() + " is closing soon because got " + G(d)), j
            }
            if(!(d instanceof Af)) {
              if(d instanceof Ef) {
                var C = a.I, qj = !a.Kb;
                T(C.a, "Stream is now confirmed to exist at server.");
                C.Fe = j;
                C.ue && !qj && (C.ue = m, Gg(C))
              }else {
                c.length && (Ug(a, c), ab(c));
                if(d instanceof Gf) {
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
  }catch($g) {
    return $g instanceof V || f($g), R(a.a, a.v() + " is closing soon because got InvalidFrame: " + G(b)), a.gc = j
  }
  return m
}
function ff(a, b) {
  a.qd = j;
  try {
    for(var c = m, d = [], e = 0, g = b.length;e < g;e++) {
      if(a.va) {
        a.a.info(a.v() + " returning from loop because we're disposed.");
        return
      }
      if(c = Vg(a, b[e], d)) {
        break
      }
    }
    d.length && Ug(a, d);
    a.qd = m;
    a.J.length && a.Ga();
    c && (T(a.a, a.v() + " closeSoon is true.  Frames were: " + G(b)), a.g())
  }finally {
    a.qd = m
  }
}
q.qh = function() {
  R(this.a, this.v() + " timed out due to lack of connection or no data being received.");
  this.g()
};
function Wg(a) {
  a.fd != k && (a.K.P.clearTimeout(a.fd), a.fd = k)
}
function ug(a, b) {
  Wg(a);
  b = Math.round(b);
  a.fd = a.K.P.setTimeout(a.qg, b);
  S(a.a, a.v() + "'s receive timeout set to " + b + " ms.")
}
function ef(a) {
  a.Ca != tg && (a.Ca == Mg || a.Ca == Lg ? ug(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.Ca)))
}
function Hg(a) {
  var b = new wf;
  b.Pb = a.Pb;
  b.Rf = 2;
  b.uf = 2;
  a.I.Fe || (b.Uf = j);
  b.wc = a.I.wc;
  b.He = a.Kb;
  b.He && (b.Kf = 4096);
  b.Gf = 3E5;
  b.Ef = a.Kb ? Math.floor(10) : 0;
  b.hg = m;
  a.vb && (b.cg = k, b.ke = Math.floor((a.Kb ? 358E4 : 25E3) / 1E3));
  b.ra = cc(a.I.be);
  b.$c = a.I.Bf;
  a.J.push(b);
  a.Fb = b.ra
}
function gf(a, b) {
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
    !a && !this.J.length && Hg(this);
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
      this.s = vg.Id(this, this.vb ? this.C.Qf : this.C.$f);
      this.Le = this.K.P === ed ? y() : this.K.P.getTime();
      this.s.je(b, "POST", a);
      ug(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.Kb ? 0 : this.vb ? 25E3 : 0))
    }else {
      if(this.Ca == Mg) {
        a = [];
        b = 0;
        for(c = this.J.length;b < c;b++) {
          a.push(this.J[b].ja())
        }
        this.J = [];
        this.s ? this.s.Ac(a) : (b = this.C, this.s = new kf(this), this.s.pd = b.sh.Id(this.s), this.Le = this.K.P === ed ? y() : this.K.P.getTime(), this.s.Fd(b.host, b.port), this.s.va || (this.s.Ac(a), this.s.va || ug(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.Ca))
      }
    }
  }
};
function Ig(a, b, c) {
  !a.Ja && !a.J.length && Hg(a);
  for(var c = Math.max(c, a.Jb + 1), b = b.lf(c), c = 0, d = b.length;c < d;c++) {
    var e = b[c], g = e[0], e = e[1];
    (-1 == a.Jb || a.Jb + 1 != g) && a.J.push(new Bf(g));
    a.J.push(new zf(e));
    a.Jb = g
  }
}
q.c = function() {
  this.a.info(this.v() + " in disposeInternal.");
  Ng.f.c.call(this);
  this.gg = this.K.P === ed ? y() : this.K.P.getTime();
  this.J = [];
  Wg(this);
  this.s && this.s.g();
  var a = this.I;
  this.I = k;
  Qg(a, this)
};
function Rg(a, b) {
  !a.Ja && !a.J.length && Hg(a);
  a.J.push(new Gf(b, j));
  a.kg = j
}
function Pg(a, b, c, d) {
  this.K = a;
  this.I = b;
  this.bf = c;
  this.We = d
}
z(Pg, K);
q = Pg.prototype;
q.Ja = m;
q.Vb = m;
q.Qc = k;
q.Fb = k;
q.a = U("cw.net.DoNothingTransport");
function Xg(a) {
  a.Qc = a.K.P.setTimeout(function() {
    a.Qc = k;
    a.We--;
    a.We ? Xg(a) : a.g()
  }, a.bf)
}
q.Ga = function() {
  this.Ja && !this.Vb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ja = j;
  Xg(this)
};
q.u = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.bf, ">")
};
q.Cb = p(m);
q.v = p("Wast. T");
q.Te = p(m);
q.c = function() {
  this.a.info(this.v() + " in disposeInternal.");
  Pg.f.c.call(this);
  this.Qc != k && this.K.P.clearTimeout(this.Qc);
  var a = this.I;
  this.I = k;
  Qg(a, this)
};
function Yg(a, b) {
  a.setAttribute("role", b);
  a.Ki = b
}
;function Zg() {
}
var ah;
ea(Zg);
q = Zg.prototype;
q.Lc = function() {
};
q.i = function(a) {
  var b = a.Ha().i("div", bh(this, a).join(" "), a.ia);
  this.we(a, b);
  return b
};
q.dc = function(a) {
  return a
};
q.ac = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(H && !J("7")) {
      var d = ch(zd(a), b);
      d.push(b);
      ra(c ? Ad : Bd, a).apply(k, d)
    }else {
      c ? Ad(a, b) : Bd(a, b)
    }
  }
};
q.wf = function(a) {
  a.rc == k && (a.rc = "rtl" == (be(a.r ? a.e : a.Q.q.body, "direction") || ((a.r ? a.e : a.Q.q.body).currentStyle ? (a.r ? a.e : a.Q.q.body).currentStyle.direction : k) || (a.r ? a.e : a.Q.q.body).style && (a.r ? a.e : a.Q.q.body).style.direction));
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
  ie(a, !b, !H && !nc)
};
q.Mb = function(a, b) {
  this.ac(a, this.w() + "-rtl", b)
};
q.yf = function(a) {
  var b;
  return a.aa & 32 && (b = a.gb()) ? Vd(b) : m
};
q.ld = function(a, b) {
  var c;
  if(a.aa & 32 && (c = a.gb())) {
    if(!b && a.h & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.h & 32 && a.of()
    }
    Vd(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
q.De = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.ma = function(a, b, c) {
  var d = a.b();
  if(d) {
    var e = dh(this, b);
    e && this.ac(a, e, c);
    this.ga(d, b, c)
  }
};
q.ga = function(a, b, c) {
  ah || (ah = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = ah[b]) && a.setAttribute("aria-" + b, c)
};
q.jd = function(a, b) {
  var c = this.dc(a);
  if(c && (Pd(c), b)) {
    if(v(b)) {
      Sd(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = Gd(c);
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
function bh(a, b) {
  var c = a.w(), d = [c], e = a.w();
  e != c && d.push(e);
  c = b.h;
  for(e = [];c;) {
    var g = c & -c;
    e.push(dh(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.wa) && d.push.apply(d, c);
  H && !J("7") && d.push.apply(d, ch(d));
  return d
}
function ch(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  E([], function(d) {
    Za(d, ra($a, a)) && (!b || $a(d, b)) && c.push(d.join("_"))
  });
  return c
}
function dh(a, b) {
  if(!a.Se) {
    var c = a.w();
    a.Se = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Se[b]
}
;function eh(a, b) {
  a || f(Error("Invalid class name " + a));
  la(b) || f(Error("Invalid decorator function " + b))
}
var fh = {};
function gh(a, b, c, d, e) {
  if(!H && (!I || !J("525"))) {
    return j
  }
  if(rc && e) {
    return hh(a)
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
  return hh(a)
}
function hh(a) {
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
;function ih(a, b) {
  a && jh(this, a, b)
}
z(ih, cd);
q = ih.prototype;
q.e = k;
q.Yc = k;
q.de = k;
q.Zc = k;
q.Sa = -1;
q.Ra = -1;
var kh = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, lh = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, mh = {61:187, 
59:186}, nh = H || I && J("525");
q = ih.prototype;
q.Lg = function(a) {
  if(I && (17 == this.Sa && !a.ctrlKey || 18 == this.Sa && !a.altKey)) {
    this.Ra = this.Sa = -1
  }
  nh && !gh(a.keyCode, this.Sa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Ra = oc && a.keyCode in mh ? mh[a.keyCode] : a.keyCode
};
q.Mg = function() {
  this.Ra = this.Sa = -1
};
q.handleEvent = function(a) {
  var b = a.Fa, c, d;
  H && "keypress" == a.type ? (c = this.Ra, d = 13 != c && 27 != c ? b.keyCode : 0) : I && "keypress" == a.type ? (c = this.Ra, d = 0 <= b.charCode && 63232 > b.charCode && hh(c) ? b.charCode : 0) : nc ? (c = this.Ra, d = hh(c) ? b.keyCode : 0) : (c = b.keyCode || this.Ra, d = b.charCode || 0, rc && 63 == d && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in kh ? e = kh[c] : 25 == c && a.shiftKey && (e = 9) : g && g in lh && (e = lh[g]);
  a = e == this.Sa;
  this.Sa = e;
  b = new oh(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.g()
  }
};
q.b = n("e");
function jh(a, b, c) {
  a.Zc && a.detach();
  a.e = b;
  a.Yc = M(a.e, "keypress", a, c);
  a.de = M(a.e, "keydown", a.Lg, c, a);
  a.Zc = M(a.e, "keyup", a.Mg, c, a)
}
q.detach = function() {
  this.Yc && (Xc(this.Yc), Xc(this.de), Xc(this.Zc), this.Zc = this.de = this.Yc = k);
  this.e = k;
  this.Ra = this.Sa = -1
};
q.c = function() {
  ih.f.c.call(this);
  this.detach()
};
function oh(a, b, c, d) {
  d && this.ic(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
z(oh, Mc);
function W(a, b, c) {
  Q.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ma(b);
      if(d = fh[d]) {
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
q.kh = 0;
q.Rb = j;
q.wa = k;
q.Yd = j;
q.yd = m;
q.$g = k;
q.gb = function() {
  return this.l.gb(this)
};
function ph(a, b) {
  b && (a.wa ? $a(a.wa, b) || a.wa.push(b) : a.wa = [b], a.l.ac(a, b, j))
}
q.ac = function(a, b) {
  b ? ph(this, a) : a && this.wa && (bb(this.wa, a), 0 == this.wa.length && (this.wa = k), this.l.ac(this, a, m))
};
q.i = function() {
  var a = this.l.i(this);
  this.e = a;
  var b = this.$g || this.l.Lc();
  b && Yg(a, b);
  this.yd || this.l.hd(a, m);
  this.Rb || this.l.De(a, m)
};
q.dc = function() {
  return this.l.dc(this.b())
};
q.T = function() {
  W.f.T.call(this);
  this.l.wf(this);
  if(this.aa & -2 && (this.Yd && qh(this, j), this.aa & 32)) {
    var a = this.gb();
    if(a) {
      var b = this.Eb || (this.Eb = new ih);
      jh(b, a);
      P(P(P(qe(this), b, "key", this.rf), a, "focus", this.Jg), a, "blur", this.of)
    }
  }
};
function qh(a, b) {
  var c = qe(a), d = a.b();
  b ? (P(P(P(P(c, d, "mouseover", a.Tc), d, "mousedown", a.Rc), d, "mouseup", a.sf), d, "mouseout", a.Sc), H && P(c, d, "dblclick", a.qf)) : (le(le(le(le(c, d, "mouseover", a.Tc), d, "mousedown", a.Rc), d, "mouseup", a.sf), d, "mouseout", a.Sc), H && le(c, d, "dblclick", a.qf))
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
q.jf = function() {
  var a = this.ia;
  if(!a) {
    return""
  }
  if(!v(a)) {
    if(u(a)) {
      a = Xa(a, Wd).join("")
    }else {
      if(Dd && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Xd(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Dd || (a = a.replace(/ +/g, " "));
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
function rh(a, b) {
  sh(a, 2, b) && a.ma(2, b)
}
q.ce = function() {
  return!!(this.h & 4)
};
q.setActive = function(a) {
  sh(this, 4, a) && this.ma(4, a)
};
q.Ae = function(a) {
  sh(this, 8, a) && this.ma(8, a)
};
q.ma = function(a, b) {
  this.aa & a && b != !!(this.h & a) && (this.l.ma(this, a, b), this.h = b ? this.h | a : this.h & ~a)
};
function X(a, b) {
  return!!(a.zd & b) && !!(a.aa & b)
}
function sh(a, b, c) {
  return!!(a.aa & b) && !!(a.h & b) != c && (!(a.kh & b) || a.dispatchEvent(oe(b, c))) && !a.va
}
q.Tc = function(a) {
  !th(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && X(this, 2) && rh(this, j)
};
q.Sc = function(a) {
  !th(a, this.b()) && this.dispatchEvent("leave") && (X(this, 4) && this.setActive(m), X(this, 2) && rh(this, m))
};
function th(a, b) {
  return!!a.relatedTarget && Rd(b, a.relatedTarget)
}
q.Rc = function(a) {
  if(this.isEnabled() && (X(this, 2) && rh(this, j), Oc(a) && (!I || !rc || !a.ctrlKey))) {
    X(this, 4) && this.setActive(j), this.l.yf(this) && this.gb().focus()
  }
  !this.yd && Oc(a) && (!I || !rc || !a.ctrlKey) && a.preventDefault()
};
q.sf = function(a) {
  this.isEnabled() && (X(this, 2) && rh(this, j), this.ce() && this.lb(a) && X(this, 4) && this.setActive(m))
};
q.qf = function(a) {
  this.isEnabled() && this.lb(a)
};
q.lb = function(a) {
  if(X(this, 16)) {
    var b = !(this.h & 16);
    sh(this, 16, b) && this.ma(16, b)
  }
  X(this, 8) && this.Ae(j);
  X(this, 64) && (b = !(this.h & 64), sh(this, 64, b) && this.ma(64, b));
  b = new Jc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.se = a.se);
  return this.dispatchEvent(b)
};
q.Jg = function() {
  X(this, 32) && sh(this, 32, j) && this.ma(32, j)
};
q.of = function() {
  X(this, 4) && this.setActive(m);
  X(this, 32) && sh(this, 32, m) && this.ma(32, m)
};
q.rf = function(a) {
  return this.Rb && this.isEnabled() && this.Xd(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
q.Xd = function(a) {
  return 13 == a.keyCode && this.lb(a)
};
la(W) || f(Error("Invalid component class " + W));
la(Zg) || f(Error("Invalid renderer class " + Zg));
var uh = ma(W);
fh[uh] = Zg;
eh("goog-control", function() {
  return new W(k)
});
function vh() {
}
z(vh, Zg);
ea(vh);
q = vh.prototype;
q.Lc = p("button");
q.ga = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : vh.f.ga.call(this, a, b, c)
};
q.i = function(a) {
  var b = vh.f.i.call(this, a), c = a.Oc();
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
function wh() {
}
z(wh, vh);
ea(wh);
q = wh.prototype;
q.Lc = function() {
};
q.i = function(a) {
  a.r && m != a.Yd && qh(a, m);
  a.Yd = m;
  a.zd &= -256;
  a.r && a.h & 32 && f(Error("Component already rendered"));
  a.h & 32 && a.ma(32, m);
  a.aa &= -33;
  return a.Ha().i("button", {"class":bh(this, a).join(" "), disabled:!a.isEnabled(), title:a.Oc() || "", value:a.Pc() || ""}, a.jf() || "")
};
q.wf = function(a) {
  P(qe(a), a.b(), "click", a.lb)
};
q.hd = da;
q.Mb = da;
q.yf = function(a) {
  return a.isEnabled()
};
q.ld = da;
q.ma = function(a, b, c) {
  wh.f.ma.call(this, a, b, c);
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
function xh(a, b, c) {
  W.call(this, a, b || wh.Oa(), c)
}
z(xh, W);
q = xh.prototype;
q.Pc = n("ig");
q.od = function(a) {
  this.ig = a;
  this.l.od(this.b(), a)
};
q.Oc = n("eg");
q.Ce = function(a) {
  this.eg = a;
  this.l.Ce(this.b(), a)
};
q.c = function() {
  xh.f.c.call(this);
  delete this.ig;
  delete this.eg
};
q.T = function() {
  xh.f.T.call(this);
  if(this.aa & 32) {
    var a = this.gb();
    a && P(qe(this), a, "keyup", this.Xd)
  }
};
q.Xd = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.lb(a) : 32 == a.keyCode
};
eh("goog-button", function() {
  return new xh(k)
});
function yh() {
}
z(yh, vh);
ea(yh);
q = yh.prototype;
q.i = function(a) {
  var b = {"class":"goog-inline-block " + bh(this, a).join(" "), title:a.Oc() || ""}, b = a.Ha().i("div", b, zh(this, a.ia, a.Ha()));
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
function zh(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.w() + "-outer-box"), c.i("div", "goog-inline-block " + (a.w() + "-inner-box"), b))
}
q.w = p("goog-custom-button");
function Ah(a, b, c) {
  xh.call(this, a, b || yh.Oa(), c)
}
z(Ah, xh);
eh("goog-custom-button", function() {
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
  var b = {}, a = "" + a, c = "#" == a.charAt(0) ? a : "#" + a;
  if(Dh.test(c)) {
    return b.Vc = Eh(c), b.type = "hex", b
  }
  a: {
    var d = a.match(Fh);
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
    return b.Vc = Gh(c[0], c[1], c[2]), b.type = "rgb", b
  }
  if(Bh && (c = Bh[a.toLowerCase()])) {
    return b.Vc = c, b.type = "named", b
  }
  f(Error(a + " is not a valid color string"))
}
var Hh = /#(.)(.)(.)/;
function Eh(a) {
  Dh.test(a) || f(Error("'" + a + "' is not a valid hex color"));
  4 == a.length && (a = a.replace(Hh, "#$1$1$2$2$3$3"));
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
  (isNaN(a) || 0 > a || 255 < a || isNaN(b) || 0 > b || 255 < b || isNaN(c) || 0 > c || 255 < c) && f(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = Jh(a.toString(16));
  b = Jh(b.toString(16));
  c = Jh(c.toString(16));
  return"#" + a + b + c
}
var Dh = /^#(?:[0-9a-f]{3}){1,2}$/i, Fh = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function Jh(a) {
  return 1 == a.length ? "0" + a : a
}
;function Kh() {
}
Kh.prototype.Bc = k;
var Lh;
function Mh() {
}
z(Mh, Kh);
function Nh(a) {
  return(a = Oh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Ph(a) {
  var b = {};
  Oh(a) && (b[0] = j, b[1] = j);
  return b
}
Mh.prototype.$d = k;
function Oh(a) {
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
Lh = new Mh;
function Qh(a) {
  this.headers = new Rb;
  this.Sb = a || k
}
z(Qh, cd);
Qh.prototype.a = U("goog.net.XhrIo");
var Rh = /^https?$/i;
q = Qh.prototype;
q.Ka = m;
q.k = k;
q.vd = k;
q.fe = "";
q.Af = "";
q.jc = "";
q.Nd = m;
q.Wc = m;
q.ae = m;
q.jb = m;
q.rd = 0;
q.qb = k;
q.Wf = "";
q.vh = m;
q.send = function(a, b, c, d) {
  this.k && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.fe = a;
  this.jc = "";
  this.Af = b;
  this.Nd = m;
  this.Ka = j;
  this.k = this.Sb ? Nh(this.Sb) : Nh(Lh);
  this.vd = this.Sb ? this.Sb.Bc || (this.Sb.Bc = Ph(this.Sb)) : Lh.Bc || (Lh.Bc = Ph(Lh));
  this.k.onreadystatechange = w(this.Nf, this);
  try {
    S(this.a, Sh(this, "Opening Xhr")), this.ae = j, this.k.open(b, a, j), this.ae = m
  }catch(e) {
    S(this.a, Sh(this, "Error opening Xhr: " + e.message));
    Th(this, e);
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
  this.Wf && (this.k.responseType = this.Wf);
  "withCredentials" in this.k && (this.k.withCredentials = this.vh);
  try {
    this.qb && (ed.clearTimeout(this.qb), this.qb = k), 0 < this.rd && (S(this.a, Sh(this, "Will abort after " + this.rd + "ms if incomplete")), this.qb = ed.setTimeout(w(this.rh, this), this.rd)), S(this.a, Sh(this, "Sending request")), this.Wc = j, this.k.send(a), this.Wc = m
  }catch(h) {
    S(this.a, Sh(this, "Send error: " + h.message)), Th(this, h)
  }
};
q.rh = function() {
  "undefined" != typeof ba && this.k && (this.jc = "Timed out after " + this.rd + "ms, aborting", S(this.a, Sh(this, this.jc)), this.dispatchEvent("timeout"), this.abort(8))
};
function Th(a, b) {
  a.Ka = m;
  a.k && (a.jb = j, a.k.abort(), a.jb = m);
  a.jc = b;
  Uh(a);
  Vh(a)
}
function Uh(a) {
  a.Nd || (a.Nd = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
q.abort = function() {
  this.k && this.Ka && (S(this.a, Sh(this, "Aborting")), this.Ka = m, this.jb = j, this.k.abort(), this.jb = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Vh(this))
};
q.c = function() {
  this.k && (this.Ka && (this.Ka = m, this.jb = j, this.k.abort(), this.jb = m), Vh(this, j));
  Qh.f.c.call(this)
};
q.Nf = function() {
  !this.ae && !this.Wc && !this.jb ? this.Yg() : Wh(this)
};
q.Yg = function() {
  Wh(this)
};
function Wh(a) {
  if(a.Ka && "undefined" != typeof ba) {
    if(a.vd[1] && 4 == a.Pa() && 2 == Xh(a)) {
      S(a.a, Sh(a, "Local request error detected and ignored"))
    }else {
      if(a.Wc && 4 == a.Pa()) {
        ed.setTimeout(w(a.Nf, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.Pa()) {
          S(a.a, Sh(a, "Request complete"));
          a.Ka = m;
          var b = Xh(a), c;
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
              b = ("" + a.fe).match(Kf)[1] || k, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !Rh.test(b ? b.toLowerCase() : "")
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
            a.jc = d + " [" + Xh(a) + "]";
            Uh(a)
          }
          Vh(a)
        }
      }
    }
  }
}
function Vh(a, b) {
  if(a.k) {
    var c = a.k, d = a.vd[0] ? da : k;
    a.k = k;
    a.vd = k;
    a.qb && (ed.clearTimeout(a.qb), a.qb = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(e) {
      Oe(a.a, "Problem encountered resetting onreadystatechange: " + e.message)
    }
  }
}
q.ce = function() {
  return!!this.k
};
q.Pa = function() {
  return this.k ? this.k.readyState : 0
};
function Xh(a) {
  try {
    return 2 < a.Pa() ? a.k.status : -1
  }catch(b) {
    return R(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.k && 4 == this.Pa() ? this.k.getResponseHeader(a) : i
};
function Sh(a, b) {
  return b + " [" + a.Af + " " + a.fe + " " + Xh(a) + "]"
}
;var Yh = !(H || I && !J("420+"));
function Zh(a, b) {
  this.sd = a;
  this.qa = b
}
z(Zh, K);
q = Zh.prototype;
q.s = k;
q.Xa = -1;
q.nf = m;
q.tf = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function $h(a) {
  var b = rg(a.Ze), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.qa, c, b), 1 != b && a.g()) : a.g()
}
q.Og = function() {
  $h(this);
  if(!this.va) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.qa);
    this.g()
  }
};
q.dh = function() {
  var a = t.parent;
  if(a) {
    this.Xa = this.s.Pa();
    if(2 <= this.Xa && !this.nf) {
      for(var b = new Rb, c = this.tf.length;c--;) {
        var d = this.tf[c];
        try {
          b.set(d, this.s.k.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.ca() && (this.nf = j, a.__XHRMaster_ongotheaders(this.qa, Vb(b)), this.va)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.qa, this.Xa);
    Yh && 3 == this.Xa && $h(this)
  }else {
    this.g()
  }
};
q.je = function(a, b, c) {
  this.s = new Qh;
  M(this.s, "readystatechange", w(this.dh, this));
  M(this.s, "complete", w(this.Og, this));
  this.s.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.Ze = new qg(this.s.k, 1048576)
};
q.c = function() {
  Zh.f.c.call(this);
  delete this.Ze;
  this.s && this.s.g();
  delete this.sd.vc[this.qa];
  delete this.sd
};
function ai() {
  this.vc = {}
}
z(ai, K);
ai.prototype.Ug = function(a, b, c, d) {
  var e = new Zh(this, a);
  this.vc[a] = e;
  e.je(b, c, d)
};
ai.prototype.yg = function(a) {
  (a = this.vc[a]) && a.g()
};
ai.prototype.c = function() {
  ai.f.c.call(this);
  for(var a = Sa(this.vc);a.length;) {
    a.pop().g()
  }
  delete this.vc
};
var bi = new ai;
t.__XHRSlave_makeRequest = w(bi.Ug, bi);
t.__XHRSlave_dispose = w(bi.yg, bi);
var ci = U("cw.net.demo");
function di() {
}
di.prototype.kf = function() {
  return Boolean(Number((new Mf(document.location)).$.get("httpStreaming", "0"))) ? 2 : 1
};
function ei(a) {
  this.q = a
}
var fi = /\s*;\s*/;
q = ei.prototype;
q.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && I) {
    var b = "COOKIES_TEST_" + y();
    gi.set(b, "1");
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
  for(var c = a + "=", d = (this.q.cookie || "").split(fi), e = 0, g;g = d[e];e++) {
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
  return hi(this).keys
};
q.ea = function() {
  return hi(this).jg
};
q.Qa = function() {
  return!this.q.cookie
};
q.ca = function() {
  return!this.q.cookie ? 0 : (this.q.cookie || "").split(fi).length
};
q.ha = function(a) {
  return ga(this.get(a))
};
q.Fc = function(a) {
  for(var b = hi(this).jg, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return j
    }
  }
  return m
};
q.clear = function() {
  for(var a = hi(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b])
  }
};
function hi(a) {
  for(var a = (a.q.cookie || "").split(fi), b = [], c = [], d, e, g = 0;e = a[g];g++) {
    d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)))
  }
  return{keys:b, jg:c}
}
var gi = new ei(document);
gi.di = 3950;
function ii() {
  this.Tf = y()
}
var ji = new ii;
ii.prototype.set = aa("Tf");
ii.prototype.reset = function() {
  this.set(y())
};
ii.prototype.get = n("Tf");
function ki(a) {
  this.ah = a || "";
  this.jh = ji
}
ki.prototype.ag = j;
ki.prototype.hh = j;
ki.prototype.gh = j;
ki.prototype.bg = m;
function li(a) {
  return 10 > a ? "0" + a : "" + a
}
function mi(a, b) {
  var c = (a.dg - b) / 1E3, d = c.toFixed(3), e = 0;
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
function ni(a) {
  ki.call(this, a)
}
z(ni, ki);
ni.prototype.bg = j;
function oi(a) {
  this.bh = w(this.ng, this);
  this.hf = new ni;
  this.xf = this.hf.ag = m;
  this.e = a;
  this.Ag = this.e.ownerDocument || this.e.document;
  var a = Ed(this.e), b = k;
  if(H) {
    b = a.q.createStyleSheet(), ge(b)
  }else {
    var c = Hd(a.q, "head", i, i)[0];
    c || (b = Hd(a.q, "body", i, i)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    ge(b);
    a.appendChild(c, b)
  }
  this.e.className += " logdiv"
}
oi.prototype.ng = function(a) {
  var b = 100 >= this.e.scrollHeight - this.e.scrollTop - this.e.clientHeight, c = this.Ag.createElement("div");
  c.className = "logmsg";
  var d = this.hf, e;
  switch(a.Gb.value) {
    case Fe.value:
      e = "dbg-sh";
      break;
    case Ge.value:
      e = "dbg-sev";
      break;
    case He.value:
      e = "dbg-w";
      break;
    case Ie.value:
      e = "dbg-i";
      break;
    default:
      e = "dbg-f"
  }
  var g = [];
  g.push(d.ah, " ");
  if(d.ag) {
    var h = new Date(a.dg);
    g.push("[", li(h.getFullYear() - 2E3) + li(h.getMonth() + 1) + li(h.getDate()) + " " + li(h.getHours()) + ":" + li(h.getMinutes()) + ":" + li(h.getSeconds()) + "." + li(Math.floor(h.getMilliseconds() / 10)), "] ")
  }
  d.hh && g.push("[", Da(mi(a, d.jh.get())), "s] ");
  d.gh && g.push("[", xa(a.Tg), "] ");
  g.push('<span class="', e, '">', wa(Da(xa(a.If))));
  d.bg && a.Qd && g.push("<br>", wa(Da(a.Pd || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.e.appendChild(c);
  b && (this.e.scrollTop = this.e.scrollHeight)
};
oi.prototype.clear = function() {
  this.e.innerHTML = ""
};
function pi(a, b, c, d, e, g) {
  6 == arguments.length ? this.setTransform(a, b, c, d, e, g) : (0 != arguments.length && f(Error("Insufficient matrix parameters")), this.V = this.Y = 1, this.R = this.W = this.X = this.Z = 0)
}
q = pi.prototype;
q.B = function() {
  return new pi(this.V, this.R, this.W, this.Y, this.X, this.Z)
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
  var d = new pi, e = Math.cos(a), a = Math.sin(a), b = d.setTransform(e, a, -a, e, b - b * e + c * a, c - b * a - c * e), c = this.V, d = this.W;
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
q.fg = k;
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
Z.prototype.Gg = n("fill");
Z.prototype.Ig = n("Je");
function qi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
z(qi, Z);
function ri(a, b) {
  Y.call(this, a, b)
}
z(ri, Y);
function si(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
z(si, Z);
function ti(a, b) {
  Y.call(this, a, b)
}
z(ti, Y);
function ui(a, b) {
  Y.call(this, a, b)
}
z(ui, ri);
ui.prototype.clear = function() {
  Pd(this.b())
};
ui.prototype.fa = function(a, b) {
  vi(this.b(), {width:a, height:b})
};
function wi(a, b, c, d) {
  Z.call(this, a, b, c, d)
}
z(wi, si);
function xi(a, b) {
  Y.call(this, a, b)
}
z(xi, ti);
xi.prototype.fa = function(a, b) {
  vi(this.b(), {width:a, height:b})
};
function yi() {
}
;function zi(a, b) {
  this.Ed = a;
  this.lc = b || 1
}
z(zi, yi);
zi.prototype.ka = n("Ed");
function Ai(a, b) {
  this.sb = a;
  this.Ed = b
}
Ai.prototype.ka = n("Ed");
function Bi() {
  this.H = [];
  this.d = [];
  this.ta = []
}
Bi.prototype.wb = k;
Bi.prototype.ba = k;
Bi.prototype.Nb = j;
var Ci = [2, 2, 6, 6, 0];
q = Bi.prototype;
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
  var e = this.ba[0] - a * Math.cos(rf(c)) + a * Math.cos(rf(c + d)), g = this.ba[1] - b * Math.sin(rf(c)) + b * Math.sin(rf(c + d));
  this.H.push(3);
  this.d.push(1);
  this.ta.push(a, b, c, d, e, g);
  this.Nb = m;
  this.ba = [e, g];
  return this
};
q.pg = function(a, b, c, d) {
  for(var e = this.ba[0] - a * Math.cos(rf(c)), g = this.ba[1] - b * Math.sin(rf(c)), h = rf(d), d = Math.ceil(2 * (Math.abs(h) / Math.PI)), h = h / d, c = rf(c), l = 0;l < d;l++) {
    var o = Math.cos(c), r = Math.sin(c), A = 4 / 3 * Math.sin(h / 2) / (1 + Math.cos(h / 2)), s = e + (o - A * r) * a, x = g + (r + A * o) * b, c = c + h, o = Math.cos(c), r = Math.sin(c);
    this.Ye(s, x, e + (o + A * r) * a, g + (r - A * o) * b, e + o * a, g + r * b)
  }
  return this
};
function Di(a, b) {
  for(var c = a.ta, d = 0, e = 0, g = a.H.length;e < g;e++) {
    var h = a.H[e], l = Ci[h] * a.d[e];
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
var Ei = {};
Ei[0] = Bi.prototype.moveTo;
Ei[1] = Bi.prototype.lineTo;
Ei[4] = Bi.prototype.close;
Ei[2] = Bi.prototype.Ye;
Ei[3] = Bi.prototype.pg;
function Fi(a) {
  if(a.Nb) {
    return a.B()
  }
  var b = new Bi;
  Di(a, function(a, d) {
    Ei[a].apply(b, d)
  });
  return b
}
Bi.prototype.Qa = function() {
  return 0 == this.H.length
};
function Gi(a, b, c, d, e) {
  Q.call(this, e);
  this.width = a;
  this.height = b;
  this.na = c || k;
  this.Yb = d || k
}
z(Gi, Q);
q = Gi.prototype;
q.L = k;
q.La = 0;
q.bb = 0;
q.mf = function() {
  return this.da()
};
q.da = function() {
  return this.r ? ee(this.b()) : ka(this.width) && ka(this.height) ? new N(this.width, this.height) : k
};
function Hi(a) {
  var b = a.da();
  return b ? b.width / (a.na ? new N(a.na, a.Yb) : a.da()).width : 0
}
;function Ii(a, b, c, d, e) {
  Gi.call(this, a, b, c, d, e);
  this.af = {};
  this.Oe = I && !J(526);
  this.hb = new je(this)
}
var Ji;
z(Ii, Gi);
function Ki(a, b, c) {
  a = a.Q.q.createElementNS("http://www.w3.org/2000/svg", b);
  c && vi(a, c);
  return a
}
function vi(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
q = Ii.prototype;
q.ub = function(a, b) {
  (b || this.L).b().appendChild(a.b())
};
q.xe = function(a, b) {
  var c = a.b();
  b instanceof zi ? (c.setAttribute("fill", b.ka()), c.setAttribute("fill-opacity", b.lc)) : c.setAttribute("fill", "none")
};
q.ye = function(a, b) {
  var c = a.b();
  if(b) {
    c.setAttribute("stroke", b.ka());
    var d = b.sb;
    v(d) && -1 != d.indexOf("px") ? c.setAttribute("stroke-width", parseFloat(d) / Hi(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
q.i = function() {
  var a = Ki(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = Ki(this, "g");
  this.Ld = Ki(this, "defs");
  this.L = new ui(b, this);
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
  ce(this.b(), a, b)
};
q.da = function() {
  if(!oc) {
    return this.r ? ee(this.b()) : Ii.f.da.call(this)
  }
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.r && (c || d)) {
    return k
  }
  var e, g;
  c && (e = this.b().parentNode, g = ee(e), a = parseFloat(a) * g.width / 100);
  d && (e = e || this.b().parentNode, g = g || ee(e), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
q.clear = function() {
  this.L.clear();
  Pd(this.Ld);
  this.af = {}
};
q.Gc = function(a, b, c, d, e, g, h) {
  a = Ki(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  e = new wi(a, this, e, g);
  this.ub(e, h);
  return e
};
q.drawImage = function(a, b, c, d, e, g) {
  a = Ki(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", e);
  e = new xi(a, this);
  this.ub(e, g);
  return e
};
q.T = function() {
  var a = this.da();
  Ii.f.T.call(this);
  a || this.dispatchEvent("resize");
  if(this.Oe) {
    var a = this.width, b = this.height;
    "string" == typeof a && -1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%") && P(this.hb, Li(), fd, this.td);
    this.td()
  }
};
q.eb = function() {
  Ii.f.eb.call(this);
  this.Oe && le(this.hb, Li(), fd, this.td)
};
q.c = function() {
  delete this.af;
  delete this.Ld;
  delete this.L;
  Ii.f.c.call(this)
};
function Li() {
  Ji || (Ji = new dd(400), Ji.start());
  return Ji
}
;function Mi() {
  return this.e = this.ya.Q.b(this.U) || this.e
}
function Ni(a, b) {
  this.U = a.id;
  Y.call(this, a, b)
}
z(Ni, ri);
Ni.prototype.b = Mi;
Ni.prototype.clear = function() {
  Pd(this.b())
};
Ni.prototype.fa = function(a, b) {
  var c = this.b(), d = c.style;
  d.width = $(a) + "px";
  d.height = $(b) + "px";
  c.coordsize = $(a) + " " + $(b);
  this.ya.L != this && (c.coordorigin = "0 0")
};
function Oi(a, b, c, d, e, g, h, l) {
  this.U = a.id;
  Z.call(this, a, b, h, l)
}
z(Oi, si);
Oi.prototype.b = Mi;
function Pi(a, b) {
  this.U = a.id;
  Y.call(this, a, b)
}
z(Pi, ti);
Pi.prototype.b = Mi;
Pi.prototype.fa = function(a, b) {
  var c = this.b().style;
  c.width = Qi(a) + "px";
  c.height = Qi(b) + "px"
};
function Ri(a, b, c, d, e) {
  Gi.call(this, a, b, c, d, e);
  this.hb = new je(this)
}
z(Ri, Gi);
var Si = document.documentMode && 8 <= document.documentMode;
function Qi(a) {
  return Math.round(100 * (parseFloat(a.toString()) - 0.5))
}
function $(a) {
  return Math.round(100 * parseFloat(a.toString()))
}
function Ti(a, b) {
  var c = a.Q.createElement("g_vml_:" + b);
  c.id = "goog_" + Fa++;
  return c
}
function Ui(a) {
  Si && a.r && (a.b().innerHTML = a.b().innerHTML)
}
Ri.prototype.ub = function(a, b) {
  (b || this.L).b().appendChild(a.b());
  Ui(this)
};
Ri.prototype.xe = function(a, b) {
  var c = a.b();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var e = c.childNodes[d];
    "fill" == e.tagName && c.removeChild(e)
  }
  b instanceof zi ? "transparent" == b.ka() ? c.filled = m : 1 != b.lc ? (c.filled = j, d = Ti(this, "fill"), d.opacity = Math.round(100 * b.lc) + "%", d.color = b.ka(), c.appendChild(d)) : (c.filled = j, c.fillcolor = b.ka()) : c.filled = m;
  Ui(this)
};
Ri.prototype.ye = function(a, b) {
  var c = a.b();
  if(b) {
    c.stroked = j;
    var d = b.sb, d = v(d) && -1 == d.indexOf("px") ? parseFloat(d) : d * Hi(this), e = c.getElementsByTagName("stroke")[0];
    1 > d ? (e = e || Ti(this, "stroke"), e.opacity = d, e.Li = "1px", e.color = b.ka(), c.appendChild(e)) : (e && c.removeChild(e), c.strokecolor = b.ka(), c.strokeweight = d + "px")
  }else {
    c.stroked = m
  }
  Ui(this)
};
function Vi(a, b, c, d, e) {
  var g = a.style;
  g.position = "absolute";
  g.left = Qi(b) + "px";
  g.top = Qi(c) + "px";
  g.width = $(d) + "px";
  g.height = $(e) + "px";
  "shape" == a.tagName && (a.coordsize = $(d) + " " + $(e))
}
try {
  eval("document.namespaces")
}catch(Wi) {
}
q = Ri.prototype;
q.i = function() {
  var a = this.Q.q;
  a.namespaces.g_vml_ || (Si ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}");
  var a = this.width, b = this.height, c = this.Q.i("div", {style:"overflow:hidden;position:relative;width:" + (v(a) && sa(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (v(b) && sa(b) ? b : parseFloat(b.toString()) + "px")});
  this.e = c;
  var d = Ti(this, "group"), e = d.style;
  e.position = "absolute";
  e.left = e.top = 0;
  e.width = this.width;
  e.height = this.height;
  d.coordsize = this.na ? $(this.na) + " " + $(this.Yb) : $(a) + " " + $(b);
  d.coordorigin = ga(this.La) ? $(this.La) + " " + $(this.bb) : "0 0";
  c.appendChild(d);
  this.L = new Ni(d, this);
  M(c, "resize", w(this.Wd, this))
};
q.Wd = function() {
  var a = ee(this.b()), b = this.L.b().style;
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
  ce(this.b(), a, b)
};
q.da = function() {
  var a = this.b();
  return new N(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
q.clear = function() {
  this.L.clear()
};
q.Gc = function(a, b, c, d, e, g, h) {
  var l = Ti(this, "oval");
  Vi(l, a - c, b - d, 2 * c, 2 * d);
  a = new Oi(l, this, 0, 0, 0, 0, e, g);
  this.ub(a, h);
  return a
};
q.drawImage = function(a, b, c, d, e, g) {
  var h = Ti(this, "image");
  Vi(h, a, b, c, d);
  Si ? h.src = e : h.setAttribute("src", e);
  a = new Pi(h, this);
  this.ub(a, g);
  return a
};
q.T = function() {
  Ri.f.T.call(this);
  this.Wd();
  Ui(this)
};
q.c = function() {
  this.L = k;
  Ri.f.c.call(this)
};
function Xi(a) {
  Y.call(this, k, a);
  this.S = []
}
z(Xi, ri);
Xi.prototype.clear = function() {
  this.S.length && (this.S.length = 0, Yi(this.ya))
};
Xi.prototype.fa = function() {
};
Xi.prototype.appendChild = function(a) {
  this.S.push(a)
};
Xi.prototype.Da = function() {
  for(var a = 0, b = this.S.length;a < b;a++) {
    Zi(this.ya, this.S[a])
  }
};
function $i(a, b, c, d, e, g, h, l) {
  Z.call(this, a, b, h, l);
  this.ug = c;
  this.vg = d;
  this.Xf = e;
  this.Yf = g;
  this.A = new Bi;
  this.A.clear();
  this.A.moveTo(this.ug + this.Xf * Math.cos(rf(0)), this.vg + this.Yf * Math.sin(rf(0)));
  this.A.arcTo(this.Xf, this.Yf, 0, 360);
  this.A.close();
  this.Zg = new aj(k, b, this.A, h, l)
}
z($i, si);
$i.prototype.Da = function(a) {
  this.Zg.Da(a)
};
function aj(a, b, c, d, e) {
  Z.call(this, a, b, d, e);
  this.pb(c)
}
z(aj, qi);
aj.prototype.$b = m;
aj.prototype.pb = function(a) {
  this.A = a.Nb ? a : Fi(a);
  this.$b && Yi(this.ya)
};
aj.prototype.Da = function(a) {
  this.$b = j;
  a.beginPath();
  Di(this.A, function(b, c) {
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
function bj(a, b, c, d, e, g, h) {
  Y.call(this, a, b);
  this.yh = c;
  this.Ah = d;
  this.Pe = e;
  this.Vd = g;
  this.ih = h
}
z(bj, ti);
bj.prototype.$b = m;
bj.prototype.fa = function(a, b) {
  this.Pe = a;
  this.Vd = b;
  this.$b && Yi(this.ya)
};
bj.prototype.Da = function(a) {
  this.vf ? (this.Pe && this.Vd && a.drawImage(this.vf, this.yh, this.Ah, this.Pe, this.Vd), this.$b = j) : (a = new Image, a.onload = w(this.Kg, this, a), a.src = this.ih)
};
bj.prototype.Kg = function(a) {
  this.vf = a;
  Yi(this.ya)
};
function cj(a, b, c, d, e) {
  Gi.call(this, a, b, c, d, e)
}
z(cj, Gi);
q = cj.prototype;
q.xe = function() {
  Yi(this)
};
q.ye = function() {
  Yi(this)
};
function dj(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.fg ? b.fg.B() : new pi, e = d.X, g = d.Z;
  (e || g) && c.translate(e, g);
  (d = d.R) && c.rotate(Math.asin(d))
}
q.i = function() {
  var a = this.Q.i("div", {style:"position:relative;overflow:hidden"});
  this.e = a;
  this.Wb = this.Q.i("canvas");
  a.appendChild(this.Wb);
  this.Sg = this.L = new Xi(this);
  this.eh = 0;
  ej(this)
};
q.getContext = function() {
  this.b() || this.i();
  this.xb || (this.xb = this.Wb.getContext("2d"), this.xb.save());
  return this.xb
};
q.fa = function(a, b) {
  this.width = a;
  this.height = b;
  ej(this);
  Yi(this)
};
q.da = function() {
  var a = this.width, b = this.height, c = v(a) && -1 != a.indexOf("%"), d = v(b) && -1 != b.indexOf("%");
  if(!this.r && (c || d)) {
    return k
  }
  var e, g;
  c && (e = this.b().parentNode, g = ee(e), a = parseFloat(a) * g.width / 100);
  d && (e = e || this.b().parentNode, g = g || ee(e), b = parseFloat(b) * g.height / 100);
  return new N(a, b)
};
function ej(a) {
  ce(a.b(), a.width, a.height);
  var b = a.da();
  b && (ce(a.Wb, b.width, b.height), a.Wb.width = b.width, a.Wb.height = b.height, a.xb = k)
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
function Yi(a) {
  if(!a.Ii && a.r) {
    a.reset();
    if(a.na) {
      var b = a.da();
      a.getContext().scale(b.width / a.na, b.height / a.Yb)
    }
    (a.La || a.bb) && a.getContext().translate(-a.La, -a.bb);
    dj(a, a.L);
    a.L.Da(a.xb);
    a.getContext().restore()
  }
}
function Zi(a, b) {
  var c = a.getContext();
  dj(a, b);
  if(!b.Gg || !b.Ig) {
    b.Da(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof zi) {
        0 != d.lc && (c.globalAlpha = d.lc, c.fillStyle = d.ka(), b.Da(c), c.fill(), c.globalAlpha = 1)
      }else {
        var e = c.createLinearGradient(d.Di(), d.Fi(), d.Ei(), d.Gi());
        e.addColorStop(0, d.Bi());
        e.addColorStop(1, d.Ci());
        c.fillStyle = e;
        b.Da(c);
        c.fill()
      }
    }
    if(d = b.Je) {
      b.Da(c), c.strokeStyle = d.ka(), d = d.sb, v(d) && -1 != d.indexOf("px") && (d = parseFloat(d) / Hi(a)), c.lineWidth = d, c.stroke()
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
  this.r && !this.eh && !(b != this.L && b != this.Sg) && Zi(this, a)
};
q.Gc = function(a, b, c, d, e, g, h) {
  a = new $i(k, this, a, b, c, d, e, g);
  this.append(a, h);
  return a
};
q.drawImage = function(a, b, c, d, e, g) {
  a = new bj(k, this, a, b, c, d, e);
  this.append(a, g);
  return a
};
q.c = function() {
  this.xb = k;
  cj.f.c.call(this)
};
q.T = function() {
  var a = this.da();
  cj.f.T.call(this);
  a || (ej(this), this.dispatchEvent("resize"));
  Yi(this)
};
function fj(a) {
  this.D = [];
  gj(this, a)
}
z(fj, cd);
q = fj.prototype;
q.Za = k;
q.ve = k;
function gj(a, b) {
  b && (E(b, function(a) {
    this.sc(a, m)
  }, a), eb(a.D, b))
}
q.Ud = n("Za");
q.lf = function() {
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
  fj.f.c.call(this);
  delete this.D;
  this.Za = k
};
q.sc = function(a, b) {
  a && ("function" == typeof this.ve ? this.ve(a, b) : "function" == typeof a.Ae && a.Ae(b))
};
function hj() {
}
z(hj, Zg);
ea(hj);
var ij = 0;
hj.prototype.i = function(a) {
  var b = bh(this, a);
  return a.Ha().i("div", b ? b.join(" ") : k, jj(this, a.ia, a.mf(), a.Ha()))
};
function jj(a, b, c, d) {
  for(var e = [], g = 0, h = 0;g < c.height;g++) {
    for(var l = [], o = 0;o < c.width;o++) {
      var r = b && b[h++];
      l.push(kj(a, r, d))
    }
    e.push(d.i("tr", a.w() + "-row", l))
  }
  return a.Xe(e, d)
}
hj.prototype.Xe = function(a, b) {
  var c = b.i("table", this.w() + "-table", b.i("tbody", this.w() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Yg(c, "grid");
  return c
};
function kj(a, b, c) {
  a = c.i("td", {"class":a.w() + "-cell", id:a.w() + "-cell-" + ij++}, b);
  Yg(a, "gridcell");
  return a
}
hj.prototype.jd = function(a, b) {
  if(a) {
    var c = Hd(document, "tbody", this.w() + "-body", a)[0];
    if(c) {
      var d = 0;
      E(c.rows, function(a) {
        E(a.cells, function(a) {
          Pd(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var e = [], g = Ed(a), h = c.rows[0].cells.length;d < b.length;) {
          var l = b[d++];
          e.push(kj(this, l, g));
          e.length == h && (l = g.i("tr", this.w() + "-row", e), c.appendChild(l), e.length = 0)
        }
        if(0 < e.length) {
          for(;e.length < h;) {
            e.push(kj(this, "", g))
          }
          l = g.i("tr", this.w() + "-row", e);
          c.appendChild(l)
        }
      }
    }
    ie(a, j, oc)
  }
};
function lj(a, b, c) {
  for(b = b.b();c && 1 == c.nodeType && c != b;) {
    if("TD" == c.tagName && $a(zd(c), a.w() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function mj(a, b, c, d) {
  c && (c = c.parentNode, a = a.w() + "-cell-hover", d ? Ad(c, a) : Bd(c, a), b.b().firstChild.setAttribute("aria-activedescendent", c.id))
}
hj.prototype.w = p("goog-palette");
function nj(a, b, c) {
  W.call(this, a, b || hj.Oa(), c)
}
z(nj, W);
q = nj.prototype;
q.o = k;
q.ib = -1;
q.N = k;
q.c = function() {
  nj.f.c.call(this);
  this.N && (this.N.g(), this.N = k);
  this.o = k
};
q.kd = function(a) {
  nj.f.kd.call(this, a);
  oj(this);
  this.N ? (this.N.clear(), gj(this.N, a)) : (this.N = new fj(a), this.N.ve = w(this.sc, this), P(qe(this), this.N, "select", this.Ng));
  this.ib = -1
};
q.jf = p(k);
q.Tc = function(a) {
  nj.f.Tc.call(this, a);
  var b = lj(this.l, this, a.target);
  if((!b || !a.relatedTarget || !Rd(b, a.relatedTarget)) && b != pj(this)) {
    a = this.ia, rj(this, a ? Wa(a, b) : -1)
  }
};
q.Sc = function(a) {
  nj.f.Sc.call(this, a);
  var b = lj(this.l, this, a.target);
  (!b || !a.relatedTarget || !Rd(b, a.relatedTarget)) && b == pj(this) && mj(this.l, this, b, m)
};
q.Rc = function(a) {
  nj.f.Rc.call(this, a);
  if(this.ce() && (a = lj(this.l, this, a.target), a != pj(this))) {
    var b = this.ia;
    rj(this, b ? Wa(b, a) : -1)
  }
};
q.lb = function() {
  var a = pj(this);
  return a ? (this.nd(a), this.dispatchEvent("action")) : m
};
q.rf = function(a) {
  var b = this.ia, b = b ? b.length : 0, c = this.o.width;
  if(0 == b || !this.isEnabled()) {
    return m
  }
  if(13 == a.keyCode || 32 == a.keyCode) {
    return this.lb(a)
  }
  if(36 == a.keyCode) {
    return rj(this, 0), j
  }
  if(35 == a.keyCode) {
    return rj(this, b - 1), j
  }
  var d = 0 > this.ib ? this.Td() : this.ib;
  switch(a.keyCode) {
    case 37:
      -1 == d && (d = b);
      if(0 < d) {
        return rj(this, d - 1), a.preventDefault(), j
      }
      break;
    case 39:
      if(d < b - 1) {
        return rj(this, d + 1), a.preventDefault(), j
      }
      break;
    case 38:
      -1 == d && (d = b + c - 1);
      if(d >= c) {
        return rj(this, d - c), a.preventDefault(), j
      }
      break;
    case 40:
      if(-1 == d && (d = -c), d < b - c) {
        return rj(this, d + c), a.preventDefault(), j
      }
  }
  return m
};
q.Ng = function() {
};
q.mf = n("o");
q.fa = function(a, b) {
  this.b() && f(Error("Component already rendered"));
  this.o = ka(a) ? new N(a, b) : a;
  oj(this)
};
function pj(a) {
  var b = a.ia;
  return b && b[a.ib]
}
function rj(a, b) {
  b != a.ib && (sj(a, a.ib, m), a.ib = b, sj(a, b, j))
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
function sj(a, b, c) {
  if(a.b()) {
    var d = a.ia;
    d && 0 <= b && b < d.length && mj(a.l, a, d[b], c)
  }
}
q.sc = function(a, b) {
  if(this.b() && a) {
    var c = a.parentNode, d = this.l.w() + "-cell-selected";
    b ? Ad(c, d) : Bd(c, d)
  }
};
function oj(a) {
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
;function tj(a, b, c) {
  this.Dc = a || [];
  nj.call(this, k, b || hj.Oa(), c);
  this.Dc = this.Dc;
  this.bd = k;
  this.jd(uj(this))
}
z(tj, nj);
tj.prototype.bd = k;
function vj(a) {
  var b = wj(xj);
  a.bd || (a.bd = Xa(a.Dc, function(a) {
    return wj(a)
  }));
  a.Be(b ? Wa(a.bd, b) : -1)
}
function uj(a) {
  return Xa(a.Dc, function(a) {
    var c = this.Ha().i("div", {"class":this.l.w() + "-colorswatch", style:"background-color:" + a});
    c.title = "#" == a.charAt(0) ? "RGB (" + Ih(a).join(", ") + ")" : a;
    return c
  }, a)
}
function wj(a) {
  if(a) {
    try {
      return Ch(a).Vc
    }catch(b) {
    }
  }
  return k
}
;var yj = U("whiteboard.logger");
window.onerror = function(a, b, c) {
  Oe(yj, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function zj() {
  this.re = new Cb
}
zj.prototype.nh = function(a, b) {
  yj.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  Aj = k
};
zj.prototype.oh = function(a) {
  var a = Eb(a), b = a[0], c = a[1];
  1 == b ? (c = this.re.Md(yb.ec(), c), a = nb(c, 1), b = nb(c, 2), c = c.ka(), tb.Gc(a, b, 5, 5, new Ai(1, "black"), new zi(c), i)) : 2 == b ? (tb.g(), Bj()) : R(yj, "Strange message from server: " + G(a))
};
zj.prototype.reset = function(a) {
  yj.info("resetting with reason: " + a);
  this.I.reset(a)
};
var Aj = k, Cj = new vd(t.window);
function Dj() {
  Aj && (Aj.reset("idle timeout fired"), Aj = k)
}
var Ej = k;
function Fj() {
  Ej != k && Cj.P.clearTimeout(Ej);
  Aj && (Ej = Cj.P.setTimeout(Dj, 2592E5))
}
M(window, ["click", "focus", "keydown", "keypress"], Fj, j);
function Gj() {
  tb.g();
  Bj();
  var a = Aj;
  yj.info("Telling server to clear the board.");
  Kg(a.I, [Fb([2, a.re.uc(new zb)])])
}
function Hj(a) {
  var b = new Mc(a), a = b.offsetX, c = b.offsetY;
  tb.Gc(a, c, 5, 5, new Ai(1, "black"), new zi(ub), i);
  var d = Aj, e = ub;
  yj.info("Telling server about circle at: " + a + ", " + c + " with color " + e);
  var b = d.I, g = new yb;
  ob(g, 1, a);
  ob(g, 2, c);
  ob(g, 3, e);
  a = d.re.uc(g);
  Kg(b, [Fb([1, a])])
}
function Bj() {
  var a;
  a = H && !J("9") ? new Ri(800, 600, i, i, i) : I && (!J("420") || pc) ? new cj(800, 600, i, i, i) : new Ii(800, 600, i, i, i);
  a.i();
  vb = O("drawArea");
  re(a, vb);
  tb = a
}
var xj = "#E06666";
function Ij(a) {
  var b;
  (a = a.target.Ud()) ? (a = a.style[Ha("background-color")] || "", b = wj(a)) : b = k;
  b || (b = xj);
  ub = b;
  gi.set("whiteboard_defaultColor", b);
  a = O("whiteboard-cp-value");
  v("background-color") ? ae(a, b, "background-color") : Ra("background-color", ra(ae, a));
  a = O("whiteboard-cp-value");
  a.title = b;
  b = Ch(b).Vc;
  Sd(a, b);
  b = Ih(b);
  var c, d = [255, 255, 255];
  c = Math.min(Math.max(0.45, 0), 1);
  b = [Math.round(c * d[0] + (1 - c) * b[0]), Math.round(c * d[1] + (1 - c) * b[1]), Math.round(c * d[2] + (1 - c) * b[2])];
  b = Gh(b[0], b[1], b[2]);
  v("color") ? ae(a, b, "color") : Ra("color", ra(ae, a))
}
function Jj() {
  wb = (new Mf(document.location)).$;
  if(xb = Boolean(Number(wb.get("logging", "0")))) {
    Se().md(Me);
    var a = new oi(document.getElementById("log"));
    if(j != a.xf) {
      var b = Se(), c = a.bh;
      b.hc || (b.hc = []);
      b.hc.push(c);
      a.xf = j
    }
  }else {
    Se().md(Ee)
  }
  yj.info("Logger works.");
  (a = gi.get("whiteboard_defaultColor")) && (xj = a);
  ub = xj;
  b = O("whiteboard-controls-left");
  a = O("whiteboard-controls-right");
  c = Kd("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  Od(b, c);
  c = Kd("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  Od(b, c);
  b = new tj("#EA9999,#F9CB9C,#FFE599,#B6D7A8,#A2C4C9,#9FC5E8,#B4A7D6,#D5A6BD,#E06666,#F6B26B,#FFD966,#93C47D,#76A5AF,#6FA8DC,#8E7CC3,#C27BA0,#CC0000,#E69138,#F1C232,#6AA84F,#45818E,#3D85C6,#674EA7,#A64D79".split(","));
  b.fa(8);
  re(b, O("whiteboard-cp"));
  M(b, "action", Ij);
  vj(b);
  Ij({target:b});
  b = new Ah("Clear board");
  ph(b, "clear-board-button");
  re(b, a);
  M(b, "action", Gj);
  a = O("drawAreaOverlay");
  ie(a, j);
  M(a, "click", Hj, m);
  Bj();
  a = new di;
  Aj = new zj;
  Fj();
  c = (new Mf(document.location)).$;
  b = "http" != c.get("mode");
  if((c = Boolean(Number(c.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    R(ci, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), c = m
  }
  var d = c, c = new Mf(document.location);
  b ? b = new xg("/_minerva/", c.oa, t.__demo_mainSocketPort) : (d ? (b = t.__demo_shared_domain, v(b) || f(Error("domain was " + G(b) + "; expected a string.")), c = c.B(), Pf(c, "_____random_____." + b)) : c = c.B(), c.pb("/_minerva/"), Rf(c, "", i), b = new zg(c.toString().replace("_____random_____", "%random%")));
  a = new Eg(b, a, Cj);
  b = Aj;
  a.qe = w(b.oh, b);
  a.onreset = w(b.nh, b);
  Aj.I = a;
  Kg(Aj.I, ["subprotocol:whiteboard"]);
  a.start()
}
var Kj = "__whiteboard_init".split("."), Lj = t;
!(Kj[0] in Lj) && Lj.execScript && Lj.execScript("var " + Kj[0]);
for(var Mj;Kj.length && (Mj = Kj.shift());) {
  !Kj.length && ga(Jj) ? Lj[Mj] = Jj : Lj = Lj[Mj] ? Lj[Mj] : Lj[Mj] = {}
}
;})();
