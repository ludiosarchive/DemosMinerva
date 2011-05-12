(function() {
function e(a) {
  throw a;
}
var i = void 0, k = null;
function aa() {
  return function() {
  }
}
function ba(a) {
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
var o, ca = ca || {}, q = this;
function da(a) {
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
function ea(a) {
  a.Ma = function() {
    return a.Jg || (a.Jg = new a)
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
function t(a) {
  return fa(a) == "array"
}
function ha(a) {
  var b = fa(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function ia(a) {
  return ja(a) && typeof a.getFullYear == "function"
}
function u(a) {
  return typeof a == "string"
}
function ka(a) {
  return typeof a == "number"
}
function w(a) {
  return fa(a) == "function"
}
function ja(a) {
  a = fa(a);
  return a == "object" || a == "array" || a == "function"
}
function x(a) {
  return a[la] || (a[la] = ++ma)
}
var la = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), ma = 0;
function na(a) {
  return a.call.apply(a.bind, arguments)
}
function oa(a, b) {
  var c = b || q;
  if(arguments.length > 2) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var b = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(b, d);
      return a.apply(c, b)
    }
  }else {
    return function() {
      return a.apply(c, arguments)
    }
  }
}
function y() {
  y = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? na : oa;
  return y.apply(k, arguments)
}
function pa(a) {
  var b = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = Array.prototype.slice.call(arguments);
    c.unshift.apply(c, b);
    return a.apply(this, c)
  }
}
var A = Date.now || function() {
  return+new Date
};
function C(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.c = b.prototype;
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
function sa(a) {
  for(var b = 1;b < arguments.length;b++) {
    var c = String(arguments[b]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, c)
  }
  return a
}
var ta = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function ua(a) {
  a = String(a);
  if(!ta.test(a)) {
    return encodeURIComponent(a)
  }
  return a
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
  for(var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(d.length, f.length), h = 0;c == 0 && h < g;h++) {
    var j = d[h] || "", n = f[h] || "", p = RegExp("(\\d*)(\\D*)", "g"), z = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = p.exec(j) || ["", "", ""], v = z.exec(n) || ["", "", ""];
      if(r[0].length == 0 && v[0].length == 0) {
        break
      }
      c = Ea(r[1].length == 0 ? 0 : parseInt(r[1], 10), v[1].length == 0 ? 0 : parseInt(v[1], 10)) || Ea(r[2].length == 0, v[2].length == 0) || Ea(r[2], v[2])
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
;var Ia = {aliceblue:"#f0f8ff", antiquewhite:"#faebd7", aqua:"#00ffff", aquamarine:"#7fffd4", azure:"#f0ffff", beige:"#f5f5dc", bisque:"#ffe4c4", black:"#000000", blanchedalmond:"#ffebcd", blue:"#0000ff", blueviolet:"#8a2be2", brown:"#a52a2a", burlywood:"#deb887", cadetblue:"#5f9ea0", chartreuse:"#7fff00", chocolate:"#d2691e", coral:"#ff7f50", cornflowerblue:"#6495ed", cornsilk:"#fff8dc", crimson:"#dc143c", cyan:"#00ffff", darkblue:"#00008b", darkcyan:"#008b8b", darkgoldenrod:"#b8860b", darkgray:"#a9a9a9", 
darkgreen:"#006400", darkgrey:"#a9a9a9", darkkhaki:"#bdb76b", darkmagenta:"#8b008b", darkolivegreen:"#556b2f", darkorange:"#ff8c00", darkorchid:"#9932cc", darkred:"#8b0000", darksalmon:"#e9967a", darkseagreen:"#8fbc8f", darkslateblue:"#483d8b", darkslategray:"#2f4f4f", darkslategrey:"#2f4f4f", darkturquoise:"#00ced1", darkviolet:"#9400d3", deeppink:"#ff1493", deepskyblue:"#00bfff", dimgray:"#696969", dimgrey:"#696969", dodgerblue:"#1e90ff", firebrick:"#b22222", floralwhite:"#fffaf0", forestgreen:"#228b22", 
fuchsia:"#ff00ff", gainsboro:"#dcdcdc", ghostwhite:"#f8f8ff", gold:"#ffd700", goldenrod:"#daa520", gray:"#808080", green:"#008000", greenyellow:"#adff2f", grey:"#808080", honeydew:"#f0fff0", hotpink:"#ff69b4", indianred:"#cd5c5c", indigo:"#4b0082", ivory:"#fffff0", khaki:"#f0e68c", lavender:"#e6e6fa", lavenderblush:"#fff0f5", lawngreen:"#7cfc00", lemonchiffon:"#fffacd", lightblue:"#add8e6", lightcoral:"#f08080", lightcyan:"#e0ffff", lightgoldenrodyellow:"#fafad2", lightgray:"#d3d3d3", lightgreen:"#90ee90", 
lightgrey:"#d3d3d3", lightpink:"#ffb6c1", lightsalmon:"#ffa07a", lightseagreen:"#20b2aa", lightskyblue:"#87cefa", lightslategray:"#778899", lightslategrey:"#778899", lightsteelblue:"#b0c4de", lightyellow:"#ffffe0", lime:"#00ff00", limegreen:"#32cd32", linen:"#faf0e6", magenta:"#ff00ff", maroon:"#800000", mediumaquamarine:"#66cdaa", mediumblue:"#0000cd", mediumorchid:"#ba55d3", mediumpurple:"#9370d8", mediumseagreen:"#3cb371", mediumslateblue:"#7b68ee", mediumspringgreen:"#00fa9a", mediumturquoise:"#48d1cc", 
mediumvioletred:"#c71585", midnightblue:"#191970", mintcream:"#f5fffa", mistyrose:"#ffe4e1", moccasin:"#ffe4b5", navajowhite:"#ffdead", navy:"#000080", oldlace:"#fdf5e6", olive:"#808000", olivedrab:"#6b8e23", orange:"#ffa500", orangered:"#ff4500", orchid:"#da70d6", palegoldenrod:"#eee8aa", palegreen:"#98fb98", paleturquoise:"#afeeee", palevioletred:"#d87093", papayawhip:"#ffefd5", peachpuff:"#ffdab9", peru:"#cd853f", pink:"#ffc0cb", plum:"#dda0dd", powderblue:"#b0e0e6", purple:"#800080", red:"#ff0000", 
rosybrown:"#bc8f8f", royalblue:"#4169e1", saddlebrown:"#8b4513", salmon:"#fa8072", sandybrown:"#f4a460", seagreen:"#2e8b57", seashell:"#fff5ee", sienna:"#a0522d", silver:"#c0c0c0", skyblue:"#87ceeb", slateblue:"#6a5acd", slategray:"#708090", slategrey:"#708090", snow:"#fffafa", springgreen:"#00ff7f", steelblue:"#4682b4", tan:"#d2b48c", teal:"#008080", thistle:"#d8bfd8", tomato:"#ff6347", turquoise:"#40e0d0", violet:"#ee82ee", wheat:"#f5deb3", white:"#ffffff", whitesmoke:"#f5f5f5", yellow:"#ffff00", 
yellowgreen:"#9acd32"};
var D = Array.prototype, Ja = D.indexOf ? function(a, b, c) {
  return D.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(u(a)) {
    if(!u(b) || b.length != 1) {
      return-1
    }
    return a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Ka = D.forEach ? function(a, b, c) {
  D.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
}, La = D.map ? function(a, b, c) {
  return D.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = u(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (f[h] = b.call(c, g[h], h, a))
  }
  return f
}, Ma = D.some ? function(a, b, c) {
  return D.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return!0
    }
  }
  return!1
}, Na = D.every ? function(a, b, c) {
  return D.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && !b.call(c, f[g], g, a)) {
      return!1
    }
  }
  return!0
};
function Oa(a, b) {
  return Ja(a, b) >= 0
}
function Pa(a) {
  if(!t(a)) {
    for(var b = a.length - 1;b >= 0;b--) {
      delete a[b]
    }
  }
  a.length = 0
}
function Qa(a, b) {
  var c = Ja(a, b);
  c >= 0 && D.splice.call(a, c, 1)
}
function Ra() {
  return D.concat.apply(D, arguments)
}
function Sa(a) {
  if(t(a)) {
    return Ra(a)
  }else {
    for(var b = [], c = 0, d = a.length;c < d;c++) {
      b[c] = a[c]
    }
    return b
  }
}
function Ta(a) {
  for(var b = 1;b < arguments.length;b++) {
    var c = arguments[b], d;
    if(t(c) || (d = ha(c)) && c.hasOwnProperty("callee")) {
      a.push.apply(a, c)
    }else {
      if(d) {
        for(var f = a.length, g = c.length, h = 0;h < g;h++) {
          a[f + h] = c[h]
        }
      }else {
        a.push(c)
      }
    }
  }
}
function Ua(a) {
  D.splice.apply(a, Va(arguments, 1))
}
function Va(a, b, c) {
  return arguments.length <= 2 ? D.slice.call(a, b) : D.slice.call(a, b, c)
}
function Wa(a, b) {
  D.sort.call(a, b || Xa)
}
function Xa(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function Ya(a) {
  return a * Math.PI / 180
}
;function Za(a) {
  var b = {}, a = String(a), c = a.charAt(0) == "#" ? a : "#" + a;
  if($a.test(c)) {
    return b.Tc = ab(c), b.type = "hex", b
  }else {
    a: {
      var d = a.match(bb);
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
      return b.Tc = cb(c[0], c[1], c[2]), b.type = "rgb", b
    }else {
      if(Ia && (c = Ia[a.toLowerCase()])) {
        return b.Tc = c, b.type = "named", b
      }
    }
  }
  e(Error(a + " is not a valid color string"))
}
var db = /#(.)(.)(.)/;
function ab(a) {
  $a.test(a) || e(Error("'" + a + "' is not a valid hex color"));
  a.length == 4 && (a = a.replace(db, "#$1$1$2$2$3$3"));
  return a.toLowerCase()
}
function eb(a) {
  a = ab(a);
  return[parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}
function cb(a, b, c) {
  a = Number(a);
  b = Number(b);
  c = Number(c);
  (isNaN(a) || a < 0 || a > 255 || isNaN(b) || b < 0 || b > 255 || isNaN(c) || c < 0 || c > 255) && e(Error('"(' + a + "," + b + "," + c + '") is not a valid RGB color'));
  a = fb(a.toString(16));
  b = fb(b.toString(16));
  c = fb(c.toString(16));
  return"#" + a + b + c
}
var $a = /^#(?:[0-9a-f]{3}){1,2}$/i, bb = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function fb(a) {
  return a.length == 1 ? "0" + a : a
}
function gb(a) {
  var b, c = [255, 255, 255];
  b = Math.min(Math.max(0.45, 0), 1);
  return[Math.round(b * c[0] + (1 - b) * a[0]), Math.round(b * c[1] + (1 - b) * a[1]), Math.round(b * c[2] + (1 - b) * a[2])]
}
;function hb() {
  this.Of = A()
}
var ib = new hb;
hb.prototype.set = ba("Of");
hb.prototype.reset = function() {
  this.set(A())
};
hb.prototype.get = l("Of");
function jb(a) {
  this.Xg = a || "";
  this.gh = ib
}
jb.prototype.Xf = !0;
jb.prototype.eh = !0;
jb.prototype.dh = !0;
jb.prototype.Yf = !1;
function kb(a) {
  if(a < 10) {
    return"0" + a
  }
  return String(a)
}
function lb(a, b) {
  var c = (a.ag - b) / 1E3, d = c.toFixed(3), f = 0;
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
function mb(a) {
  jb.call(this, a)
}
C(mb, jb);
mb.prototype.Yf = !0;
function nb(a, b) {
  for(var c in a) {
    b.call(i, a[c], c, a)
  }
}
function ob(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function pb(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var qb = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
function rb(a) {
  for(var b, c, d = 1;d < arguments.length;d++) {
    c = arguments[d];
    for(b in c) {
      a[b] = c[b]
    }
    for(var f = 0;f < qb.length;f++) {
      b = qb[f], Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
    }
  }
}
function sb() {
  var a = arguments.length;
  if(a == 1 && t(arguments[0])) {
    return sb.apply(k, arguments[0])
  }
  a % 2 && e(Error("Uneven number of arguments"));
  for(var b = {}, c = 0;c < a;c += 2) {
    b[arguments[c]] = arguments[c + 1]
  }
  return b
}
;function tb(a) {
  if(typeof a.T == "function") {
    return a.T()
  }
  if(ha(a) || u(a)) {
    return a.length
  }
  var b = 0, c;
  for(c in a) {
    b++
  }
  return b
}
function ub(a) {
  if(typeof a.V == "function") {
    return a.V()
  }
  if(u(a)) {
    return a.split("")
  }
  if(ha(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return ob(a)
}
function vb(a) {
  if(typeof a.Ea == "function") {
    return a.Ea()
  }
  if(typeof a.V != "function") {
    if(ha(a) || u(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return pb(a)
  }
}
function wb(a, b) {
  if(typeof a.contains == "function") {
    return a.contains(b)
  }
  if(typeof a.Dc == "function") {
    return a.Dc(b)
  }
  if(ha(a) || u(a)) {
    return Oa(a, b)
  }
  var c;
  a: {
    for(c in a) {
      if(a[c] == b) {
        c = !0;
        break a
      }
    }
    c = !1
  }
  return c
}
function xb(a, b, c) {
  if(typeof a.forEach == "function") {
    a.forEach(b, c)
  }else {
    if(ha(a) || u(a)) {
      Ka(a, b, c)
    }else {
      for(var d = vb(a), f = ub(a), g = f.length, h = 0;h < g;h++) {
        b.call(c, f[h], d && d[h], a)
      }
    }
  }
}
function yb(a, b) {
  if(typeof a.every == "function") {
    return a.every(b, i)
  }
  if(ha(a) || u(a)) {
    return Na(a, b, i)
  }
  for(var c = vb(a), d = ub(a), f = d.length, g = 0;g < f;g++) {
    if(!b.call(i, d[g], c && c[g], a)) {
      return!1
    }
  }
  return!0
}
;function zb(a) {
  this.p = {};
  this.h = [];
  var b = arguments.length;
  if(b > 1) {
    b % 2 && e(Error("Uneven number of arguments"));
    for(var c = 0;c < b;c += 2) {
      this.set(arguments[c], arguments[c + 1])
    }
  }else {
    a && this.yd(a)
  }
}
o = zb.prototype;
o.f = 0;
o.Ke = 0;
o.T = l("f");
o.V = function() {
  Ab(this);
  for(var a = [], b = 0;b < this.h.length;b++) {
    a.push(this.p[this.h[b]])
  }
  return a
};
o.Ea = function() {
  Ab(this);
  return this.h.concat()
};
o.aa = function(a) {
  return Bb(this.p, a)
};
o.Dc = function(a) {
  for(var b = 0;b < this.h.length;b++) {
    var c = this.h[b];
    if(Bb(this.p, c) && this.p[c] == a) {
      return!0
    }
  }
  return!1
};
o.n = function(a, b) {
  if(this === a) {
    return!0
  }
  if(this.f != a.T()) {
    return!1
  }
  var c = b || Cb;
  Ab(this);
  for(var d, f = 0;d = this.h[f];f++) {
    if(!c(this.get(d), a.get(d))) {
      return!1
    }
  }
  return!0
};
function Cb(a, b) {
  return a === b
}
o.Oa = function() {
  return this.f == 0
};
o.clear = function() {
  this.p = {};
  this.Ke = this.f = this.h.length = 0
};
o.remove = function(a) {
  if(Bb(this.p, a)) {
    return delete this.p[a], this.f--, this.Ke++, this.h.length > 2 * this.f && Ab(this), !0
  }
  return!1
};
function Ab(a) {
  if(a.f != a.h.length) {
    for(var b = 0, c = 0;b < a.h.length;) {
      var d = a.h[b];
      Bb(a.p, d) && (a.h[c++] = d);
      b++
    }
    a.h.length = c
  }
  if(a.f != a.h.length) {
    for(var f = {}, c = b = 0;b < a.h.length;) {
      d = a.h[b], Bb(f, d) || (a.h[c++] = d, f[d] = 1), b++
    }
    a.h.length = c
  }
}
o.get = function(a, b) {
  if(Bb(this.p, a)) {
    return this.p[a]
  }
  return b
};
o.set = function(a, b) {
  Bb(this.p, a) || (this.f++, this.h.push(a), this.Ke++);
  this.p[a] = b
};
o.yd = function(a) {
  var b;
  a instanceof zb ? (b = a.Ea(), a = a.V()) : (b = pb(a), a = ob(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
o.J = function() {
  return new zb(this)
};
function Db(a) {
  Ab(a);
  for(var b = {}, c = 0;c < a.h.length;c++) {
    var d = a.h[c];
    b[d] = a.p[d]
  }
  return b
}
function Bb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function Eb(a) {
  this.p = new zb;
  a && this.yd(a)
}
function Fb(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + x(a) : b.substr(0, 1) + a
}
o = Eb.prototype;
o.T = function() {
  return this.p.T()
};
o.add = function(a) {
  this.p.set(Fb(a), a)
};
o.yd = function(a) {
  for(var a = ub(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
o.qe = function(a) {
  for(var a = ub(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
o.remove = function(a) {
  return this.p.remove(Fb(a))
};
o.clear = function() {
  this.p.clear()
};
o.Oa = function() {
  return this.p.Oa()
};
o.contains = function(a) {
  return this.p.aa(Fb(a))
};
o.V = function() {
  return this.p.V()
};
o.J = function() {
  return new Eb(this)
};
o.n = function(a) {
  return this.T() == tb(a) && Gb(this, a)
};
function Gb(a, b) {
  var c = tb(b);
  if(a.T() > c) {
    return!1
  }
  !(b instanceof Eb) && c > 5 && (b = new Eb(b));
  return yb(a, function(a) {
    return wb(b, a)
  })
}
;function Hb(a) {
  return Ib(a || arguments.callee.caller, [])
}
function Ib(a, b) {
  var c = [];
  if(Oa(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(Jb(a) + "(");
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
            g = (g = Jb(g)) ? g : "[fn]";
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
        c.push(Ib(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Jb(a) {
  a = String(a);
  if(!Kb[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Kb[a] = b ? b[1] : "[Anonymous]"
  }
  return Kb[a]
}
var Kb = {};
function Lb(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
Lb.prototype.bh = 0;
Lb.prototype.Pd = k;
Lb.prototype.Od = k;
var Mb = 0;
Lb.prototype.reset = function(a, b, c, d, f) {
  this.bh = typeof f == "number" ? f : Mb++;
  this.ag = d || A();
  this.Db = a;
  this.Cf = b;
  this.Ng = c;
  delete this.Pd;
  delete this.Od
};
Lb.prototype.md = ba("Db");
function Nb(a) {
  this.je = a
}
Nb.prototype.Z = k;
Nb.prototype.Db = k;
Nb.prototype.M = k;
Nb.prototype.cc = k;
function Ob(a, b) {
  this.name = a;
  this.value = b
}
Ob.prototype.toString = l("name");
var Pb = new Ob("OFF", Infinity), Qb = new Ob("SHOUT", 1200), Rb = new Ob("SEVERE", 1E3), Sb = new Ob("WARNING", 900), Tb = new Ob("INFO", 800), Ub = new Ob("CONFIG", 700), Vb = new Ob("ALL", 0);
o = Nb.prototype;
o.getParent = l("Z");
o.md = ba("Db");
function Wb(a) {
  if(a.Db) {
    return a.Db
  }
  if(a.Z) {
    return Wb(a.Z)
  }
  return k
}
o.log = function(a, b, c) {
  if(a.value >= Wb(this).value) {
    a = this.Ag(a, b, c);
    q.console && q.console.markTimeline && q.console.markTimeline("log:" + a.Cf);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.cc) {
        for(var f = 0, g = i;g = c.cc[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
o.Ag = function(a, b, c) {
  var d = new Lb(a, String(b), this.je);
  if(c) {
    d.Pd = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var h;
      var j = da("window.location.href");
      if(u(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var n, p, z = !1;
        try {
          n = c.lineNumber || c.Ci || "Not available"
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
      f = "Message: " + wa(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + wa(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + wa(Hb(g) + "-> ")
    }catch(B) {
      f = "Exception trying to expose exception! You win, we lose. " + B
    }
    d.Od = f
  }
  return d
};
function Xb(a, b) {
  a.log(Rb, b, i)
}
function E(a, b) {
  a.log(Sb, b, i)
}
o.info = function(a, b) {
  this.log(Tb, a, b)
};
var Yb = {}, Zb = k;
function $b() {
  Zb || (Zb = new Nb(""), Yb[""] = Zb, Zb.md(Ub))
}
function ac() {
  $b();
  return Zb
}
function F(a) {
  $b();
  var b;
  if(!(b = Yb[a])) {
    b = new Nb(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = F(a.substr(0, c));
    if(!c.M) {
      c.M = {}
    }
    c.M[d] = b;
    b.Z = c;
    Yb[a] = b
  }
  return b
}
;var bc, cc, dc, ec, fc;
function hc() {
  return q.navigator ? q.navigator.userAgent : k
}
fc = ec = dc = cc = bc = !1;
var ic;
if(ic = hc()) {
  var jc = q.navigator;
  bc = ic.indexOf("Opera") == 0;
  cc = !bc && ic.indexOf("MSIE") != -1;
  ec = (dc = !bc && ic.indexOf("WebKit") != -1) && ic.indexOf("Mobile") != -1;
  fc = !bc && !dc && jc.product == "Gecko"
}
var kc = bc, G = cc, lc = fc, H = dc, mc = ec, nc = q.navigator, oc = (nc && nc.platform || "").indexOf("Mac") != -1, pc;
a: {
  var qc = "", rc;
  if(kc && q.opera) {
    var sc = q.opera.version, qc = typeof sc == "function" ? sc() : sc
  }else {
    if(lc ? rc = /rv\:([^\);]+)(\)|;)/ : G ? rc = /MSIE\s+([^\);]+)(\)|;)/ : H && (rc = /WebKit\/(\S+)/), rc) {
      var tc = rc.exec(hc()), qc = tc ? tc[1] : ""
    }
  }
  if(G) {
    var uc, vc = q.document;
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
  return wc[a] || (wc[a] = Da(pc, a) >= 0)
}
;var xc, yc = !G || I("9");
!lc && !G || G && I("9") || lc && I("1.9.1");
var zc = G && !I("9");
function Ac(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function Bc(a) {
  var b = Ac(a), c = Va(arguments, 1), d;
  d = b;
  for(var f = 0, g = 0;g < c.length;g++) {
    Oa(d, c[g]) || (d.push(c[g]), f++)
  }
  d = f == c.length;
  a.className = b.join(" ");
  return d
}
function Cc(a) {
  var b = Ac(a), c = Va(arguments, 1), d;
  d = b;
  for(var f = 0, g = 0;g < d.length;g++) {
    Oa(c, d[g]) && (Ua(d, g--, 1), f++)
  }
  d = f == c.length;
  a.className = b.join(" ");
  return d
}
;function J(a, b) {
  this.width = a;
  this.height = b
}
o = J.prototype;
o.J = function() {
  return new J(this.width, this.height)
};
o.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
o.Oa = function() {
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
function Dc(a) {
  return a ? new Ec(Fc(a)) : xc || (xc = new Ec)
}
function K(a) {
  return u(a) ? document.getElementById(a) : a
}
function Gc(a, b, c, d) {
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
      b = h.className, typeof b.split == "function" && Oa(b.split(/\s+/), c) && (d[f++] = h)
    }
    d.length = f;
    return d
  }else {
    return a
  }
}
function Hc(a, b) {
  nb(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in Ic ? a.setAttribute(Ic[d], b) : a[d] = b
  })
}
var Ic = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Jc() {
  return Kc(document, arguments)
}
function Kc(a, b) {
  var c = b[0], d = b[1];
  if(!yc && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', wa(d.name), '"');
    if(d.type) {
      c.push(' type="', wa(d.type), '"');
      var f = {};
      rb(f, d);
      d = f;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  if(d) {
    u(d) ? c.className = d : t(d) ? Bc.apply(k, [c].concat(d)) : Hc(c, d)
  }
  b.length > 2 && Lc(a, c, b, 2);
  return c
}
function Lc(a, b, c, d) {
  function f(c) {
    c && b.appendChild(u(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && g.nodeType > 0) ? Ka(Mc(g) ? Sa(g) : g, f) : f(g)
  }
}
function Nc(a) {
  Lc(Fc(a), a, arguments, 1)
}
function Oc(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function Pc(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Qc(a, b) {
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
function Fc(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
function Rc(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && a.firstChild.nodeType == 3) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      Oc(a), a.appendChild(Fc(a).createTextNode(b))
    }
  }
}
var Sc = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Tc = {IMG:" ", BR:"\n"};
function Uc(a) {
  var b = a.getAttributeNode("tabindex");
  if(b && b.specified) {
    return a = a.tabIndex, ka(a) && a >= 0
  }
  return!1
}
function Vc(a) {
  var b = [];
  Wc(a, b, !1);
  return b.join("")
}
function Wc(a, b, c) {
  if(!(a.nodeName in Sc)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Tc) {
        b.push(Tc[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Wc(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Mc(a) {
  if(a && typeof a.length == "number") {
    if(ja(a)) {
      return typeof a.item == "function" || typeof a.item == "string"
    }else {
      if(w(a)) {
        return typeof a.item == "function"
      }
    }
  }
  return!1
}
function Ec(a) {
  this.s = a || q.document || document
}
o = Ec.prototype;
o.Da = Dc;
o.a = function(a) {
  return u(a) ? this.s.getElementById(a) : a
};
o.i = function() {
  return Kc(this.s, arguments)
};
o.createElement = function(a) {
  return this.s.createElement(a)
};
o.createTextNode = function(a) {
  return this.s.createTextNode(a)
};
o.Ue = function(a, b, c) {
  for(var d = this.s, f = !!c, c = ["<tr>"], g = 0;g < b;g++) {
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
o.append = Nc;
o.contains = Qc;
function Xc(a, b, c) {
  a.style[Ha(c)] = b
}
function Yc(a, b) {
  var c = Fc(a);
  if(c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k))) {
    return c[b] || c.getPropertyValue(b)
  }
  return""
}
function Zc(a, b, c) {
  b instanceof J ? (c = b.height, b = b.width) : c == i && e(Error("missing height argument"));
  a.style.width = $c(b);
  a.style.height = $c(c)
}
function $c(a) {
  typeof a == "number" && (a = Math.round(a) + "px");
  return a
}
function ad(a) {
  if((Yc(a, "display") || (a.currentStyle ? a.currentStyle.display : k) || a.style.display) != "none") {
    return new J(a.offsetWidth, a.offsetHeight)
  }
  var b = a.style, c = b.display, d = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  var g = a.offsetWidth, a = a.offsetHeight;
  b.display = c;
  b.position = f;
  b.visibility = d;
  return new J(g, a)
}
function bd(a) {
  G ? a.cssText = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}" : a[H ? "innerText" : "innerHTML"] = ".dbg-sev{color:#F00}.dbg-w{color:#C40}.dbg-sh{font-weight:bold;color:#000}.dbg-i{color:#444}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}.logmsg{border-bottom:1px solid #CCC;padding:2px}.logsep{background-color: #8C8;}.logdiv{border:1px solid #CCC;background-color:#FCFCFC;font:medium monospace}"
}
var cd = lc ? "MozUserSelect" : H ? "WebkitUserSelect" : k;
function dd(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(cd) {
    if(b = b ? "none" : "", a.style[cd] = b, c) {
      for(var a = 0, d;d = c[a];a++) {
        d.style[cd] = b
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
;function ed(a) {
  this.Yg = y(this.lg, this);
  this.df = new mb;
  this.rf = this.df.Xf = !1;
  this.d = a;
  this.xg = this.d.ownerDocument || this.d.document;
  var a = Dc(this.d), b = k;
  if(G) {
    b = a.s.createStyleSheet(), bd(b)
  }else {
    var c = Gc(a.s, "head", i, i)[0];
    c || (b = Gc(a.s, "body", i, i)[0], c = a.i("head"), b.parentNode.insertBefore(c, b));
    b = a.i("style");
    bd(b);
    a.appendChild(c, b)
  }
  this.d.className += " logdiv"
}
ed.prototype.lg = function(a) {
  var b = this.d.scrollHeight - this.d.scrollTop - this.d.clientHeight <= 100, c = this.xg.createElement("div");
  c.className = "logmsg";
  var d = this.df, f;
  switch(a.Db.value) {
    case Qb.value:
      f = "dbg-sh";
      break;
    case Rb.value:
      f = "dbg-sev";
      break;
    case Sb.value:
      f = "dbg-w";
      break;
    case Tb.value:
      f = "dbg-i";
      break;
    default:
      f = "dbg-f"
  }
  var g = [];
  g.push(d.Xg, " ");
  if(d.Xf) {
    var h = new Date(a.ag);
    g.push("[", kb(h.getFullYear() - 2E3) + kb(h.getMonth() + 1) + kb(h.getDate()) + " " + kb(h.getHours()) + ":" + kb(h.getMinutes()) + ":" + kb(h.getSeconds()) + "." + kb(Math.floor(h.getMilliseconds() / 10)), "] ")
  }
  d.eh && g.push("[", Ca(lb(a, d.gh.get())), "s] ");
  d.dh && g.push("[", wa(a.Ng), "] ");
  g.push('<span class="', f, '">', va(Ca(wa(a.Cf))));
  d.Yf && a.Pd && g.push("<br>", va(Ca(a.Od || "")));
  g.push("</span><br>");
  c.innerHTML = g.join("");
  this.d.appendChild(c);
  if(b) {
    this.d.scrollTop = this.d.scrollHeight
  }
};
ed.prototype.clear = function() {
  this.d.innerHTML = ""
};
var fd, gd = !G || I("9"), hd = G && !I("8");
function L() {
  id && (jd[x(this)] = this)
}
var id = !1, jd = {};
L.prototype.ya = !1;
L.prototype.g = function() {
  if(!this.ya && (this.ya = !0, this.b(), id)) {
    var a = x(this);
    jd.hasOwnProperty(a) || e(Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call"));
    delete jd[a]
  }
};
L.prototype.b = aa();
function kd(a, b) {
  L.call(this);
  this.type = a;
  this.currentTarget = this.target = b
}
C(kd, L);
o = kd.prototype;
o.b = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
o.lb = !1;
o.mc = !0;
o.stopPropagation = function() {
  this.lb = !0
};
o.preventDefault = function() {
  this.mc = !1
};
function ld(a) {
  a.stopPropagation()
}
;var md = {vh:"click", Ah:"dblclick", Vh:"mousedown", Zh:"mouseup", Yh:"mouseover", Xh:"mouseout", Wh:"mousemove", ii:"selectstart", Ph:"keypress", Oh:"keydown", Qh:"keyup", th:"blur", Ih:"focus", Bh:"deactivate", Jh:G ? "focusin" : "DOMFocusIn", Kh:G ? "focusout" : "DOMFocusOut", uh:"change", hi:"select", ji:"submit", Nh:"input", di:"propertychange", Fh:"dragstart", Ch:"dragenter", Eh:"dragover", Dh:"dragleave", Gh:"drop", ni:"touchstart", mi:"touchmove", li:"touchend", ki:"touchcancel", xh:"contextmenu", 
Hh:"error", Mh:"help", Rh:"load", Sh:"losecapture", ei:"readystatechange", fi:"resize", gi:"scroll", oi:"unload", Lh:"hashchange", $h:"pagehide", ai:"pageshow", ci:"popstate", yh:"copy", bi:"paste", zh:"cut", Uh:"message", wh:"connect"};
var nd = new Function("a", "return a");
function od(a, b) {
  a && this.dc(a, b)
}
C(od, kd);
var pd = [1, 4, 2];
o = od.prototype;
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
o.Wg = !1;
o.Ba = k;
o.dc = function(a, b) {
  var c = this.type = a.type;
  kd.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(lc) {
      var f;
      a: {
        try {
          nd(d.nodeName);
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
  this.Wg = oc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Ba = a;
  delete this.mc;
  delete this.lb
};
function qd(a) {
  return gd ? a.Ba.button == 0 : a.type == "click" ? !0 : !!(a.Ba.button & pd[0])
}
o.stopPropagation = function() {
  od.c.stopPropagation.call(this);
  this.Ba.stopPropagation ? this.Ba.stopPropagation() : this.Ba.cancelBubble = !0
};
o.preventDefault = function() {
  od.c.preventDefault.call(this);
  var a = this.Ba;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, hd) {
      try {
        if(a.ctrlKey || a.keyCode >= 112 && a.keyCode <= 123) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
o.b = function() {
  od.c.b.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Ba = k
};
function rd() {
}
var sd = 0;
o = rd.prototype;
o.key = 0;
o.Hb = !1;
o.Bd = !1;
o.dc = function(a, b, c, d, f, g) {
  w(a) ? this.tf = !0 : a && a.handleEvent && w(a.handleEvent) ? this.tf = !1 : e(Error("Invalid listener argument"));
  this.Eb = a;
  this.Nf = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.Sc = g;
  this.Bd = !1;
  this.key = ++sd;
  this.Hb = !1
};
o.handleEvent = function(a) {
  if(this.tf) {
    return this.Eb.call(this.Sc || this.src, a)
  }
  return this.Eb.handleEvent.call(this.Eb, a)
};
function M(a, b) {
  L.call(this);
  this.xf = b;
  this.eb = [];
  a > this.xf && e(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.eb.push(this.xa ? this.xa() : {})
  }
}
C(M, L);
M.prototype.xa = k;
M.prototype.bf = k;
M.prototype.getObject = function() {
  if(this.eb.length) {
    return this.eb.pop()
  }
  return this.xa ? this.xa() : {}
};
function td(a, b) {
  a.eb.length < a.xf ? a.eb.push(b) : wd(a, b)
}
function wd(a, b) {
  if(a.bf) {
    a.bf(b)
  }else {
    if(ja(b)) {
      if(w(b.g)) {
        b.g()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
M.prototype.b = function() {
  M.c.b.call(this);
  for(var a = this.eb;a.length;) {
    wd(this, a.pop())
  }
  delete this.eb
};
var xd, yd = (xd = "ScriptEngine" in q && q.ScriptEngine() == "JScript") ? q.ScriptEngineMajorVersion() + "." + q.ScriptEngineMinorVersion() + "." + q.ScriptEngineBuildVersion() : "0";
var zd, Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd;
(function() {
  function a() {
    return{f:0, ka:0}
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
    return new rd
  }
  function f() {
    return new od
  }
  var g = xd && !(Da(yd, "5.7") >= 0), h;
  Ed = function(a) {
    h = a
  };
  if(g) {
    zd = function() {
      return j.getObject()
    };
    Ad = function(a) {
      td(j, a)
    };
    Bd = function() {
      return n.getObject()
    };
    Cd = function(a) {
      td(n, a)
    };
    Dd = function() {
      return p.getObject()
    };
    Fd = function() {
      td(p, c())
    };
    Gd = function() {
      return z.getObject()
    };
    Hd = function(a) {
      td(z, a)
    };
    Id = function() {
      return r.getObject()
    };
    Jd = function(a) {
      td(r, a)
    };
    var j = new M(0, 600);
    j.xa = a;
    var n = new M(0, 600);
    n.xa = b;
    var p = new M(0, 600);
    p.xa = c;
    var z = new M(0, 600);
    z.xa = d;
    var r = new M(0, 600);
    r.xa = f
  }else {
    zd = a, Ad = s, Bd = b, Cd = s, Dd = c, Fd = s, Gd = d, Hd = s, Id = f, Jd = s
  }
})();
var Kd = {}, N = {}, Ld = {}, Md = {};
function O(a, b, c, d, f) {
  if(b) {
    if(t(b)) {
      for(var g = 0;g < b.length;g++) {
        O(a, b[g], c, d, f)
      }
      return k
    }else {
      var d = !!d, h = N;
      b in h || (h[b] = zd());
      h = h[b];
      d in h || (h[d] = zd(), h.f++);
      var h = h[d], j = x(a), n;
      h.ka++;
      if(h[j]) {
        n = h[j];
        for(g = 0;g < n.length;g++) {
          if(h = n[g], h.Eb == c && h.Sc == f) {
            if(h.Hb) {
              break
            }
            return n[g].key
          }
        }
      }else {
        n = h[j] = Bd(), h.f++
      }
      g = Dd();
      g.src = a;
      h = Gd();
      h.dc(c, g, a, b, d, f);
      c = h.key;
      g.key = c;
      n.push(h);
      Kd[c] = h;
      Ld[j] || (Ld[j] = Bd());
      Ld[j].push(h);
      a.addEventListener ? (a == q || !a.Hd) && a.addEventListener(b, g, d) : a.attachEvent(Nd(b), g);
      return c
    }
  }else {
    e(Error("Invalid event type"))
  }
}
function Od(a, b, c, d, f) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      Od(a, b[g], c, d, f)
    }
    return k
  }
  a = O(a, b, c, d, f);
  Kd[a].Bd = !0;
  return a
}
function Pd(a, b, c, d, f) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      Pd(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = Qd(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].Eb == c && a[g].capture == d && a[g].Sc == f) {
          Rd(a[g].key);
          break
        }
      }
    }
  }
}
function Rd(a) {
  if(Kd[a]) {
    var b = Kd[a];
    if(!b.Hb) {
      var c = b.src, d = b.type, f = b.Nf, g = b.capture;
      c.removeEventListener ? (c == q || !c.Hd) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(Nd(d), f);
      c = x(c);
      f = N[d][g][c];
      if(Ld[c]) {
        var h = Ld[c];
        Qa(h, b);
        h.length == 0 && delete Ld[c]
      }
      b.Hb = !0;
      f.Ff = !0;
      Sd(d, g, c, f);
      delete Kd[a]
    }
  }
}
function Sd(a, b, c, d) {
  if(!d.ad && d.Ff) {
    for(var f = 0, g = 0;f < d.length;f++) {
      if(d[f].Hb) {
        var h = d[f].Nf;
        h.src = k;
        Fd(h);
        Hd(d[f])
      }else {
        f != g && (d[g] = d[f]), g++
      }
    }
    d.length = g;
    d.Ff = !1;
    g == 0 && (Cd(d), delete N[a][b][c], N[a][b].f--, N[a][b].f == 0 && (Ad(N[a][b]), delete N[a][b], N[a].f--), N[a].f == 0 && (Ad(N[a]), delete N[a]))
  }
}
function Td(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    nb(Ld, function(a) {
      for(var f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          Rd(g.key), c++
        }
      }
    })
  }else {
    if(a = x(a), Ld[a]) {
      for(var a = Ld[a], f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          Rd(g.key), c++
        }
      }
    }
  }
}
function Qd(a, b, c) {
  var d = N;
  if(b in d && (d = d[b], c in d && (d = d[c], a = x(a), d[a]))) {
    return d[a]
  }
  return k
}
function Nd(a) {
  if(a in Md) {
    return Md[a]
  }
  return Md[a] = "on" + a
}
function Ud(a, b, c, d, f) {
  var g = 1, b = x(b);
  if(a[b]) {
    a.ka--;
    a = a[b];
    a.ad ? a.ad++ : a.ad = 1;
    try {
      for(var h = a.length, j = 0;j < h;j++) {
        var n = a[j];
        n && !n.Hb && (g &= Vd(n, f) !== !1)
      }
    }finally {
      a.ad--, Sd(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Vd(a, b) {
  var c = a.handleEvent(b);
  a.Bd && Rd(a.key);
  return c
}
Ed(function(a, b) {
  if(!Kd[a]) {
    return!0
  }
  var c = Kd[a], d = c.type, f = N;
  if(!(d in f)) {
    return!0
  }
  var f = f[d], g, h;
  fd === i && (fd = G && !q.addEventListener);
  if(fd) {
    g = b || da("window.event");
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
    p = Id();
    p.dc(g, this);
    g = !0;
    try {
      if(j) {
        for(var r = Bd(), v = p.currentTarget;v;v = v.parentNode) {
          r.push(v)
        }
        h = f[!0];
        h.ka = h.f;
        for(var B = r.length - 1;!p.lb && B >= 0 && h.ka;B--) {
          p.currentTarget = r[B], g &= Ud(h, r[B], d, !0, p)
        }
        if(n) {
          h = f[!1];
          h.ka = h.f;
          for(B = 0;!p.lb && B < r.length && h.ka;B++) {
            p.currentTarget = r[B], g &= Ud(h, r[B], d, !1, p)
          }
        }
      }else {
        g = Vd(c, p)
      }
    }finally {
      if(r) {
        r.length = 0, Cd(r)
      }
      p.g();
      Jd(p)
    }
    return g
  }
  d = new od(b, this);
  try {
    g = Vd(c, d)
  }finally {
    d.g()
  }
  return g
});
function P() {
  this.A = [];
  this.f = [];
  this.wa = []
}
P.prototype.sb = k;
P.prototype.S = k;
P.prototype.Lb = !0;
var Wd = [2, 2, 6, 6, 0];
o = P.prototype;
o.clear = function() {
  this.A.length = 0;
  this.f.length = 0;
  this.wa.length = 0;
  delete this.sb;
  delete this.S;
  delete this.Lb;
  return this
};
o.moveTo = function(a, b) {
  this.A[this.A.length - 1] == 0 ? this.wa.length -= 2 : (this.A.push(0), this.f.push(1));
  this.wa.push(a, b);
  this.S = this.sb = [a, b];
  return this
};
o.lineTo = function() {
  var a = this.A[this.A.length - 1];
  a == k && e(Error("Path cannot start with lineTo"));
  a != 1 && (this.A.push(1), this.f.push(0));
  for(a = 0;a < arguments.length;a += 2) {
    var b = arguments[a], c = arguments[a + 1];
    this.wa.push(b, c)
  }
  this.f[this.f.length - 1] += a / 2;
  this.S = [b, c];
  return this
};
o.We = function() {
  var a = this.A[this.A.length - 1];
  a == k && e(Error("Path cannot start with curve"));
  a != 2 && (this.A.push(2), this.f.push(0));
  for(a = 0;a < arguments.length;a += 6) {
    var b = arguments[a + 4], c = arguments[a + 5];
    this.wa.push(arguments[a], arguments[a + 1], arguments[a + 2], arguments[a + 3], b, c)
  }
  this.f[this.f.length - 1] += a / 6;
  this.S = [b, c];
  return this
};
o.close = function() {
  var a = this.A[this.A.length - 1];
  a == k && e(Error("Path cannot start with close"));
  if(a != 4) {
    this.A.push(4), this.f.push(1), this.S = this.sb
  }
  return this
};
o.arcTo = function(a, b, c, d) {
  var f = this.S[0] - a * Math.cos(Ya(c)) + a * Math.cos(Ya(c + d)), g = this.S[1] - b * Math.sin(Ya(c)) + b * Math.sin(Ya(c + d));
  this.A.push(3);
  this.f.push(1);
  this.wa.push(a, b, c, d, f, g);
  this.Lb = !1;
  this.S = [f, g];
  return this
};
o.ng = function(a, b, c, d) {
  var f = this.S[0] - a * Math.cos(Ya(c)), g = this.S[1] - b * Math.sin(Ya(c)), h = Ya(d), d = Math.ceil(Math.abs(h) / Math.PI * 2);
  h /= d;
  for(var c = Ya(c), j = 0;j < d;j++) {
    var n = Math.cos(c), p = Math.sin(c), z = 4 / 3 * Math.sin(h / 2) / (1 + Math.cos(h / 2)), r = f + (n - z * p) * a, v = g + (p + z * n) * b;
    c += h;
    n = Math.cos(c);
    p = Math.sin(c);
    this.We(r, v, f + (n + z * p) * a, g + (p - z * n) * b, f + n * a, g + p * b)
  }
  return this
};
function Xd(a, b) {
  for(var c = a.wa, d = 0, f = 0, g = a.A.length;f < g;f++) {
    var h = a.A[f], j = Wd[h] * a.f[f];
    b(h, c.slice(d, d + j));
    d += j
  }
}
o.J = function() {
  var a = new this.constructor;
  a.A = this.A.concat();
  a.f = this.f.concat();
  a.wa = this.wa.concat();
  a.sb = this.sb && this.sb.concat();
  a.S = this.S && this.S.concat();
  a.Lb = this.Lb;
  return a
};
var Yd = {};
Yd[0] = P.prototype.moveTo;
Yd[1] = P.prototype.lineTo;
Yd[4] = P.prototype.close;
Yd[2] = P.prototype.We;
Yd[3] = P.prototype.ng;
function Zd(a) {
  if(a.Lb) {
    return a.J()
  }
  var b = new P;
  Xd(a, function(a, d) {
    Yd[a].apply(b, d)
  });
  return b
}
P.prototype.Oa = function() {
  return this.A.length == 0
};
function $d(a) {
  L.call(this);
  this.gb = a
}
C($d, L);
var ae = new M(0, 100), be = [];
function Q(a, b, c, d) {
  t(c) || (be[0] = c, c = be);
  for(var f = 0;f < c.length;f++) {
    var g = a, h = O(b, c[f], d || a, !1, a.gb || a);
    g.h ? g.h[h] = !0 : g.Qa ? (g.h = ae.getObject(), g.h[g.Qa] = !0, g.Qa = k, g.h[h] = !0) : g.Qa = h
  }
  return a
}
function ce(a, b, c, d, f, g) {
  if(a.Qa || a.h) {
    if(t(c)) {
      for(var h = 0;h < c.length;h++) {
        ce(a, b, c[h], d, f, g)
      }
    }else {
      a: {
        d = d || a;
        g = g || a.gb || a;
        f = !!f;
        if(b = Qd(b, c, f)) {
          for(c = 0;c < b.length;c++) {
            if(b[c].Eb == d && b[c].capture == f && b[c].Sc == g) {
              b = b[c];
              break a
            }
          }
        }
        b = k
      }
      if(b) {
        if(b = b.key, Rd(b), a.h) {
          c = a.h, b in c && delete c[b]
        }else {
          if(a.Qa == b) {
            a.Qa = k
          }
        }
      }
    }
  }
  return a
}
$d.prototype.qe = function() {
  if(this.h) {
    for(var a in this.h) {
      Rd(a), delete this.h[a]
    }
    td(ae, this.h);
    this.h = k
  }else {
    this.Qa && Rd(this.Qa)
  }
};
$d.prototype.b = function() {
  $d.c.b.call(this);
  this.qe()
};
$d.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function de() {
  L.call(this)
}
C(de, L);
o = de.prototype;
o.Hd = !0;
o.dd = k;
o.ve = ba("dd");
o.addEventListener = function(a, b, c, d) {
  O(this, a, b, c, d)
};
o.removeEventListener = function(a, b, c, d) {
  Pd(this, a, b, c, d)
};
o.dispatchEvent = function(a) {
  var b = a.type || a, c = N;
  if(b in c) {
    if(u(a)) {
      a = new kd(a, this)
    }else {
      if(a instanceof kd) {
        a.target = a.target || this
      }else {
        var d = a, a = new kd(b, this);
        rb(a, d)
      }
    }
    var d = 1, f, c = c[b], b = !0 in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.dd) {
        f.push(g)
      }
      g = c[!0];
      g.ka = g.f;
      for(var h = f.length - 1;!a.lb && h >= 0 && g.ka;h--) {
        a.currentTarget = f[h], d &= Ud(g, f[h], a.type, !0, a) && a.mc != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.ka = g.f, b) {
        for(h = 0;!a.lb && h < f.length && g.ka;h++) {
          a.currentTarget = f[h], d &= Ud(g, f[h], a.type, !1, a) && a.mc != !1
        }
      }else {
        for(f = this;!a.lb && f && g.ka;f = f.dd) {
          a.currentTarget = f, d &= Ud(g, f, a.type, !1, a) && a.mc != !1
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
o.b = function() {
  de.c.b.call(this);
  Td(this);
  this.dd = k
};
function ee() {
}
ea(ee);
ee.prototype.Sg = 0;
ee.Ma();
function R(a) {
  L.call(this);
  this.N = a || Dc();
  this.nc = fe
}
C(R, de);
R.prototype.Ig = ee.Ma();
var fe = k;
function ge(a, b) {
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
o = R.prototype;
o.P = k;
o.t = !1;
o.d = k;
o.nc = k;
o.Rg = k;
o.Z = k;
o.M = k;
o.Ac = k;
o.nh = !1;
function he(a) {
  return a.P || (a.P = ":" + (a.Ig.Sg++).toString(36))
}
o.a = l("d");
function ie(a) {
  return a.wb || (a.wb = new $d(a))
}
o.getParent = l("Z");
o.ve = function(a) {
  this.Z && this.Z != a && e(Error("Method not supported"));
  R.c.ve.call(this, a)
};
o.Da = l("N");
o.i = function() {
  this.d = this.N.createElement("div")
};
function je(a, b) {
  a.t && e(Error("Component already rendered"));
  a.d || a.i();
  b ? b.insertBefore(a.d, k) : a.N.s.body.appendChild(a.d);
  (!a.Z || a.Z.t) && a.O()
}
o.O = function() {
  this.t = !0;
  ke(this, function(a) {
    !a.t && a.a() && a.O()
  })
};
o.bb = function() {
  ke(this, function(a) {
    a.t && a.bb()
  });
  this.wb && this.wb.qe();
  this.t = !1
};
o.b = function() {
  R.c.b.call(this);
  this.t && this.bb();
  this.wb && (this.wb.g(), delete this.wb);
  ke(this, function(a) {
    a.g()
  });
  !this.nh && this.d && Pc(this.d);
  this.Z = this.Rg = this.d = this.Ac = this.M = k
};
o.Zb = l("d");
o.Kb = function(a) {
  this.t && e(Error("Component already rendered"));
  this.nc = a
};
function ke(a, b) {
  a.M && Ka(a.M, b, i)
}
o.removeChild = function(a, b) {
  if(a) {
    var c = u(a) ? a : he(a), d;
    this.Ac && c ? (d = this.Ac, d = c in d ? d[c] : i, d = d || k) : d = k;
    a = d;
    if(c && a) {
      d = this.Ac, c in d && delete d[c], Qa(this.M, a), b && (a.bb(), a.d && Pc(a.d)), c = a, c == k && e(Error("Unable to set parent component")), c.Z = k, R.c.ve.call(c, k)
    }
  }
  a || e(Error("Child is not in parent component"));
  return a
};
function le(a, b, c, d, f) {
  R.call(this, f);
  this.width = a;
  this.height = b;
  this.ia = c || k;
  this.Ub = d || k
}
C(le, R);
o = le.prototype;
o.D = k;
o.Ka = 0;
o.$a = 0;
o.gf = function() {
  return this.U()
};
o.U = function() {
  if(this.t) {
    return ad(this.a())
  }
  if(ka(this.width) && ka(this.height)) {
    return new J(this.width, this.height)
  }
  return k
};
function me(a) {
  var b = a.U();
  return b ? b.width / (a.ia ? new J(a.ia, a.Ub) : a.U()).width : 0
}
o.$f = aa();
o.Sf = aa();
function ne(a, b, c, d, f, g) {
  arguments.length == 6 ? this.setTransform(a, b, c, d, f, g) : arguments.length != 0 ? e(Error("Insufficient matrix parameters")) : (this.W = this.Y = 1, this.Q = this.X = this.ea = this.fa = 0)
}
o = ne.prototype;
o.J = function() {
  return new ne(this.W, this.Q, this.X, this.Y, this.ea, this.fa)
};
o.setTransform = function(a, b, c, d, f, g) {
  (!ka(a) || !ka(b) || !ka(c) || !ka(d) || !ka(f) || !ka(g)) && e(Error("Invalid transform parameters"));
  this.W = a;
  this.Q = b;
  this.X = c;
  this.Y = d;
  this.ea = f;
  this.fa = g;
  return this
};
o.Se = function(a) {
  this.W = a.W;
  this.Q = a.Q;
  this.X = a.X;
  this.Y = a.Y;
  this.ea = a.ea;
  this.fa = a.fa;
  return this
};
o.scale = function(a, b) {
  this.W *= a;
  this.Q *= a;
  this.X *= b;
  this.Y *= b;
  return this
};
o.translate = function(a, b) {
  this.ea += a * this.W + b * this.X;
  this.fa += a * this.Q + b * this.Y;
  return this
};
o.rotate = function(a, b, c) {
  var d = new ne, f = Math.cos(a), a = Math.sin(a), b = d.setTransform(f, a, -a, f, b - b * f + c * a, c - b * a - c * f), c = this.W, d = this.X;
  this.W = b.W * c + b.Q * d;
  this.X = b.X * c + b.Y * d;
  this.ea += b.ea * c + b.fa * d;
  c = this.Q;
  d = this.Y;
  this.Q = b.W * c + b.Q * d;
  this.Y = b.X * c + b.Y * d;
  this.fa += b.ea * c + b.fa * d;
  return this
};
o.toString = function() {
  return"matrix(" + [this.W, this.Q, this.X, this.Y, this.ea, this.fa].join(",") + ")"
};
o.n = function(a) {
  if(this == a) {
    return!0
  }
  if(!a) {
    return!1
  }
  return this.W == a.W && this.X == a.X && this.ea == a.ea && this.Q == a.Q && this.Y == a.Y && this.fa == a.fa
};
function S(a, b) {
  L.call(this);
  this.d = a;
  this.sa = b;
  this.Hd = !1
}
C(S, de);
o = S.prototype;
o.sa = k;
o.d = k;
o.cg = k;
o.a = l("d");
o.addEventListener = function(a, b, c, d) {
  O(this.d, a, b, c, d)
};
o.removeEventListener = function(a, b, c, d) {
  Pd(this.d, a, b, c, d)
};
o.b = function() {
  S.c.b.call(this);
  Td(this.d)
};
function T(a, b, c, d) {
  S.call(this, a, b);
  this.Ee = c;
  this.sa.ue(this, c);
  this.fill = d;
  this.sa.te(this, d)
}
C(T, S);
T.prototype.fill = k;
T.prototype.Ee = k;
T.prototype.zg = l("fill");
T.prototype.Bg = l("Ee");
function oe(a, b, c, d) {
  T.call(this, a, b, c, d)
}
C(oe, T);
function pe(a, b) {
  S.call(this, a, b)
}
C(pe, S);
function qe(a, b) {
  S.call(this, a, b)
}
C(qe, S);
function re(a, b, c, d) {
  T.call(this, a, b, c, d)
}
C(re, T);
function se(a) {
  S.call(this, k, a);
  this.M = []
}
C(se, pe);
se.prototype.clear = function() {
  if(this.M.length) {
    this.M.length = 0, te(this.sa)
  }
};
se.prototype.$ = aa();
se.prototype.appendChild = function(a) {
  this.M.push(a)
};
se.prototype.za = function() {
  for(var a = 0, b = this.M.length;a < b;a++) {
    ue(this.sa, this.M[a])
  }
};
function ve(a, b, c, d, f, g, h, j) {
  T.call(this, a, b, h, j);
  this.rg = c;
  this.sg = d;
  this.Tf = f;
  this.Uf = g;
  this.R = new P;
  this.R.clear();
  this.R.moveTo(this.rg + this.Tf * Math.cos(Ya(0)), this.sg + this.Uf * Math.sin(Ya(0)));
  this.R.arcTo(this.Tf, this.Uf, 0, 360);
  this.R.close();
  this.Vg = new we(k, b, this.R, h, j)
}
C(ve, oe);
ve.prototype.za = function(a) {
  this.Vg.za(a)
};
function we(a, b, c, d, f) {
  T.call(this, a, b, d, f);
  this.Wa(c)
}
C(we, re);
we.prototype.Vb = !1;
we.prototype.Wa = function(a) {
  this.R = a.Lb ? a : Zd(a);
  this.Vb && te(this.sa)
};
we.prototype.za = function(a) {
  this.Vb = !0;
  a.beginPath();
  Xd(this.R, function(b, c) {
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
function xe(a, b, c, d, f, g, h) {
  S.call(this, a, b);
  this.rh = c;
  this.sh = d;
  this.Le = f;
  this.Vd = g;
  this.fh = h
}
C(xe, qe);
xe.prototype.Vb = !1;
xe.prototype.$ = function(a, b) {
  this.Le = a;
  this.Vd = b;
  this.Vb && te(this.sa)
};
xe.prototype.za = function(a) {
  this.pf ? (this.Le && this.Vd && a.drawImage(this.pf, this.rh, this.sh, this.Le, this.Vd), this.Vb = !0) : (a = new Image, a.onload = y(this.Dg, this, a), a.src = this.fh)
};
xe.prototype.Dg = function(a) {
  this.pf = a;
  te(this.sa)
};
function ye() {
}
;function ze(a, b) {
  this.Dd = a;
  this.gc = b || 1
}
C(ze, ye);
ze.prototype.da = l("Dd");
function Ae(a, b) {
  this.pb = a;
  this.Dd = b
}
Ae.prototype.da = l("Dd");
function Be(a, b, c, d, f) {
  le.call(this, a, b, c, d, f)
}
C(Be, le);
o = Be.prototype;
o.te = function() {
  te(this)
};
o.ue = function() {
  te(this)
};
function Ce(a, b) {
  var c = a.getContext();
  c.save();
  var d = b.cg ? b.cg.J() : new ne, f = d.ea, g = d.fa;
  (f || g) && c.translate(f, g);
  (d = d.Q) && c.rotate(Math.asin(d))
}
o.i = function() {
  var a = this.N.i("div", {style:"position:relative;overflow:hidden"});
  this.d = a;
  this.Tb = this.N.i("canvas");
  a.appendChild(this.Tb);
  this.Lg = this.D = new se(this);
  this.$g = 0;
  De(this)
};
o.getContext = function() {
  this.a() || this.i();
  if(!this.tb) {
    this.tb = this.Tb.getContext("2d"), this.tb.save()
  }
  return this.tb
};
o.$ = function(a, b) {
  this.width = a;
  this.height = b;
  De(this);
  te(this)
};
o.U = function() {
  var a = this.width, b = this.height, c = u(a) && a.indexOf("%") != -1, d = u(b) && b.indexOf("%") != -1;
  if(!this.t && (c || d)) {
    return k
  }
  var f, g;
  if(c) {
    f = this.a().parentNode, g = ad(f), a = parseFloat(a) * g.width / 100
  }
  d && (f = f || this.a().parentNode, g = g || ad(f), b = parseFloat(b) * g.height / 100);
  return new J(a, b)
};
function De(a) {
  Zc(a.a(), a.width, a.height);
  var b = a.U();
  if(b) {
    Zc(a.Tb, b.width, b.height), a.Tb.width = b.width, a.Tb.height = b.height, a.tb = k
  }
}
o.reset = function() {
  var a = this.getContext();
  a.restore();
  var b = this.U();
  b.width && b.height && a.clearRect(0, 0, b.width, b.height);
  a.save()
};
o.clear = function() {
  this.reset();
  this.D.clear();
  for(var a = this.a();a.childNodes.length > 1;) {
    a.removeChild(a.lastChild)
  }
};
function te(a) {
  if(a.If) {
    a.Gf = !0
  }else {
    if(a.t) {
      a.reset();
      if(a.ia) {
        var b = a.U();
        a.getContext().scale(b.width / a.ia, b.height / a.Ub)
      }
      (a.Ka || a.$a) && a.getContext().translate(-a.Ka, -a.$a);
      Ce(a, a.D);
      a.D.za(a.tb);
      a.getContext().restore()
    }
  }
}
function ue(a, b) {
  var c = a.getContext();
  Ce(a, b);
  if(!b.zg || !b.Bg) {
    b.za(c)
  }else {
    var d = b.fill;
    if(d) {
      if(d instanceof ze) {
        if(d.gc != 0) {
          c.globalAlpha = d.gc, c.fillStyle = d.da(), b.za(c), c.fill(), c.globalAlpha = 1
        }
      }else {
        var f = c.createLinearGradient(d.xi(), d.zi(), d.yi(), d.Ai());
        f.addColorStop(0, d.vi());
        f.addColorStop(1, d.wi());
        c.fillStyle = f;
        b.za(c);
        c.fill()
      }
    }
    if(d = b.Ee) {
      b.za(c), c.strokeStyle = d.da(), d = d.pb, u(d) && d.indexOf("px") != -1 && (d = parseFloat(d) / me(a)), c.lineWidth = d, c.stroke()
    }
  }
  a.getContext().restore()
}
o.Ja = function(a, b) {
  b = b || this.D;
  b.appendChild(a);
  this.t && !this.$g && !(b != this.D && b != this.Lg) && ue(this, a)
};
o.Fc = function(a, b, c, d, f, g, h) {
  a = new ve(k, this, a, b, c, d, f, g);
  this.Ja(a, h);
  return a
};
o.drawImage = function(a, b, c, d, f, g) {
  a = new xe(k, this, a, b, c, d, f);
  this.Ja(a, g);
  return a
};
o.b = function() {
  this.tb = k;
  Be.c.b.call(this)
};
o.O = function() {
  var a = this.U();
  Be.c.O.call(this);
  a || (De(this), this.dispatchEvent("resize"));
  te(this)
};
o.$f = function() {
  this.If = !0
};
o.Sf = function() {
  this.If = !1;
  if(this.Gf) {
    te(this), this.Gf = !1
  }
};
function Ee(a, b) {
  L.call(this);
  this.Vc = a || 1;
  this.sc = b || Fe;
  this.Ad = y(this.ih, this);
  this.fe = A()
}
C(Ee, de);
Ee.prototype.enabled = !1;
var Fe = q.window;
o = Ee.prototype;
o.na = k;
o.ih = function() {
  if(this.enabled) {
    var a = A() - this.fe;
    if(a > 0 && a < this.Vc * 0.8) {
      this.na = this.sc.setTimeout(this.Ad, this.Vc - a)
    }else {
      if(this.dispatchEvent(Ge), this.enabled) {
        this.na = this.sc.setTimeout(this.Ad, this.Vc), this.fe = A()
      }
    }
  }
};
o.start = function() {
  this.enabled = !0;
  if(!this.na) {
    this.na = this.sc.setTimeout(this.Ad, this.Vc), this.fe = A()
  }
};
o.stop = function() {
  this.enabled = !1;
  if(this.na) {
    this.sc.clearTimeout(this.na), this.na = k
  }
};
o.b = function() {
  Ee.c.b.call(this);
  this.stop();
  delete this.sc
};
var Ge = "tick";
function He(a, b) {
  S.call(this, a, b)
}
C(He, pe);
He.prototype.clear = function() {
  Oc(this.a())
};
He.prototype.$ = function(a, b) {
  Ie(this.a(), {width:a, height:b})
};
function Je(a, b, c, d) {
  T.call(this, a, b, c, d)
}
C(Je, oe);
function Ke(a, b) {
  S.call(this, a, b)
}
C(Ke, qe);
Ke.prototype.$ = function(a, b) {
  Ie(this.a(), {width:a, height:b})
};
function Le(a, b, c, d, f) {
  le.call(this, a, b, c, d, f);
  this.Ze = {};
  this.Je = H && !I(526);
  this.gb = new $d(this)
}
var Me;
C(Le, le);
function Ne(a, b, c) {
  a = a.N.s.createElementNS("http://www.w3.org/2000/svg", b);
  c && Ie(a, c);
  return a
}
function Ie(a, b) {
  for(var c in b) {
    a.setAttribute(c, b[c])
  }
}
o = Le.prototype;
o.Ja = function(a, b) {
  (b || this.D).a().appendChild(a.a())
};
o.te = function(a, b) {
  var c = a.a();
  b instanceof ze ? (c.setAttribute("fill", b.da()), c.setAttribute("fill-opacity", b.gc)) : c.setAttribute("fill", "none")
};
o.ue = function(a, b) {
  var c = a.a();
  if(b) {
    c.setAttribute("stroke", b.da());
    var d = b.pb;
    u(d) && d.indexOf("px") != -1 ? c.setAttribute("stroke-width", parseFloat(d) / me(this)) : c.setAttribute("stroke-width", d)
  }else {
    c.setAttribute("stroke", "none")
  }
};
o.i = function() {
  var a = Ne(this, "svg", {width:this.width, height:this.height, overflow:"hidden"}), b = Ne(this, "g");
  this.Jd = Ne(this, "defs");
  this.D = new He(b, this);
  a.appendChild(this.Jd);
  a.appendChild(b);
  this.d = a;
  if(this.ia || this.Ka || this.$a) {
    this.a().setAttribute("preserveAspectRatio", "none"), this.Je ? this.td() : this.a().setAttribute("viewBox", this.Ka + " " + this.$a + " " + (this.ia ? this.ia + " " + this.Ub : ""))
  }
};
o.td = function() {
  if(this.t && (this.ia || this.Ka || !this.$a)) {
    var a = this.U();
    if(a.width == 0) {
      this.a().style.visibility = "hidden"
    }else {
      this.a().style.visibility = "";
      var b = -this.Ka, c = -this.$a, d = a.width / this.ia, a = a.height / this.Ub;
      this.D.a().setAttribute("transform", "scale(" + d + " " + a + ") translate(" + b + " " + c + ")")
    }
  }
};
o.$ = aa();
o.U = function() {
  if(!lc) {
    return this.t ? ad(this.a()) : Le.c.U.call(this)
  }
  var a = this.width, b = this.height, c = u(a) && a.indexOf("%") != -1, d = u(b) && b.indexOf("%") != -1;
  if(!this.t && (c || d)) {
    return k
  }
  var f, g;
  if(c) {
    f = this.a().parentNode, g = ad(f), a = parseFloat(a) * g.width / 100
  }
  d && (f = f || this.a().parentNode, g = g || ad(f), b = parseFloat(b) * g.height / 100);
  return new J(a, b)
};
o.clear = function() {
  this.D.clear();
  Oc(this.Jd);
  this.Ze = {}
};
o.Fc = function(a, b, c, d, f, g, h) {
  a = Ne(this, "ellipse", {cx:a, cy:b, rx:c, ry:d});
  f = new Je(a, this, f, g);
  this.Ja(f, h);
  return f
};
o.drawImage = function(a, b, c, d, f, g) {
  a = Ne(this, "image", {x:a, y:b, width:c, height:d, "image-rendering":"optimizeQuality", preserveAspectRatio:"none"});
  a.setAttributeNS("http://www.w3.org/1999/xlink", "href", f);
  f = new Ke(a, this);
  this.Ja(f, g);
  return f
};
o.O = function() {
  var a = this.U();
  Le.c.O.call(this);
  a || this.dispatchEvent("resize");
  if(this.Je) {
    var a = this.width, b = this.height;
    typeof a == "string" && a.indexOf("%") != -1 && typeof b == "string" && b.indexOf("%") != -1 && Q(this.gb, Oe(), Ge, this.td);
    this.td()
  }
};
o.bb = function() {
  Le.c.bb.call(this);
  this.Je && ce(this.gb, Oe(), Ge, this.td)
};
o.b = function() {
  delete this.Ze;
  delete this.Jd;
  delete this.D;
  Le.c.b.call(this)
};
function Oe() {
  Me || (Me = new Ee(400), Me.start());
  return Me
}
;function Pe() {
  return this.d = this.sa.N.a(this.P) || this.d
}
function Qe(a, b) {
  this.P = a.id;
  S.call(this, a, b)
}
C(Qe, pe);
Qe.prototype.a = Pe;
Qe.prototype.clear = function() {
  Oc(this.a())
};
Qe.prototype.$ = function(a, b) {
  var c = this.a(), d = c.style;
  d.width = U(a) + "px";
  d.height = U(b) + "px";
  c.coordsize = U(a) + " " + U(b);
  if(this.sa.D != this) {
    c.coordorigin = "0 0"
  }
};
function Re(a, b, c, d, f, g, h, j) {
  this.P = a.id;
  T.call(this, a, b, h, j);
  this.ri = c;
  this.si = d;
  this.Fi = f;
  this.Gi = g
}
C(Re, oe);
Re.prototype.a = Pe;
function Se(a, b) {
  this.P = a.id;
  S.call(this, a, b)
}
C(Se, qe);
Se.prototype.a = Pe;
Se.prototype.$ = function(a, b) {
  var c = this.a().style;
  c.width = Te(a) + "px";
  c.height = Te(b) + "px"
};
function Ue(a, b, c, d, f) {
  le.call(this, a, b, c, d, f);
  this.gb = new $d(this)
}
C(Ue, le);
var Ve = document.documentMode && document.documentMode >= 8;
function Te(a) {
  return Math.round((parseFloat(a.toString()) - 0.5) * 100)
}
function U(a) {
  return Math.round(parseFloat(a.toString()) * 100)
}
function We(a, b) {
  var c = a.N.createElement("g_vml_:" + b);
  c.id = "goog_" + Fa++;
  return c
}
function Xe(a) {
  if(Ve && a.t) {
    a.a().innerHTML = a.a().innerHTML
  }
}
Ue.prototype.Ja = function(a, b) {
  (b || this.D).a().appendChild(a.a());
  Xe(this)
};
Ue.prototype.te = function(a, b) {
  var c = a.a();
  c.fillcolor = "";
  for(var d = 0;d < c.childNodes.length;d++) {
    var f = c.childNodes[d];
    f.tagName == "fill" && c.removeChild(f)
  }
  b instanceof ze ? b.da() == "transparent" ? c.filled = !1 : b.gc != 1 ? (c.filled = !0, d = We(this, "fill"), d.opacity = Math.round(b.gc * 100) + "%", d.color = b.da(), c.appendChild(d)) : (c.filled = !0, c.fillcolor = b.da()) : c.filled = !1;
  Xe(this)
};
Ue.prototype.ue = function(a, b) {
  var c = a.a();
  if(b) {
    c.stroked = !0;
    var d = b.pb;
    u(d) && d.indexOf("px") == -1 ? d = parseFloat(d) : d *= me(this);
    var f = c.getElementsByTagName("stroke")[0];
    d < 1 ? (f = f || We(this, "stroke"), f.opacity = d, f.Ii = "1px", f.color = b.da(), c.appendChild(f)) : (f && c.removeChild(f), c.strokecolor = b.da(), c.strokeweight = d + "px")
  }else {
    c.stroked = !1
  }
  Xe(this)
};
function Ye(a, b, c, d, f) {
  var g = a.style;
  g.position = "absolute";
  g.left = Te(b) + "px";
  g.top = Te(c) + "px";
  g.width = U(d) + "px";
  g.height = U(f) + "px";
  if(a.tagName == "shape") {
    a.coordsize = U(d) + " " + U(f)
  }
}
try {
  eval("document.namespaces")
}catch(Ze) {
}
o = Ue.prototype;
o.i = function() {
  var a = this.N.s;
  if(!a.namespaces.g_vml_) {
    Ve ? a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML") : a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml"), a.createStyleSheet().cssText = "g_vml_\\:*{behavior:url(#default#VML)}"
  }
  var a = this.width, b = this.height, c = this.N.i("div", {style:"overflow:hidden;position:relative;width:" + (u(a) && ra(a) ? a : parseFloat(a.toString()) + "px") + ";height:" + (u(b) && ra(b) ? b : parseFloat(b.toString()) + "px")});
  this.d = c;
  var d = We(this, "group"), f = d.style;
  f.position = "absolute";
  f.left = f.top = 0;
  f.width = this.width;
  f.height = this.height;
  d.coordsize = this.ia ? U(this.ia) + " " + U(this.Ub) : U(a) + " " + U(b);
  d.coordorigin = ga(this.Ka) ? U(this.Ka) + " " + U(this.$a) : "0 0";
  c.appendChild(d);
  this.D = new Qe(d, this);
  O(c, "resize", y(this.Wd, this))
};
o.Wd = function() {
  var a = ad(this.a()), b = this.D.a().style;
  if(a.width) {
    b.width = a.width + "px", b.height = a.height + "px"
  }else {
    for(a = this.a();a && a.currentStyle && a.currentStyle.display != "none";) {
      a = a.parentNode
    }
    a && a.currentStyle && Q(this.gb, a, "propertychange", this.Wd)
  }
  this.dispatchEvent("resize")
};
o.$ = aa();
o.U = function() {
  var a = this.a();
  return new J(a.style.pixelWidth || a.offsetWidth || 1, a.style.pixelHeight || a.offsetHeight || 1)
};
o.clear = function() {
  this.D.clear()
};
o.Fc = function(a, b, c, d, f, g, h) {
  var j = We(this, "oval");
  Ye(j, a - c, b - d, c * 2, d * 2);
  a = new Re(j, this, a, b, c, d, f, g);
  this.Ja(a, h);
  return a
};
o.drawImage = function(a, b, c, d, f, g) {
  var h = We(this, "image");
  Ye(h, a, b, c, d);
  Ve ? h.src = f : h.setAttribute("src", f);
  a = new Se(h, this);
  this.Ja(a, g);
  return a
};
o.O = function() {
  Ue.c.O.call(this);
  this.Wd();
  Xe(this)
};
o.b = function() {
  this.D = k;
  Ue.c.b.call(this)
};
function $e(a) {
  var a = String(a), b;
  b = /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
  if(b) {
    try {
      return eval("(" + a + ")")
    }catch(c) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
function af() {
}
af.prototype.nb = function(a) {
  var b = [];
  bf(this, a, b);
  return b.join("")
};
function bf(a, b, c) {
  switch(typeof b) {
    case "string":
      cf(b, c);
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
          c.push(f), bf(a, b[g], c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (g = b[f], typeof g != "function" && (c.push(d), cf(f, c), c.push(":"), bf(a, g, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var df = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, ef = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function cf(a, b) {
  b.push('"', a.replace(ef, function(a) {
    if(a in df) {
      return df[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    b < 16 ? f += "000" : b < 256 ? f += "00" : b < 4096 && (f += "0");
    return df[a] = f + b.toString(16)
  }), '"')
}
;function ff(a, b, c) {
  this.Bf = a;
  this.je = b.name || k;
  this.ui = b.ef || k;
  this.qi = b.pi;
  this.La = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.La[b.F] = b
  }
}
function gf(a) {
  a = ob(a.La);
  Wa(a, function(a, c) {
    return a.F - c.F
  });
  return a
}
;function hf(a, b, c) {
  this.Z = a;
  this.F = b;
  this.je = c.name;
  this.zb = !!c.Di;
  this.Bi = !!c.required;
  this.Xb = c.Rd;
  this.Df = c.type;
  this.af = !1;
  switch(this.Xb) {
    case jf:
    ;
    case kf:
    ;
    case lf:
    ;
    case mf:
    ;
    case nf:
      this.af = !0
  }
  this.ti = c.defaultValue
}
var jf = 3, kf = 4, lf = 6, mf = 16, nf = 18;
function of(a) {
  return a.Xb == 11 || a.Xb == 10
}
;function pf() {
  this.q = {};
  this.vb = this.constructor.vb;
  var a = this.vb.La, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.La = b;
  this.Ld = this.ge = k
}
function qf(a, b) {
  for(var c in a.q) {
    a.La[c] || b.call(a, c, a.q[c])
  }
}
o = pf.prototype;
o.$b = l("vb");
o.get = function(a, b) {
  return rf(this, a.F, b)
};
o.set = function(a, b) {
  this.q[a.F] = b
};
o.add = function(a, b) {
  var c = a.F;
  this.q[c] || (this.q[c] = []);
  this.q[c].push(b)
};
o.clear = function(a) {
  delete this.q[a.F]
};
o.n = function(a) {
  if(!a || this.constructor != a.constructor) {
    return!1
  }
  for(var b = gf(this.$b()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(sf(this, d.F) != sf(a, d.F)) {
      return!1
    }
    if(sf(this, d.F)) {
      var f = of(d), g = d.F, h = this.q[g], g = a.q[g];
      if(d.zb) {
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
o.Se = function(a) {
  for(var b = gf(this.$b()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete this.q[d.F];
    if(sf(a, d.F)) {
      var f = of(d);
      if(d.zb) {
        var g;
        g = a;
        var h = d.F;
        tf(g, g.La[h]);
        g = g.q[h] || [];
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
  a.Se(this);
  return a
};
function sf(a, b) {
  return b in a.q && ga(a.q[b])
}
function tf(a, b) {
  if(a.ge) {
    var c = b.F;
    if(!(c in a.Ld)) {
      var d = a.q, f;
      f = a.ge;
      var g = a.q[c];
      if(g == k) {
        f = g
      }else {
        if(b.zb) {
          var h = [];
          t(g);
          for(var j = 0;j < g.length;j++) {
            h[j] = f.Kc(b, g[j])
          }
          f = h
        }else {
          f = f.Kc(b, g)
        }
      }
      d[c] = f;
      a.Ld[c] = !0
    }
  }
}
function rf(a, b, c) {
  var d = a.La[b];
  tf(a, d);
  return d.zb ? (c = c || 0, vf(a, b), a.q[b][c]) : (t(a.q[b]), a.q[b])
}
function vf(a, b) {
  return a.La[b].zb ? (sf(a, b) && t(a.q[b]), sf(a, b) ? a.q[b].length : 0) : sf(a, b) ? 1 : 0
}
function wf(a, b) {
  var c = [], d, f;
  for(f in b) {
    b.hasOwnProperty(f) && (f == 0 ? d = b[0] : c.push(new hf(a, f, b[f])))
  }
  a.vb = new ff(a, d, c);
  a.$b = function() {
    return a.vb
  }
}
;function xf() {
}
xf.prototype.Lc = function(a, b) {
  return of(a) ? this.nb(b) : b
};
xf.prototype.Kd = function(a) {
  new a.Bf;
  e(Error("Unimplemented"))
};
xf.prototype.Kc = function(a, b) {
  if(of(a)) {
    return this.Kd(a.Df.vb, b)
  }
  if(!a.af) {
    return b
  }
  var c = a.Df;
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
function yf() {
}
C(yf, xf);
yf.prototype.Kd = function(a, b) {
  var c = new a.Bf;
  c.ge = this;
  c.q = b;
  c.Ld = {};
  return c
};
function zf() {
}
C(zf, yf);
zf.prototype.nb = function(a) {
  for(var b = gf(a.$b()), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    if(sf(a, f.F)) {
      var g = f.F;
      if(f.zb) {
        c[g] = [];
        for(var h = 0;h < vf(a, f.F);h++) {
          c[g][h] = this.Lc(f, a.get(f, h))
        }
      }else {
        c[g] = this.Lc(f, a.get(f))
      }
    }
  }
  qf(a, function(a, b) {
    c[a] = b
  });
  return c
};
zf.prototype.Lc = function(a, b) {
  if(a.Xb == 8) {
    return b ? 1 : 0
  }
  return xf.prototype.Lc.apply(this, arguments)
};
zf.prototype.Kc = function(a, b) {
  if(a.Xb == 8) {
    return b === 1
  }
  return xf.prototype.Kc.apply(this, arguments)
};
function Af(a) {
  this.s = a
}
var Bf = /\s*;\s*/;
o = Af.prototype;
o.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && H) {
    var b = "COOKIES_TEST_" + A();
    Cf.set(b, "1");
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
  ga(c) || (c = -1);
  f = f ? ";domain=" + f : "";
  d = d ? ";path=" + d : "";
  g = g ? ";secure" : "";
  c = c < 0 ? "" : c == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(A() + c * 1E3)).toUTCString();
  this.s.cookie = a + "=" + b + f + d + c + g
};
o.get = function(a, b) {
  for(var c = a + "=", d = (this.s.cookie || "").split(Bf), f = 0, g;g = d[f];f++) {
    if(g.indexOf(c) == 0) {
      return g.substr(c.length)
    }
  }
  return b
};
o.remove = function(a, b, c) {
  var d = this.aa(a);
  this.set(a, "", 0, b, c);
  return d
};
o.Ea = function() {
  return Df(this).uf
};
o.V = function() {
  return Df(this).hg
};
o.Oa = function() {
  return!this.s.cookie
};
o.T = function() {
  if(!this.s.cookie) {
    return 0
  }
  return(this.s.cookie || "").split(Bf).length
};
o.aa = function(a) {
  return ga(this.get(a))
};
o.Dc = function(a) {
  for(var b = Df(this).hg, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return!0
    }
  }
  return!1
};
o.clear = function() {
  for(var a = Df(this).uf, b = a.length - 1;b >= 0;b--) {
    this.remove(a[b])
  }
};
function Df(a) {
  for(var a = (a.s.cookie || "").split(Bf), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), d == -1 ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{uf:b, hg:c}
}
var Cf = new Af(document);
Cf.Th = 3950;
function Ef(a, b, c, d, f) {
  if(!G && (!H || !I("525"))) {
    return!0
  }
  if(oc && f) {
    return Ff(a)
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
      return!0;
    case 27:
      return!H
  }
  return Ff(a)
}
function Ff(a) {
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
;function Gf(a, b) {
  a.setAttribute("role", b);
  a.Ei = b
}
;function Hf() {
}
var If;
ea(Hf);
o = Hf.prototype;
o.Jc = aa();
o.i = function(a) {
  return a.Da().i("div", Jf(this, a).join(" "), a.ba)
};
o.Zb = function(a) {
  return a
};
o.Wb = function(a, b, c) {
  if(a = a.a ? a.a() : a) {
    if(G && !I("7")) {
      var d = Kf(Ac(a), b);
      d.push(b);
      pa(c ? Bc : Cc, a).apply(k, d)
    }else {
      c ? Bc(a, b) : Cc(a, b)
    }
  }
};
o.qf = function(a) {
  if(a.nc == k) {
    a.nc = "rtl" == (Yc(a.t ? a.d : a.N.s.body, "direction") || ((a.t ? a.d : a.N.s.body).currentStyle ? (a.t ? a.d : a.N.s.body).currentStyle.direction : k) || (a.t ? a.d : a.N.s.body).style.direction)
  }
  a.nc && this.Kb(a.a(), !0);
  a.isEnabled() && this.ld(a, a.Ob)
};
o.hd = function(a, b) {
  dd(a, !b, !G && !kc)
};
o.Kb = function(a, b) {
  this.Wb(a, this.u() + "-rtl", b)
};
o.sf = function(a) {
  var b;
  if(a.ua & 32 && (b = a.fb())) {
    return Uc(b)
  }
  return!1
};
o.ld = function(a, b) {
  var c;
  if(a.ua & 32 && (c = a.fb())) {
    if(!b && a.l & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.l & 32 && a.jf()
    }
    if(Uc(c) != b) {
      b ? c.tabIndex = 0 : c.removeAttribute("tabIndex")
    }
  }
};
o.ze = function(a, b) {
  a.style.display = b ? "" : "none"
};
o.ha = function(a, b, c) {
  var d = a.a();
  if(d) {
    var f = Lf(this, b);
    f && this.Wb(a, f, c);
    this.uc(d, b, c)
  }
};
o.uc = function(a, b, c) {
  If || (If = sb(1, "disabled", 4, "pressed", 8, "selected", 16, "checked", 64, "expanded"));
  (b = If[b]) && a.setAttribute("aria-" + b, c)
};
o.jd = function(a, b) {
  var c = this.Zb(a);
  if(c && (Oc(c), b)) {
    if(u(b)) {
      Rc(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = Fc(c);
          c.appendChild(u(a) ? b.createTextNode(a) : a)
        }
      };
      t(b) ? Ka(b, d) : ha(b) && !("nodeType" in b) ? Ka(Sa(b), d) : d(b)
    }
  }
};
o.fb = function(a) {
  return a.a()
};
o.u = m("goog-control");
function Jf(a, b) {
  var c = a.u(), d = [c], f = a.u();
  f != c && d.push(f);
  c = b.l;
  for(f = [];c;) {
    var g = c & -c;
    f.push(Lf(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.qa) && d.push.apply(d, c);
  G && !I("7") && d.push.apply(d, Kf(d));
  return d
}
function Kf(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Ka([], function(d) {
    Na(d, pa(Oa, a)) && (!b || Oa(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Lf(a, b) {
  if(!a.Pe) {
    var c = a.u();
    a.Pe = sb(1, c + "-disabled", 2, c + "-hover", 4, c + "-active", 8, c + "-selected", 16, c + "-checked", 32, c + "-focused", 64, c + "-open")
  }
  return a.Pe[b]
}
;function Mf() {
}
C(Mf, Hf);
ea(Mf);
o = Mf.prototype;
o.Jc = m("button");
o.uc = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : Mf.c.uc.call(this, a, b, c)
};
o.i = function(a) {
  var b = Mf.c.i.call(this, a), c = a.Mc();
  c && this.ye(b, c);
  (c = a.Nc()) && this.od(b, c);
  a.ua & 16 && this.uc(b, 16, !1);
  return b
};
o.Nc = s;
o.od = s;
o.Mc = function(a) {
  return a.title
};
o.ye = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
o.u = m("goog-button");
function Nf(a, b) {
  L.call(this);
  a && Of(this, a, b)
}
C(Nf, de);
o = Nf.prototype;
o.d = k;
o.Wc = k;
o.de = k;
o.Xc = k;
o.Ra = -1;
o.Pa = -1;
var Pf = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Qf = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Rf = {61:187, 
59:186}, Sf = G || H && I("525");
o = Nf.prototype;
o.Eg = function(a) {
  if(H && (this.Ra == 17 && !a.ctrlKey || this.Ra == 18 && !a.altKey)) {
    this.Pa = this.Ra = -1
  }
  Sf && !Ef(a.keyCode, this.Ra, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Pa = lc && a.keyCode in Rf ? Rf[a.keyCode] : a.keyCode
};
o.Fg = function() {
  this.Pa = this.Ra = -1
};
o.handleEvent = function(a) {
  var b = a.Ba, c, d;
  G && a.type == "keypress" ? (c = this.Pa, d = c != 13 && c != 27 ? b.keyCode : 0) : H && a.type == "keypress" ? (c = this.Pa, d = b.charCode >= 0 && b.charCode < 63232 && Ff(c) ? b.charCode : 0) : kc ? (c = this.Pa, d = Ff(c) ? b.keyCode : 0) : (c = b.keyCode || this.Pa, d = b.charCode || 0, oc && d == 63 && !c && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in Pf ? f = Pf[c] : c == 25 && a.shiftKey && (f = 9) : g && g in Qf && (f = Qf[g]);
  a = f == this.Ra;
  this.Ra = f;
  b = new Tf(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.g()
  }
};
o.a = l("d");
function Of(a, b, c) {
  a.Xc && a.detach();
  a.d = b;
  a.Wc = O(a.d, "keypress", a, c);
  a.de = O(a.d, "keydown", a.Eg, c, a);
  a.Xc = O(a.d, "keyup", a.Fg, c, a)
}
o.detach = function() {
  if(this.Wc) {
    Rd(this.Wc), Rd(this.de), Rd(this.Xc), this.Xc = this.de = this.Wc = k
  }
  this.d = k;
  this.Pa = this.Ra = -1
};
o.b = function() {
  Nf.c.b.call(this);
  this.detach()
};
function Tf(a, b, c, d) {
  d && this.dc(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(Tf, od);
function Uf(a, b) {
  a || e(Error("Invalid class name " + a));
  w(b) || e(Error("Invalid decorator function " + b))
}
var Vf = {};
function V(a, b, c) {
  R.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = x(b);
      if(d = Vf[d]) {
        break
      }
      b = b.c ? b.c.constructor : k
    }
    b = d ? w(d.Ma) ? d.Ma() : new d : k
  }
  this.m = b;
  this.kd(a)
}
C(V, R);
o = V.prototype;
o.ba = k;
o.l = 0;
o.ua = 39;
o.Me = 255;
o.hh = 0;
o.Ob = !0;
o.qa = k;
o.Yd = !0;
o.zd = !1;
o.fb = function() {
  return this.m.fb(this)
};
function Wf(a, b) {
  if(b) {
    a.qa ? Oa(a.qa, b) || a.qa.push(b) : a.qa = [b], a.m.Wb(a, b, !0)
  }
}
o.Wb = function(a, b) {
  if(b) {
    Wf(this, a)
  }else {
    if(a && this.qa) {
      Qa(this.qa, a);
      if(this.qa.length == 0) {
        this.qa = k
      }
      this.m.Wb(this, a, !1)
    }
  }
};
o.i = function() {
  var a = this.m.i(this);
  this.d = a;
  var b = this.m.Jc();
  b && Gf(a, b);
  this.zd || this.m.hd(a, !1);
  this.Ob || this.m.ze(a, !1)
};
o.Zb = function() {
  return this.m.Zb(this.a())
};
o.O = function() {
  V.c.O.call(this);
  this.m.qf(this);
  if(this.ua & -2 && (this.Yd && Xf(this, !0), this.ua & 32)) {
    var a = this.fb();
    if(a) {
      var b = this.Ab || (this.Ab = new Nf);
      Of(b, a);
      Q(Q(Q(ie(this), b, "key", this.lf), a, "focus", this.Cg), a, "blur", this.jf)
    }
  }
};
function Xf(a, b) {
  var c = ie(a), d = a.a();
  b ? (Q(Q(Q(Q(c, d, "mouseover", a.Rc), d, "mousedown", a.Pc), d, "mouseup", a.mf), d, "mouseout", a.Qc), G && Q(c, d, "dblclick", a.kf)) : (ce(ce(ce(ce(c, d, "mouseover", a.Rc), d, "mousedown", a.Pc), d, "mouseup", a.mf), d, "mouseout", a.Qc), G && ce(c, d, "dblclick", a.kf))
}
o.bb = function() {
  V.c.bb.call(this);
  this.Ab && this.Ab.detach();
  this.Ob && this.isEnabled() && this.m.ld(this, !1)
};
o.b = function() {
  V.c.b.call(this);
  this.Ab && (this.Ab.g(), delete this.Ab);
  delete this.m;
  this.qa = this.ba = k
};
o.jd = function(a) {
  this.m.jd(this.a(), a);
  this.kd(a)
};
o.kd = ba("ba");
o.ff = function() {
  var a = this.ba;
  if(!a) {
    return""
  }
  if(!u(a)) {
    if(t(a)) {
      a = La(a, Vc).join("")
    }else {
      if(zc && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Wc(a, b, !0);
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
o.Kb = function(a) {
  V.c.Kb.call(this, a);
  var b = this.a();
  b && this.m.Kb(b, a)
};
o.hd = function(a) {
  this.zd = a;
  var b = this.a();
  b && this.m.hd(b, a)
};
o.ze = function(a, b) {
  if(b || this.Ob != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.a();
    c && this.m.ze(c, a);
    this.isEnabled() && this.m.ld(this, a);
    this.Ob = a;
    return!0
  }
  return!1
};
o.isEnabled = function() {
  return!(this.l & 1)
};
function Yf(a, b) {
  Zf(a, 2, b) && a.ha(2, b)
}
o.ce = function() {
  return!!(this.l & 4)
};
o.setActive = function(a) {
  Zf(this, 4, a) && this.ha(4, a)
};
o.we = function(a) {
  Zf(this, 8, a) && this.ha(8, a)
};
o.ha = function(a, b) {
  if(this.ua & a && b != !!(this.l & a)) {
    this.m.ha(this, a, b), this.l = b ? this.l | a : this.l & ~a
  }
};
function W(a, b) {
  return!!(a.Me & b) && !!(a.ua & b)
}
function Zf(a, b, c) {
  return!!(a.ua & b) && !!(a.l & b) != c && (!(a.hh & b) || a.dispatchEvent(ge(b, c))) && !a.ya
}
o.Rc = function(a) {
  !$f(a, this.a()) && this.dispatchEvent("enter") && this.isEnabled() && W(this, 2) && Yf(this, !0)
};
o.Qc = function(a) {
  !$f(a, this.a()) && this.dispatchEvent("leave") && (W(this, 4) && this.setActive(!1), W(this, 2) && Yf(this, !1))
};
function $f(a, b) {
  return!!a.relatedTarget && Qc(b, a.relatedTarget)
}
o.Pc = function(a) {
  if(this.isEnabled() && (W(this, 2) && Yf(this, !0), qd(a) && (!H || !oc || !a.ctrlKey))) {
    W(this, 4) && this.setActive(!0), this.m.sf(this) && this.fb().focus()
  }
  !this.zd && qd(a) && (!H || !oc || !a.ctrlKey) && a.preventDefault()
};
o.mf = function(a) {
  this.isEnabled() && (W(this, 2) && Yf(this, !0), this.ce() && this.kb(a) && W(this, 4) && this.setActive(!1))
};
o.kf = function(a) {
  this.isEnabled() && this.kb(a)
};
o.kb = function(a) {
  if(W(this, 16)) {
    var b = !(this.l & 16);
    Zf(this, 16, b) && this.ha(16, b)
  }
  W(this, 8) && this.we(!0);
  W(this, 64) && (b = !(this.l & 64), Zf(this, 64, b) && this.ha(64, b));
  b = new kd("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, f = 0;d = c[f];f++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
o.Cg = function() {
  W(this, 32) && Zf(this, 32, !0) && this.ha(32, !0)
};
o.jf = function() {
  W(this, 4) && this.setActive(!1);
  W(this, 32) && Zf(this, 32, !1) && this.ha(32, !1)
};
o.lf = function(a) {
  if(this.Ob && this.isEnabled() && this.Xd(a)) {
    return a.preventDefault(), a.stopPropagation(), !0
  }
  return!1
};
o.Xd = function(a) {
  return a.keyCode == 13 && this.kb(a)
};
w(V) || e(Error("Invalid component class " + V));
w(Hf) || e(Error("Invalid renderer class " + Hf));
var ag = x(V);
Vf[ag] = Hf;
Uf("goog-control", function() {
  return new V(k)
});
function bg() {
}
C(bg, Mf);
ea(bg);
o = bg.prototype;
o.Jc = aa();
o.i = function(a) {
  a.t && !1 != a.Yd && Xf(a, !1);
  a.Yd = !1;
  a.Me &= -256;
  a.t && a.l & 32 && e(Error("Component already rendered"));
  a.l & 32 && a.ha(32, !1);
  a.ua &= -33;
  return a.Da().i("button", {"class":Jf(this, a).join(" "), disabled:!a.isEnabled(), title:a.Mc() || "", value:a.Nc() || ""}, a.ff() || "")
};
o.qf = function(a) {
  Q(ie(a), a.a(), "click", a.kb)
};
o.hd = s;
o.Kb = s;
o.sf = function(a) {
  return a.isEnabled()
};
o.ld = s;
o.ha = function(a, b, c) {
  bg.c.ha.call(this, a, b, c);
  if((a = a.a()) && b == 1) {
    a.disabled = c
  }
};
o.Nc = function(a) {
  return a.value
};
o.od = function(a, b) {
  if(a) {
    a.value = b
  }
};
o.uc = s;
function cg(a, b, c) {
  V.call(this, a, b || bg.Ma(), c)
}
C(cg, V);
o = cg.prototype;
o.Nc = l("gg");
o.od = function(a) {
  this.gg = a;
  this.m.od(this.a(), a)
};
o.Mc = l("bg");
o.ye = function(a) {
  this.bg = a;
  this.m.ye(this.a(), a)
};
o.b = function() {
  cg.c.b.call(this);
  delete this.gg;
  delete this.bg
};
o.O = function() {
  cg.c.O.call(this);
  if(this.ua & 32) {
    var a = this.fb();
    a && Q(ie(this), a, "keyup", this.Xd)
  }
};
o.Xd = function(a) {
  if(a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup") {
    return this.kb(a)
  }
  return a.keyCode == 32
};
Uf("goog-button", function() {
  return new cg(k)
});
function dg() {
}
C(dg, Mf);
ea(dg);
dg.prototype.i = function(a) {
  var b = {"class":"goog-inline-block " + Jf(this, a).join(" "), title:a.Mc() || ""};
  return a.Da().i("div", b, eg(this, a.ba, a.Da()))
};
dg.prototype.Jc = m("button");
dg.prototype.Zb = function(a) {
  return a && a.firstChild.firstChild
};
function eg(a, b, c) {
  return c.i("div", "goog-inline-block " + (a.u() + "-outer-box"), c.i("div", "goog-inline-block " + (a.u() + "-inner-box"), b))
}
dg.prototype.u = m("goog-custom-button");
function fg(a, b, c) {
  cg.call(this, a, b || dg.Ma(), c)
}
C(fg, cg);
Uf("goog-custom-button", function() {
  return new fg(k)
});
function gg() {
}
C(gg, Hf);
ea(gg);
var hg = 0;
gg.prototype.i = function(a) {
  var b = Jf(this, a);
  return a.Da().i("div", b ? b.join(" ") : k, ig(this, a.ba, a.gf(), a.Da()))
};
function ig(a, b, c, d) {
  for(var f = [], g = 0, h = 0;g < c.height;g++) {
    for(var j = [], n = 0;n < c.width;n++) {
      var p = b && b[h++];
      j.push(jg(a, p, d))
    }
    f.push(d.i("tr", a.u() + "-row", j))
  }
  return a.Ue(f, d)
}
gg.prototype.Ue = function(a, b) {
  var c = b.i("table", this.u() + "-table", b.i("tbody", this.u() + "-body", a));
  c.cellSpacing = 0;
  c.cellPadding = 0;
  Gf(c, "grid");
  return c
};
function jg(a, b, c) {
  a = c.i("td", {"class":a.u() + "-cell", id:a.u() + "-cell-" + hg++}, b);
  Gf(a, "gridcell");
  return a
}
gg.prototype.jd = function(a, b) {
  if(a) {
    var c = Gc(document, "tbody", this.u() + "-body", a)[0];
    if(c) {
      var d = 0;
      Ka(c.rows, function(a) {
        Ka(a.cells, function(a) {
          Oc(a);
          if(b) {
            var c = b[d++];
            c && a.appendChild(c)
          }
        })
      });
      if(d < b.length) {
        for(var f = [], g = Dc(a), h = c.rows[0].cells.length;d < b.length;) {
          var j = b[d++];
          f.push(jg(this, j, g));
          if(f.length == h) {
            j = g.i("tr", this.u() + "-row", f), c.appendChild(j), f.length = 0
          }
        }
        if(f.length > 0) {
          for(;f.length < h;) {
            f.push(jg(this, "", g))
          }
          j = g.i("tr", this.u() + "-row", f);
          c.appendChild(j)
        }
      }
    }
    dd(a, !0, lc)
  }
};
function kg(a, b, c) {
  for(b = b.a();c && c.nodeType == 1 && c != b;) {
    if(c.tagName == "TD" && Oa(Ac(c), a.u() + "-cell")) {
      return c.firstChild
    }
    c = c.parentNode
  }
  return k
}
function lg(a, b, c, d) {
  if(c) {
    c = c.parentNode, a = a.u() + "-cell-hover", d ? Bc(c, a) : Cc(c, a), b.a().firstChild.setAttribute("aria-activedescendent", c.id)
  }
}
gg.prototype.u = m("goog-palette");
function mg(a) {
  L.call(this);
  this.w = [];
  ng(this, a)
}
C(mg, de);
o = mg.prototype;
o.Va = k;
o.se = k;
function ng(a, b) {
  b && (Ka(b, function(a) {
    this.oc(a, !1)
  }, a), Ta(a.w, b))
}
o.Ud = l("Va");
o.nd = function(a) {
  if(a != this.Va) {
    this.oc(this.Va, !1), this.Va = a, this.oc(a, !0)
  }
  this.dispatchEvent("select")
};
o.Td = function() {
  return this.Va ? Ja(this.w, this.Va) : -1
};
o.xe = function(a) {
  this.nd(this.w[a] || k)
};
o.clear = function() {
  Pa(this.w);
  this.Va = k
};
o.b = function() {
  mg.c.b.call(this);
  delete this.w;
  this.Va = k
};
o.oc = function(a, b) {
  a && (typeof this.se == "function" ? this.se(a, b) : typeof a.we == "function" && a.we(b))
};
function og(a, b, c) {
  V.call(this, a, b || gg.Ma(), c)
}
C(og, V);
o = og.prototype;
o.v = k;
o.hb = -1;
o.H = k;
o.b = function() {
  og.c.b.call(this);
  if(this.H) {
    this.H.g(), this.H = k
  }
  this.v = k
};
o.kd = function(a) {
  og.c.kd.call(this, a);
  pg(this);
  this.H ? (this.H.clear(), ng(this.H, a)) : (this.H = new mg(a), this.H.se = y(this.oc, this), Q(ie(this), this.H, "select", this.Gg));
  this.hb = -1
};
o.ff = m(k);
o.Rc = function(a) {
  og.c.Rc.call(this, a);
  var b = kg(this.m, this, a.target);
  if((!b || !a.relatedTarget || !Qc(b, a.relatedTarget)) && b != qg(this)) {
    a = this.ba, rg(this, a ? Ja(a, b) : -1)
  }
};
o.Qc = function(a) {
  og.c.Qc.call(this, a);
  var b = kg(this.m, this, a.target);
  (!b || !a.relatedTarget || !Qc(b, a.relatedTarget)) && b == qg(this) && lg(this.m, this, b, !1)
};
o.Pc = function(a) {
  og.c.Pc.call(this, a);
  if(this.ce() && (a = kg(this.m, this, a.target), a != qg(this))) {
    var b = this.ba;
    rg(this, b ? Ja(b, a) : -1)
  }
};
o.kb = function() {
  var a = qg(this);
  if(a) {
    return this.nd(a), this.dispatchEvent("action")
  }
  return!1
};
o.lf = function(a) {
  var b = this.ba, b = b ? b.length : 0, c = this.v.width;
  if(b == 0 || !this.isEnabled()) {
    return!1
  }
  if(a.keyCode == 13 || a.keyCode == 32) {
    return this.kb(a)
  }
  if(a.keyCode == 36) {
    return rg(this, 0), !0
  }else {
    if(a.keyCode == 35) {
      return rg(this, b - 1), !0
    }
  }
  var d = this.hb < 0 ? this.Td() : this.hb;
  switch(a.keyCode) {
    case 37:
      d == -1 && (d = b);
      if(d > 0) {
        return rg(this, d - 1), a.preventDefault(), !0
      }
      break;
    case 39:
      if(d < b - 1) {
        return rg(this, d + 1), a.preventDefault(), !0
      }
      break;
    case 38:
      d == -1 && (d = b + c - 1);
      if(d >= c) {
        return rg(this, d - c), a.preventDefault(), !0
      }
      break;
    case 40:
      if(d == -1 && (d = -c), d < b - c) {
        return rg(this, d + c), a.preventDefault(), !0
      }
  }
  return!1
};
o.Gg = aa();
o.gf = l("v");
o.$ = function(a, b) {
  this.a() && e(Error("Component already rendered"));
  this.v = ka(a) ? new J(a, b) : a;
  pg(this)
};
function qg(a) {
  var b = a.ba;
  return b && b[a.hb]
}
function rg(a, b) {
  if(b != a.hb) {
    sg(a, a.hb, !1), a.hb = b, sg(a, b, !0)
  }
}
o.Td = function() {
  return this.H ? this.H.Td() : -1
};
o.Ud = function() {
  return this.H ? this.H.Ud() : k
};
o.xe = function(a) {
  this.H && this.H.xe(a)
};
o.nd = function(a) {
  this.H && this.H.nd(a)
};
function sg(a, b, c) {
  if(a.a()) {
    var d = a.ba;
    d && b >= 0 && b < d.length && lg(a.m, a, d[b], c)
  }
}
o.oc = function(a, b) {
  if(this.a() && a) {
    var c = a.parentNode, d = this.m.u() + "-cell-selected";
    b ? Bc(c, d) : Cc(c, d)
  }
};
function pg(a) {
  var b = a.ba;
  if(b) {
    if(a.v && a.v.width) {
      if(b = Math.ceil(b.length / a.v.width), !ka(a.v.height) || a.v.height < b) {
        a.v.height = b
      }
    }else {
      b = Math.ceil(Math.sqrt(b.length)), a.v = new J(b, b)
    }
  }else {
    a.v = new J(0, 0)
  }
}
;function tg(a, b, c) {
  this.Bc = a || [];
  og.call(this, k, b || gg.Ma(), c);
  this.Bc = this.Bc;
  this.bd = k;
  this.jd(ug(this))
}
C(tg, og);
tg.prototype.bd = k;
function vg(a) {
  var b = wg(xg);
  if(!a.bd) {
    a.bd = La(a.Bc, function(a) {
      return wg(a)
    })
  }
  a.xe(b ? Ja(a.bd, b) : -1)
}
function ug(a) {
  return La(a.Bc, function(a) {
    var c = this.Da().i("div", {"class":this.m.u() + "-colorswatch", style:"background-color:" + a});
    c.title = a.charAt(0) == "#" ? "RGB (" + eb(a).join(", ") + ")" : a;
    return c
  }, a)
}
function wg(a) {
  if(a) {
    try {
      return Za(a).Tc
    }catch(b) {
    }
  }
  return k
}
;var yg = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function zg(a, b) {
  var c = a.match(yg), d = b.match(yg);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Ag(a, b) {
  var c;
  a instanceof Ag ? (this.Jb(b == k ? a.ta : b), Bg(this, a.Ga), Cg(this, a.vc), Dg(this, a.ab), Eg(this, a.Gb), this.Wa(a.R), Fg(this, a.ga.J()), Gg(this, a.Yb)) : a && (c = String(a).match(yg)) ? (this.Jb(!!b), Bg(this, c[1] || "", !0), Cg(this, c[2] || "", !0), Dg(this, c[3] || "", !0), Eg(this, c[4]), this.Wa(c[5] || "", !0), Fg(this, c[6] || "", !0), Gg(this, c[7] || "", !0)) : (this.Jb(!!b), this.ga = new Hg(k, this, this.ta))
}
o = Ag.prototype;
o.Ga = "";
o.vc = "";
o.ab = "";
o.Gb = k;
o.R = "";
o.Yb = "";
o.Kg = !1;
o.ta = !1;
o.toString = function() {
  if(this.oa) {
    return this.oa
  }
  var a = [];
  this.Ga && a.push(Ig(this.Ga, Jg), ":");
  if(this.ab) {
    a.push("//");
    this.vc && a.push(Ig(this.vc, Jg), "@");
    var b;
    b = this.ab;
    b = u(b) ? encodeURIComponent(b) : k;
    a.push(b);
    this.Gb != k && a.push(":", String(this.Gb))
  }
  this.R && (this.ab && this.R.charAt(0) != "/" && a.push("/"), a.push(Ig(this.R, Kg)));
  (b = String(this.ga)) && a.push("?", b);
  this.Yb && a.push("#", Ig(this.Yb, Lg));
  return this.oa = a.join("")
};
o.J = function() {
  var a = this.Ga, b = this.vc, c = this.ab, d = this.Gb, f = this.R, g = this.ga.J(), h = this.Yb, j = new Ag(k, this.ta);
  a && Bg(j, a);
  b && Cg(j, b);
  c && Dg(j, c);
  d && Eg(j, d);
  f && j.Wa(f);
  g && Fg(j, g);
  h && Gg(j, h);
  return j
};
function Bg(a, b, c) {
  Mg(a);
  delete a.oa;
  a.Ga = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.Ga) {
    a.Ga = a.Ga.replace(/:$/, "")
  }
}
function Cg(a, b, c) {
  Mg(a);
  delete a.oa;
  a.vc = c ? b ? decodeURIComponent(b) : "" : b
}
function Dg(a, b, c) {
  Mg(a);
  delete a.oa;
  a.ab = c ? b ? decodeURIComponent(b) : "" : b
}
function Eg(a, b) {
  Mg(a);
  delete a.oa;
  b ? (b = Number(b), (isNaN(b) || b < 0) && e(Error("Bad port number " + b)), a.Gb = b) : a.Gb = k
}
o.Wa = function(a, b) {
  Mg(this);
  delete this.oa;
  this.R = b ? a ? decodeURIComponent(a) : "" : a;
  return this
};
function Fg(a, b, c) {
  Mg(a);
  delete a.oa;
  b instanceof Hg ? (a.ga = b, a.ga.Ie = a, a.ga.Jb(a.ta)) : (c || (b = Ig(b, Ng)), a.ga = new Hg(b, a, a.ta))
}
function Gg(a, b, c) {
  Mg(a);
  delete a.oa;
  a.Yb = c ? b ? decodeURIComponent(b) : "" : b
}
function Mg(a) {
  a.Kg && e(Error("Tried to modify a read-only Uri"))
}
o.Jb = function(a) {
  this.ta = a;
  this.ga && this.ga.Jb(a);
  return this
};
var Og = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Ig(a, b) {
  var c = k;
  u(a) && (c = a, Og.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, Pg)));
  return c
}
function Pg(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Jg = /[#\/\?@]/g, Kg = /[\#\?]/g, Ng = /[\#\?@]/g, Lg = /#/g;
function Hg(a, b, c) {
  this.Aa = a || k;
  this.Ie = b || k;
  this.ta = !!c
}
function Qg(a) {
  if(!a.o && (a.o = new zb, a.Aa)) {
    for(var b = a.Aa.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      d >= 0 ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = Rg(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
o = Hg.prototype;
o.o = k;
o.f = k;
o.T = function() {
  Qg(this);
  return this.f
};
o.add = function(a, b) {
  Qg(this);
  Sg(this);
  a = Rg(this, a);
  if(this.aa(a)) {
    var c = this.o.get(a);
    t(c) ? c.push(b) : this.o.set(a, [c, b])
  }else {
    this.o.set(a, b)
  }
  this.f++;
  return this
};
o.remove = function(a) {
  Qg(this);
  a = Rg(this, a);
  if(this.o.aa(a)) {
    Sg(this);
    var b = this.o.get(a);
    t(b) ? this.f -= b.length : this.f--;
    return this.o.remove(a)
  }
  return!1
};
o.clear = function() {
  Sg(this);
  this.o && this.o.clear();
  this.f = 0
};
o.Oa = function() {
  Qg(this);
  return this.f == 0
};
o.aa = function(a) {
  Qg(this);
  a = Rg(this, a);
  return this.o.aa(a)
};
o.Dc = function(a) {
  var b = this.V();
  return Oa(b, a)
};
o.Ea = function() {
  Qg(this);
  for(var a = this.o.V(), b = this.o.Ea(), c = [], d = 0;d < b.length;d++) {
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
o.V = function(a) {
  Qg(this);
  if(a) {
    if(a = Rg(this, a), this.aa(a)) {
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
    for(var b = this.o.V(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      t(d) ? Ta(a, d) : a.push(d)
    }
  }
  return a
};
o.set = function(a, b) {
  Qg(this);
  Sg(this);
  a = Rg(this, a);
  if(this.aa(a)) {
    var c = this.o.get(a);
    t(c) ? this.f -= c.length : this.f--
  }
  this.o.set(a, b);
  this.f++;
  return this
};
o.get = function(a, b) {
  Qg(this);
  a = Rg(this, a);
  if(this.aa(a)) {
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
    var f = c[d], g = ua(f), f = this.o.get(f);
    if(t(f)) {
      for(var h = 0;h < f.length;h++) {
        b > 0 && a.push("&"), a.push(g), f[h] !== "" && a.push("=", ua(f[h])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(g), f !== "" && a.push("=", ua(f)), b++
    }
  }
  return this.Aa = a.join("")
};
function Sg(a) {
  delete a.Id;
  delete a.Aa;
  a.Ie && delete a.Ie.oa
}
o.J = function() {
  var a = new Hg;
  if(this.Id) {
    a.Id = this.Id
  }
  if(this.Aa) {
    a.Aa = this.Aa
  }
  if(this.o) {
    a.o = this.o.J()
  }
  return a
};
function Rg(a, b) {
  var c = String(b);
  a.ta && (c = c.toLowerCase());
  return c
}
o.Jb = function(a) {
  a && !this.ta && (Qg(this), Sg(this), xb(this.o, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ta = a
};
o.extend = function() {
  for(var a = 0;a < arguments.length;a++) {
    xb(arguments[a], function(a, c) {
      this.add(c, a)
    }, this)
  }
};
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Tg(a, b) {
  this.zc = [];
  this.Oe = a;
  this.Ye = b || k
}
o = Tg.prototype;
o.cb = !1;
o.ac = !1;
o.hc = 0;
o.Ae = !1;
o.qg = !1;
o.cancel = function() {
  if(this.cb) {
    this.lc instanceof Tg && this.lc.cancel()
  }else {
    if(this.Oe ? this.Oe.call(this.Ye, this) : this.Ae = !0, !this.cb) {
      var a = new Ug(this);
      Vg(this);
      Wg(this, !1, a)
    }
  }
};
o.Re = function(a, b) {
  Wg(this, a, b);
  this.hc--;
  this.hc == 0 && this.cb && Xg(this)
};
function Wg(a, b, c) {
  a.cb = !0;
  a.lc = c;
  a.ac = !b;
  Xg(a)
}
function Vg(a) {
  if(a.cb) {
    a.Ae || e(new Yg(a)), a.Ae = !1
  }
}
function Zg(a, b) {
  Vg(a);
  Wg(a, !0, b)
}
function $g(a, b) {
  ah(a, b, k, i)
}
function ah(a, b, c, d) {
  a.zc.push([b, c, d]);
  a.cb && Xg(a)
}
function bh(a, b) {
  ah(a, b, b, i)
}
function ch(a) {
  return Ma(a.zc, function(a) {
    return w(a[1])
  })
}
function Xg(a) {
  a.He && a.cb && ch(a) && (q.clearTimeout(a.He), delete a.He);
  for(var b = a.lc, c = !1, d = !1;a.zc.length && a.hc == 0;) {
    var f = a.zc.shift(), g = f[0], h = f[1], f = f[2];
    if(g = a.ac ? h : g) {
      try {
        var j = g.call(f || a.Ye, b);
        if(ga(j)) {
          a.ac = a.ac && (j == b || j instanceof Error), a.lc = b = j
        }
        b instanceof Tg && (d = !0, a.hc++)
      }catch(n) {
        b = n, a.ac = !0, ch(a) || (c = !0)
      }
    }
  }
  a.lc = b;
  if(d && a.hc) {
    ah(b, y(a.Re, a, !0), y(a.Re, a, !1)), b.qg = !0
  }
  if(c) {
    a.He = q.setTimeout(function() {
      e(b)
    }, 0)
  }
}
function dh(a) {
  var b = new Tg;
  Zg(b, a);
  return b
}
function eh(a) {
  var b = new Tg;
  Vg(b);
  Wg(b, !1, a);
  return b
}
function Yg(a) {
  qa.call(this);
  this.tg = a
}
C(Yg, qa);
Yg.prototype.message = "Already called";
function Ug(a) {
  qa.call(this);
  this.tg = a
}
C(Ug, qa);
Ug.prototype.message = "Deferred was cancelled";
function fh() {
  return!0
}
;function gh(a) {
  this.L = a;
  this.Hc = [];
  this.cf = [];
  this.pg = y(this.mh, this)
}
gh.prototype.na = k;
function hh(a, b, c, d) {
  a.Hc.push([b, c, d]);
  if(a.na == k) {
    a.na = a.L.setTimeout(a.pg, 0)
  }
}
gh.prototype.mh = function() {
  this.na = k;
  var a = this.Hc;
  this.Hc = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], f = c[1], c = c[2];
    try {
      d.apply(f, c)
    }catch(g) {
      this.L.setTimeout(function() {
        e(g)
      }, 0)
    }
  }
  if(this.Hc.length == 0) {
    a = this.cf;
    this.cf = [];
    for(b = 0;b < a.length;b++) {
      Zg(a[b], k)
    }
  }
};
new gh(q.window);
function ih() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ A()).toString(36)
}
function jh(a) {
  return a.substr(0, a.length - 1)
}
var kh = /^(0|[1-9]\d*)$/, lh = /^(0|\-?[1-9]\d*)$/;
function mh(a) {
  var b = nh;
  if(kh.test(a) && (a = parseInt(a, 10), a <= b)) {
    return a
  }
  return k
}
;function oh() {
}
oh.prototype.yc = k;
function ph() {
  return qh(rh)
}
var rh;
function sh() {
}
C(sh, oh);
function qh(a) {
  return(a = th(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function uh(a) {
  var b = {};
  th(a) && (b[0] = !0, b[1] = !0);
  return b
}
sh.prototype.$d = k;
function th(a) {
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
rh = new sh;
function vh() {
  if(lc) {
    this.Za = {}, this.vd = {}, this.rd = []
  }
}
vh.prototype.e = F("goog.net.xhrMonitor");
vh.prototype.Gc = lc;
function wh(a) {
  var b = xh;
  b.Gc && b.rd.push(u(a) ? a : ja(a) ? x(a) : "")
}
function yh() {
  var a = xh;
  a.Gc && zh(a, a.rd.pop())
}
function Ah(a) {
  var b = xh;
  if(b.Gc) {
    for(var a = x(a), c = 0;c < b.rd.length;c++) {
      var d = b.rd[c];
      Bh(b.Za, d, a);
      Bh(b.vd, a, d)
    }
  }
}
function zh(a, b) {
  var c = a.vd[b], d = a.Za[b];
  c && d && Ka(c, function(a) {
    Ka(d, function(b) {
      Bh(this.Za, a, b);
      Bh(this.vd, b, a)
    }, this)
  }, a)
}
function Bh(a, b, c) {
  a[b] || (a[b] = []);
  Oa(a[b], c) || a[b].push(c)
}
var xh = new vh;
function Ch(a) {
  L.call(this);
  this.headers = new zb;
  this.Pb = a || k
}
C(Ch, de);
Ch.prototype.e = F("goog.net.XhrIo");
var Dh = /^https?:?$/i;
o = Ch.prototype;
o.Ia = !1;
o.j = k;
o.ud = k;
o.$c = "";
o.Mg = "";
o.ec = 0;
o.Yc = "";
o.Md = !1;
o.Uc = !1;
o.ae = !1;
o.ib = !1;
o.Fe = 0;
o.ob = k;
o.Rf = "";
o.oh = !1;
o.send = function(a, b, c, d) {
  this.j && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.$c = a;
  this.Yc = "";
  this.ec = 0;
  this.Mg = b;
  this.Md = !1;
  this.Ia = !0;
  this.j = this.Pb ? qh(this.Pb) : new ph;
  this.ud = this.Pb ? this.Pb.yc || (this.Pb.yc = uh(this.Pb)) : rh.yc || (rh.yc = uh(rh));
  Ah(this.j);
  this.j.onreadystatechange = y(this.Hf, this);
  try {
    this.ae = !0, this.j.open(b, a, !0), this.ae = !1
  }catch(f) {
    Eh(this, f);
    return
  }
  var a = c || "", g = this.headers.J();
  d && xb(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.aa("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  xb(g, function(a, b) {
    this.j.setRequestHeader(b, a)
  }, this);
  if(this.Rf) {
    this.j.responseType = this.Rf
  }
  if("withCredentials" in this.j) {
    this.j.withCredentials = this.oh
  }
  try {
    if(this.ob) {
      Fe.clearTimeout(this.ob), this.ob = k
    }
    if(this.Fe > 0) {
      this.ob = Fe.setTimeout(y(this.kh, this), this.Fe)
    }
    this.Uc = !0;
    this.j.send(a);
    this.Uc = !1
  }catch(h) {
    Eh(this, h)
  }
};
o.dispatchEvent = function(a) {
  if(this.j) {
    wh(this.j);
    try {
      return Ch.c.dispatchEvent.call(this, a)
    }finally {
      yh()
    }
  }else {
    return Ch.c.dispatchEvent.call(this, a)
  }
};
o.kh = function() {
  if(typeof ca != "undefined" && this.j) {
    this.Yc = "Timed out after " + this.Fe + "ms, aborting", this.ec = 8, this.dispatchEvent("timeout"), this.abort(8)
  }
};
function Eh(a, b) {
  a.Ia = !1;
  if(a.j) {
    a.ib = !0, a.j.abort(), a.ib = !1
  }
  a.Yc = b;
  a.ec = 5;
  Fh(a);
  Gh(a)
}
function Fh(a) {
  if(!a.Md) {
    a.Md = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
o.abort = function(a) {
  if(this.j && this.Ia) {
    this.Ia = !1, this.ib = !0, this.j.abort(), this.ib = !1, this.ec = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Gh(this)
  }
};
o.b = function() {
  if(this.j) {
    if(this.Ia) {
      this.Ia = !1, this.ib = !0, this.j.abort(), this.ib = !1
    }
    Gh(this, !0)
  }
  Ch.c.b.call(this)
};
o.Hf = function() {
  !this.ae && !this.Uc && !this.ib ? this.Tg() : Hh(this)
};
o.Tg = function() {
  Hh(this)
};
function Hh(a) {
  if(a.Ia && typeof ca != "undefined" && (!a.ud[1] || !(a.Na() == 4 && Ih(a) == 2))) {
    if(a.Uc && a.Na() == 4) {
      Fe.setTimeout(y(a.Hf, a), 0)
    }else {
      if(a.dispatchEvent("readystatechange"), a.Na() == 4) {
        a.Ia = !1;
        var b;
        a: {
          switch(Ih(a)) {
            case 0:
              b = (b = u(a.$c) ? a.$c.match(yg)[1] || k : a.$c.Ga) ? Dh.test(b) : self.location ? Dh.test(self.location.protocol) : !0;
              b = !b;
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
          a.ec = 6;
          var c;
          try {
            c = a.Na() > 2 ? a.j.statusText : ""
          }catch(d) {
            c = ""
          }
          a.Yc = c + " [" + Ih(a) + "]";
          Fh(a)
        }
        Gh(a)
      }
    }
  }
}
function Gh(a, b) {
  if(a.j) {
    var c = a.j, d = a.ud[0] ? s : k;
    a.j = k;
    a.ud = k;
    if(a.ob) {
      Fe.clearTimeout(a.ob), a.ob = k
    }
    b || (wh(c), a.dispatchEvent("ready"), yh());
    var f = xh;
    if(f.Gc) {
      var g = x(c);
      delete f.vd[g];
      for(var h in f.Za) {
        Qa(f.Za[h], g), f.Za[h].length == 0 && delete f.Za[h]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(j) {
      Xb(a.e, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
o.ce = function() {
  return!!this.j
};
o.Na = function() {
  return this.j ? this.j.readyState : 0
};
function Ih(a) {
  try {
    return a.Na() > 2 ? a.j.status : -1
  }catch(b) {
    return E(a.e, "Can not get status: " + b.message), -1
  }
}
o.getResponseHeader = function(a) {
  return this.j && this.Na() == 4 ? this.j.getResponseHeader(a) : i
};
var Jh;
Jh = !1;
var Kh = hc();
Kh && (Kh.indexOf("Firefox") != -1 || Kh.indexOf("Camino") != -1 || Kh.indexOf("iPhone") != -1 || Kh.indexOf("iPod") != -1 || Kh.indexOf("iPad") != -1 || Kh.indexOf("Android") != -1 || Kh.indexOf("Chrome") != -1 && (Jh = !0));
var Lh = Jh;
function Mh(a) {
  return w(a) || typeof a == "object" && w(a.call) && w(a.apply)
}
;function Nh(a, b, c) {
  var d = Ja(c, a);
  if(d != -1) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = fa(a);
    if(d == "boolean" || d == "number" || d == "null" || d == "undefined") {
      b.push(String(a))
    }else {
      if(d == "string") {
        cf(a, b)
      }else {
        if(Mh(a.C)) {
          a.C(b, c)
        }else {
          if(Mh(a.kg)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if(d == "array") {
                d = a.length;
                b.push("[");
                for(var f = "", g = 0;g < d;g++) {
                  b.push(f), Nh(a[g], b, c), f = ", "
                }
                b.push("]")
              }else {
                if(d == "object") {
                  if(ia(a) && typeof a.valueOf == "function") {
                    b.push("new Date(", String(a.valueOf()), ")")
                  }else {
                    for(var d = pb(a).concat(qb), f = {}, h = g = 0;h < d.length;) {
                      var j = d[h++], n = ja(j) ? "o" + x(j) : (typeof j).charAt(0) + j;
                      Object.prototype.hasOwnProperty.call(f, n) || (f[n] = !0, d[g++] = j)
                    }
                    d.length = g;
                    b.push("{");
                    f = "";
                    for(h = 0;h < d.length;h++) {
                      g = d[h], Object.prototype.hasOwnProperty.call(a, g) && (j = a[g], b.push(f), cf(g, b), b.push(": "), Nh(j, b, c), f = ", ")
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
function X(a, b, c) {
  c || (c = []);
  Nh(a, b, c)
}
function Y(a) {
  var b = [];
  X(a, b, i);
  return b.join("")
}
;function Oh(a) {
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
;function Ph(a, b) {
  this.qb = a;
  this.mb = b
}
Ph.prototype.n = function(a) {
  return a instanceof Ph && this.qb == a.qb && this.mb.join(",") == a.mb
};
Ph.prototype.C = function(a, b) {
  a.push("new SACK(", String(this.qb), ", ");
  X(this.mb, a, b);
  a.push(")")
};
function Qh() {
  this.w = new zb
}
o = Qh.prototype;
o.ub = -1;
o.v = 0;
o.append = function(a) {
  var b = Oh(a);
  this.w.set(this.ub + 1, [a, b]);
  this.ub += 1;
  this.v += b
};
o.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
o.C = function(a) {
  a.push("<Queue with ", String(this.w.T()), " item(s), counter=#", String(this.ub), ", size=", String(this.v), ">")
};
function Rh(a) {
  Ab(a.w);
  Wa(a.w.h);
  return a.w.h
}
function Sh() {
  this.Ya = new zb
}
Sh.prototype.Bb = -1;
Sh.prototype.v = 0;
function Th(a) {
  var b = a.Ya.Ea();
  Wa(b);
  return new Ph(a.Bb, b)
}
var Uh = {};
var nh = Math.pow(2, 53);
function Vh(a, b, c) {
  L.call(this);
  this.K = b;
  this.la = a;
  this.Fd = c
}
C(Vh, L);
o = Vh.prototype;
o.e = F("cw.net.XHRMaster");
o.Ua = -1;
o.he = function(a, b, c) {
  this.Fd.__XHRSlave_makeRequest(this.la, a, b, c)
};
o.Na = l("Ua");
o.le = function(a, b) {
  b != Wh && Xb(this.e, Y(this.la) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Xh(this.K);
  Yh(this.K, a)
};
o.me = function(a) {
  var b = k;
  "Content-Length" in a && (b = mh(a["Content-Length"]));
  a = this.K;
  a.va == Zh && (b == k && (E(a.e, "Expected to receive a valid Content-Length, but did not."), b = 5E5), $h(a, 2E3 + b / 3072 * 1E3))
};
o.ne = function(a) {
  this.Ua = a;
  this.Ua >= 2 && Xh(this.K)
};
o.ke = function() {
  this.K.g()
};
o.b = function() {
  Vh.c.b.call(this);
  delete ai.Fa[this.la];
  this.Fd.__XHRSlave_dispose(this.la);
  delete this.Fd
};
function bi() {
  L.call(this);
  this.Fa = {}
}
o = bi.prototype;
o.e = F("cw.net.XHRMasterTracker");
o.Gd = function(a, b) {
  var c = "_" + ih(), d = new Vh(c, a, b);
  return this.Fa[c] = d
};
o.le = function(a, b, c) {
  var b = Ra(b), d = this.Fa[a];
  d ? d.le(b, c) : Xb(this.e, "onframes_: no master for " + Y(a))
};
o.me = function(a, b) {
  var c = this.Fa[a];
  c ? c.me(b) : Xb(this.e, "ongotheaders_: no master for " + Y(a))
};
o.ne = function(a, b) {
  var c = this.Fa[a];
  c ? c.ne(b) : Xb(this.e, "onreadystatechange_: no master for " + Y(a))
};
o.ke = function(a) {
  var b = this.Fa[a];
  b ? (delete this.Fa[b.la], b.ke()) : Xb(this.e, "oncomplete_: no master for " + Y(a))
};
o.b = function() {
  bi.c.b.call(this);
  for(var a = ob(this.Fa);a.length;) {
    a.pop().g()
  }
  delete this.Fa
};
var ai = new bi;
q.__XHRMaster_onframes = y(ai.le, ai);
q.__XHRMaster_oncomplete = y(ai.ke, ai);
q.__XHRMaster_ongotheaders = y(ai.me, ai);
q.__XHRMaster_onreadystatechange = y(ai.ne, ai);
function ci() {
  di.info("Waiting for XDRFrames (may take a while)...");
  var a = new Tg, b = q.__XDRSetup.done.length, c;
  q.__XDRSetup.done = {push:function() {
    b += 1;
    c = 2 - b;
    c || (di.info("Got XDRFrames after waiting."), Zg(a, k))
  }};
  c = 2 - b;
  c || (di.info("Already had all XDRFrames."), Zg(a, k));
  return a
}
var di = F("cw.net.waitForXDRFrames");
function ei(a, b) {
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
        a.push('<property id="', d, '">'), ei(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if(typeof b.getFullYear == "function") {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && fa(b[c]) != "function" && (a.push('<property id="', wa(c), '">'), ei(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function fi(a) {
  var b = ['<invoke name="', a, '" returntype="javascript">'], c = b, d = arguments;
  c.push("<arguments>");
  for(var f = d.length, g = 1;g < f;g++) {
    ei(c, d[g])
  }
  c.push("</arguments>");
  b.push("</invoke>");
  return b.join("")
}
;function gi(a, b) {
  L.call(this);
  this.P = "_" + ih();
  this.sd = a;
  this.Sa = b;
  this.Xa = a.Xa
}
C(gi, L);
o = gi.prototype;
o.jb = !0;
o.Ec = !1;
o.e = F("cw.net.FlashSocket");
o.C = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.P);
  a.push("'>")
};
function hi(a, b, c) {
  b == "frames" ? (a = a.Sa, Xh(a.K), Yh(a.K, c)) : b == "stillreceiving" ? Xh(a.Sa.K) : b == "connect" ? (c = a.Sa, c.e.info("onconnect"), Xh(c.K), a = c.Rb, c.Rb = k, a.length && c.pd.xc(a)) : b == "close" ? (a.jb = !1, a.g()) : b == "ioerror" ? (a.jb = !1, b = a.Sa, E(b.e, "onioerror: " + Y(c)), ii(b.K, !1), a.g()) : b == "securityerror" ? (a.jb = !1, b = a.Sa, E(b.e, "onsecurityerror: " + Y(c)), ii(b.K, !1), a.g()) : e(Error("bad event: " + b))
}
o.Ed = function(a, b) {
  try {
    var c = this.Xa.wd(fi("__FC_connect", this.P, a, b, "<int32/>\n"))
  }catch(d) {
    Xb(this.e, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message);
    this.Ec = !0;
    this.jb = !1;
    this.g();
    return
  }
  c != '"OK"' && e(Error("__FC_connect failed? ret: " + c))
};
o.xc = function(a) {
  try {
    var b = this.Xa.wd(fi("__FC_writeFrames", this.P, a))
  }catch(c) {
    Xb(this.e, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message);
    this.Ec = !0;
    this.jb = !1;
    this.g();
    return
  }
  b != '"OK"' && (b == '"no such instance"' ? (E(this.e, "Flash no longer knows of " + this.P + "; disposing."), this.g()) : e(Error("__FC_writeFrames failed? ret: " + b)))
};
o.b = function() {
  this.e.info("in disposeInternal, needToCallClose_=" + this.jb);
  gi.c.b.call(this);
  var a = this.Xa;
  delete this.Xa;
  if(this.jb) {
    try {
      this.e.info("disposeInternal: __FC_close ret: " + a.wd(fi("__FC_close", this.P)))
    }catch(b) {
      Xb(this.e, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Ec = !0
    }
  }
  if(this.Ec) {
    a = this.Sa, E(a.e, "oncrash"), ii(a.K, !0)
  }else {
    this.Sa.onclose()
  }
  delete this.Sa;
  delete this.sd.xb[this.P]
};
function ji(a, b) {
  L.call(this);
  this.I = a;
  this.Xa = b;
  this.xb = {};
  this.Cd = "__FST_" + ih();
  q[this.Cd] = y(this.wg, this);
  var c = b.wd(fi("__FC_setCallbackFunc", this.Cd));
  c != '"OK"' && e(Error("__FC_setCallbackFunc failed? ret: " + c))
}
C(ji, L);
o = ji.prototype;
o.e = F("cw.net.FlashSocketTracker");
o.C = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  X(this.xb, a, b);
  a.push(">")
};
o.Gd = function(a) {
  a = new gi(this, a);
  return this.xb[a.P] = a
};
o.ug = function(a, b, c, d) {
  var f = this.xb[a];
  f ? b == "frames" && d ? (hi(f, "ioerror", "FlashConnector hadError while handling data."), f.g()) : hi(f, b, c) : E(this.e, "Cannot dispatch because we have no instance: " + Y([a, b, c, d]))
};
o.wg = function(a, b, c, d) {
  try {
    hh(this.I, this.ug, this, [a, b, c, d])
  }catch(f) {
    q.window.setTimeout(function() {
      e(f)
    }, 0)
  }
};
o.b = function() {
  ji.c.b.call(this);
  for(var a = ob(this.xb);a.length;) {
    a.pop().g()
  }
  delete this.xb;
  delete this.Xa;
  q[this.Cd] = i
};
function ki(a) {
  L.call(this);
  this.K = a;
  this.Rb = []
}
C(ki, L);
o = ki.prototype;
o.e = F("cw.net.FlashSocketConduit");
o.xc = function(a) {
  !this.Rb ? this.pd.xc(a) : this.Rb.push.apply(this.Rb, a)
};
o.Ed = function(a, b) {
  this.pd.Ed(a, b)
};
o.onclose = function() {
  this.e.info("onclose");
  ii(this.K, !1)
};
o.b = function() {
  this.e.info("in disposeInternal.");
  ki.c.b.call(this);
  this.pd.g();
  delete this.K
};
var li = {kg:m("<cw.eq.Wildcard>")};
function mi(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function ni(a, b, c) {
  var d = fa(a), f = fa(b);
  if(a == li || b == li) {
    return!0
  }else {
    if(a != k && typeof a.n == "function") {
      return c && c.push("running custom equals function on left object"), a.n(b, c)
    }else {
      if(b != k && typeof b.n == "function") {
        return c && c.push("running custom equals function on right object"), b.n(a, c)
      }else {
        if(mi(d) || mi(f)) {
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
                      if(!ni(a[d], b[d], c)) {
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
                if(a.jg == fh && b.jg == fh) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = !1;
                        break a
                      }
                      if(!ni(a[g], b[g], c)) {
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
;function Z(a) {
  qa.call(this, a)
}
C(Z, qa);
Z.prototype.name = "cw.net.InvalidFrame";
function oi() {
  var a = [];
  this.ja(a);
  return a.join("")
}
function pi() {
}
pi.prototype.n = function(a, b) {
  if(!(a instanceof pi)) {
    return!1
  }
  return ni(qi(this), qi(a), b)
};
pi.prototype.C = function(a, b) {
  a.push("<HelloFrame properties=");
  X(qi(this), a, b);
  a.push(">")
};
function qi(a) {
  return[a.Nb, a.Lf, a.of, a.Pf, a.rc, a.Ve, a.De, a.Ef, a.Af, a.ie, a.yf, a.fg, a.Zf, a.ma, a.Zc]
}
pi.prototype.ca = oi;
pi.prototype.ja = function(a) {
  var b = {};
  b.tnum = this.Nb;
  b.ver = this.Lf;
  b.format = this.of;
  b["new"] = this.Pf;
  b.id = this.rc;
  b.cred = this.Ve;
  b.ming = this.De;
  b.pad = this.Ef;
  b.maxb = this.Af;
  if(ga(this.ie)) {
    b.maxt = this.ie
  }
  b.maxia = this.yf;
  b.tcpack = this.fg;
  b.eeds = this.Zf;
  b.sack = this.ma instanceof Ph ? jh((new ri(this.ma)).ca()) : this.ma;
  b.seenack = this.Zc instanceof Ph ? jh((new ri(this.Zc)).ca()) : this.Zc;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new af).nb(b), "H")
};
function si(a) {
  this.Mb = a
}
si.prototype.n = function(a) {
  return a instanceof si && this.Mb == a.Mb
};
si.prototype.C = function(a, b) {
  a.push("new StringFrame(");
  X(this.Mb, a, b);
  a.push(")")
};
si.prototype.ca = oi;
si.prototype.ja = function(a) {
  a.push(this.Mb, " ")
};
function ti(a) {
  this.Cc = a
}
ti.prototype.n = function(a) {
  return a instanceof ti && this.Cc == a.Cc
};
ti.prototype.C = function(a, b) {
  a.push("new CommentFrame(");
  X(this.Cc, a, b);
  a.push(")")
};
ti.prototype.ca = oi;
ti.prototype.ja = function(a) {
  a.push(this.Cc, "^")
};
function ui(a) {
  this.pc = a
}
ui.prototype.n = function(a) {
  return a instanceof ui && this.pc == a.pc
};
ui.prototype.C = function(a) {
  a.push("new SeqNumFrame(", String(this.pc), ")")
};
ui.prototype.ca = oi;
ui.prototype.ja = function(a) {
  a.push(String(this.pc), "N")
};
function vi(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return k
  }
  a: {
    var c = b[1], a = nh;
    if(lh.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
      var g = mh(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Ph(a, c)
}
function ri(a) {
  this.ma = a
}
ri.prototype.n = function(a, b) {
  return a instanceof ri && this.ma.n(a.ma, b)
};
ri.prototype.C = function(a, b) {
  a.push("new SackFrame(");
  X(this.ma, a, b);
  a.push(")")
};
ri.prototype.ca = oi;
ri.prototype.ja = function(a) {
  var b = this.ma;
  a.push(b.mb.join(","), "|", String(b.qb));
  a.push("A")
};
function wi(a) {
  this.fc = a
}
wi.prototype.n = function(a, b) {
  return a instanceof wi && this.fc.n(a.fc, b)
};
wi.prototype.C = function(a, b) {
  a.push("new StreamStatusFrame(");
  X(this.fc, a, b);
  a.push(")")
};
wi.prototype.ca = oi;
wi.prototype.ja = function(a) {
  var b = this.fc;
  a.push(b.mb.join(","), "|", String(b.qb));
  a.push("T")
};
function xi() {
}
xi.prototype.C = function(a) {
  a.push("new StreamCreatedFrame()")
};
xi.prototype.n = function(a) {
  return a instanceof xi
};
xi.prototype.ca = oi;
xi.prototype.ja = function(a) {
  a.push("C")
};
function yi() {
}
yi.prototype.C = function(a) {
  a.push("new YouCloseItFrame()")
};
yi.prototype.n = function(a) {
  return a instanceof yi
};
yi.prototype.ca = oi;
yi.prototype.ja = function(a) {
  a.push("Y")
};
function zi(a, b) {
  this.jc = a;
  this.Qb = b
}
zi.prototype.n = function(a) {
  return a instanceof zi && this.jc == a.jc && this.Qb == a.Qb
};
zi.prototype.C = function(a, b) {
  a.push("new ResetFrame(");
  X(this.jc, a, b);
  a.push(", ", String(this.Qb), ")")
};
zi.prototype.ca = oi;
zi.prototype.ja = function(a) {
  a.push(this.jc, "|", String(Number(this.Qb)), "!")
};
var Ai = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function Bi(a) {
  this.reason = a
}
Bi.prototype.n = function(a) {
  return a instanceof Bi && this.reason == a.reason
};
Bi.prototype.C = function(a, b) {
  a.push("new TransportKillFrame(");
  X(this.reason, a, b);
  a.push(")")
};
Bi.prototype.ca = oi;
Bi.prototype.ja = function(a) {
  a.push(this.reason, "K")
};
function Ci(a) {
  a || e(new Z("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new si(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = vi(jh(a)), a == k && e(new Z("bad sack")), new ri(a)
    }else {
      if(b == "N") {
        return a = mh(jh(a)), a == k && e(new Z("bad seqNum")), new ui(a)
      }else {
        if(b == "T") {
          return a = vi(jh(a)), a == k && e(new Z("bad lastSackSeen")), new wi(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && e(new Z("leading garbage")), new yi
          }else {
            if(b == "^") {
              return new ti(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && e(new Z("leading garbage")), new xi
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && e(new Z("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == k && e(new Z("bad applicationLevel")), new zi(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = Ai[a], a == k && e(new Z("unknown kill reason: " + a)), new Bi(a)
                  }else {
                    e(new Z("Invalid frame type " + b))
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
;function Di(a, b, c) {
  this.host = a;
  this.port = b;
  this.lh = c
}
function Ei(a, b, c, d) {
  this.ed = a;
  this.Kf = b;
  this.gd = c;
  this.Wf = d;
  (!(this.ed.indexOf("http://") == 0 || this.ed.indexOf("https://") == 0) || !(this.gd.indexOf("http://") == 0 || this.gd.indexOf("https://") == 0)) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Kf.location.href;
  zg(this.ed, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Wf.location.href;
  zg(this.gd, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
var Fi = new ti(";)]}");
function Gi(a, b, c, d) {
  L.call(this);
  this.I = a;
  this.Mf = b;
  this.pa = c;
  this.Hi = d;
  this.tc = new Eb;
  this.rc = ih() + ih();
  this.Ta = new Qh;
  this.be = new Sh;
  this.wc = k;
  if(H) {
    this.wc = Od(q, "load", this.ah, !1, this)
  }
}
C(Gi, de);
o = Gi.prototype;
o.e = F("cw.net.Stream");
o.vf = new Ph(-1, []);
o.wf = new Ph(-1, []);
o.Qg = 50;
o.Pg = 1048576;
o.Be = !1;
o.re = !1;
o.l = 1;
o.dg = -1;
o.k = k;
o.z = k;
o.kc = k;
o.Ce = 0;
o.Jf = 0;
o.Vf = 0;
o.Ug = !0;
o.C = function(a, b) {
  a.push("<Stream id=");
  X(this.rc, a, b);
  a.push(", state=", String(this.l));
  a.push(", primary=");
  X(this.k, a, b);
  a.push(", secondary=");
  X(this.z, a, b);
  a.push(", resetting=");
  X(this.kc, a, b)
};
function Hi(a) {
  var b = [-1];
  a.k && b.push(a.k.Fb);
  a.z && b.push(a.z.Fb);
  return Math.max.apply(Math.max, b)
}
function Ii(a) {
  if(a.l != 1) {
    var b = a.Ta.w.T() != 0, c = Th(a.be), d = !c.n(a.wf) && !(a.k && c.n(a.k.Cb) || a.z && c.n(a.z.Cb)), f = Hi(a);
    if((b = b && f < a.Ta.ub) || d) {
      if(a.k.Sb) {
        if(d && (d = a.k, c != d.Cb)) {
          !d.Ha && !d.G.length && Ji(d), d.G.push(new ri(c)), d.Cb = c
        }
        b && Ki(a.k, a.Ta, f + 1);
        a.k.Ca()
      }else {
        if(a.z == k) {
          a.Be ? (a.z = Li(a, !1), b && Ki(a.z, a.Ta, f + 1), a.z.Ca()) : a.re = !0
        }
      }
    }
  }
}
o.ah = function() {
  this.wc = k;
  if(this.k && this.k.yb()) {
    this.e.info("restartHttpRequests_: aborting primary");
    var a = this.k;
    a.xd = !0;
    a.g()
  }
  if(this.z && this.z.yb()) {
    this.e.info("restartHttpRequests_: aborting secondary"), a = this.z, a.xd = !0, a.g()
  }
};
function Mi(a, b) {
  a.l > 2 && e(Error("sendStrings: Can't send strings in state " + a.l));
  if(b.length) {
    if(a.Ug) {
      for(var c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || e(Error("sendStrings: string #" + c + " has illegal chars: " + Y(d)))
      }
    }
    a.Ta.extend(b);
    Ii(a)
  }
}
function Li(a, b) {
  var c;
  a.pa instanceof Ei ? c = (Boolean(Number((new Ag(document.location)).ga.get("httpStreaming", "0"))) ? 2 : 1) == 1 ? Zh : Ni : a.pa instanceof Di ? c = Oi : e(Error("Don't support endpoint " + Y(a.pa)));
  a.dg += 1;
  c = new Pi(a.I, a, a.dg, c, a.pa, b);
  a.tc.add(c);
  return c
}
function Qi(a, b, c) {
  b = new Ri(a.I, a, b, c);
  a.tc.add(b);
  return b
}
function Si(a, b) {
  a.tc.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  b.ic ? a.Ce += b.ic : a.Ce = 0;
  a.Ce >= 1 && (a.e.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), Ti("stream penalty reached limit", !1), a.g());
  if(a.l > 2) {
    a.l == 3 && b.ig && a.g()
  }else {
    var c;
    var d;
    d = b instanceof Ri;
    if(!d && b.xd) {
      c = H ? Lh ? [0, 1] : [9, 20] : [0, 0], d = c[0], c = c[1]
    }else {
      c = b.Qe();
      var f;
      if(b == a.k) {
        if(c) {
          f = ++a.Jf
        }else {
          if(!d) {
            f = a.Jf = 0
          }
        }
      }else {
        if(c) {
          f = ++a.Vf
        }else {
          if(!d) {
            f = a.Vf = 0
          }
        }
      }
      c = d || !f ? d = 0 : (d = Math.max(0, 2E3 * Math.min(f, 3) + (Math.floor(Math.random() * 4E3) - 2E3) - Math.max(0, b.eg - b.Ge))) ? 1 : 0
    }
    c = [d, c];
    d = c[0];
    c = c[1];
    if(b == a.k) {
      a.k = k, c ? a.k = Qi(a, d, c) : (d = Hi(a), a.k = Li(a, !0), Ki(a.k, a.Ta, d + 1)), a.k.Ca()
    }else {
      if(b == a.z) {
        a.z = k, c ? (a.z = Qi(a, d, c), a.z.Ca()) : Ii(a)
      }
    }
  }
}
o.reset = function(a) {
  this.l > 2 && e(Error("reset: Can't send reset in state " + this.l));
  this.l = 3;
  this.k && this.k.Sb ? (this.e.info("reset: Sending ResetFrame over existing primary."), Ui(this.k, a), this.k.Ca()) : (this.k && this.k.g(), this.z && this.z.g(), this.e.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.kc = Li(this, !1), Ui(this.kc, a), this.kc.Ca());
  Ti(a, !0)
};
function Vi(a, b, c, d) {
  var f;
  f = a.be;
  for(var g = a.Qg, h = a.Pg, j = [], n = !1, p = 0, z = c.length;p < z;p++) {
    var r = c[p], v = r[0], r = r[1];
    if(v == f.Bb + 1) {
      f.Bb += 1;
      for(j.push(r);;) {
        v = f.Bb + 1;
        r = f.Ya.get(v, Uh);
        if(r === Uh) {
          break
        }
        j.push(r[0]);
        f.Ya.remove(v);
        f.v -= r[1];
        f.Bb = v
      }
    }else {
      if(!(v <= f.Bb)) {
        if(g != k && f.Ya.T() >= g) {
          n = !0;
          break
        }
        var B = Oh(r);
        if(h != k && f.v + B > h) {
          n = !0;
          break
        }
        f.Ya.set(v, [r, B]);
        f.v += B
      }
    }
  }
  f.Ya.Oa() && f.Ya.clear();
  f = [j, n];
  c = f[0];
  f = f[1];
  if(c) {
    g = a.Mf;
    Wi.$f();
    try {
      for(h = 0;h < c.length;h++) {
        var j = g, gc = $e(c[h]), ud = gc[0], vd = gc[1];
        if(ud == 1) {
          var uf = j.oe.Kd(Xi.$b(), vd), wj = rf(uf, 1), xj = rf(uf, 2), yj = uf.da();
          Wi.Fc(wj, xj, 5, 5, new Ae(1, "black"), new ze(yj), i)
        }else {
          ud == 2 ? (Wi.g(), Yi()) : E(Zi, "Strange message from server: " + Y(gc))
        }
      }
    }finally {
      Wi.Sf()
    }
  }
  a.l == 3 || a.ya || (d || Ii(a), f && a.l == 2 && (Xb(b.e, b.ra() + "'s peer caused rwin overflow."), b.g()))
}
o.start = function() {
  this.l = 2;
  this.k = Li(this, !0);
  Ki(this.k, this.Ta, k);
  this.k.Ca()
};
o.b = function() {
  this.e.info(Y(this) + " in disposeInternal.");
  this.l = 4;
  for(var a = this.tc.V(), b = 0;b < a.length;b++) {
    a[b].g()
  }
  this.dispatchEvent({type:"c"});
  if(H && this.wc) {
    Rd(this.wc), this.wc = k
  }
  delete this.tc;
  delete this.k;
  delete this.z;
  delete this.kc;
  delete this.Mf;
  Gi.c.b.call(this)
};
var Zh = 1, Ni = 2, Oi = 3;
function Pi(a, b, c, d, f, g) {
  L.call(this);
  this.I = a;
  this.B = b;
  this.Nb = c;
  this.va = d;
  this.pa = f;
  this.G = [];
  this.rb = g;
  this.Sb = !this.yb();
  this.Ib = this.va != Zh;
  this.og = y(this.jh, this)
}
C(Pi, L);
o = Pi.prototype;
o.e = F("cw.net.ClientTransport");
o.r = k;
o.Ge = k;
o.eg = k;
o.fd = k;
o.Ha = !1;
o.qd = !1;
o.Cb = k;
o.Sd = 0;
o.Fb = -1;
o.pe = -1;
o.ig = !1;
o.xd = !1;
o.ic = 0;
o.bc = !1;
o.C = function(a) {
  a.push("<ClientTransport #", String(this.Nb), ", becomePrimary=", String(this.rb), ">")
};
o.ra = function() {
  return(this.rb ? "Prim. T#" : "Sec. T#") + this.Nb
};
o.Qe = function() {
  return!(!this.bc && this.Sd)
};
o.yb = function() {
  return this.va == Zh || this.va == Ni
};
function $i(a, b) {
  Wa(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Vi(a.B, a, b, !a.Ib)
}
function aj(a, b, c) {
  try {
    var d = Ci(b);
    a.Sd += 1;
    var f;
    a.Sd == 1 && !d.n(Fi) && a.yb() ? (E(a.e, a.ra() + " is closing soon because got bad preamble: " + Y(d)), f = !0) : f = !1;
    if(f) {
      return!0
    }
    if(d instanceof si) {
      if(!/^([ -~]*)$/.test(d.Mb)) {
        return a.bc = !0
      }
      a.pe += 1;
      c.push([a.pe, d.Mb])
    }else {
      if(d instanceof ri) {
        var g = a.B, h = d.ma;
        g.vf = h;
        var j = g.Ta, n = h.qb, c = !1;
        n > j.ub && (c = !0);
        for(var p = Rh(j).concat(), d = 0;d < p.length;d++) {
          var z = p[d];
          if(z > n) {
            break
          }
          var r = j.w.p[z][1];
          j.w.remove(z);
          j.v -= r
        }
        for(d = 0;d < h.mb.length;d++) {
          var v = h.mb[d];
          v > j.ub && (c = !0);
          j.w.aa(v) && (r = j.w.p[v][1], j.w.remove(v), j.v -= r)
        }
        j.w.Oa() && j.w.clear();
        if(c) {
          return E(a.e, a.ra() + " is closing soon because got bad SackFrame"), a.bc = !0
        }
      }else {
        if(d instanceof ui) {
          a.pe = d.pc - 1
        }else {
          if(d instanceof wi) {
            a.B.wf = d.fc
          }else {
            if(d instanceof yi) {
              return!0
            }else {
              if(d instanceof Bi) {
                return a.bc = !0, d.reason == "stream_attach_failure" ? a.ic += 1 : d.reason == "acked_unsent_strings" && (a.ic += 0.5), !0
              }else {
                if(!(d instanceof ti)) {
                  if(d instanceof xi) {
                    var B = a.B, gc = !a.Ib;
                    B.Be = !0;
                    if(B.re && !gc) {
                      B.re = !1, Ii(B)
                    }
                  }else {
                    if(c.length && ($i(a, c), Pa(c)), d instanceof zi) {
                      var ud = a.B;
                      Ti(d.jc, d.Qb);
                      ud.g();
                      return!0
                    }else {
                      e(Error(a.ra() + " had unexpected state in framesReceived_."))
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }catch(vd) {
    return vd instanceof Z || e(vd), E(a.e, a.ra() + " is closing soon because got InvalidFrame: " + Y(b)), a.bc = !0
  }
  return!1
}
function Yh(a, b) {
  a.qd = !0;
  try {
    for(var c = !1, d = [], f = 0, g = b.length;f < g;f++) {
      if(a.ya) {
        a.e.info(a.ra() + " returning from loop because we're disposed.");
        return
      }
      if(c = aj(a, b[f], d)) {
        break
      }
    }
    d.length && $i(a, d);
    a.qd = !1;
    a.G.length && a.Ca();
    c && a.g()
  }finally {
    a.qd = !1
  }
}
o.jh = function() {
  E(this.e, this.ra() + " timed out due to lack of connection or no data being received.");
  this.g()
};
function bj(a) {
  if(a.fd != k) {
    a.I.L.clearTimeout(a.fd), a.fd = k
  }
}
function $h(a, b) {
  bj(a);
  b = Math.round(b);
  a.fd = a.I.L.setTimeout(a.og, b)
}
function Xh(a) {
  a.va != Zh && (a.va == Oi || a.va == Ni ? $h(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.va)))
}
function Ji(a) {
  var b = new pi;
  b.Nb = a.Nb;
  b.Lf = 2;
  b.of = 2;
  if(!a.B.Be) {
    b.Pf = !0;
    var c = Cf.get(window.location.protocol == "https:" ? "_s" : "__");
    b.Ve = (ga(c) ? c : k) + "|" + q.CSRF_TOKEN
  }
  b.rc = a.B.rc;
  b.De = a.Ib;
  if(b.De) {
    b.Ef = 4096
  }
  b.Af = 3E5;
  b.yf = a.Ib ? Math.floor(10) : 0;
  b.fg = !1;
  if(a.rb) {
    b.Zf = k, b.ie = Math.floor((a.Ib ? 358E4 : 25E3) / 1E3)
  }
  b.ma = Th(a.B.be);
  b.Zc = a.B.vf;
  a.G.push(b);
  a.Cb = b.ma
}
function ii(a, b) {
  b && (a.ic += 0.5);
  a.g()
}
o.Ca = function() {
  this.Ha && !this.Sb && e(Error("flush_: Can't flush more than once to this transport."));
  if(!this.qd) {
    var a = this.Ha;
    this.Ha = !0;
    !a && !this.G.length && Ji(this);
    for(a = 0;a < this.G.length;a++) {
    }
    if(this.yb()) {
      for(var a = [], b = 0, c = this.G.length;b < c;b++) {
        this.G[b].ja(a), a.push("\n")
      }
      this.G = [];
      a = a.join("");
      b = this.rb ? this.pa.ed : this.pa.gd;
      this.r = ai.Gd(this, this.rb ? this.pa.Kf : this.pa.Wf);
      this.Ge = this.I.L === Fe ? A() : this.I.L.getTime();
      this.r.he(b, "POST", a);
      $h(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.Ib ? 0 : this.rb ? 25E3 : 2))
    }else {
      if(this.va == Oi) {
        a = [];
        b = 0;
        for(c = this.G.length;b < c;b++) {
          a.push(this.G[b].ca())
        }
        this.G = [];
        this.r ? this.r.xc(a) : (b = this.pa, this.r = new ki(this), this.r.pd = b.lh.Gd(this.r), this.Ge = this.I.L === Fe ? A() : this.I.L.getTime(), this.r.Ed(b.host, b.port), this.r.ya || (this.r.xc(a), this.r.ya || $h(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.va))
      }
    }
  }
};
function Ki(a, b, c) {
  !a.Ha && !a.G.length && Ji(a);
  for(var d = Math.max(c, a.Fb + 1), f = Rh(b), c = [], g = 0;g < f.length;g++) {
    var h = f[g];
    (d == k || h >= d) && c.push([h, b.w.p[h][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], f = g[0], g = g[1], (a.Fb == -1 || a.Fb + 1 != f) && a.G.push(new ui(f)), a.G.push(new si(g)), a.Fb = f
  }
}
o.b = function() {
  this.e.info(this.ra() + " in disposeInternal.");
  Pi.c.b.call(this);
  this.eg = this.I.L === Fe ? A() : this.I.L.getTime();
  this.G = [];
  bj(this);
  this.r && this.r.g();
  var a = this.B;
  this.B = k;
  Si(a, this)
};
function Ui(a, b) {
  !a.Ha && !a.G.length && Ji(a);
  a.G.push(new zi(b, !0));
  a.ig = !0
}
function Ri(a, b, c, d) {
  L.call(this);
  this.I = a;
  this.B = b;
  this.$e = c;
  this.Te = d
}
C(Ri, L);
o = Ri.prototype;
o.Ha = !1;
o.Sb = !1;
o.Oc = k;
o.Cb = k;
o.e = F("cw.net.DoNothingTransport");
function cj(a) {
  a.Oc = a.I.L.setTimeout(function() {
    a.Oc = k;
    a.Te--;
    a.Te ? cj(a) : a.g()
  }, a.$e)
}
o.Ca = function() {
  this.Ha && !this.Sb && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.Ha = !0;
  cj(this)
};
o.C = function(a) {
  a.push("<DoNothingTransport delay=", String(this.$e), ">")
};
o.yb = m(!1);
o.ra = m("Wast. T");
o.Qe = m(!1);
o.b = function() {
  this.e.info(this.ra() + " in disposeInternal.");
  Ri.c.b.call(this);
  this.Oc != k && this.I.L.clearTimeout(this.Oc);
  var a = this.B;
  this.B = k;
  Si(a, this)
};
var dj;
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
  dj = c
})();
function ej(a, b) {
  R.call(this, b);
  this.yg = a;
  this.Nd = new $d(this);
  this.Ic = new zb
}
C(ej, R);
o = ej.prototype;
o.e = F("goog.ui.media.FlashObject");
o.ph = "window";
o.Ne = "#000000";
o.mg = "sameDomain";
o.$ = function(a, b) {
  this.pb = u(a) ? a : Math.round(a) + "px";
  this.Zd = u(b) ? b : Math.round(b) + "px";
  this.a() && Zc(this.a() ? this.a().firstChild : k, this.pb, this.Zd);
  return this
};
o.O = function() {
  ej.c.O.call(this);
  var a = this.a(), b;
  b = G ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = G ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = sa(c, this.ph), d = this.Ic.Ea(), f = this.Ic.V(), g = [], h = 0;h < d.length;h++) {
    var j = ua(d[h]), n = ua(f[h]);
    g.push(j + "=" + n)
  }
  b = sa(b, he(this), he(this), "goog-ui-media-flash-object", wa(this.yg), wa(g.join("&")), this.Ne, this.mg, c);
  a.innerHTML = b;
  this.pb && this.Zd && this.$(this.pb, this.Zd);
  Q(this.Nd, this.a(), ob(md), ld)
};
o.i = function() {
  this.Qf != k && !(Da(dj, this.Qf) >= 0) && (E(this.e, "Required flash version not found:" + this.Qf), e(Error("Method not supported")));
  var a = this.Da().createElement("div");
  a.className = "goog-ui-media-flash";
  this.d = a
};
o.b = function() {
  ej.c.b.call(this);
  this.Ic = k;
  this.Nd.g();
  this.Nd = k
};
function fj(a) {
  qa.call(this, a)
}
C(fj, qa);
fj.prototype.name = "cw.loadflash.FlashLoadFailed";
q.__loadFlashObject_callbacks = {};
function gj(a, b, c) {
  function d() {
    f && delete q.__loadFlashObject_callbacks[f]
  }
  var f;
  if(lc && !I("1.8.1.20")) {
    return eh(new fj("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(Da(dj, "9") >= 0)) {
    return eh(new fj("Need Flash Player 9+, had " + dj))
  }
  var g;
  f = "_" + ih();
  var h = new Tg(d);
  q.__loadFlashObject_callbacks[f] = function() {
    a.setTimeout(function() {
      d();
      Zg(h, K(g))
    }, 0)
  };
  b.Ic.set("onloadcallback", '__loadFlashObject_callbacks["' + f + '"]()');
  g = he(b);
  je(b, c);
  return h
}
function hj(a, b, c) {
  var d = gj(a, b, c), f = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  bh(d, function(b) {
    a.clearTimeout(f);
    return b
  });
  return d
}
;var Wh = 1;
function ij(a, b) {
  this.qh = a;
  this.zf = b
}
ij.prototype.ee = 0;
ij.prototype.cd = 0;
ij.prototype.Qd = !1;
function jj(a) {
  var b = [];
  if(a.Qd) {
    return[b, 2]
  }
  var c = a.ee, d = a.qh.responseText;
  for(a.ee = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var f = d.substr(a.cd, c - a.cd), f = f.replace(/\r$/, "");
    if(f.length > a.zf) {
      return a.Qd = !0, [b, 2]
    }
    b.push(f);
    a.cd = c += 1
  }
  return a.ee - a.cd - 1 > a.zf ? (a.Qd = !0, [b, 2]) : [b, Wh]
}
;var kj = !(G || H && !I("420+"));
function lj(a, b) {
  this.sd = a;
  this.la = b
}
C(lj, L);
o = lj.prototype;
o.r = k;
o.Ua = -1;
o.hf = !1;
o.nf = ["Content-Length", "Server", "Date", "Expires", "Keep-Alive", "Content-Type", "Transfer-Encoding", "Cache-Control"];
function mj(a) {
  var b = jj(a.Xe), c = b[0], b = b[1], d = q.parent;
  d ? (d.__XHRMaster_onframes(a.la, c, b), b != Wh && a.g()) : a.g()
}
o.Hg = function() {
  mj(this);
  if(!this.ya) {
    var a = q.parent;
    a && a.__XHRMaster_oncomplete(this.la);
    this.g()
  }
};
o.Zg = function() {
  var a = q.parent;
  if(a) {
    this.Ua = this.r.Na();
    if(this.Ua >= 2 && !this.hf) {
      for(var b = new zb, c = this.nf.length;c--;) {
        var d = this.nf[c];
        try {
          b.set(d, this.r.j.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.T() && (this.hf = !0, a.__XHRMaster_ongotheaders(this.la, Db(b)), this.ya)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.la, this.Ua);
    kj && this.Ua == 3 && mj(this)
  }else {
    this.g()
  }
};
o.he = function(a, b, c) {
  this.r = new Ch;
  O(this.r, "readystatechange", y(this.Zg, this));
  O(this.r, "complete", y(this.Hg, this));
  this.r.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.Xe = new ij(this.r.j, 1048576)
};
o.b = function() {
  lj.c.b.call(this);
  delete this.Xe;
  this.r && this.r.g();
  delete this.sd.qc[this.la];
  delete this.sd
};
function nj() {
  L.call(this);
  this.qc = {}
}
C(nj, L);
nj.prototype.Og = function(a, b, c, d) {
  var f = new lj(this, a);
  this.qc[a] = f;
  f.he(b, c, d)
};
nj.prototype.vg = function(a) {
  (a = this.qc[a]) && a.g()
};
nj.prototype.b = function() {
  nj.c.b.call(this);
  for(var a = ob(this.qc);a.length;) {
    a.pop().g()
  }
  delete this.qc
};
var oj = new nj;
q.__XHRSlave_makeRequest = y(oj.Og, oj);
q.__XHRSlave_dispose = y(oj.vg, oj);
function pj() {
}
function qj(a) {
  var b = new ej("/compiled_client/FlashConnector.swf?cb=0bd7d80e82723ab4b0dbc196a1ac15c5");
  b.Ne = "#777777";
  b.$(300, 30);
  var c = K("FlashConnectorSwf");
  c || e(Error("no FlashConnectorSwf?"));
  return hj(a.L, b, c)
}
function rj(a, b, c) {
  var d = new Ag(document.location);
  if(c) {
    var f = d.ab, b = qj(a);
    $g(b, function(b) {
      b = new ji(a, b);
      return new Di(f, 843, b)
    });
    return b
  }else {
    return b ? (b = ci(), $g(b, function() {
      var a = K("xdrframe-1").contentWindow || (H ? K("xdrframe-1").document || K("xdrframe-1").contentWindow.document : K("xdrframe-1").contentDocument || K("xdrframe-1").contentWindow.document).parentWindow || (H ? K("xdrframe-1").document || K("xdrframe-1").contentWindow.document : K("xdrframe-1").contentDocument || K("xdrframe-1").contentWindow.document).defaultView, b = K("xdrframe-2").contentWindow || (H ? K("xdrframe-2").document || K("xdrframe-2").contentWindow.document : K("xdrframe-2").contentDocument || 
      K("xdrframe-2").contentWindow.document).parentWindow || (H ? K("xdrframe-2").document || K("xdrframe-2").contentWindow.document : K("xdrframe-2").contentDocument || K("xdrframe-2").contentWindow.document).defaultView;
      a || e(Error("could not get primaryWindow xdrframe"));
      b || e(Error("could not get secondaryWindow xdrframe"));
      var c = new Ag(q.__XDRSetup.baseurl1);
      c.Wa("/httpface/");
      var d = new Ag(q.__XDRSetup.baseurl2);
      d.Wa("/httpface/");
      return new Ei(c.toString(), a, d.toString(), b)
    }), b) : (b = d.J(), b.Wa("/httpface/"), Fg(b, "", i), b = new Ei(b.toString(), q, b.toString(), q), dh(b))
  }
}
function sj() {
  var a = tj, b = (new Ag(document.location)).ga, c = b.get("mode") != "http", b = Boolean(Number(b.get("useSub", "1")));
  return rj(a, b, c)
}
;var Wi, uj, vj, zj, Aj;
function Xi() {
  pf.apply(this)
}
C(Xi, pf);
Xi.prototype.da = function() {
  return rf(this, 3)
};
function Bj() {
  pf.apply(this)
}
C(Bj, pf);
wf(Xi, {0:{name:"Point", ef:"browsernode.whiteboard_messages.Point"}, 1:{name:"x", Rd:5, type:Number}, 2:{name:"y", Rd:5, type:Number}, 3:{name:"color", Rd:9, type:String}});
wf(Bj, {0:{name:"ClearBoard", ef:"browsernode.whiteboard_messages.ClearBoard"}});
var Zi = F("whiteboard.logger");
window.onerror = function(a, b, c) {
  Xb(Zi, "window.onerror: message: " + Y(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Cj() {
  this.oe = new zf
}
function Ti(a, b) {
  Zi.info("streamReset: reasonString=" + Y(a) + ", applicationLevel=" + b);
  document.getElementById("demo-header").innerHTML += ' <b><a href="' + window.location + '">[DISCONNECTED] - RELOAD</a></b>';
  $ = k
}
Cj.prototype.reset = function(a) {
  Zi.info("resetting with reason: " + a);
  this.B.reset(a)
};
var $ = k, tj = new gh(q.window);
function Dj() {
  $ && ($.reset("idle timeout fired"), $ = k)
}
var Ej = k;
function Fj() {
  Ej != k && tj.L.clearTimeout(Ej);
  $ && (Ej = tj.L.setTimeout(Dj, 2592E5))
}
O(window, ["click", "focus", "keydown", "keypress"], Fj, !0);
function Gj() {
  var a = new pj;
  $ = new Cj;
  Fj();
  $g(sj(), function(b) {
    $ || e(Error("lastProto falsy?"));
    b = new Gi(tj, $, b, a);
    $.B = b;
    Mi($.B, ["subprotocol:whiteboard"]);
    b.start();
    return k
  })
}
function Hj() {
  Wi.g();
  Yi();
  var a = $;
  Zi.info("Telling server to clear the board.");
  var b = a.B, a = [2, a.oe.nb(new Bj)], a = (new af).nb(a);
  Mi(b, [a])
}
function Ij(a) {
  var b = new od(a), a = b.offsetX, c = b.offsetY;
  Wi.Fc(a, c, 5, 5, new Ae(1, "black"), new ze(uj), i);
  var d = $, f = uj;
  Zi.info("Telling server about circle at: " + a + ", " + c + " with color " + f);
  var b = d.B, g = new Xi;
  g.q[1] = a;
  g.q[2] = c;
  g.q[3] = f;
  a = d.oe.nb(g);
  Mi(b, [(new af).nb([1, a])])
}
function Yi() {
  var a;
  a = G && !I("9") ? new Ue(800, 600, i, i, i) : H && (!I("420") || I("534") && !I("534.10") || mc) ? new Be(800, 600, i, i, i) : new Le(800, 600, i, i, i);
  a.i();
  vj = K("drawArea");
  je(a, vj);
  Wi = a
}
var xg = "#E06666";
function Jj(a) {
  var b;
  (a = a.target.Ud()) ? (a = a.style[Ha("background-color")] || "", b = wg(a)) : b = k;
  b || (b = xg);
  uj = b;
  Cf.set("whiteboard_defaultColor", b);
  a = K("whiteboard-cp-value");
  u("background-color") ? Xc(a, b, "background-color") : nb("background-color", pa(Xc, a));
  a = K("whiteboard-cp-value");
  a.title = b;
  b = Za(b).Tc;
  Rc(a, b);
  b = eb(b);
  b = cb(gb(b)[0], gb(b)[1], gb(b)[2]);
  u("color") ? Xc(a, b, "color") : nb("color", pa(Xc, a))
}
function Kj() {
  zj = (new Ag(document.location)).ga;
  if(Aj = Boolean(Number(zj.get("logging", "0")))) {
    ac().md(Vb);
    var a = new ed(document.getElementById("log"));
    if(!0 != a.rf) {
      var b = ac(), c = a.Yg;
      if(!b.cc) {
        b.cc = []
      }
      b.cc.push(c);
      a.rf = !0
    }
  }else {
    ac().md(Pb)
  }
  Zi.info("Logger works.");
  (a = Cf.get("whiteboard_defaultColor")) && (xg = a);
  uj = xg;
  b = K("whiteboard-controls-left");
  a = K("whiteboard-controls-right");
  c = Jc("div", {"class":"goog-inline-block", id:"whiteboard-cp"});
  Nc(b, c);
  c = Jc("div", {"class":"goog-inline-block", id:"whiteboard-cp-value"});
  Nc(b, c);
  b = new tg(["#EA9999", "#F9CB9C", "#FFE599", "#B6D7A8", "#A2C4C9", "#9FC5E8", "#B4A7D6", "#D5A6BD", "#E06666", "#F6B26B", "#FFD966", "#93C47D", "#76A5AF", "#6FA8DC", "#8E7CC3", "#C27BA0", "#CC0000", "#E69138", "#F1C232", "#6AA84F", "#45818E", "#3D85C6", "#674EA7", "#A64D79"]);
  b.$(8);
  je(b, K("whiteboard-cp"));
  O(b, "action", Jj);
  vg(b);
  Jj({target:b});
  b = new fg("Clear board");
  Wf(b, "clear-board-button");
  je(b, a);
  O(b, "action", Hj);
  a = K("drawAreaOverlay");
  dd(a, !0);
  O(a, "click", Ij, !1);
  Yi();
  Gj()
}
var Lj = "__whiteboard_init".split("."), Mj = q;
!(Lj[0] in Mj) && Mj.execScript && Mj.execScript("var " + Lj[0]);
for(var Nj;Lj.length && (Nj = Lj.shift());) {
  !Lj.length && ga(Kj) ? Mj[Nj] = Kj : Mj = Mj[Nj] ? Mj[Nj] : Mj[Nj] = {}
}
;
})();
