/*!
 * Valine v1.5.0
 * (c) 2017-2022 xCss
 * Released under the GPL-2.0 License.
 * Last Update: 2022-6-24 5:33:28 ├F10: PM┤
 */
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Valine = t() : e.Valine = t();
}(this, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
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
        }, t.p = "", t(t.s = 108);
    }([ function(e, t, n) {
        "use strict";
        var r = SyntaxError, i = Function, o = TypeError, a = function(e) {
            try {
                return i('"use strict"; return (' + e + ").constructor;")();
            } catch (e) {}
        }, u = Object.getOwnPropertyDescriptor;
        if (u) try {
            u({}, "");
        } catch (e) {
            u = null;
        }
        var s = function() {
            throw new o();
        }, l = u ? function() {
            try {
                return arguments.callee, s;
            } catch (e) {
                try {
                    return u(arguments, "callee").get;
                } catch (e) {
                    return s;
                }
            }
        }() : s, c = n(22)(), f = Object.getPrototypeOf || function(e) {
            return e.__proto__;
        }, p = {}, d = "undefined" == typeof Uint8Array ? void 0 : f(Uint8Array), h = {
            "%AggregateError%": "undefined" == typeof AggregateError ? void 0 : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
            "%ArrayIteratorPrototype%": c ? f([][Symbol.iterator]()) : void 0,
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
            "%Function%": i,
            "%GeneratorFunction%": p,
            "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
            "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
            "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": c ? f(f([][Symbol.iterator]())) : void 0,
            "%JSON%": "object" == typeof JSON ? JSON : void 0,
            "%Map%": "undefined" == typeof Map ? void 0 : Map,
            "%MapIteratorPrototype%": "undefined" != typeof Map && c ? f(new Map()[Symbol.iterator]()) : void 0,
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
            "%SetIteratorPrototype%": "undefined" != typeof Set && c ? f(new Set()[Symbol.iterator]()) : void 0,
            "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": c ? f(""[Symbol.iterator]()) : void 0,
            "%Symbol%": c ? Symbol : void 0,
            "%SyntaxError%": r,
            "%ThrowTypeError%": l,
            "%TypedArray%": d,
            "%TypeError%": o,
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
                var i = e("%AsyncGenerator%");
                i && (n = f(i.prototype));
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
        }, m = n(9), y = n(25), b = m.call(Function.call, Array.prototype.concat), D = m.call(Function.apply, Array.prototype.splice), x = m.call(Function.call, String.prototype.replace), w = m.call(Function.call, String.prototype.slice), A = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, k = /\\(\\)?/g, E = function(e) {
            var t = w(e, 0, 1), n = w(e, -1);
            if ("%" === t && "%" !== n) throw new r("invalid intrinsic syntax, expected closing `%`");
            if ("%" === n && "%" !== t) throw new r("invalid intrinsic syntax, expected opening `%`");
            var i = [];
            return x(e, A, function(e, t, n, r) {
                i[i.length] = n ? x(r, k, "$1") : t || e;
            }), i;
        }, F = function(e, t) {
            var n, i = e;
            if (y(g, i) && (n = g[i], i = "%" + n[0] + "%"), y(h, i)) {
                var a = h[i];
                if (a === p && (a = v(i)), void 0 === a && !t) throw new o("intrinsic " + e + " exists, but is not available. Please file an issue!");
                return {
                    alias: n,
                    name: i,
                    value: a
                };
            }
            throw new r("intrinsic " + e + " does not exist!");
        };
        e.exports = function(e, t) {
            if ("string" != typeof e || 0 === e.length) throw new o("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && "boolean" != typeof t) throw new o('"allowMissing" argument must be a boolean');
            var n = E(e), i = n.length > 0 ? n[0] : "", a = F("%" + i + "%", t), s = a.name, l = a.value, c = !1, f = a.alias;
            f && (i = f[0], D(n, b([ 0, 1 ], f)));
            for (var p = 1, d = !0; p < n.length; p += 1) {
                var v = n[p], g = w(v, 0, 1), m = w(v, -1);
                if (('"' === g || "'" === g || "`" === g || '"' === m || "'" === m || "`" === m) && g !== m) throw new r("property names with quotes must have matching quotes");
                if ("constructor" !== v && d || (c = !0), i += "." + v, s = "%" + i + "%", 
                y(h, s)) l = h[s]; else if (null != l) {
                    if (!(v in l)) {
                        if (!t) throw new o("base intrinsic for " + e + " exists, but the property is not available.");
                        return;
                    }
                    if (u && p + 1 >= n.length) {
                        var x = u(l, v);
                        d = !!x, l = d && "get" in x && !("originalValue" in x.get) ? x.get : l[v];
                    } else d = y(l, v), l = l[v];
                    d && !c && (h[s] = l);
                }
            }
            return l;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), i = n(4), o = i(r("String.prototype.indexOf"));
        e.exports = function(e, t) {
            var n = r(e, !!t);
            return "function" == typeof n && o(e, ".prototype.") > -1 ? i(n) : n;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(88), i = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"), o = Object.prototype.toString, a = Array.prototype.concat, u = Object.defineProperty, s = function(e) {
            return "function" == typeof e && "[object Function]" === o.call(e);
        }, l = u && function() {
            var e = {};
            try {
                u(e, "x", {
                    enumerable: !1,
                    value: e
                });
                for (var t in e) return !1;
                return e.x === e;
            } catch (e) {
                return !1;
            }
        }(), c = function(e, t, n, r) {
            (!(t in e) || s(r) && r()) && (l ? u(e, t, {
                configurable: !0,
                enumerable: !1,
                value: n,
                writable: !0
            }) : e[t] = n);
        }, f = function(e, t) {
            var n = arguments.length > 2 ? arguments[2] : {}, o = r(t);
            i && (o = a.call(o, Object.getOwnPropertySymbols(t)));
            for (var u = 0; u < o.length; u += 1) c(e, o[u], t[o[u]], n[o[u]]);
        };
        f.supportsDescriptors = !!l, e.exports = f;
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        t.__esModule = !0;
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, o = n(85), a = r(o), u = n(49), s = r(u), l = n(46), c = r(l), f = n(48), p = r(f), d = n(45), h = r(d), v = document, g = navigator, m = /[&<>"'`\\]/g, y = RegExp(m.source), b = /&(?:amp|lt|gt|quot|#39|#x60|#x5c);/g, D = RegExp(b.source), x = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#x60;",
            "\\": "&#x5c;"
        }, w = {};
        for (var A in x) w[x[A]] = A;
        var k = null;
        Array.prototype.forEach || (Array.prototype.forEach = function(e, t) {
            var n, r;
            if (null == this) throw new TypeError(" this is null or not defined");
            var i = Object(this), o = i.length >>> 0;
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            for (arguments.length > 1 && (n = t), r = 0; r < o; ) {
                var a;
                r in i && (a = i[r], e.call(n, a, r, i)), r++;
            }
        }), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), 
        String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        }), (0, a.default)(s.default.fn, {
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
                return (0, s.default)(e, this);
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
                return s.default.fn.off(e, t, n), this.forEach(function(r) {
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
                if ("object" == i(arguments[0])) {
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
                    var n, r = 0, i = e && e.match(/[^\x20\t\r\n\f\*\/\\]+/g);
                    if (i && 1 === t.nodeType) for (;n = i[r++]; ) t.removeAttribute(n);
                }), this;
            },
            hasClass: function(e) {
                return !!this[0] && new RegExp("(\\s|^)" + e + "(\\s|$)").test(this[0].getAttribute("class"));
            },
            addClass: function(e) {
                return this.forEach(function(t) {
                    var n = (0, s.default)(t), r = n.attr("class");
                    n.hasClass(e) || n.attr("class", r += " " + e);
                }), this;
            },
            removeClass: function(e) {
                return this.forEach(function(t) {
                    var n = (0, s.default)(t), r = n.attr("class");
                    if (n.hasClass(e)) {
                        var i = new RegExp("(\\s|^)" + e + "(\\s|$)");
                        n.attr("class", r.replace(i, ""));
                    }
                }), this;
            }
        }), (0, a.default)(s.default, {
            extend: a.default,
            noop: function() {},
            navi: g,
            ua: g.userAgent,
            lang: g.language || g.languages[0],
            detect: c.default,
            store: p.default,
            escape: function(e) {
                return e && y.test(e) ? e.replace(m, function(e) {
                    return x[e];
                }) : e;
            },
            unescape: function(e) {
                return e && D.test(e) ? e.replace(b, function(e) {
                    return w[e];
                }) : e;
            },
            dynamicLoadSource: function(e, t) {
                if ((0, s.default)('script[src="' + e + '"]').length) t && t(); else {
                    var n = v.createElement("script");
                    n.onload = n.onreadystatechange = function() {
                        var e = this;
                        e.onload = e.onreadystatechange = null, t && t(), (0, s.default)(n).remove();
                    }, n.async = !0, n.setAttribute("referrerPolicy", "no-referrer");
                    (0, s.default)("head")[0].appendChild(n), n.src = e;
                }
            },
            sdkLoader: function(e, t, n) {
                t in window && window[t] ? (k && clearTimeout(k), n && n()) : s.default.dynamicLoadSource(e, function() {
                    k = setTimeout(s.default.sdkLoader(e, t, n), 100);
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
        }), t.default = s.default;
    }, function(e, t, n) {
        "use strict";
        var r = n(9), i = n(0), o = i("%Function.prototype.apply%"), a = i("%Function.prototype.call%"), u = i("%Reflect.apply%", !0) || r.call(a, o), s = i("%Object.getOwnPropertyDescriptor%", !0), l = i("%Object.defineProperty%", !0), c = i("%Math.max%");
        if (l) try {
            l({}, "a", {
                value: 1
            });
        } catch (e) {
            l = null;
        }
        e.exports = function(e) {
            var t = u(r, a, arguments);
            if (s && l) {
                s(t, "length").configurable && l(t, "length", {
                    value: 1 + c(0, e.length - (arguments.length - 1))
                });
            }
            return t;
        };
        var f = function() {
            return u(r, o, arguments);
        };
        l ? l(e.exports, "apply", {
            value: f
        }) : e.exports.apply = f;
    }, function(e, t, n) {
        "use strict";
        e.exports = n(62);
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
        }, t.VERSION = "1.5.0";
    }, function(e, t, n) {
        function r(e, t) {
            return new o(t).process(e);
        }
        var i = n(16), o = n(50);
        t = e.exports = r, t.FilterCSS = o;
        for (var a in i) t[a] = i[a];
        "undefined" != typeof window && (window.filterCSS = e.exports);
    }, function(e, t, n) {
        "use strict";
        var r = n(66);
        e.exports = function(e) {
            return "symbol" == typeof e ? "Symbol" : "bigint" == typeof e ? "BigInt" : r(e);
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(78);
        e.exports = Function.prototype.bind || r;
    }, function(e, t, n) {
        "use strict";
        var r, i, o = Function.prototype.toString, a = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
        if ("function" == typeof a && "function" == typeof Object.defineProperty) try {
            r = Object.defineProperty({}, "length", {
                get: function() {
                    throw i;
                }
            }), i = {}, a(function() {
                throw 42;
            }, null, r);
        } catch (e) {
            e !== i && (a = null);
        } else a = null;
        var u = /^\s*class\b/, s = function(e) {
            try {
                var t = o.call(e);
                return u.test(t);
            } catch (e) {
                return !1;
            }
        }, l = function(e) {
            try {
                return !s(e) && (o.call(e), !0);
            } catch (e) {
                return !1;
            }
        }, c = Object.prototype.toString, f = "function" == typeof Symbol && !!Symbol.toStringTag, p = "object" == typeof document && void 0 === document.all && void 0 !== document.all ? document.all : {};
        e.exports = a ? function(e) {
            if (e === p) return !0;
            if (!e) return !1;
            if ("function" != typeof e && "object" != typeof e) return !1;
            if ("function" == typeof e && !e.prototype) return !0;
            try {
                a(e, null, r);
            } catch (e) {
                if (e !== i) return !1;
            }
            return !s(e);
        } : function(e) {
            if (e === p) return !0;
            if (!e) return !1;
            if ("function" != typeof e && "object" != typeof e) return !1;
            if ("function" == typeof e && !e.prototype) return !0;
            if (f) return l(e);
            if (s(e)) return !1;
            var t = c.call(e);
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
                var r, i;
                if (Array.prototype.forEach) return e.forEach(t, n);
                for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e);
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
        var r = n(6), i = {
            cdn: r.DEFAULT_EMOJI_CDN,
            maps: n(97),
            parse: function(e, t) {
                return String(e).replace(new RegExp(":(" + Object.keys(i.maps).join("|") + "):", "ig"), function(e, n) {
                    return i.maps[n] ? i.build(n, t) : e;
                });
            },
            build: function(e, t) {
                var n = /^(https?:)?\/\//i, r = i.maps[e], o = n.test(r) ? r : i.cdn + r, a = ' <img alt="' + e + '" referrerpolicy="no-referrer" class="vemoji" src="' + o + '" />';
                return n.test(o) ? a : "";
            }
        };
        t.default = i;
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(95), i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r);
        t.default = function(e) {
            return (0, i.default)(e, {
                onTagAttr: function(e, t, n, r) {
                    return o(e, t, n, r);
                },
                onIgnoreTagAttr: function(e, t, n, r) {
                    return o(e, t, n, r);
                }
            }).replace(/\<\/?div\>/gi, "");
        };
        var o = function(e, t, n, r) {
            if (/video|audio/i.test(e)) return "";
            if (/code|pre|span/i.test(e)) {
                if ("style" == t) {
                    var o = n.match(/color:([#a-z0-9]{3,7}|\s+[#a-z0-9]{3,8})/gi);
                    return o && o.length ? 'style="' + o[0] + '"' : "";
                }
                if ("class" == t) return t + "='" + i.default.escapeAttrValue(n) + "'";
            }
            return "a" === e && "class" == t && "at" === n ? t + "='" + i.default.escapeAttrValue(n) + "'" : "img" === e && /src|class/i.test(t) ? t + "='" + i.default.escapeAttrValue(n) + "' referrerPolicy='no-referrer'" : void 0;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), i = n(1), o = r("%TypeError%"), a = n(52), u = n(18), s = n(53), l = n(55), c = n(56), f = n(60), p = n(20), d = n(81), h = i("String.prototype.split"), v = Object("a"), g = "a" !== v[0] || !(0 in v);
        e.exports = function(e) {
            var t = f(this), n = g && d(this) ? h(this, "") : t, r = c(n);
            if (!l(e)) throw new o("Array.prototype.forEach callback must be a function");
            var i;
            arguments.length > 1 && (i = arguments[1]);
            for (var v = 0; v < r; ) {
                var m = p(v);
                if (s(n, m)) {
                    var y = u(n, m);
                    a(e, i, [ y, v, n ]);
                }
                v += 1;
            }
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(75), i = n(14);
        e.exports = function() {
            var e = Array.prototype.forEach;
            return r(e) ? e : i;
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
        function i(e, t, n) {}
        function o(e, t) {
            return a.test(t) ? "" : t;
        }
        var a = /javascript\s*\:/gim;
        t.whiteList = n(), t.getDefaultWhiteList = n, t.onAttr = r, t.onIgnoreAttr = i, 
        t.safeAttrValue = o;
    }, function(e, t) {
        e.exports = {
            indexOf: function(e, t) {
                var n, r;
                if (Array.prototype.indexOf) return e.indexOf(t);
                for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            },
            forEach: function(e, t, n) {
                var r, i;
                if (Array.prototype.forEach) return e.forEach(t, n);
                for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e);
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
        var r = n(0), i = r("%TypeError%"), o = n(86), a = n(19), u = n(8);
        e.exports = function(e, t) {
            if ("Object" !== u(e)) throw new i("Assertion failed: Type(O) is not Object");
            if (!a(t)) throw new i("Assertion failed: IsPropertyKey(P) is not true, got " + o(t));
            return e[t];
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return "string" == typeof e || "symbol" == typeof e;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("%String%"), o = r("%TypeError%");
        e.exports = function(e) {
            if ("symbol" == typeof e) throw new o("Cannot convert a Symbol value to a string");
            return i(e);
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return null === e || "function" != typeof e && "object" != typeof e;
        };
    }, function(e, t, n) {
        "use strict";
        var r = "undefined" != typeof Symbol && Symbol, i = n(23);
        e.exports = function() {
            return "function" == typeof r && ("function" == typeof Symbol && ("symbol" == typeof r("foo") && ("symbol" == typeof Symbol("bar") && i())));
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
                var i = Object.getOwnPropertyDescriptor(e, t);
                if (42 !== i.value || !0 !== i.enumerable) return !1;
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
        var r = Object.prototype.toString;
        e.exports = function(e) {
            var t = r.call(e), n = "[object Arguments]" === t;
            return n || (n = "[object Array]" !== t && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === r.call(e.callee)), 
            n;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(5), i = n(1), o = i("Object.prototype.propertyIsEnumerable"), a = i("Array.prototype.push");
        e.exports = function(e) {
            var t = r(e), n = [];
            for (var i in t) o(t, i) && a(n, [ i, t[i] ]);
            return n;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(27);
        e.exports = function() {
            return "function" == typeof Object.entries ? Object.entries : r;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(5), i = n(20), o = n(1), a = o("String.prototype.replace"), u = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/, s = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
        e.exports = function() {
            var e = i(r(this));
            return a(a(e, u, ""), s, "");
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(29), i = "​";
        e.exports = function() {
            return String.prototype.trim && i.trim() === i ? String.prototype.trim : r;
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
        function i(e, t, n) {}
        function o(e, t, n) {}
        function a(e, t, n) {}
        function u(e, t, n) {}
        function s(e) {
            return e.replace(E, "&lt;").replace(F, "&gt;");
        }
        function l(e, t, n, r) {
            if (n = v(n), "href" === t || "src" === t) {
                if ("#" === (n = A.trim(n))) return "#";
                if ("http://" !== n.substr(0, 7) && "https://" !== n.substr(0, 8) && "mailto:" !== n.substr(0, 7) && "tel:" !== n.substr(0, 4) && "data:image/" !== n.substr(0, 11) && "ftp://" !== n.substr(0, 6) && "./" !== n.substr(0, 2) && "../" !== n.substr(0, 3) && "#" !== n[0] && "/" !== n[0]) return "";
            } else if ("background" === t) {
                if ($.lastIndex = 0, $.test(n)) return "";
            } else if ("style" === t) {
                if (j.lastIndex = 0, j.test(n)) return "";
                if (T.lastIndex = 0, T.test(n) && ($.lastIndex = 0, $.test(n))) return "";
                !1 !== r && (r = r || k, n = r.process(n));
            }
            return n = g(n);
        }
        function c(e) {
            return e.replace(C, "&quot;");
        }
        function f(e) {
            return e.replace(_, '"');
        }
        function p(e) {
            return e.replace(S, function(e, t) {
                return "x" === t[0] || "X" === t[0] ? String.fromCharCode(parseInt(t.substr(1), 16)) : String.fromCharCode(parseInt(t, 10));
            });
        }
        function d(e) {
            return e.replace(O, ":").replace(B, " ");
        }
        function h(e) {
            for (var t = "", n = 0, r = e.length; n < r; n++) t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
            return A.trim(t);
        }
        function v(e) {
            return e = f(e), e = p(e), e = d(e), e = h(e);
        }
        function g(e) {
            return e = c(e), e = s(e);
        }
        function m() {
            return "";
        }
        function y(e, t) {
            function n(t) {
                return !!r || -1 !== A.indexOf(e, t);
            }
            "function" != typeof t && (t = function() {});
            var r = !Array.isArray(e), i = [], o = !1;
            return {
                onIgnoreTag: function(e, r, a) {
                    if (n(e)) {
                        if (a.isClosing) {
                            var u = "[/removed]", s = a.position + u.length;
                            return i.push([ !1 !== o ? o : a.position, s ]), o = !1, 
                            u;
                        }
                        return o || (o = a.position), "[removed]";
                    }
                    return t(e, r, a);
                },
                remove: function(e) {
                    var t = "", n = 0;
                    return A.forEach(i, function(r) {
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
                var i = e.indexOf("--\x3e", r);
                if (-1 === i) break;
                n = i + 3;
            }
            return t;
        }
        function D(e) {
            var t = e.split("");
            return t = t.filter(function(e) {
                var t = e.charCodeAt(0);
                return 127 !== t && (!(t <= 31) || (10 === t || 13 === t));
            }), t.join("");
        }
        var x = n(7).FilterCSS, w = n(7).getDefaultWhiteList, A = n(11), k = new x(), E = /</g, F = />/g, C = /"/g, _ = /&quot;/g, S = /&#([a-zA-Z0-9]*);?/gim, O = /&colon;?/gim, B = /&newline;?/gim, $ = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi, j = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, T = /u\s*r\s*l\s*\(.*/gi;
        t.whiteList = r(), t.getDefaultWhiteList = r, t.onTag = i, t.onIgnoreTag = o, 
        t.onTagAttr = a, t.onIgnoreTagAttr = u, t.safeAttrValue = l, t.escapeHtml = s, 
        t.escapeQuote = c, t.unescapeQuote = f, t.escapeHtmlEntities = p, t.escapeDangerHtml5Entities = d, 
        t.clearNonPrintableCharacter = h, t.friendlyAttrValue = v, t.escapeAttrValue = g, 
        t.onIgnoreTagStripAll = m, t.StripTagBody = y, t.stripCommentTag = b, t.stripBlankChar = D, 
        t.cssFilter = k, t.getDefaultCSSWhiteList = w;
    }, function(e, t, n) {
        function r(e) {
            var t = f.spaceIndex(e);
            if (-1 === t) var n = e.slice(1, -1); else var n = e.slice(1, t + 1);
            return n = f.trim(n).toLowerCase(), "/" === n.slice(0, 1) && (n = n.slice(1)), 
            "/" === n.slice(-1) && (n = n.slice(0, -1)), n;
        }
        function i(e) {
            return "</" === e.slice(0, 2);
        }
        function o(e, t, n) {
            "use strict";
            var o = "", a = 0, u = !1, s = !1, l = 0, c = e.length, f = "", p = "";
            e: for (l = 0; l < c; l++) {
                var d = e.charAt(l);
                if (!1 === u) {
                    if ("<" === d) {
                        u = l;
                        continue;
                    }
                } else if (!1 === s) {
                    if ("<" === d) {
                        o += n(e.slice(a, l)), u = l, a = l;
                        continue;
                    }
                    if (">" === d) {
                        o += n(e.slice(a, u)), p = e.slice(u, l + 1), f = r(p), 
                        o += t(u, o.length, f, p, i(p)), a = l + 1, u = !1;
                        continue;
                    }
                    if ('"' === d || "'" === d) for (var h = 1, v = e.charAt(l - h); "" === v.trim() || "=" === v; ) {
                        if ("=" === v) {
                            s = d;
                            continue e;
                        }
                        v = e.charAt(l - ++h);
                    }
                } else if (d === s) {
                    s = !1;
                    continue;
                }
            }
            return a < e.length && (o += n(e.substr(a))), o;
        }
        function a(e, t) {
            "use strict";
            function n(e, n) {
                if (e = f.trim(e), e = e.replace(p, "").toLowerCase(), !(e.length < 1)) {
                    var r = t(e, n || "");
                    r && i.push(r);
                }
            }
            for (var r = 0, i = [], o = !1, a = e.length, l = 0; l < a; l++) {
                var d, h, v = e.charAt(l);
                if (!1 !== o || "=" !== v) if (!1 === o || l !== r || '"' !== v && "'" !== v || "=" !== e.charAt(l - 1)) if (/\s|\n|\t/.test(v)) {
                    if (e = e.replace(/\s|\n|\t/g, " "), !1 === o) {
                        if (-1 === (h = u(e, l))) {
                            d = f.trim(e.slice(r, l)), n(d), o = !1, r = l + 1;
                            continue;
                        }
                        l = h - 1;
                        continue;
                    }
                    if (-1 === (h = s(e, l - 1))) {
                        d = f.trim(e.slice(r, l)), d = c(d), n(o, d), o = !1, r = l + 1;
                        continue;
                    }
                } else; else {
                    if (-1 === (h = e.indexOf(v, l + 1))) break;
                    d = f.trim(e.slice(r + 1, h)), n(o, d), o = !1, l = h, r = l + 1;
                } else o = e.slice(r, l), r = l + 1;
            }
            return r < e.length && (!1 === o ? n(e.slice(r)) : n(o, c(f.trim(e.slice(r))))), 
            f.trim(i.join(" "));
        }
        function u(e, t) {
            for (;t < e.length; t++) {
                var n = e[t];
                if (" " !== n) return "=" === n ? t : -1;
            }
        }
        function s(e, t) {
            for (;t > 0; t--) {
                var n = e[t];
                if (" " !== n) return "=" === n ? t : -1;
            }
        }
        function l(e) {
            return '"' === e[0] && '"' === e[e.length - 1] || "'" === e[0] && "'" === e[e.length - 1];
        }
        function c(e) {
            return l(e) ? e.substr(1, e.length - 2) : e;
        }
        var f = n(11), p = /[^a-zA-Z0-9_:\.\-]/gim;
        t.parseTag = o, t.parseAttr = a;
    }, function(e, t, n) {
        var r, i, o;
        /*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/
        !function(n, a) {
            i = [ e, t ], r = a, void 0 !== (o = "function" == typeof r ? r.apply(t, i) : r) && (e.exports = o);
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
                        e.style.height = "", e.style.height = e.scrollHeight + u + "px", 
                        s = e.clientWidth, t.forEach(function(e) {
                            e.node.scrollTop = e.scrollTop;
                        }), r && (document.documentElement.scrollTop = r);
                    }
                }
                function i() {
                    r();
                    var n = Math.round(parseFloat(e.style.height)), i = window.getComputedStyle(e, null), o = "content-box" === i.boxSizing ? Math.round(parseFloat(i.height)) : e.offsetHeight;
                    if (o < n ? "hidden" === i.overflowY && (t("scroll"), r(), o = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== i.overflowY && (t("hidden"), 
                    r(), o = "content-box" === i.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), 
                    l !== o) {
                        l = o;
                        var u = a("autosize:resized");
                        try {
                            e.dispatchEvent(u);
                        } catch (e) {}
                    }
                }
                if (e && e.nodeName && "TEXTAREA" === e.nodeName && !o.has(e)) {
                    var u = null, s = null, l = null, c = function() {
                        e.clientWidth !== s && i();
                    }, f = function(t) {
                        window.removeEventListener("resize", c, !1), e.removeEventListener("input", i, !1), 
                        e.removeEventListener("keyup", i, !1), e.removeEventListener("autosize:destroy", f, !1), 
                        e.removeEventListener("autosize:update", i, !1), Object.keys(t).forEach(function(n) {
                            e.style[n] = t[n];
                        }), o.delete(e);
                    }.bind(e, {
                        height: e.style.height,
                        resize: e.style.resize,
                        overflowY: e.style.overflowY,
                        overflowX: e.style.overflowX,
                        wordWrap: e.style.wordWrap
                    });
                    e.addEventListener("autosize:destroy", f, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", i, !1), 
                    window.addEventListener("resize", c, !1), e.addEventListener("input", i, !1), 
                    e.addEventListener("autosize:update", i, !1), e.style.overflowX = "hidden", 
                    e.style.wordWrap = "break-word", o.set(e, {
                        destroy: f,
                        update: i
                    }), function() {
                        var t = window.getComputedStyle(e, null);
                        "vertical" === t.resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), 
                        u = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), 
                        isNaN(u) && (u = 0), i();
                    }();
                }
            }
            function r(e) {
                var t = o.get(e);
                t && t.destroy();
            }
            function i(e) {
                var t = o.get(e);
                t && t.update();
            }
            var o = "function" == typeof Map ? new Map() : function() {
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
            var u = null;
            "undefined" == typeof window || "function" != typeof window.getComputedStyle ? (u = function(e) {
                return e;
            }, u.destroy = function(e) {
                return e;
            }, u.update = function(e) {
                return e;
            }) : (u = function(e, t) {
                return e && Array.prototype.forEach.call(e.length ? e : [ e ], function(e) {
                    return n(e);
                }), e;
            }, u.destroy = function(e) {
                return e && Array.prototype.forEach.call(e.length ? e : [ e ], r), 
                e;
            }, u.update = function(e) {
                return e && Array.prototype.forEach.call(e.length ? e : [ e ], i), 
                e;
            }), t.default = u, e.exports = t.default;
        });
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e) {
            return !!e && this.init(e), this;
        }
        function o(e) {
            return new i(e);
        }
        var a = n(42), u = r(a), s = n(33), l = r(s), c = n(37), f = r(c), p = n(12), d = r(p), h = n(6), v = n(41), g = r(v), m = n(36), y = r(m), b = n(40), D = n(38), x = r(D), w = n(3), A = r(w), k = n(39), E = r(k), F = n(13), C = r(F), _ = n(35), S = (r(_), 
        {
            comment: "",
            nick: "",
            mail: "",
            link: "",
            ua: A.default.ua,
            url: "",
            QQAvatar: ""
        }), O = "", B = {}, $ = {
            cdn: "https://gravatar.loli.net/avatar/",
            ds: [ "mp", "identicon", "monsterid", "wavatar", "robohash", "retro", "" ],
            params: "",
            hide: !1
        };
        i.prototype.init = function(e) {
            if ("undefined" == typeof document) throw new Error("Sorry, Valine does not support Server-side rendering.");
            var t = this;
            return e && (e = A.default.extend(h.CONFIG, e), t.i18n = (0, f.default)(e.lang || A.default.lang, e.langMode), 
            t.cfg = e, d.default.maps = !!e.emojiMaps && e.emojiMaps || d.default.maps, 
            d.default.cdn = !!e.emojiCDN && e.emojiCDN || d.default.cdn, t._init()), 
            t;
        }, i.prototype._init = function() {
            var e = this;
            try {
                var t = e.cfg, n = t.avatar, r = t.avatarForce, i = t.avatar_cdn, o = t.visitor, a = t.path, u = void 0 === a ? location.pathname : a, s = t.pageSize, l = t.recordIP;
                e.cfg.path = u.replace(/index\.html?$/, "");
                var c = $.ds, f = r ? "&q=" + (0, h.RandomStr)() : "";
                $.params = "?d=" + (c.indexOf(n) > -1 ? n : "mp") + "&v=" + h.VERSION + f, 
                $.hide = "hide" === n, $.cdn = /^https?\:\/\//.test(i) ? i : $.cdn, 
                e.cfg.pageSize = isNaN(s) ? 10 : s < 1 ? 10 : s, l && (0, b.recordIPFn)(function(e) {
                    return S.ip = e;
                });
                var p = e.cfg.el || null, d = (0, A.default)(p);
                if (p = p instanceof HTMLElement ? p : d[d.length - 1] || null) {
                    e.$el = (0, A.default)(p), e.$el.addClass("v").attr("data-class", "v"), 
                    $.hide && e.$el.addClass("hide-avatar"), e.cfg.meta = (e.cfg.guest_info || e.cfg.meta || h.defaultMeta).filter(function(e) {
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
                    var D = e.$el.find(".vload-bottom"), w = e.$el.find(".vload-top");
                    e.$loading = {
                        show: function(t) {
                            return t && w.show() || D.show(), e.$nodata.hide(), 
                            e;
                        },
                        hide: function() {
                            return w.hide(), D.hide(), 0 === e.$el.find(".vcard").length && e.$nodata.show(), 
                            e;
                        }
                    };
                }
                (0, y.default)(e.cfg, function(t) {
                    var n = (0, A.default)(".valine-comment-count"), r = 0;
                    !function t(n) {
                        var i = n[r++];
                        if (i) {
                            var o = (0, A.default)(i).attr("data-xid");
                            !!o && e.Q(o).count().then(function(e) {
                                i.innerText = e, t(n);
                            }).catch(function(e) {
                                i.innerText = 0;
                            });
                        }
                    }(n), o && T.add(AV.Object.extend("Counter"), e.cfg.path), e.$el && e.bind();
                });
            } catch (t) {
                (0, x.default)(e, t, "init");
            }
        };
        var j = function(e, t) {
            var n = new e(), r = new AV.ACL();
            r.setPublicReadAccess(!0), r.setPublicWriteAccess(!0), n.setACL(r), 
            n.set("url", t.url), n.set("xid", t.xid), n.set("title", t.title), n.set("time", 1), 
            n.save().then(function(e) {
                (0, A.default)(t.el).find(".leancloud-visitors-count").text(1);
            }).catch(function(e) {});
        }, T = {
            add: function(e, t) {
                var n = this, r = (0, A.default)(".leancloud_visitors,.leancloud-visitors");
                if (1 === r.length) {
                    var i = r[0], o = decodeURI((0, A.default)(i).attr("id")), a = (0, 
                    A.default)(i).attr("data-flag-title"), u = encodeURI(o), s = {
                        el: i,
                        url: o,
                        xid: u,
                        title: a
                    };
                    if (decodeURI(o) === decodeURI(t)) {
                        var l = new AV.Query(e);
                        l.equalTo("url", o), l.find().then(function(t) {
                            if (t.length > 0) {
                                var n = t[0];
                                n.increment("time"), n.save().then(function(e) {
                                    (0, A.default)(i).find(".leancloud-visitors-count").text(e.get("time"));
                                }).catch(function(e) {});
                            } else j(e, s);
                        }).catch(function(t) {
                            101 == t.code ? j(e, s) : (0, x.default)(n, t);
                        });
                    } else T.show(e, r);
                } else T.show(e, r);
            },
            show: function(e, t) {
                var n = [];
                if (t.forEach(function(e) {
                    var t = (0, A.default)(e).find(".leancloud-visitors-count");
                    t && t.text("0"), n.push(/\%/.test((0, A.default)(e).attr("id")) ? decodeURI((0, 
                    A.default)(e).attr("id")) : (0, A.default)(e).attr("id"));
                }), n.length) {
                    var r = new AV.Query(e);
                    r.containedIn("url", n), r.find().then(function(e) {
                        e.length > 0 && t.forEach(function(t) {
                            e.forEach(function(e) {
                                var n = e.get("xid") || encodeURI(e.get("url")), r = e.get("time"), i = (0, 
                                A.default)(t), o = i.attr("id");
                                if ((/\%/.test(o) ? o : encodeURI(o)) == n) {
                                    var a = i.find(".leancloud-visitors-count");
                                    a && a.text(r);
                                }
                            });
                        });
                    }).catch(function(e) {});
                }
            }
        };
        i.prototype.Q = function(e) {
            var t = this, n = arguments.length, r = t.cfg.clazzName;
            if (1 == n) {
                var i = new AV.Query(r);
                i.doesNotExist("rid");
                var o = new AV.Query(r);
                o.equalTo("rid", "");
                var a = AV.Query.or(i, o);
                return "*" === e ? a.exists("url") : a.equalTo("url", decodeURI(e)), 
                a.addDescending("createdAt"), a.addDescending("insertedAt"), a;
            }
            var u = JSON.stringify(arguments[1]).replace(/(\[|\])/g, ""), s = "select * from " + r + " where rid in (" + u + ") order by -createdAt,-createdAt";
            return AV.Query.doCloudQuery(s);
        }, i.prototype.installLocale = function(e, t) {
            var n = this;
            return n.i18n(e, t), n;
        }, i.prototype.setPath = function(e) {
            return this.config.path = e, this;
        }, i.prototype.bind = function() {
            var e = this, t = e.$el.find(".vemojis"), n = e.$el.find(".vpreview"), r = e.$el.find(".vemoji-btn"), i = e.$el.find(".vpreview-btn"), o = e.$el.find(".veditor"), a = d.default.maps, s = !1, c = function(e) {
                var n = [];
                for (var r in a) a.hasOwnProperty(r) && !!d.default.build(r) && n.push('<i title="' + r + '" >' + d.default.build(r) + "</i>");
                t.html(n.join("")), s = !0, t.find("i").on("click", function(e) {
                    e.preventDefault(), w(o[0], " :" + (0, A.default)(this).attr("title") + ":");
                });
            };
            e.$emoji = {
                show: function() {
                    return !s && c(), e.$preview.hide(), t.show(), r.addClass("actived"), 
                    e.$emoji;
                },
                hide: function() {
                    return r.removeClass("actived"), t.hide(), e.$emoji;
                }
            }, e.$preview = {
                show: function() {
                    return O ? (e.$emoji.hide(), i.addClass("actived"), n.html((0, 
                    E.default)(O)).show(), R()) : e.$preview.hide(), e.$preview;
                },
                hide: function() {
                    return i.removeClass("actived"), n.hide().html(""), e.$preview;
                }
            };
            var f = function(t) {
                var r = t.val() || "";
                r || e.$preview.hide(), O != r && (O = r, i.hasClass("actived") > -1 && O != n.html() && n.html((0, 
                E.default)(O)), R());
            };
            r.on("click", function(t) {
                r.hasClass("actived") ? e.$emoji.hide() : e.$emoji.show();
            }), i.on("click", function(t) {
                i.hasClass("actived") ? e.$preview.hide() : e.$preview.show();
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
                    e.cfg.enableQQ && "blur" === r.type && "nick" === t && (isNaN(n.val()) ? A.default.store.get(h.QQCacheKey) && A.default.store.get(h.QQCacheKey).nick != n.val() && (A.default.store.remove(h.QQCacheKey), 
                    S.nick = n.val(), S.mail = "", S.QQAvatar = "") : (0, b.fetchQQFn)(n.val(), function(e) {
                        var t = e.nick || n.val(), r = e.qq + "@qq.com";
                        (0, A.default)(".vnick").val(t), (0, A.default)(".vmail").val(r), 
                        S.nick = t, S.mail = r, S.QQAvatar = e.pic;
                    })), "comment" === t ? ((0, l.default)(n[0]), D(function(e) {
                        f(n);
                    })()) : S[t] = A.default.escape(n.val().replace(/(^\s*)|(\s*$)/g, "")).substring(0, 20);
                });
            }();
            var D = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300, n = void 0;
                return function() {
                    var r = this, i = arguments;
                    n && clearTimeout(n), n = setTimeout(function() {
                        e.apply(r, i);
                    }, t);
                };
            }, w = function(e, t) {
                if (document.selection) {
                    e.focus();
                    document.selection.createRange().text = t, e.focus();
                } else if (e.selectionStart || "0" == e.selectionStart) {
                    var n = e.selectionStart, r = e.selectionEnd, i = e.scrollTop;
                    e.value = e.value.substring(0, n) + t + e.value.substring(r, e.value.length), 
                    e.focus(), e.selectionStart = n + t.length, e.selectionEnd = n + t.length, 
                    e.scrollTop = i;
                } else e.focus(), e.value += t;
                D(function(t) {
                    f((0, A.default)(e));
                })();
            }, k = {
                no: 1,
                size: e.cfg.pageSize,
                skip: e.cfg.pageSize
            }, F = e.$el.find(".vpage");
            F.on("click", function(e) {
                F.hide(), k.no++, _();
            });
            var _ = function() {
                var t = k.size, n = k.no, r = Number(e.$el.find(".vnum").text());
                e.$loading.show();
                var i = e.Q(e.cfg.path);
                i.limit(t), i.skip((n - 1) * t), i.find().then(function(i) {
                    if (k.skip = k.size, i && i.length) {
                        var o = [];
                        i.forEach(function(t) {
                            o.push(t.id), T(t, e.$el.find(".vcards"), !0);
                        }), e.Q(e.cfg.path, o).then(function(e) {
                            (e && e.results || []).forEach(function(e) {
                                T(e, (0, A.default)('.vquote[data-self-id="' + e.get("rid") + '"]'));
                            });
                        }).catch(function(e) {}), t * n < r ? F.show() : F.hide(), 
                        R();
                    } else e.$nodata.show();
                    e.$loading.hide();
                }).catch(function(t) {
                    e.$loading.hide(), (0, x.default)(e, t, "query");
                });
            };
            e.Q(e.cfg.path).count().then(function(t) {
                t > 0 ? (e.$el.find(".vcount").show().find(".vnum").text(t), _()) : e.$loading.hide();
            }).catch(function(t) {
                (0, x.default)(e, t, "count");
            });
            var j = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = /(https?|http):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g, n = e.match(t) || [];
                return n.length > 0 ? n[0] : "";
            }, T = function(t, n, r) {
                var i = (0, A.default)('<div class="vcard" id="' + t.id + '"></div>'), o = (0, 
                C.default)(t.get("ua")), a = "";
                o && !/ja/.test(e.cfg.lang) && (o = A.default.detect(o), a = o.version ? o.os ? '<span class="vsys"><i class="browser-icon fab fa-' + ([ "xiaomi" ].includes(o.browser.toLowerCase()) ? "mobile-alt fas" : o.browser.toLowerCase()) + '"></i>' + o.browser + " " + o.version + '</span> <span class="vsys"><i class="os-icon fab fa-' + ([ "mac os", "ios" ].includes(o.os.toLowerCase()) ? "apple" : o.os.toLowerCase()) + '"></i>' + o.os + " " + o.osVersion + "</span>" : "" : '<span class="vsys">' + o.browser + "</span>"), 
                "*" === e.cfg.path && (a = '<a href="' + t.get("url") + '" class="vsys">' + t.get("url") + "</a>");
var ism = e.cfg.master.includes((0, s.default)(t.get("mail"))), isf = e.cfg.friends.includes((0, s.default)(t.get("mail").toLowerCase())), gat = ism ? '<span class="vtag vmaster">' + e.cfg.tagMeta[0] + "</span>" : isf ? '<span class="vtag vfriend">' + e.cfg.tagMeta[1] + "</span>" : '<span class="vtag vvisitor">' + e.cfg.tagMeta[2] + "</span>";
                var s = t.get("link") ? /^https?\:\/\//.test(t.get("link")) ? t.get("link") : "http://" + t.get("link") : "", l = A.default.escape((0, 
                C.default)(t.get("nick").substring(0, 20))), c = s ? '<a class="vnick" rel="nofollow" href="' + j(s) + '" target="_blank" >' + l + "</a>" + gat : '<span class="vnick">' + l + "</span>" + gat, f = $.hide ? "" : e.cfg.enableQQ && t.get("QQAvatar") ? (0, 
                C.default)('<img class="vimg" src="' + j(t.get("QQAvatar")) + '" referrerPolicy="no-referrer"/>') : '<img class="vimg" src="' + ($.cdn + (0, 
                u.default)(t.get("mail")) + $.params) + '">', p = f + '<div class="vh"><div class="vhead">' + c + " " + a + '</div><div class="vmeta"><span class="vtime" >' + (0, 
                g.default)(t.get("insertedAt"), e.i18n) + '</span><span class="vat" data-vm-id="' + (t.get("rid") || t.id) + '" data-self-id="' + t.id + '">' + e.i18n.t("reply") + '</span></div><div class="vcontent" data-expand="' + e.i18n.t("expand") + '">' + (0, 
                E.default)(t.get("comment")) + '</div><div class="vreply-wrapper" data-self-id="' + t.id + '"></div><div class="vquote" data-self-id="' + t.id + '"></div></div>';
                i.html(p);
                var d = i.find(".vat");
                i.find("a:not(.at)").forEach(function(e) {
                    (0, A.default)(e).attr({
                        target: "_blank",
                        rel: "noopener"
                    });
                }), r ? n.append(i) : n.prepend(i);
                var h = i.find(".vcontent");
                h && P(h), d && z(d, t);
            }, I = {}, z = function(t, n) {
                t.on("click", function(r) {
                    var i = t.attr("data-vm-id"), o = t.attr("data-self-id"), a = e.$el.find(".vwrap"), u = "@" + A.default.escape(n.get("nick"));
                    (0, A.default)('.vreply-wrapper[data-self-id="' + o + '"]').append(a).find(".cancel-reply").show(), 
                    I = {
                        at: A.default.escape(u) + " ",
                        rid: i,
                        pid: o,
                        rmail: n.get("mail")
                    }, v.comment.attr({
                        placeholder: u
                    })[0].focus();
                });
            }, R = function() {
                setTimeout(function() {
                    try {
                        e.cfg.mathjax && "MathJax" in window && "version" in window.MathJax && (/^3.*/.test(window.MathJax.version) && MathJax.typeset() || MathJax.Hub.Queue([ "Typeset", MathJax.Hub, document.querySelector(".v") ])), 
                        "renderMathInElement" in window && renderMathInElement((0, 
                        A.default)(".v")[0], {
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
            }, P = function(e) {
                setTimeout(function() {
                    e[0].offsetHeight > 200 && (e.addClass("expand"), e.on("click", function(t) {
                        e.removeClass("expand");
                    }));
                });
            };
            !function(t) {
                if (t = A.default.store.get(h.MetaCacheKey) || t) for (var n in p) if (p.hasOwnProperty(n)) {
                    var r = p[n];
                    e.$el.find(".v" + r).val(A.default.unescape(t[r])), S[r] = t[r];
                }
                var i = A.default.store.get(h.QQCacheKey);
                S.QQAvatar = e.cfg.enableQQ && !!i && i.pic || "";
            }(), e.reset = function() {
                S.comment = "", v.comment.val(""), f(v.comment), v.comment.attr("placeholder", e.cfg.placeholder), 
                I = {}, e.$preview.hide(), e.$el.find(".vpanel").append(e.$el.find(".vwrap")), 
                e.$el.find(".cancel-reply").hide(), O = "", l.default.update(v.comment[0]);
            };
            var M = e.$el.find(".vsubmit"), L = function(t) {
                if (e.cfg.requiredFields.indexOf("nick") > -1 && S.nick.length < 3) return v.nick[0].focus(), 
                void e.$el.find(".status-bar").text("" + e.i18n.t("nickFail")).empty(3e3);
                if (e.cfg.requiredFields.indexOf("mail") > -1 && !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(S.mail)) return v.mail[0].focus(), 
                void e.$el.find(".status-bar").text("" + e.i18n.t("mailFail")).empty(3e3);
                if ("" == O) return void v.comment[0].focus();
                for (var n in B) if (B.hasOwnProperty(n)) {
                    var r = B[n];
                    O = O.replace(n, r), URL.revokeObjectURL(n);
                }
                B = {}, S.comment = (0, C.default)(O), S.nick = S.nick || "Anonymous";
                var i = A.default.store.get("vlx");
                if (i) {
                    if (Date.now() / 1e3 - i / 1e3 < 20) return void e.$el.find(".status-bar").text(e.i18n.t("busy")).empty(3e3);
                }
                U();
            }, N = function() {
                var e = new AV.ACL();
                return e.setPublicReadAccess(!0), e.setPublicWriteAccess(!1), e;
            }, U = function() {
                A.default.store.set("vlx", Date.now()), M.attr({
                    disabled: !0
                }), e.$loading.show(!0);
                var t = AV.Object.extend(e.cfg.clazzName || "Comment"), n = new t();
                if (S.url = decodeURI(e.cfg.path), S.insertedAt = new Date(), I.rid) {
                    var r = I.pid || I.rid;
                    n.set("rid", I.rid), n.set("pid", r), S.comment = O.replace("<p>", '<p><a class="at" href="#' + r + '">' + I.at + "</a> , ");
                }
                for (var i in S) if (S.hasOwnProperty(i)) {
                    var o = S[i];
                    n.set(i, o);
                }
                n.setACL(N()), n.save().then(function(t) {
                    "Anonymous" != S.nick && A.default.store.set(h.MetaCacheKey, {
                        nick: S.nick,
                        link: S.link,
                        mail: S.mail
                    });
                    var n = e.$el.find(".vnum");
                    try {
                        I.rid ? T(t, (0, A.default)('.vquote[data-self-id="' + I.rid + '"]'), !0) : (Number(n.text()) ? n.text(Number(n.text()) + 1) : e.$el.find(".vcount").show().find(".vnum").text(Number(n.text()) + 1), 
                        T(t, e.$el.find(".vcards")), k.skip++), M.removeAttr("disabled"), 
                        e.$loading.hide(), e.reset();
                    } catch (t) {
                        (0, x.default)(e, t, "save");
                    }
                }).catch(function(t) {
                    (0, x.default)(e, t, "commitEvt");
                });
            };
            M.on("click", L), (0, A.default)(document).on("keydown", function(e) {
                var t = e.keyCode || e.which || e.charCode;
                ((e.ctrlKey || e.metaKey) && 13 === t && L(), 9 === t) && ("veditor" == (document.activeElement.id || "") && (e.preventDefault(), 
                w(o[0], "    ")));
            }).on("paste", function(e) {
                var t = "clipboardData" in e ? e.clipboardData : e.originalEvent && e.originalEvent.clipboardData || window.clipboardData;
                t && Q(t.items, !0);
            }), o.on("dragenter dragleave dragover drop", function(e) {
                e.stopPropagation(), e.preventDefault(), "drop" === e.type && Q(e.dataTransfer.items);
            });
            var Q = function(e, t) {
                for (var n = [], r = 0, i = e.length; r < i; r++) {
                    var a = e[r];
                    if ("string" === a.kind && a.type.match("^text/html")) !t && a.getAsString(function(e) {
                        e && w(o[0], e.replace(/<[^>]+>/g, ""));
                    }); else if (-1 !== a.type.indexOf("image")) {
                        n.push(a.getAsFile());
                        continue;
                    }
                }
                q(n);
            }, q = function(e, t) {
                if (t = t || 0, e.length > 0) try {
                    var n = e[t], r = URL.createObjectURL(n), i = "![" + n.name + "](" + r + ")";
                    w(o[0], i);
                    var a = new FileReader();
                    a.onload = function() {
                        B[r] = a.result;
                    }, a.readAsDataURL(n);
                } catch (e) {}
            };
        }, e.exports = o, e.exports.default = o;
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(3), i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r), o = function(e, t) {
            i.default.ajax({
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
            getApi: o
        };
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(3), i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r), o = !1;
        t.default = function(e, t) {
            if ("AV" in window) {
                var n = window.AV.version || window.AV.VERSION;
                parseInt(n.split(".")[0]) > 2 ? o = !!AV.applicationId && !!AV.applicationKey : i.default.deleteInWin("AV", 0);
            }
            o ? t && t() : i.default.sdkLoader("//unpkg.com/leancloud-storage@3/dist/av-min.js", "AV", function(n) {
                var r = "https://", i = "", a = e.app_id || e.appId, u = e.app_key || e.appKey;
                if (!e.serverURLs) switch (a.slice(-9)) {
                  case "-9Nh9j0Va":
                    r += "tab.";
                    break;

                  case "-MdYXbMMI":
                    r += "us.";
                }
                i = e.serverURLs || r + "leancloud.cn", AV.init({
                    appId: a,
                    appKey: u,
                    serverURLs: i
                }), o = !0, t && t();
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
        var i = n(84), o = r(i), a = n(100), u = r(a), s = n(101), l = r(s), c = n(98), f = r(c), p = n(99), d = r(p), h = {
            zh: u.default,
            "zh-cn": u.default,
            "zh-CN": u.default,
            "zh-TW": l.default,
            en: f.default,
            "en-US": f.default,
            ja: d.default,
            "ja-JP": d.default
        };
        t.default = function(e, t) {
            return !h[e] && e && t && (h[e] = t), new o.default({
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
                    var r = e.i18n.t("code-" + n), i = (r == "code-" + n ? void 0 : r) || t.message || t.error || "";
                    101 == n || -1 == n ? e.$nodata.show() : e.$el && e.$nodata.show('<pre style="text-align:left;">Code ' + n + ": " + i + "</pre>");
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
        var i = n(83), o = n(79), a = r(o), u = n(3), s = r(u), l = n(12), c = r(l), f = n(13), p = r(f), d = new i.marked.Renderer();
        d.code = function(e, t) {
            return '<pre><code class="hljs language-' + t + '">' + (t && hljs.getLanguage(t) ? hljs.highlight(t, e).value : s.default.escape(e)) + "</code></pre>";
        }, i.marked.setOptions({
            renderer: "hljs" in window ? d : new i.marked.Renderer(),
            highlight: function(e, t) {
                return "hljs" in window ? t && hljs.getLanguage(t) && hljs.highlight(t, e, !0).value || hljs.highlightAuto(e).value : (0, 
                a.default)(e);
            },
            gfm: !0,
            tables: !0,
            breaks: !0,
            pedantic: !1,
            sanitize: !1,
            smartLists: !0,
            smartypants: !0,
            headerPrefix: "v-"
        }), t.default = function(e) {
            return (0, p.default)((0, i.marked)(c.default.parse(e, !0)));
        };
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0, t.recordIPFn = t.fetchQQFn = void 0;
        var r = n(3), i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r), o = n(6), a = function(e, t) {
            var n = i.default.store.get(o.QQCacheKey);
            n && n.qq == e ? t && t(n) : i.default.ajax({
                url: "//valine.api.ioliu.cn/getqqinfo",
                method: "POST",
                body: {
                    qq: e
                }
            }).then(function(e) {
                e.json().then(function(e) {
                    e.errmsg || (i.default.store.set(o.QQCacheKey, e), t && t(e));
                });
            });
        }, u = function(e) {
            i.default.ajax({
                url: "//api.ip.sb/jsonip",
                method: "jsonp"
            }).then(function(t) {
                e(t.ip);
            });
        };
        t.fetchQQFn = a, t.recordIPFn = u;
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0, t.default = function(e, t) {
            if (!e) return "";
            try {
                var n = i(e).getTime();
                if (isNaN(n)) return "Time format error.";
                var o = new Date().getTime(), a = o - n, u = Math.floor(a / 864e5);
                if (0 === u) {
                    var s = a % 864e5, l = Math.floor(s / 36e5);
                    if (0 === l) {
                        var c = s % 36e5, f = Math.floor(c / 6e4);
                        if (0 === f) {
                            var p = c % 6e4;
                            return Math.round(p / 1e3) + " " + t.t("seconds");
                        }
                        return f + " " + t.t("minutes");
                    }
                    return l + " " + t.t("hours");
                }
                return u < 0 ? t.t("now") : u < 8 ? u + " " + t.t("days") : r(e);
            } catch (e) {}
        };
        var r = function(e) {
            var t = o(e.getDate(), 2), n = o(e.getMonth() + 1, 2);
            return o(e.getFullYear(), 2) + "-" + n + "-" + t;
        }, i = function e(t) {
            return t instanceof Date ? t : !isNaN(t) || /^\d+$/.test(t) ? new Date(parseInt(t)) : /GMT/.test(t || "") ? e(new Date(t).getTime()) : (t = (t || "").replace(/(^\s*)|(\s*$)/g, "").replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([+-]\d\d):?(\d\d)/, " $1$2"), 
            new Date(t));
        }, o = function(e, t) {
            for (var n = e.toString(); n.length < t; ) n = "0" + n;
            return n;
        };
    }, function(e, t, n) {
        var r;
        !function(i) {
            "use strict";
            function o(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
            }
            function a(e, t) {
                return e << t | e >>> 32 - t;
            }
            function u(e, t, n, r, i, u) {
                return o(a(o(o(t, e), o(r, u)), i), n);
            }
            function s(e, t, n, r, i, o, a) {
                return u(t & n | ~t & r, e, t, i, o, a);
            }
            function l(e, t, n, r, i, o, a) {
                return u(t & r | n & ~r, e, t, i, o, a);
            }
            function c(e, t, n, r, i, o, a) {
                return u(t ^ n ^ r, e, t, i, o, a);
            }
            function f(e, t, n, r, i, o, a) {
                return u(n ^ (t | ~r), e, t, i, o, a);
            }
            function p(e, t) {
                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                var n, r, i, a, u, p = 1732584193, d = -271733879, h = -1732584194, v = 271733878;
                for (n = 0; n < e.length; n += 16) r = p, i = d, a = h, u = v, p = s(p, d, h, v, e[n], 7, -680876936), 
                v = s(v, p, d, h, e[n + 1], 12, -389564586), h = s(h, v, p, d, e[n + 2], 17, 606105819), 
                d = s(d, h, v, p, e[n + 3], 22, -1044525330), p = s(p, d, h, v, e[n + 4], 7, -176418897), 
                v = s(v, p, d, h, e[n + 5], 12, 1200080426), h = s(h, v, p, d, e[n + 6], 17, -1473231341), 
                d = s(d, h, v, p, e[n + 7], 22, -45705983), p = s(p, d, h, v, e[n + 8], 7, 1770035416), 
                v = s(v, p, d, h, e[n + 9], 12, -1958414417), h = s(h, v, p, d, e[n + 10], 17, -42063), 
                d = s(d, h, v, p, e[n + 11], 22, -1990404162), p = s(p, d, h, v, e[n + 12], 7, 1804603682), 
                v = s(v, p, d, h, e[n + 13], 12, -40341101), h = s(h, v, p, d, e[n + 14], 17, -1502002290), 
                d = s(d, h, v, p, e[n + 15], 22, 1236535329), p = l(p, d, h, v, e[n + 1], 5, -165796510), 
                v = l(v, p, d, h, e[n + 6], 9, -1069501632), h = l(h, v, p, d, e[n + 11], 14, 643717713), 
                d = l(d, h, v, p, e[n], 20, -373897302), p = l(p, d, h, v, e[n + 5], 5, -701558691), 
                v = l(v, p, d, h, e[n + 10], 9, 38016083), h = l(h, v, p, d, e[n + 15], 14, -660478335), 
                d = l(d, h, v, p, e[n + 4], 20, -405537848), p = l(p, d, h, v, e[n + 9], 5, 568446438), 
                v = l(v, p, d, h, e[n + 14], 9, -1019803690), h = l(h, v, p, d, e[n + 3], 14, -187363961), 
                d = l(d, h, v, p, e[n + 8], 20, 1163531501), p = l(p, d, h, v, e[n + 13], 5, -1444681467), 
                v = l(v, p, d, h, e[n + 2], 9, -51403784), h = l(h, v, p, d, e[n + 7], 14, 1735328473), 
                d = l(d, h, v, p, e[n + 12], 20, -1926607734), p = c(p, d, h, v, e[n + 5], 4, -378558), 
                v = c(v, p, d, h, e[n + 8], 11, -2022574463), h = c(h, v, p, d, e[n + 11], 16, 1839030562), 
                d = c(d, h, v, p, e[n + 14], 23, -35309556), p = c(p, d, h, v, e[n + 1], 4, -1530992060), 
                v = c(v, p, d, h, e[n + 4], 11, 1272893353), h = c(h, v, p, d, e[n + 7], 16, -155497632), 
                d = c(d, h, v, p, e[n + 10], 23, -1094730640), p = c(p, d, h, v, e[n + 13], 4, 681279174), 
                v = c(v, p, d, h, e[n], 11, -358537222), h = c(h, v, p, d, e[n + 3], 16, -722521979), 
                d = c(d, h, v, p, e[n + 6], 23, 76029189), p = c(p, d, h, v, e[n + 9], 4, -640364487), 
                v = c(v, p, d, h, e[n + 12], 11, -421815835), h = c(h, v, p, d, e[n + 15], 16, 530742520), 
                d = c(d, h, v, p, e[n + 2], 23, -995338651), p = f(p, d, h, v, e[n], 6, -198630844), 
                v = f(v, p, d, h, e[n + 7], 10, 1126891415), h = f(h, v, p, d, e[n + 14], 15, -1416354905), 
                d = f(d, h, v, p, e[n + 5], 21, -57434055), p = f(p, d, h, v, e[n + 12], 6, 1700485571), 
                v = f(v, p, d, h, e[n + 3], 10, -1894986606), h = f(h, v, p, d, e[n + 10], 15, -1051523), 
                d = f(d, h, v, p, e[n + 1], 21, -2054922799), p = f(p, d, h, v, e[n + 8], 6, 1873313359), 
                v = f(v, p, d, h, e[n + 15], 10, -30611744), h = f(h, v, p, d, e[n + 6], 15, -1560198380), 
                d = f(d, h, v, p, e[n + 13], 21, 1309151649), p = f(p, d, h, v, e[n + 4], 6, -145523070), 
                v = f(v, p, d, h, e[n + 11], 10, -1120210379), h = f(h, v, p, d, e[n + 2], 15, 718787259), 
                d = f(d, h, v, p, e[n + 9], 21, -343485551), p = o(p, r), d = o(d, i), 
                h = o(h, a), v = o(v, u);
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
                var n, r, i = h(e), o = [], a = [];
                for (o[15] = a[15] = void 0, i.length > 16 && (i = p(i, 8 * e.length)), 
                n = 0; n < 16; n += 1) o[n] = 909522486 ^ i[n], a[n] = 1549556828 ^ i[n];
                return r = p(o.concat(h(t)), 512 + 8 * t.length), d(p(a.concat(r), 640));
            }
            function m(e) {
                var t, n, r = "0123456789abcdef", i = "";
                for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
                return i;
            }
            function y(e) {
                return unescape(encodeURIComponent(e));
            }
            function b(e) {
                return v(y(e));
            }
            function D(e) {
                return m(b(e));
            }
            function x(e, t) {
                return g(y(e), y(t));
            }
            function w(e, t) {
                return m(x(e, t));
            }
            function A(e, t, n) {
                return t ? n ? x(t, e) : w(t, e) : n ? b(e) : D(e);
            }
            void 0 !== (r = function() {
                return A;
            }.call(t, n, t, e)) && (e.exports = r);
        }();
    }, function(e, t, n) {
        "use strict";
        var r = n(2), i = n(4), o = n(1), a = n(5), u = n(14), s = n(15), l = s(), c = n(44), f = o("Array.prototype.slice"), p = i.apply(l), d = function(e, t) {
            return a(e), p(e, f(arguments, 1));
        };
        r(d, {
            getPolyfill: s,
            implementation: u,
            shim: c
        }), e.exports = d;
    }, function(e, t, n) {
        "use strict";
        var r = n(2), i = n(15);
        e.exports = function() {
            var e = i();
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
        t.__esModule = !0;
        var r = n(47), i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(r);
        t.default = function(e) {
            return e = (0, i.default)({
                url: "",
                method: "get",
                body: {}
            }, e), new Promise(function(t, n) {
                if ("jsonp" == e.method) {
                    var r = "cb_" + (Date.now() + Math.round(1e3 * Math.random())).toString(32), i = document, o = i.body, u = i.createElement("script");
                    return e.body.callback = r, e.body.t = Date.now(), u.src = e.url + "?" + a(e.body), 
                    window[r] = function(e) {
                        window[r] = null, o.removeChild(u), t(e);
                    }, void o.appendChild(u);
                }
                var s = "XMLHttpRequest" in window ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"), l = [], c = [], f = {}, p = function e() {
                    return {
                        ok: 2 == (s.status / 100 | 0),
                        statusText: s.statusText,
                        status: s.status,
                        url: s.responseURL,
                        text: function() {
                            return Promise.resolve(s.responseText);
                        },
                        json: function() {
                            return Promise.resolve(s.responseText).then(JSON.parse);
                        },
                        blob: function() {
                            return Promise.resolve(new Blob([ s.response ]));
                        },
                        clone: e,
                        headers: {
                            keys: function() {
                                return l;
                            },
                            entries: function() {
                                return c;
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
                e.url = e.url + "?" + ("get" == e.method ? a(e.body) : ""), s.open(e.method || "get", e.url, !0), 
                s.onload = function() {
                    s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e, t, n) {
                        l.push(t = t.toLowerCase()), c.push([ t, n ]), f[t] = f[t] ? f[t] + "," + n : n;
                    }), t(p());
                }, s.onerror = n, s.withCredentials = "include" == e.credentials;
                for (var d in e.headers) s.setRequestHeader(d, e.headers[d]);
                s.send("post" == e.method ? e.body : "get" == e.method ? null : a(e.body));
            });
        };
        var o = encodeURIComponent, a = function(e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push(o(n) + "=" + o(e[n]));
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
            for (var i in r) if (r.hasOwnProperty(i)) for (var o = 0, a = r[i].length; o < a; o++) {
                var u = r[i][o];
                n[u] && (t[i] = u);
            }
            var s = {
                Windows: function() {
                    return {
                        "10.0": "11",
                        6.4: "10",
                        6.3: "8.1",
                        6.2: "8",
                        6.1: "7",
                        "6.0": "Vista",
                        5.2: "XP",
                        5.1: "XP",
                        "5.0": "2000"
                    }[e.replace(/^.*Windows NT ([\d.]+).*$/, "$1")];
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
            var l = s[t.os];
            l && (t.osVersion = "function" == typeof l ? l() : l == e ? "" : l);
            var c = {
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
            var f = c[t.browser];
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
                if (r) for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        };
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            return /^\{[\s\S]*\}$/.test(JSON.stringify(e));
        }
        function i(e) {
            return "[object Function]" === {}.toString.call(e);
        }
        function o(e) {
            return "[object Array]" === {}.toString.call(e);
        }
        function a(e) {
            return void 0 === e || "function" == typeof e ? e + "" : JSON.stringify(e);
        }
        function u(e) {
            if ("string" == typeof e) try {
                return JSON.parse(e);
            } catch (t) {
                return e;
            }
        }
        function s() {
            if (!(this instanceof s)) return new s();
        }
        function l(e, t) {
            var n = arguments, a = null;
            if (f || (f = s()), 0 === n.length) return f.get();
            if (1 === n.length) {
                if ("string" == typeof e) return f.get(e);
                if (r(e)) return f.set(e);
            }
            if (2 === n.length && "string" == typeof e) {
                if (!t) return f.remove(e);
                if (t && "string" == typeof t) return f.set(e, t);
                t && i(t) && (a = null, a = t(e, f.get(e)), l.set(e, a));
            }
            if (2 === n.length && o(e) && i(t)) for (var u = 0, c = e.length; u < c; u++) a = t(e[u], f.get(e[u])), 
            l.set(e[u], a);
            return l;
        }
        t.__esModule = !0;
        var c = window.localStorage;
        c = function(e) {
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
        }(c), s.prototype = {
            set: function(e, t) {
                if (e && !r(e)) c.setItem(e, a(t)); else if (r(e)) for (var n in e) this.set(n, e[n]);
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
                    for (var r = {}, i = 0, o = n.length; i < o; i++) {
                        var a = u(c.getItem(n[i]));
                        a && (r[n[i]] = a);
                    }
                    return r;
                }
                return u(c.getItem(e));
            },
            clear: function() {
                return c.clear(), this;
            },
            remove: function(e) {
                var t = this.get(e);
                return c.removeItem(e), t;
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
                for (var t = 0, n = c.length; t < n; t++) {
                    var r = c.key(t);
                    e(r, this.get(r));
                }
                return this;
            },
            search: function(e) {
                for (var t = this.keys(), n = {}, r = 0, i = t.length; r < i; r++) t[r].indexOf(e) > -1 && (n[t[r]] = this.get(t[r]));
                return n;
            }
        };
        var f = null;
        for (var p in s.prototype) l[p] = s.prototype[p];
        t.default = l;
    }, function(e, t, n) {
        var r, i;
        !function(n, o) {
            var o = function(e, t, n) {
                function r(i, o, a) {
                    return a = Object.create(r.fn), i && a.push.apply(a, i[t] ? [ i ] : "" + i === i ? /</.test(i) ? ((o = e.createElement(o)).innerHTML = i, 
                    o.children) : o ? (o = r(o)[0]) ? o[n](i) : a : e[n](i) : i), 
                    a;
                }
                return r.fn = [], r.one = function(e, t) {
                    return r(e, t)[0] || null;
                }, r;
            }(document, "addEventListener", "querySelectorAll");
            r = [], void 0 !== (i = function() {
                return o;
            }.apply(t, r)) && (e.exports = i);
        }();
    }, function(e, t, n) {
        function r(e) {
            return void 0 === e || null === e;
        }
        function i(e) {
            var t = {};
            for (var n in e) t[n] = e[n];
            return t;
        }
        function o(e) {
            e = i(e || {}), e.whiteList = e.whiteList || a.whiteList, e.onAttr = e.onAttr || a.onAttr, 
            e.onIgnoreAttr = e.onIgnoreAttr || a.onIgnoreAttr, e.safeAttrValue = e.safeAttrValue || a.safeAttrValue, 
            this.options = e;
        }
        var a = n(16), u = n(51);
        n(17);
        o.prototype.process = function(e) {
            if (e = e || "", !(e = e.toString())) return "";
            var t = this, n = t.options, i = n.whiteList, o = n.onAttr, a = n.onIgnoreAttr, s = n.safeAttrValue;
            return u(e, function(e, t, n, u, l) {
                var c = i[n], f = !1;
                if (!0 === c ? f = c : "function" == typeof c ? f = c(u) : c instanceof RegExp && (f = c.test(u)), 
                !0 !== f && (f = !1), u = s(n, u)) {
                    var p = {
                        position: t,
                        sourcePosition: e,
                        source: l,
                        isWhite: f
                    };
                    if (f) {
                        var d = o(n, u, p);
                        return r(d) ? n + ":" + u : d;
                    }
                    var d = a(n, u, p);
                    return r(d) ? void 0 : d;
                }
            });
        }, e.exports = o;
    }, function(e, t, n) {
        function r(e, t) {
            function n() {
                if (!o) {
                    var n = i.trim(e.slice(a, u)), r = n.indexOf(":");
                    if (-1 !== r) {
                        var l = i.trim(n.slice(0, r)), c = i.trim(n.slice(r + 1));
                        if (l) {
                            var f = t(a, s.length, l, c, n);
                            f && (s += f + "; ");
                        }
                    }
                }
                a = u + 1;
            }
            e = i.trimRight(e), ";" !== e[e.length - 1] && (e += ";");
            for (var r = e.length, o = !1, a = 0, u = 0, s = ""; u < r; u++) {
                var l = e[u];
                if ("/" === l && "*" === e[u + 1]) {
                    var c = e.indexOf("*/", u + 2);
                    if (-1 === c) break;
                    u = c + 1, a = u + 1, o = !1;
                } else "(" === l ? o = !0 : ")" === l ? o = !1 : ";" === l ? o || n() : "\n" === l && n();
            }
            return i.trim(s);
        }
        var i = n(17);
        e.exports = r;
    }, function(e, t, n) {
        "use strict";
        var r = n(0), i = n(1), o = r("%TypeError%"), a = n(54), u = r("%Reflect.apply%", !0) || i("%Function.prototype.apply%");
        e.exports = function(e, t) {
            var n = arguments.length > 2 ? arguments[2] : [];
            if (!a(n)) throw new o("Assertion failed: optional `argumentsList`, if provided, must be a List");
            return u(e, t, n);
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("%TypeError%"), o = n(19), a = n(8);
        e.exports = function(e, t) {
            if ("Object" !== a(e)) throw new i("Assertion failed: `O` must be an Object");
            if (!o(t)) throw new i("Assertion failed: `P` must be a Property Key");
            return t in e;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("%Array%"), o = !i.isArray && n(1)("Object.prototype.toString");
        e.exports = i.isArray || function(e) {
            return "[object Array]" === o(e);
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = n(10);
    }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("%TypeError%"), o = n(18), a = n(58), u = n(8);
        e.exports = function(e) {
            if ("Object" !== u(e)) throw new i("Assertion failed: `obj` must be an Object");
            return a(o(e, "length"));
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(63), i = n(59);
        e.exports = function(e) {
            var t = i(e);
            return 0 !== t && (t = r(t)), 0 === t ? 0 : t;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(72), i = n(57);
        e.exports = function(e) {
            var t = i(e);
            return t <= 0 ? 0 : t > r ? r : t;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("%TypeError%"), o = r("%Number%"), a = r("%RegExp%"), u = r("%parseInt%"), s = n(1), l = n(73), c = n(71), f = s("String.prototype.slice"), p = l(/^0b[01]+$/i), d = l(/^0o[0-7]+$/i), h = l(/^[-+]0x[0-9a-f]+$/i), v = [ "", "​", "￾" ].join(""), g = new a("[" + v + "]", "g"), m = l(g), y = [ "\t\n\v\f\r   ᠎    ", "         　\u2028", "\u2029\ufeff" ].join(""), b = new RegExp("(^[" + y + "]+)|([" + y + "]+$)", "g"), D = s("String.prototype.replace"), x = function(e) {
            return D(e, b, "");
        }, w = n(61);
        e.exports = function e(t) {
            var n = c(t) ? t : w(t, o);
            if ("symbol" == typeof n) throw new i("Cannot convert a Symbol value to a number");
            if ("bigint" == typeof n) throw new i("Conversion from 'BigInt' to 'number' is not allowed.");
            if ("string" == typeof n) {
                if (p(n)) return e(u(f(n, 2), 2));
                if (d(n)) return e(u(f(n, 2), 8));
                if (m(n) || h(n)) return NaN;
                var r = x(n);
                if (r !== n) return e(r);
            }
            return o(n);
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("%Object%"), o = n(5);
        e.exports = function(e) {
            return o(e), i(e);
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(76);
        e.exports = function(e) {
            return arguments.length > 1 ? r(e, arguments[1]) : r(e);
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("%TypeError%");
        e.exports = function(e, t) {
            if (null == e) throw new i(t || "Cannot call method on " + e);
            return e;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(67), i = n(68), o = n(64), a = n(70), u = n(69), s = n(74);
        e.exports = function(e) {
            var t = o(e);
            return a(t) ? 0 : 0 !== t && u(t) ? s(t) * i(r(t)) : t;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(65);
        e.exports = function(e) {
            var t = r(e, Number);
            if ("string" != typeof t) return +t;
            var n = t.replace(/^[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+|[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+$/g, "");
            return /^0[ob]|^[+-]0x/.test(n) ? NaN : +n;
        };
    }, function(e, t, n) {
        "use strict";
        e.exports = n(77);
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return null === e ? "Null" : void 0 === e ? "Undefined" : "function" == typeof e || "object" == typeof e ? "Object" : "number" == typeof e ? "Number" : "boolean" == typeof e ? "Boolean" : "string" == typeof e ? "String" : void 0;
        };
    }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("%Math.abs%");
        e.exports = function(e) {
            return i(e);
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
        var r = n(0), i = r("%Math%"), o = r("%Number%");
        e.exports = o.MAX_SAFE_INTEGER || i.pow(2, 53) - 1;
    }, function(e, t, n) {
        "use strict";
        var r = n(0), i = r("RegExp.prototype.test"), o = n(4);
        e.exports = function(e) {
            return o(i, e);
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
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator, i = n(21), o = n(10), a = n(80), u = n(82), s = function(e, t) {
            if (void 0 === e || null === e) throw new TypeError("Cannot call method on " + e);
            if ("string" != typeof t || "number" !== t && "string" !== t) throw new TypeError('hint must be "string" or "number"');
            var n, r, a, u = "string" === t ? [ "toString", "valueOf" ] : [ "valueOf", "toString" ];
            for (a = 0; a < u.length; ++a) if (n = e[u[a]], o(n) && (r = n.call(e), 
            i(r))) return r;
            throw new TypeError("No default value");
        }, l = function(e, t) {
            var n = e[t];
            if (null !== n && void 0 !== n) {
                if (!o(n)) throw new TypeError(n + " returned for property " + t + " of object " + e + " is not a function");
                return n;
            }
        };
        e.exports = function(e) {
            if (i(e)) return e;
            var t = "default";
            arguments.length > 1 && (arguments[1] === String ? t = "string" : arguments[1] === Number && (t = "number"));
            var n;
            if (r && (Symbol.toPrimitive ? n = l(e, Symbol.toPrimitive) : u(e) && (n = Symbol.prototype.valueOf)), 
            void 0 !== n) {
                var o = n.call(e, t);
                if (i(o)) return o;
                throw new TypeError("unable to convert exotic object to primitive");
            }
            return "default" === t && (a(e) || u(e)) && (t = "string"), s(e, "default" === t ? "number" : t);
        };
    }, function(e, t, n) {
        "use strict";
        var r = Object.prototype.toString, i = n(21), o = n(10), a = {
            "[[DefaultValue]]": function(e) {
                var t;
                if ((t = arguments.length > 1 ? arguments[1] : "[object Date]" === r.call(e) ? String : Number) === String || t === Number) {
                    var n, a, u = t === String ? [ "toString", "valueOf" ] : [ "valueOf", "toString" ];
                    for (a = 0; a < u.length; ++a) if (o(e[u[a]]) && (n = e[u[a]](), 
                    i(n))) return n;
                    throw new TypeError("No default value");
                }
                throw new TypeError("invalid [[DefaultValue]] hint supplied");
            }
        };
        e.exports = function(e) {
            return i(e) ? e : arguments.length > 1 ? a["[[DefaultValue]]"](e, arguments[1]) : a["[[DefaultValue]]"](e);
        };
    }, function(e, t, n) {
        "use strict";
        var r = Array.prototype.slice, i = Object.prototype.toString;
        e.exports = function(e) {
            var t = this;
            if ("function" != typeof t || "[object Function]" !== i.call(t)) throw new TypeError("Function.prototype.bind called on incompatible " + t);
            for (var n, o = r.call(arguments, 1), a = function() {
                if (this instanceof n) {
                    var i = t.apply(this, o.concat(r.call(arguments)));
                    return Object(i) === i ? i : this;
                }
                return t.apply(e, o.concat(r.call(arguments)));
            }, u = Math.max(0, t.length - o.length), s = [], l = 0; l < u; l++) s.push("$" + l);
            if (n = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(a), 
            t.prototype) {
                var c = function() {};
                c.prototype = t.prototype, n.prototype = new c(), c.prototype = null;
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
            return function(r, i) {
                void 0 === i && (i = {});
                var o = i.colors;
                void 0 === o && (o = n);
                var a = 0, u = {}, s = /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/, l = /</, c = new RegExp("(" + s.source + "|" + l.source + ")|(" + t().source + ")", "gmi");
                return r.replace(c, function(t, n, r) {
                    if (r) return e(r);
                    if ("<" === n) return "&lt;";
                    var i;
                    u[n] ? i = u[n] : (i = o[a], u[n] = i);
                    var s = '<span style="color: #' + i + '">' + n + "</span>";
                    return a = ++a % o.length, s;
                });
            };
        });
    }, function(e, t, n) {
        "use strict";
        var r = Date.prototype.getDay, i = function(e) {
            try {
                return r.call(e), !0;
            } catch (e) {
                return !1;
            }
        }, o = Object.prototype.toString, a = n(24)();
        e.exports = function(e) {
            return "object" == typeof e && null !== e && (a ? i(e) : "[object Date]" === o.call(e));
        };
    }, function(e, t, n) {
        "use strict";
        var r = String.prototype.valueOf, i = function(e) {
            try {
                return r.call(e), !0;
            } catch (e) {
                return !1;
            }
        }, o = Object.prototype.toString, a = n(24)();
        e.exports = function(e) {
            return "string" == typeof e || "object" == typeof e && (a ? i(e) : "[object String]" === o.call(e));
        };
    }, function(e, t, n) {
        "use strict";
        var r = Object.prototype.toString;
        if (n(22)()) {
            var i = Symbol.prototype.toString, o = /^Symbol\(.*\)$/, a = function(e) {
                return "symbol" == typeof e.valueOf() && o.test(i.call(e));
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
        !function(e, n) {
            n(t);
        }(0, function(e) {
            "use strict";
            function t(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            function n(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e;
            }
            function r(e, t) {
                if (e) {
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), 
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0;
                }
            }
            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function o(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (n) return (n = n.call(e)).next.bind(n);
                if (Array.isArray(e) || (n = r(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0;
                    return function() {
                        return i >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[i++]
                        };
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function a() {
                return {
                    baseUrl: null,
                    breaks: !1,
                    extensions: null,
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
            function u(t) {
                e.defaults = t;
            }
            function s(e, t) {
                if (t) {
                    if (k.test(e)) return e.replace(E, S);
                } else if (F.test(e)) return e.replace(C, S);
                return e;
            }
            function l(e) {
                return e.replace(O, function(e, t) {
                    return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "";
                });
            }
            function c(e, t) {
                e = e.source || e, t = t || "";
                var n = {
                    replace: function(t, r) {
                        return r = r.source || r, r = r.replace(B, "$1"), e = e.replace(t, r), 
                        n;
                    },
                    getRegex: function() {
                        return new RegExp(e, t);
                    }
                };
                return n;
            }
            function f(e, t, n) {
                if (e) {
                    var r;
                    try {
                        r = decodeURIComponent(l(n)).replace($, "").toLowerCase();
                    } catch (e) {
                        return null;
                    }
                    if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return null;
                }
                t && !j.test(n) && (n = p(t, n));
                try {
                    n = encodeURI(n).replace(/%25/g, "%");
                } catch (e) {
                    return null;
                }
                return n;
            }
            function p(e, t) {
                T[" " + e] || (I.test(e) ? T[" " + e] = e + "/" : T[" " + e] = v(e, "/", !0)), 
                e = T[" " + e];
                var n = -1 === e.indexOf(":");
                return "//" === t.substring(0, 2) ? n ? t : e.replace(z, "$1") + t : "/" === t.charAt(0) ? n ? t : e.replace(R, "$1") + t : e + t;
            }
            function d(e) {
                for (var t, n, r = 1; r < arguments.length; r++) {
                    t = arguments[r];
                    for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }
                return e;
            }
            function h(e, t) {
                var n = e.replace(/\|/g, function(e, t, n) {
                    for (var r = !1, i = t; --i >= 0 && "\\" === n[i]; ) r = !r;
                    return r ? "|" : " |";
                }), r = n.split(/ \|/), i = 0;
                if (r[0].trim() || r.shift(), r.length > 0 && !r[r.length - 1].trim() && r.pop(), 
                r.length > t) r.splice(t); else for (;r.length < t; ) r.push("");
                for (;i < r.length; i++) r[i] = r[i].trim().replace(/\\\|/g, "|");
                return r;
            }
            function v(e, t, n) {
                var r = e.length;
                if (0 === r) return "";
                for (var i = 0; i < r; ) {
                    var o = e.charAt(r - i - 1);
                    if (o !== t || n) {
                        if (o === t || !n) break;
                        i++;
                    } else i++;
                }
                return e.substr(0, r - i);
            }
            function g(e, t) {
                if (-1 === e.indexOf(t[1])) return -1;
                for (var n = e.length, r = 0, i = 0; i < n; i++) if ("\\" === e[i]) i++; else if (e[i] === t[0]) r++; else if (e[i] === t[1] && --r < 0) return i;
                return -1;
            }
            function m(e) {
                e && e.sanitize && e.silent;
            }
            function y(e, t) {
                if (t < 1) return "";
                for (var n = ""; t > 1; ) 1 & t && (n += e), t >>= 1, e += e;
                return n + e;
            }
            function b(e, t, n, r) {
                var i = t.href, o = t.title ? s(t.title) : null, a = e[1].replace(/\\([\[\]])/g, "$1");
                if ("!" !== e[0].charAt(0)) {
                    r.state.inLink = !0;
                    var u = {
                        type: "link",
                        raw: n,
                        href: i,
                        title: o,
                        text: a,
                        tokens: r.inlineTokens(a, [])
                    };
                    return r.state.inLink = !1, u;
                }
                return {
                    type: "image",
                    raw: n,
                    href: i,
                    title: o,
                    text: s(a)
                };
            }
            function D(e, t) {
                var n = e.match(/^(\s+)(?:```)/);
                if (null === n) return t;
                var r = n[1];
                return t.split("\n").map(function(e) {
                    var t = e.match(/^\s+/);
                    return null === t ? e : t[0].length >= r.length ? e.slice(r.length) : e;
                }).join("\n");
            }
            function x(e) {
                return e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
            }
            function w(e) {
                var t, n, r = "", i = e.length;
                for (t = 0; t < i; t++) n = e.charCodeAt(t), Math.random() > .5 && (n = "x" + n.toString(16)), 
                r += "&#" + n + ";";
                return r;
            }
            function A(e, t, n) {
                if (void 0 === e || null === e) throw new Error("marked(): input parameter is undefined or null");
                if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
                if ("function" == typeof t && (n = t, t = null), t = d({}, A.defaults, t || {}), 
                m(t), n) {
                    var r, i = t.highlight;
                    try {
                        r = U.lex(e, t);
                    } catch (e) {
                        return n(e);
                    }
                    var o = function(e) {
                        var o;
                        if (!e) try {
                            t.walkTokens && A.walkTokens(r, t.walkTokens), o = V.parse(r, t);
                        } catch (t) {
                            e = t;
                        }
                        return t.highlight = i, e ? n(e) : n(null, o);
                    };
                    if (!i || i.length < 3) return o();
                    if (delete t.highlight, !r.length) return o();
                    var a = 0;
                    return A.walkTokens(r, function(e) {
                        "code" === e.type && (a++, setTimeout(function() {
                            i(e.text, e.lang, function(t, n) {
                                if (t) return o(t);
                                null != n && n !== e.text && (e.text = n, e.escaped = !0), 
                                0 === --a && o();
                            });
                        }, 0));
                    }), void (0 === a && o());
                }
                try {
                    var u = U.lex(e, t);
                    return t.walkTokens && A.walkTokens(u, t.walkTokens), V.parse(u, t);
                } catch (e) {
                    if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", 
                    t.silent) return "<p>An error occurred:</p><pre>" + s(e.message + "", !0) + "</pre>";
                    throw e;
                }
            }
            e.defaults = a();
            var k = /[&<>"']/, E = /[&<>"']/g, F = /[<>"']|&(?!#?\w+;)/, C = /[<>"']|&(?!#?\w+;)/g, _ = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }, S = function(e) {
                return _[e];
            }, O = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, B = /(^|[^\[])\^/g, $ = /[^\w:]/g, j = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i, T = {}, I = /^[^:]+:\/*[^/]*$/, z = /^([^:]+:)[\s\S]*$/, R = /^([^:]+:\/*[^/]*)[\s\S]*$/, P = {
                exec: function() {}
            }, M = function() {
                function t(t) {
                    this.options = t || e.defaults;
                }
                var n = t.prototype;
                return n.space = function(e) {
                    var t = this.rules.block.newline.exec(e);
                    if (t && t[0].length > 0) return {
                        type: "space",
                        raw: t[0]
                    };
                }, n.code = function(e) {
                    var t = this.rules.block.code.exec(e);
                    if (t) {
                        var n = t[0].replace(/^ {1,4}/gm, "");
                        return {
                            type: "code",
                            raw: t[0],
                            codeBlockStyle: "indented",
                            text: this.options.pedantic ? n : v(n, "\n")
                        };
                    }
                }, n.fences = function(e) {
                    var t = this.rules.block.fences.exec(e);
                    if (t) {
                        var n = t[0], r = D(n, t[3] || "");
                        return {
                            type: "code",
                            raw: n,
                            lang: t[2] ? t[2].trim() : t[2],
                            text: r
                        };
                    }
                }, n.heading = function(e) {
                    var t = this.rules.block.heading.exec(e);
                    if (t) {
                        var n = t[2].trim();
                        if (/#$/.test(n)) {
                            var r = v(n, "#");
                            this.options.pedantic ? n = r.trim() : r && !/ $/.test(r) || (n = r.trim());
                        }
                        var i = {
                            type: "heading",
                            raw: t[0],
                            depth: t[1].length,
                            text: n,
                            tokens: []
                        };
                        return this.lexer.inline(i.text, i.tokens), i;
                    }
                }, n.hr = function(e) {
                    var t = this.rules.block.hr.exec(e);
                    if (t) return {
                        type: "hr",
                        raw: t[0]
                    };
                }, n.blockquote = function(e) {
                    var t = this.rules.block.blockquote.exec(e);
                    if (t) {
                        var n = t[0].replace(/^ *> ?/gm, "");
                        return {
                            type: "blockquote",
                            raw: t[0],
                            tokens: this.lexer.blockTokens(n, []),
                            text: n
                        };
                    }
                }, n.list = function(e) {
                    var t = this.rules.block.list.exec(e);
                    if (t) {
                        var n, r, i, a, u, s, l, c, f, p, d, h, v = t[1].trim(), g = v.length > 1, m = {
                            type: "list",
                            raw: "",
                            ordered: g,
                            start: g ? +v.slice(0, -1) : "",
                            loose: !1,
                            items: []
                        };
                        v = g ? "\\d{1,9}\\" + v.slice(-1) : "\\" + v, this.options.pedantic && (v = g ? v : "[*+-]");
                        for (var y = new RegExp("^( {0,3}" + v + ")((?: [^\\n]*)?(?:\\n|$))"); e && (h = !1, 
                        t = y.exec(e)) && !this.rules.block.hr.test(e); ) {
                            if (n = t[0], e = e.substring(n.length), c = t[2].split("\n", 1)[0], 
                            f = e.split("\n", 1)[0], this.options.pedantic ? (a = 2, 
                            d = c.trimLeft()) : (a = t[2].search(/[^ ]/), a = a > 4 ? 1 : a, 
                            d = c.slice(a), a += t[1].length), s = !1, !c && /^ *$/.test(f) && (n += f + "\n", 
                            e = e.substring(f.length + 1), h = !0), !h) for (var b = new RegExp("^ {0," + Math.min(3, a - 1) + "}(?:[*+-]|\\d{1,9}[.)])"); e && (p = e.split("\n", 1)[0], 
                            c = p, this.options.pedantic && (c = c.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), 
                            !b.test(c)); ) {
                                if (c.search(/[^ ]/) >= a || !c.trim()) d += "\n" + c.slice(a); else {
                                    if (s) break;
                                    d += "\n" + c;
                                }
                                s || c.trim() || (s = !0), n += p + "\n", e = e.substring(p.length + 1);
                            }
                            m.loose || (l ? m.loose = !0 : /\n *\n *$/.test(n) && (l = !0)), 
                            this.options.gfm && (r = /^\[[ xX]\] /.exec(d)) && (i = "[ ] " !== r[0], 
                            d = d.replace(/^\[[ xX]\] +/, "")), m.items.push({
                                type: "list_item",
                                raw: n,
                                task: !!r,
                                checked: i,
                                loose: !1,
                                text: d
                            }), m.raw += n;
                        }
                        m.items[m.items.length - 1].raw = n.trimRight(), m.items[m.items.length - 1].text = d.trimRight(), 
                        m.raw = m.raw.trimRight();
                        var D = m.items.length;
                        for (u = 0; u < D; u++) {
                            this.lexer.state.top = !1, m.items[u].tokens = this.lexer.blockTokens(m.items[u].text, []);
                            var x = m.items[u].tokens.filter(function(e) {
                                return "space" === e.type;
                            }), w = x.every(function(e) {
                                for (var t, n = e.raw.split(""), r = 0, i = o(n); !(t = i()).done; ) {
                                    if ("\n" === t.value && (r += 1), r > 1) return !0;
                                }
                                return !1;
                            });
                            !m.loose && x.length && w && (m.loose = !0, m.items[u].loose = !0);
                        }
                        return m;
                    }
                }, n.html = function(e) {
                    var t = this.rules.block.html.exec(e);
                    if (t) {
                        var n = {
                            type: "html",
                            raw: t[0],
                            pre: !this.options.sanitizer && ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
                            text: t[0]
                        };
                        return this.options.sanitize && (n.type = "paragraph", n.text = this.options.sanitizer ? this.options.sanitizer(t[0]) : s(t[0]), 
                        n.tokens = [], this.lexer.inline(n.text, n.tokens)), n;
                    }
                }, n.def = function(e) {
                    var t = this.rules.block.def.exec(e);
                    if (t) {
                        t[3] && (t[3] = t[3].substring(1, t[3].length - 1));
                        return {
                            type: "def",
                            tag: t[1].toLowerCase().replace(/\s+/g, " "),
                            raw: t[0],
                            href: t[2],
                            title: t[3]
                        };
                    }
                }, n.table = function(e) {
                    var t = this.rules.block.table.exec(e);
                    if (t) {
                        var n = {
                            type: "table",
                            header: h(t[1]).map(function(e) {
                                return {
                                    text: e
                                };
                            }),
                            align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                            rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split("\n") : []
                        };
                        if (n.header.length === n.align.length) {
                            n.raw = t[0];
                            var r, i, o, a, u = n.align.length;
                            for (r = 0; r < u; r++) /^ *-+: *$/.test(n.align[r]) ? n.align[r] = "right" : /^ *:-+: *$/.test(n.align[r]) ? n.align[r] = "center" : /^ *:-+ *$/.test(n.align[r]) ? n.align[r] = "left" : n.align[r] = null;
                            for (u = n.rows.length, r = 0; r < u; r++) n.rows[r] = h(n.rows[r], n.header.length).map(function(e) {
                                return {
                                    text: e
                                };
                            });
                            for (u = n.header.length, i = 0; i < u; i++) n.header[i].tokens = [], 
                            this.lexer.inlineTokens(n.header[i].text, n.header[i].tokens);
                            for (u = n.rows.length, i = 0; i < u; i++) for (a = n.rows[i], 
                            o = 0; o < a.length; o++) a[o].tokens = [], this.lexer.inlineTokens(a[o].text, a[o].tokens);
                            return n;
                        }
                    }
                }, n.lheading = function(e) {
                    var t = this.rules.block.lheading.exec(e);
                    if (t) {
                        var n = {
                            type: "heading",
                            raw: t[0],
                            depth: "=" === t[2].charAt(0) ? 1 : 2,
                            text: t[1],
                            tokens: []
                        };
                        return this.lexer.inline(n.text, n.tokens), n;
                    }
                }, n.paragraph = function(e) {
                    var t = this.rules.block.paragraph.exec(e);
                    if (t) {
                        var n = {
                            type: "paragraph",
                            raw: t[0],
                            text: "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1],
                            tokens: []
                        };
                        return this.lexer.inline(n.text, n.tokens), n;
                    }
                }, n.text = function(e) {
                    var t = this.rules.block.text.exec(e);
                    if (t) {
                        var n = {
                            type: "text",
                            raw: t[0],
                            text: t[0],
                            tokens: []
                        };
                        return this.lexer.inline(n.text, n.tokens), n;
                    }
                }, n.escape = function(e) {
                    var t = this.rules.inline.escape.exec(e);
                    if (t) return {
                        type: "escape",
                        raw: t[0],
                        text: s(t[1])
                    };
                }, n.tag = function(e) {
                    var t = this.rules.inline.tag.exec(e);
                    if (t) return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), 
                    !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), 
                    {
                        type: this.options.sanitize ? "text" : "html",
                        raw: t[0],
                        inLink: this.lexer.state.inLink,
                        inRawBlock: this.lexer.state.inRawBlock,
                        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : s(t[0]) : t[0]
                    };
                }, n.link = function(e) {
                    var t = this.rules.inline.link.exec(e);
                    if (t) {
                        var n = t[2].trim();
                        if (!this.options.pedantic && /^</.test(n)) {
                            if (!/>$/.test(n)) return;
                            var r = v(n.slice(0, -1), "\\");
                            if ((n.length - r.length) % 2 == 0) return;
                        } else {
                            var i = g(t[2], "()");
                            if (i > -1) {
                                var o = 0 === t[0].indexOf("!") ? 5 : 4, a = o + t[1].length + i;
                                t[2] = t[2].substring(0, i), t[0] = t[0].substring(0, a).trim(), 
                                t[3] = "";
                            }
                        }
                        var u = t[2], s = "";
                        if (this.options.pedantic) {
                            var l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(u);
                            l && (u = l[1], s = l[3]);
                        } else s = t[3] ? t[3].slice(1, -1) : "";
                        return u = u.trim(), /^</.test(u) && (u = this.options.pedantic && !/>$/.test(n) ? u.slice(1) : u.slice(1, -1)), 
                        b(t, {
                            href: u ? u.replace(this.rules.inline._escapes, "$1") : u,
                            title: s ? s.replace(this.rules.inline._escapes, "$1") : s
                        }, t[0], this.lexer);
                    }
                }, n.reflink = function(e, t) {
                    var n;
                    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
                        var r = (n[2] || n[1]).replace(/\s+/g, " ");
                        if (!(r = t[r.toLowerCase()]) || !r.href) {
                            var i = n[0].charAt(0);
                            return {
                                type: "text",
                                raw: i,
                                text: i
                            };
                        }
                        return b(n, r, n[0], this.lexer);
                    }
                }, n.emStrong = function(e, t, n) {
                    void 0 === n && (n = "");
                    var r = this.rules.inline.emStrong.lDelim.exec(e);
                    if (r && (!r[3] || !n.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))) {
                        var i = r[1] || r[2] || "";
                        if (!i || i && ("" === n || this.rules.inline.punctuation.exec(n))) {
                            var o, a, u = r[0].length - 1, s = u, l = 0, c = "*" === r[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                            for (c.lastIndex = 0, t = t.slice(-1 * e.length + u); null != (r = c.exec(t)); ) if (o = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]) if (a = o.length, 
                            r[3] || r[4]) s += a; else if (!((r[5] || r[6]) && u % 3) || (u + a) % 3) {
                                if (!((s -= a) > 0)) {
                                    if (a = Math.min(a, a + s + l), Math.min(u, a) % 2) {
                                        var f = e.slice(1, u + r.index + a);
                                        return {
                                            type: "em",
                                            raw: e.slice(0, u + r.index + a + 1),
                                            text: f,
                                            tokens: this.lexer.inlineTokens(f, [])
                                        };
                                    }
                                    var p = e.slice(2, u + r.index + a - 1);
                                    return {
                                        type: "strong",
                                        raw: e.slice(0, u + r.index + a + 1),
                                        text: p,
                                        tokens: this.lexer.inlineTokens(p, [])
                                    };
                                }
                            } else l += a;
                        }
                    }
                }, n.codespan = function(e) {
                    var t = this.rules.inline.code.exec(e);
                    if (t) {
                        var n = t[2].replace(/\n/g, " "), r = /[^ ]/.test(n), i = /^ /.test(n) && / $/.test(n);
                        return r && i && (n = n.substring(1, n.length - 1)), n = s(n, !0), 
                        {
                            type: "codespan",
                            raw: t[0],
                            text: n
                        };
                    }
                }, n.br = function(e) {
                    var t = this.rules.inline.br.exec(e);
                    if (t) return {
                        type: "br",
                        raw: t[0]
                    };
                }, n.del = function(e) {
                    var t = this.rules.inline.del.exec(e);
                    if (t) return {
                        type: "del",
                        raw: t[0],
                        text: t[2],
                        tokens: this.lexer.inlineTokens(t[2], [])
                    };
                }, n.autolink = function(e, t) {
                    var n = this.rules.inline.autolink.exec(e);
                    if (n) {
                        var r, i;
                        return "@" === n[2] ? (r = s(this.options.mangle ? t(n[1]) : n[1]), 
                        i = "mailto:" + r) : (r = s(n[1]), i = r), {
                            type: "link",
                            raw: n[0],
                            text: r,
                            href: i,
                            tokens: [ {
                                type: "text",
                                raw: r,
                                text: r
                            } ]
                        };
                    }
                }, n.url = function(e, t) {
                    var n;
                    if (n = this.rules.inline.url.exec(e)) {
                        var r, i;
                        if ("@" === n[2]) r = s(this.options.mangle ? t(n[0]) : n[0]), 
                        i = "mailto:" + r; else {
                            var o;
                            do {
                                o = n[0], n[0] = this.rules.inline._backpedal.exec(n[0])[0];
                            } while (o !== n[0]);
                            r = s(n[0]), i = "www." === n[1] ? "http://" + r : r;
                        }
                        return {
                            type: "link",
                            raw: n[0],
                            text: r,
                            href: i,
                            tokens: [ {
                                type: "text",
                                raw: r,
                                text: r
                            } ]
                        };
                    }
                }, n.inlineText = function(e, t) {
                    var n = this.rules.inline.text.exec(e);
                    if (n) {
                        var r;
                        return r = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(n[0]) : s(n[0]) : n[0] : s(this.options.smartypants ? t(n[0]) : n[0]), 
                        {
                            type: "text",
                            raw: n[0],
                            text: r
                        };
                    }
                }, t;
            }(), L = {
                newline: /^(?: *(?:\n|$))+/,
                code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
                fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
                hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
                heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
                blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
                html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
                def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
                table: P,
                lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
                _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
                text: /^[^\n]+/
            };
            L._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/, L._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/, 
            L.def = c(L.def).replace("label", L._label).replace("title", L._title).getRegex(), 
            L.bullet = /(?:[*+-]|\d{1,9}[.)])/, L.listItemStart = c(/^( *)(bull) */).replace("bull", L.bullet).getRegex(), 
            L.list = c(L.list).replace(/bull/g, L.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + L.def.source + ")").getRegex(), 
            L._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", 
            L._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, L.html = c(L.html, "i").replace("comment", L._comment).replace("tag", L._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), 
            L.paragraph = c(L._paragraph).replace("hr", L.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", L._tag).getRegex(), 
            L.blockquote = c(L.blockquote).replace("paragraph", L.paragraph).getRegex(), 
            L.normal = d({}, L), L.gfm = d({}, L.normal, {
                table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
            }), L.gfm.table = c(L.gfm.table).replace("hr", L.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", L._tag).getRegex(), 
            L.gfm.paragraph = c(L._paragraph).replace("hr", L.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", L.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", L._tag).getRegex(), 
            L.pedantic = d({}, L.normal, {
                html: c("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", L._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
                def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
                heading: /^(#{1,6})(.*)(?:\n+|$)/,
                fences: P,
                paragraph: c(L.normal._paragraph).replace("hr", L.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", L.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
            });
            var N = {
                escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
                autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                url: P,
                tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
                link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
                reflink: /^!?\[(label)\]\[(ref)\]/,
                nolink: /^!?\[(ref)\](?:\[\])?/,
                reflinkSearch: "reflink|nolink(?!\\()",
                emStrong: {
                    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
                    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
                    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
                },
                code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                br: /^( {2,}|\\)\n(?!\s*$)/,
                del: P,
                text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
                punctuation: /^([\spunctuation])/
            };
            N._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", N.punctuation = c(N.punctuation).replace(/punctuation/g, N._punctuation).getRegex(), 
            N.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, N.escapedEmSt = /\\\*|\\_/g, 
            N._comment = c(L._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(), 
            N.emStrong.lDelim = c(N.emStrong.lDelim).replace(/punct/g, N._punctuation).getRegex(), 
            N.emStrong.rDelimAst = c(N.emStrong.rDelimAst, "g").replace(/punct/g, N._punctuation).getRegex(), 
            N.emStrong.rDelimUnd = c(N.emStrong.rDelimUnd, "g").replace(/punct/g, N._punctuation).getRegex(), 
            N._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, N._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, 
            N._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, 
            N.autolink = c(N.autolink).replace("scheme", N._scheme).replace("email", N._email).getRegex(), 
            N._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, 
            N.tag = c(N.tag).replace("comment", N._comment).replace("attribute", N._attribute).getRegex(), 
            N._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, N._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, 
            N._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, 
            N.link = c(N.link).replace("label", N._label).replace("href", N._href).replace("title", N._title).getRegex(), 
            N.reflink = c(N.reflink).replace("label", N._label).replace("ref", L._label).getRegex(), 
            N.nolink = c(N.nolink).replace("ref", L._label).getRegex(), N.reflinkSearch = c(N.reflinkSearch, "g").replace("reflink", N.reflink).replace("nolink", N.nolink).getRegex(), 
            N.normal = d({}, N), N.pedantic = d({}, N.normal, {
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
                link: c(/^!?\[(label)\]\((.*?)\)/).replace("label", N._label).getRegex(),
                reflink: c(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", N._label).getRegex()
            }), N.gfm = d({}, N.normal, {
                escape: c(N.escape).replace("])", "~|])").getRegex(),
                _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
                del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
                text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
            }), N.gfm.url = c(N.gfm.url, "i").replace("email", N.gfm._extended_email).getRegex(), 
            N.breaks = d({}, N.gfm, {
                br: c(N.br).replace("{2,}", "*").getRegex(),
                text: c(N.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
            });
            var U = function() {
                function t(t) {
                    this.tokens = [], this.tokens.links = Object.create(null), this.options = t || e.defaults, 
                    this.options.tokenizer = this.options.tokenizer || new M(), 
                    this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, 
                    this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
                        inLink: !1,
                        inRawBlock: !1,
                        top: !0
                    };
                    var n = {
                        block: L.normal,
                        inline: N.normal
                    };
                    this.options.pedantic ? (n.block = L.pedantic, n.inline = N.pedantic) : this.options.gfm && (n.block = L.gfm, 
                    this.options.breaks ? n.inline = N.breaks : n.inline = N.gfm), 
                    this.tokenizer.rules = n;
                }
                t.lex = function(e, n) {
                    return new t(n).lex(e);
                }, t.lexInline = function(e, n) {
                    return new t(n).inlineTokens(e);
                };
                var r = t.prototype;
                return r.lex = function(e) {
                    e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e, this.tokens);
                    for (var t; t = this.inlineQueue.shift(); ) this.inlineTokens(t.src, t.tokens);
                    return this.tokens;
                }, r.blockTokens = function(e, t) {
                    var n = this;
                    void 0 === t && (t = []), this.options.pedantic && (e = e.replace(/^ +$/gm, ""));
                    for (var r, i, o, a; e; ) if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function(i) {
                        return !!(r = i.call({
                            lexer: n
                        }, e, t)) && (e = e.substring(r.raw.length), t.push(r), 
                        !0);
                    }))) if (r = this.tokenizer.space(e)) e = e.substring(r.raw.length), 
                    1 === r.raw.length && t.length > 0 ? t[t.length - 1].raw += "\n" : t.push(r); else if (r = this.tokenizer.code(e)) e = e.substring(r.raw.length), 
                    i = t[t.length - 1], !i || "paragraph" !== i.type && "text" !== i.type ? t.push(r) : (i.raw += "\n" + r.raw, 
                    i.text += "\n" + r.text, this.inlineQueue[this.inlineQueue.length - 1].src = i.text); else if (r = this.tokenizer.fences(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (r = this.tokenizer.heading(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (r = this.tokenizer.hr(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (r = this.tokenizer.blockquote(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (r = this.tokenizer.list(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (r = this.tokenizer.html(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (r = this.tokenizer.def(e)) e = e.substring(r.raw.length), 
                    i = t[t.length - 1], !i || "paragraph" !== i.type && "text" !== i.type ? this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
                        href: r.href,
                        title: r.title
                    }) : (i.raw += "\n" + r.raw, i.text += "\n" + r.raw, this.inlineQueue[this.inlineQueue.length - 1].src = i.text); else if (r = this.tokenizer.table(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (r = this.tokenizer.lheading(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (o = e, this.options.extensions && this.options.extensions.startBlock && function() {
                        var t = 1 / 0, r = e.slice(1), i = void 0;
                        n.options.extensions.startBlock.forEach(function(e) {
                            "number" == typeof (i = e.call({
                                lexer: this
                            }, r)) && i >= 0 && (t = Math.min(t, i));
                        }), t < 1 / 0 && t >= 0 && (o = e.substring(0, t + 1));
                    }(), this.state.top && (r = this.tokenizer.paragraph(o))) i = t[t.length - 1], 
                    a && "paragraph" === i.type ? (i.raw += "\n" + r.raw, i.text += "\n" + r.text, 
                    this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : t.push(r), 
                    a = o.length !== e.length, e = e.substring(r.raw.length); else if (r = this.tokenizer.text(e)) e = e.substring(r.raw.length), 
                    i = t[t.length - 1], i && "text" === i.type ? (i.raw += "\n" + r.raw, 
                    i.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : t.push(r); else if (e) {
                        var u = "Infinite loop on byte: " + e.charCodeAt(0);
                        if (this.options.silent) break;
                        throw new Error(u);
                    }
                    return this.state.top = !0, t;
                }, r.inline = function(e, t) {
                    this.inlineQueue.push({
                        src: e,
                        tokens: t
                    });
                }, r.inlineTokens = function(e, t) {
                    var n = this;
                    void 0 === t && (t = []);
                    var r, i, o, a, u, s, l = e;
                    if (this.tokens.links) {
                        var c = Object.keys(this.tokens.links);
                        if (c.length > 0) for (;null != (a = this.tokenizer.rules.inline.reflinkSearch.exec(l)); ) c.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, a.index) + "[" + y("a", a[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
                    }
                    for (;null != (a = this.tokenizer.rules.inline.blockSkip.exec(l)); ) l = l.slice(0, a.index) + "[" + y("a", a[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                    for (;null != (a = this.tokenizer.rules.inline.escapedEmSt.exec(l)); ) l = l.slice(0, a.index) + "++" + l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
                    for (;e; ) if (u || (s = ""), u = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function(i) {
                        return !!(r = i.call({
                            lexer: n
                        }, e, t)) && (e = e.substring(r.raw.length), t.push(r), 
                        !0);
                    }))) if (r = this.tokenizer.escape(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (r = this.tokenizer.tag(e)) e = e.substring(r.raw.length), 
                    i = t[t.length - 1], i && "text" === r.type && "text" === i.type ? (i.raw += r.raw, 
                    i.text += r.text) : t.push(r); else if (r = this.tokenizer.link(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (r = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(r.raw.length), 
                    i = t[t.length - 1], i && "text" === r.type && "text" === i.type ? (i.raw += r.raw, 
                    i.text += r.text) : t.push(r); else if (r = this.tokenizer.emStrong(e, l, s)) e = e.substring(r.raw.length), 
                    t.push(r); else if (r = this.tokenizer.codespan(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (r = this.tokenizer.br(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (r = this.tokenizer.del(e)) e = e.substring(r.raw.length), 
                    t.push(r); else if (r = this.tokenizer.autolink(e, w)) e = e.substring(r.raw.length), 
                    t.push(r); else if (this.state.inLink || !(r = this.tokenizer.url(e, w))) {
                        if (o = e, this.options.extensions && this.options.extensions.startInline && function() {
                            var t = 1 / 0, r = e.slice(1), i = void 0;
                            n.options.extensions.startInline.forEach(function(e) {
                                "number" == typeof (i = e.call({
                                    lexer: this
                                }, r)) && i >= 0 && (t = Math.min(t, i));
                            }), t < 1 / 0 && t >= 0 && (o = e.substring(0, t + 1));
                        }(), r = this.tokenizer.inlineText(o, x)) e = e.substring(r.raw.length), 
                        "_" !== r.raw.slice(-1) && (s = r.raw.slice(-1)), u = !0, 
                        i = t[t.length - 1], i && "text" === i.type ? (i.raw += r.raw, 
                        i.text += r.text) : t.push(r); else if (e) {
                            var f = "Infinite loop on byte: " + e.charCodeAt(0);
                            if (this.options.silent) break;
                            throw new Error(f);
                        }
                    } else e = e.substring(r.raw.length), t.push(r);
                    return t;
                }, n(t, null, [ {
                    key: "rules",
                    get: function() {
                        return {
                            block: L,
                            inline: N
                        };
                    }
                } ]), t;
            }(), Q = function() {
                function t(t) {
                    this.options = t || e.defaults;
                }
                var n = t.prototype;
                return n.code = function(e, t, n) {
                    var r = (t || "").match(/\S*/)[0];
                    if (this.options.highlight) {
                        var i = this.options.highlight(e, r);
                        null != i && i !== e && (n = !0, e = i);
                    }
                    return e = e.replace(/\n$/, "") + "\n", r ? '<pre><code class="' + this.options.langPrefix + s(r, !0) + '">' + (n ? e : s(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : s(e, !0)) + "</code></pre>\n";
                }, n.blockquote = function(e) {
                    return "<blockquote>\n" + e + "</blockquote>\n";
                }, n.html = function(e) {
                    return e;
                }, n.heading = function(e, t, n, r) {
                    return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n";
                }, n.hr = function() {
                    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
                }, n.list = function(e, t, n) {
                    var r = t ? "ol" : "ul";
                    return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n";
                }, n.listitem = function(e) {
                    return "<li>" + e + "</li>\n";
                }, n.checkbox = function(e) {
                    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
                }, n.paragraph = function(e) {
                    return "<p>" + e + "</p>\n";
                }, n.table = function(e, t) {
                    return t && (t = "<tbody>" + t + "</tbody>"), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n";
                }, n.tablerow = function(e) {
                    return "<tr>\n" + e + "</tr>\n";
                }, n.tablecell = function(e, t) {
                    var n = t.header ? "th" : "td";
                    return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n";
                }, n.strong = function(e) {
                    return "<strong>" + e + "</strong>";
                }, n.em = function(e) {
                    return "<em>" + e + "</em>";
                }, n.codespan = function(e) {
                    return "<code>" + e + "</code>";
                }, n.br = function() {
                    return this.options.xhtml ? "<br/>" : "<br>";
                }, n.del = function(e) {
                    return "<del>" + e + "</del>";
                }, n.link = function(e, t, n) {
                    if (null === (e = f(this.options.sanitize, this.options.baseUrl, e))) return n;
                    var r = '<a href="' + s(e) + '"';
                    return t && (r += ' title="' + t + '"'), r += ">" + n + "</a>";
                }, n.image = function(e, t, n) {
                    if (null === (e = f(this.options.sanitize, this.options.baseUrl, e))) return n;
                    var r = '<img src="' + e + '" alt="' + n + '"';
                    return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">";
                }, n.text = function(e) {
                    return e;
                }, t;
            }(), q = function() {
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
            }(), W = function() {
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
            }(), V = function() {
                function t(t) {
                    this.options = t || e.defaults, this.options.renderer = this.options.renderer || new Q(), 
                    this.renderer = this.options.renderer, this.renderer.options = this.options, 
                    this.textRenderer = new q(), this.slugger = new W();
                }
                t.parse = function(e, n) {
                    return new t(n).parse(e);
                }, t.parseInline = function(e, n) {
                    return new t(n).parseInline(e);
                };
                var n = t.prototype;
                return n.parse = function(e, t) {
                    void 0 === t && (t = !0);
                    var n, r, i, o, a, u, s, c, f, p, d, h, v, g, m, y, b, D, x, w = "", A = e.length;
                    for (n = 0; n < A; n++) if (p = e[n], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[p.type]) || !1 === (x = this.options.extensions.renderers[p.type].call({
                        parser: this
                    }, p)) && [ "space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text" ].includes(p.type)) switch (p.type) {
                      case "space":
                        continue;

                      case "hr":
                        w += this.renderer.hr();
                        continue;

                      case "heading":
                        w += this.renderer.heading(this.parseInline(p.tokens), p.depth, l(this.parseInline(p.tokens, this.textRenderer)), this.slugger);
                        continue;

                      case "code":
                        w += this.renderer.code(p.text, p.lang, p.escaped);
                        continue;

                      case "table":
                        for (c = "", s = "", o = p.header.length, r = 0; r < o; r++) s += this.renderer.tablecell(this.parseInline(p.header[r].tokens), {
                            header: !0,
                            align: p.align[r]
                        });
                        for (c += this.renderer.tablerow(s), f = "", o = p.rows.length, 
                        r = 0; r < o; r++) {
                            for (u = p.rows[r], s = "", a = u.length, i = 0; i < a; i++) s += this.renderer.tablecell(this.parseInline(u[i].tokens), {
                                header: !1,
                                align: p.align[i]
                            });
                            f += this.renderer.tablerow(s);
                        }
                        w += this.renderer.table(c, f);
                        continue;

                      case "blockquote":
                        f = this.parse(p.tokens), w += this.renderer.blockquote(f);
                        continue;

                      case "list":
                        for (d = p.ordered, h = p.start, v = p.loose, o = p.items.length, 
                        f = "", r = 0; r < o; r++) m = p.items[r], y = m.checked, 
                        b = m.task, g = "", m.task && (D = this.renderer.checkbox(y), 
                        v ? m.tokens.length > 0 && "paragraph" === m.tokens[0].type ? (m.tokens[0].text = D + " " + m.tokens[0].text, 
                        m.tokens[0].tokens && m.tokens[0].tokens.length > 0 && "text" === m.tokens[0].tokens[0].type && (m.tokens[0].tokens[0].text = D + " " + m.tokens[0].tokens[0].text)) : m.tokens.unshift({
                            type: "text",
                            text: D
                        }) : g += D), g += this.parse(m.tokens, v), f += this.renderer.listitem(g, b, y);
                        w += this.renderer.list(f, d, h);
                        continue;

                      case "html":
                        w += this.renderer.html(p.text);
                        continue;

                      case "paragraph":
                        w += this.renderer.paragraph(this.parseInline(p.tokens));
                        continue;

                      case "text":
                        for (f = p.tokens ? this.parseInline(p.tokens) : p.text; n + 1 < A && "text" === e[n + 1].type; ) p = e[++n], 
                        f += "\n" + (p.tokens ? this.parseInline(p.tokens) : p.text);
                        w += t ? this.renderer.paragraph(f) : f;
                        continue;

                      default:
                        var k = 'Token with "' + p.type + '" type was not found.';
                        if (this.options.silent) return;
                        throw new Error(k);
                    } else w += x || "";
                    return w;
                }, n.parseInline = function(e, t) {
                    t = t || this.renderer;
                    var n, r, i, o = "", a = e.length;
                    for (n = 0; n < a; n++) if (r = e[n], !(this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) || !1 === (i = this.options.extensions.renderers[r.type].call({
                        parser: this
                    }, r)) && [ "escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text" ].includes(r.type)) switch (r.type) {
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
                        var u = 'Token with "' + r.type + '" type was not found.';
                        if (this.options.silent) return;
                        throw new Error(u);
                    } else o += i || "";
                    return o;
                }, t;
            }();
            A.options = A.setOptions = function(e) {
                return d(A.defaults, e), u(A.defaults), A;
            }, A.getDefaults = a, A.defaults = e.defaults, A.use = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r, i = d.apply(void 0, [ {} ].concat(t)), o = A.defaults.extensions || {
                    renderers: {},
                    childTokens: {}
                };
                t.forEach(function(e) {
                    if (e.extensions && (r = !0, e.extensions.forEach(function(e) {
                        if (!e.name) throw new Error("extension name required");
                        if (e.renderer) {
                            var t = o.renderers ? o.renderers[e.name] : null;
                            o.renderers[e.name] = t ? function() {
                                for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                var o = e.renderer.apply(this, r);
                                return !1 === o && (o = t.apply(this, r)), o;
                            } : e.renderer;
                        }
                        if (e.tokenizer) {
                            if (!e.level || "block" !== e.level && "inline" !== e.level) throw new Error("extension level must be 'block' or 'inline'");
                            o[e.level] ? o[e.level].unshift(e.tokenizer) : o[e.level] = [ e.tokenizer ], 
                            e.start && ("block" === e.level ? o.startBlock ? o.startBlock.push(e.start) : o.startBlock = [ e.start ] : "inline" === e.level && (o.startInline ? o.startInline.push(e.start) : o.startInline = [ e.start ]));
                        }
                        e.childTokens && (o.childTokens[e.name] = e.childTokens);
                    })), e.renderer && function() {
                        var t = A.defaults.renderer || new Q();
                        for (var n in e.renderer) !function(n) {
                            var r = t[n];
                            t[n] = function() {
                                for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                                var u = e.renderer[n].apply(t, o);
                                return !1 === u && (u = r.apply(t, o)), u;
                            };
                        }(n);
                        i.renderer = t;
                    }(), e.tokenizer && function() {
                        var t = A.defaults.tokenizer || new M();
                        for (var n in e.tokenizer) !function(n) {
                            var r = t[n];
                            t[n] = function() {
                                for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                                var u = e.tokenizer[n].apply(t, o);
                                return !1 === u && (u = r.apply(t, o)), u;
                            };
                        }(n);
                        i.tokenizer = t;
                    }(), e.walkTokens) {
                        var t = A.defaults.walkTokens;
                        i.walkTokens = function(n) {
                            e.walkTokens.call(this, n), t && t.call(this, n);
                        };
                    }
                    r && (i.extensions = o), A.setOptions(i);
                });
            }, A.walkTokens = function(e, t) {
                for (var n, r = o(e); !(n = r()).done; ) !function() {
                    var e = n.value;
                    switch (t.call(A, e), e.type) {
                      case "table":
                        for (var r, i = o(e.header); !(r = i()).done; ) {
                            var a = r.value;
                            A.walkTokens(a.tokens, t);
                        }
                        for (var u, s = o(e.rows); !(u = s()).done; ) for (var l, c = u.value, f = o(c); !(l = f()).done; ) {
                            var p = l.value;
                            A.walkTokens(p.tokens, t);
                        }
                        break;

                      case "list":
                        A.walkTokens(e.items, t);
                        break;

                      default:
                        A.defaults.extensions && A.defaults.extensions.childTokens && A.defaults.extensions.childTokens[e.type] ? A.defaults.extensions.childTokens[e.type].forEach(function(n) {
                            A.walkTokens(e[n], t);
                        }) : e.tokens && A.walkTokens(e.tokens, t);
                    }
                }();
            }, A.parseInline = function(e, t) {
                if (void 0 === e || null === e) throw new Error("marked.parseInline(): input parameter is undefined or null");
                if ("string" != typeof e) throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
                t = d({}, A.defaults, t || {}), m(t);
                try {
                    var n = U.lexInline(e, t);
                    return t.walkTokens && A.walkTokens(n, t.walkTokens), V.parseInline(n, t);
                } catch (e) {
                    if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", 
                    t.silent) return "<p>An error occurred:</p><pre>" + s(e.message + "", !0) + "</pre>";
                    throw e;
                }
            }, A.Parser = V, A.parser = V.parse, A.Renderer = Q, A.TextRenderer = q, 
            A.Lexer = U, A.lexer = U.lex, A.Tokenizer = M, A.Slugger = W, A.parse = A;
            var H = A.options, K = A.setOptions, Z = A.use, G = A.walkTokens, J = A.parseInline, X = A, Y = V.parse, ee = U.lex;
            e.Lexer = U, e.Parser = V, e.Renderer = Q, e.Slugger = W, e.TextRenderer = q, 
            e.Tokenizer = M, e.getDefaults = a, e.lexer = ee, e.marked = A, e.options = H, 
            e.parse = X, e.parseInline = J, e.parser = Y, e.setOptions = K, e.use = Z, 
            e.walkTokens = G, Object.defineProperty(e, "__esModule", {
                value: !0
            });
        });
    }, function(e, t, n) {
        "use strict";
        function r(e) {
            var t = {};
            return c(f(e), function(e) {
                var n = e[0], r = e[1];
                c(r, function(e) {
                    t[e] = n;
                });
            }), t;
        }
        function i(e, t) {
            var n = r(e.pluralTypeToLanguages);
            return n[t] || n[m.call(t, /-/, 1)[0]] || n.en;
        }
        function o(e, t, n) {
            return e.pluralTypes[t](n);
        }
        function a(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }
        function u(e) {
            var t = e && e.prefix || "%{", n = e && e.suffix || "}";
            if (t === y || n === y) throw new RangeError('"' + y + '" token is reserved for pluralization');
            return new RegExp(a(t) + "(.*?)" + a(n), "g");
        }
        function s(e, t, n, r, i) {
            if ("string" != typeof e) throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
            if (null == t) return e;
            var a = e, u = r || w, s = "number" == typeof t ? {
                smart_count: t
            } : t;
            if (null != s.smart_count && e) {
                var l = i || D, c = m.call(e, y), f = n || "en", p = x(l, f), v = o(l, p, s.smart_count);
                a = h(c[v] || c[0]);
            }
            return a = g.call(a, u, function(e, t) {
                return d(s, t) && null != s[t] ? s[t] : e;
            });
        }
        function l(e) {
            var t = e || {};
            this.phrases = {}, this.extend(t.phrases || {}), this.currentLocale = t.locale || "en";
            var n = t.allowMissing ? s : null;
            this.onMissingKey = "function" == typeof t.onMissingKey ? t.onMissingKey : n, 
            this.warn = t.warn || v, this.tokenRegex = u(t.interpolation), this.pluralRules = t.pluralRules || D;
        }
        var c = n(43), f = n(89), p = n(94), d = n(25), h = n(92), v = function(e) {
            p(!1, e);
        }, g = String.prototype.replace, m = String.prototype.split, y = "||||", b = function(e) {
            var t = e % 100, n = t % 10;
            return 11 !== t && 1 === n ? 0 : 2 <= n && n <= 4 && !(t >= 12 && t <= 14) ? 1 : 2;
        }, D = {
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
                return r && !t.pluralTypes[r] && (r = null, e[n] = r), r || (r = i(t, n)) && (e[n] = r), 
                r;
            };
        }(), w = /%\{(.*?)\}/g;
        l.prototype.locale = function(e) {
            return e && (this.currentLocale = e), this.currentLocale;
        }, l.prototype.extend = function(e, t) {
            c(f(e || {}), function(e) {
                var n = e[0], r = e[1], i = t ? t + "." + n : n;
                "object" == typeof r ? this.extend(r, i) : this.phrases[i] = r;
            }, this);
        }, l.prototype.unset = function(e, t) {
            "string" == typeof e ? delete this.phrases[e] : c(f(e || {}), function(e) {
                var n = e[0], r = e[1], i = t ? t + "." + n : n;
                "object" == typeof r ? this.unset(r, i) : delete this.phrases[i];
            }, this);
        }, l.prototype.clear = function() {
            this.phrases = {};
        }, l.prototype.replace = function(e) {
            this.clear(), this.extend(e);
        }, l.prototype.t = function(e, t) {
            var n, r, i = null == t ? {} : t;
            if ("string" == typeof this.phrases[e]) n = this.phrases[e]; else if ("string" == typeof i._) n = i._; else if (this.onMissingKey) {
                var o = this.onMissingKey;
                r = o(e, i, this.currentLocale, this.tokenRegex, this.pluralRules);
            } else this.warn('Missing translation for key: "' + e + '"'), r = e;
            return "string" == typeof n && (r = s(n, i, this.currentLocale, this.tokenRegex, this.pluralRules)), 
            r;
        }, l.prototype.has = function(e) {
            return d(this.phrases, e);
        }, l.transformPhrase = function(e, t, n) {
            return s(e, t, n);
        }, e.exports = l;
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
        var i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
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
            for (var n, u, s = r(e), l = 1; l < arguments.length; l++) {
                n = Object(arguments[l]);
                for (var c in n) o.call(n, c) && (s[c] = n[c]);
                if (i) {
                    u = i(n);
                    for (var f = 0; f < u.length; f++) a.call(n, u[f]) && (s[u[f]] = n[u[f]]);
                }
            }
            return s;
        };
    }, function(e, t, n) {
        function r(e, t) {
            if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || ne.call(/e/, t)) return t;
            var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
            if ("number" == typeof e) {
                var r = e < 0 ? -ae(-e) : ae(e);
                if (r !== e) {
                    var i = String(r), o = X.call(t, i.length + 1);
                    return Y.call(i, n, "$&_") + "." + Y.call(Y.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
                }
            }
            return Y.call(t, n, "$&_");
        }
        function i(e, t, n) {
            var r = "double" === (n.quoteStyle || t) ? '"' : "'";
            return r + e + r;
        }
        function o(e) {
            return Y.call(String(e), /"/g, "&quot;");
        }
        function a(e) {
            return !("[object Array]" !== g(e) || fe && "object" == typeof e && fe in e);
        }
        function u(e) {
            return !("[object Date]" !== g(e) || fe && "object" == typeof e && fe in e);
        }
        function s(e) {
            return !("[object RegExp]" !== g(e) || fe && "object" == typeof e && fe in e);
        }
        function l(e) {
            return !("[object Error]" !== g(e) || fe && "object" == typeof e && fe in e);
        }
        function c(e) {
            return !("[object String]" !== g(e) || fe && "object" == typeof e && fe in e);
        }
        function f(e) {
            return !("[object Number]" !== g(e) || fe && "object" == typeof e && fe in e);
        }
        function p(e) {
            return !("[object Boolean]" !== g(e) || fe && "object" == typeof e && fe in e);
        }
        function d(e) {
            if (ce) return e && "object" == typeof e && e instanceof Symbol;
            if ("symbol" == typeof e) return !0;
            if (!e || "object" != typeof e || !le) return !1;
            try {
                return le.call(e), !0;
            } catch (e) {}
            return !1;
        }
        function h(e) {
            if (!e || "object" != typeof e || !ue) return !1;
            try {
                return ue.call(e), !0;
            } catch (e) {}
            return !1;
        }
        function v(e, t) {
            return ge.call(e, t);
        }
        function g(e) {
            return Z.call(e);
        }
        function m(e) {
            if (e.name) return e.name;
            var t = J.call(G.call(e), /^function\s*([\w$]+)/);
            return t ? t[1] : null;
        }
        function y(e, t) {
            if (e.indexOf) return e.indexOf(t);
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
        }
        function b(e) {
            if (!z || !e || "object" != typeof e) return !1;
            try {
                z.call(e);
                try {
                    L.call(e);
                } catch (e) {
                    return !0;
                }
                return e instanceof Map;
            } catch (e) {}
            return !1;
        }
        function D(e) {
            if (!Q || !e || "object" != typeof e) return !1;
            try {
                Q.call(e, Q);
                try {
                    W.call(e, W);
                } catch (e) {
                    return !0;
                }
                return e instanceof WeakMap;
            } catch (e) {}
            return !1;
        }
        function x(e) {
            if (!H || !e || "object" != typeof e) return !1;
            try {
                return H.call(e), !0;
            } catch (e) {}
            return !1;
        }
        function w(e) {
            if (!L || !e || "object" != typeof e) return !1;
            try {
                L.call(e);
                try {
                    z.call(e);
                } catch (e) {
                    return !0;
                }
                return e instanceof Set;
            } catch (e) {}
            return !1;
        }
        function A(e) {
            if (!W || !e || "object" != typeof e) return !1;
            try {
                W.call(e, W);
                try {
                    Q.call(e, Q);
                } catch (e) {
                    return !0;
                }
                return e instanceof WeakSet;
            } catch (e) {}
            return !1;
        }
        function k(e) {
            return !(!e || "object" != typeof e) && ("undefined" != typeof HTMLElement && e instanceof HTMLElement || "string" == typeof e.nodeName && "function" == typeof e.getAttribute);
        }
        function E(e, t) {
            if (e.length > t.maxStringLength) {
                var n = e.length - t.maxStringLength, r = "... " + n + " more character" + (n > 1 ? "s" : "");
                return E(X.call(e, 0, t.maxStringLength), t) + r;
            }
            return i(Y.call(Y.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, F), "single", t);
        }
        function F(e) {
            var t = e.charCodeAt(0), n = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            }[t];
            return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + ee.call(t.toString(16));
        }
        function C(e) {
            return "Object(" + e + ")";
        }
        function _(e) {
            return e + " { ? }";
        }
        function S(e, t, n, r) {
            return e + " (" + t + ") {" + (r ? $(n, r) : ie.call(n, ", ")) + "}";
        }
        function O(e) {
            for (var t = 0; t < e.length; t++) if (y(e[t], "\n") >= 0) return !1;
            return !0;
        }
        function B(e, t) {
            var n;
            if ("\t" === e.indent) n = "\t"; else {
                if (!("number" == typeof e.indent && e.indent > 0)) return null;
                n = ie.call(Array(e.indent + 1), " ");
            }
            return {
                base: n,
                prev: ie.call(Array(t + 1), n)
            };
        }
        function $(e, t) {
            if (0 === e.length) return "";
            var n = "\n" + t.prev + t.base;
            return n + ie.call(e, "," + n) + "\n" + t.prev;
        }
        function j(e, t) {
            var n = a(e), r = [];
            if (n) {
                r.length = e.length;
                for (var i = 0; i < e.length; i++) r[i] = v(e, i) ? t(e[i], e) : "";
            }
            var o, u = "function" == typeof se ? se(e) : [];
            if (ce) {
                o = {};
                for (var s = 0; s < u.length; s++) o["$" + u[s]] = u[s];
            }
            for (var l in e) v(e, l) && (n && String(Number(l)) === l && l < e.length || ce && o["$" + l] instanceof Symbol || (ne.call(/[^\w$]/, l) ? r.push(t(l, e) + ": " + t(e[l], e)) : r.push(l + ": " + t(e[l], e))));
            if ("function" == typeof se) for (var c = 0; c < u.length; c++) pe.call(e, u[c]) && r.push("[" + t(u[c]) + "]: " + t(e[u[c]], e));
            return r;
        }
        var T = "function" == typeof Map && Map.prototype, I = Object.getOwnPropertyDescriptor && T ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, z = T && I && "function" == typeof I.get ? I.get : null, R = T && Map.prototype.forEach, P = "function" == typeof Set && Set.prototype, M = Object.getOwnPropertyDescriptor && P ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, L = P && M && "function" == typeof M.get ? M.get : null, N = P && Set.prototype.forEach, U = "function" == typeof WeakMap && WeakMap.prototype, Q = U ? WeakMap.prototype.has : null, q = "function" == typeof WeakSet && WeakSet.prototype, W = q ? WeakSet.prototype.has : null, V = "function" == typeof WeakRef && WeakRef.prototype, H = V ? WeakRef.prototype.deref : null, K = Boolean.prototype.valueOf, Z = Object.prototype.toString, G = Function.prototype.toString, J = String.prototype.match, X = String.prototype.slice, Y = String.prototype.replace, ee = String.prototype.toUpperCase, te = String.prototype.toLowerCase, ne = RegExp.prototype.test, re = Array.prototype.concat, ie = Array.prototype.join, oe = Array.prototype.slice, ae = Math.floor, ue = "function" == typeof BigInt ? BigInt.prototype.valueOf : null, se = Object.getOwnPropertySymbols, le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null, ce = "function" == typeof Symbol && "object" == typeof Symbol.iterator, fe = "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === ce ? "object" : "symbol") ? Symbol.toStringTag : null, pe = Object.prototype.propertyIsEnumerable, de = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__;
        } : null), he = n(102).custom, ve = he && d(he) ? he : null;
        e.exports = function e(t, n, F, T) {
            function I(t, n, r) {
                if (n && (T = oe.call(T), T.push(n)), r) {
                    var i = {
                        depth: P.depth
                    };
                    return v(P, "quoteStyle") && (i.quoteStyle = P.quoteStyle), 
                    e(t, i, F + 1, T);
                }
                return e(t, P, F + 1, T);
            }
            var P = n || {};
            if (v(P, "quoteStyle") && "single" !== P.quoteStyle && "double" !== P.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
            if (v(P, "maxStringLength") && ("number" == typeof P.maxStringLength ? P.maxStringLength < 0 && P.maxStringLength !== 1 / 0 : null !== P.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
            var M = !v(P, "customInspect") || P.customInspect;
            if ("boolean" != typeof M && "symbol" !== M) throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
            if (v(P, "indent") && null !== P.indent && "\t" !== P.indent && !(parseInt(P.indent, 10) === P.indent && P.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
            if (v(P, "numericSeparator") && "boolean" != typeof P.numericSeparator) throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
            var U = P.numericSeparator;
            if (void 0 === t) return "undefined";
            if (null === t) return "null";
            if ("boolean" == typeof t) return t ? "true" : "false";
            if ("string" == typeof t) return E(t, P);
            if ("number" == typeof t) {
                if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
                var Q = String(t);
                return U ? r(t, Q) : Q;
            }
            if ("bigint" == typeof t) {
                var q = String(t) + "n";
                return U ? r(t, q) : q;
            }
            var W = void 0 === P.depth ? 5 : P.depth;
            if (void 0 === F && (F = 0), F >= W && W > 0 && "object" == typeof t) return a(t) ? "[Array]" : "[Object]";
            var V = B(P, F);
            if (void 0 === T) T = []; else if (y(T, t) >= 0) return "[Circular]";
            if ("function" == typeof t) {
                var H = m(t), Z = j(t, I);
                return "[Function" + (H ? ": " + H : " (anonymous)") + "]" + (Z.length > 0 ? " { " + ie.call(Z, ", ") + " }" : "");
            }
            if (d(t)) {
                var G = ce ? Y.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : le.call(t);
                return "object" != typeof t || ce ? G : C(G);
            }
            if (k(t)) {
                for (var J = "<" + te.call(String(t.nodeName)), ee = t.attributes || [], ne = 0; ne < ee.length; ne++) J += " " + ee[ne].name + "=" + i(o(ee[ne].value), "double", P);
                return J += ">", t.childNodes && t.childNodes.length && (J += "..."), 
                J += "</" + te.call(String(t.nodeName)) + ">";
            }
            if (a(t)) {
                if (0 === t.length) return "[]";
                var ae = j(t, I);
                return V && !O(ae) ? "[" + $(ae, V) + "]" : "[ " + ie.call(ae, ", ") + " ]";
            }
            if (l(t)) {
                var se = j(t, I);
                return "cause" in t && !pe.call(t, "cause") ? "{ [" + String(t) + "] " + ie.call(re.call("[cause]: " + I(t.cause), se), ", ") + " }" : 0 === se.length ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + ie.call(se, ", ") + " }";
            }
            if ("object" == typeof t && M) {
                if (ve && "function" == typeof t[ve]) return t[ve]();
                if ("symbol" !== M && "function" == typeof t.inspect) return t.inspect();
            }
            if (b(t)) {
                var he = [];
                return R.call(t, function(e, n) {
                    he.push(I(n, t, !0) + " => " + I(e, t));
                }), S("Map", z.call(t), he, V);
            }
            if (w(t)) {
                var ge = [];
                return N.call(t, function(e) {
                    ge.push(I(e, t));
                }), S("Set", L.call(t), ge, V);
            }
            if (D(t)) return _("WeakMap");
            if (A(t)) return _("WeakSet");
            if (x(t)) return _("WeakRef");
            if (f(t)) return C(I(Number(t)));
            if (h(t)) return C(I(ue.call(t)));
            if (p(t)) return C(K.call(t));
            if (c(t)) return C(I(String(t)));
            if (!u(t) && !s(t)) {
                var me = j(t, I), ye = de ? de(t) === Object.prototype : t instanceof Object || t.constructor === Object, be = t instanceof Object ? "" : "null prototype", De = !ye && fe && Object(t) === t && fe in t ? X.call(g(t), 8, -1) : be ? "Object" : "", xe = ye || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "", we = xe + (De || be ? "[" + ie.call(re.call([], De || [], be || []), ": ") + "] " : "");
                return 0 === me.length ? we + "{}" : V ? we + "{" + $(me, V) + "}" : we + "{ " + ie.call(me, ", ") + " }";
            }
            return String(t);
        };
        var ge = Object.prototype.hasOwnProperty || function(e) {
            return e in this;
        };
    }, function(e, t, n) {
        "use strict";
        var r;
        if (!Object.keys) {
            var i = Object.prototype.hasOwnProperty, o = Object.prototype.toString, a = n(26), u = Object.prototype.propertyIsEnumerable, s = !u.call({
                toString: null
            }, "toString"), l = u.call(function() {}, "prototype"), c = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ], f = function(e) {
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
                    if (!p["$" + e] && i.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
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
                var t = null !== e && "object" == typeof e, n = "[object Function]" === o.call(e), r = a(e), u = t && "[object String]" === o.call(e), f = [];
                if (!t && !n && !r) throw new TypeError("Object.keys called on a non-object");
                var p = l && n;
                if (u && e.length > 0 && !i.call(e, 0)) for (var d = 0; d < e.length; ++d) f.push(String(d));
                if (r && e.length > 0) for (var v = 0; v < e.length; ++v) f.push(String(v)); else for (var g in e) p && "prototype" === g || !i.call(e, g) || f.push(String(g));
                if (s) for (var m = h(e), y = 0; y < c.length; ++y) m && "constructor" === c[y] || !i.call(e, c[y]) || f.push(c[y]);
                return f;
            };
        }
        e.exports = r;
    }, function(e, t, n) {
        "use strict";
        var r = Array.prototype.slice, i = n(26), o = Object.keys, a = o ? function(e) {
            return o(e);
        } : n(87), u = Object.keys;
        a.shim = function() {
            if (Object.keys) {
                (function() {
                    var e = Object.keys(arguments);
                    return e && e.length === arguments.length;
                })(1, 2) || (Object.keys = function(e) {
                    return u(i(e) ? r.call(e) : e);
                });
            } else Object.keys = a;
            return Object.keys || a;
        }, e.exports = a;
    }, function(e, t, n) {
        "use strict";
        var r = n(2), i = n(4), o = n(27), a = n(28), u = n(90), s = i(a(), Object);
        r(s, {
            getPolyfill: a,
            implementation: o,
            shim: u
        }), e.exports = s;
    }, function(e, t, n) {
        "use strict";
        var r = n(28), i = n(2);
        e.exports = function() {
            var e = r();
            return i(Object, {
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
        function i(e) {
            if (c === setTimeout) return setTimeout(e, 0);
            if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
            try {
                return c(e, 0);
            } catch (t) {
                try {
                    return c.call(null, e, 0);
                } catch (t) {
                    return c.call(this, e, 0);
                }
            }
        }
        function o(e) {
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
            v && d && (v = !1, d.length ? h = d.concat(h) : g = -1, h.length && u());
        }
        function u() {
            if (!v) {
                var e = i(a);
                v = !0;
                for (var t = h.length; t; ) {
                    for (d = h, h = []; ++g < t; ) d && d[g].run();
                    g = -1, t = h.length;
                }
                d = null, v = !1, o(e);
            }
        }
        function s(e, t) {
            this.fun = e, this.array = t;
        }
        function l() {}
        var c, f, p = e.exports = {};
        !function() {
            try {
                c = "function" == typeof setTimeout ? setTimeout : n;
            } catch (e) {
                c = n;
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
            h.push(new s(e, t)), 1 !== h.length || v || i(u);
        }, s.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", 
        p.versions = {}, p.on = l, p.addListener = l, p.once = l, p.off = l, p.removeListener = l, 
        p.removeAllListeners = l, p.emit = l, p.prependListener = l, p.prependOnceListener = l, 
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
        var r = n(4), i = n(2), o = n(29), a = n(30), u = n(93), s = r(a());
        i(s, {
            getPolyfill: a,
            implementation: o,
            shim: u
        }), e.exports = s;
    }, function(e, t, n) {
        "use strict";
        var r = n(2), i = n(30);
        e.exports = function() {
            var e = i();
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
                var i = function(e, t) {
                    var n = arguments.length;
                    t = new Array(n > 1 ? n - 1 : 0);
                    for (var r = 1; r < n; r++) t[r - 1] = arguments[r];
                    var i = 0, o = "Warning: " + e.replace(/%s/g, function() {
                        return t[i++];
                    });
                    try {
                        throw new Error(o);
                    } catch (e) {}
                };
                r = function(e, t, n) {
                    var r = arguments.length;
                    n = new Array(r > 2 ? r - 2 : 0);
                    for (var o = 2; o < r; o++) n[o - 2] = arguments[o];
                    if (void 0 === t) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
                    e || i.apply(null, [ t ].concat(n));
                };
            }
            e.exports = r;
        }).call(t, n(91));
    }, function(e, t, n) {
        function r(e, t) {
            return new a(t).process(e);
        }
        var i = n(31), o = n(32), a = n(96);
        t = e.exports = r, t.filterXSS = r, t.FilterXSS = a;
        for (var u in i) t[u] = i[u];
        for (var u in o) t[u] = o[u];
        "undefined" != typeof window && (window.filterXSS = e.exports), function() {
            return "undefined" != typeof self && "undefined" != typeof DedicatedWorkerGlobalScope && self instanceof DedicatedWorkerGlobalScope;
        }() && (self.filterXSS = e.exports);
    }, function(e, t, n) {
        function r(e) {
            return void 0 === e || null === e;
        }
        function i(e) {
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
        function o(e) {
            var t = {};
            for (var n in e) t[n] = e[n];
            return t;
        }
        function a(e) {
            e = o(e || {}), e.stripIgnoreTag && (e.onIgnoreTag, e.onIgnoreTag = s.onIgnoreTagStripAll), 
            e.whiteList = e.whiteList || e.allowList || s.whiteList, e.onTag = e.onTag || s.onTag, 
            e.onTagAttr = e.onTagAttr || s.onTagAttr, e.onIgnoreTag = e.onIgnoreTag || s.onIgnoreTag, 
            e.onIgnoreTagAttr = e.onIgnoreTagAttr || s.onIgnoreTagAttr, e.safeAttrValue = e.safeAttrValue || s.safeAttrValue, 
            e.escapeHtml = e.escapeHtml || s.escapeHtml, this.options = e, !1 === e.css ? this.cssFilter = !1 : (e.css = e.css || {}, 
            this.cssFilter = new u(e.css));
        }
        var u = n(7).FilterCSS, s = n(31), l = n(32), c = l.parseTag, f = l.parseAttr, p = n(11);
        a.prototype.process = function(e) {
            if (e = e || "", !(e = e.toString())) return "";
            var t = this, n = t.options, o = n.whiteList, a = n.onTag, u = n.onIgnoreTag, l = n.onTagAttr, d = n.onIgnoreTagAttr, h = n.safeAttrValue, v = n.escapeHtml, g = t.cssFilter;
            n.stripBlankChar && (e = s.stripBlankChar(e)), n.allowCommentTag || (e = s.stripCommentTag(e));
            var m = !1;
            if (n.stripIgnoreTagBody) {
                var m = s.StripTagBody(n.stripIgnoreTagBody, u);
                u = m.onIgnoreTag;
            }
            var y = c(e, function(e, t, n, s, c) {
                var m = {
                    sourcePosition: e,
                    position: t,
                    isClosing: c,
                    isWhite: o.hasOwnProperty(n)
                }, y = a(n, s, m);
                if (!r(y)) return y;
                if (m.isWhite) {
                    if (m.isClosing) return "</" + n + ">";
                    var b = i(s), D = o[n], x = f(b.html, function(e, t) {
                        var i = -1 !== p.indexOf(D, e), o = l(n, e, t, i);
                        if (!r(o)) return o;
                        if (i) return t = h(n, e, t, g), t ? e + '="' + t + '"' : e;
                        var o = d(n, e, t, i);
                        return r(o) ? void 0 : o;
                    }), s = "<" + n;
                    return x && (s += " " + x), b.closing && (s += " /"), s += ">";
                }
                var y = u(n, s, m);
                return r(y) ? v(s) : y;
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
        var r = n(104);
        "string" == typeof r && (r = [ [ e.i, r, "" ] ]);
        var i = {};
        i.transform = void 0;
        n(106)(r, i);
        r.locals && (e.exports = r.locals);
    }, function(e, t, n) {
        t = n(105)(!1), t.push([ e.i, '.v[data-class=v]{font-size:16px;text-align:left}.v[data-class=v] *{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.75}.v[data-class=v] .vinput,.v[data-class=v] .veditor,.v[data-class=v] p,.v[data-class=v] pre code,.v[data-class=v] .status-bar{color:#555}.v[data-class=v] .vtime,.v[data-class=v] .vsys{color:#b3b3b3}.v[data-class=v] .text-right{text-align:right}.v[data-class=v] .text-center{text-align:center}.v[data-class=v] img{max-width:100%;border:none}.v[data-class=v] hr{margin:.825em 0;border-color:#f6f6f6;border-style:dashed}.v[data-class=v].hide-avatar .vimg{display:none}.v[data-class=v] a{position:relative;cursor:pointer;color:#1abc9c;text-decoration:none;display:inline-block}.v[data-class=v] a:hover{color:#d7191a}.v[data-class=v] pre,.v[data-class=v] code{background-color:#f8f8f8;padding:.2em .4em;border-radius:3px;font-size:85%;margin:0}.v[data-class=v] pre{padding:10px;overflow:auto;line-height:1.45}.v[data-class=v] pre code{padding:0;background:transparent;white-space:pre-wrap;word-break:keep-all}.v[data-class=v] blockquote{color:#666;margin:.5em 0;padding:0 0 0 1em;border-left:8px solid rgba(238,238,238,.5)}.v[data-class=v] .vinput{border:none;resize:none;outline:none;padding:10px 5px;max-width:100%;font-size:.775em;-webkit-box-sizing:border-box;box-sizing:border-box}.v[data-class=v] input[type=checkbox],.v[data-class=v] input[type=radio]{display:inline-block;vertical-align:middle;margin-top:-2px}.v[data-class=v] .vicon{cursor:pointer;display:inline-block;overflow:hidden;fill:#555;vertical-align:middle}.v[data-class=v] .vicon+.vicon{margin-left:10px}.v[data-class=v] .vicon.actived{fill:#66b1ff}.v[data-class=v] .vrow{font-size:0;padding:10px 0}.v[data-class=v] .vrow .vcol{display:inline-block;vertical-align:middle;font-size:14px}.v[data-class=v] .vrow .vcol.vcol-20{width:20%}.v[data-class=v] .vrow .vcol.vcol-30{width:30%}.v[data-class=v] .vrow .vcol.vcol-40{width:40%}.v[data-class=v] .vrow .vcol.vcol-50{width:50%}.v[data-class=v] .vrow .vcol.vcol-60{width:60%}.v[data-class=v] .vrow .vcol.vcol-70{width:70%}.v[data-class=v] .vrow .vcol.vcol-80{width:80%}.v[data-class=v] .vrow .vcol.vctrl{font-size:12px}.v[data-class=v] .vemoji,.v[data-class=v] .emoji{width:26px;height:26px;overflow:hidden;vertical-align:middle;margin:0 1px;display:inline-block}.v[data-class=v] .vwrap{border:1px solid #f0f0f0;border-radius:4px;margin-bottom:10px;overflow:hidden;position:relative;padding:10px}.v[data-class=v] .vwrap input{background:transparent}.v[data-class=v] .vwrap .vedit{position:relative;padding-top:10px}.v[data-class=v] .vwrap .cancel-reply-btn{position:absolute;right:5px;top:5px;cursor:pointer}.v[data-class=v] .vwrap .vemojis{display:none;font-size:18px;max-height:145px;overflow:auto;padding-bottom:10px;-webkit-box-shadow:0px 0 1px #f0f0f0;box-shadow:0px 0 1px #f0f0f0}.v[data-class=v] .vwrap .vemojis i{font-style:normal;padding-top:7px;width:36px;cursor:pointer;text-align:center;display:inline-block;vertical-align:middle}.v[data-class=v] .vwrap .vpreview{padding:7px;-webkit-box-shadow:0px 0 1px #f0f0f0;box-shadow:0px 0 1px #f0f0f0}.v[data-class=v] .vwrap .vheader .vinput{width:33.33%;border-bottom:1px #dedede dashed}.v[data-class=v] .vwrap .vheader.item2 .vinput{width:50%}.v[data-class=v] .vwrap .vheader.item1 .vinput{width:100%}.v[data-class=v] .vwrap .vheader .vinput:focus{border-bottom-color:#eb5055}@media screen and (max-width: 520px){.v[data-class=v] .vwrap .vheader .vinput{width:100%}.v[data-class=v] .vwrap .vheader.item2 .vinput{width:100%}}.v[data-class=v] .vpower{color:#999;font-size:.75em;padding:.5em 0}.v[data-class=v] .vpower a{font-size:.75em}.v[data-class=v] .vcount{padding:5px;font-weight:600;font-size:1.25em}.v[data-class=v] ul,.v[data-class=v] ol{padding:0;margin-left:1.25em}.v[data-class=v] .txt-center{text-align:center}.v[data-class=v] .txt-right{text-align:right}.v[data-class=v] .veditor{width:100%;min-height:8.75em;font-size:.875em;background:transparent;resize:vertical;-webkit-transition:all .25s ease;transition:all .25s ease}.v[data-class=v] .vbtn{-webkit-transition-duration:.4s;transition-duration:.4s;text-align:center;color:#555;border:1px solid #ededed;border-radius:.3em;display:inline-block;background:transparent;margin-bottom:0;font-weight:400;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;white-space:nowrap;padding:.5em 1.25em;font-size:.875em;line-height:1.42857143;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v[data-class=v] .vbtn+.vbtn{margin-left:1.25em}.v[data-class=v] .vbtn:active,.v[data-class=v] .vbtn:hover{color:#3090e4;border-color:#3090e4}.v[data-class=v] .vbtn:disabled{border-color:#e1e1e1;color:#e1e1e1;background-color:#fdfafa;cursor:not-allowed}.v[data-class=v] .vempty{padding:1.25em;text-align:center;color:#555;overflow:auto}.v[data-class=v] .vsys{display:inline-block;padding:.2em .5em;font-size:.75em;border-radius:.2em;margin-right:.3em}@media screen and (max-width: 520px){.v[data-class=v] .vsys{display:none}}.v[data-class=v] .vcards{width:100%}.v[data-class=v] .vcards .vcard{padding-top:1.25em;position:relative;display:block}.v[data-class=v] .vcards .vcard:after{content:"";clear:both;display:block}.v[data-class=v] .vcards .vcard .vimg{width:3.125em;height:3.125em;float:left;border-radius:50%;margin-right:.7525em;border:1px solid #f5f5f5;padding:.125em}@media screen and (max-width: 720px){.v[data-class=v] .vcards .vcard .vimg{width:2.5em;height:2.5em}}.v[data-class=v] .vcards .vcard .vhead{line-height:1.5;margin-top:0}.v[data-class=v] .vcards .vcard .vhead .vtag{font-size:12px;display:inline-block;line-height:20px;border-radius:2px;color:#fff;padding:0 5px;position:inherit;margin-left:-5px;} .vcards .vcard .vhead .vtag.vmaster{background:#ffa51e} .vcards .vcard .vhead .vtag.vfriend{background:#6cf} .vcards .vcard .vhead .vtag.vvisitor{background:#828282} .vcards .vcard .vhead .browser-icon, .vcards .vcard .vhead .os-icon{margin-right:3px;} .vcards .vcard .vhead .vnick{position:relative;font-size:.875em;font-weight:500;margin-right:.875em;cursor:pointer;text-decoration:none;display:inline-block}.v[data-class=v] .vcards .vcard .vhead .vnick:hover{color:#d7191a}.v[data-class=v] .vcards .vcard .vh{overflow:hidden;padding-bottom:.5em;border-bottom:1px dashed #f5f5f5}.v[data-class=v] .vcards .vcard .vh .vtime{font-size:.75em;margin-right:.875em}.v[data-class=v] .vcards .vcard .vh .vmeta{line-height:1;position:relative}.v[data-class=v] .vcards .vcard .vh .vmeta .vat{font-size:.8125em;color:#ef2f11;cursor:pointer;float:right}.v[data-class=v] .vcards .vcard:last-child .vh{border-bottom:none}.v[data-class=v] .vcards .vcard .vcontent{word-wrap:break-word;word-break:break-all;font-size:.875em;line-height:2;position:relative;margin-bottom:.75em;padding-top:.625em}.v[data-class=v] .vcards .vcard .vcontent.expand{cursor:pointer;max-height:8em;overflow:hidden}.v[data-class=v] .vcards .vcard .vcontent.expand::before{display:block;content:"";position:absolute;width:100%;left:0;top:0;bottom:3.15em;background:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 0.9)));background:linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9));z-index:999}.v[data-class=v] .vcards .vcard .vcontent.expand::after{display:block;content:attr(data-expand);text-align:center;color:#828586;position:absolute;width:100%;height:3.15em;line-height:3.15em;left:0;bottom:0;z-index:999;background:rgba(255,255,255,.9)}.v[data-class=v] .vcards .vcard .vquote{padding-left:1em;border-left:1px dashed rgba(238,238,238,.5)}.v[data-class=v] .vcards .vcard .vquote .vimg{width:2.225em;height:2.225em}.v[data-class=v] .vpage .vmore{margin:1em 0}.v[data-class=v] .clear{content:"";display:block;clear:both}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes pulse{50%{background:#dcdcdc}}@keyframes pulse{50%{background:#dcdcdc}}.v[data-class=v] .vspinner{width:22px;height:22px;display:inline-block;border:6px double #a0a0a0;border-top-color:transparent;border-bottom-color:transparent;border-radius:50%;-webkit-animation:spin 1s infinite linear;animation:spin 1s infinite linear;position:relative;vertical-align:middle;margin:0 5px}[data-theme=dark] .v[data-class=v] .vinput,[data-theme=dark] .v[data-class=v] .veditor,[data-theme=dark] .v[data-class=v] p,[data-theme=dark] .v[data-class=v] pre code,[data-theme=dark] .v[data-class=v] .status-bar,.dark .v[data-class=v] .vinput,.dark .v[data-class=v] .veditor,.dark .v[data-class=v] p,.dark .v[data-class=v] pre code,.dark .v[data-class=v] .status-bar,.theme__dark .v[data-class=v] .vinput,.theme__dark .v[data-class=v] .veditor,.theme__dark .v[data-class=v] p,.theme__dark .v[data-class=v] pre code,.theme__dark .v[data-class=v] .status-bar,.night .v[data-class=v] .vinput,.night .v[data-class=v] .veditor,.night .v[data-class=v] p,.night .v[data-class=v] pre code,.night .v[data-class=v] .status-bar{color:#b2b2b5}[data-theme=dark] .v[data-class=v] .vtime,[data-theme=dark] .v[data-class=v] .vsys,.dark .v[data-class=v] .vtime,.dark .v[data-class=v] .vsys,.theme__dark .v[data-class=v] .vtime,.theme__dark .v[data-class=v] .vsys,.night .v[data-class=v] .vtime,.night .v[data-class=v] .vsys{color:#929298}[data-theme=dark] .v[data-class=v] pre,[data-theme=dark] .v[data-class=v] code,[data-theme=dark] .v[data-class=v] pre code,.dark .v[data-class=v] pre,.dark .v[data-class=v] code,.dark .v[data-class=v] pre code,.theme__dark .v[data-class=v] pre,.theme__dark .v[data-class=v] code,.theme__dark .v[data-class=v] pre code,.night .v[data-class=v] pre,.night .v[data-class=v] code,.night .v[data-class=v] pre code{color:#929298;background-color:#151414}[data-theme=dark] .v[data-class=v] .vwrap,.dark .v[data-class=v] .vwrap,.theme__dark .v[data-class=v] .vwrap,.night .v[data-class=v] .vwrap{border-color:#b2b2b5}[data-theme=dark] .v[data-class=v] .vicon,.dark .v[data-class=v] .vicon,.theme__dark .v[data-class=v] .vicon,.night .v[data-class=v] .vicon{fill:#b2b2b5}[data-theme=dark] .v[data-class=v] .vicon.actived,.dark .v[data-class=v] .vicon.actived,.theme__dark .v[data-class=v] .vicon.actived,.night .v[data-class=v] .vicon.actived{fill:#66b1ff}[data-theme=dark] .v[data-class=v] .vbtn,.dark .v[data-class=v] .vbtn,.theme__dark .v[data-class=v] .vbtn,.night .v[data-class=v] .vbtn{color:#b2b2b5;border-color:#b2b2b5}[data-theme=dark] .v[data-class=v] .vbtn:hover,.dark .v[data-class=v] .vbtn:hover,.theme__dark .v[data-class=v] .vbtn:hover,.night .v[data-class=v] .vbtn:hover{color:#66b1ff;border-color:#66b1ff}[data-theme=dark] .v[data-class=v] a:hover,.dark .v[data-class=v] a:hover,.theme__dark .v[data-class=v] a:hover,.night .v[data-class=v] a:hover{color:#d7191a}[data-theme=dark] .v[data-class=v] .vcards .vcard .vcontent.expand::before,.dark .v[data-class=v] .vcards .vcard .vcontent.expand::before,.theme__dark .v[data-class=v] .vcards .vcard .vcontent.expand::before,.night .v[data-class=v] .vcards .vcard .vcontent.expand::before{background:-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0.7)));background:linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))}[data-theme=dark] .v[data-class=v] .vcards .vcard .vcontent.expand::after,.dark .v[data-class=v] .vcards .vcard .vcontent.expand::after,.theme__dark .v[data-class=v] .vcards .vcard .vcontent.expand::after,.night .v[data-class=v] .vcards .vcard .vcontent.expand::after{background:rgba(0,0,0,.7)}@media(prefers-color-scheme: dark){.v[data-class=v] .vinput,.v[data-class=v] .veditor,.v[data-class=v] p,.v[data-class=v] pre code,.v[data-class=v] .status-bar{color:#b2b2b5}.v[data-class=v] .vtime,.v[data-class=v] .vsys{color:#929298}.v[data-class=v] pre,.v[data-class=v] code,.v[data-class=v] pre code{color:#929298;background-color:#151414}.v[data-class=v] .vwrap{border-color:#b2b2b5}.v[data-class=v] .vicon{fill:#b2b2b5}.v[data-class=v] .vicon.actived{fill:#66b1ff}.v[data-class=v] .vbtn{color:#b2b2b5;border-color:#b2b2b5}.v[data-class=v] .vbtn:hover{color:#66b1ff;border-color:#66b1ff}.v[data-class=v] a:hover{color:#d7191a}.v[data-class=v] .vcards .vcard .vcontent.expand::before{background:-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.3)), to(rgba(0, 0, 0, 0.7)));background:linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))}.v[data-class=v] .vcards .vcard .vcontent.expand::after{background:rgba(0,0,0,.7)}}', "" ]), 
        e.exports = t;
    }, function(e, t, n) {
        "use strict";
        function r(e, t) {
            var n = e[1] || "", r = e[3];
            if (!r) return n;
            if (t && "function" == typeof btoa) {
                var o = i(r);
                return [ n ].concat(r.sources.map(function(e) {
                    return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
                })).concat([ o ]).join("\n");
            }
            return [ n ].join("\n");
        }
        function i(e) {
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
                var i = {};
                if (r) for (var o = 0; o < this.length; o++) {
                    var a = this[o][0];
                    null != a && (i[a] = !0);
                }
                for (var u = 0; u < e.length; u++) {
                    var s = [].concat(e[u]);
                    r && i[s[0]] || (n && (s[2] ? s[2] = "".concat(n, " and ").concat(s[2]) : s[2] = n), 
                    t.push(s));
                }
            }, t;
        };
    }, function(e, t, n) {
        function r(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n], i = h[r.id];
                if (i) {
                    i.refs++;
                    for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
                    for (;o < r.parts.length; o++) i.parts.push(c(r.parts[o], t));
                } else {
                    for (var a = [], o = 0; o < r.parts.length; o++) a.push(c(r.parts[o], t));
                    h[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: a
                    };
                }
            }
        }
        function i(e, t) {
            for (var n = [], r = {}, i = 0; i < e.length; i++) {
                var o = e[i], a = t.base ? o[0] + t.base : o[0], u = o[1], s = o[2], l = o[3], c = {
                    css: u,
                    media: s,
                    sourceMap: l
                };
                r[a] ? r[a].parts.push(c) : n.push(r[a] = {
                    id: a,
                    parts: [ c ]
                });
            }
            return n;
        }
        function o(e, t) {
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
        function u(e) {
            var t = document.createElement("style");
            return e.attrs.type = "text/css", l(t, e.attrs), o(e, t), t;
        }
        function s(e) {
            var t = document.createElement("link");
            return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", l(t, e.attrs), 
            o(e, t), t;
        }
        function l(e, t) {
            Object.keys(t).forEach(function(n) {
                e.setAttribute(n, t[n]);
            });
        }
        function c(e, t) {
            var n, r, i, o;
            if (t.transform && e.css) {
                if (!(o = t.transform(e.css))) return function() {};
                e.css = o;
            }
            if (t.singleton) {
                var l = y++;
                n = m || (m = u(t)), r = f.bind(null, n, l, !1), i = f.bind(null, n, l, !0);
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = s(t), 
            r = d.bind(null, n, t), i = function() {
                a(n), n.href && URL.revokeObjectURL(n.href);
            }) : (n = u(t), r = p.bind(null, n), i = function() {
                a(n);
            });
            return r(e), function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t);
                } else i();
            };
        }
        function f(e, t, n, r) {
            var i = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = x(t, i); else {
                var o = document.createTextNode(i), a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
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
            var r = n.css, i = n.sourceMap, o = void 0 === t.convertToAbsoluteUrls && i;
            (t.convertToAbsoluteUrls || o) && (r = D(r)), i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var a = new Blob([ r ], {
                type: "text/css"
            }), u = e.href;
            e.href = URL.createObjectURL(a), u && URL.revokeObjectURL(u);
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
        }), m = null, y = 0, b = [], D = n(107);
        e.exports = function(e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            t = t || {}, t.attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = v()), 
            t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var n = i(e, t);
            return r(n, t), function(e) {
                for (var o = [], a = 0; a < n.length; a++) {
                    var u = n[a], s = h[u.id];
                    s.refs--, o.push(s);
                }
                if (e) {
                    r(i(e, t), t);
                }
                for (var a = 0; a < o.length; a++) {
                    var s = o[a];
                    if (0 === s.refs) {
                        for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                        delete h[s.id];
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
                var i = t.trim().replace(/^"(.*)"$/, function(e, t) {
                    return t;
                }).replace(/^'(.*)'$/, function(e, t) {
                    return t;
                });
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)) return e;
                var o;
                return o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), 
                "url(" + JSON.stringify(o) + ")";
            });
        };
    }, function(e, t, n) {
        n(103), e.exports = n(34);
    } ]);
});