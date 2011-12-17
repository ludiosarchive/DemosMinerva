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
    return a.Qf || (a.Qf = new a)
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
}, Ve:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
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
        b.Ve && (e = e.replace(b.Ve, function(a) {
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
    var l = d[h] || "", n = e[h] || "", p = RegExp("(\\d*)(\\D*)", "g"), F = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = p.exec(l) || ["", "", ""], w = F.exec(n) || ["", "", ""];
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
  this.ib = !!c.wh;
  this.Gb = c.bb;
  this.Ke = c.type;
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
  this.Ie = a;
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
  new a.Ie;
  f(Error("Unimplemented"))
};
rb.prototype.lc = function(a, b) {
  if(Pa(a)) {
    return this.Zc(a.Ke.ab, b)
  }
  if(!a.fe) {
    return b
  }
  var c = a.Ke;
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
  var c = new a.Ie;
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
          if(ub(a.nf)) {
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
  G(this.Ua, a, b);
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
  x(a) ? this.ze = j : a && a.handleEvent && x(a.handleEvent) ? this.ze = m : f(Error("Invalid listener argument"));
  this.lb = a;
  this.Ue = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.rc = g;
  this.Sc = m;
  this.key = ++sc;
  this.Ta = m
};
s.handleEvent = function(a) {
  return this.ze ? this.lb.call(this.rc || this.src, a) : this.lb.handleEvent.call(this.lb, a)
};
var tc = !J || qc(), uc = !J || qc(), vc = J && !L("8");
!K || L("528");
dc && L("1.9b") || J && L("8") || cc && L("9.5") || K && L("528");
!dc || L("8");
var wc = {Ag:"click", Fg:"dblclick", Zg:"mousedown", dh:"mouseup", bh:"mouseover", ah:"mouseout", $g:"mousemove", nh:"selectstart", Ug:"keypress", Tg:"keydown", Vg:"keyup", yg:"blur", Ng:"focus", Gg:"deactivate", Og:J ? "focusin" : "DOMFocusIn", Pg:J ? "focusout" : "DOMFocusOut", zg:"change", mh:"select", oh:"submit", Sg:"input", ih:"propertychange", Kg:"dragstart", Hg:"dragenter", Jg:"dragover", Ig:"dragleave", Lg:"drop", sh:"touchstart", rh:"touchmove", qh:"touchend", ph:"touchcancel", Cg:"contextmenu", 
Mg:"error", Rg:"help", Wg:"load", Xg:"losecapture", jh:"readystatechange", kh:"resize", lh:"scroll", uh:"unload", Qg:"hashchange", eh:"pagehide", fh:"pageshow", hh:"popstate", Dg:"copy", gh:"paste", Eg:"cut", vg:"beforecopy", wg:"beforecut", xg:"beforepaste", Yg:"message", Bg:"connect", th:K ? "webkitTransitionEnd" : cc ? "oTransitionEnd" : "transitionend"};
function M() {
}
M.prototype.da = m;
M.prototype.b = function() {
  this.da || (this.da = j, this.c())
};
M.prototype.c = function() {
  this.wf && xc.apply(k, this.wf)
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
  var c = b.src, d = b.type, e = b.Ue, g = b.capture;
  c.removeEventListener ? (c == t || !c.be) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in Gc ? Gc[d] : Gc[d] = "on" + d, e);
  c = ka(c);
  e = N[d][g][c];
  if(Fc[c]) {
    var h = Fc[c];
    ab(h, b);
    0 == h.length && delete Fc[c]
  }
  b.Ta = j;
  e.Me = j;
  Oc(d, g, c, e);
  delete Ec[a];
  return j
}
function Oc(a, b, c, d) {
  if(!d.wc && d.Me) {
    for(var e = 0, g = 0;e < d.length;e++) {
      d[e].Ta ? d[e].Ue.src = k : (e != g && (d[g] = d[e]), g++)
    }
    d.length = g;
    d.Me = m;
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
          }catch(F) {
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
s.sf = m;
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
function bd(a, b, c, d) {
  a.dc.push([b, c, d]);
  a.wa && Yc(a)
}
function cd(a, b) {
  bd(a, b, b, i)
}
function dd(a) {
  return Ya(a.dc, function(a) {
    return x(a[1])
  })
}
function Yc(a) {
  a.Qd && a.wa && dd(a) && (t.clearTimeout(a.Qd), delete a.Qd);
  a.w && (a.w.Rc--, delete a.w);
  for(var b = a.Sb, c = m, d = m;a.dc.length && 0 == a.Ob;) {
    var e = a.dc.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.Ib ? h : g) {
      try {
        var l = g.call(e || a.de, b);
        ga(l) && (a.Ib = a.Ib && (l == b || l instanceof Error), a.Sb = b = l);
        b instanceof Vc && (d = j, a.Ob++)
      }catch(n) {
        b = n, a.Ib = j, dd(a) || (c = j)
      }
    }
  }
  a.Sb = b;
  d && a.Ob && (bd(b, y(a.$d, a, j), y(a.$d, a, m)), b.sf = j);
  c && (a.Qd = t.setTimeout(function() {
    ga(b.message) && b.stack && (b.message += "\n" + b.stack);
    f(b)
  }, 0))
}
function ed(a) {
  var b = new Vc;
  b.ca(a);
  return b
}
function fd(a) {
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
function gd(a) {
  this.I = a;
  this.gc = [];
  this.ge = [];
  this.rf = y(this.pg, this)
}
gd.prototype.Nd = k;
function hd(a, b, c, d) {
  a.gc.push([b, c, d]);
  a.Nd == k && (a.Nd = a.I.setTimeout(a.rf, 0))
}
gd.prototype.pg = function() {
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
    a = this.ge;
    this.ge = [];
    for(b = 0;b < a.length;b++) {
      a[b].ca(k)
    }
  }
};
var id = new gd(t.window);
var jd;
function kd(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function ld(a, b) {
  var c = kd(a), d = fb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    $a(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function md(a, b) {
  var c = kd(a), d = fb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < e.length;h++) {
    $a(d, e[h]) && (eb(e, h--, 1), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
;function nd(a, b) {
  this.width = a;
  this.height = b
}
s = nd.prototype;
s.H = function() {
  return new nd(this.width, this.height)
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
var od = !J || qc();
!dc && !J || J && qc() || dc && L("1.9.1");
var pd = J && !L("9");
function qd(a, b) {
  this.x = ga(a) ? a : 0;
  this.y = ga(b) ? b : 0
}
qd.prototype.H = function() {
  return new qd(this.x, this.y)
};
qd.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function rd(a) {
  return a ? new sd(td(a)) : jd || (jd = new sd)
}
function P(a) {
  return v(a) ? document.getElementById(a) : a
}
function ud(a, b) {
  Qa(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in vd ? a.setAttribute(vd[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var vd = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function wd() {
  var a = xd.O.parentWindow || xd.O.defaultView || window, b = a.document;
  if(K && !L("500") && !ec) {
    "undefined" == typeof a.innerHeight && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new nd(a.innerWidth, b)
  }
  a = "CSS1Compat" == b.compatMode ? b.documentElement : b.body;
  return new nd(a.clientWidth, a.clientHeight)
}
function yd(a, b, c) {
  return zd(document, arguments)
}
function zd(a, b) {
  var c = b[0], d = b[1];
  if(!od && d && (d.name || d.type)) {
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
  d && (v(d) ? c.className = d : u(d) ? ld.apply(k, [c].concat(d)) : ud(c, d));
  2 < b.length && Ad(a, c, b, 2);
  return c
}
function Ad(a, b, c, d) {
  function e(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && 0 < g.nodeType) ? Wa(Bd(g) ? cb(g) : g, e) : e(g)
  }
}
function Cd(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Dd(a, b) {
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
function td(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
var Ed = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Fd = {IMG:" ", BR:"\n"};
function Gd(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, "number" == typeof a && 0 <= a && 32768 > a) : m
}
function Hd(a) {
  var b = [];
  Id(a, b, m);
  return b.join("")
}
function Id(a, b, c) {
  if(!(a.nodeName in Ed)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Fd) {
        b.push(Fd[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Id(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Bd(a) {
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
function sd(a) {
  this.O = a || t.document || document
}
s = sd.prototype;
s.cb = rd;
s.g = function(a) {
  return v(a) ? this.O.getElementById(a) : a
};
s.r = function(a, b, c) {
  return zd(this.O, arguments)
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
  Ad(td(a), a, arguments, 1)
};
s.contains = Dd;
function Jd(a, b) {
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
        a.push('<property id="', d, '">'), Jd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', D(c), '">'), Jd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function Kd(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, e = arguments;
  d.push("<arguments>");
  for(var g = e.length, h = 1;h < g;h++) {
    Jd(d, e[h])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;var Ld;
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
  Ld = c
})();
function Md(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
var Nd = dc ? "MozUserSelect" : K ? "WebkitUserSelect" : k;
function Od(a) {
  this.se = a;
  this.j = []
}
A(Od, M);
var Pd = [];
function Q(a, b, c, d) {
  u(c) || (Pd[0] = c, c = Pd);
  for(var e = 0;e < c.length;e++) {
    a.j.push(O(b, c[e], d || a, m, a.se || a))
  }
  return a
}
function Qd(a, b, c, d, e, g) {
  if(u(c)) {
    for(var h = 0;h < c.length;h++) {
      Qd(a, b, c[h], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.se || a;
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
Od.prototype.Cd = function() {
  Wa(this.j, Nc);
  this.j.length = 0
};
Od.prototype.c = function() {
  Od.e.c.call(this);
  this.Cd()
};
Od.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Rd() {
}
ea(Rd);
Rd.prototype.Vf = 0;
Rd.eb();
function Sd(a) {
  this.ta = a || rd();
  this.Ub = Td
}
A(Sd, Tc);
Sd.prototype.Pf = Rd.eb();
var Td = k;
function Ud(a, b) {
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
s = Sd.prototype;
s.ga = k;
s.J = m;
s.m = k;
s.Ub = k;
s.w = k;
s.sa = k;
s.Ab = k;
s.qg = m;
function Vd(a) {
  return a.ga || (a.ga = ":" + (a.Pf.Vf++).toString(36))
}
s.g = o("m");
function Xd(a) {
  return a.fb || (a.fb = new Od(a))
}
s.getParent = o("w");
s.Fd = function(a) {
  this.w && this.w != a && f(Error("Method not supported"));
  Sd.e.Fd.call(this, a)
};
s.cb = o("ta");
s.r = function() {
  this.m = this.ta.createElement("div")
};
function Yd(a, b) {
  a.J && f(Error("Component already rendered"));
  a.m || a.r();
  b ? b.insertBefore(a.m, k) : a.ta.O.body.appendChild(a.m);
  (!a.w || a.w.J) && a.ua()
}
s.ua = function() {
  this.J = j;
  Zd(this, function(a) {
    !a.J && a.g() && a.ua()
  })
};
s.Fb = function() {
  Zd(this, function(a) {
    a.J && a.Fb()
  });
  this.fb && this.fb.Cd();
  this.J = m
};
s.c = function() {
  Sd.e.c.call(this);
  this.J && this.Fb();
  this.fb && (this.fb.b(), delete this.fb);
  Zd(this, function(a) {
    a.b()
  });
  !this.qg && this.m && Cd(this.m);
  this.w = this.m = this.Ab = this.sa = k
};
s.sb = function(a) {
  this.J && f(Error("Component already rendered"));
  this.Ub = a
};
function Zd(a, b) {
  a.sa && Wa(a.sa, b, i)
}
s.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : Vd(a), a = this.Ab && c ? (c in this.Ab ? this.Ab[c] : i) || k : k;
    if(c && a) {
      var d = this.Ab;
      c in d && delete d[c];
      ab(this.sa, a);
      b && (a.Fb(), a.m && Cd(a.m));
      c = a;
      c == k && f(Error("Unable to set parent component"));
      c.w = k;
      Sd.e.Fd.call(c, k)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function $d(a) {
  this.s = new I;
  a && this.Oc(a)
}
function ae(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ka(a) : b.substr(0, 1) + a
}
s = $d.prototype;
s.v = function() {
  return this.s.v()
};
s.add = function(a) {
  this.s.set(ae(a), a)
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
  return this.s.remove(ae(a))
};
s.clear = function() {
  this.s.clear()
};
s.Qa = function() {
  return this.s.Qa()
};
s.contains = function(a) {
  return this.s.W(ae(a))
};
s.K = function() {
  return this.s.K()
};
s.H = function() {
  return new $d(this)
};
s.k = function(a) {
  return this.v() == Cb(a) && be(this, a)
};
function be(a, b) {
  var c = Cb(b);
  if(a.v() > c) {
    return m
  }
  !(b instanceof $d) && 5 < c && (b = new $d(b));
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
;function ce(a) {
  return de(a || arguments.callee.caller, [])
}
function de(a, b) {
  var c = [];
  if($a(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(ee(a) + "(");
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
            g = (g = ee(g)) ? g : "[fn]";
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
        c.push(de(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function ee(a) {
  if(fe[a]) {
    return fe[a]
  }
  a = "" + a;
  if(!fe[a]) {
    var b = /function ([^\(]+)/.exec(a);
    fe[a] = b ? b[1] : "[Anonymous]"
  }
  return fe[a]
}
var fe = {};
function ge(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
ge.prototype.cd = k;
ge.prototype.bd = k;
var he = 0;
ge.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || he++;
  this.ef = d || z();
  this.Z = a;
  this.Je = b;
  this.Ee = c;
  delete this.cd;
  delete this.bd
};
ge.prototype.rb = aa("Z");
function ie(a) {
  this.ud = a
}
ie.prototype.w = k;
ie.prototype.Z = k;
ie.prototype.sa = k;
ie.prototype.Kb = k;
function R(a, b) {
  this.name = a;
  this.value = b
}
R.prototype.toString = o("name");
var je = new R("SHOUT", 1200), ke = new R("SEVERE", 1E3), le = new R("WARNING", 900), me = new R("INFO", 800), ne = new R("CONFIG", 700), oe = new R("FINE", 500), pe = new R("FINEST", 300), qe = new R("ALL", 0), re = [new R("OFF", Infinity), je, ke, le, me, ne, oe, new R("FINER", 400), pe, qe], se = k;
function te(a) {
  if(!se) {
    se = {};
    for(var b = 0, c;c = re[b];b++) {
      se[c.value] = c, se[c.name] = c
    }
  }
  return se[a] || k
}
s = ie.prototype;
s.getParent = o("w");
s.rb = aa("Z");
function ue(a) {
  if(a.Z) {
    return a.Z
  }
  if(a.w) {
    return ue(a.w)
  }
  Ia("Root logger has no level set.");
  return k
}
s.log = function(a, b, c) {
  if(a.value >= ue(this).value) {
    a = this.Jf(a, b, c);
    b = "log:" + a.Je;
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
s.Jf = function(a, b, c) {
  var d = new ge(a, "" + b, this.ud);
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
        var n, p, F = m;
        try {
          n = c.lineNumber || c.vh || "Not available"
        }catch(r) {
          n = "Not available", F = j
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || l
        }catch(w) {
          p = "Not available", F = j
        }
        h = F || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:p, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + D(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + D(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + D(ce(g) + "-> ")
    }catch(B) {
      e = "Exception trying to expose exception! You win, we lose. " + B
    }
    d.bd = e
  }
  return d
};
function S(a, b) {
  a.log(ke, b, i)
}
function T(a, b) {
  a.log(le, b, i)
}
s.info = function(a, b) {
  this.log(me, a, b)
};
function U(a, b) {
  a.log(oe, b, i)
}
function V(a, b) {
  a.log(pe, b, i)
}
var ve = {}, we = k;
function xe() {
  we || (we = new ie(""), ve[""] = we, we.rb(ne))
}
function ye() {
  xe();
  return we
}
function W(a) {
  xe();
  var b;
  if(!(b = ve[a])) {
    b = new ie(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = W(a.substr(0, c));
    c.sa || (c.sa = {});
    c.sa[d] = b;
    b.w = c;
    ve[a] = b
  }
  return b
}
;function ze(a, b) {
  Sd.call(this, b);
  this.Ff = a;
  this.ad = new Od(this);
  this.ic = new I
}
A(ze, Sd);
s = ze.prototype;
s.a = W("goog.ui.media.FlashObject");
s.sg = "window";
s.Vd = "#000000";
s.pf = "sameDomain";
function Ae(a, b, c) {
  a.Sd = v(b) ? b : Math.round(b) + "px";
  a.gd = v(c) ? c : Math.round(c) + "px";
  a.g() && (b = a.g() ? a.g().firstChild : k, c = a.Sd, a = a.gd, c instanceof nd ? (a = c.height, c = c.width) : a == i && f(Error("missing height argument")), b.style.width = Md(c), b.style.height = Md(a))
}
s.ua = function() {
  ze.e.ua.call(this);
  var a = this.g(), b;
  b = J ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = J ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = va(c, this.sg), d = this.ic.fa(), e = this.ic.K(), g = [], h = 0;h < d.length;h++) {
    var l = ya(d[h]), n = ya(e[h]);
    g.push(l + "=" + n)
  }
  b = va(b, Vd(this), Vd(this), "goog-ui-media-flash-object", D(this.Ff), D(g.join("&")), this.Vd, this.pf, c);
  a.innerHTML = b;
  this.Sd && this.gd && Ae(this, this.Sd, this.gd);
  Q(this.ad, this.g(), Ra(wc), zc)
};
s.r = function() {
  this.Ye != k && !(0 <= Ga(Ld, this.Ye)) && (T(this.a, "Required flash version not found:" + this.Ye), f(Error("Method not supported")));
  var a = this.cb().createElement("div");
  a.className = "goog-ui-media-flash";
  this.m = a
};
s.c = function() {
  ze.e.c.call(this);
  this.ic = k;
  this.ad.b();
  this.ad = k
};
function Be() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ z()).toString(36)
}
function Ce(a) {
  return a.substr(0, a.length - 1)
}
var De = /^(0|[1-9]\d*)$/, Ee = /^(0|\-?[1-9]\d*)$/;
function Fe(a) {
  var b = Ge;
  return De.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function He(a) {
  C.call(this, a)
}
A(He, C);
He.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function Ie(a, b, c) {
  function d() {
    e && delete t.__loadFlashObject_callbacks[e]
  }
  var e;
  if(dc && !L("1.8.1.20")) {
    return fd(new He("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Ga(Ld, "9"))) {
    return b = Ld, fd(new He("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  e = "_" + Be();
  var h = new Vc(d);
  t.__loadFlashObject_callbacks[e] = function() {
    a.setTimeout(function() {
      d();
      h.ca(P(g))
    }, 0)
  };
  b.ic.set("onloadcallback", '__loadFlashObject_callbacks["' + e + '"]()');
  g = Vd(b);
  Yd(b, c);
  return h
}
function Je(a, b, c) {
  var d = Ie(a, b, c), e = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  cd(d, function(b) {
    a.clearTimeout(e);
    return b
  });
  return d
}
;function Ke(a, b) {
  this.ga = "_" + Be();
  this.Jc = a;
  this.Ea = b;
  this.Ia = a.Ia
}
A(Ke, M);
s = Ke.prototype;
s.mb = j;
s.Wc = m;
s.a = W("cw.net.FlashSocket");
s.p = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.ga);
  a.push("'>")
};
function Le(a, b, c) {
  "frames" == b ? (a = a.Ea, Me(a.G), Ne(a.G, c)) : "stillreceiving" == b ? (c = a.Ea, V(c.a, "onstillreceiving"), Me(c.G)) : "connect" == b ? (c = a.Ea, c.a.info("onconnect"), Me(c.G), a = c.yb, c.yb = k, a.length && (V(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.Gc.bc(a))) : "close" == b ? (a.mb = m, a.b()) : "ioerror" == b ? (a.mb = m, b = a.Ea, T(b.a, "onioerror: " + H(c)), Oe(b.G, m), a.b()) : "securityerror" == b ? (a.mb = m, b = a.Ea, T(b.a, "onsecurityerror: " + H(c)), 
  Oe(b.G, m), a.b()) : f(Error("bad event: " + b))
}
function Pe(a) {
  a.Wc = j;
  a.mb = m;
  a.b()
}
s.Uc = function(a, b) {
  try {
    var c = this.Ia.CallFunction(Kd("__FC_connect", this.ga, a, b, "<int32/>\n"))
  }catch(d) {
    return S(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), Pe(this)
  }
  '"OK"' != c && f(Error("__FC_connect failed? ret: " + c))
};
s.bc = function(a) {
  try {
    var b = this.Ia.CallFunction(Kd("__FC_writeFrames", this.ga, a))
  }catch(c) {
    return S(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), Pe(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (T(this.a, "Flash no longer knows of " + this.ga + "; disposing."), this.b()) : f(Error("__FC_writeFrames failed? ret: " + b)))
};
s.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.mb);
  Ke.e.c.call(this);
  var a = this.Ia;
  delete this.Ia;
  if(this.mb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(Kd("__FC_close", this.ga)))
    }catch(b) {
      S(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Wc = j
    }
  }
  if(this.Wc) {
    a = this.Ea, T(a.a, "oncrash"), Oe(a.G, j)
  }else {
    this.Ea.onclose()
  }
  delete this.Ea;
  delete this.Jc.gb[this.ga]
};
function Qe(a, b) {
  this.C = a;
  this.Ia = b;
  this.gb = {};
  this.Tc = "__FST_" + Be();
  t[this.Tc] = y(this.zf, this);
  var c = b.CallFunction(Kd("__FC_setCallbackFunc", this.Tc));
  '"OK"' != c && f(Error("__FC_setCallbackFunc failed? ret: " + c))
}
A(Qe, M);
s = Qe.prototype;
s.a = W("cw.net.FlashSocketTracker");
s.p = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  G(this.gb, a, b);
  a.push(">")
};
s.Xc = function(a) {
  a = new Ke(this, a);
  return this.gb[a.ga] = a
};
s.xf = function(a, b, c, d) {
  var e = this.gb[a];
  e ? "frames" == b && d ? (Le(e, "ioerror", "FlashConnector hadError while handling data."), e.b()) : Le(e, b, c) : T(this.a, "Cannot dispatch because we have no instance: " + H([a, b, c, d]))
};
s.zf = function(a, b, c, d) {
  try {
    hd(this.C, this.xf, this, [a, b, c, d])
  }catch(e) {
    t.window.setTimeout(function() {
      f(e)
    }, 0)
  }
};
s.c = function() {
  Qe.e.c.call(this);
  for(var a = Ra(this.gb);a.length;) {
    a.pop().b()
  }
  delete this.gb;
  delete this.Ia;
  t[this.Tc] = i
};
function Re(a) {
  this.G = a;
  this.yb = []
}
A(Re, M);
s = Re.prototype;
s.a = W("cw.net.FlashSocketConduit");
s.bc = function(a) {
  this.yb ? (V(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.yb.push.apply(this.yb, a)) : (V(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.Gc.bc(a))
};
s.Uc = function(a, b) {
  this.Gc.Uc(a, b)
};
s.onclose = function() {
  this.a.info("onclose");
  Oe(this.G, m)
};
s.c = function() {
  this.a.info("in disposeInternal.");
  Re.e.c.call(this);
  this.Gc.b();
  delete this.G
};
var Se = [];
function Te() {
  var a = new Vc;
  Se.push(a);
  return a
}
function Ue(a) {
  var b = Se;
  Se = [];
  Wa(b, function(b) {
    b.ca(a)
  })
}
function Ve(a, b) {
  if(Se.length) {
    return Te()
  }
  var c = new ze(b + "FlashConnector.swf?cb=" + We);
  c.Vd = "#777777";
  Ae(c, 300, 30);
  var d = P("minerva-elements");
  d || f(Error('loadFlashConnector_: Page is missing an empty div with id "minerva-elements"; please add one.'));
  var e = P("minerva-elements-FlashConnectorSwf");
  e || (e = yd("div", {id:"minerva-elements-FlashConnectorSwf"}), d.appendChild(e));
  Mb = Je(a.I, c, e);
  ad(Mb, Ue);
  return Te()
}
;function Xe() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;var Ge = Math.pow(2, 53);
var Ye = {nf:q("<cw.eq.Wildcard>")};
function Ze(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function $e(a, b, c) {
  var d = fa(a), e = fa(b);
  if(a == Ye || b == Ye) {
    return j
  }
  if(a != k && "function" == typeof a.k) {
    return c && c.push("running custom equals function on left object"), a.k(b, c)
  }
  if(b != k && "function" == typeof b.k) {
    return c && c.push("running custom equals function on right object"), b.k(a, c)
  }
  if(Ze(d) || Ze(e)) {
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
                if(!$e(a[d], b[d], c)) {
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
          if(a.mf == Ub && b.mf == Ub) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!$e(a[g], b[g], c)) {
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
function af() {
  var a = [];
  this.Y(a);
  return a.join("")
}
function bf() {
}
bf.prototype.k = function(a, b) {
  return!(a instanceof bf) ? m : $e(cf(this), cf(a), b)
};
bf.prototype.p = function(a, b) {
  a.push("<HelloFrame properties=");
  G(cf(this), a, b);
  a.push(">")
};
function cf(a) {
  return[a.ub, a.Te, a.ue, a.Xe, a.Zb, a.Ld, a.Le, a.He, a.sd, a.Fe, a.hf, a.df, a.aa, a.vc]
}
bf.prototype.S = af;
bf.prototype.Y = function(a) {
  var b = {};
  b.tnum = this.ub;
  b.ver = this.Te;
  b.format = this.ue;
  b["new"] = this.Xe;
  b.id = this.Zb;
  b.ming = this.Ld;
  b.pad = this.Le;
  b.maxb = this.He;
  ga(this.sd) && (b.maxt = this.sd);
  b.maxia = this.Fe;
  b.tcpack = this.hf;
  b.eeds = this.df;
  b.sack = this.aa instanceof Ob ? Ce((new df(this.aa)).S()) : this.aa;
  b.seenack = this.vc instanceof Ob ? Ce((new df(this.vc)).S()) : this.vc;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new wb(i)).Wb(b), "H")
};
function ef(a) {
  this.tb = a
}
ef.prototype.k = function(a) {
  return a instanceof ef && this.tb == a.tb
};
ef.prototype.p = function(a, b) {
  a.push("new StringFrame(");
  G(this.tb, a, b);
  a.push(")")
};
ef.prototype.S = af;
ef.prototype.Y = function(a) {
  a.push(this.tb, " ")
};
function ff(a) {
  this.ec = a
}
ff.prototype.k = function(a) {
  return a instanceof ff && this.ec == a.ec
};
ff.prototype.p = function(a, b) {
  a.push("new CommentFrame(");
  G(this.ec, a, b);
  a.push(")")
};
ff.prototype.S = af;
ff.prototype.Y = function(a) {
  a.push(this.ec, "^")
};
function gf(a) {
  this.Vb = a
}
gf.prototype.k = function(a) {
  return a instanceof gf && this.Vb == a.Vb
};
gf.prototype.p = function(a) {
  a.push("new SeqNumFrame(", "" + this.Vb, ")")
};
gf.prototype.S = af;
gf.prototype.Y = function(a) {
  a.push("" + this.Vb, "N")
};
function hf(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = Ge;
    if(Ee.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var g = Fe(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Ob(a, c)
}
function df(a) {
  this.aa = a
}
df.prototype.k = function(a, b) {
  return a instanceof df && this.aa.k(a.aa, b)
};
df.prototype.p = function(a, b) {
  a.push("new SackFrame(");
  G(this.aa, a, b);
  a.push(")")
};
df.prototype.S = af;
df.prototype.Y = function(a) {
  var b = this.aa;
  a.push(b.Ua.join(","), "|", "" + b.Ya);
  a.push("A")
};
function jf(a) {
  this.Mb = a
}
jf.prototype.k = function(a, b) {
  return a instanceof jf && this.Mb.k(a.Mb, b)
};
jf.prototype.p = function(a, b) {
  a.push("new StreamStatusFrame(");
  G(this.Mb, a, b);
  a.push(")")
};
jf.prototype.S = af;
jf.prototype.Y = function(a) {
  var b = this.Mb;
  a.push(b.Ua.join(","), "|", "" + b.Ya);
  a.push("T")
};
function kf() {
}
kf.prototype.p = function(a) {
  a.push("new StreamCreatedFrame()")
};
kf.prototype.k = function(a) {
  return a instanceof kf
};
kf.prototype.S = af;
kf.prototype.Y = function(a) {
  a.push("C")
};
function lf() {
}
lf.prototype.p = function(a) {
  a.push("new YouCloseItFrame()")
};
lf.prototype.k = function(a) {
  return a instanceof lf
};
lf.prototype.S = af;
lf.prototype.Y = function(a) {
  a.push("Y")
};
function mf(a, b) {
  this.Qb = a;
  this.xb = b
}
mf.prototype.k = function(a) {
  return a instanceof mf && this.Qb == a.Qb && this.xb == a.xb
};
mf.prototype.p = function(a, b) {
  a.push("new ResetFrame(");
  G(this.Qb, a, b);
  a.push(", ", "" + this.xb, ")")
};
mf.prototype.S = af;
mf.prototype.Y = function(a) {
  a.push(this.Qb, "|", "" + Number(this.xb), "!")
};
var nf = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function of(a) {
  this.reason = a
}
of.prototype.k = function(a) {
  return a instanceof of && this.reason == a.reason
};
of.prototype.p = function(a, b) {
  a.push("new TransportKillFrame(");
  G(this.reason, a, b);
  a.push(")")
};
of.prototype.S = af;
of.prototype.Y = function(a) {
  a.push(this.reason, "K")
};
function pf(a) {
  a || f(new X("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new ef(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = hf(Ce(a)), a == k && f(new X("bad sack")), new df(a)
  }
  if("N" == b) {
    return a = Fe(Ce(a)), a == k && f(new X("bad seqNum")), new gf(a)
  }
  if("T" == b) {
    return a = hf(Ce(a)), a == k && f(new X("bad lastSackSeen")), new jf(a)
  }
  if("Y" == b) {
    return 1 != a.length && f(new X("leading garbage")), new lf
  }
  if("^" == b) {
    return new ff(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && f(new X("leading garbage")), new kf
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && f(new X("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && f(new X("bad applicationLevel")), new mf(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = nf[a], a == k && f(new X("unknown kill reason: " + a)), new of(a)
  }
  f(new X("Invalid frame type " + b))
}
;var qf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function rf(a, b) {
  var c = a.match(qf), d = b.match(qf);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function Y(a, b) {
  var c;
  a instanceof Y ? (this.qb(b == k ? a.ha : b), sf(this, a.ja), tf(this, a.Wa), uf(this, a.X), vf(this, a.Da), wf(this, a.U), xf(this, a.L.H()), yf(this, a.Ma)) : a && (c = ("" + a).match(qf)) ? (this.qb(!!b), sf(this, c[1] || "", j), tf(this, c[2] || "", j), uf(this, c[3] || "", j), vf(this, c[4]), wf(this, c[5] || "", j), xf(this, c[6] || "", j), yf(this, c[7] || "", j)) : (this.qb(!!b), this.L = new zf(k, this, this.ha))
}
s = Y.prototype;
s.ja = "";
s.Wa = "";
s.X = "";
s.Da = k;
s.U = "";
s.Ma = "";
s.Rf = m;
s.ha = m;
s.toString = function() {
  if(this.ba) {
    return this.ba
  }
  var a = [];
  this.ja && a.push(Af(this.ja, Bf), ":");
  this.X && (a.push("//"), this.Wa && a.push(Af(this.Wa, Bf), "@"), a.push(v(this.X) ? encodeURIComponent(this.X) : k), this.Da != k && a.push(":", "" + this.Da));
  this.U && (this.X && "/" != this.U.charAt(0) && a.push("/"), a.push(Af(this.U, "/" == this.U.charAt(0) ? Cf : Df)));
  var b = "" + this.L;
  b && a.push("?", b);
  this.Ma && a.push("#", Af(this.Ma, Ef));
  return this.ba = a.join("")
};
s.H = function() {
  var a = this.ja, b = this.Wa, c = this.X, d = this.Da, e = this.U, g = this.L.H(), h = this.Ma, l = new Y(k, this.ha);
  a && sf(l, a);
  b && tf(l, b);
  c && uf(l, c);
  d && vf(l, d);
  e && wf(l, e);
  g && xf(l, g);
  h && yf(l, h);
  return l
};
function sf(a, b, c) {
  Ff(a);
  delete a.ba;
  a.ja = c ? b ? decodeURIComponent(b) : "" : b;
  a.ja && (a.ja = a.ja.replace(/:$/, ""))
}
function tf(a, b, c) {
  Ff(a);
  delete a.ba;
  a.Wa = c ? b ? decodeURIComponent(b) : "" : b
}
function uf(a, b, c) {
  Ff(a);
  delete a.ba;
  a.X = c ? b ? decodeURIComponent(b) : "" : b
}
function vf(a, b) {
  Ff(a);
  delete a.ba;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && f(Error("Bad port number " + b)), a.Da = b) : a.Da = k
}
function wf(a, b, c) {
  Ff(a);
  delete a.ba;
  a.U = c ? b ? decodeURIComponent(b) : "" : b
}
function xf(a, b, c) {
  Ff(a);
  delete a.ba;
  b instanceof zf ? (a.L = b, a.L.Rd = a, a.L.qb(a.ha)) : (c || (b = Af(b, Gf)), a.L = new zf(b, a, a.ha))
}
function yf(a, b, c) {
  Ff(a);
  delete a.ba;
  a.Ma = c ? b ? decodeURIComponent(b) : "" : b
}
function Ff(a) {
  a.Rf && f(Error("Tried to modify a read-only Uri"))
}
s.qb = function(a) {
  this.ha = a;
  this.L && this.L.qb(a);
  return this
};
function Hf(a) {
  return a instanceof Y ? a.H() : new Y(a, i)
}
var If = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Af(a, b) {
  var c = k;
  v(a) && (c = a, If.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, Jf)));
  return c
}
function Jf(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Bf = /[#\/\?@]/g, Df = /[\#\?:]/g, Cf = /[\#\?]/g, Gf = /[\#\?@]/g, Ef = /#/g;
function zf(a, b, c) {
  this.la = a || k;
  this.Rd = b || k;
  this.ha = !!c
}
function Kf(a) {
  if(!a.l && (a.l = new I, a.f = 0, a.la)) {
    for(var b = a.la.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, g = k;
      0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = Lf(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
s = zf.prototype;
s.l = k;
s.f = k;
s.v = function() {
  Kf(this);
  return this.f
};
s.add = function(a, b) {
  Kf(this);
  Mf(this);
  a = Lf(this, a);
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
  Kf(this);
  a = Lf(this, a);
  if(this.l.W(a)) {
    Mf(this);
    var b = this.l.get(a);
    u(b) ? this.f -= b.length : this.f--;
    return this.l.remove(a)
  }
  return m
};
s.clear = function() {
  Mf(this);
  this.l && this.l.clear();
  this.f = 0
};
s.Qa = function() {
  Kf(this);
  return 0 == this.f
};
s.W = function(a) {
  Kf(this);
  a = Lf(this, a);
  return this.l.W(a)
};
s.fc = function(a) {
  var b = this.K();
  return $a(b, a)
};
s.fa = function() {
  Kf(this);
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
  Kf(this);
  if(a) {
    if(a = Lf(this, a), this.W(a)) {
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
  Kf(this);
  Mf(this);
  a = Lf(this, a);
  if(this.W(a)) {
    var c = this.l.get(a);
    u(c) ? this.f -= c.length : this.f--
  }
  this.l.set(a, b);
  this.f++;
  return this
};
s.get = function(a, b) {
  Kf(this);
  a = Lf(this, a);
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
function Mf(a) {
  delete a.$a;
  delete a.la;
  a.Rd && delete a.Rd.ba
}
s.H = function() {
  var a = new zf;
  this.$a && (a.$a = this.$a);
  this.la && (a.la = this.la);
  this.l && (a.l = this.l.H());
  return a
};
function Lf(a, b) {
  var c = "" + b;
  a.ha && (c = c.toLowerCase());
  return c
}
s.qb = function(a) {
  a && !this.ha && (Kf(this), Mf(this), Fb(this.l, function(a, c) {
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
function Nf(a, b, c, d) {
  this.contentWindow = a;
  this.hc = b;
  this.Md = c;
  this.Hf = d
}
Nf.prototype.p = function(a, b) {
  a.push("<XDRFrame frameId=");
  G(this.Hf, a, b);
  a.push(", expandedUrl=");
  G(this.hc, a, b);
  a.push(", streams=");
  G(this.Md, a, b);
  a.push(">")
};
function Of() {
  this.frames = [];
  this.qd = new I
}
Of.prototype.a = W("cw.net.XDRTracker");
function Pf(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor(Xe()) + ("" + Math.floor(Xe()))
  })
}
function Qf(a, b) {
  for(var c = Rf, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = 0 == e.Md.length) {
      g = e.hc;
      var h = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + H(b) + " existing frame " + H(e)), ed(e)
    }
  }
  d = Be() + Be();
  e = Pf(a);
  g = t.location;
  g instanceof Y || (g = Hf(g));
  e instanceof Y || (e = Hf(e));
  var l = g;
  g = l.H();
  (h = !!e.ja) ? sf(g, e.ja) : h = !!e.Wa;
  h ? tf(g, e.Wa) : h = !!e.X;
  h ? uf(g, e.X) : h = e.Da != k;
  var n = e.U;
  if(h) {
    vf(g, e.Da)
  }else {
    if(h = !!e.U) {
      if("/" != n.charAt(0) && (l.X && !l.U ? n = "/" + n : (l = g.U.lastIndexOf("/"), -1 != l && (n = g.U.substr(0, l + 1) + n))), ".." == n || "." == n) {
        n = ""
      }else {
        if(!(-1 == n.indexOf("./") && -1 == n.indexOf("/."))) {
          for(var l = 0 == n.lastIndexOf("/", 0), n = n.split("/"), p = [], F = 0;F < n.length;) {
            var r = n[F++];
            "." == r ? l && F == n.length && p.push("") : ".." == r ? ((1 < p.length || 1 == p.length && "" != p[0]) && p.pop(), l && F == n.length && p.push("")) : (p.push(r), l = j)
          }
          n = p.join("/")
        }
      }
    }
  }
  h ? wf(g, n) : h = "" !== e.L.toString();
  h ? (l = e.L, l.$a || (l.$a = l.toString() ? decodeURIComponent(l.toString()) : ""), xf(g, l.$a, i)) : h = !!e.Ma;
  h && yf(g, e.Ma);
  e = g.toString();
  g = ("" + t.location).match(qf)[3] || k;
  h = e.match(qf)[3] || k;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + H(b)), c = ed(new Nf(t, e, [b], k))) : ((g = P("minerva-elements")) || f(Error('makeWindowForUrl_: Page is missing an empty div with id "minerva-elements"; please add one.')), h = new Vc, c.qd.set(d, [h, e, b]), c.a.info("Creating new XDRFrame " + H(d) + "for " + H(b)), c = yd("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + 
  d}), g.appendChild(c), c = h);
  return c
}
Of.prototype.ug = function(a) {
  var b = this.qd.get(a);
  b || f(Error("Unknown frameId " + H(a)));
  this.qd.remove(b);
  var c = b[0], a = new Nf(P("minerva-xdrframe-" + a).contentWindow || (P("minerva-xdrframe-" + a).contentDocument || P("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (P("minerva-xdrframe-" + a).contentDocument || P("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.ca(a)
};
var Rf = new Of;
t.__XHRTracker_xdrFrameLoaded = y(Rf.ug, Rf);
var Sf;
Sf = m;
var Tf = $b();
Tf && (-1 != Tf.indexOf("Firefox") || -1 != Tf.indexOf("Camino") || -1 != Tf.indexOf("iPhone") || -1 != Tf.indexOf("iPod") || -1 != Tf.indexOf("iPad") || -1 != Tf.indexOf("Android") || -1 != Tf.indexOf("Chrome") && (Sf = j));
var Uf = Sf;
var We = "4bdfc178fc0e508c0cd5efc3fdb09920";
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function Vf(a, b, c, d, e, g) {
  Vc.call(this, e, g);
  this.De = a;
  this.Yc = [];
  this.ie = !!b;
  this.Ef = !!c;
  this.vf = !!d;
  for(b = 0;b < a.length;b++) {
    bd(a[b], y(this.me, this, b, j), y(this.me, this, b, m))
  }
  0 == a.length && !this.ie && this.ca(this.Yc)
}
A(Vf, Vc);
Vf.prototype.Ne = 0;
Vf.prototype.me = function(a, b, c) {
  this.Ne++;
  this.Yc[a] = [b, c];
  this.wa || (this.ie && b ? this.ca([a, c]) : this.Ef && !b ? this.Eb(c) : this.Ne == this.De.length && this.ca(this.Yc));
  this.vf && !b && (c = k);
  return c
};
Vf.prototype.Eb = function(a) {
  Vf.e.Eb.call(this, a);
  Wa(this.De, function(a) {
    a.cancel()
  })
};
function Wf(a) {
  a = new Vf(a, m, j);
  ad(a, function(a) {
    return Xa(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function Xf(a, b) {
  this.tg = a;
  this.Ge = b
}
Xf.prototype.md = 0;
Xf.prototype.xc = 0;
Xf.prototype.dd = m;
function Yf(a) {
  var b = [];
  if(a.dd) {
    return[b, 2]
  }
  var c = a.md, d = a.tg.responseText;
  for(a.md = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var e = d.substr(a.xc, c - a.xc), e = e.replace(/\r$/, "");
    if(e.length > a.Ge) {
      return a.dd = j, [b, 2]
    }
    b.push(e);
    a.xc = c += 1
  }
  return a.md - a.xc - 1 > a.Ge ? (a.dd = j, [b, 2]) : [b, 1]
}
;function $f(a, b, c) {
  this.G = b;
  this.$ = a;
  this.Vc = c
}
A($f, M);
s = $f.prototype;
s.a = W("cw.net.XHRMaster");
s.Ga = -1;
s.rd = function(a, b, c) {
  this.Vc.__XHRSlave_makeRequest(this.$, a, b, c)
};
s.ya = o("Ga");
s.wd = function(a, b) {
  1 != b && S(this.a, H(this.$) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Me(this.G);
  Ne(this.G, a)
};
s.xd = function(a) {
  U(this.a, "ongotheaders_: " + H(a));
  var b = k;
  "Content-Length" in a && (b = Fe(a["Content-Length"]));
  a = this.G;
  U(a.a, a.q() + " got Content-Length: " + b);
  a.ka == ag && (b == k && (T(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), bg(a, 2E3 + 1E3 * (b / 3072)))
};
s.yd = function(a) {
  1 != a && U(this.a, this.G.q() + "'s XHR's readyState is " + a);
  this.Ga = a;
  2 <= this.Ga && Me(this.G)
};
s.vd = function() {
  this.G.b()
};
s.c = function() {
  $f.e.c.call(this);
  delete cg.oa[this.$];
  this.Vc.__XHRSlave_dispose(this.$);
  delete this.Vc
};
function dg() {
  this.oa = {}
}
A(dg, M);
s = dg.prototype;
s.a = W("cw.net.XHRMasterTracker");
s.Xc = function(a, b) {
  var c = "_" + Be(), d = new $f(c, a, b);
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
  dg.e.c.call(this);
  for(var a = Ra(this.oa);a.length;) {
    a.pop().b()
  }
  delete this.oa
};
var cg = new dg;
t.__XHRMaster_onframes = y(cg.wd, cg);
t.__XHRMaster_oncomplete = y(cg.vd, cg);
t.__XHRMaster_ongotheaders = y(cg.xd, cg);
t.__XHRMaster_onreadystatechange = y(cg.yd, cg);
function eg(a, b, c) {
  this.ia = a;
  this.host = b;
  this.port = c
}
function fg(a, b, c) {
  this.host = a;
  this.port = b;
  this.og = c
}
function gg(a, b) {
  b || (b = a);
  this.ia = a;
  this.Ha = b
}
gg.prototype.p = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  G(this.ia, a, b);
  a.push(", secondaryUrl=");
  G(this.Ha, a, b);
  a.push(">")
};
function hg(a, b, c, d) {
  this.ia = a;
  this.Se = b;
  this.Ha = c;
  this.bf = d;
  (!(0 == this.ia.indexOf("http://") || 0 == this.ia.indexOf("https://")) || !(0 == this.Ha.indexOf("http://") || 0 == this.Ha.indexOf("https://"))) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Se.location.href;
  rf(this.ia, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.bf.location.href;
  rf(this.Ha, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
hg.prototype.p = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  G(this.ia, a, b);
  a.push(", secondaryUrl=");
  G(this.Ha, a, b);
  a.push(">")
};
var ig = new ff(";)]}");
function jg() {
}
jg.prototype.je = q(1);
function kg(a) {
  this.ig = a
}
kg.prototype.p = function(a, b) {
  a.push("<UserContext for ");
  G(this.ig, a, b);
  a.push(">")
};
function lg(a, b, c) {
  this.u = a;
  this.jg = b ? b : new jg;
  this.C = c ? c : id;
  this.$b = new $d;
  this.Zb = Be() + Be();
  this.Fa = new Pb;
  this.kd = new Rb;
  this.ac = k;
  this.Lc = [];
  this.vb = new kg(this);
  K && (this.ac = Kc(t, "load", this.ag, m, this))
}
A(lg, M);
s = lg.prototype;
s.a = W("cw.net.ClientStream");
s.Be = new Ob(-1, []);
s.Ce = new Ob(-1, []);
s.Uf = 50;
s.Tf = 1048576;
s.zd = k;
s.onreset = k;
s.Pe = k;
s.Jd = m;
s.Dd = m;
s.d = 1;
s.Od = -1;
s.h = k;
s.A = k;
s.Rb = k;
s.Kd = 0;
s.Re = 0;
s.af = 0;
s.p = function(a, b) {
  a.push("<ClientStream id=");
  G(this.Zb, a, b);
  a.push(", state=", "" + this.d);
  a.push(", primary=");
  G(this.h, a, b);
  a.push(", secondary=");
  G(this.A, a, b);
  a.push(", resetting=");
  G(this.Rb, a, b);
  a.push(">")
};
function mg(a) {
  var b = [-1];
  a.h && b.push(a.h.nb);
  a.A && b.push(a.A.nb);
  return Math.max.apply(Math.max, b)
}
function ng(a) {
  if(!(3 > a.d)) {
    var b = 0 != a.Fa.T.v(), c = Sb(a.kd), d = !c.k(a.Ce) && !(a.h && c.k(a.h.kb) || a.A && c.k(a.A.kb)), e = mg(a);
    if((b = b && e < a.Fa.Ka) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.h.zb ? (V(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.h, c != d.kb && (!d.pa && !d.B.length && og(d), d.B.push(new df(c)), d.kb = c)), b && pg(a.h, a.Fa, e + 1), a.h.na()) : a.A == k ? a.Jd ? (V(a.a, "tryToSend_: creating secondary to send " + g), a.A = qg(a, m), b && pg(a.A, a.Fa, e + 1), a.A.na()) : (V(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.Dd = j) : V(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
s.ag = function() {
  this.ac = k;
  if(this.h && this.h.hb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.h;
    a.Nc = j;
    a.b()
  }
  this.A && this.A.hb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.A, a.Nc = j, a.b())
};
function rg(a, b) {
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
    ng(a)
  }
}
function qg(a, b) {
  var c;
  a.u instanceof hg ? c = 1 == a.jg.je() ? ag : sg : a.u instanceof fg ? c = tg : f(Error("Don't support endpoint " + H(a.u)));
  a.Od += 1;
  c = new ug(a.C, a, a.Od, c, a.u, b);
  V(a.a, "Created: " + c.q());
  a.$b.add(c);
  return c
}
function vg(a, b, c) {
  var d = new wg(a.C, a, b, c);
  V(a.a, "Created: " + d.q() + ", delay=" + b + ", times=" + c);
  a.$b.add(d);
  return d
}
function xg(a, b) {
  a.$b.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  U(a.a, "Offline: " + b.q());
  a.Kd = b.Ca ? a.Kd + b.Ca : 0;
  1 <= a.Kd && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.vb, "stream penalty reached limit", m), a.b());
  if(3 < a.d) {
    4 == a.d && b.lf ? (U(a.a, "Disposing because resettingTransport_ is done."), a.b()) : U(a.a, "Not creating a transport because ClientStream is in state " + a.d)
  }else {
    var c;
    var d;
    c = b instanceof wg;
    if(!c && b.Nc) {
      var e = K ? Uf ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      V(a.a, "getDelayForNextTransport_: " + H({delay:c, times:d}))
    }else {
      if(d = b.Zd(), b == a.h ? d ? e = ++a.Re : c || (e = a.Re = 0) : d ? e = ++a.af : c || (e = a.af = 0), c || !e) {
        d = c = 0, V(a.a, "getDelayForNextTransport_: " + H({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(4E3 * Math.random()) - 2E3, l = Math.max(0, b.gf - b.Pd);
        d = (c = Math.max(0, g + h - l)) ? 1 : 0;
        V(a.a, "getDelayForNextTransport_: " + H({count:e, base:g, variance:h, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    b == a.h ? (a.h = k, c ? a.h = vg(a, e, c) : (e = mg(a), a.h = qg(a, j), pg(a.h, a.Fa, e + 1)), a.h.na()) : b == a.A && (a.A = k, c ? (a.A = vg(a, e, c), a.A.na()) : ng(a))
  }
}
s.reset = function(a) {
  3 < this.d && f(Error("reset: Can't send reset in state " + this.d));
  this.d = 4;
  this.h && this.h.zb ? (this.a.info("reset: Sending ResetFrame over existing primary."), yg(this.h, a), this.h.na()) : (this.h && (U(this.a, "reset: Disposing primary before sending ResetFrame."), this.h.b()), this.A && (U(this.a, "reset: Disposing secondary before sending ResetFrame."), this.A.b()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Rb = qg(this, m), yg(this.Rb, a), this.Rb.na());
  this.onreset && this.onreset.call(this.vb, a, j)
};
function zg(a, b, c, d) {
  var e;
  e = a.kd;
  for(var g = a.Uf, h = a.Tf, l = [], n = m, p = 0, F = c.length;p < F;p++) {
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
  d || ng(a);
  if(!(4 == a.d || a.da) && e) {
    S(b.a, b.q() + "'s peer caused rwin overflow."), b.b()
  }
}
s.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.d && f(Error("ClientStream.start: " + H(this) + " already started"));
  this.d = 2;
  if(this.u instanceof gg) {
    var a = Qf(this.u.ia, this), b = Qf(this.u.Ha, this), a = Wf([a, b]);
    ad(a, y(this.Cf, this))
  }else {
    if(this.u instanceof eg) {
      if(Nb) {
        this.he()
      }else {
        var a = Ve(this.C, this.u.ia), c = this;
        ad(a, function(a) {
          Nb || (Nb = new Qe(c.C, a));
          return k
        });
        ad(a, y(this.he, this))
      }
    }else {
      Ag(this)
    }
  }
};
s.Cf = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].hc, e = a[1].hc;
  this.Lc.push(a[0]);
  this.Lc.push(a[1]);
  this.u = new hg(d, b, e, c);
  Ag(this)
};
s.he = function() {
  this.u = new fg(this.u.host, this.u.port, Nb);
  Ag(this)
};
function Ag(a) {
  a.d = 3;
  a.h = qg(a, j);
  pg(a.h, a.Fa, k);
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
  this.Pe && this.Pe.call(this.vb);
  delete this.$b;
  delete this.h;
  delete this.A;
  delete this.Rb;
  delete this.vb;
  lg.e.c.call(this)
};
var ag = 1, sg = 2, tg = 3;
function ug(a, b, c, d, e, g) {
  this.C = a;
  this.D = b;
  this.ub = c;
  this.ka = d;
  this.u = e;
  this.B = [];
  this.Za = g;
  this.zb = !this.hb();
  this.pb = this.ka != ag;
  this.qf = y(this.mg, this)
}
A(ug, M);
s = ug.prototype;
s.a = W("cw.net.ClientTransport");
s.o = k;
s.Pd = k;
s.gf = k;
s.Ac = k;
s.pa = m;
s.Hc = m;
s.kb = k;
s.jc = 0;
s.nb = -1;
s.zc = -1;
s.lf = m;
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
  return this.ka == ag || this.ka == sg
};
function Bg(a, b) {
  gb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  zg(a.D, a, b, !a.pb)
}
function Cg(a, b, c) {
  try {
    var d = pf(b);
    a.jc += 1;
    U(a.a, a.q() + " RECV " + H(d));
    var e;
    1 == a.jc && !d.k(ig) && a.hb() ? (T(a.a, a.q() + " is closing soon because got bad preamble: " + H(d)), e = j) : e = m;
    if(e) {
      return j
    }
    if(d instanceof ef) {
      if(!/^([ -~]*)$/.test(d.tb)) {
        return a.Jb = j
      }
      a.zc += 1;
      c.push([a.zc, d.tb])
    }else {
      if(d instanceof df) {
        var g = a.D, h = d.aa;
        g.Be = h;
        var l = g.Fa, n = h.Ya, c = m;
        n > l.Ka && (c = j);
        for(var p = Qb(l).concat(), d = 0;d < p.length;d++) {
          var F = p[d];
          if(F > n) {
            break
          }
          var r = l.T.get(F)[1];
          l.T.remove(F);
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
        if(d instanceof gf) {
          a.zc = d.Vb - 1
        }else {
          if(d instanceof jf) {
            a.D.Ce = d.Mb
          }else {
            if(d instanceof lf) {
              return V(a.a, a.q() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof of) {
              return a.Jb = j, "stream_attach_failure" == d.reason ? a.Ca += 1 : "acked_unsent_strings" == d.reason && (a.Ca += 0.5), V(a.a, a.q() + " is closing soon because got " + H(d)), j
            }
            if(!(d instanceof ff)) {
              if(d instanceof kf) {
                var B = a.D, ai = !a.pb;
                V(B.a, "Stream is now confirmed to exist at server.");
                B.Jd = j;
                B.Dd && !ai && (B.Dd = m, ng(B))
              }else {
                if(c.length) {
                  Bg(a, c);
                  if(!u(c)) {
                    for(var Wd = c.length - 1;0 <= Wd;Wd--) {
                      delete c[Wd]
                    }
                  }
                  c.length = 0
                }
                if(d instanceof mf) {
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
  }catch(Zf) {
    return Zf instanceof X || f(Zf), T(a.a, a.q() + " is closing soon because got InvalidFrame: " + H(b)), a.Jb = j
  }
  return m
}
function Ne(a, b) {
  a.Hc = j;
  try {
    for(var c = m, d = [], e = 0, g = b.length;e < g;e++) {
      if(a.da) {
        a.a.info(a.q() + " returning from loop because we're disposed.");
        return
      }
      if(c = Cg(a, b[e], d)) {
        break
      }
    }
    d.length && Bg(a, d);
    a.Hc = m;
    a.B.length && a.na();
    c && (V(a.a, a.q() + " closeSoon is true.  Frames were: " + H(b)), a.b())
  }finally {
    a.Hc = m
  }
}
s.mg = function() {
  T(this.a, this.q() + " timed out due to lack of connection or no data being received.");
  this.b()
};
function Dg(a) {
  a.Ac != k && (a.C.I.clearTimeout(a.Ac), a.Ac = k)
}
function bg(a, b) {
  Dg(a);
  b = Math.round(b);
  a.Ac = a.C.I.setTimeout(a.qf, b);
  U(a.a, a.q() + "'s receive timeout set to " + b + " ms.")
}
function Me(a) {
  a.ka != ag && (a.ka == tg || a.ka == sg ? bg(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ka)))
}
function og(a) {
  var b = new bf;
  b.ub = a.ub;
  b.Te = 2;
  b.ue = 2;
  a.D.Jd || (b.Xe = j);
  b.Zb = a.D.Zb;
  b.Ld = a.pb;
  b.Ld && (b.Le = 4096);
  b.He = 3E5;
  b.Fe = a.pb ? Math.floor(10) : 0;
  b.hf = m;
  a.Za && (b.df = k, b.sd = Math.floor((a.pb ? 358E4 : 25E3) / 1E3));
  b.aa = Sb(a.D.kd);
  b.vc = a.D.Be;
  a.B.push(b);
  a.kb = b.aa
}
function Oe(a, b) {
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
    !a && !this.B.length && og(this);
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
      this.o = cg.Xc(this, this.Za ? this.u.Se : this.u.bf);
      this.Pd = this.C.I === Uc ? z() : this.C.I.getTime();
      this.o.rd(b, "POST", a);
      bg(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.pb ? 0 : this.Za ? 25E3 : 0))
    }else {
      if(this.ka == tg) {
        a = [];
        b = 0;
        for(c = this.B.length;b < c;b++) {
          a.push(this.B[b].S())
        }
        this.B = [];
        this.o ? this.o.bc(a) : (b = this.u, this.o = new Re(this), this.o.Gc = b.og.Xc(this.o), this.Pd = this.C.I === Uc ? z() : this.C.I.getTime(), this.o.Uc(b.host, b.port), this.o.da || (this.o.bc(a), this.o.da || bg(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.ka))
      }
    }
  }
};
function pg(a, b, c) {
  !a.pa && !a.B.length && og(a);
  for(var d = Math.max(c, a.nb + 1), e = Qb(b), c = [], g = 0;g < e.length;g++) {
    var h = e[g];
    (d == k || h >= d) && c.push([h, b.T.get(h)[0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], e = g[0], g = g[1], (-1 == a.nb || a.nb + 1 != e) && a.B.push(new gf(e)), a.B.push(new ef(g)), a.nb = e
  }
}
s.c = function() {
  this.a.info(this.q() + " in disposeInternal.");
  ug.e.c.call(this);
  this.gf = this.C.I === Uc ? z() : this.C.I.getTime();
  this.B = [];
  Dg(this);
  this.o && this.o.b();
  var a = this.D;
  this.D = k;
  xg(a, this)
};
function yg(a, b) {
  !a.pa && !a.B.length && og(a);
  a.B.push(new mf(b, j));
  a.lf = j
}
function wg(a, b, c, d) {
  this.C = a;
  this.D = b;
  this.ee = c;
  this.ae = d
}
A(wg, M);
s = wg.prototype;
s.pa = m;
s.zb = m;
s.qc = k;
s.kb = k;
s.a = W("cw.net.DoNothingTransport");
function Eg(a) {
  a.qc = a.C.I.setTimeout(function() {
    a.qc = k;
    a.ae--;
    a.ae ? Eg(a) : a.b()
  }, a.ee)
}
s.na = function() {
  this.pa && !this.zb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.pa = j;
  Eg(this)
};
s.p = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.ee, ">")
};
s.hb = q(m);
s.q = q("Wast. T");
s.Zd = q(m);
s.c = function() {
  this.a.info(this.q() + " in disposeInternal.");
  wg.e.c.call(this);
  this.qc != k && this.C.I.clearTimeout(this.qc);
  var a = this.D;
  this.D = k;
  xg(a, this)
};
var Fg;
function Gg() {
  kb.apply(this)
}
A(Gg, kb);
function Hg() {
  kb.apply(this)
}
A(Hg, kb);
qb(Gg, {"0":{name:"NewPost", If:"demosminerva.ljstream_messages.NewPost"}, 1:{name:"title", bb:9, type:String}, 2:{name:"url", bb:9, type:String}, 3:{name:"body", bb:9, type:String}, 4:{name:"num_images", bb:5, type:Number}, 5:{name:"lang", bb:9, type:String}});
qb(Hg, {"0":{name:"SetPreferences", If:"demosminerva.ljstream_messages.SetPreferences"}, 1:{name:"include_russian_posts", bb:8, type:Boolean}});
function Ig() {
  this.We = z()
}
var Jg = new Ig;
Ig.prototype.set = aa("We");
Ig.prototype.reset = function() {
  this.set(z())
};
Ig.prototype.get = o("We");
function Kg(a) {
  this.Bd = a || "";
  this.gg = Jg
}
Kg.prototype.cg = j;
Kg.prototype.eg = j;
Kg.prototype.dg = j;
Kg.prototype.cf = m;
function Lg(a) {
  return 10 > a ? "0" + a : "" + a
}
function Mg(a, b) {
  var c = (a.ef - b) / 1E3, d = c.toFixed(3), e = 0;
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
function Ng(a) {
  Kg.call(this, a)
}
A(Ng, Kg);
Ng.prototype.cf = j;
function Og(a) {
  this.td = a || 100;
  this.ra = []
}
s = Og.prototype;
s.Nb = 0;
s.add = function(a) {
  this.ra[this.Nb] = a;
  this.Nb = (this.Nb + 1) % this.td
};
s.get = function(a) {
  a = Pg(this, a);
  return this.ra[a]
};
s.set = function(a, b) {
  a = Pg(this, a);
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
function Pg(a, b) {
  b >= a.ra.length && f(Error("Out of bounds exception"));
  return a.ra.length < a.td ? b : (a.Nb + Number(b)) % a.td
}
;function Qg(a, b) {
  this.za = a || "";
  this.Bd = b || "";
  this.ob = [];
  this.Cc = new Og(Rg);
  this.Zf = y(this.of, this);
  this.Gf = new Ng(this.Bd);
  this.Df = {};
  if(j != this.xe) {
    this.xe = j;
    var c = ye(), d = this.Zf;
    c.Kb || (c.Kb = []);
    c.Kb.push(d)
  }
  this.Db = "1" == Sg(this.za, "enabled");
  t.setInterval(y(this.bg, this), 7500)
}
var Rg = 500;
s = Qg.prototype;
s.kf = "LOGGING";
s.Af = m;
s.t = k;
s.Td = m;
s.xe = m;
s.Wd = k;
s.nd = z();
s.Pa = function() {
  this.Db && Tg(this)
};
s.isEnabled = o("Db");
s.Ec = function(a) {
  if(this.Db = a) {
    Tg(this), this.t && this.Kc()
  }
  Ug(this, "enabled", a ? "1" : "0")
};
function Vg(a) {
  return!!a.t && !a.t.closed
}
s.tf = function() {
  this.Cc.clear();
  Vg(this) && this.Kc()
};
s.of = function(a) {
  if(!this.Df[a.Ee]) {
    var b = this.Gf, c;
    switch(a.Z.value) {
      case je.value:
        c = "dbg-sh";
        break;
      case ke.value:
        c = "dbg-sev";
        break;
      case le.value:
        c = "dbg-w";
        break;
      case me.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.Bd, " ");
    if(b.cg) {
      var e = new Date(a.ef);
      d.push("[", Lg(e.getFullYear() - 2E3) + Lg(e.getMonth() + 1) + Lg(e.getDate()) + " " + Lg(e.getHours()) + ":" + Lg(e.getMinutes()) + ":" + Lg(e.getSeconds()) + "." + Lg(Math.floor(e.getMilliseconds() / 10)), "] ")
    }
    b.eg && d.push("[", Fa(Mg(a, b.gg.get())), "s] ");
    b.dg && d.push("[", D(a.Ee), "] ");
    d.push('<span class="', c, '">', za(Fa(D(a.Je))));
    b.cf && a.cd && d.push("<br>", za(Fa(a.bd || "")));
    d.push("</span><br>");
    b = d.join("");
    this.Db ? (Tg(this), this.Cc.add(b), Wg(this, b)) : this.Cc.add(b);
    this.Af && a.Z.value >= ke.value && this.Ec(j)
  }
};
function Wg(a, b) {
  a.ob.push(b);
  t.clearTimeout(a.Wd);
  750 < z() - a.nd ? a.Ud() : a.Wd = t.setTimeout(y(a.Ud, a), 250)
}
s.Ud = function() {
  this.nd = z();
  if(Vg(this)) {
    var a = this.t.document.body, a = a && 100 >= a.scrollHeight - (a.scrollTop + a.clientHeight);
    this.t.document.write(this.ob.join(""));
    this.ob.length = 0;
    a && this.t.scrollTo(0, 1E6)
  }
};
function Xg(a) {
  for(var b = a.Cc.K(), c = 0;c < b.length;c++) {
    Wg(a, b[c])
  }
}
function Tg(a) {
  if(!Vg(a) && !a.Td) {
    var b = Sg(a.za, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), e = Number(b[2]), b = Number(b[3]);
    a.Td = j;
    a.t = window.open("", J ? a.za.replace(/[\s\-\.\,]/g, "_") : a.za, "width=" + e + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    !a.t && !a.fg && (alert("Logger popup was blocked"), a.fg = j);
    a.Td = m;
    a.t && a.Kc()
  }
}
s.nc = q("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
s.Kc = function() {
  Vg(this) || (this.t.document.open(), Wg(this, "<style>" + this.nc() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.kf + "<br><small>Logger: " + this.za + "</small></div><hr>"), Xg(this))
};
function Ug(a, b, c) {
  b += a.za;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(z() + 2592E6)).toUTCString()
}
function Sg(a, b, c) {
  var a = b + a, b = "" + document.cookie, d = b.indexOf(a + "=");
  return-1 != d ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, -1 == c ? b.length : c))) : c || ""
}
s.bg = function() {
  Vg(this) && Ug(this, "dbg", (this.t.screenX || this.t.screenLeft || 0) + "," + (this.t.screenY || this.t.screenTop || 0) + "," + (this.t.outerWidth || 800) + "," + (this.t.outerHeight || 500))
};
function Yg(a, b) {
  if(Zg) {
    var c = $g(), d;
    for(d in c) {
      var e = d.replace("fancywindow.sel.", ""), e = W(e), g = e.Z, h = window.localStorage.getItem(d).toString();
      (!g || g.toString() != h) && e.rb(te(h))
    }
  }
  Qg.call(this, a, b)
}
A(Yg, Qg);
var Zg;
a: {
  try {
    Zg = !!window.localStorage.getItem;
    break a
  }catch(ah) {
  }
  Zg = m
}
s = Yg.prototype;
s.Ud = function() {
  this.nd = z();
  if(Vg(this)) {
    for(var a = this.N.g("log"), b = 100 >= a.scrollHeight - (a.scrollTop + a.offsetHeight), c = 0;c < this.ob.length;c++) {
      var d = this.N.r("div", "logmsg");
      d.innerHTML = this.ob[c];
      a.appendChild(d)
    }
    this.ob.length = 0;
    this.Ze();
    b && (a.scrollTop = a.scrollHeight)
  }
};
s.Kc = function() {
  if(Vg(this)) {
    var a = this.t.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.za + "</title><style>" + this.nc() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.za + "</b></p><p>" + this.kf + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (J ? a.body : this.t).onresize = y(this.Ze, this);
    this.N = new sd(a);
    this.N.g("openbutton").onclick = y(this.Xf, this);
    this.N.g("closebutton").onclick = y(this.uf, this);
    this.N.g("clearbutton").onclick = y(this.tf, this);
    this.N.g("exitbutton").onclick = y(this.Bf, this);
    Xg(this)
  }
};
s.Xf = function() {
  var a = this.N.g("optionsarea");
  a.innerHTML = "";
  for(var b = bh(), c = this.N, d = 0;d < b.length;d++) {
    var e = W(b[d]), e = c.r("div", {}, ch(this, "sel" + b[d], e.Z ? e.Z.name : "INHERIT"), c.r("span", {}, b[d] || "(root)"));
    a.appendChild(e)
  }
  this.N.g("options").style.display = "block";
  return m
};
function ch(a, b, c) {
  for(var a = a.N, b = a.r("select", {id:b}), d = 0;d < re.length;d++) {
    var e = re[d], g = a.r("option", {}, e.name);
    c == e.name && (g.selected = j);
    b.appendChild(g)
  }
  b.appendChild(a.r("option", {selected:"INHERIT" == c}, "INHERIT"));
  return b
}
s.uf = function() {
  this.N.g("options").style.display = "none";
  for(var a = bh(), b = this.N, c = 0;c < a.length;c++) {
    var d = W(a[c]), e = b.g("sel" + a[c]), e = e.options[e.selectedIndex].text;
    "INHERIT" == e ? d.rb(k) : d.rb(te(e))
  }
  if(Zg) {
    a = bh();
    b = $g();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], e = W(a[c]).Z, d in b ? e ? window.localStorage.getItem(d) != e.name && window.localStorage.setItem(d, e.name) : window.localStorage.removeItem(d) : e && window.localStorage.setItem(d, e.name)
    }
  }
  return m
};
s.Ze = function() {
  var a = this.N, b = a.g("log"), c = a.g("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.O.body.offsetHeight - c.offsetHeight - (J ? 4 : 0) + "px"
};
s.Bf = function() {
  this.Ec(m);
  this.t && this.t.close()
};
s.nc = function() {
  return Yg.e.nc.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function $g() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != k && 0 == d.lastIndexOf("fancywindow.sel.", 0) && (a[d] = j)
  }
  return a
}
function bh() {
  var a = Sa(ve);
  a.sort();
  return a
}
;function dh() {
}
var eh;
ea(dh);
s = dh.prototype;
s.kc = function() {
};
s.r = function(a) {
  var b = a.cb().r("div", fh(this, a).join(" "), a.Bb);
  this.Ed(a, b);
  return b
};
s.Cb = function(a, b, c) {
  if(a = a.g ? a.g() : a) {
    if(J && !L("7")) {
      var d = gh(kd(a), b);
      d.push(b);
      pa(c ? ld : md, a).apply(k, d)
    }else {
      c ? ld(a, b) : md(a, b)
    }
  }
};
s.ve = function(a) {
  if(a.Ub == k) {
    var b;
    a: {
      b = a.J ? a.m : a.ta.O.body;
      var c = td(b);
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
  if(Nd) {
    if(c = c ? "none" : "", a.style[Nd] = c, d) {
      for(var e = 0, g;g = d[e];e++) {
        g.style[Nd] = c
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
s.ye = function(a) {
  var b;
  return a.M & 32 && (b = a.Na()) ? Gd(b) : m
};
s.Xb = function(a, b) {
  var c;
  if(a.M & 32 && (c = a.Na())) {
    if(!b && a.d & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.d & 32 && a.le()
    }
    Gd(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
s.Hd = function(a, b) {
  a.style.display = b ? "" : "none"
};
s.P = function(a, b, c) {
  var d = a.g();
  if(d) {
    var e = hh(this, b);
    e && this.Cb(a, e, c);
    this.R(d, b, c)
  }
};
s.R = function(a, b, c) {
  eh || (eh = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = eh[b]) && a.setAttribute("aria-" + b, c)
};
s.Na = function(a) {
  return a.g()
};
s.xa = q("goog-control");
function fh(a, b) {
  var c = a.xa(), d = [c], e = a.xa();
  e != c && d.push(e);
  c = b.d;
  for(e = [];c;) {
    var g = c & -c;
    e.push(hh(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.ea) && d.push.apply(d, c);
  J && !L("7") && d.push.apply(d, gh(d));
  return d
}
function gh(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Wa([], function(d) {
    Za(d, pa($a, a)) && (!b || $a(d, b)) && c.push(d.join("_"))
  });
  return c
}
function hh(a, b) {
  if(!a.Yd) {
    var c = a.xa();
    a.Yd = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Yd[b]
}
;function ih(a, b) {
  a || f(Error("Invalid class name " + a));
  x(b) || f(Error("Invalid decorator function " + b))
}
var jh = {};
function kh(a, b, c, d, e) {
  if(!J && (!K || !L("525"))) {
    return j
  }
  if(gc && e) {
    return lh(a)
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
  return lh(a)
}
function lh(a) {
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
;function mh(a, b) {
  a && nh(this, a, b)
}
A(mh, Tc);
s = mh.prototype;
s.m = k;
s.tc = k;
s.ld = k;
s.uc = k;
s.Ba = -1;
s.Aa = -1;
var oh = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, ph = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, qh = {61:187, 
59:186}, rh = J || K && L("525");
s = mh.prototype;
s.Lf = function(a) {
  if(K && (17 == this.Ba && !a.ctrlKey || 18 == this.Ba && !a.altKey)) {
    this.Aa = this.Ba = -1
  }
  rh && !kh(a.keyCode, this.Ba, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Aa = dc && a.keyCode in qh ? qh[a.keyCode] : a.keyCode
};
s.Nf = function() {
  this.Aa = this.Ba = -1
};
s.handleEvent = function(a) {
  var b = a.ma, c, d;
  J && "keypress" == a.type ? (c = this.Aa, d = 13 != c && 27 != c ? b.keyCode : 0) : K && "keypress" == a.type ? (c = this.Aa, d = 0 <= b.charCode && 63232 > b.charCode && lh(c) ? b.charCode : 0) : cc ? (c = this.Aa, d = lh(c) ? b.keyCode : 0) : (c = b.keyCode || this.Aa, d = b.charCode || 0, gc && 63 == d && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in oh ? e = oh[c] : 25 == c && a.shiftKey && (e = 9) : g && g in ph && (e = ph[g]);
  a = e == this.Ba;
  this.Ba = e;
  b = new sh(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.b()
  }
};
s.g = o("m");
function nh(a, b, c) {
  a.uc && a.detach();
  a.m = b;
  a.tc = O(a.m, "keypress", a, c);
  a.ld = O(a.m, "keydown", a.Lf, c, a);
  a.uc = O(a.m, "keyup", a.Nf, c, a)
}
s.detach = function() {
  this.tc && (Nc(this.tc), Nc(this.ld), Nc(this.uc), this.uc = this.ld = this.tc = k);
  this.m = k;
  this.Aa = this.Ba = -1
};
s.c = function() {
  mh.e.c.call(this);
  this.detach()
};
function sh(a, b, c, d) {
  d && this.Pa(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
A(sh, Bc);
function Z(a, b, c) {
  Sd.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ka(b);
      if(d = jh[d]) {
        break
      }
      b = b.e ? b.e.constructor : k
    }
    b = d ? x(d.eb) ? d.eb() : new d : k
  }
  this.z = b;
  this.Bb = a
}
A(Z, Sd);
s = Z.prototype;
s.Bb = k;
s.d = 0;
s.M = 39;
s.Qc = 255;
s.hg = 0;
s.Xa = j;
s.ea = k;
s.fd = j;
s.Pc = m;
s.Yf = k;
s.Na = function() {
  return this.z.Na(this)
};
function th(a, b) {
  b && (a.ea ? $a(a.ea, b) || a.ea.push(b) : a.ea = [b], a.z.Cb(a, b, j))
}
s.Cb = function(a, b) {
  b ? th(this, a) : a && this.ea && (ab(this.ea, a), 0 == this.ea.length && (this.ea = k), this.z.Cb(this, a, m))
};
s.r = function() {
  var a = this.z.r(this);
  this.m = a;
  var b = this.Yf || this.z.kc();
  b && (a.setAttribute("role", b), a.xh = b);
  this.Pc || this.z.Dc(a, m);
  this.Xa || this.z.Hd(a, m)
};
s.ua = function() {
  Z.e.ua.call(this);
  this.z.ve(this);
  if(this.M & -2 && (this.fd && uh(this, j), this.M & 32)) {
    var a = this.Na();
    if(a) {
      var b = this.jb || (this.jb = new mh);
      nh(b, a);
      Q(Q(Q(Xd(this), b, "key", this.Mf), a, "focus", this.Kf), a, "blur", this.le)
    }
  }
};
function uh(a, b) {
  var c = Xd(a), d = a.g();
  b ? (Q(Q(Q(Q(c, d, "mouseover", a.qe), d, "mousedown", a.oe), d, "mouseup", a.re), d, "mouseout", a.pe), J && Q(c, d, "dblclick", a.ne)) : (Qd(Qd(Qd(Qd(c, d, "mouseover", a.qe), d, "mousedown", a.oe), d, "mouseup", a.re), d, "mouseout", a.pe), J && Qd(c, d, "dblclick", a.ne))
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
function vh(a) {
  a = a.Bb;
  if(!a) {
    return""
  }
  if(!v(a)) {
    if(u(a)) {
      a = Xa(a, Hd).join("")
    }else {
      if(pd && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Id(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      pd || (a = a.replace(/ +/g, " "));
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
  if((!b || "function" != typeof b.isEnabled || b.isEnabled()) && wh(this, 1, !a)) {
    a || (this.setActive(m), xh(this, m)), this.Xa && this.z.Xb(this, a), this.P(1, !a)
  }
};
function xh(a, b) {
  wh(a, 2, b) && a.P(2, b)
}
s.we = function() {
  return!!(this.d & 4)
};
s.setActive = function(a) {
  wh(this, 4, a) && this.P(4, a)
};
s.P = function(a, b) {
  this.M & a && b != !!(this.d & a) && (this.z.P(this, a, b), this.d = b ? this.d | a : this.d & ~a)
};
function $(a, b) {
  return!!(a.Qc & b) && !!(a.M & b)
}
function wh(a, b, c) {
  return!!(a.M & b) && !!(a.d & b) != c && (!(a.hg & b) || a.dispatchEvent(Ud(b, c))) && !a.da
}
s.qe = function(a) {
  (!a.relatedTarget || !Dd(this.g(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && $(this, 2) && xh(this, j)
};
s.pe = function(a) {
  if((!a.relatedTarget || !Dd(this.g(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    $(this, 4) && this.setActive(m), $(this, 2) && xh(this, m)
  }
};
s.oe = function(a) {
  if(this.isEnabled() && ($(this, 2) && xh(this, j), Dc(a) && (!K || !gc || !a.ctrlKey))) {
    $(this, 4) && this.setActive(j), this.z.ye(this) && this.Na().focus()
  }
  !this.Pc && Dc(a) && (!K || !gc || !a.ctrlKey) && a.preventDefault()
};
s.re = function(a) {
  this.isEnabled() && ($(this, 2) && xh(this, j), this.we() && this.Pb(a) && $(this, 4) && this.setActive(m))
};
s.ne = function(a) {
  this.isEnabled() && this.Pb(a)
};
s.Pb = function(a) {
  if($(this, 16)) {
    var b = !(this.d & 16);
    wh(this, 16, b) && this.P(16, b)
  }
  $(this, 8) && wh(this, 8, j) && this.P(8, j);
  $(this, 64) && (b = !(this.d & 64), wh(this, 64, b) && this.P(64, b));
  b = new yc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.Ad = a.Ad);
  return this.dispatchEvent(b)
};
s.Kf = function() {
  $(this, 32) && wh(this, 32, j) && this.P(32, j)
};
s.le = function() {
  $(this, 4) && this.setActive(m);
  $(this, 32) && wh(this, 32, m) && this.P(32, m)
};
s.Mf = function(a) {
  return this.Xa && this.isEnabled() && this.ed(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
s.ed = function(a) {
  return 13 == a.keyCode && this.Pb(a)
};
x(Z) || f(Error("Invalid component class " + Z));
x(dh) || f(Error("Invalid renderer class " + dh));
var yh = ka(Z);
jh[yh] = dh;
ih("goog-control", function() {
  return new Z(k)
});
function zh() {
}
A(zh, dh);
ea(zh);
s = zh.prototype;
s.kc = q("button");
s.R = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : zh.e.R.call(this, a, b, c)
};
s.r = function(a) {
  var b = zh.e.r.call(this, a), c = a.oc();
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
function Ah() {
}
A(Ah, zh);
ea(Ah);
s = Ah.prototype;
s.kc = function() {
};
s.r = function(a) {
  a.J && m != a.fd && uh(a, m);
  a.fd = m;
  a.Qc &= -256;
  a.J && a.d & 32 && f(Error("Component already rendered"));
  a.d & 32 && a.P(32, m);
  a.M &= -33;
  return a.cb().r("button", {"class":fh(this, a).join(" "), disabled:!a.isEnabled(), title:a.oc() || "", value:a.pc() || ""}, vh(a) || "")
};
s.ve = function(a) {
  Q(Xd(a), a.g(), "click", a.Pb)
};
s.Dc = da;
s.sb = da;
s.ye = function(a) {
  return a.isEnabled()
};
s.Xb = da;
s.P = function(a, b, c) {
  Ah.e.P.call(this, a, b, c);
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
function Bh(a, b, c) {
  Z.call(this, a, b || Ah.eb(), c)
}
A(Bh, Z);
s = Bh.prototype;
s.pc = o("jf");
s.Fc = function(a) {
  this.jf = a;
  this.z.Fc(this.g(), a)
};
s.oc = o("ff");
s.Gd = function(a) {
  this.ff = a;
  this.z.Gd(this.g(), a)
};
s.c = function() {
  Bh.e.c.call(this);
  delete this.jf;
  delete this.ff
};
s.ua = function() {
  Bh.e.ua.call(this);
  if(this.M & 32) {
    var a = this.Na();
    a && Q(Xd(this), a, "keyup", this.ed)
  }
};
s.ed = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Pb(a) : 32 == a.keyCode
};
ih("goog-button", function() {
  return new Bh(k)
});
function Ch() {
}
A(Ch, zh);
ea(Ch);
Ch.prototype.r = function(a) {
  var b = {"class":"goog-inline-block " + fh(this, a).join(" "), title:a.oc() || ""}, b = a.cb().r("div", b, Dh(this, a.Bb, a.cb()));
  this.Ed(a, b);
  return b
};
Ch.prototype.kc = q("button");
Ch.prototype.Ed = function(a, b) {
  a.isEnabled() || this.R(b, 1, j);
  a.d & 8 && this.R(b, 8, j);
  a.M & 16 && this.R(b, 16, j);
  a.d & 64 && this.R(b, 64, j)
};
function Dh(a, b, c) {
  return c.r("div", "goog-inline-block " + (a.xa() + "-outer-box"), c.r("div", "goog-inline-block " + (a.xa() + "-inner-box"), b))
}
Ch.prototype.xa = q("goog-custom-button");
function Eh(a, b, c) {
  Bh.call(this, a, b || Ch.eb(), c)
}
A(Eh, Bh);
ih("goog-custom-button", function() {
  return new Eh(k)
});
function Fh() {
}
Fh.prototype.cc = k;
var Gh;
function Hh() {
}
A(Hh, Fh);
function Ih(a) {
  return(a = Jh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Kh(a) {
  var b = {};
  Jh(a) && (b[0] = j, b[1] = j);
  return b
}
Hh.prototype.hd = k;
function Jh(a) {
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
Gh = new Hh;
function Lh(a) {
  this.headers = new I;
  this.wb = a || k
}
A(Lh, Tc);
Lh.prototype.a = W("goog.net.XhrIo");
var Mh = /^https?$/i;
s = Lh.prototype;
s.qa = m;
s.i = k;
s.Mc = k;
s.od = "";
s.Ae = "";
s.Lb = "";
s.$c = m;
s.sc = m;
s.jd = m;
s.Oa = m;
s.Ic = 0;
s.Va = k;
s.$e = "";
s.rg = m;
s.send = function(a, b, c, d) {
  this.i && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.od = a;
  this.Lb = "";
  this.Ae = b;
  this.$c = m;
  this.qa = j;
  this.i = this.wb ? Ih(this.wb) : Ih(Gh);
  this.Mc = this.wb ? this.wb.cc || (this.wb.cc = Kh(this.wb)) : Gh.cc || (Gh.cc = Kh(Gh));
  this.i.onreadystatechange = y(this.Oe, this);
  try {
    U(this.a, Nh(this, "Opening Xhr")), this.jd = j, this.i.open(b, a, j), this.jd = m
  }catch(e) {
    U(this.a, Nh(this, "Error opening Xhr: " + e.message));
    Oh(this, e);
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
  this.$e && (this.i.responseType = this.$e);
  "withCredentials" in this.i && (this.i.withCredentials = this.rg);
  try {
    this.Va && (Uc.clearTimeout(this.Va), this.Va = k), 0 < this.Ic && (U(this.a, Nh(this, "Will abort after " + this.Ic + "ms if incomplete")), this.Va = Uc.setTimeout(y(this.ng, this), this.Ic)), U(this.a, Nh(this, "Sending request")), this.sc = j, this.i.send(a), this.sc = m
  }catch(h) {
    U(this.a, Nh(this, "Send error: " + h.message)), Oh(this, h)
  }
};
s.ng = function() {
  "undefined" != typeof ba && this.i && (this.Lb = "Timed out after " + this.Ic + "ms, aborting", U(this.a, Nh(this, this.Lb)), this.dispatchEvent("timeout"), this.abort(8))
};
function Oh(a, b) {
  a.qa = m;
  a.i && (a.Oa = j, a.i.abort(), a.Oa = m);
  a.Lb = b;
  Ph(a);
  Qh(a)
}
function Ph(a) {
  a.$c || (a.$c = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
s.abort = function() {
  this.i && this.qa && (U(this.a, Nh(this, "Aborting")), this.qa = m, this.Oa = j, this.i.abort(), this.Oa = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Qh(this))
};
s.c = function() {
  this.i && (this.qa && (this.qa = m, this.Oa = j, this.i.abort(), this.Oa = m), Qh(this, j));
  Lh.e.c.call(this)
};
s.Oe = function() {
  !this.jd && !this.sc && !this.Oa ? this.Wf() : Rh(this)
};
s.Wf = function() {
  Rh(this)
};
function Rh(a) {
  if(a.qa && "undefined" != typeof ba) {
    if(a.Mc[1] && 4 == a.ya() && 2 == Sh(a)) {
      U(a.a, Nh(a, "Local request error detected and ignored"))
    }else {
      if(a.sc && 4 == a.ya()) {
        Uc.setTimeout(y(a.Oe, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.ya()) {
          U(a.a, Nh(a, "Request complete"));
          a.qa = m;
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
              b = ("" + a.od).match(qf)[1] || k, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !Mh.test(b ? b.toLowerCase() : "")
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
            a.Lb = d + " [" + Sh(a) + "]";
            Ph(a)
          }
          Qh(a)
        }
      }
    }
  }
}
function Qh(a, b) {
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
s.we = function() {
  return!!this.i
};
s.ya = function() {
  return this.i ? this.i.readyState : 0
};
function Sh(a) {
  try {
    return 2 < a.ya() ? a.i.status : -1
  }catch(b) {
    return T(a.a, "Can not get status: " + b.message), -1
  }
}
s.getResponseHeader = function(a) {
  return this.i && 4 == this.ya() ? this.i.getResponseHeader(a) : i
};
function Nh(a, b) {
  return b + " [" + a.Ae + " " + a.od + " " + Sh(a) + "]"
}
;var Th = !(J || K && !L("420+"));
function Uh(a, b) {
  this.Jc = a;
  this.$ = b
}
A(Uh, M);
s = Uh.prototype;
s.o = k;
s.Ga = -1;
s.ke = m;
s.te = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Vh(a) {
  var b = Yf(a.ce), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.$, c, b), 1 != b && a.b()) : a.b()
}
s.Of = function() {
  Vh(this);
  if(!this.da) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.$);
    this.b()
  }
};
s.$f = function() {
  var a = t.parent;
  if(a) {
    this.Ga = this.o.ya();
    if(2 <= this.Ga && !this.ke) {
      for(var b = new I, c = this.te.length;c--;) {
        var d = this.te[c];
        try {
          b.set(d, this.o.i.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.v() && (this.ke = j, a.__XHRMaster_ongotheaders(this.$, Kb(b)), this.da)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.$, this.Ga);
    Th && 3 == this.Ga && Vh(this)
  }else {
    this.b()
  }
};
s.rd = function(a, b, c) {
  this.o = new Lh;
  O(this.o, "readystatechange", y(this.$f, this));
  O(this.o, "complete", y(this.Of, this));
  this.o.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.ce = new Xf(this.o.i, 1048576)
};
s.c = function() {
  Uh.e.c.call(this);
  delete this.ce;
  this.o && this.o.b();
  delete this.Jc.Yb[this.$];
  delete this.Jc
};
function Wh() {
  this.Yb = {}
}
A(Wh, M);
Wh.prototype.Sf = function(a, b, c, d) {
  var e = new Uh(this, a);
  this.Yb[a] = e;
  e.rd(b, c, d)
};
Wh.prototype.yf = function(a) {
  (a = this.Yb[a]) && a.b()
};
Wh.prototype.c = function() {
  Wh.e.c.call(this);
  for(var a = Ra(this.Yb);a.length;) {
    a.pop().b()
  }
  delete this.Yb
};
var Xh = new Wh;
t.__XHRSlave_makeRequest = y(Xh.Sf, Xh);
t.__XHRSlave_dispose = y(Xh.yf, Xh);
function Yh() {
}
Yh.prototype.je = function() {
  return Boolean(Number((new Y(document.location)).L.get("httpStreaming", "0"))) ? 2 : 1
};
var Zh = W("ljstream.logger");
window.onerror = function(a, b, c) {
  S(Zh, "window.onerror: message: " + H(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function $h() {
  this.Qe = new tb
}
$h.prototype.kg = function(a, b) {
  Zh.info("streamReset: reasonString=" + H(a) + ", applicationLevel=" + b);
  bi("Disconnected from server.  Try reloading this page.");
  ci = k
};
function di(a) {
  Zh.info("Sending preferences to server");
  var b;
  b = new Hg;
  b.n[1] = P("include_russian_posts").checked;
  b.La && (b.La[1] = j);
  b = a.Qe.Wb(b);
  rg(a.D, [(new wb(i)).Wb([2, b])])
}
$h.prototype.lg = function(a) {
  var a = vb(a), b = a[1];
  if(1 == a[0]) {
    var c = this.Qe.Zc(Gg.Hb(), b), a = mb(c, 1), b = mb(c, 2), c = mb(c, 3);
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
    a = yd("span", {}, yd("a", {href:b, "class":"ljpost-title-link"}, a), yd("span", {}, "\u00a0"), c);
    ei(a)
  }
};
$h.prototype.reset = function(a) {
  Zh.info("resetting with reason: " + a);
  this.D.reset(a)
};
var ci = k, fi = new gd(t.window);
function bi(a) {
  a = yd("span", {"class":"important-message"}, a);
  ei(a)
}
function gi() {
  ci && (ci.reset("idle timeout fired"), ci = k, bi("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var hi = k;
function ii() {
  hi != k && fi.I.clearTimeout(hi);
  ci && (hi = fi.I.setTimeout(gi, 6E5))
}
O(window, ["click", "focus", "keydown", "keypress"], ii, j);
var xd = new sd, ji = 0;
function ei(a) {
  a = yd("div", {"class":"row-" + (0 == ji % 2 ? "even" : "odd")}, yd("nobr", {}, a));
  P("ljstream-container-inner").appendChild(a);
  ji += 1;
  var b;
  if(b = Fg) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !K && "CSS1Compat" == d.compatMode ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new qd(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = wd().height;
    b = !(a + b <= c + d)
  }
  b && (a = wd().height, window.scrollBy(0, Math.round(a / 2) + 80))
}
function ki() {
  O(t, "load", function() {
    window.scrollTo(0, 0)
  });
  O(P("include_russian_posts"), "click", function() {
    di(ci)
  });
  Fg = j;
  O(P("automatic_scroll"), "click", function(a) {
    Fg = a.target.checked
  });
  var a = new Eh("Clear posts");
  th(a, "clear-posts-button");
  Yd(a, P("prefs"));
  O(a, "action", function() {
    P("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = P("ljstream-container");
  a.style.marginTop = P("demo-header").offsetHeight + "px";
  P("demo-header").style.width = "9000px";
  var b = yd("div", {id:"ljstream-container-inner"});
  a.appendChild(b)
}
function li() {
  ye().rb(qe);
  if("1" == (new Y(document.location)).L.get("logging")) {
    var a = new Yg("main");
    a.Ec(j);
    a.Pa()
  }
  Zh.info("Logger works.");
  ki();
  a = new Yh;
  ci = new $h;
  ii();
  var b = (new Y(document.location)).L, c = "http" != b.get("mode");
  var d = Boolean(Number(b.get("useSub", "1"))), b = new Y(document.location);
  c ? c = new eg("/httpface/", b.X, t.__demo_mainSocketPort) : (d ? (c = t.__demo_shared_domain, b = b.H(), uf(b, "_____random_____." + c)) : b = b.H(), wf(b, "/httpface/"), xf(b, "", i), c = new gg(b.toString().replace("_____random_____", "%random%")));
  a = new lg(c, a, fi);
  c = ci;
  a.zd = y(c.lg, c);
  a.onreset = y(c.kg, c);
  ci.D = a;
  c = ci;
  rg(c.D, ["subprotocol:ljstream"]);
  di(c);
  a.start()
}
var mi = "__ljstream_init".split("."), ni = t;
!(mi[0] in ni) && ni.execScript && ni.execScript("var " + mi[0]);
for(var oi;mi.length && (oi = mi.shift());) {
  !mi.length && ga(li) ? ni[oi] = li : ni = ni[oi] ? ni[oi] : ni[oi] = {}
}
;})();
