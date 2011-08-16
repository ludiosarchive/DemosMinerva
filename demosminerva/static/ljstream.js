(function(){function f(a) {
  throw a;
}
var i = void 0, k = null;
function aa(a) {
  return function(b) {
    this[a] = b
  }
}
function l(a) {
  return function() {
    return this[a]
  }
}
function o(a) {
  return function() {
    return a
  }
}
var q, ba = ba || {}, r = this;
function ca(a) {
  for(var a = a.split("."), b = r, c;c = a.shift();) {
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
function da(a) {
  a.Va = function() {
    return a.Ef || (a.Ef = new a)
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
function t(a) {
  return ea(a) == "array"
}
function ga(a) {
  var b = ea(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function ha(a) {
  return ia(a) && typeof a.getFullYear == "function"
}
function u(a) {
  return typeof a == "string"
}
function w(a) {
  return ea(a) == "function"
}
function ia(a) {
  a = ea(a);
  return a == "object" || a == "array" || a == "function"
}
function x(a) {
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
function z(a, b, c) {
  z = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? la : ma;
  return z.apply(k, arguments)
}
function na(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var A = Date.now || function() {
  return+new Date
};
function B(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.c = b.prototype;
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
ra = {la:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, Ne:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
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
        var j = e, m = e.substr(-1), n = qa[m];
        if(n && (n = e.match(RegExp("\\" + n + "(?!$)", "g")), m = e.match(RegExp("\\" + m, "g")), (n ? n.length : 0) < (m ? m.length : 0))) {
          e = e.substr(0, e.length - 1), g--
        }
        b.Ne && (e = e.replace(b.Ne, function(a) {
          g -= a.length;
          return""
        }))
      }while(e.length && e !== j);
      j = e;
      pa.test(j) || (j = (j.indexOf("@") !== -1 ? !j.indexOf("mailto:") ? "" : "mailto:" : !j.indexOf("irc.") ? "irc://" : !j.indexOf("ftp.") ? "ftp://" : "http://") + j);
      d != h && (c.push([a.slice(d, h)]), d = g);
      c.push([e, j])
    }
  }
  c.push([a.substr(d)]);
  d = "";
  for(e = 0;e < c.length;e++) {
    d += b.la.apply(r, c[e])
  }
  return d || a
}
;function C(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = String(a)
  }
}
B(C, Error);
C.prototype.name = "CustomError";
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
    var j = d[h] || "", m = e[h] || "", n = RegExp("(\\d*)(\\D*)", "g"), F = RegExp("(\\d*)(\\D*)", "g");
    do {
      var p = n.exec(j) || ["", "", ""], v = F.exec(m) || ["", "", ""];
      if(p[0].length == 0 && v[0].length == 0) {
        break
      }
      c = Ga(p[1].length == 0 ? 0 : parseInt(p[1], 10), v[1].length == 0 ? 0 : parseInt(v[1], 10)) || Ga(p[2].length == 0, v[2].length == 0) || Ga(p[2], v[2])
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
  C.call(this, ta.apply(k, b));
  b.shift();
  this.rg = a
}
B(Ha, C);
Ha.prototype.name = "AssertionError";
function Ia(a, b) {
  f(new Ha("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ja(a, b, c) {
  this.u = a;
  this.C = b;
  this.hd = c.name;
  this.Ya = !!c.sg;
  this.pg = !!c.required;
  this.wb = c.Ua;
  this.Ce = c.type;
  this.Vd = !1;
  switch(this.wb) {
    case Ka:
    ;
    case La:
    ;
    case Ma:
    ;
    case Na:
    ;
    case Oa:
      this.Vd = !0
  }
  this.ng = c.defaultValue
}
var Ka = 3, La = 4, Ma = 6, Na = 16, Oa = 18;
function Pa(a) {
  return a.wb == 11 || a.wb == 10
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
;var D = Array.prototype, Va = D.indexOf ? function(a, b, c) {
  return D.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(u(a)) {
    return!u(b) || b.length != 1 ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Wa = D.forEach ? function(a, b, c) {
  D.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
}, Xa = D.map ? function(a, b, c) {
  return D.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), g = u(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (e[h] = b.call(c, g[h], h, a))
  }
  return e
}, Ya = D.some ? function(a, b, c) {
  return D.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && b.call(c, e[g], g, a)) {
      return!0
    }
  }
  return!1
}, Za = D.every ? function(a, b, c) {
  return D.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && !b.call(c, e[g], g, a)) {
      return!1
    }
  }
  return!0
};
function $a(a, b) {
  return Va(a, b) >= 0
}
function ab(a, b) {
  var c = Va(a, b);
  c >= 0 && D.splice.call(a, c, 1)
}
function bb(a) {
  return D.concat.apply(D, arguments)
}
function cb(a) {
  if(t(a)) {
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
    if(t(d) || (e = ga(d)) && d.hasOwnProperty("callee")) {
      a.push.apply(a, d)
    }else {
      if(e) {
        for(var g = a.length, h = d.length, j = 0;j < h;j++) {
          a[g + j] = d[j]
        }
      }else {
        a.push(d)
      }
    }
  }
}
function eb(a, b, c, d) {
  D.splice.apply(a, fb(arguments, 1))
}
function fb(a, b, c) {
  return arguments.length <= 2 ? D.slice.call(a, b) : D.slice.call(a, b, c)
}
function gb(a, b) {
  D.sort.call(a, b || hb)
}
function hb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function ib(a, b, c) {
  this.Ae = a;
  this.hd = b.name || k;
  this.og = b.Zd || k;
  this.mg = b.lg;
  this.oa = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.oa[b.C] = b
  }
}
function jb(a) {
  a = Ra(a.oa);
  gb(a, function(a, c) {
    return a.C - c.C
  });
  return a
}
;function kb() {
  this.o = {};
  this.Sa = this.constructor.Sa;
  var a = this.Sa.oa, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.oa = b;
  this.Ba = this.cd = k
}
function lb(a, b) {
  for(var c in a.o) {
    a.oa[c] || b.call(a, Number(c), a.o[c])
  }
}
q = kb.prototype;
q.yb = l("Sa");
q.get = function(a, b) {
  return mb(this, a.C, b)
};
q.set = function(a, b) {
  var c = a.C;
  this.o[c] = b;
  this.Ba && (this.Ba[c] = !0)
};
q.add = function(a, b) {
  var c = a.C;
  this.o[c] || (this.o[c] = []);
  this.o[c].push(b)
};
q.clear = function(a) {
  delete this.o[a.C]
};
q.k = function(a) {
  if(!a || this.constructor != a.constructor) {
    return!1
  }
  for(var b = jb(this.yb()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(nb(this, d.C) != nb(a, d.C)) {
      return!1
    }
    if(nb(this, d.C)) {
      var e = Pa(d), g = d.C, h = this.o[g], g = a.o[g];
      if(d.Ya) {
        if(h.length != g.length) {
          return!1
        }
        for(d = 0;d < h.length;d++) {
          if(!(e ? h[d].k(g[d]) : h[d] == g[d])) {
            return!1
          }
        }
      }else {
        if(!(e ? h.k(g) : h == g)) {
          return!1
        }
      }
    }
  }
  return!0
};
q.I = function() {
  for(var a = new this.constructor, b = jb(a.yb()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete a.o[d.C];
    if(nb(this, d.C)) {
      var e = Pa(d);
      if(d.Ya) {
        var g;
        g = d.C;
        ob(this, this.oa[g]);
        g = this.o[g] || [];
        for(var h = 0;h < g.length;h++) {
          a.add(d, e ? g[h].I() : g[h])
        }
      }else {
        g = this.get(d), a.set(d, e ? g.I() : g)
      }
    }
  }
  return a
};
function nb(a, b) {
  return b in a.o && fa(a.o[b])
}
function ob(a, b) {
  if(a.cd) {
    var c = b.C;
    if(!(c in a.Ba)) {
      var d = a.o, e;
      e = a.cd;
      var g = a.o[c];
      if(g == k) {
        e = g
      }else {
        if(b.Ya) {
          var h = [];
          t(g);
          for(var j = 0;j < g.length;j++) {
            h[j] = e.fc(b, g[j])
          }
          e = h
        }else {
          e = e.fc(b, g)
        }
      }
      d[c] = e;
      a.Ba[c] = !0
    }
  }
}
function mb(a, b, c) {
  var d = a.oa[b];
  ob(a, d);
  return d.Ya ? (c = c || 0, c >= 0 && pb(a, b), a.o[b][c]) : (t(a.o[b]), b in a.o ? a.o[b] : k)
}
function pb(a, b) {
  return a.oa[b].Ya ? (nb(a, b) && t(a.o[b]), nb(a, b) ? a.o[b].length : 0) : nb(a, b) ? 1 : 0
}
function qb(a, b) {
  var c = [], d, e;
  for(e in b) {
    b.hasOwnProperty(e) && (e == 0 ? d = b[0] : c.push(new Ja(a, e, b[e])))
  }
  a.Sa = new ib(a, d, c);
  a.yb = function() {
    return a.Sa
  }
}
;function rb() {
}
rb.prototype.gc = function(a, b) {
  return Pa(a) ? this.Qb(b) : b
};
rb.prototype.Oc = function(a) {
  new a.Ae;
  f(Error("Unimplemented"))
};
rb.prototype.fc = function(a, b) {
  if(Pa(a)) {
    return this.Oc(a.Ce.Sa, b)
  }
  if(!a.Vd) {
    return b
  }
  var c = a.Ce;
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
B(sb, rb);
sb.prototype.Oc = function(a, b) {
  var c = new a.Ae;
  c.cd = this;
  c.o = b;
  c.Ba = {};
  return c
};
function tb() {
}
B(tb, sb);
tb.prototype.Qb = function(a) {
  for(var b = jb(a.yb()), c = [], d = 0;d < b.length;d++) {
    var e = b[d];
    if(nb(a, e.C)) {
      var g = e.C;
      if(e.Ya) {
        c[g] = [];
        for(var h = 0;h < pb(a, e.C);h++) {
          c[g][h] = this.gc(e, a.get(e, h))
        }
      }else {
        c[g] = this.gc(e, a.get(e))
      }
    }
  }
  lb(a, function(a, b) {
    c[a] = b
  });
  return c
};
tb.prototype.gc = function(a, b) {
  return a.wb == 8 ? b ? 1 : 0 : rb.prototype.gc.apply(this, arguments)
};
tb.prototype.fc = function(a, b) {
  return a.wb == 8 ? b === 1 : rb.prototype.fc.apply(this, arguments)
};
function ub(a) {
  return w(a) || typeof a == "object" && w(a.call) && w(a.apply)
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
function wb() {
}
wb.prototype.Qb = function(a) {
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
      if(t(b)) {
        var d = b.length;
        c.push("[");
        for(var e = "", g = 0;g < d;g++) {
          c.push(e), xb(a, b[g], c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(e in b) {
        Object.prototype.hasOwnProperty.call(b, e) && (g = b[e], typeof g != "function" && (c.push(d), yb(e, c), c.push(":"), xb(a, g, c), d = ","))
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
        if(ub(a.A)) {
          a.A(b, c)
        }else {
          if(ub(a.ff)) {
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
                      var j = d[h++], m = ia(j) ? "o" + x(j) : (typeof j).charAt(0) + j;
                      Object.prototype.hasOwnProperty.call(e, m) || (e[m] = !0, d[g++] = j)
                    }
                    d.length = g;
                    b.push("{");
                    e = "";
                    for(h = 0;h < d.length;h++) {
                      g = d[h], Object.prototype.hasOwnProperty.call(a, g) && (j = a[g], b.push(e), yb(g, b), b.push(": "), Bb(j, b, c), e = ", ")
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
  Bb(a, b, c)
}
function G(a) {
  var b = [];
  E(a, b, i);
  return b.join("")
}
;function Cb(a) {
  if(typeof a.t == "function") {
    a = a.t()
  }else {
    if(ga(a) || u(a)) {
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
  if(u(a)) {
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
  if(typeof a.ra == "function") {
    return a.ra()
  }
  if(typeof a.L != "function") {
    if(ga(a) || u(a)) {
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
    if(ga(a) || u(a)) {
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
  if(ga(a) || u(a)) {
    return Za(a, b, i)
  }
  for(var c = Eb(a), d = Db(a), e = d.length, g = 0;g < e;g++) {
    if(!b.call(i, d[g], c && c[g], a)) {
      return!1
    }
  }
  return!0
}
;function H(a, b) {
  this.m = {};
  this.j = [];
  var c = arguments.length;
  if(c > 1) {
    c % 2 && f(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.Gc(a)
  }
}
q = H.prototype;
q.e = 0;
q.Ed = 0;
q.t = l("e");
q.L = function() {
  Hb(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.m[this.j[b]])
  }
  return a
};
q.ra = function() {
  Hb(this);
  return this.j.concat()
};
q.P = function(a) {
  return Ib(this.m, a)
};
q.bc = function(a) {
  for(var b = 0;b < this.j.length;b++) {
    var c = this.j[b];
    if(Ib(this.m, c) && this.m[c] == a) {
      return!0
    }
  }
  return!1
};
q.k = function(a, b) {
  if(this === a) {
    return!0
  }
  if(this.e != a.t()) {
    return!1
  }
  var c = b || Jb;
  Hb(this);
  for(var d, e = 0;d = this.j[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return!1
    }
  }
  return!0
};
function Jb(a, b) {
  return a === b
}
q.Ia = function() {
  return this.e == 0
};
q.clear = function() {
  this.m = {};
  this.Ed = this.e = this.j.length = 0
};
q.remove = function(a) {
  return Ib(this.m, a) ? (delete this.m[a], this.e--, this.Ed++, this.j.length > 2 * this.e && Hb(this), !0) : !1
};
function Hb(a) {
  if(a.e != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      Ib(a.m, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.e != a.j.length) {
    for(var e = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], Ib(e, d) || (a.j[c++] = d, e[d] = 1), b++
    }
    a.j.length = c
  }
}
q.get = function(a, b) {
  return Ib(this.m, a) ? this.m[a] : b
};
q.set = function(a, b) {
  Ib(this.m, a) || (this.e++, this.j.push(a), this.Ed++);
  this.m[a] = b
};
q.Gc = function(a) {
  var b;
  a instanceof H ? (b = a.ra(), a = a.L()) : (b = Sa(a), a = Ra(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
q.I = function() {
  return new H(this)
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
  this.Pa = a;
  this.Ma = b
}
Mb.prototype.k = function(a) {
  return a instanceof Mb && this.Pa == a.Pa && this.Ma.join(",") == a.Ma
};
Mb.prototype.A = function(a, b) {
  a.push("new SACK(", String(this.Pa), ", ");
  E(this.Ma, a, b);
  a.push(")")
};
function Nb() {
  this.G = new H
}
q = Nb.prototype;
q.Ra = -1;
q.ya = 0;
q.append = function(a) {
  var b = Lb(a);
  this.G.set(this.Ra + 1, [a, b]);
  this.Ra += 1;
  this.ya += b
};
q.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
q.A = function(a) {
  a.push("<Queue with ", String(this.G.t()), " item(s), counter=#", String(this.Ra), ", size=", String(this.ya), ">")
};
function Ob(a) {
  Hb(a.G);
  gb(a.G.j);
  return a.G.j
}
function Pb() {
  this.za = new H
}
Pb.prototype.$a = -1;
Pb.prototype.ya = 0;
function Qb(a) {
  var b = a.za.ra();
  gb(b);
  return new Mb(a.$a, b)
}
var Rb = {};
function Sb() {
  return!0
}
;var Tb, Ub, Vb, Wb, Xb;
function Yb() {
  return r.navigator ? r.navigator.userAgent : k
}
Xb = Wb = Vb = Ub = Tb = !1;
var Zb;
if(Zb = Yb()) {
  var $b = r.navigator;
  Tb = Zb.indexOf("Opera") == 0;
  Ub = !Tb && Zb.indexOf("MSIE") != -1;
  Wb = (Vb = !Tb && Zb.indexOf("WebKit") != -1) && Zb.indexOf("Mobile") != -1;
  Xb = !Tb && !Vb && $b.product == "Gecko"
}
var ac = Tb, I = Ub, bc = Xb, J = Vb, cc = Wb, dc = r.navigator, ec = (dc && dc.platform || "").indexOf("Mac") != -1, fc;
a: {
  var gc = "", hc;
  if(ac && r.opera) {
    var ic = r.opera.version, gc = typeof ic == "function" ? ic() : ic
  }else {
    if(bc ? hc = /rv\:([^\);]+)(\)|;)/ : I ? hc = /MSIE\s+([^\);]+)(\)|;)/ : J && (hc = /WebKit\/(\S+)/), hc) {
      var jc = hc.exec(Yb()), gc = jc ? jc[1] : ""
    }
  }
  if(I) {
    var kc, lc = r.document;
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
function qc() {
  return oc[9] || (oc[9] = I && document.documentMode && document.documentMode >= 9)
}
;var rc;
var sc = !I || qc(), tc = I && !nc("8");
function K() {
}
K.prototype.Y = !1;
K.prototype.d = function() {
  if(!this.Y) {
    this.Y = !0, this.b()
  }
};
K.prototype.b = function() {
  this.of && uc.apply(k, this.of)
};
function uc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ga(d) ? uc.apply(k, d) : d && typeof d.d == "function" && d.d()
  }
}
;function vc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
B(vc, K);
q = vc.prototype;
q.b = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
q.Ka = !1;
q.Nb = !0;
q.stopPropagation = function() {
  this.Ka = !0
};
q.preventDefault = function() {
  this.Nb = !1
};
function wc(a) {
  wc[" "](a);
  return a
}
wc[" "] = s;
function xc(a, b) {
  a && this.Ha(a, b)
}
B(xc, vc);
var yc = [1, 4, 2];
q = xc.prototype;
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
q.ctrlKey = !1;
q.altKey = !1;
q.shiftKey = !1;
q.metaKey = !1;
q.Nf = !1;
q.ea = k;
q.Ha = function(a, b) {
  var c = this.type = a.type;
  vc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(bc) {
      var e;
      a: {
        try {
          wc(d.nodeName);
          e = !0;
          break a
        }catch(g) {
        }
        e = !1
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
  this.Nf = ec ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ea = a;
  delete this.Nb;
  delete this.Ka
};
function zc(a) {
  return sc ? a.ea.button == 0 : a.type == "click" ? !0 : !!(a.ea.button & yc[0])
}
q.stopPropagation = function() {
  xc.c.stopPropagation.call(this);
  this.ea.stopPropagation ? this.ea.stopPropagation() : this.ea.cancelBubble = !0
};
q.preventDefault = function() {
  xc.c.preventDefault.call(this);
  var a = this.ea;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, tc) {
      try {
        if(a.ctrlKey || a.keyCode >= 112 && a.keyCode <= 123) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
q.b = function() {
  xc.c.b.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ea = k
};
function Ac() {
}
var Bc = 0;
q = Ac.prototype;
q.key = 0;
q.La = !1;
q.Kc = !1;
q.Ha = function(a, b, c, d, e, g) {
  w(a) ? this.qe = !0 : a && a.handleEvent && w(a.handleEvent) ? this.qe = !1 : f(Error("Invalid listener argument"));
  this.bb = a;
  this.Me = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.lc = g;
  this.Kc = !1;
  this.key = ++Bc;
  this.La = !1
};
q.handleEvent = function(a) {
  return this.qe ? this.bb.call(this.lc || this.src, a) : this.bb.handleEvent.call(this.bb, a)
};
var Cc, Dc = (Cc = "ScriptEngine" in r && r.ScriptEngine() == "JScript") ? r.ScriptEngineMajorVersion() + "." + r.ScriptEngineMinorVersion() + "." + r.ScriptEngineBuildVersion() : "0";
function L(a, b) {
  this.we = b;
  this.Ea = [];
  a > this.we && f(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.Ea.push(this.ca ? this.ca() : {})
  }
}
B(L, K);
L.prototype.ca = k;
L.prototype.Wd = k;
L.prototype.getObject = function() {
  return this.Ea.length ? this.Ea.pop() : this.ca ? this.ca() : {}
};
function Ec(a, b) {
  a.Ea.length < a.we ? a.Ea.push(b) : Fc(a, b)
}
function Fc(a, b) {
  if(a.Wd) {
    a.Wd(b)
  }else {
    if(ia(b)) {
      if(w(b.d)) {
        b.d()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
L.prototype.b = function() {
  L.c.b.call(this);
  for(var a = this.Ea;a.length;) {
    Fc(this, a.pop())
  }
  delete this.Ea
};
var Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc;
(function() {
  function a() {
    return{e:0, U:0}
  }
  function b() {
    return[]
  }
  function c() {
    function a(b) {
      b = h.call(a.src, a.key, b);
      if(!b) {
        return b
      }
    }
    return a
  }
  function d() {
    return new Ac
  }
  function e() {
    return new xc
  }
  var g = Cc && !(Fa(Dc, "5.7") >= 0), h;
  Lc = function(a) {
    h = a
  };
  if(g) {
    Gc = function() {
      return j.getObject()
    };
    Hc = function(a) {
      Ec(j, a)
    };
    Ic = function() {
      return m.getObject()
    };
    Jc = function(a) {
      Ec(m, a)
    };
    Kc = function() {
      return n.getObject()
    };
    Mc = function() {
      Ec(n, c())
    };
    Nc = function() {
      return F.getObject()
    };
    Oc = function(a) {
      Ec(F, a)
    };
    Pc = function() {
      return p.getObject()
    };
    Qc = function(a) {
      Ec(p, a)
    };
    var j = new L(0, 600);
    j.ca = a;
    var m = new L(0, 600);
    m.ca = b;
    var n = new L(0, 600);
    n.ca = c;
    var F = new L(0, 600);
    F.ca = d;
    var p = new L(0, 600);
    p.ca = e
  }else {
    Gc = a, Hc = s, Ic = b, Jc = s, Kc = c, Mc = s, Nc = d, Oc = s, Pc = e, Qc = s
  }
})();
var Rc = {}, M = {}, Sc = {}, Tc = {};
function N(a, b, c, d, e) {
  if(b) {
    if(t(b)) {
      for(var g = 0;g < b.length;g++) {
        N(a, b[g], c, d, e)
      }
      return k
    }else {
      var d = !!d, h = M;
      b in h || (h[b] = Gc());
      h = h[b];
      d in h || (h[d] = Gc(), h.e++);
      var h = h[d], j = x(a), m;
      h.U++;
      if(h[j]) {
        m = h[j];
        for(g = 0;g < m.length;g++) {
          if(h = m[g], h.bb == c && h.lc == e) {
            if(h.La) {
              break
            }
            return m[g].key
          }
        }
      }else {
        m = h[j] = Ic(), h.e++
      }
      g = Kc();
      g.src = a;
      h = Nc();
      h.Ha(c, g, a, b, d, e);
      c = h.key;
      g.key = c;
      m.push(h);
      Rc[c] = h;
      Sc[j] || (Sc[j] = Ic());
      Sc[j].push(h);
      a.addEventListener ? (a == r || !a.Rd) && a.addEventListener(b, g, d) : a.attachEvent(b in Tc ? Tc[b] : Tc[b] = "on" + b, g);
      return c
    }
  }else {
    f(Error("Invalid event type"))
  }
}
function Uc(a, b, c, d, e) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      Uc(a, b[g], c, d, e)
    }
    return k
  }
  a = N(a, b, c, d, e);
  Rc[a].Kc = !0;
  return a
}
function Vc(a, b, c, d, e) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      Vc(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = Wc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].bb == c && a[g].capture == d && a[g].lc == e) {
          O(a[g].key);
          break
        }
      }
    }
  }
}
function O(a) {
  if(!Rc[a]) {
    return!1
  }
  var b = Rc[a];
  if(b.La) {
    return!1
  }
  var c = b.src, d = b.type, e = b.Me, g = b.capture;
  c.removeEventListener ? (c == r || !c.Rd) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in Tc ? Tc[d] : Tc[d] = "on" + d, e);
  c = x(c);
  e = M[d][g][c];
  if(Sc[c]) {
    var h = Sc[c];
    ab(h, b);
    h.length == 0 && delete Sc[c]
  }
  b.La = !0;
  e.Ee = !0;
  Xc(d, g, c, e);
  delete Rc[a];
  return!0
}
function Xc(a, b, c, d) {
  if(!d.qc && d.Ee) {
    for(var e = 0, g = 0;e < d.length;e++) {
      if(d[e].La) {
        var h = d[e].Me;
        h.src = k;
        Mc(h);
        Oc(d[e])
      }else {
        e != g && (d[g] = d[e]), g++
      }
    }
    d.length = g;
    d.Ee = !1;
    g == 0 && (Jc(d), delete M[a][b][c], M[a][b].e--, M[a][b].e == 0 && (Hc(M[a][b]), delete M[a][b], M[a].e--), M[a].e == 0 && (Hc(M[a]), delete M[a]))
  }
}
function Yc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Qa(Sc, function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          O(g.key), c++
        }
      }
    })
  }else {
    if(a = x(a), Sc[a]) {
      for(var a = Sc[a], e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          O(g.key), c++
        }
      }
    }
  }
}
function Wc(a, b, c) {
  var d = M;
  return b in d && (d = d[b], c in d && (d = d[c], a = x(a), d[a])) ? d[a] : k
}
function Zc(a, b, c, d, e) {
  var g = 1, b = x(b);
  if(a[b]) {
    a.U--;
    a = a[b];
    a.qc ? a.qc++ : a.qc = 1;
    try {
      for(var h = a.length, j = 0;j < h;j++) {
        var m = a[j];
        m && !m.La && (g &= $c(m, e) !== !1)
      }
    }finally {
      a.qc--, Xc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function $c(a, b) {
  var c = a.handleEvent(b);
  a.Kc && O(a.key);
  return c
}
Lc(function(a, b) {
  if(!Rc[a]) {
    return!0
  }
  var c = Rc[a], d = c.type, e = M;
  if(!(d in e)) {
    return!0
  }
  var e = e[d], g, h;
  rc === i && (rc = I && !r.addEventListener);
  if(rc) {
    g = b || ca("window.event");
    var j = !0 in e, m = !1 in e;
    if(j) {
      if(g.keyCode < 0 || g.returnValue != i) {
        return!0
      }
      a: {
        var n = !1;
        if(g.keyCode == 0) {
          try {
            g.keyCode = -1;
            break a
          }catch(F) {
            n = !0
          }
        }
        if(n || g.returnValue == i) {
          g.returnValue = !0
        }
      }
    }
    n = Pc();
    n.Ha(g, this);
    g = !0;
    try {
      if(j) {
        for(var p = Ic(), v = n.currentTarget;v;v = v.parentNode) {
          p.push(v)
        }
        h = e[!0];
        h.U = h.e;
        for(var y = p.length - 1;!n.Ka && y >= 0 && h.U;y--) {
          n.currentTarget = p[y], g &= Zc(h, p[y], d, !0, n)
        }
        if(m) {
          h = e[!1];
          h.U = h.e;
          for(y = 0;!n.Ka && y < p.length && h.U;y++) {
            n.currentTarget = p[y], g &= Zc(h, p[y], d, !1, n)
          }
        }
      }else {
        g = $c(c, n)
      }
    }finally {
      if(p) {
        p.length = 0, Jc(p)
      }
      n.d();
      Qc(n)
    }
    return g
  }
  d = new xc(b, this);
  try {
    g = $c(c, d)
  }finally {
    d.d()
  }
  return g
});
var ad = 0;
function bd() {
}
B(bd, K);
q = bd.prototype;
q.Rd = !0;
q.sc = k;
q.sd = aa("sc");
q.addEventListener = function(a, b, c, d) {
  N(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Vc(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = M;
  if(b in c) {
    if(u(a)) {
      a = new vc(a, this)
    }else {
      if(a instanceof vc) {
        a.target = a.target || this
      }else {
        var d = a, a = new vc(b, this);
        Ua(a, d)
      }
    }
    var d = 1, e, c = c[b], b = !0 in c, g;
    if(b) {
      e = [];
      for(g = this;g;g = g.sc) {
        e.push(g)
      }
      g = c[!0];
      g.U = g.e;
      for(var h = e.length - 1;!a.Ka && h >= 0 && g.U;h--) {
        a.currentTarget = e[h], d &= Zc(g, e[h], a.type, !0, a) && a.Nb != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.U = g.e, b) {
        for(h = 0;!a.Ka && h < e.length && g.U;h++) {
          a.currentTarget = e[h], d &= Zc(g, e[h], a.type, !1, a) && a.Nb != !1
        }
      }else {
        for(e = this;!a.Ka && e && g.U;e = e.sc) {
          a.currentTarget = e, d &= Zc(g, e, a.type, !1, a) && a.Nb != !1
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
q.b = function() {
  bd.c.b.call(this);
  Yc(this);
  this.sc = k
};
var cd = r.window;
ad++;
ad++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function dd(a, b) {
  this.$b = [];
  this.Kd = a;
  this.Td = b || k
}
q = dd.prototype;
q.pa = !1;
q.Ab = !1;
q.Ib = 0;
q.vd = !1;
q.jf = !1;
q.Ic = 0;
q.cancel = function(a) {
  if(this.pa) {
    this.Mb instanceof dd && this.Mb.cancel()
  }else {
    if(this.u) {
      var b = this.u;
      delete this.u;
      a ? b.cancel(a) : (b.Ic--, b.Ic <= 0 && b.cancel())
    }
    this.Kd ? this.Kd.call(this.Td, this) : this.vd = !0;
    this.pa || this.cc(new ed(this))
  }
};
q.Od = function(a, b) {
  fd(this, a, b);
  this.Ib--;
  this.Ib == 0 && this.pa && gd(this)
};
function fd(a, b, c) {
  a.pa = !0;
  a.Mb = c;
  a.Ab = !b;
  gd(a)
}
function hd(a) {
  if(a.pa) {
    a.vd || f(new id(a)), a.vd = !1
  }
}
q.la = function(a) {
  hd(this);
  fd(this, !0, a)
};
q.cc = function(a) {
  hd(this);
  fd(this, !1, a)
};
function jd(a, b) {
  kd(a, b, k, i)
}
function kd(a, b, c, d) {
  a.$b.push([b, c, d]);
  a.pa && gd(a)
}
function ld(a) {
  return Ya(a.$b, function(a) {
    return w(a[1])
  })
}
function gd(a) {
  a.Cd && a.pa && ld(a) && (r.clearTimeout(a.Cd), delete a.Cd);
  a.u && (a.u.Ic--, delete a.u);
  for(var b = a.Mb, c = !1, d = !1;a.$b.length && a.Ib == 0;) {
    var e = a.$b.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.Ab ? h : g) {
      try {
        var j = g.call(e || a.Td, b);
        if(fa(j)) {
          a.Ab = a.Ab && (j == b || j instanceof Error), a.Mb = b = j
        }
        b instanceof dd && (d = !0, a.Ib++)
      }catch(m) {
        b = m, a.Ab = !0, ld(a) || (c = !0)
      }
    }
  }
  a.Mb = b;
  if(d && a.Ib) {
    kd(b, z(a.Od, a, !0), z(a.Od, a, !1)), b.jf = !0
  }
  if(c) {
    a.Cd = r.setTimeout(function() {
      f(b)
    }, 0)
  }
}
function md(a) {
  var b = new dd;
  b.la(a);
  return b
}
function id(a) {
  C.call(this);
  this.nf = a
}
B(id, C);
id.prototype.message = "Already called";
function ed(a) {
  C.call(this);
  this.nf = a
}
B(ed, C);
ed.prototype.message = "Deferred was cancelled";
function nd(a) {
  this.H = a;
  this.Qc = [];
  this.Xd = [];
  this.kg = z(this.fg, this)
}
nd.prototype.eg = k;
nd.prototype.fg = function() {
  this.eg = k;
  var a = this.Qc;
  this.Qc = [];
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
  if(this.Qc.length == 0) {
    a = this.Xd;
    this.Xd = [];
    for(b = 0;b < a.length;b++) {
      a[b].la(k)
    }
  }
};
var od = new nd(r.window);
function pd() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ A()).toString(36)
}
function qd(a) {
  return a.substr(0, a.length - 1)
}
var rd = /^(0|[1-9]\d*)$/, sd = /^(0|\-?[1-9]\d*)$/;
function td(a) {
  var b = ud;
  return rd.test(a) && (a = parseInt(a, 10), a <= b) ? a : k
}
;function vd(a) {
  this.m = new H;
  a && this.Gc(a)
}
function wd(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + x(a) : b.substr(0, 1) + a
}
q = vd.prototype;
q.t = function() {
  return this.m.t()
};
q.add = function(a) {
  this.m.set(wd(a), a)
};
q.Gc = function(a) {
  for(var a = Db(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
q.qd = function(a) {
  for(var a = Db(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
q.remove = function(a) {
  return this.m.remove(wd(a))
};
q.clear = function() {
  this.m.clear()
};
q.Ia = function() {
  return this.m.Ia()
};
q.contains = function(a) {
  return this.m.P(wd(a))
};
q.L = function() {
  return this.m.L()
};
q.I = function() {
  return new vd(this)
};
q.k = function(a) {
  return this.t() == Cb(a) && xd(this, a)
};
function xd(a, b) {
  var c = Cb(b);
  if(a.t() > c) {
    return!1
  }
  !(b instanceof vd) && c > 5 && (b = new vd(b));
  return Gb(a, function(a) {
    if(typeof b.contains == "function") {
      a = b.contains(a)
    }else {
      if(typeof b.bc == "function") {
        a = b.bc(a)
      }else {
        if(ga(b) || u(b)) {
          a = $a(b, a)
        }else {
          a: {
            for(var c in b) {
              if(b[c] == a) {
                a = !0;
                break a
              }
            }
            a = !1
          }
        }
      }
    }
    return a
  })
}
;function yd(a) {
  return zd(a || arguments.callee.caller, [])
}
function zd(a, b) {
  var c = [];
  if($a(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(Ad(a) + "(");
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
            g = (g = Ad(g)) ? g : "[fn]";
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
        c.push(zd(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Ad(a) {
  if(Bd[a]) {
    return Bd[a]
  }
  a = String(a);
  if(!Bd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Bd[a] = b ? b[1] : "[Anonymous]"
  }
  return Bd[a]
}
var Bd = {};
function Cd(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Cd.prototype.Sf = 0;
Cd.prototype.Sc = k;
Cd.prototype.Rc = k;
var Dd = 0;
Cd.prototype.reset = function(a, b, c, d, e) {
  this.Sf = typeof e == "number" ? e : Dd++;
  this.We = d || A();
  this.S = a;
  this.Be = b;
  this.ve = c;
  delete this.Sc;
  delete this.Rc
};
Cd.prototype.kb = aa("S");
function Ed(a) {
  this.hd = a
}
Ed.prototype.u = k;
Ed.prototype.S = k;
Ed.prototype.ma = k;
Ed.prototype.Cb = k;
function P(a, b) {
  this.name = a;
  this.value = b
}
P.prototype.toString = l("name");
var Fd = new P("SHOUT", 1200), Gd = new P("SEVERE", 1E3), Hd = new P("WARNING", 900), Id = new P("INFO", 800), Jd = new P("CONFIG", 700), Kd = new P("FINE", 500), Ld = new P("FINEST", 300), Md = new P("ALL", 0), Nd = [new P("OFF", Infinity), Fd, Gd, Hd, Id, Jd, Kd, new P("FINER", 400), Ld, Md], Pd = k;
function Qd(a) {
  if(!Pd) {
    Pd = {};
    for(var b = 0, c;c = Nd[b];b++) {
      Pd[c.value] = c, Pd[c.name] = c
    }
  }
  return Pd[a] || k
}
q = Ed.prototype;
q.getParent = l("u");
q.kb = aa("S");
function Rd(a) {
  if(a.S) {
    return a.S
  }
  if(a.u) {
    return Rd(a.u)
  }
  Ia("Root logger has no level set.");
  return k
}
q.log = function(a, b, c) {
  if(a.value >= Rd(this).value) {
    a = this.xf(a, b, c);
    b = "log:" + a.Be;
    r.console && (r.console.timeStamp ? r.console.timeStamp(b) : r.console.markTimeline && r.console.markTimeline(b));
    r.msWriteProfilerMark && r.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.Cb) {
        for(var e = 0, g = i;g = c.Cb[e];e++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
q.xf = function(a, b, c) {
  var d = new Cd(a, String(b), this.hd);
  if(c) {
    d.Sc = c;
    var e;
    var g = arguments.callee.caller;
    try {
      var h;
      var j = ca("window.location.href");
      if(u(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var m, n, F = !1;
        try {
          m = c.lineNumber || c.qg || "Not available"
        }catch(p) {
          m = "Not available", F = !0
        }
        try {
          n = c.fileName || c.filename || c.sourceURL || j
        }catch(v) {
          n = "Not available", F = !0
        }
        h = F || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:m, fileName:n, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + ya(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + ya(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ya(yd(g) + "-> ")
    }catch(y) {
      e = "Exception trying to expose exception! You win, we lose. " + y
    }
    d.Rc = e
  }
  return d
};
function Sd(a, b) {
  a.log(Gd, b, i)
}
function Td(a, b) {
  a.log(Hd, b, i)
}
q.info = function(a, b) {
  this.log(Id, a, b)
};
function Q(a, b) {
  a.log(Kd, b, i)
}
function R(a, b) {
  a.log(Ld, b, i)
}
var Ud = {}, Vd = k;
function Wd() {
  Vd || (Vd = new Ed(""), Ud[""] = Vd, Vd.kb(Jd))
}
function Xd() {
  Wd();
  return Vd
}
function S(a) {
  Wd();
  var b;
  if(!(b = Ud[a])) {
    b = new Ed(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = S(a.substr(0, c));
    if(!c.ma) {
      c.ma = {}
    }
    c.ma[d] = b;
    b.u = c;
    Ud[a] = b
  }
  return b
}
;S("cw.net.FlashSocket");
S("cw.net.FlashSocketTracker");
function Yd(a) {
  this.na = a;
  this.Jc = []
}
B(Yd, K);
Yd.prototype.a = S("cw.net.FlashSocketConduit");
Yd.prototype.Hd = function(a) {
  this.Jc ? (R(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Jc.push.apply(this.Jc, a)) : (R(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.wd.Hd(a))
};
Yd.prototype.Md = function(a, b) {
  this.wd.Md(a, b)
};
Yd.prototype.b = function() {
  this.a.info("in disposeInternal.");
  Yd.c.b.call(this);
  this.wd.d();
  delete this.na
};
function Zd() {
  var a = Math.pow(10, 9);
  return a + Math.random() * (Math.pow(10, 10) - a)
}
;var ud = Math.pow(2, 53);
var $d = {ff:o("<cw.eq.Wildcard>")};
function ae(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function be(a, b, c) {
  var d = ea(a), e = ea(b);
  if(a == $d || b == $d) {
    return!0
  }else {
    if(a != k && typeof a.k == "function") {
      return c && c.push("running custom equals function on left object"), a.k(b, c)
    }else {
      if(b != k && typeof b.k == "function") {
        return c && c.push("running custom equals function on right object"), b.k(a, c)
      }else {
        if(ae(d) || ae(e)) {
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
                    c && c.push("array length mismatch: " + a.length + ", " + b.length), a = !1
                  }else {
                    d = 0;
                    for(e = a.length;d < e;d++) {
                      if(!be(a[d], b[d], c)) {
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
                if(a.ef == Sb && b.ef == Sb) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = !1;
                        break a
                      }
                      if(!be(a[g], b[g], c)) {
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
;function T(a) {
  C.call(this, a)
}
B(T, C);
T.prototype.name = "cw.net.InvalidFrame";
function U() {
  var a = [];
  this.R(a);
  return a.join("")
}
function ce() {
}
ce.prototype.k = function(a, b) {
  return!(a instanceof ce) ? !1 : be(de(this), de(a), b)
};
ce.prototype.A = function(a, b) {
  a.push("<HelloFrame properties=");
  E(de(this), a, b);
  a.push(">")
};
function de(a) {
  return[a.nb, a.Le, a.ke, a.Pe, a.Ub, a.zd, a.De, a.ze, a.fd, a.xe, a.af, a.Ve, a.W, a.pc]
}
ce.prototype.O = U;
ce.prototype.R = function(a) {
  var b = {};
  b.tnum = this.nb;
  b.ver = this.Le;
  b.format = this.ke;
  b["new"] = this.Pe;
  b.id = this.Ub;
  b.ming = this.zd;
  b.pad = this.De;
  b.maxb = this.ze;
  if(fa(this.fd)) {
    b.maxt = this.fd
  }
  b.maxia = this.xe;
  b.tcpack = this.af;
  b.eeds = this.Ve;
  b.sack = this.W instanceof Mb ? qd((new V(this.W)).O()) : this.W;
  b.seenack = this.pc instanceof Mb ? qd((new V(this.pc)).O()) : this.pc;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new wb).Qb(b), "H")
};
function ee(a) {
  this.mb = a
}
ee.prototype.k = function(a) {
  return a instanceof ee && this.mb == a.mb
};
ee.prototype.A = function(a, b) {
  a.push("new StringFrame(");
  E(this.mb, a, b);
  a.push(")")
};
ee.prototype.O = U;
ee.prototype.R = function(a) {
  a.push(this.mb, " ")
};
function fe(a) {
  this.ac = a
}
fe.prototype.k = function(a) {
  return a instanceof fe && this.ac == a.ac
};
fe.prototype.A = function(a, b) {
  a.push("new CommentFrame(");
  E(this.ac, a, b);
  a.push(")")
};
fe.prototype.O = U;
fe.prototype.R = function(a) {
  a.push(this.ac, "^")
};
function ge(a) {
  this.Pb = a
}
ge.prototype.k = function(a) {
  return a instanceof ge && this.Pb == a.Pb
};
ge.prototype.A = function(a) {
  a.push("new SeqNumFrame(", String(this.Pb), ")")
};
ge.prototype.O = U;
ge.prototype.R = function(a) {
  a.push(String(this.Pb), "N")
};
function he(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return k
  }
  a: {
    var c = b[1], a = ud;
    if(sd.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
      var g = td(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Mb(a, c)
}
function V(a) {
  this.W = a
}
V.prototype.k = function(a, b) {
  return a instanceof V && this.W.k(a.W, b)
};
V.prototype.A = function(a, b) {
  a.push("new SackFrame(");
  E(this.W, a, b);
  a.push(")")
};
V.prototype.O = U;
V.prototype.R = function(a) {
  var b = this.W;
  a.push(b.Ma.join(","), "|", String(b.Pa));
  a.push("A")
};
function ie(a) {
  this.Fb = a
}
ie.prototype.k = function(a, b) {
  return a instanceof ie && this.Fb.k(a.Fb, b)
};
ie.prototype.A = function(a, b) {
  a.push("new StreamStatusFrame(");
  E(this.Fb, a, b);
  a.push(")")
};
ie.prototype.O = U;
ie.prototype.R = function(a) {
  var b = this.Fb;
  a.push(b.Ma.join(","), "|", String(b.Pa));
  a.push("T")
};
function je() {
}
je.prototype.A = function(a) {
  a.push("new StreamCreatedFrame()")
};
je.prototype.k = function(a) {
  return a instanceof je
};
je.prototype.O = U;
je.prototype.R = function(a) {
  a.push("C")
};
function ke() {
}
ke.prototype.A = function(a) {
  a.push("new YouCloseItFrame()")
};
ke.prototype.k = function(a) {
  return a instanceof ke
};
ke.prototype.O = U;
ke.prototype.R = function(a) {
  a.push("Y")
};
function le(a, b) {
  this.Kb = a;
  this.qb = b
}
le.prototype.k = function(a) {
  return a instanceof le && this.Kb == a.Kb && this.qb == a.qb
};
le.prototype.A = function(a, b) {
  a.push("new ResetFrame(");
  E(this.Kb, a, b);
  a.push(", ", String(this.qb), ")")
};
le.prototype.O = U;
le.prototype.R = function(a) {
  a.push(this.Kb, "|", String(Number(this.qb)), "!")
};
var me = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function ne(a) {
  this.reason = a
}
ne.prototype.k = function(a) {
  return a instanceof ne && this.reason == a.reason
};
ne.prototype.A = function(a, b) {
  a.push("new TransportKillFrame(");
  E(this.reason, a, b);
  a.push(")")
};
ne.prototype.O = U;
ne.prototype.R = function(a) {
  a.push(this.reason, "K")
};
function oe(a) {
  a || f(new T("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new ee(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = he(qd(a)), a == k && f(new T("bad sack")), new V(a)
    }else {
      if(b == "N") {
        return a = td(qd(a)), a == k && f(new T("bad seqNum")), new ge(a)
      }else {
        if(b == "T") {
          return a = he(qd(a)), a == k && f(new T("bad lastSackSeen")), new ie(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && f(new T("leading garbage")), new ke
          }else {
            if(b == "^") {
              return new fe(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && f(new T("leading garbage")), new je
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && f(new T("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == k && f(new T("bad applicationLevel")), new le(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = me[a], a == k && f(new T("unknown kill reason: " + a)), new ne(a)
                  }else {
                    f(new T("Invalid frame type " + b))
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
;var pe = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function qe(a, b) {
  var c = a.match(pe), d = b.match(pe);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;var re;
function se(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function te(a, b) {
  var c = se(a), d = fb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    $a(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function ue(a, b) {
  var c = se(a), d = fb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < e.length;h++) {
    $a(d, e[h]) && (eb(e, h--, 1), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
;function ve(a, b) {
  this.width = a;
  this.height = b
}
q = ve.prototype;
q.I = function() {
  return new ve(this.width, this.height)
};
q.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
q.Ia = function() {
  return!(this.width * this.height)
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
var we = !I || qc();
!bc && !I || I && qc() || bc && nc("1.9.1");
var xe = I && !nc("9");
function ye(a, b) {
  this.x = fa(a) ? a : 0;
  this.y = fa(b) ? b : 0
}
ye.prototype.I = function() {
  return new ye(this.x, this.y)
};
ye.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function ze(a) {
  return a ? new Ae(Be(a)) : re || (re = new Ae)
}
function W(a) {
  return u(a) ? document.getElementById(a) : a
}
function Ce(a, b) {
  Qa(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in De ? a.setAttribute(De[d], b) : d.lastIndexOf("aria-", 0) == 0 ? a.setAttribute(d, b) : a[d] = b
  })
}
var De = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Ee() {
  var a = Fe.N.parentWindow || Fe.N.defaultView || window, b = a.document;
  if(J && !nc("500") && !cc) {
    typeof a.innerHeight == "undefined" && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new ve(a.innerWidth, b)
  }
  a = b.compatMode == "CSS1Compat" ? b.documentElement : b.body;
  return new ve(a.clientWidth, a.clientHeight)
}
function Ge(a, b, c) {
  return He(document, arguments)
}
function He(a, b) {
  var c = b[0], d = b[1];
  if(!we && d && (d.name || d.type)) {
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
    u(d) ? c.className = d : t(d) ? te.apply(k, [c].concat(d)) : Ce(c, d)
  }
  b.length > 2 && Ie(a, c, b, 2);
  return c
}
function Ie(a, b, c, d) {
  function e(c) {
    c && b.appendChild(u(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && g.nodeType > 0) ? Wa(Je(g) ? cb(g) : g, e) : e(g)
  }
}
function Ke(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Le(a, b) {
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
function Be(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
var Me = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Ne = {IMG:" ", BR:"\n"};
function Oe(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, typeof a == "number" && a >= 0 && a < 32768) : !1
}
function Pe(a) {
  var b = [];
  Qe(a, b, !1);
  return b.join("")
}
function Qe(a, b, c) {
  if(!(a.nodeName in Me)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Ne) {
        b.push(Ne[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Qe(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Je(a) {
  if(a && typeof a.length == "number") {
    if(ia(a)) {
      return typeof a.item == "function" || typeof a.item == "string"
    }else {
      if(w(a)) {
        return typeof a.item == "function"
      }
    }
  }
  return!1
}
function Ae(a) {
  this.N = a || r.document || document
}
q = Ae.prototype;
q.zb = ze;
q.h = function(a) {
  return u(a) ? this.N.getElementById(a) : a
};
q.r = function(a, b, c) {
  return He(this.N, arguments)
};
q.createElement = function(a) {
  return this.N.createElement(a)
};
q.createTextNode = function(a) {
  return this.N.createTextNode(a)
};
q.appendChild = function(a, b) {
  a.appendChild(b)
};
q.append = function(a, b) {
  Ie(Be(a), a, arguments, 1)
};
q.contains = Le;
function Re(a, b, c, d) {
  this.contentWindow = a;
  this.dc = b;
  this.Ad = c;
  this.wf = d
}
Re.prototype.A = function(a, b) {
  a.push("<XDRFrame frameId=");
  E(this.wf, a, b);
  a.push(", expandedUrl=");
  E(this.dc, a, b);
  a.push(", streams=");
  E(this.Ad, a, b);
  a.push(">")
};
function Se() {
  this.frames = [];
  this.dd = new H
}
Se.prototype.a = S("cw.net.XDRTracker");
function Te(a) {
  return a.replace(/%random%/g, function() {
    return"ml" + String(Math.floor(Zd())) + String(Math.floor(Zd()))
  })
}
function Ue(a, b) {
  for(var c = Ve, d = 0;d < c.frames.length;d++) {
    var e = c.frames[d], g;
    if(g = e.Ad.length == 0) {
      g = e.dc;
      var h = String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace(/%random%/g, "ml" + Array(21).join("\\d"));
      g = RegExp("^" + h + "$").test(g)
    }
    if(g) {
      return c.a.info("Giving " + G(b) + " existing frame " + G(e)), md(e)
    }
  }
  d = pd() + pd();
  e = Te(a);
  g = String(window.location).match(pe)[3] || k;
  h = e.match(pe)[3] || k;
  g == h ? (c.a.info("No need to make a real XDRFrame for " + G(b)), c = md(new Re(r, e, [b], k))) : (g = W("minerva-elements"), h = new dd, c.dd.set(d, [h, e, b]), c.a.info("Creating new XDRFrame " + G(d) + "for " + G(b)), c = Ge("iframe", {id:"minerva-xdrframe-" + d, width:0, height:0, style:"visibility: hidden; border: 0; margin: 0", src:e + "xdrframe/?domain=" + document.domain + "&id=" + d}), g.appendChild(c), c = h);
  return c
}
Se.prototype.jg = function(a) {
  var b = this.dd.get(a);
  b || f(Error("Unknown frameId " + G(a)));
  this.dd.remove(b);
  var c = b[0], a = new Re(W("minerva-xdrframe-" + a).contentWindow || (J ? W("minerva-xdrframe-" + a).document || W("minerva-xdrframe-" + a).contentWindow.document : W("minerva-xdrframe-" + a).contentDocument || W("minerva-xdrframe-" + a).contentWindow.document).parentWindow || (J ? W("minerva-xdrframe-" + a).document || W("minerva-xdrframe-" + a).contentWindow.document : W("minerva-xdrframe-" + a).contentDocument || W("minerva-xdrframe-" + a).contentWindow.document).defaultView, b[1], [b[2]], a);
  this.frames.push(a);
  c.la(a)
};
var Ve = new Se;
r.__XHRTracker_xdrFrameLoaded = z(Ve.jg, Ve);
var We;
We = !1;
var Xe = Yb();
Xe && (Xe.indexOf("Firefox") != -1 || Xe.indexOf("Camino") != -1 || Xe.indexOf("iPhone") != -1 || Xe.indexOf("iPod") != -1 || Xe.indexOf("iPad") != -1 || Xe.indexOf("Android") != -1 || Xe.indexOf("Chrome") != -1 && (We = !0));
var Ye = We;
/*
 Portions of this code are from MochiKit, received by The Closure
 Library Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Library Authors. All Rights Reserved.
*/
function Ze(a, b, c, d, e, g) {
  dd.call(this, e, g);
  this.ue = a;
  this.Nc = [];
  this.Yd = !!b;
  this.uf = !!c;
  this.mf = !!d;
  for(b = 0;b < a.length;b++) {
    kd(a[b], z(this.ce, this, b, !0), z(this.ce, this, b, !1))
  }
  a.length == 0 && !this.Yd && this.la(this.Nc)
}
B(Ze, dd);
Ze.prototype.Fe = 0;
Ze.prototype.ce = function(a, b, c) {
  this.Fe++;
  this.Nc[a] = [b, c];
  this.pa || (this.Yd && b ? this.la([a, c]) : this.uf && !b ? this.cc(c) : this.Fe == this.ue.length && this.la(this.Nc));
  this.mf && !b && (c = k);
  return c
};
Ze.prototype.cc = function(a) {
  Ze.c.cc.call(this, a);
  Wa(this.ue, function(a) {
    a.cancel()
  })
};
function $e(a) {
  a = new Ze(a, !1, !0);
  jd(a, function(a) {
    return Xa(a, function(a) {
      return a[1]
    })
  });
  return a
}
;function af(a, b) {
  this.ig = a;
  this.ye = b
}
af.prototype.ad = 0;
af.prototype.rc = 0;
af.prototype.Tc = !1;
function bf(a) {
  var b = [];
  if(a.Tc) {
    return[b, 2]
  }
  var c = a.ad, d = a.ig.responseText;
  for(a.ad = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var e = d.substr(a.rc, c - a.rc), e = e.replace(/\r$/, "");
    if(e.length > a.ye) {
      return a.Tc = !0, [b, 2]
    }
    b.push(e);
    a.rc = c += 1
  }
  return a.ad - a.rc - 1 > a.ye ? (a.Tc = !0, [b, 2]) : [b, 1]
}
;function cf(a, b, c) {
  this.na = b;
  this.V = a;
  this.Lc = c
}
B(cf, K);
q = cf.prototype;
q.a = S("cw.net.XHRMaster");
q.xa = -1;
q.ed = function(a, b, c) {
  this.Lc.__XHRSlave_makeRequest(this.V, a, b, c)
};
q.sa = l("xa");
q.kd = function(a, b) {
  b != 1 && Sd(this.a, G(this.V) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  df(this.na);
  a: {
    var c = this.na;
    c.yc = !0;
    try {
      for(var d = !1, e = [], g = 0, h = a.length;g < h;g++) {
        if(c.Y) {
          c.a.info(c.q() + " returning from loop because we're disposed.");
          break a
        }
        if(d = ef(c, a[g], e)) {
          break
        }
      }
      e.length && ff(c, e);
      c.yc = !1;
      c.z.length && c.fa();
      d && (R(c.a, c.q() + " closeSoon is true.  Frames were: " + G(a)), c.d())
    }finally {
      c.yc = !1
    }
  }
};
q.ld = function(a) {
  Q(this.a, "ongotheaders_: " + G(a));
  var b = k;
  "Content-Length" in a && (b = td(a["Content-Length"]));
  a = this.na;
  Q(a.a, a.q() + " got Content-Length: " + b);
  a.ba == gf && (b == k && (Td(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), hf(a, 2E3 + b / 3072 * 1E3))
};
q.md = function(a) {
  a != 1 && Q(this.a, this.na.q() + "'s XHR's readyState is " + a);
  this.xa = a;
  this.xa >= 2 && df(this.na)
};
q.jd = function() {
  this.na.d()
};
q.b = function() {
  cf.c.b.call(this);
  delete X.ga[this.V];
  this.Lc.__XHRSlave_dispose(this.V);
  delete this.Lc
};
function jf() {
  this.ga = {}
}
B(jf, K);
q = jf.prototype;
q.a = S("cw.net.XHRMasterTracker");
q.Qd = function(a, b) {
  var c = "_" + pd(), d = new cf(c, a, b);
  return this.ga[c] = d
};
q.kd = function(a, b, c) {
  var b = bb(b), d = this.ga[a];
  d ? d.kd(b, c) : Sd(this.a, "onframes_: no master for " + G(a))
};
q.ld = function(a, b) {
  var c = this.ga[a];
  c ? c.ld(b) : Sd(this.a, "ongotheaders_: no master for " + G(a))
};
q.md = function(a, b) {
  var c = this.ga[a];
  c ? c.md(b) : Sd(this.a, "onreadystatechange_: no master for " + G(a))
};
q.jd = function(a) {
  var b = this.ga[a];
  b ? (delete this.ga[b.V], b.jd()) : Sd(this.a, "oncomplete_: no master for " + G(a))
};
q.b = function() {
  jf.c.b.call(this);
  for(var a = Ra(this.ga);a.length;) {
    a.pop().d()
  }
  delete this.ga
};
var X = new jf;
r.__XHRMaster_onframes = z(X.kd, X);
r.__XHRMaster_oncomplete = z(X.jd, X);
r.__XHRMaster_ongotheaders = z(X.ld, X);
r.__XHRMaster_onreadystatechange = z(X.md, X);
function kf(a, b) {
  b || (b = a);
  this.gb = a;
  this.ib = b
}
function lf(a, b, c, d) {
  this.gb = a;
  this.Ke = b;
  this.ib = c;
  this.Te = d;
  (!(this.gb.indexOf("http://") == 0 || this.gb.indexOf("https://") == 0) || !(this.ib.indexOf("http://") == 0 || this.ib.indexOf("https://") == 0)) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.Ke.location.href;
  qe(this.gb, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Te.location.href;
  qe(this.ib, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
var mf = new fe(";)]}");
function nf() {
}
nf.prototype.$d = o(1);
function of(a) {
  this.Zf = a
}
of.prototype.A = function(a, b) {
  a.push("<UserContext for ");
  E(this.Zf, a, b);
  a.push(">")
};
function pf(a, b, c) {
  this.K = a;
  this.$f = b ? b : new nf;
  this.D = c ? c : od;
  this.Vb = new vd;
  this.Ub = pd() + pd();
  this.wa = new Nb;
  this.Zc = new Pb;
  this.Yb = k;
  this.Cc = [];
  this.ob = new of(this);
  if(J) {
    this.Yb = Uc(r, "load", this.Qf, !1, this)
  }
}
B(pf, K);
q = pf.prototype;
q.a = S("cw.net.ClientStream");
q.se = new Mb(-1, []);
q.te = new Mb(-1, []);
q.If = 50;
q.Hf = 1048576;
q.nd = k;
q.onreset = k;
q.He = k;
q.xd = !1;
q.rd = !1;
q.f = 1;
q.Ze = -1;
q.i = k;
q.w = k;
q.Lb = k;
q.yd = 0;
q.Je = 0;
q.Se = 0;
q.A = function(a, b) {
  a.push("<ClientStream id=");
  E(this.Ub, a, b);
  a.push(", state=", String(this.f));
  a.push(", primary=");
  E(this.i, a, b);
  a.push(", secondary=");
  E(this.w, a, b);
  a.push(", resetting=");
  E(this.Lb, a, b);
  a.push(">")
};
function qf(a) {
  var b = [-1];
  a.i && b.push(a.i.cb);
  a.w && b.push(a.w.cb);
  return Math.max.apply(Math.max, b)
}
function rf(a) {
  if(a.f != 1) {
    var b = a.wa.G.t() != 0, c = Qb(a.Zc), d = !c.k(a.te) && !(a.i && c.k(a.i.ab) || a.w && c.k(a.w.ab)), e = qf(a);
    if((b = b && e < a.wa.Ra) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.i.rb) {
        R(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.i, c != d.ab)) {
          !d.ia && !d.z.length && sf(d), d.z.push(new V(c)), d.ab = c
        }
        b && tf(a.i, a.wa, e + 1);
        a.i.fa()
      }else {
        a.w == k ? a.xd ? (R(a.a, "tryToSend_: creating secondary to send " + g), a.w = uf(a, !1), b && tf(a.w, a.wa, e + 1), a.w.fa()) : (R(a.a, "tryToSend_: not creating a secondary because stream might not exist on server"), a.rd = !0) : R(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
q.Qf = function() {
  this.Yb = k;
  if(this.i && this.i.Xa()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.i;
    a.Fc = !0;
    a.d()
  }
  if(this.w && this.w.Xa()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.w, a.Fc = !0, a.d()
  }
};
function vf(a, b) {
  var c;
  fa(c) || (c = !0);
  a.f > 3 && f(Error("sendStrings: Can't send strings in state " + a.f));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || f(Error("sendStrings: string #" + c + " has illegal chars: " + G(d)))
      }
    }
    a.wa.extend(b);
    rf(a)
  }
}
function uf(a, b) {
  var c;
  a.K instanceof lf ? c = a.$f.$d() == 1 ? gf : wf : f(Error("Don't support endpoint " + G(a.K)));
  a.Ze += 1;
  c = new xf(a.D, a, a.Ze, c, a.K, b);
  R(a.a, "Created: " + c.q());
  a.Vb.add(c);
  return c
}
function yf(a, b, c) {
  var d = new zf(a.D, a, b, c);
  R(a.a, "Created: " + d.q() + ", delay=" + b + ", times=" + c);
  a.Vb.add(d);
  return d
}
function Af(a, b) {
  a.Vb.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  Q(a.a, "Offline: " + b.q());
  b.tc ? a.yd += b.tc : a.yd = 0;
  a.yd >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), a.onreset && a.onreset.call(a.ob, "stream penalty reached limit", !1), a.d());
  if(a.f > 3) {
    a.f == 4 && b.df ? (Q(a.a, "Disposing because resettingTransport_ is done."), a.d()) : Q(a.a, "Not creating a transport because ClientStream is in state " + a.f)
  }else {
    var c;
    var d;
    c = b instanceof zf;
    if(!c && b.Fc) {
      var e = J ? Ye ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      R(a.a, "getDelayForNextTransport_: " + G({delay:c, times:d}))
    }else {
      d = b.Nd();
      if(b == a.i) {
        if(d) {
          e = ++a.Je
        }else {
          if(!c) {
            e = a.Je = 0
          }
        }
      }else {
        if(d) {
          e = ++a.Se
        }else {
          if(!c) {
            e = a.Se = 0
          }
        }
      }
      if(c || !e) {
        d = c = 0, R(a.a, "getDelayForNextTransport_: " + G({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(Math.random() * 4E3) - 2E3, j = Math.max(0, b.$e - b.Bd);
        d = (c = Math.max(0, g + h - j)) ? 1 : 0;
        R(a.a, "getDelayForNextTransport_: " + G({count:e, base:g, variance:h, oldDuration:j, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    if(b == a.i) {
      a.i = k, c ? a.i = yf(a, e, c) : (e = qf(a), a.i = uf(a, !0), tf(a.i, a.wa, e + 1)), a.i.fa()
    }else {
      if(b == a.w) {
        a.w = k, c ? (a.w = yf(a, e, c), a.w.fa()) : rf(a)
      }
    }
  }
}
q.reset = function(a) {
  this.f > 3 && f(Error("reset: Can't send reset in state " + this.f));
  this.f = 4;
  this.i && this.i.rb ? (this.a.info("reset: Sending ResetFrame over existing primary."), Bf(this.i, a), this.i.fa()) : (this.i && (Q(this.a, "reset: Disposing primary before sending ResetFrame."), this.i.d()), this.w && (Q(this.a, "reset: Disposing secondary before sending ResetFrame."), this.w.d()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Lb = uf(this, !1), Bf(this.Lb, a), this.Lb.fa());
  this.onreset && this.onreset.call(this.ob, a, !0)
};
function Cf(a, b, c, d) {
  var e;
  e = a.Zc;
  for(var g = a.If, h = a.Hf, j = [], m = !1, n = 0, F = c.length;n < F;n++) {
    var p = c[n], v = p[0], p = p[1];
    if(v == e.$a + 1) {
      e.$a += 1;
      for(j.push(p);;) {
        v = e.$a + 1;
        p = e.za.get(v, Rb);
        if(p === Rb) {
          break
        }
        j.push(p[0]);
        e.za.remove(v);
        e.ya -= p[1];
        e.$a = v
      }
    }else {
      if(!(v <= e.$a)) {
        if(g != k && e.za.t() >= g) {
          m = !0;
          break
        }
        var y = Lb(p);
        if(h != k && e.ya + y > h) {
          m = !0;
          break
        }
        e.za.set(v, [p, y]);
        e.ya += y
      }
    }
  }
  e.za.Ia() && e.za.clear();
  e = [j, m];
  c = e[0];
  e = e[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      if(h = c[g], a.nd && a.nd.call(a.ob, h), a.f == 4 || a.Y) {
        return
      }
    }
  }
  d || rf(a);
  if(!(a.f == 4 || a.Y) && e) {
    Sd(b.a, b.q() + "'s peer caused rwin overflow."), b.d()
  }
}
q.start = function() {
  this.onmessage && f(Error("ClientStream.start: Hey, you! It's `onstring`, not `onmessage`! Refusing to start."));
  this.f != 1 && f(Error("ClientStream.start: " + G(this) + " already started"));
  this.f = 2;
  if(this.K instanceof kf) {
    var a = Ue(this.K.gb, this), b = Ue(this.K.ib, this);
    jd($e([a, b]), z(this.sf, this))
  }else {
    Df(this)
  }
};
q.sf = function(a) {
  var b = a[0].contentWindow, c = a[1].contentWindow, d = a[0].dc, e = a[1].dc;
  this.Cc.push(a[0]);
  this.Cc.push(a[1]);
  this.K = new lf(d, b, e, c);
  Df(this)
};
function Df(a) {
  a.f = 3;
  a.i = uf(a, !0);
  tf(a.i, a.wa, k);
  a.i.fa()
}
q.b = function() {
  this.a.info(G(this) + " in disposeInternal.");
  this.f = 5;
  for(var a = this.Vb.L(), b = 0;b < a.length;b++) {
    a[b].d()
  }
  for(a = 0;a < this.Cc.length;a++) {
    ab(this.Cc[a].Ad, this)
  }
  if(J && this.Yb) {
    O(this.Yb), this.Yb = k
  }
  this.He && this.He.call(this.ob);
  delete this.Vb;
  delete this.i;
  delete this.w;
  delete this.Lb;
  delete this.ob;
  pf.c.b.call(this)
};
var gf = 1, wf = 2, Ef = 3;
function xf(a, b, c, d, e, g) {
  this.D = a;
  this.B = b;
  this.nb = c;
  this.ba = d;
  this.K = e;
  this.z = [];
  this.Qa = g;
  this.rb = !this.Xa();
  this.hb = this.ba != gf;
  this.hf = z(this.cg, this)
}
B(xf, K);
q = xf.prototype;
q.a = S("cw.net.ClientTransport");
q.n = k;
q.Bd = k;
q.$e = k;
q.uc = k;
q.ia = !1;
q.yc = !1;
q.ab = k;
q.Uc = 0;
q.cb = -1;
q.od = -1;
q.df = !1;
q.Fc = !1;
q.tc = 0;
q.Bb = !1;
q.A = function(a) {
  a.push("<ClientTransport #", String(this.nb), ", becomePrimary=", String(this.Qa), ">")
};
q.q = function() {
  return(this.Qa ? "Prim. T#" : "Sec. T#") + this.nb
};
q.Nd = function() {
  return!(!this.Bb && this.Uc)
};
q.Xa = function() {
  return this.ba == gf || this.ba == wf
};
function ff(a, b) {
  gb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  Cf(a.B, a, b, !a.hb)
}
function ef(a, b, c) {
  try {
    var d = oe(b);
    a.Uc += 1;
    Q(a.a, a.q() + " RECV " + G(d));
    var e;
    a.Uc == 1 && !d.k(mf) && a.Xa() ? (Td(a.a, a.q() + " is closing soon because got bad preamble: " + G(d)), e = !0) : e = !1;
    if(e) {
      return!0
    }
    if(d instanceof ee) {
      if(!/^([ -~]*)$/.test(d.mb)) {
        return a.Bb = !0
      }
      a.od += 1;
      c.push([a.od, d.mb])
    }else {
      if(d instanceof V) {
        var g = a.B, h = d.W;
        g.se = h;
        var j = g.wa, m = h.Pa, c = !1;
        m > j.Ra && (c = !0);
        for(var n = Ob(j).concat(), d = 0;d < n.length;d++) {
          var F = n[d];
          if(F > m) {
            break
          }
          var p = j.G.m[F][1];
          j.G.remove(F);
          j.ya -= p
        }
        for(d = 0;d < h.Ma.length;d++) {
          var v = h.Ma[d];
          v > j.Ra && (c = !0);
          j.G.P(v) && (p = j.G.m[v][1], j.G.remove(v), j.ya -= p)
        }
        j.G.Ia() && j.G.clear();
        if(c) {
          return Td(a.a, a.q() + " is closing soon because got bad SackFrame"), a.Bb = !0
        }
      }else {
        if(d instanceof ge) {
          a.od = d.Pb - 1
        }else {
          if(d instanceof ie) {
            a.B.te = d.Fb
          }else {
            if(d instanceof ke) {
              return R(a.a, a.q() + " is closing soon because got YouCloseItFrame"), !0
            }else {
              if(d instanceof ne) {
                return a.Bb = !0, d.reason == "stream_attach_failure" ? a.tc += 1 : d.reason == "acked_unsent_strings" && (a.tc += 0.5), R(a.a, a.q() + " is closing soon because got " + G(d)), !0
              }else {
                if(!(d instanceof fe)) {
                  if(d instanceof je) {
                    var y = a.B, Gh = !a.hb;
                    R(y.a, "Stream is now confirmed to exist at server.");
                    y.xd = !0;
                    if(y.rd && !Gh) {
                      y.rd = !1, rf(y)
                    }
                  }else {
                    if(c.length) {
                      ff(a, c);
                      if(!t(c)) {
                        for(var Od = c.length - 1;Od >= 0;Od--) {
                          delete c[Od]
                        }
                      }
                      c.length = 0
                    }
                    if(d instanceof le) {
                      var pc = a.B;
                      pc.onreset && pc.onreset.call(pc.ob, d.Kb, d.qb);
                      pc.d();
                      return!0
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
  }catch(Pf) {
    return Pf instanceof T || f(Pf), Td(a.a, a.q() + " is closing soon because got InvalidFrame: " + G(b)), a.Bb = !0
  }
  return!1
}
q.cg = function() {
  Td(this.a, this.q() + " timed out due to lack of connection or no data being received.");
  this.d()
};
function Ff(a) {
  if(a.uc != k) {
    a.D.H.clearTimeout(a.uc), a.uc = k
  }
}
function hf(a, b) {
  Ff(a);
  b = Math.round(b);
  a.uc = a.D.H.setTimeout(a.hf, b);
  Q(a.a, a.q() + "'s receive timeout set to " + b + " ms.")
}
function df(a) {
  a.ba != gf && (a.ba == Ef || a.ba == wf ? hf(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.ba)))
}
function sf(a) {
  var b = new ce;
  b.nb = a.nb;
  b.Le = 2;
  b.ke = 2;
  if(!a.B.xd) {
    b.Pe = !0
  }
  b.Ub = a.B.Ub;
  b.zd = a.hb;
  if(b.zd) {
    b.De = 4096
  }
  b.ze = 3E5;
  b.xe = a.hb ? Math.floor(10) : 0;
  b.af = !1;
  if(a.Qa) {
    b.Ve = k, b.fd = Math.floor((a.hb ? 358E4 : 25E3) / 1E3)
  }
  b.W = Qb(a.B.Zc);
  b.pc = a.B.se;
  a.z.push(b);
  a.ab = b.W
}
q.fa = function() {
  this.ia && !this.rb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.yc) {
    R(this.a, this.q() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.ia;
    this.ia = !0;
    !a && !this.z.length && sf(this);
    for(a = 0;a < this.z.length;a++) {
      Q(this.a, this.q() + " SEND " + G(this.z[a]))
    }
    if(this.Xa()) {
      for(var a = [], b = 0, c = this.z.length;b < c;b++) {
        this.z[b].R(a), a.push("\n")
      }
      this.z = [];
      a = a.join("");
      b = this.Qa ? this.K.gb : this.K.ib;
      this.n = X.Qd(this, this.Qa ? this.K.Ke : this.K.Te);
      this.Bd = this.D.H === cd ? A() : this.D.H.getTime();
      this.n.ed(b, "POST", a);
      hf(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.hb ? 0 : this.Qa ? 25E3 : 0))
    }else {
      if(this.ba == Ef) {
        a = [];
        b = 0;
        for(c = this.z.length;b < c;b++) {
          a.push(this.z[b].O())
        }
        this.z = [];
        this.n ? this.n.Hd(a) : (b = this.K, this.n = new Yd(this), this.n.wd = b.ug.Qd(this.n), this.Bd = this.D.H === cd ? A() : this.D.H.getTime(), this.n.Md(b.host, b.port), this.n.Y || (this.n.Hd(a), this.n.Y || hf(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.ba))
      }
    }
  }
};
function tf(a, b, c) {
  !a.ia && !a.z.length && sf(a);
  for(var d = Math.max(c, a.cb + 1), e = Ob(b), c = [], g = 0;g < e.length;g++) {
    var h = e[g];
    (d == k || h >= d) && c.push([h, b.G.m[h][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], e = g[0], g = g[1], (a.cb == -1 || a.cb + 1 != e) && a.z.push(new ge(e)), a.z.push(new ee(g)), a.cb = e
  }
}
q.b = function() {
  this.a.info(this.q() + " in disposeInternal.");
  xf.c.b.call(this);
  this.$e = this.D.H === cd ? A() : this.D.H.getTime();
  this.z = [];
  Ff(this);
  this.n && this.n.d();
  var a = this.B;
  this.B = k;
  Af(a, this)
};
function Bf(a, b) {
  !a.ia && !a.z.length && sf(a);
  a.z.push(new le(b, !0));
  a.df = !0
}
function zf(a, b, c, d) {
  this.D = a;
  this.B = b;
  this.Ud = c;
  this.Pd = d
}
B(zf, K);
q = zf.prototype;
q.ia = !1;
q.rb = !1;
q.kc = k;
q.ab = k;
q.a = S("cw.net.DoNothingTransport");
function Gf(a) {
  a.kc = a.D.H.setTimeout(function() {
    a.kc = k;
    a.Pd--;
    a.Pd ? Gf(a) : a.d()
  }, a.Ud)
}
q.fa = function() {
  this.ia && !this.rb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.ia = !0;
  Gf(this)
};
q.A = function(a) {
  a.push("<DoNothingTransport delay=", String(this.Ud), ">")
};
q.Xa = o(!1);
q.q = o("Wast. T");
q.Nd = o(!1);
q.b = function() {
  this.a.info(this.q() + " in disposeInternal.");
  zf.c.b.call(this);
  this.kc != k && this.D.H.clearTimeout(this.kc);
  var a = this.B;
  this.B = k;
  Af(a, this)
};
var Hf;
function If() {
  kb.apply(this)
}
B(If, kb);
function Jf() {
  kb.apply(this)
}
B(Jf, kb);
qb(If, {0:{name:"NewPost", Zd:"demosminerva.ljstream_messages.NewPost"}, 1:{name:"title", Ua:9, type:String}, 2:{name:"url", Ua:9, type:String}, 3:{name:"body", Ua:9, type:String}, 4:{name:"num_images", Ua:5, type:Number}, 5:{name:"lang", Ua:9, type:String}});
qb(Jf, {0:{name:"SetPreferences", Zd:"demosminerva.ljstream_messages.SetPreferences"}, 1:{name:"include_russian_posts", Ua:8, type:Boolean}});
function Kf() {
  this.Oe = A()
}
var Lf = new Kf;
Kf.prototype.set = aa("Oe");
Kf.prototype.reset = function() {
  this.set(A())
};
Kf.prototype.get = l("Oe");
function Mf(a) {
  this.pd = a || "";
  this.Xf = Lf
}
Mf.prototype.Tf = !0;
Mf.prototype.Vf = !0;
Mf.prototype.Uf = !0;
Mf.prototype.Ue = !1;
function Nf(a) {
  return a < 10 ? "0" + a : String(a)
}
function Of(a, b) {
  var c = (a.We - b) / 1E3, d = c.toFixed(3), e = 0;
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
function Qf(a) {
  Mf.call(this, a)
}
B(Qf, Mf);
Qf.prototype.Ue = !0;
function Rf(a) {
  this.gd = a || 100;
  this.ka = []
}
q = Rf.prototype;
q.Hb = 0;
q.add = function(a) {
  this.ka[this.Hb] = a;
  this.Hb = (this.Hb + 1) % this.gd
};
q.get = function(a) {
  a = Sf(this, a);
  return this.ka[a]
};
q.set = function(a, b) {
  a = Sf(this, a);
  this.ka[a] = b
};
q.t = function() {
  return this.ka.length
};
q.Ia = function() {
  return this.ka.length == 0
};
q.clear = function() {
  this.Hb = this.ka.length = 0
};
q.L = function() {
  for(var a = this.t(), b = this.t(), c = [], a = this.t() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
q.ra = function() {
  for(var a = [], b = this.t(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
q.P = function(a) {
  return a < this.t()
};
q.bc = function(a) {
  for(var b = this.t(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return!0
    }
  }
  return!1
};
function Sf(a, b) {
  b >= a.ka.length && f(Error("Out of bounds exception"));
  return a.ka.length < a.gd ? b : (a.Hb + Number(b)) % a.gd
}
;function Tf(a, b) {
  this.ta = a || "";
  this.pd = b || "";
  this.eb = [];
  this.vc = new Rf(Uf);
  this.Of = z(this.gf, this);
  this.vf = new Qf(this.pd);
  this.tf = {};
  if(!0 != this.oe) {
    this.oe = !0;
    var c = Xd(), d = this.Of;
    if(!c.Cb) {
      c.Cb = []
    }
    c.Cb.push(d)
  }
  this.Q = Vf(this.ta, "enabled") == "1";
  r.setInterval(z(this.Rf, this), 7500)
}
var Uf = 500;
q = Tf.prototype;
q.cf = "LOGGING";
q.qf = !1;
q.s = k;
q.Fd = !1;
q.oe = !1;
q.Jd = k;
q.bd = A();
q.Ha = function() {
  this.Q && Wf(this)
};
q.isEnabled = l("Q");
q.Rb = function(a) {
  if(this.Q = a) {
    Wf(this), this.s && this.Bc()
  }
  Xf(this, "enabled", a ? "1" : "0")
};
function Yf(a) {
  return!!a.s && !a.s.closed
}
q.kf = function() {
  this.vc.clear();
  Yf(this) && this.Bc()
};
q.gf = function(a) {
  if(!this.tf[a.ve]) {
    var b = this.vf, c;
    switch(a.S.value) {
      case Fd.value:
        c = "dbg-sh";
        break;
      case Gd.value:
        c = "dbg-sev";
        break;
      case Hd.value:
        c = "dbg-w";
        break;
      case Id.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.pd, " ");
    if(b.Tf) {
      var e = new Date(a.We);
      d.push("[", Nf(e.getFullYear() - 2E3) + Nf(e.getMonth() + 1) + Nf(e.getDate()) + " " + Nf(e.getHours()) + ":" + Nf(e.getMinutes()) + ":" + Nf(e.getSeconds()) + "." + Nf(Math.floor(e.getMilliseconds() / 10)), "] ")
    }
    b.Vf && d.push("[", Ea(Of(a, b.Xf.get())), "s] ");
    b.Uf && d.push("[", ya(a.ve), "] ");
    d.push('<span class="', c, '">', xa(Ea(ya(a.Be))));
    b.Ue && a.Sc && d.push("<br>", xa(Ea(a.Rc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.Q ? (Wf(this), this.vc.add(b), Zf(this, b)) : this.vc.add(b);
    this.qf && a.S.value >= Gd.value && this.Rb(!0)
  }
};
function Zf(a, b) {
  a.eb.push(b);
  r.clearTimeout(a.Jd);
  A() - a.bd > 750 ? a.Gd() : a.Jd = r.setTimeout(z(a.Gd, a), 250)
}
q.Gd = function() {
  this.bd = A();
  if(Yf(this)) {
    var a = this.s.document.body, a = a && a.scrollHeight - (a.scrollTop + a.clientHeight) <= 100;
    this.s.document.write(this.eb.join(""));
    this.eb.length = 0;
    a && this.s.scrollTo(0, 1E6)
  }
};
function $f(a) {
  for(var b = a.vc.L(), c = 0;c < b.length;c++) {
    Zf(a, b[c])
  }
}
function Wf(a) {
  if(!Yf(a) && !a.Fd) {
    var b = Vf(a.ta, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), e = Number(b[2]), b = Number(b[3]);
    a.Fd = !0;
    a.s = window.open("", I ? a.ta.replace(/[\s\-\.\,]/g, "_") : a.ta, "width=" + e + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    if(!a.s && !a.Wf) {
      alert("Logger popup was blocked"), a.Wf = !0
    }
    a.Fd = !1;
    a.s && a.Bc()
  }
}
q.hc = o("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
q.Bc = function() {
  Yf(this) || (this.s.document.open(), Zf(this, "<style>" + this.hc() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.cf + "<br><small>Logger: " + this.ta + "</small></div><hr>"), $f(this))
};
function Xf(a, b, c) {
  b += a.ta;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(A() + 2592E6)).toUTCString()
}
function Vf(a, b, c) {
  var a = b + a, b = String(document.cookie), d = b.indexOf(a + "=");
  return d != -1 ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, c == -1 ? b.length : c))) : c || ""
}
q.Rf = function() {
  Yf(this) && Xf(this, "dbg", (this.s.screenX || this.s.screenLeft || 0) + "," + (this.s.screenY || this.s.screenTop || 0) + "," + (this.s.outerWidth || 800) + "," + (this.s.outerHeight || 500))
};
function ag(a, b) {
  if(bg) {
    var c = cg(), d;
    for(d in c) {
      var e = d.replace("fancywindow.sel.", ""), e = S(e), g = e.S, h = window.localStorage.getItem(d).toString();
      (!g || g.toString() != h) && e.kb(Qd(h))
    }
  }
  Tf.call(this, a, b)
}
B(ag, Tf);
var bg;
a: {
  try {
    bg = !!window.localStorage.getItem;
    break a
  }catch(dg) {
  }
  bg = !1
}
q = ag.prototype;
q.Gd = function() {
  this.bd = A();
  if(Yf(this)) {
    for(var a = this.J.h("log"), b = a.scrollHeight - (a.scrollTop + a.offsetHeight) <= 100, c = 0;c < this.eb.length;c++) {
      var d = this.J.r("div", "logmsg");
      d.innerHTML = this.eb[c];
      a.appendChild(d)
    }
    this.eb.length = 0;
    this.Qe();
    if(b) {
      a.scrollTop = a.scrollHeight
    }
  }
};
q.Bc = function() {
  if(Yf(this)) {
    var a = this.s.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.ta + "</title><style>" + this.hc() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.ta + "</b></p><p>" + this.cf + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (I ? a.body : this.s).onresize = z(this.Qe, this);
    this.J = new Ae(a);
    this.J.h("openbutton").onclick = z(this.Mf, this);
    this.J.h("closebutton").onclick = z(this.lf, this);
    this.J.h("clearbutton").onclick = z(this.kf, this);
    this.J.h("exitbutton").onclick = z(this.rf, this);
    $f(this)
  }
};
q.Mf = function() {
  var a = this.J.h("optionsarea");
  a.innerHTML = "";
  for(var b = eg(), c = this.J, d = 0;d < b.length;d++) {
    var e = S(b[d]), e = c.r("div", {}, fg(this, "sel" + b[d], e.S ? e.S.name : "INHERIT"), c.r("span", {}, b[d] || "(root)"));
    a.appendChild(e)
  }
  this.J.h("options").style.display = "block";
  return!1
};
function fg(a, b, c) {
  for(var a = a.J, b = a.r("select", {id:b}), d = 0;d < Nd.length;d++) {
    var e = Nd[d], g = a.r("option", {}, e.name);
    if(c == e.name) {
      g.selected = !0
    }
    b.appendChild(g)
  }
  b.appendChild(a.r("option", {selected:c == "INHERIT"}, "INHERIT"));
  return b
}
q.lf = function() {
  this.J.h("options").style.display = "none";
  for(var a = eg(), b = this.J, c = 0;c < a.length;c++) {
    var d = S(a[c]), e = b.h("sel" + a[c]), e = e.options[e.selectedIndex].text;
    e == "INHERIT" ? d.kb(k) : d.kb(Qd(e))
  }
  if(bg) {
    a = eg();
    b = cg();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], e = S(a[c]).S, d in b ? e ? window.localStorage.getItem(d) != e.name && window.localStorage.setItem(d, e.name) : window.localStorage.removeItem(d) : e && window.localStorage.setItem(d, e.name)
    }
  }
  return!1
};
q.Qe = function() {
  var a = this.J, b = a.h("log"), c = a.h("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.N.body.offsetHeight - c.offsetHeight - (I ? 4 : 0) + "px"
};
q.rf = function() {
  this.Rb(!1);
  this.s && this.s.close()
};
q.hc = function() {
  return ag.c.hc.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function cg() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != k && d.lastIndexOf("fancywindow.sel.", 0) == 0 && (a[d] = !0)
  }
  return a
}
function eg() {
  var a = Sa(Ud);
  a.sort();
  return a
}
;var gg = bc ? "MozUserSelect" : J ? "WebkitUserSelect" : k;
function hg(a) {
  this.ie = a;
  this.j = []
}
B(hg, K);
var ig = [];
function jg(a, b, c, d) {
  t(c) || (ig[0] = c, c = ig);
  for(var e = 0;e < c.length;e++) {
    a.j.push(N(b, c[e], d || a, !1, a.ie || a))
  }
  return a
}
function kg(a, b, c, d, e, g) {
  if(t(c)) {
    for(var h = 0;h < c.length;h++) {
      kg(a, b, c[h], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.ie || a;
      e = !!e;
      if(b = Wc(b, c, e)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].La && b[c].bb == d && b[c].capture == e && b[c].lc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = k
    }
    if(b) {
      b = b.key, O(b), ab(a.j, b)
    }
  }
  return a
}
hg.prototype.qd = function() {
  Wa(this.j, O);
  this.j.length = 0
};
hg.prototype.b = function() {
  hg.c.b.call(this);
  this.qd()
};
hg.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function lg() {
}
da(lg);
lg.prototype.Kf = 0;
lg.Va();
function mg(a) {
  this.Ca = a || ze();
  this.Ob = ng
}
B(mg, bd);
mg.prototype.Df = lg.Va();
var ng = k;
function og(a, b) {
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
q = mg.prototype;
q.le = k;
q.F = !1;
q.p = k;
q.Ob = k;
q.Jf = k;
q.u = k;
q.ma = k;
q.sb = k;
q.gg = !1;
q.h = l("p");
function pg(a) {
  return a.Wa || (a.Wa = new hg(a))
}
q.getParent = l("u");
q.sd = function(a) {
  this.u && this.u != a && f(Error("Method not supported"));
  mg.c.sd.call(this, a)
};
q.zb = l("Ca");
q.r = function() {
  this.p = this.Ca.createElement("div")
};
function qg(a) {
  var b = W("prefs");
  a.F && f(Error("Component already rendered"));
  a.p || a.r();
  b ? b.insertBefore(a.p, k) : a.Ca.N.body.appendChild(a.p);
  (!a.u || a.u.F) && a.Ta()
}
q.Ta = function() {
  this.F = !0;
  rg(this, function(a) {
    !a.F && a.h() && a.Ta()
  })
};
q.vb = function() {
  rg(this, function(a) {
    a.F && a.vb()
  });
  this.Wa && this.Wa.qd();
  this.F = !1
};
q.b = function() {
  mg.c.b.call(this);
  this.F && this.vb();
  this.Wa && (this.Wa.d(), delete this.Wa);
  rg(this, function(a) {
    a.d()
  });
  !this.gg && this.p && Ke(this.p);
  this.u = this.Jf = this.p = this.sb = this.ma = k
};
q.lb = function(a) {
  this.F && f(Error("Component already rendered"));
  this.Ob = a
};
function rg(a, b) {
  a.ma && Wa(a.ma, b, i)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = u(a) ? a : a.le || (a.le = ":" + (a.Df.Kf++).toString(36)), a = this.sb && c ? (c in this.sb ? this.sb[c] : i) || k : k;
    if(c && a) {
      var d = this.sb;
      c in d && delete d[c];
      ab(this.ma, a);
      b && (a.vb(), a.p && Ke(a.p));
      c = a;
      c == k && f(Error("Unable to set parent component"));
      c.u = k;
      mg.c.sd.call(c, k)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function sg() {
}
var tg;
da(sg);
q = sg.prototype;
q.ec = function() {
};
q.r = function(a) {
  return a.zb().r("div", ug(this, a).join(" "), a.tb)
};
q.ub = function(a, b, c) {
  if(a = a.h ? a.h() : a) {
    if(I && !nc("7")) {
      var d = vg(se(a), b);
      d.push(b);
      na(c ? te : ue, a).apply(k, d)
    }else {
      c ? te(a, b) : ue(a, b)
    }
  }
};
q.me = function(a) {
  if(a.Ob == k) {
    var b;
    a: {
      b = a.F ? a.p : a.Ca.N.body;
      var c = Be(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (b = c.defaultView.getComputedStyle(b, k))) {
        b = b.direction || b.getPropertyValue("direction");
        break a
      }
      b = ""
    }
    a.Ob = "rtl" == (b || ((a.F ? a.p : a.Ca.N.body).currentStyle ? (a.F ? a.p : a.Ca.N.body).currentStyle.direction : k) || (a.F ? a.p : a.Ca.N.body).style.direction)
  }
  a.Ob && this.lb(a.h(), !0);
  a.isEnabled() && this.Sb(a, a.Oa)
};
q.wc = function(a, b) {
  var c = !b, d = I || ac ? a.getElementsByTagName("*") : k;
  if(gg) {
    if(c = c ? "none" : "", a.style[gg] = c, d) {
      for(var e = 0, g;g = d[e];e++) {
        g.style[gg] = c
      }
    }
  }else {
    if(I || ac) {
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for(e = 0;g = d[e];e++) {
          g.setAttribute("unselectable", c)
        }
      }
    }
  }
};
q.lb = function(a, b) {
  this.ub(a, this.qa() + "-rtl", b)
};
q.pe = function(a) {
  var b;
  return a.aa & 32 && (b = a.Fa()) ? Oe(b) : !1
};
q.Sb = function(a, b) {
  var c;
  if(a.aa & 32 && (c = a.Fa())) {
    if(!b && a.f & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.f & 32 && a.be()
    }
    if(Oe(c) != b) {
      b ? c.tabIndex = 0 : c.removeAttribute("tabIndex")
    }
  }
};
q.ud = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.M = function(a, b, c) {
  var d = a.h();
  if(d) {
    var e = wg(this, b);
    e && this.ub(a, e, c);
    this.Wb(d, b, c)
  }
};
q.Wb = function(a, b, c) {
  tg || (tg = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = tg[b]) && a.setAttribute("aria-" + b, c)
};
q.Fa = function(a) {
  return a.h()
};
q.qa = o("goog-control");
function ug(a, b) {
  var c = a.qa(), d = [c], e = a.qa();
  e != c && d.push(e);
  c = b.f;
  for(e = [];c;) {
    var g = c & -c;
    e.push(wg(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.Z) && d.push.apply(d, c);
  I && !nc("7") && d.push.apply(d, vg(d));
  return d
}
function vg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Wa([], function(d) {
    Za(d, na($a, a)) && (!b || $a(d, b)) && c.push(d.join("_"))
  });
  return c
}
function wg(a, b) {
  if(!a.Ld) {
    var c = a.qa();
    a.Ld = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Ld[b]
}
;function xg(a, b) {
  a || f(Error("Invalid class name " + a));
  w(b) || f(Error("Invalid decorator function " + b))
}
var yg = {};
function zg(a, b, c, d, e) {
  if(!I && (!J || !nc("525"))) {
    return!0
  }
  if(ec && e) {
    return Ag(a)
  }
  if(e && !d) {
    return!1
  }
  if(!c && (b == 17 || b == 18)) {
    return!1
  }
  if(I && d && b == a) {
    return!1
  }
  switch(a) {
    case 13:
      return!(I && qc());
    case 27:
      return!J
  }
  return Ag(a)
}
function Ag(a) {
  if(a >= 48 && a <= 57) {
    return!0
  }
  if(a >= 96 && a <= 106) {
    return!0
  }
  if(a >= 65 && a <= 90) {
    return!0
  }
  if(J && a == 0) {
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
;function Bg(a, b) {
  a && Cg(this, a, b)
}
B(Bg, bd);
q = Bg.prototype;
q.p = k;
q.nc = k;
q.$c = k;
q.oc = k;
q.va = -1;
q.ua = -1;
var Dg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Eg = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Fg = {61:187, 
59:186}, Gg = I || J && nc("525");
q = Bg.prototype;
q.zf = function(a) {
  if(J && (this.va == 17 && !a.ctrlKey || this.va == 18 && !a.altKey)) {
    this.ua = this.va = -1
  }
  Gg && !zg(a.keyCode, this.va, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.ua = bc && a.keyCode in Fg ? Fg[a.keyCode] : a.keyCode
};
q.Bf = function() {
  this.ua = this.va = -1
};
q.handleEvent = function(a) {
  var b = a.ea, c, d;
  I && a.type == "keypress" ? (c = this.ua, d = c != 13 && c != 27 ? b.keyCode : 0) : J && a.type == "keypress" ? (c = this.ua, d = b.charCode >= 0 && b.charCode < 63232 && Ag(c) ? b.charCode : 0) : ac ? (c = this.ua, d = Ag(c) ? b.keyCode : 0) : (c = b.keyCode || this.ua, d = b.charCode || 0, ec && d == 63 && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in Dg ? e = Dg[c] : c == 25 && a.shiftKey && (e = 9) : g && g in Eg && (e = Eg[g]);
  a = e == this.va;
  this.va = e;
  b = new Hg(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.d()
  }
};
q.h = l("p");
function Cg(a, b, c) {
  a.oc && a.detach();
  a.p = b;
  a.nc = N(a.p, "keypress", a, c);
  a.$c = N(a.p, "keydown", a.zf, c, a);
  a.oc = N(a.p, "keyup", a.Bf, c, a)
}
q.detach = function() {
  if(this.nc) {
    O(this.nc), O(this.$c), O(this.oc), this.oc = this.$c = this.nc = k
  }
  this.p = k;
  this.ua = this.va = -1
};
q.b = function() {
  Bg.c.b.call(this);
  this.detach()
};
function Hg(a, b, c, d) {
  d && this.Ha(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
B(Hg, xc);
function Y(a, b, c) {
  mg.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = x(b);
      if(d = yg[d]) {
        break
      }
      b = b.c ? b.c.constructor : k
    }
    b = d ? w(d.Va) ? d.Va() : new d : k
  }
  this.v = b;
  this.tb = a
}
B(Y, mg);
q = Y.prototype;
q.tb = k;
q.f = 0;
q.aa = 39;
q.Id = 255;
q.Yf = 0;
q.Oa = !0;
q.Z = k;
q.Wc = !0;
q.Hc = !1;
q.Fa = function() {
  return this.v.Fa(this)
};
function Ig(a, b) {
  if(b) {
    a.Z ? $a(a.Z, b) || a.Z.push(b) : a.Z = [b], a.v.ub(a, b, !0)
  }
}
q.ub = function(a, b) {
  if(b) {
    Ig(this, a)
  }else {
    if(a && this.Z) {
      ab(this.Z, a);
      if(this.Z.length == 0) {
        this.Z = k
      }
      this.v.ub(this, a, !1)
    }
  }
};
q.r = function() {
  var a = this.v.r(this);
  this.p = a;
  var b = this.v.ec();
  if(b) {
    a.setAttribute("role", b), a.tg = b
  }
  this.Hc || this.v.wc(a, !1);
  this.Oa || this.v.ud(a, !1)
};
q.Ta = function() {
  Y.c.Ta.call(this);
  this.v.me(this);
  if(this.aa & -2 && (this.Wc && Jg(this, !0), this.aa & 32)) {
    var a = this.Fa();
    if(a) {
      var b = this.Za || (this.Za = new Bg);
      Cg(b, a);
      jg(jg(jg(pg(this), b, "key", this.Af), a, "focus", this.yf), a, "blur", this.be)
    }
  }
};
function Jg(a, b) {
  var c = pg(a), d = a.h();
  b ? (jg(jg(jg(jg(c, d, "mouseover", a.ge), d, "mousedown", a.ee), d, "mouseup", a.he), d, "mouseout", a.fe), I && jg(c, d, "dblclick", a.de)) : (kg(kg(kg(kg(c, d, "mouseover", a.ge), d, "mousedown", a.ee), d, "mouseup", a.he), d, "mouseout", a.fe), I && kg(c, d, "dblclick", a.de))
}
q.vb = function() {
  Y.c.vb.call(this);
  this.Za && this.Za.detach();
  this.Oa && this.isEnabled() && this.v.Sb(this, !1)
};
q.b = function() {
  Y.c.b.call(this);
  this.Za && (this.Za.d(), delete this.Za);
  delete this.v;
  this.Z = this.tb = k
};
function Kg(a) {
  a = a.tb;
  if(!a) {
    return""
  }
  if(!u(a)) {
    if(t(a)) {
      a = Xa(a, Pe).join("")
    }else {
      if(xe && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Qe(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      xe || (a = a.replace(/ +/g, " "));
      a != " " && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
q.lb = function(a) {
  Y.c.lb.call(this, a);
  var b = this.h();
  b && this.v.lb(b, a)
};
q.wc = function(a) {
  this.Hc = a;
  var b = this.h();
  b && this.v.wc(b, a)
};
q.ud = function(a, b) {
  if(b || this.Oa != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.h();
    c && this.v.ud(c, a);
    this.isEnabled() && this.v.Sb(this, a);
    this.Oa = a;
    return!0
  }
  return!1
};
q.isEnabled = function() {
  return!(this.f & 1)
};
q.Rb = function(a) {
  var b = this.getParent();
  if((!b || typeof b.isEnabled != "function" || b.isEnabled()) && Lg(this, 1, !a)) {
    a || (this.setActive(!1), Mg(this, !1)), this.Oa && this.v.Sb(this, a), this.M(1, !a)
  }
};
function Mg(a, b) {
  Lg(a, 2, b) && a.M(2, b)
}
q.ne = function() {
  return!!(this.f & 4)
};
q.setActive = function(a) {
  Lg(this, 4, a) && this.M(4, a)
};
q.M = function(a, b) {
  if(this.aa & a && b != !!(this.f & a)) {
    this.v.M(this, a, b), this.f = b ? this.f | a : this.f & ~a
  }
};
function Z(a, b) {
  return!!(a.Id & b) && !!(a.aa & b)
}
function Lg(a, b, c) {
  return!!(a.aa & b) && !!(a.f & b) != c && (!(a.Yf & b) || a.dispatchEvent(og(b, c))) && !a.Y
}
q.ge = function(a) {
  (!a.relatedTarget || !Le(this.h(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Z(this, 2) && Mg(this, !0)
};
q.fe = function(a) {
  if((!a.relatedTarget || !Le(this.h(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    Z(this, 4) && this.setActive(!1), Z(this, 2) && Mg(this, !1)
  }
};
q.ee = function(a) {
  if(this.isEnabled() && (Z(this, 2) && Mg(this, !0), zc(a) && (!J || !ec || !a.ctrlKey))) {
    Z(this, 4) && this.setActive(!0), this.v.pe(this) && this.Fa().focus()
  }
  !this.Hc && zc(a) && (!J || !ec || !a.ctrlKey) && a.preventDefault()
};
q.he = function(a) {
  this.isEnabled() && (Z(this, 2) && Mg(this, !0), this.ne() && this.Jb(a) && Z(this, 4) && this.setActive(!1))
};
q.de = function(a) {
  this.isEnabled() && this.Jb(a)
};
q.Jb = function(a) {
  if(Z(this, 16)) {
    var b = !(this.f & 16);
    Lg(this, 16, b) && this.M(16, b)
  }
  Z(this, 8) && Lg(this, 8, !0) && this.M(8, !0);
  Z(this, 64) && (b = !(this.f & 64), Lg(this, 64, b) && this.M(64, b));
  b = new vc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, e = 0;d = c[e];e++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
q.yf = function() {
  Z(this, 32) && Lg(this, 32, !0) && this.M(32, !0)
};
q.be = function() {
  Z(this, 4) && this.setActive(!1);
  Z(this, 32) && Lg(this, 32, !1) && this.M(32, !1)
};
q.Af = function(a) {
  return this.Oa && this.isEnabled() && this.Vc(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
q.Vc = function(a) {
  return a.keyCode == 13 && this.Jb(a)
};
w(Y) || f(Error("Invalid component class " + Y));
w(sg) || f(Error("Invalid renderer class " + sg));
var Ng = x(Y);
yg[Ng] = sg;
xg("goog-control", function() {
  return new Y(k)
});
function Og() {
}
B(Og, sg);
da(Og);
q = Og.prototype;
q.ec = o("button");
q.Wb = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : Og.c.Wb.call(this, a, b, c)
};
q.r = function(a) {
  var b = Og.c.r.call(this, a), c = a.ic();
  c && this.td(b, c);
  (c = a.jc()) && this.xc(b, c);
  a.aa & 16 && this.Wb(b, 16, !1);
  return b
};
q.jc = s;
q.xc = s;
q.ic = function(a) {
  return a.title
};
q.td = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
q.qa = o("goog-button");
function Pg() {
}
B(Pg, Og);
da(Pg);
q = Pg.prototype;
q.ec = function() {
};
q.r = function(a) {
  a.F && !1 != a.Wc && Jg(a, !1);
  a.Wc = !1;
  a.Id &= -256;
  a.F && a.f & 32 && f(Error("Component already rendered"));
  a.f & 32 && a.M(32, !1);
  a.aa &= -33;
  return a.zb().r("button", {"class":ug(this, a).join(" "), disabled:!a.isEnabled(), title:a.ic() || "", value:a.jc() || ""}, Kg(a) || "")
};
q.me = function(a) {
  jg(pg(a), a.h(), "click", a.Jb)
};
q.wc = s;
q.lb = s;
q.pe = function(a) {
  return a.isEnabled()
};
q.Sb = s;
q.M = function(a, b, c) {
  Pg.c.M.call(this, a, b, c);
  if((a = a.h()) && b == 1) {
    a.disabled = c
  }
};
q.jc = function(a) {
  return a.value
};
q.xc = function(a, b) {
  if(a) {
    a.value = b
  }
};
q.Wb = s;
function Qg(a, b, c) {
  Y.call(this, a, b || Pg.Va(), c)
}
B(Qg, Y);
q = Qg.prototype;
q.jc = l("bf");
q.xc = function(a) {
  this.bf = a;
  this.v.xc(this.h(), a)
};
q.ic = l("Xe");
q.td = function(a) {
  this.Xe = a;
  this.v.td(this.h(), a)
};
q.b = function() {
  Qg.c.b.call(this);
  delete this.bf;
  delete this.Xe
};
q.Ta = function() {
  Qg.c.Ta.call(this);
  if(this.aa & 32) {
    var a = this.Fa();
    a && jg(pg(this), a, "keyup", this.Vc)
  }
};
q.Vc = function(a) {
  return a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup" ? this.Jb(a) : a.keyCode == 32
};
xg("goog-button", function() {
  return new Qg(k)
});
function Rg() {
}
B(Rg, Og);
da(Rg);
Rg.prototype.r = function(a) {
  var b = {"class":"goog-inline-block " + ug(this, a).join(" "), title:a.ic() || ""};
  return a.zb().r("div", b, Sg(this, a.tb, a.zb()))
};
Rg.prototype.ec = o("button");
function Sg(a, b, c) {
  return c.r("div", "goog-inline-block " + (a.qa() + "-outer-box"), c.r("div", "goog-inline-block " + (a.qa() + "-inner-box"), b))
}
Rg.prototype.qa = o("goog-custom-button");
function Tg(a, b, c) {
  Qg.call(this, a, b || Rg.Va(), c)
}
B(Tg, Qg);
xg("goog-custom-button", function() {
  return new Tg(k)
});
function Ug(a, b) {
  var c;
  a instanceof Ug ? (this.jb(b == k ? a.$ : b), Vg(this, a.ha), Wg(this, a.Xb), Xg(this, a.Da), Yg(this, a.fb), Zg(this, a.Ja), $g(this, a.T.I()), ah(this, a.xb)) : a && (c = String(a).match(pe)) ? (this.jb(!!b), Vg(this, c[1] || "", !0), Wg(this, c[2] || "", !0), Xg(this, c[3] || "", !0), Yg(this, c[4]), Zg(this, c[5] || "", !0), $g(this, c[6] || "", !0), ah(this, c[7] || "", !0)) : (this.jb(!!b), this.T = new bh(k, this, this.$))
}
q = Ug.prototype;
q.ha = "";
q.Xb = "";
q.Da = "";
q.fb = k;
q.Ja = "";
q.xb = "";
q.Ff = !1;
q.$ = !1;
q.toString = function() {
  if(this.X) {
    return this.X
  }
  var a = [];
  this.ha && a.push(ch(this.ha, dh), ":");
  this.Da && (a.push("//"), this.Xb && a.push(ch(this.Xb, dh), "@"), a.push(u(this.Da) ? encodeURIComponent(this.Da) : k), this.fb != k && a.push(":", String(this.fb)));
  this.Ja && (this.Da && this.Ja.charAt(0) != "/" && a.push("/"), a.push(ch(this.Ja, this.Ja.charAt(0) == "/" ? eh : fh)));
  var b = String(this.T);
  b && a.push("?", b);
  this.xb && a.push("#", ch(this.xb, gh));
  return this.X = a.join("")
};
q.I = function() {
  var a = this.ha, b = this.Xb, c = this.Da, d = this.fb, e = this.Ja, g = this.T.I(), h = this.xb, j = new Ug(k, this.$);
  a && Vg(j, a);
  b && Wg(j, b);
  c && Xg(j, c);
  d && Yg(j, d);
  e && Zg(j, e);
  g && $g(j, g);
  h && ah(j, h);
  return j
};
function Vg(a, b, c) {
  hh(a);
  delete a.X;
  a.ha = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.ha) {
    a.ha = a.ha.replace(/:$/, "")
  }
}
function Wg(a, b, c) {
  hh(a);
  delete a.X;
  a.Xb = c ? b ? decodeURIComponent(b) : "" : b
}
function Xg(a, b, c) {
  hh(a);
  delete a.X;
  a.Da = c ? b ? decodeURIComponent(b) : "" : b
}
function Yg(a, b) {
  hh(a);
  delete a.X;
  b ? (b = Number(b), (isNaN(b) || b < 0) && f(Error("Bad port number " + b)), a.fb = b) : a.fb = k
}
function Zg(a, b, c) {
  hh(a);
  delete a.X;
  a.Ja = c ? b ? decodeURIComponent(b) : "" : b
}
function $g(a, b, c) {
  hh(a);
  delete a.X;
  b instanceof bh ? (a.T = b, a.T.Dd = a, a.T.jb(a.$)) : (c || (b = ch(b, ih)), a.T = new bh(b, a, a.$))
}
function ah(a, b, c) {
  hh(a);
  delete a.X;
  a.xb = c ? b ? decodeURIComponent(b) : "" : b
}
function hh(a) {
  a.Ff && f(Error("Tried to modify a read-only Uri"))
}
q.jb = function(a) {
  this.$ = a;
  this.T && this.T.jb(a);
  return this
};
var jh = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function ch(a, b) {
  var c = k;
  u(a) && (c = a, jh.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, kh)));
  return c
}
function kh(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var dh = /[#\/\?@]/g, fh = /[\#\?:]/g, eh = /[\#\?]/g, ih = /[\#\?@]/g, gh = /#/g;
function bh(a, b, c) {
  this.da = a || k;
  this.Dd = b || k;
  this.$ = !!c
}
function lh(a) {
  if(!a.l && (a.l = new H, a.e = 0, a.da)) {
    for(var b = a.da.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, g = k;
      d >= 0 ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = mh(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
q = bh.prototype;
q.l = k;
q.e = k;
q.t = function() {
  lh(this);
  return this.e
};
q.add = function(a, b) {
  lh(this);
  nh(this);
  a = mh(this, a);
  if(this.P(a)) {
    var c = this.l.get(a);
    t(c) ? c.push(b) : this.l.set(a, [c, b])
  }else {
    this.l.set(a, b)
  }
  this.e++;
  return this
};
q.remove = function(a) {
  lh(this);
  a = mh(this, a);
  if(this.l.P(a)) {
    nh(this);
    var b = this.l.get(a);
    t(b) ? this.e -= b.length : this.e--;
    return this.l.remove(a)
  }
  return!1
};
q.clear = function() {
  nh(this);
  this.l && this.l.clear();
  this.e = 0
};
q.Ia = function() {
  lh(this);
  return this.e == 0
};
q.P = function(a) {
  lh(this);
  a = mh(this, a);
  return this.l.P(a)
};
q.bc = function(a) {
  var b = this.L();
  return $a(b, a)
};
q.ra = function() {
  lh(this);
  for(var a = this.l.L(), b = this.l.ra(), c = [], d = 0;d < b.length;d++) {
    var e = a[d];
    if(t(e)) {
      for(var g = 0;g < e.length;g++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
q.L = function(a) {
  lh(this);
  if(a) {
    if(a = mh(this, a), this.P(a)) {
      var b = this.l.get(a);
      if(t(b)) {
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
      t(d) ? db(a, d) : a.push(d)
    }
  }
  return a
};
q.set = function(a, b) {
  lh(this);
  nh(this);
  a = mh(this, a);
  if(this.P(a)) {
    var c = this.l.get(a);
    t(c) ? this.e -= c.length : this.e--
  }
  this.l.set(a, b);
  this.e++;
  return this
};
q.get = function(a, b) {
  lh(this);
  a = mh(this, a);
  if(this.P(a)) {
    var c = this.l.get(a);
    return t(c) ? c[0] : c
  }else {
    return b
  }
};
q.toString = function() {
  if(this.da) {
    return this.da
  }
  if(!this.l) {
    return""
  }
  for(var a = [], b = 0, c = this.l.ra(), d = 0;d < c.length;d++) {
    var e = c[d], g = wa(e), e = this.l.get(e);
    if(t(e)) {
      for(var h = 0;h < e.length;h++) {
        b > 0 && a.push("&"), a.push(g), e[h] !== "" && a.push("=", wa(e[h])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(g), e !== "" && a.push("=", wa(e)), b++
    }
  }
  return this.da = a.join("")
};
function nh(a) {
  delete a.Mc;
  delete a.da;
  a.Dd && delete a.Dd.X
}
q.I = function() {
  var a = new bh;
  if(this.Mc) {
    a.Mc = this.Mc
  }
  if(this.da) {
    a.da = this.da
  }
  if(this.l) {
    a.l = this.l.I()
  }
  return a
};
function mh(a, b) {
  var c = String(b);
  a.$ && (c = c.toLowerCase());
  return c
}
q.jb = function(a) {
  a && !this.$ && (lh(this), nh(this), Fb(this.l, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.$ = a
};
q.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Fb(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
(function() {
  function a(a) {
    a.match(/[\d]+/g).length = 3
  }
  var b = !1;
  if(navigator.plugins && navigator.plugins.length) {
    var c = navigator.plugins["Shockwave Flash"];
    c && (b = !0, c.description && a(c.description));
    navigator.plugins["Shockwave Flash 2.0"] && (b = !0)
  }else {
    if(navigator.mimeTypes && navigator.mimeTypes.length) {
      (b = (c = navigator.mimeTypes["application/x-shockwave-flash"]) && c.enabledPlugin) && a(c.enabledPlugin.description)
    }else {
      try {
        c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), b = !0, a(c.GetVariable("$version"))
      }catch(d) {
        try {
          c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = !0
        }catch(e) {
          try {
            c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = !0, a(c.GetVariable("$version"))
          }catch(g) {
          }
        }
      }
    }
  }
})();
S("goog.ui.media.FlashObject");
r.__loadFlashObject_callbacks = {};
function oh() {
  if(bc) {
    this.Aa = {}, this.Ec = {}, this.zc = []
  }
}
oh.prototype.a = S("goog.net.xhrMonitor");
oh.prototype.Q = bc;
oh.prototype.Rb = function(a) {
  this.Q = bc && a
};
function ph(a) {
  var b = qh;
  if(b.Q) {
    var c = u(a) ? a : ia(a) ? x(a) : "";
    R(b.a, "Pushing context: " + a + " (" + c + ")");
    b.zc.push(c)
  }
}
function rh() {
  var a = qh;
  if(a.Q) {
    var b = a.zc.pop();
    R(a.a, "Popping context: " + b);
    sh(a, b)
  }
}
function th(a) {
  var b = qh;
  if(b.Q) {
    a = x(a);
    Q(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.zc.length;c++) {
      var d = b.zc[c];
      uh(b.Aa, d, a);
      uh(b.Ec, a, d)
    }
  }
}
function sh(a, b) {
  var c = a.Ec[b], d = a.Aa[b];
  c && d && (R(a.a, "Updating dependent contexts"), Wa(c, function(a) {
    Wa(d, function(b) {
      uh(this.Aa, a, b);
      uh(this.Ec, b, a)
    }, this)
  }, a))
}
function uh(a, b, c) {
  a[b] || (a[b] = []);
  $a(a[b], c) || a[b].push(c)
}
var qh = new oh;
function vh() {
}
vh.prototype.Zb = k;
function wh() {
  return xh(yh)
}
var yh;
function zh() {
}
B(zh, vh);
function xh(a) {
  return(a = Ah(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Bh(a) {
  var b = {};
  Ah(a) && (b[0] = !0, b[1] = !0);
  return b
}
zh.prototype.Xc = k;
function Ah(a) {
  if(!a.Xc && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Xc = d
      }catch(e) {
      }
    }
    f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Xc
}
yh = new zh;
function Ch(a) {
  this.headers = new H;
  this.pb = a || k
}
B(Ch, bd);
Ch.prototype.a = S("goog.net.XhrIo");
var Dh = /^https?:?$/i;
q = Ch.prototype;
q.ja = !1;
q.g = k;
q.Dc = k;
q.Gb = "";
q.re = "";
q.Db = 0;
q.Eb = "";
q.Pc = !1;
q.mc = !1;
q.Yc = !1;
q.Ga = !1;
q.Ac = 0;
q.Na = k;
q.Re = "";
q.hg = !1;
q.send = function(a, b, c, d) {
  this.g && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Gb = a;
  this.Eb = "";
  this.Db = 0;
  this.re = b;
  this.Pc = !1;
  this.ja = !0;
  this.g = this.pb ? xh(this.pb) : new wh;
  this.Dc = this.pb ? this.pb.Zb || (this.pb.Zb = Bh(this.pb)) : yh.Zb || (yh.Zb = Bh(yh));
  th(this.g);
  this.g.onreadystatechange = z(this.Ge, this);
  try {
    Q(this.a, Eh(this, "Opening Xhr")), this.Yc = !0, this.g.open(b, a, !0), this.Yc = !1
  }catch(e) {
    Q(this.a, Eh(this, "Error opening Xhr: " + e.message));
    Fh(this, e);
    return
  }
  var a = c || "", g = this.headers.I();
  d && Fb(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.P("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Fb(g, function(a, b) {
    this.g.setRequestHeader(b, a)
  }, this);
  if(this.Re) {
    this.g.responseType = this.Re
  }
  if("withCredentials" in this.g) {
    this.g.withCredentials = this.hg
  }
  try {
    if(this.Na) {
      cd.clearTimeout(this.Na), this.Na = k
    }
    if(this.Ac > 0) {
      Q(this.a, Eh(this, "Will abort after " + this.Ac + "ms if incomplete")), this.Na = cd.setTimeout(z(this.dg, this), this.Ac)
    }
    Q(this.a, Eh(this, "Sending request"));
    this.mc = !0;
    this.g.send(a);
    this.mc = !1
  }catch(h) {
    Q(this.a, Eh(this, "Send error: " + h.message)), Fh(this, h)
  }
};
q.dispatchEvent = function(a) {
  if(this.g) {
    ph(this.g);
    try {
      return Ch.c.dispatchEvent.call(this, a)
    }finally {
      rh()
    }
  }else {
    return Ch.c.dispatchEvent.call(this, a)
  }
};
q.dg = function() {
  if(typeof ba != "undefined" && this.g) {
    this.Eb = "Timed out after " + this.Ac + "ms, aborting", this.Db = 8, Q(this.a, Eh(this, this.Eb)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function Fh(a, b) {
  a.ja = !1;
  if(a.g) {
    a.Ga = !0, a.g.abort(), a.Ga = !1
  }
  a.Eb = b;
  a.Db = 5;
  Hh(a);
  Ih(a)
}
function Hh(a) {
  if(!a.Pc) {
    a.Pc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
q.abort = function(a) {
  if(this.g && this.ja) {
    Q(this.a, Eh(this, "Aborting")), this.ja = !1, this.Ga = !0, this.g.abort(), this.Ga = !1, this.Db = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Ih(this)
  }
};
q.b = function() {
  if(this.g) {
    if(this.ja) {
      this.ja = !1, this.Ga = !0, this.g.abort(), this.Ga = !1
    }
    Ih(this, !0)
  }
  Ch.c.b.call(this)
};
q.Ge = function() {
  !this.Yc && !this.mc && !this.Ga ? this.Lf() : Jh(this)
};
q.Lf = function() {
  Jh(this)
};
function Jh(a) {
  if(a.ja && typeof ba != "undefined") {
    if(a.Dc[1] && a.sa() == 4 && Kh(a) == 2) {
      Q(a.a, Eh(a, "Local request error detected and ignored"))
    }else {
      if(a.mc && a.sa() == 4) {
        cd.setTimeout(z(a.Ge, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.sa() == 4) {
          Q(a.a, Eh(a, "Request complete"));
          a.ja = !1;
          var b;
          a: {
            switch(Kh(a)) {
              case 0:
                b = u(a.Gb) ? a.Gb.match(pe)[1] || k : a.Gb.ha;
                b = !(b ? Dh.test(b) : self.location ? Dh.test(self.location.protocol) : 1);
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
            a.Db = 6;
            var c;
            try {
              c = a.sa() > 2 ? a.g.statusText : ""
            }catch(d) {
              Q(a.a, "Can not get status: " + d.message), c = ""
            }
            a.Eb = c + " [" + Kh(a) + "]";
            Hh(a)
          }
          Ih(a)
        }
      }
    }
  }
}
function Ih(a, b) {
  if(a.g) {
    var c = a.g, d = a.Dc[0] ? s : k;
    a.g = k;
    a.Dc = k;
    if(a.Na) {
      cd.clearTimeout(a.Na), a.Na = k
    }
    b || (ph(c), a.dispatchEvent("ready"), rh());
    var e = qh;
    if(e.Q) {
      var g = x(c);
      Q(e.a, "Closing XHR : " + g);
      delete e.Ec[g];
      for(var h in e.Aa) {
        ab(e.Aa[h], g), e.Aa[h].length == 0 && delete e.Aa[h]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(j) {
      Sd(a.a, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
q.ne = function() {
  return!!this.g
};
q.sa = function() {
  return this.g ? this.g.readyState : 0
};
function Kh(a) {
  try {
    return a.sa() > 2 ? a.g.status : -1
  }catch(b) {
    return Td(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.g && this.sa() == 4 ? this.g.getResponseHeader(a) : i
};
function Eh(a, b) {
  return b + " [" + a.re + " " + a.Gb + " " + Kh(a) + "]"
}
;var Lh = !(I || J && !nc("420+"));
function Mh(a, b) {
  this.Ye = a;
  this.V = b
}
B(Mh, K);
q = Mh.prototype;
q.n = k;
q.xa = -1;
q.ae = !1;
q.je = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Nh(a) {
  var b = bf(a.Sd), c = b[0], b = b[1], d = r.parent;
  d ? (d.__XHRMaster_onframes(a.V, c, b), b != 1 && a.d()) : a.d()
}
q.Cf = function() {
  Nh(this);
  if(!this.Y) {
    var a = r.parent;
    a && a.__XHRMaster_oncomplete(this.V);
    this.d()
  }
};
q.Pf = function() {
  var a = r.parent;
  if(a) {
    this.xa = this.n.sa();
    if(this.xa >= 2 && !this.ae) {
      for(var b = new H, c = this.je.length;c--;) {
        var d = this.je[c];
        try {
          b.set(d, this.n.g.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.t() && (this.ae = !0, a.__XHRMaster_ongotheaders(this.V, Kb(b)), this.Y)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.V, this.xa);
    Lh && this.xa == 3 && Nh(this)
  }else {
    this.d()
  }
};
q.ed = function(a, b, c) {
  this.n = new Ch;
  N(this.n, "readystatechange", z(this.Pf, this));
  N(this.n, "complete", z(this.Cf, this));
  this.n.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.Sd = new af(this.n.g, 1048576)
};
q.b = function() {
  Mh.c.b.call(this);
  delete this.Sd;
  this.n && this.n.d();
  delete this.Ye.Tb[this.V];
  delete this.Ye
};
function Oh() {
  this.Tb = {}
}
B(Oh, K);
Oh.prototype.Gf = function(a, b, c, d) {
  var e = new Mh(this, a);
  this.Tb[a] = e;
  e.ed(b, c, d)
};
Oh.prototype.pf = function(a) {
  (a = this.Tb[a]) && a.d()
};
Oh.prototype.b = function() {
  Oh.c.b.call(this);
  for(var a = Ra(this.Tb);a.length;) {
    a.pop().d()
  }
  delete this.Tb
};
var Ph = new Oh;
r.__XHRSlave_makeRequest = z(Ph.Gf, Ph);
r.__XHRSlave_dispose = z(Ph.pf, Ph);
function Qh() {
}
Qh.prototype.$d = function() {
  return Boolean(Number((new Ug(document.location)).T.get("httpStreaming", "0"))) ? 2 : 1
};
function Rh() {
  var a = new Ug(document.location), b = r.__demo_shared_domain, a = a.I();
  Xg(a, "_____random_____." + b);
  Zg(a, "/httpface/");
  $g(a, "", i);
  b = new kf(a.toString().replace("_____random_____", "%random%"));
  return md(b)
}
;var Sh = S("ljstream.logger");
window.onerror = function(a, b, c) {
  Sd(Sh, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Th() {
  this.Ie = new tb
}
Th.prototype.ag = function(a, b) {
  Sh.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  Uh("Disconnected from server.  Try reloading this page.");
  $ = k
};
function Vh(a) {
  Sh.info("Sending preferences to server");
  var b;
  b = new Jf;
  b.o[1] = W("include_russian_posts").checked;
  b.Ba && (b.Ba[1] = !0);
  b = a.Ie.Qb(b);
  vf(a.B, [(new wb).Qb([2, b])])
}
Th.prototype.bg = function(a) {
  var a = vb(a), b = a[1];
  if(a[0] == 1) {
    var c = this.Ie.Oc(If.yb(), b), a = mb(c, 1), b = mb(c, 2), c = mb(c, 3);
    (a = ua(a)) || (a = "[No title]");
    var d = sa(ya(c)), e = document, c = e.createElement("div");
    I ? (c.innerHTML = "<br>" + d, c.removeChild(c.firstChild)) : c.innerHTML = d;
    if(c.childNodes.length == 1) {
      c = c.removeChild(c.firstChild)
    }else {
      for(d = e.createDocumentFragment();c.firstChild;) {
        d.appendChild(c.firstChild)
      }
      c = d
    }
    a = Ge("span", {}, Ge("a", {href:b, "class":"ljpost-title-link"}, a), Ge("span", {}, "\u00a0"), c);
    Wh(a)
  }
};
Th.prototype.reset = function(a) {
  Sh.info("resetting with reason: " + a);
  this.B.reset(a)
};
var $ = k, Xh = new nd(r.window);
function Uh(a) {
  a = Ge("span", {"class":"important-message"}, a);
  Wh(a)
}
function Yh() {
  $ && ($.reset("idle timeout fired"), $ = k, Uh("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var Zh = k;
function $h() {
  Zh != k && Xh.H.clearTimeout(Zh);
  $ && (Zh = Xh.H.setTimeout(Yh, 6E5))
}
N(window, ["click", "focus", "keydown", "keypress"], $h, !0);
var Fe = new Ae, ai = 0;
function Wh(a) {
  a = Ge("div", {"class":"row-" + (ai % 2 == 0 ? "even" : "odd")}, Ge("nobr", {}, a));
  W("ljstream-container-inner").appendChild(a);
  ai += 1;
  var b;
  if(b = Hf) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !J && d.compatMode == "CSS1Compat" ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new ye(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = Ee().height;
    b = !(a + b <= c + d)
  }
  if(b) {
    a = Ee().height, window.scrollBy(0, Math.round(a / 2) + 80)
  }
}
function bi() {
  var a = new Qh;
  $ = new Th;
  $h();
  jd(Rh(), function(b) {
    $ || f(Error("lastProto falsy?"));
    var b = new pf(b, a, Xh), c = $;
    b.nd = z(c.bg, c);
    b.onreset = z(c.ag, c);
    $.B = b;
    c = $;
    vf(c.B, ["subprotocol:ljstream"]);
    Vh(c);
    b.start();
    return k
  })
}
function ci() {
  N(r, "load", function() {
    window.scrollTo(0, 0)
  });
  N(W("include_russian_posts"), "click", function() {
    Vh($)
  });
  Hf = !0;
  N(W("automatic_scroll"), "click", function(a) {
    Hf = a.target.checked
  });
  var a = new Tg("Clear posts");
  Ig(a, "clear-posts-button");
  qg(a);
  N(a, "action", function() {
    W("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = W("ljstream-container");
  a.style.marginTop = W("demo-header").offsetHeight + "px";
  W("demo-header").style.width = "9000px";
  var b = Ge("div", {id:"ljstream-container-inner"});
  a.appendChild(b)
}
function di() {
  Xd().kb(Md);
  if((new Ug(document.location)).T.get("logging") == "1") {
    var a = new ag("main");
    a.Rb(!0);
    a.Ha()
  }
  Sh.info("Logger works.");
  ci();
  bi()
}
var ei = "__ljstream_init".split("."), fi = r;
!(ei[0] in fi) && fi.execScript && fi.execScript("var " + ei[0]);
for(var gi;ei.length && (gi = ei.shift());) {
  !ei.length && fa(di) ? fi[gi] = di : fi = fi[gi] ? fi[gi] : fi[gi] = {}
}
;})();
