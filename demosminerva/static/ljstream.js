(function(){function f(a) {
  throw a;
}
var i = void 0, j = true, k = null, n = false;
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
function r(a) {
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
  a.bb = function() {
    return a.Gf || (a.Gf = new a)
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
function B(a, b, c) {
  B = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? la : ma;
  return B.apply(k, arguments)
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
ra = {oa:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, Pe:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
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
        var l = e, m = e.substr(-1), p = qa[m];
        if(p && (p = e.match(RegExp("\\" + p + "(?!$)", "g")), m = e.match(RegExp("\\" + m, "g")), (p ? p.length : 0) < (m ? m.length : 0))) {
          e = e.substr(0, e.length - 1), g--
        }
        b.Pe && (e = e.replace(b.Pe, function(a) {
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
    d += b.oa.apply(t, c[e])
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
function ya(a) {
  if(!za.test(a)) {
    return a
  }
  a.indexOf("&") != -1 && (a = a.replace(Aa, "&amp;"));
  a.indexOf("<") != -1 && (a = a.replace(Ba, "&lt;"));
  a.indexOf(">") != -1 && (a = a.replace(Ca, "&gt;"));
  a.indexOf('"') != -1 && (a = a.replace(Da, "&quot;"));
  return a
}
var Aa = /&/g, Ba = /</g, Ca = />/g, Da = /\"/g, za = /[&<>\"]/;
function Ea(a) {
  return xa(a.replace(/  /g, " &#160;"), i)
}
function Fa(a, b) {
  for(var c = 0, d = ua(String(a)).split("."), e = ua(String(b)).split("."), g = Math.max(d.length, e.length), h = 0;c == 0 && h < g;h++) {
    var l = d[h] || "", m = e[h] || "", p = RegExp("(\\d*)(\\D*)", "g"), A = RegExp("(\\d*)(\\D*)", "g");
    do {
      var q = p.exec(l) || ["", "", ""], x = A.exec(m) || ["", "", ""];
      if(q[0].length == 0 && x[0].length == 0) {
        break
      }
      c = Ga(q[1].length == 0 ? 0 : parseInt(q[1], 10), x[1].length == 0 ? 0 : parseInt(x[1], 10)) || Ga(q[2].length == 0, x[2].length == 0) || Ga(q[2], x[2])
    }while(c == 0)
  }
  return c
}
function Ga(a, b) {
  if(a < b) {
    return-1
  }else {
    if(a > b) {
      return 1
    }
  }
  return 0
}
;function Ha(a, b) {
  b.unshift(a);
  F.call(this, ta.apply(k, b));
  b.shift();
  this.ug = a
}
E(Ha, F);
Ha.prototype.name = "AssertionError";
function Ia(a, b) {
  f(new Ha("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ja(a, b, c) {
  this.v = a;
  this.C = b;
  this.jd = c.name;
  this.fb = !!c.vg;
  this.sg = !!c.required;
  this.Ab = c.ab;
  this.Ee = c.type;
  this.Xd = n;
  switch(this.Ab) {
    case Ka:
    ;
    case La:
    ;
    case Ma:
    ;
    case Na:
    ;
    case Oa:
      this.Xd = j
  }
  this.qg = c.defaultValue
}
var Ka = 3, La = 4, Ma = 6, Na = 16, Oa = 18;
function Pa(a) {
  return a.Ab == 11 || a.Ab == 10
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
;var G = Array.prototype, Va = G.indexOf ? function(a, b, c) {
  return G.indexOf.call(a, b, c)
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
}, Wa = G.forEach ? function(a, b, c) {
  G.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
}, Xa = G.map ? function(a, b, c) {
  return G.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), g = w(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (e[h] = b.call(c, g[h], h, a))
  }
  return e
}, Ya = G.some ? function(a, b, c) {
  return G.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && b.call(c, e[g], g, a)) {
      return j
    }
  }
  return n
}, Za = G.every ? function(a, b, c) {
  return G.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && !b.call(c, e[g], g, a)) {
      return n
    }
  }
  return j
};
function $a(a, b) {
  return Va(a, b) >= 0
}
function ab(a, b) {
  var c = Va(a, b);
  c >= 0 && G.splice.call(a, c, 1)
}
function bb(a) {
  return G.concat.apply(G, arguments)
}
function cb(a) {
  if(v(a)) {
    return bb(a)
  }else {
    for(var b = [], c = 0, d = a.length;c < d;c++) {
      b[c] = a[c]
    }
    return b
  }
}
function db(a, b) {
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
function eb(a, b, c, d) {
  G.splice.apply(a, fb(arguments, 1))
}
function fb(a, b, c) {
  return arguments.length <= 2 ? G.slice.call(a, b) : G.slice.call(a, b, c)
}
function gb(a, b) {
  G.sort.call(a, b || hb)
}
function hb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function ib(a, b, c) {
  this.Ce = a;
  this.jd = b.name || k;
  this.rg = b.ae || k;
  this.pg = b.og;
  this.ra = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.ra[b.C] = b
  }
}
function jb(a) {
  a = Ra(a.ra);
  gb(a, function(a, c) {
    return a.C - c.C
  });
  return a
}
;function kb() {
  this.n = {};
  this.Za = this.constructor.Za;
  var a = this.Za.ra, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.ra = b;
  this.Ha = this.dd = k
}
function lb(a, b) {
  for(var c in a.n) {
    a.ra[c] || b.call(a, Number(c), a.n[c])
  }
}
s = kb.prototype;
s.Bb = o("Za");
s.get = function(a, b) {
  return mb(this, a.C, b)
};
s.set = function(a, b) {
  var c = a.C;
  this.n[c] = b;
  this.Ha && (this.Ha[c] = j)
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
    return n
  }
  for(var b = jb(this.Bb()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(nb(this, d.C) != nb(a, d.C)) {
      return n
    }
    if(nb(this, d.C)) {
      var e = Pa(d), g = d.C, h = this.n[g], g = a.n[g];
      if(d.fb) {
        if(h.length != g.length) {
          return n
        }
        for(d = 0;d < h.length;d++) {
          if(!(e ? h[d].k(g[d]) : h[d] == g[d])) {
            return n
          }
        }
      }else {
        if(!(e ? h.k(g) : h == g)) {
          return n
        }
      }
    }
  }
  return j
};
s.D = function() {
  for(var a = new this.constructor, b = jb(a.Bb()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete a.n[d.C];
    if(nb(this, d.C)) {
      var e = Pa(d);
      if(d.fb) {
        var g;
        g = d.C;
        ob(this, this.ra[g]);
        g = this.n[g] || [];
        for(var h = 0;h < g.length;h++) {
          a.add(d, e ? g[h].D() : g[h])
        }
      }else {
        g = this.get(d), a.set(d, e ? g.D() : g)
      }
    }
  }
  return a
};
function nb(a, b) {
  return b in a.n && fa(a.n[b]) && a.n[b] !== k
}
function ob(a, b) {
  if(a.dd) {
    var c = b.C;
    if(!(c in a.Ha)) {
      var d = a.n, e;
      e = a.dd;
      var g = a.n[c];
      if(g == k) {
        e = g
      }else {
        if(b.fb) {
          var h = [];
          v(g);
          for(var l = 0;l < g.length;l++) {
            h[l] = e.gc(b, g[l])
          }
          e = h
        }else {
          e = e.gc(b, g)
        }
      }
      d[c] = e;
      a.Ha[c] = j
    }
  }
}
function mb(a, b, c) {
  var d = a.ra[b];
  ob(a, d);
  return d.fb ? (c = c || 0, c >= 0 && pb(a, b), a.n[b][c]) : (v(a.n[b]), b in a.n ? a.n[b] : k)
}
function pb(a, b) {
  return a.ra[b].fb ? (nb(a, b) && v(a.n[b]), nb(a, b) ? a.n[b].length : 0) : nb(a, b) ? 1 : 0
}
function qb(a, b) {
  var c = [], d, e;
  for(e in b) {
    b.hasOwnProperty(e) && (e == 0 ? d = b[0] : c.push(new Ja(a, e, b[e])))
  }
  a.Za = new ib(a, d, c);
  a.Bb = function() {
    return a.Za
  }
}
;function rb() {
}
rb.prototype.hc = function(a, b) {
  return Pa(a) ? this.Tb(b) : b
};
rb.prototype.Pc = function(a) {
  new a.Ce;
  f(Error("Unimplemented"))
};
rb.prototype.gc = function(a, b) {
  if(Pa(a)) {
    return this.Pc(a.Ee.Za, b)
  }
  if(!a.Xd) {
    return b
  }
  var c = a.Ee;
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
function sb() {
}
E(sb, rb);
sb.prototype.Pc = function(a, b) {
  var c = new a.Ce;
  c.dd = this;
  c.n = b;
  c.Ha = {};
  return c
};
function tb() {
}
E(tb, sb);
tb.prototype.Tb = function(a) {
  for(var b = jb(a.Bb()), c = [], d = 0;d < b.length;d++) {
    var e = b[d];
    if(nb(a, e.C)) {
      var g = e.C;
      if(e.fb) {
        c[g] = [];
        for(var h = 0;h < pb(a, e.C);h++) {
          c[g][h] = this.hc(e, a.get(e, h))
        }
      }else {
        c[g] = this.hc(e, a.get(e))
      }
    }
  }
  lb(a, function(a, b) {
    c[a] = b
  });
  return c
};
tb.prototype.hc = function(a, b) {
  return a.Ab == 8 ? b ? 1 : 0 : rb.prototype.hc.apply(this, arguments)
};
tb.prototype.gc = function(a, b) {
  return a.Ab == 8 ? b === 1 : rb.prototype.gc.apply(this, arguments)
};
function ub(a) {
  return y(a) || typeof a == "object" && y(a.call) && y(a.apply)
}
;function vb(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  f(Error("Invalid JSON string: " + a))
}
function wb(a) {
  this.wc = a
}
wb.prototype.Tb = function(a) {
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
      if(v(b)) {
        var d = b.length;
        c.push("[");
        for(var e = "", g = 0;g < d;g++) {
          c.push(e), e = b[g], xb(a, a.wc ? a.wc.call(b, String(g), e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], typeof e != "function" && (c.push(d), yb(g, c), c.push(":"), xb(a, a.wc ? a.wc.call(b, g, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      f(Error("Unknown type: " + typeof b))
  }
}
var zb = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\u000b"}, Ab = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function yb(a, b) {
  b.push('"', a.replace(Ab, function(a) {
    if(a in zb) {
      return zb[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    b < 16 ? e += "000" : b < 256 ? e += "00" : b < 4096 && (e += "0");
    return zb[a] = e + b.toString(16)
  }), '"')
}
;function Bb(a, b, c) {
  var d = Va(c, a);
  if(d != -1) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = ea(a);
    if(d == "boolean" || d == "number" || d == "null" || d == "undefined") {
      b.push(String(a))
    }else {
      if(d == "string") {
        yb(a, b)
      }else {
        if(ub(a.r)) {
          a.r(b, c)
        }else {
          if(ub(a.hf)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if(d == "array") {
                d = a.length;
                b.push("[");
                for(var e = "", g = 0;g < d;g++) {
                  b.push(e), Bb(a[g], b, c), e = ", "
                }
                b.push("]")
              }else {
                if(d == "object") {
                  if(ha(a) && typeof a.valueOf == "function") {
                    b.push("new Date(", String(a.valueOf()), ")")
                  }else {
                    for(var d = Sa(a).concat(Ta), e = {}, h = g = 0;h < d.length;) {
                      var l = d[h++], m = ia(l) ? "o" + z(l) : (typeof l).charAt(0) + l;
                      Object.prototype.hasOwnProperty.call(e, m) || (e[m] = j, d[g++] = l)
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
function H(a, b, c) {
  c || (c = []);
  Bb(a, b, c)
}
function I(a) {
  var b = [];
  H(a, b, i);
  return b.join("")
}
;function Cb(a) {
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
function Db(a) {
  if(typeof a.L == "function") {
    return a.L()
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
  return Ra(a)
}
function Eb(a) {
  if(typeof a.ua == "function") {
    return a.ua()
  }
  if(typeof a.L != "function") {
    if(ga(a) || w(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return Sa(a)
  }
}
function Fb(a, b, c) {
  if(typeof a.forEach == "function") {
    a.forEach(b, c)
  }else {
    if(ga(a) || w(a)) {
      Wa(a, b, c)
    }else {
      for(var d = Eb(a), e = Db(a), g = e.length, h = 0;h < g;h++) {
        b.call(c, e[h], d && d[h], a)
      }
    }
  }
}
function Gb(a, b) {
  if(typeof a.every == "function") {
    return a.every(b, i)
  }
  if(ga(a) || w(a)) {
    return Za(a, b, i)
  }
  for(var c = Eb(a), d = Db(a), e = d.length, g = 0;g < e;g++) {
    if(!b.call(i, d[g], c && c[g], a)) {
      return n
    }
  }
  return j
}
;function J(a, b) {
  this.m = {};
  this.j = [];
  var c = arguments.length;
  if(c > 1) {
    c % 2 && f(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.Ic(a)
  }
}
s = J.prototype;
s.f = 0;
s.Gd = 0;
s.u = o("f");
s.L = function() {
  Hb(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.m[this.j[b]])
  }
  return a
};
s.ua = function() {
  Hb(this);
  return this.j.concat()
};
s.T = function(a) {
  return Ib(this.m, a)
};
s.cc = function(a) {
  for(var b = 0;b < this.j.length;b++) {
    var c = this.j[b];
    if(Ib(this.m, c) && this.m[c] == a) {
      return j
    }
  }
  return n
};
s.k = function(a, b) {
  if(this === a) {
    return j
  }
  if(this.f != a.u()) {
    return n
  }
  var c = b || Jb;
  Hb(this);
  for(var d, e = 0;d = this.j[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return n
    }
  }
  return j
};
function Jb(a, b) {
  return a === b
}
s.Oa = function() {
  return this.f == 0
};
s.clear = function() {
  this.m = {};
  this.Gd = this.f = this.j.length = 0
};
s.remove = function(a) {
  return Ib(this.m, a) ? (delete this.m[a], this.f--, this.Gd++, this.j.length > 2 * this.f && Hb(this), j) : n
};
function Hb(a) {
  if(a.f != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      Ib(a.m, d) && (a.j[c++] = d);
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
  return Ib(this.m, a) ? this.m[a] : b
};
s.set = function(a, b) {
  Ib(this.m, a) || (this.f++, this.j.push(a), this.Gd++);
  this.m[a] = b
};
s.Ic = function(a) {
  var b;
  a instanceof J ? (b = a.ua(), a = a.L()) : (b = Sa(a), a = Ra(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
s.D = function() {
  return new J(this)
};
function Kb(a) {
  Hb(a);
  for(var b = {}, c = 0;c < a.j.length;c++) {
    var d = a.j[c];
    b[d] = a.m[d]
  }
  return b
}
function Ib(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function Lb(a) {
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
;function Mb(a, b) {
  this.Va = a;
  this.Ra = b
}
Mb.prototype.k = function(a) {
  return a instanceof Mb && this.Va == a.Va && this.Ra.join(",") == a.Ra
};
Mb.prototype.r = function(a, b) {
  a.push("new SACK(", String(this.Va), ", ");
  H(this.Ra, a, b);
  a.push(")")
};
function Nb() {
  this.H = new J
}
s = Nb.prototype;
s.Xa = -1;
s.Ea = 0;
s.append = function(a) {
  var b = Lb(a);
  this.H.set(this.Xa + 1, [a, b]);
  this.Xa += 1;
  this.Ea += b
};
s.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
s.r = function(a) {
  a.push("<Queue with ", String(this.H.u()), " item(s), counter=#", String(this.Xa), ", size=", String(this.Ea), ">")
};
function Ob(a) {
  Hb(a.H);
  gb(a.H.j);
  return a.H.j
}
function Pb() {
  this.Fa = new J
}
Pb.prototype.hb = -1;
Pb.prototype.Ea = 0;
function Qb(a) {
  var b = a.Fa.ua();
  gb(b);
  return new Mb(a.hb, b)
}
var Rb = {};
function Sb() {
  return j
}
;var Tb, Ub, Vb, Wb, Xb;
function Yb() {
  return t.navigator ? t.navigator.userAgent : k
}
Xb = Wb = Vb = Ub = Tb = n;
var Zb;
if(Zb = Yb()) {
  var $b = t.navigator;
  Tb = Zb.indexOf("Opera") == 0;
  Ub = !Tb && Zb.indexOf("MSIE") != -1;
  Wb = (Vb = !Tb && Zb.indexOf("WebKit") != -1) && Zb.indexOf("Mobile") != -1;
  Xb = !Tb && !Vb && $b.product == "Gecko"
}
var ac = Tb, K = Ub, bc = Xb, L = Vb, cc = Wb, dc = t.navigator, ec = (dc && dc.platform || "").indexOf("Mac") != -1, fc;
a: {
  var gc = "", hc;
  if(ac && t.opera) {
    var ic = t.opera.version, gc = typeof ic == "function" ? ic() : ic
  }else {
    if(bc ? hc = /rv\:([^\);]+)(\)|;)/ : K ? hc = /MSIE\s+([^\);]+)(\)|;)/ : L && (hc = /WebKit\/(\S+)/), hc) {
      var jc = hc.exec(Yb()), gc = jc ? jc[1] : ""
    }
  }
  if(K) {
    var kc, lc = t.document;
    kc = lc ? lc.documentMode : i;
    if(kc > parseFloat(gc)) {
      fc = String(kc);
      break a
    }
  }
  fc = gc
}
var mc = {};
function nc(a) {
  return mc[a] || (mc[a] = Fa(fc, a) >= 0)
}
var oc = {};
function pc() {
  return oc[9] || (oc[9] = K && document.documentMode && document.documentMode >= 9)
}
;var qc = !K || pc(), rc = !K || pc(), sc = K && !nc("8");
function M() {
}
M.prototype.ba = n;
M.prototype.e = function() {
  if(!this.ba) {
    this.ba = j, this.c()
  }
};
M.prototype.c = function() {
  this.qf && tc.apply(k, this.qf)
};
function tc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ga(d) ? tc.apply(k, d) : d && typeof d.e == "function" && d.e()
  }
}
;function uc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
E(uc, M);
s = uc.prototype;
s.c = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
s.Pa = n;
s.Qb = j;
s.stopPropagation = function() {
  this.Pa = j
};
s.preventDefault = function() {
  this.Qb = n
};
function vc(a) {
  vc[" "](a);
  return a
}
vc[" "] = u;
function wc(a, b) {
  a && this.Na(a, b)
}
E(wc, uc);
var xc = [1, 4, 2];
s = wc.prototype;
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
s.ctrlKey = n;
s.altKey = n;
s.shiftKey = n;
s.metaKey = n;
s.Pf = n;
s.ia = k;
s.Na = function(a, b) {
  var c = this.type = a.type;
  uc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(bc) {
      var e;
      a: {
        try {
          vc(d.nodeName);
          e = j;
          break a
        }catch(g) {
        }
        e = n
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
  this.Pf = ec ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ia = a;
  delete this.Qb;
  delete this.Pa
};
function yc(a) {
  return qc ? a.ia.button == 0 : a.type == "click" ? j : !!(a.ia.button & xc[0])
}
s.stopPropagation = function() {
  wc.d.stopPropagation.call(this);
  this.ia.stopPropagation ? this.ia.stopPropagation() : this.ia.cancelBubble = j
};
s.preventDefault = function() {
  wc.d.preventDefault.call(this);
  var a = this.ia;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = n, sc) {
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
  wc.d.c.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ia = k
};
function Ac() {
}
var Bc = 0;
s = Ac.prototype;
s.key = 0;
s.Qa = n;
s.Mc = n;
s.Na = function(a, b, c, d, e, g) {
  y(a) ? this.se = j : a && a.handleEvent && y(a.handleEvent) ? this.se = n : f(Error("Invalid listener argument"));
  this.jb = a;
  this.Oe = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.mc = g;
  this.Mc = n;
  this.key = ++Bc;
  this.Qa = n
};
s.handleEvent = function(a) {
  return this.se ? this.jb.call(this.mc || this.src, a) : this.jb.handleEvent.call(this.jb, a)
};
var Cc, Dc = (Cc = "ScriptEngine" in t && t.ScriptEngine() == "JScript") ? t.ScriptEngineMajorVersion() + "." + t.ScriptEngineMinorVersion() + "." + t.ScriptEngineBuildVersion() : "0";
function N(a, b) {
  this.ye = b;
  this.Ka = [];
  a > this.ye && f(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.Ka.push(this.ga ? this.ga() : {})
  }
}
E(N, M);
N.prototype.ga = k;
N.prototype.Yd = k;
function Ec(a) {
  return a.Ka.length ? a.Ka.pop() : a.ga ? a.ga() : {}
}
function Fc(a, b) {
  a.Ka.length < a.ye ? a.Ka.push(b) : Gc(a, b)
}
function Gc(a, b) {
  if(a.Yd) {
    a.Yd(b)
  }else {
    if(ia(b)) {
      if(y(b.e)) {
        b.e()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
N.prototype.c = function() {
  N.d.c.call(this);
  for(var a = this.Ka;a.length;) {
    Gc(this, a.pop())
  }
  delete this.Ka
};
var Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc, Rc;
(function() {
  function a() {
    return{f:0, X:0}
  }
  function b() {
    return[]
  }
  function c() {
    var a = rc ? function(b) {
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
    return new wc
  }
  var g = Cc && !(Fa(Dc, "5.7") >= 0), h;
  Mc = function(a) {
    h = a
  };
  if(g) {
    Hc = function() {
      return Ec(l)
    };
    Ic = function(a) {
      Fc(l, a)
    };
    Jc = function() {
      return Ec(m)
    };
    Kc = function(a) {
      Fc(m, a)
    };
    Lc = function() {
      return Ec(p)
    };
    Nc = function() {
      Fc(p, c())
    };
    Oc = function() {
      return Ec(A)
    };
    Pc = function(a) {
      Fc(A, a)
    };
    Qc = function() {
      return Ec(q)
    };
    Rc = function(a) {
      Fc(q, a)
    };
    var l = new N(0, 600);
    l.ga = a;
    var m = new N(0, 600);
    m.ga = b;
    var p = new N(0, 600);
    p.ga = c;
    var A = new N(0, 600);
    A.ga = d;
    var q = new N(0, 600);
    q.ga = e
  }else {
    Hc = a, Ic = u, Jc = b, Kc = u, Lc = c, Nc = u, Oc = d, Pc = u, Qc = e, Rc = u
  }
})();
var Sc = {}, O = {}, Tc = {}, Uc = {};
function P(a, b, c, d, e) {
  if(b) {
    if(v(b)) {
      for(var g = 0;g < b.length;g++) {
        P(a, b[g], c, d, e)
      }
      return k
    }else {
      var d = !!d, h = O;
      b in h || (h[b] = Hc());
      h = h[b];
      d in h || (h[d] = Hc(), h.f++);
      var h = h[d], l = z(a), m;
      h.X++;
      if(h[l]) {
        m = h[l];
        for(g = 0;g < m.length;g++) {
          if(h = m[g], h.jb == c && h.mc == e) {
            if(h.Qa) {
              break
            }
            return m[g].key
          }
        }
      }else {
        m = h[l] = Jc(), h.f++
      }
      g = Lc();
      g.src = a;
      h = Oc();
      h.Na(c, g, a, b, d, e);
      c = h.key;
      g.key = c;
      m.push(h);
      Sc[c] = h;
      Tc[l] || (Tc[l] = Jc());
      Tc[l].push(h);
      a.addEventListener ? (a == t || !a.Td) && a.addEventListener(b, g, d) : a.attachEvent(b in Uc ? Uc[b] : Uc[b] = "on" + b, g);
      return c
    }
  }else {
    f(Error("Invalid event type"))
  }
}
function Vc(a, b, c, d, e) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      Vc(a, b[g], c, d, e)
    }
    return k
  }
  a = P(a, b, c, d, e);
  Sc[a].Mc = j;
  return a
}
function Wc(a, b, c, d, e) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      Wc(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = Xc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].jb == c && a[g].capture == d && a[g].mc == e) {
          Q(a[g].key);
          break
        }
      }
    }
  }
}
function Q(a) {
  if(!Sc[a]) {
    return n
  }
  var b = Sc[a];
  if(b.Qa) {
    return n
  }
  var c = b.src, d = b.type, e = b.Oe, g = b.capture;
  c.removeEventListener ? (c == t || !c.Td) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in Uc ? Uc[d] : Uc[d] = "on" + d, e);
  c = z(c);
  e = O[d][g][c];
  if(Tc[c]) {
    var h = Tc[c];
    ab(h, b);
    h.length == 0 && delete Tc[c]
  }
  b.Qa = j;
  e.Ge = j;
  Yc(d, g, c, e);
  delete Sc[a];
  return j
}
function Yc(a, b, c, d) {
  if(!d.rc && d.Ge) {
    for(var e = 0, g = 0;e < d.length;e++) {
      if(d[e].Qa) {
        var h = d[e].Oe;
        h.src = k;
        Nc(h);
        Pc(d[e])
      }else {
        e != g && (d[g] = d[e]), g++
      }
    }
    d.length = g;
    d.Ge = n;
    g == 0 && (Kc(d), delete O[a][b][c], O[a][b].f--, O[a][b].f == 0 && (Ic(O[a][b]), delete O[a][b], O[a].f--), O[a].f == 0 && (Ic(O[a]), delete O[a]))
  }
}
function Zc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Qa(Tc, function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          Q(g.key), c++
        }
      }
    })
  }else {
    if(a = z(a), Tc[a]) {
      for(var a = Tc[a], e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          Q(g.key), c++
        }
      }
    }
  }
}
function Xc(a, b, c) {
  var d = O;
  return b in d && (d = d[b], c in d && (d = d[c], a = z(a), d[a])) ? d[a] : k
}
function $c(a, b, c, d, e) {
  var g = 1, b = z(b);
  if(a[b]) {
    a.X--;
    a = a[b];
    a.rc ? a.rc++ : a.rc = 1;
    try {
      for(var h = a.length, l = 0;l < h;l++) {
        var m = a[l];
        m && !m.Qa && (g &= ad(m, e) !== n)
      }
    }finally {
      a.rc--, Yc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function ad(a, b) {
  var c = a.handleEvent(b);
  a.Mc && Q(a.key);
  return c
}
Mc(function(a, b) {
  if(!Sc[a]) {
    return j
  }
  var c = Sc[a], d = c.type, e = O;
  if(!(d in e)) {
    return j
  }
  var e = e[d], g, h;
  if(!rc) {
    g = b || ca("window.event");
    var l = j in e, m = n in e;
    if(l) {
      if(g.keyCode < 0 || g.returnValue != i) {
        return j
      }
      a: {
        var p = n;
        if(g.keyCode == 0) {
          try {
            g.keyCode = -1;
            break a
          }catch(A) {
            p = j
          }
        }
        if(p || g.returnValue == i) {
          g.returnValue = j
        }
      }
    }
    p = Qc();
    p.Na(g, this);
    g = j;
    try {
      if(l) {
        for(var q = Jc(), x = p.currentTarget;x;x = x.parentNode) {
          q.push(x)
        }
        h = e[j];
        h.X = h.f;
        for(var C = q.length - 1;!p.Pa && C >= 0 && h.X;C--) {
          p.currentTarget = q[C], g &= $c(h, q[C], d, j, p)
        }
        if(m) {
          h = e[n];
          h.X = h.f;
          for(C = 0;!p.Pa && C < q.length && h.X;C++) {
            p.currentTarget = q[C], g &= $c(h, q[C], d, n, p)
          }
        }
      }else {
        g = ad(c, p)
      }
    }finally {
      if(q) {
        q.length = 0, Kc(q)
      }
      p.e();
      Rc(p)
    }
    return g
  }
  d = new wc(b, this);
  try {
    g = ad(c, d)
  }finally {
    d.e()
  }
  return g
});
var bd = 0;
function cd() {
}
E(cd, M);
s = cd.prototype;
s.Td = j;
s.tc = k;
s.ud = aa("tc");
s.addEventListener = function(a, b, c, d) {
  P(this, a, b, c, d)
};
s.removeEventListener = function(a, b, c, d) {
  Wc(this, a, b, c, d)
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
        Ua(a, d)
      }
    }
    var d = 1, e, c = c[b], b = j in c, g;
    if(b) {
      e = [];
      for(g = this;g;g = g.tc) {
        e.push(g)
      }
      g = c[j];
      g.X = g.f;
      for(var h = e.length - 1;!a.Pa && h >= 0 && g.X;h--) {
        a.currentTarget = e[h], d &= $c(g, e[h], a.type, j, a) && a.Qb != n
      }
    }
    if(n in c) {
      if(g = c[n], g.X = g.f, b) {
        for(h = 0;!a.Pa && h < e.length && g.X;h++) {
          a.currentTarget = e[h], d &= $c(g, e[h], a.type, n, a) && a.Qb != n
        }
      }else {
        for(e = this;!a.Pa && e && g.X;e = e.tc) {
          a.currentTarget = e, d &= $c(g, e, a.type, n, a) && a.Qb != n
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
  cd.d.c.call(this);
  Zc(this);
  this.tc = k
};
var dd = t.window;
bd++;
bd++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function ed(a, b) {
  this.ac = [];
  this.Md = a;
  this.Vd = b || k
}
s = ed.prototype;
s.sa = n;
s.Db = n;
s.Lb = 0;
s.xd = n;
s.lf = n;
s.Kc = 0;
s.cancel = function(a) {
  if(this.sa) {
    this.Pb instanceof ed && this.Pb.cancel()
  }else {
    if(this.v) {
      var b = this.v;
      delete this.v;
      a ? b.cancel(a) : (b.Kc--, b.Kc <= 0 && b.cancel())
    }
    this.Md ? this.Md.call(this.Vd, this) : this.xd = j;
    this.sa || this.dc(new fd(this))
  }
};
s.Qd = function(a, b) {
  gd(this, a, b);
  this.Lb--;
  this.Lb == 0 && this.sa && hd(this)
};
function gd(a, b, c) {
  a.sa = j;
  a.Pb = c;
  a.Db = !b;
  hd(a)
}
function id(a) {
  if(a.sa) {
    a.xd || f(new jd(a)), a.xd = n
  }
}
s.oa = function(a) {
  id(this);
  gd(this, j, a)
};
s.dc = function(a) {
  id(this);
  gd(this, n, a)
};
function kd(a, b) {
  ld(a, b, k, i)
}
function ld(a, b, c, d) {
  a.ac.push([b, c, d]);
  a.sa && hd(a)
}
function md(a) {
  return Ya(a.ac, function(a) {
    return y(a[1])
  })
}
function hd(a) {
  a.Ed && a.sa && md(a) && (t.clearTimeout(a.Ed), delete a.Ed);
  a.v && (a.v.Kc--, delete a.v);
  for(var b = a.Pb, c = n, d = n;a.ac.length && a.Lb == 0;) {
    var e = a.ac.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.Db ? h : g) {
      try {
        var l = g.call(e || a.Vd, b);
        if(fa(l)) {
          a.Db = a.Db && (l == b || l instanceof Error), a.Pb = b = l
        }
        b instanceof ed && (d = j, a.Lb++)
      }catch(m) {
        b = m, a.Db = j, md(a) || (c = j)
      }
    }
  }
  a.Pb = b;
  if(d && a.Lb) {
    ld(b, B(a.Qd, a, j), B(a.Qd, a, n)), b.lf = j
  }
  if(c) {
    a.Ed = t.setTimeout(function() {
      fa(b.message) && b.stack && (b.message += "\n" + b.stack);
      f(b)
    }, 0)
  }
}
function nd(a) {
  var b = new ed;
  b.oa(a);
  return b
}
function jd(a) {
  F.call(this);
  this.pf = a
}
E(jd, F);
jd.prototype.message = "Already called";
function fd(a) {
  F.call(this);
  this.pf = a
}
E(fd, F);
fd.prototype.message = "Deferred was cancelled";
function od(a) {
  this.I = a;
  this.Rc = [];
  this.Zd = [];
  this.ng = B(this.ig, this)
}
od.prototype.hg = k;
od.prototype.ig = function() {
  this.hg = k;
  var a = this.Rc;
  this.Rc = [];
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
  if(this.Rc.length == 0) {
    a = this.Zd;
    this.Zd = [];
    for(b = 0;b < a.length;b++) {
      a[b].oa(k)
    }
  }
};
var pd = new od(t.window);
function qd() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ D()).toString(36)
}
function rd(a) {
  return a.substr(0, a.length - 1)
}
var sd = /^(0|[1-9]\d*)$/, td = /^(0|\-?[1-9]\d*)$/;
function ud(a) {
  var b = vd;
  return sd.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function wd(a) {
  this.m = new J;
  a && this.Ic(a)
}
function xd(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + z(a) : b.substr(0, 1) + a
}
s = wd.prototype;
s.u = function() {
  return this.m.u()
};
s.add = function(a) {
  this.m.set(xd(a), a)
};
s.Ic = function(a) {
  for(var a = Db(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
s.rd = function(a) {
  for(var a = Db(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
s.remove = function(a) {
  return this.m.remove(xd(a))
};
s.clear = function() {
  this.m.clear()
};
s.Oa = function() {
  return this.m.Oa()
};
s.contains = function(a) {
  return this.m.T(xd(a))
};
s.L = function() {
  return this.m.L()
};
s.D = function() {
  return new wd(this)
};
s.k = function(a) {
  return this.u() == Cb(a) && yd(this, a)
};
function yd(a, b) {
  var c = Cb(b);
  if(a.u() > c) {
    return n
  }
  !(b instanceof wd) && c > 5 && (b = new wd(b));
  return Gb(a, function(a) {
    if(typeof b.contains == "function") {
      a = b.contains(a)
    }else {
      if(typeof b.cc == "function") {
        a = b.cc(a)
      }else {
        if(ga(b) || w(b)) {
          a = $a(b, a)
        }else {
          a: {
            for(var c in b) {
              if(b[c] == a) {
                a = j;
                break a
              }
            }
            a = n
          }
        }
      }
    }
    return a
  })
}
;function zd(a) {
  return Ad(a || arguments.callee.caller, [])
}
function Ad(a, b) {
  var c = [];
  if($a(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(Bd(a) + "(");
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
            g = (g = Bd(g)) ? g : "[fn]";
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
        c.push(Ad(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Bd(a) {
  if(Cd[a]) {
    return Cd[a]
  }
  a = String(a);
  if(!Cd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Cd[a] = b ? b[1] : "[Anonymous]"
  }
  return Cd[a]
}
var Cd = {};
function Dd(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Dd.prototype.Vf = 0;
Dd.prototype.Tc = k;
Dd.prototype.Sc = k;
var Ed = 0;
Dd.prototype.reset = function(a, b, c, d, e) {
  this.Vf = typeof e == "number" ? e : Ed++;
  this.Ye = d || D();
  this.W = a;
  this.De = b;
  this.xe = c;
  delete this.Tc;
  delete this.Sc
};
Dd.prototype.ob = aa("W");
function Fd(a) {
  this.jd = a
}
Fd.prototype.v = k;
Fd.prototype.W = k;
Fd.prototype.pa = k;
Fd.prototype.Fb = k;
function R(a, b) {
  this.name = a;
  this.value = b
}
R.prototype.toString = o("name");
var Gd = new R("SHOUT", 1200), Hd = new R("SEVERE", 1E3), Id = new R("WARNING", 900), Jd = new R("INFO", 800), Kd = new R("CONFIG", 700), Ld = new R("FINE", 500), Md = new R("FINEST", 300), Nd = new R("ALL", 0), Od = [new R("OFF", Infinity), Gd, Hd, Id, Jd, Kd, Ld, new R("FINER", 400), Md, Nd], Pd = k;
function Qd(a) {
  if(!Pd) {
    Pd = {};
    for(var b = 0, c;c = Od[b];b++) {
      Pd[c.value] = c, Pd[c.name] = c
    }
  }
  return Pd[a] || k
}
s = Fd.prototype;
s.getParent = o("v");
s.ob = aa("W");
function Rd(a) {
  if(a.W) {
    return a.W
  }
  if(a.v) {
    return Rd(a.v)
  }
  Ia("Root logger has no level set.");
  return k
}
s.log = function(a, b, c) {
  if(a.value >= Rd(this).value) {
    a = this.zf(a, b, c);
    b = "log:" + a.De;
    t.console && (t.console.timeStamp ? t.console.timeStamp(b) : t.console.markTimeline && t.console.markTimeline(b));
    t.msWriteProfilerMark && t.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.Fb) {
        for(var e = 0, g = i;g = c.Fb[e];e++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
s.zf = function(a, b, c) {
  var d = new Dd(a, String(b), this.jd);
  if(c) {
    d.Tc = c;
    var e;
    var g = arguments.callee.caller;
    try {
      var h;
      var l = ca("window.location.href");
      if(w(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var m, p, A = n;
        try {
          m = c.lineNumber || c.tg || "Not available"
        }catch(q) {
          m = "Not available", A = j
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || l
        }catch(x) {
          p = "Not available", A = j
        }
        h = A || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:m, fileName:p, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + ya(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + ya(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ya(zd(g) + "-> ")
    }catch(C) {
      e = "Exception trying to expose exception! You win, we lose. " + C
    }
    d.Sc = e
  }
  return d
};
function Sd(a, b) {
  a.log(Hd, b, i)
}
function Td(a, b) {
  a.log(Id, b, i)
}
s.info = function(a, b) {
  this.log(Jd, a, b)
};
function S(a, b) {
  a.log(Ld, b, i)
}
function T(a, b) {
  a.log(Md, b, i)
}
var Ud = {}, Vd = k;
function Wd() {
  Vd || (Vd = new Fd(""), Ud[""] = Vd, Vd.ob(Kd))
}
function Yd() {
  Wd();
  return Vd
}
function U(a) {
  Wd();
  var b;
  if(!(b = Ud[a])) {
    b = new Fd(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = U(a.substr(0, c));
    if(!c.pa) {
      c.pa = {}
    }
    c.pa[d] = b;
    b.v = c;
    Ud[a] = b
  }
  return b
}
;U("cw.net.FlashSocket");
U("cw.net.FlashSocketTracker");
function Zd(a) {
  this.qa = a;
  this.Lc = []
}
E(Zd, M);
Zd.prototype.a = U("cw.net.FlashSocketConduit");
Zd.prototype.Jd = function(a) {
  this.Lc ? (T(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Lc.push.apply(this.Lc, a)) : (T(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.yd.Jd(a))
};
Zd.prototype.Od = function(a, b) {
  this.yd.Od(a, b)
};
Zd.prototype.c = function() {
  this.a.info("in disposeInternal.");
  Zd.d.c.call(this);
  this.yd.e();
  delete this.qa
};
function $d() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;var vd = Math.pow(2, 53);
var ae = {hf:r("<cw.eq.Wildcard>")};
function be(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function ce(a, b, c) {
  var d = ea(a), e = ea(b);
  if(a == ae || b == ae) {
    return j
  }else {
    if(a != k && typeof a.k == "function") {
      return c && c.push("running custom equals function on left object"), a.k(b, c)
    }else {
      if(b != k && typeof b.k == "function") {
        return c && c.push("running custom equals function on right object"), b.k(a, c)
      }else {
        if(be(d) || be(e)) {
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
                    c && c.push("array length mismatch: " + a.length + ", " + b.length), a = n
                  }else {
                    d = 0;
                    for(e = a.length;d < e;d++) {
                      if(!ce(a[d], b[d], c)) {
                        c && c.push("earlier comparisons indicate mismatch at array item #" + d);
                        a = n;
                        break a
                      }
                    }
                    c && c.push("ascending from array");
                    a = j
                  }
                }
              }else {
                if(a.gf == Sb && b.gf == Sb) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = n;
                        break a
                      }
                      if(!ce(a[g], b[g], c)) {
                        c && c.push("earlier comparisons indicate mismatch at property " + g);
                        a = n;
                        break a
                      }
                    }
                    for(g in b) {
                      if(!(g in a)) {
                        c && c.push("property " + g + " missing on left object");
                        a = n;
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
;function V(a) {
  F.call(this, a)
}
E(V, F);
V.prototype.name = "cw.net.InvalidFrame";
function W() {
  var a = [];
  this.V(a);
  return a.join("")
}
function de() {
}
de.prototype.k = function(a, b) {
  return!(a instanceof de) ? n : ce(ee(this), ee(a), b)
};
de.prototype.r = function(a, b) {
  a.push("<HelloFrame properties=");
  H(ee(this), a, b);
  a.push(">")
};
function ee(a) {
  return[a.rb, a.Ne, a.me, a.Re, a.Xb, a.Bd, a.Fe, a.Be, a.gd, a.ze, a.cf, a.Xe, a.Z, a.qc]
}
de.prototype.R = W;
de.prototype.V = function(a) {
  var b = {};
  b.tnum = this.rb;
  b.ver = this.Ne;
  b.format = this.me;
  b["new"] = this.Re;
  b.id = this.Xb;
  b.ming = this.Bd;
  b.pad = this.Fe;
  b.maxb = this.Be;
  if(fa(this.gd)) {
    b.maxt = this.gd
  }
  b.maxia = this.ze;
  b.tcpack = this.cf;
  b.eeds = this.Xe;
  b.sack = this.Z instanceof Mb ? rd((new fe(this.Z)).R()) : this.Z;
  b.seenack = this.qc instanceof Mb ? rd((new fe(this.qc)).R()) : this.qc;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new wb(i)).Tb(b), "H")
};
function ge(a) {
  this.qb = a
}
ge.prototype.k = function(a) {
  return a instanceof ge && this.qb == a.qb
};
ge.prototype.r = function(a, b) {
  a.push("new StringFrame(");
  H(this.qb, a, b);
  a.push(")")
};
ge.prototype.R = W;
ge.prototype.V = function(a) {
  a.push(this.qb, " ")
};
function he(a) {
  this.bc = a
}
he.prototype.k = function(a) {
  return a instanceof he && this.bc == a.bc
};
he.prototype.r = function(a, b) {
  a.push("new CommentFrame(");
  H(this.bc, a, b);
  a.push(")")
};
he.prototype.R = W;
he.prototype.V = function(a) {
  a.push(this.bc, "^")
};
function ie(a) {
  this.Sb = a
}
ie.prototype.k = function(a) {
  return a instanceof ie && this.Sb == a.Sb
};
ie.prototype.r = function(a) {
  a.push("new SeqNumFrame(", String(this.Sb), ")")
};
ie.prototype.R = W;
ie.prototype.V = function(a) {
  a.push(String(this.Sb), "N")
};
function je(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return k
  }
  a: {
    var c = b[1], a = vd;
    if(td.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
      var g = ud(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Mb(a, c)
}
function fe(a) {
  this.Z = a
}
fe.prototype.k = function(a, b) {
  return a instanceof fe && this.Z.k(a.Z, b)
};
fe.prototype.r = function(a, b) {
  a.push("new SackFrame(");
  H(this.Z, a, b);
  a.push(")")
};
fe.prototype.R = W;
fe.prototype.V = function(a) {
  var b = this.Z;
  a.push(b.Ra.join(","), "|", String(b.Va));
  a.push("A")
};
function ke(a) {
  this.Ib = a
}
ke.prototype.k = function(a, b) {
  return a instanceof ke && this.Ib.k(a.Ib, b)
};
ke.prototype.r = function(a, b) {
  a.push("new StreamStatusFrame(");
  H(this.Ib, a, b);
  a.push(")")
};
ke.prototype.R = W;
ke.prototype.V = function(a) {
  var b = this.Ib;
  a.push(b.Ra.join(","), "|", String(b.Va));
  a.push("T")
};
function le() {
}
le.prototype.r = function(a) {
  a.push("new StreamCreatedFrame()")
};
le.prototype.k = function(a) {
  return a instanceof le
};
le.prototype.R = W;
le.prototype.V = function(a) {
  a.push("C")
};
function me() {
}
me.prototype.r = function(a) {
  a.push("new YouCloseItFrame()")
};
me.prototype.k = function(a) {
  return a instanceof me
};
me.prototype.R = W;
me.prototype.V = function(a) {
  a.push("Y")
};
function ne(a, b) {
  this.Nb = a;
  this.ub = b
}
ne.prototype.k = function(a) {
  return a instanceof ne && this.Nb == a.Nb && this.ub == a.ub
};
ne.prototype.r = function(a, b) {
  a.push("new ResetFrame(");
  H(this.Nb, a, b);
  a.push(", ", String(this.ub), ")")
};
ne.prototype.R = W;
ne.prototype.V = function(a) {
  a.push(this.Nb, "|", String(Number(this.ub)), "!")
};
var oe = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function pe(a) {
  this.reason = a
}
pe.prototype.k = function(a) {
  return a instanceof pe && this.reason == a.reason
};
pe.prototype.r = function(a, b) {
  a.push("new TransportKillFrame(");
  H(this.reason, a, b);
  a.push(")")
};
pe.prototype.R = W;
pe.prototype.V = function(a) {
  a.push(this.reason, "K")
};
function qe(a) {
  a || f(new V("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new ge(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = je(rd(a)), a == k && f(new V("bad sack")), new fe(a)
    }else {
      if(b == "N") {
        return a = ud(rd(a)), a == k && f(new V("bad seqNum")), new ie(a)
      }else {
        if(b == "T") {
          return a = je(rd(a)), a == k && f(new V("bad lastSackSeen")), new ke(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && f(new V("leading garbage")), new me
          }else {
            if(b == "^") {
              return new he(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && f(new V("leading garbage")), new le
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && f(new V("bad reasonString")), a = {"|0":n, "|1":j}[a.substr(a.length - 3, 2)], a == k && f(new V("bad applicationLevel")), new ne(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = oe[a], a == k && f(new V("unknown kill reason: " + a)), new pe(a)
                  }else {
                    f(new V("Invalid frame type " + b))
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
;var re = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function se(a, b) {
  var c = a.match(re), d = b.match(re);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function te(a, b) {
  var c;
  a instanceof te ? (this.nb(b == k ? a.ea : b), ue(this, a.$), ve(this, a.Ta), we(this, a.ca), xe(this, a.za), ye(this, a.S), ze(this, a.M.D()), Ae(this, a.Ja)) : a && (c = String(a).match(re)) ? (this.nb(!!b), ue(this, c[1] || "", j), ve(this, c[2] || "", j), we(this, c[3] || "", j), xe(this, c[4]), ye(this, c[5] || "", j), ze(this, c[6] || "", j), Ae(this, c[7] || "", j)) : (this.nb(!!b), this.M = new Be(k, this, this.ea))
}
s = te.prototype;
s.$ = "";
s.Ta = "";
s.ca = "";
s.za = k;
s.S = "";
s.Ja = "";
s.Hf = n;
s.ea = n;
s.toString = function() {
  if(this.aa) {
    return this.aa
  }
  var a = [];
  this.$ && a.push(Ce(this.$, De), ":");
  this.ca && (a.push("//"), this.Ta && a.push(Ce(this.Ta, De), "@"), a.push(w(this.ca) ? encodeURIComponent(this.ca) : k), this.za != k && a.push(":", String(this.za)));
  this.S && (this.ca && this.S.charAt(0) != "/" && a.push("/"), a.push(Ce(this.S, this.S.charAt(0) == "/" ? Ee : Fe)));
  var b = String(this.M);
  b && a.push("?", b);
  this.Ja && a.push("#", Ce(this.Ja, Ge));
  return this.aa = a.join("")
};
s.D = function() {
  var a = this.$, b = this.Ta, c = this.ca, d = this.za, e = this.S, g = this.M.D(), h = this.Ja, l = new te(k, this.ea);
  a && ue(l, a);
  b && ve(l, b);
  c && we(l, c);
  d && xe(l, d);
  e && ye(l, e);
  g && ze(l, g);
  h && Ae(l, h);
  return l
};
function ue(a, b, c) {
  He(a);
  delete a.aa;
  a.$ = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.$) {
    a.$ = a.$.replace(/:$/, "")
  }
}
function ve(a, b, c) {
  He(a);
  delete a.aa;
  a.Ta = c ? b ? decodeURIComponent(b) : "" : b
}
function we(a, b, c) {
  He(a);
  delete a.aa;
  a.ca = c ? b ? decodeURIComponent(b) : "" : b
}
function xe(a, b) {
  He(a);
  delete a.aa;
  b ? (b = Number(b), (isNaN(b) || b < 0) && f(Error("Bad port number " + b)), a.za = b) : a.za = k
}
function ye(a, b, c) {
  He(a);
  delete a.aa;
  a.S = c ? b ? decodeURIComponent(b) : "" : b
}
function ze(a, b, c) {
  He(a);
  delete a.aa;
  b instanceof Be ? (a.M = b, a.M.Fd = a, a.M.nb(a.ea)) : (c || (b = Ce(b, Ie)), a.M = new Be(b, a, a.ea))
}
function Ae(a, b, c) {
  He(a);
  delete a.aa;
  a.Ja = c ? b ? decodeURIComponent(b) : "" : b
}
function He(a) {
  a.Hf && f(Error("Tried to modify a read-only Uri"))
}
s.nb = function(a) {
  this.ea = a;
  this.M && this.M.nb(a);
  return this
};
function Je(a) {
  return a instanceof te ? a.D() : new te(a, i)
}
var Ke = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Ce(a, b) {
  var c = k;
  w(a) && (c = a, Ke.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, Le)));
  return c
}
function Le(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var De = /[#\/\?@]/g, Fe = /[\#\?:]/g, Ee = /[\#\?]/g, Ie = /[\#\?@]/g, Ge = /#/g;
function Be(a, b, c) {
  this.ha = a || k;
  this.Fd = b || k;
  this.ea = !!c
}
function Me(a) {
  if(!a.l && (a.l = new J, a.f = 0, a.ha)) {
    for(var b = a.ha.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, g = k;
      d >= 0 ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = Ne(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
s = Be.prototype;
s.l = k;
s.f = k;
s.u = function() {
  Me(this);
  return this.f
};
s.add = function(a, b) {
  Me(this);
  Oe(this);
  a = Ne(this, a);
  if(this.T(a)) {
    var c = this.l.get(a);
    v(c) ? c.push(b) : this.l.set(a, [c, b])
  }else {
    this.l.set(a, b)
  }
  this.f++;
  return this
};
s.remove = function(a) {
  Me(this);
  a = Ne(this, a);
  if(this.l.T(a)) {
    Oe(this);
    var b = this.l.get(a);
    v(b) ? this.f -= b.length : this.f--;
    return this.l.remove(a)
  }
  return n
};
s.clear = function() {
  Oe(this);
  this.l && this.l.clear();
  this.f = 0
};
s.Oa = function() {
  Me(this);
  return this.f == 0
};
s.T = function(a) {
  Me(this);
  a = Ne(this, a);
  return this.l.T(a)
};
s.cc = function(a) {
  var b = this.L();
  return $a(b, a)
};
s.ua = function() {
  Me(this);
  for(var a = this.l.L(), b = this.l.ua(), c = [], d = 0;d < b.length;d++) {
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
s.L = function(a) {
  Me(this);
  if(a) {
    if(a = Ne(this, a), this.T(a)) {
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
    for(var b = this.l.L(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      v(d) ? db(a, d) : a.push(d)
    }
  }
  return a
};
s.set = function(a, b) {
  Me(this);
  Oe(this);
  a = Ne(this, a);
  if(this.T(a)) {
    var c = this.l.get(a);
    v(c) ? this.f -= c.length : this.f--
  }
  this.l.set(a, b);
  this.f++;
  return this
};
s.get = function(a, b) {
  Me(this);
  a = Ne(this, a);
  if(this.T(a)) {
    var c = this.l.get(a);
    return v(c) ? c[0] : c
  }else {
    return b
  }
};
s.toString = function() {
  if(this.ha) {
    return this.ha
  }
  if(!this.l) {
    return""
  }
  for(var a = [], b = 0, c = this.l.ua(), d = 0;d < c.length;d++) {
    var e = c[d], g = wa(e), e = this.l.get(e);
    if(v(e)) {
      for(var h = 0;h < e.length;h++) {
        b > 0 && a.push("&"), a.push(g), e[h] !== "" && a.push("=", wa(e[h])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(g), e !== "" && a.push("=", wa(e)), b++
    }
  }
  return this.ha = a.join("")
};
function Oe(a) {
  delete a.Ya;
  delete a.ha;
  a.Fd && delete a.Fd.aa
}
s.D = function() {
  var a = new Be;
  if(this.Ya) {
    a.Ya = this.Ya
  }
  if(this.ha) {
    a.ha = this.ha
  }
  if(this.l) {
    a.l = this.l.D()
  }
  return a
};
function Ne(a, b) {
  var c = String(b);
  a.ea && (c = c.toLowerCase());
  return c
}
s.nb = function(a) {
  a && !this.ea && (Me(this), Oe(this), Fb(this.l, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.ea = a
};
s.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Fb(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
var Pe;
function Qe(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function Re(a, b) {
  var c = Qe(a), d = fb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    $a(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function Se(a, b) {
  var c = Qe(a), d = fb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < e.length;h++) {
    $a(d, e[h]) && (eb(e, h--, 1), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
;function Te(a, b) {
  this.width = a;
  this.height = b
}
s = Te.prototype;
s.D = function() {
  return new Te(this.width, this.height)
};
s.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
s.Oa = function() {
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
var Ue = !K || pc();
!bc && !K || K && pc() || bc && nc("1.9.1");
var Ve = K && !nc("9");
function We(a, b) {
  this.x = fa(a) ? a : 0;
  this.y = fa(b) ? b : 0
}
We.prototype.D = function() {
  return new We(this.x, this.y)
};
We.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function Xe(a) {
  return a ? new Ye(Ze(a)) : Pe || (Pe = new Ye)
}
function X(a) {
  return w(a) ? document.getElementById(a) : a
}
function $e(a, b) {
  Qa(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in af ? a.setAttribute(af[d], b) : d.lastIndexOf("aria-", 0) == 0 ? a.setAttribute(d, b) : a[d] = b
  })
}
var af = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function bf() {
  var a = cf.Q.parentWindow || cf.Q.defaultView || window, b = a.document;
  if(L && !nc("500") && !cc) {
    typeof a.innerHeight == "undefined" && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new Te(a.innerWidth, b)
  }
  a = b.compatMode == "CSS1Compat" ? b.documentElement : b.body;
  return new Te(a.clientWidth, a.clientHeight)
}
function df(a, b, c) {
  return ef(document, arguments)
}
function ef(a, b) {
  var c = b[0], d = b[1];
  if(!Ue && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', ya(d.name), '"');
    if(d.type) {
      c.push(' type="', ya(d.type), '"');
      var e = {};
      Ua(e, d);
      d = e;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  if(d) {
    w(d) ? c.className = d : v(d) ? Re.apply(k, [c].concat(d)) : $e(c, d)
  }
  b.length > 2 && ff(a, c, b, 2);
  return c
}
function ff(a, b, c, d) {
  function e(c) {
    c && b.appendChild(w(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && g.nodeType > 0) ? Wa(gf(g) ? cb(g) : g, e) : e(g)
  }
}
function hf(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function jf(a, b) {
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
function Ze(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
var kf = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, lf = {IMG:" ", BR:"\n"};
function mf(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, typeof a == "number" && a >= 0 && a < 32768) : n
}
function nf(a) {
  var b = [];
  of(a, b, n);
  return b.join("")
}
function of(a, b, c) {
  if(!(a.nodeName in kf)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in lf) {
        b.push(lf[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          of(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function gf(a) {
  if(a && typeof a.length == "number") {
    if(ia(a)) {
      return typeof a.item == "function" || typeof a.item == "string"
    }else {
      if(y(a)) {
        return typeof a.item == "function"
      }
    }
  }
  return n
}
function Ye(a) {
  this.Q = a || t.document || document
}
s = Ye.prototype;
s.Cb = Xe;
s.h = function(a) {
  return w(a) ? this.Q.getElementById(a) : a
};
s.s = function(a, b, c) {
  return ef(this.Q, arguments)
};
s.createElement = function(a) {
  return this.Q.createElement(a)
};
s.createTextNode = function(a) {
  return this.Q.createTextNode(a)
};
s.appendChild = function(a, b) {
  a.appendChild(b)
};
s.append = function(a, b) {
  ff(Ze(a), a, arguments, 1)
};
s.contains = jf;
function pf(a, b, c, d) {
  this.contentWindow = a;
  this.ec = b;
  this.Cd = c;
  this.yf = d
}
pf.prototype.r = function(a, b) {
  a.push("<XDRFrame frameId=");
  H(this.yf, a, b);
  a.push(", expandedUrl=");
  H(this.ec, a, b);
  a.push(", streams=");
  H(this.Cd, a, b);
  a.push(">")
};
function qf() {
  this.frames = [];
  this.ed = new J
}
qf.prototype.a = U("cw.net.XDRTracker");
function rf(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + String(Math.floor($d())) + String(Math.floor($d()))
  })
}
function sf(a, b) {
  for(var c = tf, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = e.Cd.length == 0) {
      g = e.ec;
      var h = String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + I(b) + " existing frame " + I(e)), nd(e)
    }
  }
  d = qd() + qd();
  e = rf(a);
  g = t.location;
  g instanceof te || (g = Je(g));
  e instanceof te || (e = Je(e));
  var l = g;
  g = l.D();
  (h = !!e.$) ? ue(g, e.$) : h = !!e.Ta;
  h ? ve(g, e.Ta) : h = !!e.ca;
  h ? we(g, e.ca) : h = e.za != k;
  var m = e.S;
  if(h) {
    xe(g, e.za)
  }else {
    if(h = !!e.S) {
      if(m.charAt(0) != "/" && (l.ca && !l.S ? m = "/" + m : (l = g.S.lastIndexOf("/"), l != -1 && (m = g.S.substr(0, l + 1) + m))), m == ".." || m == ".") {
        m = ""
      }else {
        if(!(m.indexOf("./") == -1 && m.indexOf("/.") == -1)) {
          for(var l = m.lastIndexOf("/", 0) == 0, m = m.split("/"), p = [], A = 0;A < m.length;) {
            var q = m[A++];
            q == "." ? l && A == m.length && p.push("") : q == ".." ? ((p.length > 1 || p.length == 1 && p[0] != "") && p.pop(), l && A == m.length && p.push("")) : (p.push(q), l = j)
          }
          m = p.join("/")
        }
      }
    }
  }
  h ? ye(g, m) : h = e.M.toString() !== "";
  if(h) {
    l = e.M;
    if(!l.Ya) {
      l.Ya = l.toString() ? decodeURIComponent(l.toString()) : ""
    }
    ze(g, l.Ya, i)
  }else {
    h = !!e.Ja
  }
  h && Ae(g, e.Ja);
  e = g.toString();
  g = String(t.location).match(re)[3] || k;
  h = e.match(re)[3] || k;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + I(b)), c = nd(new pf(t, e, [b], k))) : (g = X("minerva-elements"), h = new ed, c.ed.set(d, [h, e, b]), c.a.info("Creating new XDRFrame " + I(d) + "for " + I(b)), c = df("iframe", {id:"minerva-xdrframe-" + d, style:"visibility: hidden; height: 0; width: 0; border: 0; margin: 0;", src:e + "xdrframe/?domain=" + document.domain + "&id=" + d}), g.appendChild(c), c = h);
  return c
}
qf.prototype.mg = function(a) {
  var b = this.ed.get(a);
  b || f(Error("Unknown frameId " + I(a)));
  this.ed.remove(b);
  var c = b[0], a = new pf(X("minerva-xdrframe-" + a).contentWindow || (L ? X("minerva-xdrframe-" + a).document || X("minerva-xdrframe-" + a).contentWindow.document : X("minerva-xdrframe-" + a).contentDocument || X("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (L ? X("minerva-xdrframe-" + a).document || X("minerva-xdrframe-" + a).contentWindow.document : X("minerva-xdrframe-" + a).contentDocument || X("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.oa(a)
};
var tf = new qf;
t.__XHRTracker_xdrFrameLoaded = B(tf.mg, tf);
var uf;
uf = n;
var vf = Yb();
vf && (vf.indexOf("Firefox") != -1 || vf.indexOf("Camino") != -1 || vf.indexOf("iPhone") != -1 || vf.indexOf("iPod") != -1 || vf.indexOf("iPad") != -1 || vf.indexOf("Android") != -1 || vf.indexOf("Chrome") != -1 && (uf = j));
var wf = uf;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function xf(a, b, c, d, e, g) {
  ed.call(this, e, g);
  this.we = a;
  this.Oc = [];
  this.$d = !!b;
  this.wf = !!c;
  this.of = !!d;
  for(b = 0;b < a.length;b++) {
    ld(a[b], B(this.ee, this, b, j), B(this.ee, this, b, n))
  }
  a.length == 0 && !this.$d && this.oa(this.Oc)
}
E(xf, ed);
xf.prototype.He = 0;
xf.prototype.ee = function(a, b, c) {
  this.He++;
  this.Oc[a] = [b, c];
  this.sa || (this.$d && b ? this.oa([a, c]) : this.wf && !b ? this.dc(c) : this.He == this.we.length && this.oa(this.Oc));
  this.of && !b && (c = k);
  return c
};
xf.prototype.dc = function(a) {
  xf.d.dc.call(this, a);
  Wa(this.we, function(a) {
    a.cancel()
  })
};
function yf(a) {
  a = new xf(a, n, j);
  kd(a, function(a) {
    return Xa(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function zf(a, b) {
  this.lg = a;
  this.Ae = b
}
zf.prototype.bd = 0;
zf.prototype.sc = 0;
zf.prototype.Uc = n;
function Af(a) {
  var b = [];
  if(a.Uc) {
    return[b, 2]
  }
  var c = a.bd, d = a.lg.responseText;
  for(a.bd = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var e = d.substr(a.sc, c - a.sc), e = e.replace(/\r$/, "");
    if(e.length > a.Ae) {
      return a.Uc = j, [b, 2]
    }
    b.push(e);
    a.sc = c += 1
  }
  return a.bd - a.sc - 1 > a.Ae ? (a.Uc = j, [b, 2]) : [b, 1]
}
;function Bf(a, b, c) {
  this.qa = b;
  this.Y = a;
  this.Nc = c
}
E(Bf, M);
s = Bf.prototype;
s.a = U("cw.net.XHRMaster");
s.Ca = -1;
s.fd = function(a, b, c) {
  this.Nc.__XHRSlave_makeRequest(this.Y, a, b, c)
};
s.va = o("Ca");
s.ld = function(a, b) {
  b != 1 && Sd(this.a, I(this.Y) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Cf(this.qa);
  a: {
    var c = this.qa;
    c.Ac = j;
    try {
      for(var d = n, e = [], g = 0, h = a.length;g < h;g++) {
        if(c.ba) {
          c.a.info(c.q() + " returning from loop because we're disposed.");
          break a
        }
        if(d = Df(c, a[g], e)) {
          break
        }
      }
      e.length && Ef(c, e);
      c.Ac = n;
      c.A.length && c.ja();
      d && (T(c.a, c.q() + " closeSoon is true.  Frames were: " + I(a)), c.e())
    }finally {
      c.Ac = n
    }
  }
};
s.md = function(a) {
  S(this.a, "ongotheaders_: " + I(a));
  var b = k;
  "Content-Length" in a && (b = ud(a["Content-Length"]));
  a = this.qa;
  S(a.a, a.q() + " got Content-Length: " + b);
  a.fa == Ff && (b == k && (Td(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Gf(a, 2E3 + b / 3072 * 1E3))
};
s.nd = function(a) {
  a != 1 && S(this.a, this.qa.q() + "'s XHR's readyState is " + a);
  this.Ca = a;
  this.Ca >= 2 && Cf(this.qa)
};
s.kd = function() {
  this.qa.e()
};
s.c = function() {
  Bf.d.c.call(this);
  delete Hf.ka[this.Y];
  this.Nc.__XHRSlave_dispose(this.Y);
  delete this.Nc
};
function If() {
  this.ka = {}
}
E(If, M);
s = If.prototype;
s.a = U("cw.net.XHRMasterTracker");
s.Sd = function(a, b) {
  var c = "_" + qd(), d = new Bf(c, a, b);
  return this.ka[c] = d
};
s.ld = function(a, b, c) {
  var b = bb(b), d = this.ka[a];
  d ? d.ld(b, c) : Sd(this.a, "onframes_: no master for " + I(a))
};
s.md = function(a, b) {
  var c = this.ka[a];
  c ? c.md(b) : Sd(this.a, "ongotheaders_: no master for " + I(a))
};
s.nd = function(a, b) {
  var c = this.ka[a];
  c ? c.nd(b) : Sd(this.a, "onreadystatechange_: no master for " + I(a))
};
s.kd = function(a) {
  var b = this.ka[a];
  b ? (delete this.ka[b.Y], b.kd()) : Sd(this.a, "oncomplete_: no master for " + I(a))
};
s.c = function() {
  If.d.c.call(this);
  for(var a = Ra(this.ka);a.length;) {
    a.pop().e()
  }
  delete this.ka
};
var Hf = new If;
t.__XHRMaster_onframes = B(Hf.ld, Hf);
t.__XHRMaster_oncomplete = B(Hf.kd, Hf);
t.__XHRMaster_ongotheaders = B(Hf.md, Hf);
t.__XHRMaster_onreadystatechange = B(Hf.nd, Hf);
function Jf(a, b) {
  b || (b = a);
  this.Aa = a;
  this.Da = b
}
Jf.prototype.r = function(a, b) {
  a.push("<HttpEndpoint primaryUrl=");
  H(this.Aa, a, b);
  a.push(", secondaryUrl=");
  H(this.Da, a, b);
  a.push(">")
};
function Kf(a, b, c, d) {
  this.Aa = a;
  this.Me = b;
  this.Da = c;
  this.Ve = d;
  (!(this.Aa.indexOf("http://") == 0 || this.Aa.indexOf("https://") == 0) || !(this.Da.indexOf("http://") == 0 || this.Da.indexOf("https://") == 0)) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Me.location.href;
  se(this.Aa, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Ve.location.href;
  se(this.Da, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
Kf.prototype.r = function(a, b) {
  a.push("<ExpandedHttpEndpoint_ primaryUrl=");
  H(this.Aa, a, b);
  a.push(", secondaryUrl=");
  H(this.Da, a, b);
  a.push(">")
};
var Lf = new he(";)]}");
function Mf() {
}
Mf.prototype.be = r(1);
function Nf(a) {
  this.bg = a
}
Nf.prototype.r = function(a, b) {
  a.push("<UserContext for ");
  H(this.bg, a, b);
  a.push(">")
};
function Of(a, b, c) {
  this.K = a;
  this.cg = b ? b : new Mf;
  this.F = c ? c : pd;
  this.Yb = new wd;
  this.Xb = qd() + qd();
  this.Ba = new Nb;
  this.$c = new Pb;
  this.Zb = k;
  this.Ec = [];
  this.sb = new Nf(this);
  if(L) {
    this.Zb = Vc(t, "load", this.Tf, n, this)
  }
}
E(Of, M);
s = Of.prototype;
s.a = U("cw.net.ClientStream");
s.ue = new Mb(-1, []);
s.ve = new Mb(-1, []);
s.Kf = 50;
s.Jf = 1048576;
s.od = k;
s.onreset = k;
s.Je = k;
s.zd = n;
s.sd = n;
s.b = 1;
s.af = -1;
s.i = k;
s.z = k;
s.Ob = k;
s.Ad = 0;
s.Le = 0;
s.Ue = 0;
s.r = function(a, b) {
  a.push("<ClientStream id=");
  H(this.Xb, a, b);
  a.push(", state=", String(this.b));
  a.push(", primary=");
  H(this.i, a, b);
  a.push(", secondary=");
  H(this.z, a, b);
  a.push(", resetting=");
  H(this.Ob, a, b);
  a.push(">")
};
function Pf(a) {
  var b = [-1];
  a.i && b.push(a.i.kb);
  a.z && b.push(a.z.kb);
  return Math.max.apply(Math.max, b)
}
function Qf(a) {
  if(a.b != 1) {
    var b = a.Ba.H.u() != 0, c = Qb(a.$c), d = !c.k(a.ve) && !(a.i && c.k(a.i.ib) || a.z && c.k(a.z.ib)), e = Pf(a);
    if((b = b && e < a.Ba.Xa) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.i.vb) {
        T(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.i, c != d.ib)) {
          !d.la && !d.A.length && Rf(d), d.A.push(new fe(c)), d.ib = c
        }
        b && Sf(a.i, a.Ba, e + 1);
        a.i.ja()
      }else {
        a.z == k ? a.zd ? (T(a.a, "tryToSend_: creating secondary to send " + g), a.z = Tf(a, n), b && Sf(a.z, a.Ba, e + 1), a.z.ja()) : (T(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.sd = j) : T(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
s.Tf = function() {
  this.Zb = k;
  if(this.i && this.i.eb()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.i;
    a.Hc = j;
    a.e()
  }
  if(this.z && this.z.eb()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.z, a.Hc = j, a.e()
  }
};
function Vf(a, b) {
  var c;
  fa(c) || (c = j);
  a.b > 3 && f(Error("sendStrings: Can't send strings in state " + a.b));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || f(Error("sendStrings: string #" + c + " has illegal chars: " + I(d)))
      }
    }
    a.Ba.extend(b);
    Qf(a)
  }
}
function Tf(a, b) {
  var c;
  a.K instanceof Kf ? c = a.cg.be() == 1 ? Ff : Wf : n ? c = Xf : f(Error("Don't support endpoint " + I(a.K)));
  a.af += 1;
  c = new Yf(a.F, a, a.af, c, a.K, b);
  T(a.a, "Created: " + c.q());
  a.Yb.add(c);
  return c
}
function Zf(a, b, c) {
  var d = new $f(a.F, a, b, c);
  T(a.a, "Created: " + d.q() + ", delay=" + b + ", times=" + c);
  a.Yb.add(d);
  return d
}
function ag(a, b) {
  a.Yb.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  S(a.a, "Offline: " + b.q());
  b.uc ? a.Ad += b.uc : a.Ad = 0;
  a.Ad >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.sb, "stream penalty reached limit", n), a.e());
  if(a.b > 3) {
    a.b == 4 && b.ff ? (S(a.a, "Disposing because resettingTransport_ is done."), a.e()) : S(a.a, "Not creating a transport because ClientStream is in state " + a.b)
  }else {
    var c;
    var d;
    c = b instanceof $f;
    if(!c && b.Hc) {
      var e = L ? wf ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      T(a.a, "getDelayForNextTransport_: " + I({delay:c, times:d}))
    }else {
      d = b.Pd();
      if(b == a.i) {
        if(d) {
          e = ++a.Le
        }else {
          if(!c) {
            e = a.Le = 0
          }
        }
      }else {
        if(d) {
          e = ++a.Ue
        }else {
          if(!c) {
            e = a.Ue = 0
          }
        }
      }
      if(c || !e) {
        d = c = 0, T(a.a, "getDelayForNextTransport_: " + I({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(Math.random() * 4E3) - 2E3, l = Math.max(0, b.bf - b.Dd);
        d = (c = Math.max(0, g + h - l)) ? 1 : 0;
        T(a.a, "getDelayForNextTransport_: " + I({count:e, base:g, variance:h, oldDuration:l, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    if(b == a.i) {
      a.i = k, c ? a.i = Zf(a, e, c) : (e = Pf(a), a.i = Tf(a, j), Sf(a.i, a.Ba, e + 1)), a.i.ja()
    }else {
      if(b == a.z) {
        a.z = k, c ? (a.z = Zf(a, e, c), a.z.ja()) : Qf(a)
      }
    }
  }
}
s.reset = function(a) {
  this.b > 3 && f(Error("reset: Can't send reset in state " + this.b));
  this.b = 4;
  this.i && this.i.vb ? (this.a.info("reset: Sending ResetFrame over existing primary."), bg(this.i, a), this.i.ja()) : (this.i && (S(this.a, "reset: Disposing primary before sending ResetFrame."), this.i.e()), this.z && (S(this.a, "reset: Disposing secondary before sending ResetFrame."), this.z.e()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Ob = Tf(this, n), bg(this.Ob, a), this.Ob.ja());
  this.onreset && this.onreset.call(this.sb, a, j)
};
function cg(a, b, c, d) {
  var e;
  e = a.$c;
  for(var g = a.Kf, h = a.Jf, l = [], m = n, p = 0, A = c.length;p < A;p++) {
    var q = c[p], x = q[0], q = q[1];
    if(x == e.hb + 1) {
      e.hb += 1;
      for(l.push(q);;) {
        x = e.hb + 1;
        q = e.Fa.get(x, Rb);
        if(q === Rb) {
          break
        }
        l.push(q[0]);
        e.Fa.remove(x);
        e.Ea -= q[1];
        e.hb = x
      }
    }else {
      if(!(x <= e.hb)) {
        if(g != k && e.Fa.u() >= g) {
          m = j;
          break
        }
        var C = Lb(q);
        if(h != k && e.Ea + C > h) {
          m = j;
          break
        }
        e.Fa.set(x, [q, C]);
        e.Ea += C
      }
    }
  }
  e.Fa.Oa() && e.Fa.clear();
  e = [l, m];
  c = e[0];
  e = e[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(h = c[g], a.od && a.od.call(a.sb, h), a.b == 4 || a.ba) {
        return
      }
    }
  }
  d || Qf(a);
  if(!(a.b == 4 || a.ba) && e) {
    Sd(b.a, b.q() + "'s peer caused rwin overflow."), b.e()
  }
}
s.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  this.b != 1 && f(Error("ClientStream.start: " + I(this) + " already started"));
  this.b = 2;
  if(this.K instanceof Jf) {
    var a = sf(this.K.Aa, this), b = sf(this.K.Da, this);
    kd(yf([a, b]), B(this.uf, this))
  }else {
    dg(this)
  }
};
s.uf = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].ec, e = a[1].ec;
  this.Ec.push(a[0]);
  this.Ec.push(a[1]);
  this.K = new Kf(d, b, e, c);
  dg(this)
};
function dg(a) {
  a.b = 3;
  a.i = Tf(a, j);
  Sf(a.i, a.Ba, k);
  a.i.ja()
}
s.c = function() {
  this.a.info(I(this) + " in disposeInternal.");
  this.b = 5;
  for(var a = this.Yb.L(), b = 0;b < a.length;b++) {
    a[b].e()
  }
  for(a = 0;a < this.Ec.length;a++) {
    ab(this.Ec[a].Cd, this)
  }
  if(L && this.Zb) {
    Q(this.Zb), this.Zb = k
  }
  this.Je && this.Je.call(this.sb);
  delete this.Yb;
  delete this.i;
  delete this.z;
  delete this.Ob;
  delete this.sb;
  Of.d.c.call(this)
};
var Ff = 1, Wf = 2, Xf = 3;
function Yf(a, b, c, d, e, g) {
  this.F = a;
  this.B = b;
  this.rb = c;
  this.fa = d;
  this.K = e;
  this.A = [];
  this.Wa = g;
  this.vb = !this.eb();
  this.mb = this.fa != Ff;
  this.kf = B(this.fg, this)
}
E(Yf, M);
s = Yf.prototype;
s.a = U("cw.net.ClientTransport");
s.o = k;
s.Dd = k;
s.bf = k;
s.vc = k;
s.la = n;
s.Ac = n;
s.ib = k;
s.Vc = 0;
s.kb = -1;
s.pd = -1;
s.ff = n;
s.Hc = n;
s.uc = 0;
s.Eb = n;
s.r = function(a) {
  a.push("<ClientTransport #", String(this.rb), ", becomePrimary=", String(this.Wa), ">")
};
s.q = function() {
  return(this.Wa ? "Prim. T#" : "Sec. T#") + this.rb
};
s.Pd = function() {
  return!(!this.Eb && this.Vc)
};
s.eb = function() {
  return this.fa == Ff || this.fa == Wf
};
function Ef(a, b) {
  gb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  cg(a.B, a, b, !a.mb)
}
function Df(a, b, c) {
  try {
    var d = qe(b);
    a.Vc += 1;
    S(a.a, a.q() + " RECV " + I(d));
    var e;
    a.Vc == 1 && !d.k(Lf) && a.eb() ? (Td(a.a, a.q() + " is closing soon because got bad preamble: " + I(d)), e = j) : e = n;
    if(e) {
      return j
    }
    if(d instanceof ge) {
      if(!/^([ -~]*)$/.test(d.qb)) {
        return a.Eb = j
      }
      a.pd += 1;
      c.push([a.pd, d.qb])
    }else {
      if(d instanceof fe) {
        var g = a.B, h = d.Z;
        g.ue = h;
        var l = g.Ba, m = h.Va, c = n;
        m > l.Xa && (c = j);
        for(var p = Ob(l).concat(), d = 0;d < p.length;d++) {
          var A = p[d];
          if(A > m) {
            break
          }
          var q = l.H.m[A][1];
          l.H.remove(A);
          l.Ea -= q
        }
        for(d = 0;d < h.Ra.length;d++) {
          var x = h.Ra[d];
          x > l.Xa && (c = j);
          l.H.T(x) && (q = l.H.m[x][1], l.H.remove(x), l.Ea -= q)
        }
        l.H.Oa() && l.H.clear();
        if(c) {
          return Td(a.a, a.q() + " is closing soon because got bad SackFrame"), a.Eb = j
        }
      }else {
        if(d instanceof ie) {
          a.pd = d.Sb - 1
        }else {
          if(d instanceof ke) {
            a.B.ve = d.Ib
          }else {
            if(d instanceof me) {
              return T(a.a, a.q() + " is closing soon because got YouCloseItFrame"), j
            }else {
              if(d instanceof pe) {
                return a.Eb = j, d.reason == "stream_attach_failure" ? a.uc += 1 : d.reason == "acked_unsent_strings" && (a.uc += 0.5), T(a.a, a.q() + " is closing soon because got " + I(d)), j
              }else {
                if(!(d instanceof he)) {
                  if(d instanceof le) {
                    var C = a.B, Qh = !a.mb;
                    T(C.a, "Stream is now confirmed to exist at server.");
                    C.zd = j;
                    if(C.sd && !Qh) {
                      C.sd = n, Qf(C)
                    }
                  }else {
                    if(c.length) {
                      Ef(a, c);
                      if(!v(c)) {
                        for(var Xd = c.length - 1;Xd >= 0;Xd--) {
                          delete c[Xd]
                        }
                      }
                      c.length = 0
                    }
                    if(d instanceof ne) {
                      var zc = a.B;
                      zc.onreset && zc.onreset.call(zc.sb, d.Nb, d.ub);
                      zc.e();
                      return j
                    }else {
                      f(Error(a.q() + " had unexpected state in framesReceived_."))
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }catch(Uf) {
    return Uf instanceof V || f(Uf), Td(a.a, a.q() + " is closing soon because got InvalidFrame: " + I(b)), a.Eb = j
  }
  return n
}
s.fg = function() {
  Td(this.a, this.q() + " timed out due to lack of connection or no data being received.");
  this.e()
};
function eg(a) {
  if(a.vc != k) {
    a.F.I.clearTimeout(a.vc), a.vc = k
  }
}
function Gf(a, b) {
  eg(a);
  b = Math.round(b);
  a.vc = a.F.I.setTimeout(a.kf, b);
  S(a.a, a.q() + "'s receive timeout set to " + b + " ms.")
}
function Cf(a) {
  a.fa != Ff && (a.fa == Xf || a.fa == Wf ? Gf(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.fa)))
}
function Rf(a) {
  var b = new de;
  b.rb = a.rb;
  b.Ne = 2;
  b.me = 2;
  if(!a.B.zd) {
    b.Re = j
  }
  b.Xb = a.B.Xb;
  b.Bd = a.mb;
  if(b.Bd) {
    b.Fe = 4096
  }
  b.Be = 3E5;
  b.ze = a.mb ? Math.floor(10) : 0;
  b.cf = n;
  if(a.Wa) {
    b.Xe = k, b.gd = Math.floor((a.mb ? 358E4 : 25E3) / 1E3)
  }
  b.Z = Qb(a.B.$c);
  b.qc = a.B.ue;
  a.A.push(b);
  a.ib = b.Z
}
s.ja = function() {
  this.la && !this.vb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.Ac) {
    T(this.a, this.q() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.la;
    this.la = j;
    !a && !this.A.length && Rf(this);
    for(a = 0;a < this.A.length;a++) {
      S(this.a, this.q() + " SEND " + I(this.A[a]))
    }
    if(this.eb()) {
      for(var a = [], b = 0, c = this.A.length;b < c;b++) {
        this.A[b].V(a), a.push("\n")
      }
      this.A = [];
      a = a.join("");
      b = this.Wa ? this.K.Aa : this.K.Da;
      this.o = Hf.Sd(this, this.Wa ? this.K.Me : this.K.Ve);
      this.Dd = this.F.I === dd ? D() : this.F.I.getTime();
      this.o.fd(b, "POST", a);
      Gf(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.mb ? 0 : this.Wa ? 25E3 : 0))
    }else {
      if(this.fa == Xf) {
        a = [];
        b = 0;
        for(c = this.A.length;b < c;b++) {
          a.push(this.A[b].R())
        }
        this.A = [];
        this.o ? this.o.Jd(a) : (b = this.K, this.o = new Zd(this), this.o.yd = b.xg.Sd(this.o), this.Dd = this.F.I === dd ? D() : this.F.I.getTime(), this.o.Od(b.host, b.port), this.o.ba || (this.o.Jd(a), this.o.ba || Gf(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.fa))
      }
    }
  }
};
function Sf(a, b, c) {
  !a.la && !a.A.length && Rf(a);
  for(var d = Math.max(c, a.kb + 1), e = Ob(b), c = [], g = 0;g < e.length;g++) {
    var h = e[g];
    (d == k || h >= d) && c.push([h, b.H.m[h][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], e = g[0], g = g[1], (a.kb == -1 || a.kb + 1 != e) && a.A.push(new ie(e)), a.A.push(new ge(g)), a.kb = e
  }
}
s.c = function() {
  this.a.info(this.q() + " in disposeInternal.");
  Yf.d.c.call(this);
  this.bf = this.F.I === dd ? D() : this.F.I.getTime();
  this.A = [];
  eg(this);
  this.o && this.o.e();
  var a = this.B;
  this.B = k;
  ag(a, this)
};
function bg(a, b) {
  !a.la && !a.A.length && Rf(a);
  a.A.push(new ne(b, j));
  a.ff = j
}
function $f(a, b, c, d) {
  this.F = a;
  this.B = b;
  this.Wd = c;
  this.Rd = d
}
E($f, M);
s = $f.prototype;
s.la = n;
s.vb = n;
s.lc = k;
s.ib = k;
s.a = U("cw.net.DoNothingTransport");
function fg(a) {
  a.lc = a.F.I.setTimeout(function() {
    a.lc = k;
    a.Rd--;
    a.Rd ? fg(a) : a.e()
  }, a.Wd)
}
s.ja = function() {
  this.la && !this.vb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.la = j;
  fg(this)
};
s.r = function(a) {
  a.push("<DoNothingTransport delay=", String(this.Wd), ">")
};
s.eb = r(n);
s.q = r("Wast. T");
s.Pd = r(n);
s.c = function() {
  this.a.info(this.q() + " in disposeInternal.");
  $f.d.c.call(this);
  this.lc != k && this.F.I.clearTimeout(this.lc);
  var a = this.B;
  this.B = k;
  ag(a, this)
};
var gg;
function hg() {
  kb.apply(this)
}
E(hg, kb);
function ig() {
  kb.apply(this)
}
E(ig, kb);
qb(hg, {"0":{name:"NewPost", ae:"demosminerva.ljstream_messages.NewPost"}, 1:{name:"title", ab:9, type:String}, 2:{name:"url", ab:9, type:String}, 3:{name:"body", ab:9, type:String}, 4:{name:"num_images", ab:5, type:Number}, 5:{name:"lang", ab:9, type:String}});
qb(ig, {"0":{name:"SetPreferences", ae:"demosminerva.ljstream_messages.SetPreferences"}, 1:{name:"include_russian_posts", ab:8, type:Boolean}});
function jg() {
  this.Qe = D()
}
var kg = new jg;
jg.prototype.set = aa("Qe");
jg.prototype.reset = function() {
  this.set(D())
};
jg.prototype.get = o("Qe");
function lg(a) {
  this.qd = a || "";
  this.$f = kg
}
lg.prototype.Wf = j;
lg.prototype.Yf = j;
lg.prototype.Xf = j;
lg.prototype.We = n;
function mg(a) {
  return a < 10 ? "0" + a : String(a)
}
function ng(a, b) {
  var c = (a.Ye - b) / 1E3, d = c.toFixed(3), e = 0;
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
function og(a) {
  lg.call(this, a)
}
E(og, lg);
og.prototype.We = j;
function pg(a) {
  this.hd = a || 100;
  this.na = []
}
s = pg.prototype;
s.Kb = 0;
s.add = function(a) {
  this.na[this.Kb] = a;
  this.Kb = (this.Kb + 1) % this.hd
};
s.get = function(a) {
  a = qg(this, a);
  return this.na[a]
};
s.set = function(a, b) {
  a = qg(this, a);
  this.na[a] = b
};
s.u = function() {
  return this.na.length
};
s.Oa = function() {
  return this.na.length == 0
};
s.clear = function() {
  this.Kb = this.na.length = 0
};
s.L = function() {
  for(var a = this.u(), b = this.u(), c = [], a = this.u() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
s.ua = function() {
  for(var a = [], b = this.u(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
s.T = function(a) {
  return a < this.u()
};
s.cc = function(a) {
  for(var b = this.u(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return j
    }
  }
  return n
};
function qg(a, b) {
  b >= a.na.length && f(Error("Out of bounds exception"));
  return a.na.length < a.hd ? b : (a.Kb + Number(b)) % a.hd
}
;function rg(a, b) {
  this.wa = a || "";
  this.qd = b || "";
  this.lb = [];
  this.xc = new pg(sg);
  this.Rf = B(this.jf, this);
  this.xf = new og(this.qd);
  this.vf = {};
  if(j != this.qe) {
    this.qe = j;
    var c = Yd(), d = this.Rf;
    if(!c.Fb) {
      c.Fb = []
    }
    c.Fb.push(d)
  }
  this.U = tg(this.wa, "enabled") == "1";
  t.setInterval(B(this.Uf, this), 7500)
}
var sg = 500;
s = rg.prototype;
s.ef = "LOGGING";
s.sf = n;
s.t = k;
s.Hd = n;
s.qe = n;
s.Ld = k;
s.cd = D();
s.Na = function() {
  this.U && ug(this)
};
s.isEnabled = o("U");
s.Ub = function(a) {
  if(this.U = a) {
    ug(this), this.t && this.Dc()
  }
  vg(this, "enabled", a ? "1" : "0")
};
function wg(a) {
  return!!a.t && !a.t.closed
}
s.mf = function() {
  this.xc.clear();
  wg(this) && this.Dc()
};
s.jf = function(a) {
  if(!this.vf[a.xe]) {
    var b = this.xf, c;
    switch(a.W.value) {
      case Gd.value:
        c = "dbg-sh";
        break;
      case Hd.value:
        c = "dbg-sev";
        break;
      case Id.value:
        c = "dbg-w";
        break;
      case Jd.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.qd, " ");
    if(b.Wf) {
      var e = new Date(a.Ye);
      d.push("[", mg(e.getFullYear() - 2E3) + mg(e.getMonth() + 1) + mg(e.getDate()) + " " + mg(e.getHours()) + ":" + mg(e.getMinutes()) + ":" + mg(e.getSeconds()) + "." + mg(Math.floor(e.getMilliseconds() / 10)), "] ")
    }
    b.Yf && d.push("[", Ea(ng(a, b.$f.get())), "s] ");
    b.Xf && d.push("[", ya(a.xe), "] ");
    d.push('<span class="', c, '">', xa(Ea(ya(a.De))));
    b.We && a.Tc && d.push("<br>", xa(Ea(a.Sc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.U ? (ug(this), this.xc.add(b), xg(this, b)) : this.xc.add(b);
    this.sf && a.W.value >= Hd.value && this.Ub(j)
  }
};
function xg(a, b) {
  a.lb.push(b);
  t.clearTimeout(a.Ld);
  D() - a.cd > 750 ? a.Id() : a.Ld = t.setTimeout(B(a.Id, a), 250)
}
s.Id = function() {
  this.cd = D();
  if(wg(this)) {
    var a = this.t.document.body, a = a && a.scrollHeight - (a.scrollTop + a.clientHeight) <= 100;
    this.t.document.write(this.lb.join(""));
    this.lb.length = 0;
    a && this.t.scrollTo(0, 1E6)
  }
};
function yg(a) {
  for(var b = a.xc.L(), c = 0;c < b.length;c++) {
    xg(a, b[c])
  }
}
function ug(a) {
  if(!wg(a) && !a.Hd) {
    var b = tg(a.wa, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), e = Number(b[2]), b = Number(b[3]);
    a.Hd = j;
    a.t = window.open("", K ? a.wa.replace(/[\s\-\.\,]/g, "_") : a.wa, "width=" + e + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    if(!a.t && !a.Zf) {
      alert("Logger popup was blocked"), a.Zf = j
    }
    a.Hd = n;
    a.t && a.Dc()
  }
}
s.ic = r("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
s.Dc = function() {
  wg(this) || (this.t.document.open(), xg(this, "<style>" + this.ic() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.ef + "<br><small>Logger: " + this.wa + "</small></div><hr>"), yg(this))
};
function vg(a, b, c) {
  b += a.wa;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(D() + 2592E6)).toUTCString()
}
function tg(a, b, c) {
  var a = b + a, b = String(document.cookie), d = b.indexOf(a + "=");
  return d != -1 ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, c == -1 ? b.length : c))) : c || ""
}
s.Uf = function() {
  wg(this) && vg(this, "dbg", (this.t.screenX || this.t.screenLeft || 0) + "," + (this.t.screenY || this.t.screenTop || 0) + "," + (this.t.outerWidth || 800) + "," + (this.t.outerHeight || 500))
};
function zg(a, b) {
  if(Ag) {
    var c = Bg(), d;
    for(d in c) {
      var e = d.replace("fancywindow.sel.", ""), e = U(e), g = e.W, h = window.localStorage.getItem(d).toString();
      (!g || g.toString() != h) && e.ob(Qd(h))
    }
  }
  rg.call(this, a, b)
}
E(zg, rg);
var Ag;
a: {
  try {
    Ag = !!window.localStorage.getItem;
    break a
  }catch(Cg) {
  }
  Ag = n
}
s = zg.prototype;
s.Id = function() {
  this.cd = D();
  if(wg(this)) {
    for(var a = this.J.h("log"), b = a.scrollHeight - (a.scrollTop + a.offsetHeight) <= 100, c = 0;c < this.lb.length;c++) {
      var d = this.J.s("div", "logmsg");
      d.innerHTML = this.lb[c];
      a.appendChild(d)
    }
    this.lb.length = 0;
    this.Se();
    if(b) {
      a.scrollTop = a.scrollHeight
    }
  }
};
s.Dc = function() {
  if(wg(this)) {
    var a = this.t.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.wa + "</title><style>" + this.ic() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.wa + "</b></p><p>" + this.ef + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (K ? a.body : this.t).onresize = B(this.Se, this);
    this.J = new Ye(a);
    this.J.h("openbutton").onclick = B(this.Of, this);
    this.J.h("closebutton").onclick = B(this.nf, this);
    this.J.h("clearbutton").onclick = B(this.mf, this);
    this.J.h("exitbutton").onclick = B(this.tf, this);
    yg(this)
  }
};
s.Of = function() {
  var a = this.J.h("optionsarea");
  a.innerHTML = "";
  for(var b = Dg(), c = this.J, d = 0;d < b.length;d++) {
    var e = U(b[d]), e = c.s("div", {}, Eg(this, "sel" + b[d], e.W ? e.W.name : "INHERIT"), c.s("span", {}, b[d] || "(root)"));
    a.appendChild(e)
  }
  this.J.h("options").style.display = "block";
  return n
};
function Eg(a, b, c) {
  for(var a = a.J, b = a.s("select", {id:b}), d = 0;d < Od.length;d++) {
    var e = Od[d], g = a.s("option", {}, e.name);
    if(c == e.name) {
      g.selected = j
    }
    b.appendChild(g)
  }
  b.appendChild(a.s("option", {selected:c == "INHERIT"}, "INHERIT"));
  return b
}
s.nf = function() {
  this.J.h("options").style.display = "none";
  for(var a = Dg(), b = this.J, c = 0;c < a.length;c++) {
    var d = U(a[c]), e = b.h("sel" + a[c]), e = e.options[e.selectedIndex].text;
    e == "INHERIT" ? d.ob(k) : d.ob(Qd(e))
  }
  if(Ag) {
    a = Dg();
    b = Bg();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], e = U(a[c]).W, d in b ? e ? window.localStorage.getItem(d) != e.name && window.localStorage.setItem(d, e.name) : window.localStorage.removeItem(d) : e && window.localStorage.setItem(d, e.name)
    }
  }
  return n
};
s.Se = function() {
  var a = this.J, b = a.h("log"), c = a.h("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.Q.body.offsetHeight - c.offsetHeight - (K ? 4 : 0) + "px"
};
s.tf = function() {
  this.Ub(n);
  this.t && this.t.close()
};
s.ic = function() {
  return zg.d.ic.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function Bg() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != k && d.lastIndexOf("fancywindow.sel.", 0) == 0 && (a[d] = j)
  }
  return a
}
function Dg() {
  var a = Sa(Ud);
  a.sort();
  return a
}
;var Fg = bc ? "MozUserSelect" : L ? "WebkitUserSelect" : k;
function Gg(a) {
  this.ke = a;
  this.j = []
}
E(Gg, M);
var Hg = [];
function Ig(a, b, c, d) {
  v(c) || (Hg[0] = c, c = Hg);
  for(var e = 0;e < c.length;e++) {
    a.j.push(P(b, c[e], d || a, n, a.ke || a))
  }
  return a
}
function Jg(a, b, c, d, e, g) {
  if(v(c)) {
    for(var h = 0;h < c.length;h++) {
      Jg(a, b, c[h], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.ke || a;
      e = !!e;
      if(b = Xc(b, c, e)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].Qa && b[c].jb == d && b[c].capture == e && b[c].mc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    if(b) {
      b = b.key, Q(b), ab(a.j, b)
    }
  }
  return a
}
Gg.prototype.rd = function() {
  Wa(this.j, Q);
  this.j.length = 0
};
Gg.prototype.c = function() {
  Gg.d.c.call(this);
  this.rd()
};
Gg.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Kg() {
}
da(Kg);
Kg.prototype.Mf = 0;
Kg.bb();
function Lg(a) {
  this.Ia = a || Xe();
  this.Rb = Mg
}
E(Lg, cd);
Lg.prototype.Ff = Kg.bb();
var Mg = k;
function Ng(a, b) {
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
s = Lg.prototype;
s.ne = k;
s.G = n;
s.p = k;
s.Rb = k;
s.Lf = k;
s.v = k;
s.pa = k;
s.wb = k;
s.jg = n;
s.h = o("p");
function Og(a) {
  return a.cb || (a.cb = new Gg(a))
}
s.getParent = o("v");
s.ud = function(a) {
  this.v && this.v != a && f(Error("Method not supported"));
  Lg.d.ud.call(this, a)
};
s.Cb = o("Ia");
s.s = function() {
  this.p = this.Ia.createElement("div")
};
function Pg(a) {
  var b = X("prefs");
  a.G && f(Error("Component already rendered"));
  a.p || a.s();
  b ? b.insertBefore(a.p, k) : a.Ia.Q.body.appendChild(a.p);
  (!a.v || a.v.G) && a.$a()
}
s.$a = function() {
  this.G = j;
  Qg(this, function(a) {
    !a.G && a.h() && a.$a()
  })
};
s.zb = function() {
  Qg(this, function(a) {
    a.G && a.zb()
  });
  this.cb && this.cb.rd();
  this.G = n
};
s.c = function() {
  Lg.d.c.call(this);
  this.G && this.zb();
  this.cb && (this.cb.e(), delete this.cb);
  Qg(this, function(a) {
    a.e()
  });
  !this.jg && this.p && hf(this.p);
  this.v = this.Lf = this.p = this.wb = this.pa = k
};
s.pb = function(a) {
  this.G && f(Error("Component already rendered"));
  this.Rb = a
};
function Qg(a, b) {
  a.pa && Wa(a.pa, b, i)
}
s.removeChild = function(a, b) {
  if(a) {
    var c = w(a) ? a : a.ne || (a.ne = ":" + (a.Ff.Mf++).toString(36)), a = this.wb && c ? (c in this.wb ? this.wb[c] : i) || k : k;
    if(c && a) {
      var d = this.wb;
      c in d && delete d[c];
      ab(this.pa, a);
      b && (a.zb(), a.p && hf(a.p));
      c = a;
      c == k && f(Error("Unable to set parent component"));
      c.v = k;
      Lg.d.ud.call(c, k)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function Rg() {
}
var Sg;
da(Rg);
s = Rg.prototype;
s.fc = function() {
};
s.s = function(a) {
  var b = a.Cb().s("div", Tg(this, a).join(" "), a.xb);
  this.td(a, b);
  return b
};
s.yb = function(a, b, c) {
  if(a = a.h ? a.h() : a) {
    if(K && !nc("7")) {
      var d = Ug(Qe(a), b);
      d.push(b);
      na(c ? Re : Se, a).apply(k, d)
    }else {
      c ? Re(a, b) : Se(a, b)
    }
  }
};
s.oe = function(a) {
  if(a.Rb == k) {
    var b;
    a: {
      b = a.G ? a.p : a.Ia.Q.body;
      var c = Ze(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (b = c.defaultView.getComputedStyle(b, k))) {
        b = b.direction || b.getPropertyValue("direction");
        break a
      }
      b = ""
    }
    a.Rb = "rtl" == (b || ((a.G ? a.p : a.Ia.Q.body).currentStyle ? (a.G ? a.p : a.Ia.Q.body).currentStyle.direction : k) || (a.G ? a.p : a.Ia.Q.body).style.direction)
  }
  a.Rb && this.pb(a.h(), j);
  a.isEnabled() && this.Vb(a, a.Ua)
};
s.td = function(a, b) {
  a.isEnabled() || this.P(b, 1, j);
  a.b & 8 && this.P(b, 8, j);
  a.O & 16 && this.P(b, 16, !!(a.b & 16));
  a.O & 64 && this.P(b, 64, !!(a.b & 64))
};
s.yc = function(a, b) {
  var c = !b, d = K || ac ? a.getElementsByTagName("*") : k;
  if(Fg) {
    if(c = c ? "none" : "", a.style[Fg] = c, d) {
      for(var e = 0, g;g = d[e];e++) {
        g.style[Fg] = c
      }
    }
  }else {
    if(K || ac) {
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for(e = 0;g = d[e];e++) {
          g.setAttribute("unselectable", c)
        }
      }
    }
  }
};
s.pb = function(a, b) {
  this.yb(a, this.ta() + "-rtl", b)
};
s.re = function(a) {
  var b;
  return a.O & 32 && (b = a.La()) ? mf(b) : n
};
s.Vb = function(a, b) {
  var c;
  if(a.O & 32 && (c = a.La())) {
    if(!b && a.b & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.b & 32 && a.de()
    }
    if(mf(c) != b) {
      b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex"))
    }
  }
};
s.wd = function(a, b) {
  a.style.display = b ? "" : "none"
};
s.N = function(a, b, c) {
  var d = a.h();
  if(d) {
    var e = Vg(this, b);
    e && this.yb(a, e, c);
    this.P(d, b, c)
  }
};
s.P = function(a, b, c) {
  Sg || (Sg = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Sg[b]) && a.setAttribute("aria-" + b, c)
};
s.La = function(a) {
  return a.h()
};
s.ta = r("goog-control");
function Tg(a, b) {
  var c = a.ta(), d = [c], e = a.ta();
  e != c && d.push(e);
  c = b.b;
  for(e = [];c;) {
    var g = c & -c;
    e.push(Vg(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.da) && d.push.apply(d, c);
  K && !nc("7") && d.push.apply(d, Ug(d));
  return d
}
function Ug(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Wa([], function(d) {
    Za(d, na($a, a)) && (!b || $a(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Vg(a, b) {
  if(!a.Nd) {
    var c = a.ta();
    a.Nd = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Nd[b]
}
;function Wg(a, b) {
  a || f(Error("Invalid class name " + a));
  y(b) || f(Error("Invalid decorator function " + b))
}
var Xg = {};
function Yg(a, b, c, d, e) {
  if(!K && (!L || !nc("525"))) {
    return j
  }
  if(ec && e) {
    return Zg(a)
  }
  if(e && !d) {
    return n
  }
  if(!c && (b == 17 || b == 18)) {
    return n
  }
  if(K && d && b == a) {
    return n
  }
  switch(a) {
    case 13:
      return!(K && pc());
    case 27:
      return!L
  }
  return Zg(a)
}
function Zg(a) {
  if(a >= 48 && a <= 57) {
    return j
  }
  if(a >= 96 && a <= 106) {
    return j
  }
  if(a >= 65 && a <= 90) {
    return j
  }
  if(L && a == 0) {
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
      return n
  }
}
;function $g(a, b) {
  a && ah(this, a, b)
}
E($g, cd);
s = $g.prototype;
s.p = k;
s.oc = k;
s.ad = k;
s.pc = k;
s.ya = -1;
s.xa = -1;
var bh = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, ch = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, dh = {61:187, 
59:186}, eh = K || L && nc("525");
s = $g.prototype;
s.Bf = function(a) {
  if(L && (this.ya == 17 && !a.ctrlKey || this.ya == 18 && !a.altKey)) {
    this.xa = this.ya = -1
  }
  eh && !Yg(a.keyCode, this.ya, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.xa = bc && a.keyCode in dh ? dh[a.keyCode] : a.keyCode
};
s.Df = function() {
  this.xa = this.ya = -1
};
s.handleEvent = function(a) {
  var b = a.ia, c, d;
  K && a.type == "keypress" ? (c = this.xa, d = c != 13 && c != 27 ? b.keyCode : 0) : L && a.type == "keypress" ? (c = this.xa, d = b.charCode >= 0 && b.charCode < 63232 && Zg(c) ? b.charCode : 0) : ac ? (c = this.xa, d = Zg(c) ? b.keyCode : 0) : (c = b.keyCode || this.xa, d = b.charCode || 0, ec && d == 63 && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in bh ? e = bh[c] : c == 25 && a.shiftKey && (e = 9) : g && g in ch && (e = ch[g]);
  a = e == this.ya;
  this.ya = e;
  b = new fh(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.e()
  }
};
s.h = o("p");
function ah(a, b, c) {
  a.pc && a.detach();
  a.p = b;
  a.oc = P(a.p, "keypress", a, c);
  a.ad = P(a.p, "keydown", a.Bf, c, a);
  a.pc = P(a.p, "keyup", a.Df, c, a)
}
s.detach = function() {
  if(this.oc) {
    Q(this.oc), Q(this.ad), Q(this.pc), this.pc = this.ad = this.oc = k
  }
  this.p = k;
  this.xa = this.ya = -1
};
s.c = function() {
  $g.d.c.call(this);
  this.detach()
};
function fh(a, b, c, d) {
  d && this.Na(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
E(fh, wc);
function Y(a, b, c) {
  Lg.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = z(b);
      if(d = Xg[d]) {
        break
      }
      b = b.d ? b.d.constructor : k
    }
    b = d ? y(d.bb) ? d.bb() : new d : k
  }
  this.w = b;
  this.xb = a
}
E(Y, Lg);
s = Y.prototype;
s.xb = k;
s.b = 0;
s.O = 39;
s.Kd = 255;
s.ag = 0;
s.Ua = j;
s.da = k;
s.Xc = j;
s.Jc = n;
s.Qf = k;
s.La = function() {
  return this.w.La(this)
};
function gh(a, b) {
  if(b) {
    a.da ? $a(a.da, b) || a.da.push(b) : a.da = [b], a.w.yb(a, b, j)
  }
}
s.yb = function(a, b) {
  if(b) {
    gh(this, a)
  }else {
    if(a && this.da) {
      ab(this.da, a);
      if(this.da.length == 0) {
        this.da = k
      }
      this.w.yb(this, a, n)
    }
  }
};
s.s = function() {
  var a = this.w.s(this);
  this.p = a;
  var b = this.Qf || this.w.fc();
  if(b) {
    a.setAttribute("role", b), a.wg = b
  }
  this.Jc || this.w.yc(a, n);
  this.Ua || this.w.wd(a, n)
};
s.$a = function() {
  Y.d.$a.call(this);
  this.w.oe(this);
  if(this.O & -2 && (this.Xc && hh(this, j), this.O & 32)) {
    var a = this.La();
    if(a) {
      var b = this.gb || (this.gb = new $g);
      ah(b, a);
      Ig(Ig(Ig(Og(this), b, "key", this.Cf), a, "focus", this.Af), a, "blur", this.de)
    }
  }
};
function hh(a, b) {
  var c = Og(a), d = a.h();
  b ? (Ig(Ig(Ig(Ig(c, d, "mouseover", a.ie), d, "mousedown", a.ge), d, "mouseup", a.je), d, "mouseout", a.he), K && Ig(c, d, "dblclick", a.fe)) : (Jg(Jg(Jg(Jg(c, d, "mouseover", a.ie), d, "mousedown", a.ge), d, "mouseup", a.je), d, "mouseout", a.he), K && Jg(c, d, "dblclick", a.fe))
}
s.zb = function() {
  Y.d.zb.call(this);
  this.gb && this.gb.detach();
  this.Ua && this.isEnabled() && this.w.Vb(this, n)
};
s.c = function() {
  Y.d.c.call(this);
  this.gb && (this.gb.e(), delete this.gb);
  delete this.w;
  this.da = this.xb = k
};
function ih(a) {
  a = a.xb;
  if(!a) {
    return""
  }
  if(!w(a)) {
    if(v(a)) {
      a = Xa(a, nf).join("")
    }else {
      if(Ve && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        of(a, b, j);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Ve || (a = a.replace(/ +/g, " "));
      a != " " && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
s.pb = function(a) {
  Y.d.pb.call(this, a);
  var b = this.h();
  b && this.w.pb(b, a)
};
s.yc = function(a) {
  this.Jc = a;
  var b = this.h();
  b && this.w.yc(b, a)
};
s.wd = function(a, b) {
  if(b || this.Ua != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.h();
    c && this.w.wd(c, a);
    this.isEnabled() && this.w.Vb(this, a);
    this.Ua = a;
    return j
  }
  return n
};
s.isEnabled = function() {
  return!(this.b & 1)
};
s.Ub = function(a) {
  var b = this.getParent();
  if((!b || typeof b.isEnabled != "function" || b.isEnabled()) && jh(this, 1, !a)) {
    a || (this.setActive(n), kh(this, n)), this.Ua && this.w.Vb(this, a), this.N(1, !a)
  }
};
function kh(a, b) {
  jh(a, 2, b) && a.N(2, b)
}
s.pe = function() {
  return!!(this.b & 4)
};
s.setActive = function(a) {
  jh(this, 4, a) && this.N(4, a)
};
s.N = function(a, b) {
  if(this.O & a && b != !!(this.b & a)) {
    this.w.N(this, a, b), this.b = b ? this.b | a : this.b & ~a
  }
};
function Z(a, b) {
  return!!(a.Kd & b) && !!(a.O & b)
}
function jh(a, b, c) {
  return!!(a.O & b) && !!(a.b & b) != c && (!(a.ag & b) || a.dispatchEvent(Ng(b, c))) && !a.ba
}
s.ie = function(a) {
  (!a.relatedTarget || !jf(this.h(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Z(this, 2) && kh(this, j)
};
s.he = function(a) {
  if((!a.relatedTarget || !jf(this.h(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    Z(this, 4) && this.setActive(n), Z(this, 2) && kh(this, n)
  }
};
s.ge = function(a) {
  if(this.isEnabled() && (Z(this, 2) && kh(this, j), yc(a) && (!L || !ec || !a.ctrlKey))) {
    Z(this, 4) && this.setActive(j), this.w.re(this) && this.La().focus()
  }
  !this.Jc && yc(a) && (!L || !ec || !a.ctrlKey) && a.preventDefault()
};
s.je = function(a) {
  this.isEnabled() && (Z(this, 2) && kh(this, j), this.pe() && this.Mb(a) && Z(this, 4) && this.setActive(n))
};
s.fe = function(a) {
  this.isEnabled() && this.Mb(a)
};
s.Mb = function(a) {
  if(Z(this, 16)) {
    var b = !(this.b & 16);
    jh(this, 16, b) && this.N(16, b)
  }
  Z(this, 8) && jh(this, 8, j) && this.N(8, j);
  Z(this, 64) && (b = !(this.b & 64), jh(this, 64, b) && this.N(64, b));
  b = new uc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, e = 0;d = c[e];e++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
s.Af = function() {
  Z(this, 32) && jh(this, 32, j) && this.N(32, j)
};
s.de = function() {
  Z(this, 4) && this.setActive(n);
  Z(this, 32) && jh(this, 32, n) && this.N(32, n)
};
s.Cf = function(a) {
  return this.Ua && this.isEnabled() && this.Wc(a) ? (a.preventDefault(), a.stopPropagation(), j) : n
};
s.Wc = function(a) {
  return a.keyCode == 13 && this.Mb(a)
};
y(Y) || f(Error("Invalid component class " + Y));
y(Rg) || f(Error("Invalid renderer class " + Rg));
var lh = z(Y);
Xg[lh] = Rg;
Wg("goog-control", function() {
  return new Y(k)
});
function mh() {
}
E(mh, Rg);
da(mh);
s = mh.prototype;
s.fc = r("button");
s.P = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : mh.d.P.call(this, a, b, c)
};
s.s = function(a) {
  var b = mh.d.s.call(this, a), c = a.jc();
  c && this.vd(b, c);
  (c = a.kc()) && this.zc(b, c);
  a.O & 16 && this.P(b, 16, !!(a.b & 16));
  return b
};
s.kc = u;
s.zc = u;
s.jc = function(a) {
  return a.title
};
s.vd = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
s.ta = r("goog-button");
function nh() {
}
E(nh, mh);
da(nh);
s = nh.prototype;
s.fc = function() {
};
s.s = function(a) {
  a.G && n != a.Xc && hh(a, n);
  a.Xc = n;
  a.Kd &= -256;
  a.G && a.b & 32 && f(Error("Component already rendered"));
  a.b & 32 && a.N(32, n);
  a.O &= -33;
  return a.Cb().s("button", {"class":Tg(this, a).join(" "), disabled:!a.isEnabled(), title:a.jc() || "", value:a.kc() || ""}, ih(a) || "")
};
s.oe = function(a) {
  Ig(Og(a), a.h(), "click", a.Mb)
};
s.yc = u;
s.pb = u;
s.re = function(a) {
  return a.isEnabled()
};
s.Vb = u;
s.N = function(a, b, c) {
  nh.d.N.call(this, a, b, c);
  if((a = a.h()) && b == 1) {
    a.disabled = c
  }
};
s.kc = function(a) {
  return a.value
};
s.zc = function(a, b) {
  if(a) {
    a.value = b
  }
};
s.P = u;
function oh(a, b, c) {
  Y.call(this, a, b || nh.bb(), c)
}
E(oh, Y);
s = oh.prototype;
s.kc = o("df");
s.zc = function(a) {
  this.df = a;
  this.w.zc(this.h(), a)
};
s.jc = o("Ze");
s.vd = function(a) {
  this.Ze = a;
  this.w.vd(this.h(), a)
};
s.c = function() {
  oh.d.c.call(this);
  delete this.df;
  delete this.Ze
};
s.$a = function() {
  oh.d.$a.call(this);
  if(this.O & 32) {
    var a = this.La();
    a && Ig(Og(this), a, "keyup", this.Wc)
  }
};
s.Wc = function(a) {
  return a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup" ? this.Mb(a) : a.keyCode == 32
};
Wg("goog-button", function() {
  return new oh(k)
});
function ph() {
}
E(ph, mh);
da(ph);
ph.prototype.s = function(a) {
  var b = {"class":"goog-inline-block " + Tg(this, a).join(" "), title:a.jc() || ""}, b = a.Cb().s("div", b, qh(this, a.xb, a.Cb()));
  this.td(a, b);
  return b
};
ph.prototype.fc = r("button");
ph.prototype.td = function(a, b) {
  a.isEnabled() || this.P(b, 1, j);
  a.b & 8 && this.P(b, 8, j);
  a.O & 16 && this.P(b, 16, j);
  a.b & 64 && this.P(b, 64, j)
};
function qh(a, b, c) {
  return c.s("div", "goog-inline-block " + (a.ta() + "-outer-box"), c.s("div", "goog-inline-block " + (a.ta() + "-inner-box"), b))
}
ph.prototype.ta = r("goog-custom-button");
function rh(a, b, c) {
  oh.call(this, a, b || ph.bb(), c)
}
E(rh, oh);
Wg("goog-custom-button", function() {
  return new rh(k)
});
(function() {
  function a(a) {
    a.match(/[\d]+/g).length = 3
  }
  var b = n;
  if(navigator.plugins && navigator.plugins.length) {
    var c = navigator.plugins["Shockwave Flash"];
    c && (b = j, c.description && a(c.description));
    navigator.plugins["Shockwave Flash 2.0"] && (b = j)
  }else {
    if(navigator.mimeTypes && navigator.mimeTypes.length) {
      (b = (c = navigator.mimeTypes["application/x-shockwave-flash"]) && c.enabledPlugin) && a(c.enabledPlugin.description)
    }else {
      try {
        c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), b = j, a(c.GetVariable("$version"))
      }catch(d) {
        try {
          c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = j
        }catch(e) {
          try {
            c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = j, a(c.GetVariable("$version"))
          }catch(g) {
          }
        }
      }
    }
  }
})();
U("goog.ui.media.FlashObject");
t.__loadFlashObject_callbacks = {};
function sh() {
  if(bc) {
    this.Ga = {}, this.Gc = {}, this.Bc = []
  }
}
sh.prototype.a = U("goog.net.xhrMonitor");
sh.prototype.U = bc;
sh.prototype.Ub = function(a) {
  this.U = bc && a
};
function th(a) {
  var b = uh;
  if(b.U) {
    var c = w(a) ? a : ia(a) ? z(a) : "";
    T(b.a, "Pushing context: " + a + " (" + c + ")");
    b.Bc.push(c)
  }
}
function vh() {
  var a = uh;
  if(a.U) {
    var b = a.Bc.pop();
    T(a.a, "Popping context: " + b);
    wh(a, b)
  }
}
function xh(a) {
  var b = uh;
  if(b.U) {
    a = z(a);
    S(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.Bc.length;c++) {
      var d = b.Bc[c];
      yh(b.Ga, d, a);
      yh(b.Gc, a, d)
    }
  }
}
function wh(a, b) {
  var c = a.Gc[b], d = a.Ga[b];
  c && d && (T(a.a, "Updating dependent contexts"), Wa(c, function(a) {
    Wa(d, function(b) {
      yh(this.Ga, a, b);
      yh(this.Gc, b, a)
    }, this)
  }, a))
}
function yh(a, b, c) {
  a[b] || (a[b] = []);
  $a(a[b], c) || a[b].push(c)
}
var uh = new sh;
function zh() {
}
zh.prototype.$b = k;
var Ah;
function Bh() {
}
E(Bh, zh);
function Ch(a) {
  return(a = Dh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Eh(a) {
  var b = {};
  Dh(a) && (b[0] = j, b[1] = j);
  return b
}
Bh.prototype.Yc = k;
function Dh(a) {
  if(!a.Yc && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Yc = d
      }catch(e) {
      }
    }
    f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Yc
}
Ah = new Bh;
function Fh(a) {
  this.headers = new J;
  this.tb = a || k
}
E(Fh, cd);
Fh.prototype.a = U("goog.net.XhrIo");
var Gh = /^https?:?$/i;
s = Fh.prototype;
s.ma = n;
s.g = k;
s.Fc = k;
s.Jb = "";
s.te = "";
s.Gb = 0;
s.Hb = "";
s.Qc = n;
s.nc = n;
s.Zc = n;
s.Ma = n;
s.Cc = 0;
s.Sa = k;
s.Te = "";
s.kg = n;
s.send = function(a, b, c, d) {
  this.g && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Jb = a;
  this.Hb = "";
  this.Gb = 0;
  this.te = b;
  this.Qc = n;
  this.ma = j;
  this.g = this.tb ? Ch(this.tb) : Ch(Ah);
  this.Fc = this.tb ? this.tb.$b || (this.tb.$b = Eh(this.tb)) : Ah.$b || (Ah.$b = Eh(Ah));
  xh(this.g);
  this.g.onreadystatechange = B(this.Ie, this);
  try {
    S(this.a, Hh(this, "Opening Xhr")), this.Zc = j, this.g.open(b, a, j), this.Zc = n
  }catch(e) {
    S(this.a, Hh(this, "Error opening Xhr: " + e.message));
    Ih(this, e);
    return
  }
  var a = c || "", g = this.headers.D();
  d && Fb(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.T("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Fb(g, function(a, b) {
    this.g.setRequestHeader(b, a)
  }, this);
  if(this.Te) {
    this.g.responseType = this.Te
  }
  if("withCredentials" in this.g) {
    this.g.withCredentials = this.kg
  }
  try {
    if(this.Sa) {
      dd.clearTimeout(this.Sa), this.Sa = k
    }
    if(this.Cc > 0) {
      S(this.a, Hh(this, "Will abort after " + this.Cc + "ms if incomplete")), this.Sa = dd.setTimeout(B(this.gg, this), this.Cc)
    }
    S(this.a, Hh(this, "Sending request"));
    this.nc = j;
    this.g.send(a);
    this.nc = n
  }catch(h) {
    S(this.a, Hh(this, "Send error: " + h.message)), Ih(this, h)
  }
};
s.dispatchEvent = function(a) {
  if(this.g) {
    th(this.g);
    try {
      return Fh.d.dispatchEvent.call(this, a)
    }finally {
      vh()
    }
  }else {
    return Fh.d.dispatchEvent.call(this, a)
  }
};
s.gg = function() {
  if(typeof ba != "undefined" && this.g) {
    this.Hb = "Timed out after " + this.Cc + "ms, aborting", this.Gb = 8, S(this.a, Hh(this, this.Hb)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function Ih(a, b) {
  a.ma = n;
  if(a.g) {
    a.Ma = j, a.g.abort(), a.Ma = n
  }
  a.Hb = b;
  a.Gb = 5;
  Jh(a);
  Kh(a)
}
function Jh(a) {
  if(!a.Qc) {
    a.Qc = j, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
s.abort = function(a) {
  if(this.g && this.ma) {
    S(this.a, Hh(this, "Aborting")), this.ma = n, this.Ma = j, this.g.abort(), this.Ma = n, this.Gb = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Kh(this)
  }
};
s.c = function() {
  if(this.g) {
    if(this.ma) {
      this.ma = n, this.Ma = j, this.g.abort(), this.Ma = n
    }
    Kh(this, j)
  }
  Fh.d.c.call(this)
};
s.Ie = function() {
  !this.Zc && !this.nc && !this.Ma ? this.Nf() : Lh(this)
};
s.Nf = function() {
  Lh(this)
};
function Lh(a) {
  if(a.ma && typeof ba != "undefined") {
    if(a.Fc[1] && a.va() == 4 && Mh(a) == 2) {
      S(a.a, Hh(a, "Local request error detected and ignored"))
    }else {
      if(a.nc && a.va() == 4) {
        dd.setTimeout(B(a.Ie, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.va() == 4) {
          S(a.a, Hh(a, "Request complete"));
          a.ma = n;
          var b;
          a: {
            switch(Mh(a)) {
              case 0:
                b = w(a.Jb) ? a.Jb.match(re)[1] || k : a.Jb.$;
                b = !(b ? Gh.test(b) : self.location ? Gh.test(self.location.protocol) : 1);
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
                b = n
            }
          }
          if(b) {
            a.dispatchEvent("complete"), a.dispatchEvent("success")
          }else {
            a.Gb = 6;
            var c;
            try {
              c = a.va() > 2 ? a.g.statusText : ""
            }catch(d) {
              S(a.a, "Can not get status: " + d.message), c = ""
            }
            a.Hb = c + " [" + Mh(a) + "]";
            Jh(a)
          }
          Kh(a)
        }
      }
    }
  }
}
function Kh(a, b) {
  if(a.g) {
    var c = a.g, d = a.Fc[0] ? u : k;
    a.g = k;
    a.Fc = k;
    if(a.Sa) {
      dd.clearTimeout(a.Sa), a.Sa = k
    }
    b || (th(c), a.dispatchEvent("ready"), vh());
    var e = uh;
    if(e.U) {
      var g = z(c);
      S(e.a, "Closing XHR : " + g);
      delete e.Gc[g];
      for(var h in e.Ga) {
        ab(e.Ga[h], g), e.Ga[h].length == 0 && delete e.Ga[h]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(l) {
      Sd(a.a, "Problem encountered resetting onreadystatechange: " + l.message)
    }
  }
}
s.pe = function() {
  return!!this.g
};
s.va = function() {
  return this.g ? this.g.readyState : 0
};
function Mh(a) {
  try {
    return a.va() > 2 ? a.g.status : -1
  }catch(b) {
    return Td(a.a, "Can not get status: " + b.message), -1
  }
}
s.getResponseHeader = function(a) {
  return this.g && this.va() == 4 ? this.g.getResponseHeader(a) : i
};
function Hh(a, b) {
  return b + " [" + a.te + " " + a.Jb + " " + Mh(a) + "]"
}
;var Nh = !(K || L && !nc("420+"));
function Oh(a, b) {
  this.$e = a;
  this.Y = b
}
E(Oh, M);
s = Oh.prototype;
s.o = k;
s.Ca = -1;
s.ce = n;
s.le = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Ph(a) {
  var b = Af(a.Ud), c = b[0], b = b[1], d = t.parent;
  d ? (d.__XHRMaster_onframes(a.Y, c, b), b != 1 && a.e()) : a.e()
}
s.Ef = function() {
  Ph(this);
  if(!this.ba) {
    var a = t.parent;
    a && a.__XHRMaster_oncomplete(this.Y);
    this.e()
  }
};
s.Sf = function() {
  var a = t.parent;
  if(a) {
    this.Ca = this.o.va();
    if(this.Ca >= 2 && !this.ce) {
      for(var b = new J, c = this.le.length;c--;) {
        var d = this.le[c];
        try {
          b.set(d, this.o.g.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.u() && (this.ce = j, a.__XHRMaster_ongotheaders(this.Y, Kb(b)), this.ba)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.Y, this.Ca);
    Nh && this.Ca == 3 && Ph(this)
  }else {
    this.e()
  }
};
s.fd = function(a, b, c) {
  this.o = new Fh;
  P(this.o, "readystatechange", B(this.Sf, this));
  P(this.o, "complete", B(this.Ef, this));
  this.o.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.Ud = new zf(this.o.g, 1048576)
};
s.c = function() {
  Oh.d.c.call(this);
  delete this.Ud;
  this.o && this.o.e();
  delete this.$e.Wb[this.Y];
  delete this.$e
};
function Rh() {
  this.Wb = {}
}
E(Rh, M);
Rh.prototype.If = function(a, b, c, d) {
  var e = new Oh(this, a);
  this.Wb[a] = e;
  e.fd(b, c, d)
};
Rh.prototype.rf = function(a) {
  (a = this.Wb[a]) && a.e()
};
Rh.prototype.c = function() {
  Rh.d.c.call(this);
  for(var a = Ra(this.Wb);a.length;) {
    a.pop().e()
  }
  delete this.Wb
};
var Sh = new Rh;
t.__XHRSlave_makeRequest = B(Sh.If, Sh);
t.__XHRSlave_dispose = B(Sh.rf, Sh);
function Th() {
}
Th.prototype.be = function() {
  return Boolean(Number((new te(document.location)).M.get("httpStreaming", "0"))) ? 2 : 1
};
function Uh() {
  var a = new te(document.location), b = t.__demo_shared_domain, a = a.D();
  we(a, "_____random_____." + b);
  ye(a, "/httpface/");
  ze(a, "", i);
  b = new Jf(a.toString().replace("_____random_____", "%random%"));
  return nd(b)
}
;var Vh = U("ljstream.logger");
window.onerror = function(a, b, c) {
  Sd(Vh, "window.onerror: message: " + I(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Wh() {
  this.Ke = new tb
}
Wh.prototype.dg = function(a, b) {
  Vh.info("streamReset: reasonString=" + I(a) + ", applicationLevel=" + b);
  Xh("Disconnected from server.  Try reloading this page.");
  $ = k
};
function Yh(a) {
  Vh.info("Sending preferences to server");
  var b;
  b = new ig;
  b.n[1] = X("include_russian_posts").checked;
  b.Ha && (b.Ha[1] = j);
  b = a.Ke.Tb(b);
  Vf(a.B, [(new wb(i)).Tb([2, b])])
}
Wh.prototype.eg = function(a) {
  var a = vb(a), b = a[1];
  if(a[0] == 1) {
    var c = this.Ke.Pc(hg.Bb(), b), a = mb(c, 1), b = mb(c, 2), c = mb(c, 3);
    (a = ua(a)) || (a = "[No title]");
    var d = sa(ya(c)), e = document, c = e.createElement("div");
    K ? (c.innerHTML = "<br>" + d, c.removeChild(c.firstChild)) : c.innerHTML = d;
    if(c.childNodes.length == 1) {
      c = c.removeChild(c.firstChild)
    }else {
      for(d = e.createDocumentFragment();c.firstChild;) {
        d.appendChild(c.firstChild)
      }
      c = d
    }
    a = df("span", {}, df("a", {href:b, "class":"ljpost-title-link"}, a), df("span", {}, "\u00a0"), c);
    Zh(a)
  }
};
Wh.prototype.reset = function(a) {
  Vh.info("resetting with reason: " + a);
  this.B.reset(a)
};
var $ = k, $h = new od(t.window);
function Xh(a) {
  a = df("span", {"class":"important-message"}, a);
  Zh(a)
}
function ai() {
  $ && ($.reset("idle timeout fired"), $ = k, Xh("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var bi = k;
function ci() {
  bi != k && $h.I.clearTimeout(bi);
  $ && (bi = $h.I.setTimeout(ai, 6E5))
}
P(window, ["click", "focus", "keydown", "keypress"], ci, j);
var cf = new Ye, di = 0;
function Zh(a) {
  a = df("div", {"class":"row-" + (di % 2 == 0 ? "even" : "odd")}, df("nobr", {}, a));
  X("ljstream-container-inner").appendChild(a);
  di += 1;
  var b;
  if(b = gg) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !L && d.compatMode == "CSS1Compat" ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new We(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = bf().height;
    b = !(a + b <= c + d)
  }
  if(b) {
    a = bf().height, window.scrollBy(0, Math.round(a / 2) + 80)
  }
}
function ei() {
  var a = new Th;
  $ = new Wh;
  ci();
  kd(Uh(), function(b) {
    $ || f(Error("lastProto falsy?"));
    var b = new Of(b, a, $h), c = $;
    b.od = B(c.eg, c);
    b.onreset = B(c.dg, c);
    $.B = b;
    c = $;
    Vf(c.B, ["subprotocol:ljstream"]);
    Yh(c);
    b.start();
    return k
  })
}
function fi() {
  P(t, "load", function() {
    window.scrollTo(0, 0)
  });
  P(X("include_russian_posts"), "click", function() {
    Yh($)
  });
  gg = j;
  P(X("automatic_scroll"), "click", function(a) {
    gg = a.target.checked
  });
  var a = new rh("Clear posts");
  gh(a, "clear-posts-button");
  Pg(a);
  P(a, "action", function() {
    X("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = X("ljstream-container");
  a.style.marginTop = X("demo-header").offsetHeight + "px";
  X("demo-header").style.width = "9000px";
  var b = df("div", {id:"ljstream-container-inner"});
  a.appendChild(b)
}
function gi() {
  Yd().ob(Nd);
  if((new te(document.location)).M.get("logging") == "1") {
    var a = new zg("main");
    a.Ub(j);
    a.Na()
  }
  Vh.info("Logger works.");
  fi();
  ei()
}
var hi = "__ljstream_init".split("."), ii = t;
!(hi[0] in ii) && ii.execScript && ii.execScript("var " + hi[0]);
for(var ji;hi.length && (ji = hi.shift());) {
  !hi.length && fa(gi) ? ii[ji] = gi : ii = ii[ji] ? ii[ji] : ii[ji] = {}
}
;})();
