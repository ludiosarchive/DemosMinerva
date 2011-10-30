(function(){function f(a) {
  throw a;
}
var i = void 0, j = true, k = null, m = false;
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
function u() {
}
function da(a) {
  a.gb = function() {
    return a.Yf || (a.Yf = new a)
  }
}
function ea(a) {
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
function fa(a) {
  return a !== i
}
function v(a) {
  return ea(a) == "array"
}
function ga(a) {
  var b = ea(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function ha(a) {
  return ia(a) && typeof a.getFullYear == "function"
}
function w(a) {
  return typeof a == "string"
}
function y(a) {
  return ea(a) == "function"
}
function ia(a) {
  a = ea(a);
  return a == "object" || a == "array" || a == "function"
}
function z(a) {
  return a[ja] || (a[ja] = ++ka)
}
var ja = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), ka = 0;
function la(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ma(a, b, c) {
  a || f(Error());
  if(arguments.length > 2) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }else {
    return function() {
      return a.apply(b, arguments)
    }
  }
}
function A(a, b, c) {
  A = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? la : ma;
  return A.apply(k, arguments)
}
function na(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var D = Date.now || function() {
  return+new Date
};
function E(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.d = b.prototype;
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
var oa, pa, qa, ra;
oa = RegExp("(?:\\b[a-z\\d.-]+://[^<>\\s]+|\\b(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:[;/][^#?<>\\s]*)?(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w)|(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w))", 
"ig");
pa = /^[a-z\d.-]+:\/\//i;
qa = {"'":"`", ">":"<", ")":"(", "]":"[", "}":"{", "\u00bb":"\u00ab", "\u203a":"\u2039"};
ra = {ia:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, bf:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
function sa(a) {
  var b;
  b = b || {};
  var c = [], d, e;
  for(e in ra) {
    fa(b[e]) || (b[e] = ra[e])
  }
  for(;e = oa.exec(a);) {
    e = e[0];
    var g = oa.lastIndex, h = g - e.length;
    if(!/[\/:]/.test(a.charAt(h - 1))) {
      do {
        var l = e, n = e.substr(-1), p = qa[n];
        if(p && (p = e.match(RegExp("\\" + p + "(?!$)", "g")), n = e.match(RegExp("\\" + n, "g")), (p ? p.length : 0) < (n ? n.length : 0))) {
          e = e.substr(0, e.length - 1), g--
        }
        b.bf && (e = e.replace(b.bf, function(a) {
          g -= a.length;
          return""
        }))
      }while(e.length && e !== l);
      l = e;
      pa.test(l) || (l = (l.indexOf("@") !== -1 ? !l.indexOf("mailto:") ? "" : "mailto:" : !l.indexOf("irc.") ? "irc://" : !l.indexOf("ftp.") ? "ftp://" : "http://") + l);
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
;function F(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = String(a)
  }
}
E(F, Error);
F.prototype.name = "CustomError";
function ta(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
function ua(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
var va = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function wa(a) {
  a = String(a);
  return!va.test(a) ? encodeURIComponent(a) : a
}
function xa(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function G(a) {
  if(!ya.test(a)) {
    return a
  }
  a.indexOf("&") != -1 && (a = a.replace(za, "&amp;"));
  a.indexOf("<") != -1 && (a = a.replace(Aa, "&lt;"));
  a.indexOf(">") != -1 && (a = a.replace(Ba, "&gt;"));
  a.indexOf('"') != -1 && (a = a.replace(Ca, "&quot;"));
  return a
}
var za = /&/g, Aa = /</g, Ba = />/g, Ca = /\"/g, ya = /[&<>\"]/;
function Da(a) {
  return xa(a.replace(/  /g, " &#160;"), i)
}
function Ea(a, b) {
  for(var c = 0, d = ua(String(a)).split("."), e = ua(String(b)).split("."), g = Math.max(d.length, e.length), h = 0;c == 0 && h < g;h++) {
    var l = d[h] || "", n = e[h] || "", p = RegExp("(\\d*)(\\D*)", "g"), B = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = p.exec(l) || ["", "", ""], x = B.exec(n) || ["", "", ""];
      if(r[0].length == 0 && x[0].length == 0) {
        break
      }
      c = Fa(r[1].length == 0 ? 0 : parseInt(r[1], 10), x[1].length == 0 ? 0 : parseInt(x[1], 10)) || Fa(r[2].length == 0, x[2].length == 0) || Fa(r[2], x[2])
    }while(c == 0)
  }
  return c
}
function Fa(a, b) {
  if(a < b) {
    return-1
  }else {
    if(a > b) {
      return 1
    }
  }
  return 0
}
;function Ga(a, b) {
  b.unshift(a);
  F.call(this, ta.apply(k, b));
  b.shift();
  this.Lh = a
}
E(Ga, F);
Ga.prototype.name = "AssertionError";
function Ha(a, b) {
  f(new Ga("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ia(a, b, c) {
  this.v = a;
  this.C = b;
  this.yd = c.name;
  this.kb = !!c.Mh;
  this.Jh = !!c.required;
  this.Ib = c.eb;
  this.Re = c.type;
  this.ke = m;
  switch(this.Ib) {
    case Ja:
    ;
    case Ka:
    ;
    case La:
    ;
    case Ma:
    ;
    case Na:
      this.ke = j
  }
  this.Hh = c.defaultValue
}
var Ja = 3, Ka = 4, La = 6, Ma = 16, Na = 18;
function Oa(a) {
  return a.Ib == 11 || a.Ib == 10
}
;function Pa(a, b) {
  for(var c in a) {
    b.call(i, a[c], c, a)
  }
}
function Qa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Ra(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Sa = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function Ta(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < Sa.length;g++) {
      c = Sa[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var H = Array.prototype, Ua = H.indexOf ? function(a, b, c) {
  return H.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(w(a)) {
    return!w(b) || b.length != 1 ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Va = H.forEach ? function(a, b, c) {
  H.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
}, Wa = H.map ? function(a, b, c) {
  return H.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), g = w(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (e[h] = b.call(c, g[h], h, a))
  }
  return e
}, Xa = H.some ? function(a, b, c) {
  return H.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && b.call(c, e[g], g, a)) {
      return j
    }
  }
  return m
}, Ya = H.every ? function(a, b, c) {
  return H.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && !b.call(c, e[g], g, a)) {
      return m
    }
  }
  return j
};
function Za(a, b) {
  return Ua(a, b) >= 0
}
function $a(a, b) {
  var c = Ua(a, b);
  c >= 0 && H.splice.call(a, c, 1)
}
function ab(a) {
  return H.concat.apply(H, arguments)
}
function bb(a) {
  if(v(a)) {
    return ab(a)
  }else {
    for(var b = [], c = 0, d = a.length;c < d;c++) {
      b[c] = a[c]
    }
    return b
  }
}
function cb(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], e;
    if(v(d) || (e = ga(d)) && d.hasOwnProperty("callee")) {
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
function db(a, b, c, d) {
  H.splice.apply(a, eb(arguments, 1))
}
function eb(a, b, c) {
  return arguments.length <= 2 ? H.slice.call(a, b) : H.slice.call(a, b, c)
}
function fb(a, b) {
  H.sort.call(a, b || gb)
}
function gb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function hb(a, b, c) {
  this.Pe = a;
  this.yd = b.name || k;
  this.Ih = b.oe || k;
  this.Gh = b.Fh;
  this.ua = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.ua[b.C] = b
  }
}
function ib(a) {
  a = Qa(a.ua);
  fb(a, function(a, c) {
    return a.C - c.C
  });
  return a
}
;function jb() {
  this.n = {};
  this.cb = this.constructor.cb;
  var a = this.cb.ua, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.ua = b;
  this.La = this.td = k
}
function kb(a, b) {
  for(var c in a.n) {
    a.ua[c] || b.call(a, Number(c), a.n[c])
  }
}
s = jb.prototype;
s.Jb = o("cb");
s.get = function(a, b) {
  return lb(this, a.C, b)
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
  for(var b = ib(this.Jb()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(mb(this, d.C) != mb(a, d.C)) {
      return m
    }
    if(mb(this, d.C)) {
      var e = Oa(d), g = d.C, h = this.n[g], g = a.n[g];
      if(d.kb) {
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
  for(var a = new this.constructor, b = ib(a.Jb()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete a.n[d.C];
    if(mb(this, d.C)) {
      var e = Oa(d);
      if(d.kb) {
        var g;
        g = d.C;
        nb(this, this.ua[g]);
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
function mb(a, b) {
  return b in a.n && fa(a.n[b]) && a.n[b] !== k
}
function nb(a, b) {
  if(a.td) {
    var c = b.C;
    if(!(c in a.La)) {
      var d = a.n, e;
      e = a.td;
      var g = a.n[c];
      if(g == k) {
        e = g
      }else {
        if(b.kb) {
          var h = [];
          v(g);
          for(var l = 0;l < g.length;l++) {
            h[l] = e.qc(b, g[l])
          }
          e = h
        }else {
          e = e.qc(b, g)
        }
      }
      d[c] = e;
      a.La[c] = j
    }
  }
}
function lb(a, b, c) {
  var d = a.ua[b];
  nb(a, d);
  return d.kb ? (c = c || 0, c >= 0 && ob(a, b), a.n[b][c]) : (v(a.n[b]), b in a.n ? a.n[b] : k)
}
function ob(a, b) {
  return a.ua[b].kb ? (mb(a, b) && v(a.n[b]), mb(a, b) ? a.n[b].length : 0) : mb(a, b) ? 1 : 0
}
function pb(a, b) {
  var c = [], d, e;
  for(e in b) {
    b.hasOwnProperty(e) && (e == 0 ? d = b[0] : c.push(new Ia(a, e, b[e])))
  }
  a.cb = new hb(a, d, c);
  a.Jb = function() {
    return a.cb
  }
}
;function qb() {
}
qb.prototype.rc = function(a, b) {
  return Oa(a) ? this.ac(b) : b
};
qb.prototype.cd = function(a) {
  new a.Pe;
  f(Error("Unimplemented"))
};
qb.prototype.qc = function(a, b) {
  if(Oa(a)) {
    return this.cd(a.Re.cb, b)
  }
  if(!a.ke) {
    return b
  }
  var c = a.Re;
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
function rb() {
}
E(rb, qb);
rb.prototype.cd = function(a, b) {
  var c = new a.Pe;
  c.td = this;
  c.n = b;
  c.La = {};
  return c
};
function sb() {
}
E(sb, rb);
sb.prototype.ac = function(a) {
  for(var b = ib(a.Jb()), c = [], d = 0;d < b.length;d++) {
    var e = b[d];
    if(mb(a, e.C)) {
      var g = e.C;
      if(e.kb) {
        c[g] = [];
        for(var h = 0;h < ob(a, e.C);h++) {
          c[g][h] = this.rc(e, a.get(e, h))
        }
      }else {
        c[g] = this.rc(e, a.get(e))
      }
    }
  }
  kb(a, function(a, b) {
    c[a] = b
  });
  return c
};
sb.prototype.rc = function(a, b) {
  return a.Ib == 8 ? b ? 1 : 0 : qb.prototype.rc.apply(this, arguments)
};
sb.prototype.qc = function(a, b) {
  return a.Ib == 8 ? b === 1 : qb.prototype.qc.apply(this, arguments)
};
function tb(a) {
  return y(a) || typeof a == "object" && y(a.call) && y(a.apply)
}
;function ub(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  f(Error("Invalid JSON string: " + a))
}
function vb(a) {
  this.Fc = a
}
vb.prototype.ac = function(a) {
  var b = [];
  wb(this, a, b);
  return b.join("")
};
function wb(a, b, c) {
  switch(typeof b) {
    case "string":
      xb(b, c);
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
      if(v(b)) {
        var d = b.length;
        c.push("[");
        for(var e = "", g = 0;g < d;g++) {
          c.push(e), e = b[g], wb(a, a.Fc ? a.Fc.call(b, String(g), e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], typeof e != "function" && (c.push(d), xb(g, c), c.push(":"), wb(a, a.Fc ? a.Fc.call(b, g, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      f(Error("Unknown type: " + typeof b))
  }
}
var yb = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\u000b"}, zb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function xb(a, b) {
  b.push('"', a.replace(zb, function(a) {
    if(a in yb) {
      return yb[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    b < 16 ? e += "000" : b < 256 ? e += "00" : b < 4096 && (e += "0");
    return yb[a] = e + b.toString(16)
  }), '"')
}
;function Ab(a, b, c) {
  var d = Ua(c, a);
  if(d != -1) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = ea(a);
    if(d == "boolean" || d == "number" || d == "null" || d == "undefined") {
      b.push(String(a))
    }else {
      if(d == "string") {
        xb(a, b)
      }else {
        if(tb(a.q)) {
          a.q(b, c)
        }else {
          if(tb(a.vf)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if(d == "array") {
                d = a.length;
                b.push("[");
                for(var e = "", g = 0;g < d;g++) {
                  b.push(e), Ab(a[g], b, c), e = ", "
                }
                b.push("]")
              }else {
                if(d == "object") {
                  if(ha(a) && typeof a.valueOf == "function") {
                    b.push("new Date(", String(a.valueOf()), ")")
                  }else {
                    for(var d = Ra(a).concat(Sa), e = {}, h = g = 0;h < d.length;) {
                      var l = d[h++], n = ia(l) ? "o" + z(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(e, n) || (e[n] = j, d[g++] = l)
                    }
                    d.length = g;
                    b.push("{");
                    e = "";
                    for(h = 0;h < d.length;h++) {
                      g = d[h], Object.prototype.hasOwnProperty.call(a, g) && (l = a[g], b.push(e), xb(g, b), b.push(": "), Ab(l, b, c), e = ", ")
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
function I(a, b, c) {
  c || (c = []);
  Ab(a, b, c)
}
function J(a) {
  var b = [];
  I(a, b, i);
  return b.join("")
}
;function Bb(a) {
  if(typeof a.u == "function") {
    a = a.u()
  }else {
    if(ga(a) || w(a)) {
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
function Cb(a) {
  if(typeof a.J == "function") {
    return a.J()
  }
  if(w(a)) {
    return a.split("")
  }
  if(ga(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Qa(a)
}
function Db(a) {
  if(typeof a.na == "function") {
    return a.na()
  }
  if(typeof a.J != "function") {
    if(ga(a) || w(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return Ra(a)
  }
}
function Eb(a, b, c) {
  if(typeof a.forEach == "function") {
    a.forEach(b, c)
  }else {
    if(ga(a) || w(a)) {
      Va(a, b, c)
    }else {
      for(var d = Db(a), e = Cb(a), g = e.length, h = 0;h < g;h++) {
        b.call(c, e[h], d && d[h], a)
      }
    }
  }
}
function Fb(a, b) {
  if(typeof a.every == "function") {
    return a.every(b, i)
  }
  if(ga(a) || w(a)) {
    return Ya(a, b, i)
  }
  for(var c = Db(a), d = Cb(a), e = d.length, g = 0;g < e;g++) {
    if(!b.call(i, d[g], c && c[g], a)) {
      return m
    }
  }
  return j
}
;function K(a, b) {
  this.m = {};
  this.j = [];
  var c = arguments.length;
  if(c > 1) {
    c % 2 && f(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.Tc(a)
  }
}
s = K.prototype;
s.g = 0;
s.Vd = 0;
s.u = o("g");
s.J = function() {
  Gb(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.m[this.j[b]])
  }
  return a
};
s.na = function() {
  Gb(this);
  return this.j.concat()
};
s.U = function(a) {
  return Hb(this.m, a)
};
s.lc = function(a) {
  for(var b = 0;b < this.j.length;b++) {
    var c = this.j[b];
    if(Hb(this.m, c) && this.m[c] == a) {
      return j
    }
  }
  return m
};
s.k = function(a, b) {
  if(this === a) {
    return j
  }
  if(this.g != a.u()) {
    return m
  }
  var c = b || Ib;
  Gb(this);
  for(var d, e = 0;d = this.j[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return m
    }
  }
  return j
};
function Ib(a, b) {
  return a === b
}
s.Sa = function() {
  return this.g == 0
};
s.clear = function() {
  this.m = {};
  this.Vd = this.g = this.j.length = 0
};
s.remove = function(a) {
  return Hb(this.m, a) ? (delete this.m[a], this.g--, this.Vd++, this.j.length > 2 * this.g && Gb(this), j) : m
};
function Gb(a) {
  if(a.g != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      Hb(a.m, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.g != a.j.length) {
    for(var e = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], Hb(e, d) || (a.j[c++] = d, e[d] = 1), b++
    }
    a.j.length = c
  }
}
s.get = function(a, b) {
  return Hb(this.m, a) ? this.m[a] : b
};
s.set = function(a, b) {
  Hb(this.m, a) || (this.g++, this.j.push(a), this.Vd++);
  this.m[a] = b
};
s.Tc = function(a) {
  var b;
  a instanceof K ? (b = a.na(), a = a.J()) : (b = Ra(a), a = Qa(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
s.G = function() {
  return new K(this)
};
function Jb(a) {
  Gb(a);
  for(var b = {}, c = 0;c < a.j.length;c++) {
    var d = a.j[c];
    b[d] = a.m[d]
  }
  return b
}
function Hb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function Kb(a) {
  var b = ea(a);
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
          f(Error("cannot determine size of object type " + b))
        }
      }
    }
  }
}
;function Lb(a, b) {
  this.Za = a;
  this.Va = b
}
Lb.prototype.k = function(a) {
  return a instanceof Lb && this.Za == a.Za && this.Va.join(",") == a.Va
};
Lb.prototype.q = function(a, b) {
  a.push("new SACK(", String(this.Za), ", ");
  I(this.Va, a, b);
  a.push(")")
};
function Mb() {
  this.L = new K
}
s = Mb.prototype;
s.ab = -1;
s.Ha = 0;
s.append = function(a) {
  var b = Kb(a);
  this.L.set(this.ab + 1, [a, b]);
  this.ab += 1;
  this.Ha += b
};
s.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
s.q = function(a) {
  a.push("<Queue with ", String(this.L.u()), " item(s), counter=#", String(this.ab), ", size=", String(this.Ha), ">")
};
function Nb(a) {
  Gb(a.L);
  fb(a.L.j);
  return a.L.j
}
function Ob() {
  this.Ja = new K
}
Ob.prototype.mb = -1;
Ob.prototype.Ha = 0;
function Pb(a) {
  var b = a.Ja.na();
  fb(b);
  return new Lb(a.mb, b)
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
  Sb = Yb.indexOf("Opera") == 0;
  Tb = !Sb && Yb.indexOf("MSIE") != -1;
  Vb = (Ub = !Sb && Yb.indexOf("WebKit") != -1) && Yb.indexOf("Mobile") != -1;
  Wb = !Sb && !Ub && Zb.product == "Gecko"
}
var $b = Sb, L = Tb, ac = Wb, M = Ub, bc = Vb, cc = t.navigator, dc = (cc && cc.platform || "").indexOf("Mac") != -1, ec;
a: {
  var fc = "", gc;
  if($b && t.opera) {
    var hc = t.opera.version, fc = typeof hc == "function" ? hc() : hc
  }else {
    if(ac ? gc = /rv\:([^\);]+)(\)|;)/ : L ? gc = /MSIE\s+([^\);]+)(\)|;)/ : M && (gc = /WebKit\/(\S+)/), gc) {
      var ic = gc.exec(Xb()), fc = ic ? ic[1] : ""
    }
  }
  if(L) {
    var jc, kc = t.document;
    jc = kc ? kc.documentMode : i;
    if(jc > parseFloat(fc)) {
      ec = String(jc);
      break a
    }
  }
  ec = fc
}
var lc = {};
function mc(a) {
  return lc[a] || (lc[a] = Ea(ec, a) >= 0)
}
var nc = {};
function oc() {
  return nc[9] || (nc[9] = L && document.documentMode && document.documentMode >= 9)
}
;var pc = !L || oc(), qc = !L || oc(), rc = L && !mc("8");
var sc = {Lg:"click", Qg:"dblclick", kh:"mousedown", oh:"mouseup", nh:"mouseover", mh:"mouseout", lh:"mousemove", yh:"selectstart", fh:"keypress", eh:"keydown", gh:"keyup", Jg:"blur", Yg:"focus", Rg:"deactivate", Zg:L ? "focusin" : "DOMFocusIn", $g:L ? "focusout" : "DOMFocusOut", Kg:"change", xh:"select", zh:"submit", dh:"input", th:"propertychange", Vg:"dragstart", Sg:"dragenter", Ug:"dragover", Tg:"dragleave", Wg:"drop", Dh:"touchstart", Ch:"touchmove", Bh:"touchend", Ah:"touchcancel", Ng:"contextmenu", 
Xg:"error", bh:"help", hh:"load", ih:"losecapture", uh:"readystatechange", vh:"resize", wh:"scroll", Eh:"unload", ah:"hashchange", ph:"pagehide", qh:"pageshow", sh:"popstate", Og:"copy", rh:"paste", Pg:"cut", Gg:"beforecopy", Hg:"beforecut", Ig:"beforepaste", jh:"message", Mg:"connect"};
function N() {
}
N.prototype.da = m;
N.prototype.b = function() {
  if(!this.da) {
    this.da = j, this.c()
  }
};
N.prototype.c = function() {
  this.Ff && tc.apply(k, this.Ff)
};
function tc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ga(d) ? tc.apply(k, d) : d && typeof d.b == "function" && d.b()
  }
}
;function uc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
E(uc, N);
s = uc.prototype;
s.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
s.Ta = m;
s.Yb = j;
s.stopPropagation = function() {
  this.Ta = j
};
s.preventDefault = function() {
  this.Yb = m
};
function vc(a) {
  a.stopPropagation()
}
;function wc(a) {
  wc[" "](a);
  return a
}
wc[" "] = u;
function xc(a, b) {
  a && this.Ra(a, b)
}
E(xc, uc);
var yc = [1, 4, 2];
s = xc.prototype;
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
s.gg = m;
s.la = k;
s.Ra = function(a, b) {
  var c = this.type = a.type;
  uc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(ac) {
      var e;
      a: {
        try {
          wc(d.nodeName);
          e = j;
          break a
        }catch(g) {
        }
        e = m
      }
      e || (d = k)
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
  this.gg = dc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.la = a;
  delete this.Yb;
  delete this.Ta
};
function zc(a) {
  return pc ? a.la.button == 0 : a.type == "click" ? j : !!(a.la.button & yc[0])
}
s.stopPropagation = function() {
  xc.d.stopPropagation.call(this);
  this.la.stopPropagation ? this.la.stopPropagation() : this.la.cancelBubble = j
};
s.preventDefault = function() {
  xc.d.preventDefault.call(this);
  var a = this.la;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, rc) {
      try {
        if(a.ctrlKey || a.keyCode >= 112 && a.keyCode <= 123) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
s.c = function() {
  xc.d.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.la = k
};
function Ac() {
}
var Bc = 0;
s = Ac.prototype;
s.key = 0;
s.Ua = m;
s.Wc = m;
s.Ra = function(a, b, c, d, e, g) {
  y(a) ? this.Fe = j : a && a.handleEvent && y(a.handleEvent) ? this.Fe = m : f(Error("Invalid listener argument"));
  this.ob = a;
  this.af = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.wc = g;
  this.Wc = m;
  this.key = ++Bc;
  this.Ua = m
};
s.handleEvent = function(a) {
  return this.Fe ? this.ob.call(this.wc || this.src, a) : this.ob.handleEvent.call(this.ob, a)
};
var Cc, Dc = (Cc = "ScriptEngine" in t && t.ScriptEngine() == "JScript") ? t.ScriptEngineMajorVersion() + "." + t.ScriptEngineMinorVersion() + "." + t.ScriptEngineBuildVersion() : "0";
function Ec(a, b) {
  this.Le = b;
  this.Oa = [];
  a > this.Le && f(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.Oa.push(this.ja ? this.ja() : {})
  }
}
E(Ec, N);
Ec.prototype.ja = k;
Ec.prototype.le = k;
function Fc(a) {
  return a.Oa.length ? a.Oa.pop() : a.ja ? a.ja() : {}
}
function Gc(a, b) {
  a.Oa.length < a.Le ? a.Oa.push(b) : Hc(a, b)
}
function Hc(a, b) {
  if(a.le) {
    a.le(b)
  }else {
    if(ia(b)) {
      if(y(b.b)) {
        b.b()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
Ec.prototype.c = function() {
  Ec.d.c.call(this);
  for(var a = this.Oa;a.length;) {
    Hc(this, a.pop())
  }
  delete this.Oa
};
var Ic, Kc, Lc, Mc, Nc, Oc, Pc, Qc, Rc, Sc, Tc;
(function() {
  function a() {
    return{g:0, Z:0}
  }
  function b() {
    return[]
  }
  function c() {
    var a = qc ? function(b) {
      return h.call(a.src, a.key, b)
    } : function(b) {
      b = h.call(a.src, a.key, b);
      if(!b) {
        return b
      }
    };
    return a
  }
  function d() {
    return new Ac
  }
  function e() {
    return new xc
  }
  var g = Cc && !(Ea(Dc, "5.7") >= 0), h;
  Oc = function(a) {
    h = a
  };
  if(g) {
    Ic = function() {
      return Fc(l)
    };
    Kc = function(a) {
      Gc(l, a)
    };
    Lc = function() {
      return Fc(n)
    };
    Mc = function(a) {
      Gc(n, a)
    };
    Nc = function() {
      return Fc(p)
    };
    Pc = function() {
      Gc(p, c())
    };
    Qc = function() {
      return Fc(B)
    };
    Rc = function(a) {
      Gc(B, a)
    };
    Sc = function() {
      return Fc(r)
    };
    Tc = function(a) {
      Gc(r, a)
    };
    var l = new Ec(0, 600);
    l.ja = a;
    var n = new Ec(0, 600);
    n.ja = b;
    var p = new Ec(0, 600);
    p.ja = c;
    var B = new Ec(0, 600);
    B.ja = d;
    var r = new Ec(0, 600);
    r.ja = e
  }else {
    Ic = a, Kc = u, Lc = b, Mc = u, Nc = c, Pc = u, Qc = d, Rc = u, Sc = e, Tc = u
  }
})();
var Uc = {}, O = {}, Vc = {}, Wc = {};
function P(a, b, c, d, e) {
  if(b) {
    if(v(b)) {
      for(var g = 0;g < b.length;g++) {
        P(a, b[g], c, d, e)
      }
      return k
    }else {
      var d = !!d, h = O;
      b in h || (h[b] = Ic());
      h = h[b];
      d in h || (h[d] = Ic(), h.g++);
      var h = h[d], l = z(a), n;
      h.Z++;
      if(h[l]) {
        n = h[l];
        for(g = 0;g < n.length;g++) {
          if(h = n[g], h.ob == c && h.wc == e) {
            if(h.Ua) {
              break
            }
            return n[g].key
          }
        }
      }else {
        n = h[l] = Lc(), h.g++
      }
      g = Nc();
      g.src = a;
      h = Qc();
      h.Ra(c, g, a, b, d, e);
      c = h.key;
      g.key = c;
      n.push(h);
      Uc[c] = h;
      Vc[l] || (Vc[l] = Lc());
      Vc[l].push(h);
      a.addEventListener ? (a == t || !a.ge) && a.addEventListener(b, g, d) : a.attachEvent(b in Wc ? Wc[b] : Wc[b] = "on" + b, g);
      return c
    }
  }else {
    f(Error("Invalid event type"))
  }
}
function Xc(a, b, c, d, e) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      Xc(a, b[g], c, d, e)
    }
    return k
  }
  a = P(a, b, c, d, e);
  Uc[a].Wc = j;
  return a
}
function Yc(a, b, c, d, e) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      Yc(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = Zc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].ob == c && a[g].capture == d && a[g].wc == e) {
          $c(a[g].key);
          break
        }
      }
    }
  }
}
function $c(a) {
  if(!Uc[a]) {
    return m
  }
  var b = Uc[a];
  if(b.Ua) {
    return m
  }
  var c = b.src, d = b.type, e = b.af, g = b.capture;
  c.removeEventListener ? (c == t || !c.ge) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in Wc ? Wc[d] : Wc[d] = "on" + d, e);
  c = z(c);
  e = O[d][g][c];
  if(Vc[c]) {
    var h = Vc[c];
    $a(h, b);
    h.length == 0 && delete Vc[c]
  }
  b.Ua = j;
  e.Te = j;
  ad(d, g, c, e);
  delete Uc[a];
  return j
}
function ad(a, b, c, d) {
  if(!d.Bc && d.Te) {
    for(var e = 0, g = 0;e < d.length;e++) {
      if(d[e].Ua) {
        var h = d[e].af;
        h.src = k;
        Pc(h);
        Rc(d[e])
      }else {
        e != g && (d[g] = d[e]), g++
      }
    }
    d.length = g;
    d.Te = m;
    g == 0 && (Mc(d), delete O[a][b][c], O[a][b].g--, O[a][b].g == 0 && (Kc(O[a][b]), delete O[a][b], O[a].g--), O[a].g == 0 && (Kc(O[a]), delete O[a]))
  }
}
function bd(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Pa(Vc, function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          $c(g.key), c++
        }
      }
    })
  }else {
    if(a = z(a), Vc[a]) {
      for(var a = Vc[a], e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          $c(g.key), c++
        }
      }
    }
  }
}
function Zc(a, b, c) {
  var d = O;
  return b in d && (d = d[b], c in d && (d = d[c], a = z(a), d[a])) ? d[a] : k
}
function cd(a, b, c, d, e) {
  var g = 1, b = z(b);
  if(a[b]) {
    a.Z--;
    a = a[b];
    a.Bc ? a.Bc++ : a.Bc = 1;
    try {
      for(var h = a.length, l = 0;l < h;l++) {
        var n = a[l];
        n && !n.Ua && (g &= dd(n, e) !== m)
      }
    }finally {
      a.Bc--, ad(c, d, b, a)
    }
  }
  return Boolean(g)
}
function dd(a, b) {
  var c = a.handleEvent(b);
  a.Wc && $c(a.key);
  return c
}
Oc(function(a, b) {
  if(!Uc[a]) {
    return j
  }
  var c = Uc[a], d = c.type, e = O;
  if(!(d in e)) {
    return j
  }
  var e = e[d], g, h;
  if(!qc) {
    g = b || ca("window.event");
    var l = j in e, n = m in e;
    if(l) {
      if(g.keyCode < 0 || g.returnValue != i) {
        return j
      }
      a: {
        var p = m;
        if(g.keyCode == 0) {
          try {
            g.keyCode = -1;
            break a
          }catch(B) {
            p = j
          }
        }
        if(p || g.returnValue == i) {
          g.returnValue = j
        }
      }
    }
    p = Sc();
    p.Ra(g, this);
    g = j;
    try {
      if(l) {
        for(var r = Lc(), x = p.currentTarget;x;x = x.parentNode) {
          r.push(x)
        }
        h = e[j];
        h.Z = h.g;
        for(var C = r.length - 1;!p.Ta && C >= 0 && h.Z;C--) {
          p.currentTarget = r[C], g &= cd(h, r[C], d, j, p)
        }
        if(n) {
          h = e[m];
          h.Z = h.g;
          for(C = 0;!p.Ta && C < r.length && h.Z;C++) {
            p.currentTarget = r[C], g &= cd(h, r[C], d, m, p)
          }
        }
      }else {
        g = dd(c, p)
      }
    }finally {
      if(r) {
        r.length = 0, Mc(r)
      }
      p.b();
      Tc(p)
    }
    return g
  }
  d = new xc(b, this);
  try {
    g = dd(c, d)
  }finally {
    d.b()
  }
  return g
});
var ed = 0;
function fd() {
}
E(fd, N);
s = fd.prototype;
s.ge = j;
s.Dc = k;
s.Jd = aa("Dc");
s.addEventListener = function(a, b, c, d) {
  P(this, a, b, c, d)
};
s.removeEventListener = function(a, b, c, d) {
  Yc(this, a, b, c, d)
};
s.dispatchEvent = function(a) {
  var b = a.type || a, c = O;
  if(b in c) {
    if(w(a)) {
      a = new uc(a, this)
    }else {
      if(a instanceof uc) {
        a.target = a.target || this
      }else {
        var d = a, a = new uc(b, this);
        Ta(a, d)
      }
    }
    var d = 1, e, c = c[b], b = j in c, g;
    if(b) {
      e = [];
      for(g = this;g;g = g.Dc) {
        e.push(g)
      }
      g = c[j];
      g.Z = g.g;
      for(var h = e.length - 1;!a.Ta && h >= 0 && g.Z;h--) {
        a.currentTarget = e[h], d &= cd(g, e[h], a.type, j, a) && a.Yb != m
      }
    }
    if(m in c) {
      if(g = c[m], g.Z = g.g, b) {
        for(h = 0;!a.Ta && h < e.length && g.Z;h++) {
          a.currentTarget = e[h], d &= cd(g, e[h], a.type, m, a) && a.Yb != m
        }
      }else {
        for(e = this;!a.Ta && e && g.Z;e = e.Dc) {
          a.currentTarget = e, d &= cd(g, e, a.type, m, a) && a.Yb != m
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
  fd.d.c.call(this);
  bd(this);
  this.Dc = k
};
var gd = t.window;
ed++;
ed++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function hd(a, b) {
  this.jc = [];
  this.be = a;
  this.ie = b || k
}
s = hd.prototype;
s.va = m;
s.Kb = m;
s.Sb = 0;
s.Md = m;
s.Af = m;
s.Vc = 0;
s.cancel = function(a) {
  if(this.va) {
    this.Xb instanceof hd && this.Xb.cancel()
  }else {
    if(this.v) {
      var b = this.v;
      delete this.v;
      a ? b.cancel(a) : (b.Vc--, b.Vc <= 0 && b.cancel())
    }
    this.be ? this.be.call(this.ie, this) : this.Md = j;
    this.va || this.Gb(new id(this))
  }
};
s.ee = function(a, b) {
  jd(this, a, b);
  this.Sb--;
  this.Sb == 0 && this.va && kd(this)
};
function jd(a, b, c) {
  a.va = j;
  a.Xb = c;
  a.Kb = !b;
  kd(a)
}
function ld(a) {
  if(a.va) {
    a.Md || f(new md(a)), a.Md = m
  }
}
s.ia = function(a) {
  ld(this);
  jd(this, j, a)
};
s.Gb = function(a) {
  ld(this);
  jd(this, m, a)
};
function nd(a, b) {
  od(a, b, k, i)
}
function od(a, b, c, d) {
  a.jc.push([b, c, d]);
  a.va && kd(a)
}
function pd(a, b) {
  od(a, b, b, i)
}
function qd(a) {
  return Xa(a.jc, function(a) {
    return y(a[1])
  })
}
function kd(a) {
  a.Td && a.va && qd(a) && (t.clearTimeout(a.Td), delete a.Td);
  a.v && (a.v.Vc--, delete a.v);
  for(var b = a.Xb, c = m, d = m;a.jc.length && a.Sb == 0;) {
    var e = a.jc.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.Kb ? h : g) {
      try {
        var l = g.call(e || a.ie, b);
        if(fa(l)) {
          a.Kb = a.Kb && (l == b || l instanceof Error), a.Xb = b = l
        }
        b instanceof hd && (d = j, a.Sb++)
      }catch(n) {
        b = n, a.Kb = j, qd(a) || (c = j)
      }
    }
  }
  a.Xb = b;
  if(d && a.Sb) {
    od(b, A(a.ee, a, j), A(a.ee, a, m)), b.Af = j
  }
  if(c) {
    a.Td = t.setTimeout(function() {
      fa(b.message) && b.stack && (b.message += "\n" + b.stack);
      f(b)
    }, 0)
  }
}
function rd(a) {
  var b = new hd;
  b.ia(a);
  return b
}
function sd(a) {
  var b = new hd;
  b.Gb(a);
  return b
}
function md(a) {
  F.call(this);
  this.Ef = a
}
E(md, F);
md.prototype.message = "Already called";
function id(a) {
  F.call(this);
  this.Ef = a
}
E(id, F);
id.prototype.message = "Deferred was cancelled";
function td(a) {
  this.H = a;
  this.mc = [];
  this.me = [];
  this.zf = A(this.Ag, this)
}
td.prototype.Rd = k;
function ud(a, b, c, d) {
  a.mc.push([b, c, d]);
  if(a.Rd == k) {
    a.Rd = a.H.setTimeout(a.zf, 0)
  }
}
td.prototype.Ag = function() {
  this.Rd = k;
  var a = this.mc;
  this.mc = [];
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
  if(this.mc.length == 0) {
    a = this.me;
    this.me = [];
    for(b = 0;b < a.length;b++) {
      a[b].ia(k)
    }
  }
};
var vd = new td(t.window);
function wd(a, b) {
  switch(ea(b)) {
    case "string":
      a.push("<string>", G(b), "</string>");
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
      if(typeof b.getFullYear == "function") {
        a.push("<date>", b.valueOf(), "</date>")
      }else {
        a.push("<object>");
        for(c in b) {
          Object.prototype.hasOwnProperty.call(b, c) && ea(b[c]) != "function" && (a.push('<property id="', G(c), '">'), wd(a, b[c]), a.push("</property>"))
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
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ D()).toString(36)
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
  this.m = new K;
  a && this.Tc(a)
}
function Fd(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + z(a) : b.substr(0, 1) + a
}
s = Ed.prototype;
s.u = function() {
  return this.m.u()
};
s.add = function(a) {
  this.m.set(Fd(a), a)
};
s.Tc = function(a) {
  for(var a = Cb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
s.Gd = function(a) {
  for(var a = Cb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
s.remove = function(a) {
  return this.m.remove(Fd(a))
};
s.clear = function() {
  this.m.clear()
};
s.Sa = function() {
  return this.m.Sa()
};
s.contains = function(a) {
  return this.m.U(Fd(a))
};
s.J = function() {
  return this.m.J()
};
s.G = function() {
  return new Ed(this)
};
s.k = function(a) {
  return this.u() == Bb(a) && Gd(this, a)
};
function Gd(a, b) {
  var c = Bb(b);
  if(a.u() > c) {
    return m
  }
  !(b instanceof Ed) && c > 5 && (b = new Ed(b));
  return Fb(a, function(a) {
    if(typeof b.contains == "function") {
      a = b.contains(a)
    }else {
      if(typeof b.lc == "function") {
        a = b.lc(a)
      }else {
        if(ga(b) || w(b)) {
          a = Za(b, a)
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
  if(Za(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(Jd(a) + "(");
      for(var d = a.arguments, e = 0;e < d.length;e++) {
        e > 0 && c.push(", ");
        var g;
        g = d[e];
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
            g = (g = Jd(g)) ? g : "[fn]";
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
  a = String(a);
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
Ld.prototype.mg = 0;
Ld.prototype.gd = k;
Ld.prototype.fd = k;
var Md = 0;
Ld.prototype.reset = function(a, b, c, d, e) {
  this.mg = typeof e == "number" ? e : Md++;
  this.mf = d || D();
  this.Y = a;
  this.Qe = b;
  this.Ke = c;
  delete this.gd;
  delete this.fd
};
Ld.prototype.ub = aa("Y");
function Nd(a) {
  this.yd = a
}
Nd.prototype.v = k;
Nd.prototype.Y = k;
Nd.prototype.sa = k;
Nd.prototype.Mb = k;
function Q(a, b) {
  this.name = a;
  this.value = b
}
Q.prototype.toString = o("name");
var Od = new Q("SHOUT", 1200), Pd = new Q("SEVERE", 1E3), Qd = new Q("WARNING", 900), Rd = new Q("INFO", 800), Sd = new Q("CONFIG", 700), Td = new Q("FINE", 500), Ud = new Q("FINEST", 300), Vd = new Q("ALL", 0), Wd = [new Q("OFF", Infinity), Od, Pd, Qd, Rd, Sd, Td, new Q("FINER", 400), Ud, Vd], Xd = k;
function Yd(a) {
  if(!Xd) {
    Xd = {};
    for(var b = 0, c;c = Wd[b];b++) {
      Xd[c.value] = c, Xd[c.name] = c
    }
  }
  return Xd[a] || k
}
s = Nd.prototype;
s.getParent = o("v");
s.ub = aa("Y");
function Zd(a) {
  if(a.Y) {
    return a.Y
  }
  if(a.v) {
    return Zd(a.v)
  }
  Ha("Root logger has no level set.");
  return k
}
s.log = function(a, b, c) {
  if(a.value >= Zd(this).value) {
    a = this.Rf(a, b, c);
    b = "log:" + a.Qe;
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.Mb) {
        for(var e = 0, g = i;g = c.Mb[e];e++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
s.Rf = function(a, b, c) {
  var d = new Ld(a, String(b), this.yd);
  if(c) {
    d.gd = c;
    var e;
    var g = arguments.callee.caller;
    try {
      var h;
      var l = ca("window.location.href");
      if(w(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var n, p, B = m;
        try {
          n = c.lineNumber || c.Kh || "Not available"
        }catch(r) {
          n = "Not available", B = j
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || l
        }catch(x) {
          p = "Not available", B = j
        }
        h = B || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:p, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + G(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + G(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + G(Hd(g) + "-> ")
    }catch(C) {
      e = "Exception trying to expose exception! You win, we lose. " + C
    }
    d.fd = e
  }
  return d
};
function R(a, b) {
  a.log(Pd, b, i)
}
function S(a, b) {
  a.log(Qd, b, i)
}
s.info = function(a, b) {
  this.log(Rd, a, b)
};
function T(a, b) {
  a.log(Td, b, i)
}
function U(a, b) {
  a.log(Ud, b, i)
}
var $d = {}, ae = k;
function be() {
  ae || (ae = new Nd(""), $d[""] = ae, ae.ub(Sd))
}
function ce() {
  be();
  return ae
}
function V(a) {
  be();
  var b;
  if(!(b = $d[a])) {
    b = new Nd(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = V(a.substr(0, c));
    if(!c.sa) {
      c.sa = {}
    }
    c.sa[d] = b;
    b.v = c;
    $d[a] = b
  }
  return b
}
;function de(a, b) {
  this.fa = "_" + yd();
  this.Nc = a;
  this.Da = b;
  this.Ia = a.Ia
}
E(de, N);
s = de.prototype;
s.pb = j;
s.$c = m;
s.a = V("cw.net.FlashSocket");
s.q = function(a) {
  a.push("<FlashSocket id='");
  a.push(this.fa);
  a.push("'>")
};
function ee(a, b, c) {
  b == "frames" ? (a = a.Da, fe(a.F), ge(a.F, c)) : b == "stillreceiving" ? (c = a.Da, U(c.a, "onstillreceiving"), fe(c.F)) : b == "connect" ? (c = a.Da, c.a.info("onconnect"), fe(c.F), a = c.Bb, c.Bb = k, a.length && (U(c.a, "onconnect: Writing " + a.length + " buffered frame(s)."), c.Jc.hc(a))) : b == "close" ? (a.pb = m, a.b()) : b == "ioerror" ? (a.pb = m, b = a.Da, S(b.a, "onioerror: " + J(c)), he(b.F, m), a.b()) : b == "securityerror" ? (a.pb = m, b = a.Da, S(b.a, "onsecurityerror: " + J(c)), 
  he(b.F, m), a.b()) : f(Error("bad event: " + b))
}
function ie(a) {
  a.$c = j;
  a.pb = m;
  a.b()
}
s.Yc = function(a, b) {
  try {
    var c = this.Ia.CallFunction(xd("__FC_connect", this.fa, a, b, "<int32/>\n"))
  }catch(d) {
    return R(this.a, "connect: could not call __FC_connect; Flash probably crashed. Disposing now. Error was: " + d.message), ie(this)
  }
  c != '"OK"' && f(Error("__FC_connect failed? ret: " + c))
};
s.hc = function(a) {
  try {
    var b = this.Ia.CallFunction(xd("__FC_writeFrames", this.fa, a))
  }catch(c) {
    return R(this.a, "writeFrames: could not call __FC_writeFrames; Flash probably crashed. Disposing now. Error was: " + c.message), ie(this)
  }
  b != '"OK"' && (b == '"no such instance"' ? (S(this.a, "Flash no longer knows of " + this.fa + "; disposing."), this.b()) : f(Error("__FC_writeFrames failed? ret: " + b)))
};
s.c = function() {
  this.a.info("in disposeInternal, needToCallClose_=" + this.pb);
  de.d.c.call(this);
  var a = this.Ia;
  delete this.Ia;
  if(this.pb) {
    try {
      this.a.info("disposeInternal: __FC_close ret: " + a.CallFunction(xd("__FC_close", this.fa)))
    }catch(b) {
      R(this.a, "disposeInternal: could not call __FC_close; Flash probably crashed. Error was: " + b.message), this.$c = j
    }
  }
  if(this.$c) {
    a = this.Da, S(a.a, "oncrash"), he(a.F, j)
  }else {
    this.Da.onclose()
  }
  delete this.Da;
  delete this.Nc.ib[this.fa]
};
function ke(a, b) {
  this.D = a;
  this.Ia = b;
  this.ib = {};
  this.Xc = "__FST_" + yd();
  t[this.Xc] = A(this.If, this);
  var c = b.CallFunction(xd("__FC_setCallbackFunc", this.Xc));
  c != '"OK"' && f(Error("__FC_setCallbackFunc failed? ret: " + c))
}
E(ke, N);
s = ke.prototype;
s.a = V("cw.net.FlashSocketTracker");
s.q = function(a, b) {
  a.push("<FlashSocketTracker instances=");
  I(this.ib, a, b);
  a.push(">")
};
s.ad = function(a) {
  a = new de(this, a);
  return this.ib[a.fa] = a
};
s.Gf = function(a, b, c, d) {
  var e = this.ib[a];
  e ? b == "frames" && d ? (ee(e, "ioerror", "FlashConnector hadError while handling data."), e.b()) : ee(e, b, c) : S(this.a, "Cannot dispatch because we have no instance: " + J([a, b, c, d]))
};
s.If = function(a, b, c, d) {
  try {
    ud(this.D, this.Gf, this, [a, b, c, d])
  }catch(e) {
    t.window.setTimeout(function() {
      f(e)
    }, 0)
  }
};
s.c = function() {
  ke.d.c.call(this);
  for(var a = Qa(this.ib);a.length;) {
    a.pop().b()
  }
  delete this.ib;
  delete this.Ia;
  t[this.Xc] = i
};
function le(a) {
  this.F = a;
  this.Bb = []
}
E(le, N);
s = le.prototype;
s.a = V("cw.net.FlashSocketConduit");
s.hc = function(a) {
  this.Bb ? (U(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Bb.push.apply(this.Bb, a)) : (U(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.Jc.hc(a))
};
s.Yc = function(a, b) {
  this.Jc.Yc(a, b)
};
s.onclose = function() {
  this.a.info("onclose");
  he(this.F, m)
};
s.c = function() {
  this.a.info("in disposeInternal.");
  le.d.c.call(this);
  this.Jc.b();
  delete this.F
};
function me() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;var Dd = Math.pow(2, 53);
var ne = {vf:q("<cw.eq.Wildcard>")};
function oe(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function pe(a, b, c) {
  var d = ea(a), e = ea(b);
  if(a == ne || b == ne) {
    return j
  }else {
    if(a != k && typeof a.k == "function") {
      return c && c.push("running custom equals function on left object"), a.k(b, c)
    }else {
      if(b != k && typeof b.k == "function") {
        return c && c.push("running custom equals function on right object"), b.k(a, c)
      }else {
        if(oe(d) || oe(e)) {
          a = a === b
        }else {
          if(a instanceof RegExp && b instanceof RegExp) {
            a = a.toString() === b.toString()
          }else {
            if(ha(a) && ha(b)) {
              a = a.valueOf() === b.valueOf()
            }else {
              if(d == "array" && e == "array") {
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
                if(a.uf == Rb && b.uf == Rb) {
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
    }
  }
}
;function W(a) {
  F.call(this, a)
}
E(W, F);
W.prototype.name = "cw.net.InvalidFrame";
function qe() {
  var a = [];
  this.X(a);
  return a.join("")
}
function re() {
}
re.prototype.k = function(a, b) {
  return!(a instanceof re) ? m : pe(se(this), se(a), b)
};
re.prototype.q = function(a, b) {
  a.push("<HelloFrame properties=");
  I(se(this), a, b);
  a.push(">")
};
function se(a) {
  return[a.xb, a.$e, a.Ae, a.df, a.ec, a.Pd, a.Se, a.Oe, a.wd, a.Me, a.qf, a.lf, a.aa, a.Ac]
}
re.prototype.S = qe;
re.prototype.X = function(a) {
  var b = {};
  b.tnum = this.xb;
  b.ver = this.$e;
  b.format = this.Ae;
  b["new"] = this.df;
  b.id = this.ec;
  b.ming = this.Pd;
  b.pad = this.Se;
  b.maxb = this.Oe;
  if(fa(this.wd)) {
    b.maxt = this.wd
  }
  b.maxia = this.Me;
  b.tcpack = this.qf;
  b.eeds = this.lf;
  b.sack = this.aa instanceof Lb ? zd((new te(this.aa)).S()) : this.aa;
  b.seenack = this.Ac instanceof Lb ? zd((new te(this.Ac)).S()) : this.Ac;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new vb(i)).ac(b), "H")
};
function ue(a) {
  this.wb = a
}
ue.prototype.k = function(a) {
  return a instanceof ue && this.wb == a.wb
};
ue.prototype.q = function(a, b) {
  a.push("new StringFrame(");
  I(this.wb, a, b);
  a.push(")")
};
ue.prototype.S = qe;
ue.prototype.X = function(a) {
  a.push(this.wb, " ")
};
function ve(a) {
  this.kc = a
}
ve.prototype.k = function(a) {
  return a instanceof ve && this.kc == a.kc
};
ve.prototype.q = function(a, b) {
  a.push("new CommentFrame(");
  I(this.kc, a, b);
  a.push(")")
};
ve.prototype.S = qe;
ve.prototype.X = function(a) {
  a.push(this.kc, "^")
};
function we(a) {
  this.$b = a
}
we.prototype.k = function(a) {
  return a instanceof we && this.$b == a.$b
};
we.prototype.q = function(a) {
  a.push("new SeqNumFrame(", String(this.$b), ")")
};
we.prototype.S = qe;
we.prototype.X = function(a) {
  a.push(String(this.$b), "N")
};
function xe(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return k
  }
  a: {
    var c = b[1], a = Dd;
    if(Bd.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
  return new Lb(a, c)
}
function te(a) {
  this.aa = a
}
te.prototype.k = function(a, b) {
  return a instanceof te && this.aa.k(a.aa, b)
};
te.prototype.q = function(a, b) {
  a.push("new SackFrame(");
  I(this.aa, a, b);
  a.push(")")
};
te.prototype.S = qe;
te.prototype.X = function(a) {
  var b = this.aa;
  a.push(b.Va.join(","), "|", String(b.Za));
  a.push("A")
};
function ye(a) {
  this.Pb = a
}
ye.prototype.k = function(a, b) {
  return a instanceof ye && this.Pb.k(a.Pb, b)
};
ye.prototype.q = function(a, b) {
  a.push("new StreamStatusFrame(");
  I(this.Pb, a, b);
  a.push(")")
};
ye.prototype.S = qe;
ye.prototype.X = function(a) {
  var b = this.Pb;
  a.push(b.Va.join(","), "|", String(b.Za));
  a.push("T")
};
function ze() {
}
ze.prototype.q = function(a) {
  a.push("new StreamCreatedFrame()")
};
ze.prototype.k = function(a) {
  return a instanceof ze
};
ze.prototype.S = qe;
ze.prototype.X = function(a) {
  a.push("C")
};
function Ae() {
}
Ae.prototype.q = function(a) {
  a.push("new YouCloseItFrame()")
};
Ae.prototype.k = function(a) {
  return a instanceof Ae
};
Ae.prototype.S = qe;
Ae.prototype.X = function(a) {
  a.push("Y")
};
function Be(a, b) {
  this.Vb = a;
  this.Ab = b
}
Be.prototype.k = function(a) {
  return a instanceof Be && this.Vb == a.Vb && this.Ab == a.Ab
};
Be.prototype.q = function(a, b) {
  a.push("new ResetFrame(");
  I(this.Vb, a, b);
  a.push(", ", String(this.Ab), ")")
};
Be.prototype.S = qe;
Be.prototype.X = function(a) {
  a.push(this.Vb, "|", String(Number(this.Ab)), "!")
};
var Ce = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function De(a) {
  this.reason = a
}
De.prototype.k = function(a) {
  return a instanceof De && this.reason == a.reason
};
De.prototype.q = function(a, b) {
  a.push("new TransportKillFrame(");
  I(this.reason, a, b);
  a.push(")")
};
De.prototype.S = qe;
De.prototype.X = function(a) {
  a.push(this.reason, "K")
};
function Ee(a) {
  a || f(new W("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new ue(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = xe(zd(a)), a == k && f(new W("bad sack")), new te(a)
    }else {
      if(b == "N") {
        return a = Cd(zd(a)), a == k && f(new W("bad seqNum")), new we(a)
      }else {
        if(b == "T") {
          return a = xe(zd(a)), a == k && f(new W("bad lastSackSeen")), new ye(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && f(new W("leading garbage")), new Ae
          }else {
            if(b == "^") {
              return new ve(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && f(new W("leading garbage")), new ze
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && f(new W("bad reasonString")), a = {"|0":m, "|1":j}[a.substr(a.length - 3, 2)], a == k && f(new W("bad applicationLevel")), new Be(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = Ce[a], a == k && f(new W("unknown kill reason: " + a)), new De(a)
                  }else {
                    f(new W("Invalid frame type " + b))
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
;var Fe = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Ge(a, b) {
  var c = a.match(Fe), d = b.match(Fe);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function X(a, b) {
  var c;
  a instanceof X ? (this.tb(b == k ? a.ga : b), He(this, a.ba), Ie(this, a.Xa), Je(this, a.V), Ke(this, a.Ba), Le(this, a.T), Me(this, a.M.G()), Ne(this, a.Na)) : a && (c = String(a).match(Fe)) ? (this.tb(!!b), He(this, c[1] || "", j), Ie(this, c[2] || "", j), Je(this, c[3] || "", j), Ke(this, c[4]), Le(this, c[5] || "", j), Me(this, c[6] || "", j), Ne(this, c[7] || "", j)) : (this.tb(!!b), this.M = new Oe(k, this, this.ga))
}
s = X.prototype;
s.ba = "";
s.Xa = "";
s.V = "";
s.Ba = k;
s.T = "";
s.Na = "";
s.Zf = m;
s.ga = m;
s.toString = function() {
  if(this.ca) {
    return this.ca
  }
  var a = [];
  this.ba && a.push(Pe(this.ba, Qe), ":");
  this.V && (a.push("//"), this.Xa && a.push(Pe(this.Xa, Qe), "@"), a.push(w(this.V) ? encodeURIComponent(this.V) : k), this.Ba != k && a.push(":", String(this.Ba)));
  this.T && (this.V && this.T.charAt(0) != "/" && a.push("/"), a.push(Pe(this.T, this.T.charAt(0) == "/" ? Re : Se)));
  var b = String(this.M);
  b && a.push("?", b);
  this.Na && a.push("#", Pe(this.Na, Te));
  return this.ca = a.join("")
};
s.G = function() {
  var a = this.ba, b = this.Xa, c = this.V, d = this.Ba, e = this.T, g = this.M.G(), h = this.Na, l = new X(k, this.ga);
  a && He(l, a);
  b && Ie(l, b);
  c && Je(l, c);
  d && Ke(l, d);
  e && Le(l, e);
  g && Me(l, g);
  h && Ne(l, h);
  return l
};
function He(a, b, c) {
  Ue(a);
  delete a.ca;
  a.ba = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.ba) {
    a.ba = a.ba.replace(/:$/, "")
  }
}
function Ie(a, b, c) {
  Ue(a);
  delete a.ca;
  a.Xa = c ? b ? decodeURIComponent(b) : "" : b
}
function Je(a, b, c) {
  Ue(a);
  delete a.ca;
  a.V = c ? b ? decodeURIComponent(b) : "" : b
}
function Ke(a, b) {
  Ue(a);
  delete a.ca;
  b ? (b = Number(b), (isNaN(b) || b < 0) && f(Error("Bad port number " + b)), a.Ba = b) : a.Ba = k
}
function Le(a, b, c) {
  Ue(a);
  delete a.ca;
  a.T = c ? b ? decodeURIComponent(b) : "" : b
}
function Me(a, b, c) {
  Ue(a);
  delete a.ca;
  b instanceof Oe ? (a.M = b, a.M.Ud = a, a.M.tb(a.ga)) : (c || (b = Pe(b, Ve)), a.M = new Oe(b, a, a.ga))
}
function Ne(a, b, c) {
  Ue(a);
  delete a.ca;
  a.Na = c ? b ? decodeURIComponent(b) : "" : b
}
function Ue(a) {
  a.Zf && f(Error("Tried to modify a read-only Uri"))
}
s.tb = function(a) {
  this.ga = a;
  this.M && this.M.tb(a);
  return this
};
function We(a) {
  return a instanceof X ? a.G() : new X(a, i)
}
var Xe = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Pe(a, b) {
  var c = k;
  w(a) && (c = a, Xe.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, Ye)));
  return c
}
function Ye(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Qe = /[#\/\?@]/g, Se = /[\#\?:]/g, Re = /[\#\?]/g, Ve = /[\#\?@]/g, Te = /#/g;
function Oe(a, b, c) {
  this.ka = a || k;
  this.Ud = b || k;
  this.ga = !!c
}
function Ze(a) {
  if(!a.l && (a.l = new K, a.g = 0, a.ka)) {
    for(var b = a.ka.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, g = k;
      d >= 0 ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = $e(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
s = Oe.prototype;
s.l = k;
s.g = k;
s.u = function() {
  Ze(this);
  return this.g
};
s.add = function(a, b) {
  Ze(this);
  af(this);
  a = $e(this, a);
  if(this.U(a)) {
    var c = this.l.get(a);
    v(c) ? c.push(b) : this.l.set(a, [c, b])
  }else {
    this.l.set(a, b)
  }
  this.g++;
  return this
};
s.remove = function(a) {
  Ze(this);
  a = $e(this, a);
  if(this.l.U(a)) {
    af(this);
    var b = this.l.get(a);
    v(b) ? this.g -= b.length : this.g--;
    return this.l.remove(a)
  }
  return m
};
s.clear = function() {
  af(this);
  this.l && this.l.clear();
  this.g = 0
};
s.Sa = function() {
  Ze(this);
  return this.g == 0
};
s.U = function(a) {
  Ze(this);
  a = $e(this, a);
  return this.l.U(a)
};
s.lc = function(a) {
  var b = this.J();
  return Za(b, a)
};
s.na = function() {
  Ze(this);
  for(var a = this.l.J(), b = this.l.na(), c = [], d = 0;d < b.length;d++) {
    var e = a[d];
    if(v(e)) {
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
  Ze(this);
  if(a) {
    if(a = $e(this, a), this.U(a)) {
      var b = this.l.get(a);
      if(v(b)) {
        return b
      }else {
        a = [], a.push(b)
      }
    }else {
      a = []
    }
  }else {
    for(var b = this.l.J(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      v(d) ? cb(a, d) : a.push(d)
    }
  }
  return a
};
s.set = function(a, b) {
  Ze(this);
  af(this);
  a = $e(this, a);
  if(this.U(a)) {
    var c = this.l.get(a);
    v(c) ? this.g -= c.length : this.g--
  }
  this.l.set(a, b);
  this.g++;
  return this
};
s.get = function(a, b) {
  Ze(this);
  a = $e(this, a);
  if(this.U(a)) {
    var c = this.l.get(a);
    return v(c) ? c[0] : c
  }else {
    return b
  }
};
s.toString = function() {
  if(this.ka) {
    return this.ka
  }
  if(!this.l) {
    return""
  }
  for(var a = [], b = 0, c = this.l.na(), d = 0;d < c.length;d++) {
    var e = c[d], g = wa(e), e = this.l.get(e);
    if(v(e)) {
      for(var h = 0;h < e.length;h++) {
        b > 0 && a.push("&"), a.push(g), e[h] !== "" && a.push("=", wa(e[h])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(g), e !== "" && a.push("=", wa(e)), b++
    }
  }
  return this.ka = a.join("")
};
function af(a) {
  delete a.bb;
  delete a.ka;
  a.Ud && delete a.Ud.ca
}
s.G = function() {
  var a = new Oe;
  if(this.bb) {
    a.bb = this.bb
  }
  if(this.ka) {
    a.ka = this.ka
  }
  if(this.l) {
    a.l = this.l.G()
  }
  return a
};
function $e(a, b) {
  var c = String(b);
  a.ga && (c = c.toLowerCase());
  return c
}
s.tb = function(a) {
  a && !this.ga && (Ze(this), af(this), Eb(this.l, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ga = a
};
s.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Eb(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
var bf;
function cf(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function df(a, b) {
  var c = cf(a), d = eb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    Za(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function ef(a, b) {
  var c = cf(a), d = eb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < e.length;h++) {
    Za(d, e[h]) && (db(e, h--, 1), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
;function ff(a, b) {
  this.width = a;
  this.height = b
}
s = ff.prototype;
s.G = function() {
  return new ff(this.width, this.height)
};
s.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
s.Sa = function() {
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
var gf = !L || oc();
!ac && !L || L && oc() || ac && mc("1.9.1");
var hf = L && !mc("9");
function jf(a, b) {
  this.x = fa(a) ? a : 0;
  this.y = fa(b) ? b : 0
}
jf.prototype.G = function() {
  return new jf(this.x, this.y)
};
jf.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function kf(a) {
  return a ? new lf(mf(a)) : bf || (bf = new lf)
}
function Y(a) {
  return w(a) ? document.getElementById(a) : a
}
function nf(a, b) {
  Pa(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in of ? a.setAttribute(of[d], b) : d.lastIndexOf("aria-", 0) == 0 ? a.setAttribute(d, b) : a[d] = b
  })
}
var of = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function pf() {
  var a = qf.R.parentWindow || qf.R.defaultView || window, b = a.document;
  if(M && !mc("500") && !bc) {
    typeof a.innerHeight == "undefined" && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new ff(a.innerWidth, b)
  }
  a = b.compatMode == "CSS1Compat" ? b.documentElement : b.body;
  return new ff(a.clientWidth, a.clientHeight)
}
function rf(a, b, c) {
  return sf(document, arguments)
}
function sf(a, b) {
  var c = b[0], d = b[1];
  if(!gf && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', G(d.name), '"');
    if(d.type) {
      c.push(' type="', G(d.type), '"');
      var e = {};
      Ta(e, d);
      d = e;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  if(d) {
    w(d) ? c.className = d : v(d) ? df.apply(k, [c].concat(d)) : nf(c, d)
  }
  b.length > 2 && tf(a, c, b, 2);
  return c
}
function tf(a, b, c, d) {
  function e(c) {
    c && b.appendChild(w(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && g.nodeType > 0) ? Va(uf(g) ? bb(g) : g, e) : e(g)
  }
}
function vf(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function wf(a, b) {
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
function mf(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
var xf = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, yf = {IMG:" ", BR:"\n"};
function zf(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, typeof a == "number" && a >= 0 && a < 32768) : m
}
function Af(a) {
  var b = [];
  Bf(a, b, m);
  return b.join("")
}
function Bf(a, b, c) {
  if(!(a.nodeName in xf)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
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
function uf(a) {
  if(a && typeof a.length == "number") {
    if(ia(a)) {
      return typeof a.item == "function" || typeof a.item == "string"
    }else {
      if(y(a)) {
        return typeof a.item == "function"
      }
    }
  }
  return m
}
function lf(a) {
  this.R = a || t.document || document
}
s = lf.prototype;
s.fb = kf;
s.f = function(a) {
  return w(a) ? this.R.getElementById(a) : a
};
s.s = function(a, b, c) {
  return sf(this.R, arguments)
};
s.createElement = function(a) {
  return this.R.createElement(a)
};
s.createTextNode = function(a) {
  return this.R.createTextNode(a)
};
s.appendChild = function(a, b) {
  a.appendChild(b)
};
s.append = function(a, b) {
  tf(mf(a), a, arguments, 1)
};
s.contains = wf;
function Cf(a, b, c, d) {
  this.contentWindow = a;
  this.nc = b;
  this.Qd = c;
  this.Qf = d
}
Cf.prototype.q = function(a, b) {
  a.push("<XDRFrame frameId=");
  I(this.Qf, a, b);
  a.push(", expandedUrl=");
  I(this.nc, a, b);
  a.push(", streams=");
  I(this.Qd, a, b);
  a.push(">")
};
function Df() {
  this.frames = [];
  this.ud = new K
}
Df.prototype.a = V("cw.net.XDRTracker");
function Ef(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + String(Math.floor(me())) + String(Math.floor(me()))
  })
}
function Ff(a, b) {
  for(var c = Gf, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = e.Qd.length == 0) {
      g = e.nc;
      var h = String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + J(b) + " existing frame " + J(e)), rd(e)
    }
  }
  d = yd() + yd();
  e = Ef(a);
  g = t.location;
  g instanceof X || (g = We(g));
  e instanceof X || (e = We(e));
  var l = g;
  g = l.G();
  (h = !!e.ba) ? He(g, e.ba) : h = !!e.Xa;
  h ? Ie(g, e.Xa) : h = !!e.V;
  h ? Je(g, e.V) : h = e.Ba != k;
  var n = e.T;
  if(h) {
    Ke(g, e.Ba)
  }else {
    if(h = !!e.T) {
      if(n.charAt(0) != "/" && (l.V && !l.T ? n = "/" + n : (l = g.T.lastIndexOf("/"), l != -1 && (n = g.T.substr(0, l + 1) + n))), n == ".." || n == ".") {
        n = ""
      }else {
        if(!(n.indexOf("./") == -1 && n.indexOf("/.") == -1)) {
          for(var l = n.lastIndexOf("/", 0) == 0, n = n.split("/"), p = [], B = 0;B < n.length;) {
            var r = n[B++];
            r == "." ? l && B == n.length && p.push("") : r == ".." ? ((p.length > 1 || p.length == 1 && p[0] != "") && p.pop(), l && B == n.length && p.push("")) : (p.push(r), l = j)
          }
          n = p.join("/")
        }
      }
    }
  }
  h ? Le(g, n) : h = e.M.toString() !== "";
  if(h) {
    l = e.M;
    if(!l.bb) {
      l.bb = l.toString() ? decodeURIComponent(l.toString()) : ""
    }
    Me(g, l.bb, i)
  }else {
    h = !!e.Na
  }
  h && Ne(g, e.Na);
  e = g.toString();
  g = String(t.location).match(Fe)[3] || k;
  h = e.match(Fe)[3] || k;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + J(b)), c = rd(new Cf(t, e, [b], k))) : (g = Y("minerva-elements"), h = new hd, c.ud.set(d, [h, e, b]), c.a.info("Creating new XDRFrame " + J(d) + "for " + J(b)), c = rf("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + d}), g.appendChild(c), c = h);
  return c
}
Df.prototype.Fg = function(a) {
  var b = this.ud.get(a);
  b || f(Error("Unknown frameId " + J(a)));
  this.ud.remove(b);
  var c = b[0], a = new Cf(Y("minerva-xdrframe-" + a).contentWindow || (M ? Y("minerva-xdrframe-" + a).document || Y("minerva-xdrframe-" + a).contentWindow.document : Y("minerva-xdrframe-" + a).contentDocument || Y("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (M ? Y("minerva-xdrframe-" + a).document || Y("minerva-xdrframe-" + a).contentWindow.document : Y("minerva-xdrframe-" + a).contentDocument || Y("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.ia(a)
};
var Gf = new Df;
t.__XHRTracker_xdrFrameLoaded = A(Gf.Fg, Gf);
var Hf;
Hf = m;
var If = Xb();
If && (If.indexOf("Firefox") != -1 || If.indexOf("Camino") != -1 || If.indexOf("iPhone") != -1 || If.indexOf("iPod") != -1 || If.indexOf("iPad") != -1 || If.indexOf("Android") != -1 || If.indexOf("Chrome") != -1 && (Hf = j));
var Jf = Hf;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function Kf(a, b, c, d, e, g) {
  hd.call(this, e, g);
  this.Je = a;
  this.bd = [];
  this.ne = !!b;
  this.Nf = !!c;
  this.Df = !!d;
  for(b = 0;b < a.length;b++) {
    od(a[b], A(this.se, this, b, j), A(this.se, this, b, m))
  }
  a.length == 0 && !this.ne && this.ia(this.bd)
}
E(Kf, hd);
Kf.prototype.Ue = 0;
Kf.prototype.se = function(a, b, c) {
  this.Ue++;
  this.bd[a] = [b, c];
  this.va || (this.ne && b ? this.ia([a, c]) : this.Nf && !b ? this.Gb(c) : this.Ue == this.Je.length && this.ia(this.bd));
  this.Df && !b && (c = k);
  return c
};
Kf.prototype.Gb = function(a) {
  Kf.d.Gb.call(this, a);
  Va(this.Je, function(a) {
    a.cancel()
  })
};
function Lf(a) {
  a = new Kf(a, m, j);
  nd(a, function(a) {
    return Wa(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function Mf(a, b) {
  this.Eg = a;
  this.Ne = b
}
Mf.prototype.rd = 0;
Mf.prototype.Cc = 0;
Mf.prototype.hd = m;
function Nf(a) {
  var b = [];
  if(a.hd) {
    return[b, 2]
  }
  var c = a.rd, d = a.Eg.responseText;
  for(a.rd = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var e = d.substr(a.Cc, c - a.Cc), e = e.replace(/\r$/, "");
    if(e.length > a.Ne) {
      return a.hd = j, [b, 2]
    }
    b.push(e);
    a.Cc = c += 1
  }
  return a.rd - a.Cc - 1 > a.Ne ? (a.hd = j, [b, 2]) : [b, 1]
}
;function Of(a, b, c) {
  this.F = b;
  this.$ = a;
  this.Zc = c
}
E(Of, N);
s = Of.prototype;
s.a = V("cw.net.XHRMaster");
s.Fa = -1;
s.vd = function(a, b, c) {
  this.Zc.__XHRSlave_makeRequest(this.$, a, b, c)
};
s.xa = o("Fa");
s.Ad = function(a, b) {
  b != 1 && R(this.a, J(this.$) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  fe(this.F);
  ge(this.F, a)
};
s.Bd = function(a) {
  T(this.a, "ongotheaders_: " + J(a));
  var b = k;
  "Content-Length" in a && (b = Cd(a["Content-Length"]));
  a = this.F;
  T(a.a, a.r() + " got Content-Length: " + b);
  a.ha == Pf && (b == k && (S(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Qf(a, 2E3 + b / 3072 * 1E3))
};
s.Cd = function(a) {
  a != 1 && T(this.a, this.F.r() + "'s XHR's readyState is " + a);
  this.Fa = a;
  this.Fa >= 2 && fe(this.F)
};
s.zd = function() {
  this.F.b()
};
s.c = function() {
  Of.d.c.call(this);
  delete Rf.oa[this.$];
  this.Zc.__XHRSlave_dispose(this.$);
  delete this.Zc
};
function Sf() {
  this.oa = {}
}
E(Sf, N);
s = Sf.prototype;
s.a = V("cw.net.XHRMasterTracker");
s.ad = function(a, b) {
  var c = "_" + yd(), d = new Of(c, a, b);
  return this.oa[c] = d
};
s.Ad = function(a, b, c) {
  var b = ab(b), d = this.oa[a];
  d ? d.Ad(b, c) : R(this.a, "onframes_: no master for " + J(a))
};
s.Bd = function(a, b) {
  var c = this.oa[a];
  c ? c.Bd(b) : R(this.a, "ongotheaders_: no master for " + J(a))
};
s.Cd = function(a, b) {
  var c = this.oa[a];
  c ? c.Cd(b) : R(this.a, "onreadystatechange_: no master for " + J(a))
};
s.zd = function(a) {
  var b = this.oa[a];
  b ? (delete this.oa[b.$], b.zd()) : R(this.a, "oncomplete_: no master for " + J(a))
};
s.c = function() {
  Sf.d.c.call(this);
  for(var a = Qa(this.oa);a.length;) {
    a.pop().b()
  }
  delete this.oa
};
var Rf = new Sf;
t.__XHRMaster_onframes = A(Rf.Ad, Rf);
t.__XHRMaster_oncomplete = A(Rf.zd, Rf);
t.__XHRMaster_ongotheaders = A(Rf.Bd, Rf);
t.__XHRMaster_onreadystatechange = A(Rf.Cd, Rf);
function Tf(a, b, c) {
  this.host = a;
  this.port = b;
  this.zg = c
}
function Uf(a, b) {
  b || (b = a);
  this.Ca = a;
  this.Ga = b
}
Uf.prototype.q = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  I(this.Ca, a, b);
  a.push(", secondaryUrl=");
  I(this.Ga, a, b);
  a.push(">")
};
function Vf(a, b, c, d) {
  this.Ca = a;
  this.Ze = b;
  this.Ga = c;
  this.jf = d;
  (!(this.Ca.indexOf("http://") == 0 || this.Ca.indexOf("https://") == 0) || !(this.Ga.indexOf("http://") == 0 || this.Ga.indexOf("https://") == 0)) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Ze.location.href;
  Ge(this.Ca, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.jf.location.href;
  Ge(this.Ga, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
Vf.prototype.q = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  I(this.Ca, a, b);
  a.push(", secondaryUrl=");
  I(this.Ga, a, b);
  a.push(">")
};
var Wf = new ve(";)]}");
function Xf() {
}
Xf.prototype.pe = q(1);
function Yf(a) {
  this.tg = a
}
Yf.prototype.q = function(a, b) {
  a.push("<UserContext for ");
  I(this.tg, a, b);
  a.push(">")
};
function Zf(a, b, c) {
  this.I = a;
  this.ug = b ? b : new Xf;
  this.D = c ? c : vd;
  this.fc = new Ed;
  this.ec = yd() + yd();
  this.Ea = new Mb;
  this.pd = new Ob;
  this.gc = k;
  this.Pc = [];
  this.yb = new Yf(this);
  if(M) {
    this.gc = Xc(t, "load", this.kg, m, this)
  }
}
E(Zf, N);
s = Zf.prototype;
s.a = V("cw.net.ClientStream");
s.He = new Lb(-1, []);
s.Ie = new Lb(-1, []);
s.bg = 50;
s.ag = 1048576;
s.Dd = k;
s.onreset = k;
s.We = k;
s.Nd = m;
s.Hd = m;
s.e = 1;
s.of = -1;
s.i = k;
s.z = k;
s.Wb = k;
s.Od = 0;
s.Ye = 0;
s.hf = 0;
s.q = function(a, b) {
  a.push("<ClientStream id=");
  I(this.ec, a, b);
  a.push(", state=", String(this.e));
  a.push(", primary=");
  I(this.i, a, b);
  a.push(", secondary=");
  I(this.z, a, b);
  a.push(", resetting=");
  I(this.Wb, a, b);
  a.push(">")
};
function $f(a) {
  var b = [-1];
  a.i && b.push(a.i.qb);
  a.z && b.push(a.z.qb);
  return Math.max.apply(Math.max, b)
}
function ag(a) {
  if(a.e != 1) {
    var b = a.Ea.L.u() != 0, c = Pb(a.pd), d = !c.k(a.Ie) && !(a.i && c.k(a.i.nb) || a.z && c.k(a.z.nb)), e = $f(a);
    if((b = b && e < a.Ea.ab) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.i.Cb) {
        U(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.i, c != d.nb)) {
          !d.pa && !d.A.length && bg(d), d.A.push(new te(c)), d.nb = c
        }
        b && cg(a.i, a.Ea, e + 1);
        a.i.ma()
      }else {
        a.z == k ? a.Nd ? (U(a.a, "tryToSend_: creating secondary to send " + g), a.z = dg(a, m), b && cg(a.z, a.Ea, e + 1), a.z.ma()) : (U(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.Hd = j) : U(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
s.kg = function() {
  this.gc = k;
  if(this.i && this.i.jb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.i;
    a.Sc = j;
    a.b()
  }
  if(this.z && this.z.jb()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.z, a.Sc = j, a.b()
  }
};
function eg(a, b) {
  var c;
  fa(c) || (c = j);
  a.e > 3 && f(Error("sendStrings: Can't send strings in state " + a.e));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || f(Error("sendStrings: string #" + c + " has illegal chars: " + J(d)))
      }
    }
    a.Ea.extend(b);
    ag(a)
  }
}
function dg(a, b) {
  var c;
  a.I instanceof Vf ? c = a.ug.pe() == 1 ? Pf : fg : a.I instanceof Tf ? c = gg : f(Error("Don't support endpoint " + J(a.I)));
  a.of += 1;
  c = new hg(a.D, a, a.of, c, a.I, b);
  U(a.a, "Created: " + c.r());
  a.fc.add(c);
  return c
}
function jg(a, b, c) {
  var d = new kg(a.D, a, b, c);
  U(a.a, "Created: " + d.r() + ", delay=" + b + ", times=" + c);
  a.fc.add(d);
  return d
}
function lg(a, b) {
  a.fc.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  T(a.a, "Offline: " + b.r());
  b.Tb ? a.Od += b.Tb : a.Od = 0;
  a.Od >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.yb, "stream penalty reached limit", m), a.b());
  if(a.e > 3) {
    a.e == 4 && b.tf ? (T(a.a, "Disposing because resettingTransport_ is done."), a.b()) : T(a.a, "Not creating a transport because ClientStream is in state " + a.e)
  }else {
    var c;
    var d;
    c = b instanceof kg;
    if(!c && b.Sc) {
      var e = M ? Jf ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      U(a.a, "getDelayForNextTransport_: " + J({delay:c, times:d}))
    }else {
      d = b.de();
      if(b == a.i) {
        if(d) {
          e = ++a.Ye
        }else {
          if(!c) {
            e = a.Ye = 0
          }
        }
      }else {
        if(d) {
          e = ++a.hf
        }else {
          if(!c) {
            e = a.hf = 0
          }
        }
      }
      if(c || !e) {
        d = c = 0, U(a.a, "getDelayForNextTransport_: " + J({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(Math.random() * 4E3) - 2E3, l = Math.max(0, b.pf - b.Sd);
        d = (c = Math.max(0, g + h - l)) ? 1 : 0;
        U(a.a, "getDelayForNextTransport_: " + J({count:e, base:g, variance:h, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    if(b == a.i) {
      a.i = k, c ? a.i = jg(a, e, c) : (e = $f(a), a.i = dg(a, j), cg(a.i, a.Ea, e + 1)), a.i.ma()
    }else {
      if(b == a.z) {
        a.z = k, c ? (a.z = jg(a, e, c), a.z.ma()) : ag(a)
      }
    }
  }
}
s.reset = function(a) {
  this.e > 3 && f(Error("reset: Can't send reset in state " + this.e));
  this.e = 4;
  this.i && this.i.Cb ? (this.a.info("reset: Sending ResetFrame over existing primary."), mg(this.i, a), this.i.ma()) : (this.i && (T(this.a, "reset: Disposing primary before sending ResetFrame."), this.i.b()), this.z && (T(this.a, "reset: Disposing secondary before sending ResetFrame."), this.z.b()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Wb = dg(this, m), mg(this.Wb, a), this.Wb.ma());
  this.onreset && this.onreset.call(this.yb, a, j)
};
function ng(a, b, c, d) {
  var e;
  e = a.pd;
  for(var g = a.bg, h = a.ag, l = [], n = m, p = 0, B = c.length;p < B;p++) {
    var r = c[p], x = r[0], r = r[1];
    if(x == e.mb + 1) {
      e.mb += 1;
      for(l.push(r);;) {
        x = e.mb + 1;
        r = e.Ja.get(x, Qb);
        if(r === Qb) {
          break
        }
        l.push(r[0]);
        e.Ja.remove(x);
        e.Ha -= r[1];
        e.mb = x
      }
    }else {
      if(!(x <= e.mb)) {
        if(g != k && e.Ja.u() >= g) {
          n = j;
          break
        }
        var C = Kb(r);
        if(h != k && e.Ha + C > h) {
          n = j;
          break
        }
        e.Ja.set(x, [r, C]);
        e.Ha += C
      }
    }
  }
  e.Ja.Sa() && e.Ja.clear();
  e = [l, n];
  c = e[0];
  e = e[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(h = c[g], a.Dd && a.Dd.call(a.yb, h), a.e == 4 || a.da) {
        return
      }
    }
  }
  d || ag(a);
  if(!(a.e == 4 || a.da) && e) {
    R(b.a, b.r() + "'s peer caused rwin overflow."), b.b()
  }
}
s.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  this.e != 1 && f(Error("ClientStream.start: " + J(this) + " already started"));
  this.e = 2;
  if(this.I instanceof Uf) {
    var a = Ff(this.I.Ca, this), b = Ff(this.I.Ga, this);
    nd(Lf([a, b]), A(this.Lf, this))
  }else {
    og(this)
  }
};
s.Lf = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].nc, e = a[1].nc;
  this.Pc.push(a[0]);
  this.Pc.push(a[1]);
  this.I = new Vf(d, b, e, c);
  og(this)
};
function og(a) {
  a.e = 3;
  a.i = dg(a, j);
  cg(a.i, a.Ea, k);
  a.i.ma()
}
s.c = function() {
  this.a.info(J(this) + " in disposeInternal.");
  this.e = 5;
  for(var a = this.fc.J(), b = 0;b < a.length;b++) {
    a[b].b()
  }
  for(a = 0;a < this.Pc.length;a++) {
    $a(this.Pc[a].Qd, this)
  }
  if(M && this.gc) {
    $c(this.gc), this.gc = k
  }
  this.We && this.We.call(this.yb);
  delete this.fc;
  delete this.i;
  delete this.z;
  delete this.Wb;
  delete this.yb;
  Zf.d.c.call(this)
};
var Pf = 1, fg = 2, gg = 3;
function hg(a, b, c, d, e, g) {
  this.D = a;
  this.B = b;
  this.xb = c;
  this.ha = d;
  this.I = e;
  this.A = [];
  this.$a = g;
  this.Cb = !this.jb();
  this.sb = this.ha != Pf;
  this.yf = A(this.xg, this)
}
E(hg, N);
s = hg.prototype;
s.a = V("cw.net.ClientTransport");
s.p = k;
s.Sd = k;
s.pf = k;
s.Ec = k;
s.pa = m;
s.Kc = m;
s.nb = k;
s.jd = 0;
s.qb = -1;
s.Ed = -1;
s.tf = m;
s.Sc = m;
s.Tb = 0;
s.Lb = m;
s.q = function(a) {
  a.push("<ClientTransport #", String(this.xb), ", becomePrimary=", String(this.$a), ">")
};
s.r = function() {
  return(this.$a ? "Prim. T#" : "Sec. T#") + this.xb
};
s.de = function() {
  return!(!this.Lb && this.jd)
};
s.jb = function() {
  return this.ha == Pf || this.ha == fg
};
function pg(a, b) {
  fb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  ng(a.B, a, b, !a.sb)
}
function qg(a, b, c) {
  try {
    var d = Ee(b);
    a.jd += 1;
    T(a.a, a.r() + " RECV " + J(d));
    var e;
    a.jd == 1 && !d.k(Wf) && a.jb() ? (S(a.a, a.r() + " is closing soon because got bad preamble: " + J(d)), e = j) : e = m;
    if(e) {
      return j
    }
    if(d instanceof ue) {
      if(!/^([ -~]*)$/.test(d.wb)) {
        return a.Lb = j
      }
      a.Ed += 1;
      c.push([a.Ed, d.wb])
    }else {
      if(d instanceof te) {
        var g = a.B, h = d.aa;
        g.He = h;
        var l = g.Ea, n = h.Za, c = m;
        n > l.ab && (c = j);
        for(var p = Nb(l).concat(), d = 0;d < p.length;d++) {
          var B = p[d];
          if(B > n) {
            break
          }
          var r = l.L.m[B][1];
          l.L.remove(B);
          l.Ha -= r
        }
        for(d = 0;d < h.Va.length;d++) {
          var x = h.Va[d];
          x > l.ab && (c = j);
          l.L.U(x) && (r = l.L.m[x][1], l.L.remove(x), l.Ha -= r)
        }
        l.L.Sa() && l.L.clear();
        if(c) {
          return S(a.a, a.r() + " is closing soon because got bad SackFrame"), a.Lb = j
        }
      }else {
        if(d instanceof we) {
          a.Ed = d.$b - 1
        }else {
          if(d instanceof ye) {
            a.B.Ie = d.Pb
          }else {
            if(d instanceof Ae) {
              return U(a.a, a.r() + " is closing soon because got YouCloseItFrame"), j
            }else {
              if(d instanceof De) {
                return a.Lb = j, d.reason == "stream_attach_failure" ? a.Tb += 1 : d.reason == "acked_unsent_strings" && (a.Tb += 0.5), U(a.a, a.r() + " is closing soon because got " + J(d)), j
              }else {
                if(!(d instanceof ve)) {
                  if(d instanceof ze) {
                    var C = a.B, ki = !a.sb;
                    U(C.a, "Stream is now confirmed to exist at server.");
                    C.Nd = j;
                    if(C.Hd && !ki) {
                      C.Hd = m, ag(C)
                    }
                  }else {
                    if(c.length) {
                      pg(a, c);
                      if(!v(c)) {
                        for(var je = c.length - 1;je >= 0;je--) {
                          delete c[je]
                        }
                      }
                      c.length = 0
                    }
                    if(d instanceof Be) {
                      var Jc = a.B;
                      Jc.onreset && Jc.onreset.call(Jc.yb, d.Vb, d.Ab);
                      Jc.b();
                      return j
                    }else {
                      f(Error(a.r() + " had unexpected state in framesReceived_."))
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }catch(ig) {
    return ig instanceof W || f(ig), S(a.a, a.r() + " is closing soon because got InvalidFrame: " + J(b)), a.Lb = j
  }
  return m
}
function ge(a, b) {
  a.Kc = j;
  try {
    for(var c = m, d = [], e = 0, g = b.length;e < g;e++) {
      if(a.da) {
        a.a.info(a.r() + " returning from loop because we're disposed.");
        return
      }
      if(c = qg(a, b[e], d)) {
        break
      }
    }
    d.length && pg(a, d);
    a.Kc = m;
    a.A.length && a.ma();
    c && (U(a.a, a.r() + " closeSoon is true.  Frames were: " + J(b)), a.b())
  }finally {
    a.Kc = m
  }
}
s.xg = function() {
  S(this.a, this.r() + " timed out due to lack of connection or no data being received.");
  this.b()
};
function rg(a) {
  if(a.Ec != k) {
    a.D.H.clearTimeout(a.Ec), a.Ec = k
  }
}
function Qf(a, b) {
  rg(a);
  b = Math.round(b);
  a.Ec = a.D.H.setTimeout(a.yf, b);
  T(a.a, a.r() + "'s receive timeout set to " + b + " ms.")
}
function fe(a) {
  a.ha != Pf && (a.ha == gg || a.ha == fg ? Qf(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ha)))
}
function bg(a) {
  var b = new re;
  b.xb = a.xb;
  b.$e = 2;
  b.Ae = 2;
  if(!a.B.Nd) {
    b.df = j
  }
  b.ec = a.B.ec;
  b.Pd = a.sb;
  if(b.Pd) {
    b.Se = 4096
  }
  b.Oe = 3E5;
  b.Me = a.sb ? Math.floor(10) : 0;
  b.qf = m;
  if(a.$a) {
    b.lf = k, b.wd = Math.floor((a.sb ? 358E4 : 25E3) / 1E3)
  }
  b.aa = Pb(a.B.pd);
  b.Ac = a.B.He;
  a.A.push(b);
  a.nb = b.aa
}
function he(a, b) {
  b && (a.Tb += 0.5);
  a.b()
}
s.ma = function() {
  this.pa && !this.Cb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.Kc) {
    U(this.a, this.r() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.pa;
    this.pa = j;
    !a && !this.A.length && bg(this);
    for(a = 0;a < this.A.length;a++) {
      T(this.a, this.r() + " SEND " + J(this.A[a]))
    }
    if(this.jb()) {
      for(var a = [], b = 0, c = this.A.length;b < c;b++) {
        this.A[b].X(a), a.push("\n")
      }
      this.A = [];
      a = a.join("");
      b = this.$a ? this.I.Ca : this.I.Ga;
      this.p = Rf.ad(this, this.$a ? this.I.Ze : this.I.jf);
      this.Sd = this.D.H === gd ? D() : this.D.H.getTime();
      this.p.vd(b, "POST", a);
      Qf(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.sb ? 0 : this.$a ? 25E3 : 0))
    }else {
      if(this.ha == gg) {
        a = [];
        b = 0;
        for(c = this.A.length;b < c;b++) {
          a.push(this.A[b].S())
        }
        this.A = [];
        this.p ? this.p.hc(a) : (b = this.I, this.p = new le(this), this.p.Jc = b.zg.ad(this.p), this.Sd = this.D.H === gd ? D() : this.D.H.getTime(), this.p.Yc(b.host, b.port), this.p.da || (this.p.hc(a), this.p.da || Qf(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.ha))
      }
    }
  }
};
function cg(a, b, c) {
  !a.pa && !a.A.length && bg(a);
  for(var d = Math.max(c, a.qb + 1), e = Nb(b), c = [], g = 0;g < e.length;g++) {
    var h = e[g];
    (d == k || h >= d) && c.push([h, b.L.m[h][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], e = g[0], g = g[1], (a.qb == -1 || a.qb + 1 != e) && a.A.push(new we(e)), a.A.push(new ue(g)), a.qb = e
  }
}
s.c = function() {
  this.a.info(this.r() + " in disposeInternal.");
  hg.d.c.call(this);
  this.pf = this.D.H === gd ? D() : this.D.H.getTime();
  this.A = [];
  rg(this);
  this.p && this.p.b();
  var a = this.B;
  this.B = k;
  lg(a, this)
};
function mg(a, b) {
  !a.pa && !a.A.length && bg(a);
  a.A.push(new Be(b, j));
  a.tf = j
}
function kg(a, b, c, d) {
  this.D = a;
  this.B = b;
  this.je = c;
  this.fe = d
}
E(kg, N);
s = kg.prototype;
s.pa = m;
s.Cb = m;
s.vc = k;
s.nb = k;
s.a = V("cw.net.DoNothingTransport");
function sg(a) {
  a.vc = a.D.H.setTimeout(function() {
    a.vc = k;
    a.fe--;
    a.fe ? sg(a) : a.b()
  }, a.je)
}
s.ma = function() {
  this.pa && !this.Cb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.pa = j;
  sg(this)
};
s.q = function(a) {
  a.push("<DoNothingTransport delay=", String(this.je), ">")
};
s.jb = q(m);
s.r = q("Wast. T");
s.de = q(m);
s.c = function() {
  this.a.info(this.r() + " in disposeInternal.");
  kg.d.c.call(this);
  this.vc != k && this.D.H.clearTimeout(this.vc);
  var a = this.B;
  this.B = k;
  lg(a, this)
};
var tg;
function ug() {
  jb.apply(this)
}
E(ug, jb);
function vg() {
  jb.apply(this)
}
E(vg, jb);
pb(ug, {"0":{name:"NewPost", oe:"demosminerva.ljstream_messages.NewPost"}, 1:{name:"title", eb:9, type:String}, 2:{name:"url", eb:9, type:String}, 3:{name:"body", eb:9, type:String}, 4:{name:"num_images", eb:5, type:Number}, 5:{name:"lang", eb:9, type:String}});
pb(vg, {"0":{name:"SetPreferences", oe:"demosminerva.ljstream_messages.SetPreferences"}, 1:{name:"include_russian_posts", eb:8, type:Boolean}});
function wg() {
  this.cf = D()
}
var xg = new wg;
wg.prototype.set = aa("cf");
wg.prototype.reset = function() {
  this.set(D())
};
wg.prototype.get = o("cf");
function yg(a) {
  this.Fd = a || "";
  this.rg = xg
}
yg.prototype.ng = j;
yg.prototype.pg = j;
yg.prototype.og = j;
yg.prototype.kf = m;
function zg(a) {
  return a < 10 ? "0" + a : String(a)
}
function Ag(a, b) {
  var c = (a.mf - b) / 1E3, d = c.toFixed(3), e = 0;
  if(c < 1) {
    e = 2
  }else {
    for(;c < 100;) {
      e++, c *= 10
    }
  }
  for(;e-- > 0;) {
    d = " " + d
  }
  return d
}
function Bg(a) {
  yg.call(this, a)
}
E(Bg, yg);
Bg.prototype.kf = j;
function Cg(a) {
  this.xd = a || 100;
  this.ra = []
}
s = Cg.prototype;
s.Rb = 0;
s.add = function(a) {
  this.ra[this.Rb] = a;
  this.Rb = (this.Rb + 1) % this.xd
};
s.get = function(a) {
  a = Dg(this, a);
  return this.ra[a]
};
s.set = function(a, b) {
  a = Dg(this, a);
  this.ra[a] = b
};
s.u = function() {
  return this.ra.length
};
s.Sa = function() {
  return this.ra.length == 0
};
s.clear = function() {
  this.Rb = this.ra.length = 0
};
s.J = function() {
  for(var a = this.u(), b = this.u(), c = [], a = this.u() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
s.na = function() {
  for(var a = [], b = this.u(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
s.U = function(a) {
  return a < this.u()
};
s.lc = function(a) {
  for(var b = this.u(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return j
    }
  }
  return m
};
function Dg(a, b) {
  b >= a.ra.length && f(Error("Out of bounds exception"));
  return a.ra.length < a.xd ? b : (a.Rb + Number(b)) % a.xd
}
;function Eg(a, b) {
  this.ya = a || "";
  this.Fd = b || "";
  this.rb = [];
  this.Gc = new Cg(Fg);
  this.ig = A(this.wf, this);
  this.Pf = new Bg(this.Fd);
  this.Mf = {};
  if(j != this.De) {
    this.De = j;
    var c = ce(), d = this.ig;
    if(!c.Mb) {
      c.Mb = []
    }
    c.Mb.push(d)
  }
  this.W = Gg(this.ya, "enabled") == "1";
  t.setInterval(A(this.lg, this), 7500)
}
var Fg = 500;
s = Eg.prototype;
s.sf = "LOGGING";
s.Jf = m;
s.t = k;
s.Xd = m;
s.De = m;
s.ae = k;
s.sd = D();
s.Ra = function() {
  this.W && Hg(this)
};
s.isEnabled = o("W");
s.bc = function(a) {
  if(this.W = a) {
    Hg(this), this.t && this.Oc()
  }
  Ig(this, "enabled", a ? "1" : "0")
};
function Jg(a) {
  return!!a.t && !a.t.closed
}
s.Bf = function() {
  this.Gc.clear();
  Jg(this) && this.Oc()
};
s.wf = function(a) {
  if(!this.Mf[a.Ke]) {
    var b = this.Pf, c;
    switch(a.Y.value) {
      case Od.value:
        c = "dbg-sh";
        break;
      case Pd.value:
        c = "dbg-sev";
        break;
      case Qd.value:
        c = "dbg-w";
        break;
      case Rd.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.Fd, " ");
    if(b.ng) {
      var e = new Date(a.mf);
      d.push("[", zg(e.getFullYear() - 2E3) + zg(e.getMonth() + 1) + zg(e.getDate()) + " " + zg(e.getHours()) + ":" + zg(e.getMinutes()) + ":" + zg(e.getSeconds()) + "." + zg(Math.floor(e.getMilliseconds() / 10)), "] ")
    }
    b.pg && d.push("[", Da(Ag(a, b.rg.get())), "s] ");
    b.og && d.push("[", G(a.Ke), "] ");
    d.push('<span class="', c, '">', xa(Da(G(a.Qe))));
    b.kf && a.gd && d.push("<br>", xa(Da(a.fd || "")));
    d.push("</span><br>");
    b = d.join("");
    this.W ? (Hg(this), this.Gc.add(b), Kg(this, b)) : this.Gc.add(b);
    this.Jf && a.Y.value >= Pd.value && this.bc(j)
  }
};
function Kg(a, b) {
  a.rb.push(b);
  t.clearTimeout(a.ae);
  D() - a.sd > 750 ? a.Yd() : a.ae = t.setTimeout(A(a.Yd, a), 250)
}
s.Yd = function() {
  this.sd = D();
  if(Jg(this)) {
    var a = this.t.document.body, a = a && a.scrollHeight - (a.scrollTop + a.clientHeight) <= 100;
    this.t.document.write(this.rb.join(""));
    this.rb.length = 0;
    a && this.t.scrollTo(0, 1E6)
  }
};
function Lg(a) {
  for(var b = a.Gc.J(), c = 0;c < b.length;c++) {
    Kg(a, b[c])
  }
}
function Hg(a) {
  if(!Jg(a) && !a.Xd) {
    var b = Gg(a.ya, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), e = Number(b[2]), b = Number(b[3]);
    a.Xd = j;
    a.t = window.open("", L ? a.ya.replace(/[\s\-\.\,]/g, "_") : a.ya, "width=" + e + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    if(!a.t && !a.qg) {
      alert("Logger popup was blocked"), a.qg = j
    }
    a.Xd = m;
    a.t && a.Oc()
  }
}
s.sc = q("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
s.Oc = function() {
  Jg(this) || (this.t.document.open(), Kg(this, "<style>" + this.sc() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.sf + "<br><small>Logger: " + this.ya + "</small></div><hr>"), Lg(this))
};
function Ig(a, b, c) {
  b += a.ya;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(D() + 2592E6)).toUTCString()
}
function Gg(a, b, c) {
  var a = b + a, b = String(document.cookie), d = b.indexOf(a + "=");
  return d != -1 ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, c == -1 ? b.length : c))) : c || ""
}
s.lg = function() {
  Jg(this) && Ig(this, "dbg", (this.t.screenX || this.t.screenLeft || 0) + "," + (this.t.screenY || this.t.screenTop || 0) + "," + (this.t.outerWidth || 800) + "," + (this.t.outerHeight || 500))
};
function Mg(a, b) {
  if(Ng) {
    var c = Og(), d;
    for(d in c) {
      var e = d.replace("fancywindow.sel.", ""), e = V(e), g = e.Y, h = window.localStorage.getItem(d).toString();
      (!g || g.toString() != h) && e.ub(Yd(h))
    }
  }
  Eg.call(this, a, b)
}
E(Mg, Eg);
var Ng;
a: {
  try {
    Ng = !!window.localStorage.getItem;
    break a
  }catch(Pg) {
  }
  Ng = m
}
s = Mg.prototype;
s.Yd = function() {
  this.sd = D();
  if(Jg(this)) {
    for(var a = this.N.f("log"), b = a.scrollHeight - (a.scrollTop + a.offsetHeight) <= 100, c = 0;c < this.rb.length;c++) {
      var d = this.N.s("div", "logmsg");
      d.innerHTML = this.rb[c];
      a.appendChild(d)
    }
    this.rb.length = 0;
    this.ff();
    if(b) {
      a.scrollTop = a.scrollHeight
    }
  }
};
s.Oc = function() {
  if(Jg(this)) {
    var a = this.t.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.ya + "</title><style>" + this.sc() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.ya + "</b></p><p>" + this.sf + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (L ? a.body : this.t).onresize = A(this.ff, this);
    this.N = new lf(a);
    this.N.f("openbutton").onclick = A(this.fg, this);
    this.N.f("closebutton").onclick = A(this.Cf, this);
    this.N.f("clearbutton").onclick = A(this.Bf, this);
    this.N.f("exitbutton").onclick = A(this.Kf, this);
    Lg(this)
  }
};
s.fg = function() {
  var a = this.N.f("optionsarea");
  a.innerHTML = "";
  for(var b = Qg(), c = this.N, d = 0;d < b.length;d++) {
    var e = V(b[d]), e = c.s("div", {}, Rg(this, "sel" + b[d], e.Y ? e.Y.name : "INHERIT"), c.s("span", {}, b[d] || "(root)"));
    a.appendChild(e)
  }
  this.N.f("options").style.display = "block";
  return m
};
function Rg(a, b, c) {
  for(var a = a.N, b = a.s("select", {id:b}), d = 0;d < Wd.length;d++) {
    var e = Wd[d], g = a.s("option", {}, e.name);
    if(c == e.name) {
      g.selected = j
    }
    b.appendChild(g)
  }
  b.appendChild(a.s("option", {selected:c == "INHERIT"}, "INHERIT"));
  return b
}
s.Cf = function() {
  this.N.f("options").style.display = "none";
  for(var a = Qg(), b = this.N, c = 0;c < a.length;c++) {
    var d = V(a[c]), e = b.f("sel" + a[c]), e = e.options[e.selectedIndex].text;
    e == "INHERIT" ? d.ub(k) : d.ub(Yd(e))
  }
  if(Ng) {
    a = Qg();
    b = Og();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], e = V(a[c]).Y, d in b ? e ? window.localStorage.getItem(d) != e.name && window.localStorage.setItem(d, e.name) : window.localStorage.removeItem(d) : e && window.localStorage.setItem(d, e.name)
    }
  }
  return m
};
s.ff = function() {
  var a = this.N, b = a.f("log"), c = a.f("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.R.body.offsetHeight - c.offsetHeight - (L ? 4 : 0) + "px"
};
s.Kf = function() {
  this.bc(m);
  this.t && this.t.close()
};
s.sc = function() {
  return Mg.d.sc.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function Og() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != k && d.lastIndexOf("fancywindow.sel.", 0) == 0 && (a[d] = j)
  }
  return a
}
function Qg() {
  var a = Ra($d);
  a.sort();
  return a
}
;function Sg(a) {
  typeof a == "number" && (a = Math.round(a) + "px");
  return a
}
var Tg = ac ? "MozUserSelect" : M ? "WebkitUserSelect" : k;
function Ug(a) {
  this.ye = a;
  this.j = []
}
E(Ug, N);
var Vg = [];
function Wg(a, b, c, d) {
  v(c) || (Vg[0] = c, c = Vg);
  for(var e = 0;e < c.length;e++) {
    a.j.push(P(b, c[e], d || a, m, a.ye || a))
  }
  return a
}
function Xg(a, b, c, d, e, g) {
  if(v(c)) {
    for(var h = 0;h < c.length;h++) {
      Xg(a, b, c[h], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.ye || a;
      e = !!e;
      if(b = Zc(b, c, e)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].Ua && b[c].ob == d && b[c].capture == e && b[c].wc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    if(b) {
      b = b.key, $c(b), $a(a.j, b)
    }
  }
  return a
}
Ug.prototype.Gd = function() {
  Va(this.j, $c);
  this.j.length = 0
};
Ug.prototype.c = function() {
  Ug.d.c.call(this);
  this.Gd()
};
Ug.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Yg() {
}
da(Yg);
Yg.prototype.dg = 0;
Yg.gb();
function Zg(a) {
  this.Ma = a || kf();
  this.Zb = $g
}
E(Zg, fd);
Zg.prototype.Xf = Yg.gb();
var $g = k;
function ah(a, b) {
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
s = Zg.prototype;
s.fa = k;
s.K = m;
s.o = k;
s.Zb = k;
s.cg = k;
s.v = k;
s.sa = k;
s.Db = k;
s.Bg = m;
function bh(a) {
  return a.fa || (a.fa = ":" + (a.Xf.dg++).toString(36))
}
s.f = o("o");
function ch(a) {
  return a.hb || (a.hb = new Ug(a))
}
s.getParent = o("v");
s.Jd = function(a) {
  this.v && this.v != a && f(Error("Method not supported"));
  Zg.d.Jd.call(this, a)
};
s.fb = o("Ma");
s.s = function() {
  this.o = this.Ma.createElement("div")
};
function dh(a, b) {
  a.K && f(Error("Component already rendered"));
  a.o || a.s();
  b ? b.insertBefore(a.o, k) : a.Ma.R.body.appendChild(a.o);
  (!a.v || a.v.K) && a.ta()
}
s.ta = function() {
  this.K = j;
  eh(this, function(a) {
    !a.K && a.f() && a.ta()
  })
};
s.Hb = function() {
  eh(this, function(a) {
    a.K && a.Hb()
  });
  this.hb && this.hb.Gd();
  this.K = m
};
s.c = function() {
  Zg.d.c.call(this);
  this.K && this.Hb();
  this.hb && (this.hb.b(), delete this.hb);
  eh(this, function(a) {
    a.b()
  });
  !this.Bg && this.o && vf(this.o);
  this.v = this.cg = this.o = this.Db = this.sa = k
};
s.vb = function(a) {
  this.K && f(Error("Component already rendered"));
  this.Zb = a
};
function eh(a, b) {
  a.sa && Va(a.sa, b, i)
}
s.removeChild = function(a, b) {
  if(a) {
    var c = w(a) ? a : bh(a), a = this.Db && c ? (c in this.Db ? this.Db[c] : i) || k : k;
    if(c && a) {
      var d = this.Db;
      c in d && delete d[c];
      $a(this.sa, a);
      b && (a.Hb(), a.o && vf(a.o));
      c = a;
      c == k && f(Error("Unable to set parent component"));
      c.v = k;
      Zg.d.Jd.call(c, k)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function fh() {
}
var gh;
da(fh);
s = fh.prototype;
s.pc = function() {
};
s.s = function(a) {
  var b = a.fb().s("div", hh(this, a).join(" "), a.Eb);
  this.Id(a, b);
  return b
};
s.Fb = function(a, b, c) {
  if(a = a.f ? a.f() : a) {
    if(L && !mc("7")) {
      var d = ih(cf(a), b);
      d.push(b);
      na(c ? df : ef, a).apply(k, d)
    }else {
      c ? df(a, b) : ef(a, b)
    }
  }
};
s.Be = function(a) {
  if(a.Zb == k) {
    var b;
    a: {
      b = a.K ? a.o : a.Ma.R.body;
      var c = mf(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (b = c.defaultView.getComputedStyle(b, k))) {
        b = b.direction || b.getPropertyValue("direction");
        break a
      }
      b = ""
    }
    a.Zb = "rtl" == (b || ((a.K ? a.o : a.Ma.R.body).currentStyle ? (a.K ? a.o : a.Ma.R.body).currentStyle.direction : k) || (a.K ? a.o : a.Ma.R.body).style.direction)
  }
  a.Zb && this.vb(a.f(), j);
  a.isEnabled() && this.cc(a, a.Ya)
};
s.Id = function(a, b) {
  a.isEnabled() || this.Q(b, 1, j);
  a.e & 8 && this.Q(b, 8, j);
  a.P & 16 && this.Q(b, 16, !!(a.e & 16));
  a.P & 64 && this.Q(b, 64, !!(a.e & 64))
};
s.Hc = function(a, b) {
  var c = !b, d = L || $b ? a.getElementsByTagName("*") : k;
  if(Tg) {
    if(c = c ? "none" : "", a.style[Tg] = c, d) {
      for(var e = 0, g;g = d[e];e++) {
        g.style[Tg] = c
      }
    }
  }else {
    if(L || $b) {
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for(e = 0;g = d[e];e++) {
          g.setAttribute("unselectable", c)
        }
      }
    }
  }
};
s.vb = function(a, b) {
  this.Fb(a, this.wa() + "-rtl", b)
};
s.Ee = function(a) {
  var b;
  return a.P & 32 && (b = a.Pa()) ? zf(b) : m
};
s.cc = function(a, b) {
  var c;
  if(a.P & 32 && (c = a.Pa())) {
    if(!b && a.e & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.e & 32 && a.re()
    }
    if(zf(c) != b) {
      b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex"))
    }
  }
};
s.Ld = function(a, b) {
  a.style.display = b ? "" : "none"
};
s.O = function(a, b, c) {
  var d = a.f();
  if(d) {
    var e = jh(this, b);
    e && this.Fb(a, e, c);
    this.Q(d, b, c)
  }
};
s.Q = function(a, b, c) {
  gh || (gh = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = gh[b]) && a.setAttribute("aria-" + b, c)
};
s.Pa = function(a) {
  return a.f()
};
s.wa = q("goog-control");
function hh(a, b) {
  var c = a.wa(), d = [c], e = a.wa();
  e != c && d.push(e);
  c = b.e;
  for(e = [];c;) {
    var g = c & -c;
    e.push(jh(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.ea) && d.push.apply(d, c);
  L && !mc("7") && d.push.apply(d, ih(d));
  return d
}
function ih(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Va([], function(d) {
    Ya(d, na(Za, a)) && (!b || Za(d, b)) && c.push(d.join("_"))
  });
  return c
}
function jh(a, b) {
  if(!a.ce) {
    var c = a.wa();
    a.ce = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.ce[b]
}
;function kh(a, b) {
  a || f(Error("Invalid class name " + a));
  y(b) || f(Error("Invalid decorator function " + b))
}
var lh = {};
function mh(a, b, c, d, e) {
  if(!L && (!M || !mc("525"))) {
    return j
  }
  if(dc && e) {
    return nh(a)
  }
  if(e && !d) {
    return m
  }
  if(!c && (b == 17 || b == 18)) {
    return m
  }
  if(L && d && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(L && oc());
    case 27:
      return!M
  }
  return nh(a)
}
function nh(a) {
  if(a >= 48 && a <= 57) {
    return j
  }
  if(a >= 96 && a <= 106) {
    return j
  }
  if(a >= 65 && a <= 90) {
    return j
  }
  if(M && a == 0) {
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
;function oh(a, b) {
  a && ph(this, a, b)
}
E(oh, fd);
s = oh.prototype;
s.o = k;
s.yc = k;
s.qd = k;
s.zc = k;
s.Aa = -1;
s.za = -1;
var qh = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, rh = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, sh = {61:187, 
59:186}, th = L || M && mc("525");
s = oh.prototype;
s.Tf = function(a) {
  if(M && (this.Aa == 17 && !a.ctrlKey || this.Aa == 18 && !a.altKey)) {
    this.za = this.Aa = -1
  }
  th && !mh(a.keyCode, this.Aa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.za = ac && a.keyCode in sh ? sh[a.keyCode] : a.keyCode
};
s.Vf = function() {
  this.za = this.Aa = -1
};
s.handleEvent = function(a) {
  var b = a.la, c, d;
  L && a.type == "keypress" ? (c = this.za, d = c != 13 && c != 27 ? b.keyCode : 0) : M && a.type == "keypress" ? (c = this.za, d = b.charCode >= 0 && b.charCode < 63232 && nh(c) ? b.charCode : 0) : $b ? (c = this.za, d = nh(c) ? b.keyCode : 0) : (c = b.keyCode || this.za, d = b.charCode || 0, dc && d == 63 && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in qh ? e = qh[c] : c == 25 && a.shiftKey && (e = 9) : g && g in rh && (e = rh[g]);
  a = e == this.Aa;
  this.Aa = e;
  b = new uh(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.b()
  }
};
s.f = o("o");
function ph(a, b, c) {
  a.zc && a.detach();
  a.o = b;
  a.yc = P(a.o, "keypress", a, c);
  a.qd = P(a.o, "keydown", a.Tf, c, a);
  a.zc = P(a.o, "keyup", a.Vf, c, a)
}
s.detach = function() {
  if(this.yc) {
    $c(this.yc), $c(this.qd), $c(this.zc), this.zc = this.qd = this.yc = k
  }
  this.o = k;
  this.za = this.Aa = -1
};
s.c = function() {
  oh.d.c.call(this);
  this.detach()
};
function uh(a, b, c, d) {
  d && this.Ra(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
E(uh, xc);
function Z(a, b, c) {
  Zg.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = z(b);
      if(d = lh[d]) {
        break
      }
      b = b.d ? b.d.constructor : k
    }
    b = d ? y(d.gb) ? d.gb() : new d : k
  }
  this.w = b;
  this.Eb = a
}
E(Z, Zg);
s = Z.prototype;
s.Eb = k;
s.e = 0;
s.P = 39;
s.Zd = 255;
s.sg = 0;
s.Ya = j;
s.ea = k;
s.ld = j;
s.Uc = m;
s.hg = k;
s.Pa = function() {
  return this.w.Pa(this)
};
function vh(a, b) {
  if(b) {
    a.ea ? Za(a.ea, b) || a.ea.push(b) : a.ea = [b], a.w.Fb(a, b, j)
  }
}
s.Fb = function(a, b) {
  if(b) {
    vh(this, a)
  }else {
    if(a && this.ea) {
      $a(this.ea, a);
      if(this.ea.length == 0) {
        this.ea = k
      }
      this.w.Fb(this, a, m)
    }
  }
};
s.s = function() {
  var a = this.w.s(this);
  this.o = a;
  var b = this.hg || this.w.pc();
  if(b) {
    a.setAttribute("role", b), a.Nh = b
  }
  this.Uc || this.w.Hc(a, m);
  this.Ya || this.w.Ld(a, m)
};
s.ta = function() {
  Z.d.ta.call(this);
  this.w.Be(this);
  if(this.P & -2 && (this.ld && wh(this, j), this.P & 32)) {
    var a = this.Pa();
    if(a) {
      var b = this.lb || (this.lb = new oh);
      ph(b, a);
      Wg(Wg(Wg(ch(this), b, "key", this.Uf), a, "focus", this.Sf), a, "blur", this.re)
    }
  }
};
function wh(a, b) {
  var c = ch(a), d = a.f();
  b ? (Wg(Wg(Wg(Wg(c, d, "mouseover", a.we), d, "mousedown", a.ue), d, "mouseup", a.xe), d, "mouseout", a.ve), L && Wg(c, d, "dblclick", a.te)) : (Xg(Xg(Xg(Xg(c, d, "mouseover", a.we), d, "mousedown", a.ue), d, "mouseup", a.xe), d, "mouseout", a.ve), L && Xg(c, d, "dblclick", a.te))
}
s.Hb = function() {
  Z.d.Hb.call(this);
  this.lb && this.lb.detach();
  this.Ya && this.isEnabled() && this.w.cc(this, m)
};
s.c = function() {
  Z.d.c.call(this);
  this.lb && (this.lb.b(), delete this.lb);
  delete this.w;
  this.ea = this.Eb = k
};
function xh(a) {
  a = a.Eb;
  if(!a) {
    return""
  }
  if(!w(a)) {
    if(v(a)) {
      a = Wa(a, Af).join("")
    }else {
      if(hf && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Bf(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      hf || (a = a.replace(/ +/g, " "));
      a != " " && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
s.vb = function(a) {
  Z.d.vb.call(this, a);
  var b = this.f();
  b && this.w.vb(b, a)
};
s.Hc = function(a) {
  this.Uc = a;
  var b = this.f();
  b && this.w.Hc(b, a)
};
s.Ld = function(a, b) {
  if(b || this.Ya != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.f();
    c && this.w.Ld(c, a);
    this.isEnabled() && this.w.cc(this, a);
    this.Ya = a;
    return j
  }
  return m
};
s.isEnabled = function() {
  return!(this.e & 1)
};
s.bc = function(a) {
  var b = this.getParent();
  if((!b || typeof b.isEnabled != "function" || b.isEnabled()) && yh(this, 1, !a)) {
    a || (this.setActive(m), zh(this, m)), this.Ya && this.w.cc(this, a), this.O(1, !a)
  }
};
function zh(a, b) {
  yh(a, 2, b) && a.O(2, b)
}
s.Ce = function() {
  return!!(this.e & 4)
};
s.setActive = function(a) {
  yh(this, 4, a) && this.O(4, a)
};
s.O = function(a, b) {
  if(this.P & a && b != !!(this.e & a)) {
    this.w.O(this, a, b), this.e = b ? this.e | a : this.e & ~a
  }
};
function $(a, b) {
  return!!(a.Zd & b) && !!(a.P & b)
}
function yh(a, b, c) {
  return!!(a.P & b) && !!(a.e & b) != c && (!(a.sg & b) || a.dispatchEvent(ah(b, c))) && !a.da
}
s.we = function(a) {
  (!a.relatedTarget || !wf(this.f(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && $(this, 2) && zh(this, j)
};
s.ve = function(a) {
  if((!a.relatedTarget || !wf(this.f(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    $(this, 4) && this.setActive(m), $(this, 2) && zh(this, m)
  }
};
s.ue = function(a) {
  if(this.isEnabled() && ($(this, 2) && zh(this, j), zc(a) && (!M || !dc || !a.ctrlKey))) {
    $(this, 4) && this.setActive(j), this.w.Ee(this) && this.Pa().focus()
  }
  !this.Uc && zc(a) && (!M || !dc || !a.ctrlKey) && a.preventDefault()
};
s.xe = function(a) {
  this.isEnabled() && ($(this, 2) && zh(this, j), this.Ce() && this.Ub(a) && $(this, 4) && this.setActive(m))
};
s.te = function(a) {
  this.isEnabled() && this.Ub(a)
};
s.Ub = function(a) {
  if($(this, 16)) {
    var b = !(this.e & 16);
    yh(this, 16, b) && this.O(16, b)
  }
  $(this, 8) && yh(this, 8, j) && this.O(8, j);
  $(this, 64) && (b = !(this.e & 64), yh(this, 64, b) && this.O(64, b));
  b = new uc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, e = 0;d = c[e];e++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
s.Sf = function() {
  $(this, 32) && yh(this, 32, j) && this.O(32, j)
};
s.re = function() {
  $(this, 4) && this.setActive(m);
  $(this, 32) && yh(this, 32, m) && this.O(32, m)
};
s.Uf = function(a) {
  return this.Ya && this.isEnabled() && this.kd(a) ? (a.preventDefault(), a.stopPropagation(), j) : m
};
s.kd = function(a) {
  return a.keyCode == 13 && this.Ub(a)
};
y(Z) || f(Error("Invalid component class " + Z));
y(fh) || f(Error("Invalid renderer class " + fh));
var Ah = z(Z);
lh[Ah] = fh;
kh("goog-control", function() {
  return new Z(k)
});
function Bh() {
}
E(Bh, fh);
da(Bh);
s = Bh.prototype;
s.pc = q("button");
s.Q = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : Bh.d.Q.call(this, a, b, c)
};
s.s = function(a) {
  var b = Bh.d.s.call(this, a), c = a.tc();
  c && this.Kd(b, c);
  (c = a.uc()) && this.Ic(b, c);
  a.P & 16 && this.Q(b, 16, !!(a.e & 16));
  return b
};
s.uc = u;
s.Ic = u;
s.tc = function(a) {
  return a.title
};
s.Kd = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
s.wa = q("goog-button");
function Ch() {
}
E(Ch, Bh);
da(Ch);
s = Ch.prototype;
s.pc = function() {
};
s.s = function(a) {
  a.K && m != a.ld && wh(a, m);
  a.ld = m;
  a.Zd &= -256;
  a.K && a.e & 32 && f(Error("Component already rendered"));
  a.e & 32 && a.O(32, m);
  a.P &= -33;
  return a.fb().s("button", {"class":hh(this, a).join(" "), disabled:!a.isEnabled(), title:a.tc() || "", value:a.uc() || ""}, xh(a) || "")
};
s.Be = function(a) {
  Wg(ch(a), a.f(), "click", a.Ub)
};
s.Hc = u;
s.vb = u;
s.Ee = function(a) {
  return a.isEnabled()
};
s.cc = u;
s.O = function(a, b, c) {
  Ch.d.O.call(this, a, b, c);
  if((a = a.f()) && b == 1) {
    a.disabled = c
  }
};
s.uc = function(a) {
  return a.value
};
s.Ic = function(a, b) {
  if(a) {
    a.value = b
  }
};
s.Q = u;
function Dh(a, b, c) {
  Z.call(this, a, b || Ch.gb(), c)
}
E(Dh, Z);
s = Dh.prototype;
s.uc = o("rf");
s.Ic = function(a) {
  this.rf = a;
  this.w.Ic(this.f(), a)
};
s.tc = o("nf");
s.Kd = function(a) {
  this.nf = a;
  this.w.Kd(this.f(), a)
};
s.c = function() {
  Dh.d.c.call(this);
  delete this.rf;
  delete this.nf
};
s.ta = function() {
  Dh.d.ta.call(this);
  if(this.P & 32) {
    var a = this.Pa();
    a && Wg(ch(this), a, "keyup", this.kd)
  }
};
s.kd = function(a) {
  return a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup" ? this.Ub(a) : a.keyCode == 32
};
kh("goog-button", function() {
  return new Dh(k)
});
function Eh() {
}
E(Eh, Bh);
da(Eh);
Eh.prototype.s = function(a) {
  var b = {"class":"goog-inline-block " + hh(this, a).join(" "), title:a.tc() || ""}, b = a.fb().s("div", b, Fh(this, a.Eb, a.fb()));
  this.Id(a, b);
  return b
};
Eh.prototype.pc = q("button");
Eh.prototype.Id = function(a, b) {
  a.isEnabled() || this.Q(b, 1, j);
  a.e & 8 && this.Q(b, 8, j);
  a.P & 16 && this.Q(b, 16, j);
  a.e & 64 && this.Q(b, 64, j)
};
function Fh(a, b, c) {
  return c.s("div", "goog-inline-block " + (a.wa() + "-outer-box"), c.s("div", "goog-inline-block " + (a.wa() + "-inner-box"), b))
}
Eh.prototype.wa = q("goog-custom-button");
function Gh(a, b, c) {
  Dh.call(this, a, b || Eh.gb(), c)
}
E(Gh, Dh);
kh("goog-custom-button", function() {
  return new Gh(k)
});
var Hh;
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
  Hh = c
})();
function Ih(a, b) {
  Zg.call(this, b);
  this.Of = a;
  this.ed = new Ug(this);
  this.oc = new K
}
E(Ih, Zg);
s = Ih.prototype;
s.a = V("goog.ui.media.FlashObject");
s.Dg = "window";
s.$d = "#000000";
s.xf = "sameDomain";
function Jh(a, b, c) {
  a.Wd = w(b) ? b : Math.round(b) + "px";
  a.md = w(c) ? c : Math.round(c) + "px";
  if(a.f()) {
    b = a.f() ? a.f().firstChild : k, c = a.Wd, a = a.md, c instanceof ff ? (a = c.height, c = c.width) : a == i && f(Error("missing height argument")), b.style.width = Sg(c), b.style.height = Sg(a)
  }
}
s.ta = function() {
  Ih.d.ta.call(this);
  var a = this.f(), b;
  b = L ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>' : '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
  for(var c = L ? '<param name="wmode" value="%s"/>' : "wmode=%s", c = ta(c, this.Dg), d = this.oc.na(), e = this.oc.J(), g = [], h = 0;h < d.length;h++) {
    var l = wa(d[h]), n = wa(e[h]);
    g.push(l + "=" + n)
  }
  b = ta(b, bh(this), bh(this), "goog-ui-media-flash-object", G(this.Of), G(g.join("&")), this.$d, this.xf, c);
  a.innerHTML = b;
  this.Wd && this.md && Jh(this, this.Wd, this.md);
  Wg(this.ed, this.f(), Qa(sc), vc)
};
s.s = function() {
  this.ef != k && !(Ea(Hh, this.ef) >= 0) && (S(this.a, "Required flash version not found:" + this.ef), f(Error("Method not supported")));
  var a = this.fb().createElement("div");
  a.className = "goog-ui-media-flash";
  this.o = a
};
s.c = function() {
  Ih.d.c.call(this);
  this.oc = k;
  this.ed.b();
  this.ed = k
};
function Kh(a) {
  F.call(this, a)
}
E(Kh, F);
Kh.prototype.name = "cw.loadflash.FlashLoadFailed";
t.__loadFlashObject_callbacks = {};
function Lh(a, b, c) {
  function d() {
    e && delete t.__loadFlashObject_callbacks[e]
  }
  var e;
  if(ac && !mc("1.8.1.20")) {
    return sd(new Kh("Flash corrupts Error hierarchy in Firefox 2.0.0.0; disabled for all < 2.0.0.20"))
  }
  if(!(Ea(Hh, "9") >= 0)) {
    return b = Hh, sd(new Kh("Need Flash Player 9+; had " + (b ? b : "none")))
  }
  var g;
  e = "_" + yd();
  var h = new hd(d);
  t.__loadFlashObject_callbacks[e] = function() {
    a.setTimeout(function() {
      d();
      h.ia(Y(g))
    }, 0)
  };
  b.oc.set("onloadcallback", '__loadFlashObject_callbacks["' + e + '"]()');
  g = bh(b);
  dh(b, c);
  return h
}
function Mh(a, b, c) {
  var d = Lh(a, b, c), e = a.setTimeout(function() {
    d.cancel()
  }, 8E3);
  pd(d, function(b) {
    a.clearTimeout(e);
    return b
  });
  return d
}
;function Nh() {
  if(ac) {
    this.Ka = {}, this.Rc = {}, this.Lc = []
  }
}
Nh.prototype.a = V("goog.net.xhrMonitor");
Nh.prototype.W = ac;
Nh.prototype.bc = function(a) {
  this.W = ac && a
};
function Oh(a) {
  var b = Ph;
  if(b.W) {
    var c = w(a) ? a : ia(a) ? z(a) : "";
    U(b.a, "Pushing context: " + a + " (" + c + ")");
    b.Lc.push(c)
  }
}
function Qh() {
  var a = Ph;
  if(a.W) {
    var b = a.Lc.pop();
    U(a.a, "Popping context: " + b);
    Rh(a, b)
  }
}
function Sh(a) {
  var b = Ph;
  if(b.W) {
    a = z(a);
    T(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.Lc.length;c++) {
      var d = b.Lc[c];
      Th(b.Ka, d, a);
      Th(b.Rc, a, d)
    }
  }
}
function Rh(a, b) {
  var c = a.Rc[b], d = a.Ka[b];
  c && d && (U(a.a, "Updating dependent contexts"), Va(c, function(a) {
    Va(d, function(b) {
      Th(this.Ka, a, b);
      Th(this.Rc, b, a)
    }, this)
  }, a))
}
function Th(a, b, c) {
  a[b] || (a[b] = []);
  Za(a[b], c) || a[b].push(c)
}
var Ph = new Nh;
function Uh() {
}
Uh.prototype.ic = k;
var Vh;
function Wh() {
}
E(Wh, Uh);
function Xh(a) {
  return(a = Yh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Zh(a) {
  var b = {};
  Yh(a) && (b[0] = j, b[1] = j);
  return b
}
Wh.prototype.nd = k;
function Yh(a) {
  if(!a.nd && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.nd = d
      }catch(e) {
      }
    }
    f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.nd
}
Vh = new Wh;
function $h(a) {
  this.headers = new K;
  this.zb = a || k
}
E($h, fd);
$h.prototype.a = V("goog.net.XhrIo");
var ai = /^https?:?$/i;
s = $h.prototype;
s.qa = m;
s.h = k;
s.Qc = k;
s.Qb = "";
s.Ge = "";
s.Nb = 0;
s.Ob = "";
s.dd = m;
s.xc = m;
s.od = m;
s.Qa = m;
s.Mc = 0;
s.Wa = k;
s.gf = "";
s.Cg = m;
s.send = function(a, b, c, d) {
  this.h && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Qb = a;
  this.Ob = "";
  this.Nb = 0;
  this.Ge = b;
  this.dd = m;
  this.qa = j;
  this.h = this.zb ? Xh(this.zb) : Xh(Vh);
  this.Qc = this.zb ? this.zb.ic || (this.zb.ic = Zh(this.zb)) : Vh.ic || (Vh.ic = Zh(Vh));
  Sh(this.h);
  this.h.onreadystatechange = A(this.Ve, this);
  try {
    T(this.a, bi(this, "Opening Xhr")), this.od = j, this.h.open(b, a, j), this.od = m
  }catch(e) {
    T(this.a, bi(this, "Error opening Xhr: " + e.message));
    ci(this, e);
    return
  }
  var a = c || "", g = this.headers.G();
  d && Eb(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.U("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Eb(g, function(a, b) {
    this.h.setRequestHeader(b, a)
  }, this);
  if(this.gf) {
    this.h.responseType = this.gf
  }
  if("withCredentials" in this.h) {
    this.h.withCredentials = this.Cg
  }
  try {
    if(this.Wa) {
      gd.clearTimeout(this.Wa), this.Wa = k
    }
    if(this.Mc > 0) {
      T(this.a, bi(this, "Will abort after " + this.Mc + "ms if incomplete")), this.Wa = gd.setTimeout(A(this.yg, this), this.Mc)
    }
    T(this.a, bi(this, "Sending request"));
    this.xc = j;
    this.h.send(a);
    this.xc = m
  }catch(h) {
    T(this.a, bi(this, "Send error: " + h.message)), ci(this, h)
  }
};
s.dispatchEvent = function(a) {
  if(this.h) {
    Oh(this.h);
    try {
      return $h.d.dispatchEvent.call(this, a)
    }finally {
      Qh()
    }
  }else {
    return $h.d.dispatchEvent.call(this, a)
  }
};
s.yg = function() {
  if(typeof ba != "undefined" && this.h) {
    this.Ob = "Timed out after " + this.Mc + "ms, aborting", this.Nb = 8, T(this.a, bi(this, this.Ob)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function ci(a, b) {
  a.qa = m;
  if(a.h) {
    a.Qa = j, a.h.abort(), a.Qa = m
  }
  a.Ob = b;
  a.Nb = 5;
  di(a);
  ei(a)
}
function di(a) {
  if(!a.dd) {
    a.dd = j, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
s.abort = function(a) {
  if(this.h && this.qa) {
    T(this.a, bi(this, "Aborting")), this.qa = m, this.Qa = j, this.h.abort(), this.Qa = m, this.Nb = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ei(this)
  }
};
s.c = function() {
  if(this.h) {
    if(this.qa) {
      this.qa = m, this.Qa = j, this.h.abort(), this.Qa = m
    }
    ei(this, j)
  }
  $h.d.c.call(this)
};
s.Ve = function() {
  !this.od && !this.xc && !this.Qa ? this.eg() : fi(this)
};
s.eg = function() {
  fi(this)
};
function fi(a) {
  if(a.qa && typeof ba != "undefined") {
    if(a.Qc[1] && a.xa() == 4 && gi(a) == 2) {
      T(a.a, bi(a, "Local request error detected and ignored"))
    }else {
      if(a.xc && a.xa() == 4) {
        gd.setTimeout(A(a.Ve, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.xa() == 4) {
          T(a.a, bi(a, "Request complete"));
          a.qa = m;
          var b;
          a: {
            switch(gi(a)) {
              case 0:
                b = w(a.Qb) ? a.Qb.match(Fe)[1] || k : a.Qb.ba;
                b = !(b ? ai.test(b) : self.location ? ai.test(self.location.protocol) : 1);
                break a;
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
                b = j;
                break a;
              default:
                b = m
            }
          }
          if(b) {
            a.dispatchEvent("complete"), a.dispatchEvent("success")
          }else {
            a.Nb = 6;
            var c;
            try {
              c = a.xa() > 2 ? a.h.statusText : ""
            }catch(d) {
              T(a.a, "Can not get status: " + d.message), c = ""
            }
            a.Ob = c + " [" + gi(a) + "]";
            di(a)
          }
          ei(a)
        }
      }
    }
  }
}
function ei(a, b) {
  if(a.h) {
    var c = a.h, d = a.Qc[0] ? u : k;
    a.h = k;
    a.Qc = k;
    if(a.Wa) {
      gd.clearTimeout(a.Wa), a.Wa = k
    }
    b || (Oh(c), a.dispatchEvent("ready"), Qh());
    var e = Ph;
    if(e.W) {
      var g = z(c);
      T(e.a, "Closing XHR : " + g);
      delete e.Rc[g];
      for(var h in e.Ka) {
        $a(e.Ka[h], g), e.Ka[h].length == 0 && delete e.Ka[h]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(l) {
      R(a.a, "Problem encountered resetting onreadystatechange: " + l.message)
    }
  }
}
s.Ce = function() {
  return!!this.h
};
s.xa = function() {
  return this.h ? this.h.readyState : 0
};
function gi(a) {
  try {
    return a.xa() > 2 ? a.h.status : -1
  }catch(b) {
    return S(a.a, "Can not get status: " + b.message), -1
  }
}
s.getResponseHeader = function(a) {
  return this.h && this.xa() == 4 ? this.h.getResponseHeader(a) : i
};
function bi(a, b) {
  return b + " [" + a.Ge + " " + a.Qb + " " + gi(a) + "]"
}
;var hi = !(L || M && !mc("420+"));
function ii(a, b) {
  this.Nc = a;
  this.$ = b
}
E(ii, N);
s = ii.prototype;
s.p = k;
s.Fa = -1;
s.qe = m;
s.ze = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function ji(a) {
  var b = Nf(a.he), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.$, c, b), b != 1 && a.b()) : a.b()
}
s.Wf = function() {
  ji(this);
  if(!this.da) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.$);
    this.b()
  }
};
s.jg = function() {
  var a = t.parent;
  if(a) {
    this.Fa = this.p.xa();
    if(this.Fa >= 2 && !this.qe) {
      for(var b = new K, c = this.ze.length;c--;) {
        var d = this.ze[c];
        try {
          b.set(d, this.p.h.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.u() && (this.qe = j, a.__XHRMaster_ongotheaders(this.$, Jb(b)), this.da)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.$, this.Fa);
    hi && this.Fa == 3 && ji(this)
  }else {
    this.b()
  }
};
s.vd = function(a, b, c) {
  this.p = new $h;
  P(this.p, "readystatechange", A(this.jg, this));
  P(this.p, "complete", A(this.Wf, this));
  this.p.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.he = new Mf(this.p.h, 1048576)
};
s.c = function() {
  ii.d.c.call(this);
  delete this.he;
  this.p && this.p.b();
  delete this.Nc.dc[this.$];
  delete this.Nc
};
function li() {
  this.dc = {}
}
E(li, N);
li.prototype.$f = function(a, b, c, d) {
  var e = new ii(this, a);
  this.dc[a] = e;
  e.vd(b, c, d)
};
li.prototype.Hf = function(a) {
  (a = this.dc[a]) && a.b()
};
li.prototype.c = function() {
  li.d.c.call(this);
  for(var a = Qa(this.dc);a.length;) {
    a.pop().b()
  }
  delete this.dc
};
var mi = new li;
t.__XHRSlave_makeRequest = A(mi.$f, mi);
t.__XHRSlave_dispose = A(mi.Hf, mi);
function ni() {
}
ni.prototype.pe = function() {
  return Boolean(Number((new X(document.location)).M.get("httpStreaming", "0"))) ? 2 : 1
};
function oi(a) {
  var b = new Ih("/compiled_client/FlashConnector.swf?cb=4bdfc178fc0e508c0cd5efc3fdb09920");
  b.$d = "#777777";
  Jh(b, 300, 30);
  var c = Y("FlashConnectorSwf");
  c || f(Error("no FlashConnectorSwf?"));
  return Mh(a.H, b, c)
}
function pi(a, b, c) {
  var d = new X(document.location);
  if(c) {
    var e = d.V, g = t.__demo_mainSocketPort, d = oi(a);
    nd(d, function(b) {
      b = new ke(a, b);
      return new Tf(e, g, b)
    });
    return d
  }else {
    return b ? (b = t.__demo_shared_domain, d = d.G(), Je(d, "_____random_____." + b)) : d = d.G(), Le(d, "/httpface/"), Me(d, "", i), d = new Uf(d.toString().replace("_____random_____", "%random%")), rd(d)
  }
}
function qi() {
  var a = ri, b = (new X(document.location)).M, c = b.get("mode") != "http", b = Boolean(Number(b.get("useSub", "1")));
  return pi(a, b, c)
}
;var si = V("ljstream.logger");
window.onerror = function(a, b, c) {
  R(si, "window.onerror: message: " + J(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function ti() {
  this.Xe = new sb
}
ti.prototype.vg = function(a, b) {
  si.info("streamReset: reasonString=" + J(a) + ", applicationLevel=" + b);
  ui("Disconnected from server.  Try reloading this page.");
  vi = k
};
function wi(a) {
  si.info("Sending preferences to server");
  var b;
  b = new vg;
  b.n[1] = Y("include_russian_posts").checked;
  b.La && (b.La[1] = j);
  b = a.Xe.ac(b);
  eg(a.B, [(new vb(i)).ac([2, b])])
}
ti.prototype.wg = function(a) {
  var a = ub(a), b = a[1];
  if(a[0] == 1) {
    var c = this.Xe.cd(ug.Jb(), b), a = lb(c, 1), b = lb(c, 2), c = lb(c, 3);
    (a = ua(a)) || (a = "[No title]");
    var d = sa(G(c)), e = document, c = e.createElement("div");
    L ? (c.innerHTML = "<br>" + d, c.removeChild(c.firstChild)) : c.innerHTML = d;
    if(c.childNodes.length == 1) {
      c = c.removeChild(c.firstChild)
    }else {
      for(d = e.createDocumentFragment();c.firstChild;) {
        d.appendChild(c.firstChild)
      }
      c = d
    }
    a = rf("span", {}, rf("a", {href:b, "class":"ljpost-title-link"}, a), rf("span", {}, "\u00a0"), c);
    xi(a)
  }
};
ti.prototype.reset = function(a) {
  si.info("resetting with reason: " + a);
  this.B.reset(a)
};
var vi = k, ri = new td(t.window);
function ui(a) {
  a = rf("span", {"class":"important-message"}, a);
  xi(a)
}
function yi() {
  vi && (vi.reset("idle timeout fired"), vi = k, ui("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var zi = k;
function Ai() {
  zi != k && ri.H.clearTimeout(zi);
  vi && (zi = ri.H.setTimeout(yi, 6E5))
}
P(window, ["click", "focus", "keydown", "keypress"], Ai, j);
var qf = new lf, Bi = 0;
function xi(a) {
  a = rf("div", {"class":"row-" + (Bi % 2 == 0 ? "even" : "odd")}, rf("nobr", {}, a));
  Y("ljstream-container-inner").appendChild(a);
  Bi += 1;
  var b;
  if(b = tg) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !M && d.compatMode == "CSS1Compat" ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new jf(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = pf().height;
    b = !(a + b <= c + d)
  }
  if(b) {
    a = pf().height, window.scrollBy(0, Math.round(a / 2) + 80)
  }
}
function Ci() {
  var a = new ni;
  vi = new ti;
  Ai();
  nd(qi(), function(b) {
    vi || f(Error("lastProto falsy?"));
    var b = new Zf(b, a, ri), c = vi;
    b.Dd = A(c.wg, c);
    b.onreset = A(c.vg, c);
    vi.B = b;
    c = vi;
    eg(c.B, ["subprotocol:ljstream"]);
    wi(c);
    b.start();
    return k
  })
}
function Di() {
  P(t, "load", function() {
    window.scrollTo(0, 0)
  });
  P(Y("include_russian_posts"), "click", function() {
    wi(vi)
  });
  tg = j;
  P(Y("automatic_scroll"), "click", function(a) {
    tg = a.target.checked
  });
  var a = new Gh("Clear posts");
  vh(a, "clear-posts-button");
  dh(a, Y("prefs"));
  P(a, "action", function() {
    Y("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = Y("ljstream-container");
  a.style.marginTop = Y("demo-header").offsetHeight + "px";
  Y("demo-header").style.width = "9000px";
  var b = rf("div", {id:"ljstream-container-inner"});
  a.appendChild(b)
}
function Ei() {
  ce().ub(Vd);
  if((new X(document.location)).M.get("logging") == "1") {
    var a = new Mg("main");
    a.bc(j);
    a.Ra()
  }
  si.info("Logger works.");
  Di();
  Ci()
}
var Fi = "__ljstream_init".split("."), Gi = t;
!(Fi[0] in Gi) && Gi.execScript && Gi.execScript("var " + Fi[0]);
for(var Hi;Fi.length && (Hi = Fi.shift());) {
  !Fi.length && fa(Ei) ? Gi[Hi] = Ei : Gi = Gi[Hi] ? Gi[Hi] : Gi[Hi] = {}
}
;})();
