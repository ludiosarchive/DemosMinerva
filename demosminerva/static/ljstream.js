(function(){function f(a) {
  throw a;
}
var i = void 0, l = null;
function aa(a) {
  return function(b) {
    this[a] = b
  }
}
function m(a) {
  return function() {
    return this[a]
  }
}
function p(a) {
  return function() {
    return a
  }
}
var q, ba = ba || {}, r = this;
function ca(a) {
  for(var a = a.split("."), b = r, c;c = a.shift();) {
    if(b[c] != l) {
      b = b[c]
    }else {
      return l
    }
  }
  return b
}
function s() {
}
function da(a) {
  a.Ua = function() {
    return a.kf || (a.kf = new a)
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
  return z.apply(l, arguments)
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
function C(a, b) {
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
ra = {ob:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, we:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
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
        var j = e, k = e.substr(-1), n = qa[k];
        if(n && (n = e.match(RegExp("\\" + n + "(?!$)", "g")), k = e.match(RegExp("\\" + k, "g")), (n ? n.length : 0) < (k ? k.length : 0))) {
          e = e.substr(0, e.length - 1), g--
        }
        b.we && (e = e.replace(b.we, function(a) {
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
    d += b.ob.apply(r, c[e])
  }
  return d || a
}
;function ta(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = String(a)
  }
}
C(ta, Error);
ta.prototype.name = "CustomError";
function ua(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
function va(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
var wa = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function xa(a) {
  a = String(a);
  return!wa.test(a) ? encodeURIComponent(a) : a
}
function ya(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>")
}
function za(a) {
  if(!Aa.test(a)) {
    return a
  }
  a.indexOf("&") != -1 && (a = a.replace(Ba, "&amp;"));
  a.indexOf("<") != -1 && (a = a.replace(Ca, "&lt;"));
  a.indexOf(">") != -1 && (a = a.replace(Da, "&gt;"));
  a.indexOf('"') != -1 && (a = a.replace(Ea, "&quot;"));
  return a
}
var Ba = /&/g, Ca = /</g, Da = />/g, Ea = /\"/g, Aa = /[&<>\"]/;
function Fa(a) {
  return ya(a.replace(/  /g, " &#160;"), i)
}
function Ga(a, b) {
  for(var c = 0, d = va(String(a)).split("."), e = va(String(b)).split("."), g = Math.max(d.length, e.length), h = 0;c == 0 && h < g;h++) {
    var j = d[h] || "", k = e[h] || "", n = RegExp("(\\d*)(\\D*)", "g"), B = RegExp("(\\d*)(\\D*)", "g");
    do {
      var o = n.exec(j) || ["", "", ""], v = B.exec(k) || ["", "", ""];
      if(o[0].length == 0 && v[0].length == 0) {
        break
      }
      c = Ha(o[1].length == 0 ? 0 : parseInt(o[1], 10), v[1].length == 0 ? 0 : parseInt(v[1], 10)) || Ha(o[2].length == 0, v[2].length == 0) || Ha(o[2], v[2])
    }while(c == 0)
  }
  return c
}
function Ha(a, b) {
  if(a < b) {
    return-1
  }else {
    if(a > b) {
      return 1
    }
  }
  return 0
}
;function Ia(a, b) {
  b.unshift(a);
  ta.call(this, ua.apply(l, b));
  b.shift();
  this.Xf = a
}
C(Ia, ta);
Ia.prototype.name = "AssertionError";
function Ja(a, b) {
  f(new Ia("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ka(a, b, c) {
  this.J = a;
  this.A = b;
  this.ad = c.name;
  this.Ya = !!c.Yf;
  this.Vf = !!c.required;
  this.ub = c.Sa;
  this.me = c.type;
  this.Jd = !1;
  switch(this.ub) {
    case La:
    ;
    case Ma:
    ;
    case Na:
    ;
    case Oa:
    ;
    case Pa:
      this.Jd = !0
  }
  this.Qf = c.defaultValue
}
var La = 3, Ma = 4, Na = 6, Oa = 16, Pa = 18;
function Qa(a) {
  return a.ub == 11 || a.ub == 10
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
  c = c == l ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(u(a)) {
    return!u(b) || b.length != 1 ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Xa = D.forEach ? function(a, b, c) {
  D.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
}, Ya = D.map ? function(a, b, c) {
  return D.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = Array(d), g = u(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in g && (e[h] = b.call(c, g[h], h, a))
  }
  return e
}, Za = D.some ? function(a, b, c) {
  return D.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && b.call(c, e[g], g, a)) {
      return!0
    }
  }
  return!1
}, $a = D.every ? function(a, b, c) {
  return D.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = u(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in e && !b.call(c, e[g], g, a)) {
      return!1
    }
  }
  return!0
};
function ab(a, b) {
  return Wa(a, b) >= 0
}
function bb(a, b) {
  var c = Wa(a, b);
  c >= 0 && D.splice.call(a, c, 1)
}
function cb(a) {
  return D.concat.apply(D, arguments)
}
function db(a) {
  if(t(a)) {
    return cb(a)
  }else {
    for(var b = [], c = 0, d = a.length;c < d;c++) {
      b[c] = a[c]
    }
    return b
  }
}
function eb(a, b) {
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
function fb(a, b, c, d) {
  D.splice.apply(a, gb(arguments, 1))
}
function gb(a, b, c) {
  return arguments.length <= 2 ? D.slice.call(a, b) : D.slice.call(a, b, c)
}
function hb(a, b) {
  D.sort.call(a, b || ib)
}
function ib(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function jb(a, b, c) {
  this.ke = a;
  this.ad = b.name || l;
  this.Sf = b.Md || l;
  this.Pf = b.Of;
  this.na = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.na[b.A] = b
  }
}
function kb(a) {
  a = Sa(a.na);
  hb(a, function(a, c) {
    return a.A - c.A
  });
  return a
}
;function lb() {
  this.o = {};
  this.Qa = this.constructor.Qa;
  var a = this.Qa.na, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.na = b;
  this.za = this.Xc = l
}
function mb(a, b) {
  for(var c in a.o) {
    a.na[c] || b.call(a, c, a.o[c])
  }
}
q = lb.prototype;
q.wb = m("Qa");
q.get = function(a, b) {
  return nb(this, a.A, b)
};
q.set = function(a, b) {
  var c = a.A;
  this.o[c] = b;
  this.za && (this.za[c] = !0)
};
q.add = function(a, b) {
  var c = a.A;
  this.o[c] || (this.o[c] = []);
  this.o[c].push(b)
};
q.clear = function(a) {
  delete this.o[a.A]
};
q.k = function(a) {
  if(!a || this.constructor != a.constructor) {
    return!1
  }
  for(var b = kb(this.wb()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(ob(this, d.A) != ob(a, d.A)) {
      return!1
    }
    if(ob(this, d.A)) {
      var e = Qa(d), g = d.A, h = this.o[g], g = a.o[g];
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
q.L = function() {
  for(var a = new this.constructor, b = kb(a.wb()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete a.o[d.A];
    if(ob(this, d.A)) {
      var e = Qa(d);
      if(d.Ya) {
        var g;
        g = d.A;
        pb(this, this.na[g]);
        g = this.o[g] || [];
        for(var h = 0;h < g.length;h++) {
          a.add(d, e ? g[h].L() : g[h])
        }
      }else {
        g = this.get(d), a.set(d, e ? g.L() : g)
      }
    }
  }
  return a
};
function ob(a, b) {
  return b in a.o && fa(a.o[b])
}
function pb(a, b) {
  if(a.Xc) {
    var c = b.A;
    if(!(c in a.za)) {
      var d = a.o, e;
      e = a.Xc;
      var g = a.o[c];
      if(g == l) {
        e = g
      }else {
        if(b.Ya) {
          var h = [];
          t(g);
          for(var j = 0;j < g.length;j++) {
            h[j] = e.$b(b, g[j])
          }
          e = h
        }else {
          e = e.$b(b, g)
        }
      }
      d[c] = e;
      a.za[c] = !0
    }
  }
}
function nb(a, b, c) {
  var d = a.na[b];
  pb(a, d);
  return d.Ya ? (c = c || 0, c >= 0 && qb(a, b), a.o[b][c]) : (t(a.o[b]), b in a.o ? a.o[b] : l)
}
function qb(a, b) {
  return a.na[b].Ya ? (ob(a, b) && t(a.o[b]), ob(a, b) ? a.o[b].length : 0) : ob(a, b) ? 1 : 0
}
function rb(a, b) {
  var c = [], d, e;
  for(e in b) {
    b.hasOwnProperty(e) && (e == 0 ? d = b[0] : c.push(new Ka(a, e, b[e])))
  }
  a.Qa = new jb(a, d, c);
  a.wb = function() {
    return a.Qa
  }
}
;function sb() {
}
sb.prototype.ac = function(a, b) {
  return Qa(a) ? this.Mb(b) : b
};
sb.prototype.Ic = function(a) {
  new a.ke;
  f(Error("Unimplemented"))
};
sb.prototype.$b = function(a, b) {
  if(Qa(a)) {
    return this.Ic(a.me.Qa, b)
  }
  if(!a.Jd) {
    return b
  }
  var c = a.me;
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
function tb() {
}
C(tb, sb);
tb.prototype.Ic = function(a, b) {
  var c = new a.ke;
  c.Xc = this;
  c.o = b;
  c.za = {};
  return c
};
function ub() {
}
C(ub, tb);
ub.prototype.Mb = function(a) {
  for(var b = kb(a.wb()), c = [], d = 0;d < b.length;d++) {
    var e = b[d];
    if(ob(a, e.A)) {
      var g = e.A;
      if(e.Ya) {
        c[g] = [];
        for(var h = 0;h < qb(a, e.A);h++) {
          c[g][h] = this.ac(e, a.get(e, h))
        }
      }else {
        c[g] = this.ac(e, a.get(e))
      }
    }
  }
  mb(a, function(a, b) {
    c[a] = b
  });
  return c
};
ub.prototype.ac = function(a, b) {
  return a.ub == 8 ? b ? 1 : 0 : sb.prototype.ac.apply(this, arguments)
};
ub.prototype.$b = function(a, b) {
  return a.ub == 8 ? b === 1 : sb.prototype.$b.apply(this, arguments)
};
function vb(a) {
  return w(a) || typeof a == "object" && w(a.call) && w(a.apply)
}
;function wb(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  f(Error("Invalid JSON string: " + a))
}
function xb() {
}
xb.prototype.Mb = function(a) {
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
      if(b == l) {
        c.push("null");
        break
      }
      if(t(b)) {
        var d = b.length;
        c.push("[");
        for(var e = "", g = 0;g < d;g++) {
          c.push(e), yb(a, b[g], c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(e in b) {
        Object.prototype.hasOwnProperty.call(b, e) && (g = b[e], typeof g != "function" && (c.push(d), zb(e, c), c.push(":"), yb(a, g, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      f(Error("Unknown type: " + typeof b))
  }
}
var Ab = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\u000b"}, Bb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function zb(a, b) {
  b.push('"', a.replace(Bb, function(a) {
    if(a in Ab) {
      return Ab[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    b < 16 ? e += "000" : b < 256 ? e += "00" : b < 4096 && (e += "0");
    return Ab[a] = e + b.toString(16)
  }), '"')
}
;function Cb(a, b, c) {
  var d = Wa(c, a);
  if(d != -1) {
    b.push("#CYCLETO:" + (c.length - d) + "#")
  }else {
    c.push(a);
    d = ea(a);
    if(d == "boolean" || d == "number" || d == "null" || d == "undefined") {
      b.push(String(a))
    }else {
      if(d == "string") {
        zb(a, b)
      }else {
        if(vb(a.B)) {
          a.B(b, c)
        }else {
          if(vb(a.Qe)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if(d == "array") {
                d = a.length;
                b.push("[");
                for(var e = "", g = 0;g < d;g++) {
                  b.push(e), Cb(a[g], b, c), e = ", "
                }
                b.push("]")
              }else {
                if(d == "object") {
                  if(ha(a) && typeof a.valueOf == "function") {
                    b.push("new Date(", String(a.valueOf()), ")")
                  }else {
                    for(var d = Ta(a).concat(Ua), e = {}, h = g = 0;h < d.length;) {
                      var j = d[h++], k = ia(j) ? "o" + x(j) : (typeof j).charAt(0) + j;
                      Object.prototype.hasOwnProperty.call(e, k) || (e[k] = !0, d[g++] = j)
                    }
                    d.length = g;
                    b.push("{");
                    e = "";
                    for(h = 0;h < d.length;h++) {
                      g = d[h], Object.prototype.hasOwnProperty.call(a, g) && (j = a[g], b.push(e), zb(g, b), b.push(": "), Cb(j, b, c), e = ", ")
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
  Cb(a, b, c)
}
function F(a) {
  var b = [];
  E(a, b, i);
  return b.join("")
}
;function Db(a) {
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
function Eb(a) {
  if(typeof a.I == "function") {
    return a.I()
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
  return Sa(a)
}
function Fb(a) {
  if(typeof a.pa == "function") {
    return a.pa()
  }
  if(typeof a.I != "function") {
    if(ga(a) || u(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return Ta(a)
  }
}
function Gb(a, b, c) {
  if(typeof a.forEach == "function") {
    a.forEach(b, c)
  }else {
    if(ga(a) || u(a)) {
      Xa(a, b, c)
    }else {
      for(var d = Fb(a), e = Eb(a), g = e.length, h = 0;h < g;h++) {
        b.call(c, e[h], d && d[h], a)
      }
    }
  }
}
function Hb(a, b) {
  if(typeof a.every == "function") {
    return a.every(b, i)
  }
  if(ga(a) || u(a)) {
    return $a(a, b, i)
  }
  for(var c = Fb(a), d = Eb(a), e = d.length, g = 0;g < e;g++) {
    if(!b.call(i, d[g], c && c[g], a)) {
      return!1
    }
  }
  return!0
}
;function Ib(a, b) {
  this.m = {};
  this.j = [];
  var c = arguments.length;
  if(c > 1) {
    c % 2 && f(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.Cc(a)
  }
}
q = Ib.prototype;
q.e = 0;
q.ud = 0;
q.t = m("e");
q.I = function() {
  Jb(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.m[this.j[b]])
  }
  return a
};
q.pa = function() {
  Jb(this);
  return this.j.concat()
};
q.O = function(a) {
  return Kb(this.m, a)
};
q.Yb = function(a) {
  for(var b = 0;b < this.j.length;b++) {
    var c = this.j[b];
    if(Kb(this.m, c) && this.m[c] == a) {
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
  var c = b || Lb;
  Jb(this);
  for(var d, e = 0;d = this.j[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return!1
    }
  }
  return!0
};
function Lb(a, b) {
  return a === b
}
q.Ga = function() {
  return this.e == 0
};
q.clear = function() {
  this.m = {};
  this.ud = this.e = this.j.length = 0
};
q.remove = function(a) {
  return Kb(this.m, a) ? (delete this.m[a], this.e--, this.ud++, this.j.length > 2 * this.e && Jb(this), !0) : !1
};
function Jb(a) {
  if(a.e != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      Kb(a.m, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.e != a.j.length) {
    for(var e = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], Kb(e, d) || (a.j[c++] = d, e[d] = 1), b++
    }
    a.j.length = c
  }
}
q.get = function(a, b) {
  return Kb(this.m, a) ? this.m[a] : b
};
q.set = function(a, b) {
  Kb(this.m, a) || (this.e++, this.j.push(a), this.ud++);
  this.m[a] = b
};
q.Cc = function(a) {
  var b;
  a instanceof Ib ? (b = a.pa(), a = a.I()) : (b = Ta(a), a = Sa(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
q.L = function() {
  return new Ib(this)
};
function Mb(a) {
  Jb(a);
  for(var b = {}, c = 0;c < a.j.length;c++) {
    var d = a.j[c];
    b[d] = a.m[d]
  }
  return b
}
function Kb(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function Nb(a) {
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
;function Ob(a, b) {
  this.Na = a;
  this.Ka = b
}
Ob.prototype.k = function(a) {
  return a instanceof Ob && this.Na == a.Na && this.Ka.join(",") == a.Ka
};
Ob.prototype.B = function(a, b) {
  a.push("new SACK(", String(this.Na), ", ");
  E(this.Ka, a, b);
  a.push(")")
};
function Pb() {
  this.F = new Ib
}
q = Pb.prototype;
q.Pa = -1;
q.wa = 0;
q.append = function(a) {
  var b = Nb(a);
  this.F.set(this.Pa + 1, [a, b]);
  this.Pa += 1;
  this.wa += b
};
q.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
q.B = function(a) {
  a.push("<Queue with ", String(this.F.t()), " item(s), counter=#", String(this.Pa), ", size=", String(this.wa), ">")
};
function Qb(a) {
  Jb(a.F);
  hb(a.F.j);
  return a.F.j
}
function Rb() {
  this.xa = new Ib
}
Rb.prototype.$a = -1;
Rb.prototype.wa = 0;
function Sb(a) {
  var b = a.xa.pa();
  hb(b);
  return new Ob(a.$a, b)
}
var Tb = {};
function Ub() {
  return!0
}
;var Vb, Wb, Xb, Yb, Zb;
function $b() {
  return r.navigator ? r.navigator.userAgent : l
}
Zb = Yb = Xb = Wb = Vb = !1;
var ac;
if(ac = $b()) {
  var bc = r.navigator;
  Vb = ac.indexOf("Opera") == 0;
  Wb = !Vb && ac.indexOf("MSIE") != -1;
  Yb = (Xb = !Vb && ac.indexOf("WebKit") != -1) && ac.indexOf("Mobile") != -1;
  Zb = !Vb && !Xb && bc.product == "Gecko"
}
var cc = Vb, G = Wb, dc = Zb, H = Xb, ec = Yb, fc = r.navigator, gc = (fc && fc.platform || "").indexOf("Mac") != -1, hc;
a: {
  var ic = "", jc;
  if(cc && r.opera) {
    var kc = r.opera.version, ic = typeof kc == "function" ? kc() : kc
  }else {
    if(dc ? jc = /rv\:([^\);]+)(\)|;)/ : G ? jc = /MSIE\s+([^\);]+)(\)|;)/ : H && (jc = /WebKit\/(\S+)/), jc) {
      var lc = jc.exec($b()), ic = lc ? lc[1] : ""
    }
  }
  if(G) {
    var mc, nc = r.document;
    mc = nc ? nc.documentMode : i;
    if(mc > parseFloat(ic)) {
      hc = String(mc);
      break a
    }
  }
  hc = ic
}
var oc = {};
function pc(a) {
  return oc[a] || (oc[a] = Ga(hc, a) >= 0)
}
var qc = {};
function rc() {
  return qc[9] || (qc[9] = G && document.documentMode && document.documentMode >= 9)
}
;var sc;
var tc = !G || rc(), uc = G && !pc("8");
function I() {
}
I.prototype.X = !1;
I.prototype.c = function() {
  if(!this.X) {
    this.X = !0, this.b()
  }
};
I.prototype.b = function() {
  this.Xe && vc.apply(l, this.Xe)
};
function vc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ga(d) ? vc.apply(l, d) : d && typeof d.c == "function" && d.c()
  }
}
;function wc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
C(wc, I);
q = wc.prototype;
q.b = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
q.Ia = !1;
q.Jb = !0;
q.stopPropagation = function() {
  this.Ia = !0
};
q.preventDefault = function() {
  this.Jb = !1
};
var xc = new Function("a", "return a");
function yc(a, b) {
  a && this.Fa(a, b)
}
C(yc, wc);
var zc = [1, 4, 2];
q = yc.prototype;
q.target = l;
q.relatedTarget = l;
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
q.tf = !1;
q.ea = l;
q.Fa = function(a, b) {
  var c = this.type = a.type;
  wc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(dc) {
      var e;
      a: {
        try {
          xc(d.nodeName);
          e = !0;
          break a
        }catch(g) {
        }
        e = !1
      }
      e || (d = l)
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
  this.tf = gc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.ea = a;
  delete this.Jb;
  delete this.Ia
};
function Ac(a) {
  return tc ? a.ea.button == 0 : a.type == "click" ? !0 : !!(a.ea.button & zc[0])
}
q.stopPropagation = function() {
  yc.d.stopPropagation.call(this);
  this.ea.stopPropagation ? this.ea.stopPropagation() : this.ea.cancelBubble = !0
};
q.preventDefault = function() {
  yc.d.preventDefault.call(this);
  var a = this.ea;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, uc) {
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
  yc.d.b.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ea = l
};
function Bc() {
}
var Cc = 0;
q = Bc.prototype;
q.key = 0;
q.Ja = !1;
q.Fc = !1;
q.Fa = function(a, b, c, d, e, g) {
  w(a) ? this.be = !0 : a && a.handleEvent && w(a.handleEvent) ? this.be = !1 : f(Error("Invalid listener argument"));
  this.bb = a;
  this.ve = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.fc = g;
  this.Fc = !1;
  this.key = ++Cc;
  this.Ja = !1
};
q.handleEvent = function(a) {
  return this.be ? this.bb.call(this.fc || this.src, a) : this.bb.handleEvent.call(this.bb, a)
};
var Dc, Ec = (Dc = "ScriptEngine" in r && r.ScriptEngine() == "JScript") ? r.ScriptEngineMajorVersion() + "." + r.ScriptEngineMinorVersion() + "." + r.ScriptEngineBuildVersion() : "0";
function J(a, b) {
  this.ge = b;
  this.Ca = [];
  a > this.ge && f(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.Ca.push(this.ba ? this.ba() : {})
  }
}
C(J, I);
J.prototype.ba = l;
J.prototype.Kd = l;
J.prototype.getObject = function() {
  return this.Ca.length ? this.Ca.pop() : this.ba ? this.ba() : {}
};
function Fc(a, b) {
  a.Ca.length < a.ge ? a.Ca.push(b) : Gc(a, b)
}
function Gc(a, b) {
  if(a.Kd) {
    a.Kd(b)
  }else {
    if(ia(b)) {
      if(w(b.c)) {
        b.c()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
J.prototype.b = function() {
  J.d.b.call(this);
  for(var a = this.Ca;a.length;) {
    Gc(this, a.pop())
  }
  delete this.Ca
};
var Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc, Rc;
(function() {
  function a() {
    return{e:0, T:0}
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
    return new Bc
  }
  function e() {
    return new yc
  }
  var g = Dc && !(Ga(Ec, "5.7") >= 0), h;
  Mc = function(a) {
    h = a
  };
  if(g) {
    Hc = function() {
      return j.getObject()
    };
    Ic = function(a) {
      Fc(j, a)
    };
    Jc = function() {
      return k.getObject()
    };
    Kc = function(a) {
      Fc(k, a)
    };
    Lc = function() {
      return n.getObject()
    };
    Nc = function() {
      Fc(n, c())
    };
    Oc = function() {
      return B.getObject()
    };
    Pc = function(a) {
      Fc(B, a)
    };
    Qc = function() {
      return o.getObject()
    };
    Rc = function(a) {
      Fc(o, a)
    };
    var j = new J(0, 600);
    j.ba = a;
    var k = new J(0, 600);
    k.ba = b;
    var n = new J(0, 600);
    n.ba = c;
    var B = new J(0, 600);
    B.ba = d;
    var o = new J(0, 600);
    o.ba = e
  }else {
    Hc = a, Ic = s, Jc = b, Kc = s, Lc = c, Nc = s, Oc = d, Pc = s, Qc = e, Rc = s
  }
})();
var Sc = {}, K = {}, Tc = {}, Uc = {};
function L(a, b, c, d, e) {
  if(b) {
    if(t(b)) {
      for(var g = 0;g < b.length;g++) {
        L(a, b[g], c, d, e)
      }
      return l
    }else {
      var d = !!d, h = K;
      b in h || (h[b] = Hc());
      h = h[b];
      d in h || (h[d] = Hc(), h.e++);
      var h = h[d], j = x(a), k;
      h.T++;
      if(h[j]) {
        k = h[j];
        for(g = 0;g < k.length;g++) {
          if(h = k[g], h.bb == c && h.fc == e) {
            if(h.Ja) {
              break
            }
            return k[g].key
          }
        }
      }else {
        k = h[j] = Jc(), h.e++
      }
      g = Lc();
      g.src = a;
      h = Oc();
      h.Fa(c, g, a, b, d, e);
      c = h.key;
      g.key = c;
      k.push(h);
      Sc[c] = h;
      Tc[j] || (Tc[j] = Jc());
      Tc[j].push(h);
      a.addEventListener ? (a == r || !a.Gd) && a.addEventListener(b, g, d) : a.attachEvent(b in Uc ? Uc[b] : Uc[b] = "on" + b, g);
      return c
    }
  }else {
    f(Error("Invalid event type"))
  }
}
function Vc(a, b, c, d, e) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      Vc(a, b[g], c, d, e)
    }
    return l
  }
  a = L(a, b, c, d, e);
  Sc[a].Fc = !0;
  return a
}
function Wc(a, b, c, d, e) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      Wc(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = Xc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].bb == c && a[g].capture == d && a[g].fc == e) {
          M(a[g].key);
          break
        }
      }
    }
  }
}
function M(a) {
  if(!Sc[a]) {
    return!1
  }
  var b = Sc[a];
  if(b.Ja) {
    return!1
  }
  var c = b.src, d = b.type, e = b.ve, g = b.capture;
  c.removeEventListener ? (c == r || !c.Gd) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in Uc ? Uc[d] : Uc[d] = "on" + d, e);
  c = x(c);
  e = K[d][g][c];
  if(Tc[c]) {
    var h = Tc[c];
    bb(h, b);
    h.length == 0 && delete Tc[c]
  }
  b.Ja = !0;
  e.oe = !0;
  Yc(d, g, c, e);
  delete Sc[a];
  return!0
}
function Yc(a, b, c, d) {
  if(!d.kc && d.oe) {
    for(var e = 0, g = 0;e < d.length;e++) {
      if(d[e].Ja) {
        var h = d[e].ve;
        h.src = l;
        Nc(h);
        Pc(d[e])
      }else {
        e != g && (d[g] = d[e]), g++
      }
    }
    d.length = g;
    d.oe = !1;
    g == 0 && (Kc(d), delete K[a][b][c], K[a][b].e--, K[a][b].e == 0 && (Ic(K[a][b]), delete K[a][b], K[a].e--), K[a].e == 0 && (Ic(K[a]), delete K[a]))
  }
}
function Zc(a) {
  var b, c = 0, d = b == l;
  b = !!b;
  if(a == l) {
    Ra(Tc, function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          M(g.key), c++
        }
      }
    })
  }else {
    if(a = x(a), Tc[a]) {
      for(var a = Tc[a], e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          M(g.key), c++
        }
      }
    }
  }
}
function Xc(a, b, c) {
  var d = K;
  return b in d && (d = d[b], c in d && (d = d[c], a = x(a), d[a])) ? d[a] : l
}
function $c(a, b, c, d, e) {
  var g = 1, b = x(b);
  if(a[b]) {
    a.T--;
    a = a[b];
    a.kc ? a.kc++ : a.kc = 1;
    try {
      for(var h = a.length, j = 0;j < h;j++) {
        var k = a[j];
        k && !k.Ja && (g &= ad(k, e) !== !1)
      }
    }finally {
      a.kc--, Yc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function ad(a, b) {
  var c = a.handleEvent(b);
  a.Fc && M(a.key);
  return c
}
Mc(function(a, b) {
  if(!Sc[a]) {
    return!0
  }
  var c = Sc[a], d = c.type, e = K;
  if(!(d in e)) {
    return!0
  }
  var e = e[d], g, h;
  sc === i && (sc = G && !r.addEventListener);
  if(sc) {
    g = b || ca("window.event");
    var j = !0 in e, k = !1 in e;
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
          }catch(B) {
            n = !0
          }
        }
        if(n || g.returnValue == i) {
          g.returnValue = !0
        }
      }
    }
    n = Qc();
    n.Fa(g, this);
    g = !0;
    try {
      if(j) {
        for(var o = Jc(), v = n.currentTarget;v;v = v.parentNode) {
          o.push(v)
        }
        h = e[!0];
        h.T = h.e;
        for(var y = o.length - 1;!n.Ia && y >= 0 && h.T;y--) {
          n.currentTarget = o[y], g &= $c(h, o[y], d, !0, n)
        }
        if(k) {
          h = e[!1];
          h.T = h.e;
          for(y = 0;!n.Ia && y < o.length && h.T;y++) {
            n.currentTarget = o[y], g &= $c(h, o[y], d, !1, n)
          }
        }
      }else {
        g = ad(c, n)
      }
    }finally {
      if(o) {
        o.length = 0, Kc(o)
      }
      n.c();
      Rc(n)
    }
    return g
  }
  d = new yc(b, this);
  try {
    g = ad(c, d)
  }finally {
    d.c()
  }
  return g
});
var bd = 0;
function cd() {
}
C(cd, I);
q = cd.prototype;
q.Gd = !0;
q.mc = l;
q.kd = aa("mc");
q.addEventListener = function(a, b, c, d) {
  L(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Wc(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = K;
  if(b in c) {
    if(u(a)) {
      a = new wc(a, this)
    }else {
      if(a instanceof wc) {
        a.target = a.target || this
      }else {
        var d = a, a = new wc(b, this);
        Va(a, d)
      }
    }
    var d = 1, e, c = c[b], b = !0 in c, g;
    if(b) {
      e = [];
      for(g = this;g;g = g.mc) {
        e.push(g)
      }
      g = c[!0];
      g.T = g.e;
      for(var h = e.length - 1;!a.Ia && h >= 0 && g.T;h--) {
        a.currentTarget = e[h], d &= $c(g, e[h], a.type, !0, a) && a.Jb != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.T = g.e, b) {
        for(h = 0;!a.Ia && h < e.length && g.T;h++) {
          a.currentTarget = e[h], d &= $c(g, e[h], a.type, !1, a) && a.Jb != !1
        }
      }else {
        for(e = this;!a.Ia && e && g.T;e = e.mc) {
          a.currentTarget = e, d &= $c(g, e, a.type, !1, a) && a.Jb != !1
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
  cd.d.b.call(this);
  Zc(this);
  this.mc = l
};
var dd = r.window;
bd++;
bd++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function ed(a, b) {
  this.Wb = [];
  this.Nf = a;
  this.We = b || l
}
q = ed.prototype;
q.Ta = !1;
q.Wa = !1;
q.Fb = 0;
q.Ee = !1;
q.Te = !1;
q.Dd = function(a, b) {
  this.Ta = !0;
  this.qc = b;
  this.Wa = !a;
  fd(this);
  this.Fb--;
  this.Fb == 0 && this.Ta && fd(this)
};
q.ob = function(a) {
  if(this.Ta) {
    this.Ee || f(new gd(this)), this.Ee = !1
  }
  this.Ta = !0;
  this.qc = a;
  this.Wa = !1;
  fd(this)
};
function hd(a, b) {
  id(a, b, l, i)
}
function id(a, b, c, d) {
  a.Wb.push([b, c, d]);
  a.Ta && fd(a)
}
function jd(a) {
  return Za(a.Wb, function(a) {
    return w(a[1])
  })
}
function fd(a) {
  a.sd && a.Ta && jd(a) && (r.clearTimeout(a.sd), delete a.sd);
  for(var b = a.qc, c = !1, d = !1;a.Wb.length && a.Fb == 0;) {
    var e = a.Wb.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.Wa ? h : g) {
      try {
        var j = g.call(e || a.We, b);
        if(fa(j)) {
          a.Wa = a.Wa && (j == b || j instanceof Error), a.qc = b = j
        }
        b instanceof ed && (d = !0, a.Fb++)
      }catch(k) {
        b = k, a.Wa = !0, jd(a) || (c = !0)
      }
    }
  }
  a.qc = b;
  if(d && a.Fb) {
    id(b, z(a.Dd, a, !0), z(a.Dd, a, !1)), b.Te = !0
  }
  if(c) {
    a.sd = r.setTimeout(function() {
      f(b)
    }, 0)
  }
}
function gd(a) {
  ta.call(this);
  this.Rf = a
}
C(gd, ta);
gd.prototype.message = "Already called";
function kd(a) {
  this.G = a;
  this.Kc = [];
  this.Ld = [];
  this.Mf = z(this.If, this)
}
kd.prototype.Hf = l;
kd.prototype.If = function() {
  this.Hf = l;
  var a = this.Kc;
  this.Kc = [];
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
  if(this.Kc.length == 0) {
    a = this.Ld;
    this.Ld = [];
    for(b = 0;b < a.length;b++) {
      a[b].ob(l)
    }
  }
};
new kd(r.window);
function ld() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ A()).toString(36)
}
function md(a) {
  return a.substr(0, a.length - 1)
}
var nd = /^(0|[1-9]\d*)$/, od = /^(0|\-?[1-9]\d*)$/;
function pd(a) {
  var b = qd;
  return nd.test(a) && (a = parseInt(a, 10), a <= b) ? a : l
}
;function rd(a) {
  this.m = new Ib;
  a && this.Cc(a)
}
function sd(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + x(a) : b.substr(0, 1) + a
}
q = rd.prototype;
q.t = function() {
  return this.m.t()
};
q.add = function(a) {
  this.m.set(sd(a), a)
};
q.Cc = function(a) {
  for(var a = Eb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
q.hd = function(a) {
  for(var a = Eb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
q.remove = function(a) {
  return this.m.remove(sd(a))
};
q.clear = function() {
  this.m.clear()
};
q.Ga = function() {
  return this.m.Ga()
};
q.contains = function(a) {
  return this.m.O(sd(a))
};
q.I = function() {
  return this.m.I()
};
q.L = function() {
  return new rd(this)
};
q.k = function(a) {
  return this.t() == Db(a) && td(this, a)
};
function td(a, b) {
  var c = Db(b);
  if(a.t() > c) {
    return!1
  }
  !(b instanceof rd) && c > 5 && (b = new rd(b));
  return Hb(a, function(a) {
    if(typeof b.contains == "function") {
      a = b.contains(a)
    }else {
      if(typeof b.Yb == "function") {
        a = b.Yb(a)
      }else {
        if(ga(b) || u(b)) {
          a = ab(b, a)
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
;function ud(a) {
  return vd(a || arguments.callee.caller, [])
}
function vd(a, b) {
  var c = [];
  if(ab(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(wd(a) + "(");
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
            g = (g = wd(g)) ? g : "[fn]";
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
        c.push(vd(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function wd(a) {
  if(xd[a]) {
    return xd[a]
  }
  a = String(a);
  if(!xd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    xd[a] = b ? b[1] : "[Anonymous]"
  }
  return xd[a]
}
var xd = {};
function yd(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
yd.prototype.yf = 0;
yd.prototype.Mc = l;
yd.prototype.Lc = l;
var zd = 0;
yd.prototype.reset = function(a, b, c, d, e) {
  this.yf = typeof e == "number" ? e : zd++;
  this.Ge = d || A();
  this.R = a;
  this.le = b;
  this.fe = c;
  delete this.Mc;
  delete this.Lc
};
yd.prototype.ib = aa("R");
function Ad(a) {
  this.ad = a
}
Ad.prototype.J = l;
Ad.prototype.R = l;
Ad.prototype.la = l;
Ad.prototype.zb = l;
function N(a, b) {
  this.name = a;
  this.value = b
}
N.prototype.toString = m("name");
var Cd = new N("SHOUT", 1200), Dd = new N("SEVERE", 1E3), Ed = new N("WARNING", 900), Fd = new N("INFO", 800), Gd = new N("CONFIG", 700), Hd = new N("FINE", 500), Id = new N("FINEST", 300), Jd = new N("ALL", 0), Kd = [new N("OFF", Infinity), Cd, Dd, Ed, Fd, Gd, Hd, new N("FINER", 400), Id, Jd], Ld = l;
function Md(a) {
  if(!Ld) {
    Ld = {};
    for(var b = 0, c;c = Kd[b];b++) {
      Ld[c.value] = c, Ld[c.name] = c
    }
  }
  return Ld[a] || l
}
q = Ad.prototype;
q.getParent = m("J");
q.ib = aa("R");
function Nd(a) {
  if(a.R) {
    return a.R
  }
  if(a.J) {
    return Nd(a.J)
  }
  Ja("Root logger has no level set.");
  return l
}
q.log = function(a, b, c) {
  if(a.value >= Nd(this).value) {
    a = this.cf(a, b, c);
    r.console && r.console.markTimeline && r.console.markTimeline("log:" + a.le);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.zb) {
        for(var e = 0, g = i;g = c.zb[e];e++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
q.cf = function(a, b, c) {
  var d = new yd(a, String(b), this.ad);
  if(c) {
    d.Mc = c;
    var e;
    var g = arguments.callee.caller;
    try {
      var h;
      var j = ca("window.location.href");
      if(u(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var k, n, B = !1;
        try {
          k = c.lineNumber || c.Wf || "Not available"
        }catch(o) {
          k = "Not available", B = !0
        }
        try {
          n = c.fileName || c.filename || c.sourceURL || j
        }catch(v) {
          n = "Not available", B = !0
        }
        h = B || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:k, fileName:n, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + za(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + za(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + za(ud(g) + "-> ")
    }catch(y) {
      e = "Exception trying to expose exception! You win, we lose. " + y
    }
    d.Lc = e
  }
  return d
};
function Od(a, b) {
  a.log(Dd, b, i)
}
function Pd(a, b) {
  a.log(Ed, b, i)
}
q.info = function(a, b) {
  this.log(Fd, a, b)
};
function O(a, b) {
  a.log(Hd, b, i)
}
function P(a, b) {
  a.log(Id, b, i)
}
var Qd = {}, Rd = l;
function Sd() {
  Rd || (Rd = new Ad(""), Qd[""] = Rd, Rd.ib(Gd))
}
function Td() {
  Sd();
  return Rd
}
function Q(a) {
  Sd();
  var b;
  if(!(b = Qd[a])) {
    b = new Ad(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Q(a.substr(0, c));
    if(!c.la) {
      c.la = {}
    }
    c.la[d] = b;
    b.J = c;
    Qd[a] = b
  }
  return b
}
;Q("cw.net.FlashSocket");
Q("cw.net.FlashSocketTracker");
function Ud(a) {
  this.ma = a;
  this.Ec = []
}
C(Ud, I);
Ud.prototype.a = Q("cw.net.FlashSocketConduit");
Ud.prototype.xd = function(a) {
  this.Ec ? (P(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Ec.push.apply(this.Ec, a)) : (P(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.nd.xd(a))
};
Ud.prototype.Bd = function(a, b) {
  this.nd.Bd(a, b)
};
Ud.prototype.b = function() {
  this.a.info("in disposeInternal.");
  Ud.d.b.call(this);
  this.nd.c();
  delete this.ma
};
var qd = Math.pow(2, 53);
var Vd = {Qe:p("<cw.eq.Wildcard>")};
function Wd(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function Xd(a, b, c) {
  var d = ea(a), e = ea(b);
  if(a == Vd || b == Vd) {
    return!0
  }else {
    if(a != l && typeof a.k == "function") {
      return c && c.push("running custom equals function on left object"), a.k(b, c)
    }else {
      if(b != l && typeof b.k == "function") {
        return c && c.push("running custom equals function on right object"), b.k(a, c)
      }else {
        if(Wd(d) || Wd(e)) {
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
                      if(!Xd(a[d], b[d], c)) {
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
                if(a.Pe == Ub && b.Pe == Ub) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = !1;
                        break a
                      }
                      if(!Xd(a[g], b[g], c)) {
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
;function R(a) {
  ta.call(this, a)
}
C(R, ta);
R.prototype.name = "cw.net.InvalidFrame";
function S() {
  var a = [];
  this.Q(a);
  return a.join("")
}
function Yd() {
}
Yd.prototype.k = function(a, b) {
  return!(a instanceof Yd) ? !1 : Xd(Zd(this), Zd(a), b)
};
Yd.prototype.B = function(a, b) {
  a.push("<HelloFrame properties=");
  E(Zd(this), a, b);
  a.push(">")
};
function Zd(a) {
  return[a.lb, a.te, a.Wd, a.ye, a.Qb, a.qd, a.ne, a.je, a.Zc, a.he, a.Le, a.Fe, a.V, a.jc]
}
Yd.prototype.N = S;
Yd.prototype.Q = function(a) {
  var b = {};
  b.tnum = this.lb;
  b.ver = this.te;
  b.format = this.Wd;
  b["new"] = this.ye;
  b.id = this.Qb;
  b.ming = this.qd;
  b.pad = this.ne;
  b.maxb = this.je;
  if(fa(this.Zc)) {
    b.maxt = this.Zc
  }
  b.maxia = this.he;
  b.tcpack = this.Le;
  b.eeds = this.Fe;
  b.sack = this.V instanceof Ob ? md((new T(this.V)).N()) : this.V;
  b.seenack = this.jc instanceof Ob ? md((new T(this.jc)).N()) : this.jc;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new xb).Mb(b), "H")
};
function $d(a) {
  this.kb = a
}
$d.prototype.k = function(a) {
  return a instanceof $d && this.kb == a.kb
};
$d.prototype.B = function(a, b) {
  a.push("new StringFrame(");
  E(this.kb, a, b);
  a.push(")")
};
$d.prototype.N = S;
$d.prototype.Q = function(a) {
  a.push(this.kb, " ")
};
function ae(a) {
  this.Xb = a
}
ae.prototype.k = function(a) {
  return a instanceof ae && this.Xb == a.Xb
};
ae.prototype.B = function(a, b) {
  a.push("new CommentFrame(");
  E(this.Xb, a, b);
  a.push(")")
};
ae.prototype.N = S;
ae.prototype.Q = function(a) {
  a.push(this.Xb, "^")
};
function be(a) {
  this.Lb = a
}
be.prototype.k = function(a) {
  return a instanceof be && this.Lb == a.Lb
};
be.prototype.B = function(a) {
  a.push("new SeqNumFrame(", String(this.Lb), ")")
};
be.prototype.N = S;
be.prototype.Q = function(a) {
  a.push(String(this.Lb), "N")
};
function ce(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return l
  }
  a: {
    var c = b[1], a = qd;
    if(od.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
      a = c;
      break a
    }
    a = l
  }
  if(a == l) {
    return l
  }
  c = [];
  if(b[0]) {
    for(var b = b[0].split(","), d = 0, e = b.length;d < e;d++) {
      var g = pd(b[d]);
      if(g == l) {
        return l
      }
      c.push(g)
    }
  }
  return new Ob(a, c)
}
function T(a) {
  this.V = a
}
T.prototype.k = function(a, b) {
  return a instanceof T && this.V.k(a.V, b)
};
T.prototype.B = function(a, b) {
  a.push("new SackFrame(");
  E(this.V, a, b);
  a.push(")")
};
T.prototype.N = S;
T.prototype.Q = function(a) {
  var b = this.V;
  a.push(b.Ka.join(","), "|", String(b.Na));
  a.push("A")
};
function de(a) {
  this.Cb = a
}
de.prototype.k = function(a, b) {
  return a instanceof de && this.Cb.k(a.Cb, b)
};
de.prototype.B = function(a, b) {
  a.push("new StreamStatusFrame(");
  E(this.Cb, a, b);
  a.push(")")
};
de.prototype.N = S;
de.prototype.Q = function(a) {
  var b = this.Cb;
  a.push(b.Ka.join(","), "|", String(b.Na));
  a.push("T")
};
function ee() {
}
ee.prototype.B = function(a) {
  a.push("new StreamCreatedFrame()")
};
ee.prototype.k = function(a) {
  return a instanceof ee
};
ee.prototype.N = S;
ee.prototype.Q = function(a) {
  a.push("C")
};
function fe() {
}
fe.prototype.B = function(a) {
  a.push("new YouCloseItFrame()")
};
fe.prototype.k = function(a) {
  return a instanceof fe
};
fe.prototype.N = S;
fe.prototype.Q = function(a) {
  a.push("Y")
};
function ge(a, b) {
  this.Hb = a;
  this.nb = b
}
ge.prototype.k = function(a) {
  return a instanceof ge && this.Hb == a.Hb && this.nb == a.nb
};
ge.prototype.B = function(a, b) {
  a.push("new ResetFrame(");
  E(this.Hb, a, b);
  a.push(", ", String(this.nb), ")")
};
ge.prototype.N = S;
ge.prototype.Q = function(a) {
  a.push(this.Hb, "|", String(Number(this.nb)), "!")
};
var he = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function ie(a) {
  this.reason = a
}
ie.prototype.k = function(a) {
  return a instanceof ie && this.reason == a.reason
};
ie.prototype.B = function(a, b) {
  a.push("new TransportKillFrame(");
  E(this.reason, a, b);
  a.push(")")
};
ie.prototype.N = S;
ie.prototype.Q = function(a) {
  a.push(this.reason, "K")
};
function je(a) {
  a || f(new R("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new $d(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = ce(md(a)), a == l && f(new R("bad sack")), new T(a)
    }else {
      if(b == "N") {
        return a = pd(md(a)), a == l && f(new R("bad seqNum")), new be(a)
      }else {
        if(b == "T") {
          return a = ce(md(a)), a == l && f(new R("bad lastSackSeen")), new de(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && f(new R("leading garbage")), new fe
          }else {
            if(b == "^") {
              return new ae(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && f(new R("leading garbage")), new ee
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && f(new R("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == l && f(new R("bad applicationLevel")), new ge(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = he[a], a == l && f(new R("unknown kill reason: " + a)), new ie(a)
                  }else {
                    f(new R("Invalid frame type " + b))
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
;var ke;
ke = !1;
var le = $b();
le && (le.indexOf("Firefox") != -1 || le.indexOf("Camino") != -1 || le.indexOf("iPhone") != -1 || le.indexOf("iPod") != -1 || le.indexOf("iPad") != -1 || le.indexOf("Android") != -1 || le.indexOf("Chrome") != -1 && (ke = !0));
var me = ke;
var ne = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function oe(a, b) {
  var c = a.match(ne), d = b.match(ne);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function pe() {
  if(dc) {
    this.ya = {}, this.Ac = {}, this.wc = []
  }
}
pe.prototype.a = Q("goog.net.xhrMonitor");
pe.prototype.P = dc;
pe.prototype.Nb = function(a) {
  this.P = dc && a
};
function qe(a) {
  var b = re;
  if(b.P) {
    var c = u(a) ? a : ia(a) ? x(a) : "";
    P(b.a, "Pushing context: " + a + " (" + c + ")");
    b.wc.push(c)
  }
}
function se() {
  var a = re;
  if(a.P) {
    var b = a.wc.pop();
    P(a.a, "Popping context: " + b);
    te(a, b)
  }
}
function ue(a) {
  var b = re;
  if(b.P) {
    a = x(a);
    O(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.wc.length;c++) {
      var d = b.wc[c];
      ve(b.ya, d, a);
      ve(b.Ac, a, d)
    }
  }
}
function te(a, b) {
  var c = a.Ac[b], d = a.ya[b];
  c && d && (P(a.a, "Updating dependent contexts"), Xa(c, function(a) {
    Xa(d, function(b) {
      ve(this.ya, a, b);
      ve(this.Ac, b, a)
    }, this)
  }, a))
}
function ve(a, b, c) {
  a[b] || (a[b] = []);
  ab(a[b], c) || a[b].push(c)
}
var re = new pe;
function we() {
}
we.prototype.Vb = l;
function xe() {
  return ye(ze)
}
var ze;
function Ae() {
}
C(Ae, we);
function ye(a) {
  return(a = Be(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Ce(a) {
  var b = {};
  Be(a) && (b[0] = !0, b[1] = !0);
  return b
}
Ae.prototype.Rc = l;
function Be(a) {
  if(!a.Rc && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Rc = d
      }catch(e) {
      }
    }
    f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Rc
}
ze = new Ae;
function De(a) {
  this.headers = new Ib;
  this.mb = a || l
}
C(De, cd);
De.prototype.a = Q("goog.net.XhrIo");
var Ee = /^https?:?$/i;
q = De.prototype;
q.ja = !1;
q.f = l;
q.zc = l;
q.Db = "";
q.ce = "";
q.Ab = 0;
q.Bb = "";
q.Jc = !1;
q.gc = !1;
q.Sc = !1;
q.Ea = !1;
q.xc = 0;
q.La = l;
q.Ae = "";
q.Kf = !1;
q.send = function(a, b, c, d) {
  this.f && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Db = a;
  this.Bb = "";
  this.Ab = 0;
  this.ce = b;
  this.Jc = !1;
  this.ja = !0;
  this.f = this.mb ? ye(this.mb) : new xe;
  this.zc = this.mb ? this.mb.Vb || (this.mb.Vb = Ce(this.mb)) : ze.Vb || (ze.Vb = Ce(ze));
  ue(this.f);
  this.f.onreadystatechange = z(this.pe, this);
  try {
    O(this.a, Fe(this, "Opening Xhr")), this.Sc = !0, this.f.open(b, a, !0), this.Sc = !1
  }catch(e) {
    O(this.a, Fe(this, "Error opening Xhr: " + e.message));
    Ge(this, e);
    return
  }
  var a = c || "", g = this.headers.L();
  d && Gb(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.O("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Gb(g, function(a, b) {
    this.f.setRequestHeader(b, a)
  }, this);
  if(this.Ae) {
    this.f.responseType = this.Ae
  }
  if("withCredentials" in this.f) {
    this.f.withCredentials = this.Kf
  }
  try {
    if(this.La) {
      dd.clearTimeout(this.La), this.La = l
    }
    if(this.xc > 0) {
      O(this.a, Fe(this, "Will abort after " + this.xc + "ms if incomplete")), this.La = dd.setTimeout(z(this.Gf, this), this.xc)
    }
    O(this.a, Fe(this, "Sending request"));
    this.gc = !0;
    this.f.send(a);
    this.gc = !1
  }catch(h) {
    O(this.a, Fe(this, "Send error: " + h.message)), Ge(this, h)
  }
};
q.dispatchEvent = function(a) {
  if(this.f) {
    qe(this.f);
    try {
      return De.d.dispatchEvent.call(this, a)
    }finally {
      se()
    }
  }else {
    return De.d.dispatchEvent.call(this, a)
  }
};
q.Gf = function() {
  if(typeof ba != "undefined" && this.f) {
    this.Bb = "Timed out after " + this.xc + "ms, aborting", this.Ab = 8, O(this.a, Fe(this, this.Bb)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function Ge(a, b) {
  a.ja = !1;
  if(a.f) {
    a.Ea = !0, a.f.abort(), a.Ea = !1
  }
  a.Bb = b;
  a.Ab = 5;
  He(a);
  Ie(a)
}
function He(a) {
  if(!a.Jc) {
    a.Jc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
q.abort = function(a) {
  if(this.f && this.ja) {
    O(this.a, Fe(this, "Aborting")), this.ja = !1, this.Ea = !0, this.f.abort(), this.Ea = !1, this.Ab = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Ie(this)
  }
};
q.b = function() {
  if(this.f) {
    if(this.ja) {
      this.ja = !1, this.Ea = !0, this.f.abort(), this.Ea = !1
    }
    Ie(this, !0)
  }
  De.d.b.call(this)
};
q.pe = function() {
  !this.Sc && !this.gc && !this.Ea ? this.rf() : Je(this)
};
q.rf = function() {
  Je(this)
};
function Je(a) {
  if(a.ja && typeof ba != "undefined") {
    if(a.zc[1] && a.qa() == 4 && Ke(a) == 2) {
      O(a.a, Fe(a, "Local request error detected and ignored"))
    }else {
      if(a.gc && a.qa() == 4) {
        dd.setTimeout(z(a.pe, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.qa() == 4) {
          O(a.a, Fe(a, "Request complete"));
          a.ja = !1;
          var b;
          a: {
            switch(Ke(a)) {
              case 0:
                b = u(a.Db) ? a.Db.match(ne)[1] || l : a.Db.ha;
                b = !(b ? Ee.test(b) : self.location ? Ee.test(self.location.protocol) : 1);
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
            a.Ab = 6;
            var c;
            try {
              c = a.qa() > 2 ? a.f.statusText : ""
            }catch(d) {
              O(a.a, "Can not get status: " + d.message), c = ""
            }
            a.Bb = c + " [" + Ke(a) + "]";
            He(a)
          }
          Ie(a)
        }
      }
    }
  }
}
function Ie(a, b) {
  if(a.f) {
    var c = a.f, d = a.zc[0] ? s : l;
    a.f = l;
    a.zc = l;
    if(a.La) {
      dd.clearTimeout(a.La), a.La = l
    }
    b || (qe(c), a.dispatchEvent("ready"), se());
    var e = re;
    if(e.P) {
      var g = x(c);
      O(e.a, "Closing XHR : " + g);
      delete e.Ac[g];
      for(var h in e.ya) {
        bb(e.ya[h], g), e.ya[h].length == 0 && delete e.ya[h]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(j) {
      Od(a.a, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
q.Zd = function() {
  return!!this.f
};
q.qa = function() {
  return this.f ? this.f.readyState : 0
};
function Ke(a) {
  try {
    return a.qa() > 2 ? a.f.status : -1
  }catch(b) {
    return Pd(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.f && this.qa() == 4 ? this.f.getResponseHeader(a) : i
};
function Fe(a, b) {
  return b + " [" + a.ce + " " + a.Db + " " + Ke(a) + "]"
}
;function Le(a, b, c) {
  this.ma = b;
  this.U = a;
  this.Gc = c
}
C(Le, I);
q = Le.prototype;
q.a = Q("cw.net.XHRMaster");
q.va = -1;
q.Yc = function(a, b, c) {
  this.Gc.__XHRSlave_makeRequest(this.U, a, b, c)
};
q.qa = m("va");
q.cd = function(a, b) {
  b != Me && Od(this.a, F(this.U) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Ne(this.ma);
  a: {
    var c = this.ma;
    c.vc = !0;
    try {
      for(var d = !1, e = [], g = 0, h = a.length;g < h;g++) {
        if(c.X) {
          c.a.info(c.q() + " returning from loop because we're disposed.");
          break a
        }
        if(d = Oe(c, a[g], e)) {
          break
        }
      }
      e.length && Pe(c, e);
      c.vc = !1;
      c.w.length && c.fa();
      d && (P(c.a, c.q() + " closeSoon is true.  Frames were: " + F(a)), c.c())
    }finally {
      c.vc = !1
    }
  }
};
q.dd = function(a) {
  O(this.a, "ongotheaders_: " + F(a));
  var b = l;
  "Content-Length" in a && (b = pd(a["Content-Length"]));
  a = this.ma;
  O(a.a, a.q() + " got Content-Length: " + b);
  a.aa == Qe && (b == l && (Pd(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Re(a, 2E3 + b / 3072 * 1E3))
};
q.ed = function(a) {
  a != 1 && O(this.a, this.ma.q() + "'s XHR's readyState is " + a);
  this.va = a;
  this.va >= 2 && Ne(this.ma)
};
q.bd = function() {
  this.ma.c()
};
q.b = function() {
  Le.d.b.call(this);
  delete U.ga[this.U];
  this.Gc.__XHRSlave_dispose(this.U);
  delete this.Gc
};
function Se() {
  this.ga = {}
}
C(Se, I);
q = Se.prototype;
q.a = Q("cw.net.XHRMasterTracker");
q.Fd = function(a, b) {
  var c = "_" + ld(), d = new Le(c, a, b);
  return this.ga[c] = d
};
q.cd = function(a, b, c) {
  var b = cb(b), d = this.ga[a];
  d ? d.cd(b, c) : Od(this.a, "onframes_: no master for " + F(a))
};
q.dd = function(a, b) {
  var c = this.ga[a];
  c ? c.dd(b) : Od(this.a, "ongotheaders_: no master for " + F(a))
};
q.ed = function(a, b) {
  var c = this.ga[a];
  c ? c.ed(b) : Od(this.a, "onreadystatechange_: no master for " + F(a))
};
q.bd = function(a) {
  var b = this.ga[a];
  b ? (delete this.ga[b.U], b.bd()) : Od(this.a, "oncomplete_: no master for " + F(a))
};
q.b = function() {
  Se.d.b.call(this);
  for(var a = Sa(this.ga);a.length;) {
    a.pop().c()
  }
  delete this.ga
};
var U = new Se;
r.__XHRMaster_onframes = z(U.cd, U);
r.__XHRMaster_oncomplete = z(U.bd, U);
r.__XHRMaster_ongotheaders = z(U.dd, U);
r.__XHRMaster_onreadystatechange = z(U.ed, U);
function Te() {
  Ue.info("Waiting for XDRFrames (may take a while)...");
  var a = new ed, b = r.__XDRSetup.done.length, c;
  r.__XDRSetup.done = {push:function() {
    b += 1;
    c = 2 - b;
    c || (Ue.info("Got XDRFrames after waiting."), a.ob(l))
  }};
  c = 2 - b;
  c || (Ue.info("Already had all XDRFrames."), a.ob(l));
  return a
}
var Ue = Q("cw.net.waitForXDRFrames");
function Ve(a, b, c, d) {
  this.oc = a;
  this.se = b;
  this.sc = c;
  this.Ce = d;
  (!(this.oc.indexOf("http://") == 0 || this.oc.indexOf("https://") == 0) || !(this.sc.indexOf("http://") == 0 || this.sc.indexOf("https://") == 0)) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.se.location.href;
  oe(this.oc, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.Ce.location.href;
  oe(this.sc, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
var We = new ae(";)]}"), Xe = "disconnected_" + bd++;
function Ye(a, b, c, d) {
  this.C = a;
  this.ue = b;
  this.da = c;
  this.$f = d;
  this.Rb = new rd;
  this.Qb = ld() + ld();
  this.ua = new Pb;
  this.Tc = new Rb;
  this.Ub = l;
  if(H) {
    this.Ub = Vc(r, "load", this.wf, !1, this)
  }
}
C(Ye, cd);
q = Ye.prototype;
q.a = Q("cw.net.Stream");
q.de = new Ob(-1, []);
q.ee = new Ob(-1, []);
q.of = 50;
q.nf = 1048576;
q.od = !1;
q.jd = !1;
q.i = 1;
q.Je = -1;
q.h = l;
q.v = l;
q.Ib = l;
q.pd = 0;
q.re = 0;
q.Be = 0;
q.B = function(a, b) {
  a.push("<Stream id=");
  E(this.Qb, a, b);
  a.push(", state=", String(this.i));
  a.push(", primary=");
  E(this.h, a, b);
  a.push(", secondary=");
  E(this.v, a, b);
  a.push(", resetting=");
  E(this.Ib, a, b)
};
function Ze(a) {
  var b = [-1];
  a.h && b.push(a.h.cb);
  a.v && b.push(a.v.cb);
  return Math.max.apply(Math.max, b)
}
function $e(a) {
  if(a.i != 1) {
    var b = a.ua.F.t() != 0, c = Sb(a.Tc), d = !c.k(a.ee) && !(a.h && c.k(a.h.ab) || a.v && c.k(a.v.ab)), e = Ze(a);
    if((b = b && e < a.ua.Pa) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.h.pb) {
        P(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.h, c != d.ab)) {
          !d.ia && !d.w.length && af(d), d.w.push(new T(c)), d.ab = c
        }
        b && bf(a.h, a.ua, e + 1);
        a.h.fa()
      }else {
        a.v == l ? a.od ? (P(a.a, "tryToSend_: creating secondary to send " + g), a.v = cf(a, !1), b && bf(a.v, a.ua, e + 1), a.v.fa()) : (P(a.a, "tryToSend_: not creating a secondary because Stream might not exist on server"), a.jd = !0) : P(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
q.wf = function() {
  this.Ub = l;
  if(this.h && this.h.Xa()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.h;
    a.Bc = !0;
    a.c()
  }
  if(this.v && this.v.Xa()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.v, a.Bc = !0, a.c()
  }
};
function df(a, b) {
  var c;
  fa(c) || (c = !0);
  a.i > 2 && f(Error("sendStrings: Can't send strings in state " + a.i));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || f(Error("sendStrings: string #" + c + " has illegal chars: " + F(d)))
      }
    }
    a.ua.extend(b);
    $e(a)
  }
}
function cf(a, b) {
  var c;
  a.da instanceof Ve ? c = (Boolean(Number((new ef(document.location)).S.get("httpStreaming", "0"))) ? 2 : 1) == 1 ? Qe : ff : f(Error("Don't support endpoint " + F(a.da)));
  a.Je += 1;
  c = new gf(a.C, a, a.Je, c, a.da, b);
  P(a.a, "Created: " + c.q());
  a.Rb.add(c);
  return c
}
function hf(a, b, c) {
  var d = new jf(a.C, a, b, c);
  P(a.a, "Created: " + d.q() + ", delay=" + b + ", times=" + c);
  a.Rb.add(d);
  return d
}
function kf(a, b) {
  a.Rb.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  O(a.a, "Offline: " + b.q());
  b.nc ? a.pd += b.nc : a.pd = 0;
  a.pd >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), lf("stream penalty reached limit", !1), a.c());
  if(a.i > 2) {
    a.i == 3 && b.Oe ? (O(a.a, "Disposing because resettingTransport_ is done."), a.c()) : O(a.a, "Not creating a transport because Stream is in state " + a.i)
  }else {
    var c;
    var d;
    c = b instanceof jf;
    if(!c && b.Bc) {
      var e = H ? me ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      P(a.a, "getDelayForNextTransport_: " + F({delay:c, times:d}))
    }else {
      d = b.Cd();
      if(b == a.h) {
        if(d) {
          e = ++a.re
        }else {
          if(!c) {
            e = a.re = 0
          }
        }
      }else {
        if(d) {
          e = ++a.Be
        }else {
          if(!c) {
            e = a.Be = 0
          }
        }
      }
      if(c || !e) {
        d = c = 0, P(a.a, "getDelayForNextTransport_: " + F({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(Math.random() * 4E3) - 2E3, j = Math.max(0, b.Ke - b.rd);
        d = (c = Math.max(0, g + h - j)) ? 1 : 0;
        P(a.a, "getDelayForNextTransport_: " + F({count:e, base:g, variance:h, oldDuration:j, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    if(b == a.h) {
      a.h = l, c ? a.h = hf(a, e, c) : (e = Ze(a), a.h = cf(a, !0), bf(a.h, a.ua, e + 1)), a.h.fa()
    }else {
      if(b == a.v) {
        a.v = l, c ? (a.v = hf(a, e, c), a.v.fa()) : $e(a)
      }
    }
  }
}
q.reset = function(a) {
  this.i > 2 && f(Error("reset: Can't send reset in state " + this.i));
  this.i = 3;
  this.h && this.h.pb ? (this.a.info("reset: Sending ResetFrame over existing primary."), mf(this.h, a), this.h.fa()) : (this.h && (O(this.a, "reset: Disposing primary before sending ResetFrame."), this.h.c()), this.v && (O(this.a, "reset: Disposing secondary before sending ResetFrame."), this.v.c()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Ib = cf(this, !1), mf(this.Ib, a), this.Ib.fa());
  lf(a, !0)
};
function nf(a, b, c, d) {
  var e;
  e = a.Tc;
  for(var g = a.of, h = a.nf, j = [], k = !1, n = 0, B = c.length;n < B;n++) {
    var o = c[n], v = o[0], o = o[1];
    if(v == e.$a + 1) {
      e.$a += 1;
      for(j.push(o);;) {
        v = e.$a + 1;
        o = e.xa.get(v, Tb);
        if(o === Tb) {
          break
        }
        j.push(o[0]);
        e.xa.remove(v);
        e.wa -= o[1];
        e.$a = v
      }
    }else {
      if(!(v <= e.$a)) {
        if(g != l && e.xa.t() >= g) {
          k = !0;
          break
        }
        var y = Nb(o);
        if(h != l && e.wa + y > h) {
          k = !0;
          break
        }
        e.xa.set(v, [o, y]);
        e.wa += y
      }
    }
  }
  e.xa.Ga() && e.xa.clear();
  e = [j, k];
  c = e[0];
  e = e[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      h = a.ue;
      j = wb(c[g]);
      k = j[1];
      if(j[0] == 1) {
        k = h.qe.Ic(of.wb(), k);
        h = nb(k, 1);
        j = nb(k, 2);
        k = nb(k, 3);
        (h = va(h)) || (h = "[No title]");
        n = sa(za(k));
        B = document;
        k = B.createElement("div");
        G ? (k.innerHTML = "<br>" + n, k.removeChild(k.firstChild)) : k.innerHTML = n;
        if(k.childNodes.length == 1) {
          k = k.removeChild(k.firstChild)
        }else {
          for(n = B.createDocumentFragment();k.firstChild;) {
            n.appendChild(k.firstChild)
          }
          k = n
        }
        h = pf("span", {}, pf("a", {href:j, "class":"ljpost-title-link"}, h), pf("span", {}, "\u00a0"), k);
        qf(h)
      }
      if(a.i == 3 || a.X) {
        return
      }
    }
  }
  d || $e(a);
  if(!(a.i == 3 || a.X) && e) {
    Od(b.a, b.q() + "'s peer caused rwin overflow."), b.c()
  }
}
q.start = function() {
  this.i = 2;
  this.h = cf(this, !0);
  bf(this.h, this.ua, l);
  this.h.fa()
};
q.b = function() {
  this.a.info(F(this) + " in disposeInternal.");
  this.i = 4;
  for(var a = this.Rb.I(), b = 0;b < a.length;b++) {
    a[b].c()
  }
  this.dispatchEvent({type:Xe});
  if(H && this.Ub) {
    M(this.Ub), this.Ub = l
  }
  delete this.Rb;
  delete this.h;
  delete this.v;
  delete this.Ib;
  delete this.ue;
  Ye.d.b.call(this)
};
var Qe = 1, ff = 2, rf = 3;
function gf(a, b, c, d, e, g) {
  this.C = a;
  this.z = b;
  this.lb = c;
  this.aa = d;
  this.da = e;
  this.w = [];
  this.Oa = g;
  this.pb = !this.Xa();
  this.gb = this.aa != Qe;
  this.Se = z(this.Ff, this)
}
C(gf, I);
q = gf.prototype;
q.a = Q("cw.net.ClientTransport");
q.n = l;
q.rd = l;
q.Ke = l;
q.pc = l;
q.ia = !1;
q.vc = !1;
q.ab = l;
q.Oc = 0;
q.cb = -1;
q.fd = -1;
q.Oe = !1;
q.Bc = !1;
q.nc = 0;
q.yb = !1;
q.B = function(a) {
  a.push("<ClientTransport #", String(this.lb), ", becomePrimary=", String(this.Oa), ">")
};
q.q = function() {
  return(this.Oa ? "Prim. T#" : "Sec. T#") + this.lb
};
q.Cd = function() {
  return!(!this.yb && this.Oc)
};
q.Xa = function() {
  return this.aa == Qe || this.aa == ff
};
function Pe(a, b) {
  hb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  nf(a.z, a, b, !a.gb)
}
function Oe(a, b, c) {
  try {
    var d = je(b);
    a.Oc += 1;
    O(a.a, a.q() + " RECV " + F(d));
    var e;
    a.Oc == 1 && !d.k(We) && a.Xa() ? (Pd(a.a, a.q() + " is closing soon because got bad preamble: " + F(d)), e = !0) : e = !1;
    if(e) {
      return!0
    }
    if(d instanceof $d) {
      if(!/^([ -~]*)$/.test(d.kb)) {
        return a.yb = !0
      }
      a.fd += 1;
      c.push([a.fd, d.kb])
    }else {
      if(d instanceof T) {
        var g = a.z, h = d.V;
        g.de = h;
        var j = g.ua, k = h.Na, c = !1;
        k > j.Pa && (c = !0);
        for(var n = Qb(j).concat(), d = 0;d < n.length;d++) {
          var B = n[d];
          if(B > k) {
            break
          }
          var o = j.F.m[B][1];
          j.F.remove(B);
          j.wa -= o
        }
        for(d = 0;d < h.Ka.length;d++) {
          var v = h.Ka[d];
          v > j.Pa && (c = !0);
          j.F.O(v) && (o = j.F.m[v][1], j.F.remove(v), j.wa -= o)
        }
        j.F.Ga() && j.F.clear();
        if(c) {
          return Pd(a.a, a.q() + " is closing soon because got bad SackFrame"), a.yb = !0
        }
      }else {
        if(d instanceof be) {
          a.fd = d.Lb - 1
        }else {
          if(d instanceof de) {
            a.z.ee = d.Cb
          }else {
            if(d instanceof fe) {
              return P(a.a, a.q() + " is closing soon because got YouCloseItFrame"), !0
            }else {
              if(d instanceof ie) {
                return a.yb = !0, d.reason == "stream_attach_failure" ? a.nc += 1 : d.reason == "acked_unsent_strings" && (a.nc += 0.5), P(a.a, a.q() + " is closing soon because got " + F(d)), !0
              }else {
                if(!(d instanceof ae)) {
                  if(d instanceof ee) {
                    var y = a.z, ph = !a.gb;
                    P(y.a, "Stream is now confirmed to exist at server.");
                    y.od = !0;
                    if(y.jd && !ph) {
                      y.jd = !1, $e(y)
                    }
                  }else {
                    if(c.length) {
                      Pe(a, c);
                      if(!t(c)) {
                        for(var Bd = c.length - 1;Bd >= 0;Bd--) {
                          delete c[Bd]
                        }
                      }
                      c.length = 0
                    }
                    if(d instanceof ge) {
                      var qh = a.z;
                      lf(d.Hb, d.nb);
                      qh.c();
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
  }catch(zf) {
    return zf instanceof R || f(zf), Pd(a.a, a.q() + " is closing soon because got InvalidFrame: " + F(b)), a.yb = !0
  }
  return!1
}
q.Ff = function() {
  Pd(this.a, this.q() + " timed out due to lack of connection or no data being received.");
  this.c()
};
function sf(a) {
  if(a.pc != l) {
    a.C.G.clearTimeout(a.pc), a.pc = l
  }
}
function Re(a, b) {
  sf(a);
  b = Math.round(b);
  a.pc = a.C.G.setTimeout(a.Se, b);
  O(a.a, a.q() + "'s receive timeout set to " + b + " ms.")
}
function Ne(a) {
  a.aa != Qe && (a.aa == rf || a.aa == ff ? Re(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.aa)))
}
function af(a) {
  var b = new Yd;
  b.lb = a.lb;
  b.te = 2;
  b.Wd = 2;
  if(!a.z.od) {
    b.ye = !0
  }
  b.Qb = a.z.Qb;
  b.qd = a.gb;
  if(b.qd) {
    b.ne = 4096
  }
  b.je = 3E5;
  b.he = a.gb ? Math.floor(10) : 0;
  b.Le = !1;
  if(a.Oa) {
    b.Fe = l, b.Zc = Math.floor((a.gb ? 358E4 : 25E3) / 1E3)
  }
  b.V = Sb(a.z.Tc);
  b.jc = a.z.de;
  a.w.push(b);
  a.ab = b.V
}
q.fa = function() {
  this.ia && !this.pb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.vc) {
    P(this.a, this.q() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.ia;
    this.ia = !0;
    !a && !this.w.length && af(this);
    for(a = 0;a < this.w.length;a++) {
      O(this.a, this.q() + " SEND " + F(this.w[a]))
    }
    if(this.Xa()) {
      for(var a = [], b = 0, c = this.w.length;b < c;b++) {
        this.w[b].Q(a), a.push("\n")
      }
      this.w = [];
      a = a.join("");
      b = this.Oa ? this.da.oc : this.da.sc;
      this.n = U.Fd(this, this.Oa ? this.da.se : this.da.Ce);
      this.rd = this.C.G === dd ? A() : this.C.G.getTime();
      this.n.Yc(b, "POST", a);
      Re(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.gb ? 0 : this.Oa ? 25E3 : 0))
    }else {
      if(this.aa == rf) {
        a = [];
        b = 0;
        for(c = this.w.length;b < c;b++) {
          a.push(this.w[b].N())
        }
        this.w = [];
        this.n ? this.n.xd(a) : (b = this.da, this.n = new Ud(this), this.n.nd = b.ag.Fd(this.n), this.rd = this.C.G === dd ? A() : this.C.G.getTime(), this.n.Bd(b.host, b.port), this.n.X || (this.n.xd(a), this.n.X || Re(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.aa))
      }
    }
  }
};
function bf(a, b, c) {
  !a.ia && !a.w.length && af(a);
  for(var d = Math.max(c, a.cb + 1), e = Qb(b), c = [], g = 0;g < e.length;g++) {
    var h = e[g];
    (d == l || h >= d) && c.push([h, b.F.m[h][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], e = g[0], g = g[1], (a.cb == -1 || a.cb + 1 != e) && a.w.push(new be(e)), a.w.push(new $d(g)), a.cb = e
  }
}
q.b = function() {
  this.a.info(this.q() + " in disposeInternal.");
  gf.d.b.call(this);
  this.Ke = this.C.G === dd ? A() : this.C.G.getTime();
  this.w = [];
  sf(this);
  this.n && this.n.c();
  var a = this.z;
  this.z = l;
  kf(a, this)
};
function mf(a, b) {
  !a.ia && !a.w.length && af(a);
  a.w.push(new ge(b, !0));
  a.Oe = !0
}
function jf(a, b, c, d) {
  this.C = a;
  this.z = b;
  this.Id = c;
  this.Ed = d
}
C(jf, I);
q = jf.prototype;
q.ia = !1;
q.pb = !1;
q.ec = l;
q.ab = l;
q.a = Q("cw.net.DoNothingTransport");
function tf(a) {
  a.ec = a.C.G.setTimeout(function() {
    a.ec = l;
    a.Ed--;
    a.Ed ? tf(a) : a.c()
  }, a.Id)
}
q.fa = function() {
  this.ia && !this.pb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.ia = !0;
  tf(this)
};
q.B = function(a) {
  a.push("<DoNothingTransport delay=", String(this.Id), ">")
};
q.Xa = p(!1);
q.q = p("Wast. T");
q.Cd = p(!1);
q.b = function() {
  this.a.info(this.q() + " in disposeInternal.");
  jf.d.b.call(this);
  this.ec != l && this.C.G.clearTimeout(this.ec);
  var a = this.z;
  this.z = l;
  kf(a, this)
};
var uf;
function of() {
  lb.apply(this)
}
C(of, lb);
function vf() {
  lb.apply(this)
}
C(vf, lb);
rb(of, {0:{name:"NewPost", Md:"demosminerva.ljstream_messages.NewPost"}, 1:{name:"title", Sa:9, type:String}, 2:{name:"url", Sa:9, type:String}, 3:{name:"body", Sa:9, type:String}, 4:{name:"num_images", Sa:5, type:Number}, 5:{name:"lang", Sa:9, type:String}});
rb(vf, {0:{name:"SetPreferences", Md:"demosminerva.ljstream_messages.SetPreferences"}, 1:{name:"include_russian_posts", Sa:8, type:Boolean}});
var wf;
function xf(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function yf(a, b) {
  var c = xf(a), d = gb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    ab(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function Af(a, b) {
  var c = xf(a), d = gb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < e.length;h++) {
    ab(d, e[h]) && (fb(e, h--, 1), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
;function Bf(a, b) {
  this.width = a;
  this.height = b
}
q = Bf.prototype;
q.L = function() {
  return new Bf(this.width, this.height)
};
q.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
q.Ga = function() {
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
var Cf = !G || rc();
!dc && !G || G && rc() || dc && pc("1.9.1");
var Df = G && !pc("9");
function Ef(a, b) {
  this.x = fa(a) ? a : 0;
  this.y = fa(b) ? b : 0
}
Ef.prototype.L = function() {
  return new Ef(this.x, this.y)
};
Ef.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function Ff(a) {
  return a ? new Gf(Hf(a)) : wf || (wf = new Gf)
}
function V(a) {
  return u(a) ? document.getElementById(a) : a
}
function If(a, b) {
  Ra(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in Jf ? a.setAttribute(Jf[d], b) : d.lastIndexOf("aria-", 0) == 0 ? a.setAttribute(d, b) : a[d] = b
  })
}
var Jf = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Kf() {
  var a = Lf.M.parentWindow || Lf.M.defaultView || window, b = a.document;
  if(H && !pc("500") && !ec) {
    typeof a.innerHeight == "undefined" && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new Bf(a.innerWidth, b)
  }
  a = b.compatMode == "CSS1Compat" ? b.documentElement : b.body;
  return new Bf(a.clientWidth, a.clientHeight)
}
function pf(a, b, c) {
  return Mf(document, arguments)
}
function Mf(a, b) {
  var c = b[0], d = b[1];
  if(!Cf && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', za(d.name), '"');
    if(d.type) {
      c.push(' type="', za(d.type), '"');
      var e = {};
      Va(e, d);
      d = e;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  if(d) {
    u(d) ? c.className = d : t(d) ? yf.apply(l, [c].concat(d)) : If(c, d)
  }
  b.length > 2 && Nf(a, c, b, 2);
  return c
}
function Nf(a, b, c, d) {
  function e(c) {
    c && b.appendChild(u(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && g.nodeType > 0) ? Xa(Of(g) ? db(g) : g, e) : e(g)
  }
}
function Pf(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Qf(a, b) {
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
function Hf(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
var Rf = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Sf = {IMG:" ", BR:"\n"};
function Tf(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, typeof a == "number" && a >= 0 && a < 32768) : !1
}
function Uf(a) {
  var b = [];
  Vf(a, b, !1);
  return b.join("")
}
function Vf(a, b, c) {
  if(!(a.nodeName in Rf)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Sf) {
        b.push(Sf[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Vf(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Of(a) {
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
function Gf(a) {
  this.M = a || r.document || document
}
q = Gf.prototype;
q.xb = Ff;
q.g = function(a) {
  return u(a) ? this.M.getElementById(a) : a
};
q.r = function(a, b, c) {
  return Mf(this.M, arguments)
};
q.createElement = function(a) {
  return this.M.createElement(a)
};
q.createTextNode = function(a) {
  return this.M.createTextNode(a)
};
q.appendChild = function(a, b) {
  a.appendChild(b)
};
q.append = function(a, b) {
  Nf(Hf(a), a, arguments, 1)
};
q.contains = Qf;
function Wf() {
  this.xe = A()
}
var Xf = new Wf;
Wf.prototype.set = aa("xe");
Wf.prototype.reset = function() {
  this.set(A())
};
Wf.prototype.get = m("xe");
function Yf(a) {
  this.gd = a || "";
  this.Df = Xf
}
Yf.prototype.zf = !0;
Yf.prototype.Bf = !0;
Yf.prototype.Af = !0;
Yf.prototype.De = !1;
function Zf(a) {
  return a < 10 ? "0" + a : String(a)
}
function $f(a, b) {
  var c = (a.Ge - b) / 1E3, d = c.toFixed(3), e = 0;
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
function ag(a) {
  Yf.call(this, a)
}
C(ag, Yf);
ag.prototype.De = !0;
function bg(a) {
  this.$c = a || 100;
  this.ka = []
}
q = bg.prototype;
q.Eb = 0;
q.add = function(a) {
  this.ka[this.Eb] = a;
  this.Eb = (this.Eb + 1) % this.$c
};
q.get = function(a) {
  a = cg(this, a);
  return this.ka[a]
};
q.set = function(a, b) {
  a = cg(this, a);
  this.ka[a] = b
};
q.t = function() {
  return this.ka.length
};
q.Ga = function() {
  return this.ka.length == 0
};
q.clear = function() {
  this.Eb = this.ka.length = 0
};
q.I = function() {
  for(var a = this.t(), b = this.t(), c = [], a = this.t() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
q.pa = function() {
  for(var a = [], b = this.t(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
q.O = function(a) {
  return a < this.t()
};
q.Yb = function(a) {
  for(var b = this.t(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return!0
    }
  }
  return!1
};
function cg(a, b) {
  b >= a.ka.length && f(Error("Out of bounds exception"));
  return a.ka.length < a.$c ? b : (a.Eb + Number(b)) % a.$c
}
;function dg(a, b) {
  this.ra = a || "";
  this.gd = b || "";
  this.eb = [];
  this.rc = new bg(eg);
  this.uf = z(this.Re, this);
  this.bf = new ag(this.gd);
  this.af = {};
  if(!0 != this.$d) {
    this.$d = !0;
    var c = Td(), d = this.uf;
    if(!c.zb) {
      c.zb = []
    }
    c.zb.push(d)
  }
  this.P = fg(this.ra, "enabled") == "1";
  r.setInterval(z(this.xf, this), 7500)
}
var eg = 500;
q = dg.prototype;
q.Ne = "LOGGING";
q.Ze = !1;
q.s = l;
q.vd = !1;
q.$d = !1;
q.zd = l;
q.Wc = A();
q.Fa = function() {
  this.P && gg(this)
};
q.isEnabled = m("P");
q.Nb = function(a) {
  if(this.P = a) {
    gg(this), this.s && this.yc()
  }
  hg(this, "enabled", a ? "1" : "0")
};
function ig(a) {
  return!!a.s && !a.s.closed
}
q.Ue = function() {
  this.rc.clear();
  ig(this) && this.yc()
};
q.Re = function(a) {
  if(!this.af[a.fe]) {
    var b = this.bf, c;
    switch(a.R.value) {
      case Cd.value:
        c = "dbg-sh";
        break;
      case Dd.value:
        c = "dbg-sev";
        break;
      case Ed.value:
        c = "dbg-w";
        break;
      case Fd.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.gd, " ");
    if(b.zf) {
      var e = new Date(a.Ge);
      d.push("[", Zf(e.getFullYear() - 2E3) + Zf(e.getMonth() + 1) + Zf(e.getDate()) + " " + Zf(e.getHours()) + ":" + Zf(e.getMinutes()) + ":" + Zf(e.getSeconds()) + "." + Zf(Math.floor(e.getMilliseconds() / 10)), "] ")
    }
    b.Bf && d.push("[", Fa($f(a, b.Df.get())), "s] ");
    b.Af && d.push("[", za(a.fe), "] ");
    d.push('<span class="', c, '">', ya(Fa(za(a.le))));
    b.De && a.Mc && d.push("<br>", ya(Fa(a.Lc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.P ? (gg(this), this.rc.add(b), jg(this, b)) : this.rc.add(b);
    this.Ze && a.R.value >= Dd.value && this.Nb(!0)
  }
};
function jg(a, b) {
  a.eb.push(b);
  r.clearTimeout(a.zd);
  A() - a.Wc > 750 ? a.wd() : a.zd = r.setTimeout(z(a.wd, a), 250)
}
q.wd = function() {
  this.Wc = A();
  if(ig(this)) {
    var a = this.s.document.body, a = a && a.scrollHeight - (a.scrollTop + a.clientHeight) <= 100;
    this.s.document.write(this.eb.join(""));
    this.eb.length = 0;
    a && this.s.scrollTo(0, 1E6)
  }
};
function kg(a) {
  for(var b = a.rc.I(), c = 0;c < b.length;c++) {
    jg(a, b[c])
  }
}
function gg(a) {
  if(!ig(a) && !a.vd) {
    var b = fg(a.ra, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), e = Number(b[2]), b = Number(b[3]);
    a.vd = !0;
    a.s = window.open("", G ? a.ra.replace(/[\s\-\.\,]/g, "_") : a.ra, "width=" + e + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    if(!a.s && !a.Cf) {
      alert("Logger popup was blocked"), a.Cf = !0
    }
    a.vd = !1;
    a.s && a.yc()
  }
}
q.bc = p("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
q.yc = function() {
  ig(this) || (this.s.document.open(), jg(this, "<style>" + this.bc() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.Ne + "<br><small>Logger: " + this.ra + "</small></div><hr>"), kg(this))
};
function hg(a, b, c) {
  b += a.ra;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(A() + 2592E6)).toUTCString()
}
function fg(a, b, c) {
  var a = b + a, b = String(document.cookie), d = b.indexOf(a + "=");
  return d != -1 ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, c == -1 ? b.length : c))) : c || ""
}
q.xf = function() {
  ig(this) && hg(this, "dbg", (this.s.screenX || this.s.screenLeft || 0) + "," + (this.s.screenY || this.s.screenTop || 0) + "," + (this.s.outerWidth || 800) + "," + (this.s.outerHeight || 500))
};
function lg(a, b) {
  if(mg) {
    var c = ng(), d;
    for(d in c) {
      var e = d.replace("fancywindow.sel.", ""), e = Q(e), g = e.R, h = window.localStorage.getItem(d).toString();
      (!g || g.toString() != h) && e.ib(Md(h))
    }
  }
  dg.call(this, a, b)
}
C(lg, dg);
var mg;
a: {
  try {
    mg = !!window.localStorage.getItem;
    break a
  }catch(og) {
  }
  mg = !1
}
q = lg.prototype;
q.wd = function() {
  this.Wc = A();
  if(ig(this)) {
    for(var a = this.H.g("log"), b = a.scrollHeight - (a.scrollTop + a.offsetHeight) <= 100, c = 0;c < this.eb.length;c++) {
      var d = this.H.r("div", "logmsg");
      d.innerHTML = this.eb[c];
      a.appendChild(d)
    }
    this.eb.length = 0;
    this.ze();
    if(b) {
      a.scrollTop = a.scrollHeight
    }
  }
};
q.yc = function() {
  if(ig(this)) {
    var a = this.s.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.ra + "</title><style>" + this.bc() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.ra + "</b></p><p>" + this.Ne + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (G ? a.body : this.s).onresize = z(this.ze, this);
    this.H = new Gf(a);
    this.H.g("openbutton").onclick = z(this.sf, this);
    this.H.g("closebutton").onclick = z(this.Ve, this);
    this.H.g("clearbutton").onclick = z(this.Ue, this);
    this.H.g("exitbutton").onclick = z(this.$e, this);
    kg(this)
  }
};
q.sf = function() {
  var a = this.H.g("optionsarea");
  a.innerHTML = "";
  for(var b = pg(), c = this.H, d = 0;d < b.length;d++) {
    var e = Q(b[d]), e = c.r("div", {}, qg(this, "sel" + b[d], e.R ? e.R.name : "INHERIT"), c.r("span", {}, b[d] || "(root)"));
    a.appendChild(e)
  }
  this.H.g("options").style.display = "block";
  return!1
};
function qg(a, b, c) {
  for(var a = a.H, b = a.r("select", {id:b}), d = 0;d < Kd.length;d++) {
    var e = Kd[d], g = a.r("option", {}, e.name);
    if(c == e.name) {
      g.selected = !0
    }
    b.appendChild(g)
  }
  b.appendChild(a.r("option", {selected:c == "INHERIT"}, "INHERIT"));
  return b
}
q.Ve = function() {
  this.H.g("options").style.display = "none";
  for(var a = pg(), b = this.H, c = 0;c < a.length;c++) {
    var d = Q(a[c]), e = b.g("sel" + a[c]), e = e.options[e.selectedIndex].text;
    e == "INHERIT" ? d.ib(l) : d.ib(Md(e))
  }
  if(mg) {
    a = pg();
    b = ng();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], e = Q(a[c]).R, d in b ? e ? window.localStorage.getItem(d) != e.name && window.localStorage.setItem(d, e.name) : window.localStorage.removeItem(d) : e && window.localStorage.setItem(d, e.name)
    }
  }
  return!1
};
q.ze = function() {
  var a = this.H, b = a.g("log"), c = a.g("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.M.body.offsetHeight - c.offsetHeight - (G ? 4 : 0) + "px"
};
q.$e = function() {
  this.Nb(!1);
  this.s && this.s.close()
};
q.bc = function() {
  return lg.d.bc.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function ng() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    var d = window.localStorage.key(b);
    d != l && d.lastIndexOf("fancywindow.sel.", 0) == 0 && (a[d] = !0)
  }
  return a
}
function pg() {
  var a = Ta(Qd);
  a.sort();
  return a
}
;var rg = dc ? "MozUserSelect" : H ? "WebkitUserSelect" : l;
function sg(a) {
  this.Ud = a;
  this.j = []
}
C(sg, I);
var tg = [];
function W(a, b, c, d) {
  t(c) || (tg[0] = c, c = tg);
  for(var e = 0;e < c.length;e++) {
    a.j.push(L(b, c[e], d || a, !1, a.Ud || a))
  }
  return a
}
function ug(a, b, c, d, e, g) {
  if(t(c)) {
    for(var h = 0;h < c.length;h++) {
      ug(a, b, c[h], d, e, g)
    }
  }else {
    a: {
      d = d || a;
      g = g || a.Ud || a;
      e = !!e;
      if(b = Xc(b, c, e)) {
        for(c = 0;c < b.length;c++) {
          if(!b[c].Ja && b[c].bb == d && b[c].capture == e && b[c].fc == g) {
            b = b[c];
            break a
          }
        }
      }
      b = l
    }
    if(b) {
      b = b.key, M(b), bb(a.j, b)
    }
  }
  return a
}
sg.prototype.hd = function() {
  Xa(this.j, M);
  this.j.length = 0
};
sg.prototype.b = function() {
  sg.d.b.call(this);
  this.hd()
};
sg.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function vg() {
}
da(vg);
vg.prototype.qf = 0;
vg.Ua();
function wg(a) {
  this.Aa = a || Ff();
  this.Kb = xg
}
C(wg, cd);
wg.prototype.jf = vg.Ua();
var xg = l;
function yg(a, b) {
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
q = wg.prototype;
q.Xd = l;
q.D = !1;
q.p = l;
q.Kb = l;
q.pf = l;
q.J = l;
q.la = l;
q.qb = l;
q.Jf = !1;
q.g = m("p");
function zg(a) {
  return a.Va || (a.Va = new sg(a))
}
q.getParent = m("J");
q.kd = function(a) {
  this.J && this.J != a && f(Error("Method not supported"));
  wg.d.kd.call(this, a)
};
q.xb = m("Aa");
q.r = function() {
  this.p = this.Aa.createElement("div")
};
function Ag(a) {
  var b = V("prefs");
  a.D && f(Error("Component already rendered"));
  a.p || a.r();
  b ? b.insertBefore(a.p, l) : a.Aa.M.body.appendChild(a.p);
  (!a.J || a.J.D) && a.Ra()
}
q.Ra = function() {
  this.D = !0;
  Bg(this, function(a) {
    !a.D && a.g() && a.Ra()
  })
};
q.tb = function() {
  Bg(this, function(a) {
    a.D && a.tb()
  });
  this.Va && this.Va.hd();
  this.D = !1
};
q.b = function() {
  wg.d.b.call(this);
  this.D && this.tb();
  this.Va && (this.Va.c(), delete this.Va);
  Bg(this, function(a) {
    a.c()
  });
  !this.Jf && this.p && Pf(this.p);
  this.J = this.pf = this.p = this.qb = this.la = l
};
q.jb = function(a) {
  this.D && f(Error("Component already rendered"));
  this.Kb = a
};
function Bg(a, b) {
  a.la && Xa(a.la, b, i)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = u(a) ? a : a.Xd || (a.Xd = ":" + (a.jf.qf++).toString(36)), a = this.qb && c ? (c in this.qb ? this.qb[c] : i) || l : l;
    if(c && a) {
      var d = this.qb;
      c in d && delete d[c];
      bb(this.la, a);
      b && (a.tb(), a.p && Pf(a.p));
      c = a;
      c == l && f(Error("Unable to set parent component"));
      c.J = l;
      wg.d.kd.call(c, l)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function Cg() {
}
var Dg;
da(Cg);
q = Cg.prototype;
q.Zb = function() {
};
q.r = function(a) {
  return a.xb().r("div", Eg(this, a).join(" "), a.rb)
};
q.sb = function(a, b, c) {
  if(a = a.g ? a.g() : a) {
    if(G && !pc("7")) {
      var d = Fg(xf(a), b);
      d.push(b);
      na(c ? yf : Af, a).apply(l, d)
    }else {
      c ? yf(a, b) : Af(a, b)
    }
  }
};
q.Yd = function(a) {
  if(a.Kb == l) {
    var b;
    a: {
      b = a.D ? a.p : a.Aa.M.body;
      var c = Hf(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (b = c.defaultView.getComputedStyle(b, l))) {
        b = b.direction || b.getPropertyValue("direction");
        break a
      }
      b = ""
    }
    a.Kb = "rtl" == (b || ((a.D ? a.p : a.Aa.M.body).currentStyle ? (a.D ? a.p : a.Aa.M.body).currentStyle.direction : l) || (a.D ? a.p : a.Aa.M.body).style.direction)
  }
  a.Kb && this.jb(a.g(), !0);
  a.isEnabled() && this.Ob(a, a.Ma)
};
q.tc = function(a, b) {
  var c = !b, d = G || cc ? a.getElementsByTagName("*") : l;
  if(rg) {
    if(c = c ? "none" : "", a.style[rg] = c, d) {
      for(var e = 0, g;g = d[e];e++) {
        g.style[rg] = c
      }
    }
  }else {
    if(G || cc) {
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for(e = 0;g = d[e];e++) {
          g.setAttribute("unselectable", c)
        }
      }
    }
  }
};
q.jb = function(a, b) {
  this.sb(a, this.oa() + "-rtl", b)
};
q.ae = function(a) {
  var b;
  return a.$ & 32 && (b = a.Da()) ? Tf(b) : !1
};
q.Ob = function(a, b) {
  var c;
  if(a.$ & 32 && (c = a.Da())) {
    if(!b && a.i & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.i & 32 && a.Od()
    }
    if(Tf(c) != b) {
      b ? c.tabIndex = 0 : c.removeAttribute("tabIndex")
    }
  }
};
q.md = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.K = function(a, b, c) {
  var d = a.g();
  if(d) {
    var e = Gg(this, b);
    e && this.sb(a, e, c);
    this.Sb(d, b, c)
  }
};
q.Sb = function(a, b, c) {
  Dg || (Dg = {1:"disabled", 4:"pressed", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Dg[b]) && a.setAttribute("aria-" + b, c)
};
q.Da = function(a) {
  return a.g()
};
q.oa = p("goog-control");
function Eg(a, b) {
  var c = a.oa(), d = [c], e = a.oa();
  e != c && d.push(e);
  c = b.i;
  for(e = [];c;) {
    var g = c & -c;
    e.push(Gg(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.Y) && d.push.apply(d, c);
  G && !pc("7") && d.push.apply(d, Fg(d));
  return d
}
function Fg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Xa([], function(d) {
    $a(d, na(ab, a)) && (!b || ab(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Gg(a, b) {
  if(!a.Ad) {
    var c = a.oa();
    a.Ad = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Ad[b]
}
;function Hg(a, b) {
  a || f(Error("Invalid class name " + a));
  w(b) || f(Error("Invalid decorator function " + b))
}
var Ig = {};
function Jg(a, b, c, d, e) {
  if(!G && (!H || !pc("525"))) {
    return!0
  }
  if(gc && e) {
    return Kg(a)
  }
  if(e && !d) {
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
      return!(G && rc());
    case 27:
      return!H
  }
  return Kg(a)
}
function Kg(a) {
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
;function Lg(a, b) {
  a && Mg(this, a, b)
}
C(Lg, cd);
q = Lg.prototype;
q.p = l;
q.hc = l;
q.Uc = l;
q.ic = l;
q.ta = -1;
q.sa = -1;
var Ng = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Og = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Pg = {61:187, 
59:186}, Qg = G || H && pc("525");
q = Lg.prototype;
q.ef = function(a) {
  if(H && (this.ta == 17 && !a.ctrlKey || this.ta == 18 && !a.altKey)) {
    this.sa = this.ta = -1
  }
  Qg && !Jg(a.keyCode, this.ta, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.sa = dc && a.keyCode in Pg ? Pg[a.keyCode] : a.keyCode
};
q.gf = function() {
  this.sa = this.ta = -1
};
q.handleEvent = function(a) {
  var b = a.ea, c, d;
  G && a.type == "keypress" ? (c = this.sa, d = c != 13 && c != 27 ? b.keyCode : 0) : H && a.type == "keypress" ? (c = this.sa, d = b.charCode >= 0 && b.charCode < 63232 && Kg(c) ? b.charCode : 0) : cc ? (c = this.sa, d = Kg(c) ? b.keyCode : 0) : (c = b.keyCode || this.sa, d = b.charCode || 0, gc && d == 63 && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in Ng ? e = Ng[c] : c == 25 && a.shiftKey && (e = 9) : g && g in Og && (e = Og[g]);
  a = e == this.ta;
  this.ta = e;
  b = new Rg(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.c()
  }
};
q.g = m("p");
function Mg(a, b, c) {
  a.ic && a.detach();
  a.p = b;
  a.hc = L(a.p, "keypress", a, c);
  a.Uc = L(a.p, "keydown", a.ef, c, a);
  a.ic = L(a.p, "keyup", a.gf, c, a)
}
q.detach = function() {
  if(this.hc) {
    M(this.hc), M(this.Uc), M(this.ic), this.ic = this.Uc = this.hc = l
  }
  this.p = l;
  this.sa = this.ta = -1
};
q.b = function() {
  Lg.d.b.call(this);
  this.detach()
};
function Rg(a, b, c, d) {
  d && this.Fa(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(Rg, yc);
function X(a, b, c) {
  wg.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = x(b);
      if(d = Ig[d]) {
        break
      }
      b = b.d ? b.d.constructor : l
    }
    b = d ? w(d.Ua) ? d.Ua() : new d : l
  }
  this.u = b;
  this.rb = a
}
C(X, wg);
q = X.prototype;
q.rb = l;
q.i = 0;
q.$ = 39;
q.yd = 255;
q.Ef = 0;
q.Ma = !0;
q.Y = l;
q.Qc = !0;
q.Dc = !1;
q.Da = function() {
  return this.u.Da(this)
};
function Sg(a, b) {
  if(b) {
    a.Y ? ab(a.Y, b) || a.Y.push(b) : a.Y = [b], a.u.sb(a, b, !0)
  }
}
q.sb = function(a, b) {
  if(b) {
    Sg(this, a)
  }else {
    if(a && this.Y) {
      bb(this.Y, a);
      if(this.Y.length == 0) {
        this.Y = l
      }
      this.u.sb(this, a, !1)
    }
  }
};
q.r = function() {
  var a = this.u.r(this);
  this.p = a;
  var b = this.u.Zb();
  if(b) {
    a.setAttribute("role", b), a.Zf = b
  }
  this.Dc || this.u.tc(a, !1);
  this.Ma || this.u.md(a, !1)
};
q.Ra = function() {
  X.d.Ra.call(this);
  this.u.Yd(this);
  if(this.$ & -2 && (this.Qc && Tg(this, !0), this.$ & 32)) {
    var a = this.Da();
    if(a) {
      var b = this.Za || (this.Za = new Lg);
      Mg(b, a);
      W(W(W(zg(this), b, "key", this.ff), a, "focus", this.df), a, "blur", this.Od)
    }
  }
};
function Tg(a, b) {
  var c = zg(a), d = a.g();
  b ? (W(W(W(W(c, d, "mouseover", a.Sd), d, "mousedown", a.Qd), d, "mouseup", a.Td), d, "mouseout", a.Rd), G && W(c, d, "dblclick", a.Pd)) : (ug(ug(ug(ug(c, d, "mouseover", a.Sd), d, "mousedown", a.Qd), d, "mouseup", a.Td), d, "mouseout", a.Rd), G && ug(c, d, "dblclick", a.Pd))
}
q.tb = function() {
  X.d.tb.call(this);
  this.Za && this.Za.detach();
  this.Ma && this.isEnabled() && this.u.Ob(this, !1)
};
q.b = function() {
  X.d.b.call(this);
  this.Za && (this.Za.c(), delete this.Za);
  delete this.u;
  this.Y = this.rb = l
};
function Ug(a) {
  a = a.rb;
  if(!a) {
    return""
  }
  if(!u(a)) {
    if(t(a)) {
      a = Ya(a, Uf).join("")
    }else {
      if(Df && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Vf(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      Df || (a = a.replace(/ +/g, " "));
      a != " " && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
q.jb = function(a) {
  X.d.jb.call(this, a);
  var b = this.g();
  b && this.u.jb(b, a)
};
q.tc = function(a) {
  this.Dc = a;
  var b = this.g();
  b && this.u.tc(b, a)
};
q.md = function(a, b) {
  if(b || this.Ma != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.g();
    c && this.u.md(c, a);
    this.isEnabled() && this.u.Ob(this, a);
    this.Ma = a;
    return!0
  }
  return!1
};
q.isEnabled = function() {
  return!(this.i & 1)
};
q.Nb = function(a) {
  var b = this.getParent();
  if((!b || typeof b.isEnabled != "function" || b.isEnabled()) && Vg(this, 1, !a)) {
    a || (this.setActive(!1), Wg(this, !1)), this.Ma && this.u.Ob(this, a), this.K(1, !a)
  }
};
function Wg(a, b) {
  Vg(a, 2, b) && a.K(2, b)
}
q.Zd = function() {
  return!!(this.i & 4)
};
q.setActive = function(a) {
  Vg(this, 4, a) && this.K(4, a)
};
q.K = function(a, b) {
  if(this.$ & a && b != !!(this.i & a)) {
    this.u.K(this, a, b), this.i = b ? this.i | a : this.i & ~a
  }
};
function Y(a, b) {
  return!!(a.yd & b) && !!(a.$ & b)
}
function Vg(a, b, c) {
  return!!(a.$ & b) && !!(a.i & b) != c && (!(a.Ef & b) || a.dispatchEvent(yg(b, c))) && !a.X
}
q.Sd = function(a) {
  (!a.relatedTarget || !Qf(this.g(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Y(this, 2) && Wg(this, !0)
};
q.Rd = function(a) {
  if((!a.relatedTarget || !Qf(this.g(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    Y(this, 4) && this.setActive(!1), Y(this, 2) && Wg(this, !1)
  }
};
q.Qd = function(a) {
  if(this.isEnabled() && (Y(this, 2) && Wg(this, !0), Ac(a) && (!H || !gc || !a.ctrlKey))) {
    Y(this, 4) && this.setActive(!0), this.u.ae(this) && this.Da().focus()
  }
  !this.Dc && Ac(a) && (!H || !gc || !a.ctrlKey) && a.preventDefault()
};
q.Td = function(a) {
  this.isEnabled() && (Y(this, 2) && Wg(this, !0), this.Zd() && this.Gb(a) && Y(this, 4) && this.setActive(!1))
};
q.Pd = function(a) {
  this.isEnabled() && this.Gb(a)
};
q.Gb = function(a) {
  if(Y(this, 16)) {
    var b = !(this.i & 16);
    Vg(this, 16, b) && this.K(16, b)
  }
  Y(this, 8) && Vg(this, 8, !0) && this.K(8, !0);
  Y(this, 64) && (b = !(this.i & 64), Vg(this, 64, b) && this.K(64, b));
  b = new wc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, e = 0;d = c[e];e++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
q.df = function() {
  Y(this, 32) && Vg(this, 32, !0) && this.K(32, !0)
};
q.Od = function() {
  Y(this, 4) && this.setActive(!1);
  Y(this, 32) && Vg(this, 32, !1) && this.K(32, !1)
};
q.ff = function(a) {
  return this.Ma && this.isEnabled() && this.Pc(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
q.Pc = function(a) {
  return a.keyCode == 13 && this.Gb(a)
};
w(X) || f(Error("Invalid component class " + X));
w(Cg) || f(Error("Invalid renderer class " + Cg));
var Xg = x(X);
Ig[Xg] = Cg;
Hg("goog-control", function() {
  return new X(l)
});
function Yg() {
}
C(Yg, Cg);
da(Yg);
q = Yg.prototype;
q.Zb = p("button");
q.Sb = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : Yg.d.Sb.call(this, a, b, c)
};
q.r = function(a) {
  var b = Yg.d.r.call(this, a), c = a.cc();
  c && this.ld(b, c);
  (c = a.dc()) && this.uc(b, c);
  a.$ & 16 && this.Sb(b, 16, !1);
  return b
};
q.dc = s;
q.uc = s;
q.cc = function(a) {
  return a.title
};
q.ld = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
q.oa = p("goog-button");
function Zg() {
}
C(Zg, Yg);
da(Zg);
q = Zg.prototype;
q.Zb = function() {
};
q.r = function(a) {
  a.D && !1 != a.Qc && Tg(a, !1);
  a.Qc = !1;
  a.yd &= -256;
  a.D && a.i & 32 && f(Error("Component already rendered"));
  a.i & 32 && a.K(32, !1);
  a.$ &= -33;
  return a.xb().r("button", {"class":Eg(this, a).join(" "), disabled:!a.isEnabled(), title:a.cc() || "", value:a.dc() || ""}, Ug(a) || "")
};
q.Yd = function(a) {
  W(zg(a), a.g(), "click", a.Gb)
};
q.tc = s;
q.jb = s;
q.ae = function(a) {
  return a.isEnabled()
};
q.Ob = s;
q.K = function(a, b, c) {
  Zg.d.K.call(this, a, b, c);
  if((a = a.g()) && b == 1) {
    a.disabled = c
  }
};
q.dc = function(a) {
  return a.value
};
q.uc = function(a, b) {
  if(a) {
    a.value = b
  }
};
q.Sb = s;
function $g(a, b, c) {
  X.call(this, a, b || Zg.Ua(), c)
}
C($g, X);
q = $g.prototype;
q.dc = m("Me");
q.uc = function(a) {
  this.Me = a;
  this.u.uc(this.g(), a)
};
q.cc = m("He");
q.ld = function(a) {
  this.He = a;
  this.u.ld(this.g(), a)
};
q.b = function() {
  $g.d.b.call(this);
  delete this.Me;
  delete this.He
};
q.Ra = function() {
  $g.d.Ra.call(this);
  if(this.$ & 32) {
    var a = this.Da();
    a && W(zg(this), a, "keyup", this.Pc)
  }
};
q.Pc = function(a) {
  return a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup" ? this.Gb(a) : a.keyCode == 32
};
Hg("goog-button", function() {
  return new $g(l)
});
function ah() {
}
C(ah, Yg);
da(ah);
ah.prototype.r = function(a) {
  var b = {"class":"goog-inline-block " + Eg(this, a).join(" "), title:a.cc() || ""};
  return a.xb().r("div", b, bh(this, a.rb, a.xb()))
};
ah.prototype.Zb = p("button");
function bh(a, b, c) {
  return c.r("div", "goog-inline-block " + (a.oa() + "-outer-box"), c.r("div", "goog-inline-block " + (a.oa() + "-inner-box"), b))
}
ah.prototype.oa = p("goog-custom-button");
function ch(a, b, c) {
  $g.call(this, a, b || ah.Ua(), c)
}
C(ch, $g);
Hg("goog-custom-button", function() {
  return new ch(l)
});
function ef(a, b) {
  var c;
  a instanceof ef ? (this.hb(b == l ? a.Z : b), dh(this, a.ha), eh(this, a.Tb), fh(this, a.Ba), gh(this, a.fb), hh(this, a.Ha), ih(this, a.S.L()), jh(this, a.vb)) : a && (c = String(a).match(ne)) ? (this.hb(!!b), dh(this, c[1] || "", !0), eh(this, c[2] || "", !0), fh(this, c[3] || "", !0), gh(this, c[4]), hh(this, c[5] || "", !0), ih(this, c[6] || "", !0), jh(this, c[7] || "", !0)) : (this.hb(!!b), this.S = new kh(l, this, this.Z))
}
q = ef.prototype;
q.ha = "";
q.Tb = "";
q.Ba = "";
q.fb = l;
q.Ha = "";
q.vb = "";
q.lf = !1;
q.Z = !1;
q.toString = function() {
  if(this.W) {
    return this.W
  }
  var a = [];
  this.ha && a.push(lh(this.ha, mh), ":");
  this.Ba && (a.push("//"), this.Tb && a.push(lh(this.Tb, mh), "@"), a.push(u(this.Ba) ? encodeURIComponent(this.Ba) : l), this.fb != l && a.push(":", String(this.fb)));
  this.Ha && (this.Ba && this.Ha.charAt(0) != "/" && a.push("/"), a.push(lh(this.Ha, this.Ha.charAt(0) == "/" ? nh : oh)));
  var b = String(this.S);
  b && a.push("?", b);
  this.vb && a.push("#", lh(this.vb, rh));
  return this.W = a.join("")
};
q.L = function() {
  var a = this.ha, b = this.Tb, c = this.Ba, d = this.fb, e = this.Ha, g = this.S.L(), h = this.vb, j = new ef(l, this.Z);
  a && dh(j, a);
  b && eh(j, b);
  c && fh(j, c);
  d && gh(j, d);
  e && hh(j, e);
  g && ih(j, g);
  h && jh(j, h);
  return j
};
function dh(a, b, c) {
  sh(a);
  delete a.W;
  a.ha = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.ha) {
    a.ha = a.ha.replace(/:$/, "")
  }
}
function eh(a, b, c) {
  sh(a);
  delete a.W;
  a.Tb = c ? b ? decodeURIComponent(b) : "" : b
}
function fh(a, b, c) {
  sh(a);
  delete a.W;
  a.Ba = c ? b ? decodeURIComponent(b) : "" : b
}
function gh(a, b) {
  sh(a);
  delete a.W;
  b ? (b = Number(b), (isNaN(b) || b < 0) && f(Error("Bad port number " + b)), a.fb = b) : a.fb = l
}
function hh(a, b, c) {
  sh(a);
  delete a.W;
  a.Ha = c ? b ? decodeURIComponent(b) : "" : b
}
function ih(a, b, c) {
  sh(a);
  delete a.W;
  b instanceof kh ? (a.S = b, a.S.td = a, a.S.hb(a.Z)) : (c || (b = lh(b, th)), a.S = new kh(b, a, a.Z))
}
function jh(a, b, c) {
  sh(a);
  delete a.W;
  a.vb = c ? b ? decodeURIComponent(b) : "" : b
}
function sh(a) {
  a.lf && f(Error("Tried to modify a read-only Uri"))
}
q.hb = function(a) {
  this.Z = a;
  this.S && this.S.hb(a);
  return this
};
var uh = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function lh(a, b) {
  var c = l;
  u(a) && (c = a, uh.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, vh)));
  return c
}
function vh(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var mh = /[#\/\?@]/g, oh = /[\#\?:]/g, nh = /[\#\?]/g, th = /[\#\?@]/g, rh = /#/g;
function kh(a, b, c) {
  this.ca = a || l;
  this.td = b || l;
  this.Z = !!c
}
function Z(a) {
  if(!a.l && (a.l = new Ib, a.e = 0, a.ca)) {
    for(var b = a.ca.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = l, g = l;
      d >= 0 ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = wh(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
q = kh.prototype;
q.l = l;
q.e = l;
q.t = function() {
  Z(this);
  return this.e
};
q.add = function(a, b) {
  Z(this);
  xh(this);
  a = wh(this, a);
  if(this.O(a)) {
    var c = this.l.get(a);
    t(c) ? c.push(b) : this.l.set(a, [c, b])
  }else {
    this.l.set(a, b)
  }
  this.e++;
  return this
};
q.remove = function(a) {
  Z(this);
  a = wh(this, a);
  if(this.l.O(a)) {
    xh(this);
    var b = this.l.get(a);
    t(b) ? this.e -= b.length : this.e--;
    return this.l.remove(a)
  }
  return!1
};
q.clear = function() {
  xh(this);
  this.l && this.l.clear();
  this.e = 0
};
q.Ga = function() {
  Z(this);
  return this.e == 0
};
q.O = function(a) {
  Z(this);
  a = wh(this, a);
  return this.l.O(a)
};
q.Yb = function(a) {
  var b = this.I();
  return ab(b, a)
};
q.pa = function() {
  Z(this);
  for(var a = this.l.I(), b = this.l.pa(), c = [], d = 0;d < b.length;d++) {
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
q.I = function(a) {
  Z(this);
  if(a) {
    if(a = wh(this, a), this.O(a)) {
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
    for(var b = this.l.I(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      t(d) ? eb(a, d) : a.push(d)
    }
  }
  return a
};
q.set = function(a, b) {
  Z(this);
  xh(this);
  a = wh(this, a);
  if(this.O(a)) {
    var c = this.l.get(a);
    t(c) ? this.e -= c.length : this.e--
  }
  this.l.set(a, b);
  this.e++;
  return this
};
q.get = function(a, b) {
  Z(this);
  a = wh(this, a);
  if(this.O(a)) {
    var c = this.l.get(a);
    return t(c) ? c[0] : c
  }else {
    return b
  }
};
q.toString = function() {
  if(this.ca) {
    return this.ca
  }
  if(!this.l) {
    return""
  }
  for(var a = [], b = 0, c = this.l.pa(), d = 0;d < c.length;d++) {
    var e = c[d], g = xa(e), e = this.l.get(e);
    if(t(e)) {
      for(var h = 0;h < e.length;h++) {
        b > 0 && a.push("&"), a.push(g), e[h] !== "" && a.push("=", xa(e[h])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(g), e !== "" && a.push("=", xa(e)), b++
    }
  }
  return this.ca = a.join("")
};
function xh(a) {
  delete a.Hc;
  delete a.ca;
  a.td && delete a.td.W
}
q.L = function() {
  var a = new kh;
  if(this.Hc) {
    a.Hc = this.Hc
  }
  if(this.ca) {
    a.ca = this.ca
  }
  if(this.l) {
    a.l = this.l.L()
  }
  return a
};
function wh(a, b) {
  var c = String(b);
  a.Z && (c = c.toLowerCase());
  return c
}
q.hb = function(a) {
  a && !this.Z && (Z(this), xh(this), Gb(this.l, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.Z = a
};
q.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Gb(arguments[b], function(a, b) {
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
Q("goog.ui.media.FlashObject");
r.__loadFlashObject_callbacks = {};
var Me = 1;
function yh(a, b) {
  this.Lf = a;
  this.ie = b
}
yh.prototype.Vc = 0;
yh.prototype.lc = 0;
yh.prototype.Nc = !1;
function zh(a) {
  var b = [];
  if(a.Nc) {
    return[b, 2]
  }
  var c = a.Vc, d = a.Lf.responseText;
  for(a.Vc = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var e = d.substr(a.lc, c - a.lc), e = e.replace(/\r$/, "");
    if(e.length > a.ie) {
      return a.Nc = !0, [b, 2]
    }
    b.push(e);
    a.lc = c += 1
  }
  return a.Vc - a.lc - 1 > a.ie ? (a.Nc = !0, [b, 2]) : [b, Me]
}
;var Ah = !(G || H && !pc("420+"));
function Bh(a, b) {
  this.Ie = a;
  this.U = b
}
C(Bh, I);
q = Bh.prototype;
q.n = l;
q.va = -1;
q.Nd = !1;
q.Vd = "Content-Length,Server,Date,Expires,Keep-Alive,Content-Type,Transfer-Encoding,Cache-Control".split(",");
function Ch(a) {
  var b = zh(a.Hd), c = b[0], b = b[1], d = r.parent;
  d ? (d.__XHRMaster_onframes(a.U, c, b), b != Me && a.c()) : a.c()
}
q.hf = function() {
  Ch(this);
  if(!this.X) {
    var a = r.parent;
    a && a.__XHRMaster_oncomplete(this.U);
    this.c()
  }
};
q.vf = function() {
  var a = r.parent;
  if(a) {
    this.va = this.n.qa();
    if(this.va >= 2 && !this.Nd) {
      for(var b = new Ib, c = this.Vd.length;c--;) {
        var d = this.Vd[c];
        try {
          b.set(d, this.n.f.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.t() && (this.Nd = !0, a.__XHRMaster_ongotheaders(this.U, Mb(b)), this.X)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.U, this.va);
    Ah && this.va == 3 && Ch(this)
  }else {
    this.c()
  }
};
q.Yc = function(a, b, c) {
  this.n = new De;
  L(this.n, "readystatechange", z(this.vf, this));
  L(this.n, "complete", z(this.hf, this));
  this.n.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.Hd = new yh(this.n.f, 1048576)
};
q.b = function() {
  Bh.d.b.call(this);
  delete this.Hd;
  this.n && this.n.c();
  delete this.Ie.Pb[this.U];
  delete this.Ie
};
function Dh() {
  this.Pb = {}
}
C(Dh, I);
Dh.prototype.mf = function(a, b, c, d) {
  var e = new Bh(this, a);
  this.Pb[a] = e;
  e.Yc(b, c, d)
};
Dh.prototype.Ye = function(a) {
  (a = this.Pb[a]) && a.c()
};
Dh.prototype.b = function() {
  Dh.d.b.call(this);
  for(var a = Sa(this.Pb);a.length;) {
    a.pop().c()
  }
  delete this.Pb
};
var Eh = new Dh;
r.__XHRSlave_makeRequest = z(Eh.mf, Eh);
r.__XHRSlave_dispose = z(Eh.Ye, Eh);
function Fh() {
  this.Tf = "demosminerva_site_uaid";
  this.Uf = "demosminerva_site_uaid_secure"
}
function Gh() {
  new ef(document.location);
  var a = Te();
  hd(a, function() {
    var a = V("xdrframe-1").contentWindow || (H ? V("xdrframe-1").document || V("xdrframe-1").contentWindow.document : V("xdrframe-1").contentDocument || V("xdrframe-1").contentWindow.document).parentWindow || (H ? V("xdrframe-1").document || V("xdrframe-1").contentWindow.document : V("xdrframe-1").contentDocument || V("xdrframe-1").contentWindow.document).defaultView, c = V("xdrframe-2").contentWindow || (H ? V("xdrframe-2").document || V("xdrframe-2").contentWindow.document : V("xdrframe-2").contentDocument || 
    V("xdrframe-2").contentWindow.document).parentWindow || (H ? V("xdrframe-2").document || V("xdrframe-2").contentWindow.document : V("xdrframe-2").contentDocument || V("xdrframe-2").contentWindow.document).defaultView;
    a || f(Error("could not get primaryWindow xdrframe"));
    c || f(Error("could not get secondaryWindow xdrframe"));
    var d = new ef(r.__XDRSetup.baseurl1);
    hh(d, "/httpface/");
    var e = new ef(r.__XDRSetup.baseurl2);
    hh(e, "/httpface/");
    return new Ve(d.toString(), a, e.toString(), c)
  });
  return a
}
;var Hh = Q("ljstream.logger");
window.onerror = function(a, b, c) {
  Od(Hh, "window.onerror: message: " + F(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Ih() {
  this.qe = new ub
}
function lf(a, b) {
  Hh.info("streamReset: reasonString=" + F(a) + ", applicationLevel=" + b);
  Jh("Disconnected from server.  Try reloading this page.");
  $ = l
}
function Kh(a) {
  Hh.info("Sending preferences to server");
  var b;
  b = new vf;
  b.o[1] = V("include_russian_posts").checked;
  b.za && (b.za[1] = !0);
  b = a.qe.Mb(b);
  df(a.z, [(new xb).Mb([2, b])])
}
Ih.prototype.reset = function(a) {
  Hh.info("resetting with reason: " + a);
  this.z.reset(a)
};
var $ = l, Lh = new kd(r.window);
function Jh(a) {
  a = pf("span", {"class":"important-message"}, a);
  qf(a)
}
function Mh() {
  $ && ($.reset("idle timeout fired"), $ = l, Jh("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var Nh = l;
function Oh() {
  Nh != l && Lh.G.clearTimeout(Nh);
  $ && (Nh = Lh.G.setTimeout(Mh, 6E5))
}
L(window, ["click", "focus", "keydown", "keypress"], Oh, !0);
var Lf = new Gf, Ph = 0;
function qf(a) {
  a = pf("div", {"class":"row-" + (Ph % 2 == 0 ? "even" : "odd")}, pf("nobr", {}, a));
  V("ljstream-container-inner").appendChild(a);
  Ph += 1;
  var b;
  if(b = uf) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !H && d.compatMode == "CSS1Compat" ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new Ef(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = Kf().height;
    b = !(a + b <= c + d)
  }
  if(b) {
    a = Kf().height, window.scrollBy(0, Math.round(a / 2) + 80)
  }
}
function Qh() {
  var a = new Fh;
  $ = new Ih;
  Oh();
  hd(Gh(), function(b) {
    $ || f(Error("lastProto falsy?"));
    b = new Ye(Lh, $, b, a);
    $.z = b;
    var c = $;
    df(c.z, ["subprotocol:ljstream"]);
    Kh(c);
    b.start();
    return l
  })
}
function Rh() {
  L(r, "load", function() {
    window.scrollTo(0, 0)
  });
  L(V("include_russian_posts"), "click", function() {
    Kh($)
  });
  uf = !0;
  L(V("automatic_scroll"), "click", function(a) {
    uf = a.target.checked
  });
  var a = new ch("Clear posts");
  Sg(a, "clear-posts-button");
  Ag(a);
  L(a, "action", function() {
    V("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = V("ljstream-container");
  a.style.marginTop = V("demo-header").offsetHeight + "px";
  V("demo-header").style.width = "9000px";
  var b = pf("div", {id:"ljstream-container-inner"});
  a.appendChild(b)
}
function Sh() {
  Td().ib(Jd);
  if((new ef(document.location)).S.get("logging") == "1") {
    var a = new lg("main");
    a.Nb(!0);
    a.Fa()
  }
  Hh.info("Logger works.");
  Rh();
  Qh()
}
var Th = "__ljstream_init".split("."), Uh = r;
!(Th[0] in Uh) && Uh.execScript && Uh.execScript("var " + Th[0]);
for(var Vh;Th.length && (Vh = Th.shift());) {
  !Th.length && fa(Sh) ? Uh[Vh] = Sh : Uh = Uh[Vh] ? Uh[Vh] : Uh[Vh] = {}
}
;})();
