"use strict";
var origUrl = location.href,
    everPushed = !1;
window.JSON || (window.JSON = {}),
    function() {
        function f(t) {
            return 10 > t ? "0" + t : t
        }

        function quote(t) {
            return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) {
                var e = meta[t];
                return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + t + '"'
        }

        function str(t, e) {
            var a, n, r, i, o, s = gap,
                l = e[t];
            switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(t)), "function" == typeof rep && (l = rep.call(e, t, l)), typeof l) {
                case "string":
                    return quote(l);
                case "number":
                    return isFinite(l) ? String(l) : "null";
                case "boolean":
                case "null":
                    return String(l);
                case "object":
                    if (!l) return "null";
                    if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                        for (i = l.length, a = 0; i > a; a += 1) o[a] = str(a, l) || "null";
                        return r = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + s + "]" : "[" + o.join(",") + "]", gap = s, r
                    }
                    if (rep && "object" == typeof rep)
                        for (i = rep.length, a = 0; i > a; a += 1) n = rep[a], "string" == typeof n && (r = str(n, l), r && o.push(quote(n) + (gap ? ": " : ":") + r));
                    else
                        for (n in l) Object.hasOwnProperty.call(l, n) && (r = str(n, l), r && o.push(quote(n) + (gap ? ": " : ":") + r));
                    return r = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + s + "}" : "{" + o.join(",") + "}", gap = s, r
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var JSON = window.JSON,
            cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, a) {
            var n;
            if (gap = "", indent = "", "number" == typeof a)
                for (n = 0; a > n; n += 1) indent += " ";
            else "string" == typeof a && (indent = a);
            if (rep = e, !e || "function" == typeof e || "object" == typeof e && "number" == typeof e.length) return str("", {
                "": t
            });
            throw new Error("JSON.stringify")
        }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
            function walk(t, e) {
                var a, n, r = t[e];
                if (r && "object" == typeof r)
                    for (a in r) Object.hasOwnProperty.call(r, a) && (n = walk(r, a), void 0 !== n ? r[a] = n : delete r[a]);
                return reviver.call(t, e, r)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) {
                    return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(t, e) {
        var a = t.History = t.History || {},
            n = t.jQuery;
        if ("undefined" != typeof a.Adapter) throw new Error("History.js Adapter has already been loaded...");
        a.Adapter = {
            "bind": function(t, e, a) {
                n(t).bind(e, a)
            },
            "trigger": function(t, e, a) {
                n(t).trigger(e, a)
            },
            "extractEventData": function(t, a, n) {
                var r = a && a.originalEvent && a.originalEvent[t] || n && n[t] || e;
                return r
            },
            "onDomLoad": function(t) {
                n(t)
            }
        }, "undefined" != typeof a.init && a.init()
    }(window),
    function(t) {
        var e = t.document,
            a = t.setTimeout || a,
            n = t.clearTimeout || n,
            r = t.setInterval || r,
            i = t.History = t.History || {};
        if ("undefined" != typeof i.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
        i.initHtml4 = function() {
            return "undefined" != typeof i.initHtml4.initialized ? !1 : (i.initHtml4.initialized = !0, i.enabled = !0, i.savedHashes = [], i.isLastHash = function(t) {
                var e, a = i.getHashByIndex();
                return e = t === a
            }, i.saveHash = function(t) {
                return i.isLastHash(t) ? !1 : (i.savedHashes.push(t), !0)
            }, i.getHashByIndex = function(t) {
                var e = null;
                return e = "undefined" == typeof t ? i.savedHashes[i.savedHashes.length - 1] : 0 > t ? i.savedHashes[i.savedHashes.length + t] : i.savedHashes[t]
            }, i.discardedHashes = {}, i.discardedStates = {}, i.discardState = function(t, e, a) {
                var n, r = i.getHashByState(t);
                return n = {
                    "discardedState": t,
                    "backState": a,
                    "forwardState": e
                }, i.discardedStates[r] = n, !0
            }, i.discardHash = function(t, e, a) {
                var n = {
                    "discardedHash": t,
                    "backState": a,
                    "forwardState": e
                };
                return i.discardedHashes[t] = n, !0
            }, i.discardedState = function(t) {
                var e, a = i.getHashByState(t);
                return e = i.discardedStates[a] || !1
            }, i.discardedHash = function(t) {
                var e = i.discardedHashes[t] || !1;
                return e
            }, i.recycleState = function(t) {
                var e = i.getHashByState(t);
                return i.discardedState(t) && delete i.discardedStates[e], !0
            }, i.emulated.hashChange && (i.hashChangeInit = function() {
                i.checkerFunction = null;
                var a, n, o, s, l = "";
                return i.isInternetExplorer() ? (a = "historyjs-iframe", n = e.createElement("iframe"), n.setAttribute("id", a), n.style.display = "none", e.body.appendChild(n), n.contentWindow.document.open(), n.contentWindow.document.close(), o = "", s = !1, i.checkerFunction = function() {
                    if (s) return !1;
                    s = !0;
                    var e = i.getHash() || "",
                        a = i.unescapeHash(n.contentWindow.document.location.hash) || "";
                    return e !== l ? (l = e, a !== e && (o = a = e, n.contentWindow.document.open(), n.contentWindow.document.close(), n.contentWindow.document.location.hash = i.escapeHash(e)), i.Adapter.trigger(t, "hashchange")) : a !== o && (o = a, i.setHash(a, !1)), s = !1, !0
                }) : i.checkerFunction = function() {
                    var e = i.getHash();
                    return e !== l && (l = e, i.Adapter.trigger(t, "hashchange")), !0
                }, i.intervalList.push(r(i.checkerFunction, i.options.hashChangeInterval)), !0
            }, i.Adapter.onDomLoad(i.hashChangeInit)), i.emulated.pushState && (i.onHashChange = function(a) {
                var n, r = a && a.newURL || e.location.href,
                    o = i.getHashByUrl(r),
                    s = null,
                    l = null;
                return i.isLastHash(o) ? (i.busy(!1), !1) : (i.doubleCheckComplete(), i.saveHash(o), o && i.isTraditionalAnchor(o) ? (i.Adapter.trigger(t, "anchorchange"), i.busy(!1), !1) : (s = i.extractState(i.getFullUrl(o || e.location.href, !1), !0), i.isLastSavedState(s) ? (i.busy(!1), !1) : (l = i.getHashByState(s), n = i.discardedState(s), n ? (i.getHashByIndex(-2) === i.getHashByState(n.forwardState) ? i.back(!1) : i.forward(!1), !1) : (i.pushState(s.data, s.title, s.url, !1), !0))))
            }, i.Adapter.bind(t, "hashchange", i.onHashChange), i.pushState = function(a, n, r, o) {
                if (i.getHashByUrl(r)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (o !== !1 && i.busy()) return i.pushQueue({
                    "scope": i,
                    "callback": i.pushState,
                    "args": arguments,
                    "queue": o
                }), !1;
                i.busy(!0);
                var s = i.createStateObject(a, n, r),
                    l = i.getHashByState(s),
                    u = i.getState(!1),
                    c = i.getHashByState(u),
                    h = i.getHash();
                return i.storeState(s), i.expectedStateId = s.id, i.recycleState(s), i.setTitle(s), l === c ? (i.busy(!1), !1) : l !== h && l !== i.getShortUrl(e.location.href) ? (i.setHash(l, !1), !1) : (i.saveState(s), i.Adapter.trigger(t, "statechange"), i.busy(!1), !0)
            }, i.replaceState = function(t, e, a, n) {
                if (i.getHashByUrl(a)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (n !== !1 && i.busy()) return i.pushQueue({
                    "scope": i,
                    "callback": i.replaceState,
                    "args": arguments,
                    "queue": n
                }), !1;
                i.busy(!0);
                var r = i.createStateObject(t, e, a),
                    o = i.getState(!1),
                    s = i.getStateByIndex(-2);
                return i.discardState(o, r, s), i.pushState(r.data, r.title, r.url, !1), !0
            }), i.emulated.pushState && i.getHash() && !i.emulated.hashChange && i.Adapter.onDomLoad(function() {
                i.Adapter.trigger(t, "hashchange")
            }), void 0)
        }, "undefined" != typeof i.init && i.init()
    }(window),
    function(t, e) {
        var a = t.console || e,
            n = t.document,
            r = t.navigator,
            i = t.sessionStorage || !1,
            o = t.setTimeout,
            s = t.clearTimeout,
            l = t.setInterval,
            u = t.clearInterval,
            c = t.JSON,
            h = t.alert,
            d = t.History = t.History || {},
            f = t.history;
        if (c.stringify = c.stringify || c.encode, c.parse = c.parse || c.decode, "undefined" != typeof d.init) throw new Error("History.js Core has already been loaded...");
        d.init = function() {
            return "undefined" == typeof d.Adapter ? !1 : ("undefined" != typeof d.initCore && d.initCore(), "undefined" != typeof d.initHtml4 && d.initHtml4(), !0)
        }, d.initCore = function() {
            if ("undefined" != typeof d.initCore.initialized) return !1;
            if (d.initCore.initialized = !0, d.options = d.options || {}, d.options.hashChangeInterval = d.options.hashChangeInterval || 100, d.options.safariPollInterval = d.options.safariPollInterval || 500, d.options.doubleCheckInterval = d.options.doubleCheckInterval || 500, d.options.storeInterval = d.options.storeInterval || 1e3, d.options.busyDelay = d.options.busyDelay || 250, d.options.debug = d.options.debug || !1, d.options.initialTitle = d.options.initialTitle || n.title, d.intervalList = [], d.clearAllIntervals = function() {
                    var t, e = d.intervalList;
                    if ("undefined" != typeof e && null !== e) {
                        for (t = 0; t < e.length; t++) u(e[t]);
                        d.intervalList = null
                    }
                }, d.debug = function() {
                    (d.options.debug || !1) && d.log.apply(d, arguments)
                }, d.log = function() {
                    var t, e, r, i, o, s = "undefined" != typeof a && "undefined" != typeof a.log && "undefined" != typeof a.log.apply,
                        l = n.getElementById("log");
                    for (s ? (i = Array.prototype.slice.call(arguments), t = i.shift(), "undefined" != typeof a.debug ? a.debug.apply(a, [t, i]) : a.log.apply(a, [t, i])) : t = "\n" + arguments[0] + "\n", e = 1, r = arguments.length; r > e; ++e) {
                        if (o = arguments[e], "object" == typeof o && "undefined" != typeof c) try {
                            o = c.stringify(o)
                        } catch (u) {}
                        t += "\n" + o + "\n"
                    }
                    return l ? (l.value += t + "\n-----\n", l.scrollTop = l.scrollHeight - l.clientHeight) : s || h(t), !0
                }, d.getInternetExplorerMajorVersion = function() {
                    var t = d.getInternetExplorerMajorVersion.cached = "undefined" != typeof d.getInternetExplorerMajorVersion.cached ? d.getInternetExplorerMajorVersion.cached : function() {
                        for (var t = 3, e = n.createElement("div"), a = e.getElementsByTagName("i");
                            (e.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->") && a[0];);
                        return t > 4 ? t : !1
                    }();
                    return t
                }, d.isInternetExplorer = function() {
                    var t = d.isInternetExplorer.cached = "undefined" != typeof d.isInternetExplorer.cached ? d.isInternetExplorer.cached : Boolean(d.getInternetExplorerMajorVersion());
                    return t
                }, d.emulated = {
                    "pushState": !Boolean(t.history && t.history.pushState && t.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(r.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(r.userAgent)),
                    "hashChange": Boolean(!("onhashchange" in t || "onhashchange" in n) || d.isInternetExplorer() && d.getInternetExplorerMajorVersion() < 8)
                }, d.enabled = !d.emulated.pushState, d.bugs = {
                    "setHash": Boolean(!d.emulated.pushState && "Apple Computer, Inc." === r.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),
                    "safariPoll": Boolean(!d.emulated.pushState && "Apple Computer, Inc." === r.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),
                    "ieDoubleCheck": Boolean(d.isInternetExplorer() && d.getInternetExplorerMajorVersion() < 8),
                    "hashEscape": Boolean(d.isInternetExplorer() && d.getInternetExplorerMajorVersion() < 7)
                }, d.isEmptyObject = function(t) {
                    for (var e in t) return !1;
                    return !0
                }, d.cloneObject = function(t) {
                    var e, a;
                    return t ? (e = c.stringify(t), a = c.parse(e)) : a = {}, a
                }, d.getRootUrl = function() {
                    var t = n.location.protocol + "//" + (n.location.hostname || n.location.host);
                    return n.location.port && (t += ":" + n.location.port), t += "/"
                }, d.getBaseHref = function() {
                    var t = n.getElementsByTagName("base"),
                        e = null,
                        a = "";
                    return 1 === t.length && (e = t[0], a = e.href.replace(/[^\/]+$/, "")), a = a.replace(/\/+$/, ""), a && (a += "/"), a
                }, d.getBaseUrl = function() {
                    var t = d.getBaseHref() || d.getBasePageUrl() || d.getRootUrl();
                    return t
                }, d.getPageUrl = function() {
                    var t, e = d.getState(!1, !1),
                        a = (e || {}).url || n.location.href;
                    return t = a.replace(/\/+$/, "").replace(/[^\/]+$/, function(t) {
                        return /\./.test(t) ? t : t + "/"
                    })
                }, d.getBasePageUrl = function() {
                    var t = n.location.href.replace(/[#\?].*/, "").replace(/[^\/]+$/, function(t) {
                        return /[^\/]$/.test(t) ? "" : t
                    }).replace(/\/+$/, "") + "/";
                    return t
                }, d.getFullUrl = function(t, e) {
                    var a = t,
                        n = t.substring(0, 1);
                    return e = "undefined" == typeof e ? !0 : e, /[a-z]+\:\/\//.test(t) || (a = "/" === n ? d.getRootUrl() + t.replace(/^\/+/, "") : "#" === n ? d.getPageUrl().replace(/#.*/, "") + t : "?" === n ? d.getPageUrl().replace(/[\?#].*/, "") + t : e ? d.getBaseUrl() + t.replace(/^(\.\/)+/, "") : d.getBasePageUrl() + t.replace(/^(\.\/)+/, "")), a.replace(/\#$/, "")
                }, d.getShortUrl = function(t) {
                    var e = t,
                        a = d.getBaseUrl(),
                        n = d.getRootUrl();
                    return d.emulated.pushState && (e = e.replace(a, "")), e = e.replace(n, "/"), d.isTraditionalAnchor(e) && (e = "./" + e), e = e.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
                }, d.store = {}, d.idToState = d.idToState || {}, d.stateToId = d.stateToId || {}, d.urlToId = d.urlToId || {}, d.storedStates = d.storedStates || [], d.savedStates = d.savedStates || [], d.normalizeStore = function() {
                    d.store.idToState = d.store.idToState || {}, d.store.urlToId = d.store.urlToId || {}, d.store.stateToId = d.store.stateToId || {}
                }, d.getState = function(t, e) {
                    "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = !0);
                    var a = d.getLastSavedState();
                    return !a && e && (a = d.createStateObject()), t && (a = d.cloneObject(a), a.url = a.cleanUrl || a.url), a
                }, d.getIdByState = function(t) {
                    var e, a = d.extractId(t.url);
                    if (!a)
                        if (e = d.getStateString(t), "undefined" != typeof d.stateToId[e]) a = d.stateToId[e];
                        else if ("undefined" != typeof d.store.stateToId[e]) a = d.store.stateToId[e];
                    else {
                        for (; a = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), "undefined" != typeof d.idToState[a] || "undefined" != typeof d.store.idToState[a];);
                        d.stateToId[e] = a, d.idToState[a] = t
                    }
                    return a
                }, d.normalizeState = function(t) {
                    var e, a;
                    return t && "object" == typeof t || (t = {}), "undefined" != typeof t.normalized ? t : (t.data && "object" == typeof t.data || (t.data = {}), e = {}, e.normalized = !0, e.title = t.title || "", e.url = d.getFullUrl(d.unescapeString(t.url || n.location.href)), e.hash = d.getShortUrl(e.url), e.data = d.cloneObject(t.data), e.id = d.getIdByState(e), e.cleanUrl = e.url.replace(/\??\&_suid.*/, ""), e.url = e.cleanUrl, a = !d.isEmptyObject(e.data), (e.title || a) && (e.hash = d.getShortUrl(e.url).replace(/\??\&_suid.*/, ""), /\?/.test(e.hash) || (e.hash += "?"), e.hash += "&_suid=" + e.id), e.hashedUrl = d.getFullUrl(e.hash), (d.emulated.pushState || d.bugs.safariPoll) && d.hasUrlDuplicate(e) && (e.url = e.hashedUrl), e)
                }, d.createStateObject = function(t, e, a) {
                    var n = {
                        "data": t,
                        "title": e,
                        "url": a
                    };
                    return n = d.normalizeState(n)
                }, d.getStateById = function(t) {
                    t = String(t);
                    var a = d.idToState[t] || d.store.idToState[t] || e;
                    return a
                }, d.getStateString = function(t) {
                    var e, a, n;
                    return e = d.normalizeState(t), a = {
                        "data": e.data,
                        "title": t.title,
                        "url": t.url
                    }, n = c.stringify(a)
                }, d.getStateId = function(t) {
                    var e, a;
                    return e = d.normalizeState(t), a = e.id
                }, d.getHashByState = function(t) {
                    var e, a;
                    return e = d.normalizeState(t), a = e.hash
                }, d.extractId = function(t) {
                    var e, a, n;
                    return a = /(.*)\&_suid=([0-9]+)$/.exec(t), n = a ? a[1] || t : t, e = a ? String(a[2] || "") : "", e || !1
                }, d.isTraditionalAnchor = function(t) {
                    var e = !/[\/\?\.]/.test(t);
                    return e
                }, d.extractState = function(t, e) {
                    var a, n, r = null;
                    return e = e || !1, a = d.extractId(t), a && (r = d.getStateById(a)), r || (n = d.getFullUrl(t), a = d.getIdByUrl(n) || !1, a && (r = d.getStateById(a)), !r && e && !d.isTraditionalAnchor(t) && (r = d.createStateObject(null, null, n))), r
                }, d.getIdByUrl = function(t) {
                    var a = d.urlToId[t] || d.store.urlToId[t] || e;
                    return a
                }, d.getLastSavedState = function() {
                    return d.savedStates[d.savedStates.length - 1] || e
                }, d.getLastStoredState = function() {
                    return d.storedStates[d.storedStates.length - 1] || e
                }, d.hasUrlDuplicate = function(t) {
                    var e, a = !1;
                    return e = d.extractState(t.url), a = e && e.id !== t.id
                }, d.storeState = function(t) {
                    return d.urlToId[t.url] = t.id, d.storedStates.push(d.cloneObject(t)), t
                }, d.isLastSavedState = function(t) {
                    var e, a, n, r = !1;
                    return d.savedStates.length && (e = t.id, a = d.getLastSavedState(), n = a.id, r = e === n), r
                }, d.saveState = function(t) {
                    return d.isLastSavedState(t) ? !1 : (d.savedStates.push(d.cloneObject(t)), !0)
                }, d.getStateByIndex = function(t) {
                    var e = null;
                    return e = "undefined" == typeof t ? d.savedStates[d.savedStates.length - 1] : 0 > t ? d.savedStates[d.savedStates.length + t] : d.savedStates[t]
                }, d.getHash = function() {
                    var t = d.unescapeHash(n.location.hash);
                    return t
                }, d.unescapeString = function(e) {
                    for (var a, n = e; a = t.unescape(n), a !== n;) n = a;
                    return n
                }, d.unescapeHash = function(t) {
                    var e = d.normalizeHash(t);
                    return e = d.unescapeString(e)
                }, d.normalizeHash = function(t) {
                    var e = t.replace(/[^#]*#/, "").replace(/#.*/, "");
                    return e
                }, d.setHash = function(t, e) {
                    var a, r, i;
                    return e !== !1 && d.busy() ? (d.pushQueue({
                        "scope": d,
                        "callback": d.setHash,
                        "args": arguments,
                        "queue": e
                    }), !1) : (a = d.escapeHash(t), d.busy(!0), r = d.extractState(t, !0), r && !d.emulated.pushState ? d.pushState(r.data, r.title, r.url, !1) : n.location.hash !== a && (d.bugs.setHash ? (i = d.getPageUrl(), d.pushState(null, null, i + "#" + a, !1)) : n.location.hash = a), d)
                }, d.escapeHash = function(e) {
                    var a = d.normalizeHash(e);
                    return a = t.escape(a), d.bugs.hashEscape || (a = a.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), a
                }, d.getHashByUrl = function(t) {
                    var e = String(t).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                    return e = d.unescapeHash(e)
                }, d.setTitle = function(t) {
                    var e, a = t.title;
                    a || (e = d.getStateByIndex(0), e && e.url === t.url && (a = e.title || d.options.initialTitle));
                    try {
                        n.getElementsByTagName("title")[0].innerHTML = a.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                    } catch (r) {}
                    return n.title = a, d
                }, d.queues = [], d.busy = function(t) {
                    if ("undefined" != typeof t ? d.busy.flag = t : "undefined" == typeof d.busy.flag && (d.busy.flag = !1), !d.busy.flag) {
                        s(d.busy.timeout);
                        var e = function() {
                            var t, a, n;
                            if (!d.busy.flag)
                                for (t = d.queues.length - 1; t >= 0; --t) a = d.queues[t], 0 !== a.length && (n = a.shift(), d.fireQueueItem(n), d.busy.timeout = o(e, d.options.busyDelay))
                        };
                        d.busy.timeout = o(e, d.options.busyDelay)
                    }
                    return d.busy.flag
                }, d.busy.flag = !1, d.fireQueueItem = function(t) {
                    return t.callback.apply(t.scope || d, t.args || [])
                }, d.pushQueue = function(t) {
                    return d.queues[t.queue || 0] = d.queues[t.queue || 0] || [], d.queues[t.queue || 0].push(t), d
                }, d.queue = function(t, e) {
                    return "function" == typeof t && (t = {
                        "callback": t
                    }), "undefined" != typeof e && (t.queue = e), d.busy() ? d.pushQueue(t) : d.fireQueueItem(t), d
                }, d.clearQueue = function() {
                    return d.busy.flag = !1, d.queues = [], d
                }, d.stateChanged = !1, d.doubleChecker = !1, d.doubleCheckComplete = function() {
                    return d.stateChanged = !0, d.doubleCheckClear(), d
                }, d.doubleCheckClear = function() {
                    return d.doubleChecker && (s(d.doubleChecker), d.doubleChecker = !1), d
                }, d.doubleCheck = function(t) {
                    return d.stateChanged = !1, d.doubleCheckClear(), d.bugs.ieDoubleCheck && (d.doubleChecker = o(function() {
                        return d.doubleCheckClear(), d.stateChanged || t(), !0
                    }, d.options.doubleCheckInterval)), d
                }, d.safariStatePoll = function() {
                    var e, a = d.extractState(n.location.href);
                    if (!d.isLastSavedState(a)) return e = a, e || (e = d.createStateObject()), d.Adapter.trigger(t, "popstate"), d
                }, d.back = function(t) {
                    return t !== !1 && d.busy() ? (d.pushQueue({
                        "scope": d,
                        "callback": d.back,
                        "args": arguments,
                        "queue": t
                    }), !1) : (d.busy(!0), d.doubleCheck(function() {
                        d.back(!1)
                    }), f.go(-1), !0)
                }, d.forward = function(t) {
                    return t !== !1 && d.busy() ? (d.pushQueue({
                        "scope": d,
                        "callback": d.forward,
                        "args": arguments,
                        "queue": t
                    }), !1) : (d.busy(!0), d.doubleCheck(function() {
                        d.forward(!1)
                    }), f.go(1), !0)
                }, d.go = function(t, e) {
                    var a;
                    if (t > 0)
                        for (a = 1; t >= a; ++a) d.forward(e);
                    else {
                        if (!(0 > t)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                        for (a = -1; a >= t; --a) d.back(e)
                    }
                    return d
                }, d.emulated.pushState) {
                var p = function() {};
                d.pushState = d.pushState || p, d.replaceState = d.replaceState || p
            } else d.onPopState = function(e, a) {
                var r = !everPushed && location.href === origUrl;
                if (!r) {
                    var i, o, s = !1,
                        l = !1;
                    return d.doubleCheckComplete(), i = d.getHash(), i ? (o = d.extractState(i || n.location.href, !0), o ? d.replaceState(o.data, o.title, o.url, !1) : (d.Adapter.trigger(t, "anchorchange"), d.busy(!1)), d.expectedStateId = !1, !1) : (s = d.Adapter.extractEventData("state", e, a) || !1, l = s ? d.getStateById(s) : d.expectedStateId ? d.getStateById(d.expectedStateId) : d.extractState(n.location.href), l || (l = d.createStateObject(null, null, n.location.href)), d.expectedStateId = !1, d.isLastSavedState(l) ? (d.busy(!1), !1) : (d.storeState(l), d.saveState(l), d.setTitle(l), d.Adapter.trigger(t, "statechange"), d.busy(!1), !0))
                }
            }, d.Adapter.bind(t, "popstate", d.onPopState), d.pushState = function(e, a, n, r) {
                if (d.getHashByUrl(n) && d.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (r !== !1 && d.busy()) return d.pushQueue({
                    "scope": d,
                    "callback": d.pushState,
                    "args": arguments,
                    "queue": r
                }), !1;
                d.busy(!0);
                var i = d.createStateObject(e, a, n);
                return d.isLastSavedState(i) ? d.busy(!1) : (d.storeState(i), d.expectedStateId = i.id, f.pushState(i.id, i.title, i.url), d.Adapter.trigger(t, "popstate")), !0
            }, d.replaceState = function(e, a, n, r) {
                if (d.getHashByUrl(n) && d.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (r !== !1 && d.busy()) return d.pushQueue({
                    "scope": d,
                    "callback": d.replaceState,
                    "args": arguments,
                    "queue": r
                }), !1;
                d.busy(!0);
                var i = d.createStateObject(e, a, n);
                return d.isLastSavedState(i) ? d.busy(!1) : (d.storeState(i), d.expectedStateId = i.id, f.replaceState(i.id, i.title, i.url), d.Adapter.trigger(t, "popstate")), !0
            };
            if (i) {
                try {
                    d.store = c.parse(i.getItem("History.store")) || {}
                } catch (g) {
                    d.store = {}
                }
                d.normalizeStore()
            } else d.store = {}, d.normalizeStore();
            d.Adapter.bind(t, "beforeunload", d.clearAllIntervals), d.Adapter.bind(t, "unload", d.clearAllIntervals), d.saveState(d.storeState(d.extractState(n.location.href, !0))), i && (d.onUnload = function() {
                var t, e;
                try {
                    t = c.parse(i.getItem("History.store")) || {}
                } catch (a) {
                    t = {}
                }
                t.idToState = t.idToState || {}, t.urlToId = t.urlToId || {}, t.stateToId = t.stateToId || {};
                for (e in d.idToState) d.idToState.hasOwnProperty(e) && (t.idToState[e] = d.idToState[e]);
                for (e in d.urlToId) d.urlToId.hasOwnProperty(e) && (t.urlToId[e] = d.urlToId[e]);
                for (e in d.stateToId) d.stateToId.hasOwnProperty(e) && (t.stateToId[e] = d.stateToId[e]);
                d.store = t, d.normalizeStore(), i.setItem("History.store", c.stringify(t))
            }, d.intervalList.push(l(d.onUnload, d.options.storeInterval)), d.Adapter.bind(t, "beforeunload", d.onUnload), d.Adapter.bind(t, "unload", d.onUnload)), d.emulated.pushState || (d.bugs.safariPoll && d.intervalList.push(l(d.safariStatePoll, d.options.safariPollInterval)), ("Apple Computer, Inc." === r.vendor || "Mozilla" === (r.appCodeName || "")) && (d.Adapter.bind(t, "hashchange", function() {
                d.Adapter.trigger(t, "popstate")
            }), d.getHash() && d.Adapter.onDomLoad(function() {
                d.Adapter.trigger(t, "hashchange")
            })))
        }, d.init()
    }(window);
var home = function() {
    function t(t, e) {
        function a(t) {
            var e, a = $(".overlay"),
                i = $("body"),
                l = $('<div class="modal"><a href="#" class="modal-close">close</a><div class="modal-loading"><em>loading...</em></div></div>'),
                u = $(document).scrollTop();
            s = !0, a.length && a.remove(), a = $('<div class="overlay"></div>').height(i.height()), e = 400 > u ? 400 : u + 200, l.css("margin-top", e), a.append(l), i.append(a), $(".modal-close").click(function(t) {
                r(), t.preventDefault()
            }), l.click(function(t) {
                t.stopPropagation()
            }), a.bind("click", r), $(document).bind("keyup", n), $.ajax({
                "url": "/hat",
                "data": {
                    "id": t
                },
                "dataType": "json",
                "success": function(e) {
                    $(".modal-loading").replaceWith(e.html), o(t), a.height($(document).height())
                }
            })
        }

        function n(t) {
            27 == t.which && r()
        }

        function r() {
            everPushed = !0, History.pushState({}, window.document.title, "/")
        }

        function i() {
            s = !1, $(".overlay").fadeOut("fast", function() {
                $(this).remove()
            }), $(document).unbind("keyup", n)
        }

        function o() {
            $(".join-winter-bash").click(function(t) {
                $(".gotta-join").html("<em>Joining...</em>"), $.ajax({
                    "type": "POST",
                    "url": "/join",
                    "data": {
                        "fkey": fkey
                    },
                    "dataType": "json",
                    "complete": function() {
                        $(".gotta-join").html("<em>Joined!</em>")
                    }
                }), t.preventDefault()
            })
        }
        var s = !1;
        History.Adapter.bind(window, "statechange", function() {
            var t = History.getState(),
                e = t.data.hatId,
                n = t.data.slug;
            i(), e && a(e, n)
        }), $(".box").click(function(t) {
            var e = parseInt(this.id.substring("hat-".length), 10),
                a = $(this).attr("href").substring(1);
            everPushed = !0, History.pushState({
                "hatId": e,
                "slug": a
            }, window.document.title, a), t.stopPropagation(), t.preventDefault()
        }), t && e && (everPushed = !0, History.replaceState({
            "hatId": t,
            "slug": e
        }, window.document.title, e), s || setTimeout(function() {
            a(t, e)
        }, 500))
    }
    return {
        "init": t
    }
}();
! function() {
    function t() {
        var t = null;
        Math.random() < .03 && (t = $("<canvas width=25 height=27 />"), t[0].getContext("2d").drawImage(H, 25 * -(5 * Math.random() | 0), 0));
        var e = new h(null, t);
        return t && (e.rotate = !0), e
    }

    function e(e) {
        c("/assets/images/snow/flakes.png", function(a) {
            H = a;
            for (var n = 0; b > n; n++) T.push(t());
            e()
        })
    }

    function a() {
        $("<img src='/assets/images/snow/snowlogo.png' />").css({
            "position": "absolute",
            "left": 735,
            "top": 140
        }).prependTo("section.wrapper:first")
    }

    function n() {
        $(x).css("background", "url(/assets/images/snow/snow-flakes.png)")
    }

    function r() {
        c("/assets/images/snow/logoshape.png", function(t, e, a) {
            var n = $("<canvas width=" + e + " height=" + a + " style='display: none;' />")[0].getContext("2d");
            n.drawImage(t, 0, 0);
            var r = (n.getImageData(0, 0, 158, 158), 679),
                o = 123;
            i(n).done(function(t) {
                for (var e = 0; e < t.length; e++) {
                    var a = t[e],
                        n = a.canvas,
                        i = e / t.length;.5 > i ? i = Math.sqrt(2 * i) / 2 : (i = 1 - i, i = Math.sqrt(2 * i) / 2, i = 1 - i), T.push(new h({
                        "x": (r + a.x) / C,
                        "y": (o + a.y) / C,
                        "time": 7 + 20 * i
                    }, $(n)))
                }
            })
        })
    }

    function i(t) {
        function e() {
            do {
                if (!I) return !1;
                x = 2 * x % y, x === v && (I = !1), m = x - (x / 3 | 0)
            } while (m > f);
            return m === f && (m = 0), !0
        }

        function a() {
            for (var t = j(), r = !0; e();)
                if (n(), j() - t > 100) {
                    setTimeout(a, 100), r = !1;
                    break
                }
            r && i()
        }

        function n() {
            S = m % h, b = m / h | 0;
            var e = o(p, S, b, 4, h);
            if (!(3 > e)) {
                var a = e - .5,
                    n = l(a),
                    r = Math.ceil(a),
                    i = {
                        "canvas": n,
                        "x": S,
                        "y": b
                    };
                u.push(i), (!w || w.y < i.y) && (w = i), t.drawImage(n, i.x - r, i.y - r), p = t.getImageData(0, 0, h, d)
            }
        }

        function r(t) {
            return t * t
        }

        function i() {
            u.sort(function(t, e) {
                var a = r(t.x - w.x) + r(t.y - w.y),
                    n = r(e.x - w.x) + r(e.y - w.y);
                return a - n
            }), s.resolve(u)
        }
        var s = $.Deferred(),
            u = [],
            c = t.canvas,
            h = c.width,
            d = c.height,
            f = h * d,
            p = t.getImageData(0, 0, h, d),
            g = Math.ceil(Math.log(f / 2) / Math.log(3)) + 1,
            y = Math.pow(3, g),
            v = Math.random() * y | 0;
        v % 3 === 0 && v++;
        var m, S, b, w, x = v,
            I = !0;
        return a(), s
    }

    function o(t, e, a, n, r) {
        function i(e, a) {
            return 0 === t.data[4 * (a * r + e)]
        }
        for (var o = 0; n >= o; o++)
            for (var s = (Math.sqrt(o), -o); o >= s; s++) {
                var l = i(e + o, a + s) && i(e - o, a + s) && i(e + s, a + o) && i(e + s, a - o);
                if (!l) return o - 1
            }
        return n
    }

    function s() {
        function e(n) {
            var r, i = Math.min(n - a, 100);
            a = n, I.clearRect(-300, 0, x.width, x.height);
            for (var o, s = 0; s < T.length; s++) r = T[s], r.step(i), o = r, r.draw(I), r.p[1] > 500 / C && !r.target && (T[s] = t());
            A(e)
        }
        var a = j();
        A(function(t) {
            a = t - (j() - a), e(t)
        })
    }

    function l(t, e) {
        var a = .8 + .2 * Math.random(),
            n = Math.random() * Math.PI,
            r = Math.ceil(t),
            i = 2 * r + 1,
            o = $("<canvas width=" + i + " height=" + i + " />")[0],
            s = o.getContext("2d");
        return s.translate(r, r), s.rotate(n), s.scale(a, 1), s.fillStyle = "rgba(" + (e || "255,255,255") + "," + (.4 + .4 * Math.random()) + ")", s.beginPath(), s.arc(0, 0, t, 0, 2 * Math.PI), s.closePath(), s.fill(), o
    }

    function u() {
        for (var t = $("<canvas width=500 height=500 />").css("display", "none").appendTo("body"), e = t[0].getContext("2d"), a = l(5), n = 0, r = j(); j() - r < 100;) e.drawImage(a, 500 * Math.random(), 500 * Math.random()), n++;
        return t.remove(), n
    }

    function c(t, e) {
        var a = $("<img />").attr("src", t).css({
                "position": "absolute",
                "opacity": 0
            }).appendTo("body"),
            n = a[0],
            r = function() {
                var t = n.naturalWidth || n.width,
                    r = n.naturalHeight || n.height;
                a.remove(), e(n, t, r)
            };
        n.complete || "complete" == n.readyState ? r() : n.onload = r
    }

    function h(t, e) {
        if (this.temp = -4 * Math.random(), this.Vmax_z = .5 + Math.random(), this.t = 0, this.tdelay = 10 * Math.random(), t ? (this.p = [t.x - 0 + 0 * Math.random(), t.y - t.time * this.Vmax_z - 0 * Math.random()], this.target = t, this.tdelay = -t.time) : this.p = [(1560 * Math.random() - 300) / C, 500 * Math.random() / C - 500 / C], this.V = [0, this.Vmax_z], this.D = this.temp > -.061 ? .04 : .015 * Math.pow(-this.temp, -.35), this.rho = (this.temp <= -1 ? .17 : .724) / this.D, this.R = 2 * Math.random(), this.omega = (.25 + .08 * Math.random()) * Math.PI * (Math.random() > .5 ? 1 : -1), this.lastTotalV = [0, 0], e) this.div = e;
        else {
            var a = 20 * Math.sqrt(this.D) + 1;
            this.div = $(l(a))
        }
        this.pixelWidth = this.div[0].width, this.pixelHeight = this.div[0].height, this.m = this.rho * this.D * this.D, this.dragFactor = this.m * B / (this.Vmax_z * this.Vmax_z), this.draw(I)
    }

    function d(t, e, a) {
        a[0] = t[0] + e[0], a[1] = t[1] + e[1]
    }

    function f(t, e, a) {
        a[0] = t * e[0], a[1] = t * e[1]
    }

    function p(t) {
        return t[0] * t[0] + t[1] * t[1]
    }

    function g(t) {
        return Math.sqrt(p(t))
    }

    function y() {
        $(document).on("mousemove", function(t) {
            F = (t.pageX - $("#snow").offset().left) / C, W = (t.pageY - $("#snow").offset().top) / C, Q[0] = v(F, W, .1, 3, -2, 500)
        })
    }

    function v(t, e, a, n, r, i) {
        var o = j(),
            s = [0, 0],
            l = [0, 0],
            u = [0, 0];
        return function(c, h, p) {
            if (s[0] = t - c, s[1] = e - h, !(Math.abs(s[0]) > n || Math.abs(s[1]) > n)) {
                var y = g(s);
                if (!(y > n || a > y)) {
                    f(1 / y, s, l);
                    var v = (y - a) / (n - a);
                    v = Math.sin(Math.PI * v), i && (v *= Math.pow(.5, (j() - o) / i)), f(r * v, l, u), d(p, u, p)
                }
            }
        }
    }

    function m(t, e, a) {
        a[0] = 0, a[1] = 0;
        for (var n = 0; n < Q.length; n++) Q[n](t, e, a)
    }
    var S, b, w, x, I, H, T = [],
        C = 50,
        j = Date.now || function() {
            return (new Date).getTime()
        },
        M = 0,
        k = function(t) {
            return window[t + (t ? "R" : "r") + "equestAnimationFrame"]
        },
        A = k("") || k("webkit") || k("moz") || k("o") || k("ms") || function(t) {
            var e = j(),
                a = e - M;
            M = e, setTimeout(function() {
                t(j())
            }, 40 - a % 40)
        };
    home.snow = function() {
        return $("<canvas />")[0].getContext ? (S = u() / 15 | 0, w = S > 200, b = Math.max(0, Math.min(300, w ? S - 120 : S)), x = $("#snowcanvas")[0], I = x.getContext("2d"), I.translate(300, 0), w ? r() : a(), 50 > b ? (n(), void 0) : (e(s), y(), void 0)) : ($("#snowcanvas").remove(), x = $("<div id='snowcanvas' />").appendTo("#snow"), a(), n(), void 0)
    };
    var B = 9.81,
        U = [0, 0],
        O = [0, 0],
        E = [0, 0],
        P = [0, 0],
        D = [0, 0],
        z = [0, 0],
        q = [0, 0],
        L = [0, 0],
        V = [0, 0],
        N = [0, 0],
        J = [0, 0];
    h.prototype = {
        "step": function(t) {
            var e = t / 1e3;
            m(this.p[0], this.p[1], U), f(-1, this.V, L), d(U, L, O), E[0] = g(O) / g(this.V) * this.omega * this.R * -Math.sin(this.omega * (this.t + this.tdelay)), E[1] = 0, f(g(O) * this.dragFactor, O, P), D[0] = 0, D[1] = B * this.m, d(D, P, L), f(1 / this.m, L, z), d(this.V, E, this.lastTotalV), f(e, this.lastTotalV, L), f(.5 * e * e, z, V), d(L, V, q), d(this.p, q, this.p), z[0] > 100 ? (this.V[0] = U[0], this.V[1] = U[1]) : (f(e, z, L), d(L, this.V, this.V)), this.t += e
        },
        "draw": function(t) {
            N[0] = this.p[0], N[1] = this.p[1];
            var e, a;
            if (this.target) {
                if (this.t >= this.target.time) N[0] = this.target.x, N[1] = this.target.y;
                else if (this.t < this.target.time - 5);
                else {
                    var n = (this.target.time - this.t) / 5;
                    J[0] = this.target.x, J[1] = this.target.y - (this.target.time - this.t) * this.Vmax_z, f(n, N, L), f(1 - n, J, V), d(L, V, N)
                }
                e = N[0] * C - this.pixelWidth / 2 | 0, a = N[1] * C - this.pixelHeight / 2 | 0
            } else e = N[0] * C - this.pixelWidth / 2, a = N[1] * C - this.pixelHeight / 2;
            t.save(), a > 360 && (t.globalAlpha = Math.max((410 - a) / 50, 0)), this.rotate && S > 600 ? (t.translate(e, a), t.rotate(this.lastTotalV[0] / 2), t.drawImage(this.div[0], -this.pixelWidth / 2, -this.pixelHeight / 2)) : t.drawImage(this.div[0], e, a), t.restore()
        }
    };
    var F, W, Q = [v(0, 0, 1, 2, 0), v(12, 2, 1, 5, -.1), v(10, 9, 1, 4, -.1), v(4, 7, 1, 4, .1)]
}();