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
    return a.Rf || (a.Rf = new a)
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
ta = {ca:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, We:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
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
        b.We && (e = e.replace(b.We, function(a) {
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
    d += b.ca.apply(t, c[e])
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
    var l = d[h] || "", n = e[h] || "", p = RegExp("(\\d*)(\\D*)", "g"), G = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = p.exec(l) || ["", "", ""], w = G.exec(n) || ["", "", ""];
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
  this.w = a;
  this.F = b;
  this.ud = c.name;
  this.ib = !!c.xh;
  this.Gb = c.bb;
  this.Le = c.type;
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
;var E = Array.prototype, Va = E.indexOf ? function(a, b, c) {
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
}, Wa = E.forEach ? function(a, b, c) {
  E.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
}, Xa = E.map ? function(a, b, c) {
  return E.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), g = v(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (e[h] = b.call(c, g[h], h, a))
  }
  return e
}, Ya = E.some ? function(a, b, c) {
  return E.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && b.call(c, e[g], g, a)) {
      return j
    }
  }
  return m
}, Za = E.every ? function(a, b, c) {
  return E.every.call(a, b, c)
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
  0 <= c && E.splice.call(a, c, 1)
}
function bb(a) {
  return E.concat.apply(E, arguments)
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
  E.splice.apply(a, fb(arguments, 1))
}
function fb(a, b, c) {
  return 2 >= arguments.length ? E.slice.call(a, b) : E.slice.call(a, b, c)
}
function gb(a, b) {
  E.sort.call(a, b || hb)
}
function hb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function ib(a, b, c) {
  this.Je = a;
  this.ud = b.name || k;
  this.va = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.va[b.F] = b
  }
}
function jb(a) {
  a = Ra(a.va);
  gb(a, function(a, c) {
    return a.F - c.F
  });
  return a
}
;function kb() {
  this.n = {};
  this.ab = this.constructor.ab;
  var a = this.ab.va, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.va = b;
  this.La = this.pd = k
}
function lb(a, b) {
  for(var c in a.n) {
    a.va[c] || b.call(a, Number(c), a.n[c])
  }
}
s = kb.prototype;
s.Hb = o("ab");
s.get = function(a, b) {
  return mb(this, a.F, b)
};
s.set = function(a, b) {
  var c = a.F;
  this.n[c] = b;
  this.La && (this.La[c] = j)
};
s.add = function(a, b) {
  var c = a.F;
  this.n[c] || (this.n[c] = []);
  this.n[c].push(b)
};
s.clear = function(a) {
  delete this.n[a.F]
};
s.k = function(a) {
  if(!a || this.constructor != a.constructor) {
    return m
  }
  for(var b = jb(this.Hb()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(nb(this, d.F) != nb(a, d.F)) {
      return m
    }
    if(nb(this, d.F)) {
      var e = Pa(d), g = d.F, h = this.n[g], g = a.n[g];
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
s.H = function() {
  for(var a = new this.constructor, b = jb(a.Hb()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete a.n[d.F];
    if(nb(this, d.F)) {
      var e = Pa(d);
      if(d.ib) {
        var g;
        g = d.F;
        ob(this, this.va[g]);
        g = this.n[g] || [];
        for(var h = 0;h < g.length;h++) {
          a.add(d, e ? g[h].H() : g[h])
        }
      }else {
        g = this.get(d), a.set(d, e ? g.H() : g)
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
    var c = b.F;
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
  var d = a.va[b];
  ob(a, d);
  if(d.ib) {
    return c = c || 0, 0 <= c && pb(a, b), a.n[b][c]
  }
  u(a.n[b]);
  return b in a.n ? a.n[b] : k
}
function pb(a, b) {
  return a.va[b].ib ? (nb(a, b) && u(a.n[b]), nb(a, b) ? a.n[b].length : 0) : nb(a, b) ? 1 : 0
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
  new a.Je;
  f(Error("Unimplemented"))
};
rb.prototype.lc = function(a, b) {
  if(Pa(a)) {
    return this.Zc(a.Le.ab, b)
  }
  if(!a.fe) {
    return b
  }
  var c = a.Le;
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
  var c = new a.Je;
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
    if(nb(a, e.F)) {
      var g = e.F;
      if(e.ib) {
        c[g] = [];
        for(var h = 0;h < pb(a, e.F);h++) {
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
          if(ub(a.of)) {
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
function F(a, b, c) {
  c || (c = []);
  Bb(a, b, c)
}
function H(a) {
  var b = [];
  F(a, b, i);
  return b.join("")
}
;function Cb(a) {
  if("function" == typeof a.v) {
    a = a.v()
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
  if("function" == typeof a.fa) {
    return a.fa()
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
s.v = o("f");
s.K = function() {
  Hb(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.s[this.j[b]])
  }
  return a
};
s.fa = function() {
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
  if(this.f != a.v()) {
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
  a instanceof I ? (b = a.fa(), a = a.K()) : (b = Sa(a), a = Ra(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
s.H = function() {
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
;var Mb, Nb;
function Ob(a, b) {
  this.Ya = a;
  this.Ua = b
}
Ob.prototype.k = function(a) {
  return a instanceof Ob && this.Ya == a.Ya && this.Ua.join(",") == a.Ua
};
Ob.prototype.p = function(a, b) {
  a.push("new SACK(", "" + this.Ya, ", ");
  F(this.Ua, a, b);
  a.push(")")
};
function Pb() {
  this.T = new I
}
s = Pb.prototype;
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
  a.push("<Queue with ", "" + this.T.v(), " item(s), counter=#", "" + this.Ka, ", size=", "" + this.Q, ">")
};
function Qb(a) {
  a = a.T.fa();
  gb(a);
  return a
}
function Rb() {
  this.Ja = new I
}
Rb.prototype.Ra = -1;
Rb.prototype.Q = 0;
function Sb(a) {
  var b = a.Ja.fa();
  gb(b);
  return new Ob(a.Ra, b)
}
var Tb = {};
function Ub() {
  return j
}
;var Vb, Wb, Xb, Yb, Zb;
function $b() {
  return t.navigator ? t.navigator.userAgent : k
}
Zb = Yb = Xb = Wb = Vb = m;
var ac;
if(ac = $b()) {
  var bc = t.navigator;
  Vb = 0 == ac.indexOf("Opera");
  Wb = !Vb && -1 != ac.indexOf("MSIE");
  Yb = (Xb = !Vb && -1 != ac.indexOf("WebKit")) && -1 != ac.indexOf("Mobile");
  Zb = !Vb && !Xb && "Gecko" == bc.product
}
var cc = Vb, J = Wb, dc = Zb, K = Xb, ec = Yb, fc = t.navigator, gc = -1 != (fc && fc.platform || "").indexOf("Mac"), hc;
a: {
  var ic = "", jc;
  if(cc && t.opera) {
    var kc = t.opera.version, ic = "function" == typeof kc ? kc() : kc
  }else {
    if(dc ? jc = /rv\:([^\);]+)(\)|;)/ : J ? jc = /MSIE\s+([^\);]+)(\)|;)/ : K && (jc = /WebKit\/(\S+)/), jc) {
      var lc = jc.exec($b()), ic = lc ? lc[1] : ""
    }
  }
  if(J) {
    var mc, nc = t.document;
    mc = nc ? nc.documentMode : i;
    if(mc > parseFloat(ic)) {
      hc = "" + mc;
      break a
    }
  }
  hc = ic
}
var oc = {};
function L(a) {
  return oc[a] || (oc[a] = 0 <= Ga(hc, a))
}
var pc = {};
function qc() {
  return pc[9] || (pc[9] = J && document.documentMode && 9 <= document.documentMode)
}
;function rc() {
}
var sc = 0;
s = rc.prototype;
s.key = 0;
s.Ta = m;
s.Sc = m;
s.Pa = function(a, b, c, d, e, g) {
  x(a) ? this.Ae = j : a && a.handleEvent && x(a.handleEvent) ? this.Ae = m : f(Error("Invalid listener argument"));
  this.lb = a;
  this.Ve = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.rc = g;
  this.Sc = m;
  this.key = ++sc;
  this.Ta = m
};
s.handleEvent = function(a) {
  return this.Ae ? this.lb.call(this.rc || this.src, a) : this.lb.handleEvent.call(this.lb, a)
};
var tc = !J || qc(), uc = !J || qc(), vc = J && !L("8");
!K || L("528");
dc && L("1.9b") || J && L("8") || cc && L("9.5") || K && L("528");
!dc || L("8");
var wc = {Bg:"click", Gg:"dblclick", $g:"mousedown", eh:"mouseup", dh:"mouseover", bh:"mouseout", ah:"mousemove", oh:"selectstart", Vg:"keypress", Ug:"keydown", Wg:"keyup", zg:"blur", Og:"focus", Hg:"deactivate", Pg:J ? "focusin" : "DOMFocusIn", Qg:J ? "focusout" : "DOMFocusOut", Ag:"change", nh:"select", ph:"submit", Tg:"input", jh:"propertychange", Lg:"dragstart", Ig:"dragenter", Kg:"dragover", Jg:"dragleave", Mg:"drop", th:"touchstart", sh:"touchmove", rh:"touchend", qh:"touchcancel", Dg:"contextmenu", 
Ng:"error", Sg:"help", Xg:"load", Yg:"losecapture", kh:"readystatechange", lh:"resize", mh:"scroll", vh:"unload", Rg:"hashchange", fh:"pagehide", gh:"pageshow", ih:"popstate", Eg:"copy", hh:"paste", Fg:"cut", wg:"beforecopy", xg:"beforecut", yg:"beforepaste", Zg:"message", Cg:"connect", uh:K ? "webkitTransitionEnd" : cc ? "oTransitionEnd" : "transitionend"};
function M() {
}
M.prototype.da = m;
M.prototype.b = function() {
  this.da || (this.da = j, this.c())
};
M.prototype.c = function() {
  this.xf && xc.apply(k, this.xf)
};
function xc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? xc.apply(k, d) : d && "function" == typeof d.b && d.b()
  }
}
;function yc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
A(yc, M);
s = yc.prototype;
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
function zc(a) {
  a.stopPropagation()
}
;function Ac(a) {
  Ac[" "](a);
  return a
}
Ac[" "] = da;
function Bc(a, b) {
  a && this.Pa(a, b)
}
A(Bc, yc);
var Cc = [1, 4, 2];
s = Bc.prototype;
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
s.ma = k;
s.Pa = function(a, b) {
  var c = this.type = a.type;
  yc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(dc) {
      var e;
      a: {
        try {
          Ac(d.nodeName);
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
  this.Ad = gc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ma = a;
  delete this.Tb;
  delete this.Sa
};
function Dc(a) {
  return tc ? 0 == a.ma.button : "click" == a.type ? j : !!(a.ma.button & Cc[0])
}
s.stopPropagation = function() {
  Bc.e.stopPropagation.call(this);
  this.ma.stopPropagation ? this.ma.stopPropagation() : this.ma.cancelBubble = j
};
s.preventDefault = function() {
  Bc.e.preventDefault.call(this);
  var a = this.ma;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, vc) {
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
  Bc.e.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ma = k
};
var Ec = {}, N = {}, Fc = {}, Gc = {};
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
    g = Hc();
    g.src = a;
    h = new rc;
    h.Pa(c, g, a, b, d, e);
    c = h.key;
    g.key = c;
    n.push(h);
    Ec[c] = h;
    Fc[l] || (Fc[l] = []);
    Fc[l].push(h);
    a.addEventListener ? (a == t || !a.be) && a.addEventListener(b, g, d) : a.attachEvent(b in Gc ? Gc[b] : Gc[b] = "on" + b, g);
    return c
  }
  f(Error("Invalid event type"))
}
function Hc() {
  var a = Jc, b = uc ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Kc(a, b, c, d, e) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      Kc(a, b[g], c, d, e)
    }
    return k
  }
  a = O(a, b, c, d, e);
  Ec[a].Sc = j;
  return a
}
function Lc(a, b, c, d, e) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      Lc(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = Mc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].lb == c && a[g].capture == d && a[g].rc == e) {
          Nc(a[g].key);
          break
        }
      }
    }
  }
}
function Nc(a) {
  if(!Ec[a]) {
    return m
  }
  var b = Ec[a];
  if(b.Ta) {
    return m
  }
  var c = b.src, d = b.type, e = b.Ve, g = b.capture;
  c.removeEventListener ? (c == t || !c.be) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in Gc ? Gc[d] : Gc[d] = "on" + d, e);
  c = ka(c);
  e = N[d][g][c];
  if(Fc[c]) {
    var h = Fc[c];
    ab(h, b);
    0 == h.length && delete Fc[c]
  }
  b.Ta = j;
  e.Ne = j;
  Oc(d, g, c, e);
  delete Ec[a];
  return j
}
function Oc(a, b, c, d) {
  if(!d.wc && d.Ne) {
    for(var e = 0, g = 0;e < d.length;e++) {
      d[e].Ta ? d[e].Ve.src = k : (e != g && (d[g] = d[e]), g++)
    }
    d.length = g;
    d.Ne = m;
    0 == g && (delete N[a][b][c], N[a][b].f--, 0 == N[a][b].f && (delete N[a][b], N[a].f--), 0 == N[a].f && delete N[a])
  }
}
function Pc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Qa(Fc, function(a) {
      for(var e = a.length - 1;0 <= e;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          Nc(g.key), c++
        }
      }
    })
  }else {
    if(a = ka(a), Fc[a]) {
      for(var a = Fc[a], e = a.length - 1;0 <= e;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          Nc(g.key), c++
        }
      }
    }
  }
}
function Mc(a, b, c) {
  var d = N;
  return b in d && (d = d[b], c in d && (d = d[c], a = ka(a), d[a])) ? d[a] : k
}
function Qc(a, b, c, d, e) {
  var g = 1, b = ka(b);
  if(a[b]) {
    a.V--;
    a = a[b];
    a.wc ? a.wc++ : a.wc = 1;
    try {
      for(var h = a.length, l = 0;l < h;l++) {
        var n = a[l];
        n && !n.Ta && (g &= Rc(n, e) !== m)
      }
    }finally {
      a.wc--, Oc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Rc(a, b) {
  var c = a.handleEvent(b);
  a.Sc && Nc(a.key);
  return c
}
function Jc(a, b) {
  if(!Ec[a]) {
    return j
  }
  var c = Ec[a], d = c.type, e = N;
  if(!(d in e)) {
    return j
  }
  var e = e[d], g, h;
  if(!uc) {
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
          }catch(G) {
            p = j
          }
        }
        if(p || g.returnValue == i) {
          g.returnValue = j
        }
      }
    }
    p = new Bc;
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
          p.currentTarget = r[B], g &= Qc(h, r[B], d, j, p)
        }
        if(n) {
          h = e[m];
          h.V = h.f;
          for(B = 0;!p.Sa && B < r.length && h.V;B++) {
            p.currentTarget = r[B], g &= Qc(h, r[B], d, m, p)
          }
        }
      }else {
        g = Rc(c, p)
      }
    }finally {
      r && (r.length = 0), p.b()
    }
    return g
  }
  d = new Bc(b, this);
  try {
    g = Rc(c, d)
  }finally {
    d.b()
  }
  return g
}
var Sc = 0;
function Tc() {
}
A(Tc, M);
s = Tc.prototype;
s.be = j;
s.yc = k;
s.Fd = aa("yc");
s.addEventListener = function(a, b, c, d) {
  O(this, a, b, c, d)
};
s.removeEventListener = function(a, b, c, d) {
  Lc(this, a, b, c, d)
};
s.dispatchEvent = function(a) {
  var b = a.type || a, c = N;
  if(b in c) {
    if(v(a)) {
      a = new yc(a, this)
    }else {
      if(a instanceof yc) {
        a.target = a.target || this
      }else {
        var d = a, a = new yc(b, this);
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
        a.currentTarget = e[h], d &= Qc(g, e[h], a.type, j, a) && a.Tb != m
      }
    }
    if(m in c) {
      if(g = c[m], g.V = g.f, b) {
        for(h = 0;!a.Sa && h < e.length && g.V;h++) {
          a.currentTarget = e[h], d &= Qc(g, e[h], a.type, m, a) && a.Tb != m
        }
      }else {
        for(e = this;!a.Sa && e && g.V;e = e.yc) {
          a.currentTarget = e, d &= Qc(g, e, a.type, m, a) && a.Tb != m
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
  Tc.e.c.call(this);
  Pc(this);
  this.yc = k
};
var Uc = t.window;
Sc++;
Sc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Vc(a, b) {
  this.dc = [];
  this.Xd = a;
  this.de = b || k
}
s = Vc.prototype;
s.wa = m;
s.Ib = m;
s.Ob = 0;
s.Id = m;
s.tf = m;
s.Rc = 0;
s.cancel = function(a) {
  if(this.wa) {
    this.Sb instanceof Vc && this.Sb.cancel()
  }else {
    if(this.w) {
      var b = this.w;
      delete this.w;
      a ? b.cancel(a) : (b.Rc--, 0 >= b.Rc && b.cancel())
    }
    this.Xd ? this.Xd.call(this.de, this) : this.Id = j;
    this.wa || this.Eb(new Wc)
  }
};
s.$d = function(a, b) {
  Xc(this, a, b);
  this.Ob--;
  0 == this.Ob && this.wa && Yc(this)
};
function Xc(a, b, c) {
  a.wa = j;
  a.Sb = c;
  a.Ib = !b;
  Yc(a)
}
function Zc(a) {
  a.wa && (a.Id || f(new $c), a.Id = m)
}
s.ca = function(a) {
  Zc(this);
  Xc(this, j, a)
};
s.Eb = function(a) {
  Zc(this);
  Xc(this, m, a)
};
function ad(a, b) {
  bd(a, b, k, i)
}
function cd(a, b) {
  bd(a, k, b, i)
}
function bd(a, b, c, d) {
  a.dc.push([b, c, d]);
  a.wa && Yc(a)
}
function dd(a, b) {
  bd(a, b, b, i)
}
function ed(a) {
  return Ya(a.dc, function(a) {
    return x(a[1])
  })
}
function Yc(a) {
  a.Qd && a.wa && ed(a) && (t.clearTimeout(a.Qd), delete a.Qd);
  a.w && (a.w.Rc--, delete a.w);
  for(var b = a.Sb, c = m, d = m;a.dc.length && 0 == a.Ob;) {
    var e = a.dc.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.Ib ? h : g) {
      try {
        var l = g.call(e || a.de, b);
        ga(l) && (a.Ib = a.Ib && (l == b || l instanceof Error), a.Sb = b = l);
        b instanceof Vc && (d = j, a.Ob++)
      }catch(n) {
        b = n, a.Ib = j, ed(a) || (c = j)
      }
    }
  }
  a.Sb = b;
  d && a.Ob && (bd(b, y(a.$d, a, j), y(a.$d, a, m)), b.tf = j);
  c && (a.Qd = t.setTimeout(function() {
    ga(b.message) && b.stack && (b.message += "\n" + b.stack);
    f(b)
  }, 0))
}
function fd(a) {
  var b = new Vc;
  b.ca(a);
  return b
}
function gd(a) {
  var b = new Vc;
  b.Eb(a);
  return b
}
function $c() {
  C.call(this)
}
A($c, C);
$c.prototype.message = "Already called";
function Wc() {
  C.call(this)
}
A(Wc, C);
Wc.prototype.message = "Deferred was cancelled";
function hd(a) {
  this.I = a;
  this.gc = [];
  this.he = [];
  this.sf = y(this.qg, this)
}
hd.prototype.Nd = k;
function id(a, b, c, d) {
  a.gc.push([b, c, d]);
  a.Nd == k && (a.Nd = a.I.setTimeout(a.sf, 0))
}
hd.prototype.qg = function() {
  this.Nd = k;
  var a = this.gc;
  this.gc = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], e = c[1], c = c[2];
    try {
      d.apply(e, c)
    }catch(g) {
      this.I.setTimeout(function() {
        f(g)
      }, 0)
    }
  }
  if(0 == this.gc.length) {
    a = this.he;
    this.he = [];
    for(b = 0;b < a.length;b++) {
      a[b].ca(k)
    }
  }
};
var jd = new hd(t.window);
var kd;
function ld(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function md(a, b) {
  var c = ld(a), d = fb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    $a(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function nd(a, b) {
  var c = ld(a), d = fb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < e.length;h++) {
    $a(d, e[h]) && (eb(e, h--, 1), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
;function od(a, b) {
  this.width = a;
  this.height = b
}
s = od.prototype;
s.H = function() {
  return new od(this.width, this.height)
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
var pd = !J || qc();
!dc && !J || J && qc() || dc && L("1.9.1");
var qd = J && !L("9");
function rd(a, b) {
  this.x = ga(a) ? a : 0;
  this.y = ga(b) ? b : 0
}
rd.prototype.H = function() {
  return new rd(this.x, this.y)
};
rd.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function sd(a) {
  return a ? new td(ud(a)) : kd || (kd = new td)
}
function P(a) {
  return v(a) ? document.getElementById(a) : a
}
function vd(a, b) {
  Qa(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in wd ? a.setAttribute(wd[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var wd = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function xd() {
  var a = yd.O.parentWindow || yd.O.defaultView || window, b = a.document;
  if(K && !L("500") && !ec) {
    "undefined" == typeof a.innerHeight && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new od(a.innerWidth, b)
  }
  a = "CSS1Compat" == b.compatMode ? b.documentElement : b.body;
  return new od(a.clientWidth, a.clientHeight)
}
function zd(a, b, c) {
  return Ad(document, arguments)
}
function Ad(a, b) {
  var c = b[0], d = b[1];
  if(!pd && d && (d.name || d.type)) {
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
  d && (v(d) ? c.className = d : u(d) ? md.apply(k, [c].concat(d)) : vd(c, d));
  2 < b.length && Bd(a, c, b, 2);
  return c
}
function Bd(a, b, c, d) {
  function e(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && 0 < g.nodeType) ? Wa(Cd(g) ? cb(g) : g, e) : e(g)
  }
}
function Dd(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Ed(a, b) {
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
function ud(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
var Fd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Gd = {IMG:" ", BR:"\n"};
function Hd(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, "number" == typeof a && 0 <= a && 32768 > a) : m
}
function Id(a) {
  var b = [];
  Jd(a, b, m);
  return b.join("")
}
function Jd(a, b, c) {
  if(!(a.nodeName in Fd)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Gd) {
        b.push(Gd[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Jd(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Cd(a) {
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
function td(a) {
  this.O = a || t.document || document
}
s = td.prototype;
s.cb = sd;
s.g = function(a) {
  return v(a) ? this.O.getElementById(a) : a
};
s.r = function(a, b, c) {
  return Ad(this.O, arguments)
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
  Bd(ud(a), a, arguments, 1)
};
s.contains = Ed;
function Kd(a, b) {
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
        a.push('<property id="', d, '">'), Kd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', D(c), '">'), Kd(a, b[c]), a.push("</property>"))
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
;var Md;
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
  Md = c
})();
function Nd(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
var Od = dc ? "MozUserSelect" : K ? "WebkitUserSelect" : k;
function Pd(a) {
  this.te = a;
  this.j = []
}
A(Pd, M);
var Qd = [];
function Q(a, b, c, d) {
  u(c) || (Qd[0] = c, c = Qd);
  for(var e = 0;e < c.length;e++) {
    a.j.push(O(b, c[e], d || a, m, a.te || a))
  }
  return a
}
function Rd(a, b, c, d, e, g) {
  if(u(c)) {
    for(var h = 0;h < c.length;h++) {
      Rd(a, b, c[h], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.te || a;
      e = !!e;
      if(b = Mc(b, c, e)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].Ta && b[c].lb == d && b[c].capture == e && b[c].rc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, Nc(b), ab(a.j, b))
  }
  return a
}
Pd.prototype.Cd = function() {
  Wa(this.j, Nc);
  this.j.length = 0
};
Pd.prototype.c = function() {
  Pd.e.c.call(this);
  this.Cd()
};
Pd.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Sd() {
}
ea(Sd);
Sd.prototype.Wf = 0;
Sd.eb();
function Td(a) {
  this.ta = a || sd();
  this.Ub = Ud
}
A(Td, Tc);
Td.prototype.Qf = Sd.eb();
var Ud = k;
function Vd(a, b) {
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
s = Td.prototype;
s.ga = k;
s.J = m;
s.m = k;
s.Ub = k;
s.w = k;
s.sa = k;
s.Ab = k;
s.rg = m;
function Xd(a) {
  return a.ga || (a.ga = ":" + (a.Qf.Wf++).toString(36))
}
s.g = o("m");
function Yd(a) {
  return a.fb || (a.fb = new Pd(a))
}
s.getParent = o("w");
s.Fd = function(a) {
  this.w && this.w != a && f(Error("Method not supported"));
  Td.e.Fd.call(this, a)
};
s.cb = o("ta");
s.r = function() {
  this.m = this.ta.createElement("div")
};
function Zd(a, b) {
  a.J && f(Error("Component already rendered"));
  a.m || a.r();
  b ? b.insertBefore(a.m, k) : a.ta.O.body.appendChild(a.m);
  (!a.w || a.w.J) && a.ua()
}
s.ua = function() {
  this.J = j;
  $d(this, function(a) {
    !a.J && a.g() && a.ua()
  })
};
s.Fb = function() {
  $d(this, function(a) {
    a.J && a.Fb()
  });
  this.fb && this.fb.Cd();
  this.J = m
};
s.c = function() {
  Td.e.c.call(this);
  this.J && this.Fb();
  this.fb && (this.fb.b(), delete this.fb);
  $d(this, function(a) {
    a.b()
  });
  !this.rg && this.m && Dd(this.m);
  this.w = this.m = this.Ab = this.sa = k
};
s.sb = function(a) {
  this.J && f(Error("Component already rendered"));
  this.Ub = a
};
function $d(a, b) {
  a.sa && Wa(a.sa, b, i)
}
s.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : Xd(a), a = this.Ab && c ? (c in this.Ab ? this.Ab[c] : i) || k : k;
    if(c && a) {
      var d = this.Ab;
      c in d && delete d[c];
      ab(this.sa, a);
      b && (a.Fb(), a.m && Dd(a.m));
      c = a;
      c == k && f(Error("Unable to set parent component"));
      c.w = k;
      Td.e.Fd.call(c, k)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function ae(a) {
  this.s = new I;
  a && this.Oc(a)
}
function be(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ka(a) : b.substr(0, 1) + a
}
s = ae.prototype;
s.v = function() {
  return this.s.v()
};
s.add = function(a) {
  this.s.set(be(a), a)
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
  return this.s.remove(be(a))
};
s.clear = function() {
  this.s.clear()
};
s.Qa = function() {
  return this.s.Qa()
};
s.contains = function(a) {
  return this.s.W(be(a))
};
s.K = function() {
  return this.s.K()
};
s.H = function() {
  return new ae(this)
};
s.k = function(a) {
  return this.v() == Cb(a) && ce(this, a)
};
function ce(a, b) {
  var c = Cb(b);
  if(a.v() > c) {
    return m
  }
  !(b instanceof ae) && 5 < c && (b = new ae(b));
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
;function de(a) {
  return ee(a || arguments.callee.caller, [])
}
function ee(a, b) {
  var c = [];
  if($a(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(fe(a) + "(");
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
            g = (g = fe(g)) ? g : "[fn]";
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
        c.push(ee(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function fe(a) {
  if(ge[a]) {
    return ge[a]
  }
  a = "" + a;
  if(!ge[a]) {
    var b = /function ([^\(]+)/.exec(a);
    ge[a] = b ? b[1] : "[Anonymous]"
  }
  return ge[a]
}
var ge = {};
function he(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
he.prototype.cd = k;
he.prototype.bd = k;
var ie = 0;
he.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || ie++;
  this.ff = d || z();
  this.Z = a;
  this.Ke = b;
  this.Fe = c;
  delete this.cd;
  delete this.bd
};
he.prototype.rb = aa("Z");
function je(a) {
  this.ud = a
}
je.prototype.w = k;
je.prototype.Z = k;
je.prototype.sa = k;
je.prototype.Kb = k;
function R(a, b) {
  this.name = a;
  this.value = b
}
R.prototype.toString = o("name");
var ke = new R("SHOUT", 1200), le = new R("SEVERE", 1E3), me = new R("WARNING", 900), ne = new R("INFO", 800), oe = new R("CONFIG", 700), pe = new R("FINE", 500), qe = new R("FINEST", 300), re = new R("ALL", 0), se = [new R("OFF", Infinity), ke, le, me, ne, oe, pe, new R("FINER", 400), qe, re], te = k;
function ue(a) {
  if(!te) {
    te = {};
    for(var b = 0, c;c = se[b];b++) {
      te[c.value] = c, te[c.name] = c
    }
  }
  return te[a] || k
}
s = je.prototype;
s.getParent = o("w");
s.rb = aa("Z");
function ve(a) {
  if(a.Z) {
    return a.Z
  }
  if(a.w) {
    return ve(a.w)
  }
  Ia("Root logger has no level set.");
  return k
}
s.log = function(a, b, c) {
  if(a.value >= ve(this).value) {
    a = this.Kf(a, b, c);
    b = "log:" + a.Ke;
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
s.Kf = function(a, b, c) {
  var d = new he(a, "" + b, this.ud);
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
        var n, p, G = m;
        try {
          n = c.lineNumber || c.wh || "Not available"
        }catch(r) {
          n = "Not available", G = j
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || l
        }catch(w) {
          p = "Not available", G = j
        }
        h = G || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:p, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + D(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + D(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + D(de(g) + "-> ")
    }catch(B) {
      e = "Exception trying to expose exception! You win, we lose. " + B
    }
    d.bd = e
  }
  return d
};
function S(a, b) {
  a.log(le, b, i)
}
function T(a, b) {
  a.log(me, b, i)
}
s.info = function(a, b) {
  this.log(ne, a, b)
};
function U(a, b) {
  a.log(pe, b, i)
}
function V(a, b) {
  a.log(qe, b, i)
}
var we = {}, xe = k;
function ye() {
  xe || (xe = new je(""), we[""] = xe, xe.rb(oe))
}
function ze() {
  ye();
  return xe
}
function W(a) {
  ye();
  var b;
  if(!(b = we[a])) {
    b = new je(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = W(a.substr(0, c));
    c.sa || (c.sa = {});
    c.sa[d] = b;
    b.w = c;
    we[a] = b
  }
  return b
}
;function Ae(a, b) {
  Td.call(this, b);
  this.Gf = a;
  this.ad = new Pd(this);
  this.ic = new I
}
A(Ae, Td);
s = Ae.prototype;
s.a = W("goog.ui.media.FlashObject");
s.tg = "window";
s.Vd = "#000000";
s.qf = "sameDomain";
function Be(a, b, c) {
  a.Sd = v(b) ? b : Math.round(b) + "px";
  a.gd = v(c) ? c : Math.round(c) + "px";
  a.g() && (b = a.g() ? a.g().firstChild : k, c = a.Sd, a = a.gd, c instanceof od ? (a = c.height, c = c.width) : a == i && f(Error("missing height argument")), b.style.width = Nd(c), b.style.height = Nd(a))
}
s.ua = function() {
  Ae.e.ua.call(this);
  var a = this.g(), b;
  b = J ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = J ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = va(c, this.tg), d = this.ic.fa(), e = this.ic.K(), g = [], h = 0;h < d.length;h++) {
    var l = ya(d[h]), n = ya(e[h]);
    g.push(l + "=" + n)
  }
  b = va(b, Xd(this), Xd(this), "goog-ui-media-flash-object", D(this.Gf), D(g.join("&")), this.Vd, this.qf, c);
  a.innerHTML = b;
  this.Sd && this.gd && Be(this, this.Sd, this.gd);
  Q(this.ad, this.g(), Ra(wc), zc)
};
s.r = function() {
  this.Ze != k && !(0 <= Ga(Md, this.Ze)) && (T(this.a, "Required flash version not found:" + this.Ze), f(Error("Method not supported")));
  var a = this.cb().createElement("div");
  a.className = "goog-ui-media-flash";
  this.m = a
};
s.c = function() {
  Ae.e.c.call(this);
  this.ic = k;
  this.ad.b();
  this.ad = k
};
function Ce() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ z()).toString(36)
}
function De(a) {
  return a.substr(0, a.length - 1)
}
var Ee = /^(0|[1-9]\d*)$/, Fe = /^(0|\-?[1-9]\d*)$/;
function Ge(a) {
  var b = He;
  return Ee.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function Ie(a) {
  C.call(this, a)
}
A(Ie, C);
Ie.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function Je(a, b, c) {
  function d() {
    e && delete t.__loadFlashObject_callbacks[e]
  }
  var e;
  if(dc && !L("1.8.1.20")) {
    return gd(new Ie("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Ga(Md, "9"))) {
    return b = Md, gd(new Ie("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  e = "_" + Ce();
  var h = new Vc(d);
  t.__loadFlashObject_callbacks[e] = function() {
    a.setTimeout(function() {
      d();
      h.ca(P(g))
    }, 0)
  };
  b.ic.set("onloadcallback", '__loadFlashObject_callbacks["' + e + '"]()');
  g = Xd(b);
  Zd(b, c);
  return h
}
function Ke(a, b, c) {
  var d = Je(a, b, c), e = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  dd(d, function(b) {
    a.clearTimeout(e);
    return b
  });
  return d
}
;function Le(a, b) {
  this.ga = "_" + Ce();
  this.Jc = a;
  this.Ea = b;
  this.Ia = a.Ia
}
A(Le, M);
s = Le.prototype;
s.mb = j;
s.Wc = m;
s.a = W("cw.net.FlashSocket");
s.p = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.ga);
  a.push("'>")
};
function Me(a, b, c) {
  "frames" == b ? (a = a.Ea, Ne(a.G), Oe(a.G, c)) : "stillreceiving" == b ? (c = a.Ea, V(c.a, "onstillreceiving"), Ne(c.G)) : "connect" == b ? (c = a.Ea, c.a.info("onconnect"), Ne(c.G), a = c.yb, c.yb = k, a.length && (V(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.Gc.bc(a))) : "close" == b ? (a.mb = m, a.b()) : "ioerror" == b ? (a.mb = m, b = a.Ea, T(b.a, "onioerror: " + H(c)), Pe(b.G, m), a.b()) : "securityerror" == b ? (a.mb = m, b = a.Ea, T(b.a, "onsecurityerror: " + H(c)), 
  Pe(b.G, m), a.b()) : f(Error("bad event: " + b))
}
function Qe(a) {
  a.Wc = j;
  a.mb = m;
  a.b()
}
s.Uc = function(a, b) {
  try {
    var c = this.Ia.CallFunction(Ld("__FC_connect", this.ga, a, b, "<int32/>\n"))
  }catch(d) {
    return S(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), Qe(this)
  }
  '"OK"' != c && f(Error("__FC_connect failed? ret: " + c))
};
s.bc = function(a) {
  try {
    var b = this.Ia.CallFunction(Ld("__FC_writeFrames", this.ga, a))
  }catch(c) {
    return S(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), Qe(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (T(this.a, "Flash no longer knows of " + this.ga + "; disposing."), this.b()) : f(Error("__FC_writeFrames failed? ret: " + b)))
};
s.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.mb);
  Le.e.c.call(this);
  var a = this.Ia;
  delete this.Ia;
  if(this.mb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(Ld("__FC_close", this.ga)))
    }catch(b) {
      S(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Wc = j
    }
  }
  if(this.Wc) {
    a = this.Ea, T(a.a, "oncrash"), Pe(a.G, j)
  }else {
    this.Ea.onclose()
  }
  delete this.Ea;
  delete this.Jc.gb[this.ga]
};
function Re(a, b) {
  this.C = a;
  this.Ia = b;
  this.gb = {};
  this.Tc = "__FST_" + Ce();
  t[this.Tc] = y(this.Af, this);
  var c = b.CallFunction(Ld("__FC_setCallbackFunc", this.Tc));
  '"OK"' != c && f(Error("__FC_setCallbackFunc failed? ret: " + c))
}
A(Re, M);
s = Re.prototype;
s.a = W("cw.net.FlashSocketTracker");
s.p = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  F(this.gb, a, b);
  a.push(">")
};
s.Xc = function(a) {
  a = new Le(this, a);
  return this.gb[a.ga] = a
};
s.yf = function(a, b, c, d) {
  var e = this.gb[a];
  e ? "frames" == b && d ? (Me(e, "ioerror", "FlashConnector hadError while handling data."), e.b()) : Me(e, b, c) : T(this.a, "Cannot dispatch because we have no instance: " + H([a, b, c, d]))
};
s.Af = function(a, b, c, d) {
  try {
    id(this.C, this.yf, this, [a, b, c, d])
  }catch(e) {
    t.window.setTimeout(function() {
      f(e)
    }, 0)
  }
};
s.c = function() {
  Re.e.c.call(this);
  for(var a = Ra(this.gb);a.length;) {
    a.pop().b()
  }
  delete this.gb;
  delete this.Ia;
  t[this.Tc] = i
};
function Se(a) {
  this.G = a;
  this.yb = []
}
A(Se, M);
s = Se.prototype;
s.a = W("cw.net.FlashSocketConduit");
s.bc = function(a) {
  this.yb ? (V(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.yb.push.apply(this.yb, a)) : (V(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.Gc.bc(a))
};
s.Uc = function(a, b) {
  this.Gc.Uc(a, b)
};
s.onclose = function() {
  this.a.info("onclose");
  Pe(this.G, m)
};
s.c = function() {
  this.a.info("in disposeInternal.");
  Se.e.c.call(this);
  this.Gc.b();
  delete this.G
};
var Te = [];
function Ue() {
  var a = new Vc;
  Te.push(a);
  return a
}
function Ve(a) {
  var b = Te;
  Te = [];
  Wa(b, function(b) {
    b.ca(a)
  })
}
function We(a, b) {
  if(Te.length) {
    return Ue()
  }
  var c = new Ae(b + "FlashConnector.swf?cb=" + Xe);
  c.Vd = "#777777";
  Be(c, 300, 30);
  var d = P("minerva-elements");
  d || f(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
  var e = P("minerva-elements-FlashConnectorSwf");
  e || (e = zd("div", {id:"minerva-elements-FlashConnectorSwf"}), d.appendChild(e));
  Mb = Ke(a.I, c, e);
  ad(Mb, Ve);
  return Ue()
}
;function Ye() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;var He = Math.pow(2, 53);
var Ze = {of:q("<cw.eq.Wildcard>")};
function $e(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function af(a, b, c) {
  var d = fa(a), e = fa(b);
  if(a == Ze || b == Ze) {
    return j
  }
  if(a != k && "function" == typeof a.k) {
    return c && c.push("running custom equals function on left object"), a.k(b, c)
  }
  if(b != k && "function" == typeof b.k) {
    return c && c.push("running custom equals function on right object"), b.k(a, c)
  }
  if($e(d) || $e(e)) {
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
                if(!af(a[d], b[d], c)) {
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
          if(a.nf == Ub && b.nf == Ub) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!af(a[g], b[g], c)) {
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
;function X(a) {
  C.call(this, a)
}
A(X, C);
X.prototype.name = "cw.net.InvalidFrame";
function bf() {
  var a = [];
  this.Y(a);
  return a.join("")
}
function cf() {
}
cf.prototype.k = function(a, b) {
  return!(a instanceof cf) ? m : af(df(this), df(a), b)
};
cf.prototype.p = function(a, b) {
  a.push("<HelloFrame properties=");
  F(df(this), a, b);
  a.push(">")
};
function df(a) {
  return[a.ub, a.Ue, a.ve, a.Ye, a.Zb, a.Ld, a.Me, a.Ie, a.sd, a.Ge, a.jf, a.ef, a.aa, a.vc]
}
cf.prototype.S = bf;
cf.prototype.Y = function(a) {
  var b = {};
  b.tnum = this.ub;
  b.ver = this.Ue;
  b.format = this.ve;
  b["new"] = this.Ye;
  b.id = this.Zb;
  b.ming = this.Ld;
  b.pad = this.Me;
  b.maxb = this.Ie;
  ga(this.sd) && (b.maxt = this.sd);
  b.maxia = this.Ge;
  b.tcpack = this.jf;
  b.eeds = this.ef;
  b.sack = this.aa instanceof Ob ? De((new ef(this.aa)).S()) : this.aa;
  b.seenack = this.vc instanceof Ob ? De((new ef(this.vc)).S()) : this.vc;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new wb(i)).Wb(b), "H")
};
function ff(a) {
  this.tb = a
}
ff.prototype.k = function(a) {
  return a instanceof ff && this.tb == a.tb
};
ff.prototype.p = function(a, b) {
  a.push("new StringFrame(");
  F(this.tb, a, b);
  a.push(")")
};
ff.prototype.S = bf;
ff.prototype.Y = function(a) {
  a.push(this.tb, " ")
};
function gf(a) {
  this.ec = a
}
gf.prototype.k = function(a) {
  return a instanceof gf && this.ec == a.ec
};
gf.prototype.p = function(a, b) {
  a.push("new CommentFrame(");
  F(this.ec, a, b);
  a.push(")")
};
gf.prototype.S = bf;
gf.prototype.Y = function(a) {
  a.push(this.ec, "^")
};
function hf(a) {
  this.Vb = a
}
hf.prototype.k = function(a) {
  return a instanceof hf && this.Vb == a.Vb
};
hf.prototype.p = function(a) {
  a.push("new SeqNumFrame(", "" + this.Vb, ")")
};
hf.prototype.S = bf;
hf.prototype.Y = function(a) {
  a.push("" + this.Vb, "N")
};
function jf(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = He;
    if(Fe.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var g = Ge(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Ob(a, c)
}
function ef(a) {
  this.aa = a
}
ef.prototype.k = function(a, b) {
  return a instanceof ef && this.aa.k(a.aa, b)
};
ef.prototype.p = function(a, b) {
  a.push("new SackFrame(");
  F(this.aa, a, b);
  a.push(")")
};
ef.prototype.S = bf;
ef.prototype.Y = function(a) {
  var b = this.aa;
  a.push(b.Ua.join(","), "|", "" + b.Ya);
  a.push("A")
};
function kf(a) {
  this.Mb = a
}
kf.prototype.k = function(a, b) {
  return a instanceof kf && this.Mb.k(a.Mb, b)
};
kf.prototype.p = function(a, b) {
  a.push("new StreamStatusFrame(");
  F(this.Mb, a, b);
  a.push(")")
};
kf.prototype.S = bf;
kf.prototype.Y = function(a) {
  var b = this.Mb;
  a.push(b.Ua.join(","), "|", "" + b.Ya);
  a.push("T")
};
function lf() {
}
lf.prototype.p = function(a) {
  a.push("new StreamCreatedFrame()")
};
lf.prototype.k = function(a) {
  return a instanceof lf
};
lf.prototype.S = bf;
lf.prototype.Y = function(a) {
  a.push("C")
};
function mf() {
}
mf.prototype.p = function(a) {
  a.push("new YouCloseItFrame()")
};
mf.prototype.k = function(a) {
  return a instanceof mf
};
mf.prototype.S = bf;
mf.prototype.Y = function(a) {
  a.push("Y")
};
function nf(a, b) {
  this.Qb = a;
  this.xb = b
}
nf.prototype.k = function(a) {
  return a instanceof nf && this.Qb == a.Qb && this.xb == a.xb
};
nf.prototype.p = function(a, b) {
  a.push("new ResetFrame(");
  F(this.Qb, a, b);
  a.push(", ", "" + this.xb, ")")
};
nf.prototype.S = bf;
nf.prototype.Y = function(a) {
  a.push(this.Qb, "|", "" + Number(this.xb), "!")
};
var of = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function pf(a) {
  this.reason = a
}
pf.prototype.k = function(a) {
  return a instanceof pf && this.reason == a.reason
};
pf.prototype.p = function(a, b) {
  a.push("new TransportKillFrame(");
  F(this.reason, a, b);
  a.push(")")
};
pf.prototype.S = bf;
pf.prototype.Y = function(a) {
  a.push(this.reason, "K")
};
function qf(a) {
  a || f(new X("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new ff(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = jf(De(a)), a == k && f(new X("bad sack")), new ef(a)
  }
  if("N" == b) {
    return a = Ge(De(a)), a == k && f(new X("bad seqNum")), new hf(a)
  }
  if("T" == b) {
    return a = jf(De(a)), a == k && f(new X("bad lastSackSeen")), new kf(a)
  }
  if("Y" == b) {
    return 1 != a.length && f(new X("leading garbage")), new mf
  }
  if("^" == b) {
    return new gf(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && f(new X("leading garbage")), new lf
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && f(new X("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && f(new X("bad applicationLevel")), new nf(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = of[a], a == k && f(new X("unknown kill reason: " + a)), new pf(a)
  }
  f(new X("Invalid frame type " + b))
}
;var rf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function sf(a, b) {
  var c = a.match(rf), d = b.match(rf);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Y(a, b) {
  var c;
  a instanceof Y ? (this.qb(b == k ? a.ha : b), tf(this, a.ja), uf(this, a.Wa), vf(this, a.X), wf(this, a.Da), xf(this, a.U), yf(this, a.L.H()), zf(this, a.Ma)) : a && (c = ("" + a).match(rf)) ? (this.qb(!!b), tf(this, c[1] || "", j), uf(this, c[2] || "", j), vf(this, c[3] || "", j), wf(this, c[4]), xf(this, c[5] || "", j), yf(this, c[6] || "", j), zf(this, c[7] || "", j)) : (this.qb(!!b), this.L = new Af(k, this, this.ha))
}
s = Y.prototype;
s.ja = "";
s.Wa = "";
s.X = "";
s.Da = k;
s.U = "";
s.Ma = "";
s.Sf = m;
s.ha = m;
s.toString = function() {
  if(this.ba) {
    return this.ba
  }
  var a = [];
  this.ja && a.push(Bf(this.ja, Cf), ":");
  this.X && (a.push("//"), this.Wa && a.push(Bf(this.Wa, Cf), "@"), a.push(v(this.X) ? encodeURIComponent(this.X) : k), this.Da != k && a.push(":", "" + this.Da));
  this.U && (this.X && "/" != this.U.charAt(0) && a.push("/"), a.push(Bf(this.U, "/" == this.U.charAt(0) ? Df : Ef)));
  var b = "" + this.L;
  b && a.push("?", b);
  this.Ma && a.push("#", Bf(this.Ma, Ff));
  return this.ba = a.join("")
};
s.H = function() {
  var a = this.ja, b = this.Wa, c = this.X, d = this.Da, e = this.U, g = this.L.H(), h = this.Ma, l = new Y(k, this.ha);
  a && tf(l, a);
  b && uf(l, b);
  c && vf(l, c);
  d && wf(l, d);
  e && xf(l, e);
  g && yf(l, g);
  h && zf(l, h);
  return l
};
function tf(a, b, c) {
  Gf(a);
  delete a.ba;
  a.ja = c ? b ? decodeURIComponent(b) : "" : b;
  a.ja && (a.ja = a.ja.replace(/:$/, ""))
}
function uf(a, b, c) {
  Gf(a);
  delete a.ba;
  a.Wa = c ? b ? decodeURIComponent(b) : "" : b
}
function vf(a, b, c) {
  Gf(a);
  delete a.ba;
  a.X = c ? b ? decodeURIComponent(b) : "" : b
}
function wf(a, b) {
  Gf(a);
  delete a.ba;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && f(Error("Bad port number " + b)), a.Da = b) : a.Da = k
}
function xf(a, b, c) {
  Gf(a);
  delete a.ba;
  a.U = c ? b ? decodeURIComponent(b) : "" : b
}
function yf(a, b, c) {
  Gf(a);
  delete a.ba;
  b instanceof Af ? (a.L = b, a.L.Rd = a, a.L.qb(a.ha)) : (c || (b = Bf(b, Hf)), a.L = new Af(b, a, a.ha))
}
function zf(a, b, c) {
  Gf(a);
  delete a.ba;
  a.Ma = c ? b ? decodeURIComponent(b) : "" : b
}
function Gf(a) {
  a.Sf && f(Error("Tried to modify a read-only Uri"))
}
s.qb = function(a) {
  this.ha = a;
  this.L && this.L.qb(a);
  return this
};
function If(a) {
  return a instanceof Y ? a.H() : new Y(a, i)
}
var Jf = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Bf(a, b) {
  var c = k;
  v(a) && (c = a, Jf.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, Kf)));
  return c
}
function Kf(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Cf = /[#\/\?@]/g, Ef = /[\#\?:]/g, Df = /[\#\?]/g, Hf = /[\#\?@]/g, Ff = /#/g;
function Af(a, b, c) {
  this.la = a || k;
  this.Rd = b || k;
  this.ha = !!c
}
function Lf(a) {
  if(!a.l && (a.l = new I, a.f = 0, a.la)) {
    for(var b = a.la.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, g = k;
      0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = Mf(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
s = Af.prototype;
s.l = k;
s.f = k;
s.v = function() {
  Lf(this);
  return this.f
};
s.add = function(a, b) {
  Lf(this);
  Nf(this);
  a = Mf(this, a);
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
  Lf(this);
  a = Mf(this, a);
  if(this.l.W(a)) {
    Nf(this);
    var b = this.l.get(a);
    u(b) ? this.f -= b.length : this.f--;
    return this.l.remove(a)
  }
  return m
};
s.clear = function() {
  Nf(this);
  this.l && this.l.clear();
  this.f = 0
};
s.Qa = function() {
  Lf(this);
  return 0 == this.f
};
s.W = function(a) {
  Lf(this);
  a = Mf(this, a);
  return this.l.W(a)
};
s.fc = function(a) {
  var b = this.K();
  return $a(b, a)
};
s.fa = function() {
  Lf(this);
  for(var a = this.l.K(), b = this.l.fa(), c = [], d = 0;d < b.length;d++) {
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
  Lf(this);
  if(a) {
    if(a = Mf(this, a), this.W(a)) {
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
  Lf(this);
  Nf(this);
  a = Mf(this, a);
  if(this.W(a)) {
    var c = this.l.get(a);
    u(c) ? this.f -= c.length : this.f--
  }
  this.l.set(a, b);
  this.f++;
  return this
};
s.get = function(a, b) {
  Lf(this);
  a = Mf(this, a);
  if(this.W(a)) {
    var c = this.l.get(a);
    return u(c) ? c[0] : c
  }
  return b
};
s.toString = function() {
  if(this.la) {
    return this.la
  }
  if(!this.l) {
    return""
  }
  for(var a = [], b = 0, c = this.l.fa(), d = 0;d < c.length;d++) {
    var e = c[d], g = ya(e), e = this.l.get(e);
    if(u(e)) {
      for(var h = 0;h < e.length;h++) {
        0 < b && a.push("&"), a.push(g), "" !== e[h] && a.push("=", ya(e[h])), b++
      }
    }else {
      0 < b && a.push("&"), a.push(g), "" !== e && a.push("=", ya(e)), b++
    }
  }
  return this.la = a.join("")
};
function Nf(a) {
  delete a.$a;
  delete a.la;
  a.Rd && delete a.Rd.ba
}
s.H = function() {
  var a = new Af;
  this.$a && (a.$a = this.$a);
  this.la && (a.la = this.la);
  this.l && (a.l = this.l.H());
  return a
};
function Mf(a, b) {
  var c = "" + b;
  a.ha && (c = c.toLowerCase());
  return c
}
s.qb = function(a) {
  a && !this.ha && (Lf(this), Nf(this), Fb(this.l, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ha = a
};
s.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Fb(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
function Of(a, b, c, d) {
  this.contentWindow = a;
  this.hc = b;
  this.Md = c;
  this.If = d
}
Of.prototype.p = function(a, b) {
  a.push("<XDRFrame frameId=");
  F(this.If, a, b);
  a.push(", expandedUrl=");
  F(this.hc, a, b);
  a.push(", streams=");
  F(this.Md, a, b);
  a.push(">")
};
function Pf() {
  this.frames = [];
  this.qd = new I
}
Pf.prototype.a = W("cw.net.XDRTracker");
function Qf(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor(Ye()) + ("" + Math.floor(Ye()))
  })
}
function Rf(a, b) {
  for(var c = Sf, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = 0 == e.Md.length) {
      g = e.hc;
      var h = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + H(b) + " existing frame " + H(e)), fd(e)
    }
  }
  d = Ce() + Ce();
  e = Qf(a);
  g = t.location;
  g instanceof Y || (g = If(g));
  e instanceof Y || (e = If(e));
  var l = g;
  g = l.H();
  (h = !!e.ja) ? tf(g, e.ja) : h = !!e.Wa;
  h ? uf(g, e.Wa) : h = !!e.X;
  h ? vf(g, e.X) : h = e.Da != k;
  var n = e.U;
  if(h) {
    wf(g, e.Da)
  }else {
    if(h = !!e.U) {
      if("/" != n.charAt(0) && (l.X && !l.U ? n = "/" + n : (l = g.U.lastIndexOf("/"), -1 != l && (n = g.U.substr(0, l + 1) + n))), ".." == n || "." == n) {
        n = ""
      }else {
        if(!(-1 == n.indexOf("./") && -1 == n.indexOf("/."))) {
          for(var l = 0 == n.lastIndexOf("/", 0), n = n.split("/"), p = [], G = 0;G < n.length;) {
            var r = n[G++];
            "." == r ? l && G == n.length && p.push("") : ".." == r ? ((1 < p.length || 1 == p.length && "" != p[0]) && p.pop(), l && G == n.length && p.push("")) : (p.push(r), l = j)
          }
          n = p.join("/")
        }
      }
    }
  }
  h ? xf(g, n) : h = "" !== e.L.toString();
  h ? (l = e.L, l.$a || (l.$a = l.toString() ? decodeURIComponent(l.toString()) : ""), yf(g, l.$a, i)) : h = !!e.Ma;
  h && zf(g, e.Ma);
  e = g.toString();
  g = ("" + t.location).match(rf)[3] || k;
  h = e.match(rf)[3] || k;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + H(b)), c = fd(new Of(t, e, [b], k))) : ((g = P("minerva-elements")) || f(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), h = new Vc, c.qd.set(d, [h, e, b]), c.a.info("Creating new XDRFrame " + H(d) + "for " + H(b)), c = zd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = h);
  return c
}
Pf.prototype.vg = function(a) {
  var b = this.qd.get(a);
  b || f(Error("Unknown frameId " + H(a)));
  this.qd.remove(b);
  var c = b[0], a = new Of(P("minerva-xdrframe-" + a).contentWindow || (P("minerva-xdrframe-" + a).contentDocument || P("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (P("minerva-xdrframe-" + a).contentDocument || P("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.ca(a)
};
var Sf = new Pf;
t.__XHRTracker_xdrFrameLoaded = y(Sf.vg, Sf);
var Tf;
Tf = m;
var Uf = $b();
Uf && (-1 != Uf.indexOf("Firefox") || -1 != Uf.indexOf("Camino") || -1 != Uf.indexOf("iPhone") || -1 != Uf.indexOf("iPod") || -1 != Uf.indexOf("iPad") || -1 != Uf.indexOf("Android") || -1 != Uf.indexOf("Chrome") && (Tf = j));
var Vf = Tf;
var Xe = "4bdfc178fc0e508c0cd5efc3fdb09920";
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function Wf(a, b, c, d, e, g) {
  Vc.call(this, e, g);
  this.Ee = a;
  this.Yc = [];
  this.je = !!b;
  this.Ff = !!c;
  this.wf = !!d;
  for(b = 0;b < a.length;b++) {
    bd(a[b], y(this.ne, this, b, j), y(this.ne, this, b, m))
  }
  0 == a.length && !this.je && this.ca(this.Yc)
}
A(Wf, Vc);
Wf.prototype.Oe = 0;
Wf.prototype.ne = function(a, b, c) {
  this.Oe++;
  this.Yc[a] = [b, c];
  this.wa || (this.je && b ? this.ca([a, c]) : this.Ff && !b ? this.Eb(c) : this.Oe == this.Ee.length && this.ca(this.Yc));
  this.wf && !b && (c = k);
  return c
};
Wf.prototype.Eb = function(a) {
  Wf.e.Eb.call(this, a);
  Wa(this.Ee, function(a) {
    a.cancel()
  })
};
function Xf(a) {
  a = new Wf(a, m, j);
  ad(a, function(a) {
    return Xa(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function Yf(a, b) {
  this.ug = a;
  this.He = b
}
Yf.prototype.md = 0;
Yf.prototype.xc = 0;
Yf.prototype.dd = m;
function Zf(a) {
  var b = [];
  if(a.dd) {
    return[b, 2]
  }
  var c = a.md, d = a.ug.responseText;
  for(a.md = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var e = d.substr(a.xc, c - a.xc), e = e.replace(/\r$/, "");
    if(e.length > a.He) {
      return a.dd = j, [b, 2]
    }
    b.push(e);
    a.xc = c += 1
  }
  return a.md - a.xc - 1 > a.He ? (a.dd = j, [b, 2]) : [b, 1]
}
;function ag(a, b, c) {
  this.G = b;
  this.$ = a;
  this.Vc = c
}
A(ag, M);
s = ag.prototype;
s.a = W("cw.net.XHRMaster");
s.Ga = -1;
s.rd = function(a, b, c) {
  this.Vc.__XHRSlave_makeRequest(this.$, a, b, c)
};
s.ya = o("Ga");
s.wd = function(a, b) {
  1 != b && S(this.a, H(this.$) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Ne(this.G);
  Oe(this.G, a)
};
s.xd = function(a) {
  U(this.a, "ongotheaders_: " + H(a));
  var b = k;
  "Content-Length" in a && (b = Ge(a["Content-Length"]));
  a = this.G;
  U(a.a, a.q() + " got Content-Length: " + b);
  a.ka == bg && (b == k && (T(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), cg(a, 2E3 + 1E3 * (b / 3072)))
};
s.yd = function(a) {
  1 != a && U(this.a, this.G.q() + "'s XHR's readyState is " + a);
  this.Ga = a;
  2 <= this.Ga && Ne(this.G)
};
s.vd = function() {
  this.G.b()
};
s.c = function() {
  ag.e.c.call(this);
  delete dg.oa[this.$];
  this.Vc.__XHRSlave_dispose(this.$);
  delete this.Vc
};
function eg() {
  this.oa = {}
}
A(eg, M);
s = eg.prototype;
s.a = W("cw.net.XHRMasterTracker");
s.Xc = function(a, b) {
  var c = "_" + Ce(), d = new ag(c, a, b);
  return this.oa[c] = d
};
s.wd = function(a, b, c) {
  var b = bb(b), d = this.oa[a];
  d ? d.wd(b, c) : S(this.a, "onframes_: no master for " + H(a))
};
s.xd = function(a, b) {
  var c = this.oa[a];
  c ? c.xd(b) : S(this.a, "ongotheaders_: no master for " + H(a))
};
s.yd = function(a, b) {
  var c = this.oa[a];
  c ? c.yd(b) : S(this.a, "onreadystatechange_: no master for " + H(a))
};
s.vd = function(a) {
  var b = this.oa[a];
  b ? (delete this.oa[b.$], b.vd()) : S(this.a, "oncomplete_: no master for " + H(a))
};
s.c = function() {
  eg.e.c.call(this);
  for(var a = Ra(this.oa);a.length;) {
    a.pop().b()
  }
  delete this.oa
};
var dg = new eg;
t.__XHRMaster_onframes = y(dg.wd, dg);
t.__XHRMaster_oncomplete = y(dg.vd, dg);
t.__XHRMaster_ongotheaders = y(dg.xd, dg);
t.__XHRMaster_onreadystatechange = y(dg.yd, dg);
function fg(a, b, c) {
  this.ia = a;
  this.host = b;
  this.port = c
}
function gg(a, b, c) {
  this.host = a;
  this.port = b;
  this.pg = c
}
function hg(a, b) {
  b || (b = a);
  this.ia = a;
  this.Ha = b
}
hg.prototype.p = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  F(this.ia, a, b);
  a.push(", secondaryUrl=");
  F(this.Ha, a, b);
  a.push(">")
};
function ig(a, b, c, d) {
  this.ia = a;
  this.Te = b;
  this.Ha = c;
  this.cf = d;
  (!(0 == this.ia.indexOf("http://") || 0 == this.ia.indexOf("https://")) || !(0 == this.Ha.indexOf("http://") || 0 == this.Ha.indexOf("https://"))) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Te.location.href;
  sf(this.ia, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.cf.location.href;
  sf(this.Ha, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
ig.prototype.p = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  F(this.ia, a, b);
  a.push(", secondaryUrl=");
  F(this.Ha, a, b);
  a.push(">")
};
var jg = new gf(";)]}");
function kg() {
}
kg.prototype.ke = q(1);
function lg(a) {
  this.jg = a
}
lg.prototype.p = function(a, b) {
  a.push("<UserContext for ");
  F(this.jg, a, b);
  a.push(">")
};
function mg(a, b, c) {
  this.u = a;
  this.kg = b ? b : new kg;
  this.C = c ? c : jd;
  this.$b = new ae;
  this.Zb = Ce() + Ce();
  this.Fa = new Pb;
  this.kd = new Rb;
  this.ac = k;
  this.Lc = [];
  this.vb = new lg(this);
  K && (this.ac = Kc(t, "load", this.bg, m, this))
}
A(mg, M);
s = mg.prototype;
s.a = W("cw.net.ClientStream");
s.Ce = new Ob(-1, []);
s.De = new Ob(-1, []);
s.Vf = 50;
s.Uf = 1048576;
s.zd = k;
s.onreset = k;
s.Qe = k;
s.Jd = m;
s.Dd = m;
s.d = 1;
s.Od = -1;
s.h = k;
s.A = k;
s.Rb = k;
s.Kd = 0;
s.Se = 0;
s.bf = 0;
s.p = function(a, b) {
  a.push("<ClientStream id=");
  F(this.Zb, a, b);
  a.push(", state=", "" + this.d);
  a.push(", primary=");
  F(this.h, a, b);
  a.push(", secondary=");
  F(this.A, a, b);
  a.push(", resetting=");
  F(this.Rb, a, b);
  a.push(">")
};
function ng(a) {
  var b = [-1];
  a.h && b.push(a.h.nb);
  a.A && b.push(a.A.nb);
  return Math.max.apply(Math.max, b)
}
function og(a) {
  if(!(3 > a.d)) {
    var b = 0 != a.Fa.T.v(), c = Sb(a.kd), d = !c.k(a.De) && !(a.h && c.k(a.h.kb) || a.A && c.k(a.A.kb)), e = ng(a);
    if((b = b && e < a.Fa.Ka) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.h.zb ? (V(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.h, c != d.kb && (!d.pa && !d.B.length && pg(d), d.B.push(new ef(c)), d.kb = c)), b && qg(a.h, a.Fa, e + 1), a.h.na()) : a.A == k ? a.Jd ? (V(a.a, "tryToSend_: creating secondary to send " + g), a.A = rg(a, m), b && qg(a.A, a.Fa, e + 1), a.A.na()) : (V(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.Dd = j) : V(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
s.bg = function() {
  this.ac = k;
  if(this.h && this.h.hb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.h;
    a.Nc = j;
    a.b()
  }
  this.A && this.A.hb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.A, a.Nc = j, a.b())
};
function sg(a, b) {
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
    og(a)
  }
}
function rg(a, b) {
  var c;
  a.u instanceof ig ? c = 1 == a.kg.ke() ? bg : tg : a.u instanceof gg ? c = ug : f(Error("Don't support endpoint " + H(a.u)));
  a.Od += 1;
  c = new vg(a.C, a, a.Od, c, a.u, b);
  V(a.a, "Created: " + c.q());
  a.$b.add(c);
  return c
}
function wg(a, b, c) {
  var d = new xg(a.C, a, b, c);
  V(a.a, "Created: " + d.q() + ", delay=" + b + ", times=" + c);
  a.$b.add(d);
  return d
}
function yg(a, b) {
  a.$b.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  U(a.a, "Offline: " + b.q());
  a.Kd = b.Ca ? a.Kd + b.Ca : 0;
  1 <= a.Kd && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.vb, "stream penalty reached limit", m), a.b());
  if(3 < a.d) {
    4 == a.d && b.mf ? (U(a.a, "Disposing because resettingTransport_ is done."), a.b()) : U(a.a, "Not creating a transport because ClientStream is in state " + a.d)
  }else {
    var c;
    var d;
    c = b instanceof xg;
    if(!c && b.Nc) {
      var e = K ? Vf ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      V(a.a, "getDelayForNextTransport_: " + H({delay:c, times:d}))
    }else {
      if(d = b.Zd(), b == a.h ? d ? e = ++a.Se : c || (e = a.Se = 0) : d ? e = ++a.bf : c || (e = a.bf = 0), c || !e) {
        d = c = 0, V(a.a, "getDelayForNextTransport_: " + H({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(4E3 * Math.random()) - 2E3, l = Math.max(0, b.hf - b.Pd);
        d = (c = Math.max(0, g + h - l)) ? 1 : 0;
        V(a.a, "getDelayForNextTransport_: " + H({count:e, base:g, variance:h, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    b == a.h ? (a.h = k, c ? a.h = wg(a, e, c) : (e = ng(a), a.h = rg(a, j), qg(a.h, a.Fa, e + 1)), a.h.na()) : b == a.A && (a.A = k, c ? (a.A = wg(a, e, c), a.A.na()) : og(a))
  }
}
s.reset = function(a) {
  3 < this.d && f(Error("reset: Can't send reset in state " + this.d));
  this.d = 4;
  this.h && this.h.zb ? (this.a.info("reset: Sending ResetFrame over existing primary."), zg(this.h, a), this.h.na()) : (this.h && (U(this.a, "reset: Disposing primary before sending ResetFrame."), this.h.b()), this.A && (U(this.a, "reset: Disposing secondary before sending ResetFrame."), this.A.b()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Rb = rg(this, m), zg(this.Rb, a), this.Rb.na());
  this.onreset && this.onreset.call(this.vb, a, j)
};
function Ag(a, b, c, d) {
  var e;
  e = a.kd;
  for(var g = a.Vf, h = a.Uf, l = [], n = m, p = 0, G = c.length;p < G;p++) {
    var r = c[p], w = r[0], r = r[1];
    if(w == e.Ra + 1) {
      e.Ra += 1;
      for(l.push(r);;) {
        w = e.Ra + 1;
        r = e.Ja.get(w, Tb);
        if(r === Tb) {
          break
        }
        l.push(r[0]);
        e.Ja.remove(w);
        e.Q -= r[1];
        e.Ra = w
      }
    }else {
      if(!(w <= e.Ra)) {
        if(g != k && e.Ja.v() >= g) {
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
      if(h = c[g], a.zd && a.zd.call(a.vb, h), 4 == a.d || a.da) {
        return
      }
    }
  }
  d || og(a);
  if(!(4 == a.d || a.da) && e) {
    S(b.a, b.q() + "'s peer caused rwin overflow."), b.b()
  }
}
s.ge = function(a) {
  S(this.a, "Failed to start " + H(this) + "; error was " + H(a.message));
  this.b()
};
s.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.d && f(Error("ClientStream.start: " + H(this) + " already started"));
  this.d = 2;
  if(this.u instanceof hg) {
    var a = Rf(this.u.ia, this), b = Rf(this.u.Ha, this), a = Xf([a, b]);
    ad(a, y(this.Df, this));
    cd(a, y(this.ge, this))
  }else {
    if(this.u instanceof fg) {
      if(Nb) {
        this.ie()
      }else {
        var a = We(this.C, this.u.ia), c = this;
        ad(a, function(a) {
          Nb || (Nb = new Re(c.C, a));
          return k
        });
        ad(a, y(this.ie, this));
        cd(a, y(this.ge, this))
      }
    }else {
      Bg(this)
    }
  }
};
s.Df = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].hc, e = a[1].hc;
  this.Lc.push(a[0]);
  this.Lc.push(a[1]);
  this.u = new ig(d, b, e, c);
  Bg(this)
};
s.ie = function() {
  this.u = new gg(this.u.host, this.u.port, Nb);
  Bg(this)
};
function Bg(a) {
  a.d = 3;
  a.h = rg(a, j);
  qg(a.h, a.Fa, k);
  a.h.na()
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
  K && this.ac && (Nc(this.ac), this.ac = k);
  this.Qe && this.Qe.call(this.vb);
  delete this.$b;
  delete this.h;
  delete this.A;
  delete this.Rb;
  delete this.vb;
  mg.e.c.call(this)
};
var bg = 1, tg = 2, ug = 3;
function vg(a, b, c, d, e, g) {
  this.C = a;
  this.D = b;
  this.ub = c;
  this.ka = d;
  this.u = e;
  this.B = [];
  this.Za = g;
  this.zb = !this.hb();
  this.pb = this.ka != bg;
  this.rf = y(this.ng, this)
}
A(vg, M);
s = vg.prototype;
s.a = W("cw.net.ClientTransport");
s.o = k;
s.Pd = k;
s.hf = k;
s.Ac = k;
s.pa = m;
s.Hc = m;
s.kb = k;
s.jc = 0;
s.nb = -1;
s.zc = -1;
s.mf = m;
s.Nc = m;
s.Ca = 0;
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
  return this.ka == bg || this.ka == tg
};
function Cg(a, b) {
  gb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Ag(a.D, a, b, !a.pb)
}
function Dg(a, b, c) {
  try {
    var d = qf(b);
    a.jc += 1;
    U(a.a, a.q() + " RECV " + H(d));
    var e;
    1 == a.jc && !d.k(jg) && a.hb() ? (T(a.a, a.q() + " is closing soon because got bad preamble: " + H(d)), e = j) : e = m;
    if(e) {
      return j
    }
    if(d instanceof ff) {
      if(!/^([ -~]*)$/.test(d.tb)) {
        return a.Jb = j
      }
      a.zc += 1;
      c.push([a.zc, d.tb])
    }else {
      if(d instanceof ef) {
        var g = a.D, h = d.aa;
        g.Ce = h;
        var l = g.Fa, n = h.Ya, c = m;
        n > l.Ka && (c = j);
        for(var p = Qb(l).concat(), d = 0;d < p.length;d++) {
          var G = p[d];
          if(G > n) {
            break
          }
          var r = l.T.get(G)[1];
          l.T.remove(G);
          l.Q -= r
        }
        for(d = 0;d < h.Ua.length;d++) {
          var w = h.Ua[d];
          w > l.Ka && (c = j);
          l.T.W(w) && (r = l.T.get(w)[1], l.T.remove(w), l.Q -= r)
        }
        l.T.Qa() && l.T.clear();
        if(c) {
          return T(a.a, a.q() + " is closing soon because got bad SackFrame"), a.Jb = j
        }
      }else {
        if(d instanceof hf) {
          a.zc = d.Vb - 1
        }else {
          if(d instanceof kf) {
            a.D.De = d.Mb
          }else {
            if(d instanceof mf) {
              return V(a.a, a.q() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof pf) {
              return a.Jb = j, "stream_attach_failure" == d.reason ? a.Ca += 1 : "acked_unsent_strings" == d.reason && (a.Ca += 0.5), V(a.a, a.q() + " is closing soon because got " + H(d)), j
            }
            if(!(d instanceof gf)) {
              if(d instanceof lf) {
                var B = a.D, bi = !a.pb;
                V(B.a, "Stream is now confirmed to exist at server.");
                B.Jd = j;
                B.Dd && !bi && (B.Dd = m, og(B))
              }else {
                if(c.length) {
                  Cg(a, c);
                  if(!u(c)) {
                    for(var Wd = c.length - 1;0 <= Wd;Wd--) {
                      delete c[Wd]
                    }
                  }
                  c.length = 0
                }
                if(d instanceof nf) {
                  var Ic = a.D;
                  Ic.onreset && Ic.onreset.call(Ic.vb, d.Qb, d.xb);
                  Ic.b();
                  return j
                }
                f(Error(a.q() + " had unexpected state in framesReceived_."))
              }
            }
          }
        }
      }
    }
  }catch($f) {
    return $f instanceof X || f($f), T(a.a, a.q() + " is closing soon because got InvalidFrame: " + H(b)), a.Jb = j
  }
  return m
}
function Oe(a, b) {
  a.Hc = j;
  try {
    for(var c = m, d = [], e = 0, g = b.length;e < g;e++) {
      if(a.da) {
        a.a.info(a.q() + " returning from loop because we're disposed.");
        return
      }
      if(c = Dg(a, b[e], d)) {
        break
      }
    }
    d.length && Cg(a, d);
    a.Hc = m;
    a.B.length && a.na();
    c && (V(a.a, a.q() + " closeSoon is true.  Frames were: " + H(b)), a.b())
  }finally {
    a.Hc = m
  }
}
s.ng = function() {
  T(this.a, this.q() + " timed out due to lack of connection or no data being received.");
  this.b()
};
function Eg(a) {
  a.Ac != k && (a.C.I.clearTimeout(a.Ac), a.Ac = k)
}
function cg(a, b) {
  Eg(a);
  b = Math.round(b);
  a.Ac = a.C.I.setTimeout(a.rf, b);
  U(a.a, a.q() + "'s receive timeout set to " + b + " ms.")
}
function Ne(a) {
  a.ka != bg && (a.ka == ug || a.ka == tg ? cg(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ka)))
}
function pg(a) {
  var b = new cf;
  b.ub = a.ub;
  b.Ue = 2;
  b.ve = 2;
  a.D.Jd || (b.Ye = j);
  b.Zb = a.D.Zb;
  b.Ld = a.pb;
  b.Ld && (b.Me = 4096);
  b.Ie = 3E5;
  b.Ge = a.pb ? Math.floor(10) : 0;
  b.jf = m;
  a.Za && (b.ef = k, b.sd = Math.floor((a.pb ? 358E4 : 25E3) / 1E3));
  b.aa = Sb(a.D.kd);
  b.vc = a.D.Ce;
  a.B.push(b);
  a.kb = b.aa
}
function Pe(a, b) {
  b && (a.Ca += 0.5);
  a.b()
}
s.na = function() {
  this.pa && !this.zb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.Hc) {
    V(this.a, this.q() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.pa;
    this.pa = j;
    !a && !this.B.length && pg(this);
    for(a = 0;a < this.B.length;a++) {
      U(this.a, this.q() + " SEND " + H(this.B[a]))
    }
    if(this.hb()) {
      for(var a = [], b = 0, c = this.B.length;b < c;b++) {
        this.B[b].Y(a), a.push("\n")
      }
      this.B = [];
      a = a.join("");
      b = this.Za ? this.u.ia : this.u.Ha;
      this.o = dg.Xc(this, this.Za ? this.u.Te : this.u.cf);
      this.Pd = this.C.I === Uc ? z() : this.C.I.getTime();
      this.o.rd(b, "POST", a);
      cg(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.pb ? 0 : this.Za ? 25E3 : 0))
    }else {
      if(this.ka == ug) {
        a = [];
        b = 0;
        for(c = this.B.length;b < c;b++) {
          a.push(this.B[b].S())
        }
        this.B = [];
        this.o ? this.o.bc(a) : (b = this.u, this.o = new Se(this), this.o.Gc = b.pg.Xc(this.o), this.Pd = this.C.I === Uc ? z() : this.C.I.getTime(), this.o.Uc(b.host, b.port), this.o.da || (this.o.bc(a), this.o.da || cg(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.ka))
      }
    }
  }
};
function qg(a, b, c) {
  !a.pa && !a.B.length && pg(a);
  for(var d = Math.max(c, a.nb + 1), e = Qb(b), c = [], g = 0;g < e.length;g++) {
    var h = e[g];
    (d == k || h >= d) && c.push([h, b.T.get(h)[0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], e = g[0], g = g[1], (-1 == a.nb || a.nb + 1 != e) && a.B.push(new hf(e)), a.B.push(new ff(g)), a.nb = e
  }
}
s.c = function() {
  this.a.info(this.q() + " in disposeInternal.");
  vg.e.c.call(this);
  this.hf = this.C.I === Uc ? z() : this.C.I.getTime();
  this.B = [];
  Eg(this);
  this.o && this.o.b();
  var a = this.D;
  this.D = k;
  yg(a, this)
};
function zg(a, b) {
  !a.pa && !a.B.length && pg(a);
  a.B.push(new nf(b, j));
  a.mf = j
}
function xg(a, b, c, d) {
  this.C = a;
  this.D = b;
  this.ee = c;
  this.ae = d
}
A(xg, M);
s = xg.prototype;
s.pa = m;
s.zb = m;
s.qc = k;
s.kb = k;
s.a = W("cw.net.DoNothingTransport");
function Fg(a) {
  a.qc = a.C.I.setTimeout(function() {
    a.qc = k;
    a.ae--;
    a.ae ? Fg(a) : a.b()
  }, a.ee)
}
s.na = function() {
  this.pa && !this.zb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.pa = j;
  Fg(this)
};
s.p = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.ee, ">")
};
s.hb = q(m);
s.q = q("Wast. T");
s.Zd = q(m);
s.c = function() {
  this.a.info(this.q() + " in disposeInternal.");
  xg.e.c.call(this);
  this.qc != k && this.C.I.clearTimeout(this.qc);
  var a = this.D;
  this.D = k;
  yg(a, this)
};
var Gg;
function Hg() {
  kb.apply(this)
}
A(Hg, kb);
function Ig() {
  kb.apply(this)
}
A(Ig, kb);
qb(Hg, {"0":{name:"NewPost", Jf:"demosminerva.ljstream_messages.NewPost"}, 1:{name:"title", bb:9, type:String}, 2:{name:"url", bb:9, type:String}, 3:{name:"body", bb:9, type:String}, 4:{name:"num_images", bb:5, type:Number}, 5:{name:"lang", bb:9, type:String}});
qb(Ig, {"0":{name:"SetPreferences", Jf:"demosminerva.ljstream_messages.SetPreferences"}, 1:{name:"include_russian_posts", bb:8, type:Boolean}});
function Jg() {
  this.Xe = z()
}
var Kg = new Jg;
Jg.prototype.set = aa("Xe");
Jg.prototype.reset = function() {
  this.set(z())
};
Jg.prototype.get = o("Xe");
function Lg(a) {
  this.Bd = a || "";
  this.hg = Kg
}
Lg.prototype.dg = j;
Lg.prototype.fg = j;
Lg.prototype.eg = j;
Lg.prototype.df = m;
function Mg(a) {
  return 10 > a ? "0" + a : "" + a
}
function Ng(a, b) {
  var c = (a.ff - b) / 1E3, d = c.toFixed(3), e = 0;
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
function Og(a) {
  Lg.call(this, a)
}
A(Og, Lg);
Og.prototype.df = j;
function Pg(a) {
  this.td = a || 100;
  this.ra = []
}
s = Pg.prototype;
s.Nb = 0;
s.add = function(a) {
  this.ra[this.Nb] = a;
  this.Nb = (this.Nb + 1) % this.td
};
s.get = function(a) {
  a = Qg(this, a);
  return this.ra[a]
};
s.set = function(a, b) {
  a = Qg(this, a);
  this.ra[a] = b
};
s.v = function() {
  return this.ra.length
};
s.Qa = function() {
  return 0 == this.ra.length
};
s.clear = function() {
  this.Nb = this.ra.length = 0
};
s.K = function() {
  for(var a = this.v(), b = this.v(), c = [], a = this.v() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
s.fa = function() {
  for(var a = [], b = this.v(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
s.W = function(a) {
  return a < this.v()
};
s.fc = function(a) {
  for(var b = this.v(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return j
    }
  }
  return m
};
function Qg(a, b) {
  b >= a.ra.length && f(Error("Out of bounds exception"));
  return a.ra.length < a.td ? b : (a.Nb + Number(b)) % a.td
}
;function Rg(a, b) {
  this.za = a || "";
  this.Bd = b || "";
  this.ob = [];
  this.Cc = new Pg(Sg);
  this.$f = y(this.pf, this);
  this.Hf = new Og(this.Bd);
  this.Ef = {};
  if(j != this.ye) {
    this.ye = j;
    var c = ze(), d = this.$f;
    c.Kb || (c.Kb = []);
    c.Kb.push(d)
  }
  this.Db = "1" == Tg(this.za, "enabled");
  t.setInterval(y(this.cg, this), 7500)
}
var Sg = 500;
s = Rg.prototype;
s.lf = "LOGGING";
s.Bf = m;
s.t = k;
s.Td = m;
s.ye = m;
s.Wd = k;
s.nd = z();
s.Pa = function() {
  this.Db && Ug(this)
};
s.isEnabled = o("Db");
s.Ec = function(a) {
  if(this.Db = a) {
    Ug(this), this.t && this.Kc()
  }
  Vg(this, "enabled", a ? "1" : "0")
};
function Wg(a) {
  return!!a.t && !a.t.closed
}
s.uf = function() {
  this.Cc.clear();
  Wg(this) && this.Kc()
};
s.pf = function(a) {
  if(!this.Ef[a.Fe]) {
    var b = this.Hf, c;
    switch(a.Z.value) {
      case ke.value:
        c = "dbg-sh";
        break;
      case le.value:
        c = "dbg-sev";
        break;
      case me.value:
        c = "dbg-w";
        break;
      case ne.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.Bd, " ");
    if(b.dg) {
      var e = new Date(a.ff);
      d.push("[", Mg(e.getFullYear() - 2E3) + Mg(e.getMonth() + 1) + Mg(e.getDate()) + " " + Mg(e.getHours()) + ":" + Mg(e.getMinutes()) + ":" + Mg(e.getSeconds()) + "." + Mg(Math.floor(e.getMilliseconds() / 10)), "] ")
    }
    b.fg && d.push("[", Fa(Ng(a, b.hg.get())), "s] ");
    b.eg && d.push("[", D(a.Fe), "] ");
    d.push('<span class="', c, '">', za(Fa(D(a.Ke))));
    b.df && a.cd && d.push("<br>", za(Fa(a.bd || "")));
    d.push("</span><br>");
    b = d.join("");
    this.Db ? (Ug(this), this.Cc.add(b), Xg(this, b)) : this.Cc.add(b);
    this.Bf && a.Z.value >= le.value && this.Ec(j)
  }
};
function Xg(a, b) {
  a.ob.push(b);
  t.clearTimeout(a.Wd);
  750 < z() - a.nd ? a.Ud() : a.Wd = t.setTimeout(y(a.Ud, a), 250)
}
s.Ud = function() {
  this.nd = z();
  if(Wg(this)) {
    var a = this.t.document.body, a = a && 100 >= a.scrollHeight - (a.scrollTop + a.clientHeight);
    this.t.document.write(this.ob.join(""));
    this.ob.length = 0;
    a && this.t.scrollTo(0, 1E6)
  }
};
function Yg(a) {
  for(var b = a.Cc.K(), c = 0;c < b.length;c++) {
    Xg(a, b[c])
  }
}
function Ug(a) {
  if(!Wg(a) && !a.Td) {
    var b = Tg(a.za, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), e = Number(b[2]), b = Number(b[3]);
    a.Td = j;
    a.t = window.open("", J ? a.za.replace(/[\s\-\.\,]/g, "_") : a.za, "width=" + e + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    !a.t && !a.gg && (alert("Logger popup was blocked"), a.gg = j);
    a.Td = m;
    a.t && a.Kc()
  }
}
s.nc = q("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
s.Kc = function() {
  Wg(this) || (this.t.document.open(), Xg(this, "<style>" + this.nc() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.lf + "<br><small>Logger: " + this.za + "</small></div><hr>"), Yg(this))
};
function Vg(a, b, c) {
  b += a.za;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(z() + 2592E6)).toUTCString()
}
function Tg(a, b, c) {
  var a = b + a, b = "" + document.cookie, d = b.indexOf(a + "=");
  return-1 != d ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, -1 == c ? b.length : c))) : c || ""
}
s.cg = function() {
  Wg(this) && Vg(this, "dbg", (this.t.screenX || this.t.screenLeft || 0) + "," + (this.t.screenY || this.t.screenTop || 0) + "," + (this.t.outerWidth || 800) + "," + (this.t.outerHeight || 500))
};
function Zg(a, b) {
  if($g) {
    var c = ah(), d;
    for(d in c) {
      var e = d.replace("fancywindow.sel.", ""), e = W(e), g = e.Z, h = window.localStorage.getItem(d).toString();
      (!g || g.toString() != h) && e.rb(ue(h))
    }
  }
  Rg.call(this, a, b)
}
A(Zg, Rg);
var $g;
a: {
  try {
    $g = !!window.localStorage.getItem;
    break a
  }catch(bh) {
  }
  $g = m
}
s = Zg.prototype;
s.Ud = function() {
  this.nd = z();
  if(Wg(this)) {
    for(var a = this.N.g("log"), b = 100 >= a.scrollHeight - (a.scrollTop + a.offsetHeight), c = 0;c < this.ob.length;c++) {
      var d = this.N.r("div", "logmsg");
      d.innerHTML = this.ob[c];
      a.appendChild(d)
    }
    this.ob.length = 0;
    this.$e();
    b && (a.scrollTop = a.scrollHeight)
  }
};
s.Kc = function() {
  if(Wg(this)) {
    var a = this.t.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.za + "</title><style>" + this.nc() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.za + "</b></p><p>" + this.lf + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (J ? a.body : this.t).onresize = y(this.$e, this);
    this.N = new td(a);
    this.N.g("openbutton").onclick = y(this.Yf, this);
    this.N.g("closebutton").onclick = y(this.vf, this);
    this.N.g("clearbutton").onclick = y(this.uf, this);
    this.N.g("exitbutton").onclick = y(this.Cf, this);
    Yg(this)
  }
};
s.Yf = function() {
  var a = this.N.g("optionsarea");
  a.innerHTML = "";
  for(var b = ch(), c = this.N, d = 0;d < b.length;d++) {
    var e = W(b[d]), e = c.r("div", {}, dh(this, "sel" + b[d], e.Z ? e.Z.name : "INHERIT"), c.r("span", {}, b[d] || "(root)"));
    a.appendChild(e)
  }
  this.N.g("options").style.display = "block";
  return m
};
function dh(a, b, c) {
  for(var a = a.N, b = a.r("select", {id:b}), d = 0;d < se.length;d++) {
    var e = se[d], g = a.r("option", {}, e.name);
    c == e.name && (g.selected = j);
    b.appendChild(g)
  }
  b.appendChild(a.r("option", {selected:"INHERIT" == c}, "INHERIT"));
  return b
}
s.vf = function() {
  this.N.g("options").style.display = "none";
  for(var a = ch(), b = this.N, c = 0;c < a.length;c++) {
    var d = W(a[c]), e = b.g("sel" + a[c]), e = e.options[e.selectedIndex].text;
    "INHERIT" == e ? d.rb(k) : d.rb(ue(e))
  }
  if($g) {
    a = ch();
    b = ah();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], e = W(a[c]).Z, d in b ? e ? window.localStorage.getItem(d) != e.name && window.localStorage.setItem(d, e.name) : window.localStorage.removeItem(d) : e && window.localStorage.setItem(d, e.name)
    }
  }
  return m
};
s.$e = function() {
  var a = this.N, b = a.g("log"), c = a.g("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.O.body.offsetHeight - c.offsetHeight - (J ? 4 : 0) + "px"
};
s.Cf = function() {
  this.Ec(m);
  this.t && this.t.close()
};
s.nc = function() {
  return Zg.e.nc.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function ah() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != k && 0 == d.lastIndexOf("fancywindow.sel.", 0) && (a[d] = j)
  }
  return a
}
function ch() {
  var a = Sa(we);
  a.sort();
  return a
}
;function eh() {
}
var fh;
ea(eh);
s = eh.prototype;
s.kc = function() {
};
s.r = function(a) {
  var b = a.cb().r("div", gh(this, a).join(" "), a.Bb);
  this.Ed(a, b);
  return b
};
s.Cb = function(a, b, c) {
  if(a = a.g ? a.g() : a) {
    if(J && !L("7")) {
      var d = hh(ld(a), b);
      d.push(b);
      pa(c ? md : nd, a).apply(k, d)
    }else {
      c ? md(a, b) : nd(a, b)
    }
  }
};
s.we = function(a) {
  if(a.Ub == k) {
    var b;
    a: {
      b = a.J ? a.m : a.ta.O.body;
      var c = ud(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (b = c.defaultView.getComputedStyle(b, k))) {
        b = b.direction || b.getPropertyValue("direction");
        break a
      }
      b = ""
    }
    a.Ub = "rtl" == (b || ((a.J ? a.m : a.ta.O.body).currentStyle ? (a.J ? a.m : a.ta.O.body).currentStyle.direction : k) || (a.J ? a.m : a.ta.O.body).style && (a.J ? a.m : a.ta.O.body).style.direction)
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
  var c = !b, d = J || cc ? a.getElementsByTagName("*") : k;
  if(Od) {
    if(c = c ? "none" : "", a.style[Od] = c, d) {
      for(var e = 0, g;g = d[e];e++) {
        g.style[Od] = c
      }
    }
  }else {
    if(J || cc) {
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for(e = 0;g = d[e];e++) {
          g.setAttribute("unselectable", c)
        }
      }
    }
  }
};
s.sb = function(a, b) {
  this.Cb(a, this.xa() + "-rtl", b)
};
s.ze = function(a) {
  var b;
  return a.M & 32 && (b = a.Na()) ? Hd(b) : m
};
s.Xb = function(a, b) {
  var c;
  if(a.M & 32 && (c = a.Na())) {
    if(!b && a.d & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.d & 32 && a.me()
    }
    Hd(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
s.Hd = function(a, b) {
  a.style.display = b ? "" : "none"
};
s.P = function(a, b, c) {
  var d = a.g();
  if(d) {
    var e = ih(this, b);
    e && this.Cb(a, e, c);
    this.R(d, b, c)
  }
};
s.R = function(a, b, c) {
  fh || (fh = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = fh[b]) && a.setAttribute("aria-" + b, c)
};
s.Na = function(a) {
  return a.g()
};
s.xa = q("goog-control");
function gh(a, b) {
  var c = a.xa(), d = [c], e = a.xa();
  e != c && d.push(e);
  c = b.d;
  for(e = [];c;) {
    var g = c & -c;
    e.push(ih(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.ea) && d.push.apply(d, c);
  J && !L("7") && d.push.apply(d, hh(d));
  return d
}
function hh(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Wa([], function(d) {
    Za(d, pa($a, a)) && (!b || $a(d, b)) && c.push(d.join("_"))
  });
  return c
}
function ih(a, b) {
  if(!a.Yd) {
    var c = a.xa();
    a.Yd = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Yd[b]
}
;function jh(a, b) {
  a || f(Error("Invalid class name " + a));
  x(b) || f(Error("Invalid decorator function " + b))
}
var kh = {};
function lh(a, b, c, d, e) {
  if(!J && (!K || !L("525"))) {
    return j
  }
  if(gc && e) {
    return mh(a)
  }
  if(e && !d || !c && (17 == b || 18 == b) || J && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(J && qc());
    case 27:
      return!K
  }
  return mh(a)
}
function mh(a) {
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
;function nh(a, b) {
  a && oh(this, a, b)
}
A(nh, Tc);
s = nh.prototype;
s.m = k;
s.tc = k;
s.ld = k;
s.uc = k;
s.Ba = -1;
s.Aa = -1;
var ph = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, qh = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, rh = {61:187, 
59:186}, sh = J || K && L("525");
s = nh.prototype;
s.Mf = function(a) {
  if(K && (17 == this.Ba && !a.ctrlKey || 18 == this.Ba && !a.altKey)) {
    this.Aa = this.Ba = -1
  }
  sh && !lh(a.keyCode, this.Ba, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Aa = dc && a.keyCode in rh ? rh[a.keyCode] : a.keyCode
};
s.Of = function() {
  this.Aa = this.Ba = -1
};
s.handleEvent = function(a) {
  var b = a.ma, c, d;
  J && "keypress" == a.type ? (c = this.Aa, d = 13 != c && 27 != c ? b.keyCode : 0) : K && "keypress" == a.type ? (c = this.Aa, d = 0 <= b.charCode && 63232 > b.charCode && mh(c) ? b.charCode : 0) : cc ? (c = this.Aa, d = mh(c) ? b.keyCode : 0) : (c = b.keyCode || this.Aa, d = b.charCode || 0, gc && 63 == d && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in ph ? e = ph[c] : 25 == c && a.shiftKey && (e = 9) : g && g in qh && (e = qh[g]);
  a = e == this.Ba;
  this.Ba = e;
  b = new th(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.b()
  }
};
s.g = o("m");
function oh(a, b, c) {
  a.uc && a.detach();
  a.m = b;
  a.tc = O(a.m, "keypress", a, c);
  a.ld = O(a.m, "keydown", a.Mf, c, a);
  a.uc = O(a.m, "keyup", a.Of, c, a)
}
s.detach = function() {
  this.tc && (Nc(this.tc), Nc(this.ld), Nc(this.uc), this.uc = this.ld = this.tc = k);
  this.m = k;
  this.Aa = this.Ba = -1
};
s.c = function() {
  nh.e.c.call(this);
  this.detach()
};
function th(a, b, c, d) {
  d && this.Pa(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
A(th, Bc);
function Z(a, b, c) {
  Td.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ka(b);
      if(d = kh[d]) {
        break
      }
      b = b.e ? b.e.constructor : k
    }
    b = d ? x(d.eb) ? d.eb() : new d : k
  }
  this.z = b;
  this.Bb = a
}
A(Z, Td);
s = Z.prototype;
s.Bb = k;
s.d = 0;
s.M = 39;
s.Qc = 255;
s.ig = 0;
s.Xa = j;
s.ea = k;
s.fd = j;
s.Pc = m;
s.Zf = k;
s.Na = function() {
  return this.z.Na(this)
};
function uh(a, b) {
  b && (a.ea ? $a(a.ea, b) || a.ea.push(b) : a.ea = [b], a.z.Cb(a, b, j))
}
s.Cb = function(a, b) {
  b ? uh(this, a) : a && this.ea && (ab(this.ea, a), 0 == this.ea.length && (this.ea = k), this.z.Cb(this, a, m))
};
s.r = function() {
  var a = this.z.r(this);
  this.m = a;
  var b = this.Zf || this.z.kc();
  b && (a.setAttribute("role", b), a.yh = b);
  this.Pc || this.z.Dc(a, m);
  this.Xa || this.z.Hd(a, m)
};
s.ua = function() {
  Z.e.ua.call(this);
  this.z.we(this);
  if(this.M & -2 && (this.fd && vh(this, j), this.M & 32)) {
    var a = this.Na();
    if(a) {
      var b = this.jb || (this.jb = new nh);
      oh(b, a);
      Q(Q(Q(Yd(this), b, "key", this.Nf), a, "focus", this.Lf), a, "blur", this.me)
    }
  }
};
function vh(a, b) {
  var c = Yd(a), d = a.g();
  b ? (Q(Q(Q(Q(c, d, "mouseover", a.re), d, "mousedown", a.pe), d, "mouseup", a.se), d, "mouseout", a.qe), J && Q(c, d, "dblclick", a.oe)) : (Rd(Rd(Rd(Rd(c, d, "mouseover", a.re), d, "mousedown", a.pe), d, "mouseup", a.se), d, "mouseout", a.qe), J && Rd(c, d, "dblclick", a.oe))
}
s.Fb = function() {
  Z.e.Fb.call(this);
  this.jb && this.jb.detach();
  this.Xa && this.isEnabled() && this.z.Xb(this, m)
};
s.c = function() {
  Z.e.c.call(this);
  this.jb && (this.jb.b(), delete this.jb);
  delete this.z;
  this.ea = this.Bb = k
};
function wh(a) {
  a = a.Bb;
  if(!a) {
    return""
  }
  if(!v(a)) {
    if(u(a)) {
      a = Xa(a, Id).join("")
    }else {
      if(qd && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Jd(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      qd || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
s.sb = function(a) {
  Z.e.sb.call(this, a);
  var b = this.g();
  b && this.z.sb(b, a)
};
s.Dc = function(a) {
  this.Pc = a;
  var b = this.g();
  b && this.z.Dc(b, a)
};
s.Hd = function(a, b) {
  if(b || this.Xa != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.g();
    c && this.z.Hd(c, a);
    this.isEnabled() && this.z.Xb(this, a);
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
  if((!b || "function" != typeof b.isEnabled || b.isEnabled()) && xh(this, 1, !a)) {
    a || (this.setActive(m), yh(this, m)), this.Xa && this.z.Xb(this, a), this.P(1, !a)
  }
};
function yh(a, b) {
  xh(a, 2, b) && a.P(2, b)
}
s.xe = function() {
  return!!(this.d & 4)
};
s.setActive = function(a) {
  xh(this, 4, a) && this.P(4, a)
};
s.P = function(a, b) {
  this.M & a && b != !!(this.d & a) && (this.z.P(this, a, b), this.d = b ? this.d | a : this.d & ~a)
};
function $(a, b) {
  return!!(a.Qc & b) && !!(a.M & b)
}
function xh(a, b, c) {
  return!!(a.M & b) && !!(a.d & b) != c && (!(a.ig & b) || a.dispatchEvent(Vd(b, c))) && !a.da
}
s.re = function(a) {
  (!a.relatedTarget || !Ed(this.g(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && $(this, 2) && yh(this, j)
};
s.qe = function(a) {
  if((!a.relatedTarget || !Ed(this.g(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    $(this, 4) && this.setActive(m), $(this, 2) && yh(this, m)
  }
};
s.pe = function(a) {
  if(this.isEnabled() && ($(this, 2) && yh(this, j), Dc(a) && (!K || !gc || !a.ctrlKey))) {
    $(this, 4) && this.setActive(j), this.z.ze(this) && this.Na().focus()
  }
  !this.Pc && Dc(a) && (!K || !gc || !a.ctrlKey) && a.preventDefault()
};
s.se = function(a) {
  this.isEnabled() && ($(this, 2) && yh(this, j), this.xe() && this.Pb(a) && $(this, 4) && this.setActive(m))
};
s.oe = function(a) {
  this.isEnabled() && this.Pb(a)
};
s.Pb = function(a) {
  if($(this, 16)) {
    var b = !(this.d & 16);
    xh(this, 16, b) && this.P(16, b)
  }
  $(this, 8) && xh(this, 8, j) && this.P(8, j);
  $(this, 64) && (b = !(this.d & 64), xh(this, 64, b) && this.P(64, b));
  b = new yc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.Ad = a.Ad);
  return this.dispatchEvent(b)
};
s.Lf = function() {
  $(this, 32) && xh(this, 32, j) && this.P(32, j)
};
s.me = function() {
  $(this, 4) && this.setActive(m);
  $(this, 32) && xh(this, 32, m) && this.P(32, m)
};
s.Nf = function(a) {
  return this.Xa && this.isEnabled() && this.ed(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
s.ed = function(a) {
  return 13 == a.keyCode && this.Pb(a)
};
x(Z) || f(Error("Invalid component class " + Z));
x(eh) || f(Error("Invalid renderer class " + eh));
var zh = ka(Z);
kh[zh] = eh;
jh("goog-control", function() {
  return new Z(k)
});
function Ah() {
}
A(Ah, eh);
ea(Ah);
s = Ah.prototype;
s.kc = q("button");
s.R = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : Ah.e.R.call(this, a, b, c)
};
s.r = function(a) {
  var b = Ah.e.r.call(this, a), c = a.oc();
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
s.xa = q("goog-button");
function Bh() {
}
A(Bh, Ah);
ea(Bh);
s = Bh.prototype;
s.kc = function() {
};
s.r = function(a) {
  a.J && m != a.fd && vh(a, m);
  a.fd = m;
  a.Qc &= -256;
  a.J && a.d & 32 && f(Error("Component already rendered"));
  a.d & 32 && a.P(32, m);
  a.M &= -33;
  return a.cb().r("button", {"class":gh(this, a).join(" "), disabled:!a.isEnabled(), title:a.oc() || "", value:a.pc() || ""}, wh(a) || "")
};
s.we = function(a) {
  Q(Yd(a), a.g(), "click", a.Pb)
};
s.Dc = da;
s.sb = da;
s.ze = function(a) {
  return a.isEnabled()
};
s.Xb = da;
s.P = function(a, b, c) {
  Bh.e.P.call(this, a, b, c);
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
function Ch(a, b, c) {
  Z.call(this, a, b || Bh.eb(), c)
}
A(Ch, Z);
s = Ch.prototype;
s.pc = o("kf");
s.Fc = function(a) {
  this.kf = a;
  this.z.Fc(this.g(), a)
};
s.oc = o("gf");
s.Gd = function(a) {
  this.gf = a;
  this.z.Gd(this.g(), a)
};
s.c = function() {
  Ch.e.c.call(this);
  delete this.kf;
  delete this.gf
};
s.ua = function() {
  Ch.e.ua.call(this);
  if(this.M & 32) {
    var a = this.Na();
    a && Q(Yd(this), a, "keyup", this.ed)
  }
};
s.ed = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Pb(a) : 32 == a.keyCode
};
jh("goog-button", function() {
  return new Ch(k)
});
function Dh() {
}
A(Dh, Ah);
ea(Dh);
Dh.prototype.r = function(a) {
  var b = {"class":"goog-inline-block " + gh(this, a).join(" "), title:a.oc() || ""}, b = a.cb().r("div", b, Eh(this, a.Bb, a.cb()));
  this.Ed(a, b);
  return b
};
Dh.prototype.kc = q("button");
Dh.prototype.Ed = function(a, b) {
  a.isEnabled() || this.R(b, 1, j);
  a.d & 8 && this.R(b, 8, j);
  a.M & 16 && this.R(b, 16, j);
  a.d & 64 && this.R(b, 64, j)
};
function Eh(a, b, c) {
  return c.r("div", "goog-inline-block " + (a.xa() + "-outer-box"), c.r("div", "goog-inline-block " + (a.xa() + "-inner-box"), b))
}
Dh.prototype.xa = q("goog-custom-button");
function Fh(a, b, c) {
  Ch.call(this, a, b || Dh.eb(), c)
}
A(Fh, Ch);
jh("goog-custom-button", function() {
  return new Fh(k)
});
function Gh() {
}
Gh.prototype.cc = k;
var Hh;
function Ih() {
}
A(Ih, Gh);
function Jh(a) {
  return(a = Kh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Lh(a) {
  var b = {};
  Kh(a) && (b[0] = j, b[1] = j);
  return b
}
Ih.prototype.hd = k;
function Kh(a) {
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
Hh = new Ih;
function Mh(a) {
  this.headers = new I;
  this.wb = a || k
}
A(Mh, Tc);
Mh.prototype.a = W("goog.net.XhrIo");
var Nh = /^https?$/i;
s = Mh.prototype;
s.qa = m;
s.i = k;
s.Mc = k;
s.od = "";
s.Be = "";
s.Lb = "";
s.$c = m;
s.sc = m;
s.jd = m;
s.Oa = m;
s.Ic = 0;
s.Va = k;
s.af = "";
s.sg = m;
s.send = function(a, b, c, d) {
  this.i && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.od = a;
  this.Lb = "";
  this.Be = b;
  this.$c = m;
  this.qa = j;
  this.i = this.wb ? Jh(this.wb) : Jh(Hh);
  this.Mc = this.wb ? this.wb.cc || (this.wb.cc = Lh(this.wb)) : Hh.cc || (Hh.cc = Lh(Hh));
  this.i.onreadystatechange = y(this.Pe, this);
  try {
    U(this.a, Oh(this, "Opening Xhr")), this.jd = j, this.i.open(b, a, j), this.jd = m
  }catch(e) {
    U(this.a, Oh(this, "Error opening Xhr: " + e.message));
    Ph(this, e);
    return
  }
  var a = c || "", g = this.headers.H();
  d && Fb(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.W("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Fb(g, function(a, b) {
    this.i.setRequestHeader(b, a)
  }, this);
  this.af && (this.i.responseType = this.af);
  "withCredentials" in this.i && (this.i.withCredentials = this.sg);
  try {
    this.Va && (Uc.clearTimeout(this.Va), this.Va = k), 0 < this.Ic && (U(this.a, Oh(this, "Will abort after " + this.Ic + "ms if incomplete")), this.Va = Uc.setTimeout(y(this.og, this), this.Ic)), U(this.a, Oh(this, "Sending request")), this.sc = j, this.i.send(a), this.sc = m
  }catch(h) {
    U(this.a, Oh(this, "Send error: " + h.message)), Ph(this, h)
  }
};
s.og = function() {
  "undefined" != typeof ba && this.i && (this.Lb = "Timed out after " + this.Ic + "ms, aborting", U(this.a, Oh(this, this.Lb)), this.dispatchEvent("timeout"), this.abort(8))
};
function Ph(a, b) {
  a.qa = m;
  a.i && (a.Oa = j, a.i.abort(), a.Oa = m);
  a.Lb = b;
  Qh(a);
  Rh(a)
}
function Qh(a) {
  a.$c || (a.$c = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
s.abort = function() {
  this.i && this.qa && (U(this.a, Oh(this, "Aborting")), this.qa = m, this.Oa = j, this.i.abort(), this.Oa = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Rh(this))
};
s.c = function() {
  this.i && (this.qa && (this.qa = m, this.Oa = j, this.i.abort(), this.Oa = m), Rh(this, j));
  Mh.e.c.call(this)
};
s.Pe = function() {
  !this.jd && !this.sc && !this.Oa ? this.Xf() : Sh(this)
};
s.Xf = function() {
  Sh(this)
};
function Sh(a) {
  if(a.qa && "undefined" != typeof ba) {
    if(a.Mc[1] && 4 == a.ya() && 2 == Th(a)) {
      U(a.a, Oh(a, "Local request error detected and ignored"))
    }else {
      if(a.sc && 4 == a.ya()) {
        Uc.setTimeout(y(a.Pe, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.ya()) {
          U(a.a, Oh(a, "Request complete"));
          a.qa = m;
          var b = Th(a), c;
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
              b = ("" + a.od).match(rf)[1] || k, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !Nh.test(b ? b.toLowerCase() : "")
            }
            c = b
          }
          if(c) {
            a.dispatchEvent("complete"), a.dispatchEvent("success")
          }else {
            var d;
            try {
              d = 2 < a.ya() ? a.i.statusText : ""
            }catch(e) {
              U(a.a, "Can not get status: " + e.message), d = ""
            }
            a.Lb = d + " [" + Th(a) + "]";
            Qh(a)
          }
          Rh(a)
        }
      }
    }
  }
}
function Rh(a, b) {
  if(a.i) {
    var c = a.i, d = a.Mc[0] ? da : k;
    a.i = k;
    a.Mc = k;
    a.Va && (Uc.clearTimeout(a.Va), a.Va = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(e) {
      S(a.a, "Problem encountered resetting onreadystatechange: " + e.message)
    }
  }
}
s.xe = function() {
  return!!this.i
};
s.ya = function() {
  return this.i ? this.i.readyState : 0
};
function Th(a) {
  try {
    return 2 < a.ya() ? a.i.status : -1
  }catch(b) {
    return T(a.a, "Can not get status: " + b.message), -1
  }
}
s.getResponseHeader = function(a) {
  return this.i && 4 == this.ya() ? this.i.getResponseHeader(a) : i
};
function Oh(a, b) {
  return b + " [" + a.Be + " " + a.od + " " + Th(a) + "]"
}
;var Uh = !(J || K && !L("420+"));
function Vh(a, b) {
  this.Jc = a;
  this.$ = b
}
A(Vh, M);
s = Vh.prototype;
s.o = k;
s.Ga = -1;
s.le = m;
s.ue = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Wh(a) {
  var b = Zf(a.ce), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.$, c, b), 1 != b && a.b()) : a.b()
}
s.Pf = function() {
  Wh(this);
  if(!this.da) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.$);
    this.b()
  }
};
s.ag = function() {
  var a = t.parent;
  if(a) {
    this.Ga = this.o.ya();
    if(2 <= this.Ga && !this.le) {
      for(var b = new I, c = this.ue.length;c--;) {
        var d = this.ue[c];
        try {
          b.set(d, this.o.i.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.v() && (this.le = j, a.__XHRMaster_ongotheaders(this.$, Kb(b)), this.da)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.$, this.Ga);
    Uh && 3 == this.Ga && Wh(this)
  }else {
    this.b()
  }
};
s.rd = function(a, b, c) {
  this.o = new Mh;
  O(this.o, "readystatechange", y(this.ag, this));
  O(this.o, "complete", y(this.Pf, this));
  this.o.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.ce = new Yf(this.o.i, 1048576)
};
s.c = function() {
  Vh.e.c.call(this);
  delete this.ce;
  this.o && this.o.b();
  delete this.Jc.Yb[this.$];
  delete this.Jc
};
function Xh() {
  this.Yb = {}
}
A(Xh, M);
Xh.prototype.Tf = function(a, b, c, d) {
  var e = new Vh(this, a);
  this.Yb[a] = e;
  e.rd(b, c, d)
};
Xh.prototype.zf = function(a) {
  (a = this.Yb[a]) && a.b()
};
Xh.prototype.c = function() {
  Xh.e.c.call(this);
  for(var a = Ra(this.Yb);a.length;) {
    a.pop().b()
  }
  delete this.Yb
};
var Yh = new Xh;
t.__XHRSlave_makeRequest = y(Yh.Tf, Yh);
t.__XHRSlave_dispose = y(Yh.zf, Yh);
var Zh = W("cw.net.demo");
function $h() {
}
$h.prototype.ke = function() {
  return Boolean(Number((new Y(document.location)).L.get("httpStreaming", "0"))) ? 2 : 1
};
var ai = W("ljstream.logger");
window.onerror = function(a, b, c) {
  S(ai, "window.onerror: message: " + H(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function ci() {
  this.Re = new tb
}
ci.prototype.lg = function(a, b) {
  ai.info("streamReset: reasonString=" + H(a) + ", applicationLevel=" + b);
  di("Disconnected from server.  Try reloading this page.");
  ei = k
};
function fi(a) {
  ai.info("Sending preferences to server");
  var b;
  b = new Ig;
  b.n[1] = P("include_russian_posts").checked;
  b.La && (b.La[1] = j);
  b = a.Re.Wb(b);
  sg(a.D, [(new wb(i)).Wb([2, b])])
}
ci.prototype.mg = function(a) {
  var a = vb(a), b = a[1];
  if(1 == a[0]) {
    var c = this.Re.Zc(Hg.Hb(), b), a = mb(c, 1), b = mb(c, 2), c = mb(c, 3);
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
    a = zd("span", {}, zd("a", {href:b, "class":"ljpost-title-link"}, a), zd("span", {}, "\u00a0"), c);
    gi(a)
  }
};
ci.prototype.reset = function(a) {
  ai.info("resetting with reason: " + a);
  this.D.reset(a)
};
var ei = k, hi = new hd(t.window);
function di(a) {
  a = zd("span", {"class":"important-message"}, a);
  gi(a)
}
function ii() {
  ei && (ei.reset("idle timeout fired"), ei = k, di("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var ji = k;
function ki() {
  ji != k && hi.I.clearTimeout(ji);
  ei && (ji = hi.I.setTimeout(ii, 6E5))
}
O(window, ["click", "focus", "keydown", "keypress"], ki, j);
var yd = new td, li = 0;
function gi(a) {
  a = zd("div", {"class":"row-" + (0 == li % 2 ? "even" : "odd")}, zd("nobr", {}, a));
  P("ljstream-container-inner").appendChild(a);
  li += 1;
  var b;
  if(b = Gg) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !K && "CSS1Compat" == d.compatMode ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new rd(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = xd().height;
    b = !(a + b <= c + d)
  }
  b && (a = xd().height, window.scrollBy(0, Math.round(a / 2) + 80))
}
function mi() {
  O(t, "load", function() {
    window.scrollTo(0, 0)
  });
  O(P("include_russian_posts"), "click", function() {
    fi(ei)
  });
  Gg = j;
  O(P("automatic_scroll"), "click", function(a) {
    Gg = a.target.checked
  });
  var a = new Fh("Clear posts");
  uh(a, "clear-posts-button");
  Zd(a, P("prefs"));
  O(a, "action", function() {
    P("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = P("ljstream-container");
  a.style.marginTop = P("demo-header").offsetHeight + "px";
  P("demo-header").style.width = "9000px";
  var b = zd("div", {id:"ljstream-container-inner"});
  a.appendChild(b)
}
function ni() {
  ze().rb(re);
  if("1" == (new Y(document.location)).L.get("logging")) {
    var a = new Zg("main");
    a.Ec(j);
    a.Pa()
  }
  ai.info("Logger works.");
  mi();
  a = new $h;
  ei = new ci;
  ki();
  var b = (new Y(document.location)).L, c = "http" != b.get("mode");
  if((b = Boolean(Number(b.get("useSubdomains", "0")))) && !t.__demo_shared_domain) {
    T(Zh, "You requested subdomains, but I cannot use them because you did not specify a domain.  Proceeding without subdomains."), b = m
  }
  var d = b, b = new Y(document.location);
  c ? c = new fg("/_minerva/", b.X, t.__demo_mainSocketPort) : (d ? (c = t.__demo_shared_domain, v(c) || f(Error("domain was " + H(c) + "; expected a string.")), b = b.H(), vf(b, "_____random_____." + c)) : b = b.H(), xf(b, "/_minerva/"), yf(b, "", i), c = new hg(b.toString().replace("_____random_____", "%random%")));
  a = new mg(c, a, hi);
  c = ei;
  a.zd = y(c.mg, c);
  a.onreset = y(c.lg, c);
  ei.D = a;
  c = ei;
  sg(c.D, ["subprotocol:ljstream"]);
  fi(c);
  a.start()
}
var oi = "__ljstream_init".split("."), pi = t;
!(oi[0] in pi) && pi.execScript && pi.execScript("var " + oi[0]);
for(var qi;oi.length && (qi = oi.shift());) {
  !oi.length && ga(ni) ? pi[qi] = ni : pi = pi[qi] ? pi[qi] : pi[qi] = {}
}
;})();
