(function(){function e(a) {
  throw a;
}
var h = void 0, k = null;
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
var q, ba = ba || {}, s = this;
function ca(a) {
  for(var a = a.split("."), b = s, c;c = a.shift();) {
    if(b[c] != k) {
      b = b[c]
    }else {
      return k
    }
  }
  return b
}
function t() {
}
function da(a) {
  a.Ua = function() {
    return a.sf || (a.sf = new a)
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
function u(a) {
  return a !== h
}
function v(a) {
  return ea(a) == "array"
}
function fa(a) {
  var b = ea(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function ga(a) {
  return ha(a) && typeof a.getFullYear == "function"
}
function w(a) {
  return typeof a == "string"
}
function x(a) {
  return ea(a) == "function"
}
function ha(a) {
  a = ea(a);
  return a == "object" || a == "array" || a == "function"
}
function y(a) {
  return a[ia] || (a[ia] = ++ja)
}
var ia = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), ja = 0;
function ka(a) {
  return a.call.apply(a.bind, arguments)
}
function la(a, b) {
  var c = b || s;
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
function A() {
  A = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ka : la;
  return A.apply(k, arguments)
}
function ma(a) {
  var b = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = Array.prototype.slice.call(arguments);
    c.unshift.apply(c, b);
    return a.apply(this, c)
  }
}
var C = Date.now || function() {
  return+new Date
};
function D(a, b) {
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
var na, oa, pa, qa;
na = RegExp("(?:\\b[a-z\\d.-]+://[^<>\\s]+|\\b(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:[;/][^#?<>\\s]*)?(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w)|(?:mailto:)?[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?:(?:[^\\s!@#$%^&*()_=+[\\]{}\\\\|;:'\",.<>/?]+)\\.)+(?:ac|ad|aero|ae|af|ag|ai|al|am|an|ao|aq|arpa|ar|asia|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|biz|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|cat|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|coop|com|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|info|int|in|io|iq|ir|is|it|je|jm|jobs|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mobi|mo|mp|mq|mr|ms|mt|museum|mu|mv|mw|mx|my|mz|name|na|nc|net|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pro|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tp|travel|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|xn--0zwm56d|xn--11b5bs3a9aj6g|xn--80akhbyknj4f|xn--9t4b11yi5a|xn--deba0ad|xn--g6w251d|xn--hgbk6aj7f53bba|xn--hlcj6aya9esc7a|xn--jxalpdlp|xn--kgbechtv|xn--zckzah|ye|yt|yu|za|zm|zw)|(?:(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])\\.){3}(?:[0-9]|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5]))(?:\\?[^#<>\\s]*)?(?:#[^<>\\s]*)?(?!\\w))", 
"ig");
oa = /^[a-z\d.-]+:\/\//i;
pa = {"'":"`", ">":"<", ")":"(", "]":"[", "}":"{", "\u00bb":"\u00ab", "\u203a":"\u2039"};
qa = {ob:function(a, b) {
  return b ? '<a href="' + b + '" title="' + b + '">' + a + "</a>" : a
}, Be:/(?:[!?.,:;'"]|(?:&|&amp;)(?:lt|gt|quot|apos|raquo|laquo|rsaquo|lsaquo);)$/};
function ra(a) {
  var b;
  b = b || {};
  var c = [], d, f;
  for(f in qa) {
    u(b[f]) || (b[f] = qa[f])
  }
  for(;f = na.exec(a);) {
    f = f[0];
    var g = na.lastIndex, i = g - f.length;
    if(!/[\/:]/.test(a.charAt(i - 1))) {
      do {
        var j = f, n = f.substr(-1), l = pa[n];
        if(l && (l = f.match(RegExp("\\" + l + "(?!$)", "g")), n = f.match(RegExp("\\" + n, "g")), (l ? l.length : 0) < (n ? n.length : 0))) {
          f = f.substr(0, f.length - 1), g--
        }
        b.Be && (f = f.replace(b.Be, function(a) {
          g -= a.length;
          return""
        }))
      }while(f.length && f !== j);
      j = f;
      oa.test(j) || (j = (j.indexOf("@") !== -1 ? !j.indexOf("mailto:") ? "" : "mailto:" : !j.indexOf("irc.") ? "irc://" : !j.indexOf("ftp.") ? "ftp://" : "http://") + j);
      d != i && (c.push([a.slice(d, i)]), d = g);
      c.push([f, j])
    }
  }
  c.push([a.substr(d)]);
  d = "";
  for(f = 0;f < c.length;f++) {
    d += b.ob.apply(s, c[f])
  }
  return d || a
}
;function sa(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = String(a)
  }
}
D(sa, Error);
sa.prototype.name = "CustomError";
function ta(a) {
  for(var b = 1;b < arguments.length;b++) {
    var c = String(arguments[b]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, c)
  }
  return a
}
function ua(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
var va = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function wa(a) {
  a = String(a);
  if(!va.test(a)) {
    return encodeURIComponent(a)
  }
  return a
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
  return xa(a.replace(/  /g, " &#160;"), h)
}
function Fa(a, b) {
  for(var c = 0, d = ua(String(a)).split("."), f = ua(String(b)).split("."), g = Math.max(d.length, f.length), i = 0;c == 0 && i < g;i++) {
    var j = d[i] || "", n = f[i] || "", l = RegExp("(\\d*)(\\D*)", "g"), z = RegExp("(\\d*)(\\D*)", "g");
    do {
      var o = l.exec(j) || ["", "", ""], r = z.exec(n) || ["", "", ""];
      if(o[0].length == 0 && r[0].length == 0) {
        break
      }
      c = Ga(o[1].length == 0 ? 0 : parseInt(o[1], 10), r[1].length == 0 ? 0 : parseInt(r[1], 10)) || Ga(o[2].length == 0, r[2].length == 0) || Ga(o[2], r[2])
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
  sa.call(this, ta.apply(k, b));
  b.shift();
  this.eg = a
}
D(Ha, sa);
Ha.prototype.name = "AssertionError";
function Ia(a) {
  e(new Ha("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ja(a, b, c) {
  this.L = a;
  this.A = b;
  this.dd = c.name;
  this.Ya = !!c.fg;
  this.cg = !!c.required;
  this.ub = c.Sa;
  this.re = c.type;
  this.Nd = !1;
  switch(this.ub) {
    case Ka:
    ;
    case La:
    ;
    case Ma:
    ;
    case Na:
    ;
    case Oa:
      this.Nd = !0
  }
  this.$f = c.defaultValue
}
var Ka = 3, La = 4, Ma = 6, Na = 16, Oa = 18;
function Pa(a) {
  return a.ub == 11 || a.ub == 10
}
;function Qa(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
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
var Ta = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
function Ua(a) {
  for(var b, c, d = 1;d < arguments.length;d++) {
    c = arguments[d];
    for(b in c) {
      a[b] = c[b]
    }
    for(var f = 0;f < Ta.length;f++) {
      b = Ta[f], Object.prototype.hasOwnProperty.call(c, b) && (a[b] = c[b])
    }
  }
}
;var E = Array.prototype, Va = E.indexOf ? function(a, b, c) {
  return E.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(w(a)) {
    if(!w(b) || b.length != 1) {
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
}, Wa = E.forEach ? function(a, b, c) {
  E.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
}, Xa = E.map ? function(a, b, c) {
  return E.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = w(a) ? a.split("") : a, i = 0;i < d;i++) {
    i in g && (f[i] = b.call(c, g[i], i, a))
  }
  return f
}, Ya = E.some ? function(a, b, c) {
  return E.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && b.call(c, f[g], g, a)) {
      return!0
    }
  }
  return!1
}, Za = E.every ? function(a, b, c) {
  return E.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = w(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && !b.call(c, f[g], g, a)) {
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
  c >= 0 && E.splice.call(a, c, 1)
}
function bb() {
  return E.concat.apply(E, arguments)
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
function db(a) {
  for(var b = 1;b < arguments.length;b++) {
    var c = arguments[b], d;
    if(v(c) || (d = fa(c)) && c.hasOwnProperty("callee")) {
      a.push.apply(a, c)
    }else {
      if(d) {
        for(var f = a.length, g = c.length, i = 0;i < g;i++) {
          a[f + i] = c[i]
        }
      }else {
        a.push(c)
      }
    }
  }
}
function eb(a) {
  E.splice.apply(a, fb(arguments, 1))
}
function fb(a, b, c) {
  return arguments.length <= 2 ? E.slice.call(a, b) : E.slice.call(a, b, c)
}
function gb(a, b) {
  E.sort.call(a, b || hb)
}
function hb(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function ib(a, b, c) {
  this.pe = a;
  this.dd = b.name || k;
  this.bg = b.Qd || k;
  this.Zf = b.Yf;
  this.oa = {};
  for(a = 0;a < c.length;a++) {
    b = c[a], this.oa[b.A] = b
  }
}
function jb(a) {
  a = Ra(a.oa);
  gb(a, function(a, c) {
    return a.A - c.A
  });
  return a
}
;function kb() {
  this.q = {};
  this.Pa = this.constructor.Pa;
  var a = this.Pa.oa, b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  this.oa = b;
  this.Lc = this.$c = k
}
function lb(a, b) {
  for(var c in a.q) {
    a.oa[c] || b.call(a, c, a.q[c])
  }
}
q = kb.prototype;
q.wb = m("Pa");
q.get = function(a, b) {
  return mb(this, a.A, b)
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
  for(var b = jb(this.wb()), c = 0;c < b.length;c++) {
    var d = b[c];
    if(nb(this, d.A) != nb(a, d.A)) {
      return!1
    }
    if(nb(this, d.A)) {
      var f = Pa(d), g = d.A, i = this.q[g], g = a.q[g];
      if(d.Ya) {
        if(i.length != g.length) {
          return!1
        }
        for(d = 0;d < i.length;d++) {
          if(!(f ? i[d].k(g[d]) : i[d] == g[d])) {
            return!1
          }
        }
      }else {
        if(!(f ? i.k(g) : i == g)) {
          return!1
        }
      }
    }
  }
  return!0
};
q.N = function() {
  for(var a = new this.constructor, b = jb(a.wb()), c = 0;c < b.length;c++) {
    var d = b[c];
    delete a.q[d.A];
    if(nb(this, d.A)) {
      var f = Pa(d);
      if(d.Ya) {
        var g;
        g = d.A;
        ob(this, this.oa[g]);
        g = this.q[g] || [];
        for(var i = 0;i < g.length;i++) {
          a.add(d, f ? g[i].N() : g[i])
        }
      }else {
        g = this.get(d), a.set(d, f ? g.N() : g)
      }
    }
  }
  return a
};
function nb(a, b) {
  return b in a.q && u(a.q[b])
}
function ob(a, b) {
  if(a.$c) {
    var c = b.A;
    if(!(c in a.Lc)) {
      var d = a.q, f;
      f = a.$c;
      var g = a.q[c];
      if(g == k) {
        f = g
      }else {
        if(b.Ya) {
          var i = [];
          v(g);
          for(var j = 0;j < g.length;j++) {
            i[j] = f.ac(b, g[j])
          }
          f = i
        }else {
          f = f.ac(b, g)
        }
      }
      d[c] = f;
      a.Lc[c] = !0
    }
  }
}
function mb(a, b, c) {
  var d = a.oa[b];
  ob(a, d);
  return d.Ya ? (c = c || 0, pb(a, b), a.q[b][c]) : (v(a.q[b]), a.q[b])
}
function pb(a, b) {
  return a.oa[b].Ya ? (nb(a, b) && v(a.q[b]), nb(a, b) ? a.q[b].length : 0) : nb(a, b) ? 1 : 0
}
function qb(a, b) {
  var c = [], d, f;
  for(f in b) {
    b.hasOwnProperty(f) && (f == 0 ? d = b[0] : c.push(new Ja(a, f, b[f])))
  }
  a.Pa = new ib(a, d, c);
  a.wb = function() {
    return a.Pa
  }
}
;function rb() {
}
rb.prototype.bc = function(a, b) {
  return Pa(a) ? this.Mb(b) : b
};
rb.prototype.Kc = function(a) {
  new a.pe;
  e(Error("Unimplemented"))
};
rb.prototype.ac = function(a, b) {
  if(Pa(a)) {
    return this.Kc(a.re.Pa, b)
  }
  if(!a.Nd) {
    return b
  }
  var c = a.re;
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
D(sb, rb);
sb.prototype.Kc = function(a, b) {
  var c = new a.pe;
  c.$c = this;
  c.q = b;
  c.Lc = {};
  return c
};
function tb() {
}
D(tb, sb);
tb.prototype.Mb = function(a) {
  for(var b = jb(a.wb()), c = [], d = 0;d < b.length;d++) {
    var f = b[d];
    if(nb(a, f.A)) {
      var g = f.A;
      if(f.Ya) {
        c[g] = [];
        for(var i = 0;i < pb(a, f.A);i++) {
          c[g][i] = this.bc(f, a.get(f, i))
        }
      }else {
        c[g] = this.bc(f, a.get(f))
      }
    }
  }
  lb(a, function(a, b) {
    c[a] = b
  });
  return c
};
tb.prototype.bc = function(a, b) {
  if(a.ub == 8) {
    return b ? 1 : 0
  }
  return rb.prototype.bc.apply(this, arguments)
};
tb.prototype.ac = function(a, b) {
  if(a.ub == 8) {
    return b === 1
  }
  return rb.prototype.ac.apply(this, arguments)
};
function ub(a) {
  return x(a) || typeof a == "object" && x(a.call) && x(a.apply)
}
;function vb(a) {
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
function wb() {
}
wb.prototype.Mb = function(a) {
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
        for(var f = "", g = 0;g < d;g++) {
          c.push(f), xb(a, b[g], c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (g = b[f], typeof g != "function" && (c.push(d), yb(f, c), c.push(":"), xb(a, g, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var zb = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, Ab = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function yb(a, b) {
  b.push('"', a.replace(Ab, function(a) {
    if(a in zb) {
      return zb[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    b < 16 ? f += "000" : b < 256 ? f += "00" : b < 4096 && (f += "0");
    return zb[a] = f + b.toString(16)
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
        if(ub(a.B)) {
          a.B(b, c)
        }else {
          if(ub(a.Xe)) {
            b.push("<cw.eq.Wildcard>")
          }else {
            if(a instanceof RegExp) {
              b.push(a.toString())
            }else {
              if(d == "array") {
                d = a.length;
                b.push("[");
                for(var f = "", g = 0;g < d;g++) {
                  b.push(f), Bb(a[g], b, c), f = ", "
                }
                b.push("]")
              }else {
                if(d == "object") {
                  if(ga(a) && typeof a.valueOf == "function") {
                    b.push("new Date(", String(a.valueOf()), ")")
                  }else {
                    for(var d = Sa(a).concat(Ta), f = {}, i = g = 0;i < d.length;) {
                      var j = d[i++], n = ha(j) ? "o" + y(j) : (typeof j).charAt(0) + j;
                      Object.prototype.hasOwnProperty.call(f, n) || (f[n] = !0, d[g++] = j)
                    }
                    d.length = g;
                    b.push("{");
                    f = "";
                    for(i = 0;i < d.length;i++) {
                      g = d[i], Object.prototype.hasOwnProperty.call(a, g) && (j = a[g], b.push(f), yb(g, b), b.push(": "), Bb(j, b, c), f = ", ")
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
function G(a) {
  var b = [];
  F(a, b, h);
  return b.join("")
}
;function Cb(a) {
  if(typeof a.s == "function") {
    return a.s()
  }
  if(fa(a) || w(a)) {
    return a.length
  }
  var b = 0, c;
  for(c in a) {
    b++
  }
  return b
}
function Db(a) {
  if(typeof a.F == "function") {
    return a.F()
  }
  if(w(a)) {
    return a.split("")
  }
  if(fa(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Ra(a)
}
function Eb(a) {
  if(typeof a.fa == "function") {
    return a.fa()
  }
  if(typeof a.F != "function") {
    if(fa(a) || w(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return Sa(a)
  }
}
function Fb(a, b) {
  if(typeof a.contains == "function") {
    return a.contains(b)
  }
  if(typeof a.qb == "function") {
    return a.qb(b)
  }
  if(fa(a) || w(a)) {
    return $a(a, b)
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
function Gb(a, b, c) {
  if(typeof a.forEach == "function") {
    a.forEach(b, c)
  }else {
    if(fa(a) || w(a)) {
      Wa(a, b, c)
    }else {
      for(var d = Eb(a), f = Db(a), g = f.length, i = 0;i < g;i++) {
        b.call(c, f[i], d && d[i], a)
      }
    }
  }
}
function Hb(a, b) {
  if(typeof a.every == "function") {
    return a.every(b, h)
  }
  if(fa(a) || w(a)) {
    return Za(a, b, h)
  }
  for(var c = Eb(a), d = Db(a), f = d.length, g = 0;g < f;g++) {
    if(!b.call(h, d[g], c && c[g], a)) {
      return!1
    }
  }
  return!0
}
;function Ib(a) {
  this.m = {};
  this.c = [];
  var b = arguments.length;
  if(b > 1) {
    b % 2 && e(Error("Uneven number of arguments"));
    for(var c = 0;c < b;c += 2) {
      this.set(arguments[c], arguments[c + 1])
    }
  }else {
    a && this.Ec(a)
  }
}
q = Ib.prototype;
q.g = 0;
q.xd = 0;
q.s = m("g");
q.F = function() {
  Jb(this);
  for(var a = [], b = 0;b < this.c.length;b++) {
    a.push(this.m[this.c[b]])
  }
  return a
};
q.fa = function() {
  Jb(this);
  return this.c.concat()
};
q.J = function(a) {
  return Kb(this.m, a)
};
q.qb = function(a) {
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
  if(this.g != a.s()) {
    return!1
  }
  var c = b || Lb;
  Jb(this);
  for(var d, f = 0;d = this.c[f];f++) {
    if(!c(this.get(d), a.get(d))) {
      return!1
    }
  }
  return!0
};
function Lb(a, b) {
  return a === b
}
q.sa = function() {
  return this.g == 0
};
q.clear = function() {
  this.m = {};
  this.xd = this.g = this.c.length = 0
};
q.remove = function(a) {
  if(Kb(this.m, a)) {
    return delete this.m[a], this.g--, this.xd++, this.c.length > 2 * this.g && Jb(this), !0
  }
  return!1
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
    for(var f = {}, c = b = 0;b < a.c.length;) {
      d = a.c[b], Kb(f, d) || (a.c[c++] = d, f[d] = 1), b++
    }
    a.c.length = c
  }
}
q.get = function(a, b) {
  if(Kb(this.m, a)) {
    return this.m[a]
  }
  return b
};
q.set = function(a, b) {
  Kb(this.m, a) || (this.g++, this.c.push(a), this.xd++);
  this.m[a] = b
};
q.Ec = function(a) {
  var b;
  a instanceof Ib ? (b = a.fa(), a = a.F()) : (b = Sa(a), a = Ra(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
q.N = function() {
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
          e(Error("cannot determine size of object type " + b))
        }
      }
    }
  }
}
;function Ob(a, b) {
  this.Ma = a;
  this.Ja = b
}
Ob.prototype.k = function(a) {
  return a instanceof Ob && this.Ma == a.Ma && this.Ja.join(",") == a.Ja
};
Ob.prototype.B = function(a, b) {
  a.push("new SACK(", String(this.Ma), ", ");
  F(this.Ja, a, b);
  a.push(")")
};
function Pb() {
  this.H = new Ib
}
q = Pb.prototype;
q.Oa = -1;
q.ya = 0;
q.append = function(a) {
  var b = Nb(a);
  this.H.set(this.Oa + 1, [a, b]);
  this.Oa += 1;
  this.ya += b
};
q.extend = function(a) {
  for(var b = 0;b < a.length;b++) {
    this.append(a[b])
  }
};
q.B = function(a) {
  a.push("<Queue with ", String(this.H.s()), " item(s), counter=#", String(this.Oa), ", size=", String(this.ya), ">")
};
function Qb(a) {
  Jb(a.H);
  gb(a.H.c);
  return a.H.c
}
function Rb() {
  this.za = new Ib
}
Rb.prototype.$a = -1;
Rb.prototype.ya = 0;
function Sb(a) {
  var b = a.za.fa();
  gb(b);
  return new Ob(a.$a, b)
}
var Tb = {};
function Ub() {
  return!0
}
;var Vb, Wb, Xb, Yb, Zb;
function $b() {
  return s.navigator ? s.navigator.userAgent : k
}
Zb = Yb = Xb = Wb = Vb = !1;
var ac;
if(ac = $b()) {
  var bc = s.navigator;
  Vb = ac.indexOf("Opera") == 0;
  Wb = !Vb && ac.indexOf("MSIE") != -1;
  Yb = (Xb = !Vb && ac.indexOf("WebKit") != -1) && ac.indexOf("Mobile") != -1;
  Zb = !Vb && !Xb && bc.product == "Gecko"
}
var cc = Vb, H = Wb, dc = Zb, I = Xb, ec = Yb, fc = s.navigator, gc = (fc && fc.platform || "").indexOf("Mac") != -1, hc;
a: {
  var ic = "", jc;
  if(cc && s.opera) {
    var kc = s.opera.version, ic = typeof kc == "function" ? kc() : kc
  }else {
    if(dc ? jc = /rv\:([^\);]+)(\)|;)/ : H ? jc = /MSIE\s+([^\);]+)(\)|;)/ : I && (jc = /WebKit\/(\S+)/), jc) {
      var lc = jc.exec($b()), ic = lc ? lc[1] : ""
    }
  }
  if(H) {
    var mc, nc = s.document;
    mc = nc ? nc.documentMode : h;
    if(mc > parseFloat(ic)) {
      hc = String(mc);
      break a
    }
  }
  hc = ic
}
var oc = {};
function J(a) {
  return oc[a] || (oc[a] = Fa(hc, a) >= 0)
}
;var pc;
var qc = !H || J("9"), rc = H && !J("8");
function K() {
  sc && (tc[y(this)] = this)
}
var sc = !1, tc = {};
K.prototype.aa = !1;
K.prototype.e = function() {
  if(!this.aa && (this.aa = !0, this.b(), sc)) {
    var a = y(this);
    tc.hasOwnProperty(a) || e(Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call"));
    delete tc[a]
  }
};
K.prototype.b = function() {
};
function uc(a, b) {
  K.call(this);
  this.type = a;
  this.currentTarget = this.target = b
}
D(uc, K);
q = uc.prototype;
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
var vc = new Function("a", "return a");
function wc(a, b) {
  a && this.Ga(a, b)
}
D(wc, uc);
var xc = [1, 4, 2];
q = wc.prototype;
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
q.Cf = !1;
q.da = k;
q.Ga = function(a, b) {
  var c = this.type = a.type;
  uc.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(dc) {
      var f;
      a: {
        try {
          vc(d.nodeName);
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
  this.offsetX = a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== h ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== h ? a.clientX : a.pageX;
  this.clientY = a.clientY !== h ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.Cf = gc ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.da = a;
  delete this.Jb;
  delete this.Ia
};
function yc(a) {
  return qc ? a.da.button == 0 : a.type == "click" ? !0 : !!(a.da.button & xc[0])
}
q.stopPropagation = function() {
  wc.d.stopPropagation.call(this);
  this.da.stopPropagation ? this.da.stopPropagation() : this.da.cancelBubble = !0
};
q.preventDefault = function() {
  wc.d.preventDefault.call(this);
  var a = this.da;
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
  wc.d.b.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.da = k
};
function zc() {
}
var Ac = 0;
q = zc.prototype;
q.key = 0;
q.gb = !1;
q.Hc = !1;
q.Ga = function(a, b, c, d, f, g) {
  x(a) ? this.fe = !0 : a && a.handleEvent && x(a.handleEvent) ? this.fe = !1 : e(Error("Invalid listener argument"));
  this.bb = a;
  this.Ae = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.gc = g;
  this.Hc = !1;
  this.key = ++Ac;
  this.gb = !1
};
q.handleEvent = function(a) {
  if(this.fe) {
    return this.bb.call(this.gc || this.src, a)
  }
  return this.bb.handleEvent.call(this.bb, a)
};
var Bc, Cc = (Bc = "ScriptEngine" in s && s.ScriptEngine() == "JScript") ? s.ScriptEngineMajorVersion() + "." + s.ScriptEngineMinorVersion() + "." + s.ScriptEngineBuildVersion() : "0";
function L(a, b) {
  K.call(this);
  this.le = b;
  this.Ca = [];
  a > this.le && e(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.Ca.push(this.$ ? this.$() : {})
  }
}
D(L, K);
L.prototype.$ = k;
L.prototype.Od = k;
L.prototype.getObject = function() {
  if(this.Ca.length) {
    return this.Ca.pop()
  }
  return this.$ ? this.$() : {}
};
function Dc(a, b) {
  a.Ca.length < a.le ? a.Ca.push(b) : Ec(a, b)
}
function Ec(a, b) {
  if(a.Od) {
    a.Od(b)
  }else {
    if(ha(b)) {
      if(x(b.e)) {
        b.e()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
L.prototype.b = function() {
  L.d.b.call(this);
  for(var a = this.Ca;a.length;) {
    Ec(this, a.pop())
  }
  delete this.Ca
};
var Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc;
(function() {
  function a() {
    return{g:0, S:0}
  }
  function b() {
    return[]
  }
  function c() {
    function a(b) {
      return i.call(a.src, a.key, b)
    }
    return a
  }
  function d() {
    return new zc
  }
  function f() {
    return new wc
  }
  var g = Bc && !(Fa(Cc, "5.7") >= 0), i;
  Kc = function(a) {
    i = a
  };
  if(g) {
    Fc = function() {
      return j.getObject()
    };
    Gc = function(a) {
      Dc(j, a)
    };
    Hc = function() {
      return n.getObject()
    };
    Ic = function(a) {
      Dc(n, a)
    };
    Jc = function() {
      return l.getObject()
    };
    Lc = function() {
      Dc(l, c())
    };
    Mc = function() {
      return z.getObject()
    };
    Nc = function(a) {
      Dc(z, a)
    };
    Oc = function() {
      return o.getObject()
    };
    Pc = function(a) {
      Dc(o, a)
    };
    var j = new L(0, 600);
    j.$ = a;
    var n = new L(0, 600);
    n.$ = b;
    var l = new L(0, 600);
    l.$ = c;
    var z = new L(0, 600);
    z.$ = d;
    var o = new L(0, 600);
    o.$ = f
  }else {
    Fc = a, Gc = t, Hc = b, Ic = t, Jc = c, Lc = t, Mc = d, Nc = t, Oc = f, Pc = t
  }
})();
var Qc = {}, M = {}, Rc = {}, Sc = {};
function N(a, b, c, d, f) {
  if(b) {
    if(v(b)) {
      for(var g = 0;g < b.length;g++) {
        N(a, b[g], c, d, f)
      }
      return k
    }else {
      var d = !!d, i = M;
      b in i || (i[b] = Fc());
      i = i[b];
      d in i || (i[d] = Fc(), i.g++);
      var i = i[d], j = y(a), n;
      i.S++;
      if(i[j]) {
        n = i[j];
        for(g = 0;g < n.length;g++) {
          if(i = n[g], i.bb == c && i.gc == f) {
            if(i.gb) {
              break
            }
            return n[g].key
          }
        }
      }else {
        n = i[j] = Hc(), i.g++
      }
      g = Jc();
      g.src = a;
      i = Mc();
      i.Ga(c, g, a, b, d, f);
      c = i.key;
      g.key = c;
      n.push(i);
      Qc[c] = i;
      Rc[j] || (Rc[j] = Hc());
      Rc[j].push(i);
      a.addEventListener ? (a == s || !a.Kd) && a.addEventListener(b, g, d) : a.attachEvent(Tc(b), g);
      return c
    }
  }else {
    e(Error("Invalid event type"))
  }
}
function Uc(a, b, c, d, f) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      Uc(a, b[g], c, d, f)
    }
    return k
  }
  a = N(a, b, c, d, f);
  Qc[a].Hc = !0;
  return a
}
function Vc(a, b, c, d, f) {
  if(v(b)) {
    for(var g = 0;g < b.length;g++) {
      Vc(a, b[g], c, d, f)
    }
  }else {
    if(d = !!d, a = Wc(a, b, d)) {
      for(g = 0;g < a.length;g++) {
        if(a[g].bb == c && a[g].capture == d && a[g].gc == f) {
          O(a[g].key);
          break
        }
      }
    }
  }
}
function O(a) {
  if(Qc[a]) {
    var b = Qc[a];
    if(!b.gb) {
      var c = b.src, d = b.type, f = b.Ae, g = b.capture;
      c.removeEventListener ? (c == s || !c.Kd) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(Tc(d), f);
      c = y(c);
      f = M[d][g][c];
      if(Rc[c]) {
        var i = Rc[c];
        ab(i, b);
        i.length == 0 && delete Rc[c]
      }
      b.gb = !0;
      f.te = !0;
      Xc(d, g, c, f);
      delete Qc[a]
    }
  }
}
function Xc(a, b, c, d) {
  if(!d.lc && d.te) {
    for(var f = 0, g = 0;f < d.length;f++) {
      if(d[f].gb) {
        var i = d[f].Ae;
        i.src = k;
        Lc(i);
        Nc(d[f])
      }else {
        f != g && (d[g] = d[f]), g++
      }
    }
    d.length = g;
    d.te = !1;
    g == 0 && (Ic(d), delete M[a][b][c], M[a][b].g--, M[a][b].g == 0 && (Gc(M[a][b]), delete M[a][b], M[a].g--), M[a].g == 0 && (Gc(M[a]), delete M[a]))
  }
}
function Yc(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Qa(Rc, function(a) {
      for(var f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          O(g.key), c++
        }
      }
    })
  }else {
    if(a = y(a), Rc[a]) {
      for(var a = Rc[a], f = a.length - 1;f >= 0;f--) {
        var g = a[f];
        if(d || b == g.capture) {
          O(g.key), c++
        }
      }
    }
  }
}
function Wc(a, b, c) {
  var d = M;
  if(b in d && (d = d[b], c in d && (d = d[c], a = y(a), d[a]))) {
    return d[a]
  }
  return k
}
function Tc(a) {
  if(a in Sc) {
    return Sc[a]
  }
  return Sc[a] = "on" + a
}
function Zc(a, b, c, d, f) {
  var g = 1, b = y(b);
  if(a[b]) {
    a.S--;
    a = a[b];
    a.lc ? a.lc++ : a.lc = 1;
    try {
      for(var i = a.length, j = 0;j < i;j++) {
        var n = a[j];
        n && !n.gb && (g &= $c(n, f) !== !1)
      }
    }finally {
      a.lc--, Xc(c, d, b, a)
    }
  }
  return Boolean(g)
}
function $c(a, b) {
  var c = a.handleEvent(b);
  a.Hc && O(a.key);
  return c
}
Kc(function(a, b) {
  if(!Qc[a]) {
    return!0
  }
  var c = Qc[a], d = c.type, f = M;
  if(!(d in f)) {
    return!0
  }
  var f = f[d], g, i;
  pc === h && (pc = H && !s.addEventListener);
  if(pc) {
    g = b || ca("window.event");
    var j = !0 in f, n = !1 in f;
    if(j) {
      if(g.keyCode < 0 || g.returnValue != h) {
        return!0
      }
      a: {
        var l = !1;
        if(g.keyCode == 0) {
          try {
            g.keyCode = -1;
            break a
          }catch(z) {
            l = !0
          }
        }
        if(l || g.returnValue == h) {
          g.returnValue = !0
        }
      }
    }
    l = Oc();
    l.Ga(g, this);
    g = !0;
    try {
      if(j) {
        for(var o = Hc(), r = l.currentTarget;r;r = r.parentNode) {
          o.push(r)
        }
        i = f[!0];
        i.S = i.g;
        for(var B = o.length - 1;!l.Ia && B >= 0 && i.S;B--) {
          l.currentTarget = o[B], g &= Zc(i, o[B], d, !0, l)
        }
        if(n) {
          i = f[!1];
          i.S = i.g;
          for(B = 0;!l.Ia && B < o.length && i.S;B++) {
            l.currentTarget = o[B], g &= Zc(i, o[B], d, !1, l)
          }
        }
      }else {
        g = $c(c, l)
      }
    }finally {
      if(o) {
        o.length = 0, Ic(o)
      }
      l.e();
      Pc(l)
    }
    return g
  }
  d = new wc(b, this);
  try {
    g = $c(c, d)
  }finally {
    d.e()
  }
  return g
});
var ad = 0;
function bd() {
  K.call(this)
}
D(bd, K);
q = bd.prototype;
q.Kd = !0;
q.nc = k;
q.nd = aa("nc");
q.addEventListener = function(a, b, c, d) {
  N(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Vc(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = M;
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
    var d = 1, f, c = c[b], b = !0 in c, g;
    if(b) {
      f = [];
      for(g = this;g;g = g.nc) {
        f.push(g)
      }
      g = c[!0];
      g.S = g.g;
      for(var i = f.length - 1;!a.Ia && i >= 0 && g.S;i--) {
        a.currentTarget = f[i], d &= Zc(g, f[i], a.type, !0, a) && a.Jb != !1
      }
    }
    if(!1 in c) {
      if(g = c[!1], g.S = g.g, b) {
        for(i = 0;!a.Ia && i < f.length && g.S;i++) {
          a.currentTarget = f[i], d &= Zc(g, f[i], a.type, !1, a) && a.Jb != !1
        }
      }else {
        for(f = this;!a.Ia && f && g.S;f = f.nc) {
          a.currentTarget = f, d &= Zc(g, f, a.type, !1, a) && a.Jb != !1
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
  bd.d.b.call(this);
  Yc(this);
  this.nc = k
};
var cd = s.window;
ad++;
ad++;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function dd(a, b) {
  this.Xb = [];
  this.Xf = a;
  this.cf = b || k
}
q = dd.prototype;
q.Ta = !1;
q.Wa = !1;
q.Fb = 0;
q.Je = !1;
q.$e = !1;
q.Gd = function(a, b) {
  this.Ta = !0;
  this.rc = b;
  this.Wa = !a;
  ed(this);
  this.Fb--;
  this.Fb == 0 && this.Ta && ed(this)
};
q.ob = function(a) {
  if(this.Ta) {
    this.Je || e(new fd(this)), this.Je = !1
  }
  this.Ta = !0;
  this.rc = a;
  this.Wa = !1;
  ed(this)
};
function gd(a, b) {
  hd(a, b, k, h)
}
function hd(a, b, c, d) {
  a.Xb.push([b, c, d]);
  a.Ta && ed(a)
}
function id(a) {
  return Ya(a.Xb, function(a) {
    return x(a[1])
  })
}
function ed(a) {
  a.vd && a.Ta && id(a) && (s.clearTimeout(a.vd), delete a.vd);
  for(var b = a.rc, c = !1, d = !1;a.Xb.length && a.Fb == 0;) {
    var f = a.Xb.shift(), g = f[0], i = f[1], f = f[2];
    if(g = a.Wa ? i : g) {
      try {
        var j = g.call(f || a.cf, b);
        if(u(j)) {
          a.Wa = a.Wa && (j == b || j instanceof Error), a.rc = b = j
        }
        b instanceof dd && (d = !0, a.Fb++)
      }catch(n) {
        b = n, a.Wa = !0, id(a) || (c = !0)
      }
    }
  }
  a.rc = b;
  if(d && a.Fb) {
    hd(b, A(a.Gd, a, !0), A(a.Gd, a, !1)), b.$e = !0
  }
  if(c) {
    a.vd = s.setTimeout(function() {
      e(b)
    }, 0)
  }
}
function fd(a) {
  sa.call(this);
  this.ag = a
}
D(fd, sa);
fd.prototype.message = "Already called";
function jd(a) {
  this.I = a;
  this.Nc = [];
  this.Pd = [];
  this.Wf = A(this.Rf, this)
}
jd.prototype.Qf = k;
jd.prototype.Rf = function() {
  this.Qf = k;
  var a = this.Nc;
  this.Nc = [];
  for(var b = 0;b < a.length;b++) {
    var c = a[b], d = c[0], f = c[1], c = c[2];
    try {
      d.apply(f, c)
    }catch(g) {
      this.I.setTimeout(function() {
        e(g)
      }, 0)
    }
  }
  if(this.Nc.length == 0) {
    a = this.Pd;
    this.Pd = [];
    for(b = 0;b < a.length;b++) {
      a[b].ob(k)
    }
  }
};
new jd(s.window);
function kd() {
  return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ C()).toString(36)
}
function ld(a) {
  return a.substr(0, a.length - 1)
}
var md = /^(0|[1-9]\d*)$/, nd = /^(0|\-?[1-9]\d*)$/;
function od(a) {
  var b = pd;
  if(md.test(a) && (a = parseInt(a, 10), a <= b)) {
    return a
  }
  return k
}
;function qd(a) {
  this.m = new Ib;
  a && this.Ec(a)
}
function rd(a) {
  var b = typeof a;
  return b == "object" && a || b == "function" ? "o" + y(a) : b.substr(0, 1) + a
}
q = qd.prototype;
q.s = function() {
  return this.m.s()
};
q.add = function(a) {
  this.m.set(rd(a), a)
};
q.Ec = function(a) {
  for(var a = Db(a), b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
q.ld = function(a) {
  for(var a = Db(a), b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
q.remove = function(a) {
  return this.m.remove(rd(a))
};
q.clear = function() {
  this.m.clear()
};
q.sa = function() {
  return this.m.sa()
};
q.contains = function(a) {
  return this.m.J(rd(a))
};
q.F = function() {
  return this.m.F()
};
q.N = function() {
  return new qd(this)
};
q.k = function(a) {
  return this.s() == Cb(a) && sd(this, a)
};
function sd(a, b) {
  var c = Cb(b);
  if(a.s() > c) {
    return!1
  }
  !(b instanceof qd) && c > 5 && (b = new qd(b));
  return Hb(a, function(a) {
    return Fb(b, a)
  })
}
;function td(a) {
  return ud(a || arguments.callee.caller, [])
}
function ud(a, b) {
  var c = [];
  if($a(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(vd(a) + "(");
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
            g = (g = vd(g)) ? g : "[fn]";
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
        c.push(ud(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function vd(a) {
  a = String(a);
  if(!wd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    wd[a] = b ? b[1] : "[Anonymous]"
  }
  return wd[a]
}
var wd = {};
function xd(a, b, c, d, f) {
  this.reset(a, b, c, d, f)
}
xd.prototype.Hf = 0;
xd.prototype.Pc = k;
xd.prototype.Oc = k;
var yd = 0;
xd.prototype.reset = function(a, b, c, d, f) {
  this.Hf = typeof f == "number" ? f : yd++;
  this.Me = d || C();
  this.ga = a;
  this.qe = b;
  this.ke = c;
  delete this.Pc;
  delete this.Oc
};
xd.prototype.Pb = aa("ga");
function zd(a) {
  this.dd = a
}
zd.prototype.L = k;
zd.prototype.ga = k;
zd.prototype.ma = k;
zd.prototype.zb = k;
function P(a, b) {
  this.name = a;
  this.value = b
}
P.prototype.toString = m("name");
var Ad = new P("SHOUT", 1200), Cd = new P("SEVERE", 1E3), Dd = new P("WARNING", 900), Ed = new P("INFO", 800), Fd = new P("CONFIG", 700), Gd = new P("FINE", 500), Hd = new P("FINEST", 300), Id = new P("ALL", 0), Jd = [new P("OFF", Infinity), Ad, Cd, Dd, Ed, Fd, Gd, new P("FINER", 400), Hd, Id], Kd = k;
function Ld(a) {
  if(!Kd) {
    Kd = {};
    for(var b = 0, c;c = Jd[b];b++) {
      Kd[c.value] = c, Kd[c.name] = c
    }
  }
  return Kd[a] || k
}
q = zd.prototype;
q.getParent = m("L");
q.Pb = aa("ga");
function Md(a) {
  if(a.ga) {
    return a.ga
  }
  if(a.L) {
    return Md(a.L)
  }
  Ia("Root logger has no level set.");
  return k
}
q.log = function(a, b, c) {
  if(a.value >= Md(this).value) {
    a = this.jf(a, b, c);
    s.console && s.console.markTimeline && s.console.markTimeline("log:" + a.qe);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.zb) {
        for(var f = 0, g = h;g = c.zb[f];f++) {
          g(d)
        }
      }
      b = b.getParent()
    }
  }
};
q.jf = function(a, b, c) {
  var d = new xd(a, String(b), this.dd);
  if(c) {
    d.Pc = c;
    var f;
    var g = arguments.callee.caller;
    try {
      var i;
      var j = ca("window.location.href");
      if(w(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:j, stack:"Not available"}
      }else {
        var n, l, z = !1;
        try {
          n = c.lineNumber || c.dg || "Not available"
        }catch(o) {
          n = "Not available", z = !0
        }
        try {
          l = c.fileName || c.filename || c.sourceURL || j
        }catch(r) {
          l = "Not available", z = !0
        }
        i = z || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:l, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + ya(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + ya(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ya(td(g) + "-> ")
    }catch(B) {
      f = "Exception trying to expose exception! You win, we lose. " + B
    }
    d.Oc = f
  }
  return d
};
function Nd(a, b) {
  a.log(Cd, b, h)
}
function Od(a, b) {
  a.log(Dd, b, h)
}
q.info = function(a, b) {
  this.log(Ed, a, b)
};
function Q(a, b) {
  a.log(Gd, b, h)
}
function R(a, b) {
  a.log(Hd, b, h)
}
var Pd = {}, Qd = k;
function Rd() {
  Qd || (Qd = new zd(""), Pd[""] = Qd, Qd.Pb(Fd))
}
function Sd() {
  Rd();
  return Qd
}
function S(a) {
  Rd();
  var b;
  if(!(b = Pd[a])) {
    b = new zd(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = S(a.substr(0, c));
    if(!c.ma) {
      c.ma = {}
    }
    c.ma[d] = b;
    b.L = c;
    Pd[a] = b
  }
  return b
}
;S("cw.net.FlashSocket");
S("cw.net.FlashSocketTracker");
function Td(a) {
  K.call(this);
  this.na = a;
  this.Gc = []
}
D(Td, K);
Td.prototype.a = S("cw.net.FlashSocketConduit");
Td.prototype.Ad = function(a) {
  this.Gc ? (R(this.a, "writeFrames: Not connected, can't write " + a.length + " frame(s) yet."), this.Gc.push.apply(this.Gc, a)) : (R(this.a, "writeFrames: Writing " + a.length + " frame(s)."), this.qd.Ad(a))
};
Td.prototype.Ed = function(a, b) {
  this.qd.Ed(a, b)
};
Td.prototype.b = function() {
  this.a.info("in disposeInternal.");
  Td.d.b.call(this);
  this.qd.e();
  delete this.na
};
var pd = Math.pow(2, 53);
var Ud = {Xe:p("<cw.eq.Wildcard>")};
function Vd(a) {
  return a == "boolean" || a == "number" || a == "null" || a == "undefined" || a == "string"
}
function Wd(a, b, c) {
  var d = ea(a), f = ea(b);
  if(a == Ud || b == Ud) {
    return!0
  }else {
    if(a != k && typeof a.k == "function") {
      return c && c.push("running custom equals function on left object"), a.k(b, c)
    }else {
      if(b != k && typeof b.k == "function") {
        return c && c.push("running custom equals function on right object"), b.k(a, c)
      }else {
        if(Vd(d) || Vd(f)) {
          a = a === b
        }else {
          if(a instanceof RegExp && b instanceof RegExp) {
            a = a.toString() === b.toString()
          }else {
            if(ga(a) && ga(b)) {
              a = a.valueOf() === b.valueOf()
            }else {
              if(d == "array" && f == "array") {
                a: {
                  if(c && c.push("descending into array"), a.length != b.length) {
                    c && c.push("array length mismatch: " + a.length + ", " + b.length), a = !1
                  }else {
                    d = 0;
                    for(f = a.length;d < f;d++) {
                      if(!Wd(a[d], b[d], c)) {
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
                if(a.We == Ub && b.We == Ub) {
                  a: {
                    c && c.push("descending into object");
                    for(var g in a) {
                      if(!(g in b)) {
                        c && c.push("property " + g + " missing on right object");
                        a = !1;
                        break a
                      }
                      if(!Wd(a[g], b[g], c)) {
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
  sa.call(this, a)
}
D(T, sa);
T.prototype.name = "cw.net.InvalidFrame";
function U() {
  var a = [];
  this.Q(a);
  return a.join("")
}
function Xd() {
}
Xd.prototype.k = function(a, b) {
  if(!(a instanceof Xd)) {
    return!1
  }
  return Wd(Yd(this), Yd(a), b)
};
Xd.prototype.B = function(a, b) {
  a.push("<HelloFrame properties=");
  F(Yd(this), a, b);
  a.push(">")
};
function Yd(a) {
  return[a.lb, a.ye, a.$d, a.De, a.Rb, a.Jd, a.td, a.se, a.oe, a.bd, a.me, a.Re, a.Le, a.U, a.kc]
}
Xd.prototype.O = U;
Xd.prototype.Q = function(a) {
  var b = {};
  b.tnum = this.lb;
  b.ver = this.ye;
  b.format = this.$d;
  b["new"] = this.De;
  b.id = this.Rb;
  b.cred = this.Jd;
  b.ming = this.td;
  b.pad = this.se;
  b.maxb = this.oe;
  if(u(this.bd)) {
    b.maxt = this.bd
  }
  b.maxia = this.me;
  b.tcpack = this.Re;
  b.eeds = this.Le;
  b.sack = this.U instanceof Ob ? ld((new V(this.U)).O()) : this.U;
  b.seenack = this.kc instanceof Ob ? ld((new V(this.kc)).O()) : this.kc;
  for(var c in b) {
    b[c] === h && delete b[c]
  }
  a.push((new wb).Mb(b), "H")
};
function Zd(a) {
  this.kb = a
}
Zd.prototype.k = function(a) {
  return a instanceof Zd && this.kb == a.kb
};
Zd.prototype.B = function(a, b) {
  a.push("new StringFrame(");
  F(this.kb, a, b);
  a.push(")")
};
Zd.prototype.O = U;
Zd.prototype.Q = function(a) {
  a.push(this.kb, " ")
};
function $d(a) {
  this.Zb = a
}
$d.prototype.k = function(a) {
  return a instanceof $d && this.Zb == a.Zb
};
$d.prototype.B = function(a, b) {
  a.push("new CommentFrame(");
  F(this.Zb, a, b);
  a.push(")")
};
$d.prototype.O = U;
$d.prototype.Q = function(a) {
  a.push(this.Zb, "^")
};
function ae(a) {
  this.Lb = a
}
ae.prototype.k = function(a) {
  return a instanceof ae && this.Lb == a.Lb
};
ae.prototype.B = function(a) {
  a.push("new SeqNumFrame(", String(this.Lb), ")")
};
ae.prototype.O = U;
ae.prototype.Q = function(a) {
  a.push(String(this.Lb), "N")
};
function be(a) {
  var b = a.split("|");
  if(b.length != 2) {
    return k
  }
  a: {
    var c = b[1], a = pd;
    if(nd.test(c) && (c = parseInt(c, 10), c >= -1 && c <= a)) {
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
      var g = od(b[d]);
      if(g == k) {
        return k
      }
      c.push(g)
    }
  }
  return new Ob(a, c)
}
function V(a) {
  this.U = a
}
V.prototype.k = function(a, b) {
  return a instanceof V && this.U.k(a.U, b)
};
V.prototype.B = function(a, b) {
  a.push("new SackFrame(");
  F(this.U, a, b);
  a.push(")")
};
V.prototype.O = U;
V.prototype.Q = function(a) {
  var b = this.U;
  a.push(b.Ja.join(","), "|", String(b.Ma));
  a.push("A")
};
function ce(a) {
  this.Cb = a
}
ce.prototype.k = function(a, b) {
  return a instanceof ce && this.Cb.k(a.Cb, b)
};
ce.prototype.B = function(a, b) {
  a.push("new StreamStatusFrame(");
  F(this.Cb, a, b);
  a.push(")")
};
ce.prototype.O = U;
ce.prototype.Q = function(a) {
  var b = this.Cb;
  a.push(b.Ja.join(","), "|", String(b.Ma));
  a.push("T")
};
function de() {
}
de.prototype.B = function(a) {
  a.push("new StreamCreatedFrame()")
};
de.prototype.k = function(a) {
  return a instanceof de
};
de.prototype.O = U;
de.prototype.Q = function(a) {
  a.push("C")
};
function ee() {
}
ee.prototype.B = function(a) {
  a.push("new YouCloseItFrame()")
};
ee.prototype.k = function(a) {
  return a instanceof ee
};
ee.prototype.O = U;
ee.prototype.Q = function(a) {
  a.push("Y")
};
function fe(a, b) {
  this.Hb = a;
  this.nb = b
}
fe.prototype.k = function(a) {
  return a instanceof fe && this.Hb == a.Hb && this.nb == a.nb
};
fe.prototype.B = function(a, b) {
  a.push("new ResetFrame(");
  F(this.Hb, a, b);
  a.push(", ", String(this.nb), ")")
};
fe.prototype.O = U;
fe.prototype.Q = function(a) {
  a.push(this.Hb, "|", String(Number(this.nb)), "!")
};
var ge = {stream_attach_failure:"stream_attach_failure", acked_unsent_strings:"acked_unsent_strings", invalid_frame_type_or_arguments:"invalid_frame_type_or_arguments", frame_corruption:"frame_corruption", rwin_overflow:"rwin_overflow"};
function he(a) {
  this.reason = a
}
he.prototype.k = function(a) {
  return a instanceof he && this.reason == a.reason
};
he.prototype.B = function(a, b) {
  a.push("new TransportKillFrame(");
  F(this.reason, a, b);
  a.push(")")
};
he.prototype.O = U;
he.prototype.Q = function(a) {
  a.push(this.reason, "K")
};
function ie(a) {
  a || e(new T("0-length frame"));
  var b = a.substr(a.length - 1, 1);
  if(b == " ") {
    return new Zd(a.substr(0, a.length - 1))
  }else {
    if(b == "A") {
      return a = be(ld(a)), a == k && e(new T("bad sack")), new V(a)
    }else {
      if(b == "N") {
        return a = od(ld(a)), a == k && e(new T("bad seqNum")), new ae(a)
      }else {
        if(b == "T") {
          return a = be(ld(a)), a == k && e(new T("bad lastSackSeen")), new ce(a)
        }else {
          if(b == "Y") {
            return a.length != 1 && e(new T("leading garbage")), new ee
          }else {
            if(b == "^") {
              return new $d(a.substr(0, a.length - 1))
            }else {
              if(b == "C") {
                return a.length != 1 && e(new T("leading garbage")), new de
              }else {
                if(b == "!") {
                  return b = a.substr(0, a.length - 3), (b.length > 255 || !/^([ -~]*)$/.test(b)) && e(new T("bad reasonString")), a = {"|0":!1, "|1":!0}[a.substr(a.length - 3, 2)], a == k && e(new T("bad applicationLevel")), new fe(b, a)
                }else {
                  if(b == "K") {
                    return a = a.substr(0, a.length - 1), a = ge[a], a == k && e(new T("unknown kill reason: " + a)), new he(a)
                  }else {
                    e(new T("Invalid frame type " + b))
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
;var je;
je = !1;
var ke = $b();
ke && (ke.indexOf("Firefox") != -1 || ke.indexOf("Camino") != -1 || ke.indexOf("iPhone") != -1 || ke.indexOf("iPod") != -1 || ke.indexOf("iPad") != -1 || ke.indexOf("Android") != -1 || ke.indexOf("Chrome") != -1 && (je = !0));
var le = je;
var me = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function ne(a, b) {
  var c = a.match(me), d = b.match(me);
  return c[3] == d[3] && c[1] == d[1] && c[4] == d[4]
}
;function oe() {
  if(dc) {
    this.Aa = {}, this.Cc = {}, this.yc = []
  }
}
oe.prototype.a = S("goog.net.xhrMonitor");
oe.prototype.P = dc;
oe.prototype.Nb = function(a) {
  this.P = dc && a
};
function pe(a) {
  var b = qe;
  if(b.P) {
    var c = w(a) ? a : ha(a) ? y(a) : "";
    R(b.a, "Pushing context: " + a + " (" + c + ")");
    b.yc.push(c)
  }
}
function re() {
  var a = qe;
  if(a.P) {
    var b = a.yc.pop();
    R(a.a, "Popping context: " + b);
    se(a, b)
  }
}
function te(a) {
  var b = qe;
  if(b.P) {
    a = y(a);
    Q(b.a, "Opening XHR : " + a);
    for(var c = 0;c < b.yc.length;c++) {
      var d = b.yc[c];
      ue(b.Aa, d, a);
      ue(b.Cc, a, d)
    }
  }
}
function se(a, b) {
  var c = a.Cc[b], d = a.Aa[b];
  c && d && (R(a.a, "Updating dependent contexts"), Wa(c, function(a) {
    Wa(d, function(b) {
      ue(this.Aa, a, b);
      ue(this.Cc, b, a)
    }, this)
  }, a))
}
function ue(a, b, c) {
  a[b] || (a[b] = []);
  $a(a[b], c) || a[b].push(c)
}
var qe = new oe;
function ve() {
}
ve.prototype.Wb = k;
function we() {
  return xe(ye)
}
var ye;
function ze() {
}
D(ze, ve);
function xe(a) {
  return(a = Ae(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Be(a) {
  var b = {};
  Ae(a) && (b[0] = !0, b[1] = !0);
  return b
}
ze.prototype.Uc = k;
function Ae(a) {
  if(!a.Uc && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Uc = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Uc
}
ye = new ze;
function Ce(a) {
  K.call(this);
  this.headers = new Ib;
  this.mb = a || k
}
D(Ce, bd);
Ce.prototype.a = S("goog.net.XhrIo");
var De = /^https?:?$/i;
q = Ce.prototype;
q.ka = !1;
q.f = k;
q.Bc = k;
q.Db = "";
q.he = "";
q.Ab = 0;
q.Bb = "";
q.Mc = !1;
q.hc = !1;
q.Vc = !1;
q.Fa = !1;
q.zc = 0;
q.Ka = k;
q.Fe = "";
q.Tf = !1;
q.send = function(a, b, c, d) {
  this.f && e(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Db = a;
  this.Bb = "";
  this.Ab = 0;
  this.he = b;
  this.Mc = !1;
  this.ka = !0;
  this.f = this.mb ? xe(this.mb) : new we;
  this.Bc = this.mb ? this.mb.Wb || (this.mb.Wb = Be(this.mb)) : ye.Wb || (ye.Wb = Be(ye));
  te(this.f);
  this.f.onreadystatechange = A(this.ue, this);
  try {
    Q(this.a, Ee(this, "Opening Xhr")), this.Vc = !0, this.f.open(b, a, !0), this.Vc = !1
  }catch(f) {
    Q(this.a, Ee(this, "Error opening Xhr: " + f.message));
    Fe(this, f);
    return
  }
  var a = c || "", g = this.headers.N();
  d && Gb(d, function(a, b) {
    g.set(b, a)
  });
  b == "POST" && !g.J("Content-Type") && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Gb(g, function(a, b) {
    this.f.setRequestHeader(b, a)
  }, this);
  if(this.Fe) {
    this.f.responseType = this.Fe
  }
  if("withCredentials" in this.f) {
    this.f.withCredentials = this.Tf
  }
  try {
    if(this.Ka) {
      cd.clearTimeout(this.Ka), this.Ka = k
    }
    if(this.zc > 0) {
      Q(this.a, Ee(this, "Will abort after " + this.zc + "ms if incomplete")), this.Ka = cd.setTimeout(A(this.Pf, this), this.zc)
    }
    Q(this.a, Ee(this, "Sending request"));
    this.hc = !0;
    this.f.send(a);
    this.hc = !1
  }catch(i) {
    Q(this.a, Ee(this, "Send error: " + i.message)), Fe(this, i)
  }
};
q.dispatchEvent = function(a) {
  if(this.f) {
    pe(this.f);
    try {
      return Ce.d.dispatchEvent.call(this, a)
    }finally {
      re()
    }
  }else {
    return Ce.d.dispatchEvent.call(this, a)
  }
};
q.Pf = function() {
  if(typeof ba != "undefined" && this.f) {
    this.Bb = "Timed out after " + this.zc + "ms, aborting", this.Ab = 8, Q(this.a, Ee(this, this.Bb)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function Fe(a, b) {
  a.ka = !1;
  if(a.f) {
    a.Fa = !0, a.f.abort(), a.Fa = !1
  }
  a.Bb = b;
  a.Ab = 5;
  Ge(a);
  He(a)
}
function Ge(a) {
  if(!a.Mc) {
    a.Mc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
q.abort = function(a) {
  if(this.f && this.ka) {
    Q(this.a, Ee(this, "Aborting")), this.ka = !1, this.Fa = !0, this.f.abort(), this.Fa = !1, this.Ab = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), He(this)
  }
};
q.b = function() {
  if(this.f) {
    if(this.ka) {
      this.ka = !1, this.Fa = !0, this.f.abort(), this.Fa = !1
    }
    He(this, !0)
  }
  Ce.d.b.call(this)
};
q.ue = function() {
  !this.Vc && !this.hc && !this.Fa ? this.zf() : Ie(this)
};
q.zf = function() {
  Ie(this)
};
function Ie(a) {
  if(a.ka && typeof ba != "undefined") {
    if(a.Bc[1] && a.qa() == 4 && Je(a) == 2) {
      Q(a.a, Ee(a, "Local request error detected and ignored"))
    }else {
      if(a.hc && a.qa() == 4) {
        cd.setTimeout(A(a.ue, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), a.qa() == 4) {
          Q(a.a, Ee(a, "Request complete"));
          a.ka = !1;
          var b;
          a: {
            switch(Je(a)) {
              case 0:
                b = (b = w(a.Db) ? a.Db.match(me)[1] || k : a.Db.ia) ? De.test(b) : self.location ? De.test(self.location.protocol) : !0;
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
            a.Ab = 6;
            var c;
            try {
              c = a.qa() > 2 ? a.f.statusText : ""
            }catch(d) {
              Q(a.a, "Can not get status: " + d.message), c = ""
            }
            a.Bb = c + " [" + Je(a) + "]";
            Ge(a)
          }
          He(a)
        }
      }
    }
  }
}
function He(a, b) {
  if(a.f) {
    var c = a.f, d = a.Bc[0] ? t : k;
    a.f = k;
    a.Bc = k;
    if(a.Ka) {
      cd.clearTimeout(a.Ka), a.Ka = k
    }
    b || (pe(c), a.dispatchEvent("ready"), re());
    var f = qe;
    if(f.P) {
      var g = y(c);
      Q(f.a, "Closing XHR : " + g);
      delete f.Cc[g];
      for(var i in f.Aa) {
        ab(f.Aa[i], g), f.Aa[i].length == 0 && delete f.Aa[i]
      }
    }
    try {
      c.onreadystatechange = d
    }catch(j) {
      Nd(a.a, "Problem encountered resetting onreadystatechange: " + j.message)
    }
  }
}
q.ce = function() {
  return!!this.f
};
q.qa = function() {
  return this.f ? this.f.readyState : 0
};
function Je(a) {
  try {
    return a.qa() > 2 ? a.f.status : -1
  }catch(b) {
    return Od(a.a, "Can not get status: " + b.message), -1
  }
}
q.getResponseHeader = function(a) {
  return this.f && this.qa() == 4 ? this.f.getResponseHeader(a) : h
};
function Ee(a, b) {
  return b + " [" + a.he + " " + a.Db + " " + Je(a) + "]"
}
;function Ke(a, b, c) {
  K.call(this);
  this.na = b;
  this.T = a;
  this.Ic = c
}
D(Ke, K);
q = Ke.prototype;
q.a = S("cw.net.XHRMaster");
q.xa = -1;
q.ad = function(a, b, c) {
  this.Ic.__XHRSlave_makeRequest(this.T, a, b, c)
};
q.qa = m("xa");
q.fd = function(a, b) {
  b != Le && Nd(this.a, G(this.T) + " got status != OK: " + b + "; XHRSlave should dispose soon.");
  Me(this.na);
  a: {
    var c = this.na;
    c.xc = !0;
    try {
      for(var d = !1, f = [], g = 0, i = a.length;g < i;g++) {
        if(c.aa) {
          c.a.info(c.p() + " returning from loop because we're disposed.");
          break a
        }
        if(d = Ne(c, a[g], f)) {
          break
        }
      }
      f.length && Oe(c, f);
      c.xc = !1;
      c.z.length && c.ea();
      d && (R(c.a, c.p() + " closeSoon is true.  Frames were: " + G(a)), c.e())
    }finally {
      c.xc = !1
    }
  }
};
q.gd = function(a) {
  Q(this.a, "ongotheaders_: " + G(a));
  var b = k;
  "Content-Length" in a && (b = od(a["Content-Length"]));
  a = this.na;
  Q(a.a, a.p() + " got Content-Length: " + b);
  a.Z == Pe && (b == k && (Od(a.a, "Expected to receive a valid Content-Length, but did not."), b = 5E5), Qe(a, 2E3 + b / 3072 * 1E3))
};
q.hd = function(a) {
  a != 1 && Q(this.a, this.na.p() + "'s XHR's readyState is " + a);
  this.xa = a;
  this.xa >= 2 && Me(this.na)
};
q.ed = function() {
  this.na.e()
};
q.b = function() {
  Ke.d.b.call(this);
  delete W.ha[this.T];
  this.Ic.__XHRSlave_dispose(this.T);
  delete this.Ic
};
function Re() {
  K.call(this);
  this.ha = {}
}
D(Re, K);
q = Re.prototype;
q.a = S("cw.net.XHRMasterTracker");
q.Id = function(a, b) {
  var c = "_" + kd(), d = new Ke(c, a, b);
  return this.ha[c] = d
};
q.fd = function(a, b, c) {
  var b = bb(b), d = this.ha[a];
  d ? d.fd(b, c) : Nd(this.a, "onframes_: no master for " + G(a))
};
q.gd = function(a, b) {
  var c = this.ha[a];
  c ? c.gd(b) : Nd(this.a, "ongotheaders_: no master for " + G(a))
};
q.hd = function(a, b) {
  var c = this.ha[a];
  c ? c.hd(b) : Nd(this.a, "onreadystatechange_: no master for " + G(a))
};
q.ed = function(a) {
  var b = this.ha[a];
  b ? (delete this.ha[b.T], b.ed()) : Nd(this.a, "oncomplete_: no master for " + G(a))
};
q.b = function() {
  Re.d.b.call(this);
  for(var a = Ra(this.ha);a.length;) {
    a.pop().e()
  }
  delete this.ha
};
var W = new Re;
s.__XHRMaster_onframes = A(W.fd, W);
s.__XHRMaster_oncomplete = A(W.ed, W);
s.__XHRMaster_ongotheaders = A(W.gd, W);
s.__XHRMaster_onreadystatechange = A(W.hd, W);
function Se() {
  Te.info("Waiting for XDRFrames (may take a while)...");
  var a = new dd, b = s.__XDRSetup.done.length, c;
  s.__XDRSetup.done = {push:function() {
    b += 1;
    c = 2 - b;
    c || (Te.info("Got XDRFrames after waiting."), a.ob(k))
  }};
  c = 2 - b;
  c || (Te.info("Already had all XDRFrames."), a.ob(k));
  return a
}
var Te = S("cw.net.waitForXDRFrames");
function Ue(a, b, c, d) {
  this.pc = a;
  this.xe = b;
  this.tc = c;
  this.He = d;
  (!(this.pc.indexOf("http://") == 0 || this.pc.indexOf("https://") == 0) || !(this.tc.indexOf("http://") == 0 || this.tc.indexOf("https://") == 0)) && e(Error("primaryUrl and secondUrl must be absolute URLs with http or https scheme"));
  a = this.xe.location.href;
  ne(this.pc, a) || e(Error("primaryWindow not same origin as primaryUrl: " + a));
  a = this.He.location.href;
  ne(this.tc, a) || e(Error("secondaryWindow not same origin as secondaryUrl: " + a))
}
var Ve = new $d(";)]}"), We = "disconnected_" + ad++;
function Xe(a, b, c, d) {
  K.call(this);
  this.D = a;
  this.ze = b;
  this.ca = c;
  this.Ke = d;
  this.Sb = new qd;
  this.Rb = kd() + kd();
  this.wa = new Pb;
  this.Wc = new Rb;
  this.Vb = k;
  if(I) {
    this.Vb = Uc(s, "load", this.Ff, !1, this)
  }
}
D(Xe, bd);
q = Xe.prototype;
q.a = S("cw.net.Stream");
q.ie = new Ob(-1, []);
q.je = new Ob(-1, []);
q.wf = 50;
q.vf = 1048576;
q.rd = !1;
q.md = !1;
q.j = 1;
q.Pe = -1;
q.i = k;
q.w = k;
q.Ib = k;
q.sd = 0;
q.we = 0;
q.Ge = 0;
q.Bf = !0;
q.B = function(a, b) {
  a.push("<Stream id=");
  F(this.Rb, a, b);
  a.push(", state=", String(this.j));
  a.push(", primary=");
  F(this.i, a, b);
  a.push(", secondary=");
  F(this.w, a, b);
  a.push(", resetting=");
  F(this.Ib, a, b)
};
function Ye(a) {
  var b = [-1];
  a.i && b.push(a.i.cb);
  a.w && b.push(a.w.cb);
  return Math.max.apply(Math.max, b)
}
function Ze(a) {
  if(a.j != 1) {
    var b = a.wa.H.s() != 0, c = Sb(a.Wc), d = !c.k(a.je) && !(a.i && c.k(a.i.ab) || a.w && c.k(a.w.ab)), f = Ye(a);
    if((b = b && f < a.wa.Oa) || d) {
      var g = b && d ? "string(s)+SACK" : b ? "string(s)" : d ? "SACK" : "nothing!?";
      if(a.i.pb) {
        R(a.a, "tryToSend_: writing " + g + " to primary");
        if(d && (d = a.i, c != d.ab)) {
          !d.ja && !d.z.length && $e(d), d.z.push(new V(c)), d.ab = c
        }
        b && af(a.i, a.wa, f + 1);
        a.i.ea()
      }else {
        a.w == k ? a.rd ? (R(a.a, "tryToSend_: creating secondary to send " + g), a.w = bf(a, !1), b && af(a.w, a.wa, f + 1), a.w.ea()) : (R(a.a, "tryToSend_: not creating a secondary because Stream might not exist on server"), a.md = !0) : R(a.a, "tryToSend_: need to send " + g + ", but can't right now")
      }
    }
  }
}
q.Ff = function() {
  this.Vb = k;
  if(this.i && this.i.Xa()) {
    this.a.info("restartHttpRequests_: aborting primary");
    var a = this.i;
    a.Dc = !0;
    a.e()
  }
  if(this.w && this.w.Xa()) {
    this.a.info("restartHttpRequests_: aborting secondary"), a = this.w, a.Dc = !0, a.e()
  }
};
function cf(a, b) {
  a.j > 2 && e(Error("sendStrings: Can't send strings in state " + a.j));
  if(b.length) {
    if(a.Bf) {
      for(var c = 0;c < b.length;c++) {
        var d = b[c];
        /^([ -~]*)$/.test(d) || e(Error("sendStrings: string #" + c + " has illegal chars: " + G(d)))
      }
    }
    a.wa.extend(b);
    Ze(a)
  }
}
function bf(a, b) {
  var c;
  a.ca instanceof Ue ? c = (Boolean(Number((new df(document.location)).R.get("httpStreaming", "0"))) ? 2 : 1) == 1 ? Pe : ef : e(Error("Don't support endpoint " + G(a.ca)));
  a.Pe += 1;
  c = new ff(a.D, a, a.Pe, c, a.ca, b);
  R(a.a, "Created: " + c.p());
  a.Sb.add(c);
  return c
}
function gf(a, b, c) {
  var d = new hf(a.D, a, b, c);
  R(a.a, "Created: " + d.p() + ", delay=" + b + ", times=" + c);
  a.Sb.add(d);
  return d
}
function jf(a, b) {
  a.Sb.remove(b) || e(Error("transportOffline_: Transport was not removed?"));
  Q(a.a, "Offline: " + b.p());
  b.oc ? a.sd += b.oc : a.sd = 0;
  a.sd >= 1 && (a.a.info("transportOffline_: Doing an internal reset because streamPenalty_ reached limit."), kf("stream penalty reached limit", !1), a.e());
  if(a.j > 2) {
    a.j == 3 && b.Ve ? (Q(a.a, "Disposing because resettingTransport_ is done."), a.e()) : Q(a.a, "Not creating a transport because Stream is in state " + a.j)
  }else {
    var c;
    var d;
    c = b instanceof hf;
    if(!c && b.Dc) {
      var f = I ? le ? [0, 1] : [9, 20] : [0, 0];
      c = f[0];
      d = f[1];
      R(a.a, "getDelayForNextTransport_: " + G({delay:c, times:d}))
    }else {
      d = b.Fd();
      if(b == a.i) {
        if(d) {
          f = ++a.we
        }else {
          if(!c) {
            f = a.we = 0
          }
        }
      }else {
        if(d) {
          f = ++a.Ge
        }else {
          if(!c) {
            f = a.Ge = 0
          }
        }
      }
      if(c || !f) {
        d = c = 0, R(a.a, "getDelayForNextTransport_: " + G({count:f, delay:c, times:d}))
      }else {
        var g = 2E3 * Math.min(f, 3), i = Math.floor(Math.random() * 4E3) - 2E3, j = Math.max(0, b.Qe - b.ud);
        d = (c = Math.max(0, g + i - j)) ? 1 : 0;
        R(a.a, "getDelayForNextTransport_: " + G({count:f, base:g, variance:i, oldDuration:j, delay:c, times:d}))
      }
    }
    c = [c, d];
    f = c[0];
    c = c[1];
    if(b == a.i) {
      a.i = k, c ? a.i = gf(a, f, c) : (f = Ye(a), a.i = bf(a, !0), af(a.i, a.wa, f + 1)), a.i.ea()
    }else {
      if(b == a.w) {
        a.w = k, c ? (a.w = gf(a, f, c), a.w.ea()) : Ze(a)
      }
    }
  }
}
q.reset = function(a) {
  this.j > 2 && e(Error("reset: Can't send reset in state " + this.j));
  this.j = 3;
  this.i && this.i.pb ? (this.a.info("reset: Sending ResetFrame over existing primary."), lf(this.i, a), this.i.ea()) : (this.i && (Q(this.a, "reset: Disposing primary before sending ResetFrame."), this.i.e()), this.w && (Q(this.a, "reset: Disposing secondary before sending ResetFrame."), this.w.e()), this.a.info("reset: Creating resettingTransport_ for sending ResetFrame."), this.Ib = bf(this, !1), lf(this.Ib, a), this.Ib.ea());
  kf(a, !0)
};
function mf(a, b, c, d) {
  var f;
  f = a.Wc;
  for(var g = a.wf, i = a.vf, j = [], n = !1, l = 0, z = c.length;l < z;l++) {
    var o = c[l], r = o[0], o = o[1];
    if(r == f.$a + 1) {
      f.$a += 1;
      for(j.push(o);;) {
        r = f.$a + 1;
        o = f.za.get(r, Tb);
        if(o === Tb) {
          break
        }
        j.push(o[0]);
        f.za.remove(r);
        f.ya -= o[1];
        f.$a = r
      }
    }else {
      if(!(r <= f.$a)) {
        if(g != k && f.za.s() >= g) {
          n = !0;
          break
        }
        var B = Nb(o);
        if(i != k && f.ya + B > i) {
          n = !0;
          break
        }
        f.za.set(r, [o, B]);
        f.ya += B
      }
    }
  }
  f.za.sa() && f.za.clear();
  f = [j, n];
  c = f[0];
  f = f[1];
  if(c) {
    g = a.ze;
    for(i = 0;i < c.length;i++) {
      if(j = g, n = vb(c[i]), l = n[1], n[0] == 1) {
        l = j.ve.Kc(nf.wb(), l);
        j = mb(l, 1);
        n = mb(l, 2);
        l = mb(l, 3);
        (j = ua(j)) || (j = "[No title]");
        z = ra(ya(l));
        r = document;
        l = r.createElement("div");
        H ? (l.innerHTML = "<br>" + z, l.removeChild(l.firstChild)) : l.innerHTML = z;
        if(l.childNodes.length == 1) {
          l = l.removeChild(l.firstChild)
        }else {
          for(z = r.createDocumentFragment();l.firstChild;) {
            z.appendChild(l.firstChild)
          }
          l = z
        }
        j = of("span", {}, of("a", {href:n, "class":"ljpost-title-link"}, j), of("span", {}, "\u00a0"), l);
        pf(j)
      }
    }
  }
  a.j == 3 || a.aa || (d || Ze(a), f && a.j == 2 && (Nd(b.a, b.p() + "'s peer caused rwin overflow."), b.e()))
}
q.start = function() {
  this.j = 2;
  this.i = bf(this, !0);
  af(this.i, this.wa, k);
  this.i.ea()
};
q.b = function() {
  this.a.info(G(this) + " in disposeInternal.");
  this.j = 4;
  for(var a = this.Sb.F(), b = 0;b < a.length;b++) {
    a[b].e()
  }
  this.dispatchEvent({type:We});
  if(I && this.Vb) {
    O(this.Vb), this.Vb = k
  }
  delete this.Sb;
  delete this.i;
  delete this.w;
  delete this.Ib;
  delete this.ze;
  Xe.d.b.call(this)
};
var Pe = 1, ef = 2, qf = 3;
function ff(a, b, c, d, f, g) {
  K.call(this);
  this.D = a;
  this.t = b;
  this.lb = c;
  this.Z = d;
  this.ca = f;
  this.z = [];
  this.Na = g;
  this.pb = !this.Xa();
  this.hb = this.Z != Pe;
  this.Ze = A(this.Of, this)
}
D(ff, K);
q = ff.prototype;
q.a = S("cw.net.ClientTransport");
q.n = k;
q.ud = k;
q.Qe = k;
q.qc = k;
q.ja = !1;
q.xc = !1;
q.ab = k;
q.Rc = 0;
q.cb = -1;
q.jd = -1;
q.Ve = !1;
q.Dc = !1;
q.oc = 0;
q.yb = !1;
q.B = function(a) {
  a.push("<ClientTransport #", String(this.lb), ", becomePrimary=", String(this.Na), ">")
};
q.p = function() {
  return(this.Na ? "Prim. T#" : "Sec. T#") + this.lb
};
q.Fd = function() {
  return!(!this.yb && this.Rc)
};
q.Xa = function() {
  return this.Z == Pe || this.Z == ef
};
function Oe(a, b) {
  gb(b, function(a, b) {
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
  });
  mf(a.t, a, b, !a.hb)
}
function Ne(a, b, c) {
  try {
    var d = ie(b);
    a.Rc += 1;
    Q(a.a, a.p() + " RECV " + G(d));
    var f;
    a.Rc == 1 && !d.k(Ve) && a.Xa() ? (Od(a.a, a.p() + " is closing soon because got bad preamble: " + G(d)), f = !0) : f = !1;
    if(f) {
      return!0
    }
    if(d instanceof Zd) {
      if(!/^([ -~]*)$/.test(d.kb)) {
        return a.yb = !0
      }
      a.jd += 1;
      c.push([a.jd, d.kb])
    }else {
      if(d instanceof V) {
        var g = a.t, i = d.U;
        g.ie = i;
        var j = g.wa, n = i.Ma, c = !1;
        n > j.Oa && (c = !0);
        for(var l = Qb(j).concat(), d = 0;d < l.length;d++) {
          var z = l[d];
          if(z > n) {
            break
          }
          var o = j.H.m[z][1];
          j.H.remove(z);
          j.ya -= o
        }
        for(d = 0;d < i.Ja.length;d++) {
          var r = i.Ja[d];
          r > j.Oa && (c = !0);
          j.H.J(r) && (o = j.H.m[r][1], j.H.remove(r), j.ya -= o)
        }
        j.H.sa() && j.H.clear();
        if(c) {
          return Od(a.a, a.p() + " is closing soon because got bad SackFrame"), a.yb = !0
        }
      }else {
        if(d instanceof ae) {
          a.jd = d.Lb - 1
        }else {
          if(d instanceof ce) {
            a.t.je = d.Cb
          }else {
            if(d instanceof ee) {
              return R(a.a, a.p() + " is closing soon because got YouCloseItFrame"), !0
            }else {
              if(d instanceof he) {
                return a.yb = !0, d.reason == "stream_attach_failure" ? a.oc += 1 : d.reason == "acked_unsent_strings" && (a.oc += 0.5), R(a.a, a.p() + " is closing soon because got " + G(d)), !0
              }else {
                if(!(d instanceof $d)) {
                  if(d instanceof de) {
                    var B = a.t, rh = !a.hb;
                    R(B.a, "Stream is now confirmed to exist at server.");
                    B.rd = !0;
                    if(B.md && !rh) {
                      B.md = !1, Ze(B)
                    }
                  }else {
                    if(c.length) {
                      Oe(a, c);
                      if(!v(c)) {
                        for(var Bd = c.length - 1;Bd >= 0;Bd--) {
                          delete c[Bd]
                        }
                      }
                      c.length = 0
                    }
                    if(d instanceof fe) {
                      var sh = a.t;
                      kf(d.Hb, d.nb);
                      sh.e();
                      return!0
                    }else {
                      e(Error(a.p() + " had unexpected state in framesReceived_."))
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
    return zf instanceof T || e(zf), Od(a.a, a.p() + " is closing soon because got InvalidFrame: " + G(b)), a.yb = !0
  }
  return!1
}
q.Of = function() {
  Od(this.a, this.p() + " timed out due to lack of connection or no data being received.");
  this.e()
};
function rf(a) {
  if(a.qc != k) {
    a.D.I.clearTimeout(a.qc), a.qc = k
  }
}
function Qe(a, b) {
  rf(a);
  b = Math.round(b);
  a.qc = a.D.I.setTimeout(a.Ze, b);
  Q(a.a, a.p() + "'s receive timeout set to " + b + " ms.")
}
function Me(a) {
  a.Z != Pe && (a.Z == qf || a.Z == ef ? Qe(a, 13500) : e(Error("peerStillAlive_: Don't know what to do for this transportType: " + a.Z)))
}
function $e(a) {
  var b = new Xd;
  b.lb = a.lb;
  b.ye = 2;
  b.$d = 2;
  if(!a.t.rd) {
    b.De = !0;
    var c = sf.get(window.location.protocol == "https:" ? a.t.Ke.qf : a.t.Ke.of);
    b.Jd = (u(c) ? c : k) + "|" + s.CSRF_TOKEN
  }
  b.Rb = a.t.Rb;
  b.td = a.hb;
  if(b.td) {
    b.se = 4096
  }
  b.oe = 3E5;
  b.me = a.hb ? Math.floor(10) : 0;
  b.Re = !1;
  if(a.Na) {
    b.Le = k, b.bd = Math.floor((a.hb ? 358E4 : 25E3) / 1E3)
  }
  b.U = Sb(a.t.Wc);
  b.kc = a.t.ie;
  a.z.push(b);
  a.ab = b.U
}
q.ea = function() {
  this.ja && !this.pb && e(Error("flush_: Can't flush more than once to this transport."));
  if(this.xc) {
    R(this.a, this.p() + " flush_: Returning because spinning right now.")
  }else {
    var a = this.ja;
    this.ja = !0;
    !a && !this.z.length && $e(this);
    for(a = 0;a < this.z.length;a++) {
      Q(this.a, this.p() + " SEND " + G(this.z[a]))
    }
    if(this.Xa()) {
      for(var a = [], b = 0, c = this.z.length;b < c;b++) {
        this.z[b].Q(a), a.push("\n")
      }
      this.z = [];
      a = a.join("");
      b = this.Na ? this.ca.pc : this.ca.tc;
      this.n = W.Id(this, this.Na ? this.ca.xe : this.ca.He);
      this.ud = this.D.I === cd ? C() : this.D.I.getTime();
      this.n.ad(b, "POST", a);
      Qe(this, 3E3 * (1.5 + (b.indexOf("https://") == 0 ? 3 : 1)) + 4E3 + (this.hb ? 0 : this.Na ? 25E3 : 2))
    }else {
      if(this.Z == qf) {
        a = [];
        b = 0;
        for(c = this.z.length;b < c;b++) {
          a.push(this.z[b].O())
        }
        this.z = [];
        this.n ? this.n.Ad(a) : (b = this.ca, this.n = new Td(this), this.n.qd = b.hg.Id(this.n), this.ud = this.D.I === cd ? C() : this.D.I.getTime(), this.n.Ed(b.host, b.port), this.n.aa || (this.n.Ad(a), this.n.aa || Qe(this, 8E3)))
      }else {
        e(Error("flush_: Don't know what to do for this transportType: " + this.Z))
      }
    }
  }
};
function af(a, b, c) {
  !a.ja && !a.z.length && $e(a);
  for(var d = Math.max(c, a.cb + 1), f = Qb(b), c = [], g = 0;g < f.length;g++) {
    var i = f[g];
    (d == k || i >= d) && c.push([i, b.H.m[i][0]])
  }
  b = 0;
  for(d = c.length;b < d;b++) {
    g = c[b], f = g[0], g = g[1], (a.cb == -1 || a.cb + 1 != f) && a.z.push(new ae(f)), a.z.push(new Zd(g)), a.cb = f
  }
}
q.b = function() {
  this.a.info(this.p() + " in disposeInternal.");
  ff.d.b.call(this);
  this.Qe = this.D.I === cd ? C() : this.D.I.getTime();
  this.z = [];
  rf(this);
  this.n && this.n.e();
  var a = this.t;
  this.t = k;
  jf(a, this)
};
function lf(a, b) {
  !a.ja && !a.z.length && $e(a);
  a.z.push(new fe(b, !0));
  a.Ve = !0
}
function hf(a, b, c, d) {
  K.call(this);
  this.D = a;
  this.t = b;
  this.Md = c;
  this.Hd = d
}
D(hf, K);
q = hf.prototype;
q.ja = !1;
q.pb = !1;
q.fc = k;
q.ab = k;
q.a = S("cw.net.DoNothingTransport");
function tf(a) {
  a.fc = a.D.I.setTimeout(function() {
    a.fc = k;
    a.Hd--;
    a.Hd ? tf(a) : a.e()
  }, a.Md)
}
q.ea = function() {
  this.ja && !this.pb && e(Error("flush_: Can't flush more than once to DoNothingTransport."));
  this.ja = !0;
  tf(this)
};
q.B = function(a) {
  a.push("<DoNothingTransport delay=", String(this.Md), ">")
};
q.Xa = p(!1);
q.p = p("Wast. T");
q.Fd = p(!1);
q.b = function() {
  this.a.info(this.p() + " in disposeInternal.");
  hf.d.b.call(this);
  this.fc != k && this.D.I.clearTimeout(this.fc);
  var a = this.t;
  this.t = k;
  jf(a, this)
};
function df(a, b) {
  var c;
  a instanceof df ? (this.ib(b == k ? a.X : b), uf(this, a.ia), vf(this, a.Ub), wf(this, a.Qa), xf(this, a.fb), yf(this, a.Ha), Af(this, a.R.N()), Bf(this, a.vb)) : a && (c = String(a).match(me)) ? (this.ib(!!b), uf(this, c[1] || "", !0), vf(this, c[2] || "", !0), wf(this, c[3] || "", !0), xf(this, c[4]), yf(this, c[5] || "", !0), Af(this, c[6] || "", !0), Bf(this, c[7] || "", !0)) : (this.ib(!!b), this.R = new Cf(k, this, this.X))
}
q = df.prototype;
q.ia = "";
q.Ub = "";
q.Qa = "";
q.fb = k;
q.Ha = "";
q.vb = "";
q.tf = !1;
q.X = !1;
q.toString = function() {
  if(this.V) {
    return this.V
  }
  var a = [];
  this.ia && a.push(Df(this.ia, Ef), ":");
  if(this.Qa) {
    a.push("//");
    this.Ub && a.push(Df(this.Ub, Ef), "@");
    var b;
    b = this.Qa;
    b = w(b) ? encodeURIComponent(b) : k;
    a.push(b);
    this.fb != k && a.push(":", String(this.fb))
  }
  this.Ha && (this.Qa && this.Ha.charAt(0) != "/" && a.push("/"), a.push(Df(this.Ha, this.Ha.charAt(0) == "/" ? Ff : Gf)));
  (b = String(this.R)) && a.push("?", b);
  this.vb && a.push("#", Df(this.vb, Hf));
  return this.V = a.join("")
};
q.N = function() {
  var a = this.ia, b = this.Ub, c = this.Qa, d = this.fb, f = this.Ha, g = this.R.N(), i = this.vb, j = new df(k, this.X);
  a && uf(j, a);
  b && vf(j, b);
  c && wf(j, c);
  d && xf(j, d);
  f && yf(j, f);
  g && Af(j, g);
  i && Bf(j, i);
  return j
};
function uf(a, b, c) {
  If(a);
  delete a.V;
  a.ia = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.ia) {
    a.ia = a.ia.replace(/:$/, "")
  }
}
function vf(a, b, c) {
  If(a);
  delete a.V;
  a.Ub = c ? b ? decodeURIComponent(b) : "" : b
}
function wf(a, b, c) {
  If(a);
  delete a.V;
  a.Qa = c ? b ? decodeURIComponent(b) : "" : b
}
function xf(a, b) {
  If(a);
  delete a.V;
  b ? (b = Number(b), (isNaN(b) || b < 0) && e(Error("Bad port number " + b)), a.fb = b) : a.fb = k
}
function yf(a, b, c) {
  If(a);
  delete a.V;
  a.Ha = c ? b ? decodeURIComponent(b) : "" : b
}
function Af(a, b, c) {
  If(a);
  delete a.V;
  b instanceof Cf ? (a.R = b, a.R.wd = a, a.R.ib(a.X)) : (c || (b = Df(b, Jf)), a.R = new Cf(b, a, a.X))
}
function Bf(a, b, c) {
  If(a);
  delete a.V;
  a.vb = c ? b ? decodeURIComponent(b) : "" : b
}
function If(a) {
  a.tf && e(Error("Tried to modify a read-only Uri"))
}
q.ib = function(a) {
  this.X = a;
  this.R && this.R.ib(a);
  return this
};
var Kf = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Df(a, b) {
  var c = k;
  w(a) && (c = a, Kf.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, Lf)));
  return c
}
function Lf(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Ef = /[#\/\?@]/g, Gf = /[\#\?:]/g, Ff = /[\#\?]/g, Jf = /[\#\?@]/g, Hf = /#/g;
function Cf(a, b, c) {
  this.ba = a || k;
  this.wd = b || k;
  this.X = !!c
}
function Mf(a) {
  if(!a.l && (a.l = new Ib, a.ba)) {
    for(var b = a.ba.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), f = k, g = k;
      d >= 0 ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = Nf(a, f);
      a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
  }
}
q = Cf.prototype;
q.l = k;
q.g = k;
q.s = function() {
  Mf(this);
  return this.g
};
q.add = function(a, b) {
  Mf(this);
  Of(this);
  a = Nf(this, a);
  if(this.J(a)) {
    var c = this.l.get(a);
    v(c) ? c.push(b) : this.l.set(a, [c, b])
  }else {
    this.l.set(a, b)
  }
  this.g++;
  return this
};
q.remove = function(a) {
  Mf(this);
  a = Nf(this, a);
  if(this.l.J(a)) {
    Of(this);
    var b = this.l.get(a);
    v(b) ? this.g -= b.length : this.g--;
    return this.l.remove(a)
  }
  return!1
};
q.clear = function() {
  Of(this);
  this.l && this.l.clear();
  this.g = 0
};
q.sa = function() {
  Mf(this);
  return this.g == 0
};
q.J = function(a) {
  Mf(this);
  a = Nf(this, a);
  return this.l.J(a)
};
q.qb = function(a) {
  var b = this.F();
  return $a(b, a)
};
q.fa = function() {
  Mf(this);
  for(var a = this.l.F(), b = this.l.fa(), c = [], d = 0;d < b.length;d++) {
    var f = a[d];
    if(v(f)) {
      for(var g = 0;g < f.length;g++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
q.F = function(a) {
  Mf(this);
  if(a) {
    if(a = Nf(this, a), this.J(a)) {
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
    for(var b = this.l.F(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      v(d) ? db(a, d) : a.push(d)
    }
  }
  return a
};
q.set = function(a, b) {
  Mf(this);
  Of(this);
  a = Nf(this, a);
  if(this.J(a)) {
    var c = this.l.get(a);
    v(c) ? this.g -= c.length : this.g--
  }
  this.l.set(a, b);
  this.g++;
  return this
};
q.get = function(a, b) {
  Mf(this);
  a = Nf(this, a);
  if(this.J(a)) {
    var c = this.l.get(a);
    return v(c) ? c[0] : c
  }else {
    return b
  }
};
q.toString = function() {
  if(this.ba) {
    return this.ba
  }
  if(!this.l) {
    return""
  }
  for(var a = [], b = 0, c = this.l.fa(), d = 0;d < c.length;d++) {
    var f = c[d], g = wa(f), f = this.l.get(f);
    if(v(f)) {
      for(var i = 0;i < f.length;i++) {
        b > 0 && a.push("&"), a.push(g), f[i] !== "" && a.push("=", wa(f[i])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(g), f !== "" && a.push("=", wa(f)), b++
    }
  }
  return this.ba = a.join("")
};
function Of(a) {
  delete a.Jc;
  delete a.ba;
  a.wd && delete a.wd.V
}
q.N = function() {
  var a = new Cf;
  if(this.Jc) {
    a.Jc = this.Jc
  }
  if(this.ba) {
    a.ba = this.ba
  }
  if(this.l) {
    a.l = this.l.N()
  }
  return a
};
function Nf(a, b) {
  var c = String(b);
  a.X && (c = c.toLowerCase());
  return c
}
q.ib = function(a) {
  a && !this.X && (Mf(this), Of(this), Gb(this.l, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.X = a
};
q.extend = function() {
  for(var a = 0;a < arguments.length;a++) {
    Gb(arguments[a], function(a, c) {
      this.add(c, a)
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
        }catch(f) {
          try {
            c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = !0, a(c.GetVariable("$version"))
          }catch(g) {
          }
        }
      }
    }
  }
})();
function Pf(a, b) {
  this.x = u(a) ? a : 0;
  this.y = u(b) ? b : 0
}
Pf.prototype.N = function() {
  return new Pf(this.x, this.y)
};
Pf.prototype.toString = function() {
  return"(" + this.x + ", " + this.y + ")"
};
function Qf(a, b) {
  this.width = a;
  this.height = b
}
q = Qf.prototype;
q.N = function() {
  return new Qf(this.width, this.height)
};
q.toString = function() {
  return"(" + this.width + " x " + this.height + ")"
};
q.sa = function() {
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
var Rf;
function Sf(a) {
  return(a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
}
function Tf(a) {
  var b = Sf(a), c = fb(arguments, 1), d;
  d = b;
  for(var f = 0, g = 0;g < c.length;g++) {
    $a(d, c[g]) || (d.push(c[g]), f++)
  }
  d = f == c.length;
  a.className = b.join(" ");
  return d
}
function Uf(a) {
  var b = Sf(a), c = fb(arguments, 1), d;
  d = b;
  for(var f = 0, g = 0;g < d.length;g++) {
    $a(c, d[g]) && (eb(d, g--, 1), f++)
  }
  d = f == c.length;
  a.className = b.join(" ");
  return d
}
;var Vf = !H || J("9");
!dc && !H || H && J("9") || dc && J("1.9.1");
var Wf = H && !J("9");
function Xf(a) {
  return a ? new Yf(Zf(a)) : Rf || (Rf = new Yf)
}
function X(a) {
  return w(a) ? document.getElementById(a) : a
}
function $f(a, b) {
  Qa(b, function(b, d) {
    d == "style" ? a.style.cssText = b : d == "class" ? a.className = b : d == "for" ? a.htmlFor = b : d in ag ? a.setAttribute(ag[d], b) : a[d] = b
  })
}
var ag = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function bg() {
  var a = cg.C.parentWindow || cg.C.defaultView || window, b = a.document;
  if(I && !J("500") && !ec) {
    typeof a.innerHeight == "undefined" && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new Qf(a.innerWidth, b)
  }
  a = b.compatMode == "CSS1Compat" ? b.documentElement : b.body;
  return new Qf(a.clientWidth, a.clientHeight)
}
function of() {
  return dg(document, arguments)
}
function dg(a, b) {
  var c = b[0], d = b[1];
  if(!Vf && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', ya(d.name), '"');
    if(d.type) {
      c.push(' type="', ya(d.type), '"');
      var f = {};
      Ua(f, d);
      d = f;
      delete d.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  if(d) {
    w(d) ? c.className = d : v(d) ? Tf.apply(k, [c].concat(d)) : $f(c, d)
  }
  b.length > 2 && eg(a, c, b, 2);
  return c
}
function eg(a, b, c, d) {
  function f(c) {
    c && b.appendChild(w(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    fa(g) && !(ha(g) && g.nodeType > 0) ? Wa(fg(g) ? cb(g) : g, f) : f(g)
  }
}
function gg(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function hg(a, b) {
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
function Zf(a) {
  return a.nodeType == 9 ? a : a.ownerDocument || a.document
}
var ig = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, jg = {IMG:" ", BR:"\n"};
function kg(a) {
  var b = a.getAttributeNode("tabindex");
  if(b && b.specified) {
    return a = a.tabIndex, typeof a == "number" && a >= 0
  }
  return!1
}
function lg(a) {
  var b = [];
  mg(a, b, !1);
  return b.join("")
}
function mg(a, b, c) {
  if(!(a.nodeName in ig)) {
    if(a.nodeType == 3) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in jg) {
        b.push(jg[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          mg(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function fg(a) {
  if(a && typeof a.length == "number") {
    if(ha(a)) {
      return typeof a.item == "function" || typeof a.item == "string"
    }else {
      if(x(a)) {
        return typeof a.item == "function"
      }
    }
  }
  return!1
}
function Yf(a) {
  this.C = a || s.document || document
}
q = Yf.prototype;
q.xb = Xf;
q.h = function(a) {
  return w(a) ? this.C.getElementById(a) : a
};
q.r = function() {
  return dg(this.C, arguments)
};
q.createElement = function(a) {
  return this.C.createElement(a)
};
q.createTextNode = function(a) {
  return this.C.createTextNode(a)
};
q.appendChild = function(a, b) {
  a.appendChild(b)
};
q.append = function(a) {
  eg(Zf(a), a, arguments, 1)
};
q.contains = hg;
var ng = dc ? "MozUserSelect" : I ? "WebkitUserSelect" : k;
function og(a) {
  K.call(this);
  this.Yd = a
}
D(og, K);
var pg = new L(0, 100), qg = [];
function rg(a, b, c, d) {
  v(c) || (qg[0] = c, c = qg);
  for(var f = 0;f < c.length;f++) {
    var g = a, i = N(b, c[f], d || a, !1, a.Yd || a);
    g.c ? g.c[i] = !0 : g.ua ? (g.c = pg.getObject(), g.c[g.ua] = !0, g.ua = k, g.c[i] = !0) : g.ua = i
  }
  return a
}
function sg(a, b, c, d, f, g) {
  if(a.ua || a.c) {
    if(v(c)) {
      for(var i = 0;i < c.length;i++) {
        sg(a, b, c[i], d, f, g)
      }
    }else {
      a: {
        d = d || a;
        g = g || a.Yd || a;
        f = !!f;
        if(b = Wc(b, c, f)) {
          for(c = 0;c < b.length;c++) {
            if(b[c].bb == d && b[c].capture == f && b[c].gc == g) {
              b = b[c];
              break a
            }
          }
        }
        b = k
      }
      if(b) {
        if(b = b.key, O(b), a.c) {
          c = a.c, b in c && delete c[b]
        }else {
          if(a.ua == b) {
            a.ua = k
          }
        }
      }
    }
  }
  return a
}
og.prototype.ld = function() {
  if(this.c) {
    for(var a in this.c) {
      O(a), delete this.c[a]
    }
    Dc(pg, this.c);
    this.c = k
  }else {
    this.ua && O(this.ua)
  }
};
og.prototype.b = function() {
  og.d.b.call(this);
  this.ld()
};
og.prototype.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function tg() {
}
da(tg);
tg.prototype.yf = 0;
tg.Ua();
function ug(a) {
  K.call(this);
  this.Ba = a || Xf();
  this.Kb = vg
}
D(ug, bd);
ug.prototype.rf = tg.Ua();
var vg = k;
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
  e(Error("Invalid component state"))
}
q = ug.prototype;
q.ae = k;
q.G = !1;
q.o = k;
q.Kb = k;
q.xf = k;
q.L = k;
q.ma = k;
q.Yb = k;
q.Sf = !1;
q.h = m("o");
function xg(a) {
  return a.Va || (a.Va = new og(a))
}
q.getParent = m("L");
q.nd = function(a) {
  this.L && this.L != a && e(Error("Method not supported"));
  ug.d.nd.call(this, a)
};
q.xb = m("Ba");
q.r = function() {
  this.o = this.Ba.createElement("div")
};
function yg(a) {
  var b = X("prefs");
  a.G && e(Error("Component already rendered"));
  a.o || a.r();
  b ? b.insertBefore(a.o, k) : a.Ba.C.body.appendChild(a.o);
  (!a.L || a.L.G) && a.Ra()
}
q.Ra = function() {
  this.G = !0;
  zg(this, function(a) {
    !a.G && a.h() && a.Ra()
  })
};
q.tb = function() {
  zg(this, function(a) {
    a.G && a.tb()
  });
  this.Va && this.Va.ld();
  this.G = !1
};
q.b = function() {
  ug.d.b.call(this);
  this.G && this.tb();
  this.Va && (this.Va.e(), delete this.Va);
  zg(this, function(a) {
    a.e()
  });
  !this.Sf && this.o && gg(this.o);
  this.L = this.xf = this.o = this.Yb = this.ma = k
};
q.jb = function(a) {
  this.G && e(Error("Component already rendered"));
  this.Kb = a
};
function zg(a, b) {
  a.ma && Wa(a.ma, b, h)
}
q.removeChild = function(a, b) {
  if(a) {
    var c = w(a) ? a : a.ae || (a.ae = ":" + (a.rf.yf++).toString(36)), d;
    this.Yb && c ? (d = this.Yb, d = c in d ? d[c] : h, d = d || k) : d = k;
    a = d;
    if(c && a) {
      d = this.Yb, c in d && delete d[c], ab(this.ma, a), b && (a.tb(), a.o && gg(a.o)), c = a, c == k && e(Error("Unable to set parent component")), c.L = k, ug.d.nd.call(c, k)
    }
  }
  a || e(Error("Child is not in parent component"));
  return a
};
S("goog.ui.media.FlashObject");
s.__loadFlashObject_callbacks = {};
var Le = 1;
function Ag(a, b) {
  this.Uf = a;
  this.ne = b
}
Ag.prototype.Yc = 0;
Ag.prototype.mc = 0;
Ag.prototype.Qc = !1;
function Bg(a) {
  var b = [];
  if(a.Qc) {
    return[b, 2]
  }
  var c = a.Yc, d = a.Uf.responseText;
  for(a.Yc = d.length;;) {
    c = d.indexOf("\n", c);
    if(c == -1) {
      break
    }
    var f = d.substr(a.mc, c - a.mc), f = f.replace(/\r$/, "");
    if(f.length > a.ne) {
      return a.Qc = !0, [b, 2]
    }
    b.push(f);
    a.mc = c += 1
  }
  return a.Yc - a.mc - 1 > a.ne ? (a.Qc = !0, [b, 2]) : [b, Le]
}
;var Cg = !(H || I && !J("420+"));
function Dg(a, b) {
  this.Oe = a;
  this.T = b
}
D(Dg, K);
q = Dg.prototype;
q.n = k;
q.xa = -1;
q.Rd = !1;
q.Zd = ["Content-Length", "Server", "Date", "Expires", "Keep-Alive", "Content-Type", "Transfer-Encoding", "Cache-Control"];
function Eg(a) {
  var b = Bg(a.Ld), c = b[0], b = b[1], d = s.parent;
  d ? (d.__XHRMaster_onframes(a.T, c, b), b != Le && a.e()) : a.e()
}
q.pf = function() {
  Eg(this);
  if(!this.aa) {
    var a = s.parent;
    a && a.__XHRMaster_oncomplete(this.T);
    this.e()
  }
};
q.Ef = function() {
  var a = s.parent;
  if(a) {
    this.xa = this.n.qa();
    if(this.xa >= 2 && !this.Rd) {
      for(var b = new Ib, c = this.Zd.length;c--;) {
        var d = this.Zd[c];
        try {
          b.set(d, this.n.f.getResponseHeader(d))
        }catch(f) {
        }
      }
      if(b.s() && (this.Rd = !0, a.__XHRMaster_ongotheaders(this.T, Mb(b)), this.aa)) {
        return
      }
    }
    a.__XHRMaster_onreadystatechange(this.T, this.xa);
    Cg && this.xa == 3 && Eg(this)
  }else {
    this.e()
  }
};
q.ad = function(a, b, c) {
  this.n = new Ce;
  N(this.n, "readystatechange", A(this.Ef, this));
  N(this.n, "complete", A(this.pf, this));
  this.n.send(a, b, c, {"Content-Type":"application/octet-stream"});
  this.Ld = new Ag(this.n.f, 1048576)
};
q.b = function() {
  Dg.d.b.call(this);
  delete this.Ld;
  this.n && this.n.e();
  delete this.Oe.Qb[this.T];
  delete this.Oe
};
function Fg() {
  K.call(this);
  this.Qb = {}
}
D(Fg, K);
Fg.prototype.uf = function(a, b, c, d) {
  var f = new Dg(this, a);
  this.Qb[a] = f;
  f.ad(b, c, d)
};
Fg.prototype.df = function(a) {
  (a = this.Qb[a]) && a.e()
};
Fg.prototype.b = function() {
  Fg.d.b.call(this);
  for(var a = Ra(this.Qb);a.length;) {
    a.pop().e()
  }
  delete this.Qb
};
var Gg = new Fg;
s.__XHRSlave_makeRequest = A(Gg.uf, Gg);
s.__XHRSlave_dispose = A(Gg.df, Gg);
function Hg(a) {
  this.C = a
}
var Ig = /\s*;\s*/;
q = Hg.prototype;
q.isEnabled = function() {
  var a = navigator.cookieEnabled;
  if(a && I) {
    var b = "COOKIES_TEST_" + C();
    sf.set(b, "1");
    if(!this.get(b)) {
      return!1
    }
    this.remove(b)
  }
  return a
};
q.set = function(a, b, c, d, f, g) {
  /[;=\s]/.test(a) && e(Error('Invalid cookie name "' + a + '"'));
  /[;\r\n]/.test(b) && e(Error('Invalid cookie value "' + b + '"'));
  u(c) || (c = -1);
  f = f ? ";domain=" + f : "";
  d = d ? ";path=" + d : "";
  g = g ? ";secure" : "";
  c = c < 0 ? "" : c == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(C() + c * 1E3)).toUTCString();
  this.vc(a + "=" + b + f + d + c + g)
};
q.get = function(a, b) {
  for(var c = a + "=", d = (this.Da() || "").split(Ig), f = 0, g;g = d[f];f++) {
    if(g.indexOf(c) == 0) {
      return g.substr(c.length)
    }
  }
  return b
};
q.remove = function(a, b, c) {
  var d = this.J(a);
  this.set(a, "", 0, b, c);
  return d
};
q.fa = function() {
  return Jg(this).ge
};
q.F = function() {
  return Jg(this).Te
};
q.sa = function() {
  return!this.Da()
};
q.s = function() {
  if(!this.Da()) {
    return 0
  }
  return(this.Da() || "").split(Ig).length
};
q.J = function(a) {
  return u(this.get(a))
};
q.qb = function(a) {
  for(var b = Jg(this).Te, c = 0;c < b.length;c++) {
    if(b[c] == a) {
      return!0
    }
  }
  return!1
};
q.clear = function() {
  for(var a = Jg(this).ge, b = a.length - 1;b >= 0;b--) {
    this.remove(a[b])
  }
};
q.vc = function(a) {
  this.C.cookie = a
};
q.Da = function() {
  return this.C.cookie
};
function Jg(a) {
  for(var a = (a.Da() || "").split(Ig), b = [], c = [], d, f, g = 0;f = a[g];g++) {
    d = f.indexOf("="), d == -1 ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)))
  }
  return{ge:b, Te:c}
}
var sf = new Hg(document);
sf.Vf = 3950;
function Kg() {
  this.of = "browsernode_site_uaid";
  this.qf = "browsernode_site_uaid_secure"
}
function Lg() {
  new df(document.location);
  var a = Se();
  gd(a, function() {
    var a = X("xdrframe-1").contentWindow || (I ? X("xdrframe-1").document || X("xdrframe-1").contentWindow.document : X("xdrframe-1").contentDocument || X("xdrframe-1").contentWindow.document).parentWindow || (I ? X("xdrframe-1").document || X("xdrframe-1").contentWindow.document : X("xdrframe-1").contentDocument || X("xdrframe-1").contentWindow.document).defaultView, c = X("xdrframe-2").contentWindow || (I ? X("xdrframe-2").document || X("xdrframe-2").contentWindow.document : X("xdrframe-2").contentDocument || 
    X("xdrframe-2").contentWindow.document).parentWindow || (I ? X("xdrframe-2").document || X("xdrframe-2").contentWindow.document : X("xdrframe-2").contentDocument || X("xdrframe-2").contentWindow.document).defaultView;
    a || e(Error("could not get primaryWindow xdrframe"));
    c || e(Error("could not get secondaryWindow xdrframe"));
    var d = new df(s.__XDRSetup.baseurl1);
    yf(d, "/httpface/");
    var f = new df(s.__XDRSetup.baseurl2);
    yf(f, "/httpface/");
    return new Ue(d.toString(), a, f.toString(), c)
  });
  return a
}
;var Mg;
function nf() {
  kb.apply(this)
}
D(nf, kb);
function Ng() {
  kb.apply(this)
}
D(Ng, kb);
qb(nf, {0:{name:"NewPost", Qd:"browsernode.ljstream_messages.NewPost"}, 1:{name:"title", Sa:9, type:String}, 2:{name:"url", Sa:9, type:String}, 3:{name:"body", Sa:9, type:String}, 4:{name:"num_images", Sa:5, type:Number}, 5:{name:"lang", Sa:9, type:String}});
qb(Ng, {0:{name:"SetPreferences", Qd:"browsernode.ljstream_messages.SetPreferences"}, 1:{name:"include_russian_posts", Sa:8, type:Boolean}});
function Og() {
  this.Ce = C()
}
var Pg = new Og;
Og.prototype.set = aa("Ce");
Og.prototype.reset = function() {
  this.set(C())
};
Og.prototype.get = m("Ce");
function Qg(a) {
  this.kd = a || "";
  this.Mf = Pg
}
Qg.prototype.If = !0;
Qg.prototype.Kf = !0;
Qg.prototype.Jf = !0;
Qg.prototype.Ie = !1;
function Rg(a) {
  if(a < 10) {
    return"0" + a
  }
  return String(a)
}
function Sg(a, b) {
  var c = (a.Me - b) / 1E3, d = c.toFixed(3), f = 0;
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
function Tg(a) {
  Qg.call(this, a)
}
D(Tg, Qg);
Tg.prototype.Ie = !0;
function Ug(a) {
  this.cd = a || 100;
  this.la = []
}
q = Ug.prototype;
q.Eb = 0;
q.add = function(a) {
  this.la[this.Eb] = a;
  this.Eb = (this.Eb + 1) % this.cd
};
q.get = function(a) {
  a = Vg(this, a);
  return this.la[a]
};
q.set = function(a, b) {
  a = Vg(this, a);
  this.la[a] = b
};
q.s = function() {
  return this.la.length
};
q.sa = function() {
  return this.la.length == 0
};
q.clear = function() {
  this.Eb = this.la.length = 0
};
q.F = function() {
  for(var a = this.s(), b = this.s(), c = [], a = this.s() - a;a < b;a++) {
    c[a] = this.get(a)
  }
  return c
};
q.fa = function() {
  for(var a = [], b = this.s(), c = 0;c < b;c++) {
    a[c] = c
  }
  return a
};
q.J = function(a) {
  return a < this.s()
};
q.qb = function(a) {
  for(var b = this.s(), c = 0;c < b;c++) {
    if(this.get(c) == a) {
      return!0
    }
  }
  return!1
};
function Vg(a, b) {
  b >= a.la.length && e(Error("Out of bounds exception"));
  if(a.la.length < a.cd) {
    return b
  }
  return(a.Eb + Number(b)) % a.cd
}
;function Wg(a, b) {
  this.ra = a || "";
  this.kd = b || "";
  this.eb = [];
  this.sc = new Ug(Xg);
  this.Df = A(this.Ye, this);
  this.hf = new Tg(this.kd);
  this.gf = {};
  if(!0 != this.de) {
    this.de = !0;
    var c = Sd(), d = this.Df;
    if(!c.zb) {
      c.zb = []
    }
    c.zb.push(d)
  }
  this.P = Yg(this.ra, "enabled") == "1";
  s.setInterval(A(this.Gf, this), 7500)
}
var Xg = 500;
q = Wg.prototype;
q.Ue = "LOGGING";
q.ef = !1;
q.u = k;
q.yd = !1;
q.de = !1;
q.Cd = k;
q.Zc = C();
q.Ga = function() {
  this.P && Zg(this)
};
q.isEnabled = m("P");
q.Nb = function(a) {
  if(this.P = a) {
    Zg(this), this.u && this.Ac()
  }
  this.vc("enabled", a ? "1" : "0")
};
function $g(a) {
  return!!a.u && !a.u.closed
}
q.af = function() {
  this.sc.clear();
  $g(this) && this.Ac()
};
q.Ye = function(a) {
  if(!this.gf[a.ke]) {
    var b = this.hf, c;
    switch(a.ga.value) {
      case Ad.value:
        c = "dbg-sh";
        break;
      case Cd.value:
        c = "dbg-sev";
        break;
      case Dd.value:
        c = "dbg-w";
        break;
      case Ed.value:
        c = "dbg-i";
        break;
      default:
        c = "dbg-f"
    }
    var d = [];
    d.push(b.kd, " ");
    if(b.If) {
      var f = new Date(a.Me);
      d.push("[", Rg(f.getFullYear() - 2E3) + Rg(f.getMonth() + 1) + Rg(f.getDate()) + " " + Rg(f.getHours()) + ":" + Rg(f.getMinutes()) + ":" + Rg(f.getSeconds()) + "." + Rg(Math.floor(f.getMilliseconds() / 10)), "] ")
    }
    b.Kf && d.push("[", Ea(Sg(a, b.Mf.get())), "s] ");
    b.Jf && d.push("[", ya(a.ke), "] ");
    d.push('<span class="', c, '">', xa(Ea(ya(a.qe))));
    b.Ie && a.Pc && d.push("<br>", xa(Ea(a.Oc || "")));
    d.push("</span><br>");
    b = d.join("");
    this.P ? (Zg(this), this.sc.add(b), ah(this, b)) : this.sc.add(b);
    this.ef && a.ga.value >= Cd.value && this.Nb(!0)
  }
};
function ah(a, b) {
  a.eb.push(b);
  s.clearTimeout(a.Cd);
  C() - a.Zc > 750 ? a.zd() : a.Cd = s.setTimeout(A(a.zd, a), 250)
}
q.zd = function() {
  this.Zc = C();
  if($g(this)) {
    var a = this.u.document.body, a = a && a.scrollHeight - (a.scrollTop + a.clientHeight) <= 100;
    this.u.document.write(this.eb.join(""));
    this.eb.length = 0;
    a && this.u.scrollTo(0, 1E6)
  }
};
function bh(a) {
  for(var b = a.sc.F(), c = 0;c < b.length;c++) {
    ah(a, b[c])
  }
}
function Zg(a) {
  if(!$g(a) && !a.yd) {
    var b = a.Da("dbg", "0,0,800,500").split(","), c = Number(b[0]), d = Number(b[1]), f = Number(b[2]), b = Number(b[3]);
    a.yd = !0;
    a.u = window.open("", H ? a.ra.replace(/[\s\-\.\,]/g, "_") : a.ra, "width=" + f + ",height=" + b + ",toolbar=no,resizable=yes,scrollbars=yes,left=" + c + ",top=" + d + ",status=no,screenx=" + c + ",screeny=" + d);
    if(!a.u && !a.Lf) {
      alert("Logger popup was blocked"), a.Lf = !0
    }
    a.yd = !1;
    a.u && a.Ac()
  }
}
q.cc = p("*{font:normal 14px monospace;}.dbg-sev{color:#F00}.dbg-w{color:#E92}.dbg-sh{background-color:#fd4;font-weight:bold;color:#000}.dbg-i{color:#666}.dbg-f{color:#999}.dbg-ev{color:#0A0}.dbg-m{color:#990}");
q.Ac = function() {
  $g(this) || (this.u.document.open(), ah(this, "<style>" + this.cc() + '</style><hr><div class="dbg-ev" style="text-align:center">' + this.Ue + "<br><small>Logger: " + this.ra + "</small></div><hr>"), bh(this))
};
q.vc = function(a, b) {
  a += this.ra;
  document.cookie = a + "=" + encodeURIComponent(b) + ";path=/;expires=" + (new Date(C() + 2592E6)).toUTCString()
};
q.Da = function(a, b) {
  return Yg(this.ra, a, b)
};
function Yg(a, b, c) {
  var a = b + a, b = String(document.cookie), d = b.indexOf(a + "=");
  return d != -1 ? (c = b.indexOf(";", d), decodeURIComponent(b.substring(d + a.length + 1, c == -1 ? b.length : c))) : c || ""
}
q.Gf = function() {
  $g(this) && this.vc("dbg", (this.u.screenX || this.u.screenLeft || 0) + "," + (this.u.screenY || this.u.screenTop || 0) + "," + (this.u.outerWidth || 800) + "," + (this.u.outerHeight || 500))
};
function ch(a, b) {
  Wg.call(this, a, b)
}
D(ch, Wg);
q = ch.prototype;
q.zd = function() {
  this.Zc = C();
  if($g(this)) {
    for(var a = this.K.h("log"), b = a.scrollHeight - (a.scrollTop + a.offsetHeight) <= 100, c = 0;c < this.eb.length;c++) {
      var d = this.K.r("div", "logmsg");
      d.innerHTML = this.eb[c];
      a.appendChild(d)
    }
    this.eb.length = 0;
    this.Ee();
    if(b) {
      a.scrollTop = a.scrollHeight
    }
  }
};
q.Ac = function() {
  if($g(this)) {
    var a = this.u.document;
    a.open();
    a.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Logging: ' + this.ra + "</title><style>" + this.cc() + '</style></head><body><div id="log" style="overflow:auto"></div><div id="head"><p><b>Logging: ' + this.ra + "</b></p><p>" + this.Ue + '</p><span id="clearbutton">clear</span><span id="exitbutton">exit</span><span id="openbutton">options</span></div><div id="options"><big><b>Options:</b></big><div id="optionsarea"></div><span id="closebutton">save and close</span></div></body></html>');
    a.close();
    (H ? a.body : this.u).onresize = A(this.Ee, this);
    this.K = new Yf(a);
    this.K.h("openbutton").onclick = A(this.Af, this);
    this.K.h("closebutton").onclick = A(this.bf, this);
    this.K.h("clearbutton").onclick = A(this.af, this);
    this.K.h("exitbutton").onclick = A(this.ff, this);
    bh(this)
  }
};
q.Af = function() {
  var a = this.K.h("optionsarea");
  a.innerHTML = "";
  for(var b = dh(), c = this.K, d = 0;d < b.length;d++) {
    var f = S(b[d]), f = c.r("div", {}, eh(this, "sel" + b[d], f.ga ? f.ga.name : "INHERIT"), c.r("span", {}, b[d] || "(root)"));
    a.appendChild(f)
  }
  this.K.h("options").style.display = "block";
  return!1
};
function eh(a, b, c) {
  for(var a = a.K, b = a.r("select", {id:b}), d = 0;d < Jd.length;d++) {
    var f = Jd[d], g = a.r("option", {}, f.name);
    if(c == f.name) {
      g.selected = !0
    }
    b.appendChild(g)
  }
  b.appendChild(a.r("option", {selected:c == "INHERIT"}, "INHERIT"));
  return b
}
q.bf = function() {
  this.K.h("options").style.display = "none";
  for(var a = dh(), b = this.K, c = 0;c < a.length;c++) {
    var d = S(a[c]), f = b.h("sel" + a[c]), f = f.options[f.selectedIndex].text;
    f == "INHERIT" ? d.Pb(k) : d.Pb(Ld(f))
  }
  return!1
};
q.Ee = function() {
  var a = this.K, b = a.h("log"), c = a.h("head");
  b.style.top = c.offsetHeight + "px";
  b.style.height = a.C.body.offsetHeight - c.offsetHeight - (H ? 4 : 0) + "px"
};
function dh() {
  var a = Sa(Pd);
  a.sort();
  return a
}
q.ff = function() {
  this.Nb(!1);
  this.u && this.u.close()
};
q.cc = function() {
  return ch.d.cc.call(this) + "html,body{height:100%;width:100%;margin:0px;padding:0px;background-color:#FFF;overflow:hidden}*{}.logmsg{border-bottom:1px solid #CCC;padding:2px;font:medium monospace;}#head{position:absolute;width:100%;font:x-small arial;border-bottom:2px solid #999;background-color:#EEE;}#head p{margin:0px 5px;}#log{position:absolute;width:100%;background-color:#FFF;}#options{position:absolute;right:0px;width:50%;height:100%;border-left:1px solid #999;background-color:#DDD;display:none;padding-left: 5px;font:normal small arial;overflow:auto;}#openbutton,#closebutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:5px;font:x-small arial;}#clearbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:80px;font:x-small arial;}#exitbutton{text-decoration:underline;color:#00F;cursor:pointer;position:absolute;top:0px;right:50px;font:x-small arial;}select{font:x-small arial;margin-right:10px;}hr{border:0;height:5px;background-color:#8c8;color:#8c8;}"
};
function fh() {
}
var gh;
da(fh);
q = fh.prototype;
q.$b = function() {
};
q.r = function(a) {
  return a.xb().r("div", hh(this, a).join(" "), a.rb)
};
q.sb = function(a, b, c) {
  if(a = a.h ? a.h() : a) {
    if(H && !J("7")) {
      var d = ih(Sf(a), b);
      d.push(b);
      ma(c ? Tf : Uf, a).apply(k, d)
    }else {
      c ? Tf(a, b) : Uf(a, b)
    }
  }
};
q.be = function(a) {
  if(a.Kb == k) {
    var b;
    a: {
      b = a.G ? a.o : a.Ba.C.body;
      var c = Zf(b);
      if(c.defaultView && c.defaultView.getComputedStyle && (b = c.defaultView.getComputedStyle(b, k))) {
        b = b.direction || b.getPropertyValue("direction");
        break a
      }
      b = ""
    }
    a.Kb = "rtl" == (b || ((a.G ? a.o : a.Ba.C.body).currentStyle ? (a.G ? a.o : a.Ba.C.body).currentStyle.direction : k) || (a.G ? a.o : a.Ba.C.body).style.direction)
  }
  a.Kb && this.jb(a.h(), !0);
  a.isEnabled() && this.Ob(a, a.La)
};
q.uc = function(a, b) {
  var c = !b, d = H || cc ? a.getElementsByTagName("*") : k;
  if(ng) {
    if(c = c ? "none" : "", a.style[ng] = c, d) {
      for(var f = 0, g;g = d[f];f++) {
        g.style[ng] = c
      }
    }
  }else {
    if(H || cc) {
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), d) {
        for(f = 0;g = d[f];f++) {
          g.setAttribute("unselectable", c)
        }
      }
    }
  }
};
q.jb = function(a, b) {
  this.sb(a, this.pa() + "-rtl", b)
};
q.ee = function(a) {
  var b;
  if(a.Y & 32 && (b = a.Ea())) {
    return kg(b)
  }
  return!1
};
q.Ob = function(a, b) {
  var c;
  if(a.Y & 32 && (c = a.Ea())) {
    if(!b && a.j & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.j & 32 && a.Sd()
    }
    if(kg(c) != b) {
      b ? c.tabIndex = 0 : c.removeAttribute("tabIndex")
    }
  }
};
q.pd = function(a, b) {
  a.style.display = b ? "" : "none"
};
q.M = function(a, b, c) {
  var d = a.h();
  if(d) {
    var f = jh(this, b);
    f && this.sb(a, f, c);
    this.Tb(d, b, c)
  }
};
q.Tb = function(a, b, c) {
  gh || (gh = {1:"disabled", 4:"pressed", 8:"selected", 16:"checked", 64:"expanded"});
  (b = gh[b]) && a.setAttribute("aria-" + b, c)
};
q.Ea = function(a) {
  return a.h()
};
q.pa = p("goog-control");
function hh(a, b) {
  var c = a.pa(), d = [c], f = a.pa();
  f != c && d.push(f);
  c = b.j;
  for(f = [];c;) {
    var g = c & -c;
    f.push(jh(a, g));
    c &= ~g
  }
  d.push.apply(d, f);
  (c = b.W) && d.push.apply(d, c);
  H && !J("7") && d.push.apply(d, ih(d));
  return d
}
function ih(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Wa([], function(d) {
    Za(d, ma($a, a)) && (!b || $a(d, b)) && c.push(d.join("_"))
  });
  return c
}
function jh(a, b) {
  if(!a.Dd) {
    var c = a.pa();
    a.Dd = {1:c + "-disabled", 2:c + "-hover", 4:c + "-active", 8:c + "-selected", 16:c + "-checked", 32:c + "-focused", 64:c + "-open"}
  }
  return a.Dd[b]
}
;function kh(a, b) {
  a || e(Error("Invalid class name " + a));
  x(b) || e(Error("Invalid decorator function " + b))
}
var lh = {};
function mh(a, b, c, d, f) {
  if(!H && (!I || !J("525"))) {
    return!0
  }
  if(gc && f) {
    return nh(a)
  }
  if(f && !d) {
    return!1
  }
  if(!c && (b == 17 || b == 18)) {
    return!1
  }
  if(H && d && b == a) {
    return!1
  }
  switch(a) {
    case 13:
      return!0;
    case 27:
      return!I
  }
  return nh(a)
}
function nh(a) {
  if(a >= 48 && a <= 57) {
    return!0
  }
  if(a >= 96 && a <= 106) {
    return!0
  }
  if(a >= 65 && a <= 90) {
    return!0
  }
  if(I && a == 0) {
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
;function oh(a, b) {
  K.call(this);
  a && ph(this, a, b)
}
D(oh, bd);
q = oh.prototype;
q.o = k;
q.ic = k;
q.Xc = k;
q.jc = k;
q.va = -1;
q.ta = -1;
var qh = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, th = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, uh = {61:187, 
59:186}, vh = H || I && J("525");
q = oh.prototype;
q.lf = function(a) {
  if(I && (this.va == 17 && !a.ctrlKey || this.va == 18 && !a.altKey)) {
    this.ta = this.va = -1
  }
  vh && !mh(a.keyCode, this.va, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.ta = dc && a.keyCode in uh ? uh[a.keyCode] : a.keyCode
};
q.nf = function() {
  this.ta = this.va = -1
};
q.handleEvent = function(a) {
  var b = a.da, c, d;
  H && a.type == "keypress" ? (c = this.ta, d = c != 13 && c != 27 ? b.keyCode : 0) : I && a.type == "keypress" ? (c = this.ta, d = b.charCode >= 0 && b.charCode < 63232 && nh(c) ? b.charCode : 0) : cc ? (c = this.ta, d = nh(c) ? b.keyCode : 0) : (c = b.keyCode || this.ta, d = b.charCode || 0, gc && d == 63 && !c && (c = 191));
  var f = c, g = b.keyIdentifier;
  c ? c >= 63232 && c in qh ? f = qh[c] : c == 25 && a.shiftKey && (f = 9) : g && g in th && (f = th[g]);
  a = f == this.va;
  this.va = f;
  b = new wh(f, d, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.e()
  }
};
q.h = m("o");
function ph(a, b, c) {
  a.jc && a.detach();
  a.o = b;
  a.ic = N(a.o, "keypress", a, c);
  a.Xc = N(a.o, "keydown", a.lf, c, a);
  a.jc = N(a.o, "keyup", a.nf, c, a)
}
q.detach = function() {
  if(this.ic) {
    O(this.ic), O(this.Xc), O(this.jc), this.jc = this.Xc = this.ic = k
  }
  this.o = k;
  this.ta = this.va = -1
};
q.b = function() {
  oh.d.b.call(this);
  this.detach()
};
function wh(a, b, c, d) {
  d && this.Ga(d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
D(wh, wc);
function Y(a, b, c) {
  ug.call(this, c);
  if(!b) {
    for(var b = this.constructor, d;b;) {
      d = y(b);
      if(d = lh[d]) {
        break
      }
      b = b.d ? b.d.constructor : k
    }
    b = d ? x(d.Ua) ? d.Ua() : new d : k
  }
  this.v = b;
  this.rb = a
}
D(Y, ug);
q = Y.prototype;
q.rb = k;
q.j = 0;
q.Y = 39;
q.Bd = 255;
q.Nf = 0;
q.La = !0;
q.W = k;
q.Tc = !0;
q.Fc = !1;
q.Ea = function() {
  return this.v.Ea(this)
};
function xh(a, b) {
  if(b) {
    a.W ? $a(a.W, b) || a.W.push(b) : a.W = [b], a.v.sb(a, b, !0)
  }
}
q.sb = function(a, b) {
  if(b) {
    xh(this, a)
  }else {
    if(a && this.W) {
      ab(this.W, a);
      if(this.W.length == 0) {
        this.W = k
      }
      this.v.sb(this, a, !1)
    }
  }
};
q.r = function() {
  var a = this.v.r(this);
  this.o = a;
  var b = this.v.$b();
  if(b) {
    a.setAttribute("role", b), a.gg = b
  }
  this.Fc || this.v.uc(a, !1);
  this.La || this.v.pd(a, !1)
};
q.Ra = function() {
  Y.d.Ra.call(this);
  this.v.be(this);
  if(this.Y & -2 && (this.Tc && yh(this, !0), this.Y & 32)) {
    var a = this.Ea();
    if(a) {
      var b = this.Za || (this.Za = new oh);
      ph(b, a);
      rg(rg(rg(xg(this), b, "key", this.mf), a, "focus", this.kf), a, "blur", this.Sd)
    }
  }
};
function yh(a, b) {
  var c = xg(a), d = a.h();
  b ? (rg(rg(rg(rg(c, d, "mouseover", a.Wd), d, "mousedown", a.Ud), d, "mouseup", a.Xd), d, "mouseout", a.Vd), H && rg(c, d, "dblclick", a.Td)) : (sg(sg(sg(sg(c, d, "mouseover", a.Wd), d, "mousedown", a.Ud), d, "mouseup", a.Xd), d, "mouseout", a.Vd), H && sg(c, d, "dblclick", a.Td))
}
q.tb = function() {
  Y.d.tb.call(this);
  this.Za && this.Za.detach();
  this.La && this.isEnabled() && this.v.Ob(this, !1)
};
q.b = function() {
  Y.d.b.call(this);
  this.Za && (this.Za.e(), delete this.Za);
  delete this.v;
  this.W = this.rb = k
};
function zh(a) {
  a = a.rb;
  if(!a) {
    return""
  }
  if(!w(a)) {
    if(v(a)) {
      a = Xa(a, lg).join("")
    }else {
      if(Wf && "innerText" in a) {
        a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
      }else {
        var b = [];
        mg(a, b, !0);
        a = b.join("")
      }
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      H || (a = a.replace(/ +/g, " "));
      a != " " && (a = a.replace(/^\s*/, ""))
    }
  }
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
q.jb = function(a) {
  Y.d.jb.call(this, a);
  var b = this.h();
  b && this.v.jb(b, a)
};
q.uc = function(a) {
  this.Fc = a;
  var b = this.h();
  b && this.v.uc(b, a)
};
q.pd = function(a, b) {
  if(b || this.La != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.h();
    c && this.v.pd(c, a);
    this.isEnabled() && this.v.Ob(this, a);
    this.La = a;
    return!0
  }
  return!1
};
q.isEnabled = function() {
  return!(this.j & 1)
};
q.Nb = function(a) {
  var b = this.getParent();
  if((!b || typeof b.isEnabled != "function" || b.isEnabled()) && Ah(this, 1, !a)) {
    a || (this.setActive(!1), Bh(this, !1)), this.La && this.v.Ob(this, a), this.M(1, !a)
  }
};
function Bh(a, b) {
  Ah(a, 2, b) && a.M(2, b)
}
q.ce = function() {
  return!!(this.j & 4)
};
q.setActive = function(a) {
  Ah(this, 4, a) && this.M(4, a)
};
q.M = function(a, b) {
  if(this.Y & a && b != !!(this.j & a)) {
    this.v.M(this, a, b), this.j = b ? this.j | a : this.j & ~a
  }
};
function Z(a, b) {
  return!!(a.Bd & b) && !!(a.Y & b)
}
function Ah(a, b, c) {
  return!!(a.Y & b) && !!(a.j & b) != c && (!(a.Nf & b) || a.dispatchEvent(wg(b, c))) && !a.aa
}
q.Wd = function(a) {
  (!a.relatedTarget || !hg(this.h(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Z(this, 2) && Bh(this, !0)
};
q.Vd = function(a) {
  if((!a.relatedTarget || !hg(this.h(), a.relatedTarget)) && this.dispatchEvent("leave")) {
    Z(this, 4) && this.setActive(!1), Z(this, 2) && Bh(this, !1)
  }
};
q.Ud = function(a) {
  if(this.isEnabled() && (Z(this, 2) && Bh(this, !0), yc(a) && (!I || !gc || !a.ctrlKey))) {
    Z(this, 4) && this.setActive(!0), this.v.ee(this) && this.Ea().focus()
  }
  !this.Fc && yc(a) && (!I || !gc || !a.ctrlKey) && a.preventDefault()
};
q.Xd = function(a) {
  this.isEnabled() && (Z(this, 2) && Bh(this, !0), this.ce() && this.Gb(a) && Z(this, 4) && this.setActive(!1))
};
q.Td = function(a) {
  this.isEnabled() && this.Gb(a)
};
q.Gb = function(a) {
  if(Z(this, 16)) {
    var b = !(this.j & 16);
    Ah(this, 16, b) && this.M(16, b)
  }
  Z(this, 8) && Ah(this, 8, !0) && this.M(8, !0);
  Z(this, 64) && (b = !(this.j & 64), Ah(this, 64, b) && this.M(64, b));
  b = new uc("action", this);
  if(a) {
    for(var c = ["altKey", "ctrlKey", "metaKey", "shiftKey", "platformModifierKey"], d, f = 0;d = c[f];f++) {
      b[d] = a[d]
    }
  }
  return this.dispatchEvent(b)
};
q.kf = function() {
  Z(this, 32) && Ah(this, 32, !0) && this.M(32, !0)
};
q.Sd = function() {
  Z(this, 4) && this.setActive(!1);
  Z(this, 32) && Ah(this, 32, !1) && this.M(32, !1)
};
q.mf = function(a) {
  if(this.La && this.isEnabled() && this.Sc(a)) {
    return a.preventDefault(), a.stopPropagation(), !0
  }
  return!1
};
q.Sc = function(a) {
  return a.keyCode == 13 && this.Gb(a)
};
x(Y) || e(Error("Invalid component class " + Y));
x(fh) || e(Error("Invalid renderer class " + fh));
var Ch = y(Y);
lh[Ch] = fh;
kh("goog-control", function() {
  return new Y(k)
});
function Dh() {
}
D(Dh, fh);
da(Dh);
q = Dh.prototype;
q.$b = p("button");
q.Tb = function(a, b, c) {
  b == 16 ? a.setAttribute("aria-pressed", c) : Dh.d.Tb.call(this, a, b, c)
};
q.r = function(a) {
  var b = Dh.d.r.call(this, a), c = a.dc();
  c && this.od(b, c);
  (c = a.ec()) && this.wc(b, c);
  a.Y & 16 && this.Tb(b, 16, !1);
  return b
};
q.ec = t;
q.wc = t;
q.dc = function(a) {
  return a.title
};
q.od = function(a, b) {
  if(a) {
    a.title = b || ""
  }
};
q.pa = p("goog-button");
function Eh() {
}
D(Eh, Dh);
da(Eh);
q = Eh.prototype;
q.$b = function() {
};
q.r = function(a) {
  a.G && !1 != a.Tc && yh(a, !1);
  a.Tc = !1;
  a.Bd &= -256;
  a.G && a.j & 32 && e(Error("Component already rendered"));
  a.j & 32 && a.M(32, !1);
  a.Y &= -33;
  return a.xb().r("button", {"class":hh(this, a).join(" "), disabled:!a.isEnabled(), title:a.dc() || "", value:a.ec() || ""}, zh(a) || "")
};
q.be = function(a) {
  rg(xg(a), a.h(), "click", a.Gb)
};
q.uc = t;
q.jb = t;
q.ee = function(a) {
  return a.isEnabled()
};
q.Ob = t;
q.M = function(a, b, c) {
  Eh.d.M.call(this, a, b, c);
  if((a = a.h()) && b == 1) {
    a.disabled = c
  }
};
q.ec = function(a) {
  return a.value
};
q.wc = function(a, b) {
  if(a) {
    a.value = b
  }
};
q.Tb = t;
function Fh(a, b, c) {
  Y.call(this, a, b || Eh.Ua(), c)
}
D(Fh, Y);
q = Fh.prototype;
q.ec = m("Se");
q.wc = function(a) {
  this.Se = a;
  this.v.wc(this.h(), a)
};
q.dc = m("Ne");
q.od = function(a) {
  this.Ne = a;
  this.v.od(this.h(), a)
};
q.b = function() {
  Fh.d.b.call(this);
  delete this.Se;
  delete this.Ne
};
q.Ra = function() {
  Fh.d.Ra.call(this);
  if(this.Y & 32) {
    var a = this.Ea();
    a && rg(xg(this), a, "keyup", this.Sc)
  }
};
q.Sc = function(a) {
  if(a.keyCode == 13 && a.type == "key" || a.keyCode == 32 && a.type == "keyup") {
    return this.Gb(a)
  }
  return a.keyCode == 32
};
kh("goog-button", function() {
  return new Fh(k)
});
function Gh() {
}
D(Gh, Dh);
da(Gh);
Gh.prototype.r = function(a) {
  var b = {"class":"goog-inline-block " + hh(this, a).join(" "), title:a.dc() || ""};
  return a.xb().r("div", b, Hh(this, a.rb, a.xb()))
};
Gh.prototype.$b = p("button");
function Hh(a, b, c) {
  return c.r("div", "goog-inline-block " + (a.pa() + "-outer-box"), c.r("div", "goog-inline-block " + (a.pa() + "-inner-box"), b))
}
Gh.prototype.pa = p("goog-custom-button");
function Ih(a, b, c) {
  Fh.call(this, a, b || Gh.Ua(), c)
}
D(Ih, Fh);
kh("goog-custom-button", function() {
  return new Ih(k)
});
var Jh = S("ljstream.logger");
window.onerror = function(a, b, c) {
  Nd(Jh, "window.onerror: message: " + G(a) + "\nURL: " + b + "\nLine Number: " + c)
};
function Kh() {
  this.ve = new tb
}
function kf(a, b) {
  Jh.info("streamReset: reasonString=" + G(a) + ", applicationLevel=" + b);
  Lh("Disconnected from server.  Try reloading this page.");
  $ = k
}
function Mh(a) {
  Jh.info("Sending preferences to server");
  var b;
  b = new Ng;
  b.q[1] = X("include_russian_posts").checked;
  b = a.ve.Mb(b);
  cf(a.t, [(new wb).Mb([2, b])])
}
Kh.prototype.reset = function(a) {
  Jh.info("resetting with reason: " + a);
  this.t.reset(a)
};
var $ = k, Nh = new jd(s.window);
function Lh(a) {
  a = of("span", {"class":"important-message"}, a);
  pf(a)
}
function Oh() {
  $ && ($.reset("idle timeout fired"), $ = k, Lh("No key/mouse activity, stopping stream to save everyone's bandwidth."))
}
var Ph = k;
function Qh() {
  Ph != k && Nh.I.clearTimeout(Ph);
  $ && (Ph = Nh.I.setTimeout(Oh, 6E5))
}
N(window, ["click", "focus", "keydown", "keypress"], Qh, !0);
var cg = new Yf, Rh = 0;
function pf(a) {
  a = of("div", {"class":"row-" + (Rh % 2 == 0 ? "even" : "odd")}, of("nobr", {}, a));
  X("ljstream-container-inner").appendChild(a);
  Rh += 1;
  var b;
  if(b = Mg) {
    var c = a, a = c.offsetTop;
    for(b = c.offsetHeight;c.offsetParent;) {
      c = c.offsetParent, a += c.offsetTop
    }
    var d = document, c = !I && d.compatMode == "CSS1Compat" ? d.documentElement : d.body, d = d.parentWindow || d.defaultView, c = (new Pf(d.pageXOffset || c.scrollLeft, d.pageYOffset || c.scrollTop)).y, d = bg().height;
    b = !(a + b <= c + d)
  }
  if(b) {
    a = bg().height, window.scrollBy(0, Math.round(a / 2) + 80)
  }
}
function Sh() {
  var a = new Kg;
  $ = new Kh;
  Qh();
  gd(Lg(), function(b) {
    $ || e(Error("lastProto falsy?"));
    b = new Xe(Nh, $, b, a);
    $.t = b;
    var c = $;
    cf(c.t, ["subprotocol:ljstream"]);
    Mh(c);
    b.start();
    return k
  })
}
function Th() {
  N(s, "load", function() {
    window.scrollTo(0, 0)
  });
  N(X("include_russian_posts"), "click", function() {
    Mh($)
  });
  Mg = !0;
  N(X("automatic_scroll"), "click", function(a) {
    Mg = a.target.checked
  });
  var a = new Ih("Clear posts");
  xh(a, "clear-posts-button");
  yg(a);
  N(a, "action", function() {
    X("ljstream-container-inner").innerHTML = "";
    window.scrollTo(0, 0)
  });
  a = X("ljstream-container");
  a.style.marginTop = X("demo-header").offsetHeight + "px";
  X("demo-header").style.width = "9000px";
  var b = of("div", {id:"ljstream-container-inner"});
  a.appendChild(b)
}
function Uh() {
  Sd().Pb(Id);
  if((new df(document.location)).R.get("logging") == "1") {
    var a = new ch("main");
    a.Nb(!0);
    a.Ga()
  }
  Jh.info("Logger works.");
  Th();
  Sh()
}
var Vh = "__ljstream_init".split("."), Wh = s;
!(Vh[0] in Wh) && Wh.execScript && Wh.execScript("var " + Vh[0]);
for(var Xh;Vh.length && (Xh = Vh.shift());) {
  !Vh.length && u(Uh) ? Wh[Xh] = Uh : Wh = Wh[Xh] ? Wh[Xh] : Wh[Xh] = {}
}
;})();
