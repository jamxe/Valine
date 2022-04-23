/*!
 * Valine v1.4.16
 * (c) 2017-2021 xCss
 * Released under the GPL-2.0 License.
 * Last Update: 2021-10-19 6:07:44 ├F10: PM┤
 */
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Valine = t() : e.Valine = t();
}(this, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.i = function(e) {
            return e;
        }, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            });
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return t.d(n, "a", n), n;
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, t.p = "", t(t.s = 119);
    }([ function(e, t, n) {
        "use strict";
        var r = SyntaxError, o = Function, i = TypeError, a = function(e) {
            try {
                return o('"use strict"; return (' + e + ").constructor;")();
            } catch (e) {}
        }, s = Object.getOwnPropertyDescriptor;
        if (s) try {
            s({}, "");
        } catch (e) {
            s = null;
        }
        var l = function() {
            throw new i();
        }, c = s ? function() {
            try {
                return arguments.callee, l;
            } catch (e) {
                try {
                    return s(arguments, "callee").get;
                } catch (e) {
                    return l;
                }
            }
        }() : l, u = n(22)(), f = Object.getPrototypeOf || function(e) {
            return e.__proto__;
        }, p = {}, d = "undefined" == typeof Uint8Array ? void 0 : f(Uint8Array), h = {
            "%AggregateError%": "undefined" == typeof AggregateError ? void 0 : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
            "%ArrayIteratorPrototype%": u ? f([][Symbol.iterator]()) : void 0,
            "%AsyncFromSyncIteratorPrototype%": void 0,
            "%AsyncFunction%": p,
            "%AsyncGenerator%": p,
            "%AsyncGeneratorFunction%": p,
            "%AsyncIteratorPrototype%": p,
            "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
            "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt,
            "%Boolean%": Boolean,
            "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
            "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
            "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? void 0 : FinalizationRegistry,
            "%Function%": o,
            "%GeneratorFunction%": p,
            "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
            "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
            "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": u ? f(f([][Symbol.iterator]())) : void 0,
            "%JSON%": "object" == typeof JSON ? JSON : void 0,
            "%Map%": "undefined" == typeof Map ? void 0 : Map,
            "%MapIteratorPrototype%": "undefined" != typeof Map && u ? f(new Map()[Symbol.iterator]()) : void 0,
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
            "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
            "%RegExp%": RegExp,
            "%Set%": "undefined" == typeof Set ? void 0 : Set,
            "%SetIteratorPrototype%": "undefined" != typeof Set && u ? f(new Set()[Symbol.iterator]()) : void 0,
            "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": u ? f(""[Symbol.iterator]()) : void 0,
            "%Symbol%": u ? Symbol : void 0,
            "%SyntaxError%": r,
            "%ThrowTypeError%": c,
            "%TypedArray%": d,
            "%TypeError%": i,
            "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
            "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
            "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
            "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
            "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef,
            "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet
        }, v = function e(t) {
            var n;
            if ("%AsyncFunction%" === t) n = a("async function () {}"); else if ("%GeneratorFunction%" === t) n = a("function* () {}"); else if ("%AsyncGeneratorFunction%" === t) n = a("async function* () {}"); else if ("%AsyncGenerator%" === t) {
                var r = e("%AsyncGeneratorFunction%");
                r && (n = r.prototype);
            } else if ("%AsyncIteratorPrototype%" === t) {
                var o = e("%AsyncGenerator%");
                o && (n = f(o.prototype));
            }
            return h[t] = n, n;
        }, g = {
            "%ArrayBufferPrototype%": [ "ArrayBuffer", "prototype" ],
            "%ArrayPrototype%": [ "Array", "prototype" ],
            "%ArrayProto_entries%": [ "Array", "prototype", "entries" ],
            "%ArrayProto_forEach%": [ "Array", "prototype", "forEach" ],
            "%ArrayProto_keys%": [ "Array", "prototype", "keys" ],
            "%ArrayProto_values%": [ "Array", "prototype", "values" ],
            "%AsyncFunctionPrototype%": [ "AsyncFunction", "prototype" ],
            "%AsyncGenerator%": [ "AsyncGeneratorFunction", "prototype" ],
            "%AsyncGeneratorPrototype%": [ "AsyncGeneratorFunction", "prototype", "prototype" ],
            "%BooleanPrototype%": [ "Boolean", "prototype" ],
            "%DataViewPrototype%": [ "DataView", "prototype" ],
            "%DatePrototype%": [ "Date", "prototype" ],
            "%ErrorPrototype%": [ "Error", "prototype" ],
            "%EvalErrorPrototype%": [ "EvalError", "prototype" ],
            "%Float32ArrayPrototype%": [ "Float32Array", "prototype" ],
            "%Float64ArrayPrototype%": [ "Float64Array", "prototype" ],
            "%FunctionPrototype%": [ "Function", "prototype" ],
            "%Generator%": [ "GeneratorFunction", "prototype" ],
            "%GeneratorPrototype%": [ "GeneratorFunction", "prototype", "prototype" ],
            "%Int8ArrayPrototype%": [ "Int8Array", "prototype" ],
            "%Int16ArrayPrototype%": [ "Int16Array", "prototype" ],
            "%Int32ArrayPrototype%": [ "Int32Array", "prototype" ],
            "%JSONParse%": [ "JSON", "parse" ],
            "%JSONStringify%": [ "JSON", "stringify" ],
            "%MapPrototype%": [ "Map", "prototype" ],
            "%NumberPrototype%": [ "Number", "prototype" ],
            "%ObjectPrototype%": [ "Object", "prototype" ],
            "%ObjProto_toString%": [ "Object", "prototype", "toString" ],
            "%ObjProto_valueOf%": [ "Object", "prototype", "valueOf" ],
            "%PromisePrototype%": [ "Promise", "prototype" ],
            "%PromiseProto_then%": [ "Promise", "prototype", "then" ],
            "%Promise_all%": [ "Promise", "all" ],
            "%Promise_reject%": [ "Promise", "reject" ],
            "%Promise_resolve%": [ "Promise", "resolve" ],
            "%RangeErrorPrototype%": [ "RangeError", "prototype" ],
            "%ReferenceErrorPrototype%": [ "ReferenceError", "prototype" ],
            "%RegExpPrototype%": [ "RegExp", "prototype" ],
            "%SetPrototype%": [ "Set", "prototype" ],
            "%SharedArrayBufferPrototype%": [ "SharedArrayBuffer", "prototype" ],
            "%StringPrototype%": [ "String", "prototype" ],
            "%SymbolPrototype%": [ "Symbol", "prototype" ],
            "%SyntaxErrorPrototype%": [ "SyntaxError", "prototype" ],
            "%TypedArrayPrototype%": [ "TypedArray", "prototype" ],
            "%TypeErrorPrototype%": [ "TypeError", "prototype" ],
            "%Uint8ArrayPrototype%": [ "Uint8Array", "prototype" ],
            "%Uint8ClampedArrayPrototype%": [ "Uint8ClampedArray", "prototype" ],
            "%Uint16ArrayPrototype%": [ "Uint16Array", "prototype" ],
            "%Uint32ArrayPrototype%": [ "Uint32Array", "prototype" ],
            "%URIErrorPrototype%": [ "URIError", "prototype" ],
            "%WeakMapPrototype%": [ "WeakMap", "prototype" ],
            "%WeakSetPrototype%": [ "WeakSet", "prototype" ]
        }, m = n(9), y = n(25), b = m.call(Function.call, Array.prototype.concat), w = m.call(Function.apply, Array.prototype.splice), x = m.call(Function.call, String.prototype.replace), k = m.call(Function.call, String.prototype.slice), S = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, _ = /\\(\\)?/g, A = function(e) {
            var t = k(e, 0, 1), n = k(e, -1);
            if ("%" === t && "%" !== n) throw new r("invalid intrinsic syntax, expected closing `%`");
            if ("%" === n && "%" !== t) throw new r("invalid intrinsic syntax, expected opening `%`");
            var o = [];
            return x(e, S, function(e, t, n, r) {
                o[o.length] = n ? x(r, _, "$1") : t || e;
            }), o;
        }, O = function(e, t) {
            var n, o = e;
            if (y(g, o) && (n = g[o], o = "%" + n[0] + "%"), y(h, o)) {
                var a = h[o];
                if (a === p && (a = v(o)), void 0 === a && !t) throw new i("intrinsic " + e + " exists, but is not available. Please file an issue!");
                return {
                    alias: n,
                    name: o,
                    value: a
                };
            }
            throw new r("intrinsic " + e + " does not exist!");
        };
        e.exports = function(e, t) {
            if ("string" != typeof e || 0 === e.length) throw new i("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && "boolean" != typeof t) throw new i('"allowMissing" argument must be a boolean');
            var n = A(e), o = n.length > 0 ? n[0] : "", a = O("%" + o + "%", t), l = a.name, c = a.value, u = !1, f = a.alias;
            f && (o = f[0], w(n, b([ 0, 1 ], f)));
            for (var p = 1, d = !0; p < n.length; p += 1) {
                var v = n[p], g = k(v, 0, 1), m = k(v, -1);
                if (('"' === g || "'" === g || "`" === g || '"' === m || "'" === m || "`" === m) && g !== m) throw new r("property names with quotes must have matching quotes");
                if ("constructor" !== v && d || (u = !0), o += "." + v, l = "%" + o + "%", 
                y(h, l)) c = h[l]; else if (null != c) {
                    if (!(v in c)) {
                        if (!t) throw new i("base intrinsic for " + e + " exists, but the property is not available.");
                        return;
                    }
                    if (s && p + 1 >= n.length) {
                        var x = s(c, v);
                        d = !!x, c = d && "get" in x && !("originalValue" in x.get) ? x.get : c[v];
                    } else d = y(c, v), c = c[v];
                    d && !u && (h[l] = c);
                }
            }
            return c;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), o = n(4), i = o(r("String.prototype.indexOf"));
        e.exports = function(e, t) {
            var n = r(e, !!t);
            return "function" == typeof n && i(e, ".prototype.") > -1 ? o(n) : n;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(99), o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"), i = Object.prototype.toString, a = Array.prototype.concat, s = Object.defineProperty, l = function(e) {
            return "function" == typeof e && "[object Function]" === i.call(e);
        }, c = s && function() {
            var e = {};
            try {
                s(e, "x", {
                    enumerable: !1,
                    value: e
                });
                for (var t in e) return !1;
                return e.x === e;
            } catch (e) {
                return !1;
            }
        }(), u = function(e, t, n, r) {
            (!(t in e) || l(r) && r()) && (c ? s(e, t, {
                configurable: !0,
                enumerable: !1,
                value: n,
                writable: !0
            }) : e[t] = n);
        }, f = function(e, t) {
            var n = arguments.length > 2 ? arguments[2] : {}, i = r(t);
            o && (i = a.call(i, Object.getOwnPropertySymbols(t)));
            for (var s = 0; s < i.length; s += 1) u(e, i[s], t[i[s]], n[i[s]]);
        };
        f.supportsDescriptors = !!c, e.exports = f;
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        t.__esModule = !0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, i = n(96), a = r(i), s = n(56), l = r(s), c = n(52), u = r(c), f = n(55), p = r(f), d = n(51), h = r(d), v = document, g = navigator, m = /[&<>"'`\\]/g, y = RegExp(m.source), b = /&(?:amp|lt|gt|quot|#39|#x60|#x5c);/g, w = RegExp(b.source), x = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#x60;",
            "\\": "&#x5c;"
        }, k = {};
        for (var S in x) k[x[S]] = S;
        var _ = null;
        Array.prototype.forEach || (Array.prototype.forEach = function(e, t) {
            var n, r;
            if (null == this) throw new TypeError(" this is null or not defined");
            var o = Object(this), i = o.length >>> 0;
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            for (arguments.length > 1 && (n = t), r = 0; r < i; ) {
                var a;
                r in o && (a = o[r], e.call(n, a, r, o)), r++;
            }
        }), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), 
        String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        }), (0, a.default)(l.default.fn, {
            prepend: function(e) {
                return e instanceof HTMLElement || (e = e[0]), this.forEach(function(t) {
                    t.insertAdjacentElement("afterBegin", e);
                }), this;
            },
            append: function(e) {
                return e instanceof HTMLElement || (e = e[0]), this.forEach(function(t) {
                    t.insertAdjacentElement("beforeEnd", e);
                }), this;
            },
            remove: function() {
                return this.forEach(function(e) {
                    try {
                        e.parentNode.removeChild(e);
                    } catch (e) {}
                }), this;
            },
            find: function(e) {
                return (0, l.default)(e, this);
            },
            show: function() {
                return this.forEach(function(e) {
                    e.style.display = "block";
                }), this;
            },
            hide: function() {
                return this.forEach(function(e) {
                    e.style.display = "none";
                }), this;
            },
            on: function(e, t, n) {
                return l.default.fn.off(e, t, n), this.forEach(function(r) {
                    e.split(" ").forEach(function(e) {
                        r.addEventListener ? r.addEventListener(e, t, n || !1) : r.attachEvent ? r.attachEvent("on" + e, t) : r["on" + e] = t;
                    });
                }), this;
            },
            off: function(e, t, n) {
                return this.forEach(function(r) {
                    e.split(" ").forEach(function(e) {
                        r.removeEventListener ? r.removeEventListener(e, t, n || !1) : r.detachEvent ? r.detachEvent("on" + e, t) : r["on" + e] = null;
                    });
                }), this;
            },
            html: function(e) {
                return void 0 !== e ? (this.forEach(function(t) {
                    t.innerHTML = e;
                }), this) : this[0].innerHTML;
            },
            text: function(e) {
                return void 0 !== e ? (this.forEach(function(t) {
                    t.innerText = e;
                }), this) : this[0].innerText;
            },
            empty: function(e) {
                return e = e || 0, this.forEach(function(t) {
                    setTimeout(function(e) {
                        t.innerText = "";
                    }, e);
                }), this;
            },
            val: function(e) {
                return void 0 !== e ? (this.forEach(function(t) {
                    t.value = e;
                }), this) : this[0].value || "";
            },
            attr: function() {
                var e = arguments;
                if ("object" == o(arguments[0])) {
                    var t = arguments[0], n = this;
                    return Object.keys(t).forEach(function(e) {
                        n.forEach(function(n) {
                            n.setAttribute(e, t[e]);
                        });
                    }), this;
                }
                return "string" == typeof arguments[0] && arguments.length < 2 ? this[0].getAttribute(arguments[0]) || "" : (this.forEach(function(t) {
                    t.setAttribute(e[0], e[1]);
                }), this);
            },
            removeAttr: function(e) {
                return this.forEach(function(t) {
                    var n, r = 0, o = e && e.match(/[^\x20\t\r\n\f\*\/\\]+/g);
                    if (o && 1 === t.nodeType) for (;n = o[r++]; ) t.removeAttribute(n);
                }), this;
            },
            hasClass: function(e) {
                return !!this[0] && new RegExp("(\\s|^)" + e + "(\\s|$)").test(this[0].getAttribute("class"));
            },
            addClass: function(e) {
                return this.forEach(function(t) {
                    var n = (0, l.default)(t), r = n.attr("class");
                    n.hasClass(e) || n.attr("class", r += " " + e);
                }), this;
            },
            removeClass: function(e) {
                return this.forEach(function(t) {
                    var n = (0, l.default)(t), r = n.attr("class");
                    if (n.hasClass(e)) {
                        var o = new RegExp("(\\s|^)" + e + "(\\s|$)");
                        n.attr("class", r.replace(o, ""));
                    }
                }), this;
            }
        }), (0, a.default)(l.default, {
            extend: a.default,
            noop: function() {},
            navi: g,
            ua: g.userAgent,
            lang: g.language || g.languages[0],
            detect: u.default,
            store: p.default,
            escape: function(e) {
                return e && y.test(e) ? e.replace(m, function(e) {
                    return x[e];
                }) : e;
            },
            unescape: function(e) {
                return e && w.test(e) ? e.replace(b, function(e) {
                    return k[e];
                }) : e;
            },
            dynamicLoadSource: function(e, t) {
                if ((0, l.default)('script[src="' + e + '"]').length) t && t(); else {
                    var n = v.createElement("script");
                    n.onload = n.onreadystatechange = function() {
                        var e = this;
                        e.onload = e.onreadystatechange = null, t && t(), (0, l.default)(n).remove();
                    }, n.async = !0, n.setAttribute("referrerPolicy", "no-referrer");
                    (0, l.default)("head")[0].appendChild(n), n.src = e;
                }
            },
            sdkLoader: function(e, t, n) {
                t in window && window[t] ? (_ && clearTimeout(_), n && n()) : l.default.dynamicLoadSource(e, function() {
                    _ = setTimeout(l.default.sdkLoader(e, t, n), 100);
                });
            },
            deleteInWin: function(e, t) {
                var n = function(t) {
                    if (e in window) try {
                        delete window[e];
                    } catch (t) {
                        window[e] = null;
                    }
                };
                0 === t ? n() : setTimeout(n, t || 500);
            },
            ajax: h.default
        }), t.default = l.default;
    }, function(e, t, n) {
        "use strict";
        var r = n(9), o = n(0), i = o("%Function.prototype.apply%"), a = o("%Function.prototype.call%"), s = o("%Reflect.apply%", !0) || r.call(a, i), l = o("%Object.getOwnPropertyDescriptor%", !0), c = o("%Object.defineProperty%", !0), u = o("%Math.max%");
        if (c) try {
            c({}, "a", {
                value: 1
            });
        } catch (e) {
            c = null;
        }
        e.exports = function(e) {
            var t = s(r, a, arguments);
            if (l && c) {
                l(t, "length").configurable && c(t, "length", {
                    value: 1 + u(0, e.length - (arguments.length - 1))
                });
            }
            return t;
        };
        var f = function() {
            return s(r, i, arguments);
        };
        c ? c(e.exports, "apply", {
            value: f
        }) : e.exports.apply = f;
    }, function(e, t, n) {
        "use strict";
        e.exports = n(69);
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        t.DEFAULT_EMOJI_CDN = "//img.t.sinajs.cn/t4/appstyle/expression/ext/normal/", 
        t.DB_NAME = "Comment", t.CONFIG = {
            lang: "zh-CN",
            langMode: null,
            appId: "",
            appKey: "",
            clazzName: "Comment",master: [],friends: [],tagMeta: [ "博主", "小伙伴", "访客" ],metaPlaceholder: {nick: "昵称/QQ号(必填)",mail: "邮箱(必填)",link: "网址(https://)"},
            meta: [ "nick", "mail", "link" ],
            path: location.pathname,
            placeholder: "Just Go Go",
            pageSize: 10,
            recordIP: !0,
            serverURLs: "",
            visitor: !1,
            mathJax: !1,
            emojiCDN: "",
            emojiMaps: void 0,
            enableQQ: !1,
            requiredFields: []
        }, t.defaultMeta = [ "nick", "mail", "link" ], t.QQCacheKey = "_v_Cache_Q", 
        t.MetaCacheKey = "_v_Cache_Meta", t.RandomStr = function(e) {
            return (Date.now() + Math.round(1e3 * Math.random())).toString(32);
        }, t.VERSION = "1.4.16";
    }, function(e, t, n) {
        function r(e, t) {
            return new i(t).process(e);
        }
        var o = n(16), i = n(57);
        t = e.exports = r, t.FilterCSS = i;
        for (var a in o) t[a] = o[a];
        "undefined" != typeof window && (window.filterCSS = e.exports);
    }, function(e, t, n) {
        "use strict";
        var r = n(73);
        e.exports = function(e) {
            return "symbol" == typeof e ? "Symbol" : "bigint" == typeof e ? "BigInt" : r(e);
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(85);
        e.exports = Function.prototype.bind || r;
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return s[e];
        }
        function o(e) {
            return l[e];
        }
        function i(e) {
            return null == e ? "" : String(e).replace(u, r);
        }
        function a(e) {
            return null == e ? "" : String(e).replace(c, o);
        }
        var s = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }, l = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        }, c = /(&amp;|&lt;|&gt;|&quot;|&#39;)/g, u = /[&<>"']/g;
        i.options = a.options = {}, e.exports = {
            encode: i,
            escape: i,
            decode: a,
            unescape: a,
            version: "1.0.0-browser"
        };
    }, function(e, t, n) {
        "use strict";
        var r, o, i = Function.prototype.toString, a = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
        if ("function" == typeof a && "function" == typeof Object.defineProperty) try {
            r = Object.defineProperty({}, "length", {
                get: function() {
                    throw o;
                }
            }), o = {}, a(function() {
                throw 42;
            }, null, r);
        } catch (e) {
            e !== o && (a = null);
        } else a = null;
        var s = /^\s*class\b/, l = function(e) {
            try {
                var t = i.call(e);
                return s.test(t);
            } catch (e) {
                return !1;
            }
        }, c = function(e) {
            try {
                return !l(e) && (i.call(e), !0);
            } catch (e) {
                return !1;
            }
        }, u = Object.prototype.toString, f = "function" == typeof Symbol && !!Symbol.toStringTag, p = "object" == typeof document && void 0 === document.all && void 0 !== document.all ? document.all : {};
        e.exports = a ? function(e) {
            if (e === p) return !0;
            if (!e) return !1;
            if ("function" != typeof e && "object" != typeof e) return !1;
            if ("function" == typeof e && !e.prototype) return !0;
            try {
                a(e, null, r);
            } catch (e) {
                if (e !== o) return !1;
            }
            return !l(e);
        } : function(e) {
            if (e === p) return !0;
            if (!e) return !1;
            if ("function" != typeof e && "object" != typeof e) return !1;
            if ("function" == typeof e && !e.prototype) return !0;
            if (f) return c(e);
            if (l(e)) return !1;
            var t = u.call(e);
            return "[object Function]" === t || "[object GeneratorFunction]" === t;
        };
    }, function(e, t) {
        e.exports = {
            indexOf: function(e, t) {
                var n, r;
                if (Array.prototype.indexOf) return e.indexOf(t);
                for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            },
            forEach: function(e, t, n) {
                var r, o;
                if (Array.prototype.forEach) return e.forEach(t, n);
                for (r = 0, o = e.length; r < o; r++) t.call(n, e[r], r, e);
            },
            trim: function(e) {
                return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
            },
            spaceIndex: function(e) {
                var t = /\s|\n|\t/, n = t.exec(e);
                return n ? n.index : -1;
            }
        };
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(6), o = {
            cdn: r.DEFAULT_EMOJI_CDN,
            maps: n(108),
            parse: function(e, t) {
                return String(e).replace(new RegExp(":(" + Object.keys(o.maps).join("|") + "):", "ig"), function(e, n) {
                    return o.maps[n] ? o.build(n, t) : e;
                });
            },
            build: function(e, t) {
                var n = /^(https?:)?\/\//i, r = o.maps[e], i = n.test(r) ? r : o.cdn + r, a = ' <img alt="' + e + '" referrerpolicy="no-referrer" class="vemoji" src="' + i + '" />';
                return n.test(i) ? a : "";
            }
        };
        t.default = o;
    }, function(e, t, n) {
        "use strict";
        var r = n(0), o = n(1), i = r("%TypeError%"), a = n(59), s = n(18), l = n(60), c = n(62), u = n(63), f = n(67), p = n(20), d = n(92), h = o("String.prototype.split"), v = Object("a"), g = "a" !== v[0] || !(0 in v);
        e.exports = function(e) {
            var t = f(this), n = g && d(this) ? h(this, "") : t, r = u(n);
            if (!c(e)) throw new i("Array.prototype.forEach callback must be a function");
            var o;
            arguments.length > 1 && (o = arguments[1]);
            for (var v = 0; v < r; ) {
                var m = p(v);
                if (l(n, m)) {
                    var y = s(n, m);
                    a(e, o, [ y, v, n ]);
                }
                v += 1;
            }
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(82), o = n(14);
        e.exports = function() {
            var e = Array.prototype.forEach;
            return r(e) ? e : o;
        };
    }, function(e, t) {
        function n() {
            var e = {};
            return e["align-content"] = !1, e["align-items"] = !1, e["align-self"] = !1, 
            e["alignment-adjust"] = !1, e["alignment-baseline"] = !1, e.all = !1, 
            e["anchor-point"] = !1, e.animation = !1, e["animation-delay"] = !1, 
            e["animation-direction"] = !1, e["animation-duration"] = !1, e["animation-fill-mode"] = !1, 
            e["animation-iteration-count"] = !1, e["animation-name"] = !1, e["animation-play-state"] = !1, 
            e["animation-timing-function"] = !1, e.azimuth = !1, e["backface-visibility"] = !1, 
            e.background = !0, e["background-attachment"] = !0, e["background-clip"] = !0, 
            e["background-color"] = !0, e["background-image"] = !0, e["background-origin"] = !0, 
            e["background-position"] = !0, e["background-repeat"] = !0, e["background-size"] = !0, 
            e["baseline-shift"] = !1, e.binding = !1, e.bleed = !1, e["bookmark-label"] = !1, 
            e["bookmark-level"] = !1, e["bookmark-state"] = !1, e.border = !0, e["border-bottom"] = !0, 
            e["border-bottom-color"] = !0, e["border-bottom-left-radius"] = !0, 
            e["border-bottom-right-radius"] = !0, e["border-bottom-style"] = !0, 
            e["border-bottom-width"] = !0, e["border-collapse"] = !0, e["border-color"] = !0, 
            e["border-image"] = !0, e["border-image-outset"] = !0, e["border-image-repeat"] = !0, 
            e["border-image-slice"] = !0, e["border-image-source"] = !0, e["border-image-width"] = !0, 
            e["border-left"] = !0, e["border-left-color"] = !0, e["border-left-style"] = !0, 
            e["border-left-width"] = !0, e["border-radius"] = !0, e["border-right"] = !0, 
            e["border-right-color"] = !0, e["border-right-style"] = !0, e["border-right-width"] = !0, 
            e["border-spacing"] = !0, e["border-style"] = !0, e["border-top"] = !0, 
            e["border-top-color"] = !0, e["border-top-left-radius"] = !0, e["border-top-right-radius"] = !0, 
            e["border-top-style"] = !0, e["border-top-width"] = !0, e["border-width"] = !0, 
            e.bottom = !1, e["box-decoration-break"] = !0, e["box-shadow"] = !0, 
            e["box-sizing"] = !0, e["box-snap"] = !0, e["box-suppress"] = !0, e["break-after"] = !0, 
            e["break-before"] = !0, e["break-inside"] = !0, e["caption-side"] = !1, 
            e.chains = !1, e.clear = !0, e.clip = !1, e["clip-path"] = !1, e["clip-rule"] = !1, 
            e.color = !0, e["color-interpolation-filters"] = !0, e["column-count"] = !1, 
            e["column-fill"] = !1, e["column-gap"] = !1, e["column-rule"] = !1, 
            e["column-rule-color"] = !1, e["column-rule-style"] = !1, e["column-rule-width"] = !1, 
            e["column-span"] = !1, e["column-width"] = !1, e.columns = !1, e.contain = !1, 
            e.content = !1, e["counter-increment"] = !1, e["counter-reset"] = !1, 
            e["counter-set"] = !1, e.crop = !1, e.cue = !1, e["cue-after"] = !1, 
            e["cue-before"] = !1, e.cursor = !1, e.direction = !1, e.display = !0, 
            e["display-inside"] = !0, e["display-list"] = !0, e["display-outside"] = !0, 
            e["dominant-baseline"] = !1, e.elevation = !1, e["empty-cells"] = !1, 
            e.filter = !1, e.flex = !1, e["flex-basis"] = !1, e["flex-direction"] = !1, 
            e["flex-flow"] = !1, e["flex-grow"] = !1, e["flex-shrink"] = !1, e["flex-wrap"] = !1, 
            e.float = !1, e["float-offset"] = !1, e["flood-color"] = !1, e["flood-opacity"] = !1, 
            e["flow-from"] = !1, e["flow-into"] = !1, e.font = !0, e["font-family"] = !0, 
            e["font-feature-settings"] = !0, e["font-kerning"] = !0, e["font-language-override"] = !0, 
            e["font-size"] = !0, e["font-size-adjust"] = !0, e["font-stretch"] = !0, 
            e["font-style"] = !0, e["font-synthesis"] = !0, e["font-variant"] = !0, 
            e["font-variant-alternates"] = !0, e["font-variant-caps"] = !0, e["font-variant-east-asian"] = !0, 
            e["font-variant-ligatures"] = !0, e["font-variant-numeric"] = !0, e["font-variant-position"] = !0, 
            e["font-weight"] = !0, e.grid = !1, e["grid-area"] = !1, e["grid-auto-columns"] = !1, 
            e["grid-auto-flow"] = !1, e["grid-auto-rows"] = !1, e["grid-column"] = !1, 
            e["grid-column-end"] = !1, e["grid-column-start"] = !1, e["grid-row"] = !1, 
            e["grid-row-end"] = !1, e["grid-row-start"] = !1, e["grid-template"] = !1, 
            e["grid-template-areas"] = !1, e["grid-template-columns"] = !1, e["grid-template-rows"] = !1, 
            e["hanging-punctuation"] = !1, e.height = !0, e.hyphens = !1, e.icon = !1, 
            e["image-orientation"] = !1, e["image-resolution"] = !1, e["ime-mode"] = !1, 
            e["initial-letters"] = !1, e["inline-box-align"] = !1, e["justify-content"] = !1, 
            e["justify-items"] = !1, e["justify-self"] = !1, e.left = !1, e["letter-spacing"] = !0, 
            e["lighting-color"] = !0, e["line-box-contain"] = !1, e["line-break"] = !1, 
            e["line-grid"] = !1, e["line-height"] = !1, e["line-snap"] = !1, e["line-stacking"] = !1, 
            e["line-stacking-ruby"] = !1, e["line-stacking-shift"] = !1, e["line-stacking-strategy"] = !1, 
            e["list-style"] = !0, e["list-style-image"] = !0, e["list-style-position"] = !0, 
            e["list-style-type"] = !0, e.margin = !0, e["margin-bottom"] = !0, e["margin-left"] = !0, 
            e["margin-right"] = !0, e["margin-top"] = !0, e["marker-offset"] = !1, 
            e["marker-side"] = !1, e.marks = !1, e.mask = !1, e["mask-box"] = !1, 
            e["mask-box-outset"] = !1, e["mask-box-repeat"] = !1, e["mask-box-slice"] = !1, 
            e["mask-box-source"] = !1, e["mask-box-width"] = !1, e["mask-clip"] = !1, 
            e["mask-image"] = !1, e["mask-origin"] = !1, e["mask-position"] = !1, 
            e["mask-repeat"] = !1, e["mask-size"] = !1, e["mask-source-type"] = !1, 
            e["mask-type"] = !1, e["max-height"] = !0, e["max-lines"] = !1, e["max-width"] = !0, 
            e["min-height"] = !0, e["min-width"] = !0, e["move-to"] = !1, e["nav-down"] = !1, 
            e["nav-index"] = !1, e["nav-left"] = !1, e["nav-right"] = !1, e["nav-up"] = !1, 
            e["object-fit"] = !1, e["object-position"] = !1, e.opacity = !1, e.order = !1, 
            e.orphans = !1, e.outline = !1, e["outline-color"] = !1, e["outline-offset"] = !1, 
            e["outline-style"] = !1, e["outline-width"] = !1, e.overflow = !1, e["overflow-wrap"] = !1, 
            e["overflow-x"] = !1, e["overflow-y"] = !1, e.padding = !0, e["padding-bottom"] = !0, 
            e["padding-left"] = !0, e["padding-right"] = !0, e["padding-top"] = !0, 
            e.page = !1, e["page-break-after"] = !1, e["page-break-before"] = !1, 
            e["page-break-inside"] = !1, e["page-policy"] = !1, e.pause = !1, e["pause-after"] = !1, 
            e["pause-before"] = !1, e.perspective = !1, e["perspective-origin"] = !1, 
            e.pitch = !1, e["pitch-range"] = !1, e["play-during"] = !1, e.position = !1, 
            e["presentation-level"] = !1, e.quotes = !1, e["region-fragment"] = !1, 
            e.resize = !1, e.rest = !1, e["rest-after"] = !1, e["rest-before"] = !1, 
            e.richness = !1, e.right = !1, e.rotation = !1, e["rotation-point"] = !1, 
            e["ruby-align"] = !1, e["ruby-merge"] = !1, e["ruby-position"] = !1, 
            e["shape-image-threshold"] = !1, e["shape-outside"] = !1, e["shape-margin"] = !1, 
            e.size = !1, e.speak = !1, e["speak-as"] = !1, e["speak-header"] = !1, 
            e["speak-numeral"] = !1, e["speak-punctuation"] = !1, e["speech-rate"] = !1, 
            e.stress = !1, e["string-set"] = !1, e["tab-size"] = !1, e["table-layout"] = !1, 
            e["text-align"] = !0, e["text-align-last"] = !0, e["text-combine-upright"] = !0, 
            e["text-decoration"] = !0, e["text-decoration-color"] = !0, e["text-decoration-line"] = !0, 
            e["text-decoration-skip"] = !0, e["text-decoration-style"] = !0, e["text-emphasis"] = !0, 
            e["text-emphasis-color"] = !0, e["text-emphasis-position"] = !0, e["text-emphasis-style"] = !0, 
            e["text-height"] = !0, e["text-indent"] = !0, e["text-justify"] = !0, 
            e["text-orientation"] = !0, e["text-overflow"] = !0, e["text-shadow"] = !0, 
            e["text-space-collapse"] = !0, e["text-transform"] = !0, e["text-underline-position"] = !0, 
            e["text-wrap"] = !0, e.top = !1, e.transform = !1, e["transform-origin"] = !1, 
            e["transform-style"] = !1, e.transition = !1, e["transition-delay"] = !1, 
            e["transition-duration"] = !1, e["transition-property"] = !1, e["transition-timing-function"] = !1, 
            e["unicode-bidi"] = !1, e["vertical-align"] = !1, e.visibility = !1, 
            e["voice-balance"] = !1, e["voice-duration"] = !1, e["voice-family"] = !1, 
            e["voice-pitch"] = !1, e["voice-range"] = !1, e["voice-rate"] = !1, 
            e["voice-stress"] = !1, e["voice-volume"] = !1, e.volume = !1, e["white-space"] = !1, 
            e.widows = !1, e.width = !0, e["will-change"] = !1, e["word-break"] = !0, 
            e["word-spacing"] = !0, e["word-wrap"] = !0, e["wrap-flow"] = !1, e["wrap-through"] = !1, 
            e["writing-mode"] = !1, e["z-index"] = !1, e;
        }
        function r(e, t, n) {}
        function o(e, t, n) {}
        function i(e, t) {
            return a.test(t) ? "" : t;
        }
        var a = /javascript\s*\:/gim;
        t.whiteList = n(), t.getDefaultWhiteList = n, t.onAttr = r, t.onIgnoreAttr = o, 
        t.safeAttrValue = i;
    }, function(e, t) {
        e.exports = {
            indexOf: function(e, t) {
                var n, r;
                if (Array.prototype.indexOf) return e.indexOf(t);
                for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            },
            forEach: function(e, t, n) {
                var r, o;
                if (Array.prototype.forEach) return e.forEach(t, n);
                for (r = 0, o = e.length; r < o; r++) t.call(n, e[r], r, e);
            },
            trim: function(e) {
                return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
            },
            trimRight: function(e) {
                return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "");
            }
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), o = r("%TypeError%"), i = n(97), a = n(19), s = n(8);
        e.exports = function(e, t) {
            if ("Object" !== s(e)) throw new o("Assertion failed: Type(O) is not Object");
            if (!a(t)) throw new o("Assertion failed: IsPropertyKey(P) is not true, got " + i(t));
            return e[t];
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return "string" == typeof e || "symbol" == typeof e;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), o = r("%String%"), i = r("%TypeError%");
        e.exports = function(e) {
            if ("symbol" == typeof e) throw new i("Cannot convert a Symbol value to a string");
            return o(e);
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return null === e || "function" != typeof e && "object" != typeof e;
        };
    }, function(e, t, n) {
        "use strict";
        var r = "undefined" != typeof Symbol && Symbol, o = n(23);
        e.exports = function() {
            return "function" == typeof r && ("function" == typeof Symbol && ("symbol" == typeof r("foo") && ("symbol" == typeof Symbol("bar") && o())));
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function() {
            if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
            if ("symbol" == typeof Symbol.iterator) return !0;
            var e = {}, t = Symbol("test"), n = Object(t);
            if ("string" == typeof t) return !1;
            if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
            if ("[object Symbol]" !== Object.prototype.toString.call(n)) return !1;
            e[t] = 42;
            for (t in e) return !1;
            if ("function" == typeof Object.keys && 0 !== Object.keys(e).length) return !1;
            if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
            var r = Object.getOwnPropertySymbols(e);
            if (1 !== r.length || r[0] !== t) return !1;
            if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
            if ("function" == typeof Object.getOwnPropertyDescriptor) {
                var o = Object.getOwnPropertyDescriptor(e, t);
                if (42 !== o.value || !0 !== o.enumerable) return !1;
            }
            return !0;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(23);
        e.exports = function() {
            return r() && !!Symbol.toStringTag;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(9);
        e.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
    }, function(e, t, n) {
        "use strict";
        var r = n(29), o = [ "background", "base", "cite", "href", "longdesc", "src", "usemap" ];
        e.exports = {
            uris: r(o)
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(29), o = [ "area", "br", "col", "hr", "img", "wbr", "input", "base", "basefont", "link", "meta" ];
        e.exports = {
            voids: r(o)
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return "string" == typeof e ? e.toLowerCase() : e;
        };
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return e.reduce(o, {});
        }
        function o(e, t) {
            return e[t] = !0, e;
        }
        e.exports = r;
    }, function(e, t, n) {
        "use strict";
        var r = Object.prototype.toString;
        e.exports = function(e) {
            var t = r.call(e), n = "[object Arguments]" === t;
            return n || (n = "[object Array]" !== t && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === r.call(e.callee)), 
            n;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(5), o = n(1), i = o("Object.prototype.propertyIsEnumerable"), a = o("Array.prototype.push");
        e.exports = function(e) {
            var t = r(e), n = [];
            for (var o in t) i(t, o) && a(n, [ o, t[o] ]);
            return n;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(31);
        e.exports = function() {
            return "function" == typeof Object.entries ? Object.entries : r;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(5), o = n(20), i = n(1), a = i("String.prototype.replace"), s = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/, l = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
        e.exports = function() {
            var e = o(r(this));
            return a(a(e, s, ""), l, "");
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(33), o = "​";
        e.exports = function() {
            return String.prototype.trim && o.trim() === o ? String.prototype.trim : r;
        };
    }, function(e, t, n) {
        function r() {
            return {
                a: [ "target", "href", "title" ],
                abbr: [ "title" ],
                address: [],
                area: [ "shape", "coords", "href", "alt" ],
                article: [],
                aside: [],
                audio: [ "autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src" ],
                b: [],
                bdi: [ "dir" ],
                bdo: [ "dir" ],
                big: [],
                blockquote: [ "cite" ],
                br: [],
                caption: [],
                center: [],
                cite: [],
                code: [],
                col: [ "align", "valign", "span", "width" ],
                colgroup: [ "align", "valign", "span", "width" ],
                dd: [],
                del: [ "datetime" ],
                details: [ "open" ],
                div: [],
                dl: [],
                dt: [],
                em: [],
                figcaption: [],
                figure: [],
                font: [ "color", "size", "face" ],
                footer: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                header: [],
                hr: [],
                i: [],
                img: [ "src", "alt", "title", "width", "height" ],
                ins: [ "datetime" ],
                li: [],
                mark: [],
                nav: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                section: [],
                small: [],
                span: [],
                sub: [],
                summary: [],
                sup: [],
                strong: [],
                strike: [],
                table: [ "width", "border", "align", "valign" ],
                tbody: [ "align", "valign" ],
                td: [ "width", "rowspan", "colspan", "align", "valign" ],
                tfoot: [ "align", "valign" ],
                th: [ "width", "rowspan", "colspan", "align", "valign" ],
                thead: [ "align", "valign" ],
                tr: [ "rowspan", "align", "valign" ],
                tt: [],
                u: [],
                ul: [],
                video: [ "autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width" ]
            };
        }
        function o(e, t, n) {}
        function i(e, t, n) {}
        function a(e, t, n) {}
        function s(e, t, n) {}
        function l(e) {
            return e.replace(A, "&lt;").replace(O, "&gt;");
        }
        function c(e, t, n, r) {
            if (n = v(n), "href" === t || "src" === t) {
                if ("#" === (n = S.trim(n))) return "#";
                if ("http://" !== n.substr(0, 7) && "https://" !== n.substr(0, 8) && "mailto:" !== n.substr(0, 7) && "tel:" !== n.substr(0, 4) && "data:image/" !== n.substr(0, 11) && "ftp://" !== n.substr(0, 6) && "./" !== n.substr(0, 2) && "../" !== n.substr(0, 3) && "#" !== n[0] && "/" !== n[0]) return "";
            } else if ("background" === t) {
                if (z.lastIndex = 0, z.test(n)) return "";
            } else if ("style" === t) {
                if (C.lastIndex = 0, C.test(n)) return "";
                if (P.lastIndex = 0, P.test(n) && (z.lastIndex = 0, z.test(n))) return "";
                !1 !== r && (r = r || _, n = r.process(n));
            }
            return n = g(n);
        }
        function u(e) {
            return e.replace(j, "&quot;");
        }
        function f(e) {
            return e.replace($, '"');
        }
        function p(e) {
            return e.replace(E, function(e, t) {
                return "x" === t[0] || "X" === t[0] ? String.fromCharCode(parseInt(t.substr(1), 16)) : String.fromCharCode(parseInt(t, 10));
            });
        }
        function d(e) {
            return e.replace(T, ":").replace(I, " ");
        }
        function h(e) {
            for (var t = "", n = 0, r = e.length; n < r; n++) t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
            return S.trim(t);
        }
        function v(e) {
            return e = f(e), e = p(e), e = d(e), e = h(e);
        }
        function g(e) {
            return e = u(e), e = l(e);
        }
        function m() {
            return "";
        }
        function y(e, t) {
            function n(t) {
                return !!r || -1 !== S.indexOf(e, t);
            }
            "function" != typeof t && (t = function() {});
            var r = !Array.isArray(e), o = [], i = !1;
            return {
                onIgnoreTag: function(e, r, a) {
                    if (n(e)) {
                        if (a.isClosing) {
                            var s = "[/removed]", l = a.position + s.length;
                            return o.push([ !1 !== i ? i : a.position, l ]), i = !1, 
                            s;
                        }
                        return i || (i = a.position), "[removed]";
                    }
                    return t(e, r, a);
                },
                remove: function(e) {
                    var t = "", n = 0;
                    return S.forEach(o, function(r) {
                        t += e.slice(n, r[0]), n = r[1];
                    }), t += e.slice(n);
                }
            };
        }
        function b(e) {
            for (var t = "", n = 0; n < e.length; ) {
                var r = e.indexOf("\x3c!--", n);
                if (-1 === r) {
                    t += e.slice(n);
                    break;
                }
                t += e.slice(n, r);
                var o = e.indexOf("--\x3e", r);
                if (-1 === o) break;
                n = o + 3;
            }
            return t;
        }
        function w(e) {
            var t = e.split("");
            return t = t.filter(function(e) {
                var t = e.charCodeAt(0);
                return 127 !== t && (!(t <= 31) || (10 === t || 13 === t));
            }), t.join("");
        }
        var x = n(7).FilterCSS, k = n(7).getDefaultWhiteList, S = n(12), _ = new x(), A = /</g, O = />/g, j = /"/g, $ = /&quot;/g, E = /&#([a-zA-Z0-9]*);?/gim, T = /&colon;?/gim, I = /&newline;?/gim, z = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi, C = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, P = /u\s*r\s*l\s*\(.*/gi;
        t.whiteList = r(), t.getDefaultWhiteList = r, t.onTag = o, t.onIgnoreTag = i, 
        t.onTagAttr = a, t.onIgnoreTagAttr = s, t.safeAttrValue = c, t.escapeHtml = l, 
        t.escapeQuote = u, t.unescapeQuote = f, t.escapeHtmlEntities = p, t.escapeDangerHtml5Entities = d, 
        t.clearNonPrintableCharacter = h, t.friendlyAttrValue = v, t.escapeAttrValue = g, 
        t.onIgnoreTagStripAll = m, t.StripTagBody = y, t.stripCommentTag = b, t.stripBlankChar = w, 
        t.cssFilter = _, t.getDefaultCSSWhiteList = k;
    }, function(e, t, n) {
        function r(e) {
            var t = f.spaceIndex(e);
            if (-1 === t) var n = e.slice(1, -1); else var n = e.slice(1, t + 1);
            return n = f.trim(n).toLowerCase(), "/" === n.slice(0, 1) && (n = n.slice(1)), 
            "/" === n.slice(-1) && (n = n.slice(0, -1)), n;
        }
        function o(e) {
            return "</" === e.slice(0, 2);
        }
        function i(e, t, n) {
            "use strict";
            var i = "", a = 0, s = !1, l = !1, c = 0, u = e.length, f = "", p = "";
            e: for (c = 0; c < u; c++) {
                var d = e.charAt(c);
                if (!1 === s) {
                    if ("<" === d) {
                        s = c;
                        continue;
                    }
                } else if (!1 === l) {
                    if ("<" === d) {
                        i += n(e.slice(a, c)), s = c, a = c;
                        continue;
                    }
                    if (">" === d) {
                        i += n(e.slice(a, s)), p = e.slice(s, c + 1), f = r(p), 
                        i += t(s, i.length, f, p, o(p)), a = c + 1, s = !1;
                        continue;
                    }
                    if ('"' === d || "'" === d) for (var h = 1, v = e.charAt(c - h); "" === v.trim() || "=" === v; ) {
                        if ("=" === v) {
                            l = d;
                            continue e;
                        }
                        v = e.charAt(c - ++h);
                    }
                } else if (d === l) {
                    l = !1;
                    continue;
                }
            }
            return a < e.length && (i += n(e.substr(a))), i;
        }
        function a(e, t) {
            "use strict";
            function n(e, n) {
                if (e = f.trim(e), e = e.replace(p, "").toLowerCase(), !(e.length < 1)) {
                    var r = t(e, n || "");
                    r && o.push(r);
                }
            }
            for (var r = 0, o = [], i = !1, a = e.length, c = 0; c < a; c++) {
                var d, h, v = e.charAt(c);
                if (!1 !== i || "=" !== v) if (!1 === i || c !== r || '"' !== v && "'" !== v || "=" !== e.charAt(c - 1)) if (/\s|\n|\t/.test(v)) {
                    if (e = e.replace(/\s|\n|\t/g, " "), !1 === i) {
                        if (-1 === (h = s(e, c))) {
                            d = f.trim(e.slice(r, c)), n(d), i = !1, r = c + 1;
                            continue;
                        }
                        c = h - 1;
                        continue;
                    }
                    if (-1 === (h = l(e, c - 1))) {
                        d = f.trim(e.slice(r, c)), d = u(d), n(i, d), i = !1, r = c + 1;
                        continue;
                    }
                } else; else {
                    if (-1 === (h = e.indexOf(v, c + 1))) break;
                    d = f.trim(e.slice(r + 1, h)), n(i, d), i = !1, c = h, r = c + 1;
                } else i = e.slice(r, c), r = c + 1;
            }
            return r < e.length && (!1 === i ? n(e.slice(r)) : n(i, u(f.trim(e.slice(r))))), 
            f.trim(o.join(" "));
        }
        function s(e, t) {
            for (;t < e.length; t++) {
                var n = e[t];
                if (" " !== n) return "=" === n ? t : -1;
            }
        }
        function l(e, t) {
            for (;t > 0; t--) {
                var n = e[t];
                if (" " !== n) return "=" === n ? t : -1;
            }
        }
        function c(e) {
            return '"' === e[0] && '"' === e[e.length - 1] || "'" === e[0] && "'" === e[e.length - 1];
        }
        function u(e) {
            return c(e) ? e.substr(1, e.length - 2) : e;
        }
        var f = n(12), p = /[^a-zA-Z0-9_:\.\-]/gim;
        t.parseTag = i, t.parseAttr = a;
    }, function(e, t, n) {
        var r, o, i;
        /*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/
        !function(n, a) {
            o = [ e, t ], r = a, void 0 !== (i = "function" == typeof r ? r.apply(t, o) : r) && (e.exports = i);
        }(0, function(e, t) {
            "use strict";
            function n(e) {
                function t(t) {
                    var n = e.style.width;
                    e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t;
                }
                function n(e) {
                    for (var t = []; e && e.parentNode && e.parentNode instanceof Element; ) e.parentNode.scrollTop && t.push({
                        node: e.parentNode,
                        scrollTop: e.parentNode.scrollTop
                    }), e = e.parentNode;
                    return t;
                }
                function r() {
                    if (0 !== e.scrollHeight) {
                        var t = n(e), r = document.documentElement && document.documentElement.scrollTop;
                        e.style.height = "", e.style.height = e.scrollHeight + s + "px", 
                        l = e.clientWidth, t.forEach(function(e) {
                            e.node.scrollTop = e.scrollTop;
                        }), r && (document.documentElement.scrollTop = r);
                    }
                }
                function o() {
                    r();
                    var n = Math.round(parseFloat(e.style.height)), o = window.getComputedStyle(e, null), i = "content-box" === o.boxSizing ? Math.round(parseFloat(o.height)) : e.offsetHeight;
                    if (i < n ? "hidden" === o.overflowY && (t("scroll"), r(), i = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== o.overflowY && (t("hidden"), 
                    r(), i = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), 
                    c !== i) {
                        c = i;
                        var s = a("autosize:resized");
                        try {
                            e.dispatchEvent(s);
                        } catch (e) {}
                    }
                }
                if (e && e.nodeName && "TEXTAREA" === e.nodeName && !i.has(e)) {
                    var s = null, l = null, c = null, u = function() {
                        e.clientWidth !== l && o();
                    }, f = function(t) {
                        window.removeEventListener("resize", u, !1), e.removeEventListener("input", o, !1), 
                        e.removeEventListener("keyup", o, !1), e.removeEventListener("autosize:destroy", f, !1), 
                        e.removeEventListener("autosize:update", o, !1), Object.keys(t).forEach(function(n) {
                            e.style[n] = t[n];
                        }), i.delete(e);
                    }.bind(e, {
                        height: e.style.height,
                        resize: e.style.resize,
                        overflowY: e.style.overflowY,
                        overflowX: e.style.overflowX,
                        wordWrap: e.style.wordWrap
                    });
                    e.addEventListener("autosize:destroy", f, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", o, !1), 
                    window.addEventListener("resize", u, !1), e.addEventListener("input", o, !1), 
                    e.addEventListener("autosize:update", o, !1), e.style.overflowX = "hidden", 
                    e.style.wordWrap = "break-word", i.set(e, {
                        destroy: f,
                        update: o
                    }), function() {
                        var t = window.getComputedStyle(e, null);
                        "vertical" === t.resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), 
                        s = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), 
                        isNaN(s) && (s = 0), o();
                    }();
                }
            }
            function r(e) {
                var t = i.get(e);
                t && t.destroy();
            }
            function o(e) {
                var t = i.get(e);
                t && t.update();
            }
            var i = "function" == typeof Map ? new Map() : function() {
                var e = [], t = [];
                return {
                    has: function(t) {
                        return e.indexOf(t) > -1;
                    },
                    get: function(n) {
                        return t[e.indexOf(n)];
                    },
                    set: function(n, r) {
                        -1 === e.indexOf(n) && (e.push(n), t.push(r));
                    },
                    delete: function(n) {
                        var r = e.indexOf(n);
                        r > -1 && (e.splice(r, 1), t.splice(r, 1));
                    }
                };
            }(), a = function(e) {
                return new Event(e, {
                    bubbles: !0
                });
            };
            try {
                new Event("test");
            } catch (e) {
                a = function(e) {
                    var t = document.createEvent("Event");
                    return t.initEvent(e, !0, !1), t;
                };
            }
            var s = null;
            "undefined" == typeof window || "function" != typeof window.getComputedStyle ? (s = function(e) {
                return e;
            }, s.destroy = function(e) {
                return e;
            }, s.update = function(e) {
                return e;
            }) : (s = function(e, t) {
                return e && Array.prototype.forEach.call(e.length ? e : [ e ], function(e) {
                    return n(e);
                }), e;
            }, s.destroy = function(e) {
                return e && Array.prototype.forEach.call(e.length ? e : [ e ], r), 
                e;
            }, s.update = function(e) {
                return e && Array.prototype.forEach.call(e.length ? e : [ e ], o), 
                e;
            }), t.default = s, e.exports = t.default;
        });
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e) {
            return !!e && this.init(e), this;
        }
        function i(e) {
            return new o(e);
        }
        var a = n(47), s = r(a), l = n(37), c = r(l), u = n(41), f = r(u), p = n(13), d = r(p), h = n(6), v = n(45), g = r(v), m = n(40), y = r(m), b = n(44), w = n(42), x = r(w), k = n(3), S = r(k), _ = n(43), A = r(_), O = n(46), j = r(O), $ = n(39), E = (r($), 
        {
            comment: "",
            nick: "",
            mail: "",
            link: "",
            ua: S.default.ua,
            url: "",
            QQAvatar: ""
        }), T = "", I = {
            cdn: "https://gravatar.loli.net/avatar/",
            ds: [ "mp", "identicon", "monsterid", "wavatar", "robohash", "retro", "" ],
            params: "",
            hide: !1
        };
        o.prototype.init = function(e) {
            if ("undefined" == typeof document) throw new Error("Sorry, Valine does not support Server-side rendering.");
            var t = this;
            return e && (e = S.default.extend(h.CONFIG, e), t.i18n = (0, f.default)(e.lang || S.default.lang, e.langMode), 
            t.cfg = e, d.default.maps = !!e.emojiMaps && e.emojiMaps || d.default.maps, 
            d.default.cdn = !!e.emojiCDN && e.emojiCDN || d.default.cdn, t._init()), 
            t;
        }, o.prototype._init = function() {
            var e = this;
            try {
                var t = e.cfg, n = t.avatar, r = t.avatarForce, o = t.avatar_cdn, i = t.visitor, a = t.path, s = void 0 === a ? location.pathname : a, l = t.pageSize, c = t.recordIP;
                e.cfg.path = s.replace(/index\.html?$/, "");
                var u = I.ds, f = r ? "&q=" + h.RandomStr : "";
                I.params = "?d=" + (u.indexOf(n) > -1 ? n : "mp") + "&v=" + h.VERSION + f, 
                I.hide = "hide" === n, I.cdn = /^https?\:\/\//.test(o) ? o : I.cdn, 
                e.cfg.pageSize = isNaN(l) ? 10 : l < 1 ? 10 : l, c && (0, b.recordIPFn)(function(e) {
                    return E.ip = e;
                });
                var p = e.cfg.el || null, d = (0, S.default)(p);
                if (p = p instanceof HTMLElement ? p : d[d.length - 1] || null) {
                    e.$el = (0, S.default)(p), e.$el.addClass("v").attr("data-class", "v"), 
                    I.hide && e.$el.addClass("hide-avatar"), e.cfg.meta = (e.cfg.guest_info || e.cfg.meta || h.defaultMeta).filter(function(e) {
                        return h.defaultMeta.indexOf(e) > -1;
                    }), e.cfg.requiredFields = e.cfg.requiredFields.filter(function(e) {
                        return h.defaultMeta.indexOf(e) > -1;
                    });
                    var v = (0 == e.cfg.meta.length ? h.defaultMeta : e.cfg.meta).map(function(t) {
                        var n = "mail" == t ? "email" : "text";
                        return h.defaultMeta.indexOf(t) > -1 ? '<input name="' + t + '" placeholder="' + (e.cfg.metaPlaceholder[t] || e.i18n.t(t)) + '" class="v' + t + ' vinput" type="' + n + '">' : "";
                    }), g = '<div class="vpanel"><div class="vwrap"><p class="cancel-reply text-right" style="display:none;" title="' + e.i18n.t("cancelReply") + '"><svg class="vicon cancel-reply-btn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4220" width="22" height="22"><path d="M796.454 985H227.545c-50.183 0-97.481-19.662-133.183-55.363-35.7-35.701-55.362-83-55.362-133.183V227.545c0-50.183 19.662-97.481 55.363-133.183 35.701-35.7 83-55.362 133.182-55.362h568.909c50.183 0 97.481 19.662 133.183 55.363 35.701 35.702 55.363 83 55.363 133.183v568.909c0 50.183-19.662 97.481-55.363 133.183S846.637 985 796.454 985zM227.545 91C152.254 91 91 152.254 91 227.545v568.909C91 871.746 152.254 933 227.545 933h568.909C871.746 933 933 871.746 933 796.454V227.545C933 152.254 871.746 91 796.454 91H227.545z" p-id="4221"></path><path d="M568.569 512l170.267-170.267c15.556-15.556 15.556-41.012 0-56.569s-41.012-15.556-56.569 0L512 455.431 341.733 285.165c-15.556-15.556-41.012-15.556-56.569 0s-15.556 41.012 0 56.569L455.431 512 285.165 682.267c-15.556 15.556-15.556 41.012 0 56.569 15.556 15.556 41.012 15.556 56.569 0L512 568.569l170.267 170.267c15.556 15.556 41.012 15.556 56.569 0 15.556-15.556 15.556-41.012 0-56.569L568.569 512z" p-id="4222" ></path></svg></p><div class="vheader item' + v.length + '">' + v.join("") + '</div><div class="vedit"><textarea id="veditor" class="veditor vinput" placeholder="' + e.cfg.placeholder + '"></textarea><div class="vrow"><div class="vcol vcol-60 status-bar"></div><div class="vcol vcol-40 vctrl text-right"><span title="' + e.i18n.t("emoji") + '"  class="vicon vemoji-btn"><svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16172" width="22" height="22" ><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zM512 56.888889a455.111111 455.111111 0 1 0 455.111111 455.111111 455.111111 455.111111 0 0 0-455.111111-455.111111zM312.888889 512A85.333333 85.333333 0 1 1 398.222222 426.666667 85.333333 85.333333 0 0 1 312.888889 512z" p-id="16173"></path><path d="M512 768A142.222222 142.222222 0 0 1 369.777778 625.777778a28.444444 28.444444 0 0 1 56.888889 0 85.333333 85.333333 0 0 0 170.666666 0 28.444444 28.444444 0 0 1 56.888889 0A142.222222 142.222222 0 0 1 512 768z" p-id="16174"></path><path d="M782.222222 391.964444l-113.777778 59.733334a29.013333 29.013333 0 0 1-38.684444-10.808889 28.444444 28.444444 0 0 1 10.24-38.684445l113.777778-56.888888a28.444444 28.444444 0 0 1 38.684444 10.24 28.444444 28.444444 0 0 1-10.24 36.408888z" p-id="16175"></path><path d="M640.568889 451.697778l113.777778 56.888889a27.875556 27.875556 0 0 0 38.684444-10.24 27.875556 27.875556 0 0 0-10.24-38.684445l-113.777778-56.888889a28.444444 28.444444 0 0 0-38.684444 10.808889 28.444444 28.444444 0 0 0 10.24 38.115556z" p-id="16176"></path></svg></span><span title="' + e.i18n.t("preview") + '" class="vicon vpreview-btn"><svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17688" width="22" height="22"><path d="M502.390154 935.384615a29.538462 29.538462 0 1 1 0 59.076923H141.430154C79.911385 994.461538 29.538462 946.254769 29.538462 886.153846V137.846154C29.538462 77.745231 79.950769 29.538462 141.390769 29.538462h741.218462c61.44 0 111.852308 48.206769 111.852307 108.307692v300.268308a29.538462 29.538462 0 1 1-59.076923 0V137.846154c0-26.899692-23.355077-49.230769-52.775384-49.230769H141.390769c-29.420308 0-52.775385 22.331077-52.775384 49.230769v748.307692c0 26.899692 23.355077 49.230769 52.775384 49.230769h360.999385z" p-id="17689"></path><path d="M196.923077 216.615385m29.538461 0l374.153847 0q29.538462 0 29.538461 29.538461l0 0q0 29.538462-29.538461 29.538462l-374.153847 0q-29.538462 0-29.538461-29.538462l0 0q0-29.538462 29.538461-29.538461Z" p-id="17690"></path><path d="M649.846154 846.769231a216.615385 216.615385 0 1 0 0-433.230769 216.615385 216.615385 0 0 0 0 433.230769z m0 59.076923a275.692308 275.692308 0 1 1 0-551.384616 275.692308 275.692308 0 0 1 0 551.384616z" p-id="17691"></path><path d="M807.398383 829.479768m20.886847-20.886846l0 0q20.886846-20.886846 41.773692 0l125.321079 125.321079q20.886846 20.886846 0 41.773693l0 0q-20.886846 20.886846-41.773693 0l-125.321078-125.321079q-20.886846-20.886846 0-41.773693Z" p-id="17692"></path></svg></span></div></div></div><div class="vrow"><div class="vcol vcol-30" ><a alt="Markdown is supported" href="https://guides.github.com/features/mastering-markdown/" class="vicon" target="_blank"><svg class="markdown" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg></a></div><div class="vcol vcol-70 text-right"><button type="button"  title="Cmd|Ctrl+Enter" class="vsubmit vbtn">' + e.i18n.t("submit") + '</button></div></div><div class="vemojis" style="display:none;"></div><div class="vinput vpreview" style="display:none;"></div></div></div><div class="vcount" style="display:none;"><span class="vnum">0</span> ' + e.i18n.t("comments") + '</div><div class="vload-top text-center" style="display:none;"><i class="vspinner" style="width:30px;height:30px;"></i></div><div class="vcards"></div><div class="vload-bottom text-center" style="display:none;"><i class="vspinner" style="width:30px;height:30px;"></i></div><div class="vempty" style="display:none;"></div><div class="vpage txt-center" style="display:none"><button type="button" class="vmore vbtn">' + e.i18n.t("more") + '</button></div><div class="vpower txt-right">Powered By <a href="https://valine.js.org" target="_blank">Valine</a><br>v' + h.VERSION + "</div>";
                    e.$el.html(g), e.$el.find(".cancel-reply").on("click", function(t) {
                        e.reset();
                    });
                    var m = e.$el.find(".vempty");
                    e.$nodata = {
                        show: function(t) {
                            return m.html(t || e.i18n.t("sofa")).show(), e;
                        },
                        hide: function() {
                            return m.hide(), e;
                        }
                    };
                    var w = e.$el.find(".vload-bottom"), k = e.$el.find(".vload-top");
                    e.$loading = {
                        show: function(t) {
                            return t && k.show() || w.show(), e.$nodata.hide(), 
                            e;
                        },
                        hide: function() {
                            return k.hide(), w.hide(), 0 === e.$el.find(".vcard").length && e.$nodata.show(), 
                            e;
                        }
                    };
                }
                (0, y.default)(e.cfg, function(t) {
                    var n = (0, S.default)(".valine-comment-count"), r = 0;
                    !function t(n) {
                        var o = n[r++];
                        if (o) {
                            var i = (0, S.default)(o).attr("data-xid");
                            !!i && e.Q(i).count().then(function(e) {
                                o.innerText = e, t(n);
                            }).catch(function(e) {
                                o.innerText = 0;
                            });
                        }
                    }(n), i && C.add(AV.Object.extend("Counter"), e.cfg.path), e.$el && e.bind();
                });
            } catch (t) {
                (0, x.default)(e, t, "init");
            }
        };
        var z = function(e, t) {
            var n = new e(), r = new AV.ACL();
            r.setPublicReadAccess(!0), r.setPublicWriteAccess(!0), n.setACL(r), 
            n.set("url", t.url), n.set("xid", t.xid), n.set("title", t.title), n.set("time", 1), 
            n.save().then(function(e) {
                (0, S.default)(t.el).find(".leancloud-visitors-count").text(1);
            }).catch(function(e) {});
        }, C = {
            add: function(e, t) {
                var n = this, r = (0, S.default)(".leancloud_visitors,.leancloud-visitors");
                if (1 === r.length) {
                    var o = r[0], i = decodeURI((0, S.default)(o).attr("id")), a = (0, 
                    S.default)(o).attr("data-flag-title"), s = encodeURI(i), l = {
                        el: o,
                        url: i,
                        xid: s,
                        title: a
                    };
                    if (decodeURI(i) === decodeURI(t)) {
                        var c = new AV.Query(e);
                        c.equalTo("url", i), c.find().then(function(t) {
                            if (t.length > 0) {
                                var n = t[0];
                                n.increment("time"), n.save().then(function(e) {
                                    (0, S.default)(o).find(".leancloud-visitors-count").text(e.get("time"));
                                }).catch(function(e) {});
                            } else z(e, l);
                        }).catch(function(t) {
                            101 == t.code ? z(e, l) : (0, x.default)(n, t);
                        });
                    } else C.show(e, r);
                } else C.show(e, r);
            },
            show: function(e, t) {
                var n = [];
                if (t.forEach(function(e) {
                    var t = (0, S.default)(e).find(".leancloud-visitors-count");
                    t && t.text("0"), n.push(/\%/.test((0, S.default)(e).attr("id")) ? decodeURI((0, 
                    S.default)(e).attr("id")) : (0, S.default)(e).attr("id"));
                }), n.length) {
                    var r = new AV.Query(e);
                    r.containedIn("url", n), r.find().then(function(e) {
                        e.length > 0 && t.forEach(function(t) {
                            e.forEach(function(e) {
                                var n = e.get("xid") || encodeURI(e.get("url")), r = e.get("time"), o = (0, 
                                S.default)(t), i = o.attr("id");
                                if ((/\%/.test(i) ? i : encodeURI(i)) == n) {
                                    var a = o.find(".leancloud-visitors-count");
                                    a && a.text(r);
                                }
                            });
                        });
                    }).catch(function(e) {});
                }
            }
        };
        o.prototype.Q = function(e) {
            var t = this, n = arguments.length, r = t.cfg.clazzName;
            if (1 == n) {
                var o = new AV.Query(r);
                o.doesNotExist("rid");
                var i = new AV.Query(r);
                i.equalTo("rid", "");
                var a = AV.Query.or(o, i);
                return "*" === e ? a.exists("url") : a.equalTo("url", decodeURI(e)), 
                a.addDescending("createdAt"), a.addDescending("insertedAt"), a;
            }
            var s = JSON.stringify(arguments[1]).replace(/(\[|\])/g, ""), l = "select * from " + r + " where rid in (" + s + ") order by -createdAt,-createdAt";
            return AV.Query.doCloudQuery(l);
        }, o.prototype.installLocale = function(e, t) {
            var n = this;
            return n.i18n(e, t), n;
        }, o.prototype.setPath = function(e) {
            return this.config.path = e, this;
        }, o.prototype.bind = function() {
            var e = this, t = e.$el.find(".vemojis"), n = e.$el.find(".vpreview"), r = e.$el.find(".vemoji-btn"), o = e.$el.find(".vpreview-btn"), i = e.$el.find(".veditor"), a = d.default.maps, l = !1, u = function(e) {
                var n = [];
                for (var r in a) a.hasOwnProperty(r) && !!d.default.build(r) && n.push('<i title="' + r + '" >' + d.default.build(r) + "</i>");
                t.html(n.join("")), l = !0, t.find("i").on("click", function(e) {
                    e.preventDefault(), w(i[0], " :" + (0, S.default)(this).attr("title") + ":");
                });
            };
            e.$emoji = {
                show: function() {
                    return !l && u(), e.$preview.hide(), t.show(), r.addClass("actived"), 
                    e.$emoji;
                },
                hide: function() {
                    return r.removeClass("actived"), t.hide(), e.$emoji;
                }
            }, e.$preview = {
                show: function() {
                    return T ? (e.$emoji.hide(), o.addClass("actived"), n.html(T).show(), 
                    P()) : e.$preview.hide(), e.$preview;
                },
                hide: function() {
                    return o.removeClass("actived"), n.hide().html(""), e.$preview;
                }
            };
            var f = function(t) {
                var r = (0, A.default)(t.val() || "");
                r || e.$preview.hide(), T != r && (T = r, o.hasClass("actived") > -1 && T != n.html() && n.html(T), 
                (0, c.default)(t[0]), P());
            };
            r.on("click", function(t) {
                r.hasClass("actived") ? e.$emoji.hide() : e.$emoji.show();
            }), o.on("click", function(t) {
                o.hasClass("actived") ? e.$preview.hide() : e.$preview.show();
            });
            var p = e.cfg.meta, v = {}, m = {
                veditor: "comment"
            };
            p.forEach(function(e) {
                m["v" + e] = e;
            });
            for (var y in m) m.hasOwnProperty(y) && function() {
                var t = m[y], n = e.$el.find("." + y);
                v[t] = n, n.on("input change blur propertychange", function(r) {
                    e.cfg.enableQQ && "blur" === r.type && "nick" === t && (isNaN(n.val()) ? S.default.store.get(h.QQCacheKey) && S.default.store.get(h.QQCacheKey).nick != n.val() && (S.default.store.remove(h.QQCacheKey), 
                    E.nick = n.val(), E.mail = "", E.QQAvatar = "") : (0, b.fetchQQFn)(n.val(), function(e) {
                        var t = e.nick || n.val(), r = e.qq + "@qq.com";
                        (0, S.default)(".vnick").val(t), (0, S.default)(".vmail").val(r), 
                        E.nick = t, E.mail = r, E.QQAvatar = e.pic;
                    })), "comment" === t ? f(n) : E[t] = S.default.escape(n.val().replace(/(^\s*)|(\s*$)/g, "")).substring(0, 40);
                });
            }();
            var w = function(e, t) {
                if (document.selection) {
                    e.focus();
                    document.selection.createRange().text = t, e.focus();
                } else if (e.selectionStart || "0" == e.selectionStart) {
                    var n = e.selectionStart, r = e.selectionEnd, o = e.scrollTop;
                    e.value = e.value.substring(0, n) + t + e.value.substring(r, e.value.length), 
                    e.focus(), e.selectionStart = n + t.length, e.selectionEnd = n + t.length, 
                    e.scrollTop = o;
                } else e.focus(), e.value += t;
                setTimeout(function(t) {
                    f((0, S.default)(e));
                }, 100);
            }, k = {
                no: 1,
                size: e.cfg.pageSize,
                skip: e.cfg.pageSize
            }, _ = e.$el.find(".vpage");
            _.on("click", function(e) {
                _.hide(), k.no++, O();
            });
            var O = function() {
                var t = k.size, n = k.no, r = Number(e.$el.find(".vnum").text());
                e.$loading.show();
                var o = e.Q(e.cfg.path);
                o.limit(t), o.skip((n - 1) * t), o.find().then(function(o) {
                    if (k.skip = k.size, o && o.length) {
                        var i = [];
                        o.forEach(function(t) {
                            i.push(t.id), $(t, e.$el.find(".vcards"), !0);
                        }), e.Q(e.cfg.path, i).then(function(e) {
                            (e && e.results || []).forEach(function(e) {
                                $(e, (0, S.default)('.vquote[data-self-id="' + e.get("rid") + '"]'));
                            });
                        }).catch(function(e) {}), t * n < r ? _.show() : _.hide(), 
                        P();
                    } else e.$nodata.show();
                    e.$loading.hide();
                }).catch(function(t) {
                    e.$loading.hide(), (0, x.default)(e, t, "query");
                });
            };
            e.Q(e.cfg.path).count().then(function(t) {
                t > 0 ? (e.$el.find(".vcount").show().find(".vnum").text(t), O()) : e.$loading.hide();
            }).catch(function(t) {
                (0, x.default)(e, t, "count");
            });
            var $ = function(t, n, r) {
                var o = (0, S.default)('<div class="vcard" id="' + t.id + '"></div>'), i = t.get("ua"), a = "";
                i && !/ja/.test(e.cfg.lang) && (i = S.default.detect(i), a = i.os ? '<span class="vsys"><i class="browser-icon fab fa-' + ([ "xiaomi" ].includes(i.browser.toLowerCase()) ? "mobile-alt fas" : i.browser.toLowerCase()) + '"></i>' + i.browser + " " + i.version + '</span> <span class="vsys"><i class="os-icon fab fa-' + ([ "mac os", "ios" ].includes(i.os.toLowerCase()) ? "apple" : i.os.toLowerCase()) + '"></i>' + i.os + " " + i.osVersion + "</span>" : ""), 
                "*" === e.cfg.path && (a = '<a href="' + t.get("url") + '" class="vsys">' + t.get("url") + "</a>");
var ism = e.cfg.master.includes((0, s.default)(t.get("mail"))), isf = e.cfg.friends.includes((0, s.default)(t.get("mail").toLowerCase())), gat = ism ? '<span class="vtag vmaster">' + e.cfg.tagMeta[0] + "</span>" : isf ? '<span class="vtag vfriend">' + e.cfg.tagMeta[1] + "</span>" : '<span class="vtag vvisitor">' + e.cfg.tagMeta[2] + "</span>";
                var l = t.get("link") ? /^https?\:\/\//.test(t.get("link")) ? t.get("link") : "http://" + t.get("link") : "", c = S.default.escape(t.get("nick")), u = l ? '<a class="vnick" rel="nofollow" href="' + S.default.escape(l) + '" target="_blank" >' + c + "</a>" + gat : '<span class="vnick">' + c + "</span>" + gat, f = I.hide ? "" : e.cfg.enableQQ && t.get("QQAvatar") ? '<img class="vimg" src="' + t.get("QQAvatar") + '" referrerPolicy="no-referrer"/>' : '<img class="vimg" src="' + (I.cdn + (0, 
                s.default)(t.get("mail")) + I.params) + '">', p = f + '<div class="vh"><div class="vhead">' + u + " " + a + '</div><div class="vmeta"><span class="vtime" >' + (0, 
                g.default)(t.get("insertedAt"), e.i18n) + '</span><span class="vat" data-vm-id="' + (t.get("rid") || t.id) + '" data-self-id="' + t.id + '">' + e.i18n.t("reply") + '</span></div><div class="vcontent" data-expand="' + e.i18n.t("expand") + '">' + (0, 
                j.default)(t.get("comment")) + '</div><div class="vreply-wrapper" data-self-id="' + t.id + '"></div><div class="vquote" data-self-id="' + t.id + '"></div></div>';
                o.html(p);
                var d = o.find(".vat");
                o.find("a:not(.at)").forEach(function(e) {
                    (0, S.default)(e).attr({
                        target: "_blank",
                        rel: "noopener"
                    });
                }), r ? n.append(o) : n.prepend(o);
                var h = o.find(".vcontent");
                h && R(h), d && C(d, t);
            }, z = {}, C = function(t, n) {
                t.on("click", function(r) {
                    var o = t.attr("data-vm-id"), i = t.attr("data-self-id"), a = e.$el.find(".vwrap"), s = "@" + S.default.escape(n.get("nick"));
                    (0, S.default)('.vreply-wrapper[data-self-id="' + i + '"]').append(a).find(".cancel-reply").show(), 
                    z = {
                        at: S.default.escape(s) + " ",
                        rid: o,
                        pid: i,
                        rmail: n.get("mail")
                    }, v.comment.attr({
                        placeholder: s
                    })[0].focus();
                });
            }, P = function() {
                setTimeout(function() {
                    try {
                        e.cfg.mathjax && "MathJax" in window && "version" in window.MathJax && (/^3.*/.test(window.MathJax.version) && MathJax.typeset() || MathJax.Hub.Queue([ "Typeset", MathJax.Hub, document.querySelector(".v") ])), 
                        "renderMathInElement" in window && renderMathInElement((0, 
                        S.default)(".v")[0], {
                            delimiters: [ {
                                left: "$$",
                                right: "$$",
                                display: !0
                            }, {
                                left: "$",
                                right: "$",
                                display: !1
                            } ]
                        });
                    } catch (e) {}
                }, 100);
            }, R = function(e) {
                setTimeout(function() {
                    e[0].offsetHeight > 200 && (e.addClass("expand"), e.on("click", function(t) {
                        e.removeClass("expand");
                    }));
                });
            };
            !function(t) {
                if (t = S.default.store.get(h.MetaCacheKey) || t) for (var n in p) if (p.hasOwnProperty(n)) {
                    var r = p[n];
                    e.$el.find(".v" + r).val(S.default.unescape(t[r])), E[r] = t[r];
                }
                var o = S.default.store.get(h.QQCacheKey);
                E.QQAvatar = e.cfg.enableQQ && !!o && o.pic || "";
            }(), e.reset = function() {
                E.comment = "", v.comment.val(""), f(v.comment), v.comment.attr("placeholder", e.cfg.placeholder), 
                z = {}, e.$preview.hide(), e.$el.find(".vpanel").append(e.$el.find(".vwrap")), 
                e.$el.find(".cancel-reply").hide(), T = "";
            };
            var M = e.$el.find(".vsubmit"), F = function(t) {
                if (e.cfg.requiredFields.indexOf("nick") > -1 && E.nick.length < 3) return v.nick[0].focus(), 
                void e.$el.find(".status-bar").text("" + e.i18n.t("nickFail")).empty(3e3);
                if (e.cfg.requiredFields.indexOf("mail") > -1 && !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(E.mail)) return v.mail[0].focus(), 
                void e.$el.find(".status-bar").text("" + e.i18n.t("mailFail")).empty(3e3);
                if ("" == T) return void v.comment[0].focus();
                E.comment = T, E.nick = E.nick || "Anonymous";
                var n = S.default.store.get("vlx");
                if (n) {
                    if (Date.now() / 1e3 - n / 1e3 < 20) return void e.$el.find(".status-bar").text(e.i18n.t("busy")).empty(3e3);
                }
                N();
            }, L = function() {
                var e = new AV.ACL();
                return e.setPublicReadAccess(!0), e.setPublicWriteAccess(!1), e;
            }, N = function() {
                S.default.store.set("vlx", Date.now()), M.attr({
                    disabled: !0
                }), e.$loading.show(!0);
                var t = AV.Object.extend(e.cfg.clazzName || "Comment"), n = new t();
                if (E.url = decodeURI(e.cfg.path), E.insertedAt = new Date(), z.rid) {
                    var r = z.pid || z.rid;
                    n.set("rid", z.rid), n.set("pid", r), E.comment = T.replace("<p>", '<p><a class="at" href="#' + r + '">' + z.at + "</a> , ");
                }
                for (var o in E) if (E.hasOwnProperty(o)) {
                    var i = E[o];
                    n.set(o, i);
                }
                n.setACL(L()), n.save().then(function(t) {
                    "Anonymous" != E.nick && S.default.store.set(h.MetaCacheKey, {
                        nick: E.nick,
                        link: E.link,
                        mail: E.mail
                    });
                    var n = e.$el.find(".vnum");
                    try {
                        z.rid ? $(t, (0, S.default)('.vquote[data-self-id="' + z.rid + '"]'), !0) : (Number(n.text()) ? n.text(Number(n.text()) + 1) : e.$el.find(".vcount").show().find(".vnum").text(Number(n.text()) + 1), 
                        $(t, e.$el.find(".vcards")), k.skip++), M.removeAttr("disabled"), 
                        e.$loading.hide(), e.reset();
                    } catch (t) {
                        (0, x.default)(e, t, "save");
                    }
                }).catch(function(t) {
                    (0, x.default)(e, t, "commitEvt");
                });
            };
            M.on("click", F), (0, S.default)(document).on("keydown", function(e) {
                e = event || e;
                var t = e.keyCode || e.which || e.charCode;
                ((e.ctrlKey || e.metaKey) && 13 === t && F(), 9 === t) && ("veditor" == (document.activeElement.id || "") && (e.preventDefault(), 
                w(i[0], "    ")));
            }).on("paste", function(e) {
                var t = "clipboardData" in e ? e.clipboardData : e.originalEvent && e.originalEvent.clipboardData || window.clipboardData;
                t && U(t.items, !0);
            }), i.on("dragenter dragleave dragover drop", function(e) {
                e.stopPropagation(), e.preventDefault(), "drop" === e.type && U(e.dataTransfer.items);
            });
            var U = function(e, t) {
                for (var n = [], r = 0, o = e.length; r < o; r++) {
                    var a = e[r];
                    if ("string" === a.kind && a.type.match("^text/html")) !t && a.getAsString(function(e) {
                        e && w(i[0], e.replace(/<[^>]+>/g, ""));
                    }); else if (-1 !== a.type.indexOf("image")) {
                        n.push(a.getAsFile());
                        continue;
                    }
                }
                B(n);
            }, B = function t(n, r) {
                r = r || 0;
                var o = n.length;
                if (o > 0) {
                    var a = n[r];
                    M.attr({
                        disabled: !0
                    });
                    var s = "![Uploading " + a.name + "...]()";
                    w(i[0], s), D(a, function(l) {
                        500 != l.code ? (i.val(i.val().replace(s, "![" + a.name + "](" + l.data.url + ")\r\n")), 
                        (0, c.default)(i[0]), ++r < o ? t(n, r) : M.removeAttr("disabled")) : (i.val(i.val().replace(s, "")), 
                        (0, c.default)(i[0]), e.$el.find(".status-bar").text(l.msg).empty(3e3), 
                        M.removeAttr("disabled"));
                    });
                }
            }, D = function(e, t) {
                var n = new FormData();
                n.append("image", e), S.default.ajax({
                    url: "https://pic.alexhchu.com/api/upload",
                    method: "post",
                    body: n
                }).then(function(e) {
                    e.json().then(t);
                });
            };
        }, e.exports = i, e.exports.default = i;
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(3), o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r), i = function(e, t) {
            o.default.ajax({
                url: "https://app-router.com/2/route",
                body: {
                    appId: e
                }
            }).then(function(e) {
                e.json().then(function(e) {
                    return t && t("//" + e.api_server);
                });
            });
        };
        t.default = {
            getApi: i
        };
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(3), o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r), i = !1;
        t.default = function(e, t) {
            if ("AV" in window) {
                var n = window.AV.version || window.AV.VERSION;
                parseInt(n.split(".")[0]) > 2 ? i = !!AV.applicationId && !!AV.applicationKey : o.default.deleteInWin("AV", 0);
            }
            i ? t && t() : o.default.sdkLoader("//cdn.jsdelivr.net/npm/leancloud-storage@3/dist/av-min.js", "AV", function(n) {
                var r = "https://", o = "", a = e.app_id || e.appId, s = e.app_key || e.appKey;
                if (!e.serverURLs) switch (a.slice(-9)) {
                  case "-9Nh9j0Va":
                    r += "tab.";
                    break;

                  case "-MdYXbMMI":
                    r += "us.";
                }
                o = e.serverURLs || r + "leancloud.cn", AV.init({
                    appId: a,
                    appKey: s,
                    serverURLs: o
                }), i = !0, t && t();
            });
        };
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        t.__esModule = !0;
        var o = n(95), i = r(o), a = n(111), s = r(a), l = n(112), c = r(l), u = n(109), f = r(u), p = n(110), d = r(p), h = {
            zh: s.default,
            "zh-cn": s.default,
            "zh-CN": s.default,
            "zh-TW": c.default,
            en: f.default,
            "en-US": f.default,
            ja: d.default,
            "ja-JP": d.default
        };
        t.default = function(e, t) {
            return !h[e] && e && t && (h[e] = t), new i.default({
                phrases: h[e || "zh"],
                locale: e
            });
        };
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0, t.default = function(e, t) {
            if (e.$el && e.$loading.hide().$nodata.hide(), "[object Error]" === {}.toString.call(t)) {
                var n = t.code || t.message || t.error || "";
                if (isNaN(n)) e.$el && e.$nodata.show('<pre style="text-align:left;"> ' + JSON.stringify(t) + "</pre>"); else {
                    var r = e.i18n.t("code-" + n), o = (r == "code-" + n ? void 0 : r) || t.message || t.error || "";
                    101 == n || -1 == n ? e.$nodata.show() : e.$el && e.$nodata.show('<pre style="text-align:left;">Code ' + n + ": " + o + "</pre>");
                }
            } else e.$el && e.$nodata.show('<pre style="text-align:left;">' + JSON.stringify(t) + "</pre>");
        };
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        t.__esModule = !0;
        var o = n(94), i = r(o), a = n(54), s = r(a), l = n(86), c = r(l), u = n(3), f = r(u), p = n(13), d = r(p), h = new i.default.Renderer();
        h.code = function(e, t) {
            return '<pre><code class="hljs language-' + t + '">' + (t && hljs.getLanguage(t) ? hljs.highlight(t, e).value : f.default.escape(e)) + "</code></pre>";
        }, i.default.setOptions({
            renderer: "hljs" in window ? h : new i.default.Renderer(),
            highlight: function(e, t) {
                return "hljs" in window ? t && hljs.getLanguage(t) && hljs.highlight(t, e, !0).value || hljs.highlightAuto(e).value : (0, 
                c.default)(e);
            },
            gfm: !0,
            tables: !0,
            breaks: !0,
            pedantic: !1,
            sanitize: !0,
            sanitizer: s.default,
            smartLists: !0,
            smartypants: !0,
            headerPrefi: "v-"
        }), t.default = function(e) {
            return (0, i.default)(d.default.parse(e, !0));
        };
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0, t.recordIPFn = t.fetchQQFn = void 0;
        var r = n(3), o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r), i = n(6), a = function(e, t) {
            var n = o.default.store.get(i.QQCacheKey);
            n && n.qq == e ? t && t(n) : o.default.ajax({
                url: "//valine.api.ioliu.cn/getqqinfo",
                method: "POST",
                body: {
                    qq: e
                }
            }).then(function(e) {
                e.json().then(function(e) {
                    e.errmsg || (o.default.store.set(i.QQCacheKey, e), t && t(e));
                });
            });
        }, s = function(e) {
            o.default.ajax({
                url: "//api.ip.sb/jsonip",
                method: "jsonp"
            }).then(function(t) {
                e(t.ip);
            });
        };
        t.fetchQQFn = a, t.recordIPFn = s;
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0, t.default = function(e, t) {
            if (!e) return "";
            try {
                var n = o(e).getTime(), i = new Date().getTime(), a = i - n, s = Math.floor(a / 864e5);
                if (0 === s) {
                    var l = a % 864e5, c = Math.floor(l / 36e5);
                    if (0 === c) {
                        var u = l % 36e5, f = Math.floor(u / 6e4);
                        if (0 === f) {
                            var p = u % 6e4;
                            return Math.round(p / 1e3) + " " + t.t("seconds");
                        }
                        return f + " " + t.t("minutes");
                    }
                    return c + " " + t.t("hours");
                }
                return s < 0 ? t.t("now") : s < 8 ? s + " " + t.t("days") : r(e);
            } catch (e) {}
        };
        var r = function(e) {
            var t = i(e.getDate(), 2), n = i(e.getMonth() + 1, 2);
            return i(e.getFullYear(), 2) + "-" + n + "-" + t;
        }, o = function e(t) {
            return t instanceof Date ? t : !isNaN(t) || /^\d+$/.test(t) ? new Date(parseInt(t)) : /GMT/.test(t || "") ? e(new Date(t).getTime()) : (t = (t || "").replace(/(^\s*)|(\s*$)/g, "").replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([+-]\d\d):?(\d\d)/, " $1$2"), 
            new Date(t));
        }, i = function(e, t) {
            for (var n = e.toString(); n.length < t; ) n = "0" + n;
            return n;
        };
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(106), o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r);
        t.default = function(e) {
            return (0, o.default)(e, {
                onTagAttr: function(e, t, n, r) {
                    return i(e, t, n, r);
                },
                onIgnoreTagAttr: function(e, t, n, r) {
                    return i(e, t, n, r);
                }
            }).replace(/\<\/?div\>/gi, "");
        };
        var i = function(e, t, n, r) {
            if (/code|pre|span/i.test(e)) {
                if ("style" == t) {
                    var i = n.match(/color:([#a-z0-9]{3,7}|\s+[#a-z0-9]{3,8})/gi);
                    return i && i.length ? 'style="' + i[0] + '"' : "";
                }
                if ("class" == t) return t + "='" + o.default.escapeAttrValue(n) + "'";
            }
            return "a" === e && "class" == t && "at" === n ? t + "='" + o.default.escapeAttrValue(n) + "'" : "img" === e && /src|class/i.test(t) ? t + "='" + o.default.escapeAttrValue(n) + "' referrerPolicy='no-referrer'" : void 0;
        };
    }, function(e, t, n) {
        var r;
        !function(o) {
            "use strict";
            function i(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
            }
            function a(e, t) {
                return e << t | e >>> 32 - t;
            }
            function s(e, t, n, r, o, s) {
                return i(a(i(i(t, e), i(r, s)), o), n);
            }
            function l(e, t, n, r, o, i, a) {
                return s(t & n | ~t & r, e, t, o, i, a);
            }
            function c(e, t, n, r, o, i, a) {
                return s(t & r | n & ~r, e, t, o, i, a);
            }
            function u(e, t, n, r, o, i, a) {
                return s(t ^ n ^ r, e, t, o, i, a);
            }
            function f(e, t, n, r, o, i, a) {
                return s(n ^ (t | ~r), e, t, o, i, a);
            }
            function p(e, t) {
                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                var n, r, o, a, s, p = 1732584193, d = -271733879, h = -1732584194, v = 271733878;
                for (n = 0; n < e.length; n += 16) r = p, o = d, a = h, s = v, p = l(p, d, h, v, e[n], 7, -680876936), 
                v = l(v, p, d, h, e[n + 1], 12, -389564586), h = l(h, v, p, d, e[n + 2], 17, 606105819), 
                d = l(d, h, v, p, e[n + 3], 22, -1044525330), p = l(p, d, h, v, e[n + 4], 7, -176418897), 
                v = l(v, p, d, h, e[n + 5], 12, 1200080426), h = l(h, v, p, d, e[n + 6], 17, -1473231341), 
                d = l(d, h, v, p, e[n + 7], 22, -45705983), p = l(p, d, h, v, e[n + 8], 7, 1770035416), 
                v = l(v, p, d, h, e[n + 9], 12, -1958414417), h = l(h, v, p, d, e[n + 10], 17, -42063), 
                d = l(d, h, v, p, e[n + 11], 22, -1990404162), p = l(p, d, h, v, e[n + 12], 7, 1804603682), 
                v = l(v, p, d, h, e[n + 13], 12, -40341101), h = l(h, v, p, d, e[n + 14], 17, -1502002290), 
                d = l(d, h, v, p, e[n + 15], 22, 1236535329), p = c(p, d, h, v, e[n + 1], 5, -165796510), 
                v = c(v, p, d, h, e[n + 6], 9, -1069501632), h = c(h, v, p, d, e[n + 11], 14, 643717713), 
                d = c(d, h, v, p, e[n], 20, -373897302), p = c(p, d, h, v, e[n + 5], 5, -701558691), 
                v = c(v, p, d, h, e[n + 10], 9, 38016083), h = c(h, v, p, d, e[n + 15], 14, -660478335), 
                d = c(d, h, v, p, e[n + 4], 20, -405537848), p = c(p, d, h, v, e[n + 9], 5, 568446438), 
                v = c(v, p, d, h, e[n + 14], 9, -1019803690), h = c(h, v, p, d, e[n + 3], 14, -187363961), 
                d = c(d, h, v, p, e[n + 8], 20, 1163531501), p = c(p, d, h, v, e[n + 13], 5, -1444681467), 
                v = c(v, p, d, h, e[n + 2], 9, -51403784), h = c(h, v, p, d, e[n + 7], 14, 1735328473), 
                d = c(d, h, v, p, e[n + 12], 20, -1926607734), p = u(p, d, h, v, e[n + 5], 4, -378558), 
                v = u(v, p, d, h, e[n + 8], 11, -2022574463), h = u(h, v, p, d, e[n + 11], 16, 1839030562), 
                d = u(d, h, v, p, e[n + 14], 23, -35309556), p = u(p, d, h, v, e[n + 1], 4, -1530992060), 
                v = u(v, p, d, h, e[n + 4], 11, 1272893353), h = u(h, v, p, d, e[n + 7], 16, -155497632), 
                d = u(d, h, v, p, e[n + 10], 23, -1094730640), p = u(p, d, h, v, e[n + 13], 4, 681279174), 
                v = u(v, p, d, h, e[n], 11, -358537222), h = u(h, v, p, d, e[n + 3], 16, -722521979), 
                d = u(d, h, v, p, e[n + 6], 23, 76029189), p = u(p, d, h, v, e[n + 9], 4, -640364487), 
                v = u(v, p, d, h, e[n + 12], 11, -421815835), h = u(h, v, p, d, e[n + 15], 16, 530742520), 
                d = u(d, h, v, p, e[n + 2], 23, -995338651), p = f(p, d, h, v, e[n], 6, -198630844), 
                v = f(v, p, d, h, e[n + 7], 10, 1126891415), h = f(h, v, p, d, e[n + 14], 15, -1416354905), 
                d = f(d, h, v, p, e[n + 5], 21, -57434055), p = f(p, d, h, v, e[n + 12], 6, 1700485571), 
                v = f(v, p, d, h, e[n + 3], 10, -1894986606), h = f(h, v, p, d, e[n + 10], 15, -1051523), 
                d = f(d, h, v, p, e[n + 1], 21, -2054922799), p = f(p, d, h, v, e[n + 8], 6, 1873313359), 
                v = f(v, p, d, h, e[n + 15], 10, -30611744), h = f(h, v, p, d, e[n + 6], 15, -1560198380), 
                d = f(d, h, v, p, e[n + 13], 21, 1309151649), p = f(p, d, h, v, e[n + 4], 6, -145523070), 
                v = f(v, p, d, h, e[n + 11], 10, -1120210379), h = f(h, v, p, d, e[n + 2], 15, 718787259), 
                d = f(d, h, v, p, e[n + 9], 21, -343485551), p = i(p, r), d = i(d, o), 
                h = i(h, a), v = i(v, s);
                return [ p, d, h, v ];
            }
            function d(e) {
                var t, n = "", r = 32 * e.length;
                for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                return n;
            }
            function h(e) {
                var t, n = [];
                for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                var r = 8 * e.length;
                for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                return n;
            }
            function v(e) {
                return d(p(h(e), 8 * e.length));
            }
            function g(e, t) {
                var n, r, o = h(e), i = [], a = [];
                for (i[15] = a[15] = void 0, o.length > 16 && (o = p(o, 8 * e.length)), 
                n = 0; n < 16; n += 1) i[n] = 909522486 ^ o[n], a[n] = 1549556828 ^ o[n];
                return r = p(i.concat(h(t)), 512 + 8 * t.length), d(p(a.concat(r), 640));
            }
            function m(e) {
                var t, n, r = "0123456789abcdef", o = "";
                for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), o += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
                return o;
            }
            function y(e) {
                return unescape(encodeURIComponent(e));
            }
            function b(e) {
                return v(y(e));
            }
            function w(e) {
                return m(b(e));
            }
            function x(e, t) {
                return g(y(e), y(t));
            }
            function k(e, t) {
                return m(x(e, t));
            }
            function S(e, t, n) {
                return t ? n ? x(t, e) : k(t, e) : n ? b(e) : w(e);
            }
            void 0 !== (r = function() {
                return S;
            }.call(t, n, t, e)) && (e.exports = r);
        }();
    }, function(e, t, n) {
        "use strict";
        var r = n(2), o = n(4), i = n(1), a = n(5), s = n(14), l = n(15), c = l(), u = n(49), f = i("Array.prototype.slice"), p = o.apply(c), d = function(e, t) {
            return a(e), p(e, f(arguments, 1));
        };
        r(d, {
            getPolyfill: l,
            implementation: s,
            shim: u
        }), e.exports = d;
    }, function(e, t, n) {
        "use strict";
        var r = n(2), o = n(15);
        e.exports = function() {
            var e = o();
            return r(Array.prototype, {
                forEach: e
            }, {
                forEach: function() {
                    return Array.prototype.forEach !== e;
                }
            }), e;
        };
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            for (var t, n, o = Array.prototype.slice.call(arguments, 1); o.length; ) {
                t = o.shift();
                for (n in t) t.hasOwnProperty(n) && ("[object Object]" === Object.prototype.toString.call(e[n]) ? e[n] = r(e[n], t[n]) : e[n] = t[n]);
            }
            return e;
        }
        e.exports = r;
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(53), o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r);
        t.default = function(e) {
            return e = (0, o.default)({
                url: "",
                method: "get",
                body: {}
            }, e), new Promise(function(t, n) {
                if ("jsonp" == e.method) {
                    var r = "cb_" + (Date.now() + Math.round(1e3 * Math.random())).toString(32), o = document, i = o.body, s = o.createElement("script");
                    return e.body.callback = r, e.body.t = Date.now(), s.src = e.url + "?" + a(e.body), 
                    window[r] = function(e) {
                        window[r] = null, i.removeChild(s), t(e);
                    }, void i.appendChild(s);
                }
                var l = "XMLHttpRequest" in window ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"), c = [], u = [], f = {}, p = function e() {
                    return {
                        ok: 2 == (l.status / 100 | 0),
                        statusText: l.statusText,
                        status: l.status,
                        url: l.responseURL,
                        text: function() {
                            return Promise.resolve(l.responseText);
                        },
                        json: function() {
                            return Promise.resolve(l.responseText).then(JSON.parse);
                        },
                        blob: function() {
                            return Promise.resolve(new Blob([ l.response ]));
                        },
                        clone: e,
                        headers: {
                            keys: function() {
                                return c;
                            },
                            entries: function() {
                                return u;
                            },
                            get: function(e) {
                                return f[e.toLowerCase()];
                            },
                            has: function(e) {
                                return e.toLowerCase() in f;
                            }
                        }
                    };
                };
                e.url = e.url + "?" + ("get" == e.method ? a(e.body) : ""), l.open(e.method || "get", e.url, !0), 
                l.onload = function() {
                    l.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e, t, n) {
                        c.push(t = t.toLowerCase()), u.push([ t, n ]), f[t] = f[t] ? f[t] + "," + n : n;
                    }), t(p());
                }, l.onerror = n, l.withCredentials = "include" == e.credentials;
                for (var d in e.headers) l.setRequestHeader(d, e.headers[d]);
                l.send("post" == e.method ? e.body : "get" == e.method ? null : a(e.body));
            });
        };
        var i = encodeURIComponent, a = function(e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(i(n) + "=" + i(e[n]));
            return (t = t.join("&").replace(/%20/g, "+")) || null;
        };
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = function(e) {
            e = e || navigator.userAgent;
            var t = {}, n = {
                Trident: e.indexOf("Trident") > -1 || e.indexOf("NET CLR") > -1,
                Presto: e.indexOf("Presto") > -1,
                WebKit: e.indexOf("AppleWebKit") > -1,
                Gecko: e.indexOf("Gecko/") > -1,
                Safari: e.indexOf("Safari") > -1,
                Edge: e.indexOf("Edge") > -1 || e.indexOf("Edg") > -1,
                Chrome: e.indexOf("Chrome") > -1 || e.indexOf("CriOS") > -1,
                IE: e.indexOf("MSIE") > -1 || e.indexOf("Trident") > -1,
                Firefox: e.indexOf("Firefox") > -1 || e.indexOf("FxiOS") > -1,
                "Firefox Focus": e.indexOf("Focus") > -1,
                Chromium: e.indexOf("Chromium") > -1,
                Opera: e.indexOf("Opera") > -1 || e.indexOf("OPR") > -1,
                Vivaldi: e.indexOf("Vivaldi") > -1,
                Yandex: e.indexOf("YaBrowser") > -1,
                Kindle: e.indexOf("Kindle") > -1 || e.indexOf("Silk/") > -1,
                360: e.indexOf("360EE") > -1 || e.indexOf("360SE") > -1,
                UC: e.indexOf("UC") > -1 || e.indexOf(" UBrowser") > -1,
                QQBrowser: e.indexOf("QQBrowser") > -1,
                QQ: e.indexOf("QQ/") > -1,
                Baidu: e.indexOf("Baidu") > -1 || e.indexOf("BIDUBrowser") > -1,
                Maxthon: e.indexOf("Maxthon") > -1,
                Sogou: e.indexOf("MetaSr") > -1 || e.indexOf("Sogou") > -1,
                LBBROWSER: e.indexOf("LBBROWSER") > -1,
                "2345Explorer": e.indexOf("2345Explorer") > -1,
                TheWorld: e.indexOf("TheWorld") > -1,
                XiaoMi: e.indexOf("MiuiBrowser") > -1,
                Quark: e.indexOf("Quark") > -1,
                Qiyu: e.indexOf("Qiyu") > -1,
                Wechat: e.indexOf("MicroMessenger") > -1,
                Taobao: e.indexOf("AliApp(TB") > -1,
                Alipay: e.indexOf("AliApp(AP") > -1,
                Weibo: e.indexOf("Weibo") > -1,
                Douban: e.indexOf("com.douban.frodo") > -1,
                Suning: e.indexOf("SNEBUY-APP") > -1,
                iQiYi: e.indexOf("IqiyiApp") > -1,
                Windows: e.indexOf("Windows") > -1,
                Linux: e.indexOf("Linux") > -1 || e.indexOf("X11") > -1,
                macOS: e.indexOf("Macintosh") > -1,
                Android: e.indexOf("Android") > -1 || e.indexOf("Adr") > -1,
                Ubuntu: e.indexOf("Ubuntu") > -1,
                FreeBSD: e.indexOf("FreeBSD") > -1,
                Debian: e.indexOf("Debian") > -1,
                "Windows Phone": e.indexOf("IEMobile") > -1 || e.indexOf("Windows Phone") > -1,
                BlackBerry: e.indexOf("BlackBerry") > -1 || e.indexOf("RIM") > -1 || e.indexOf("BB10") > -1,
                MeeGo: e.indexOf("MeeGo") > -1,
                Symbian: e.indexOf("Symbian") > -1,
                iOS: e.indexOf("like Mac OS X") > -1,
                "Chrome OS": e.indexOf("CrOS") > -1,
                WebOS: e.indexOf("hpwOS") > -1,
                Mobile: e.indexOf("Mobi") > -1 || e.indexOf("iPh") > -1 || e.indexOf("480") > -1,
                Tablet: e.indexOf("Tablet") > -1 || e.indexOf("Pad") > -1 || e.indexOf("Nexus 7") > -1
            };
            n.Mobile && (n.Mobile = !(e.indexOf("iPad") > -1));
            var r = {
                browser: [ "Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Kindle", "360", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER", "2345Explorer", "TheWorld", "XiaoMi", "Quark", "Qiyu", "Wechat", "Taobao", "Alipay", "Weibo", "Douban", "Suning", "iQiYi" ],
                os: [ "Windows", "Linux", "Mac OS", "macOS", "Android", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone", "BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS" ]
            };
            for (var o in r) if (r.hasOwnProperty(o)) for (var i = 0, a = r[o].length; i < a; i++) {
                var s = r[o][i];
                n[s] && (t[o] = s);
            }
            var l = {
                Windows: function() {
                    var t = e.replace(/^.*Windows NT ([\d.]+).*$/, "$1");
                    return {
                        6.4: "10",
                        6.3: "8.1",
                        6.2: "8",
                        6.1: "7",
                        "6.0": "Vista",
                        5.2: "XP",
                        5.1: "XP",
                        "5.0": "2000"
                    }[t] || t;
                },
                Android: e.replace(/^.*Android ([\d.]+);.*$/, "$1"),
                iOS: e.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, "."),
                Debian: e.replace(/^.*Debian\/([\d.]+).*$/, "$1"),
                "Windows Phone": e.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2"),
                macOS: e.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, "."),
                WebOS: e.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1"),
                BlackBerry: e.replace(/^.*BB([\d.]+);*$/, "$1")
            };
            t.osVersion = "";
            var c = l[t.os];
            c && (t.osVersion = "function" == typeof c ? c() : c == e ? "" : c);
            var u = {
                Safari: e.replace(/^.*Version\/([\d.]+).*$/, "$1"),
                Chrome: e.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1"),
                IE: e.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1"),
                Edge: e.replace(/^.*Edge?\/([\d.]+).*$/, "$1"),
                Firefox: e.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1"),
                "Firefox Focus": e.replace(/^.*Focus\/([\d.]+).*$/, "$1"),
                Chromium: e.replace(/^.*Chromium\/([\d.]+).*$/, "$1"),
                Opera: e.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1"),
                Vivaldi: e.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1"),
                Yandex: e.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1"),
                Kindle: e.replace(/^.*Version\/([\d.]+).*$/, "$1"),
                Maxthon: e.replace(/^.*Maxthon\/([\d.]+).*$/, "$1"),
                QQBrowser: e.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1"),
                QQ: e.replace(/^.*QQ\/([\d.]+).*$/, "$1"),
                Baidu: e.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1"),
                UC: e.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1"),
                Sogou: e.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1"),
                "2345Explorer": e.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1"),
                TheWorld: e.replace(/^.*TheWorld ([\d.]+).*$/, "$1"),
                XiaoMi: e.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1"),
                Quark: e.replace(/^.*Quark\/([\d.]+).*$/, "$1"),
                Qiyu: e.replace(/^.*Qiyu\/([\d.]+).*$/, "$1"),
                Wechat: e.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1"),
                Taobao: e.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1"),
                Alipay: e.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1"),
                Weibo: e.replace(/^.*weibo__([\d.]+).*$/, "$1"),
                Douban: e.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1"),
                Suning: e.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1"),
                iQiYi: e.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1")
            };
            t.version = "";
            var f = u[t.browser];
            return f && (t.version = "function" == typeof f ? f() : f == e ? "" : f), 
            void 0 == t.browser && (t.browser = "Unknow App"), t;
        };
        t.default = r;
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0, t.default = function(e) {
            e = Object(e);
            for (var t = 1, n = arguments.length; t < n; t++) {
                var r = arguments[t];
                if (r) for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            }
            return e;
        };
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(88), o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r);
        t.default = function(e) {
            return (0, o.default)(e, {
                allowedAttributes: {
                    a: [ "title", "href", "name", "target", "rel" ],
                    img: [ "alt", "src", "class", "referrerpolicy" ]
                },
                allowedClasses: {},
                allowedSchemes: [ "http", "https", "mailto" ],
                allowedTags: [ "a", "article", "b", "blockquote", "br", "caption", "code", "del", "details", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "ins", "kbd", "li", "main", "ol", "p", "pre", "section", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "th", "thead", "tr", "u", "ul" ],
                filter: null,
                transformText: null
            });
        };
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return /^\{[\s\S]*\}$/.test(JSON.stringify(e));
        }
        function o(e) {
            return "[object Function]" === {}.toString.call(e);
        }
        function i(e) {
            return "[object Array]" === {}.toString.call(e);
        }
        function a(e) {
            return void 0 === e || "function" == typeof e ? e + "" : JSON.stringify(e);
        }
        function s(e) {
            if ("string" == typeof e) try {
                return JSON.parse(e);
            } catch (t) {
                return e;
            }
        }
        function l() {
            if (!(this instanceof l)) return new l();
        }
        function c(e, t) {
            var n = arguments, a = null;
            if (f || (f = l()), 0 === n.length) return f.get();
            if (1 === n.length) {
                if ("string" == typeof e) return f.get(e);
                if (r(e)) return f.set(e);
            }
            if (2 === n.length && "string" == typeof e) {
                if (!t) return f.remove(e);
                if (t && "string" == typeof t) return f.set(e, t);
                t && o(t) && (a = null, a = t(e, f.get(e)), c.set(e, a));
            }
            if (2 === n.length && i(e) && o(t)) for (var s = 0, u = e.length; s < u; s++) a = t(e[s], f.get(e[s])), 
            c.set(e[s], a);
            return c;
        }
        t.__esModule = !0;
        var u = window.localStorage;
        u = function(e) {
            var t = "_Is_Incognit";
            try {
                e.setItem(t, "yes");
            } catch (t) {
                if ([ "QuotaExceededError", "NS_ERROR_DOM_QUOTA_REACHED" ].indexOf(t.name) > -1) {
                    var n = function() {};
                    e.__proto__ = {
                        setItem: n,
                        getItem: n,
                        removeItem: n,
                        clear: n
                    };
                }
            } finally {
                "yes" === e.getItem(t) && e.removeItem(t);
            }
            return e;
        }(u), l.prototype = {
            set: function(e, t) {
                if (e && !r(e)) u.setItem(e, a(t)); else if (r(e)) for (var n in e) this.set(n, e[n]);
                return this;
            },
            get: function(e) {
                if (!e) {
                    var t = {};
                    return this.each(function(e, n) {
                        return t[e] = n;
                    }), t;
                }
                if ("?" === e.charAt(0)) return this.has(e.substr(1));
                var n = arguments;
                if (n.length > 1) {
                    for (var r = {}, o = 0, i = n.length; o < i; o++) {
                        var a = s(u.getItem(n[o]));
                        a && (r[n[o]] = a);
                    }
                    return r;
                }
                return s(u.getItem(e));
            },
            clear: function() {
                return u.clear(), this;
            },
            remove: function(e) {
                var t = this.get(e);
                return u.removeItem(e), t;
            },
            has: function(e) {
                return {}.hasOwnProperty.call(this.get(), e);
            },
            keys: function() {
                var e = [];
                return this.each(function(t) {
                    e.push(t);
                }), e;
            },
            each: function(e) {
                for (var t = 0, n = u.length; t < n; t++) {
                    var r = u.key(t);
                    e(r, this.get(r));
                }
                return this;
            },
            search: function(e) {
                for (var t = this.keys(), n = {}, r = 0, o = t.length; r < o; r++) t[r].indexOf(e) > -1 && (n[t[r]] = this.get(t[r]));
                return n;
            }
        };
        var f = null;
        for (var p in l.prototype) c[p] = l.prototype[p];
        t.default = c;
    }, function(e, t, n) {
        var r, o;
        !function(n, i) {
            var i = function(e, t, n) {
                function r(o, i, a) {
                    return a = Object.create(r.fn), o && a.push.apply(a, o[t] ? [ o ] : "" + o === o ? /</.test(o) ? ((i = e.createElement(i)).innerHTML = o, 
                    i.children) : i ? (i = r(i)[0]) ? i[n](o) : a : e[n](o) : o), 
                    a;
                }
                return r.fn = [], r.one = function(e, t) {
                    return r(e, t)[0] || null;
                }, r;
            }(document, "addEventListener", "querySelectorAll");
            r = [], void 0 !== (o = function() {
                return i;
            }.apply(t, r)) && (e.exports = o);
        }();
    }, function(e, t, n) {
        function r(e) {
            return void 0 === e || null === e;
        }
        function o(e) {
            var t = {};
            for (var n in e) t[n] = e[n];
            return t;
        }
        function i(e) {
            e = o(e || {}), e.whiteList = e.whiteList || a.whiteList, e.onAttr = e.onAttr || a.onAttr, 
            e.onIgnoreAttr = e.onIgnoreAttr || a.onIgnoreAttr, e.safeAttrValue = e.safeAttrValue || a.safeAttrValue, 
            this.options = e;
        }
        var a = n(16), s = n(58);
        n(17);
        i.prototype.process = function(e) {
            if (e = e || "", !(e = e.toString())) return "";
            var t = this, n = t.options, o = n.whiteList, i = n.onAttr, a = n.onIgnoreAttr, l = n.safeAttrValue;
            return s(e, function(e, t, n, s, c) {
                var u = o[n], f = !1;
                if (!0 === u ? f = u : "function" == typeof u ? f = u(s) : u instanceof RegExp && (f = u.test(s)), 
                !0 !== f && (f = !1), s = l(n, s)) {
                    var p = {
                        position: t,
                        sourcePosition: e,
                        source: c,
                        isWhite: f
                    };
                    if (f) {
                        var d = i(n, s, p);
                        return r(d) ? n + ":" + s : d;
                    }
                    var d = a(n, s, p);
                    return r(d) ? void 0 : d;
                }
            });
        }, e.exports = i;
    }, function(e, t, n) {
        function r(e, t) {
            function n() {
                if (!i) {
                    var n = o.trim(e.slice(a, s)), r = n.indexOf(":");
                    if (-1 !== r) {
                        var c = o.trim(n.slice(0, r)), u = o.trim(n.slice(r + 1));
                        if (c) {
                            var f = t(a, l.length, c, u, n);
                            f && (l += f + "; ");
                        }
                    }
                }
                a = s + 1;
            }
            e = o.trimRight(e), ";" !== e[e.length - 1] && (e += ";");
            for (var r = e.length, i = !1, a = 0, s = 0, l = ""; s < r; s++) {
                var c = e[s];
                if ("/" === c && "*" === e[s + 1]) {
                    var u = e.indexOf("*/", s + 2);
                    if (-1 === u) break;
                    s = u + 1, a = s + 1, i = !1;
                } else "(" === c ? i = !0 : ")" === c ? i = !1 : ";" === c ? i || n() : "\n" === c && n();
            }
            return o.trim(l);
        }
        var o = n(17);
        e.exports = r;
    }, function(e, t, n) {
        "use strict";
        var r = n(0), o = n(1), i = r("%TypeError%"), a = n(61), s = r("%Reflect.apply%", !0) || o("%Function.prototype.apply%");
        e.exports = function(e, t) {
            var n = arguments.length > 2 ? arguments[2] : [];
            if (!a(n)) throw new i("Assertion failed: optional `argumentsList`, if provided, must be a List");
            return s(e, t, n);
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), o = r("%TypeError%"), i = n(19), a = n(8);
        e.exports = function(e, t) {
            if ("Object" !== a(e)) throw new o("Assertion failed: `O` must be an Object");
            if (!i(t)) throw new o("Assertion failed: `P` must be a Property Key");
            return t in e;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), o = r("%Array%"), i = !o.isArray && n(1)("Object.prototype.toString");
        e.exports = o.isArray || function(e) {
            return "[object Array]" === i(e);
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = n(11);
    }, function(e, t, n) {
        "use strict";
        var r = n(0), o = r("%TypeError%"), i = n(18), a = n(65), s = n(8);
        e.exports = function(e) {
            if ("Object" !== s(e)) throw new o("Assertion failed: `obj` must be an Object");
            return a(i(e, "length"));
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(70), o = n(66);
        e.exports = function(e) {
            var t = o(e);
            return 0 !== t && (t = r(t)), 0 === t ? 0 : t;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(79), o = n(64);
        e.exports = function(e) {
            var t = o(e);
            return t <= 0 ? 0 : t > r ? r : t;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), o = r("%TypeError%"), i = r("%Number%"), a = r("%RegExp%"), s = r("%parseInt%"), l = n(1), c = n(80), u = n(78), f = l("String.prototype.slice"), p = c(/^0b[01]+$/i), d = c(/^0o[0-7]+$/i), h = c(/^[-+]0x[0-9a-f]+$/i), v = [ "", "​", "￾" ].join(""), g = new a("[" + v + "]", "g"), m = c(g), y = [ "\t\n\v\f\r   ᠎    ", "         　\u2028", "\u2029\ufeff" ].join(""), b = new RegExp("(^[" + y + "]+)|([" + y + "]+$)", "g"), w = l("String.prototype.replace"), x = function(e) {
            return w(e, b, "");
        }, k = n(68);
        e.exports = function e(t) {
            var n = u(t) ? t : k(t, i);
            if ("symbol" == typeof n) throw new o("Cannot convert a Symbol value to a number");
            if ("bigint" == typeof n) throw new o("Conversion from 'BigInt' to 'number' is not allowed.");
            if ("string" == typeof n) {
                if (p(n)) return e(s(f(n, 2), 2));
                if (d(n)) return e(s(f(n, 2), 8));
                if (m(n) || h(n)) return NaN;
                var r = x(n);
                if (r !== n) return e(r);
            }
            return i(n);
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), o = r("%Object%"), i = n(5);
        e.exports = function(e) {
            return i(e), o(e);
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(83);
        e.exports = function(e) {
            return arguments.length > 1 ? r(e, arguments[1]) : r(e);
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), o = r("%TypeError%");
        e.exports = function(e, t) {
            if (null == e) throw new o(t || "Cannot call method on " + e);
            return e;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(74), o = n(75), i = n(71), a = n(77), s = n(76), l = n(81);
        e.exports = function(e) {
            var t = i(e);
            return a(t) ? 0 : 0 !== t && s(t) ? l(t) * o(r(t)) : t;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(72);
        e.exports = function(e) {
            var t = r(e, Number);
            if ("string" != typeof t) return +t;
            var n = t.replace(/^[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+|[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+$/g, "");
            return /^0[ob]|^[+-]0x/.test(n) ? NaN : +n;
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = n(84);
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return null === e ? "Null" : void 0 === e ? "Undefined" : "function" == typeof e || "object" == typeof e ? "Object" : "number" == typeof e ? "Number" : "boolean" == typeof e ? "Boolean" : "string" == typeof e ? "String" : void 0;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), o = r("%Math.abs%");
        e.exports = function(e) {
            return o(e);
        };
    }, function(e, t, n) {
        "use strict";
        var r = Math.floor;
        e.exports = function(e) {
            return r(e);
        };
    }, function(e, t, n) {
        "use strict";
        var r = Number.isNaN || function(e) {
            return e !== e;
        };
        e.exports = Number.isFinite || function(e) {
            return "number" == typeof e && !r(e) && e !== 1 / 0 && e !== -1 / 0;
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = Number.isNaN || function(e) {
            return e !== e;
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return null === e || "function" != typeof e && "object" != typeof e;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), o = r("%Math%"), i = r("%Number%");
        e.exports = i.MAX_SAFE_INTEGER || o.pow(2, 53) - 1;
    }, function(e, t, n) {
        "use strict";
        var r = n(0), o = r("RegExp.prototype.test"), i = n(4);
        e.exports = function(e) {
            return i(o, e);
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return e >= 0 ? 1 : -1;
        };
    }, function(e, t) {
        e.exports = function(e) {
            var t = !0, n = !0, r = !1;
            if ("function" == typeof e) {
                try {
                    e.call("f", function(e, n, r) {
                        "object" != typeof r && (t = !1);
                    }), e.call([ null ], function() {
                        "use strict";
                        n = "string" == typeof this;
                    }, "x");
                } catch (e) {
                    r = !0;
                }
                return !r && t && n;
            }
            return !1;
        };
    }, function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator, o = n(21), i = n(11), a = n(91), s = n(93), l = function(e, t) {
            if (void 0 === e || null === e) throw new TypeError("Cannot call method on " + e);
            if ("string" != typeof t || "number" !== t && "string" !== t) throw new TypeError('hint must be "string" or "number"');
            var n, r, a, s = "string" === t ? [ "toString", "valueOf" ] : [ "valueOf", "toString" ];
            for (a = 0; a < s.length; ++a) if (n = e[s[a]], i(n) && (r = n.call(e), 
            o(r))) return r;
            throw new TypeError("No default value");
        }, c = function(e, t) {
            var n = e[t];
            if (null !== n && void 0 !== n) {
                if (!i(n)) throw new TypeError(n + " returned for property " + t + " of object " + e + " is not a function");
                return n;
            }
        };
        e.exports = function(e) {
            if (o(e)) return e;
            var t = "default";
            arguments.length > 1 && (arguments[1] === String ? t = "string" : arguments[1] === Number && (t = "number"));
            var n;
            if (r && (Symbol.toPrimitive ? n = c(e, Symbol.toPrimitive) : s(e) && (n = Symbol.prototype.valueOf)), 
            void 0 !== n) {
                var i = n.call(e, t);
                if (o(i)) return i;
                throw new TypeError("unable to convert exotic object to primitive");
            }
            return "default" === t && (a(e) || s(e)) && (t = "string"), l(e, "default" === t ? "number" : t);
        };
    }, function(e, t, n) {
        "use strict";
        var r = Object.prototype.toString, o = n(21), i = n(11), a = {
            "[[DefaultValue]]": function(e) {
                var t;
                if ((t = arguments.length > 1 ? arguments[1] : "[object Date]" === r.call(e) ? String : Number) === String || t === Number) {
                    var n, a, s = t === String ? [ "toString", "valueOf" ] : [ "valueOf", "toString" ];
                    for (a = 0; a < s.length; ++a) if (i(e[s[a]]) && (n = e[s[a]](), 
                    o(n))) return n;
                    throw new TypeError("No default value");
                }
                throw new TypeError("invalid [[DefaultValue]] hint supplied");
            }
        };
        e.exports = function(e) {
            return o(e) ? e : arguments.length > 1 ? a["[[DefaultValue]]"](e, arguments[1]) : a["[[DefaultValue]]"](e);
        };
    }, function(e, t, n) {
        "use strict";
        var r = Array.prototype.slice, o = Object.prototype.toString;
        e.exports = function(e) {
            var t = this;
            if ("function" != typeof t || "[object Function]" !== o.call(t)) throw new TypeError("Function.prototype.bind called on incompatible " + t);
            for (var n, i = r.call(arguments, 1), a = function() {
                if (this instanceof n) {
                    var o = t.apply(this, i.concat(r.call(arguments)));
                    return Object(o) === o ? o : this;
                }
                return t.apply(e, i.concat(r.call(arguments)));
            }, s = Math.max(0, t.length - i.length), l = [], c = 0; c < s; c++) l.push("$" + c);
            if (n = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(a), 
            t.prototype) {
                var u = function() {};
                u.prototype = t.prototype, n.prototype = new u(), u.prototype = null;
            }
            return n;
        };
    }, function(e, t, n) {
        !function(t, n) {
            e.exports = n();
        }(0, function() {
            "use strict";
            function e(e) {
                return '<span style="color: slategray">' + e + "</span>";
            }
            var t = function(e, t) {
                return t = {
                    exports: {}
                }, e(t, t.exports), t.exports;
            }(function(e) {
                var t = e.exports = function() {
                    return new RegExp("(?:" + t.line().source + ")|(?:" + t.block().source + ")", "gm");
                };
                t.line = function() {
                    return /(?:^|\s)\/\/(.+?)$/gm;
                }, t.block = function() {
                    return /\/\*([\S\s]*?)\*\//gm;
                };
            }), n = [ "23AC69", "91C132", "F19726", "E8552D", "1AAB8E", "E1147F", "2980C1", "1BA1E6", "9FA0A0", "F19726", "E30B20", "E30B20", "A3338B" ];
            return function(r, o) {
                void 0 === o && (o = {});
                var i = o.colors;
                void 0 === i && (i = n);
                var a = 0, s = {}, l = /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/, c = /</, u = new RegExp("(" + l.source + "|" + c.source + ")|(" + t().source + ")", "gmi");
                return r.replace(u, function(t, n, r) {
                    if (r) return e(r);
                    if ("<" === n) return "&lt;";
                    var o;
                    s[n] ? o = s[n] : (o = i[a], s[n] = o);
                    var l = '<span style="color: #' + o + '">' + n + "</span>";
                    return a = ++a % i.length, l;
                });
            };
        });
    }, function(e, t, n) {
        "use strict";
        var r = {
            allowedAttributes: {
                a: [ "href", "name", "target", "title", "aria-label" ],
                iframe: [ "allowfullscreen", "frameborder", "src" ],
                img: [ "src", "alt", "title", "aria-label" ]
            },
            allowedClasses: {},
            allowedSchemes: [ "http", "https", "mailto" ],
            allowedTags: [ "a", "abbr", "article", "b", "blockquote", "br", "caption", "code", "del", "details", "div", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "ins", "kbd", "li", "main", "mark", "ol", "p", "pre", "section", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "th", "thead", "tr", "u", "ul" ],
            filter: null
        };
        e.exports = r;
    }, function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            var r = [], l = !0 === n ? t : o({}, s, t), c = a(r, l);
            return i(e, c), r.join("");
        }
        var o = (n(10), n(50)), i = n(89), a = n(90), s = n(87);
        r.defaults = s, e.exports = r;
    }, function(e, t, n) {
        "use strict";
        function r() {
            var e = [];
            return e.lastItem = function() {
                return e[e.length - 1];
            }, e;
        }
        function o(e, t) {
            function n() {
                "\x3c!--" === e.substr(0, 4) ? d() : p.test(e) ? o(c, g) : f.test(e) && o(l, v), 
                h();
            }
            function o(t, n) {
                var r = e.match(t);
                r && (e = e.substring(r[0].length), r[0].replace(t, n), m = !1);
            }
            function d() {
                var n = e.indexOf("--\x3e");
                n >= 0 && (t.comment && t.comment(e.substring(4, n)), e = e.substring(n + 3), 
                m = !1);
            }
            function h() {
                if (m) {
                    var n, r = e.indexOf("<");
                    r >= 0 ? (n = e.substring(0, r), e = e.substring(r)) : (n = e, 
                    e = ""), t.chars && t.chars(n);
                }
            }
            function v(e, n, r, o) {
                function l(e, t, n, r, o) {
                    c[t] = void 0 === n && void 0 === r && void 0 === o ? void 0 : i.decode(n || r || o || "");
                }
                var c = {}, f = a(n), p = s.voids[f] || !!o;
                r.replace(u, l), p || y.push(f), t.start && t.start(f, c, p);
            }
            function g(e, n) {
                var r, o = 0, i = a(n);
                if (i) for (o = y.length - 1; o >= 0 && y[o] !== i; o--);
                if (o >= 0) {
                    for (r = y.length - 1; r >= o; r--) t.end && t.end(y[r]);
                    y.length = o;
                }
            }
            for (var m, y = r(), b = e; e; ) !function() {
                m = !0, n();
                var t = e === b;
                b = e, t && (e = "");
            }();
            g();
        }
        var i = n(10), a = n(28), s = (n(26), n(27)), l = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/, c = /^<\s*\/\s*([\w:-]+)[^>]*>/, u = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, f = /^</, p = /^<\s*\//;
        e.exports = o;
    }, function(e, t, n) {
        "use strict";
        function r(e, t) {
            function n(t) {
                e.push(t);
            }
            function r(e, t, r) {
                function s(e) {
                    function r(e) {
                        return f && -1 !== f.indexOf(e);
                    }
                    var s, u = t[e], f = (v.allowedClasses || {})[l] || [], p = (v.allowedAttributes || {})[l] || [], d = i(e);
                    "class" === d && -1 === p.indexOf(d) ? (u = u.split(" ").filter(r).join(" ").trim(), 
                    s = u.length) : s = -1 !== p.indexOf(d) && (!0 !== a.uris[d] || c(u)), 
                    s && (n(" "), n(e), "string" == typeof u && (n('="'), n(o.encode(u)), 
                    n('"')));
                }
                var l = i(e);
                return h.ignoring ? void f(l) : -1 === (v.allowedTags || []).indexOf(l) ? void f(l) : v.filter && !v.filter({
                    tag: l,
                    attrs: t
                }) ? void f(l) : (n("<"), n(l), Object.keys(t).forEach(s), void n(r ? "/>" : ">"));
            }
            function l(e) {
                var t = i(e);
                -1 !== (v.allowedTags || []).indexOf(t) && !1 === h.ignoring ? (n("</"), 
                n(t), n(">")) : p(t);
            }
            function c(e) {
                function t(t) {
                    return 0 === e.indexOf(t + ":");
                }
                var n = e[0];
                if ("#" === n || "/" === n) return !0;
                var r = e.indexOf(":");
                if (-1 === r) return !0;
                var o = e.indexOf("?");
                if (-1 !== o && r > o) return !0;
                var i = e.indexOf("#");
                return -1 !== i && r > i || v.allowedSchemes.some(t);
            }
            function u(e) {
                !1 === h.ignoring && n(v.transformText ? v.transformText(e) : e);
            }
            function f(e) {
                s.voids[e] || (!1 === h.ignoring ? h = {
                    ignoring: e,
                    depth: 1
                } : h.ignoring === e && h.depth++);
            }
            function p(e) {
                h.ignoring === e && --h.depth <= 0 && d();
            }
            function d() {
                h = {
                    ignoring: !1,
                    depth: 0
                };
            }
            var h, v = t || {};
            return d(), {
                start: r,
                end: l,
                chars: u
            };
        }
        var o = n(10), i = n(28), a = n(26), s = n(27);
        e.exports = r;
    }, function(e, t, n) {
        "use strict";
        var r = Date.prototype.getDay, o = function(e) {
            try {
                return r.call(e), !0;
            } catch (e) {
                return !1;
            }
        }, i = Object.prototype.toString, a = n(24)();
        e.exports = function(e) {
            return "object" == typeof e && null !== e && (a ? o(e) : "[object Date]" === i.call(e));
        };
    }, function(e, t, n) {
        "use strict";
        var r = String.prototype.valueOf, o = function(e) {
            try {
                return r.call(e), !0;
            } catch (e) {
                return !1;
            }
        }, i = Object.prototype.toString, a = n(24)();
        e.exports = function(e) {
            return "string" == typeof e || "object" == typeof e && (a ? o(e) : "[object String]" === i.call(e));
        };
    }, function(e, t, n) {
        "use strict";
        var r = Object.prototype.toString;
        if (n(22)()) {
            var o = Symbol.prototype.toString, i = /^Symbol\(.*\)$/, a = function(e) {
                return "symbol" == typeof e.valueOf() && i.test(o.call(e));
            };
            e.exports = function(e) {
                if ("symbol" == typeof e) return !0;
                if ("[object Symbol]" !== r.call(e)) return !1;
                try {
                    return a(e);
                } catch (e) {
                    return !1;
                }
            };
        } else e.exports = function(e) {
            return !1;
        };
    }, function(e, t, n) {
        !function(t, n) {
            e.exports = n();
        }(0, function() {
            "use strict";
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            function t(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            }
            function n(e, t) {
                if (e) {
                    if ("string" == typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), 
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
                }
            }
            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function o(e, t) {
                var r;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = n(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var o = 0;
                        return function() {
                            return o >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[o++]
                            };
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                return r = e[Symbol.iterator](), r.next.bind(r);
            }
            function i(e, t) {
                if (t) {
                    if (k.test(e)) return e.replace(S, j);
                } else if (_.test(e)) return e.replace(A, j);
                return e;
            }
            function a(e) {
                return e.replace($, function(e, t) {
                    return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "";
                });
            }
            function s(e, t) {
                e = e.source || e, t = t || "";
                var n = {
                    replace: function(t, r) {
                        return r = r.source || r, r = r.replace(E, "$1"), e = e.replace(t, r), 
                        n;
                    },
                    getRegex: function() {
                        return new RegExp(e, t);
                    }
                };
                return n;
            }
            function l(e, t, n) {
                if (e) {
                    var r;
                    try {
                        r = decodeURIComponent(a(n)).replace(T, "").toLowerCase();
                    } catch (e) {
                        return null;
                    }
                    if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return null;
                }
                t && !I.test(n) && (n = c(t, n));
                try {
                    n = encodeURI(n).replace(/%25/g, "%");
                } catch (e) {
                    return null;
                }
                return n;
            }
            function c(e, t) {
                z[" " + e] || (C.test(e) ? z[" " + e] = e + "/" : z[" " + e] = p(e, "/", !0)), 
                e = z[" " + e];
                var n = -1 === e.indexOf(":");
                return "//" === t.substring(0, 2) ? n ? t : e.replace(P, "$1") + t : "/" === t.charAt(0) ? n ? t : e.replace(R, "$1") + t : e + t;
            }
            function u(e) {
                for (var t, n, r = 1; r < arguments.length; r++) {
                    t = arguments[r];
                    for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }
                return e;
            }
            function f(e, t) {
                var n = e.replace(/\|/g, function(e, t, n) {
                    for (var r = !1, o = t; --o >= 0 && "\\" === n[o]; ) r = !r;
                    return r ? "|" : " |";
                }), r = n.split(/ \|/), o = 0;
                if (r.length > t) r.splice(t); else for (;r.length < t; ) r.push("");
                for (;o < r.length; o++) r[o] = r[o].trim().replace(/\\\|/g, "|");
                return r;
            }
            function p(e, t, n) {
                var r = e.length;
                if (0 === r) return "";
                for (var o = 0; o < r; ) {
                    var i = e.charAt(r - o - 1);
                    if (i !== t || n) {
                        if (i === t || !n) break;
                        o++;
                    } else o++;
                }
                return e.substr(0, r - o);
            }
            function d(e, t) {
                if (-1 === e.indexOf(t[1])) return -1;
                for (var n = e.length, r = 0, o = 0; o < n; o++) if ("\\" === e[o]) o++; else if (e[o] === t[0]) r++; else if (e[o] === t[1] && --r < 0) return o;
                return -1;
            }
            function h(e) {
                e && e.sanitize && e.silent;
            }
            function v(e, t) {
                if (t < 1) return "";
                for (var n = ""; t > 1; ) 1 & t && (n += e), t >>= 1, e += e;
                return n + e;
            }
            function g(e, t, n) {
                var r = t.href, o = t.title ? B(t.title) : null, i = e[1].replace(/\\([\[\]])/g, "$1");
                return "!" !== e[0].charAt(0) ? {
                    type: "link",
                    raw: n,
                    href: r,
                    title: o,
                    text: i
                } : {
                    type: "image",
                    raw: n,
                    href: r,
                    title: o,
                    text: B(i)
                };
            }
            function m(e, t) {
                var n = e.match(/^(\s+)(?:```)/);
                if (null === n) return t;
                var r = n[1];
                return t.split("\n").map(function(e) {
                    var t = e.match(/^\s+/);
                    return null === t ? e : t[0].length >= r.length ? e.slice(r.length) : e;
                }).join("\n");
            }
            function y(e) {
                return e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
            }
            function b(e) {
                var t, n, r = "", o = e.length;
                for (t = 0; t < o; t++) n = e.charCodeAt(t), Math.random() > .5 && (n = "x" + n.toString(16)), 
                r += "&#" + n + ";";
                return r;
            }
            function w(e, t, n) {
                if (void 0 === e || null === e) throw new Error("marked(): input parameter is undefined or null");
                if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
                if ("function" == typeof t && (n = t, t = null), t = ue({}, w.defaults, t || {}), 
                fe(t), n) {
                    var r, o = t.highlight;
                    try {
                        r = ee.lex(e, t);
                    } catch (e) {
                        return n(e);
                    }
                    var i = function(e) {
                        var i;
                        if (!e) try {
                            i = ce.parse(r, t);
                        } catch (t) {
                            e = t;
                        }
                        return t.highlight = o, e ? n(e) : n(null, i);
                    };
                    if (!o || o.length < 3) return i();
                    if (delete t.highlight, !r.length) return i();
                    var a = 0;
                    return w.walkTokens(r, function(e) {
                        "code" === e.type && (a++, setTimeout(function() {
                            o(e.text, e.lang, function(t, n) {
                                if (t) return i(t);
                                null != n && n !== e.text && (e.text = n, e.escaped = !0), 
                                0 === --a && i();
                            });
                        }, 0));
                    }), void (0 === a && i());
                }
                try {
                    var s = ee.lex(e, t);
                    return t.walkTokens && w.walkTokens(s, t.walkTokens), ce.parse(s, t);
                } catch (e) {
                    if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", 
                    t.silent) return "<p>An error occurred:</p><pre>" + pe(e.message + "", !0) + "</pre>";
                    throw e;
                }
            }
            var x = function(e) {
                var t = {
                    exports: {}
                };
                return e(t, t.exports), t.exports;
            }(function(e) {
                function t() {
                    return {
                        baseUrl: null,
                        breaks: !1,
                        gfm: !0,
                        headerIds: !0,
                        headerPrefix: "",
                        highlight: null,
                        langPrefix: "language-",
                        mangle: !0,
                        pedantic: !1,
                        renderer: null,
                        sanitize: !1,
                        sanitizer: null,
                        silent: !1,
                        smartLists: !1,
                        smartypants: !1,
                        tokenizer: null,
                        walkTokens: null,
                        xhtml: !1
                    };
                }
                function n(t) {
                    e.exports.defaults = t;
                }
                e.exports = {
                    defaults: t(),
                    getDefaults: t,
                    changeDefaults: n
                };
            }), k = /[&<>"']/, S = /[&<>"']/g, _ = /[<>"']|&(?!#?\w+;)/, A = /[<>"']|&(?!#?\w+;)/g, O = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }, j = function(e) {
                return O[e];
            }, $ = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, E = /(^|[^\[])\^/g, T = /[^\w:]/g, I = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i, z = {}, C = /^[^:]+:\/*[^/]*$/, P = /^([^:]+:)[\s\S]*$/, R = /^([^:]+:\/*[^/]*)[\s\S]*$/, M = {
                exec: function() {}
            }, F = {
                escape: i,
                unescape: a,
                edit: s,
                cleanUrl: l,
                resolveUrl: c,
                noopTest: M,
                merge: u,
                splitCells: f,
                rtrim: p,
                findClosingBracket: d,
                checkSanitizeDeprecation: h,
                repeatString: v
            }, L = x.defaults, N = F.rtrim, U = F.splitCells, B = F.escape, D = F.findClosingBracket, q = function() {
                function e(e) {
                    this.options = e || L;
                }
                var t = e.prototype;
                return t.space = function(e) {
                    var t = this.rules.block.newline.exec(e);
                    if (t) return t[0].length > 1 ? {
                        type: "space",
                        raw: t[0]
                    } : {
                        raw: "\n"
                    };
                }, t.code = function(e, t) {
                    var n = this.rules.block.code.exec(e);
                    if (n) {
                        var r = t[t.length - 1];
                        if (r && "paragraph" === r.type) return {
                            raw: n[0],
                            text: n[0].trimRight()
                        };
                        var o = n[0].replace(/^ {1,4}/gm, "");
                        return {
                            type: "code",
                            raw: n[0],
                            codeBlockStyle: "indented",
                            text: this.options.pedantic ? o : N(o, "\n")
                        };
                    }
                }, t.fences = function(e) {
                    var t = this.rules.block.fences.exec(e);
                    if (t) {
                        var n = t[0], r = m(n, t[3] || "");
                        return {
                            type: "code",
                            raw: n,
                            lang: t[2] ? t[2].trim() : t[2],
                            text: r
                        };
                    }
                }, t.heading = function(e) {
                    var t = this.rules.block.heading.exec(e);
                    if (t) {
                        var n = t[2].trim();
                        if (/#$/.test(n)) {
                            var r = N(n, "#");
                            this.options.pedantic ? n = r.trim() : r && !/ $/.test(r) || (n = r.trim());
                        }
                        return {
                            type: "heading",
                            raw: t[0],
                            depth: t[1].length,
                            text: n
                        };
                    }
                }, t.nptable = function(e) {
                    var t = this.rules.block.nptable.exec(e);
                    if (t) {
                        var n = {
                            type: "table",
                            header: U(t[1].replace(/^ *| *\| *$/g, "")),
                            align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                            cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : [],
                            raw: t[0]
                        };
                        if (n.header.length === n.align.length) {
                            var r, o = n.align.length;
                            for (r = 0; r < o; r++) /^ *-+: *$/.test(n.align[r]) ? n.align[r] = "right" : /^ *:-+: *$/.test(n.align[r]) ? n.align[r] = "center" : /^ *:-+ *$/.test(n.align[r]) ? n.align[r] = "left" : n.align[r] = null;
                            for (o = n.cells.length, r = 0; r < o; r++) n.cells[r] = U(n.cells[r], n.header.length);
                            return n;
                        }
                    }
                }, t.hr = function(e) {
                    var t = this.rules.block.hr.exec(e);
                    if (t) return {
                        type: "hr",
                        raw: t[0]
                    };
                }, t.blockquote = function(e) {
                    var t = this.rules.block.blockquote.exec(e);
                    if (t) {
                        var n = t[0].replace(/^ *> ?/gm, "");
                        return {
                            type: "blockquote",
                            raw: t[0],
                            text: n
                        };
                    }
                }, t.list = function(e) {
                    var t = this.rules.block.list.exec(e);
                    if (t) {
                        var n, r, o, i, a, s, l, c, u = t[0], f = t[2], p = f.length > 1, d = {
                            type: "list",
                            raw: u,
                            ordered: p,
                            start: p ? +f.slice(0, -1) : "",
                            loose: !1,
                            items: []
                        }, h = t[0].match(this.rules.block.item), v = !1, g = h.length;
                        o = this.rules.block.listItemStart.exec(h[0]);
                        for (var m = 0; m < g; m++) {
                            if (n = h[m], u = n, m !== g - 1) {
                                if (i = this.rules.block.listItemStart.exec(h[m + 1]), 
                                this.options.pedantic ? i[1].length > o[1].length : i[1].length > o[0].length || i[1].length > 3) {
                                    h.splice(m, 2, h[m] + "\n" + h[m + 1]), m--, 
                                    g--;
                                    continue;
                                }
                                (!this.options.pedantic || this.options.smartLists ? i[2][i[2].length - 1] !== f[f.length - 1] : p === (1 === i[2].length)) && (a = h.slice(m + 1).join("\n"), 
                                d.raw = d.raw.substring(0, d.raw.length - a.length), 
                                m = g - 1), o = i;
                            }
                            r = n.length, n = n.replace(/^ *([*+-]|\d+[.)]) ?/, ""), 
                            ~n.indexOf("\n ") && (r -= n.length, n = this.options.pedantic ? n.replace(/^ {1,4}/gm, "") : n.replace(new RegExp("^ {1," + r + "}", "gm"), "")), 
                            s = v || /\n\n(?!\s*$)/.test(n), m !== g - 1 && (v = "\n" === n.charAt(n.length - 1), 
                            s || (s = v)), s && (d.loose = !0), this.options.gfm && (l = /^\[[ xX]\] /.test(n), 
                            c = void 0, l && (c = " " !== n[1], n = n.replace(/^\[[ xX]\] +/, ""))), 
                            d.items.push({
                                type: "list_item",
                                raw: u,
                                task: l,
                                checked: c,
                                loose: s,
                                text: n
                            });
                        }
                        return d;
                    }
                }, t.html = function(e) {
                    var t = this.rules.block.html.exec(e);
                    if (t) return {
                        type: this.options.sanitize ? "paragraph" : "html",
                        raw: t[0],
                        pre: !this.options.sanitizer && ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
                        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : B(t[0]) : t[0]
                    };
                }, t.def = function(e) {
                    var t = this.rules.block.def.exec(e);
                    if (t) {
                        t[3] && (t[3] = t[3].substring(1, t[3].length - 1));
                        return {
                            tag: t[1].toLowerCase().replace(/\s+/g, " "),
                            raw: t[0],
                            href: t[2],
                            title: t[3]
                        };
                    }
                }, t.table = function(e) {
                    var t = this.rules.block.table.exec(e);
                    if (t) {
                        var n = {
                            type: "table",
                            header: U(t[1].replace(/^ *| *\| *$/g, "")),
                            align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                            cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : []
                        };
                        if (n.header.length === n.align.length) {
                            n.raw = t[0];
                            var r, o = n.align.length;
                            for (r = 0; r < o; r++) /^ *-+: *$/.test(n.align[r]) ? n.align[r] = "right" : /^ *:-+: *$/.test(n.align[r]) ? n.align[r] = "center" : /^ *:-+ *$/.test(n.align[r]) ? n.align[r] = "left" : n.align[r] = null;
                            for (o = n.cells.length, r = 0; r < o; r++) n.cells[r] = U(n.cells[r].replace(/^ *\| *| *\| *$/g, ""), n.header.length);
                            return n;
                        }
                    }
                }, t.lheading = function(e) {
                    var t = this.rules.block.lheading.exec(e);
                    if (t) return {
                        type: "heading",
                        raw: t[0],
                        depth: "=" === t[2].charAt(0) ? 1 : 2,
                        text: t[1]
                    };
                }, t.paragraph = function(e) {
                    var t = this.rules.block.paragraph.exec(e);
                    if (t) return {
                        type: "paragraph",
                        raw: t[0],
                        text: "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1]
                    };
                }, t.text = function(e, t) {
                    var n = this.rules.block.text.exec(e);
                    if (n) {
                        var r = t[t.length - 1];
                        return r && "text" === r.type ? {
                            raw: n[0],
                            text: n[0]
                        } : {
                            type: "text",
                            raw: n[0],
                            text: n[0]
                        };
                    }
                }, t.escape = function(e) {
                    var t = this.rules.inline.escape.exec(e);
                    if (t) return {
                        type: "escape",
                        raw: t[0],
                        text: B(t[1])
                    };
                }, t.tag = function(e, t, n) {
                    var r = this.rules.inline.tag.exec(e);
                    if (r) return !t && /^<a /i.test(r[0]) ? t = !0 : t && /^<\/a>/i.test(r[0]) && (t = !1), 
                    !n && /^<(pre|code|kbd|script)(\s|>)/i.test(r[0]) ? n = !0 : n && /^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0]) && (n = !1), 
                    {
                        type: this.options.sanitize ? "text" : "html",
                        raw: r[0],
                        inLink: t,
                        inRawBlock: n,
                        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r[0]) : B(r[0]) : r[0]
                    };
                }, t.link = function(e) {
                    var t = this.rules.inline.link.exec(e);
                    if (t) {
                        var n = t[2].trim();
                        if (!this.options.pedantic && /^</.test(n)) {
                            if (!/>$/.test(n)) return;
                            var r = N(n.slice(0, -1), "\\");
                            if ((n.length - r.length) % 2 == 0) return;
                        } else {
                            var o = D(t[2], "()");
                            if (o > -1) {
                                var i = 0 === t[0].indexOf("!") ? 5 : 4, a = i + t[1].length + o;
                                t[2] = t[2].substring(0, o), t[0] = t[0].substring(0, a).trim(), 
                                t[3] = "";
                            }
                        }
                        var s = t[2], l = "";
                        if (this.options.pedantic) {
                            var c = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
                            c && (s = c[1], l = c[3]);
                        } else l = t[3] ? t[3].slice(1, -1) : "";
                        return s = s.trim(), /^</.test(s) && (s = this.options.pedantic && !/>$/.test(n) ? s.slice(1) : s.slice(1, -1)), 
                        g(t, {
                            href: s ? s.replace(this.rules.inline._escapes, "$1") : s,
                            title: l ? l.replace(this.rules.inline._escapes, "$1") : l
                        }, t[0]);
                    }
                }, t.reflink = function(e, t) {
                    var n;
                    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
                        var r = (n[2] || n[1]).replace(/\s+/g, " ");
                        if (!(r = t[r.toLowerCase()]) || !r.href) {
                            var o = n[0].charAt(0);
                            return {
                                type: "text",
                                raw: o,
                                text: o
                            };
                        }
                        return g(n, r, n[0]);
                    }
                }, t.strong = function(e, t, n) {
                    void 0 === n && (n = "");
                    var r = this.rules.inline.strong.start.exec(e);
                    if (r && (!r[1] || r[1] && ("" === n || this.rules.inline.punctuation.exec(n)))) {
                        t = t.slice(-1 * e.length);
                        var o = "**" === r[0] ? this.rules.inline.strong.endAst : this.rules.inline.strong.endUnd;
                        o.lastIndex = 0;
                        for (var i; null != (r = o.exec(t)); ) if (i = this.rules.inline.strong.middle.exec(t.slice(0, r.index + 3))) return {
                            type: "strong",
                            raw: e.slice(0, i[0].length),
                            text: e.slice(2, i[0].length - 2)
                        };
                    }
                }, t.em = function(e, t, n) {
                    void 0 === n && (n = "");
                    var r = this.rules.inline.em.start.exec(e);
                    if (r && (!r[1] || r[1] && ("" === n || this.rules.inline.punctuation.exec(n)))) {
                        t = t.slice(-1 * e.length);
                        var o = "*" === r[0] ? this.rules.inline.em.endAst : this.rules.inline.em.endUnd;
                        o.lastIndex = 0;
                        for (var i; null != (r = o.exec(t)); ) if (i = this.rules.inline.em.middle.exec(t.slice(0, r.index + 2))) return {
                            type: "em",
                            raw: e.slice(0, i[0].length),
                            text: e.slice(1, i[0].length - 1)
                        };
                    }
                }, t.codespan = function(e) {
                    var t = this.rules.inline.code.exec(e);
                    if (t) {
                        var n = t[2].replace(/\n/g, " "), r = /[^ ]/.test(n), o = /^ /.test(n) && / $/.test(n);
                        return r && o && (n = n.substring(1, n.length - 1)), n = B(n, !0), 
                        {
                            type: "codespan",
                            raw: t[0],
                            text: n
                        };
                    }
                }, t.br = function(e) {
                    var t = this.rules.inline.br.exec(e);
                    if (t) return {
                        type: "br",
                        raw: t[0]
                    };
                }, t.del = function(e) {
                    var t = this.rules.inline.del.exec(e);
                    if (t) return {
                        type: "del",
                        raw: t[0],
                        text: t[2]
                    };
                }, t.autolink = function(e, t) {
                    var n = this.rules.inline.autolink.exec(e);
                    if (n) {
                        var r, o;
                        return "@" === n[2] ? (r = B(this.options.mangle ? t(n[1]) : n[1]), 
                        o = "mailto:" + r) : (r = B(n[1]), o = r), {
                            type: "link",
                            raw: n[0],
                            text: r,
                            href: o,
                            tokens: [ {
                                type: "text",
                                raw: r,
                                text: r
                            } ]
                        };
                    }
                }, t.url = function(e, t) {
                    var n;
                    if (n = this.rules.inline.url.exec(e)) {
                        var r, o;
                        if ("@" === n[2]) r = B(this.options.mangle ? t(n[0]) : n[0]), 
                        o = "mailto:" + r; else {
                            var i;
                            do {
                                i = n[0], n[0] = this.rules.inline._backpedal.exec(n[0])[0];
                            } while (i !== n[0]);
                            r = B(n[0]), o = "www." === n[1] ? "http://" + r : r;
                        }
                        return {
                            type: "link",
                            raw: n[0],
                            text: r,
                            href: o,
                            tokens: [ {
                                type: "text",
                                raw: r,
                                text: r
                            } ]
                        };
                    }
                }, t.inlineText = function(e, t, n) {
                    var r = this.rules.inline.text.exec(e);
                    if (r) {
                        var o;
                        return o = t ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(r[0]) : B(r[0]) : r[0] : B(this.options.smartypants ? n(r[0]) : r[0]), 
                        {
                            type: "text",
                            raw: r[0],
                            text: o
                        };
                    }
                }, e;
            }(), Q = F.noopTest, W = F.edit, V = F.merge, H = {
                newline: /^(?: *(?:\n|$))+/,
                code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
                fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
                hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
                heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
                blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
                html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
                def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
                nptable: Q,
                table: Q,
                lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
                _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
                text: /^[^\n]+/
            };
            H._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/, H._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/, 
            H.def = W(H.def).replace("label", H._label).replace("title", H._title).getRegex(), 
            H.bullet = /(?:[*+-]|\d{1,9}[.)])/, H.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/, 
            H.item = W(H.item, "gm").replace(/bull/g, H.bullet).getRegex(), H.listItemStart = W(/^( *)(bull)/).replace("bull", H.bullet).getRegex(), 
            H.list = W(H.list).replace(/bull/g, H.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + H.def.source + ")").getRegex(), 
            H._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", 
            H._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, H.html = W(H.html, "i").replace("comment", H._comment).replace("tag", H._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), 
            H.paragraph = W(H._paragraph).replace("hr", H.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", H._tag).getRegex(), 
            H.blockquote = W(H.blockquote).replace("paragraph", H.paragraph).getRegex(), 
            H.normal = V({}, H), H.gfm = V({}, H.normal, {
                nptable: "^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
                table: "^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
            }), H.gfm.nptable = W(H.gfm.nptable).replace("hr", H.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", H._tag).getRegex(), 
            H.gfm.table = W(H.gfm.table).replace("hr", H.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", H._tag).getRegex(), 
            H.pedantic = V({}, H.normal, {
                html: W("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", H._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
                def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
                heading: /^(#{1,6})(.*)(?:\n+|$)/,
                fences: Q,
                paragraph: W(H.normal._paragraph).replace("hr", H.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", H.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
            });
            var K = {
                escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
                autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                url: Q,
                tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
                link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
                reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
                nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
                reflinkSearch: "reflink|nolink(?!\\()",
                strong: {
                    start: /^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,
                    middle: /^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,
                    endAst: /[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,
                    endUnd: /[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/
                },
                em: {
                    start: /^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,
                    middle: /^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,
                    endAst: /[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,
                    endUnd: /[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/
                },
                code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                br: /^( {2,}|\\)\n(?!\s*$)/,
                del: Q,
                text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,
                punctuation: /^([\s*punctuation])/
            };
            K._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", K.punctuation = W(K.punctuation).replace(/punctuation/g, K._punctuation).getRegex(), 
            K._blockSkip = "\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>", K._overlapSkip = "__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*", 
            K._comment = W(H._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(), 
            K.em.start = W(K.em.start).replace(/punctuation/g, K._punctuation).getRegex(), 
            K.em.middle = W(K.em.middle).replace(/punctuation/g, K._punctuation).replace(/overlapSkip/g, K._overlapSkip).getRegex(), 
            K.em.endAst = W(K.em.endAst, "g").replace(/punctuation/g, K._punctuation).getRegex(), 
            K.em.endUnd = W(K.em.endUnd, "g").replace(/punctuation/g, K._punctuation).getRegex(), 
            K.strong.start = W(K.strong.start).replace(/punctuation/g, K._punctuation).getRegex(), 
            K.strong.middle = W(K.strong.middle).replace(/punctuation/g, K._punctuation).replace(/overlapSkip/g, K._overlapSkip).getRegex(), 
            K.strong.endAst = W(K.strong.endAst, "g").replace(/punctuation/g, K._punctuation).getRegex(), 
            K.strong.endUnd = W(K.strong.endUnd, "g").replace(/punctuation/g, K._punctuation).getRegex(), 
            K.blockSkip = W(K._blockSkip, "g").getRegex(), K.overlapSkip = W(K._overlapSkip, "g").getRegex(), 
            K._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, K._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, 
            K._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, 
            K.autolink = W(K.autolink).replace("scheme", K._scheme).replace("email", K._email).getRegex(), 
            K._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, 
            K.tag = W(K.tag).replace("comment", K._comment).replace("attribute", K._attribute).getRegex(), 
            K._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, K._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, 
            K._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, 
            K.link = W(K.link).replace("label", K._label).replace("href", K._href).replace("title", K._title).getRegex(), 
            K.reflink = W(K.reflink).replace("label", K._label).getRegex(), K.reflinkSearch = W(K.reflinkSearch, "g").replace("reflink", K.reflink).replace("nolink", K.nolink).getRegex(), 
            K.normal = V({}, K), K.pedantic = V({}, K.normal, {
                strong: {
                    start: /^__|\*\*/,
                    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                    endAst: /\*\*(?!\*)/g,
                    endUnd: /__(?!_)/g
                },
                em: {
                    start: /^_|\*/,
                    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
                    endAst: /\*(?!\*)/g,
                    endUnd: /_(?!_)/g
                },
                link: W(/^!?\[(label)\]\((.*?)\)/).replace("label", K._label).getRegex(),
                reflink: W(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", K._label).getRegex()
            }), K.gfm = V({}, K.normal, {
                escape: W(K.escape).replace("])", "~|])").getRegex(),
                _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
                del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
                text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
            }), K.gfm.url = W(K.gfm.url, "i").replace("email", K.gfm._extended_email).getRegex(), 
            K.breaks = V({}, K.gfm, {
                br: W(K.br).replace("{2,}", "*").getRegex(),
                text: W(K.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
            });
            var G = {
                block: H,
                inline: K
            }, Z = x.defaults, J = G.block, X = G.inline, Y = F.repeatString, ee = function() {
                function e(e) {
                    this.tokens = [], this.tokens.links = Object.create(null), this.options = e || Z, 
                    this.options.tokenizer = this.options.tokenizer || new q(), 
                    this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options;
                    var t = {
                        block: J.normal,
                        inline: X.normal
                    };
                    this.options.pedantic ? (t.block = J.pedantic, t.inline = X.pedantic) : this.options.gfm && (t.block = J.gfm, 
                    this.options.breaks ? t.inline = X.breaks : t.inline = X.gfm), 
                    this.tokenizer.rules = t;
                }
                e.lex = function(t, n) {
                    return new e(n).lex(t);
                }, e.lexInline = function(t, n) {
                    return new e(n).inlineTokens(t);
                };
                var n = e.prototype;
                return n.lex = function(e) {
                    return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), 
                    this.blockTokens(e, this.tokens, !0), this.inline(this.tokens), 
                    this.tokens;
                }, n.blockTokens = function(e, t, n) {
                    void 0 === t && (t = []), void 0 === n && (n = !0), this.options.pedantic && (e = e.replace(/^ +$/gm, ""));
                    for (var r, o, i, a; e; ) if (r = this.tokenizer.space(e)) e = e.substring(r.raw.length), 
                    r.type && t.push(r); else if (r = this.tokenizer.code(e, t)) e = e.substring(r.raw.length), 
                    r.type ? t.push(r) : (a = t[t.length - 1], a.raw += "\n" + r.raw, 
                    a.text += "\n" + r.text); else if (r = this.tokenizer.fences(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (r = this.tokenizer.heading(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (r = this.tokenizer.nptable(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (r = this.tokenizer.hr(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (r = this.tokenizer.blockquote(e)) e = e.substring(r.raw.length), 
                    r.tokens = this.blockTokens(r.text, [], n), t.push(r); else if (r = this.tokenizer.list(e)) {
                        for (e = e.substring(r.raw.length), i = r.items.length, 
                        o = 0; o < i; o++) r.items[o].tokens = this.blockTokens(r.items[o].text, [], !1);
                        t.push(r);
                    } else if (r = this.tokenizer.html(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (n && (r = this.tokenizer.def(e))) e = e.substring(r.raw.length), 
                    this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
                        href: r.href,
                        title: r.title
                    }); else if (r = this.tokenizer.table(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (r = this.tokenizer.lheading(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (n && (r = this.tokenizer.paragraph(e))) e = e.substring(r.raw.length), 
                    t.push(r); else if (r = this.tokenizer.text(e, t)) e = e.substring(r.raw.length), 
                    r.type ? t.push(r) : (a = t[t.length - 1], a.raw += "\n" + r.raw, 
                    a.text += "\n" + r.text); else if (e) {
                        var s = "Infinite loop on byte: " + e.charCodeAt(0);
                        if (this.options.silent) break;
                        throw new Error(s);
                    }
                    return t;
                }, n.inline = function(e) {
                    var t, n, r, o, i, a, s = e.length;
                    for (t = 0; t < s; t++) switch (a = e[t], a.type) {
                      case "paragraph":
                      case "text":
                      case "heading":
                        a.tokens = [], this.inlineTokens(a.text, a.tokens);
                        break;

                      case "table":
                        for (a.tokens = {
                            header: [],
                            cells: []
                        }, o = a.header.length, n = 0; n < o; n++) a.tokens.header[n] = [], 
                        this.inlineTokens(a.header[n], a.tokens.header[n]);
                        for (o = a.cells.length, n = 0; n < o; n++) for (i = a.cells[n], 
                        a.tokens.cells[n] = [], r = 0; r < i.length; r++) a.tokens.cells[n][r] = [], 
                        this.inlineTokens(i[r], a.tokens.cells[n][r]);
                        break;

                      case "blockquote":
                        this.inline(a.tokens);
                        break;

                      case "list":
                        for (o = a.items.length, n = 0; n < o; n++) this.inline(a.items[n].tokens);
                    }
                    return e;
                }, n.inlineTokens = function(e, t, n, r) {
                    void 0 === t && (t = []), void 0 === n && (n = !1), void 0 === r && (r = !1);
                    var o, i, a, s, l = e;
                    if (this.tokens.links) {
                        var c = Object.keys(this.tokens.links);
                        if (c.length > 0) for (;null != (i = this.tokenizer.rules.inline.reflinkSearch.exec(l)); ) c.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, i.index) + "[" + Y("a", i[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
                    }
                    for (;null != (i = this.tokenizer.rules.inline.blockSkip.exec(l)); ) l = l.slice(0, i.index) + "[" + Y("a", i[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                    for (;e; ) if (a || (s = ""), a = !1, o = this.tokenizer.escape(e)) e = e.substring(o.raw.length), 
                    t.push(o); else if (o = this.tokenizer.tag(e, n, r)) e = e.substring(o.raw.length), 
                    n = o.inLink, r = o.inRawBlock, t.push(o); else if (o = this.tokenizer.link(e)) e = e.substring(o.raw.length), 
                    "link" === o.type && (o.tokens = this.inlineTokens(o.text, [], !0, r)), 
                    t.push(o); else if (o = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(o.raw.length), 
                    "link" === o.type && (o.tokens = this.inlineTokens(o.text, [], !0, r)), 
                    t.push(o); else if (o = this.tokenizer.strong(e, l, s)) e = e.substring(o.raw.length), 
                    o.tokens = this.inlineTokens(o.text, [], n, r), t.push(o); else if (o = this.tokenizer.em(e, l, s)) e = e.substring(o.raw.length), 
                    o.tokens = this.inlineTokens(o.text, [], n, r), t.push(o); else if (o = this.tokenizer.codespan(e)) e = e.substring(o.raw.length), 
                    t.push(o); else if (o = this.tokenizer.br(e)) e = e.substring(o.raw.length), 
                    t.push(o); else if (o = this.tokenizer.del(e)) e = e.substring(o.raw.length), 
                    o.tokens = this.inlineTokens(o.text, [], n, r), t.push(o); else if (o = this.tokenizer.autolink(e, b)) e = e.substring(o.raw.length), 
                    t.push(o); else if (n || !(o = this.tokenizer.url(e, b))) {
                        if (o = this.tokenizer.inlineText(e, r, y)) e = e.substring(o.raw.length), 
                        s = o.raw.slice(-1), a = !0, t.push(o); else if (e) {
                            var u = "Infinite loop on byte: " + e.charCodeAt(0);
                            if (this.options.silent) break;
                            throw new Error(u);
                        }
                    } else e = e.substring(o.raw.length), t.push(o);
                    return t;
                }, t(e, null, [ {
                    key: "rules",
                    get: function() {
                        return {
                            block: J,
                            inline: X
                        };
                    }
                } ]), e;
            }(), te = x.defaults, ne = F.cleanUrl, re = F.escape, oe = function() {
                function e(e) {
                    this.options = e || te;
                }
                var t = e.prototype;
                return t.code = function(e, t, n) {
                    var r = (t || "").match(/\S*/)[0];
                    if (this.options.highlight) {
                        var o = this.options.highlight(e, r);
                        null != o && o !== e && (n = !0, e = o);
                    }
                    return e = e.replace(/\n$/, "") + "\n", r ? '<pre><code class="' + this.options.langPrefix + re(r, !0) + '">' + (n ? e : re(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : re(e, !0)) + "</code></pre>\n";
                }, t.blockquote = function(e) {
                    return "<blockquote>\n" + e + "</blockquote>\n";
                }, t.html = function(e) {
                    return e;
                }, t.heading = function(e, t, n, r) {
                    return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n";
                }, t.hr = function() {
                    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
                }, t.list = function(e, t, n) {
                    var r = t ? "ol" : "ul";
                    return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n";
                }, t.listitem = function(e) {
                    return "<li>" + e + "</li>\n";
                }, t.checkbox = function(e) {
                    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
                }, t.paragraph = function(e) {
                    return "<p>" + e + "</p>\n";
                }, t.table = function(e, t) {
                    return t && (t = "<tbody>" + t + "</tbody>"), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n";
                }, t.tablerow = function(e) {
                    return "<tr>\n" + e + "</tr>\n";
                }, t.tablecell = function(e, t) {
                    var n = t.header ? "th" : "td";
                    return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n";
                }, t.strong = function(e) {
                    return "<strong>" + e + "</strong>";
                }, t.em = function(e) {
                    return "<em>" + e + "</em>";
                }, t.codespan = function(e) {
                    return "<code>" + e + "</code>";
                }, t.br = function() {
                    return this.options.xhtml ? "<br/>" : "<br>";
                }, t.del = function(e) {
                    return "<del>" + e + "</del>";
                }, t.link = function(e, t, n) {
                    if (null === (e = ne(this.options.sanitize, this.options.baseUrl, e))) return n;
                    var r = '<a href="' + re(e) + '"';
                    return t && (r += ' title="' + t + '"'), r += ">" + n + "</a>";
                }, t.image = function(e, t, n) {
                    if (null === (e = ne(this.options.sanitize, this.options.baseUrl, e))) return n;
                    var r = '<img src="' + e + '" alt="' + n + '"';
                    return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">";
                }, t.text = function(e) {
                    return e;
                }, e;
            }(), ie = function() {
                function e() {}
                var t = e.prototype;
                return t.strong = function(e) {
                    return e;
                }, t.em = function(e) {
                    return e;
                }, t.codespan = function(e) {
                    return e;
                }, t.del = function(e) {
                    return e;
                }, t.html = function(e) {
                    return e;
                }, t.text = function(e) {
                    return e;
                }, t.link = function(e, t, n) {
                    return "" + n;
                }, t.image = function(e, t, n) {
                    return "" + n;
                }, t.br = function() {
                    return "";
                }, e;
            }(), ae = function() {
                function e() {
                    this.seen = {};
                }
                var t = e.prototype;
                return t.serialize = function(e) {
                    return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
                }, t.getNextSafeSlug = function(e, t) {
                    var n = e, r = 0;
                    if (this.seen.hasOwnProperty(n)) {
                        r = this.seen[e];
                        do {
                            r++, n = e + "-" + r;
                        } while (this.seen.hasOwnProperty(n));
                    }
                    return t || (this.seen[e] = r, this.seen[n] = 0), n;
                }, t.slug = function(e, t) {
                    void 0 === t && (t = {});
                    var n = this.serialize(e);
                    return this.getNextSafeSlug(n, t.dryrun);
                }, e;
            }(), se = x.defaults, le = F.unescape, ce = function() {
                function e(e) {
                    this.options = e || se, this.options.renderer = this.options.renderer || new oe(), 
                    this.renderer = this.options.renderer, this.renderer.options = this.options, 
                    this.textRenderer = new ie(), this.slugger = new ae();
                }
                e.parse = function(t, n) {
                    return new e(n).parse(t);
                }, e.parseInline = function(t, n) {
                    return new e(n).parseInline(t);
                };
                var t = e.prototype;
                return t.parse = function(e, t) {
                    void 0 === t && (t = !0);
                    var n, r, o, i, a, s, l, c, u, f, p, d, h, v, g, m, y, b, w = "", x = e.length;
                    for (n = 0; n < x; n++) switch (f = e[n], f.type) {
                      case "space":
                        continue;

                      case "hr":
                        w += this.renderer.hr();
                        continue;

                      case "heading":
                        w += this.renderer.heading(this.parseInline(f.tokens), f.depth, le(this.parseInline(f.tokens, this.textRenderer)), this.slugger);
                        continue;

                      case "code":
                        w += this.renderer.code(f.text, f.lang, f.escaped);
                        continue;

                      case "table":
                        for (c = "", l = "", i = f.header.length, r = 0; r < i; r++) l += this.renderer.tablecell(this.parseInline(f.tokens.header[r]), {
                            header: !0,
                            align: f.align[r]
                        });
                        for (c += this.renderer.tablerow(l), u = "", i = f.cells.length, 
                        r = 0; r < i; r++) {
                            for (s = f.tokens.cells[r], l = "", a = s.length, o = 0; o < a; o++) l += this.renderer.tablecell(this.parseInline(s[o]), {
                                header: !1,
                                align: f.align[o]
                            });
                            u += this.renderer.tablerow(l);
                        }
                        w += this.renderer.table(c, u);
                        continue;

                      case "blockquote":
                        u = this.parse(f.tokens), w += this.renderer.blockquote(u);
                        continue;

                      case "list":
                        for (p = f.ordered, d = f.start, h = f.loose, i = f.items.length, 
                        u = "", r = 0; r < i; r++) g = f.items[r], m = g.checked, 
                        y = g.task, v = "", g.task && (b = this.renderer.checkbox(m), 
                        h ? g.tokens.length > 0 && "text" === g.tokens[0].type ? (g.tokens[0].text = b + " " + g.tokens[0].text, 
                        g.tokens[0].tokens && g.tokens[0].tokens.length > 0 && "text" === g.tokens[0].tokens[0].type && (g.tokens[0].tokens[0].text = b + " " + g.tokens[0].tokens[0].text)) : g.tokens.unshift({
                            type: "text",
                            text: b
                        }) : v += b), v += this.parse(g.tokens, h), u += this.renderer.listitem(v, y, m);
                        w += this.renderer.list(u, p, d);
                        continue;

                      case "html":
                        w += this.renderer.html(f.text);
                        continue;

                      case "paragraph":
                        w += this.renderer.paragraph(this.parseInline(f.tokens));
                        continue;

                      case "text":
                        for (u = f.tokens ? this.parseInline(f.tokens) : f.text; n + 1 < x && "text" === e[n + 1].type; ) f = e[++n], 
                        u += "\n" + (f.tokens ? this.parseInline(f.tokens) : f.text);
                        w += t ? this.renderer.paragraph(u) : u;
                        continue;

                      default:
                        var k = 'Token with "' + f.type + '" type was not found.';
                        if (this.options.silent) return;
                        throw new Error(k);
                    }
                    return w;
                }, t.parseInline = function(e, t) {
                    t = t || this.renderer;
                    var n, r, o = "", i = e.length;
                    for (n = 0; n < i; n++) switch (r = e[n], r.type) {
                      case "escape":
                        o += t.text(r.text);
                        break;

                      case "html":
                        o += t.html(r.text);
                        break;

                      case "link":
                        o += t.link(r.href, r.title, this.parseInline(r.tokens, t));
                        break;

                      case "image":
                        o += t.image(r.href, r.title, r.text);
                        break;

                      case "strong":
                        o += t.strong(this.parseInline(r.tokens, t));
                        break;

                      case "em":
                        o += t.em(this.parseInline(r.tokens, t));
                        break;

                      case "codespan":
                        o += t.codespan(r.text);
                        break;

                      case "br":
                        o += t.br();
                        break;

                      case "del":
                        o += t.del(this.parseInline(r.tokens, t));
                        break;

                      case "text":
                        o += t.text(r.text);
                        break;

                      default:
                        var a = 'Token with "' + r.type + '" type was not found.';
                        if (this.options.silent) return;
                        throw new Error(a);
                    }
                    return o;
                }, e;
            }(), ue = F.merge, fe = F.checkSanitizeDeprecation, pe = F.escape, de = x.getDefaults, he = x.changeDefaults, ve = x.defaults;
            return w.options = w.setOptions = function(e) {
                return ue(w.defaults, e), he(w.defaults), w;
            }, w.getDefaults = de, w.defaults = ve, w.use = function(e) {
                var t = ue({}, e);
                if (e.renderer && function() {
                    var n = w.defaults.renderer || new oe();
                    for (var r in e.renderer) !function(t) {
                        var r = n[t];
                        n[t] = function() {
                            for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                            var s = e.renderer[t].apply(n, i);
                            return !1 === s && (s = r.apply(n, i)), s;
                        };
                    }(r);
                    t.renderer = n;
                }(), e.tokenizer && function() {
                    var n = w.defaults.tokenizer || new q();
                    for (var r in e.tokenizer) !function(t) {
                        var r = n[t];
                        n[t] = function() {
                            for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                            var s = e.tokenizer[t].apply(n, i);
                            return !1 === s && (s = r.apply(n, i)), s;
                        };
                    }(r);
                    t.tokenizer = n;
                }(), e.walkTokens) {
                    var n = w.defaults.walkTokens;
                    t.walkTokens = function(t) {
                        e.walkTokens(t), n && n(t);
                    };
                }
                w.setOptions(t);
            }, w.walkTokens = function(e, t) {
                for (var n, r = o(e); !(n = r()).done; ) {
                    var i = n.value;
                    switch (t(i), i.type) {
                      case "table":
                        for (var a, s = o(i.tokens.header); !(a = s()).done; ) {
                            var l = a.value;
                            w.walkTokens(l, t);
                        }
                        for (var c, u = o(i.tokens.cells); !(c = u()).done; ) for (var f, p = c.value, d = o(p); !(f = d()).done; ) {
                            var h = f.value;
                            w.walkTokens(h, t);
                        }
                        break;

                      case "list":
                        w.walkTokens(i.items, t);
                        break;

                      default:
                        i.tokens && w.walkTokens(i.tokens, t);
                    }
                }
            }, w.parseInline = function(e, t) {
                if (void 0 === e || null === e) throw new Error("marked.parseInline(): input parameter is undefined or null");
                if ("string" != typeof e) throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
                t = ue({}, w.defaults, t || {}), fe(t);
                try {
                    var n = ee.lexInline(e, t);
                    return t.walkTokens && w.walkTokens(n, t.walkTokens), ce.parseInline(n, t);
                } catch (e) {
                    if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", 
                    t.silent) return "<p>An error occurred:</p><pre>" + pe(e.message + "", !0) + "</pre>";
                    throw e;
                }
            }, w.Parser = ce, w.parser = ce.parse, w.Renderer = oe, w.TextRenderer = ie, 
            w.Lexer = ee, w.lexer = ee.lex, w.Tokenizer = q, w.Slugger = ae, w.parse = w, 
            w;
        });
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            var t = {};
            return u(f(e), function(e) {
                var n = e[0], r = e[1];
                u(r, function(e) {
                    t[e] = n;
                });
            }), t;
        }
        function o(e, t) {
            var n = r(e.pluralTypeToLanguages);
            return n[t] || n[m.call(t, /-/, 1)[0]] || n.en;
        }
        function i(e, t, n) {
            return e.pluralTypes[t](n);
        }
        function a(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }
        function s(e) {
            var t = e && e.prefix || "%{", n = e && e.suffix || "}";
            if (t === y || n === y) throw new RangeError('"' + y + '" token is reserved for pluralization');
            return new RegExp(a(t) + "(.*?)" + a(n), "g");
        }
        function l(e, t, n, r, o) {
            if ("string" != typeof e) throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
            if (null == t) return e;
            var a = e, s = r || k, l = "number" == typeof t ? {
                smart_count: t
            } : t;
            if (null != l.smart_count && e) {
                var c = o || w, u = m.call(e, y), f = n || "en", p = x(c, f), v = i(c, p, l.smart_count);
                a = h(u[v] || u[0]);
            }
            return a = g.call(a, s, function(e, t) {
                return d(l, t) && null != l[t] ? l[t] : e;
            });
        }
        function c(e) {
            var t = e || {};
            this.phrases = {}, this.extend(t.phrases || {}), this.currentLocale = t.locale || "en";
            var n = t.allowMissing ? l : null;
            this.onMissingKey = "function" == typeof t.onMissingKey ? t.onMissingKey : n, 
            this.warn = t.warn || v, this.tokenRegex = s(t.interpolation), this.pluralRules = t.pluralRules || w;
        }
        var u = n(48), f = n(100), p = n(105), d = n(25), h = n(103), v = function(e) {
            p(!1, e);
        }, g = String.prototype.replace, m = String.prototype.split, y = "||||", b = function(e) {
            var t = e % 100, n = t % 10;
            return 11 !== t && 1 === n ? 0 : 2 <= n && n <= 4 && !(t >= 12 && t <= 14) ? 1 : 2;
        }, w = {
            pluralTypes: {
                arabic: function(e) {
                    if (e < 3) return e;
                    var t = e % 100;
                    return t >= 3 && t <= 10 ? 3 : t >= 11 ? 4 : 5;
                },
                bosnian_serbian: b,
                chinese: function() {
                    return 0;
                },
                croatian: b,
                french: function(e) {
                    return e >= 2 ? 1 : 0;
                },
                german: function(e) {
                    return 1 !== e ? 1 : 0;
                },
                russian: b,
                lithuanian: function(e) {
                    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 9 && (e % 100 < 11 || e % 100 > 19) ? 1 : 2;
                },
                czech: function(e) {
                    return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2;
                },
                polish: function(e) {
                    if (1 === e) return 0;
                    var t = e % 10;
                    return 2 <= t && t <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
                },
                icelandic: function(e) {
                    return e % 10 != 1 || e % 100 == 11 ? 1 : 0;
                },
                slovenian: function(e) {
                    var t = e % 100;
                    return 1 === t ? 0 : 2 === t ? 1 : 3 === t || 4 === t ? 2 : 3;
                }
            },
            pluralTypeToLanguages: {
                arabic: [ "ar" ],
                bosnian_serbian: [ "bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS" ],
                chinese: [ "id", "id-ID", "ja", "ko", "ko-KR", "lo", "ms", "th", "th-TH", "zh" ],
                croatian: [ "hr", "hr-HR" ],
                german: [ "fa", "da", "de", "en", "es", "fi", "el", "he", "hi-IN", "hu", "hu-HU", "it", "nl", "no", "pt", "sv", "tr" ],
                french: [ "fr", "tl", "pt-br" ],
                russian: [ "ru", "ru-RU" ],
                lithuanian: [ "lt" ],
                czech: [ "cs", "cs-CZ", "sk" ],
                polish: [ "pl" ],
                icelandic: [ "is" ],
                slovenian: [ "sl-SL" ]
            }
        }, x = function() {
            var e = {};
            return function(t, n) {
                var r = e[n];
                return r && !t.pluralTypes[r] && (r = null, e[n] = r), r || (r = o(t, n)) && (e[n] = r), 
                r;
            };
        }(), k = /%\{(.*?)\}/g;
        c.prototype.locale = function(e) {
            return e && (this.currentLocale = e), this.currentLocale;
        }, c.prototype.extend = function(e, t) {
            u(f(e || {}), function(e) {
                var n = e[0], r = e[1], o = t ? t + "." + n : n;
                "object" == typeof r ? this.extend(r, o) : this.phrases[o] = r;
            }, this);
        }, c.prototype.unset = function(e, t) {
            "string" == typeof e ? delete this.phrases[e] : u(f(e || {}), function(e) {
                var n = e[0], r = e[1], o = t ? t + "." + n : n;
                "object" == typeof r ? this.unset(r, o) : delete this.phrases[o];
            }, this);
        }, c.prototype.clear = function() {
            this.phrases = {};
        }, c.prototype.replace = function(e) {
            this.clear(), this.extend(e);
        }, c.prototype.t = function(e, t) {
            var n, r, o = null == t ? {} : t;
            if ("string" == typeof this.phrases[e]) n = this.phrases[e]; else if ("string" == typeof o._) n = o._; else if (this.onMissingKey) {
                var i = this.onMissingKey;
                r = i(e, o, this.currentLocale, this.tokenRegex, this.pluralRules);
            } else this.warn('Missing translation for key: "' + e + '"'), r = e;
            return "string" == typeof n && (r = l(n, o, this.currentLocale, this.tokenRegex, this.pluralRules)), 
            r;
        }, c.prototype.has = function(e) {
            return d(this.phrases, e);
        }, c.transformPhrase = function(e, t, n) {
            return l(e, t, n);
        }, e.exports = c;
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e);
        }
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
        var o = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
        e.exports = function() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e];
                }).join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    r[e] = e;
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
            } catch (e) {
                return !1;
            }
        }() ? Object.assign : function(e, t) {
            for (var n, s, l = r(e), c = 1; c < arguments.length; c++) {
                n = Object(arguments[c]);
                for (var u in n) i.call(n, u) && (l[u] = n[u]);
                if (o) {
                    s = o(n);
                    for (var f = 0; f < s.length; f++) a.call(n, s[f]) && (l[s[f]] = n[s[f]]);
                }
            }
            return l;
        };
    }, function(e, t, n) {
        function r(e, t, n) {
            var r = "double" === (n.quoteStyle || t) ? '"' : "'";
            return r + e + r;
        }
        function o(e) {
            return String(e).replace(/"/g, "&quot;");
        }
        function i(e) {
            return !("[object Array]" !== v(e) || ie && "object" == typeof e && ie in e);
        }
        function a(e) {
            return !("[object Date]" !== v(e) || ie && "object" == typeof e && ie in e);
        }
        function s(e) {
            return !("[object RegExp]" !== v(e) || ie && "object" == typeof e && ie in e);
        }
        function l(e) {
            return !("[object Error]" !== v(e) || ie && "object" == typeof e && ie in e);
        }
        function c(e) {
            return !("[object String]" !== v(e) || ie && "object" == typeof e && ie in e);
        }
        function u(e) {
            return !("[object Number]" !== v(e) || ie && "object" == typeof e && ie in e);
        }
        function f(e) {
            return !("[object Boolean]" !== v(e) || ie && "object" == typeof e && ie in e);
        }
        function p(e) {
            if (ee) return e && "object" == typeof e && e instanceof Symbol;
            if ("symbol" == typeof e) return !0;
            if (!e || "object" != typeof e || !Y) return !1;
            try {
                return Y.call(e), !0;
            } catch (e) {}
            return !1;
        }
        function d(e) {
            if (!e || "object" != typeof e || !J) return !1;
            try {
                return J.call(e), !0;
            } catch (e) {}
            return !1;
        }
        function h(e, t) {
            return ae.call(e, t);
        }
        function v(e) {
            return K.call(e);
        }
        function g(e) {
            if (e.name) return e.name;
            var t = Z.call(G.call(e), /^function\s*([\w$]+)/);
            return t ? t[1] : null;
        }
        function m(e, t) {
            if (e.indexOf) return e.indexOf(t);
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
        }
        function y(e) {
            if (!R || !e || "object" != typeof e) return !1;
            try {
                R.call(e);
                try {
                    N.call(e);
                } catch (e) {
                    return !0;
                }
                return e instanceof Map;
            } catch (e) {}
            return !1;
        }
        function b(e) {
            if (!D || !e || "object" != typeof e) return !1;
            try {
                D.call(e, D);
                try {
                    Q.call(e, Q);
                } catch (e) {
                    return !0;
                }
                return e instanceof WeakMap;
            } catch (e) {}
            return !1;
        }
        function w(e) {
            if (!V || !e || "object" != typeof e) return !1;
            try {
                return V.call(e), !0;
            } catch (e) {}
            return !1;
        }
        function x(e) {
            if (!N || !e || "object" != typeof e) return !1;
            try {
                N.call(e);
                try {
                    R.call(e);
                } catch (e) {
                    return !0;
                }
                return e instanceof Set;
            } catch (e) {}
            return !1;
        }
        function k(e) {
            if (!Q || !e || "object" != typeof e) return !1;
            try {
                Q.call(e, Q);
                try {
                    D.call(e, D);
                } catch (e) {
                    return !0;
                }
                return e instanceof WeakSet;
            } catch (e) {}
            return !1;
        }
        function S(e) {
            return !(!e || "object" != typeof e) && ("undefined" != typeof HTMLElement && e instanceof HTMLElement || "string" == typeof e.nodeName && "function" == typeof e.getAttribute);
        }
        function _(e, t) {
            if (e.length > t.maxStringLength) {
                var n = e.length - t.maxStringLength, o = "... " + n + " more character" + (n > 1 ? "s" : "");
                return _(e.slice(0, t.maxStringLength), t) + o;
            }
            return r(e.replace(/(['\\])/g, "\\$1").replace(/[\x00-\x1f]/g, A), "single", t);
        }
        function A(e) {
            var t = e.charCodeAt(0), n = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            }[t];
            return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + t.toString(16).toUpperCase();
        }
        function O(e) {
            return "Object(" + e + ")";
        }
        function j(e) {
            return e + " { ? }";
        }
        function $(e, t, n, r) {
            return e + " (" + t + ") {" + (r ? I(n, r) : n.join(", ")) + "}";
        }
        function E(e) {
            for (var t = 0; t < e.length; t++) if (m(e[t], "\n") >= 0) return !1;
            return !0;
        }
        function T(e, t) {
            var n;
            if ("\t" === e.indent) n = "\t"; else {
                if (!("number" == typeof e.indent && e.indent > 0)) return null;
                n = Array(e.indent + 1).join(" ");
            }
            return {
                base: n,
                prev: Array(t + 1).join(n)
            };
        }
        function I(e, t) {
            if (0 === e.length) return "";
            var n = "\n" + t.prev + t.base;
            return n + e.join("," + n) + "\n" + t.prev;
        }
        function z(e, t) {
            var n = i(e), r = [];
            if (n) {
                r.length = e.length;
                for (var o = 0; o < e.length; o++) r[o] = h(e, o) ? t(e[o], e) : "";
            }
            var a, s = "function" == typeof X ? X(e) : [];
            if (ee) {
                a = {};
                for (var l = 0; l < s.length; l++) a["$" + s[l]] = s[l];
            }
            for (var c in e) h(e, c) && (n && String(Number(c)) === c && c < e.length || ee && a["$" + c] instanceof Symbol || (/[^\w$]/.test(c) ? r.push(t(c, e) + ": " + t(e[c], e)) : r.push(c + ": " + t(e[c], e))));
            if ("function" == typeof X) for (var u = 0; u < s.length; u++) te.call(e, s[u]) && r.push("[" + t(s[u]) + "]: " + t(e[s[u]], e));
            return r;
        }
        var C = "function" == typeof Map && Map.prototype, P = Object.getOwnPropertyDescriptor && C ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, R = C && P && "function" == typeof P.get ? P.get : null, M = C && Map.prototype.forEach, F = "function" == typeof Set && Set.prototype, L = Object.getOwnPropertyDescriptor && F ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, N = F && L && "function" == typeof L.get ? L.get : null, U = F && Set.prototype.forEach, B = "function" == typeof WeakMap && WeakMap.prototype, D = B ? WeakMap.prototype.has : null, q = "function" == typeof WeakSet && WeakSet.prototype, Q = q ? WeakSet.prototype.has : null, W = "function" == typeof WeakRef && WeakRef.prototype, V = W ? WeakRef.prototype.deref : null, H = Boolean.prototype.valueOf, K = Object.prototype.toString, G = Function.prototype.toString, Z = String.prototype.match, J = "function" == typeof BigInt ? BigInt.prototype.valueOf : null, X = Object.getOwnPropertySymbols, Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null, ee = "function" == typeof Symbol && "object" == typeof Symbol.iterator, te = Object.prototype.propertyIsEnumerable, ne = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__;
        } : null), re = n(113).custom, oe = re && p(re) ? re : null, ie = "function" == typeof Symbol && void 0 !== Symbol.toStringTag ? Symbol.toStringTag : null;
        e.exports = function e(t, n, A, C) {
            function P(t, n, r) {
                if (n && (C = C.slice(), C.push(n)), r) {
                    var o = {
                        depth: F.depth
                    };
                    return h(F, "quoteStyle") && (o.quoteStyle = F.quoteStyle), 
                    e(t, o, A + 1, C);
                }
                return e(t, F, A + 1, C);
            }
            var F = n || {};
            if (h(F, "quoteStyle") && "single" !== F.quoteStyle && "double" !== F.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
            if (h(F, "maxStringLength") && ("number" == typeof F.maxStringLength ? F.maxStringLength < 0 && F.maxStringLength !== 1 / 0 : null !== F.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            var L = !h(F, "customInspect") || F.customInspect;
            if ("boolean" != typeof L && "symbol" !== L) throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            if (h(F, "indent") && null !== F.indent && "\t" !== F.indent && !(parseInt(F.indent, 10) === F.indent && F.indent > 0)) throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
            if (void 0 === t) return "undefined";
            if (null === t) return "null";
            if ("boolean" == typeof t) return t ? "true" : "false";
            if ("string" == typeof t) return _(t, F);
            if ("number" == typeof t) return 0 === t ? 1 / 0 / t > 0 ? "0" : "-0" : String(t);
            if ("bigint" == typeof t) return String(t) + "n";
            var B = void 0 === F.depth ? 5 : F.depth;
            if (void 0 === A && (A = 0), A >= B && B > 0 && "object" == typeof t) return i(t) ? "[Array]" : "[Object]";
            var D = T(F, A);
            if (void 0 === C) C = []; else if (m(C, t) >= 0) return "[Circular]";
            if ("function" == typeof t) {
                var q = g(t), Q = z(t, P);
                return "[Function" + (q ? ": " + q : " (anonymous)") + "]" + (Q.length > 0 ? " { " + Q.join(", ") + " }" : "");
            }
            if (p(t)) {
                var W = ee ? String(t).replace(/^(Symbol\(.*\))_[^)]*$/, "$1") : Y.call(t);
                return "object" != typeof t || ee ? W : O(W);
            }
            if (S(t)) {
                for (var V = "<" + String(t.nodeName).toLowerCase(), K = t.attributes || [], G = 0; G < K.length; G++) V += " " + K[G].name + "=" + r(o(K[G].value), "double", F);
                return V += ">", t.childNodes && t.childNodes.length && (V += "..."), 
                V += "</" + String(t.nodeName).toLowerCase() + ">";
            }
            if (i(t)) {
                if (0 === t.length) return "[]";
                var Z = z(t, P);
                return D && !E(Z) ? "[" + I(Z, D) + "]" : "[ " + Z.join(", ") + " ]";
            }
            if (l(t)) {
                var X = z(t, P);
                return 0 === X.length ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + X.join(", ") + " }";
            }
            if ("object" == typeof t && L) {
                if (oe && "function" == typeof t[oe]) return t[oe]();
                if ("symbol" !== L && "function" == typeof t.inspect) return t.inspect();
            }
            if (y(t)) {
                var te = [];
                return M.call(t, function(e, n) {
                    te.push(P(n, t, !0) + " => " + P(e, t));
                }), $("Map", R.call(t), te, D);
            }
            if (x(t)) {
                var re = [];
                return U.call(t, function(e) {
                    re.push(P(e, t));
                }), $("Set", N.call(t), re, D);
            }
            if (b(t)) return j("WeakMap");
            if (k(t)) return j("WeakSet");
            if (w(t)) return j("WeakRef");
            if (u(t)) return O(P(Number(t)));
            if (d(t)) return O(P(J.call(t)));
            if (f(t)) return O(H.call(t));
            if (c(t)) return O(P(String(t)));
            if (!a(t) && !s(t)) {
                var ae = z(t, P), se = ne ? ne(t) === Object.prototype : t instanceof Object || t.constructor === Object, le = t instanceof Object ? "" : "null prototype", ce = !se && ie && Object(t) === t && ie in t ? v(t).slice(8, -1) : le ? "Object" : "", ue = se || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "", fe = ue + (ce || le ? "[" + [].concat(ce || [], le || []).join(": ") + "] " : "");
                return 0 === ae.length ? fe + "{}" : D ? fe + "{" + I(ae, D) + "}" : fe + "{ " + ae.join(", ") + " }";
            }
            return String(t);
        };
        var ae = Object.prototype.hasOwnProperty || function(e) {
            return e in this;
        };
    }, function(e, t, n) {
        "use strict";
        var r;
        if (!Object.keys) {
            var o = Object.prototype.hasOwnProperty, i = Object.prototype.toString, a = n(30), s = Object.prototype.propertyIsEnumerable, l = !s.call({
                toString: null
            }, "toString"), c = s.call(function() {}, "prototype"), u = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ], f = function(e) {
                var t = e.constructor;
                return t && t.prototype === e;
            }, p = {
                $applicationCache: !0,
                $console: !0,
                $external: !0,
                $frame: !0,
                $frameElement: !0,
                $frames: !0,
                $innerHeight: !0,
                $innerWidth: !0,
                $onmozfullscreenchange: !0,
                $onmozfullscreenerror: !0,
                $outerHeight: !0,
                $outerWidth: !0,
                $pageXOffset: !0,
                $pageYOffset: !0,
                $parent: !0,
                $scrollLeft: !0,
                $scrollTop: !0,
                $scrollX: !0,
                $scrollY: !0,
                $self: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $window: !0
            }, d = function() {
                if ("undefined" == typeof window) return !1;
                for (var e in window) try {
                    if (!p["$" + e] && o.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
                        f(window[e]);
                    } catch (e) {
                        return !0;
                    }
                } catch (e) {
                    return !0;
                }
                return !1;
            }(), h = function(e) {
                if ("undefined" == typeof window || !d) return f(e);
                try {
                    return f(e);
                } catch (e) {
                    return !1;
                }
            };
            r = function(e) {
                var t = null !== e && "object" == typeof e, n = "[object Function]" === i.call(e), r = a(e), s = t && "[object String]" === i.call(e), f = [];
                if (!t && !n && !r) throw new TypeError("Object.keys called on a non-object");
                var p = c && n;
                if (s && e.length > 0 && !o.call(e, 0)) for (var d = 0; d < e.length; ++d) f.push(String(d));
                if (r && e.length > 0) for (var v = 0; v < e.length; ++v) f.push(String(v)); else for (var g in e) p && "prototype" === g || !o.call(e, g) || f.push(String(g));
                if (l) for (var m = h(e), y = 0; y < u.length; ++y) m && "constructor" === u[y] || !o.call(e, u[y]) || f.push(u[y]);
                return f;
            };
        }
        e.exports = r;
    }, function(e, t, n) {
        "use strict";
        var r = Array.prototype.slice, o = n(30), i = Object.keys, a = i ? function(e) {
            return i(e);
        } : n(98), s = Object.keys;
        a.shim = function() {
            if (Object.keys) {
                (function() {
                    var e = Object.keys(arguments);
                    return e && e.length === arguments.length;
                })(1, 2) || (Object.keys = function(e) {
                    return s(o(e) ? r.call(e) : e);
                });
            } else Object.keys = a;
            return Object.keys || a;
        }, e.exports = a;
    }, function(e, t, n) {
        "use strict";
        var r = n(2), o = n(4), i = n(31), a = n(32), s = n(101), l = o(a(), Object);
        r(l, {
            getPolyfill: a,
            implementation: i,
            shim: s
        }), e.exports = l;
    }, function(e, t, n) {
        "use strict";
        var r = n(32), o = n(2);
        e.exports = function() {
            var e = r();
            return o(Object, {
                entries: e
            }, {
                entries: function() {
                    return Object.entries !== e;
                }
            }), e;
        };
    }, function(e, t) {
        function n() {
            throw new Error("setTimeout has not been defined");
        }
        function r() {
            throw new Error("clearTimeout has not been defined");
        }
        function o(e) {
            if (u === setTimeout) return setTimeout(e, 0);
            if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
            try {
                return u(e, 0);
            } catch (t) {
                try {
                    return u.call(null, e, 0);
                } catch (t) {
                    return u.call(this, e, 0);
                }
            }
        }
        function i(e) {
            if (f === clearTimeout) return clearTimeout(e);
            if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
            try {
                return f(e);
            } catch (t) {
                try {
                    return f.call(null, e);
                } catch (t) {
                    return f.call(this, e);
                }
            }
        }
        function a() {
            v && d && (v = !1, d.length ? h = d.concat(h) : g = -1, h.length && s());
        }
        function s() {
            if (!v) {
                var e = o(a);
                v = !0;
                for (var t = h.length; t; ) {
                    for (d = h, h = []; ++g < t; ) d && d[g].run();
                    g = -1, t = h.length;
                }
                d = null, v = !1, i(e);
            }
        }
        function l(e, t) {
            this.fun = e, this.array = t;
        }
        function c() {}
        var u, f, p = e.exports = {};
        !function() {
            try {
                u = "function" == typeof setTimeout ? setTimeout : n;
            } catch (e) {
                u = n;
            }
            try {
                f = "function" == typeof clearTimeout ? clearTimeout : r;
            } catch (e) {
                f = r;
            }
        }();
        var d, h = [], v = !1, g = -1;
        p.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            h.push(new l(e, t)), 1 !== h.length || v || o(s);
        }, l.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", 
        p.versions = {}, p.on = c, p.addListener = c, p.once = c, p.off = c, p.removeListener = c, 
        p.removeAllListeners = c, p.emit = c, p.prependListener = c, p.prependOnceListener = c, 
        p.listeners = function(e) {
            return [];
        }, p.binding = function(e) {
            throw new Error("process.binding is not supported");
        }, p.cwd = function() {
            return "/";
        }, p.chdir = function(e) {
            throw new Error("process.chdir is not supported");
        }, p.umask = function() {
            return 0;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(4), o = n(2), i = n(33), a = n(34), s = n(104), l = r(a());
        o(l, {
            getPolyfill: a,
            implementation: i,
            shim: s
        }), e.exports = l;
    }, function(e, t, n) {
        "use strict";
        var r = n(2), o = n(34);
        e.exports = function() {
            var e = o();
            return r(String.prototype, {
                trim: e
            }, {
                trim: function() {
                    return String.prototype.trim !== e;
                }
            }), e;
        };
    }, function(e, t, n) {
        "use strict";
        (function(t) {
            var n = "production" !== t.env.NODE_ENV, r = function() {};
            if (n) {
                var o = function(e, t) {
                    var n = arguments.length;
                    t = new Array(n > 1 ? n - 1 : 0);
                    for (var r = 1; r < n; r++) t[r - 1] = arguments[r];
                    var o = 0, i = "Warning: " + e.replace(/%s/g, function() {
                        return t[o++];
                    });
                    try {
                        throw new Error(i);
                    } catch (e) {}
                };
                r = function(e, t, n) {
                    var r = arguments.length;
                    n = new Array(r > 2 ? r - 2 : 0);
                    for (var i = 2; i < r; i++) n[i - 2] = arguments[i];
                    if (void 0 === t) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
                    e || o.apply(null, [ t ].concat(n));
                };
            }
            e.exports = r;
        }).call(t, n(102));
    }, function(e, t, n) {
        function r(e, t) {
            return new a(t).process(e);
        }
        var o = n(35), i = n(36), a = n(107);
        t = e.exports = r, t.filterXSS = r, t.FilterXSS = a;
        for (var s in o) t[s] = o[s];
        for (var s in i) t[s] = i[s];
        "undefined" != typeof window && (window.filterXSS = e.exports), function() {
            return "undefined" != typeof self && "undefined" != typeof DedicatedWorkerGlobalScope && self instanceof DedicatedWorkerGlobalScope;
        }() && (self.filterXSS = e.exports);
    }, function(e, t, n) {
        function r(e) {
            return void 0 === e || null === e;
        }
        function o(e) {
            var t = p.spaceIndex(e);
            if (-1 === t) return {
                html: "",
                closing: "/" === e[e.length - 2]
            };
            e = p.trim(e.slice(t + 1, -1));
            var n = "/" === e[e.length - 1];
            return n && (e = p.trim(e.slice(0, -1))), {
                html: e,
                closing: n
            };
        }
        function i(e) {
            var t = {};
            for (var n in e) t[n] = e[n];
            return t;
        }
        function a(e) {
            e = i(e || {}), e.stripIgnoreTag && (e.onIgnoreTag, e.onIgnoreTag = l.onIgnoreTagStripAll), 
            e.whiteList = e.whiteList || l.whiteList, e.onTag = e.onTag || l.onTag, 
            e.onTagAttr = e.onTagAttr || l.onTagAttr, e.onIgnoreTag = e.onIgnoreTag || l.onIgnoreTag, 
            e.onIgnoreTagAttr = e.onIgnoreTagAttr || l.onIgnoreTagAttr, e.safeAttrValue = e.safeAttrValue || l.safeAttrValue, 
            e.escapeHtml = e.escapeHtml || l.escapeHtml, this.options = e, !1 === e.css ? this.cssFilter = !1 : (e.css = e.css || {}, 
            this.cssFilter = new s(e.css));
        }
        var s = n(7).FilterCSS, l = n(35), c = n(36), u = c.parseTag, f = c.parseAttr, p = n(12);
        a.prototype.process = function(e) {
            if (e = e || "", !(e = e.toString())) return "";
            var t = this, n = t.options, i = n.whiteList, a = n.onTag, s = n.onIgnoreTag, c = n.onTagAttr, d = n.onIgnoreTagAttr, h = n.safeAttrValue, v = n.escapeHtml, g = t.cssFilter;
            n.stripBlankChar && (e = l.stripBlankChar(e)), n.allowCommentTag || (e = l.stripCommentTag(e));
            var m = !1;
            if (n.stripIgnoreTagBody) {
                var m = l.StripTagBody(n.stripIgnoreTagBody, s);
                s = m.onIgnoreTag;
            }
            var y = u(e, function(e, t, n, l, u) {
                var m = {
                    sourcePosition: e,
                    position: t,
                    isClosing: u,
                    isWhite: i.hasOwnProperty(n)
                }, y = a(n, l, m);
                if (!r(y)) return y;
                if (m.isWhite) {
                    if (m.isClosing) return "</" + n + ">";
                    var b = o(l), w = i[n], x = f(b.html, function(e, t) {
                        var o = -1 !== p.indexOf(w, e), i = c(n, e, t, o);
                        if (!r(i)) return i;
                        if (o) return t = h(n, e, t, g), t ? e + '="' + t + '"' : e;
                        var i = d(n, e, t, o);
                        return r(i) ? void 0 : i;
                    }), l = "<" + n;
                    return x && (l += " " + x), b.closing && (l += " /"), l += ">";
                }
                var y = s(n, l, m);
                return r(y) ? v(l) : y;
            }, v);
            return m && (y = m.remove(y)), y;
        }, e.exports = a;
    }, function(e, t) {
        e.exports = {
            smile: "e3/2018new_weixioa02_org.png",
            lovely: "09/2018new_keai_org.png",
            happy: "1e/2018new_taikaixin_org.png",
            clap: "6e/2018new_guzhang_thumb.png",
            whee: "33/2018new_xixi_thumb.png",
            haha: "8f/2018new_haha_thumb.png",
            "laugh and cry": "4a/2018new_xiaoku_thumb.png",
            wink: "43/2018new_jiyan_org.png",
            greddy: "fa/2018new_chanzui_org.png",
            awkward: "a3/2018new_heixian_thumb.png",
            sweat: "28/2018new_han_org.png",
            "pick nose": "9a/2018new_wabi_thumb.png",
            hum: "7c/2018new_heng_thumb.png",
            angry: "f6/2018new_nu_thumb.png",
            grievance: "a5/2018new_weiqu_thumb.png",
            poor: "96/2018new_kelian_org.png",
            disappoint: "aa/2018new_shiwang_thumb.png",
            sad: "ee/2018new_beishang_org.png",
            tear: "6e/2018new_leimu_org.png",
            "no way": "83/2018new_kuxiao_org.png",
            shy: "c1/2018new_haixiu_org.png",
            dirt: "10/2018new_wu_thumb.png",
            "love you": "f6/2018new_aini_org.png",
            kiss: "2c/2018new_qinqin_thumb.png",
            amorousness: "9d/2018new_huaxin_org.png",
            longing: "c9/2018new_chongjing_org.png",
            desire: "3e/2018new_tianping_thumb.png",
            "bad laugh": "4d/2018new_huaixiao_org.png",
            blackness: "9e/2018new_yinxian_org.png",
            "laugh without word": "2d/2018new_xiaoerbuyu_org.png",
            titter: "71/2018new_touxiao_org.png",
            cool: "c4/2018new_ku_org.png",
            "not easy": "aa/2018new_bingbujiandan_thumb.png",
            think: "30/2018new_sikao_org.png",
            question: "b8/2018new_ningwen_org.png",
            "no idea": "2a/2018new_wenhao_thumb.png",
            dizzy: "07/2018new_yun_thumb.png",
            bomb: "a2/2018new_shuai_thumb.png",
            bone: "a1/2018new_kulou_thumb.png",
            "be quiet": "b0/2018new_xu_org.png",
            "shut up": "62/2018new_bizui_org.png",
            stupid: "dd/2018new_shayan_org.png",
            "surprise ": "49/2018new_chijing_org.png",
            vomit: "08/2018new_tu_org.png",
            cold: "40/2018new_kouzhao_thumb.png",
            sick: "3b/2018new_shengbing_thumb.png",
            bye: "fd/2018new_baibai_thumb.png",
            "look down on": "da/2018new_bishi_org.png",
            "white eye": "ef/2018new_landelini_org.png",
            "left hum": "43/2018new_zuohengheng_thumb.png",
            "right hum": "c1/2018new_youhengheng_thumb.png",
            crazy: "17/2018new_zhuakuang_org.png",
            "scold ": "87/2018new_zhouma_thumb.png",
            "hit on face": "cb/2018new_dalian_org.png",
            wow: "ae/2018new_ding_org.png",
            fan: "86/2018new_hufen02_org.png",
            money: "a2/2018new_qian_thumb.png",
            yawn: "55/2018new_dahaqian_org.png",
            sleepy: "3c/2018new_kun_thumb.png",
            sleep: "e2/2018new_shuijiao_thumb.png",
            "watermelon ": "01/2018new_chigua_thumb.png",
            doge: "a1/2018new_doge02_org.png",
            dog: "22/2018new_erha_org.png",
            cat: "7b/2018new_miaomiao_thumb.png",
            thumb: "e6/2018new_zan_org.png",
            good: "8a/2018new_good_org.png",
            ok: "45/2018new_ok_org.png",
            yeah: "29/2018new_ye_thumb.png",
            "shack hand": "e9/2018new_woshou_thumb.png",
            bow: "e7/2018new_zuoyi_org.png",
            come: "42/2018new_guolai_thumb.png",
            punch: "86/2018new_quantou_thumb.png"
        };
    }, function(e, t) {
        e.exports = {
            nick: "NickName",
            mail: "E-Mail",
            link: "Website(http://)",
            nickFail: "NickName cannot be less than 3 bytes.",
            mailFail: "Please confirm your email address.",
            sofa: "No comment yet.",
            submit: "Submit",
            reply: "Reply",
            cancelReply: "Cancel reply",
            comments: "Comments",
            cancel: "Cancel",
            confirm: "Confirm",
            continue: "Continue",
            more: "Load More...",
            preview: "Preview",
            emoji: "Emoji",
            expand: "See more....",
            seconds: "seconds ago",
            minutes: "minutes ago",
            hours: "hours ago",
            days: "days ago",
            now: "just now",
            uploading: "Uploading ...",
            uploadDone: "Upload completed!",
            busy: "Submit is busy, please wait...",
            "code-98": "Valine initialization failed, please check your version of av-min.js.",
            "code-99": "Valine initialization failed, Please check the `el` element in the init method.",
            "code-100": "Valine initialization failed, Please check your appId and appKey.",
            "code-140": "The total number of API calls today has exceeded the development version limit.",
            "code-401": "Unauthorized operation, Please check your appId and appKey.",
            "code-403": "Access denied by API domain white list, Please check your security domain."
        };
    }, function(e, t) {
        e.exports = {
            nick: "ニックネーム",
            mail: "メールアドレス",
            link: "サイト(http://)",
            nickFail: "3バイト以上のニックネームをご入力ください.",
            mailFail: "メールアドレスをご確認ください.",
            sofa: "コメントしましょう~",
            submit: "提出する",
            reply: "返信する",
            cancelReply: "キャンセル",
            comments: "コメント",
            cancel: "キャンセル",
            confirm: "確認する",
            continue: "继续",
            more: "さらに読み込む...",
            preview: "プレビュー",
            emoji: "絵文字",
            expand: "もっと見る",
            seconds: "秒前",
            minutes: "分前",
            hours: "時間前",
            days: "日前",
            now: "たっだ今",
            uploading: "アップロード中...",
            uploadDone: "アップロードが完了しました!",
            busy: "20 秒間隔で提出してください    ...",
            "code-98": "ロードエラーです。av-min.js のバージョンを確認してください.",
            "code-99": "ロードエラーです。initにある`el`エレメントを確認ください.",
            "code-100": "ロードエラーです。AppIdとAppKeyを確認ください.",
            "code-140": "今日のAPIコールの総数が開発バージョンの上限を超えた.",
            "code-401": "権限が制限されています。AppIdとAppKeyを確認ください.",
            "code-403": "アクセスがAPIなどに制限されました、ドメイン名のセキュリティ設定を確認ください"
        };
    }, function(e, t) {
        e.exports = {
            nick: "昵称",
            mail: "邮箱",
            link: "网址(http://)",
            nickFail: "昵称不能少于3个字符",
            mailFail: "请填写正确的邮件地址",
            sofa: "来发评论吧~",
            submit: "提交",
            reply: "回复",
            cancelReply: "取消回复",
            comments: "评论",
            cancel: "取消",
            confirm: "确认",
            continue: "继续",
            more: "加载更多...",
            preview: "预览",
            emoji: "表情",
            expand: "查看更多...",
            seconds: "秒前",
            minutes: "分钟前",
            hours: "小时前",
            days: "天前",
            now: "刚刚",
            uploading: "正在传输...",
            uploadDone: "传输完成!",
            busy: "操作频繁，请稍候再试...",
            "code-98": "Valine 初始化失败，请检查 av-min.js 版本",
            "code-99": "Valine 初始化失败，请检查init中的`el`元素.",
            "code-100": "Valine 初始化失败，请检查你的AppId和AppKey.",
            "code-140": "今日 API 调用总次数已超过开发版限制.",
            "code-401": "未经授权的操作，请检查你的AppId和AppKey.",
            "code-403": "访问被API域名白名单拒绝，请检查你的安全域名设置."
        };
    }, function(e, t) {
        e.exports = {
            nick: "暱稱",
            mail: "郵箱",
            link: "網址(http://)",
            nickFail: "昵稱不能少於3個字符",
            mailFail: "請填寫正確的郵件地址",
            sofa: "來發評論吧~",
            submit: "提交",
            reply: "回覆",
            cancelReply: "取消回覆",
            comments: "評論",
            cancel: "取消",
            confirm: "確認",
            continue: "繼續",
            more: "加載更多...",
            preview: "預覽",
            emoji: "表情",
            expand: "查看更多...",
            seconds: "秒前",
            minutes: "分鐘前",
            hours: "小時前",
            days: "天前",
            now: "剛剛",
            uploading: "正在上傳...",
            uploadDone: "上傳完成!",
            busy: "操作頻繁，請稍候再試...",
            "code-98": "Valine 初始化失敗，請檢查 av-min.js 版本",
            "code-99": "Valine 初始化失敗，請檢查init中的`el`元素.",
            "code-100": "Valine 初始化失敗，請檢查你的AppId和AppKey.",
            "code-140": "今日 API 調用總次數已超過開發版限制.",
            "code-401": "未經授權的操作，請檢查你的AppId和AppKey.",
            "code-403": "訪問被API域名白名單拒絕，請檢查你的安全域名設置."
        };
    }, function(e, t) {}, function(e, t, n) {
        var r = n(115);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]);
        var o = {};
        o.transform = void 0;
        n(117)(r, o);
        r.locals && (e.exports = r.locals);
    }, function(e, t, n) {
        t = n(116)(!1), t.push([ e.i, '.v[data-class="v"]{font-size:16px;text-align:left}.v[data-class="v"] *{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.75}.v[data-class="v"] .vinput,.v[data-class="v"] .veditor,.v[data-class="v"] p,.v[data-class="v"] pre code,.v[data-class="v"] .status-bar{color:#555}.v[data-class="v"] .vtime,.v[data-class="v"] .vsys{color:#b3b3b3}.v[data-class="v"] .text-right{text-align:right}.v[data-class="v"] .text-center{text-align:center}.v[data-class="v"] img{max-width:100%;border:none}.v[data-class="v"] hr{margin:.825em 0;border-color:#f6f6f6;border-style:dashed}.v[data-class="v"].hide-avatar .vimg{display:none}.v[data-class="v"] a{position:relative;cursor:pointer;color:#1abc9c;text-decoration:none;display:inline-block}.v[data-class="v"] a:hover{color:#D7191A}.v[data-class="v"] pre,.v[data-class="v"] code{background-color:#f8f8f8;padding:0.2em 0.4em;border-radius:3px;font-size:85%;margin:0}.v[data-class="v"] pre{padding:10px;overflow:auto;line-height:1.45}.v[data-class="v"] pre code{padding:0;background:transparent;white-space:pre-wrap;word-break:keep-all}.v[data-class="v"] blockquote{color:#666;margin:.5em 0;padding:0 0 0 1em;border-left:8px solid rgba(238,238,238,0.5)}.v[data-class="v"] .vinput{border:none;resize:none;outline:none;padding:10px 5px;max-width:100%;font-size:.775em;-webkit-box-sizing:border-box;box-sizing:border-box}.v[data-class="v"] input[type=\'checkbox\'],.v[data-class="v"] input[type=\'radio\']{display:inline-block;vertical-align:middle;margin-top:-2px}.v[data-class="v"] .vicon{cursor:pointer;display:inline-block;overflow:hidden;fill:#555;vertical-align:middle}.v[data-class="v"] .vicon+.vicon{margin-left:10px}.v[data-class="v"] .vicon.actived{fill:#66b1ff}.v[data-class="v"] .vrow{font-size:0;padding:10px 0}.v[data-class="v"] .vrow .vcol{display:inline-block;vertical-align:middle;font-size:14px}.v[data-class="v"] .vrow .vcol.vcol-20{width:20%}.v[data-class="v"] .vrow .vcol.vcol-30{width:30%}.v[data-class="v"] .vrow .vcol.vcol-40{width:40%}.v[data-class="v"] .vrow .vcol.vcol-50{width:50%}.v[data-class="v"] .vrow .vcol.vcol-60{width:60%}.v[data-class="v"] .vrow .vcol.vcol-70{width:70%}.v[data-class="v"] .vrow .vcol.vcol-80{width:80%}.v[data-class="v"] .vrow .vcol.vctrl{font-size:12px}.v[data-class="v"] .vemoji,.v[data-class="v"] .emoji{width:26px;height:26px;overflow:hidden;vertical-align:middle;margin:0 1px;display:inline-block}.v[data-class="v"] .vwrap{border:1px solid #f0f0f0;border-radius:4px;margin-bottom:10px;overflow:hidden;position:relative;padding:10px}.v[data-class="v"] .vwrap input{background:transparent}.v[data-class="v"] .vwrap .vedit{position:relative;padding-top:10px}.v[data-class="v"] .vwrap .cancel-reply-btn{position:absolute;right:5px;top:5px;cursor:pointer}.v[data-class="v"] .vwrap .vemojis{display:none;font-size:18px;max-height:145px;overflow:auto;padding-bottom:10px;-webkit-box-shadow:0px 0 1px #f0f0f0;box-shadow:0px 0 1px #f0f0f0}.v[data-class="v"] .vwrap .vemojis i{font-style:normal;padding-top:7px;width:36px;cursor:pointer;text-align:center;display:inline-block;vertical-align:middle}.v[data-class="v"] .vwrap .vpreview{padding:7px;-webkit-box-shadow:0px 0 1px #f0f0f0;box-shadow:0px 0 1px #f0f0f0}.v[data-class="v"] .vwrap .vheader .vinput{width:33.33%;border-bottom:1px #dedede dashed}.v[data-class="v"] .vwrap .vheader.item2 .vinput{width:50%}.v[data-class="v"] .vwrap .vheader.item1 .vinput{width:100%}.v[data-class="v"] .vwrap .vheader .vinput:focus{border-bottom-color:#eb5055}@media screen and (max-width: 520px){.v[data-class="v"] .vwrap .vheader .vinput{width:100%}.v[data-class="v"] .vwrap .vheader.item2 .vinput{width:100%}}.v[data-class="v"] .vpower{color:#999;font-size:.75em;padding:.5em 0}.v[data-class="v"] .vpower a{font-size:.75em}.v[data-class="v"] .vcount{padding:5px;font-weight:600;font-size:1.25em}.v[data-class="v"] ul,.v[data-class="v"] ol{padding:0;margin-left:1.25em}.v[data-class="v"] .txt-center{text-align:center}.v[data-class="v"] .txt-right{text-align:right}.v[data-class="v"] .veditor{width:100%;min-height:8.75em;font-size:.875em;background:transparent;resize:vertical;-webkit-transition:all .25s ease;transition:all .25s ease}.v[data-class="v"] .vbtn{-webkit-transition-duration:.4s;transition-duration:.4s;text-align:center;color:#555;border:1px solid #ededed;border-radius:.3em;display:inline-block;background:transparent;margin-bottom:0;font-weight:400;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;white-space:nowrap;padding:.5em 1.25em;font-size:.875em;line-height:1.42857143;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v[data-class="v"] .vbtn+.vbtn{margin-left:1.25em}.v[data-class="v"] .vbtn:active,.v[data-class="v"] .vbtn:hover{color:#3090e4;border-color:#3090e4}.v[data-class="v"] .vbtn:disabled{border-color:#E1E1E1;color:#E1E1E1;background-color:#fdfafa;cursor:not-allowed}.v[data-class="v"] .vempty{padding:1.25em;text-align:center;color:#555;overflow:auto}.v[data-class="v"] .vsys{display:inline-block;padding:.2em .5em;font-size:.75em;border-radius:.2em;margin-right:.3em}@media screen and (max-width: 520px){.v[data-class="v"] .vsys{display:none}}.v[data-class="v"] .vcards{width:100%}.v[data-class="v"] .vcards .vcard{padding-top:1.25em;position:relative;display:block}.v[data-class="v"] .vcards .vcard:after{content:\'\';clear:both;display:block}.v[data-class="v"] .vcards .vcard .vimg{width:3.125em;height:3.125em;float:left;border-radius:50%;margin-right:.7525em;border:1px solid #f5f5f5;padding:.125em}@media screen and (max-width: 720px){.v[data-class="v"] .vcards .vcard .vimg{width:2.5em;height:2.5em}}.v[data-class="v"] .vcards .vcard .vhead{line-height:1.5;margin-top:0}.v[data-class="v"] .vcards .vcard .vhead .vtag{font-size:12px;display:inline-block;line-height:20px;border-radius:2px;color:#fff;padding:0 5px;position:inherit;margin-left:-5px;} .vcards .vcard .vhead .vtag.vmaster{background:#ffa51e} .vcards .vcard .vhead .vtag.vfriend{background:#6cf} .vcards .vcard .vhead .vtag.vvisitor{background:#828282} .vcards .vcard .vhead .browser-icon, .vcards .vcard .vhead .os-icon{margin-right:3px;} .vcards .vcard .vhead .vnick{position:relative;font-size:.875em;font-weight:500;margin-right:.875em;cursor:pointer;text-decoration:none;display:inline-block}.v[data-class="v"] .vcards .vcard .vhead .vnick:hover{color:#D7191A}.v[data-class="v"] .vcards .vcard .vh{overflow:hidden;padding-bottom:.5em;border-bottom:1px dashed #f5f5f5}.v[data-class="v"] .vcards .vcard .vh .vtime{font-size:.75em;margin-right:.875em}.v[data-class="v"] .vcards .vcard .vh .vmeta{line-height:1;position:relative}.v[data-class="v"] .vcards .vcard .vh .vmeta .vat{font-size:.8125em;color:#ef2f11;cursor:pointer;float:right}.v[data-class="v"] .vcards .vcard:last-child .vh{border-bottom:none}.v[data-class="v"] .vcards .vcard .vcontent{word-wrap:break-word;word-break:break-all;font-size:.875em;line-height:2;position:relative;margin-bottom:.75em;padding-top:.625em}.v[data-class="v"] .vcards .vcard .vcontent.expand{cursor:pointer;max-height:8em;overflow:hidden}.v[data-class="v"] .vcards .vcard .vcontent.expand::before{display:block;content:"";position:absolute;width:100%;left:0;top:0;bottom:3.15em;background:-webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0)), to(rgba(255,255,255,0.9)));background:linear-gradient(180deg, rgba(255,255,255,0), rgba(255,255,255,0.9));z-index:999}.v[data-class="v"] .vcards .vcard .vcontent.expand::after{display:block;content:attr(data-expand);text-align:center;color:#828586;position:absolute;width:100%;height:3.15em;line-height:3.15em;left:0;bottom:0;z-index:999;background:rgba(255,255,255,0.9)}.v[data-class="v"] .vcards .vcard .vquote{padding-left:1em;border-left:1px dashed rgba(238,238,238,0.5)}.v[data-class="v"] .vcards .vcard .vquote .vimg{width:2.225em;height:2.225em}.v[data-class="v"] .vpage .vmore{margin:1em 0}.v[data-class="v"] .clear{content:\'\';display:block;clear:both}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes pulse{50%{background:#dcdcdc}}@keyframes pulse{50%{background:#dcdcdc}}.v[data-class="v"] .vspinner{width:22px;height:22px;display:inline-block;border:6px double #a0a0a0;border-top-color:transparent;border-bottom-color:transparent;border-radius:50%;-webkit-animation:spin 1s infinite linear;animation:spin 1s infinite linear;position:relative;vertical-align:middle;margin:0 5px}[data-theme="dark"] .v[data-class="v"] .vinput,[data-theme="dark"] .v[data-class="v"] .veditor,[data-theme="dark"] .v[data-class="v"] p,[data-theme="dark"] .v[data-class="v"] pre code,[data-theme="dark"] .v[data-class="v"] .status-bar,.dark .v[data-class="v"] .vinput,.dark .v[data-class="v"] .veditor,.dark .v[data-class="v"] p,.dark .v[data-class="v"] pre code,.dark .v[data-class="v"] .status-bar,.theme__dark .v[data-class="v"] .vinput,.theme__dark .v[data-class="v"] .veditor,.theme__dark .v[data-class="v"] p,.theme__dark .v[data-class="v"] pre code,.theme__dark .v[data-class="v"] .status-bar,.night .v[data-class="v"] .vinput,.night .v[data-class="v"] .veditor,.night .v[data-class="v"] p,.night .v[data-class="v"] pre code,.night .v[data-class="v"] .status-bar{color:#b2b2b5}[data-theme="dark"] .v[data-class="v"] .vtime,[data-theme="dark"] .v[data-class="v"] .vsys,.dark .v[data-class="v"] .vtime,.dark .v[data-class="v"] .vsys,.theme__dark .v[data-class="v"] .vtime,.theme__dark .v[data-class="v"] .vsys,.night .v[data-class="v"] .vtime,.night .v[data-class="v"] .vsys{color:#929298}[data-theme="dark"] .v[data-class="v"] pre,[data-theme="dark"] .v[data-class="v"] code,[data-theme="dark"] .v[data-class="v"] pre code,.dark .v[data-class="v"] pre,.dark .v[data-class="v"] code,.dark .v[data-class="v"] pre code,.theme__dark .v[data-class="v"] pre,.theme__dark .v[data-class="v"] code,.theme__dark .v[data-class="v"] pre code,.night .v[data-class="v"] pre,.night .v[data-class="v"] code,.night .v[data-class="v"] pre code{color:#929298;background-color:#151414}[data-theme="dark"] .v[data-class="v"] .vwrap,.dark .v[data-class="v"] .vwrap,.theme__dark .v[data-class="v"] .vwrap,.night .v[data-class="v"] .vwrap{border-color:#b2b2b5}[data-theme="dark"] .v[data-class="v"] .vicon,.dark .v[data-class="v"] .vicon,.theme__dark .v[data-class="v"] .vicon,.night .v[data-class="v"] .vicon{fill:#b2b2b5}[data-theme="dark"] .v[data-class="v"] .vicon.actived,.dark .v[data-class="v"] .vicon.actived,.theme__dark .v[data-class="v"] .vicon.actived,.night .v[data-class="v"] .vicon.actived{fill:#66b1ff}[data-theme="dark"] .v[data-class="v"] .vbtn,.dark .v[data-class="v"] .vbtn,.theme__dark .v[data-class="v"] .vbtn,.night .v[data-class="v"] .vbtn{color:#b2b2b5;border-color:#b2b2b5}[data-theme="dark"] .v[data-class="v"] .vbtn:hover,.dark .v[data-class="v"] .vbtn:hover,.theme__dark .v[data-class="v"] .vbtn:hover,.night .v[data-class="v"] .vbtn:hover{color:#66b1ff;border-color:#66b1ff}[data-theme="dark"] .v[data-class="v"] a:hover,.dark .v[data-class="v"] a:hover,.theme__dark .v[data-class="v"] a:hover,.night .v[data-class="v"] a:hover{color:#D7191A}[data-theme="dark"] .v[data-class="v"] .vcards .vcard .vcontent.expand::before,.dark .v[data-class="v"] .vcards .vcard .vcontent.expand::before,.theme__dark .v[data-class="v"] .vcards .vcard .vcontent.expand::before,.night .v[data-class="v"] .vcards .vcard .vcontent.expand::before{background:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.3)), to(rgba(0,0,0,0.7)));background:linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.7))}[data-theme="dark"] .v[data-class="v"] .vcards .vcard .vcontent.expand::after,.dark .v[data-class="v"] .vcards .vcard .vcontent.expand::after,.theme__dark .v[data-class="v"] .vcards .vcard .vcontent.expand::after,.night .v[data-class="v"] .vcards .vcard .vcontent.expand::after{background:rgba(0,0,0,0.7)}@media (prefers-color-scheme: dark){.v[data-class="v"] .vinput,.v[data-class="v"] .veditor,.v[data-class="v"] p,.v[data-class="v"] pre code,.v[data-class="v"] .status-bar{color:#b2b2b5}.v[data-class="v"] .vtime,.v[data-class="v"] .vsys{color:#929298}.v[data-class="v"] pre,.v[data-class="v"] code,.v[data-class="v"] pre code{color:#929298;background-color:#151414}.v[data-class="v"] .vwrap{border-color:#b2b2b5}.v[data-class="v"] .vicon{fill:#b2b2b5}.v[data-class="v"] .vicon.actived{fill:#66b1ff}.v[data-class="v"] .vbtn{color:#b2b2b5;border-color:#b2b2b5}.v[data-class="v"] .vbtn:hover{color:#66b1ff;border-color:#66b1ff}.v[data-class="v"] a:hover{color:#D7191A}.v[data-class="v"] .vcards .vcard .vcontent.expand::before{background:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.3)), to(rgba(0,0,0,0.7)));background:linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.7))}.v[data-class="v"] .vcards .vcard .vcontent.expand::after{background:rgba(0,0,0,0.7)}}\n', "" ]), 
        e.exports = t;
    }, function(e, t, n) {
        "use strict";
        function r(e, t) {
            var n = e[1] || "", r = e[3];
            if (!r) return n;
            if (t && "function" == typeof btoa) {
                var i = o(r);
                return [ n ].concat(r.sources.map(function(e) {
                    return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
                })).concat([ i ]).join("\n");
            }
            return [ n ].join("\n");
        }
        function o(e) {
            return "/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(e))))), " */");
        }
        e.exports = function(e) {
            var t = [];
            return t.toString = function() {
                return this.map(function(t) {
                    var n = r(t, e);
                    return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
                }).join("");
            }, t.i = function(e, n, r) {
                "string" == typeof e && (e = [ [ null, e, "" ] ]);
                var o = {};
                if (r) for (var i = 0; i < this.length; i++) {
                    var a = this[i][0];
                    null != a && (o[a] = !0);
                }
                for (var s = 0; s < e.length; s++) {
                    var l = [].concat(e[s]);
                    r && o[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), 
                    t.push(l));
                }
            }, t;
        };
    }, function(e, t, n) {
        function r(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n], o = h[r.id];
                if (o) {
                    o.refs++;
                    for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
                    for (;i < r.parts.length; i++) o.parts.push(u(r.parts[i], t));
                } else {
                    for (var a = [], i = 0; i < r.parts.length; i++) a.push(u(r.parts[i], t));
                    h[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: a
                    };
                }
            }
        }
        function o(e, t) {
            for (var n = [], r = {}, o = 0; o < e.length; o++) {
                var i = e[o], a = t.base ? i[0] + t.base : i[0], s = i[1], l = i[2], c = i[3], u = {
                    css: s,
                    media: l,
                    sourceMap: c
                };
                r[a] ? r[a].parts.push(u) : n.push(r[a] = {
                    id: a,
                    parts: [ u ]
                });
            }
            return n;
        }
        function i(e, t) {
            var n = g(e.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = b[b.length - 1];
            if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), 
            b.push(t); else {
                if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(t);
            }
        }
        function a(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = b.indexOf(e);
            t >= 0 && b.splice(t, 1);
        }
        function s(e) {
            var t = document.createElement("style");
            return e.attrs.type = "text/css", c(t, e.attrs), i(e, t), t;
        }
        function l(e) {
            var t = document.createElement("link");
            return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", c(t, e.attrs), 
            i(e, t), t;
        }
        function c(e, t) {
            Object.keys(t).forEach(function(n) {
                e.setAttribute(n, t[n]);
            });
        }
        function u(e, t) {
            var n, r, o, i;
            if (t.transform && e.css) {
                if (!(i = t.transform(e.css))) return function() {};
                e.css = i;
            }
            if (t.singleton) {
                var c = y++;
                n = m || (m = s(t)), r = f.bind(null, n, c, !1), o = f.bind(null, n, c, !0);
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t), 
            r = d.bind(null, n, t), o = function() {
                a(n), n.href && URL.revokeObjectURL(n.href);
            }) : (n = s(t), r = p.bind(null, n), o = function() {
                a(n);
            });
            return r(e), function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t);
                } else o();
            };
        }
        function f(e, t, n, r) {
            var o = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = x(t, o); else {
                var i = document.createTextNode(o), a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
            }
        }
        function p(e, t) {
            var n = t.css, r = t.media;
            if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n; else {
                for (;e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
            }
        }
        function d(e, t, n) {
            var r = n.css, o = n.sourceMap, i = void 0 === t.convertToAbsoluteUrls && o;
            (t.convertToAbsoluteUrls || i) && (r = w(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var a = new Blob([ r ], {
                type: "text/css"
            }), s = e.href;
            e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
        }
        var h = {}, v = function(e) {
            var t;
            return function() {
                return void 0 === t && (t = e.apply(this, arguments)), t;
            };
        }(function() {
            return window && document && document.all && !window.atob;
        }), g = function(e) {
            var t = {};
            return function(n) {
                return void 0 === t[n] && (t[n] = e.call(this, n)), t[n];
            };
        }(function(e) {
            return document.querySelector(e);
        }), m = null, y = 0, b = [], w = n(118);
        e.exports = function(e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            t = t || {}, t.attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = v()), 
            t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var n = o(e, t);
            return r(n, t), function(e) {
                for (var i = [], a = 0; a < n.length; a++) {
                    var s = n[a], l = h[s.id];
                    l.refs--, i.push(l);
                }
                if (e) {
                    r(o(e, t), t);
                }
                for (var a = 0; a < i.length; a++) {
                    var l = i[a];
                    if (0 === l.refs) {
                        for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                        delete h[l.id];
                    }
                }
            };
        };
        var x = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n, e.filter(Boolean).join("\n");
            };
        }();
    }, function(e, t) {
        e.exports = function(e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var n = t.protocol + "//" + t.host, r = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
                var o = t.trim().replace(/^"(.*)"$/, function(e, t) {
                    return t;
                }).replace(/^'(.*)'$/, function(e, t) {
                    return t;
                });
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o)) return e;
                var i;
                return i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), 
                "url(" + JSON.stringify(i) + ")";
            });
        };
    }, function(e, t, n) {
        n(114), e.exports = n(38);
    } ]);
});