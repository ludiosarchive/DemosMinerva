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
  a.cb = function() {
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
function B(a, b) {
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
ta = {ia:function(a, b) {
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
    d += b.ia.apply(t, c[e])
  }
  return d || a
}
;function C(a) {
  this.stack = Error().stack || "";
  a && (this.message = "" + a)
}
B(C, Error);
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
B(Ha, C);
Ha.prototype.name = "AssertionError";
function Ia(a, b) {
  f(new Ha("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ja(a, b, c) {
  this.u = a;
  this.B = b;
  this.vd = c.name;
  this.hb = !!c.wh;
  this.Fb = c.ab;
  this.Ke = c.type;
  this.ge = m;
  switch(this.Fb) {
    case Ka:
    ;
    case La:
    ;
    case Ma:
    ;
    case Na:
    ;
    case Oa:
      this.ge = j
  }
}
var Ka = 3, La = 4, Ma = 6, Na = 16, Oa = 18;
function Pa(a) {
  return 11 == a.Fb || 10 == a.Fb
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
;var F = Array.prototype, Wa = F.indexOf ? function(a, b, c) {
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
}, Xa = F.forEach ? function(a, b, c) {
  F.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
}, Ya = F.map ? function(a, b, c) {
  return F.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), g = v(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (e[h] = b.call(c, g[h], h, a))
  }
  return e
}, Za = F.some ? function(a, b, c) {
  return F.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && b.call(c, e[g], g, a)) {
      return j
    }
  }
  return m
}, $a = F.every ? function(a, b, c) {
  return F.every.call(a, b, c)
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
function bb(a, b) {
  var c = Wa(a, b);
  0 <= c && F.splice.call(a, c, 1)
}
function cb(a) {
  return F.concat.apply(F, arguments)
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
  F.splice.apply(a, gb(arguments, 1))
}
function gb(a, b, c) {
  return 2 >= arguments.length ? F.slice.call(a, b) : F.slice.call(a, b, c)
}
function hb(a, b) {
  F.sort.call(a, b || ib)
}
function ib(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function jb(a, b, c) {
  this.Ie = a;
  this.vd = b.name || k;
  this.ta = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.ta[b.B] = b
  }
}
function kb(a) {
  a = Ra(a.ta);
  hb(a, function(a, c) {
    return a.B - c.B
  });
  return a
}
;function lb() {
  this.m = {};
  this.$a = this.constructor.$a;
  var a = this.$a.ta, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.ta = b;
  this.Ka = this.qd = k
}
function mb(a, b) {
  for(var c in a.m) {
    a.ta[c] || b.call(a, Number(c), a.m[c])
  }
}
s = lb.prototype;
s.Gb = o("$a");
s.get = function(a, b) {
  return nb(this, a.B, b)
};
s.set = function(a, b) {
  var c = a.B;
  this.m[c] = b;
  this.Ka && (this.Ka[c] = j)
};
s.add = function(a, b) {
  var c = a.B;
  this.m[c] || (this.m[c] = []);
  this.m[c].push(b)
};
s.clear = function(a) {
  delete this.m[a.B]
};
s.j = function(a) {
  if(!a || this.constructor != a.constructor) {
    return m
  }
  for(var b = kb(this.Gb()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(ob(this, d.B) != ob(a, d.B)) {
      return m
    }
    if(ob(this, d.B)) {
      var e = Pa(d), g = d.B, h = this.m[g], g = a.m[g];
      if(d.hb) {
        if(h.length != g.length) {
          return m
        }
        for(d = 0;d < h.length;d++) {
          if(!(e ? h[d].j(g[d]) : h[d] == g[d])) {
            return m
          }
        }
      }else {
        if(!(e ? h.j(g) : h == g)) {
          return m
        }
      }
    }
  }
  return j
};
s.F = function() {
  for(var a = new this.constructor, b = kb(a.Gb()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete a.m[d.B];
    if(ob(this, d.B)) {
      var e = Pa(d);
      if(d.hb) {
        var g;
        g = d.B;
        pb(this, this.ta[g]);
        g = this.m[g] || [];
        for(var h = 0;h < g.length;h++) {
          a.add(d, e ? g[h].F() : g[h])
        }
      }else {
        g = this.get(d), a.set(d, e ? g.F() : g)
      }
    }
  }
  return a
};
function ob(a, b) {
  return b in a.m && ga(a.m[b]) && a.m[b] !== k
}
function pb(a, b) {
  if(a.qd) {
    var c = b.B;
    if(!(c in a.Ka)) {
      var d = a.m, e;
      e = a.qd;
      var g = a.m[c];
      if(g == k) {
        e = g
      }else {
        if(b.hb) {
          var h = [];
          u(g);
          for(var l = 0;l < g.length;l++) {
            h[l] = e.kc(b, g[l])
          }
          e = h
        }else {
          e = e.kc(b, g)
        }
      }
      d[c] = e;
      a.Ka[c] = j
    }
  }
}
function nb(a, b, c) {
  var d = a.ta[b];
  pb(a, d);
  if(d.hb) {
    return c = c || 0, 0 <= c && qb(a, b), a.m[b][c]
  }
  u(a.m[b]);
  return b in a.m ? a.m[b] : k
}
function qb(a, b) {
  return a.ta[b].hb ? (ob(a, b) && u(a.m[b]), ob(a, b) ? a.m[b].length : 0) : ob(a, b) ? 1 : 0
}
function rb(a, b) {
  var c = [], d, e;
  for(e in b) {
    b.hasOwnProperty(e) && (0 == e ? d = b[0] : c.push(new Ja(a, e, b[e])))
  }
  a.$a = new jb(a, d, c);
  a.Gb = function() {
    return a.$a
  }
}
;function sb() {
}
sb.prototype.lc = function(a, b) {
  return Pa(a) ? this.Vb(b) : b
};
sb.prototype.$c = function(a) {
  new a.Ie;
  f(Error("Unimplemented"))
};
sb.prototype.kc = function(a, b) {
  if(Pa(a)) {
    return this.$c(a.Ke.$a, b)
  }
  if(!a.ge) {
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
function tb() {
}
B(tb, sb);
tb.prototype.$c = function(a, b) {
  var c = new a.Ie;
  c.qd = this;
  c.m = b;
  c.Ka = {};
  return c
};
function ub() {
}
B(ub, tb);
ub.prototype.Vb = function(a) {
  for(var b = kb(a.Gb()), c = [], d = 0;d < b.length;d++) {
    var e = b[d];
    if(ob(a, e.B)) {
      var g = e.B;
      if(e.hb) {
        c[g] = [];
        for(var h = 0;h < qb(a, e.B);h++) {
          c[g][h] = this.lc(e, a.get(e, h))
        }
      }else {
        c[g] = this.lc(e, a.get(e))
      }
    }
  }
  mb(a, function(a, b) {
    c[a] = b
  });
  return c
};
ub.prototype.lc = function(a, b) {
  return 8 == a.Fb ? b ? 1 : 0 : sb.prototype.lc.apply(this, arguments)
};
ub.prototype.kc = function(a, b) {
  return 8 == a.Fb ? 1 === b : sb.prototype.kc.apply(this, arguments)
};
function vb(a) {
  return x(a) || "object" == typeof a && x(a.call) && x(a.apply)
}
;function wb(a) {
  a = "" + a;
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  f(Error("Invalid JSON string: " + a))
}
function xb(a) {
  this.Cc = a
}
xb.prototype.Vb = function(a) {
  var b = [];
  yb(this, a, b);
  return b.join("")
};
function yb(a, b, c) {
  switch(typeof b) {
    case "string":
      zb(b, c);
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
          c.push(e), e = b[g], yb(a, a.Cc ? a.Cc.call(b, "" + g, e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" != typeof e && (c.push(d), zb(g, c), c.push(":"), yb(a, a.Cc ? a.Cc.call(b, g, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      f(Error("Unknown type: " + typeof b))
  }
}
var Ab = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, Bb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function zb(a, b) {
  b.push('"', a.replace(Bb, function(a) {
    if(a in Ab) {
      return Ab[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return Ab[a] = e + b.toString(16)
  }), '"')
}
;function Cb(a, b, c) {
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
        zb(a, b)
      }else {
        if(vb(a.p)) {
          a.p(b, c)
        }else {
          if(vb(a.nf)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if("array" == d) {
                d = a.length;
                b.push("[");
                for(var e = "", g = 0;g < d;g++) {
                  b.push(e), Cb(a[g], b, c), e = ", "
                }
                b.push("]")
              }else {
                if("object" == d) {
                  if(ia(a) && "function" == typeof a.valueOf) {
                    b.push("new Date(", "" + a.valueOf(), ")")
                  }else {
                    for(var d = Sa(a).concat(Ua), e = {}, h = g = 0;h < d.length;) {
                      var l = d[h++], n = ja(l) ? "o" + ka(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(e, n) || (e[n] = j, d[g++] = l)
                    }
                    d.length = g;
                    b.push("{");
                    e = "";
                    for(h = 0;h < d.length;h++) {
                      g = d[h], Object.prototype.hasOwnProperty.call(a, g) && (l = a[g], b.push(e), zb(g, b), b.push(": "), Cb(l, b, c), e = ", ")
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
  Cb(a, b, c)
}
function H(a) {
  var b = [];
  G(a, b, i);
  return b.join("")
}
;function Db(a) {
  if("function" == typeof a.t) {
    a = a.t()
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
function Eb(a) {
  if("function" == typeof a.J) {
    return a.J()
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
function Fb(a) {
  if("function" == typeof a.da) {
    return a.da()
  }
  if("function" != typeof a.J) {
    if(ha(a) || v(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return Sa(a)
  }
}
function Gb(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ha(a) || v(a)) {
      Xa(a, b, c)
    }else {
      for(var d = Fb(a), e = Eb(a), g = e.length, h = 0;h < g;h++) {
        b.call(c, e[h], d && d[h], a)
      }
    }
  }
}
function Hb(a, b) {
  if("function" == typeof a.every) {
    return a.every(b, i)
  }
  if(ha(a) || v(a)) {
    return $a(a, b, i)
  }
  for(var c = Fb(a), d = Eb(a), e = d.length, g = 0;g < e;g++) {
    if(!b.call(i, d[g], c && c[g], a)) {
      return m
    }
  }
  return j
}
;function I(a, b) {
  this.n = {};
  this.xc = {};
  var c = arguments.length;
  if(1 < c) {
    c % 2 && f(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.Pc(a)
  }
}
s = I.prototype;
s.g = 0;
s.t = o("g");
s.J = function() {
  var a = [], b;
  for(b in this.n) {
    ":" == b.charAt(0) && a.push(this.n[b])
  }
  return a
};
s.da = function() {
  var a = [], b;
  for(b in this.n) {
    ":" == b.charAt(0) && a.push(Ib(this, b))
  }
  return a
};
s.V = function(a) {
  return":" + a in this.n
};
s.ec = function(a) {
  for(var b in this.n) {
    if(":" == b.charAt(0) && this.n[b] == a) {
      return j
    }
  }
  return m
};
s.j = function(a, b) {
  if(this === a) {
    return j
  }
  if(this.g != a.t()) {
    return m
  }
  var c = b || Jb, d;
  for(d in this.n) {
    if(d = Ib(this, d), !c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function Jb(a, b) {
  return a === b
}
s.Pa = function() {
  return 0 == this.g
};
s.clear = function() {
  this.n = {};
  this.g = 0;
  this.xc = {}
};
s.remove = function(a) {
  a = ":" + a;
  return Ta(this.n, a) ? (delete this.xc[a], this.g--, j) : m
};
s.get = function(a, b) {
  var c = ":" + a;
  return c in this.n ? this.n[c] : b
};
s.set = function(a, b) {
  var c = ":" + a;
  c in this.n || (this.g++, "number" == typeof a && (this.xc[c] = j));
  this.n[c] = b
};
s.Pc = function(a) {
  var b;
  a instanceof I ? (b = a.da(), a = a.J()) : (b = Sa(a), a = Ra(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
s.F = function() {
  return new I(this)
};
function Ib(a, b) {
  var c = b.substring(1);
  return a.xc[b] ? Number(c) : c
}
;function Kb(a) {
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
;function Lb(a, b) {
  this.Xa = a;
  this.Ta = b
}
Lb.prototype.j = function(a) {
  return a instanceof Lb && this.Xa == a.Xa && this.Ta.join(",") == a.Ta
};
Lb.prototype.p = function(a, b) {
  a.push("new SACK(", "" + this.Xa, ", ");
  G(this.Ta, a, b);
  a.push(")")
};
function Mb() {
  this.S = new I
}
s = Mb.prototype;
s.Ja = -1;
s.P = 0;
s.append = function(a) {
  var b = Kb(a);
  this.S.set(this.Ja + 1, [a, b]);
  this.Ja += 1;
  this.P += b
};
s.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
s.p = function(a) {
  a.push("<Queue with ", "" + this.S.t(), " item(s), counter=#", "" + this.Ja, ", size=", "" + this.P, ">")
};
function Nb(a) {
  a = a.S.da();
  hb(a);
  return a
}
function Ob() {
  this.Ia = new I
}
Ob.prototype.Qa = -1;
Ob.prototype.P = 0;
function Pb(a) {
  var b = a.Ia.da();
  hb(b);
  return new Lb(a.Qa, b)
}
var Qb = {};
function Rb() {
  return j
}
;var Sb, Tb, Ub, Vb, Wb;
function Xb() {
  return t.navigator ? t.navigator.userAgent : k
}
Wb = Vb = Ub = Tb = Sb = m;
var Yb;
if(Yb = Xb()) {
  var Zb = t.navigator;
  Sb = 0 == Yb.indexOf("Opera");
  Tb = !Sb && -1 != Yb.indexOf("MSIE");
  Vb = (Ub = !Sb && -1 != Yb.indexOf("WebKit")) && -1 != Yb.indexOf("Mobile");
  Wb = !Sb && !Ub && "Gecko" == Zb.product
}
var $b = Sb, J = Tb, ac = Wb, K = Ub, bc = Vb, cc = t.navigator, dc = -1 != (cc && cc.platform || "").indexOf("Mac"), ec;
a: {
  var fc = "", gc;
  if($b && t.opera) {
    var hc = t.opera.version, fc = "function" == typeof hc ? hc() : hc
  }else {
    if(ac ? gc = /rv\:([^\);]+)(\)|;)/ : J ? gc = /MSIE\s+([^\);]+)(\)|;)/ : K && (gc = /WebKit\/(\S+)/), gc) {
      var ic = gc.exec(Xb()), fc = ic ? ic[1] : ""
    }
  }
  if(J) {
    var jc, kc = t.document;
    jc = kc ? kc.documentMode : i;
    if(jc > parseFloat(fc)) {
      ec = "" + jc;
      break a
    }
  }
  ec = fc
}
var lc = {};
function L(a) {
  return lc[a] || (lc[a] = 0 <= Ga(ec, a))
}
var mc = {};
function nc() {
  return mc[9] || (mc[9] = J && document.documentMode && 9 <= document.documentMode)
}
;function oc() {
}
var pc = 0;
s = oc.prototype;
s.key = 0;
s.Sa = m;
s.Tc = m;
s.Oa = function(a, b, c, d, e, g) {
  x(a) ? this.ze = j : a && a.handleEvent && x(a.handleEvent) ? this.ze = m : f(Error("Invalid listener argument"));
  this.kb = a;
  this.Ue = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.qc = g;
  this.Tc = m;
  this.key = ++pc;
  this.Sa = m
};
s.handleEvent = function(a) {
  return this.ze ? this.kb.call(this.qc || this.src, a) : this.kb.handleEvent.call(this.kb, a)
};
var qc = !J || nc(), rc = !J || nc(), sc = J && !L("8");
!K || L("528");
ac && L("1.9b") || J && L("8") || $b && L("9.5") || K && L("528");
!ac || L("8");
var tc = {Ag:"click", Fg:"dblclick", Zg:"mousedown", dh:"mouseup", bh:"mouseover", ah:"mouseout", $g:"mousemove", nh:"selectstart", Ug:"keypress", Tg:"keydown", Vg:"keyup", yg:"blur", Ng:"focus", Gg:"deactivate", Og:J ? "focusin" : "DOMFocusIn", Pg:J ? "focusout" : "DOMFocusOut", zg:"change", mh:"select", oh:"submit", Sg:"input", ih:"propertychange", Kg:"dragstart", Hg:"dragenter", Jg:"dragover", Ig:"dragleave", Lg:"drop", sh:"touchstart", rh:"touchmove", qh:"touchend", ph:"touchcancel", Cg:"contextmenu", 
Mg:"error", Rg:"help", Wg:"load", Xg:"losecapture", jh:"readystatechange", kh:"resize", lh:"scroll", uh:"unload", Qg:"hashchange", eh:"pagehide", fh:"pageshow", hh:"popstate", Dg:"copy", gh:"paste", Eg:"cut", vg:"beforecopy", wg:"beforecut", xg:"beforepaste", Yg:"message", Bg:"connect", th:K ? "webkitTransitionEnd" : $b ? "oTransitionEnd" : "transitionend"};
function M() {
}
M.prototype.ba = m;
M.prototype.b = function() {
  this.ba || (this.ba = j, this.c())
};
M.prototype.c = function() {
  this.wf && uc.apply(k, this.wf)
};
function uc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? uc.apply(k, d) : d && "function" == typeof d.b && d.b()
  }
}
;function vc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
B(vc, M);
s = vc.prototype;
s.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
s.Ra = m;
s.Sb = j;
s.stopPropagation = function() {
  this.Ra = j
};
s.preventDefault = function() {
  this.Sb = m
};
function wc(a) {
  a.stopPropagation()
}
;function xc(a) {
  xc[" "](a);
  return a
}
xc[" "] = da;
function yc(a, b) {
  a && this.Oa(a, b)
}
B(yc, vc);
var Ac = [1, 4, 2];
s = yc.prototype;
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
s.Bd = m;
s.ka = k;
s.Oa = function(a, b) {
  var c = this.type = a.type;
  vc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(ac) {
      var e;
      a: {
        try {
          xc(d.nodeName);
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
  this.Bd = dc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ka = a;
  delete this.Sb;
  delete this.Ra
};
function Bc(a) {
  return qc ? 0 == a.ka.button : "click" == a.type ? j : !!(a.ka.button & Ac[0])
}
s.stopPropagation = function() {
  yc.e.stopPropagation.call(this);
  this.ka.stopPropagation ? this.ka.stopPropagation() : this.ka.cancelBubble = j
};
s.preventDefault = function() {
  yc.e.preventDefault.call(this);
  var a = this.ka;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, sc) {
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
  yc.e.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ka = k
};
var Cc = {}, N = {}, Dc = {}, Ec = {};
function O(a, b, c, d, e) {
  if(b) {
    if(u(b)) {
      for(var g = 0;g < b.length;g++) {
        O(a, b[g], c, d, e)
      }
      return k
    }
    var d = !!d, h = N;
    b in h || (h[b] = {g:0, U:0});
    h = h[b];
    d in h || (h[d] = {g:0, U:0}, h.g++);
    var h = h[d], l = ka(a), n;
    h.U++;
    if(h[l]) {
      n = h[l];
      for(g = 0;g < n.length;g++) {
        if(h = n[g], h.kb == c && h.qc == e) {
          if(h.Sa) {
            break
          }
          return n[g].key
        }
      }
    }else {
      n = h[l] = [], h.g++
    }
    g = Fc();
    g.src = a;
    h = new oc;
    h.Oa(c, g, a, b, d, e);
    c = h.key;
    g.key = c;
    n.push(h);
    Cc[c] = h;
    Dc[l] || (Dc[l] = []);
    Dc[l].push(h);
    a.addEventListener ? (a == t || !a.ce) && a.addEventListener(b, g, d) : a.attachEvent(b in Ec ? Ec[b] : Ec[b] = "on" + b, g);
    return c
  }
  f(Error("Invalid event type"))
}
function Fc() {
  var a = Gc, b = rc ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Hc(a, b, c, d, e) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      Hc(a, b[g], c, d, e)
    }
    return k
  }
  a = O(a, b, c, d, e);
  Cc[a].Tc = j;
  return a
}
function Ic(a, b, c, d, e) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      Ic(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = Jc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].kb == c && a[g].capture == d && a[g].qc == e) {
          Kc(a[g].key);
          break
        }
      }
    }
  }
}
function Kc(a) {
  if(!Cc[a]) {
    return m
  }
  var b = Cc[a];
  if(b.Sa) {
    return m
  }
  var c = b.src, d = b.type, e = b.Ue, g = b.capture;
  c.removeEventListener ? (c == t || !c.ce) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in Ec ? Ec[d] : Ec[d] = "on" + d, e);
  c = ka(c);
  e = N[d][g][c];
  if(Dc[c]) {
    var h = Dc[c];
    bb(h, b);
    0 == h.length && delete Dc[c]
  }
  b.Sa = j;
  e.Me = j;
  Lc(d, g, c, e);
  delete Cc[a];
  return j
}
function Lc(a, b, c, d) {
  if(!d.wc && d.Me) {
    for(var e = 0, g = 0;e < d.length;e++) {
      d[e].Sa ? d[e].Ue.src = k : (e != g && (d[g] = d[e]), g++)
    }
    d.length = g;
    d.Me = m;
    0 == g && (delete N[a][b][c], N[a][b].g--, 0 == N[a][b].g && (delete N[a][b], N[a].g--), 0 == N[a].g && delete N[a])
  }
}
function Mc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Qa(Dc, function(a) {
      for(var e = a.length - 1;0 <= e;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          Kc(g.key), c++
        }
      }
    })
  }else {
    if(a = ka(a), Dc[a]) {
      for(var a = Dc[a], e = a.length - 1;0 <= e;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          Kc(g.key), c++
        }
      }
    }
  }
}
function Jc(a, b, c) {
  var d = N;
  return b in d && (d = d[b], c in d && (d = d[c], a = ka(a), d[a])) ? d[a] : k
}
function Nc(a, b, c, d, e) {
  var g = 1, b = ka(b);
  if(a[b]) {
    a.U--;
    a = a[b];
    a.wc ? a.wc++ : a.wc = 1;
    try {
      for(var h = a.length, l = 0;l < h;l++) {
        var n = a[l];
        n && !n.Sa && (g &= Oc(n, e) !== m)
      }
    }finally {
      a.wc--, Lc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Oc(a, b) {
  var c = a.handleEvent(b);
  a.Tc && Kc(a.key);
  return c
}
function Gc(a, b) {
  if(!Cc[a]) {
    return j
  }
  var c = Cc[a], d = c.type, e = N;
  if(!(d in e)) {
    return j
  }
  var e = e[d], g, h;
  if(!rc) {
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
    p = new yc;
    p.Oa(g, this);
    g = j;
    try {
      if(l) {
        for(var r = [], w = p.currentTarget;w;w = w.parentNode) {
          r.push(w)
        }
        h = e[j];
        h.U = h.g;
        for(var A = r.length - 1;!p.Ra && 0 <= A && h.U;A--) {
          p.currentTarget = r[A], g &= Nc(h, r[A], d, j, p)
        }
        if(n) {
          h = e[m];
          h.U = h.g;
          for(A = 0;!p.Ra && A < r.length && h.U;A++) {
            p.currentTarget = r[A], g &= Nc(h, r[A], d, m, p)
          }
        }
      }else {
        g = Oc(c, p)
      }
    }finally {
      r && (r.length = 0), p.b()
    }
    return g
  }
  d = new yc(b, this);
  try {
    g = Oc(c, d)
  }finally {
    d.b()
  }
  return g
}
var Pc = 0;
function Qc() {
}
B(Qc, M);
s = Qc.prototype;
s.ce = j;
s.zc = k;
s.Gd = aa("zc");
s.addEventListener = function(a, b, c, d) {
  O(this, a, b, c, d)
};
s.removeEventListener = function(a, b, c, d) {
  Ic(this, a, b, c, d)
};
s.dispatchEvent = function(a) {
  var b = a.type || a, c = N;
  if(b in c) {
    if(v(a)) {
      a = new vc(a, this)
    }else {
      if(a instanceof vc) {
        a.target = a.target || this
      }else {
        var d = a, a = new vc(b, this);
        Va(a, d)
      }
    }
    var d = 1, e, c = c[b], b = j in c, g;
    if(b) {
      e = [];
      for(g = this;g;g = g.zc) {
        e.push(g)
      }
      g = c[j];
      g.U = g.g;
      for(var h = e.length - 1;!a.Ra && 0 <= h && g.U;h--) {
        a.currentTarget = e[h], d &= Nc(g, e[h], a.type, j, a) && a.Sb != m
      }
    }
    if(m in c) {
      if(g = c[m], g.U = g.g, b) {
        for(h = 0;!a.Ra && h < e.length && g.U;h++) {
          a.currentTarget = e[h], d &= Nc(g, e[h], a.type, m, a) && a.Sb != m
        }
      }else {
        for(e = this;!a.Ra && e && g.U;e = e.zc) {
          a.currentTarget = e, d &= Nc(g, e, a.type, m, a) && a.Sb != m
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
  Qc.e.c.call(this);
  Mc(this);
  this.zc = k
};
var Rc = t.window;
Pc++;
Pc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Sc(a, b) {
  this.cc = [];
  this.Yd = a;
  this.ee = b || k
}
s = Sc.prototype;
s.ua = m;
s.Hb = m;
s.Nb = 0;
s.Jd = m;
s.sf = m;
s.Sc = 0;
s.cancel = function(a) {
  if(this.ua) {
    this.Rb instanceof Sc && this.Rb.cancel()
  }else {
    if(this.u) {
      var b = this.u;
      delete this.u;
      a ? b.cancel(a) : (b.Sc--, 0 >= b.Sc && b.cancel())
    }
    this.Yd ? this.Yd.call(this.ee, this) : this.Jd = j;
    this.ua || this.Db(new Tc)
  }
};
s.ae = function(a, b) {
  Uc(this, a, b);
  this.Nb--;
  0 == this.Nb && this.ua && Vc(this)
};
function Uc(a, b, c) {
  a.ua = j;
  a.Rb = c;
  a.Hb = !b;
  Vc(a)
}
function Wc(a) {
  a.ua && (a.Jd || f(new Xc), a.Jd = m)
}
s.ia = function(a) {
  Wc(this);
  Uc(this, j, a)
};
s.Db = function(a) {
  Wc(this);
  Uc(this, m, a)
};
function Yc(a, b) {
  Zc(a, b, k, i)
}
function Zc(a, b, c, d) {
  a.cc.push([b, c, d]);
  a.ua && Vc(a)
}
function $c(a, b) {
  Zc(a, b, b, i)
}
function ad(a) {
  return Za(a.cc, function(a) {
    return x(a[1])
  })
}
function Vc(a) {
  a.Rd && a.ua && ad(a) && (t.clearTimeout(a.Rd), delete a.Rd);
  a.u && (a.u.Sc--, delete a.u);
  for(var b = a.Rb, c = m, d = m;a.cc.length && 0 == a.Nb;) {
    var e = a.cc.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.Hb ? h : g) {
      try {
        var l = g.call(e || a.ee, b);
        ga(l) && (a.Hb = a.Hb && (l == b || l instanceof Error), a.Rb = b = l);
        b instanceof Sc && (d = j, a.Nb++)
      }catch(n) {
        b = n, a.Hb = j, ad(a) || (c = j)
      }
    }
  }
  a.Rb = b;
  d && a.Nb && (Zc(b, y(a.ae, a, j), y(a.ae, a, m)), b.sf = j);
  c && (a.Rd = t.setTimeout(function() {
    ga(b.message) && b.stack && (b.message += "\n" + b.stack);
    f(b)
  }, 0))
}
function bd(a) {
  var b = new Sc;
  b.ia(a);
  return b
}
function cd(a) {
  var b = new Sc;
  b.Db(a);
  return b
}
function Xc() {
  C.call(this)
}
B(Xc, C);
Xc.prototype.message = "Already called";
function Tc() {
  C.call(this)
}
B(Tc, C);
Tc.prototype.message = "Deferred was cancelled";
function dd(a) {
  this.G = a;
  this.fc = [];
  this.he = [];
  this.rf = y(this.pg, this)
}
dd.prototype.Od = k;
function ed(a, b, c, d) {
  a.fc.push([b, c, d]);
  a.Od == k && (a.Od = a.G.setTimeout(a.rf, 0))
}
dd.prototype.pg = function() {
  this.Od = k;
  var a = this.fc;
  this.fc = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], e = c[1], c = c[2];
    try {
      d.apply(e, c)
    }catch(g) {
      this.G.setTimeout(function() {
        f(g)
      }, 0)
    }
  }
  if(0 == this.fc.length) {
    a = this.he;
    this.he = [];
    for(b = 0;b < a.length;b++) {
      a[b].ia(k)
    }
  }
};
var fd = new dd(t.window);
function gd(a, b) {
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
        a.push('<property id="', d, '">'), gd(a, b[d]), a.push("</property>")
      }
      a.push("</array>");
      break;
    case "object":
      if("function" == typeof b.getFullYear) {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && "function" != fa(b[c]) && (a.push('<property id="', D(c), '">'), gd(a, b[c]), a.push("</property>"))
        }
        a.push("</object>")
      }
      break;
    default:
      a.push("<null/>")
  }
}
function hd(a, b) {
  var c = ['<invoke name="', a, '" returntype="javascript">'], d = c, e = arguments;
  d.push("<arguments>");
  for(var g = e.length, h = 1;h < g;h++) {
    gd(d, e[h])
  }
  d.push("</arguments>");
  c.push("</invoke>");
  return c.join("")
}
;function id() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ z()).toString(36)
}
function jd(a) {
  return a.substr(0, a.length - 1)
}
var kd = /^(0|[1-9]\d*)$/, ld = /^(0|\-?[1-9]\d*)$/;
function md(a) {
  var b = nd;
  return kd.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function od(a) {
  this.n = new I;
  a && this.Pc(a)
}
function pd(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + ka(a) : b.substr(0, 1) + a
}
s = od.prototype;
s.t = function() {
  return this.n.t()
};
s.add = function(a) {
  this.n.set(pd(a), a)
};
s.Pc = function(a) {
  for(var a = Eb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
s.Dd = function(a) {
  for(var a = Eb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
s.remove = function(a) {
  return this.n.remove(pd(a))
};
s.clear = function() {
  this.n.clear()
};
s.Pa = function() {
  return this.n.Pa()
};
s.contains = function(a) {
  return this.n.V(pd(a))
};
s.J = function() {
  return this.n.J()
};
s.F = function() {
  return new od(this)
};
s.j = function(a) {
  return this.t() == Db(a) && qd(this, a)
};
function qd(a, b) {
  var c = Db(b);
  if(a.t() > c) {
    return m
  }
  !(b instanceof od) && 5 < c && (b = new od(b));
  return Hb(a, function(a) {
    if("function" == typeof b.contains) {
      a = b.contains(a)
    }else {
      if("function" == typeof b.ec) {
        a = b.ec(a)
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
;function rd(a) {
  return sd(a || arguments.callee.caller, [])
}
function sd(a, b) {
  var c = [];
  if(ab(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(td(a) + "(");
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
            g = (g = td(g)) ? g : "[fn]";
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
        c.push(sd(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function td(a) {
  if(ud[a]) {
    return ud[a]
  }
  a = "" + a;
  if(!ud[a]) {
    var b = /function ([^\(]+)/.exec(a);
    ud[a] = b ? b[1] : "[Anonymous]"
  }
  return ud[a]
}
var ud = {};
function vd(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
vd.prototype.dd = k;
vd.prototype.cd = k;
var wd = 0;
vd.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || wd++;
  this.ef = d || z();
  this.Y = a;
  this.Je = b;
  this.Ee = c;
  delete this.dd;
  delete this.cd
};
vd.prototype.qb = aa("Y");
function xd(a) {
  this.vd = a
}
xd.prototype.u = k;
xd.prototype.Y = k;
xd.prototype.qa = k;
xd.prototype.Jb = k;
function P(a, b) {
  this.name = a;
  this.value = b
}
P.prototype.toString = o("name");
var yd = new P("SHOUT", 1200), zd = new P("SEVERE", 1E3), Ad = new P("WARNING", 900), Bd = new P("INFO", 800), Cd = new P("CONFIG", 700), Dd = new P("FINE", 500), Ed = new P("FINEST", 300), Fd = new P("ALL", 0), Gd = [new P("OFF", Infinity), yd, zd, Ad, Bd, Cd, Dd, new P("FINER", 400), Ed, Fd], Hd = k;
function Id(a) {
  if(!Hd) {
    Hd = {};
    for(var b = 0, c;c = Gd[b];b++) {
      Hd[c.value] = c, Hd[c.name] = c
    }
  }
  return Hd[a] || k
}
s = xd.prototype;
s.getParent = o("u");
s.qb = aa("Y");
function Jd(a) {
  if(a.Y) {
    return a.Y
  }
  if(a.u) {
    return Jd(a.u)
  }
  Ia("Root logger has no level set.");
  return k
}
s.log = function(a, b, c) {
  if(a.value >= Jd(this).value) {
    a = this.Jf(a, b, c);
    b = "log:" + a.Je;
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.Jb) {
        for(var e = 0, g = i;g = c.Jb[e];e++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
s.Jf = function(a, b, c) {
  var d = new vd(a, "" + b, this.vd);
  if(c) {
    d.dd = c;
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
          n = c.lineNumber || c.vh || "Not available"
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
      e = "Message: " + D(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + D(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + D(rd(g) + "-> ")
    }catch(A) {
      e = "Exception trying to expose exception! You win, we lose. " + A
    }
    d.cd = e
  }
  return d
};
function Q(a, b) {
  a.log(zd, b, i)
}
function R(a, b) {
  a.log(Ad, b, i)
}
s.info = function(a, b) {
  this.log(Bd, a, b)
};
function S(a, b) {
  a.log(Dd, b, i)
}
function T(a, b) {
  a.log(Ed, b, i)
}
var Kd = {}, Ld = k;
function Md() {
  Ld || (Ld = new xd(""), Kd[""] = Ld, Ld.qb(Cd))
}
function Nd() {
  Md();
  return Ld
}
function U(a) {
  Md();
  var b;
  if(!(b = Kd[a])) {
    b = new xd(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = U(a.substr(0, c));
    c.qa || (c.qa = {});
    c.qa[d] = b;
    b.u = c;
    Kd[a] = b
  }
  return b
}
;function Od(a, b) {
  this.ea = "_" + id();
  this.Kc = a;
  this.Da = b;
  this.Ha = a.Ha
}
B(Od, M);
s = Od.prototype;
s.lb = j;
s.Xc = m;
s.a = U("cw.net.FlashSocket");
s.p = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.ea);
  a.push("'>")
};
function Pd(a, b, c) {
  "frames" == b ? (a = a.Da, Qd(a.D), Rd(a.D, c)) : "stillreceiving" == b ? (c = a.Da, T(c.a, "onstillreceiving"), Qd(c.D)) : "connect" == b ? (c = a.Da, c.a.info("onconnect"), Qd(c.D), a = c.xb, c.xb = k, a.length && (T(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.Hc.ac(a))) : "close" == b ? (a.lb = m, a.b()) : "ioerror" == b ? (a.lb = m, b = a.Da, R(b.a, "onioerror: " + H(c)), Td(b.D, m), a.b()) : "securityerror" == b ? (a.lb = m, b = a.Da, R(b.a, "onsecurityerror: " + H(c)), 
  Td(b.D, m), a.b()) : f(Error("bad event: " + b))
}
function Ud(a) {
  a.Xc = j;
  a.lb = m;
  a.b()
}
s.Vc = function(a, b) {
  try {
    var c = this.Ha.CallFunction(hd("__FC_connect", this.ea, a, b, "<int32/>\n"))
  }catch(d) {
    return Q(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), Ud(this)
  }
  '"OK"' != c && f(Error("__FC_connect failed? ret: " + c))
};
s.ac = function(a) {
  try {
    var b = this.Ha.CallFunction(hd("__FC_writeFrames", this.ea, a))
  }catch(c) {
    return Q(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), Ud(this)
  }
  '"OK"' != b && ('"no such instance"' == b ? (R(this.a, "Flash no longer knows of " + this.ea + "; disposing."), this.b()) : f(Error("__FC_writeFrames failed? ret: " + b)))
};
s.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.lb);
  Od.e.c.call(this);
  var a = this.Ha;
  delete this.Ha;
  if(this.lb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(hd("__FC_close", this.ea)))
    }catch(b) {
      Q(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.Xc = j
    }
  }
  if(this.Xc) {
    a = this.Da, R(a.a, "oncrash"), Td(a.D, j)
  }else {
    this.Da.onclose()
  }
  delete this.Da;
  delete this.Kc.fb[this.ea]
};
function Vd(a, b) {
  this.C = a;
  this.Ha = b;
  this.fb = {};
  this.Uc = "__FST_" + id();
  t[this.Uc] = y(this.zf, this);
  var c = b.CallFunction(hd("__FC_setCallbackFunc", this.Uc));
  '"OK"' != c && f(Error("__FC_setCallbackFunc failed? ret: " + c))
}
B(Vd, M);
s = Vd.prototype;
s.a = U("cw.net.FlashSocketTracker");
s.p = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  G(this.fb, a, b);
  a.push(">")
};
s.Yc = function(a) {
  a = new Od(this, a);
  return this.fb[a.ea] = a
};
s.xf = function(a, b, c, d) {
  var e = this.fb[a];
  e ? "frames" == b && d ? (Pd(e, "ioerror", "FlashConnector hadError while handling data."), e.b()) : Pd(e, b, c) : R(this.a, "Cannot dispatch because we have no instance: " + H([a, b, c, d]))
};
s.zf = function(a, b, c, d) {
  try {
    ed(this.C, this.xf, this, [a, b, c, d])
  }catch(e) {
    t.window.setTimeout(function() {
      f(e)
    }, 0)
  }
};
s.c = function() {
  Vd.e.c.call(this);
  for(var a = Ra(this.fb);a.length;) {
    a.pop().b()
  }
  delete this.fb;
  delete this.Ha;
  t[this.Uc] = i
};
function Wd(a) {
  this.D = a;
  this.xb = []
}
B(Wd, M);
s = Wd.prototype;
s.a = U("cw.net.FlashSocketConduit");
s.ac = function(a) {
  this.xb ? (T(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.xb.push.apply(this.xb, a)) : (T(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.Hc.ac(a))
};
s.Vc = function(a, b) {
  this.Hc.Vc(a, b)
};
s.onclose = function() {
  this.a.info("onclose");
  Td(this.D, m)
};
s.c = function() {
  this.a.info("in disposeInternal.");
  Wd.e.c.call(this);
  this.Hc.b();
  delete this.D
};
function Xd() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;var nd = Math.pow(2, 53);
var Yd = {nf:q("<cw.eq.Wildcard>")};
function Zd(a) {
  return"boolean" == a || "number" == a || "null" == a || "undefined" == a || "string" == a
}
function $d(a, b, c) {
  var d = fa(a), e = fa(b);
  if(a == Yd || b == Yd) {
    return j
  }
  if(a != k && "function" == typeof a.j) {
    return c && c.push("running custom equals function on left object"), a.j(b, c)
  }
  if(b != k && "function" == typeof b.j) {
    return c && c.push("running custom equals function on right object"), b.j(a, c)
  }
  if(Zd(d) || Zd(e)) {
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
                if(!$d(a[d], b[d], c)) {
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
          if(a.mf == Rb && b.mf == Rb) {
            a: {
              c && c.push("descending into object");
              for(var g in a) {
                if(!(g in b)) {
                  c && c.push("property " + g + " missing on right object");
                  a = m;
                  break a
                }
                if(!$d(a[g], b[g], c)) {
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
B(V, C);
V.prototype.name = "cw.net.InvalidFrame";
function ae() {
  var a = [];
  this.X(a);
  return a.join("")
}
function be() {
}
be.prototype.j = function(a, b) {
  return!(a instanceof be) ? m : $d(ce(this), ce(a), b)
};
be.prototype.p = function(a, b) {
  a.push("<HelloFrame properties=");
  G(ce(this), a, b);
  a.push(">")
};
function ce(a) {
  return[a.tb, a.Te, a.ue, a.Xe, a.Yb, a.Md, a.Le, a.He, a.td, a.Fe, a.hf, a.df, a.$, a.vc]
}
be.prototype.R = ae;
be.prototype.X = function(a) {
  var b = {};
  b.tnum = this.tb;
  b.ver = this.Te;
  b.format = this.ue;
  b["new"] = this.Xe;
  b.id = this.Yb;
  b.ming = this.Md;
  b.pad = this.Le;
  b.maxb = this.He;
  ga(this.td) && (b.maxt = this.td);
  b.maxia = this.Fe;
  b.tcpack = this.hf;
  b.eeds = this.df;
  b.sack = this.$ instanceof Lb ? jd((new de(this.$)).R()) : this.$;
  b.seenack = this.vc instanceof Lb ? jd((new de(this.vc)).R()) : this.vc;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new xb(i)).Vb(b), "H")
};
function ee(a) {
  this.sb = a
}
ee.prototype.j = function(a) {
  return a instanceof ee && this.sb == a.sb
};
ee.prototype.p = function(a, b) {
  a.push("new StringFrame(");
  G(this.sb, a, b);
  a.push(")")
};
ee.prototype.R = ae;
ee.prototype.X = function(a) {
  a.push(this.sb, " ")
};
function fe(a) {
  this.dc = a
}
fe.prototype.j = function(a) {
  return a instanceof fe && this.dc == a.dc
};
fe.prototype.p = function(a, b) {
  a.push("new CommentFrame(");
  G(this.dc, a, b);
  a.push(")")
};
fe.prototype.R = ae;
fe.prototype.X = function(a) {
  a.push(this.dc, "^")
};
function ge(a) {
  this.Ub = a
}
ge.prototype.j = function(a) {
  return a instanceof ge && this.Ub == a.Ub
};
ge.prototype.p = function(a) {
  a.push("new SeqNumFrame(", "" + this.Ub, ")")
};
ge.prototype.R = ae;
ge.prototype.X = function(a) {
  a.push("" + this.Ub, "N")
};
function he(a) {
  var b = a.split("|");
  if(2 != b.length) {
    return k
  }
  a: {
    var c = b[1], a = nd;
    if(ld.test(c) && (c = parseInt(c, 10), -1 <= c && c <= a)) {
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
      var g = md(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Lb(a, c)
}
function de(a) {
  this.$ = a
}
de.prototype.j = function(a, b) {
  return a instanceof de && this.$.j(a.$, b)
};
de.prototype.p = function(a, b) {
  a.push("new SackFrame(");
  G(this.$, a, b);
  a.push(")")
};
de.prototype.R = ae;
de.prototype.X = function(a) {
  var b = this.$;
  a.push(b.Ta.join(","), "|", "" + b.Xa);
  a.push("A")
};
function ie(a) {
  this.Lb = a
}
ie.prototype.j = function(a, b) {
  return a instanceof ie && this.Lb.j(a.Lb, b)
};
ie.prototype.p = function(a, b) {
  a.push("new StreamStatusFrame(");
  G(this.Lb, a, b);
  a.push(")")
};
ie.prototype.R = ae;
ie.prototype.X = function(a) {
  var b = this.Lb;
  a.push(b.Ta.join(","), "|", "" + b.Xa);
  a.push("T")
};
function je() {
}
je.prototype.p = function(a) {
  a.push("new StreamCreatedFrame()")
};
je.prototype.j = function(a) {
  return a instanceof je
};
je.prototype.R = ae;
je.prototype.X = function(a) {
  a.push("C")
};
function ke() {
}
ke.prototype.p = function(a) {
  a.push("new YouCloseItFrame()")
};
ke.prototype.j = function(a) {
  return a instanceof ke
};
ke.prototype.R = ae;
ke.prototype.X = function(a) {
  a.push("Y")
};
function le(a, b) {
  this.Pb = a;
  this.wb = b
}
le.prototype.j = function(a) {
  return a instanceof le && this.Pb == a.Pb && this.wb == a.wb
};
le.prototype.p = function(a, b) {
  a.push("new ResetFrame(");
  G(this.Pb, a, b);
  a.push(", ", "" + this.wb, ")")
};
le.prototype.R = ae;
le.prototype.X = function(a) {
  a.push(this.Pb, "|", "" + Number(this.wb), "!")
};
var me = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function ne(a) {
  this.reason = a
}
ne.prototype.j = function(a) {
  return a instanceof ne && this.reason == a.reason
};
ne.prototype.p = function(a, b) {
  a.push("new TransportKillFrame(");
  G(this.reason, a, b);
  a.push(")")
};
ne.prototype.R = ae;
ne.prototype.X = function(a) {
  a.push(this.reason, "K")
};
function oe(a) {
  a || f(new V("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(" " == b) {
    return new ee(a.substr(0, a.length - 1))
  }
  if("A" == b) {
    return a = he(jd(a)), a == k && f(new V("bad sack")), new de(a)
  }
  if("N" == b) {
    return a = md(jd(a)), a == k && f(new V("bad seqNum")), new ge(a)
  }
  if("T" == b) {
    return a = he(jd(a)), a == k && f(new V("bad lastSackSeen")), new ie(a)
  }
  if("Y" == b) {
    return 1 != a.length && f(new V("leading garbage")), new ke
  }
  if("^" == b) {
    return new fe(a.substr(0, a.length - 1))
  }
  if("C" == b) {
    return 1 != a.length && f(new V("leading garbage")), new je
  }
  if("!" == b) {
    return b = a.substr(0, a.length - 3), (255 < b.length || !/^([ -~]*)$/.test(b)) && f(new V("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && f(new V("bad applicationLevel")), new le(b, a)
  }
  if("K" == b) {
    return a = a.substr(0, a.length - 1), a = me[a], a == k && f(new V("unknown kill reason: " + a)), new ne(a)
  }
  f(new V("Invalid frame type " + b))
}
;var pe = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function qe(a, b) {
  var c = a.match(pe), d = b.match(pe);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function W(a, b) {
  var c;
  a instanceof W ? (this.pb(b == k ? a.fa : b), re(this, a.ga), se(this, a.Va), te(this, a.W), ue(this, a.Ba), ve(this, a.T), we(this, a.K.F()), xe(this, a.La)) : a && (c = ("" + a).match(pe)) ? (this.pb(!!b), re(this, c[1] || "", j), se(this, c[2] || "", j), te(this, c[3] || "", j), ue(this, c[4]), ve(this, c[5] || "", j), we(this, c[6] || "", j), xe(this, c[7] || "", j)) : (this.pb(!!b), this.K = new ye(k, this, this.fa))
}
s = W.prototype;
s.ga = "";
s.Va = "";
s.W = "";
s.Ba = k;
s.T = "";
s.La = "";
s.Rf = m;
s.fa = m;
s.toString = function() {
  if(this.aa) {
    return this.aa
  }
  var a = [];
  this.ga && a.push(ze(this.ga, Ae), ":");
  this.W && (a.push("//"), this.Va && a.push(ze(this.Va, Ae), "@"), a.push(v(this.W) ? encodeURIComponent(this.W) : k), this.Ba != k && a.push(":", "" + this.Ba));
  this.T && (this.W && "/" != this.T.charAt(0) && a.push("/"), a.push(ze(this.T, "/" == this.T.charAt(0) ? Be : Ce)));
  var b = "" + this.K;
  b && a.push("?", b);
  this.La && a.push("#", ze(this.La, De));
  return this.aa = a.join("")
};
s.F = function() {
  var a = this.ga, b = this.Va, c = this.W, d = this.Ba, e = this.T, g = this.K.F(), h = this.La, l = new W(k, this.fa);
  a && re(l, a);
  b && se(l, b);
  c && te(l, c);
  d && ue(l, d);
  e && ve(l, e);
  g && we(l, g);
  h && xe(l, h);
  return l
};
function re(a, b, c) {
  Ee(a);
  delete a.aa;
  a.ga = c ? b ? decodeURIComponent(b) : "" : b;
  a.ga && (a.ga = a.ga.replace(/:$/, ""))
}
function se(a, b, c) {
  Ee(a);
  delete a.aa;
  a.Va = c ? b ? decodeURIComponent(b) : "" : b
}
function te(a, b, c) {
  Ee(a);
  delete a.aa;
  a.W = c ? b ? decodeURIComponent(b) : "" : b
}
function ue(a, b) {
  Ee(a);
  delete a.aa;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && f(Error("Bad port number " + b)), a.Ba = b) : a.Ba = k
}
function ve(a, b, c) {
  Ee(a);
  delete a.aa;
  a.T = c ? b ? decodeURIComponent(b) : "" : b
}
function we(a, b, c) {
  Ee(a);
  delete a.aa;
  b instanceof ye ? (a.K = b, a.K.Sd = a, a.K.pb(a.fa)) : (c || (b = ze(b, Fe)), a.K = new ye(b, a, a.fa))
}
function xe(a, b, c) {
  Ee(a);
  delete a.aa;
  a.La = c ? b ? decodeURIComponent(b) : "" : b
}
function Ee(a) {
  a.Rf && f(Error("Tried to modify a read-only Uri"))
}
s.pb = function(a) {
  this.fa = a;
  this.K && this.K.pb(a);
  return this
};
function Ge(a) {
  return a instanceof W ? a.F() : new W(a, i)
}
var He = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function ze(a, b) {
  var c = k;
  v(a) && (c = a, He.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, Ie)));
  return c
}
function Ie(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Ae = /[#\/\?@]/g, Ce = /[\#\?:]/g, Be = /[\#\?]/g, Fe = /[\#\?@]/g, De = /#/g;
function ye(a, b, c) {
  this.ja = a || k;
  this.Sd = b || k;
  this.fa = !!c
}
function Je(a) {
  if(!a.k && (a.k = new I, a.g = 0, a.ja)) {
    for(var b = a.ja.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, g = k;
      0 <= d ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = Ke(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
s = ye.prototype;
s.k = k;
s.g = k;
s.t = function() {
  Je(this);
  return this.g
};
s.add = function(a, b) {
  Je(this);
  Le(this);
  a = Ke(this, a);
  if(this.V(a)) {
    var c = this.k.get(a);
    u(c) ? c.push(b) : this.k.set(a, [c, b])
  }else {
    this.k.set(a, b)
  }
  this.g++;
  return this
};
s.remove = function(a) {
  Je(this);
  a = Ke(this, a);
  if(this.k.V(a)) {
    Le(this);
    var b = this.k.get(a);
    u(b) ? this.g -= b.length : this.g--;
    return this.k.remove(a)
  }
  return m
};
s.clear = function() {
  Le(this);
  this.k && this.k.clear();
  this.g = 0
};
s.Pa = function() {
  Je(this);
  return 0 == this.g
};
s.V = function(a) {
  Je(this);
  a = Ke(this, a);
  return this.k.V(a)
};
s.ec = function(a) {
  var b = this.J();
  return ab(b, a)
};
s.da = function() {
  Je(this);
  for(var a = this.k.J(), b = this.k.da(), c = [], d = 0;d < b.length;d++) {
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
s.J = function(a) {
  Je(this);
  if(a) {
    if(a = Ke(this, a), this.V(a)) {
      var b = this.k.get(a);
      if(u(b)) {
        return b
      }
      a = [];
      a.push(b)
    }else {
      a = []
    }
  }else {
    for(var b = this.k.J(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      u(d) ? eb(a, d) : a.push(d)
    }
  }
  return a
};
s.set = function(a, b) {
  Je(this);
  Le(this);
  a = Ke(this, a);
  if(this.V(a)) {
    var c = this.k.get(a);
    u(c) ? this.g -= c.length : this.g--
  }
  this.k.set(a, b);
  this.g++;
  return this
};
s.get = function(a, b) {
  Je(this);
  a = Ke(this, a);
  if(this.V(a)) {
    var c = this.k.get(a);
    return u(c) ? c[0] : c
  }
  return b
};
s.toString = function() {
  if(this.ja) {
    return this.ja
  }
  if(!this.k) {
    return""
  }
  for(var a = [], b = 0, c = this.k.da(), d = 0;d < c.length;d++) {
    var e = c[d], g = ya(e), e = this.k.get(e);
    if(u(e)) {
      for(var h = 0;h < e.length;h++) {
        0 < b && a.push("&"), a.push(g), "" !== e[h] && a.push("=", ya(e[h])), b++
      }
    }else {
      0 < b && a.push("&"), a.push(g), "" !== e && a.push("=", ya(e)), b++
    }
  }
  return this.ja = a.join("")
};
function Le(a) {
  delete a.Za;
  delete a.ja;
  a.Sd && delete a.Sd.aa
}
s.F = function() {
  var a = new ye;
  this.Za && (a.Za = this.Za);
  this.ja && (a.ja = this.ja);
  this.k && (a.k = this.k.F());
  return a
};
function Ke(a, b) {
  var c = "" + b;
  a.fa && (c = c.toLowerCase());
  return c
}
s.pb = function(a) {
  a && !this.fa && (Je(this), Le(this), Gb(this.k, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.fa = a
};
s.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Gb(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
var Me;
function Ne(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function Oe(a, b) {
  var c = Ne(a), d = gb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    ab(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function Pe(a, b) {
  var c = Ne(a), d = gb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < e.length;h++) {
    ab(d, e[h]) && (fb(e, h--, 1), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
;function Qe(a, b) {
  this.width = a;
  this.height = b
}
s = Qe.prototype;
s.F = function() {
  return new Qe(this.width, this.height)
};
s.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
s.Pa = function() {
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
var Re = !J || nc();
!ac && !J || J && nc() || ac && L("1.9.1");
var Se = J && !L("9");
function Te(a, b) {
  this.x = ga(a) ? a : 0;
  this.y = ga(b) ? b : 0
}
Te.prototype.F = function() {
  return new Te(this.x, this.y)
};
Te.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function Ue(a) {
  return a ? new Ve(We(a)) : Me || (Me = new Ve)
}
function X(a) {
  return v(a) ? document.getElementById(a) : a
}
function Xe(a, b) {
  Qa(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Ye ? a.setAttribute(Ye[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var Ye = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Ze() {
  var a = $e.N.parentWindow || $e.N.defaultView || window, b = a.document;
  if(K && !L("500") && !bc) {
    "undefined" == typeof a.innerHeight && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new Qe(a.innerWidth, b)
  }
  a = "CSS1Compat" == b.compatMode ? b.documentElement : b.body;
  return new Qe(a.clientWidth, a.clientHeight)
}
function af(a, b, c) {
  return bf(document, arguments)
}
function bf(a, b) {
  var c = b[0], d = b[1];
  if(!Re && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', D(d.name), '"');
    if(d.type) {
      c.push(' type="', D(d.type), '"');
      var e = {};
      Va(e, d);
      d = e;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  d && (v(d) ? c.className = d : u(d) ? Oe.apply(k, [c].concat(d)) : Xe(c, d));
  2 < b.length && cf(a, c, b, 2);
  return c
}
function cf(a, b, c, d) {
  function e(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ha(g) && !(ja(g) && 0 < g.nodeType) ? Xa(df(g) ? db(g) : g, e) : e(g)
  }
}
function ef(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function ff(a, b) {
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
function We(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
var gf = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, hf = {IMG:" ", BR:"\n"};
function jf(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, "number" == typeof a && 0 <= a && 32768 > a) : m
}
function kf(a) {
  var b = [];
  lf(a, b, m);
  return b.join("")
}
function lf(a, b, c) {
  if(!(a.nodeName in gf)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in hf) {
        b.push(hf[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          lf(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function df(a) {
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
function Ve(a) {
  this.N = a || t.document || document
}
s = Ve.prototype;
s.bb = Ue;
s.f = function(a) {
  return v(a) ? this.N.getElementById(a) : a
};
s.r = function(a, b, c) {
  return bf(this.N, arguments)
};
s.createElement = function(a) {
  return this.N.createElement(a)
};
s.createTextNode = function(a) {
  return this.N.createTextNode(a)
};
s.appendChild = function(a, b) {
  a.appendChild(b)
};
s.append = function(a, b) {
  cf(We(a), a, arguments, 1)
};
s.contains = ff;
function mf(a, b, c, d) {
  this.contentWindow = a;
  this.gc = b;
  this.Nd = c;
  this.Hf = d
}
mf.prototype.p = function(a, b) {
  a.push("<XDRFrame frameId=");
  G(this.Hf, a, b);
  a.push(", expandedUrl=");
  G(this.gc, a, b);
  a.push(", streams=");
  G(this.Nd, a, b);
  a.push(">")
};
function nf() {
  this.frames = [];
  this.rd = new I
}
nf.prototype.a = U("cw.net.XDRTracker");
function of(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + Math.floor(Xd()) + ("" + Math.floor(Xd()))
  })
}
function pf(a, b) {
  for(var c = qf, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = 0 == e.Nd.length) {
      g = e.gc;
      var h = ("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + H(b) + " existing frame " + H(e)), bd(e)
    }
  }
  d = id() + id();
  e = of(a);
  g = t.location;
  g instanceof W || (g = Ge(g));
  e instanceof W || (e = Ge(e));
  var l = g;
  g = l.F();
  (h = !!e.ga) ? re(g, e.ga) : h = !!e.Va;
  h ? se(g, e.Va) : h = !!e.W;
  h ? te(g, e.W) : h = e.Ba != k;
  var n = e.T;
  if(h) {
    ue(g, e.Ba)
  }else {
    if(h = !!e.T) {
      if("/" != n.charAt(0) && (l.W && !l.T ? n = "/" + n : (l = g.T.lastIndexOf("/"), -1 != l && (n = g.T.substr(0, l + 1) + n))), ".." == n || "." == n) {
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
  h ? ve(g, n) : h = "" !== e.K.toString();
  h ? (l = e.K, l.Za || (l.Za = l.toString() ? decodeURIComponent(l.toString()) : ""), we(g, l.Za, i)) : h = !!e.La;
  h && xe(g, e.La);
  e = g.toString();
  g = ("" + t.location).match(pe)[3] || k;
  h = e.match(pe)[3] || k;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + H(b)), c = bd(new mf(t, e, [b], k))) : (g = X("minerva-elements"), h = new Sc, c.rd.set(d, [h, e, b]), c.a.info("Creating new XDRFrame " + H(d) + "for " + H(b)), c = af("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + d}), g.appendChild(c), c = h);
  return c
}
nf.prototype.ug = function(a) {
  var b = this.rd.get(a);
  b || f(Error("Unknown frameId " + H(a)));
  this.rd.remove(b);
  var c = b[0], a = new mf(X("minerva-xdrframe-" + a).contentWindow || (X("minerva-xdrframe-" + a).contentDocument || X("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (X("minerva-xdrframe-" + a).contentDocument || X("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.ia(a)
};
var qf = new nf;
t.__XHRTracker_xdrFrameLoaded = y(qf.ug, qf);
var rf;
rf = m;
var sf = Xb();
sf && (-1 != sf.indexOf("Firefox") || -1 != sf.indexOf("Camino") || -1 != sf.indexOf("iPhone") || -1 != sf.indexOf("iPod") || -1 != sf.indexOf("iPad") || -1 != sf.indexOf("Android") || -1 != sf.indexOf("Chrome") && (rf = j));
var tf = rf;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function uf(a, b, c, d, e, g) {
  Sc.call(this, e, g);
  this.De = a;
  this.Zc = [];
  this.ie = !!b;
  this.Ef = !!c;
  this.vf = !!d;
  for(b = 0;b < a.length;b++) {
    Zc(a[b], y(this.me, this, b, j), y(this.me, this, b, m))
  }
  0 == a.length && !this.ie && this.ia(this.Zc)
}
B(uf, Sc);
uf.prototype.Ne = 0;
uf.prototype.me = function(a, b, c) {
  this.Ne++;
  this.Zc[a] = [b, c];
  this.ua || (this.ie && b ? this.ia([a, c]) : this.Ef && !b ? this.Db(c) : this.Ne == this.De.length && this.ia(this.Zc));
  this.vf && !b && (c = k);
  return c
};
uf.prototype.Db = function(a) {
  uf.e.Db.call(this, a);
  Xa(this.De, function(a) {
    a.cancel()
  })
};
function vf(a) {
  a = new uf(a, m, j);
  Yc(a, function(a) {
    return Ya(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function wf(a, b) {
  this.tg = a;
  this.Ge = b
}
wf.prototype.nd = 0;
wf.prototype.yc = 0;
wf.prototype.ed = m;
function xf(a) {
  var b = [];
  if(a.ed) {
    return[b, 2]
  }
  var c = a.nd, d = a.tg.responseText;
  for(a.nd = d.length;;) {
    c = d.indexOf("\n", c);
    if(-1 == c) {
      break
    }
    var e = d.substr(a.yc, c - a.yc), e = e.replace(/\r$/, "");
    if(e.length > a.Ge) {
      return a.ed = j, [b, 2]
    }
    b.push(e);
    a.yc = c += 1
  }
  return a.nd - a.yc - 1 > a.Ge ? (a.ed = j, [b, 2]) : [b, 1]
}
;function yf(a, b, c) {
  this.D = b;
  this.Z = a;
  this.Wc = c
}
B(yf, M);
s = yf.prototype;
s.a = U("cw.net.XHRMaster");
s.Fa = -1;
s.sd = function(a, b, c) {
  this.Wc.__XHRSlave_makeRequest(this.Z, a, b, c)
};
s.wa = o("Fa");
s.xd = function(a, b) {
  1 != b && Q(this.a, H(this.Z) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Qd(this.D);
  Rd(this.D, a)
};
s.yd = function(a) {
  S(this.a, "ongotheaders_: " + H(a));
  var b = k;
  "Content-Length" in a && (b = md(a["Content-Length"]));
  a = this.D;
  S(a.a, a.q() + " got Content-Length: " + b);
  a.ha == zf && (b == k && (R(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Af(a, 2E3 + 1E3 * (b / 3072)))
};
s.zd = function(a) {
  1 != a && S(this.a, this.D.q() + "'s XHR's readyState is " + a);
  this.Fa = a;
  2 <= this.Fa && Qd(this.D)
};
s.wd = function() {
  this.D.b()
};
s.c = function() {
  yf.e.c.call(this);
  delete Bf.ma[this.Z];
  this.Wc.__XHRSlave_dispose(this.Z);
  delete this.Wc
};
function Cf() {
  this.ma = {}
}
B(Cf, M);
s = Cf.prototype;
s.a = U("cw.net.XHRMasterTracker");
s.Yc = function(a, b) {
  var c = "_" + id(), d = new yf(c, a, b);
  return this.ma[c] = d
};
s.xd = function(a, b, c) {
  var b = cb(b), d = this.ma[a];
  d ? d.xd(b, c) : Q(this.a, "onframes_: no master for " + H(a))
};
s.yd = function(a, b) {
  var c = this.ma[a];
  c ? c.yd(b) : Q(this.a, "ongotheaders_: no master for " + H(a))
};
s.zd = function(a, b) {
  var c = this.ma[a];
  c ? c.zd(b) : Q(this.a, "onreadystatechange_: no master for " + H(a))
};
s.wd = function(a) {
  var b = this.ma[a];
  b ? (delete this.ma[b.Z], b.wd()) : Q(this.a, "oncomplete_: no master for " + H(a))
};
s.c = function() {
  Cf.e.c.call(this);
  for(var a = Ra(this.ma);a.length;) {
    a.pop().b()
  }
  delete this.ma
};
var Bf = new Cf;
t.__XHRMaster_onframes = y(Bf.xd, Bf);
t.__XHRMaster_oncomplete = y(Bf.wd, Bf);
t.__XHRMaster_ongotheaders = y(Bf.yd, Bf);
t.__XHRMaster_onreadystatechange = y(Bf.zd, Bf);
function Df(a, b, c) {
  this.host = a;
  this.port = b;
  this.og = c
}
function Ef(a, b) {
  b || (b = a);
  this.Ca = a;
  this.Ga = b
}
Ef.prototype.p = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  G(this.Ca, a, b);
  a.push(", secondaryUrl=");
  G(this.Ga, a, b);
  a.push(">")
};
function Ff(a, b, c, d) {
  this.Ca = a;
  this.Se = b;
  this.Ga = c;
  this.bf = d;
  (!(0 == this.Ca.indexOf("http://") || 0 == this.Ca.indexOf("https://")) || !(0 == this.Ga.indexOf("http://") || 0 == this.Ga.indexOf("https://"))) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Se.location.href;
  qe(this.Ca, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.bf.location.href;
  qe(this.Ga, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
Ff.prototype.p = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  G(this.Ca, a, b);
  a.push(", secondaryUrl=");
  G(this.Ga, a, b);
  a.push(">")
};
var Gf = new fe(";)]}");
function Hf() {
}
Hf.prototype.je = q(1);
function If(a) {
  this.ig = a
}
If.prototype.p = function(a, b) {
  a.push("<UserContext for ");
  G(this.ig, a, b);
  a.push(">")
};
function Jf(a, b, c) {
  this.I = a;
  this.jg = b ? b : new Hf;
  this.C = c ? c : fd;
  this.Zb = new od;
  this.Yb = id() + id();
  this.Ea = new Mb;
  this.ld = new Ob;
  this.$b = k;
  this.Mc = [];
  this.ub = new If(this);
  K && (this.$b = Hc(t, "load", this.ag, m, this))
}
B(Jf, M);
s = Jf.prototype;
s.a = U("cw.net.ClientStream");
s.Be = new Lb(-1, []);
s.Ce = new Lb(-1, []);
s.Uf = 50;
s.Tf = 1048576;
s.Ad = k;
s.onreset = k;
s.Pe = k;
s.Kd = m;
s.Ed = m;
s.d = 1;
s.Pd = -1;
s.h = k;
s.w = k;
s.Qb = k;
s.Ld = 0;
s.Re = 0;
s.af = 0;
s.p = function(a, b) {
  a.push("<ClientStream id=");
  G(this.Yb, a, b);
  a.push(", state=", "" + this.d);
  a.push(", primary=");
  G(this.h, a, b);
  a.push(", secondary=");
  G(this.w, a, b);
  a.push(", resetting=");
  G(this.Qb, a, b);
  a.push(">")
};
function Kf(a) {
  var b = [-1];
  a.h && b.push(a.h.mb);
  a.w && b.push(a.w.mb);
  return Math.max.apply(Math.max, b)
}
function Lf(a) {
  if(1 != a.d) {
    var b = 0 != a.Ea.S.t(), c = Pb(a.ld), d = !c.j(a.Ce) && !(a.h && c.j(a.h.jb) || a.w && c.j(a.w.jb)), e = Kf(a);
    if((b = b && e < a.Ea.Ja) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      a.h.yb ? (T(a.a, "tryToSend_: writing " + g + " to primary"), d && (d = a.h, c != d.jb && (!d.na && !d.z.length && Mf(d), d.z.push(new de(c)), d.jb = c)), b && Nf(a.h, a.Ea, e + 1), a.h.la()) : a.w == k ? a.Kd ? (T(a.a, "tryToSend_: creating secondary to send " + g), a.w = Of(a, m), b && Nf(a.w, a.Ea, e + 1), a.w.la()) : (T(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.Ed = j) : T(a.a, "tryToSend_: need to send " + g + ", but can't right now")
    }
  }
}
s.ag = function() {
  this.$b = k;
  if(this.h && this.h.gb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.h;
    a.Oc = j;
    a.b()
  }
  this.w && this.w.gb() && (this.a.info("restartHttpRequests_: aborting secondary"), a = this.w, a.Oc = j, a.b())
};
function Pf(a, b) {
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
    a.Ea.extend(b);
    Lf(a)
  }
}
function Of(a, b) {
  var c;
  a.I instanceof Ff ? c = 1 == a.jg.je() ? zf : Rf : a.I instanceof Df ? c = Sf : f(Error("Don't support endpoint " + H(a.I)));
  a.Pd += 1;
  c = new Tf(a.C, a, a.Pd, c, a.I, b);
  T(a.a, "Created: " + c.q());
  a.Zb.add(c);
  return c
}
function Uf(a, b, c) {
  var d = new Vf(a.C, a, b, c);
  T(a.a, "Created: " + d.q() + ", delay=" + b + ", times=" + c);
  a.Zb.add(d);
  return d
}
function Wf(a, b) {
  a.Zb.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  S(a.a, "Offline: " + b.q());
  a.Ld = b.Aa ? a.Ld + b.Aa : 0;
  1 <= a.Ld && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.ub, "stream penalty reached limit", m), a.b());
  if(3 < a.d) {
    4 == a.d && b.lf ? (S(a.a, "Disposing because resettingTransport_ is done."), a.b()) : S(a.a, "Not creating a transport because ClientStream is in state " + a.d)
  }else {
    var c;
    var d;
    c = b instanceof Vf;
    if(!c && b.Oc) {
      var e = K ? tf ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      T(a.a, "getDelayForNextTransport_: " + H({delay:c, times:d}))
    }else {
      if(d = b.$d(), b == a.h ? d ? e = ++a.Re : c || (e = a.Re = 0) : d ? e = ++a.af : c || (e = a.af = 0), c || !e) {
        d = c = 0, T(a.a, "getDelayForNextTransport_: " + H({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(4E3 * Math.random()) - 2E3, l = Math.max(0, b.gf - b.Qd);
        d = (c = Math.max(0, g + h - l)) ? 1 : 0;
        T(a.a, "getDelayForNextTransport_: " + H({count:e, base:g, variance:h, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    b == a.h ? (a.h = k, c ? a.h = Uf(a, e, c) : (e = Kf(a), a.h = Of(a, j), Nf(a.h, a.Ea, e + 1)), a.h.la()) : b == a.w && (a.w = k, c ? (a.w = Uf(a, e, c), a.w.la()) : Lf(a))
  }
}
s.reset = function(a) {
  3 < this.d && f(Error("reset: Can't send reset in state " + this.d));
  this.d = 4;
  this.h && this.h.yb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Xf(this.h, a), this.h.la()) : (this.h && (S(this.a, "reset: Disposing primary before sending ResetFrame."), this.h.b()), this.w && (S(this.a, "reset: Disposing secondary before sending ResetFrame."), this.w.b()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Qb = Of(this, m), Xf(this.Qb, a), this.Qb.la());
  this.onreset && this.onreset.call(this.ub, a, j)
};
function Yf(a, b, c, d) {
  var e;
  e = a.ld;
  for(var g = a.Uf, h = a.Tf, l = [], n = m, p = 0, E = c.length;p < E;p++) {
    var r = c[p], w = r[0], r = r[1];
    if(w == e.Qa + 1) {
      e.Qa += 1;
      for(l.push(r);;) {
        w = e.Qa + 1;
        r = e.Ia.get(w, Qb);
        if(r === Qb) {
          break
        }
        l.push(r[0]);
        e.Ia.remove(w);
        e.P -= r[1];
        e.Qa = w
      }
    }else {
      if(!(w <= e.Qa)) {
        if(g != k && e.Ia.t() >= g) {
          n = j;
          break
        }
        var A = Kb(r);
        if(h != k && e.P + A > h) {
          n = j;
          break
        }
        e.Ia.set(w, [r, A]);
        e.P += A
      }
    }
  }
  e.Ia.Pa() && e.Ia.clear();
  e = [l, n];
  c = e[0];
  e = e[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(h = c[g], a.Ad && a.Ad.call(a.ub, h), 4 == a.d || a.ba) {
        return
      }
    }
  }
  d || Lf(a);
  if(!(4 == a.d || a.ba) && e) {
    Q(b.a, b.q() + "'s peer caused rwin overflow."), b.b()
  }
}
s.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  1 != this.d && f(Error("ClientStream.start: " + H(this) + " already started"));
  this.d = 2;
  if(this.I instanceof Ef) {
    var a = pf(this.I.Ca, this), b = pf(this.I.Ga, this);
    Yc(vf([a, b]), y(this.Cf, this))
  }else {
    Zf(this)
  }
};
s.Cf = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].gc, e = a[1].gc;
  this.Mc.push(a[0]);
  this.Mc.push(a[1]);
  this.I = new Ff(d, b, e, c);
  Zf(this)
};
function Zf(a) {
  a.d = 3;
  a.h = Of(a, j);
  Nf(a.h, a.Ea, k);
  a.h.la()
}
s.c = function() {
  this.a.info(H(this) + " in disposeInternal.");
  this.d = 5;
  for(var a = this.Zb.J(), b = 0;b < a.length;b++) {
    a[b].b()
  }
  for(a = 0;a < this.Mc.length;a++) {
    bb(this.Mc[a].Nd, this)
  }
  K && this.$b && (Kc(this.$b), this.$b = k);
  this.Pe && this.Pe.call(this.ub);
  delete this.Zb;
  delete this.h;
  delete this.w;
  delete this.Qb;
  delete this.ub;
  Jf.e.c.call(this)
};
var zf = 1, Rf = 2, Sf = 3;
function Tf(a, b, c, d, e, g) {
  this.C = a;
  this.A = b;
  this.tb = c;
  this.ha = d;
  this.I = e;
  this.z = [];
  this.Ya = g;
  this.yb = !this.gb();
  this.ob = this.ha != zf;
  this.qf = y(this.mg, this)
}
B(Tf, M);
s = Tf.prototype;
s.a = U("cw.net.ClientTransport");
s.o = k;
s.Qd = k;
s.gf = k;
s.Bc = k;
s.na = m;
s.Ic = m;
s.jb = k;
s.ic = 0;
s.mb = -1;
s.Ac = -1;
s.lf = m;
s.Oc = m;
s.Aa = 0;
s.Ib = m;
s.p = function(a) {
  a.push("<ClientTransport #", "" + this.tb, ", becomePrimary=", "" + this.Ya, ">")
};
s.q = function() {
  return(this.Ya ? "Prim. T#" : "Sec. T#") + this.tb
};
s.$d = function() {
  return!(!this.Ib && this.ic)
};
s.gb = function() {
  return this.ha == zf || this.ha == Rf
};
function $f(a, b) {
  hb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Yf(a.A, a, b, !a.ob)
}
function ag(a, b, c) {
  try {
    var d = oe(b);
    a.ic += 1;
    S(a.a, a.q() + " RECV " + H(d));
    var e;
    1 == a.ic && !d.j(Gf) && a.gb() ? (R(a.a, a.q() + " is closing soon because got bad preamble: " + H(d)), e = j) : e = m;
    if(e) {
      return j
    }
    if(d instanceof ee) {
      if(!/^([ -~]*)$/.test(d.sb)) {
        return a.Ib = j
      }
      a.Ac += 1;
      c.push([a.Ac, d.sb])
    }else {
      if(d instanceof de) {
        var g = a.A, h = d.$;
        g.Be = h;
        var l = g.Ea, n = h.Xa, c = m;
        n > l.Ja && (c = j);
        for(var p = Nb(l).concat(), d = 0;d < p.length;d++) {
          var E = p[d];
          if(E > n) {
            break
          }
          var r = l.S.get(E)[1];
          l.S.remove(E);
          l.P -= r
        }
        for(d = 0;d < h.Ta.length;d++) {
          var w = h.Ta[d];
          w > l.Ja && (c = j);
          l.S.V(w) && (r = l.S.get(w)[1], l.S.remove(w), l.P -= r)
        }
        l.S.Pa() && l.S.clear();
        if(c) {
          return R(a.a, a.q() + " is closing soon because got bad SackFrame"), a.Ib = j
        }
      }else {
        if(d instanceof ge) {
          a.Ac = d.Ub - 1
        }else {
          if(d instanceof ie) {
            a.A.Ce = d.Lb
          }else {
            if(d instanceof ke) {
              return T(a.a, a.q() + " is closing soon because got YouCloseItFrame"), j
            }
            if(d instanceof ne) {
              return a.Ib = j, "stream_attach_failure" == d.reason ? a.Aa += 1 : "acked_unsent_strings" == d.reason && (a.Aa += 0.5), T(a.a, a.q() + " is closing soon because got " + H(d)), j
            }
            if(!(d instanceof fe)) {
              if(d instanceof je) {
                var A = a.A, Oh = !a.ob;
                T(A.a, "Stream is now confirmed to exist at server.");
                A.Kd = j;
                A.Ed && !Oh && (A.Ed = m, Lf(A))
              }else {
                if(c.length) {
                  $f(a, c);
                  if(!u(c)) {
                    for(var Sd = c.length - 1;0 <= Sd;Sd--) {
                      delete c[Sd]
                    }
                  }
                  c.length = 0
                }
                if(d instanceof le) {
                  var zc = a.A;
                  zc.onreset && zc.onreset.call(zc.ub, d.Pb, d.wb);
                  zc.b();
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
    return Qf instanceof V || f(Qf), R(a.a, a.q() + " is closing soon because got InvalidFrame: " + H(b)), a.Ib = j
  }
  return m
}
function Rd(a, b) {
  a.Ic = j;
  try {
    for(var c = m, d = [], e = 0, g = b.length;e < g;e++) {
      if(a.ba) {
        a.a.info(a.q() + " returning from loop because we're disposed.");
        return
      }
      if(c = ag(a, b[e], d)) {
        break
      }
    }
    d.length && $f(a, d);
    a.Ic = m;
    a.z.length && a.la();
    c && (T(a.a, a.q() + " closeSoon is true.  Frames were: " + H(b)), a.b())
  }finally {
    a.Ic = m
  }
}
s.mg = function() {
  R(this.a, this.q() + " timed out due to lack of connection or no data being received.");
  this.b()
};
function bg(a) {
  a.Bc != k && (a.C.G.clearTimeout(a.Bc), a.Bc = k)
}
function Af(a, b) {
  bg(a);
  b = Math.round(b);
  a.Bc = a.C.G.setTimeout(a.qf, b);
  S(a.a, a.q() + "'s receive timeout set to " + b + " ms.")
}
function Qd(a) {
  a.ha != zf && (a.ha == Sf || a.ha == Rf ? Af(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ha)))
}
function Mf(a) {
  var b = new be;
  b.tb = a.tb;
  b.Te = 2;
  b.ue = 2;
  a.A.Kd || (b.Xe = j);
  b.Yb = a.A.Yb;
  b.Md = a.ob;
  b.Md && (b.Le = 4096);
  b.He = 3E5;
  b.Fe = a.ob ? Math.floor(10) : 0;
  b.hf = m;
  a.Ya && (b.df = k, b.td = Math.floor((a.ob ? 358E4 : 25E3) / 1E3));
  b.$ = Pb(a.A.ld);
  b.vc = a.A.Be;
  a.z.push(b);
  a.jb = b.$
}
function Td(a, b) {
  b && (a.Aa += 0.5);
  a.b()
}
s.la = function() {
  this.na && !this.yb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.Ic) {
    T(this.a, this.q() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.na;
    this.na = j;
    !a && !this.z.length && Mf(this);
    for(a = 0;a < this.z.length;a++) {
      S(this.a, this.q() + " SEND " + H(this.z[a]))
    }
    if(this.gb()) {
      for(var a = [], b = 0, c = this.z.length;b < c;b++) {
        this.z[b].X(a), a.push("\n")
      }
      this.z = [];
      a = a.join("");
      b = this.Ya ? this.I.Ca : this.I.Ga;
      this.o = Bf.Yc(this, this.Ya ? this.I.Se : this.I.bf);
      this.Qd = this.C.G === Rc ? z() : this.C.G.getTime();
      this.o.sd(b, "POST", a);
      Af(this, 3E3 * (1.5 + (0 == b.indexOf("https://") ? 3 : 1)) + 4E3 + (this.ob ? 0 : this.Ya ? 25E3 : 0))
    }else {
      if(this.ha == Sf) {
        a = [];
        b = 0;
        for(c = this.z.length;b < c;b++) {
          a.push(this.z[b].R())
        }
        this.z = [];
        this.o ? this.o.ac(a) : (b = this.I, this.o = new Wd(this), this.o.Hc = b.og.Yc(this.o), this.Qd = this.C.G === Rc ? z() : this.C.G.getTime(), this.o.Vc(b.host, b.port), this.o.ba || (this.o.ac(a), this.o.ba || Af(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.ha))
      }
    }
  }
};
function Nf(a, b, c) {
  !a.na && !a.z.length && Mf(a);
  for(var d = Math.max(c, a.mb + 1), e = Nb(b), c = [], g = 0;g < e.length;g++) {
    var h = e[g];
    (d == k || h >= d) && c.push([h, b.S.get(h)[0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], e = g[0], g = g[1], (-1 == a.mb || a.mb + 1 != e) && a.z.push(new ge(e)), a.z.push(new ee(g)), a.mb = e
  }
}
s.c = function() {
  this.a.info(this.q() + " in disposeInternal.");
  Tf.e.c.call(this);
  this.gf = this.C.G === Rc ? z() : this.C.G.getTime();
  this.z = [];
  bg(this);
  this.o && this.o.b();
  var a = this.A;
  this.A = k;
  Wf(a, this)
};
function Xf(a, b) {
  !a.na && !a.z.length && Mf(a);
  a.z.push(new le(b, j));
  a.lf = j
}
function Vf(a, b, c, d) {
  this.C = a;
  this.A = b;
  this.fe = c;
  this.be = d
}
B(Vf, M);
s = Vf.prototype;
s.na = m;
s.yb = m;
s.pc = k;
s.jb = k;
s.a = U("cw.net.DoNothingTransport");
function cg(a) {
  a.pc = a.C.G.setTimeout(function() {
    a.pc = k;
    a.be--;
    a.be ? cg(a) : a.b()
  }, a.fe)
}
s.la = function() {
  this.na && !this.yb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.na = j;
  cg(this)
};
s.p = function(a) {
  a.push("<DoNothingTransport delay=", "" + this.fe, ">")
};
s.gb = q(m);
s.q = q("Wast. T");
s.$d = q(m);
s.c = function() {
  this.a.info(this.q() + " in disposeInternal.");
  Vf.e.c.call(this);
  this.pc != k && this.C.G.clearTimeout(this.pc);
  var a = this.A;
  this.A = k;
  Wf(a, this)
};
var dg;
function eg() {
  lb.apply(this)
}
B(eg, lb);
function fg() {
  lb.apply(this)
}
B(fg, lb);
rb(eg, {"0":{name:"NewPost", If:"demosminerva.ljstream_messages.NewPost"}, 1:{name:"title", ab:9, type:String}, 2:{name:"url", ab:9, type:String}, 3:{name:"body", ab:9, type:String}, 4:{name:"num_images", ab:5, type:Number}, 5:{name:"lang", ab:9, type:String}});
rb(fg, {"0":{name:"SetPreferences", If:"demosminerva.ljstream_messages.SetPreferences"}, 1:{name:"include_russian_posts", ab:8, type:Boolean}});
function gg() {
  this.We = z()
}
var hg = new gg;
gg.prototype.set = aa("We");
gg.prototype.reset = function() {
  this.set(z())
};
gg.prototype.get = o("We");
function ig(a) {
  this.Cd = a || "";
  this.gg = hg
}
ig.prototype.cg = j;
ig.prototype.eg = j;
ig.prototype.dg = j;
ig.prototype.cf = m;
function jg(a) {
  return 10 > a ? "0" + a : "" + a
}
function kg(a, b) {
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
function lg(a) {
  ig.call(this, a)
}
B(lg, ig);
lg.prototype.cf = j;
function mg(a) {
  this.ud = a || 100;
  this.pa = []
}
s = mg.prototype;
s.Mb = 0;
s.add = function(a) {
  this.pa[this.Mb] = a;
  this.Mb = (this.Mb + 1) % this.ud
};
s.get = function(a) {
  a = ng(this, a);
  return this.pa[a]
};
s.set = function(a, b) {
  a = ng(this, a);
  this.pa[a] = b
};
s.t = function() {
  return this.pa.length
};
s.Pa = function() {
  return 0 == this.pa.length
};
s.clear = function() {
  this.Mb = this.pa.length = 0
};
s.J = function() {
  for(var a = this.t(), b = this.t(), c = [], a = this.t() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
s.da = function() {
  for(var a = [], b = this.t(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
s.V = function(a) {
  return a < this.t()
};
s.ec = function(a) {
  for(var b = this.t(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return j
    }
  }
  return m
};
function ng(a, b) {
  b >= a.pa.length && f(Error("Out of bounds exception"));
  return a.pa.length < a.ud ? b : (a.Mb + Number(b)) % a.ud
}
;function og(a, b) {
  this.xa = a || "";
  this.Cd = b || "";
  this.nb = [];
  this.Dc = new mg(pg);
  this.Zf = y(this.of, this);
  this.Gf = new lg(this.Cd);
  this.Df = {};
  if(j != this.xe) {
    this.xe = j;
    var c = Nd(), d = this.Zf;
    c.Jb || (c.Jb = []);
    c.Jb.push(d)
  }
  this.Cb = "1" == qg(this.xa, "enabled");
  t.setInterval(y(this.bg, this), 7500)
}
var pg = 500;
s = og.prototype;
s.kf = "LOGGING";
s.Af = m;
s.s = k;
s.Ud = m;
s.xe = m;
s.Xd = k;
s.od = z();
s.Oa = function() {
  this.Cb && rg(this)
};
s.isEnabled = o("Cb");
s.Fc = function(a) {
  if(this.Cb = a) {
    rg(this), this.s && this.Lc()
  }
  sg(this, "enabled", a ? "1" : "0")
};
function tg(a) {
  return!!a.s && !a.s.closed
}
s.tf = function() {
  this.Dc.clear();
  tg(this) && this.Lc()
};
s.of = function(a) {
  if(!this.Df[a.Ee]) {
    var b = this.Gf, c;
    switch(a.Y.value) {
      case yd.value:
        c = "dbg-sh";
        break;
      case zd.value:
        c = "dbg-sev";
        break;
      case Ad.value:
        c = "dbg-w";
        break;
      case Bd.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.Cd, " ");
    if(b.cg) {
      var e = new Date(a.ef);
      d.push("[", jg(e.getFullYear() - 2E3) + jg(e.getMonth() + 1) + jg(e.getDate()) + " " + jg(e.getHours()) + ":" + jg(e.getMinutes()) + ":" + jg(e.getSeconds()) + "." + jg(Math.floor(e.getMilliseconds() / 10)), "] ")
    }
    b.eg && d.push("[", Fa(kg(a, b.gg.get())), "s] ");
    b.dg && d.push("[", D(a.Ee), "] ");
    d.push('<span class="', c, '">', za(Fa(D(a.Je))));
    b.cf && a.dd && d.push("<br>", za(Fa(a.cd || "")));
    d.push("</span><br>");
    b = d.join("");
    this.Cb ? (rg(this), this.Dc.add(b), ug(this, b)) : this.Dc.add(b);
    this.Af && a.Y.value >= zd.value && this.Fc(j)
  }
};
function ug(a, b) {
  a.nb.push(b);
  t.clearTimeout(a.Xd);
  750 < z() - a.od ? a.Vd() : a.Xd = t.setTimeout(y(a.Vd, a), 250)
}
s.Vd = function() {
  this.od = z();
  if(tg(this)) {
    var a = this.s.document.body, a = a && 100 >= a.scrollHeight - (a.scrollTop + a.clientHeight);
    this.s.document.write(this.nb.join(""));
    this.nb.length = 0;
    a && this.s.scrollTo(0, 1E6)
  }
};
function vg(a) {
  for(var b = a.Dc.J(), c = 0;c < b.length;c++) {
    ug(a, b[c])
  }
}
function rg(a) {
  if(!tg(a) && !a.Ud) {
    var b = qg(a.xa, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), e = Number(b[2]), b = Number(b[3]);
    a.Ud = j;
    a.s = window.open("", J ? a.xa.replace(/[\s\-\.\,]/g, "_") : a.xa, "width=" + e + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    !a.s && !a.fg && (alert("Logger popup was blocked"), a.fg = j);
    a.Ud = m;
    a.s && a.Lc()
  }
}
s.mc = q("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
s.Lc = function() {
  tg(this) || (this.s.document.open(), ug(this, "<style>" + this.mc() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.kf + "<br><small>Logger: " + this.xa + "</small></div><hr>"), vg(this))
};
function sg(a, b, c) {
  b += a.xa;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(z() + 2592E6)).toUTCString()
}
function qg(a, b, c) {
  var a = b + a, b = "" + document.cookie, d = b.indexOf(a + "=");
  return-1 != d ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, -1 == c ? b.length : c))) : c || ""
}
s.bg = function() {
  tg(this) && sg(this, "dbg", (this.s.screenX || this.s.screenLeft || 0) + "," + (this.s.screenY || this.s.screenTop || 0) + "," + (this.s.outerWidth || 800) + "," + (this.s.outerHeight || 500))
};
function wg(a, b) {
  if(xg) {
    var c = yg(), d;
    for(d in c) {
      var e = d.replace("fancywindow.sel.", ""), e = U(e), g = e.Y, h = window.localStorage.getItem(d).toString();
      (!g || g.toString() != h) && e.qb(Id(h))
    }
  }
  og.call(this, a, b)
}
B(wg, og);
var xg;
a: {
  try {
    xg = !!window.localStorage.getItem;
    break a
  }catch(zg) {
  }
  xg = m
}
s = wg.prototype;
s.Vd = function() {
  this.od = z();
  if(tg(this)) {
    for(var a = this.M.f("log"), b = 100 >= a.scrollHeight - (a.scrollTop + a.offsetHeight), c = 0;c < this.nb.length;c++) {
      var d = this.M.r("div", "logmsg");
      d.innerHTML = this.nb[c];
      a.appendChild(d)
    }
    this.nb.length = 0;
    this.Ze();
    b && (a.scrollTop = a.scrollHeight)
  }
};
s.Lc = function() {
  if(tg(this)) {
    var a = this.s.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.xa + "</title><style>" + this.mc() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.xa + "</b></p><p>" + this.kf + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (J ? a.body : this.s).onresize = y(this.Ze, this);
    this.M = new Ve(a);
    this.M.f("openbutton").onclick = y(this.Xf, this);
    this.M.f("closebutton").onclick = y(this.uf, this);
    this.M.f("clearbutton").onclick = y(this.tf, this);
    this.M.f("exitbutton").onclick = y(this.Bf, this);
    vg(this)
  }
};
s.Xf = function() {
  var a = this.M.f("optionsarea");
  a.innerHTML = "";
  for(var b = Ag(), c = this.M, d = 0;d < b.length;d++) {
    var e = U(b[d]), e = c.r("div", {}, Bg(this, "sel" + b[d], e.Y ? e.Y.name : "INHERIT"), c.r("span", {}, b[d] || "(root)"));
    a.appendChild(e)
  }
  this.M.f("options").style.display = "block";
  return m
};
function Bg(a, b, c) {
  for(var a = a.M, b = a.r("select", {id:b}), d = 0;d < Gd.length;d++) {
    var e = Gd[d], g = a.r("option", {}, e.name);
    c == e.name && (g.selected = j);
    b.appendChild(g)
  }
  b.appendChild(a.r("option", {selected:"INHERIT" == c}, "INHERIT"));
  return b
}
s.uf = function() {
  this.M.f("options").style.display = "none";
  for(var a = Ag(), b = this.M, c = 0;c < a.length;c++) {
    var d = U(a[c]), e = b.f("sel" + a[c]), e = e.options[e.selectedIndex].text;
    "INHERIT" == e ? d.qb(k) : d.qb(Id(e))
  }
  if(xg) {
    a = Ag();
    b = yg();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], e = U(a[c]).Y, d in b ? e ? window.localStorage.getItem(d) != e.name && window.localStorage.setItem(d, e.name) : window.localStorage.removeItem(d) : e && window.localStorage.setItem(d, e.name)
    }
  }
  return m
};
s.Ze = function() {
  var a = this.M, b = a.f("log"), c = a.f("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.N.body.offsetHeight - c.offsetHeight - (J ? 4 : 0) + "px"
};
s.Bf = function() {
  this.Fc(m);
  this.s && this.s.close()
};
s.mc = function() {
  return wg.e.mc.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function yg() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != k && 0 == d.lastIndexOf("fancywindow.sel.", 0) && (a[d] = j)
  }
  return a
}
function Ag() {
  var a = Sa(Kd);
  a.sort();
  return a
}
;function Cg(a) {
  "number" == typeof a && (a = Math.round(a) + "px");
  return a
}
var Dg = ac ? "MozUserSelect" : K ? "WebkitUserSelect" : k;
function Eg(a) {
  this.se = a;
  this.uc = []
}
B(Eg, M);
var Fg = [];
function Y(a, b, c, d) {
  u(c) || (Fg[0] = c, c = Fg);
  for(var e = 0;e < c.length;e++) {
    a.uc.push(O(b, c[e], d || a, m, a.se || a))
  }
  return a
}
function Gg(a, b, c, d, e, g) {
  if(u(c)) {
    for(var h = 0;h < c.length;h++) {
      Gg(a, b, c[h], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.se || a;
      e = !!e;
      if(b = Jc(b, c, e)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].Sa && b[c].kb == d && b[c].capture == e && b[c].qc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    b && (b = b.key, Kc(b), bb(a.uc, b))
  }
  return a
}
Eg.prototype.Dd = function() {
  Xa(this.uc, Kc);
  this.uc.length = 0
};
Eg.prototype.c = function() {
  Eg.e.c.call(this);
  this.Dd()
};
Eg.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Hg() {
}
ea(Hg);
Hg.prototype.Vf = 0;
Hg.cb();
function Ig(a) {
  this.ra = a || Ue();
  this.Tb = Jg
}
B(Ig, Qc);
Ig.prototype.Pf = Hg.cb();
var Jg = k;
function Kg(a, b) {
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
s = Ig.prototype;
s.ea = k;
s.H = m;
s.l = k;
s.Tb = k;
s.u = k;
s.qa = k;
s.zb = k;
s.qg = m;
function Lg(a) {
  return a.ea || (a.ea = ":" + (a.Pf.Vf++).toString(36))
}
s.f = o("l");
function Mg(a) {
  return a.eb || (a.eb = new Eg(a))
}
s.getParent = o("u");
s.Gd = function(a) {
  this.u && this.u != a && f(Error("Method not supported"));
  Ig.e.Gd.call(this, a)
};
s.bb = o("ra");
s.r = function() {
  this.l = this.ra.createElement("div")
};
function Ng(a, b) {
  a.H && f(Error("Component already rendered"));
  a.l || a.r();
  b ? b.insertBefore(a.l, k) : a.ra.N.body.appendChild(a.l);
  (!a.u || a.u.H) && a.sa()
}
s.sa = function() {
  this.H = j;
  Og(this, function(a) {
    !a.H && a.f() && a.sa()
  })
};
s.Eb = function() {
  Og(this, function(a) {
    a.H && a.Eb()
  });
  this.eb && this.eb.Dd();
  this.H = m
};
s.c = function() {
  Ig.e.c.call(this);
  this.H && this.Eb();
  this.eb && (this.eb.b(), delete this.eb);
  Og(this, function(a) {
    a.b()
  });
  !this.qg && this.l && ef(this.l);
  this.u = this.l = this.zb = this.qa = k
};
s.rb = function(a) {
  this.H && f(Error("Component already rendered"));
  this.Tb = a
};
function Og(a, b) {
  a.qa && Xa(a.qa, b, i)
}
s.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : Lg(a), a = this.zb && c ? (c in this.zb ? this.zb[c] : i) || k : k;
    c && a && (Ta(this.zb, c), bb(this.qa, a), b && (a.Eb(), a.l && ef(a.l)), c = a, c == k && f(Error("Unable to set parent component")), c.u = k, Ig.e.Gd.call(c, k))
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function Pg() {
}
var Qg;
ea(Pg);
s = Pg.prototype;
s.jc = function() {
};
s.r = function(a) {
  var b = a.bb().r("div", Rg(this, a).join(" "), a.Ab);
  this.Fd(a, b);
  return b
};
s.Bb = function(a, b, c) {
  if(a = a.f ? a.f() : a) {
    if(J && !L("7")) {
      var d = Sg(Ne(a), b);
      d.push(b);
      pa(c ? Oe : Pe, a).apply(k, d)
    }else {
      c ? Oe(a, b) : Pe(a, b)
    }
  }
};
s.ve = function(a) {
  if(a.Tb == k) {
    var b;
    a: {
      b = a.H ? a.l : a.ra.N.body;
      var c = We(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (b = c.defaultView.getComputedStyle(b, k))) {
        b = b.direction || b.getPropertyValue("direction");
        break a
      }
      b = ""
    }
    a.Tb = "rtl" == (b || ((a.H ? a.l : a.ra.N.body).currentStyle ? (a.H ? a.l : a.ra.N.body).currentStyle.direction : k) || (a.H ? a.l : a.ra.N.body).style && (a.H ? a.l : a.ra.N.body).style.direction)
  }
  a.Tb && this.rb(a.f(), j);
  a.isEnabled() && this.Wb(a, a.Wa)
};
s.Fd = function(a, b) {
  a.isEnabled() || this.Q(b, 1, j);
  a.d & 8 && this.Q(b, 8, j);
  a.L & 16 && this.Q(b, 16, !!(a.d & 16));
  a.L & 64 && this.Q(b, 64, !!(a.d & 64))
};
s.Ec = function(a, b) {
  var c = !b, d = J || $b ? a.getElementsByTagName("*") : k;
  if(Dg) {
    if(c = c ? "none" : "", a.style[Dg] = c, d) {
      for(var e = 0, g;g = d[e];e++) {
        g.style[Dg] = c
      }
    }
  }else {
    if(J || $b) {
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for(e = 0;g = d[e];e++) {
          g.setAttribute("unselectable", c)
        }
      }
    }
  }
};
s.rb = function(a, b) {
  this.Bb(a, this.va() + "-rtl", b)
};
s.ye = function(a) {
  var b;
  return a.L & 32 && (b = a.Ma()) ? jf(b) : m
};
s.Wb = function(a, b) {
  var c;
  if(a.L & 32 && (c = a.Ma())) {
    if(!b && a.d & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.d & 32 && a.le()
    }
    jf(c) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
s.Id = function(a, b) {
  a.style.display = b ? "" : "none"
};
s.O = function(a, b, c) {
  var d = a.f();
  if(d) {
    var e = Tg(this, b);
    e && this.Bb(a, e, c);
    this.Q(d, b, c)
  }
};
s.Q = function(a, b, c) {
  Qg || (Qg = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Qg[b]) && a.setAttribute("aria-" + b, c)
};
s.Ma = function(a) {
  return a.f()
};
s.va = q("goog-control");
function Rg(a, b) {
  var c = a.va(), d = [c], e = a.va();
  e != c && d.push(e);
  c = b.d;
  for(e = [];c;) {
    var g = c & -c;
    e.push(Tg(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.ca) && d.push.apply(d, c);
  J && !L("7") && d.push.apply(d, Sg(d));
  return d
}
function Sg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Xa([], function(d) {
    $a(d, pa(ab, a)) && (!b || ab(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Tg(a, b) {
  if(!a.Zd) {
    var c = a.va();
    a.Zd = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Zd[b]
}
;function Ug(a, b) {
  a || f(Error("Invalid class name " + a));
  x(b) || f(Error("Invalid decorator function " + b))
}
var Vg = {};
function Wg(a, b, c, d, e) {
  if(!J && (!K || !L("525"))) {
    return j
  }
  if(dc && e) {
    return Xg(a)
  }
  if(e && !d || !c && (17 == b || 18 == b) || J && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(J && nc());
    case 27:
      return!K
  }
  return Xg(a)
}
function Xg(a) {
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
;function Yg(a, b) {
  a && Zg(this, a, b)
}
B(Yg, Qc);
s = Yg.prototype;
s.l = k;
s.sc = k;
s.md = k;
s.tc = k;
s.za = -1;
s.ya = -1;
var $g = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, ah = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, bh = {61:187, 
59:186}, ch = J || K && L("525");
s = Yg.prototype;
s.Lf = function(a) {
  if(K && (17 == this.za && !a.ctrlKey || 18 == this.za && !a.altKey)) {
    this.ya = this.za = -1
  }
  ch && !Wg(a.keyCode, this.za, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.ya = ac && a.keyCode in bh ? bh[a.keyCode] : a.keyCode
};
s.Nf = function() {
  this.ya = this.za = -1
};
s.handleEvent = function(a) {
  var b = a.ka, c, d;
  J && "keypress" == a.type ? (c = this.ya, d = 13 != c && 27 != c ? b.keyCode : 0) : K && "keypress" == a.type ? (c = this.ya, d = 0 <= b.charCode && 63232 > b.charCode && Xg(c) ? b.charCode : 0) : $b ? (c = this.ya, d = Xg(c) ? b.keyCode : 0) : (c = b.keyCode || this.ya, d = b.charCode || 0, dc && 63 == d && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? 63232 <= c && c in $g ? e = $g[c] : 25 == c && a.shiftKey && (e = 9) : g && g in ah && (e = ah[g]);
  a = e == this.za;
  this.za = e;
  b = new dh(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.b()
  }
};
s.f = o("l");
function Zg(a, b, c) {
  a.tc && a.detach();
  a.l = b;
  a.sc = O(a.l, "keypress", a, c);
  a.md = O(a.l, "keydown", a.Lf, c, a);
  a.tc = O(a.l, "keyup", a.Nf, c, a)
}
s.detach = function() {
  this.sc && (Kc(this.sc), Kc(this.md), Kc(this.tc), this.tc = this.md = this.sc = k);
  this.l = k;
  this.ya = this.za = -1
};
s.c = function() {
  Yg.e.c.call(this);
  this.detach()
};
function dh(a, b, c, d) {
  d && this.Oa(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
B(dh, yc);
function Z(a, b, c) {
  Ig.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = ka(b);
      if(d = Vg[d]) {
        break
      }
      b = b.e ? b.e.constructor : k
    }
    b = d ? x(d.cb) ? d.cb() : new d : k
  }
  this.v = b;
  this.Ab = a
}
B(Z, Ig);
s = Z.prototype;
s.Ab = k;
s.d = 0;
s.L = 39;
s.Rc = 255;
s.hg = 0;
s.Wa = j;
s.ca = k;
s.gd = j;
s.Qc = m;
s.Yf = k;
s.Ma = function() {
  return this.v.Ma(this)
};
function eh(a, b) {
  b && (a.ca ? ab(a.ca, b) || a.ca.push(b) : a.ca = [b], a.v.Bb(a, b, j))
}
s.Bb = function(a, b) {
  b ? eh(this, a) : a && this.ca && (bb(this.ca, a), 0 == this.ca.length && (this.ca = k), this.v.Bb(this, a, m))
};
s.r = function() {
  var a = this.v.r(this);
  this.l = a;
  var b = this.Yf || this.v.jc();
  b && (a.setAttribute("role", b), a.xh = b);
  this.Qc || this.v.Ec(a, m);
  this.Wa || this.v.Id(a, m)
};
s.sa = function() {
  Z.e.sa.call(this);
  this.v.ve(this);
  if(this.L & -2 && (this.gd && fh(this, j), this.L & 32)) {
    var a = this.Ma();
    if(a) {
      var b = this.ib || (this.ib = new Yg);
      Zg(b, a);
      Y(Y(Y(Mg(this), b, "key", this.Mf), a, "focus", this.Kf), a, "blur", this.le)
    }
  }
};
function fh(a, b) {
  var c = Mg(a), d = a.f();
  b ? (Y(Y(Y(Y(c, d, "mouseover", a.qe), d, "mousedown", a.oe), d, "mouseup", a.re), d, "mouseout", a.pe), J && Y(c, d, "dblclick", a.ne)) : (Gg(Gg(Gg(Gg(c, d, "mouseover", a.qe), d, "mousedown", a.oe), d, "mouseup", a.re), d, "mouseout", a.pe), J && Gg(c, d, "dblclick", a.ne))
}
s.Eb = function() {
  Z.e.Eb.call(this);
  this.ib && this.ib.detach();
  this.Wa && this.isEnabled() && this.v.Wb(this, m)
};
s.c = function() {
  Z.e.c.call(this);
  this.ib && (this.ib.b(), delete this.ib);
  delete this.v;
  this.ca = this.Ab = k
};
function gh(a) {
  a = a.Ab;
  if(!a) {
    return""
  }
  if(!v(a)) {
    if(u(a)) {
      a = Ya(a, kf).join("")
    }else {
      if(Se && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        lf(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Se || (a = a.replace(/ +/g, " "));
      " " != a && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
s.rb = function(a) {
  Z.e.rb.call(this, a);
  var b = this.f();
  b && this.v.rb(b, a)
};
s.Ec = function(a) {
  this.Qc = a;
  var b = this.f();
  b && this.v.Ec(b, a)
};
s.Id = function(a, b) {
  if(b || this.Wa != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.f();
    c && this.v.Id(c, a);
    this.isEnabled() && this.v.Wb(this, a);
    this.Wa = a;
    return j
  }
  return m
};
s.isEnabled = function() {
  return!(this.d & 1)
};
s.Fc = function(a) {
  var b = this.getParent();
  if((!b || "function" != typeof b.isEnabled || b.isEnabled()) && hh(this, 1, !a)) {
    a || (this.setActive(m), ih(this, m)), this.Wa && this.v.Wb(this, a), this.O(1, !a)
  }
};
function ih(a, b) {
  hh(a, 2, b) && a.O(2, b)
}
s.we = function() {
  return!!(this.d & 4)
};
s.setActive = function(a) {
  hh(this, 4, a) && this.O(4, a)
};
s.O = function(a, b) {
  this.L & a && b != !!(this.d & a) && (this.v.O(this, a, b), this.d = b ? this.d | a : this.d & ~a)
};
function $(a, b) {
  return!!(a.Rc & b) && !!(a.L & b)
}
function hh(a, b, c) {
  return!!(a.L & b) && !!(a.d & b) != c && (!(a.hg & b) || a.dispatchEvent(Kg(b, c))) && !a.ba
}
s.qe = function(a) {
  (!a.relatedTarget || !ff(this.f(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && $(this, 2) && ih(this, j)
};
s.pe = function(a) {
  if((!a.relatedTarget || !ff(this.f(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    $(this, 4) && this.setActive(m), $(this, 2) && ih(this, m)
  }
};
s.oe = function(a) {
  if(this.isEnabled() && ($(this, 2) && ih(this, j), Bc(a) && (!K || !dc || !a.ctrlKey))) {
    $(this, 4) && this.setActive(j), this.v.ye(this) && this.Ma().focus()
  }
  !this.Qc && Bc(a) && (!K || !dc || !a.ctrlKey) && a.preventDefault()
};
s.re = function(a) {
  this.isEnabled() && ($(this, 2) && ih(this, j), this.we() && this.Ob(a) && $(this, 4) && this.setActive(m))
};
s.ne = function(a) {
  this.isEnabled() && this.Ob(a)
};
s.Ob = function(a) {
  if($(this, 16)) {
    var b = !(this.d & 16);
    hh(this, 16, b) && this.O(16, b)
  }
  $(this, 8) && hh(this, 8, j) && this.O(8, j);
  $(this, 64) && (b = !(this.d & 64), hh(this, 64, b) && this.O(64, b));
  b = new vc("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.Bd = a.Bd);
  return this.dispatchEvent(b)
};
s.Kf = function() {
  $(this, 32) && hh(this, 32, j) && this.O(32, j)
};
s.le = function() {
  $(this, 4) && this.setActive(m);
  $(this, 32) && hh(this, 32, m) && this.O(32, m)
};
s.Mf = function(a) {
  return this.Wa && this.isEnabled() && this.fd(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
s.fd = function(a) {
  return 13 == a.keyCode && this.Ob(a)
};
x(Z) || f(Error("Invalid component class " + Z));
x(Pg) || f(Error("Invalid renderer class " + Pg));
var jh = ka(Z);
Vg[jh] = Pg;
Ug("goog-control", function() {
  return new Z(k)
});
function kh() {
}
B(kh, Pg);
ea(kh);
s = kh.prototype;
s.jc = q("button");
s.Q = function(a, b, c) {
  16 == b ? a.setAttribute("aria-pressed", c) : kh.e.Q.call(this, a, b, c)
};
s.r = function(a) {
  var b = kh.e.r.call(this, a), c = a.nc();
  c && this.Hd(b, c);
  (c = a.oc()) && this.Gc(b, c);
  a.L & 16 && this.Q(b, 16, !!(a.d & 16));
  return b
};
s.oc = da;
s.Gc = da;
s.nc = function(a) {
  return a.title
};
s.Hd = function(a, b) {
  a && (a.title = b || "")
};
s.va = q("goog-button");
function lh() {
}
B(lh, kh);
ea(lh);
s = lh.prototype;
s.jc = function() {
};
s.r = function(a) {
  a.H && m != a.gd && fh(a, m);
  a.gd = m;
  a.Rc &= -256;
  a.H && a.d & 32 && f(Error("Component already rendered"));
  a.d & 32 && a.O(32, m);
  a.L &= -33;
  return a.bb().r("button", {"class":Rg(this, a).join(" "), disabled:!a.isEnabled(), title:a.nc() || "", value:a.oc() || ""}, gh(a) || "")
};
s.ve = function(a) {
  Y(Mg(a), a.f(), "click", a.Ob)
};
s.Ec = da;
s.rb = da;
s.ye = function(a) {
  return a.isEnabled()
};
s.Wb = da;
s.O = function(a, b, c) {
  lh.e.O.call(this, a, b, c);
  if((a = a.f()) && 1 == b) {
    a.disabled = c
  }
};
s.oc = function(a) {
  return a.value
};
s.Gc = function(a, b) {
  a && (a.value = b)
};
s.Q = da;
function mh(a, b, c) {
  Z.call(this, a, b || lh.cb(), c)
}
B(mh, Z);
s = mh.prototype;
s.oc = o("jf");
s.Gc = function(a) {
  this.jf = a;
  this.v.Gc(this.f(), a)
};
s.nc = o("ff");
s.Hd = function(a) {
  this.ff = a;
  this.v.Hd(this.f(), a)
};
s.c = function() {
  mh.e.c.call(this);
  delete this.jf;
  delete this.ff
};
s.sa = function() {
  mh.e.sa.call(this);
  if(this.L & 32) {
    var a = this.Ma();
    a && Y(Mg(this), a, "keyup", this.fd)
  }
};
s.fd = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Ob(a) : 32 == a.keyCode
};
Ug("goog-button", function() {
  return new mh(k)
});
function nh() {
}
B(nh, kh);
ea(nh);
nh.prototype.r = function(a) {
  var b = {"class":"goog-inline-block " + Rg(this, a).join(" "), title:a.nc() || ""}, b = a.bb().r("div", b, oh(this, a.Ab, a.bb()));
  this.Fd(a, b);
  return b
};
nh.prototype.jc = q("button");
nh.prototype.Fd = function(a, b) {
  a.isEnabled() || this.Q(b, 1, j);
  a.d & 8 && this.Q(b, 8, j);
  a.L & 16 && this.Q(b, 16, j);
  a.d & 64 && this.Q(b, 64, j)
};
function oh(a, b, c) {
  return c.r("div", "goog-inline-block " + (a.va() + "-outer-box"), c.r("div", "goog-inline-block " + (a.va() + "-inner-box"), b))
}
nh.prototype.va = q("goog-custom-button");
function ph(a, b, c) {
  mh.call(this, a, b || nh.cb(), c)
}
B(ph, mh);
Ug("goog-custom-button", function() {
  return new ph(k)
});
var qh;
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
  qh = c
})();
function rh(a, b) {
  Ig.call(this, b);
  this.Ff = a;
  this.bd = new Eg(this);
  this.hc = new I
}
B(rh, Ig);
s = rh.prototype;
s.a = U("goog.ui.media.FlashObject");
s.sg = "window";
s.Wd = "#000000";
s.pf = "sameDomain";
function sh(a, b, c) {
  a.Td = v(b) ? b : Math.round(b) + "px";
  a.hd = v(c) ? c : Math.round(c) + "px";
  a.f() && (b = a.f() ? a.f().firstChild : k, c = a.Td, a = a.hd, c instanceof Qe ? (a = c.height, c = c.width) : a == i && f(Error("missing height argument")), b.style.width = Cg(c), b.style.height = Cg(a))
}
s.sa = function() {
  rh.e.sa.call(this);
  var a = this.f(), b;
  b = J ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = J ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = va(c, this.sg), d = this.hc.da(), e = this.hc.J(), g = [], h = 0;h < d.length;h++) {
    var l = ya(d[h]), n = ya(e[h]);
    g.push(l + "=" + n)
  }
  b = va(b, Lg(this), Lg(this), "goog-ui-media-flash-object", D(this.Ff), D(g.join("&")), this.Wd, this.pf, c);
  a.innerHTML = b;
  this.Td && this.hd && sh(this, this.Td, this.hd);
  Y(this.bd, this.f(), Ra(tc), wc)
};
s.r = function() {
  this.Ye != k && !(0 <= Ga(qh, this.Ye)) && (R(this.a, "Required flash version not found:" + this.Ye), f(Error("Method not supported")));
  var a = this.bb().createElement("div");
  a.className = "goog-ui-media-flash";
  this.l = a
};
s.c = function() {
  rh.e.c.call(this);
  this.hc = k;
  this.bd.b();
  this.bd = k
};
function th(a) {
  C.call(this, a)
}
B(th, C);
th.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function uh(a, b, c) {
  function d() {
    e && delete t.__loadFlashObject_callbacks[e]
  }
  var e;
  if(ac && !L("1.8.1.20")) {
    return cd(new th("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(0 <= Ga(qh, "9"))) {
    return b = qh, cd(new th("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  e = "_" + id();
  var h = new Sc(d);
  t.__loadFlashObject_callbacks[e] = function() {
    a.setTimeout(function() {
      d();
      h.ia(X(g))
    }, 0)
  };
  b.hc.set("onloadcallback", '__loadFlashObject_callbacks["' + e + '"]()');
  g = Lg(b);
  Ng(b, c);
  return h
}
function vh(a, b, c) {
  var d = uh(a, b, c), e = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  $c(d, function(b) {
    a.clearTimeout(e);
    return b
  });
  return d
}
;function wh() {
}
wh.prototype.bc = k;
var xh;
function yh() {
}
B(yh, wh);
function zh(a) {
  return(a = Ah(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Bh(a) {
  var b = {};
  Ah(a) && (b[0] = j, b[1] = j);
  return b
}
yh.prototype.jd = k;
function Ah(a) {
  if(!a.jd && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.jd = d
      }catch(e) {
      }
    }
    f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.jd
}
xh = new yh;
function Ch(a) {
  this.headers = new I;
  this.vb = a || k
}
B(Ch, Qc);
Ch.prototype.a = U("goog.net.XhrIo");
var Dh = /^https?$/i;
s = Ch.prototype;
s.oa = m;
s.i = k;
s.Nc = k;
s.pd = "";
s.Ae = "";
s.Kb = "";
s.ad = m;
s.rc = m;
s.kd = m;
s.Na = m;
s.Jc = 0;
s.Ua = k;
s.$e = "";
s.rg = m;
s.send = function(a, b, c, d) {
  this.i && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.pd = a;
  this.Kb = "";
  this.Ae = b;
  this.ad = m;
  this.oa = j;
  this.i = this.vb ? zh(this.vb) : zh(xh);
  this.Nc = this.vb ? this.vb.bc || (this.vb.bc = Bh(this.vb)) : xh.bc || (xh.bc = Bh(xh));
  this.i.onreadystatechange = y(this.Oe, this);
  try {
    S(this.a, Eh(this, "Opening Xhr")), this.kd = j, this.i.open(b, a, j), this.kd = m
  }catch(e) {
    S(this.a, Eh(this, "Error opening Xhr: " + e.message));
    Fh(this, e);
    return
  }
  var a = c || "", g = this.headers.F();
  d && Gb(d, function(a, b) {
    g.set(b, a)
  });
  "POST" == b && !g.V("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Gb(g, function(a, b) {
    this.i.setRequestHeader(b, a)
  }, this);
  this.$e && (this.i.responseType = this.$e);
  "withCredentials" in this.i && (this.i.withCredentials = this.rg);
  try {
    this.Ua && (Rc.clearTimeout(this.Ua), this.Ua = k), 0 < this.Jc && (S(this.a, Eh(this, "Will abort after " + this.Jc + "ms if incomplete")), this.Ua = Rc.setTimeout(y(this.ng, this), this.Jc)), S(this.a, Eh(this, "Sending request")), this.rc = j, this.i.send(a), this.rc = m
  }catch(h) {
    S(this.a, Eh(this, "Send error: " + h.message)), Fh(this, h)
  }
};
s.ng = function() {
  "undefined" != typeof ba && this.i && (this.Kb = "Timed out after " + this.Jc + "ms, aborting", S(this.a, Eh(this, this.Kb)), this.dispatchEvent("timeout"), this.abort(8))
};
function Fh(a, b) {
  a.oa = m;
  a.i && (a.Na = j, a.i.abort(), a.Na = m);
  a.Kb = b;
  Gh(a);
  Hh(a)
}
function Gh(a) {
  a.ad || (a.ad = j, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
s.abort = function() {
  this.i && this.oa && (S(this.a, Eh(this, "Aborting")), this.oa = m, this.Na = j, this.i.abort(), this.Na = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Hh(this))
};
s.c = function() {
  this.i && (this.oa && (this.oa = m, this.Na = j, this.i.abort(), this.Na = m), Hh(this, j));
  Ch.e.c.call(this)
};
s.Oe = function() {
  !this.kd && !this.rc && !this.Na ? this.Wf() : Ih(this)
};
s.Wf = function() {
  Ih(this)
};
function Ih(a) {
  if(a.oa && "undefined" != typeof ba) {
    if(a.Nc[1] && 4 == a.wa() && 2 == Jh(a)) {
      S(a.a, Eh(a, "Local request error detected and ignored"))
    }else {
      if(a.rc && 4 == a.wa()) {
        Rc.setTimeout(y(a.Oe, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == a.wa()) {
          S(a.a, Eh(a, "Request complete"));
          a.oa = m;
          var b = Jh(a), c;
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
              b = ("" + a.pd).match(pe)[1] || k, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), b = !Dh.test(b ? b.toLowerCase() : "")
            }
            c = b
          }
          if(c) {
            a.dispatchEvent("complete"), a.dispatchEvent("success")
          }else {
            var d;
            try {
              d = 2 < a.wa() ? a.i.statusText : ""
            }catch(e) {
              S(a.a, "Can not get status: " + e.message), d = ""
            }
            a.Kb = d + " [" + Jh(a) + "]";
            Gh(a)
          }
          Hh(a)
        }
      }
    }
  }
}
function Hh(a, b) {
  if(a.i) {
    var c = a.i, d = a.Nc[0] ? da : k;
    a.i = k;
    a.Nc = k;
    a.Ua && (Rc.clearTimeout(a.Ua), a.Ua = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(e) {
      Q(a.a, "Problem encountered resetting onreadystatechange: " + e.message)
    }
  }
}
s.we = function() {
  return!!this.i
};
s.wa = function() {
  return this.i ? this.i.readyState : 0
};
function Jh(a) {
  try {
    return 2 < a.wa() ? a.i.status : -1
  }catch(b) {
    return R(a.a, "Can not get status: " + b.message), -1
  }
}
s.getResponseHeader = function(a) {
  return this.i && 4 == this.wa() ? this.i.getResponseHeader(a) : i
};
function Eh(a, b) {
  return b + " [" + a.Ae + " " + a.pd + " " + Jh(a) + "]"
}
;var Kh = !(J || K && !L("420+"));
function Lh(a, b) {
  this.Kc = a;
  this.Z = b
}
B(Lh, M);
s = Lh.prototype;
s.o = k;
s.Fa = -1;
s.ke = m;
s.te = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Mh(a) {
  var b = xf(a.de), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.Z, c, b), 1 != b && a.b()) : a.b()
}
s.Of = function() {
  Mh(this);
  if(!this.ba) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.Z);
    this.b()
  }
};
s.$f = function() {
  var a = t.parent;
  if(a) {
    this.Fa = this.o.wa();
    if(2 <= this.Fa && !this.ke) {
      for(var b = new I, c = this.te.length;c--;) {
        var d = this.te[c];
        try {
          b.set(d, this.o.i.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.t()) {
        this.ke = j;
        var c = {}, g;
        for(g in b.n) {
          ":" == g.charAt(0) && (c[Ib(b, g)] = b.n[g])
        }
        a.__XHRMaster_ongotheaders(this.Z, c);
        if(this.ba) {
          return
        }
      }
    }
    a.__XHRMaster_onreadystatechange(this.Z, this.Fa);
    Kh && 3 == this.Fa && Mh(this)
  }else {
    this.b()
  }
};
s.sd = function(a, b, c) {
  this.o = new Ch;
  O(this.o, "readystatechange", y(this.$f, this));
  O(this.o, "complete", y(this.Of, this));
  this.o.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.de = new wf(this.o.i, 1048576)
};
s.c = function() {
  Lh.e.c.call(this);
  delete this.de;
  this.o && this.o.b();
  delete this.Kc.Xb[this.Z];
  delete this.Kc
};
function Nh() {
  this.Xb = {}
}
B(Nh, M);
Nh.prototype.Sf = function(a, b, c, d) {
  var e = new Lh(this, a);
  this.Xb[a] = e;
  e.sd(b, c, d)
};
Nh.prototype.yf = function(a) {
  (a = this.Xb[a]) && a.b()
};
Nh.prototype.c = function() {
  Nh.e.c.call(this);
  for(var a = Ra(this.Xb);a.length;) {
    a.pop().b()
  }
  delete this.Xb
};
var Ph = new Nh;
t.__XHRSlave_makeRequest = y(Ph.Sf, Ph);
t.__XHRSlave_dispose = y(Ph.yf, Ph);
function Qh() {
}
Qh.prototype.je = function() {
  return Boolean(Number((new W(document.location)).K.get("httpStreaming", "0"))) ? 2 : 1
};
function Rh(a) {
  var b = new rh("/compiled_client/FlashConnector.swf?cb=4bdfc178fc0e508c0cd5efc3fdb09920");
  b.Wd = "#777777";
  sh(b, 300, 30);
  var c = X("FlashConnectorSwf");
  c || f(Error("no FlashConnectorSwf?"));
  return vh(a.G, b, c)
}
function Sh(a, b, c) {
  var d = new W(document.location);
  if(c) {
    var e = d.W, g = t.__demo_mainSocketPort, d = Rh(a);
    Yc(d, function(b) {
      b = new Vd(a, b);
      return new Df(e, g, b)
    });
    return d
  }
  b ? (b = t.__demo_shared_domain, d = d.F(), te(d, "_____random_____." + b)) : d = d.F();
  ve(d, "/httpface/");
  we(d, "", i);
  d = new Ef(d.toString().replace("_____random_____", "%random%"));
  return bd(d)
}
function Th() {
  var a = Uh, b = (new W(document.location)).K, c = "http" != b.get("mode"), b = Boolean(Number(b.get("useSub", "1")));
  return Sh(a, b, c)
}
;var Vh = U("ljstream.logger");
window.onerror = function(a, b, c) {
  Q(Vh, "window.onerror: message: " + H(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Wh() {
  this.Qe = new ub
}
Wh.prototype.kg = function(a, b) {
  Vh.info("streamReset: reasonString=" + H(a) + ", applicationLevel=" + b);
  Xh("Disconnected from server.  Try reloading this page.");
  Yh = k
};
function Zh(a) {
  Vh.info("Sending preferences to server");
  var b;
  b = new fg;
  b.m[1] = X("include_russian_posts").checked;
  b.Ka && (b.Ka[1] = j);
  b = a.Qe.Vb(b);
  Pf(a.A, [(new xb(i)).Vb([2, b])])
}
Wh.prototype.lg = function(a) {
  var a = wb(a), b = a[1];
  if(1 == a[0]) {
    var c = this.Qe.$c(eg.Gb(), b), a = nb(c, 1), b = nb(c, 2), c = nb(c, 3);
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
    a = af("span", {}, af("a", {href:b, "class":"ljpost-title-link"}, a), af("span", {}, "\u00a0"), c);
    $h(a)
  }
};
Wh.prototype.reset = function(a) {
  Vh.info("resetting with reason: " + a);
  this.A.reset(a)
};
var Yh = k, Uh = new dd(t.window);
function Xh(a) {
  a = af("span", {"class":"important-message"}, a);
  $h(a)
}
function ai() {
  Yh && (Yh.reset("idle timeout fired"), Yh = k, Xh("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var bi = k;
function ci() {
  bi != k && Uh.G.clearTimeout(bi);
  Yh && (bi = Uh.G.setTimeout(ai, 6E5))
}
O(window, ["click", "focus", "keydown", "keypress"], ci, j);
var $e = new Ve, di = 0;
function $h(a) {
  a = af("div", {"class":"row-" + (0 == di % 2 ? "even" : "odd")}, af("nobr", {}, a));
  X("ljstream-container-inner").appendChild(a);
  di += 1;
  var b;
  if(b = dg) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !K && "CSS1Compat" == d.compatMode ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new Te(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = Ze().height;
    b = !(a + b <= c + d)
  }
  b && (a = Ze().height, window.scrollBy(0, Math.round(a / 2) + 80))
}
function ei() {
  var a = new Qh;
  Yh = new Wh;
  ci();
  Yc(Th(), function(b) {
    Yh || f(Error("lastProto falsy?"));
    var b = new Jf(b, a, Uh), c = Yh;
    b.Ad = y(c.lg, c);
    b.onreset = y(c.kg, c);
    Yh.A = b;
    c = Yh;
    Pf(c.A, ["subprotocol:ljstream"]);
    Zh(c);
    b.start();
    return k
  })
}
function fi() {
  O(t, "load", function() {
    window.scrollTo(0, 0)
  });
  O(X("include_russian_posts"), "click", function() {
    Zh(Yh)
  });
  dg = j;
  O(X("automatic_scroll"), "click", function(a) {
    dg = a.target.checked
  });
  var a = new ph("Clear posts");
  eh(a, "clear-posts-button");
  Ng(a, X("prefs"));
  O(a, "action", function() {
    X("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = X("ljstream-container");
  a.style.marginTop = X("demo-header").offsetHeight + "px";
  X("demo-header").style.width = "9000px";
  var b = af("div", {id:"ljstream-container-inner"});
  a.appendChild(b)
}
function gi() {
  Nd().qb(Fd);
  if("1" == (new W(document.location)).K.get("logging")) {
    var a = new wg("main");
    a.Fc(j);
    a.Oa()
  }
  Vh.info("Logger works.");
  fi();
  ei()
}
var hi = "__ljstream_init".split("."), ii = t;
!(hi[0] in ii) && ii.execScript && ii.execScript("var " + hi[0]);
for(var ji;hi.length && (ji = hi.shift());) {
  !hi.length && ga(gi) ? ii[ji] = gi : ii = ii[ji] ? ii[ji] : ii[ji] = {}
}
;})();
