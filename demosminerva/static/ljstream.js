(function(){function f(a) {
  throw a;
}
var i = void 0, j = !0, k = null, m = !1;
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
function q(a) {
  return function() {
    return a
  }
}
var s, ba = ba || {}, t = this;
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
  a.eb = function() {
    return a.Pf || (a.Pf = new a)
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
  return"function" == fa(a)
}
function ja(a) {
  a = fa(a);
  return"object" == a || "array" == a || "function" == a
}
function ka(a) {
  return a[la] || (a[la] = ++ma)
}
var la = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ma = 0;
function na(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function oa(a, b, c) {
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
function y(a, b, c) {
  y = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
  return y.apply(k, arguments)
}
function pa(a, b) {
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
function A(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.e = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;/*

 linkify - v0.3 - 6/27/2009
 http://benalman.com/code/test/js-linkify/

 Copyright (c) 2009 "Cowboy" Ben Alman
 Licensed under the MIT license
 http://benalman.com/about/license/

 Some regexps adapted from http://userscripts.org/scripts/review/7122
*/
var qa, ra, sa, ta;
qa = RegExp("(?:\\b[a-z\\d.-]+://[^<>\\s]+|\\b(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:[;/][^#?<>\\s]*)?(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w)|(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w))", 
"ig");
ra = /^[a-z\d.-]+:\/\//i;
sa = {"'":"`", ">":"<", ")":"(", "]":"[", "}":"{", "\u00bb":"\u00ab", "\u203a":"\u2039"};
ta = {ja:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, Ue:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
function ua(a) {
  var b;
  b = b || {};
  var c = [], d, e;
  for(e in ta) {
    ga(b[e]) || (b[e] = ta[e])
  }
  for(;e = qa.exec(a);) {
    e = e[0];
    var g = qa.lastIndex, h = g - e.length;
    if(!/[\/:]/.test(a.charAt(h - 1))) {
      do {
        var l = e, n = e.substr(-1), p = sa[n];
        if(p && (p = e.match(RegExp("\\" + p + "(?!$)", "g")), n = e.match(RegExp("\\" + n, "g")), (p ? p.length : 0) < (n ? n.length : 0))) {
          e = e.substr(0, e.length - 1), g--
        }
        b.Ue && (e = e.replace(b.Ue, function(a) {
          g -= a.length;
          return""
        }))
      }while(e.length && e !== l);
      l = e;
      ra.test(l) || (l = (-1 !== l.indexOf("@") ? !l.indexOf("mailto:") ? "" : "mailto:" : !l.indexOf("irc.") ? "irc://" : !l.indexOf("ftp.") ? "ftp://" : "http://") + l);
      d != h && (c.push([a.slice(d, h)]), d = g);
      c.push([e, l])
    }
  }
  c.push([a.substr(d)]);
  d = "";
  for(e = 0;e < c.length;e++) {
    d += b.ja.apply(t, c[e])
  }
  return d || a
}
;function C(a) {
  this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
A(C, Error);
C.prototype.name = "CustomError";
function va(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = ("" + arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
function wa(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
var xa = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function ya(a) {
  a = "" + a;
  return!xa.test(a) ? encodeURIComponent(a) : a
}
function za(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function D(a) {
  if(!Aa.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(Ba, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(Ca, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Da, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Ea, "&quot;"));
  return a
}
var Ba = /&/g, Ca = /</g, Da = />/g, Ea = /\"/g, Aa = /[&<>\"]/;
function Fa(a) {
  return za(a.replace(/  /g, " &#160;"), i)
}
function Ga(a, b) {
  for(var c = 0, d = wa("" + a).split("."), e = wa("" + b).split("."), g = Math.max(d.length, e.length), h = 0;0 == c && h < g;h++) {
    var l = d[h] || "", n = e[h] || "", p = RegExp("(\\d*)(\\D*)", "g"), E = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = p.exec(l) || ["", "", ""], w = E.exec(n) || ["", "", ""];
      if(0 == r[0].length && 0 == w[0].length) {
        break
      }
      c = ((0 == r[1].length ? 0 : parseInt(r[1], 10)) < (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? -1 : (0 == r[1].length ? 0 : parseInt(r[1], 10)) > (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? 1 : 0) || ((0 == r[2].length) < (0 == w[2].length) ? -1 : (0 == r[2].length) > (0 == w[2].length) ? 1 : 0) || (r[2] < w[2] ? -1 : r[2] > w[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
}
;function Ha(a, b) {
  b.unshift(a);
  C.call(this, va.apply(k, b));
  b.shift()
}
A(Ha, C);
Ha.prototype.name = "AssertionError";
function Ia(a, b) {
  f(new Ha("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ja(a, b, c) {
  this.v = a;
  this.C = b;
  this.ud = c.name;
  this.ib = !!c.vh;
  this.Gb = c.bb;
  this.Je = c.type;
  this.fe = m;
  switch(this.Gb) {
    case Ka:
    ;
    case La:
    ;
    case Ma:
    ;
    case Na:
    ;
    case Oa:
      this.fe = j
  }
}
var Ka = 3, La = 4, Ma = 6, Na = 16, Oa = 18;
function Pa(a) {
  return 11 == a.Gb || 10 == a.Gb
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
var Ta = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function Ua(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < Ta.length;g++) {
      c = Ta[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var F = Array.prototype, Va = F.indexOf ? function(a, b, c) {
  return F.indexOf.call(a, b, c)
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
}, Wa = F.forEach ? function(a, b, c) {
  F.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
}, Xa = F.map ? function(a, b, c) {
  return F.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), g = v(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (e[h] = b.call(c, g[h], h, a))
  }
  return e
}, Ya = F.some ? function(a, b, c) {
  return F.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && b.call(c, e[g], g, a)) {
      return j
    }
  }
  return m
}, Za = F.every ? function(a, b, c) {
  return F.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && !b.call(c, e[g], g, a)) {
      return m
    }
  }
  return j
};
function $a(a, b) {
  return 0 <= Va(a, b)
}
function ab(a, b) {
  var c = Va(a, b);
  0 <= c && F.splice.call(a, c, 1)
}
function bb(a) {
  return F.concat.apply(F, arguments)
}
function cb(a) {
  if(u(a)) {
    return bb(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
}
function db(a, b) {
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
function eb(a, b, c, d) {
  F.splice.apply(a, fb(arguments, 1))
}
function fb(a, b, c) {
  return 2 >= arguments.length ? F.slice.call(a, b) : F.slice.call(a, b, c)
}
function gb(a, b) {
  F.sort.call(a, b || hb)
}
function hb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function ib(a, b, c) {
  this.He = a;
  this.ud = b.name || k;
  this.ua = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.ua[b.C] = b
  }
}
function jb(a) {
  a = Ra(a.ua);
  gb(a, function(a, c) {
    return a.C - c.C
  });
  return a
}
;function kb() {
  this.n = {};
  this.ab = this.constructor.ab;
  var a = this.ab.ua, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.ua = b;
  this.La = this.pd = k
}
function lb(a, b) {
  for(var c in a.n) {
    a.ua[c] || b.call(a, Number(c), a.n[c])
  }
}
s = kb.prototype;
s.Hb = o("ab");
s.get = function(a, b) {
  return mb(this, a.C, b)
};
s.set = function(a, b) {
  var c = a.C;
  this.n[c] = b;
  this.La && (this.La[c] = j)
};
s.add = function(a, b) {
  var c = a.C;
  this.n[c] || (this.n[c] = []);
  this.n[c].push(b)
};
s.clear = function(a) {
  delete this.n[a.C]
};
s.k = function(a) {
  if(!a || this.constructor != a.constructor) {
    return m
  }
  for(var b = jb(this.Hb()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(nb(this, d.C) != nb(a, d.C)) {
      return m
    }
    if(nb(this, d.C)) {
      var e = Pa(d), g = d.C, h = this.n[g], g = a.n[g];
      if(d.ib) {
        if(h.length != g.length) {
          return m
        }
        for(d = 0;d < h.length;d++) {
          if(!(e ? h[d].k(g[d]) : h[d] == g[d])) {
            return m
          }
        }
      }else {
        if(!(e ? h.k(g) : h == g)) {
          return m
        }
      }
    }
  }
  return j
};
s.G = function() {
  for(var a = new this.constructor, b = jb(a.Hb()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete a.n[d.C];
    if(nb(this, d.C)) {
      var e = Pa(d);
      if(d.ib) {
        var g;
        g = d.C;
        ob(this, this.ua[g]);
        g = this.n[g] || [];
        for(var h = 0;h < g.length;h++) {
          a.add(d, e ? g[h].G() : g[h])
        }
      }else {
        g = this.get(d), a.set(d, e ? g.G() : g)
      }
    }
  }
  return a
};
function nb(a, b) {
  return b in a.n && ga(a.n[b]) && a.n[b] !== k
}
function ob(a, b) {
  if(a.pd) {
    var c = b.C;
    if(!(c in a.La)) {
      var d = a.n, e;
      e = a.pd;
      var g = a.n[c];
      if(g == k) {
        e = g
      }else {
        if(b.ib) {
          var h = [];
          u(g);
          for(var l = 0;l < g.length;l++) {
            h[l] = e.lc(b, g[l])
          }
          e = h
        }else {
          e = e.lc(b, g)
        }
      }
      d[c] = e;
      a.La[c] = j
    }
  }
}
function mb(a, b, c) {
  var d = a.ua[b];
  ob(a, d);
  if(d.ib) {
    return c = c || 0, 0 <= c && pb(a, b), a.n[b][c]
  }
  u(a.n[b]);
  return b in a.n ? a.n[b] : k
}
function pb(a, b) {
  return a.ua[b].ib ? (nb(a, b) && u(a.n[b]), nb(a, b) ? a.n[b].length : 0) : nb(a, b) ? 1 : 0
}
function qb(a, b) {
  var c = [], d, e;
  for(e in b) {
    b.hasOwnProperty(e) && (0 == e ? d = b[0] : c.push(new Ja(a, e, b[e])))
  }
  a.ab = new ib(a, d, c);
  a.Hb = function() {
    return a.ab
  }
}
;function rb() {
}
rb.prototype.mc = function(a, b) {
  return Pa(a) ? this.Wb(b) : b
};
rb.prototype.Zc = function(a) {
  new a.He;
  f(Error("Unimplemented"))
};
rb.prototype.lc = function(a, b) {
  if(Pa(a)) {
    return this.Zc(a.Je.ab, b)
  }
  if(!a.fe) {
    return b
  }
  var c = a.Je;
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
function sb() {
}
A(sb, rb);
sb.prototype.Zc = function(a, b) {
  var c = new a.He;
  c.pd = this;
  c.n = b;
  c.La = {};
  return c
};
function tb() {
}
A(tb, sb);
tb.prototype.Wb = function(a) {
  for(var b = jb(a.Hb()), c = [], d = 0;d < b.length;d++) {
    var e = b[d];
    if(nb(a, e.C)) {
      var g = e.C;
      if(e.ib) {
        c[g] = [];
        for(var h = 0;h < pb(a, e.C);h++) {
          c[g][h] = this.mc(e, a.get(e, h))
        }
      }else {
        c[g] = this.mc(e, a.get(e))
      }
    }
  }
  lb(a, function(a, b) {
    c[a] = b
  });
  return c
};
tb.prototype.mc = function(a, b) {
  return 8 == a.Gb ? b ? 1 : 0 : rb.prototype.mc.apply(this, arguments)
};
tb.prototype.lc = function(a, b) {
  return 8 == a.Gb ? 1 === b : rb.prototype.lc.apply(this, arguments)
};
function ub(a) {
  return x(a) || "object" == typeof a && x(a.call) && x(a.apply)
}
;function vb(a) {
  a = "" + a;
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  f(Error("Invalid JSON string: " + a))
}
function wb(a) {
  this.Bc = a
}
wb.prototype.Wb = function(a) {
  var b = [];
  xb(this, a, b);
  return b.join("")
};
function xb(a, b, c) {
  switch(typeof b) {
    case "string":
      yb(b, c);
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
          c.push(e), e = b[g], xb(a, a.Bc ? a.Bc.call(b, "" + g, e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" != typeof e && (c.push(d), yb(g, c), c.push(":"), xb(a, a.Bc ? a.Bc.call(b, g, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      f(Error("Unknown type: " + typeof b))
  }
}
var zb = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Ab = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function yb(a, b) {
  b.push('"', a.replace(Ab, function(a) {
    if(a in zb) {
      return zb[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return zb[a] = e + b.toString(16)
  }), '"')
}
;function Bb(a, b, c) {
  var d = Va(c, a);
  if(-1 != d) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = fa(a);
    if("boolean" == d || "number" == d || "null" == d || "undefined" == d) {
      b.push("" + a)
    }else {
      if("string" == d) {
        yb(a, b)
      }else {
        if(ub(a.p)) {
          a.p(b, c)
        }else {
          if(ub(a.mf)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if("array" == d) {
                d = a.length;
                b.push("[");
                for(var e = "", g = 0;g < d;g++) {
                  b.push(e), Bb(a[g], b, c), e = ", "
                }
                b.push("]")
              }else {
                if("object" == d) {
                  if(ia(a) && "function" == typeof a.valueOf) {
                    b.push("new Date(", "" + a.valueOf(), ")")
                  }else {
                    for(var d = Sa(a).concat(Ta), e = {}, h = g = 0;h < d.length;) {
                      var l = d[h++], n = ja(l) ? "o" + ka(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(e, n) || (e[n] = j, d[g++] = l)
                    }
                    d.length = g;
                    b.push("{");
                    e = "";
                    for(h = 0;h < d.length;h++) {
                      g = d[h], Object.prototype.hasOwnProperty.call(a, g) && (l = a[g], b.push(e), yb(g, b), b.push(": "), Bb(l, b, c), e = ", ")
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
  Bb(a, b, c)
}
function H(a) {
  var b = [];
  G(a, b, i);
  return b.join("")
}
;function Cb(a) {
  if("function" == typeof a.u) {
    a = a.u()
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
function Db(a) {
  if("function" == typeof a.K) {
    return a.K()
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
function Eb(a) {
  if("function" == typeof a.ea) {
    return a.ea()
  }
  if("function" != typeof a.K) {
    if(ha(a) || v(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return Sa(a)
  }
}
function Fb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ha(a) || v(a)) {
      Wa(a, b, c)
    }else {
      for(var d = Eb(a), e = Db(a), g = e.length, h = 0;h < g;h++) {
        b.call(c, e[h], d && d[h], a)
      }
    }
  }
}
function Gb(a, b) {
  if("function" == typeof a.every) {
    return a.every(b, i)
  }
  if(ha(a) || v(a)) {
    return Za(a, b, i)
  }
  for(var c = Eb(a), d = Db(a), e = d.length, g = 0;g < e;g++) {
    if(!b.call(i, d[g], c && c[g], a)) {
      return m
    }
  }
  return j
}
;function I(a, b) {
  this.s = {};
  this.j = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && f(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.Oc(a)
  }
}
s = I.prototype;
s.f = 0;
s.u = o("f");
s.K = function() {
  Hb(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.s[this.j[b]])
  }
  return a
};
s.ea = function() {
  Hb(this);
  return this.j.concat()
};
s.W = function(a) {
  return Ib(this.s, a)
};
s.fc = function(a) {
  for(var b = 0;b < this.j.length;b++) {
    var c = this.j[b];
    if(Ib(this.s, c) && this.s[c] == a) {
      return j
    }
  }
  return m
};
s.k = function(a, b) {
  if(this === a) {
    return j
  }
  if(this.f != a.u()) {
    return m
  }
  var c = b || Jb;
  Hb(this);
  for(var d, e = 0;d = this.j[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function Jb(a, b) {
  return a === b
}
s.Qa = function() {
  return 0 == this.f
};
s.clear = function() {
  this.s = {};
  this.f = this.j.length = 0
};
s.remove = function(a) {
  return Ib(this.s, a) ? (delete this.s[a], this.f--, this.j.length > 2 * this.f && Hb(this), j) : m
};
function Hb(a) {
  if(a.f != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      Ib(a.s, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.f != a.j.length) {
    for(var e = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], Ib(e, d) || (a.j[c++] = d, e[d] = 1), b++
    }
    a.j.length = c
  }
}
s.get = function(a, b) {
  return Ib(this.s, a) ? this.s[a] : b
};
s.set = function(a, b) {
  Ib(this.s, a) || (this.f++, this.j.push(a));
  this.s[a] = b
};
s.Oc = function(a) {
  var b;
  a instanceof I ? (b = a.ea(), a = a.K()) : (b = Sa(a), a = Ra(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
s.G = function() {
  return new I(this)
};
function Kb(a) {
  Hb(a);
  for(var b = {}, c = 0;c < a.j.length;c++) {
    var d = a.j[c];
    b[d] = a.s[d]
  }
  return b
}
function Ib(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function Lb(a) {
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
;function Mb(a, b) {
  this.Ya = a;
  this.Ua = b
}
Mb.prototype.k = function(a) {
  return a instanceof Mb && this.Ya == a.Ya && this.Ua.join(",") == a.Ua
};
Mb.prototype.p = function(a, b) {
  a.push("new SACK(", "" + this.Ya, ", ");
  G(this.Ua, a, b);
  a.push(")")
};
function Nb() {
  this.T = new I
}
s = Nb.prototype;
s.Ka = -1;
s.Q = 0;
s.append = function(a) {
  var b = Lb(a);
  this.T.set(this.Ka + 1, [a, b]);
  this.Ka += 1;
  this.Q += b
};
s.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
s.p = function(a) {
  a.push("<Queue with ", "" + this.T.u(), " item(s), counter=#", "" + this.Ka, ", size=", "" + this.Q, ">")
};
function Ob(a) {
  a = a.T.ea();
  gb(a);
  return a
}
function Pb() {
  this.Ja = new I
}
Pb.prototype.Ra = -1;
Pb.prototype.Q = 0;
function Qb(a) {
  var b = a.Ja.ea();
  gb(b);
  return new Mb(a.Ra, b)
}
var Rb = {};
function Sb() {
  return j
}
;var Tb, Ub, Vb, Wb, Xb;
function Yb() {
  return t.navigator ? t.navigator.userAgent : k
}
Xb = Wb = Vb = Ub = Tb = m;
var Zb;
if(Zb = Yb()) {
  var $b = t.navigator;
  Tb = 0 == Zb.indexOf("Opera");
  Ub = !Tb && -1 != Zb.indexOf("MSIE");
  Wb = (Vb = !Tb && -1 != Zb.indexOf("WebKit")) && -1 != Zb.indexOf("Mobile");
  Xb = !Tb && !Vb && "Gecko" == $b.product
}
var ac = Tb, J = Ub, bc = Xb, K = Vb, cc = Wb, dc = t.navigator, ec = -1 != (dc && dc.platform || "").indexOf("Mac"), fc;
a: {
  var gc = "", hc;
  if(ac && t.opera) {
    var ic = t.opera.version, gc = "function" == typeof ic ? ic() : ic
  }else {
    if(bc ? hc = /rv\:([^\);]+)(\)|;)/ : J ? hc = /MSIE\s+([^\);]+)(\)|;)/ : K && (hc = /WebKit\/(\S+)/), hc) {
      var jc = hc.exec(Yb()), gc = jc ? jc[1] : ""
    }
  }
  if(J) {
    var kc, lc = t.document;
    kc = lc ? lc.documentMode : i;
    if(kc > parseFloat(gc)) {
      fc = "" + kc;
      break a
    }
  }
  fc = gc
}
var mc = {};
function L(a) {
  return mc[a] || (mc[a] = 0 <= Ga(fc, a))
}
var nc = {};
function oc() {
  return nc[9] || (nc[9] = J && document.documentMode && 9 <= document.documentMode)
}
;function pc() {
}
var qc = 0;
s = pc.prototype;
s.key = 0;
s.Ta = m;
s.Sc = m;
s.Pa = function(a, b, c, d, e, g) {
  x(a) ? this.ye = j : a && a.handleEvent && x(a.handleEvent) ? this.ye = m : f(Error("Invalid listener argument"));
  this.lb = a;
  this.Te = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.rc = g;
  this.Sc = m;
  this.key = ++qc;
  this.Ta = m
};
s.handleEvent = function(a) {
  return this.ye ? this.lb.call(this.rc || this.src, a) : this.lb.handleEvent.call(this.lb, a)
};
var rc = !J || oc(), sc = !J || oc(), tc = J && !L("8");
!K || L("528");
bc && L("1.9b") || J && L("8") || ac && L("9.5") || K && L("528");
!bc || L("8");
var uc = {zg:"click", Eg:"dblclick", Yg:"mousedown", bh:"mouseup", ah:"mouseover", $g:"mouseout", Zg:"mousemove", mh:"selectstart", Tg:"keypress", Sg:"keydown", Ug:"keyup", xg:"blur", Mg:"focus", Fg:"deactivate", Ng:J ? "focusin" : "DOMFocusIn", Og:J ? "focusout" : "DOMFocusOut", yg:"change", lh:"select", nh:"submit", Rg:"input", hh:"propertychange", Jg:"dragstart", Gg:"dragenter", Ig:"dragover", Hg:"dragleave", Kg:"drop", rh:"touchstart", qh:"touchmove", ph:"touchend", oh:"touchcancel", Bg:"contextmenu", 
Lg:"error", Qg:"help", Vg:"load", Wg:"losecapture", ih:"readystatechange", jh:"resize", kh:"scroll", th:"unload", Pg:"hashchange", dh:"pagehide", eh:"pageshow", gh:"popstate", Cg:"copy", fh:"paste", Dg:"cut", ug:"beforecopy", vg:"beforecut", wg:"beforepaste", Xg:"message", Ag:"connect", sh:K ? "webkitTransitionEnd" : ac ? "oTransitionEnd" : "transitionend"};
function M() {
}
M.prototype.ca = m;
M.prototype.b = function() {
  this.ca || (this.ca = j, this.c())
};
M.prototype.c = function() {
  this.vf && vc.apply(k, this.vf)
};
function vc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? vc.apply(k, d) : d && "function" == typeof d.b && d.b()
  }
}
;function wc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
A(wc, M);
s = wc.prototype;
s.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
s.Sa = m;
s.Tb = j;
s.stopPropagation = function() {
  this.Sa = j
};
s.preventDefault = function() {
  this.Tb = m
};
function xc(a) {
  a.stopPropagation()
}
;function yc(a) {
  yc[" "](a);
  return a
}
yc[" "] = da;
function zc(a, b) {
  a && this.Pa(a, b)
}
A(zc, wc);
var Ac = [1, 4, 2];
s = zc.prototype;
s.target = k;
s.relatedTarget = k;
s.offsetX = 0;
s.offsetY = 0;
s.clientX = 0;
s.clientY = 0;
s.screenX = 0;
s.screenY = 0;
s.button = 0;
s.keyCode = 0;
s.charCode = 0;
s.ctrlKey = m;
s.altKey = m;
s.shiftKey = m;
s.metaKey = m;
s.Ad = m;
s.la = k;
s.Pa = function(a, b) {
  var c = this.type = a.type;
  wc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(bc) {
      var e;
      a: {
        try {
          yc(d.nodeName);
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
  this.offsetX = K || a.offsetX !== i ? a.offsetX : a.layerX;
  this.offsetY = K || a.offsetY !== i ? a.offsetY : a.layerY;
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
  this.Ad = ec ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.la = a;
  delete this.Tb;
  delete this.Sa
};
function Cc(a) {
  return rc ? 0 == a.la.button : "click" == a.type ? j : !!(a.la.button & Ac[0])
}
s.stopPropagation = function() {
  zc.e.stopPropagation.call(this);
  this.la.stopPropagation ? this.la.stopPropagation() : this.la.cancelBubble = j
};
s.preventDefault = function() {
  zc.e.preventDefault.call(this);
  var a = this.la;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, tc) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
s.c = function() {
  zc.e.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.la = k
};
var Dc = {}, N = {}, Ec = {}, Fc = {};
function O(a, b, c, d, e) {
  if(b) {
    if(u(b)) {
      for(var g = 0;g < b.length;g++) {
        O(a, b[g], c, d, e)
      }
      return k
    }
    var d = !!d, h = N;
    b in h || (h[b] = {f:0, V:0});
    h = h[b];
    d in h || (h[d] = {f:0, V:0}, h.f++);
    var h = h[d], l = ka(a), n;
    h.V++;
    if(h[l]) {
      n = h[l];
      for(g = 0;g < n.length;g++) {
        if(h = n[g], h.lb == c && h.rc == e) {
          if(h.Ta) {
            break
          }
          return n[g].key
        }
      }
    }else {
      n = h[l] = [], h.f++
    }
    g = Gc();
    g.src = a;
    h = new pc;
    h.Pa(c, g, a, b, d, e);
    c = h.key;
    g.key = c;
    n.push(h);
    Dc[c] = h;
    Ec[l] || (Ec[l] = []);
    Ec[l].push(h);
    a.addEventListener ? (a == t || !a.be) && a.addEventListener(b, g, d) : a.attachEvent(b in Fc ? Fc[b] : Fc[b] = "on" + b, g);
    return c
  }
  f(Error("Invalid event type"))
}
function Gc() {
  var a = Hc, b = sc ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Ic(a, b, c, d, e) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      Ic(a, b[g], c, d, e)
    }
    return k
  }
  a = O(a, b, c, d, e);
  Dc[a].Sc = j;
  return a
}
function Jc(a, b, c, d, e) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      Jc(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = Kc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].lb == c && a[g].capture == d && a[g].rc == e) {
          Lc(a[g].key);
          break
        }
      }
    }
  }
}
function Lc(a) {
  if(!Dc[a]) {
    return m
  }
  var b = Dc[a];
  if(b.Ta) {
    return m
  }
  var c = b.src, d = b.type, e = b.Te, g = b.capture;
  c.removeEventListener ? (c == t || !c.be) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in Fc ? Fc[d] : Fc[d] = "on" + d, e);
  c = ka(c);
  e = N[d][g][c];
  if(Ec[c]) {
    var h = Ec[c];
    ab(h, b);
    0 == h.length && delete Ec[c]
  }
  b.Ta = j;
  e.Le = j;
  Mc(d, g, c, e);
  delete Dc[a];
  return j
}
function Mc(a, b, c, d) {
  if(!d.wc && d.Le) {
    for(var e = 0, g = 0;e < d.length;e++) {
      d[e].Ta ? d[e].Te.src = k : (e != g && (d[g] = d[e]), g++)
    }
    d.length = g;
    d.Le = m;
    0 == g && (delete N[a][b][c], N[a][b].f--, 0 == N[a][b].f && (delete N[a][b], N[a].f--), 0 == N[a].f && delete N[a])
  }
}
function Nc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Qa(Ec, function(a) {
      for(var e = a.length - 1;0 <= e;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          Lc(g.key), c++
        }
      }
    })
  }else {
    if(a = ka(a), Ec[a]) {
      for(var a = Ec[a], e = a.length - 1;0 <= e;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          Lc(g.key), c++
        }
      }
    }
  }
}
function Kc(a, b, c) {
  var d = N;
  return b in d && (d = d[b], c in d && (d = d[c], a = ka(a), d[a])) ? d[a] : k
}
function Oc(a, b, c, d, e) {
  var g = 1, b = ka(b);
  if(a[b]) {
    a.V--;
    a = a[b];
    a.wc ? a.wc++ : a.wc = 1;
    try {
      for(var h = a.length, l = 0;l < h;l++) {
        var n = a[l];
        n && !n.Ta && (g &= Pc(n, e) !== m)
      }
    }finally {
      a.wc--, Mc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Pc(a, b) {
  var c = a.handleEvent(b);
  a.Sc && Lc(a.key);
  return c
}
function Hc(a, b) {
  if(!Dc[a]) {
    return j
  }
  var c = Dc[a], d = c.type, e = N;
  if(!(d in e)) {
    return j
  }
  var e = e[d], g, h;
  if(!sc) {
    g = b || ca("window.event");
    var l = j in e, n = m in e;
    if(l) {
      if(0 > g.keyCode || g.returnValue != i) {
        return j
      }
      a: {
        var p = m;
        if(0 == g.keyCode) {
          try {
            g.keyCode = -1;
            break a
          }catch(E) {
            p = j
          }
        }
        if(p || g.returnValue == i) {
          g.returnValue = j
        }
      }
    }
    p = new zc;
    p.Pa(g, this);
    g = j;
    try {
      if(l) {
        for(var r = [], w = p.currentTarget;w;w = w.parentNode) {
          r.push(w)
        }
        h = e[j];
        h.V = h.f;
        for(var B = r.length - 1;!p.Sa && 0 <= B && h.V;B--) {
          p.currentTarget = r[B], g &= Oc(h, r[B], d, j, p)
        }
        if(n) {
          h = e[m];
          h.V = h.f;
          for(B = 0;!p.Sa && B < r.length && h.V;B++) {
            p.currentTarget = r[B], g &= Oc(h, r[B], d, m, p)
          }
        }
      }else {
        g = Pc(c, p)
      }
    }finally {
      r && (r.length = 0), p.b()
    }
    return g
  }
  d = new zc(b, this);
  try {
    g = Pc(c, d)
  }finally {
    d.b()
  }
  return g
}
var Qc = 0;
function Rc() {
}
A(Rc, M);
s = Rc.prototype;
s.be = j;
s.yc = k;
s.Fd = aa("yc");
s.addEventListener = function(a, b, c, d) {
  O(this, a, b, c, d)
};
s.removeEventListener = function(a, b, c, d) {
  Jc(this, a, b, c, d)
};
s.dispatchEvent = function(a) {
  var b = a.type || a, c = N;
  if(b in c) {
    if(v(a)) {
      a = new wc(a, this)
    }else {
      if(a instanceof wc) {
        a.target = a.target || this
      }else {
        var d = a, a = new wc(b, this);
        Ua(a, d)
      }
    }
    var d = 1, e, c = c[b], b = j in c, g;
    if(b) {
      e = [];
      for(g = this;g;g = g.yc) {
        e.push(g)
      }
      g = c[j];
      g.V = g.f;
      for(var h = e.length - 1;!a.Sa && 0 <= h && g.V;h--) {
        a.currentTarget = e[h], d &= Oc(g, e[h], a.type, j, a) && a.Tb != m
      }
    }
    if(m in c) {
      if(g = c[m], g.V = g.f, b) {
        for(h = 0;!a.Sa && h < e.length && g.V;h++) {
          a.currentTarget = e[h], d &= Oc(g, e[h], a.type, m, a) && a.Tb != m
        }
      }else {
        for(e = this;!a.Sa && e && g.V;e = e.yc) {
          a.currentTarget = e, d &= Oc(g, e, a.type, m, a) && a.Tb != m
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
s.c = function() {
  Rc.e.c.call(this);
  Nc(this);
  this.yc = k
};
var Sc = t.window;
Qc++;
Qc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Tc(a, b) {
  this.dc = [];
  this.Xd = a;
  this.de = b || k
}
s = Tc.prototype;
s.va = m;
s.Ib = m;
s.Ob = 0;
s.Id = m;
s.rf = m;
s.Rc = 0;
s.cancel = function(a) {
  if(this.va) {
    this.Sb instanceof Tc && this.Sb.cancel()
  }else {
    if(this.v) {
      var b = this.v;
      delete this.v;
      a ? b.cancel(a) : (b.Rc--, 0 >= b.Rc && b.cancel())
    }
    this.Xd ? this.Xd.call(this.de, this) : this.Id = j;
    this.va || this.Eb(new Uc)
  }
};
s.$d = function(a, b) {
  Vc(this, a, b);
  this.Ob--;
  0 == this.Ob && this.va && Wc(this)
};
function Vc(a, b, c) {
  a.va = j;
  a.Sb = c;
  a.Ib = !b;
  Wc(a)
}
function Xc(a) {
  a.va && (a.Id || f(new Yc), a.Id = m)
}
s.ja = function(a) {
  Xc(this);
  Vc(this, j, a)
};
s.Eb = function(a) {
  Xc(this);
  Vc(this, m, a)
};
function Zc(a, b) {
  $c(a, b, k, i)
}
function $c(a, b, c, d) {
  a.dc.push([b, c, d]);
  a.va && Wc(a)
}
function ad(a, b) {
  $c(a, b, b, i)
}
function bd(a) {
  return Ya(a.dc, function(a) {
    return x(a[1])
  })
}
function Wc(a) {
  a.Qd && a.va && bd(a) && (t.clearTimeout(a.Qd), delete a.Qd);
  a.v && (a.v.Rc--, delete a.v);
  for(var b = a.Sb, c = m, d = m;a.dc.length && 0 == a.Ob;) {
    var e = a.dc.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.Ib ? h : g) {
      try {
        var l = g.call(e || a.de, b);
        ga(l) && (a.Ib = a.Ib && (l == b || l instanceof Error), a.Sb = b = l);
        b instanceof Tc && (d = j, a.Ob++)
      }catch(n) {
        b = n, a.Ib = j, bd(a) || (c = j)
      }
    }
  }
  a.Sb = b;
  d && a.Ob && ($c(b, y(a.$d, a, j), y(a.$d, a, m)), b.rf = j);
  c && (a.Qd = t.setTimeout(function() {
    ga(b.message) && b.stack && (b.message += "\n" + b.stack);
    f(b)
  }, 0))
}
function cd(a) {
  var b = new Tc;
  b.ja(a);
  return b
}
function dd(a) {
  var b = new Tc;
  b.Eb(a);
  return b
}
function Yc() {
  C.call(this)
}
A(Yc, C);
Yc.prototype.message = "Already called";
function Uc() {
  C.call(this)
}
A(Uc, C);
Uc.prototype.message = "Deferred was cancelled";
function ed(a) {
  this.H = a;
  this.gc = [];
  this.ge = [];
  this.qf = y(this.og, this)
}
ed.prototype.Nd = k;
function fd(a, b, c, d) {
  a.gc.push([b, c, d]);
  a.Nd == k && (a.Nd = a.H.setTimeout(a.qf, 0))
}
ed.prototype.og = function() {
  this.Nd = k;
  var a = this.gc;
  this.gc = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], e = c[1], c = c[2];
    try {
      d.apply(e, c)
    }catch(g) {
      this.H.setTimeout(function() {
        f(g)
      }, 0)
    }
  }
  if(0 == this.gc.length) {
    a = this.ge;
    this.ge = [];
    for(b = 0;b < a.length;b++) {
      a[b].ja(k)
    }
  }
};
var gd = new ed(t.window);
function hd(a, b) {
  switch(fa(b)) {
    case "string":
      a.push("<string>", D(b), "</string>");
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
        a.push('<property id="', d, '">'), hd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', D(c), '">'), hd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function id(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, e = arguments;
  d.push("<arguments>");
  for(var g = e.length, h = 1;h < g;h++) {
    hd(d, e[h])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;function jd() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ z()).toString(36)
}
function kd(a) {
  return a.substr(0, a.length - 1)
}
var ld = /^(0|[1-9]\d*)$/, md = /^(0|\-?[1-9]\d*)$/;
function nd(a) {
  var b = od;
  return ld.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function pd(a) {
  this.s = new I;
  a && this.Oc(a)
}
function qd(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ka(a) : b.substr(0, 1) + a
}
s = pd.prototype;
s.u = function() {
  return this.s.u()
};
s.add = function(a) {
  this.s.set(qd(a), a)
};
s.Oc = function(a) {
  for(var a = Db(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
s.Cd = function(a) {
  for(var a = Db(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
s.remove = function(a) {
  return this.s.remove(qd(a))
};
s.clear = function() {
  this.s.clear()
};
s.Qa = function() {
  return this.s.Qa()
};
s.contains = function(a) {
  return this.s.W(qd(a))
};
s.K = function() {
  return this.s.K()
};
s.G = function() {
  return new pd(this)
};
s.k = function(a) {
  return this.u() == Cb(a) && rd(this, a)
};
function rd(a, b) {
  var c = Cb(b);
  if(a.u() > c) {
    return m
  }
  !(b instanceof pd) && 5 < c && (b = new pd(b));
  return Gb(a, function(a) {
    if("function" == typeof b.contains) {
      a = b.contains(a)
    }else {
      if("function" == typeof b.fc) {
        a = b.fc(a)
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
;function sd(a) {
  return td(a || arguments.callee.caller, [])
}
function td(a, b) {
  var c = [];
  if($a(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(ud(a) + "(");
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
            g = (g = ud(g)) ? g : "[fn]";
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
        c.push(td(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function ud(a) {
  if(vd[a]) {
    return vd[a]
  }
  a = "" + a;
  if(!vd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    vd[a] = b ? b[1] : "[Anonymous]"
  }
  return vd[a]
}
var vd = {};
function wd(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
wd.prototype.cd = k;
wd.prototype.bd = k;
var xd = 0;
wd.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || xd++;
  this.df = d || z();
  this.Z = a;
  this.Ie = b;
  this.De = c;
  delete this.cd;
  delete this.bd
};
wd.prototype.rb = aa("Z");
function yd(a) {
  this.ud = a
}
yd.prototype.v = k;
yd.prototype.Z = k;
yd.prototype.ra = k;
yd.prototype.Kb = k;
function P(a, b) {
  this.name = a;
  this.value = b
}
P.prototype.toString = o("name");
var zd = new P("SHOUT", 1200), Ad = new P("SEVERE", 1E3), Bd = new P("WARNING", 900), Cd = new P("INFO", 800), Dd = new P("CONFIG", 700), Ed = new P("FINE", 500), Fd = new P("FINEST", 300), Gd = new P("ALL", 0), Hd = [new P("OFF", Infinity), zd, Ad, Bd, Cd, Dd, Ed, new P("FINER", 400), Fd, Gd], Id = k;
function Jd(a) {
  if(!Id) {
    Id = {};
    for(var b = 0, c;c = Hd[b];b++) {
      Id[c.value] = c, Id[c.name] = c
    }
  }
  return Id[a] || k
}
s = yd.prototype;
s.getParent = o("v");
s.rb = aa("Z");
function Kd(a) {
  if(a.Z) {
    return a.Z
  }
  if(a.v) {
    return Kd(a.v)
  }
  Ia("Root logger has no level set.");
  return k
}
s.log = function(a, b, c) {
  if(a.value >= Kd(this).value) {
    a = this.If(a, b, c);
    b = "log:" + a.Ie;
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.Kb) {
        for(var e = 0, g = i;g = c.Kb[e];e++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
s.If = function(a, b, c) {
  var d = new wd(a, "" + b, this.ud);
  if(c) {
    d.cd = c;
    var e;
    var g = arguments.callee.caller;
    try {
      var h;
      var l = ca("window.location.href");
      if(v(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var n, p, E = m;
        try {
          n = c.lineNumber || c.uh || "Not available"
        }catch(r) {
          n = "Not available", E = j
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || l
        }catch(w) {
          p = "Not available", E = j
        }
        h = E || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:p, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + D(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + D(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + D(sd(g) + "-> ")
    }catch(B) {
      e = "Exception trying to expose exception! You win, we lose. " + B
    }
    d.bd = e
  }
  return d
};
function Q(a, b) {
  a.log(Ad, b, i)
}
function R(a, b) {
  a.log(Bd, b, i)
}
s.info = function(a, b) {
  this.log(Cd, a, b)
};
function S(a, b) {
  a.log(Ed, b, i)
}
function T(a, b) {
  a.log(Fd, b, i)
}
var Ld = {}, Md = k;
function Nd() {
  Md || (Md = new yd(""), Ld[""] = Md, Md.rb(Dd))
}
function Od() {
  Nd();
  return Md
}
function U(a) {
  Nd();
  var b;
  if(!(b = Ld[a])) {
    b = new yd(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = U(a.substr(0, c));
    c.ra || (c.ra = {});
    c.ra[d] = b;
    b.v = c;
    Ld[a] = b
  }
  return b
}
;function Pd(a, b) {
  this.fa = "_" + jd();
  this.Jc = a;
  this.Ea = b;
  this.Ia = a.Ia
}
A(Pd, M);
s = Pd.prototype;
s.mb = j;
s.Wc = m;
s.a = U("cw.net.FlashSocket");
s.p = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.fa);
  a.push("'>")
};
function Qd(a, b, c) {
  "frames" == b ? (a = a.Ea, Rd(a.F), Sd(a.F, c)) : "stillreceiving" == b ? (c = a.Ea, T(c.a, "onstillreceiving"), Rd(c.F)) : "connect" == b ? (c = a.Ea, c.a.info("onconnect"), Rd(c.F), a = c.yb, c.yb = k, a.length && (T(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.Gc.bc(a))) : "close" == b ? (a.mb = m, a.b()) : "ioerror" == b ? (a.mb = m, b = a.Ea, R(b.a, "onioerror: " + H(c)), Ud(b.F, m), a.b()) : "securityerror" == b ? (a.mb = m, b = a.Ea, R(b.a, "onsecurityerror: " + H(c)), 
  Ud(b.F, m), a.b()) : f(Error("bad event: " + b))
}
function Vd(a) {
  a.Wc = j;
  a.mb = m;
  a.b()
}
s.Uc = function(a, b) {
  try {
    var c = this.Ia.CallFunction(id("__FC_connect", this.fa, a, b, "<int32/>\n"))
  }catch(d) {
    return Q(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), Vd(this)
  }
  '"OK"' != c && f(Error("__FC_connect failed? ret: " + c))
};
s.bc = function(a) {
  try {
    var b = this.Ia.CallFunction(id("__FC_writeFrames", this.fa, a))
  }catch(c) {
    return Q(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), Vd(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (R(this.a, "Flash no longer knows of " + this.fa + "; disposing."), this.b()) : f(Error("__FC_writeFrames failed? ret: " + b)))
};
s.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.mb);
  Pd.e.c.call(this);
  var a = this.Ia;
  delete this.Ia;
  if(this.mb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(id("__FC_close", this.fa)))
    }catch(b) {
      Q(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Wc = j
    }
  }
  if(this.Wc) {
    a = this.Ea, R(a.a, "oncrash"), Ud(a.F, j)
  }else {
    this.Ea.onclose()
  }
  delete this.Ea;
  delete this.Jc.gb[this.fa]
};
function Wd(a, b) {
  this.D = a;
  this.Ia = b;
  this.gb = {};
  this.Tc = "__FST_" + jd();
  t[this.Tc] = y(this.yf, this);
  var c = b.CallFunction(id("__FC_setCallbackFunc", this.Tc));
  '"OK"' != c && f(Error("__FC_setCallbackFunc failed? ret: " + c))
}
A(Wd, M);
s = Wd.prototype;
s.a = U("cw.net.FlashSocketTracker");
s.p = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  G(this.gb, a, b);
  a.push(">")
};
s.Xc = function(a) {
  a = new Pd(this, a);
  return this.gb[a.fa] = a
};
s.wf = function(a, b, c, d) {
  var e = this.gb[a];
  e ? "frames" == b && d ? (Qd(e, "ioerror", "FlashConnector hadError while handling data."), e.b()) : Qd(e, b, c) : R(this.a, "Cannot dispatch because we have no instance: " + H([a, b, c, d]))
};
s.yf = function(a, b, c, d) {
  try {
    fd(this.D, this.wf, this, [a, b, c, d])
  }catch(e) {
    t.window.setTimeout(function() {
      f(e)
    }, 0)
  }
};
s.c = function() {
  Wd.e.c.call(this);
  for(var a = Ra(this.gb);a.length;) {
    a.pop().b()
  }
  delete this.gb;
  delete this.Ia;
  t[this.Tc] = i
};
function Xd(a) {
  this.F = a;
  this.yb = []
}
A(Xd, M);
s = Xd.prototype;
s.a = U("cw.net.FlashSocketConduit");
s.bc = function(a) {
  this.yb ? (T(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.yb.push.apply(this.yb, a)) : (T(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.Gc.bc(a))
};
s.Uc = function(a, b) {
  this.Gc.Uc(a, b)
};
s.onclose = function() {
  this.a.info("onclose");
  Ud(this.F, m)
};
s.c = function() {
  this.a.info("in disposeInternal.");
  Xd.e.c.call(this);
  this.Gc.b();
  delete this.F
};
function Yd() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;var od = Math.pow(2, 53);
var Zd = {mf:q("<cw.eq.Wildcard>")};
function $d(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function ae(a, b, c) {
  var d = fa(a), e = fa(b);
  if(a == Zd || b == Zd) {
    return j
  }
  if(a != k && "function" == typeof a.k) {
    return c && c.push("running custom equals function on left object"), a.k(b, c)
  }
  if(b != k && "function" == typeof b.k) {
    return c && c.push("running custom equals function on right object"), b.k(a, c)
  }
  if($d(d) || $d(e)) {
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
                if(!ae(a[d], b[d], c)) {
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
          if(a.lf == Sb && b.lf == Sb) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!ae(a[g], b[g], c)) {
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
  C.call(this, a)
}
A(V, C);
V.prototype.name = "cw.net.InvalidFrame";
function be() {
  var a = [];
  this.Y(a);
  return a.join("")
}
function ce() {
}
ce.prototype.k = function(a, b) {
  return!(a instanceof ce) ? m : ae(de(this), de(a), b)
};
ce.prototype.p = function(a, b) {
  a.push("<HelloFrame properties=");
  G(de(this), a, b);
  a.push(">")
};
function de(a) {
  return[a.ub, a.Se, a.te, a.We, a.Zb, a.Ld, a.Ke, a.Ge, a.sd, a.Ee, a.gf, a.cf, a.aa, a.vc]
}
ce.prototype.S = be;
ce.prototype.Y = function(a) {
  var b = {};
  b.tnum = this.ub;
  b.ver = this.Se;
  b.format = this.te;
  b["new"] = this.We;
  b.id = this.Zb;
  b.ming = this.Ld;
  b.pad = this.Ke;
  b.maxb = this.Ge;
  ga(this.sd) && (b.maxt = this.sd);
  b.maxia = this.Ee;
  b.tcpack = this.gf;
  b.eeds = this.cf;
  b.sack = this.aa instanceof Mb ? kd((new ee(this.aa)).S()) : this.aa;
  b.seenack = this.vc instanceof Mb ? kd((new ee(this.vc)).S()) : this.vc;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new wb(i)).Wb(b), "H")
};
function fe(a) {
  this.tb = a
}
fe.prototype.k = function(a) {
  return a instanceof fe && this.tb == a.tb
};
fe.prototype.p = function(a, b) {
  a.push("new StringFrame(");
  G(this.tb, a, b);
  a.push(")")
};
fe.prototype.S = be;
fe.prototype.Y = function(a) {
  a.push(this.tb, " ")
};
function ge(a) {
  this.ec = a
}
ge.prototype.k = function(a) {
  return a instanceof ge && this.ec == a.ec
};
ge.prototype.p = function(a, b) {
  a.push("new CommentFrame(");
  G(this.ec, a, b);
  a.push(")")
};
ge.prototype.S = be;
ge.prototype.Y = function(a) {
  a.push(this.ec, "^")
};
function he(a) {
  this.Vb = a
}
he.prototype.k = function(a) {
  return a instanceof he && this.Vb == a.Vb
};
he.prototype.p = function(a) {
  a.push("new SeqNumFrame(", "" + this.Vb, ")")
};
he.prototype.S = be;
he.prototype.Y = function(a) {
  a.push("" + this.Vb, "N")
};
function ie(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = od;
    if(md.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var g = nd(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Mb(a, c)
}
function ee(a) {
  this.aa = a
}
ee.prototype.k = function(a, b) {
  return a instanceof ee && this.aa.k(a.aa, b)
};
ee.prototype.p = function(a, b) {
  a.push("new SackFrame(");
  G(this.aa, a, b);
  a.push(")")
};
ee.prototype.S = be;
ee.prototype.Y = function(a) {
  var b = this.aa;
  a.push(b.Ua.join(","), "|", "" + b.Ya);
  a.push("A")
};
function je(a) {
  this.Mb = a
}
je.prototype.k = function(a, b) {
  return a instanceof je && this.Mb.k(a.Mb, b)
};
je.prototype.p = function(a, b) {
  a.push("new StreamStatusFrame(");
  G(this.Mb, a, b);
  a.push(")")
};
je.prototype.S = be;
je.prototype.Y = function(a) {
  var b = this.Mb;
  a.push(b.Ua.join(","), "|", "" + b.Ya);
  a.push("T")
};
function ke() {
}
ke.prototype.p = function(a) {
  a.push("new StreamCreatedFrame()")
};
ke.prototype.k = function(a) {
  return a instanceof ke
};
ke.prototype.S = be;
ke.prototype.Y = function(a) {
  a.push("C")
};
function le() {
}
le.prototype.p = function(a) {
  a.push("new YouCloseItFrame()")
};
le.prototype.k = function(a) {
  return a instanceof le
};
le.prototype.S = be;
le.prototype.Y = function(a) {
  a.push("Y")
};
function me(a, b) {
  this.Qb = a;
  this.xb = b
}
me.prototype.k = function(a) {
  return a instanceof me && this.Qb == a.Qb && this.xb == a.xb
};
me.prototype.p = function(a, b) {
  a.push("new ResetFrame(");
  G(this.Qb, a, b);
  a.push(", ", "" + this.xb, ")")
};
me.prototype.S = be;
me.prototype.Y = function(a) {
  a.push(this.Qb, "|", "" + Number(this.xb), "!")
};
var ne = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function oe(a) {
  this.reason = a
}
oe.prototype.k = function(a) {
  return a instanceof oe && this.reason == a.reason
};
oe.prototype.p = function(a, b) {
  a.push("new TransportKillFrame(");
  G(this.reason, a, b);
  a.push(")")
};
oe.prototype.S = be;
oe.prototype.Y = function(a) {
  a.push(this.reason, "K")
};
function pe(a) {
  a || f(new V("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new fe(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = ie(kd(a)), a == k && f(new V("bad sack")), new ee(a)
  }
  if("N" == b) {
    return a = nd(kd(a)), a == k && f(new V("bad seqNum")), new he(a)
  }
  if("T" == b) {
    return a = ie(kd(a)), a == k && f(new V("bad lastSackSeen")), new je(a)
  }
  if("Y" == b) {
    return 1 != a.length && f(new V("leading garbage")), new le
  }
  if("^" == b) {
    return new ge(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && f(new V("leading garbage")), new ke
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && f(new V("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && f(new V("bad applicationLevel")), new me(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = ne[a], a == k && f(new V("unknown kill reason: " + a)), new oe(a)
  }
  f(new V("Invalid frame type " + b))
}
;var qe = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function re(a, b) {
  var c = a.match(qe), d = b.match(qe);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function W(a, b) {
  var c;
  a instanceof W ? (this.qb(b == k ? a.ga : b), se(this, a.ha), te(this, a.Wa), ue(this, a.X), ve(this, a.Ca), we(this, a.U), xe(this, a.L.G()), ye(this, a.Ma)) : a && (c = ("" + a).match(qe)) ? (this.qb(!!b), se(this, c[1] || "", j), te(this, c[2] || "", j), ue(this, c[3] || "", j), ve(this, c[4]), we(this, c[5] || "", j), xe(this, c[6] || "", j), ye(this, c[7] || "", j)) : (this.qb(!!b), this.L = new ze(k, this, this.ga))
}
s = W.prototype;
s.ha = "";
s.Wa = "";
s.X = "";
s.Ca = k;
s.U = "";
s.Ma = "";
s.Qf = m;
s.ga = m;
s.toString = function() {
  if(this.ba) {
    return this.ba
  }
  var a = [];
  this.ha && a.push(Ae(this.ha, Be), ":");
  this.X && (a.push("//"), this.Wa && a.push(Ae(this.Wa, Be), "@"), a.push(v(this.X) ? encodeURIComponent(this.X) : k), this.Ca != k && a.push(":", "" + this.Ca));
  this.U && (this.X && "/" != this.U.charAt(0) && a.push("/"), a.push(Ae(this.U, "/" == this.U.charAt(0) ? Ce : De)));
  var b = "" + this.L;
  b && a.push("?", b);
  this.Ma && a.push("#", Ae(this.Ma, Ee));
  return this.ba = a.join("")
};
s.G = function() {
  var a = this.ha, b = this.Wa, c = this.X, d = this.Ca, e = this.U, g = this.L.G(), h = this.Ma, l = new W(k, this.ga);
  a && se(l, a);
  b && te(l, b);
  c && ue(l, c);
  d && ve(l, d);
  e && we(l, e);
  g && xe(l, g);
  h && ye(l, h);
  return l
};
function se(a, b, c) {
  Fe(a);
  delete a.ba;
  a.ha = c ? b ? decodeURIComponent(b) : "" : b;
  a.ha && (a.ha = a.ha.replace(/:$/, ""))
}
function te(a, b, c) {
  Fe(a);
  delete a.ba;
  a.Wa = c ? b ? decodeURIComponent(b) : "" : b
}
function ue(a, b, c) {
  Fe(a);
  delete a.ba;
  a.X = c ? b ? decodeURIComponent(b) : "" : b
}
function ve(a, b) {
  Fe(a);
  delete a.ba;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && f(Error("Bad port number " + b)), a.Ca = b) : a.Ca = k
}
function we(a, b, c) {
  Fe(a);
  delete a.ba;
  a.U = c ? b ? decodeURIComponent(b) : "" : b
}
function xe(a, b, c) {
  Fe(a);
  delete a.ba;
  b instanceof ze ? (a.L = b, a.L.Rd = a, a.L.qb(a.ga)) : (c || (b = Ae(b, Ge)), a.L = new ze(b, a, a.ga))
}
function ye(a, b, c) {
  Fe(a);
  delete a.ba;
  a.Ma = c ? b ? decodeURIComponent(b) : "" : b
}
function Fe(a) {
  a.Qf && f(Error("Tried to modify a read-only Uri"))
}
s.qb = function(a) {
  this.ga = a;
  this.L && this.L.qb(a);
  return this
};
function He(a) {
  return a instanceof W ? a.G() : new W(a, i)
}
var Ie = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Ae(a, b) {
  var c = k;
  v(a) && (c = a, Ie.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, Je)));
  return c
}
function Je(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Be = /[#\/\?@]/g, De = /[\#\?:]/g, Ce = /[\#\?]/g, Ge = /[\#\?@]/g, Ee = /#/g;
function ze(a, b, c) {
  this.ka = a || k;
  this.Rd = b || k;
  this.ga = !!c
}
function Ke(a) {
  if(!a.l && (a.l = new I, a.f = 0, a.ka)) {
    for(var b = a.ka.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, g = k;
      0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = Le(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
s = ze.prototype;
s.l = k;
s.f = k;
s.u = function() {
  Ke(this);
  return this.f
};
s.add = function(a, b) {
  Ke(this);
  Me(this);
  a = Le(this, a);
  if(this.W(a)) {
    var c = this.l.get(a);
    u(c) ? c.push(b) : this.l.set(a, [c, b])
  }else {
    this.l.set(a, b)
  }
  this.f++;
  return this
};
s.remove = function(a) {
  Ke(this);
  a = Le(this, a);
  if(this.l.W(a)) {
    Me(this);
    var b = this.l.get(a);
    u(b) ? this.f -= b.length : this.f--;
    return this.l.remove(a)
  }
  return m
};
s.clear = function() {
  Me(this);
  this.l && this.l.clear();
  this.f = 0
};
s.Qa = function() {
  Ke(this);
  return 0 == this.f
};
s.W = function(a) {
  Ke(this);
  a = Le(this, a);
  return this.l.W(a)
};
s.fc = function(a) {
  var b = this.K();
  return $a(b, a)
};
s.ea = function() {
  Ke(this);
  for(var a = this.l.K(), b = this.l.ea(), c = [], d = 0;d < b.length;d++) {
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
s.K = function(a) {
  Ke(this);
  if(a) {
    if(a = Le(this, a), this.W(a)) {
      var b = this.l.get(a);
      if(u(b)) {
        return b
      }
      a = [];
      a.push(b)
    }else {
      a = []
    }
  }else {
    for(var b = this.l.K(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      u(d) ? db(a, d) : a.push(d)
    }
  }
  return a
};
s.set = function(a, b) {
  Ke(this);
  Me(this);
  a = Le(this, a);
  if(this.W(a)) {
    var c = this.l.get(a);
    u(c) ? this.f -= c.length : this.f--
  }
  this.l.set(a, b);
  this.f++;
  return this
};
s.get = function(a, b) {
  Ke(this);
  a = Le(this, a);
  if(this.W(a)) {
    var c = this.l.get(a);
    return u(c) ? c[0] : c
  }
  return b
};
s.toString = function() {
  if(this.ka) {
    return this.ka
  }
  if(!this.l) {
    return""
  }
  for(var a = [], b = 0, c = this.l.ea(), d = 0;d < c.length;d++) {
    var e = c[d], g = ya(e), e = this.l.get(e);
    if(u(e)) {
      for(var h = 0;h < e.length;h++) {
        0 < b && a.push("&"), a.push(g), "" !== e[h] && a.push("=", ya(e[h])), b++
      }
    }else {
      0 < b && a.push("&"), a.push(g), "" !== e && a.push("=", ya(e)), b++
    }
  }
  return this.ka = a.join("")
};
function Me(a) {
  delete a.$a;
  delete a.ka;
  a.Rd && delete a.Rd.ba
}
s.G = function() {
  var a = new ze;
  this.$a && (a.$a = this.$a);
  this.ka && (a.ka = this.ka);
  this.l && (a.l = this.l.G());
  return a
};
function Le(a, b) {
  var c = "" + b;
  a.ga && (c = c.toLowerCase());
  return c
}
s.qb = function(a) {
  a && !this.ga && (Ke(this), Me(this), Fb(this.l, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ga = a
};
s.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Fb(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
var Ne;
function Oe(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function Pe(a, b) {
  var c = Oe(a), d = fb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    $a(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function Qe(a, b) {
  var c = Oe(a), d = fb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < e.length;h++) {
    $a(d, e[h]) && (eb(e, h--, 1), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
;function Re(a, b) {
  this.width = a;
  this.height = b
}
s = Re.prototype;
s.G = function() {
  return new Re(this.width, this.height)
};
s.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
s.Qa = function() {
  return!(this.width * this.height)
};
s.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
s.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
var Se = !J || oc();
!bc && !J || J && oc() || bc && L("1.9.1");
var Te = J && !L("9");
function Ue(a, b) {
  this.x = ga(a) ? a : 0;
  this.y = ga(b) ? b : 0
}
Ue.prototype.G = function() {
  return new Ue(this.x, this.y)
};
Ue.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function Ve(a) {
  return a ? new We(Xe(a)) : Ne || (Ne = new We)
}
function X(a) {
  return v(a) ? document.getElementById(a) : a
}
function Ye(a, b) {
  Qa(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Ze ? a.setAttribute(Ze[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var Ze = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function $e() {
  var a = af.O.parentWindow || af.O.defaultView || window, b = a.document;
  if(K && !L("500") && !cc) {
    "undefined" == typeof a.innerHeight && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new Re(a.innerWidth, b)
  }
  a = "CSS1Compat" == b.compatMode ? b.documentElement : b.body;
  return new Re(a.clientWidth, a.clientHeight)
}
function bf(a, b, c) {
  return cf(document, arguments)
}
function cf(a, b) {
  var c = b[0], d = b[1];
  if(!Se && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', D(d.name), '"');
    if(d.type) {
      c.push(' type="', D(d.type), '"');
      var e = {};
      Ua(e, d);
      d = e;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  d && (v(d) ? c.className = d : u(d) ? Pe.apply(k, [c].concat(d)) : Ye(c, d));
  2 < b.length && df(a, c, b, 2);
  return c
}
function df(a, b, c, d) {
  function e(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && 0 < g.nodeType) ? Wa(ef(g) ? cb(g) : g, e) : e(g)
  }
}
function ff(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function gf(a, b) {
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
function Xe(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
var hf = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, jf = {IMG:" ", BR:"\n"};
function kf(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, "number" == typeof a && 0 <= a && 32768 > a) : m
}
function lf(a) {
  var b = [];
  mf(a, b, m);
  return b.join("")
}
function mf(a, b, c) {
  if(!(a.nodeName in hf)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in jf) {
        b.push(jf[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          mf(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function ef(a) {
  if(a && "number" == typeof a.length) {
    if(ja(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(x(a)) {
      return"function" == typeof a.item
    }
  }
  return m
}
function We(a) {
  this.O = a || t.document || document
}
s = We.prototype;
s.cb = Ve;
s.g = function(a) {
  return v(a) ? this.O.getElementById(a) : a
};
s.r = function(a, b, c) {
  return cf(this.O, arguments)
};
s.createElement = function(a) {
  return this.O.createElement(a)
};
s.createTextNode = function(a) {
  return this.O.createTextNode(a)
};
s.appendChild = function(a, b) {
  a.appendChild(b)
};
s.append = function(a, b) {
  df(Xe(a), a, arguments, 1)
};
s.contains = gf;
function nf(a, b, c, d) {
  this.contentWindow = a;
  this.hc = b;
  this.Md = c;
  this.Gf = d
}
nf.prototype.p = function(a, b) {
  a.push("<XDRFrame frameId=");
  G(this.Gf, a, b);
  a.push(", expandedUrl=");
  G(this.hc, a, b);
  a.push(", streams=");
  G(this.Md, a, b);
  a.push(">")
};
function of() {
  this.frames = [];
  this.qd = new I
}
of.prototype.a = U("cw.net.XDRTracker");
function pf(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor(Yd()) + ("" + Math.floor(Yd()))
  })
}
function qf(a, b) {
  for(var c = rf, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = 0 == e.Md.length) {
      g = e.hc;
      var h = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + H(b) + " existing frame " + H(e)), cd(e)
    }
  }
  d = jd() + jd();
  e = pf(a);
  g = t.location;
  g instanceof W || (g = He(g));
  e instanceof W || (e = He(e));
  var l = g;
  g = l.G();
  (h = !!e.ha) ? se(g, e.ha) : h = !!e.Wa;
  h ? te(g, e.Wa) : h = !!e.X;
  h ? ue(g, e.X) : h = e.Ca != k;
  var n = e.U;
  if(h) {
    ve(g, e.Ca)
  }else {
    if(h = !!e.U) {
      if("/" != n.charAt(0) && (l.X && !l.U ? n = "/" + n : (l = g.U.lastIndexOf("/"), -1 != l && (n = g.U.substr(0, l + 1) + n))), ".." == n || "." == n) {
        n = ""
      }else {
        if(!(-1 == n.indexOf("./") && -1 == n.indexOf("/."))) {
          for(var l = 0 == n.lastIndexOf("/", 0), n = n.split("/"), p = [], E = 0;E < n.length;) {
            var r = n[E++];
            "." == r ? l && E == n.length && p.push("") : ".." == r ? ((1 < p.length || 1 == p.length && "" != p[0]) && p.pop(), l && E == n.length && p.push("")) : (p.push(r), l = j)
          }
          n = p.join("/")
        }
      }
    }
  }
  h ? we(g, n) : h = "" !== e.L.toString();
  h ? (l = e.L, l.$a || (l.$a = l.toString() ? decodeURIComponent(l.toString()) : ""), xe(g, l.$a, i)) : h = !!e.Ma;
  h && ye(g, e.Ma);
  e = g.toString();
  g = ("" + t.location).match(qe)[3] || k;
  h = e.match(qe)[3] || k;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + H(b)), c = cd(new nf(t, e, [b], k))) : (g = X("minerva-elements"), h = new Tc, c.qd.set(d, [h, e, b]), c.a.info("Creating new XDRFrame " + H(d) + "for " + H(b)), c = bf("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + d}), g.appendChild(c), c = h);
  return c
}
of.prototype.tg = function(a) {
  var b = this.qd.get(a);
  b || f(Error("Unknown frameId " + H(a)));
  this.qd.remove(b);
  var c = b[0], a = new nf(X("minerva-xdrframe-" + a).contentWindow || (X("minerva-xdrframe-" + a).contentDocument || X("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (X("minerva-xdrframe-" + a).contentDocument || X("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.ja(a)
};
var rf = new of;
t.__XHRTracker_xdrFrameLoaded = y(rf.tg, rf);
var sf;
sf = m;
var tf = Yb();
tf && (-1 != tf.indexOf("Firefox") || -1 != tf.indexOf("Camino") || -1 != tf.indexOf("iPhone") || -1 != tf.indexOf("iPod") || -1 != tf.indexOf("iPad") || -1 != tf.indexOf("Android") || -1 != tf.indexOf("Chrome") && (sf = j));
var uf = sf;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function vf(a, b, c, d, e, g) {
  Tc.call(this, e, g);
  this.Ce = a;
  this.Yc = [];
  this.he = !!b;
  this.Df = !!c;
  this.uf = !!d;
  for(b = 0;b < a.length;b++) {
    $c(a[b], y(this.le, this, b, j), y(this.le, this, b, m))
  }
  0 == a.length && !this.he && this.ja(this.Yc)
}
A(vf, Tc);
vf.prototype.Me = 0;
vf.prototype.le = function(a, b, c) {
  this.Me++;
  this.Yc[a] = [b, c];
  this.va || (this.he && b ? this.ja([a, c]) : this.Df && !b ? this.Eb(c) : this.Me == this.Ce.length && this.ja(this.Yc));
  this.uf && !b && (c = k);
  return c
};
vf.prototype.Eb = function(a) {
  vf.e.Eb.call(this, a);
  Wa(this.Ce, function(a) {
    a.cancel()
  })
};
function wf(a) {
  a = new vf(a, m, j);
  Zc(a, function(a) {
    return Xa(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function xf(a, b) {
  this.sg = a;
  this.Fe = b
}
xf.prototype.md = 0;
xf.prototype.xc = 0;
xf.prototype.dd = m;
function yf(a) {
  var b = [];
  if(a.dd) {
    return[b, 2]
  }
  var c = a.md, d = a.sg.responseText;
  for(a.md = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var e = d.substr(a.xc, c - a.xc), e = e.replace(/\r$/, "");
    if(e.length > a.Fe) {
      return a.dd = j, [b, 2]
    }
    b.push(e);
    a.xc = c += 1
  }
  return a.md - a.xc - 1 > a.Fe ? (a.dd = j, [b, 2]) : [b, 1]
}
;function zf(a, b, c) {
  this.F = b;
  this.$ = a;
  this.Vc = c
}
A(zf, M);
s = zf.prototype;
s.a = U("cw.net.XHRMaster");
s.Ga = -1;
s.rd = function(a, b, c) {
  this.Vc.__XHRSlave_makeRequest(this.$, a, b, c)
};
s.xa = o("Ga");
s.wd = function(a, b) {
  1 != b && Q(this.a, H(this.$) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Rd(this.F);
  Sd(this.F, a)
};
s.xd = function(a) {
  S(this.a, "ongotheaders_: " + H(a));
  var b = k;
  "Content-Length" in a && (b = nd(a["Content-Length"]));
  a = this.F;
  S(a.a, a.q() + " got Content-Length: " + b);
  a.ia == Af && (b == k && (R(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Bf(a, 2E3 + 1E3 * (b / 3072)))
};
s.yd = function(a) {
  1 != a && S(this.a, this.F.q() + "'s XHR's readyState is " + a);
  this.Ga = a;
  2 <= this.Ga && Rd(this.F)
};
s.vd = function() {
  this.F.b()
};
s.c = function() {
  zf.e.c.call(this);
  delete Cf.na[this.$];
  this.Vc.__XHRSlave_dispose(this.$);
  delete this.Vc
};
function Df() {
  this.na = {}
}
A(Df, M);
s = Df.prototype;
s.a = U("cw.net.XHRMasterTracker");
s.Xc = function(a, b) {
  var c = "_" + jd(), d = new zf(c, a, b);
  return this.na[c] = d
};
s.wd = function(a, b, c) {
  var b = bb(b), d = this.na[a];
  d ? d.wd(b, c) : Q(this.a, "onframes_: no master for " + H(a))
};
s.xd = function(a, b) {
  var c = this.na[a];
  c ? c.xd(b) : Q(this.a, "ongotheaders_: no master for " + H(a))
};
s.yd = function(a, b) {
  var c = this.na[a];
  c ? c.yd(b) : Q(this.a, "onreadystatechange_: no master for " + H(a))
};
s.vd = function(a) {
  var b = this.na[a];
  b ? (delete this.na[b.$], b.vd()) : Q(this.a, "oncomplete_: no master for " + H(a))
};
s.c = function() {
  Df.e.c.call(this);
  for(var a = Ra(this.na);a.length;) {
    a.pop().b()
  }
  delete this.na
};
var Cf = new Df;
t.__XHRMaster_onframes = y(Cf.wd, Cf);
t.__XHRMaster_oncomplete = y(Cf.vd, Cf);
t.__XHRMaster_ongotheaders = y(Cf.xd, Cf);
t.__XHRMaster_onreadystatechange = y(Cf.yd, Cf);
function Ef(a, b, c) {
  this.host = a;
  this.port = b;
  this.ng = c
}
function Ff(a, b) {
  b || (b = a);
  this.Da = a;
  this.Ha = b
}
Ff.prototype.p = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  G(this.Da, a, b);
  a.push(", secondaryUrl=");
  G(this.Ha, a, b);
  a.push(">")
};
function Gf(a, b, c, d) {
  this.Da = a;
  this.Re = b;
  this.Ha = c;
  this.af = d;
  (!(0 == this.Da.indexOf("http://") || 0 == this.Da.indexOf("https://")) || !(0 == this.Ha.indexOf("http://") || 0 == this.Ha.indexOf("https://"))) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Re.location.href;
  re(this.Da, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.af.location.href;
  re(this.Ha, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
Gf.prototype.p = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  G(this.Da, a, b);
  a.push(", secondaryUrl=");
  G(this.Ha, a, b);
  a.push(">")
};
var Hf = new ge(";)]}");
function If() {
}
If.prototype.ie = q(1);
function Jf(a) {
  this.hg = a
}
Jf.prototype.p = function(a, b) {
  a.push("<UserContext for ");
  G(this.hg, a, b);
  a.push(">")
};
function Kf(a, b, c) {
  this.J = a;
  this.ig = b ? b : new If;
  this.D = c ? c : gd;
  this.$b = new pd;
  this.Zb = jd() + jd();
  this.Fa = new Nb;
  this.kd = new Pb;
  this.ac = k;
  this.Lc = [];
  this.vb = new Jf(this);
  K && (this.ac = Ic(t, "load", this.$f, m, this))
}
A(Kf, M);
s = Kf.prototype;
s.a = U("cw.net.ClientStream");
s.Ae = new Mb(-1, []);
s.Be = new Mb(-1, []);
s.Tf = 50;
s.Sf = 1048576;
s.zd = k;
s.onreset = k;
s.Oe = k;
s.Jd = m;
s.Dd = m;
s.d = 1;
s.Od = -1;
s.h = k;
s.z = k;
s.Rb = k;
s.Kd = 0;
s.Qe = 0;
s.$e = 0;
s.p = function(a, b) {
  a.push("<ClientStream id=");
  G(this.Zb, a, b);
  a.push(", state=", "" + this.d);
  a.push(", primary=");
  G(this.h, a, b);
  a.push(", secondary=");
  G(this.z, a, b);
  a.push(", resetting=");
  G(this.Rb, a, b);
  a.push(">")
};
function Lf(a) {
  var b = [-1];
  a.h && b.push(a.h.nb);
  a.z && b.push(a.z.nb);
  return Math.max.apply(Math.max, b)
}
function Mf(a) {
  if(1 != a.d) {
    var b = 0 != a.Fa.T.u(), c = Qb(a.kd), d = !c.k(a.Be) && !(a.h && c.k(a.h.kb) || a.z && c.k(a.z.kb)), e = Lf(a);
    if((b = b && e < a.Fa.Ka) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.h.zb ? (T(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.h, c != d.kb && (!d.oa && !d.A.length && Nf(d), d.A.push(new ee(c)), d.kb = c)), b && Of(a.h, a.Fa, e + 1), a.h.ma()) : a.z == k ? a.Jd ? (T(a.a, "tryToSend_: creating secondary to send " + g), a.z = Pf(a, m), b && Of(a.z, a.Fa, e + 1), a.z.ma()) : (T(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.Dd = j) : T(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
s.$f = function() {
  this.ac = k;
  if(this.h && this.h.hb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.h;
    a.Nc = j;
    a.b()
  }
  this.z && this.z.hb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.z, a.Nc = j, a.b())
};
function Rf(a, b) {
  var c;
  ga(c) || (c = j);
  3 < a.d && f(Error("sendStrings: Can't send strings in state " + a.d));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || f(Error("sendStrings: string #" + c + " has illegal chars: " + H(d)))
      }
    }
    a.Fa.extend(b);
    Mf(a)
  }
}
function Pf(a, b) {
  var c;
  a.J instanceof Gf ? c = 1 == a.ig.ie() ? Af : Sf : a.J instanceof Ef ? c = Tf : f(Error("Don't support endpoint " + H(a.J)));
  a.Od += 1;
  c = new Uf(a.D, a, a.Od, c, a.J, b);
  T(a.a, "Created: " + c.q());
  a.$b.add(c);
  return c
}
function Vf(a, b, c) {
  var d = new Wf(a.D, a, b, c);
  T(a.a, "Created: " + d.q() + ", delay=" + b + ", times=" + c);
  a.$b.add(d);
  return d
}
function Xf(a, b) {
  a.$b.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  S(a.a, "Offline: " + b.q());
  a.Kd = b.Ba ? a.Kd + b.Ba : 0;
  1 <= a.Kd && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.vb, "stream penalty reached limit", m), a.b());
  if(3 < a.d) {
    4 == a.d && b.kf ? (S(a.a, "Disposing because resettingTransport_ is done."), a.b()) : S(a.a, "Not creating a transport because ClientStream is in state " + a.d)
  }else {
    var c;
    var d;
    c = b instanceof Wf;
    if(!c && b.Nc) {
      var e = K ? uf ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      T(a.a, "getDelayForNextTransport_: " + H({delay:c, times:d}))
    }else {
      if(d = b.Zd(), b == a.h ? d ? e = ++a.Qe : c || (e = a.Qe = 0) : d ? e = ++a.$e : c || (e = a.$e = 0), c || !e) {
        d = c = 0, T(a.a, "getDelayForNextTransport_: " + H({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(4E3 * Math.random()) - 2E3, l = Math.max(0, b.ff - b.Pd);
        d = (c = Math.max(0, g + h - l)) ? 1 : 0;
        T(a.a, "getDelayForNextTransport_: " + H({count:e, base:g, variance:h, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    b == a.h ? (a.h = k, c ? a.h = Vf(a, e, c) : (e = Lf(a), a.h = Pf(a, j), Of(a.h, a.Fa, e + 1)), a.h.ma()) : b == a.z && (a.z = k, c ? (a.z = Vf(a, e, c), a.z.ma()) : Mf(a))
  }
}
s.reset = function(a) {
  3 < this.d && f(Error("reset: Can't send reset in state " + this.d));
  this.d = 4;
  this.h && this.h.zb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Yf(this.h, a), this.h.ma()) : (this.h && (S(this.a, "reset: Disposing primary before sending ResetFrame."), this.h.b()), this.z && (S(this.a, "reset: Disposing secondary before sending ResetFrame."), this.z.b()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Rb = Pf(this, m), Yf(this.Rb, a), this.Rb.ma());
  this.onreset && this.onreset.call(this.vb, a, j)
};
function Zf(a, b, c, d) {
  var e;
  e = a.kd;
  for(var g = a.Tf, h = a.Sf, l = [], n = m, p = 0, E = c.length;p < E;p++) {
    var r = c[p], w = r[0], r = r[1];
    if(w == e.Ra + 1) {
      e.Ra += 1;
      for(l.push(r);;) {
        w = e.Ra + 1;
        r = e.Ja.get(w, Rb);
        if(r === Rb) {
          break
        }
        l.push(r[0]);
        e.Ja.remove(w);
        e.Q -= r[1];
        e.Ra = w
      }
    }else {
      if(!(w <= e.Ra)) {
        if(g != k && e.Ja.u() >= g) {
          n = j;
          break
        }
        var B = Lb(r);
        if(h != k && e.Q + B > h) {
          n = j;
          break
        }
        e.Ja.set(w, [r, B]);
        e.Q += B
      }
    }
  }
  e.Ja.Qa() && e.Ja.clear();
  e = [l, n];
  c = e[0];
  e = e[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(h = c[g], a.zd && a.zd.call(a.vb, h), 4 == a.d || a.ca) {
        return
      }
    }
  }
  d || Mf(a);
  if(!(4 == a.d || a.ca) && e) {
    Q(b.a, b.q() + "'s peer caused rwin overflow."), b.b()
  }
}
s.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.d && f(Error("ClientStream.start: " + H(this) + " already started"));
  this.d = 2;
  if(this.J instanceof Ff) {
    var a = qf(this.J.Da, this), b = qf(this.J.Ha, this);
    Zc(wf([a, b]), y(this.Bf, this))
  }else {
    $f(this)
  }
};
s.Bf = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].hc, e = a[1].hc;
  this.Lc.push(a[0]);
  this.Lc.push(a[1]);
  this.J = new Gf(d, b, e, c);
  $f(this)
};
function $f(a) {
  a.d = 3;
  a.h = Pf(a, j);
  Of(a.h, a.Fa, k);
  a.h.ma()
}
s.c = function() {
  this.a.info(H(this) + " in disposeInternal.");
  this.d = 5;
  for(var a = this.$b.K(), b = 0;b < a.length;b++) {
    a[b].b()
  }
  for(a = 0;a < this.Lc.length;a++) {
    ab(this.Lc[a].Md, this)
  }
  K && this.ac && (Lc(this.ac), this.ac = k);
  this.Oe && this.Oe.call(this.vb);
  delete this.$b;
  delete this.h;
  delete this.z;
  delete this.Rb;
  delete this.vb;
  Kf.e.c.call(this)
};
var Af = 1, Sf = 2, Tf = 3;
function Uf(a, b, c, d, e, g) {
  this.D = a;
  this.B = b;
  this.ub = c;
  this.ia = d;
  this.J = e;
  this.A = [];
  this.Za = g;
  this.zb = !this.hb();
  this.pb = this.ia != Af;
  this.pf = y(this.lg, this)
}
A(Uf, M);
s = Uf.prototype;
s.a = U("cw.net.ClientTransport");
s.o = k;
s.Pd = k;
s.ff = k;
s.Ac = k;
s.oa = m;
s.Hc = m;
s.kb = k;
s.jc = 0;
s.nb = -1;
s.zc = -1;
s.kf = m;
s.Nc = m;
s.Ba = 0;
s.Jb = m;
s.p = function(a) {
  a.push("<ClientTransport #", "" + this.ub, ", becomePrimary=", "" + this.Za, ">")
};
s.q = function() {
  return(this.Za ? "Prim. T#" : "Sec. T#") + this.ub
};
s.Zd = function() {
  return!(!this.Jb && this.jc)
};
s.hb = function() {
  return this.ia == Af || this.ia == Sf
};
function ag(a, b) {
  gb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Zf(a.B, a, b, !a.pb)
}
function bg(a, b, c) {
  try {
    var d = pe(b);
    a.jc += 1;
    S(a.a, a.q() + " RECV " + H(d));
    var e;
    1 == a.jc && !d.k(Hf) && a.hb() ? (R(a.a, a.q() + " is closing soon because got bad preamble: " + H(d)), e = j) : e = m;
    if(e) {
      return j
    }
    if(d instanceof fe) {
      if(!/^([ -~]*)$/.test(d.tb)) {
        return a.Jb = j
      }
      a.zc += 1;
      c.push([a.zc, d.tb])
    }else {
      if(d instanceof ee) {
        var g = a.B, h = d.aa;
        g.Ae = h;
        var l = g.Fa, n = h.Ya, c = m;
        n > l.Ka && (c = j);
        for(var p = Ob(l).concat(), d = 0;d < p.length;d++) {
          var E = p[d];
          if(E > n) {
            break
          }
          var r = l.T.get(E)[1];
          l.T.remove(E);
          l.Q -= r
        }
        for(d = 0;d < h.Ua.length;d++) {
          var w = h.Ua[d];
          w > l.Ka && (c = j);
          l.T.W(w) && (r = l.T.get(w)[1], l.T.remove(w), l.Q -= r)
        }
        l.T.Qa() && l.T.clear();
        if(c) {
          return R(a.a, a.q() + " is closing soon because got bad SackFrame"), a.Jb = j
        }
      }else {
        if(d instanceof he) {
          a.zc = d.Vb - 1
        }else {
          if(d instanceof je) {
            a.B.Be = d.Mb
          }else {
            if(d instanceof le) {
              return T(a.a, a.q() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof oe) {
              return a.Jb = j, "stream_attach_failure" == d.reason ? a.Ba += 1 : "acked_unsent_strings" == d.reason && (a.Ba += 0.5), T(a.a, a.q() + " is closing soon because got " + H(d)), j
            }
            if(!(d instanceof ge)) {
              if(d instanceof ke) {
                var B = a.B, Ph = !a.pb;
                T(B.a, "Stream is now confirmed to exist at server.");
                B.Jd = j;
                B.Dd && !Ph && (B.Dd = m, Mf(B))
              }else {
                if(c.length) {
                  ag(a, c);
                  if(!u(c)) {
                    for(var Td = c.length - 1;0 <= Td;Td--) {
                      delete c[Td]
                    }
                  }
                  c.length = 0
                }
                if(d instanceof me) {
                  var Bc = a.B;
                  Bc.onreset && Bc.onreset.call(Bc.vb, d.Qb, d.xb);
                  Bc.b();
                  return j
                }
                f(Error(a.q() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch(Qf) {
    return Qf instanceof V || f(Qf), R(a.a, a.q() + " is closing soon because got InvalidFrame: " + H(b)), a.Jb = j
  }
  return m
}
function Sd(a, b) {
  a.Hc = j;
  try {
    for(var c = m, d = [], e = 0, g = b.length;e < g;e++) {
      if(a.ca) {
        a.a.info(a.q() + " returning from loop because we're disposed.");
        return
      }
      if(c = bg(a, b[e], d)) {
        break
      }
    }
    d.length && ag(a, d);
    a.Hc = m;
    a.A.length && a.ma();
    c && (T(a.a, a.q() + " closeSoon is true.  Frames were: " + H(b)), a.b())
  }finally {
    a.Hc = m
  }
}
s.lg = function() {
  R(this.a, this.q() + " timed out due to lack of connection or no data being received.");
  this.b()
};
function cg(a) {
  a.Ac != k && (a.D.H.clearTimeout(a.Ac), a.Ac = k)
}
function Bf(a, b) {
  cg(a);
  b = Math.round(b);
  a.Ac = a.D.H.setTimeout(a.pf, b);
  S(a.a, a.q() + "'s receive timeout set to " + b + " ms.")
}
function Rd(a) {
  a.ia != Af && (a.ia == Tf || a.ia == Sf ? Bf(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ia)))
}
function Nf(a) {
  var b = new ce;
  b.ub = a.ub;
  b.Se = 2;
  b.te = 2;
  a.B.Jd || (b.We = j);
  b.Zb = a.B.Zb;
  b.Ld = a.pb;
  b.Ld && (b.Ke = 4096);
  b.Ge = 3E5;
  b.Ee = a.pb ? Math.floor(10) : 0;
  b.gf = m;
  a.Za && (b.cf = k, b.sd = Math.floor((a.pb ? 358E4 : 25E3) / 1E3));
  b.aa = Qb(a.B.kd);
  b.vc = a.B.Ae;
  a.A.push(b);
  a.kb = b.aa
}
function Ud(a, b) {
  b && (a.Ba += 0.5);
  a.b()
}
s.ma = function() {
  this.oa && !this.zb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.Hc) {
    T(this.a, this.q() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.oa;
    this.oa = j;
    !a && !this.A.length && Nf(this);
    for(a = 0;a < this.A.length;a++) {
      S(this.a, this.q() + " SEND " + H(this.A[a]))
    }
    if(this.hb()) {
      for(var a = [], b = 0, c = this.A.length;b < c;b++) {
        this.A[b].Y(a), a.push("\n")
      }
      this.A = [];
      a = a.join("");
      b = this.Za ? this.J.Da : this.J.Ha;
      this.o = Cf.Xc(this, this.Za ? this.J.Re : this.J.af);
      this.Pd = this.D.H === Sc ? z() : this.D.H.getTime();
      this.o.rd(b, "POST", a);
      Bf(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.pb ? 0 : this.Za ? 25E3 : 0))
    }else {
      if(this.ia == Tf) {
        a = [];
        b = 0;
        for(c = this.A.length;b < c;b++) {
          a.push(this.A[b].S())
        }
        this.A = [];
        this.o ? this.o.bc(a) : (b = this.J, this.o = new Xd(this), this.o.Gc = b.ng.Xc(this.o), this.Pd = this.D.H === Sc ? z() : this.D.H.getTime(), this.o.Uc(b.host, b.port), this.o.ca || (this.o.bc(a), this.o.ca || Bf(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.ia))
      }
    }
  }
};
function Of(a, b, c) {
  !a.oa && !a.A.length && Nf(a);
  for(var d = Math.max(c, a.nb + 1), e = Ob(b), c = [], g = 0;g < e.length;g++) {
    var h = e[g];
    (d == k || h >= d) && c.push([h, b.T.get(h)[0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], e = g[0], g = g[1], (-1 == a.nb || a.nb + 1 != e) && a.A.push(new he(e)), a.A.push(new fe(g)), a.nb = e
  }
}
s.c = function() {
  this.a.info(this.q() + " in disposeInternal.");
  Uf.e.c.call(this);
  this.ff = this.D.H === Sc ? z() : this.D.H.getTime();
  this.A = [];
  cg(this);
  this.o && this.o.b();
  var a = this.B;
  this.B = k;
  Xf(a, this)
};
function Yf(a, b) {
  !a.oa && !a.A.length && Nf(a);
  a.A.push(new me(b, j));
  a.kf = j
}
function Wf(a, b, c, d) {
  this.D = a;
  this.B = b;
  this.ee = c;
  this.ae = d
}
A(Wf, M);
s = Wf.prototype;
s.oa = m;
s.zb = m;
s.qc = k;
s.kb = k;
s.a = U("cw.net.DoNothingTransport");
function dg(a) {
  a.qc = a.D.H.setTimeout(function() {
    a.qc = k;
    a.ae--;
    a.ae ? dg(a) : a.b()
  }, a.ee)
}
s.ma = function() {
  this.oa && !this.zb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.oa = j;
  dg(this)
};
s.p = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.ee, ">")
};
s.hb = q(m);
s.q = q("Wast. T");
s.Zd = q(m);
s.c = function() {
  this.a.info(this.q() + " in disposeInternal.");
  Wf.e.c.call(this);
  this.qc != k && this.D.H.clearTimeout(this.qc);
  var a = this.B;
  this.B = k;
  Xf(a, this)
};
var eg;
function fg() {
  kb.apply(this)
}
A(fg, kb);
function gg() {
  kb.apply(this)
}
A(gg, kb);
qb(fg, {"0":{name:"NewPost", Hf:"demosminerva.ljstream_messages.NewPost"}, 1:{name:"title", bb:9, type:String}, 2:{name:"url", bb:9, type:String}, 3:{name:"body", bb:9, type:String}, 4:{name:"num_images", bb:5, type:Number}, 5:{name:"lang", bb:9, type:String}});
qb(gg, {"0":{name:"SetPreferences", Hf:"demosminerva.ljstream_messages.SetPreferences"}, 1:{name:"include_russian_posts", bb:8, type:Boolean}});
function hg() {
  this.Ve = z()
}
var ig = new hg;
hg.prototype.set = aa("Ve");
hg.prototype.reset = function() {
  this.set(z())
};
hg.prototype.get = o("Ve");
function jg(a) {
  this.Bd = a || "";
  this.fg = ig
}
jg.prototype.bg = j;
jg.prototype.dg = j;
jg.prototype.cg = j;
jg.prototype.bf = m;
function kg(a) {
  return 10 > a ? "0" + a : "" + a
}
function lg(a, b) {
  var c = (a.df - b) / 1E3, d = c.toFixed(3), e = 0;
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
function mg(a) {
  jg.call(this, a)
}
A(mg, jg);
mg.prototype.bf = j;
function ng(a) {
  this.td = a || 100;
  this.qa = []
}
s = ng.prototype;
s.Nb = 0;
s.add = function(a) {
  this.qa[this.Nb] = a;
  this.Nb = (this.Nb + 1) % this.td
};
s.get = function(a) {
  a = og(this, a);
  return this.qa[a]
};
s.set = function(a, b) {
  a = og(this, a);
  this.qa[a] = b
};
s.u = function() {
  return this.qa.length
};
s.Qa = function() {
  return 0 == this.qa.length
};
s.clear = function() {
  this.Nb = this.qa.length = 0
};
s.K = function() {
  for(var a = this.u(), b = this.u(), c = [], a = this.u() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
s.ea = function() {
  for(var a = [], b = this.u(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
s.W = function(a) {
  return a < this.u()
};
s.fc = function(a) {
  for(var b = this.u(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return j
    }
  }
  return m
};
function og(a, b) {
  b >= a.qa.length && f(Error("Out of bounds exception"));
  return a.qa.length < a.td ? b : (a.Nb + Number(b)) % a.td
}
;function pg(a, b) {
  this.ya = a || "";
  this.Bd = b || "";
  this.ob = [];
  this.Cc = new ng(qg);
  this.Yf = y(this.nf, this);
  this.Ff = new mg(this.Bd);
  this.Cf = {};
  if(j != this.we) {
    this.we = j;
    var c = Od(), d = this.Yf;
    c.Kb || (c.Kb = []);
    c.Kb.push(d)
  }
  this.Db = "1" == rg(this.ya, "enabled");
  t.setInterval(y(this.ag, this), 7500)
}
var qg = 500;
s = pg.prototype;
s.jf = "LOGGING";
s.zf = m;
s.t = k;
s.Td = m;
s.we = m;
s.Wd = k;
s.nd = z();
s.Pa = function() {
  this.Db && sg(this)
};
s.isEnabled = o("Db");
s.Ec = function(a) {
  if(this.Db = a) {
    sg(this), this.t && this.Kc()
  }
  tg(this, "enabled", a ? "1" : "0")
};
function ug(a) {
  return!!a.t && !a.t.closed
}
s.sf = function() {
  this.Cc.clear();
  ug(this) && this.Kc()
};
s.nf = function(a) {
  if(!this.Cf[a.De]) {
    var b = this.Ff, c;
    switch(a.Z.value) {
      case zd.value:
        c = "dbg-sh";
        break;
      case Ad.value:
        c = "dbg-sev";
        break;
      case Bd.value:
        c = "dbg-w";
        break;
      case Cd.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.Bd, " ");
    if(b.bg) {
      var e = new Date(a.df);
      d.push("[", kg(e.getFullYear() - 2E3) + kg(e.getMonth() + 1) + kg(e.getDate()) + " " + kg(e.getHours()) + ":" + kg(e.getMinutes()) + ":" + kg(e.getSeconds()) + "." + kg(Math.floor(e.getMilliseconds() / 10)), "] ")
    }
    b.dg && d.push("[", Fa(lg(a, b.fg.get())), "s] ");
    b.cg && d.push("[", D(a.De), "] ");
    d.push('<span class="', c, '">', za(Fa(D(a.Ie))));
    b.bf && a.cd && d.push("<br>", za(Fa(a.bd || "")));
    d.push("</span><br>");
    b = d.join("");
    this.Db ? (sg(this), this.Cc.add(b), vg(this, b)) : this.Cc.add(b);
    this.zf && a.Z.value >= Ad.value && this.Ec(j)
  }
};
function vg(a, b) {
  a.ob.push(b);
  t.clearTimeout(a.Wd);
  750 < z() - a.nd ? a.Ud() : a.Wd = t.setTimeout(y(a.Ud, a), 250)
}
s.Ud = function() {
  this.nd = z();
  if(ug(this)) {
    var a = this.t.document.body, a = a && 100 >= a.scrollHeight - (a.scrollTop + a.clientHeight);
    this.t.document.write(this.ob.join(""));
    this.ob.length = 0;
    a && this.t.scrollTo(0, 1E6)
  }
};
function wg(a) {
  for(var b = a.Cc.K(), c = 0;c < b.length;c++) {
    vg(a, b[c])
  }
}
function sg(a) {
  if(!ug(a) && !a.Td) {
    var b = rg(a.ya, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), e = Number(b[2]), b = Number(b[3]);
    a.Td = j;
    a.t = window.open("", J ? a.ya.replace(/[\s\-\.\,]/g, "_") : a.ya, "width=" + e + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    !a.t && !a.eg && (alert("Logger popup was blocked"), a.eg = j);
    a.Td = m;
    a.t && a.Kc()
  }
}
s.nc = q("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
s.Kc = function() {
  ug(this) || (this.t.document.open(), vg(this, "<style>" + this.nc() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.jf + "<br><small>Logger: " + this.ya + "</small></div><hr>"), wg(this))
};
function tg(a, b, c) {
  b += a.ya;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(z() + 2592E6)).toUTCString()
}
function rg(a, b, c) {
  var a = b + a, b = "" + document.cookie, d = b.indexOf(a + "=");
  return-1 != d ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, -1 == c ? b.length : c))) : c || ""
}
s.ag = function() {
  ug(this) && tg(this, "dbg", (this.t.screenX || this.t.screenLeft || 0) + "," + (this.t.screenY || this.t.screenTop || 0) + "," + (this.t.outerWidth || 800) + "," + (this.t.outerHeight || 500))
};
function xg(a, b) {
  if(yg) {
    var c = zg(), d;
    for(d in c) {
      var e = d.replace("fancywindow.sel.", ""), e = U(e), g = e.Z, h = window.localStorage.getItem(d).toString();
      (!g || g.toString() != h) && e.rb(Jd(h))
    }
  }
  pg.call(this, a, b)
}
A(xg, pg);
var yg;
a: {
  try {
    yg = !!window.localStorage.getItem;
    break a
  }catch(Ag) {
  }
  yg = m
}
s = xg.prototype;
s.Ud = function() {
  this.nd = z();
  if(ug(this)) {
    for(var a = this.N.g("log"), b = 100 >= a.scrollHeight - (a.scrollTop + a.offsetHeight), c = 0;c < this.ob.length;c++) {
      var d = this.N.r("div", "logmsg");
      d.innerHTML = this.ob[c];
      a.appendChild(d)
    }
    this.ob.length = 0;
    this.Ye();
    b && (a.scrollTop = a.scrollHeight)
  }
};
s.Kc = function() {
  if(ug(this)) {
    var a = this.t.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.ya + "</title><style>" + this.nc() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.ya + "</b></p><p>" + this.jf + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (J ? a.body : this.t).onresize = y(this.Ye, this);
    this.N = new We(a);
    this.N.g("openbutton").onclick = y(this.Wf, this);
    this.N.g("closebutton").onclick = y(this.tf, this);
    this.N.g("clearbutton").onclick = y(this.sf, this);
    this.N.g("exitbutton").onclick = y(this.Af, this);
    wg(this)
  }
};
s.Wf = function() {
  var a = this.N.g("optionsarea");
  a.innerHTML = "";
  for(var b = Bg(), c = this.N, d = 0;d < b.length;d++) {
    var e = U(b[d]), e = c.r("div", {}, Cg(this, "sel" + b[d], e.Z ? e.Z.name : "INHERIT"), c.r("span", {}, b[d] || "(root)"));
    a.appendChild(e)
  }
  this.N.g("options").style.display = "block";
  return m
};
function Cg(a, b, c) {
  for(var a = a.N, b = a.r("select", {id:b}), d = 0;d < Hd.length;d++) {
    var e = Hd[d], g = a.r("option", {}, e.name);
    c == e.name && (g.selected = j);
    b.appendChild(g)
  }
  b.appendChild(a.r("option", {selected:"INHERIT" == c}, "INHERIT"));
  return b
}
s.tf = function() {
  this.N.g("options").style.display = "none";
  for(var a = Bg(), b = this.N, c = 0;c < a.length;c++) {
    var d = U(a[c]), e = b.g("sel" + a[c]), e = e.options[e.selectedIndex].text;
    "INHERIT" == e ? d.rb(k) : d.rb(Jd(e))
  }
  if(yg) {
    a = Bg();
    b = zg();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], e = U(a[c]).Z, d in b ? e ? window.localStorage.getItem(d) != e.name && window.localStorage.setItem(d, e.name) : window.localStorage.removeItem(d) : e && window.localStorage.setItem(d, e.name)
    }
  }
  return m
};
s.Ye = function() {
  var a = this.N, b = a.g("log"), c = a.g("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.O.body.offsetHeight - c.offsetHeight - (J ? 4 : 0) + "px"
};
s.Af = function() {
  this.Ec(m);
  this.t && this.t.close()
};
s.nc = function() {
  return xg.e.nc.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function zg() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != k && 0 == d.lastIndexOf("fancywindow.sel.", 0) && (a[d] = j)
  }
  return a
}
function Bg() {
  var a = Sa(Ld);
  a.sort();
  return a
}
;function Dg(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
var Eg = bc ? "MozUserSelect" : K ? "WebkitUserSelect" : k;
function Fg(a) {
  this.re = a;
  this.j = []
}
A(Fg, M);
var Gg = [];
function Y(a, b, c, d) {
  u(c) || (Gg[0] = c, c = Gg);
  for(var e = 0;e < c.length;e++) {
    a.j.push(O(b, c[e], d || a, m, a.re || a))
  }
  return a
}
function Hg(a, b, c, d, e, g) {
  if(u(c)) {
    for(var h = 0;h < c.length;h++) {
      Hg(a, b, c[h], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.re || a;
      e = !!e;
      if(b = Kc(b, c, e)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].Ta && b[c].lb == d && b[c].capture == e && b[c].rc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, Lc(b), ab(a.j, b))
  }
  return a
}
Fg.prototype.Cd = function() {
  Wa(this.j, Lc);
  this.j.length = 0
};
Fg.prototype.c = function() {
  Fg.e.c.call(this);
  this.Cd()
};
Fg.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Ig() {
}
ea(Ig);
Ig.prototype.Uf = 0;
Ig.eb();
function Jg(a) {
  this.sa = a || Ve();
  this.Ub = Kg
}
A(Jg, Rc);
Jg.prototype.Of = Ig.eb();
var Kg = k;
function Lg(a, b) {
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
s = Jg.prototype;
s.fa = k;
s.I = m;
s.m = k;
s.Ub = k;
s.v = k;
s.ra = k;
s.Ab = k;
s.pg = m;
function Mg(a) {
  return a.fa || (a.fa = ":" + (a.Of.Uf++).toString(36))
}
s.g = o("m");
function Ng(a) {
  return a.fb || (a.fb = new Fg(a))
}
s.getParent = o("v");
s.Fd = function(a) {
  this.v && this.v != a && f(Error("Method not supported"));
  Jg.e.Fd.call(this, a)
};
s.cb = o("sa");
s.r = function() {
  this.m = this.sa.createElement("div")
};
function Og(a, b) {
  a.I && f(Error("Component already rendered"));
  a.m || a.r();
  b ? b.insertBefore(a.m, k) : a.sa.O.body.appendChild(a.m);
  (!a.v || a.v.I) && a.ta()
}
s.ta = function() {
  this.I = j;
  Pg(this, function(a) {
    !a.I && a.g() && a.ta()
  })
};
s.Fb = function() {
  Pg(this, function(a) {
    a.I && a.Fb()
  });
  this.fb && this.fb.Cd();
  this.I = m
};
s.c = function() {
  Jg.e.c.call(this);
  this.I && this.Fb();
  this.fb && (this.fb.b(), delete this.fb);
  Pg(this, function(a) {
    a.b()
  });
  !this.pg && this.m && ff(this.m);
  this.v = this.m = this.Ab = this.ra = k
};
s.sb = function(a) {
  this.I && f(Error("Component already rendered"));
  this.Ub = a
};
function Pg(a, b) {
  a.ra && Wa(a.ra, b, i)
}
s.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : Mg(a), a = this.Ab && c ? (c in this.Ab ? this.Ab[c] : i) || k : k;
    if(c && a) {
      var d = this.Ab;
      c in d && delete d[c];
      ab(this.ra, a);
      b && (a.Fb(), a.m && ff(a.m));
      c = a;
      c == k && f(Error("Unable to set parent component"));
      c.v = k;
      Jg.e.Fd.call(c, k)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function Qg() {
}
var Rg;
ea(Qg);
s = Qg.prototype;
s.kc = function() {
};
s.r = function(a) {
  var b = a.cb().r("div", Sg(this, a).join(" "), a.Bb);
  this.Ed(a, b);
  return b
};
s.Cb = function(a, b, c) {
  if(a = a.g ? a.g() : a) {
    if(J && !L("7")) {
      var d = Tg(Oe(a), b);
      d.push(b);
      pa(c ? Pe : Qe, a).apply(k, d)
    }else {
      c ? Pe(a, b) : Qe(a, b)
    }
  }
};
s.ue = function(a) {
  if(a.Ub == k) {
    var b;
    a: {
      b = a.I ? a.m : a.sa.O.body;
      var c = Xe(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (b = c.defaultView.getComputedStyle(b, k))) {
        b = b.direction || b.getPropertyValue("direction");
        break a
      }
      b = ""
    }
    a.Ub = "rtl" == (b || ((a.I ? a.m : a.sa.O.body).currentStyle ? (a.I ? a.m : a.sa.O.body).currentStyle.direction : k) || (a.I ? a.m : a.sa.O.body).style && (a.I ? a.m : a.sa.O.body).style.direction)
  }
  a.Ub && this.sb(a.g(), j);
  a.isEnabled() && this.Xb(a, a.Xa)
};
s.Ed = function(a, b) {
  a.isEnabled() || this.R(b, 1, j);
  a.d & 8 && this.R(b, 8, j);
  a.M & 16 && this.R(b, 16, !!(a.d & 16));
  a.M & 64 && this.R(b, 64, !!(a.d & 64))
};
s.Dc = function(a, b) {
  var c = !b, d = J || ac ? a.getElementsByTagName("*") : k;
  if(Eg) {
    if(c = c ? "none" : "", a.style[Eg] = c, d) {
      for(var e = 0, g;g = d[e];e++) {
        g.style[Eg] = c
      }
    }
  }else {
    if(J || ac) {
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for(e = 0;g = d[e];e++) {
          g.setAttribute("unselectable", c)
        }
      }
    }
  }
};
s.sb = function(a, b) {
  this.Cb(a, this.wa() + "-rtl", b)
};
s.xe = function(a) {
  var b;
  return a.M & 32 && (b = a.Na()) ? kf(b) : m
};
s.Xb = function(a, b) {
  var c;
  if(a.M & 32 && (c = a.Na())) {
    if(!b && a.d & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.d & 32 && a.ke()
    }
    kf(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
s.Hd = function(a, b) {
  a.style.display = b ? "" : "none"
};
s.P = function(a, b, c) {
  var d = a.g();
  if(d) {
    var e = Ug(this, b);
    e && this.Cb(a, e, c);
    this.R(d, b, c)
  }
};
s.R = function(a, b, c) {
  Rg || (Rg = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Rg[b]) && a.setAttribute("aria-" + b, c)
};
s.Na = function(a) {
  return a.g()
};
s.wa = q("goog-control");
function Sg(a, b) {
  var c = a.wa(), d = [c], e = a.wa();
  e != c && d.push(e);
  c = b.d;
  for(e = [];c;) {
    var g = c & -c;
    e.push(Ug(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.da) && d.push.apply(d, c);
  J && !L("7") && d.push.apply(d, Tg(d));
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
  if(!a.Yd) {
    var c = a.wa();
    a.Yd = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Yd[b]
}
;function Vg(a, b) {
  a || f(Error("Invalid class name " + a));
  x(b) || f(Error("Invalid decorator function " + b))
}
var Wg = {};
function Xg(a, b, c, d, e) {
  if(!J && (!K || !L("525"))) {
    return j
  }
  if(ec && e) {
    return Yg(a)
  }
  if(e && !d || !c && (17 == b || 18 == b) || J && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(J && oc());
    case 27:
      return!K
  }
  return Yg(a)
}
function Yg(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || K && 0 == a) {
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
;function Zg(a, b) {
  a && $g(this, a, b)
}
A(Zg, Rc);
s = Zg.prototype;
s.m = k;
s.tc = k;
s.ld = k;
s.uc = k;
s.Aa = -1;
s.za = -1;
var ah = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, bh = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, ch = {61:187, 
59:186}, dh = J || K && L("525");
s = Zg.prototype;
s.Kf = function(a) {
  if(K && (17 == this.Aa && !a.ctrlKey || 18 == this.Aa && !a.altKey)) {
    this.za = this.Aa = -1
  }
  dh && !Xg(a.keyCode, this.Aa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.za = bc && a.keyCode in ch ? ch[a.keyCode] : a.keyCode
};
s.Mf = function() {
  this.za = this.Aa = -1
};
s.handleEvent = function(a) {
  var b = a.la, c, d;
  J && "keypress" == a.type ? (c = this.za, d = 13 != c && 27 != c ? b.keyCode : 0) : K && "keypress" == a.type ? (c = this.za, d = 0 <= b.charCode && 63232 > b.charCode && Yg(c) ? b.charCode : 0) : ac ? (c = this.za, d = Yg(c) ? b.keyCode : 0) : (c = b.keyCode || this.za, d = b.charCode || 0, ec && 63 == d && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in ah ? e = ah[c] : 25 == c && a.shiftKey && (e = 9) : g && g in bh && (e = bh[g]);
  a = e == this.Aa;
  this.Aa = e;
  b = new eh(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.b()
  }
};
s.g = o("m");
function $g(a, b, c) {
  a.uc && a.detach();
  a.m = b;
  a.tc = O(a.m, "keypress", a, c);
  a.ld = O(a.m, "keydown", a.Kf, c, a);
  a.uc = O(a.m, "keyup", a.Mf, c, a)
}
s.detach = function() {
  this.tc && (Lc(this.tc), Lc(this.ld), Lc(this.uc), this.uc = this.ld = this.tc = k);
  this.m = k;
  this.za = this.Aa = -1
};
s.c = function() {
  Zg.e.c.call(this);
  this.detach()
};
function eh(a, b, c, d) {
  d && this.Pa(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
A(eh, zc);
function Z(a, b, c) {
  Jg.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ka(b);
      if(d = Wg[d]) {
        break
      }
      b = b.e ? b.e.constructor : k
    }
    b = d ? x(d.eb) ? d.eb() : new d : k
  }
  this.w = b;
  this.Bb = a
}
A(Z, Jg);
s = Z.prototype;
s.Bb = k;
s.d = 0;
s.M = 39;
s.Qc = 255;
s.gg = 0;
s.Xa = j;
s.da = k;
s.fd = j;
s.Pc = m;
s.Xf = k;
s.Na = function() {
  return this.w.Na(this)
};
function fh(a, b) {
  b && (a.da ? $a(a.da, b) || a.da.push(b) : a.da = [b], a.w.Cb(a, b, j))
}
s.Cb = function(a, b) {
  b ? fh(this, a) : a && this.da && (ab(this.da, a), 0 == this.da.length && (this.da = k), this.w.Cb(this, a, m))
};
s.r = function() {
  var a = this.w.r(this);
  this.m = a;
  var b = this.Xf || this.w.kc();
  b && (a.setAttribute("role", b), a.wh = b);
  this.Pc || this.w.Dc(a, m);
  this.Xa || this.w.Hd(a, m)
};
s.ta = function() {
  Z.e.ta.call(this);
  this.w.ue(this);
  if(this.M & -2 && (this.fd && gh(this, j), this.M & 32)) {
    var a = this.Na();
    if(a) {
      var b = this.jb || (this.jb = new Zg);
      $g(b, a);
      Y(Y(Y(Ng(this), b, "key", this.Lf), a, "focus", this.Jf), a, "blur", this.ke)
    }
  }
};
function gh(a, b) {
  var c = Ng(a), d = a.g();
  b ? (Y(Y(Y(Y(c, d, "mouseover", a.pe), d, "mousedown", a.ne), d, "mouseup", a.qe), d, "mouseout", a.oe), J && Y(c, d, "dblclick", a.me)) : (Hg(Hg(Hg(Hg(c, d, "mouseover", a.pe), d, "mousedown", a.ne), d, "mouseup", a.qe), d, "mouseout", a.oe), J && Hg(c, d, "dblclick", a.me))
}
s.Fb = function() {
  Z.e.Fb.call(this);
  this.jb && this.jb.detach();
  this.Xa && this.isEnabled() && this.w.Xb(this, m)
};
s.c = function() {
  Z.e.c.call(this);
  this.jb && (this.jb.b(), delete this.jb);
  delete this.w;
  this.da = this.Bb = k
};
function hh(a) {
  a = a.Bb;
  if(!a) {
    return""
  }
  if(!v(a)) {
    if(u(a)) {
      a = Xa(a, lf).join("")
    }else {
      if(Te && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        mf(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Te || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
s.sb = function(a) {
  Z.e.sb.call(this, a);
  var b = this.g();
  b && this.w.sb(b, a)
};
s.Dc = function(a) {
  this.Pc = a;
  var b = this.g();
  b && this.w.Dc(b, a)
};
s.Hd = function(a, b) {
  if(b || this.Xa != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.g();
    c && this.w.Hd(c, a);
    this.isEnabled() && this.w.Xb(this, a);
    this.Xa = a;
    return j
  }
  return m
};
s.isEnabled = function() {
  return!(this.d & 1)
};
s.Ec = function(a) {
  var b = this.getParent();
  if((!b || "function" != typeof b.isEnabled || b.isEnabled()) && ih(this, 1, !a)) {
    a || (this.setActive(m), jh(this, m)), this.Xa && this.w.Xb(this, a), this.P(1, !a)
  }
};
function jh(a, b) {
  ih(a, 2, b) && a.P(2, b)
}
s.ve = function() {
  return!!(this.d & 4)
};
s.setActive = function(a) {
  ih(this, 4, a) && this.P(4, a)
};
s.P = function(a, b) {
  this.M & a && b != !!(this.d & a) && (this.w.P(this, a, b), this.d = b ? this.d | a : this.d & ~a)
};
function $(a, b) {
  return!!(a.Qc & b) && !!(a.M & b)
}
function ih(a, b, c) {
  return!!(a.M & b) && !!(a.d & b) != c && (!(a.gg & b) || a.dispatchEvent(Lg(b, c))) && !a.ca
}
s.pe = function(a) {
  (!a.relatedTarget || !gf(this.g(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && $(this, 2) && jh(this, j)
};
s.oe = function(a) {
  if((!a.relatedTarget || !gf(this.g(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    $(this, 4) && this.setActive(m), $(this, 2) && jh(this, m)
  }
};
s.ne = function(a) {
  if(this.isEnabled() && ($(this, 2) && jh(this, j), Cc(a) && (!K || !ec || !a.ctrlKey))) {
    $(this, 4) && this.setActive(j), this.w.xe(this) && this.Na().focus()
  }
  !this.Pc && Cc(a) && (!K || !ec || !a.ctrlKey) && a.preventDefault()
};
s.qe = function(a) {
  this.isEnabled() && ($(this, 2) && jh(this, j), this.ve() && this.Pb(a) && $(this, 4) && this.setActive(m))
};
s.me = function(a) {
  this.isEnabled() && this.Pb(a)
};
s.Pb = function(a) {
  if($(this, 16)) {
    var b = !(this.d & 16);
    ih(this, 16, b) && this.P(16, b)
  }
  $(this, 8) && ih(this, 8, j) && this.P(8, j);
  $(this, 64) && (b = !(this.d & 64), ih(this, 64, b) && this.P(64, b));
  b = new wc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.Ad = a.Ad);
  return this.dispatchEvent(b)
};
s.Jf = function() {
  $(this, 32) && ih(this, 32, j) && this.P(32, j)
};
s.ke = function() {
  $(this, 4) && this.setActive(m);
  $(this, 32) && ih(this, 32, m) && this.P(32, m)
};
s.Lf = function(a) {
  return this.Xa && this.isEnabled() && this.ed(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
s.ed = function(a) {
  return 13 == a.keyCode && this.Pb(a)
};
x(Z) || f(Error("Invalid component class " + Z));
x(Qg) || f(Error("Invalid renderer class " + Qg));
var kh = ka(Z);
Wg[kh] = Qg;
Vg("goog-control", function() {
  return new Z(k)
});
function lh() {
}
A(lh, Qg);
ea(lh);
s = lh.prototype;
s.kc = q("button");
s.R = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : lh.e.R.call(this, a, b, c)
};
s.r = function(a) {
  var b = lh.e.r.call(this, a), c = a.oc();
  c && this.Gd(b, c);
  (c = a.pc()) && this.Fc(b, c);
  a.M & 16 && this.R(b, 16, !!(a.d & 16));
  return b
};
s.pc = da;
s.Fc = da;
s.oc = function(a) {
  return a.title
};
s.Gd = function(a, b) {
  a && (a.title = b || "")
};
s.wa = q("goog-button");
function mh() {
}
A(mh, lh);
ea(mh);
s = mh.prototype;
s.kc = function() {
};
s.r = function(a) {
  a.I && m != a.fd && gh(a, m);
  a.fd = m;
  a.Qc &= -256;
  a.I && a.d & 32 && f(Error("Component already rendered"));
  a.d & 32 && a.P(32, m);
  a.M &= -33;
  return a.cb().r("button", {"class":Sg(this, a).join(" "), disabled:!a.isEnabled(), title:a.oc() || "", value:a.pc() || ""}, hh(a) || "")
};
s.ue = function(a) {
  Y(Ng(a), a.g(), "click", a.Pb)
};
s.Dc = da;
s.sb = da;
s.xe = function(a) {
  return a.isEnabled()
};
s.Xb = da;
s.P = function(a, b, c) {
  mh.e.P.call(this, a, b, c);
  if((a = a.g()) && 1 == b) {
    a.disabled = c
  }
};
s.pc = function(a) {
  return a.value
};
s.Fc = function(a, b) {
  a && (a.value = b)
};
s.R = da;
function nh(a, b, c) {
  Z.call(this, a, b || mh.eb(), c)
}
A(nh, Z);
s = nh.prototype;
s.pc = o("hf");
s.Fc = function(a) {
  this.hf = a;
  this.w.Fc(this.g(), a)
};
s.oc = o("ef");
s.Gd = function(a) {
  this.ef = a;
  this.w.Gd(this.g(), a)
};
s.c = function() {
  nh.e.c.call(this);
  delete this.hf;
  delete this.ef
};
s.ta = function() {
  nh.e.ta.call(this);
  if(this.M & 32) {
    var a = this.Na();
    a && Y(Ng(this), a, "keyup", this.ed)
  }
};
s.ed = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Pb(a) : 32 == a.keyCode
};
Vg("goog-button", function() {
  return new nh(k)
});
function oh() {
}
A(oh, lh);
ea(oh);
oh.prototype.r = function(a) {
  var b = {"class":"goog-inline-block " + Sg(this, a).join(" "), title:a.oc() || ""}, b = a.cb().r("div", b, ph(this, a.Bb, a.cb()));
  this.Ed(a, b);
  return b
};
oh.prototype.kc = q("button");
oh.prototype.Ed = function(a, b) {
  a.isEnabled() || this.R(b, 1, j);
  a.d & 8 && this.R(b, 8, j);
  a.M & 16 && this.R(b, 16, j);
  a.d & 64 && this.R(b, 64, j)
};
function ph(a, b, c) {
  return c.r("div", "goog-inline-block " + (a.wa() + "-outer-box"), c.r("div", "goog-inline-block " + (a.wa() + "-inner-box"), b))
}
oh.prototype.wa = q("goog-custom-button");
function qh(a, b, c) {
  nh.call(this, a, b || oh.eb(), c)
}
A(qh, nh);
Vg("goog-custom-button", function() {
  return new qh(k)
});
var rh;
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
  rh = c
})();
function sh(a, b) {
  Jg.call(this, b);
  this.Ef = a;
  this.ad = new Fg(this);
  this.ic = new I
}
A(sh, Jg);
s = sh.prototype;
s.a = U("goog.ui.media.FlashObject");
s.rg = "window";
s.Vd = "#000000";
s.of = "sameDomain";
function th(a, b, c) {
  a.Sd = v(b) ? b : Math.round(b) + "px";
  a.gd = v(c) ? c : Math.round(c) + "px";
  a.g() && (b = a.g() ? a.g().firstChild : k, c = a.Sd, a = a.gd, c instanceof Re ? (a = c.height, c = c.width) : a == i && f(Error("missing height argument")), b.style.width = Dg(c), b.style.height = Dg(a))
}
s.ta = function() {
  sh.e.ta.call(this);
  var a = this.g(), b;
  b = J ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = J ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = va(c, this.rg), d = this.ic.ea(), e = this.ic.K(), g = [], h = 0;h < d.length;h++) {
    var l = ya(d[h]), n = ya(e[h]);
    g.push(l + "=" + n)
  }
  b = va(b, Mg(this), Mg(this), "goog-ui-media-flash-object", D(this.Ef), D(g.join("&")), this.Vd, this.of, c);
  a.innerHTML = b;
  this.Sd && this.gd && th(this, this.Sd, this.gd);
  Y(this.ad, this.g(), Ra(uc), xc)
};
s.r = function() {
  this.Xe != k && !(0 <= Ga(rh, this.Xe)) && (R(this.a, "Required flash version not found:" + this.Xe), f(Error("Method not supported")));
  var a = this.cb().createElement("div");
  a.className = "goog-ui-media-flash";
  this.m = a
};
s.c = function() {
  sh.e.c.call(this);
  this.ic = k;
  this.ad.b();
  this.ad = k
};
function uh(a) {
  C.call(this, a)
}
A(uh, C);
uh.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function vh(a, b, c) {
  function d() {
    e && delete t.__loadFlashObject_callbacks[e]
  }
  var e;
  if(bc && !L("1.8.1.20")) {
    return dd(new uh("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Ga(rh, "9"))) {
    return b = rh, dd(new uh("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  e = "_" + jd();
  var h = new Tc(d);
  t.__loadFlashObject_callbacks[e] = function() {
    a.setTimeout(function() {
      d();
      h.ja(X(g))
    }, 0)
  };
  b.ic.set("onloadcallback", '__loadFlashObject_callbacks["' + e + '"]()');
  g = Mg(b);
  Og(b, c);
  return h
}
function wh(a, b, c) {
  var d = vh(a, b, c), e = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  ad(d, function(b) {
    a.clearTimeout(e);
    return b
  });
  return d
}
;function xh() {
}
xh.prototype.cc = k;
var yh;
function zh() {
}
A(zh, xh);
function Ah(a) {
  return(a = Bh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Ch(a) {
  var b = {};
  Bh(a) && (b[0] = j, b[1] = j);
  return b
}
zh.prototype.hd = k;
function Bh(a) {
  if(!a.hd && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.hd = d
      }catch(e) {
      }
    }
    f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.hd
}
yh = new zh;
function Dh(a) {
  this.headers = new I;
  this.wb = a || k
}
A(Dh, Rc);
Dh.prototype.a = U("goog.net.XhrIo");
var Eh = /^https?$/i;
s = Dh.prototype;
s.pa = m;
s.i = k;
s.Mc = k;
s.od = "";
s.ze = "";
s.Lb = "";
s.$c = m;
s.sc = m;
s.jd = m;
s.Oa = m;
s.Ic = 0;
s.Va = k;
s.Ze = "";
s.qg = m;
s.send = function(a, b, c, d) {
  this.i && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.od = a;
  this.Lb = "";
  this.ze = b;
  this.$c = m;
  this.pa = j;
  this.i = this.wb ? Ah(this.wb) : Ah(yh);
  this.Mc = this.wb ? this.wb.cc || (this.wb.cc = Ch(this.wb)) : yh.cc || (yh.cc = Ch(yh));
  this.i.onreadystatechange = y(this.Ne, this);
  try {
    S(this.a, Fh(this, "Opening Xhr")), this.jd = j, this.i.open(b, a, j), this.jd = m
  }catch(e) {
    S(this.a, Fh(this, "Error opening Xhr: " + e.message));
    Gh(this, e);
    return
  }
  var a = c || "", g = this.headers.G();
  d && Fb(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.W("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Fb(g, function(a, b) {
    this.i.setRequestHeader(b, a)
  }, this);
  this.Ze && (this.i.responseType = this.Ze);
  "withCredentials" in this.i && (this.i.withCredentials = this.qg);
  try {
    this.Va && (Sc.clearTimeout(this.Va), this.Va = k), 0 < this.Ic && (S(this.a, Fh(this, "Will abort after " + this.Ic + "ms if incomplete")), this.Va = Sc.setTimeout(y(this.mg, this), this.Ic)), S(this.a, Fh(this, "Sending request")), this.sc = j, this.i.send(a), this.sc = m
  }catch(h) {
    S(this.a, Fh(this, "Send error: " + h.message)), Gh(this, h)
  }
};
s.mg = function() {
  "undefined" != typeof ba && this.i && (this.Lb = "Timed out after " + this.Ic + "ms, aborting", S(this.a, Fh(this, this.Lb)), this.dispatchEvent("timeout"), this.abort(8))
};
function Gh(a, b) {
  a.pa = m;
  a.i && (a.Oa = j, a.i.abort(), a.Oa = m);
  a.Lb = b;
  Hh(a);
  Ih(a)
}
function Hh(a) {
  a.$c || (a.$c = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
s.abort = function() {
  this.i && this.pa && (S(this.a, Fh(this, "Aborting")), this.pa = m, this.Oa = j, this.i.abort(), this.Oa = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Ih(this))
};
s.c = function() {
  this.i && (this.pa && (this.pa = m, this.Oa = j, this.i.abort(), this.Oa = m), Ih(this, j));
  Dh.e.c.call(this)
};
s.Ne = function() {
  !this.jd && !this.sc && !this.Oa ? this.Vf() : Jh(this)
};
s.Vf = function() {
  Jh(this)
};
function Jh(a) {
  if(a.pa && "undefined" != typeof ba) {
    if(a.Mc[1] && 4 == a.xa() && 2 == Kh(a)) {
      S(a.a, Fh(a, "Local request error detected and ignored"))
    }else {
      if(a.sc && 4 == a.xa()) {
        Sc.setTimeout(y(a.Ne, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.xa()) {
          S(a.a, Fh(a, "Request complete"));
          a.pa = m;
          var b = Kh(a), c;
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
              b = ("" + a.od).match(qe)[1] || k, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !Eh.test(b ? b.toLowerCase() : "")
            }
            c = b
          }
          if(c) {
            a.dispatchEvent("complete"), a.dispatchEvent("success")
          }else {
            var d;
            try {
              d = 2 < a.xa() ? a.i.statusText : ""
            }catch(e) {
              S(a.a, "Can not get status: " + e.message), d = ""
            }
            a.Lb = d + " [" + Kh(a) + "]";
            Hh(a)
          }
          Ih(a)
        }
      }
    }
  }
}
function Ih(a, b) {
  if(a.i) {
    var c = a.i, d = a.Mc[0] ? da : k;
    a.i = k;
    a.Mc = k;
    a.Va && (Sc.clearTimeout(a.Va), a.Va = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(e) {
      Q(a.a, "Problem encountered resetting onreadystatechange: " + e.message)
    }
  }
}
s.ve = function() {
  return!!this.i
};
s.xa = function() {
  return this.i ? this.i.readyState : 0
};
function Kh(a) {
  try {
    return 2 < a.xa() ? a.i.status : -1
  }catch(b) {
    return R(a.a, "Can not get status: " + b.message), -1
  }
}
s.getResponseHeader = function(a) {
  return this.i && 4 == this.xa() ? this.i.getResponseHeader(a) : i
};
function Fh(a, b) {
  return b + " [" + a.ze + " " + a.od + " " + Kh(a) + "]"
}
;var Lh = !(J || K && !L("420+"));
function Mh(a, b) {
  this.Jc = a;
  this.$ = b
}
A(Mh, M);
s = Mh.prototype;
s.o = k;
s.Ga = -1;
s.je = m;
s.se = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Nh(a) {
  var b = yf(a.ce), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.$, c, b), 1 != b && a.b()) : a.b()
}
s.Nf = function() {
  Nh(this);
  if(!this.ca) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.$);
    this.b()
  }
};
s.Zf = function() {
  var a = t.parent;
  if(a) {
    this.Ga = this.o.xa();
    if(2 <= this.Ga && !this.je) {
      for(var b = new I, c = this.se.length;c--;) {
        var d = this.se[c];
        try {
          b.set(d, this.o.i.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.u() && (this.je = j, a.__XHRMaster_ongotheaders(this.$, Kb(b)), this.ca)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.$, this.Ga);
    Lh && 3 == this.Ga && Nh(this)
  }else {
    this.b()
  }
};
s.rd = function(a, b, c) {
  this.o = new Dh;
  O(this.o, "readystatechange", y(this.Zf, this));
  O(this.o, "complete", y(this.Nf, this));
  this.o.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.ce = new xf(this.o.i, 1048576)
};
s.c = function() {
  Mh.e.c.call(this);
  delete this.ce;
  this.o && this.o.b();
  delete this.Jc.Yb[this.$];
  delete this.Jc
};
function Oh() {
  this.Yb = {}
}
A(Oh, M);
Oh.prototype.Rf = function(a, b, c, d) {
  var e = new Mh(this, a);
  this.Yb[a] = e;
  e.rd(b, c, d)
};
Oh.prototype.xf = function(a) {
  (a = this.Yb[a]) && a.b()
};
Oh.prototype.c = function() {
  Oh.e.c.call(this);
  for(var a = Ra(this.Yb);a.length;) {
    a.pop().b()
  }
  delete this.Yb
};
var Qh = new Oh;
t.__XHRSlave_makeRequest = y(Qh.Rf, Qh);
t.__XHRSlave_dispose = y(Qh.xf, Qh);
function Rh() {
}
Rh.prototype.ie = function() {
  return Boolean(Number((new W(document.location)).L.get("httpStreaming", "0"))) ? 2 : 1
};
function Sh(a) {
  var b = new sh("/httpface/FlashConnector.swf?cb=4bdfc178fc0e508c0cd5efc3fdb09920");
  b.Vd = "#777777";
  th(b, 300, 30);
  var c = X("FlashConnectorSwf");
  c || f(Error("no FlashConnectorSwf?"));
  return wh(a.H, b, c)
}
function Th(a, b, c) {
  var d = new W(document.location);
  if(c) {
    var e = d.X, g = t.__demo_mainSocketPort, d = Sh(a);
    Zc(d, function(b) {
      b = new Wd(a, b);
      return new Ef(e, g, b)
    });
    return d
  }
  b ? (b = t.__demo_shared_domain, d = d.G(), ue(d, "_____random_____." + b)) : d = d.G();
  we(d, "/httpface/");
  xe(d, "", i);
  d = new Ff(d.toString().replace("_____random_____", "%random%"));
  return cd(d)
}
function Uh() {
  var a = Vh, b = (new W(document.location)).L, c = "http" != b.get("mode"), b = Boolean(Number(b.get("useSub", "1")));
  return Th(a, b, c)
}
;var Wh = U("ljstream.logger");
window.onerror = function(a, b, c) {
  Q(Wh, "window.onerror: message: " + H(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Xh() {
  this.Pe = new tb
}
Xh.prototype.jg = function(a, b) {
  Wh.info("streamReset: reasonString=" + H(a) + ", applicationLevel=" + b);
  Yh("Disconnected from server.  Try reloading this page.");
  Zh = k
};
function $h(a) {
  Wh.info("Sending preferences to server");
  var b;
  b = new gg;
  b.n[1] = X("include_russian_posts").checked;
  b.La && (b.La[1] = j);
  b = a.Pe.Wb(b);
  Rf(a.B, [(new wb(i)).Wb([2, b])])
}
Xh.prototype.kg = function(a) {
  var a = vb(a), b = a[1];
  if(1 == a[0]) {
    var c = this.Pe.Zc(fg.Hb(), b), a = mb(c, 1), b = mb(c, 2), c = mb(c, 3);
    (a = wa(a)) || (a = "[No title]");
    var d = ua(D(c)), e = document, c = e.createElement("div");
    J ? (c.innerHTML = "<br>" + d, c.removeChild(c.firstChild)) : c.innerHTML = d;
    if(1 == c.childNodes.length) {
      c = c.removeChild(c.firstChild)
    }else {
      for(d = e.createDocumentFragment();c.firstChild;) {
        d.appendChild(c.firstChild)
      }
      c = d
    }
    a = bf("span", {}, bf("a", {href:b, "class":"ljpost-title-link"}, a), bf("span", {}, "\u00a0"), c);
    ai(a)
  }
};
Xh.prototype.reset = function(a) {
  Wh.info("resetting with reason: " + a);
  this.B.reset(a)
};
var Zh = k, Vh = new ed(t.window);
function Yh(a) {
  a = bf("span", {"class":"important-message"}, a);
  ai(a)
}
function bi() {
  Zh && (Zh.reset("idle timeout fired"), Zh = k, Yh("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var ci = k;
function di() {
  ci != k && Vh.H.clearTimeout(ci);
  Zh && (ci = Vh.H.setTimeout(bi, 6E5))
}
O(window, ["click", "focus", "keydown", "keypress"], di, j);
var af = new We, ei = 0;
function ai(a) {
  a = bf("div", {"class":"row-" + (0 == ei % 2 ? "even" : "odd")}, bf("nobr", {}, a));
  X("ljstream-container-inner").appendChild(a);
  ei += 1;
  var b;
  if(b = eg) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !K && "CSS1Compat" == d.compatMode ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new Ue(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = $e().height;
    b = !(a + b <= c + d)
  }
  b && (a = $e().height, window.scrollBy(0, Math.round(a / 2) + 80))
}
function fi() {
  var a = new Rh;
  Zh = new Xh;
  di();
  Zc(Uh(), function(b) {
    Zh || f(Error("lastProto falsy?"));
    var b = new Kf(b, a, Vh), c = Zh;
    b.zd = y(c.kg, c);
    b.onreset = y(c.jg, c);
    Zh.B = b;
    c = Zh;
    Rf(c.B, ["subprotocol:ljstream"]);
    $h(c);
    b.start();
    return k
  })
}
function gi() {
  O(t, "load", function() {
    window.scrollTo(0, 0)
  });
  O(X("include_russian_posts"), "click", function() {
    $h(Zh)
  });
  eg = j;
  O(X("automatic_scroll"), "click", function(a) {
    eg = a.target.checked
  });
  var a = new qh("Clear posts");
  fh(a, "clear-posts-button");
  Og(a, X("prefs"));
  O(a, "action", function() {
    X("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = X("ljstream-container");
  a.style.marginTop = X("demo-header").offsetHeight + "px";
  X("demo-header").style.width = "9000px";
  var b = bf("div", {id:"ljstream-container-inner"});
  a.appendChild(b)
}
function hi() {
  Od().rb(Gd);
  if("1" == (new W(document.location)).L.get("logging")) {
    var a = new xg("main");
    a.Ec(j);
    a.Pa()
  }
  Wh.info("Logger works.");
  gi();
  fi()
}
var ii = "__ljstream_init".split("."), ji = t;
!(ii[0] in ji) && ji.execScript && ji.execScript("var " + ii[0]);
for(var ki;ii.length && (ki = ii.shift());) {
  !ii.length && ga(hi) ? ji[ki] = hi : ji = ji[ki] ? ji[ki] : ji[ki] = {}
}
;})();
