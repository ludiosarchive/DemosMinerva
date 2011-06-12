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
  var d = b || r;
  if(arguments.length > 2) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var b = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(b, e);
      return a.apply(d, b)
    }
  }else {
    return function() {
      return a.apply(d, arguments)
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
var oa, pa, qa, ra;
oa = RegExp("(?:\\b[a-z\\d.-]+://[^<>\\s]+|\\b(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:[;/][^#?<>\\s]*)?(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w)|(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w))", 
"ig");
pa = /^[a-z\d.-]+:\/\//i;
qa = {"'":"`", ">":"<", ")":"(", "]":"[", "}":"{", "\u00bb":"\u00ab", "\u203a":"\u2039"};
ra = {ob:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, xe:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
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
        b.xe && (e = e.replace(b.xe, function(a) {
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
  this.Yf = a
}
C(Ia, ta);
Ia.prototype.name = "AssertionError";
function Ja(a, b) {
  f(new Ia("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ka(a, b, c) {
  this.J = a;
  this.A = b;
  this.bd = c.name;
  this.Ya = !!c.Zf;
  this.Wf = !!c.required;
  this.ub = c.Sa;
  this.ne = c.type;
  this.Kd = !1;
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
      this.Kd = !0
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
var Ua = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
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
  this.le = a;
  this.bd = b.name || l;
  this.Tf = b.Nd || l;
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
  this.q = {};
  this.Qa = this.constructor.Qa;
  var a = this.Qa.na, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.na = b;
  this.Jc = this.Yc = l
}
function mb(a, b) {
  for(var c in a.q) {
    a.na[c] || b.call(a, c, a.q[c])
  }
}
q = lb.prototype;
q.wb = m("Qa");
q.get = function(a, b) {
  return nb(this, a.A, b)
};
q.set = function(a, b) {
  this.q[a.A] = b
};
q.add = function(a, b) {
  var c = a.A;
  this.q[c] || (this.q[c] = []);
  this.q[c].push(b)
};
q.clear = function(a) {
  delete this.q[a.A]
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
      var e = Qa(d), g = d.A, h = this.q[g], g = a.q[g];
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
    delete a.q[d.A];
    if(ob(this, d.A)) {
      var e = Qa(d);
      if(d.Ya) {
        var g;
        g = d.A;
        pb(this, this.na[g]);
        g = this.q[g] || [];
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
  return b in a.q && fa(a.q[b])
}
function pb(a, b) {
  if(a.Yc) {
    var c = b.A;
    if(!(c in a.Jc)) {
      var d = a.q, e;
      e = a.Yc;
      var g = a.q[c];
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
      a.Jc[c] = !0
    }
  }
}
function nb(a, b, c) {
  var d = a.na[b];
  pb(a, d);
  return d.Ya ? (c = c || 0, qb(a, b), a.q[b][c]) : (t(a.q[b]), a.q[b])
}
function qb(a, b) {
  return a.na[b].Ya ? (ob(a, b) && t(a.q[b]), ob(a, b) ? a.q[b].length : 0) : ob(a, b) ? 1 : 0
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
  new a.le;
  f(Error("Unimplemented"))
};
sb.prototype.$b = function(a, b) {
  if(Qa(a)) {
    return this.Ic(a.ne.Qa, b)
  }
  if(!a.Kd) {
    return b
  }
  var c = a.ne;
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
  var c = new a.le;
  c.Yc = this;
  c.q = b;
  c.Jc = {};
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
          if(vb(a.Re)) {
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
  this.c = [];
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
q.g = 0;
q.vd = 0;
q.t = m("g");
q.I = function() {
  Jb(this);
  for(var a = [], b = 0;b < this.c.length;b++) {
    a.push(this.m[this.c[b]])
  }
  return a
};
q.pa = function() {
  Jb(this);
  return this.c.concat()
};
q.O = function(a) {
  return Kb(this.m, a)
};
q.Yb = function(a) {
  for(var b = 0;b < this.c.length;b++) {
    var c = this.c[b];
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
  if(this.g != a.t()) {
    return!1
  }
  var c = b || Lb;
  Jb(this);
  for(var d, e = 0;d = this.c[e];e++) {
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
  return this.g == 0
};
q.clear = function() {
  this.m = {};
  this.vd = this.g = this.c.length = 0
};
q.remove = function(a) {
  return Kb(this.m, a) ? (delete this.m[a], this.g--, this.vd++, this.c.length > 2 * this.g && Jb(this), !0) : !1
};
function Jb(a) {
  if(a.g != a.c.length) {
    for(var b = 0, c = 0;b < a.c.length;) {
      var d = a.c[b];
      Kb(a.m, d) && (a.c[c++] = d);
      b++
    }
    a.c.length = c
  }
  if(a.g != a.c.length) {
    for(var e = {}, c = b = 0;b < a.c.length;) {
      d = a.c[b], Kb(e, d) || (a.c[c++] = d, e[d] = 1), b++
    }
    a.c.length = c
  }
}
q.get = function(a, b) {
  return Kb(this.m, a) ? this.m[a] : b
};
q.set = function(a, b) {
  Kb(this.m, a) || (this.g++, this.c.push(a), this.vd++);
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
  for(var b = {}, c = 0;c < a.c.length;c++) {
    var d = a.c[c];
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
q.xa = 0;
q.append = function(a) {
  var b = Nb(a);
  this.F.set(this.Pa + 1, [a, b]);
  this.Pa += 1;
  this.xa += b
};
q.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
q.B = function(a) {
  a.push("<Queue with ", String(this.F.t()), " item(s), counter=#", String(this.Pa), ", size=", String(this.xa), ">")
};
function Qb(a) {
  Jb(a.F);
  hb(a.F.c);
  return a.F.c
}
function Rb() {
  this.ya = new Ib
}
Rb.prototype.$a = -1;
Rb.prototype.xa = 0;
function Sb(a) {
  var b = a.ya.pa();
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
function I(a) {
  return oc[a] || (oc[a] = Ga(hc, a) >= 0)
}
;var pc;
var qc = !G || I("9"), rc = G && !I("8");
function J() {
}
J.prototype.X = !1;
J.prototype.d = function() {
  if(!this.X) {
    this.X = !0, this.b()
  }
};
J.prototype.b = function() {
  sc(this.Sf)
};
function sc(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ga(d) ? sc.apply(l, d) : d && typeof d.d == "function" && d.d()
  }
}
;function tc(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
C(tc, J);
q = tc.prototype;
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
var uc = new Function("a", "return a");
function vc(a, b) {
  a && this.Fa(a, b)
}
C(vc, tc);
var wc = [1, 4, 2];
q = vc.prototype;
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
  tc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(dc) {
      var e;
      a: {
        try {
          uc(d.nodeName);
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
function xc(a) {
  return qc ? a.ea.button == 0 : a.type == "click" ? !0 : !!(a.ea.button & wc[0])
}
q.stopPropagation = function() {
  vc.e.stopPropagation.call(this);
  this.ea.stopPropagation ? this.ea.stopPropagation() : this.ea.cancelBubble = !0
};
q.preventDefault = function() {
  vc.e.preventDefault.call(this);
  var a = this.ea;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, rc) {
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
  vc.e.b.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.ea = l
};
function yc() {
}
var zc = 0;
q = yc.prototype;
q.key = 0;
q.Ja = !1;
q.Fc = !1;
q.Fa = function(a, b, c, d, e, g) {
  w(a) ? this.ce = !0 : a && a.handleEvent && w(a.handleEvent) ? this.ce = !1 : f(Error("Invalid listener argument"));
  this.bb = a;
  this.we = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.fc = g;
  this.Fc = !1;
  this.key = ++zc;
  this.Ja = !1
};
q.handleEvent = function(a) {
  return this.ce ? this.bb.call(this.fc || this.src, a) : this.bb.handleEvent.call(this.bb, a)
};
var Ac, Bc = (Ac = "ScriptEngine" in r && r.ScriptEngine() == "JScript") ? r.ScriptEngineMajorVersion() + "." + r.ScriptEngineMinorVersion() + "." + r.ScriptEngineBuildVersion() : "0";
function K(a, b) {
  this.he = b;
  this.Ca = [];
  a > this.he && f(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.Ca.push(this.ba ? this.ba() : {})
  }
}
C(K, J);
K.prototype.ba = l;
K.prototype.Ld = l;
K.prototype.getObject = function() {
  return this.Ca.length ? this.Ca.pop() : this.ba ? this.ba() : {}
};
function Cc(a, b) {
  a.Ca.length < a.he ? a.Ca.push(b) : Dc(a, b)
}
function Dc(a, b) {
  if(a.Ld) {
    a.Ld(b)
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
K.prototype.b = function() {
  K.e.b.call(this);
  for(var a = this.Ca;a.length;) {
    Dc(this, a.pop())
  }
  delete this.Ca
};
var Ec, Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc;
(function() {
  function a() {
    return{g:0, T:0}
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
    return new yc
  }
  function e() {
    return new vc
  }
  var g = Ac && !(Ga(Bc, "5.7") >= 0), h;
  Jc = function(a) {
    h = a
  };
  if(g) {
    Ec = function() {
      return j.getObject()
    };
    Fc = function(a) {
      Cc(j, a)
    };
    Gc = function() {
      return k.getObject()
    };
    Hc = function(a) {
      Cc(k, a)
    };
    Ic = function() {
      return n.getObject()
    };
    Kc = function() {
      Cc(n, c())
    };
    Lc = function() {
      return B.getObject()
    };
    Mc = function(a) {
      Cc(B, a)
    };
    Nc = function() {
      return o.getObject()
    };
    Oc = function(a) {
      Cc(o, a)
    };
    var j = new K(0, 600);
    j.ba = a;
    var k = new K(0, 600);
    k.ba = b;
    var n = new K(0, 600);
    n.ba = c;
    var B = new K(0, 600);
    B.ba = d;
    var o = new K(0, 600);
    o.ba = e
  }else {
    Ec = a, Fc = s, Gc = b, Hc = s, Ic = c, Kc = s, Lc = d, Mc = s, Nc = e, Oc = s
  }
})();
var Pc = {}, L = {}, Qc = {}, Rc = {};
function M(a, b, c, d, e) {
  if(b) {
    if(t(b)) {
      for(var g = 0;g < b.length;g++) {
        M(a, b[g], c, d, e)
      }
      return l
    }else {
      var d = !!d, h = L;
      b in h || (h[b] = Ec());
      h = h[b];
      d in h || (h[d] = Ec(), h.g++);
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
        k = h[j] = Gc(), h.g++
      }
      g = Ic();
      g.src = a;
      h = Lc();
      h.Fa(c, g, a, b, d, e);
      c = h.key;
      g.key = c;
      k.push(h);
      Pc[c] = h;
      Qc[j] || (Qc[j] = Gc());
      Qc[j].push(h);
      a.addEventListener ? (a == r || !a.Hd) && a.addEventListener(b, g, d) : a.attachEvent(b in Rc ? Rc[b] : Rc[b] = "on" + b, g);
      return c
    }
  }else {
    f(Error("Invalid event type"))
  }
}
function Sc(a, b, c, d, e) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      Sc(a, b[g], c, d, e)
    }
    return l
  }
  a = M(a, b, c, d, e);
  Pc[a].Fc = !0;
  return a
}
function Tc(a, b, c, d, e) {
  if(t(b)) {
    for(var g = 0;g < b.length;g++) {
      Tc(a, b[g], c, d, e)
    }
  }else {
    if(d = !!d, a = Uc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].bb == c && a[g].capture == d && a[g].fc == e) {
          N(a[g].key);
          break
        }
      }
    }
  }
}
function N(a) {
  if(Pc[a]) {
    var b = Pc[a];
    if(!b.Ja) {
      var c = b.src, d = b.type, e = b.we, g = b.capture;
      c.removeEventListener ? (c == r || !c.Hd) && c.removeEventListener(d, e, g) : c.detachEvent && c.detachEvent(d in Rc ? Rc[d] : Rc[d] = "on" + d, e);
      c = x(c);
      e = L[d][g][c];
      if(Qc[c]) {
        var h = Qc[c];
        bb(h, b);
        h.length == 0 && delete Qc[c]
      }
      b.Ja = !0;
      e.pe = !0;
      Vc(d, g, c, e);
      delete Pc[a]
    }
  }
}
function Vc(a, b, c, d) {
  if(!d.kc && d.pe) {
    for(var e = 0, g = 0;e < d.length;e++) {
      if(d[e].Ja) {
        var h = d[e].we;
        h.src = l;
        Kc(h);
        Mc(d[e])
      }else {
        e != g && (d[g] = d[e]), g++
      }
    }
    d.length = g;
    d.pe = !1;
    g == 0 && (Hc(d), delete L[a][b][c], L[a][b].g--, L[a][b].g == 0 && (Fc(L[a][b]), delete L[a][b], L[a].g--), L[a].g == 0 && (Fc(L[a]), delete L[a]))
  }
}
function Wc(a) {
  var b, c = 0, d = b == l;
  b = !!b;
  if(a == l) {
    Ra(Qc, function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          N(g.key), c++
        }
      }
    })
  }else {
    if(a = x(a), Qc[a]) {
      for(var a = Qc[a], e = a.length - 1;e >= 0;e--) {
        var g = a[e];
        if(d || b == g.capture) {
          N(g.key), c++
        }
      }
    }
  }
}
function Uc(a, b, c) {
  var d = L;
  return b in d && (d = d[b], c in d && (d = d[c], a = x(a), d[a])) ? d[a] : l
}
function Xc(a, b, c, d, e) {
  var g = 1, b = x(b);
  if(a[b]) {
    a.T--;
    a = a[b];
    a.kc ? a.kc++ : a.kc = 1;
    try {
      for(var h = a.length, j = 0;j < h;j++) {
        var k = a[j];
        k && !k.Ja && (g &= Yc(k, e) !== !1)
      }
    }finally {
      a.kc--, Vc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function Yc(a, b) {
  var c = a.handleEvent(b);
  a.Fc && N(a.key);
  return c
}
Jc(function(a, b) {
  if(!Pc[a]) {
    return!0
  }
  var c = Pc[a], d = c.type, e = L;
  if(!(d in e)) {
    return!0
  }
  var e = e[d], g, h;
  pc === i && (pc = G && !r.addEventListener);
  if(pc) {
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
    n = Nc();
    n.Fa(g, this);
    g = !0;
    try {
      if(j) {
        for(var o = Gc(), v = n.currentTarget;v;v = v.parentNode) {
          o.push(v)
        }
        h = e[!0];
        h.T = h.g;
        for(var y = o.length - 1;!n.Ia && y >= 0 && h.T;y--) {
          n.currentTarget = o[y], g &= Xc(h, o[y], d, !0, n)
        }
        if(k) {
          h = e[!1];
          h.T = h.g;
          for(y = 0;!n.Ia && y < o.length && h.T;y++) {
            n.currentTarget = o[y], g &= Xc(h, o[y], d, !1, n)
          }
        }
      }else {
        g = Yc(c, n)
      }
    }finally {
      if(o) {
        o.length = 0, Hc(o)
      }
      n.d();
      Oc(n)
    }
    return g
  }
  d = new vc(b, this);
  try {
    g = Yc(c, d)
  }finally {
    d.d()
  }
  return g
});
var Zc = 0;
function $c() {
}
C($c, J);
q = $c.prototype;
q.Hd = !0;
q.mc = l;
q.ld = aa("mc");
q.addEventListener = function(a, b, c, d) {
  M(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Tc(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = L;
  if(b in c) {
    if(u(a)) {
      a = new tc(a, this)
    }else {
      if(a instanceof tc) {
        a.target = a.target || this
      }else {
        var d = a, a = new tc(b, this);
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
      g.T = g.g;
      for(var h = e.length - 1;!a.Ia && h >= 0 && g.T;h--) {
        a.currentTarget = e[h], d &= Xc(g, e[h], a.type, !0, a) && a.Jb != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.T = g.g, b) {
        for(h = 0;!a.Ia && h < e.length && g.T;h++) {
          a.currentTarget = e[h], d &= Xc(g, e[h], a.type, !1, a) && a.Jb != !1
        }
      }else {
        for(e = this;!a.Ia && e && g.T;e = e.mc) {
          a.currentTarget = e, d &= Xc(g, e, a.type, !1, a) && a.Jb != !1
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
  $c.e.b.call(this);
  Wc(this);
  this.mc = l
};
var ad = r.window;
Zc++;
Zc++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function bd(a, b) {
  this.Wb = [];
  this.Nf = a;
  this.Xe = b || l
}
q = bd.prototype;
q.Ta = !1;
q.Wa = !1;
q.Fb = 0;
q.Fe = !1;
q.Ue = !1;
q.Ed = function(a, b) {
  this.Ta = !0;
  this.qc = b;
  this.Wa = !a;
  cd(this);
  this.Fb--;
  this.Fb == 0 && this.Ta && cd(this)
};
q.ob = function(a) {
  if(this.Ta) {
    this.Fe || f(new dd(this)), this.Fe = !1
  }
  this.Ta = !0;
  this.qc = a;
  this.Wa = !1;
  cd(this)
};
function ed(a, b) {
  fd(a, b, l, i)
}
function fd(a, b, c, d) {
  a.Wb.push([b, c, d]);
  a.Ta && cd(a)
}
function gd(a) {
  return Za(a.Wb, function(a) {
    return w(a[1])
  })
}
function cd(a) {
  a.td && a.Ta && gd(a) && (r.clearTimeout(a.td), delete a.td);
  for(var b = a.qc, c = !1, d = !1;a.Wb.length && a.Fb == 0;) {
    var e = a.Wb.shift(), g = e[0], h = e[1], e = e[2];
    if(g = a.Wa ? h : g) {
      try {
        var j = g.call(e || a.Xe, b);
        if(fa(j)) {
          a.Wa = a.Wa && (j == b || j instanceof Error), a.qc = b = j
        }
        b instanceof bd && (d = !0, a.Fb++)
      }catch(k) {
        b = k, a.Wa = !0, gd(a) || (c = !0)
      }
    }
  }
  a.qc = b;
  if(d && a.Fb) {
    fd(b, z(a.Ed, a, !0), z(a.Ed, a, !1)), b.Ue = !0
  }
  if(c) {
    a.td = r.setTimeout(function() {
      f(b)
    }, 0)
  }
}
function dd(a) {
  ta.call(this);
  this.Rf = a
}
C(dd, ta);
dd.prototype.message = "Already called";
function hd(a) {
  this.G = a;
  this.Lc = [];
  this.Md = [];
  this.Mf = z(this.If, this)
}
hd.prototype.Hf = l;
hd.prototype.If = function() {
  this.Hf = l;
  var a = this.Lc;
  this.Lc = [];
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
  if(this.Lc.length == 0) {
    a = this.Md;
    this.Md = [];
    for(b = 0;b < a.length;b++) {
      a[b].ob(l)
    }
  }
};
new hd(r.window);
function id() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ A()).toString(36)
}
function jd(a) {
  return a.substr(0, a.length - 1)
}
var kd = /^(0|[1-9]\d*)$/, ld = /^(0|\-?[1-9]\d*)$/;
function md(a) {
  var b = nd;
  return kd.test(a) && (a = parseInt(a, 10), a <= b) ? a : l
}
;function od(a) {
  this.m = new Ib;
  a && this.Cc(a)
}
function pd(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + x(a) : b.substr(0, 1) + a
}
q = od.prototype;
q.t = function() {
  return this.m.t()
};
q.add = function(a) {
  this.m.set(pd(a), a)
};
q.Cc = function(a) {
  for(var a = Eb(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
q.jd = function(a) {
  for(var a = Eb(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
q.remove = function(a) {
  return this.m.remove(pd(a))
};
q.clear = function() {
  this.m.clear()
};
q.Ga = function() {
  return this.m.Ga()
};
q.contains = function(a) {
  return this.m.O(pd(a))
};
q.I = function() {
  return this.m.I()
};
q.L = function() {
  return new od(this)
};
q.k = function(a) {
  return this.t() == Db(a) && qd(this, a)
};
function qd(a, b) {
  var c = Db(b);
  if(a.t() > c) {
    return!1
  }
  !(b instanceof od) && c > 5 && (b = new od(b));
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
;function rd(a) {
  return sd(a || arguments.callee.caller, [])
}
function sd(a, b) {
  var c = [];
  if(ab(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(td(a) + "(");
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
            g = (g = td(g)) ? g : "[fn]";
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
  a = String(a);
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
vd.prototype.yf = 0;
vd.prototype.Nc = l;
vd.prototype.Mc = l;
var wd = 0;
vd.prototype.reset = function(a, b, c, d, e) {
  this.yf = typeof e == "number" ? e : wd++;
  this.He = d || A();
  this.R = a;
  this.me = b;
  this.ge = c;
  delete this.Nc;
  delete this.Mc
};
vd.prototype.ib = aa("R");
function xd(a) {
  this.bd = a
}
xd.prototype.J = l;
xd.prototype.R = l;
xd.prototype.la = l;
xd.prototype.zb = l;
function O(a, b) {
  this.name = a;
  this.value = b
}
O.prototype.toString = m("name");
var yd = new O("SHOUT", 1200), zd = new O("SEVERE", 1E3), Bd = new O("WARNING", 900), Cd = new O("INFO", 800), Dd = new O("CONFIG", 700), Ed = new O("FINE", 500), Fd = new O("FINEST", 300), Gd = new O("ALL", 0), Hd = [new O("OFF", Infinity), yd, zd, Bd, Cd, Dd, Ed, new O("FINER", 400), Fd, Gd], Id = l;
function Jd(a) {
  if(!Id) {
    Id = {};
    for(var b = 0, c;c = Hd[b];b++) {
      Id[c.value] = c, Id[c.name] = c
    }
  }
  return Id[a] || l
}
q = xd.prototype;
q.getParent = m("J");
q.ib = aa("R");
function Kd(a) {
  if(a.R) {
    return a.R
  }
  if(a.J) {
    return Kd(a.J)
  }
  Ja("Root logger has no level set.");
  return l
}
q.log = function(a, b, c) {
  if(a.value >= Kd(this).value) {
    a = this.cf(a, b, c);
    r.console && r.console.markTimeline && r.console.markTimeline("log:" + a.me);
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
  var d = new vd(a, String(b), this.bd);
  if(c) {
    d.Nc = c;
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
          k = c.lineNumber || c.Xf || "Not available"
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
      e = "Message: " + za(h.message) + '\nUrl: <a href="view-source:' + h.fileName + '" target="_new">' + h.fileName + "</a>\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + za(h.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + za(rd(g) + "-> ")
    }catch(y) {
      e = "Exception trying to expose exception! You win, we lose. " + y
    }
    d.Mc = e
  }
  return d
};
function Ld(a, b) {
  a.log(zd, b, i)
}
function Md(a, b) {
  a.log(Bd, b, i)
}
q.info = function(a, b) {
  this.log(Cd, a, b)
};
function P(a, b) {
  a.log(Ed, b, i)
}
function Q(a, b) {
  a.log(Fd, b, i)
}
var Nd = {}, Od = l;
function Pd() {
  Od || (Od = new xd(""), Nd[""] = Od, Od.ib(Dd))
}
function Qd() {
  Pd();
  return Od
}
function R(a) {
  Pd();
  var b;
  if(!(b = Nd[a])) {
    b = new xd(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = R(a.substr(0, c));
    if(!c.la) {
      c.la = {}
    }
    c.la[d] = b;
    b.J = c;
    Nd[a] = b
  }
  return b
}
;R("cw.net.FlashSocket");
R("cw.net.FlashSocketTracker");
function Rd(a) {
  this.ma = a;
  this.Ec = []
}
C(Rd, J);
Rd.prototype.a = R("cw.net.FlashSocketConduit");
Rd.prototype.yd = function(a) {
  this.Ec ? (Q(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Ec.push.apply(this.Ec, a)) : (Q(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.od.yd(a))
};
Rd.prototype.Cd = function(a, b) {
  this.od.Cd(a, b)
};
Rd.prototype.b = function() {
  this.a.info("in disposeInternal.");
  Rd.e.b.call(this);
  this.od.d();
  delete this.ma
};
var nd = Math.pow(2, 53);
var Sd = {Re:p("<cw.eq.Wildcard>")};
function Td(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function Ud(a, b, c) {
  var d = ea(a), e = ea(b);
  if(a == Sd || b == Sd) {
    return!0
  }else {
    if(a != l && typeof a.k == "function") {
      return c && c.push("running custom equals function on left object"), a.k(b, c)
    }else {
      if(b != l && typeof b.k == "function") {
        return c && c.push("running custom equals function on right object"), b.k(a, c)
      }else {
        if(Td(d) || Td(e)) {
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
                      if(!Ud(a[d], b[d], c)) {
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
                if(a.Qe == Ub && b.Qe == Ub) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = !1;
                        break a
                      }
                      if(!Ud(a[g], b[g], c)) {
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
;function S(a) {
  ta.call(this, a)
}
C(S, ta);
S.prototype.name = "cw.net.InvalidFrame";
function T() {
  var a = [];
  this.Q(a);
  return a.join("")
}
function Vd() {
}
Vd.prototype.k = function(a, b) {
  return!(a instanceof Vd) ? !1 : Ud(Wd(this), Wd(a), b)
};
Vd.prototype.B = function(a, b) {
  a.push("<HelloFrame properties=");
  E(Wd(this), a, b);
  a.push(">")
};
function Wd(a) {
  return[a.lb, a.ue, a.Xd, a.ze, a.Qb, a.rd, a.oe, a.ke, a.$c, a.ie, a.Me, a.Ge, a.V, a.jc]
}
Vd.prototype.N = T;
Vd.prototype.Q = function(a) {
  var b = {};
  b.tnum = this.lb;
  b.ver = this.ue;
  b.format = this.Xd;
  b["new"] = this.ze;
  b.id = this.Qb;
  b.ming = this.rd;
  b.pad = this.oe;
  b.maxb = this.ke;
  if(fa(this.$c)) {
    b.maxt = this.$c
  }
  b.maxia = this.ie;
  b.tcpack = this.Me;
  b.eeds = this.Ge;
  b.sack = this.V instanceof Ob ? jd((new U(this.V)).N()) : this.V;
  b.seenack = this.jc instanceof Ob ? jd((new U(this.jc)).N()) : this.jc;
  for(var c in b) {
    b[c] === i && delete b[c]
  }
  a.push((new xb).Mb(b), "H")
};
function Xd(a) {
  this.kb = a
}
Xd.prototype.k = function(a) {
  return a instanceof Xd && this.kb == a.kb
};
Xd.prototype.B = function(a, b) {
  a.push("new StringFrame(");
  E(this.kb, a, b);
  a.push(")")
};
Xd.prototype.N = T;
Xd.prototype.Q = function(a) {
  a.push(this.kb, " ")
};
function Yd(a) {
  this.Xb = a
}
Yd.prototype.k = function(a) {
  return a instanceof Yd && this.Xb == a.Xb
};
Yd.prototype.B = function(a, b) {
  a.push("new CommentFrame(");
  E(this.Xb, a, b);
  a.push(")")
};
Yd.prototype.N = T;
Yd.prototype.Q = function(a) {
  a.push(this.Xb, "^")
};
function Zd(a) {
  this.Lb = a
}
Zd.prototype.k = function(a) {
  return a instanceof Zd && this.Lb == a.Lb
};
Zd.prototype.B = function(a) {
  a.push("new SeqNumFrame(", String(this.Lb), ")")
};
Zd.prototype.N = T;
Zd.prototype.Q = function(a) {
  a.push(String(this.Lb), "N")
};
function $d(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return l
  }
  a: {
    var c = b[1], a = nd;
    if(ld.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
      var g = md(b[d]);
      if(g == l) {
        return l
      }
      c.push(g)
    }
  }
  return new Ob(a, c)
}
function U(a) {
  this.V = a
}
U.prototype.k = function(a, b) {
  return a instanceof U && this.V.k(a.V, b)
};
U.prototype.B = function(a, b) {
  a.push("new SackFrame(");
  E(this.V, a, b);
  a.push(")")
};
U.prototype.N = T;
U.prototype.Q = function(a) {
  var b = this.V;
  a.push(b.Ka.join(","), "|", String(b.Na));
  a.push("A")
};
function ae(a) {
  this.Cb = a
}
ae.prototype.k = function(a, b) {
  return a instanceof ae && this.Cb.k(a.Cb, b)
};
ae.prototype.B = function(a, b) {
  a.push("new StreamStatusFrame(");
  E(this.Cb, a, b);
  a.push(")")
};
ae.prototype.N = T;
ae.prototype.Q = function(a) {
  var b = this.Cb;
  a.push(b.Ka.join(","), "|", String(b.Na));
  a.push("T")
};
function be() {
}
be.prototype.B = function(a) {
  a.push("new StreamCreatedFrame()")
};
be.prototype.k = function(a) {
  return a instanceof be
};
be.prototype.N = T;
be.prototype.Q = function(a) {
  a.push("C")
};
function ce() {
}
ce.prototype.B = function(a) {
  a.push("new YouCloseItFrame()")
};
ce.prototype.k = function(a) {
  return a instanceof ce
};
ce.prototype.N = T;
ce.prototype.Q = function(a) {
  a.push("Y")
};
function de(a, b) {
  this.Hb = a;
  this.nb = b
}
de.prototype.k = function(a) {
  return a instanceof de && this.Hb == a.Hb && this.nb == a.nb
};
de.prototype.B = function(a, b) {
  a.push("new ResetFrame(");
  E(this.Hb, a, b);
  a.push(", ", String(this.nb), ")")
};
de.prototype.N = T;
de.prototype.Q = function(a) {
  a.push(this.Hb, "|", String(Number(this.nb)), "!")
};
var ee = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function fe(a) {
  this.reason = a
}
fe.prototype.k = function(a) {
  return a instanceof fe && this.reason == a.reason
};
fe.prototype.B = function(a, b) {
  a.push("new TransportKillFrame(");
  E(this.reason, a, b);
  a.push(")")
};
fe.prototype.N = T;
fe.prototype.Q = function(a) {
  a.push(this.reason, "K")
};
function ge(a) {
  a || f(new S("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new Xd(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = $d(jd(a)), a == l && f(new S("bad sack")), new U(a)
    }else {
      if(b == "N") {
        return a = md(jd(a)), a == l && f(new S("bad seqNum")), new Zd(a)
      }else {
        if(b == "T") {
          return a = $d(jd(a)), a == l && f(new S("bad lastSackSeen")), new ae(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && f(new S("leading garbage")), new ce
          }else {
            if(b == "^") {
              return new Yd(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && f(new S("leading garbage")), new be
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && f(new S("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == l && f(new S("bad applicationLevel")), new de(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = ee[a], a == l && f(new S("unknown kill reason: " + a)), new fe(a)
                  }else {
                    f(new S("Invalid frame type " + b))
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
;var he;
he = !1;
var ie = $b();
ie && (ie.indexOf("Firefox") != -1 || ie.indexOf("Camino") != -1 || ie.indexOf("iPhone") != -1 || ie.indexOf("iPod") != -1 || ie.indexOf("iPad") != -1 || ie.indexOf("Android") != -1 || ie.indexOf("Chrome") != -1 && (he = !0));
var je = he;
var ke = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function le(a, b) {
  var c = a.match(ke), d = b.match(ke);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function me() {
  if(dc) {
    this.za = {}, this.Ac = {}, this.wc = []
  }
}
me.prototype.a = R("goog.net.xhrMonitor");
me.prototype.P = dc;
me.prototype.Nb = function(a) {
  this.P = dc && a
};
function ne(a) {
  var b = oe;
  if(b.P) {
    var c = u(a) ? a : ia(a) ? x(a) : "";
    Q(b.a, "Pushing context: " + a + " (" + c + ")");
    b.wc.push(c)
  }
}
function pe() {
  var a = oe;
  if(a.P) {
    var b = a.wc.pop();
    Q(a.a, "Popping context: " + b);
    qe(a, b)
  }
}
function re(a) {
  var b = oe;
  if(b.P) {
    a = x(a);
    P(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.wc.length;c++) {
      var d = b.wc[c];
      se(b.za, d, a);
      se(b.Ac, a, d)
    }
  }
}
function qe(a, b) {
  var c = a.Ac[b], d = a.za[b];
  c && d && (Q(a.a, "Updating dependent contexts"), Xa(c, function(a) {
    Xa(d, function(b) {
      se(this.za, a, b);
      se(this.Ac, b, a)
    }, this)
  }, a))
}
function se(a, b, c) {
  a[b] || (a[b] = []);
  ab(a[b], c) || a[b].push(c)
}
var oe = new me;
function te() {
}
te.prototype.Vb = l;
function ue() {
  return ve(we)
}
var we;
function xe() {
}
C(xe, te);
function ve(a) {
  return(a = ye(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function ze(a) {
  var b = {};
  ye(a) && (b[0] = !0, b[1] = !0);
  return b
}
xe.prototype.Sc = l;
function ye(a) {
  if(!a.Sc && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Sc = d
      }catch(e) {
      }
    }
    f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Sc
}
we = new xe;
function Ae(a) {
  this.headers = new Ib;
  this.mb = a || l
}
C(Ae, $c);
Ae.prototype.a = R("goog.net.XhrIo");
var Be = /^https?:?$/i;
q = Ae.prototype;
q.ja = !1;
q.f = l;
q.zc = l;
q.Db = "";
q.de = "";
q.Ab = 0;
q.Bb = "";
q.Kc = !1;
q.gc = !1;
q.Tc = !1;
q.Ea = !1;
q.xc = 0;
q.La = l;
q.Be = "";
q.Kf = !1;
q.send = function(a, b, c, d) {
  this.f && f(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Db = a;
  this.Bb = "";
  this.Ab = 0;
  this.de = b;
  this.Kc = !1;
  this.ja = !0;
  this.f = this.mb ? ve(this.mb) : new ue;
  this.zc = this.mb ? this.mb.Vb || (this.mb.Vb = ze(this.mb)) : we.Vb || (we.Vb = ze(we));
  re(this.f);
  this.f.onreadystatechange = z(this.qe, this);
  try {
    P(this.a, Ce(this, "Opening Xhr")), this.Tc = !0, this.f.open(b, a, !0), this.Tc = !1
  }catch(e) {
    P(this.a, Ce(this, "Error opening Xhr: " + e.message));
    De(this, e);
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
  if(this.Be) {
    this.f.responseType = this.Be
  }
  if("withCredentials" in this.f) {
    this.f.withCredentials = this.Kf
  }
  try {
    if(this.La) {
      ad.clearTimeout(this.La), this.La = l
    }
    if(this.xc > 0) {
      P(this.a, Ce(this, "Will abort after " + this.xc + "ms if incomplete")), this.La = ad.setTimeout(z(this.Gf, this), this.xc)
    }
    P(this.a, Ce(this, "Sending request"));
    this.gc = !0;
    this.f.send(a);
    this.gc = !1
  }catch(h) {
    P(this.a, Ce(this, "Send error: " + h.message)), De(this, h)
  }
};
q.dispatchEvent = function(a) {
  if(this.f) {
    ne(this.f);
    try {
      return Ae.e.dispatchEvent.call(this, a)
    }finally {
      pe()
    }
  }else {
    return Ae.e.dispatchEvent.call(this, a)
  }
};
q.Gf = function() {
  if(typeof ba != "undefined" && this.f) {
    this.Bb = "Timed out after " + this.xc + "ms, aborting", this.Ab = 8, P(this.a, Ce(this, this.Bb)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function De(a, b) {
  a.ja = !1;
  if(a.f) {
    a.Ea = !0, a.f.abort(), a.Ea = !1
  }
  a.Bb = b;
  a.Ab = 5;
  Ee(a);
  Fe(a)
}
function Ee(a) {
  if(!a.Kc) {
    a.Kc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
q.abort = function(a) {
  if(this.f && this.ja) {
    P(this.a, Ce(this, "Aborting")), this.ja = !1, this.Ea = !0, this.f.abort(), this.Ea = !1, this.Ab = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Fe(this)
  }
};
q.b = function() {
  if(this.f) {
    if(this.ja) {
      this.ja = !1, this.Ea = !0, this.f.abort(), this.Ea = !1
    }
    Fe(this, !0)
  }
  Ae.e.b.call(this)
};
q.qe = function() {
  !this.Tc && !this.gc && !this.Ea ? this.rf() : Ge(this)
};
q.rf = function() {
  Ge(this)
};
function Ge(a) {
  if(a.ja && typeof ba != "undefined") {
    if(a.zc[1] && a.qa() == 4 && He(a) == 2) {
      P(a.a, Ce(a, "Local request error detected and ignored"))
    }else {
      if(a.gc && a.qa() == 4) {
        ad.setTimeout(z(a.qe, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.qa() == 4) {
          P(a.a, Ce(a, "Request complete"));
          a.ja = !1;
          var b;
          a: {
            switch(He(a)) {
              case 0:
                b = u(a.Db) ? a.Db.match(ke)[1] || l : a.Db.ha;
                b = !(b ? Be.test(b) : self.location ? Be.test(self.location.protocol) : 1);
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
              P(a.a, "Can not get status: " + d.message), c = ""
            }
            a.Bb = c + " [" + He(a) + "]";
            Ee(a)
          }
          Fe(a)
        }
      }
    }
  }
}
function Fe(a, b) {
  if(a.f) {
    var c = a.f, d = a.zc[0] ? s : l;
    a.f = l;
    a.zc = l;
    if(a.La) {
      ad.clearTimeout(a.La), a.La = l
    }
    b || (ne(c), a.dispatchEvent("ready"), pe());
    var e = oe;
    if(e.P) {
      var g = x(c);
      P(e.a, "Closing XHR : " + g);
      delete e.Ac[g];
      for(var h in e.za) {
        bb(e.za[h], g), e.za[h].length == 0 && delete e.za[h]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(j) {
      Ld(a.a, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
q.$d = function() {
  return!!this.f
};
q.qa = function() {
  return this.f ? this.f.readyState : 0
};
function He(a) {
  try {
    return a.qa() > 2 ? a.f.status : -1
  }catch(b) {
    return Md(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.f && this.qa() == 4 ? this.f.getResponseHeader(a) : i
};
function Ce(a, b) {
  return b + " [" + a.de + " " + a.Db + " " + He(a) + "]"
}
;function Ie(a, b, c) {
  this.ma = b;
  this.U = a;
  this.Gc = c
}
C(Ie, J);
q = Ie.prototype;
q.a = R("cw.net.XHRMaster");
q.wa = -1;
q.Zc = function(a, b, c) {
  this.Gc.__XHRSlave_makeRequest(this.U, a, b, c)
};
q.qa = m("wa");
q.dd = function(a, b) {
  b != Je && Ld(this.a, F(this.U) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Ke(this.ma);
  a: {
    var c = this.ma;
    c.vc = !0;
    try {
      for(var d = !1, e = [], g = 0, h = a.length;g < h;g++) {
        if(c.X) {
          c.a.info(c.p() + " returning from loop because we're disposed.");
          break a
        }
        if(d = Le(c, a[g], e)) {
          break
        }
      }
      e.length && Me(c, e);
      c.vc = !1;
      c.w.length && c.fa();
      d && (Q(c.a, c.p() + " closeSoon is true.  Frames were: " + F(a)), c.d())
    }finally {
      c.vc = !1
    }
  }
};
q.ed = function(a) {
  P(this.a, "ongotheaders_: " + F(a));
  var b = l;
  "Content-Length" in a && (b = md(a["Content-Length"]));
  a = this.ma;
  P(a.a, a.p() + " got Content-Length: " + b);
  a.aa == Ne && (b == l && (Md(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Oe(a, 2E3 + b / 3072 * 1E3))
};
q.fd = function(a) {
  a != 1 && P(this.a, this.ma.p() + "'s XHR's readyState is " + a);
  this.wa = a;
  this.wa >= 2 && Ke(this.ma)
};
q.cd = function() {
  this.ma.d()
};
q.b = function() {
  Ie.e.b.call(this);
  delete V.ga[this.U];
  this.Gc.__XHRSlave_dispose(this.U);
  delete this.Gc
};
function Pe() {
  this.ga = {}
}
C(Pe, J);
q = Pe.prototype;
q.a = R("cw.net.XHRMasterTracker");
q.Gd = function(a, b) {
  var c = "_" + id(), d = new Ie(c, a, b);
  return this.ga[c] = d
};
q.dd = function(a, b, c) {
  var b = cb(b), d = this.ga[a];
  d ? d.dd(b, c) : Ld(this.a, "onframes_: no master for " + F(a))
};
q.ed = function(a, b) {
  var c = this.ga[a];
  c ? c.ed(b) : Ld(this.a, "ongotheaders_: no master for " + F(a))
};
q.fd = function(a, b) {
  var c = this.ga[a];
  c ? c.fd(b) : Ld(this.a, "onreadystatechange_: no master for " + F(a))
};
q.cd = function(a) {
  var b = this.ga[a];
  b ? (delete this.ga[b.U], b.cd()) : Ld(this.a, "oncomplete_: no master for " + F(a))
};
q.b = function() {
  Pe.e.b.call(this);
  for(var a = Sa(this.ga);a.length;) {
    a.pop().d()
  }
  delete this.ga
};
var V = new Pe;
r.__XHRMaster_onframes = z(V.dd, V);
r.__XHRMaster_oncomplete = z(V.cd, V);
r.__XHRMaster_ongotheaders = z(V.ed, V);
r.__XHRMaster_onreadystatechange = z(V.fd, V);
function Qe() {
  Re.info("Waiting for XDRFrames (may take a while)...");
  var a = new bd, b = r.__XDRSetup.done.length, c;
  r.__XDRSetup.done = {push:function() {
    b += 1;
    c = 2 - b;
    c || (Re.info("Got XDRFrames after waiting."), a.ob(l))
  }};
  c = 2 - b;
  c || (Re.info("Already had all XDRFrames."), a.ob(l));
  return a
}
var Re = R("cw.net.waitForXDRFrames");
function Se(a, b, c, d) {
  this.oc = a;
  this.te = b;
  this.sc = c;
  this.De = d;
  (!(this.oc.indexOf("http://") == 0 || this.oc.indexOf("https://") == 0) || !(this.sc.indexOf("http://") == 0 || this.sc.indexOf("https://") == 0)) && f(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.te.location.href;
  le(this.oc, a) || f(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.De.location.href;
  le(this.sc, a) || f(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
var Te = new Yd(";)]}"), Ue = "disconnected_" + Zc++;
function Ve(a, b, c, d) {
  this.C = a;
  this.ve = b;
  this.da = c;
  this.ag = d;
  this.Rb = new od;
  this.Qb = id() + id();
  this.va = new Pb;
  this.Uc = new Rb;
  this.Ub = l;
  if(H) {
    this.Ub = Sc(r, "load", this.wf, !1, this)
  }
}
C(Ve, $c);
q = Ve.prototype;
q.a = R("cw.net.Stream");
q.ee = new Ob(-1, []);
q.fe = new Ob(-1, []);
q.of = 50;
q.nf = 1048576;
q.pd = !1;
q.kd = !1;
q.j = 1;
q.Ke = -1;
q.i = l;
q.v = l;
q.Ib = l;
q.qd = 0;
q.se = 0;
q.Ce = 0;
q.B = function(a, b) {
  a.push("<Stream id=");
  E(this.Qb, a, b);
  a.push(", state=", String(this.j));
  a.push(", primary=");
  E(this.i, a, b);
  a.push(", secondary=");
  E(this.v, a, b);
  a.push(", resetting=");
  E(this.Ib, a, b)
};
function We(a) {
  var b = [-1];
  a.i && b.push(a.i.cb);
  a.v && b.push(a.v.cb);
  return Math.max.apply(Math.max, b)
}
function Xe(a) {
  if(a.j != 1) {
    var b = a.va.F.t() != 0, c = Sb(a.Uc), d = !c.k(a.fe) && !(a.i && c.k(a.i.ab) || a.v && c.k(a.v.ab)), e = We(a);
    if((b = b && e < a.va.Pa) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.i.pb) {
        Q(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.i, c != d.ab)) {
          !d.ia && !d.w.length && Ye(d), d.w.push(new U(c)), d.ab = c
        }
        b && Ze(a.i, a.va, e + 1);
        a.i.fa()
      }else {
        a.v == l ? a.pd ? (Q(a.a, "tryToSend_: creating secondary to send " + g), a.v = $e(a, !1), b && Ze(a.v, a.va, e + 1), a.v.fa()) : (Q(a.a, "tryToSend_: not creating a secondary because Stream might not exist on server"), a.kd = !0) : Q(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
q.wf = function() {
  this.Ub = l;
  if(this.i && this.i.Xa()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.i;
    a.Bc = !0;
    a.d()
  }
  if(this.v && this.v.Xa()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.v, a.Bc = !0, a.d()
  }
};
function af(a, b) {
  var c;
  fa(c) || (c = !0);
  a.j > 2 && f(Error("sendStrings: Can't send strings in state " + a.j));
  if(b.length) {
    if(c) {
      for(c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || f(Error("sendStrings: string #" + c + " has illegal chars: " + F(d)))
      }
    }
    a.va.extend(b);
    Xe(a)
  }
}
function $e(a, b) {
  var c;
  a.da instanceof Se ? c = (Boolean(Number((new bf(document.location)).S.get("httpStreaming", "0"))) ? 2 : 1) == 1 ? Ne : cf : f(Error("Don't support endpoint " + F(a.da)));
  a.Ke += 1;
  c = new df(a.C, a, a.Ke, c, a.da, b);
  Q(a.a, "Created: " + c.p());
  a.Rb.add(c);
  return c
}
function ef(a, b, c) {
  var d = new ff(a.C, a, b, c);
  Q(a.a, "Created: " + d.p() + ", delay=" + b + ", times=" + c);
  a.Rb.add(d);
  return d
}
function gf(a, b) {
  a.Rb.remove(b) || f(Error("transportOffline_: Transport was not removed?"));
  P(a.a, "Offline: " + b.p());
  b.nc ? a.qd += b.nc : a.qd = 0;
  a.qd >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), hf("stream penalty reached limit", !1), a.d());
  if(a.j > 2) {
    a.j == 3 && b.Pe ? (P(a.a, "Disposing because resettingTransport_ is done."), a.d()) : P(a.a, "Not creating a transport because Stream is in state " + a.j)
  }else {
    var c;
    var d;
    c = b instanceof ff;
    if(!c && b.Bc) {
      var e = H ? je ? [0, 1] : [9, 20] : [0, 0];
      c = e[0];
      d = e[1];
      Q(a.a, "getDelayForNextTransport_: " + F({delay:c, times:d}))
    }else {
      d = b.Dd();
      if(b == a.i) {
        if(d) {
          e = ++a.se
        }else {
          if(!c) {
            e = a.se = 0
          }
        }
      }else {
        if(d) {
          e = ++a.Ce
        }else {
          if(!c) {
            e = a.Ce = 0
          }
        }
      }
      if(c || !e) {
        d = c = 0, Q(a.a, "getDelayForNextTransport_: " + F({count:e, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(e, 3), h = Math.floor(Math.random() * 4E3) - 2E3, j = Math.max(0, b.Le - b.sd);
        d = (c = Math.max(0, g + h - j)) ? 1 : 0;
        Q(a.a, "getDelayForNextTransport_: " + F({count:e, base:g, variance:h, oldDuration:j, delay:c, times:d}))
      }
    }
    c = [c, d];
    e = c[0];
    c = c[1];
    if(b == a.i) {
      a.i = l, c ? a.i = ef(a, e, c) : (e = We(a), a.i = $e(a, !0), Ze(a.i, a.va, e + 1)), a.i.fa()
    }else {
      if(b == a.v) {
        a.v = l, c ? (a.v = ef(a, e, c), a.v.fa()) : Xe(a)
      }
    }
  }
}
q.reset = function(a) {
  this.j > 2 && f(Error("reset: Can't send reset in state " + this.j));
  this.j = 3;
  this.i && this.i.pb ? (this.a.info("reset: Sending ResetFrame over existing primary."), jf(this.i, a), this.i.fa()) : (this.i && (P(this.a, "reset: Disposing primary before sending ResetFrame."), this.i.d()), this.v && (P(this.a, "reset: Disposing secondary before sending ResetFrame."), this.v.d()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Ib = $e(this, !1), jf(this.Ib, a), this.Ib.fa());
  hf(a, !0)
};
function kf(a, b, c, d) {
  var e;
  e = a.Uc;
  for(var g = a.of, h = a.nf, j = [], k = !1, n = 0, B = c.length;n < B;n++) {
    var o = c[n], v = o[0], o = o[1];
    if(v == e.$a + 1) {
      e.$a += 1;
      for(j.push(o);;) {
        v = e.$a + 1;
        o = e.ya.get(v, Tb);
        if(o === Tb) {
          break
        }
        j.push(o[0]);
        e.ya.remove(v);
        e.xa -= o[1];
        e.$a = v
      }
    }else {
      if(!(v <= e.$a)) {
        if(g != l && e.ya.t() >= g) {
          k = !0;
          break
        }
        var y = Nb(o);
        if(h != l && e.xa + y > h) {
          k = !0;
          break
        }
        e.ya.set(v, [o, y]);
        e.xa += y
      }
    }
  }
  e.ya.Ga() && e.ya.clear();
  e = [j, k];
  c = e[0];
  e = e[1];
  if(c) {
    for(g = 0;g < c.length;g++) {
      h = a.ve;
      j = wb(c[g]);
      k = j[1];
      if(j[0] == 1) {
        k = h.re.Ic(lf.wb(), k);
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
        h = mf("span", {}, mf("a", {href:j, "class":"ljpost-title-link"}, h), mf("span", {}, "\u00a0"), k);
        nf(h)
      }
      if(a.j == 3 || a.X) {
        return
      }
    }
  }
  d || Xe(a);
  if(!(a.j == 3 || a.X) && e) {
    Ld(b.a, b.p() + "'s peer caused rwin overflow."), b.d()
  }
}
q.start = function() {
  this.j = 2;
  this.i = $e(this, !0);
  Ze(this.i, this.va, l);
  this.i.fa()
};
q.b = function() {
  this.a.info(F(this) + " in disposeInternal.");
  this.j = 4;
  for(var a = this.Rb.I(), b = 0;b < a.length;b++) {
    a[b].d()
  }
  this.dispatchEvent({type:Ue});
  if(H && this.Ub) {
    N(this.Ub), this.Ub = l
  }
  delete this.Rb;
  delete this.i;
  delete this.v;
  delete this.Ib;
  delete this.ve;
  Ve.e.b.call(this)
};
var Ne = 1, cf = 2, of = 3;
function df(a, b, c, d, e, g) {
  this.C = a;
  this.z = b;
  this.lb = c;
  this.aa = d;
  this.da = e;
  this.w = [];
  this.Oa = g;
  this.pb = !this.Xa();
  this.gb = this.aa != Ne;
  this.Te = z(this.Ff, this)
}
C(df, J);
q = df.prototype;
q.a = R("cw.net.ClientTransport");
q.n = l;
q.sd = l;
q.Le = l;
q.pc = l;
q.ia = !1;
q.vc = !1;
q.ab = l;
q.Pc = 0;
q.cb = -1;
q.gd = -1;
q.Pe = !1;
q.Bc = !1;
q.nc = 0;
q.yb = !1;
q.B = function(a) {
  a.push("<ClientTransport #", String(this.lb), ", becomePrimary=", String(this.Oa), ">")
};
q.p = function() {
  return(this.Oa ? "Prim. T#" : "Sec. T#") + this.lb
};
q.Dd = function() {
  return!(!this.yb && this.Pc)
};
q.Xa = function() {
  return this.aa == Ne || this.aa == cf
};
function Me(a, b) {
  hb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  kf(a.z, a, b, !a.gb)
}
function Le(a, b, c) {
  try {
    var d = ge(b);
    a.Pc += 1;
    P(a.a, a.p() + " RECV " + F(d));
    var e;
    a.Pc == 1 && !d.k(Te) && a.Xa() ? (Md(a.a, a.p() + " is closing soon because got bad preamble: " + F(d)), e = !0) : e = !1;
    if(e) {
      return!0
    }
    if(d instanceof Xd) {
      if(!/^([ -~]*)$/.test(d.kb)) {
        return a.yb = !0
      }
      a.gd += 1;
      c.push([a.gd, d.kb])
    }else {
      if(d instanceof U) {
        var g = a.z, h = d.V;
        g.ee = h;
        var j = g.va, k = h.Na, c = !1;
        k > j.Pa && (c = !0);
        for(var n = Qb(j).concat(), d = 0;d < n.length;d++) {
          var B = n[d];
          if(B > k) {
            break
          }
          var o = j.F.m[B][1];
          j.F.remove(B);
          j.xa -= o
        }
        for(d = 0;d < h.Ka.length;d++) {
          var v = h.Ka[d];
          v > j.Pa && (c = !0);
          j.F.O(v) && (o = j.F.m[v][1], j.F.remove(v), j.xa -= o)
        }
        j.F.Ga() && j.F.clear();
        if(c) {
          return Md(a.a, a.p() + " is closing soon because got bad SackFrame"), a.yb = !0
        }
      }else {
        if(d instanceof Zd) {
          a.gd = d.Lb - 1
        }else {
          if(d instanceof ae) {
            a.z.fe = d.Cb
          }else {
            if(d instanceof ce) {
              return Q(a.a, a.p() + " is closing soon because got YouCloseItFrame"), !0
            }else {
              if(d instanceof fe) {
                return a.yb = !0, d.reason == "stream_attach_failure" ? a.nc += 1 : d.reason == "acked_unsent_strings" && (a.nc += 0.5), Q(a.a, a.p() + " is closing soon because got " + F(d)), !0
              }else {
                if(!(d instanceof Yd)) {
                  if(d instanceof be) {
                    var y = a.z, nh = !a.gb;
                    Q(y.a, "Stream is now confirmed to exist at server.");
                    y.pd = !0;
                    if(y.kd && !nh) {
                      y.kd = !1, Xe(y)
                    }
                  }else {
                    if(c.length) {
                      Me(a, c);
                      if(!t(c)) {
                        for(var Ad = c.length - 1;Ad >= 0;Ad--) {
                          delete c[Ad]
                        }
                      }
                      c.length = 0
                    }
                    if(d instanceof de) {
                      var oh = a.z;
                      hf(d.Hb, d.nb);
                      oh.d();
                      return!0
                    }else {
                      f(Error(a.p() + " had unexpected state in framesReceived_."))
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }catch(xf) {
    return xf instanceof S || f(xf), Md(a.a, a.p() + " is closing soon because got InvalidFrame: " + F(b)), a.yb = !0
  }
  return!1
}
q.Ff = function() {
  Md(this.a, this.p() + " timed out due to lack of connection or no data being received.");
  this.d()
};
function pf(a) {
  if(a.pc != l) {
    a.C.G.clearTimeout(a.pc), a.pc = l
  }
}
function Oe(a, b) {
  pf(a);
  b = Math.round(b);
  a.pc = a.C.G.setTimeout(a.Te, b);
  P(a.a, a.p() + "'s receive timeout set to " + b + " ms.")
}
function Ke(a) {
  a.aa != Ne && (a.aa == of || a.aa == cf ? Oe(a, 13500) : f(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.aa)))
}
function Ye(a) {
  var b = new Vd;
  b.lb = a.lb;
  b.ue = 2;
  b.Xd = 2;
  if(!a.z.pd) {
    b.ze = !0
  }
  b.Qb = a.z.Qb;
  b.rd = a.gb;
  if(b.rd) {
    b.oe = 4096
  }
  b.ke = 3E5;
  b.ie = a.gb ? Math.floor(10) : 0;
  b.Me = !1;
  if(a.Oa) {
    b.Ge = l, b.$c = Math.floor((a.gb ? 358E4 : 25E3) / 1E3)
  }
  b.V = Sb(a.z.Uc);
  b.jc = a.z.ee;
  a.w.push(b);
  a.ab = b.V
}
q.fa = function() {
  this.ia && !this.pb && f(Error("flush_: Can't flush more than once to this transport."));
  if(this.vc) {
    Q(this.a, this.p() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.ia;
    this.ia = !0;
    !a && !this.w.length && Ye(this);
    for(a = 0;a < this.w.length;a++) {
      P(this.a, this.p() + " SEND " + F(this.w[a]))
    }
    if(this.Xa()) {
      for(var a = [], b = 0, c = this.w.length;b < c;b++) {
        this.w[b].Q(a), a.push("\n")
      }
      this.w = [];
      a = a.join("");
      b = this.Oa ? this.da.oc : this.da.sc;
      this.n = V.Gd(this, this.Oa ? this.da.te : this.da.De);
      this.sd = this.C.G === ad ? A() : this.C.G.getTime();
      this.n.Zc(b, "POST", a);
      Oe(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.gb ? 0 : this.Oa ? 25E3 : 0))
    }else {
      if(this.aa == of) {
        a = [];
        b = 0;
        for(c = this.w.length;b < c;b++) {
          a.push(this.w[b].N())
        }
        this.w = [];
        this.n ? this.n.yd(a) : (b = this.da, this.n = new Rd(this), this.n.od = b.bg.Gd(this.n), this.sd = this.C.G === ad ? A() : this.C.G.getTime(), this.n.Cd(b.host, b.port), this.n.X || (this.n.yd(a), this.n.X || Oe(this, 8E3)))
      }else {
        f(Error("flush_: Don't know what to do for this transportType: " + this.aa))
      }
    }
  }
};
function Ze(a, b, c) {
  !a.ia && !a.w.length && Ye(a);
  for(var d = Math.max(c, a.cb + 1), e = Qb(b), c = [], g = 0;g < e.length;g++) {
    var h = e[g];
    (d == l || h >= d) && c.push([h, b.F.m[h][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], e = g[0], g = g[1], (a.cb == -1 || a.cb + 1 != e) && a.w.push(new Zd(e)), a.w.push(new Xd(g)), a.cb = e
  }
}
q.b = function() {
  this.a.info(this.p() + " in disposeInternal.");
  df.e.b.call(this);
  this.Le = this.C.G === ad ? A() : this.C.G.getTime();
  this.w = [];
  pf(this);
  this.n && this.n.d();
  var a = this.z;
  this.z = l;
  gf(a, this)
};
function jf(a, b) {
  !a.ia && !a.w.length && Ye(a);
  a.w.push(new de(b, !0));
  a.Pe = !0
}
function ff(a, b, c, d) {
  this.C = a;
  this.z = b;
  this.Jd = c;
  this.Fd = d
}
C(ff, J);
q = ff.prototype;
q.ia = !1;
q.pb = !1;
q.ec = l;
q.ab = l;
q.a = R("cw.net.DoNothingTransport");
function qf(a) {
  a.ec = a.C.G.setTimeout(function() {
    a.ec = l;
    a.Fd--;
    a.Fd ? qf(a) : a.d()
  }, a.Jd)
}
q.fa = function() {
  this.ia && !this.pb && f(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.ia = !0;
  qf(this)
};
q.B = function(a) {
  a.push("<DoNothingTransport delay=", String(this.Jd), ">")
};
q.Xa = p(!1);
q.p = p("Wast. T");
q.Dd = p(!1);
q.b = function() {
  this.a.info(this.p() + " in disposeInternal.");
  ff.e.b.call(this);
  this.ec != l && this.C.G.clearTimeout(this.ec);
  var a = this.z;
  this.z = l;
  gf(a, this)
};
var rf;
function lf() {
  lb.apply(this)
}
C(lf, lb);
function sf() {
  lb.apply(this)
}
C(sf, lb);
rb(lf, {0:{name:"NewPost", Nd:"demosminerva.ljstream_messages.NewPost"}, 1:{name:"title", Sa:9, type:String}, 2:{name:"url", Sa:9, type:String}, 3:{name:"body", Sa:9, type:String}, 4:{name:"num_images", Sa:5, type:Number}, 5:{name:"lang", Sa:9, type:String}});
rb(sf, {0:{name:"SetPreferences", Nd:"demosminerva.ljstream_messages.SetPreferences"}, 1:{name:"include_russian_posts", Sa:8, type:Boolean}});
var tf;
function uf(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function vf(a, b) {
  var c = uf(a), d = gb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < d.length;h++) {
    ab(e, d[h]) || (e.push(d[h]), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
function wf(a, b) {
  var c = uf(a), d = gb(arguments, 1), e;
  e = c;
  for(var g = 0, h = 0;h < e.length;h++) {
    ab(d, e[h]) && (fb(e, h--, 1), g++)
  }
  e = g == d.length;
  a.className = c.join(" ");
  return e
}
;function yf(a, b) {
  this.width = a;
  this.height = b
}
q = yf.prototype;
q.L = function() {
  return new yf(this.width, this.height)
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
var zf = !G || I("9");
!dc && !G || G && I("9") || dc && I("1.9.1");
var Af = G && !I("9");
function Bf(a, b) {
  this.x = fa(a) ? a : 0;
  this.y = fa(b) ? b : 0
}
Bf.prototype.L = function() {
  return new Bf(this.x, this.y)
};
Bf.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function Cf(a) {
  return a ? new Df(Ef(a)) : tf || (tf = new Df)
}
function W(a) {
  return u(a) ? document.getElementById(a) : a
}
function Ff(a, b) {
  Ra(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in Gf ? a.setAttribute(Gf[d], b) : a[d] = b
  })
}
var Gf = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function Hf() {
  var a = If.M.parentWindow || If.M.defaultView || window, b = a.document;
  if(H && !I("500") && !ec) {
    typeof a.innerHeight == "undefined" && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new yf(a.innerWidth, b)
  }
  a = b.compatMode == "CSS1Compat" ? b.documentElement : b.body;
  return new yf(a.clientWidth, a.clientHeight)
}
function mf(a, b, c) {
  return Jf(document, arguments)
}
function Jf(a, b) {
  var c = b[0], d = b[1];
  if(!zf && d && (d.name || d.type)) {
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
    u(d) ? c.className = d : t(d) ? vf.apply(l, [c].concat(d)) : Ff(c, d)
  }
  b.length > 2 && Kf(a, c, b, 2);
  return c
}
function Kf(a, b, c, d) {
  function e(c) {
    c && b.appendChild(u(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    ga(g) && !(ia(g) && g.nodeType > 0) ? Xa(Lf(g) ? db(g) : g, e) : e(g)
  }
}
function Mf(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function Nf(a, b) {
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
function Ef(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
var Of = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Pf = {IMG:" ", BR:"\n"};
function Qf(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, typeof a == "number" && a >= 0) : !1
}
function Rf(a) {
  var b = [];
  Sf(a, b, !1);
  return b.join("")
}
function Sf(a, b, c) {
  if(!(a.nodeName in Of)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Pf) {
        b.push(Pf[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Sf(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Lf(a) {
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
function Df(a) {
  this.M = a || r.document || document
}
q = Df.prototype;
q.xb = Cf;
q.h = function(a) {
  return u(a) ? this.M.getElementById(a) : a
};
q.r = function(a, b, c) {
  return Jf(this.M, arguments)
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
  Kf(Ef(a), a, arguments, 1)
};
q.contains = Nf;
function Tf() {
  this.ye = A()
}
var Uf = new Tf;
Tf.prototype.set = aa("ye");
Tf.prototype.reset = function() {
  this.set(A())
};
Tf.prototype.get = m("ye");
function Vf(a) {
  this.hd = a || "";
  this.Df = Uf
}
Vf.prototype.zf = !0;
Vf.prototype.Bf = !0;
Vf.prototype.Af = !0;
Vf.prototype.Ee = !1;
function Wf(a) {
  return a < 10 ? "0" + a : String(a)
}
function Xf(a, b) {
  var c = (a.He - b) / 1E3, d = c.toFixed(3), e = 0;
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
function Yf(a) {
  Vf.call(this, a)
}
C(Yf, Vf);
Yf.prototype.Ee = !0;
function Zf(a) {
  this.ad = a || 100;
  this.ka = []
}
q = Zf.prototype;
q.Eb = 0;
q.add = function(a) {
  this.ka[this.Eb] = a;
  this.Eb = (this.Eb + 1) % this.ad
};
q.get = function(a) {
  a = $f(this, a);
  return this.ka[a]
};
q.set = function(a, b) {
  a = $f(this, a);
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
function $f(a, b) {
  b >= a.ka.length && f(Error("Out of bounds exception"));
  return a.ka.length < a.ad ? b : (a.Eb + Number(b)) % a.ad
}
;function ag(a, b) {
  this.ra = a || "";
  this.hd = b || "";
  this.eb = [];
  this.rc = new Zf(bg);
  this.uf = z(this.Se, this);
  this.bf = new Yf(this.hd);
  this.af = {};
  if(!0 != this.ae) {
    this.ae = !0;
    var c = Qd(), d = this.uf;
    if(!c.zb) {
      c.zb = []
    }
    c.zb.push(d)
  }
  this.P = cg(this.ra, "enabled") == "1";
  r.setInterval(z(this.xf, this), 7500)
}
var bg = 500;
q = ag.prototype;
q.Oe = "LOGGING";
q.Ze = !1;
q.s = l;
q.wd = !1;
q.ae = !1;
q.Ad = l;
q.Xc = A();
q.Fa = function() {
  this.P && dg(this)
};
q.isEnabled = m("P");
q.Nb = function(a) {
  if(this.P = a) {
    dg(this), this.s && this.yc()
  }
  eg(this, "enabled", a ? "1" : "0")
};
function fg(a) {
  return!!a.s && !a.s.closed
}
q.Ve = function() {
  this.rc.clear();
  fg(this) && this.yc()
};
q.Se = function(a) {
  if(!this.af[a.ge]) {
    var b = this.bf, c;
    switch(a.R.value) {
      case yd.value:
        c = "dbg-sh";
        break;
      case zd.value:
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
    d.push(b.hd, " ");
    if(b.zf) {
      var e = new Date(a.He);
      d.push("[", Wf(e.getFullYear() - 2E3) + Wf(e.getMonth() + 1) + Wf(e.getDate()) + " " + Wf(e.getHours()) + ":" + Wf(e.getMinutes()) + ":" + Wf(e.getSeconds()) + "." + Wf(Math.floor(e.getMilliseconds() / 10)), "] ")
    }
    b.Bf && d.push("[", Fa(Xf(a, b.Df.get())), "s] ");
    b.Af && d.push("[", za(a.ge), "] ");
    d.push('<span class="', c, '">', ya(Fa(za(a.me))));
    b.Ee && a.Nc && d.push("<br>", ya(Fa(a.Mc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.P ? (dg(this), this.rc.add(b), gg(this, b)) : this.rc.add(b);
    this.Ze && a.R.value >= zd.value && this.Nb(!0)
  }
};
function gg(a, b) {
  a.eb.push(b);
  r.clearTimeout(a.Ad);
  A() - a.Xc > 750 ? a.xd() : a.Ad = r.setTimeout(z(a.xd, a), 250)
}
q.xd = function() {
  this.Xc = A();
  if(fg(this)) {
    var a = this.s.document.body, a = a && a.scrollHeight - (a.scrollTop + a.clientHeight) <= 100;
    this.s.document.write(this.eb.join(""));
    this.eb.length = 0;
    a && this.s.scrollTo(0, 1E6)
  }
};
function hg(a) {
  for(var b = a.rc.I(), c = 0;c < b.length;c++) {
    gg(a, b[c])
  }
}
function dg(a) {
  if(!fg(a) && !a.wd) {
    var b = cg(a.ra, "dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), e = Number(b[2]), b = Number(b[3]);
    a.wd = !0;
    a.s = window.open("", G ? a.ra.replace(/[\s\-\.\,]/g, "_") : a.ra, "width=" + e + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    if(!a.s && !a.Cf) {
      alert("Logger popup was blocked"), a.Cf = !0
    }
    a.wd = !1;
    a.s && a.yc()
  }
}
q.bc = p("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
q.yc = function() {
  fg(this) || (this.s.document.open(), gg(this, "<style>" + this.bc() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.Oe + "<br><small>Logger: " + this.ra + "</small></div><hr>"), hg(this))
};
function eg(a, b, c) {
  b += a.ra;
  document.cookie = b + "=" + encodeURIComponent(c) + ";path=/;expires=" + (new Date(A() + 2592E6)).toUTCString()
}
function cg(a, b, c) {
  var a = b + a, b = String(document.cookie), d = b.indexOf(a + "=");
  return d != -1 ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, c == -1 ? b.length : c))) : c || ""
}
q.xf = function() {
  fg(this) && eg(this, "dbg", (this.s.screenX || this.s.screenLeft || 0) + "," + (this.s.screenY || this.s.screenTop || 0) + "," + (this.s.outerWidth || 800) + "," + (this.s.outerHeight || 500))
};
function ig(a, b) {
  if(jg) {
    var c = kg(), d;
    for(d in c) {
      var e = d.replace("fancywindow.sel.", ""), e = R(e), g = e.R, h = window.localStorage.getItem(d).toString();
      (!g || g.toString() != h) && e.ib(Jd(h))
    }
  }
  ag.call(this, a, b)
}
C(ig, ag);
var jg;
a: {
  try {
    jg = !!window.localStorage.getItem;
    break a
  }catch(lg) {
  }
  jg = !1
}
q = ig.prototype;
q.xd = function() {
  this.Xc = A();
  if(fg(this)) {
    for(var a = this.H.h("log"), b = a.scrollHeight - (a.scrollTop + a.offsetHeight) <= 100, c = 0;c < this.eb.length;c++) {
      var d = this.H.r("div", "logmsg");
      d.innerHTML = this.eb[c];
      a.appendChild(d)
    }
    this.eb.length = 0;
    this.Ae();
    if(b) {
      a.scrollTop = a.scrollHeight
    }
  }
};
q.yc = function() {
  if(fg(this)) {
    var a = this.s.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.ra + "</title><style>" + this.bc() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.ra + "</b></p><p>" + this.Oe + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (G ? a.body : this.s).onresize = z(this.Ae, this);
    this.H = new Df(a);
    this.H.h("openbutton").onclick = z(this.sf, this);
    this.H.h("closebutton").onclick = z(this.We, this);
    this.H.h("clearbutton").onclick = z(this.Ve, this);
    this.H.h("exitbutton").onclick = z(this.$e, this);
    hg(this)
  }
};
q.sf = function() {
  var a = this.H.h("optionsarea");
  a.innerHTML = "";
  for(var b = mg(), c = this.H, d = 0;d < b.length;d++) {
    var e = R(b[d]), e = c.r("div", {}, ng(this, "sel" + b[d], e.R ? e.R.name : "INHERIT"), c.r("span", {}, b[d] || "(root)"));
    a.appendChild(e)
  }
  this.H.h("options").style.display = "block";
  return!1
};
function ng(a, b, c) {
  for(var a = a.H, b = a.r("select", {id:b}), d = 0;d < Hd.length;d++) {
    var e = Hd[d], g = a.r("option", {}, e.name);
    if(c == e.name) {
      g.selected = !0
    }
    b.appendChild(g)
  }
  b.appendChild(a.r("option", {selected:c == "INHERIT"}, "INHERIT"));
  return b
}
q.We = function() {
  this.H.h("options").style.display = "none";
  for(var a = mg(), b = this.H, c = 0;c < a.length;c++) {
    var d = R(a[c]), e = b.h("sel" + a[c]), e = e.options[e.selectedIndex].text;
    e == "INHERIT" ? d.ib(l) : d.ib(Jd(e))
  }
  if(jg) {
    a = mg();
    b = kg();
    for(c = 0;c < a.length;c++) {
      d = "fancywindow.sel." + a[c], e = R(a[c]).R, d in b ? e ? window.localStorage.getItem(d) != e.name && window.localStorage.setItem(d, e.name) : window.localStorage.removeItem(d) : e && window.localStorage.setItem(d, e.name)
    }
  }
  return!1
};
q.Ae = function() {
  var a = this.H, b = a.h("log"), c = a.h("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.M.body.offsetHeight - c.offsetHeight - (G ? 4 : 0) + "px"
};
q.$e = function() {
  this.Nb(!1);
  this.s && this.s.close()
};
q.bc = function() {
  return ig.e.bc.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:90% monospace}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function kg() {
  for(var a = {}, b = 0, c = window.localStorage.length;b < c;b++) {
    a[window.localStorage.key(b)] = !0
  }
  return a
}
function mg() {
  var a = Ta(Nd);
  a.sort();
  return a
}
;var og = dc ? "MozUserSelect" : H ? "WebkitUserSelect" : l;
function pg(a) {
  this.Vd = a
}
C(pg, J);
var qg = new K(0, 100), rg = [];
function X(a, b, c, d) {
  t(c) || (rg[0] = c, c = rg);
  for(var e = 0;e < c.length;e++) {
    var g = a, h = M(b, c[e], d || a, !1, a.Vd || a);
    g.c ? g.c[h] = !0 : g.ta ? (g.c = qg.getObject(), g.c[g.ta] = !0, g.ta = l, g.c[h] = !0) : g.ta = h
  }
  return a
}
function sg(a, b, c, d, e, g) {
  if(a.ta || a.c) {
    if(t(c)) {
      for(var h = 0;h < c.length;h++) {
        sg(a, b, c[h], d, e, g)
      }
    }else {
      a: {
        d = d || a;
        g = g || a.Vd || a;
        e = !!e;
        if(b = Uc(b, c, e)) {
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
        if(b = b.key, N(b), a.c) {
          c = a.c, b in c && delete c[b]
        }else {
          if(a.ta == b) {
            a.ta = l
          }
        }
      }
    }
  }
  return a
}
pg.prototype.jd = function() {
  if(this.c) {
    for(var a in this.c) {
      N(a), delete this.c[a]
    }
    Cc(qg, this.c);
    this.c = l
  }else {
    this.ta && N(this.ta)
  }
};
pg.prototype.b = function() {
  pg.e.b.call(this);
  this.jd()
};
pg.prototype.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function tg() {
}
da(tg);
tg.prototype.qf = 0;
tg.Ua();
function ug(a) {
  this.Aa = a || Cf();
  this.Kb = vg
}
C(ug, $c);
ug.prototype.jf = tg.Ua();
var vg = l;
function wg(a, b) {
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
q = ug.prototype;
q.Yd = l;
q.D = !1;
q.o = l;
q.Kb = l;
q.pf = l;
q.J = l;
q.la = l;
q.qb = l;
q.Jf = !1;
q.h = m("o");
function xg(a) {
  return a.Va || (a.Va = new pg(a))
}
q.getParent = m("J");
q.ld = function(a) {
  this.J && this.J != a && f(Error("Method not supported"));
  ug.e.ld.call(this, a)
};
q.xb = m("Aa");
q.r = function() {
  this.o = this.Aa.createElement("div")
};
function yg(a) {
  var b = W("prefs");
  a.D && f(Error("Component already rendered"));
  a.o || a.r();
  b ? b.insertBefore(a.o, l) : a.Aa.M.body.appendChild(a.o);
  (!a.J || a.J.D) && a.Ra()
}
q.Ra = function() {
  this.D = !0;
  zg(this, function(a) {
    !a.D && a.h() && a.Ra()
  })
};
q.tb = function() {
  zg(this, function(a) {
    a.D && a.tb()
  });
  this.Va && this.Va.jd();
  this.D = !1
};
q.b = function() {
  ug.e.b.call(this);
  this.D && this.tb();
  this.Va && (this.Va.d(), delete this.Va);
  zg(this, function(a) {
    a.d()
  });
  !this.Jf && this.o && Mf(this.o);
  this.J = this.pf = this.o = this.qb = this.la = l
};
q.jb = function(a) {
  this.D && f(Error("Component already rendered"));
  this.Kb = a
};
function zg(a, b) {
  a.la && Xa(a.la, b, i)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = u(a) ? a : a.Yd || (a.Yd = ":" + (a.jf.qf++).toString(36)), a = this.qb && c ? (c in this.qb ? this.qb[c] : i) || l : l;
    if(c && a) {
      var d = this.qb;
      c in d && delete d[c];
      bb(this.la, a);
      b && (a.tb(), a.o && Mf(a.o));
      c = a;
      c == l && f(Error("Unable to set parent component"));
      c.J = l;
      ug.e.ld.call(c, l)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
function Ag() {
}
var Bg;
da(Ag);
q = Ag.prototype;
q.Zb = function() {
};
q.r = function(a) {
  return a.xb().r("div", Cg(this, a).join(" "), a.rb)
};
q.sb = function(a, b, c) {
  if(a = a.h ? a.h() : a) {
    if(G && !I("7")) {
      var d = Dg(uf(a), b);
      d.push(b);
      na(c ? vf : wf, a).apply(l, d)
    }else {
      c ? vf(a, b) : wf(a, b)
    }
  }
};
q.Zd = function(a) {
  if(a.Kb == l) {
    var b;
    a: {
      b = a.D ? a.o : a.Aa.M.body;
      var c = Ef(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (b = c.defaultView.getComputedStyle(b, l))) {
        b = b.direction || b.getPropertyValue("direction");
        break a
      }
      b = ""
    }
    a.Kb = "rtl" == (b || ((a.D ? a.o : a.Aa.M.body).currentStyle ? (a.D ? a.o : a.Aa.M.body).currentStyle.direction : l) || (a.D ? a.o : a.Aa.M.body).style.direction)
  }
  a.Kb && this.jb(a.h(), !0);
  a.isEnabled() && this.Ob(a, a.Ma)
};
q.tc = function(a, b) {
  var c = !b, d = G || cc ? a.getElementsByTagName("*") : l;
  if(og) {
    if(c = c ? "none" : "", a.style[og] = c, d) {
      for(var e = 0, g;g = d[e];e++) {
        g.style[og] = c
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
q.be = function(a) {
  var b;
  return a.$ & 32 && (b = a.Da()) ? Qf(b) : !1
};
q.Ob = function(a, b) {
  var c;
  if(a.$ & 32 && (c = a.Da())) {
    if(!b && a.j & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.j & 32 && a.Pd()
    }
    if(Qf(c) != b) {
      b ? c.tabIndex = 0 : c.removeAttribute("tabIndex")
    }
  }
};
q.nd = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.K = function(a, b, c) {
  var d = a.h();
  if(d) {
    var e = Eg(this, b);
    e && this.sb(a, e, c);
    this.Sb(d, b, c)
  }
};
q.Sb = function(a, b, c) {
  Bg || (Bg = {1:"disabled", 4:"pressed", 8:"selected", 16:"checked", 64:"expanded"});
  (b = Bg[b]) && a.setAttribute("aria-" + b, c)
};
q.Da = function(a) {
  return a.h()
};
q.oa = p("goog-control");
function Cg(a, b) {
  var c = a.oa(), d = [c], e = a.oa();
  e != c && d.push(e);
  c = b.j;
  for(e = [];c;) {
    var g = c & -c;
    e.push(Eg(a, g));
    c &= ~g
  }
  d.push.apply(d, e);
  (c = b.Y) && d.push.apply(d, c);
  G && !I("7") && d.push.apply(d, Dg(d));
  return d
}
function Dg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Xa([], function(d) {
    $a(d, na(ab, a)) && (!b || ab(d, b)) && c.push(d.join("_"))
  });
  return c
}
function Eg(a, b) {
  if(!a.Bd) {
    var c = a.oa();
    a.Bd = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Bd[b]
}
;function Fg(a, b) {
  a || f(Error("Invalid class name " + a));
  w(b) || f(Error("Invalid decorator function " + b))
}
var Gg = {};
function Hg(a, b, c, d, e) {
  if(!G && (!H || !I("525"))) {
    return!0
  }
  if(gc && e) {
    return Ig(a)
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
      return!(G && I("9"));
    case 27:
      return!H
  }
  return Ig(a)
}
function Ig(a) {
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
;function Jg(a, b) {
  a && Kg(this, a, b)
}
C(Jg, $c);
q = Jg.prototype;
q.o = l;
q.hc = l;
q.Vc = l;
q.ic = l;
q.ua = -1;
q.sa = -1;
var Lg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Mg = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Ng = {61:187, 
59:186}, Og = G || H && I("525");
q = Jg.prototype;
q.ef = function(a) {
  if(H && (this.ua == 17 && !a.ctrlKey || this.ua == 18 && !a.altKey)) {
    this.sa = this.ua = -1
  }
  Og && !Hg(a.keyCode, this.ua, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.sa = dc && a.keyCode in Ng ? Ng[a.keyCode] : a.keyCode
};
q.gf = function() {
  this.sa = this.ua = -1
};
q.handleEvent = function(a) {
  var b = a.ea, c, d;
  G && a.type == "keypress" ? (c = this.sa, d = c != 13 && c != 27 ? b.keyCode : 0) : H && a.type == "keypress" ? (c = this.sa, d = b.charCode >= 0 && b.charCode < 63232 && Ig(c) ? b.charCode : 0) : cc ? (c = this.sa, d = Ig(c) ? b.keyCode : 0) : (c = b.keyCode || this.sa, d = b.charCode || 0, gc && d == 63 && !c && (c = 191));
  var e = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in Lg ? e = Lg[c] : c == 25 && a.shiftKey && (e = 9) : g && g in Mg && (e = Mg[g]);
  a = e == this.ua;
  this.ua = e;
  b = new Pg(e, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.d()
  }
};
q.h = m("o");
function Kg(a, b, c) {
  a.ic && a.detach();
  a.o = b;
  a.hc = M(a.o, "keypress", a, c);
  a.Vc = M(a.o, "keydown", a.ef, c, a);
  a.ic = M(a.o, "keyup", a.gf, c, a)
}
q.detach = function() {
  if(this.hc) {
    N(this.hc), N(this.Vc), N(this.ic), this.ic = this.Vc = this.hc = l
  }
  this.o = l;
  this.sa = this.ua = -1
};
q.b = function() {
  Jg.e.b.call(this);
  this.detach()
};
function Pg(a, b, c, d) {
  d && this.Fa(d, i);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(Pg, vc);
function Y(a, b, c) {
  ug.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = x(b);
      if(d = Gg[d]) {
        break
      }
      b = b.e ? b.e.constructor : l
    }
    b = d ? w(d.Ua) ? d.Ua() : new d : l
  }
  this.u = b;
  this.rb = a
}
C(Y, ug);
q = Y.prototype;
q.rb = l;
q.j = 0;
q.$ = 39;
q.zd = 255;
q.Ef = 0;
q.Ma = !0;
q.Y = l;
q.Rc = !0;
q.Dc = !1;
q.Da = function() {
  return this.u.Da(this)
};
function Qg(a, b) {
  if(b) {
    a.Y ? ab(a.Y, b) || a.Y.push(b) : a.Y = [b], a.u.sb(a, b, !0)
  }
}
q.sb = function(a, b) {
  if(b) {
    Qg(this, a)
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
  this.o = a;
  var b = this.u.Zb();
  if(b) {
    a.setAttribute("role", b), a.$f = b
  }
  this.Dc || this.u.tc(a, !1);
  this.Ma || this.u.nd(a, !1)
};
q.Ra = function() {
  Y.e.Ra.call(this);
  this.u.Zd(this);
  if(this.$ & -2 && (this.Rc && Rg(this, !0), this.$ & 32)) {
    var a = this.Da();
    if(a) {
      var b = this.Za || (this.Za = new Jg);
      Kg(b, a);
      X(X(X(xg(this), b, "key", this.ff), a, "focus", this.df), a, "blur", this.Pd)
    }
  }
};
function Rg(a, b) {
  var c = xg(a), d = a.h();
  b ? (X(X(X(X(c, d, "mouseover", a.Td), d, "mousedown", a.Rd), d, "mouseup", a.Ud), d, "mouseout", a.Sd), G && X(c, d, "dblclick", a.Qd)) : (sg(sg(sg(sg(c, d, "mouseover", a.Td), d, "mousedown", a.Rd), d, "mouseup", a.Ud), d, "mouseout", a.Sd), G && sg(c, d, "dblclick", a.Qd))
}
q.tb = function() {
  Y.e.tb.call(this);
  this.Za && this.Za.detach();
  this.Ma && this.isEnabled() && this.u.Ob(this, !1)
};
q.b = function() {
  Y.e.b.call(this);
  this.Za && (this.Za.d(), delete this.Za);
  delete this.u;
  this.Y = this.rb = l
};
function Sg(a) {
  a = a.rb;
  if(!a) {
    return""
  }
  if(!u(a)) {
    if(t(a)) {
      a = Ya(a, Rf).join("")
    }else {
      if(Af && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        Sf(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      G || (a = a.replace(/ +/g, " "));
      a != " " && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
q.jb = function(a) {
  Y.e.jb.call(this, a);
  var b = this.h();
  b && this.u.jb(b, a)
};
q.tc = function(a) {
  this.Dc = a;
  var b = this.h();
  b && this.u.tc(b, a)
};
q.nd = function(a, b) {
  if(b || this.Ma != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.h();
    c && this.u.nd(c, a);
    this.isEnabled() && this.u.Ob(this, a);
    this.Ma = a;
    return!0
  }
  return!1
};
q.isEnabled = function() {
  return!(this.j & 1)
};
q.Nb = function(a) {
  var b = this.getParent();
  if((!b || typeof b.isEnabled != "function" || b.isEnabled()) && Tg(this, 1, !a)) {
    a || (this.setActive(!1), Ug(this, !1)), this.Ma && this.u.Ob(this, a), this.K(1, !a)
  }
};
function Ug(a, b) {
  Tg(a, 2, b) && a.K(2, b)
}
q.$d = function() {
  return!!(this.j & 4)
};
q.setActive = function(a) {
  Tg(this, 4, a) && this.K(4, a)
};
q.K = function(a, b) {
  if(this.$ & a && b != !!(this.j & a)) {
    this.u.K(this, a, b), this.j = b ? this.j | a : this.j & ~a
  }
};
function Z(a, b) {
  return!!(a.zd & b) && !!(a.$ & b)
}
function Tg(a, b, c) {
  return!!(a.$ & b) && !!(a.j & b) != c && (!(a.Ef & b) || a.dispatchEvent(wg(b, c))) && !a.X
}
q.Td = function(a) {
  (!a.relatedTarget || !Nf(this.h(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Z(this, 2) && Ug(this, !0)
};
q.Sd = function(a) {
  if((!a.relatedTarget || !Nf(this.h(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    Z(this, 4) && this.setActive(!1), Z(this, 2) && Ug(this, !1)
  }
};
q.Rd = function(a) {
  if(this.isEnabled() && (Z(this, 2) && Ug(this, !0), xc(a) && (!H || !gc || !a.ctrlKey))) {
    Z(this, 4) && this.setActive(!0), this.u.be(this) && this.Da().focus()
  }
  !this.Dc && xc(a) && (!H || !gc || !a.ctrlKey) && a.preventDefault()
};
q.Ud = function(a) {
  this.isEnabled() && (Z(this, 2) && Ug(this, !0), this.$d() && this.Gb(a) && Z(this, 4) && this.setActive(!1))
};
q.Qd = function(a) {
  this.isEnabled() && this.Gb(a)
};
q.Gb = function(a) {
  if(Z(this, 16)) {
    var b = !(this.j & 16);
    Tg(this, 16, b) && this.K(16, b)
  }
  Z(this, 8) && Tg(this, 8, !0) && this.K(8, !0);
  Z(this, 64) && (b = !(this.j & 64), Tg(this, 64, b) && this.K(64, b));
  b = new tc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, e = 0;d = c[e];e++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
q.df = function() {
  Z(this, 32) && Tg(this, 32, !0) && this.K(32, !0)
};
q.Pd = function() {
  Z(this, 4) && this.setActive(!1);
  Z(this, 32) && Tg(this, 32, !1) && this.K(32, !1)
};
q.ff = function(a) {
  return this.Ma && this.isEnabled() && this.Qc(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
q.Qc = function(a) {
  return a.keyCode == 13 && this.Gb(a)
};
w(Y) || f(Error("Invalid component class " + Y));
w(Ag) || f(Error("Invalid renderer class " + Ag));
var Vg = x(Y);
Gg[Vg] = Ag;
Fg("goog-control", function() {
  return new Y(l)
});
function Wg() {
}
C(Wg, Ag);
da(Wg);
q = Wg.prototype;
q.Zb = p("button");
q.Sb = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : Wg.e.Sb.call(this, a, b, c)
};
q.r = function(a) {
  var b = Wg.e.r.call(this, a), c = a.cc();
  c && this.md(b, c);
  (c = a.dc()) && this.uc(b, c);
  a.$ & 16 && this.Sb(b, 16, !1);
  return b
};
q.dc = s;
q.uc = s;
q.cc = function(a) {
  return a.title
};
q.md = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
q.oa = p("goog-button");
function Xg() {
}
C(Xg, Wg);
da(Xg);
q = Xg.prototype;
q.Zb = function() {
};
q.r = function(a) {
  a.D && !1 != a.Rc && Rg(a, !1);
  a.Rc = !1;
  a.zd &= -256;
  a.D && a.j & 32 && f(Error("Component already rendered"));
  a.j & 32 && a.K(32, !1);
  a.$ &= -33;
  return a.xb().r("button", {"class":Cg(this, a).join(" "), disabled:!a.isEnabled(), title:a.cc() || "", value:a.dc() || ""}, Sg(a) || "")
};
q.Zd = function(a) {
  X(xg(a), a.h(), "click", a.Gb)
};
q.tc = s;
q.jb = s;
q.be = function(a) {
  return a.isEnabled()
};
q.Ob = s;
q.K = function(a, b, c) {
  Xg.e.K.call(this, a, b, c);
  if((a = a.h()) && b == 1) {
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
function Yg(a, b, c) {
  Y.call(this, a, b || Xg.Ua(), c)
}
C(Yg, Y);
q = Yg.prototype;
q.dc = m("Ne");
q.uc = function(a) {
  this.Ne = a;
  this.u.uc(this.h(), a)
};
q.cc = m("Ie");
q.md = function(a) {
  this.Ie = a;
  this.u.md(this.h(), a)
};
q.b = function() {
  Yg.e.b.call(this);
  delete this.Ne;
  delete this.Ie
};
q.Ra = function() {
  Yg.e.Ra.call(this);
  if(this.$ & 32) {
    var a = this.Da();
    a && X(xg(this), a, "keyup", this.Qc)
  }
};
q.Qc = function(a) {
  return a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup" ? this.Gb(a) : a.keyCode == 32
};
Fg("goog-button", function() {
  return new Yg(l)
});
function Zg() {
}
C(Zg, Wg);
da(Zg);
Zg.prototype.r = function(a) {
  var b = {"class":"goog-inline-block " + Cg(this, a).join(" "), title:a.cc() || ""};
  return a.xb().r("div", b, $g(this, a.rb, a.xb()))
};
Zg.prototype.Zb = p("button");
function $g(a, b, c) {
  return c.r("div", "goog-inline-block " + (a.oa() + "-outer-box"), c.r("div", "goog-inline-block " + (a.oa() + "-inner-box"), b))
}
Zg.prototype.oa = p("goog-custom-button");
function ah(a, b, c) {
  Yg.call(this, a, b || Zg.Ua(), c)
}
C(ah, Yg);
Fg("goog-custom-button", function() {
  return new ah(l)
});
function bf(a, b) {
  var c;
  a instanceof bf ? (this.hb(b == l ? a.Z : b), bh(this, a.ha), ch(this, a.Tb), dh(this, a.Ba), eh(this, a.fb), fh(this, a.Ha), gh(this, a.S.L()), hh(this, a.vb)) : a && (c = String(a).match(ke)) ? (this.hb(!!b), bh(this, c[1] || "", !0), ch(this, c[2] || "", !0), dh(this, c[3] || "", !0), eh(this, c[4]), fh(this, c[5] || "", !0), gh(this, c[6] || "", !0), hh(this, c[7] || "", !0)) : (this.hb(!!b), this.S = new ih(l, this, this.Z))
}
q = bf.prototype;
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
  this.ha && a.push(jh(this.ha, kh), ":");
  this.Ba && (a.push("//"), this.Tb && a.push(jh(this.Tb, kh), "@"), a.push(u(this.Ba) ? encodeURIComponent(this.Ba) : l), this.fb != l && a.push(":", String(this.fb)));
  this.Ha && (this.Ba && this.Ha.charAt(0) != "/" && a.push("/"), a.push(jh(this.Ha, this.Ha.charAt(0) == "/" ? lh : mh)));
  var b = String(this.S);
  b && a.push("?", b);
  this.vb && a.push("#", jh(this.vb, ph));
  return this.W = a.join("")
};
q.L = function() {
  var a = this.ha, b = this.Tb, c = this.Ba, d = this.fb, e = this.Ha, g = this.S.L(), h = this.vb, j = new bf(l, this.Z);
  a && bh(j, a);
  b && ch(j, b);
  c && dh(j, c);
  d && eh(j, d);
  e && fh(j, e);
  g && gh(j, g);
  h && hh(j, h);
  return j
};
function bh(a, b, c) {
  qh(a);
  delete a.W;
  a.ha = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.ha) {
    a.ha = a.ha.replace(/:$/, "")
  }
}
function ch(a, b, c) {
  qh(a);
  delete a.W;
  a.Tb = c ? b ? decodeURIComponent(b) : "" : b
}
function dh(a, b, c) {
  qh(a);
  delete a.W;
  a.Ba = c ? b ? decodeURIComponent(b) : "" : b
}
function eh(a, b) {
  qh(a);
  delete a.W;
  b ? (b = Number(b), (isNaN(b) || b < 0) && f(Error("Bad port number " + b)), a.fb = b) : a.fb = l
}
function fh(a, b, c) {
  qh(a);
  delete a.W;
  a.Ha = c ? b ? decodeURIComponent(b) : "" : b
}
function gh(a, b, c) {
  qh(a);
  delete a.W;
  b instanceof ih ? (a.S = b, a.S.ud = a, a.S.hb(a.Z)) : (c || (b = jh(b, rh)), a.S = new ih(b, a, a.Z))
}
function hh(a, b, c) {
  qh(a);
  delete a.W;
  a.vb = c ? b ? decodeURIComponent(b) : "" : b
}
function qh(a) {
  a.lf && f(Error("Tried to modify a read-only Uri"))
}
q.hb = function(a) {
  this.Z = a;
  this.S && this.S.hb(a);
  return this
};
var sh = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function jh(a, b) {
  var c = l;
  u(a) && (c = a, sh.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, th)));
  return c
}
function th(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var kh = /[#\/\?@]/g, mh = /[\#\?:]/g, lh = /[\#\?]/g, rh = /[\#\?@]/g, ph = /#/g;
function ih(a, b, c) {
  this.ca = a || l;
  this.ud = b || l;
  this.Z = !!c
}
function uh(a) {
  if(!a.l && (a.l = new Ib, a.ca)) {
    for(var b = a.ca.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = l, g = l;
      d >= 0 ? (e = b[c].substring(0, d), g = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = vh(a, e);
      a.add(e, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
q = ih.prototype;
q.l = l;
q.g = l;
q.t = function() {
  uh(this);
  return this.g
};
q.add = function(a, b) {
  uh(this);
  wh(this);
  a = vh(this, a);
  if(this.O(a)) {
    var c = this.l.get(a);
    t(c) ? c.push(b) : this.l.set(a, [c, b])
  }else {
    this.l.set(a, b)
  }
  this.g++;
  return this
};
q.remove = function(a) {
  uh(this);
  a = vh(this, a);
  if(this.l.O(a)) {
    wh(this);
    var b = this.l.get(a);
    t(b) ? this.g -= b.length : this.g--;
    return this.l.remove(a)
  }
  return!1
};
q.clear = function() {
  wh(this);
  this.l && this.l.clear();
  this.g = 0
};
q.Ga = function() {
  uh(this);
  return this.g == 0
};
q.O = function(a) {
  uh(this);
  a = vh(this, a);
  return this.l.O(a)
};
q.Yb = function(a) {
  var b = this.I();
  return ab(b, a)
};
q.pa = function() {
  uh(this);
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
  uh(this);
  if(a) {
    if(a = vh(this, a), this.O(a)) {
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
  uh(this);
  wh(this);
  a = vh(this, a);
  if(this.O(a)) {
    var c = this.l.get(a);
    t(c) ? this.g -= c.length : this.g--
  }
  this.l.set(a, b);
  this.g++;
  return this
};
q.get = function(a, b) {
  uh(this);
  a = vh(this, a);
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
function wh(a) {
  delete a.Hc;
  delete a.ca;
  a.ud && delete a.ud.W
}
q.L = function() {
  var a = new ih;
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
function vh(a, b) {
  var c = String(b);
  a.Z && (c = c.toLowerCase());
  return c
}
q.hb = function(a) {
  a && !this.Z && (uh(this), wh(this), Gb(this.l, function(a, c) {
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
R("goog.ui.media.FlashObject");
r.__loadFlashObject_callbacks = {};
var Je = 1;
function xh(a, b) {
  this.Lf = a;
  this.je = b
}
xh.prototype.Wc = 0;
xh.prototype.lc = 0;
xh.prototype.Oc = !1;
function yh(a) {
  var b = [];
  if(a.Oc) {
    return[b, 2]
  }
  var c = a.Wc, d = a.Lf.responseText;
  for(a.Wc = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var e = d.substr(a.lc, c - a.lc), e = e.replace(/\r$/, "");
    if(e.length > a.je) {
      return a.Oc = !0, [b, 2]
    }
    b.push(e);
    a.lc = c += 1
  }
  return a.Wc - a.lc - 1 > a.je ? (a.Oc = !0, [b, 2]) : [b, Je]
}
;var zh = !(G || H && !I("420+"));
function Ah(a, b) {
  this.Je = a;
  this.U = b
}
C(Ah, J);
q = Ah.prototype;
q.n = l;
q.wa = -1;
q.Od = !1;
q.Wd = ["Content-Length", "Server", "Date", "Expires", "Keep-Alive", "Content-Type", "Transfer-Encoding", "Cache-Control"];
function Bh(a) {
  var b = yh(a.Id), c = b[0], b = b[1], d = r.parent;
  d ? (d.__XHRMaster_onframes(a.U, c, b), b != Je && a.d()) : a.d()
}
q.hf = function() {
  Bh(this);
  if(!this.X) {
    var a = r.parent;
    a && a.__XHRMaster_oncomplete(this.U);
    this.d()
  }
};
q.vf = function() {
  var a = r.parent;
  if(a) {
    this.wa = this.n.qa();
    if(this.wa >= 2 && !this.Od) {
      for(var b = new Ib, c = this.Wd.length;c--;) {
        var d = this.Wd[c];
        try {
          b.set(d, this.n.f.getResponseHeader(d))
        }catch(e) {
        }
      }
      if(b.t() && (this.Od = !0, a.__XHRMaster_ongotheaders(this.U, Mb(b)), this.X)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.U, this.wa);
    zh && this.wa == 3 && Bh(this)
  }else {
    this.d()
  }
};
q.Zc = function(a, b, c) {
  this.n = new Ae;
  M(this.n, "readystatechange", z(this.vf, this));
  M(this.n, "complete", z(this.hf, this));
  this.n.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.Id = new xh(this.n.f, 1048576)
};
q.b = function() {
  Ah.e.b.call(this);
  delete this.Id;
  this.n && this.n.d();
  delete this.Je.Pb[this.U];
  delete this.Je
};
function Ch() {
  this.Pb = {}
}
C(Ch, J);
Ch.prototype.mf = function(a, b, c, d) {
  var e = new Ah(this, a);
  this.Pb[a] = e;
  e.Zc(b, c, d)
};
Ch.prototype.Ye = function(a) {
  (a = this.Pb[a]) && a.d()
};
Ch.prototype.b = function() {
  Ch.e.b.call(this);
  for(var a = Sa(this.Pb);a.length;) {
    a.pop().d()
  }
  delete this.Pb
};
var Dh = new Ch;
r.__XHRSlave_makeRequest = z(Dh.mf, Dh);
r.__XHRSlave_dispose = z(Dh.Ye, Dh);
function Eh() {
  this.Uf = "demosminerva_site_uaid";
  this.Vf = "demosminerva_site_uaid_secure"
}
function Fh() {
  new bf(document.location);
  var a = Qe();
  ed(a, function() {
    var a = W("xdrframe-1").contentWindow || (H ? W("xdrframe-1").document || W("xdrframe-1").contentWindow.document : W("xdrframe-1").contentDocument || W("xdrframe-1").contentWindow.document).parentWindow || (H ? W("xdrframe-1").document || W("xdrframe-1").contentWindow.document : W("xdrframe-1").contentDocument || W("xdrframe-1").contentWindow.document).defaultView, c = W("xdrframe-2").contentWindow || (H ? W("xdrframe-2").document || W("xdrframe-2").contentWindow.document : W("xdrframe-2").contentDocument || 
    W("xdrframe-2").contentWindow.document).parentWindow || (H ? W("xdrframe-2").document || W("xdrframe-2").contentWindow.document : W("xdrframe-2").contentDocument || W("xdrframe-2").contentWindow.document).defaultView;
    a || f(Error("could not get primaryWindow xdrframe"));
    c || f(Error("could not get secondaryWindow xdrframe"));
    var d = new bf(r.__XDRSetup.baseurl1);
    fh(d, "/httpface/");
    var e = new bf(r.__XDRSetup.baseurl2);
    fh(e, "/httpface/");
    return new Se(d.toString(), a, e.toString(), c)
  });
  return a
}
;var Gh = R("ljstream.logger");
window.onerror = function(a, b, c) {
  Ld(Gh, "window.onerror: message: " + F(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Hh() {
  this.re = new ub
}
function hf(a, b) {
  Gh.info("streamReset: reasonString=" + F(a) + ", applicationLevel=" + b);
  Ih("Disconnected from server.  Try reloading this page.");
  $ = l
}
function Jh(a) {
  Gh.info("Sending preferences to server");
  var b;
  b = new sf;
  b.q[1] = W("include_russian_posts").checked;
  b = a.re.Mb(b);
  af(a.z, [(new xb).Mb([2, b])])
}
Hh.prototype.reset = function(a) {
  Gh.info("resetting with reason: " + a);
  this.z.reset(a)
};
var $ = l, Kh = new hd(r.window);
function Ih(a) {
  a = mf("span", {"class":"important-message"}, a);
  nf(a)
}
function Lh() {
  $ && ($.reset("idle timeout fired"), $ = l, Ih("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var Mh = l;
function Nh() {
  Mh != l && Kh.G.clearTimeout(Mh);
  $ && (Mh = Kh.G.setTimeout(Lh, 6E5))
}
M(window, ["click", "focus", "keydown", "keypress"], Nh, !0);
var If = new Df, Oh = 0;
function nf(a) {
  a = mf("div", {"class":"row-" + (Oh % 2 == 0 ? "even" : "odd")}, mf("nobr", {}, a));
  W("ljstream-container-inner").appendChild(a);
  Oh += 1;
  var b;
  if(b = rf) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !H && d.compatMode == "CSS1Compat" ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new Bf(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = Hf().height;
    b = !(a + b <= c + d)
  }
  if(b) {
    a = Hf().height, window.scrollBy(0, Math.round(a / 2) + 80)
  }
}
function Ph() {
  var a = new Eh;
  $ = new Hh;
  Nh();
  ed(Fh(), function(b) {
    $ || f(Error("lastProto falsy?"));
    b = new Ve(Kh, $, b, a);
    $.z = b;
    var c = $;
    af(c.z, ["subprotocol:ljstream"]);
    Jh(c);
    b.start();
    return l
  })
}
function Qh() {
  M(r, "load", function() {
    window.scrollTo(0, 0)
  });
  M(W("include_russian_posts"), "click", function() {
    Jh($)
  });
  rf = !0;
  M(W("automatic_scroll"), "click", function(a) {
    rf = a.target.checked
  });
  var a = new ah("Clear posts");
  Qg(a, "clear-posts-button");
  yg(a);
  M(a, "action", function() {
    W("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = W("ljstream-container");
  a.style.marginTop = W("demo-header").offsetHeight + "px";
  W("demo-header").style.width = "9000px";
  var b = mf("div", {id:"ljstream-container-inner"});
  a.appendChild(b)
}
function Rh() {
  Qd().ib(Gd);
  if((new bf(document.location)).S.get("logging") == "1") {
    var a = new ig("main");
    a.Nb(!0);
    a.Fa()
  }
  Gh.info("Logger works.");
  Qh();
  Ph()
}
var Sh = "__ljstream_init".split("."), Th = r;
!(Sh[0] in Th) && Th.execScript && Th.execScript("var " + Sh[0]);
for(var Uh;Sh.length && (Uh = Sh.shift());) {
  !Sh.length && fa(Rh) ? Th[Uh] = Rh : Th = Th[Uh] ? Th[Uh] : Th[Uh] = {}
}
;})();
